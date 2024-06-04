import{a as i}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-5NNHFQD5.js";import{a as L,b as M,c as P}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-QFPEQH6U.js";import{s as F}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-5QVKP7EZ.js";import{a as w}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-KLQSSXLF.js";import{J as h,N as C,_ as v,d as a,e as c,na as l,va as y,x as R}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-RMEIYZWT.js";c();y();c();c();c();y();c();var K={vessel:{name:"src__components__mdx__constituents__webgl__multiple-objects__threeObjects__index-pkOFRG-vessel",composes:[],isReferenced:!1},"gl-canvas":{name:"src__components__mdx__constituents__webgl__multiple-objects__threeObjects__index-pkOFRG-gl-canvas",composes:[],isReferenced:!1}},T=(s=>r=>{if(typeof r!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return s[r.replace(/[A-Z]/g,n=>"-"+n.toLowerCase())].name})(K);var E=h({name:"PointLightSpecular",components:{ElSlider:F},props:{color:{type:Array,default:[1,1,1]}},setup(s){let r=R(),n,D=`
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
    `,W=`
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
    `,U=()=>{let e=r.value.getContext("webgl");if(!e)return;P(e,1e3,500);let o=L(e,e.VERTEX_SHADER,D),m=L(e,e.FRAGMENT_SHADER,W);return M(e,o,m)},B=e=>{let o=r.value.getContext("webgl");if(!o)return;let m=o.getAttribLocation(n,"a_position"),u=o.getAttribLocation(n,"a_normal"),x=o.getUniformLocation(n,"u_matrix"),f=o.getUniformLocation(n,"u_color"),t=o.getUniformLocation(n,"u_lightWorldPosition"),p=o.getUniformLocation(n,"u_viewWorldPosition"),g=o.getUniformLocation(n,"u_world_matrix"),_=o.getUniformLocation(n,"u_world_inverse_transpose_matrix"),X=o.getUniformLocation(n,"u_shininess"),j=o.getUniformLocation(n,"u_lightColor");o.viewport(0,0,o.canvas.width,o.canvas.height),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),o.enable(o.CULL_FACE),o.enable(o.DEPTH_TEST),o.useProgram(n);let G=o.canvas.clientWidth/o.canvas.clientHeight,z=o.createBuffer(),H=o.createBuffer();for(let d=0;d<3;d++){let{inverseTransposeMatrix:Y,matrix:k,viewMatrix:N}=O(.5*(d-1),0,-1.75,.621,G,2*Math.PI*e/100+120*d);o.uniformMatrix4fv(_,!1,Y),o.uniformMatrix4fv(g,!1,k),o.uniformMatrix4fv(x,!1,N),o.uniform4fv(f,[.2,1,.2,1]),o.uniform3fv(t,[1,0,-1.5]),o.uniform3fv(p,[0,0,5]),o.uniform1f(X,150),o.uniform3fv(j,s.color),o.bindBuffer(o.ARRAY_BUFFER,z),V(o),o.enableVertexAttribArray(m),o.vertexAttribPointer(m,3,o.FLOAT,!1,0,0),o.bindBuffer(o.ARRAY_BUFFER,H),I(o),o.enableVertexAttribArray(u),o.vertexAttribPointer(u,3,o.FLOAT,!1,0,0);let q=o.TRIANGLES,J=0,Z=6*16;o.drawArrays(q,J,Z)}},O=(e,o,m,u,x,f)=>{let t=i.create(),p=i.create(),g=i.create(),_=i.create();return i.translate(t,t,[e,o,m]),i.scale(t,t,[.5,.5,.5]),i.rotateX(t,t,f),i.rotateY(t,t,f),i.rotateZ(t,t,f),i.invert(_,t),i.transpose(_,_),i.perspective(p,u,x,1,20),i.multiply(g,p,t),{inverseTransposeMatrix:_,matrix:t,viewMatrix:g}},V=e=>{e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,.05,0,-.6,.05,.1,-.6,.05,.1,-.6,.05,.1,0,.05,0,0,.05,.1,0,.05,.1,-.1,.05,.37,-.1,.05,.37,-.1,.05,.37,0,.05,.1,0,.05,.1,-.25,.05,.1,-.35,.05,.25,-.35,.05,.25,-.35,.05,.25,-.25,.05,.1,-.25,.05,0,0,-.05,.1,0,-.05,.1,-.6,-.05,.1,-.6,-.05,0,-.6,-.05,0,0,-.05,.1,0,-.05,.37,-.1,-.05,.1,-.1,-.05,.37,0,-.05,.37,-.1,-.05,.1,0,-.05,.1,-.25,-.05,.25,-.25,-.05,.25,-.35,-.05,.25,-.35,-.05,.1,-.35,-.05,.1,-.25,-.05,0,0,-.05,0,0,.05,.37,0,.05,.37,0,.05,.37,0,-.05,0,0,-.05,.1,-.25,-.05,.1,-.25,.05,.25,-.25,.05,.25,-.25,.05,.25,-.25,-.05,.1,-.25,-.05,.1,-.1,.05,.1,-.1,-.05,.37,-.1,-.05,.37,-.1,-.05,.37,-.1,.05,.1,-.1,.05,.1,-.35,.05,.1,-.35,-.05,.25,-.35,-.05,.25,-.35,-.05,.25,-.35,.05,.1,-.35,.05,0,-.6,.05,0,-.6,-.05,.1,-.6,-.05,.1,-.6,-.05,.1,-.6,.05,0,-.6,.05,0,0,-.05,0,-.6,-.05,0,-.6,.05,0,-.6,.05,0,0,.05,0,0,-.05,.37,0,.05,.37,-.1,.05,.37,-.1,-.05,.37,-.1,-.05,.37,0,-.05,.37,0,.05,.1,-.1,.05,.1,-.25,.05,.1,-.25,-.05,.1,-.25,-.05,.1,-.1,-.05,.1,-.1,.05,.1,-.35,.05,.1,-.6,.05,.1,-.6,-.05,.1,-.6,-.05,.1,-.35,-.05,.1,-.35,.05,.25,-.25,.05,.25,-.35,.05,.25,-.35,-.05,.25,-.35,-.05,.25,-.25,-.05,.25,-.25,.05]),e.STATIC_DRAW)},I=e=>{e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]),e.STATIC_DRAW)},b=e=>{B(e*.007),requestAnimationFrame(b)};return C(()=>{n=U(),requestAnimationFrame(b)}),()=>l(v,null,l("div",{class:T("vessel")},l("canvas",{class:T("gl-canvas"),ref:r})))}});function S(s){let r=Object.assign({h1:"h1",code:"code"},w(),s.components);return a.h(a.Fragment,null,a.h(r.h1,null,a.h(r.code,null,"WebGL"),"\u7ED8\u5236\u591A\u4E2A\u7269\u4F53"),`
`,a.h(E))}function Q(s={}){let{wrapper:r}=Object.assign({},w(),s.components);return r?a.h(r,s,a.h(S,s)):S(s)}var A=Q;var h0=h({name:"MDX_08-MULTIPLE-OBJECTS",components:{MDXComponentContext:A},setup(s,r){return()=>l("div",{class:"markdown-body",style:"padding: 15px;"},l(A,{...r?.attrs}))}});export{h0 as default};
