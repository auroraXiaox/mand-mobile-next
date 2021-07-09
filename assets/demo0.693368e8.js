var l=Object.defineProperty,e=Object.defineProperties,o=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,o,n)=>o in e?l(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,t=(l,e)=>{for(var o in e||(e={}))r.call(e,o)&&u(l,o,e[o]);if(n)for(var o of n(e))s.call(e,o)&&u(l,o,e[o]);return l};import{g as i,m as p,h as a,s as c,o as d,P as w,a as v,c as f,i as m,f as D,d as P,t as g,r as h,w as y,k as b,K as U,Q as x,V as T,X as O,e as S,F as j,j as F}from"./app.dd25191e.js";import{t as _}from"./index.02bb6ec7.js";import{r as k}from"./index.43ca4e9c.js";var B={scrollingX:{type:Boolean,default:!1},scrollingY:{type:Boolean,default:!0},bouncing:{type:Boolean,default:!0},pullDown:{type:Boolean,default:!1},pullUp:{type:Boolean,default:!1},bounceTime:{type:Number,default:800},isPrevent:{type:Boolean,default:!0},pullDownOptions:{type:Object,default:{threshold:60,stop:50}},pullUpOtions:{type:Object,default:{threshold:0}},isFinished:{type:Boolean,default:!1}},$=(l,{emit:e,slots:o})=>{const n=p({x:0,y:0}),r=p(!0),s=p(!1),u=p(!1),i=a((()=>(n.value.y-10)/l.pullDownOptions.threshold)),v=p(!1),f=a((()=>r.value?u.value?_("md.scroll_view.refresh.freedRefresh"):_("md.scroll_view.refresh.pullDownRefresh"):s.value?_("md.scroll_view.refresh.refreshing"):_("md.scroll_view.refresh.success"))),m=a((()=>l.isFinished?_("md.scroll_view.more.allLoaded"):(v.value,_("md.scroll_view.more.loading"))));let D=null;const P=p(null),g=()=>{P.value&&(D=function(l,e=!0,o=!0,n){e&&x.use(T);o&&x.use(O);return new x(l,t({scrollX:!1,scrollY:!0,probeType:3,tap:"tap",bounceTime:800,click:!0},n))}(P.value,l.pullDown,l.pullUp,{scrollX:l.scrollingX,scrollY:l.scrollingY,bounce:l.bouncing,bounceTime:l.bounceTime,click:!l.isPrevent,pullDownRefresh:l.pullDownOptions,pullUpLoad:l.pullUpOtions}),l.pullDown&&D.on("pullingDown",b),l.pullUp&&D.on("pullingUp",U),D.on("scroll",y))},h=()=>D,y=o=>{o.y>l.pullDownOptions.threshold+10&&(u.value=!0),n.value=o,e("scroll",o)},b=()=>{r.value=!1,s.value=!0,e("pullingDown")},U=()=>{v.value=!0,e("pullingUp")};return c((()=>l.isFinished),(l=>{var e;l&&(null==(e=h())||e.closePullUp())})),d((()=>{g()})),w((()=>{var l;null==(l=h())||l.destroy()})),{wrapRef:P,getScrollerInstance:h,resetScroller:()=>{D&&(D.destroy(),D=null,g())},finishPullDown:()=>{var e;s.value=!1,u.value=!1,null==(e=h())||e.finishPullDown(),globalThis.setTimeout((()=>{var l;r.value=!0,null==(l=h())||l.refresh()}),l.bounceTime+100)},beforePullDown:r,canFreePullingDown:u,isPullingDown:s,pullDownText:f,pullDownPercent:i,finishPullUp:()=>{var l;null==(l=h())||l.finishPullUp(),globalThis.setTimeout((()=>{var l;null==(l=h())||l.refresh()}),100),v.value=!1},isPullUpLoad:v,pullUpText:m}};var L=i({name:"MdScrollView",props:B,emits:["pullingDown","pullingUp","scroll"],setup(l,e){const{wrapRef:o,getScrollerInstance:n,resetScroller:r,finishPullDown:s,beforePullDown:u,isPullingDown:t,canFreePullingDown:i,pullDownText:p,pullDownPercent:a,finishPullUp:c,isPullUpLoad:d,pullUpText:w}=$(l,e);return{wrapper:o,getScrollerInstance:n,resetScroller:r,finishPullDown:s,beforePullDown:u,isPullingDown:t,canFreePullingDown:i,pullDownText:p,pullDownPercent:a,finishPullUp:c,isPullUpLoad:d,pullUpText:w}}}),R={class:"md-scroll-view"},X={key:0,class:"scroll-view-header"},C={ref:"wrapper",class:"scroll-view-container"},I={class:"scroll-view-content"},M={key:0,class:"scroll-pulldown-wrapper"},V={key:1,class:"scroll-pullup-wrapper"},Y={key:1,class:"scroll-view-footer"};L.render=function(l,e){return v(),f("div",R,[l.$slots.header?(v(),f("div",X,[m(l.$slots,"header")])):D("v-if",!0),P("div",C,[P("div",I,[l.pullDown?(v(),f("div",M,[m(l.$slots,"pulldown",{beforePullDown:l.beforePullDown,isPullingDown:l.isPullingDown,canFreePullingDown:l.canFreePullingDown,pullDownText:l.pullDownText,pullDownPercent:l.pullDownPercent},(()=>[P("span",null,g(l.pullDownText),1)]))])):D("v-if",!0),D(" scroll content "),m(l.$slots,"default"),l.pullUp?(v(),f("div",V,[m(l.$slots,"pullup",{isPullUpLoad:l.isPullUpLoad,pullUpText:l.pullUpText,isFinished:l.isFinished},(()=>[P("span",null,g(l.pullUpText),1)]))])):D("v-if",!0)])],512),l.$slots.footer?(v(),f("div",Y,[m(l.$slots,"footer")])):D("v-if",!0)])};var N=L,z=i({name:"MdScrollViewPulldown",components:{MdRoller:k},props:{rollerColor:{type:String,default:"#2F86F6"},percent:{type:Number,default:void 0},pullDownText:{type:String,default:""},isPullingDown:{type:Boolean,default:!1}}}),E={class:"md-scroll-pulldown"},K={class:"pulldown-tip"};z.render=function(l,e){const o=h("md-roller");return v(),f("div",E,[P(o,{process:l.isPullingDown?void 0:l.percent,width:10,color:l.rollerColor},null,8,["process","color"]),P("p",K,g(l.pullDownText),1)])};var Q=z,q=i({props:{pullUpText:{type:String,default:""}}});q.render=function(l,e){return v(),f(U("div"),t({class:"md-scroll-pullup"},l.$attrs),{default:y((()=>[b(g(l.pullUpText),1)])),_:1},16)};var A=q;N.install=l=>{l.component(N.name,N),l.component(Q.name,Q),l.component(A.name,A)};var G=N;const H={class:"\n      md-example-child\n      md-example-child-scroll-view\n      md-example-child-scroll-view-0\n    "};var J,W=i((J=t({},{name:"ScrollViewDemo",title:"基本"}),e(J,o({expose:[],setup(l){const e=(l=1500)=>new Promise(((e,o)=>{setTimeout((()=>e(!1)),l)})),o=p(10),n=p(null),r=p(!1),s=async()=>{await e(),o.value=o.value+5,n.value.finishPullDown()},u=async()=>{await e(3e3),o.value=o.value+5,n.value.finishPullUp(),r.value=!0};return(l,e)=>(v(),f("div",H,[P(S(G),{ref:n,"pull-down":!0,"pull-up":!0,"is-finished":r.value,onPullingDown:s,onPullingUp:u},{pulldown:y((({pullDownText:l,pullDownPercent:e,isPullingDown:o})=>[P(S(Q),{"is-pulling-down":o,percent:e,"pull-down-text":l},null,8,["is-pulling-down","percent","pull-down-text"])])),pullup:y((({pullUpText:l})=>[P(S(A),{"pull-up-text":l},null,8,["pull-up-text"])])),default:y((()=>[(v(!0),f(j,null,F(o.value,(l=>(v(),f("div",{key:l,class:"scroll-view-item",onClick:e=>{return o=l,void console.log(o);var o}},g(l),9,["onClick"])))),128))])),_:1},8,["is-finished"])]))}})))),Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});export{Z as _};
