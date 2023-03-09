import {
  defineComponent
} from 'vue'

import styles from './index.module.css'

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
