`,I.h(R.ul,null,`
`,I.h(R.li,null,`
`,I.h(R.p,null,I.h(R.code,null,"jsx"),"\u751F\u83DC\uFF1A\u8BB0\u5F55\u5173\u4E8E\u4F7F\u7528",I.h(R.code,null,"esbuild"),"\u7F16\u8BD1",I.h(R.code,null,"vue"),"+",I.h(R.code,null,"jsx"),"\u65F6\u6240\u7528\u5230\u7684\u4E00\u4E9B\u786C\u6838\uFF08\u751F\u786C\uFF09\u7684\u6280\u5DE7\u{1F41B}\u{1F98B}"),`
`,I.h(R.ul,null,`
`,I.h(R.li,null,`
`,I.h(R.p,null,I.h(R.code,null,"v-show"),"\u548C",I.h(R.code,null,"v-model"),"\uFF1A",I.h(R.code,null,"jsx"),"\u4E2D",I.h(R.code,null,"v-model"),"\u4E00\u822C\u9700\u8981\u62C6\u5206\u6210",I.h(R.code,null,"value={ value } onXXX={ actionToValue }"),"\uFF0C",I.h(R.code,null,"v-show"),`\u5219\u9700\u8981\u901A
\u8FC7`,I.h(R.code,null,"vue"),"\u63D0\u4F9B\u7684\u63A5\u53E3",I.h(R.code,null,"withDirectives"),`\u6765\u624B\u52A8\u5B9E\u73B0\uFF1B\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u4EFB\u4F55\u81EA\u5B9A\u4E49\u7684\u6307\u4EE4\u90FD\u9700\u8981\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6765\u5B9E\u73B0\uFF0C\u9664\u975E\u96C6\u6210\u7C7B\u4F3C
`,I.h(R.code,null,"esbuild-plugin-vue"),"\u8FD9\u6837\u7684\u63D2\u4EF6\u6765\u4F7F\u7528",I.h(R.code,null,"vue"),"\u7684\u6A21\u677F\u8BED\u6CD5"),`
`,I.h(R.pre,null,I.h(R.code,{className:"hljs language-javascript"},I.h(R.span,{className:"hljs-keyword"},"import"),` {
  defineComponent,
  withDirectives,
  ref,
  vShow
} `,I.h(R.span,{className:"hljs-keyword"},"from")," ",I.h(R.span,{className:"hljs-string"},"'vue'"),`
`,I.h(R.span,{className:"hljs-keyword"},"import")," { ",I.h(R.span,{className:"hljs-title class_"},"ElSwitch")," } ",I.h(R.span,{className:"hljs-keyword"},"from")," ",I.h(R.span,{className:"hljs-string"},"'element-plus/components'"),`

