import { createHighlighter } from 'shiki'
import { shikiToMonaco } from '@shikijs/monaco'
import * as monaco from 'monaco-editor-core'

export async function highlight(options={
  langs: ['javascript', 'typescript', 'tsx', 'jsx', 'mdx'],
  themes: ['monokai']
}) {
  const { langs, themes } = options
  
  if(!(langs instanceof Array) || !(themes instanceof Array)) {
    throw new Error(`[highlight]: langs or themes must be an array.`)
  }

  const highlighter = await createHighlighter({
    themes,
    langs,
  })

  for(let lang of langs) {
    monaco.languages.register({ id: lang })
  }
  
  shikiToMonaco(highlighter, monaco)

  const themesMap = {}
  for(let theme of themes) {
    themesMap[theme] = theme
  }

  return themesMap
}
