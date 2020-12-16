/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shooting_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shooting.png */ "./src/shooting.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_shooting_png__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Play\", sans-serif;\n  margin: 0;\n  background-position: center;\n  background-image: url(\"https://images.unsplash.com/photo-1587974112126-2d7cb8d9beda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80\");\n}\n\nbutton {\n  padding: 10px;\n  background-color: burlywood;\n  border-radius: 5px;\n  font-family: \"Play\", sans-serif;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: rgb(141, 192, 236);\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n}\n\n.player {\n  text-align: center;\n  font-size: 25px;\n  background-color: #83afff;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  padding: 7px;\n}\n\n.app {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n\n.spotify {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\niframe {\n  border-radius: 10px;\n}\n\n.PC {\n  /* background: url(\"https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwPTErb3QSXYF7mr4NkG682o\") */\n  /* no-repeat center center; */\n  background-size: cover;\n}\n\n.human {\n  /* background: url(\"https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwPfRHUDizkWflzrcxgE_lSA\") */\n  /* no-repeat center center; */\n  background-size: cover;\n}\n\n.line {\n  display: flex;\n}\n\n.block {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #889ade;\n}\n\n.PC .block {\n  cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), pointer;\n}\n\n.PC .block:hover {\n  border: 1px solid gray;\n  background-color: #d1e4f5;\n  box-shadow: 0px 1px 8px 4px #9da6d2;\n}\n\n.missed {\n  background-image: url(\"https://www.kotar-rishon-lezion.org.il/wp-content/uploads/2017/10/wave-ocean-animated-gif-7.gif\");\n  background-position: center;\n  background-size: cover;\n}\n\n.attacked {\n  background-color: initial;\n  background-image: url(\"https://cdn.lowgif.com/small/772e1a1c570fcf35-explosion-gif-transparent-background-4-gif-images-download.gif\");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.notification {\n  background-color: rgb(184, 184, 255);\n  width: 500px;\n  height: 200px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  flex-flow: column;\n  align-items: center;\n  gap: 40px;\n  margin-top: 30px;\n}\n\n.notification-wrapper {\n  width: 100%;\n  left: 0;\n  top: 0;\n  position: fixed;\n  background: rgba(255, 255, 255, 0.5);\n  z-index: 100;\n  height: 1000px;\n  display: flex;\n  justify-content: center;\n}\n\n.freeze {\n  background: rgba(255, 255, 255, 0.5);\n  z-index: 100;\n  height: 1000px;\n}\n\n.buttons-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.hide {\n  display: none;\n}\n\n@media (max-width: 872px) {\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n  .app {\n    gap: 20px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,SAAS;EACT,2BAA2B;EAC3B,yLAAyL;AAC3L;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;EAClB,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,6BAA6B;EAC7B,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,oGAAoG;EACpG,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,oGAAoG;EACpG,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,wDAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,mCAAmC;AACrC;;AAEA;EACE,wHAAwH;EACxH,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,qIAAqI;EACrI,wBAAwB;EACxB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,OAAO;EACP,MAAM;EACN,eAAe;EACf,oCAAoC;EACpC,YAAY;EACZ,cAAc;EACd,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,SAAS;EACX;AACF","sourcesContent":["body {\n  font-family: \"Play\", sans-serif;\n  margin: 0;\n  background-position: center;\n  background-image: url(\"https://images.unsplash.com/photo-1587974112126-2d7cb8d9beda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80\");\n}\n\nbutton {\n  padding: 10px;\n  background-color: burlywood;\n  border-radius: 5px;\n  font-family: \"Play\", sans-serif;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: rgb(141, 192, 236);\n}\n\n.title {\n  display: flex;\n  justify-content: center;\n}\n\n.player {\n  text-align: center;\n  font-size: 25px;\n  background-color: #83afff;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  padding: 7px;\n}\n\n.app {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n\n.spotify {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\niframe {\n  border-radius: 10px;\n}\n\n.PC {\n  /* background: url(\"https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwPTErb3QSXYF7mr4NkG682o\") */\n  /* no-repeat center center; */\n  background-size: cover;\n}\n\n.human {\n  /* background: url(\"https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwPfRHUDizkWflzrcxgE_lSA\") */\n  /* no-repeat center center; */\n  background-size: cover;\n}\n\n.line {\n  display: flex;\n}\n\n.block {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #889ade;\n}\n\n.PC .block {\n  cursor: url(\"./shooting.png\"), pointer;\n}\n\n.PC .block:hover {\n  border: 1px solid gray;\n  background-color: #d1e4f5;\n  box-shadow: 0px 1px 8px 4px #9da6d2;\n}\n\n.missed {\n  background-image: url(\"https://www.kotar-rishon-lezion.org.il/wp-content/uploads/2017/10/wave-ocean-animated-gif-7.gif\");\n  background-position: center;\n  background-size: cover;\n}\n\n.attacked {\n  background-color: initial;\n  background-image: url(\"https://cdn.lowgif.com/small/772e1a1c570fcf35-explosion-gif-transparent-background-4-gif-images-download.gif\");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.notification {\n  background-color: rgb(184, 184, 255);\n  width: 500px;\n  height: 200px;\n  border-radius: 10px;\n  display: flex;\n  justify-content: center;\n  flex-flow: column;\n  align-items: center;\n  gap: 40px;\n  margin-top: 30px;\n}\n\n.notification-wrapper {\n  width: 100%;\n  left: 0;\n  top: 0;\n  position: fixed;\n  background: rgba(255, 255, 255, 0.5);\n  z-index: 100;\n  height: 1000px;\n  display: flex;\n  justify-content: center;\n}\n\n.freeze {\n  background: rgba(255, 255, 255, 0.5);\n  z-index: 100;\n  height: 1000px;\n}\n\n.buttons-wrapper {\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.hide {\n  display: none;\n}\n\n@media (max-width: 872px) {\n  .block {\n    width: 30px;\n    height: 30px;\n  }\n  .app {\n    gap: 20px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/shooting.png":
/*!**************************!*\
  !*** ./src/shooting.png ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b90ca612aa3eb3285b9d68e7c93ea896.png");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_DomManipulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DomManipulation.js */ "./src/modules/DomManipulation.js");
