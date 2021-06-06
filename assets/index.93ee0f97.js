import { R as ReactDOM } from "./vendor.c5ab3cfb.js";
let scriptRel;
const seen = {};
const __vitePreload = function preload(baseModule, deps) {
  if (!deps) {
    return baseModule();
  }
  if (scriptRel === void 0) {
    const relList = document.createElement("link").relList;
    scriptRel = relList && relList.supports && relList.supports("modulepreload") ? "modulepreload" : "preload";
  }
  return Promise.all(deps.map((dep) => {
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
var index = 'body {\n  background: hsl(0, 0%, 76%);\n}\n\n::-moz-selection {\n  /* Code for Firefox */\n  color: white;\n  background: rgba(0, 0, 255, 0.9);\n}\n\n::selection {\n  color: white;\n  background: rgba(0, 0, 255, 0.9);\n}\n\n* {\n  direction: ltr;\n  /* font-family: Georgia; */\n  font-family: Arial;\n}\n\n.tags {\n  position: relative;\n  color: #000;\n  text-decoration: none;\n}\n\n.tags::before {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  bottom: 0;\n  left: 0;\n  background-color: blue;\n  visibility: hidden;\n  transform: scaleX(0);\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.tags.active::before {\n  visibility: visible;\n  transform: scaleX(1);\n}\n';
__vitePreload(() => import("./imports.4997b8c4.js"), true ? ["/assets/imports.4997b8c4.js","/assets/vendor.c5ab3cfb.js"] : void 0).then(async (m) => {
  const App = (await __vitePreload(() => import("./App.c680f692.js"), true ? ["/assets/App.c680f692.js","/assets/vendor.c5ab3cfb.js"] : void 0)).default;
  ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
});
