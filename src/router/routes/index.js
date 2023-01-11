const routes = [
  {
    path: '/',
    name: 'root',
    children: [
      {
        path: '/markdown',
        name: 'Markdown',
        component: () => import('../../views/markdown')
      },
      {
        path: '/test-view',
        name: 'TestView',
        component: () => import('../../views/test')
      }
    ]
  }
]

export default routes