`,I.h(R.span,{className:"hljs-title function_"},"defineComponent"),`({
  `,I.h(R.span,{className:"hljs-attr"},"name"),": ",I.h(R.span,{className:"hljs-string"},"'Test'"),`,
  `,I.h(R.span,{className:"hljs-attr"},"components"),": { ",I.h(R.span,{className:"hljs-title class_"},"ElSwitch"),` },
  `,I.h(R.span,{className:"hljs-title function_"},"setup"),"(",I.h(R.span,{className:"hljs-params"}),`) {
    `,I.h(R.span,{className:"hljs-keyword"},"const")," show = ",I.h(R.span,{className:"hljs-title function_"},"ref"),"(",I.h(R.span,{className:"hljs-literal"},"true"),`)
    `,I.h(R.span,{className:"hljs-keyword"},"const")," ",I.h(R.span,{className:"hljs-title function_"},"toggle")," = (",I.h(R.span,{className:"hljs-params"}),") => show.",I.h(R.span,{className:"hljs-property"},"value")," = !show.",I.h(R.span,{className:"hljs-property"},"value"),`

    `,I.h(R.span,{className:"hljs-keyword"},"return")," ",I.h(R.span,{className:"hljs-function"},"() =>"),` {
      `,I.h(R.span,{className:"hljs-keyword"},"return")," ",I.h(R.span,{className:"xml"},I.h(R.span,{className:"hljs-tag"},"<>"),`
        `,I.h(R.span,{className:"hljs-tag"},"<",I.h(R.span,{className:"hljs-name"},"ElSwitch")," ",I.h(R.span,{className:"hljs-attr"},"modelValue"),"=",I.h(R.span,{className:"hljs-string"},"{")," ",I.h(R.span,{className:"hljs-attr"},"show.value")," } ",I.h(R.span,{className:"hljs-attr"},"onChange"),"=",I.h(R.span,{className:"hljs-string"},"{")," ",I.h(R.span,{className:"hljs-attr"},"toggle")," }>"),I.h(R.span,{className:"hljs-tag"},"</",I.h(R.span,{className:"hljs-name"},"ElSwitch"),">"),`
        {
          withDirectives(`,I.h(R.span,{className:"hljs-tag"},"<",I.h(R.span,{className:"hljs-name"},"span"),">"),"\u{1F648}",I.h(R.span,{className:"hljs-tag"},"</",I.h(R.span,{className:"hljs-name"},"span"),">"),`, [[vShow, show.value]])
        }
      `,I.h(R.span,{className:"hljs-tag"},"</>")),`
    }
  }
})
`)),`
`,I.h(R.h3,null,I.h(R.code,null,"Demo"),": ",I.h(r)),`
`),`
`),`
`,I.h(R.h2,null,"\u81EA\u5B9A\u4E49\u6307\u4EE4"),`
`,I.h(R.ul,null,`
`,I.h(R.li,null,`
`,I.h(R.p,null,"\u81EA\u5B9A\u4E49\u56FE\u7247\u61D2\u52A0\u8F7D\u6307\u4EE4",I.h(R.code,null,"v-lazy"),"\uFF1A"),`
`,I.h(R.pre,null,I.h(R.code,{className:"hljs language-javascript"},I.h(R.span,{className:"hljs-keyword"},"import")," { defineComponent, withDirectives } ",I.h(R.span,{className:"hljs-keyword"},"from")," ",I.h(R.span,{className:"hljs-string"},"'vue'"),`
`,I.h(R.span,{className:"hljs-keyword"},"import")," styles ",I.h(R.span,{className:"hljs-keyword"},"from")," ",I.h(R.span,{className:"hljs-string"},"'@/components/mdx/constituents/styles/vueDirectiveVLazy.module.css'"),`
`,I.h(R.span,{className:"hljs-keyword"},"import")," catGirlImg ",I.h(R.span,{className:"hljs-keyword"},"from")," ",I.h(R.span,{className:"hljs-string"},"'@/assets/images/catgirl.jpg'"),`
`,I.h(R.span,{className:"hljs-keyword"},"import")," defaultImg ",I.h(R.span,{className:"hljs-keyword"},"from")," ",I.h(R.span,{className:"hljs-string"},"'@/assets/images/nopic.svg'"),`

