import{a as B}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-RIOL354N.js";import{Ea as F,Fa as V,G as f,N as k,P as A,U as S,V as C,ha as P,ka as b,xa as D}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-TD4TYOPQ.js";import"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-5QVKP7EZ.js";import{a as O}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-O734CBPA.js";import{a as E}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-KLQSSXLF.js";import{J as u,N as H,_ as d,d as s,e as t,na as n,va as G,x as p,y as M}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-RMEIYZWT.js";t();G();t();t();t();G();t();var s5={"gl-canvas":{name:"src__components__mdx__constituents__threejs__scene__index-DIiWYq-gl-canvas",composes:[],isReferenced:!1}},I=(a=>l=>{if(typeof l!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return a[l.replace(/[A-Z]/g,h=>"-"+h.toLowerCase())].name})(s5);var X=u({name:"ThreeJsScene",setup(){let a=p(),l=p(),h=p(!0),r=p(0),q=M(),v=new P(1,6,6),j=[],w=new C,o=new f;j.push(o),w.add(o);let J=new b({emissive:16776960}),y=new k(v,J);y.scale.set(5,5,5),o.add(y);let m=new f;m.position.x=15,j.push(m),o.add(m);let W=new b({color:2241535,emissive:1122884}),T=new k(v,W);m.add(T);let i=new f;i.position.x=2,j.push(i),m.add(i);let Y=new b({color:8947848,emissive:2236962}),z=new k(v,Y);z.scale.set(.5,.5,.5),i.add(z);let Z=new D(16777215,300);w.add(Z);let N=new A(45,5/3,.1,1e3);N.position.set(0,50,0),N.up.set(0,0,1),N.lookAt(0,0,0),H(()=>{let e=new B({container:l.value});c(e,o,"solarSystem",26),c(e,y,"sun"),c(e,m,"earthOrbit"),c(e,T,"earth"),c(e,i,"moonOrbit"),c(e,z,"moon"),q.value=new S({antialias:!0,canvas:a.value}),q.value.setClearColor(0,1),q.value.setPixelRatio(10),requestAnimationFrame(_)});let c=(e,g,Q,$)=>{let l5=new R(g,$);e.add(l5,"visible").name(Q)},_=e=>{r.value===0?r.value=e*.001:r.value+=1/60,j.forEach(g=>{g.rotation.y=r.value}),q.value.render(w,N),h.value&&requestAnimationFrame(_)},K=e=>{h.value=e,requestAnimationFrame(_)};return()=>n(d,null,n(V,{animation:h.value,onAnimation:K},{canvas:()=>n("canvas",{class:I("gl-canvas"),ref:a}),sideBar:()=>n("div",{ref:l})}))}}),R=class{#l;#s=!1;constructor(l,h=10,r=10){let q=new F(h,r);q.material.depthTest=!1,q.renderOrder=1,l.add(q),this.#l=q,this.#l.visible=!1}get visible(){return this.#s}set visible(l){this.#s=l,this.#l.visible=l}};var L="https://mzmpy.github.io/mynotes-es/assets/svg/scene-graph-sun-earth-moon-XWK5IRLS.svg";function U(a){let l=Object.assign({h1:"h1",ul:"ul",li:"li",p:"p",pre:"pre",code:"code",span:"span"},E(),a.components);return s.h(s.Fragment,null,s.h(l.h1,null,"\u573A\u666F\u56FE"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,`
`,s.h(l.p,null,`\u573A\u666F\u56FE\u57283D\u5F15\u64CE\u662F\u4E00\u4E2A\u56FE\u4E2D\u8282\u70B9\u7684\u5C42\u6B21\u7ED3\u6784\uFF1B\u8FD9\u6837\u8BF4\u53EF\u80FD\u6709\u70B9\u62BD\u8C61\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A\u5730\u7403\u7ED5\u7740\u592A\u9633\u8F6C\uFF0C
\u6708\u7403\u7ED5\u7740\u5730\u7403\u8F6C\u3002\u6708\u7403\u7ED5\u7740\u5730\u7403\u8F6C\u4E86\u4E00\u5708\uFF1B\u4ECE\u6708\u7403\u7684\u89D2\u5EA6\u770B\uFF0C\u5B83\u662F\u5728\u5730\u7403\u7684 "\u5C40\u90E8\u7A7A\u95F4 "\u4E2D\u65CB\u8F6C\u3002
\u5C3D\u7BA1\u5B83\u76F8\u5BF9\u4E8E\u592A\u9633\u7684\u8FD0\u52A8\u662F\u4E00\u4E9B\u75AF\u72C2\u7684\u50CF\u87BA\u7EBF\u56FE\u4E00\u6837\u7684\u66F2\u7EBF\uFF0C\u4F46\u4ECE\u6708\u7403\u7684\u89D2\u5EA6\u6765\u770B\uFF0C\u5B83\u53EA\u9700\u8981\u5173\u6CE8
\u81EA\u8EAB\u56F4\u7ED5\u5730\u7403\u8FD9\u4E2A\u5C40\u90E8\u7A7A\u95F4\u7684\u65CB\u8F6C\u5373\u53EF\u3002\u6240\u4EE5\u201C\u573A\u666F\u56FE\u201D\u7684\u201C\u573A\u666F\u201D\u6307\u7684\u662F\u201C\u5C40\u90E8\u201D\u7684\u610F\u601D\uFF1B\u5927\u90E8\u5206\u65F6\u5019
\u6211\u4EEC\u4E0D\u603B\u662F\u9700\u8981\u7EDD\u5BF9\u5730\u53BB\u89C2\u5BDF\u{1F440}\uFF0C\u800C\u662F\u57FA\u4E8E\u6211\u4EEC\u6240\u5904\u7684\u5C40\u90E8\uFF08\u573A\u666F\uFF09\u73AF\u5883\u5C31\u591F\u4E86\u3002`),`
`,s.h(X),`
`,s.h(l.p,null,"\u6700\u540E\uFF0C\u6211\u4EEC\u5F97\u5230\u7684\u573A\u666F\u56FE\u662F\u8FD9\u6837\u7684\uFF1A"),`
`,s.h(O,{alt:"\u573A\u666F\u56FE\uFF1A\u592A\u9633-\u5730\u6708\u7CFB\u7EDF",src:L,width:"500"}),`
`,s.h(l.p,null,"\u4E3B\u8981\u7684\u4EE3\u7801\u903B\u8F91\uFF1A"),`
`,s.h(l.pre,null,s.h(l.code,{className:"hljs language-javascript"},s.h(l.span,{className:"hljs-keyword"},"import")," { defineComponent, ref, shallowRef, onMounted } ",s.h(l.span,{className:"hljs-keyword"},"from")," ",s.h(l.span,{className:"hljs-string"},"'vue'"),`
`,s.h(l.span,{className:"hljs-keyword"},"import")," styles ",s.h(l.span,{className:"hljs-keyword"},"from")," ",s.h(l.span,{className:"hljs-string"},"'./index.module.css'"),`
`,s.h(l.span,{className:"hljs-keyword"},"import")," * ",s.h(l.span,{className:"hljs-keyword"},"as")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE")," ",s.h(l.span,{className:"hljs-keyword"},"from")," ",s.h(l.span,{className:"hljs-string"},"'three'"),`
`,s.h(l.span,{className:"hljs-keyword"},"import")," ",s.h(l.span,{className:"hljs-title class_"},"RenderVessel")," ",s.h(l.span,{className:"hljs-keyword"},"from")," ",s.h(l.span,{className:"hljs-string"},"'@mdx-utils/renderVessel'"),`
`,s.h(l.span,{className:"hljs-keyword"},"import")," { ",s.h(l.span,{className:"hljs-variable constant_"},"GUI")," } ",s.h(l.span,{className:"hljs-keyword"},"from")," ",s.h(l.span,{className:"hljs-string"},"'three/addons/libs/lil-gui.module.min.js'"),`

