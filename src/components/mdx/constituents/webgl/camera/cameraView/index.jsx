import { defineComponent, ref, onMounted } from 'vue'
import {
  createShader,
  createProgram,
  setCanvasPixel
} from '../../common'
import styles from './index.module.css'
import { mat4 } from 'gl-matrix'
import { ElSlider } from 'element-plus/components'

export default defineComponent({
	name: 'CameraView',
  components: { ElSlider },
	setup() {
		const glVessel = ref()
    const zPos = ref(50)
    const radian = ref(0)
    const fov = ref(20)
    let program
    
    const vertexShaderSource = /*glsl*/`
    attribute vec4 a_position;
    uniform mat4 u_matrix;
    attribute vec4 a_color;
    varying vec4 v_color;

    void main() {
      gl_Position = u_matrix * a_position;
      v_color = a_color;
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

      setCanvasPixel(gl, 500, 500)

      const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
			const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
			const program = createProgram(gl, vertexShader, fragmentShader)

      return program
    }

		const drawScene = () => {
      const gl = glVessel.value.getContext('webgl')

			if(!gl) {
				return
			}

			const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
      const matrixLocation = gl.getUniformLocation(program, 'u_matrix')
      const colorAttributeLocation = gl.getAttribLocation(program, 'a_color')

			gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      gl.enable(gl.CULL_FACE)
      gl.enable(gl.DEPTH_TEST)
			gl.useProgram(program)

      const dz = parseFloat(formatZ(zPos.value))
      const dRadian = formatRadian(radian.value)
      const dfov = formatFov(fov.value)
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight

      const cameraMatrix = mat4.create()
      mat4.rotateY(cameraMatrix, cameraMatrix, dRadian)
      mat4.translate(cameraMatrix, cameraMatrix, [0, 0, dz])

      const viewMatrix = mat4.create()
      mat4.invert(viewMatrix, cameraMatrix)
      
      const projectionMatrix = mat4.create()
      mat4.perspective(projectionMatrix, dfov, aspect, 1, 20)
      
      const viewProjectionMatrix = mat4.create()
      mat4.multiply(viewProjectionMatrix, projectionMatrix, viewMatrix)

      const positionBuffer = gl.createBuffer()

			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
			setGeometry(gl)
      gl.enableVertexAttribArray(positionAttributeLocation)
			gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0)
      
      const colorBuffer = gl.createBuffer()

			gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
			setColors(gl)
      gl.enableVertexAttribArray(colorAttributeLocation)
			gl.vertexAttribPointer(colorAttributeLocation, 3, gl.UNSIGNED_BYTE, true, 0, 0)

      for(let iter = 0; iter < 5; iter ++) {
        const angle = 2 * Math.PI / 5 * (iter + 1)
        const x = Math.cos(angle)
        const z = Math.sin(angle)
        const matrix = mat4.create()

        mat4.translate(matrix, viewProjectionMatrix, [x, 0.3, z])
        gl.uniformMatrix4fv(matrixLocation, false, new Float32Array(matrix))

        const primitiveType = gl.TRIANGLES
        const first = 0
        const count = 6 * 16
        
        gl.drawArrays(primitiveType, first, count)
      }
		}

    /** format silder value */
    const formatSliderZ = (val) => {
      const res = 10 * val / 100
      return res.toFixed(2)
    }

    const formatSliderRadian = (val) => {
      return (2 * val * 360 / 100 - 360).toFixed(2) + '°'
    }

    const formatFovValue = (val) => {
      return (val * 178 / 100 + 1).toFixed(2) + '°'
    }

    /** format coordinate variables */
    const formatZ = (val) => {
      return 10 * val / 100
    }

    const formatRadian = (val) => {
      return 4 * Math.PI * val / 100 - 2 * Math.PI
    }

    const formatFov = (val) => {
      return Math.PI * 178 / 180 * val / 100
    }

    /** slider handlers */
    const handleZChange = (val) => {
      zPos.value = val
      drawScene()
    }

    const handleRadianChange = (val) => {
      radian.value = val
      drawScene()
    }

    const handleFovChange = (val) => {
      fov.value = val
      drawScene()
    }

    /** tool methods */
    const setGeometry = (gl) => {
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
          /* 前面 */
          // 左竖
          0, 0, 0.05,
          0, -0.6, 0.05,
          0.1, -0.6, 0.05,
          0.1, -0.6, 0.05,
          0.1, 0, 0.05,
          0, 0, 0.05,
  
          // 上横
          0.1, 0, 0.05,
          0.1, -0.1, 0.05,
          0.37, -0.1, 0.05,
          0.37, -0.1, 0.05,
          0.37, 0, 0.05,
          0.1, 0, 0.05,
  
          // 中横
          0.1, -0.25, 0.05,
          0.1, -0.35, 0.05,
          0.25, -0.35, 0.05,
          0.25, -0.35, 0.05,
          0.25, -0.25, 0.05,
          0.1, -0.25, 0.05,
  
          /* 背面 */
          // 左竖
          0, 0, -0.05,
          0.1, 0, -0.05,
          0.1, -0.6, -0.05,
          0.1, -0.6, -0.05,
          0, -0.6, -0.05,
          0, 0, -0.05,
  
          // 上横
          0.1, 0, -0.05,
          0.37, -0.1, -0.05,
          0.1, -0.1, -0.05,
          0.37, 0, -0.05,
          0.37, -0.1, -0.05,
          0.1, 0, -0.05,
  
          // 中横
          0.1, -0.25, -0.05,
          0.25, -0.25, -0.05,
          0.25, -0.35, -0.05,
          0.25, -0.35, -0.05,
          0.1, -0.35, -0.05,
          0.1, -0.25, -0.05,

          /* 顶面 */
          // 上顶
          0, 0, -0.05,
          0, 0, 0.05,
          0.37, 0, 0.05,
          0.37, 0, 0.05,
          0.37, 0, -0.05,
          0, 0, -0.05,

          // 中顶
          0.1, -0.25, -0.05,
          0.1, -0.25, 0.05,
          0.25, -0.25, 0.05,
          0.25, -0.25, 0.05,
          0.25, -0.25, -0.05,
          0.1, -0.25, -0.05,

          /* 底面 */
          // 上底
          0.1, -0.1, 0.05,
          0.1, -0.1, -0.05,
          0.37, -0.1, -0.05,
          0.37, -0.1, -0.05,
          0.37, -0.1, 0.05,
          0.1, -0.1, 0.05,

          // 中底
          0.1, -0.35, 0.05,
          0.1, -0.35, -0.05,
          0.25, -0.35, -0.05,
          0.25, -0.35, -0.05,
          0.25, -0.35, 0.05,
          0.1, -0.35, 0.05,

          // 下底
          0, -0.6, 0.05,
          0, -0.6, -0.05,
          0.1, -0.6, -0.05,
          0.1, -0.6, -0.05,
          0.1, -0.6, 0.05,
          0, -0.6, 0.05,

          /* 左侧面 */
          0, 0, -0.05,
          0, -0.6, -0.05,
          0, -0.6, 0.05,
          0, -0.6, 0.05,
          0, 0, 0.05,
          0, 0, -0.05,

          /* 右侧面 */
          // 上横右侧
          0.37, 0, 0.05,
          0.37, -0.1, 0.05,
          0.37, -0.1, -0.05,
          0.37, -0.1, -0.05,
          0.37, 0, -0.05,
          0.37, 0, 0.05,
  
          // 左竖右上侧
          0.1, -0.1, 0.05,
          0.1, -0.25, 0.05,
          0.1, -0.25, -0.05,
          0.1, -0.25, -0.05,
          0.1, -0.1, -0.05,
          0.1, -0.1, 0.05,
  
          // 左竖右下侧
          0.1, -0.35, 0.05,
          0.1, -0.6, 0.05,
          0.1, -0.6, -0.05,
          0.1, -0.6, -0.05,
          0.1, -0.35, -0.05,
          0.1, -0.35, 0.05,
  
          // 中横右侧
          0.25, -0.25, 0.05,
          0.25, -0.35, 0.05,
          0.25, -0.35, -0.05,
          0.25, -0.35, -0.05,
          0.25, -0.25, -0.05,
          0.25, -0.25, 0.05,
        ]),
        gl.STATIC_DRAW)
    }

    const setColors = (gl) => {
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Uint8Array([
          /* 前面 */
          // 左竖
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
  
          // 上横
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
  
          // 中横
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
          200, 70, 120,
  
          /* 背面 */
          // 左竖
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
  
          // 上横
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
  
          // 中横
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
          80, 70, 200,
  
          /* 顶面 */
          // 上顶
          70, 200, 210,
          70, 200, 210,
          70, 200, 210,
          70, 200, 210,
          70, 200, 210,
          70, 200, 210,
  
          // 中顶
          200, 200, 70,
          200, 200, 70,
          200, 200, 70,
          200, 200, 70,
          200, 200, 70,
          200, 200, 70,
  
          /* 底面 */
          // 上底
          210, 100, 70,
          210, 100, 70,
          210, 100, 70,
          210, 100, 70,
          210, 100, 70,
          210, 100, 70,
  
          // 中底
          210, 160, 70,
          210, 160, 70,
          210, 160, 70,
          210, 160, 70,
          210, 160, 70,
          210, 160, 70,
  
          // 下底
          70, 180, 210,
          70, 180, 210,
          70, 180, 210,
          70, 180, 210,
          70, 180, 210,
          70, 180, 210,
  
          /* 左侧面 */
          150, 70, 180,
          150, 70, 180,
          150, 70, 180,
          150, 70, 180,
          150, 70, 180,
          150, 70, 180,
  
          /* 右侧面 */
          // 上横右侧
          76, 210, 100,
          76, 210, 100,
          76, 210, 100,
          76, 210, 100,
          76, 210, 100,
          76, 210, 100,
  
          // 左竖右上侧
          140, 210, 80,
          140, 210, 80,
          140, 210, 80,
          140, 210, 80,
          140, 210, 80,
          140, 210, 80,
  
          // 左竖右下侧
          90, 130, 110,
          90, 130, 110,
          90, 130, 110,
          90, 130, 110,
          90, 130, 110,
          90, 130, 110,
  
          // 中横右侧
          160, 160, 220,
          160, 160, 220,
          160, 160, 220,
          160, 160, 220,
          160, 160, 220,
          160, 160, 220]),
        gl.STATIC_DRAW)
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
            <ElSlider modelValue={ zPos.value } formatTooltip={ formatSliderZ } onUpdate:modelValue={ handleZChange }></ElSlider>
            <ElSlider modelValue={ radian.value } formatTooltip={ formatSliderRadian } onUpdate:modelValue={ handleRadianChange }></ElSlider>
            <ElSlider modelValue={ fov.value } formatTooltip={ formatFovValue } onUpdate:modelValue={ handleFovChange }></ElSlider>
          </div>
        </div>
			</>
		}
	}
})
