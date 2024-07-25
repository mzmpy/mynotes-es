import{a as s}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-WZJKW3KT.js";import{a as k,b as R,c as j}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-IM3VYHUE.js";import{r as i}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-FM3SQTAW.js";import{a as w0}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-Q6XF6CKX.js";import{a as h0}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-UUYEHL2W.js";import{H as F,L as Y,aa as d,f as e,g,pa as a,xa as v0,z as r}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-M2CGHGHN.js";g();v0();g();g();g();v0();g();var I0={operation:{name:"src__components__mdx__constituents__webgl__point-lighting__pointLightSimple__index-X2kaNa-operation",composes:[],isReferenced:!1},vessel:{name:"src__components__mdx__constituents__webgl__point-lighting__pointLightSimple__index-X2kaNa-vessel",composes:[],isReferenced:!1},"gl-canvas":{name:"src__components__mdx__constituents__webgl__point-lighting__pointLightSimple__index-X2kaNa-gl-canvas",composes:[],isReferenced:!1}},D=(l=>n=>{if(typeof n!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return l[n.replace(/[A-Z]/g,v=>"-"+v.toLowerCase())].name})(I0);var f0=F({name:"PointLightSimple",components:{ElSlider:i},props:{color:{type:Array,default:[1,1,1]}},setup(l){let n=r(),v=r(40),w=r(55),H=r(25),y=r(50),x=r(40),P=r(60),A=r(20),m,c=`
    attribute vec4 a_position;
    uniform mat4 u_matrix;
    uniform mat4 u_world_matrix;
    uniform mat4 u_world_inverse_transpose_matrix;
    uniform vec3 u_lightWorldPosition;
    attribute vec3 a_normal;
    varying vec3 v_normal;
    varying vec3 v_surfaceToLight;

    void main() {
      vec3 surfaceWorldPosition = (u_world_matrix * a_position).xyz;

      gl_Position = u_matrix * a_position;
      v_surfaceToLight = u_lightWorldPosition - surfaceWorldPosition;
      v_normal = mat3(u_world_inverse_transpose_matrix) * a_normal;
    }
    `,q=`
    precision mediump float;
    varying vec3 v_normal;
    uniform vec4 u_color;
    varying vec3 v_surfaceToLight;
    uniform vec3 u_lightColor;

    void main() {
      vec3 normal = normalize(v_normal);
      vec3 surfaceToLightDirection = normalize(v_surfaceToLight);
      float light_Weight = dot(normal, surfaceToLightDirection);

      gl_FragColor = u_color;
      gl_FragColor.rgb *= light_Weight * u_lightColor;
    }
    `,U=()=>{let t=n.value.getContext("webgl");if(!t)return;j(t,500,500);let z=k(t,t.VERTEX_SHADER,c),o=k(t,t.FRAGMENT_SHADER,q);return R(t,z,o)},h=()=>{let t=n.value.getContext("webgl");if(!t)return;let z=t.getAttribLocation(m,"a_position"),o=t.getAttribLocation(m,"a_normal"),f=t.getUniformLocation(m,"u_matrix"),$=t.getUniformLocation(m,"u_color"),O=t.getUniformLocation(m,"u_lightWorldPosition"),e0=t.getUniformLocation(m,"u_world_matrix"),a0=t.getUniformLocation(m,"u_world_inverse_transpose_matrix"),s0=t.getUniformLocation(m,"u_lightColor");t.viewport(0,0,t.canvas.width,t.canvas.height),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.CULL_FACE),t.enable(t.DEPTH_TEST),t.useProgram(m);let r0=parseFloat(u(v.value)),i0=parseFloat(u(w.value)),l0=parseFloat(E(H.value)),m0=L(y.value),c0=L(x.value),u0=L(P.value),_0=Z(A.value),p0=t.canvas.clientWidth/t.canvas.clientHeight,_=s.create(),S=s.create(),N=s.create(),V=s.create();s.translate(_,_,[r0,i0,l0]),s.rotateX(_,_,m0),s.rotateY(_,_,c0),s.rotateZ(_,_,u0),s.invert(V,_),s.transpose(V,V),s.perspective(S,_0,p0,1,20),s.multiply(N,S,_),t.uniformMatrix4fv(a0,!1,V),t.uniformMatrix4fv(e0,!1,_),t.uniformMatrix4fv(f,!1,N),t.uniform4fv($,[.2,1,.2,1]),t.uniform3fv(O,[0,0,-1.5]),t.uniform3fv(s0,l.color);let p=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,p),t0(t),t.enableVertexAttribArray(z),t.vertexAttribPointer(z,3,t.FLOAT,!1,0,0);let G=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,G),n0(t),t.enableVertexAttribArray(o),t.vertexAttribPointer(o,3,t.FLOAT,!1,0,0);let T=t.TRIANGLES,W=0,g0=6*16;t.drawArrays(T,W,g0)},u=t=>(2*t/100-1).toFixed(2),E=t=>(-11*t/100+1).toFixed(2),I=t=>(t*360/100).toFixed(2)+"\xB0",X=t=>(t*178/100+1).toFixed(2)+"\xB0",L=t=>2*Math.PI*t/100,Z=t=>Math.PI*178/180*t/100,C=t=>{v.value=t,h()},B=t=>{w.value=t,h()},K=t=>{H.value=t,h()},M=t=>{y.value=t,h()},Q=t=>{x.value=t,h()},J=t=>{P.value=t,h()},o0=t=>{A.value=t,h()},t0=t=>{t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0,.05,0,-.6,.05,.1,-.6,.05,.1,-.6,.05,.1,0,.05,0,0,.05,.1,0,.05,.1,-.1,.05,.37,-.1,.05,.37,-.1,.05,.37,0,.05,.1,0,.05,.1,-.25,.05,.1,-.35,.05,.25,-.35,.05,.25,-.35,.05,.25,-.25,.05,.1,-.25,.05,0,0,-.05,.1,0,-.05,.1,-.6,-.05,.1,-.6,-.05,0,-.6,-.05,0,0,-.05,.1,0,-.05,.37,-.1,-.05,.1,-.1,-.05,.37,0,-.05,.37,-.1,-.05,.1,0,-.05,.1,-.25,-.05,.25,-.25,-.05,.25,-.35,-.05,.25,-.35,-.05,.1,-.35,-.05,.1,-.25,-.05,0,0,-.05,0,0,.05,.37,0,.05,.37,0,.05,.37,0,-.05,0,0,-.05,.1,-.25,-.05,.1,-.25,.05,.25,-.25,.05,.25,-.25,.05,.25,-.25,-.05,.1,-.25,-.05,.1,-.1,.05,.1,-.1,-.05,.37,-.1,-.05,.37,-.1,-.05,.37,-.1,.05,.1,-.1,.05,.1,-.35,.05,.1,-.35,-.05,.25,-.35,-.05,.25,-.35,-.05,.25,-.35,.05,.1,-.35,.05,0,-.6,.05,0,-.6,-.05,.1,-.6,-.05,.1,-.6,-.05,.1,-.6,.05,0,-.6,.05,0,0,-.05,0,-.6,-.05,0,-.6,.05,0,-.6,.05,0,0,.05,0,0,-.05,.37,0,.05,.37,-.1,.05,.37,-.1,-.05,.37,-.1,-.05,.37,0,-.05,.37,0,.05,.1,-.1,.05,.1,-.25,.05,.1,-.25,-.05,.1,-.25,-.05,.1,-.1,-.05,.1,-.1,.05,.1,-.35,.05,.1,-.6,.05,.1,-.6,-.05,.1,-.6,-.05,.1,-.35,-.05,.1,-.35,.05,.25,-.25,.05,.25,-.35,.05,.25,-.35,-.05,.25,-.35,-.05,.25,-.25,-.05,.25,-.25,.05]),t.STATIC_DRAW)},n0=t=>{t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),t.STATIC_DRAW)};return Y(()=>{m=U(),h()}),()=>a(d,null,a("div",{class:D("vessel")},a("canvas",{class:D("gl-canvas"),ref:n}),a("div",{class:D("operation")},a(i,{modelValue:v.value,formatTooltip:u,"onUpdate:modelValue":C}),a(i,{modelValue:w.value,formatTooltip:u,"onUpdate:modelValue":B}),a(i,{modelValue:H.value,formatTooltip:E,"onUpdate:modelValue":K}),a(i,{modelValue:y.value,formatTooltip:I,"onUpdate:modelValue":M}),a(i,{modelValue:x.value,formatTooltip:I,"onUpdate:modelValue":Q}),a(i,{modelValue:P.value,formatTooltip:I,"onUpdate:modelValue":J}),a(i,{modelValue:A.value,formatTooltip:X,"onUpdate:modelValue":o0}))))}});var H0="https://mzmpy.github.io/mynotes-es/assets/png/specular-L46Z3SLK.png";g();v0();g();var V0={"gl-canvas":{name:"src__components__mdx__constituents__webgl__point-lighting__pointLightSpecular__index-GoWSAq-gl-canvas",composes:[],isReferenced:!1},vessel:{name:"src__components__mdx__constituents__webgl__point-lighting__pointLightSpecular__index-GoWSAq-vessel",composes:[],isReferenced:!1},operation:{name:"src__components__mdx__constituents__webgl__point-lighting__pointLightSpecular__index-GoWSAq-operation",composes:[],isReferenced:!1}},b=(l=>n=>{if(typeof n!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return l[n.replace(/[A-Z]/g,v=>"-"+v.toLowerCase())].name})(V0);var z0=F({name:"PointLightSpecular",components:{ElSlider:i},props:{color:{type:Array,default:[1,1,1]}},setup(l){let n=r(),v=r(40),w=r(55),H=r(25),y=r(50),x=r(40),P=r(60),A=r(20),m=r(150),c,q=`
    attribute vec4 a_position;
    uniform mat4 u_matrix;
    uniform mat4 u_world_matrix;
    uniform mat4 u_world_inverse_transpose_matrix;
    uniform vec3 u_lightWorldPosition;
    uniform vec3 u_viewWorldPosition;
    attribute vec3 a_normal;
    varying vec3 v_normal;
    varying vec3 v_surfaceToLight;
    varying vec3 v_surfaceToView;

    void main() {
      vec3 surfaceWorldPosition = (u_world_matrix * a_position).xyz;

      gl_Position = u_matrix * a_position;
      v_surfaceToLight = u_lightWorldPosition - surfaceWorldPosition;
      v_surfaceToView = u_viewWorldPosition - surfaceWorldPosition;
      v_normal = mat3(u_world_inverse_transpose_matrix) * a_normal;
    }
    `,U=`
    precision mediump float;
    varying vec3 v_normal;
    uniform vec4 u_color;
    varying vec3 v_surfaceToLight;
    varying vec3 v_surfaceToView;
    uniform float u_shininess;
    uniform vec3 u_lightColor;

    void main() {
      vec3 normal = normalize(v_normal);
      vec3 surfaceToLightDirection = normalize(v_surfaceToLight);
      vec3 surfaceToViewDirection = normalize(v_surfaceToView);
      vec3 halfVector = normalize(surfaceToLightDirection + surfaceToViewDirection);
      float light_Weight = dot(normal, surfaceToLightDirection);
      float specular_weight = 0.0;

      if(light_Weight > 0.0) {
        specular_weight = pow(dot(normal, halfVector), 10.0 * u_shininess);
      }

      gl_FragColor = u_color;
      gl_FragColor.rgb *= light_Weight * u_lightColor;
      gl_FragColor.rgb += specular_weight * u_lightColor;
    }
    `,h=()=>{let o=n.value.getContext("webgl");if(!o)return;j(o,500,500);let f=k(o,o.VERTEX_SHADER,q),$=k(o,o.FRAGMENT_SHADER,U);return R(o,f,$)},u=()=>{let o=n.value.getContext("webgl");if(!o)return;let f=o.getAttribLocation(c,"a_position"),$=o.getAttribLocation(c,"a_normal"),O=o.getUniformLocation(c,"u_matrix"),e0=o.getUniformLocation(c,"u_color"),a0=o.getUniformLocation(c,"u_lightWorldPosition"),s0=o.getUniformLocation(c,"u_viewWorldPosition"),r0=o.getUniformLocation(c,"u_world_matrix"),i0=o.getUniformLocation(c,"u_world_inverse_transpose_matrix"),l0=o.getUniformLocation(c,"u_shininess"),m0=o.getUniformLocation(c,"u_lightColor");o.viewport(0,0,o.canvas.width,o.canvas.height),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),o.enable(o.CULL_FACE),o.enable(o.DEPTH_TEST),o.useProgram(c);let c0=parseFloat(E(v.value)),u0=parseFloat(E(w.value)),_0=parseFloat(I(H.value)),p0=Z(y.value),_=Z(x.value),S=Z(P.value),N=C(A.value),V=o.canvas.clientWidth/o.canvas.clientHeight,p=s.create(),G=s.create(),T=s.create(),W=s.create();s.translate(p,p,[c0,u0,_0]),s.rotateX(p,p,p0),s.rotateY(p,p,_),s.rotateZ(p,p,S),s.invert(W,p),s.transpose(W,W),s.perspective(G,N,V,1,20),s.multiply(T,G,p),o.uniformMatrix4fv(i0,!1,W),o.uniformMatrix4fv(r0,!1,p),o.uniformMatrix4fv(O,!1,T),o.uniform4fv(e0,[.2,1,.2,1]),o.uniform3fv(a0,[1,0,-1.5]),o.uniform3fv(s0,[0,0,5]),o.uniform1f(l0,m.value),o.uniform3fv(m0,l.color);let g0=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,g0),t(o),o.enableVertexAttribArray(f),o.vertexAttribPointer(f,3,o.FLOAT,!1,0,0);let x0=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,x0),z(o),o.enableVertexAttribArray($),o.vertexAttribPointer($,3,o.FLOAT,!1,0,0);let P0=o.TRIANGLES,A0=0,E0=6*16;o.drawArrays(P0,A0,E0)},E=o=>(2*o/100-1).toFixed(2),I=o=>(-11*o/100+1).toFixed(2),X=o=>(o*360/100).toFixed(2)+"\xB0",L=o=>(o*178/100+1).toFixed(2)+"\xB0",Z=o=>2*Math.PI*o/100,C=o=>Math.PI*178/180*o/100,B=o=>{v.value=o,u()},K=o=>{w.value=o,u()},M=o=>{H.value=o,u()},Q=o=>{y.value=o,u()},J=o=>{x.value=o,u()},o0=o=>{P.value=o,u()},t0=o=>{A.value=o,u()},n0=o=>{m.value=o,u()},t=o=>{o.bufferData(o.ARRAY_BUFFER,new Float32Array([0,0,.05,0,-.6,.05,.1,-.6,.05,.1,-.6,.05,.1,0,.05,0,0,.05,.1,0,.05,.1,-.1,.05,.37,-.1,.05,.37,-.1,.05,.37,0,.05,.1,0,.05,.1,-.25,.05,.1,-.35,.05,.25,-.35,.05,.25,-.35,.05,.25,-.25,.05,.1,-.25,.05,0,0,-.05,.1,0,-.05,.1,-.6,-.05,.1,-.6,-.05,0,-.6,-.05,0,0,-.05,.1,0,-.05,.37,-.1,-.05,.1,-.1,-.05,.37,0,-.05,.37,-.1,-.05,.1,0,-.05,.1,-.25,-.05,.25,-.25,-.05,.25,-.35,-.05,.25,-.35,-.05,.1,-.35,-.05,.1,-.25,-.05,0,0,-.05,0,0,.05,.37,0,.05,.37,0,.05,.37,0,-.05,0,0,-.05,.1,-.25,-.05,.1,-.25,.05,.25,-.25,.05,.25,-.25,.05,.25,-.25,-.05,.1,-.25,-.05,.1,-.1,.05,.1,-.1,-.05,.37,-.1,-.05,.37,-.1,-.05,.37,-.1,.05,.1,-.1,.05,.1,-.35,.05,.1,-.35,-.05,.25,-.35,-.05,.25,-.35,-.05,.25,-.35,.05,.1,-.35,.05,0,-.6,.05,0,-.6,-.05,.1,-.6,-.05,.1,-.6,-.05,.1,-.6,.05,0,-.6,.05,0,0,-.05,0,-.6,-.05,0,-.6,.05,0,-.6,.05,0,0,.05,0,0,-.05,.37,0,.05,.37,-.1,.05,.37,-.1,-.05,.37,-.1,-.05,.37,0,-.05,.37,0,.05,.1,-.1,.05,.1,-.25,.05,.1,-.25,-.05,.1,-.25,-.05,.1,-.1,-.05,.1,-.1,.05,.1,-.35,.05,.1,-.6,.05,.1,-.6,-.05,.1,-.6,-.05,.1,-.35,-.05,.1,-.35,.05,.25,-.25,.05,.25,-.35,.05,.25,-.35,-.05,.25,-.35,-.05,.25,-.25,-.05,.25,-.25,.05]),o.STATIC_DRAW)},z=o=>{o.bufferData(o.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),o.STATIC_DRAW)};return Y(()=>{c=h(),u()}),()=>a(d,null,a("div",{class:b("vessel")},a("canvas",{class:b("gl-canvas"),ref:n}),a("div",{class:b("operation")},a(i,{modelValue:v.value,formatTooltip:E,"onUpdate:modelValue":B}),a(i,{modelValue:w.value,formatTooltip:E,"onUpdate:modelValue":K}),a(i,{modelValue:H.value,formatTooltip:I,"onUpdate:modelValue":M}),a(i,{modelValue:y.value,formatTooltip:X,"onUpdate:modelValue":Q}),a(i,{modelValue:x.value,formatTooltip:X,"onUpdate:modelValue":J}),a(i,{modelValue:P.value,formatTooltip:X,"onUpdate:modelValue":o0}),a(i,{modelValue:A.value,formatTooltip:L,"onUpdate:modelValue":t0}),a(i,{modelValue:m.value,step:1,min:1,max:300,"onUpdate:modelValue":n0}))))}});function y0(l){let n=Object.assign({h1:"h1",code:"code",ul:"ul",li:"li",p:"p",h2:"h2",pre:"pre",span:"span"},h0(),l.components);return e.h(e.Fragment,null,e.h(n.h1,null,e.h(n.code,null,"WebGL"),"\u4E09\u7EF4\u70B9\u5149\u6E90"),`
`,e.h(n.ul,null,`
`,e.h(n.li,null,`
`,e.h(n.p,null,`\u4E0A\u4E00\u7BC7\u6211\u4EEC\u770B\u5230\u4E86\u5982\u4F55\u5904\u7406\u5E73\u884C\u5149\u7684\u7167\u5C04\u53CA\u9634\u5F71\u6E32\u67D3\u7684\u95EE\u9898\uFF1B\u5982\u679C\u8BF4\u5E73\u884C\u5149\u504F\u5411\u7406\u60F3\u6A21\u578B\u4E00\u70B9\uFF0C\u90A3\u4E48\u70B9\u5149\u6E90\u66F4\u52A0\u5E38\u89C1\uFF1B\u73B0\u5B9E\u4E2D\u6BD4\u8F83
\u5E38\u89C1\u5E73\u884C\u5149\u662F\u592A\u9633\u5149\uFF0C\u4F46\u662F\u4E8B\u5B9E\u4E0A\u592A\u9633\u5149\u4E5F\u4E0D\u662F\u771F\u6B63\u7684\u5E73\u884C\u5149\uFF0C\u53EA\u662F\u592A\u9633\u8DDD\u79BB\u6211\u4EEC\u592A\u8FDC\u4E86\uFF0C\u5B83\u53D1\u51FA\u7684\u5149\u53EF\u4EE5\u8FD1\u4F3C\u5730\u770B\u4F5C\u5E73\u884C\u7684\uFF1B\u9664\u6B64
\u4E4B\u5916\u201C\u5E73\u884C\u5149\u6E90\u201D\u5C31\u5F88\u96BE\u627E\u5230\u4E86\uFF1B\u800C\u70B9\u5149\u6E90\u53EF\u4EE5\u8BF4\u5230\u5904\u90FD\u662F`),`
`),`
`,e.h(n.li,null,`
`,e.h(n.p,null,`\u5BF9\u4E8E\u70B9\u5149\u6E90\u7167\u5C04\u5230\u7269\u4F53\u8868\u9762\u7684\u5149\u7EBF\uFF0C\u4E0D\u540C\u70B9\u7684\u5149\u7EBF\u65B9\u5411\u4E00\u822C\u90FD\u4E0D\u4E00\u6837\uFF1B\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u77E5\u9053\u6BCF\u4E2A\u70B9\u7684\u5750\u6807\uFF0C\u6CD5\u5411\u4EE5\u53CA\u5149\u6E90\u70B9\u7684\u5750\u6807\uFF1B
\u8FD9\u6837\u53EF\u4EE5\u8BA1\u7B97\u51FA\u6240\u6709\u70B9\u5904\u7684\u5149\u7167\u65B9\u5411\u5E76\u4F7F\u7528\u5E73\u884C\u5149\u7684\u8BA1\u7B97\u65B9\u5F0F\u6765\u5904\u7406\u4E86`),`
`),`
`),`
`,e.h(f0),`
`,e.h(n.h2,null,"\u955C\u9762\u53CD\u5C04"),`
`,e.h(n.ul,null,`
`,e.h(n.li,null,`\u524D\u9762\u5173\u4E8E\u5149\u7684\u7167\u5C04\u4E0E\u9634\u5F71\u6548\u679C\u7684\u4F8B\u5B50\u{1F330}\u90FD\u662F\u5173\u4E8E\u6F2B\u53CD\u5C04\u7684\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u8981\u901A\u8FC7\u8BA1\u7B97\u5149\u7EBF\u662F\u5426\u53CD\u5C04\u5230\u773C\u524D\u6765\u6A21\u62DF\u955C\u9762\u53CD\u5C04\uFF1B\u4E3A\u6B64\u6211\u4EEC
\u9700\u8981\u8BA1\u7B97\u7269\u4F53\u8868\u9762\u6BCF\u4E2A\u70B9\u7684\u6CD5\u5411\uFF0C\u70B9\u5230\u5149\u6E90\u7684\u65B9\u5411\u5411\u91CF\u548C\u70B9\u5230\u89C2\u5BDF\u70B9\u65B9\u5411\u5411\u91CF\uFF0C\u5E76\u8861\u91CF\u89C2\u5BDF\u7684\u5730\u70B9\u4E0E\u5149\u7EBF\u53CD\u5C04\u7684\u65B9\u5411\u504F\u79BB\u7A0B\u5EA6`),`
`),`
`,e.h(w0,{src:H0,alt:"\u955C\u9762\u53CD\u5C04\u793A\u4F8B\u56FE",width:450}),`
`,e.h(n.p,null,"\u4E3B\u8981\u662F\u4FEE\u6539\u7740\u8272\u5668\u4E0A\u7684\u4EE3\u7801\uFF0C\u6DFB\u52A0\u955C\u9762\u53CD\u5C04\u7684\u6743\u91CD\uFF0C\u6216\u8005\u66F4\u51C6\u786E\u5730\u8BF4\u662F\u6DFB\u52A0\u989C\u8272\u53E0\u52A0\u7684\u4EE3\u7801\u903B\u8F91"),`
`,e.h(n.pre,null,e.h(n.code,{className:"hljs language-cpp"},e.h(n.span,{className:"hljs-comment"},"// vertex"),`
attribute vec4 a_position;
uniform mat4 u_matrix;
uniform mat4 u_world_matrix;
uniform mat4 u_world_inverse_transpose_matrix;
uniform vec3 u_lightWorldPosition;
uniform vec3 u_viewWorldPosition;
attribute vec3 a_normal;
varying vec3 v_normal;
varying vec3 v_surfaceToLight;
varying vec3 v_surfaceToView;

`,e.h(n.span,{className:"hljs-function"},e.h(n.span,{className:"hljs-type"},"void")," ",e.h(n.span,{className:"hljs-title"},"main"),e.h(n.span,{className:"hljs-params"},"()")," "),`{
  vec3 surfaceWorldPosition = (u_world_matrix * a_position).xyz;

  gl_Position = u_matrix * a_position;
  v_surfaceToLight = u_lightWorldPosition - surfaceWorldPosition;
  v_surfaceToView = u_viewWorldPosition - surfaceWorldPosition;
  v_normal = `,e.h(n.span,{className:"hljs-built_in"},"mat3"),`(u_world_inverse_transpose_matrix) * a_normal;
}

`,e.h(n.span,{className:"hljs-comment"},"// fragment"),`
precision mediump `,e.h(n.span,{className:"hljs-type"},"float"),`;
varying vec3 v_normal;
uniform vec4 u_color;
varying vec3 v_surfaceToLight;
varying vec3 v_surfaceToView;
uniform `,e.h(n.span,{className:"hljs-type"},"float"),` u_shininess;
uniform vec3 u_lightColor;

`,e.h(n.span,{className:"hljs-function"},e.h(n.span,{className:"hljs-type"},"void")," ",e.h(n.span,{className:"hljs-title"},"main"),e.h(n.span,{className:"hljs-params"},"()")," "),`{
  vec3 normal = `,e.h(n.span,{className:"hljs-built_in"},"normalize"),`(v_normal);
  vec3 surfaceToLightDirection = `,e.h(n.span,{className:"hljs-built_in"},"normalize"),`(v_surfaceToLight);
  vec3 surfaceToViewDirection = `,e.h(n.span,{className:"hljs-built_in"},"normalize"),`(v_surfaceToView);
  vec3 halfVector = `,e.h(n.span,{className:"hljs-built_in"},"normalize"),`(surfaceToLightDirection + surfaceToViewDirection);
  `,e.h(n.span,{className:"hljs-type"},"float")," light_Weight = ",e.h(n.span,{className:"hljs-built_in"},"dot"),`(normal, surfaceToLightDirection);
  `,e.h(n.span,{className:"hljs-type"},"float")," specular_weight = ",e.h(n.span,{className:"hljs-number"},"0.0"),`;

  `,e.h(n.span,{className:"hljs-keyword"},"if"),"(light_Weight > ",e.h(n.span,{className:"hljs-number"},"0.0"),`) {
    specular_weight = `,e.h(n.span,{className:"hljs-built_in"},"pow"),"(",e.h(n.span,{className:"hljs-built_in"},"dot"),"(normal, halfVector), ",e.h(n.span,{className:"hljs-number"},"10.0"),` * u_shininess);
  }

  `,e.h(n.span,{className:"hljs-comment"},"// u_lightColor\u9ED8\u8BA4\u662F[1.0, 1.0, 1.0]\uFF0C\u5373\u767D\u8272"),`
  gl_FragColor = u_color;
  gl_FragColor.rgb *= light_Weight * u_lightColor;
  gl_FragColor.rgb += specular_weight * u_lightColor;
}
`)),`
`,e.h(z0),`
`,e.h(n.h2,null,"\u6709\u8272\u5149\u4E0E\u53CD\u5C04"),`
`,e.h(n.ul,null,`
`,e.h(n.li,null,`
`,e.h(n.p,null,"\u4F7F\u7528\u7EA2\u8272\u5149\u6E90\u7684\u6F2B\u53CD\u5C04"),`
`,e.h(n.pre,null,e.h(n.code,{className:"hljs language-javascript"},"(",e.h(n.span,{className:"xml"},e.h(n.span,{className:"hljs-tag"},"<",e.h(n.span,{className:"hljs-name"},"PointLightSimple")," ",e.h(n.span,{className:"hljs-attr"},"color"),"=",e.h(n.span,{className:"hljs-string"},"{[1,")," ",e.h(n.span,{className:"hljs-attr"},"0.6"),", ",e.h(n.span,{className:"hljs-attr"},"0.6"),"]}>"),e.h(n.span,{className:"hljs-tag"},"</",e.h(n.span,{className:"hljs-name"},"PointLightSimple"),">")),`)
`)),`
`,e.h(f0,{color:[1,.6,.6]}),`
`),`
`,e.h(n.li,null,`
`,e.h(n.p,null,"\u4F7F\u7528\u7EA2\u8272\u5149\u6E90\u7684\u955C\u9762\u53CD\u5C04"),`
`,e.h(n.pre,null,e.h(n.code,{className:"hljs language-javascript"},"(",e.h(n.span,{className:"xml"},e.h(n.span,{className:"hljs-tag"},"<",e.h(n.span,{className:"hljs-name"},"PointLightSpecular")," ",e.h(n.span,{className:"hljs-attr"},"color"),"=",e.h(n.span,{className:"hljs-string"},"{[1,")," ",e.h(n.span,{className:"hljs-attr"},"0.6"),", ",e.h(n.span,{className:"hljs-attr"},"0.6"),"]}>"),e.h(n.span,{className:"hljs-tag"},"</",e.h(n.span,{className:"hljs-name"},"PointLightSpecular"),">")),`)
`)),`
`,e.h(z0,{color:[1,.6,.6]}),`
`),`
`))}function W0(l={}){let{wrapper:n}=Object.assign({},h0(),l.components);return n?e.h(n,l,e.h(y0,l)):y0(l)}var d0=W0;var _o=F({name:"MDX_07-POINT-LIGHTING",components:{MDXComponentContext:d0},setup(l,n){return()=>a("div",{class:"markdown-body",style:"padding: 15px;"},a(d0,{...n?.attrs}))}});export{_o as default};
