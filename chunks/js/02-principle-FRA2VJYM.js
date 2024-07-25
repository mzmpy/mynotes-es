import{a as D,b as X,c as f,d as u}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-IM3VYHUE.js";import{r as P}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-FM3SQTAW.js";import{a as I}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-Q6XF6CKX.js";import{a as G}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-UUYEHL2W.js";import{H,L as g,aa as r,f as l,g as n,pa as t,xa as B,z as p}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-M2CGHGHN.js";n();B();n();n();var F="https://mzmpy.github.io/mynotes-es/assets/gif/vertex-shader-anim-HZ6RUMBU.gif";n();B();n();var w={"gl-canvas":{name:"src__components__mdx__constituents__webgl__principle__varying__index-66bnia-gl-canvas",composes:[],isReferenced:!1},vessel:{name:"src__components__mdx__constituents__webgl__principle__varying__index-66bnia-vessel",composes:[],isReferenced:!1},operation:{name:"src__components__mdx__constituents__webgl__principle__varying__index-66bnia-operation",composes:[],isReferenced:!1}},c=(e=>a=>{if(typeof a!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return e[a.replace(/[A-Z]/g,h=>"-"+h.toLowerCase())].name})(w);var N=H({name:"WebGLVarying",components:{ElSlider:P},setup(){let e=p(),a=p(50),h=p(50),j=p(0),d,_=`
    attribute vec2 a_position;
    uniform mat3 u_matrix;
    varying vec4 v_color;

    void main() {
      gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
      v_color = gl_Position * 0.5 + 0.5;
    }
    `,x=`
    precision mediump float;
    varying vec4 v_color;

    void main() {
      gl_FragColor = v_color;
    }
    `,E=()=>{let s=e.value.getContext("webgl");if(!s)return;f(s,1500,1500);let o=D(s,s.VERTEX_SHADER,_),L=D(s,s.FRAGMENT_SHADER,x),m=X(s,o,L),$=s.createBuffer(),J=[-.3,-.3*1/3*Math.sqrt(3),.3,-.3*1/3*Math.sqrt(3),0,.3*2/3*Math.sqrt(3)];return s.bindBuffer(s.ARRAY_BUFFER,$),s.bufferData(s.ARRAY_BUFFER,new Float32Array(J),s.STATIC_DRAW),m},i=()=>{let s=e.value.getContext("webgl");if(!s)return;let o=s.getAttribLocation(d,"a_position"),L=s.getUniformLocation(d,"u_matrix");s.viewport(0,0,s.canvas.width,s.canvas.height),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(d);let m=2,$=s.FLOAT,J=!1,M=0,v=0,k=parseFloat(A(a.value)),R=parseFloat(A(h.value)),T=b(j.value);s.enableVertexAttribArray(o),s.vertexAttribPointer(o,m,$,J,M,v),s.uniformMatrix3fv(L,!1,new Float32Array(u(T,1,1,k,R)));let q=s.TRIANGLES,Z=0,U=3;s.drawArrays(q,Z,U)},A=s=>(2*s/100-1).toFixed(2),Q=s=>s*360/100+"\xB0",b=s=>2*Math.PI*s/100,Y=s=>{a.value=s,i()},K=s=>{h.value=s,i()},y=s=>{j.value=s,i()};return g(()=>{d=E(),i()}),()=>t(r,null,t("div",{class:c("vessel")},t("canvas",{class:c("gl-canvas"),ref:e}),t("div",{class:c("operation")},t(P,{modelValue:a.value,formatTooltip:A,"onUpdate:modelValue":Y}),t(P,{modelValue:h.value,formatTooltip:A,"onUpdate:modelValue":K}),t(P,{modelValue:j.value,formatTooltip:Q,"onUpdate:modelValue":y}))))}});function S(e){let a=Object.assign({h1:"h1",code:"code",ul:"ul",li:"li",p:"p",h2:"h2",pre:"pre",span:"span"},G(),e.components);return l.h(l.Fragment,null,l.h(a.h1,null,l.h(a.code,null,"WebGL"),"\u5DE5\u4F5C\u539F\u7406"),`
