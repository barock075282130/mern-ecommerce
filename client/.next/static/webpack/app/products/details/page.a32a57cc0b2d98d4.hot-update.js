"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/details/page",{

/***/ "(app-pages-browser)/./components/product/ProductDetail.jsx":
/*!**********************************************!*\
  !*** ./components/product/ProductDetail.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _action_AddCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action/AddCart */ \"(app-pages-browser)/./components/product/action/AddCart.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst ProductInfo = (param)=>{\n    let { data } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleUrlClick = (category)=>router.push(\"/products/categories?type=\".concat(category));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: data.image,\n                alt: data.title,\n                width: 0,\n                height: 0,\n                sizes: \"100vw\",\n                objectFit: \"contain\",\n                style: {\n                    width: \"auto\",\n                    height: \"13em\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold text-3xl\",\n                        children: data.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg break-words\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: \"description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, undefined),\n                            \" : \",\n                            data.description\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center p-2 gap-5 font-semibold\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"$ \",\n                                        data.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center p-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"flex items items-center font-semibold\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-4 h-4 text-yellow-300 mr-1\",\n                                                \"aria-hidden\": \"true\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                fill: \"currentColor\",\n                                                viewBox: \"0 0 22 20\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            data.rating.rate,\n                                            \" out of 5\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"underline-offset-2\",\n                                        children: [\n                                            data.rating.count,\n                                            \" reviews\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_action_AddCart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        image: data.image,\n                        productId: data.id,\n                        detail: data.title,\n                        price: data.price\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-3 justify-end\",\n                        children: [\n                            \"category :\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400 hover:text-black cursor-pointer\",\n                                onClick: ()=>handleUrlClick(data.category),\n                                children: data.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProductInfo, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProductInfo;\nconst ProductDetail = (param)=>{\n    let { id } = param;\n    _s1();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const productId = searchParams.get(\"productId\");\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const getProductDetail = async ()=>{\n        try {\n            const getdata = await fetch(\"https://fakestoreapi.com/products/\".concat(productId));\n            const json = await getdata.json();\n            setProduct(json);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getProductDetail();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 flex justify-center\",\n        children: product && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductInfo, {\n            data: product\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n            lineNumber: 82,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ProductDetail, \"Kl4InQdtYO/RM+uPj/SilIU66QA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c1 = ProductDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetail);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProductInfo\");\n$RefreshReg$(_c1, \"ProductDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0RGV0YWlsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVrRDtBQUNOO0FBQ2I7QUFDUTtBQUNLO0FBRTVDLE1BQU1NLGNBQWM7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3pCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNSSxpQkFBaUIsQ0FBQ0MsV0FBYUYsT0FBT0csSUFBSSxDQUFDLDZCQUFzQyxPQUFURDtJQUM5RSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNWLG1EQUFLQTtnQkFDRlcsS0FBS1AsS0FBS1EsS0FBSztnQkFDZkMsS0FBS1QsS0FBS1UsS0FBSztnQkFDZkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsT0FBTTtnQkFDTkMsV0FBVTtnQkFDVkMsT0FBTztvQkFBRUosT0FBTztvQkFBUUMsUUFBUTtnQkFBTzs7Ozs7OzBCQUUzQyw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBMEJOLEtBQUtVLEtBQUs7Ozs7OztrQ0FDakQsOERBQUNNO3dCQUFFVixXQUFVOzswQ0FDVCw4REFBQ1c7MENBQUU7Ozs7Ozs0QkFBZTs0QkFBSWpCLEtBQUtrQixXQUFXOzs7Ozs7O2tDQUUxQyw4REFBQ2I7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ1U7O3dDQUFFO3dDQUFHaEIsS0FBS21CLEtBQUs7Ozs7Ozs7Ozs7OzswQ0FFcEIsOERBQUNkO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ2M7d0NBQUtkLFdBQVU7OzBEQUNaLDhEQUFDZTtnREFBSWYsV0FBVTtnREFBK0JnQixlQUFZO2dEQUFPQyxPQUFNO2dEQUE2QkMsTUFBSztnREFBZUMsU0FBUTswREFDNUgsNEVBQUNDO29EQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs0Q0FFWDNCLEtBQUs0QixNQUFNLENBQUNDLElBQUk7NENBQUM7Ozs7Ozs7a0RBRXRCLDhEQUFDVDt3Q0FBS2QsV0FBVTs7Ozs7O2tEQUNoQiw4REFBQ1U7d0NBQUVWLFdBQVU7OzRDQUFzQk4sS0FBSzRCLE1BQU0sQ0FBQ0UsS0FBSzs0Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHekQsOERBQUNqQyx1REFBT0E7d0JBQ0pXLE9BQU9SLEtBQUtRLEtBQUs7d0JBQ2pCdUIsV0FBVy9CLEtBQUtnQyxFQUFFO3dCQUNsQkMsUUFBUWpDLEtBQUtVLEtBQUs7d0JBQ2xCUyxPQUFPbkIsS0FBS21CLEtBQUs7Ozs7OztrQ0FFckIsOERBQUNkO3dCQUFJQyxXQUFVOzs0QkFBeUI7MENBRXBDLDhEQUFDVTtnQ0FDR1YsV0FBVTtnQ0FDVjRCLFNBQVMsSUFBSWhDLGVBQWVGLEtBQUtHLFFBQVE7MENBRXhDSCxLQUFLRyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUM7R0FwRE1KOztRQUNhRCxzREFBU0E7OztLQUR0QkM7QUFzRE4sTUFBTW9DLGdCQUFnQjtRQUFDLEVBQUVILEVBQUUsRUFBRTs7SUFDekIsTUFBTUksZUFBZTNDLGdFQUFlQTtJQUNwQyxNQUFNc0MsWUFBWUssYUFBYUMsR0FBRyxDQUFDO0lBQ25DLE1BQU0sQ0FBRUMsU0FBU0MsV0FBWSxHQUFHNUMsK0NBQVFBLENBQUM7SUFDekMsTUFBTTZDLG1CQUFtQjtRQUNyQixJQUFJO1lBQ0EsTUFBTUMsVUFBVSxNQUFNQyxNQUFNLHFDQUErQyxPQUFWWDtZQUNqRSxNQUFNWSxPQUFPLE1BQU1GLFFBQVFFLElBQUk7WUFDL0JKLFdBQVdJO1FBQ2YsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDSjtJQUNBbEQsZ0RBQVNBLENBQUM7UUFDTjhDO0lBQ0osR0FBRSxFQUFFO0lBQ04scUJBQ0UsOERBQUNuQztRQUFJQyxXQUFVO2tCQUNWZ0MseUJBQ0csOERBQUN2QztZQUNHQyxNQUFNc0M7Ozs7Ozs7Ozs7O0FBS3RCO0lBekJNSDs7UUFDbUIxQyw0REFBZUE7OztNQURsQzBDO0FBMkJOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0RGV0YWlsLmpzeD9mMDc4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IEFkZENhcnQgZnJvbSBcIi4vYWN0aW9uL0FkZENhcnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgUHJvZHVjdEluZm8gPSAoeyBkYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaGFuZGxlVXJsQ2xpY2sgPSAoY2F0ZWdvcnkpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdHMvY2F0ZWdvcmllcz90eXBlPSR7Y2F0ZWdvcnl9YClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgIHNyYz17ZGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD17ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXswfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXswfVxyXG4gICAgICAgICAgICAgICAgc2l6ZXM9XCIxMDB2d1wiXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnYXV0bycsIGhlaWdodDogJzEzZW0nIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LTN4bFwiPntkYXRhLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgYnJlYWstd29yZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yj5kZXNjcmlwdGlvbjwvYj4gOiB7ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiBnYXAtNSBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2RhdGEucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMgaXRlbXMtY2VudGVyIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXllbGxvdy0zMDAgbXItMVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMiAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAuOTI0IDcuNjI1YTEuNTIzIDEuNTIzIDAgMCAwLTEuMjM4LTEuMDQ0bC01LjA1MS0uNzM0LTIuMjU5LTQuNTc3YTEuNTM0IDEuNTM0IDAgMCAwLTIuNzUyIDBMNy4zNjUgNS44NDdsLTUuMDUxLjczNEExLjUzNSAxLjUzNSAwIDAgMCAxLjQ2MyA5LjJsMy42NTYgMy41NjMtLjg2MyA1LjAzMWExLjUzMiAxLjUzMiAwIDAgMCAyLjIyNiAxLjYxNkwxMSAxNy4wMzNsNC41MTggMi4zNzVhMS41MzQgMS41MzQgMCAwIDAgMi4yMjYtMS42MTdsLS44NjMtNS4wM0wyMC41MzcgOS4yYTEuNTIzIDEuNTIzIDAgMCAwIC4zODctMS41NzVaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEucmF0aW5nLnJhdGV9IG91dCBvZiA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xIGgtMSBteC0xLjUgYmctZ3JheS01MDAgcm91bmRlZC1mdWxsIGRhcms6YmctZ3JheS00MDBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVuZGVybGluZS1vZmZzZXQtMlwiPntkYXRhLnJhdGluZy5jb3VudH0gcmV2aWV3czwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGRDYXJ0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17ZGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtkYXRhLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5IDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWJsYWNrIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5oYW5kbGVVcmxDbGljayhkYXRhLmNhdGVnb3J5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBQcm9kdWN0RGV0YWlsID0gKHsgaWQgfSkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBjb25zdCBwcm9kdWN0SWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdwcm9kdWN0SWQnKTtcclxuICAgIGNvbnN0IFsgcHJvZHVjdCwgc2V0UHJvZHVjdCBdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBnZXRQcm9kdWN0RGV0YWlsID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0ZGF0YSA9IGF3YWl0IGZldGNoKGBodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvJHtwcm9kdWN0SWR9YClcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IGdldGRhdGEuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0KGpzb24pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZ2V0UHJvZHVjdERldGFpbCgpO1xyXG4gICAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIHtwcm9kdWN0JiYoXHJcbiAgICAgICAgICAgIDxQcm9kdWN0SW5mbyBcclxuICAgICAgICAgICAgICAgIGRhdGE9e3Byb2R1Y3R9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbCJdLCJuYW1lcyI6WyJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiQWRkQ2FydCIsInVzZVJvdXRlciIsIlByb2R1Y3RJbmZvIiwiZGF0YSIsInJvdXRlciIsImhhbmRsZVVybENsaWNrIiwiY2F0ZWdvcnkiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2l6ZXMiLCJvYmplY3RGaXQiLCJzdHlsZSIsInAiLCJiIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInNwYW4iLCJzdmciLCJhcmlhLWhpZGRlbiIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJwYXRoIiwiZCIsInJhdGluZyIsInJhdGUiLCJjb3VudCIsInByb2R1Y3RJZCIsImlkIiwiZGV0YWlsIiwib25DbGljayIsIlByb2R1Y3REZXRhaWwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImdldFByb2R1Y3REZXRhaWwiLCJnZXRkYXRhIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/product/ProductDetail.jsx\n"));

/***/ })

});