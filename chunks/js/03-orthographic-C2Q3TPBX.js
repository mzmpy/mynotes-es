import{a as R,b as T,c as C,e as L,f as S,g as U,h as D,i as V}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-RCTJX4YQ.js";import{r}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-DOCUIH5B.js";import{a as y}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-M22WTZSL.js";import{M as t,R as F,ba as b,f as a,g as h,qa as e,ya as E,z as c}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-WBJ4GZYY.js";h();E();h();h();h();E();h();var us={vessel:{name:"src__components__mdx__constituents__webgl__orthographic__transformF__index-y8izxq-vessel",composes:[],isReferenced:!1},operation:{name:"src__components__mdx__constituents__webgl__orthographic__transformF__index-y8izxq-operation",composes:[],isReferenced:!1},"gl-canvas":{name:"src__components__mdx__constituents__webgl__orthographic__transformF__index-y8izxq-gl-canvas",composes:[],isReferenced:!1}},o=(l=>s=>{if(typeof s!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return l[s.replace(/[A-Z]/g,j=>"-"+j.toLowerCase())].name})(us);var B=t({name:"WebGLTransformF",components:{ElSlider:r},setup(){let l=c(),s=c(50),j=c(50),i=c(50),_=c(0),d=c(0),f=c(0),m,k=`
    attribute vec4 a_position;
    uniform mat4 u_project_matrix;
    uniform mat4 u_translate_matrix;
    uniform mat4 u_thetax_matrix;
    uniform mat4 u_thetay_matrix;
    uniform mat4 u_thetaz_matrix;
    attribute vec4 a_color;
    varying vec4 v_color;

    void main() {
      gl_Position = u_project_matrix * u_translate_matrix * u_thetax_matrix * u_thetay_matrix * u_thetaz_matrix * a_position;
      v_color = a_color;
    }
    `,z=`
    precision mediump float;
    varying vec4 v_color;

    void main() {
      gl_FragColor = v_color;
    }
    `,G=()=>{let n=l.value.getContext("webgl");if(!n)return;C(n,500,500);let N=R(n,n.VERTEX_SHADER,k),g=R(n,n.FRAGMENT_SHADER,z);return T(n,N,g)},p=()=>{let n=l.value.getContext("webgl");if(!n)return;let N=n.getAttribLocation(m,"a_position"),g=n.getUniformLocation(m,"u_project_matrix"),M=n.getUniformLocation(m,"u_translate_matrix"),J=n.getUniformLocation(m,"u_thetax_matrix"),K=n.getUniformLocation(m,"u_thetay_matrix"),Q=n.getUniformLocation(m,"u_thetaz_matrix"),w=n.getAttribLocation(m,"a_color");n.viewport(0,0,n.canvas.width,n.canvas.height),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.useProgram(m);let $=parseFloat(u(s.value)),ss=parseFloat(u(j.value)),as=parseFloat(u(i.value)),ns=x(_.value),es=x(d.value),ls=x(f.value);n.uniformMatrix4fv(g,!1,new Float32Array(V(2,2,2))),n.uniformMatrix4fv(M,!1,new Float32Array(L($,ss,as))),n.uniformMatrix4fv(J,!1,new Float32Array(D(ns))),n.uniformMatrix4fv(K,!1,new Float32Array(U(es))),n.uniformMatrix4fv(Q,!1,new Float32Array(S(ls)));let ms=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,ms),Z(n),n.enableVertexAttribArray(N),n.vertexAttribPointer(N,3,n.FLOAT,!1,0,0);let hs=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,hs),q(n),n.enableVertexAttribArray(w),n.vertexAttribPointer(w,3,n.UNSIGNED_BYTE,!0,0,0);let cs=n.TRIANGLES,rs=0,ps=6*16;n.drawArrays(cs,rs,ps)},u=n=>(2*n/100-1).toFixed(2),v=n=>n*360/100+"\xB0",x=n=>2*Math.PI*n/100,W=n=>{s.value=n,p()},I=n=>{j.value=n,p()},X=n=>{i.value=n,p()},Y=n=>{_.value=n,p()},O=n=>{d.value=n,p()},H=n=>{f.value=n,p()},Z=n=>{n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0,.05,0,-.6,.05,.1,-.6,.05,.1,-.6,.05,.1,0,.05,0,0,.05,.1,0,.05,.1,-.1,.05,.37,-.1,.05,.37,-.1,.05,.37,0,.05,.1,0,.05,.1,-.25,.05,.1,-.35,.05,.25,-.35,.05,.25,-.35,.05,.25,-.25,.05,.1,-.25,.05,0,0,-.05,.1,0,-.05,.1,-.6,-.05,.1,-.6,-.05,0,-.6,-.05,0,0,-.05,.1,0,-.05,.37,-.1,-.05,.1,-.1,-.05,.37,0,-.05,.37,-.1,-.05,.1,0,-.05,.1,-.25,-.05,.25,-.25,-.05,.25,-.35,-.05,.25,-.35,-.05,.1,-.35,-.05,.1,-.25,-.05,0,0,-.05,0,0,.05,.37,0,.05,.37,0,.05,.37,0,-.05,0,0,-.05,.1,-.25,-.05,.1,-.25,.05,.25,-.25,.05,.25,-.25,.05,.25,-.25,-.05,.1,-.25,-.05,.1,-.1,.05,.1,-.1,-.05,.37,-.1,-.05,.37,-.1,-.05,.37,-.1,.05,.1,-.1,.05,.1,-.35,.05,.1,-.35,-.05,.25,-.35,-.05,.25,-.35,-.05,.25,-.35,.05,.1,-.35,.05,0,-.6,.05,0,-.6,-.05,.1,-.6,-.05,.1,-.6,-.05,.1,-.6,.05,0,-.6,.05,0,0,-.05,0,-.6,-.05,0,-.6,.05,0,-.6,.05,0,0,.05,0,0,-.05,.37,0,.05,.37,-.1,.05,.37,-.1,-.05,.37,-.1,-.05,.37,0,-.05,.37,0,.05,.1,-.1,.05,.1,-.25,.05,.1,-.25,-.05,.1,-.25,-.05,.1,-.1,-.05,.1,-.1,.05,.1,-.35,.05,.1,-.6,.05,.1,-.6,-.05,.1,-.6,-.05,.1,-.35,-.05,.1,-.35,.05,.25,-.25,.05,.25,-.35,.05,.25,-.35,-.05,.25,-.35,-.05,.25,-.25,-.05,.25,-.25,.05]),n.STATIC_DRAW)},q=n=>{n.bufferData(n.ARRAY_BUFFER,new Uint8Array([200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,200,70,120,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,80,70,200,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,70,200,210,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,200,200,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,100,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,210,160,70,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,70,180,210,150,70,180,150,70,180,150,70,180,150,70,180,150,70,180,150,70,180,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,76,210,100,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,140,210,80,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,90,130,110,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220,160,160,220]),n.STATIC_DRAW)};return F(()=>{m=G(),p()}),()=>e(b,null,e("div",{class:o("vessel")},e("canvas",{class:o("gl-canvas"),ref:l}),e("div",{class:o("operation")},e(r,{modelValue:s.value,formatTooltip:u,"onUpdate:modelValue":W}),e(r,{modelValue:j.value,formatTooltip:u,"onUpdate:modelValue":I}),e(r,{modelValue:i.value,formatTooltip:u,"onUpdate:modelValue":X}),e(r,{modelValue:_.value,formatTooltip:v,"onUpdate:modelValue":Y}),e(r,{modelValue:d.value,formatTooltip:v,"onUpdate:modelValue":O}),e(r,{modelValue:f.value,formatTooltip:v,"onUpdate:modelValue":H}))))}});function P(l){let s=Object.assign({h1:"h1",code:"code",ul:"ul",li:"li",p:"p",pre:"pre",span:"span"},y(),l.components);return a.h(a.Fragment,null,a.h(s.h1,null,a.h(s.code,null,"WebGL"),"\u4E09\u7EF4\u6B63\u5C04\u6295\u5F71"),`
`,a.h(s.ul,null,`
`,a.h(s.li,null,`
`,a.h(s.p,null,`\u524D\u8FB9\u6211\u4EEC\u8BB2\u5230\u4E86\u4E8C\u7EF4\u5E73\u9762\u4E0A\u7684\u77E9\u9635\u53D8\u6362\uFF0C\u770B\u5230\u4E86\u56FE\u5F62\u5E73\u79FB\u3001\u65CB\u8F6C\u548C\u7F29\u653E\u7684\u6548\u679C\u5E76\u901A\u8FC7\u4E00\u4E2A\u77E9\u9635\u5B9E\u73B0\u4E86\u8FD9\u4E9B\u64CD\u4F5C\uFF0C\u73B0\u5728\u6211\u4EEC\u6765\u770B\u4E00\u4E0B
\u5728\u4E09\u7EF4\u4E2D\u8FD9\u4E9B\u64CD\u4F5C\u662F\u5982\u4F55\u5B9E\u73B0\u7684`),`
`,a.h(s.ul,null,`
`,a.h(s.li,null,"\u9996\u5148\u8981\u505A\u7684\u662F\u786E\u5B9A\u6240\u753B\u56FE\u5F62\u7684\u9876\u70B9\u5750\u6807\u4EE5\u53CA\u5BF9\u5E94\u7684\u989C\u8272",`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-javascript"},a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"setGeometry")," = (",a.h(s.span,{className:"hljs-params"},"gl"),`) => {
  gl.`,a.h(s.span,{className:"hljs-title function_"},"bufferData"),`(
    gl.`,a.h(s.span,{className:"hljs-property"},"ARRAY_BUFFER"),`,
    `,a.h(s.span,{className:"hljs-keyword"},"new")," ",a.h(s.span,{className:"hljs-title class_"},"Float32Array"),`([
      `,a.h(s.span,{className:"hljs-comment"},"/* \u524D\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u80CC\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u9876\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u9876"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u9876"),`
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u5E95\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u5E95"),`
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u5E95"),`
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0B\u5E95"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u5DE6\u4FA7\u9762 */"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u53F3\u4FA7\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u6A2A\u53F3\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.37"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6\u53F3\u4E0A\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.1"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6\u53F3\u4E0B\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.6"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.1"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u6A2A\u53F3\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.05"),`,
      `,a.h(s.span,{className:"hljs-number"},"0.25"),", -",a.h(s.span,{className:"hljs-number"},"0.25"),", ",a.h(s.span,{className:"hljs-number"},"0.05"),`,
    ]),
    gl.`,a.h(s.span,{className:"hljs-property"},"STATIC_DRAW"),`)
}

`,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"setColors")," = (",a.h(s.span,{className:"hljs-params"},"gl"),`) => {
  gl.`,a.h(s.span,{className:"hljs-title function_"},"bufferData"),`(
    gl.`,a.h(s.span,{className:"hljs-property"},"ARRAY_BUFFER"),`,
    `,a.h(s.span,{className:"hljs-keyword"},"new")," ",a.h(s.span,{className:"hljs-title class_"},"Uint8Array"),`([
      `,a.h(s.span,{className:"hljs-comment"},"/* \u524D\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6"),`
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"120"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u80CC\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6"),`
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,
      `,a.h(s.span,{className:"hljs-number"},"80"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u9876\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u9876"),`
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u9876"),`
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"200"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u5E95\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u5E95"),`
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u5E95"),`
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,
      `,a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"70"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0B\u5E95"),`
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,
      `,a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),", ",a.h(s.span,{className:"hljs-number"},"210"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u5DE6\u4FA7\u9762 */"),`
      `,a.h(s.span,{className:"hljs-number"},"150"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),`,
      `,a.h(s.span,{className:"hljs-number"},"150"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),`,
      `,a.h(s.span,{className:"hljs-number"},"150"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),`,
      `,a.h(s.span,{className:"hljs-number"},"150"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),`,
      `,a.h(s.span,{className:"hljs-number"},"150"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),`,
      `,a.h(s.span,{className:"hljs-number"},"150"),", ",a.h(s.span,{className:"hljs-number"},"70"),", ",a.h(s.span,{className:"hljs-number"},"180"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u53F3\u4FA7\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u6A2A\u53F3\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"76"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),`,
      `,a.h(s.span,{className:"hljs-number"},"76"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),`,
      `,a.h(s.span,{className:"hljs-number"},"76"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),`,
      `,a.h(s.span,{className:"hljs-number"},"76"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),`,
      `,a.h(s.span,{className:"hljs-number"},"76"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),`,
      `,a.h(s.span,{className:"hljs-number"},"76"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"100"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6\u53F3\u4E0A\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"140"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"80"),`,
      `,a.h(s.span,{className:"hljs-number"},"140"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"80"),`,
      `,a.h(s.span,{className:"hljs-number"},"140"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"80"),`,
      `,a.h(s.span,{className:"hljs-number"},"140"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"80"),`,
      `,a.h(s.span,{className:"hljs-number"},"140"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"80"),`,
      `,a.h(s.span,{className:"hljs-number"},"140"),", ",a.h(s.span,{className:"hljs-number"},"210"),", ",a.h(s.span,{className:"hljs-number"},"80"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6\u53F3\u4E0B\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"90"),", ",a.h(s.span,{className:"hljs-number"},"130"),", ",a.h(s.span,{className:"hljs-number"},"110"),`,
      `,a.h(s.span,{className:"hljs-number"},"90"),", ",a.h(s.span,{className:"hljs-number"},"130"),", ",a.h(s.span,{className:"hljs-number"},"110"),`,
      `,a.h(s.span,{className:"hljs-number"},"90"),", ",a.h(s.span,{className:"hljs-number"},"130"),", ",a.h(s.span,{className:"hljs-number"},"110"),`,
      `,a.h(s.span,{className:"hljs-number"},"90"),", ",a.h(s.span,{className:"hljs-number"},"130"),", ",a.h(s.span,{className:"hljs-number"},"110"),`,
      `,a.h(s.span,{className:"hljs-number"},"90"),", ",a.h(s.span,{className:"hljs-number"},"130"),", ",a.h(s.span,{className:"hljs-number"},"110"),`,
      `,a.h(s.span,{className:"hljs-number"},"90"),", ",a.h(s.span,{className:"hljs-number"},"130"),", ",a.h(s.span,{className:"hljs-number"},"110"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u6A2A\u53F3\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"220"),`,
      `,a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"220"),`,
      `,a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"220"),`,
      `,a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"220"),`,
      `,a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"220"),`,
      `,a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"160"),", ",a.h(s.span,{className:"hljs-number"},"220"),`]),
    gl.`,a.h(s.span,{className:"hljs-property"},"STATIC_DRAW"),`)
}
`)),`
`),`
`,a.h(s.li,null,"\u4E09\u7EF4\u7A7A\u95F4\u7684\u65CB\u8F6C\u64CD\u4F5C\u66F4\u52A0\u590D\u6742\uFF0C\u6BCF\u4E2A\u7ED5\u7279\u5B9A\u8F74\u7684\u65CB\u8F6C\u90FD\u53EF\u4EE5\u5206\u89E3\u6210\u4E09\u90E8\u5206\uFF1B\u53E6\u5916",a.h(s.code,null,"WebGL"),`\u4E2D\u8FD8\u9700\u8981\u786E\u5B9A\u6240\u8C13\u7684\u56FE\u50CF\u6295\u5F71\u77E9\u9635\uFF08\u8FD9\u91CC\u4F7F\u7528\u7684\u662F\u6B63\u5C04\u6295\u5F71\uFF09\uFF1B
\u4E3A\u4E86\u80FD\u591F\u6B63\u786E\u6E32\u67D3\u4E09\u7EF4\u56FE\u50CF\uFF0C\u8FD8\u9700\u8981\u5F00\u542F`,a.h(s.code,null,"WebGL"),"\u7684\u76F8\u5E94\u7279\u6027",`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-javascript"},a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"translate3dMat")," = (",a.h(s.span,{className:"hljs-params"},"dx, dy, dz"),`) => {
  `,a.h(s.span,{className:"hljs-keyword"},"return"),` [
    `,a.h(s.span,{className:"hljs-number"},"1"),",  ",a.h(s.span,{className:"hljs-number"},"0"),",  ",a.h(s.span,{className:"hljs-number"},"0"),",  ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),",  ",a.h(s.span,{className:"hljs-number"},"1"),",  ",a.h(s.span,{className:"hljs-number"},"0"),",  ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),",  ",a.h(s.span,{className:"hljs-number"},"0"),",  ",a.h(s.span,{className:"hljs-number"},"1"),",  ",a.h(s.span,{className:"hljs-number"},"0"),`,
    dx, dy, dz, `,a.h(s.span,{className:"hljs-number"},"1"),`
  ]
}

`,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"zRotate3dMat")," = (",a.h(s.span,{className:"hljs-params"},"theta"),`) => {
  `,a.h(s.span,{className:"hljs-keyword"},"return"),` [
    `,a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"cos"),"(theta),   ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"sin"),"(theta), ",a.h(s.span,{className:"hljs-number"},"0"),",  ",a.h(s.span,{className:"hljs-number"},"0"),`,
    - `,a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"sin"),"(theta), ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"cos"),"(theta), ",a.h(s.span,{className:"hljs-number"},"0"),",  ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),",                 ",a.h(s.span,{className:"hljs-number"},"0"),",               ",a.h(s.span,{className:"hljs-number"},"1"),",  ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),",                 ",a.h(s.span,{className:"hljs-number"},"0"),",               ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`
  ]
}

`,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"yRotate3dMat")," = (",a.h(s.span,{className:"hljs-params"},"theta"),`) => {
  `,a.h(s.span,{className:"hljs-keyword"},"return"),` [
    `,a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"cos"),"(theta), ",a.h(s.span,{className:"hljs-number"},"0"),", - ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"sin"),"(theta), ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),",               ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),",                 ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"sin"),"(theta), ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"cos"),"(theta),   ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),",               ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),",                 ",a.h(s.span,{className:"hljs-number"},"1"),`
  ]
}

`,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"xRotate3dMat")," = (",a.h(s.span,{className:"hljs-params"},"theta"),`) => {
  `,a.h(s.span,{className:"hljs-keyword"},"return"),` [
    `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),",                 ",a.h(s.span,{className:"hljs-number"},"0"),",               ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"cos"),"(theta),   ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"sin"),"(theta), ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),", - ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"sin"),"(theta), ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"cos"),"(theta), ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),",                 ",a.h(s.span,{className:"hljs-number"},"0"),",               ",a.h(s.span,{className:"hljs-number"},"1"),`
  ]
}

`,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"projection3d")," = (",a.h(s.span,{className:"hljs-params"},"width, height, depth"),`) => {
  `,a.h(s.span,{className:"hljs-keyword"},"return"),` [
    `,a.h(s.span,{className:"hljs-number"},"2")," / width, ",a.h(s.span,{className:"hljs-number"},"0"),",            ",a.h(s.span,{className:"hljs-number"},"0"),",         ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),",         - ",a.h(s.span,{className:"hljs-number"},"2")," / height, ",a.h(s.span,{className:"hljs-number"},"0"),",         ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),",         ",a.h(s.span,{className:"hljs-number"},"0"),",            ",a.h(s.span,{className:"hljs-number"},"2")," / depth, ",a.h(s.span,{className:"hljs-number"},"0"),`,
    `,a.h(s.span,{className:"hljs-number"},"0"),",         ",a.h(s.span,{className:"hljs-number"},"0"),",            ",a.h(s.span,{className:"hljs-number"},"0"),",         ",a.h(s.span,{className:"hljs-number"},"1"),`,
  ]
}

