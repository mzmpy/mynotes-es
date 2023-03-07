import type { Plugin } from 'esbuild'

declare function esbuildPluginNoteRoute(options: Options): Plugin

interface Options {
  resolveDir: string,
  dirReg: RegExp,
  type: boolean,
  generateDomTree: boolean
}

export default esbuildPluginNoteRoute