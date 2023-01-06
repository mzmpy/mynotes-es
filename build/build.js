const esbuild = require('esbuild')
const esbuildPluginParcelCss = require('../plugins/esbuild-plugin-parcel-css')
const esbuildPluginHtml = require('../plugins/esbuild-plugin-html')
const esbuildPluginSmartImport = require('../plugins/esbuild-plugin-elementplus-smartimport')
const esbuildPluginJsxImportSource = require('../plugins/esbuild-plugin-jsx-import-source')
const esbuildPluginMonacoEditor = require('../plugins/esbuild-plugin-monaco-editor')

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
    '.woff2': 'file'
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
    esbuildPluginMonacoEditor()
  ],
  outdir: './dist'
}).catch(() => process.exit(1))