/* harmony import */ var _modules_Gameflow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Gameflow.js */ "./src/modules/Gameflow.js");




const gameSetUp = () => {
  _modules_Gameflow_js__WEBPACK_IMPORTED_MODULE_2__.gameflow.populateBoards();
  (0,_modules_DomManipulation_js__WEBPACK_IMPORTED_MODULE_1__.domManipulation)().createBoards();
};

const startGame = () => {
  (0,_modules_DomManipulation_js__WEBPACK_IMPORTED_MODULE_1__.domManipulation)().addButtonsEventListeners();
};

const restartGame = () => {};

gameSetUp();
startGame();


/***/ }),

/***/ "./src/modules/DomManipulation.js":
/*!****************************************!*\
  !*** ./src/modules/DomManipulation.js ***!
  \****************************************/
/*! namespace exports */
/*! export domManipulation [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domManipulation": () => /* binding */ domManipulation
/* harmony export */ });
/* harmony import */ var _Gameflow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameflow.js */ "./src/modules/Gameflow.js");


function domManipulation() {
  const addButtonsEventListeners = () => {
    // play again button
    const rematch = document.querySelector(".rematch");
    const rematchGame = () => {
      document.querySelector(".buttons-wrapper").classList.remove("hide");
      const notification = document.querySelector(".notification-wrapper");
      notification.classList.add("hide");
      document.querySelector(".app").innerHTML = "";
      _Gameflow_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.resetBoards();
      _Gameflow_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.populateBoards();
      domManipulation().createBoards();
    };
    rematch.addEventListener("click", rematchGame);

    // start game button
    const startGameButton = document.querySelector(".start-game-button");
    const startGame = () => {
      addBoardEventListeners();
      document.querySelector(".buttons-wrapper").classList.add("hide");
    };
    startGameButton.addEventListener("click", startGame);

    // randomize button
    const randomizeButton = document.querySelector(".randomize");
    const randomize = () => {
      document.querySelector(".app").innerHTML = "";
      _Gameflow_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.resetBoards();
      _Gameflow_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.populateBoards();
      domManipulation().createBoards();
    };
    randomizeButton.addEventListener("click", randomize);
  };

  const addBoardEventListeners = () => {
    const handleClick = (e) => {
      _Gameflow_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.handleHumanAttack(
        Number(e.target.dataset.position[0]),
        Number(e.target.dataset.position[2]),
        () => e.target.removeEventListener("click", handleClick, true)
      );
    };
    const allPcBlocks = document.querySelectorAll(".PC .block");
    allPcBlocks.forEach((block) => {
      block.addEventListener("click", handleClick, true);
    });
  };
  const createBoards = () => {
    //Human Board
    const app = document.querySelector(".app");
    const humanBoard = document.createElement("div");
    humanBoard.classList.add("game-board", "human");
    const player = document.createElement("div");
    player.className = "player";
    player.innerHTML = "Player";
    humanBoard.append(player);
    const hB = _Gameflow_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.HumanGameboard.getGameboard();
    hB.forEach((i, index) => {
      const line = document.createElement("div");
      line.classList.add("line");
      i.forEach((item, ix) => {
        const block = document.createElement("div");
        block.className = "block";
        block.dataset.position = `${[index, ix]}`;
        if (item !== "") {
          block.style.backgroundColor = "#ffd7d7";
        }
        line.append(block);
      });
      humanBoard.append(line);
    });

    //PC Board
    const PCboard = document.createElement("div");
    PCboard.classList.add("game-board", "PC");
    const pc = document.createElement("div");
    pc.className = "player";
    pc.innerHTML = "PC";
    PCboard.append(pc);
    const pB = _Gameflow_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.PCGameboard.getGameboard();

    pB.forEach((i, index) => {
      const line = document.createElement("div");
      line.classList.add("line");

      i.forEach((item, ix) => {
        const block = document.createElement("div");
        block.className = "block";
        block.dataset.position = `${[index, ix]}`;
        line.append(block);
      });
      PCboard.append(line);
    });
    app.append(humanBoard, PCboard);
  };

  const updatePcBlock = (a, b) => {
    const g = _Gameflow_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.PCGameboard.getGameboard();
    const position = g[a][b];
    const node = document.querySelectorAll(`[data-position*="${a},${b}"]`);
    const target = node[node.length - 1];
    if (target === undefined) {
      return;
    }
    if (_Gameflow_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.PCGameboard.isPositionAttacked(a, b)) {
      target.classList.add("attacked");
    } else {
      target.classList.add("missed");
    }
  };
  const updateHumanBlock = (a, b) => {
    const target = document.querySelector(`[data-position*="${a},${b}"]`);
    if (target === null) {
      return;
    }
    if (_Gameflow_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.HumanGameboard.isPositionAttacked(a, b)) {
      target.classList.add("attacked");
      target.style.backgroundColor = "initial";
    } else {
      target.classList.add("missed");
    }
  };

  const displayNotification = (winner) => {
    const notification = document.querySelector(".notification-wrapper");
    notification.classList.remove("hide");
    if (winner === "Human") {
      document.querySelector("#winner").innerHTML = `Congratulations! You won!`;
    } else {
      document.querySelector("#winner").innerHTML = `You Lost! PC winns ;)`;
    }
  };
  return {
    addButtonsEventListeners,
    displayNotification,
    updatePcBlock,
    updateHumanBlock,
    createBoards,
  };
}


