import{t as n,i as a,a as i,e as d,f as m,c as r,F as f,S as u}from"./vendor.537e7905.js";import{a as p}from"./api.54eae58e.js";const h=n('<article class=""><h1 class="text-xl font-semibold"></h1><div class="prose prose-xs my-1"></div><p></p></article>',8),b=new Intl.DateTimeFormat("sv-SE",{dateStyle:"full",timeStyle:"short"}),g=e=>{const t=()=>e.body;return(()=>{const s=h.cloneNode(!0),o=s.firstChild,l=o.nextSibling,c=l.nextSibling;return a(o,()=>e.title),a(c,()=>b.format(e.published)),i(()=>l.innerHTML=t()),s})()},v=n("<div>Loading...</div>",2),N=n("<div>No news for now</div>",2),S=()=>{const[e]=d(p);return m(()=>{console.log(e())}),r(u,{get fallback(){return v.cloneNode(!0)},get children(){return r(f,{get each(){return e()},get fallback(){return N.cloneNode(!0)},children:t=>r(g,t)})}})};export{S as N};
