webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "G:\\nextRealBigIt\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Header(props) {
  var data = props.data;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, data.map(function (item) {
    return __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      key: item.name,
      activeClass: "active",
      className: item.name,
      to: item.name,
      spy: true,
      smooth: true,
      duration: 500,
      onSetActive: function onSetActive(label) {
        return setActive(label);
      },
      style: {
        margin: '5px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, item.name);
  }));
}
;

/***/ })

})
//# sourceMappingURL=index.js.d389d476ac2596ab6cc3.hot-update.js.map