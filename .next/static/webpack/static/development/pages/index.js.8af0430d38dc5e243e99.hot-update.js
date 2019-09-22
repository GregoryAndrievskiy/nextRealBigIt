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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavButton */ "./components/NavButton.js");


var _jsxFileName = "G:\\nextRealBigIt\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    height: 45px;\n    display: flex;\n    justify-content: center;\n    background-color: rgb(37, 37, 38);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Wrapper = _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["styled"].div(_templateObject());
function Header(props) {
  var data = props.data;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, data.map(function (item) {
    return __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      key: item.name,
      activeClass: "active",
      className: item.name,
      to: item.name,
      spy: true,
      smooth: true,
      duration: 500,
      onSetActive: function onSetActive(name) {
        return setActive(name);
      },
      style: {
        margin: '5px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isActive: active === item.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, item.name));
  }));
}
;

/***/ })

})
//# sourceMappingURL=index.js.8af0430d38dc5e243e99.hot-update.js.map