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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cart */ \"(app-pages-browser)/./node_modules/cart/lib/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst HandleSubmit = (param)=>{\n    let { items } = param;\n    let totalPrice = 0;\n    for (const x of items){\n        const data = {\n            price: x.price * x.quantity\n        };\n        totalPrice += data.price;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [\n            \"$ \",\n            totalPrice.toFixed(2)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_c = HandleSubmit;\nconst Cart = ()=>{\n    _s();\n    const { addToCart, cartItems, clearCart, decreaseItem } = (0,cart__WEBPACK_IMPORTED_MODULE_1__.useCart)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>clearCart(),\n                        children: \"Clear\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: cartItems && cartItems.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: data.image,\n                                        alt: data.image,\n                                        width: 50,\n                                        height: 50\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \"name: \",\n                                    data.detail,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-red-200 p-3\",\n                                        onClick: ()=>addToCart(data),\n                                        children: \"add\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \"quantity: \",\n                                    data.quantity,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"bg-red-200 p-3\",\n                                        onClick: ()=>decreaseItem(data.productId, 1),\n                                        children: \"Decrease\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \"price: \",\n                                    data.price\n                                ]\n                            }, data.productId, true, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HandleSubmit, {\n                            items: cartItems\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 23\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\Cart.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Cart, \"iUPikakZg6ZAJfz82DuR53hrf6s=\", false, function() {\n    return [\n        cart__WEBPACK_IMPORTED_MODULE_1__.useCart\n    ];\n});\n_c1 = Cart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cart);\nvar _c, _c1;\n$RefreshReg$(_c, \"HandleSubmit\");\n$RefreshReg$(_c1, \"Cart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2FydC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUUrQjtBQUNBO0FBRS9CLE1BQU1FLGVBQWU7UUFBQyxFQUFDQyxLQUFLLEVBQUM7SUFDekIsSUFBSUMsYUFBYTtJQUNqQixLQUFJLE1BQU1DLEtBQUtGLE1BQU07UUFDakIsTUFBTUcsT0FBTztZQUNUQyxPQUFPRixFQUFFRSxLQUFLLEdBQUdGLEVBQUVHLFFBQVE7UUFDL0I7UUFDQUosY0FBY0UsS0FBS0MsS0FBSztJQUM1QjtJQUNBLHFCQUNJLDhEQUFDRTs7WUFBSztZQUNDTCxXQUFXTSxPQUFPLENBQUM7Ozs7Ozs7QUFHbEM7S0FiTVI7QUFlTixNQUFNUyxPQUFPOztJQUNULE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFLEdBQUdmLDZDQUFPQTtJQUNuRSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO3NCQUNHLDRFQUFDQTs7a0NBQ0csOERBQUNFO3dCQUFPQyxTQUFTLElBQU1MO2tDQUFhOzs7Ozs7a0NBQ3BDLDhEQUFDRTtrQ0FDSUgsYUFBV0EsVUFBVU8sR0FBRyxDQUFDLENBQUNkLHFCQUN2Qiw4REFBQ1U7O2tEQUNHLDhEQUFDZixtREFBS0E7d0NBQ0ZvQixLQUFLZixLQUFLZ0IsS0FBSzt3Q0FDZkMsS0FBS2pCLEtBQUtnQixLQUFLO3dDQUNmRSxPQUFPO3dDQUNQQyxRQUFROzs7Ozs7b0NBQ1Y7b0NBQ0tuQixLQUFLb0IsTUFBTTtrREFDbEIsOERBQUNSO3dDQUFPRCxXQUFVO3dDQUFpQkUsU0FBUyxJQUFNUCxVQUFVTjtrREFBTzs7Ozs7O29DQUFZO29DQUNwRUEsS0FBS0UsUUFBUTtrREFDeEIsOERBQUNVO3dDQUFPRCxXQUFVO3dDQUFpQkUsU0FBUyxJQUFNSixhQUFhVCxLQUFLcUIsU0FBUyxFQUFFO2tEQUFJOzs7Ozs7b0NBQWlCO29DQUM1RnJCLEtBQUtDLEtBQUs7OytCQVhaRCxLQUFLcUIsU0FBUzs7Ozs7Ozs7OztrQ0FlaEMsOERBQUNsQjtrQ0FBSyw0RUFBQ1A7NEJBQWFDLE9BQU9VOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0M7R0E3Qk1GOztRQUN3RFgseUNBQU9BOzs7TUFEL0RXO0FBK0JOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FydC5qc3g/YTJmNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcImNhcnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBIYW5kbGVTdWJtaXQgPSAoe2l0ZW1zfSkgPT4ge1xyXG4gICAgbGV0IHRvdGFsUHJpY2UgPSAwO1xyXG4gICAgZm9yKGNvbnN0IHggb2YgaXRlbXMpe1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHByaWNlOiB4LnByaWNlICogeC5xdWFudGl0eVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b3RhbFByaWNlICs9IGRhdGEucHJpY2VcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICQge3RvdGFsUHJpY2UudG9GaXhlZCgyKX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IENhcnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFkZFRvQ2FydCwgY2FydEl0ZW1zLCBjbGVhckNhcnQsIGRlY3JlYXNlSXRlbSB9ID0gdXNlQ2FydCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGVhckNhcnQoKX0+Q2xlYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhcnRJdGVtcyYmY2FydEl0ZW1zLm1hcCgoZGF0YSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEucHJvZHVjdElkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtkYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtkYXRhLmRldGFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTIwMCBwLTNcIiBvbkNsaWNrPXsoKSA9PiBhZGRUb0NhcnQoZGF0YSl9PmFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IHtkYXRhLnF1YW50aXR5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTIwMCBwLTNcIiBvbkNsaWNrPXsoKSA9PiBkZWNyZWFzZUl0ZW0oZGF0YS5wcm9kdWN0SWQsIDEpfT5EZWNyZWFzZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHtkYXRhLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+PEhhbmRsZVN1Ym1pdCBpdGVtcz17Y2FydEl0ZW1zfSAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnQiXSwibmFtZXMiOlsidXNlQ2FydCIsIkltYWdlIiwiSGFuZGxlU3VibWl0IiwiaXRlbXMiLCJ0b3RhbFByaWNlIiwieCIsImRhdGEiLCJwcmljZSIsInF1YW50aXR5Iiwic3BhbiIsInRvRml4ZWQiLCJDYXJ0IiwiYWRkVG9DYXJ0IiwiY2FydEl0ZW1zIiwiY2xlYXJDYXJ0IiwiZGVjcmVhc2VJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsInNyYyIsImltYWdlIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkZXRhaWwiLCJwcm9kdWN0SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Cart.jsx\n"));

/***/ })

});