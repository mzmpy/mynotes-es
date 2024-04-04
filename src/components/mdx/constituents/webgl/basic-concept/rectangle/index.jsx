import { defineComponent, ref, onMounted } from 'vue'
import styles from './index.module.css'
import { createShader, createProgram, setCanvasPixel } from '../../common'

export default defineComponent({
	name: 'WebGLRectangle',
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
			const positionBuffer = gl.createBuffer()
			const positions = [
				-0.5, -0.35,
				0.5, -0.35,
				-0.5, 0.35,
				0.5, 0.35,
				-0.5, 0.35,
				0.5, -0.35
			]
			const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
			const colorUniformLocation = gl.getUniformLocation(program, 'u_color')

			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

			gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
			gl.clearColor(0, 0, 0, 0)
			gl.clear(gl.COLOR_BUFFER_BIT)
			gl.useProgram(program)

			// 定义着色器程序如何读取缓存区的数据
			const size = 2
			const type = gl.FLOAT
			const normalized = false
			const stride = 0   // 0 = move forward size * sizeof(type) each iteration to get the next position
			const offset = 0
      gl.enableVertexAttribArray(positionAttributeLocation)
			gl.vertexAttribPointer(positionAttributeLocation, size, type, normalized, stride, offset)
			// 读取全局数据
			gl.uniform4f(colorUniformLocation, 1, 0.5, 0.5, 1)

			const primitiveType = gl.TRIANGLES
			const first = 0
			const count = 6
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
