var e=Object.defineProperty,l=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,d=(l,t,a)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[t]=a,x=(e,l)=>{for(var t in l||(l={}))o.call(l,t)&&d(e,t,l[t]);if(a)for(var t of a(l))r.call(l,t)&&d(e,t,l[t]);return e},p=(e,a)=>l(e,t(a));import{g as n,c as u,d as i,k as m,e as s,a as c,s as h}from"./app.fba22b3c.js";import{i as b}from"./index.ff3d1ec1.js";import{f as g}from"./index.40185662.js";const y={class:"md-example-child md-example-child-input-item-0"};var f=n(p(x({},{name:"InputItemDemo",title:"基本"}),{expose:[],setup:e=>(e,l)=>(c(),u("div",y,[i(s(g),null,{default:m((()=>[i(s(b),{title:"普通文本",placeholder:"普通文本","is-amount":"",maxlength:5}),i(s(b),{title:"禁用表单","model-value":"禁用表单",disabled:""}),i(s(b),{title:"只读表单","model-value":"只读表单",readonly:""}),i(s(b),{title:"高亮表单",placeholder:"高亮表单","is-highlight":""}),i(s(b),{title:"文本居中",placeholder:"文本居中",align:"center"}),i(s(b),{title:"文本居右",placeholder:"文本居右",align:"right"})])),_:1})]))})),v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:f});var V=n(p(x({},{name:"InputItemDemo",title:"业务场景输入框"}),{expose:[],setup(e){const l=h("");return(e,t)=>(c(),u(s(g),null,{default:m((()=>[i(s(b),{modelValue:l.value,"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),title:"虚拟键盘",type:"phone","is-virtual-keyboard":!0,maxlength:5,placeholder:"phone xxx xxxx xxxx"},null,8,["modelValue"]),i(s(b),{modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=e=>l.value=e),title:"手机号",type:"phone",placeholder:"phone xxx xxxx xxxx",maxlength:13},null,8,["modelValue"]),i(s(b),{modelValue:l.value,"onUpdate:modelValue":t[3]||(t[3]=e=>l.value=e),title:"数字",type:"digit",placeholder:"digit 0123456789",maxlength:13},null,8,["modelValue"]),i(s(b),{modelValue:l.value,"onUpdate:modelValue":t[4]||(t[4]=e=>l.value=e),title:"银行卡",type:"bankCard",placeholder:"bankCard xxxx xxxx xxxx xxxx",maxlength:13},null,8,["modelValue"]),i(s(b),{modelValue:l.value,"onUpdate:modelValue":t[5]||(t[5]=e=>l.value=e),title:"金额",type:"money",placeholder:"money xx, xxx.xxxx",maxlength:13},null,8,["modelValue"]),i(s(b),{title:"密码",type:"password",placeholder:"password *********"}),i(s(b),{title:"邮箱",type:"email",placeholder:"其他标准 html input 类型"})])),_:1}))}})),j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});export{v as _,j as a};
