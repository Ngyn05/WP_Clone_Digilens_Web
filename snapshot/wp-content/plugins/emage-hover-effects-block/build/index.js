/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Swashata Ghosh <swashata@wpquark.com>
 * @version 1.2.0
 * @link https://github.com/fontIconPicker/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-dom */ "react-dom"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js")):undefined}(window,function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.flattenPossiblyCategorizedSource=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return o(e);if(null!==t)return void 0!==e[t]?o(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({},e);return Object.keys(n).forEach(function(e){r=o(r).concat(o(n[e]))}),r},t.getPossibleCategories=function(e){return Array.isArray(e)?null:Object.keys(e)},t.convertToHex=function(e){return String.fromCodePoint(parseInt(e,10))},t.isArrayEqual=function(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;var r=o(e);r.sort();var n=o(t);return n.sort(),JSON.stringify(r)===JSON.stringify(n)},t.getOffset=function(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}},t.getSourceType=function(e){return null===e?"null":"object"!==n(e)||Array.isArray(e)?Array.isArray(e)?"array":n(e):"object"},t.InvalidSourceException=function(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}},t.fuzzySearch=function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var a=0,o=0;a<n;a++){for(var l=e.codePointAt(a);o<r;)if(t.codePointAt(o++)===l)continue e;return!1}return!0},t.debounce=void 0,t.debounce=function(e,t){var r;return function(){var n=this,a=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(n,a)},t)}}},function(e,t){e.exports=r},,,function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(1)),a=r(6),o=u(r(0)),l=u(r(3)),i=r(2);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"syncPortalPosition",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.resetPortalPosition(),r.fixWindowOverflow()}}),Object.defineProperty(d(r),"fixWindowOverflow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.domRef.current.offsetWidth,t=r.props.domRef.current.offsetHeight,n=window,a=n.innerWidth,o=n.pageYOffset,l=document.documentElement.clientHeight,u=(0,i.getOffset)(r.props.domRef.current),c=u.left,s=u.top,f="self"===r.state.appendRoot?r.props.domRef.current:r.state.appendRoot,d=(0,i.getOffset)(f),p=r.props.btnRef.current,h=r.props.domRef.current,y=(0,i.getOffset)(p),b=getComputedStyle(p),g=(parseInt(b.borderTop,10)||0)+(parseInt(b.borderBottom,10)||0);if(c+e>a-20){var m=y.left+r.props.btnRef.current.offsetWidth-(e+d.left);m+d.left<0&&(m=10-d.left),h.style.left="".concat(m,"px")}t+s-o>l&&y.top-t>0&&("self"===r.state.appendRoot?h.style.top="-".concat(t-g,"px"):h.style.top="".concat(y.top+g-t,"px"))}}),r.state={},r.debouncedSyncPortalPosition=(0,i.debounce)(r.syncPortalPosition,250),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e){var r=t.calculateAppendAndClass(e.appendRoot);return{appendRoot:r.appendRoot,portalClasses:r.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=(0,l.default)({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),f(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=(0,i.getOffset)(t),n=(0,i.getOffset)(this.state.appendRoot),a=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+a,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=(0,l.default)(this.props.className,this.state.portalClasses),t=n.default.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:(0,a.createPortal)(t,this.state.appendRoot)}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:o.default.oneOfType([o.default.bool,o.default.string]),children:o.default.node.isRequired,domRef:o.default.object.isRequired,btnRef:o.default.object.isRequired,className:o.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:!1}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(1)),a=i(r(0)),o=i(r(3)),l=r(2);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==u(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=r.props.currentPage,o=r.state.totalPage;null!==n?"next"===n?a+=1:a-=1:a=parseInt(e.target.value,10)-1,a<0&&(a=0),a>o-1&&(a=o-1),t=a+1,null===n&&Number.isNaN(a)&&(a=0,t=""),r.setState({viewPage:t}),r.props.handleChangePage(a)}}),Object.defineProperty(d(r),"handlePageKeyBoard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangePage({},t)}}),Object.defineProperty(d(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.handleChangeValue(e)}}),Object.defineProperty(d(r),"handleValueKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangeValue(t)}}),r.state={viewPage:r.props.currentPage+1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n=t.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),a=t.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=t.getActiveIcons(n,a,e.currentSearch),l=o.activeIcons,i=o.activeTitles,u=e.currentPage,c=e.iconsPerPage,s={iconView:t.getCurrentViewIcons(l,c,u),titleView:t.getCurrentViewIcons(i,c,u),totalPage:Math.ceil(l.length/c)};return""!==r.viewPage&&(s.viewPage=e.currentPage+1),s}},{key:"getActiveIcons",value:function(e,t,r){var n=c(e),a=c(t);if(""===r||null===r)return{activeIcons:n,activeTitles:a};var o=[],i=[];return n.forEach(function(e,n){(0,l.fuzzySearch)(r,t[n])&&(o.push(e),i.push(t[n]))}),{activeIcons:o,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,a=(0,l.getSourceType)(r);if(Array.isArray(t)){if("object"!==a)throw new l.InvalidSourceException(a,"object")}else if("array"!==a)throw new l.InvalidSourceException(a,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),(0,l.flattenPossiblyCategorizedSource)(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,a=(r+1)*t;return e.slice(n,a)}}]),f(t,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?n.default.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},n.default.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?n.default.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},n.default.createElement("i",{className:"fipicon-angle-right"}))):null;return n.default.createElement("div",{className:"rfipicons__pager"},n.default.createElement("div",{className:"rfipicons__num"},n.default.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),n.default.createElement("span",{className:"rfipicons__sp"},"/"),n.default.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),n.default.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map(function(t,r){var a=(0,o.default)("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return n.default.createElement("span",{className:a,key:t,title:e.state.titleView[r]},n.default.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))}):n.default.createElement("span",{className:"rfipicons__icon--error"},n.default.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return n.default.createElement("div",{className:"rfipicons"},this.renderPager(),n.default.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{categories:a.default.arrayOf(a.default.string),currentCategory:a.default.number,isMulti:a.default.bool.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,currentSearch:a.default.string.isRequired,handleChangeValue:a.default.func.isRequired,currentPage:a.default.number.isRequired,iconsPerPage:a.default.number.isRequired,handleChangePage:a.default.func.isRequired,renderIcon:a.default.func.isRequired,noIconPlaceholder:a.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{categories:null,currentCategory:null,search:null}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement("div",{className:"rfipsearch"},n.default.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};l.propTypes={handleSearch:a.default.func.isRequired,value:a.default.string.isRequired,placeholder:a.default.string.isRequired};var i=l;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipcategory"},n.default.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map(function(e,t){return n.default.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)})),n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&i(r.prototype,a),t}();Object.defineProperty(u,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{handleCategory:a.default.func.isRequired,value:a.default.number.isRequired,categories:a.default.arrayOf(a.default.string).isRequired}});var c=u;t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(1)),a=c(r(0)),o=c(r(10)),l=c(r(9)),i=c(r(8)),u=r(2);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==s(n)&&"function"!=typeof n?p(this):n,Object.defineProperty(p(r),"handleCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),r.props.handleChangeCategory(t),r.props.handleChangePage(0)}}),Object.defineProperty(p(r),"handleSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.value;r.props.handleChangeSearch(t)}}),r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),d(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=(0,u.getPossibleCategories)(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),d(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?n.default.createElement(l.default,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?n.default.createElement(o.default,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,n.default.createElement(i.default,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}]),t}();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.any)]).isRequired,currentCategory:a.default.number.isRequired,currentPage:a.default.number.isRequired,currentSearch:a.default.string.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.string)]),showCategory:a.default.bool.isRequired,showSearch:a.default.bool.isRequired,iconsPerPage:a.default.number.isRequired,allCatPlaceholder:a.default.string.isRequired,searchPlaceholder:a.default.string.isRequired,noIconPlaceholder:a.default.string.isRequired,renderIcon:a.default.func.isRequired,handleChangeValue:a.default.func.isRequired,handleChangeCategory:a.default.func.isRequired,handleChangePage:a.default.func.isRequired,handleChangeSearch:a.default.func.isRequired}}),Object.defineProperty(h,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null}});var y=h;t.default=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(1)),a=l(r(0)),o=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return s(a,(r=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(f(a),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.props.onClick()}}),Object.defineProperty(f(a),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){32!==e.keyCode&&13!==e.keyCode||a.props.onClick()}}),Object.defineProperty(f(a),"handleDelete",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){e.stopPropagation(),a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"handleDeleteKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){32!==e.keyCode&&13!==e.keyCode||a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"renderEmptyIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.default.createElement("span",{className:"rfipbtn__icon--empty"},a.props.noSelectedPlaceholder)}}),r))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"renderIcon",value:function(e){var t=this;return""===e||null===e||void 0===e?this.renderEmptyIcon():n.default.createElement("span",{className:"rfipbtn__icon",key:e},n.default.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),n.default.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map(function(t){return e.renderIcon(t)}):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=(0,o.default)("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=(0,o.default)(this.props.className);return n.default.createElement("div",u({className:r,ref:this.props.domRef},e),n.default.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),n.default.createElement("div",{className:t},n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&c(r.prototype,a),t}();Object.defineProperty(d,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{className:a.default.string.isRequired,isOpen:a.default.bool.isRequired,onClick:a.default.func.isRequired,domRef:a.default.object.isRequired,isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,renderIcon:a.default.func.isRequired,handleDeleteValue:a.default.func.isRequired,noSelectedPlaceholder:a.default.string.isRequired}});var p=d;t.default=p},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(1)),a=f(r(0)),o=f(r(3)),l=r(13),i=f(r(12)),u=f(r(11)),c=f(r(7)),s=r(2);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[],v="",P=function(e){function t(e){var r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!a||"object"!==d(a)&&"function"!=typeof a?g(this):a,Object.defineProperty(g(r),"handleOuterClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target;r.isClickWithin(t)||r.closeDropdown()}}),Object.defineProperty(g(r),"handleEscapeKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e){27===e.keyCode&&r.closeDropdown()}}),Object.defineProperty(g(r),"isClickWithin",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.fipButtonRef.current.contains(e)||r.fipDropDownRef.current&&r.fipDropDownRef.current.contains(e)}}),Object.defineProperty(g(r),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.setState(function(e){return r.handleDropDown(!e.isOpen,!1)})}}),Object.defineProperty(g(r),"closeDropdown",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.handleDropDown(!1)}}),Object.defineProperty(g(r),"handleDropDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a={isOpen:e};return a.elemClass=t.getDerivedClassName("rfip",r.props.theme,r.props.isMulti,e),a.btnClass=t.getDerivedClassName("rfipbtn",r.props.theme,r.props.isMulti,e),a.ddClass=t.getDerivedClassName("rfipdropdown",r.props.theme,r.props.isMulti,e),n&&r.setState(a),a}}),Object.defineProperty(g(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t;r.props.isMulti?(t=p(r.state.value)).includes(e)?(t=t.filter(function(t){return t!==e})).length||(t=m):t.push(e):t=e===r.state.value?v:e,r.setState({value:t,isOpen:!r.props.closeOnSelect}),r.props.onChange(t)}}),Object.defineProperty(g(r),"handleDeleteValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n;n=r.props.isMulti?r.state.value.filter(function(t){return t!==e}):t.getDerivedValue(n,r.props.isMulti),r.setState({value:n}),r.props.onChange(n)}}),Object.defineProperty(g(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentPage:e})}}),Object.defineProperty(g(r),"handleChangeCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentCategory:e,currentPage:0})}}),Object.defineProperty(g(r),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentSearch:e,currentPage:0})}}),Object.defineProperty(g(r),"resetPortalStyle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){["maxHeight","paddingTop","paddingBottom"].forEach(function(t){e.style[t]=null})}}),Object.defineProperty(g(r),"handlePortalEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t);r.fipPortalComputedStyle={height:n.height,paddingTop:n.paddingTop,paddingBottom:n.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach(function(e){t.style[e]="0px"})}}),Object.defineProperty(g(r),"handlePortalEntering",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight=r.fipPortalComputedStyle.height,t.style.paddingTop=r.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=r.fipPortalComputedStyle.paddingBottom}}),Object.defineProperty(g(r),"handlePortalEntered",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t),r.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()}}),Object.defineProperty(g(r),"handlePortalExit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t).height;t.style.maxHeight=n}}),Object.defineProperty(g(r),"handlePortalExiting",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"}}),Object.defineProperty(g(r),"renderIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if("function"==typeof r.props.renderFunc)return r.props.renderFunc(e);if("class"===r.props.renderUsing)return n.default.createElement("i",{className:e});var t=h({},r.props.renderUsing,r.props.convertHex?(0,s.convertToHex)(e):e);return n.default.createElement("i",t)}}),r.fipButtonRef=n.default.createRef(),r.fipDropDownRef=n.default.createRef(),r.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},r.fipPortalComputedStyle=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),b(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n={};return n.elemClass=t.getDerivedClassName("rfip",e.theme,e.isMulti,r.isOpen),n.btnClass=t.getDerivedClassName("rfipbtn",e.theme,e.isMulti,r.isOpen),n.ddClass=t.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,r.isOpen),n.value=t.getDerivedValue(e.value,e.isMulti),e.showCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return(0,o.default)(e,"".concat(e,"--").concat(t),h({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?p(e):m:"number"!=typeof e&&"string"!=typeof e&&(r=v),r}}]),b(t,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach(function(t){document.addEventListener(t,e.handleOuterClick,!1)}),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach(function(t){document.removeEventListener(t,e.handleOuterClick,!1)}),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return n.default.createElement("div",{className:this.state.elemClass,ref:this.fipRef},n.default.createElement(i.default,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),n.default.createElement(l.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},n.default.createElement(c.default,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},n.default.createElement(u.default,e))))}}]),t}();Object.defineProperty(P,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),iconsPerPage:a.default.number,theme:a.default.string,onChange:a.default.func.isRequired,showCategory:a.default.bool,showSearch:a.default.bool,value:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.number,a.default.string]),isMulti:a.default.bool,renderUsing:a.default.string,convertHex:a.default.bool,renderFunc:a.default.func,appendTo:a.default.oneOfType([a.default.bool,a.default.string]),allCatPlaceholder:a.default.string,searchPlaceholder:a.default.string,noIconPlaceholder:a.default.string,noSelectedPlaceholder:a.default.string,closeOnSelect:a.default.bool}}),Object.defineProperty(P,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}}),Object.defineProperty(P,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"FontIconPicker"});var O=P;t.default=O},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(14))&&n.__esModule?n:{default:n}).default;t.default=a}]).default});


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/clsx/dist/clsx.m.js":
/*!******************************************!*\
  !*** ./node_modules/clsx/dist/clsx.m.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
});


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-tabs/esm/components/Tab.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/Tab.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tab; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DEFAULT_CLASS = 'react-tabs__tab';

var Tab = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Tab, _Component);

  function Tab() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.checkFocus();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.checkFocus();
  };

  _proto.checkFocus = function checkFocus() {
    var _this$props = this.props,
        selected = _this$props.selected,
        focus = _this$props.focus;

    if (selected && focus) {
      this.node.focus();
    }
  };

  _proto.render = function render() {
    var _cx,
        _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        disabled = _this$props2.disabled,
        disabledClassName = _this$props2.disabledClassName,
        focus = _this$props2.focus,
        id = _this$props2.id,
        panelId = _this$props2.panelId,
        selected = _this$props2.selected,
        selectedClassName = _this$props2.selectedClassName,
        tabIndex = _this$props2.tabIndex,
        tabRef = _this$props2.tabRef,
        attributes = _objectWithoutPropertiesLoose(_this$props2, ["children", "className", "disabled", "disabledClassName", "focus", "id", "panelId", "selected", "selectedClassName", "tabIndex", "tabRef"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", _extends({}, attributes, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className, (_cx = {}, _cx[selectedClassName] = selected, _cx[disabledClassName] = disabled, _cx)),
      ref: function ref(node) {
        _this.node = node;
        if (tabRef) tabRef(node);
      },
      role: "tab",
      id: id,
      "aria-selected": selected ? 'true' : 'false',
      "aria-disabled": disabled ? 'true' : 'false',
      "aria-controls": panelId,
      tabIndex: tabIndex || (selected ? '0' : null)
    }), children);
  };

  return Tab;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Tab.defaultProps = {
  className: DEFAULT_CLASS,
  disabledClassName: DEFAULT_CLASS + "--disabled",
  focus: false,
  id: null,
  panelId: null,
  selected: false,
  selectedClassName: DEFAULT_CLASS + "--selected"
};

Tab.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  disabledClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  focus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  // private
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  // private
  panelId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  // private
  selected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  // private
  selectedClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  tabRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func // private

} : undefined;
Tab.tabsRole = 'Tab';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/TabList.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/TabList.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabList; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TabList = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TabList, _Component);

  function TabList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TabList.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["children", "className"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", _extends({}, attributes, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className),
      role: "tablist"
    }), children);
  };

  return TabList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

TabList.defaultProps = {
  className: 'react-tabs__tab-list'
};

TabList.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object])
} : undefined;
TabList.tabsRole = 'TabList';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/TabPanel.js":
/*!************************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/TabPanel.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabPanel; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DEFAULT_CLASS = 'react-tabs__tab-panel';

var TabPanel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TabPanel, _Component);

  function TabPanel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = TabPanel.prototype;

  _proto.render = function render() {
    var _cx;

    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        forceRender = _this$props.forceRender,
        id = _this$props.id,
        selected = _this$props.selected,
        selectedClassName = _this$props.selectedClassName,
        tabId = _this$props.tabId,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["children", "className", "forceRender", "id", "selected", "selectedClassName", "tabId"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, attributes, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className, (_cx = {}, _cx[selectedClassName] = selected, _cx)),
      role: "tabpanel",
      id: id,
      "aria-labelledby": tabId
    }), forceRender || selected ? children : null);
  };

  return TabPanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

TabPanel.defaultProps = {
  className: DEFAULT_CLASS,
  forceRender: false,
  selectedClassName: DEFAULT_CLASS + "--selected"
};

TabPanel.propTypes =  true ? {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  // private
  selected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  // private
  selectedClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  tabId: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string // private

} : undefined;
TabPanel.tabsRole = 'TabPanel';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/Tabs.js":
/*!********************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/Tabs.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabs; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/propTypes */ "./node_modules/react-tabs/esm/helpers/propTypes.js");
/* harmony import */ var _UncontrolledTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UncontrolledTabs */ "./node_modules/react-tabs/esm/components/UncontrolledTabs.js");
/* harmony import */ var _helpers_count__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/count */ "./node_modules/react-tabs/esm/helpers/count.js");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MODE_CONTROLLED = 0;
var MODE_UNCONTROLLED = 1;

var Tabs = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.handleSelected = function (index, last, event) {
      var onSelect = _this.props.onSelect;
      var mode = _this.state.mode; // Call change event handler

      if (typeof onSelect === 'function') {
        // Check if the change event handler cancels the tab change
        if (onSelect(index, last, event) === false) return;
      }

      var state = {
        // Set focus if the change was triggered from the keyboard
        focus: event.type === 'keydown'
      };

      if (mode === MODE_UNCONTROLLED) {
        // Update selected index
        state.selectedIndex = index;
      }

      _this.setState(state);
    };

    _this.state = Tabs.copyPropsToState(_this.props, {}, props.defaultFocus);
    return _this;
  }

  Tabs.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    return Tabs.copyPropsToState(props, state);
  };

  Tabs.getModeFromProps = function getModeFromProps(props) {
    return props.selectedIndex === null ? MODE_UNCONTROLLED : MODE_CONTROLLED;
  };

  // preserve the existing selectedIndex from state.
  // If the state has not selectedIndex, default to the defaultIndex or 0
  Tabs.copyPropsToState = function copyPropsToState(props, state, focus) {
    if (focus === void 0) {
      focus = false;
    }

    if ("development" !== 'production' && state.mode !== undefined && state.mode !== Tabs.getModeFromProps(props)) {
      throw new Error("Switching between controlled mode (by using `selectedIndex`) and uncontrolled mode is not supported in `Tabs`.\nFor more information about controlled and uncontrolled mode of react-tabs see https://github.com/reactjs/react-tabs#controlled-vs-uncontrolled-mode.");
    }

    var newState = {
      focus: focus,
      mode: Tabs.getModeFromProps(props)
    };

    if (newState.mode === MODE_UNCONTROLLED) {
      var maxTabIndex = Math.max(0, Object(_helpers_count__WEBPACK_IMPORTED_MODULE_4__["getTabsCount"])(props.children) - 1);
      var selectedIndex = null;

      if (state.selectedIndex != null) {
        selectedIndex = Math.min(state.selectedIndex, maxTabIndex);
      } else {
        selectedIndex = props.defaultIndex || 0;
      }

      newState.selectedIndex = selectedIndex;
    }

    return newState;
  };

  var _proto = Tabs.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        defaultIndex = _this$props.defaultIndex,
        defaultFocus = _this$props.defaultFocus,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "defaultIndex", "defaultFocus"]);

    var _this$state = this.state,
        focus = _this$state.focus,
        selectedIndex = _this$state.selectedIndex;
    props.focus = focus;
    props.onSelect = this.handleSelected;

    if (selectedIndex != null) {
      props.selectedIndex = selectedIndex;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UncontrolledTabs__WEBPACK_IMPORTED_MODULE_3__["default"], props, children);
  };

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Tabs.defaultProps = {
  defaultFocus: false,
  forceRenderTabPanel: false,
  selectedIndex: null,
  defaultIndex: null,
  environment: null,
  disableUpDownKeys: false
};

Tabs.propTypes =  true ? {
  children: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__["childrenPropType"],
  direction: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['rtl', 'ltr']),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  defaultFocus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  defaultIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  disabledTabClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  disableUpDownKeys: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  domRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  forceRenderTabPanel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onSelect: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__["onSelectPropType"],
  selectedIndex: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_2__["selectedIndexPropType"],
  selectedTabClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  selectedTabPanelClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  environment: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
} : undefined;
Tabs.tabsRole = 'Tabs';

/***/ }),

/***/ "./node_modules/react-tabs/esm/components/UncontrolledTabs.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-tabs/esm/components/UncontrolledTabs.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UncontrolledTabs; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _helpers_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/uuid */ "./node_modules/react-tabs/esm/helpers/uuid.js");
/* harmony import */ var _helpers_propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/propTypes */ "./node_modules/react-tabs/esm/helpers/propTypes.js");
/* harmony import */ var _helpers_count__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/count */ "./node_modules/react-tabs/esm/helpers/count.js");
/* harmony import */ var _helpers_childrenDeepMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/childrenDeepMap */ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js");
/* harmony import */ var _helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










function isNode(node) {
  return node && 'getAttribute' in node;
} // Determine if a node from event.target is a Tab element


function isTabNode(node) {
  return isNode(node) && node.getAttribute('role') === 'tab';
} // Determine if a tab node is disabled


function isTabDisabled(node) {
  return isNode(node) && node.getAttribute('aria-disabled') === 'true';
}

var canUseActiveElement;

function determineCanUseActiveElement(environment) {
  var env = environment || (typeof window !== 'undefined' ? window : undefined);

  try {
    canUseActiveElement = !!(typeof env !== 'undefined' && env.document && env.document.activeElement);
  } catch (e) {
    // Work around for IE bug when accessing document.activeElement in an iframe
    // Refer to the following resources:
    // http://stackoverflow.com/a/10982960/369687
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12733599
    canUseActiveElement = false;
  }
}

