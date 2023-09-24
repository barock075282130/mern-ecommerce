"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/categories/page",{

/***/ "(app-pages-browser)/./components/CategoriesProducts.jsx":
/*!*******************************************!*\
  !*** ./components/CategoriesProducts.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCard */ \"(app-pages-browser)/./components/ProductCard.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CategoriesProducts = ()=>{\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const type = searchParams.get(\"type\");\n    const getType = async ()=>{\n        try {\n            const res = await fetch(\"https://fakestoreapi.com/products/category/\".concat(type));\n            const json = await res.json();\n            setProducts(json);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const gotoDetail = (id)=>router.push(\"/products/details?productId=\".concat(id));\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getType();\n    }, [\n        type\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-4 gap-3 m-4\",\n        children: products && products.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: data,\n                    gotoDetail: gotoDetail\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\CategoriesProducts.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, data.id, false, {\n                fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\CategoriesProducts.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\CategoriesProducts.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CategoriesProducts, \"g4ylYwReBR2JyOYVqkPqobcn09g=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = CategoriesProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoriesProducts);\nvar _c;\n$RefreshReg$(_c, \"CategoriesProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2F0ZWdvcmllc1Byb2R1Y3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFNkQ7QUFDakI7QUFDSjtBQUV4QyxNQUFNSyxxQkFBcUI7O0lBQ3ZCLE1BQU0sQ0FBRUMsVUFBVUMsWUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU1LLFNBQVNSLDBEQUFTQTtJQUN4QixNQUFNUyxlQUFlUixnRUFBZUE7SUFDcEMsTUFBTVMsT0FBT0QsYUFBYUUsR0FBRyxDQUFDO0lBQzlCLE1BQU1DLFVBQVU7UUFDWixJQUFJO1lBQ0EsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLDhDQUFtRCxPQUFMSjtZQUN0RSxNQUFNSyxPQUFPLE1BQU1GLElBQUlFLElBQUk7WUFDM0JSLFlBQVlRO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBQ0o7SUFDQSxNQUFNRyxhQUFhLENBQUNDLEtBQU9aLE9BQU9hLElBQUksQ0FBQywrQkFBa0MsT0FBSEQ7SUFDdEVsQixnREFBU0EsQ0FBQztRQUNOVTtJQUNKLEdBQUU7UUFBQ0Y7S0FBSztJQUNWLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVO2tCQUNWakIsWUFBVUEsU0FBU2tCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDckIsOERBQUNIOzBCQUNHLDRFQUFDbEIsb0RBQVdBO29CQUNScUIsTUFBTUE7b0JBQ05OLFlBQVlBOzs7Ozs7ZUFIVk0sS0FBS0wsRUFBRTs7Ozs7Ozs7OztBQVM3QjtHQTlCTWY7O1FBRWFMLHNEQUFTQTtRQUNIQyw0REFBZUE7OztLQUhsQ0k7QUFnQ04sK0RBQWVBLGtCQUFrQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhdGVnb3JpZXNQcm9kdWN0cy5qc3g/YjdlNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4vUHJvZHVjdENhcmRcIjtcclxuXHJcbmNvbnN0IENhdGVnb3JpZXNQcm9kdWN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFsgcHJvZHVjdHMsIHNldFByb2R1Y3RzIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gICAgY29uc3QgdHlwZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3R5cGUnKVxyXG4gICAgY29uc3QgZ2V0VHlwZSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMvY2F0ZWdvcnkvJHt0eXBlfWApXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0cyhqc29uKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGdvdG9EZXRhaWwgPSAoaWQpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdHMvZGV0YWlscz9wcm9kdWN0SWQ9JHtpZH1gKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZ2V0VHlwZSgpO1xyXG4gICAgfSxbdHlwZV0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtMyBtLTRcIj5cclxuICAgICAgICB7cHJvZHVjdHMmJnByb2R1Y3RzLm1hcCgoZGF0YSk9PihcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgZ290b0RldGFpbD17Z290b0RldGFpbH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzUHJvZHVjdHMiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9kdWN0Q2FyZCIsIkNhdGVnb3JpZXNQcm9kdWN0cyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJyb3V0ZXIiLCJzZWFyY2hQYXJhbXMiLCJ0eXBlIiwiZ2V0IiwiZ2V0VHlwZSIsInJlcyIsImZldGNoIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdvdG9EZXRhaWwiLCJpZCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CategoriesProducts.jsx\n"));

/***/ })

});