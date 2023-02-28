import fs from 'fs'
import path from 'path'

const esbuildMdxJsxImportSource = (jsxImportSource='vue') => path.resolve(process.cwd(), `./${jsxImportSource}-jsxImportSource.js`)

export { esbuildMdxJsxImportSource }

export default (options={ jsxImportSource: 'react' }) => {
  return {
    name: 'jsx-import-source-plugin',
    setup(build) {
      const configs = build.initialOptions

      const jsxFactory = configs.jsxFactory
      const jsxFragment = configs.jsxFragment

      if(!jsxFactory) console.log('Warning[esbuild plugin jsxSourceImport]: jsxFactory is not declared and React.createElement will be used!')
      if(!jsxFragment) console.log('Warning[esbuild plugin jsxSourceImport]: jsxFragment is not declared and React.Fragment will be used!')
      
      const jsxImportSource = options.jsxImportSource

      if(jsxImportSource && jsxImportSource !== 'react') {
        const injectPath = `./${jsxImportSource}-jsxImportSource.js`

        const data = `import { ${jsxFactory}, ${jsxFragment} } from '${jsxImportSource}'\n`
                   + `export { ${jsxFactory}, ${jsxFragment} }\n`
                   + `export default { ${jsxFactory}, ${jsxFragment} }\n`
        if(!fs.existsSync(injectPath)) fs.promises.writeFile(injectPath, data)

        isArray(configs.inject)
        ? configs.inject.push(injectPath)
        : configs.inject = [injectPath]
      }
    }
  }
}

function isArray(arr) {
  return arr instanceof Array
}
