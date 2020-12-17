webpackHotUpdate_N_E("pages/index",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return Card; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\nvar _jsxFileName = \"/Users/ruucm/MyDocuments/Carving/projects/ruucm.github.io (ruucm.me)/components/card.js\";\n\n\nvar wrap = {\n  active: {\n    opacity: 1\n  },\n  inActive: {\n    opacity: 0\n  }\n};\nfunction Card(_ref) {\n  var _this = this;\n\n  var title = _ref.title,\n      duration = _ref.duration,\n      description = _ref.description,\n      outlink = _ref.outlink,\n      slug = _ref.slug,\n      tags = _ref.tags;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    layoutId: title,\n    transition: {\n      duration: 0.36\n    },\n    style: {// background: \"hsla(0, 0%, 100%, 0.4)\",\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n      initial: wrap.inActive,\n      animate: wrap.active,\n      exit: wrap.inActive,\n      transition: {\n        duration: 0.36\n      },\n      style: {\n        position: \"relative\",\n        border: \"1px solid black\",\n        padding: \"30px 15px\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        style: {\n          marginTop: 0,\n          textTransform: \"lowercase\"\n        },\n        children: [title, duration && \" (\".concat(duration, \")\")]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), slug && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/portfolio/\".concat(slug),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          style: {\n            textDecoration: \"none\"\n          },\n          children: \"More\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, this), !slug && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: outlink,\n        target: \"_blank\",\n        style: {\n          textDecoration: \"none\"\n        },\n        children: \"More (outlink)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n        style: {\n          position: \"absolute\",\n          right: 15,\n          bottom: 8\n        },\n        children: tags.map(function (tag, id) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: [tag, id < tags.length - 1 && \",\", \" \"]\n          }, id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLmpzPzUxZTAiXSwibmFtZXMiOlsid3JhcCIsImFjdGl2ZSIsIm9wYWNpdHkiLCJpbkFjdGl2ZSIsIkNhcmQiLCJ0aXRsZSIsImR1cmF0aW9uIiwiZGVzY3JpcHRpb24iLCJvdXRsaW5rIiwic2x1ZyIsInRhZ3MiLCJwb3NpdGlvbiIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dERlY29yYXRpb24iLCJyaWdodCIsImJvdHRvbSIsIm1hcCIsInRhZyIsImlkIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQ1hDLFFBQU0sRUFBRTtBQUNOQyxXQUFPLEVBQUU7QUFESCxHQURHO0FBSVhDLFVBQVEsRUFBRTtBQUNSRCxXQUFPLEVBQUU7QUFERDtBQUpDLENBQWI7QUFTTyxTQUFTRSxJQUFULE9BQXFFO0FBQUE7O0FBQUEsTUFBckRDLEtBQXFELFFBQXJEQSxLQUFxRDtBQUFBLE1BQTlDQyxRQUE4QyxRQUE5Q0EsUUFBOEM7QUFBQSxNQUFwQ0MsV0FBb0MsUUFBcENBLFdBQW9DO0FBQUEsTUFBdkJDLE9BQXVCLFFBQXZCQSxPQUF1QjtBQUFBLE1BQWRDLElBQWMsUUFBZEEsSUFBYztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUMxRSxzQkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxZQUFRLEVBQUVMLEtBRFo7QUFFRSxjQUFVLEVBQUU7QUFDVkMsY0FBUSxFQUFFO0FBREEsS0FGZDtBQUtFLFNBQUssRUFDSCxDQUNFO0FBREYsS0FOSjtBQUFBLDJCQVdFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLGFBQU8sRUFBRU4sSUFBSSxDQUFDRyxRQURoQjtBQUVFLGFBQU8sRUFBRUgsSUFBSSxDQUFDQyxNQUZoQjtBQUdFLFVBQUksRUFBRUQsSUFBSSxDQUFDRyxRQUhiO0FBSUUsZ0JBQVUsRUFBRTtBQUNWRyxnQkFBUSxFQUFFO0FBREEsT0FKZDtBQU9FLFdBQUssRUFBRTtBQUNMSyxnQkFBUSxFQUFFLFVBREw7QUFFTEMsY0FBTSxFQUFFLGlCQUZIO0FBR0xDLGVBQU8sRUFBRTtBQUhKLE9BUFQ7QUFBQSw4QkFhRTtBQUNFLGFBQUssRUFBRTtBQUNMQyxtQkFBUyxFQUFFLENBRE47QUFFTEMsdUJBQWEsRUFBRTtBQUZWLFNBRFQ7QUFBQSxtQkFNR1YsS0FOSCxFQU9HQyxRQUFRLGdCQUFTQSxRQUFULE1BUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsZUFzQkU7QUFBQSxrQkFRR0M7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJGLEVBZ0NHRSxJQUFJLGlCQUNILHFFQUFDLGdEQUFEO0FBQU0sWUFBSSx1QkFBZ0JBLElBQWhCLENBQVY7QUFBQSwrQkFDRTtBQUNFLGVBQUssRUFBRTtBQUNMTywwQkFBYyxFQUFFO0FBRFgsV0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0osRUEyQ0csQ0FBQ1AsSUFBRCxpQkFDQztBQUNFLFlBQUksRUFBRUQsT0FEUjtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBR0UsYUFBSyxFQUFFO0FBQ0xRLHdCQUFjLEVBQUU7QUFEWCxTQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUNKLGVBc0RFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xMLGtCQUFRLEVBQUUsVUFETDtBQUVMTSxlQUFLLEVBQUUsRUFGRjtBQUdMQyxnQkFBTSxFQUFFO0FBSEgsU0FEVDtBQUFBLGtCQU9HUixJQUFJLENBQUNTLEdBQUwsQ0FBUyxVQUFDQyxHQUFELEVBQU1DLEVBQU47QUFBQSw4QkFDUjtBQUFBLHVCQUNHRCxHQURILEVBRUdDLEVBQUUsR0FBR1gsSUFBSSxDQUFDWSxNQUFMLEdBQWMsQ0FBbkIsSUFBd0IsR0FGM0IsRUFFZ0MsR0FGaEM7QUFBQSxhQUFXRCxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFUO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRkQ7S0FwRmVqQixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5cbmNvbnN0IHdyYXAgPSB7XG4gIGFjdGl2ZToge1xuICAgIG9wYWNpdHk6IDEsXG4gIH0sXG4gIGluQWN0aXZlOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgfSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhcmQoeyB0aXRsZSwgZHVyYXRpb24sIGRlc2NyaXB0aW9uLCBvdXRsaW5rLCBzbHVnLCB0YWdzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgbGF5b3V0SWQ9e3RpdGxlfVxuICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICBkdXJhdGlvbjogMC4zNixcbiAgICAgIH19XG4gICAgICBzdHlsZT17XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBcImhzbGEoMCwgMCUsIDEwMCUsIDAuNClcIixcbiAgICAgICAgfVxuICAgICAgfVxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e3dyYXAuaW5BY3RpdmV9XG4gICAgICAgIGFuaW1hdGU9e3dyYXAuYWN0aXZlfVxuICAgICAgICBleGl0PXt3cmFwLmluQWN0aXZlfVxuICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgZHVyYXRpb246IDAuMzYsXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIGJsYWNrXCIsXG4gICAgICAgICAgcGFkZGluZzogXCIzMHB4IDE1cHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGg0XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogMCxcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwibG93ZXJjYXNlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICB7ZHVyYXRpb24gJiYgYCAoJHtkdXJhdGlvbn0pYH1cbiAgICAgICAgPC9oND5cbiAgICAgICAgPHBcbiAgICAgICAgLy8gc3R5bGU9e3tcbiAgICAgICAgLy8gICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgLy8gICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgICAvLyAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAvLyAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLFxuICAgICAgICAvLyB9fVxuICAgICAgICA+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L3A+XG4gICAgICAgIHtzbHVnICYmIChcbiAgICAgICAgICA8TGluayBocmVmPXtgL3BvcnRmb2xpby8ke3NsdWd9YH0+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTW9yZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFzbHVnICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17b3V0bGlua31cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE1vcmUgKG91dGxpbmspXG4gICAgICAgICAgPC9hPlxuICAgICAgICApfVxuICAgICAgICA8ZW1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHJpZ2h0OiAxNSxcbiAgICAgICAgICAgIGJvdHRvbTogOCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGlkKSA9PiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2lkfT5cbiAgICAgICAgICAgICAge3RhZ31cbiAgICAgICAgICAgICAge2lkIDwgdGFncy5sZW5ndGggLSAxICYmIFwiLFwifXtcIiBcIn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9lbT5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card.js\n");

/***/ })

})