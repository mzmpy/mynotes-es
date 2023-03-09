import koa from 'koa'
import koaStatic from 'koa-static'
import koaMount from 'koa-mount'
import { historyApiFallback } from 'koa2-connect-history-api-fallback'

import esbuild from 'esbuild'
import esbuildPluginParcelCss from '../plugins/esbuild-plugin-parcel-css/index.js'
import esbuildPluginHtml from '../plugins/esbuild-plugin-html/index.js'
import esbuildPluginSmartImport from '../plugins/esbuild-plugin-elementplus-smartimport/index.js'
import esbuildPluginJsxImportSource, { esbuildMdxJsxImportSource } from '../plugins/esbuild-plugin-jsx-import-source/index.js'
import esbuildPluginMonacoEditor from '../plugins/esbuild-plugin-monaco-editor/index.js'
import esbuildPluginMdxToVueComponent from '../plugins/esbuild-plugin-mdx-to-vueComponent/index.js'
import esbuildMDX from '@mdx-js/esbuild'
import esbuildPluginNoteRoute from '../plugins/esbuild-plugin-note-route/index.js'

import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

import fs from 'fs'
import path from 'path'

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
  sourcemap: true,
  alias: {
    '@/*': './src/*'
  },
  loader: {
    '.js': 'jsx',
    '.ttf': 'file',
    '.woff': 'file',
    '.woff2': 'file',
    '.jpg': 'dataurl'
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
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight]
    }),
    esbuildPluginNoteRoute({
      resolveDir: './src/components/mdx/.docs',
      dirReg: /\/\.docs\/?$/,
      type: true
    })
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

app.use(async (ctx, next) => {
  await next()

  const regexs = [
    {
      test: /\/docs\/[^/]+/,
      frag: /\/docs\//
    }, 
    {
      test: /\/docs\/vue\/[^/]+/,
      frag: /\/docs\/vue\//
    }
  ]

  for(const regex of regexs) {
    if(regex.test.test(ctx.originalUrl)) {
      if(ctx.headers['sec-fetch-dest'] === 'document') {
        ctx.body = await fs.promises.readFile('./dist/index.html', { encoding: 'utf-8' })
      } else {
        const redirectUrl = ctx.originalUrl.replace(regex.frag, '/')
        ctx.redirect(redirectUrl)
      }
    }
  }
})

app.use(historyApiFallback({}))
app.use(koaStatic(process.cwd() + '/dist/'))

proxy.use(koaMount(prefix, app))
proxy.listen(4375)
console.log(`Server running at http://127.0.0.1:4375${prefix}/.`)
