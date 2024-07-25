import{a as h}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-UUYEHL2W.js";import{H as c,f as s,g as l,pa as e,xa as r}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-M2CGHGHN.js";l();r();l();l();function m(n){let a=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",span:"span"},h(),n.components);return s.h(s.Fragment,null,s.h(a.h1,null,"Javascript\u4E2D\u5E38\u89C1\u7684\u5173\u4E8E\u7B97\u6CD5\u7684\u6848\u4F8B"),`
`,s.h(a.h2,null,"List2Tree"),`
`,s.h(a.pre,null,s.h(a.code,{className:"hljs language-javascript"},s.h(a.span,{className:"hljs-keyword"},"const"),` list = [
  { `,s.h(a.span,{className:"hljs-string"},'"name"'),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E1"'),", ",s.h(a.span,{className:"hljs-string"},'"parent"'),": ",s.h(a.span,{className:"hljs-literal"},"null"),", ",s.h(a.span,{className:"hljs-string"},'"id"'),": ",s.h(a.span,{className:"hljs-number"},"1"),` },
  { `,s.h(a.span,{className:"hljs-string"},'"name"'),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E2"'),", ",s.h(a.span,{className:"hljs-string"},'"id"'),": ",s.h(a.span,{className:"hljs-number"},"2"),", ",s.h(a.span,{className:"hljs-string"},'"parent"'),": ",s.h(a.span,{className:"hljs-number"},"1"),` },
  { `,s.h(a.span,{className:"hljs-string"},'"name"'),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E3"'),", ",s.h(a.span,{className:"hljs-string"},'"parent"'),": ",s.h(a.span,{className:"hljs-number"},"2"),", ",s.h(a.span,{className:"hljs-string"},'"id"'),": ",s.h(a.span,{className:"hljs-number"},"3"),` },
  { `,s.h(a.span,{className:"hljs-string"},'"name"'),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E4"'),", ",s.h(a.span,{className:"hljs-string"},'"parent"'),": ",s.h(a.span,{className:"hljs-number"},"3"),", ",s.h(a.span,{className:"hljs-string"},'"id"'),": ",s.h(a.span,{className:"hljs-number"},"4"),` },
  { `,s.h(a.span,{className:"hljs-string"},'"name"'),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E5"'),", ",s.h(a.span,{className:"hljs-string"},'"parent"'),": ",s.h(a.span,{className:"hljs-number"},"4"),", ",s.h(a.span,{className:"hljs-string"},'"id"'),": ",s.h(a.span,{className:"hljs-number"},"5"),` },
  { `,s.h(a.span,{className:"hljs-string"},'"name"'),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E6"'),", ",s.h(a.span,{className:"hljs-string"},'"parent"'),": ",s.h(a.span,{className:"hljs-number"},"2"),", ",s.h(a.span,{className:"hljs-string"},'"id"'),": ",s.h(a.span,{className:"hljs-number"},"6"),` }
];

`,s.h(a.span,{className:"hljs-keyword"},"function")," ",s.h(a.span,{className:"hljs-title function_"},"listToTree"),"(",s.h(a.span,{className:"hljs-params"},"list"),`) {
  `,s.h(a.span,{className:"hljs-keyword"},"const"),` map = {};
  `,s.h(a.span,{className:"hljs-keyword"},"const"),` roots = [];

  `,s.h(a.span,{className:"hljs-comment"},"// \u9996\u5148\u5C06\u6BCF\u4E2A\u8282\u70B9\u6309\u7167 id \u5B58\u5165 map"),`
  `,s.h(a.span,{className:"hljs-keyword"},"for")," (",s.h(a.span,{className:"hljs-keyword"},"const")," item ",s.h(a.span,{className:"hljs-keyword"},"of"),` list) {
    map[item.`,s.h(a.span,{className:"hljs-property"},"id"),"] = { ...item, ",s.h(a.span,{className:"hljs-attr"},"children"),`: [] };
  }

  `,s.h(a.span,{className:"hljs-keyword"},"for")," (",s.h(a.span,{className:"hljs-keyword"},"const")," item ",s.h(a.span,{className:"hljs-keyword"},"of"),` list) {
    `,s.h(a.span,{className:"hljs-keyword"},"if")," (item.",s.h(a.span,{className:"hljs-property"},"parent")," === ",s.h(a.span,{className:"hljs-literal"},"null"),`) {
      `,s.h(a.span,{className:"hljs-comment"},"// \u9876\u7EA7\u8282\u70B9"),`
      roots.`,s.h(a.span,{className:"hljs-title function_"},"push"),"(map[item.",s.h(a.span,{className:"hljs-property"},"id"),`]);
    } `,s.h(a.span,{className:"hljs-keyword"},"else")," ",s.h(a.span,{className:"hljs-keyword"},"if")," (map[item.",s.h(a.span,{className:"hljs-property"},"parent"),`]) {
      `,s.h(a.span,{className:"hljs-comment"},"// \u975E\u9876\u7EA7\u8282\u70B9\uFF0C\u627E\u5230\u7236\u8282\u70B9\u5E76\u6DFB\u52A0\u5230\u5176 children \u6570\u7EC4\u4E2D"),`
      map[item.`,s.h(a.span,{className:"hljs-property"},"parent"),"].",s.h(a.span,{className:"hljs-property"},"children"),".",s.h(a.span,{className:"hljs-title function_"},"push"),"(map[item.",s.h(a.span,{className:"hljs-property"},"id"),`]);
    }
  }

  `,s.h(a.span,{className:"hljs-keyword"},"return"),` roots;
}

