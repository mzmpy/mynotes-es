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

// MDX_TO_VUE_COMPONENT:/home/runner/work/mynotes-es/mynotes-es/src/components/mdx/.docs/test.mdx
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();

// src/components/mdx/.docs/test.mdx
init_vue_jsxImportSource();
init_vue_jsxImportSource();
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, useMDXComponents(), props.components);
  return vue_jsxImportSource_default.h(_components.h1, null, "Hello World!");
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? vue_jsxImportSource_default.h(MDXLayout, props, vue_jsxImportSource_default.h(_createMdxContent, props)) : _createMdxContent(props);
}
var test_default = MDXContent;

// MDX_TO_VUE_COMPONENT:/home/runner/work/mynotes-es/mynotes-es/src/components/mdx/.docs/test.mdx
var test_default2 = defineComponent({
  name: "MDX_TEST",
  components: { MDXComponentContext: test_default },
  setup(props, ctx) {
    return () => /* @__PURE__ */ h(test_default, { ...ctx.attrs });
  }
});
export {
  test_default2 as default
};
