`,U.h(e.ul,null,`
`,U.h(e.li,null,`
`,U.h(e.p,null,`\u7EB9\u7406\u4E00\u822C\u662F\u6307\u6211\u4EEC\u5E38\u89C1\u7684\u5728\u4E00\u4E9B\u7B2C\u4E09\u65B9\u7A0B\u5E8F\u4E2D\u521B\u5EFA\u7684\u56FE\u50CF\uFF0C\u5982Photoshop\u6216GIMP\uFF0C\u5C06\u5B83\u4EEC\u201C\u8D34\u201D
\u5230\u4F7F\u7528three.js\u521B\u5EFA\u7684\u6A21\u578B\u8868\u9762\u3002`),`
`,U.h($),`
`,U.h(e.p,null,"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u{1F330}\u4E2D\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u52A0\u8F7D\u7EB9\u7406\u7684\u65B9\u6CD5\uFF0C\u4F7F\u7528",U.h(e.code,null,"THREE.TextureLoader"),`\u521B\u5EFA\u7EB9\u7406\u52A0\u8F7D\u5668\uFF0C
\u7136\u540E\u52A0\u8F7D\u7EB9\u7406\u5230\u6750\u6599\u4E2D\uFF1A`),`
`,U.h(e.pre,null,U.h(e.code,{className:"hljs language-javascript"},U.h(e.span,{className:"hljs-keyword"},"const")," loaderManager = ",U.h(e.span,{className:"hljs-keyword"},"new")," ",U.h(e.span,{className:"hljs-variable constant_"},"THREE"),".",U.h(e.span,{className:"hljs-title class_"},"LoadingManager"),`()
`,U.h(e.span,{className:"hljs-keyword"},"const")," loader = ",U.h(e.span,{className:"hljs-keyword"},"new")," ",U.h(e.span,{className:"hljs-variable constant_"},"THREE"),".",U.h(e.span,{className:"hljs-title class_"},"TextureLoader"),`(loaderManager)

`,U.h(e.span,{className:"hljs-keyword"},"const")," ",U.h(e.span,{className:"hljs-title function_"},"loadTexture")," = (",U.h(e.span,{className:"hljs-params"},"url"),`) => {
  `,U.h(e.span,{className:"hljs-keyword"},"const")," texture = loader.",U.h(e.span,{className:"hljs-title function_"},"load"),`(url)
  texture.`,U.h(e.span,{className:"hljs-property"},"colorSpace")," = ",U.h(e.span,{className:"hljs-variable constant_"},"THREE"),".",U.h(e.span,{className:"hljs-property"},"SRGBColorSpace"),`
  `,U.h(e.span,{className:"hljs-keyword"},"return"),` texture
}
`)),`
`,U.h(e.pre,null,U.h(e.code,{className:"hljs language-javascript"},U.h(e.span,{className:"hljs-keyword"},"new")," ",U.h(e.span,{className:"hljs-variable constant_"},"THREE"),".",U.h(e.span,{className:"hljs-title class_"},"MeshBasicMaterial"),"({ ",U.h(e.span,{className:"hljs-attr"},"map"),": ",U.h(e.span,{className:"hljs-title function_"},"loadTexture"),`(textureUrl) })

loaderManager.`,U.h(e.span,{className:"hljs-property"},"onload")," = ",U.h(e.span,{className:"hljs-function"},"() =>"),` {
  ... `,U.h(e.span,{className:"hljs-comment"},"// \u76F8\u5173\u6E32\u67D3\u903B\u8F91\u7684\u4EE3\u7801"),`
}
`)),`
`),`
`))}function ee(c={}){let{wrapper:e}=Object.assign({},T(),c.components);return e?U.h(e,c,U.h(w,c)):w(c)}var K=ee;var Re=Z({name:"MDX_03-TEXTURE",components:{MDXComponentContext:K},setup(c,e){return()=>b("div",{class:"markdown-body",style:"padding: 15px;"},b(K,{...e?.attrs}))}});export{Re as default};