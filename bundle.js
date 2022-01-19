/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\n@media only screen and (max-width: 1200px) {\\n    .grid-container{\\n        grid-template-columns: repeat(10, 2.5rem) !important; \\n        grid-template-rows: repeat(10, 2.5rem)  !important;\\n    }\\n}\\n\\n@media only screen and (max-width: 1030px) {\\n    .grid-container{\\n        grid-template-columns: repeat(10, 2.25rem) !important; \\n        grid-template-rows: repeat(10, 2.25rem)  !important;\\n    }\\n    .gameboard-flex{\\n        gap: 4rem !important;\\n    }\\n}\\n\\n@media only screen and (max-width: 930px) {\\n    .grid-container{\\n        grid-template-columns: repeat(10, 2.25rem) !important; \\n        grid-template-rows: repeat(10, 2.25rem)  !important;\\n    }\\n}\\n\\n@media only screen and (max-width: 370px) {\\n    .grid-container{\\n        grid-template-columns: repeat(10, 1.8rem) !important; \\n        grid-template-rows: repeat(10, 1.8rem)  !important;\\n    }\\n}\\n\\n.grid-container{\\n    width: auto;\\n    display: grid;\\n    border-style: solid;\\n    border-color: black;\\n    grid-template-columns: repeat(10, 3rem);\\n    grid-template-rows: repeat(10, 3rem);\\n}\\n\\n.coordinate{\\n    border-style: solid;\\n    border-color: black;\\n    border-width: 1px;\\n}\\n\\n.gameboard-flex{\\n    display: flex;\\n    justify-content: center;\\n    gap: 12rem;\\n    flex-wrap: wrap;\\n}\\n\\n.display-wrap{\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.change-axis-container{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.change-axis-button{\\n    padding: 10px;\\n    margin: 20px;\\n    font-size: 1.5rem;\\n}\\n\\n.place-ship-container{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.ship-buttons > *{\\n    margin: 20px;\\n    padding: 5px;\\n    font-size: 30px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/displayControl/attackPage.js":
/*!******************************************!*\
  !*** ./src/displayControl/attackPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayControl\": () => (/* binding */ displayControl)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n\n\nconst displayControl = (() => {\n\n  const displayWrap = document.querySelector(\".display-wrap\");\n  let grids = [];\n  let players = [];\n  const allShotsOnBoard = [];\n\n  function render(playerGameboard, computerGameboard) {\n    players = [playerGameboard, computerGameboard];\n    generateGrids();\n    renderGameboard(playerGameboard, grids[0], false);\n\n  }\n\n  function renderGameboard(gameboard, gameboardGrid, isComputer) {\n    const gameboardShips = gameboard.getShips();\n    for (let i = 0; i < gameboardShips.length; i++) {\n      for (let k = 0; k < gameboardShips[i].ship.getShipArray().length; k++) {\n        let coordColour;\n        if (gameboardShips[i].ship.isSunk()) {\n          coordColour = 'rgb(44,44,44)';\n        }\n        if (gameboardShips[i].ship.getShipArray()[k].isHit && !(gameboardShips[i].ship.isSunk())) {\n          coordColour = 'red';\n        } else if (!isComputer && !(gameboardShips[i].ship.isSunk())) {\n          coordColour = 'blue';\n        }\n        for (let m = 0; m < gameboardGrid.children.length; m++) {\n          const coords = [parseInt(gameboardGrid.children[m].dataset.xCoordinate),\n            parseInt(gameboardGrid.children[m].dataset.yCoordinate)];\n          if (gameboardGrid.children[m].dataset.xCoordinate == gameboardShips[i].coords[k][0] &&\n                        gameboardGrid.children[m].dataset.yCoordinate == gameboardShips[i].coords[k][1]) {\n            gameboardGrid.children[m].style.backgroundColor = coordColour;\n          } else if (gameboard.isShotMissed(coords)) {\n            gameboardGrid.children[m].style.backgroundColor = \"rgb(211,211,211)\";\n          }\n        }\n      }\n    }\n  }\n\n  function generateGrids() {\n    const gameboardFlex = document.createElement('div');\n    gameboardFlex.classList.add(\"gameboard-flex\");\n    displayWrap.appendChild(gameboardFlex);\n    const playerGridContainer = document.createElement(\"div\");\n    playerGridContainer.classList.add(\"grid-container\");\n    playerGridContainer.id = \"player-grid\";\n    const computerGridContainer = document.createElement(\"div\");\n    computerGridContainer.classList.add(\"grid-container\");\n    computerGridContainer.id = \"computer-grid\";\n    gameboardFlex.appendChild(playerGridContainer);\n    gameboardFlex.appendChild(computerGridContainer);\n    grids = [playerGridContainer, computerGridContainer];\n    for (let i = 0; i < grids.length; i++) {\n      let xCoord = 0;\n      let yCoord = 0;\n      for (let j = 0; j < 100; j++) {\n        const newCoord = document.createElement(\"div\");\n        newCoord.classList.add(\"coordinate\");\n        if (xCoord % 10 == 0 && xCoord !== 0) {\n          xCoord = 0;\n          yCoord++;\n        }\n        newCoord.dataset.xCoordinate = xCoord;\n        newCoord.dataset.yCoordinate = yCoord;\n        xCoord++;\n        grids[i].appendChild(newCoord);\n      }\n    }\n  }\n\n  function bindAttackEvents() {\n    for (let i = 0; i < grids[1].children.length; i++) {\n      grids[1].children[i].addEventListener(\"mouseover\", setHighlightColor);\n      grids[1].children[i].addEventListener(\"mouseleave\", removeHighlightColor);\n      grids[1].children[i].addEventListener(\"click\", displayAttack);\n      for (let j = 0; j < allShotsOnBoard.length; j++) {\n        const coords = [grids[1].children[i].dataset.xCoordinate, grids[1].children[i].dataset.yCoordinate];\n        if (allShotsOnBoard[j][0] == coords[0] && allShotsOnBoard[j][1] == coords[1]) {\n          grids[1].children[i].removeEventListener(\"mouseover\", setHighlightColor);\n          grids[1].children[i].removeEventListener(\"mouseleave\", removeHighlightColor);\n          grids[1].children[i].removeEventListener(\"click\", displayAttack);\n        }\n      }\n    }\n  }\n\n  function setHighlightColor(e) {\n    if (!e.target.style.backgroundColor ||\n            e.target.style.backgroundColor == \"unset\") {\n      e.target.style.backgroundColor = \"rgb(227, 227, 227)\";\n    }\n  }\n\n  function removeHighlightColor(e) {\n    if (e.target.style.backgroundColor == \"rgb(227, 227, 227)\") {\n      e.target.style.backgroundColor = \"unset\";\n    }\n  }\n\n  function unbindAttackEvents() {\n    for (let i = 0; i < grids[1].children.length; i++) {\n      grids[1].children[i].removeEventListener(\"mouseover\", setHighlightColor);\n      grids[1].children[i].removeEventListener(\"mouseleave\", removeHighlightColor);\n      grids[1].children[i].removeEventListener(\"click\", displayAttack);\n    }\n  }\n\n  function displayAttack(e) {\n    allShotsOnBoard.push([e.target.dataset.xCoordinate, e.target.dataset.yCoordinate]);\n    const attackCoords = [parseInt(e.target.dataset.xCoordinate), parseInt(e.target.dataset.yCoordinate)];\n    ___WEBPACK_IMPORTED_MODULE_0__.game.registerHit(attackCoords);\n    renderGameboard(players[1], grids[1], true);\n  }\n\n  return {render, renderGameboard, generateGrids, bindAttackEvents, unbindAttackEvents};\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/displayControl/attackPage.js?");

/***/ }),

/***/ "./src/displayControl/placeShipDisplay.js":
/*!************************************************!*\
  !*** ./src/displayControl/placeShipDisplay.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"placeShipDisplay\": () => (/* binding */ placeShipDisplay)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _attackPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attackPage.js */ \"./src/displayControl/attackPage.js\");\n\n\n\n\n\nconst placeShipDisplay = (() => {\n\n  let selectedShipBtn;\n  let orientationSelected = \"horizontal\";\n  let grids;\n  let shipBtns;\n  let mainGrid;\n  const displayWrap = document.querySelector(\".display-wrap\");\n  const highlightElements = [];\n\n\n  function renderPlaceShip(playerGameboard) {\n    generateAxisSwitchBtn();\n    _attackPage_js__WEBPACK_IMPORTED_MODULE_1__.displayControl.generateGrids();\n    grids = document.querySelectorAll(\".grid-container\");\n    grids[1].style.display = 'none';\n    mainGrid = grids[0];\n    generateShipPlaceButtons();\n    for (let i = 0; i < mainGrid.children.length; i++) {\n      mainGrid.children[i].addEventListener(\"mouseleave\", (e) => { removeShipOutline(playerGameboard, e); });\n      mainGrid.children[i].addEventListener(\"mouseover\", (e) => { displayShipOutline(playerGameboard, e); });\n    }\n  }\n\n  function removeShipOutline(e) {\n    for (let i = 0; i < highlightElements.length; i++) {\n      if (highlightElements[i].style.backgroundColor == \"green\" || highlightElements[i].style.backgroundColor == \"red\") {\n        highlightElements[i].style.backgroundColor = \"unset\";\n      }\n    }\n  }\n\n  function placeShipDOM(playerGameboard, e) {\n    const parsedCoords = [parseInt(e.target.dataset.xCoordinate), parseInt(e.target.dataset.yCoordinate)];\n    if (!(playerGameboard.shipExists(parsedCoords, selectedShipBtn.dataset.size, orientationSelected))) {\n      playerGameboard.placeShip(parsedCoords, selectedShipBtn.dataset.size, orientationSelected);\n      _attackPage_js__WEBPACK_IMPORTED_MODULE_1__.displayControl.renderGameboard(playerGameboard, mainGrid, false);\n      switchShip(playerGameboard);\n    }\n  }\n\n  function switchShip(playerGameboard) {\n    if (playerGameboard.getShips().length > 4) {\n      _index_js__WEBPACK_IMPORTED_MODULE_0__.game.switchPage();\n    } else {\n      selectedShipBtn.remove();\n      if (shipBtns.indexOf(selectedShipBtn) == shipBtns.length - 1) {\n        selectedShipBtn = shipBtns[0];\n      } else {\n        selectedShipBtn = shipBtns[shipBtns.indexOf(selectedShipBtn) + 1];\n      }\n    }\n  }\n\n  function displayShipOutline(playerGameboard, e) {\n    const size = parseInt(selectedShipBtn.dataset.size);\n    let validPlacement = false;\n    const placementCoords = [parseInt(e.target.dataset.xCoordinate), parseInt(e.target.dataset.yCoordinate)];\n    const highlightCoords = (playerGameboard.getCoordinates(placementCoords, size, orientationSelected));\n    for (let i = 0; i < mainGrid.children.length; i++) {\n      for (let k = 0; k < highlightCoords.length; k++) {\n        if (mainGrid.children[i].dataset.xCoordinate == highlightCoords[k][0] &&\n                    mainGrid.children[i].dataset.yCoordinate == highlightCoords[k][1] &&\n                    mainGrid.children[i].style.backgroundColor !== \"blue\") {\n          if (playerGameboard.isValidPlacement(placementCoords, size, orientationSelected) &&\n                        !(playerGameboard.shipExists(placementCoords, size, orientationSelected))) {\n            validPlacement = true;\n            mainGrid.children[i].style.backgroundColor = \"green\";\n          } else {\n            validPlacement = false;\n            mainGrid.children[i].style.backgroundColor = \"red\";\n          }\n          highlightElements.push(mainGrid.children[i]);\n        }\n      }\n    }\n    if (validPlacement) {\n      e.target.addEventListener(\"click\", (e) => { placeShipDOM(playerGameboard, e); });\n    }\n  }\n\n  function generateAxisSwitchBtn() {\n    const changeAxisCtn = document.createElement(\"div\");\n    changeAxisCtn.classList.add(\"change-axis-container\");\n    const changeAxisBtn = document.createElement(\"button\");\n    changeAxisBtn.classList.add('change-axis-button');\n    changeAxisBtn.textContent = \"Horizontal\";\n    changeAxisBtn.addEventListener(\"click\", (e) => {\n      if (orientationSelected == \"horizontal\") {\n        orientationSelected = \"vertical\";\n        e.target.textContent = \"Vertical\";\n      } else {\n        orientationSelected = \"horizontal\";\n        e.target.textContent = \"Horizontal\";\n      }\n    });\n    changeAxisCtn.appendChild(changeAxisBtn);\n    displayWrap.appendChild(changeAxisCtn);\n  }\n\n  function generateShipPlaceButtons() {\n    const placeShipCtn = document.createElement(\"div\");\n    placeShipCtn.classList.add(\"place-ship-container\");\n    const shipButtonCtn = document.createElement(\"div\");\n    shipButtonCtn.classList.add(\"ship-buttons\");\n    placeShipCtn.appendChild(shipButtonCtn);\n    const carrierBtn = document.createElement(\"button\");\n    carrierBtn.textContent = \"Carrier\";\n    carrierBtn.dataset.size = \"5\";\n    const battleshipBtn = document.createElement(\"button\");\n    battleshipBtn.textContent = \"Battleship\";\n    battleshipBtn.dataset.size = \"4\";\n    const subBtn = document.createElement(\"button\");\n    subBtn.textContent = \"Submarine\";\n    subBtn.dataset.size = \"3\";\n    const destroyerBtn = document.createElement(\"button\");\n    destroyerBtn.textContent = \"Destroyer\";\n    destroyerBtn.dataset.size = \"3\";\n    const cruiserBtn = document.createElement(\"button\");\n    cruiserBtn.textContent = \"Crusier\";\n    cruiserBtn.dataset.size = \"2\";\n    shipBtns = [carrierBtn, battleshipBtn, subBtn, destroyerBtn, cruiserBtn];\n    shipBtns.forEach((shipBtn) => {\n      shipBtn.type = 'radio';\n      shipButtonCtn.appendChild(shipBtn);\n      shipBtn.addEventListener(\"click\", (e) => {\n        selectShip(e);\n      });\n    });\n    carrierBtn.click();\n    displayWrap.appendChild(placeShipCtn);\n  }\n\n  function selectShip(e) {\n    selectedShipBtn = e.target;\n  }\n\n  return {renderPlaceShip};\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/displayControl/placeShipDisplay.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gameboard\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ \"./src/shipFactory.js\");\n\n\nconst Gameboard = (() => {\n  const ships = [];\n  const missedShots = [];\n\n  function getShips() {\n    return ships;\n  }\n\n  function isValidPlacement(placementCoordinates, length, orientation) {\n    const parsedCoords = [parseInt(placementCoordinates[0]), parseInt(placementCoordinates[1])];\n    const parsedLength = parseInt(length - 1);\n    if (orientation == \"horizontal\") {\n      if ((parsedCoords[0] + parsedLength) < 10) {\n        return true;\n      }\n      return false;\n    } else {\n      if ((parsedCoords[1] + parsedLength) < 10) {\n        return true;\n      }\n      return false;\n    }\n  }\n\n  function placeShip(placementCoordinates, length, orientation) {\n    const newShip = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__.ShipFactory)(length);\n    if (isValidPlacement(placementCoordinates, length, orientation)) {\n      const newShipCoords = getCoordinates(placementCoordinates, length, orientation);\n      ships.push({ship: newShip, coords: newShipCoords});\n    } else {\n      return false;\n    }\n  }\n\n  function getCoordinates(placementCoordinates, length, orientation) {\n    const shipCoordinates = [];\n    const parsedCoords = [parseInt(placementCoordinates[0]), parseInt(placementCoordinates[1])];\n    for (let i = 0; i < length; i++) {\n      if (orientation == \"horizontal\") {\n        shipCoordinates.push([parsedCoords[0] + i, parsedCoords[1]]);\n      } else {\n        shipCoordinates.push([parsedCoords[0], parsedCoords[1] + i]);\n      }\n    }\n    return shipCoordinates;\n  }\n\n  function isShotMissed(attackCoords) {\n    for (let i = 0; i < missedShots.length; i++) {\n      if (missedShots[i][0] == attackCoords[0] && missedShots[i][1] == attackCoords[1]) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  function receiveAttack(targetCoords) {\n    let hit;\n    ships.forEach((shipElement) => {\n      for (let i = 0; i < shipElement.coords.length; i++) {\n        if (shipElement.coords[i].every((val, index) => val === targetCoords[index])) {\n          shipElement.ship.hit(i);\n          hit = true;\n        }\n      }\n    });\n    if (!hit) {\n      missedShots.push(targetCoords);\n    }\n  }\n\n  function getSunkShips() {\n    const sunkShips = [];\n    ships.forEach((shipElement) => {\n      if (shipElement.ship.isSunk()) {\n        sunkShips.push(shipElement);\n      }\n    });\n    return sunkShips;\n  }\n\n  function allSunk() {\n    for (let i = 0; i < ships.length; i++) {\n      if (!ships[i].ship.isSunk()) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  function coordinateExists(newShipCoord) {\n    for (let i = 0; i < ships.length; i++) {\n      const allCoords = ships[i].coords;\n      for (let k = 0; k < allCoords.length; k++) {\n        if (allCoords[k][0] === newShipCoord[0] && allCoords[k][1] === newShipCoord[1]) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n\n  function getMissedShots() {\n    return missedShots;\n  }\n\n  function shipExists(placementCoordinates, length, orientation) {\n    for (let i = 0; i < length; i++) {\n      if (orientation == \"horizontal\") {\n        if (coordinateExists([placementCoordinates[0] + i, placementCoordinates[1]])) {\n          return true;\n        }\n      }\n      if (orientation == \"vertical\") {\n        if (coordinateExists([placementCoordinates[0], placementCoordinates[1] + i])) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n\n  return {placeShip, getMissedShots, receiveAttack, getShips, allSunk, isShotMissed, isValidPlacement, getSunkShips, getCoordinates, shipExists};\n});\n\n\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"game\": () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _displayControl_attackPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayControl/attackPage.js */ \"./src/displayControl/attackPage.js\");\n/* harmony import */ var _displayControl_placeShipDisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayControl/placeShipDisplay.js */ \"./src/displayControl/placeShipDisplay.js\");\n\n\n\n\nconst game = (() => {\n\n  const displayWrap = document.querySelector(\".display-wrap\");\n  let currentPage = null;\n  const computerPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Computer)();\n  const player = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)(\"Test Name\");\n  let currentPlayer;\n\n  function gameSetup() {\n    computerPlayer.setEnemyBoard(player.gameboard);\n    player.setEnemyBoard(computerPlayer.gameboard);\n    computerPlayer.placeAllShips();\n    _displayControl_placeShipDisplay_js__WEBPACK_IMPORTED_MODULE_2__.placeShipDisplay.renderPlaceShip(player.gameboard);\n    currentPage = _displayControl_placeShipDisplay_js__WEBPACK_IMPORTED_MODULE_2__.placeShipDisplay;\n    currentPlayer = player;\n  }\n\n  function computerTurn() {\n    _displayControl_attackPage_js__WEBPACK_IMPORTED_MODULE_1__.displayControl.unbindAttackEvents();\n    currentPlayer.attack();\n    clearPage();\n    _displayControl_attackPage_js__WEBPACK_IMPORTED_MODULE_1__.displayControl.render(player.gameboard, computerPlayer.gameboard);\n    switchPlayer();\n  }\n\n  function registerHit(attackCoords) {\n    if (computerPlayer.gameboard.allSunk()) {\n      console.log(\"hello\");\n      clearPage();\n    } else {\n      if (attackCoords) {\n        currentPlayer.attack(attackCoords);\n      } else {\n        currentPlayer.attack();\n      }\n      switchPlayer();\n    }\n  }\n\n  function switchPlayer() {\n    if (computerPlayer.gameboard.allSunk() || player.gameboard.allSunk()) {\n      clearPage();\n    }\n    if (currentPlayer == player) {\n      currentPlayer = computerPlayer;\n      computerTurn();\n    } else {\n      currentPlayer = player;\n      _displayControl_attackPage_js__WEBPACK_IMPORTED_MODULE_1__.displayControl.bindAttackEvents();\n    }\n  }\n\n  function clearPage() {\n    displayWrap.innerHTML = '';\n  }\n\n  function switchPage() {\n    if (currentPage == _displayControl_placeShipDisplay_js__WEBPACK_IMPORTED_MODULE_2__.placeShipDisplay) {\n      clearPage();\n      _displayControl_attackPage_js__WEBPACK_IMPORTED_MODULE_1__.displayControl.render(player.gameboard, computerPlayer.gameboard);\n      currentPage = _displayControl_attackPage_js__WEBPACK_IMPORTED_MODULE_1__.displayControl;\n      _displayControl_attackPage_js__WEBPACK_IMPORTED_MODULE_1__.displayControl.bindAttackEvents();\n    }\n  }\n\n  return {gameSetup, switchPage, registerHit};\n})();\n\ngame.gameSetup();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player),\n/* harmony export */   \"Computer\": () => (/* binding */ Computer)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst Player = ((name) => {\n\n  let enemyBoard;\n  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();\n\n  function getName() { return name; }\n\n  function setEnemyBoard(enemy) { enemyBoard = enemy; }\n\n  function getEnemyBoard() { return enemyBoard; }\n\n  function attack(coordinates) {\n    enemyBoard.receiveAttack(coordinates);\n  }\n\n  return {gameboard, getEnemyBoard, getName, attack, setEnemyBoard};\n});\n\nconst Computer = (() => {\n  const computerPlayer = Player(\"Computer\");\n  const allShots = [];\n\n  function alreadyShot(coordinates) {\n    for (let i = 0; i < allShots.length; i++) {\n      if (allShots[i][0] == coordinates[0] && allShots[i][1] == coordinates[1]) {\n        return true;\n      }\n    }\n  }\n\n  function generateRandomOrientation() {\n    if (Math.round(Math.random()) == 0) {\n      return \"horizontal\";\n    }\n    return \"vertical\";\n\n  }\n\n  function placeShip(length) {\n    let foundShip = false;\n    let randomCoord;\n    let randomOrient;\n    while (foundShip == false) {\n      randomCoord = generateRandomCoordinates();\n      randomOrient = generateRandomOrientation();\n      if (computerPlayer.gameboard.isValidPlacement(randomCoord, length, randomOrient) === true &&\n            computerPlayer.gameboard.shipExists(randomCoord, length, randomOrient) === false) {\n        foundShip = true;\n      }\n    }\n    computerPlayer.gameboard.placeShip(randomCoord, length, randomOrient);\n  }\n\n  function placeAllShips() {\n    const carrier = placeShip(5);\n    const battleship = placeShip(4);\n    const submarine = placeShip(3);\n    const cruiser = placeShip(3);\n    const destroyer = placeShip(2);\n  }\n\n  function generateRandomCoordinates() {\n    let coordinates;\n    coordinates = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];\n    return coordinates;\n  }\n\n  function attack() {\n    let coordinates;\n    do {\n      coordinates = generateRandomCoordinates();\n    } while (alreadyShot(coordinates));\n    allShots.push(coordinates);\n    computerPlayer.attack(coordinates);\n  }\n\n  return {...computerPlayer, attack, placeAllShips, allShots};\n});\n\n\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShipFactory\": () => (/* binding */ ShipFactory)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\nconst ShipFactory = ((length) => {\n  const ShipArray = makeShip();\n\n  function isSunk() {\n    let sunk = true;\n    for (let i = 0; i < ShipArray.length; i++) {\n      if (ShipArray[i].isHit == false) {\n        sunk = false;\n      }\n    }\n    return sunk;\n  }\n\n  const getShipArray = () => ShipArray;\n\n  function makeShip() {\n    const tempShipArray = [];\n    for (let i = 0; i < length; i++) {\n      tempShipArray[i] = {position: i, isHit: false};\n    }\n    return tempShipArray;\n  }\n\n  const getLength = () => length;\n\n  function hit(hitPosition) {\n    for (let i = 0; i <= ShipArray.length; i++) {\n      if (i == hitPosition) {\n        ShipArray[i].isHit = true;\n      }\n    }\n  }\n  return {getShipArray, isSunk, hit, getLength};\n});\n\n\n\n\n//# sourceURL=webpack://battleship/./src/shipFactory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;