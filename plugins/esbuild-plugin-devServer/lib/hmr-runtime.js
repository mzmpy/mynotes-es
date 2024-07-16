if (!window.__HMR__) {
  window.__HMR__ = {
    contexts: {},
  };

  const socketURL = 'ws://localhost:8080'
  const socket = (window.__HMR__.socket = new WebSocket(socketURL))

  socket.addEventListener('open', () => {
    console.log('Websocket connected.')
  })
  
  socket.addEventListener('message', async (event) => {
    const data = JSON.parse(event.data)
    if(data.type === 'reload') {
      window.location.reload()
      socket.send('[RELOAD] Reloaded.')
    } else if(data.type === 'hmr') {
      if(!data.HMR_CONTEXT?.length) return

      let ANY_ACCEPTED = false
      const __hmrUrlSet = new Set()
      
      for(const ctx of data.HMR_CONTEXT) {
        if(window.__HMR__.contexts[ctx.__hmrId]) {
          if(!ctx.__hmrUrl || __hmrUrlSet.has(ctx.__hmrUrl)) continue
          __hmrUrlSet.add(ctx.__hmrUrl)
          if(ctx.isEntry) window.__APP__?.unmount()

          let accepted
          try {
            const module = await import(ctx.__hmrUrl + "?t=" + Date.now())
            accepted = window.__HMR__.contexts[ctx.__hmrId].emit(module)
          } catch(err) {
            if(err) {
              console.log('[HMR error]', err)
              window.location.reload()
              socket.send('[HMR] Reloaded.')
            }
          }

          if(accepted) {
            console.log(`[HMR] Updated accepted by ${ctx.__hmrId}.`)
            ANY_ACCEPTED = true
          }
        }
      }

      if(ANY_ACCEPTED) {
        socket.send('HMR accepted.')
      } else {
        console.log('[HMR] Updated rejected, reloading ...')
        window.location.reload()
        socket.send('[HMR] Reloaded.')
      }
    }
  })
}

export function createHotContext(__hmrId) {
  let disposed = false
  let callback = undefined

  const hot = {
    accept(cb) {
      if(disposed) throw new Error('[import.meta.hot]: accept() called after dispose().')
      // avoid accepting repeatedly
      if(callback) throw new Error('[import.meta.hot]: accept() already called.')

      callback = (ins) => {
        cb(__hmrId, ins)
      }
    },
    dispose() {
      disposed = true
      callback = undefined
    },
    emit(module) {
      if(disposed) throw new Error('[import.meta.hot]: accept() called after dispose().')

      if(callback) {
        if(module?.default instanceof Object && (module.default?.setup instanceof Function || module.default.render instanceof Function)) {
          callback(module.default)
          return true
        } else if(typeof module === 'object') return true
      }

      return false
    }

  }

  // set or reset
  if(window.__HMR__.contexts[__hmrId]) {
    window.__HMR__.contexts[__hmrId].dispose()
    window.__HMR__.contexts[__hmrId] = undefined
  }
  window.__HMR__.contexts[__hmrId] = hot

  return hot
}