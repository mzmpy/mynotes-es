import { defineComponent } from 'vue'
import {
  ElMenu,
  ElMenuItem
} from 'element-plus/components'

export default defineComponent({
  name: 'AsideFrame',
  components: {
    ElMenu,
    ElMenuItem
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
        <ElMenu
          mode="vertical"
          router
          active-text-color="#ffd04b"
          background-color="#545c64"
          text-color="#fff"
        >
          <ElMenuItem index="/docs/test.mdx">Test</ElMenuItem>
        </ElMenu>
      </>
    }
  }
})