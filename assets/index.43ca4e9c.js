import{g as e,h as i,m as t,a as r,c as s,d as a,f as o,i as l,r as n,n as c,w as d,F as u,j as p}from"./app.dd25191e.js";import{i as v}from"./index.5a8ec7a6.js";var y=e({name:"MdActivityIndicatorRolling",props:{size:{type:Number,default:70},width:{type:Number,default:void 0},color:{type:String,default:"#2F86F6"},borderColor:{type:String,default:"rgba(0, 0, 0, .1)"},fill:{type:String,default:"transparent"},linecap:{type:String,default:"round"},rotate:{type:Number,default:0},process:{type:Number,default:void 0}},setup(e,r){const s=i((()=>`md-activity-indicator-rolling-keyframes-${e.size}`)),a=i((()=>e.width||e.size/12)),o=i((()=>3.1415*e.size)),l=i((()=>e.process?`${e.process*o.value} ${(1-e.process)*o.value}`:"")),n=i((()=>e.size/2)),c=i((()=>e.size+2*a.value)),d=t(2),u=i((()=>void 0===e.process));return{id:s,strokeWidth:a,circlePerimeter:o,strokeDasharray:l,radius:n,viewBoxSize:c,duration:d,isAutoAnimation:u}}}),m={class:"md-activity-indicator-rolling"},f={class:"rolling-container"},z={key:0,class:"circle"},x={class:"content"};y.render=function(e,i){return r(),s("div",m,[a("div",f,[(r(),s("svg",{viewBox:`0 0 ${e.viewBoxSize} ${e.viewBoxSize}`,style:{width:`${e.size}px`,height:`${e.size}px`,transform:`rotateZ(${e.rotate}deg)`},preserveAspectRatio:"xMidYMid",class:"md-activity-indicator-svg rolling"},[a("circle",{fill:"none",stroke:e.borderColor,"stroke-width":e.strokeWidth,cx:e.viewBoxSize/2,cy:e.viewBoxSize/2,r:e.radius},null,8,["stroke","stroke-width","cx","cy","r"]),e.$slots.circle?l(e.$slots,"circle",{key:1}):(r(),s("g",z,[e.isAutoAnimation||e.process>0?(r(),s("circle",{key:0,class:"stroke",cx:e.viewBoxSize/2,cy:e.viewBoxSize/2,fill:e.fill,stroke:e.color,"stroke-width":e.strokeWidth,"stroke-dasharray":e.isAutoAnimation?""+110*e.circlePerimeter/125:e.strokeDasharray,"stroke-linecap":e.linecap,r:e.radius},[e.isAutoAnimation?(r(),s("animate",{key:0,attributeName:"stroke-dashoffset",values:`${360*e.circlePerimeter/125};${140*e.circlePerimeter/125}`,dur:"2.2s",keyTimes:"0;1",calcMode:"spline",fill:"freeze",keySplines:"0.41,0.314,0.8,0.54",repeatCount:"indefinite",begin:"0"},null,8,["values"])):o("v-if",!0),e.isAutoAnimation?(r(),s("animateTransform",{key:1,dur:`${e.duration}s`,values:`0 ${e.viewBoxSize/2} ${e.viewBoxSize/2};360 ${e.viewBoxSize/2} ${e.viewBoxSize/2}`,attributeName:"transform",type:"rotate",calcMode:"linear",keyTimes:"0;1",begin:"0",repeatCount:"indefinite"},null,8,["dur","values"])):o("v-if",!0)],8,["cx","cy","fill","stroke","stroke-width","stroke-dasharray","stroke-linecap","r"])):o("v-if",!0)])),l(e.$slots,"defs")],12,["viewBox"])),a("div",x,[l(e.$slots,"default")])])])};var g=y,k=e({name:"MdActivityIndicatorRollingSuccess",components:{[g.name]:g},props:{size:{type:Number,default:70},color:{type:String,default:"#2F86F6"},isSuccess:{type:Boolean,default:!1}},setup(e,r){const s=t(!1),a=t(Date.now()),o=t(!1),l=i((()=>e.size/16)),n=i((()=>e.size/2)),c=i((()=>e.size+2*l.value));return{animating:s,startTmp:a,successFlag:o,strokeWidth:l,radius:n,viewBoxSize:c}}}),h={class:"md-activity-indicator-rolling-success"},w={name:"circle"};k.render=function(e,i){const t=n("md-activity-indicator-rolling");return r(),s("div",h,[a(t,{width:e.strokeWidth,radius:e.radius,fill:"#FFF6F1","border-color":"transparent"},c({default:d((()=>[e.isSuccess?(r(),s("svg",{key:0,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",class:"right",style:{transform:`translate(-50%, -50%) scale(${e.size/70})`}},[a("g",null,[a("line",{x1:"32",y1:"47",x2:"45",y2:"62",style:{strokeWidth:e.strokeWidth,stroke:e.color},"stroke-dasharray":"20"},null,4),a("line",{x1:"42",y1:"62",x2:"68.4",y2:"40",style:{strokeWidth:e.strokeWidth,stroke:e.color},"stroke-dasharray":"35"},null,4)])],4)):o("v-if",!0)])),_:2},[e.isSuccess?{name:"circle",fn:d((()=>[a("g",w,[a("circle",{class:"success",cx:e.viewBoxSize/2,cy:e.viewBoxSize/2,fill:"#FFF6F1",stroke:"none",r:e.radius},null,8,["cx","cy","r"])])]))}:void 0]),1032,["width","radius"])])};var S=k,$=e({name:"MdActivityIndicatorSpinning",components:{[v.name]:v},props:{size:{type:Number,default:70},color:{type:String,default:"dark",validator:e=>"dark"===e||"light"===e}}});$.render=function(e,i){const t=n("md-icon");return r(),s("div",{class:["md-activity-indicator-spinning",{dark:"dark"===e.color}]},[a(t,{class:"md-activity-indicator-svg",name:"spinner",style:{width:`${e.size}px`,height:`${e.size}px`}},null,8,["style"])],2)};var b=$,B=e({name:"MdActivityIndicatorCarouselCircle",props:{size:{type:Number,default:30},index:{type:Number,default:0},animateValues:{type:Array,default:()=>[]}},setup:e=>({cx:i((()=>e.index*e.size*1.5+e.size/2)),opacityValues:i((()=>e.animateValues.join(";"))),sizeValues:i((()=>e.animateValues.map((i=>i*e.size/2)).join(";")))})});B.render=function(e,i){return r(),s("circle",{cx:e.cx,cy:e.size/2,r:e.size/2},[o(" eslint-disable vue/attribute-hyphenation "),a("animate",{values:e.opacityValues,attributeName:"fill-opacity",attributeType:"XML",begin:"0s",dur:"1s",calcMode:"linear",repeatCount:"indefinite"},null,8,["values"]),a("animate",{values:e.sizeValues,attributeName:"r",attributeType:"XML",begin:"0s",dur:"1s",calcMode:"linear",repeatCount:"indefinite"},null,8,["values"])],8,["cx","cy","r"])};var A=B,F=e({name:"MdActivityIndicatorCarousel",components:{[A.name]:A},props:{size:{type:Number,default:30},color:{type:String,default:"#2F86F6"}},setup(e,r){const s=t([[1,.8,.6,.6,.6,.8,1],[.6,.8,1,.8,.6,.6,.6],[.6,.6,.6,.8,1,.8,.6]]),a=i((()=>{const i=e.size,t=s.value.length;return t*i+(t-1)*i/2})),o=i((()=>`0 0 ${a.value} ${e.size}`));return{circleAnimateValues:s,viewBox:o,viewWidth:a}}}),M={class:"md-activity-indicator-carousel"};F.render=function(e,i){const t=n("md-activity-indicator-carousel-circle");return r(),s("div",M,[(r(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:e.viewBox,fill:e.color,style:{width:`${e.viewWidth}px`,height:`${e.size}px`},class:"md-activity-indicator-svg carouseling"},[(r(!0),s(u,null,p(e.circleAnimateValues,((i,a)=>(r(),s(t,{key:`carousel-circle-${a}`,size:e.size,index:a,"animate-values":i},null,8,["size","index","animate-values"])))),128))],12,["viewBox","fill"]))])};var N=F,C=e({name:"MdActivityIndicator",components:{[g.name]:g,[S.name]:S,[b.name]:b,[N.name]:N},props:{type:{type:String,default:"roller"},size:{type:Number,default:70},width:{type:Number,default:void 0},color:{type:String,default:""},textColor:{type:String,default:"#999"},textSize:{type:Number,default:void 0},vertical:{type:Boolean,default:!1}},setup:e=>({innerColor:i((()=>e.color?e.color:"spinner"===e.type?"dark":"#2F86F6"))})}),W={class:"indicator-loading"};C.render=function(e,i){const t=n("md-activity-indicator-rolling"),c=n("md-activity-indicator-rolling-success"),d=n("md-activity-indicator-spinning"),u=n("md-activity-indicator-carousel");return r(),s("div",{class:["md-activity-indicator",e.type]},[a("div",{class:["indicator-container",{vertical:e.vertical}]},[a("div",W,["roller"===e.type?(r(),s(t,{key:0,size:e.size,color:e.innerColor,width:e.width},null,8,["size","color","width"])):"roller-success"===e.type?(r(),s(c,{key:1,size:e.size,color:e.color},null,8,["size","color"])):"spinner"===e.type?(r(),s(d,{key:2,size:e.size,color:e.innerColor},null,8,["size","color"])):"carousel"===e.type?(r(),s(u,{key:3,size:e.size,color:e.innerColor},null,8,["size","color"])):o("v-if",!0)]),e.$slots.default?(r(),s("div",{key:0,style:{fontSize:`${e.textSize}px`,color:e.textColor},class:"md-activity-indicator-text indicator-text"},[l(e.$slots,"default")],4)):o("v-if",!0)],2)],2)};var V=C;V.install=e=>{e.component(V.name,V)};export{V as a,S as b,g as r};
