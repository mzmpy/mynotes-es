import{a as t}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-OJ3HUDT3.js";import{a as e}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-ZH6BUNSG.js";import{I as B,f as n,g as z,qa as r,ya as N}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-6MPDC5UM.js";z();N();z();z();var u="https://mzmpy.github.io/mynotes-es/assets/png/reverse-proxy-QMG4CQY3.png";function H(M){let D=Object.assign({h1:"h1",code:"code",ul:"ul",li:"li",p:"p",pre:"pre",h2:"h2",a:"a"},e(),M.components);return n.h(n.Fragment,null,n.h(D.h1,null,n.h(D.code,null,"Nginx"),"\u7B80\u4ECB"),`
`,n.h(D.ul,null,`
`,n.h(D.li,null,`
`,n.h(D.p,null,n.h(D.code,null,"Nginx"),"\uFF08engine x\uFF09\u662F\u4E00\u6B3E\u8F7B\u91CF\u7EA7\u7684",n.h(D.code,null,"Web"),"\u670D\u52A1\u5668 \u3001\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u53CA\u7535\u5B50\u90AE\u4EF6\uFF08",n.h(D.code,null,"IMAP/POP3"),"\uFF09\u4EE3\u7406\u670D\u52A1\u5668\u3002"),`
`),`
`,n.h(D.li,null,`
`,n.h(D.p,null,`\u53CD\u5411\u4EE3\u7406\uFF1A\u53CD\u5411\u4EE3\u7406\uFF08Reverse Proxy\uFF09\u65B9\u5F0F\u662F\u6307\u4EE5\u4EE3\u7406\u670D\u52A1\u5668\u6765\u63A5\u53D7internet\u4E0A\u7684\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u7136\u540E\u5C06\u8BF7\u6C42\u8F6C
\u53D1\u7ED9\u5185\u90E8\u7F51\u7EDC\u4E0A\u7684\u670D\u52A1\u5668\uFF0C\u5E76\u5C06\u4ECE\u670D\u52A1\u5668\u4E0A\u5F97\u5230\u7684\u7ED3\u679C\u8FD4\u56DE\u7ED9internet\u4E0A\u8BF7\u6C42\u8FDE\u63A5\u7684\u5BA2\u6237\u7AEF\uFF0C\u6B64\u65F6\u4EE3\u7406\u670D\u52A1\u5668\u5BF9\u5916
\u5C31\u8868\u73B0\u4E3A\u4E00\u4E2A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668`),`
`,n.h(t,{alt:"\u53CD\u5411\u4EE3\u7406",src:u,width:"500"}),`
`),`
`,n.h(D.li,null,`
`,n.h(D.p,null,"\u5E38\u7528\u547D\u4EE4\u884C"),`
`,n.h(D.pre,null,n.h(D.code,{className:"hljs language-shell"},`nginx -s stop       \u5FEB\u901F\u5173\u95EDNginx\uFF0C\u53EF\u80FD\u4E0D\u4FDD\u5B58\u76F8\u5173\u4FE1\u606F\uFF0C\u5E76\u8FC5\u901F\u7EC8\u6B62web\u670D\u52A1
nginx -s quit       \u5E73\u7A33\u5173\u95EDNginx\uFF0C\u4FDD\u5B58\u76F8\u5173\u4FE1\u606F\uFF0C\u6709\u5B89\u6392\u7684\u7ED3\u675Fweb\u670D\u52A1
nginx -s reload     \u56E0\u6539\u53D8\u4E86Nginx\u76F8\u5173\u914D\u7F6E\uFF0C\u9700\u8981\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u800C\u91CD\u8F7D
nginx -s reopen     \u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6
nginx -c filename   \u4E3A Nginx \u6307\u5B9A\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u6765\u4EE3\u66FF\u7F3A\u7701\u7684
nginx -t            \u4E0D\u8FD0\u884C\uFF0C\u4EC5\u4EC5\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u3002nginx \u5C06\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u7684\u8BED\u6CD5\u7684\u6B63\u786E\u6027\uFF0C\u5E76\u5C1D\u8BD5\u6253\u5F00\u914D\u7F6E\u6587\u4EF6\u4E2D\u6240\u5F15\u7528\u5230\u7684\u6587\u4EF6
nginx -v            \u663E\u793A nginx \u7684\u7248\u672C
nginx -V            \u663E\u793A nginx \u7684\u7248\u672C\uFF0C\u7F16\u8BD1\u5668\u7248\u672C\u548C\u914D\u7F6E\u53C2\u6570
`)),`
`),`
`),`
`,n.h(D.h2,null,"\u53C2\u8003\uFF1A"),`
`,n.h(D.ul,null,`
`,n.h(D.li,null,n.h(D.a,{href:"https://github.com/dunwu/nginx-tutorial"},"https://github.com/dunwu/nginx-tutorial")),`
`))}function i(M={}){let{wrapper:D}=Object.assign({},e(),M.components);return D?n.h(D,M,n.h(H,M)):H(M)}var l=i;var m=B({name:"MDX_INTRDUCTION",components:{MDXComponentContext:l},setup(M,D){return()=>r("div",{class:"markdown-body",style:"padding: 15px;"},r(l,{...D?.attrs}))}});export{m as default};
