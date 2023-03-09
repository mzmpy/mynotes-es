import {
  useMDXComponents
} from "./chunk-WAOPOIZX.js";
import {
  ElAffix,
  ElAlert,
  ElAside,
  ElAutoResizer,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckTag,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElCountdown,
  ElDatePicker,
  ElDescriptions,
  ElDescriptionsItem,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInfiniteScroll,
  ElInput,
  ElInputNumber,
  ElLink,
  ElLoading,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElOption,
  ElOptionGroup,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopoverDirective,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElResult,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElSelectV2,
  ElSkeleton,
  ElSkeletonItem,
  ElSlider,
  ElSpace,
  ElStatistic,
  ElStep,
  ElSteps,
  ElSubMenu,
  ElSwitch,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElUpload,
  _export_sfc,
  buildProps,
  composeEventHandlers,
  composeRefs,
  definePropType,
  ensureOnlyChild,
  isClient,
  isNumber,
  isPropAbsent,
  keysOf,
  pick_default,
  provideGlobalConfig,
  require_dayjs_min,
  unrefElement,
  useId,
  useNamespace,
  useTimeoutFn,
  useZIndex,
  withInstall
} from "./chunk-V636POLK.js";
import {
  Fragment,
  Teleport,
  Transition,
  __toESM,
  computed2 as computed,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  guardReactiveProps,
  h,
  init_vue_jsxImportSource,
  init_vue_runtime_esm_bundler,
  inject,
  isRef,
  mergeProps,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  provide,
  reactive,
  ref,
  renderSlot,
  toDisplayString,
  toRefs,
  unref,
  vShow,
  vue_jsxImportSource_default,
  watch,
  watchEffect,
  withCtx,
  withDirectives
} from "./chunk-72A4QWRM.js";

// MDX_TO_VUE_COMPONENT:/home/runner/work/mynotes-es/mynotes-es/src/components/mdx/.docs/vue/vue@3.mdx
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();

// src/components/mdx/.docs/vue/vue@3.mdx
init_vue_jsxImportSource();
init_vue_jsxImportSource();

// src/components/mdx/constituents/vue/vueDirectives.js
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();

// node_modules/element-plus/es/index.mjs
init_vue_jsxImportSource();

// node_modules/element-plus/es/defaults.mjs
init_vue_jsxImportSource();

// node_modules/element-plus/es/make-installer.mjs
init_vue_jsxImportSource();

// node_modules/element-plus/es/constants/key.mjs
init_vue_jsxImportSource();
var INSTALLED_KEY = Symbol("INSTALLED_KEY");

// node_modules/element-plus/es/hooks/use-floating/index.mjs
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();

// node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
init_vue_jsxImportSource();

