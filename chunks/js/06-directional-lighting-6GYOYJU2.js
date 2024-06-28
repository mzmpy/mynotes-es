import{a as m,b as L}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-VYUO2JAM.js";import{a as E,b as B,c as I}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-NUSCM57D.js";import{s as p}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-CICNCX7I.js";import{a as C}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-DPAERIMP.js";import{H as P,O as _,_ as j,d as a,e as r,na as e,va as M,x as c}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-MOAQ7JNP.js";r();M();r();r();r();M();r();var ds={"gl-canvas":{name:"src__components__mdx__constituents__webgl__directional-lighting__parallelLight__index-SbVZUa-gl-canvas",composes:[],isReferenced:!1},operation:{name:"src__components__mdx__constituents__webgl__directional-lighting__parallelLight__index-SbVZUa-operation",composes:[],isReferenced:!1},vessel:{name:"src__components__mdx__constituents__webgl__directional-lighting__parallelLight__index-SbVZUa-vessel",composes:[],isReferenced:!1}},d=(l=>s=>{if(typeof s!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return l[s.replace(/[A-Z]/g,N=>"-"+N.toLowerCase())].name})(ds);var S=_({name:"ParallelLight",components:{ElSlider:p},props:{static:{type:Boolean,default:!1}},setup(l){let s=c(),N=c(40),v=c(55),f=c(25),g=c(50),x=c(40),R=c(60),y=c(20),u,X=`
    attribute vec4 a_position;
    uniform mat4 u_matrix;
    uniform mat4 u_world_matrix;
    attribute vec3 a_normal;
    varying vec3 v_normal;

    void main() {
      gl_Position = u_matrix * a_position;
      v_normal = mat3(u_world_matrix) * a_normal;
    }
    `,O=`
    precision mediump float;
    varying vec3 v_normal;
    uniform vec4 u_color;
    uniform vec3 u_lightDirection;

    void main() {
      vec3 normal = normalize(v_normal);
      float light_Weight = dot(normal, u_lightDirection);

      gl_FragColor = u_color;
      gl_FragColor.rgb *= light_Weight;
    }
    `,z=()=>{let n=s.value.getContext("webgl");if(!n)return;I(n,500,500);let o=E(n,n.VERTEX_SHADER,X),i=E(n,n.FRAGMENT_SHADER,O);return B(n,o,i)},t=()=>{let n=s.value.getContext("webgl");if(!n)return;let o=n.getAttribLocation(u,"a_position"),i=n.getAttribLocation(u,"a_normal"),D=n.getUniformLocation(u,"u_matrix"),as=n.getUniformLocation(u,"u_color"),ns=n.getUniformLocation(u,"u_lightDirection"),es=n.getUniformLocation(u,"u_world_matrix");n.viewport(0,0,n.canvas.width,n.canvas.height),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.enable(n.CULL_FACE),n.enable(n.DEPTH_TEST),n.useProgram(u);let ls=parseFloat(b(N.value)),ms=parseFloat(b(v.value)),hs=parseFloat(w(f.value)),rs=A(g.value),cs=A(x.value),ps=A(R.value),us=Y(y.value),ts=n.canvas.clientWidth/n.canvas.clientHeight,os=L.create(),h=m.create(),V=m.create(),U=m.create();m.translate(h,h,[ls,ms,hs]),m.rotateX(h,h,rs),m.rotateY(h,h,cs),m.rotateZ(h,h,ps),m.perspective(V,us,ts,1,20),m.multiply(U,V,h),n.uniformMatrix4fv(es,!1,l.static?m.create():h),n.uniformMatrix4fv(D,!1,U),n.uniform4fv(as,[.2,1,.2,1]),n.uniform3fv(ns,L.normalize(os,[.5,.7,1]));let Ns=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,Ns),$(n),n.enableVertexAttribArray(o),n.vertexAttribPointer(o,3,n.FLOAT,!1,0,0);let js=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,js),ss(n),n.enableVertexAttribArray(i),n.vertexAttribPointer(i,3,n.FLOAT,!1,0,0);let bs=n.TRIANGLES,is=0,_s=6*16;n.drawArrays(bs,is,_s)},b=n=>(2*n/100-1).toFixed(2),w=n=>(-11*n/100+1).toFixed(2),F=n=>(n*360/100).toFixed(2)+"\xB0",G=n=>(n*178/100+1).toFixed(2)+"\xB0",A=n=>2*Math.PI*n/100,Y=n=>Math.PI*178/180*n/100,Z=n=>{N.value=n,t()},H=n=>{v.value=n,t()},k=n=>{f.value=n,t()},J=n=>{g.value=n,t()},q=n=>{x.value=n,t()},K=n=>{R.value=n,t()},Q=n=>{y.value=n,t()},$=n=>{n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0,.05,0,-.6,.05,.1,-.6,.05,.1,-.6,.05,.1,0,.05,0,0,.05,.1,0,.05,.1,-.1,.05,.37,-.1,.05,.37,-.1,.05,.37,0,.05,.1,0,.05,.1,-.25,.05,.1,-.35,.05,.25,-.35,.05,.25,-.35,.05,.25,-.25,.05,.1,-.25,.05,0,0,-.05,.1,0,-.05,.1,-.6,-.05,.1,-.6,-.05,0,-.6,-.05,0,0,-.05,.1,0,-.05,.37,-.1,-.05,.1,-.1,-.05,.37,0,-.05,.37,-.1,-.05,.1,0,-.05,.1,-.25,-.05,.25,-.25,-.05,.25,-.35,-.05,.25,-.35,-.05,.1,-.35,-.05,.1,-.25,-.05,0,0,-.05,0,0,.05,.37,0,.05,.37,0,.05,.37,0,-.05,0,0,-.05,.1,-.25,-.05,.1,-.25,.05,.25,-.25,.05,.25,-.25,.05,.25,-.25,-.05,.1,-.25,-.05,.1,-.1,.05,.1,-.1,-.05,.37,-.1,-.05,.37,-.1,-.05,.37,-.1,.05,.1,-.1,.05,.1,-.35,.05,.1,-.35,-.05,.25,-.35,-.05,.25,-.35,-.05,.25,-.35,.05,.1,-.35,.05,0,-.6,.05,0,-.6,-.05,.1,-.6,-.05,.1,-.6,-.05,.1,-.6,.05,0,-.6,.05,0,0,-.05,0,-.6,-.05,0,-.6,.05,0,-.6,.05,0,0,.05,0,0,-.05,.37,0,.05,.37,-.1,.05,.37,-.1,-.05,.37,-.1,-.05,.37,0,-.05,.37,0,.05,.1,-.1,.05,.1,-.25,.05,.1,-.25,-.05,.1,-.25,-.05,.1,-.1,-.05,.1,-.1,.05,.1,-.35,.05,.1,-.6,.05,.1,-.6,-.05,.1,-.6,-.05,.1,-.35,-.05,.1,-.35,.05,.25,-.25,.05,.25,-.35,.05,.25,-.35,-.05,.25,-.35,-.05,.25,-.25,-.05,.25,-.25,.05]),n.STATIC_DRAW)},ss=n=>{n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),n.STATIC_DRAW)};return P(()=>{u=z(),t()}),()=>e(j,null,e("div",{class:d("vessel")},e("canvas",{class:d("gl-canvas"),ref:s}),e("div",{class:d("operation")},e(p,{modelValue:N.value,formatTooltip:b,"onUpdate:modelValue":Z}),e(p,{modelValue:v.value,formatTooltip:b,"onUpdate:modelValue":H}),e(p,{modelValue:f.value,formatTooltip:w,"onUpdate:modelValue":k}),e(p,{modelValue:g.value,formatTooltip:F,"onUpdate:modelValue":J}),e(p,{modelValue:x.value,formatTooltip:F,"onUpdate:modelValue":q}),e(p,{modelValue:R.value,formatTooltip:F,"onUpdate:modelValue":K}),e(p,{modelValue:y.value,formatTooltip:G,"onUpdate:modelValue":Q}))))}});function W(l){let s=Object.assign({h1:"h1",code:"code",ul:"ul",li:"li",p:"p",pre:"pre",span:"span"},C(),l.components);return a.h(a.Fragment,null,a.h(s.h1,null,a.h(s.code,null,"WebGL"),"\u4E09\u7EF4\u65B9\u5411\u5149\u6E90"),`
