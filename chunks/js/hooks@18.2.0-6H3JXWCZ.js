import{a as h}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-IDJP7L6O.js";import{I as c,f as s,g as a,ra as e,za as u}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-QYRLMMZP.js";a();u();a();a();function o(n){let l=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span",p:"p",h3:"h3"},h(),n.components);return s.h(s.Fragment,null,s.h(l.h2,null,"react@18\u6709\u54EA\u4E9B\u65B0\u53D8\u5316"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,"\u65B0\u7684\u521B\u5EFA\u65B9\u5F0F\uFF1A",s.h(l.code,null,"createRoot"),"\u521B\u5EFA",s.h(l.code,null,"root"),"\u8282\u70B9\uFF0C\u7136\u540E\u8C03\u7528",s.h(l.code,null,"root.render"),"\u65B9\u6CD5\u8FDB\u884C",s.h(l.code,null,"DOM"),"\u7684\u6302\u8F7D"),`
`,s.h(l.li,null,"\u5E76\u53D1\u6E32\u67D3\u673A\u5236\uFF1A\u901A\u8FC7\u4F7F\u7528",s.h(l.code,null,"createRoot(rootElem).render(<App />)"),`\u7684\u65B9\u5F0F\u5F00\u542F\u5E76\u53D1\u6A21\u5F0F\uFF1B\u8BE5\u6A21\u5F0F\u53EF\u6839\u636E\u8BBE\u5907\u6027\u80FD\u548C\u7F51\u901F\u8FDB\u884C\u9002\u5F53\u7684\u8C03\u6574\uFF0C\u4FDD
\u8BC1`,s.h(l.code,null,"React"),"\u5728\u6BD4\u8F83\u8017\u65F6\u7684\u6E32\u67D3\u8FC7\u7A0B\u4E2D\u4F9D\u65E7\u4FDD\u6301\u53EF\u4EA4\u4E92\u6027\uFF0C\u907F\u514D\u9875\u9762\u5361\u987F\u6216\u65E0\u54CD\u5E94\uFF0C\u4ECE\u800C\u63D0\u5347\u7528\u6237\u4F53\u9A8C"),`
`,s.h(l.li,null,s.h(l.code,null,"setState"),"\u81EA\u52A8\u6279\u5904\u7406\uFF1A\u9ED8\u8BA4\u6267\u884C\u6279\u5904\u7406\u6765\u5B9E\u73B0\u4E86\u5F00\u7BB1\u5373\u7528\u7684\u6027\u80FD\u6539\u8FDB\uFF1B\u800C\u5728",s.h(l.code,null,"v18"),"\u4E4B\u524D\u6279\u5904\u7406\u53EA\u5728",s.h(l.code,null,"React"),"\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u6267\u884C\uFF0C\u5728",s.h(l.code,null,"promise"),`\u3001
`,s.h(l.code,null,"setTimeout"),"\u3001\u539F\u751F\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u3001\u6216\u4EFB\u4F55\u5176\u5B83\u4E8B\u4EF6\u5185\u7684\u66F4\u65B0\u90FD\u4E0D\u4F1A\u8FDB\u884C\u6279\u5904\u7406",`
`,s.h(l.pre,null,s.h(l.code,{className:"hljs language-javascript"},s.h(l.span,{className:"hljs-comment"},"// \u51FD\u6570\u7EC4\u4EF6\u5185"),`
`,s.h(l.span,{className:"hljs-keyword"},"return"),` (
  `,s.h(l.span,{className:"xml"},s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"button"),`
    `,s.h(l.span,{className:"hljs-attr"},"onClick"),"=",s.h(l.span,{className:"hljs-string"},"{()")," =>"),` {
      setCount1(count => count + 1);
      setCount2(count => count + 1);
      // \u5728React\u4E8B\u4EF6\u4E2D\u88AB\u6279\u5904\u7406
    }}
  >
    {/* ... */}
  `,s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"button"),">")),`
);
`,s.h(l.span,{className:"hljs-comment"},"// ..."),`
`)),`
`),`
`,s.h(l.li,null,"\u65B0\u7684",s.h(l.code,null,"api"),"\uFF1A",`
`,s.h(l.ul,null,`
`,s.h(l.li,null,s.h(l.code,null,"useId"),"\uFF1A\u4E3B\u8981\u7528\u4E8E",s.h(l.code,null,"SSR"),"\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u573A\u666F\uFF0C\u65B9\u4FBF\u5728\u670D\u52A1\u7AEF\u6E32\u67D3\u548C\u5BA2\u6237\u7AEF\u6E32\u67D3\u65F6\uFF0C\u4EA7\u751F\u552F\u4E00\u7684",s.h(l.code,null,"id")),`
`,s.h(l.li,null,s.h(l.code,null,"startTransition/useDeferredValue"),"\uFF1A\u7528\u6765\u6807\u8BB0\u4E00\u6B21\u975E\u7D27\u6025\u66F4\u65B0\uFF0C\u975E\u7D27\u6025\u66F4\u65B0\u53EF\u88AB\u7D27\u6025\u66F4\u65B0\u4E2D\u65AD"),`
`),`
`),`
`),`
`,s.h(l.h2,null,"\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,`
`,s.h(l.p,null,"\u53D7\u63A7\u7EC4\u4EF6\uFF1A\u53EA\u80FD\u901A\u8FC7",s.h(l.code,null,"React"),"\u63A7\u5236\u6570\u636E\u6216\u72B6\u6001\u53D8\u66F4\u7684\u7EC4\u4EF6\uFF0C\u5C31\u662F\u53D7\u63A7\u7EC4\u4EF6"),`
`),`
`,s.h(l.li,null,`
`,s.h(l.p,null,"\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A\u4E0E\u53D7\u63A7\u7EC4\u4EF6\u76F8\u53CD\uFF0C\u5982",s.h(l.code,null,"input"),"\u3001",s.h(l.code,null,"textarea"),"\u3001",s.h(l.code,null,"select"),"\u3001",s.h(l.code,null,"checkbox"),"\u7B49\u7EC4\u4EF6\uFF0C\u672C\u8EAB\u63A7\u4EF6\u81EA\u5DF1\u5C31\u80FD\u63A7\u5236\u6570\u636E\u548C\u72B6\u6001\u7684\u53D8\u66F4\uFF0C\u800C\u4E14",s.h(l.code,null,"React"),`
\u662F\u4E0D\u77E5\u9053\u8FD9\u4E9B\u53D8\u66F4\u7684`),`
`),`
`,s.h(l.li,null,`
`,s.h(l.p,null,"\u5728",s.h(l.code,null,"React"),"\u4E2D\u6709\u65F6\u5019\u6211\u4EEC\u4E0D\u5F97\u4E0D\u64CD\u4F5C\u539F\u751F",s.h(l.code,null,"DOM"),"\u8282\u70B9\uFF0C\u53EF\u4EE5\u901A\u8FC7",s.h(l.code,null,"ref"),"\u6765\u83B7\u53D6",s.h(l.code,null,"DOM"),"\u7684\u5F15\u7528\uFF1A"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,s.h(l.code,null,"class"),"\u7EC4\u4EF6\uFF1A",`
`,s.h(l.pre,null,s.h(l.code,{className:"hljs language-javascript"},s.h(l.span,{className:"hljs-keyword"},"class")," ",s.h(l.span,{className:"hljs-title class_"},"App")," ",s.h(l.span,{className:"hljs-keyword"},"extends")," ",s.h(l.span,{className:"hljs-title class_ inherited__"},"PureComponent"),` {
  `,s.h(l.span,{className:"hljs-title function_"},"constructor"),"(",s.h(l.span,{className:"hljs-params"},"props"),`) {
    `,s.h(l.span,{className:"hljs-variable language_"},"super"),`(props)

    `,s.h(l.span,{className:"hljs-variable language_"},"this"),".",s.h(l.span,{className:"hljs-property"},"titleRef")," = ",s.h(l.span,{className:"hljs-title function_"},"createRef"),`()
    `,s.h(l.span,{className:"hljs-variable language_"},"this"),".",s.h(l.span,{className:"hljs-property"},"titleEl")," = ",s.h(l.span,{className:"hljs-literal"},"null"),`
  }

  `,s.h(l.span,{className:"hljs-title function_"},"render"),"(",s.h(l.span,{className:"hljs-params"}),`) {
    `,s.h(l.span,{className:"hljs-keyword"},"return"),` (
      `,s.h(l.span,{className:"xml"},s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"div"),">"),`
        // \u4E3B\u8981\u6709\u4E09\u79CD\u65B9\u6CD5
        `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"h2")," ",s.h(l.span,{className:"hljs-attr"},"ref"),"=",s.h(l.span,{className:"hljs-string"},'"title"'),">"),"String Ref",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"h2"),">"),`
        `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"h2")," ",s.h(l.span,{className:"hljs-attr"},"ref"),"=",s.h(l.span,{className:"hljs-string"},"{this.titleRef}"),">"),"Create Ref",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"h2"),">"),`
        `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"h2")," ",s.h(l.span,{className:"hljs-attr"},"ref"),"=",s.h(l.span,{className:"hljs-string"},"{(element)")," =>")," (this.titleEl = element)}>Callback Ref",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"h2"),">"),`

        `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"button")," ",s.h(l.span,{className:"hljs-attr"},"onClick"),"=",s.h(l.span,{className:"hljs-string"},"{(e)")," =>")," this.changeText()}>\u6539\u53D8\u6587\u672C",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"button"),">"),`
      `,s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"div"),">")),`
    )
  }

  `,s.h(l.span,{className:"hljs-title function_"},"changeText"),"(",s.h(l.span,{className:"hljs-params"}),`) {
    `,s.h(l.span,{className:"hljs-variable language_"},"this"),".",s.h(l.span,{className:"hljs-property"},"refs"),".",s.h(l.span,{className:"hljs-property"},"title"),".",s.h(l.span,{className:"hljs-property"},"innerHTML")," = ",s.h(l.span,{className:"hljs-string"},"'\u4F60\u597D\u554A,\u5C0F\u548C\u5C71\u7684\u83DC\u9E1F\u4EEC'"),`
    `,s.h(l.span,{className:"hljs-variable language_"},"this"),".",s.h(l.span,{className:"hljs-property"},"titleRef"),".",s.h(l.span,{className:"hljs-property"},"current"),".",s.h(l.span,{className:"hljs-property"},"innerHTML")," = ",s.h(l.span,{className:"hljs-string"},"'\u4F60\u597D\u554A,\u5C0F\u548C\u5C71\u7684\u83DC\u9E1F\u4EEC'"),`
    `,s.h(l.span,{className:"hljs-variable language_"},"this"),".",s.h(l.span,{className:"hljs-property"},"titleEl"),".",s.h(l.span,{className:"hljs-property"},"innerHTML")," = ",s.h(l.span,{className:"hljs-string"},"'\u4F60\u597D\u554A,\u5C0F\u548C\u5C71\u7684\u83DC\u9E1F\u4EEC'"),`
  }
}
`)),`
`),`
`,s.h(l.li,null,"\u51FD\u6570\u7EC4\u4EF6\uFF1A",`
`,s.h(l.pre,null,s.h(l.code,{className:"hljs language-javascript"},s.h(l.span,{className:"hljs-keyword"},"function")," ",s.h(l.span,{className:"hljs-title function_"},"App"),"(",s.h(l.span,{className:"hljs-params"}),`) {
  `,s.h(l.span,{className:"hljs-keyword"},"const")," h2Ref = ",s.h(l.span,{className:"hljs-title function_"},"useRef"),"(",s.h(l.span,{className:"hljs-literal"},"null"),`);

  `,s.h(l.span,{className:"hljs-keyword"},"function")," ",s.h(l.span,{className:"hljs-title function_"},"changeText"),"(",s.h(l.span,{className:"hljs-params"}),`) {
    h2Ref.`,s.h(l.span,{className:"hljs-property"},"current"),".",s.h(l.span,{className:"hljs-property"},"innerHTML")," = ",s.h(l.span,{className:"hljs-string"},"'Hello useRef'"),`
  }

  `,s.h(l.span,{className:"hljs-keyword"},"return"),` (
    `,s.h(l.span,{className:"xml"},s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"div"),">"),`
      `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"h2")," ",s.h(l.span,{className:"hljs-attr"},"ref"),"=",s.h(l.span,{className:"hljs-string"},"{h2Ref}"),">"),"useRef",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"h2"),">"),`
      `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"button")," ",s.h(l.span,{className:"hljs-attr"},"onClick"),"=",s.h(l.span,{className:"hljs-string"},"{(e)")," =>")," changeText()}>\u6539\u53D8\u6587\u672C",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"button"),">"),`
    `,s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"div"),">")),`
  );
}
`)),`
`),`
`),`
`),`
`),`
`,s.h(l.h2,null,"\u9AD8\u9636\u7EC4\u4EF6"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,`
`,s.h(l.p,null,"\u9AD8\u9636\u7EC4\u4EF6\uFF08",s.h(l.code,null,"HOC"),"\uFF09\u662F\u4E00\u4E2A\u63A5\u6536\u7EC4\u4EF6\u4F5C\u4E3A\u53C2\u6570\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7EC4\u4EF6\u7684\u51FD\u6570\uFF1B\u5B83\u5305\u88F9\u539F\u7EC4\u4EF6\u5E76\u589E\u5F3A\u539F\u7EC4\u4EF6\u7684\u529F\u80FD\uFF1B\u4E3B\u8981\u6709\u4EE5\u4E0B\u7528\u4E8E\uFF1A"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,"\u903B\u8F91\u590D\u7528"),`
`,s.h(l.li,null,"\u4FEE\u6539\u4F20\u9012\u7ED9\u7EC4\u4EF6\u7684",s.h(l.code,null,"props"),"\uFF0C\u4ECE\u800C\u6539\u53D8\u7EC4\u4EF6\u7684\u884C\u4E3A"),`
`,s.h(l.li,null,"\u6761\u4EF6\u6E32\u67D3"),`
`,s.h(l.li,null,"\u63D0\u4F9B\u989D\u5916\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u9519\u8BEF\u5904\u7406\u3001\u6027\u80FD\u76D1\u63A7\u6216\u8005\u6570\u636E\u83B7\u53D6"),`
`),`
`),`
`),`
`,s.h(l.h2,null,"\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528",s.h(l.code,null,"hook")),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,"\u4F7F\u7528",s.h(l.code,null,"hook"),"\u53EF\u4EE5\u4F7F\u903B\u8F91\u590D\u7528\u53D8\u5F97\u66F4\u52A0\u7B80\u5355"),`
`,s.h(l.li,null,"\u5728\u7C7B\u7EC4\u4EF6\u4E2D\u9700\u8981\u663E\u5F0F\u5730\u53BB\u7BA1\u7406\u751F\u547D\u5468\u671F\uFF1B\u5F53\u7EC4\u4EF6\u53D8\u5F97\u8D8A\u6765\u8D8A\u590D\u6742\u65F6\uFF0C\u53EF\u80FD\u4F1A\u4F7F\u751F\u547D\u5468\u671F\u51FD\u6570\u4E2D\u7684\u4EE3\u7801\u53D8\u5F97\u96BE\u4EE5\u7406\u89E3"),`
`,s.h(l.li,null,s.h(l.code,null,"class"),"\u4F1A\u8BA9\u4EBA\u96BE\u4EE5\u7406\u89E3\uFF0C\u6BD4\u5982\u9700\u8981\u7406\u89E3",s.h(l.code,null,"javascript"),"\u4E2D",s.h(l.code,null,"this"),"\u7684\u5DE5\u4F5C\u65B9\u5F0F\uFF0C\u540C\u65F6",s.h(l.code,null,"class"),"\u4E0D\u80FD\u5F88\u597D\u7684\u538B\u7F29\uFF0C\u5E76\u4E14\u4F1A\u4F7F\u70ED\u91CD\u8F7D\u51FA\u73B0\u4E0D\u7A33\u5B9A\u7684\u60C5\u51B5"),`
`),`
`,s.h(l.h2,null,"Hooks"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,`
`,s.h(l.p,null,s.h(l.code,null,"useCallback")," is a React hook that lets you cache a function definition between re-renders"),`
`),`
`,s.h(l.li,null,`
`,s.h(l.p,null,s.h(l.code,null,"useContext")," is a React hook that lets you read and subscribe to context from your component"),`
`),`
`,s.h(l.li,null,`
`,s.h(l.p,null,s.h(l.code,null,"useEffect")," is a React hook that lets you synchronize your component with an external system"),`
`),`
`,s.h(l.li,null,`
`,s.h(l.p,null,s.h(l.code,null,"useLayoutEffect")," is a version of ",s.h(l.code,null,"useEffect")," that fires before the browser repaints the screen"),`
`),`
`,s.h(l.li,null,`
`,s.h(l.p,null,s.h(l.code,null,"useId")," is a React hook for generating unique IDs that can be passed to the accessibility attributes"),`
`),`
`,s.h(l.li,null,`
`,s.h(l.p,null,s.h(l.code,null,"useMemo")," is a React hook that lets you cache the result of a calculation between re-renders"),`
`),`
`,s.h(l.li,null,`
`,s.h(l.p,null,s.h(l.code,null,"useReducer")," is a React hook that lets you add a reducer to your component"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,`
`,s.h(l.p,null,"pure function(\u7EAF\u51FD\u6570)\uFF1A"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,"\u5982\u679C\u51FD\u6570\u7684\u8C03\u7528\u53C2\u6570\u76F8\u540C, \u5219\u6C38\u8FDC\u8FD4\u56DE\u76F8\u540C\u7684\u7ED3\u679C. \u5B83\u4E0D\u4F9D\u8D56\u4E8E\u7A0B\u5E8F\u6267\u884C\u671F\u95F4\u51FD\u6570\u5916\u90E8\u4EFB\u4F55\u72B6\u6001\u6216\u6570\u636E\u7684\u53D8\u5316, \u53EA\u4F9D\u8D56\u4E8E\u4F20\u5165\u7684\u53C2\u6570"),`
`,s.h(l.li,null,"\u7EAF\u51FD\u6570\u4E0D\u4F1A\u4EA7\u751F\u4EFB\u4F55\u53EF\u89C2\u5BDF\u7684\u526F\u4F5C\u7528, \u4F8B\u5982: \u7F51\u7EDC\u8BF7\u6C42, \u8F93\u5165/\u8F93\u51FA\u8BBE\u5907, \u6216\u6570\u636E\u7A81\u53D8\uFF08mutation\uFF09\u7B49"),`
`),`
`),`
`),`
`),`
`,s.h(l.li,null,`
`,s.h(l.p,null,s.h(l.code,null,"useRef")," is a React hook that lets you reference a value that is not needed for rendering"),`
`),`
`,s.h(l.li,null,`
`,s.h(l.p,null,s.h(l.code,null,"useState")," is a React hook that lets you add a state variable to your component"),`
`),`
`),`
`,s.h(l.h2,null,"Hooks\u4E2D\u7684\u95ED\u5305\u9677\u9631"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,`
`,s.h(l.p,null,"\u4F8B\u5B50\u4E00\uFF1A\u51FD\u6570",s.h(l.code,null,"handleClick"),"\u53CA\u5176\u5F15\u7528\u7684\u53D8\u91CF",s.h(l.code,null,"count"),"\u6784\u6210\u4E86\u95ED\u5305\uFF0C\u5BFC\u81F4\u70B9\u51FB\u6309\u94AE\u89E6\u53D1",s.h(l.code,null,"handleClick"),"\u4E4B\u540E\u76841\u79D2\u5185",s.h(l.code,null,"count"),`\u7684\u503C
\u59CB\u7EC8\u662F\u4E45\u7684\u503C`),`
`,s.h(l.pre,null,s.h(l.code,{className:"hljs language-javascript"},s.h(l.span,{className:"hljs-keyword"},"function")," ",s.h(l.span,{className:"hljs-title function_"},"Counter"),"(",s.h(l.span,{className:"hljs-params"}),`) {
  `,s.h(l.span,{className:"hljs-keyword"},"const")," [count, setCount] = ",s.h(l.span,{className:"hljs-title function_"},"useState"),"(",s.h(l.span,{className:"hljs-number"},"0"),`)

  `,s.h(l.span,{className:"hljs-keyword"},"const")," ",s.h(l.span,{className:"hljs-title function_"},"handleClick")," = (",s.h(l.span,{className:"hljs-params"}),`) => {
    `,s.h(l.span,{className:"hljs-built_in"},"setTimeout"),"(",s.h(l.span,{className:"hljs-function"},"() =>"),` {
      `,s.h(l.span,{className:"hljs-title function_"},"setCount"),"(count + ",s.h(l.span,{className:"hljs-number"},"1"),`)
    }, `,s.h(l.span,{className:"hljs-number"},"1000"),`)
  }
  
  `,s.h(l.span,{className:"hljs-keyword"},"const")," ",s.h(l.span,{className:"hljs-title function_"},"handleReset")," = (",s.h(l.span,{className:"hljs-params"}),`) => {
    `,s.h(l.span,{className:"hljs-title function_"},"setCount"),"(",s.h(l.span,{className:"hljs-number"},"0"),`)
  }

  `,s.h(l.span,{className:"hljs-keyword"},"return"),` (
    `,s.h(l.span,{className:"xml"},s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"div"),">"),`
      `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"p"),">"),"Count: {count}",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"p"),">"),`
      `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"button")," ",s.h(l.span,{className:"hljs-attr"},"onClick"),"=",s.h(l.span,{className:"hljs-string"},"{handleClick}"),">"),"Increment",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"button"),">"),`
      `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"button")," ",s.h(l.span,{className:"hljs-attr"},"onClick"),"=",s.h(l.span,{className:"hljs-string"},"{handleReset}"),">"),"Reset",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"button"),">"),`
    `,s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"div"),">")),`
  )
}
`)),`
`),`
`,s.h(l.li,null,`
`,s.h(l.p,null,"\u4F8B\u5B50\u4E8C\uFF1A",s.h(l.code,null,"useEffect"),"\u7684\u56DE\u8C03\u51FD\u6570\u53EA\u5728\u521D\u6B21\u6E32\u67D3\u540E\u6267\u884C\u4E00\u6B21\uFF0C\u56E0\u6B64\u6211\u4EEC\u4F1A\u770B\u5230\u63A7\u5236\u53F0\u4E00\u76F4\u5728\u6253\u5370",s.h(l.code,null,"0"),"\uFF1B\u89E3\u51B3\u7684\u65B9\u6CD5\u662F\u5C06",s.h(l.code,null,"count"),`\u4F5C\u4E3A
`,s.h(l.code,null,"useEffect"),"\u7684\u4F9D\u8D56"),`
`,s.h(l.pre,null,s.h(l.code,{className:"hljs language-javascript"},s.h(l.span,{className:"hljs-keyword"},"function")," ",s.h(l.span,{className:"hljs-title function_"},"App"),"(",s.h(l.span,{className:"hljs-params"}),`) {
  `,s.h(l.span,{className:"hljs-keyword"},"const")," [count, setCount] = ",s.h(l.span,{className:"hljs-title function_"},"useState"),"(",s.h(l.span,{className:"hljs-number"},"0"),`)

  `,s.h(l.span,{className:"hljs-title function_"},"useEffect"),"(",s.h(l.span,{className:"hljs-function"},"() =>"),` {
    `,s.h(l.span,{className:"hljs-keyword"},"const")," timer = ",s.h(l.span,{className:"hljs-built_in"},"setInterval"),"(",s.h(l.span,{className:"hljs-function"},"() =>"),` {
      `,s.h(l.span,{className:"hljs-variable language_"},"console"),".",s.h(l.span,{className:"hljs-title function_"},"log"),`(count)
    }, `,s.h(l.span,{className:"hljs-number"},"1000"),`)

    `,s.h(l.span,{className:"hljs-keyword"},"return")," ",s.h(l.span,{className:"hljs-function"},"() =>")," ",s.h(l.span,{className:"hljs-built_in"},"clearInterval"),`(timer)
  }, [])

  `,s.h(l.span,{className:"hljs-keyword"},"const")," ",s.h(l.span,{className:"hljs-title function_"},"handleClick")," = (",s.h(l.span,{className:"hljs-params"}),`) => {
    `,s.h(l.span,{className:"hljs-title function_"},"setCount"),"(count + ",s.h(l.span,{className:"hljs-number"},"1"),`)
  }

  `,s.h(l.span,{className:"hljs-keyword"},"return"),` (
    `,s.h(l.span,{className:"xml"},s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"div"),">"),`
      `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"p"),">"),"Count: {count}",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"p"),">"),`
      `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"button")," ",s.h(l.span,{className:"hljs-attr"},"onClick"),"=",s.h(l.span,{className:"hljs-string"},"{handleClick}"),">"),"Increment",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"button"),">"),`
    `,s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"div"),">")),`
  )
}
`)),`
`),`
`),`
`,s.h(l.h2,null,"React\u6027\u80FD\u4F18\u5316"),`
`,s.h(l.h3,null,"\u524D\u7AEF\u901A\u7528\u6027\u80FD\u4F18\u5316\u6280\u5DE7"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,"\u7EC4\u4EF6\u6309\u9700\u52A0\u8F7D\uFF1A\u4E3B\u8981\u901A\u8FC7\u52A8\u6001\u5BFC\u5165\u548C",s.h(l.code,null,"React.lazy"),"\u65B9\u6CD5\u5E76\u914D\u5408",s.h(l.code,null,"Suspense"),"\u7EC4\u4EF6\u5B9E\u73B0\uFF1B",s.h(l.code,null,"Suspense"),`\u5185\u90E8\u4E3B\u8981\u901A\u8FC7\u6355\u83B7\u7EC4\u4EF6
\u7684\u72B6\u6001\u53BB\u5224\u65AD\u5982\u4F55\u52A0\u8F7D\uFF0C`,s.h(l.code,null,"React.lazy"),"\u521B\u5EFA\u7684\u52A8\u6001\u52A0\u8F7D\u7EC4\u4EF6\u5177\u6709",s.h(l.code,null,"pending"),"\u3001",s.h(l.code,null,"resolved"),"\u3001",s.h(l.code,null,"rejected"),`\u4E09\u79CD\u72B6\u6001\uFF0C\u5F53\u8FD9\u4E2A
\u7EC4\u4EF6\u7684\u72B6\u6001\u4E3A`,s.h(l.code,null,"Pending"),"\u65F6\u663E\u793A\u7684\u662F",s.h(l.code,null,"Suspense"),"\u4E2D",s.h(l.code,null,"fallback"),"\u7684\u5185\u5BB9\uFF0C\u53EA\u6709\u72B6\u6001\u53D8\u4E3A",s.h(l.code,null,"resolved"),"\u540E\u624D\u663E\u793A\u7EC4\u4EF6",`
`,s.h(l.pre,null,s.h(l.code,{className:"hljs language-javascript"},s.h(l.span,{className:"hljs-keyword"},"import")," { lazy, ",s.h(l.span,{className:"hljs-title class_"},"Suspense")," } ",s.h(l.span,{className:"hljs-keyword"},"from")," ",s.h(l.span,{className:"hljs-string"},'"react"'),`
`,s.h(l.span,{className:"hljs-keyword"},"import")," { useLocation } ",s.h(l.span,{className:"hljs-keyword"},"from")," ",s.h(l.span,{className:"hljs-string"},'"react-router-dom"'),`

