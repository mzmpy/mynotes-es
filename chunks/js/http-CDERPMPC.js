import{a as s}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-USLGJHA5.js";import"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-2DWO7YND.js";import"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-5YMSGHBY.js";import{a}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-PUSXDCM7.js";import"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-6LKZ5OXL.js";import{a as e}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-POXU7V46.js";import"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-BPDBNESI.js";import{a as n}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-H4BOTD4D.js";import"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-H4A6XWEC.js";import{g as t}from"https://mzmpy.github.io/mynotes-es/chunks/js/chunk-M2CGHGHN.js";t();var m=Object.freeze({displayName:"HTTP",fileTypes:["http","rest"],name:"http",patterns:[{begin:"^\\s*(?=curl)",end:"^\\s*(\\#{3,}.*?)?\\s*$",endCaptures:{0:{name:"comment.line.sharp.http"}},name:"http.request.curl",patterns:[{include:"source.shell"}]},{begin:"\\s*(?=(\\[|{[^{]))",end:"^\\s*(\\#{3,}.*?)?\\s*$",endCaptures:{0:{name:"comment.line.sharp.http"}},name:"http.request.body.json",patterns:[{include:"source.json"}]},{begin:"^\\s*(?=<\\S)",end:"^\\s*(\\#{3,}.*?)?\\s*$",endCaptures:{0:{name:"comment.line.sharp.http"}},name:"http.request.body.xml",patterns:[{include:"text.xml"}]},{begin:"\\s*(?=(query|mutation))",end:"^\\s*(\\#{3,}.*?)?\\s*$",endCaptures:{0:{name:"comment.line.sharp.http"}},name:"http.request.body.graphql",patterns:[{include:"source.graphql"}]},{begin:"\\s*(?=(query|mutation))",end:"^\\{\\s*$",name:"http.request.body.graphql",patterns:[{include:"source.graphql"}]},{include:"#metadata"},{include:"#comments"},{captures:{1:{name:"keyword.other.http"},2:{name:"variable.other.http"},3:{name:"string.other.http"}},match:"^\\s*(@)([^\\s=]+)\\s*=\\s*(.*?)\\s*$",name:"http.filevariable"},{captures:{1:{name:"keyword.operator.http"},2:{name:"variable.other.http"},3:{name:"string.other.http"}},match:"^\\s*(\\?|&)([^=\\s]+)=(.*)$",name:"http.query"},{captures:{1:{name:"entity.name.tag.http"},2:{name:"keyword.other.http"},3:{name:"string.other.http"}},match:"^([\\w\\-]+)\\s*(\\:)\\s*([^/].*?)\\s*$",name:"http.headers"},{include:"#request-line"},{include:"#response-line"}],repository:{comments:{patterns:[{match:"^\\s*\\#{1,}.*$",name:"comment.line.sharp.http"},{match:"^\\s*\\/{2,}.*$",name:"comment.line.double-slash.http"}]},metadata:{patterns:[{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"},3:{name:"entity.name.type.http"}},match:"^\\s*\\#{1,}\\s+(?:((@)name)\\s+([^\\s\\.]+))$",name:"comment.line.sharp.http"},{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"},3:{name:"entity.name.type.http"}},match:"^\\s*\\/{2,}\\s+(?:((@)name)\\s+([^\\s\\.]+))$",name:"comment.line.double-slash.http"},{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"}},match:"^\\s*\\#{1,}\\s+((@)note)\\s*$",name:"comment.line.sharp.http"},{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"}},match:"^\\s*\\/{2,}\\s+((@)note)\\s*$",name:"comment.line.double-slash.http"},{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"},3:{name:"variable.other.http"},4:{name:"string.other.http"}},match:"^\\s*\\#{1,}\\s+(?:((@)prompt)\\s+([^\\s]+)(?:\\s+(.*))?\\s*)$",name:"comment.line.sharp.http"},{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"},3:{name:"variable.other.http"},4:{name:"string.other.http"}},match:"^\\s*\\/{2,}\\s+(?:((@)prompt)\\s+([^\\s]+)(?:\\s+(.*))?\\s*)$",name:"comment.line.double-slash.http"}]},protocol:{patterns:[{captures:{1:{name:"keyword.other.http"},2:{name:"constant.numeric.http"}},match:"(HTTP)/(\\d+.\\d+)",name:"http.version"}]},"request-line":{captures:{1:{name:"keyword.control.http"},2:{name:"const.language.http"},3:{patterns:[{include:"#protocol"}]}},match:"(?i)^(?:(get|post|put|delete|patch|head|options|connect|trace|lock|unlock|propfind|proppatch|copy|move|mkcol|mkcalendar|acl|search)\\s+)?\\s*(.+?)(?:\\s+(HTTP\\/\\S+))?$",name:"http.requestline"},"response-line":{captures:{1:{patterns:[{include:"#protocol"}]},2:{name:"constant.numeric.http"},3:{name:"string.other.http"}},match:"(?i)^\\s*(HTTP\\/\\S+)\\s([1-5][0-9][0-9])\\s(.*)$",name:"http.responseLine"}},scopeName:"source.http",embeddedLangs:["shellscript","json","xml","graphql"]}),u=[...a,...n,...e,...s,m];export{u as default};