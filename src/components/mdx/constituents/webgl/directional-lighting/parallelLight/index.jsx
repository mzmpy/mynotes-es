import { defineComponent, ref, onMounted } from 'vue'
import styles from './index.module.css'
import {
  createShader,
  createProgram,
  setCanvasPixel
} from '../../common'
import { mat4, vec3 } from 'gl-matrix'
import { ElSlider } from 'element-plus/components'

export default defineComponent({
	name: 'ParallelLight',
  components: { ElSlider },
  props: {
    static: {
      type: Boolean,
      default: false
    }
  },
	setup(props) {
		const glVessel = ref()
    const xPos = ref(40)
    const yPos = ref(55)
    const zPos = ref(25)
    const xRadian = ref(50)
    const yRadian = ref(40)
    const zRadian = ref(60)
    const fov = ref(20)
    let program
    
    const vertexShaderSource = /*glsl*/`
    attribute vec4 a_position;
    uniform mat4 u_matrix;
    uniform mat4 u_world_matrix;
    attribute vec3 a_normal;
    varying vec3 v_normal;

    void main() {
      gl_Position = u_matrix * a_position;
      v_normal = mat3(u_world_matrix) * a_normal;
    }
    `
    const fragmentShaderSource = /*glsl*/`
    precision mediump float;
    varying vec3 v_normal;
    uniform vec4 u_color;
    uniform vec3 u_lightDirection;

    void main() {
      vec3 normal = normalize(v_normal);
      float light_Weight = dot(normal, u_lightDirection);

      gl_FragColor = u_color;
      gl_FragColor.rgb *= light_Weight;
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
      const normalAttributeLocation = gl.getAttribLocation(program, 'a_normal')

      const matrixLocation = gl.getUniformLocation(program, 'u_matrix')
      const colorLocation = gl.getUniformLocation(program, 'u_color')
      const lightDirectionLocation = gl.getUniformLocation(program, 'u_lightDirection')
      const worldMatrixLocation = gl.getUniformLocation(program, 'u_world_matrix')

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

      const lightDirection = vec3.create()
      const matrix = mat4.create()
      const perspectiveMatrix = mat4.create()
      const viewMatrix = mat4.create()

      mat4.translate(matrix, matrix, [dx, dy, dz])
      mat4.rotateX(matrix, matrix, dxRadian)
      mat4.rotateY(matrix, matrix, dyRadian)
      mat4.rotateZ(matrix, matrix, dzRadian)
      mat4.perspective(perspectiveMatrix, dfov, aspect, 1, 20)
      mat4.multiply(viewMatrix, perspectiveMatrix, matrix)
      
      gl.uniformMatrix4fv(worldMatrixLocation, false, props.static ? mat4.create() : matrix)
      gl.uniformMatrix4fv(matrixLocation, false, viewMatrix)
      gl.uniform4fv(colorLocation, [0.2, 1, 0.2, 1])
      gl.uniform3fv(lightDirectionLocation, vec3.normalize(lightDirection, [0.5, 0.7, 1]))

      const positionBuffer = gl.createBuffer()

			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
			setGeometry(gl)
      gl.enableVertexAttribArray(positionAttributeLocation)
			gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0)

      const normalBuffer = gl.createBuffer()

      gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer)
      setNormals(gl)
      gl.enableVertexAttribArray(normalAttributeLocation)
      gl.vertexAttribPointer(normalAttributeLocation, 3, gl.FLOAT, false, 0, 0)

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

    const setNormals = (gl) => {
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
          /* 前面 */
          // 左竖
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,

          // 上横
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,

          // 中横
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,
          0, 0, 1,

          /* 背面 */
          // 左竖
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,

          // 上横
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,

          // 中横
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,
          0, 0, -1,

          /* 顶面 */
          // 上顶
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,

          // 中顶
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,
          0, 1, 0,

          /* 底面 */
          // 上底
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,

          // 中底
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,

          // 下底
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,
          0, -1, 0,

          /* 左侧面 */
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,
          -1, 0, 0,

          /* 右侧面 */
          // 上横右侧
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,

          // 左竖右上侧
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,

          // 左竖右下侧
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,

          // 中横右侧
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0,
          1, 0, 0]),
        gl.STATIC_DRAW
      )
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