/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/*! namespace exports */
/*! export Gameboard [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => /* binding */ Gameboard
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/modules/Ship.js");


function Gameboard() {
  let ships = [];
  let gameboard = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  const isPositionAttacked = (a, b) => gameboard[a][b] === "attacked";
  const isPositionIsMissed = (a, b) => gameboard[a][b] === "missed";
  const positionsAvailable = (p) => {
    const g = getGameboard();
    const condition = (pos) => {
      if (pos[0] > 9 || pos[1] > 9) return false;
      else if (g[pos[0]][pos[1]] === "ship") return false;
      else {
        return true;
      }
    };
    let canBeAdded = p.every((pos) => {
      if (!condition(pos)) {
        return false;
      } else {
        return true;
      }
    });
    return canBeAdded;
  };

  const generateAllPositions = (position, length, vertical) => {
    let allPositions = [];
    for (let i = 0; i < length; i++) {
      if (vertical) {
        allPositions.push([position[0] + i, position[1]]);
      } else {
        allPositions.push([position[0], position[1] + i]);
      }
    }
    return allPositions;
  };

  const addShip = (id, length, allPositions, vertical) => {
    ships.push((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(id, length, allPositions, vertical));
    updateGameboard();
  };

  const randomTrueOrFalse = () => (random0to9() > 5 ? true : false);
  const random0to9 = () => Math.floor(Math.random() * (10 - 0)) + 0;
  const randomPosition = () => [random0to9(), random0to9()];
  const addShipsRandomly = () => {
    const shipsData = [
      {
        id: "Carrier",
        length: 5,
        position: randomPosition(),
        vertical: randomTrueOrFalse(),
      },
      {
        id: "Battleship",
        length: 4,
        position: randomPosition(),
        vertical: randomTrueOrFalse(),
      },
      {
        id: "Cruiser",
        length: 3,
        position: randomPosition(),
        vertical: randomTrueOrFalse(),
      },
      {
        id: "Submarine",
        length: 3,
        position: randomPosition(),
        vertical: randomTrueOrFalse(),
      },
      {
        id: "Destroyer",
        length: 2,
        position: randomPosition(),
        vertical: randomTrueOrFalse(),
      },
    ];

    shipsData.forEach((ship) => {
      const checkIfCanBeAddedToGameboard = () => {
        let allPositions = generateAllPositions(
          ship.position,
          ship.length,
          ship.vertical
        );
        if (positionsAvailable(allPositions)) {
          addShip(ship.id, ship.length, allPositions, ship.vertical);
        } else {
          ship.position = randomPosition();
          ship.vertical = randomTrueOrFalse();
          checkIfCanBeAddedToGameboard();
        }
      };
      checkIfCanBeAddedToGameboard();
    });
  };

  const updateGameboard = () => {
    ships.forEach((ship) => {
      let p = ship.getAllPosition();
      for (let i = 0; i < ship.getLength(); i++) {
        if (ship.getVertical()) {
          gameboard[p[i][0]][p[i][1]] = "ship";
        } else {
          gameboard[p[i][0]][p[i][1]] = "ship";
        }
      }
    });
  };

  const receiveAttack = (a, b) => {
    let p = gameboard[a][b];
    if (p === "") {
      gameboard[a][b] = "missed";
      return false;
    } else if (p === "ship") {
      gameboard[a][b] = "attacked";
      ships.map((ship) => {
        if (ship.p.filter((i) => i === [a, b])) {
          ship.hit([a, b]);
        }
      });
      return true;
    }
  };

  const haveAllSunk = () => ships.every((ship) => ship.hasSunk());
  const getGameboard = () => gameboard;
  const resetBoard = () => {
    gameboard = [
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
    ];
    ships = [];
  };
  const getShips = () => ships;
  return {
    addShip,
    getShips,
    resetBoard,
    addShipsRandomly,
    haveAllSunk,
    getGameboard,
    isPositionAttacked,
    isPositionIsMissed,
    receiveAttack,
  };
}


/***/ }),