`,l.h(a.ul,null,`
`,l.h(a.li,null,l.h(a.code,null,"WebGL"),"\u5728",l.h(a.code,null,"GPU"),"\u4E0A\u7684\u5DE5\u4F5C\u57FA\u672C\u4E0A\u5206\u4E3A\u4E24\u90E8\u5206\uFF0C\u7B2C\u4E00\u90E8\u5206\u662F\u5C06\u9876\u70B9\uFF08\u6216\u6570\u636E\u6D41\uFF09\u8F6C\u6362\u5230\u88C1\u526A\u7A7A\u95F4\u7684\u5750\u6807\uFF0C \u7B2C\u4E8C\u90E8\u5206\u662F\u57FA\u4E8E\u7B2C\u4E00\u90E8\u5206\u7684\u7ED3\u679C\u7ED8\u5236\u50CF\u7D20\u70B9"),`
`),`
`,l.h(I,{alt:"\u9876\u70B9\u4ECE\u50CF\u7D20\u7A7A\u95F4\u5230\u88C1\u526A\u7A7A\u95F4\u7684\u8F6C\u6362\u793A\u610F\u56FE",src:F}),`
`,l.h(a.ul,null,`
`,l.h(a.li,null,`
`,l.h(a.p,null,"\u9876\u70B9\u7740\u8272\u5668\uFF08",l.h(a.code,null,"Vertex Shader"),"\uFF09\u662F\u4F60\u5199\u8FDB",l.h(a.code,null,"GLSL"),"\u4E2D\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u6BCF\u4E2A\u9876\u70B9\u8C03\u7528\u4E00\u6B21\uFF0C\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u505A\u4E00\u4E9B\u6570\u5B66\u8FD0\u7B97\u540E\u8BBE\u7F6E\u4E86\u4E00\u4E2A\u7279\u6B8A\u7684",l.h(a.code,null,"gl_Position"),`
\u53D8\u91CF\uFF0C \u8FD9\u4E2A\u53D8\u91CF\u5C31\u662F\u8BE5\u9876\u70B9\u8F6C\u6362\u5230\u88C1\u526A\u7A7A\u95F4\u4E2D\u7684\u5750\u6807\u503C\uFF0C`,l.h(a.code,null,"GPU"),"\u63A5\u6536\u8BE5\u503C\u5E76\u5C06\u5176\u4FDD\u5B58\u8D77\u6765"),`
`),`
`,l.h(a.li,null,`
`,l.h(a.p,null,"\u8BA1\u7B97\u51FA\u6240\u9700\u9876\u70B9\u5BF9\u5E94\u7684\u50CF\u7D20\u540E\uFF0C",l.h(a.code,null,"WebGL"),`\u5C31\u4F1A\u5149\u6805\u5316\u76F8\u5E94\u7684\u56FE\u5143\uFF08\u201C\u5149\u6805\u5316\u201D\u5176\u5B9E\u5C31\u662F\u201C\u7528\u50CF\u7D20\u753B\u51FA\u6765\u201D \u7684\u82B1\u54E8\u53EB\u6CD5\uFF09\uFF1B\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u50CF\u7D20\uFF0C\u5B83\u4F1A\u8C03\u7528\u4F60
\u7684\u7247\u6BB5\u7740\u8272\u5668\u8BE2\u95EE\u4F60\u4F7F\u7528\u4EC0\u4E48\u989C\u8272\uFF1B\u4F60\u901A\u8FC7\u7ED9\u7247\u6BB5\u7740\u8272\u5668\u7684\u4E00\u4E2A\u7279\u6B8A\u53D8\u91CFgl_FragColor\u8BBE\u7F6E\u4E00\u4E2A\u989C\u8272\u503C\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u50CF\u7D20\u989C\u8272`),`
`),`
`),`
`,l.h(a.h2,null,"\u4F7F\u7528\u53EF\u53D8\u91CF\uFF08",l.h(a.code,null,"Varying"),"\uFF09\u7ED8\u5236\u6E10\u53D8\u989C\u8272\u4E09\u89D2\u5F62"),`
`,l.h(a.ul,null,`
`,l.h(a.li,null,`
`,l.h(a.p,null,"\u9876\u70B9\u7740\u8272\u5668"),`
`,l.h(a.pre,null,l.h(a.code,{className:"hljs language-cpp"},`attribute vec2 a_position;
uniform mat3 u_matrix;
varying vec4 v_color;

