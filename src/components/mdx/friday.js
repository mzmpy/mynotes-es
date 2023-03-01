import {
  defineComponent
} from 'vue'

import FridayContext from '@/components/mdx/friday.mdx'

export default defineComponent({
  name: 'Friday',
  setup() {
    return () => <FridayContext/>
  }
})
