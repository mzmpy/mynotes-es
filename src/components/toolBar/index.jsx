import {
  defineComponent,
  ref
} from 'vue'
import {
  ElMenu,
  ElMenuItem
} from 'element-plus/components'

import styles from './index.module.css'

export default defineComponent({
  name: 'ToolBar',
  components: {
    ElMenu,
    ElMenuItem
  },
  emits: ['preview'],
  setup(props, { emit }) {
    const preview = (item) => {
      const preview = ref(true)
      emit('preview', preview.value)
    }

    return () => {
      return <>
        <ElMenu class={ styles('menu') } background-color="#ecf5ff">
          <ElMenuItem onClick={ preview } index="0">preview</ElMenuItem>
        </ElMenu>
      </>
    }
  }
})
