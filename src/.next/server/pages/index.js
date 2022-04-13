/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/SubscribeButton/styles.module.scss":
/*!*******************************************************!*\
  !*** ./components/SubscribeButton/styles.module.scss ***!
  \*******************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__wAyOE\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9zdHlsZXMubW9kdWxlLnNjc3M/Njk2OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdWJzY3JpYmVCdXR0b25cIjogXCJzdHlsZXNfc3Vic2NyaWJlQnV0dG9uX193QXlPRVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./pages/home.module.scss":
/*!********************************!*\
  !*** ./pages/home.module.scss ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__YR0kA\",\n\t\"hero\": \"home_hero__Qb7qm\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLm1vZHVsZS5zY3NzPzAxMDAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGVudENvbnRhaW5lclwiOiBcImhvbWVfY29udGVudENvbnRhaW5lcl9fWVIwa0FcIixcblx0XCJoZXJvXCI6IFwiaG9tZV9oZXJvX19RYjdxbVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.module.scss\n");

/***/ }),

/***/ "./components/SubscribeButton/index.tsx":
/*!**********************************************!*\
  !*** ./components/SubscribeButton/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"./services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/stripe-js */ \"./services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n            return;\n        }\n        if (session.activeSubscription) {\n            router.push(\"/posts\");\n            return;\n        }\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.post(\"/subscribe\");\n            const { sessionId  } = response.data;\n            const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_4__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (error) {\n            alert(error.message);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subscribeButton),\n            onClick: handleSubscribe,\n            children: \"Subscribe Now\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\components\\\\SubscribeButton\\\\index.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ2I7QUFDQztBQUNjO0FBQ2I7QUFNbEMsU0FBU00sZUFBZSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxFQUF1QixDQUFDLEVBQUUsQ0FBQztJQUNsRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLE9BQU8sRUFBQyxDQUFDLEdBQUdSLDJEQUFVO0lBQ3BDLEtBQUssQ0FBQ1MsTUFBTSxHQUFHUixzREFBUzttQkFDVFMsZUFBZSxHQUFHLENBQUM7UUFDaEMsRUFBRSxHQUFHRixPQUFPLEVBQUUsQ0FBQztZQUNiVCx1REFBTSxDQUFDLENBQVE7WUFDZixNQUFNO1FBQ1IsQ0FBQztRQUVELEVBQUUsRUFBRVMsT0FBTyxDQUFDRyxrQkFBa0IsRUFBRSxDQUFDO1lBQy9CRixNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFRO1lBQ3BCLE1BQU07UUFDUixDQUFDO1FBRUQsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNYLG1EQUFRLENBQUMsQ0FBWTtZQUU1QyxLQUFLLENBQUMsQ0FBQyxDQUFDYSxTQUFTLEVBQUMsQ0FBQyxHQUFHRixRQUFRLENBQUNOLElBQUk7WUFFbkMsS0FBSyxDQUFDUyxNQUFNLEdBQUcsS0FBSyxDQUFDYixnRUFBVztZQUVoQyxLQUFLLENBQUNhLE1BQU0sQ0FBQ0Msa0JBQWtCLENBQUMsQ0FBQztnQkFBQ0YsU0FBUztZQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFDLEtBQUssRUFBRUcsS0FBSyxFQUFFLENBQUM7WUFDZkMsS0FBSyxDQUFDRCxLQUFLLENBQUNFLE9BQU87UUFDckIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNOzhGQUVEQyxDQUFNO1lBQ0xDLElBQUksRUFBQyxDQUFRO1lBQ2JDLFNBQVMsRUFBRW5CLDRFQUFzQjtZQUNqQ3FCLE9BQU8sRUFBRWYsZUFBZTtzQkFDekIsQ0FFRDs7Ozs7OztBQUdOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3g/YmVkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCB7IGdldFN0cmlwZUpzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmlwZS1qc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3BzIHtcclxuICBwcmljZUlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWJzY3JpYmVCdXR0b24oeyBwcmljZUlkIH06IFN1YnNjcmliZUJ1dHRvblByb3BzKSB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlKCkge1xyXG4gICAgaWYgKCFzZXNzaW9uKSB7XHJcbiAgICAgIHNpZ25JbihcImdpdGh1YlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZXNzaW9uLmFjdGl2ZVN1YnNjcmlwdGlvbikge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9wb3N0c1wiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvc3Vic2NyaWJlXCIpO1xyXG5cclxuICAgICAgY29uc3QgeyBzZXNzaW9uSWQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBnZXRTdHJpcGVKcygpO1xyXG5cclxuICAgICAgYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7IHNlc3Npb25JZCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJzY3JpYmVCdXR0b259XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlU3Vic2NyaWJlfVxyXG4gICAgICA+XHJcbiAgICAgICAgU3Vic2NyaWJlIE5vd1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInNpZ25JbiIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJhcGkiLCJnZXRTdHJpcGVKcyIsInN0eWxlcyIsIlN1YnNjcmliZUJ1dHRvbiIsInByaWNlSWQiLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsImhhbmRsZVN1YnNjcmliZSIsImFjdGl2ZVN1YnNjcmlwdGlvbiIsInB1c2giLCJyZXNwb25zZSIsInBvc3QiLCJzZXNzaW9uSWQiLCJzdHJpcGUiLCJyZWRpcmVjdFRvQ2hlY2tvdXQiLCJlcnJvciIsImFsZXJ0IiwibWVzc2FnZSIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJzdWJzY3JpYmVCdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n// Cliente side\n// Server side\n// and Static Site Genaration\nfunction Home({ product  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home | ig.news\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"👏 Hey, welcome\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"News about \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 24\n                                    }, this),\n                                    \" the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 35\n                                    }, this),\n                                    \" world\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get access to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 48\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" monthly\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl codign\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\iago_\\\\Apps\\\\ignews\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\nconst getStaticProps = async ()=>{\n    const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(\"price_1KcCZ8HjRXPcj4pX5npp5VLn\");\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"en-US\", {\n            style: \"currency\",\n            currency: \"USD\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNEI7QUFDbUM7QUFDcEI7QUFDSjtBQVN2QyxFQUFlO0FBQ2YsRUFBYztBQUNkLEVBQTZCO0FBRWQsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxDQUFDQyxPQUFPLEVBQVksQ0FBQyxFQUFFLENBQUM7SUFDcEQsTUFBTTs7d0ZBRURMLGtEQUFJO3NHQUNGTSxDQUFLOzhCQUFDLENBQWM7Ozs7Ozs7Ozs7O3dGQUV0QkMsQ0FBSTtnQkFBQ0MsU0FBUyxFQUFFTCwyRUFBdUI7O2dHQUNyQ08sQ0FBTzt3QkFBQ0YsU0FBUyxFQUFFTCwrREFBVzs7d0dBQzVCUyxDQUFJOzBDQUFDLENBQWM7Ozs7Ozt3R0FDbkJDLENBQUU7O29DQUFDLENBQ1M7Z0hBQUNDLENBQUU7Ozs7O29DQUFHLENBQUs7Z0hBQUNGLENBQUk7a0RBQUMsQ0FBSzs7Ozs7O29DQUFPLENBQzFDOzs7Ozs7O3dHQUNDRyxDQUFDOztvQ0FBQyxDQUNrQztnSEFBQ0QsQ0FBRTs7Ozs7Z0hBQ3JDRixDQUFJOzs0Q0FBQyxDQUFJOzRDQUFDUCxPQUFPLENBQUNXLE1BQU07NENBQUMsQ0FBUTs7Ozs7Ozs7Ozs7Ozt3R0FFbkNmLHdFQUFlO2dDQUFDZ0IsT0FBTyxFQUFFWixPQUFPLENBQUNZLE9BQU87Ozs7Ozs7Ozs7OztnR0FFMUNDLENBQUc7d0JBQUNDLEdBQUcsRUFBQyxDQUFvQjt3QkFBQ0MsR0FBRyxFQUFDLENBQWE7Ozs7Ozs7Ozs7Ozs7O0FBSXZELENBQUM7QUFFTSxLQUFLLENBQUNDLGNBQWMsYUFBK0IsQ0FBQztJQUN6RCxLQUFLLENBQUNDLEtBQUssR0FBRyxLQUFLLENBQUNwQixvRUFBc0IsQ0FBQyxDQUFnQztJQUUzRSxLQUFLLENBQUNHLE9BQU8sR0FBRyxDQUFDO1FBQ2ZZLE9BQU8sRUFBRUssS0FBSyxDQUFDRyxFQUFFO1FBQ2pCVCxNQUFNLEVBQUUsR0FBRyxDQUFDVSxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFPLFFBQUUsQ0FBQztZQUN0Q0MsS0FBSyxFQUFFLENBQVU7WUFDakJDLFFBQVEsRUFBRSxDQUFLO1FBQ2pCLENBQUMsRUFBRUMsTUFBTSxDQUFDUixLQUFLLENBQUNTLFdBQVcsR0FBRyxHQUFHO0lBQ25DLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBQztRQUNOQyxLQUFLLEVBQUUsQ0FBQztZQUFDM0IsT0FBTztRQUFDLENBQUM7UUFDbEI0QixVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQzFCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFN1YnNjcmliZUJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RyaXBlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaG9tZS5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XHJcbiAgcHJvZHVjdDoge1xyXG4gICAgcHJpY2VJZDogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gQ2xpZW50ZSBzaWRlXHJcbi8vIFNlcnZlciBzaWRlXHJcbi8vIGFuZCBTdGF0aWMgU2l0ZSBHZW5hcmF0aW9uXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdCB9OiBIb21lUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhvbWUgfCBpZy5uZXdzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5oZXJvfT5cclxuICAgICAgICAgIDxzcGFuPvCfkY8gSGV5LCB3ZWxjb21lPC9zcGFuPlxyXG4gICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICBOZXdzIGFib3V0IDxiciAvPiB0aGUgPHNwYW4+UmVhY3Q8L3NwYW4+IHdvcmxkXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEdldCBhY2Nlc3MgdG8gYWxsIHRoZSBwdWJsaWNhdGlvbnMgPGJyIC8+XHJcbiAgICAgICAgICAgIDxzcGFuPmZvciB7cHJvZHVjdC5hbW91bnR9IG1vbnRobHk8L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uIHByaWNlSWQ9e3Byb2R1Y3QucHJpY2VJZH0gLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2F2YXRhci5zdmdcIiBhbHQ9XCJHaXJsIGNvZGlnblwiIC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcHJpY2UgPSBhd2FpdCBzdHJpcGUucHJpY2VzLnJldHJpZXZlKFwicHJpY2VfMUtjQ1o4SGpSWFBjajRwWDVucHA1VkxuXCIpO1xyXG5cclxuICBjb25zdCBwcm9kdWN0ID0ge1xyXG4gICAgcHJpY2VJZDogcHJpY2UuaWQsXHJcbiAgICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIsIHtcclxuICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgY3VycmVuY3k6IFwiVVNEXCIsXHJcbiAgICB9KS5mb3JtYXQocHJpY2UudW5pdF9hbW91bnQgLyAxMDApLFxyXG4gIH07XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHByb2R1Y3QgfSxcclxuICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAyNCwgLy8gMjQgSG91cnNcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsIlN1YnNjcmliZUJ1dHRvbiIsInN0cmlwZSIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGVudENvbnRhaW5lciIsInNlY3Rpb24iLCJoZXJvIiwic3BhbiIsImgxIiwiYnIiLCJwIiwiYW1vdW50IiwicHJpY2VJZCIsImltZyIsInNyYyIsImFsdCIsImdldFN0YXRpY1Byb3BzIiwicHJpY2UiLCJwcmljZXMiLCJyZXRyaWV2ZSIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"/api\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRWxCLEtBQUssQ0FBQ0MsR0FBRyxHQUFHRCxtREFBWSxDQUFDLENBQUM7SUFDL0JHLE9BQU8sRUFBRSxDQUFNO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkudHM/NGJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBcIi9hcGlcIixcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ }),

