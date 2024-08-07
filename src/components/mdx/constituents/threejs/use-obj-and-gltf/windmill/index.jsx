import { defineComponent, ref, onMounted, shallowRef } from 'vue'
import styles from './index.module.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import RenderVessel from '@mdx-utils/renderVessel'
import checkerImg from '@images/textures/checker.png'

const windmillOBJ = `${MODELSRESOURCEPATH}/windmill/windmill_001.obj`
const windmillMTL = `${MODELSRESOURCEPATH}/windmill/windmill_001.mtl`

export default defineComponent({
  name: 'ThreeJsWindmill',
  setup() {
    const glVessel = ref()
    const renderer = shallowRef()
    const progress = ref(0)
    const progressTitle = ref('')
    
    const loaderManager = new THREE.LoadingManager()
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 3/2, 0.1, 500)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5)
    const hemisphereLight = new THREE.HemisphereLight(0xB1E1FF, 0xB97A20, 2)
    camera.position.set(0, 10, 35)
    directionalLight.position.set(0, 10, 0)
		directionalLight.target.position.set(- 5, 0, 0)
    directionalLight.castShadow = true

    onMounted(() => {
      const planeSize = 40
      const planeGeometry = new THREE.PlaneGeometry(planeSize, planeSize)
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

      const mtlLoader = new MTLLoader(loaderManager)
      mtlLoader.load(windmillMTL, (mtl) => {
        mtl.preload()
        const objLoader = new OBJLoader(loaderManager)
        objLoader.setMaterials(mtl)
        objLoader.load(windmillOBJ, (root) => {
          scene.add(root)
        })
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

      const controls = new OrbitControls(camera, glVessel.value)
      controls.target.set(0, 5, 0)
      controls.update()

      requestAnimationFrame(render)
    })

    const render = () => {
      renderer.value.render(scene, camera)

      requestAnimationFrame(render)
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
