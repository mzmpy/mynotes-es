import{a as o}from"./chunk-TVDML5EL.js";import{L as a,d as l,e as h,pa as s,xa as d}from"./chunk-KWRLOSEX.js";h();d();h();h();function c(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",p:"p",ol:"ol",a:"a"},o(),e.components);return l.h(l.Fragment,null,l.h(n.h1,null,"\u7F51\u7EDC\u8BF7\u6C42"),`
`,l.h(n.h2,null,"Fetch"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"fetch"),"\u662F\u4E00\u79CD\u73B0\u4EE3\u901A\u7528\u7684\u7F51\u7EDC\u8BF7\u6C42\u65B9\u5F0F"),`
`),`
`,l.h(n.pre,null,l.h(n.code,{className:"hljs language-javascript"},l.h(n.span,{className:"hljs-keyword"},"const")," response = ",l.h(n.span,{className:"hljs-keyword"},"await")," ",l.h(n.span,{className:"hljs-title function_"},"fetch"),`(url[, options])
`,l.h(n.span,{className:"hljs-comment"},"// or"),`
`,l.h(n.span,{className:"hljs-keyword"},"const")," request = ",l.h(n.span,{className:"hljs-keyword"},"new")," ",l.h(n.span,{className:"hljs-title class_"},"Request"),"(input[, init]) ",l.h(n.span,{className:"hljs-comment"},"// \u521B\u5EFA\u4E00\u4E2ARequest\u5BF9\u8C61\u5B9E\u4F8B"),`
`,l.h(n.span,{className:"hljs-keyword"},"const")," response = ",l.h(n.span,{className:"hljs-keyword"},"await")," ",l.h(n.span,{className:"hljs-title function_"},"fetch"),`(request)
`)),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`
`,l.h(n.p,null,l.h(n.code,null,"options"),"\u9009\u9879\u53C2\u6570\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"method"),"\uFF1A",l.h(n.code,null,"HTTP"),"\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u5982\uFF1A",l.h(n.code,null,"GET"),"\uFF08\u9ED8\u8BA4\uFF09\u3001",l.h(n.code,null,"POST"),"\u3001",l.h(n.code,null,"PUT"),"\u7B49"),`
`,l.h(n.li,null,l.h(n.code,null,"headers"),"\uFF1A\u8BBE\u7F6E",l.h(n.code,null,"HTTP"),"\u8BF7\u6C42\u5934\uFF0C\u662F\u4E00\u4E2AObject\u5B9E\u4F8B"),`
`,l.h(n.li,null,l.h(n.code,null,"body"),"\uFF1A\u9ED8\u8BA4\u662F",l.h(n.code,null,"undefined"),"\uFF0C\u4E5F\u53EF\u4EE5\u662F",l.h(n.code,null,"string"),"\uFF08",l.h(n.code,null,"application/json"),"\u7F16\u7801\uFF09\u3001",l.h(n.code,null,"FormData"),"\uFF08",l.h(n.code,null,"multipart/form-data"),`\u7F16\u7801\uFF09\u3001
`,l.h(n.code,null,"Blob"),"\u3001",l.h(n.code,null,"BufferSource"),"\u6216",l.h(n.code,null,"URLSearchParams"),"\uFF08",l.h(n.code,null,"application/x-www-form-urlencoded"),"\u7F16\u7801\uFF09\u4E4B\u4E00"),`
`,l.h(n.li,null,l.h(n.code,null,"referrer"),"\uFF1A",l.h(n.code,null,'"about:client"'),"\u6216",l.h(n.code,null,'""'),"\u4EE5\u4E0D\u53D1\u9001",l.h(n.code,null,"Referer header"),"\uFF0C\u6216\u8005\u662F\u5F53\u524D\u6E90\u7684",l.h(n.code,null,"url")),`
`,l.h(n.li,null,l.h(n.code,null,"referrerPolicy"),"\uFF1A",l.h(n.code,null,'"no-referrer-when-downgrade"'),"\u6216\u8005",l.h(n.code,null,'"no-referrer"'),"\u3001",l.h(n.code,null,'"origin"'),"\u3001",l.h(n.code,null,'"same-origin"'),"\u3002\u3002\u3002"),`
`,l.h(n.li,null,l.h(n.code,null,"mode"),"\uFF1A",l.h(n.code,null,'"cors"'),"\u6216\u8005",l.h(n.code,null,'"same-origin"'),"\u3001",l.h(n.code,null,'"no-cors"')),`
`,l.h(n.li,null,l.h(n.code,null,"credentials"),"\uFF1A",l.h(n.code,null,'"same-origin"'),"\u6216\u8005",l.h(n.code,null,'"omit"'),"\u3001",l.h(n.code,null,'"include"')),`
`,l.h(n.li,null,l.h(n.code,null,"cache"),"\uFF1A",l.h(n.code,null,'"default"'),"\u6216\u8005",l.h(n.code,null,'"no-store"'),"\u3001",l.h(n.code,null,'"reload"'),"\u3001",l.h(n.code,null,'"no-cache"'),"\u3001",l.h(n.code,null,'"force-cache"'),"\u6216",l.h(n.code,null,'"only-if-cached"')),`
`,l.h(n.li,null,l.h(n.code,null,"redirect"),"\uFF1A",l.h(n.code,null,'"follow"'),"\u6216\u8005",l.h(n.code,null,'"manual"'),"\u3001",l.h(n.code,null,'"error"')),`
`,l.h(n.li,null,l.h(n.code,null,"integrity"),"\uFF1A",l.h(n.code,null,'""'),"\u6216\u8005\u4E00\u4E2A",l.h(n.code,null,"hash"),"\uFF0C\u50CF",l.h(n.code,null,'"sha256-abcdef1234567890"')),`
`,l.h(n.li,null,l.h(n.code,null,"keepalive"),"\uFF1A",l.h(n.code,null,"false"),"\u6216\u8005",l.h(n.code,null,"true")),`
`,l.h(n.li,null,l.h(n.code,null,"signal"),"\uFF1A",l.h(n.code,null,"undefined"),"\u6216\u8005",l.h(n.code,null,"AbortController"),"\u6765\u4E2D\u6B62\u8BF7\u6C42"),`
`,l.h(n.li,null,l.h(n.code,null,"window"),"\uFF1A",l.h(n.code,null,"window"),"\u6216\u8005",l.h(n.code,null,"null")),`
`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,l.h(n.code,null,"response"),":"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u54CD\u5E94\u72B6\u6001\u76F8\u5173\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"status"),"\uFF1A\u5305\u542B",l.h(n.code,null,"Response"),"\u7684\u72B6\u6001\u7801"),`
`,l.h(n.li,null,l.h(n.code,null,"statusText"),":\u5305\u542B\u4E0E\u8BE5",l.h(n.code,null,"Response"),"\u72B6\u6001\u7801\u4E00\u81F4\u7684\u72B6\u6001\u4FE1\u606F"),`
`,l.h(n.li,null,l.h(n.code,null,"ok"),"\uFF1A",l.h(n.code,null,"boolean"),"\uFF0C\u6807\u793A\u8BE5",l.h(n.code,null,"Response"),"\u6210\u529F\uFF08",l.h(n.code,null,"HTTP"),"\u72B6\u6001\u7801\u7684\u8303\u56F4\u5728",l.h(n.code,null,"200-299"),"\uFF09"),`
`,l.h(n.li,null,l.h(n.code,null,"headers"),"\uFF1A\u5305\u542B\u6B64",l.h(n.code,null,"Response"),"\u6240\u5173\u8054\u7684",l.h(n.code,null,"Headers")),`
`,l.h(n.li,null,l.h(n.code,null,"body"),"\uFF1A\u66B4\u9732\u4E00\u4E2A",l.h(n.code,null,"ReadableStream"),"\u7C7B\u578B\u7684",l.h(n.code,null,"Response body"),"\u5185\u5BB9"),`
`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u83B7\u53D6",l.h(n.code,null,"response body"),"\u54CD\u5E94\u4F53\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"response.text()"),"\uFF1A\u8BFB\u53D6",l.h(n.code,null,"response"),"\uFF0C\u5E76\u4EE5\u6587\u672C\u5F62\u5F0F\u8FD4\u56DE",l.h(n.code,null,"response")),`
`,l.h(n.li,null,l.h(n.code,null,"response.json()"),"\uFF1A\u5C06",l.h(n.code,null,"response"),"\u89E3\u6790\u4E3A",l.h(n.code,null,"JSON"),"\u5BF9\u8C61\u5F62\u5F0F"),`
`,l.h(n.li,null,l.h(n.code,null,"response.formData()"),"\uFF1A\u4EE5",l.h(n.code,null,"FormData"),"\u5BF9\u8C61\uFF08",l.h(n.code,null,"multipart/form-data"),"\u7F16\u7801\uFF09\u7684\u5F62\u5F0F\u8FD4\u56DE",l.h(n.code,null,"response")),`
`,l.h(n.li,null,l.h(n.code,null,"response.blob()"),"\uFF1A\u4EE5",l.h(n.code,null,"Blob"),"\uFF08\u5177\u6709\u7C7B\u578B\u7684\u4E8C\u8FDB\u5236\u6570\u636E\uFF09\u5F62\u5F0F\u8FD4\u56DE",l.h(n.code,null,"response")),`
`,l.h(n.li,null,l.h(n.code,null,"response.arrayBuffer()"),"\uFF1A\u4EE5",l.h(n.code,null,"ArrayBuffer"),"\uFF08\u4F4E\u7EA7\u522B\u7684\u4E8C\u8FDB\u5236\u6570\u636E\uFF09\u5F62\u5F0F\u8FD4\u56DE",l.h(n.code,null,"response")),`
`),`
`),`
`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,l.h(n.code,null,"fetch"),"\u83B7\u53D6\u54CD\u5E94\u901A\u5E38\u9700\u8981\u7ECF\u8FC7\u4E24\u4E2A\u9636\u6BB5\uFF1A"),`
`,l.h(n.ol,null,`
`,l.h(n.li,null,"\u5F53\u670D\u52A1\u5668\u53D1\u9001\u4E86\u54CD\u5E94\u5934\uFF08",l.h(n.code,null,"response header"),"\uFF09\uFF0C",l.h(n.code,null,"fetch"),"\u8FD4\u56DE\u7684",l.h(n.code,null,"promise"),"\u5C31\u4F7F\u7528\u5185\u5EFA\u7684",l.h(n.code,null,"Response class"),`\u5BF9\u8C61\u6765\u5BF9\u54CD\u5E94\u5934\u8FDB\u884C\u89E3\u6790\uFF1B
\u5F53\u524D\u8FD8\u6CA1\u6709\u54CD\u5E94\u4F53\uFF08`,l.h(n.code,null,"response body"),"\uFF09\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u68C0\u67E5\u54CD\u5E94\u5934\uFF0C\u6765\u68C0\u67E5",l.h(n.code,null,"HTTP"),"\u72B6\u6001\u4EE5\u786E\u5B9A\u8BF7\u6C42\u662F\u5426\u6210\u529F\uFF1B\u5982\u679C",l.h(n.code,null,"fetch"),`
\u65E0\u6CD5\u5EFA\u7ACB\u4E00\u4E2A`,l.h(n.code,null,"HTTP"),"\u8BF7\u6C42\uFF0C\u4F8B\u5982\u7F51\u7EDC\u95EE\u9898\uFF0C\u4EA6\u6216\u662F\u8BF7\u6C42\u7684\u7F51\u5740\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48",l.h(n.code,null,"promise"),"\u5C31\u4F1A",l.h(n.code,null,"reject"),"\uFF1B\u5F02\u5E38\u7684",l.h(n.code,null,"HTTP"),"\u72B6\u6001\uFF0C\u4F8B\u5982",l.h(n.code,null,"404"),`\u6216
`,l.h(n.code,null,"500"),"\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u51FA\u73B0",l.h(n.code,null,"error")),`
`,l.h(n.li,null,"\u4E3A\u4E86\u83B7\u53D6",l.h(n.code,null,"response body"),"\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u4E00\u4E2A\u5176\u4ED6\u7684\u65B9\u6CD5\u8C03\u7528\uFF1B",l.h(n.code,null,"response"),"\u63D0\u4F9B\u4E86\u591A\u79CD\u57FA\u4E8E",l.h(n.code,null,"promise"),`\u7684\u65B9\u6CD5\uFF0C\u6765\u4EE5\u4E0D\u540C\u7684\u683C\u5F0F\u8BBF\u95EE
`,l.h(n.code,null,"body"),"\uFF1A",l.h(n.code,null,"response.text()"),"\u3001",l.h(n.code,null,"response.json()"),"\u3001",l.h(n.code,null,"response.formData()"),"\u3002\u3002\u3002"),`
`),`
`),`
`),`
`,l.h(n.h2,null,"\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF08Cross-Origin Resource Sharing \u2014\u2014 CORS\uFF09"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u6E90\uFF08",l.h(n.code,null,"origin"),"\uFF09\u2014\u2014 \u57DF\uFF08domain\uFF09\u3001\u7AEF\u53E3\uFF08port\uFF09\u3001\u534F\u8BAE\uFF08protocol\uFF09\u7684\u7EC4\u5408"),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u524D\u7AEF\u8DE8\u6E90\u65B9\u6CD5\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u4F7F\u7528",l.h(n.code,null,"script"),"\u548C",l.h(n.code,null,"JSONP"),"\uFF1A",l.h(n.code,null,"JSONP"),"\u7684\u7F3A\u70B9\u662F\u9700\u8981\u524D\u540E\u7AEF\u540C\u65F6\u5BF9\u8FD9\u4E00\u884C\u4E3A\u63D0\u4F9B\u652F\u6301\uFF0C\u4E14\u53EA\u652F\u6301",l.h(n.code,null,"GET"),"\u65B9\u6CD5"),`
`,l.h(n.pre,null,l.h(n.code,{className:"hljs language-javascript"},l.h(n.span,{className:"hljs-comment"},"// \u4F8B\u5B50\uFF1A\u4EE5jsonp\u7684\u65B9\u5F0F\u4ECE http://another.com \u7F51\u7AD9\u83B7\u53D6\u5929\u6C14\u6570\u636E"),`

`,l.h(n.span,{className:"hljs-comment"},"// \u58F0\u660E\u5904\u7406\u5929\u6C14\u6570\u636E\u7684\u51FD\u6570"),`
`,l.h(n.span,{className:"hljs-keyword"},"function")," ",l.h(n.span,{className:"hljs-title function_"},"gotWeather"),"(",l.h(n.span,{className:"hljs-params"},"{ temperature, humidity }"),`) {
  `,l.h(n.span,{className:"hljs-title function_"},"alert"),"(",l.h(n.span,{className:"hljs-string"},"`temperature: ",l.h(n.span,{className:"hljs-subst"},"${temperature}"),", humidity: ",l.h(n.span,{className:"hljs-subst"},"${humidity}"),"`"),`)
}

