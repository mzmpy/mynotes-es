import{a as u,b as v,c as A}from"./chunk-632WEGPT.js";import{a as L}from"./chunk-BBWG7QO3.js";import{L as y,P as w,aa as N,d as a,e as t,pa as h,xa as R,y as b}from"./chunk-K6N7OS5T.js";t();R();t();t();t();R();t();var V={"gl-canvas":{name:"src__components__mdx__constituents__webgl__basic-concept__helloWorld__index-9iqEPq-gl-canvas",composes:[],isReferenced:!1}},T=(l=>s=>{if(typeof s!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return l[s.replace(/[A-Z]/g,n=>"-"+n.toLowerCase())].name})(V);var F=y({name:"WebGLHelloWorld",setup(){let l=b();return w(()=>{let n=l.value.getContext("webgl");if(!n)return;let e=`
			attribute vec4 a_position;

			void main() {
				gl_Position = a_position;
			}
			`,f=`
			precision mediump float;

			void main() {
				gl_FragColor = vec4(1, 0, 0.5, 1);
			}
			`;A(n,700,700);let m=u(n,n.VERTEX_SHADER,e),p=u(n,n.FRAGMENT_SHADER,f),o=v(n,m,p),r=n.createBuffer(),c=[-.5,-.35,.5,-.35,0,.35],i=n.getAttribLocation(o,"a_position");n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,new Float32Array(c),n.STATIC_DRAW),n.viewport(0,0,n.canvas.width,n.canvas.height),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(o);let g=2,j=n.FLOAT,_=!1,d=0,S=0;n.enableVertexAttribArray(i),n.vertexAttribPointer(i,g,j,_,d,S);let k=n.TRIANGLES,x=0,C=3;n.drawArrays(k,x,C)}),()=>h(N,null,h("canvas",{class:T("gl-canvas"),ref:l}))}});t();R();t();var O={"gl-canvas":{name:"src__components__mdx__constituents__webgl__basic-concept__rectangle__index-bYKMJG-gl-canvas",composes:[],isReferenced:!1}},P=(l=>s=>{if(typeof s!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return l[s.replace(/[A-Z]/g,n=>"-"+n.toLowerCase())].name})(O);var M=y({name:"WebGLRectangle",setup(){let l=b();return w(()=>{let n=l.value.getContext("webgl");if(!n)return;let e=`
			attribute vec4 a_position;

			void main() {
				gl_Position = a_position;
			}
			`,f=`
			precision mediump float;
			uniform vec4 u_color;

			void main() {
				gl_FragColor = u_color;
			}
			`;A(n,700,700);let m=u(n,n.VERTEX_SHADER,e),p=u(n,n.FRAGMENT_SHADER,f),o=v(n,m,p),r=n.createBuffer(),c=[-.5,-.35,.5,-.35,-.5,.35,.5,.35,-.5,.35,.5,-.35],i=n.getAttribLocation(o,"a_position"),g=n.getUniformLocation(o,"u_color");n.bindBuffer(n.ARRAY_BUFFER,r),n.bufferData(n.ARRAY_BUFFER,new Float32Array(c),n.STATIC_DRAW),n.viewport(0,0,n.canvas.width,n.canvas.height),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(o);let j=2,_=n.FLOAT,d=!1,S=0,k=0;n.enableVertexAttribArray(i),n.vertexAttribPointer(i,j,_,d,S,k),n.uniform4f(g,1,.5,.5,1);let x=n.TRIANGLES,C=0,W=6;n.drawArrays(x,C,W)}),()=>h(N,null,h("canvas",{class:P("gl-canvas"),ref:l}))}});t();R();t();var H={"gl-canvas":{name:"src__components__mdx__constituents__webgl__basic-concept__circle__index-G75yJq-gl-canvas",composes:[],isReferenced:!1}},B=(l=>s=>{if(typeof s!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return l[s.replace(/[A-Z]/g,n=>"-"+n.toLowerCase())].name})(H);var G=y({name:"WebGLCircle",setup(){let l=b(),s=()=>{let e=l.value.getContext("webgl");if(!e)return;let f=`
			attribute vec4 a_position;

			void main() {
				gl_Position = a_position;
			}
			`,m=`
			precision mediump float;
			uniform vec4 u_color;

			void main() {
				gl_FragColor = u_color;
			}
			`;A(e,700,700);let p=u(e,e.VERTEX_SHADER,f),o=u(e,e.FRAGMENT_SHADER,m),r=v(e,p,o),c=e.getAttribLocation(r,"a_position"),i=e.getUniformLocation(r,"u_color"),g=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,g),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(r),e.enableVertexAttribArray(c),e.vertexAttribPointer(c,2,e.FLOAT,!1,0,0);let j=81;for(let _=0;_<j;_++)e.uniform4f(i,.43,.43,.25,1),n(e,j,_,-.4,-.3,.45)},n=(e,f,m,p,o,r)=>{let c=2*Math.PI/f,i=[p,o,p+r*Math.cos(m*c),o+r*Math.sin(m*c),p+r*Math.cos((m+1)*c),o+r*Math.sin((m+1)*c)];e.bufferData(e.ARRAY_BUFFER,new Float32Array(i),e.STATIC_DRAW),e.drawArrays(e.TRIANGLES,0,3)};return w(s),()=>h(N,null,h("canvas",{class:B("gl-canvas"),ref:l}))}});t();R();t();var Y={"gl-canvas":{name:"src__components__mdx__constituents__webgl__basic-concept__heartShaped__index-VdJGkG-gl-canvas",composes:[],isReferenced:!1}},U=(l=>s=>{if(typeof s!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return l[s.replace(/[A-Z]/g,n=>"-"+n.toLowerCase())].name})(Y);var D=y({name:"WebGLHeartShaped",setup(){let l=b(),s=()=>{let e=l.value.getContext("webgl");if(!e)return;let f=`
			attribute vec4 a_position;

			void main() {
				gl_Position = a_position;
			}
			`,m=`
			precision mediump float;
			uniform vec4 u_color;

			void main() {
				gl_FragColor = u_color;
			}
			`;A(e,700,700);let p=u(e,e.VERTEX_SHADER,f),o=u(e,e.FRAGMENT_SHADER,m),r=v(e,p,o),c=e.getAttribLocation(r,"a_position"),i=e.getUniformLocation(r,"u_color"),g=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,g),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(r),e.enableVertexAttribArray(c),e.vertexAttribPointer(c,2,e.FLOAT,!1,0,0);for(let j=0;j<25;j++){let d=2*Math.random()-1,S=2*Math.random()-1;for(let k=0;k<=81;k++)e.uniform4f(i,1,.5,.5,1),n(e,81,k,d,S)}},n=(e,f,m,p,o)=>{let r=2*Math.PI/f,c=2*m*r,i=2*(m+1)*r,g=d=>.1*(0-Math.sqrt(2)*Math.sin(d)**3),j=d=>.1*(0-Math.cos(d)**3-Math.cos(d)**2+2*Math.cos(d)),_=[p,o,p+g(c),o+j(c),p+g(i),o+j(i)];e.bufferData(e.ARRAY_BUFFER,new Float32Array(_),e.STATIC_DRAW),e.drawArrays(e.TRIANGLES,0,3)};return w(s),()=>h(N,null,h("canvas",{class:U("gl-canvas"),ref:l}))}});function I(l){let s=Object.assign({h1:"h1",code:"code",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre",span:"span",h3:"h3",p:"p"},L(),l.components);return a.h(a.Fragment,null,a.h(s.h1,null,a.h(s.code,null,"WebGL"),"\u2618\uFE0F\u57FA\u672C\u6982\u5FF5"),`
`,a.h(s.ul,null,`
`,a.h(s.li,null,a.h(s.code,null,"WebGL"),"\u662F\u4E00\u4E2A\u5149\u6805\u5316\u5F15\u64CE\uFF0C\u53EF\u4EE5\u6839\u636E\u6240\u63D0\u4F9B\u7684\u4EE3\u7801\u7ED8\u5236\u51FA\u70B9\u3001\u7EBF\u548C\u4E09\u89D2\u5F62\u3002"),`
`,a.h(s.li,null,a.h(s.code,null,"WebGL"),"\u7F16\u5199\u7684\u4EE3\u7801\u80FD\u591F\u5728",a.h(s.code,null,"GPU"),"\u4E0A\u8FD0\u884C\uFF1B",a.h(s.code,null,"WebGL"),`\u7684\u4EE3\u7801\u9700\u8981\u63D0\u4F9B\u6210\u5BF9\u7684\u65B9\u6CD5\uFF0C\u5B83\u4EEC\u5206\u522B\u4F5C\u4E3A\u9876\u70B9\u7740\u8272\u5668\u548C\u7247\u6BB5\u7740\u8272\u5668
\u5E76\u4E14\u4F7F\u7528\u4E00\u79CD\u548C`,a.h(s.code,null,"C"),"\u6216\u8005",a.h(s.code,null,"C++"),"\u7C7B\u4F3C\u7684\u5F3A\u7C7B\u578B\u8BED\u8A00",a.h(s.code,null,"GLSL"),"\uFF1B\u6BCF\u5BF9\u7740\u8272\u5668\u7EC4\u5408\u8D77\u6765\u79F0\u4F5C\u4E00\u4E2A\u7740\u8272\u7A0B\u5E8F\u3002"),`
`,a.h(s.li,null,a.h(s.strong,null,"\u9876\u70B9\u7740\u8272\u5668"),"\u7684\u4F5C\u7528\u662F\u8BA1\u7B97\u9876\u70B9\u7684\u4F4D\u7F6E\u3002"),`
`,a.h(s.li,null,a.h(s.strong,null,"\u5149\u6805\u5316"),"\uFF1A\u6839\u636E\u8BA1\u7B97\u51FA\u7684\u4E00\u7CFB\u5217\u9876\u70B9\u4F4D\u7F6E\uFF0CWebGL\u53EF\u4EE5\u5BF9\u70B9\uFF0C \u7EBF\u548C\u4E09\u89D2\u5F62\u5728\u5185\u7684\u4E00\u4E9B\u56FE\u5143\u8FDB\u884C\u5149\u6805\u5316\u5904\u7406\uFF1B\u5F53\u5BF9\u8FD9\u4E9B\u56FE\u5143\u8FDB\u884C\u5149\u6805\u5316\u5904\u7406\u65F6\u9700\u8981\u4F7F\u7528\u7247\u6BB5\u7740\u8272\u5668\u65B9\u6CD5\u3002"),`
`,a.h(s.li,null,a.h(s.strong,null,"\u7247\u6BB5\u7740\u8272\u5668"),"\u7684\u4F5C\u7528\u662F\u8BA1\u7B97\u51FA\u5F53\u524D\u7ED8\u5236\u56FE\u5143\u4E2D\u6BCF\u4E2A\u50CF\u7D20\u7684\u989C\u8272\u503C\u3002"),`
`),`
`,a.h(s.h2,null,"WebGL Hello World"),`
`,a.h(s.ul,null,`
`,a.h(s.li,null,"\u7F16\u5199\u7740\u8272\u5668\u51FD\u6570",`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-javascript"},a.h(s.span,{className:"hljs-keyword"},"function")," ",a.h(s.span,{className:"hljs-title function_"},"createShader"),"(",a.h(s.span,{className:"hljs-params"},"gl, type, glslSource"),`) {
  `,a.h(s.span,{className:"hljs-keyword"},"const")," shader = gl.",a.h(s.span,{className:"hljs-title function_"},"createShader"),`(type)

  gl.`,a.h(s.span,{className:"hljs-title function_"},"shaderSource"),`(shader, glslSource)
  gl.`,a.h(s.span,{className:"hljs-title function_"},"compileShader"),`(shader)
  `,a.h(s.span,{className:"hljs-keyword"},"const")," success = gl.",a.h(s.span,{className:"hljs-title function_"},"getShaderParameter"),"(shader, gl.",a.h(s.span,{className:"hljs-property"},"COMPILE_STATUS"),`)

  `,a.h(s.span,{className:"hljs-keyword"},"if"),`(success) {
    `,a.h(s.span,{className:"hljs-keyword"},"return"),` shader
  }

  `,a.h(s.span,{className:"hljs-variable language_"},"console"),".",a.h(s.span,{className:"hljs-title function_"},"log"),"(",a.h(s.span,{className:"hljs-string"},"'fail to get shader: '"),", gl.",a.h(s.span,{className:"hljs-title function_"},"getShaderInfoLog"),`(shader))
  gl.`,a.h(s.span,{className:"hljs-title function_"},"deleteShader"),`(shader)
}
`)),`
`),`
`,a.h(s.li,null,"\u5C06\u9876\u70B9\u7740\u8272\u5668\u548C\u7247\u6BB5\u7740\u8272\u5668\u7EC4\u5408\u6210\u7740\u8272\u7A0B\u5E8F",`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-javascript"},a.h(s.span,{className:"hljs-keyword"},"function")," ",a.h(s.span,{className:"hljs-title function_"},"createProgram"),"(",a.h(s.span,{className:"hljs-params"},"gl, vertexShader, fragmentShader"),`) {
  `,a.h(s.span,{className:"hljs-keyword"},"const")," program = gl.",a.h(s.span,{className:"hljs-title function_"},"createProgram"),`()

  gl.`,a.h(s.span,{className:"hljs-title function_"},"attachShader"),`(program, vertexShader)
  gl.`,a.h(s.span,{className:"hljs-title function_"},"attachShader"),`(program, fragmentShader)
  gl.`,a.h(s.span,{className:"hljs-title function_"},"linkProgram"),`(program)

  `,a.h(s.span,{className:"hljs-keyword"},"const")," success = gl.",a.h(s.span,{className:"hljs-title function_"},"getProgramParameter"),"(program, gl.",a.h(s.span,{className:"hljs-property"},"LINK_STATUS"),`)

  `,a.h(s.span,{className:"hljs-keyword"},"if"),`(success) {
    `,a.h(s.span,{className:"hljs-keyword"},"return"),` program
  }

  `,a.h(s.span,{className:"hljs-variable language_"},"console"),".",a.h(s.span,{className:"hljs-title function_"},"log"),"(",a.h(s.span,{className:"hljs-string"},"'fail to get program: '"),", gl.",a.h(s.span,{className:"hljs-title function_"},"getProgramInfoLog"),`(program))
  gl.`,a.h(s.span,{className:"hljs-title function_"},"deleteProgram"),`(program)
}
`)),`
`),`
`,a.h(s.li,null,"\u4F7F\u7528",a.h(s.code,null,"WebGL"),"\u7ED8\u5236\u4E00\u4E2A\u4E09\u89D2\u5F62",`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-javascript"},a.h(s.span,{className:"hljs-keyword"},"import")," { defineComponent, ref, onMounted } ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'vue'"),`
`,a.h(s.span,{className:"hljs-keyword"},"import")," styles ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'./index.module.css'"),`
`,a.h(s.span,{className:"hljs-keyword"},"import")," { createShader, createProgram, setCanvasPixel } ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'../../common'"),`

