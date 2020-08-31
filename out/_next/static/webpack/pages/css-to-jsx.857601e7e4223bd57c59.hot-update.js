webpackHotUpdate_N_E("pages/css-to-jsx",{

/***/ "./utils/transform.js":
/*!****************************!*\
  !*** ./utils/transform.js ***!
  \****************************/
/*! exports provided: transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transform\", function() { return transform; });\n/* harmony import */ var css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css */ \"./node_modules/css/index.js\");\n/* harmony import */ var css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css__WEBPACK_IMPORTED_MODULE_0__);\n //\n// Transform implementation or originally thanks to\n// https://github.com/raphamorim/native-css\n//\n\nfunction transformRules(self, rules, result) {\n  rules.forEach(function (rule) {\n    var obj = {};\n\n    if (rule.type === \"media\") {\n      var name = mediaNameGenerator(rule.media);\n      var media = result[name] = result[name] || {\n        __expression__: rule.media\n      };\n      transformRules(self, rule.rules, media);\n    } else if (rule.type === \"rule\") {\n      rule.declarations.forEach(function (declaration) {\n        if (declaration.type === \"declaration\") {\n          var cleanProperty = cleanPropertyName(declaration.property);\n          obj[cleanProperty] = declaration.value;\n        }\n      });\n      rule.selectors.forEach(function (selector) {\n        var name = nameGenerator(selector.trim());\n        result[name] = obj;\n      });\n    }\n  });\n}\n\nvar cleanPropertyName = function cleanPropertyName(name) {\n  // turn things like 'align-items' into 'alignItems'\n  name = name.replace(/(-.)/g, function (v) {\n    return v[1].toUpperCase();\n  });\n  return name;\n};\n\nvar mediaNameGenerator = function mediaNameGenerator(name) {\n  return \"@media \" + name;\n};\n\nvar nameGenerator = function nameGenerator(name) {\n  name = name.replace(/\\s\\s+/g, \" \");\n  name = name.replace(/[^a-zA-Z0-9]/g, \"_\");\n  name = name.replace(/^_+/g, \"\");\n  name = name.replace(/_+$/g, \"\");\n  return name;\n};\n\nfunction transform(inputCssText) {\n  if (!inputCssText) {\n    throw new Error(\"missing css text to transform\");\n  } // If the input \"css\" doesn't wrap it with a css class (raw styles)\n  // we need to wrap it with a style so the css parser doesn't choke.\n\n\n  var bootstrapWithCssClass = false;\n\n  if (inputCssText.indexOf(\"{\") === -1) {\n    bootstrapWithCssClass = true;\n    inputCssText = \".bootstrapWithCssClass { \".concat(inputCssText, \" }\");\n  }\n\n  console.log(\"cssParser\", css__WEBPACK_IMPORTED_MODULE_0___default.a);\n  console.log(\"inputCssText\", inputCssText);\n  var css = \"\"; // var css = cssParser.parse(inputCssText);\n\n  var result = {};\n  transformRules(this, css.stylesheet.rules, result); // Don't expose the implementation detail of our wrapped css class.\n\n  if (bootstrapWithCssClass) {\n    result = result.bootstrapWithCssClass;\n  }\n\n  return result;\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdHJhbnNmb3JtLmpzPzkxZjMiXSwibmFtZXMiOlsidHJhbnNmb3JtUnVsZXMiLCJzZWxmIiwicnVsZXMiLCJyZXN1bHQiLCJmb3JFYWNoIiwicnVsZSIsIm9iaiIsInR5cGUiLCJuYW1lIiwibWVkaWFOYW1lR2VuZXJhdG9yIiwibWVkaWEiLCJfX2V4cHJlc3Npb25fXyIsImRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uIiwiY2xlYW5Qcm9wZXJ0eSIsImNsZWFuUHJvcGVydHlOYW1lIiwicHJvcGVydHkiLCJ2YWx1ZSIsInNlbGVjdG9ycyIsInNlbGVjdG9yIiwibmFtZUdlbmVyYXRvciIsInRyaW0iLCJyZXBsYWNlIiwidiIsInRvVXBwZXJDYXNlIiwidHJhbnNmb3JtIiwiaW5wdXRDc3NUZXh0IiwiRXJyb3IiLCJib290c3RyYXBXaXRoQ3NzQ2xhc3MiLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImNzc1BhcnNlciIsImNzcyIsInN0eWxlc2hlZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEJDLEtBQTlCLEVBQXFDQyxNQUFyQyxFQUE2QztBQUMzQ0QsT0FBSyxDQUFDRSxPQUFOLENBQWMsVUFBVUMsSUFBVixFQUFnQjtBQUM1QixRQUFJQyxHQUFHLEdBQUcsRUFBVjs7QUFDQSxRQUFJRCxJQUFJLENBQUNFLElBQUwsS0FBYyxPQUFsQixFQUEyQjtBQUN6QixVQUFJQyxJQUFJLEdBQUdDLGtCQUFrQixDQUFDSixJQUFJLENBQUNLLEtBQU4sQ0FBN0I7QUFDQSxVQUFJQSxLQUFLLEdBQUlQLE1BQU0sQ0FBQ0ssSUFBRCxDQUFOLEdBQWVMLE1BQU0sQ0FBQ0ssSUFBRCxDQUFOLElBQWdCO0FBQzFDRyxzQkFBYyxFQUFFTixJQUFJLENBQUNLO0FBRHFCLE9BQTVDO0FBR0FWLG9CQUFjLENBQUND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Y2VzQ29udGVudCI6WyJpbXBvcnQgY3NzUGFyc2VyIGZyb20gXCJjc3NcIjtcblxuLy9cbi8vIFRyYW5zZm9ybSBpbXBsZW1lbnRhdGlvbiBvciBvcmlnaW5hbGx5IHRoYW5rcyB0b1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3JhcGhhbW9yaW0vbmF0aXZlLWNzc1xuLy9cblxuZnVuY3Rpb24gdHJhbnNmb3JtUnVsZXMoc2VsZiwgcnVsZXMsIHJlc3VsdCkge1xuICBydWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGlmIChydWxlLnR5cGUgPT09IFwibWVkaWFcIikge1xuICAgICAgdmFyIG5hbWUgPSBtZWRpYU5hbWVHZW5lcmF0b3IocnVsZS5tZWRpYSk7XG4gICAgICB2YXIgbWVkaWEgPSAocmVzdWx0W25hbWVdID0gcmVzdWx0W25hbWVdIHx8IHtcbiAgICAgICAgX19leHByZXNzaW9uX186IHJ1bGUubWVkaWEsXG4gICAgICB9KTtcbiAgICAgIHRyYW5zZm9ybVJ1bGVzKHNlbGYsIHJ1bGUucnVsZXMsIG1lZGlhKTtcbiAgICB9IGVsc2UgaWYgKHJ1bGUudHlwZSA9PT0gXCJydWxlXCIpIHtcbiAgICAgIHJ1bGUuZGVjbGFyYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKGRlY2xhcmF0aW9uKSB7XG4gICAgICAgIGlmIChkZWNsYXJhdGlvbi50eXBlID09PSBcImRlY2xhcmF0aW9uXCIpIHtcbiAgICAgICAgICB2YXIgY2xlYW5Qcm9wZXJ0eSA9IGNsZWFuUHJvcGVydHlOYW1lKGRlY2xhcmF0aW9uLnByb3BlcnR5KTtcbiAgICAgICAgICBvYmpbY2xlYW5Qcm9wZXJ0eV0gPSBkZWNsYXJhdGlvbi52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBydWxlLnNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICB2YXIgbmFtZSA9IG5hbWVHZW5lcmF0b3Ioc2VsZWN0b3IudHJpbSgpKTtcbiAgICAgICAgcmVzdWx0W25hbWVdID0gb2JqO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIGNsZWFuUHJvcGVydHlOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgLy8gdHVybiB0aGluZ3MgbGlrZSAnYWxpZ24taXRlbXMnIGludG8gJ2FsaWduSXRlbXMnXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoLygtLikvZywgZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdlsxXS50b1VwcGVyQ2FzZSgpO1xuICB9KTtcblxuICByZXR1cm4gbmFtZTtcbn07XG5cbnZhciBtZWRpYU5hbWVHZW5lcmF0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gXCJAbWVkaWEgXCIgKyBuYW1lO1xufTtcblxudmFyIG5hbWVHZW5lcmF0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9cXHNcXHMrL2csIFwiIFwiKTtcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW15hLXpBLVowLTldL2csIFwiX1wiKTtcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvXl8rL2csIFwiXCIpO1xuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9fKyQvZywgXCJcIik7XG5cbiAgcmV0dXJuIG5hbWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtKGlucHV0Q3NzVGV4dCkge1xuICBpZiAoIWlucHV0Q3NzVGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIm1pc3NpbmcgY3NzIHRleHQgdG8gdHJhbnNmb3JtXCIpO1xuICB9XG5cbiAgLy8gSWYgdGhlIGlucHV0IFwiY3NzXCIgZG9lc24ndCB3cmFwIGl0IHdpdGggYSBjc3MgY2xhc3MgKHJhdyBzdHlsZXMpXG4gIC8vIHdlIG5lZWQgdG8gd3JhcCBpdCB3aXRoIGEgc3R5bGUgc28gdGhlIGNzcyBwYXJzZXIgZG9lc24ndCBjaG9rZS5cbiAgdmFyIGJvb3RzdHJhcFdpdGhDc3NDbGFzcyA9IGZhbHNlO1xuICBpZiAoaW5wdXRDc3NUZXh0LmluZGV4T2YoXCJ7XCIpID09PSAtMSkge1xuICAgIGJvb3RzdHJhcFdpdGhDc3NDbGFzcyA9IHRydWU7XG4gICAgaW5wdXRDc3NUZXh0ID0gYC5ib290c3RyYXBXaXRoQ3NzQ2xhc3MgeyAke2lucHV0Q3NzVGV4dH0gfWA7XG4gIH1cblxuICBjb25zb2xlLmxvZyhcImNzc1BhcnNlclwiLCBjc3NQYXJzZXIpO1xuICBjb25zb2xlLmxvZyhcImlucHV0Q3NzVGV4dFwiLCBpbnB1dENzc1RleHQpO1xuXG4gIHZhciBjc3MgPSBcIlwiO1xuICAvLyB2YXIgY3NzID0gY3NzUGFyc2VyLnBhcnNlKGlucHV0Q3NzVGV4dCk7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdHJhbnNmb3JtUnVsZXModGhpcywgY3NzLnN0eWxlc2hlZXQucnVsZXMsIHJlc3VsdCk7XG5cbiAgLy8gRG9uJ3QgZXhwb3NlIHRoZSBpbXBsZW1lbnRhdGlvbiBkZXRhaWwgb2Ygb3VyIHdyYXBwZWQgY3NzIGNsYXNzLlxuICBpZiAoYm9vdHN0cmFwV2l0aENzc0NsYXNzKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LmJvb3RzdHJhcFdpdGhDc3NDbGFzcztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/transform.js\n");

/***/ })

})