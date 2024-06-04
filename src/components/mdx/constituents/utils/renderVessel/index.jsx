import { defineComponent, ref, onMounted, watch } from "vue"
import styles from './index.module.css'
import { ElScrollbar, ElSwitch, ElProgress } from 'element-plus/components'

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
    },
    progress: {
      type: Number,
      default: () => -1
    },
    progressTitle: {
      type: String,
      default: () => 'loading...'
    }
  },
  setup(props, { slots, emit }) {
    const canvasVessel = ref()
    const height = ref(0)
    const showProgress = ref(
      props.progress >= 0 && props.progress <= 100 ? true : false
    )

    onMounted(() => {
      const canvas = canvasVessel.value?.querySelector(`.${styles('gl-canvas-vessle')} > canvas`)
      height.value = getComputedStyle(canvas).height
    })

    watch(props, (val) => {
      if(val.progress === 100) setTimeout(() => showProgress.value = false, 500)
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
                  {
                    showProgress.value && <div class={styles('progress')}>
                      <div class={styles('progress-title')}>{ props.progressTitle }</div>
                      <ElProgress textInside={true} strokeWidth={25} percentage={props.progress} duration={1}></ElProgress>
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
