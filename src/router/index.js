import * as VueRouter from 'vue-router'
import routes from './routes'
import noteRoutes from '@/components/mdx/.docs'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/mynotes-es/'),
  routes
})

router.beforeEach((to, from, next) => {
  const noteRoute = noteRoutes.find((noteRoute) => {
    return to.path === noteRoute.path
  })

  if(noteRoute && !router.hasRoute(to.name)) {
    router.addRoute(noteRoute)
    next({ ...to, replace: true })
  } else {
    next()
  }
})

export default router
