import esbuild from 'esbuild'
import esbuildPluginParcelCss from '../plugins/esbuild-plugin-parcel-css/index.js'
import esbuildPluginHtml from '../plugins/esbuild-plugin-html/index.js'
import esbuildPluginSmartImport from '../plugins/esbuild-plugin-elementplus-smartimport/index.js'
import esbuildPluginJsxImportSource, { esbuildMdxJsxImportSource } from '../plugins/esbuild-plugin-jsx-import-source/index.js'
import esbuildPluginMonacoEditor from '../plugins/esbuild-plugin-monaco-editor/index.js'
import esbuildPluginMdxToVueComponent from '../plugins/esbuild-plugin-mdx-to-vueComponent/index.js'
import esbuildMDX from '@mdx-js/esbuild'
import esbuildPluginNoteRoute from '../plugins/esbuild-plugin-note-route/index.js'

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  // minify: true,
  splitting: true,
  format: 'esm',
  treeShaking: true,
  loader: {
    '.js': 'jsx',
    '.ttf': 'file',
    '.woff': 'file',
    '.woff2': 'file',
    '.jpg': 'dataurl'
  },
  alias: {
    '@/*': './src/*'
  },
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
      pragmaImportSource: esbuildMdxJsxImportSource()
    }),
    esbuildPluginNoteRoute({
      resolveDir: './src/components/mdx/.docs',
      dirReg: /\/\.docs\/?$/,
      type: true
    })
  ],
  outdir: './dist'
}).catch(() => process.exit(1))
