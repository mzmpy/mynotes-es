import {
  defineComponent
} from 'vue'
import {
  ElMenu,
  ElMenuItem
} from 'element-plus/components'
import BasicFrame from './components/basicFrame'
import styles from './App.module.css'
import {
  RouterLink,
  RouterView
} from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    BasicFrame,
    ElMenu,
    ElMenuItem
  },
  setup(props, ctx) {
    return () => {

      return <>
        <BasicFrame class={ styles('frame') } aside={{ width: '450px' }}>
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
              return 'aside'
            },
            main: () => {
              return <>
                <RouterView></RouterView>
              </>
            }
          }}
        </BasicFrame>
      </>
    }
  },
})
