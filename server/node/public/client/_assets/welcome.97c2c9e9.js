let e=document.createElement("style");e.innerHTML=".welcome[data-v-39ef173a]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.welcome .title[data-v-39ef173a]{line-height:5rem}",document.head.appendChild(e);import{g as a,u as t,r as s,o as n,c as r,a as c,t as o,w as l,p as i,b as d}from"./index.5b04b038.js";import{s as m}from"./Avatar.c5a0da89.js";var f={name:"welcome",components:{Avatar:m},setup(){const e=t();return{userInfo:a(()=>e.state.user.userInfo)}}};const u=l("data-v-39ef173a");i("data-v-39ef173a");const h={class:"welcome"},p={class:"title"},v=c("p",{class:"desc"},"Please select a chat to start messaging.",-1);d();const g=u((function(e,a,t,l,i,d){const m=s("Avatar");return n(),r("div",h,[c(m,{width:"7.5rem",height:"7.5rem",src:l.userInfo.avatar},null,8,["src"]),c("h3",p,"Hey，"+o(l.userInfo.name)+"！",1),v])}));f.render=g,f.__scopeId="data-v-39ef173a";export default f;