`,a.h(s.ul,null,`
`,a.h(s.li,null,`
`,a.h(s.p,null,a.h(s.code,null,"WebGL"),"\u4E2D\u8BA1\u7B97\u65B9\u5411\u5149\u975E\u5E38\u7B80\u5355\uFF0C\u5C06\u65B9\u5411\u5149\u7684\u65B9\u5411\u548C\u9762\u7684\u671D\u5411\u70B9\u4E58\u5C31\u53EF\u4EE5\u5F97\u5230\u4E24\u4E2A\u65B9\u5411\u7684\u4F59\u5F26\u503C\uFF1B\u8BE5\u503C\u7B49\u4E8E",a.h(s.code,null,"1"),`\u65F6\u4EE3\u8868\u7269\u4F53\u8868\u9762\u671D\u5411\u4E0E
\u5149\u6E90\u65B9\u5411\u76F8\u540C\uFF0C\u5373\u4E3A\u80CC\u5149\uFF1B`,a.h(s.code,null,"-1"),"\u5219\u8868\u793A\u7269\u4F53\u8868\u9762\u671D\u5411\u4E0E\u5149\u6E90\u76F8\u53CD\uFF0C\u662F\u4E3A\u5411\u5149"),`
`),`
`,a.h(s.li,null,`
`,a.h(s.p,null,"\u4E3A\u6B64\u9700\u8981\u7ED9\u8F93\u5165\u7684\u9876\u70B9\u8BBE\u7F6E\u6CD5\u5411\u91CF\uFF0C\u6570\u5B66\u4E0A\u6CD5\u5411\u91CF\u4EE3\u8868\u7684\u5C31\u662F\u9762\u7684\u201C\u6B63\u201D\u671D\u5411\uFF1B\u4ECD\u7136\u4F7F\u7528\u201C",a.h(s.code,null,"F"),"\u201D\u4F5C\u4E3A\u4F8B\u5B50\uFF1A\u6211\u4EEC\u589E\u52A0\u4E86",a.h(s.code,null,"a_normal"),`\u548C
`,a.h(s.code,null,"u_lightDirection"),"\u53D8\u91CF\uFF0C\u5206\u522B\u4EE3\u8868\u6CD5\u5411\u91CF\u548C\u5149\u6E90\u65B9\u5411"),`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-cpp"},a.h(s.span,{className:"hljs-comment"},"// vertex"),`
attribute vec4 a_position;
uniform mat4 u_matrix;
attribute vec3 a_normal;
varying vec3 v_normal;

