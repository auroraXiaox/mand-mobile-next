var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,l,d)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[l]=d,s=(e,a)=>{for(var l in a||(a={}))t.call(a,l)&&o(e,l,a[l]);if(d)for(var l of d(a))n.call(a,l)&&o(e,l,a[l]);return e},i=(e,d)=>a(e,l(d));import{g as r,h as c,r as u,a as m,c as p,d as v,i as g,n as h,k as b,e as f,l as z}from"./app.587128d6.js";import{i as k}from"./index.81c07342.js";import{U as _,C as x}from"./index.fef09045.js";var S={modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:"md"}},V=r({name:"MdAgree",components:{MdIcon:k},props:S,emits:[_,x],setup:(e,a)=>s({},((e,{emit:a})=>({onChange:l=>{e.disabled||(a(_,!e.modelValue),a(x,l))},currentIcon:c((()=>e.modelValue?"checked":"check"))}))(e,a))}),y={class:"md-agree-content"};V.render=function(e,a){const l=u("md-icon");return m(),p("div",{class:["md-agree",[e.disabled?"disabled":""]]},[v("div",{class:["md-agree-icon",[e.modelValue?"checked":""]],onClick:a[1]||(a[1]=a=>e.onChange(a))},[v(l,{name:e.currentIcon,size:e.size},null,8,["name","size"])],2),v("div",y,[g(e.$slots,"default")])],2)};var j=V;j.install=e=>{e.component(j.name,j)};var O=j;const U={class:"\n      md-example-child\n      md-example-child-agree\n      md-example-child-0\n    "},C=z(" 本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意"),M=v("a",null,"《投保须知》",-1),A=z(", "),D=v("a",null,"《保险条款》",-1);var E=r(i(s({},{name:"AgreeDemo",title:"选中状态",titleEnUS:"Selected state",height:120}),{expose:[],setup(e){const a=h({checked:!0,name:"agree0",size:"md",disabled:!1,introduction:"选中状态"});return(e,l)=>(m(),p("div",U,[v(f(O),{modelValue:a.value.checked,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value.checked=e),disabled:a.value.disabled,size:a.value.size,onChange:l[2]||(l[2]=e=>{return l=a.value.name,d=a.value.checked,t=e,void console.log("agree",l,d,t);var l,d,t})},{default:b((()=>[C,M,A,D])),_:1},8,["modelValue","disabled","size"])]))}})),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});const w={class:"\n      md-example-child\n      md-example-child-agree\n      md-example-child-1\n    "},I=z(" 本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意 ");var T=r(i(s({},{name:"AgreeDemo",title:"未选中状态",titleEnUS:"Unselected state",height:120}),{expose:[],setup(e){const a=h({checked:!1,name:"agree1",size:"md",disabled:!1,introduction:"未选中状态"});return(e,l)=>(m(),p("div",w,[v(f(O),{modelValue:a.value.checked,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value.checked=e),disabled:a.value.disabled,size:a.value.size,onChange:l[2]||(l[2]=e=>{return l=a.value.name,d=a.value.checked,t=e,void console.log("agree",l,d,t);var l,d,t})},{default:b((()=>[I])),_:1},8,["modelValue","disabled","size"])]))}})),B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const $={class:"\n      md-example-child\n      md-example-child-agree\n      md-example-child-2\n    "},q=z(" 本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意 ");var F=r(i(s({},{name:"AgreeDemo",title:"选中不可用状态",titleEnUS:"Selected and unavailable state",height:120}),{expose:[],setup(e){const a=h({checked:!0,name:"agree2",size:"md",disabled:!0,introduction:"选中不可用状态"});return(e,l)=>(m(),p("div",$,[v(f(O),{modelValue:a.value.checked,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value.checked=e),disabled:a.value.disabled,size:a.value.size,onChange:l[2]||(l[2]=e=>{return l=a.value.name,d=a.value.checked,t=e,void console.log("agree",l,d,t);var l,d,t})},{default:b((()=>[q])),_:1},8,["modelValue","disabled","size"])]))}})),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});const H={class:"\n      md-example-child\n      md-example-child-agree\n      md-example-child-3\n    "},J=z(" 本人承诺投保人已充分了解本保险产品，并保证投保信息的真实性，理解并同意 ");var K=r(i(s({},{name:"AgreeDemo",title:"未选中不可用状态",titleEnUS:"Unselected and unavailable state",height:120}),{expose:[],setup(e){const a=h({checked:!1,name:"agree3",size:"md",disabled:!0,introduction:"未选中不可用状态"});return(e,l)=>(m(),p("div",H,[v(f(O),{modelValue:a.value.checked,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value.checked=e),disabled:a.value.disabled,size:a.value.size,onChange:l[2]||(l[2]=e=>{return l=a.value.name,d=a.value.checked,t=e,void console.log("agree",l,d,t);var l,d,t})},{default:b((()=>[J])),_:1},8,["modelValue","disabled","size"])]))}})),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:K});export{P as _,B as a,G as b,L as c};