`,s.h(a.span,{className:"hljs-keyword"},"const")," tree = ",s.h(a.span,{className:"hljs-title function_"},"listToTree"),`(list);
`,s.h(a.span,{className:"hljs-variable language_"},"console"),".",s.h(a.span,{className:"hljs-title function_"},"log"),`(tree)
`)),`
`,s.h(a.h2,null,"\u6811\u8282\u70B9\u67E5\u627E"),`
`,s.h(a.pre,null,s.h(a.code,{className:"hljs language-javascript"},s.h(a.span,{className:"hljs-keyword"},"const"),` tree = [
  {
    `,s.h(a.span,{className:"hljs-attr"},"name"),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E1"'),`,
    `,s.h(a.span,{className:"hljs-attr"},"parent"),": ",s.h(a.span,{className:"hljs-literal"},"null"),`,
    `,s.h(a.span,{className:"hljs-attr"},"id"),": ",s.h(a.span,{className:"hljs-number"},"1"),`,
    `,s.h(a.span,{className:"hljs-attr"},"children"),`: [
      {
        `,s.h(a.span,{className:"hljs-attr"},"name"),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E2"'),`,
        `,s.h(a.span,{className:"hljs-attr"},"id"),": ",s.h(a.span,{className:"hljs-number"},"2"),`,
        `,s.h(a.span,{className:"hljs-attr"},"parent"),": ",s.h(a.span,{className:"hljs-number"},"1"),`,
        `,s.h(a.span,{className:"hljs-attr"},"children"),`: [
          {
            `,s.h(a.span,{className:"hljs-attr"},"name"),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E3"'),`,
            `,s.h(a.span,{className:"hljs-attr"},"parent"),": ",s.h(a.span,{className:"hljs-number"},"2"),`,
            `,s.h(a.span,{className:"hljs-attr"},"id"),": ",s.h(a.span,{className:"hljs-number"},"3"),`,
            `,s.h(a.span,{className:"hljs-attr"},"children"),`: [
              {
                `,s.h(a.span,{className:"hljs-attr"},"name"),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E4"'),`,
                `,s.h(a.span,{className:"hljs-attr"},"parent"),": ",s.h(a.span,{className:"hljs-number"},"3"),`,
                `,s.h(a.span,{className:"hljs-attr"},"id"),": ",s.h(a.span,{className:"hljs-number"},"4"),`,
                `,s.h(a.span,{className:"hljs-attr"},"children"),`: [
                  {
                    `,s.h(a.span,{className:"hljs-attr"},"name"),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E5"'),`,
                    `,s.h(a.span,{className:"hljs-attr"},"parent"),": ",s.h(a.span,{className:"hljs-number"},"4"),`,
                    `,s.h(a.span,{className:"hljs-attr"},"id"),": ",s.h(a.span,{className:"hljs-number"},"5"),`,
                    `,s.h(a.span,{className:"hljs-attr"},"children"),`: []
                  }
                ]
              }
            ]
          },
          {
            `,s.h(a.span,{className:"hljs-attr"},"name"),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E6"'),`,
            `,s.h(a.span,{className:"hljs-attr"},"parent"),": ",s.h(a.span,{className:"hljs-number"},"2"),`,
            `,s.h(a.span,{className:"hljs-attr"},"id"),": ",s.h(a.span,{className:"hljs-number"},"6"),`,
            `,s.h(a.span,{className:"hljs-attr"},"children"),`: []
          }
        ]
      },
      {
        `,s.h(a.span,{className:"hljs-attr"},"name"),": ",s.h(a.span,{className:"hljs-string"},'"\u6570\u636E7"'),`,
        `,s.h(a.span,{className:"hljs-attr"},"id"),": ",s.h(a.span,{className:"hljs-number"},"7"),`,
        `,s.h(a.span,{className:"hljs-attr"},"parent"),": ",s.h(a.span,{className:"hljs-number"},"1"),`,
        `,s.h(a.span,{className:"hljs-attr"},"children"),": ",s.h(a.span,{className:"hljs-literal"},"null"),`
      }
    ]
  }
];

