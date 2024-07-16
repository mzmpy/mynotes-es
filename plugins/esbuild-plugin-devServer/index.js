import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { transformSync } from 'esbuild'

import koa from 'koa'
import koaStatic from 'koa-static'
import koaMount from 'koa-mount'
import WebSocket, { WebSocketServer } from 'ws'
import * as chokidar from 'chokidar'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default (options={ prefix: '', hot: true }) => {
  let buildContext
  let lastBuildResult
  let timeInMS = new Date()
  const proxy = new koa()
  const app = new koa()

  app.use(koaStatic(process.cwd() + '/dist/'))

  proxy.use(koaMount(options.prefix, app))
  proxy.listen(4375)

  const wss = new WebSocketServer({
      port:8080
  })

  let stdoutCount = 0

  wss.on('connection', (ws) => {
    ws.on('error', (error) => {
      console.log(`WebSocketServer Error: ${error}`)
    })

    ws.on('message', (msg) => {
      console.log('\n' + msg)
      stdoutCount += 1
      setTimeout(() => {
        clearLastLines(2)
        stdoutCount -= stdoutCount > 0 ? 1 : 0
      }, 3000)
    })
  })

  return {
    name: 'esbuild-plugin-devServer',
    setup(build) {
      if(options.hot) {
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
              `      if(!api.createRecord(__hmrId, ins)) {\n` +
              `        const fn = (_ctx, _cache, $props, $setup, $data, $options) => {\n` +
              `          const render = _ctx?.$ ? ins.setup($props, _ctx.$.setupContext) : () => {}\n` +
              `          return render()\n` +
              `        }\n` +
              `        api.rerender(__hmrId, fn)\n` +
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

      build.onStart(async () => {
        if(buildContext) return

        buildContext = await build.esbuild.context(build.initialOptions)
        lastBuildResult = await Rebuild(buildContext)
        timeInMS = new Date() - timeInMS
        console.log(`First Building is done in ${timeInMS} ms.`)
        console.log(`Server running at http://127.0.0.1:4375${options.prefix}/.`)

        if(options.hot) {
          chokidar.watch('./src', {
            ignored: /\.d\.ts$/,
            ignoreInitial: true
          }).on('all', async (eventName, filepath) => {
            let newBuildResult = await Rebuild(buildContext)

            const msg = { type: 'reload' }
            if(lastBuildResult && !lastBuildResult.errors.length) {
              const lastInputsSet = new Set(
                Object.keys(lastBuildResult.metafile.inputs)
              )
              const lastInputToOutput = Object.entries(
                lastBuildResult.metafile.outputs
              ).reduce((acc, [outputFile, output]) => {
                Object.keys(output.inputs).forEach((input) => {
                  if (lastInputsSet.has(input)) {
                    acc[input] = outputFile
                  }
                })
                return acc
              }, {})

              const newInputsSet = new Set(Object.keys(newBuildResult.metafile.inputs))
              const newInputToOutput = Object.entries(
                newBuildResult.metafile.outputs
              ).reduce((acc, [outputFile, output]) => {
                Object.keys(output.inputs).forEach((input) => {
                  if (newInputsSet.has(input)) {
                    // 可能有人担心出现一个input对应多个ouputFile的情况，但实际上
                    // esbuild里如果一个fs file被导入到多个files时，esbuild会先将
                    // 这个fs file先build成一个单独的outputFile，然后再引用
                    acc[input] = outputFile
                  }
                })
                return acc
              }, {})

              const HMR_CONTEXT = []
              Object.keys(newBuildResult.metafile.inputs).forEach((input) => {
                const isTJSX = input.endsWith('.jsx') || input.endsWith('.tsx')
                if(lastInputToOutput[input] !== newInputToOutput[input] && isTJSX) {
                  // output relate to the real file that esbuild generate and write into ./dist
                  const output = newBuildResult.metafile.outputs[newInputToOutput[input]]
                  const __hmrId = path.resolve(process.cwd(), dropNamespace(input)).replaceAll(path.sep, '/')
                  const __hmrMap = {}
                  if(output.entryPoint && __hmrId === path.resolve(process.cwd(), dropNamespace(output.entryPoint)).replaceAll(path.sep, '/')) {
                    __hmrMap[__hmrId] = 'http://127.0.0.1:4375/mynotes-es/' + newInputToOutput[input].replace(/^dist\//, '')
                  } else {
                    for(const outputFile in newBuildResult.metafile.outputs) {
                      const output = newBuildResult.metafile.outputs[outputFile]
                      if(output.entryPoint && output.imports.find((i) => i.path === newInputToOutput[input])) {
                        __hmrMap[__hmrId] = 'http://127.0.0.1:4375/mynotes-es/' + outputFile.replace(/^dist\//, '')
                        if(output.exports?.length === 0) __hmrMap.isEntry = true
                      }
                    }
                  }
                  HMR_CONTEXT.push({
                    __hmrId: __hmrId,
                    __hmrUrl: __hmrMap[__hmrId],
                    isEntry: __hmrMap.isEntry
                  })
                }
              })

              msg.type = 'hmr'
              msg.HMR_CONTEXT = HMR_CONTEXT
            }

            // console.log(msg)
            wss.clients.forEach((client) => {
              if(client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(msg))
              }
            })

            lastBuildResult = newBuildResult
          })
        }
      })
    }
  }
}

const clearLastLines = (count) => {
  process.stdout.moveCursor(0, -count)
  process.stdout.clearScreenDown()
}

async function Rebuild(ctx) {
  const result = await ctx.rebuild()

  await fs.promises.writeFile(path.resolve(process.cwd(), './dist/outputMetafile.json'), JSON.stringify(result, null, 2), 'utf-8')

  return result
}

function dropNamespace(filepath) {
  const split = filepath.split(':')
  let test = []
  for(let i=0; i<split.length; i++) {
    test.unshift(split[split.length-1-i])
    const fspath = test.join(':')
    if(fs.existsSync(fspath)) return fspath
  }
  return filepath
}
