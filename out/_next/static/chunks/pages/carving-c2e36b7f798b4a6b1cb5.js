_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{M9Q5:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/carving",function(){return t("mL8+")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var u,a=o(t("q1tI")),c=t("elyg"),i=(t("g/15"),t("nOHt")),f=new Map,l=window.IntersectionObserver,s={};var p=function(e,n){var t=u||(l?u=new l((function(e){e.forEach((function(e){if(f.has(e.target)){var n=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),f.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),f.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}f.delete(e)}):function(){}};function d(e,n,t,r){(0,c.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),s[n+"%"+t]=!0)}var v=function(e){var n=!1!==e.prefetch,t=a.default.useState(),o=r(t,2),u=o[0],f=o[1],v=(0,i.useRouter)(),h=v&&v.pathname||"/",w=a.default.useMemo((function(){var n=(0,c.resolveHref)(h,e.href);return{href:n,as:e.as?(0,c.resolveHref)(h,e.as):n}}),[h,e.href,e.as]),g=w.href,y=w.as;a.default.useEffect((function(){if(n&&l&&u&&u.tagName&&(0,c.isLocalURL)(g)&&!s[g+"%"+y])return p(u,(function(){d(v,g,y)}))}),[n,u,g,y,v]);var E=e.children,_=e.replace,m=e.shallow,b=e.scroll;"string"===typeof E&&(E=a.default.createElement("a",null,E));var L=a.Children.only(E),M={ref:function(e){e&&f(e),L&&"object"===typeof L&&L.ref&&("function"===typeof L.ref?L.ref(e):"object"===typeof L.ref&&(L.ref.current=e))},onClick:function(e){L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,u,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:u}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,g,y,_,m,b)}};return n&&(M.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),d(v,g,y,{priority:!0}))}),!e.passHref&&("a"!==L.type||"href"in L.props)||(M.href=(0,c.addBasePath)(y)),a.default.cloneElement(L,M)};n.default=v},"mL8+":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i}));var r=t("q1tI"),o=t.n(r),u=t("YFqc"),a=t.n(u),c=o.a.createElement;function i(){return c("div",null,c("div",null,"Carving \ud83e\uddf6"),c("h1",null,"projects"),c("h1",null,"blocks"),c("div",null,"Back to"," ",c(a.a,{href:"/",as:"/ruucm.github.io/"},c("a",null,"Home"))))}}},[["M9Q5",0,1,2]]]);