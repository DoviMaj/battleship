/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\nh3 {\n  margin-left: 220px;\n  padding: 30px;\n}\n.app {\n  display: flex;\n  gap: 138px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.PC {\n  /* width: 200px; */\n  background: /*linear-gradient(rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), */ url(\"https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwPTErb3QSXYF7mr4NkG682o\")\n    no-repeat center center;\n  background-size: cover;\n}\n.human {\n  background: /* linear-gradient(rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), */ url(\"https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwPfRHUDizkWflzrcxgE_lSA\")\n    no-repeat center center;\n  background-size: cover;\n}\n\n.line {\n  display: flex;\n}\n.block {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #ddd;\n  cursor: pointer;\n}\n.block:hover {\n  border: 1px solid red;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,6EAA6E;AAC/E;AACA;EACE,kBAAkB;EAClB,aAAa;AACf;AACA;EACE,aAAa;EACb,UAAU;EACV,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB;2BACyB;EACzB,sBAAsB;AACxB;AACA;EACE;2BACyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,qBAAqB;AACvB","sourcesContent":["body {\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n}\nh3 {\n  margin-left: 220px;\n  padding: 30px;\n}\n.app {\n  display: flex;\n  gap: 138px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.PC {\n  /* width: 200px; */\n  background: /*linear-gradient(rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), */ url(\"https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwPTErb3QSXYF7mr4NkG682o\")\n    no-repeat center center;\n  background-size: cover;\n}\n.human {\n  background: /* linear-gradient(rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)), */ url(\"https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwPfRHUDizkWflzrcxgE_lSA\")\n    no-repeat center center;\n  background-size: cover;\n}\n\n.line {\n  display: flex;\n}\n.block {\n  width: 30px;\n  height: 30px;\n  border: 1px solid #ddd;\n  cursor: pointer;\n}\n.block:hover {\n  border: 1px solid red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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
/*!************************************************************************!*
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
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

/***/ "./src/style.css":
/*!***********************!*
  !*** ./src/style.css ***!
  \***********************/
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
/*!****************************************************************************!*
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./src/components/DOM.js":
/*!*******************************!*
  !*** ./src/components/DOM.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domManipulation": () => /* binding */ domManipulation
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");


const domManipulation = () => {
  const createBoards = () => {
    //Human Board
    const app = document.querySelector(".app");
    const humanBoard = document.createElement("div");
    humanBoard.classList.add("game-board", "human");
    const hB = _index_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.HumanGameboard.getGameboard();
    hB.forEach((i, index) => {
      const line = document.createElement("div");
      line.classList.add("line");
      i.forEach((item, ix) => {
        const block = document.createElement("div");
        block.className = "block";
        block.dataset.position = `${[index, ix]}`;
        if (item !== "") {
          block.style.backgroundColor = "gray";
        }
        block.id = `${[index, ix]}`;
        line.append(block);
      });
      humanBoard.append(line);
    });

    //PC Board
    const PCboard = document.createElement("div");
    PCboard.classList.add("game-board", "PC");
    const pB = _index_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.PCGameboard.getGameboard();

    pB.forEach((i, index) => {
      const line = document.createElement("div");
      line.classList.add("line");

      i.forEach((item, ix) => {
        const block = document.createElement("div");
        block.className = "block";
        block.dataset.position = `${[index, ix]}`;
        if (item === "attacked") {
          block.style.backgroundColor = "gray";
        }
        if (item === "missed") {
          block.style.backgroundColor = "red";
        }

        const handleClick = (e) => {
          _index_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.PCGameboard.receiveAttack(
            Number(block.dataset.position[0]),
            Number(block.dataset.position[2])
          );
          e.target.removeEventListener("click", handleClick, true);
          updatePcBlock(
            e.target,
            Number(block.dataset.position[0]),
            Number(block.dataset.position[2])
          );
          _index_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.changeTurn();
        };

        block.addEventListener("click", handleClick, true);
        line.append(block);
      });
      PCboard.append(line);
    });
    app.append(humanBoard, PCboard);
  };

  const updatePcBlock = (target, a, b) => {
    const position = _index_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.PCGameboard.getGameboard()[a][b];
    if (position === "attacked") {
      target.style.backgroundColor = "red";
    } else {
      target.style.backgroundColor = "blue";
    }
  };
  const updateHumanBlock = (a, b) => {
    const target = document.getElementById(`${a},${b}`);
    const position = _index_js__WEBPACK_IMPORTED_MODULE_0__.gameflow.HumanGameboard.getGameboard()[a][b];
    if (position === "ship") {
      target.style.backgroundColor = "red";
    } else {
      target.style.backgroundColor = "blue";
    }
  };
  return {
    updateHumanBlock,
    createBoards,
  };
};




/***/ }),

/***/ "./src/components/Gameboard.js":
/*!*************************************!*
  !*** ./src/components/Gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => /* binding */ Gameboard
/* harmony export */ });
/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship.js */ "./src/components/Ship.js");


