import{g as e,h as t,H as l,a as i,c as d,f as a,d as s,t as n,i as o,F as r,I as f,r as c,k as m,J as p}from"./app.dd25191e.js";import{i as u}from"./index.5a8ec7a6.js";import{b as y,d as h}from"./index.22509486.js";var v=e({name:"MdField",props:{title:{type:String,default:""},brief:{type:String,default:""},disabled:{type:Boolean,default:!1},plain:{type:Boolean,default:!1}},setup(){l("rootField",p())}}),g={key:0,class:"md-field_header"},b={class:"md-field_header_heading"},$={class:"md-field_header_action"},k={class:"md-field_content"},x={key:1,class:"md-field_footer"};v.render=function(e,t){return i(),d(r,null,[a(" 考虑换个标签 "),s("section",{class:["md-field",[{"md-field--is-plain":e.plain,"md-field--is-disabled":e.disabled}]]},[e.title||e.brief||e.$slots.header||e.$slots.action?(i(),d("header",g,[s("div",b,[e.title?(i(),d("legend",{key:0,class:"md-field_header_title",textContent:n(e.title)},null,8,["textContent"])):a("v-if",!0),e.brief?(i(),d("p",{key:1,class:"md-field_header_brief",textContent:n(e.brief)},null,8,["textContent"])):a("v-if",!0),o(e.$slots,"header")]),s("div",$,[o(e.$slots,"action")])])):a("v-if",!0),s("div",k,[o(e.$slots,"default")]),e.$slots.footer?(i(),d("footer",x,[o(e.$slots,"footer")])):a("v-if",!0)],2)],2112)};var _=v,C=e({name:"MdFieldItem",components:{MdIcon:u},props:{title:{type:String,default:""},placeholder:{type:String,default:""},content:{type:String,default:""},addon:{type:String,default:""},arrow:{type:[Boolean,String],default:!1},solid:{type:Boolean,default:!1},alignRight:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},highlight:{type:String,default:""},isPadding:{type:Boolean,default:!0},titlePosition:{type:String,default:"fixed"},customContentClass:{type:Array,default:()=>[]}},setup(e,l){const i=f("rootField",{});return{inputEnv:t((()=>y?"is-ios":h?"is-android":"is-browser")),currentDisabled:t((()=>i.disabled||e.disabled))}}}),S={class:"md-field-item-content"},w={key:1,class:"md-field-item-left"},B={class:"md-field-item-control"},F={key:2,class:"md-field-item-right"},j={key:0,class:"md-field-item-children"};C.render=function(e,t){const l=c("md-icon");return i(),d("div",{class:["md-field-item",[e.solid?"is-solid":"",e.currentDisabled?"is-disabled":"",e.alignRight?"is-align-right":"",e.inputEnv]]},[s("div",S,[e.title?(i(),d("label",{key:0,class:"md-field-item-title",textContent:n(e.title)},null,8,["textContent"])):a("v-if",!0),e.$slots.left?(i(),d("div",w,[o(e.$slots,"left")])):a("v-if",!0),s("div",B,[o(e.$slots,"default",{},(()=>[e.content?(i(),d(r,{key:0},[m(n(e.content),1)],2112)):e.placeholder?(i(),d("div",{key:1,class:"md-field-item-placeholder",textContent:n(e.placeholder)},null,8,["textContent"])):a("v-if",!0)]))]),e.arrow||e.addon||e.$slots.right?(i(),d("div",F,[o(e.$slots,"right",{},(()=>[m(n(e.addon),1)])),e.arrow?(i(),d(l,{key:0,name:!0===e.arrow?"arrow-right":e.arrow,size:"md"},null,8,["name"])):a("v-if",!0)])):a("v-if",!0)]),e.$slots.children?(i(),d("div",j,[o(e.$slots,"children")])):a("v-if",!0)],2)};var I=C;_.install=e=>{e.component(_.name,_),e.component(I.name,I)};var M=_;export{M as f};