`,s.h(l.span,{className:"hljs-keyword"},"export")," ",s.h(l.span,{className:"hljs-keyword"},"default")," ",s.h(l.span,{className:"hljs-title function_"},"defineComponent"),`({
  `,s.h(l.span,{className:"hljs-attr"},"name"),": ",s.h(l.span,{className:"hljs-string"},"'ThreeJsScene'"),`,
  `,s.h(l.span,{className:"hljs-title function_"},"setup"),"(",s.h(l.span,{className:"hljs-params"}),`) {
    `,s.h(l.span,{className:"hljs-keyword"},"const")," glVessel = ",s.h(l.span,{className:"hljs-title function_"},"ref"),`()
    `,s.h(l.span,{className:"hljs-keyword"},"const")," sideBar = ",s.h(l.span,{className:"hljs-title function_"},"ref"),`()
    `,s.h(l.span,{className:"hljs-keyword"},"const")," animation = ",s.h(l.span,{className:"hljs-title function_"},"ref"),"(",s.h(l.span,{className:"hljs-literal"},"true"),`)
    `,s.h(l.span,{className:"hljs-keyword"},"const")," localFrameTime = ",s.h(l.span,{className:"hljs-title function_"},"ref"),"(",s.h(l.span,{className:"hljs-number"},"0"),`)
    `,s.h(l.span,{className:"hljs-keyword"},"const")," renderer = ",s.h(l.span,{className:"hljs-title function_"},"shallowRef"),`()
    `,s.h(l.span,{className:"hljs-keyword"},"const")," sphereGeometry = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"SphereGeometry"),"(",s.h(l.span,{className:"hljs-number"},"1"),", ",s.h(l.span,{className:"hljs-number"},"6"),", ",s.h(l.span,{className:"hljs-number"},"6"),`)
    `,s.h(l.span,{className:"hljs-keyword"},"const"),` objects = []

    `,s.h(l.span,{className:"hljs-keyword"},"const")," scene = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"Scene"),`()

    `,s.h(l.span,{className:"hljs-keyword"},"const")," solarSystem = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"Object3D"),`()
    objects.`,s.h(l.span,{className:"hljs-title function_"},"push"),`(solarSystem)
    scene.`,s.h(l.span,{className:"hljs-title function_"},"add"),`(solarSystem)

    `,s.h(l.span,{className:"hljs-keyword"},"const")," sunMaterial = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"MeshPhongMaterial"),"({ ",s.h(l.span,{className:"hljs-attr"},"emissive"),": ",s.h(l.span,{className:"hljs-number"},"0xffff00"),` })
    `,s.h(l.span,{className:"hljs-keyword"},"const")," sun = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"Mesh"),`(sphereGeometry, sunMaterial)
    sun.`,s.h(l.span,{className:"hljs-property"},"scale"),".",s.h(l.span,{className:"hljs-title function_"},"set"),"(",s.h(l.span,{className:"hljs-number"},"5"),", ",s.h(l.span,{className:"hljs-number"},"5"),", ",s.h(l.span,{className:"hljs-number"},"5"),`)
    solarSystem.`,s.h(l.span,{className:"hljs-title function_"},"add"),`(sun)

    `,s.h(l.span,{className:"hljs-keyword"},"const")," earthOrbit = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"Object3D"),`()
    earthOrbit.`,s.h(l.span,{className:"hljs-property"},"position"),".",s.h(l.span,{className:"hljs-property"},"x")," = ",s.h(l.span,{className:"hljs-number"},"15"),`
    objects.`,s.h(l.span,{className:"hljs-title function_"},"push"),`(earthOrbit)
    solarSystem.`,s.h(l.span,{className:"hljs-title function_"},"add"),`(earthOrbit)

    `,s.h(l.span,{className:"hljs-keyword"},"const")," earthMaterial = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"MeshPhongMaterial"),"({ ",s.h(l.span,{className:"hljs-attr"},"color"),": ",s.h(l.span,{className:"hljs-number"},"0x2233ff"),", ",s.h(l.span,{className:"hljs-attr"},"emissive"),": ",s.h(l.span,{className:"hljs-number"},"0x112244"),` })
    `,s.h(l.span,{className:"hljs-keyword"},"const")," earth = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"Mesh"),`(sphereGeometry, earthMaterial)
    earthOrbit.`,s.h(l.span,{className:"hljs-title function_"},"add"),`(earth)

    `,s.h(l.span,{className:"hljs-keyword"},"const")," moonOrbit = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"Object3D"),`()
    moonOrbit.`,s.h(l.span,{className:"hljs-property"},"position"),".",s.h(l.span,{className:"hljs-property"},"x")," = ",s.h(l.span,{className:"hljs-number"},"2"),`
    objects.`,s.h(l.span,{className:"hljs-title function_"},"push"),`(moonOrbit)
    earthOrbit.`,s.h(l.span,{className:"hljs-title function_"},"add"),`(moonOrbit)

    `,s.h(l.span,{className:"hljs-keyword"},"const")," moonMaterial = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"MeshPhongMaterial"),"({ ",s.h(l.span,{className:"hljs-attr"},"color"),": ",s.h(l.span,{className:"hljs-number"},"0x888888"),", ",s.h(l.span,{className:"hljs-attr"},"emissive"),": ",s.h(l.span,{className:"hljs-number"},"0x222222"),` })
    `,s.h(l.span,{className:"hljs-keyword"},"const")," moon = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"Mesh"),`(sphereGeometry, moonMaterial)
    moon.`,s.h(l.span,{className:"hljs-property"},"scale"),".",s.h(l.span,{className:"hljs-title function_"},"set"),"(",s.h(l.span,{className:"hljs-number"},"0.5"),", ",s.h(l.span,{className:"hljs-number"},"0.5"),", ",s.h(l.span,{className:"hljs-number"},"0.5"),`)
    moonOrbit.`,s.h(l.span,{className:"hljs-title function_"},"add"),`(moon)

    `,s.h(l.span,{className:"hljs-keyword"},"const")," light = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"PointLight"),"(",s.h(l.span,{className:"hljs-number"},"0xffffff"),", ",s.h(l.span,{className:"hljs-number"},"300"),`)
    scene.`,s.h(l.span,{className:"hljs-title function_"},"add"),`(light)

    `,s.h(l.span,{className:"hljs-keyword"},"const")," camera = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"PerspectiveCamera"),"(",s.h(l.span,{className:"hljs-number"},"45"),", ",s.h(l.span,{className:"hljs-number"},"5"),"/",s.h(l.span,{className:"hljs-number"},"3"),", ",s.h(l.span,{className:"hljs-number"},"0.1"),", ",s.h(l.span,{className:"hljs-number"},"1000"),`)
    camera.`,s.h(l.span,{className:"hljs-property"},"position"),".",s.h(l.span,{className:"hljs-title function_"},"set"),"(",s.h(l.span,{className:"hljs-number"},"0"),", ",s.h(l.span,{className:"hljs-number"},"50"),", ",s.h(l.span,{className:"hljs-number"},"0"),`)
    camera.`,s.h(l.span,{className:"hljs-property"},"up"),".",s.h(l.span,{className:"hljs-title function_"},"set"),"(",s.h(l.span,{className:"hljs-number"},"0"),", ",s.h(l.span,{className:"hljs-number"},"0"),", ",s.h(l.span,{className:"hljs-number"},"1"),`)
    camera.`,s.h(l.span,{className:"hljs-title function_"},"lookAt"),"(",s.h(l.span,{className:"hljs-number"},"0"),", ",s.h(l.span,{className:"hljs-number"},"0"),", ",s.h(l.span,{className:"hljs-number"},"0"),`)

    `,s.h(l.span,{className:"hljs-title function_"},"onMounted"),"(",s.h(l.span,{className:"hljs-function"},"() =>"),` {
      `,s.h(l.span,{className:"hljs-keyword"},"const")," controllerGui = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-title function_"},"GUI"),"({ ",s.h(l.span,{className:"hljs-attr"},"container"),": sideBar.",s.h(l.span,{className:"hljs-property"},"value"),` })
      `,s.h(l.span,{className:"hljs-title function_"},"makeAxisGrid"),"(controllerGui, solarSystem, ",s.h(l.span,{className:"hljs-string"},"'solarSystem'"),", ",s.h(l.span,{className:"hljs-number"},"26"),`)
      `,s.h(l.span,{className:"hljs-title function_"},"makeAxisGrid"),"(controllerGui, sun, ",s.h(l.span,{className:"hljs-string"},"'sun'"),`)
      `,s.h(l.span,{className:"hljs-title function_"},"makeAxisGrid"),"(controllerGui, earthOrbit, ",s.h(l.span,{className:"hljs-string"},"'earthOrbit'"),`)
      `,s.h(l.span,{className:"hljs-title function_"},"makeAxisGrid"),"(controllerGui, earth, ",s.h(l.span,{className:"hljs-string"},"'earth'"),`)
      `,s.h(l.span,{className:"hljs-title function_"},"makeAxisGrid"),"(controllerGui, moonOrbit, ",s.h(l.span,{className:"hljs-string"},"'moonOrbit'"),`)
      `,s.h(l.span,{className:"hljs-title function_"},"makeAxisGrid"),"(controllerGui, moon, ",s.h(l.span,{className:"hljs-string"},"'moon'"),`)

      renderer.`,s.h(l.span,{className:"hljs-property"},"value")," = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"WebGLRenderer"),"({ ",s.h(l.span,{className:"hljs-attr"},"antialias"),": ",s.h(l.span,{className:"hljs-literal"},"true"),", ",s.h(l.span,{className:"hljs-attr"},"canvas"),": glVessel.",s.h(l.span,{className:"hljs-property"},"value"),` })
      renderer.`,s.h(l.span,{className:"hljs-property"},"value"),".",s.h(l.span,{className:"hljs-title function_"},"setClearColor"),"(",s.h(l.span,{className:"hljs-number"},"0x000000"),", ",s.h(l.span,{className:"hljs-number"},"1"),`)
      renderer.`,s.h(l.span,{className:"hljs-property"},"value"),".",s.h(l.span,{className:"hljs-title function_"},"setPixelRatio"),"(",s.h(l.span,{className:"hljs-number"},"10"),`)

      `,s.h(l.span,{className:"hljs-title function_"},"requestAnimationFrame"),`(render)
    })

    `,s.h(l.span,{className:"hljs-keyword"},"const")," ",s.h(l.span,{className:"hljs-title function_"},"makeAxisGrid")," = (",s.h(l.span,{className:"hljs-params"},"gui, node, label, units"),`) => {
      `,s.h(l.span,{className:"hljs-keyword"},"const")," helper = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-title class_"},"GridHelper"),`( node, units )
      gui.`,s.h(l.span,{className:"hljs-title function_"},"add"),"(helper, ",s.h(l.span,{className:"hljs-string"},"'visible'"),").",s.h(l.span,{className:"hljs-title function_"},"name"),`(label)
    }

    `,s.h(l.span,{className:"hljs-keyword"},"const")," ",s.h(l.span,{className:"hljs-title function_"},"render")," = (",s.h(l.span,{className:"hljs-params"},"time"),`) => {
      `,s.h(l.span,{className:"hljs-keyword"},"if"),"(localFrameTime.",s.h(l.span,{className:"hljs-property"},"value")," === ",s.h(l.span,{className:"hljs-number"},"0"),") localFrameTime.",s.h(l.span,{className:"hljs-property"},"value")," = time * ",s.h(l.span,{className:"hljs-number"},"0.001"),`
      `,s.h(l.span,{className:"hljs-keyword"},"else"),` {
        localFrameTime.`,s.h(l.span,{className:"hljs-property"},"value")," += ",s.h(l.span,{className:"hljs-number"},"1")," / ",s.h(l.span,{className:"hljs-number"},"60"),`
      }

      objects.`,s.h(l.span,{className:"hljs-title function_"},"forEach"),"(",s.h(l.span,{className:"hljs-function"},"(",s.h(l.span,{className:"hljs-params"},"obj"),") =>"),` {
        obj.`,s.h(l.span,{className:"hljs-property"},"rotation"),".",s.h(l.span,{className:"hljs-property"},"y")," = localFrameTime.",s.h(l.span,{className:"hljs-property"},"value"),`
      })
      renderer.`,s.h(l.span,{className:"hljs-property"},"value"),".",s.h(l.span,{className:"hljs-title function_"},"render"),`(scene, camera)

      `,s.h(l.span,{className:"hljs-keyword"},"if"),"(animation.",s.h(l.span,{className:"hljs-property"},"value"),") ",s.h(l.span,{className:"hljs-title function_"},"requestAnimationFrame"),`(render)
    }

    `,s.h(l.span,{className:"hljs-keyword"},"const")," ",s.h(l.span,{className:"hljs-title function_"},"onAnimation")," = (",s.h(l.span,{className:"hljs-params"},"val"),`) => {
      animation.`,s.h(l.span,{className:"hljs-property"},"value"),` = val
      `,s.h(l.span,{className:"hljs-title function_"},"requestAnimationFrame"),`(render)
    }

    `,s.h(l.span,{className:"hljs-keyword"},"return")," ",s.h(l.span,{className:"hljs-function"},"() =>"),` {
      `,s.h(l.span,{className:"hljs-keyword"},"return")," ",s.h(l.span,{className:"xml"},s.h(l.span,{className:"hljs-tag"},"<>"),`
        `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"RenderVessel")," ",s.h(l.span,{className:"hljs-attr"},"animation"),"=",s.h(l.span,{className:"hljs-string"},"{animation.value}")," ",s.h(l.span,{className:"hljs-attr"},"onAnimation"),"=",s.h(l.span,{className:"hljs-string"},"{onAnimation}"),">"),`
          {{
            canvas: () => `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"canvas")," ",s.h(l.span,{className:"hljs-attr"},"class"),"=",s.h(l.span,{className:"hljs-string"},"{styles("),"'",s.h(l.span,{className:"hljs-attr"},"gl-canvas"),"')} ",s.h(l.span,{className:"hljs-attr"},"ref"),"=",s.h(l.span,{className:"hljs-string"},"{glVessel}"),">"),s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"canvas"),">"),`,
            sideBar: () => `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"div")," ",s.h(l.span,{className:"hljs-attr"},"ref"),"=",s.h(l.span,{className:"hljs-string"},"{sideBar}"),">"),s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"div"),">"),`
          }}
        `,s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"RenderVessel"),">"),`
      `,s.h(l.span,{className:"hljs-tag"},"</>")),`
    }
  }
})