var UncontrolledTabs = /*#__PURE__*/function (_Component) {
  _inheritsLoose(UncontrolledTabs, _Component);

  function UncontrolledTabs() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.tabNodes = [];

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          direction = _this$props.direction,
          disableUpDownKeys = _this$props.disableUpDownKeys;

      if (_this.isTabFromContainer(e.target)) {
        var index = _this.props.selectedIndex;
        var preventDefault = false;
        var useSelectedIndex = false;

        if (e.keyCode === 32 || e.keyCode === 13) {
          preventDefault = true;
          useSelectedIndex = false;

          _this.handleClick(e);
        }

        if (e.keyCode === 37 || !disableUpDownKeys && e.keyCode === 38) {
          // Select next tab to the left, validate if up arrow is not disabled
          if (direction === 'rtl') {
            index = _this.getNextTab(index);
          } else {
            index = _this.getPrevTab(index);
          }

          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 39 || !disableUpDownKeys && e.keyCode === 40) {
          // Select next tab to the right, validate if down arrow is not disabled
          if (direction === 'rtl') {
            index = _this.getPrevTab(index);
          } else {
            index = _this.getNextTab(index);
          }

          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 35) {
          // Select last tab (End key)
          index = _this.getLastTab();
          preventDefault = true;
          useSelectedIndex = true;
        } else if (e.keyCode === 36) {
          // Select first tab (Home key)
          index = _this.getFirstTab();
          preventDefault = true;
          useSelectedIndex = true;
        } // This prevents scrollbars from moving around


        if (preventDefault) {
          e.preventDefault();
        } // Only use the selected index in the state if we're not using the tabbed index


        if (useSelectedIndex) {
          _this.setSelected(index, e);
        }
      }
    };

    _this.handleClick = function (e) {
      var node = e.target;

      do {
        if (_this.isTabFromContainer(node)) {
          if (isTabDisabled(node)) {
            return;
          }

          var index = [].slice.call(node.parentNode.children).filter(isTabNode).indexOf(node);

          _this.setSelected(index, e);

          return;
        }
      } while ((node = node.parentNode) != null);
    };

    return _this;
  }

  var _proto = UncontrolledTabs.prototype;

  _proto.setSelected = function setSelected(index, event) {
    // Check index boundary
    if (index < 0 || index >= this.getTabsCount()) return;
    var _this$props2 = this.props,
        onSelect = _this$props2.onSelect,
        selectedIndex = _this$props2.selectedIndex; // Call change event handler

    onSelect(index, selectedIndex, event);
  };

  _proto.getNextTab = function getNextTab(index) {
    var count = this.getTabsCount(); // Look for non-disabled tab from index to the last tab on the right

    for (var i = index + 1; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from first on left to index


    for (var _i = 0; _i < index; _i++) {
      if (!isTabDisabled(this.getTab(_i))) {
        return _i;
      }
    } // No tabs are disabled, return index


    return index;
  };

  _proto.getPrevTab = function getPrevTab(index) {
    var i = index; // Look for non-disabled tab from index to first tab on the left

    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // If no tab found, continue searching from last tab on right to index


    i = this.getTabsCount();

    while (i-- > index) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    } // No tabs are disabled, return index


    return index;
  };

  _proto.getFirstTab = function getFirstTab() {
    var count = this.getTabsCount(); // Look for non disabled tab from the first tab

    for (var i = 0; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    }

    return null;
  };

  _proto.getLastTab = function getLastTab() {
    var i = this.getTabsCount(); // Look for non disabled tab from the last tab

    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i;
      }
    }

    return null;
  };

  _proto.getTabsCount = function getTabsCount() {
    var children = this.props.children;
    return Object(_helpers_count__WEBPACK_IMPORTED_MODULE_5__["getTabsCount"])(children);
  };

  _proto.getPanelsCount = function getPanelsCount() {
    var children = this.props.children;
    return Object(_helpers_count__WEBPACK_IMPORTED_MODULE_5__["getPanelsCount"])(children);
  };

  _proto.getTab = function getTab(index) {
    return this.tabNodes["tabs-" + index];
  };

  _proto.getChildren = function getChildren() {
    var _this2 = this;

    var index = 0;
    var _this$props3 = this.props,
        children = _this$props3.children,
        disabledTabClassName = _this$props3.disabledTabClassName,
        focus = _this$props3.focus,
        forceRenderTabPanel = _this$props3.forceRenderTabPanel,
        selectedIndex = _this$props3.selectedIndex,
        selectedTabClassName = _this$props3.selectedTabClassName,
        selectedTabPanelClassName = _this$props3.selectedTabPanelClassName,
        environment = _this$props3.environment;
    this.tabIds = this.tabIds || [];
    this.panelIds = this.panelIds || [];
    var diff = this.tabIds.length - this.getTabsCount(); // Add ids if new tabs have been added
    // Don't bother removing ids, just keep them in case they are added again
    // This is more efficient, and keeps the uuid counter under control

    while (diff++ < 0) {
      this.tabIds.push(Object(_helpers_uuid__WEBPACK_IMPORTED_MODULE_3__["default"])());
      this.panelIds.push(Object(_helpers_uuid__WEBPACK_IMPORTED_MODULE_3__["default"])());
    } // Map children to dynamically setup refs


    return Object(_helpers_childrenDeepMap__WEBPACK_IMPORTED_MODULE_6__["deepMap"])(children, function (child) {
      var result = child; // Clone TabList and Tab components to have refs

      if (Object(_helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__["isTabList"])(child)) {
        var listIndex = 0; // Figure out if the current focus in the DOM is set on a Tab
        // If it is we should keep the focus on the next selected tab

        var wasTabFocused = false;

        if (canUseActiveElement == null) {
          determineCanUseActiveElement(environment);
        }

        if (canUseActiveElement) {
          wasTabFocused = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.toArray(child.props.children).filter(_helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__["isTab"]).some(function (tab, i) {
            var env = environment || (typeof window !== 'undefined' ? window : undefined);
            return env && env.document.activeElement === _this2.getTab(i);
          });
        }

        result = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child, {
          children: Object(_helpers_childrenDeepMap__WEBPACK_IMPORTED_MODULE_6__["deepMap"])(child.props.children, function (tab) {
            var key = "tabs-" + listIndex;
            var selected = selectedIndex === listIndex;
            var props = {
              tabRef: function tabRef(node) {
                _this2.tabNodes[key] = node;
              },
              id: _this2.tabIds[listIndex],
              panelId: _this2.panelIds[listIndex],
              selected: selected,
              focus: selected && (focus || wasTabFocused)
            };
            if (selectedTabClassName) props.selectedClassName = selectedTabClassName;
            if (disabledTabClassName) props.disabledClassName = disabledTabClassName;
            listIndex++;
            return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(tab, props);
          })
        });
      } else if (Object(_helpers_elementTypes__WEBPACK_IMPORTED_MODULE_7__["isTabPanel"])(child)) {
        var props = {
          id: _this2.panelIds[index],
          tabId: _this2.tabIds[index],
          selected: selectedIndex === index
        };
        if (forceRenderTabPanel) props.forceRender = forceRenderTabPanel;
        if (selectedTabPanelClassName) props.selectedClassName = selectedTabPanelClassName;
        index++;
        result = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child, props);
      }

      return result;
    });
  };

  /**
   * Determine if a node from event.target is a Tab element for the current Tabs container.
   * If the clicked element is not a Tab, it returns false.
   * If it finds another Tabs container between the Tab and `this`, it returns false.
   */
  _proto.isTabFromContainer = function isTabFromContainer(node) {
    // return immediately if the clicked element is not a Tab.
    if (!isTabNode(node)) {
      return false;
    } // Check if the first occurrence of a Tabs container is `this` one.


    var nodeAncestor = node.parentElement;

    do {
      if (nodeAncestor === this.node) return true;
      if (nodeAncestor.getAttribute('data-tabs')) break;
      nodeAncestor = nodeAncestor.parentElement;
    } while (nodeAncestor);

    return false;
  };

  _proto.render = function render() {
    var _this3 = this;

    // Delete all known props, so they don't get added to DOM
    var _this$props4 = this.props,
        children = _this$props4.children,
        className = _this$props4.className,
        disabledTabClassName = _this$props4.disabledTabClassName,
        domRef = _this$props4.domRef,
        focus = _this$props4.focus,
        forceRenderTabPanel = _this$props4.forceRenderTabPanel,
        onSelect = _this$props4.onSelect,
        selectedIndex = _this$props4.selectedIndex,
        selectedTabClassName = _this$props4.selectedTabClassName,
        selectedTabPanelClassName = _this$props4.selectedTabPanelClassName,
        environment = _this$props4.environment,
        disableUpDownKeys = _this$props4.disableUpDownKeys,
        attributes = _objectWithoutPropertiesLoose(_this$props4, ["children", "className", "disabledTabClassName", "domRef", "focus", "forceRenderTabPanel", "onSelect", "selectedIndex", "selectedTabClassName", "selectedTabPanelClassName", "environment", "disableUpDownKeys"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, attributes, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(className),
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      ref: function ref(node) {
        _this3.node = node;
        if (domRef) domRef(node);
      },
      "data-tabs": true
    }), this.getChildren());
  };

  return UncontrolledTabs;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

UncontrolledTabs.defaultProps = {
  className: 'react-tabs',
  focus: false
};

UncontrolledTabs.propTypes =  true ? {
  children: _helpers_propTypes__WEBPACK_IMPORTED_MODULE_4__["childrenPropType"],
  direction: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['rtl', 'ltr']),
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),
  disabledTabClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  disableUpDownKeys: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  domRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  focus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  forceRenderTabPanel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  selectedIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  selectedTabClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  selectedTabPanelClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  environment: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
} : undefined;

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/childrenDeepMap.js ***!
  \****************************************************************/
/*! exports provided: deepMap, deepForEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepMap", function() { return deepMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepForEach", function() { return deepForEach; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elementTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function isTabChild(child) {
  return Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTab"])(child) || Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabList"])(child) || Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabPanel"])(child);
}

function deepMap(children, callback) {
  return react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return null;

    if (isTabChild(child)) {
      return callback(child);
    }

    if (child.props && child.props.children && typeof child.props.children === 'object') {
      // Clone the child that has children and map them too
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, _extends({}, child.props, {
        children: deepMap(child.props.children, callback)
      }));
    }

    return child;
  });
}
function deepForEach(children, callback) {
  return react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(children, function (child) {
    // null happens when conditionally rendering TabPanel/Tab
    // see https://github.com/reactjs/react-tabs/issues/37
    if (child === null) return;

    if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTab"])(child) || Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabPanel"])(child)) {
      callback(child);
    } else if (child.props && child.props.children && typeof child.props.children === 'object') {
      if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabList"])(child)) callback(child);
      deepForEach(child.props.children, callback);
    }
  });
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/count.js":
/*!******************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/count.js ***!
  \******************************************************/
/*! exports provided: getTabsCount, getPanelsCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabsCount", function() { return getTabsCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPanelsCount", function() { return getPanelsCount; });
/* harmony import */ var _childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./childrenDeepMap */ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js");
/* harmony import */ var _elementTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");


function getTabsCount(children) {
  var tabCount = 0;
  Object(_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__["deepForEach"])(children, function (child) {
    if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTab"])(child)) tabCount++;
  });
  return tabCount;
}
function getPanelsCount(children) {
  var panelCount = 0;
  Object(_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__["deepForEach"])(children, function (child) {
    if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabPanel"])(child)) panelCount++;
  });
  return panelCount;
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/elementTypes.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/elementTypes.js ***!
  \*************************************************************/
/*! exports provided: isTab, isTabList, isTabPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTab", function() { return isTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabList", function() { return isTabList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabPanel", function() { return isTabPanel; });
function makeTypeChecker(tabsRole) {
  return function (element) {
    return !!element.type && element.type.tabsRole === tabsRole;
  };
}

var isTab = makeTypeChecker('Tab');
var isTabList = makeTypeChecker('TabList');
var isTabPanel = makeTypeChecker('TabPanel');

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/propTypes.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/propTypes.js ***!
  \**********************************************************/
/*! exports provided: childrenPropType, onSelectPropType, selectedIndexPropType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childrenPropType", function() { return childrenPropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSelectPropType", function() { return onSelectPropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedIndexPropType", function() { return selectedIndexPropType; });
/* harmony import */ var _childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./childrenDeepMap */ "./node_modules/react-tabs/esm/helpers/childrenDeepMap.js");
/* harmony import */ var _elementTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elementTypes */ "./node_modules/react-tabs/esm/helpers/elementTypes.js");


function childrenPropType(props, propName, componentName) {
  var error;
  var tabsCount = 0;
  var panelsCount = 0;
  var tabListFound = false;
  var listTabs = [];
  var children = props[propName];
  Object(_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__["deepForEach"])(children, function (child) {
    if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabList"])(child)) {
      if (child.props && child.props.children && typeof child.props.children === 'object') {
        Object(_childrenDeepMap__WEBPACK_IMPORTED_MODULE_0__["deepForEach"])(child.props.children, function (listChild) {
          return listTabs.push(listChild);
        });
      }

      if (tabListFound) {
        error = new Error("Found multiple 'TabList' components inside 'Tabs'. Only one is allowed.");
      }

      tabListFound = true;
    }

    if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTab"])(child)) {
      if (!tabListFound || listTabs.indexOf(child) === -1) {
        error = new Error("Found a 'Tab' component outside of the 'TabList' component. 'Tab' components " + "have to be inside the 'TabList' component.");
      }

      tabsCount++;
    } else if (Object(_elementTypes__WEBPACK_IMPORTED_MODULE_1__["isTabPanel"])(child)) {
      panelsCount++;
    }
  });

  if (!error && tabsCount !== panelsCount) {
    error = new Error("There should be an equal number of 'Tab' and 'TabPanel' in `" + componentName + "`. " + ("Received " + tabsCount + " 'Tab' and " + panelsCount + " 'TabPanel'."));
  }

  return error;
}
function onSelectPropType(props, propName, componentName, location, propFullName) {
  var prop = props[propName];
  var name = propFullName || propName;
  var error = null;

  if (prop && typeof prop !== 'function') {
    error = new Error("Invalid " + location + " `" + name + "` of type `" + typeof prop + "` supplied " + ("to `" + componentName + "`, expected `function`."));
  } else if (props.selectedIndex != null && prop == null) {
    error = new Error("The " + location + " `" + name + "` is marked as required in `" + componentName + "`, but " + "its value is `undefined` or `null`.\n" + "`onSelect` is required when `selectedIndex` is also set. Not doing so will " + "make the tabs not do anything, as `selectedIndex` indicates that you want to " + "handle the selected tab yourself.\n" + "If you only want to set the inital tab replace `selectedIndex` with `defaultIndex`.");
  }

  return error;
}
function selectedIndexPropType(props, propName, componentName, location, propFullName) {
  var prop = props[propName];
  var name = propFullName || propName;
  var error = null;

  if (prop != null && typeof prop !== 'number') {
    error = new Error("Invalid " + location + " `" + name + "` of type `" + typeof prop + "` supplied to " + ("`" + componentName + "`, expected `number`."));
  } else if (props.defaultIndex != null && prop != null) {
    return new Error("The " + location + " `" + name + "` cannot be used together with `defaultIndex` " + ("in `" + componentName + "`.\n") + ("Either remove `" + name + "` to let `" + componentName + "` handle the selected ") + "tab internally or remove `defaultIndex` to handle it yourself.");
  }

  return error;
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/helpers/uuid.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-tabs/esm/helpers/uuid.js ***!
  \*****************************************************/
/*! exports provided: default, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
// Get a universally unique identifier
var count = 0;
function uuid() {
  return "react-tabs-" + count++;
}
function reset() {
  count = 0;
}

/***/ }),

/***/ "./node_modules/react-tabs/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-tabs/esm/index.js ***!
  \**********************************************/
/*! exports provided: Tabs, TabList, Tab, TabPanel, resetIdCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Tabs */ "./node_modules/react-tabs/esm/components/Tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _components_Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_TabList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/TabList */ "./node_modules/react-tabs/esm/components/TabList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabList", function() { return _components_TabList__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Tab */ "./node_modules/react-tabs/esm/components/Tab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _components_Tab__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_TabPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TabPanel */ "./node_modules/react-tabs/esm/components/TabPanel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return _components_TabPanel__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _helpers_uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/uuid */ "./node_modules/react-tabs/esm/helpers/uuid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIdCounter", function() { return _helpers_uuid__WEBPACK_IMPORTED_MODULE_4__["reset"]; });







/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/react-transition-group/node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-transition-group/node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./src/blocks/custom-buttons/index.js":
/*!********************************************!*\
  !*** ./src/blocks/custom-buttons/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Custom Gutenberg Block for Buttons
 */


var CustomButton = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(CustomButton, _React$Component);

  var _super = _createSuper(CustomButton);

  function CustomButton(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CustomButton);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CustomButton, [{
    key: "onChange",
    value: function onChange(e) {
      if (e.target.classList.value.indexOf(e.target.value) < 0) {
        this.props.onChange(e.target.value);
      } else {
        this.props.onChange('');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("button", {
        className: this.props.className,
        onClick: this.onChange,
        value: this.props.value
      });
    }
  }]);

  return CustomButton;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CustomButton);

/***/ }),

/***/ "./src/blocks/emage-hover-effects-block.js":
/*!*************************************************!*\
  !*** ./src/blocks/emage-hover-effects-block.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_assets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/assets.js */ "./src/blocks/js/assets.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _selectize_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectize/index */ "./src/blocks/selectize/index.js");
/* harmony import */ var _selectize_multiple_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectize-multiple/index */ "./src/blocks/selectize-multiple/index.js");
/* harmony import */ var _custom_buttons_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-buttons/index */ "./src/blocks/custom-buttons/index.js");
/* harmony import */ var _repeater_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./repeater/index */ "./src/blocks/repeater/index.js");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-tabs */ "./node_modules/react-tabs/esm/index.js");











