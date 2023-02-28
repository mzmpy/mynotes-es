import {
  ElInput
} from "./chunk-7T2FLUZB.js";
import {
  Fragment,
  defineComponent,
  h,
  init_vue_jsxImportSource,
  init_vue_runtime_esm_bundler,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  ref
} from "./chunk-R2IQH4YB.js";

// src/views/test/index.js
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();
console.log("TestView");
var test_default = defineComponent({
  name: "TestView",
  components: { ElInput },
  setup(props, ctx) {
    const inputRef = ref();
    onBeforeMount(() => {
      console.log("[TestView]: BeforeMounted! But can not get [inputRef] yet: ");
      console.log(inputRef.value);
    });
    onMounted(() => {
      console.log("[TestView]: Mounted! And got [inputRef]: ");
      console.log(inputRef.value);
    });
    onBeforeUpdate(() => {
      console.log("[TestView]: BeforeUpdated!");
    });
    onUpdated(() => {
      console.log("[TestView]: Updated!");
    });
    const text = ref("");
    const onInput = (val) => {
      text.value = val;
    };
    return () => {
      return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("div", null, "TestView ", text.value), /* @__PURE__ */ h(ElInput, { ref: inputRef, style: { width: "300px!important" }, modelValue: text.value, onInput, placeholder: "Hello" }));
    };
  }
});
export {
  test_default as default
};
