webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContentBlock */ "./components/ContentBlock.js");
var _jsxFileName = "C:\\Users\\Gregory\\WebstormProjects\\nextRealBigIt\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var data = [{
  name: 'about'
}, {
  name: 'tariff'
}, {
  name: 'scheme'
}, {
  name: 'clients'
}, {
  name: 'warranites'
}, {
  name: 'contacts'
}, {
  name: 'more blocks'
}, {
  name: 'even more blocks'
}, {
  name: 'last block'
}];

var Index = function Index() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Big It topics"), data.map(function (item) {
    return __jsx(_components_ContentBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.name,
      item: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, item.name));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.285bfd3a23358eb3b3b2.hot-update.js.map