import { defineComponent, ref, onMounted } from 'vue'
import styles from './index.module.css'
import { createShader, createProgram, setCanvasPixel } from '../../common'

export default defineComponent({
	name: 'WebGLHeartShaped',
	setup() {
		const glVessel = ref()
		const main = () => {
			const gl = glVessel.value.getContext('webgl')

			if(!gl) {
				return
			}

			const vertexShaderSource = /*glsl*/`
			attribute vec4 a_position;

			void main() {
				gl_Position = a_position;
			}
			`
			const fragmentShaderSource = /*glsl*/`
			precision mediump float;
			uniform vec4 u_color;

			void main() {
				gl_FragColor = u_color;
			}
			`

      setCanvasPixel(gl, 700, 700)

			const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
			const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
			const program = createProgram(gl, vertexShader, fragmentShader)
			
			const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
			const colorUniformLocation = gl.getUniformLocation(program, 'u_color')

      const positionBuffer = gl.createBuffer()
			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

			gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
			gl.clearColor(0, 0, 0, 0)
			gl.clear(gl.COLOR_BUFFER_BIT)
			gl.useProgram(program)

      gl.enableVertexAttribArray(positionAttributeLocation)
			gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0)

      for(let n = 0; n < 25; n++) {
        const iter = 81
        const x0 = 2 * Math.random() - 1
        const y0 = 2 * Math.random() - 1
        for(let i = 0; i <= iter; i++) {
          gl.uniform4f(colorUniformLocation, 1, 0.5, 0.5, 1)
          setTrajectory(gl, iter, i, x0, y0)
        }
      }
		}

    const setTrajectory = (gl, iter, i, x0, y0) => {
      const ua = 2 * Math.PI / iter
      const t0 = 2 * i * ua
      const t1 = 2 * (i + 1) * ua
      const xExpr = (t) => 0.1 * (0 - Math.sqrt(2) * Math.sin(t) ** 3)
      const yExpr = (t) => 0.1 * (0 - Math.cos(t) ** 3 - Math.cos(t) ** 2 + 2 * Math.cos(t))
      const positions = [
				x0, y0,
				x0 + xExpr(t0), y0 + yExpr(t0),
				x0 + xExpr(t1), y0 + yExpr(t1)
			]

      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

		onMounted(main)

		return () => {
			return <>
				<canvas class={ styles('gl-canvas') } ref={ glVessel }></canvas>
			</>
		}
	}
})
