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

/***/ "./components/MapContainer.js":
/*!************************************!*\
  !*** ./components/MapContainer.js ***!
  \************************************/
/*! exports provided: MapContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return MapContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "google-maps-react");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Austin\\web-apps\\new-barber-shop\\components\\MapContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const mapStyles = {
  width: '100%',
  height: '100%'
};
class MapContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Map"], {
      google: this.props.google,
      zoom: 14,
      style: mapStyles,
      initialCenter: {
        lat: 42.642907,
        lng: -73.60840
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      name: "Bill's Barber Shop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: 'AIzaSyADSna2_hZJLFY9Zxy5_40Gqcg8u-yF_wY'
})(MapContainer));

/***/ }),

/***/ "./components/Testimonials.js":
/*!************************************!*\
  !*** ./components/Testimonials.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Carousel */ "react-bootstrap/Carousel");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Jumbotron */ "react-bootstrap/Jumbotron");
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Austin\\web-apps\\new-barber-shop\\components\\Testimonials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Testimonials extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const {
      index,
      direction
    } = this.state;
    return __jsx("div", {
      className: "col-12 col-md-8 mx-auto mt-5 cms-editable",
      id: "testimonials",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
      activeIndex: index,
      direction: direction,
      onSelect: this.handleSelect,
      className: "my-auto bg-dark my-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "\u201CBest local barbershop. Its always busy on the weekends, but I always get a clean and sharp haircut. If you visit during the week, there's typically no wait. This place is a one man show, and Bill always does a damn good job\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Timothy Guarino"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "\u201CGreat place, the man knows what he's doing.  I could never find a good place to get my hair cut since I moved back to NY, problem solved!\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Joe Withkowski"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "\u201CIf you've ever been offended don't come here. If your a man who wants a good hair cut at a real barbershop, this is the place.\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Joel Fennelly"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote mt-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "\u201CBill is a great source of entertainment, and he cuts a good haircut\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Rich Maxon"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "\u201CHe cuts it just the way you tell him and he remembers each time you get in the chair.\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Frank Lukovits"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "\u201CDefinitely a guys barber shop. You better have thick skin. The haircut is great\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Sean Doran"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "\u201CThis is where men get their hair cut.\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Matthew Timber"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Testimonials */ "./components/Testimonials.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Carousel */ "react-bootstrap/Carousel");
/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "react-bootstrap/ListGroup");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Image */ "react-bootstrap/Image");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Jumbotron */ "react-bootstrap/Jumbotron");
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_MapContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MapContainer */ "./components/MapContainer.js");

var _jsxFileName = "F:\\Austin\\web-apps\\new-barber-shop\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











