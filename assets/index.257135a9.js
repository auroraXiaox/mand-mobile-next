var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{a0 as o,z as d,g as i,a as c,c as m,j as p,f as u,y as b,d as f,l as v,e as g,s as x,m as y,r as j,p as _,F as O,k as h,t as w,i as S,q as T}from"./app.49a262c4.js";import{t as C}from"./index.f1a2bf82.js";import{b as k}from"./index.432743f6.js";import{c as z}from"./animate.c6da258d.js";const P={label:{type:String,default:""},name:{type:String,default:""},disabled:{type:Boolean,default:!1}};var I=i({props:P,setup(e){(e=>{const{addItem:a,removeItem:t}=o("Tabs",{});a(e),d((()=>{t(e)}))})(e)}});const $=["tab"];I.render=function(e,a,t,s,l,n){return e.disabled?u("v-if",!0):(c(),m("div",{key:0,class:"md-tab-pane",role:"tabpanel",tab:e.name},[p(e.$slots,"default")],8,$))};const D={class:"\n      md-example-child\n      md-example-child-tabs\n      md-example-child-tabs-0\n    "},M=y(" 她对他很满意。走吧。好。他起身买单，腿却一拐一拐的。难怪他才华横溢，事业有成，却还是单身。趁着他买单，她赶紧悄悄走了。 "),q=y(" 又是一年，她又遇到了他，他正牵着孩子的手，走的飞快。 "),B=y(" 支付0元，解锁第三章 "),E=y(" 你的腿？她有些诧异。腿？我的腿怎么了？他更诧异。后来，她才知道他的腿，那天只是坐麻了而已。 ");var F,A=i((F=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&r(e,t,a[t]);if(s)for(var t of s(a))n.call(a,t)&&r(e,t,a[t]);return e})({},{name:"TabsDemo",title:"基本"}),a(F,t({setup(e){const a=e=>{console.log(e)},t=b(!0),s=b(null),l=()=>{t.value=!1,setTimeout((()=>{var e,a;null==(e=s.value.$refs.swiper)||e.resetSwiper(),null==(a=s.value.$refs.swiper.getSwiperInstance())||a.goToPage(2,0)}))};return(e,n)=>(c(),m("div",D,[f(g(C),{ref:s,"default-index":0,immediate:!0,onChange:a},{default:v((()=>[f(I,{class:"content",name:"p1",label:"第一章"},{default:v((()=>[M])),_:1}),f(I,{class:"content",name:"p2",label:"第二章"},{default:v((()=>[q,f(g(k),{type:"link",onClick:l},{default:v((()=>[B,f(g(x),{name:"arrow-right",size:"xs"})])),_:1})])),_:1}),f(I,{class:"content",name:"p3",label:"第三章",disabled:t.value},{default:v((()=>[E])),_:1},8,["disabled"])])),_:1},512)]))}})))),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});const H={"./demo0.vue":G};var J=z("Tabs",Object.entries(H).map((e=>e[1].default)));const K={class:"md-nav"},L=_("p",{class:"name"},"Tabs",-1),N=_("p",{class:"name-zh"},"标签页",-1),Q={class:"md-example tabs"},R=["textContent"],U=["textContent"],V={class:"md-example-content"};J.render=function(e,a,t,s,l,n){const r=j("md-icon");return c(),m(O,null,[_("div",K,[_("p",{class:"home",onClick:a[0]||(a[0]=a=>e.$router.push("/"))},[f(r,{name:"home",size:"lg"})]),L,N]),_("div",Q,[(c(!0),m(O,null,h(e.demos,((e,a)=>(c(),m("section",{key:a,class:"md-example-section"},[_("div",{class:"md-example-title",textContent:w(e.title)},null,8,R),_("div",{class:"md-example-describe",textContent:w(e.describe)},null,8,U),_("div",V,[(c(),S(T(e)))])])))),128))])],64)};var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});export{G as _,W as a};
