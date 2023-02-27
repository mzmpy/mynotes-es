const koa = require('koa')
const koaStatic = require('koa-static')
const koaMount = require('koa-mount')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')

const esbuild = require('esbuild')
const esbuildPluginParcelCss = require('../../plugins/esbuild-plugin-parcel-css')
const esbuildPluginHtml = require('../../plugins/esbuild-plugin-html')
const esbuildPluginSmartImport = require('../../plugins/esbuild-plugin-elementplus-smartimport')
const esbuildPluginJsxImportSource = require('../../plugins/esbuild-plugin-jsx-import-source')
const esbuildPluginMonacoEditor = require('../../plugins/esbuild-plugin-monaco-editor')

const fs = require('fs')
const path = require('path')

const clearLastLines = (count) => {
  process.stdout.moveCursor(0, -count)
  process.stdout.clearScreenDown()
}

const prefix = '/mynotes-es'

let timeInMS = new Date()

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  // minify: true,
  splitting: true,
  format: 'esm',
  loader: {
    '.js': 'jsx',
    '.ttf': 'file',
    '.woff': 'file',
    '.woff2': 'file'
  },
  assetNames: 'assets/[ext]/[name]-[hash]',
  chunkNames: 'chunks/[ext]/[name]-[hash]',
  // external: ['vue', 'element-plus'],
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  watch: {
    onRebuild(error) {
      if(error) {
        console.log(`\nWatch build failed: ${error}`)
      }
    }
  },
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
    esbuildPluginMonacoEditor()
  ],
  outdir: './dist',
  metafile: true
}).then((result) => {
  fs.writeFile(path.resolve(process.cwd(), './dist/outputMetafile.json'), JSON.stringify(result, null, 2), 'utf-8', (err) => {
    if(err) {
      console.log(err)
    }
  })

  timeInMS = new Date() - timeInMS
  console.log(`\nBuilding is done in ${timeInMS} ms.`)
  setTimeout(() => {
    clearLastLines(1)
  }, 3000)
})

const proxy = new koa()
const app = new koa()

app.use(historyApiFallback({ whiteList: [prefix] }))
app.use(koaStatic(process.cwd() + '/dist/'))

proxy.use(koaMount(prefix, app))
proxy.listen(4375)
console.log(`Server running at http://127.0.0.1:4375${prefix}/.`)
