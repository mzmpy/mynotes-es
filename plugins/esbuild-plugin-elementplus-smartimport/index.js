import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default (options = { module: 'es' }) => {
  return {
    name: 'elementplus-autoimport',
    setup(build) {
      if(!(['es', 'cjs', 'auto'].includes(options.module))) throw new Error(`Auto import element-plus: value of module must be one of 'auto, es, cjs'`)

      build.onResolve({ filter: /^element-plus[/\\]components$/ }, async (args) => {
        const relativePath = options.module === 'auto'
          ? `node_modules/element-plus/dist/index.full.min.js`
          : `node_modules/element-plus/${options.module === 'es' ? 'es' : 'lib'}/components/index.${options.module === 'es' ? 'm' : ''}js`
        const redirectPath = path.resolve(process.cwd(), relativePath)

        return {
          path: redirectPath
        }
      })

      build.onResolve({ filter: /^element-plus[/\\]locale$/ }, async (args) => {
        const relativePath = options.module === 'auto'
          ? `node_modules/element-plus/dist/index.full.min.js`
          : `node_modules/element-plus/${options.module === 'es' ? 'es' : 'lib'}/locale/index.${options.module === 'es' ? 'm' : ''}js`
        const redirectPath = path.resolve(process.cwd(), relativePath)

        return {
          path: redirectPath
        }
      })

      build.onEnd((result) => {
        const typesDirPath = path.resolve(process.cwd(), './src/types')
        if(!fs.existsSync(typesDirPath)) fs.mkdirSync(typesDirPath)
        fs.writeFileSync(
          path.resolve(typesDirPath, 'element-plus.d.ts'),
          fs.readFileSync(path.resolve(__dirname, 'lib/element-plus.d.ts'), { encoding: 'utf-8' })
        )
      })
    }
  }
}