var Fragment = wp.element.Fragment;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
registerBlockType('block/emage-hover-effects-block', {
  title: 'Emage Hover Effects',
  description: 'Add hover effects to images',
  icon: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["EHEG_LOGO"])(),
  category: 'common',
  // EDIT FUNCTION
  edit: function edit(props) {
    var _ = __webpack_require__(/*! lodash */ "lodash");

    var setAttributes = props.setAttributes;
    var webfonts = eheg.data['webfonts'];
    var license_purchase_code = props.attributes.license_purchase_code;
    var license_action_deactivate = props.attributes.license_action_deactivate;
    var license_action_activate = props.attributes.license_action_activate;
    var license = props.attributes.license;
    var placeholder = props.attributes.placeholder;
    var clientId = props.attributes.clientId;
    var image = props.attributes.image;
    var imagefull = props.attributes.imagefull;
    var imgid = props.attributes.imgid;
    var img_size = props.attributes.img_size;
    var img_size_default = props.attributes.img_size_default;
    var img_size_id = props.attributes.img_size_id;
    var image_effect = props.attributes.image_effect;
    var image_opacity = props.attributes.image_opacity;
    var image_duration = props.attributes.image_duration;
    var target = props.attributes.target;
    var link = props.attributes.link;
    var customalt = props.attributes.customalt;
    var linktarget = props.attributes.linktarget;
    var linkrel = props.attributes.linkrel;
    var overlay_show = props.attributes.overlay_show;
    var overlay_effect = props.attributes.overlay_effect;
    var overlay_duration = props.attributes.overlay_duration;
    var title = props.attributes.title;
    var subtitle = props.attributes.subtitle;
    var content = props.attributes.content;
    var align = props.attributes.align;
    var valign = props.attributes.valign;
    var content_effect = props.attributes.content_effect;
    var content_duration = props.attributes.content_duration;
    var content_delay = props.attributes.content_delay;
    var content_appearance = props.attributes.content_appearance;
    var buttons = props.attributes.buttons;
    var buttons_direction = props.attributes.buttons_direction;
    var buttons_align = props.attributes.buttons_align;
    var buttons_valign = props.attributes.buttons_valign;
    var buttons_icon_align = props.attributes.buttons_icon_align;
    var image_background = props.attributes.image_background;
    var match_height = props.attributes.match_height;
    var image_height = props.attributes.image_height;
    var image_brr_unit = props.attributes.image_brr_unit;
    var image_brr_check = props.attributes.image_brr_check;
    var image_brr_top_left = props.attributes.image_brr_top_left;
    var image_brr_top_right = props.attributes.image_brr_top_right;
    var image_brr_bottom_left = props.attributes.image_brr_bottom_left;
    var image_brr_bottom_right = props.attributes.image_brr_bottom_right;
    var overlay_bdr_type = props.attributes.overlay_bdr_type;
    var overlay_bdr_unit = props.attributes.overlay_bdr_unit;
    var overlay_bdr_check = props.attributes.overlay_bdr_check;
    var overlay_bdr_top = props.attributes.overlay_bdr_top;
    var overlay_bdr_right = props.attributes.overlay_bdr_right;
    var overlay_bdr_bottom = props.attributes.overlay_bdr_bottom;
    var overlay_bdr_left = props.attributes.overlay_bdr_left;
    var overlay_bdr_color = props.attributes.overlay_bdr_color;
    var overlay_margin_unit = props.attributes.overlay_margin_unit;
    var overlay_margin_check = props.attributes.overlay_margin_check;
    var overlay_margin_top = props.attributes.overlay_margin_top;
    var overlay_margin_right = props.attributes.overlay_margin_right;
    var overlay_margin_bottom = props.attributes.overlay_margin_bottom;
    var overlay_margin_left = props.attributes.overlay_margin_left;
    var overlay_bg_type = props.attributes.overlay_bg_type;
    var overlay_bg_cl_color = props.attributes.overlay_bg_cl_color;
    var overlay_bg_cl_image = props.attributes.overlay_bg_cl_image;
    var overlay_bg_cl_position = props.attributes.overlay_bg_cl_position;
    var overlay_bg_cl_attachment = props.attributes.overlay_bg_cl_attachment;
    var overlay_bg_cl_repeat = props.attributes.overlay_bg_cl_repeat;
    var overlay_bg_cl_size = props.attributes.overlay_bg_cl_size;
    var overlay_bg_lg_color = props.attributes.overlay_bg_lg_color;
    var overlay_bg_lg_location = props.attributes.overlay_bg_lg_location;
    var overlay_bg_lg_second_color = props.attributes.overlay_bg_lg_second_color;
    var overlay_bg_lg_second_location = props.attributes.overlay_bg_lg_second_location;
    var overlay_bg_lg_type = props.attributes.overlay_bg_lg_type;
    var overlay_bg_lg_angle = props.attributes.overlay_bg_lg_angle;
    var overlay_bg_lg_position = props.attributes.overlay_bg_lg_position;
    var title_color = props.attributes.title_color;
    var subtitle_color = props.attributes.subtitle_color;
    var content_color = props.attributes.content_color;
    var title_font = props.attributes.title_font;
    var title_font_subset = props.attributes.title_font_subset;
    var title_font_size = props.attributes.title_font_size;
    var title_font_weight = props.attributes.title_font_weight;
    var title_font_transform = props.attributes.title_font_transform;
    var title_font_style = props.attributes.title_font_style;
    var title_font_decoration = props.attributes.title_font_decoration;
    var title_line_height = props.attributes.title_line_height;
    var title_letter_spacing = props.attributes.title_letter_spacing;
    var title_style = props.attributes.title_style;
    var subtitle_font = props.attributes.subtitle_font;
    var subtitle_font_subset = props.attributes.subtitle_font_subset;
    var subtitle_font_size = props.attributes.subtitle_font_size;
    var subtitle_font_weight = props.attributes.subtitle_font_weight;
    var subtitle_font_transform = props.attributes.subtitle_font_transform;
    var subtitle_font_style = props.attributes.subtitle_font_style;
    var subtitle_font_decoration = props.attributes.subtitle_font_decoration;
    var subtitle_line_height = props.attributes.subtitle_line_height;
    var subtitle_letter_spacing = props.attributes.subtitle_letter_spacing;
    var subtitle_style = props.attributes.subtitle_style;
    var content_font = props.attributes.content_font;
    var content_font_subset = props.attributes.content_font_subset;
    var content_font_size = props.attributes.content_font_size;
    var content_font_weight = props.attributes.content_font_weight;
    var content_font_transform = props.attributes.content_font_transform;
    var content_font_style = props.attributes.content_font_style;
    var content_font_decoration = props.attributes.content_font_decoration;
    var content_line_height = props.attributes.content_line_height;
    var content_letter_spacing = props.attributes.content_letter_spacing;
    var content_style = props.attributes.content_style;
    var padding_unit = props.attributes.padding_unit;
    var padding_check = props.attributes.padding_check;
    var padding_top = props.attributes.padding_top;
    var padding_right = props.attributes.padding_right;
    var padding_bottom = props.attributes.padding_bottom;
    var padding_left = props.attributes.padding_left;
    var margin_unit = props.attributes.margin_unit;
    var margin_check = props.attributes.margin_check;
    var margin_top = props.attributes.margin_top;
    var margin_right = props.attributes.margin_right;
    var margin_bottom = props.attributes.margin_bottom;
    var margin_left = props.attributes.margin_left;
    var content_bg_type = props.attributes.content_bg_type;
    var content_bg_cl_color = props.attributes.content_bg_cl_color;
    var content_bg_cl_image = props.attributes.content_bg_cl_image;
    var content_bg_cl_position = props.attributes.content_bg_cl_position;
    var content_bg_cl_attachment = props.attributes.content_bg_cl_attachment;
    var content_bg_cl_repeat = props.attributes.content_bg_cl_repeat;
    var content_bg_cl_size = props.attributes.content_bg_cl_size;
    var content_bg_lg_color = props.attributes.content_bg_lg_color;
    var content_bg_lg_location = props.attributes.content_bg_lg_location;
    var content_bg_lg_second_color = props.attributes.content_bg_lg_second_color;
    var content_bg_lg_second_location = props.attributes.content_bg_lg_second_location;
    var content_bg_lg_type = props.attributes.content_bg_lg_type;
    var content_bg_lg_angle = props.attributes.content_bg_lg_angle;
    var content_bg_lg_position = props.attributes.content_bg_lg_position;
    var buttons_color = props.attributes.buttons_color;
    var buttons_background = props.attributes.buttons_background;
    var buttons_font = props.attributes.buttons_font;
    var buttons_font_subset = props.attributes.buttons_font_subset;
    var buttons_font_size = props.attributes.buttons_font_size;
    var buttons_font_weight = props.attributes.buttons_font_weight;
    var buttons_font_transform = props.attributes.buttons_font_transform;
    var buttons_font_style = props.attributes.buttons_font_style;
    var buttons_font_decoration = props.attributes.buttons_font_decoration;
    var buttons_line_height = props.attributes.buttons_line_height;
    var buttons_letter_spacing = props.attributes.buttons_letter_spacing;
    var buttons_style = props.attributes.buttons_style;
    var buttons_bdr_type = props.attributes.buttons_bdr_type;
    var buttons_bdr_unit = props.attributes.buttons_bdr_unit;
    var buttons_bdr_check = props.attributes.buttons_bdr_check;
    var buttons_bdr_top = props.attributes.buttons_bdr_top;
    var buttons_bdr_right = props.attributes.buttons_bdr_right;
    var buttons_bdr_bottom = props.attributes.buttons_bdr_bottom;
    var buttons_bdr_left = props.attributes.buttons_bdr_left;
    var buttons_bdr_color = props.attributes.buttons_bdr_color;
    var buttons_spacing = props.attributes.buttons_spacing;
    var buttons_icon_spacing = props.attributes.buttons_icon_spacing;
    var buttons_spacing_unit = props.attributes.buttons_spacing_unit;
    var buttons_icon_spacing_unit = props.attributes.buttons_icon_spacing_unit;
    var buttons_brr_unit = props.attributes.buttons_brr_unit;
    var buttons_brr_check = props.attributes.buttons_brr_check;
    var buttons_brr_top_left = props.attributes.buttons_brr_top_left;
    var buttons_brr_top_right = props.attributes.buttons_brr_top_right;
    var buttons_brr_bottom_left = props.attributes.buttons_brr_bottom_left;
    var buttons_brr_bottom_right = props.attributes.buttons_brr_bottom_right;
    var buttons_padding_unit = props.attributes.buttons_padding_unit;
    var buttons_padding_check = props.attributes.buttons_padding_check;
    var buttons_padding_top = props.attributes.buttons_padding_top;
    var buttons_padding_right = props.attributes.buttons_padding_right;
    var buttons_padding_bottom = props.attributes.buttons_padding_bottom;
    var buttons_padding_left = props.attributes.buttons_padding_left;
    var buttons_margin_unit = props.attributes.buttons_margin_unit;
    var buttons_margin_check = props.attributes.buttons_margin_check;
    var buttons_margin_top = props.attributes.buttons_margin_top;
    var buttons_margin_right = props.attributes.buttons_margin_right;
    var buttons_margin_bottom = props.attributes.buttons_margin_bottom;
    var buttons_margin_left = props.attributes.buttons_margin_left; // Select Image Control...

    function chooseImage(value) {
      setAttributes({
        imgid: value.id
      });
      var sizes = [];

      for (var key in value.sizes) {
        var getwh = value.sizes[key].url.split('-').pop().split('.')[0].split('x');
        var getwidth = key != 'full' ? getwh[0] : value.sizes[key].width;
        var getheight = key != 'full' ? getwh[1] : value.sizes[key].height;
        sizes.push({
          label: key.charAt(0).toUpperCase() + key.slice(1) + ' - (' + getwidth + ' x ' + getheight + ')',
          value: key
        });
      }

      setAttributes({
        image: value.url
      });
      setAttributes({
        img_size: 'full'
      });
      setAttributes({
        imagefull: value.sizes.full.url
      });
      setAttributes({
        img_size_id: sizes
      });
    } // Image Size Control...


    function changeImageSize(content) {
      setAttributes({
        img_size: content
      });

      if (imgid) {
        wp.media.attachment(imgid).fetch().then(function (data) {
          var newurl = data.sizes[content].url;
          setAttributes({
            image: newurl
          });
          setAttributes({
            imagefull: data.sizes.full.url
          });
        });
      } else {
        setAttributes({
          imgid: 0
        });
        setAttributes({
          image: img_size_default[0][content]
        });
        setAttributes({
          imagefull: img_size_default[0]['full']
        });
      }
    } // Get Image Size options...


    function getImageSizeOptions() {
      return img_size_id;
    } // Get Google Font List...


    function getFontfamily() {
      var fonts = [];
      fonts.push({
        label: 'Default',
        value: ''
      });

      for (var i = 0; i < webfonts.items.length; i++) {
        fonts.push({
          label: webfonts.items[i].family,
          value: webfonts.items[i].family
        });
      }

      return fonts;
    } // TITLE...	


    function titleFont(content) {
      setAttributes({
        title_font: content
      });
      ehegAddFont(content);
    } // DESCRIPTION...


    function subTitleFont(content) {
      setAttributes({
        subtitle_font: content
      });
      ehegAddFont(content);
    } // CONTENT...


    function contentFont(content) {
      setAttributes({
        content_font: content
      });
      ehegAddFont(content);
    } // BUTTON...


    function buttonFont(content) {
      console.log(content);
      setAttributes({
        buttons_font: content
      });
      ehegAddFont(content);
    } // Get Font Objeect to find Font-Family Variants...


    function getFontObject(font_family) {
      for (var i = 0; i < webfonts.items.length; i++) {
        if (webfonts.items[i].family === font_family) {
          var font_obj = webfonts.items[i];
        }
      }

      return font_obj;
    } // Generate Variants List to Selected Font...


    function variantOptions(selected_font) {
      if (selected_font == '') {
        return [{
          value: '',
          label: 'Default'
        }, {
          value: '400',
          label: '400'
        }];
      } else {
        var font_obj = getFontObject(selected_font);

        if (!font_obj) {
          return;
        }

        var variants = [];
        var variant_options = [{
          value: '',
          label: 'Default'
        }];

        for (var i = 0; i < font_obj.variants.length; i++) {
          var var_option = parseInt(font_obj.variants[i] === 'regular' ? "400" : font_obj.variants[i]);

          if (!isNaN(var_option) && variants.indexOf(var_option) == -1) {
            variants.push(var_option);
          }
        }

        for (var i = 0; i < variants.length; i++) {
          variant_options.push({
            label: variants[i],
            value: variants[i]
          });
        }

        return variant_options;
      }
    } // Generate Subsets List to Selected Font...


    function subsetOptions(selected_font) {
      if (selected_font == '') {
        return [{
          label: "Latin",
          value: "latin"
        }];
      } else {
        var font_obj = getFontObject(selected_font);

        if (!font_obj) {
          return;
        }

        var subsets = [];
        var subsets_options = [];

        for (var i = 0; i < font_obj.subsets.length; i++) {
          subsets.push(font_obj.subsets[i]);
        }

        for (var i = 0; i < subsets.length; i++) {
          subsets_options.push({
            label: subsets[i],
            value: subsets[i]
          });
        }

        return subsets_options;
      }
    } // Add Google Font To Backend...


    function ehegAddFont(content) {
      var font_obj = getFontObject(content);
      var variants_tolink = [];
      var subsets_tolink = [];

      for (var i = 0; i < font_obj.variants.length; i++) {
        variants_tolink.push(font_obj.variants[i]);
      }

      for (var i = 0; i < font_obj.subsets.length; i++) {
        subsets_tolink.push(font_obj.subsets[i]);
      }

      var variants = variants_tolink.join(',');
      var subsets = subsets_tolink.join(',');
      var head = document.head;
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = '//fonts.googleapis.com/css?family=' + content.replace(/\s+/g, '+') + ':' + variants + '&display=swap&subset=' + subsets;
      head.appendChild(link);
    } // Border Radius...


    function commonBorderRadiusDimension(value, image_brr_check) {
      if (image_brr_check == true) {
        setAttributes({
          image_brr_top_left: value
        });
        setAttributes({
          image_brr_top_right: value
        });
        setAttributes({
          image_brr_bottom_left: value
        });
        setAttributes({
          image_brr_bottom_right: value
        });
      } else {
        if (value == '') {
          setAttributes({
            image_brr_top_left: 0
          });
          setAttributes({
            image_brr_top_right: 0
          });
          setAttributes({
            image_brr_bottom_left: 0
          });
          setAttributes({
            image_brr_bottom_right: 0
          });
        }
      }
    }

    function borderRadiusTopLeft(value) {
      setAttributes({
        image_brr_top_left: value
      });
      commonBorderRadiusDimension(value, image_brr_check);
    }

    function borderRadiusTopRight(value) {
      setAttributes({
        image_brr_top_right: value
      });
      commonBorderRadiusDimension(value, image_brr_check);
    }

    function borderRadiusBottomLeft(value) {
      setAttributes({
        image_brr_bottom_left: value
      });
      commonBorderRadiusDimension(value, image_brr_check);
    }

    function borderRadiusBottomRight(value) {
      setAttributes({
        image_brr_bottom_right: value
      });
      commonBorderRadiusDimension(value, image_brr_check);
    }

    function borderRadiusDimension(value) {
      setAttributes({
        image_brr_check: value
      });
      commonBorderRadiusDimension(image_brr_top_left, value);
    } // Border...


    function commonBorderDimension(value, overlay_bdr_check) {
      if (overlay_bdr_check == true) {
        setAttributes({
          overlay_bdr_top: value
        });
        setAttributes({
          overlay_bdr_right: value
        });
        setAttributes({
          overlay_bdr_bottom: value
        });
        setAttributes({
          overlay_bdr_left: value
        });
      } else {
        if (value == '') {
          setAttributes({
            overlay_bdr_top: 0
          });
          setAttributes({
            overlay_bdr_right: 0
          });
          setAttributes({
            overlay_bdr_bottom: 0
          });
          setAttributes({
            overlay_bdr_left: 0
          });
        }
      }
    }

    function borderTop(value) {
      setAttributes({
        overlay_bdr_top: value
      });
      commonBorderDimension(value, overlay_bdr_check);
    }

    function borderRight(value) {
      setAttributes({
        overlay_bdr_right: value
      });
      commonBorderDimension(value, overlay_bdr_check);
    }

    function borderBottom(value) {
      setAttributes({
        overlay_bdr_bottom: value
      });
      commonBorderDimension(value, overlay_bdr_check);
    }

    function borderLeft(value) {
      setAttributes({
        overlay_bdr_left: value
      });
      commonBorderDimension(value, overlay_bdr_check);
    }

    function borderDimension(value) {
      setAttributes({
        overlay_bdr_check: value
      });
      commonBorderDimension(overlay_bdr_top, value);
    } // Overlay Margin...


    function commonOverlayMarginDimension(value, overlay_margin_check) {
      if (overlay_margin_check == true) {
        setAttributes({
          overlay_margin_top: value
        });
        setAttributes({
          overlay_margin_right: value
        });
        setAttributes({
          overlay_margin_bottom: value
        });
        setAttributes({
          overlay_margin_left: value
        });
      } else {
        if (value == '') {
          setAttributes({
            overlay_margin_top: 0
          });
          setAttributes({
            overlay_margin_right: 0
          });
          setAttributes({
            overlay_margin_bottom: 0
          });
          setAttributes({
            overlay_margin_left: 0
          });
        }
      }
    }

    function overlayMarginTop(value) {
      setAttributes({
        overlay_margin_top: value
      });
      commonOverlayMarginDimension(value, overlay_margin_check);
    }

    function overlayMarginRight(value) {
      setAttributes({
        overlay_margin_right: value
      });
      commonOverlayMarginDimension(value, overlay_margin_check);
    }

    function overlayMarginBottom(value) {
      setAttributes({
        overlay_margin_bottom: value
      });
      commonOverlayMarginDimension(value, overlay_margin_check);
    }

    function overlayMarginLeft(value) {
      setAttributes({
        overlay_margin_left: value
      });
      commonOverlayMarginDimension(value, overlay_margin_check);
    }

    function overlayMarginDimension(value) {
      setAttributes({
        overlay_margin_check: value
      });
      commonOverlayMarginDimension(overlay_margin_top, value);
    } // Padding...


    function commonPaddingDimension(value, padding_check) {
      if (padding_check == true) {
        setAttributes({
          padding_top: value
        });
        setAttributes({
          padding_right: value
        });
        setAttributes({
          padding_bottom: value
        });
        setAttributes({
          padding_left: value
        });
      } else {
        if (value == '') {
          setAttributes({
            padding_top: 0
          });
          setAttributes({
            padding_right: 0
          });
          setAttributes({
            padding_bottom: 0
          });
          setAttributes({
            padding_left: 0
          });
        }
      }
    }

    function paddingTop(value) {
      setAttributes({
        padding_top: value
      });
      commonPaddingDimension(value, padding_check);
    }

    function paddingRight(value) {
      setAttributes({
        padding_right: value
      });
      commonPaddingDimension(value, padding_check);
    }

    function paddingBottom(value) {
      setAttributes({
        padding_bottom: value
      });
      commonPaddingDimension(value, padding_check);
    }

    function paddingLeft(value) {
      setAttributes({
        padding_left: value
      });
      commonPaddingDimension(value, padding_check);
    }

    function paddingDimension(value) {
      setAttributes({
        padding_check: value
      });
      commonPaddingDimension(padding_top, value);
    } // Margin...


    function commonMarginDimension(value, margin_check) {
      if (margin_check == true) {
        setAttributes({
          margin_top: value
        });
        setAttributes({
          margin_right: value
        });
        setAttributes({
          margin_bottom: value
        });
        setAttributes({
          margin_left: value
        });
      } else {
        if (value == '') {
          setAttributes({
            margin_top: 0
          });
          setAttributes({
            margin_right: 0
          });
          setAttributes({
            margin_bottom: 0
          });
          setAttributes({
            margin_left: 0
          });
        }
      }
    }

    function marginTop(value) {
      setAttributes({
        margin_top: value
      });
      commonMarginDimension(value, margin_check);
    }

    function marginRight(value) {
      setAttributes({
        margin_right: value
      });
      commonMarginDimension(value, margin_check);
    }

    function marginBottom(value) {
      setAttributes({
        margin_bottom: value
      });
      commonMarginDimension(value, margin_check);
    }

    function marginLeft(value) {
      setAttributes({
        margin_left: value
      });
      commonMarginDimension(value, margin_check);
    }

    function marginDimension(value) {
      setAttributes({
        margin_check: value
      });
      commonMarginDimension(margin_top, value);
    } //BUTTON FUNCTIONS
    // Border Radius...


    function commonBtnBorderRadiusDimension(value, buttons_brr_check) {
      if (buttons_brr_check == true) {
        setAttributes({
          buttons_brr_top_left: value
        });
        setAttributes({
          buttons_brr_top_right: value
        });
        setAttributes({
          buttons_brr_bottom_left: value
        });
        setAttributes({
          buttons_brr_bottom_right: value
        });
      } else {
        if (value == '') {
          setAttributes({
            buttons_brr_top_left: 0
          });
          setAttributes({
            buttons_brr_top_right: 0
          });
          setAttributes({
            buttons_brr_bottom_left: 0
          });
          setAttributes({
            buttons_brr_bottom_right: 0
          });
        }
      }
    }

    function btnBorderRadiusTopLeft(value) {
      setAttributes({
        buttons_brr_top_left: value
      });
      commonBtnBorderRadiusDimension(value, buttons_brr_check);
    }

    function btnBorderRadiusTopRight(value) {
      setAttributes({
        buttons_brr_top_right: value
      });
      commonBtnBorderRadiusDimension(value, buttons_brr_check);
    }

    function btnBorderRadiusBottomLeft(value) {
      setAttributes({
        buttons_brr_bottom_left: value
      });
      commonBtnBorderRadiusDimension(value, buttons_brr_check);
    }

    function btnBorderRadiusBottomRight(value) {
      setAttributes({
        buttons_brr_bottom_right: value
      });
      commonBtnBorderRadiusDimension(value, buttons_brr_check);
    }

    function btnBorderRadiusDimension(value) {
      setAttributes({
        buttons_brr_check: value
      });
      commonBtnBorderRadiusDimension(buttons_brr_top_left, value);
    } // Border...


    function commonBtnBorderDimension(value, buttons_bdr_check) {
      if (buttons_bdr_check == true) {
        setAttributes({
          buttons_bdr_top: value
        });
        setAttributes({
          buttons_bdr_right: value
        });
        setAttributes({
          buttons_bdr_bottom: value
        });
        setAttributes({
          buttons_bdr_left: value
        });
      } else {
        if (value == '') {
          setAttributes({
            buttons_bdr_top: 0
          });
          setAttributes({
            buttons_bdr_right: 0
          });
          setAttributes({
            buttons_bdr_bottom: 0
          });
          setAttributes({
            buttons_bdr_left: 0
          });
        }
      }
    }

    function btnBorderTop(value) {
      setAttributes({
        buttons_bdr_top: value
      });
      commonBtnBorderDimension(value, buttons_bdr_check);
    }

    function btnBorderRight(value) {
      setAttributes({
        buttons_bdr_right: value
      });
      commonBtnBorderDimension(value, buttons_bdr_check);
    }

    function btnBorderBottom(value) {
      setAttributes({
        buttons_bdr_bottom: value
      });
      commonBtnBorderDimension(value, buttons_bdr_check);
    }

    function btnBorderLeft(value) {
      setAttributes({
        buttons_bdr_left: value
      });
      commonBtnBorderDimension(value, buttons_bdr_check);
    }

    function btnBorderDimension(value) {
      setAttributes({
        buttons_bdr_check: value
      });
      commonBtnBorderDimension(buttons_bdr_top, value);
    } // Padding...


    function commonBtnPaddingDimension(value, buttons_padding_check) {
      if (buttons_padding_check == true) {
        setAttributes({
          buttons_padding_top: value
        });
        setAttributes({
          buttons_padding_right: value
        });
        setAttributes({
          buttons_padding_bottom: value
        });
        setAttributes({
          buttons_padding_left: value
        });
      } else {
        if (value == '') {
          setAttributes({
            buttons_padding_top: 0
          });
          setAttributes({
            buttons_padding_right: 0
          });
          setAttributes({
            buttons_padding_bottom: 0
          });
          setAttributes({
            buttons_padding_left: 0
          });
        }
      }
    }

    function btnPaddingTop(value) {
      setAttributes({
        buttons_padding_top: value
      });
      commonBtnPaddingDimension(value, buttons_padding_check);
    }

    function btnPaddingRight(value) {
      setAttributes({
        buttons_padding_right: value
      });
      commonBtnPaddingDimension(value, buttons_padding_check);
    }

    function btnPaddingBottom(value) {
      setAttributes({
        buttons_padding_bottom: value
      });
      commonBtnPaddingDimension(value, buttons_padding_check);
    }

    function btnPaddingLeft(value) {
      setAttributes({
        buttons_padding_left: value
      });
      commonBtnPaddingDimension(value, buttons_padding_check);
    }

    function btnPaddingDimension(value) {
      setAttributes({
        buttons_padding_check: value
      });
      commonBtnPaddingDimension(buttons_padding_top, value);
    } // Margin...


    function commonBtnMarginDimension(value, buttons_margin_check) {
      if (buttons_margin_check == true) {
        setAttributes({
          buttons_margin_top: value
        });
        setAttributes({
          buttons_margin_right: value
        });
        setAttributes({
          buttons_margin_bottom: value
        });
        setAttributes({
          buttons_margin_left: value
        });
      } else {
        if (value == '') {
          setAttributes({
            buttons_margin_top: 0
          });
          setAttributes({
            buttons_margin_right: 0
          });
          setAttributes({
            buttons_margin_bottom: 0
          });
          setAttributes({
            buttons_margin_left: 0
          });
        }
      }
    }

    function btnMarginTop(value) {
      setAttributes({
        buttons_margin_top: value
      });
      commonBtnMarginDimension(value, buttons_margin_check);
    }

    function btnMarginRight(value) {
      setAttributes({
        buttons_margin_right: value
      });
      commonBtnMarginDimension(value, buttons_margin_check);
    }

    function btnMarginBottom(value) {
      setAttributes({
        buttons_margin_bottom: value
      });
      commonBtnMarginDimension(value, buttons_margin_check);
    }

    function btnMarginLeft(value) {
      setAttributes({
        buttons_margin_left: value
      });
      commonBtnMarginDimension(value, buttons_margin_check);
    }

    function btnMarginDimension(value) {
      setAttributes({
        buttons_margin_check: value
      });
      commonBtnMarginDimension(buttons_margin_top, value);
    }

    function fonts(_ref) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 8),
          ff = _ref2[0],
          fs = _ref2[1],
          fw = _ref2[2],
          fst = _ref2[3],
          ft = _ref2[4],
          fd = _ref2[5],
          lh = _ref2[6],
          ls = _ref2[7];

      return (ff != '' && typeof ff !== 'undefined' ? "font-family:" + ff + ";" : "") + (fs != '' && typeof fs !== 'undefined' ? "font-size:" + fs + "px" + ";" : "") + (fw != '' && typeof fw !== 'undefined' ? "font-weight:" + fw + ";" : "") + (fst != '' && typeof fst !== 'undefined' ? "font-style:" + fst + ";" : "") + (ft != '' && typeof ft !== 'undefined' ? "text-transform:" + ft + ";" : "") + (fd != '' && typeof fd !== 'undefined' ? "text-decoration:" + fd + ";" : "") + (lh != '' && typeof lh !== 'undefined' ? "line-height:" + lh + "px" + ";" : "") + (ls != '' && typeof ls !== 'undefined' ? "letter-spacing:" + ls + "px" + ";" : "");
    }

    function dimensions(property, a, b, c, d, unit, check) {
      return a != "" ? property + ": " + a + unit + " " + b + unit + " " + c + unit + " " + d + unit + ";" : "";
    }

    function checkOneArray(my_arr) {
      for (var i = 0; i < my_arr.length; i++) {
        if (my_arr[i] !== "") return true;
      }

      return false;
    }

    function checkAllArray(my_arr) {
      for (var i = 0; i < my_arr.length; i++) {
        if (my_arr[i] === "") return false;
      }

      return true;
    }

    function check_license(content) {
      var data = {
        action: 'eheg_license',
        license_action: content.currentTarget.value,
        code: license_purchase_code
      };
      var noticeDiv = jQuery('.license_notice');
      jQuery('.license_action_btn .publish-label').hide();
      jQuery('.license_action_btn .components-spinner').show();
      jQuery.post(eheg.ajax_url, data, function (response) {
        jQuery('.license_action_btn .components-spinner').hide();
        jQuery('.license_action_btn .publish-label').show();
        jQuery('.image-panel .license_notice').show();
        noticeDiv.html('<div style="color:#0b5885;background-color:#d0eeff;border-color:#bee7ff;padding: .75rem 1.25rem;border-radius: .25rem;line-height: 1.3em;border: 1px solid #bbcff5;">' + response.message + '</div>');
        setTimeout(function () {
          jQuery(".edit-post-sidebar").animate({
            scrollTop: jQuery('.edit-post-sidebar').prop("scrollHeight")
          }, 1000);
        }, 1000);
        setAttributes({
          license: response.license
        });
        setAttributes({
          license_purchase_code: response.license_key
        });
      });
    }

    setAttributes({
      clientId: props.clientId
    });
    var settings = {
      image: image,
      imagefull: imagefull,
      imgid: imgid,
      img_size: img_size,
      img_size_default: img_size_default,
      img_size_id: img_size_id,
      image_effect: image_effect,
      image_opacity: image_opacity,
      image_duration: image_duration,
      target: target,
      link: link,
      linktarget: linktarget,
      linkrel: linkrel,
      overlay_show: overlay_show,
      overlay_effect: overlay_effect,
      overlay_duration: overlay_duration,
      title: title,
      subtitle: subtitle,
      content: content,
      align: align,
      valign: valign,
      content_effect: content_effect,
      content_duration: content_duration,
      content_delay: content_delay,
      content_appearance: content_appearance,
      buttons: buttons,
      buttons_direction: buttons_direction,
      buttons_align: buttons_align,
      buttons_valign: buttons_valign,
      buttons_icon_align: buttons_icon_align,
      image_background: image_background,
      match_height: match_height,
      image_height: image_height,
      image_brr_unit: image_brr_unit,
      image_brr_check: image_brr_check,
      image_brr_top_left: image_brr_top_left,
      image_brr_top_right: image_brr_top_right,
      image_brr_bottom_left: image_brr_bottom_left,
      image_brr_bottom_right: image_brr_bottom_right,
      overlay_bdr_type: overlay_bdr_type,
      overlay_bdr_unit: overlay_bdr_unit,
      overlay_bdr_check: overlay_bdr_check,
      overlay_bdr_top: overlay_bdr_top,
      overlay_bdr_right: overlay_bdr_right,
      overlay_bdr_bottom: overlay_bdr_bottom,
      overlay_bdr_left: overlay_bdr_left,
      overlay_bdr_color: overlay_bdr_color,
      overlay_margin_unit: overlay_margin_unit,
      overlay_margin_check: overlay_margin_check,
      overlay_margin_top: overlay_margin_top,
      overlay_margin_right: overlay_margin_right,
      overlay_margin_bottom: overlay_margin_bottom,
      overlay_margin_left: overlay_margin_left,
      overlay_bg_type: overlay_bg_type,
      overlay_bg_cl_color: overlay_bg_cl_color,
      overlay_bg_cl_image: overlay_bg_cl_image,
      overlay_bg_cl_position: overlay_bg_cl_position,
      overlay_bg_cl_attachment: overlay_bg_cl_attachment,
      overlay_bg_cl_repeat: overlay_bg_cl_repeat,
      overlay_bg_cl_size: overlay_bg_cl_size,
      overlay_bg_lg_color: overlay_bg_lg_color,
      overlay_bg_lg_location: overlay_bg_lg_location,
      overlay_bg_lg_second_color: overlay_bg_lg_second_color,
      overlay_bg_lg_second_location: overlay_bg_lg_second_location,
      overlay_bg_lg_type: overlay_bg_lg_type,
      overlay_bg_lg_angle: overlay_bg_lg_angle,
      overlay_bg_lg_position: overlay_bg_lg_position,
      title_color: title_color,
      subtitle_color: subtitle_color,
      content_color: content_color,
      title_font: title_font,
      title_font_subset: title_font_subset,
      title_font_size: title_font_size,
      title_font_weight: title_font_weight,
      title_font_transform: title_font_transform,
      title_font_style: title_font_style,
      title_font_decoration: title_font_decoration,
      title_line_height: title_line_height,
      title_letter_spacing: title_letter_spacing,
      title_style: title_style,
      subtitle_font: subtitle_font,
      subtitle_font_subset: subtitle_font_subset,
      subtitle_font_size: subtitle_font_size,
      subtitle_font_weight: subtitle_font_weight,
      subtitle_font_transform: subtitle_font_transform,
      subtitle_font_style: subtitle_font_style,
      subtitle_font_decoration: subtitle_font_decoration,
      subtitle_line_height: subtitle_line_height,
      subtitle_letter_spacing: subtitle_letter_spacing,
      subtitle_style: subtitle_style,
      content_font: content_font,
      content_font_subset: content_font_subset,
      content_font_size: content_font_size,
      content_font_weight: content_font_weight,
      content_font_transform: content_font_transform,
      content_font_style: content_font_style,
      content_font_decoration: content_font_decoration,
      content_line_height: content_line_height,
      content_letter_spacing: content_letter_spacing,
      content_style: content_style,
      padding_unit: padding_unit,
      padding_check: padding_check,
      padding_top: padding_top,
      padding_right: padding_right,
      padding_bottom: padding_bottom,
      padding_left: padding_left,
      margin_unit: margin_unit,
      margin_check: margin_check,
      margin_top: margin_top,
      margin_right: margin_right,
      margin_bottom: margin_bottom,
      margin_left: margin_left,
      content_bg_type: content_bg_type,
      content_bg_cl_color: content_bg_cl_color,
      content_bg_cl_image: content_bg_cl_image,
      content_bg_cl_position: content_bg_cl_position,
      content_bg_cl_attachment: content_bg_cl_attachment,
      content_bg_cl_repeat: content_bg_cl_repeat,
      content_bg_cl_size: content_bg_cl_size,
      content_bg_lg_color: content_bg_lg_color,
      content_bg_lg_location: content_bg_lg_location,
      content_bg_lg_second_color: content_bg_lg_second_color,
      content_bg_lg_second_location: content_bg_lg_second_location,
      content_bg_lg_type: content_bg_lg_type,
      content_bg_lg_angle: content_bg_lg_angle,
      content_bg_lg_position: content_bg_lg_position,
      buttons_color: buttons_color,
      buttons_background: buttons_background,
      buttons_font: buttons_font,
      buttons_font_subset: buttons_font_subset,
      buttons_font_size: buttons_font_size,
      buttons_font_weight: buttons_font_weight,
      buttons_font_transform: buttons_font_transform,
      buttons_font_style: buttons_font_style,
      buttons_font_decoration: buttons_font_decoration,
      buttons_line_height: buttons_line_height,
      buttons_letter_spacing: buttons_letter_spacing,
      buttons_style: buttons_style,
      buttons_bdr_type: buttons_bdr_type,
      buttons_bdr_unit: buttons_bdr_unit,
      buttons_bdr_check: buttons_bdr_check,
      buttons_bdr_top: buttons_bdr_top,
      buttons_bdr_right: buttons_bdr_right,
      buttons_bdr_bottom: buttons_bdr_bottom,
      buttons_bdr_left: buttons_bdr_left,
      buttons_bdr_color: buttons_bdr_color,
      buttons_spacing: buttons_spacing,
      buttons_icon_spacing: buttons_icon_spacing,
      buttons_brr_unit: buttons_brr_unit,
      buttons_brr_check: buttons_brr_check,
      buttons_brr_top_left: buttons_brr_top_left,
      buttons_brr_top_right: buttons_brr_top_right,
      buttons_brr_bottom_left: buttons_brr_bottom_left,
      buttons_brr_bottom_right: buttons_brr_bottom_right,
      buttons_padding_unit: buttons_padding_unit,
      buttons_padding_check: buttons_padding_check,
      buttons_padding_top: buttons_padding_top,
      buttons_padding_right: buttons_padding_right,
      buttons_padding_bottom: buttons_padding_bottom,
      buttons_padding_left: buttons_padding_left,
      buttons_margin_unit: buttons_margin_unit,
      buttons_margin_check: buttons_margin_check,
      buttons_margin_top: buttons_margin_top,
      buttons_margin_right: buttons_margin_right,
      buttons_margin_bottom: buttons_margin_bottom,
      buttons_margin_left: buttons_margin_left
    }; // Set default image in widget initialy...

    if (imgid === 0) {
      setAttributes({
        image: img_size_default[0][img_size]
      });
      setAttributes({
        imagefull: img_size_default[0]['full']
      });
    }

    var index = 0;
    var delays = ['ih-delay-zero', 'ih-delay-xs', 'ih-delay-sm', 'ih-delay-md', 'ih-delay-lg', 'ih-delay-xl', 'ih-delay-xxl'];
    var contents = ['title', 'subtitle', 'content'];
    var types = ['image', 'overlay', 'content'];
    var classes = {
      imghvr: ['imghvr'],
      image: ['imghvr-anim-none'],
      overlay: ['imghvr-anim-none imghvr-anim-single'],
      content: ['imghvr-anim-none']
    };
    var wrapper = "#block-" + clientId;
    var overlay_all = [overlay_bg_cl_position, overlay_bg_cl_repeat, overlay_bg_cl_size, overlay_bg_cl_attachment, overlay_bg_cl_color, overlay_bg_cl_image];
    var overlay_lg_all = [overlay_bg_lg_color, overlay_bg_lg_location, overlay_bg_lg_second_color, overlay_bg_lg_second_location, overlay_bg_lg_type, overlay_bg_lg_angle, overlay_bg_lg_position];
    var content_all = [content_bg_cl_position, content_bg_cl_repeat, content_bg_cl_size, content_bg_cl_attachment, content_bg_cl_color, content_bg_cl_image];
    var content_lg_all = [content_bg_lg_color, content_bg_lg_location, content_bg_lg_second_color, content_bg_lg_second_location, content_bg_lg_type, content_bg_lg_angle, content_bg_lg_position];
    title_style = [title_font, title_font_size, title_font_weight, title_font_style, title_font_transform, title_font_decoration, title_line_height, title_letter_spacing];
    subtitle_style = [subtitle_font, subtitle_font_size, subtitle_font_weight, subtitle_font_style, subtitle_font_transform, subtitle_font_decoration, subtitle_line_height, subtitle_letter_spacing];
    content_style = [content_font, content_font_size, content_font_weight, content_font_style, content_font_transform, content_font_decoration, content_line_height, content_letter_spacing];
    buttons_style = [buttons_font, buttons_font_size, buttons_font_weight, buttons_font_style, buttons_font_transform, buttons_font_decoration, buttons_line_height, buttons_letter_spacing];

    _.each(types, function (type) {
      var tmpclass = settings[type + '_effect'] ? settings[type + '_effect'].split('|') : classes[type];
      classes[type] = tmpclass[0];

      if (tmpclass[1]) {
        classes['imghvr'].push(tmpclass[1]);
      }
    });

    _.uniq(classes['imghvr']);

    var buttonslist = JSON.parse(settings.buttons);
    var all_buttons = [];
    var all_overlay = [];

    _.each(contents, function (content) {
      var anim = settings.content_appearance[index] ? settings.content_appearance[index] : 'imghvr-anim-none';
      all_overlay.push(settings[content] ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "imghvr-" + content + " " + anim + " " + delays[index]
      }, settings[content]) : '');
      settings[content] ? index++ : '';
    });

    _.each(buttonslist, function (button) {
      var anim = settings.content_appearance[index] ? settings.content_appearance[index] : 'imghvr-anim-none';
      var target = button.linktarget ? '_blank' : '_self';
      var nofollow = button.linkrel ? 'nofollow' : '';
      all_buttons.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        class: "imghvr-button-wrapper " + anim + " " + delays[index]
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
        href: button.link,
        target: target,
        rel: nofollow,
        class: "imghvr-button"
      }, button.icon ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("i", {
        class: button.icon
      }) : '', button.text)));
      index++;
    });

    var style = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", {
      type: "text/css"
    }, wrapper + " .imghvr-anim-color { opacity: " + image_opacity + "; }", wrapper + " .imghvr:hover .imghvr-anim-color { opacity: 1; }", wrapper + " .imghvr, " + wrapper + " .imghvr img { transition: " + image_duration + "s; animation-duration: " + image_duration + "s; }", wrapper + " .imghvr-overlay, " + wrapper + " .imghvr-anim-pseudo:before, " + wrapper + " .imghvr-anim-pseudo:after, " + wrapper + " .imghvr-anim-pseudo div:before, " + wrapper + " .imghvr-anim-pseudo div:after { transition-duration: " + overlay_duration + "s; animation-duration: " + overlay_duration + "s; }", wrapper + " .imghvr:hover .imghvr-overlay, " + wrapper + " .imghvr:hover .imghvr-anim-pseudo:before, " + wrapper + " .imghvr:hover .imghvr-anim-pseudo:after, " + wrapper + " .imghvr:hover .imghvr-anim-pseudo div:before, " + wrapper + " .imghvr:hover .imghvr-anim-pseudo div:after { transition-duration: " + overlay_duration + "s; animation-duration: " + overlay_duration + "s; }", wrapper + " .imghvr .imghvr-content-wrapper { justify-content: " + valign + "; transition-duration: " + content_duration + "s; transition-delay: " + content_delay + "s; animation-duration: " + content_delay + "s; }", wrapper + " .imghvr:hover .imghvr-content-wrapper { animation-duration: " + content_duration + "s; }", buttons_align != 'center' ? wrapper + " .imghvr .imghvr-buttons { margin-" + buttons_align + ": auto; }" : '', buttons_valign != 'center' ? wrapper + " .imghvr .imghvr-buttons { margin-" + buttons_valign + ": auto; }" : '', image_background != '' ? wrapper + " .imghvr {background: " + image_background + "; }" : "", wrapper + " .imghvr-wrapper, " + wrapper + " .col-row { height: " + match_height + "; }", match_height == 'auto' ? wrapper + " .imghvr { max-height: " + image_height + "px; }" : "", match_height == 'auto' ? wrapper + " .imghvr-padding:hover { padding-top: " + image_height + "px; }" : "", image_brr_top_left != '' ? wrapper + " .imghvr { " + dimensions('border-radius', image_brr_top_left, image_brr_top_right, image_brr_bottom_left, image_brr_bottom_right, image_brr_unit, image_brr_check) + " }" : '', overlay_margin_top != '' ? wrapper + " .imghvr .imghvr-overlay { " + dimensions('margin', overlay_margin_top, overlay_margin_right, overlay_margin_bottom, overlay_margin_left, overlay_margin_unit, overlay_margin_check) + " }" : "", overlay_bdr_type != 'none' ? wrapper + " .imghvr .imghvr-overlay { border-color: " + overlay_bdr_color + "; border-style: " + overlay_bdr_type + "; " + dimensions('border-width', overlay_bdr_top, overlay_bdr_right, overlay_bdr_bottom, overlay_bdr_left, overlay_bdr_unit, overlay_bdr_check) + " }" : "", overlay_bg_type == 'classic' && checkOneArray(overlay_all) ? wrapper + " .imghvr-anim-single, " + wrapper + " .imghvr-anim-pseudo::before, " + wrapper + " .imghvr-anim-pseudo::after, " + wrapper + " .imghvr-anim-pseudo div::before, " + wrapper + " .imghvr-anim-pseudo div::after { " + (overlay_bg_cl_position != '' ? "background-position: " + overlay_bg_cl_position + ";" : "") + " " + (overlay_bg_cl_repeat != '' ? "background-repeat: " + overlay_bg_cl_repeat + ";" : "") + " " + (overlay_bg_cl_size != '' ? "background-size: " + overlay_bg_cl_size + ";" : "") + " " + (overlay_bg_cl_attachment != '' ? "background-attachment: " + overlay_bg_cl_attachment + ";" : "") + " " + (overlay_bg_cl_color != '' ? "background-color: " + overlay_bg_cl_color + ";" : "") + " " + (overlay_bg_cl_image != '' ? "background-image: url(" + overlay_bg_cl_image + ");" : "") + " }" : '', overlay_bg_type == 'gradient' && checkAllArray(overlay_lg_all) ? wrapper + " .imghvr-anim-single, " + wrapper + " .imghvr-anim-pseudo::before, " + wrapper + " .imghvr-anim-pseudo::after, " + wrapper + " .imghvr-anim-pseudo div::before, " + wrapper + " .imghvr-anim-pseudo div::after { background-color: transparent; background-image: " + overlay_bg_lg_type + "-gradient(" + (overlay_bg_lg_type == 'linear' ? overlay_bg_lg_angle + 'deg' : 'at ' + overlay_bg_lg_position) + ", " + overlay_bg_lg_color + " " + overlay_bg_lg_location + "%, " + overlay_bg_lg_second_color + " " + overlay_bg_lg_second_location + "%); }" : '', title_color != '' ? wrapper + " .imghvr-title {color: " + title_color + "; }" : "", subtitle_color != '' ? wrapper + " .imghvr-subtitle {color: " + subtitle_color + "; }" : "", content_color != '' ? wrapper + " .imghvr-content {color: " + content_color + "; }" : "", checkOneArray(title_style) ? wrapper + " .imghvr-title {" + fonts(title_style) + "}" : "", checkOneArray(subtitle_style) ? wrapper + " .imghvr-subtitle {" + fonts(subtitle_style) + "}" : "", checkOneArray(content_style) ? wrapper + " .imghvr-content {" + fonts(content_style) + "}" : "", padding_top != '' ? wrapper + " .imghvr-content-wrapper { " + dimensions('padding', padding_top, padding_right, padding_bottom, padding_left, padding_unit, padding_check) + " }" : "", margin_top != '' ? wrapper + " .imghvr-content-wrapper { " + dimensions('margin', margin_top, margin_right, margin_bottom, margin_left, margin_unit, margin_check) + " }" : "", content_bg_type == 'classic' && checkOneArray(content_all) ? wrapper + " .imghvr-content-wrapper { " + (content_bg_cl_position != '' ? "background-position: " + content_bg_cl_position + ";" : "") + " " + (content_bg_cl_repeat != '' ? "background-repeat: " + content_bg_cl_repeat + ";" : "") + " " + (content_bg_cl_size != '' ? "background-size: " + content_bg_cl_size + ";" : "") + " " + (content_bg_cl_attachment != '' ? "background-attachment: " + content_bg_cl_attachment + ";" : "") + " " + (content_bg_cl_color != '' ? "background-color: " + content_bg_cl_color + ";" : "") + " " + (content_bg_cl_image != '' ? "background-image: url(" + content_bg_cl_image + ");" : "") + " }" : '', content_bg_type == 'gradient' && checkAllArray(content_lg_all) ? wrapper + " .imghvr-content-wrapper { background-color: transparent; background-image: " + content_bg_lg_type + "-gradient(" + (content_bg_lg_type == 'linear' ? content_bg_lg_angle + 'deg' : 'at ' + content_bg_lg_position) + ", " + content_bg_lg_color + " " + content_bg_lg_location + "%, " + content_bg_lg_second_color + " " + content_bg_lg_second_location + "%); }" : '', buttons_color != '' ? wrapper + " .imghvr-button {color: " + buttons_color + "; }" : "", buttons_background != '' ? wrapper + " .imghvr-button {background: " + buttons_background + "; }" : "", checkOneArray(buttons_style) ? wrapper + " .imghvr-button {" + fonts(buttons_style) + "}" : "", buttons_bdr_type != 'none' ? wrapper + " .imghvr-button { border-color: " + buttons_bdr_color + "; border-style: " + buttons_bdr_type + "; " + dimensions('border-width', buttons_bdr_top, buttons_bdr_right, buttons_bdr_bottom, buttons_bdr_left, buttons_bdr_unit, buttons_bdr_check) + " }" : "", buttons_brr_top_left != '' ? wrapper + " .imghvr-button { " + dimensions('border-radius', buttons_brr_top_left, buttons_brr_top_right, buttons_brr_bottom_left, buttons_brr_bottom_right, buttons_brr_unit, buttons_brr_check) + " }" : '', buttons_padding_top != '' ? wrapper + " .imghvr-button { " + dimensions('padding', buttons_padding_top, buttons_padding_right, buttons_padding_bottom, buttons_padding_left, buttons_padding_unit, buttons_padding_check) + " }" : "", buttons_margin_top != '' ? wrapper + " .imghvr-buttons { " + dimensions('margin', buttons_margin_top, buttons_margin_right, buttons_margin_bottom, buttons_margin_left, buttons_margin_unit, buttons_margin_check) + " }" : "", wrapper + " .imghvr-buttons-row .imghvr-button-wrapper {margin-right: " + buttons_spacing + buttons_spacing_unit + ";}", wrapper + " .imghvr-buttons-row .imghvr-button-wrapper:last-child {margin-right: 0;}", wrapper + " .imghvr-buttons-column .imghvr-button-wrapper {margin-bottom: " + buttons_spacing + buttons_spacing_unit + ";}", wrapper + " .imghvr-buttons-column .imghvr-button-wrapper:last-child {margin-bottom: 0;}", wrapper + " .imghvr-buttons-icon-left .imghvr-button i {margin-left: 0.3em; margin-right: " + buttons_icon_spacing + buttons_icon_spacing_unit + ";}", wrapper + " .imghvr-buttons-icon-right .imghvr-button i {margin-left: " + buttons_icon_spacing + buttons_icon_spacing_unit + ";margin-right: 0.3em;}");
    var child = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: classes['imghvr'].join(' ')
    }, settings.overlay_show === true ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "imghvr-overlay " + classes['overlay']
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null)) : '', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "imghvr-content-wrapper imghvr-content-" + settings.align + " " + classes['content']
    }, all_overlay, buttonslist.length > 0 ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "imghvr-buttons imghvr-buttons-" + settings.buttons_direction + " imghvr-buttons-icon-" + settings.buttons_icon_align
    }, all_buttons) : ''), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: image,
      alt: "",
      className: classes['image']
    }));
    var previewBox = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, license == "false" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "imghvr-wrapper " + props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "imghvr"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
      src: placeholder,
      class: "imghvr-anim-none"
    }))) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "imghvr-wrapper " + props.className
    }, style, child));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, previewBox, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_tabs__WEBPACK_IMPORTED_MODULE_10__["Tabs"], {
      className: "eheg-tab-panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_tabs__WEBPACK_IMPORTED_MODULE_10__["TabList"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_tabs__WEBPACK_IMPORTED_MODULE_10__["Tab"], null, "Content"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_tabs__WEBPACK_IMPORTED_MODULE_10__["Tab"], null, "Style")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_tabs__WEBPACK_IMPORTED_MODULE_10__["TabPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Image",
      initialOpen: true,
      className: "eheg-panelbody key-" + license
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Choose Image"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "media-handler"
    }, imagefull == '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_buttons_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onSelect: chooseImage,
      className: "dashicons dashicons-plus-alt",
      onChange: function onChange(value) {}
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_buttons_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "dashicons dashicons-trash",
      onChange: function onChange(value) {
        setAttributes({
          image: ''
        });
        setAttributes({
          imagefull: ''
        });
        setAttributes({
          imgid: ''
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: chooseImage,
      value: image,
      render: function render(_ref3) {
        var open = _ref3.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "render-img",
          style: {
            backgroundImage: "url(" + imagefull + ")"
          },
          onClick: open
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control select-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Size"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      value: img_size,
      options: getImageSizeOptions(),
      onChange: changeImageSize
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Hover Effect"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_selectize_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: image_effect,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["ImageEffects"])(),
      onChange: function onChange(value) {
        return setAttributes({
          image_effect: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control swap-control " + image_effect
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, "Add hover image in ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("b", null, "Style ", '>', " Overlay ", '>', " Background Type"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control color-control " + image_effect
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Image Opacity",
      value: image_opacity,
      onChange: function onChange(value) {
        return setAttributes({
          image_opacity: value
        });
      },
      min: 0,
      max: 1,
      step: 0.01
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Transition Duration",
      value: image_duration,
      onChange: function onChange(value) {
        return setAttributes({
          image_duration: value
        });
      },
      min: 0,
      max: 10,
      step: 0.05
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control select-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Target"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      value: target,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["Targets"])(),
      onChange: function onChange(value) {
        return setAttributes({
          target: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control add-linkto condition-control condition-control-" + target
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      for: "eheg-addlink",
      class: "block_input_label"
    }, "Link To"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "input_inline"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      id: "eheg-addlink",
      value: link,
      onChange: function onChange(value) {
        return setAttributes({
          link: value
        });
      },
      placeholder: "https://your-link.com"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
      className: "span_icon",
      icon: "admin-generic"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "link-attributes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
      label: "Open in new window",
      checked: linktarget,
      onChange: function onChange(value) {
        return setAttributes({
          linktarget: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
      label: "Add nofollow",
      checked: linkrel,
      onChange: function onChange(value) {
        return setAttributes({
          linkrel: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control custom-alt"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      for: "eheg-customalt",
      class: "block_input_label"
    }, "Custom Alt"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "input_inline"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      id: "eheg-customalt",
      value: customalt,
      onChange: function onChange(value) {
        return setAttributes({
          customalt: value
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Overlay",
      initialOpen: false,
      className: "eheg-panelbody key-" + license
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
      label: "Show Overlay",
      checked: overlay_show,
      onChange: function onChange(value) {
        return setAttributes({
          overlay_show: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control overlay-" + overlay_show
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Hover Effect"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_selectize_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: overlay_effect,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["OverlayEffects"])(),
      onChange: function onChange(value) {
        return setAttributes({
          overlay_effect: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control overlay-" + overlay_show
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Transition Duration",
      value: overlay_duration,
      onChange: function onChange(value) {
        return setAttributes({
          overlay_duration: value
        });
      },
      min: 0,
      max: 10,
      step: 0.05
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Content",
      initialOpen: false,
      className: "eheg-panelbody key-" + license
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Title"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      value: title,
      onChange: function onChange(value) {
        return setAttributes({
          title: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Sub Title"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      value: subtitle,
      onChange: function onChange(value) {
        return setAttributes({
          subtitle: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Content"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextareaControl"], {
      value: content,
      help: "Supports HTML format",
      onChange: function onChange(value) {
        return setAttributes({
          content: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control alignment"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Horizontal Alignment"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      className: "eheg-align eheg-horizontal-align",
      selected: align,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["HAlign"])(),
      onChange: function onChange(value) {
        return setAttributes({
          align: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control alignment"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Vertical Alignment"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      className: "eheg-align eheg-vertical-align",
      selected: valign,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["VAlign"])(),
      onChange: function onChange(value) {
        return setAttributes({
          valign: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Hover Effect"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_selectize_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
      value: content_effect,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["ContentEffects"])(),
      onChange: function onChange(value) {
        return setAttributes({
          content_effect: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Transition Duration",
      value: content_duration,
      onChange: function onChange(value) {
        return setAttributes({
          content_duration: value
        });
      },
      min: 0,
      max: 10,
      step: 0.05
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Transition Delay",
      value: content_delay,
      onChange: function onChange(value) {
        return setAttributes({
          content_delay: value
        });
      },
      min: 0,
      max: 10,
      step: 0.05
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control content_appearance"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Content Appearance"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_selectize_multiple_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: content_appearance,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["ContentAppearance"])(),
      onChange: function onChange(value) {
        return setAttributes({
          content_appearance: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Button",
      initialOpen: false,
      className: "eheg-panelbody button-panel key-" + license
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_repeater_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
      value: buttons,
      onChange: function onChange(value) {
        return setAttributes({
          buttons: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control select-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Stack"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      value: buttons_direction,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["ButtonsDirection"])(),
      onChange: function onChange(value) {
        return setAttributes({
          buttons_direction: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control alignment"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Horizontal Alignment"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      className: "eheg-align eheg-horizontal-align",
      selected: buttons_align,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["ButtonsHAlign"])(),
      onChange: function onChange(value) {
        return setAttributes({
          buttons_align: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control alignment"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Vertical Alignment"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      className: "eheg-align eheg-vertical-align",
      selected: buttons_valign,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["ButtonsVAlign"])(),
      onChange: function onChange(value) {
        return setAttributes({
          buttons_valign: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control alignment icon-panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Icon Position"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      className: "eheg-align eheg-horizontal-align eheg-icon-align",
      selected: buttons_icon_align,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["ButtonsIconAlign"])(),
      onChange: function onChange(value) {
        return setAttributes({
          buttons_icon_align: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "License",
      initialOpen: license == 'false' ? true : false,
      className: "eheg-panelbody license-panel"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Enter your purchase code below to activate your addon."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Activating the plugin unlocks additional settings, automatic future updates, and support from developers."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: "https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-",
      target: "_blank"
    }, "Where is my purchase code?")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: "https://codecanyon.net/item/emage-image-hover-effects-block-for-gutenberg/24483698",
      target: "_blank"
    }, "Buy a new license")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Purchase Code"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      value: license_purchase_code,
      placeholder: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      onChange: function onChange(value) {
        return setAttributes({
          license_purchase_code: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "license_notice"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control license-control"
    }, license == 'false' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Status :  ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("b", null, "Inactive"), " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "license_action_btn active",
      isDefault: true,
      onClick: check_license,
      value: license_action_activate
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Spinner"], null), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "publish-label"
    }, license_action_activate))), license != 'false' && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Status :  ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("b", null, "Active"), " "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "license_action_btn inactive",
      isDefault: true,
      onClick: check_license,
      value: license_action_deactivate
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Spinner"], null), " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "publish-label"
    }, license_action_deactivate))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
      type: "hidden",
      value: license
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react_tabs__WEBPACK_IMPORTED_MODULE_10__["TabPanel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Image",
      initialOpen: true,
      className: "eheg-panelbody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Background"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref4) {
        var isOpen = _ref4.isOpen,
            onToggle = _ref4.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: image_background
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: image_background,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              image_background: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control select-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Match Height"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      value: match_height,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["MatchHeight"])(),
      onChange: function onChange(value) {
        return setAttributes({
          match_height: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control match-" + match_height
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Height",
      value: image_height,
      onChange: function onChange(value) {
        return setAttributes({
          image_height: value
        });
      },
      min: 0,
      max: 1000,
      step: 5
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control dnlslider"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Border Radius"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      selected: image_brr_unit,
      options: [{
        label: 'px',
        value: 'px'
      }, {
        label: '%',
        value: '%'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          image_brr_unit: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl-indvl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: image_brr_top_left,
      onChange: borderRadiusTopLeft
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: image_brr_top_right,
      onChange: borderRadiusTopRight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: image_brr_bottom_left,
      onChange: borderRadiusBottomLeft
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: image_brr_bottom_right,
      onChange: borderRadiusBottomRight
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-switch"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: ""
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
      label: "click",
      className: "css-link checked",
      checked: image_brr_check,
      onChange: borderRadiusDimension
    }))))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Overlay",
      initialOpen: false,
      className: "eheg-panelbody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control select-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Border Type"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      value: overlay_bdr_type,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["BorderType"])(),
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bdr_type: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control dnlslider condition-border-" + overlay_bdr_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Width"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      selected: overlay_bdr_unit,
      options: [{
        label: 'px',
        value: 'px'
      }, {
        label: '%',
        value: '%'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bdr_unit: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl-indvl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: overlay_bdr_top,
      onChange: borderTop
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: overlay_bdr_right,
      onChange: borderRight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: overlay_bdr_bottom,
      onChange: borderBottom
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: overlay_bdr_left,
      onChange: borderLeft
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-switch"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: ""
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
      label: "click",
      className: "css-link checked",
      checked: overlay_bdr_check,
      onChange: borderDimension
    })))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-border-" + overlay_bdr_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref5) {
        var isOpen = _ref5.isOpen,
            onToggle = _ref5.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: overlay_bdr_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: overlay_bdr_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              overlay_bdr_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control dnlslider"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Margin"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      selected: overlay_margin_unit,
      options: [{
        label: 'px',
        value: 'px'
      }, {
        label: '%',
        value: '%'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          overlay_margin_unit: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl-indvl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: overlay_margin_top,
      onChange: overlayMarginTop
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: overlay_margin_right,
      onChange: overlayMarginRight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: overlay_margin_bottom,
      onChange: overlayMarginBottom
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: overlay_margin_left,
      onChange: overlayMarginLeft
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-switch"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: ""
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
      label: "click",
      className: "css-link checked",
      checked: overlay_margin_check,
      onChange: overlayMarginDimension
    })))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control bg_type"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Background Type"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_buttons_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isDefault: true,
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_type: value
        });
      },
      value: "classic",
      className: "overlay-btn-" + overlay_bg_type
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_buttons_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isDefault: true,
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_type: value
        });
      },
      value: "gradient",
      className: "overlay-btn-" + overlay_bg_type
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control condition-border-classic-" + overlay_bg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref6) {
        var isOpen = _ref6.isOpen,
            onToggle = _ref6.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: overlay_bg_cl_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: overlay_bg_cl_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              overlay_bg_cl_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control condition-border-classic-" + overlay_bg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Choose Image"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "media-handler"
    }, overlay_bg_cl_image == '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_buttons_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onSelect: function onSelect(value) {},
      className: "dashicons dashicons-plus-alt",
      onChange: function onChange(value) {}
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_buttons_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "dashicons dashicons-trash",
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_cl_image: ''
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: function onSelect(value) {
        return setAttributes({
          overlay_bg_cl_image: value.url
        });
      },
      value: overlay_bg_cl_image,
      render: function render(_ref7) {
        var open = _ref7.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "render-img",
          style: {
            backgroundImage: "url(" + overlay_bg_cl_image + ")"
          },
          onClick: open
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: overlay_bg_cl_image == '' ? 'select-default condition-control' : 'select-default'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Position",
      value: overlay_bg_cl_position,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["Position"])(),
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_cl_position: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: overlay_bg_cl_image == '' ? 'select-default condition-control' : 'select-default'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Attachment",
      value: overlay_bg_cl_attachment,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["Attachment"])(),
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_cl_attachment: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: overlay_bg_cl_image == '' ? 'select-default condition-control' : 'select-default'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Repeat",
      value: overlay_bg_cl_repeat,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["Repeat"])(),
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_cl_repeat: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: overlay_bg_cl_image == '' ? 'select-default condition-control' : 'select-default'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Size",
      value: overlay_bg_cl_size,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["Size"])(),
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_cl_size: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control condition-border-gradient-" + overlay_bg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref8) {
        var isOpen = _ref8.isOpen,
            onToggle = _ref8.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: overlay_bg_lg_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: overlay_bg_lg_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              overlay_bg_lg_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control condition-border-gradient-" + overlay_bg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Location",
      value: overlay_bg_lg_location,
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_lg_location: value
        });
      },
      min: 0,
      max: 100
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Second Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref9) {
        var isOpen = _ref9.isOpen,
            onToggle = _ref9.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: overlay_bg_lg_second_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: overlay_bg_lg_second_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              overlay_bg_lg_second_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Location",
      value: overlay_bg_lg_second_location,
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_lg_second_location: value
        });
      },
      min: 0,
      max: 100
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "select-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Type",
      value: overlay_bg_lg_type,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["GradientType"])(),
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_lg_type: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "condition-control condition-angle-linear-" + overlay_bg_lg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Angle",
      value: overlay_bg_lg_angle,
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_lg_angle: value
        });
      },
      min: 0,
      max: 360
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "select-default condition-control condition-angle-radial-" + overlay_bg_lg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Position",
      value: overlay_bg_lg_position,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["RadialPosition"])(),
      onChange: function onChange(value) {
        return setAttributes({
          overlay_bg_lg_position: value
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Content",
      initialOpen: false,
      className: "eheg-panelbody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, "Title")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref10) {
        var isOpen = _ref10.isOpen,
            onToggle = _ref10.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: title_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: title_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              title_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Typography"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control typography-group",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      focusOnMount: "false",
      renderToggle: function renderToggle(_ref11) {
        var isOpen = _ref11.isOpen,
            onToggle = _ref11.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          onClick: onToggle,
          "aria-expanded": isOpen
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
          icon: "edit"
        }));
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls eheg-title-typo"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Family"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_selectize_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: title_font,
          options: getFontfamily(),
          onChange: titleFont
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Subset"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: title_font_subset,
          options: subsetOptions(title_font),
          onChange: function onChange(value) {
            return setAttributes({
              title_font_subset: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Size",
          value: title_font_size,
          onChange: function onChange(value) {
            return setAttributes({
              title_font_size: value
            });
          },
          min: 0,
          max: 100
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Weight"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: title_font_weight,
          options: variantOptions(title_font),
          onChange: function onChange(value) {
            return setAttributes({
              title_font_weight: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Transform"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: title_font_transform,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontTransform"])(),
          onChange: function onChange(value) {
            return setAttributes({
              title_font_transform: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Style"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: title_font_style,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontStyle"])(),
          onChange: function onChange(value) {
            return setAttributes({
              title_font_style: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Decoration"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: title_font_decoration,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontDecoration"])(),
          onChange: function onChange(value) {
            return setAttributes({
              title_font_decoration: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Line Height",
          value: title_line_height,
          onChange: function onChange(value) {
            return setAttributes({
              title_line_height: value
            });
          },
          min: 0,
          max: 100
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Letter Spacing",
          value: title_letter_spacing,
          onChange: function onChange(value) {
            return setAttributes({
              title_letter_spacing: value
            });
          },
          min: -5,
          max: 10
        })));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, "Sub Title")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref12) {
        var isOpen = _ref12.isOpen,
            onToggle = _ref12.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: subtitle_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: subtitle_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              subtitle_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Typography"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control typography-group",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      focusOnMount: "false",
      renderToggle: function renderToggle(_ref13) {
        var isOpen = _ref13.isOpen,
            onToggle = _ref13.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          onClick: onToggle,
          "aria-expanded": isOpen
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
          icon: "edit"
        }));
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls eheg-title-typo"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Family"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_selectize_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: subtitle_font,
          options: getFontfamily(),
          onChange: subTitleFont
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Subset"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: subtitle_font_subset,
          options: subsetOptions(subtitle_font),
          onChange: function onChange(value) {
            return setAttributes({
              subtitle_font_subset: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Size",
          value: subtitle_font_size,
          onChange: function onChange(value) {
            return setAttributes({
              subtitle_font_size: value
            });
          },
          min: 0,
          max: 100
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Weight"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: subtitle_font_weight,
          options: variantOptions(subtitle_font),
          onChange: function onChange(value) {
            return setAttributes({
              subtitle_font_weight: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Transform"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: subtitle_font_transform,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontTransform"])(),
          onChange: function onChange(value) {
            return setAttributes({
              subtitle_font_transform: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Style"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: subtitle_font_style,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontStyle"])(),
          onChange: function onChange(value) {
            return setAttributes({
              subtitle_font_style: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Decoration"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: subtitle_font_decoration,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontDecoration"])(),
          onChange: function onChange(value) {
            return setAttributes({
              subtitle_font_decoration: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Line Height",
          value: subtitle_line_height,
          onChange: function onChange(value) {
            return setAttributes({
              subtitle_line_height: value
            });
          },
          min: 0,
          max: 100
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Letter Spacing",
          value: subtitle_letter_spacing,
          onChange: function onChange(value) {
            return setAttributes({
              subtitle_letter_spacing: value
            });
          },
          min: -5,
          max: 10
        })));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, "Content")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref14) {
        var isOpen = _ref14.isOpen,
            onToggle = _ref14.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: content_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: content_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              content_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Typography"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control typography-group",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      focusOnMount: "false",
      renderToggle: function renderToggle(_ref15) {
        var isOpen = _ref15.isOpen,
            onToggle = _ref15.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          onClick: onToggle,
          "aria-expanded": isOpen
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
          icon: "edit"
        }));
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls eheg-title-typo"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Family"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_selectize_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: content_font,
          options: getFontfamily(),
          onChange: contentFont
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Subset"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: content_font_subset,
          options: subsetOptions(content_font),
          onChange: function onChange(value) {
            return setAttributes({
              content_font_subset: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Size",
          value: content_font_size,
          onChange: function onChange(value) {
            return setAttributes({
              content_font_size: value
            });
          },
          min: 0,
          max: 100
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Weight"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: content_font_weight,
          options: variantOptions(content_font),
          onChange: function onChange(value) {
            return setAttributes({
              content_font_weight: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Transform"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: content_font_transform,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontTransform"])(),
          onChange: function onChange(value) {
            return setAttributes({
              content_font_transform: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Style"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: content_font_style,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontStyle"])(),
          onChange: function onChange(value) {
            return setAttributes({
              content_font_style: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Decoration"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: content_font_decoration,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontDecoration"])(),
          onChange: function onChange(value) {
            return setAttributes({
              content_font_decoration: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Line Height",
          value: content_line_height,
          onChange: function onChange(value) {
            return setAttributes({
              content_line_height: value
            });
          },
          min: 0,
          max: 100
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Letter Spacing",
          value: content_letter_spacing,
          onChange: function onChange(value) {
            return setAttributes({
              content_letter_spacing: value
            });
          },
          min: -5,
          max: 10
        })));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control dnlslider"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Padding"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      selected: padding_unit,
      options: [{
        label: 'px',
        value: 'px'
      }, {
        label: '%',
        value: '%'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          padding_unit: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl-indvl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: padding_top,
      onChange: paddingTop
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: padding_right,
      onChange: paddingRight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: padding_bottom,
      onChange: paddingBottom
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: padding_left,
      onChange: paddingLeft
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-switch"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: ""
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
      label: "click",
      className: "css-link checked",
      checked: padding_check,
      onChange: paddingDimension
    })))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control dnlslider"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Margin"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      selected: margin_unit,
      options: [{
        label: 'px',
        value: 'px'
      }, {
        label: '%',
        value: '%'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          margin_unit: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl-indvl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: margin_top,
      onChange: marginTop
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: margin_right,
      onChange: marginRight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: margin_bottom,
      onChange: marginBottom
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: margin_left,
      onChange: marginLeft
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-switch"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: ""
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
      label: "click",
      className: "css-link checked",
      checked: margin_check,
      onChange: marginDimension
    })))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control bg_type"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Background Type"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_buttons_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isDefault: true,
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_type: value
        });
      },
      value: "classic",
      className: "content-btn-" + content_bg_type
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_buttons_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isDefault: true,
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_type: value
        });
      },
      value: "gradient",
      className: "content-btn-" + content_bg_type
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control condition-border-classic-" + content_bg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref16) {
        var isOpen = _ref16.isOpen,
            onToggle = _ref16.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: content_bg_cl_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: content_bg_cl_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              content_bg_cl_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control condition-border-classic-" + content_bg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Choose Image"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "media-handler"
    }, content_bg_cl_image == '' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_buttons_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onSelect: function onSelect(value) {},
      className: "dashicons dashicons-plus-alt",
      onChange: function onChange(value) {}
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_buttons_index__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "dashicons dashicons-trash",
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_cl_image: ''
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
      onSelect: function onSelect(value) {
        return setAttributes({
          content_bg_cl_image: value.url
        });
      },
      value: content_bg_cl_image,
      render: function render(_ref17) {
        var open = _ref17.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "render-img",
          style: {
            backgroundImage: "url(" + content_bg_cl_image + ")"
          },
          onClick: open
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: content_bg_cl_image == '' ? "select-default condition-control" : 'select-default'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Position",
      value: content_bg_cl_position,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["Position"])(),
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_cl_position: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: content_bg_cl_image == '' ? "select-default condition-control" : 'select-default'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Attachment",
      value: content_bg_cl_attachment,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["Attachment"])(),
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_cl_attachment: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: content_bg_cl_image == '' ? "select-default condition-control" : 'select-default'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Repeat",
      value: content_bg_cl_repeat,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["Repeat"])(),
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_cl_repeat: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: content_bg_cl_image == '' ? "select-default condition-control" : 'select-default'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Size",
      value: content_bg_cl_size,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["Size"])(),
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_cl_size: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control condition-border-gradient-" + content_bg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref18) {
        var isOpen = _ref18.isOpen,
            onToggle = _ref18.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: content_bg_lg_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: content_bg_lg_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              content_bg_lg_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-control condition-border-gradient-" + content_bg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Location",
      value: content_bg_lg_location,
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_lg_location: value
        });
      },
      min: 0,
      max: 100
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Second Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref19) {
        var isOpen = _ref19.isOpen,
            onToggle = _ref19.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: content_bg_lg_second_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: content_bg_lg_second_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              content_bg_lg_second_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Location",
      value: content_bg_lg_second_location,
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_lg_second_location: value
        });
      },
      min: 0,
      max: 100
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "select-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Type",
      value: content_bg_lg_type,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["GradientType"])(),
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_lg_type: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "condition-control condition-angle-linear-" + content_bg_lg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      label: "Angle",
      value: content_bg_lg_angle,
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_lg_angle: value
        });
      },
      min: 0,
      max: 360
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "select-default condition-control condition-angle-radial-" + content_bg_lg_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: "Position",
      value: content_bg_lg_position,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["RadialPosition"])(),
      onChange: function onChange(value) {
        return setAttributes({
          content_bg_lg_position: value
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: "Button",
      initialOpen: false,
      className: "eheg-panelbody"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref20) {
        var isOpen = _ref20.isOpen,
            onToggle = _ref20.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: buttons_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: buttons_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              buttons_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Background"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref21) {
        var isOpen = _ref21.isOpen,
            onToggle = _ref21.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: buttons_background
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: buttons_background,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              buttons_background: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Typography"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control typography-group",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      focusOnMount: "false",
      renderToggle: function renderToggle(_ref22) {
        var isOpen = _ref22.isOpen,
            onToggle = _ref22.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          onClick: onToggle,
          "aria-expanded": isOpen
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dashicon"], {
          icon: "edit"
        }));
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls eheg-title-typo"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Family"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_selectize_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
          value: buttons_font,
          options: getFontfamily(),
          onChange: buttonFont
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Subset"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: buttons_font_subset,
          options: subsetOptions(buttons_font),
          onChange: function onChange(value) {
            return setAttributes({
              buttons_font_subset: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Size",
          value: buttons_font_size,
          onChange: function onChange(value) {
            return setAttributes({
              buttons_font_size: value
            });
          },
          min: 0,
          max: 100
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Weight"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: buttons_font_weight,
          options: variantOptions(buttons_font),
          onChange: function onChange(value) {
            return setAttributes({
              buttons_font_weight: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Transform"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: buttons_font_transform,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontTransform"])(),
          onChange: function onChange(value) {
            return setAttributes({
              buttons_font_transform: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Style"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: buttons_font_style,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontStyle"])(),
          onChange: function onChange(value) {
            return setAttributes({
              buttons_font_style: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-flexbox-control select-default"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
          class: "block_input_label"
        }, "Decoration"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
          value: buttons_font_decoration,
          options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["FontDecoration"])(),
          onChange: function onChange(value) {
            return setAttributes({
              buttons_font_decoration: value
            });
          }
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Line Height",
          value: buttons_line_height,
          onChange: function onChange(value) {
            return setAttributes({
              buttons_line_height: value
            });
          },
          min: 0,
          max: 100
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          class: "eheg-block-control"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
          label: "Letter Spacing",
          value: buttons_letter_spacing,
          onChange: function onChange(value) {
            return setAttributes({
              buttons_letter_spacing: value
            });
          },
          min: -5,
          max: 10
        })));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control select-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Border Type"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      value: buttons_bdr_type,
      options: Object(_js_assets_js__WEBPACK_IMPORTED_MODULE_3__["BorderType"])(),
      onChange: function onChange(value) {
        return setAttributes({
          buttons_bdr_type: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control dnlslider condition-border-" + buttons_bdr_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Width"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      selected: buttons_bdr_unit,
      options: [{
        label: 'px',
        value: 'px'
      }, {
        label: '%',
        value: '%'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          buttons_bdr_unit: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl-indvl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_bdr_top,
      onChange: btnBorderTop
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_bdr_right,
      onChange: btnBorderRight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_bdr_bottom,
      onChange: btnBorderBottom
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_bdr_left,
      onChange: btnBorderLeft
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-switch"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: ""
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
      label: "click",
      className: "css-link checked",
      checked: buttons_bdr_check,
      onChange: btnBorderDimension
    })))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control condition-border-" + buttons_bdr_type
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "eheg-popup-control",
      contentClassName: "eheg-control-container",
      position: "bottom right",
      renderToggle: function renderToggle(_ref23) {
        var isOpen = _ref23.isOpen,
            onToggle = _ref23.onToggle;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          style: {
            background: buttons_bdr_color
          },
          class: "eheg-colorbox",
          onClick: onToggle,
          "aria-expanded": isOpen
        });
      },
      renderContent: function renderContent() {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
          className: "eheg-group-controls colorpicker"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ColorPicker"], {
          color: buttons_bdr_color,
          onChangeComplete: function onChangeComplete(value) {
            return setAttributes({
              buttons_bdr_color: "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")"
            });
          }
        }));
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control dnlslider"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Spacing"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      selected: buttons_spacing_unit,
      options: [{
        label: 'px',
        value: 'px'
      }, {
        label: 'em',
        value: 'em'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          buttons_spacing_unit: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      value: buttons_spacing,
      onChange: function onChange(value) {
        return setAttributes({
          buttons_spacing: value
        });
      },
      min: 0,
      max: 50,
      step: 1
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control dnlslider"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Icon Spacing"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      selected: buttons_icon_spacing_unit,
      options: [{
        label: 'px',
        value: 'px'
      }, {
        label: 'em',
        value: 'em'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          buttons_icon_spacing_unit: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
      value: buttons_icon_spacing,
      onChange: function onChange(value) {
        return setAttributes({
          buttons_icon_spacing: value
        });
      },
      min: 0,
      max: 50,
      step: 0.1
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control dnlslider"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Border Radius"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      selected: buttons_brr_unit,
      options: [{
        label: 'px',
        value: 'px'
      }, {
        label: '%',
        value: '%'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          buttons_brr_unit: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl-indvl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_brr_top_left,
      onChange: btnBorderRadiusTopLeft
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_brr_top_right,
      onChange: btnBorderRadiusTopRight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_brr_bottom_left,
      onChange: btnBorderRadiusBottomLeft
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_brr_bottom_right,
      onChange: btnBorderRadiusBottomRight
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-switch"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: ""
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
      label: "click",
      className: "css-link checked",
      checked: buttons_brr_check,
      onChange: btnBorderRadiusDimension
    })))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control dnlslider"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Padding"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      selected: buttons_padding_unit,
      options: [{
        label: 'px',
        value: 'px'
      }, {
        label: '%',
        value: '%'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          buttons_padding_unit: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl-indvl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_padding_top,
      onChange: btnPaddingTop
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_padding_right,
      onChange: btnPaddingRight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_padding_bottom,
      onChange: btnPaddingBottom
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_padding_left,
      onChange: btnPaddingLeft
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-switch"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: ""
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
      label: "click",
      className: "css-link checked",
      checked: buttons_padding_check,
      onChange: btnPaddingDimension
    })))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-block-control dnlslider"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "eheg-flexbox-control"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
      class: "block_input_label"
    }, "Margin"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RadioControl"], {
      selected: buttons_margin_unit,
      options: [{
        label: 'px',
        value: 'px'
      }, {
        label: '%',
        value: '%'
      }],
      onChange: function onChange(value) {
        return setAttributes({
          buttons_margin_unit: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-col-2"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-dnl-indvl"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_margin_top,
      onChange: btnMarginTop
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_margin_right,
      onChange: btnMarginRight
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_margin_bottom,
      onChange: btnMarginBottom
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      type: "number",
      value: buttons_margin_left,
      onChange: btnMarginLeft
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "css-switch"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: ""
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["CheckboxControl"], {
      label: "click",
      className: "css-link checked",
      checked: buttons_margin_check,
      onChange: btnMarginDimension
    })))))))))));
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/js/assets.js":
/*!*********************************!*\
  !*** ./src/blocks/js/assets.js ***!
  \*********************************/