...

`,a.h(s.span,{className:"hljs-comment"},"// \u5F00\u542F\u8BE5\u7279\u6027\u4F7FWebGL\u53EA\u7ED8\u5236\u6B63\u5411\u4E09\u89D2\u5F62"),`
gl.`,a.h(s.span,{className:"hljs-title function_"},"enable"),"(gl.",a.h(s.span,{className:"hljs-property"},"CULL_FACE"),`)
`,a.h(s.span,{className:"hljs-comment"},"// \u5F00\u542F\u8BE5\u7279\u6027\u4F7FWebGL\u80FD\u591F\u4F7F\u7528\u6DF1\u5EA6\u7F13\u5B58\uFF08DEPTH BUFFER\uFF09\u6765\u7ED8\u5236\u91CD\u53E0\u7684\u4E0D\u540C\u5C42\u6B21\uFF08z-index\uFF09\u7684\u56FE\u50CF\u50CF\u7D20"),`
gl.`,a.h(s.span,{className:"hljs-title function_"},"enable"),"(gl.",a.h(s.span,{className:"hljs-property"},"DEPTH_TEST"),`)
`)),`
`),`
`),`
`),`
`),`
`,a.h(B))}function js(l={}){let{wrapper:s}=Object.assign({},y(),l.components);return s?a.h(s,l,a.h(P,l)):P(l)}var A=js;var Ts=t({name:"MDX_03-ORTHOGRAPHIC",components:{MDXComponentContext:A},setup(l,s){return()=>e("div",{class:"markdown-body",style:"padding: 15px;"},e(A,{...s?.attrs}))}});export{Ts as default};
