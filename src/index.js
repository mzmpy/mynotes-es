import { createApp } from 'vue'
import router from './router'
import App, { EXPORT_TEST } from './App.jsx'
import 'element-plus/dist/index.css'
import 'katex/dist/katex.css'
import 'highlight.js/styles/github-dark.css'
import './styles/markdown/dark.css'

console.log(EXPORT_TEST)

// Bundler Build Feature Flags
globalThis.__VUE_OPTIONS_API__ = false;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

const app = createApp(App)
app.use(router)
app.mount('#app')

window.__APP__ = app
