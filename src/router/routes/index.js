import Markdown from '../../views/markdown'
import TextView from '../../views/test'

const routes = [
  {
    path: '/markdown',
    name: 'Markdown',
    component: Markdown
  },
  {
    path: '/test-view',
    name: 'TestView',
    component: TextView
  }
]

export default routes
