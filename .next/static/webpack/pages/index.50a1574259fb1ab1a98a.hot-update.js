webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/ProjectCard.js":
/*!********************************************!*\
  !*** ./components/Projects/ProjectCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ \"./node_modules/@material-ui/core/esm/CardActionArea/index.js\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"./node_modules/@material-ui/core/esm/CardActions/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"./node_modules/@material-ui/core/esm/CardMedia/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/go */ \"./node_modules/react-icons/go/index.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/rayanramirez/Documents/nextjs_portfolio/components/Projects/ProjectCard.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    maxWidth: 645\n  },\n  media: {\n    height: 140\n  }\n});\n\nvar ProjectCard = function ProjectCard(props) {\n  _s();\n\n  var classes = useStyles();\n  var name = props.name,\n      demo = props.demo,\n      github = props.github,\n      techs = props.techs,\n      desc = props.desc,\n      img = props.img;\n\n  var techSkill = function techSkill(tech, index) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n      mkey: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 32\n      }\n    }, tech);\n  };\n\n  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: classes.media,\n    image: img,\n    title: name,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, desc))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    display: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, techs.map(techSkill)), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: github,\n    target: \"blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n    size: \"small\",\n    color: \"primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_9__[\"GoMarkGithub\"], {\n    size: \"1.6rem\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }))), __jsx(\"a\", {\n    href: demo,\n    target: \"blank\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n    size: \"small\",\n    color: \"primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, \"Demo\"))));\n};\n\n_s(ProjectCard, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProjectCard));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ProjectCard\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0Q2FyZC5qcz85NDQ3Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWF4V2lkdGgiLCJtZWRpYSIsImhlaWdodCIsIlByb2plY3RDYXJkIiwicHJvcHMiLCJjbGFzc2VzIiwibmFtZSIsImRlbW8iLCJnaXRodWIiLCJ0ZWNocyIsImRlc2MiLCJpbWciLCJ0ZWNoU2tpbGwiLCJ0ZWNoIiwiaW5kZXgiLCJtYXAiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUU7QUFETixHQURxQjtBQUkzQkMsT0FBSyxFQUFFO0FBQ0xDLFVBQU0sRUFBRTtBQURIO0FBSm9CLENBQUQsQ0FBNUI7O0FBVUEsSUFBT0MsV0FBVyxHQUFFLFNBQWJBLFdBQWEsQ0FBQ0MsS0FBRCxFQUFVO0FBQUE7O0FBQzVCLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUQ0QixNQUl2QlMsSUFKdUIsR0FJWUYsS0FKWixDQUl2QkUsSUFKdUI7QUFBQSxNQUlsQkMsSUFKa0IsR0FJWUgsS0FKWixDQUlsQkcsSUFKa0I7QUFBQSxNQUliQyxNQUphLEdBSVlKLEtBSlosQ0FJYkksTUFKYTtBQUFBLE1BSU5DLEtBSk0sR0FJWUwsS0FKWixDQUlOSyxLQUpNO0FBQUEsTUFJQUMsSUFKQSxHQUlZTixLQUpaLENBSUFNLElBSkE7QUFBQSxNQUlLQyxHQUpMLEdBSVlQLEtBSlosQ0FJS08sR0FKTDs7QUFLOUIsTUFBTUMsU0FBUyxHQUFFLFNBQVhBLFNBQVcsQ0FBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEsV0FBYyxNQUFDLHFEQUFEO0FBQUssVUFBSSxFQUFFQSxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbUJELElBQW5CLENBQWQ7QUFBQSxHQUFqQjs7QUFNRSxTQUNFLE1BQUMsOERBQUQ7QUFBTSxhQUFTLEVBQUVSLE9BQU8sQ0FBQ04sSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFDRSxhQUFTLEVBQUVNLE9BQU8sQ0FBQ0osS0FEckI7QUFFRSxTQUFLLEVBQUVVLEdBRlQ7QUFHRSxTQUFLLEVBQUVMLElBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFZLGdCQUFZLE1BQXhCO0FBQXlCLFdBQU8sRUFBQyxJQUFqQztBQUFzQyxhQUFTLEVBQUMsSUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDQSxJQURELENBREYsRUFJRSxNQUFDLG9FQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQyxlQUFsQztBQUFrRCxhQUFTLEVBQUMsR0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFSSxJQURGLENBSkYsQ0FORixDQURGLEVBZ0JFLE1BQUMscURBQUQ7QUFBSyxXQUFPLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NELEtBQUssQ0FBQ00sR0FBTixDQUFVSCxTQUFWLENBREQsQ0FoQkYsRUFtQkUsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBRyxRQUFJLEVBQUVKLE1BQVQ7QUFBaUIsVUFBTSxFQUFDLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHdEQUFEO0FBQVEsUUFBSSxFQUFDLE9BQWI7QUFBcUIsU0FBSyxFQUFDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQWMsUUFBSSxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURBLENBRkYsRUFPRTtBQUFHLFFBQUksRUFBRUQsSUFBVDtBQUFlLFVBQU0sRUFBQyxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLFNBQUssRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsQ0FQRixDQW5CRixDQURGO0FBdUNELENBbEREOztHQUFPSixXO1VBQ1dOLFM7OztLQURYTSxXO0FBbURRLGtGQUFBYSw0Q0FBSyxDQUFDQyxJQUFOLENBQVdkLFdBQVgsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdENhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCB7Qm94LEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQge0dvTWFya0dpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIG1heFdpZHRoOiA2NDUsXG4gIH0sXG4gIG1lZGlhOiB7XG4gICAgaGVpZ2h0OiAxNDAsXG4gIH0sXG4gXG59KTtcblxuY29uc3QgIFByb2plY3RDYXJkID0ocHJvcHMpID0+e1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gXG5cbmNvbnN0IHtuYW1lLGRlbW8sZ2l0aHViLHRlY2hzLGRlc2MsaW1nfSA9IHByb3BzXG5jb25zdCB0ZWNoU2tpbGwgPSh0ZWNoLGluZGV4KT0+PEJveCBta2V5PXtpbmRleH0+e3RlY2h9PC9Cb3g+XG5cbiAgXG5cblxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPENhcmRBY3Rpb25BcmVhPlxuICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICAgIGltYWdlPXtpbWd9XG4gICAgICAgICAgdGl0bGU9e25hbWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICAgICB7ZGVzY31cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmRBY3Rpb25BcmVhPlxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAge3RlY2hzLm1hcCh0ZWNoU2tpbGwpfVxuICAgICAgPC9Cb3g+XG4gICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgIFxuICAgICAgICA8YSBocmVmPXtnaXRodWJ9IHRhcmdldD0nYmxhbmsnPlxuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgIDxHb01hcmtHaXRodWIgc2l6ZT1cIjEuNnJlbVwiLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj17ZGVtb30gdGFyZ2V0PSdibGFuayc+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgRGVtb1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9hPiAgXG4gICAgICAgXG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgXG4gICAgIFxuICAgXG4gICAgPC9DYXJkPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQcm9qZWN0Q2FyZCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects/ProjectCard.js\n");

/***/ })

})