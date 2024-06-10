import { defineComponent, ref, shallowRef, onMounted } from 'vue'
import styles from './index.module.css'
import * as THREE from 'three'
import RenderVessel from '@mdx-utils/renderVessel'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'

export default defineComponent({
  name: 'ThreeJsScene',
  setup() {
    const glVessel = ref()
    const sideBar = ref()
    const animation = ref(true)
    const localFrameTime = ref(0)
    const renderer = shallowRef()
    const sphereGeometry = new THREE.SphereGeometry(1, 6, 6)
    const objects = []

    const scene = new THREE.Scene()

    const solarSystem = new THREE.Object3D()
    objects.push(solarSystem)
    scene.add(solarSystem)

    const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xffff00 })
    const sun = new THREE.Mesh(sphereGeometry, sunMaterial)
    sun.scale.set(5, 5, 5)
    solarSystem.add(sun)

    const earthOrbit = new THREE.Object3D()
    earthOrbit.position.x = 15
    objects.push(earthOrbit)
    solarSystem.add(earthOrbit)

    const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x2233ff, emissive: 0x112244 })
    const earth = new THREE.Mesh(sphereGeometry, earthMaterial)
    earthOrbit.add(earth)

    const moonOrbit = new THREE.Object3D()
    moonOrbit.position.x = 2
    objects.push(moonOrbit)
    earthOrbit.add(moonOrbit)

    const moonMaterial = new THREE.MeshPhongMaterial({ color: 0x888888, emissive: 0x222222 })
    const moon = new THREE.Mesh(sphereGeometry, moonMaterial)
    moon.scale.set(0.5, 0.5, 0.5)
    moonOrbit.add(moon)

    const light = new THREE.PointLight(0xffffff, 300)
    scene.add(light)

    const camera = new THREE.PerspectiveCamera(45, 5/3, 0.1, 1000)
    camera.position.set(0, 50, 0)
    camera.up.set(0, 0, 1)
    camera.lookAt(0, 0, 0)

    onMounted(() => {
      const controllerGui = new GUI({ container: sideBar.value })
      makeAxisGrid(controllerGui, solarSystem, 'solarSystem', 26)
      makeAxisGrid(controllerGui, sun, 'sun')
      makeAxisGrid(controllerGui, earthOrbit, 'earthOrbit')
      makeAxisGrid(controllerGui, earth, 'earth')
      makeAxisGrid(controllerGui, moonOrbit, 'moonOrbit')
      makeAxisGrid(controllerGui, moon, 'moon')

      renderer.value = new THREE.WebGLRenderer({ antialias: true, canvas: glVessel.value })
      renderer.value.setClearColor(0x000000, 1)
      renderer.value.setPixelRatio(10)

      requestAnimationFrame(render)
    })

    const makeAxisGrid = (gui, node, label, units) => {
      const helper = new GridHelper( node, units )
      gui.add(helper, 'visible').name(label)
    }

    const render = (time) => {
      if(localFrameTime.value === 0) localFrameTime.value = time * 0.001
      else {
        localFrameTime.value += 1 / 60
      }

      objects.forEach((obj) => {
        obj.rotation.y = localFrameTime.value
      })
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
            canvas: () => <canvas class={styles('gl-canvas')} ref={glVessel}></canvas>,
            sideBar: () => <div ref={sideBar}></div>
          }}
        </RenderVessel>
      </>
    }
  }
})

class GridHelper {
  #grid
  #visible = false

  constructor(node, size=10, divisions=10) {
    const grid = new THREE.GridHelper(size, divisions)

    grid.material.depthTest = false
    grid.renderOrder = 1
    node.add(grid)
    this.#grid = grid
    this.#grid.visible = false
  }

  get visible() {
    return this.#visible
  }

  set visible(val) {
    this.#visible = val
    this.#grid.visible = val
  }
}
