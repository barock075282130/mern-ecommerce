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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2809cfc1a361\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzYzMGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyODA5Y2ZjMWEzNjFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/auth/Context.jsx":
/*!*************************************!*\
  !*** ./components/auth/Context.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: function() { return /* binding */ UserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ UserContext,default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    userId: undefined,\n    username: undefined\n});\nconst Provider = (param)=>{\n    let { children } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userId: undefined,\n        username: undefined\n    });\n    const Logout = async ()=>{\n        try {\n            await fetch(\"http://localhost:4000/logout\", {\n                method: \"POST\",\n                headers: {\n                    \"authorization\": \"Bearer \" + localStorage.removeItem(\"token\")\n                }\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getUser = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/userdata\", {\n                method: \"GET\",\n                headers: {\n                    \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n                }\n            });\n            if (res.status !== 200) {\n                router.push(\"/login\");\n            } else {\n                const json = await res.json();\n                setUser({\n                    userId: json.userId,\n                    username: json.username\n                });\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUser();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            Logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\auth\\\\Context.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Provider, \"WSx7wrrnyP0sfAkZFHAVO3sqlHw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Provider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Provider);\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXV0aC9Db250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVnRDtBQUNoQjtBQUNXO0FBRXBDLE1BQU1JLDRCQUFjSixvREFBYUEsQ0FBQztJQUFFSyxRQUFRQztJQUFXQyxVQUFVRDtBQUFVLEdBQUU7QUFFcEYsTUFBTUUsV0FBVztRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDMUIsTUFBTUMsU0FBU1AsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBRVEsTUFBTUMsUUFBUyxHQUFHViwrQ0FBUUEsQ0FBQztRQUFFRyxRQUFRQztRQUFXQyxVQUFVRDtJQUFVO0lBQ3hFLE1BQU1PLFNBQVM7UUFDWCxJQUFJO1lBQ0EsTUFBTUMsTUFBTSxnQ0FBK0I7Z0JBQ3ZDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGlCQUFpQixZQUFXQyxhQUFhQyxVQUFVLENBQUM7Z0JBQ3hEO1lBQ0o7UUFDSixFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNKO0lBQ0EsTUFBTUcsVUFBVTtRQUNaLElBQUk7WUFDQSxNQUFNQyxNQUFNLE1BQU1ULE1BQU0sa0NBQWlDO2dCQUNyREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxpQkFBaUIsWUFBWUMsYUFBYU8sT0FBTyxDQUFDO2dCQUN0RDtZQUNKO1lBQ0EsSUFBR0QsSUFBSUUsTUFBTSxLQUFLLEtBQUk7Z0JBQ2xCZixPQUFPZ0IsSUFBSSxDQUFDO1lBQ2hCLE9BQUs7Z0JBQ0QsTUFBTUMsT0FBTyxNQUFNSixJQUFJSSxJQUFJO2dCQUMzQmYsUUFBUTtvQkFBRVAsUUFBUXNCLEtBQUt0QixNQUFNO29CQUFFRSxVQUFVb0IsS0FBS3BCLFFBQVE7Z0JBQUM7WUFDM0Q7UUFDSixFQUFFLE9BQU9ZLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUNKO0lBQ0FsQixnREFBU0EsQ0FBQztRQUNOcUI7SUFDSixHQUFFLEVBQUU7SUFDVixxQkFDRSw4REFBQ2xCLFlBQVlJLFFBQVE7UUFBQ29CLE9BQU87WUFBRWpCO1lBQU1FO1FBQU87a0JBQ3ZDSjs7Ozs7O0FBR1Q7R0F6Q01EOztRQUNhTCxzREFBU0E7OztLQUR0Qks7QUEyQ04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL0NvbnRleHQuanN4P2M0NDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7IHVzZXJJZDogdW5kZWZpbmVkLCB1c2VybmFtZTogdW5kZWZpbmVkIH0pXHJcblxyXG5jb25zdCBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgWyB1c2VyLCBzZXRVc2VyIF0gPSB1c2VTdGF0ZSh7IHVzZXJJZDogdW5kZWZpbmVkLCB1c2VybmFtZTogdW5kZWZpbmVkIH0pXHJcbiAgICAgICAgY29uc3QgTG9nb3V0ID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2xvZ291dCcse1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIrIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGdldFVzZXIgPSBhc3luYygpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvdXNlcmRhdGEnLHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgIT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIoeyB1c2VySWQ6IGpzb24udXNlcklkLCB1c2VybmFtZToganNvbi51c2VybmFtZSB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICAgIGdldFVzZXIoKVxyXG4gICAgICAgIH0sW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBMb2dvdXQgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwidXNlcklkIiwidW5kZWZpbmVkIiwidXNlcm5hbWUiLCJQcm92aWRlciIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlciIsInJlcyIsImdldEl0ZW0iLCJzdGF0dXMiLCJwdXNoIiwianNvbiIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/auth/Context.jsx\n"));

/***/ })

});