`,I.h(R.span,{className:"hljs-keyword"},"export")," ",I.h(R.span,{className:"hljs-keyword"},"default")," ",I.h(R.span,{className:"hljs-title function_"},"defineComponent"),`({
  `,I.h(R.span,{className:"hljs-attr"},"name"),": ",I.h(R.span,{className:"hljs-string"},"'LazyPicture'"),`,
  `,I.h(R.span,{className:"hljs-title function_"},"setup"),"(",I.h(R.span,{className:"hljs-params"}),`) {
    `,I.h(R.span,{className:"hljs-keyword"},"const"),` data = {
      `,I.h(R.span,{className:"hljs-string"},"'http://example.com/catgirl.jpg'"),`: catGirlImg
    }

    `,I.h(R.span,{className:"hljs-keyword"},"const")," ",I.h(R.span,{className:"hljs-title class_"},"VLazy"),` = {
      `,I.h(R.span,{className:"hljs-title function_"},"beforeMount"),"(",I.h(R.span,{className:"hljs-params"},"el, binding"),`) {
        el.`,I.h(R.span,{className:"hljs-property"},"dataset"),".",I.h(R.span,{className:"hljs-property"},"src")," = el.",I.h(R.span,{className:"hljs-property"},"src"),`
        el.`,I.h(R.span,{className:"hljs-property"},"src"),` = defaultImg
      },
      `,I.h(R.span,{className:"hljs-title function_"},"mounted"),"(",I.h(R.span,{className:"hljs-params"},"el, binding"),`) {
        `,I.h(R.span,{className:"hljs-keyword"},"const")," lazy = binding.",I.h(R.span,{className:"hljs-property"},"value"),`

        `,I.h(R.span,{className:"hljs-keyword"},"if"),`(lazy) {
          `,I.h(R.span,{className:"hljs-comment"},"// \u8FD9\u91CC\u6709\u4E2A\u5927\u5751\u3002\u3002\u3002"),`
          `,I.h(R.span,{className:"hljs-comment"},"// IntersectionObserver\u7684\u56DE\u8C03\u4F1A\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u6267\u884C\u4E00\u6B21\uFF0C"),`
          `,I.h(R.span,{className:"hljs-comment"},"// \u6240\u4EE5\u52A1\u5FC5\u505A\u597D\u5BF9entry.intersectionRatio\u548Centry.isIntersecting\u7684\u5224\u65AD"),`
          `,I.h(R.span,{className:"hljs-keyword"},"const")," observer = ",I.h(R.span,{className:"hljs-keyword"},"new")," ",I.h(R.span,{className:"hljs-title class_"},"IntersectionObserver"),"(",I.h(R.span,{className:"hljs-function"},"(",I.h(R.span,{className:"hljs-params"},"entries"),") =>"),` {
            `,I.h(R.span,{className:"hljs-keyword"},"for"),"(",I.h(R.span,{className:"hljs-keyword"},"const")," entry ",I.h(R.span,{className:"hljs-keyword"},"of"),` entries) {
              `,I.h(R.span,{className:"hljs-keyword"},"if"),"(entry.",I.h(R.span,{className:"hljs-property"},"intersectionRatio")," > ",I.h(R.span,{className:"hljs-number"},"0.0"),`) {
                `,I.h(R.span,{className:"hljs-comment"},"// \u6A21\u62DF\u5F02\u6B65\u6570\u636E\u8BF7\u6C42"),`
                `,I.h(R.span,{className:"hljs-built_in"},"setTimeout"),"(",I.h(R.span,{className:"hljs-function"},"() =>"),` {
                  entry.`,I.h(R.span,{className:"hljs-property"},"target"),".",I.h(R.span,{className:"hljs-property"},"src")," = data[entry.",I.h(R.span,{className:"hljs-property"},"target"),".",I.h(R.span,{className:"hljs-property"},"dataset"),".",I.h(R.span,{className:"hljs-property"},"src"),`]
                  `,I.h(R.span,{className:"hljs-keyword"},"if"),"(entry.",I.h(R.span,{className:"hljs-property"},"isIntersecting"),`) {
                    entry.`,I.h(R.span,{className:"hljs-property"},"target"),".",I.h(R.span,{className:"hljs-title function_"},"removeAttribute"),"(",I.h(R.span,{className:"hljs-string"},"'data-src'"),`)
                    observer.`,I.h(R.span,{className:"hljs-title function_"},"unobserve"),"(entry.",I.h(R.span,{className:"hljs-property"},"target"),`)
                  }
                }, `,I.h(R.span,{className:"hljs-number"},"1000"),`)
              }
            }
          }, {
            `,I.h(R.span,{className:"hljs-attr"},"rootMargin"),": ",I.h(R.span,{className:"hljs-string"},"'0px 0px 0px 0px'"),`,
            `,I.h(R.span,{className:"hljs-attr"},"threshold"),": ",I.h(R.span,{className:"hljs-number"},"0.0"),`
          })

          observer.`,I.h(R.span,{className:"hljs-title function_"},"observe"),`(el)
        }
      }
    }

    `,I.h(R.span,{className:"hljs-keyword"},"return")," ",I.h(R.span,{className:"hljs-function"},"() =>"),` {
      `,I.h(R.span,{className:"hljs-keyword"},"return")," ",I.h(R.span,{className:"xml"},I.h(R.span,{className:"hljs-tag"},"<>"),`
        `,I.h(R.span,{className:"hljs-tag"},"<",I.h(R.span,{className:"hljs-name"},"div")," ",I.h(R.span,{className:"hljs-attr"},"class"),"=",I.h(R.span,{className:"hljs-string"},"{")," ",I.h(R.span,{className:"hljs-attr"},"styles"),"('",I.h(R.span,{className:"hljs-attr"},"content"),"') }>"),`
          {
            withDirectives(
              `,I.h(R.span,{className:"hljs-tag"},"<",I.h(R.span,{className:"hljs-name"},"img")," ",I.h(R.span,{className:"hljs-attr"},"src"),"=",I.h(R.span,{className:"hljs-string"},'"http://example.com/catgirl.jpg"')," ",I.h(R.span,{className:"hljs-attr"},"class"),"=",I.h(R.span,{className:"hljs-string"},"{")," ",I.h(R.span,{className:"hljs-attr"},"styles"),"('",I.h(R.span,{className:"hljs-attr"},"cat-girl"),"') }>"),I.h(R.span,{className:"hljs-tag"},"</",I.h(R.span,{className:"hljs-name"},"img"),">"),`,
              [[VLazy, true]]
            )
          }
        `,I.h(R.span,{className:"hljs-tag"},"</",I.h(R.span,{className:"hljs-name"},"div"),">"),`
      `,I.h(R.span,{className:"hljs-tag"},"</>")),`
    }
  }
})
`)),`
`,I.h(R.pre,null,I.h(R.code,{className:"hljs language-css"},I.h(R.span,{className:"hljs-selector-class"},".content"),` {
  `,I.h(R.span,{className:"hljs-attribute"},"display"),`: flex;
  `,I.h(R.span,{className:"hljs-attribute"},"justify-content"),`: left;
}

