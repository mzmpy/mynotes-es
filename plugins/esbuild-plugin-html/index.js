import fs from 'fs'
import path from 'path'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default (options={ module: true }) => {
  return {
    name: 'html-plugin',
    // By default, one and only one entry file will be referred into a html file.
    setup(build) {
      // read esbuild's bundling configuration
      const configs = build.initialOptions
      configs.metafile = true

      const entryPoints = configs.entryPoints

      build.onEnd(async (result) => {
        const outputs = result.metafile.outputs
        const outputsMap = {}

        Object.keys(outputs).forEach((key) => {
          if(!outputs[key].entryPoint) return
          outputsMap[outputs[key].entryPoint] = {
            generate: generatePath(key, '.html'),
            outputPoint: key,
            cssBundle: outputs[key].cssBundle || ''
          }
        })

        if(isArray(entryPoints)) {
          if(!(isArray(options.source) || isString(options.source)))
            throw TypeError('[options.source] must be an array of paths or a path string.')
          
          entryPoints.forEach((item, index) => {
            if(!outputsMap[path.posix.join(item)]) return
            const sourceFile = isString(options.source) ? options.source : options.source[index]
            writeHtml(path.relative(__dirname, sourceFile) || './default.html', outputsMap[path.posix.join(item)], options.module)
          })
        } else if(isObject(entryPoints)) {
          if(!(isObject(options.source) || isString(options.source)))
            throw TypeError('[options.source] must be an object of paths or a path string.')

          for(const key in entryPoints) {
            if(!outputsMap[path.posix.join(entryPoints[key])]) continue
            const sourceFile = isString(options.source) ? options.source : options.source[key]
            writeHtml(path.relative(__dirname, sourceFile) || './default.html', outputsMap[path.posix.join(entryPoints[key])], options.module)
          }
        }
      })
    }
  }
}

function generatePath(sourcePath, suffix='') {
  // return path.join(path.dirname(sourcePath), path.basename(sourcePath, path.extname(sourcePath)) + suffix)
  return path.join(path.dirname(sourcePath), 'index' + suffix)
}

function writeHtml(sourceFile, info, module=true) {
  let template = fs.readFileSync(path.resolve(__dirname, sourceFile), { encoding: 'utf-8' })
  
  const jsReplace = `<!-- inject jscode here! -->` +
    `<script type="${module ? 'module' : 'text/javascript'}" src="./${path.basename(info.outputPoint)}"></script>`
  const styleReplace = `<!-- inject stylesheet here! -->` +
    `<link rel="stylesheet" href="./${path.basename(info.cssBundle)}"></link>`
  
  template = template
    .replace('<!-- inject jscode here! -->', jsReplace)
    .replace('<!-- inject stylesheet here! -->', styleReplace)
  
  fs.writeFileSync(info.generate, template)
}

function isString(str) {
  return typeof str === 'string'
}

function isObject(obj) {
  return obj instanceof Object
}

function isArray(arr) {
  return arr instanceof Array
}
