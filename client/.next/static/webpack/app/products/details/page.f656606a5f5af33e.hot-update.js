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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _action_AddCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action/AddCart */ \"(app-pages-browser)/./components/product/action/AddCart.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst ProductInfo = (param)=>{\n    let { data } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleUrlClick = (category)=>router.push(\"/products/categories?type=\".concat(category));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: data.image,\n                alt: data.title,\n                width: 0,\n                height: 0,\n                sizes: \"100vw\",\n                objectFit: \"contain\",\n                style: {\n                    width: \"auto\",\n                    height: \"13em\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold text-3xl\",\n                        children: data.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg break-words\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: \"description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, undefined),\n                            \" : \",\n                            data.description\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center p-2 gap-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"$ \",\n                                        data.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center p-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"flex items items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"w-4 h-4 text-yellow-300 mr-1\",\n                                                \"aria-hidden\": \"true\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                fill: \"currentColor\",\n                                                viewBox: \"0 0 22 20\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    d: \"M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 33\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            data.rating.rate,\n                                            \" out of 5\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            data.rating.count,\n                                            \" reviews\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_action_AddCart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                image: data.image,\n                                productId: data.id,\n                                detail: data.title,\n                                price: data.price\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-3 justify-end\",\n                                children: [\n                                    \"category :\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-400 hover:text-black cursor-pointer\",\n                                        onClick: ()=>handleUrlClick(data.category),\n                                        children: data.category\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProductInfo, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProductInfo;\nconst ProductDetail = (param)=>{\n    let { id } = param;\n    _s1();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const productId = searchParams.get(\"productId\");\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const getProductDetail = async ()=>{\n        try {\n            const getdata = await fetch(\"https://fakestoreapi.com/products/\".concat(productId));\n            const json = await getdata.json();\n            setProduct(json);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getProductDetail();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6 flex justify-center\",\n        children: product && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductInfo, {\n            data: product\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n            lineNumber: 84,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\ProductDetail.jsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(ProductDetail, \"Kl4InQdtYO/RM+uPj/SilIU66QA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c1 = ProductDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetail);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProductInfo\");\n$RefreshReg$(_c1, \"ProductDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0RGV0YWlsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVrRDtBQUNOO0FBQ2I7QUFDUTtBQUNLO0FBRTVDLE1BQU1NLGNBQWM7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3pCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNSSxpQkFBaUIsQ0FBQ0MsV0FBYUYsT0FBT0csSUFBSSxDQUFDLDZCQUFzQyxPQUFURDtJQUM5RSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNWLG1EQUFLQTtnQkFDRlcsS0FBS1AsS0FBS1EsS0FBSztnQkFDZkMsS0FBS1QsS0FBS1UsS0FBSztnQkFDZkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsT0FBTTtnQkFDTkMsV0FBVTtnQkFDVkMsT0FBTztvQkFBRUosT0FBTztvQkFBUUMsUUFBUTtnQkFBTzs7Ozs7OzBCQUUzQyw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDVTt3QkFBRVYsV0FBVTtrQ0FBMEJOLEtBQUtVLEtBQUs7Ozs7OztrQ0FDakQsOERBQUNNO3dCQUFFVixXQUFVOzswQ0FDVCw4REFBQ1c7MENBQUU7Ozs7Ozs0QkFBZTs0QkFBSWpCLEtBQUtrQixXQUFXOzs7Ozs7O2tDQUUxQyw4REFBQ2I7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ1U7O3dDQUFFO3dDQUFHaEIsS0FBS21CLEtBQUs7Ozs7Ozs7Ozs7OzswQ0FFcEIsOERBQUNkO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ2M7d0NBQUtkLFdBQVU7OzBEQUNaLDhEQUFDZTtnREFBSWYsV0FBVTtnREFBK0JnQixlQUFZO2dEQUFPQyxPQUFNO2dEQUE2QkMsTUFBSztnREFBZUMsU0FBUTswREFDNUgsNEVBQUNDO29EQUFLQyxHQUFFOzs7Ozs7Ozs7Ozs0Q0FFWDNCLEtBQUs0QixNQUFNLENBQUNDLElBQUk7NENBQUM7Ozs7Ozs7a0RBRXRCLDhEQUFDVDt3Q0FBS2QsV0FBVTs7Ozs7O2tEQUNoQiw4REFBQ1U7OzRDQUFHaEIsS0FBSzRCLE1BQU0sQ0FBQ0UsS0FBSzs0Q0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHOUIsOERBQUN6Qjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNULHVEQUFPQTtnQ0FDSlcsT0FBT1IsS0FBS1EsS0FBSztnQ0FDakJ1QixXQUFXL0IsS0FBS2dDLEVBQUU7Z0NBQ2xCQyxRQUFRakMsS0FBS1UsS0FBSztnQ0FDbEJTLE9BQU9uQixLQUFLbUIsS0FBSzs7Ozs7OzBDQUVyQiw4REFBQ2Q7Z0NBQUlDLFdBQVU7O29DQUF5QjtrREFFcEMsOERBQUNVO3dDQUNHVixXQUFVO3dDQUNWNEIsU0FBUyxJQUFJaEMsZUFBZUYsS0FBS0csUUFBUTtrREFFeENILEtBQUtHLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQztHQXRETUo7O1FBQ2FELHNEQUFTQTs7O0tBRHRCQztBQXdETixNQUFNb0MsZ0JBQWdCO1FBQUMsRUFBRUgsRUFBRSxFQUFFOztJQUN6QixNQUFNSSxlQUFlM0MsZ0VBQWVBO0lBQ3BDLE1BQU1zQyxZQUFZSyxhQUFhQyxHQUFHLENBQUM7SUFDbkMsTUFBTSxDQUFFQyxTQUFTQyxXQUFZLEdBQUc1QywrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNNkMsbUJBQW1CO1FBQ3JCLElBQUk7WUFDQSxNQUFNQyxVQUFVLE1BQU1DLE1BQU0scUNBQStDLE9BQVZYO1lBQ2pFLE1BQU1ZLE9BQU8sTUFBTUYsUUFBUUUsSUFBSTtZQUMvQkosV0FBV0k7UUFDZixFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNKO0lBQ0FsRCxnREFBU0EsQ0FBQztRQUNOOEM7SUFDSixHQUFFLEVBQUU7SUFDTixxQkFDRSw4REFBQ25DO1FBQUlDLFdBQVU7a0JBQ1ZnQyx5QkFDRyw4REFBQ3ZDO1lBQ0dDLE1BQU1zQzs7Ozs7Ozs7Ozs7QUFLdEI7SUF6Qk1IOztRQUNtQjFDLDREQUFlQTs7O01BRGxDMEM7QUEyQk4sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3REZXRhaWwuanN4P2YwNzgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgQWRkQ2FydCBmcm9tIFwiLi9hY3Rpb24vQWRkQ2FydFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0SW5mbyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBoYW5kbGVVcmxDbGljayA9IChjYXRlZ29yeSkgPT4gcm91dGVyLnB1c2goYC9wcm9kdWN0cy9jYXRlZ29yaWVzP3R5cGU9JHtjYXRlZ29yeX1gKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cclxuICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezB9XHJcbiAgICAgICAgICAgICAgICBzaXplcz1cIjEwMHZ3XCJcclxuICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiAnMTNlbScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC01XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtM3hsXCI+e2RhdGEudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBicmVhay13b3Jkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPmRlc2NyaXB0aW9uPC9iPiA6IHtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2RhdGEucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC15ZWxsb3ctMzAwIG1yLTFcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjIgMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwLjkyNCA3LjYyNWExLjUyMyAxLjUyMyAwIDAgMC0xLjIzOC0xLjA0NGwtNS4wNTEtLjczNC0yLjI1OS00LjU3N2ExLjUzNCAxLjUzNCAwIDAgMC0yLjc1MiAwTDcuMzY1IDUuODQ3bC01LjA1MS43MzRBMS41MzUgMS41MzUgMCAwIDAgMS40NjMgOS4ybDMuNjU2IDMuNTYzLS44NjMgNS4wMzFhMS41MzIgMS41MzIgMCAwIDAgMi4yMjYgMS42MTZMMTEgMTcuMDMzbDQuNTE4IDIuMzc1YTEuNTM0IDEuNTM0IDAgMCAwIDIuMjI2LTEuNjE3bC0uODYzLTUuMDNMMjAuNTM3IDkuMmExLjUyMyAxLjUyMyAwIDAgMCAuMzg3LTEuNTc1WlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnJhdGluZy5yYXRlfSBvdXQgb2YgNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMSBoLTEgbXgtMS41IGJnLWdyYXktNTAwIHJvdW5kZWQtZnVsbCBkYXJrOmJnLWdyYXktNDAwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5yYXRpbmcuY291bnR9IHJldmlld3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGRDYXJ0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17ZGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkPXtkYXRhLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWw9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtkYXRhLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5IDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWJsYWNrIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5oYW5kbGVVcmxDbGljayhkYXRhLmNhdGVnb3J5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFByb2R1Y3REZXRhaWwgPSAoeyBpZCB9KSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICAgIGNvbnN0IHByb2R1Y3RJZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3Byb2R1Y3RJZCcpO1xyXG4gICAgY29uc3QgWyBwcm9kdWN0LCBzZXRQcm9kdWN0IF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IGdldFByb2R1Y3REZXRhaWwgPSBhc3luYygpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBnZXRkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cy8ke3Byb2R1Y3RJZH1gKVxyXG4gICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgZ2V0ZGF0YS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFByb2R1Y3QoanNvbilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBnZXRQcm9kdWN0RGV0YWlsKCk7XHJcbiAgICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAge3Byb2R1Y3QmJihcclxuICAgICAgICAgICAgPFByb2R1Y3RJbmZvIFxyXG4gICAgICAgICAgICAgICAgZGF0YT17cHJvZHVjdH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsIl0sIm5hbWVzIjpbInVzZVNlYXJjaFBhcmFtcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJBZGRDYXJ0IiwidXNlUm91dGVyIiwiUHJvZHVjdEluZm8iLCJkYXRhIiwicm91dGVyIiwiaGFuZGxlVXJsQ2xpY2siLCJjYXRlZ29yeSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJzaXplcyIsIm9iamVjdEZpdCIsInN0eWxlIiwicCIsImIiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwic3BhbiIsInN2ZyIsImFyaWEtaGlkZGVuIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInBhdGgiLCJkIiwicmF0aW5nIiwicmF0ZSIsImNvdW50IiwicHJvZHVjdElkIiwiaWQiLCJkZXRhaWwiLCJvbkNsaWNrIiwiUHJvZHVjdERldGFpbCIsInNlYXJjaFBhcmFtcyIsImdldCIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwiZ2V0UHJvZHVjdERldGFpbCIsImdldGRhdGEiLCJmZXRjaCIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/product/ProductDetail.jsx\n"));

/***/ })

});