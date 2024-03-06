import { defineComponent, ref, onMounted } from 'vue'
import styles from './index.module.css'

export default defineComponent({
	name: 'WebGLHelloWorld',
	setup() {
		const glVessel = ref()
		const main = () => {
			const gl = glVessel.value.getContext('webgl')

			if(!gl) {
				return
			}

			// console.log('webgl main: ', gl)

			const vertexShaderSource = `
			attribute vec4 a_position;

			void main() {
				gl_Position = a_position;
			}
			`
			const fragmentShaderSource = `
			precision mediump float;

			void main() {
				gl_FragColor = vec4(1, 0, 0.5, 1);
			}
			`

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
				<canvas class={ styles('gl-canvas') } width="400" height="300" ref={ glVessel }></canvas>
			</>
		}
	}
})

function createShader(gl, type, glslSource) {
	const shader = gl.createShader(type)

	gl.shaderSource(shader, glslSource)
	gl.compileShader(shader)
	const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)

	if(success) {
		return shader
	}

	console.log('fail to get shader: ', gl.getShaderInfoLog(shader))
	gl.deleteShader(shader)
}

function createProgram(gl, vertexShader, fragmentShader) {
	const program = gl.createProgram()

	gl.attachShader(program, vertexShader)
	gl.attachShader(program, fragmentShader)
	gl.linkProgram(program)

	const success = gl.getProgramParameter(program, gl.LINK_STATUS)

	if(success) {
		return program
	}

	console.log('fail to get program: ', gl.getProgramInfoLog(program))
	gl.deleteProgram(program)
}
