var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{_ as r,a as i}from"./index.89d5bdae.js";import{_ as m}from"./index.ddb9eeee.js";import{_ as d}from"./animate.6b6c809f.js";import{d as c,m as p,c as b,f as u,w as f,u as x,o as v,g as j,r as g,F as _,h,t as y,i as O}from"./vendor.ac61ab51.js";import{c as w}from"./index.567aaf6a.js";import"./index.6a65eeeb.js";import"./core.esm.e5e53058.js";import"./index.0a5f66ed.js";import"./constants.3b37bb64.js";import"./index.476b6299.js";const C={class:"\n      md-example-child\n      md-example-child-tabs\n      md-example-child-tabs-0\n    "},P=j(" 她对他很满意。走吧。好。他起身买单，腿却一拐一拐的。难怪他才华横溢，事业有成，却还是单身。趁着他买单，她赶紧悄悄走了。 "),T=j(" 又是一年，她又遇到了他，他正牵着孩子的手，走的飞快。 "),S=j(" 支付0元，解锁第三章 "),k=j(" 你的腿？她有些诧异。腿？我的腿怎么了？他更诧异。后来，她才知道他的腿，那天只是坐麻了而已。 ");var z,$=c((z=((e,a)=>{for(var t in a||(a={}))l.call(a,t)&&o(e,t,a[t]);if(s)for(var t of s(a))n.call(a,t)&&o(e,t,a[t]);return e})({},{name:"TabsDemo",title:"基本"}),a(z,t({expose:[],setup(e){const a=e=>{console.log(e)},t=p(!0),s=p(null),l=()=>{t.value=!1,setTimeout((()=>{var e,a;null==(e=s.value.$refs.swiper)||e.resetSwiper(),null==(a=s.value.$refs.swiper.getSwiperInstance())||a.goToPage(2,0)}))};return(e,n)=>(v(),b("div",C,[u(x(r),{ref:s,"default-index":0,immediate:!0,onChange:a},{default:f((()=>[u(i,{class:"content",name:"p1",label:"第一章"},{default:f((()=>[P])),_:1}),u(i,{class:"content",name:"p2",label:"第二章"},{default:f((()=>[T,u(x(m),{type:"link",onClick:l},{default:f((()=>[S,u(x(d),{name:"arrow-right",size:"xs"})])),_:1})])),_:1}),u(i,{class:"content",name:"p3",label:"第三章",disabled:t.value},{default:f((()=>[k])),_:1},8,["disabled"])])),_:1},512)]))}}))));const D={"./demo0.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$})};var I=w("Tabs",Object.entries(D).map((e=>e[1].default)));const E={class:"md-nav"},F=u("p",{class:"name"},"Tabs",-1),M=u("p",{class:"name-zh"},"标签页",-1),q={class:"md-example tabs"},A={class:"md-example-content"};I.render=function(e,a,t,s,l,n){const o=g("md-icon");return v(),b(_,null,[u("div",E,[u("p",{class:"home",onClick:a[1]||(a[1]=a=>e.$router.push("/"))},[u(o,{name:"home",size:"lg"})]),F,M]),u("div",q,[(v(!0),b(_,null,h(e.demos,((e,a)=>(v(),b("section",{key:a,class:"md-example-section"},[u("div",{class:"md-example-title",textContent:y(e.title)},null,8,["textContent"]),u("div",{class:"md-example-describe",textContent:y(e.describe)},null,8,["textContent"]),u("div",A,[(v(),b(O(e)))])])))),128))])],64)};export default I;