`,s.h(a.span,{className:"hljs-keyword"},"function")," ",s.h(a.span,{className:"hljs-title function_"},"look4TreeNodeById"),"(",s.h(a.span,{className:"hljs-params"},"tree, id"),`) {
  `,s.h(a.span,{className:"hljs-keyword"},"for"),"(",s.h(a.span,{className:"hljs-keyword"},"const")," root ",s.h(a.span,{className:"hljs-keyword"},"of"),` tree || []) {
    `,s.h(a.span,{className:"hljs-keyword"},"if")," (root.",s.h(a.span,{className:"hljs-property"},"id")," === id) ",s.h(a.span,{className:"hljs-keyword"},"return"),` root;
    `,s.h(a.span,{className:"hljs-keyword"},"else"),` {
      `,s.h(a.span,{className:"hljs-keyword"},"const")," res = ",s.h(a.span,{className:"hljs-title function_"},"look4TreeNodeById"),"(root.",s.h(a.span,{className:"hljs-property"},"children"),` || [], id);
      `,s.h(a.span,{className:"hljs-keyword"},"if"),"(res) ",s.h(a.span,{className:"hljs-keyword"},"return"),` res;
    }
  }

  `,s.h(a.span,{className:"hljs-keyword"},"return")," ",s.h(a.span,{className:"hljs-literal"},"null"),`;
}

`,s.h(a.span,{className:"hljs-variable language_"},"console"),".",s.h(a.span,{className:"hljs-title function_"},"log"),"(",s.h(a.span,{className:"hljs-title function_"},"look4TreeNodeById"),"(tree, ",s.h(a.span,{className:"hljs-number"},"7"),`));
`)),`
`,s.h(a.h2,null,"\u65F6\u95F4\u65E5\u671F\u683C\u5F0F\u5316"),`
`,s.h(a.pre,null,s.h(a.code,{className:"hljs language-javascript"},s.h(a.span,{className:"hljs-title class_"},"Date"),".",s.h(a.span,{className:"hljs-property"},s.h(a.span,{className:"hljs-keyword"},"prototype")),".",s.h(a.span,{className:"hljs-property"},"format")," = ",s.h(a.span,{className:"hljs-keyword"},"function")," (",s.h(a.span,{className:"hljs-params"},"format"),`) {
  `,s.h(a.span,{className:"hljs-keyword"},"const")," date = ",s.h(a.span,{className:"hljs-variable language_"},"this"),`;

  `,s.h(a.span,{className:"hljs-keyword"},"const")," year = date.",s.h(a.span,{className:"hljs-title function_"},"getFullYear"),`();
  `,s.h(a.span,{className:"hljs-keyword"},"const")," month = date.",s.h(a.span,{className:"hljs-title function_"},"getMonth"),"() + ",s.h(a.span,{className:"hljs-number"},"1"),`;
  `,s.h(a.span,{className:"hljs-keyword"},"const")," day = date.",s.h(a.span,{className:"hljs-title function_"},"getDate"),`();
  `,s.h(a.span,{className:"hljs-keyword"},"const")," hours = date.",s.h(a.span,{className:"hljs-title function_"},"getHours"),`();
  `,s.h(a.span,{className:"hljs-keyword"},"const")," minutes = date.",s.h(a.span,{className:"hljs-title function_"},"getMinutes"),`();
  `,s.h(a.span,{className:"hljs-keyword"},"const")," seconds = date.",s.h(a.span,{className:"hljs-title function_"},"getSeconds"),`();

  format = format.`,s.h(a.span,{className:"hljs-title function_"},"replace"),"(",s.h(a.span,{className:"hljs-string"},"'YYYY'"),`, year);
  format = format.`,s.h(a.span,{className:"hljs-title function_"},"replace"),"(",s.h(a.span,{className:"hljs-string"},"'MM'"),", month.",s.h(a.span,{className:"hljs-title function_"},"toString"),"().",s.h(a.span,{className:"hljs-title function_"},"padStart"),"(",s.h(a.span,{className:"hljs-number"},"2"),", ",s.h(a.span,{className:"hljs-string"},"'0'"),`));
  format = format.`,s.h(a.span,{className:"hljs-title function_"},"replace"),"(",s.h(a.span,{className:"hljs-string"},"'DD'"),", day.",s.h(a.span,{className:"hljs-title function_"},"toString"),"().",s.h(a.span,{className:"hljs-title function_"},"padStart"),"(",s.h(a.span,{className:"hljs-number"},"2"),", ",s.h(a.span,{className:"hljs-string"},"'0'"),`));
  format = format.`,s.h(a.span,{className:"hljs-title function_"},"replace"),"(",s.h(a.span,{className:"hljs-string"},"'HH'"),", hours.",s.h(a.span,{className:"hljs-title function_"},"toString"),"().",s.h(a.span,{className:"hljs-title function_"},"padStart"),"(",s.h(a.span,{className:"hljs-number"},"2"),", ",s.h(a.span,{className:"hljs-string"},"'0'"),`));
  format = format.`,s.h(a.span,{className:"hljs-title function_"},"replace"),"(",s.h(a.span,{className:"hljs-string"},"'hh'"),", (hours % ",s.h(a.span,{className:"hljs-number"},"12"),").",s.h(a.span,{className:"hljs-title function_"},"toString"),"().",s.h(a.span,{className:"hljs-title function_"},"padStart"),"(",s.h(a.span,{className:"hljs-number"},"2"),", ",s.h(a.span,{className:"hljs-string"},"'0'"),`));
  format = format.`,s.h(a.span,{className:"hljs-title function_"},"replace"),"(",s.h(a.span,{className:"hljs-string"},"'mm'"),", minutes.",s.h(a.span,{className:"hljs-title function_"},"toString"),"().",s.h(a.span,{className:"hljs-title function_"},"padStart"),"(",s.h(a.span,{className:"hljs-number"},"2"),", ",s.h(a.span,{className:"hljs-string"},"'0'"),`));
  format = format.`,s.h(a.span,{className:"hljs-title function_"},"replace"),"(",s.h(a.span,{className:"hljs-string"},"'ss'"),", seconds.",s.h(a.span,{className:"hljs-title function_"},"toString"),"().",s.h(a.span,{className:"hljs-title function_"},"padStart"),"(",s.h(a.span,{className:"hljs-number"},"2"),", ",s.h(a.span,{className:"hljs-string"},"'0'"),`));

  `,s.h(a.span,{className:"hljs-keyword"},"return"),` format;
};