/***/ "./src/modules/Gameflow.js":
/*!*********************************!*\
  !*** ./src/modules/Gameflow.js ***!
  \*********************************/
/*! namespace exports */
/*! export gameflow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameflow": () => /* binding */ gameflow
/* harmony export */ });
/* harmony import */ var _DomManipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomManipulation.js */ "./src/modules/DomManipulation.js");
/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ "./src/modules/Gameboard.js");
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player.js */ "./src/modules/Player.js");




const gameflow = (() => {
  const HumanGameboard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
  const PCGameboard = (0,_Gameboard_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
  const Human = (0,_Player_js__WEBPACK_IMPORTED_MODULE_2__.Player)("Human");
  const PC = (0,_Player_js__WEBPACK_IMPORTED_MODULE_2__.Player)("PC");
  let turn = false;
  const changeTurn = () => {
    turn = !turn;
    if (turn) {
      const newArr = PC.attack(1, 2, HumanGameboard);
      (0,_DomManipulation_js__WEBPACK_IMPORTED_MODULE_0__.domManipulation)().updateHumanBlock(newArr[0], newArr[1]);
      changeTurn();
      HumanGameboard.haveAllSunk() ? handleEndOfGame("PC") : null;
    } else {
      PCGameboard.haveAllSunk() ? handleEndOfGame("Human") : null;
    }
  };
  const handleHumanAttack = (a, b, removeListener) => {
    if (!turn) {
      Human.attack(a, b, PCGameboard);
      (0,_DomManipulation_js__WEBPACK_IMPORTED_MODULE_0__.domManipulation)().updatePcBlock(a, b);
      changeTurn();
      removeListener();
    }
  };
  const handleEndOfGame = (winner) => {
    (0,_DomManipulation_js__WEBPACK_IMPORTED_MODULE_0__.domManipulation)().displayNotification(winner);
  };
  const populateBoards = () => {
    HumanGameboard.addShipsRandomly();
    PCGameboard.addShipsRandomly();
    console.table(HumanGameboard.getGameboard());
    console.table(PCGameboard.getGameboard());
  };
  const resetBoards = () => {
    HumanGameboard.resetBoard();
    PCGameboard.resetBoard();
  };
  return {
    handleHumanAttack,
    resetBoards,
    populateBoards,
    changeTurn,
    Human,
    PC,
    PCGameboard,
    HumanGameboard,
  };
})();


/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/*! namespace exports */
/*! export Player [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => /* binding */ Player
/* harmony export */ });
function Player(type) {
  const attack = (a, b, oponent) => {
    if (type === "Human") {
      oponent.receiveAttack(a, b);
    } else {
      handlePcAttack(oponent);
    }
    return newArr;
  };
  const usedPositions = [];
  let newArr = [];
  let currentMutationOption;
  // 4 mutation functions
  const options = [
    (arr) => [arr[0] + 1, arr[1]],
    (arr) => [arr[0] - 1, arr[1]],
    (arr) => [arr[0], arr[1] + 1],
    (arr) => [arr[0], arr[1] - 1],
  ];
  // define random mutation option
  const randomArrMutation = () => {
    const randomNum0To3 = Math.floor(Math.random() * (4 - 0)) + 0;
    currentMutationOption = (arr) => options[randomNum0To3](arr);
  };
  randomArrMutation();

  const random = () => Math.floor(Math.random() * (10 - 0)) + 0;
  const randomArr = () => [random(), random()];
  const checkIfArrayWasUsed = () => {
    return usedPositions.some(
      (i) => JSON.stringify(i) === JSON.stringify(newArr)
    );
  };
  const randomPcAttack = (oponent) => {
    newArr = randomArr();
    if (checkIfArrayWasUsed()) {
      randomPcAttack(oponent);
    } else {
      const attackWasSuccesfull = oponent.receiveAttack(newArr[0], newArr[1]);
      if (attackWasSuccesfull) {
        usedPositions.push({ p: newArr, successful: true });
      } else {
        usedPositions.push({ p: newArr, successful: false });
      }
    }
  };
  const getNewPosition = (oponent) => {
    // -- attack based on previous attack --
    // keep track of current sucessfull attacks
    const currentSuccessfull = [];
    // checks if previous was succesfull
    if (usedPositions.length !== 0) {
      if (usedPositions[usedPositions.length - 1].successful) {
        currentSuccessfull.push(usedPositions[usedPositions.length - 1]);
        newArr = currentMutationOption(newArr);
        // check for for > 9 or < 0 and already called
        // if true try a different option randomlly
        if (
          newArr[0] > 9 ||
          newArr[0] < 0 ||
          newArr[1] > 9 ||
          newArr[1] < 0 ||
          checkIfArrayWasUsed()
        ) {
          randomPcAttack(oponent);
        } else {
          const attackWasSuccesfull = oponent.receiveAttack(
            newArr[0],
            newArr[1]
          );
          if (attackWasSuccesfull) {
            usedPositions.push({ p: newArr, successful: true });
          } else {
            usedPositions.push({ p: newArr, successful: false });
          }
          return;
        }
      } else {
        // continue with the same mutation option until its not sucessfull
        randomArrMutation();
        randomPcAttack(oponent);
      }
    } else {
      randomPcAttack(oponent);
    }
  };
  const handlePcAttack = (oponent) => {
    getNewPosition(oponent);
  };
  return {
    attack,
  };
}


/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/*! namespace exports */
/*! export Ship [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => /* binding */ Ship
/* harmony export */ });
const Ship = (id, length, p, vertical) => {
  // array of objects
  let ship = [];
  p.forEach((position) =>
    ship.push({
      id,
      position,
      hit: false,
    })
  );
  function hit(n) {
    ship.forEach((i) => {
      if (i.position[0] === n[0] && i.position[1] === n[1]) {
        i.hit = true;
      }
    });
  }
  function hasSunk() {
    return ship.every((i) => i.hit === true);
  }
  const getLength = () => length;
  const getVertical = () => vertical;
  const getAllPosition = () => p;
  return {
    p,
    ship,
    getVertical,
    getLength,
    getAllPosition,
    hasSunk,
    hit,
  };
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map