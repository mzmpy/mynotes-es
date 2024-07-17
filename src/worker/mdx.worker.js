import * as worker from 'monaco-editor-core/esm/vs/editor/editor.worker'
import { createTypeScriptWorkerService } from "@volar/monaco/worker"
import { create as createTypeScriptPlugins } from 'volar-service-typescript'
import { createNpmFileSystem } from '@volar/jsdelivr'
import { URI } from 'vscode-uri'
import {
  createMdxLanguagePlugin,
  createMdxServicePlugin,
  resolveRemarkPlugins
} from '@mdx-js/language-service'

let ts
let locale

self.onmessage = async (msg) => {
  if (msg.data?.event === 'init') {
    locale = msg.data.tsLocale
    ts = await importTsFromCdn(msg.data.tsVersion)
    self.postMessage('initted')
    return
  }

  worker.initialize((ctx, { tsconfig, dependencies }) => {
    const { options: compilerOptions } = ts.convertCompilerOptionsFromJson(
      tsconfig?.compilerOptions || {},
      '',
    )
    const asFileName = uri => uri.path
    const asUri = fileName => URI.file(fileName)
    const tsServicePlugins = createTypeScriptPlugins(ts)

    return createTypeScriptWorkerService({
      env: {
        workspaceFolders: [URI.file('/')],
        fs: createNpmFileSystem(
          (uri) => {
            if (uri.scheme === 'file') {
              if (uri.path === '/node_modules') {
                return ''
              } else if (uri.path.startsWith('/node_modules/')) {
                return uri.path.slice('/node_modules/'.length)
              }
            }
          },
          (pkgName) => dependencies[pkgName],
          (path, content) => {
            ctx.host.onFetchCdnFile(
              asUri('/node_modules/' + path).toString(),
              content,
            )
          }
        )
      },
      workerContext: ctx,
      uriConverter: {
      	asFileName,
      	asUri
      },
      typescript: ts,
      compilerOptions: compilerOptions,
      languagePlugins: [
        createMdxLanguagePlugin()
      ],
      languageServicePlugins: [
        ...tsServicePlugins,
        createMdxServicePlugin()
      ],
      setup({ project }) {
        console.log(project)
      }
    })
  })
}

async function importTsFromCdn(tsVersion='5.5.3') {
  const _module = globalThis.module
  globalThis.module = { exports: {} }
  const tsUrl = `https://cdn.jsdelivr.net/npm/typescript@${tsVersion}/lib/typescript.js`
  await import(tsUrl)
  const ts = globalThis.module.exports
  globalThis.module = _module

  return ts
}
