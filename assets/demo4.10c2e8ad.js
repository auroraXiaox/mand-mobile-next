var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(o,t,l)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l,i=(e,o)=>{for(var t in o||(o={}))r.call(o,t)&&a(e,t,o[t]);if(l)for(var t of l(o))n.call(o,t)&&a(e,t,o[t]);return e},u=(e,l)=>o(e,t(l));import{g as s,m as p,c as f,d as b,w as d,e as v,a as m,k as c,t as _}from"./app.dd25191e.js";import{n as y}from"./index.dff04a54.js";import{b as j}from"./index.8c9686d8.js";import{t as g}from"./index.14549756.js";var O=s(u(i({},{name:"NumberKeyboardDemo",title:"弹窗展示(professional)"}),{expose:[],setup(e){const o=p(!1);function t(e){g.info(`输入: ${e}`)}function l(){g.info("删除键")}return(e,r)=>(m(),f("div",null,[b(v(j),{onClick:r[1]||(r[1]=e=>o.value=!o.value)},{default:d((()=>[c(_(o.value?"收起键盘":"唤起键盘"),1)])),_:1}),b(v(y),{visible:o.value,"onUpdate:visible":r[2]||(r[2]=e=>o.value=e),type:"professional",onEnter:t,onDelete:l},null,8,["visible"])]))}})),x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});var S=s(u(i({},{name:"NumberKeyboardDemo",title:"弹窗展示(simple)"}),{expose:[],setup(e){const o=p(!1);function t(e){g.info(`输入: ${e}`)}function l(){g.info("删除键")}return(e,r)=>(m(),f("div",null,[b(v(j),{onClick:r[1]||(r[1]=e=>o.value=!o.value)},{default:d((()=>[c(_(o.value?"收起键盘":"唤起键盘"),1)])),_:1}),b(v(y),{visible:o.value,"onUpdate:visible":r[2]||(r[2]=e=>o.value=e),type:"simple",onEnter:t,onDelete:l},null,8,["visible"])]))}})),D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});var w=s(u(i({},{name:"NumberKeyboardDemo",title:"替换键值"}),{expose:[],setup(e){const o=p(!1);function t(e){g.info(`输入: ${e}`)}function l(){g.info("删除键")}function r(e){if("."===e)return"x"}return(e,n)=>(m(),f("div",null,[b(v(j),{onClick:n[1]||(n[1]=e=>o.value=!o.value)},{default:d((()=>[c(_(o.value?"收起键盘":"唤起键盘"),1)])),_:1}),b(v(y),{visible:o.value,"onUpdate:visible":n[2]||(n[2]=e=>o.value=e),type:"professional","text-render":r,onEnter:t,onDelete:l},null,8,["visible"])]))}})),z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});var K=s(u(i({},{name:"NumberKeyboardDemo",title:"乱序"}),{expose:[],setup(e){const o=p(!0);return(e,t)=>(m(),f(v(y),{"is-view":!0,disorder:o.value},null,8,["disorder"]))}})),M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});var N=s(u(i({},{name:"NumberKeyboardDemo",title:"隐藏小数点"}),{expose:[],setup:e=>(e,o)=>(m(),f(v(y),{"is-view":!0,"hide-dot":!0}))})),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});export{x as _,D as a,z as b,M as c,P as d};
