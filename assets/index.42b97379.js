var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,o,l)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,c=(e,t)=>{for(var o in t||(t={}))a.call(t,o)&&s(e,o,t[o]);if(l)for(var o of l(t))r.call(t,o)&&s(e,o,t[o]);return e},n=(e,l)=>t(e,o(l));import{g as d,i,l as p,e as u,a as m,c as x,k as C,p as f,t as b,ay as g,ar as y,F as v,d as _,r as S,q as j}from"./app.fecd80cc.js";import{s as h}from"./index.9a7d4e21.js";import{c as F}from"./animate.e38ca6bf.js";var O=d(n(c({},{name:"SwiperDemo",title:"横向轮播"}),{setup(e){const t=[{color:"#4390EE",text:"给时光以生命，给岁月以文明。"},{color:"#364d79",text:"你的无畏来源于无知。"},{color:"#CA4040",text:"一切都将逝去，只有死神永生。"}];return(e,o)=>(m(),i(u(h),{"has-dots":!0,autoplay:3e3,"default-index":1},{default:p((()=>[(m(),x(v,null,C(t,((e,t)=>f("div",{key:t,class:g(["slide-page","page"+t]),style:y({backgroundColor:e.color})},b(e.text),7))),64))])),_:1}))}})),w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});var k=d(n(c({},{name:"SwiperDemo",title:"纵向轮播"}),{setup(e){const t=[{color:"#4390EE",text:"给时光以生命，给岁月以文明。"},{color:"#364d79",text:"你的无畏来源于无知。"},{color:"#CA4040",text:"一切都将逝去，只有死神永生。"}],o=(e,t)=>{console.log("from:"+e+"\n"),console.log("to:"+t)};return(e,l)=>(m(),i(u(h),{class:"md-example-child-swiper-1","has-dots":!0,autoplay:5e3,dragable:!1,transition:"slideY",onBeforeChange:o},{default:p((()=>[(m(),x(v,null,C(t,(e=>f("div",{key:e.text,class:g(["slide-page","page"+e.color]),style:y({backgroundColor:e.color})},b(e.text),7))),64))])),_:1}))}})),E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});var z=d(n(c({},{name:"SwiperDemo",title:"渐隐轮播"}),{setup(e){const t=[{color:"#4390EE",text:"给时光以生命，给岁月以文明。"},{color:"#364d79",text:"你的无畏来源于无知。"},{color:"#CA4040",text:"一切都将逝去，只有死神永生。"},{color:"#000000",text:"一切都将逝去，只有死神永生。"}];return(e,o)=>(m(),i(u(h),{"has-dots":!0,transition:"fade",autoplay:3e3},{default:p((()=>[(m(),x(v,null,C(t,((e,t)=>f("div",{key:t,class:g(["slide-page","page"+t]),style:y({backgroundColor:e.color})},b(e.text),7))),64))])),_:1}))}})),D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z});const M={class:"\n      md-example-child\n      md-example-child-swiper\n      md-example-child-swiper-3\n    "};var P=d(n(c({},{name:"SwiperDemo",title:"每屏多内容"}),{setup(e){const t=[[{color:"#4390EE",text:"引力波"},{color:"#CA4040",text:"智子"},{color:"#FF8604",text:"水滴"},{color:"#00CC00",text:"二向箔"},{color:"#0066CC",text:"飞刃"},{color:"#99CCCC",text:"碎星"}],[{color:"#990033",text:"危机"},{color:"#CCFF66",text:"威摄"},{color:"#FF9900",text:"威摄后"},{color:"#FF9933",text:"广播"},{color:"#99CC33",text:"掩体"},{color:"#CC6699",text:"银河"}],[{color:"#0099CC",text:"猜疑链"},{color:"#CCCCCC",text:"技术爆炸"},{color:"#FF6666",text:"黑暗森林"},{color:"#99CCCC",text:"地球"},{color:"#FFCC99",text:"三体"},{color:"#FFCCCC",text:"歌者"}]];return(e,o)=>(m(),x("div",M,[_(u(h),{"has-dots":!0,autoplay:3e3},{default:p((()=>[(m(),x(v,null,C(t,((e,t)=>f("div",{key:t,class:g(["slide-page","page"+t])},[f("ul",null,[(m(!0),x(v,null,C(e,((e,t)=>(m(),x("li",{key:t},[f("span",{href:"javascript:void(0)",class:"banner-item",style:y({background:`${e.color}`})},b(e.text),5)])))),128))])],2))),64))])),_:1})]))}})),T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const A={"./demo0.vue":w,"./demo1.vue":E,"./demo2.vue":D,"./demo3.vue":T};var $=F("Swiper",Object.entries(A).map((e=>e[1].default)));const q={class:"md-nav"},B=f("p",{class:"name"},"Swiper",-1),I=f("p",{class:"name-zh"},"轮播",-1),Y={class:"md-example swiper"},G=["textContent"],H=["textContent"],J={class:"md-example-content"};$.render=function(e,t,o,l,a,r){const s=S("md-icon");return m(),x(v,null,[f("div",q,[f("p",{class:"home",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},[_(s,{name:"home",size:"lg"})]),B,I]),f("div",Y,[(m(!0),x(v,null,C(e.demos,((e,t)=>(m(),x("section",{key:t,class:"md-example-section"},[f("div",{class:"md-example-title",textContent:b(e.title)},null,8,G),f("div",{class:"md-example-describe",textContent:b(e.describe)},null,8,H),f("div",J,[(m(),i(j(e)))])])))),128))])],64)};var K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$});export{w as _,E as a,D as b,T as c,K as d};