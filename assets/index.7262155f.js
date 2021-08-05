import{g as e,G as t,H as o,S as a,a4 as n,J as s,s as l,V as d,W as c,x as u,r,a as i,c as p,k as m,d as f,t as h,f as x,i as v,l as g,a5 as w}from"./app.b7fa149a.js";import{d as y}from"./index.6347501d.js";import{c as b}from"./index.3e8967b3.js";import{t as S}from"./index.02bb6ec7.js";var C={title:{type:String},brief:{type:String,default:""},content:{type:String,default:""},visible:{type:Boolean,default:!1},maxlength:{type:Number,default:4},mask:{type:Boolean,default:!1},system:{type:Boolean,default:!1},autoSend:{type:Boolean,default:!0},autoCountdown:{type:Boolean,default:!0},count:{type:Number,default:60},countNormalText:{type:String,default:S("md.captcha.sendCaptcha")},countActiveText:{type:String,default:S("md.captcha.countdown")},isView:{type:Boolean,default:!1}},H=(e,{emit:t})=>{const{popupShow:o,onShow:a,onHide:r,hide:i}=s(e,t),p=l(null),m=l("");d((()=>{m.value.length===e.maxlength&&t(n,m.value)}));const f=l(!1),h=l("");let x,v=e.count;const g=()=>{v&&(f.value=!0,h.value=e.countActiveText.replace("{$1}",`${v}`),x=globalThis.setInterval((()=>{v<=1?w():(v-=1,h.value=e.countActiveText.replace("{$1}",`${v}`))}),1e3))},w=()=>{f.value=!1,h.value=e.countNormalText,clearInterval(x)},y=l(""),b=()=>{e.autoSend&&(t("send",g),e.autoCountdown&&g())},S=u(o,(e=>{e&&b(),S()}));return{popupShow:o,onShow:()=>{p.value.focusHandler(),a()},onHide:()=>{m.value="",r()},hide:i,code:m,errorMsg:y,countBtnText:h,isCounting:f,codeboxRef:p,countdown:g,setError:e=>{c((()=>{y.value=e}))},sendHandler:b}},T=e({name:"MdCaptcha",components:{MdDialog:y,MdCodebox:b},props:C,emits:[t,o,a,n,"send"],setup(e,t){const{popupShow:o,onShow:a,onHide:n,code:s,errorMsg:l,countBtnText:d,isCounting:c,codeboxRef:u,countdown:r,setError:i,sendHandler:p}=H(e,t);return{popupShow:o,onShow:a,onHide:n,code:s,errorMsg:l,countBtnText:d,isCounting:c,codebox:u,countdown:r,setError:i,sendHandler:p}}}),k={class:"md-captcha-content"},B={class:"md-captcha-message"},V={class:"md-captcha-footer"};T.render=function(e,t){const o=r("md-codebox");return i(),p(w(e.isView?"div":"MdDialog"),{modelValue:e.popupShow,"onUpdate:modelValue":t[3]||(t[3]=t=>e.popupShow=t),class:"md-captcha",onShow:e.onShow,onHide:e.onHide},{default:m((()=>[f("div",k,[e.title?(i(),p("p",{key:0,class:"md-captcha-title",textContent:h(e.title)},null,8,["textContent"])):x("v-if",!0),f("div",B,[v(e.$slots,"default",{},(()=>[g(h(e.content),1)]))])]),f(o,{ref:"codebox",modelValue:e.code,"onUpdate:modelValue":t[2]||(t[2]=t=>e.code=t),maxlength:e.maxlength,system:e.system,mask:e.mask,justify:!0,"is-view":e.isView},{default:m((()=>[f("footer",V,[e.errorMsg?(i(),p("div",{key:0,class:"md-captcha-error",textContent:h(e.errorMsg)},null,8,["textContent"])):(i(),p("div",{key:1,class:"md-captcha-brief",textContent:h(e.brief)},null,8,["textContent"])),e.count?(i(),p("button",{key:2,class:"md-captcha-btn",disabled:e.isCounting,onClick:t[1]||(t[1]=(...t)=>e.sendHandler&&e.sendHandler(...t)),textContent:h(e.countBtnText||e.countNormalText)},null,8,["disabled","textContent"])):x("v-if",!0)])])),_:1},8,["modelValue","maxlength","system","mask","is-view"])])),_:3},8,["modelValue","onShow","onHide"])};var M=T;M.install=e=>{e.component(M.name,M)};var j=M;export{j as c};