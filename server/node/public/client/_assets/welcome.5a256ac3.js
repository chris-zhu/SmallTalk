let e=document.createElement("style");e.innerHTML=".welcome[data-v-135fceec]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.welcome .title[data-v-135fceec]{line-height:5rem}",document.head.appendChild(e);import{d as a,h as t,u as s,r as c,o as n,c as r,a as o,t as i,w as d,p as m,e as l}from"./index.bb3d4de7.js";import{s as f}from"./Avatar.340a5d8a.js";import"./index.a6cf601d.js";import{s as u}from"./index.eec5a7c8.js";var h=a({name:"welcome",components:{Avatar:f,Emoji:u},setup(){const e=s();return{userInfo:t(()=>e.state.user.userInfo)}}});const p=d("data-v-135fceec");m("data-v-135fceec");const v={class:"welcome"},j={class:"title"},w=o("p",{class:"desc"},"Please select a chat to start messaging.",-1);l();const g=p((function(e,a,t,s,d,m){const l=c("Avatar"),f=c("Emoji");return n(),r("div",v,[o(l,{width:"7.5rem",height:"7.5rem",src:e.userInfo.avatar},null,8,["src"]),o("h3",j,"Hey，"+i(e.userInfo.name)+"！",1),w,o(f)])}));h.render=g,h.__scopeId="data-v-135fceec";export default h;
