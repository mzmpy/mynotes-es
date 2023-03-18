import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default (options={ resolveDir: './.docs', dirReg: /\/\.docs\/?$/, type: false, generateDocTree: true }) => {
  return {
    name: 'note-route',
    setup(build) {
      build.onResolve({ filter: options.dirReg }, async (args) => {
        return {
          path: args.path,
          namespace: 'NOTE_ROUTE'
        }
      })

      build.onLoad({ filter: options.dirReg, namespace: 'NOTE_ROUTE' }, async (args) => {
        Dirext.SUPDIR = options.resolveDir

        let noteRoutes = 'const noteRoutes = [\n'
        let pathInfo = 'const pathInfo = [\n'

        const [files, DocTree] = await readdirRecur(options.resolveDir)

        for(const file of files) {
          if(file.isDirectory()) pathInfo += `  { path: '/docs/${file.relpath}', label: '${file.name}', isDir: ${file.isDirectory()} },\n`
          // avoid file is not mdx or markdown
          if(!/(\.md|\.mdx)/.test(path.extname(file.name))) continue
          
          const name = file.name.split('.').map((item) => item.toUpperCase()).join('_')
          if(file.isFile()) {
            noteRoutes += `  { path: '/docs/${file.relpath}', name: '${name}', component: () => import('${file.abspath}') },\n`
            pathInfo += `  { path: '/docs/${file.relpath}', label: '${file.name}', isDir: ${file.isDirectory()} },\n`
          }
        }

        noteRoutes += `]\n\n`
        pathInfo += `]\n\n`

        const contents =
        `import { ElMenu, ElMenuItem, ElSubMenu, ElIcon } from 'element-plus/components'\n` +
        `import { Sunrise, MoonNight, MagicStick, Key } from '@element-plus/icons-vue'\n` +
        `import { defineComponent } from 'vue'\n\n` +
        `const DocTree = defineComponent({\n` +
        `  name: 'DocTree',\n` +
        `  props: { 'defaultOpeneds': { type: Array, default: () => [] } },\n` +
        `  components: { ElMenu, ElMenuItem, ElSubMenu, Sunrise, MoonNight, Key },\n` +
        `  setup(props) {\n` +
        `    return () => {\n` +
        `      return <>\n` + DocTree +
        `      </>\n` +
        `    }\n` +
        `  }\n` +
        `})\n\n` +
        noteRoutes + pathInfo + 'export default noteRoutes\nexport { pathInfo, DocTree }\n'

        const typeDefinitionFile = options.resolveDir + '/index.d.ts'
        if(options.type && !fs.existsSync(typeDefinitionFile)) {
          await fs.promises.copyFile(path.resolve(__dirname, 'lib/type.d.ts'), typeDefinitionFile)
        }

        return {
          contents: contents,
          loader: 'jsx',
          resolveDir: './'
        }
      })

      build.onResolve({ filter: /\.mdx$/, namespace: 'NOTE_ROUTE' }, async (args) => {
        return {
          path: args.path,
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
        `    return () => <div class="markdown-body" style="padding: 15px;"><MDXComponentContext {...ctx.attrs}/></div>\n` +
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

// read directory recursively
async function readdirRecur(resolveDir, relpath, level=0) {
  const direxts = []
  let DocTree = !level
    ? spaceRepeat(8) + `<ElMenu mode="vertical" default-openeds={ props.defaultOpeneds } router active-text-color="#C6F3FF" background-color="#545C64" text-color="#b1b1b1">\n` +
      spaceRepeat(8) + `  {{\n` +
      spaceRepeat(8) + `    default: () => <>\n`
    : spaceRepeat(6*level+8) + `<ElSubMenu index="/docs/${relpath}" expand-close-icon={<ElIcon style="color: #FFF9D0"><MoonNight></MoonNight></ElIcon>} expand-open-icon={<ElIcon style="color: #FF4300"><Sunrise></Sunrise></ElIcon>}>\n` +
      spaceRepeat(6*level+8) + `  {{\n` +
      spaceRepeat(6*level+8) + `    title: () => <><ElIcon style="color: #FFEA3E"><MagicStick></MagicStick></ElIcon><span>${resolveDir.split('/').slice(-1)}</span></>,\n` +
      spaceRepeat(6*level+8) + `    default: () => <>\n`

  const dirents = await fs.promises.readdir(resolveDir, { withFileTypes: true })
  for(const dirent of dirents) {
    const dirext = new Dirext(resolveDir, dirent)
    direxts.push(dirext)

    if(dirext.isDirectory()) {
      const [subDirexts, subDocTree] = await readdirRecur(dirext.fullpath, dirext.relpath, level+1)
      direxts.push(...subDirexts)

      DocTree += subDocTree

      continue
    }

    if(!/(\.md|\.mdx)/.test(path.extname(dirext.name))) continue
    else {
      DocTree += !level
        ? spaceRepeat(8) + `      <ElMenuItem index={'/docs/${dirext.relpath}'}><ElIcon style="color: #C6F3FF"><Key></Key></ElIcon>${dirext.name}</ElMenuItem>\n`
        : spaceRepeat(6*level+8) + `      <ElMenuItem index={'/docs/${dirext.relpath}'}><ElIcon style="color: #C6F3FF"><Key></Key></ElIcon>${dirext.name}</ElMenuItem>\n`
    }
  }

  DocTree += !level
    ? spaceRepeat(8) + `    </>\n` +
      spaceRepeat(8) + `  }}\n` +
      spaceRepeat(8) + '</ElMenu>\n'
    : spaceRepeat(6*level+8) + `    </>\n` +
      spaceRepeat(6*level+8) + `  }}\n` +
      spaceRepeat(6*level+8) + `</ElSubMenu>\n`

  return [direxts, DocTree]
}

// class name Dirext means entended fs.Dirent
class Dirext {
  #Dirent
  #dir
  constructor(dir, dirent) {
    this.#dir = dir
    this.#Dirent = dirent
  }

  static SUPDIR = './'

  get name() {
    return this.#Dirent.name
  }

  //  the full relative path according to the parent directory
  get fullpath() {
    return path.join(this.#dir, this.#Dirent.name).replaceAll(path.sep, '/')
  }

  // the absolute path of this dirext
  get abspath() {
    return path.resolve(this.#dir, this.#Dirent.name).replaceAll(path.sep, '/')
  }

  // the relative path to the Dirext.SUPDIR directory
  get relpath() {
    return path.relative(Dirext.SUPDIR, this.fullpath).replaceAll(path.sep, '/')
  }

  isDirectory() {
    return this.#Dirent.isDirectory()
  }

  isFile() {
    return this.#Dirent.isFile()
  }

  toObject() {
    return {
      name: this.name,
      abspath: this.abspath,
      fullpath: this.fullpath,
      relpath: this.relpath
    }
  }
}

function spaceRepeat(n) {
  return ' '.repeat(n)
}
