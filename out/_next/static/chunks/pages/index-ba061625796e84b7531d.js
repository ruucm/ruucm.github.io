_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"4NWR":function(t,e,r){(function(e){var r=17976931348623157e292,n="[object Map]",o="[object Set]",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,a=/^\[object .+?Constructor\]$/,f=/^0o[0-7]+$/i,l=/^(?:0|[1-9]\d*)$/,s="[\\ud800-\\udfff]",d="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",p="\\ud83c[\\udffb-\\udfff]",b="[^\\ud800-\\udfff]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",j="[\\ud800-\\udbff][\\udc00-\\udfff]",v="(?:"+d+"|"+p+")"+"?",y="[\\ufe0e\\ufe0f]?"+v+("(?:\\u200d(?:"+[b,h,j].join("|")+")[\\ufe0e\\ufe0f]?"+v+")*"),m="(?:"+[b+d+"?",d,h,j,s].join("|")+")",g=RegExp(p+"(?="+p+")|"+m+y,"g"),w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),O=parseInt,x="object"==typeof e&&e&&e.Object===Object&&e,k="object"==typeof self&&self&&self.Object===Object&&self,S=x||k||Function("return this")();function _(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,(function(e){return t[e]}))}function E(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function A(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}function M(t){return function(t){return w.test(t)}(t)?function(t){return t.match(g)||[]}(t):function(t){return t.split("")}(t)}var N,$,R=Function.prototype,I=Object.prototype,T=S["__core-js_shared__"],D=function(){var t=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),P=R.toString,W=I.hasOwnProperty,F=I.toString,L=RegExp("^"+P.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),q=S.Symbol,C=q?q.iterator:void 0,U=I.propertyIsEnumerable,K=Math.floor,V=(N=Object.keys,$=Object,function(t){return N($(t))}),z=Math.random,B=ut(S,"DataView"),H=ut(S,"Map"),J=ut(S,"Promise"),X=ut(S,"Set"),G=ut(S,"WeakMap"),Y=ft(B),Z=ft(H),Q=ft(J),tt=ft(X),et=ft(G);function rt(t,e){var r=st(t)||function(t){return function(t){return ht(t)&&dt(t)}(t)&&W.call(t,"callee")&&(!U.call(t,"callee")||"[object Arguments]"==F.call(t))}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!W.call(t,i)||o&&("length"==i||at(i,n))||r.push(i);return r}function nt(t){return!(!bt(t)||function(t){return!!D&&D in t}(t))&&(pt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(r){}return e}(t)?L:a).test(ft(t))}function ot(t){if(!function(t){var e=t&&t.constructor,r="function"==typeof e&&e.prototype||I;return t===r}(t))return V(t);var e=[];for(var r in Object(t))W.call(t,r)&&"constructor"!=r&&e.push(r);return e}function it(t,e){return t+K(z()*(e-t+1))}function ut(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return nt(r)?r:void 0}var ct=function(t){return F.call(t)};function at(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function ft(t){if(null!=t){try{return P.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function lt(t,e,a){var l,s,d,p=-1,b=function(t){if(!t)return[];if(dt(t))return function(t){return"string"==typeof t||!st(t)&&ht(t)&&"[object String]"==F.call(t)}(t)?M(t):function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(t);if(C&&t[C])return function(t){for(var e,r=[];!(e=t.next()).done;)r.push(e.value);return r}(t[C]());var e=ct(t);return(e==n?E:e==o?A:jt)(t)}(t),h=b.length,j=h-1;for((a?function(t,e,r){if(!bt(r))return!1;var n=typeof e;return!!("number"==n?dt(r)&&at(e,r.length):"string"==n&&e in r)&&function(t,e){return t===e||t!==t&&e!==e}(r[e],t)}(t,e,a):void 0===e)?e=1:(l=function(t){var e=function(t){return t?1/0===(t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||ht(t)&&"[object Symbol]"==F.call(t)}(t))return NaN;if(bt(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=bt(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=c.test(t);return r||f.test(t)?O(t.slice(2),r?2:8):u.test(t)?NaN:+t}(t))||-1/0===t?(t<0?-1:1)*r:t===t?t:0:0===t?t:0}(t),n=e%1;return e===e?n?e-n:e:0}(e),s=0,d=h,l===l&&(void 0!==d&&(l=l<=d?l:d),void 0!==s&&(l=l>=s?l:s)),e=l);++p<e;){var v=it(p,j),y=b[v];b[v]=b[p],b[p]=y}return b.length=e,b}(B&&"[object DataView]"!=ct(new B(new ArrayBuffer(1)))||H&&ct(new H)!=n||J&&"[object Promise]"!=ct(J.resolve())||X&&ct(new X)!=o||G&&"[object WeakMap]"!=ct(new G))&&(ct=function(t){var e=F.call(t),r="[object Object]"==e?t.constructor:void 0,i=r?ft(r):void 0;if(i)switch(i){case Y:return"[object DataView]";case Z:return n;case Q:return"[object Promise]";case tt:return o;case et:return"[object WeakMap]"}return e});var st=Array.isArray;function dt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!pt(t)}function pt(t){var e=bt(t)?F.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function bt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ht(t){return!!t&&"object"==typeof t}function jt(t){return t?_(t,function(t){return dt(t)?rt(t):ot(t)}(t)):[]}t.exports=function(t){return lt(t,4294967295)}}).call(this,r("yLpj"))},RNiq:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return l}));var n=r("nKUr"),o=r("q1tI"),i=r("e+cM"),u=[{title:"lighthouse design system",description:"Open-sourced Design System solution to re-invent designing and developing workflows.",duration:"2020 ~ ",outlink:"https://lighthouse.harbor.school"},{title:"harbor.school",description:"As the founder of Harbor School, I learned how software impacts people and society and markets.",duration:"2018 ~ 2020",link:"/portfolio/harbor-school"},{title:"framer korea",description:"",duration:"2018 ~ ",outlink:"https://framerkorea.org/"},{title:"freelance works",description:"Make web applications to solve real-world challenges designing new development structures.",duration:"2014 ~ ",link:"/portfolio/freelance-works"},{title:"vincent project",description:"",duration:"2014 ~ 2016",outlink:"https://www.instagram.com/vincent.project/"}],c=r("ZMKu"),a=r("4NWR"),f=r.n(a);function l(){var t=Object(o.useState)(u),e=t[0],r=t[1],a=Object(o.useState)(!1),l=a[0];a[1];return Object(n.jsxs)(i.b,{home:!0,children:[Object(n.jsx)("h3",{children:"Design Engineer"}),Object(n.jsx)("p",{children:"yongmin ruucm is an experienced front-end developer with a designer's mindset."}),Object(n.jsxs)(c.a,{children:[Object(n.jsx)("div",{style:{textAlign:"right",marginBottom:7},children:Object(n.jsx)("em",{onClick:function(){return r(f()(e))},style:{cursor:"pointer"},children:"\u2942"})}),Object(n.jsx)("div",{style:{display:"grid",gridTemplateColumns:l?"repeat(3, 1fr)":"1fr",gap:"20px"},children:e.map((function(t,e){return Object(n.jsx)(i.a,{title:t.title,duration:t.duration,description:t.description,outlink:t.outlink,link:t.link},e)}))})]})]})}},"e+cM":function(t,e,r){"use strict";r.d(e,"a",(function(){return n.a})),r.d(e,"b",(function(){return l}));var n=r("UeDS");function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(a){o=!0,i=a}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=r("nKUr"),c=r("YFqc"),a=r.n(c),f=r("q1tI");function l(t){var e=t.children,r=(t.home,i(function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{thresholdTime:0}).thresholdTime,e=Object(f.useState)(!1),r=e[0],n=e[1],o=Object(f.useRef)(null),i=!1,u=t||0,c=function(){clearTimeout(),i=!0,n(!0)},a=function(){i=!1,setTimeout((function(){!1===i&&n(!1)}),u)};return Object(f.useEffect)((function(){var t=(null===o||void 0===o?void 0:o.current)||window;if(t)return t.addEventListener("mouseover",c),t.addEventListener("mouseout",a),function(){t.removeEventListener("mouseover",c),t.removeEventListener("mouseout",a)}}),[o.current]),[o,r]}(),2)),n=r[0],o=r[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsx)(a.a,{href:"/",children:Object(u.jsxs)("h2",{style:{display:"inline-block",padding:5,cursor:"pointer"},ref:n,children:[o?"\uc548\ub155 \ud558\uc138\uc694,":"Hello,",Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:{textDecoration:"underline"},children:"I'm yongmin ruucm."})]})})}),Object(u.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"4fr 1fr"},children:[Object(u.jsx)("main",{children:e}),Object(u.jsxs)("footer",{style:{WebkitWritingMode:"vertical-rl",MsWritingMode:"tb-rl",writingMode:"vertical-rl"},children:[Object(u.jsx)("a",{href:"http://twitter.com/ruucm",target:"_blank",children:"ruucm.a@gmail.com"}),Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:"http://twitter.com/ruucm",target:"_blank",children:"@ruucm"})]})]})]})}},vlRD:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])},yLpj:function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}t.exports=r}},[["vlRD",0,1,3,2,4]]]);