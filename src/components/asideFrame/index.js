import { defineComponent } from 'vue'
import { DocTree, pathInfo } from '@/components/mdx/.docs'

export default defineComponent({
  name: 'AsideFrame',
  components: {
    DocTree
  },
  setup(props, ctx) {
    const indexes = []
    pathInfo.forEach((info) => {
      if(info.isDir) indexes.push(info.path)
    })

    return () => {
      return <>
        <DocTree defaultOpeneds={ indexes }></DocTree>
      </>
    }
  }
})