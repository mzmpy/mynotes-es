import {
  init_vue_jsxImportSource,
  init_vue_runtime_esm_bundler,
  inject
} from "./chunk-ULNEMCHF.js";

// node_modules/@mdx-js/vue/lib/index.js
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();
function useMDXComponents() {
  return inject("$mdxComponents", {});
}

// node_modules/@mdx-js/vue/index.js
init_vue_jsxImportSource();

export {
  useMDXComponents
};
