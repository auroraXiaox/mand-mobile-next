import{g as e,U as a,a as l,i as n}from"./app.fecd80cc.js";var o=e({name:"MdSwitch",props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:[a],setup:(e,{emit:l})=>({onChange:()=>{l(a,!e.modelValue)}})});o.render=function(e,a){return l(),n("div",{class:["md-switch",[e.disabled?"disabled":"",e.modelValue?"active":""]],onClick:a[1]||(a[1]=(...a)=>e.onChange&&e.onChange(...a))},null,2)};var s=o;s.install=e=>{e.component(s.name,s)};var d=s;export{d as s};