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

/***/ "(app-pages-browser)/./components/product/action/Submit.jsx":
/*!**********************************************!*\
  !*** ./components/product/action/Submit.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Submit = (param)=>{\n    let { info, total, clear } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    let setUserId = \"\";\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const submitOrder = async (userId)=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/order\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userId: userId,\n                    order: info,\n                    total: total\n                })\n            });\n            if (res.ok) {\n                clear();\n                router.push(\"/products\");\n            } else {\n                alert(\"failed\");\n            }\n        } catch (error) {}\n    };\n    const getUser = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/userdata\", {\n                method: \"GET\",\n                headers: {\n                    \"authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n                }\n            });\n            if (res.status !== 200) {\n                router.push(\"/login\");\n            } else {\n                const json = await res.json();\n                const userId = await json.userId;\n                setUserId = userId;\n            }\n        } catch (error) {\n            console.log(error);\n        } finally{\n            setUser(true);\n        }\n    };\n    console.log(setUserId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>submitOrder(setUserId),\n            className: \"bg-green-200 px-6 rounded-lg py-1 hover:bg-green-600 hover:text-white duration-300\",\n            children: \"Submit\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\action\\\\Submit.jsx\",\n            lineNumber: 62,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: ()=>getUser(),\n            className: \"bg-green-200 px-6 rounded-lg py-1 hover:bg-green-600 hover:text-white duration-300\",\n            children: \"Submit\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\action\\\\Submit.jsx\",\n            lineNumber: 69,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Submit, \"n31YTk4W5JtmGvBrmvKABe+myOA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Submit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Submit);\nvar _c;\n$RefreshReg$(_c, \"Submit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZHVjdC9hY3Rpb24vU3VibWl0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU0QztBQUNYO0FBRWpDLE1BQU1FLFNBQVM7UUFBQyxFQUNaQyxJQUFJLEVBQ0pDLEtBQUssRUFDTEMsS0FBSyxFQUNSOztJQUNHLE1BQU0sQ0FBRUMsTUFBTUMsUUFBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxJQUFJTyxZQUFZO0lBQ2hCLE1BQU1DLFNBQVNULDBEQUFTQTtJQUN4QixNQUFNVSxjQUFjLE9BQU1DO1FBQ3RCLElBQUk7WUFDQSxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sK0JBQThCO2dCQUNsREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ2pCUCxRQUFRQTtvQkFDUlEsT0FBT2hCO29CQUNQQyxPQUFPQTtnQkFDWDtZQUNKO1lBQ0EsSUFBR1EsSUFBSVEsRUFBRSxFQUFDO2dCQUNOZjtnQkFDQUksT0FBT1ksSUFBSSxDQUFDO1lBQ2hCLE9BQUs7Z0JBQ0RDLE1BQU07WUFDVjtRQUNKLEVBQUUsT0FBT0MsT0FBTyxDQUVoQjtJQUNKO0lBQ0EsTUFBTUMsVUFBVTtRQUNaLElBQUk7WUFDQSxNQUFNWixNQUFNLE1BQU1DLE1BQU0sa0NBQWlDO2dCQUNyREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxpQkFBaUIsWUFBWVUsYUFBYUMsT0FBTyxDQUFDO2dCQUN0RDtZQUNKO1lBQ0EsSUFBR2QsSUFBSWUsTUFBTSxLQUFLLEtBQUk7Z0JBQ2xCbEIsT0FBT1ksSUFBSSxDQUFDO1lBQ2hCLE9BQUs7Z0JBQ0QsTUFBTU8sT0FBTyxNQUFNaEIsSUFBSWdCLElBQUk7Z0JBQzNCLE1BQU1qQixTQUFTLE1BQU1pQixLQUFLakIsTUFBTTtnQkFDaENILFlBQVlHO1lBQ2hCO1FBQ0osRUFBRSxPQUFPWSxPQUFPO1lBQ1pNLFFBQVFDLEdBQUcsQ0FBQ1A7UUFDaEIsU0FBVTtZQUNOaEIsUUFBUTtRQUNaO0lBQ0o7SUFDQXNCLFFBQVFDLEdBQUcsQ0FBQ3RCO0lBQ2QscUJBQ0U7a0JBQ0NGLHFCQUNHLDhEQUFDeUI7WUFDR0MsU0FBUyxJQUFJdEIsWUFBWUY7WUFDekJ5QixXQUFVO3NCQUNiOzs7OztzQ0FJRCw4REFBQ0Y7WUFDR0MsU0FBUyxJQUFJUjtZQUNiUyxXQUFVO3NCQUNiOzs7Ozs7O0FBT1Q7R0F6RU0vQjs7UUFPYUYsc0RBQVNBOzs7S0FQdEJFO0FBMkVOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZHVjdC9hY3Rpb24vU3VibWl0LmpzeD8zODllIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFN1Ym1pdCA9ICh7IFxyXG4gICAgaW5mbyxcclxuICAgIHRvdGFsLCBcclxuICAgIGNsZWFyLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbIHVzZXIsIHNldFVzZXIgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCBzZXRVc2VySWQgPSAnJ1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBzdWJtaXRPcmRlciA9IGFzeW5jKHVzZXJJZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvb3JkZXInLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IGluZm8sXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHRvdGFsLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYocmVzLm9rKXtcclxuICAgICAgICAgICAgICAgIGNsZWFyKClcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZHVjdHMnKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdmYWlsZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0VXNlciA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvdXNlcmRhdGEnLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzICE9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBqc29uLnVzZXJJZFxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcklkID0gdXNlcklkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRVc2VyKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coc2V0VXNlcklkKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAge3VzZXIgPyAoXHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17KCk9PnN1Ym1pdE9yZGVyKHNldFVzZXJJZCl9IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi0yMDAgcHgtNiByb3VuZGVkLWxnIHB5LTEgaG92ZXI6YmctZ3JlZW4tNjAwIGhvdmVyOnRleHQtd2hpdGUgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTooXHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgb25DbGljaz17KCk9PmdldFVzZXIoKX0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTIwMCBweC02IHJvdW5kZWQtbGcgcHktMSBob3ZlcjpiZy1ncmVlbi02MDAgaG92ZXI6dGV4dC13aGl0ZSBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApfVxyXG4gICAgPC8+XHJcbiAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdCJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIlN1Ym1pdCIsImluZm8iLCJ0b3RhbCIsImNsZWFyIiwidXNlciIsInNldFVzZXIiLCJzZXRVc2VySWQiLCJyb3V0ZXIiLCJzdWJtaXRPcmRlciIsInVzZXJJZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib3JkZXIiLCJvayIsInB1c2giLCJhbGVydCIsImVycm9yIiwiZ2V0VXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/product/action/Submit.jsx\n"));

/***/ })

});