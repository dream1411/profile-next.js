"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_boostrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/boostrap.css */ \"./styles/boostrap.css\");\n/* harmony import */ var _styles_boostrap_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_boostrap_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme.css */ \"./styles/theme.css\");\n/* harmony import */ var _styles_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_theme_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/bootstrap-icons.css */ \"./styles/bootstrap-icons.css\");\n/* harmony import */ var _styles_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _componants_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componants/Layout */ \"./componants/Layout.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [userProfile, setUserProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    setTimeout(function() {\n        setIsLoading(false);\n    }, 1000);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        router.push(\"/\");\n    // Perform authentication check here\n    // const authToken = localStorage.getItem(\"authToken\");\n    // if (!authToken && router.pathname !== \"/login\") {\n    //   // Redirect to login page if not authenticated and not on the login page\n    //   router.push(\"/login\");\n    // } else {\n    //   console.log(\"getUserProfile\");\n    //   // Fetch user profile if authenticated\n    //   getUserProfile()\n    //     .then((profile) => {\n    //       if (profile != undefined) {\n    //       setUserProfile(profile);\n    //       }else{\n    //         router.push(\"/login\");\n    //       }\n    //     })\n    //     .catch((error) => {\n    //       console.error(\"Error fetching user profile:\", error);\n    //     });\n    // }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                fileName: \"D:\\\\react\\\\my-next-app\\\\pages\\\\_app.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componants_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                userProfile: userProfile,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"D:\\\\react\\\\my-next-app\\\\pages\\\\_app.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\my-next-app\\\\pages\\\\_app.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js\",\n                        integrity: \"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\my-next-app\\\\pages\\\\_app.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js\",\n                        integrity: \"sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\react\\\\my-next-app\\\\pages\\\\_app.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\react\\\\my-next-app\\\\pages\\\\_app.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // async function getUserProfile() {\n //   try {\n //     const authToken = localStorage.getItem(\"authToken\");\n //     const response = await axios.get(\n //       \"http://localhost:8081/api/users/profile\",\n //       {\n //         headers: {\n //           \"Content-Type\": \"application/json\",\n //           Authorization: `Bearer ${authToken}`,\n //         },\n //       }\n //     );\n //     if (response.data.status == \"ok\") {\n //       return response.data.user;\n //     }\n //   } catch (error) {\n //     console.error(\"Error fetching user profile:\", error);\n //     throw error;\n //   }\n // }\n_s(App, \"+8p/B7psdWBKfbhhBl15BI+F7b0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUN6QjtBQUNHO0FBQ1c7QUFDUjtBQUNIO0FBQ1U7QUFDUjtBQUNXO0FBQzNCLFNBQVNPLElBQUksS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFDMUIsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQy9DLE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ25EYyxXQUFXLFdBQVk7UUFDckJILGFBQWEsS0FBSztJQUNwQixHQUFHO0lBQ0hWLGdEQUFTQSxDQUFDLElBQU07UUFDZFEsT0FBT00sSUFBSSxDQUFDO0lBQ1osb0NBQW9DO0lBQ3BDLHVEQUF1RDtJQUV2RCxvREFBb0Q7SUFDcEQsNkVBQTZFO0lBQzdFLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLDJDQUEyQztJQUMzQyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsU0FBUztJQUNULDBCQUEwQjtJQUUxQiw4REFBOEQ7SUFDOUQsVUFBVTtJQUNWLElBQUk7SUFDTixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNaLGtEQUFJQTs7Ozs7MEJBQ0wsOERBQUNFLDBEQUFNQTtnQkFBQ08sYUFBYUE7O2tDQUNuQiw4REFBQ0k7a0NBQ0MsNEVBQUNUOzRCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O2tDQUUxQiw4REFBQ1M7d0JBQ0NDLEtBQUk7d0JBQ0pDLFdBQVU7d0JBQ1ZDLGFBQVk7Ozs7OztrQ0FFZCw4REFBQ0g7d0JBQ0NDLEtBQUk7d0JBQ0pDLFdBQVU7d0JBQ1ZDLGFBQVk7Ozs7Ozs7Ozs7Ozs7O0FBS3RCLENBQUMsQ0FDRCxvQ0FBb0M7Q0FDcEMsVUFBVTtDQUNWLDJEQUEyRDtDQUMzRCx3Q0FBd0M7Q0FDeEMsbURBQW1EO0NBQ25ELFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsZ0RBQWdEO0NBQ2hELGtEQUFrRDtDQUNsRCxhQUFhO0NBQ2IsVUFBVTtDQUNWLFNBQVM7Q0FDVCwwQ0FBMEM7Q0FDMUMsbUNBQW1DO0NBQ25DLFFBQVE7Q0FDUixzQkFBc0I7Q0FDdEIsNERBQTREO0NBQzVELG1CQUFtQjtDQUNuQixNQUFNO0NBQ04sSUFBSTtHQXpFb0JkOztRQUNQRixrREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2Jvb3N0cmFwLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvdGhlbWUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9ib290c3RyYXAtaWNvbnMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25hbnRzL0xheW91dFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt1c2VyUHJvZmlsZSwgc2V0VXNlclByb2ZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH0sIDEwMDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAvLyBQZXJmb3JtIGF1dGhlbnRpY2F0aW9uIGNoZWNrIGhlcmVcclxuICAgIC8vIGNvbnN0IGF1dGhUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpO1xyXG5cclxuICAgIC8vIGlmICghYXV0aFRva2VuICYmIHJvdXRlci5wYXRobmFtZSAhPT0gXCIvbG9naW5cIikge1xyXG4gICAgLy8gICAvLyBSZWRpcmVjdCB0byBsb2dpbiBwYWdlIGlmIG5vdCBhdXRoZW50aWNhdGVkIGFuZCBub3Qgb24gdGhlIGxvZ2luIHBhZ2VcclxuICAgIC8vICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcImdldFVzZXJQcm9maWxlXCIpO1xyXG4gICAgLy8gICAvLyBGZXRjaCB1c2VyIHByb2ZpbGUgaWYgYXV0aGVudGljYXRlZFxyXG4gICAgLy8gICBnZXRVc2VyUHJvZmlsZSgpXHJcbiAgICAvLyAgICAgLnRoZW4oKHByb2ZpbGUpID0+IHtcclxuICAgIC8vICAgICAgIGlmIChwcm9maWxlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICAgICAgc2V0VXNlclByb2ZpbGUocHJvZmlsZSk7XHJcbiAgICAvLyAgICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXIgcHJvZmlsZTpcIiwgZXJyb3IpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPjwvSGVhZD5cclxuICAgICAgPExheW91dCB1c2VyUHJvZmlsZT17dXNlclByb2ZpbGV9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjIvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtTXJjVzZaTUZZbHpjTEE4TmwrTnRVVkYwc0E3TXNYc1AxVXlKb01wNFlMRXVOU2ZBUCtKY1huL3RXdElheFZYTVwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQHBvcHBlcmpzL2NvcmVAMi45LjIvZGlzdC91bWQvcG9wcGVyLm1pbi5qc1wiXHJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtSVFzb0xYbDVQSUxGaG9zVk51YnE1TEM3UWI5RFhnREE5aSt0UThaajNpd1dBd1B0Z0ZUeGJKOE5UNEdOMVI4cFwiXHJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclByb2ZpbGUoKSB7XHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IGF1dGhUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFRva2VuXCIpO1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbi8vICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FwaS91c2Vycy9wcm9maWxlXCIsXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBoZWFkZXJzOiB7XHJcbi8vICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuLy8gICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoVG9rZW59YCxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9XHJcbi8vICAgICApO1xyXG4vLyAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09IFwib2tcIikge1xyXG4vLyAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS51c2VyO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlciBwcm9maWxlOlwiLCBlcnJvcik7XHJcbi8vICAgICB0aHJvdyBlcnJvcjtcclxuLy8gICB9XHJcbi8vIH1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VyUHJvZmlsZSIsInNldFVzZXJQcm9maWxlIiwic2V0VGltZW91dCIsInB1c2giLCJkaXYiLCJzY3JpcHQiLCJzcmMiLCJpbnRlZ3JpdHkiLCJjcm9zc09yaWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n"));

/***/ })

});