// node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
init_vue_jsxImportSource();
function t(t2) {
  return t2.split("-")[1];
}
function e(t2) {
  return "y" === t2 ? "height" : "width";
}
function n(t2) {
  return t2.split("-")[0];
}
function o(t2) {
  return ["top", "bottom"].includes(n(t2)) ? "x" : "y";
}
function i(i3, r3, a3) {
  let { reference: l3, floating: s3 } = i3;
  const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, m3 = o(r3), u3 = e(m3), g3 = l3[u3] / 2 - s3[u3] / 2, d3 = "x" === m3;
  let p2;
  switch (n(r3)) {
    case "top":
      p2 = { x: c3, y: l3.y - s3.height };
      break;
    case "bottom":
      p2 = { x: c3, y: l3.y + l3.height };
      break;
    case "right":
      p2 = { x: l3.x + l3.width, y: f3 };
      break;
    case "left":
      p2 = { x: l3.x - s3.width, y: f3 };
      break;
    default:
      p2 = { x: l3.x, y: l3.y };
  }
  switch (t(r3)) {
    case "start":
      p2[m3] -= g3 * (a3 && d3 ? -1 : 1);
      break;
    case "end":
      p2[m3] += g3 * (a3 && d3 ? -1 : 1);
  }
  return p2;
}
var r = async (t2, e2, n3) => {
  const { placement: o3 = "bottom", strategy: r3 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = a3.filter(Boolean), c3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e2));
  let f3 = await l3.getElementRects({ reference: t2, floating: e2, strategy: r3 }), { x: m3, y: u3 } = i(f3, o3, c3), g3 = o3, d3 = {}, p2 = 0;
  for (let n4 = 0; n4 < s3.length; n4++) {
    const { name: a4, fn: h3 } = s3[n4], { x: y2, y: x2, data: w2, reset: v3 } = await h3({ x: m3, y: u3, initialPlacement: o3, placement: g3, strategy: r3, middlewareData: d3, rects: f3, platform: l3, elements: { reference: t2, floating: e2 } });
    m3 = null != y2 ? y2 : m3, u3 = null != x2 ? x2 : u3, d3 = { ...d3, [a4]: { ...d3[a4], ...w2 } }, v3 && p2 <= 50 && (p2++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f3 = true === v3.rects ? await l3.getElementRects({ reference: t2, floating: e2, strategy: r3 }) : v3.rects), { x: m3, y: u3 } = i(f3, g3, c3)), n4 = -1);
  }
  return { x: m3, y: u3, placement: g3, strategy: r3, middlewareData: d3 };
};
function a(t2) {
  return "number" != typeof t2 ? function(t3) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t3 };
  }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
}
function l(t2) {
  return { ...t2, top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height };
}
var c = Math.min;
var f = Math.max;
function m(t2, e2, n3) {
  return f(t2, c(e2, n3));
}
var u = (n3) => ({ name: "arrow", options: n3, async fn(i3) {
  const { element: r3, padding: l3 = 0 } = n3 || {}, { x: s3, y: c3, placement: f3, rects: u3, platform: g3, elements: d3 } = i3;
  if (null == r3)
    return {};
  const p2 = a(l3), h3 = { x: s3, y: c3 }, y2 = o(f3), x2 = e(y2), w2 = await g3.getDimensions(r3), v3 = "y" === y2, b3 = v3 ? "top" : "left", R2 = v3 ? "bottom" : "right", A2 = v3 ? "clientHeight" : "clientWidth", P2 = u3.reference[x2] + u3.reference[y2] - h3[y2] - u3.floating[x2], T3 = h3[y2] - u3.reference[y2], O3 = await (null == g3.getOffsetParent ? void 0 : g3.getOffsetParent(r3));
  let E2 = O3 ? O3[A2] : 0;
  E2 && await (null == g3.isElement ? void 0 : g3.isElement(O3)) || (E2 = d3.floating[A2] || u3.floating[x2]);
  const D3 = P2 / 2 - T3 / 2, L3 = p2[b3], k2 = E2 - w2[x2] - p2[R2], B = E2 / 2 - w2[x2] / 2 + D3, C2 = m(L3, B, k2), H2 = null != t(f3) && B != C2 && u3.reference[x2] / 2 - (B < L3 ? p2[b3] : p2[R2]) - w2[x2] / 2 < 0;
  return { [y2]: h3[y2] - (H2 ? B < L3 ? L3 - B : k2 - B : 0), data: { [y2]: C2, centerOffset: B - C2 } };
} });
var g = ["top", "right", "bottom", "left"];
var d = g.reduce((t2, e2) => t2.concat(e2, e2 + "-start", e2 + "-end"), []);
var O = function(e2) {
  return void 0 === e2 && (e2 = 0), { name: "offset", options: e2, async fn(i3) {
    const { x: r3, y: a3 } = i3, l3 = await async function(e3, i4) {
      const { placement: r4, platform: a4, elements: l4 } = e3, s3 = await (null == a4.isRTL ? void 0 : a4.isRTL(l4.floating)), c3 = n(r4), f3 = t(r4), m3 = "x" === o(r4), u3 = ["left", "top"].includes(c3) ? -1 : 1, g3 = s3 && m3 ? -1 : 1, d3 = "function" == typeof i4 ? i4(e3) : i4;
      let { mainAxis: p2, crossAxis: h3, alignmentAxis: y2 } = "number" == typeof d3 ? { mainAxis: d3, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d3 };
      return f3 && "number" == typeof y2 && (h3 = "end" === f3 ? -1 * y2 : y2), m3 ? { x: h3 * g3, y: p2 * u3 } : { x: p2 * u3, y: h3 * g3 };
    }(i3, e2);
    return { x: r3 + l3.x, y: a3 + l3.y, data: l3 };
  } };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function n2(t2) {
  var e2;
  return (null == (e2 = t2.ownerDocument) ? void 0 : e2.defaultView) || window;
}
function o2(t2) {
  return n2(t2).getComputedStyle(t2);
}
var i2 = Math.min;
var r2 = Math.max;
var l2 = Math.round;
function c2(t2) {
  const e2 = o2(t2);
  let n3 = parseFloat(e2.width), i3 = parseFloat(e2.height);
  const r3 = t2.offsetWidth, c3 = t2.offsetHeight, s3 = l2(n3) !== r3 || l2(i3) !== c3;
  return s3 && (n3 = r3, i3 = c3), { width: n3, height: i3, fallback: s3 };
}
function s2(t2) {
  return h2(t2) ? (t2.nodeName || "").toLowerCase() : "";
}
var f2;
function u2() {
  if (f2)
    return f2;
  const t2 = navigator.userAgentData;
  return t2 && Array.isArray(t2.brands) ? (f2 = t2.brands.map((t3) => t3.brand + "/" + t3.version).join(" "), f2) : navigator.userAgent;
}
function a2(t2) {
  return t2 instanceof n2(t2).HTMLElement;
}
function d2(t2) {
  return t2 instanceof n2(t2).Element;
}
function h2(t2) {
  return t2 instanceof n2(t2).Node;
}
function p(t2) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  return t2 instanceof n2(t2).ShadowRoot || t2 instanceof ShadowRoot;
}
function g2(t2) {
  const { overflow: e2, overflowX: n3, overflowY: i3, display: r3 } = o2(t2);
  return /auto|scroll|overlay|hidden|clip/.test(e2 + i3 + n3) && !["inline", "contents"].includes(r3);
}
function m2(t2) {
  return ["table", "td", "th"].includes(s2(t2));
}
function y(t2) {
  const e2 = /firefox/i.test(u2()), n3 = o2(t2), i3 = n3.backdropFilter || n3.WebkitBackdropFilter;
  return "none" !== n3.transform || "none" !== n3.perspective || !!i3 && "none" !== i3 || e2 && "filter" === n3.willChange || e2 && !!n3.filter && "none" !== n3.filter || ["transform", "perspective"].some((t3) => n3.willChange.includes(t3)) || ["paint", "layout", "strict", "content"].some((t3) => {
    const e3 = n3.contain;
    return null != e3 && e3.includes(t3);
  });
}
function x() {
  return /^((?!chrome|android).)*safari/i.test(u2());
}
function w(t2) {
  return ["html", "body", "#document"].includes(s2(t2));
}
function v2(t2) {
  return d2(t2) ? t2 : t2.contextElement;
}
var b2 = { x: 1, y: 1 };
function L2(t2) {
  const e2 = v2(t2);
  if (!a2(e2))
    return b2;
  const n3 = e2.getBoundingClientRect(), { width: o3, height: i3, fallback: r3 } = c2(e2);
  let s3 = (r3 ? l2(n3.width) : n3.width) / o3, f3 = (r3 ? l2(n3.height) : n3.height) / i3;
  return s3 && Number.isFinite(s3) || (s3 = 1), f3 && Number.isFinite(f3) || (f3 = 1), { x: s3, y: f3 };
}
function E(e2, o3, i3, r3) {
  var l3, c3;
  void 0 === o3 && (o3 = false), void 0 === i3 && (i3 = false);
  const s3 = e2.getBoundingClientRect(), f3 = v2(e2);
  let u3 = b2;
  o3 && (r3 ? d2(r3) && (u3 = L2(r3)) : u3 = L2(e2));
  const a3 = f3 ? n2(f3) : window, h3 = x() && i3;
  let p2 = (s3.left + (h3 && (null == (l3 = a3.visualViewport) ? void 0 : l3.offsetLeft) || 0)) / u3.x, g3 = (s3.top + (h3 && (null == (c3 = a3.visualViewport) ? void 0 : c3.offsetTop) || 0)) / u3.y, m3 = s3.width / u3.x, y2 = s3.height / u3.y;
  if (f3) {
    const t2 = n2(f3), e3 = r3 && d2(r3) ? n2(r3) : r3;
    let o4 = t2.frameElement;
    for (; o4 && r3 && e3 !== t2; ) {
      const t3 = L2(o4), e4 = o4.getBoundingClientRect(), i4 = getComputedStyle(o4);
      e4.x += (o4.clientLeft + parseFloat(i4.paddingLeft)) * t3.x, e4.y += (o4.clientTop + parseFloat(i4.paddingTop)) * t3.y, p2 *= t3.x, g3 *= t3.y, m3 *= t3.x, y2 *= t3.y, p2 += e4.x, g3 += e4.y, o4 = n2(o4).frameElement;
    }
  }
  return l({ width: m3, height: y2, x: p2, y: g3 });
}
function R(t2) {
  return ((h2(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
}
function T2(t2) {
  return d2(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
}
function C(t2) {
  return E(R(t2)).left + T2(t2).scrollLeft;
}
function F(t2) {
  if ("html" === s2(t2))
    return t2;
  const e2 = t2.assignedSlot || t2.parentNode || p(t2) && t2.host || R(t2);
  return p(e2) ? e2.host : e2;
}
function W(t2) {
  const e2 = F(t2);
  return w(e2) ? e2.ownerDocument.body : a2(e2) && g2(e2) ? e2 : W(e2);
}
function D2(t2, e2) {
  var o3;
  void 0 === e2 && (e2 = []);
  const i3 = W(t2), r3 = i3 === (null == (o3 = t2.ownerDocument) ? void 0 : o3.body), l3 = n2(i3);
  return r3 ? e2.concat(l3, l3.visualViewport || [], g2(i3) ? i3 : []) : e2.concat(i3, D2(i3));
}
function S(e2, i3, l3) {
  let c3;
  if ("viewport" === i3)
    c3 = function(t2, e3) {
      const o3 = n2(t2), i4 = R(t2), r3 = o3.visualViewport;
      let l4 = i4.clientWidth, c4 = i4.clientHeight, s4 = 0, f4 = 0;
      if (r3) {
        l4 = r3.width, c4 = r3.height;
        const t3 = x();
        (!t3 || t3 && "fixed" === e3) && (s4 = r3.offsetLeft, f4 = r3.offsetTop);
      }
      return { width: l4, height: c4, x: s4, y: f4 };
    }(e2, l3);
  else if ("document" === i3)
    c3 = function(t2) {
      const e3 = R(t2), n3 = T2(t2), i4 = t2.ownerDocument.body, l4 = r2(e3.scrollWidth, e3.clientWidth, i4.scrollWidth, i4.clientWidth), c4 = r2(e3.scrollHeight, e3.clientHeight, i4.scrollHeight, i4.clientHeight);
      let s4 = -n3.scrollLeft + C(t2);
      const f4 = -n3.scrollTop;
      return "rtl" === o2(i4).direction && (s4 += r2(e3.clientWidth, i4.clientWidth) - l4), { width: l4, height: c4, x: s4, y: f4 };
    }(R(e2));
  else if (d2(i3))
    c3 = function(t2, e3) {
      const n3 = E(t2, true, "fixed" === e3), o3 = n3.top + t2.clientTop, i4 = n3.left + t2.clientLeft, r3 = a2(t2) ? L2(t2) : { x: 1, y: 1 };
      return { width: t2.clientWidth * r3.x, height: t2.clientHeight * r3.y, x: i4 * r3.x, y: o3 * r3.y };
    }(i3, l3);
  else {
    const t2 = { ...i3 };
    if (x()) {
      var s3, f3;
      const o3 = n2(e2);
      t2.x -= (null == (s3 = o3.visualViewport) ? void 0 : s3.offsetLeft) || 0, t2.y -= (null == (f3 = o3.visualViewport) ? void 0 : f3.offsetTop) || 0;
    }
    c3 = t2;
  }
  return l(c3);
}
function A(t2, e2) {
  return a2(t2) && "fixed" !== o2(t2).position ? e2 ? e2(t2) : t2.offsetParent : null;
}
function H(t2, e2) {
  const i3 = n2(t2);
  if (!a2(t2))
    return i3;
  let r3 = A(t2, e2);
  for (; r3 && m2(r3) && "static" === o2(r3).position; )
    r3 = A(r3, e2);
  return r3 && ("html" === s2(r3) || "body" === s2(r3) && "static" === o2(r3).position && !y(r3)) ? i3 : r3 || function(t3) {
    let e3 = F(t3);
    for (; a2(e3) && !w(e3); ) {
      if (y(e3))
        return e3;
      e3 = F(e3);
    }
    return null;
  }(t2) || i3;
}
function V(t2, e2, n3) {
  const o3 = a2(e2), i3 = R(e2), r3 = E(t2, true, "fixed" === n3, e2);
  let l3 = { scrollLeft: 0, scrollTop: 0 };
  const c3 = { x: 0, y: 0 };
  if (o3 || !o3 && "fixed" !== n3)
    if (("body" !== s2(e2) || g2(i3)) && (l3 = T2(e2)), a2(e2)) {
      const t3 = E(e2, true);
      c3.x = t3.x + e2.clientLeft, c3.y = t3.y + e2.clientTop;
    } else
      i3 && (c3.x = C(i3));
  return { x: r3.left + l3.scrollLeft - c3.x, y: r3.top + l3.scrollTop - c3.y, width: r3.width, height: r3.height };
}
var O2 = { getClippingRect: function(t2) {
  let { element: e2, boundary: n3, rootBoundary: l3, strategy: c3 } = t2;
  const f3 = "clippingAncestors" === n3 ? function(t3, e3) {
    const n4 = e3.get(t3);
    if (n4)
      return n4;
    let i3 = D2(t3).filter((t4) => d2(t4) && "body" !== s2(t4)), r3 = null;
    const l4 = "fixed" === o2(t3).position;
    let c4 = l4 ? F(t3) : t3;
    for (; d2(c4) && !w(c4); ) {
      const t4 = o2(c4), e4 = y(c4);
      "fixed" === t4.position ? r3 = null : (l4 ? e4 || r3 : e4 || "static" !== t4.position || !r3 || !["absolute", "fixed"].includes(r3.position)) ? r3 = t4 : i3 = i3.filter((t5) => t5 !== c4), c4 = F(c4);
    }
    return e3.set(t3, i3), i3;
  }(e2, this._c) : [].concat(n3), u3 = [...f3, l3], a3 = u3[0], h3 = u3.reduce((t3, n4) => {
    const o3 = S(e2, n4, c3);
    return t3.top = r2(o3.top, t3.top), t3.right = i2(o3.right, t3.right), t3.bottom = i2(o3.bottom, t3.bottom), t3.left = r2(o3.left, t3.left), t3;
  }, S(e2, a3, c3));
  return { width: h3.right - h3.left, height: h3.bottom - h3.top, x: h3.left, y: h3.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
  let { rect: e2, offsetParent: n3, strategy: o3 } = t2;
  const i3 = a2(n3), r3 = R(n3);
  if (n3 === r3)
    return e2;
  let l3 = { scrollLeft: 0, scrollTop: 0 }, c3 = { x: 1, y: 1 };
  const f3 = { x: 0, y: 0 };
  if ((i3 || !i3 && "fixed" !== o3) && (("body" !== s2(n3) || g2(r3)) && (l3 = T2(n3)), a2(n3))) {
    const t3 = E(n3);
    c3 = L2(n3), f3.x = t3.x + n3.clientLeft, f3.y = t3.y + n3.clientTop;
  }
  return { width: e2.width * c3.x, height: e2.height * c3.y, x: e2.x * c3.x - l3.scrollLeft * c3.x + f3.x, y: e2.y * c3.y - l3.scrollTop * c3.y + f3.y };
}, isElement: d2, getDimensions: function(t2) {
  return a2(t2) ? c2(t2) : t2.getBoundingClientRect();
}, getOffsetParent: H, getDocumentElement: R, getScale: L2, async getElementRects(t2) {
  let { reference: e2, floating: n3, strategy: o3 } = t2;
  const i3 = this.getOffsetParent || H, r3 = this.getDimensions;
  return { reference: V(e2, await i3(n3), o3), floating: { x: 0, y: 0, ...await r3(n3) } };
}, getClientRects: (t2) => Array.from(t2.getClientRects()), isRTL: (t2) => "rtl" === o2(t2).direction };
var z = (t2, n3, o3) => {
  const i3 = /* @__PURE__ */ new Map(), r3 = { platform: O2, ...o3 }, l3 = { ...r3.platform, _c: i3 };
  return r(t2, n3, { ...r3, platform: l3 });
};

// node_modules/element-plus/es/hooks/use-floating/index.mjs
var useFloatingProps = buildProps({});
var unrefReference = (elRef) => {
  if (!isClient)
    return;
  if (!elRef)
    return elRef;
  const unrefEl = unrefElement(elRef);
  if (unrefEl)
    return unrefEl;
  return isRef(elRef) ? unrefEl : elRef;
};
var useFloating = ({
  middleware,
  placement,
  strategy
}) => {
  const referenceRef = ref();
  const contentRef = ref();
  const x2 = ref();
  const y2 = ref();
  const middlewareData = ref({});
  const states = {
    x: x2,
    y: y2,
    placement,
    strategy,
    middlewareData
  };
  const update = async () => {
    if (!isClient)
      return;
    const referenceEl = unrefReference(referenceRef);
    const contentEl = unrefElement(contentRef);
    if (!referenceEl || !contentEl)
      return;
    const data = await z(referenceEl, contentEl, {
      placement: unref(placement),
      strategy: unref(strategy),
      middleware: unref(middleware)
    });
    keysOf(states).forEach((key) => {
      states[key].value = data[key];
    });
  };
  onMounted(() => {
    watchEffect(() => {
      update();
    });
  });
  return {
    ...states,
    update,
    referenceRef,
    contentRef
  };
};
var arrowMiddleware = ({
  arrowRef,
  padding
}) => {
  return {
    name: "arrow",
    options: {
      element: arrowRef,
      padding
    },
    fn(args) {
      const arrowEl = unref(arrowRef);
      if (!arrowEl)
        return {};
      return u({
        element: arrowEl,
        padding
      }).fn(args);
    }
  };
};

// node_modules/element-plus/es/version.mjs
init_vue_jsxImportSource();
var version = "2.2.36";

// node_modules/element-plus/es/make-installer.mjs
var makeInstaller = (components = []) => {
  const install2 = (app, options) => {
    if (app[INSTALLED_KEY])
      return;
    app[INSTALLED_KEY] = true;
    components.forEach((c3) => app.use(c3));
    if (options)
      provideGlobalConfig(options, app, true);
  };
  return {
    version,
    install: install2
  };
};

// node_modules/element-plus/es/component.mjs
init_vue_jsxImportSource();

// node_modules/element-plus/es/components/tooltip-v2/index.mjs
init_vue_jsxImportSource();

// node_modules/element-plus/es/components/tooltip-v2/src/tooltip2.mjs
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();

// node_modules/element-plus/es/components/tooltip-v2/src/arrow.mjs
init_vue_jsxImportSource();

// node_modules/element-plus/es/components/tooltip-v2/src/common.mjs
init_vue_jsxImportSource();
var tooltipV2CommonProps = buildProps({
  nowrap: Boolean
});
var TooltipV2Sides = /* @__PURE__ */ ((TooltipV2Sides2) => {
  TooltipV2Sides2["top"] = "top";
  TooltipV2Sides2["bottom"] = "bottom";
  TooltipV2Sides2["left"] = "left";
  TooltipV2Sides2["right"] = "right";
  return TooltipV2Sides2;
})(TooltipV2Sides || {});
var tooltipV2Sides = Object.values(TooltipV2Sides);

// node_modules/element-plus/es/components/tooltip-v2/src/arrow.mjs
var tooltipV2ArrowProps = buildProps({
  width: {
    type: Number,
    default: 10
  },
  height: {
    type: Number,
    default: 10
  },
  style: {
    type: definePropType(Object),
    default: null
  }
});
var tooltipV2ArrowSpecialProps = buildProps({
  side: {
    type: definePropType(String),
    values: tooltipV2Sides,
    required: true
  }
});

// node_modules/element-plus/es/components/tooltip-v2/src/content.mjs
init_vue_jsxImportSource();
var tooltipV2Strategies = ["absolute", "fixed"];
var tooltipV2Placements = [
  "top-start",
  "top-end",
  "top",
  "bottom-start",
  "bottom-end",
  "bottom",
  "left-start",
  "left-end",
  "left",
  "right-start",
  "right-end",
  "right"
];
var tooltipV2ContentProps = buildProps({
  ariaLabel: String,
  arrowPadding: {
    type: definePropType(Number),
    default: 5
  },
  effect: {
    type: String,
    default: ""
  },
  contentClass: String,
  placement: {
    type: definePropType(String),
    values: tooltipV2Placements,
    default: "bottom"
  },
  reference: {
    type: definePropType(Object),
    default: null
  },
  offset: {
    type: Number,
    default: 8
  },
  strategy: {
    type: definePropType(String),
    values: tooltipV2Strategies,
    default: "absolute"
  },
  showArrow: {
    type: Boolean,
    default: false
  }
});

// node_modules/element-plus/es/components/tooltip-v2/src/root.mjs
init_vue_jsxImportSource();
var tooltipV2RootProps = buildProps({
  delayDuration: {
    type: Number,
    default: 300
  },
  defaultOpen: Boolean,
  open: {
    type: Boolean,
    default: void 0
  },
  onOpenChange: {
    type: definePropType(Function)
  },
  "onUpdate:open": {
    type: definePropType(Function)
  }
});

// node_modules/element-plus/es/components/tooltip-v2/src/tooltip.mjs
init_vue_jsxImportSource();

// node_modules/element-plus/es/components/tooltip-v2/src/trigger.mjs
init_vue_jsxImportSource();
var EventHandler = {
  type: definePropType(Function)
};
var tooltipV2TriggerProps = buildProps({
  onBlur: EventHandler,
  onClick: EventHandler,
  onFocus: EventHandler,
  onMouseDown: EventHandler,
  onMouseEnter: EventHandler,
  onMouseLeave: EventHandler
});

// node_modules/element-plus/es/components/tooltip-v2/src/tooltip.mjs
var tooltipV2Props = buildProps({
  ...tooltipV2RootProps,
  ...tooltipV2ArrowProps,
  ...tooltipV2TriggerProps,
  ...tooltipV2ContentProps,
  alwaysOn: Boolean,
  fullTransition: Boolean,
  transitionProps: {
    type: definePropType(Object),
    default: null
  },
  teleported: Boolean,
  to: {
    type: definePropType(String),
    default: "body"
  }
});

// node_modules/element-plus/es/components/tooltip-v2/src/root2.mjs
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();

// node_modules/element-plus/es/components/tooltip-v2/src/constants.mjs
init_vue_jsxImportSource();
var tooltipV2RootKey = Symbol("tooltipV2");
var tooltipV2ContentKey = Symbol("tooltipV2Content");
var TOOLTIP_V2_OPEN = "tooltip_v2.open";

// node_modules/element-plus/es/components/tooltip-v2/src/root2.mjs
var __default__ = defineComponent({
  name: "ElTooltipV2Root"
});
var _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tooltipV2RootProps,
  setup(__props, { expose }) {
    const props = __props;
    const _open = ref(props.defaultOpen);
    const triggerRef = ref(null);
    const open = computed({
      get: () => isPropAbsent(props.open) ? _open.value : props.open,
      set: (open2) => {
        var _a;
        _open.value = open2;
        (_a = props["onUpdate:open"]) == null ? void 0 : _a.call(props, open2);
      }
    });
    const isOpenDelayed = computed(() => isNumber(props.delayDuration) && props.delayDuration > 0);
    const { start: onDelayedOpen, stop: clearTimer } = useTimeoutFn(() => {
      open.value = true;
    }, computed(() => props.delayDuration), {
      immediate: false
    });
    const ns = useNamespace("tooltip-v2");
    const contentId = useId();
    const onNormalOpen = () => {
      clearTimer();
      open.value = true;
    };
    const onDelayOpen = () => {
      unref(isOpenDelayed) ? onDelayedOpen() : onNormalOpen();
    };
    const onOpen = onNormalOpen;
    const onClose = () => {
      clearTimer();
      open.value = false;
    };
    const onChange = (open2) => {
      var _a;
      if (open2) {
        document.dispatchEvent(new CustomEvent(TOOLTIP_V2_OPEN));
        onOpen();
      }
      (_a = props.onOpenChange) == null ? void 0 : _a.call(props, open2);
    };
    watch(open, onChange);
    onMounted(() => {
      document.addEventListener(TOOLTIP_V2_OPEN, onClose);
    });
    onBeforeUnmount(() => {
      clearTimer();
      document.removeEventListener(TOOLTIP_V2_OPEN, onClose);
    });
    provide(tooltipV2RootKey, {
      contentId,
      triggerRef,
      ns,
      onClose,
      onDelayOpen,
      onOpen
    });
    expose({
      onOpen,
      onClose
    });
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default", { open: unref(open) });
    };
  }
});
var TooltipV2Root = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip-v2/src/root.vue"]]);

// node_modules/element-plus/es/components/tooltip-v2/src/arrow2.mjs
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();
var __default__2 = defineComponent({
  name: "ElTooltipV2Arrow"
});
var _sfc_main2 = /* @__PURE__ */ defineComponent({
  ...__default__2,
  props: {
    ...tooltipV2ArrowProps,
    ...tooltipV2ArrowSpecialProps
  },
  setup(__props) {
    const props = __props;
    const { ns } = inject(tooltipV2RootKey);
    const { arrowRef } = inject(tooltipV2ContentKey);
    const arrowStyle = computed(() => {
      const { style, width, height } = props;
      const namespace = ns.namespace.value;
      return {
        [`--${namespace}-tooltip-v2-arrow-width`]: `${width}px`,
        [`--${namespace}-tooltip-v2-arrow-height`]: `${height}px`,
        [`--${namespace}-tooltip-v2-arrow-border-width`]: `${width / 2}px`,
        [`--${namespace}-tooltip-v2-arrow-cover-width`]: width / 2 - 1,
        ...style || {}
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        style: normalizeStyle(unref(arrowStyle)),
        class: normalizeClass(unref(ns).e("arrow"))
      }, null, 6);
    };
  }
});
var TooltipV2Arrow = /* @__PURE__ */ _export_sfc(_sfc_main2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip-v2/src/arrow.vue"]]);

// node_modules/element-plus/es/components/tooltip-v2/src/content2.mjs
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();

// node_modules/element-plus/es/components/visual-hidden/src/visual-hidden2.mjs
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();

// node_modules/element-plus/es/components/visual-hidden/src/visual-hidden.mjs
init_vue_jsxImportSource();
var visualHiddenProps = buildProps({
  style: {
    type: definePropType([String, Object, Array]),
    default: () => ({})
  }
});

// node_modules/element-plus/es/components/visual-hidden/src/visual-hidden2.mjs
var __default__3 = defineComponent({
  name: "ElVisuallyHidden"
});
var _sfc_main3 = /* @__PURE__ */ defineComponent({
  ...__default__3,
  props: visualHiddenProps,
  setup(__props) {
    const props = __props;
    const computedStyle = computed(() => {
      return [
        props.style,
        {
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", mergeProps(_ctx.$attrs, { style: unref(computedStyle) }), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var ElVisuallyHidden = /* @__PURE__ */ _export_sfc(_sfc_main3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/visual-hidden/src/visual-hidden.vue"]]);

// node_modules/element-plus/es/components/tooltip-v2/src/content2.mjs
var _hoisted_1 = ["data-side"];
var __default__4 = defineComponent({
  name: "ElTooltipV2Content"
});
var _sfc_main4 = /* @__PURE__ */ defineComponent({
  ...__default__4,
  props: { ...tooltipV2ContentProps, ...tooltipV2CommonProps },
  setup(__props) {
    const props = __props;
    const { triggerRef, contentId } = inject(tooltipV2RootKey);
    const placement = ref(props.placement);
    const strategy = ref(props.strategy);
    const arrowRef = ref(null);
    const { referenceRef, contentRef, middlewareData, x: x2, y: y2, update } = useFloating({
      placement,
      strategy,
      middleware: computed(() => {
        const middleware = [O(props.offset)];
        if (props.showArrow) {
          middleware.push(arrowMiddleware({
            arrowRef
          }));
        }
        return middleware;
      })
    });
    const zIndex = useZIndex().nextZIndex();
    const ns = useNamespace("tooltip-v2");
    const side = computed(() => {
      return placement.value.split("-")[0];
    });
    const contentStyle = computed(() => {
      return {
        position: unref(strategy),
        top: `${unref(y2) || 0}px`,
        left: `${unref(x2) || 0}px`,
        zIndex
      };
    });
    const arrowStyle = computed(() => {
      if (!props.showArrow)
        return {};
      const { arrow } = unref(middlewareData);
      return {
        [`--${ns.namespace.value}-tooltip-v2-arrow-x`]: `${arrow == null ? void 0 : arrow.x}px` || "",
        [`--${ns.namespace.value}-tooltip-v2-arrow-y`]: `${arrow == null ? void 0 : arrow.y}px` || ""
      };
    });
    const contentClass = computed(() => [
      ns.e("content"),
      ns.is("dark", props.effect === "dark"),
      ns.is(unref(strategy)),
      props.contentClass
    ]);
    watch(arrowRef, () => update());
    watch(() => props.placement, (val) => placement.value = val);
    onMounted(() => {
      watch(() => props.reference || triggerRef.value, (el) => {
        referenceRef.value = el || void 0;
      }, {
        immediate: true
      });
    });
    provide(tooltipV2ContentKey, { arrowRef });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "contentRef",
        ref: contentRef,
        style: normalizeStyle(unref(contentStyle)),
        "data-tooltip-v2-root": ""
      }, [
        !_ctx.nowrap ? (openBlock(), createElementBlock("div", {
          key: 0,
          "data-side": unref(side),
          class: normalizeClass(unref(contentClass))
        }, [
          renderSlot(_ctx.$slots, "default", {
            contentStyle: unref(contentStyle),
            contentClass: unref(contentClass)
          }),
          createVNode(unref(ElVisuallyHidden), {
            id: unref(contentId),
            role: "tooltip"
          }, {
            default: withCtx(() => [
              _ctx.ariaLabel ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.ariaLabel), 1)
              ], 64)) : renderSlot(_ctx.$slots, "default", { key: 1 })
            ]),
            _: 3
          }, 8, ["id"]),
          renderSlot(_ctx.$slots, "arrow", {
            style: normalizeStyle(unref(arrowStyle)),
            side: unref(side)
          })
        ], 10, _hoisted_1)) : createCommentVNode("v-if", true)
      ], 4);
    };
  }
});
var TooltipV2Content = /* @__PURE__ */ _export_sfc(_sfc_main4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip-v2/src/content.vue"]]);

// node_modules/element-plus/es/components/tooltip-v2/src/trigger2.mjs
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();

// node_modules/element-plus/es/components/tooltip-v2/src/forward-ref.mjs
init_vue_jsxImportSource();
init_vue_runtime_esm_bundler();
var forwardRefProps = buildProps({
  setRef: {
    type: definePropType(Function),
    required: true
  },
  onlyChild: Boolean
});
var ForwardRef = defineComponent({
  props: forwardRefProps,
  setup(props, {
    slots
  }) {
    const fragmentRef = ref();
    const setRef = composeRefs(fragmentRef, (el) => {
      if (el) {
        props.setRef(el.nextElementSibling);
      } else {
        props.setRef(null);
      }
    });
    return () => {
      var _a;
      const [firstChild] = ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [];
      const child = props.onlyChild ? ensureOnlyChild(firstChild.children) : firstChild.children;
      return createVNode(Fragment, {
        "ref": setRef
      }, [child]);
    };
  }
});

// node_modules/element-plus/es/components/tooltip-v2/src/trigger2.mjs
var __default__5 = defineComponent({
  name: "ElTooltipV2Trigger"
});
var _sfc_main5 = /* @__PURE__ */ defineComponent({
  ...__default__5,
  props: {
    ...tooltipV2CommonProps,
    ...tooltipV2TriggerProps
  },
  setup(__props) {
    const props = __props;
    const { onClose, onOpen, onDelayOpen, triggerRef, contentId } = inject(tooltipV2RootKey);
    let isMousedown = false;
    const setTriggerRef = (el) => {
      triggerRef.value = el;
    };
    const onMouseup = () => {
      isMousedown = false;
    };
    const onMouseenter = composeEventHandlers(props.onMouseEnter, onDelayOpen);
    const onMouseleave = composeEventHandlers(props.onMouseLeave, onClose);
    const onMousedown = composeEventHandlers(props.onMouseDown, () => {
      onClose();
      isMousedown = true;
      document.addEventListener("mouseup", onMouseup, { once: true });
    });
    const onFocus = composeEventHandlers(props.onFocus, () => {
      if (!isMousedown)
        onOpen();
    });
    const onBlur = composeEventHandlers(props.onBlur, onClose);
    const onClick = composeEventHandlers(props.onClick, (e2) => {
      if (e2.detail === 0)
        onClose();
    });
    const events = {
      blur: onBlur,
      click: onClick,
      focus: onFocus,
      mousedown: onMousedown,
      mouseenter: onMouseenter,
      mouseleave: onMouseleave
    };
    const setEvents = (el, events2, type) => {
      if (el) {
        Object.entries(events2).forEach(([name, handler]) => {
          el[type](name, handler);
        });
      }
    };
    watch(triggerRef, (triggerEl, previousTriggerEl) => {
      setEvents(triggerEl, events, "addEventListener");
      setEvents(previousTriggerEl, events, "removeEventListener");
      if (triggerEl) {
        triggerEl.setAttribute("aria-describedby", contentId.value);
      }
    });
    onBeforeUnmount(() => {
      setEvents(triggerRef.value, events, "removeEventListener");
      document.removeEventListener("mouseup", onMouseup);
    });
    return (_ctx, _cache) => {
      return _ctx.nowrap ? (openBlock(), createBlock(unref(ForwardRef), {
        key: 0,
        "set-ref": setTriggerRef,
        "only-child": ""
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      })) : (openBlock(), createElementBlock("button", mergeProps({
        key: 1,
        ref_key: "triggerRef",
        ref: triggerRef
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16));
    };
  }
});
var TooltipV2Trigger = /* @__PURE__ */ _export_sfc(_sfc_main5, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip-v2/src/trigger.vue"]]);

// node_modules/element-plus/es/components/tooltip-v2/src/tooltip2.mjs
var __default__6 = defineComponent({
  name: "ElTooltipV2"
});
var _sfc_main6 = /* @__PURE__ */ defineComponent({
  ...__default__6,
  props: tooltipV2Props,
  setup(__props) {
    const props = __props;
    const refedProps = toRefs(props);
    const arrowProps = reactive(pick_default(refedProps, Object.keys(tooltipV2ArrowProps)));
    const contentProps = reactive(pick_default(refedProps, Object.keys(tooltipV2ContentProps)));
    const rootProps = reactive(pick_default(refedProps, Object.keys(tooltipV2RootProps)));
    const triggerProps = reactive(pick_default(refedProps, Object.keys(tooltipV2TriggerProps)));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(TooltipV2Root, normalizeProps(guardReactiveProps(rootProps)), {
        default: withCtx(({ open }) => [
          createVNode(TooltipV2Trigger, mergeProps(triggerProps, { nowrap: "" }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "trigger")
            ]),
            _: 3
          }, 16),
          (openBlock(), createBlock(Teleport, {
            to: _ctx.to,
            disabled: !_ctx.teleported
          }, [
            _ctx.fullTransition ? (openBlock(), createBlock(Transition, normalizeProps(mergeProps({ key: 0 }, _ctx.transitionProps)), {
              default: withCtx(() => [
                _ctx.alwaysOn || open ? (openBlock(), createBlock(TooltipV2Content, normalizeProps(mergeProps({ key: 0 }, contentProps)), {
                  arrow: withCtx(({ style, side }) => [
                    _ctx.showArrow ? (openBlock(), createBlock(TooltipV2Arrow, mergeProps({ key: 0 }, arrowProps, {
                      style,
                      side
                    }), null, 16, ["style", "side"])) : createCommentVNode("v-if", true)
                  ]),
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }, 16)) : createCommentVNode("v-if", true)
              ]),
              _: 2
            }, 1040)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              _ctx.alwaysOn || open ? (openBlock(), createBlock(TooltipV2Content, normalizeProps(mergeProps({ key: 0 }, contentProps)), {
                arrow: withCtx(({ style, side }) => [
                  _ctx.showArrow ? (openBlock(), createBlock(TooltipV2Arrow, mergeProps({ key: 0 }, arrowProps, {
                    style,
                    side
                  }), null, 16, ["style", "side"])) : createCommentVNode("v-if", true)
                ]),
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16)) : createCommentVNode("v-if", true)
            ], 64))
          ], 8, ["to", "disabled"]))
        ]),
        _: 3
      }, 16);
    };
  }
});
var TooltipV2 = /* @__PURE__ */ _export_sfc(_sfc_main6, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip-v2/src/tooltip.vue"]]);

// node_modules/element-plus/es/components/tooltip-v2/index.mjs
var ElTooltipV2 = withInstall(TooltipV2);

// node_modules/element-plus/es/component.mjs
var Components = [
  ElAffix,
  ElAlert,
  ElAutocomplete,
  ElAutoResizer,
  ElAvatar,
  ElBacktop,
  ElBadge,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElButtonGroup,
  ElCalendar,
  ElCard,
  ElCarousel,
  ElCarouselItem,
  ElCascader,
  ElCascaderPanel,
  ElCheckTag,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElCollapseItem,
  ElCollapseTransition,
  ElColorPicker,
  ElConfigProvider,
  ElContainer,
  ElAside,
  ElFooter,
  ElHeader,
  ElMain,
  ElDatePicker,
  ElDescriptions,
  ElDescriptionsItem,
  ElDialog,
  ElDivider,
  ElDrawer,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElIcon,
  ElImage,
  ElImageViewer,
  ElInput,
  ElInputNumber,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElPageHeader,
  ElPagination,
  ElPopconfirm,
  ElPopover,
  ElPopper,
  ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElResult,
  ElRow,
  ElScrollbar,
  ElSelect,
  ElOption,
  ElOptionGroup,
  ElSelectV2,
  ElSkeleton,
  ElSkeletonItem,
  ElSlider,
  ElSpace,
  ElStatistic,
  ElCountdown,
  ElSteps,
  ElStep,
  ElSwitch,
  ElTable,
  ElTableColumn,
  ElTableV2,
  ElTabs,
  ElTabPane,
  ElTag,
  ElTimePicker,
  ElTimeSelect,
  ElTimeline,
  ElTimelineItem,
  ElTooltip,
  ElTooltipV2,
  ElTransfer,
  ElTree,
  ElTreeSelect,
  ElTreeV2,
  ElUpload
];

// node_modules/element-plus/es/plugin.mjs
init_vue_jsxImportSource();
var Plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective
];

