import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated
} from 'vue'
import {
  ElAside,
  ElContainer,
  ElHeader,
  ElMain
} from 'element-plus/components'
import styles from './index.module.css'

export default defineComponent({
  name: 'BasicFrame',
  components: {
    ElAside,
    ElContainer,
    ElHeader,
    ElMain
  },
  props: {
    aside: {
      type: Object,
      default() {
        return {
          width: '300px',
          className: ''
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
                ['0', '0px'].indexOf(props.aside.width) === -1
                  ? <>
                      <ElAside width={ props.aside.width } class={ styles(props.aside.className || 'default-aside') }>{ slots.aside?.() }</ElAside>
                      <ElMain class={ styles('default-main') }>{ slots.main?.() || slots.default?.() }</ElMain>
                    </>
                  : <>
                      <ElMain class={ styles('default-main-no-aside') }>{ slots.main?.() || slots.default?.() }</ElMain>
                    </>
              }
            </ElContainer>
          </ElContainer>
        </div>
      </>
    }
  },
})
