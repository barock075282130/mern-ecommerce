"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"35a51177e381\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzYzMGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIzNWE1MTE3N2UzODFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/auth/Context.jsx":
/*!*************************************!*\
  !*** ./components/auth/Context.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: function() { return /* binding */ UserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ UserContext,default auto */ \nvar _s = $RefreshSig$();\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    userId: undefined,\n    username: undefined\n});\nconst Provider = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userId: undefined,\n        username: undefined\n    });\n    const Logout = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/logout\", {\n                method: \"POST\",\n                headers: {\n                    \"authorization\": \"Bearer \" + localStorage.removeItem(\"token\")\n                }\n            });\n            if (res.ok) {\n                router.push(\"/\");\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getUser = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/userdata\", {\n                method: \"GET\",\n                headers: {\n                    \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n                }\n            });\n            if (res.status !== 200) {\n                router.push(\"/login\");\n            } else {\n                const json = await res.json();\n                setUser({\n                    userId: json.userId,\n                    username: json.username\n                });\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            Logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\auth\\\\Context.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Provider, \"VtilwaASnKAd5XBa3Hx9jlbHA1o=\");\n_c = Provider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Provider);\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXV0aC9Db250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFZ0Q7QUFDaEI7QUFFekIsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUFDO0lBQUVJLFFBQVFDO0lBQVdDLFVBQVVEO0FBQVUsR0FBRTtBQUVwRixNQUFNRSxXQUFXO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMxQixNQUFNLENBQUVDLE1BQU1DLFFBQVMsR0FBR1IsK0NBQVFBLENBQUM7UUFBRUUsUUFBUUM7UUFBV0MsVUFBVUQ7SUFBVTtJQUN4RSxNQUFNTSxTQUFTO1FBQ1gsSUFBSTtZQUNBLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxnQ0FBK0I7Z0JBQ25EQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGlCQUFpQixZQUFXQyxhQUFhQyxVQUFVLENBQUM7Z0JBQ3hEO1lBQ0o7WUFDQSxJQUFHTCxJQUFJTSxFQUFFLEVBQUM7Z0JBQ05DLE9BQU9DLElBQUksQ0FBQztZQUNoQjtRQUNKLEVBQUUsT0FBT0MsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBQ0o7SUFDQSxNQUFNRyxVQUFVO1FBQ1osSUFBSTtZQUNBLE1BQU1aLE1BQU0sTUFBTUMsTUFBTSxrQ0FBaUM7Z0JBQ3JEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGlCQUFpQixZQUFZQyxhQUFhUyxPQUFPLENBQUM7Z0JBQ3REO1lBQ0o7WUFDQSxJQUFHYixJQUFJYyxNQUFNLEtBQUssS0FBSTtnQkFDbEJQLE9BQU9DLElBQUksQ0FBQztZQUNoQixPQUFLO2dCQUNELE1BQU1PLE9BQU8sTUFBTWYsSUFBSWUsSUFBSTtnQkFDM0JqQixRQUFRO29CQUFFTixRQUFRdUIsS0FBS3ZCLE1BQU07b0JBQUVFLFVBQVVxQixLQUFLckIsUUFBUTtnQkFBQztZQUMzRDtRQUNKLEVBQUUsT0FBT2UsT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBQ0o7SUFDQXBCLGdEQUFTQSxDQUFDO1FBQ051QjtJQUNKLEdBQUUsRUFBRTtJQUNWLHFCQUNFLDhEQUFDckIsWUFBWUksUUFBUTtRQUFDcUIsT0FBTztZQUFFbkI7WUFBTUU7UUFBTztrQkFDdkNIOzs7Ozs7QUFHVDtHQTNDTUQ7S0FBQUE7QUE2Q04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL0NvbnRleHQuanN4P2M0NDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHsgdXNlcklkOiB1bmRlZmluZWQsIHVzZXJuYW1lOiB1bmRlZmluZWQgfSlcclxuXHJcbmNvbnN0IFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgWyB1c2VyLCBzZXRVc2VyIF0gPSB1c2VTdGF0ZSh7IHVzZXJJZDogdW5kZWZpbmVkLCB1c2VybmFtZTogdW5kZWZpbmVkIH0pXHJcbiAgICAgICAgY29uc3QgTG9nb3V0ID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2xvZ291dCcse1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIrIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5vayl7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZ2V0VXNlciA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC91c2VyZGF0YScse1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyAhPT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcih7IHVzZXJJZDoganNvbi51c2VySWQsIHVzZXJuYW1lOiBqc29uLnVzZXJuYW1lIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAgICAgZ2V0VXNlcigpXHJcbiAgICAgICAgfSxbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIExvZ291dCB9fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXIiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlckNvbnRleHQiLCJ1c2VySWQiLCJ1bmRlZmluZWQiLCJ1c2VybmFtZSIsIlByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsIkxvZ291dCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJvayIsInJvdXRlciIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyIiwiZ2V0SXRlbSIsInN0YXR1cyIsImpzb24iLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/auth/Context.jsx\n"));

/***/ })

});