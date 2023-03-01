import { 
  defineComponent,
  onMounted,
  ref
} from 'vue'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'
// import 'monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution'
import markdownExtended from './markdown'
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

    onMounted(() => {
      monaco.languages.register({ id: 'markdown' })
      monaco.languages.setMonarchTokensProvider('markdown', markdownExtended)

      editorInstance = monaco.editor.create(editorRef.value, {
        value: props.initialCode,
        theme: props.theme,
        automaticLayout: true,
        language: 'markdown'
      })
      
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