`,l.h(a.span,{className:"hljs-function"},l.h(a.span,{className:"hljs-type"},"void")," ",l.h(a.span,{className:"hljs-title"},"main"),l.h(a.span,{className:"hljs-params"},"()")," "),`{
  gl_Position = `,l.h(a.span,{className:"hljs-built_in"},"vec4"),"((u_matrix * ",l.h(a.span,{className:"hljs-built_in"},"vec3"),"(a_position, ",l.h(a.span,{className:"hljs-number"},"1"),")).xy, ",l.h(a.span,{className:"hljs-number"},"0"),", ",l.h(a.span,{className:"hljs-number"},"1"),`);
  v_color = gl_Position * `,l.h(a.span,{className:"hljs-number"},"0.5")," + ",l.h(a.span,{className:"hljs-number"},"0.5"),`;
}
`)),`
`),`
`,l.h(a.li,null,`
`,l.h(a.p,null,"\u7247\u6BB5\u7740\u8272\u5668"),`
`,l.h(a.pre,null,l.h(a.code,{className:"hljs language-cpp"},"precision mediump ",l.h(a.span,{className:"hljs-type"},"float"),`;
varying vec4 v_color;

`,l.h(a.span,{className:"hljs-function"},l.h(a.span,{className:"hljs-type"},"void")," ",l.h(a.span,{className:"hljs-title"},"main"),l.h(a.span,{className:"hljs-params"},"()")," "),`{
  gl_FragColor = v_color;
}
`)),`
`),`
`,l.h(a.li,null,`
`,l.h(a.p,null,"\u5728\u4E24\u4E2A\u7740\u8272\u5668\u4E2D\u90FD\u5B9A\u4E49\u4E86\u53EF\u53D8\u91CF",l.h(a.code,null,"v_color"),`\uFF0C\u5B83\u4EEC\u6307\u5411\u5171\u540C\u7684\u5185\u5B58\u5730\u5740\uFF1B\u53EF\u4EE5\u770B\u5230\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u9876\u70B9\u90FD\u4F1A\u8BA1\u7B97\u4E00\u4E2A\u989C\u8272\u503C\u5E76\u4E14\u4E09\u89D2\u5F62
\u5185\u90E8\u7684\u6BCF\u4E2A\u70B9\u7684\u989C\u8272\u90FD\u4E0D\u4E00\u6837\uFF1B\u8FD9\u662F\u56E0\u4E3A\u5728`,l.h(a.code,null,"WebGL"),`\u5BF9\u4E09\u89D2\u5F62\u8FDB\u884C\u5149\u6805\u5316\u65F6\u4F1A\u6839\u636E\u4E09\u4E2A\u9876\u70B9\u7684\u989C\u8272\u503C\u8FDB\u884C\u63D2\u503C\uFF0C\u6BCF\u4E00\u4E2A\u50CF\u7D20\u5728\u8C03\u7528\u7247\u6BB5
\u7740\u8272\u5668\u65F6\uFF0C\u53EF\u53D8\u91CF\u7684\u503C\u662F\u4E0E\u4E4B\u5BF9\u5E94\u7684\u63D2\u503C\uFF1B\u8FD9\u662F\u4E5F`,l.h(a.code,null,"v_color"),"\u79F0\u4E3A\u53EF\u53D8\u91CF\uFF08",l.h(a.code,null,"varying"),"\uFF09\u7684\u539F\u56E0"),`
`),`
`,l.h(a.li,null,`
`,l.h(a.p,null,"\u4EE3\u7801\u7684\u6838\u5FC3\u90E8\u5206\u5982\u4E0B\uFF1A"),`
`,l.h(a.pre,null,l.h(a.code,{className:"hljs language-javascript"},l.h(a.span,{className:"hljs-keyword"},"const")," ",l.h(a.span,{className:"hljs-title function_"},"drawScene")," = (",l.h(a.span,{className:"hljs-params"}),`) => {
  `,l.h(a.span,{className:"hljs-keyword"},"const")," gl = glVessel.",l.h(a.span,{className:"hljs-property"},"value"),".",l.h(a.span,{className:"hljs-title function_"},"getContext"),"(",l.h(a.span,{className:"hljs-string"},"'webgl'"),`)

  `,l.h(a.span,{className:"hljs-keyword"},"if"),`(!gl) {
    `,l.h(a.span,{className:"hljs-keyword"},"return"),`
  }

  `,l.h(a.span,{className:"hljs-keyword"},"const")," positionAttributeLocation = gl.",l.h(a.span,{className:"hljs-title function_"},"getAttribLocation"),"(program, ",l.h(a.span,{className:"hljs-string"},"'a_position'"),`)
  `,l.h(a.span,{className:"hljs-keyword"},"const")," matrixLocation = gl.",l.h(a.span,{className:"hljs-title function_"},"getUniformLocation"),"(program, ",l.h(a.span,{className:"hljs-string"},"'u_matrix'"),`)

  gl.`,l.h(a.span,{className:"hljs-title function_"},"viewport"),"(",l.h(a.span,{className:"hljs-number"},"0"),", ",l.h(a.span,{className:"hljs-number"},"0"),", gl.",l.h(a.span,{className:"hljs-property"},"canvas"),".",l.h(a.span,{className:"hljs-property"},"width"),", gl.",l.h(a.span,{className:"hljs-property"},"canvas"),".",l.h(a.span,{className:"hljs-property"},"height"),`)
  gl.`,l.h(a.span,{className:"hljs-title function_"},"clearColor"),"(",l.h(a.span,{className:"hljs-number"},"0"),", ",l.h(a.span,{className:"hljs-number"},"0"),", ",l.h(a.span,{className:"hljs-number"},"0"),", ",l.h(a.span,{className:"hljs-number"},"0"),`)
  gl.`,l.h(a.span,{className:"hljs-title function_"},"clear"),"(gl.",l.h(a.span,{className:"hljs-property"},"COLOR_BUFFER_BIT"),`)
  gl.`,l.h(a.span,{className:"hljs-title function_"},"useProgram"),`(program)

  `,l.h(a.span,{className:"hljs-keyword"},"const")," size = ",l.h(a.span,{className:"hljs-number"},"2"),`
  `,l.h(a.span,{className:"hljs-keyword"},"const")," type = gl.",l.h(a.span,{className:"hljs-property"},"FLOAT"),`
  `,l.h(a.span,{className:"hljs-keyword"},"const")," normalized = ",l.h(a.span,{className:"hljs-literal"},"false"),`
  `,l.h(a.span,{className:"hljs-keyword"},"const")," stride = ",l.h(a.span,{className:"hljs-number"},"0"),`
  `,l.h(a.span,{className:"hljs-keyword"},"const")," offset = ",l.h(a.span,{className:"hljs-number"},"0"),`
  `,l.h(a.span,{className:"hljs-keyword"},"const")," dx = ",l.h(a.span,{className:"hljs-built_in"},"parseFloat"),"(",l.h(a.span,{className:"hljs-title function_"},"formatValue"),"(xPos.",l.h(a.span,{className:"hljs-property"},"value"),`))
  `,l.h(a.span,{className:"hljs-keyword"},"const")," dy = ",l.h(a.span,{className:"hljs-built_in"},"parseFloat"),"(",l.h(a.span,{className:"hljs-title function_"},"formatValue"),"(yPos.",l.h(a.span,{className:"hljs-property"},"value"),`))
  `,l.h(a.span,{className:"hljs-keyword"},"const")," dRadian = ",l.h(a.span,{className:"hljs-title function_"},"formatRadian"),"(radian.",l.h(a.span,{className:"hljs-property"},"value"),`)
  
  gl.`,l.h(a.span,{className:"hljs-title function_"},"enableVertexAttribArray"),`(positionAttributeLocation)
  gl.`,l.h(a.span,{className:"hljs-title function_"},"vertexAttribPointer"),`(positionAttributeLocation, size, type, normalized, stride, offset)
  gl.`,l.h(a.span,{className:"hljs-title function_"},"uniformMatrix3fv"),"(matrixLocation, ",l.h(a.span,{className:"hljs-literal"},"false"),", ",l.h(a.span,{className:"hljs-keyword"},"new")," ",l.h(a.span,{className:"hljs-title class_"},"Float32Array"),"(",l.h(a.span,{className:"hljs-title function_"},"transform2dMat"),"(dRadian, ",l.h(a.span,{className:"hljs-number"},"1.0"),`, dx, dy)))

  `,l.h(a.span,{className:"hljs-keyword"},"const")," primitiveType = gl.",l.h(a.span,{className:"hljs-property"},"TRIANGLES"),`
  `,l.h(a.span,{className:"hljs-keyword"},"const")," first = ",l.h(a.span,{className:"hljs-number"},"0"),`
  `,l.h(a.span,{className:"hljs-keyword"},"const")," count = ",l.h(a.span,{className:"hljs-number"},"3"),`
  gl.`,l.h(a.span,{className:"hljs-title function_"},"drawArrays"),`(primitiveType, first, count)
}

