import { defineComponent, ref, onMounted, shallowRef } from 'vue'
import styles from './index.module.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
import RenderVessel from '@mdx-utils/renderVessel'
import checkerImg from '@images/textures/checker.png'

export default defineComponent({
  name: 'ThreeJsLightCameraShadowSimple',
  setup() {
    const glVessel = ref()
    const sideBar = ref()
    const renderer = shallowRef()
    const loaderManager = new THREE.LoadingManager()
    const loader = new THREE.TextureLoader(loaderManager)
    const progress = ref(0)
    const progressTitle = ref('')
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 3/2, 0.1, 500)
    const light = new THREE.PointLight(0xffffff, 300)
    camera.position.set(0, 10, 35)
    light.position.set(0, 10, 0)
    light.castShadow = true

    const lightHelper = new THREE.PointLightHelper(light)
    scene.add(lightHelper)

    onMounted(() => {
      const planeSize = 40
      const planeGeometry = new THREE.PlaneGeometry(planeSize, planeSize)
      const planeMaterial = new THREE.MeshPhongMaterial({
        map: loadTexture(checkerImg, planeSize),
        side: THREE.DoubleSide
      })

      const radius = 3
      const sphereGeometry = new THREE.SphereGeometry(radius, 64, 64)
      const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      sphere.position.set(-7, 5, 0)
      sphere.castShadow = true
      sphere.receiveShadow = true

      const cubeSize = 6
      const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
      const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xffc64d })
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      cube.position.set(7, 3, -5)
      cube.castShadow = true
      cube.receiveShadow = true

      const wallSize = 30
      const wallGeometry = new THREE.BoxGeometry(wallSize, wallSize, wallSize)
      const wallMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc, side: THREE.BackSide })
      const wall = new THREE.Mesh(wallGeometry, wallMaterial)
      wall.position.set(0, wallSize / 2 - 0.1, 0)
      wall.receiveShadow = true

      const gui = new GUI({ container: sideBar.value })
      gui.addColor(new ColorGUIHelper(light, 'color'), 'value').name('color')
      gui.add(light, 'intensity', 0, 500)
      const folder = gui.addFolder('light position')
      folder.add(light.position, 'x', -10, 10).onChange(onLightPosChange)
      folder.add(light.position, 'y', 0, 10).onChange(onLightPosChange)
      folder.add(light.position, 'z', -10, 10).onChange(onLightPosChange)
      folder.open()
      
      renderer.value = new THREE.WebGLRenderer({ antialias: true, canvas: glVessel.value })
      renderer.value.shadowMap.enabled = true
      renderer.value.setPixelRatio(10)
      
      scene.add(light, sphere, cube, wall)
      scene.background = new THREE.Color(0x000000)

      const controls = new OrbitControls(camera, glVessel.value)
      controls.target.set(0, 5, 0)
      controls.update()

      loaderManager.onLoad = () => {
        const plane = new THREE.Mesh(planeGeometry, planeMaterial)

        plane.rotation.x = - 0.5 * Math.PI
        plane.receiveShadow = true
        scene.add(plane)

        requestAnimationFrame(render)
      }

      loaderManager.onProgress = (url, loaded, total) => {
        const percentage = Math.round(loaded / total * 100)

        console.log(`loaded ${percentage}%`, url)
        progressTitle.value = `正在加载资源...`
        progress.value = percentage
      }
    })

    const render = () => {
      renderer.value.render(scene, camera)

      requestAnimationFrame(render)
    }

    const loadTexture = (url, size) => {
      const texture = loader.load(url)
      texture.colorSpace = THREE.SRGBColorSpace
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.magFilter = THREE.NearestFilter
      texture.repeat.set(size / 2, size / 2)
      return texture
    }

    const onLightPosChange = () => {}

    return () => {
      return <>
        <RenderVessel showAnimation={false} progress={progress.value} progressTitle={progressTitle.value}>
          {{
            canvas: () => <canvas class={styles('gl-canvas')} ref={glVessel}></canvas>,
            sideBar: () => <div ref={sideBar}></div>
          }}
        </RenderVessel>
      </>
    }
  }
})

class ColorGUIHelper {
  constructor( object, prop ) {
    this.object = object
    this.prop = prop
  }

  get value() {
    return `#${this.object[ this.prop ].getHexString()}`

  }

  set value( hexString ) {
    this.object[ this.prop ].set( hexString )
  }

}
