export default function createStore(options={}) {
  const capsule = new Capsule()
  capsule.batchSet(options)

  return capsule.store
}

class Capsule {
  #store

  constructor() {
    this.#store = {}
  }

  batchSet(options={}) {
    if(!(options instanceof Object)) {
      throw new Error('[batchSet]: options need to be as an Object')
    }

    for(const key in options) {
      this.#store[key] = options[key]
    }
  }

  get store() {
    return this.#store
  }
}
