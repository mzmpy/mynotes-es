import { defineComponent, ref, onMounted, shallowRef } from 'vue'
import styles from './index.module.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import RenderVessel from '@mdx-utils/renderVessel'
import checkerImg from '@images/textures/checker.png'

const smallCityGSTF = `${MODELSRESOURCEPATH}/smallCity/scene.gltf`

export default defineComponent({
  name: 'ThreeJsSmallCity',
  setup() {
    const glVessel = ref()
    const renderer = shallowRef()
    const progress = ref(0)
    const progressTitle = ref('')
    
    const loaderManager = new THREE.LoadingManager()
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 3/2, 0.1, 5000)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5)
    const hemisphereLight = new THREE.HemisphereLight(0xB1E1FF, 0xB97A20, 2)
    camera.position.set(0, 10, 35)
    directionalLight.position.set(0, 10, 0)
		directionalLight.target.position.set(- 5, 0, 0)
    directionalLight.castShadow = true

    onMounted(() => {
      const planeSize = 40
      const planeGeometry = new THREE.PlaneGeometry(planeSize, planeSize)
      const controls = new OrbitControls(camera, glVessel.value)
      const loader = new THREE.TextureLoader(loaderManager)
      loader.load(checkerImg, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        texture.magFilter = THREE.NearestFilter
        texture.repeat.set(planeSize / 2, planeSize / 2)

        const planeMaterial = new THREE.MeshPhongMaterial({ map: texture, side: THREE.DoubleSide })
        const plane = new THREE.Mesh(planeGeometry, planeMaterial)

        plane.rotation.x = - 0.5 * Math.PI
        plane.receiveShadow = true
        scene.add(plane)
      })

      const gltfLoader = new GLTFLoader(loaderManager)
      gltfLoader.load(smallCityGSTF, (gltf) => {
        const root = gltf.scene
        scene.add(root)

        const box = new THREE.Box3().setFromObject(root)
        const boxSize = box.getSize(new THREE.Vector3()).length()
        const boxCenter = box.getCenter(new THREE.Vector3())

        frameArea(boxSize * 0.5, boxSize, boxCenter, camera)

        controls.maxDistance = boxSize * 10
        controls.target.copy(boxCenter)
      })

      loaderManager.onProgress = (url, loaded, total) => {
        const percentage = Math.round(loaded / total * 100)

        console.log(`loaded ${percentage}%`, url)
        progressTitle.value = `正在加载资源...`
        progress.value = percentage
      }
      
      renderer.value = new THREE.WebGLRenderer({ antialias: true, canvas: glVessel.value })
      renderer.value.shadowMap.enabled = true
      renderer.value.setPixelRatio(10)
      
      scene.add(hemisphereLight, directionalLight)
      scene.background = new THREE.Color(0x000000)

      controls.target.set(0, 5, 0)
      controls.update()

      requestAnimationFrame(render)
    })

    const render = () => {
      renderer.value.render(scene, camera)

      requestAnimationFrame(render)
    }

    const frameArea = (sizeToFitOnScreen, boxSize, boxCenter, camera) => {
      const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5
      const halfFov = THREE.MathUtils.degToRad(camera.fov * .5)
      const distance = halfSizeToFitOnScreen / Math.tan(halfFov)
      const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize()

      camera.position.copy(direction.multiplyScalar(distance).add(boxCenter))
      camera.near = boxSize / 100
      camera.far = boxSize * 100
      camera.updateProjectionMatrix()
      camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z)
    }

    return () => {
      return <>
        <RenderVessel
          showAnimation={false}
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
