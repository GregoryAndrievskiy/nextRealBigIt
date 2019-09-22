module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ContentBlock.js":
/*!************************************!*\
  !*** ./components/ContentBlock.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\nextRealBigIt\\components\\ContentBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BlockWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Element"]).withConfig({
  displayName: "ContentBlock__BlockWrapper",
  componentId: "juue6e-0"
})(["width:100%;height:200px;background-color:green;"]);
const BlockGrid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ContentBlock__BlockGrid",
  componentId: "juue6e-1"
})(["max-width:960px;margin:0 auto;@media (max-width:768px){background-color:blue;}"]);
function ContentBlock(props) {
  const {
    children,
    item: {
      name
    }
  } = props;
  return __jsx(BlockWrapper, {
    name: name,
    className: "element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(BlockGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, children)));
}
;

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavButton */ "./components/NavButton.js");
var _jsxFileName = "G:\\nextRealBigIt\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
    height: 45px;
    display: flex;
    justify-content: center;
    background-color: rgb(37, 37, 38);
`;
function Header(props) {
  const {
    data
  } = props;
  const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, data.map(item => __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    key: item.name,
    activeClass: "active",
    className: item.name,
    to: item.name,
    spy: true,
    smooth: true,
    duration: 500,
    onSetActive: name => setActive(name),
    style: {
      margin: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isActive: active === item.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, item.name))));
}
;

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "G:\\nextRealBigIt\\components\\MyLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Layout(props) {
  const {
    children,
    data
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), children, __jsx("a", {
    onClick: () => react_scroll__WEBPACK_IMPORTED_MODULE_1__["animateScroll"].scrollToTop(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "To the top!"));
}

/***/ }),

/***/ "./components/NavButton.js":
/*!*********************************!*\
  !*** ./components/NavButton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\nextRealBigIt\\components\\NavButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: ({
    isActive
  }) => ({
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
  })
});

const NavButton = props => {
  const {
    children
  } = props;
  const classes = useStyles(props);
  return __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    disableRipple: true,
    classes: classes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (NavButton);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_ContentBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContentBlock */ "./components/ContentBlock.js");
var _jsxFileName = "G:\\nextRealBigIt\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const data = [{
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

const Index = () => __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  data: data,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Big It topics"), data.map(item => __jsx(_components_ContentBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
  key: item.name,
  item: item,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, item.name))));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\nextRealBigIt\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map