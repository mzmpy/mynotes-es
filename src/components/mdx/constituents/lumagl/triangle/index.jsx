import { luma } from '@luma.gl/core'
import { AnimationLoop, Model } from '@luma.gl/engine'
import { webgpuAdapter } from '@luma.gl/webgpu'
import { defineComponent, ref, onMounted } from 'vue'
import styles from './index.module.css'

const source = /* wgsl */ `\
struct VertexOutput {
  @builtin(position) Position : vec4<f32>,
  @location(0) fragColor : vec3<f32>
};

@vertex
fn vertexMain(@location(0) position : vec2<f32>, @location(1) color : vec3<f32>) -> VertexOutput {
  var output : VertexOutput;
  output.Position = vec4<f32>(position.x, position.y, 0.0, 1.0);
  output.fragColor = color;
  return output;
}

@fragment
fn fragmentMain(@location(0) fragColor: vec3<f32>) -> @location(0) vec4<f32> {
  return vec4<f32>(fragColor, 1.0);
}
`

export default defineComponent({
  name: 'LumaTriangle',
  setup() {
    const glVessel = ref()

    onMounted(async () => {
      const device = await luma.createDevice({
        type: 'webgpu',
        adapters: [webgpuAdapter],
        createCanvasContext: {
          canvas: glVessel.value
        }
      })
      const buffer = device.createBuffer(
        new Float32Array([
          // vertex 1: 2D positions XY,  colors RGB
          -0.5, -0.5,  1, 0, 0,
          // vertex 2: 2D positions XY,  colors RGB
          0.5, -0.5,  0, 1, 0,
          // vertex 3: 2D positions XY,  colors RGB
          0.0, 0.5,  0, 0, 1
        ])
      )
      const model = new Model(device, {
        id: 'triangle',
        source,
        bufferLayout: [
          {
            name: 'vertexData',
            byteStride: 20,
            stepMode: 'vertex',
            attributes: [
              { attribute: 'position', format: 'float32x2', byteOffset: 0 },
              { attribute: 'color', format: 'float32x3', byteOffset: 8 }
            ]
          }
        ],
        attributes: {
          vertexData: buffer
        },
        vertexCount: 3,
        parameters: {
          depthFormat: 'depth24plus'
        }
      })

      const animationLoop = new AnimationLoop({
        device: device,
        onFinalize() {
          model.destroy()
          buffer.destroy()
        },
        onRender({ device }) {
          const renderPass = device.beginRenderPass({clearColor: [0, 0, 0, 1]})
          model.draw(renderPass)
          renderPass.end()
        }
      })

      animationLoop.start()
    })

    return () => {
      return <>
        <canvas class={ styles('gl-canvas') } ref={ glVessel }></canvas>
      </>
    }
  }
}) 
