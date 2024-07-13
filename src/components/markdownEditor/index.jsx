import { 
  defineComponent,
  onMounted,
  ref
} from 'vue'
import * as monaco from 'monaco-editor'
import { monacoTextmate, initTextmate } from './textmate.js'
import { loadWASM } from 'onigasm'
import codeSandBoxTheme from './themes/codeSandBox.json'
import styles from './index.module.css'

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
    let editorInstance = null

    onMounted(async () => {
      await initTextmate()
      monaco.editor.defineTheme('vs-code-theme-converted', codeSandBoxTheme)

      editorInstance = monaco.editor.create(editorRef.value, {
        model: null,
        theme: 'vs-code-theme-converted',
        automaticLayout: true
      })
      updateDoc(editorInstance, props.initialCode, 'mdx')
      monacoTextmate(monaco, editorInstance, 'mdx')
      
      editorInstance.onDidChangeModelContent(() => {
        emit('codeChanged', editorInstance.getValue())
      })
    })

    const updateDoc = (editor, code, language) => {
      if(!editor) {
        return
      }

      const oldModel = editor.getModel()
      const newModel = monaco.editor.createModel(code, language)
      editor.setModel(newModel)

      if (oldModel) {
        oldModel.dispose()
      }
    }

    return () => {
      return <>
        <div ref={ editorRef } class={ styles('editor') }></div>
      </>
    }
  }
})