`,l.h(a.span,{className:"hljs-keyword"},"const")," ",l.h(a.span,{className:"hljs-title function_"},"transform2dMat")," = (",l.h(a.span,{className:"hljs-params"},"theta, alpha, dx, dy"),`) => {
  `,l.h(a.span,{className:"hljs-keyword"},"return"),` [
    alpha * `,l.h(a.span,{className:"hljs-title class_"},"Math"),".",l.h(a.span,{className:"hljs-title function_"},"cos"),"(theta), alpha * ",l.h(a.span,{className:"hljs-title class_"},"Math"),".",l.h(a.span,{className:"hljs-title function_"},"sin"),"(theta), ",l.h(a.span,{className:"hljs-number"},"0"),`,
    - alpha * `,l.h(a.span,{className:"hljs-title class_"},"Math"),".",l.h(a.span,{className:"hljs-title function_"},"sin"),"(theta), alpha * ",l.h(a.span,{className:"hljs-title class_"},"Math"),".",l.h(a.span,{className:"hljs-title function_"},"cos"),"(theta), ",l.h(a.span,{className:"hljs-number"},"0"),`,
    dx, dy, `,l.h(a.span,{className:"hljs-number"},"1"),`,
  ]
}
`)),`
`,l.h(a.p,null,"\u6BCF\u6B21\u4E09\u89D2\u5F62\u53D1\u751F\u5E73\u79FB\u548C\u65CB\u8F6C\u53D8\u6362\u65F6\uFF0C\u4F7F\u7528",l.h(a.code,null,"transform2dMat(dRadian, alpha, dx, dy)"),"\u91CD\u65B0\u8BA1\u7B97\u76F8\u5E94\u7684\u53D8\u6362\u77E9\u9635\uFF1B\u5E76\u4E14\u8C03\u7528",l.h(a.code,null,"drawScene"),`
\u8FDB\u884C\u91CD\u65B0\u7ED8\u5236`),`
`),`
`),`
`,l.h(N),`
`,l.h(a.h2,null,"\u7F13\u51B2\uFF08",l.h(a.code,null,"buffer"),"\uFF09\u4E0E\u5C5E\u6027\uFF08",l.h(a.code,null,"attribute"),"\uFF09"),`
`,l.h(a.ul,null,`
`,l.h(a.li,null,`
`,l.h(a.p,null,"\u7F13\u51B2\u64CD\u4F5C\u662F\u5728",l.h(a.code,null,"GPU"),"\u4E0A\u83B7\u53D6\u9876\u70B9\u548C\u5176\u4ED6\u9876\u70B9\u6570\u636E\u7684\u4E00\u79CD\u65B9\u5F0F\uFF1A"),`
`,l.h(a.ul,null,`
`,l.h(a.li,null,l.h(a.code,null,"gl.createBuffer"),"\u521B\u5EFA\u4E00\u4E2A\u7F13\u51B2",`
`,l.h(a.pre,null,l.h(a.code,{className:"hljs language-javascript"},l.h(a.span,{className:"hljs-keyword"},"const")," someBuffer = gl.",l.h(a.span,{className:"hljs-title function_"},"createBuffer"),`()
`)),`
`),`
`,l.h(a.li,null,l.h(a.code,null,"gl.bindBuffer"),"\u662F\u8BBE\u7F6E\u7F13\u51B2\u4E3A\u5F53\u524D\u4F7F\u7528\u7F13\u51B2",`
`,l.h(a.pre,null,l.h(a.code,{className:"hljs language-javascript"},"gl.",l.h(a.span,{className:"hljs-title function_"},"bindBuffer"),"(gl.",l.h(a.span,{className:"hljs-property"},"ARRAY_BUFFER"),`, someBuffer)
`)),`
`,"\u8FD9\u4E2A\u547D\u4EE4\u662F\u5C06\u7F13\u51B2\u7ED1\u5B9A\u5230",l.h(a.code,null,"ARRAY_BUFFER"),"\u7ED1\u5B9A\u70B9\uFF0C\u5B83\u662F",l.h(a.code,null,"WebGL"),"\u5185\u90E8\u7684\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF"),`
`,l.h(a.li,null,l.h(a.code,null,"gl.bufferData"),"\u5C06\u6570\u636E\u62F7\u8D1D\u5230\u7F13\u51B2\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u4E00\u822C\u5728\u521D\u59CB\u5316\u5B8C\u6210"),`
`),`
`,l.h(a.pre,null,l.h(a.code,{className:"hljs language-javascript"},l.h(a.span,{className:"hljs-comment"},"// positions\u662F\u4E00\u4E2A\u9876\u70B9\u6570\u636E\u7684\u6570\u7EC4"),`
gl.`,l.h(a.span,{className:"hljs-title function_"},"bufferData"),"(gl.",l.h(a.span,{className:"hljs-property"},"ARRAY_BUFFER"),", ",l.h(a.span,{className:"hljs-keyword"},"new")," ",l.h(a.span,{className:"hljs-title class_"},"Float32Array"),"(positions), gl.",l.h(a.span,{className:"hljs-property"},"STATIC_DRAW"),`)
`)),`
`,l.h(a.ul,null,`
`,l.h(a.li,null,"\u4E00\u65E6\u6570\u636E\u5B58\u5230\u7F13\u51B2\u4E2D\uFF0C\u8FD8\u9700\u8981\u544A\u8BC9",l.h(a.code,null,"WebGL"),"\u600E\u4E48\u4ECE\u7F13\u51B2\u4E2D\u63D0\u53D6\u6570\u636E\u4F20\u7ED9\u9876\u70B9\u7740\u8272\u5668\u7684\u5C5E\u6027",`
`,l.h(a.pre,null,l.h(a.code,{className:"hljs language-javascript"},l.h(a.span,{className:"hljs-keyword"},"const")," someLocation = gl.",l.h(a.span,{className:"hljs-title function_"},"getAttribLocation"),"(program, ",l.h(a.span,{className:"hljs-string"},"'some_position'"),`)

