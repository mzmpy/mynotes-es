import { defineComponent, ref, onMounted } from 'vue'
import styles from './index.module.css'
import { createShader, createProgram, setCanvasPixel } from '../../common'

export default defineComponent({
	name: 'WebGLHelloWorld',
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

			void main() {
				gl_FragColor = vec4(1, 0, 0.5, 1);
			}
			`

			setCanvasPixel(gl, 700, 700)

			const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
			const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
			const program = createProgram(gl, vertexShader, fragmentShader)
			const positionBuffer = gl.createBuffer()
			const positions = [
				-0.5, -0.35,
				0.5, -0.35,
				0.0, 0.35
			]
			const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')

			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

			gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
			gl.clearColor(0, 0, 0, 0)
			gl.clear(gl.COLOR_BUFFER_BIT)
			gl.useProgram(program)

			const size = 2
			const type = gl.FLOAT
			const normalized = false
			const stride = 0
			const offset = 0
      gl.enableVertexAttribArray(positionAttributeLocation)
			gl.vertexAttribPointer(positionAttributeLocation, size, type, normalized, stride, offset)

			const primitiveType = gl.TRIANGLES
			const first = 0
			const count = 3
			gl.drawArrays(primitiveType, first, count)
		}

		onMounted(main)

		return () => {
			return <>
				<canvas class={ styles('gl-canvas') } ref={ glVessel }></canvas>
			</>
		}
	}
})
