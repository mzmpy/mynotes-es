import {
  defineComponent,
  KeepAlive,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated
} from 'vue'
import {
  ElMenu,
  ElMenuItem
} from 'element-plus/components'
import BasicFrame from './components/basicFrame'
import AsideFrame  from './components/asideFrame'
import styles from './App.module.css'
import {
  RouterLink,
  RouterView
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

    const getDefaultActive = () => {
      const indexsMap = {
        '/': '0',
        '/markdown': '1',
        '/test-view': '2',
      }
      const fragment = location.pathname.match(/\/[^/]*$/)[0]
      return indexsMap[fragment]
    }

    return () => {

      return <>
        <BasicFrame class={ styles('frame') } aside={{ width: '450px' }}>
          {{
            header: () => {
              return <>
                <ElMenu mode="horizontal" ellipsis={ false } default-active={getDefaultActive()}>
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
                <AsideFrame></AsideFrame>
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
