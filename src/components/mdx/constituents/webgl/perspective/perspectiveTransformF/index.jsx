import { defineComponent, ref, onMounted } from 'vue'
import styles from './index.module.css'
import {
  createShader,
  createProgram,
  setCanvasPixel,
  translate3dMat,
  xRotate3dMat,
  yRotate3dMat,
  zRotate3dMat,
  perspective3d
} from '../../common'
import { ElSlider } from 'element-plus/components'

export default defineComponent({
	name: 'WebGLPerspectiveTransformF',
  components: { ElSlider },
	setup() {
		const glVessel = ref()
    const xPos = ref(50)
    const yPos = ref(50)
    const zPos = ref(50)
    const xRadian = ref(50)
    const yRadian = ref(40)
    const zRadian = ref(60)
    const fov = ref(20)
    let program
    
    const vertexShaderSource = /*glsl*/`
    attribute vec4 a_position;
    uniform mat4 u_perspective_matrix;
    uniform mat4 u_translate_matrix;
    uniform mat4 u_thetax_matrix;
    uniform mat4 u_thetay_matrix;
    uniform mat4 u_thetaz_matrix;
    attribute vec4 a_color;
    varying vec4 v_color;

    void main() {
      gl_Position = u_perspective_matrix * u_translate_matrix * u_thetax_matrix * u_thetay_matrix * u_thetaz_matrix * a_position;
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
      const perspectiveMatrixLocation = gl.getUniformLocation(program, 'u_perspective_matrix')
      const translationMatrixLocation = gl.getUniformLocation(program, 'u_translate_matrix')
      const rotationXMatrixLocation = gl.getUniformLocation(program, 'u_thetax_matrix')
      const rotationYMatrixLocation = gl.getUniformLocation(program, 'u_thetay_matrix')
      const rotationZMatrixLocation = gl.getUniformLocation(program, 'u_thetaz_matrix')
      const colorAttributeLocation = gl.getAttribLocation(program, 'a_color')

			gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      gl.enable(gl.CULL_FACE)
      gl.enable(gl.DEPTH_TEST)
			gl.useProgram(program)

      const dx = parseFloat(formatValue(xPos.value))
      const dy = parseFloat(formatValue(yPos.value))
      const dz = parseFloat(formatZValue(zPos.value))
      const dxRadian = formatRadian(xRadian.value)
      const dyRadian = formatRadian(yRadian.value)
      const dzRadian = formatRadian(zRadian.value)
      const dfov = formatFov(fov.value)
      const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight

      gl.uniformMatrix4fv(perspectiveMatrixLocation, false, new Float32Array(perspective3d(dfov, aspect, 1, 20)))
      gl.uniformMatrix4fv(translationMatrixLocation, false, new Float32Array(translate3dMat(dx, dy, dz)))
      gl.uniformMatrix4fv(rotationXMatrixLocation, false, new Float32Array(xRotate3dMat(dxRadian)))
      gl.uniformMatrix4fv(rotationYMatrixLocation, false, new Float32Array(yRotate3dMat(dyRadian)))
      gl.uniformMatrix4fv(rotationZMatrixLocation, false, new Float32Array(zRotate3dMat(dzRadian)))

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

			const primitiveType = gl.TRIANGLES
			const first = 0
			const count = 6 * 16
      
			gl.drawArrays(primitiveType, first, count)
		}

    const formatValue = (val) => {
      const res = 2 * val / 100 - 1
      return res.toFixed(2)
    }

    const formatZValue = (val) => {
      const res = - 11 * val / 100 + 1
      return res.toFixed(2)
    }

    const formatRadianValue = (val) => {
      return (val * 360 / 100).toFixed(2) + '°'
    }

    const formatFovValue = (val) => {
      return (val * 178 / 100 + 1).toFixed(2) + '°'
    }

    const formatRadian = (val) => {
      return 2 * Math.PI * val / 100
    }

    const formatFov = (val) => {
      return Math.PI * 178 / 180 * val / 100
    }

    const handleXChange = (val) => {
      xPos.value = val
      drawScene()
    }

    const handleYChange = (val) => {
      yPos.value = val
      drawScene()
    }

    const handleZChange = (val) => {
      zPos.value = val
      drawScene()
    }

    const handleXRadianChange = (val) => {
      xRadian.value = val
      drawScene()
    }

    const handleYRadianChange = (val) => {
      yRadian.value = val
      drawScene()
    }

    const handleZRadianChange = (val) => {
      zRadian.value = val
      drawScene()
    }

    const handleFovChange = (val) => {
      fov.value = val
      drawScene()
    }

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
            <ElSlider modelValue={ xPos.value } formatTooltip={ formatValue } onUpdate:modelValue={ handleXChange }></ElSlider>
            <ElSlider modelValue={ yPos.value } formatTooltip={ formatValue } onUpdate:modelValue={ handleYChange }></ElSlider>
            <ElSlider modelValue={ zPos.value } formatTooltip={ formatZValue } onUpdate:modelValue={ handleZChange }></ElSlider>
            <ElSlider modelValue={ xRadian.value } formatTooltip={ formatRadianValue } onUpdate:modelValue={ handleXRadianChange }></ElSlider>
            <ElSlider modelValue={ yRadian.value } formatTooltip={ formatRadianValue } onUpdate:modelValue={ handleYRadianChange }></ElSlider>
            <ElSlider modelValue={ zRadian.value } formatTooltip={ formatRadianValue } onUpdate:modelValue={ handleZRadianChange }></ElSlider>
            <ElSlider modelValue={ fov.value } formatTooltip={ formatFovValue } onUpdate:modelValue={ handleFovChange }></ElSlider>
          </div>
        </div>
			</>
		}
	}
})
