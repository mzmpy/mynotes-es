/* With this script to create serving, we need to build first for the reason that esbuild.serve API do not support on-end callback. */

const esbuild = require('esbuild')
const http = require('http')
const fs = require('fs')
const esbuildPluginParcelCss = require('../plugins/esbuild-plugin-parcel-css')
const esbuildPluginSmartImport = require('../plugins/esbuild-plugin-elementplus-smartimport')
const esbuildPluginJsxImportSource = require('../plugins/esbuild-plugin-jsx-import-source')

esbuild.serve({
  port: 4375,
  host: '127.0.0.1',
  servedir: '/dist',
  onRequest: (args) => {
    console.log(`${args.method}: User ${args.remoteAddress} accesses path ${args.path} with server responsing status code ${args.status} in ${args.timeInMS} ms.`)
  }
}, {
  entryPoints: ['./src/index.js'],
  bundle: true,
  minify: true,
  loader: {
    '.js': 'jsx'
  },
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  plugins: [
    esbuildPluginParcelCss({
      cssModules: {
        pattern: '[name]-[hash]-[local]'
      }
    }),
    esbuildPluginSmartImport(),
    esbuildPluginJsxImportSource({
      jsxImportSource: 'vue'
    })
  ],
  outfile: './dist/index.js'
}).then((service) => {
  // console.log(`Esbuild serve at http://${service.host}:${service.port}.`)

  const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- inject stylesheet here! --><link rel="stylesheet" href="./index.css"></link>
</head>
<body>
  <div id="app"></div>
  <!-- inject jscode here! --><script type="text/javascript" src="./index.js"></script>
</body>
</html>
`
  fs.promises.writeFile('./dist/index.html', template)

  const { host, port } = service

  http.createServer((req, res) => {
    const options = {
      port: port,
      hostname: host,
      method: req.method,
      path: req.url,
      headers: req.headers
    }

    const proxyReq = http.request(options, (proxyRes) => {
      if(proxyRes.statusCode === 404) {
        const redirectReq = http.request({ ...options, path: '/' }, (redirectRes) => {
          res.writeHead(redirectRes.statusCode, redirectRes.headers)
          // Forward the body of response from esbuild to the client
          redirectRes.pipe(res, { end: true })
        })
        redirectReq.end()
      } else {
        res.writeHead(proxyRes.statusCode, proxyRes.headers)
        proxyRes.pipe(res, { end: true })
      }
    })
    // Forward the body of request to esbuild
    req.pipe(proxyReq, { end: true })
  }).listen(3000)

  console.log(`Proxy serve at http://127.0.0.1:3000.`)
}).catch(() => process.exit(1))