`,l.h(a.span,{className:"hljs-comment"},"// \u544A\u8BC9WebGL\u6211\u4EEC\u60F3\u4ECE\u7F13\u51B2\u4E2D\u63D0\u4F9B\u6570\u636E"),`
gl.`,l.h(a.span,{className:"hljs-title function_"},"enableVertexAttribArray"),`(someLocation)
`,l.h(a.span,{className:"hljs-comment"},"// \u8BBE\u7F6E\u5F53\u524D\u4F7F\u7528\u7F13\u51B2"),`
gl.`,l.h(a.span,{className:"hljs-title function_"},"bindBuffer"),"(gl.",l.h(a.span,{className:"hljs-property"},"ARRAY_BUFFER"),`, someBuffer)
`,l.h(a.span,{className:"hljs-comment"},"// \u544A\u8BC9WebGL\u5982\u4F55\u4ECEARRAY_BUFFER\u7ED1\u5B9A\u70B9\u5F53\u524D\u7ED1\u5B9A\u7684\u7F13\u51B2\u83B7\u53D6\u5BF9\u5E94\u7684\u9876\u70B9\u6570\u636E"),`
gl.`,l.h(a.span,{className:"hljs-title function_"},"vertexAttribPointer"),`(
  location,
  size,
  dataType,
  normalized,
  strideToNextPieceOfData,
  offsetIntoBuffer)
`,l.h(a.span,{className:"hljs-comment"},"// \u6700\u540E\u662F\u7ED8\u5236"),`
gl.`,l.h(a.span,{className:"hljs-title function_"},"drawArrays"),`(primitiveType, first, count)
`)),`
`),`
`),`
`),`
`))}function O(e={}){let{wrapper:a}=Object.assign({},G(),e.components);return a?l.h(a,e,l.h(S,e)):S(e)}var C=O;var $a=H({name:"MDX_02-PRINCIPLE",components:{MDXComponentContext:C},setup(e,a){return()=>t("div",{class:"markdown-body",style:"padding: 15px;"},t(C,{...a?.attrs}))}});export{$a as default};
