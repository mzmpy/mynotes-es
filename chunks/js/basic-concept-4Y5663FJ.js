import{a as m}from"./chunk-5NNLKCHH.js";import{K as o,O as g,_ as h,d as a,e as t,na as r,va as j,y as N}from"./chunk-YB6PSBT5.js";t();j();t();t();t();j();t();var E={"gl-canvas":{name:"src__components__mdx__constituents__webgl__basic-concept__helloWorld__index-9iqEPq-gl-canvas",composes:[],isReferenced:!1}},d=(n=>s=>{if(typeof s!="string")throw new TypeError("resolveStyles: parameter 'className' must be a string.");return n[s.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())].name})(E);var _=o({name:"WebGLHelloWorld",setup(){let n=N();return g(()=>{let e=n.value.getContext("webgl");if(!e)return;let l=`
			attribute vec4 a_position;

			void main() {
				gl_Position = a_position;
			}
			`,c=`
			precision mediump float;

			void main() {
				gl_FragColor = vec4(1, 0, 0.5, 1);
			}
			`,S=f(e,e.VERTEX_SHADER,l),w=f(e,e.FRAGMENT_SHADER,c),i=F(e,S,w),b=e.createBuffer(),v=[-.5,-.35,.5,-.35,0,.35],u=e.getAttribLocation(i,"a_position");e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,new Float32Array(v),e.STATIC_DRAW),e.viewport(0,0,e.canvas.width,e.canvas.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(i);let A=2,k=e.FLOAT,L=!1,R=0,C=0;e.enableVertexAttribArray(u),e.vertexAttribPointer(u,A,k,L,R,C);let P=e.TRIANGLES,T=0,x=3;e.drawArrays(P,T,x)}),()=>r(h,null,r("canvas",{class:d("gl-canvas"),width:"400",height:"300",ref:n}))}});function f(n,s,e){let l=n.createShader(s);if(n.shaderSource(l,e),n.compileShader(l),n.getShaderParameter(l,n.COMPILE_STATUS))return l;console.log("fail to get shader: ",n.getShaderInfoLog(l)),n.deleteShader(l)}function F(n,s,e){let l=n.createProgram();if(n.attachShader(l,s),n.attachShader(l,e),n.linkProgram(l),n.getProgramParameter(l,n.LINK_STATUS))return l;console.log("fail to get program: ",n.getProgramInfoLog(l)),n.deleteProgram(l)}function y(n){let s=Object.assign({h1:"h1",ul:"ul",li:"li",code:"code",strong:"strong",h2:"h2",pre:"pre",span:"span",h3:"h3"},m(),n.components);return a.h(a.Fragment,null,a.h(s.h1,null,"WebGL\u2618\uFE0F"),`
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

`,a.h(s.span,{className:"hljs-keyword"},"export")," ",a.h(s.span,{className:"hljs-keyword"},"default")," ",a.h(s.span,{className:"hljs-title function_"},"defineComponent"),`({
  `,a.h(s.span,{className:"hljs-attr"},"name"),": ",a.h(s.span,{className:"hljs-string"},"'WebGLHelloWorld'"),`,
  `,a.h(s.span,{className:"hljs-title function_"},"setup"),"(",a.h(s.span,{className:"hljs-params"}),`) {
    `,a.h(s.span,{className:"hljs-keyword"},"const")," glVessel = ",a.h(s.span,{className:"hljs-title function_"},"ref"),`()
    `,a.h(s.span,{className:"hljs-keyword"},"const")," ",a.h(s.span,{className:"hljs-title function_"},"main")," = (",a.h(s.span,{className:"hljs-params"}),`) => {
      `,a.h(s.span,{className:"hljs-keyword"},"const")," gl = glVessel.",a.h(s.span,{className:"hljs-property"},"value"),".",a.h(s.span,{className:"hljs-title function_"},"getContext"),"(",a.h(s.span,{className:"hljs-string"},"'webgl'"),`)

      `,a.h(s.span,{className:"hljs-keyword"},"if"),`(!gl) {
        `,a.h(s.span,{className:"hljs-keyword"},"return"),`
      }

      `,a.h(s.span,{className:"hljs-comment"},"// console.log('webgl main: ', gl)"),`

      `,a.h(s.span,{className:"hljs-keyword"},"const")," vertexShaderSource = ",a.h(s.span,{className:"hljs-string"},`\`
      attribute vec4 a_position;

      void main() {
        gl_Position = a_position;
      }
      \``),`
      `,a.h(s.span,{className:"hljs-keyword"},"const")," fragmentShaderSource = ",a.h(s.span,{className:"hljs-string"},`\`
      precision mediump float;

      void main() {
        gl_FragColor = vec4(1, 0, 0.5, 1);
      }
      \``),`

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
        `,a.h(s.span,{className:"hljs-tag"},"<",a.h(s.span,{className:"hljs-name"},"canvas")," ",a.h(s.span,{className:"hljs-attr"},"class"),"=",a.h(s.span,{className:"hljs-string"},"{")," ",a.h(s.span,{className:"hljs-attr"},"styles"),"('",a.h(s.span,{className:"hljs-attr"},"gl-canvas"),"') } ",a.h(s.span,{className:"hljs-attr"},"width"),"=",a.h(s.span,{className:"hljs-string"},'"400"')," ",a.h(s.span,{className:"hljs-attr"},"height"),"=",a.h(s.span,{className:"hljs-string"},'"300"')," ",a.h(s.span,{className:"hljs-attr"},"ref"),"=",a.h(s.span,{className:"hljs-string"},"{")," ",a.h(s.span,{className:"hljs-attr"},"glVessel")," }>"),a.h(s.span,{className:"hljs-tag"},"</",a.h(s.span,{className:"hljs-name"},"canvas"),">"),`
      `,a.h(s.span,{className:"hljs-tag"},"</>")),`
    }
  }
})
`)),`
`),`
`),`
`,a.h(_),`
`,a.h(s.h3,null,"\u4E00\u4E9B\u62D3\u5C55"))}function W(n={}){let{wrapper:s}=Object.assign({},m(),n.components);return s?a.h(s,n,a.h(y,n)):y(n)}var p=W;var Q=o({name:"MDX_BASIC-CONCEPT",components:{MDXComponentContext:p},setup(n,s){return()=>r("div",{class:"markdown-body",style:"padding: 15px;"},r(p,{...s.attrs}))}});export{Q as default};
