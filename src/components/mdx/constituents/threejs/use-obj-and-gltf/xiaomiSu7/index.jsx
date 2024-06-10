import { defineComponent, ref, onMounted, shallowRef } from 'vue'
import styles from './index.module.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import RenderVessel from '@mdx-utils/renderVessel'

const xiaomiSu7CarGlb = `${MODELSRESOURCEPATH}/xiaomiSu7/xiaomiSu7.glb`

export default defineComponent({
  name: 'ThreeJsXiaomiSu7Car',
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
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    directionalLight.position.set(20, 50, 0)
    directionalLight.castShadow = true

    onMounted(() => {
      const radius = 1000
      const planeGeometry = new THREE.CircleGeometry(radius)
      const controls = new OrbitControls(camera, glVessel.value)
      
      const planeMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x505257, roughness: 0.7, metalness: 0.3
      })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)

      plane.rotation.x = -0.5 * Math.PI
      plane.receiveShadow = true
      scene.add(plane)

      const gltfLoader = new GLTFLoader(loaderManager)
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath(DRACOPATH)
      gltfLoader.setDRACOLoader(dracoLoader)
      gltfLoader.load(xiaomiSu7CarGlb, (gltf) => {
        const root = gltf.scene
        const carModel = root.children[0]
        
        root.traverse((obj) => {
          if(obj instanceof THREE.Mesh) {
            obj.castShadow = true
            obj.receiveShadow = true
            obj.geometry?.computeVertexNormals()
          }
        })
        carModel.scale.multiplyScalar(5)
        carModel.rotation.z = 0.6 * Math.PI
        carModel.position.set(0, 0.1, 0)

        const box = new THREE.Box3().setFromObject(carModel)
        const boxSize = box.getSize(new THREE.Vector3())
        const boxCenter = box.getCenter(new THREE.Vector3())
        directionalLight.shadow.camera.left = boxCenter.x - boxSize.x / 2
        directionalLight.shadow.camera.right = boxCenter.x + boxSize.x / 2
        directionalLight.shadow.camera.top = (boxCenter.z + boxSize.z / 2) * 2.5
        directionalLight.shadow.camera.bottom = (boxCenter.z - boxSize.z / 2) * 2.5
        directionalLight.shadow.camera.updateProjectionMatrix()

        // const cameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
        // scene.add(cameraHelper)

        scene.add(carModel)
        controls.update()

        requestAnimationFrame(render)
      })

      const render = () => {
        renderer.value.render(scene, camera)
  
        requestAnimationFrame(render)
      }

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
      controls.maxDistance = 300
      controls.maxPolarAngle = 1 / 2 * Math.PI
      controls.update()
    })

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
