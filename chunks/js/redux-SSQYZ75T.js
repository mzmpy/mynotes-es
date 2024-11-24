import{a as u}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-IDJP7L6O.js";import{I as c,f as l,g as o,ra as t,za as a}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-QYRLMMZP.js";o();a();o();o();function d(e){let n=Object.assign({h1:"h1",code:"code",h2:"h2",ul:"ul",li:"li"},u(),e.components);return l.h(l.Fragment,null,l.h(n.h1,null,l.h(n.code,null,"Redux")),`
`,l.h(n.h2,null,"\u4EC0\u4E48\u65F6\u5019\u5E94\u8BE5\u4F7F\u7528",l.h(n.code,null,"Redux")),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,"\u5E94\u7528\u4E2D\u6709\u5F88\u591A",l.h(n.code,null,"state"),"\u9700\u8981\u5728\u4E0D\u540C\u7EC4\u4EF6\u4E2D\u88AB\u4F7F\u7528\uFF0C\u5373\u8FD9\u4E9B",l.h(n.code,null,"state"),"\u9700\u8981\u88AB\u201C\u63D0\u5347\u201D"),`
`,l.h(n.li,null,"\u5E94\u7528",l.h(n.code,null,"state"),"\u4F1A\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\u800C\u9891\u7E41\u66F4\u65B0"),`
`,l.h(n.li,null,"\u66F4\u65B0",l.h(n.code,null,"state"),"\u7684\u903B\u8F91\u5F88\u590D\u6742"),`
`,l.h(n.li,null,"\u4E2D\u578B\u548C\u5927\u578B\u4EE3\u7801\u91CF\u7684\u5E94\u7528\uFF0C\u5F88\u591A\u4EBA\u534F\u540C\u5F00\u53D1"),`
`),`
`,l.h(n.h2,null,"\u5355\u5411\u6570\u636E\u6D41\uFF08one-way data flow\uFF09:"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,"\u7528",l.h(n.code,null,"state"),"\u6765\u63CF\u8FF0\u5E94\u7528\u7A0B\u5E8F\u5728\u7279\u5B9A\u65F6\u95F4\u70B9\u7684\u72B6\u51B5"),`
`,l.h(n.li,null,"\u57FA\u4E8E",l.h(n.code,null,"state"),"\u6765\u6E32\u67D3\u51FA",l.h(n.code,null,"view")),`
`,l.h(n.li,null,"\u5F53\u53D1\u751F\u67D0\u4E9B\u4E8B\u60C5\u65F6\uFF08\u4F8B\u5982\u7528\u6237\u5355\u51FB\u6309\u94AE\uFF09\uFF0C",l.h(n.code,null,"state"),"\u4F1A\u6839\u636E\u53D1\u751F\u7684\u4E8B\u60C5\u8FDB\u884C\u66F4\u65B0\uFF0C\u751F\u6210\u65B0\u7684",l.h(n.code,null,"state")),`
`,l.h(n.li,null,"\u57FA\u4E8E\u65B0\u7684",l.h(n.code,null,"state"),"\u91CD\u65B0\u6E32\u67D3",l.h(n.code,null,"view")),`
`),`
`,l.h(n.h2,null,l.h(n.code,null,"action")),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"action"),"\u662F\u4E00\u4E2A\u5177\u6709",l.h(n.code,null,"type"),"\u5B57\u6BB5\u7684\u666E\u901A",l.h(n.code,null,"JavaScript"),"\u5BF9\u8C61\uFF1B\u4F60\u53EF\u4EE5\u5C06",l.h(n.code,null,"action"),"\u89C6\u4E3A\u63CF\u8FF0\u5E94\u7528\u7A0B\u5E8F\u4E2D\u53D1\u751F\u4E86\u4EC0\u4E48\u7684\u4E8B\u4EF6\uFF1B",l.h(n.code,null,"action"),`\u5BF9\u8C61
\u53EF\u4EE5\u6709\u5176\u4ED6\u5B57\u6BB5\uFF0C\u5176\u4E2D\u5305\u542B\u6709\u5173\u53D1\u751F\u7684\u4E8B\u60C5\u7684\u9644\u52A0\u4FE1\u606F\uFF08\u4F8B\u5982\uFF1A`,l.h(n.code,null,"payload"),"\uFF09"),`
`),`
`,l.h(n.h2,null,l.h(n.code,null,"reducer")),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"reducer"),"\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u63A5\u6536\u5F53\u524D\u7684",l.h(n.code,null,"state"),"\u548C\u4E00\u4E2A",l.h(n.code,null,"action"),`\u5BF9\u8C61\uFF0C\u5FC5\u8981\u65F6\u51B3\u5B9A\u5982\u4F55\u66F4\u65B0\u72B6\u6001\uFF0C\u5E76\u8FD4\u56DE\u65B0\u72B6\u6001\uFF1B\u51FD\u6570\u7B7E\u540D\u662F\uFF1A
`,l.h(n.code,null,"(state, action) => newState"),"\uFF1B \u4F60\u53EF\u4EE5\u5C06",l.h(n.code,null,"reducer"),"\u89C6\u4E3A\u4E00\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u5B83\u6839\u636E\u63A5\u6536\u5230\u7684",l.h(n.code,null,"action"),"\uFF08\u4E8B\u4EF6\uFF09\u7C7B\u578B\u5904\u7406\u4E8B\u4EF6"),`
`),`
`,l.h(n.h2,null,l.h(n.code,null,"dispatch")),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"Redux store"),"\u6709\u4E00\u4E2A\u65B9\u6CD5\u53EB",l.h(n.code,null,"dispatch"),"\uFF1B\u66F4\u65B0",l.h(n.code,null,"state"),"\u7684\u552F\u4E00\u65B9\u6CD5\u662F\u8C03\u7528",l.h(n.code,null,"store.dispatch"),"\u5E76\u4F20\u5165\u4E00\u4E2A",l.h(n.code,null,"action"),"\u5BF9\u8C61"),`
`))}function s(e={}){let{wrapper:n}=Object.assign({},u(),e.components);return n?l.h(n,e,l.h(d,e)):d(e)}var h=s;var M=c({name:"MDX_REDUX",components:{MDXComponentContext:h},setup(e,n){return()=>t("div",{class:"markdown-body",style:"padding: 15px;"},t(h,{...n?.attrs}))}});export{M as default};