/***/ "./services/stripe-js.ts":
/*!*******************************!*\
  !*** ./services/stripe-js.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9zdHJpcGUtanMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRXZDLGVBQWVDLFdBQVcsR0FBRyxDQUFDO0lBQ25DLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ0YsNkRBQVUsQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNDLDZCQUE2QjtJQUUzRSxNQUFNLENBQUNILFFBQVE7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZpY2VzL3N0cmlwZS1qcy50cz9iMmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHJpcGVKcygpIHtcclxuICBjb25zdCBzdHJpcGVKcyA9IGF3YWl0IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkpO1xyXG5cclxuICByZXR1cm4gc3RyaXBlSnM7XHJcbn1cclxuIl0sIm5hbWVzIjpbImxvYWRTdHJpcGUiLCJnZXRTdHJpcGVKcyIsInN0cmlwZUpzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/stripe-js.ts\n");

/***/ }),

/***/ "./services/stripe.ts":
/*!****************************!*\
  !*** ./services/stripe.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"../package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"Ignews\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9zdHJpcGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQjtBQUNpQjtBQUVyQyxLQUFLLENBQUNFLE1BQU0sR0FBRyxHQUFHLENBQUNGLCtDQUFNLENBQUNHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztJQUM1REMsVUFBVSxFQUFFLENBQVk7SUFDeEJDLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLElBQUksRUFBRSxDQUFRO1FBQ2RQLE9BQU87SUFDVCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZpY2VzL3N0cmlwZS50cz8xODcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xyXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4uLy4uL3BhY2thZ2UuanNvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUocHJvY2Vzcy5lbnYuU1RSSVBFX0FQSV9LRVksIHtcclxuICBhcGlWZXJzaW9uOiBcIjIwMjAtMDgtMjdcIixcclxuICBhcHBJbmZvOiB7XHJcbiAgICBuYW1lOiBcIklnbmV3c1wiLFxyXG4gICAgdmVyc2lvbixcclxuICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIlN0cmlwZSIsInZlcnNpb24iLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX0FQSV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ }),

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint","slicemachine":"start-slicemachine","test":"next src tests"},"dependencies":{"@prismicio/client":"^6.4.1","@prismicio/helpers":"^2.2.1","@prismicio/next":"^0.1.0","@prismicio/react":"^2.1.2","@prismicio/slice-simulator-react":"^0.2.0","@stripe/stripe-js":"^1.24.0","axios":"^0.26.1","express":"^4.17.3","faunadb":"^4.5.2","next":"12.1.0","next-auth":"^4.2.1","prismic-dom":"^2.2.7","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.3.1","sass":"^1.49.9","stripe":"^8.209.0"},"devDependencies":{"@testing-library/dom":"^8.13.0","@testing-library/jest-dom":"^5.16.4","@testing-library/react":"^13.0.1","@types/next-auth":"^3.15.0","@types/node":"^17.0.21","@types/prismic-dom":"^2.1.1","@types/react":"^17.0.40","babel-jest":"^27.5.1","eslint":"8.10.0","eslint-config-next":"12.1.0","jest":"^27.5.1","jest-dom":"^4.0.0","slice-machine-ui":"^0.3.3","typescript":"^4.6.2"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();