`,s.h(a.span,{className:"hljs-comment"},"// \u793A\u4F8B\u7528\u6CD5"),`
`,s.h(a.span,{className:"hljs-keyword"},"const")," date = ",s.h(a.span,{className:"hljs-keyword"},"new")," ",s.h(a.span,{className:"hljs-title class_"},"Date"),`();
`,s.h(a.span,{className:"hljs-keyword"},"const")," formattedDate = date.",s.h(a.span,{className:"hljs-title function_"},"format"),"(",s.h(a.span,{className:"hljs-string"},"'YYYY/MM/DD HH:mm:ss'"),`);
`,s.h(a.span,{className:"hljs-variable language_"},"console"),".",s.h(a.span,{className:"hljs-title function_"},"log"),"(formattedDate); ",s.h(a.span,{className:"hljs-comment"},"// \u8F93\u51FA\u7ED3\u679C\u4E3A\u5F53\u524D\u65E5\u671F\u548C\u65F6\u95F4\u7684\u683C\u5F0F\u5316\u5B57\u7B26\u4E32"),`
`)),`
`,s.h(a.h2,null,"JS\u4E2D\u521B\u5EFA\u53EF\u8FED\u4EE3\u5BF9\u8C61"),`
`,s.h(a.pre,null,s.h(a.code,{className:"hljs language-javascript"},s.h(a.span,{className:"hljs-comment"},"// \u53EF\u4EE5\u5E94\u7528 for..of \u7684\u5BF9\u8C61\u88AB\u79F0\u4E3A \u53EF\u8FED\u4EE3\u7684"),`
`,s.h(a.span,{className:"hljs-comment"},"// Iterable \u5B9E\u73B0\u4E86 Symbol.iterator \u65B9\u6CD5\u7684\u5BF9\u8C61"),`
`,s.h(a.span,{className:"hljs-comment"},"// Array-like \u662F\u6709\u7D22\u5F15\u548C length \u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u6240\u4EE5\u5B83\u4EEC\u770B\u8D77\u6765\u5F88\u50CF\u6570\u7EC4"),`
`,s.h(a.span,{className:"hljs-comment"},"// Array.from \u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u53EF\u8FED\u4EE3\u6216\u7C7B\u6570\u7EC4\u7684\u503C\uFF0C\u5E76\u4ECE\u4E2D\u83B7\u53D6\u4E00\u4E2A\u201C\u771F\u6B63\u7684\u201D\u6570\u7EC4"),`

