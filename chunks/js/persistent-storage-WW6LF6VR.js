import{a as h}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-KLQSSXLF.js";import{J as a,d as l,e as o,na as u,va as t}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-RMEIYZWT.js";o();t();o();o();function i(e){let n=Object.assign({h1:"h1",ul:"ul",li:"li",code:"code",h2:"h2",p:"p",pre:"pre",span:"span"},h(),e.components);return l.h(l.Fragment,null,l.h(n.h1,null,"\u524D\u7AEF\u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,"\u524D\u7AEF\u7684\u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8\u65B9\u6848\u4E3B\u8981\u5305\u62EC",l.h(n.code,null,"Local Storage"),"\u3001",l.h(n.code,null,"Session Storage"),"\u3001",l.h(n.code,null,"IndexedDB"),"\u548C",l.h(n.code,null,"Cookies")),`
`),`
`,l.h(n.h2,null,"Cookie"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`
`,l.h(n.p,null,`HTTP Cookie\uFF08\u4E5F\u53EB Web Cookie \u6216\u6D4F\u89C8\u5668 Cookie\uFF09\u662F\u670D\u52A1\u5668\u53D1\u9001\u5230\u7528\u6237\u6D4F\u89C8\u5668\u5E76\u4FDD\u5B58\u5728\u672C\u5730\u7684\u4E00\u5C0F\u5757\u6570\u636E\uFF1B
Cookie\u901A\u5E38\u662F\u7531Web\u670D\u52A1\u5668\u4F7F\u7528\u54CD\u5E94`,l.h(n.code,null,"Set-Cookie")," HTTP-header\u8BBE\u7F6E\u7684\uFF1B\u7136\u540E\u6D4F\u89C8\u5668\u4F7F\u7528",l.h(n.code,null,"Cookie"),` HTTP-header
\u5C06\u5B83\u4EEC\u81EA\u52A8\u6DFB\u52A0\u5230\uFF08\u51E0\u4E4E\uFF09\u6BCF\u4E2A\u5BF9\u76F8\u540C\u57DF\u7684\u8BF7\u6C42\u4E2D`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528",l.h(n.code,null,"document.cookie"),"\u4ECE\u6D4F\u89C8\u5668\u8BBF\u95EE",l.h(n.code,null,"cookie"),"\uFF1B",l.h(n.code,null,"document.cookie"),"\u7684\u503C\u7531",l.h(n.code,null,"key=value"),`\u7684
\u5065\u503C\u5BF9\u7EC4\u6210\uFF0C\u4EE5`,l.h(n.code,null,";"),"\u5206\u9694\uFF0C\u5176\u4E2D\u6BCF\u4E00\u4E2A\u5065\u503C\u5BF9\u90FD\u662F\u72EC\u7ACB\u7684",l.h(n.code,null,"cookie"),"\uFF1B\u5982\u4E0B"),`
`,l.h(n.pre,null,l.h(n.code,{className:"hljs language-javascript"},l.h(n.span,{className:"hljs-variable language_"},"document"),".",l.h(n.span,{className:"hljs-property"},"cookie")," = ",l.h(n.span,{className:"hljs-string"},'"user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT; secure"'),`
`)),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,l.h(n.code,null,"expires"),"\uFF0C",l.h(n.code,null,"max-age"),"\uFF1A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4E00\u4E2A",l.h(n.code,null,"cookie"),`\u6CA1\u6709\u8BBE\u7F6E\u8FD9\u4E24\u4E2A\u53C2\u6570\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\uFF0C\u90A3\u4E48\u5728\u5173\u95ED\u6D4F
\u89C8\u5668\u4E4B\u540E\uFF0C\u5B83\u5C31\u4F1A\u6D88\u5931\uFF1B\u6B64\u7C7B`,l.h(n.code,null,"cookie"),'\u88AB\u79F0\u4E3A"session cookie\u201D\uFF1B\u4E3A\u4E86\u8BA9',l.h(n.code,null,"cookie"),`\u5728\u6D4F\u89C8\u5668\u5173\u95ED\u540E\u4ECD\u7136\u5B58\u5728\uFF0C
\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E`,l.h(n.code,null,"expires"),"\u6216",l.h(n.code,null,"max-age"),"\u9009\u9879\u4E2D\u7684\u4E00\u4E2A\uFF1B",l.h(n.code,null,"expires"),`\u7684\u503C\u5FC5\u987B\u91C7\u7528GMT\u7684\u65F6\u533A\u683C\u5F0F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528
`,l.h(n.code,null,"data.toUTCString"),"\u83B7\u53D6\uFF1B",l.h(n.code,null,"max-age"),"\u662F",l.h(n.code,null,"expires"),"\u7684\u66FF\u4EE3\u9009\u9879\uFF0C\u6307\u660E\u4E86",l.h(n.code,null,"cookie"),`\u7684\u8FC7\u671F\u65F6\u95F4\u8DDD\u79BB\u5F53\u524D\u65F6\u95F4
\u7684\u79D2\u6570`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,l.h(n.code,null,"secure"),"\u8868\u793ACookie\u5E94\u53EA\u80FD\u88AB\u901A\u8FC7HTTPS\u4F20\u8F93"),`
`),`
`),`
`,l.h(n.h2,null,"Local Storage\uFF0CSession Storage"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`
`,l.h(n.p,null,"Web\u5B58\u50A8\u5BF9\u8C61",l.h(n.code,null,"localStorage"),"\u548C",l.h(n.code,null,"sessionStorage"),`\u5141\u8BB8\u6211\u4EEC\u5728\u6D4F\u89C8\u5668\u4E0A\u4FDD\u5B58\u952E/\u503C\u5BF9\uFF1B\u5728\u9875\u9762\u5237\u65B0\u540E\uFF08\u5BF9\u4E8E
`,l.h(n.code,null,"sessionStorage"),"\uFF09\u751A\u81F3\u6D4F\u89C8\u5668\u5B8C\u5168\u91CD\u542F\uFF08\u5BF9\u4E8E",l.h(n.code,null,"localStorage"),`\uFF09\u540E\uFF0C\u6570\u636E\u4ECD\u7136\u4FDD\u7559\u5728\u6D4F\u89C8\u5668\u4E2D\uFF1B\u5B58\u50A8\u5BF9\u8C61
\u76F8\u5BF9\u4E8ECookie\u6709\u4EE5\u4E0B\u4E00\u4E9B\u4F18\u70B9\uFF1A`),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`\u4E0ECookie\u4E0D\u540C\uFF0CWeb\u5B58\u50A8\u5BF9\u8C61\u4E0D\u4F1A\u968F\u6BCF\u4E2A\u8BF7\u6C42\u88AB\u53D1\u9001\u5230\u670D\u52A1\u5668\uFF1B\u5927\u591A\u6570\u73B0\u4EE3\u6D4F\u89C8\u5668\u90FD\u5141\u8BB8\u4FDD\u5B58\u81F3\u5C11 5MB \u7684
\u6570\u636E\uFF08\u6216\u66F4\u591A\uFF09\uFF0C\u5E76\u4E14\u5177\u6709\u7528\u4E8E\u914D\u7F6E\u6570\u636E\u7684\u8BBE\u7F6E`),`
`,l.h(n.li,null,"\u670D\u52A1\u5668\u65E0\u6CD5\u901A\u8FC7HTTP header\u64CD\u7EB5\u5B58\u50A8\u5BF9\uFF0C\u4E00\u5207\u90FD\u662F\u5728JavaScript\u4E2D\u5B8C\u6210\u7684"),`
`,l.h(n.li,null,"\u5B58\u50A8\u7ED1\u5B9A\u5230\u6E90\uFF08\u57DF/\u534F\u8BAE/\u7AEF\u53E3\u4E09\u8005\uFF09\uFF1B\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u540C\u534F\u8BAE\u6216\u5B50\u57DF\u5BF9\u5E94\u4E0D\u540C\u7684\u5B58\u50A8\u5BF9\u8C61\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u65E0\u6CD5\u8BBF\u95EE\u5F7C\u6B64\u6570\u636E"),`
`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,"Web\u5B58\u50A8\u5BF9\u8C61",l.h(n.code,null,"localStorage"),"\u548C",l.h(n.code,null,"sessionStorage"),"\u90FD\u63D0\u4F9B\u4E86\u76F8\u540C\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"setItem(key, value)")," \u2014\u2014 \u5B58\u50A8\u952E/\u503C\u5BF9"),`
`,l.h(n.li,null,l.h(n.code,null,"getItem(key)")," \u2014\u2014 \u6309\u7167\u952E\u83B7\u53D6\u503C"),`
`,l.h(n.li,null,l.h(n.code,null,"removeItem(key)")," \u2014\u2014 \u5220\u9664\u952E\u53CA\u5176\u5BF9\u5E94\u7684\u503C"),`
`,l.h(n.li,null,l.h(n.code,null,"clear()")," \u2014\u2014 \u5220\u9664\u6240\u6709\u6570\u636E"),`
`,l.h(n.li,null,l.h(n.code,null,"key(index)")," \u2014\u2014 \u83B7\u53D6\u8BE5\u7D22\u5F15\u4E0B\u7684\u952E\u540D"),`
`,l.h(n.li,null,l.h(n.code,null,"length")," \u2014\u2014 \u5B58\u50A8\u7684\u5185\u5BB9\u7684\u957F\u5EA6"),`
`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,l.h(n.code,null,"localStorage"),"\u548C",l.h(n.code,null,"sessionStorage"),"\u7684\u533A\u522B\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`
`,l.h(n.p,null,l.h(n.code,null,"localStorage"),`
\u5728\u540C\u6E90\u7684\u6240\u6709\u6807\u7B7E\u9875\u548C\u7A97\u53E3\u4E4B\u95F4\u5171\u4EAB\u6570\u636E\uFF1B\u6D4F\u89C8\u5668\u91CD\u542F\u540E\u6570\u636E\u4ECD\u7136\u4FDD\u7559`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,l.h(n.code,null,"sessionStorage"),`
\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u6807\u7B7E\u9875\u4E2D\u53EF\u89C1\uFF0C\u5305\u62EC\u540C\u6E90\u7684iframe\uFF1B\u9875\u9762\u5237\u65B0\u540E\u6570\u636E\u4ECD\u7136\u4FDD\u7559\uFF08\u4F46\u6807\u7B7E\u9875\u5173\u95ED\u540E\u6570\u636E\u5219\u4E0D\u518D\u4FDD\u7559\uFF09`),`
`),`
`),`
`),`
`))}function d(e={}){let{wrapper:n}=Object.assign({},h(),e.components);return n?l.h(n,e,l.h(i,e)):i(e)}var c=d;var C=a({name:"MDX_PERSISTENT-STORAGE",components:{MDXComponentContext:c},setup(e,n){return()=>u("div",{class:"markdown-body",style:"padding: 15px;"},u(c,{...n?.attrs}))}});export{C as default};
