import {
  defineComponent
} from 'vue'

import 'katex/dist/katex.css'
import 'highlight.js/styles/github-dark.css'
import styles from './index.module.css'
import '../../styles/markdown/dark.css'

export default defineComponent({
  name: 'MarkdownPreview',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    return () => {
      return <>
        <div>
          <div class={ [styles('markdown-preview'), 'markdown-body'] } innerHTML={ props.content }></div>
        </div>
      </>
    }
  }
})
