import esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'

export default (options={ workers: [] }) => {
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
        const jsonPart =
        `    if(label === 'json') {\n` +
        `      return './vs/language/json/json.worker.js'\n` +
        `    }\n`
        const stylePart =
        `    if(label === 'css' || label === 'scss' || label === 'less') {\n` +
        `      return './vs/language/css/css.worker.js'\n` +
        `    }\n`
        const htmlPart =
        `    if(label === 'html' || label === 'handlebars' || label === 'razor') {\n` +
        `      return './vs/language/html/html.worker.js'\n` +
        `    }\n`
        const scriptPart =
        `    if(label === 'typescript' || label === 'javascript') {\n` +
        `      return './vs/language/typescript/ts.worker.js'\n` +
        `    }\n`
        
        const contents =
        `${MonacoEditorCode}\n` +
        `self.MonacoEnvironment = {\n` +
        `  getWorkerUrl: function (moduleId, label) {\n` +
        `${options.workers.includes('json') ? jsonPart : ''}` +
        `${options.workers.includes('css') ? stylePart : ''}` +
        `${options.workers.includes('html') ? htmlPart : ''}` +
        `${options.workers.includes('javascript') || options.workers.includes('typescript') ? scriptPart : ''}` +
        `    return './vs/editor/editor.worker.js'\n` +
        `  }\n` +
        `}`

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
