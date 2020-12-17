webpackHotUpdate_N_E("pages/portfolio/framer-korea",{

/***/ "./pages/portfolio/components/summary.js":
/*!***********************************************!*\
  !*** ./pages/portfolio/components/summary.js ***!
  \***********************************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Summary\", function() { return Summary; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/ruucm/MyDocuments/Carving/projects/ruucm.github.io (ruucm.me)/pages/portfolio/components/summary.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Summary(_ref) {\n  _s();\n\n  var _this = this;\n\n  var role = _ref.role,\n      links = _ref.links;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var slug = router.pathname.split(\"/\")[2];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      border: \"1px solid black\",\n      display: \"inline-block\",\n      padding: \"30px 15px\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      style: {\n        color: \"blue\",\n        fontWeight: 400,\n        marginTop: 0\n      },\n      children: slug\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Role - \", role]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      style: {\n        marginBottom: 0\n      },\n      children: [\"Links -\", \" \", links.map(function (link, id) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: link.href,\n            target: \"_blank\",\n            style: {\n              color: \"black\"\n            },\n            children: link.text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this), id < links.length - 1 && \" / \"]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Summary, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Summary;\n\nvar _c;\n\n$RefreshReg$(_c, \"Summary\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvc3VtbWFyeS5qcz8yN2M1Il0sIm5hbWVzIjpbIlN1bW1hcnkiLCJyb2xlIiwibGlua3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzbHVnIiwicGF0aG5hbWUiLCJzcGxpdCIsImJvcmRlciIsImRpc3BsYXkiLCJwYWRkaW5nIiwiY29sb3IiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFwIiwibGluayIsImlkIiwiaHJlZiIsInRleHQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sU0FBU0EsT0FBVCxPQUFrQztBQUFBOztBQUFBOztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN2QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLENBQWI7QUFFQSxzQkFDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxZQUFNLEVBQUUsaUJBREg7QUFFTEMsYUFBTyxFQUFFLGNBRko7QUFHTEMsYUFBTyxFQUFFO0FBSEosS0FEVDtBQUFBLDRCQU9FO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGFBQUssRUFBRSxNQURGO0FBRUxDLGtCQUFVLEVBQUUsR0FGUDtBQUdMQyxpQkFBUyxFQUFFO0FBSE4sT0FEVDtBQUFBLGdCQU9HUjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQWdCRTtBQUFBLDRCQUFXSixJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixlQWlCRTtBQUNFLFdBQUssRUFBRTtBQUNMYSxvQkFBWSxFQUFFO0FBRFQsT0FEVDtBQUFBLDRCQUtVLEdBTFYsRUFNR1osS0FBSyxDQUFDYSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxFQUFQO0FBQUEsNEJBQ1Q7QUFBQSxrQ0FDRTtBQUNFLGdCQUFJLEVBQUVELElBQUksQ0FBQ0UsSUFEYjtBQUVFLGtCQUFNLEVBQUMsUUFGVDtBQUdFLGlCQUFLLEVBQUU7QUFDTFAsbUJBQUssRUFBRTtBQURGLGFBSFQ7QUFBQSxzQkFPR0ssSUFBSSxDQUFDRztBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFVR0YsRUFBRSxHQUFHZixLQUFLLENBQUNrQixNQUFOLEdBQWUsQ0FBcEIsU0FWSDtBQUFBLFdBQVdILEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVYsQ0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5Q0Q7O0dBN0NlakIsTztVQUNDSSxxRDs7O0tBRERKLE8iLCJmaWxlIjoiLi9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9zdW1tYXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmV4cG9ydCBmdW5jdGlvbiBTdW1tYXJ5KHsgcm9sZSwgbGlua3MgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBzbHVnID0gcm91dGVyLnBhdGhuYW1lLnNwbGl0KFwiL1wiKVsyXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICBwYWRkaW5nOiBcIjMwcHggMTVweFwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aDNcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3NsdWd9XG4gICAgICA8L2gzPlxuICAgICAgPHA+Um9sZSAtIHtyb2xlfTwvcD5cbiAgICAgIDxwXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBMaW5rcyAte1wiIFwifVxuICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpZCkgPT4gKFxuICAgICAgICAgIDxzcGFuIGtleT17aWR9PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsaW5rLnRleHR9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB7aWQgPCBsaW5rcy5sZW5ndGggLSAxICYmIGAgLyBgfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/portfolio/components/summary.js\n");

/***/ })

})