`,a.h(s.span,{className:"hljs-keyword"},"export")," ",a.h(s.span,{className:"hljs-keyword"},"default")," ",a.h(s.span,{className:"hljs-title function_"},"defineComponent"),`({
  `,a.h(s.span,{className:"hljs-attr"},"name"),": ",a.h(s.span,{className:"hljs-string"},"'WebGLHelloWorld'"),`,
  `,a.h(s.span,{className:"hljs-title function_"},"setup"),"(",a.h(s.span,{className:"hljs-params"}),`) {
    `,a.h(s.span,{className:"hljs-keyword"},"const")," glVessel = ",a.h(s.span,{className:"hljs-title function_"},"ref"),`()
    `,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"main")," = (",a.h(s.span,{className:"hljs-params"}),`) => {
      `,a.h(s.span,{className:"hljs-keyword"},"const")," gl = glVessel.",a.h(s.span,{className:"hljs-property"},"value"),".",a.h(s.span,{className:"hljs-title function_"},"getContext"),"(",a.h(s.span,{className:"hljs-string"},"'webgl'"),`)

      `,a.h(s.span,{className:"hljs-keyword"},"if"),`(!gl) {
        `,a.h(s.span,{className:"hljs-keyword"},"return"),`
      }

      `,a.h(s.span,{className:"hljs-keyword"},"const")," vertexShaderSource = ",a.h(s.span,{className:"hljs-comment"},"/*glsl*/"),a.h(s.span,{className:"hljs-string"},`\`
      attribute vec4 a_position;

      void main() {
        gl_Position = a_position;
      }
      \``),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," fragmentShaderSource = ",a.h(s.span,{className:"hljs-comment"},"/*glsl*/"),a.h(s.span,{className:"hljs-string"},`\`
      precision mediump float;

      void main() {
        gl_FragColor = vec4(1, 0, 0.5, 1);
      }
      \``),`

      `,a.h(s.span,{className:"hljs-title function_"},"setCanvasPixel"),"(gl, ",a.h(s.span,{className:"hljs-number"},"700"),", ",a.h(s.span,{className:"hljs-number"},"700"),`)

      `,a.h(s.span,{className:"hljs-keyword"},"const")," vertexShader = ",a.h(s.span,{className:"hljs-title function_"},"createShader"),"(gl, gl.",a.h(s.span,{className:"hljs-property"},"VERTEX_SHADER"),`, vertexShaderSource)
      `,a.h(s.span,{className:"hljs-keyword"},"const")," fragmentShader = ",a.h(s.span,{className:"hljs-title function_"},"createShader"),"(gl, gl.",a.h(s.span,{className:"hljs-property"},"FRAGMENT_SHADER"),`, fragmentShaderSource)
      `,a.h(s.span,{className:"hljs-keyword"},"const")," program = ",a.h(s.span,{className:"hljs-title function_"},"createProgram"),`(gl, vertexShader, fragmentShader)
      `,a.h(s.span,{className:"hljs-keyword"},"const")," positionBuffer = gl.",a.h(s.span,{className:"hljs-title function_"},"createBuffer"),`()
      `,a.h(s.span,{className:"hljs-keyword"},"const"),` positions = [
        -`,a.h(s.span,{className:"hljs-number"},"0.5"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),`,
        `,a.h(s.span,{className:"hljs-number"},"0.5"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),`,
        `,a.h(s.span,{className:"hljs-number"},"0.0"),", ",a.h(s.span,{className:"hljs-number"},"0.35"),`
      ]
      `,a.h(s.span,{className:"hljs-keyword"},"const")," positionAttributeLocation = gl.",a.h(s.span,{className:"hljs-title function_"},"getAttribLocation"),"(program, ",a.h(s.span,{className:"hljs-string"},"'a_position'"),`)

      gl.`,a.h(s.span,{className:"hljs-title function_"},"bindBuffer"),"(gl.",a.h(s.span,{className:"hljs-property"},"ARRAY_BUFFER"),`, positionBuffer)
      gl.`,a.h(s.span,{className:"hljs-title function_"},"bufferData"),"(gl.",a.h(s.span,{className:"hljs-property"},"ARRAY_BUFFER"),", ",a.h(s.span,{className:"hljs-keyword"},"new")," ",a.h(s.span,{className:"hljs-title class_"},"Float32Array"),"(positions), gl.",a.h(s.span,{className:"hljs-property"},"STATIC_DRAW"),`)

      gl.`,a.h(s.span,{className:"hljs-title function_"},"viewport"),"(",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", gl.",a.h(s.span,{className:"hljs-property"},"canvas"),".",a.h(s.span,{className:"hljs-property"},"width"),", gl.",a.h(s.span,{className:"hljs-property"},"canvas"),".",a.h(s.span,{className:"hljs-property"},"height"),`)
      gl.`,a.h(s.span,{className:"hljs-title function_"},"clearColor"),"(",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`)
      gl.`,a.h(s.span,{className:"hljs-title function_"},"clear"),"(gl.",a.h(s.span,{className:"hljs-property"},"COLOR_BUFFER_BIT"),`)
      gl.`,a.h(s.span,{className:"hljs-title function_"},"useProgram"),`(program)

      `,a.h(s.span,{className:"hljs-keyword"},"const")," size = ",a.h(s.span,{className:"hljs-number"},"2"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," type = gl.",a.h(s.span,{className:"hljs-property"},"FLOAT"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," normalized = ",a.h(s.span,{className:"hljs-literal"},"false"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," stride = ",a.h(s.span,{className:"hljs-number"},"0"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," offset = ",a.h(s.span,{className:"hljs-number"},"0"),`
      `,a.h(s.span,{className:"hljs-comment"},"// \u5C5E\u6027a_position\u53EF\u4EE5\u4ECE\u7F13\u51B2\u533A\u8BFB\u53D6\u76F8\u5E94\u7684\u9876\u70B9\u5750\u6807\u6570\u636E"),`
      gl.`,a.h(s.span,{className:"hljs-title function_"},"enableVertexAttribArray"),`(positionAttributeLocation)
      gl.`,a.h(s.span,{className:"hljs-title function_"},"vertexAttribPointer"),`(positionAttributeLocation, size, type, normalized, stride, offset)

      `,a.h(s.span,{className:"hljs-keyword"},"const")," primitiveType = gl.",a.h(s.span,{className:"hljs-property"},"TRIANGLES"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," first = ",a.h(s.span,{className:"hljs-number"},"0"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," count = ",a.h(s.span,{className:"hljs-number"},"3"),`
      gl.`,a.h(s.span,{className:"hljs-title function_"},"drawArrays"),`(primitiveType, first, count)
    }

    `,a.h(s.span,{className:"hljs-title function_"},"onMounted"),`(main)

    `,a.h(s.span,{className:"hljs-keyword"},"return")," ",a.h(s.span,{className:"hljs-function"},"() =>"),` {
      `,a.h(s.span,{className:"hljs-keyword"},"return")," ",a.h(s.span,{className:"xml"},a.h(s.span,{className:"hljs-tag"},"<>"),`
        `,a.h(s.span,{className:"hljs-tag"},"<",a.h(s.span,{className:"hljs-name"},"canvas")," ",a.h(s.span,{className:"hljs-attr"},"class"),"=",a.h(s.span,{className:"hljs-string"},"{")," ",a.h(s.span,{className:"hljs-attr"},"styles"),"('",a.h(s.span,{className:"hljs-attr"},"gl-canvas"),"') } ",a.h(s.span,{className:"hljs-attr"},"ref"),"=",a.h(s.span,{className:"hljs-string"},"{")," ",a.h(s.span,{className:"hljs-attr"},"glVessel")," }>"),a.h(s.span,{className:"hljs-tag"},"</",a.h(s.span,{className:"hljs-name"},"canvas"),">"),`
      `,a.h(s.span,{className:"hljs-tag"},"</>")),`
    }
  }
})
`)),`
`),`
`),`
`,a.h(F),`
`,a.h(s.h3,null,"\u4E00\u4E9B\u62D3\u5C55"),`
`,a.h(s.ul,null,`
`,a.h(s.li,null,`
`,a.h(s.p,null,"\u4F7F\u7528\u5168\u5C40\u53D8\u91CF\u4F20\u9012\u989C\u8272\u6570\u636E\u5E76\u7ED8\u5236\u77E9\u5F62"),`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-javascript"},a.h(s.span,{className:"hljs-keyword"},"import")," { defineComponent, ref, onMounted } ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'vue'"),`
`,a.h(s.span,{className:"hljs-keyword"},"import")," styles ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'./index.module.css'"),`
`,a.h(s.span,{className:"hljs-keyword"},"import")," { createShader, createProgram, setCanvasPixel } ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'../../common'"),`

`,a.h(s.span,{className:"hljs-keyword"},"export")," ",a.h(s.span,{className:"hljs-keyword"},"default")," ",a.h(s.span,{className:"hljs-title function_"},"defineComponent"),`({
  `,a.h(s.span,{className:"hljs-attr"},"name"),": ",a.h(s.span,{className:"hljs-string"},"'WebGLRectangle'"),`,
  `,a.h(s.span,{className:"hljs-title function_"},"setup"),"(",a.h(s.span,{className:"hljs-params"}),`) {
    `,a.h(s.span,{className:"hljs-keyword"},"const")," glVessel = ",a.h(s.span,{className:"hljs-title function_"},"ref"),`()
    `,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"main")," = (",a.h(s.span,{className:"hljs-params"}),`) => {
      `,a.h(s.span,{className:"hljs-keyword"},"const")," gl = glVessel.",a.h(s.span,{className:"hljs-property"},"value"),".",a.h(s.span,{className:"hljs-title function_"},"getContext"),"(",a.h(s.span,{className:"hljs-string"},"'webgl'"),`)

      `,a.h(s.span,{className:"hljs-keyword"},"if"),`(!gl) {
        `,a.h(s.span,{className:"hljs-keyword"},"return"),`
      }

      `,a.h(s.span,{className:"hljs-keyword"},"const")," vertexShaderSource = ",a.h(s.span,{className:"hljs-comment"},"/*glsl*/"),a.h(s.span,{className:"hljs-string"},`\`
      attribute vec4 a_position;

      void main() {
        gl_Position = a_position;
      }
      \``),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," fragmentShaderSource = ",a.h(s.span,{className:"hljs-comment"},"/*glsl*/"),a.h(s.span,{className:"hljs-string"},`\`
      precision mediump float;
      uniform vec4 u_color;

      void main() {
        gl_FragColor = u_color;
      }
      \``),`

      `,a.h(s.span,{className:"hljs-title function_"},"setCanvasPixel"),"(gl, ",a.h(s.span,{className:"hljs-number"},"700"),", ",a.h(s.span,{className:"hljs-number"},"700"),`)

      `,a.h(s.span,{className:"hljs-keyword"},"const")," vertexShader = ",a.h(s.span,{className:"hljs-title function_"},"createShader"),"(gl, gl.",a.h(s.span,{className:"hljs-property"},"VERTEX_SHADER"),`, vertexShaderSource)
      `,a.h(s.span,{className:"hljs-keyword"},"const")," fragmentShader = ",a.h(s.span,{className:"hljs-title function_"},"createShader"),"(gl, gl.",a.h(s.span,{className:"hljs-property"},"FRAGMENT_SHADER"),`, fragmentShaderSource)
      `,a.h(s.span,{className:"hljs-keyword"},"const")," program = ",a.h(s.span,{className:"hljs-title function_"},"createProgram"),`(gl, vertexShader, fragmentShader)
      `,a.h(s.span,{className:"hljs-keyword"},"const")," positionBuffer = gl.",a.h(s.span,{className:"hljs-title function_"},"createBuffer"),`()
      `,a.h(s.span,{className:"hljs-keyword"},"const"),` positions = [
        -`,a.h(s.span,{className:"hljs-number"},"0.5"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),`,
        `,a.h(s.span,{className:"hljs-number"},"0.5"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),`,
        -`,a.h(s.span,{className:"hljs-number"},"0.5"),", ",a.h(s.span,{className:"hljs-number"},"0.35"),`,
        `,a.h(s.span,{className:"hljs-number"},"0.5"),", ",a.h(s.span,{className:"hljs-number"},"0.35"),`,
        -`,a.h(s.span,{className:"hljs-number"},"0.5"),", ",a.h(s.span,{className:"hljs-number"},"0.35"),`,
        `,a.h(s.span,{className:"hljs-number"},"0.5"),", -",a.h(s.span,{className:"hljs-number"},"0.35"),`
      ]
      `,a.h(s.span,{className:"hljs-keyword"},"const")," positionAttributeLocation = gl.",a.h(s.span,{className:"hljs-title function_"},"getAttribLocation"),"(program, ",a.h(s.span,{className:"hljs-string"},"'a_position'"),`)
      `,a.h(s.span,{className:"hljs-keyword"},"const")," colorUniformLocation = gl.",a.h(s.span,{className:"hljs-title function_"},"getUniformLocation"),"(program, ",a.h(s.span,{className:"hljs-string"},"'u_color'"),`)

      gl.`,a.h(s.span,{className:"hljs-title function_"},"bindBuffer"),"(gl.",a.h(s.span,{className:"hljs-property"},"ARRAY_BUFFER"),`, positionBuffer)
      gl.`,a.h(s.span,{className:"hljs-title function_"},"bufferData"),"(gl.",a.h(s.span,{className:"hljs-property"},"ARRAY_BUFFER"),", ",a.h(s.span,{className:"hljs-keyword"},"new")," ",a.h(s.span,{className:"hljs-title class_"},"Float32Array"),"(positions), gl.",a.h(s.span,{className:"hljs-property"},"STATIC_DRAW"),`)

      gl.`,a.h(s.span,{className:"hljs-title function_"},"viewport"),"(",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", gl.",a.h(s.span,{className:"hljs-property"},"canvas"),".",a.h(s.span,{className:"hljs-property"},"width"),", gl.",a.h(s.span,{className:"hljs-property"},"canvas"),".",a.h(s.span,{className:"hljs-property"},"height"),`)
      gl.`,a.h(s.span,{className:"hljs-title function_"},"clearColor"),"(",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"0"),`)
      gl.`,a.h(s.span,{className:"hljs-title function_"},"clear"),"(gl.",a.h(s.span,{className:"hljs-property"},"COLOR_BUFFER_BIT"),`)
      gl.`,a.h(s.span,{className:"hljs-title function_"},"useProgram"),`(program)

      `,a.h(s.span,{className:"hljs-comment"},"// \u5B9A\u4E49\u7740\u8272\u5668\u7A0B\u5E8F\u5982\u4F55\u8BFB\u53D6\u7F13\u5B58\u533A\u7684\u6570\u636E"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," size = ",a.h(s.span,{className:"hljs-number"},"2"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," type = gl.",a.h(s.span,{className:"hljs-property"},"FLOAT"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," normalized = ",a.h(s.span,{className:"hljs-literal"},"false"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," stride = ",a.h(s.span,{className:"hljs-number"},"0"),"   ",a.h(s.span,{className:"hljs-comment"},"// 0 = move forward size * sizeof(type) each iteration to get the next position"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," offset = ",a.h(s.span,{className:"hljs-number"},"0"),`
      gl.`,a.h(s.span,{className:"hljs-title function_"},"enableVertexAttribArray"),`(positionAttributeLocation)
      gl.`,a.h(s.span,{className:"hljs-title function_"},"vertexAttribPointer"),`(positionAttributeLocation, size, type, normalized, stride, offset)
      gl.`,a.h(s.span,{className:"hljs-title function_"},"uniform4f"),"(colorUniformLocation, ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0.5"),", ",a.h(s.span,{className:"hljs-number"},"0.5"),", ",a.h(s.span,{className:"hljs-number"},"1"),")   ",a.h(s.span,{className:"hljs-comment"},"// \u8BFB\u53D6\u5168\u5C40\u6570\u636E\u8BBE\u7F6E\u989C\u8272"),`

      `,a.h(s.span,{className:"hljs-keyword"},"const")," primitiveType = gl.",a.h(s.span,{className:"hljs-property"},"TRIANGLES"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," first = ",a.h(s.span,{className:"hljs-number"},"0"),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," count = ",a.h(s.span,{className:"hljs-number"},"6"),`
      gl.`,a.h(s.span,{className:"hljs-title function_"},"drawArrays"),`(primitiveType, first, count)
    }

    `,a.h(s.span,{className:"hljs-title function_"},"onMounted"),`(main)

    `,a.h(s.span,{className:"hljs-keyword"},"return")," ",a.h(s.span,{className:"hljs-function"},"() =>"),` {
      `,a.h(s.span,{className:"hljs-keyword"},"return")," ",a.h(s.span,{className:"xml"},a.h(s.span,{className:"hljs-tag"},"<>"),`
        `,a.h(s.span,{className:"hljs-tag"},"<",a.h(s.span,{className:"hljs-name"},"canvas")," ",a.h(s.span,{className:"hljs-attr"},"class"),"=",a.h(s.span,{className:"hljs-string"},"{")," ",a.h(s.span,{className:"hljs-attr"},"styles"),"('",a.h(s.span,{className:"hljs-attr"},"gl-canvas"),"') } ",a.h(s.span,{className:"hljs-attr"},"ref"),"=",a.h(s.span,{className:"hljs-string"},"{")," ",a.h(s.span,{className:"hljs-attr"},"glVessel")," }>"),a.h(s.span,{className:"hljs-tag"},"</",a.h(s.span,{className:"hljs-name"},"canvas"),">"),`
      `,a.h(s.span,{className:"hljs-tag"},"</>")),`
    }
  }
})
`)),`
`),`
`),`
`,a.h(M),`
`,a.h(s.ul,null,`
`,a.h(s.li,null,`
`,a.h(s.p,null,"\u4F7F\u7528\u4E09\u89D2\u5F62\u7ED8\u5236\u5706\uFF08\u8FD1\u4F3C\uFF09\u2745"),`
`,a.h(s.ul,null,`
`,a.h(s.li,null,"\u5C06\u7ED8\u5236\u4E09\u89D2\u5F62\u7684\u903B\u8F91\u63D0\u53D6\u51FA\u6765\u5199\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u51FD\u6570\uFF0C\u4EE5\u4FBF\u91CD\u590D\u7ED8\u5236"),`
`),`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-javascript"},a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"setCircleTrajectory")," = (",a.h(s.span,{className:"hljs-params"},"gl, iter, i, x0, y0, r"),`) => {
  `,a.h(s.span,{className:"hljs-comment"},"// ua -> unit angle"),`
  `,a.h(s.span,{className:"hljs-keyword"},"const")," ua = ",a.h(s.span,{className:"hljs-number"},"2")," * ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-property"},"PI"),` / iter
  `,a.h(s.span,{className:"hljs-keyword"},"const"),` positions = [
    x0, y0,
    x0 + r * `,a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"cos"),"(i * ua), y0 + r * ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"sin"),`(i * ua),
    x0 + r * `,a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"cos"),"((i + ",a.h(s.span,{className:"hljs-number"},"1"),") * ua), y0 + r * ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"sin"),"((i + ",a.h(s.span,{className:"hljs-number"},"1"),`) * ua)
  ]

  gl.`,a.h(s.span,{className:"hljs-title function_"},"bufferData"),"(gl.",a.h(s.span,{className:"hljs-property"},"ARRAY_BUFFER"),", ",a.h(s.span,{className:"hljs-keyword"},"new")," ",a.h(s.span,{className:"hljs-title class_"},"Float32Array"),"(positions), gl.",a.h(s.span,{className:"hljs-property"},"STATIC_DRAW"),`)
  gl.`,a.h(s.span,{className:"hljs-title function_"},"drawArrays"),"(gl.",a.h(s.span,{className:"hljs-property"},"TRIANGLES"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"3"),`)
}
`)),`
`,a.h(s.ul,null,`
`,a.h(s.li,null,"\u524D\u7AEF",a.h(s.code,null,"UI"),"\u7EC4\u4EF6\u6E32\u67D3"),`
`),`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-javascript"},a.h(s.span,{className:"hljs-keyword"},"import")," { defineComponent, ref, onMounted } ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'vue'"),`
`,a.h(s.span,{className:"hljs-keyword"},"import")," styles ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'./index.module.css'"),`
`,a.h(s.span,{className:"hljs-keyword"},"import")," { createShader, createProgram, setCanvasPixel } ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'../../common'"),`

`,a.h(s.span,{className:"hljs-keyword"},"export")," ",a.h(s.span,{className:"hljs-keyword"},"default")," ",a.h(s.span,{className:"hljs-title function_"},"defineComponent"),`({
  `,a.h(s.span,{className:"hljs-attr"},"name"),": ",a.h(s.span,{className:"hljs-string"},"'WebGLCircle'"),`,
  `,a.h(s.span,{className:"hljs-title function_"},"setup"),"(",a.h(s.span,{className:"hljs-params"}),`) {
    `,a.h(s.span,{className:"hljs-keyword"},"const")," glVessel = ",a.h(s.span,{className:"hljs-title function_"},"ref"),`()
    `,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"main")," = (",a.h(s.span,{className:"hljs-params"}),`) => {
      `,a.h(s.span,{className:"hljs-keyword"},"const")," gl = glVessel.",a.h(s.span,{className:"hljs-property"},"value"),".",a.h(s.span,{className:"hljs-title function_"},"getContext"),"(",a.h(s.span,{className:"hljs-string"},"'webgl'"),`)

      `,a.h(s.span,{className:"hljs-keyword"},"if"),`(!gl) {
        `,a.h(s.span,{className:"hljs-keyword"},"return"),`
      }

      ...   `,a.h(s.span,{className:"hljs-comment"},"// \u7701\u7565\u76F8\u5173\u4EE3\u7801"),`

      `,a.h(s.span,{className:"hljs-keyword"},"const")," iter = ",a.h(s.span,{className:"hljs-number"},"81"),`
      `,a.h(s.span,{className:"hljs-keyword"},"for"),"(",a.h(s.span,{className:"hljs-keyword"},"let")," i = ",a.h(s.span,{className:"hljs-number"},"0"),`; i < iter; i++) {
        `,a.h(s.span,{className:"hljs-title function_"},"setCircleTrajectory"),"(gl, iter, i, -",a.h(s.span,{className:"hljs-number"},"0.4"),", -",a.h(s.span,{className:"hljs-number"},"0.3"),", ",a.h(s.span,{className:"hljs-number"},"0.45"),`)
      }
    }

    `,a.h(s.span,{className:"hljs-title function_"},"onMounted"),`(main)

    ...   `,a.h(s.span,{className:"hljs-comment"},"// \u7701\u7565\u76F8\u5173\u4EE3\u7801"),`

    `,a.h(s.span,{className:"hljs-keyword"},"return")," ",a.h(s.span,{className:"hljs-function"},"() =>"),` {
      `,a.h(s.span,{className:"hljs-keyword"},"return")," ",a.h(s.span,{className:"xml"},a.h(s.span,{className:"hljs-tag"},"<>"),`
        `,a.h(s.span,{className:"hljs-tag"},"<",a.h(s.span,{className:"hljs-name"},"canvas")," ",a.h(s.span,{className:"hljs-attr"},"class"),"=",a.h(s.span,{className:"hljs-string"},"{")," ",a.h(s.span,{className:"hljs-attr"},"styles"),"('",a.h(s.span,{className:"hljs-attr"},"gl-canvas"),"') } ",a.h(s.span,{className:"hljs-attr"},"ref"),"=",a.h(s.span,{className:"hljs-string"},"{")," ",a.h(s.span,{className:"hljs-attr"},"glVessel")," }>"),a.h(s.span,{className:"hljs-tag"},"</",a.h(s.span,{className:"hljs-name"},"canvas"),">"),`
      `,a.h(s.span,{className:"hljs-tag"},"</>")),`
    }
  }
})
`)),`
`),`
`),`
`,a.h(G),`
`,a.h(s.ul,null,`
`,a.h(s.li,null,"\u7ED8\u5236\u5FC3\u5F62\u56FE\uFF0C\u5176\u4E2D\u4E09\u89D2\u5F62\u7ED8\u5236\u51FD\u6570\u5982\u4E0B\uFF1A",`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-javascript"},a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"setTrajectory")," = (",a.h(s.span,{className:"hljs-params"},"gl, iter, i, x0, y0"),`) => {
  `,a.h(s.span,{className:"hljs-keyword"},"const")," ua = ",a.h(s.span,{className:"hljs-number"},"2")," * ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-property"},"PI"),` / iter
  `,a.h(s.span,{className:"hljs-keyword"},"const")," t0 = ",a.h(s.span,{className:"hljs-number"},"2"),` * i * ua
  `,a.h(s.span,{className:"hljs-keyword"},"const")," t1 = ",a.h(s.span,{className:"hljs-number"},"2")," * (i + ",a.h(s.span,{className:"hljs-number"},"1"),`) * ua
  `,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"xExpr")," = (",a.h(s.span,{className:"hljs-params"},"t"),") => ",a.h(s.span,{className:"hljs-number"},"0.1")," * (",a.h(s.span,{className:"hljs-number"},"0")," - ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"sqrt"),"(",a.h(s.span,{className:"hljs-number"},"2"),") * ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"sin"),"(t) ** ",a.h(s.span,{className:"hljs-number"},"3"),`)
  `,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"yExpr")," = (",a.h(s.span,{className:"hljs-params"},"t"),") => ",a.h(s.span,{className:"hljs-number"},"0.1")," * (",a.h(s.span,{className:"hljs-number"},"0")," - ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"cos"),"(t) ** ",a.h(s.span,{className:"hljs-number"},"3")," - ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"cos"),"(t) ** ",a.h(s.span,{className:"hljs-number"},"2")," + ",a.h(s.span,{className:"hljs-number"},"2")," * ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"cos"),`(t))
  `,a.h(s.span,{className:"hljs-keyword"},"const"),` positions = [
    x0, y0,
    x0 + `,a.h(s.span,{className:"hljs-title function_"},"xExpr"),"(t0), y0 + ",a.h(s.span,{className:"hljs-title function_"},"yExpr"),`(t0),
    x0 + `,a.h(s.span,{className:"hljs-title function_"},"xExpr"),"(t1), y0 + ",a.h(s.span,{className:"hljs-title function_"},"yExpr"),`(t1)
  ]

  gl.`,a.h(s.span,{className:"hljs-title function_"},"bufferData"),"(gl.",a.h(s.span,{className:"hljs-property"},"ARRAY_BUFFER"),", ",a.h(s.span,{className:"hljs-keyword"},"new")," ",a.h(s.span,{className:"hljs-title class_"},"Float32Array"),"(positions), gl.",a.h(s.span,{className:"hljs-property"},"STATIC_DRAW"),`)
  gl.`,a.h(s.span,{className:"hljs-title function_"},"drawArrays"),"(gl.",a.h(s.span,{className:"hljs-property"},"TRIANGLES"),", ",a.h(s.span,{className:"hljs-number"},"0"),", ",a.h(s.span,{className:"hljs-number"},"3"),`)
}
`)),`
`),`
`,a.h(s.li,null,`
`,a.h(s.pre,null,a.h(s.code,{className:"hljs language-javascript"},a.h(s.span,{className:"hljs-keyword"},"import")," { defineComponent, ref, onMounted } ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'vue'"),`
`,a.h(s.span,{className:"hljs-keyword"},"import")," styles ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'./index.module.css'"),`
`,a.h(s.span,{className:"hljs-keyword"},"import")," { createShader, createProgram, setCanvasPixel } ",a.h(s.span,{className:"hljs-keyword"},"from")," ",a.h(s.span,{className:"hljs-string"},"'../../common'"),`

