_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("q1tI"),o=n.n(r),u=n("YFqc"),a=n.n(u),c=o.a.createElement;function f(){return c("div",null,c("div",null,"About us"),c("div",null,"Back to"," ",c(a.a,{href:"/",as:"/ruucm.github.io/"},c("a",null,"Home"))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var u,a=o(n("q1tI")),c=n("elyg"),f=(n("g/15"),n("nOHt")),i=new Map,s=window.IntersectionObserver,l={};var p=function(e,t){var n=u||(s?u=new s((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=a.default.useState(),o=r(n,2),u=o[0],i=o[1],h=(0,f.useRouter)(),v=h&&h.pathname||"/",w=a.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href);return{href:t,as:e.as?(0,c.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),y=w.href,g=w.as;a.default.useEffect((function(){if(t&&s&&u&&u.tagName&&(0,c.isLocalURL)(y)&&!l[y+"%"+g])return p(u,(function(){d(h,y,g)}))}),[t,u,y,g,h]);var E=e.children,_=e.replace,b=e.shallow,m=e.scroll;"string"===typeof E&&(E=a.default.createElement("a",null,E));var L=a.Children.only(E),J={ref:function(e){e&&i(e),L&&"object"===typeof L&&L.ref&&("function"===typeof L.ref?L.ref(e):"object"===typeof L.ref&&(L.ref.current=e))},onClick:function(e){L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:u}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,g,_,b,m)}};return t&&(J.onMouseEnter=function(e){(0,c.isLocalURL)(y)&&(L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),d(h,y,g,{priority:!0}))}),!e.passHref&&("a"!==L.type||"href"in L.props)||(J.href=(0,c.addBasePath)(g)),a.default.cloneElement(L,J)};t.default=h},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,2,1]]]);