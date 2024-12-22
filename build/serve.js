import esbuild from 'esbuild'
import esbuildPluginParcelCss from '../plugins/esbuild-plugin-parcel-css/index.js'
import esbuildPluginHtml from '../plugins/esbuild-plugin-html/index.js'
import esbuildPluginSmartImport from '../plugins/esbuild-plugin-elementplus-smartimport/index.js'
import esbuildPluginJsxImportSource, { esbuildMdxJsxImportSource } from '../plugins/esbuild-plugin-jsx-import-source/index.js'
import esbuildPluginMdxToVueComponent from '../plugins/esbuild-plugin-mdx-to-vueComponent/index.js'
import esbuildMDX from '@mdx-js/esbuild'
import esbuildPluginNoteRoute from '../plugins/esbuild-plugin-note-route/index.js'
import esbuildPluginDevServer from '../plugins/esbuild-plugin-devServer/index.js'
import esbuildPluginCopy from 'esbuild-plugin-copy'
import esbuildPluginClean from 'esbuild-plugin-clean'
import esbuildPluginInlineImage from 'esbuild-plugin-inline-image'
import esbuildWorkerPlugin from '../plugins/esbuild-plugin-worker/index.js'

import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const prefix = '/mynotes-es'
const DRACOPATH = '/resource/three/gltf'
const MODELSRESOURCEPATH = '/resource/three/models'

await esbuild.build({
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
    '.woff2': 'file',
    '.json': 'json'
  },
  define: {
    PUBLICPATH: `'${prefix}'`,
    DRACOPATH: `'${prefix + DRACOPATH}/'`,
    MODELSRESOURCEPATH: `'${prefix + MODELSRESOURCEPATH}'`
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
    esbuildPluginDevServer({ prefix, hot: true }),
    esbuildPluginCopy({
      assets: [
        {
          from: ['./src/assets/models3d/**/*'],
          to: [`.${MODELSRESOURCEPATH}`]
        },
        {
          from: ['./node_modules/three/examples/jsm/libs/draco/gltf/**/*'],
          to: [`.${DRACOPATH}`]
        },
        {
          from: ['./node_modules/leaflet/dist/images/**/*'],
          to: [`./`]
        }
      ]
    }),
    esbuildPluginClean({
      patterns: ['./dist/*']
    }),
    esbuildPluginInlineImage(),
    esbuildWorkerPlugin()
  ],
  outdir: './dist',
  metafile: true
})
