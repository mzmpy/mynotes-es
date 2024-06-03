import { defineComponent, ref, onMounted, shallowRef } from 'vue'
import styles from './index.module.css'
import * as THREE from 'three'
import RenderVessel from '@mdx-utils/renderVessel'

export default defineComponent({
  name: 'ThreeJsFundamentals',
  setup() {
    const glVessel = ref()
    const animation = ref(false)
    const localFrameTime = ref(0)
    const renderer = shallowRef()
    
    const camera = new THREE.PerspectiveCamera(75, 5/3, 0.1, 5)
    const light = new THREE.DirectionalLight(0xffffff, 3)
    const scene = new THREE.Scene()
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
    const cube = new THREE.Mesh(geometry, material)

    onMounted(() => {
      renderer.value = new THREE.WebGLRenderer({ antialias: true, canvas: glVessel.value })
      renderer.value.setClearColor(0xffffff, 1)
      renderer.value.setPixelRatio(10)
      camera.position.z = 2
      light.position.set(-1, 3, 5)
      scene.add(light, cube)

      requestAnimationFrame(render)
    })

    const render = (time) => {
      if(localFrameTime.value === 0) localFrameTime.value = time * 0.001
      else {
        localFrameTime.value += 1 / 60
      }

      cube.rotation.x = localFrameTime.value / 3
      cube.rotation.y = localFrameTime.value / 3

      renderer.value.render(scene, camera)

      if(animation.value) requestAnimationFrame(render)
    }

    const onAnimation = (val) => {
      animation.value = val
      requestAnimationFrame(render)
    }

    return () => {
      return <>
        <RenderVessel animation={animation.value} onAnimation={onAnimation}>
          {{
            canvas: () => <canvas class={styles('gl-canvas')} ref={glVessel}></canvas>
          }}
        </RenderVessel>
      </>
    }
  }
})