/*! exports provided: EHEG_LOGO, ImageEffects, Targets, OverlayEffects, ContentEffects, ContentAppearance, HAlign, VAlign, ButtonsDirection, ButtonsHAlign, ButtonsVAlign, ButtonsIconAlign, MatchHeight, BorderType, Position, Attachment, Repeat, Size, RadialPosition, GradientType, FontTransform, FontStyle, FontDecoration, Icons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EHEG_LOGO", function() { return EHEG_LOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEffects", function() { return ImageEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Targets", function() { return Targets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayEffects", function() { return OverlayEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentEffects", function() { return ContentEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentAppearance", function() { return ContentAppearance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAlign", function() { return HAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAlign", function() { return VAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsDirection", function() { return ButtonsDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsHAlign", function() { return ButtonsHAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsVAlign", function() { return ButtonsVAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsIconAlign", function() { return ButtonsIconAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeight", function() { return MatchHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderType", function() { return BorderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attachment", function() { return Attachment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return Repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadialPosition", function() { return RadialPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientType", function() { return GradientType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontTransform", function() { return FontTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontStyle", function() { return FontStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontDecoration", function() { return FontDecoration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return Icons; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



var EHEG_LOGO = function EHEG_LOGO() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["G"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5z"
  })));
};
var ImageEffects = function ImageEffects() {
  return [{
    value: 'imghvr-anim-none',
    label: 'None'
  }, {
    value: 'imghvr-anim-grayscale',
    label: 'Grayscale'
  }, {
    value: 'imghvr-anim-color',
    label: 'Color'
  }, {
    value: 'imghvr-anim-dive',
    label: 'Dive'
  }, {
    value: 'imghvr-anim-none imghvr-anim-swap',
    label: 'Swap'
  }, {
    value: 'imghvr-anim-scroll|imghvr-padding',
    label: 'Scroll'
  }, {
    value: 'imghvr-anim-zoom-in',
    label: 'Zoom In'
  }, {
    value: 'imghvr-anim-zoom-out',
    label: 'Zoom Out'
  }, {
    value: 'imghvr-anim-zoom-in-out',
    label: 'Zoom In Out'
  }, {
    value: 'imghvr-anim-zoom-out-in',
    label: 'Zoom Out In'
  }, {
    value: 'imghvr-anim-zoom-in imghvr-anim-blur',
    label: 'Zoom In Blur'
  }, {
    value: 'imghvr-anim-zoom-out imghvr-anim-blur',
    label: 'Zoom Out Blur'
  }, {
    value: 'imghvr-anim-rotate',
    label: 'Rotate'
  }, {
    value: 'imghvr-anim-blur',
    label: 'Blur'
  }, {
    value: 'imghvr-anim-scale-rotate-left',
    label: 'Scale Rotate Left'
  }, {
    value: 'imghvr-anim-scale-rotate-right',
    label: 'Scale Rotate Right'
  }, {
    value: 'imghvr-anim-move imghvr-anim-move-up',
    label: 'Move Up'
  }, {
    value: 'imghvr-anim-move imghvr-anim-move-down',
    label: 'Move Down'
  }, {
    value: 'imghvr-anim-move imghvr-anim-move-left',
    label: 'Move Left'
  }, {
    value: 'imghvr-anim-move imghvr-anim-move-right',
    label: 'Move Right'
  }, {
    value: 'imghvr-anim-slide-out imghvr-anim-slide-out-up',
    label: 'Slide Up'
  }, {
    value: 'imghvr-anim-slide-out imghvr-anim-slide-out-down',
    label: 'Slide Down'
  }, {
    value: 'imghvr-anim-slide-out imghvr-anim-slide-out-left',
    label: 'Slide Left'
  }, {
    value: 'imghvr-anim-slide-out imghvr-anim-slide-out-right',
    label: 'Slide Right'
  }, {
    value: 'imghvr-anim-hinge imghvr-anim-hinge-up|imghvr-perspective',
    label: 'Hinge Up'
  }, {
    value: 'imghvr-anim-hinge imghvr-anim-hinge-down|imghvr-perspective',
    label: 'Hinge Down'
  }, {
    value: 'imghvr-anim-hinge imghvr-anim-hinge-left|imghvr-perspective',
    label: 'Hinge Left'
  }, {
    value: 'imghvr-anim-hinge imghvr-anim-hinge-right|imghvr-perspective',
    label: 'Hinge Right'
  }, {
    value: 'imghvr-anim-flip imghvr-anim-flip-hor',
    label: 'Flip Horizontal'
  }, {
    value: 'imghvr-anim-flip imghvr-anim-flip-vert',
    label: 'Flip Vertical'
  }, {
    value: 'imghvr-anim-flip imghvr-anim-flip-diag-left',
    label: 'Flip Diagonal Left'
  }, {
    value: 'imghvr-anim-flip imghvr-anim-flip-diag-right',
    label: 'Flip Diagonal Right'
  }, {
    value: 'imghvr-anim-fold imghvr-anim-fold-up',
    label: 'Fold Up'
  }, {
    value: 'imghvr-anim-fold imghvr-anim-fold-down',
    label: 'Fold Down'
  }, {
    value: 'imghvr-anim-fold imghvr-anim-fold-left',
    label: 'Fold Left'
  }, {
    value: 'imghvr-anim-fold imghvr-anim-fold-right',
    label: 'Fold Right'
  }, {
    value: 'imghvr-anim-zoom-out-slide imghvr-anim-zoom-out-slide-up',
    label: 'Zoom Out Up'
  }, {
    value: 'imghvr-anim-zoom-out-slide imghvr-anim-zoom-out-slide-down',
    label: 'Zoom Out Down'
  }, {
    value: 'imghvr-anim-zoom-out-slide imghvr-anim-zoom-out-slide-left',
    label: 'Zoom Out Left'
  }, {
    value: 'imghvr-anim-zoom-out-slide imghvr-anim-zoom-out-slide-right',
    label: 'Zoom Out Right'
  }, {
    value: 'imghvr-anim-zoom-out-flip imghvr-anim-zoom-out-flip-hor',
    label: 'Zoom Out Flip Horizontal'
  }, {
    value: 'imghvr-anim-zoom-out-flip imghvr-anim-zoom-out-flip-vert',
    label: 'Zoom Out Flip Vertical'
  }, {
    value: 'imghvr-anim-pivot-out imghvr-anim-pivot-out-top-left',
    label: 'Pivot Top Left'
  }, {
    value: 'imghvr-anim-pivot-out imghvr-anim-pivot-out-top-right',
    label: 'Pivot Top Right'
  }, {
    value: 'imghvr-anim-pivot-out imghvr-anim-pivot-out-bottom-left',
    label: 'Pivot Bottom Left'
  }, {
    value: 'imghvr-anim-pivot-out imghvr-anim-pivot-out-bottom-right',
    label: 'Pivot Bottom Right'
  }, {
    value: 'imghvr-anim-rotate-around',
    label: 'Rotate Around'
  }, {
    value: 'imghvr-anim-lightspeed imghvr-anim-lightspeed-out-left',
    label: 'Light Speed Out Left'
  }, {
    value: 'imghvr-anim-lightspeed imghvr-anim-lightspeed-out-right',
    label: 'Light Speed Out Right'
  }, {
    value: 'imghvr-anim-fall imghvr-anim-fall-away-horizontal',
    label: 'Fall Away Horizontal'
  }, {
    value: 'imghvr-anim-fall imghvr-anim-fall-away-vertical',
    label: 'Fall Away Vertical'
  }, {
    value: 'imghvr-anim-fall imghvr-anim-fall-away-rotate',
    label: 'Fall Away Rotate'
  }, {
    value: 'imghvr-anim-fall imghvr-anim-fall-away-rotate-invert',
    label: 'Fall Away Rotate Invert'
  }, {
    value: 'imghvr-anim-throw-out imghvr-anim-throw-out-up',
    label: 'Throw Up'
  }, {
    value: 'imghvr-anim-throw-out imghvr-anim-throw-out-down',
    label: 'Throw Down'
  }, {
    value: 'imghvr-anim-throw-out imghvr-anim-throw-out-left',
    label: 'Throw Left'
  }, {
    value: 'imghvr-anim-throw-out imghvr-anim-throw-out-right',
    label: 'Throw Right'
  }, {
    value: 'imghvr-anim-cube-out imghvr-anim-cube-out-up|imghvr-perspective imghvr-overflow',
    label: 'Cube Up'
  }, {
    value: 'imghvr-anim-cube-out imghvr-anim-cube-out-down|imghvr-perspective imghvr-overflow',
    label: 'Cube Down'
  }, {
    value: 'imghvr-anim-cube-out imghvr-anim-cube-out-right|imghvr-perspective imghvr-overflow',
    label: 'Cube Left'
  }, {
    value: 'imghvr-anim-cube-out imghvr-anim-cube-out-left|imghvr-perspective imghvr-overflow',
    label: 'Cube Right'
  }, {
    value: 'imghvr-anim-stack',
    label: 'Stack'
  }, {
    value: 'imghvr-anim-bounce-out',
    label: 'Bounce Out'
  }, {
    value: 'imghvr-anim-bounce-out-up',
    label: 'Bounce Out Up'
  }, {
    value: 'imghvr-anim-bounce-out-down',
    label: 'Bounce Out Down'
  }, {
    value: 'imghvr-anim-bounce-out-left',
    label: 'Bounce Out Left'
  }, {
    value: 'imghvr-anim-bounce-out-right',
    label: 'Bounce Out Right'
  }];
};
var Targets = function Targets() {
  return [{
    value: 'none',
    label: 'None'
  }, {
    value: 'link',
    label: 'URL'
  }, {
    value: 'attachment',
    label: 'Attachment'
  }];
};
var OverlayEffects = function OverlayEffects() {
  return [{
    value: 'imghvr-anim-none imghvr-anim-single',
    label: '-- Show Always --'
  }, {
    value: 'imghvr-anim-fade-in imghvr-anim-single',
    label: 'Fade'
  }, {
    value: 'imghvr-anim-zoom-in-alt imghvr-anim-single',
    label: 'Zoom In'
  }, {
    value: 'imghvr-anim-none imghvr-anim-bg-none imghvr-anim-single',
    label: 'No Background'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-single imghvr-anim-slide-in-up',
    label: 'Slide Up'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-single imghvr-anim-slide-in-down',
    label: 'Slide Down'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-single imghvr-anim-slide-in-left',
    label: 'Slide Left'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-single imghvr-anim-slide-in-right',
    label: 'Slide Right'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-single imghvr-anim-slide-in-top-left',
    label: 'Slide Top Left'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-single imghvr-anim-slide-in-top-right',
    label: 'Slide Top Right'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-single imghvr-anim-slide-in-bottom-left',
    label: 'Slide Bottom Left'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-single imghvr-anim-slide-in-bottom-right',
    label: 'Slide Bottom Right'
  }, {
    value: 'imghvr-anim-shutter-out imghvr-anim-single imghvr-anim-shutter-out-hor',
    label: 'Shutter Out Horizontal'
  }, {
    value: 'imghvr-anim-shutter-out imghvr-anim-single imghvr-anim-shutter-out-vert',
    label: 'Shutter Out Vertical'
  }, {
    value: 'imghvr-anim-shutter-out imghvr-anim-single imghvr-anim-shutter-out-diag-left',
    label: 'Shutter Out Diagonal Left'
  }, {
    value: 'imghvr-anim-shutter-out imghvr-anim-single imghvr-anim-shutter-out-diag-right',
    label: 'Shutter Out Diagonal Right'
  }, {
    value: 'imghvr-anim-shutter-in imghvr-anim-pseudo imghvr-anim-shutter-in-hor',
    label: 'Shutter In Horizontal'
  }, {
    value: 'imghvr-anim-shutter-in imghvr-anim-pseudo imghvr-anim-shutter-in-vert',
    label: 'Shutter In Vertical'
  }, {
    value: 'imghvr-anim-shutter-in-out imghvr-anim-pseudo imghvr-anim-shutter-in-out-hor',
    label: 'Shutter In Out Horizontal'
  }, {
    value: 'imghvr-anim-shutter-in-out imghvr-anim-pseudo imghvr-anim-shutter-in-out-vert',
    label: 'Shutter In Out Vertical'
  }, {
    value: 'imghvr-anim-shutter-in-out imghvr-anim-pseudo imghvr-anim-shutter-in-out-diag-left',
    label: 'Shutter In Out Diagonal Left'
  }, {
    value: 'imghvr-anim-shutter-in-out imghvr-anim-pseudo imghvr-anim-shutter-in-out-diag-right',
    label: 'Shutter In Out Diagonal Right'
  }, {
    value: 'imghvr-anim-strip-shutter imghvr-anim-pseudo imghvr-anim-strip-shutter-up',
    label: 'Strip Shutter Up'
  }, {
    value: 'imghvr-anim-strip-shutter imghvr-anim-pseudo imghvr-anim-strip-shutter-down',
    label: 'Strip Shutter Down'
  }, {
    value: 'imghvr-anim-strip-shutter imghvr-anim-pseudo imghvr-anim-strip-shutter-left',
    label: 'Strip Shutter Left'
  }, {
    value: 'imghvr-anim-strip-shutter imghvr-anim-pseudo imghvr-anim-strip-shutter-right',
    label: 'Strip Shutter Right'
  }, {
    value: 'imghvr-anim-strip-hor imghvr-anim-pseudo imghvr-anim-strip-hor-up',
    label: 'Strip Horizontal Up'
  }, {
    value: 'imghvr-anim-strip-hor imghvr-anim-pseudo imghvr-anim-strip-hor-down',
    label: 'Strip Horizontal Down'
  }, {
    value: 'imghvr-anim-strip-hor imghvr-anim-pseudo imghvr-anim-strip-hor-top-left',
    label: 'Strip Horizontal Top Left'
  }, {
    value: 'imghvr-anim-strip-hor imghvr-anim-pseudo imghvr-anim-strip-hor-top-right',
    label: 'Strip Horizontal Top Right'
  }, {
    value: 'imghvr-anim-strip-hor imghvr-anim-pseudo imghvr-anim-strip-hor-bottom-left',
    label: 'Strip Horizontal Bottom Left'
  }, {
    value: 'imghvr-anim-strip-hor imghvr-anim-pseudo imghvr-anim-strip-hor-bottom-right',
    label: 'Strip Horizontal Bottom Right'
  }, {
    value: 'imghvr-anim-strip-vert imghvr-anim-pseudo imghvr-anim-strip-vert-left',
    label: 'Strip Vertical Left'
  }, {
    value: 'imghvr-anim-strip-vert imghvr-anim-pseudo imghvr-anim-strip-vert-right',
    label: 'Strip Vertical Right'
  }, {
    value: 'imghvr-anim-strip-vert imghvr-anim-pseudo imghvr-anim-strip-vert-top-left',
    label: 'Strip Vertical Top Left'
  }, {
    value: 'imghvr-anim-strip-vert imghvr-anim-pseudo imghvr-anim-strip-vert-top-right',
    label: 'Strip Vertical Top Right'
  }, {
    value: 'imghvr-anim-strip-vert imghvr-anim-pseudo imghvr-anim-strip-vert-bottom-left',
    label: 'Strip Vertical Bottom Left'
  }, {
    value: 'imghvr-anim-strip-vert imghvr-anim-pseudo imghvr-anim-strip-vert-bottom-right',
    label: 'Strip Vertical Bottom Right'
  }, {
    value: 'imghvr-anim-pixel imghvr-anim-pseudo imghvr-anim-pixel-up',
    label: 'Pixel Up'
  }, {
    value: 'imghvr-anim-pixel imghvr-anim-pseudo imghvr-anim-pixel-down',
    label: 'Pixel Down'
  }, {
    value: 'imghvr-anim-pixel imghvr-anim-pseudo imghvr-anim-pixel-left',
    label: 'Pixel Left'
  }, {
    value: 'imghvr-anim-pixel imghvr-anim-pseudo imghvr-anim-pixel-right',
    label: 'Pixel Right'
  }, {
    value: 'imghvr-anim-pixel imghvr-anim-pseudo imghvr-anim-pixel-top-left',
    label: 'Pixel Top Left'
  }, {
    value: 'imghvr-anim-pixel imghvr-anim-pseudo imghvr-anim-pixel-top-right',
    label: 'Pixel Top Right'
  }, {
    value: 'imghvr-anim-pixel imghvr-anim-pseudo imghvr-anim-pixel-bottom-left',
    label: 'Pixel Bottom Left'
  }, {
    value: 'imghvr-anim-pixel imghvr-anim-pseudo imghvr-anim-pixel-bottom-right',
    label: 'Pixel Bottom Right'
  }, {
    value: 'imghvr-anim-pivot-in imghvr-anim-single imghvr-anim-pivot-in-top-left',
    label: 'Pivot Top Left'
  }, {
    value: 'imghvr-anim-pivot-in imghvr-anim-single imghvr-anim-pivot-in-top-right',
    label: 'Pivot Top Right'
  }, {
    value: 'imghvr-anim-pivot-in imghvr-anim-single imghvr-anim-pivot-in-bottom-left',
    label: 'Pivot Bottom Left'
  }, {
    value: 'imghvr-anim-pivot-in imghvr-anim-single imghvr-anim-pivot-in-bottom-right',
    label: 'Pivot Bottom Right'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-rotate-left',
    label: 'Blocks Rotate Left'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-rotate-right',
    label: 'Blocks Rotate Right'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-rotate-in-left',
    label: 'Blocks Rotate In Left'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-rotate-in-right',
    label: 'Blocks Rotate In Right'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-in',
    label: 'Blocks In'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-out',
    label: 'Blocks Out'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-float-up',
    label: 'Blocks Float Up'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-float-down',
    label: 'Blocks Float Down'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-float-left',
    label: 'Blocks Float Left'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-float-right',
    label: 'Blocks Float Right'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-zoom-top-left',
    label: 'Blocks Zoom Top Left'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-zoom-top-right',
    label: 'Blocks Zoom Top Right'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-zoom-bottom-left',
    label: 'Blocks Zoom Bottom Left'
  }, {
    value: 'imghvr-anim-blocks imghvr-anim-pseudo imghvr-anim-blocks-zoom-bottom-right',
    label: 'Blocks Zoom Bottom Right'
  }, {
    value: 'imghvr-anim-throw-in imghvr-anim-single imghvr-anim-throw-in-up',
    label: 'Throw Up'
  }, {
    value: 'imghvr-anim-throw-in imghvr-anim-single imghvr-anim-throw-in-down',
    label: 'Throw Down'
  }, {
    value: 'imghvr-anim-throw-in imghvr-anim-single imghvr-anim-throw-in-left',
    label: 'Throw Left'
  }, {
    value: 'imghvr-anim-throw-in imghvr-anim-single imghvr-anim-throw-in-right',
    label: 'Throw Right'
  }, {
    value: 'imghvr-anim-flash imghvr-anim-pseudo imghvr-anim-flash-top-left',
    label: 'Flash Top Left'
  }, {
    value: 'imghvr-anim-flash imghvr-anim-pseudo imghvr-anim-flash-top-right',
    label: 'Flash Top Right'
  }, {
    value: 'imghvr-anim-flash imghvr-anim-pseudo imghvr-anim-flash-bottom-left',
    label: 'Flash Bottom Left'
  }, {
    value: 'imghvr-anim-flash imghvr-anim-pseudo imghvr-anim-flash-bottom-right',
    label: 'Flash Bottom Right'
  }, {
    value: 'imghvr-anim-splash imghvr-anim-pseudo imghvr-anim-splash-up',
    label: 'Splash Up'
  }, {
    value: 'imghvr-anim-splash imghvr-anim-pseudo imghvr-anim-splash-down',
    label: 'Splash Down'
  }, {
    value: 'imghvr-anim-splash imghvr-anim-pseudo imghvr-anim-splash-left',
    label: 'Splash Left'
  }, {
    value: 'imghvr-anim-splash imghvr-anim-pseudo imghvr-anim-splash-right',
    label: 'Splash Right'
  }, {
    value: 'imghvr-anim-stack imghvr-anim-single imghvr-anim-stack-up',
    label: 'Stack Up'
  }, {
    value: 'imghvr-anim-stack imghvr-anim-single imghvr-anim-stack-down',
    label: 'Stack Down'
  }, {
    value: 'imghvr-anim-stack imghvr-anim-single imghvr-anim-stack-left',
    label: 'Stack Left'
  }, {
    value: 'imghvr-anim-stack imghvr-anim-single imghvr-anim-stack-right',
    label: 'Stack Right'
  }, {
    value: 'imghvr-anim-circle imghvr-anim-pseudo imghvr-anim-circle-up',
    label: 'Circle Up'
  }, {
    value: 'imghvr-anim-circle imghvr-anim-pseudo imghvr-anim-circle-down',
    label: 'Circle Down'
  }, {
    value: 'imghvr-anim-circle imghvr-anim-pseudo imghvr-anim-circle-left',
    label: 'Circle Left'
  }, {
    value: 'imghvr-anim-circle imghvr-anim-pseudo imghvr-anim-circle-right',
    label: 'Circle Right'
  }, {
    value: 'imghvr-anim-circle imghvr-anim-pseudo imghvr-anim-circle-top-left',
    label: 'Circle Top Left'
  }, {
    value: 'imghvr-anim-circle imghvr-anim-pseudo imghvr-anim-circle-top-right',
    label: 'Circle Top Right'
  }, {
    value: 'imghvr-anim-circle imghvr-anim-pseudo imghvr-anim-circle-bottom-left',
    label: 'Circle Bottom Left'
  }, {
    value: 'imghvr-anim-circle imghvr-anim-pseudo imghvr-anim-circle-bottom-right',
    label: 'Circle Bottom Right'
  }, {
    value: 'imghvr-anim-book imghvr-anim-pseudo imghvr-anim-book-open-horiz|imghvr-perspective imghvr-overflow',
    label: 'Book Open Horizontal'
  }, {
    value: 'imghvr-anim-book imghvr-anim-pseudo imghvr-anim-book-open-vert|imghvr-perspective imghvr-overflow',
    label: 'Book Open Vertical'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo',
    label: 'Border Reveal'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-horiz',
    label: 'Border Reveal Horizontal'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-vert',
    label: 'Border Reveal Vertical'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-corners-2',
    label: 'Border Reveal Diagonal Left'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-corners-1',
    label: 'Border Reveal Diagonal Right'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-top-left',
    label: 'Border Reveal Top Left'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-top-right',
    label: 'Border Reveal Top Right'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-bottom-left',
    label: 'Border Reveal Bottom Left'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-bottom-right',
    label: 'Border Reveal Bottom Right'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-cc-1',
    label: 'Border Reveal Clockwise'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-ccc-1',
    label: 'Border Reveal Anti Clockwise'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-cc-2',
    label: 'Border Reveal Split Clockwise'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-ccc-2',
    label: 'Border Reveal Split Anti Clockwise'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-cc-3',
    label: 'Border Reveal Attach Clockwise'
  }, {
    value: 'imghvr-anim-border-reveal imghvr-anim-pseudo imghvr-anim-border-reveal-ccc-3',
    label: 'Border Reveal Attach Anti Clockwise'
  }, {
    value: 'imghvr-anim-blinds imghvr-anim-pseudo imghvr-anim-blinds-horiz',
    label: 'Blinds Horizontal'
  }, {
    value: 'imghvr-anim-blinds imghvr-anim-pseudo imghvr-anim-blinds-vert',
    label: 'Blinds Vertical'
  }, {
    value: 'imghvr-anim-blinds imghvr-anim-pseudo imghvr-anim-blinds-up',
    label: 'Blinds Up'
  }, {
    value: 'imghvr-anim-blinds imghvr-anim-pseudo imghvr-anim-blinds-down',
    label: 'Blinds Down'
  }, {
    value: 'imghvr-anim-blinds imghvr-anim-pseudo imghvr-anim-blinds-left',
    label: 'Blinds Left'
  }, {
    value: 'imghvr-anim-blinds imghvr-anim-pseudo imghvr-anim-blinds-right',
    label: 'Blinds Right'
  }];
};
var ContentEffects = function ContentEffects() {
  return [{
    value: 'imghvr-anim-none',
    label: '-- Show Always --'
  }, {
    value: 'imghvr-anim-fade-in',
    label: 'Fade'
  }, {
    value: 'imghvr-anim-zoom-in-alt',
    label: 'Zoom In'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-slide-in-up',
    label: 'Slide Up'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-slide-in-down',
    label: 'Slide Down'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-slide-in-left',
    label: 'Slide Left'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-slide-in-right',
    label: 'Slide Right'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-slide-in-top-left',
    label: 'Slide Top Left'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-slide-in-top-right',
    label: 'Slide Top Right'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-slide-in-bottom-left',
    label: 'Slide Bottom Left'
  }, {
    value: 'imghvr-anim-slide-in imghvr-anim-slide-in-bottom-right',
    label: 'Slide Bottom Right'
  }, {
    value: 'imghvr-anim-fade imghvr-anim-fade-up',
    label: 'Fade Up'
  }, {
    value: 'imghvr-anim-fade imghvr-anim-fade-down',
    label: 'Fade Down'
  }, {
    value: 'imghvr-anim-fade imghvr-anim-fade-left',
    label: 'Fade Left'
  }, {
    value: 'imghvr-anim-fade imghvr-anim-fade-right',
    label: 'Fade Right'
  }, {
    value: 'imghvr-anim-hinge imghvr-anim-hinge-up|imghvr-perspective',
    label: 'Hinge Up'
  }, {
    value: 'imghvr-anim-hinge imghvr-anim-hinge-down|imghvr-perspective',
    label: 'Hinge Down'
  }, {
    value: 'imghvr-anim-hinge imghvr-anim-hinge-left|imghvr-perspective',
    label: 'Hinge Left'
  }, {
    value: 'imghvr-anim-hinge imghvr-anim-hinge-right|imghvr-perspective',
    label: 'Hinge Right'
  }, {
    value: 'imghvr-anim-flip imghvr-anim-flip-hor',
    label: 'Flip Horizontal'
  }, {
    value: 'imghvr-anim-flip imghvr-anim-flip-vert',
    label: 'Flip Vertical'
  }, {
    value: 'imghvr-anim-flip imghvr-anim-flip-diag-left',
    label: 'Flip Diagonal Left'
  }, {
    value: 'imghvr-anim-flip imghvr-anim-flip-diag-right',
    label: 'Flip Diagonal Right'
  }, {
    value: 'imghvr-anim-fold imghvr-anim-fold-down',
    label: 'Fold Up'
  }, {
    value: 'imghvr-anim-fold imghvr-anim-fold-up',
    label: 'Fold Down'
  }, {
    value: 'imghvr-anim-fold imghvr-anim-fold-left',
    label: 'Fold Left'
  }, {
    value: 'imghvr-anim-fold imghvr-anim-fold-right',
    label: 'Fold Right'
  }, {
    value: 'imghvr-anim-zoom-in-flip imghvr-anim-zoom-in-flip-hor',
    label: 'Zoom In Flip Horizontal'
  }, {
    value: 'imghvr-anim-zoom-in-flip imghvr-anim-zoom-in-flip-vert',
    label: 'Zoom In Flip Vertical'
  }, {
    value: 'imghvr-anim-pivot-in imghvr-anim-pivot-in-top-left',
    label: 'Pivot Top Left'
  }, {
    value: 'imghvr-anim-pivot-in imghvr-anim-pivot-in-top-right',
    label: 'Pivot Top Right'
  }, {
    value: 'imghvr-anim-pivot-in imghvr-anim-pivot-in-bottom-left',
    label: 'Pivot Bottom Left'
  }, {
    value: 'imghvr-anim-pivot-in imghvr-anim-pivot-in-bottom-right',
    label: 'Pivot Bottom Right'
  }, {
    value: 'imghvr-anim-throw-in imghvr-anim-throw-in-up',
    label: 'Throw Up'
  }, {
    value: 'imghvr-anim-throw-in imghvr-anim-throw-in-down',
    label: 'Throw Down'
  }, {
    value: 'imghvr-anim-throw-in imghvr-anim-throw-in-left',
    label: 'Throw Left'
  }, {
    value: 'imghvr-anim-throw-in imghvr-anim-throw-in-right',
    label: 'Throw Right'
  }, {
    value: 'imghvr-anim-cube-in imghvr-anim-cube-in-up|imghvr-perspective imghvr-overflow',
    label: 'Cube Up'
  }, {
    value: 'imghvr-anim-cube-in imghvr-anim-cube-in-down|imghvr-perspective imghvr-overflow',
    label: 'Cube Down'
  }, {
    value: 'imghvr-anim-cube-in imghvr-anim-cube-in-right|imghvr-perspective imghvr-overflow',
    label: 'Cube Left'
  }, {
    value: 'imghvr-anim-cube-in imghvr-anim-cube-in-left|imghvr-perspective imghvr-overflow',
    label: 'Cube Right'
  }, {
    value: 'imghvr-anim-lightspeed-in imghvr-anim-lightspeed-in-left',
    label: 'Lightspeed In Left'
  }, {
    value: 'imghvr-anim-lightspeed-in imghvr-anim-lightspeed-in-right',
    label: 'Lightspeed In Right'
  }, {
    value: 'imghvr-anim-bounce-in',
    label: 'Bounce In'
  }, {
    value: 'imghvr-anim-bounce-in-up',
    label: 'Bounce In Up'
  }, {
    value: 'imghvr-anim-bounce-in-down',
    label: 'Bounce In Down'
  }, {
    value: 'imghvr-anim-bounce-in-left',
    label: 'Bounce In Left'
  }, {
    value: 'imghvr-anim-bounce-in-right',
    label: 'Bounce In Right'
  }, {
    value: 'imghvr-anim-shift imghvr-anim-shift-top-left|imghvr-overflow',
    label: 'Shift Top Left'
  }, {
    value: 'imghvr-anim-shift imghvr-anim-shift-top-right|imghvr-overflow',
    label: 'Shift Top Right'
  }, {
    value: 'imghvr-anim-shift imghvr-anim-shift-bottom-left|imghvr-overflow',
    label: 'Shift Bottom Left'
  }, {
    value: 'imghvr-anim-shift imghvr-anim-shift-bottom-right|imghvr-overflow',
    label: 'Shift Bottom Right'
  }];
};
var ContentAppearance = function ContentAppearance() {
  return [{
    value: 'imghvr-anim-none',
    label: '-- Show Always --'
  }, {
    value: 'imghvr-anim-fade-content imghvr-anim-fade-content-up',
    label: 'Fade Up'
  }, {
    value: 'imghvr-anim-fade-content imghvr-anim-fade-content-down',
    label: 'Fade Down'
  }, {
    value: 'imghvr-anim-fade-content imghvr-anim-fade-content-left',
    label: 'Fade Left'
  }, {
    value: 'imghvr-anim-fade-content imghvr-anim-fade-content-right',
    label: 'Fade Right'
  }, {
    value: 'imghvr-anim-slide-content imghvr-anim-slide-content-up',
    label: 'Slide Up'
  }, {
    value: 'imghvr-anim-slide-content imghvr-anim-slide-content-down',
    label: 'Slide Down'
  }, {
    value: 'imghvr-anim-zoom-content imghvr-anim-zoom-content-in',
    label: 'Zoom In'
  }, {
    value: 'imghvr-anim-zoom-content imghvr-anim-zoom-content-out',
    label: 'Zoom Out'
  }, {
    value: 'imghvr-anim-flip-content imghvr-anim-flip-content-x',
    label: 'Flip X'
  }, {
    value: 'imghvr-anim-flip-content imghvr-anim-flip-content-y',
    label: 'Flip Y'
  }];
};
var HAlign = function HAlign() {
  return [{
    value: 'left',
    label: 'left'
  }, {
    value: 'center',
    label: 'center'
  }, {
    value: 'right',
    label: 'right'
  }];
};
var VAlign = function VAlign() {
  return [{
    value: 'flex-start',
    label: 'top'
  }, {
    value: 'center',
    label: 'middle'
  }, {
    value: 'flex-end',
    label: 'bottom'
  }];
};
var ButtonsDirection = function ButtonsDirection() {
  return [{
    value: 'row',
    label: 'Horizontal'
  }, {
    value: 'column',
    label: 'Vertical'
  }];
};
var ButtonsHAlign = function ButtonsHAlign() {
  return [{
    value: 'right',
    label: 'left'
  }, {
    value: 'center',
    label: 'center'
  }, {
    value: 'left',
    label: 'right'
  }];
};
var ButtonsVAlign = function ButtonsVAlign() {
  return [{
    value: 'bottom',
    label: 'top'
  }, {
    value: 'center',
    label: 'center'
  }, {
    value: 'top',
    label: 'bottom'
  }];
};
var ButtonsIconAlign = function ButtonsIconAlign() {
  return [{
    value: 'left',
    label: 'left'
  }, {
    value: 'right',
    label: 'right'
  }];
};
var MatchHeight = function MatchHeight() {
  return [{
    value: '100%',
    label: 'Yes'
  }, {
    value: 'auto',
    label: 'No'
  }];
};
var BorderType = function BorderType() {
  return [{
    value: 'none',
    label: 'None'
  }, {
    value: 'solid',
    label: 'Solid'
  }, {
    value: 'double',
    label: 'Double'
  }, {
    value: 'dotted',
    label: 'Dotted'
  }, {
    value: 'dashed',
    label: 'Dashed'
  }, {
    value: 'groove',
    label: 'Groove'
  }];
};
var Position = function Position() {
  return [{
    value: '',
    label: 'Default'
  }, {
    value: 'top left',
    label: 'Top Left'
  }, {
    value: 'top center',
    label: 'Top Center'
  }, {
    value: 'top right',
    label: 'Top Right'
  }, {
    value: 'center left',
    label: 'Center Left'
  }, {
    value: 'center center',
    label: 'Center Center'
  }, {
    value: 'center right',
    label: 'Center Right'
  }, {
    value: 'bottom left',
    label: 'Bottom Left'
  }, {
    value: 'bottom center',
    label: 'Bottom Center'
  }, {
    value: 'bottom right',
    label: 'Bottom Right'
  }];
};
var Attachment = function Attachment() {
  return [{
    value: '',
    label: 'Default'
  }, {
    value: 'scroll',
    label: 'Scroll'
  }, {
    value: 'fixed',
    label: 'Fixed'
  }];
};
var Repeat = function Repeat() {
  return [{
    value: '',
    label: 'Default'
  }, {
    value: 'no-repeat',
    label: 'No-repeat'
  }, {
    value: 'repeat',
    label: 'Repeat'
  }, {
    value: 'repeat-x',
    label: 'Repeat-x'
  }, {
    value: 'repeat-y',
    label: 'Repeat-y'
  }];
};
var Size = function Size() {
  return [{
    value: '',
    label: 'Default'
  }, {
    value: 'auto',
    label: 'Auto'
  }, {
    value: 'cover',
    label: 'Cover'
  }, {
    value: 'contain',
    label: 'Contain'
  }];
};
var RadialPosition = function RadialPosition() {
  return [{
    value: 'center center',
    label: 'Center Center'
  }, {
    value: 'center left',
    label: 'Center Left'
  }, {
    value: 'center right',
    label: 'Center Right'
  }, {
    value: 'top center',
    label: 'Top Center'
  }, {
    value: 'top left',
    label: 'Top Left'
  }, {
    value: 'top right',
    label: 'Top Right'
  }, {
    value: 'bottom center',
    label: 'Bottom Center'
  }, {
    value: 'bottom left',
    label: 'Bottom Left'
  }, {
    value: 'bottom right',
    label: 'Bottom Right'
  }];
};
var GradientType = function GradientType() {
  return [{
    value: 'linear',
    label: 'Linear'
  }, {
    value: 'radial',
    label: 'Radial'
  }];
};
var FontTransform = function FontTransform() {
  return [{
    value: '',
    label: 'Default'
  }, {
    value: 'none',
    label: 'None'
  }, {
    value: 'capitalize',
    label: 'Capitalize'
  }, {
    value: 'uppercase',
    label: 'Uppercase'
  }, {
    value: 'lowercase',
    label: 'Lowercase'
  }, {
    value: 'initial',
    label: 'Initial'
  }, {
    value: 'inherit',
    label: 'Inherit'
  }];
};
var FontStyle = function FontStyle() {
  return [{
    value: '',
    label: 'Default'
  }, {
    value: 'normal',
    label: 'Normal'
  }, {
    value: 'italic',
    label: 'Italic'
  }, {
    value: 'oblique',
    label: 'Oblique'
  }];
};
var FontDecoration = function FontDecoration() {
  return [{
    value: '',
    label: 'Default'
  }, {
    value: 'none',
    label: 'None'
  }, {
    value: 'underline',
    label: 'Underline'
  }, {
    value: 'overline',
    label: 'Overline'
  }, {
    value: 'line-through',
    label: 'Line Through'
  }];
};
var Icons = function Icons() {
  return ['fab fa-500px', 'fab fa-accessible-icon', 'fab fa-accusoft', 'fas fa-ad', 'far fa-address-book', 'fas fa-address-book', 'far fa-address-card', 'fas fa-address-card', 'fas fa-adjust', 'fab fa-adn', 'fab fa-adversal', 'fab fa-affiliatetheme', 'fas fa-air-freshener', 'fab fa-algolia', 'fas fa-align-center', 'fas fa-align-justify', 'fas fa-align-left', 'fas fa-align-right', 'fab fa-alipay', 'fas fa-allergies', 'fab fa-amazon', 'fab fa-amazon-pay', 'fas fa-ambulance', 'fas fa-american-sign-language-interpreting', 'fab fa-amilia', 'fas fa-anchor', 'fab fa-android', 'fab fa-angellist', 'fas fa-angle-double-down', 'fas fa-angle-double-left', 'fas fa-angle-double-right', 'fas fa-angle-double-up', 'fas fa-angle-down', 'fas fa-angle-left', 'fas fa-angle-right', 'fas fa-angle-up', 'far fa-angry', 'fas fa-angry', 'fab fa-angrycreative', 'fab fa-angular', 'fas fa-ankh', 'fab fa-app-store', 'fab fa-app-store-ios', 'fab fa-apper', 'fab fa-apple', 'fas fa-apple-alt', 'fab fa-apple-pay', 'fas fa-archive', 'fas fa-archway', 'far fa-arrow-alt-circle-down', 'fas fa-arrow-alt-circle-down', 'far fa-arrow-alt-circle-left', 'fas fa-arrow-alt-circle-left', 'far fa-arrow-alt-circle-right', 'fas fa-arrow-alt-circle-right', 'far fa-arrow-alt-circle-up', 'fas fa-arrow-alt-circle-up', 'fas fa-arrow-circle-down', 'fas fa-arrow-circle-left', 'fas fa-arrow-circle-right', 'fas fa-arrow-circle-up', 'fas fa-arrow-down', 'fas fa-arrow-left', 'fas fa-arrow-right', 'fas fa-arrow-up', 'fas fa-arrows-alt', 'fas fa-arrows-alt-h', 'fas fa-arrows-alt-v', 'fas fa-assistive-listening-systems', 'fas fa-asterisk', 'fab fa-asymmetrik', 'fas fa-at', 'fas fa-atlas', 'fas fa-atom', 'fab fa-audible', 'fas fa-audio-description', 'fab fa-autoprefixer', 'fab fa-avianex', 'fab fa-aviato', 'fas fa-award', 'fab fa-aws', 'fas fa-backspace', 'fas fa-backward', 'fas fa-balance-scale', 'fas fa-ban', 'fas fa-band-aid', 'fab fa-bandcamp', 'fas fa-barcode', 'fas fa-bars', 'fas fa-baseball-ball', 'fas fa-basketball-ball', 'fas fa-bath', 'fas fa-battery-empty', 'fas fa-battery-full', 'fas fa-battery-half', 'fas fa-battery-quarter', 'fas fa-battery-three-quarters', 'fas fa-bed', 'fas fa-beer', 'fab fa-behance', 'fab fa-behance-square', 'far fa-bell', 'fas fa-bell', 'far fa-bell-slash', 'fas fa-bell-slash', 'fas fa-bezier-curve', 'fas fa-bible', 'fas fa-bicycle', 'fab fa-bimobject', 'fas fa-binoculars', 'fas fa-birthday-cake', 'fab fa-bitbucket', 'fab fa-bitcoin', 'fab fa-bity', 'fab fa-black-tie', 'fab fa-blackberry', 'fas fa-blender', 'fas fa-blind', 'fab fa-blogger', 'fab fa-blogger-b', 'fab fa-bluetooth', 'fab fa-bluetooth-b', 'fas fa-bold', 'fas fa-bolt', 'fas fa-bomb', 'fas fa-bone', 'fas fa-bong', 'fas fa-book', 'fas fa-book-open', 'fas fa-book-reader', 'far fa-bookmark', 'fas fa-bookmark', 'fas fa-bowling-ball', 'fas fa-box', 'fas fa-box-open', 'fas fa-boxes', 'fas fa-braille', 'fas fa-brain', 'fas fa-briefcase', 'fas fa-briefcase-medical', 'fas fa-broadcast-tower', 'fas fa-broom', 'fas fa-brush', 'fab fa-btc', 'fas fa-bug', 'far fa-building', 'fas fa-building', 'fas fa-bullhorn', 'fas fa-bullseye', 'fas fa-burn', 'fab fa-buromobelexperte', 'fas fa-bus', 'fas fa-bus-alt', 'fas fa-business-time', 'fab fa-buysellads', 'fas fa-calculator', 'far fa-calendar', 'fas fa-calendar', 'far fa-calendar-alt', 'fas fa-calendar-alt', 'far fa-calendar-check', 'fas fa-calendar-check', 'far fa-calendar-minus', 'fas fa-calendar-minus', 'far fa-calendar-plus', 'fas fa-calendar-plus', 'far fa-calendar-times', 'fas fa-calendar-times', 'fas fa-camera', 'fas fa-camera-retro', 'fas fa-cannabis', 'fas fa-capsules', 'fas fa-car', 'fas fa-car-alt', 'fas fa-car-battery', 'fas fa-car-crash', 'fas fa-car-side', 'fas fa-caret-down', 'fas fa-caret-left', 'fas fa-caret-right', 'far fa-caret-square-down', 'fas fa-caret-square-down', 'far fa-caret-square-left', 'fas fa-caret-square-left', 'far fa-caret-square-right', 'fas fa-caret-square-right', 'far fa-caret-square-up', 'fas fa-caret-square-up', 'fas fa-caret-up', 'fas fa-cart-arrow-down', 'fas fa-cart-plus', 'fab fa-cc-amazon-pay', 'fab fa-cc-amex', 'fab fa-cc-apple-pay', 'fab fa-cc-diners-club', 'fab fa-cc-discover', 'fab fa-cc-jcb', 'fab fa-cc-mastercard', 'fab fa-cc-paypal', 'fab fa-cc-stripe', 'fab fa-cc-visa', 'fab fa-centercode', 'fas fa-certificate', 'fas fa-chalkboard', 'fas fa-chalkboard-teacher', 'fas fa-charging-station', 'fas fa-chart-area', 'far fa-chart-bar', 'fas fa-chart-bar', 'fas fa-chart-line', 'fas fa-chart-pie', 'fas fa-check', 'far fa-check-circle', 'fas fa-check-circle', 'fas fa-check-double', 'far fa-check-square', 'fas fa-check-square', 'fas fa-chess', 'fas fa-chess-bishop', 'fas fa-chess-board', 'fas fa-chess-king', 'fas fa-chess-knight', 'fas fa-chess-pawn', 'fas fa-chess-queen', 'fas fa-chess-rook', 'fas fa-chevron-circle-down', 'fas fa-chevron-circle-left', 'fas fa-chevron-circle-right', 'fas fa-chevron-circle-up', 'fas fa-chevron-down', 'fas fa-chevron-left', 'fas fa-chevron-right', 'fas fa-chevron-up', 'fas fa-child', 'fab fa-chrome', 'fas fa-church', 'far fa-circle', 'fas fa-circle', 'fas fa-circle-notch', 'fas fa-city', 'far fa-clipboard', 'fas fa-clipboard', 'fas fa-clipboard-check', 'fas fa-clipboard-list', 'far fa-clock', 'fas fa-clock', 'far fa-clone', 'fas fa-clone', 'far fa-closed-captioning', 'fas fa-closed-captioning', 'fas fa-cloud', 'fas fa-cloud-download-alt', 'fas fa-cloud-upload-alt', 'fab fa-cloudscale', 'fab fa-cloudsmith', 'fab fa-cloudversify', 'fas fa-cocktail', 'fas fa-code', 'fas fa-code-branch', 'fab fa-codepen', 'fab fa-codiepie', 'fas fa-coffee', 'fas fa-cog', 'fas fa-cogs', 'fas fa-coins', 'fas fa-columns', 'far fa-comment', 'fas fa-comment', 'far fa-comment-alt', 'fas fa-comment-alt', 'fas fa-comment-dollar', 'far fa-comment-dots', 'fas fa-comment-dots', 'fas fa-comment-slash', 'far fa-comments', 'fas fa-comments', 'fas fa-comments-dollar', 'fas fa-compact-disc', 'far fa-compass', 'fas fa-compass', 'fas fa-compress', 'fas fa-concierge-bell', 'fab fa-connectdevelop', 'fab fa-contao', 'fas fa-cookie', 'fas fa-cookie-bite', 'far fa-copy', 'fas fa-copy', 'far fa-copyright', 'fas fa-copyright', 'fas fa-couch', 'fab fa-cpanel', 'fab fa-creative-commons', 'fab fa-creative-commons-by', 'fab fa-creative-commons-nc', 'fab fa-creative-commons-nc-eu', 'fab fa-creative-commons-nc-jp', 'fab fa-creative-commons-nd', 'fab fa-creative-commons-pd', 'fab fa-creative-commons-pd-alt', 'fab fa-creative-commons-remix', 'fab fa-creative-commons-sa', 'fab fa-creative-commons-sampling', 'fab fa-creative-commons-sampling-plus', 'fab fa-creative-commons-share', 'far fa-credit-card', 'fas fa-credit-card', 'fas fa-crop', 'fas fa-crop-alt', 'fas fa-cross', 'fas fa-crosshairs', 'fas fa-crow', 'fas fa-crown', 'fab fa-css3', 'fab fa-css3-alt', 'fas fa-cube', 'fas fa-cubes', 'fas fa-cut', 'fab fa-cuttlefish', 'fab fa-d-and-d', 'fab fa-dashcube', 'fas fa-database', 'fas fa-deaf', 'fab fa-delicious', 'fab fa-deploydog', 'fab fa-deskpro', 'fas fa-desktop', 'fab fa-deviantart', 'fas fa-dharmachakra', 'fas fa-diagnoses', 'fas fa-dice', 'fas fa-dice-five', 'fas fa-dice-four', 'fas fa-dice-one', 'fas fa-dice-six', 'fas fa-dice-three', 'fas fa-dice-two', 'fab fa-digg', 'fab fa-digital-ocean', 'fas fa-digital-tachograph', 'fas fa-directions', 'fab fa-discord', 'fab fa-discourse', 'fas fa-divide', 'far fa-dizzy', 'fas fa-dizzy', 'fas fa-dna', 'fab fa-dochub', 'fab fa-docker', 'fas fa-dollar-sign', 'fas fa-dolly', 'fas fa-dolly-flatbed', 'fas fa-donate', 'fas fa-door-closed', 'fas fa-door-open', 'far fa-dot-circle', 'fas fa-dot-circle', 'fas fa-dove', 'fas fa-download', 'fab fa-draft2digital', 'fas fa-drafting-compass', 'fas fa-draw-polygon', 'fab fa-dribbble', 'fab fa-dribbble-square', 'fab fa-dropbox', 'fas fa-drum', 'fas fa-drum-steelpan', 'fab fa-drupal', 'fas fa-dumbbell', 'fab fa-dyalog', 'fab fa-earlybirds', 'fab fa-ebay', 'fab fa-edge', 'far fa-edit', 'fas fa-edit', 'fas fa-eject', 'fab fa-elementor', 'fas fa-ellipsis-h', 'fas fa-ellipsis-v', 'fab fa-ello', 'fab fa-ember', 'fab fa-empire', 'far fa-envelope', 'fas fa-envelope', 'far fa-envelope-open', 'fas fa-envelope-open', 'fas fa-envelope-open-text', 'fas fa-envelope-square', 'fab fa-envira', 'fas fa-equals', 'fas fa-eraser', 'fab fa-erlang', 'fab fa-ethereum', 'fab fa-etsy', 'fas fa-euro-sign', 'fas fa-exchange-alt', 'fas fa-exclamation', 'fas fa-exclamation-circle', 'fas fa-exclamation-triangle', 'fas fa-expand', 'fas fa-expand-arrows-alt', 'fab fa-expeditedssl', 'fas fa-external-link-alt', 'fas fa-external-link-square-alt', 'far fa-eye', 'fas fa-eye', 'fas fa-eye-dropper', 'far fa-eye-slash', 'fas fa-eye-slash', 'fab fa-facebook', 'fab fa-facebook-f', 'fab fa-facebook-messenger', 'fab fa-facebook-square', 'fas fa-fast-backward', 'fas fa-fast-forward', 'fas fa-fax', 'fas fa-feather', 'fas fa-feather-alt', 'fas fa-female', 'fas fa-fighter-jet', 'far fa-file', 'fas fa-file', 'far fa-file-alt', 'fas fa-file-alt', 'far fa-file-archive', 'fas fa-file-archive', 'far fa-file-audio', 'fas fa-file-audio', 'far fa-file-code', 'fas fa-file-code', 'fas fa-file-contract', 'fas fa-file-download', 'far fa-file-excel', 'fas fa-file-excel', 'fas fa-file-export', 'far fa-file-image', 'fas fa-file-image', 'fas fa-file-import', 'fas fa-file-invoice', 'fas fa-file-invoice-dollar', 'fas fa-file-medical', 'fas fa-file-medical-alt', 'far fa-file-pdf', 'fas fa-file-pdf', 'far fa-file-powerpoint', 'fas fa-file-powerpoint', 'fas fa-file-prescription', 'fas fa-file-signature', 'fas fa-file-upload', 'far fa-file-video', 'fas fa-file-video', 'far fa-file-word', 'fas fa-file-word', 'fas fa-fill', 'fas fa-fill-drip', 'fas fa-film', 'fas fa-filter', 'fas fa-fingerprint', 'fas fa-fire', 'fas fa-fire-extinguisher', 'fab fa-firefox', 'fas fa-first-aid', 'fab fa-first-order', 'fab fa-first-order-alt', 'fab fa-firstdraft', 'fas fa-fish', 'far fa-flag', 'fas fa-flag', 'fas fa-flag-checkered', 'fas fa-flask', 'fab fa-flickr', 'fab fa-flipboard', 'far fa-flushed', 'fas fa-flushed', 'fab fa-fly', 'far fa-folder', 'fas fa-folder', 'fas fa-folder-minus', 'far fa-folder-open', 'fas fa-folder-open', 'fas fa-folder-plus', 'fas fa-font', 'fab fa-font-awesome', 'fab fa-font-awesome-alt', 'fab fa-font-awesome-flag', 'fab fa-font-awesome-logo-full', 'far fa-font-awesome-logo-full', 'fas fa-font-awesome-logo-full', 'fab fa-fonticons', 'fab fa-fonticons-fi', 'fas fa-football-ball', 'fab fa-fort-awesome', 'fab fa-fort-awesome-alt', 'fab fa-forumbee', 'fas fa-forward', 'fab fa-foursquare', 'fab fa-free-code-camp', 'fab fa-freebsd', 'fas fa-frog', 'far fa-frown', 'fas fa-frown', 'far fa-frown-open', 'fas fa-frown-open', 'fab fa-fulcrum', 'fas fa-funnel-dollar', 'far fa-futbol', 'fas fa-futbol', 'fab fa-galactic-republic', 'fab fa-galactic-senate', 'fas fa-gamepad', 'fas fa-gas-pump', 'fas fa-gavel', 'far fa-gem', 'fas fa-gem', 'fas fa-genderless', 'fab fa-get-pocket', 'fab fa-gg', 'fab fa-gg-circle', 'fas fa-gift', 'fab fa-git', 'fab fa-git-square', 'fab fa-github', 'fab fa-github-alt', 'fab fa-github-square', 'fab fa-gitkraken', 'fab fa-gitlab', 'fab fa-gitter', 'fas fa-glass-martini', 'fas fa-glass-martini-alt', 'fas fa-glasses', 'fab fa-glide', 'fab fa-glide-g', 'fas fa-globe', 'fas fa-globe-africa', 'fas fa-globe-americas', 'fas fa-globe-asia', 'fab fa-gofore', 'fas fa-golf-ball', 'fab fa-goodreads', 'fab fa-goodreads-g', 'fab fa-google', 'fab fa-google-drive', 'fab fa-google-play', 'fab fa-google-plus', 'fab fa-google-plus-g', 'fab fa-google-plus-square', 'fab fa-google-wallet', 'fas fa-gopuram', 'fas fa-graduation-cap', 'fab fa-gratipay', 'fab fa-grav', 'fas fa-greater-than', 'fas fa-greater-than-equal', 'far fa-grimace', 'fas fa-grimace', 'far fa-grin', 'fas fa-grin', 'far fa-grin-alt', 'fas fa-grin-alt', 'far fa-grin-beam', 'fas fa-grin-beam', 'far fa-grin-beam-sweat', 'fas fa-grin-beam-sweat', 'far fa-grin-hearts', 'fas fa-grin-hearts', 'far fa-grin-squint', 'fas fa-grin-squint', 'far fa-grin-squint-tears', 'fas fa-grin-squint-tears', 'far fa-grin-stars', 'fas fa-grin-stars', 'far fa-grin-tears', 'fas fa-grin-tears', 'far fa-grin-tongue', 'fas fa-grin-tongue', 'far fa-grin-tongue-squint', 'fas fa-grin-tongue-squint', 'far fa-grin-tongue-wink', 'fas fa-grin-tongue-wink', 'far fa-grin-wink', 'fas fa-grin-wink', 'fas fa-grip-horizontal', 'fas fa-grip-vertical', 'fab fa-gripfire', 'fab fa-grunt', 'fab fa-gulp', 'fas fa-h-square', 'fab fa-hacker-news', 'fab fa-hacker-news-square', 'fab fa-hackerrank', 'fas fa-hamsa', 'fas fa-hand-holding', 'fas fa-hand-holding-heart', 'fas fa-hand-holding-usd', 'far fa-hand-lizard', 'fas fa-hand-lizard', 'far fa-hand-paper', 'fas fa-hand-paper', 'far fa-hand-peace', 'fas fa-hand-peace', 'far fa-hand-point-down', 'fas fa-hand-point-down', 'far fa-hand-point-left', 'fas fa-hand-point-left', 'far fa-hand-point-right', 'fas fa-hand-point-right', 'far fa-hand-point-up', 'fas fa-hand-point-up', 'far fa-hand-pointer', 'fas fa-hand-pointer', 'far fa-hand-rock', 'fas fa-hand-rock', 'far fa-hand-scissors', 'fas fa-hand-scissors', 'far fa-hand-spock', 'fas fa-hand-spock', 'fas fa-hands', 'fas fa-hands-helping', 'far fa-handshake', 'fas fa-handshake', 'fas fa-hashtag', 'fas fa-haykal', 'far fa-hdd', 'fas fa-hdd', 'fas fa-heading', 'fas fa-headphones', 'fas fa-headphones-alt', 'fas fa-headset', 'far fa-heart', 'fas fa-heart', 'fas fa-heartbeat', 'fas fa-helicopter', 'fas fa-highlighter', 'fab fa-hips', 'fab fa-hire-a-helper', 'fas fa-history', 'fas fa-hockey-puck', 'fas fa-home', 'fab fa-hooli', 'fab fa-hornbill', 'far fa-hospital', 'fas fa-hospital', 'fas fa-hospital-alt', 'fas fa-hospital-symbol', 'fas fa-hot-tub', 'fas fa-hotel', 'fab fa-hotjar', 'far fa-hourglass', 'fas fa-hourglass', 'fas fa-hourglass-end', 'fas fa-hourglass-half', 'fas fa-hourglass-start', 'fab fa-houzz', 'fab fa-html5', 'fab fa-hubspot', 'fas fa-i-cursor', 'far fa-id-badge', 'fas fa-id-badge', 'far fa-id-card', 'fas fa-id-card', 'fas fa-id-card-alt', 'far fa-image', 'fas fa-image', 'far fa-images', 'fas fa-images', 'fab fa-imdb', 'fas fa-inbox', 'fas fa-indent', 'fas fa-industry', 'fas fa-infinity', 'fas fa-info', 'fas fa-info-circle', 'fab fa-instagram', 'fab fa-internet-explorer', 'fab fa-ioxhost', 'fas fa-italic', 'fab fa-itunes', 'fab fa-itunes-note', 'fab fa-java', 'fas fa-jedi', 'fab fa-jedi-order', 'fab fa-jenkins', 'fab fa-joget', 'fas fa-joint', 'fab fa-joomla', 'fas fa-journal-whills', 'fab fa-js', 'fab fa-js-square', 'fab fa-jsfiddle', 'fas fa-kaaba', 'fab fa-kaggle', 'fas fa-key', 'fab fa-keybase', 'far fa-keyboard', 'fas fa-keyboard', 'fab fa-keycdn', 'fas fa-khanda', 'fab fa-kickstarter', 'fab fa-kickstarter-k', 'far fa-kiss', 'fas fa-kiss', 'far fa-kiss-beam', 'fas fa-kiss-beam', 'far fa-kiss-wink-heart', 'fas fa-kiss-wink-heart', 'fas fa-kiwi-bird', 'fab fa-korvue', 'fas fa-landmark', 'fas fa-language', 'fas fa-laptop', 'fas fa-laptop-code', 'fab fa-laravel', 'fab fa-lastfm', 'fab fa-lastfm-square', 'far fa-laugh', 'fas fa-laugh', 'far fa-laugh-beam', 'fas fa-laugh-beam', 'far fa-laugh-squint', 'fas fa-laugh-squint', 'far fa-laugh-wink', 'fas fa-laugh-wink', 'fas fa-layer-group', 'fas fa-leaf', 'fab fa-leanpub', 'far fa-lemon', 'fas fa-lemon', 'fab fa-less', 'fas fa-less-than', 'fas fa-less-than-equal', 'fas fa-level-down-alt', 'fas fa-level-up-alt', 'far fa-life-ring', 'fas fa-life-ring', 'far fa-lightbulb', 'fas fa-lightbulb', 'fab fa-line', 'fas fa-link', 'fab fa-linkedin', 'fab fa-linkedin-in', 'fab fa-linode', 'fab fa-linux', 'fas fa-lira-sign', 'fas fa-list', 'far fa-list-alt', 'fas fa-list-alt', 'fas fa-list-ol', 'fas fa-list-ul', 'fas fa-location-arrow', 'fas fa-lock', 'fas fa-lock-open', 'fas fa-long-arrow-alt-down', 'fas fa-long-arrow-alt-left', 'fas fa-long-arrow-alt-right', 'fas fa-long-arrow-alt-up', 'fas fa-low-vision', 'fas fa-luggage-cart', 'fab fa-lyft', 'fab fa-magento', 'fas fa-magic', 'fas fa-magnet', 'fas fa-mail-bulk', 'fab fa-mailchimp', 'fas fa-male', 'fab fa-mandalorian', 'far fa-map', 'fas fa-map', 'fas fa-map-marked', 'fas fa-map-marked-alt', 'fas fa-map-marker', 'fas fa-map-marker-alt', 'fas fa-map-pin', 'fas fa-map-signs', 'fab fa-markdown', 'fas fa-marker', 'fas fa-mars', 'fas fa-mars-double', 'fas fa-mars-stroke', 'fas fa-mars-stroke-h', 'fas fa-mars-stroke-v', 'fab fa-mastodon', 'fab fa-maxcdn', 'fas fa-medal', 'fab fa-medapps', 'fab fa-medium', 'fab fa-medium-m', 'fas fa-medkit', 'fab fa-medrt', 'fab fa-meetup', 'fab fa-megaport', 'far fa-meh', 'fas fa-meh', 'far fa-meh-blank', 'fas fa-meh-blank', 'far fa-meh-rolling-eyes', 'fas fa-meh-rolling-eyes', 'fas fa-memory', 'fas fa-menorah', 'fas fa-mercury', 'fas fa-microchip', 'fas fa-microphone', 'fas fa-microphone-alt', 'fas fa-microphone-alt-slash', 'fas fa-microphone-slash', 'fas fa-microscope', 'fab fa-microsoft', 'fas fa-minus', 'fas fa-minus-circle', 'far fa-minus-square', 'fas fa-minus-square', 'fab fa-mix', 'fab fa-mixcloud', 'fab fa-mizuni', 'fas fa-mobile', 'fas fa-mobile-alt', 'fab fa-modx', 'fab fa-monero', 'fas fa-money-bill', 'far fa-money-bill-alt', 'fas fa-money-bill-alt', 'fas fa-money-bill-wave', 'fas fa-money-bill-wave-alt', 'fas fa-money-check', 'fas fa-money-check-alt', 'fas fa-monument', 'far fa-moon', 'fas fa-moon', 'fas fa-mortar-pestle', 'fas fa-mosque', 'fas fa-motorcycle', 'fas fa-mouse-pointer', 'fas fa-music', 'fab fa-napster', 'fab fa-neos', 'fas fa-neuter', 'far fa-newspaper', 'fas fa-newspaper', 'fab fa-nimblr', 'fab fa-nintendo-switch', 'fab fa-node', 'fab fa-node-js', 'fas fa-not-equal', 'fas fa-notes-medical', 'fab fa-npm', 'fab fa-ns8', 'fab fa-nutritionix', 'far fa-object-group', 'fas fa-object-group', 'far fa-object-ungroup', 'fas fa-object-ungroup', 'fab fa-odnoklassniki', 'fab fa-odnoklassniki-square', 'fas fa-oil-can', 'fab fa-old-republic', 'fas fa-om', 'fab fa-opencart', 'fab fa-openid', 'fab fa-opera', 'fab fa-optin-monster', 'fab fa-osi', 'fas fa-outdent', 'fab fa-page4', 'fab fa-pagelines', 'fas fa-paint-brush', 'fas fa-paint-roller', 'fas fa-palette', 'fab fa-palfed', 'fas fa-pallet', 'far fa-paper-plane', 'fas fa-paper-plane', 'fas fa-paperclip', 'fas fa-parachute-box', 'fas fa-paragraph', 'fas fa-parking', 'fas fa-passport', 'fas fa-pastafarianism', 'fas fa-paste', 'fab fa-patreon', 'fas fa-pause', 'far fa-pause-circle', 'fas fa-pause-circle', 'fas fa-paw', 'fab fa-paypal', 'fas fa-peace', 'fas fa-pen', 'fas fa-pen-alt', 'fas fa-pen-fancy', 'fas fa-pen-nib', 'fas fa-pen-square', 'fas fa-pencil-alt', 'fas fa-pencil-ruler', 'fas fa-people-carry', 'fas fa-percent', 'fas fa-percentage', 'fab fa-periscope', 'fab fa-phabricator', 'fab fa-phoenix-framework', 'fab fa-phoenix-squadron', 'fas fa-phone', 'fas fa-phone-slash', 'fas fa-phone-square', 'fas fa-phone-volume', 'fab fa-php', 'fab fa-pied-piper', 'fab fa-pied-piper-alt', 'fab fa-pied-piper-hat', 'fab fa-pied-piper-pp', 'fas fa-piggy-bank', 'fas fa-pills', 'fab fa-pinterest', 'fab fa-pinterest-p', 'fab fa-pinterest-square', 'fas fa-place-of-worship', 'fas fa-plane', 'fas fa-plane-arrival', 'fas fa-plane-departure', 'fas fa-play', 'far fa-play-circle', 'fas fa-play-circle', 'fab fa-playstation', 'fas fa-plug', 'fas fa-plus', 'fas fa-plus-circle', 'far fa-plus-square', 'fas fa-plus-square', 'fas fa-podcast', 'fas fa-poll', 'fas fa-poll-h', 'fas fa-poo', 'fas fa-poop', 'fas fa-portrait', 'fas fa-pound-sign', 'fas fa-power-off', 'fas fa-pray', 'fas fa-praying-hands', 'fas fa-prescription', 'fas fa-prescription-bottle', 'fas fa-prescription-bottle-alt', 'fas fa-print', 'fas fa-procedures', 'fab fa-product-hunt', 'fas fa-project-diagram', 'fab fa-pushed', 'fas fa-puzzle-piece', 'fab fa-python', 'fab fa-qq', 'fas fa-qrcode', 'fas fa-question', 'far fa-question-circle', 'fas fa-question-circle', 'fas fa-quidditch', 'fab fa-quinscape', 'fab fa-quora', 'fas fa-quote-left', 'fas fa-quote-right', 'fas fa-quran', 'fab fa-r-project', 'fas fa-random', 'fab fa-ravelry', 'fab fa-react', 'fab fa-readme', 'fab fa-rebel', 'fas fa-receipt', 'fas fa-recycle', 'fab fa-red-river', 'fab fa-reddit', 'fab fa-reddit-alien', 'fab fa-reddit-square', 'fas fa-redo', 'fas fa-redo-alt', 'far fa-registered', 'fas fa-registered', 'fab fa-rendact', 'fab fa-renren', 'fas fa-reply', 'fas fa-reply-all', 'fab fa-replyd', 'fab fa-researchgate', 'fab fa-resolving', 'fas fa-retweet', 'fab fa-rev', 'fas fa-ribbon', 'fas fa-road', 'fas fa-robot', 'fas fa-rocket', 'fab fa-rocketchat', 'fab fa-rockrms', 'fas fa-route', 'fas fa-rss', 'fas fa-rss-square', 'fas fa-ruble-sign', 'fas fa-ruler', 'fas fa-ruler-combined', 'fas fa-ruler-horizontal', 'fas fa-ruler-vertical', 'fas fa-rupee-sign', 'far fa-sad-cry', 'fas fa-sad-cry', 'far fa-sad-tear', 'fas fa-sad-tear', 'fab fa-safari', 'fab fa-sass', 'far fa-save', 'fas fa-save', 'fab fa-schlix', 'fas fa-school', 'fas fa-screwdriver', 'fab fa-scribd', 'fas fa-search', 'fas fa-search-dollar', 'fas fa-search-location', 'fas fa-search-minus', 'fas fa-search-plus', 'fab fa-searchengin', 'fas fa-seedling', 'fab fa-sellcast', 'fab fa-sellsy', 'fas fa-server', 'fab fa-servicestack', 'fas fa-shapes', 'fas fa-share', 'fas fa-share-alt', 'fas fa-share-alt-square', 'far fa-share-square', 'fas fa-share-square', 'fas fa-shekel-sign', 'fas fa-shield-alt', 'fas fa-ship', 'fas fa-shipping-fast', 'fab fa-shirtsinbulk', 'fas fa-shoe-prints', 'fas fa-shopping-bag', 'fas fa-shopping-basket', 'fas fa-shopping-cart', 'fab fa-shopware', 'fas fa-shower', 'fas fa-shuttle-van', 'fas fa-sign', 'fas fa-sign-in-alt', 'fas fa-sign-language', 'fas fa-sign-out-alt', 'fas fa-signal', 'fas fa-signature', 'fab fa-simplybuilt', 'fab fa-sistrix', 'fas fa-sitemap', 'fab fa-sith', 'fas fa-skull', 'fab fa-skyatlas', 'fab fa-skype', 'fab fa-slack', 'fab fa-slack-hash', 'fas fa-sliders-h', 'fab fa-slideshare', 'far fa-smile', 'fas fa-smile', 'far fa-smile-beam', 'fas fa-smile-beam', 'far fa-smile-wink', 'fas fa-smile-wink', 'fas fa-smoking', 'fas fa-smoking-ban', 'fab fa-snapchat', 'fab fa-snapchat-ghost', 'fab fa-snapchat-square', 'far fa-snowflake', 'fas fa-snowflake', 'fas fa-socks', 'fas fa-solar-panel', 'fas fa-sort', 'fas fa-sort-alpha-down', 'fas fa-sort-alpha-up', 'fas fa-sort-amount-down', 'fas fa-sort-amount-up', 'fas fa-sort-down', 'fas fa-sort-numeric-down', 'fas fa-sort-numeric-up', 'fas fa-sort-up', 'fab fa-soundcloud', 'fas fa-spa', 'fas fa-space-shuttle', 'fab fa-speakap', 'fas fa-spinner', 'fas fa-splotch', 'fab fa-spotify', 'fas fa-spray-can', 'far fa-square', 'fas fa-square', 'fas fa-square-full', 'fas fa-square-root-alt', 'fab fa-squarespace', 'fab fa-stack-exchange', 'fab fa-stack-overflow', 'fas fa-stamp', 'far fa-star', 'fas fa-star', 'fas fa-star-and-crescent', 'far fa-star-half', 'fas fa-star-half', 'fas fa-star-half-alt', 'fas fa-star-of-david', 'fas fa-star-of-life', 'fab fa-staylinked', 'fab fa-steam', 'fab fa-steam-square', 'fab fa-steam-symbol', 'fas fa-step-backward', 'fas fa-step-forward', 'fas fa-stethoscope', 'fab fa-sticker-mule', 'far fa-sticky-note', 'fas fa-sticky-note', 'fas fa-stop', 'far fa-stop-circle', 'fas fa-stop-circle', 'fas fa-stopwatch', 'fas fa-store', 'fas fa-store-alt', 'fab fa-strava', 'fas fa-stream', 'fas fa-street-view', 'fas fa-strikethrough', 'fab fa-stripe', 'fab fa-stripe-s', 'fas fa-stroopwafel', 'fab fa-studiovinari', 'fab fa-stumbleupon', 'fab fa-stumbleupon-circle', 'fas fa-subscript', 'fas fa-subway', 'fas fa-suitcase', 'fas fa-suitcase-rolling', 'far fa-sun', 'fas fa-sun', 'fab fa-superpowers', 'fas fa-superscript', 'fab fa-supple', 'far fa-surprise', 'fas fa-surprise', 'fas fa-swatchbook', 'fas fa-swimmer', 'fas fa-swimming-pool', 'fas fa-synagogue', 'fas fa-sync', 'fas fa-sync-alt', 'fas fa-syringe', 'fas fa-table', 'fas fa-table-tennis', 'fas fa-tablet', 'fas fa-tablet-alt', 'fas fa-tablets', 'fas fa-tachometer-alt', 'fas fa-tag', 'fas fa-tags', 'fas fa-tape', 'fas fa-tasks', 'fas fa-taxi', 'fab fa-teamspeak', 'fas fa-teeth', 'fas fa-teeth-open', 'fab fa-telegram', 'fab fa-telegram-plane', 'fab fa-tencent-weibo', 'fas fa-terminal', 'fas fa-text-height', 'fas fa-text-width', 'fas fa-th', 'fas fa-th-large', 'fas fa-th-list', 'fab fa-the-red-yeti', 'fas fa-theater-masks', 'fab fa-themeco', 'fab fa-themeisle', 'fas fa-thermometer', 'fas fa-thermometer-empty', 'fas fa-thermometer-full', 'fas fa-thermometer-half', 'fas fa-thermometer-quarter', 'fas fa-thermometer-three-quarters', 'far fa-thumbs-down', 'fas fa-thumbs-down', 'far fa-thumbs-up', 'fas fa-thumbs-up', 'fas fa-thumbtack', 'fas fa-ticket-alt', 'fas fa-times', 'far fa-times-circle', 'fas fa-times-circle', 'fas fa-tint', 'fas fa-tint-slash', 'far fa-tired', 'fas fa-tired', 'fas fa-toggle-off', 'fas fa-toggle-on', 'fas fa-toolbox', 'fas fa-tooth', 'fas fa-torah', 'fas fa-torii-gate', 'fab fa-trade-federation', 'fas fa-trademark', 'fas fa-traffic-light', 'fas fa-train', 'fas fa-transgender', 'fas fa-transgender-alt', 'fas fa-trash', 'far fa-trash-alt', 'fas fa-trash-alt', 'fas fa-tree', 'fab fa-trello', 'fab fa-tripadvisor', 'fas fa-trophy', 'fas fa-truck', 'fas fa-truck-loading', 'fas fa-truck-monster', 'fas fa-truck-moving', 'fas fa-truck-pickup', 'fas fa-tshirt', 'fas fa-tty', 'fab fa-tumblr', 'fab fa-tumblr-square', 'fas fa-tv', 'fab fa-twitch', 'fab fa-twitter', 'fab fa-twitter-square', 'fab fa-typo3', 'fab fa-uber', 'fab fa-uikit', 'fas fa-umbrella', 'fas fa-umbrella-beach', 'fas fa-underline', 'fas fa-undo', 'fas fa-undo-alt', 'fab fa-uniregistry', 'fas fa-universal-access', 'fas fa-university', 'fas fa-unlink', 'fas fa-unlock', 'fas fa-unlock-alt', 'fab fa-untappd', 'fas fa-upload', 'fab fa-usb', 'far fa-user', 'fas fa-user', 'fas fa-user-alt', 'fas fa-user-alt-slash', 'fas fa-user-astronaut', 'fas fa-user-check', 'far fa-user-circle', 'fas fa-user-circle', 'fas fa-user-clock', 'fas fa-user-cog', 'fas fa-user-edit', 'fas fa-user-friends', 'fas fa-user-graduate', 'fas fa-user-lock', 'fas fa-user-md', 'fas fa-user-minus', 'fas fa-user-ninja', 'fas fa-user-plus', 'fas fa-user-secret', 'fas fa-user-shield', 'fas fa-user-slash', 'fas fa-user-tag', 'fas fa-user-tie', 'fas fa-user-times', 'fas fa-users', 'fas fa-users-cog', 'fab fa-ussunnah', 'fas fa-utensil-spoon', 'fas fa-utensils', 'fab fa-vaadin', 'fas fa-vector-square', 'fas fa-venus', 'fas fa-venus-double', 'fas fa-venus-mars', 'fab fa-viacoin', 'fab fa-viadeo', 'fab fa-viadeo-square', 'fas fa-vial', 'fas fa-vials', 'fab fa-viber', 'fas fa-video', 'fas fa-video-slash', 'fas fa-vihara', 'fab fa-vimeo', 'fab fa-vimeo-square', 'fab fa-vimeo-v', 'fab fa-vine', 'fab fa-vk', 'fab fa-vnv', 'fas fa-volleyball-ball', 'fas fa-volume-down', 'fas fa-volume-off', 'fas fa-volume-up', 'fab fa-vuejs', 'fas fa-walking', 'fas fa-wallet', 'fas fa-warehouse', 'fab fa-weebly', 'fab fa-weibo', 'fas fa-weight', 'fas fa-weight-hanging', 'fab fa-weixin', 'fab fa-whatsapp', 'fab fa-whatsapp-square', 'fas fa-wheelchair', 'fab fa-whmcs', 'fas fa-wifi', 'fab fa-wikipedia-w', 'far fa-window-close', 'fas fa-window-close', 'far fa-window-maximize', 'fas fa-window-maximize', 'far fa-window-minimize', 'fas fa-window-minimize', 'far fa-window-restore', 'fas fa-window-restore', 'fab fa-windows', 'fas fa-wine-glass', 'fas fa-wine-glass-alt', 'fab fa-wix', 'fab fa-wolf-pack-battalion', 'fas fa-won-sign', 'fab fa-wordpress', 'fab fa-wordpress-simple', 'fab fa-wpbeginner', 'fab fa-wpexplorer', 'fab fa-wpforms', 'fas fa-wrench', 'fas fa-x-ray', 'fab fa-xbox', 'fab fa-xing', 'fab fa-xing-square', 'fab fa-y-combinator', 'fab fa-yahoo', 'fab fa-yandex', 'fab fa-yandex-international', 'fab fa-yelp', 'fas fa-yen-sign', 'fas fa-yin-yang', 'fab fa-yoast', 'fab fa-youtube', 'fab fa-youtube-square', 'fab fa-zhihu'];
};

/***/ }),

