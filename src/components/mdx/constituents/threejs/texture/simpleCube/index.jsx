import { defineComponent, ref, onMounted, shallowRef } from 'vue'
import styles from './index.module.css'
import * as THREE from 'three'
import RenderVessel from '@mdx-utils/renderVessel'
import texture01 from '@images/textures/simpleCube/zhejiang01.jpg'
import texture02 from '@images/textures/simpleCube/zhejiang02.jpg'
import texture03 from '@images/textures/simpleCube/zhejiang03.jpg'
import texture04 from '@images/textures/simpleCube/zhejiang04.jpg'
import texture05 from '@images/textures/simpleCube/zhejiang05.jpg'
import texture06 from '@images/textures/simpleCube/zhejiang06.jpg'

export default defineComponent({
  name: 'ThreeJsTextureSimpleCube',
  setup() {
    const glVessel = ref()
    const animation = ref(false)
    const localFrameTime = ref(0)
    const renderer = shallowRef()
    const loaderManager = new THREE.LoadingManager()
    const loader = new THREE.TextureLoader(loaderManager)
    const objects = []
    const progress = ref(0)
    const progressTitle = ref('')

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 7/5, 0.1, 50)
    const light = new THREE.DirectionalLight(0xffffff, 3)

    onMounted(() => {
      const materials = [
        new THREE.MeshBasicMaterial({ map: loadTexture(texture01) }),
        new THREE.MeshBasicMaterial({ map: loadTexture(texture02) }),
        new THREE.MeshBasicMaterial({ map: loadTexture(texture03) }),
        new THREE.MeshBasicMaterial({ map: loadTexture(texture04) }),
        new THREE.MeshBasicMaterial({ map: loadTexture(texture05) }),
        new THREE.MeshBasicMaterial({ map: loadTexture(texture06) })
      ]

      loaderManager.onLoad = () => {
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const cube = new THREE.Mesh(geometry, materials)

        renderer.value = new THREE.WebGLRenderer({ antialias: true, canvas: glVessel.value, alpha: true })
        renderer.value.setPixelRatio(10)
        camera.position.z = 5
        light.position.set(-1, 3, 5)
        cube.position.set(-1, -0.5, 0)
        scene.add(light, cube)
        objects.push(cube)

        requestAnimationFrame(render)
      }

      loaderManager.onProgress = (url, loaded, total) => {
        const percentage = Math.round(loaded / total * 100)

        console.log(`loaded ${percentage}%`, url)
        progressTitle.value = `正在加载资源...`
        progress.value = percentage
      }
    })

    const render = (time) => {
      if(localFrameTime.value === 0) localFrameTime.value = time * 0.001
      else {
        localFrameTime.value += 1 / 60
      }

      objects.forEach((obj) => {
        obj.rotation.x = localFrameTime.value / 3
        obj.rotation.y = localFrameTime.value / 3
      })

      renderer.value.render(scene, camera)

      if(animation.value) requestAnimationFrame(render)
    }

    const onAnimation = (val) => {
      animation.value = val
      requestAnimationFrame(render)
    }

    const loadTexture = (url) => {
      const texture = loader.load(url)
      texture.colorSpace = THREE.SRGBColorSpace
      return texture
    }

    return () => {
      return <>
        <RenderVessel
          animation={animation.value}
          onAnimation={onAnimation}
          progress={progress.value}
          progressTitle={progressTitle.value}
        >
          {{
            canvas: () => <canvas class={styles('gl-canvas')} ref={glVessel}></canvas>
          }}
        </RenderVessel>
      </>
    }
  }
})
