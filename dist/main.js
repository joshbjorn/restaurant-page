/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/*! exports provided: contactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactPage\", function() { return contactPage; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst contactPage = (() => {\n    const contactPageLoader = () => {\n        Object(_index__WEBPACK_IMPORTED_MODULE_0__[\"clearPage\"])();\n\n        for (let i = 0; i < 2; i++){\n            let div = document.createElement('div');\n\n            switch (i){\n                case 0:\n                    div.classList.add('contact-container');\n                    div.innerHTML = \"<h2 class='contact-header'>Contact Us</h2>\" + \n                                    \"<p>89 The Crescent, SUTTON, SM37 8AY</p>\" +\n                                    \"<p>+44 014 789 994</p>\" + \n                                    \"<p>hello@condes.co.uk</p>\" \n                    content.appendChild(div); \n                    break;\n                case 1:\n                    div.classList.add('hours-container');\n                    div.innerHTML = \"<h2 class='hours-header'>Opening Hours</h2>\" + \n                                    \"<p>Monday - Thursday: 9am - 11pm</p>\" +\n                                    \"<p>Friday - Saturday: 9am - 3am</p>\" + \n                                    \"<p>Sunday: 10am - 6pm</p>\" \n                    content.appendChild(div); \n                    break; \n            }\n        }\n    }\n    return {contactPageLoader}; \n})(); \n\n\n\n//# sourceURL=webpack:///./src/contact-page.js?");

/***/ }),

/***/ "./src/dom-selectors.js":
/*!******************************!*\
  !*** ./src/dom-selectors.js ***!
  \******************************/