`,l.h(n.span,{className:"hljs-comment"},"// \u52A8\u6001\u521B\u5EFAscript"),`
`,l.h(n.span,{className:"hljs-keyword"},"let")," script = ",l.h(n.span,{className:"hljs-variable language_"},"document"),".",l.h(n.span,{className:"hljs-title function_"},"createElement"),"(",l.h(n.span,{className:"hljs-string"},"'script'"),`);
script.`,l.h(n.span,{className:"hljs-property"},"src")," = ",l.h(n.span,{className:"hljs-string"},"`http://another.com/weather.json?callback=gotWeather`"),`
`,l.h(n.span,{className:"hljs-variable language_"},"document"),".",l.h(n.span,{className:"hljs-property"},"body"),".",l.h(n.span,{className:"hljs-title function_"},"append"),`(script)
`)),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u8DE8\u6E90\u8BF7\u6C42\uFF1A\u6709\u4E24\u79CD\uFF0C\u5B89\u5168\u8BF7\u6C42\u548C\u6240\u6709\u5176\u5B83\u8BF7\u6C42"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u5B89\u5168\u8BF7\u6C42\uFF1A\u9700\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u4E24\u4E2A\u6761\u4EF6"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u5B89\u5168\u7684\u65B9\u6CD5\uFF1A",l.h(n.code,null,"GET"),"\u3001",l.h(n.code,null,"POST"),"\u3001",l.h(n.code,null,"HEAD")),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u5B89\u5168\u7684",l.h(n.code,null,"headers"),"\u2014\u2014 \u4EC5\u5141\u8BB8\u81EA\u5B9A\u4E49\u4E0B\u5217",l.h(n.code,null,"header"),"\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"Accept")),`
`,l.h(n.li,null,l.h(n.code,null,"Accept-Language")),`
`,l.h(n.li,null,l.h(n.code,null,"Content-Language")),`
`,l.h(n.li,null,l.h(n.code,null,"Content-Type"),"\u7684\u503C\u4E3A",l.h(n.code,null,"application/x-www-form-urlencoded"),"\u3001",l.h(n.code,null,"multipart/form-data"),"\u6216",l.h(n.code,null,"text/plain")),`
`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u5BF9\u4E8E\u5B89\u5168\u8BF7\u6C42\uFF0C\u6D4F\u89C8\u5668\u5728\u53D1\u9001\u8BF7\u6C42\u65F6\u4F1A\u81EA\u52A8\u5E26\u4E0A",l.h(n.code,null,"Origin header"),"\uFF1B\u670D\u52A1\u5668\u4F1A\u68C0\u67E5",l.h(n.code,null,"Origin"),`\uFF0C\u5982\u679C\u540C\u610F\u63A5\u53D7\u8FD9\u6837\u7684\u8BF7\u6C42\uFF0C\u5C31\u4F1A\u5728\u54CD\u5E94
\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u7279\u6B8A\u7684`,l.h(n.code,null,"header Access-Control-Allow-Origin"),"\uFF1B\u8BE5",l.h(n.code,null,"header"),`\u5305\u542B\u4E86\u5141\u8BB8\u7684\u6E90\u6216\u8005\u4E00\u4E2A\u661F\u53F7 *\uFF08\u4EE3\u8868\u5141\u8BB8\u6240\u6709\u6E90\uFF09\uFF1B\u7136\u540E
\u54CD\u5E94\u6210\u529F\uFF0C\u5426\u5219\u62A5\u9519`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u6D4F\u89C8\u5668\u5728\u8FD9\u91CC\u626E\u6F14\u53D7\u88AB\u4FE1\u4EFB\u7684\u4E2D\u95F4\u4EBA\u7684\u89D2\u8272\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,"\u5B83\u786E\u4FDD\u53D1\u9001\u7684\u8DE8\u6E90\u8BF7\u6C42\u5E26\u6709\u6B63\u786E\u7684",l.h(n.code,null,"Origin")),`
`,l.h(n.li,null,"\u5B83\u68C0\u67E5\u54CD\u5E94\u4E2D\u7684\u8BB8\u53EF",l.h(n.code,null,"Access-Control-Allow-Origin"),"\uFF0C\u5982\u679C\u5B58\u5728\uFF0C\u5219\u5141\u8BB8",l.h(n.code,null,"JavaScript"),"\u8BBF\u95EE\u54CD\u5E94\uFF0C\u5426\u5219\u5C06\u5931\u8D25\u5E76\u62A5\u9519"),`
`),`
`),`
`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u975E\u5B89\u5168\u8BF7\u6C42\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u975E\u5B89\u5168\u8BF7\u6C42\u4F1A\u5148\u53D1\u9001\u4E00\u4E2A\u521D\u6B65\u7684\u3001\u6240\u8C13\u7684\u201C\u9884\u68C0\uFF08preflight\uFF09\u201D\u8BF7\u6C42\uFF0C\u6765\u8BF7\u6C42\u8BB8\u53EF\uFF1B\u9884\u68C0\u8BF7\u6C42\u4F7F\u7528",l.h(n.code,null,"OPTIONS"),"\u65B9\u6CD5\uFF0C\u5B83\u6CA1\u6709",l.h(n.code,null,"body"),"\uFF0C\u4F46\u662F\u6709\u4E09\u4E2A",l.h(n.code,null,"header"),"\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"Origin"),"\u5E26\u6709\u53D1\u8D77\u8BF7\u6C42\u7684\u6E90"),`
`,l.h(n.li,null,l.h(n.code,null,"Access-Control-Request-Method"),"\u5E26\u6709\u975E\u5B89\u5168\u8BF7\u6C42\u7684\u65B9\u6CD5"),`
`,l.h(n.li,null,l.h(n.code,null,"Access-Control-Request-Headers"),"\u63D0\u4F9B\u4E00\u4E2A\u4EE5\u9017\u53F7\u5206\u9694\u7684\u975E\u5B89\u5168",l.h(n.code,null,"HTTP-Header"),"\u5217\u8868"),`
`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u5982\u679C\u670D\u52A1\u5668\u540C\u610F\u5904\u7406\u8BF7\u6C42\uFF0C\u90A3\u4E48\u5B83\u4F1A\u8FDB\u884C\u54CD\u5E94\uFF0C\u6B64\u54CD\u5E94\u7684\u72B6\u6001\u7801\u5E94\u8BE5\u4E3A",l.h(n.code,null,"200"),"\uFF0C\u6CA1\u6709",l.h(n.code,null,"body"),"\uFF0C\u5177\u6709",l.h(n.code,null,"header"),"\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"ccess-Control-Allow-Origin"),"\u5FC5\u987B\u4E3A",l.h(n.code,null,"*"),"\u6216\u8FDB\u884C\u8BF7\u6C42\u7684\u6E90\u624D\u80FD\u5141\u8BB8\u6B64\u8BF7\u6C42"),`
`,l.h(n.li,null,l.h(n.code,null,"Access-Control-Allow-Methods"),"\u5FC5\u987B\u5177\u6709\u5141\u8BB8\u7684\u65B9\u6CD5"),`
`,l.h(n.li,null,l.h(n.code,null,"Access-Control-Allow-Headers"),"\u5FC5\u987B\u5177\u6709\u4E00\u4E2A\u5141\u8BB8\u7684",l.h(n.code,null,"header"),"\u5217\u8868"),`
`,l.h(n.li,null,"\u53E6\u5916\uFF0C",l.h(n.code,null,"Access-Control-Max-Age"),"\u53EF\u4EE5\u6307\u5B9A\u7F13\u5B58\u6B64\u6743\u9650\u7684\u79D2\u6570"),`
`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,"\u9884\u68C0\u6210\u529F\u540E\uFF0C\u6D4F\u89C8\u5668\u73B0\u5728\u53D1\u51FA\u4E3B\u8BF7\u6C42\uFF1B\u8FC7\u7A0B\u4E0E\u5B89\u5168\u8BF7\u6C42\u7684\u8FC7\u7A0B\u76F8\u540C"),`
`),`
`),`
`),`
`),`
`),`
`,l.h(n.li,null,`
`,l.h(n.p,null,l.h(n.code,null,"proxy"),"\u4EE3\u7406"),`
`),`
`),`
`),`
`),`
`,l.h(n.h2,null,"XMLHttpRequest"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,`
`,l.h(n.p,null,l.h(n.code,null,"XMLHttpRequest"),"\u662F\u4E00\u4E2A\u5185\u5EFA\u7684\u6D4F\u89C8\u5668\u5BF9\u8C61\uFF0C\u5B83\u5141\u8BB8\u4F7F\u7528",l.h(n.code,null,"JavaScript"),"\u53D1\u9001",l.h(n.code,null,"HTTP"),"\u8BF7\u6C42"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,"\u4F7F\u7528\u6784\u9020\u5668",l.h(n.code,null,"XMLHttpRequest"),"\u521B\u5EFA",l.h(n.code,null,"XMLHttpRequest"),"\u5B9E\u4F8B:"),`
`),`
`,l.h(n.pre,null,l.h(n.code,{className:"hljs language-javascript"},l.h(n.span,{className:"hljs-keyword"},"const")," xhr = ",l.h(n.span,{className:"hljs-keyword"},"new")," ",l.h(n.span,{className:"hljs-title class_"},"XMLHttpRequest"),`()
`)),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,"\u521D\u59CB\u5316",l.h(n.code,null,"xhr"),"\uFF1B",l.h(n.code,null,"open"),"\u7684\u8C03\u7528\u4E0D\u4F1A\u5EFA\u7ACB\u8FDE\u63A5\uFF1B\u5B83\u4EC5\u914D\u7F6E\u8BF7\u6C42\uFF0C\u800C\u7F51\u7EDC\u6D3B\u52A8\u4EC5\u4EE5",l.h(n.code,null,"send"),"\u8C03\u7528\u5F00\u542F\uFF1A"),`
`),`
`,l.h(n.pre,null,l.h(n.code,{className:"hljs language-javascript"},"xhr.",l.h(n.span,{className:"hljs-title function_"},"open"),"(methos, url[, ",l.h(n.span,{className:"hljs-keyword"},"async"),`, user, password])
`)),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,"\u53D1\u9001\u8BF7\u6C42\u4F7F\u7528",l.h(n.code,null,"send"),"\u65B9\u6CD5\uFF0C\u6B64\u65B9\u6CD5\u5305\u542B\u4E86\u4E00\u4E2A\u53EF\u9009\u7684",l.h(n.code,null,"body"),"\u53C2\u6570\uFF1A"),`
`),`
`,l.h(n.pre,null,l.h(n.code,{className:"hljs language-javascript"},"xhr.",l.h(n.span,{className:"hljs-title function_"},"send"),`([body])
`)),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"XMLHttpRequest"),"\u7684\u4E8B\u4EF6\u56DE\u8C03\uFF1A"),`
`),`
`,l.h(n.pre,null,l.h(n.code,{className:"hljs language-javascript"},l.h(n.span,{className:"hljs-comment"},"// \u5F53\u8BF7\u6C42\u5B8C\u6210\uFF08\u5373\u4F7FHTTP\u72B6\u6001\u4E3A400\u6216500\u7B49\uFF09\uFF0C\u5E76\u4E14\u54CD\u5E94\u5DF2\u5B8C\u5168\u4E0B\u8F7D"),`
xhr.`,l.h(n.span,{className:"hljs-property"},"onload")," = ",l.h(n.span,{className:"hljs-keyword"},"function"),"(",l.h(n.span,{className:"hljs-params"}),`) {
  ...
}

