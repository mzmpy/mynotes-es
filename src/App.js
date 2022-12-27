import {
  defineComponent,
  KeepAlive
} from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import styles from './App.module.css'
import routes from './router/routes'

export default defineComponent({
  name: 'App',
  setup(props, ctx) {
    return () => {

      return <>
        <div class={ styles('nav') }>
          {
            routes.map((item, index) => {
              return <>
                <span class={ styles('navItem') }>
                  <RouterLink key={ index } to={ item.path }>{ item.name }</RouterLink>
                </span>
              </>
            })
          }
        </div>
        <div class={ styles('view') }>
          {/* RouterView's v-slot syntax for jsx */}
          {/* scoped slots
              {
                default: ({ Component, route }) => { ... }
              }
           */}
          <RouterView>
            {{
              default: ({ Component, route }) => {
                return <>
                  <KeepAlive include={ 'BasicView' }>
                    <Component></Component>
                  </KeepAlive>
                </>
              }
            }}
          </RouterView>
        </div>
      </>
    }
  },
})
