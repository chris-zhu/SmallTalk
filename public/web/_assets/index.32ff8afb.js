import{n as r,q as e,S as t,s as n,v as a,x as i,y as o,z as u,A as l,d as c,B as s,C as f,D as v,E as h,G as d,H as g,I as p,J as y}from"./index.ad8ba5b8.js";var b=Math.min;function m(r){return o(r)?r:[]}var O=u((function(o){var u=r(o,m);return u.length&&u[0]===o[0]?function(o,u,l){for(var c=l?a:i,s=o[0].length,f=o.length,v=f,h=Array(f),d=1/0,g=[];v--;){var p=o[v];v&&u&&(p=r(p,e(u))),d=b(p.length,d),h[v]=!l&&(u||s>=120&&p.length>=120)?new t(v&&p):void 0}p=o[0];var y=-1,m=h[0];r:for(;++y<s&&g.length<d;){var O=p[y],j=u?u(O):O;if(O=l||0!==O?O:0,!(m?n(m,j):c(g,j,l))){for(v=f;--v;){var w=h[v];if(!(w?n(w,j):c(o[v],j,l)))continue r}m&&m.push(j),g.push(O)}}return g}(u):[]}));function j(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function w(){return(w=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function k(r){var e=!1;return r&&r.length&&r.every((function(r){return!r.required||(e=!0,!1)})),e}function P(r){return null==r?[]:Array.isArray(r)?r:[r]}function A(r,e,t){for(var n=r,a=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),i=0,o=a.length;i<o-1&&(n||t);++i){var u=a[i];if(!(u in n)){if(t)throw new Error("please transfer a valid name path to validate!");break}n=n[u]}return{o:n,k:a[i],v:n?n[a[i]]:null,isValid:n&&a[i]in n}}function S(r,e,t){var n=l(r),a={};Object.keys(e).forEach((function(r){a[r]={autoLink:!1,required:k(e[r])}})),a=c(a);var i=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return e.length?r.filter((function(r){var t=P(r.trigger||"change");return O(t,e).length})):r},o=null,u=function(r,e,t,n){var i=f([r],e,t,function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?Object(arguments[e]):{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})))),n.forEach((function(e){j(r,e,t[e])}))}return r}({validateMessages:p},n),!!n.validateFirst);return a[r].validateStatus="validating",i.catch((function(r){return r})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"validating"===a[r].validateStatus&&(a[r].validateStatus=e.length?"error":"success",a[r].help=e[0])})),i},b=function(t,n){var a=[],l=!0;t?a=Array.isArray(t)?t:[t]:(l=!1,a=Object.keys(e));var c=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,l=[],c={},s=function(o){var s=t[o],f=A(r,s,a);if(!f.isValid)return"continue";c[s]=f.v;var v=i(e[s],P(n&&n.trigger));v.length&&l.push(u(s,f.v,v,n||{}).then((function(){return{name:s,errors:[]}})).catch((function(r){return Promise.reject({name:s,errors:r})})))},f=0;f<t.length;f++)s(f);var v=g(l);o=v;var h=v.then((function(){return o===v?Promise.resolve(c):Promise.reject([])})).catch((function(r){var e=r.filter((function(r){return r&&r.errors.length}));return Promise.reject({values:c,errorFields:e,outOfDate:o!==v})}));return h.catch((function(r){return r})),h}(a,n||{},l);return c.catch((function(r){return r})),c},m=n,S=function(r){var t=[];Object.keys(e).forEach((function(e){var n=A(r,e,!1),a=A(m,e,!1);y(n.v,a.v)||t.push(e)})),b(t,{trigger:"change"}),m=l(r)},q=null==t?void 0:t.debounce;return v(r,q&&q.wait?h(S,q.wait,d(q,["wait"])):S,{immediate:t&&!!t.immediate,deep:!0}),v(e,(function(){t&&t.validateOnRuleChange&&b()}),{deep:!0}),{modelRef:r,rulesRef:e,initialModel:n,validateInfos:a,resetFields:function(){w(r,l(n)),s((function(){Object.keys(a).forEach((function(r){a[r]={autoLink:!1,required:k(e[r])}}))}))},validate:b,validateField:u,mergeValidateInfo:function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e={autoLink:!1},t=[],n=Array.isArray(r)?r:[r],a=0;a<n.length;a++){var i=n[a];"error"===(null==i?void 0:i.validateStatus)&&(e.validateStatus="error",i.help&&t.push(i.help)),e.required=e.required||(null==i?void 0:i.required)}return e.help=t.join("\n"),e}}}export{S as u};