const Gameboard = () => {
  const ships = [];
  const gameboard = [
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

  const addShip = (id, length, position, vertical) => {
    const positionsAvailable = (p) => {
      const g = getGameboard();
      let canBeAdded;
      p.every((pos) => {
        g[pos[0]][pos[1]] === "" ? (canBeAdded = true) : (canBeAdded = false);
      });
      return canBeAdded;
    };

    // store position of each part of ship
    let allPositions = [];
    for (let i = 0; i < length; i++) {
      if (vertical) {
        allPositions.push([position[0] + i, position[1]]);
      } else {
        allPositions.push([position[0], position[1] + i]);
      }
    }
    if (positionsAvailable(allPositions)) {
      ships.push((0,_Ship_js__WEBPACK_IMPORTED_MODULE_0__.Ship)(id, length, allPositions, vertical));
      updateGameboard();
    }
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
      return "missed";
    } else if (p !== "missed") {
      gameboard[a][b] = "attacked";
      ships.map((ship) => {
        if (ship.p.filter((i) => i === [a, b]) ? true : false) {
          ship.hit([a, b]);
          return "missed";
        }
      });
    }
  };

  const haveAllSunk = () => ships.every((ship) => ship.hasSunk());

  const getGameboard = () => gameboard;
  return {
    haveAllSunk,
    addShip,
    getGameboard,
    receiveAttack,
  };
};


/***/ }),

/***/ "./src/components/Player.js":
/*!**********************************!*
  !*** ./src/components/Player.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => /* binding */ Player
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/components/DOM.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/index.js");


// player can attack other player gameboard (x)
// AI can make random moves (x)
// AI cant attack same cordinate twice (x)
// only allow play when turn is his ()

const Player = (type) => {
  const attack = (a, b) => {
    if (type === "Human") {
      _index_js__WEBPACK_IMPORTED_MODULE_1__.gameflow.PCGameboard.receiveAttack(a, b);
    } else {
      const random = () => Math.floor(Math.random() * (10 - 0)) + 0;
      const g = _index_js__WEBPACK_IMPORTED_MODULE_1__.gameflow.HumanGameboard.getGameboard();
      const randomC = () => [random(), random()];
      let newArr = [];
      // call recursivelly until value is available
      const newRandomArray = () => {
        const board = _index_js__WEBPACK_IMPORTED_MODULE_1__.gameflow.HumanGameboard.getGameboard();
        console.log(newArr[0], newArr[1]);
        newArr = randomC();
        if (
          board[newArr[0]][newArr[1]] === "attacked" ||
          board[newArr[0]][newArr[1]] === "missed"
        ) {
          newRandomArray();
          console.log(newArr, g);
        } else {
          _index_js__WEBPACK_IMPORTED_MODULE_1__.gameflow.Human.attack(newArr[0], newArr[1]);
          (0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.domManipulation)().updateHumanBlock(newArr[0], newArr[1]);
          _index_js__WEBPACK_IMPORTED_MODULE_1__.gameflow.changeTurn();
        }
      };
      newRandomArray();
    }
  };
  return {
    attack,
  };
};




/***/ }),

/***/ "./src/components/Ship.js":
/*!********************************!*
  !*** ./src/components/Ship.js ***!
  \********************************/
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
  const getShipId = () => id;
  const getVertical = () => vertical;
  const getAllPosition = () => p;
  return {
    p,
    ship,
    getVertical,
    getLength,
    getShipId,
    getAllPosition,
    hasSunk,
    hit,
  };
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameflow": () => /* binding */ gameflow
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DOM.js */ "./src/components/DOM.js");
/* harmony import */ var _components_Player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Player.js */ "./src/components/Player.js");
/* harmony import */ var _components_Gameboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Gameboard.js */ "./src/components/Gameboard.js");





// gameflow module cant have any methods of its own
const gameflow = (() => {
  let turn = false;
  const changeTurn = () => {
    turn = !turn;
    if (turn) {
      PC.attack();
    }
  };
  const HumanGameboard = (0,_components_Gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();
  HumanGameboard.addShip("Carrier", 5, [0, 0], true);
  HumanGameboard.addShip("Battleship", 4, [3, 3], false);
  HumanGameboard.addShip("Cruiser", 3, [7, 0], true);
  HumanGameboard.addShip("Submarine", 3, [0, 4], false);
  HumanGameboard.addShip("Destroyer", 2, [0, 8], true);
  const PCGameboard = (0,_components_Gameboard_js__WEBPACK_IMPORTED_MODULE_3__.Gameboard)();
  PCGameboard.addShip("Carrier", 5, [0, 0], true);
  PCGameboard.addShip("Battleship", 4, [3, 4], false);
  PCGameboard.addShip("Cruiser", 3, [7, 0], true);
  PCGameboard.addShip("Submarine", 3, [0, 4], false);
  PCGameboard.addShip("Destroyer", 2, [0, 8], true);
  const Human = (0,_components_Player_js__WEBPACK_IMPORTED_MODULE_2__.Player)("Human");
  const PC = (0,_components_Player_js__WEBPACK_IMPORTED_MODULE_2__.Player)("PC");
  return {
    changeTurn,
    Human,
    HumanGameboard,
    PCGameboard,
  };
})();

(0,_components_DOM_js__WEBPACK_IMPORTED_MODULE_1__.domManipulation)().createBoards();



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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=main.js.map