// node_modules/element-plus/es/defaults.mjs
var installer = makeInstaller([...Components, ...Plugins]);

// node_modules/element-plus/es/index.mjs
var import_dayjs = __toESM(require_dayjs_min(), 1);
var install = installer.install;
var version2 = installer.version;

// src/components/mdx/constituents/vue/vueDirectives.js
var VShowAndVModelDemo = defineComponent({
  name: "Test",
  components: { ElSwitch },
  setup() {
    const show = ref(true);
    const toggle = () => show.value = !show.value;
    return () => {
      return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h(ElSwitch, { modelValue: show.value, onChange: toggle }), withDirectives(/* @__PURE__ */ h("span", { style: "padding-left: 10px;" }, "\u{1F648}"), [[vShow, show.value]]));
    };
  }
});

// src/components/mdx/.docs/vue/vue@3.mdx
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    ul: "ul",
    li: "li",
    p: "p",
    code: "code",
    pre: "pre",
    span: "span",
    h3: "h3"
  }, useMDXComponents(), props.components);
  return vue_jsxImportSource_default.h(vue_jsxImportSource_default.Fragment, null, vue_jsxImportSource_default.h(_components.h1, null, "vue"), "\n", vue_jsxImportSource_default.h(_components.ul, null, "\n", vue_jsxImportSource_default.h(_components.li, null, "\n", vue_jsxImportSource_default.h(_components.p, null, vue_jsxImportSource_default.h(_components.code, null, "jsx"), "\u751F\u83DC\uFF1A\u8BB0\u5F55\u5173\u4E8E\u4F7F\u7528", vue_jsxImportSource_default.h(_components.code, null, "esbuild"), "\u7F16\u8BD1", vue_jsxImportSource_default.h(_components.code, null, "vue"), "+", vue_jsxImportSource_default.h(_components.code, null, "jsx"), "\u65F6\u6240\u7528\u5230\u7684\u4E00\u4E9B\u786C\u6838\uFF08\u751F\u786C\uFF09\u7684\u6280\u5DE7\u{1F41B}\u{1F98B}"), "\n", vue_jsxImportSource_default.h(_components.ul, null, "\n", vue_jsxImportSource_default.h(_components.li, null, "\n", vue_jsxImportSource_default.h(_components.p, null, vue_jsxImportSource_default.h(_components.code, null, "v-show"), "\u548C", vue_jsxImportSource_default.h(_components.code, null, "v-model"), "\uFF1A", vue_jsxImportSource_default.h(_components.code, null, "jsx"), "\u4E2D", vue_jsxImportSource_default.h(_components.code, null, "v-model"), "\u4E00\u822C\u9700\u8981\u62C6\u5206\u6210", vue_jsxImportSource_default.h(_components.code, null, "value={ value } onXXX={ actionToValue }"), "\uFF0C", vue_jsxImportSource_default.h(_components.code, null, "v-show"), "\u5219\u9700\u8981\u901A\n\u8FC7", vue_jsxImportSource_default.h(_components.code, null, "vue"), "\u63D0\u4F9B\u7684\u63A5\u53E3", vue_jsxImportSource_default.h(_components.code, null, "withDirectives"), "\u6765\u624B\u52A8\u5B9E\u73B0\uFF1B\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u4EFB\u4F55\u81EA\u5B9A\u4E49\u7684\u6307\u4EE4\u90FD\u9700\u8981\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6765\u5B9E\u73B0\uFF0C\u9664\u975E\u96C6\u6210\u7C7B\u4F3C\n", vue_jsxImportSource_default.h(_components.code, null, "esbuild-plugin-vue"), "\u8FD9\u6837\u7684\u63D2\u4EF6\u6765\u4F7F\u7528", vue_jsxImportSource_default.h(_components.code, null, "vue"), "\u7684\u6A21\u677F\u8BED\u6CD5"), "\n", vue_jsxImportSource_default.h(_components.pre, null, vue_jsxImportSource_default.h(_components.code, {
    className: "hljs language-javascript"
  }, vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-keyword"
  }, "import"), " {\n  defineComponent,\n  withDirectives,\n  ref,\n  vShow\n} ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-string"
  }, "'vue'"), "\n", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-keyword"
  }, "import"), " { ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-title class_"
  }, "ElSwitch"), " } ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-keyword"
  }, "from"), " ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-string"
  }, "'element-plus'"), "\n\n", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-title function_"
  }, "defineComponent"), "({\n  ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-attr"
  }, "name"), ": ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-string"
  }, "'Test'"), ",\n  ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-attr"
  }, "components"), ": { ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-title class_"
  }, "ElSwitch"), " },\n  ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-title function_"
  }, "setup"), "(", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-params"
  }), ") {\n    ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-keyword"
  }, "const"), " show = ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-title function_"
  }, "ref"), "(", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-literal"
  }, "true"), ")\n    ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-keyword"
  }, "const"), " ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-title function_"
  }, "toggle"), " = (", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-params"
  }), ") => show.", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-property"
  }, "value"), " = !show.", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-property"
  }, "value"), "\n\n    ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-function"
  }, "() =>"), " {\n      ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-keyword"
  }, "return"), " ", vue_jsxImportSource_default.h(_components.span, {
    className: "xml"
  }, vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-tag"
  }, "<>"), "\n        ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-tag"
  }, "<", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-name"
  }, "ElSwitch"), " ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-attr"
  }, "modelValue"), "=", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-string"
  }, "{"), " ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-attr"
  }, "show.value"), " } ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-attr"
  }, "onChange"), "=", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-string"
  }, "{"), " ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-attr"
  }, "toggle"), " }>"), vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-tag"
  }, "</", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-name"
  }, "ElSwitch"), ">"), "\n        {\n          withDirectives(", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-tag"
  }, "<", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-name"
  }, "span"), ">"), "\u{1F648}", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-tag"
  }, "</", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-name"
  }, "span"), ">"), ", [[vShow, show.value]])\n        }\n      ", vue_jsxImportSource_default.h(_components.span, {
    className: "hljs-tag"
  }, "</>")), "\n    }\n  }\n})\n")), "\n", vue_jsxImportSource_default.h(_components.h3, null, vue_jsxImportSource_default.h(_components.code, null, "Demo"), ": ", vue_jsxImportSource_default.h(VShowAndVModelDemo)), "\n"), "\n"), "\n"), "\n"));
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? vue_jsxImportSource_default.h(MDXLayout, props, vue_jsxImportSource_default.h(_createMdxContent, props)) : _createMdxContent(props);
}
var vue_3_default = MDXContent;

// MDX_TO_VUE_COMPONENT:/home/runner/work/mynotes-es/mynotes-es/src/components/mdx/.docs/vue/vue@3.mdx
var vue_3_default2 = defineComponent({
  name: "MDX_VUE@3",
  components: { MDXComponentContext: vue_3_default },
  setup(props, ctx) {
    return () => /* @__PURE__ */ h("div", { class: "markdown-body", style: "padding: 15px;" }, /* @__PURE__ */ h(vue_3_default, { ...ctx.attrs }));
  }
});
export {
  vue_3_default2 as default
};
