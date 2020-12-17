webpackHotUpdate_N_E("pages/portfolio/harbor-school",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return Card; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\nvar _jsxFileName = \"/Users/ruucm/MyDocuments/Carving/projects/ruucm.github.io (ruucm.me)/components/card.js\";\n\n\nvar wrap = {\n  active: {\n    opacity: 1\n  },\n  inActive: {\n    opacity: 0\n  }\n};\nfunction Card(_ref) {\n  var _this = this;\n\n  var title = _ref.title,\n      duration = _ref.duration,\n      description = _ref.description,\n      outlink = _ref.outlink,\n      slug = _ref.slug,\n      tags = _ref.tags;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    layoutId: title,\n    transition: {\n      duration: 0.36\n    },\n    style: {// background: \"hsla(0, 0%, 100%, 0.4)\",\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n      initial: wrap.inActive,\n      animate: wrap.active,\n      exit: wrap.inActive,\n      transition: {\n        duration: 0.36\n      },\n      style: {\n        position: \"relative\",\n        border: \"1px solid black\",\n        padding: \"30px 15px\"\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        style: {\n          marginTop: 0,\n          textTransform: \"lowercase\"\n        },\n        children: [title, duration && \" (\".concat(duration, \")\")]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        style: {\n          width: \"50%\",\n          whiteSpace: \"nowrap\",\n          overflow: \"hidden\",\n          textOverflow: \"ellipsis\"\n        },\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), slug && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/portfolio/\".concat(slug),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          style: {\n            textDecoration: \"none\"\n          },\n          children: \"More\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, this), !slug && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: outlink,\n        target: \"_blank\",\n        style: {\n          textDecoration: \"none\"\n        },\n        children: \"More (outlink)\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"em\", {\n        style: {\n          position: \"absolute\",\n          right: 15,\n          bottom: 8\n        },\n        children: tags.map(function (tag, id) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: [tag, id < tags.length - 1 && \",\", \" \"]\n          }, id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLmpzPzUxZTAiXSwibmFtZXMiOlsid3JhcCIsImFjdGl2ZSIsIm9wYWNpdHkiLCJpbkFjdGl2ZSIsIkNhcmQiLCJ0aXRsZSIsImR1cmF0aW9uIiwiZGVzY3JpcHRpb24iLCJvdXRsaW5rIiwic2x1ZyIsInRhZ3MiLCJwb3NpdGlvbiIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJ0ZXh0VHJhbnNmb3JtIiwid2lkdGgiLCJ3aGl0ZVNwYWNlIiwib3ZlcmZsb3ciLCJ0ZXh0T3ZlcmZsb3ciLCJ0ZXh0RGVjb3JhdGlvbiIsInJpZ2h0IiwiYm90dG9tIiwibWFwIiwidGFnIiwiaWQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsUUFBTSxFQUFFO0FBQ05DLFdBQU8sRUFBRTtBQURILEdBREc7QUFJWEMsVUFBUSxFQUFFO0FBQ1JELFdBQU8sRUFBRTtBQUREO0FBSkMsQ0FBYjtBQVNPLFNBQVNFLElBQVQsT0FBcUU7QUFBQTs7QUFBQSxNQUFyREMsS0FBcUQsUUFBckRBLEtBQXFEO0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQXBDQyxXQUFvQyxRQUFwQ0EsV0FBb0M7QUFBQSxNQUF2QkMsT0FBdUIsUUFBdkJBLE9BQXVCO0FBQUEsTUFBZEMsSUFBYyxRQUFkQSxJQUFjO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzFFLHNCQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNFLFlBQVEsRUFBRUwsS0FEWjtBQUVFLGNBQVUsRUFBRTtBQUNWQyxjQUFRLEVBQUU7QUFEQSxLQUZkO0FBS0UsU0FBSyxFQUNILENBQ0U7QUFERixLQU5KO0FBQUEsMkJBV0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsYUFBTyxFQUFFTixJQUFJLENBQUNHLFFBRGhCO0FBRUUsYUFBTyxFQUFFSCxJQUFJLENBQUNDLE1BRmhCO0FBR0UsVUFBSSxFQUFFRCxJQUFJLENBQUNHLFFBSGI7QUFJRSxnQkFBVSxFQUFFO0FBQ1ZHLGdCQUFRLEVBQUU7QUFEQSxPQUpkO0FBT0UsV0FBSyxFQUFFO0FBQ0xLLGdCQUFRLEVBQUUsVUFETDtBQUVMQyxjQUFNLEVBQUUsaUJBRkg7QUFHTEMsZUFBTyxFQUFFO0FBSEosT0FQVDtBQUFBLDhCQWFFO0FBQ0UsYUFBSyxFQUFFO0FBQ0xDLG1CQUFTLEVBQUUsQ0FETjtBQUVMQyx1QkFBYSxFQUFFO0FBRlYsU0FEVDtBQUFBLG1CQU1HVixLQU5ILEVBT0dDLFFBQVEsZ0JBQVNBLFFBQVQsTUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixlQXNCRTtBQUNFLGFBQUssRUFBRTtBQUNMVSxlQUFLLEVBQUUsS0FERjtBQUVMQyxvQkFBVSxFQUFFLFFBRlA7QUFHTEMsa0JBQVEsRUFBRSxRQUhMO0FBSUxDLHNCQUFZLEVBQUU7QUFKVCxTQURUO0FBQUEsa0JBUUdaO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRixFQWdDR0UsSUFBSSxpQkFDSCxxRUFBQyxnREFBRDtBQUFNLFlBQUksdUJBQWdCQSxJQUFoQixDQUFWO0FBQUEsK0JBQ0U7QUFDRSxlQUFLLEVBQUU7QUFDTFcsMEJBQWMsRUFBRTtBQURYLFdBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNKLEVBMkNHLENBQUNYLElBQUQsaUJBQ0M7QUFDRSxZQUFJLEVBQUVELE9BRFI7QUFFRSxjQUFNLEVBQUMsUUFGVDtBQUdFLGFBQUssRUFBRTtBQUNMWSx3QkFBYyxFQUFFO0FBRFgsU0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVDSixlQXNERTtBQUNFLGFBQUssRUFBRTtBQUNMVCxrQkFBUSxFQUFFLFVBREw7QUFFTFUsZUFBSyxFQUFFLEVBRkY7QUFHTEMsZ0JBQU0sRUFBRTtBQUhILFNBRFQ7QUFBQSxrQkFPR1osSUFBSSxDQUFDYSxHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFNQyxFQUFOO0FBQUEsOEJBQ1I7QUFBQSx1QkFDR0QsR0FESCxFQUVHQyxFQUFFLEdBQUdmLElBQUksQ0FBQ2dCLE1BQUwsR0FBYyxDQUFuQixJQUF3QixHQUYzQixFQUVnQyxHQUZoQztBQUFBLGFBQVdELEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUTtBQUFBLFNBQVQ7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1GRDtLQXBGZXJCLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcblxuY29uc3Qgd3JhcCA9IHtcbiAgYWN0aXZlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgfSxcbiAgaW5BY3RpdmU6IHtcbiAgICBvcGFjaXR5OiAwLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2FyZCh7IHRpdGxlLCBkdXJhdGlvbiwgZGVzY3JpcHRpb24sIG91dGxpbmssIHNsdWcsIHRhZ3MgfSkge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBsYXlvdXRJZD17dGl0bGV9XG4gICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgIGR1cmF0aW9uOiAwLjM2LFxuICAgICAgfX1cbiAgICAgIHN0eWxlPXtcbiAgICAgICAge1xuICAgICAgICAgIC8vIGJhY2tncm91bmQ6IFwiaHNsYSgwLCAwJSwgMTAwJSwgMC40KVwiLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgaW5pdGlhbD17d3JhcC5pbkFjdGl2ZX1cbiAgICAgICAgYW5pbWF0ZT17d3JhcC5hY3RpdmV9XG4gICAgICAgIGV4aXQ9e3dyYXAuaW5BY3RpdmV9XG4gICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICBkdXJhdGlvbjogMC4zNixcbiAgICAgICAgfX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgYmxhY2tcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjMwcHggMTVweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aDRcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJsb3dlcmNhc2VcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIHtkdXJhdGlvbiAmJiBgICgke2R1cmF0aW9ufSlgfVxuICAgICAgICA8L2g0PlxuICAgICAgICA8cFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD5cbiAgICAgICAge3NsdWcgJiYgKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9ydGZvbGlvLyR7c2x1Z31gfT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNb3JlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApfVxuICAgICAgICB7IXNsdWcgJiYgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtvdXRsaW5rfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTW9yZSAob3V0bGluaylcbiAgICAgICAgICA8L2E+XG4gICAgICAgICl9XG4gICAgICAgIDxlbVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgcmlnaHQ6IDE1LFxuICAgICAgICAgICAgYm90dG9tOiA4LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGFncy5tYXAoKHRhZywgaWQpID0+IChcbiAgICAgICAgICAgIDxzcGFuIGtleT17aWR9PlxuICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgICB7aWQgPCB0YWdzLmxlbmd0aCAtIDEgJiYgXCIsXCJ9e1wiIFwifVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2VtPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/card.js\n");

/***/ })

})