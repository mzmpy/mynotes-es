import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { transformSync } from 'esbuild'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default () => {
  return {
    name: 'hot-module-replacement-plugin',
    setup(build) {
      build.onResolve({ filter: /\.[tj]sx$/, namespace: 'file' }, async (args) => {
        const resolvedPath = await build.resolve(args.path, {
          resolveDir: args.resolveDir,
          kind: args.kind,
        })
        
        if (resolvedPath.errors.length > 0) {
          return { errors: resolvedPath.errors }
        }

        return {
          path: resolvedPath.path,
          namespace: 'HOT_BLOCK'
        }
      })

      build.onResolve({ filter: /\.[tj]sx$/, namespace: 'HOT_BLOCK_TRANSFORM' }, async (args) => {
        const resolvedPath = await build.resolve(args.path, {
          resolveDir: args.resolveDir,
          kind: args.kind,
        })
        
        if (resolvedPath.errors.length > 0) {
          return { errors: resolvedPath.errors }
        }

        return {
          path: resolvedPath.path,
          namespace: 'HOT_BLOCK'
        }
      })

      build.onLoad({ filter: /.*/, namespace: 'HOT_BLOCK' }, async (args) => {
        const contents =
        `const hot_block_export = await import('${args.path.replaceAll(path.sep, '/')}')\n` +
        `if(!hot_block_export.default) throw new Error('TSX/JSX file must have vue component as default export.')\n` +
        `export default hot_block_export.default\n` +
        `export * from '${args.path.replaceAll(path.sep, '/')}'`

        return {
          contents: contents,
          loader: path.extname(args.path).slice(1)
        }
      })

      build.onResolve({ filter: /.*/, namespace: 'HOT_BLOCK' }, async (args) => {
        return {
          path: args.path,
          namespace: 'HOT_BLOCK_TRANSFORM'
        }
      })

      build.onLoad({ filter: /.*/, namespace: 'HOT_BLOCK_TRANSFORM' }, async (args) => {
        const loader = path.extname(args.path).slice(1)

        const transformResult = transformSync(await fs.promises.readFile(args.path, { encoding: 'utf-8' }), {
          loader: loader,
          jsx: 'preserve',
          format: 'esm'
        })

        const id = args.path.replaceAll(path.sep, '/')
        let contents =
        `import * as __HMR__ from 'hmr:runtime'\n` +
        `if(import.meta) {\n` +
        `  import.meta.hot = __HMR__.createHotContext('${id}')\n` +
        `}\n`
        contents += transformResult.code
        contents += /^[tj]sx$/.test(loader)
          ? `if(!(stdin_default && stdin_default.setup && stdin_default.setup instanceof Function)) {\n` +
            `  throw new Error('TSX/JSX file must have component as default export.')\n` +
            `} else {\n` +
            `  if(window.__VUE_HMR_RUNTIME__ && import.meta && import.meta.hot) {\n` +
            `    const api = window.__VUE_HMR_RUNTIME__\n` +
            `    stdin_default.__hmrId = '${id}'\n` +
            `    import.meta.hot.accept((__hmrId, ins) => {\n` +
            // `      const doRerender = ins.render && ins.setup.toString() === stdin_default.setup.toString()\n` +
            `      if(!api.createRecord(__hmrId, ins)) {\n` +
            `        api.rerender(__hmrId, ins.render || undefined)\n` +
            `      } else {\n` +
            `        api.reload(__hmrId, ins)\n` +
            `      }\n` +
            `    })\n` +
            `  }\n` +
            `}\n`
          : ''

        return {
          contents: contents,
          loader: loader,
          resolveDir: path.dirname(args.path)
        }
      })

      build.onResolve({ filter: /^hmr:runtime$/ }, async (args) => {
        return {
          path: 'hmr:runtime',
          namespace: 'HMR_RUNTIME'
        }
      })

      build.onLoad({ filter: /.*/, namespace: 'HMR_RUNTIME' }, async (args) => {
        const contents = await fs.promises.readFile(path.resolve(__dirname, 'lib/hmr-runtime.js'), { encoding: 'utf-8' })

        return {
          contents: contents,
          loader: 'js'
        }
      })
    }
  }
}
