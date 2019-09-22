webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NavButton.js":
/*!*********************************!*\
  !*** ./components/NavButton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
var _jsxFileName = "G:\\nextRealBigIt\\components\\NavButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: function root(_ref) {
    var isActive = _ref.isActive;
    return {
      borderRadius: '0',
      textTransform: 'none',
      height: '45px',
      lineHeight: '19px',
      textAlign: 'center',
      fontSize: '16px',
      minWidth: '100px',
      padding: '0 25px',
      color: isActive ? '#fff' : '#ccc',
      borderBottom: isActive ? '6px solid #00ADED' : '6px solid #252526',
      fontFamily: 'Ubuntu',
      fontWeight: '300',
      '&:hover': {
        color: '#fff',
        borderBottom: '6px solid #00ADED'
      }
    };
  }
});

var NavButton = function NavButton(props) {
  var children = props.children;
  var classes = useStyles(props);
  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    disableRipple: true,
    classes: classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (NavButton);

/***/ })

})
//# sourceMappingURL=index.js.4269d952d624f266e807.hot-update.js.map