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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"57bb06971002\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzYzMGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1N2JiMDY5NzEwMDJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/auth/Provider.jsx":
/*!**************************************!*\
  !*** ./components/auth/Provider.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ \"(app-pages-browser)/./components/auth/Context.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Provider = (param)=>{\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        userId: \"\",\n        username: \"\"\n    });\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        const username = userRef.current.value;\n        const password = passRef.current.value;\n        try {\n            const login = await fetch(\"http://localhost:4000/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username: username,\n                    password: password\n                })\n            });\n            const res = await login.json();\n            if (login.ok) {\n                localStorage.setItem(\"token\", res.token);\n                history.back();\n            }\n        } catch (error) {\n            console.log(\"login failed\");\n        }\n    };\n    const Logout = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/logout\", {\n                method: \"POST\",\n                headers: {\n                    \"authorization\": \"Bearer \" + localStorage.removeItem(\"token\")\n                }\n            });\n            if (res.ok) {\n                router.push(\"/\");\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const getUser = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/userdata\", {\n                method: \"GET\",\n                headers: {\n                    \"Authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n                }\n            });\n            if (res.status !== 200) {\n                router.push(\"/login\");\n            } else {\n                const json = await res.json();\n                setUser(json);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            user,\n            handleLogin,\n            Logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\auth\\\\Provider.jsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Provider, \"BOQZQeF33CFn9r9MD0YbppEo9cc=\");\n_c = Provider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Provider);\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXV0aC9Qcm92aWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU0QztBQUNiO0FBRS9CLE1BQU1HLFdBQVc7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzFCLE1BQU0sQ0FBRUMsTUFBTUMsUUFBUyxHQUFHTCwrQ0FBUUEsQ0FBQztRQUFFTSxRQUFRO1FBQUlDLFVBQVU7SUFBRztJQUM5RCxNQUFNQyxjQUFjLE9BQU1DO1FBQ3RCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1ILFdBQVdJLFFBQVFDLE9BQU8sQ0FBQ0MsS0FBSztRQUN0QyxNQUFNQyxXQUFXQyxRQUFRSCxPQUFPLENBQUNDLEtBQUs7UUFDbEMsSUFBSTtZQUNBLE1BQU1HLFFBQVEsTUFBTUMsTUFBTSwrQkFBOEI7Z0JBQ3BEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFlO2dCQUNuQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNqQmYsVUFBVUE7b0JBQ1ZPLFVBQVVBO2dCQUNkO1lBQ0o7WUFDQSxNQUFNUyxNQUFNLE1BQU1QLE1BQU1RLElBQUk7WUFDNUIsSUFBR1IsTUFBTVMsRUFBRSxFQUFDO2dCQUNSQyxhQUFhQyxPQUFPLENBQUMsU0FBU0osSUFBSUssS0FBSztnQkFDdkNDLFFBQVFDLElBQUk7WUFDaEI7UUFDSixFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO0lBQ0o7SUFDQSxNQUFNQyxTQUFTO1FBQ1gsSUFBSTtZQUNBLE1BQU1YLE1BQU0sTUFBTU4sTUFBTSxnQ0FBK0I7Z0JBQ25EQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGlCQUFpQixZQUFXTyxhQUFhUyxVQUFVLENBQUM7Z0JBQ3hEO1lBQ0o7WUFDQSxJQUFHWixJQUFJRSxFQUFFLEVBQUM7Z0JBQ05XLE9BQU9DLElBQUksQ0FBQztZQUNoQjtRQUNKLEVBQUUsT0FBT04sT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBQ0o7SUFDQSxNQUFNTyxVQUFVO1FBQ1osSUFBSTtZQUNBLE1BQU1mLE1BQU0sTUFBTU4sTUFBTSxrQ0FBaUM7Z0JBQ3JEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGlCQUFpQixZQUFZTyxhQUFhYSxPQUFPLENBQUM7Z0JBQ3REO1lBQ0o7WUFDQSxJQUFHaEIsSUFBSWlCLE1BQU0sS0FBSyxLQUFJO2dCQUNsQkosT0FBT0MsSUFBSSxDQUFDO1lBQ2hCLE9BQUs7Z0JBQ0QsTUFBTWIsT0FBTyxNQUFNRCxJQUFJQyxJQUFJO2dCQUMzQm5CLFFBQVFtQjtZQUNaO1FBQ0osRUFBRSxPQUFPTyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDSjtJQUNBQyxRQUFRQyxHQUFHLENBQUM3QjtJQUNsQixxQkFDRSw4REFBQ0gsZ0RBQU9BLENBQUNDLFFBQVE7UUFBQ1csT0FBTztZQUFFVDtZQUFNSTtZQUFhMEI7UUFBTztrQkFDaEQvQjs7Ozs7O0FBR1Q7R0FqRU1EO0tBQUFBO0FBbUVOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9Qcm92aWRlci5qc3g/OTI2NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250ZXh0IGZyb20gXCIuL0NvbnRleHRcIlxyXG5cclxuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbIHVzZXIsIHNldFVzZXIgXSA9IHVzZVN0YXRlKHsgdXNlcklkOiAnJywgdXNlcm5hbWU6ICcnIH0pXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSB1c2VyUmVmLmN1cnJlbnQudmFsdWVcclxuICAgICAgICBjb25zdCBwYXNzd29yZCA9IHBhc3NSZWYuY3VycmVudC52YWx1ZVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9naW4gPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2xvZ2luJyx7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxvZ2luLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGlmKGxvZ2luLm9rKXtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5LmJhY2soKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGZhaWxlZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIGNvbnN0IExvZ291dCA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9sb2dvdXQnLHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiKyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZihyZXMub2spe1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGdldFVzZXIgPSBhc3luYygpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvdXNlcmRhdGEnLHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgIT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIoanNvbilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGhhbmRsZUxvZ2luLCBMb2dvdXQgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXIiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250ZXh0IiwiUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwidXNlcklkIiwidXNlcm5hbWUiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJSZWYiLCJjdXJyZW50IiwidmFsdWUiLCJwYXNzd29yZCIsInBhc3NSZWYiLCJsb2dpbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwianNvbiIsIm9rIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwiaGlzdG9yeSIsImJhY2siLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJMb2dvdXQiLCJyZW1vdmVJdGVtIiwicm91dGVyIiwicHVzaCIsImdldFVzZXIiLCJnZXRJdGVtIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/auth/Provider.jsx\n"));

/***/ })

});