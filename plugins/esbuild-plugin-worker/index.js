// This plugin lets you use web worker scripts the same way you do with Webpack's worker-loader.
import path from 'path'
import esbuild from 'esbuild'
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill'

export default () => { 
  return {
    name: 'worker-plugin',
    setup(build) {
      const outdir = build.initialOptions.outdir ?? ''

      build.onResolve({ filter: /worker(.[jt]s)?\?worker$/, namespace: 'file' }, async (args) => {
        const resolvedPath = await build.resolve(args.path, {
          resolveDir: args.resolveDir,
          kind: args.kind,
        })
        
        if (resolvedPath.errors.length > 0) {
          return { errors: resolvedPath.errors }
        }

        return {
          path: resolvedPath.path,
          namespace: 'WEB_WORKER',
          pluginData: { importer: args.importer }
        }
      })
      build.onLoad({ filter: /.*/, namespace: 'WEB_WORKER' }, async args => {
        const importPath = args.path
        const outFileName = path.basename(importPath).replace(/\.ts$/, '.js')

        // This one depends on your file structure
        const outfile = path.join(outdir || './dist', 'worker', outFileName)

        try {
          await esbuild.build({
            entryPoints: [importPath],
            outfile: outfile,
            sourcemap: true,
            // minify: true,
            bundle: true,
            format: 'iife',
            plugins: [
              nodeModulesPolyfillPlugin({
                modules: {
                  path: true
                }
              })
            ]
          })

          return {
            contents: `// This file is generated by esbuild to expose the worker script as a class, like Webpack's worker-loader\n` +
            `  export default class {\n` +
            `    constructor() {\n` +
            `      // This path depends on how you serve your files\n` +
            `      return new Worker('./worker/${outFileName}')\n` +
            `    }\n` +
            `  }\n`,
            resolveDir: './'
          }
        } catch (err) {
          console.error('Could not build worker script:', err)
        }
      })
    }
  }
}