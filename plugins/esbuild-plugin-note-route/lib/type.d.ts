import type { RouteRecordRaw } from "vue-router"
import type { Component } from 'vue'

interface PathInfo {
  path: string,
  label: string
}

const noteRoutes: RouteRecordRaw[]
const pathInfo: PathInfo[]
const DocTree: Component

export default noteRoutes
export { pathInfo, DocTree }