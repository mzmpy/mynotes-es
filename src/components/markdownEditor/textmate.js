import { loadWASM } from 'onigasm'
import { Registry } from 'monaco-textmate'
import { wireTmGrammars } from 'monaco-editor-textmate'
import { fetchPathMap } from './config'
import languageConfiguration from './language-configuration.js'

let hasGetWorkUrl = false
export const monacoLanguages = []
export const scopeNameMap = {
  'mdx': 'source.mdx'
}

export const initTextmate = async () => {
  try {
    await loadWASM(ONIGASMPATH + '/onigasm.wasm')
  } catch(err) {
    if(err.message !== 'Onigasm#init has been called and was succesful, subsequent calls are not allowed once initialized') {
      throw err
    }
  }

  self.MonacoEnvironment = {
    getWorkerUrl: function(moduleId, label) {
      hasGetWorkUrl = true
      if(label === 'json') {
        return PUBLICPATH + '/vs/language/json/json.worker.js'
      }
      if(label === 'css' || label === 'scss' || label === 'less') {
        return PUBLICPATH + '/vs/language/css/css.worker.js'
      }
      if(label === 'html' || label === 'handlebars' || label === 'razor') {
        return PUBLICPATH + '/vs/language/html/html.worker.js'
      }
      if(label === 'typescript' || label === 'javascript') {
        return PUBLICPATH + '/vs/language/typescript/ts.worker.js'
      }
      return PUBLICPATH + '/vs/editor/editor.worker.js'
    }
  }
}

export const monacoTextmate = (monaco, editor, languageId) => {
  const grammars = new Map()
  grammars.set(languageId, scopeNameMap[languageId])

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

  if(!monacoLanguages.includes(languageId)) {
    monaco.languages.register({ id: languageId })

    if(languageId === 'mdx') {
      monaco.languages.setLanguageConfiguration(languageId, languageConfiguration)

      monaco.languages.registerCompletionItemProvider(languageId, {
        triggerCharacters: ['>'],
        provideCompletionItems: (model, position) => {
          const codePre = model.getValueInRange({
            startLineNumber: position.lineNumber,
            startColumn: 1,
            endLineNumber: position.lineNumber,
            endColumn: position.column
          })
      
          const tag = codePre.match(/.*<(\w+)>$/)?.[1]
      
          if (!tag) {
            return {}
          }
      
          const word = model.getWordUntilPosition(position)
      
          return {
            suggestions: [
              {
                label: `</${tag}>`,
                kind: monaco.languages.CompletionItemKind.EnumMember,
                insertText: `</${tag}>`,
                range:  {
                   startLineNumber: position.lineNumber,
                   endLineNumber: position.lineNumber,
                   startColumn: word.startColumn,
                   endColumn: word.endColumn,
                }
              }
            ]
          }
        }
      })
    }
  }

  // fix：https://github.com/Microsoft/monaco-editor/issues/884
  const loop = () => {
    if(hasGetWorkUrl) {
      Promise.resolve().then(async () => {
        await wireTmGrammars(monaco, registry, grammars, editor)
      })
    } else {
      setTimeout(() => {
        loop()
      }, 100)
    }
  }
  loop()
}
