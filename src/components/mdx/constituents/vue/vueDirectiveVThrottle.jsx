import { defineComponent, withDirectives } from "vue"
import { ElButton, ElMessage } from 'element-plus/components'

export default defineComponent({
  name: 'ThrottleButton',
  components: { ElButton },
  setup() {
    const styleDict = { 'vertical-align': 'text-bottom' }

    const onSubmit = () => {
      ElMessage({
        message: 'Done!',
        type: 'success'
      })
    }

    const VThrottle = {
      mounted(el, binding) {
        const interval = typeof binding.value === 'number' ? binding.value : 1500

        let timer = null
        el.addEventListener(
          'click',
          (ev) => {
            if(!timer) {
              timer = setTimeout(() => {
                timer = null
              }, interval)
            } else {
              ev && ev.stopImmediatePropagation()
            }
          },
          true
        )
      }
    }

    return () => {
      return <>
        {
          withDirectives(
            <ElButton
              type="primary"
              plain size="small"
              style={ styleDict }
              onClick={ onSubmit }
            >
              提交
            </ElButton>,
            [[VThrottle, true]]
          )
        }
      </>
    }
  }
})
