"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./components/product/AllProducts.jsx":
/*!********************************************!*\
  !*** ./components/product/AllProducts.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCard */ \"(app-pages-browser)/./components/product/ProductCard.jsx\");\n/* harmony import */ var _components_skeleton_CardSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/skeleton/CardSkeleton */ \"(app-pages-browser)/./components/skeleton/CardSkeleton.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AllProducts = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const getProducts = async ()=>{\n        setLoading(true);\n        try {\n            const get = await fetch(\"https://fakestoreapi.com/products\");\n            const json = await get.json();\n            setProducts(json);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    const gotoDetail = (id)=>router.push(\"/products/details?productId=\".concat(id));\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProducts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-4 gap-3 m-4\",\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skeleton_CardSkeleton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\AllProducts.jsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, undefined) : products && products.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: data,\n                    gotoDetail: gotoDetail\n                }, data.id, false, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\AllProducts.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 21\n                }, undefined)\n            }, data.id, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\AllProducts.jsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\AllProducts.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AllProducts, \"9CaIEioc0P6xNmxgvQ3FmeHNOEY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AllProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllProducts);\nvar _c;\n$RefreshReg$(_c, \"AllProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZHVjdC9BbGxQcm9kdWN0cy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUU0QztBQUNBO0FBQ0o7QUFDcUI7QUFFN0QsTUFBTUssY0FBYzs7SUFDaEIsTUFBTSxDQUFFQyxVQUFVQyxZQUFhLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFFUSxTQUFTQyxXQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1VLFNBQVNSLDBEQUFTQTtJQUN4QixNQUFNUyxjQUFjO1FBQ2hCRixXQUFXO1FBQ1gsSUFBSTtZQUNBLE1BQU1HLE1BQU0sTUFBTUMsTUFBTTtZQUN4QixNQUFNQyxPQUFPLE1BQU1GLElBQUlFLElBQUk7WUFDM0JQLFlBQVlPO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCLFNBQVU7WUFDTk4sV0FBVztRQUNmO0lBQ0o7SUFDQSxNQUFNUyxhQUFhLENBQUNDLEtBQU9ULE9BQU9VLElBQUksQ0FBQywrQkFBa0MsT0FBSEQ7SUFDdEVsQixnREFBU0EsQ0FBQztRQUNOVTtJQUNKLEdBQUUsRUFBRTtJQUNOLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVO2tCQUNWZCx3QkFDRyw4REFBQ0oseUVBQVlBOzs7O3dCQUViRSxZQUFVQSxTQUFTaUIsR0FBRyxDQUFDLENBQUNDLHFCQUNwQiw4REFBQ0g7MEJBQ0csNEVBQUNsQixvREFBV0E7b0JBRVJxQixNQUFNQTtvQkFDTk4sWUFBWUE7bUJBRlBNLEtBQUtMLEVBQUU7Ozs7O2VBRlZLLEtBQUtMLEVBQUU7Ozs7Ozs7Ozs7QUFXakM7R0FyQ01kOztRQUdhSCxzREFBU0E7OztLQUh0Qkc7QUF1Q04sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0L0FsbFByb2R1Y3RzLmpzeD9jMzdhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4vUHJvZHVjdENhcmRcIjtcclxuaW1wb3J0IENhcmRTa2VsZXRvbiBmcm9tIFwiQGNvbXBvbmVudHMvc2tlbGV0b24vQ2FyZFNrZWxldG9uXCI7XHJcblxyXG5jb25zdCBBbGxQcm9kdWN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFsgcHJvZHVjdHMsIHNldFByb2R1Y3RzIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhc3luYygpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cycpXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCBnZXQuanNvbigpXHJcbiAgICAgICAgICAgIHNldFByb2R1Y3RzKGpzb24pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBnb3RvRGV0YWlsID0gKGlkKSA9PiByb3V0ZXIucHVzaChgL3Byb2R1Y3RzL2RldGFpbHM/cHJvZHVjdElkPSR7aWR9YClcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGdldFByb2R1Y3RzKCk7XHJcbiAgICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTMgbS00XCI+XHJcbiAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxDYXJkU2tlbGV0b24gLz5cclxuICAgICAgICApOihcclxuICAgICAgICAgICAgcHJvZHVjdHMmJnByb2R1Y3RzLm1hcCgoZGF0YSk9PihcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ290b0RldGFpbD17Z290b0RldGFpbH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsUHJvZHVjdHMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0Q2FyZCIsIkNhcmRTa2VsZXRvbiIsIkFsbFByb2R1Y3RzIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwiZ2V0UHJvZHVjdHMiLCJnZXQiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnb3RvRGV0YWlsIiwiaWQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/product/AllProducts.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/skeleton/CardSkeleton.jsx":
