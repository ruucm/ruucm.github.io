webpackHotUpdate_N_E("pages/css-to-jsx",{

/***/ "./pages/css-to-jsx.js":
/*!*****************************!*\
  !*** ./pages/css-to-jsx.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/transform */ \"./utils/transform.js\");\n\n\nvar _jsxFileName = \"/Users/ruucm/MyDocuments/Carving/projects/ruucm.github.io (ruucm.me)/pages/css-to-jsx.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction CSSToJSX() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    grape: true,\n    textarea0: \"\"\n  }),\n      formValues = _useState[0],\n      setFormValues = _useState[1];\n\n  function handleChange(event) {\n    var target = event.target;\n    var newValue = target.type === \"checkbox\" ? target.checked : target.value;\n    console.log(\"newValue\", newValue);\n    var name = target.name;\n    setFormValues(_objectSpread(_objectSpread({}, formValues), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, newValue)));\n  }\n\n  console.log(\"formValues\", formValues); // var testCSS = `a{ width: 300; height: 20%; }`;\n  // var testResult = transform(testCSS);\n  // console.log(\"testResult\", testResult);\n  // let trasformed = transform(`hey${formValues[\"textarea0\"]}`);\n  // console.log(\"trasformed\", trasformed);\n\n  return __jsx(\"form\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"textarea\", {\n    placeholder: \"textarea0\",\n    name: \"textarea0\",\n    value: formValues[\"textarea0\"],\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(CSSToJSX, \"9I8qU1MNLs96UHaFUDVTRLhgTms=\");\n\n_c = CSSToJSX;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CSSToJSX);\n\nvar _c;\n\n$RefreshReg$(_c, \"CSSToJSX\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3NzLXRvLWpzeC5qcz8xNjkzIl0sIm5hbWVzIjpbIkNTU1RvSlNYIiwidXNlU3RhdGUiLCJncmFwZSIsInRleHRhcmVhMCIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuZXdWYWx1ZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUM7QUFDM0NDLFNBQUssRUFBRSxJQURvQztBQUUzQ0MsYUFBUyxFQUFFO0FBRmdDLEdBQUQsQ0FEMUI7QUFBQSxNQUNYQyxVQURXO0FBQUEsTUFDQ0MsYUFERDs7QUFNbEIsV0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0IsUUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQXJCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHRCxNQUFNLENBQUNFLElBQVAsS0FBZ0IsVUFBaEIsR0FBNkJGLE1BQU0sQ0FBQ0csT0FBcEMsR0FBOENILE1BQU0sQ0FBQ0ksS0FBdEU7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkwsUUFBeEI7QUFDQSxRQUFNTSxJQUFJLEdBQUdQLE1BQU0sQ0FBQ08sSUFBcEI7QUFDQVYsaUJBQWEsaUNBQU1ELFVBQU4scUdBQW1CVyxJQUFuQixFQUEwQk4sUUFBMUIsR0FBYjtBQUNEOztBQUVESSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCVixVQUExQixFQWRrQixDQWdCbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGVBQVcsRUFBQyxXQURkO0FBRUUsUUFBSSxFQUFDLFdBRlA7QUFHRSxTQUFLLEVBQUVBLFVBQVUsQ0FBQyxXQUFELENBSG5CO0FBSUUsWUFBUSxFQUFFRSxZQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREY7QUFZRDs7R0FqQ1FOLFE7O0tBQUFBLFE7QUFtQ01BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY3NzLXRvLWpzeC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi4vdXRpbHMvdHJhbnNmb3JtXCI7XG5cbmZ1bmN0aW9uIENTU1RvSlNYKCkge1xuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgZ3JhcGU6IHRydWUsXG4gICAgdGV4dGFyZWEwOiBcIlwiLFxuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coXCJuZXdWYWx1ZVwiLCBuZXdWYWx1ZSk7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuICAgIHNldEZvcm1WYWx1ZXMoeyAuLi5mb3JtVmFsdWVzLCBbbmFtZV06IG5ld1ZhbHVlIH0pO1xuICB9XG5cbiAgY29uc29sZS5sb2coXCJmb3JtVmFsdWVzXCIsIGZvcm1WYWx1ZXMpO1xuXG4gIC8vIHZhciB0ZXN0Q1NTID0gYGF7IHdpZHRoOiAzMDA7IGhlaWdodDogMjAlOyB9YDtcbiAgLy8gdmFyIHRlc3RSZXN1bHQgPSB0cmFuc2Zvcm0odGVzdENTUyk7XG4gIC8vIGNvbnNvbGUubG9nKFwidGVzdFJlc3VsdFwiLCB0ZXN0UmVzdWx0KTtcbiAgLy8gbGV0IHRyYXNmb3JtZWQgPSB0cmFuc2Zvcm0oYGhleSR7Zm9ybVZhbHVlc1tcInRleHRhcmVhMFwiXX1gKTtcbiAgLy8gY29uc29sZS5sb2coXCJ0cmFzZm9ybWVkXCIsIHRyYXNmb3JtZWQpO1xuICByZXR1cm4gKFxuICAgIDxmb3JtPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIHBsYWNlaG9sZGVyPVwidGV4dGFyZWEwXCJcbiAgICAgICAgbmFtZT1cInRleHRhcmVhMFwiXG4gICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzW1widGV4dGFyZWEwXCJdfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICAgIHsvKiA8dGV4dGFyZWEgdmFsdWU9e3RyYXNmb3JtZWQgJiYgdHJhc2Zvcm1lZC5oZXl9IC8+ICovfVxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ1NTVG9KU1g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/css-to-jsx.js\n");

/***/ })

})