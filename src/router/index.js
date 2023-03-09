import * as VueRouter from 'vue-router'
import routes from './routes'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/mynotes-es/'),
  routes
})

export default router
