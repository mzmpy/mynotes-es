import { defineComponent } from 'vue'
import { DocTree } from '@/components/mdx/.docs'

export default defineComponent({
  name: 'AsideFrame',
  components: {
    DocTree
  },
  props: {
    indexs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup(props, ctx) {
    return () => {
      return <>
        <DocTree></DocTree>
      </>
    }
  }
})