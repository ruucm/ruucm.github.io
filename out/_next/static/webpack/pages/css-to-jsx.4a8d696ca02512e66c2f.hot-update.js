webpackHotUpdate_N_E("pages/css-to-jsx",{

/***/ "./pages/css-to-jsx.js":
/*!*****************************!*\
  !*** ./pages/css-to-jsx.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/transform */ \"./utils/transform.js\");\n\n\nvar _jsxFileName = \"/Users/ruucm/MyDocuments/Carving/projects/ruucm.github.io (ruucm.me)/pages/css-to-jsx.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nfunction CSSToJSX() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    grape: true,\n    textarea0: \"\"\n  }),\n      formValues = _useState[0],\n      setFormValues = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      transformed = _useState2[0],\n      setTransformed = _useState2[1];\n\n  function handleChange(event) {\n    var target = event.target;\n    var newValue = target.type === \"checkbox\" ? target.checked : target.value;\n    console.log(\"newValue\", newValue);\n    var name = target.name;\n    setFormValues(_objectSpread(_objectSpread({}, formValues), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, newValue)));\n  }\n\n  console.log(\"formValues\", formValues); // var testCSS = `a{ width: 300; height: 20%; }`;\n  // var testResult = transform(testCSS);\n  // console.log(\"testResult\", testResult);\n  // let transformed = transform(`hey${formValues[\"textarea0\"]}`);\n  // console.log(\"transformed\", transformed);\n\n  console.log(\"transformed\", transformed);\n  return __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault(); // console.log(\"hey\");\n\n      var transformed = Object(_utils_transform__WEBPACK_IMPORTED_MODULE_2__[\"transform\"])(\"result\".concat(formValues[\"textarea0\"]));\n      console.log(\"transformed\", transformed);\n      setTransformed(transformed[\"result\"]);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"textarea\", {\n    placeholder: \"textarea0\",\n    name: \"textarea0\",\n    value: formValues[\"textarea0\"],\n    onChange: handleChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }), __jsx(\"textarea\", {\n    value: JSON.stringify(transformed),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(CSSToJSX, \"t/z4LFXj5uvxP0oLWvzB7dR8WWk=\");\n\n_c = CSSToJSX;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CSSToJSX);\n\nvar _c;\n\n$RefreshReg$(_c, \"CSSToJSX\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3NzLXRvLWpzeC5qcz8xNjkzIl0sIm5hbWVzIjpbIkNTU1RvSlNYIiwidXNlU3RhdGUiLCJncmFwZSIsInRleHRhcmVhMCIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwidHJhbnNmb3JtZWQiLCJzZXRUcmFuc2Zvcm1lZCIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmV3VmFsdWUiLCJ0eXBlIiwiY2hlY2tlZCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmFuc2Zvcm0iLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNrQkMsc0RBQVEsQ0FBQztBQUMzQ0MsU0FBSyxFQUFFLElBRG9DO0FBRTNDQyxhQUFTLEVBQUU7QUFGZ0MsR0FBRCxDQUQxQjtBQUFBLE1BQ1hDLFVBRFc7QUFBQSxNQUNDQyxhQUREOztBQUFBLG1CQUtvQkosc0RBQVEsQ0FBQyxFQUFELENBTDVCO0FBQUEsTUFLWEssV0FMVztBQUFBLE1BS0VDLGNBTEY7O0FBT2xCLFdBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLFFBQU1DLE1BQU0sR0FBR0QsS0FBSyxDQUFDQyxNQUFyQjtBQUNBLFFBQU1DLFFBQVEsR0FBR0QsTUFBTSxDQUFDRSxJQUFQLEtBQWdCLFVBQWhCLEdBQTZCRixNQUFNLENBQUNHLE9BQXBDLEdBQThDSCxNQUFNLENBQUNJLEtBQXRFO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JMLFFBQXhCO0FBQ0EsUUFBTU0sSUFBSSxHQUFHUCxNQUFNLENBQUNPLElBQXBCO0FBQ0FaLGlCQUFhLGlDQUFNRCxVQUFOLHFHQUFtQmEsSUFBbkIsRUFBMEJOLFFBQTFCLEdBQWI7QUFDRDs7QUFFREksU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQlosVUFBMUIsRUFma0IsQ0FpQmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FXLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJWLFdBQTNCO0FBQ0EsU0FDRTtBQUNFLFlBQVEsRUFBRSxrQkFBQ1ksQ0FBRCxFQUFPO0FBQ2ZBLE9BQUMsQ0FBQ0MsY0FBRixHQURlLENBRWY7O0FBQ0EsVUFBSWIsV0FBVyxHQUFHYyxrRUFBUyxpQkFBVWhCLFVBQVUsQ0FBQyxXQUFELENBQXBCLEVBQTNCO0FBQ0FXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJWLFdBQTNCO0FBQ0FDLG9CQUFjLENBQUNELFdBQVcsQ0FBQyxRQUFELENBQVosQ0FBZDtBQUNELEtBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQ0UsZUFBVyxFQUFDLFdBRGQ7QUFFRSxRQUFJLEVBQUMsV0FGUDtBQUdFLFNBQUssRUFBRUYsVUFBVSxDQUFDLFdBQUQsQ0FIbkI7QUFJRSxZQUFRLEVBQUVJLFlBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBZUU7QUFBVSxTQUFLLEVBQUVhLElBQUksQ0FBQ0MsU0FBTCxDQUFlaEIsV0FBZixDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsRUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FERjtBQXFCRDs7R0E1Q1FOLFE7O0tBQUFBLFE7QUE4Q01BLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY3NzLXRvLWpzeC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi4vdXRpbHMvdHJhbnNmb3JtXCI7XG5cbmZ1bmN0aW9uIENTU1RvSlNYKCkge1xuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgZ3JhcGU6IHRydWUsXG4gICAgdGV4dGFyZWEwOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW3RyYW5zZm9ybWVkLCBzZXRUcmFuc2Zvcm1lZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coXCJuZXdWYWx1ZVwiLCBuZXdWYWx1ZSk7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuICAgIHNldEZvcm1WYWx1ZXMoeyAuLi5mb3JtVmFsdWVzLCBbbmFtZV06IG5ld1ZhbHVlIH0pO1xuICB9XG5cbiAgY29uc29sZS5sb2coXCJmb3JtVmFsdWVzXCIsIGZvcm1WYWx1ZXMpO1xuXG4gIC8vIHZhciB0ZXN0Q1NTID0gYGF7IHdpZHRoOiAzMDA7IGhlaWdodDogMjAlOyB9YDtcbiAgLy8gdmFyIHRlc3RSZXN1bHQgPSB0cmFuc2Zvcm0odGVzdENTUyk7XG4gIC8vIGNvbnNvbGUubG9nKFwidGVzdFJlc3VsdFwiLCB0ZXN0UmVzdWx0KTtcbiAgLy8gbGV0IHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtKGBoZXkke2Zvcm1WYWx1ZXNbXCJ0ZXh0YXJlYTBcIl19YCk7XG4gIC8vIGNvbnNvbGUubG9nKFwidHJhbnNmb3JtZWRcIiwgdHJhbnNmb3JtZWQpO1xuICBjb25zb2xlLmxvZyhcInRyYW5zZm9ybWVkXCIsIHRyYW5zZm9ybWVkKTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJoZXlcIik7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1lZCA9IHRyYW5zZm9ybShgcmVzdWx0JHtmb3JtVmFsdWVzW1widGV4dGFyZWEwXCJdfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zZm9ybWVkXCIsIHRyYW5zZm9ybWVkKTtcbiAgICAgICAgc2V0VHJhbnNmb3JtZWQodHJhbnNmb3JtZWRbXCJyZXN1bHRcIl0pO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ0ZXh0YXJlYTBcIlxuICAgICAgICBuYW1lPVwidGV4dGFyZWEwXCJcbiAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXNbXCJ0ZXh0YXJlYTBcIl19XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgICAgPHRleHRhcmVhIHZhbHVlPXtKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm1lZCl9IC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENTU1RvSlNYO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/css-to-jsx.js\n");

/***/ })

})