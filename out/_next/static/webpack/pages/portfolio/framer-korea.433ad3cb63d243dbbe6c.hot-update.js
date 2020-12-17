webpackHotUpdate_N_E("pages/portfolio/framer-korea",{

/***/ "./pages/portfolio/components/portfolio-section-card.js":
/*!**************************************************************!*\
  !*** ./pages/portfolio/components/portfolio-section-card.js ***!
  \**************************************************************/
/*! exports provided: PortfolioSectionCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PortfolioSectionCard\", function() { return PortfolioSectionCard; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar _jsxFileName = \"/Users/ruucm/MyDocuments/Carving/projects/ruucm.github.io (ruucm.me)/pages/portfolio/components/portfolio-section-card.js\",\n    _s = $RefreshSig$(),\n    _this = undefined;\n\n\n\n\nvar defaultTransition = {\n  duration: 0.36\n};\nfunction PortfolioSectionCard(_ref) {\n  _s();\n\n  var img = _ref.img,\n      title = _ref.title,\n      description = _ref.description,\n      _ref$grayscale = _ref.grayscale,\n      grayscale = _ref$grayscale === void 0 ? false : _ref$grayscale,\n      _ref$alignRight = _ref.alignRight,\n      alignRight = _ref$alignRight === void 0 ? false : _ref$alignRight;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      zoomed = _useState[0],\n      setZoomed = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      display: \"grid\",\n      gridTemplateColumns: zoomed ? \"1fr\" : \"2fr 3fr\",\n      gap: \"30px\",\n      direction: alignRight ? \"rtl\" : \"ltr\"\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {\n      img: img,\n      grayscale: grayscale,\n      zoomed: zoomed,\n      setZoomed: setZoomed\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        padding: \"30px 15px\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].h4, {\n        style: {\n          textDecoration: \"underline\",\n          display: \"inline-block\",\n          fontWeight: 400\n        },\n        layout: true,\n        transition: defaultTransition,\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].p, {\n        layout: true,\n        transition: defaultTransition,\n        style: {\n          lineHeight: \"1.55em\"\n        },\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PortfolioSectionCard, \"s7cyPyOEOtdKbauToWlsgqyWB5I=\");\n\n_c = PortfolioSectionCard;\n\nvar Image = function Image(_ref2) {\n  var img = _ref2.img,\n      grayscale = _ref2.grayscale,\n      zoomed = _ref2.zoomed,\n      setZoomed = _ref2.setZoomed;\n  var filter = \"\";\n  if (grayscale) filter += \"grayscale(1) brightness(0.5)\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      position: \"relative\",\n      width: \"100%\",\n      height: \"0\",\n      paddingTop: \"66.66%\",\n      cursor: zoomed ? \"zoom-out\" : \"zoom-in\",\n      filter: filter // opacity: grayscale ? 0.5 : 1,\n\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n      animate: {\n        opacity: zoomed ? 1 : 0\n      },\n      className: \"shade\",\n      onClick: function onClick() {\n        return setZoomed(false);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].img, {\n      src: img,\n      alt: \"\",\n      onClick: function onClick() {\n        return setZoomed(!zoomed);\n      },\n      layout: true,\n      transition: defaultTransition,\n      style: {\n        position: \"absolute\",\n        top: \"0\",\n        left: \"0\",\n        right: \"0\",\n        bottom: \"0\",\n        width: \"100%\",\n        height: \"100%\",\n        border: \"1px solid black\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Image;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PortfolioSectionCard\");\n$RefreshReg$(_c2, \"Image\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9ydGZvbGlvL2NvbXBvbmVudHMvcG9ydGZvbGlvLXNlY3Rpb24tY2FyZC5qcz84Y2FhIl0sIm5hbWVzIjpbImRlZmF1bHRUcmFuc2l0aW9uIiwiZHVyYXRpb24iLCJQb3J0Zm9saW9TZWN0aW9uQ2FyZCIsImltZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJncmF5c2NhbGUiLCJhbGlnblJpZ2h0IiwidXNlU3RhdGUiLCJ6b29tZWQiLCJzZXRab29tZWQiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsImRpcmVjdGlvbiIsInBhZGRpbmciLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwiSW1hZ2UiLCJmaWx0ZXIiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsImN1cnNvciIsIm9wYWNpdHkiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRztBQUN4QkMsVUFBUSxFQUFFO0FBRGMsQ0FBMUI7QUFJTyxTQUFTQyxvQkFBVCxPQU1KO0FBQUE7O0FBQUEsTUFMREMsR0FLQyxRQUxEQSxHQUtDO0FBQUEsTUFKREMsS0FJQyxRQUpEQSxLQUlDO0FBQUEsTUFIREMsV0FHQyxRQUhEQSxXQUdDO0FBQUEsNEJBRkRDLFNBRUM7QUFBQSxNQUZEQSxTQUVDLCtCQUZXLEtBRVg7QUFBQSw2QkFEREMsVUFDQztBQUFBLE1BRERBLFVBQ0MsZ0NBRFksS0FDWjs7QUFBQSxrQkFDMkJDLHNEQUFRLENBQUMsS0FBRCxDQURuQztBQUFBLE1BQ01DLE1BRE47QUFBQSxNQUNjQyxTQURkOztBQUdELHNCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxDLHlCQUFtQixFQUFFSCxNQUFNLEdB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bGUiOiIuL3BhZ2VzL3BvcnRmb2xpby9jb21wb25lbnRzL3BvcnRmb2xpby1zZWN0aW9uLWNhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuXG5jb25zdCBkZWZhdWx0VHJhbnNpdGlvbiA9IHtcbiAgZHVyYXRpb246IDAuMzYsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQb3J0Zm9saW9TZWN0aW9uQ2FyZCh7XG4gIGltZyxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBncmF5c2NhbGUgPSBmYWxzZSxcbiAgYWxpZ25SaWdodCA9IGZhbHNlLFxufSkge1xuICBjb25zdCBbem9vbWVkLCBzZXRab29tZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogem9vbWVkID8gXCIxZnJcIiA6IFwiMmZyIDNmclwiLFxuICAgICAgICBnYXA6IFwiMzBweFwiLFxuICAgICAgICBkaXJlY3Rpb246IGFsaWduUmlnaHQgPyBcInJ0bFwiIDogXCJsdHJcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIGltZz17aW1nfVxuICAgICAgICBncmF5c2NhbGU9e2dyYXlzY2FsZX1cbiAgICAgICAgem9vbWVkPXt6b29tZWR9XG4gICAgICAgIHNldFpvb21lZD17c2V0Wm9vbWVkfVxuICAgICAgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nOiBcIjMwcHggMTVweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8bW90aW9uLmg0XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGxheW91dFxuICAgICAgICAgIHRyYW5zaXRpb249e2RlZmF1bHRUcmFuc2l0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L21vdGlvbi5oND5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgIGxheW91dFxuICAgICAgICAgIHRyYW5zaXRpb249e2RlZmF1bHRUcmFuc2l0aW9ufVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjEuNTVlbVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvbW90aW9uLnA+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBJbWFnZSA9ICh7IGltZywgZ3JheXNjYWxlLCB6b29tZWQsIHNldFpvb21lZCB9KSA9PiB7XG4gIGxldCBmaWx0ZXIgPSBcIlwiXG4gIGlmIChncmF5c2NhbGUpIGZpbHRlciArPSBcImdyYXlzY2FsZSgxKSBicmlnaHRuZXNzKDAuNSlcIlxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjBcIixcbiAgICAgICAgcGFkZGluZ1RvcDogXCI2Ni42NiVcIixcbiAgICAgICAgY3Vyc29yOiB6b29tZWQgPyBcInpvb20tb3V0XCIgOiBcInpvb20taW5cIixcbiAgICAgICAgZmlsdGVyLFxuICAgICAgICAvLyBvcGFjaXR5OiBncmF5c2NhbGUgPyAwLjUgOiAxLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IHpvb21lZCA/IDEgOiAwIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInNoYWRlXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Wm9vbWVkKGZhbHNlKX1cbiAgICAgIC8+XG4gICAgICA8bW90aW9uLmltZ1xuICAgICAgICBzcmM9e2ltZ31cbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Wm9vbWVkKCF6b29tZWQpfVxuICAgICAgICBsYXlvdXRcbiAgICAgICAgdHJhbnNpdGlvbj17ZGVmYXVsdFRyYW5zaXRpb259XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICAgIHJpZ2h0OiBcIjBcIixcbiAgICAgICAgICBib3R0b206IFwiMFwiLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/portfolio/components/portfolio-section-card.js\n");

/***/ })

})