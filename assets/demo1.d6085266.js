var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,n=(e,r)=>{for(var t in r||(r={}))o.call(r,t)&&l(e,t,r[t]);if(a)for(var t of a(r))s.call(r,t)&&l(e,t,r[t]);return e},i=(e,a)=>r(e,t(a));import{g as d,n as p,o as u,v as c,r as f,a as m,c as v,k as g,i as b,d as y,e as h,f as _}from"./app.587128d6.js";import{r as w}from"./index.8de114ab.js";import{i as O,A as j}from"./index.fef09045.js";var x={size:{type:Number,default:70},width:{type:Number,default:100},color:{type:String,default:"#2F86F6"},borderColor:{type:String,default:"rgba(0, 0, 0, .1)"},fill:{type:String,default:"transparent"},linecap:{type:String,default:"round"},rotate:{type:Number,default:0},value:{type:Number,default:0},transition:{type:Boolean,default:!1},duration:{type:Number,default:1e3}},z=e=>{const r=p(0),t=p(!1),a=()=>{};return u((()=>{t.value=!0,c((()=>e.value),((o,s)=>{!o||(O||t.value)&&e.transition?((t=0,o=0)=>{j.start((e=>{r.value=t+(o-t)*e}),(e=>e),a,e.duration||1e3)})(s,o):r.value=o}),{immediate:!0})})),{formatValue:r,isMounted:t}},F=d({name:"MdProgress",components:{"md-activity-indicator-rolling":w},props:x,setup:e=>n({},z(e))});F.render=function(e,r){const t=f("md-activity-indicator-rolling");return m(),v(t,{class:"md-progress",process:e.formatValue,size:e.size,width:e.width,color:e.color,"border-color":e.borderColor,fill:e.fill,linecap:e.linecap,rotate:e.rotate},{defs:g((()=>[b(e.$slots,"defs")])),default:g((()=>[b(e.$slots,"default")])),_:3},8,["process","size","width","color","border-color","fill","linecap","rotate"])};var S=F;S.install=e=>{e.component(S.name,S)};var P=S;const N={class:"md-example-child md-example-child-progress"},D=y("span",{class:"progress-value"},"20%",-1),M=y("span",{class:"progress-value"},"50%",-1),C=y("span",{class:"progress-value"},"100%",-1);var E=d(i(n({},{name:"ProgressDemo",title:"基本"}),{expose:[],setup:e=>(e,r)=>(m(),v("div",N,[y(h(P),{size:100,value:.2,width:5},{default:g((()=>[D])),_:1},8,["value"]),y(h(P),{size:100,value:.5,width:5},{default:g((()=>[M])),_:1},8,["value"]),y(h(P),{size:100,value:1,width:5},{default:g((()=>[C])),_:1})]))})),T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const V={class:"md-example-child md-example-child-progress"},$=y("span",{class:"progress-value"},"80%",-1),k=y("defs",null,[y("linearGradient",{id:"linear",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},[y("stop",{offset:"0%","stop-color":"#FF5257"}),y("stop",{offset:"100%","stop-color":"#FFC541D6"})])],-1);var A=d(i(n({},{name:"ProgressDemo",title:"其他配置",titleEnUS:"Other configurations"}),{expose:[],setup:e=>(e,r)=>(m(),v("div",V,[y(h(P),{value:.8,width:10,size:100,color:"url(#linear)","border-color":"#FFF",linecap:"butt"},{defs:g((()=>[k])),default:g((()=>[$])),_:1},8,["value"]),_(' <md-progress\n      :value="0.8"\n      :width="10"\n      :size="100"\n      :rotate="-90"\n      color="#FF5257"\n      transition\n    >\n      <span class="progress-value">\n        <md-amount\n          :value="80"\n          :precision="0"\n          transition\n        ></md-amount\n        >%\n      </span>\n    </md-progress> ')]))})),B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});export{T as _,B as a};