/***/ "./src/blocks/repeater/index.js":
/*!**************************************!*\
  !*** ./src/blocks/repeater/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _js_assets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../js/assets */ "./src/blocks/js/assets.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Custom Gutenberg Block for Buttons
 */





var Repeater = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Repeater, _React$Component);

  var _super = _createSuper(Repeater);

  function Repeater(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Repeater);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.onAdd = _this.onAdd.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.ButtonList = _this.ButtonList.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.onRemove = _this.onRemove.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Repeater, [{
    key: "onChange",
    value: function onChange(e, value) {
      var btns = JSON.parse(this.props.value);
      var btn_attr;

      if (typeof e == 'string') {
        btn_attr = e;
      } else {
        btn_attr = e.target.getAttribute('name');
      }

      var vals = btn_attr.replace('buttons', '').slice(1, -1).split('][');
      var attr = vals[0];
      var cur_index = vals[1];

      if (attr == 'linktarget' || attr == 'linkrel') {
        btns[cur_index][attr] = e.target.checked;
      } else if (attr == 'icon') {
        btns[cur_index][attr] = value;
      } else {
        btns[cur_index][attr] = e.target.value;
      }

      this.props.onChange(JSON.stringify(btns));
    }
  }, {
    key: "ButtonList",
    value: function ButtonList(buttons) {
      var that = this;
      var btns = JSON.parse(buttons); //include add item on click

      var output = [];
      btns.forEach(function (btn, index) {
        output.push(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          class: "btn-each"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          class: "btn-head"
        }, btn.text, " ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
          class: "remove-item",
          onClick: that.onRemove
        }, "\xD7")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          class: "btn-body not-active"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
          class: "block_input_label"
        }, "Text"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
          type: "text",
          name: "buttons[text][".concat(index, "]"),
          value: btn.text,
          onChange: that.onChange
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
          class: "block_input_label"
        }, "Icon", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_9___default.a, {
          icons: Object(_js_assets__WEBPACK_IMPORTED_MODULE_10__["Icons"])(),
          value: btn.icon,
          onChange: function onChange(val) {
            return that.onChange("buttons[icon][".concat(index, "]"), val);
          },
          isMulti: false,
          appendTo: "body"
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          class: "add-linkto"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", {
          class: "block_input_label"
        }, "Link"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          class: "input_inline"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
          type: "text",
          name: "buttons[link][".concat(index, "]"),
          value: btn.link,
          onChange: that.onChange,
          placeholder: "https://your-link.com"
        }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Dashicon"], {
          className: "span_icon",
          icon: "admin-generic"
        })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
          class: "link-attributes"
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
          type: "checkbox",
          name: "buttons[linktarget][".concat(index, "]"),
          checked: btn.linktarget,
          onChange: that.onChange
        }), " Open in new window"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("input", {
          type: "checkbox",
          name: "buttons[linkrel][".concat(index, "]"),
          checked: btn.linkrel,
          onChange: that.onChange
        }), " Add nofollow"))))));
      });
      return output;
    }
  }, {
    key: "onAdd",
    value: function onAdd() {
      var btns = JSON.parse(this.props.value);
      btns.push({
        'text': 'Button',
        'icon': '',
        'link': '#',
        'linktarget': '',
        'linkrel': ''
      });
      this.props.onChange(JSON.stringify(btns));
    }
  }, {
    key: "onRemove",
    value: function onRemove(e) {
      var btns = JSON.parse(this.props.value);
      var parent = e.target.parentNode;
      var cur_index = Array.from(parent.parentNode.children).indexOf(parent);
      var new_btns = [];
      btns.forEach(function (btn, index) {
        if (index != cur_index) {
          new_btns.push({
            'text': btn.text,
            'icon': btn.icon,
            'link': btn.link,
            'linktarget': btn.linktarget,
            'linkrel': btn.linkrel
          });
        }
      });
      this.props.onChange(JSON.stringify(new_btns));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", null, this.ButtonList(this.props.value), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        class: "add-item"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("span", {
        onClick: this.onAdd
      }, "+ ADD ITEM")));
    }
  }]);

  return Repeater;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Repeater);

