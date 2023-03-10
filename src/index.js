import { createApp } from 'vue'
import router from './router'
import App from './App.js'
import 'element-plus/dist/index.css'
import 'katex/dist/katex.css'
import 'highlight.js/styles/github-dark.css'
import './styles/markdown/dark.css'

// Bundler Build Feature Flags
globalThis.__VUE_OPTIONS_API__ = false;
globalThis.__VUE_PROD_DEVTOOLS__ = false;

const app = createApp(App)
app.use(router)
app.mount('#app')
