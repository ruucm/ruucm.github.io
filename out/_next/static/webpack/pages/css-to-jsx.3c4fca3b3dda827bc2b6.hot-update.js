webpackHotUpdate_N_E("pages/css-to-jsx",{

/***/ "./pages/css-to-jsx.js":
/*!*****************************!*\
  !*** ./pages/css-to-jsx.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/transform */ \"./utils/transform.js\");\n/* harmony import */ var _hooks_use_key_press__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-key-press */ \"./hooks/use-key-press.js\");\n\n\nvar _jsxFileName = \"/Users/ruucm/MyDocuments/Carving/projects/ruucm.github.io (ruucm.me)/pages/css-to-jsx.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction CSSToJSX() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    textarea0: \"\"\n  }),\n      formValues = _useState[0],\n      setFormValues = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      transformed = _useState2[0],\n      setTransformed = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      error = _useState3[0],\n      setError = _useState3[1];\n\n  function handleChange(event) {\n    var target = event.target;\n    var newValue = target.type === \"checkbox\" ? target.checked : target.value;\n    console.log(\"newValue\", newValue);\n    var name = target.name;\n    setFormValues(_objectSpread(_objectSpread({}, formValues), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, name, newValue)));\n  }\n\n  function handleSubmit() {\n    try {\n      var res = Object(_utils_transform__WEBPACK_IMPORTED_MODULE_2__[\"transform\"])(\"myCSS\".concat(formValues[\"textarea0\"]));\n      console.log(\"res\", res);\n      setTransformed(res[\"myCSS\"]);\n      setError(\"\");\n    } catch (error) {\n      console.error(\"error on transform\", error);\n      setError(error.message);\n    }\n  }\n\n  var enterPress = Object(_hooks_use_key_press__WEBPACK_IMPORTED_MODULE_3__[\"useKeyPress\"])(\"Enter\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (enterPress) handleSubmit();\n  }, [enterPress]);\n  console.log(\"formValues\", formValues);\n  return __jsx(\"form\", {\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      handleSubmit();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      display: \"grid\",\n      gridTemplateColumns: \"1fr 1fr\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"textarea\", {\n    placeholder: \"{\\n  background: white;\\n  width: 30px;\\n  height: 30px;\\n  padding: 6px;\\n  border-radius: 100px;\\n}\",\n    name: \"textarea0\",\n    value: formValues[\"textarea0\"],\n    onChange: handleChange,\n    rows: 30,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }), __jsx(\"textarea\", {\n    value: JSON.stringify(transformed),\n    rows: 30,\n    readOnly: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  })), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }), error && __jsx(\"div\", {\n    style: {\n      fontWeight: 700,\n      color: \"red\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, error), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(CSSToJSX, \"ET0ueirtGLfDTqtmM7qUhpPqNFc=\", false, function () {\n  return [_hooks_use_key_press__WEBPACK_IMPORTED_MODULE_3__[\"useKeyPress\"]];\n});\n\n_c = CSSToJSX;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CSSToJSX);\n\nvar _c;\n\n$RefreshReg$(_c, \"CSSToJSX\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3NzLXRvLWpzeC5qcz8xNjkzIl0sIm5hbWVzIjpbIkNTU1RvSlNYIiwidXNlU3RhdGUiLCJ0ZXh0YXJlYTAiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsInRyYW5zZm9ybWVkIiwic2V0VHJhbnNmb3JtZWQiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuZXdWYWx1ZSIsInR5cGUiLCJjaGVja2VkIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImhhbmRsZVN1Ym1pdCIsInJlcyIsInRyYW5zZm9ybSIsIm1lc3NhZ2UiLCJlbnRlclByZXNzIiwidXNlS2V5UHJlc3MiLCJ1c2VFZmZlY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb250V2VpZ2h0IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDO0FBQzNDQyxhQUFTLEVBQUU7QUFEZ0MsR0FBRCxDQUQxQjtBQUFBLE1BQ1hDLFVBRFc7QUFBQSxNQUNDQyxhQUREOztBQUFBLG1CQUlvQkgsc0RBQVEsQ0FBQyxFQUFELENBSjVCO0FBQUEsTUFJWEksV0FKVztBQUFBLE1BSUVDLGNBSkY7O0FBQUEsbUJBS1FMLHNEQUFRLENBQUMsRUFBRCxDQUxoQjtBQUFBLE1BS1hNLEtBTFc7QUFBQSxNQUtKQyxRQUxJOztBQU9sQixXQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMzQixRQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBckI7QUFDQSxRQUFNQyxRQUFRLEdBQUdELE1BQU0sQ0FBQ0UsSUFBUCxLQUFnQixVQUFoQixHQUE2QkYsTUFBTSxDQUFDRyxPQUFwQyxHQUE4Q0gsTUFBTSxDQUFDSSxLQUF0RTtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCTCxRQUF4QjtBQUNBLFFBQU1NLElBQUksR0FBR1AsTUFBTSxDQUFDTyxJQUFwQjtBQUNBZCxpQkFBYSxpQ0FBTUQsVUFBTixxR0FBbUJlLElBQW5CLEVBQTBCTixRQUExQixHQUFiO0FBQ0Q7O0FBQ0QsV0FBU08sWUFBVCxHQUF3QjtBQUN0QixRQUFJO0FBQ0YsVUFBSUMsR0FBRyxHQUFHQyxrRUFBUyxnQkFBU2xCLFVBQVUsQ0FBQyxXQUFELENBQW5CLEVBQW5CO0FBQ0FhLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJHLEdBQW5CO0FBQ0FkLG9CQUFjLENBQUNjLEdBQUcsQ0FBQyxPQUFELENBQUosQ0FBZDtBQUNBWixjQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0QsS0FMRCxDQUtFLE9BQU9ELEtBQVAsRUFBYztBQUNkUyxhQUFPLENBQUNULEtBQVIsQ0FBYyxvQkFBZCxFQUFvQ0EsS0FBcEM7QUFDQUMsY0FBUSxDQUFDRCxLQUFLLENBQUNlLE9BQVAsQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsTUFBTUMsVUFBVSxHQUFHQyx3RUFBVyxDQUFDLE9BQUQsQ0FBOUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsVUFBSixFQUFnQkosWUFBWTtBQUM3QixHQUZRLEVBRU4sQ0FBQ0ksVUFBRCxDQUZNLENBQVQ7QUFJQVAsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQmQsVUFBMUI7QUFDQSxTQUNFO0FBQ0UsWUFBUSxFQUFFLGtCQUFDdUIsQ0FBRCxFQUFPO0FBQ2ZBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBUixrQkFBWTtBQUNiLEtBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQ0UsU0FBSyxFQUFFO0FBQ0xTLGFBQU8sRUFBRSxNQURKO0FBRUxDLHlCQUFtQixFQUFFO0FBRmhCLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQ0UsZUFBVyx5R0FEYjtBQVFFLFFBQUksRUFBQyxXQVJQO0FBU0UsU0FBSyxFQUFFMUIsVUFBVSxDQUFDLFdBQUQsQ0FUbkI7QUFVRSxZQUFRLEVBQUVNLFlBVlo7QUFXRSxRQUFJLEVBQUUsRUFYUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFtQkU7QUFBVSxTQUFLLEVBQUVxQixJQUFJLENBQUNDLFNBQUwsQ0FBZTFCLFdBQWYsQ0FBakI7QUFBOEMsUUFBSSxFQUFFLEVBQXBEO0FBQXdELFlBQVEsTUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CRixDQU5GLEVBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkYsRUE2QkdFLEtBQUssSUFDSjtBQUNFLFNBQUssRUFBRTtBQUNMeUIsZ0JBQVUsRUFBRSxHQURQO0FBRUxDLFdBQUssRUFBRTtBQUZGLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HMUIsS0FOSCxDQTlCSixFQXVDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkNGLEVBd0NFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhDRixDQURGO0FBNENEOztHQTVFUVAsUTtVQXlCWXdCLGdFOzs7S0F6Qlp4QixRO0FBOEVNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Nzcy10by1qc3guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tIFwiLi4vdXRpbHMvdHJhbnNmb3JtXCI7XG5pbXBvcnQgeyB1c2VLZXlQcmVzcyB9IGZyb20gXCIuLi9ob29rcy91c2Uta2V5LXByZXNzXCI7XG5cbmZ1bmN0aW9uIENTU1RvSlNYKCkge1xuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgdGV4dGFyZWEwOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW3RyYW5zZm9ybWVkLCBzZXRUcmFuc2Zvcm1lZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coXCJuZXdWYWx1ZVwiLCBuZXdWYWx1ZSk7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuICAgIHNldEZvcm1WYWx1ZXMoeyAuLi5mb3JtVmFsdWVzLCBbbmFtZV06IG5ld1ZhbHVlIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlcyA9IHRyYW5zZm9ybShgbXlDU1Mke2Zvcm1WYWx1ZXNbXCJ0ZXh0YXJlYTBcIl19YCk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc1wiLCByZXMpO1xuICAgICAgc2V0VHJhbnNmb3JtZWQocmVzW1wibXlDU1NcIl0pO1xuICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBvbiB0cmFuc2Zvcm1cIiwgZXJyb3IpO1xuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGVudGVyUHJlc3MgPSB1c2VLZXlQcmVzcyhcIkVudGVyXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVudGVyUHJlc3MpIGhhbmRsZVN1Ym1pdCgpO1xuICB9LCBbZW50ZXJQcmVzc10pO1xuXG4gIGNvbnNvbGUubG9nKFwiZm9ybVZhbHVlc1wiLCBmb3JtVmFsdWVzKTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGFuZGxlU3VibWl0KCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjFmciAxZnJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2B7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufWB9XG4gICAgICAgICAgbmFtZT1cInRleHRhcmVhMFwiXG4gICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXNbXCJ0ZXh0YXJlYTBcIl19XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICByb3dzPXszMH1cbiAgICAgICAgLz5cbiAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtKU09OLnN0cmluZ2lmeSh0cmFuc2Zvcm1lZCl9IHJvd3M9ezMwfSByZWFkT25seSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxiciAvPlxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2Vycm9yfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8YnIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENTU1RvSlNYO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/css-to-jsx.js\n");

/***/ })

})