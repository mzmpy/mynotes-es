import noteRoutes from '@/components/mdx/.docs'

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/components/mdx/friday.mdx')
  },
  {
    path: '/markdown',
    name: 'Markdown',
    component: () => import('@/views/markdown')
  },
  {
    path: '/test-view',
    name: 'TestView',
    component: () => import('@/views/test')
  },
  ...noteRoutes
]

export default routes
