var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;import{K as o,p as d,g as p,a as i,c as b,i as c,f as m,d as f,k as u,e as y,l as g}from"./app.587128d6.js";import{t as j}from"./index.8cbab5fd.js";import"./index.fef09045.js";const v={label:{type:String,default:""},name:{type:String,default:""},disabled:{type:Boolean,default:!1}};var O=p({props:v,setup(e){(e=>{const{addItem:a,removeItem:t}=o("Tabs",{});a(e),d((()=>{t(e)}))})(e)}});O.render=function(e,a,t,l,s,n){return e.disabled?m("v-if",!0):(i(),b("div",{key:0,class:"md-tab-pane",role:"tabpanel",tab:e.name},[c(e.$slots,"default")],8,["tab"]))};const _={class:"\n      md-example-child\n      md-example-child-tabs\n      md-example-child-tabs-0\n    "},x=g(" 她对他很满意。走吧。好。他起身买单，腿却一拐一拐的。难怪他才华横溢，事业有成，却还是单身。趁着他买单，她赶紧悄悄走了。 "),h=g(" 又是一年，她又遇到了他，他正牵着孩子的手，走的飞快。 "),P=g(" 你的腿？她有些诧异。腿？我的腿怎么了？他更诧异。后来，她才知道他的腿，那天只是坐麻了而已。 ");var S,w=p((S=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&r(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&r(e,t,a[t]);return e})({},{name:"TabsDemo",title:"基本"}),a(S,t({expose:[],setup(e){const a=e=>{console.log(e)};return(e,t)=>(i(),b("div",_,[f(y(j),{"default-index":0,immediate:!0,onChange:a},{default:u((()=>[f(O,{class:"content",name:"p1",label:"第一章"},{default:u((()=>[x])),_:1}),f(O,{class:"content",name:"p2",label:"第二章"},{default:u((()=>[h])),_:1}),f(O,{class:"content",name:"p3",label:"第三章",disabled:""},{default:u((()=>[P])),_:1})])),_:1})]))}})))),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});export{I as _};