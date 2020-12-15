webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consts */ \"./consts.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.shuffle */ \"./node_modules/lodash.shuffle/index.js\");\n/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/ruucm/MyDocuments/Carving/projects/ruucm.github.io (ruucm.me)/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_consts__WEBPACK_IMPORTED_MODULE_3__[\"cardDatas\"]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isGrid = _useState2[0],\n      setIsGrid = _useState2[1];\n\n  var shuffleList = function shuffleList() {\n    return setData(lodash_shuffle__WEBPACK_IMPORTED_MODULE_5___default()(data));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    home: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \"Design Engineer\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"yongmin ruucm is an experienced front-end developer with a designer's mindset.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"AnimateSharedLayout\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          textAlign: \"right\",\n          marginBottom: 7\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n          onClick: shuffleList,\n          style: {\n            cursor: \"pointer\"\n          },\n          children: \"\\u21C4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          display: \"grid\",\n          gridTemplateColumns: isGrid ? \"repeat(3, 1fr)\" : \"1fr\",\n          gap: \"20px\"\n        },\n        children: data.map(function (data, id) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            title: data.title,\n            duration: data.duration,\n            description: data.description,\n            outlink: data.outlink,\n            link: data.link\n          }, id, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"dJJVSD2XZUE/AtJOoaaKGxwYgQM=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjYXJkRGF0YXMiLCJkYXRhIiwic2V0RGF0YSIsImlzR3JpZCIsInNldElzR3JpZCIsInNodWZmbGVMaXN0Iiwic2h1ZmZsZSIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImN1cnNvciIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwibWFwIiwiaWQiLCJ0aXRsZSIsImR1cmF0aW9uIiwiZGVzY3JpcHRpb24iLCJvdXRsaW5rIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUNDLGlEQUFELENBREg7QUFBQSxNQUN0QkMsSUFEc0I7QUFBQSxNQUNoQkMsT0FEZ0I7O0FBQUEsbUJBRURILHNEQUFRLENBQUMsS0FBRCxDQUZQO0FBQUEsTUFFdEJJLE1BRnNCO0FBQUEsTUFFZEMsU0FGYzs7QUFHN0IsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNSCxPQUFPLENBQUNJLHFEQUFPLENBQUNMLElBQUQsQ0FBUixDQUFiO0FBQUEsR0FBcEI7O0FBQ0Esc0JBQ0UscUVBQUMsa0RBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQU1FLHFFQUFDLGlFQUFEO0FBQUEsOEJBQ0U7QUFDRSxhQUFLLEVBQUU7QUFDTE0sbUJBQVMsRUFBRSxPQUROO0FBRUxDLHNCQUFZLEVBQUU7QUFGVCxTQURUO0FBQUEsK0JBZUU7QUFDRSxpQkFBTyxFQUFFSCxXQURYO0FBRUUsZUFBSyxFQUFFO0FBQ0xJLGtCQUFNLEVBQUU7QUFESCxXQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBMEJFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xDLGlCQUFPLEVBQUUsTUFESjtBQUVMQyw2QkFBbUIsRUFBRVIsTUFBTSxHQUFHLGdCQUFILEdBQXNCLEtBRjVDO0FBR0xTLGFBQUcsRUFBRTtBQUhBLFNBRFQ7QUFBQSxrQkFPR1gsSUFBSSxDQUFDWSxHQUFMLENBQVMsVUFBQ1osSUFBRCxFQUFPYSxFQUFQO0FBQUEsOEJBQ1IscUVBQUMsZ0RBQUQ7QUFFRSxpQkFBSyxFQUFFYixJQUFJLENBQUNjLEtBRmQ7QUFHRSxvQkFBUSxFQUFFZCxJQUFJLENBQUNlLFFBSGpCO0FBSUUsdUJBQVcsRUFBRWYsSUFBSSxDQUFDZ0IsV0FKcEI7QUFLRSxtQkFBTyxFQUFFaEIsSUFBSSxDQUFDaUIsT0FMaEI7QUFNRSxnQkFBSSxFQUFFakIsSUFBSSxDQUFDa0I7QUFOYixhQUNPTCxFQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFUO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNERDs7R0ExRHVCaEIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQ2FyZCwgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIlxuaW1wb3J0IHsgY2FyZERhdGFzIH0gZnJvbSBcIi4uL2NvbnN0c1wiXG5pbXBvcnQgeyBBbmltYXRlU2hhcmVkTGF5b3V0IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHNodWZmbGUgZnJvbSBcImxvZGFzaC5zaHVmZmxlXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoY2FyZERhdGFzKVxuICBjb25zdCBbaXNHcmlkLCBzZXRJc0dyaWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHNodWZmbGVMaXN0ID0gKCkgPT4gc2V0RGF0YShzaHVmZmxlKGRhdGEpKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaG9tZT5cbiAgICAgIDxoMz5EZXNpZ24gRW5naW5lZXI8L2gzPlxuICAgICAgPHA+XG4gICAgICAgIHlvbmdtaW4gcnV1Y20gaXMgYW4gZXhwZXJpZW5jZWQgZnJvbnQtZW5kIGRldmVsb3BlciB3aXRoIGEgZGVzaWduZXInc1xuICAgICAgICBtaW5kc2V0LlxuICAgICAgPC9wPlxuICAgICAgPEFuaW1hdGVTaGFyZWRMYXlvdXQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDcsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHsvKiA8ZW1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzR3JpZCghaXNHcmlkKX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzR3JpZCA/IFwi4oqeXCIgOiBcIuKKn1wifVxuICAgICAgICAgIDwvZW0+ICovfVxuICAgICAgICAgIDxlbVxuICAgICAgICAgICAgb25DbGljaz17c2h1ZmZsZUxpc3R9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDih4RcbiAgICAgICAgICA8L2VtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogaXNHcmlkID8gXCJyZXBlYXQoMywgMWZyKVwiIDogXCIxZnJcIixcbiAgICAgICAgICAgIGdhcDogXCIyMHB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkYXRhLm1hcCgoZGF0YSwgaWQpID0+IChcbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxuICAgICAgICAgICAgICBkdXJhdGlvbj17ZGF0YS5kdXJhdGlvbn1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG91dGxpbms9e2RhdGEub3V0bGlua31cbiAgICAgICAgICAgICAgbGluaz17ZGF0YS5saW5rfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0FuaW1hdGVTaGFyZWRMYXlvdXQ+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})