`,a.h(s.span,{className:"hljs-function"},a.h(s.span,{className:"hljs-type"},"void")," ",a.h(s.span,{className:"hljs-title"},"main"),a.h(s.span,{className:"hljs-params"},"()")," "),`{
  gl_Position = u_matrix * a_position;
  v_normal = a_normal;
}

`,a.h(s.span,{className:"hljs-comment"},"// fragment"),`
precision mediump `,a.h(s.span,{className:"hljs-type"},"float"),`;
varying vec3 v_normal;
uniform vec4 u_color;
uniform vec3 u_lightDirection;

`,a.h(s.span,{className:"hljs-function"},a.h(s.span,{className:"hljs-type"},"void")," ",a.h(s.span,{className:"hljs-title"},"main"),a.h(s.span,{className:"hljs-params"},"()")," "),`{
  vec3 normal = `,a.h(s.span,{className:"hljs-built_in"},"normalize"),`(v_normal);
  `,a.h(s.span,{className:"hljs-type"},"float")," light_Weight = ",a.h(s.span,{className:"hljs-built_in"},"dot"),`(normal, u_lightDirection);

  gl_FragColor = u_color;
  gl_FragColor.rgb *= light_Weight;
}
`)),`
`,a.h(s.p,null,"\u521D\u59CB\u5316\u7684\u65F6\u5019\u8BBE\u7F6E\u76F8\u5E94\u7684\u6CD5\u5411\u91CF"),`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-javascript"},a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"setNormals")," = (",a.h(s.span,{className:"hljs-params"},"gl"),`) => {
  gl.`,a.h(s.span,{className:"hljs-title function_"},"bufferData"),`(
    gl.`,a.h(s.span,{className:"hljs-property"},"ARRAY_BUFFER"),`,
    `,a.h(s.span,{className:"hljs-keyword"},"new")," ",a.h(s.span,{className:"hljs-title class_"},"Float32Array"),`([
      `,a.h(s.span,{className:"hljs-comment"},"/* \u524D\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u80CC\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u6A2A"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u9876\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u9876"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u9876"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u5E95\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u5E95"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u5E95"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0B\u5E95"),`
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"0"),", -",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u5DE6\u4FA7\u9762 */"),`
      -`,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      -`,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      -`,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      -`,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      -`,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      -`,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,

      `,a.h(s.span,{className:"hljs-comment"},"/* \u53F3\u4FA7\u9762 */"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u4E0A\u6A2A\u53F3\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6\u53F3\u4E0A\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u5DE6\u7AD6\u53F3\u4E0B\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,

      `,a.h(s.span,{className:"hljs-comment"},"// \u4E2D\u6A2A\u53F3\u4FA7"),`
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`,
      `,a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`]),
    gl.`,a.h(s.span,{className:"hljs-property"},"STATIC_DRAW"),`
  )
}
`)),`
`),`
`),`
`,a.h(S,{static:!0}),`
`,a.h(s.ul,null,`
`,a.h(s.li,null,"\u53E6\u4E00\u65B9\u9762\uFF0C\u4E5F\u8BB8\u4F60\u5DF2\u7ECF\u6CE8\u610F\u5230\u4E0A\u4E2A\u4F8B\u5B50\u4E2D\u7684\u201C",a.h(s.code,null,"F"),`\u201D\u7684\u9634\u5F71\u5E76\u4E0D\u4F1A\u968F\u7740\u8FD0\u52A8\u800C\u53D1\u751F\u5408\u7406\u7684\u53D8\u5316\uFF1B\u5F88\u660E\u663E\uFF0C\u4E0A\u8FB9\u7684\u4F8B\u5B50\u4E2D\u6211\u4EEC\u8BBE\u7F6E\u4E86\u7269\u4F53\u8868
\u9762\u7684\u6CD5\u5411\u540E\u5C31\u518D\u4E5F\u6CA1\u6709\u6539\u53D8\u8FC7\u5B83\u4E86\uFF0C\u6240\u4EE5\u5373\u4F7F\u201C`,a.h(s.code,null,"F"),`\u201D\u53D1\u751F\u4E86\u8FD0\u52A8\u5176\u9634\u5F71\u4E5F\u4E0D\u4F1A\u53D8\u5316\uFF1B\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5728\u7269\u4F53\u8FD0\u52A8\u65F6\u91CD\u65B0\u8BA1\u7B97\u66F4\u65B0\u5B83\u5404\u4E2A\u8868\u9762
\u7684\u6CD5\u5411\u91CF\uFF1B\u548C\u9876\u70B9\u7684\u8BA1\u7B97\u7C7B\u4F3C\uFF0C\u6211\u4EEC\u4E5F\u7528\u4E00\u4E2A\u77E9\u9635\u53BB\u4E58\u6CD5\u5411\u91CF\uFF0C\u8BA9\u5B83\u968F\u7740\u7269\u4F53\u7684\u8FD0\u52A8\u800C\u6539\u53D8\uFF1B\u589E\u52A0`,a.h(s.code,null,"u_world_matrix"),`\uFF0C\u5B83\u8BB0\u5F55\u7269\u4F53\u7684
\u8FD0\u52A8\u4FE1\u606F\u7528\u4E8E\u5B9E\u65F6\u8BA1\u7B97\u7269\u4F53\u5404\u4E2A\u8868\u9762\u7684\u6CD5\u5411\u91CF`),`
`),`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-cpp"},"  ",a.h(s.span,{className:"hljs-comment"},"// vertex"),`
  attribute vec4 a_position;
  uniform mat4 u_matrix;
  uniform mat4 u_world_matrix;
  attribute vec3 a_normal;
  varying vec3 v_normal;

  `,a.h(s.span,{className:"hljs-function"},a.h(s.span,{className:"hljs-type"},"void")," ",a.h(s.span,{className:"hljs-title"},"main"),a.h(s.span,{className:"hljs-params"},"()")," "),`{
    gl_Position = u_matrix * a_position;
    `,a.h(s.span,{className:"hljs-comment"},"// \u6BCF\u6B21\u6E32\u67D3\u90FD\u91CD\u65B0\u8BA1\u7B97\u7269\u4F53\u5404\u4E2A\u8868\u9762\u7684\u6CD5\u5411\u91CF"),`
    v_normal = `,a.h(s.span,{className:"hljs-built_in"},"mat3"),`(u_world_matrix) * a_normal;
  }

  `,a.h(s.span,{className:"hljs-comment"},"// fragment"),`
  precision mediump `,a.h(s.span,{className:"hljs-type"},"float"),`;
  varying vec3 v_normal;
  uniform vec4 u_color;
  uniform vec3 u_lightDirection;

  `,a.h(s.span,{className:"hljs-function"},a.h(s.span,{className:"hljs-type"},"void")," ",a.h(s.span,{className:"hljs-title"},"main"),a.h(s.span,{className:"hljs-params"},"()")," "),`{
    vec3 normal = `,a.h(s.span,{className:"hljs-built_in"},"normalize"),`(v_normal);
    `,a.h(s.span,{className:"hljs-type"},"float")," light_Weight = ",a.h(s.span,{className:"hljs-built_in"},"dot"),`(normal, u_lightDirection);

    gl_FragColor = u_color;
    gl_FragColor.rgb *= light_Weight;
  }
`)),`
`,a.h(S))}function vs(l={}){let{wrapper:s}=Object.assign({},C(),l.components);return s?a.h(s,l,a.h(W,l)):W(l)}var T=vs;var Is=_({name:"MDX_06-DIRECTIONAL-LIGHTING",components:{MDXComponentContext:T},setup(l,s){return()=>e("div",{class:"markdown-body",style:"padding: 15px;"},e(T,{...s?.attrs}))}});export{Is as default};