/***/ }),

/***/ "./src/blocks/selectize-multiple/index.js":
/*!************************************************!*\
  !*** ./src/blocks/selectize-multiple/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Custom Gutenberg Block With Jquery js plugin
 */



var SelectizeMultiple = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SelectizeMultiple, _React$Component);

  var _super = _createSuper(SelectizeMultiple);

  function SelectizeMultiple(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SelectizeMultiple);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SelectizeMultiple, [{
    key: "onChange",
    value: function onChange(e) {
      this.props.onChange(e.target.value);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroy();
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      this.destroy();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.create();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.create();
    }
  }, {
    key: "create",
    value: function create() {
      var self = this;
      var options = {
        items: self.props.value,
        plugins: ['remove_button'],
        mode: 'multi',
        hideSelected: false,
        duplicates: true
      };
      this.selectize = jQuery(this.refs.repeatselect).find('select').selectize(options)[0].selectize;
      this.selectize.on('change', function () {
        var value = self.selectize.getValue();
        self.props.onChange(value);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (typeof this.selectize != 'undefined') {
        this.selectize.destroy();
        this.selectize._events = {
          change: []
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["BaseControl"], {
        ref: "repeatselect"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        ref: "repeatselect"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
        multiple: true,
        value: this.props.value,
        options: this.props.options,
        onChange: this.onChange
      })));
    }
  }]);

  return SelectizeMultiple;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SelectizeMultiple);

