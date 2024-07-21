import { decode } from 'he'

let __innerHTML
let document = {
  createElement(tag) {
    return {
      set innerHTML(val) {
        __innerHTML = val
      },
      get innerHTML() {
        return __innerHTML
      },
      get textContent() {
        return decode(__innerHTML)
      }
    }
  }
}

globalThis.document = document
