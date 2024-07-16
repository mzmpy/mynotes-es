import * as monaco from 'monaco-editor-core'
import { createHighlighterCore } from 'shiki/core'
import { shikiToMonaco } from '@shikijs/monaco'

import langMdx from 'shiki/langs/mdx.mjs'
import langJs from 'shiki/langs/javascript.mjs'
import langTs from 'shiki/langs/typescript.mjs'
import themeDark from 'shiki/themes/monokai.mjs'

export async function registerHighlighter() {
  const highlighter = await createHighlighterCore({
    themes: [themeDark],
    langs: [langMdx, langJs, langTs],
    loadWasm: await import('shiki/wasm'),
  })
  monaco.languages.register({ id: 'mdx' })
  monaco.languages.register({ id: 'javascript' })
  monaco.languages.register({ id: 'typescript' })
  shikiToMonaco(highlighter, monaco)
  return {
    dark: themeDark.name,
  }
}
