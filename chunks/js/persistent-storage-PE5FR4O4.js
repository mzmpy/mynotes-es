import{a as c}from"./chunk-LNJVFRMH.js";import{J as a,d as e,e as l,na as u,va as t}from"./chunk-OXERZ7B4.js";l();t();l();l();function s(o){let n=Object.assign({h1:"h1",ul:"ul",li:"li",code:"code",h2:"h2",p:"p",pre:"pre",span:"span"},c(),o.components);return e.h(e.Fragment,null,e.h(n.h1,null,"\u524D\u7AEF\u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8"),`
`,e.h(n.ul,null,`
`,e.h(n.li,null,"\u524D\u7AEF\u7684\u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8\u65B9\u6848\u4E3B\u8981\u5305\u62EC",e.h(n.code,null,"Local Storage"),"\u3001",e.h(n.code,null,"Session Storage"),"\u3001",e.h(n.code,null,"IndexedDB"),"\u548C",e.h(n.code,null,"Cookies")),`
`),`
`,e.h(n.h2,null,"Cookie"),`
`,e.h(n.ul,null,`
`,e.h(n.li,null,`
`,e.h(n.p,null,`HTTP Cookie\uFF08\u4E5F\u53EB Web Cookie \u6216\u6D4F\u89C8\u5668 Cookie\uFF09\u662F\u670D\u52A1\u5668\u53D1\u9001\u5230\u7528\u6237\u6D4F\u89C8\u5668\u5E76\u4FDD\u5B58\u5728\u672C\u5730\u7684\u4E00\u5C0F\u5757\u6570\u636E\uFF1B
Cookie\u901A\u5E38\u662F\u7531Web\u670D\u52A1\u5668\u4F7F\u7528\u54CD\u5E94`,e.h(n.code,null,"Set-Cookie")," HTTP-header\u8BBE\u7F6E\u7684\uFF1B\u7136\u540E\u6D4F\u89C8\u5668\u4F7F\u7528",e.h(n.code,null,"Cookie"),` HTTP-header
\u5C06\u5B83\u4EEC\u81EA\u52A8\u6DFB\u52A0\u5230\uFF08\u51E0\u4E4E\uFF09\u6BCF\u4E2A\u5BF9\u76F8\u540C\u57DF\u7684\u8BF7\u6C42\u4E2D`),`
`),`
`,e.h(n.li,null,`
`,e.h(n.p,null,"\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528",e.h(n.code,null,"document.cookie"),"\u4ECE\u6D4F\u89C8\u5668\u8BBF\u95EE",e.h(n.code,null,"cookie"),"\uFF1B",e.h(n.code,null,"document.cookie"),"\u7684\u503C\u7531",e.h(n.code,null,"key=value"),`\u7684
\u5065\u503C\u5BF9\u7EC4\u6210\uFF0C\u4EE5`,e.h(n.code,null,";"),"\u5206\u9694\uFF0C\u5176\u4E2D\u6BCF\u4E00\u4E2A\u5065\u503C\u5BF9\u90FD\u662F\u72EC\u7ACB\u7684",e.h(n.code,null,"cookie"),"\uFF1B\u5982\u4E0B"),`
`,e.h(n.pre,null,e.h(n.code,{className:"hljs language-javascript"},e.h(n.span,{className:"hljs-variable language_"},"document"),".",e.h(n.span,{className:"hljs-property"},"cookie")," = ",e.h(n.span,{className:"hljs-string"},'"user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT; secure"'),`
`)),`
`),`
`,e.h(n.li,null,`
`,e.h(n.p,null,e.h(n.code,null,"expires"),"\uFF0C",e.h(n.code,null,"max-age"),"\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4E00\u4E2A",e.h(n.code,null,"cookie"),`\u6CA1\u6709\u8BBE\u7F6E\u8FD9\u4E24\u4E2A\u53C2\u6570\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\uFF0C\u90A3\u4E48\u5728\u5173\u95ED\u6D4F
\u89C8\u5668\u4E4B\u540E\uFF0C\u5B83\u5C31\u4F1A\u6D88\u5931\uFF1B\u6B64\u7C7B`,e.h(n.code,null,"cookie"),'\u88AB\u79F0\u4E3A"session cookie\u201D\uFF1B\u4E3A\u4E86\u8BA9',e.h(n.code,null,"cookie"),`\u5728\u6D4F\u89C8\u5668\u5173\u95ED\u540E\u4ECD\u7136\u5B58\u5728\uFF0C
\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E`,e.h(n.code,null,"expires"),"\u6216",e.h(n.code,null,"max-age"),"\u9009\u9879\u4E2D\u7684\u4E00\u4E2A\uFF1B",e.h(n.code,null,"expires"),`\u7684\u503C\u5FC5\u987B\u91C7\u7528GMT\u7684\u65F6\u533A\u683C\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528
`,e.h(n.code,null,"data.toUTCString"),"\u83B7\u53D6\uFF1B",e.h(n.code,null,"max-age"),"\u662F",e.h(n.code,null,"expires"),"\u7684\u66FF\u4EE3\u9009\u9879\uFF0C\u6307\u660E\u4E86",e.h(n.code,null,"cookie"),`\u7684\u8FC7\u671F\u65F6\u95F4\u8DDD\u79BB\u5F53\u524D\u65F6\u95F4
\u7684\u79D2\u6570`),`
`),`
`,e.h(n.li,null,`
`,e.h(n.p,null,e.h(n.code,null,"secure"),"\u8868\u793ACookie\u5E94\u53EA\u80FD\u88AB\u901A\u8FC7HTTPS\u4F20\u8F93"),`
`),`
`),`
`,e.h(n.h2,null,"LocalStorage\uFF0CsessionStorage"))}function d(o={}){let{wrapper:n}=Object.assign({},c(),o.components);return n?e.h(n,o,e.h(s,o)):s(o)}var h=d;var T=a({name:"MDX_PERSISTENT-STORAGE",components:{MDXComponentContext:h},setup(o,n){return()=>u("div",{class:"markdown-body",style:"padding: 15px;"},u(h,{...n?.attrs}))}});export{T as default};
