import { defineComponent, ref, onMounted } from "vue"
import styles from './index.module.css'
import { ElScrollbar, ElSwitch } from 'element-plus/components'

export default defineComponent({
  name: 'RenderVessel',
  props: {
    animation: {
      type: Boolean,
      default: () => false
    },
    showAnimation: {
      type: Boolean,
      default: () => true
    }
  },
  setup(props, { slots, emit }) {
    const canvasVessel = ref()
    const height = ref(0)

    onMounted(() => {
      const canvas = canvasVessel.value?.querySelector(`.${styles('gl-canvas-vessle')} > canvas`)
      height.value = getComputedStyle(canvas).height
    })

    const onSwitch = (val) => {
      emit('animation', val)
    }

    return () => {
      return <>
        {
          slots.default || slots.canvas
            ? <div class={styles('vessel')} style={`height: ${height.value};`}>
                <div ref={canvasVessel} class={styles('gl-canvas-vessle')}>
                  { slots.default?.() || slots.canvas?.() }
                  {
                    props.showAnimation && <div class={styles('controller')}>
                      <ElSwitch modelValue={props.animation} onChange={onSwitch}></ElSwitch>
                    </div>
                  }
                </div>
                {
                  slots.sideBar &&
                  <ElScrollbar class={styles('operation')}>
                    { slots.sideBar?.() }
                  </ElScrollbar>
                }
              </div>
            : <></>
        }
      </>
    }
  }
})
