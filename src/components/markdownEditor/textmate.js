import { loadWASM } from 'onigasm'
import { Registry } from 'monaco-textmate'
import { wireTmGrammars } from 'monaco-editor-textmate'
import { fetchPathMap } from './config'

export const scopeNameMap = {
  mdx: 'source.mdx',
  html: 'text.html.basic',
  css: 'source.css',
  less: 'source.css.less',
  scss: 'source.css.scss',
  typescript: 'source.ts',
  javascript: 'source.js',
  typescriptreact: 'source.tsx',
  json: 'source.json',
  markdown: 'text.md'
}

export const initOnigasm = async () => {
  try {
    await loadWASM(ONIGASMPATH + '/onigasm.wasm')
  } catch(err) {
    if(err.message !== 'Onigasm#init has been called and was succesful, subsequent calls are not allowed once initialized') {
      throw err
    }
  }
}

export const loadGrammars = async (monaco, editor) => {
  const grammars = new Map()
  Object.keys(scopeNameMap).forEach(async (languageId) => {
    grammars.set(languageId, scopeNameMap[languageId])
    monaco.languages.register({ id: languageId })
  })

  const registry = new Registry({
    getGrammarDefinition: async (scopeName) => {
      const fetchPath = fetchPathMap[scopeName]
      if(fetchPath) {
        return {
          format: 'json',
          content: await (await fetch(fetchPath)).text()
        }
      }

      return {
        format: 'json',
        content: await (await fetch(MDXPATH + '/syntaxes/Mdx.tmLanguage.json')).text()
      }
    }
  })

  await wireTmGrammars(monaco, registry, grammars, editor)
}
