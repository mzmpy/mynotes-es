import{Fa as B,J as W,N as u,O as S,P as i,U as G,V as R,qa as D,t as M,ua as C,ya as h}from"./chunk-JDJ5FYDV.js";import"./chunk-NIX3CF7H.js";import{a as T}from"./chunk-LNJVFRMH.js";import{J as Z,N as L,_ as F,d as U,e as f,na as b,va as a,x as Y,y as m}from"./chunk-OXERZ7B4.js";f();a();f();f();f();a();f();var N={"gl-canvas":{name:"src__components__mdx__constituents__threejs__texture__simpleCube__index-NB-coG-gl-canvas",composes:[],isReferenced:!1}},p=(c=>e=>{if(typeof e!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return c[e.replace(/[A-Z]/g,r=>"-"+r.toLowerCase())].name})(N);var g="../../assets/jpg/zhejiang01-TRLAF7KS.jpg";var y="../../assets/jpg/zhejiang02-QCXGLFNA.jpg";var z="../../assets/jpg/zhejiang03-H4F6AAQH.jpg";var d="../../assets/jpg/zhejiang04-5NEIV3SY.jpg";var v="../../assets/jpg/zhejiang05-JGP76UOR.jpg";var P="../../assets/jpg/zhejiang06-YDR3ZT7Z.jpg";var $=Z({name:"ThreeJsTextureSimpleCube",setup(){let c=Y(),e=Y(!1),r=Y(0),n=m(),Q=new D,I=new C(Q),k=[],l=new R,X=new i(45,7/5,.1,50),E=new h(16777215,3);L(()=>{let s=[new W({map:j(g)}),new W({map:j(y)}),new W({map:j(z)}),new W({map:j(d)}),new W({map:j(v)}),new W({map:j(P)})];Q.onLoad=()=>{let V=new S(1,1,1),q=new u(V,s);n.value=new G({antialias:!0,canvas:c.value,alpha:!0}),n.value.setPixelRatio(10),X.position.z=5,E.position.set(-1,3,5),q.position.set(-1,-.5,0),l.add(E,q),k.push(q),requestAnimationFrame(J)}});let J=s=>{r.value===0?r.value=s*.001:r.value+=1/60,k.forEach(V=>{V.rotation.x=r.value/3,V.rotation.y=r.value/3}),n.value.render(l,X),e.value&&requestAnimationFrame(J)},x=s=>{e.value=s,requestAnimationFrame(J)},j=s=>{let V=I.load(s);return V.colorSpace=M,V};return()=>b(F,null,b(B,{animation:e.value,onAnimation:x},{canvas:()=>b("canvas",{class:p("gl-canvas"),ref:c})}))}});function w(c){let e=Object.assign({h1:"h1",ul:"ul",li:"li",p:"p",code:"code",pre:"pre",span:"span"},T(),c.components);return U.h(U.Fragment,null,U.h(e.h1,null,"\u7EB9\u7406"),`
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