`,I.h(R.span,{className:"hljs-selector-class"},".cat-girl"),` {
  `,I.h(R.span,{className:"hljs-attribute"},"width"),": ",I.h(R.span,{className:"hljs-number"},"275px"),`;
  `,I.h(R.span,{className:"hljs-attribute"},"border-radius"),": ",I.h(R.span,{className:"hljs-number"},"11px"),`;
}
`)),`
`,I.h(R.h3,null,I.h(R.code,null,"Demo"),": ",I.h(Z)),`
`),`
`,I.h(R.li,null,`
`,I.h(R.p,null,"\u81EA\u5B9A\u4E49\u8282\u6D41\u6307\u4EE4",I.h(R.code,null,"v-throttle"),"\uFF1A"),`
`,I.h(R.pre,null,I.h(R.code,{className:"hljs language-javascript"},I.h(R.span,{className:"hljs-keyword"},"import")," { defineComponent, withDirectives } ",I.h(R.span,{className:"hljs-keyword"},"from")," ",I.h(R.span,{className:"hljs-string"},'"vue"'),`
`,I.h(R.span,{className:"hljs-keyword"},"import")," { ",I.h(R.span,{className:"hljs-title class_"},"ElButton"),", ",I.h(R.span,{className:"hljs-title class_"},"ElMessage")," } ",I.h(R.span,{className:"hljs-keyword"},"from")," ",I.h(R.span,{className:"hljs-string"},"'element-plus/components'"),`

