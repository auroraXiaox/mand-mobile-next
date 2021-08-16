var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,o=(e,a)=>{for(var t in a||(a={}))n.call(a,t)&&s(e,t,a[t]);if(l)for(var t of l(a))r.call(a,t)&&s(e,t,a[t]);return e},u=(e,l)=>a(e,t(l));import{g as i,y as d,A as p,H as c,N as m,O as v,I as f,c as b,p as _,d as y,e as g,l as h,f as x,P as O,m as S,Q as j,a as C,t as A,r as $,F as M,k as I,i as N,q as P}from"./app.fecd80cc.js";import{f as z}from"./index.d146e9ef.js";import{c as D}from"./animate.e38ca6bf.js";var T=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"],F=["","拾","佰","仟"],B=["","万","亿","兆"],w=["角","分","厘","毫"];var k={value:{type:Number,default:void 0},precision:{type:Number,default:2},isRoundUp:{type:Boolean,default:!0},hasSeparator:{type:Boolean,default:!1},separator:{type:String,default:","},unit:{type:String,default:""},reverse:{type:Boolean,default:!1},transition:{type:Boolean,default:!1},isCapital:{type:Boolean,default:!1},duration:{type:Number,default:1e3}},R=e=>({doPrecision:a=>{const t=Number(`${a}e${e.precision}`),l=e.isRoundUp?Math.round(t):Math.floor(t);return Number(`${l}e-${e.precision}`).toFixed(e.precision)},doCapital:e=>function(e){let a,t,l,n,r="";if(""===e)return"";if("string"==typeof e&&(e=parseFloat(e)),e<0&&(a=!0,e=Math.abs(e)),e>=1e15)return"";if(0===e)return r=T[0]+"元整",r;if(-1===(e+="").indexOf(".")?(t=e,l=""):(n=e.split("."),t=n[0],l=n[1].substr(0,4)),parseInt(t,10)>0){let e=0;for(let a=0,l=t.length;a<l;a++){const n=t.substr(a,1),s=l-a-1,o=s/4,u=s%4;"0"===n?e++:(e>0&&(r+=T[0]),e=0,r+=T[parseInt(n)]+F[u]),0===u&&e<4&&(r+=B[o])}r+="元"}if(""!==l)for(let s=0,o=l.length;s<o;s++){const e=l.substr(s,1);"0"!==e&&(r+=T[Number(e)]+w[s])}return""===r?r+=T[0]+"元整":""===l&&(r+="整"),a&&(r=`负${r}`),r}(e),doFormat:a=>{if(!e.hasSeparator)return a;const t=a.split(".");return`${Number(t[0])<0?"-":""}${z(t[0].replace(/^\-/,""),e.separator)}.${t[1]}`},doAnimateDisplay:(a,t=0,l=0)=>{if(!e.transition)return a.value;return v.start((e=>{a.value=1!==e?t+(l-t)*e:l}),(e=>e),f,e.duration),a.value}}),U=i({name:"MdAmount",props:k,setup(e,{slots:a}){var t,l;const n=(null==(t=a.default)?void 0:t.call(a))||[],r=(null==(l=a.unit)?void 0:l.call(a))||[],{doFormat:s,doPrecision:o,doCapital:u,doAnimateDisplay:i}=R(e),v=()=>{var a,t;return e.value||(null==(t=null==(a=n[0])?void 0:a.children)?void 0:t.toString().trim())||0},f=d(0);e.transition&&p((()=>e.value),((e,a)=>{i(f,a,e)}),{immediate:!0});const b=()=>[e.unit||r,e.transition?null:e.isCapital?u(v()):m?s(o(v())):v(),e.transition?s(o(f.value+"")):null];return()=>c("span",{class:{"md-amount":!0,numerical:!e.isCapital}},e.reverse?b().reverse():b())}});U.install=e=>{e.component(U.name,U)};var q=U;O("data-v-1d70aaa8");const E={class:"md-example-child md-example-child-amount"},H=_("span",{class:"describe"},"Original",-1),Q=_("span",{class:"describe"},"Round",-1),G=_("span",{class:"describe"},"Floor",-1),J=_("span",{class:"describe"},"Currency unit",-1),K=S("￥"),L=S("   ");j();var V=i(u(o({},{name:"AmountDemo",title:"基本"}),{setup:e=>(e,a)=>(C(),b("div",E,[_("p",null,[H,y(g(q),{value:1234.125,precision:3},null,8,["value"])]),_("p",null,[Q,y(g(q),{value:1234.125},null,8,["value"])]),_("p",null,[G,y(g(q),{"is-round-up":!1},{default:h((()=>[S(A(1234.123),1)])),_:1})]),_("p",null,[J,y(g(q),{"is-round-up":!1},{unit:h((()=>[K])),default:h((()=>[S(A(1234.123),1)])),_:1}),x(" eslint-disable-next-line vue/no-parsing-error "),L,y(g(q),{"is-round-up":!1,unit:"$",reverse:""},{default:h((()=>[S(A(1234.123),1)])),_:1})])]))}));V.__scopeId="data-v-1d70aaa8";var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});O("data-v-318d1f8d");const X={class:"md-example-child md-example-child-amount"},Y=_("br",null,null,-1);j();var Z=i(u(o({},{name:"AmountDemo",title:"千位分隔符"}),{setup:e=>(e,a)=>(C(),b("div",X,[y(g(q),{value:1234,"has-separator":""}),Y,y(g(q),{precision:3,"has-separator":""},{default:h((()=>[S(A(-123456.123),1)])),_:1})]))}));Z.__scopeId="data-v-318d1f8d";var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});O("data-v-63e4f27a");const ae={class:"md-example-child md-example-child-amount"};j();var te=i(u(o({},{name:"AmountDemo",title:"变化动效"}),{setup(e){const a=d(1e3);return setTimeout((()=>{a.value=1500,setTimeout((()=>{a.value=500}),2e3)}),2e3),(e,t)=>(C(),b("div",ae,[x(" animation number cannot use default slot "),y(g(q),{value:a.value,duration:800,transition:""},null,8,["value"])]))}}));te.__scopeId="data-v-63e4f27a";var le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:te});O("data-v-19337cba");const ne={class:"md-example-child md-example-child-amount"},re=_("br",null,null,-1),se=_("br",null,null,-1),oe=S("1234.101");j();var ue=i(u(o({},{name:"AmountDemo",title:"大写中文"}),{setup:e=>(e,a)=>(C(),b("div",ne,[y(g(q),{value:1234,"is-capital":""}),re,y(g(q),{value:1234.1118,"is-capital":""},null,8,["value"]),se,y(g(q),{"is-capital":""},{default:h((()=>[oe])),_:1})]))}));ue.__scopeId="data-v-19337cba";var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ue});const de={"./demo0.vue":W,"./demo1.vue":ee,"./demo2.vue":le,"./demo3.vue":ie};var pe=D("Amount",Object.entries(de).map((e=>e[1].default)));const ce={class:"md-nav"},me=_("p",{class:"name"},"Amount",-1),ve=_("p",{class:"name-zh"},"金融数字",-1),fe={class:"md-example amount"},be=["textContent"],_e=["textContent"],ye={class:"md-example-content"};pe.render=function(e,a,t,l,n,r){const s=$("md-icon");return C(),b(M,null,[_("div",ce,[_("p",{class:"home",onClick:a[0]||(a[0]=a=>e.$router.push("/"))},[y(s,{name:"home",size:"lg"})]),me,ve]),_("div",fe,[(C(!0),b(M,null,I(e.demos,((e,a)=>(C(),b("section",{key:a,class:"md-example-section"},[_("div",{class:"md-example-title",textContent:A(e.title)},null,8,be),_("div",{class:"md-example-describe",textContent:A(e.describe)},null,8,_e),_("div",ye,[(C(),N(P(e)))])])))),128))])],64)};var ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe});export{W as _,ee as a,le as b,ie as c,ge as d};