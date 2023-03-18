import {
  defineComponent,
  KeepAlive,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated
} from 'vue'
import {
  ElMenu,
  ElMenuItem
} from 'element-plus/components'
import BasicFrame from './components/basicFrame/index.jsx'
import AsideFrame  from './components/asideFrame/index.jsx'
import styles from './App.module.css'
import {
  RouterLink,
  RouterView,
  useRoute
} from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    BasicFrame,
    AsideFrame,
    ElMenu,
    ElMenuItem
  },
  setup(props, ctx) {
    onBeforeMount(() => {
      console.log('[App]: BeforeMounted!')
    })

    onMounted(() => {
      console.log('[App]: Mounted!')
    })

    onBeforeUpdate(() => {
      console.log('[App]: BeforeUpdated!')
    })

    onUpdated(() => {
      console.log('[App]: Updated!')
    })

    const route = useRoute()

    const asideDisplay = computed(() => ['/markdown', '/test-view'].indexOf(route.path) === -1 ? true : false)

    return () => {
      return <>
        <BasicFrame class={ styles('frame') } aside={{ width: '300px', display: asideDisplay.value }}>
          {{
            header: () => {
              return <>
                <ElMenu mode="horizontal" ellipsis={ false } default-active="0">
                  <ElMenuItem index="0" class={ styles('logo-container') }>
                    <RouterLink to="/">MyNotes</RouterLink>
                  </ElMenuItem>
                  <div class={ styles('filler') }></div>
                  <ElMenuItem index="1">
                    <RouterLink to="/markdown">MarkdownEditor</RouterLink>
                  </ElMenuItem>
                  <ElMenuItem index="2">
                    <RouterLink to="/test-view">Dictionary</RouterLink>
                  </ElMenuItem>
                </ElMenu>
              </>
            },
            aside: () => {
              return <>
                <KeepAlive>
                  <AsideFrame></AsideFrame>
                </KeepAlive>
              </>
            },
            main: () => {
              return <>
                <RouterView>
                  {{
                    default({ Component, route }) {
                      return <>
                        <KeepAlive include={ 'Markdown' }>
                          <Component></Component>
                        </KeepAlive>
                      </>
                    }
                  }}
                </RouterView>
              </>
            }
          }}
        </BasicFrame>
      </>
    }
  },
})

export const EXPORT_TEST = 'EXPORT_TEST'
