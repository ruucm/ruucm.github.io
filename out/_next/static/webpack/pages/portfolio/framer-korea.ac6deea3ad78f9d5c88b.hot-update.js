webpackHotUpdate_N_E("pages/portfolio/framer-korea",{

/***/ "./pages/portfolio/components/summary.js":
/*!***********************************************!*\
  !*** ./pages/portfolio/components/summary.js ***!
  \***********************************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Summary\", function() { return Summary; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/ruucm/MyDocuments/Carving/projects/ruucm.github.io (ruucm.me)/pages/portfolio/components/summary.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Summary(_ref) {\n  _s();\n\n  var _this = this;\n\n  var title = _ref.title,\n      role = _ref.role,\n      links = _ref.links;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var slug = router.pathname.split(\"/\")[1];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      border: \"1px solid black\",\n      display: \"inline-block\",\n      padding: \"30px 15px\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      style: {\n        color: \"blue\",\n        fontWeight: 400,\n        marginTop: 0\n      },\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Role - \", role]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      style: {\n        marginBottom: 0\n      },\n      children: [\"Links -\", \" \", links.map(function (link, id) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: link.href,\n            target: \"_blank\",\n            style: {\n              color: \"black\"\n            },\n            children: link.text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, _this), id < links.length - 1 && \" / \"]\n        }, id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Summary, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Summary;\n\nvar _c;\n\n$RefreshReg$(_c, \"Summary\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvc3VtbWFyeS5qcz8yN2M1Il0sIm5hbWVzIjpbIlN1bW1hcnkiLCJ0aXRsZSIsInJvbGUiLCJsaW5rcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJwYXRobmFtZSIsInNwbGl0IiwiYm9yZGVyIiwiZGlzcGxheSIsInBhZGRpbmciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJsaW5rIiwiaWQiLCJocmVmIiwidGV4dCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxPQUFULE9BQXlDO0FBQUE7O0FBQUE7O0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUM5QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRixNQUFNLENBQUNHLFFBQVAsQ0FBZ0JDLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLENBQWI7QUFFQSxzQkFDRTtBQUNFLFNBQUssRUFBRTtBQUNMQyxZQUFNLEVBQUUsaUJBREg7QUFFTEMsYUFBTyxFQUFFLGNBRko7QUFHTEMsYUFBTyxFQUFFO0FBSEosS0FEVDtBQUFBLDRCQU9FO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGFBQUssRUFBRSxNQURGO0FBRUxDLGtCQUFVLEVBQUUsR0FGUDtBQUdMQyxpQkFBUyxFQUFFO0FBSE4sT0FEVDtBQUFBLGdCQU9HYjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQWdCRTtBQUFBLDRCQUFXQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixlQWlCRTtBQUNFLFdBQUssRUFBRTtBQUNMYSxvQkFBWSxFQUFFO0FBRFQsT0FEVDtBQUFBLDRCQUtVLEdBTFYsRUFNR1osS0FBSyxDQUFDYSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxFQUFQO0FBQUEsNEJBQ1Q7QUFBQSxrQ0FDRTtBQUNFLGdCQUFJLEVBQUVELElBQUksQ0FBQ0UsSUFEYjtBQUVFLGtCQUFNLEVBQUMsUUFGVDtBQUdFLGlCQUFLLEVBQUU7QUFDTFAsbUJBQUssRUFBRTtBQURGLGFBSFQ7QUFBQSxzQkFPR0ssSUFBSSxDQUFDRztBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFVR0YsRUFBRSxHQUFHZixLQUFLLENBQUNrQixNQUFOLEdBQWUsQ0FBcEIsU0FWSDtBQUFBLFdBQVdILEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVYsQ0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5Q0Q7O0dBN0NlbEIsTztVQUNDSyxxRDs7O0tBRERMLE8iLCJmaWxlIjoiLi9wYWdlcy9wb3J0Zm9saW8vY29tcG9uZW50cy9zdW1tYXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5cbmV4cG9ydCBmdW5jdGlvbiBTdW1tYXJ5KHsgdGl0bGUsIHJvbGUsIGxpbmtzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3Qgc2x1ZyA9IHJvdXRlci5wYXRobmFtZS5zcGxpdChcIi9cIilbMV1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgcGFkZGluZzogXCIzMHB4IDE1cHhcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGgzXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICBtYXJnaW5Ub3A6IDAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvaDM+XG4gICAgICA8cD5Sb2xlIC0ge3JvbGV9PC9wPlxuICAgICAgPHBcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIExpbmtzIC17XCIgXCJ9XG4gICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGlkKSA9PiAoXG4gICAgICAgICAgPHNwYW4ga2V5PXtpZH0+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xpbmsudGV4dH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIHtpZCA8IGxpbmtzLmxlbmd0aCAtIDEgJiYgYCAvIGB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApKX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/portfolio/components/summary.js\n");

/***/ })

})