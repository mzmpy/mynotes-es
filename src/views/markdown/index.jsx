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

    const mdText =
    `---
title: Hello!
---

import {Chart} from './chart.js'
import population from './population.js'
import {External} from './some/place.js'

export const year = 2018
export const pi = 3.14

export function SomeComponent(props) {
  const name = (props || {}).name || 'world'

  return <div>
    <p>Hi, {name}!</p>

    <p>and some more things</p>
  </div>
}

export function Local(props) {
  return <span style={{color: 'red'}} {...props} />
}

# Last year's snowfall

In {year}, the snowfall was above average.
It was followed by a warm spring which caused
flood conditions in many of the nearby rivers.

<Chart year={year} color="#fcb32c" />

<div className="note">
  Some notable things in a block quote!
</div>

# Heading (rank 1)
## Heading 2
### 3
#### 4
##### 5
###### 6

> Block quote

* Unordered
* List

1. Ordered
2. List

A paragraph, introducing a thematic break:

---

\`\`\`js
// Get an element.
const element = document.querySelectorAll('#hi')

// Add a class.
element.classList.add('asd')
\`\`\`

a [link](https://example.com), an ![image](./image.png), some *emphasis*,
something **strong**, and finally a little \`code()\`.

<Component
  open
  x={1}
  label={'this is a string, *not* markdown!'}
  icon={<Icon />}
/>

Two 🍰 is: {Math.PI * 2}

{(function () {
  const guess = Math.random()

  if (guess > 0.66) {
    return <span style={{color: 'tomato'}}>Look at us.</span>
  }

  if (guess > 0.33) {
    return <span style={{color: 'violet'}}>Who would have guessed?!</span>
  }

  return <span style={{color: 'goldenrod'}}>Not me.</span>
})()}

{/* A comment! */}`
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
