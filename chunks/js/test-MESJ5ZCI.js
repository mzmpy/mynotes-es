import {
  ElInput
} from "./chunk-LECAHK65.js";
import {
  Fragment,
  defineComponent,
  h,
  init_vue_jsxImportSource,
  init_vue_runtime_esm_bundler,
  ref
} from "./chunk-2QG72R3B.js";

// src/views/test/index.js
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();
console.log("TestView");
var test_default = defineComponent({
  name: "TestView",
  components: { ElInput },
  setup(props, ctx) {
    const text = ref("");
    const onInput = (val) => {
      text.value = val;
    };
    return () => {
      return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("div", null, "TestView ", text.value), /* @__PURE__ */ h(ElInput, { style: { width: "300px!important" }, modelValue: text.value, onInput, placeholder: "Hello" }));
    };
  }
});
export {
  test_default as default
};