`,s.h(l.span,{className:"hljs-keyword"},"import")," ",s.h(l.span,{className:"hljs-string"},'"./index.css"'),`

`,s.h(l.span,{className:"hljs-keyword"},"export")," ",s.h(l.span,{className:"hljs-keyword"},"default")," ",s.h(l.span,{className:"hljs-keyword"},"function")," ",s.h(l.span,{className:"hljs-title function_"},"DemoContent"),"(",s.h(l.span,{className:"hljs-params"}),`) {
  `,s.h(l.span,{className:"hljs-keyword"},"const")," location = ",s.h(l.span,{className:"hljs-title function_"},"useLocation"),`()
  `,s.h(l.span,{className:"hljs-keyword"},"const")," elemName = location.",s.h(l.span,{className:"hljs-property"},"pathname"),".",s.h(l.span,{className:"hljs-title function_"},"match"),"(",s.h(l.span,{className:"hljs-regexp"},"/\\/([^/]*)$/"),")?.[",s.h(l.span,{className:"hljs-number"},"1"),"] || ",s.h(l.span,{className:"hljs-string"},'""'),`

  `,s.h(l.span,{className:"hljs-keyword"},"return"),` (
    `,s.h(l.span,{className:"xml"},s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"div")," ",s.h(l.span,{className:"hljs-attr"},"className"),"=",s.h(l.span,{className:"hljs-string"},'"contents-container"'),">"),`
      {(() => {
        const Element = lazy(() => import(\`../\${elemName}\`))
        return (
          `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"Suspense")," ",s.h(l.span,{className:"hljs-attr"},"fallback"),"=",s.h(l.span,{className:"hljs-string"},"{"),"<",s.h(l.span,{className:"hljs-attr"},"div"),">"),"Loading ...",s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"div"),">"),`}>
            `,s.h(l.span,{className:"hljs-tag"},"<",s.h(l.span,{className:"hljs-name"},"Element"),">"),s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"Element"),">"),`
          `,s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"Suspense"),">"),`
        )
      })()}
    `,s.h(l.span,{className:"hljs-tag"},"</",s.h(l.span,{className:"hljs-name"},"div"),">")),`
  )
}
`)),`
`),`
`,s.h(l.li,null,"\u7EC4\u4EF6\u61D2\u6E32\u67D3\uFF1A\u5F53\u7EC4\u4EF6\u8FDB\u5165\u6216\u5373\u5C06\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\u65F6\u624D\u6E32\u67D3\u7EC4\u4EF6"),`
`,s.h(l.li,null,"\u865A\u62DF\u5217\u8868\uFF1A\u865A\u62DF\u5217\u8868\u662F\u61D2\u6E32\u67D3\u7684\u4E00\u79CD\u7279\u6B8A\u573A\u666F\uFF1B\u865A\u62DF\u5217\u8868\u7684\u7EC4\u4EF6\u6709",s.h(l.code,null,"react-window"),"\u548C",s.h(l.code,null,"react-virtualized")),`
`,s.h(l.li,null,"\u4F7F\u7528",s.h(l.code,null,"debounce"),"\u3001",s.h(l.code,null,"throttle"),"\u4F18\u5316\u9891\u7E41\u89E6\u53D1\u7684\u56DE\u8C03"),`
`),`
`,s.h(l.h3,null,s.h(l.code,null,"React"),"\u4E2D\u7684\u4F18\u5316\u6280\u5DE7"),`
`,s.h(l.ul,null,`
`,s.h(l.li,null,s.h(l.code,null,"note"),": \u5728",s.h(l.code,null,"React"),"\u5DE5\u4F5C\u6D41\u4E2D\uFF0C\u5982\u679C\u53EA\u6709\u7236\u7EC4\u4EF6\u53D1\u751F\u72B6\u6001\u66F4\u65B0\uFF0C\u5373\u4F7F\u7236\u7EC4\u4EF6\u4F20\u7ED9\u5B50\u7EC4\u4EF6\u7684\u6240\u6709",s.h(l.code,null,"Props"),`\u90FD\u6CA1\u6709\u4FEE\u6539\uFF0C\u4E5F\u4F1A\u5F15\u8D77\u5B50
\u7EC4\u4EF6\u7684`,s.h(l.code,null,"Render"),"\u8FC7\u7A0B"),`
`,s.h(l.li,null,"\u6279\u91CF\u66F4\u65B0\uFF1A\u5728",s.h(l.code,null,"React"),"\u7BA1\u7406\u7684\u4E8B\u4EF6\u56DE\u8C03\uFF08\u4F8B\u5982",s.h(l.code,null,"onClick"),"\uFF09\u548C\u751F\u547D\u5468\u671F\u4E2D\uFF0C",s.h(l.code,null,"setState"),"\u662F\u5F02\u6B65\u7684\uFF0C\u800C\u5176\u4ED6\u65F6\u5019",s.h(l.code,null,"setState"),`\u90FD\u662F
\u540C\u6B65\uFF1B\u8FD9\u4E2A\u95EE\u9898\u6839\u672C\u539F\u56E0\u5C31\u662F`,s.h(l.code,null,"React"),"\u5728\u81EA\u5DF1\u7BA1\u7406\u7684\u4E8B\u4EF6\u56DE\u8C03\u548C\u751F\u547D\u5468\u671F\u4E2D\uFF0C\u5BF9\u4E8E",s.h(l.code,null,"setState"),`\u662F\u6279\u91CF\u66F4\u65B0\u7684\uFF0C\u800C\u5728\u5176\u4ED6\u65F6\u5019\u662F\u7ACB\u5373\u66F4
\u65B0\u7684\uFF1B\u6279\u91CF\u66F4\u65B0`,s.h(l.code,null,"setState"),"\u65F6\uFF0C\u591A\u6B21\u6267\u884C",s.h(l.code,null,"setState"),"\u53EA\u4F1A\u89E6\u53D1\u4E00\u6B21\u6E32\u67D3\u8FC7\u7A0B\uFF1B\u5728",s.h(l.code,null,"v18"),"\u540E",s.h(l.code,null,"React"),`\u9ED8\u8BA4\u6267\u884C\u6279\u5904\u7406\u6765\u5B9E\u73B0\u4E86\u5F00\u7BB1\u5373
\u7528\u7684\u6027\u80FD\u6539\u8FDB`),`
`,s.h(l.li,null,"\u4F7F\u7528\u7F13\u5B58",`
`,s.h(l.ul,null,`
`,s.h(l.li,null,"\u4F7F\u7528",s.h(l.code,null,"useCallback"),"\u6765\u7F13\u5B58\u51FD\u6570\u5B9A\u4E49\u3001\u4F7F\u7528",s.h(l.code,null,"useMemo"),"\u6765\u7F13\u5B58\u4E0A\u6B21\u8BA1\u7B97\u7684\u7ED3\u679C"),`
`,s.h(l.li,null,"\u4F7F\u7528",s.h(l.code,null,"React.memo"),"\u6765\u907F\u514D\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3"),`
`),`
`),`
`,s.h(l.li,null,"\u5217\u8868\u9879\u4F7F\u7528",s.h(l.code,null,"key"),"\u5C5E\u6027"),`
`,s.h(l.li,null,"\u53D1\u5E03\u8005\u8BA2\u9605\u8005\u6A21\u5F0F\u8DF3\u8FC7\u4E2D\u95F4\u7EC4\u4EF6\u6E32\u67D3\u8FC7\u7A0B\uFF1A\u4F8B\u5982\u4F7F\u7528",s.h(l.code,null,"redux"),"\u3001",s.h(l.code,null,"mobx"),"\u3001",s.h(l.code,null,"React.createContext"),"\u7B49"),`
`))}function p(n={}){let{wrapper:l}=Object.assign({},h(),n.components);return l?s.h(l,n,s.h(o,n)):o(n)}var t=p;var f=c({name:"MDX_HOOKS@18.2.0",components:{MDXComponentContext:t},setup(n,l){return()=>e("div",{class:"markdown-body",style:"padding: 15px;"},e(t,{...l?.attrs}))}});export{f as default};
