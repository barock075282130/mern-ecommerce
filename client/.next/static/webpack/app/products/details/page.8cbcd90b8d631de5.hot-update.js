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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _action_AddCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action/AddCart */ \"(app-pages-browser)/./components/product/action/AddCart.jsx\");\n/* harmony import */ var _components_skeleton_DetailSkeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/skeleton/DetailSkeleton */ \"(app-pages-browser)/./components/skeleton/DetailSkeleton.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\nconst ProductInfo = (param)=>{\n    let { data, loading } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleUrlClick = (category)=>router.push(\"/products/categories?type=\".concat(category));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_skeleton_DetailSkeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: data.image,\n                    alt: data.title,\n                    width: 0,\n                    height: 0,\n                    sizes: \"100vw\",\n                    objectFit: \"contain\",\n                    style: {\n                        width: \"auto\",\n                        height: \"13em\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold text-3xl\",\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg break-words\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"description\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 25\n                                }, undefined),\n                                \" : \",\n                                data.description\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center p-2 gap-5 font-semibold\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"$ \",\n                                            data.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center p-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex items items-center font-semibold\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                    className: \"w-4 h-4 text-yellow-300 mr-1\",\n                                                    \"aria-hidden\": \"true\",\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    fill: \"currentColor\",\n                                                    viewBox: \"0 0 22 20\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        d: \"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                                        lineNumber: 40,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 33\n                                                }, undefined),\n                                                data.rating.rate,\n                                                \" out of 5\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"underline\",\n                                            children: [\n                                                data.rating.count,\n                                                \" reviews\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_action_AddCart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            image: data.image,\n                            productId: data.id,\n                            detail: data.title,\n                            price: data.price\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-3 justify-end\",\n                            children: [\n                                \"category :\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-400 hover:text-black cursor-pointer\",\n                                    onClick: ()=>handleUrlClick(data.category),\n                                    children: data.category\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProductInfo, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProductInfo;\nconst ProductDetail = ()=>{\n    _s1();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const productId = searchParams.get(\"productId\");\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const getProductDetail = async ()=>{\n        setLoading(true);\n        try {\n            const getdata = await fetch(\"https://fakestoreapi.com/products/\".concat(productId), {\n                cache: \"no-store\"\n            });\n            const json = await getdata.json();\n            setProduct(json);\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setTimeout(()=>setLoading(false), 2000);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getProductDetail();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pl-40 pt-16 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-6 flex justify-center w-full\",\n            children: product && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductInfo, {\n                data: product,\n                loading: loading\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                lineNumber: 96,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n            lineNumber: 94,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ProductDetail, \"t2+mqmURFWUpfa6o5F83lE6eUiA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c1 = ProductDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetail);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProductInfo\");\n$RefreshReg$(_c1, \"ProductDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0RGV0YWlsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFa0Q7QUFDTjtBQUNiO0FBQ1E7QUFDSztBQUNxQjtBQUVqRSxNQUFNTyxjQUFjO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUU7O0lBQ2xDLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNTSxpQkFBaUIsQ0FBQ0MsV0FBYUYsT0FBT0csSUFBSSxDQUFDLDZCQUFzQyxPQUFURDtJQUM5RSxxQkFDSTtrQkFDQ0gsd0JBQ0csOERBQUNILDJFQUFjQTs7OztzQ0FFZiw4REFBQ1E7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNaLG1EQUFLQTtvQkFDRmEsS0FBS1IsS0FBS1MsS0FBSztvQkFDZkMsS0FBS1YsS0FBS1csS0FBSztvQkFDZkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsT0FBTTtvQkFDTkMsV0FBVTtvQkFDVkMsT0FBTzt3QkFBRUosT0FBTzt3QkFBUUMsUUFBUTtvQkFBTzs7Ozs7OzhCQUUzQyw4REFBQ1A7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDVTs0QkFBRVYsV0FBVTtzQ0FBMEJQLEtBQUtXLEtBQUs7Ozs7OztzQ0FDakQsOERBQUNNOzRCQUFFVixXQUFVOzs4Q0FDVCw4REFBQ1c7OENBQUU7Ozs7OztnQ0FBZTtnQ0FBSWxCLEtBQUttQixXQUFXOzs7Ozs7O3NDQUUxQyw4REFBQ2I7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDWCw0RUFBQ1U7OzRDQUFFOzRDQUFHakIsS0FBS29CLEtBQUs7Ozs7Ozs7Ozs7Ozs4Q0FFcEIsOERBQUNkO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ2M7NENBQUtkLFdBQVU7OzhEQUNaLDhEQUFDZTtvREFBSWYsV0FBVTtvREFBK0JnQixlQUFZO29EQUFPQyxPQUFNO29EQUE2QkMsTUFBSztvREFBZUMsU0FBUTs4REFDNUgsNEVBQUNDO3dEQUFLQyxHQUFFOzs7Ozs7Ozs7OztnREFFWDVCLEtBQUs2QixNQUFNLENBQUNDLElBQUk7Z0RBQUM7Ozs7Ozs7c0RBRXRCLDhEQUFDVDs0Q0FBS2QsV0FBVTs7Ozs7O3NEQUNoQiw4REFBQ1U7NENBQUVWLFdBQVU7O2dEQUFhUCxLQUFLNkIsTUFBTSxDQUFDRSxLQUFLO2dEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdoRCw4REFBQ25DLHVEQUFPQTs0QkFDSmEsT0FBT1QsS0FBS1MsS0FBSzs0QkFDakJ1QixXQUFXaEMsS0FBS2lDLEVBQUU7NEJBQ2xCQyxRQUFRbEMsS0FBS1csS0FBSzs0QkFDbEJTLE9BQU9wQixLQUFLb0IsS0FBSzs7Ozs7O3NDQUVyQiw4REFBQ2Q7NEJBQUlDLFdBQVU7O2dDQUF5Qjs4Q0FFcEMsOERBQUNVO29DQUNHVixXQUFVO29DQUNWNEIsU0FBUyxJQUFJaEMsZUFBZUgsS0FBS0ksUUFBUTs4Q0FFeENKLEtBQUtJLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFROUM7R0ExRE1MOztRQUNhRixzREFBU0E7OztLQUR0QkU7QUE0RE4sTUFBTXFDLGdCQUFnQjs7SUFDbEIsTUFBTUMsZUFBZTdDLGdFQUFlQTtJQUNwQyxNQUFNLENBQUVTLFNBQVNxQyxXQUFZLEdBQUc1QywrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNc0MsWUFBWUssYUFBYUUsR0FBRyxDQUFDO0lBQ25DLE1BQU0sQ0FBRUMsU0FBU0MsV0FBWSxHQUFHL0MsK0NBQVFBLENBQUM7SUFDekMsTUFBTWdELG1CQUFtQjtRQUNyQkosV0FBVztRQUNYLElBQUk7WUFDQSxNQUFNSyxVQUFVLE1BQU1DLE1BQU0scUNBQStDLE9BQVZaLFlBQVk7Z0JBQ3pFYSxPQUFPO1lBQ1g7WUFDQSxNQUFNQyxPQUFPLE1BQU1ILFFBQVFHLElBQUk7WUFDL0JMLFdBQVdLO1FBQ2YsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEIsU0FBVTtZQUNORyxXQUFXLElBQUtaLFdBQVcsUUFBTztRQUN0QztJQUNKO0lBQ0E3QyxnREFBU0EsQ0FBQztRQUNOaUQ7SUFDSixHQUFFLEVBQUU7SUFDTixxQkFDRSw4REFBQ3BDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ05pQyx5QkFDRyw4REFBQ3pDO2dCQUNHQyxNQUFNd0M7Z0JBQ052QyxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQztJQWxDTW1DOztRQUNtQjVDLDREQUFlQTs7O01BRGxDNEM7QUFvQ04sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3REZXRhaWwuanN4P2YwNzgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgQWRkQ2FydCBmcm9tIFwiLi9hY3Rpb24vQWRkQ2FydFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBEZXRhaWxTa2VsZXRvbiBmcm9tIFwiQGNvbXBvbmVudHMvc2tlbGV0b24vRGV0YWlsU2tlbGV0b25cIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RJbmZvID0gKHsgZGF0YSwgbG9hZGluZyB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGhhbmRsZVVybENsaWNrID0gKGNhdGVnb3J5KSA9PiByb3V0ZXIucHVzaChgL3Byb2R1Y3RzL2NhdGVnb3JpZXM/dHlwZT0ke2NhdGVnb3J5fWApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxEZXRhaWxTa2VsZXRvbiAvPlxyXG4gICAgICAgICk6KFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXswfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MH1cclxuICAgICAgICAgICAgICAgICAgICBzaXplcz1cIjEwMHZ3XCJcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICcxM2VtJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC0zeGxcIj57ZGF0YS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBicmVhay13b3Jkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5kZXNjcmlwdGlvbjwvYj4gOiB7ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiBnYXAtNSBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHtkYXRhLnByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zIGl0ZW1zLWNlbnRlciBmb250LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQteWVsbG93LTMwMCBtci0xXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIyIDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjAuOTI0IDcuNjI1YTEuNTIzIDEuNTIzIDAgMCAwLTEuMjM4LTEuMDQ0bC01LjA1MS0uNzM0LTIuMjU5LTQuNTc3YTEuNTM0IDEuNTM0IDAgMCAwLTIuNzUyIDBMNy4zNjUgNS44NDdsLTUuMDUxLjczNEExLjUzNSAxLjUzNSAwIDAgMCAxLjQ2MyA5LjJsMy42NTYgMy41NjMtLjg2MyA1LjAzMWExLjUzMiAxLjUzMiAwIDAgMCAyLjIyNiAxLjYxNkwxMSAxNy4wMzNsNC41MTggMi4zNzVhMS41MzQgMS41MzQgMCAwIDAgMi4yMjYtMS42MTdsLS44NjMtNS4wM0wyMC41MzcgOS4yYTEuNTIzIDEuNTIzIDAgMCAwIC4zODctMS41NzVaXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5yYXRpbmcucmF0ZX0gb3V0IG9mIDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMSBoLTEgbXgtMS41IGJnLWdyYXktNTAwIHJvdW5kZWQtZnVsbCBkYXJrOmJnLWdyYXktNDAwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+e2RhdGEucmF0aW5nLmNvdW50fSByZXZpZXdzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZENhcnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17ZGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZD17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbD17ZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtkYXRhLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5IDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtYmxhY2sgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5oYW5kbGVVcmxDbGljayhkYXRhLmNhdGVnb3J5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFByb2R1Y3REZXRhaWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICAgIGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBwcm9kdWN0SWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdwcm9kdWN0SWQnKTtcclxuICAgIGNvbnN0IFsgcHJvZHVjdCwgc2V0UHJvZHVjdCBdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBnZXRQcm9kdWN0RGV0YWlsID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3Byb2R1Y3RzLyR7cHJvZHVjdElkfWAse1xyXG4gICAgICAgICAgICAgICAgY2FjaGU6ICduby1zdG9yZSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IGdldGRhdGEuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0KGpzb24pXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHNldExvYWRpbmcoZmFsc2UpLDIwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZ2V0UHJvZHVjdERldGFpbCgpO1xyXG4gICAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbC00MCBwdC0xNiBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3QmJihcclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3Byb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWwiXSwibmFtZXMiOlsidXNlU2VhcmNoUGFyYW1zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkFkZENhcnQiLCJ1c2VSb3V0ZXIiLCJEZXRhaWxTa2VsZXRvbiIsIlByb2R1Y3RJbmZvIiwiZGF0YSIsImxvYWRpbmciLCJyb3V0ZXIiLCJoYW5kbGVVcmxDbGljayIsImNhdGVnb3J5IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImltYWdlIiwiYWx0IiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsInNpemVzIiwib2JqZWN0Rml0Iiwic3R5bGUiLCJwIiwiYiIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJzcGFuIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsImQiLCJyYXRpbmciLCJyYXRlIiwiY291bnQiLCJwcm9kdWN0SWQiLCJpZCIsImRldGFpbCIsIm9uQ2xpY2siLCJQcm9kdWN0RGV0YWlsIiwic2VhcmNoUGFyYW1zIiwic2V0TG9hZGluZyIsImdldCIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwiZ2V0UHJvZHVjdERldGFpbCIsImdldGRhdGEiLCJmZXRjaCIsImNhY2hlIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/product/ProductDetail.jsx\n"));

/***/ })

});