`,s.h(a.span,{className:"hljs-keyword"},"let"),` range = {
  `,s.h(a.span,{className:"hljs-attr"},"from"),": ",s.h(a.span,{className:"hljs-number"},"1"),`,
  `,s.h(a.span,{className:"hljs-attr"},"to"),": ",s.h(a.span,{className:"hljs-number"},"5"),`
};

`,s.h(a.span,{className:"hljs-comment"},"// 1. for..of \u8C03\u7528\u9996\u5148\u4F1A\u8C03\u7528\u8FD9\u4E2A\uFF1A"),`
range[`,s.h(a.span,{className:"hljs-title class_"},"Symbol"),".",s.h(a.span,{className:"hljs-property"},"iterator"),"] = ",s.h(a.span,{className:"hljs-keyword"},"function"),"(",s.h(a.span,{className:"hljs-params"}),`) {
  `,s.h(a.span,{className:"hljs-comment"},"// \u5B83\u8FD4\u56DE\u8FED\u4EE3\u5668\u5BF9\u8C61\uFF08iterator object\uFF09\uFF1A"),`
  `,s.h(a.span,{className:"hljs-comment"},"// \u63A5\u4E0B\u6765\uFF0Cfor..of \u4EC5\u4E0E\u4E0B\u9762\u7684\u8FED\u4EE3\u5668\u5BF9\u8C61\u4E00\u8D77\u5DE5\u4F5C\uFF0C\u8981\u6C42\u5B83\u63D0\u4F9B\u4E0B\u4E00\u4E2A\u503C"),`
  `,s.h(a.span,{className:"hljs-keyword"},"return"),` {
    `,s.h(a.span,{className:"hljs-attr"},"current"),": ",s.h(a.span,{className:"hljs-variable language_"},"this"),".",s.h(a.span,{className:"hljs-property"},"from"),`,
    `,s.h(a.span,{className:"hljs-attr"},"last"),": ",s.h(a.span,{className:"hljs-variable language_"},"this"),".",s.h(a.span,{className:"hljs-property"},"to"),`,

    `,s.h(a.span,{className:"hljs-comment"},"// 3. next() \u5728 for..of \u7684\u6BCF\u4E00\u8F6E\u5FAA\u73AF\u8FED\u4EE3\u4E2D\u88AB\u8C03\u7528"),`
    `,s.h(a.span,{className:"hljs-title function_"},"next"),"(",s.h(a.span,{className:"hljs-params"}),`) {
      `,s.h(a.span,{className:"hljs-comment"},"// 4. \u5B83\u5C06\u4F1A\u8FD4\u56DE {done:.., value :...} \u683C\u5F0F\u7684\u5BF9\u8C61"),`
      `,s.h(a.span,{className:"hljs-keyword"},"if")," (",s.h(a.span,{className:"hljs-variable language_"},"this"),".",s.h(a.span,{className:"hljs-property"},"current")," <= ",s.h(a.span,{className:"hljs-variable language_"},"this"),".",s.h(a.span,{className:"hljs-property"},"last"),`) {
        `,s.h(a.span,{className:"hljs-keyword"},"return")," { ",s.h(a.span,{className:"hljs-attr"},"done"),": ",s.h(a.span,{className:"hljs-literal"},"false"),", ",s.h(a.span,{className:"hljs-attr"},"value"),": ",s.h(a.span,{className:"hljs-variable language_"},"this"),".",s.h(a.span,{className:"hljs-property"},"current"),`++ };
      } `,s.h(a.span,{className:"hljs-keyword"},"else"),` {
        `,s.h(a.span,{className:"hljs-keyword"},"return")," { ",s.h(a.span,{className:"hljs-attr"},"done"),": ",s.h(a.span,{className:"hljs-literal"},"true"),` };
      }
    }
  };
};

`,s.h(a.span,{className:"hljs-keyword"},"for")," (",s.h(a.span,{className:"hljs-keyword"},"let")," num ",s.h(a.span,{className:"hljs-keyword"},"of"),` range) {
  `,s.h(a.span,{className:"hljs-variable language_"},"console"),".",s.h(a.span,{className:"hljs-title function_"},"log"),"(num); ",s.h(a.span,{className:"hljs-comment"},"// 1, \u7136\u540E\u662F 2, 3, 4, 5"),`
}

