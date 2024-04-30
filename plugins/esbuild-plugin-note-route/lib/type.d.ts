import type { RouteRecordRaw } from "vue-router"
import type { Component } from 'vue'

interface PathInfo {
  path: string,
  label: string,
  isDir: string
}

declare const noteRoutes: RouteRecordRaw[]
declare const pathInfo: PathInfo[]
declare const DocTree: Component

export default noteRoutes
export { pathInfo, DocTree }