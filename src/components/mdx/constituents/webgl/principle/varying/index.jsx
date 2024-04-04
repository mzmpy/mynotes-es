import { defineComponent, ref, onMounted } from 'vue'
import styles from './index.module.css'
import { createShader, createProgram, setCanvasPixel, transform2dMat } from '../../common'
import { ElSlider } from 'element-plus/components'

export default defineComponent({
	name: 'WebGLVarying',
  components: { ElSlider },
	setup() {
		const glVessel = ref()
    const xPos = ref(50)
    const yPos = ref(50)
    const radian = ref(0)
    let program
    
    const vertexShaderSource = /*glsl*/`
    attribute vec2 a_position;
    uniform mat3 u_matrix;
    varying vec4 v_color;

    void main() {
      gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
      v_color = gl_Position * 0.5 + 0.5;
    }
    `
    const fragmentShaderSource = /*glsl*/`
    precision mediump float;
    varying vec4 v_color;

    void main() {
      gl_FragColor = v_color;
    }
    `
    
    const initWebGl = () => {
      const gl = glVessel.value.getContext('webgl')

			if(!gl) {
				return
			}

      setCanvasPixel(gl, 1500, 1500)

      const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
			const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
			const program = createProgram(gl, vertexShader, fragmentShader)
			const positionBuffer = gl.createBuffer()
			const positions = [
				-0.3, -0.3 * 1 / 3 * Math.sqrt(3),
				0.3, -0.3 * 1 / 3 * Math.sqrt(3),
				0.0, 0.3 * 2 / 3 * Math.sqrt(3)
			]

			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

      return program
    }

		const drawScene = () => {
      const gl = glVessel.value.getContext('webgl')

			if(!gl) {
				return
			}

			const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
      const matrixLocation = gl.getUniformLocation(program, 'u_matrix')

			gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
			gl.clearColor(0, 0, 0, 0)
			gl.clear(gl.COLOR_BUFFER_BIT)
			gl.useProgram(program)

			const size = 2
			const type = gl.FLOAT
			const normalized = false
			const stride = 0
			const offset = 0
      const dx = parseFloat(formatValue(xPos.value))
      const dy = parseFloat(formatValue(yPos.value))
      const dRadian = formatRadian(radian.value)
      
      gl.enableVertexAttribArray(positionAttributeLocation)
			gl.vertexAttribPointer(positionAttributeLocation, size, type, normalized, stride, offset)
      gl.uniformMatrix3fv(matrixLocation, false, new Float32Array(transform2dMat(dRadian, 1.0, 1.0, dx, dy)))

			const primitiveType = gl.TRIANGLES
			const first = 0
			const count = 3
			gl.drawArrays(primitiveType, first, count)
		}

    const formatValue = (val) => {
      const res = 2 * val / 100 - 1
      return res.toFixed(2)
    }

    const formatRadianValue = (val) => {
      return val * 360 / 100 + '°'
    }

    const formatRadian = (val) => {
      return 2 * Math.PI * val / 100
    }

    const handleXChange = (val) => {
      xPos.value = val
      drawScene()
    }

    const handleYChange = (val) => {
      yPos.value = val
      drawScene()
    }

    const handleRadianChange = (val) => {
      radian.value = val
      drawScene()
    }

		onMounted(() => {
      program = initWebGl()
      drawScene()
    })

		return () => {
			return <>
        <div class={ styles('vessel') }>
          <canvas class={ styles('gl-canvas') } ref={ glVessel }></canvas>
          <div class={ styles('operation') }>
            <ElSlider modelValue={ xPos.value } formatTooltip={ formatValue } onUpdate:modelValue={ handleXChange }></ElSlider>
            <ElSlider modelValue={ yPos.value } formatTooltip={ formatValue } onUpdate:modelValue={ handleYChange }></ElSlider>
            <ElSlider modelValue={ radian.value } formatTooltip={ formatRadianValue } onUpdate:modelValue={ handleRadianChange }></ElSlider>
          </div>
        </div>
			</>
		}
	}
})
