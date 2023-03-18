import {
  defineComponent,
  withDirectives,
  ref,
  vShow
} from 'vue'
import { ElSwitch } from 'element-plus/components'

export default defineComponent({
  name: 'Test',
  components: { ElSwitch },
  setup() {
    const show = ref(true)
    const toggle = () => show.value = !show.value

    return () => {
      return <>
        <ElSwitch modelValue={ show.value } onChange={ toggle }></ElSwitch>
        {
          withDirectives(<span style="padding-left: 10px;">🙈</span>, [[vShow, show.value]])
        }
      </>
    }
  }
})
