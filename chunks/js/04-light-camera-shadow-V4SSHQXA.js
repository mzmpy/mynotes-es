import{a as N}from"./chunk-OOYSIAYD.js";import{a as Z,b as $}from"./chunk-ZT334OZW.js";import{A as I,B as W,G as k,H as d,M as V,O as J,S as q,U,d as D,e as A,f as _,g as X,h as j,p as B,u as p,v as C,w as F,y as O}from"./chunk-PSTP36CY.js";import"./chunk-NIX3CF7H.js";import{a as v}from"./chunk-LNJVFRMH.js";import{J as w,N as L,_ as l,d as t,e as r,na as n,va as z,x as S,y as P}from"./chunk-OXERZ7B4.js";r();z();r();r();r();z();r();var pe={"gl-canvas":{name:"src__components__mdx__constituents__threejs__light-camera-shadow__simple__index-iMWxIG-gl-canvas",composes:[],isReferenced:!1}},K=(o=>e=>{if(typeof e!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return o[e.replace(/[A-Z]/g,s=>"-"+s.toLowerCase())].name})(pe);var Q=w({name:"ThreeJsFundamentals",setup(){let o=S(),e=S(),s=P(),c=new W,f=new F(45,3/2,.1,500),a=new J(16777215,300);f.position.set(0,10,35),a.position.set(0,10,0),a.castShadow=!0;let ee=new q(a);c.add(ee),L(()=>{let oe=new O(40,40);new V().load($,i=>{i.colorSpace=j,i.wrapS=_,i.wrapT=_,i.magFilter=X,i.repeat.set(40/2,40/2);let le=new d({map:i,side:A}),M=new p(oe,le);M.rotation.x=-.5*Math.PI,M.receiveShadow=!0,c.add(M)});let te=3,ne=new k(te,64,64),ae=new d({color:4500104}),m=new p(ne,ae);m.position.set(-7,5,0),m.castShadow=!0,m.receiveShadow=!0;let g=6,re=new C(g,g,g),se=new d({color:16762445}),E=new p(re,se);E.position.set(7,3,-5),E.castShadow=!0,E.receiveShadow=!0;let h=30,ie=new C(h,h,h),ce=new d({color:13421772,side:D}),T=new p(ie,ce);T.position.set(0,h/2-.1,0),T.receiveShadow=!0;let H=new N({container:e.value});H.addColor(new y(a,"color"),"value").name("color"),H.add(a,"intensity",0,500);let u=H.addFolder("light position");u.add(a.position,"x",-10,10).onChange(R),u.add(a.position,"y",0,10).onChange(R),u.add(a.position,"z",-10,10).onChange(R),u.open(),s.value=new I({antialias:!0,canvas:o.value}),s.value.shadowMap.enabled=!0,s.value.setPixelRatio(10),c.add(a,m,E,T),c.background=new B(0);let G=new Z(f,o.value);G.target.set(0,5,0),G.update(),requestAnimationFrame(b)});let b=()=>{s.value.render(c,f),requestAnimationFrame(b)},R=()=>{};return()=>n(l,null,n(U,{showAnimation:!1},{canvas:()=>n("canvas",{class:K("gl-canvas"),ref:o}),sideBar:()=>n("div",{ref:e})}))}}),y=class{constructor(e,s){this.object=e,this.prop=s}get value(){return`#${this.object[this.prop].getHexString()}`}set value(e){this.object[this.prop].set(e)}};function Y(o){let e=Object.assign({h1:"h1"},v(),o.components);return t.h(t.Fragment,null,t.h(e.h1,null,"\u5149\u7167\u3001\u76F8\u673A\u548C\u9634\u5F71"),`
`,t.h(Q))}function de(o={}){let{wrapper:e}=Object.assign({},v(),o.components);return e?t.h(e,o,t.h(Y,o)):Y(o)}var x=de;var Ae=w({name:"MDX_04-LIGHT-CAMERA-SHADOW",components:{MDXComponentContext:x},setup(o,e){return()=>n("div",{class:"markdown-body",style:"padding: 15px;"},n(x,{...e?.attrs}))}});export{Ae as default};