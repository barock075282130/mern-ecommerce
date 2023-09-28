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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Submit = (param)=>{\n    let { info, total, clear } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const submitOrder = async (userId)=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/order\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userId: userId,\n                    order: info,\n                    total: total\n                })\n            });\n            if (res.ok) {\n                clear;\n                router.push(\"/products\");\n            } else {\n                alert(\"failed\");\n            }\n        } catch (error) {}\n    };\n    const getUser = async ()=>{\n        try {\n            const res = await fetch(\"http://localhost:4000/userdata\", {\n                method: \"GET\",\n                headers: {\n                    \"authorization\": \"Bearer \" + localStorage.getItem(\"token\")\n                }\n            });\n            const json = await res.json();\n            const userId = await json.userId;\n            if (res.status !== 200) {\n                router.push(\"/login\");\n            } else {\n                submitOrder(userId);\n            }\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>getUser(),\n        className: \"bg-green-200 px-6 rounded-lg py-1 hover:bg-green-600 hover:text-white duration-300\",\n        children: \"Submit\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Shaomm\\\\OneDrive\\\\Desktop\\\\learnnextapp\\\\ecom\\\\client\\\\components\\\\product\\\\action\\\\Submit.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Submit, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Submit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Submit);\nvar _c;\n$RefreshReg$(_c, \"Submit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZHVjdC9hY3Rpb24vU3VibWl0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFFNUMsTUFBTUMsU0FBUztRQUFDLEVBQ1pDLElBQUksRUFDSkMsS0FBSyxFQUNMQyxLQUFLLEVBQ1I7O0lBQ0csTUFBTUMsU0FBU0wsMERBQVNBO0lBQ3hCLE1BQU1NLGNBQWMsT0FBTUM7UUFDdEIsSUFBSTtZQUNBLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSwrQkFBOEI7Z0JBQ2xEQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDakJQLFFBQVFBO29CQUNSUSxPQUFPYjtvQkFDUEMsT0FBT0E7Z0JBQ1g7WUFDSjtZQUNBLElBQUdLLElBQUlRLEVBQUUsRUFBQztnQkFDTlo7Z0JBQ0FDLE9BQU9ZLElBQUksQ0FBQztZQUNoQixPQUFLO2dCQUNEQyxNQUFNO1lBQ1Y7UUFDSixFQUFFLE9BQU9DLE9BQU8sQ0FFaEI7SUFDSjtJQUNBLE1BQU1DLFVBQVU7UUFDWixJQUFJO1lBQ0EsTUFBTVosTUFBTSxNQUFNQyxNQUFNLGtDQUFpQztnQkFDckRDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsaUJBQWlCLFlBQVlVLGFBQWFDLE9BQU8sQ0FBQztnQkFDdEQ7WUFDSjtZQUNBLE1BQU1DLE9BQU8sTUFBTWYsSUFBSWUsSUFBSTtZQUMzQixNQUFNaEIsU0FBUyxNQUFNZ0IsS0FBS2hCLE1BQU07WUFDaEMsSUFBR0MsSUFBSWdCLE1BQU0sS0FBSyxLQUFJO2dCQUNsQm5CLE9BQU9ZLElBQUksQ0FBQztZQUNoQixPQUFLO2dCQUNEWCxZQUFZQztZQUNoQjtRQUNKLEVBQUUsT0FBT1ksT0FBTztZQUNaTSxRQUFRQyxHQUFHLENBQUNQO1FBQ2hCO0lBQ0o7SUFDRixxQkFDRSw4REFBQ1E7UUFDR0MsU0FBUyxJQUFJUjtRQUNiUyxXQUFVO2tCQUNiOzs7Ozs7QUFJTDtHQXhETTVCOztRQUthRCxzREFBU0E7OztLQUx0QkM7QUEwRE4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0L2FjdGlvbi9TdWJtaXQuanN4PzM4OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgU3VibWl0ID0gKHsgXHJcbiAgICBpbmZvLFxyXG4gICAgdG90YWwsIFxyXG4gICAgY2xlYXIsXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qgc3VibWl0T3JkZXIgPSBhc3luYyh1c2VySWQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL29yZGVyJyx7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyOiBpbmZvLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiB0b3RhbCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHJlcy5vayl7XHJcbiAgICAgICAgICAgICAgICBjbGVhclxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wcm9kdWN0cycpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ2ZhaWxlZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRVc2VyID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC91c2VyZGF0YScse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiYXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VySWQgPSBhd2FpdCBqc29uLnVzZXJJZFxyXG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzICE9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc3VibWl0T3JkZXIodXNlcklkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIFxyXG4gICAgICAgIG9uQ2xpY2s9eygpPT5nZXRVc2VyKCl9IFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTIwMCBweC02IHJvdW5kZWQtbGcgcHktMSBob3ZlcjpiZy1ncmVlbi02MDAgaG92ZXI6dGV4dC13aGl0ZSBkdXJhdGlvbi0zMDBcIlxyXG4gICAgPlxyXG4gICAgICAgIFN1Ym1pdFxyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJtaXQiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiU3VibWl0IiwiaW5mbyIsInRvdGFsIiwiY2xlYXIiLCJyb3V0ZXIiLCJzdWJtaXRPcmRlciIsInVzZXJJZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib3JkZXIiLCJvayIsInB1c2giLCJhbGVydCIsImVycm9yIiwiZ2V0VXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJqc29uIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/product/action/Submit.jsx\n"));

/***/ })

});