`,s.h(l.span,{className:"hljs-keyword"},"class")," ",s.h(l.span,{className:"hljs-title class_"},"GridHelper"),` {
  #grid
  #visible = `,s.h(l.span,{className:"hljs-literal"},"false"),`

  `,s.h(l.span,{className:"hljs-title function_"},"constructor"),"(",s.h(l.span,{className:"hljs-params"},"node, size=",s.h(l.span,{className:"hljs-number"},"10"),", divisions=",s.h(l.span,{className:"hljs-number"},"10")),`) {
    `,s.h(l.span,{className:"hljs-keyword"},"const")," grid = ",s.h(l.span,{className:"hljs-keyword"},"new")," ",s.h(l.span,{className:"hljs-variable constant_"},"THREE"),".",s.h(l.span,{className:"hljs-title class_"},"GridHelper"),`(size, divisions)

    grid.`,s.h(l.span,{className:"hljs-property"},"material"),".",s.h(l.span,{className:"hljs-property"},"depthTest")," = ",s.h(l.span,{className:"hljs-literal"},"false"),`
    grid.`,s.h(l.span,{className:"hljs-property"},"renderOrder")," = ",s.h(l.span,{className:"hljs-number"},"1"),`
    node.`,s.h(l.span,{className:"hljs-title function_"},"add"),`(grid)
    `,s.h(l.span,{className:"hljs-variable language_"},"this"),`.#grid = grid
    `,s.h(l.span,{className:"hljs-variable language_"},"this"),".#grid.",s.h(l.span,{className:"hljs-property"},"visible")," = ",s.h(l.span,{className:"hljs-literal"},"false"),`
  }

  `,s.h(l.span,{className:"hljs-keyword"},"get")," ",s.h(l.span,{className:"hljs-title function_"},"visible"),`() {
    `,s.h(l.span,{className:"hljs-keyword"},"return")," ",s.h(l.span,{className:"hljs-variable language_"},"this"),`.#visible
  }

  `,s.h(l.span,{className:"hljs-keyword"},"set")," ",s.h(l.span,{className:"hljs-title function_"},"visible"),"(",s.h(l.span,{className:"hljs-params"},"val"),`) {
    `,s.h(l.span,{className:"hljs-variable language_"},"this"),`.#visible = val
    `,s.h(l.span,{className:"hljs-variable language_"},"this"),".#grid.",s.h(l.span,{className:"hljs-property"},"visible"),` = val
  }
}
`)),`
`),`
`))}function e5(a={}){let{wrapper:l}=Object.assign({},E(),a.components);return l?s.h(l,a,s.h(U,a)):U(a)}var x=e5;var g5=u({name:"MDX_02-SCENE",components:{MDXComponentContext:x},setup(a,l){return()=>n("div",{class:"markdown-body",style:"padding: 15px;"},n(x,{...l?.attrs}))}});export{g5 as default};
