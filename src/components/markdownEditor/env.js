import MdxWorker from '@/worker/mdx.worker.js?worker'
import EditorWorker from 'monaco-editor-core/esm/vs/editor/editor.worker.js?worker'
import { activateMarkers, activateAutoInsertion, registerProviders } from '@volar/monaco'
import { editor, languages, Uri } from 'monaco-editor-core'
import languageConfiguration from './language-configuration.js'

let initted = false
export function initMonacoEnv(store) {
  if (initted) return
  useVolarMonacoEnv(store)
  initted = true
}

function useVolarMonacoEnv(store) {
  self.MonacoEnvironment = {
    getWorker: async (moduleId, label) => {
      if (label === 'mdx') {
        const worker = new MdxWorker()
        const initialization = new Promise((resolve) => {
          worker.addEventListener('message', (data) => {
            if (data.data === 'initted') {
              resolve()
            }
          })
  
          worker.postMessage({
            event: 'init',
            tsVersion: store.typescriptVersion,
            tsLocale: store.locale,
          })
        })
        await initialization
  
        return worker
      }
      return new EditorWorker()
    }
  }
  
  let disposeMdx
  const setup = async () => {
    disposeMdx?.()

    const worker = editor.createWebWorker({
      moduleId: 'vs/language/mdx/mdxWorker',
      label: 'mdx',
      host: new WorkerHost(),
      createData: {
        tsconfig: {},
        dependencies: {
          react: '18.3.1',
          typescript: 'latest'
        }
      }
    })
    const getSyncUris = () => editor.getModels().map((model) => {
      return model.uri
    })
    const languageIds = ['mdx', 'javascript', 'typescript']

    const { dispose: disposeMarkers } = activateMarkers(
      worker,
      languageIds,
      'mdx',
      getSyncUris,
      editor
    )

    const { dispose: disposeAutoInsertion } = activateAutoInsertion(worker, languageIds, getSyncUris, editor)

    const { dispose: disposeProvides } = await registerProviders(
      worker,
      languageIds,
      getSyncUris,
      languages
    )

    disposeMdx = () => {
      disposeMarkers()
      disposeAutoInsertion()
      disposeProvides()
    }
  }

  languages.register({ id: 'mdx', extensions: ['.mdx'] })
  languages.register({ id: 'javascript', extensions: ['.js'] })
  languages.register({ id: 'typescript', extensions: ['.ts'] })
  languages.onLanguage('mdx', setup)
}

export function getOrCreateModel(code='', language, uri='') {
  const model = editor.getModel(uri)

  if(model) {
    model.setValue(code)
    return model
  }

  return editor.createModel(code, language, uri)
}

export function setMDXConfiguration() {
  languages.setLanguageConfiguration('mdx', languageConfiguration)
  languages.registerCompletionItemProvider('mdx', {
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
        return {
          suggestions: []
        }
      }
  
      const word = model.getWordUntilPosition(position)
  
      return {
        incomplete: true,
        suggestions: [
          {
            label: `</${tag}>`,
            kind: languages.CompletionItemKind.EnumMember,
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

class WorkerHost {
  onFetchCdnFile(uri, text) {
    getOrCreateModel(text, undefined, Uri.parse(uri))
  }
}
