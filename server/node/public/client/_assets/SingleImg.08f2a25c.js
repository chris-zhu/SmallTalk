import{a as t,m as e,O as a,d as n,Q as r,P as o,r as i,o as s,c as l,w as c,p as d,b as u,t as p}from"./index.5b04b038.js";import{I as f}from"./AntdIcon.eece80a8.js";import{I as g}from"./InboxOutlined.2b0ae15a.js";import{r as b}from"./index.36ed2e6b.js";var m={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};function y(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var h=function(a,n){var r=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){y(t,e,a[e])}))}return t}({},a,n.attrs);return t(f,e(r,{icon:m}),null)};h.displayName="LoadingOutlined",h.inheritAttrs=!1;var v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function O(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var j=function(a,n){var r=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){O(t,e,a[e])}))}return t}({},a,n.attrs);return t(f,e(r,{icon:v}),null)};function w(t,e){const i=n({action:"https:"===window.location.protocol?"https://upload-z2.qiniup.com":"http://upload-z2.qiniup.com",list:[],loading:!1,data:{token:"",key:""},domainUrl:""});return{...a(i),handleChange:({file:t,fileList:a})=>{t.status;"uploading"===t.status&&(i.loading=!0,i.list=a),"done"===t.status&&(i.loading=!1,i.list=a,e.emit("update:src",`${i.domainUrl}${i.data.key}`)),"error"===t.status&&(i.loading=!1)},beforeUpload:(t,e)=>{if(!("image/jpeg"===t.type||"image/png"===t.type))return r.error("You can only upload JPG file!"),!1;if(!(t.size/1024/1024<2))return r.error("Image must smaller than 2MB!"),!1;const a=`${+new Date}-${b(9999,1e3)}${function(t){let e="";const a=t.lastIndexOf(".");a>=0&&(e=t.substring(a));return e}(t.name)}`;return o("/qiniu/token").then(t=>{i.domainUrl=t.data.domainUrl,i.data.token=t.data.token,i.data.key=a}).catch(()=>{Promise.reject(!1)})}}}j.displayName="PlusOutlined",j.inheritAttrs=!1;var k={name:"Upload",components:{InboxOutlined:g,PlusOutlined:j,LoadingOutlined:h},props:{src:String,tips:{type:String,default:"Upload"}},setup:(t,e)=>({...w(0,e)})};const P=c("data-v-4b5cdad4");d("data-v-4b5cdad4");const q={key:1},x={class:"ant-upload-text"};u();const U=P((function(e,a,n,r,o,c){const d=i("loading-outlined"),u=i("plus-outlined"),f=i("a-upload");return s(),l(f,{fileList:e.list,"onUpdate:fileList":a[1]||(a[1]=t=>e.list=t),"list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,action:e.action,data:e.data,"before-upload":e.beforeUpload,onChange:e.handleChange},{default:P(()=>[n.src?(s(),l("div",{key:0,style:{"background-image":`url(${n.src})`},class:"avatar-bg"},null,4)):(s(),l("div",q,[e.loading?(s(),l(d,{key:0})):(s(),l(u,{key:1})),t("div",x,p(n.tips),1)]))]),_:1},8,["fileList","action","data","before-upload","onChange"])}));k.render=U,k.__scopeId="data-v-4b5cdad4";export{h as L,j as P,k as s};