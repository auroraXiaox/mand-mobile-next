import"./index.3399d957.js";import{_ as e}from"./animate.43d2fd98.js";import{U as t,F as a,B as l}from"./constants.3b37bb64.js";import{c as n}from"./click-outside.de9d7ac4.js";import{_ as r}from"./index.25376c0c.js";import{t as i}from"./index.0698aebd.js";import{r as o}from"./function.4f22648a.js";import{m as u,B as d,O as s,k as p,D as c,d as m,r as f,C as y,o as v,c as b,p as g,f as h,t as k,l as x,n as H,F as I,x as B,w as V,v as F,P as S}from"./vendor.ac61ab51.js";import{_ as T}from"./index.64079be7.js";const w={type:{type:String,default:"text"},previewType:{type:String,default:""},name:{type:[String,Number],default:()=>o("input-item")},title:{type:String,default:""},brief:{type:String,default:""},modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},maxlength:{type:Number,default:1/0},size:{type:String,default:"normal"},align:{type:String,default:"left"},error:{type:String,default:""},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},solid:{type:Boolean,default:!0},clearable:{type:Boolean,default:!1},isVirtualKeyboard:{type:Boolean,default:!1},virtualKeyboardDisorder:{type:Boolean},virtualKeyboardOkText:{type:String,default:""},virtualKeyboardVm:{type:[Object,String],default:void 0},isTitleLatent:{type:Boolean,default:!1},isFormative:{type:Boolean,default:!1},isHighlight:{type:Boolean,default:!1},isAmount:{type:Boolean,default:!1},formation:{type:Function,default:void 0},okText:{type:String,default:i("md.number_keyboard.confirm")},hideDot:{type:Boolean,default:!1},disorder:{type:Boolean,default:!1}};function C(e,t,a){if(a)return a(e);let l="";switch(t){case"bankCard":l=j(e).replace(/\./g,"");break;case"phone":l=function(e){var t;if(!e)return"";e=e.replace(/[\sA-Za-z]/g,"");const a=/\d{3}/,l=e.match(a)?null==(t=e.match(a))?void 0:t.join(" ").trim():"";if(l){return(l+" "+j(e.replace(l,""))).trim()}return e}(e).replace(/\./g,"");break;case"digit":l=e.replace(/[\D\.]/g,"");break;case"money":l=$(e);break;default:l=e}return l}function j(e){var t;if(!e)return"";const a=/\d{4}/g;return(((e=e.replace(/[\sA-Za-z]/g,"")).match(a)?null==(t=e.match(a))?void 0:t.join(" ").trim():"")+" "+e.replace(/\d{4}/g,"")).trim()}function $(e,t=","){return e.replace(/(?!^)(?=(\d{3})+$)/g,t)}const K={modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},maxlength:{type:Number,default:1/0},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},excludes:{type:[Object,String],default:void 0},previewType:{type:String,default:""},type:{type:String,default:"text"},okText:{type:String,default:i("md.number_keyboard.confirm")},hideDot:{type:Boolean,default:!1},disorder:{type:Boolean,default:!1}};var M=m({name:"MdFakeInputItem",components:{MdNumberKeyboard:r},directives:{clickOutside:n},props:K,emits:[a,l,t],setup(e,n){const{isFocus:r,clickHandler:i,blurHandler:o,innerValue:m,displayValue:f,deleteHandler:y,inputHandler:v,numberKeyBoardRef:b,box:g}=((e,{emit:n})=>{const r=u(null),i=p((()=>{var e;return null==(e=r.value)?void 0:e.$refs.popup.box})),o=u(!1),m=u(!1);d(o,(e=>n(e?a:l)));const f=u(""),y=p((()=>C(f.value+"",v.value?e.previewType:e.type||"text"))),v=u(""!==e.previewType);let b=null;return v.value&&(b=d((()=>e.modelValue),(()=>{v.value=!1,null==b||b()}))),s((()=>{f.value=v.value?e.modelValue:`${e.modelValue}`.replace(/\s|,/g,"")})),d(f,(e=>{n(t,v.value?"":e)})),{isFocus:o,isWaiting:m,clickHandler:()=>{o.value=!0},blurHandler:()=>{o.value=!1},inputHandler:t=>{`${f.value}`.length<e.maxlength&&(f.value+=t+"",y.value.length||c((()=>f.value="")))},deleteHandler:()=>{f.value=`${f.value}`.slice(0,-1)},numberKeyBoardRef:r,box:i,innerValue:f,displayValue:y}})(e,n);return{isFocus:r,clickHandler:i,blurHandler:o,innerValue:m,displayValue:f,inputHandler:v,deleteHandler:y,numberKeyBoard:b,box:g}}});M.render=function(e,t,a,l,n,r){const i=f("md-number-keyboard"),o=y("click-outside");return v(),b(I,null,[g(h("div",{class:["md-fake-input",{"is-focus":e.isFocus,"is-waiting":e.isFocus,disabled:e.disabled,readonly:e.readonly}],onClick:t[1]||(t[1]=(...t)=>e.clickHandler&&e.clickHandler(...t))},[h("span",{class:"md-fake-input-value",textContent:k(e.displayValue)},null,8,["textContent"]),""===e.innerValue&&""!==e.placeholder?(v(),b("span",{key:0,class:"md-fake-input-placeholder",textContent:k(e.placeholder)},null,8,["textContent"])):x("",!0)],2),[[o,e.blurHandler,e.box]]),H(e.$slots,"keyboard",{focused:e.isFocus,refs:e.numberKeyBoard,inputHandler:e.inputHandler,deleteHandler:e.deleteHandler},(()=>[h(i,{ref:"numberKeyBoard",visible:e.isFocus,"onUpdate:visible":t[2]||(t[2]=t=>e.isFocus=t),class:"fake-input-keyboard","ok-text":e.okText,"hide-dot":e.hideDot,disorder:e.disorder,onEnter:e.inputHandler,onDelete:e.deleteHandler},null,8,["visible","ok-text","hide-dot","disorder","onEnter","onDelete"])]))],64)};var N=m({name:"MdInputItem",components:{MdFieldItem:T,MdIcon:e,MdFakeInput:M},props:w,emits:[t,a,l],setup(e,n){const{nativeInputType:r,isNativeInputFocus:i,focusHandler:o,blurHandler:c,isInputError:m,isInputBrief:f}=((e,{emit:t,slots:n})=>{const r=p((()=>{let t=e.type;return"bankCard"===t||"phone"===t||"digit"===t?t="tel":"money"===t&&(t="text"),t})),i=u(!1),o=p((()=>!!n.error||""!==e.error)),d=p((()=>!!n.brief||""!==e.brief));return{nativeInputType:r,isNativeInputFocus:i,focusHandler:()=>{i.value=!0,t(a)},blurHandler:()=>{i.value=!1,t(l)},isInputError:o,isInputBrief:d}})(e,n),{innerValue:y,nativeInputRef:v,nativeInputHandler:b,fakeInputHandler:g,nativeInputMaxLength:h,clearHandler:k}=((e,{emit:a})=>{const l=u(""),n=u(null),r=u(""!==e.previewType);let i=null;r.value&&(i=d((()=>e.modelValue),(()=>{r.value=!1,null==i||i()}))),s((()=>{l.value=C(e.modelValue?""+e.modelValue:"",r.value?e.previewType:e.type||"text",e.formation)}));const o=p((()=>e.isFormative||"bankCard"===e.type||"phone"===e.type||"money"===e.type||"digit"===e.type)),c=p((()=>o.value?"":e.maxlength));return{innerValue:l,nativeInputRef:n,nativeInputHandler:i=>{const u=i.target.value,d=C(u?""+u:"",e.type||"text",e.formation);l.value=o.value?d:u,n.value&&(n.value.value=o.value?d:u),a(t,r.value?"":o.value?d.replace(/\s|,/g,""):u)},fakeInputHandler:e=>{l.value=e?e+"":"",a(t,e)},clearHandler:()=>{l.value="",a(t,"")},nativeInputMaxLength:c}})(e,n);return{nativeInputType:r,innerValue:y,nativeInputRef:v,nativeInputHandler:b,fakeInputHandler:g,clearHandler:k,nativeInputMaxLength:h,isInputError:m,isInputBrief:f,isNativeInputFocus:i,focusHandler:o,blurHandler:c}}});const D={key:0,class:"md-input-item-msg"},E={key:1,class:"md-input-item-brief"};N.render=function(e,t,a,l,n,r){const i=f("md-fake-input"),o=f("md-icon"),u=f("md-field-item");return v(),b(u,{class:["md-input-item",[e.isHighlight?"is-highlight":"",e.isTitleLatent?"is-title-latent":"",e.isNativeInputFocus?"is-focus":"",e.disabled?"is-disabled":"",e.isAmount?"is-amount":"",e.clearable?"is-clear":"",e.isInputError?"is-error":"",e.isInputBrief&&!e.isInputError?"with-brief":"",e.align,e.size]],title:e.title,solid:e.solid&&!e.isTitleLatent},B({right:V((()=>[e.clearable?g((v(),b("div",{key:0,class:"md-input-item-clear",onMousedown:t[4]||(t[4]=S((()=>{}),["prevent"])),onClick:t[5]||(t[5]=(...t)=>e.clearHandler&&e.clearHandler(...t))},[h(o,{name:"clear"})],544)),[[F,e.isNativeInputFocus&&e.innerValue.length>0]]):x("",!0),H(e.$slots,"right")])),children:V((()=>[e.$slots.error||""!==e.error?(v(),b("div",D,[""!==e.error?(v(),b("p",{key:0,textContent:k(e.error)},null,8,["textContent"])):H(e.$slots,"error",{key:1})])):x("",!0),e.isInputBrief&&!e.isInputError?(v(),b("div",E,[""!==e.brief?(v(),b("p",{key:0,textContent:k(e.brief)},null,8,["textContent"])):H(e.$slots,"brief",{key:1})])):x("",!0)])),default:V((()=>[e.isVirtualKeyboard?(v(),b(i,{key:1,type:e.type,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,"model-value":e.innerValue,maxlength:e.maxlength,"ok-text":e.okText,"hide-dot":e.hideDot,disorder:e.disorder,"preview-type":e.previewType,"onUpdate:modelValue":e.fakeInputHandler,onFocus:e.focusHandler,onBlur:e.blurHandler},{keyboard:V((t=>[H(e.$slots,"default",t)])),_:1},8,["type","placeholder","disabled","readonly","model-value","maxlength","ok-text","hide-dot","disorder","preview-type","onUpdate:modelValue","onFocus","onBlur"])):(v(),b("input",{key:0,ref:"nativeInputRef",class:"md-input-item-input",autocomplete:"off",type:e.nativeInputType,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,value:e.innerValue,maxlength:e.nativeInputMaxLength?1/0:e.maxlength,onFocus:t[1]||(t[1]=(...t)=>e.focusHandler&&e.focusHandler(...t)),onBlur:t[2]||(t[2]=(...t)=>e.blurHandler&&e.blurHandler(...t)),onInput:t[3]||(t[3]=(...t)=>e.nativeInputHandler&&e.nativeInputHandler(...t))},null,40,["type","placeholder","disabled","readonly","value","maxlength"]))])),_:2},[e.$slots.left?{name:"left",fn:V((()=>[H(e.$slots,"left")]))}:void 0]),1032,["class","title","solid"])},N.install=e=>{e.component(N.name,N),e.component(M.name,M)};export{N as _,$ as f};
