var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{_ as r,a as i}from"./index.ad69d435.js";import{_ as d}from"./index.2dc87e92.js";import{_ as m}from"./animate.43d2fd98.js";import{d as c,m as p,c as u,f as b,w as f,u as x,o as v,g as j,r as g,F as _,h,t as y,i as O}from"./vendor.ac61ab51.js";import{c as w}from"./index.a0e68d42.js";import"./index.da574677.js";import"./core.esm.e5e53058.js";import"./index.033902f3.js";import"./constants.3b37bb64.js";import"./index.47ef01c8.js";const C={class:"\n      md-example-child\n      md-example-child-tabs\n      md-example-child-tabs-0\n    "},P=j(" 她对他很满意。走吧。好。他起身买单，腿却一拐一拐的。难怪他才华横溢，事业有成，却还是单身。趁着他买单，她赶紧悄悄走了。 "),T=j(" 又是一年，她又遇到了他，他正牵着孩子的手，走的飞快。 "),k=j(" 支付0元，解锁第三章 "),z=j(" 你的腿？她有些诧异。腿？我的腿怎么了？他更诧异。后来，她才知道他的腿，那天只是坐麻了而已。 ");var S,D=c((S=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&o(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&o(e,a,t[a]);return e})({},{name:"TabsDemo",title:"基本"}),t(S,a({expose:[],setup(e){const t=e=>{console.log(e)},a=p(!0),s=p(null),n=()=>{a.value=!1,setTimeout((()=>{var e;null==(e=s.value.$refs.swiper.getSwiperInstance())||e.goToPage(2,0)}))};return(e,l)=>(v(),u("div",C,[b(x(r),{ref:s,"default-index":0,immediate:!0,onChange:t},{default:f((()=>[b(i,{class:"content",name:"p1",label:"第一章"},{default:f((()=>[P])),_:1}),b(i,{class:"content",name:"p2",label:"第二章"},{default:f((()=>[T,b(x(d),{type:"link",onClick:n},{default:f((()=>[k,b(x(m),{name:"arrow-right",size:"xs"})])),_:1})])),_:1}),b(i,{class:"content",name:"p3",label:"第三章",disabled:a.value},{default:f((()=>[z])),_:1},8,["disabled"])])),_:1},512)]))}}))));const I={"./demo0.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:D})};var $=w("Tabs",Object.entries(I).map((e=>e[1].default)));const E={class:"md-nav"},F=b("p",{class:"name"},"Tabs",-1),M=b("p",{class:"name-zh"},"标签页",-1),q={class:"md-example tabs"},A={class:"md-example-content"};$.render=function(e,t,a,s,n,l){const o=g("md-icon");return v(),u(_,null,[b("div",E,[b("p",{class:"home",onClick:t[1]||(t[1]=t=>e.$router.push("/"))},[b(o,{name:"home",size:"lg"})]),F,M]),b("div",q,[(v(!0),u(_,null,h(e.demos,((e,t)=>(v(),u("section",{key:t,class:"md-example-section"},[b("div",{class:"md-example-title",textContent:y(e.title)},null,8,["textContent"]),b("div",{class:"md-example-describe",textContent:y(e.describe)},null,8,["textContent"]),b("div",A,[(v(),u(O(e)))])])))),128))])],64)};export default $;