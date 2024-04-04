export * from './constants'

/**
 * @description 生成着色器，可以是顶点着色器或者片段着色器
 * @param {WebGLRenderingContextBase} gl
 * @param {GLenum} type
 * @param {string} glslSource
 * @returns {WebGLShader | void} 返回着色器
 */
export const createShader = (gl, type, glslSource) => {
  const shader = gl.createShader(type)

  gl.shaderSource(shader, glslSource)
  gl.compileShader(shader)

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
  if(success) {
    return shader
  }

  console.log(`Failed to get shader: ${gl.getShaderInfoLog(shader)}`)
  gl.deleteShader(shader)
}

/**
 * @description 生成着色器程序
 * @param {WebGLRenderingContextBase} gl
 * @param {WebGLShader} vShader
 * @param {WebGLShader} fShader
 * @returns {WebGLProgram | void} 返回着色器程序
 */
export const createProgram = (gl, vShader, fShader) => {
  const program = gl.createProgram()

  gl.attachShader(program, vShader)
  gl.attachShader(program, fShader)
  gl.linkProgram(program)

  const success = gl.getProgramParameter(program, gl.LINK_STATUS)
  if(success) {
    return program
  }

  console.log(`Failed to get shader program: ${gl.getProgramInfoLog(program)}`)
  gl.deleteProgram(program)
}

/**
 * @description 设置canvas元素的像素大小
 * @param {WebGLRenderingContextBase} gl 
 * @param {number} wpx canvas元素横向总像素
 * @param {number} hpx canvas元素纵向总像素
 */
export const setCanvasPixel = (gl, wpx, hpx) => {
  if(gl) {
    gl.canvas.width = wpx
    gl.canvas.height = hpx
  }
}

/**
 * @description 二维平移旋转变换矩阵
 * @param {number} alpha 缩放系数
 * @param {number} theta 旋转的角度
 * @param {number} dx 
 * @param {number} dy 
 * @returns {Array<number>}
 */
export const transform2dMat = (theta, alpha, beta, dx, dy) => {
  return [
    alpha * Math.cos(theta),   alpha * Math.sin(theta), 0,
    - beta * Math.sin(theta),  beta * Math.cos(theta),  0,
    dx,                        dy,                      1
  ]
}

/**
 * @description 三维平移变换矩阵
 * @param {number} dx 
 * @param {number} dy 
 * @param {number} dz
 * @returns {Array<number>}
 */
export const translate3dMat = (dx, dy, dz) => {
  return [
    1,  0,  0,  0,
    0,  1,  0,  0,
    0,  0,  1,  0,
    dx, dy, dz, 1
  ]
}

/**
 * @description 三维绕Z轴旋转变换矩阵
 * @param {number} theta 旋转的角度
 * @returns {Array<number>}
 */
export const zRotate3dMat = (theta) => {
  return [
    Math.cos(theta),   Math.sin(theta), 0,  0,
    - Math.sin(theta), Math.cos(theta), 0,  0,
    0,                 0,               1,  0,
    0,                 0,               0,  1
  ]
}

/**
 * @description 三维绕Y轴旋转变换矩阵
 * @param {number} theta 旋转的角度
 * @returns {Array<number>}
 */
export const yRotate3dMat = (theta) => {
  return [
    Math.cos(theta), 0, - Math.sin(theta), 0,
    0,               1, 0,                 0,
    Math.sin(theta), 0, Math.cos(theta),   0,
    0,               0, 0,                 1
  ]
}

/**
 * @description 三维绕X轴旋转变换矩阵
 * @param {number} theta 旋转的角度
 * @returns {Array<number>}
 */
export const xRotate3dMat = (theta) => {
  return [
    1, 0,                 0,               0,
    0, Math.cos(theta),   Math.sin(theta), 0,
    0, - Math.sin(theta), Math.cos(theta), 0,
    0, 0,                 0,               1
  ]
}

/**
 * @description 二维投影变换矩阵
 * @param {number} width 视体宽度
 * @param {number} height 视体高度
 * @returns {Array<number>}
 */
export const projection2d = (width, height) => {
  return [
    2 / width, 0,            0,
    0,         - 2 / height, 0,
    0,         0,            1
  ]
}

/**
 * @description 三维正射投影变换矩阵
 * @param {number} width 视体宽度
 * @param {number} height 视体高度
 * @param {number} depth 视体远近的程度
 * @returns {Array<number>}
 */
export const projection3d = (width, height, depth) => {
  return [
    2 / width, 0,            0,         0,
    0,         - 2 / height, 0,         0,
    0,         0,            2 / depth, 0,
    0,         0,            0,         1
  ]
}

/**
 * @description 三维透视投影变换矩阵
 * @param {number} fov 视角
 * @param {number} aspect 视体高度
 * @param {number} near 视锥近截面距离观察点的距离
 * @param {number} far 视锥远截面距离观察点的距离
 * @returns {Array<number>}
 */
export const perspective3d = (fov, aspect, near, far) => {
  const f = Math.tan(Math.PI * 0.5 - 0.5 * fov);
  const rangeInv = 1.0 / (near - far);
 
  return [
    f / aspect, 0, 0,                         0,
    0,          f, 0,                         0,
    0,          0, (near + far) * rangeInv,   - 1,
    0,          0, near * far * rangeInv * 2, 0
  ]
}