`,s.h(a.span,{className:"hljs-keyword"},"let"),` list = {
  `,s.h(a.span,{className:"hljs-attr"},"start"),": ",s.h(a.span,{className:"hljs-number"},"0"),`,
  `,s.h(a.span,{className:"hljs-attr"},"end"),": ",s.h(a.span,{className:"hljs-number"},"10"),`,

  [`,s.h(a.span,{className:"hljs-title class_"},"Symbol"),".",s.h(a.span,{className:"hljs-property"},"iterator"),"]: ",s.h(a.span,{className:"hljs-keyword"},"function"),`* () {
    `,s.h(a.span,{className:"hljs-keyword"},"for"),"(",s.h(a.span,{className:"hljs-keyword"},"let")," i = ",s.h(a.span,{className:"hljs-variable language_"},"this"),".",s.h(a.span,{className:"hljs-property"},"start"),"; i < ",s.h(a.span,{className:"hljs-variable language_"},"this"),".",s.h(a.span,{className:"hljs-property"},"end"),`; i++) {
      `,s.h(a.span,{className:"hljs-keyword"},"yield"),` i;
    }
  }
}

`,s.h(a.span,{className:"hljs-keyword"},"for")," (",s.h(a.span,{className:"hljs-keyword"},"let")," li ",s.h(a.span,{className:"hljs-keyword"},"of"),` list) {
  `,s.h(a.span,{className:"hljs-variable language_"},"console"),".",s.h(a.span,{className:"hljs-title function_"},"log"),`(li);
}
`)),`
`,s.h(a.h2,null,"JS\u4E2D\u5F15\u7528\u6570\u636E\u7684\u6DF1\u514B\u9686"),`
`,s.h(a.pre,null,s.h(a.code,{className:"hljs language-javascript"},s.h(a.span,{className:"hljs-keyword"},"function")," ",s.h(a.span,{className:"hljs-title function_"},"deepClone"),"(",s.h(a.span,{className:"hljs-params"},"obj, visited = ",s.h(a.span,{className:"hljs-keyword"},"new")," ",s.h(a.span,{className:"hljs-built_in"},"WeakMap"),"()"),`) {
    `,s.h(a.span,{className:"hljs-keyword"},"if")," (",s.h(a.span,{className:"hljs-keyword"},"typeof")," obj !== ",s.h(a.span,{className:"hljs-string"},'"object"')," || obj === ",s.h(a.span,{className:"hljs-literal"},"null"),") ",s.h(a.span,{className:"hljs-keyword"},"return"),` obj;
    `,s.h(a.span,{className:"hljs-comment"},"// \u9632\u6B62\u5FAA\u73AF\u5F15\u7528"),`
    `,s.h(a.span,{className:"hljs-keyword"},"if")," (visited.",s.h(a.span,{className:"hljs-title function_"},"has"),`(obj)) {
      `,s.h(a.span,{className:"hljs-keyword"},"return")," visited.",s.h(a.span,{className:"hljs-title function_"},"get"),`(obj);
    }
    `,s.h(a.span,{className:"hljs-comment"},"// \u83B7\u53D6\u5BF9\u8C61\u7684\u6784\u9020\u51FD\u6570"),`
    `,s.h(a.span,{className:"hljs-keyword"},"const")," constructor = obj.",s.h(a.span,{className:"hljs-property"},"constructor"),`;
    `,s.h(a.span,{className:"hljs-comment"},"// \u5904\u7406\u7279\u6B8A\u5BF9\u8C61\u7C7B\u578B~\u6B63\u5219\u5BF9\u8C61\u548C\u65F6\u95F4\u5BF9\u8C61"),`
    `,s.h(a.span,{className:"hljs-keyword"},"if"),"(",s.h(a.span,{className:"hljs-regexp"},"/^(RegExp|Date|WeakMap|WeakSet)/"),".",s.h(a.span,{className:"hljs-title function_"},"test"),"(constructor.",s.h(a.span,{className:"hljs-property"},"name"),`)) {
        `,s.h(a.span,{className:"hljs-keyword"},"const")," res = ",s.h(a.span,{className:"hljs-keyword"},"new")," ",s.h(a.span,{className:"hljs-title function_"},"constructor"),"(",s.h(a.span,{className:"hljs-params"},"obj"),`);
        visited.`,s.h(a.span,{className:"hljs-title function_"},"set"),`(obj, res);
        `,s.h(a.span,{className:"hljs-keyword"},"return"),` res;
    }
    `,s.h(a.span,{className:"hljs-comment"},"// Map"),`
    `,s.h(a.span,{className:"hljs-keyword"},"if")," (constructor === ",s.h(a.span,{className:"hljs-title class_"},"Map"),`) {
      `,s.h(a.span,{className:"hljs-keyword"},"const")," map = ",s.h(a.span,{className:"hljs-keyword"},"new")," ",s.h(a.span,{className:"hljs-title class_"},"Map"),`();
      visited.`,s.h(a.span,{className:"hljs-title function_"},"set"),`(obj, map);
      obj.`,s.h(a.span,{className:"hljs-title function_"},"forEach"),"(",s.h(a.span,{className:"hljs-function"},"(",s.h(a.span,{className:"hljs-params"},"value, key"),") =>"),` {
        map.`,s.h(a.span,{className:"hljs-title function_"},"set"),"(key, ",s.h(a.span,{className:"hljs-title function_"},"deepClone"),`(value, visited));
      });
      `,s.h(a.span,{className:"hljs-keyword"},"return"),` map;
    }
    `,s.h(a.span,{className:"hljs-comment"},"// Set"),`
    `,s.h(a.span,{className:"hljs-keyword"},"if")," (constructor === ",s.h(a.span,{className:"hljs-title class_"},"Set"),`) {
      `,s.h(a.span,{className:"hljs-keyword"},"const")," set = ",s.h(a.span,{className:"hljs-keyword"},"new")," ",s.h(a.span,{className:"hljs-title class_"},"Set"),`();
      visited.`,s.h(a.span,{className:"hljs-title function_"},"set"),`(obj, set);
      obj.`,s.h(a.span,{className:"hljs-title function_"},"forEach"),"(",s.h(a.span,{className:"hljs-function"},"(",s.h(a.span,{className:"hljs-params"},"value"),") =>"),` {
        set.`,s.h(a.span,{className:"hljs-title function_"},"add"),"(",s.h(a.span,{className:"hljs-title function_"},"deepClone"),`(value, visited));
      });
      `,s.h(a.span,{className:"hljs-keyword"},"return"),` set;
    }
    `,s.h(a.span,{className:"hljs-comment"},"// \u5904\u7406\u51FD\u6570\u5BF9\u8C61\u548C\u7BAD\u5934\u51FD\u6570"),`
    `,s.h(a.span,{className:"hljs-keyword"},"if"),"(constructor === ",s.h(a.span,{className:"hljs-title class_"},"Function"),`) {
        `,s.h(a.span,{className:"hljs-keyword"},"let"),` res;
        `,s.h(a.span,{className:"hljs-keyword"},"if"),"(!obj.",s.h(a.span,{className:"hljs-title function_"},"hasOwnProperty"),"(",s.h(a.span,{className:"hljs-string"},'"prototype"'),")) { ",s.h(a.span,{className:"hljs-comment"},"// \u7BAD\u5934\u51FD\u6570"),`
            res = `,s.h(a.span,{className:"hljs-keyword"},"new")," ",s.h(a.span,{className:"hljs-title class_"},"Function"),"(",s.h(a.span,{className:"hljs-string"},"`return ",s.h(a.span,{className:"hljs-subst"},"${obj.toString()}"),"`"),`)()
            visited.`,s.h(a.span,{className:"hljs-title function_"},"set"),"(obj, res); ",s.h(a.span,{className:"hljs-comment"},"// \u907F\u514D\u5FAA\u73AF\u5F15\u7528"),`
            `,s.h(a.span,{className:"hljs-keyword"},"return"),` res;
        }
        `,s.h(a.span,{className:"hljs-comment"},"// \u8003\u8651\u5230\u6784\u9020\u51FD\u6570\u548C\u666E\u901A\u5BF9\u8C61"),`
        res = `,s.h(a.span,{className:"hljs-keyword"},"function"),"(",s.h(a.span,{className:"hljs-params"},"...args"),`) {
            `,s.h(a.span,{className:"hljs-keyword"},"return")," obj.",s.h(a.span,{className:"hljs-title function_"},"call"),"(",s.h(a.span,{className:"hljs-variable language_"},"this"),`, ...args);
        }
        visited.`,s.h(a.span,{className:"hljs-title function_"},"set"),"(obj, res); ",s.h(a.span,{className:"hljs-comment"},"// \u907F\u514D\u5FAA\u73AF\u5F15\u7528"),`
        `,s.h(a.span,{className:"hljs-comment"},"// \u666E\u901A\u5BF9\u8C61\u7684\u81EA\u8EAB\u7684\u5C5E\u6027\uFF0C\u6BD4\u5982fn.a = 2\u8FD9\u79CD\u9759\u6001\u5C5E\u6027"),`
        `,s.h(a.span,{className:"hljs-title class_"},"Object"),".",s.h(a.span,{className:"hljs-title function_"},"keys"),"(obj).",s.h(a.span,{className:"hljs-title function_"},"forEach"),"(",s.h(a.span,{className:"hljs-function"},s.h(a.span,{className:"hljs-params"},"key")," =>"),` res[key] = obj[key]);
        `,s.h(a.span,{className:"hljs-comment"},"// \u539F\u578B\u7EE7\u627F\uFF0C\u5BC4\u751F\u7EC4\u5408\u7EE7\u627F\uFF0C\u590D\u5236\u8BE5\u51FD\u6570\u7684\u539F\u578B\u94FE"),`
        res.`,s.h(a.span,{className:"hljs-property"},s.h(a.span,{className:"hljs-keyword"},"prototype"))," = ",s.h(a.span,{className:"hljs-title class_"},"Object"),".",s.h(a.span,{className:"hljs-title function_"},"create"),"(obj.",s.h(a.span,{className:"hljs-property"},s.h(a.span,{className:"hljs-keyword"},"prototype")),`);
        res.`,s.h(a.span,{className:"hljs-property"},s.h(a.span,{className:"hljs-keyword"},"prototype")),".",s.h(a.span,{className:"hljs-property"},"constructor"),` = res;
        `,s.h(a.span,{className:"hljs-keyword"},"return"),` res;
    }
    `,s.h(a.span,{className:"hljs-comment"},"// \u5904\u7406\u666E\u901A\u5BF9\u8C61\u548C\u6570\u7EC4"),`
    `,s.h(a.span,{className:"hljs-keyword"},"const")," result = ",s.h(a.span,{className:"hljs-title class_"},"Array"),".",s.h(a.span,{className:"hljs-title function_"},"isArray"),`(obj) ? [] : {};
    visited.`,s.h(a.span,{className:"hljs-title function_"},"set"),`(obj, result);
    `,s.h(a.span,{className:"hljs-comment"},"// \u83B7\u53D6\u5BF9\u8C61\u7684\u6240\u6709\u5C5E\u6027\u540D\uFF0C\u5305\u62EC\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027"),`
    `,s.h(a.span,{className:"hljs-keyword"},"const")," props = ",s.h(a.span,{className:"hljs-title class_"},"Object"),".",s.h(a.span,{className:"hljs-title function_"},"getOwnPropertyNames"),"(obj); ",s.h(a.span,{className:"hljs-comment"},"// \u4E0D\u53EF\u679A\u4E3E\u7C7B\u578B"),`
    `,s.h(a.span,{className:"hljs-keyword"},"const")," symbolProps = ",s.h(a.span,{className:"hljs-title class_"},"Object"),".",s.h(a.span,{className:"hljs-title function_"},"getOwnPropertySymbols"),"(obj); ",s.h(a.span,{className:"hljs-comment"},"// Symbol\u7C7B\u578B"),`
    props.`,s.h(a.span,{className:"hljs-title function_"},"concat"),"(symbolProps).",s.h(a.span,{className:"hljs-title function_"},"forEach"),"(",s.h(a.span,{className:"hljs-function"},s.h(a.span,{className:"hljs-params"},"key")," =>"),` {
        `,s.h(a.span,{className:"hljs-keyword"},"const")," descriptor = ",s.h(a.span,{className:"hljs-title class_"},"Object"),".",s.h(a.span,{className:"hljs-title function_"},"getOwnPropertyDescriptor"),`(obj, key);
        `,s.h(a.span,{className:"hljs-keyword"},"if"),`(descriptor) {
            `,s.h(a.span,{className:"hljs-keyword"},"const"),` { value, writable, enumerable, configurable } = descriptor;
            `,s.h(a.span,{className:"hljs-title class_"},"Object"),".",s.h(a.span,{className:"hljs-title function_"},"defineProperty"),`(result, key, {
                `,s.h(a.span,{className:"hljs-attr"},"value"),": ",s.h(a.span,{className:"hljs-title function_"},"deepClone"),`(value, visited),
                writable, enumerable, configurable
            })
        }
    });
    `,s.h(a.span,{className:"hljs-keyword"},"return"),` result;
}
`)))}function o(n={}){let{wrapper:a}=Object.assign({},h(),n.components);return a?s.h(a,n,s.h(m,n)):m(n)}var t=o;var f=c({name:"MDX_PART-ONE",components:{MDXComponentContext:t},setup(n,a){return()=>e("div",{class:"markdown-body",style:"padding: 15px;"},e(t,{...a?.attrs}))}});export{f as default};