`,I.h(R.span,{className:"hljs-keyword"},"export")," ",I.h(R.span,{className:"hljs-keyword"},"default")," ",I.h(R.span,{className:"hljs-title function_"},"defineComponent"),`({
  `,I.h(R.span,{className:"hljs-attr"},"name"),": ",I.h(R.span,{className:"hljs-string"},"'ThrottleButton'"),`,
  `,I.h(R.span,{className:"hljs-attr"},"components"),": { ",I.h(R.span,{className:"hljs-title class_"},"ElButton"),` },
  `,I.h(R.span,{className:"hljs-title function_"},"setup"),"(",I.h(R.span,{className:"hljs-params"}),`) {
    `,I.h(R.span,{className:"hljs-keyword"},"const")," styleDict = { ",I.h(R.span,{className:"hljs-string"},"'vertical-align'"),": ",I.h(R.span,{className:"hljs-string"},"'text-bottom'"),` }

    `,I.h(R.span,{className:"hljs-keyword"},"const")," ",I.h(R.span,{className:"hljs-title function_"},"onSubmit")," = (",I.h(R.span,{className:"hljs-params"}),`) => {
      `,I.h(R.span,{className:"hljs-title class_"},"ElMessage"),`({
        `,I.h(R.span,{className:"hljs-attr"},"message"),": ",I.h(R.span,{className:"hljs-string"},"'Done!'"),`,
        `,I.h(R.span,{className:"hljs-attr"},"type"),": ",I.h(R.span,{className:"hljs-string"},"'success'"),`
      })
    }

    `,I.h(R.span,{className:"hljs-keyword"},"const")," ",I.h(R.span,{className:"hljs-title class_"},"VThrottle"),` = {
      `,I.h(R.span,{className:"hljs-title function_"},"mounted"),"(",I.h(R.span,{className:"hljs-params"},"el, binding"),`) {
        `,I.h(R.span,{className:"hljs-keyword"},"const")," interval = ",I.h(R.span,{className:"hljs-keyword"},"typeof")," binding.",I.h(R.span,{className:"hljs-property"},"value")," === ",I.h(R.span,{className:"hljs-string"},"'number'")," ? binding.",I.h(R.span,{className:"hljs-property"},"value")," : ",I.h(R.span,{className:"hljs-number"},"1500"),`

        `,I.h(R.span,{className:"hljs-keyword"},"let")," timer = ",I.h(R.span,{className:"hljs-literal"},"null"),`
        el.`,I.h(R.span,{className:"hljs-title function_"},"addEventListener"),`(
          `,I.h(R.span,{className:"hljs-string"},"'click'"),`,
          `,I.h(R.span,{className:"hljs-function"},"(",I.h(R.span,{className:"hljs-params"},"ev"),") =>"),` {
            `,I.h(R.span,{className:"hljs-keyword"},"if"),`(!timer) {
              timer = `,I.h(R.span,{className:"hljs-built_in"},"setTimeout"),"(",I.h(R.span,{className:"hljs-function"},"() =>"),` {
                timer = `,I.h(R.span,{className:"hljs-literal"},"null"),`
              }, interval)
            } `,I.h(R.span,{className:"hljs-keyword"},"else"),` {
              ev && ev.`,I.h(R.span,{className:"hljs-title function_"},"stopImmediatePropagation"),`()
            }
          },
          `,I.h(R.span,{className:"hljs-literal"},"true"),`
        )
      }
    }

    `,I.h(R.span,{className:"hljs-keyword"},"return")," ",I.h(R.span,{className:"hljs-function"},"() =>"),` {
      `,I.h(R.span,{className:"hljs-keyword"},"return")," ",I.h(R.span,{className:"xml"},I.h(R.span,{className:"hljs-tag"},"<>"),`
        {
          withDirectives(
            `,I.h(R.span,{className:"hljs-tag"},"<",I.h(R.span,{className:"hljs-name"},"ElButton"),`
              `,I.h(R.span,{className:"hljs-attr"},"style"),"=",I.h(R.span,{className:"hljs-string"},"{")," ",I.h(R.span,{className:"hljs-attr"},"styleDict"),` }
              `,I.h(R.span,{className:"hljs-attr"},"type"),"=",I.h(R.span,{className:"hljs-string"},'"primary"'),`
              `,I.h(R.span,{className:"hljs-attr"},"plain")," ",I.h(R.span,{className:"hljs-attr"},"size"),"=",I.h(R.span,{className:"hljs-string"},'"small"'),`
              `,I.h(R.span,{className:"hljs-attr"},"onClick"),"=",I.h(R.span,{className:"hljs-string"},"{")," ",I.h(R.span,{className:"hljs-attr"},"onSubmit"),` }
            >`),`
              \u63D0\u4EA4
            `,I.h(R.span,{className:"hljs-tag"},"</",I.h(R.span,{className:"hljs-name"},"ElButton"),">"),`,
            [[VThrottle, true]]
          )
        }
      `,I.h(R.span,{className:"hljs-tag"},"</>")),`
    }
  }
})
`)),`
`,I.h(R.h3,null,I.h(R.code,null,"Demo")," ",I.h(o)),`
`),`
`),`
`),`
`))}function Q(J={}){let{wrapper:R}=Object.assign({},n(),J.components);return R?I.h(R,J,I.h(w,J)):w(J)}var B=Q;var eR=u({name:"MDX_VUE@3@DIRECTIVES",components:{MDXComponentContext:B},setup(J,R){return()=>$("div",{class:"markdown-body",style:"padding: 15px;"},$(B,{...R.attrs}))}});export{eR as default};