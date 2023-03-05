import type { Plugin } from 'esbuild'

declare function esbuildPluginMDXToVueComponent(options: Options): Plugin

interface Options {
  include: string[]
}

export default esbuildPluginMDXToVueComponent
