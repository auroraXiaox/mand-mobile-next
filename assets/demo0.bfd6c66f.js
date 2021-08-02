var l=Object.defineProperty,e=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,o,n)=>o in e?l(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,t=(l,e)=>{for(var o in e||(e={}))r.call(e,o)&&u(l,o,e[o]);if(n)for(var o of n(e))s.call(e,o)&&u(l,o,e[o]);return l};import{g as i,s as p,h as a,x as c,o as d,ab as w,a as v,c as f,i as D,f as m,d as P,t as g,r as h,k as b,l as y,a5 as x,ag as U,au as T,av as O,e as S,F as j,j as F}from"./app.85809415.js";import{t as _}from"./index.02bb6ec7.js";import{r as k}from"./index.c59ac5bb.js";var B={scrollingX:{type:Boolean,default:!1},scrollingY:{type:Boolean,default:!0},bouncing:{type:Boolean,default:!0},pullDown:{type:Boolean,default:!1},pullUp:{type:Boolean,default:!1},bounceTime:{type:Number,default:800},isPrevent:{type:Boolean,default:!0},pullDownOptions:{type:Object,default:{threshold:60,stop:50}},pullUpOtions:{type:Object,default:{threshold:0}},isFinished:{type:Boolean,default:!1}},$=(l,{emit:e,slots:o})=>{const n=p({x:0,y:0}),r=p(!0),s=p(!1),u=p(!1),i=a((()=>(n.value.y-10)/l.pullDownOptions.threshold)),v=p(!1),f=a((()=>r.value?u.value?_("md.scroll_view.refresh.freedRefresh"):_("md.scroll_view.refresh.pullDownRefresh"):s.value?_("md.scroll_view.refresh.refreshing"):_("md.scroll_view.refresh.success"))),D=a((()=>l.isFinished?_("md.scroll_view.more.allLoaded"):(v.value,_("md.scroll_view.more.loading"))));let m=null;const P=p(null),g=()=>{P.value&&(m=function(l,e=!0,o=!0,n){e&&U.use(T);o&&U.use(O);return new U(l,t({scrollX:!1,scrollY:!0,probeType:3,tap:"tap",bounceTime:800,click:!0},n))}(P.value,l.pullDown,l.pullUp,{scrollX:l.scrollingX,scrollY:l.scrollingY,bounce:l.bouncing,bounceTime:l.bounceTime,click:!l.isPrevent,pullDownRefresh:l.pullDownOptions,pullUpLoad:l.pullUpOtions}),l.pullDown&&m.on("pullingDown",y),l.pullUp&&m.on("pullingUp",x),m.on("scroll",b))},h=()=>m,b=o=>{o.y>l.pullDownOptions.threshold+10&&(u.value=!0),n.value=o,e("scroll",o)},y=()=>{r.value=!1,s.value=!0,e("pullingDown")},x=()=>{v.value=!0,e("pullingUp")};return c((()=>l.isFinished),(l=>{var e;l&&(null==(e=h())||e.closePullUp())})),d((()=>{g()})),w((()=>{var l;null==(l=h())||l.destroy()})),{wrapRef:P,getScrollerInstance:h,resetScroller:()=>{m&&(m.destroy(),m=null,g())},finishPullDown:()=>{var e;s.value=!1,u.value=!1,null==(e=h())||e.finishPullDown(),globalThis.setTimeout((()=>{var l;r.value=!0,null==(l=h())||l.refresh()}),l.bounceTime+100)},beforePullDown:r,canFreePullingDown:u,isPullingDown:s,pullDownText:f,pullDownPercent:i,finishPullUp:()=>{var l;null==(l=h())||l.finishPullUp(),globalThis.setTimeout((()=>{var l;null==(l=h())||l.refresh()}),100),v.value=!1},isPullUpLoad:v,pullUpText:D}};var L=i({name:"MdScrollView",props:B,emits:["pullingDown","pullingUp","scroll"],setup(l,e){const{wrapRef:o,getScrollerInstance:n,resetScroller:r,finishPullDown:s,beforePullDown:u,isPullingDown:t,canFreePullingDown:i,pullDownText:p,pullDownPercent:a,finishPullUp:c,isPullUpLoad:d,pullUpText:w}=$(l,e);return{wrapper:o,getScrollerInstance:n,resetScroller:r,finishPullDown:s,beforePullDown:u,isPullingDown:t,canFreePullingDown:i,pullDownText:p,pullDownPercent:a,finishPullUp:c,isPullUpLoad:d,pullUpText:w}}}),R={class:"md-scroll-view"},C={key:0,class:"scroll-view-header"},I={ref:"wrapper",class:"scroll-view-container"},M={class:"scroll-view-content"},X={key:0,class:"scroll-pulldown-wrapper"},Y={key:1,class:"scroll-pullup-wrapper"},V={key:1,class:"scroll-view-footer"};L.render=function(l,e){return v(),f("div",R,[l.$slots.header?(v(),f("div",C,[D(l.$slots,"header")])):m("v-if",!0),P("div",I,[P("div",M,[l.pullDown?(v(),f("div",X,[D(l.$slots,"pulldown",{beforePullDown:l.beforePullDown,isPullingDown:l.isPullingDown,canFreePullingDown:l.canFreePullingDown,pullDownText:l.pullDownText,pullDownPercent:l.pullDownPercent},(()=>[P("span",null,g(l.pullDownText),1)]))])):m("v-if",!0),m(" scroll content "),D(l.$slots,"default"),l.pullUp?(v(),f("div",Y,[D(l.$slots,"pullup",{isPullUpLoad:l.isPullUpLoad,pullUpText:l.pullUpText,isFinished:l.isFinished},(()=>[P("span",null,g(l.pullUpText),1)]))])):m("v-if",!0)])],512),l.$slots.footer?(v(),f("div",V,[D(l.$slots,"footer")])):m("v-if",!0)])};var N=L,z=i({name:"MdScrollViewPulldown",components:{MdRoller:k},props:{rollerColor:{type:String,default:"#2F86F6"},percent:{type:Number,default:void 0},pullDownText:{type:String,default:""},isPullingDown:{type:Boolean,default:!1}}}),E={class:"md-scroll-pulldown"},q={class:"pulldown-tip"};z.render=function(l,e){const o=h("md-roller");return v(),f("div",E,[P(o,{process:l.isPullingDown?void 0:l.percent,width:10,color:l.rollerColor},null,8,["process","color"]),P("p",q,g(l.pullDownText),1)])};var A=z,G=i({props:{pullUpText:{type:String,default:""}}});G.render=function(l,e){return v(),f(x("div"),t({class:"md-scroll-pullup"},l.$attrs),{default:b((()=>[y(g(l.pullUpText),1)])),_:1},16)};var H=G;N.install=l=>{l.component(N.name,N),l.component(A.name,A),l.component(H.name,H)};var J=N;const K={class:"\n      md-example-child\n      md-example-child-scroll-view\n      md-example-child-scroll-view-0\n    "};var Q,W=i((Q=t({},{name:"ScrollViewDemo",title:"基本"}),e(Q,o({expose:[],setup(l){const e=(l=1500)=>new Promise(((e,o)=>{setTimeout((()=>e(!1)),l)})),o=p(10),n=p(null),r=p(!1),s=async()=>{await e(),o.value=o.value+5,n.value.finishPullDown()},u=async()=>{await e(3e3),o.value=o.value+5,n.value.finishPullUp(),r.value=!0};return(l,e)=>(v(),f("div",K,[P(S(J),{ref:n,"pull-down":!0,"pull-up":!0,"is-finished":r.value,onPullingDown:s,onPullingUp:u},{pulldown:b((({pullDownText:l,pullDownPercent:e,isPullingDown:o})=>[P(S(A),{"is-pulling-down":o,percent:e,"pull-down-text":l},null,8,["is-pulling-down","percent","pull-down-text"])])),pullup:b((({pullUpText:l})=>[P(S(H),{"pull-up-text":l},null,8,["pull-up-text"])])),default:b((()=>[(v(!0),f(j,null,F(o.value,(l=>(v(),f("div",{key:l,class:"scroll-view-item",onClick:e=>{return o=l,void console.log(o);var o}},g(l),9,["onClick"])))),128))])),_:1},8,["is-finished"])]))}})))),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});export{Z as _};