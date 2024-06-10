import { defineComponent, ref, onMounted, shallowRef } from 'vue'
import styles from './index.module.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import RenderVessel from '@mdx-utils/renderVessel'

const ferrariCarGlb = `${MODELSRESOURCEPATH}/ferrariCar/ferrari.glb`

export default defineComponent({
  name: 'ThreeJsFerrariCar',
  setup() {
    const glVessel = ref()
    const renderer = shallowRef()
    const progress = ref(0)
    const progressTitle = ref('')
    let carModel
    let startFrameTime
    let staticDisplay = false

    const getPoints = (x) => {
      return new THREE.Vector3(x, 0, x * Math.tan(0.1 * Math.PI))
    }
    
    const loaderManager = new THREE.LoadingManager()
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 3/2, 0.1, 5000)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5)
    const hemisphereLight = new THREE.HemisphereLight(0xB1E1FF, 0xB97A20, 2)
    const lineStart = getPoints(-70)
    const lineEnd = getPoints(0)
    camera.position.set(0, 30, 105)
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
      const lineGeometry = new THREE.BufferGeometry()
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xff5733, lineWidth: 10
      })
      lineGeometry.setFromPoints([lineStart, lineEnd])
      const line = new THREE.Line(lineGeometry, lineMaterial)

      plane.rotation.x = -0.5 * Math.PI
      plane.receiveShadow = true
      scene.add(plane, line)

      const gltfLoader = new GLTFLoader(loaderManager)
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath(DRACOPATH)
      gltfLoader.setDRACOLoader(dracoLoader)
      gltfLoader.load(ferrariCarGlb, (gltf) => {
        const root = gltf.scene
        carModel = root.children[0]
        carModel.scale.multiplyScalar(5)
        carModel.rotation.y = -0.6 * Math.PI
        carModel.position.copy(lineStart)

        const detailsMaterial = new THREE.MeshStandardMaterial( {
          color: 0xffbd63, metalness: 1.0, roughness: 0.5
        } )
        carModel.getObjectByName('rim_fl').material = detailsMaterial
        carModel.getObjectByName('rim_fr').material = detailsMaterial
        carModel.getObjectByName('rim_rl').material = detailsMaterial
        carModel.getObjectByName('rim_rr').material = detailsMaterial
        carModel.getObjectByName( 'trim' ).material = detailsMaterial
        carModel.getObjectByName('steering_centre').material = new THREE.MeshStandardMaterial({
          color: 0xc0c0c0, roughness: 0.25, metalness: 0.45
        })
        carModel.getObjectByName('body').material = new THREE.MeshPhysicalMaterial({
          color: 0x5b5f79, metalness: 1.0, roughness: 0.7, clearcoat: 1.0, clearcoatRoughness: 0.1
        })
        carModel.getObjectByName('glass').material = new THREE.MeshPhysicalMaterial({
          color: 0xffffff, metalness: 0.15, roughness: 0.0, transmission: 1.0
        })
        carModel.getObjectByName('grills').material = new THREE.MeshPhysicalMaterial({
          color: 0xffffff, metalness: 1.0, roughness: 0.7, clearcoat: 1.0, clearcoatRoughness: 0.1
        })

        scene.add(carModel)

        requestAnimationFrame(render)
      })

      const render = (time) => {
        if(!startFrameTime) startFrameTime = time
  
        renderer.value.render(scene, camera)
  
        const ratio = (time - startFrameTime) / 10000
        if(ratio <= 1) {
          carModel.position.copy(getPoints(-70 * (1 - ratio)))
          carModel.getObjectByName('wheel_fl').rotation.x = -time * 0.007
          carModel.getObjectByName('wheel_fr').rotation.x = -time * 0.007
          carModel.getObjectByName('wheel_rl').rotation.x = -time * 0.007
          carModel.getObjectByName('wheel_rr').rotation.x = -time * 0.007
        } else {
          if(!staticDisplay) {
            staticDisplay = true
            carModel.position.copy(getPoints(0))
            camera.position.set(15, 30, 22.5)

            carModel.traverse((obj) => {
              if(obj instanceof THREE.Mesh) {
                obj.castShadow = true
                obj.receiveShadow = true
                obj.geometry?.computeVertexNormals()
              }
            })

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
          }
        }
        controls.update()
  
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