class Index extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(props, context) {
    super(props, context);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "buttonStyles", {
      backgroundColor: "#1F9BCF",
      marginBottom: "1rem",
      height: "30px",
      width: "30px",
      borderRadius: "40px"
    });

    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const {
      index,
      direction
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Bill's Barber Shop"), __jsx("meta", {
      name: "description",
      content: "Bill's Barber Shop - Located at 4337 NY-150, West Sand Lake, Ny 12196. The best haircuts around!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx("meta", {
      name: "keywords",
      content: "Barber, Hair, Shave, Men, Women, Unisex, West, Sand, Lake",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx("meta", {
      charset: "utf-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/bootstrap.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "/styles.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), __jsx("link", {
      href: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Karla|Rubik:400,500&display=swap",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    })), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("div", {
      id: "header-main",
      className: "jumbotron jumbotron-fluid my-0 cms-editable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      id: "header-text",
      className: "container text-center text-light mt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("h1", {
      className: "display-3 text-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Bill's Barber Shop")), __jsx("hr", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), __jsx("h2", {
      className: "text-secondary mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Est. 1996"))), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
      bg: "dark",
      variant: "dark",
      expand: "md",
      className: "p-0",
      id: "banner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default.a.Brand, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a.Link, {
      href: "/",
      className: "font-weight-bold header-link py-0 pr-2 pl-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("img", {
      src: "shop-icon.png",
      width: "40",
      className: "mx-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), __jsx("span", {
      style: {
        position: "relative",
        top: "2px"
      },
      className: "font-weight-bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Bill's Barber Shop"))), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default.a.Toggle, {
      "aria-controls": "basic-navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default.a.Collapse, {
      id: "basic-navbar-nav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a, {
      id: "banner1",
      className: "mr-auto",
      fill: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a.Link, {
      href: "#about",
      className: "font-weight-bold header-link px-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "About"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a.Link, {
      href: "#testimonials",
      className: "font-weight-bold header-link px-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Testimonials"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a.Link, {
      href: "#contact",
      className: "font-weight-bold header-link px-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Contact"))))), __jsx("div", {
      id: "about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("div", {
      className: "container mt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("div", {
      id: "payments-list",
      className: "col-12 col-md-4 col-xl-5 ml-auto cms-editable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("h3", {
      className: "mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Payments"), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "flush",
      className: "lead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      className: "text-success pl-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "\u2714\xA0Cash")), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      className: "text-success pl-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "\u2714\xA0Venmo")), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      className: "text-danger pl-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "\u2718 \xA0\xA0Card")))), __jsx("div", {
      id: "hours-list",
      className: "col-12 col-md-5 mr-auto mt-5 mt-md-0 cms-editable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("h3", {
      className: "mb-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Hours"), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "flush",
      className: "text-primary lead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "Monday", __jsx("span", {
      className: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "CLOSED"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Tuesday", __jsx("span", {
      className: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "8:00am - 6:00pm"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "Wednesday", __jsx("span", {
      className: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "8:00am - 6:00pm"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "Thursday", __jsx("span", {
      className: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "8:00am - 6:00pm"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Friday", __jsx("span", {
      className: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "8:00am - 6:00pm"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Saturday", __jsx("span", {
      className: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "8:00am - 12:00pm"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Sunday", __jsx("span", {
      className: "float-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "CLOSED"))))))), __jsx("div", {
      id: "about-the-shop",
      className: "container mt-5 cms-editable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("div", {
      className: "col-12 mx-auto ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("h1", {
      className: "text-center text-primary mt-5 mb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "Since 1996"), __jsx("p", {
      className: "text-center about-shop-p lead mb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Bill's Barber Shop is a classic, American, no-holds-barred barbershop. A variety of services is offered, catering to everyone, with solely the clientele in mind. The Shop stays true to the ways of the classic gentleman's shop, striving to bring the memories back. People still pay for quality - Bill's Barber Shop is where you will get it. I am a barber who loves my craft, providing top-notch service that helps men stay sharp.")))), __jsx("div", {
      id: "about-the-owner",
      className: "container my-5 cms-editable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("div", {
      className: "col-12 col-md-10 mx-md-auto col-lg-5 ml-lg-auto mr-lg-0 mb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_8___default.a, {
      src: "https://i.postimg.cc/d0MQhBTL/insta-photo-1.jpg",
      thumbnail: true,
      className: "mx-auto shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    })), __jsx("div", {
      className: "col-12 col-md-10 mx-md-auto col-lg-5 mr-lg-auto ml-lg-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "flush",
      className: "mx-auto text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "Bill The Barber")), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx("p", {
      className: "btb-card-p lead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, "Bill Rudolph is a father, a husband, a veteran, and an esteemed local business owner. After cutting hair for over 30 years, Bill has secured a steady clientele who appreciate his experience and integrity. Whether you are looking for the newest and sharpest style, or want to remain true to the classic cuts, Bill is your local go-to barber."))))))), __jsx("div", {
      className: "col-12 col-md-8 mx-auto mt-5 cms-editable",
      id: "testimonials",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: "shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default.a, {
      activeIndex: index,
      direction: direction,
      onSelect: this.handleSelect,
      className: "my-auto bg-dark my-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "\u201CBest local barbershop. Its always busy on the weekends, but I always get a clean and sharp haircut. If you visit during the week, there's typically no wait. This place is a one man show, and Bill always does a damn good job\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "Timothy Guarino"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "\u201CGreat place, the man knows what he's doing.  I could never find a good place to get my hair cut since I moved back to NY, problem solved!\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "Joe Withkowski"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, "\u201CIf you've ever been offended don't come here. If your a man who wants a good hair cut at a real barbershop, this is the place.\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, "Joel Fennelly"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote mt-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, "\u201CBill is a great source of entertainment, and he cuts a good haircut\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, "Rich Maxon"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, "\u201CHe cuts it just the way you tell him and he remembers each time you get in the chair.\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, "Frank Lukovits"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, "\u201CDefinitely a guys barber shop. You better have thick skin. The haircut is great\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, "Sean Doran"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605")))), __jsx(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      className: "h-100 w-100",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, __jsx("div", {
      className: "d-block w-100 h-100 bg-light text-dark testimonial-slide shadow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, __jsx("h1", {
      className: "m-2 mt-2 pb-2 border-bottom border-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, "Testimonial"), __jsx("blockquote", {
      className: "blockquote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, __jsx("p", {
      className: "px-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "\u201CThis is where men get their hair cut.\u201D"), __jsx("footer", {
      className: "blockquote-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, "Matthew Timber"), __jsx("span", {
      className: "test-stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, "\u2605\u2605\u2605\u2605\u2605"))))))), __jsx(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_9___default.a, {
      fluid: true,
      className: "container-fluid bg-dark m-0 p-3 pb-5 cms-editable",
      id: "contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, __jsx("h1", {
      className: "display-4 text-center my-0 text-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, "Contact"), __jsx("div", {
      className: "row mt-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, __jsx("div", {
      className: "col-11 col-md-4 mx-auto ml-md-auto mr-5",
      id: "map-div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, __jsx("div", {
      id: "google-map",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, __jsx(_components_MapContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }))), __jsx("div", {
      className: "col-11 col-md-5 mx-auto mt-4 mt-md-0 ml-md-5 mr-md-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, __jsx("div", {
      className: "row mt-2 text-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, __jsx("div", {
      className: "col-6 contact-address",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, __jsx("h6", {
      className: "text-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, "Address"), __jsx("address", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, "4337 NY-150,", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }), "West Sand Lake, NY 12196")), __jsx("div", {
      className: "col-6 contact-phone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, __jsx("h6", {
      className: "text-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, "Phone (text prefered)"), __jsx("address", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, __jsx("a", {
      href: "sms:+15185909013",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, "(518) 590-9013")))), __jsx("hr", {
      className: "my-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }), __jsx("div", {
      className: "row mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, __jsx("div", {
      className: "col-12 text-left text-left text-light",
      id: "footer-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, __jsx("ol", {
      className: " float-left ml-0 pl-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, "At the corner of Route 43 & Route 150, across from Doors of Hope"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, "Parking located in front of shop, as well as across the street"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, "Walk-ins welcomed and encouraged!"), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, "Cash & the Venmo App accepted, no card")))), __jsx("div", {
      className: "row mt-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, __jsx("div", {
      className: "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, __jsx("div", {
      className: "d-flex footer-links mw-100 justify-content-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, __jsx("span", {
      className: "text-info font-weight-bold",
      style: {
        fontSize: "1.2rem"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    }, "See us on social media!"), __jsx("a", {
      href: "https://www.facebook.com/pages/Bills-Barber-Shop/152627261418715",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, __jsx("img", {
      style: {
        marginRight: "10px",
        marginLeft: "10px"
      },
      src: "https://i.postimg.cc/s2KKgG7B/facebook-logo.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    })), __jsx("a", {
      href: "https://www.instagram.com/bills_american_barbershop/",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    }, __jsx("img", {
      style: {
        marginRight: "10px",
        marginLeft: "10px"
      },
      src: "https://i.postimg.cc/1ttBnRrv/insta-logo.png",
      id: "desktop-insta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    })))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Austin\web-apps\new-barber-shop\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "google-maps-react":
/*!************************************!*\
  !*** external "google-maps-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Carousel":
/*!*******************************************!*\
  !*** external "react-bootstrap/Carousel" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Carousel");

/***/ }),

/***/ "react-bootstrap/Image":
/*!****************************************!*\
  !*** external "react-bootstrap/Image" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Image");

/***/ }),

/***/ "react-bootstrap/Jumbotron":
/*!********************************************!*\
  !*** external "react-bootstrap/Jumbotron" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Jumbotron");

/***/ }),

/***/ "react-bootstrap/ListGroup":
/*!********************************************!*\
  !*** external "react-bootstrap/ListGroup" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/ListGroup");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map