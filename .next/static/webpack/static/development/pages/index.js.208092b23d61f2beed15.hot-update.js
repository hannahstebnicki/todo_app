webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/ListItems.js":
/*!***************************************!*\
  !*** ./pages/components/ListItems.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-flip-move */ "./node_modules/react-flip-move/dist/react-flip-move.es.js");
var _jsxFileName = "/Users/hannah/workspace/todo_app/pages/components/ListItems.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // const strickeThrough = {
//     textDecorationLine: 'line-through',
//     textDecorationStyle: 'solid'
// };
// 1. toggle strickethrough
// 2. complete edits from bb 
// 3. push to git hub 
// 4. message George
// 5. start on next project (face recognition software)
// 6. store user data so when refresh it stays in same place
// 7. sort tasks feature
// 8. toggle completed tasks
// 9. publish app for people to use

function ListItems(props) {
  var items = props.items;
  var listItems = items.map(function (item) {
    return __jsx("div", {
      className: "list input-group mb-3",
      key: item.key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("div", {
      className: "input-group-prepend",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("div", {
      className: "input-group-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("input", {
      type: "checkbox",
      className: "strikeThrough",
      "aria-label": "Checkbox for following text input",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })), __jsx("input", {
      type: "text",
      className: "form-control",
      "aria-label": "Text input with checkbox",
      id: item.key,
      value: item.text,
      onChange: function onChange(e) {
        props.setUpdate(e.target.value, item.key);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      className: "faicons row align-self-center",
      onClick: function onClick() {
        props.deleteTask(item.key);
      },
      icon: "trash",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(react_flip_move__WEBPACK_IMPORTED_MODULE_2__["default"], {
    duration: 300,
    easing: "ease-in-out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, listItems));
}

/* harmony default export */ __webpack_exports__["default"] = (ListItems);

/***/ })

})
//# sourceMappingURL=index.js.208092b23d61f2beed15.hot-update.js.map