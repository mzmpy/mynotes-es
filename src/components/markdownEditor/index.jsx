import { 
  defineComponent,
  onMounted,
  ref
} from 'vue'
import * as monaco from 'monaco-editor-core'
import { URI } from 'vscode-uri'
import { initMonacoEnv, getOrCreateModel, setMDXConfiguration } from './env.js'
import styles from './index.module.css'
import createStore from '@/store/index.js'
import { highlight } from './highlight.js'

export default defineComponent({
  name: 'MarkdownEditor',
  props: {
    initialCode: {
      type: String,
      default: '# Hello World!'
    },
    theme: {
      type: String,
      default: 'vs-dark'
    }
  },
  emits: ['codeChanged'],
  setup(props, { emit }) {
    const editorRef = ref()
    const store = createStore()
    let editorInstance = null

    initMonacoEnv(store)

    onMounted(async () => {
      const themes = await highlight({
        langs: ['javascript', 'typescript', 'tsx', 'jsx', 'mdx'],
        themes: ['tokyo-night']
      })

      const model = getOrCreateModel(props.initialCode, 'mdx', URI.parse('file:///demo.mdx'))
      editorInstance = monaco.editor.create(editorRef.value, {
        model: model,
        theme: themes['tokyo-night'],
        automaticLayout: true,
        scrollBeyondLastLine: false,
        inlineSuggest: {
          enabled: false,
        },
        fixedOverflowWidgets: true
      })
      setMDXConfiguration()

      // Support for semantic highlighting
      const t = editorInstance._themeService._theme
      t.semanticHighlighting = true
      t.getTokenStyleMetadata = (type, modifiers, _language) => {
        const _readonly = modifiers.includes('readonly')
        switch (type) {
          case 'function':
          case 'method':
            return { foreground: 12 }
          case 'class':
            return { foreground: 11 }
          case 'variable':
          case 'property':
            return { foreground: _readonly ? 19 : 9 }
          default:
            return { foreground: 0 }
        }
      }
      
      editorInstance.onDidChangeModelContent(() => {
        emit('codeChanged', editorInstance.getValue())
      })
    })

    return () => {
      return <>
        <div ref={ editorRef } class={ styles('editor') }></div>
      </>
    }
  }
})
