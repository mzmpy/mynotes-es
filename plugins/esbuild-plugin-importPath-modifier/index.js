export default (options={
  filters: [],
  replacements: []
}) => { 
  return {
    name: 'import-path-modifier-plugin',
    setup(build) {
      options.filters.forEach((filter, index) => {
        build.onResolve({ filter: filter }, (args) => {
          return {
            path: args.path,
            namespace: 'IMPORT_PATH_MODIFIER'
          }
        })
        build.onLoad({ filter: /.*/, namespace: 'IMPORT_PATH_MODIFIER' }, () => {
          try {
            return {
              contents: options.replacements[index],
              resolveDir: './'
            }
          } catch (err) {
            console.error('[import-path-modifier-plugin]: Something wrong occurs:', err)
          }
        })
      })
    }
  }
}