`,a.h(s.span,{className:"hljs-keyword"},"export")," ",a.h(s.span,{className:"hljs-keyword"},"default")," ",a.h(s.span,{className:"hljs-title function_"},"defineComponent"),`({
  `,a.h(s.span,{className:"hljs-attr"},"name"),": ",a.h(s.span,{className:"hljs-string"},"'WebGLHeartShaped'"),`,
  `,a.h(s.span,{className:"hljs-title function_"},"setup"),"(",a.h(s.span,{className:"hljs-params"}),`) {
    `,a.h(s.span,{className:"hljs-keyword"},"const")," glVessel = ",a.h(s.span,{className:"hljs-title function_"},"ref"),`()
    `,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"main")," = (",a.h(s.span,{className:"hljs-params"}),`) => {
      `,a.h(s.span,{className:"hljs-keyword"},"const")," gl = glVessel.",a.h(s.span,{className:"hljs-property"},"value"),".",a.h(s.span,{className:"hljs-title function_"},"getContext"),"(",a.h(s.span,{className:"hljs-string"},"'webgl'"),`)

      `,a.h(s.span,{className:"hljs-keyword"},"if"),`(!gl) {
        `,a.h(s.span,{className:"hljs-keyword"},"return"),`
      }

      ...   `,a.h(s.span,{className:"hljs-comment"},"// \u7701\u7565\u76F8\u5173\u4EE3\u7801"),`

      `,a.h(s.span,{className:"hljs-keyword"},"for"),"(",a.h(s.span,{className:"hljs-keyword"},"let")," n = ",a.h(s.span,{className:"hljs-number"},"0"),"; n < ",a.h(s.span,{className:"hljs-number"},"25"),`; n++) {
        `,a.h(s.span,{className:"hljs-keyword"},"const")," iter = ",a.h(s.span,{className:"hljs-number"},"81"),`
        `,a.h(s.span,{className:"hljs-keyword"},"const")," x0 = ",a.h(s.span,{className:"hljs-number"},"2")," * ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"random"),"() - ",a.h(s.span,{className:"hljs-number"},"1"),`
        `,a.h(s.span,{className:"hljs-keyword"},"const")," y0 = ",a.h(s.span,{className:"hljs-number"},"2")," * ",a.h(s.span,{className:"hljs-title class_"},"Math"),".",a.h(s.span,{className:"hljs-title function_"},"random"),"() - ",a.h(s.span,{className:"hljs-number"},"1"),`
        `,a.h(s.span,{className:"hljs-keyword"},"for"),"(",a.h(s.span,{className:"hljs-keyword"},"let")," i = ",a.h(s.span,{className:"hljs-number"},"0"),`; i <= iter; i++) {
          gl.`,a.h(s.span,{className:"hljs-title function_"},"uniform4f"),"(colorUniformLocation, ",a.h(s.span,{className:"hljs-number"},"1"),", ",a.h(s.span,{className:"hljs-number"},"0.5"),", ",a.h(s.span,{className:"hljs-number"},"0.5"),", ",a.h(s.span,{className:"hljs-number"},"1"),`)
          `,a.h(s.span,{className:"hljs-title function_"},"setTrajectory"),`(gl, iter, i, x0, y0)
        }
      }
    }

    ...   `,a.h(s.span,{className:"hljs-comment"},"// \u7701\u7565\u76F8\u5173\u4EE3\u7801"),`

    `,a.h(s.span,{className:"hljs-title function_"},"onMounted"),`(main)

    `,a.h(s.span,{className:"hljs-keyword"},"return")," ",a.h(s.span,{className:"hljs-function"},"() =>"),` {
      `,a.h(s.span,{className:"hljs-keyword"},"return")," ",a.h(s.span,{className:"xml"},a.h(s.span,{className:"hljs-tag"},"<>"),`
        `,a.h(s.span,{className:"hljs-tag"},"<",a.h(s.span,{className:"hljs-name"},"canvas")," ",a.h(s.span,{className:"hljs-attr"},"class"),"=",a.h(s.span,{className:"hljs-string"},"{")," ",a.h(s.span,{className:"hljs-attr"},"styles"),"('",a.h(s.span,{className:"hljs-attr"},"gl-canvas"),"') } ",a.h(s.span,{className:"hljs-attr"},"ref"),"=",a.h(s.span,{className:"hljs-string"},"{")," ",a.h(s.span,{className:"hljs-attr"},"glVessel")," }>"),a.h(s.span,{className:"hljs-tag"},"</",a.h(s.span,{className:"hljs-name"},"canvas"),">"),`
      `,a.h(s.span,{className:"hljs-tag"},"</>")),`
    }
  }
})
`)),`
`),`
`),`
`,a.h(D))}function z(l={}){let{wrapper:s}=Object.assign({},L(),l.components);return s?a.h(s,l,a.h(I,l)):I(l)}var E=z;var Os=y({name:"MDX_01-BASIC-CONCEPT",components:{MDXComponentContext:E},setup(l,s){return()=>h("div",{class:"markdown-body",style:"padding: 15px;"},h(E,{...s?.attrs}))}});export{Os as default};
