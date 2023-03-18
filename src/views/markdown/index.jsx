import {
  defineComponent,
  ref,
  onMounted
} from 'vue'
import styles from './index.module.css'
import MarkdownEditor from '@/components/markdownEditor/index.jsx'
import MarkdownPreview from '@/components/markdownPreview/index.jsx'
import ToolBar from '@/components/toolBar/index.jsx'
import {
  ElDrawer
} from 'element-plus/components'

export default defineComponent({
  name: 'Markdown',
  components: {
    MarkdownEditor,
    MarkdownPreview,
    ToolBar,
    ElDrawer
  },
  setup(props, ctx) {
    const markIt = async (val) => {
      const { marked, setOptions } = await import('@npmzm/marked')
      const hljs = (await import('highlight.js')).default

      setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'python'
          return hljs.highlight(code, { language }).value
        },
        langPrefix: 'hljs language-',
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      })
    
      return marked(val)
    }

    const mdText = '# There are some demos.\n\nThis is a paragraph.\n\nThere are some Greek letter `$\\alpha$`, `$\\beta$` and `$\\lambda$`.\n\n```katex\nE = mc^{2}\n```\n\nHere defines a Python function `add(x, y)`:\n```python\ndef add(x, y):\n\treturn x + y\n```\n这是一行中文。'
    const markedContent = ref('')
    const drawer = ref(false)

    const preview = (val) => {
      drawer.value = val
    }

    const unPreview = () => {
      drawer.value = false
    }

    onMounted(async () => {
      markedContent.value = await markIt(mdText)
    })

    const onCodeChanged = async (val) => {
      markedContent.value = await markIt(val)
    }

    return () => {
      return <>
        <div class={ styles('markdown-container') }>
          <div class={ styles('tool-bar') }>
            <ToolBar onPreview={ preview }></ToolBar>
          </div>
          <MarkdownEditor initialCode={ mdText } onCodeChanged={ onCodeChanged }></MarkdownEditor>
          <ElDrawer title="Preview" model-value={ drawer.value } append-to-body={ true } size="50%" onClose={ unPreview }>
            <MarkdownPreview content={ markedContent.value }></MarkdownPreview>
          </ElDrawer>
        </div>
      </>
    }
  },
})
