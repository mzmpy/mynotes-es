import {
  useMDXComponents
} from "./chunk-PWQKKYWS.js";
import {
  defineComponent,
  h,
  init_vue_jsxImportSource,
  init_vue_runtime_esm_bundler,
  vue_jsxImportSource_default
} from "./chunk-R2IQH4YB.js";

// MDX_TO_VUE_COMPONENT:/home/runner/work/mynotes-es/mynotes-es/src/components/mdx/.docs/tes1.mdx
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();

// src/components/mdx/.docs/tes1.mdx
init_vue_jsxImportSource();
init_vue_jsxImportSource();
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, useMDXComponents(), props.components);
  return vue_jsxImportSource_default.h(_components.h1, null, "\u4F60\u597D\u4F60\u597D\u4F60\u597D");
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? vue_jsxImportSource_default.h(MDXLayout, props, vue_jsxImportSource_default.h(_createMdxContent, props)) : _createMdxContent(props);
}
var tes1_default = MDXContent;

// MDX_TO_VUE_COMPONENT:/home/runner/work/mynotes-es/mynotes-es/src/components/mdx/.docs/tes1.mdx
var tes1_default2 = defineComponent({
  name: "MDX_TES1",
  components: { MDXComponentContext: tes1_default },
  setup(props, ctx) {
    return () => /* @__PURE__ */ h(tes1_default, { ...ctx.attrs });
  }
});
export {
  tes1_default2 as default
};
