import{Ga as x,N as w,O as b,P as y,U as g,V as _,la as T,za as E}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-6UOMWYUC.js";import"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-CICNCX7I.js";import{a as N}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-E665XJRZ.js";import{a as h}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-DPAERIMP.js";import{H as v,O as c,_ as a,d as q,e as t,na as s,va as j,x as r,y as z}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-MOAQ7JNP.js";t();j();t();t();var R="https://mzmpy.github.io/mynotes-es/assets/svg/threejs-structure-Z6NJ3YBC.svg";t();j();t();var V={"gl-canvas":{name:"src__components__mdx__constituents__threejs__fundamentals__index-f9lxbW-gl-canvas",composes:[],isReferenced:!1}},M=(e=>l=>{if(typeof l!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return e[l.replace(/[A-Z]/g,n=>"-"+n.toLowerCase())].name})(V);var C=c({name:"ThreeJsFundamentals",setup(){let e=r(),l=r(!1),n=r(0),o=z(),f=new y(75,5/3,.1,5),u=new E(16777215,3),k=new _,H=new b(1,1,1),J=new T({color:4500104}),i=new w(H,J);v(()=>{o.value=new g({antialias:!0,canvas:e.value}),o.value.setClearColor(16777215,1),o.value.setPixelRatio(10),f.position.z=2,u.position.set(-1,3,5),k.add(u,i),requestAnimationFrame(d)});let d=m=>{n.value===0?n.value=m*.001:n.value+=1/60,i.rotation.x=n.value/3,i.rotation.y=n.value/3,o.value.render(k,f),l.value&&requestAnimationFrame(d)},A=m=>{l.value=m,requestAnimationFrame(d)};return()=>s(a,null,s(x,{animation:l.value,onAnimation:A},{canvas:()=>s("canvas",{class:M("gl-canvas"),ref:e})}))}});function F(e){let l=Object.assign({h1:"h1",code:"code",p:"p",ul:"ul",li:"li",h2:"h2",pre:"pre",span:"span"},h(),e.components);return q.h(q.Fragment,null,q.h(l.h1,null,q.h(l.code,null,"ThreeJs"),"\u7684\u57FA\u7840\u6982\u5FF5"),`
`,q.h(l.p,null,q.h(l.code,null,"ThreeJs"),"\u662F\u4E00\u4E2A\u975E\u5E38\u53D7\u6B22\u8FCE\u4E14\u5F3A\u5927\u7684",q.h(l.code,null,"Javascript"),"3D\u6E32\u67D3\u5E93\uFF1B\u4E0B\u56FE\u5C55\u793A\u4E86\u57FA\u7840\u7684",q.h(l.code,null,"ThreeJs"),"\u5E94\u7528\u7ED3\u6784"),`
`,q.h(N,{src:R,alt:"\u57FA\u7840\u7684ThreeJs\u5E94\u7528\u7ED3\u6784t\u56FE",width:700}),`
`,q.h(l.ul,null,`
`,q.h(l.li,null,`
`,q.h(l.p,null,"\u9996\u5148\u6709\u4E00\u4E2A\u6E32\u67D3\u5668(",q.h(l.code,null,"Renderer"),")\uFF1B\u8FD9\u53EF\u4EE5\u8BF4\u662F",q.h(l.code,null,"ThreeJs"),"\u7684\u4E3B\u8981\u5BF9\u8C61\uFF1B\u4F60\u4F20\u5165\u4E00\u4E2A\u573A\u666F(",q.h(l.code,null,"Scene"),")\u548C\u4E00\u4E2A\u6444\u50CF\u673A(",q.h(l.code,null,"Camera"),`)\u5230\u6E32\u67D3\u5668
(`,q.h(l.code,null,"Renderer"),")\u4E2D\uFF0C\u7136\u540E\u5B83\u4F1A\u5C06\u6444\u50CF\u673A\u89C6\u690E\u4F53\u4E2D\u7684\u4E09\u7EF4\u573A\u666F\u6E32\u67D3\u6210\u4E00\u4E2A\u4E8C\u7EF4\u56FE\u7247\u663E\u793A\u5728\u753B\u5E03\u4E0A"),`
`),`
`,q.h(l.li,null,`
`,q.h(l.p,null,"\u5176\u6B21\u6709\u4E00\u4E2A\u573A\u666F\u56FE\u5B83\u662F\u4E00\u4E2A\u6811\u72B6\u7ED3\u6784\uFF0C\u7531\u5F88\u591A\u5BF9\u8C61\u7EC4\u6210\uFF0C\u6BD4\u5982\u56FE\u4E2D\u5305\u542B\u4E86\u4E00\u4E2A\u573A\u666F(",q.h(l.code,null,"Scene"),")\u5BF9\u8C61\uFF0C\u591A\u4E2A\u7F51\u683C(",q.h(l.code,null,"Mesh"),`)\u5BF9\u8C61\uFF0C\u5149\u6E90
(`,q.h(l.code,null,"Light"),")\u5BF9\u8C61\uFF0C\u7FA4\u7EC4(",q.h(l.code,null,"Group"),")\uFF0C\u4E09\u7EF4\u7269\u4F53(",q.h(l.code,null,"Object3D"),")\uFF0C\u548C\u6444\u50CF\u673A(",q.h(l.code,null,"Camera"),")\u5BF9\u8C61\uFF1B\u4E00\u4E2A\u573A\u666F(",q.h(l.code,null,"Scene"),`)\u5BF9\u8C61\u5B9A\u4E49\u4E86\u573A\u666F\u56FE\u6700\u57FA\u672C\u7684\u8981
\u7D20\uFF0C\u5E76\u5305\u4E86\u542B\u80CC\u666F\u8272\u548C\u96FE\u7B49\u5C5E\u6027\uFF1B\u8FD9\u4E9B\u5BF9\u8C61\u901A\u8FC7\u4E00\u4E2A\u5C42\u7EA7\u5173\u7CFB\u660E\u786E\u7684\u6811\u72B6\u7ED3\u6784\u6765\u5C55\u793A\u51FA\u5404\u81EA\u7684\u4F4D\u7F6E\u548C\u65B9\u5411\uFF1B\u5B50\u5BF9\u8C61\u7684\u4F4D\u7F6E\u548C\u65B9\u5411\u603B\u662F\u76F8
\u5BF9\u4E8E\u7236\u5BF9\u8C61\u800C\u8A00\u7684\uFF1B\u6BD4\u5982\u8BF4\u6C7D\u8F66\u7684\u8F6E\u5B50\u662F\u6C7D\u8F66\u7684\u5B50\u5BF9\u8C61\uFF0C\u8FD9\u6837\u79FB\u52A8\u548C\u5B9A\u4F4D\u6C7D\u8F66\u65F6\u5C31\u4F1A\u81EA\u52A8\u79FB\u52A8\u8F6E\u5B50\uFF1B\u4F60\u53EF\u4EE5\u5728\u573A\u666F\u56FE\u7684\u8FD9\u7BC7\u6587\u7AE0\u4E2D\u4E86
\u89E3\u66F4\u591A\u5185\u5BB9`),`
`),`
`,q.h(l.li,null,`
`,q.h(l.p,null,"\u6CE8\u610F\u56FE\u4E2D\u6444\u50CF\u673A(",q.h(l.code,null,"Camera"),")\u662F\u4E00\u534A\u5728\u573A\u666F\u56FE\u4E2D\uFF0C\u4E00\u534A\u5728\u573A\u666F\u56FE\u5916\u7684\uFF1B\u8FD9\u8868\u793A\u5728ThreeJs\u4E2D\uFF0C\u6444\u50CF\u673A(",q.h(l.code,null,"Camera"),`)\u548C\u5176\u4ED6\u5BF9\u8C61\u4E0D\u540C\u7684\u662F\uFF0C
\u5B83\u4E0D\u4E00\u5B9A\u8981\u5728\u573A\u666F\u56FE\u4E2D\u624D\u80FD\u8D77\u4F5C\u7528\uFF1B\u76F8\u540C\u7684\u662F\uFF0C\u6444\u50CF\u673A(`,q.h(l.code,null,"Camera"),`)\u4F5C\u4E3A\u5176\u4ED6\u5BF9\u8C61\u7684\u5B50\u5BF9\u8C61\uFF0C\u540C\u6837\u4F1A\u7EE7\u627F\u5B83\u7236\u5BF9\u8C61\u7684\u4F4D\u7F6E\u548C\u671D\u5411\uFF1B\u5728\u573A\u666F
\u56FE\u8FD9\u7BC7\u6587\u7AE0\u7684\u7ED3\u5C3E\u90E8\u5206\u6709\u653E\u7F6E\u591A\u4E2A\u6444\u50CF\u673A(`,q.h(l.code,null,"Camera"),")\u5728\u4E00\u4E2A\u573A\u666F\u4E2D\u7684\u4F8B\u5B50"),`
`),`
`,q.h(l.li,null,`
`,q.h(l.p,null,"\u7F51\u683C(",q.h(l.code,null,"Mesh"),")\u5BF9\u8C61\u53EF\u4EE5\u7406\u89E3\u4E3A\u7528\u4E00\u79CD\u7279\u5B9A\u7684\u6750\u8D28(",q.h(l.code,null,"Material"),")\u6765\u7ED8\u5236\u7684\u4E00\u4E2A\u7279\u5B9A\u7684\u51E0\u4F55\u4F53(",q.h(l.code,null,"Geometry"),")\uFF1B\u6750\u8D28(",q.h(l.code,null,"Material"),`)\u548C\u51E0\u4F55\u4F53
(`,q.h(l.code,null,"Geometry"),")\u53EF\u4EE5\u88AB\u591A\u4E2A\u7F51\u683C(",q.h(l.code,null,"Mesh"),")\u5BF9\u8C61\u4F7F\u7528\uFF1B\u6BD4\u5982\u5728\u4E0D\u540C\u7684\u4F4D\u7F6E\u753B\u4E24\u4E2A\u84DD\u8272\u7ACB\u65B9\u4F53\uFF0C\u6211\u4EEC\u4F1A\u9700\u8981\u4E24\u4E2A\u7F51\u683C(",q.h(l.code,null,"Mesh"),`)\u5BF9\u8C61\u6765\u4EE3\u8868\u6BCF\u4E00\u4E2A
\u7ACB\u65B9\u4F53\u7684\u4F4D\u7F6E\u548C\u65B9\u5411\uFF1B\u4F46\u53EA\u9700\u4E00\u4E2A\u51E0\u4F55\u4F53(`,q.h(l.code,null,"Geometry"),")\u6765\u5B58\u653E\u7ACB\u65B9\u4F53\u7684\u9876\u70B9\u6570\u636E\uFF0C\u548C\u4E00\u79CD\u6750\u8D28(",q.h(l.code,null,"Material"),`)\u6765\u5B9A\u4E49\u7ACB\u65B9\u4F53\u7684\u989C\u8272\u4E3A\u84DD\u8272
\u5C31\u53EF\u4EE5\u4E86\uFF1B\u4E24\u4E2A\u7F51\u683C(`,q.h(l.code,null,"Mesh"),")\u5BF9\u8C61\u90FD\u5F15\u7528\u4E86\u76F8\u540C\u7684\u51E0\u4F55\u4F53(",q.h(l.code,null,"Geometry"),")\u548C\u6750\u8D28(",q.h(l.code,null,"Material"),")"),`
`),`
`,q.h(l.li,null,`
`,q.h(l.p,null,"\u51E0\u4F55\u4F53(",q.h(l.code,null,"Geometry"),`)\u5BF9\u8C61\u987E\u540D\u601D\u4E49\u4EE3\u8868\u4E00\u4E9B\u51E0\u4F55\u4F53\uFF0C\u5982\u7403\u4F53\u3001\u7ACB\u65B9\u4F53\u3001\u5E73\u9762\u3001\u72D7\u3001\u732B\u3001\u4EBA\u3001\u6811\u3001\u5EFA\u7B51\u7B49\u7269\u4F53\u7684\u9876\u70B9\u4FE1\u606F\uFF1BThreeJs
\u5185\u7F6E\u4E86\u8BB8\u591A\u57FA\u672C\u51E0\u4F55\u4F53 \uFF1B\u4F60\u4E5F\u53EF\u4EE5\u521B\u5EFA\u81EA\u5B9A\u4E49\u51E0\u4F55\u4F53\u6216\u4ECE\u6587\u4EF6\u4E2D\u52A0\u8F7D\u51E0\u4F55\u4F53`),`
`),`
`,q.h(l.li,null,`
`,q.h(l.p,null,"\u6750\u8D28(",q.h(l.code,null,"Material"),")\u5BF9\u8C61\u4EE3\u8868\u7ED8\u5236\u51E0\u4F55\u4F53\u7684\u8868\u9762\u5C5E\u6027\uFF0C\u5305\u62EC\u4F7F\u7528\u7684\u989C\u8272\uFF0C\u548C\u5149\u4EAE\u7A0B\u5EA6\uFF1B\u4E00\u4E2A\u6750\u8D28(",q.h(l.code,null,"Material"),`)\u53EF\u4EE5\u5F15\u7528\u4E00\u4E2A\u6216\u591A\u4E2A\u7EB9\u7406
(`,q.h(l.code,null,"Texture"),")\uFF0C\u8FD9\u4E9B\u7EB9\u7406\u53EF\u4EE5\u7528\u6765\uFF0C\u6253\u4E2A\u6BD4\u65B9\uFF0C\u5C06\u56FE\u50CF\u5305\u88F9\u5230\u51E0\u4F55\u4F53\u7684\u8868\u9762"),`
`),`
`,q.h(l.li,null,`
`,q.h(l.p,null,"\u7EB9\u7406(",q.h(l.code,null,"Texture"),")\u5BF9\u8C61\u901A\u5E38\u8868\u793A\u4E00\u5E45\u8981\u4E48\u4ECE\u6587\u4EF6\u4E2D\u52A0\u8F7D\uFF0C\u8981\u4E48\u5728\u753B\u5E03\u4E0A\u751F\u6210\uFF0C\u8981\u4E48\u7531\u53E6\u4E00\u4E2A\u573A\u666F\u6E32\u67D3\u51FA\u7684\u56FE\u50CF"),`
`),`
`,q.h(l.li,null,`
`,q.h(l.p,null,"\u5149\u6E90(",q.h(l.code,null,"Light"),")\u5BF9\u8C61\u4EE3\u8868\u4E0D\u540C\u79CD\u7C7B\u7684\u5149"),`
`),`
`),`
`,q.h(l.h2,null,"\u57FA\u672C\u7684\u5B9E\u6218\u4F8B\u5B50"),`
`,q.h(C),`
`,q.h(l.p,null,"\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u53EF\u4EE5\u4E00\u7AA5",q.h(l.code,null,"ThreeJs"),"\u7684\u7F16\u7801\u6D41\u7A0B\uFF1A"),`
`,q.h(l.pre,null,q.h(l.code,{className:"hljs language-Javascript"},q.h(l.span,{className:"hljs-keyword"},"import")," { defineComponent, ref, onMounted, shallowRef } ",q.h(l.span,{className:"hljs-keyword"},"from")," ",q.h(l.span,{className:"hljs-string"},"'vue'"),`
`,q.h(l.span,{className:"hljs-keyword"},"import")," styles ",q.h(l.span,{className:"hljs-keyword"},"from")," ",q.h(l.span,{className:"hljs-string"},"'./index.module.css'"),`
`,q.h(l.span,{className:"hljs-keyword"},"import")," * ",q.h(l.span,{className:"hljs-keyword"},"as")," ",q.h(l.span,{className:"hljs-variable constant_"},"THREE")," ",q.h(l.span,{className:"hljs-keyword"},"from")," ",q.h(l.span,{className:"hljs-string"},"'three'"),`
`,q.h(l.span,{className:"hljs-keyword"},"import")," ",q.h(l.span,{className:"hljs-title class_"},"RenderVessel")," ",q.h(l.span,{className:"hljs-keyword"},"from")," ",q.h(l.span,{className:"hljs-string"},"'@mdx-utils/renderVessel'"),`

`,q.h(l.span,{className:"hljs-keyword"},"export")," ",q.h(l.span,{className:"hljs-keyword"},"default")," ",q.h(l.span,{className:"hljs-title function_"},"defineComponent"),`({
  `,q.h(l.span,{className:"hljs-attr"},"name"),": ",q.h(l.span,{className:"hljs-string"},"'ThreeJsFundamentals'"),`,
  `,q.h(l.span,{className:"hljs-title function_"},"setup"),"(",q.h(l.span,{className:"hljs-params"}),`) {
    `,q.h(l.span,{className:"hljs-keyword"},"const")," glVessel = ",q.h(l.span,{className:"hljs-title function_"},"ref"),`()
    `,q.h(l.span,{className:"hljs-keyword"},"const")," animation = ",q.h(l.span,{className:"hljs-title function_"},"ref"),"(",q.h(l.span,{className:"hljs-literal"},"false"),`)
    `,q.h(l.span,{className:"hljs-keyword"},"const")," localFrameTime = ",q.h(l.span,{className:"hljs-title function_"},"ref"),"(",q.h(l.span,{className:"hljs-number"},"0"),`)

    `,q.h(l.span,{className:"hljs-keyword"},"const")," renderer = ",q.h(l.span,{className:"hljs-title function_"},"shallowRef"),`()
    `,q.h(l.span,{className:"hljs-keyword"},"const")," camera = ",q.h(l.span,{className:"hljs-keyword"},"new")," ",q.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",q.h(l.span,{className:"hljs-title class_"},"PerspectiveCamera"),"(",q.h(l.span,{className:"hljs-number"},"75"),", ",q.h(l.span,{className:"hljs-number"},"5"),"/",q.h(l.span,{className:"hljs-number"},"3"),", ",q.h(l.span,{className:"hljs-number"},"0.1"),", ",q.h(l.span,{className:"hljs-number"},"5"),`)
    `,q.h(l.span,{className:"hljs-keyword"},"const")," light = ",q.h(l.span,{className:"hljs-keyword"},"new")," ",q.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",q.h(l.span,{className:"hljs-title class_"},"DirectionalLight"),"(",q.h(l.span,{className:"hljs-number"},"0xffffff"),", ",q.h(l.span,{className:"hljs-number"},"3"),`)
    `,q.h(l.span,{className:"hljs-keyword"},"const")," scene = ",q.h(l.span,{className:"hljs-keyword"},"new")," ",q.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",q.h(l.span,{className:"hljs-title class_"},"Scene"),`()
    `,q.h(l.span,{className:"hljs-keyword"},"const")," geometry = ",q.h(l.span,{className:"hljs-keyword"},"new")," ",q.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",q.h(l.span,{className:"hljs-title class_"},"BoxGeometry"),"(",q.h(l.span,{className:"hljs-number"},"1"),", ",q.h(l.span,{className:"hljs-number"},"1"),", ",q.h(l.span,{className:"hljs-number"},"1"),`)
    `,q.h(l.span,{className:"hljs-keyword"},"const")," material = ",q.h(l.span,{className:"hljs-keyword"},"new")," ",q.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",q.h(l.span,{className:"hljs-title class_"},"MeshPhongMaterial"),"({ ",q.h(l.span,{className:"hljs-attr"},"color"),": ",q.h(l.span,{className:"hljs-number"},"0x44aa88"),` })
    `,q.h(l.span,{className:"hljs-keyword"},"const")," cube = ",q.h(l.span,{className:"hljs-keyword"},"new")," ",q.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",q.h(l.span,{className:"hljs-title class_"},"Mesh"),`(geometry, material)

    `,q.h(l.span,{className:"hljs-title function_"},"onMounted"),"(",q.h(l.span,{className:"hljs-function"},"() =>"),` {
      renderer.`,q.h(l.span,{className:"hljs-property"},"value")," = ",q.h(l.span,{className:"hljs-keyword"},"new")," ",q.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",q.h(l.span,{className:"hljs-title class_"},"WebGLRenderer"),"({ ",q.h(l.span,{className:"hljs-attr"},"antialias"),": ",q.h(l.span,{className:"hljs-literal"},"true"),", ",q.h(l.span,{className:"hljs-attr"},"canvas"),": glVessel.",q.h(l.span,{className:"hljs-property"},"value"),` })
      renderer.`,q.h(l.span,{className:"hljs-property"},"value"),".",q.h(l.span,{className:"hljs-title function_"},"setClearColor"),"(",q.h(l.span,{className:"hljs-number"},"0xffffff"),", ",q.h(l.span,{className:"hljs-number"},"1"),`)
      renderer.`,q.h(l.span,{className:"hljs-property"},"value"),".",q.h(l.span,{className:"hljs-title function_"},"setPixelRatio"),"(",q.h(l.span,{className:"hljs-number"},"10"),`)
      camera.`,q.h(l.span,{className:"hljs-property"},"position"),".",q.h(l.span,{className:"hljs-property"},"z")," = ",q.h(l.span,{className:"hljs-number"},"2"),`
      light.`,q.h(l.span,{className:"hljs-property"},"position"),".",q.h(l.span,{className:"hljs-title function_"},"set"),"(-",q.h(l.span,{className:"hljs-number"},"1"),", ",q.h(l.span,{className:"hljs-number"},"3"),", ",q.h(l.span,{className:"hljs-number"},"5"),`)
      scene.`,q.h(l.span,{className:"hljs-title function_"},"add"),`(light, cube)

      `,q.h(l.span,{className:"hljs-title function_"},"requestAnimationFrame"),`(render)
    })

    `,q.h(l.span,{className:"hljs-keyword"},"const")," ",q.h(l.span,{className:"hljs-title function_"},"render")," = (",q.h(l.span,{className:"hljs-params"},"time"),`) => {
      `,q.h(l.span,{className:"hljs-keyword"},"if"),"(localFrameTime.",q.h(l.span,{className:"hljs-property"},"value")," === ",q.h(l.span,{className:"hljs-number"},"0"),") localFrameTime.",q.h(l.span,{className:"hljs-property"},"value")," = time * ",q.h(l.span,{className:"hljs-number"},"0.001"),`
      `,q.h(l.span,{className:"hljs-keyword"},"else"),` {
        localFrameTime.`,q.h(l.span,{className:"hljs-property"},"value")," += ",q.h(l.span,{className:"hljs-number"},"1")," / ",q.h(l.span,{className:"hljs-number"},"60"),`
      }

      cube.`,q.h(l.span,{className:"hljs-property"},"rotation"),".",q.h(l.span,{className:"hljs-property"},"x")," = localFrameTime.",q.h(l.span,{className:"hljs-property"},"value")," / ",q.h(l.span,{className:"hljs-number"},"3"),`
      cube.`,q.h(l.span,{className:"hljs-property"},"rotation"),".",q.h(l.span,{className:"hljs-property"},"y")," = localFrameTime.",q.h(l.span,{className:"hljs-property"},"value")," / ",q.h(l.span,{className:"hljs-number"},"3"),`

      renderer.`,q.h(l.span,{className:"hljs-property"},"value"),".",q.h(l.span,{className:"hljs-title function_"},"render"),`(scene, camera)

      `,q.h(l.span,{className:"hljs-keyword"},"if"),"(animation.",q.h(l.span,{className:"hljs-property"},"value"),") ",q.h(l.span,{className:"hljs-title function_"},"requestAnimationFrame"),`(render)
    }

    `,q.h(l.span,{className:"hljs-keyword"},"const")," ",q.h(l.span,{className:"hljs-title function_"},"onAnimation")," = (",q.h(l.span,{className:"hljs-params"},"val"),`) => {
      animation.`,q.h(l.span,{className:"hljs-property"},"value"),` = val
      `,q.h(l.span,{className:"hljs-title function_"},"requestAnimationFrame"),`(render)
    }

    `,q.h(l.span,{className:"hljs-keyword"},"return")," ",q.h(l.span,{className:"hljs-function"},"() =>"),` {
      `,q.h(l.span,{className:"hljs-keyword"},"return")," ",q.h(l.span,{className:"xml"},q.h(l.span,{className:"hljs-tag"},"<>"),`
        `,q.h(l.span,{className:"hljs-tag"},"<",q.h(l.span,{className:"hljs-name"},"RenderVessel")," ",q.h(l.span,{className:"hljs-attr"},"animation"),"=",q.h(l.span,{className:"hljs-string"},"{animation.value}")," ",q.h(l.span,{className:"hljs-attr"},"onAnimation"),"=",q.h(l.span,{className:"hljs-string"},"{onAnimation}"),">"),`
          {{
            canvas: () => `,q.h(l.span,{className:"hljs-tag"},"<",q.h(l.span,{className:"hljs-name"},"canvas")," ",q.h(l.span,{className:"hljs-attr"},"class"),"=",q.h(l.span,{className:"hljs-string"},"{")," ",q.h(l.span,{className:"hljs-attr"},"styles"),"('",q.h(l.span,{className:"hljs-attr"},"gl-canvas"),"') } ",q.h(l.span,{className:"hljs-attr"},"ref"),"=",q.h(l.span,{className:"hljs-string"},"{")," ",q.h(l.span,{className:"hljs-attr"},"glVessel")," }>"),q.h(l.span,{className:"hljs-tag"},"</",q.h(l.span,{className:"hljs-name"},"canvas"),">"),`
          }}
        `,q.h(l.span,{className:"hljs-tag"},"</",q.h(l.span,{className:"hljs-name"},"RenderVessel"),">"),`
      `,q.h(l.span,{className:"hljs-tag"},"</>")),`
    }
  }
})
`)))}function G(e={}){let{wrapper:l}=Object.assign({},h(),e.components);return l?q.h(l,e,q.h(F,e)):F(e)}var p=G;var o5=c({name:"MDX_01-FUNDAMENTALS",components:{MDXComponentContext:p},setup(e,l){return()=>s("div",{class:"markdown-body",style:"padding: 15px;"},s(p,{...l?.attrs}))}});export{o5 as default};
