var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,n=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&o(e,a,t[a]);if(s)for(var a of s(t))l.call(t,a)&&o(e,a,t[a]);return e},c=(e,s)=>t(e,a(s));import{_ as m}from"./index.d99cace1.js";import{d,c as i,f as p,w as u,u as x,o as b,g as f,r as v,F as j,h as y,t as O,i as k}from"./vendor.ac61ab51.js";import{c as w}from"./index.31feda08.js";import"./animate.42ec0e5b.js";import"./function.5db1605c.js";const g={class:"md-example-child md-example-child-water-mark-0"},_=p("p",{class:"text"}," 每个人都有属于自己的一片森林，也许我们从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。 ",-1),h=p("p",{class:"text"}," 希望你可以记住我，记住我这样活过，这样在你身边待过。 ",-1),M=p("p",{class:"text"}," 少年时我们追求激情，成熟后却迷恋平庸。在我们寻找、伤害、背离之后，还能一如既往地相信爱情，这是一种勇气。 ",-1);var C=d(c(n({},{name:"WaterMarkDemo",title:"基本"}),{expose:[],setup:e=>(e,t)=>(b(),i("div",g,[p(x(m),{class:"text-container",content:"MAND MOBILE",spacing:"10vw"},{default:u((()=>[_,h,M])),_:1})]))})),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:C});const S={class:"md-example-child md-example-child-water-mark-0"},z=p("p",{class:"text"},[f(" 通过"),p("b",null,"作用域插槽"),f("的坐标属性(coord)可以对水印行列进行定制 ")],-1),D=p("p",{class:"text"},[f(" 通过"),p("b",null,"作用域插槽"),f("的坐标属性(coord)可以对水印行列进行定制 ")],-1),W=p("p",{class:"text"},[f(" 通过"),p("b",null,"作用域插槽"),f("的坐标属性(coord)可以对水印行列进行定制 ")],-1),E={key:0},I={key:1};var T=d(c(n({},{name:"WaterMarkDemo",title:"使用插槽"}),{expose:[],setup:e=>(e,t)=>(b(),i("div",S,[p(x(m),{class:"text-container",spacing:"10vw"},{watermark:u((e=>[p("div",null,[e.coord.row%2?(b(),i("span",E," 奇数行")):(b(),i("span",I,"偶数行"))])])),default:u((()=>[z,D,W])),_:1})]))}));const A={"./demo0.vue":P,"./demo1.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T})};var B=w("WaterMark",Object.entries(A).map((e=>e[1].default)));const F={class:"md-nav"},L=p("p",{class:"name"},"WaterMark",-1),N=p("p",{class:"name-zh"},"水印",-1),$={class:"md-example water-mark"},q={class:"md-example-content"};B.render=function(e,t,a,s,r,l){const o=v("md-icon");return b(),i(j,null,[p("div",F,[p("p",{class:"home",onClick:t[1]||(t[1]=t=>e.$router.push("/"))},[p(o,{name:"home",size:"lg"})]),L,N]),p("div",$,[(b(!0),i(j,null,y(e.demos,((e,t)=>(b(),i("section",{key:t,class:"md-example-section"},[p("div",{class:"md-example-title",textContent:O(e.title)},null,8,["textContent"]),p("div",{class:"md-example-describe",textContent:O(e.describe)},null,8,["textContent"]),p("div",q,[(b(),i(k(e)))])])))),128))])],64)};export default B;