/*!**********************************************!*\
  !*** ./components/skeleton/CardSkeleton.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst CardSkeleton = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid gap-3 border p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center h-32 bg-gray-400 animate-pulse\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: \"50%\",\n                        height: \"auto\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                    lineNumber: 5,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                lineNumber: 4,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-400 animate-pulse w-[20em] h-[25px]\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"w-4 h-4 text-gray-400 mr-1 animate-pulse\",\n                                \"aria-hidden\": \"true\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                fill: \"currentColor\",\n                                viewBox: \"0 0 22 20\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                                    lineNumber: 11,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                                lineNumber: 10,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-gray-400 animate-pulse w-[3em] h-[1em]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-gray-400 animate-pulse w-[3em] h-[1em]\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-[32px] bg-gray-400 animate-pulse\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\skeleton\\\\CardSkeleton.jsx\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CardSkeleton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardSkeleton);\nvar _c;\n$RefreshReg$(_c, \"CardSkeleton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2tlbGV0b24vQ2FyZFNrZWxldG9uLmpzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNQSxlQUFlO0lBQ25CLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJRSxPQUFPO3dCQUFFQyxPQUFPO3dCQUFPQyxRQUFRO29CQUFPOzs7Ozs7Ozs7OzswQkFFL0MsOERBQUNKO2dCQUFJQyxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDSTtnQ0FBSUosV0FBVTtnQ0FBMkNLLGVBQVk7Z0NBQU9DLE9BQU07Z0NBQTZCQyxNQUFLO2dDQUFlQyxTQUFROzBDQUN4SSw0RUFBQ0M7b0NBQUtDLEdBQUU7Ozs7Ozs7Ozs7OzBDQUVaLDhEQUFDWDtnQ0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUVuQiw4REFBQ0Q7a0NBQ0csNEVBQUNBOzRCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdkIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7S0F2Qk1GO0FBeUJOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2tlbGV0b24vQ2FyZFNrZWxldG9uLmpzeD8xODMzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENhcmRTa2VsZXRvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ2FwLTMgYm9yZGVyIHAtNCc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLTMyIGJnLWdyYXktNDAwIGFuaW1hdGUtcHVsc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzUwJScsIGhlaWdodDogJ2F1dG8nIH19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMCBhbmltYXRlLXB1bHNlIHctWzIwZW1dIGgtWzI1cHhdXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1ncmF5LTQwMCBtci0xIGFuaW1hdGUtcHVsc2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjIgMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwLjkyNCA3LjYyNWExLjUyMyAxLjUyMyAwIDAgMC0xLjIzOC0xLjA0NGwtNS4wNTEtLjczNC0yLjI1OS00LjU3N2ExLjUzNCAxLjUzNCAwIDAgMC0yLjc1MiAwTDcuMzY1IDUuODQ3bC01LjA1MS43MzRBMS41MzUgMS41MzUgMCAwIDAgMS40NjMgOS4ybDMuNjU2IDMuNTYzLS44NjMgNS4wMzFhMS41MzIgMS41MzIgMCAwIDAgMi4yMjYgMS42MTZMMTEgMTcuMDMzbDQuNTE4IDIuMzc1YTEuNTM0IDEuNTM0IDAgMCAwIDIuMjI2LTEuNjE3bC0uODYzLTUuMDNMMjAuNTM3IDkuMmExLjUyMyAxLjUyMyAwIDAgMCAuMzg3LTEuNTc1WlwiLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPiBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgYW5pbWF0ZS1wdWxzZSB3LVszZW1dIGgtWzFlbV1cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS00MDAgYW5pbWF0ZS1wdWxzZSB3LVszZW1dIGgtWzFlbV1cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtZW5kXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1bMzJweF0gYmctZ3JheS00MDAgYW5pbWF0ZS1wdWxzZScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFNrZWxldG9uIl0sIm5hbWVzIjpbIkNhcmRTa2VsZXRvbiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJzdmciLCJhcmlhLWhpZGRlbiIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJwYXRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/skeleton/CardSkeleton.jsx\n"));

/***/ })

});