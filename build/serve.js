import koa from 'koa'
import koaStatic from 'koa-static'
import koaMount from 'koa-mount'
import WebSocket, { WebSocketServer } from 'ws'
import * as chokidar from 'chokidar'

import esbuild from 'esbuild'
import esbuildPluginParcelCss from '../plugins/esbuild-plugin-parcel-css/index.js'
import esbuildPluginHtml from '../plugins/esbuild-plugin-html/index.js'
import esbuildPluginSmartImport from '../plugins/esbuild-plugin-elementplus-smartimport/index.js'
import esbuildPluginJsxImportSource, { esbuildMdxJsxImportSource } from '../plugins/esbuild-plugin-jsx-import-source/index.js'
import esbuildPluginMonacoEditor from '../plugins/esbuild-plugin-monaco-editor/index.js'
import esbuildPluginMdxToVueComponent from '../plugins/esbuild-plugin-mdx-to-vueComponent/index.js'
import esbuildMDX from '@mdx-js/esbuild'
import esbuildPluginNoteRoute from '../plugins/esbuild-plugin-note-route/index.js'
import esbuildPluginHmr from '../plugins/esbuild-plugin-hmr/index.js'
import esbuildPluginCopy from 'esbuild-plugin-copy'
import esbuildPluginClean from 'esbuild-plugin-clean'
import esbuildPluginInlineImage from 'esbuild-plugin-inline-image'

import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

import fs from 'fs'
import path from 'path'

const prefix = '/mynotes-es'
const DRACOPATH = '/resource/three/gltf'
const MODELSRESOURCEPATH = '/resource/three/models'

let timeInMS = new Date()

let ctx = await esbuild.context({
  entryPoints: ['./src/index.js', 'vue-router'],
  bundle: true,
  // minify: true,
  splitting: true,
  format: 'esm',
  sourcemap: true,
  supported: {
    'import-meta': true,
  },
  publicPath: 'http://127.0.0.1:4375/mynotes-es',
  platform: 'browser',
  target: 'esnext',
  alias: {
    '@/*': './src/*',
    '@images/*': 'src/assets/images/*',
    '@models3d/*': 'src/assets/models3d/*',
    '@mdx-constituents/*': 'src/components/mdx/constituents/*',
    '@mdx-utils/*': 'src/components/mdx/constituents/utils/*',
    '@commonImg': 'src/components/mdx/constituents/utils/commonImg/index.jsx'
  },
  loader: {
    '.js': 'jsx',
    '.ttf': 'file',
    '.woff': 'file',
    '.woff2': 'file'
  },
  define: {
    DRACOPATH: `'${prefix + DRACOPATH}/'`,
    MODELSRESOURCEPATH: `'${prefix + MODELSRESOURCEPATH}'`,
  },
  entryNames: '[name]-[hash]',
  assetNames: 'assets/[ext]/[name]-[hash]',
  chunkNames: 'chunks/[ext]/[name]-[hash]',
  // external: ['vue', 'element-plus'],
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  plugins: [
    esbuildPluginParcelCss({
      cssModules: {
        pattern: '[name]-[hash]-[local]'
      }
    }),
    esbuildPluginHtml({
      source: './static/index.html',
      module: true
    }),
    esbuildPluginSmartImport(),
    esbuildPluginJsxImportSource({
      jsxImportSource: 'vue'
    }),
    esbuildPluginMonacoEditor(),
    esbuildPluginMdxToVueComponent({
      include: ['./src/router/routes']
    }), // This plugin must be front of plugin esbuildMDX, just like what the order is shown here.
    esbuildMDX({
      providerImportSource: '@mdx-js/vue',
      jsxRuntime: 'classic',
      pragma: 'MDX_VUE_JSX_IMPORT_SOURCE.h',
      pragmaFrag: 'MDX_VUE_JSX_IMPORT_SOURCE.Fragment',
      pragmaImportSource: esbuildMdxJsxImportSource(),
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeHighlight, rehypeKatex]
    }),
    esbuildPluginNoteRoute({
      resolveDir: './src/components/mdx/.docs',
      dirReg: /\/\.docs\/?$/,
      type: true
    }),
    esbuildPluginHmr(),
    esbuildPluginCopy({
      assets: [
        {
          from: ['./src/assets/models3d/**/*'],
          to: [`.${MODELSRESOURCEPATH}`]
        },
        {
          from: ['./node_modules/three/examples/jsm/libs/draco/gltf/**/*'],
          to: [`.${DRACOPATH}`]
        }
      ]
    }),
    esbuildPluginClean({
      patterns: ['./dist/*']
    }),
    esbuildPluginInlineImage()
  ],
  outdir: './dist',
  metafile: true
})

let lastBuildResult = await Rebuild(ctx)

timeInMS = new Date() - timeInMS
console.log(`First Building is done in ${timeInMS} ms.`)

const proxy = new koa()
const app = new koa()

app.use(koaStatic(process.cwd() + '/dist/'))

proxy.use(koaMount(prefix, app))
proxy.listen(4375)
console.log(`Server running at http://127.0.0.1:4375${prefix}/.`)

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

chokidar.watch('./src', {
  ignoreInitial: true
}).on('all', async (eventName, filepath) => {
  let newBuildResult = await Rebuild(ctx)

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
