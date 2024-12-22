import {
  defineComponent,
  ref,
  onMounted
} from 'vue'
import * as L from 'leaflet'
import { customLayer } from 'leaflet-customlayer/dist/Leaflet.CustomLayer.esm.js'
import { destination as getDestination } from '@turf/destination'
import 'leaflet.chinatmsproviders'

import 'leaflet/dist/leaflet.css'
import styles from './index.module.css'

export default defineComponent({
  name: 'CanvasRadar',
  setup() {
    const mapVesselRef = ref()
    const origin = [39.910088, 116.401601]
    let lmap
    let animationFrame
    let startTime

    onMounted(() => {
      lmap = L.map(mapVesselRef.value, {
        zoom: 13,
        center: origin,
        zoomAnimation: true
      })

      L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
        minZoom: 3,
        maxZoom: 18
      }).addTo(lmap)

      L.marker(origin).addTo(lmap)

      const canvasLayer = customLayer({
        container: document.createElement('canvas'),
        padding: 0,
        minZoom: 1,
        maxZoom: 18,
        opacity: 0.5
      })
      canvasLayer.on('layer-render', function() {
        console.log('======= layer render =======', animationFrame)
        if(animationFrame) L.Util.cancelAnimFrame(animationFrame)

        const canvas = this.getContainer()
        const ctx = canvas.getContext("2d")
        const m = L.Browser.retina ? 2 : 1
        const size = this._bounds.getSize()
        const dpr = L.Browser.retina ? 2 : 1
        canvas.width = m * size.x
        canvas.height = m * size.y
        canvas.style.width = size.x + "px"
        canvas.style.height = size.y + "px"
        if (L.Browser.retina) {
          ctx.scale(dpr, dpr)
        }

        const originCoord = [origin[1], origin[0]]
        const desCoord = getDestination(originCoord, 5000, 0, { units: 'meters' }).geometry.coordinates
        const originPixel = lmap.latLngToContainerPoint({ lat: originCoord[1], lng: originCoord[0] })
        const desPixel = lmap.latLngToContainerPoint({ lat: desCoord[1], lng: desCoord[0] })
        const radius = desPixel.distanceTo(originPixel)

        const draw = (angleOffset=0) => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)

          const sang = 0 + Math.PI / 180 * angleOffset
          const eang = Math.PI / 180 * (120 + angleOffset)
          const step = 100
          
          for(let i = 0; i < step; i++) {
            ctx.beginPath()
            ctx.fillStyle = `rgba(80, 122, 252, ${1 - (i + 1) / step})`
            ctx.moveTo(originPixel.x, originPixel.y)
            ctx.arc(
              originPixel.x,
              originPixel.y,
              radius,
              eang - (eang - sang) / step * (i + 1),
              eang - (eang - sang) / step * i,
              false
            )
            ctx.fill()
            ctx.closePath()
          }
        }
        const animation = (time) => {
          startTime = startTime ? startTime : time
          draw((time - startTime) / 5)
          animationFrame = L.Util.requestAnimFrame(animation)
        }

        animationFrame = L.Util.requestAnimFrame(animation)
      })
      canvasLayer.addTo(lmap)
    })

    return () => {
      return <>
        <div class={styles('map-container')} ref={mapVesselRef}></div>
      </>
    }
  }
})
