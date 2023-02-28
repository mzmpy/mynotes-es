import esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'

export default () => {
  return {
    name: 'monaco-editor-plugin',
    setup(build) {
      const outdir = build.initialOptions.outdir ?? ''

      const workerEntryPoints = [
        'vs/language/json/json.worker.js',
        'vs/language/css/css.worker.js',
        'vs/language/html/html.worker.js',
        'vs/language/typescript/ts.worker.js',
        'vs/editor/editor.worker.js'
      ]
      
      build.onResolve({ filter: /^(monaco-editor|monaco-editor[/\\]esm[/\\]vs[/\\]editor[/\\]editor.(api|main)(.js)?)$/ }, async (args) => {
        const filePath = args.path.includes('api')
          ? path.join(process.cwd(), 'node_modules/monaco-editor/esm/vs/editor/editor.api.js')
          : path.join(process.cwd(), 'node_modules/monaco-editor/esm/vs/editor/editor.main.js')
        
        return {
          path: filePath,
          pluginData: {
            MONACO_EDITOR_IMPORT: true
          }
        }
      })
      
      build.onLoad({ filter: /node_modules[/\\]monaco-editor[/\\]esm[/\\]vs[/\\]editor[/\\]editor.(api|main).js$/ }, async (args) => {
        if(!args.pluginData?.MONACO_EDITOR_IMPORT) return

        const MonacoEditorCode = await fs.promises.readFile(args.path, { encoding: 'utf-8' })
        const contents = 
        `self.MonacoEnvironment = {` + 
        `  getWorkerUrl: function (moduleId, label) {` + 
        `    if (label === 'json') {` + 
        `      return './vs/language/json/json.worker.js';` + 
        `    }` + 
        `    if (label === 'css' || label === 'scss' || label === 'less') {` + 
        `      return './vs/language/css/css.worker.js';` + 
        `    }` + 
        `    if (label === 'html' || label === 'handlebars' || label === 'razor') {` + 
        `      return './vs/language/html/html.worker.js';` + 
        `    }` + 
        `    if (label === 'typescript' || label === 'javascript') {` + 
        `      return './vs/language/typescript/ts.worker.js';` + 
        `    }` + 
        `    return './vs/editor/editor.worker.js';` + 
        `  }` + 
        `}\n${MonacoEditorCode}`

        return {
          contents: contents,
          loader: 'js'
        }
      })

      build.onEnd(async (result) => {
        await esbuild.build({
          entryPoints: workerEntryPoints.map((entry) => `./node_modules/monaco-editor/esm/${entry}`),
          bundle: true,
          minify: true,
          format: 'iife',
          outbase: './node_modules/monaco-editor/esm/',
          outdir: outdir || './dist'
        })
      })
    }
  }
}
