import type { Plugin } from 'esbuild'

interface Options {
  workers: Array<'json'|'css'|'html'|'javascript'|'typescript'>
}

declare function esbuildPluginMonacoEditor(options: Options): Plugin

export default esbuildPluginMonacoEditor
