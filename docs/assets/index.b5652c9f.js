import{t as f,i as u,c as l,N as h,F as _,l as c,S as g,u as v,r as y,R as L}from"./vendor.d38366eb.js";const E=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};E();const $=f('<header class="p-8 flex justify-between"><div class="flex"><img class="h-8 aspect-square" src="https://dtek.se/static/datalogo.svg" alt="Datas logo"><h1 class="text-zinc-900 text-2xl ml-3 font-mono font-semibold">Dtek</h1></div><nav class="flex gap-4 sm:mr-12 sm:gap-12"></nav></header>',9),N=f("<span></span>",2),b=()=>{const i=[{title:"Home",url:"/"},{title:"News",url:"/news"},{title:"Lunch",url:"/lunch"}];return(()=>{const s=$.cloneNode(!0),o=s.firstChild,n=o.nextSibling;return u(n,l(_,{each:i,children:({title:e,url:t})=>l(h,{class:"",href:t,end:!0,get children(){const r=N.cloneNode(!0);return u(r,e),r}})})),s})()},k="modulepreload",d={},x="/dtek/",a=function(s,o){return!o||o.length===0?s():Promise.all(o.map(n=>{if(n=`${x}${n}`,n in d)return;d[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":k,e||(r.as="script",r.crossOrigin=""),r.href=n,document.head.appendChild(r),e)return new Promise((m,p)=>{r.addEventListener("load",m),r.addEventListener("error",p)})})).then(()=>s())},O=[{path:"/",component:c(()=>a(()=>import("./Main.8dbc9c25.js"),["assets/Main.8dbc9c25.js","assets/vendor.d38366eb.js","assets/Menu.03acfcaf.js","assets/api.54eae58e.js","assets/NewsList.31774bcf.js"]))},{path:"/news",component:c(()=>a(()=>import("./News.5f93e01c.js"),["assets/News.5f93e01c.js","assets/vendor.d38366eb.js","assets/NewsList.31774bcf.js","assets/api.54eae58e.js"]))},{path:"/lunch",component:c(()=>a(()=>import("./Lunch.d17f375c.js"),["assets/Lunch.d17f375c.js","assets/vendor.d38366eb.js","assets/Menu.03acfcaf.js","assets/api.54eae58e.js"]))}],P=()=>{const i=v(O);return[l(b,{}),l(g,{get children(){return l(i,{})}})]};y(()=>l(L,{get base(){return"/dtek/"},get children(){return l(P,{})}}),document.getElementById("root"));
