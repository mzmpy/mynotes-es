import {
  defineComponent,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated
} from 'vue'
import { ElInput } from 'element-plus/components'

console.log('TestView')

export default defineComponent({
  name: 'TestView',
  components: { ElInput },
  setup(props, ctx) {
    const inputRef = ref()

    onBeforeMount(() => {
      console.log('[TestView]: BeforeMounted! But can not get [inputRef] yet: ')
      console.log(inputRef.value)
    })

    onMounted(() => {
      console.log('[TestView]: Mounted! And got [inputRef]: ')
      console.log(inputRef.value)
    })

    onBeforeUpdate(() => {
      console.log('[TestView]: BeforeUpdated!')
    })

    onUpdated(() => {
      console.log('[TestView]: Updated!')
    })

    const text = ref('')

    const onInput = (val) => {
      text.value = val
    }

    return () => {
      return <>
        <div>TestView HMR Test { text.value }</div>
        <ElInput ref={ inputRef } style={{ width: '300px!important' }} modelValue={ text.value } onInput={ onInput } placeholder="Hello"></ElInput>
      </>
    }
  }
})
