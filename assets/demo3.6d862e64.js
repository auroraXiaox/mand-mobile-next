var e=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,u=(o,l,t)=>l in o?e(o,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[l]=t,n=(e,o)=>{for(var l in o||(o={}))a.call(o,l)&&u(e,l,o[l]);if(t)for(var l of t(o))r.call(o,l)&&u(e,l,o[l]);return e},m=(e,t)=>o(e,l(t));import{g as s,m as d,c as p,e as b,a as i}from"./app.dd25191e.js";import{c}from"./index.35410d03.js";var f=s(m(n({},{name:"CodeboxDemo",title:"基本"}),{expose:[],setup(e){const o=d("");return(e,l)=>(i(),p(b(c),{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e)},null,8,["modelValue"]))}})),v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:f});var _=s(m(n({},{name:"CodeboxDemo",title:"掩码"}),{expose:[],setup(e){const o=d("");return(e,l)=>(i(),p(b(c),{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e),mask:"",maxlength:5},null,8,["modelValue"]))}})),g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_});var x=s(m(n({},{name:"CodeboxDemo",title:"系统键盘"}),{expose:[],setup(e){const o=d("");return(e,l)=>(i(),p(b(c),{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e),maxlength:5,system:""},null,8,["modelValue"]))}})),y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});var O=s(m(n({},{name:"CodeboxDemo",title:"内联样式"}),{expose:[],setup(e){const o=d("");return(e,l)=>(i(),p(b(c),{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e),class:"inline-codebox","is-view":""},null,8,["modelValue"]))}})),j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});export{v as _,g as a,y as b,j as c};
