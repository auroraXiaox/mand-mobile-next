var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,i=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;import{g as d,n as m,v as s,c as r,d as n,k as v,e as p,x as f,y as c,a as b,l as V}from"./app.587128d6.js";import{c as j}from"./index.48700d31.js";import{b as x}from"./index.d7104814.js";import{t as g}from"./index.1ab7536c.js";import{i as y}from"./index.6b812efe.js";import{f as _}from"./index.664445a8.js";import{f as h}from"./index.80e4e042.js";import{s as O}from"./index.1de7d966.js";import{f as U}from"./index.f98d3fc3.js";import{d as w}from"./index.fef09045.js";const P={class:"md-example-child md-example-child-captcha"},k=V(" 确定 ");var z,S=d((z=((e,l)=>{for(var a in l||(l={}))o.call(l,a)&&i(e,a,l[a]);if(t)for(var a of t(l))u.call(l,a)&&i(e,a,l[a]);return e})({},{name:"CaptchaDemo",title:"基本"}),l(z,a({expose:[],setup(e){const l=m(!1);m(!1);const a=m("输入验证码"),t=m("验证码已发送至 186****5407"),o=m(4),u=m(!1),i=m(!1),d=m(!1),V=e=>{g.info(`你输入了${e}`),l.value=!1},z=m(void 0);let S=null;const C=()=>{i.value&&w&&z.value&&(S=U(z.value)),l.value=!l.value};return s(l,(e=>{e||setTimeout((()=>null==S?void 0:S()),0)})),(e,m)=>(b(),r("div",P,[n(p(_),{title:"文案"},{default:v((()=>[n(p(y),{modelValue:a.value,"onUpdate:modelValue":m[1]||(m[1]=e=>a.value=e),title:"标题"},null,8,["modelValue"]),n(p(y),{modelValue:t.value,"onUpdate:modelValue":m[2]||(m[2]=e=>t.value=e),title:"插槽内容"},null,8,["modelValue"]),n(p(y),{title:"短信验证码","model-value":"5555",readonly:""})])),_:1}),n(p(_),{title:"配置"},{default:v((()=>[n(p(h),{title:"是否内联",customized:"",align:"right"},{default:v((()=>[n(p(O),{modelValue:d.value,"onUpdate:modelValue":m[3]||(m[3]=e=>d.value=e)},null,8,["modelValue"])])),_:1}),n(p(y),{modelValue:o.value,"onUpdate:modelValue":m[4]||(m[4]=e=>o.value=e),title:"验证码长度",type:"tel"},null,8,["modelValue"]),n(p(h),{title:"采用掩码",customized:"",align:"right"},{default:v((()=>[n(p(O),{modelValue:u.value,"onUpdate:modelValue":m[5]||(m[5]=e=>u.value=e)},null,8,["modelValue"])])),_:1}),n(p(h),{title:"使用系统键盘",customized:"",align:"right"},{default:v((()=>[n(p(O),{modelValue:i.value,"onUpdate:modelValue":m[6]||(m[6]=e=>i.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),n(p(j),{visible:l.value,"onUpdate:visible":m[7]||(m[7]=e=>l.value=e),"is-view":d.value,title:a.value,content:t.value,system:i.value,mask:u.value,maxlength:o.value-0,onSubmit:V},null,8,["visible","is-view","title","content","system","mask","maxlength"]),f(n(p(x),{ref:z,style:{"margin-top":"0.32rem"},onClick:C},{default:v((()=>[k])),_:1},512),[[c,!d.value]])]))}})))),C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});export{C as _};