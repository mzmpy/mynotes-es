import {
  defineComponent,
  onBeforeMount,
  withDirectives,
  vShow,
  onMounted,
  onBeforeUpdate,
  onUpdated
} from 'vue'
import {
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElScrollbar
} from 'element-plus/components'
import styles from './index.module.css'

export default defineComponent({
  name: 'BasicFrame',
  components: {
    ElAside,
    ElContainer,
    ElHeader,
    ElMain,
    ElScrollbar
  },
  props: {
    aside: {
      type: Object,
      default() {
        return {
          width: '300px',
          className: '',
          display: true
        }
      }
    }
  },
  setup(props, { slots, attrs }) {
    onBeforeMount(() => {
      console.log('[BasicFrame]: BeforeMounted!')
    })

    onMounted(() => {
      console.log('[BasicFrame]: Mounted!')
    })

    onBeforeUpdate(() => {
      console.log('[BasicFrame]: BeforeUpdated!')
    })

    onUpdated(() => {
      console.log('[BasicFrame]: Updated!')
    })
    
    return () => {
      return <>
        <div class={ [styles('basic-frame'), attrs.class] }>
          <ElContainer>
            <ElHeader class={ styles('default-header') }>{ slots.header?.() }</ElHeader>
            <ElContainer class={ styles('default-body') }>
              {
                <>
                  {
                    withDirectives(
                      <ElAside
                        width={ props.aside.width }
                        class={ styles(props.aside.className || 'default-aside') }
                      >
                        <ElScrollbar>
                          { slots.aside?.() }
                        </ElScrollbar>
                      </ElAside>,
                      [[vShow, props.aside.display]]
                    )
                  }
                  <ElMain class={ props.aside.display ? styles('default-main') : styles('default-main-no-aside') }>
                    {
                      props.aside.display
                        ? <>
                          <ElScrollbar>
                            { slots.main?.() || slots.default?.() }
                          </ElScrollbar>
                        </>
                        : slots.main?.() || slots.default?.()
                    }
                  </ElMain>
                </>
              }
            </ElContainer>
          </ElContainer>
        </div>
      </>
    }
  },
})
