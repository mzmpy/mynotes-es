// import.meta.url 返回模块的绝对的 `file:` URL。
// url模块中fileURLToPath()函数，返回完全解析的特定于平台的 Node.js 文件路径
// path模块中dirname()函数，返回路径的目录路径
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export { __dirname }