import path from 'path'

export default (options={ include: [] }) => {
  return {
    name: 'mdx-to-vueComponent',
    setup(build) {
      build.onResolve({ filter: /\.mdx$/, namespace: 'file' }, async (args) => {
        let DoResolve = false

        for(const resolveDir of options.include) {
          DoResolve = path.resolve(resolveDir) === path.resolve(args.resolveDir)
          if(DoResolve) break
        }

        if(!DoResolve) return

        const resolvedPath = await build.resolve(args.path, {
          resolveDir: args.resolveDir,
          kind: args.kind,
        })
        
        if (resolvedPath.errors.length > 0) {
          return { errors: resolvedPath.errors }
        }
        
        return {
          path: resolvedPath.path,
          namespace: 'MDX_TO_VUE_COMPONENT'
        }
      })

      build.onLoad({ filter: /\.mdx$/, namespace: 'MDX_TO_VUE_COMPONENT' }, async (args) => {
        const name = path.basename(args.path, '.mdx')
        const importPath = args.path.replaceAll(path.sep, '/')
        
        const content = 
        `import { defineComponent } from 'vue'\n` +
        `import MDXComponentContext from '${importPath}'\n` +
        `export default defineComponent({\n` +
        `  name: 'MDX_${name.toUpperCase()}',\n` +
        `  components: { MDXComponentContext },` +
        `  setup(props, ctx) {\n` +
        `    return () => <div class="markdown-body" style="padding: 15px;"><MDXComponentContext {...ctx?.attrs}/></div>\n` +
        `  }\n` +
        `})`

        return {
          contents: content,
          loader: 'jsx',
          resolveDir: './'
        }
      })
    }
  }
}