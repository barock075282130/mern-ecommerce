"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/carts/page",{

/***/ "(app-pages-browser)/./components/Cart.jsx":
/*!*****************************!*\
  !*** ./components/Cart.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cart */ \"(app-pages-browser)/./node_modules/cart/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Cart = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { addToCart, cartItems, clearCart, decreaseItem } = (0,cart__WEBPACK_IMPORTED_MODULE_2__.useCart)();\n    const handleSubmit = async ()=>{\n        try {} catch (error) {}\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>clearCart(),\n                            children: \"Clear\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: cartItems && cartItems.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        \"name: \",\n                                        data.detail,\n                                        \"quantity: \",\n                                        data.quantity,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-red-200 p-3\",\n                                            onClick: ()=>decreaseItem(data.productId, 1),\n                                            children: \"Decrease\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        \"price: \",\n                                        data.price\n                                    ]\n                                }, data.productId, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 25\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleSubmit(),\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Cart, \"k68ve5hmHxm5XmaOCAehVLQd9w0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        cart__WEBPACK_IMPORTED_MODULE_2__.useCart\n    ];\n});\n_c = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\nvar _c;\n$RefreshReg$(_c, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2FydC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTRDO0FBQ2I7QUFDYTtBQUU1QyxNQUFNSSxPQUFPOztJQUNULE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVNLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRSxHQUFHUiw2Q0FBT0E7SUFDakUsTUFBTVMsZUFBZTtRQUNqQixJQUFJLENBRUosRUFBRSxPQUFPQyxPQUFPLENBRWhCO0lBQ0o7SUFDRixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0Q7OzhCQUNHLDhEQUFDQTs7c0NBQ0csOERBQUNFOzRCQUFPQyxTQUFTLElBQU1QO3NDQUFhOzs7Ozs7c0NBQ3BDLDhEQUFDSTtzQ0FDSUwsYUFBV0EsVUFBVVMsR0FBRyxDQUFDLENBQUNDLHFCQUN2Qiw4REFBQ0w7O3dDQUF5Qjt3Q0FDZkssS0FBS0MsTUFBTTt3Q0FBQzt3Q0FDUkQsS0FBS0UsUUFBUTtzREFDeEIsOERBQUNMOzRDQUFPRCxXQUFVOzRDQUFpQkUsU0FBUyxJQUFNTixhQUFhUSxLQUFLRyxTQUFTLEVBQUU7c0RBQUk7Ozs7Ozt3Q0FBaUI7d0NBQzVGSCxLQUFLSSxLQUFLOzttQ0FKWkosS0FBS0csU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFTcEMsOERBQUNOO29CQUFPQyxTQUFTLElBQUlMOzhCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakQ7R0E5Qk1OOztRQUNhSixzREFBU0E7UUFDa0NDLHlDQUFPQTs7O0tBRi9ERztBQWdDTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcnQuanN4P2EyZjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcImNhcnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2FydCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBhZGRUb0NhcnQsIGNhcnRJdGVtcywgY2xlYXJDYXJ0LCBkZWNyZWFzZUl0ZW0gfSA9IHVzZUNhcnQoKTtcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2xlYXJDYXJ0KCl9PkNsZWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXMmJmNhcnRJdGVtcy5tYXAoKGRhdGEpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnByb2R1Y3RJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7ZGF0YS5kZXRhaWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eToge2RhdGEucXVhbnRpdHl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtMjAwIHAtM1wiIG9uQ2xpY2s9eygpID0+IGRlY3JlYXNlSXRlbShkYXRhLnByb2R1Y3RJZCwgMSl9PkRlY3JlYXNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZToge2RhdGEucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5oYW5kbGVTdWJtaXQoKX0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlQ2FydCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FydCIsInJvdXRlciIsImFkZFRvQ2FydCIsImNhcnRJdGVtcyIsImNsZWFyQ2FydCIsImRlY3JlYXNlSXRlbSIsImhhbmRsZVN1Ym1pdCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImRhdGEiLCJkZXRhaWwiLCJxdWFudGl0eSIsInByb2R1Y3RJZCIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Cart.jsx\n"));

/***/ })

});