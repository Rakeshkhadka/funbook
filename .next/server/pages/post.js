"use strict";
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
exports.id = "pages/post";
exports.ids = ["pages/post"];
exports.modules = {

/***/ "./pages/post/index.jsx":
/*!******************************!*\
  !*** ./pages/post/index.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// import MainLayout from '../../components/layout/MainLayout'\nconst post = ({ data  })=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(data);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: data && data.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: post.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Legion\\\\NextJs\\\\funbook\\\\pages\\\\post\\\\index.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, undefined)\n            }, post.id, false, {\n                fileName: \"C:\\\\Users\\\\Legion\\\\NextJs\\\\funbook\\\\pages\\\\post\\\\index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Legion\\\\NextJs\\\\funbook\\\\pages\\\\post\\\\index.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (post);\nasync function getServerSideProps() {\n    // Fetch data from external API\n    const res = await fetch(`https://dummyjson.com/posts`);\n    const mydata = await res.json();\n    console.log(res, mydata.posts);\n    // Pass data to the page via props\n    return {\n        props: {\n            data: mydata.posts\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNRO0FBQ2pDLDhEQUE4RDtBQUU5RCxNQUFNRSxPQUFPLENBQUMsRUFBQ0MsS0FBSSxFQUFDLEdBQUs7SUFDckJGLGdEQUFTQSxDQUFDLElBQU07UUFFaEJHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixHQUFHLEVBQUU7SUFFUCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDZEosUUFBUUEsS0FBS0ssR0FBRyxDQUFDLENBQUNOLHFCQUVqQiw4REFBQ0k7MEJBQ0QsNEVBQUNHOzhCQUFJUCxLQUFLUSxLQUFLOzs7Ozs7ZUFESFIsS0FBS1MsRUFBRTs7Ozs7Ozs7OztBQVF6QjtBQUVBLGlFQUFlVCxJQUFJQSxFQUFDO0FBQ2IsZUFBZVUscUJBQXFCO0lBQ3ZDLCtCQUErQjtJQUMvQixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztJQUVyRCxNQUFNQyxTQUFTLE1BQU1GLElBQUlHLElBQUk7SUFDN0JaLFFBQVFDLEdBQUcsQ0FBQ1EsS0FBS0UsT0FBT0UsS0FBSztJQUU3QixrQ0FBa0M7SUFDbEMsT0FBTztRQUFFQyxPQUFPO1lBQUVmLE1BQU9ZLE9BQU9FLEtBQUs7UUFBQztJQUFFO0FBQzFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW5ib29rLy4vcGFnZXMvcG9zdC9pbmRleC5qc3g/ZDE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgTWFpbkxheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9NYWluTGF5b3V0J1xyXG5cclxuY29uc3QgcG9zdCA9ICh7ZGF0YX0pID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgXHJcbiAgICB9LCBbXSlcclxuICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAge2RhdGEgJiYgZGF0YS5tYXAoKHBvc3QpID0+IChcclxuICAgIFxyXG4gICAgICA8ZGl2IGtleSA9IHtwb3N0LmlkfT5cclxuICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG4gICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcG9zdDtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2R1bW15anNvbi5jb20vcG9zdHNgKVxyXG4gIFxyXG4gICAgY29uc3QgbXlkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2cocmVzLCBteWRhdGEucG9zdHMpXHJcbiAgXHJcbiAgICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIDogbXlkYXRhLnBvc3RzIH0gfVxyXG4gIH1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwicG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaDEiLCJ0aXRsZSIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzIiwiZmV0Y2giLCJteWRhdGEiLCJqc29uIiwicG9zdHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/index.jsx"));
module.exports = __webpack_exports__;

})();