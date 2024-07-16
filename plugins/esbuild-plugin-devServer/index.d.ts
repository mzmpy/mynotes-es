import type { Plugin } from 'esbuild'

interface Options {
  prefix: string
  hot: boolean
}

declare function esbuildPluginDevServer(options: Options): Plugin

export default esbuildPluginDevServer
