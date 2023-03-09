import {
  useMDXComponents
} from "./chunk-WAOPOIZX.js";
import {
  defineComponent,
  h,
  init_vue_jsxImportSource,
  init_vue_runtime_esm_bundler,
  vue_jsxImportSource_default
} from "./chunk-72A4QWRM.js";

// MDX_TO_VUE_COMPONENT:/home/runner/work/mynotes-es/mynotes-es/src/components/mdx/.docs/vue/vue-router@4.mdx
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();

// src/components/mdx/.docs/vue/vue-router@4.mdx
init_vue_jsxImportSource();
init_vue_jsxImportSource();
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    ul: "ul",
    li: "li",
    code: "code"
  }, useMDXComponents(), props.components);
  return vue_jsxImportSource_default.h(vue_jsxImportSource_default.Fragment, null, vue_jsxImportSource_default.h(_components.h1, null, "vue-router@4"), "\n", vue_jsxImportSource_default.h(_components.ul, null, "\n", vue_jsxImportSource_default.h(_components.li, null, "\u5728\u5355\u9875\u5E94\u7528\uFF08", vue_jsxImportSource_default.h(_components.code, null, "SPA"), "\uFF09\u4E2D\uFF0C\u5F53\u6211\u4EEC\u76F4\u63A5\u8BBF\u95EE\u67D0\u4E2A\u8DEF\u7531\u65F6\uFF08\u5373\u901A\u8FC7\u8F93\u5165", vue_jsxImportSource_default.h(_components.code, null, "url"), "\u5E76\u56DE\u8F66\uFF09\uFF0C", vue_jsxImportSource_default.h(_components.code, null, "vue-router"), "\u4F1A\u4ECE\u6839\u8DEF\u7531\u5F00\u59CB\u9010\u6B65\u5BFC\u822A\u5230\u76EE\u6807\u8DEF\u7531\u3002"), "\n"));
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? vue_jsxImportSource_default.h(MDXLayout, props, vue_jsxImportSource_default.h(_createMdxContent, props)) : _createMdxContent(props);
}
var vue_router_4_default = MDXContent;

// MDX_TO_VUE_COMPONENT:/home/runner/work/mynotes-es/mynotes-es/src/components/mdx/.docs/vue/vue-router@4.mdx
var vue_router_4_default2 = defineComponent({
  name: "MDX_VUE-ROUTER@4",
  components: { MDXComponentContext: vue_router_4_default },
  setup(props, ctx) {
    return () => /* @__PURE__ */ h("div", { class: "markdown-body", style: "padding: 15px;" }, /* @__PURE__ */ h(vue_router_4_default, { ...ctx.attrs }));
  }
});
export {
  vue_router_4_default2 as default
};