/*! exports provided: content, quoteContainer, backgroundImage, imageNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"content\", function() { return content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quoteContainer\", function() { return quoteContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backgroundImage\", function() { return backgroundImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"imageNav\", function() { return imageNav; });\nconst content = document.querySelector('#content');\nconst quoteContainer = document.querySelector('#quote-container'); \nconst backgroundImage = document.querySelector('#background-image-container');\nconst imageNav = document.querySelector('#image-nav-container');\n\n\n\n//# sourceURL=webpack:///./src/dom-selectors.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\n/* harmony import */ var _dom_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-selectors */ \"./src/dom-selectors.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-page */ \"./src/contact-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n \n \n\nconst header = () => {\n\n    (function containerLoader(){\n        let div = document.createElement('div'); \n        div.id = \"nav-bar-container\";\n        _dom_selectors__WEBPACK_IMPORTED_MODULE_0__[\"content\"].appendChild(div); \n\n        for (let i = 0; i < 2; i++){\n            let navBar = document.querySelector('#nav-bar-container'); \n            let childDiv = document.createElement('div');\n            switch (i){\n                case 0: \n                    childDiv.id = \"nav-bar-left\"; \n                    navBar.appendChild(childDiv); \n                    break;\n                case 1: \n                    childDiv.id = \"nav-bar-right\";\n                    navBar.appendChild(childDiv); \n                    break;\n            }\n        }\n    })(); \n\n    (function logoLoader(){\n        const navBarLeft = document.querySelector('#nav-bar-left'); \n        const h1 = document.createElement(\"h1\");\n\n        h1.addEventListener('click', () => {\n            Object(_index__WEBPACK_IMPORTED_MODULE_3__[\"clearPage\"])();\n            _index__WEBPACK_IMPORTED_MODULE_3__[\"homePage\"].containerLoader();\n            _index__WEBPACK_IMPORTED_MODULE_3__[\"homePage\"].quotesLoader();\n            _index__WEBPACK_IMPORTED_MODULE_3__[\"homePage\"].imageNavLoader();\n        });\n        h1.textContent = \"Conde's.\";\n        navBarLeft.appendChild(h1);\n    })();\n\n    (function tabsLoader(){\n        const navBarRight = document.querySelector('#nav-bar-right');\n\n        for (let i = 0; i < 3; i++){\n            let p = document.createElement('p'); \n        \n            switch (i){\n                case 0:\n                    p.textContent = \"Menu\";\n                    p.addEventListener('click', (e) => {\n                        _menu_page__WEBPACK_IMPORTED_MODULE_2__[\"menuPage\"].menuPageLoader();\n                    });\n                    navBarRight.appendChild(p);\n                    break;\n                case 1: \n                    p.textContent = \"Contact\";\n                    p.addEventListener('click', (e) => {\n                        _contact_page__WEBPACK_IMPORTED_MODULE_1__[\"contactPage\"].contactPageLoader();\n                    });\n                    navBarRight.appendChild(p); \n                    break;\n            }\n        }\n    })();\n};\n\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: clearPage, homePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearPage\", function() { return clearPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homePage\", function() { return homePage; });\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-page */ \"./src/contact-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _dom_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-selectors */ \"./src/dom-selectors.js\");\n \n\n\n \n\nconst homePage = (() => {\n\n    const containerLoader = () => {\n        for (let i = 0; i < 3; i++){\n            let div = document.createElement('div'); \n        \n            switch (i){\n                case 0: \n                    div.id = \"quote-container\"; \n                    _dom_selectors__WEBPACK_IMPORTED_MODULE_3__[\"content\"].appendChild(div); \n                    break;\n                case 1: \n                    div.id = \"background-image-container\";\n                    _dom_selectors__WEBPACK_IMPORTED_MODULE_3__[\"content\"].appendChild(div); \n                    break;\n                case 2: \n                    div.id = \"image-nav-container\";\n                    _dom_selectors__WEBPACK_IMPORTED_MODULE_3__[\"content\"].appendChild(div); \n                    break; \n            }\n        }\n    }\n    \n    const quotesLoader = () => {   \n        const saucyQuote = document.querySelector('#quote-container');\n        \n        const p = document.createElement(\"p\"); \n        p.textContent = \"\\\"The sauciest spot in town\\\"\";\n        saucyQuote.appendChild(p);\n    }\n\n    const imageNavLoader = () => {\n        const imageNav = document.querySelector('#image-nav-container');\n        const backgroundImage = document.querySelector('#background-image-container');\n\n        // backgroundImage.classList.toggle('background-image-1');\n\n        const img = document.createElement(\"img\");\n        img.src = \"../assets/image_1.jpg\"; \n        backgroundImage.appendChild(img);\n\n        for (let i = 0; i < 3; i++){\n            let p = document.createElement('p'); \n        \n            switch (i){\n                case 0:\n                    p.textContent = \"Eat.\";\n                    imageNav.appendChild(p);\n                    break;\n                case 1: \n                    p.textContent = \"Work.\";\n                    imageNav.appendChild(p); \n                    break;\n                case 2: \n                    p.textContent = \"Dance.\";\n                    imageNav.appendChild(p); \n                    break;\n            }\n        }\n    }\n    \n    return {containerLoader, quotesLoader, imageNavLoader}\n})(); \n\nconst clearPage = () => {\n    let last = _dom_selectors__WEBPACK_IMPORTED_MODULE_3__[\"content\"].lastElementChild; \n\n    while (_dom_selectors__WEBPACK_IMPORTED_MODULE_3__[\"content\"].children.length > 1){\n        last.remove();\n        last = _dom_selectors__WEBPACK_IMPORTED_MODULE_3__[\"content\"].lastElementChild\n    }\n}; \n\n \n\n// HOW TO INVOKE ALL AT ONCE!?\nObject(_header__WEBPACK_IMPORTED_MODULE_2__[\"header\"])(); \nhomePage.containerLoader();\nhomePage.quotesLoader();\nhomePage.imageNavLoader();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/*! exports provided: menuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuPage\", function() { return menuPage; });\n/* harmony import */ var _dom_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-selectors */ \"./src/dom-selectors.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\nconst menuPage = (() => {\n\n    const menuPageLoader = () => {\n        Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"clearPage\"])(); \n\n        let div = document.createElement('div');\n        let img = document.createElement('img'); \n        \n        div.classList.add('menu-container');\n        img.src = \"../assets/image_2.jpg\";\n\n        _dom_selectors__WEBPACK_IMPORTED_MODULE_0__[\"content\"].appendChild(div);\n        div.appendChild(img); \n        \n    }\n    return {menuPageLoader} \n})(); \n\n \n\n//# sourceURL=webpack:///./src/menu-page.js?");

/***/ })

/******/ });