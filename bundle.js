/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: Module1 */
/* exports used: Module1 */
/*!****************************!*\
  !*** ./src/app/module1.ts ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("﻿class Module1 {\n  constructor() {\n    console.log('Module1');\n  }\n}\n/* harmony export (immutable) */ exports[\"a\"] = Module1;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvbW9kdWxlMS50cz8yNzM0Il0sInNvdXJjZXNDb250ZW50IjpbIu+7v2V4cG9ydCBjbGFzcyBNb2R1bGUxIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ01vZHVsZTEnKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9tb2R1bGUxLnRzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/* exports provided: Module2 */
/* exports used: Module2 */
/*!****************************!*\
  !*** ./src/app/module2.ts ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("﻿class Module2 {\n  constructor() {\n    console.log('Module2');\n  }\n}\n/* harmony export (immutable) */ exports[\"a\"] = Module2;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvbW9kdWxlMi50cz83ZTE4Il0sInNvdXJjZXNDb250ZW50IjpbIu+7v2V4cG9ydCBjbGFzcyBNb2R1bGUyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ01vZHVsZTInKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9tb2R1bGUyLnRzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module1__ = __webpack_require__(/*! ./module1 */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module2__ = __webpack_require__(/*! ./module2 */ 1);\n﻿\n\n\nlet md1 = new __WEBPACK_IMPORTED_MODULE_0__module1__[\"a\" /* Module1 */]();\nlet md2 = new __WEBPACK_IMPORTED_MODULE_1__module2__[\"a\" /* Module2 */]();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgudHM/ZWM2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQgeyBNb2R1bGUxIH0gZnJvbSAnLi9tb2R1bGUxJztcbmltcG9ydCB7IE1vZHVsZTIgfSBmcm9tICcuL21vZHVsZTInO1xuXG5sZXQgbWQxID0gbmV3IE1vZHVsZTEoKTtcbmxldCBtZDIgPSBuZXcgTW9kdWxlMigpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9pbmRleC50c1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);