`,l.h(n.span,{className:"hljs-comment"},"// \u5F53\u65E0\u6CD5\u53D1\u51FA\u8BF7\u6C42\uFF0C\u4F8B\u5982\u7F51\u7EDC\u4E2D\u65AD\u6216\u8005\u65E0\u6548\u7684URL"),`
xhr.`,l.h(n.span,{className:"hljs-property"},"onerror")," = ",l.h(n.span,{className:"hljs-keyword"},"function"),"(",l.h(n.span,{className:"hljs-params"}),`) {
  ...
}

`,l.h(n.span,{className:"hljs-comment"},"// \u5728\u4E0B\u8F7D\u54CD\u5E94\u671F\u95F4\u5B9A\u671F\u89E6\u53D1\uFF0C\u62A5\u544A\u5DF2\u7ECF\u4E0B\u8F7D\u8FDB\u5EA6"),`
xhr.`,l.h(n.span,{className:"hljs-property"},"onprogress")," = ",l.h(n.span,{className:"hljs-keyword"},"function"),"(",l.h(n.span,{className:"hljs-params"},"event"),`) {
  `,l.h(n.span,{className:"hljs-comment"},"// event\u5305\u542Bloaded\u548Ctotal\u4E24\u4E2A\u5C5E\u6027\uFF0C\u5206\u522B\u8868\u793A\u4E00\u4E0B\u8F7D\u5927\u5C0F\u548C\u603B\u5927\u5C0F"),`
  ...
}
`)),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,"\u4E2D\u6B62\u8BF7\u6C42\uFF1A",`
`,l.h(n.pre,null,l.h(n.code,{className:"hljs language-javascript"},l.h(n.span,{className:"hljs-comment"},"// \u5B83\u4F1A\u89E6\u53D1abort\u4E8B\u4EF6\uFF0C\u4E14xhr.status\u53D8\u4E3A 0"),`
xhr.`,l.h(n.span,{className:"hljs-title function_"},"abort"),`()
`)),`
`),`
`,l.h(n.li,null,l.h(n.code,null,"xhr.upload"),"\u4E13\u95E8\u7528\u4E8E\u8DDF\u8E2A\u4E0A\u4F20\u4E8B\u4EF6\uFF1A"),`
`,l.h(n.li,null,"\u8BFB\u53D6/\u5199\u5165\u8BF7\u6C42\u5934\uFF1A",`
`,l.h(n.pre,null,l.h(n.code,{className:"hljs language-javascript"},"xhr.",l.h(n.span,{className:"hljs-title function_"},"setRequestHeader"),`(name, value)
xhr.`,l.h(n.span,{className:"hljs-title function_"},"getResponseHeader"),`(name)
xhr.`,l.h(n.span,{className:"hljs-title function_"},"getAllResponseHeaders"),`()
`)),`
`),`
`,l.h(n.li,null,l.h(n.code,null,"xhr"),"\u7684\u4E00\u4E9B\u5C5E\u6027\uFF1A",`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,"status"),"\uFF1A",l.h(n.code,null,"HTTP"),"\u72B6\u6001\u7801\uFF0C\u4F8B\u5982",l.h(n.code,null,"200"),"\u3001",l.h(n.code,null,"404"),"\u7B49"),`
`,l.h(n.li,null,l.h(n.code,null,"statusText"),"\uFF1A",l.h(n.code,null,"HTTP"),"\u72B6\u6001\u6D88\u606F\uFF08\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF09"),`
`,l.h(n.li,null,l.h(n.code,null,"response"),"\uFF1A",l.h(n.code,null,"response body")),`
`,l.h(n.li,null,"\u670D\u52A1\u5668\u54CD\u5E94\u4E00\u65E6\u6709\u4E86\u7ED3\u679C\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0A\u5C5E\u6027\u63A5\u6536\u7ED3\u679C"),`
`,l.h(n.li,null,l.h(n.code,null,"timeout"),"\uFF1A\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4"),`
`,l.h(n.li,null,l.h(n.code,null,"responseType"),"\uFF1A\u8BBE\u7F6E\u54CD\u5E94\u6570\u636E\u683C\u5F0F",`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.code,null,'""'),"\uFF08\u9ED8\u8BA4\uFF09\u2014\u2014 \u54CD\u5E94\u683C\u5F0F\u4E3A\u5B57\u7B26\u4E32\uFF0C"),`
`,l.h(n.li,null,l.h(n.code,null,'"text"')," \u2014\u2014 \u54CD\u5E94\u683C\u5F0F\u4E3A\u5B57\u7B26\u4E32\uFF0C"),`
`,l.h(n.li,null,l.h(n.code,null,'"arraybuffer"')," \u2014\u2014 \u54CD\u5E94\u683C\u5F0F\u4E3A",l.h(n.code,null,"ArrayBuffer")),`
`,l.h(n.li,null,l.h(n.code,null,'"blob"')," \u2014\u2014 \u54CD\u5E94\u683C\u5F0F\u4E3A",l.h(n.code,null,"Blob")),`
`,l.h(n.li,null,l.h(n.code,null,'"document"')," \u2014\u2014 \u54CD\u5E94\u683C\u5F0F\u4E3A",l.h(n.code,null,"XML document")),`
`,l.h(n.li,null,l.h(n.code,null,'"json"')," \u2014\u2014 \u54CD\u5E94\u683C\u5F0F\u4E3A",l.h(n.code,null,"JSON"),"\uFF08\u81EA\u52A8\u89E3\u6790\uFF09"),`
`),`
`),`
`,l.h(n.li,null,l.h(n.code,null,"readyState"),"\uFF1A",l.h(n.code,null,"XMLHttpRequest"),"\u7684\u72B6\u6001\uFF08",l.h(n.code,null,"state"),"\uFF09\u4F1A\u968F\u7740\u5B83\u7684\u5904\u7406\u8FDB\u5EA6\u53D8\u5316\u800C\u53D8\u5316\uFF0C\u56E0\u6B64\u901A\u8FC7",l.h(n.code,null,"xhr.readyState"),"\u6765\u4E86\u89E3\u5F53\u524D\u72B6\u6001\uFF1B\u914D\u5408\u4E8B\u4EF6",l.h(n.code,null,"readystatechange"),"\u6765\u8DDF\u8E2A\u5B83\u4EEC\uFF1A",`
`,l.h(n.pre,null,l.h(n.code,{className:"hljs language-text"},`UNSENT = 0; // \u521D\u59CB\u72B6\u6001
OPENED = 1; // open \u88AB\u8C03\u7528
HEADERS_RECEIVED = 2; // \u63A5\u6536\u5230 response header
LOADING = 3; // \u54CD\u5E94\u6B63\u5728\u88AB\u52A0\u8F7D\uFF08\u63A5\u6536\u5230\u4E00\u4E2A\u6570\u636E\u5305\uFF09
DONE = 4; // \u8BF7\u6C42\u5B8C\u6210
`)),`
`,l.h(n.pre,null,l.h(n.code,{className:"hljs language-javascript"},"xhr.",l.h(n.span,{className:"hljs-property"},"onreadystatechange")," = ",l.h(n.span,{className:"hljs-keyword"},"function"),"(",l.h(n.span,{className:"hljs-params"}),`) {
  `,l.h(n.span,{className:"hljs-keyword"},"if")," (xhr.",l.h(n.span,{className:"hljs-property"},"readyState")," == ",l.h(n.span,{className:"hljs-number"},"3"),`) {
    `,l.h(n.span,{className:"hljs-comment"},"// \u52A0\u8F7D\u4E2D"),`
  }
  `,l.h(n.span,{className:"hljs-keyword"},"if")," (xhr.",l.h(n.span,{className:"hljs-property"},"readyState")," == ",l.h(n.span,{className:"hljs-number"},"4"),`) {
    `,l.h(n.span,{className:"hljs-comment"},"// \u8BF7\u6C42\u5B8C\u6210"),`
  }
}
`)),`
`),`
`),`
`),`
`),`
`),`
`),`
`,l.h(n.h2,null,"\u53C2\u8003\uFF1A"),`
`,l.h(n.ul,null,`
`,l.h(n.li,null,l.h(n.a,{href:"https://zh.javascript.info"},"https://zh.javascript.info")),`
`))}function r(e={}){let{wrapper:n}=Object.assign({},o(),e.components);return n?l.h(n,e,l.h(c,e)):c(e)}var u=r;var g=a({name:"MDX_NETWORK-REQUEST",components:{MDXComponentContext:u},setup(e,n){return()=>s("div",{class:"markdown-body",style:"padding: 15px;"},s(u,{...n?.attrs}))}});export{g as default};
