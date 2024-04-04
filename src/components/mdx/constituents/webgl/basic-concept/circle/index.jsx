import { defineComponent, ref, onMounted } from 'vue'
import styles from './index.module.css'
import { createShader, createProgram, setCanvasPixel } from '../../common'

export default defineComponent({
	name: 'WebGLCircle',
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

      const iter = 81
      for(let i = 0; i < iter; i++) {
        gl.uniform4f(colorUniformLocation, 0.43, 0.43, 0.25, 1)
        setCircleTrajectory(gl, iter, i, -0.4, -0.3, 0.45)
      }
		}

    const setCircleTrajectory = (gl, iter, i, x0, y0, r) => {
      // ua -> unit angle
      const ua = 2 * Math.PI / iter
      const positions = [
				x0, y0,
				x0 + r * Math.cos(i * ua), y0 + r * Math.sin(i * ua),
				x0 + r * Math.cos((i + 1) * ua), y0 + r * Math.sin((i + 1) * ua)
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