/***/ }),

/***/ "./src/blocks/selectize/index.js":
/*!***************************************!*\
  !*** ./src/blocks/selectize/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Custom Gutenberg Block With Jquery js plugin
 */



var Selectize = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Selectize, _React$Component);

  var _super = _createSuper(Selectize);

  function Selectize(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Selectize);

    _this = _super.call(this, props);
    _this.onChange = _this.onChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Selectize, [{
    key: "onChange",
    value: function onChange(e) {
      this.props.onChange(e.target.value);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroy();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.destroy();
      this.create();
    }
  }, {
    key: "create",
    value: function create() {
      var self = this;
      this.selectize = jQuery(this.refs.repeatselect).find('select').selectize({
        highlight: false
      })[0].selectize;
      this.selectize.on('change', function () {
        var value = self.selectize.getValue();

        if (value != '') {
          delete this._previousValue;
        }

        self.props.onChange(value);
      });
      this.selectize.on('dropdown_open', function () {
        var value = self.selectize.getValue();

        if (value != '') {
          this._previousValue = value;
        } //this.clear(true);


        this.positionDropdown();
      });
      this.selectize.on('dropdown_close', function () {
        if (this.getValue() == '' && this.lastQuery == '') {
          if (this._previousValue && this._previousValue != '') {
            this.setValue(this._previousValue, true);
          }
        }
      });

      this.selectize.onBlur = function () {
        if (this._previousValue && this._previousValue != '') {
          this.setValue(this._previousValue, true);
        }
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (typeof this.selectize != 'undefined') {
        this.selectize.destroy();
        this.selectize._events = {
          change: []
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["BaseControl"], {
        ref: "repeatselect"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        ref: "repeatselect"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["SelectControl"], {
        value: this.props.value,
        options: this.props.options,
        onChange: this.onChange
      })));
    }
  }]);

  return Selectize;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Selectize);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_emage_hover_effects_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/emage-hover-effects-block.js */ "./src/blocks/emage-hover-effects-block.js");


/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),

/***/ "react-dom":
/*!************************************!*\
  !*** external {"this":"ReactDOM"} ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map