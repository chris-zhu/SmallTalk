let e=document.createElement("style");e.innerHTML=".chats .content[data-v-52c12e4a]{padding:1.25rem 20px}.chats .content .title[data-v-52c12e4a]{font-weight:700;margin-bottom:1.25rem}.chats .content .contacter-wrapper[data-v-52c12e4a]{margin:2rem 0;width:100%;white-space:nowrap;overflow:hidden}.chats .content .contacter-wrapper .contacter[data-v-52c12e4a]{padding:0;margin:0;display:inline-block}.chats .content .contacter-wrapper .contacter .user[data-v-52c12e4a]{display:inline-flex;width:4.8rem;flex-direction:column;align-items:center;margin-right:1.5rem}.chats .content .contacter-wrapper .contacter .user[data-v-52c12e4a]:last-child{margin-right:0}.chats .content .contacter-wrapper .contacter .user .user-name[data-v-52c12e4a]{width:100%;text-align:center;margin:1rem 0 0;font-size:1.2rem}.chats .content .messages .card[data-v-52c12e4a]{margin-bottom:1.25rem}.chats .content .messages .card[data-v-52c12e4a]:last-child{margin-bottom:0}.chats .content .messages .card .body[data-v-52c12e4a]{flex:1;overflow:hidden}.chats .content .messages .card .body .info[data-v-52c12e4a]{display:flex;justify-content:space-between;align-items:center;margin-bottom:.2rem}.chats .content .messages .card .body .info .name[data-v-52c12e4a]{margin:0;max-width:15rem}.chats .content .messages .card .body .info .time[data-v-52c12e4a]{font-size:1rem;color:var(--gray)}",document.head.appendChild(e);import{d as a,f as t,i as s,j as n,r as i,o as r,c as o,a as m,F as c,g as l,w as d,p as h,e as g,t as w}from"./index.bb3d4de7.js";import{s as f}from"./Avatar.340a5d8a.js";import{s as y}from"./Card.cf407f6e.js";import{s as p}from"./index.a6cf601d.js";var u=a({name:"chats",components:{Avatar:f,Card:y,Scroller:p},setup(){const e=t([{name:"william",status:"online"},{name:"william2",status:"online"},{name:"william5",status:"online"},{name:"william1william1",status:"Offline"},{name:"william3",status:"Offline"},{name:"william4",status:"Offline"},{name:"william5",status:"online"},{name:"william1william1",status:"Offline"},{name:"william3",status:"Offline"},{name:"william4",status:"Offline"}]),a=t([{name:"Chris Borwd",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"},{name:"Alice",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"},{name:"Bob",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"},{name:"Candy",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"},{name:"Chris Borwd",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"},{name:"Alice",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"},{name:"Bob",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"},{name:"Candy",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"},{name:"Chris Borwd",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"},{name:"Alice",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"},{name:"Bob",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"},{name:"Candy",time:"06:00 am",notify:s(5,0),msg:"Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?"}]),i=n();return{peoples:e,chatClick:e=>{console.log(e),i.push("/chating/"+e)},msgList:a}}});const v=d("data-v-52c12e4a");h("data-v-52c12e4a");const H={class:"chats"},b={class:"content"},B=m("h2",{class:"title"},"Chats",-1),A=m("div",{class:"input-group"},[m("input",{placeholder:"Search for messages or users...",type:"text"}),m("div",null,[m("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-search",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[m("path",{"fill-rule":"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}),m("path",{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"})])])],-1),C={class:"contacter"},M={class:"user-name ellipsis"},x={class:"messages"},T={class:"body"},k={class:"info"},j={class:"name ellipsis"},O={class:"time"},z={class:"msg ellipsis"};g();const _=v((function(e,a,t,s,n,d){const h=i("Avatar"),g=i("Scroller"),f=i("Card");return r(),o("div",H,[m("div",b,[B,A,m(g,{data:e.peoples,scrollX:"",scrollY:!1,class:"contacter-wrapper"},{default:v(()=>[m("ul",C,[(r(!0),o(c,null,l(e.peoples,(e,a)=>(r(),o("li",{class:"user",key:a},[m(h,{width:"4.4rem",height:"4.4rem",online:"online"===e.status,src:"https://himg.bdimg.com/sys/portraitn/item/89c7456e646c657373746561726c9c89"},null,8,["online"]),m("p",M,w(e.name),1)]))),128))])]),_:1},8,["data"]),m("div",x,[(r(!0),o(c,null,l(e.msgList,a=>(r(),o(f,{key:a.name,class:"card",notify:a.notify,onClick:t=>e.chatClick(a.name)},{default:v(()=>[m("div",T,[m("div",k,[m("h6",j,w(a.name),1),m("span",O,w(a.time),1)]),m("div",z,w(a.msg),1)])]),_:2},1032,["notify","onClick"]))),128))])])])}));u.render=_,u.__scopeId="data-v-52c12e4a";export default u;
