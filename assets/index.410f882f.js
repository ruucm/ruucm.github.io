import{R as e,a as t,x as r}from"./vendor.7b7f74a0.js";let n;const o={},l=function(e,t){if(!t)return e();if(void 0===n){const e=document.createElement("link").relList;n=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in o)return;o[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const l=document.createElement("link");return l.rel=t?"stylesheet":n,t||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),t?new Promise(((e,t)=>{l.addEventListener("load",e),l.addEventListener("error",t)})):void 0}))).then((()=>e()))};l((()=>import("./imports.4fc4b28c.js")),["/assets/imports.4fc4b28c.js","/assets/vendor.7b7f74a0.js"]).then((async n=>{const o=(await l((()=>import("./App.1b7279c9.js")),["/assets/App.1b7279c9.js","/assets/vendor.7b7f74a0.js"])).default;e.render(t.createElement(r,null,t.createElement(t.StrictMode,null,t.createElement(o,null))),document.getElementById("root"))}));