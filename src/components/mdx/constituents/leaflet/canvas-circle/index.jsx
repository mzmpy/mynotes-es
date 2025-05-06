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
  name: 'CanvasCircle',
  setup() {
    const mapVesselRef = ref()
    const origin = [39.910088, 116.401601]
    let lmap
    let animationFrame
    let startTime

    onMounted(() => {
      lmap = L.map(mapVesselRef.value, {
        zoom: 12,
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
        const size = this._bounds.getSize()
        const dpr = L.Browser.retina ? 2 : 1
        canvas.width = dpr * size.x
        canvas.height = dpr * size.y
        canvas.style.width = size.x + "px"
        canvas.style.height = size.y + "px"
        if (L.Browser.retina) {
          ctx.scale(dpr, dpr)
        }

        const originCoord = [origin[1], origin[0]]
        const desCoord = getDestination(originCoord, 5000, 0, { units: 'meters' }).geometry.coordinates
        const originPixel = lmap.latLngToContainerPoint({ lat: originCoord[1], lng: originCoord[0] })
        const desPixel = lmap.latLngToContainerPoint({ lat: desCoord[1], lng: desCoord[0] })
        const pixelRadius = desPixel.distanceTo(originPixel)
        const zoom = lmap.getZoom()
        const radius = pixelRadius / Math.pow(2, zoom - 10)
        const steps = 250
        ctx.lineWidth = pixelRadius / steps

        const sigmoid = (x, k = 30) => {
          x = Math.max(0, Math.min(1, x))
          return 1 / (1 + Math.exp(-k * (x - 0.975)))
        }
        const drawCircleArea = (i, offset) => {
          const thredhold = offset % radius
          const radiusOfCurrentStep = i * radius / steps
          const opacity = radiusOfCurrentStep > thredhold ? 0 : radiusOfCurrentStep / thredhold
          
          ctx.beginPath()
          ctx.strokeStyle = `rgba(251, 30, 10, ${sigmoid(opacity)})`
          ctx.arc(originPixel.x, originPixel.y, i * pixelRadius / steps, 0, Math.PI * 2)
          ctx.stroke()
          ctx.closePath()
        }

        const draw = (phaseOffset=0) => {
          for(let i = 0; i < steps; i++) {
            drawCircleArea(i, phaseOffset)
            drawCircleArea(i, phaseOffset - radius / 2)
          }
        }
        const animation = (time) => {
          const prev = ctx.globalCompositeOperation

          ctx.globalCompositeOperation = 'destination-in'
          ctx.globalAlpha = 0.975
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.globalCompositeOperation = prev

          startTime = startTime ? startTime : time
          draw((time - startTime) / 200)
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
