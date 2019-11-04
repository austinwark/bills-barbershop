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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Testimonials */ "./components/Testimonials.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/esm/ListGroup.js");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Jumbotron */ "./node_modules/react-bootstrap/esm/Jumbotron.js");
var _jsxFileName = "F:\\Austin\\web-apps\\new-barber-shop\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Index() {
  function myMap() {
    var centerMark = {
      lat: 42.642997,
      lng: -73.608440
    };
    var map = new google.maps.Map(document.getElementById('google-map'), {
      zoom: 15,
      center: centerMark
    });
    var market = new google.maps.Marker({
      position: centerMark,
      map: map
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Bill's Barber Shop"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("meta", {
    charset: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/bootstrap.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/styles.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("script", {
    async: true,
    defer: true,
    src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyADSna2_hZJLFY9Zxy5_40Gqcg8u-yF_wY&callback=myMap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    id: "header-main",
    className: "jumbotron jumbotron-fluid my-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    id: "header-text",
    className: "container text-center text-light mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("h1", {
    className: "display-3 text-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Bill's Barber Shop")), __jsx("hr", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("h2", {
    className: "text-secondary mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Est. 1996"))), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    bg: "dark",
    variant: "dark",
    expand: "md",
    className: "p-0",
    id: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"].Collapse, {
    id: "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "banner1",
    className: "mr-auto",
    fill: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
    href: "#header-main",
    className: "font-weight-bold bg-primary header-link px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Bill's Barber Shop"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
    href: "#about",
    className: "font-weight-bold header-link px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "About"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
    href: "#gallery",
    className: "font-weight-bold header-link px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Gallery"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
    href: "#testimonials",
    className: "font-weight-bold header-link px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Testimonials"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
    href: "#contact",
    className: "font-weight-bold header-link px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Contact"))))), __jsx("div", {
    id: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "container mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: "col-12 col-md-4 col-xl-6 ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("h3", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Payments"), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "flush",
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    className: "text-success pl-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\u2714\xA0Cash")), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    className: "text-success pl-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "\u2714\xA0Venmo")), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    className: "text-danger pl-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u2718 \xA0\xA0Card")))), __jsx("div", {
    className: "col-12 col-md-6 mr-auto mt-5 mt-md-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("h3", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Hours"), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "flush",
    className: "text-primary lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Monday", __jsx("span", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "CLOSED"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Tuesday", __jsx("span", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "8:00am - 6:00pm"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Wednesday", __jsx("span", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "8:00am - 6:00pm"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Thursday", __jsx("span", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "8:00am - 6:00pm"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Friday", __jsx("span", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "8:00am - 6:00pm"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Saturday", __jsx("span", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "8:00am - 12:00pm"))), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    className: "",
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
  }, "Sunday", __jsx("span", {
    className: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "CLOSED"))))))), __jsx("hr", {
    className: "w-75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx("div", {
    className: "container mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("div", {
    className: "col-12 col-md-10 mx-auto linear-gradient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("h1", {
    className: "text-center text-primary mt-5 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Since 1996"), __jsx("p", {
    className: "text-center text-secondary about-shop-p lead mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Bill's Barber Shop is a classic, American, no-holds-barred barbershop. A variety of services is offered, catering to everyone, with solely the clientele in mind. The Shop stays true to the ways of the classic gentleman's shop, striving to bring the memories back. People still pay for quality - Bill's Barber Shop is where you will get it. I am a barber who loves my craft, providing top-notch service that helps men stay sharp.")))), __jsx("div", {
    className: "container my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: "col-12 col-md-10 mx-md-auto col-lg-5 col-xl-5 ml-lg-auto mr-lg-0 mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: "https://i.postimg.cc/d0MQhBTL/insta-photo-1.jpg",
    thumbnail: true,
    className: "mx-auto shadow-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })), __jsx("div", {
    className: "col-12 col-md-10 mx-md-auto col-lg-5 mr-lg-auto ml-lg-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "flush",
    className: "mx-auto text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Bill The Barber")), __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_5__["default"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("p", {
    className: "btb-card-p lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Bill Rudolph is a father, a husband, a veteran, and an esteemed local business owner. After cutting hair for over 30 years, Bill has secured a steady clientele who appreciate his experience and itegrity. Whether you are looking for the newest and sharpest style, or want to remain true to the classic cuts, Bill is your local go-to barber.")))))), __jsx("hr", {
    className: " my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), __jsx(_components_Testimonials__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), __jsx(react_bootstrap_Jumbotron__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fluid: true,
    className: "container-fluid bg-dark m-0 p-3",
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("h1", {
    className: "display-4 text-center my-0 text-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Contact"), __jsx("div", {
    className: "row mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("div", {
    className: "col-11 col-md-4 mx-auto ml-md-auto mr-5 shadow-lg",
    id: "map-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("div", {
    id: "google-map",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), __jsx("div", {
    className: "col-11 col-md-5 mx-auto mt-4 mt-md-0 ml-md-5 mr-md-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("div", {
    className: "row mt-2 text-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("div", {
    className: "col-6 contact-address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Address"), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "4337 NY-150,", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), "West Sand Lake, NY 12196")), __jsx("div", {
    className: "col-6 contact-phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Phone (text prefered)"), __jsx("address", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("a", {
    href: "sms:+15185909013",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "(518) 590-9013")))), __jsx("hr", {
    className: "my-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }), __jsx("div", {
    className: "row mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("div", {
    className: "col-12 text-left text-left text-light",
    id: "footer-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("ol", {
    className: " float-left ml-0 pl-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "At the corner of Route 43 & Route 150, across from Doors of Hope"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Parking located in front of shop, as well as across the street"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "Walk-ins welcomed and encouraged!"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Cash & the Venmo App accepted, no card")))), __jsx("div", {
    className: "row mt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("div", {
    className: "d-flex footer-links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("span", {
    id: "footer-link-divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "|"), __jsx("a", {
    href: "https://www.facebook.com/pages/Bills-Barber-Shop/152627261418715",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("img", {
    src: "https://i.postimg.cc/s2KKgG7B/facebook-logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), __jsx("span", {
    id: "footer-link-divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "|"), __jsx("a", {
    href: "https://www.instagram.com/bills_american_barbershop/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("img", {
    src: "https://i.postimg.cc/1ttBnRrv/insta-logo.png",
    id: "desktop-insta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  })), __jsx("span", {
    id: "footer-link-divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "|"))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3f48b816e85ab662e2da.hot-update.js.map