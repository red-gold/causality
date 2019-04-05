(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.utils"), require("cli-progress"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.utils", "cli-progress"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/log"] = factory(require("causal-net.utils"), require("cli-progress"));
	else
		root["@causalNet/log"] = factory(root["causal-net.utils"], root["cli-progress"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_utils__, __WEBPACK_EXTERNAL_MODULE_cli_progress__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/baseLogger.js":
/*!***************************!*\
  !*** ./src/baseLogger.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This BaseLogger class provided abstract class for extending new logger class
 * @class BaseLog
 */
class BaseLogger {
  constructor() {
    this.AcceptedLevels = {
      debug: 0,
      log: 1,
      warn: 2,
      error: 3
    };
    this.rAcceptedLevels = {
      0: 'debug',
      1: 'log',
      2: 'warn',
      3: 'error'
    };
    this.level = this.AcceptedLevels['debug'];
  }

  set Level(level) {
    if (this.AcceptedLevels[level] !== undefined) {
      this.level = this.AcceptedLevels[level];
    } else {
      throw Error(`${level} must be one of ${Object.keys(this.AcceptedLevels)}`);
    }
  }

  get Level() {
    return this.rAcceptedLevels[this.level];
  }

  connect() {
    throw Error('implement required');
  }

  log(message) {
    throw Error('implement required');
  }

  warn(message) {
    throw Error('implement required');
  }

  error(message) {
    throw Error('implement required');
  }

  debug(message) {
    throw Error('implement required');
  }

  groupBegin(name) {
    throw Error('implement required');
  }

  groupEnd() {
    throw Error('implement required');
  }

  progressBegin(range) {
    throw Error('implement required');
  }

  progressUpdate(message) {
    throw Error('implement required');
  }

  progressEnd(message) {
    throw Error('implement required');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BaseLogger);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: termLogger, LoggerMixins, BaseLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _termLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termLogger */ "./src/termLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "termLogger", function() { return _termLogger__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _logger_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.mixins */ "./src/logger.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerMixins", function() { return _logger_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _baseLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseLogger */ "./src/baseLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLogger", function() { return _baseLogger__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/logger.mixins.js":
/*!******************************!*\
  !*** ./src/logger.mixins.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLogger */ "./src/baseLogger.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This LoggerMixins class provides mixins for accquiring logger
 * @class LoggerMixins
 * @extends BaseClass
 * @example
 * [EXAMPLE ../examples/logger.mixins.babel.js]
 */

const LoggerMixins = BaseClass => class extends BaseClass {
  set Logger(logger) {
    causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["assert"].beInstanceOf(logger, _baseLogger__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.logger = logger;
  }

  get Logger() {
    if (!this.logger) {
      throw Error('logger is not set');
    }

    return this.logger;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LoggerMixins);

/***/ }),

/***/ "./src/prettyJson.js":
/*!***************************!*\
  !*** ./src/prettyJson.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JsonView; });
// origin code from https://github.com/lucygilbert/json-display/blob/master/json-display.js
// Copyright (c) 2017 Lucy Gilbert
class JsonView {
  constructor() {}

  static JSONDisplay(json, openLevelsArg, styleOptionsArg) {
    var DEFAULT_STYLE_OPTIONS = {
      root: {
        tag: 'pre',
        style: 'padding: 5px; font-size: 1rem;'
      },
      titleContainer: {
        tag: 'div',
        style: 'margin-bottom: 3px;'
      },
      title: {
        tag: 'span',
        style: 'cursor: pointer;'
      },
      titleText: {
        tag: 'span',
        style: ''
      },
      openButton: {
        tag: 'span',
        style: 'display: inline-block; margin: 0px 7px 0px 2px; border-top: 5px solid transparent; ' + 'border-bottom: 5px solid transparent; border-left: 5px solid black;'
      },
      contentsContainer: {
        tag: 'div',
        style: 'padding-left: 18px;'
      },
      keyValuePair: {
        tag: 'span',
        style: 'display: block; margin-bottom: 2px;'
      },
      key: {
        tag: 'span',
        style: 'color: darkblue;'
      },
      symbolValue: {
        tag: 'span',
        style: 'color: darkgreen;'
      },
      stringValue: {
        tag: 'span',
        style: 'color: crimson;'
      },
      numberValue: {
        tag: 'span',
        style: 'color: blue;'
      },
      booleanValue: {
        tag: 'span',
        style: 'color: blue;'
      },
      nullValue: {
        tag: 'span',
        style: 'color: blue;'
      }
    };
    var openLevels = isNaN(parseInt(openLevelsArg)) ? Infinity : parseInt(openLevelsArg);
    var styleOptions = typeof styleOptionsArg === 'object' ? mergeStyleOptions(DEFAULT_STYLE_OPTIONS, styleOptionsArg) : DEFAULT_STYLE_OPTIONS;

    if (typeof Object.assign != 'function') {
      Object.assign = function (target) {
        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }

        return to;
      };
    }

    function render() {
      var element = document.createElement(styleOptions.root.tag);
      element.style.cssText = styleOptions.root.style;

      if (json === null || json === undefined) {
        var voidElement = getValue(null);
        element.appendChild(voidElement);
      } else if (json instanceof Date) {
        var dateElement = getValue(json.toISOString());
        element.appendChild(dateElement);
      } else if (typeof json !== 'object') {
        var nonExpandableElement = getValue(json);
        element.appendChild(nonExpandableElement);
      } else {
        var title = Array.isArray(json) ? 'Array[' + json.length + ']' : 'Object';
        var thisLevelIsClosed = openLevels < 1;
        element.appendChild(getTitle(title, null, thisLevelIsClosed));
        element.appendChild(convertJsonToElements(json, 1));
      }

      return element;
    }

    function convertJsonToElements(json, index) {
      var thisLevelIsClosed = index > openLevels;
      var nextLevelIsClosed = index + 1 > openLevels;
      var container = getContentsContainer(thisLevelIsClosed);

      for (var key in json) {
        if (Array.isArray(json[key])) {
          container.appendChild(getTitle('Array[' + json[key].length + ']', key, nextLevelIsClosed));
          container.appendChild(convertJsonToElements(json[key], index + 1));
        } else if (json[key] === null || json[key] === undefined) {
          container.appendChild(getStandardPair(key, null));
        } else if (json[key] instanceof Date) {
          container.appendChild(getStandardPair(key, json[key].toISOString()));
        } else if (typeof json[key] === 'object') {
          container.appendChild(getTitle('Object', key, nextLevelIsClosed));
          container.appendChild(convertJsonToElements(json[key], index + 1));
        } else {
          container.appendChild(getStandardPair(key, json[key]));
        }
      }

      if (typeof Object.getOwnPropertySymbols === 'function') {
        Object.getOwnPropertySymbols(json).forEach(function (symbol) {
          container.appendChild(getStandardPair(symbol.toString(), json[symbol]));
        });
      }

      return container;
    }

    function getTitle(titleText, optionalKey, levelIsClosed) {
      var currentlyClosed = levelIsClosed;
      var containerElement = document.createElement(styleOptions.titleContainer.tag);
      containerElement.style.cssText = styleOptions.titleContainer.style;
      containerElement.setAttribute('data-test', 'titleContainer');
      var textElement = document.createElement(styleOptions.titleText.tag);
      var titleElement = document.createElement(styleOptions.title.tag);
      titleElement.style.cssText = styleOptions.title.style;
      textElement.style.cssText = styleOptions.titleText.style;
      titleElement.appendChild(getOpenButton(levelIsClosed));

      if (optionalKey) {
        textElement.appendChild(getKey(optionalKey));
      }

      textElement.appendChild(document.createTextNode(titleText));
      titleElement.appendChild(textElement);

      titleElement.onclick = function () {
        var openButton = titleElement.firstChild;
        var objectContents = titleElement.parentNode.nextSibling;
        objectContents.style.display = currentlyClosed ? 'block' : 'none';
        openButton.style.transform = currentlyClosed ? 'rotate(90deg)' : 'rotate(0deg)';
        currentlyClosed = !currentlyClosed;
      };

      containerElement.appendChild(titleElement);
      return containerElement;
    }

    function getOpenButton(levelIsClosed) {
      var buttonElement = document.createElement(styleOptions.openButton.tag);
      buttonElement.style.cssText = styleOptions.openButton.style;
      buttonElement.style.transform = levelIsClosed ? 'rotate(0deg)' : 'rotate(90deg)';
      return buttonElement;
    }

    function getContentsContainer(isClosed) {
      var containerElement = document.createElement(styleOptions.contentsContainer.tag);
      containerElement.setAttribute('data-test', 'contentsContainer');
      containerElement.style.cssText = styleOptions.contentsContainer.style;
      containerElement.style.display = isClosed ? 'none' : 'block';
      return containerElement;
    }

    function getStandardPair(key, value) {
      var pairElement = document.createElement(styleOptions.keyValuePair.tag);
      pairElement.style.cssText = styleOptions.keyValuePair.style;
      pairElement.appendChild(getKey(key));
      pairElement.appendChild(getValue(value));
      return pairElement;
    }

    function getKey(name) {
      var keyElement = document.createElement(styleOptions.key.tag);
      keyElement.style.cssText = styleOptions.key.style;
      keyElement.appendChild(document.createTextNode(name + ': '));
      return keyElement;
    }

    function getValue(value) {
      var valueElement;
      var nullType = 'object';

      switch (typeof value) {
        case 'symbol':
          valueElement = document.createElement(styleOptions.symbolValue.tag);
          valueElement.style.cssText = styleOptions.symbolValue.style;
          valueElement.appendChild(document.createTextNode(value.toString()));
          break;

        case 'string':
          valueElement = document.createElement(styleOptions.stringValue.tag);
          valueElement.style.cssText = styleOptions.stringValue.style;
          valueElement.appendChild(document.createTextNode('"' + value + '"'));
          break;

        case 'number':
          valueElement = document.createElement(styleOptions.numberValue.tag);
          valueElement.style.cssText = styleOptions.numberValue.style;
          valueElement.appendChild(document.createTextNode(value));
          break;

        case 'boolean':
          valueElement = document.createElement(styleOptions.booleanValue.tag);
          valueElement.style.cssText = styleOptions.booleanValue.style;
          valueElement.appendChild(document.createTextNode(value));
          break;

        case nullType:
          valueElement = document.createElement(styleOptions.nullValue.tag);
          valueElement.style.cssText = styleOptions.nullValue.style;
          valueElement.appendChild(document.createTextNode(value));
          break;
      }

      return valueElement;
    }

    function mergeStyleOptions(defaults, overrides) {
      var merged = {};

      for (var key in defaults) {
        merged[key] = Object.assign({}, defaults[key], overrides[key]);
      }

      return merged;
    }

    return render();
  }

}

/***/ }),

/***/ "./src/termLogger.js":
/*!***************************!*\
  !*** ./src/termLogger.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLogger */ "./src/baseLogger.js");
/* harmony import */ var _termLogger_mixins_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termLogger.mixins.node */ "./src/termLogger.mixins.node.js");
/* harmony import */ var _termLogger_mixins_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./termLogger.mixins.web */ "./src/termLogger.mixins.web.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_3__);




/**
 * This TermLogger provide isomorphic logger
 * { mixWith : { 'node': [LogNodeMixins], 'web': [WebNodeMixins] } }
 * @class TermLogger
 * @extends BaseLogger
 * @example
 * [EXAMPLE ../examples/log.babel.js]
 */

class TermLogger extends causal_net_utils__WEBPACK_IMPORTED_MODULE_3__["platform"].mixWith(_baseLogger__WEBPACK_IMPORTED_MODULE_0__["default"], {
  node: [_termLogger_mixins_node__WEBPACK_IMPORTED_MODULE_1__["default"]],
  web: [_termLogger_mixins_web__WEBPACK_IMPORTED_MODULE_2__["default"]]
}) {
  constructor() {
    super();
    /**@private { Array } stack of groups */

    this.groupStack = [];
  }

  groupBegin(name) {
    let group = {
      name,
      beginTime: new Date()
    };
    this.groupStack.push(group);
    let indentSpace = '';
    this.log('**********************************');
    this.log(`${indentSpace}${group.name}: begin at ${group.beginTime}`);
  }

  groupEnd() {
    if (this.groupStack.length > 0) {
      let group = this.groupStack.pop();
      let indentSpace = '';
      this.log(`${indentSpace}${group.name}: end after ${new Date() - group.beginTime} (ms)`);
      this.log('**********************************');
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TermLogger());

/***/ }),

/***/ "./src/termLogger.mixins.node.js":
/*!***************************************!*\
  !*** ./src/termLogger.mixins.node.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cli_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cli-progress */ "cli-progress");
/* harmony import */ var cli_progress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cli_progress__WEBPACK_IMPORTED_MODULE_0__);


const LogNodeMixins = LogClass => class extends LogClass {
  connect(channel) {
    this.currentBar = false;
  }

  log(message) {
    //TODO: make decorator 
    this.currentBar = false;

    if (this.level >= this.AcceptedLevels['log']) {
      return null;
    }

    console.log(message);
  }

  progressBegin(range) {
    this.processCounter += 1;
    this.currentBar = new cli_progress__WEBPACK_IMPORTED_MODULE_0__["Bar"]({}, cli_progress__WEBPACK_IMPORTED_MODULE_0__["Presets"].shades_classic);
    this.currentBar.setTotal(range);
  }

  progressUpdate(progressMessage) {
    if (!this.currentBar) {
      this.progressBegin();
    }

    this.processCounter += 1;
    this.currentBar.update(this.processCounter);
  }

  progressEnd() {
    this.currentBar.stop();
    this.processCounter = 0;
  }

  debug(message) {
    if (this.level >= this.AcceptedLevels['debug']) {
      return null;
    }

    console.debug(message);
  }

  warn(message) {
    if (this.level >= this.AcceptedLevels['warn']) {
      return null;
    }

    console.warn(message);
  }

  error(message) {
    if (this.level >= this.AcceptedLevels['error']) {
      return null;
    }

    console.error(message);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LogNodeMixins);

/***/ }),

/***/ "./src/termLogger.mixins.web.js":
/*!**************************************!*\
  !*** ./src/termLogger.mixins.web.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prettyJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prettyJson */ "./src/prettyJson.js");


const LogWebMixins = LogClass => class extends LogClass {
  connect(documentEl = null) {
    documentEl = documentEl || document.body;
    let node = document.createElement("ul");
    node.style.cssText = "list-style-type: none;";
    documentEl.appendChild(node);
    this.frameEl = documentEl;
    this.loggerEl = documentEl.getElementsByTagName("ul")[0];
    this.colorCode = {
      debug: '#f1f1f1',
      log: '#010101',
      warn: '#eae26e',
      error: '#ea6e78'
    };
  }

  scrollBottom(element = null) {
    element = element || this.frameEl;
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }

  progress(processMessage) {
    // let node = this.loggerEl.getElementsByTagName("li:nth-last-of-type(1)");
    let LINodes = this.loggerEl.getElementsByTagName("li");
    let node = LINodes[LINodes.length - 1];

    if (!node || node.classList.contains("logger-progress")) {
      //create new el
      node = document.createElement("li");
      node.classList.add("logger-progress");
      this.loggerEl.appendChild(node);
    }

    let jsonNode = _prettyJson__WEBPACK_IMPORTED_MODULE_0__["default"].JSONDisplay(processMessage);
    var date = new Date();
    node.innerHTML = `<p style="font-size: 12px; text-align:right">${date}</p>`;
    node.appendChild(jsonNode);
    this.scrollBottom();
  }

  log(message, style = '') {
    if (this.level >= this.AcceptedLevels['log']) {
      return null;
    }

    if (!this.loggerEl || !this.loggerEl.appendChild) {
      this.connect();
    }

    let node = document.createElement("li");
    node.style.cssText = 'border-bottom: 1px solid #dedede;';
    let jsonNode = _prettyJson__WEBPACK_IMPORTED_MODULE_0__["default"].JSONDisplay(message);
    var date = new Date();
    node.innerHTML = `<p style="font-size: 12px; text-align:right">${date}</p>`;
    jsonNode.style.cssText += ';' + style;
    node.appendChild(jsonNode);
    this.loggerEl.appendChild(node);
    this.scrollBottom();
    console.log(message);
  }

  debug(message) {
    if (this.level >= this.AcceptedLevels['debug']) {
      return null;
    }

    let style = 'color:' + this.colorCode['debug'];
    this.log(message, style);
  }

  warn(message) {
    if (this.level >= this.AcceptedLevels['warn']) {
      return null;
    }

    let style = 'color:' + this.colorCode['warn'];
    this.log(message, style);
  }

  error(message) {
    if (this.level >= this.AcceptedLevels['error']) {
      return null;
    }

    let style = 'color:' + this.colorCode['error'];
    this.log(message, style);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LogWebMixins);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "causal-net.utils":
/*!***********************************!*\
  !*** external "causal-net.utils" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_utils__;

/***/ }),

/***/ "cli-progress":
/*!*******************************!*\
  !*** external "cli-progress" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cli_progress__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9sb2dnZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3ByZXR0eUpzb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nZ2VyLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2dnZXIubWl4aW5zLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNsaS1wcm9ncmVzc1wiIl0sIm5hbWVzIjpbIkJhc2VMb2dnZXIiLCJjb25zdHJ1Y3RvciIsIkFjY2VwdGVkTGV2ZWxzIiwiZGVidWciLCJsb2ciLCJ3YXJuIiwiZXJyb3IiLCJyQWNjZXB0ZWRMZXZlbHMiLCJsZXZlbCIsIkxldmVsIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiY29ubmVjdCIsIm1lc3NhZ2UiLCJncm91cEJlZ2luIiwibmFtZSIsImdyb3VwRW5kIiwicHJvZ3Jlc3NCZWdpbiIsInJhbmdlIiwicHJvZ3Jlc3NVcGRhdGUiLCJwcm9ncmVzc0VuZCIsIkxvZ2dlck1peGlucyIsIkJhc2VDbGFzcyIsIkxvZ2dlciIsImxvZ2dlciIsImFzc2VydCIsImJlSW5zdGFuY2VPZiIsIkpzb25WaWV3IiwiSlNPTkRpc3BsYXkiLCJqc29uIiwib3BlbkxldmVsc0FyZyIsInN0eWxlT3B0aW9uc0FyZyIsIkRFRkFVTFRfU1RZTEVfT1BUSU9OUyIsInJvb3QiLCJ0YWciLCJzdHlsZSIsInRpdGxlQ29udGFpbmVyIiwidGl0bGUiLCJ0aXRsZVRleHQiLCJvcGVuQnV0dG9uIiwiY29udGVudHNDb250YWluZXIiLCJrZXlWYWx1ZVBhaXIiLCJrZXkiLCJzeW1ib2xWYWx1ZSIsInN0cmluZ1ZhbHVlIiwibnVtYmVyVmFsdWUiLCJib29sZWFuVmFsdWUiLCJudWxsVmFsdWUiLCJvcGVuTGV2ZWxzIiwiaXNOYU4iLCJwYXJzZUludCIsIkluZmluaXR5Iiwic3R5bGVPcHRpb25zIiwibWVyZ2VTdHlsZU9wdGlvbnMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJ0byIsImluZGV4IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibmV4dFNvdXJjZSIsIm5leHRLZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyZW5kZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3NzVGV4dCIsInZvaWRFbGVtZW50IiwiZ2V0VmFsdWUiLCJhcHBlbmRDaGlsZCIsIkRhdGUiLCJkYXRlRWxlbWVudCIsInRvSVNPU3RyaW5nIiwibm9uRXhwYW5kYWJsZUVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJ0aGlzTGV2ZWxJc0Nsb3NlZCIsImdldFRpdGxlIiwiY29udmVydEpzb25Ub0VsZW1lbnRzIiwibmV4dExldmVsSXNDbG9zZWQiLCJjb250YWluZXIiLCJnZXRDb250ZW50c0NvbnRhaW5lciIsImdldFN0YW5kYXJkUGFpciIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZvckVhY2giLCJzeW1ib2wiLCJ0b1N0cmluZyIsIm9wdGlvbmFsS2V5IiwibGV2ZWxJc0Nsb3NlZCIsImN1cnJlbnRseUNsb3NlZCIsImNvbnRhaW5lckVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0RWxlbWVudCIsInRpdGxlRWxlbWVudCIsImdldE9wZW5CdXR0b24iLCJnZXRLZXkiLCJjcmVhdGVUZXh0Tm9kZSIsIm9uY2xpY2siLCJmaXJzdENoaWxkIiwib2JqZWN0Q29udGVudHMiLCJwYXJlbnROb2RlIiwibmV4dFNpYmxpbmciLCJkaXNwbGF5IiwidHJhbnNmb3JtIiwiYnV0dG9uRWxlbWVudCIsImlzQ2xvc2VkIiwidmFsdWUiLCJwYWlyRWxlbWVudCIsImtleUVsZW1lbnQiLCJ2YWx1ZUVsZW1lbnQiLCJudWxsVHlwZSIsImRlZmF1bHRzIiwib3ZlcnJpZGVzIiwibWVyZ2VkIiwiVGVybUxvZ2dlciIsInBsYXRmb3JtIiwibWl4V2l0aCIsIm5vZGUiLCJMb2dOb2RlTWl4aW5zIiwid2ViIiwiTG9nV2ViTWl4aW5zIiwiZ3JvdXBTdGFjayIsImdyb3VwIiwiYmVnaW5UaW1lIiwicHVzaCIsImluZGVudFNwYWNlIiwicG9wIiwiTG9nQ2xhc3MiLCJjaGFubmVsIiwiY3VycmVudEJhciIsImNvbnNvbGUiLCJwcm9jZXNzQ291bnRlciIsImNsaVByb2dyZXNzIiwic2hhZGVzX2NsYXNzaWMiLCJzZXRUb3RhbCIsInByb2dyZXNzTWVzc2FnZSIsInVwZGF0ZSIsInN0b3AiLCJkb2N1bWVudEVsIiwiYm9keSIsImZyYW1lRWwiLCJsb2dnZXJFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY29sb3JDb2RlIiwic2Nyb2xsQm90dG9tIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicHJvZ3Jlc3MiLCJwcm9jZXNzTWVzc2FnZSIsIkxJTm9kZXMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsImpzb25Ob2RlIiwiZGF0ZSIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVB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QUtQLEtBQUwsSUFBYyxLQUFLTixjQUFMLENBQW9CLE9BQXBCLENBQWpCLEVBQThDO0FBQzFDLGFBQU8sSUFBUDtBQUNIOztBQUNELFFBQUltQyxLQUFLLEdBQUcsV0FBVyxLQUFLZ0gsU0FBTCxDQUFlLE9BQWYsQ0FBdkI7QUFDQSxTQUFLakosR0FBTCxDQUFTVyxPQUFULEVBQWtCc0IsS0FBbEI7QUFDSDs7QUEzRW1ELENBQXhEOztBQThFZXlGLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBLDhEOzs7Ozs7Ozs7OztBQ0FBLDBEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbG9nLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwiY2xpLXByb2dyZXNzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQudXRpbHNcIiwgXCJjbGktcHJvZ3Jlc3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwiY2xpLXByb2dyZXNzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIHJvb3RbXCJjbGktcHJvZ3Jlc3NcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpX3Byb2dyZXNzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIFRoaXMgQmFzZUxvZ2dlciBjbGFzcyBwcm92aWRlZCBhYnN0cmFjdCBjbGFzcyBmb3IgZXh0ZW5kaW5nIG5ldyBsb2dnZXIgY2xhc3NcbiAqIEBjbGFzcyBCYXNlTG9nXG4gKi9cbmNsYXNzIEJhc2VMb2dnZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5BY2NlcHRlZExldmVscyA9IHtkZWJ1ZzogMCwgbG9nOjEsIHdhcm46MiwgZXJyb3I6IDN9O1xuICAgICAgICB0aGlzLnJBY2NlcHRlZExldmVscyA9IHswOidkZWJ1ZycsIDE6ICdsb2cnLCAyOiAnd2FybicsIDM6ICdlcnJvcid9O1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXTtcbiAgICB9XG4gICAgc2V0IExldmVsKGxldmVsKXtcbiAgICAgICAgaWYodGhpcy5BY2NlcHRlZExldmVsc1tsZXZlbF0hPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdOyAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7bGV2ZWx9IG11c3QgYmUgb25lIG9mICR7T2JqZWN0LmtleXModGhpcy5BY2NlcHRlZExldmVscyl9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IExldmVsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJBY2NlcHRlZExldmVsc1t0aGlzLmxldmVsXTtcbiAgICB9XG5cbiAgICBjb25uZWN0KCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBsb2cobWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG4gICAgXG4gICAgd2FybihtZXNzYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbiAgICBcbiAgICBlcnJvcihtZXNzYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgZ3JvdXBCZWdpbihuYW1lKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGdyb3VwRW5kKCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBwcm9ncmVzc0JlZ2luKHJhbmdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIHByb2dyZXNzVXBkYXRlKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3NFbmQobWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VMb2dnZXI7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB0ZXJtTG9nZ2VyIH0gZnJvbSAnLi90ZXJtTG9nZ2VyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9nZ2VyTWl4aW5zIH0gZnJvbSAnLi9sb2dnZXIubWl4aW5zJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNlTG9nZ2VyIH0gZnJvbSAnLi9iYXNlTG9nZ2VyJztcblxuIiwiaW1wb3J0IHtkZWZhdWx0IGFzIEJhc2VMb2dnZXIgfSBmcm9tICcuL2Jhc2VMb2dnZXInO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG4vKipcbiAqIFRoaXMgTG9nZ2VyTWl4aW5zIGNsYXNzIHByb3ZpZGVzIG1peGlucyBmb3IgYWNjcXVpcmluZyBsb2dnZXJcbiAqIEBjbGFzcyBMb2dnZXJNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2xvZ2dlci5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IExvZ2dlck1peGlucyA9IChCYXNlQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlQ2xhc3N7XG4gICAgXG4gICAgc2V0IExvZ2dlcihsb2dnZXIpe1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKGxvZ2dlciwgQmFzZUxvZ2dlcik7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIH1cbiAgICBcbiAgICBnZXQgTG9nZ2VyKCl7XG4gICAgICAgIGlmKCF0aGlzLmxvZ2dlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbG9nZ2VyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXI7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyTWl4aW5zOyIsIi8vIG9yaWdpbiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2x1Y3lnaWxiZXJ0L2pzb24tZGlzcGxheS9ibG9iL21hc3Rlci9qc29uLWRpc3BsYXkuanNcbi8vIENvcHlyaWdodCAoYykgMjAxNyBMdWN5IEdpbGJlcnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25WaWV3e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIHN0YXRpYyBKU09ORGlzcGxheShqc29uLCBvcGVuTGV2ZWxzQXJnLCBzdHlsZU9wdGlvbnNBcmcpIHtcbiAgICAgICAgdmFyIERFRkFVTFRfU1RZTEVfT1BUSU9OUyA9IHtcbiAgICAgICAgICByb290OiB7IHRhZzogJ3ByZScsIHN0eWxlOiAncGFkZGluZzogNXB4OyBmb250LXNpemU6IDFyZW07JyB9LFxuICAgICAgICAgIHRpdGxlQ29udGFpbmVyOiB7IHRhZzogJ2RpdicsIHN0eWxlOiAnbWFyZ2luLWJvdHRvbTogM3B4OycgfSxcbiAgICAgICAgICB0aXRsZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXI7JyB9LFxuICAgICAgICAgIHRpdGxlVGV4dDogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICcnIH0sXG4gICAgICAgICAgb3BlbkJ1dHRvbjogeyBcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgc3R5bGU6ICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbjogMHB4IDdweCAwcHggMnB4OyBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7ICdcbiAgICAgICAgICAgICAgICAgKyAnYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDogNXB4IHNvbGlkIGJsYWNrOycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50c0NvbnRhaW5lcjogeyB0YWc6ICdkaXYnLCBzdHlsZTogJ3BhZGRpbmctbGVmdDogMThweDsnIH0sXG4gICAgICAgICAga2V5VmFsdWVQYWlyOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAycHg7JyB9LFxuICAgICAgICAgIGtleTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogZGFya2JsdWU7JyB9LFxuICAgICAgICAgIHN5bWJvbFZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBkYXJrZ3JlZW47JyB9LFxuICAgICAgICAgIHN0cmluZ1ZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBjcmltc29uOycgfSxcbiAgICAgICAgICBudW1iZXJWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgICAgYm9vbGVhblZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgICBudWxsVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgb3BlbkxldmVscyA9IGlzTmFOKHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpKSA/IEluZmluaXR5IDogcGFyc2VJbnQob3BlbkxldmVsc0FyZyk7XG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB0eXBlb2Ygc3R5bGVPcHRpb25zQXJnID09PSAnb2JqZWN0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbWVyZ2VTdHlsZU9wdGlvbnMoREVGQVVMVF9TVFlMRV9PUFRJT05TLCBzdHlsZU9wdGlvbnNBcmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IERFRkFVTFRfU1RZTEVfT1BUSU9OUztcbiAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICBcbiAgICAgICAgICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5yb290LnRhZyk7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnJvb3Quc3R5bGU7XG4gICAgXG4gICAgICAgICAgaWYgKGpzb24gPT09IG51bGwgfHwganNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgdm9pZEVsZW1lbnQgPSBnZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodm9pZEVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoanNvbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRlRWxlbWVudCA9IGdldFZhbHVlKGpzb24udG9JU09TdHJpbmcoKSk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGVFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFyIG5vbkV4cGFuZGFibGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbik7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vbkV4cGFuZGFibGVFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gQXJyYXkuaXNBcnJheShqc29uKSA/ICdBcnJheVsnICsganNvbi5sZW5ndGggKyAnXScgOiAnT2JqZWN0JztcbiAgICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IG9wZW5MZXZlbHMgPCAxO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChnZXRUaXRsZSh0aXRsZSwgbnVsbCwgdGhpc0xldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIDEpKTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIGluZGV4KSB7XG4gICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gaW5kZXggPiBvcGVuTGV2ZWxzO1xuICAgICAgICAgIHZhciBuZXh0TGV2ZWxJc0Nsb3NlZCA9IGluZGV4ICsgMSA+IG9wZW5MZXZlbHM7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRlbnRzQ29udGFpbmVyKHRoaXNMZXZlbElzQ2xvc2VkKTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbltrZXldKSkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ0FycmF5WycgKyBqc29uW2tleV0ubGVuZ3RoICsgJ10nLCBrZXksIG5leHRMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoanNvbltrZXldID09PSBudWxsIHx8IGpzb25ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBudWxsKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XS50b0lTT1N0cmluZygpKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnT2JqZWN0Jywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhqc29uKS5mb3JFYWNoKGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKHN5bWJvbC50b1N0cmluZygpLCBqc29uW3N5bWJvbF0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFRpdGxlKHRpdGxlVGV4dCwgb3B0aW9uYWxLZXksIGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgY3VycmVudGx5Q2xvc2VkID0gbGV2ZWxJc0Nsb3NlZDtcbiAgICAgICAgICB2YXIgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnRhZyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnN0eWxlO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAndGl0bGVDb250YWluZXInKTtcbiAgICAgICAgICB2YXIgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZVRleHQudGFnKTtcbiAgICAgICAgICB2YXIgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGUudGFnKTtcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZS5zdHlsZTtcbiAgICAgICAgICB0ZXh0RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlVGV4dC5zdHlsZTtcbiAgICBcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgaWYgKG9wdGlvbmFsS2V5KSB7XG4gICAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkob3B0aW9uYWxLZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGVUZXh0KSk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcbiAgICBcbiAgICAgICAgICB0aXRsZUVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcGVuQnV0dG9uID0gdGl0bGVFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgb2JqZWN0Q29udGVudHMgPSB0aXRsZUVsZW1lbnQucGFyZW50Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgIG9iamVjdENvbnRlbnRzLnN0eWxlLmRpc3BsYXkgPSBjdXJyZW50bHlDbG9zZWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICAgICAgb3BlbkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50bHlDbG9zZWQgPyAncm90YXRlKDkwZGVnKScgOiAncm90YXRlKDBkZWcpJztcbiAgICAgICAgICAgIGN1cnJlbnRseUNsb3NlZCA9ICFjdXJyZW50bHlDbG9zZWQ7XG4gICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnRhZyk7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm9wZW5CdXR0b24uc3R5bGU7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBsZXZlbElzQ2xvc2VkID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgICAgcmV0dXJuIGJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29udGVudHNDb250YWluZXIoaXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnRhZyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICdjb250ZW50c0NvbnRhaW5lcicpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAoaXNDbG9zZWQgPyAnbm9uZScgOiAnYmxvY2snKTtcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRTdGFuZGFyZFBhaXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHZhciBwYWlyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci50YWcpO1xuICAgICAgICAgIHBhaXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnN0eWxlO1xuICAgICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldEtleShrZXkpKTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICAgIHJldHVybiBwYWlyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRLZXkobmFtZSkge1xuICAgICAgICAgIHZhciBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5LnRhZyk7XG4gICAgICAgICAga2V5RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleS5zdHlsZTtcbiAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUgKyAnOiAnKSk7XG4gICAgICAgICAgcmV0dXJuIGtleUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgICB2YXIgdmFsdWVFbGVtZW50O1xuICAgICAgICAgIHZhciBudWxsVHlwZSA9ICdvYmplY3QnO1xuICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdcIicgKyB2YWx1ZSArICdcIicpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbnVsbFR5cGU6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bGxWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udWxsVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbHVlRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBtZXJnZVN0eWxlT3B0aW9ucyhkZWZhdWx0cywgb3ZlcnJpZGVzKSB7XG4gICAgICAgICAgdmFyIG1lcmdlZCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgbWVyZ2VkW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0c1trZXldLCBvdmVycmlkZXNba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIHJlbmRlcigpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VMb2dnZXIgfSBmcm9tICcuL2Jhc2VMb2dnZXInO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBMb2dOb2RlTWl4aW5zIH0gZnJvbSAnLi90ZXJtTG9nZ2VyLm1peGlucy5ub2RlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgTG9nV2ViTWl4aW5zIH0gZnJvbSAnLi90ZXJtTG9nZ2VyLm1peGlucy53ZWInO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBUZXJtTG9nZ2VyIHByb3ZpZGUgaXNvbW9ycGhpYyBsb2dnZXJcbiAqIHsgbWl4V2l0aCA6IHsgJ25vZGUnOiBbTG9nTm9kZU1peGluc10sICd3ZWInOiBbV2ViTm9kZU1peGluc10gfSB9XG4gKiBAY2xhc3MgVGVybUxvZ2dlclxuICogQGV4dGVuZHMgQmFzZUxvZ2dlclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2xvZy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgVGVybUxvZ2dlciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUxvZ2dlciwgXG4gICAgICAgIHsgbm9kZTpbTG9nTm9kZU1peGluc10sIFxuICAgICAgICAgIHdlYjpbTG9nV2ViTWl4aW5zXSB9ICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLyoqQHByaXZhdGUgeyBBcnJheSB9IHN0YWNrIG9mIGdyb3VwcyAqL1xuICAgICAgICB0aGlzLmdyb3VwU3RhY2sgPSBbXTtcbiAgICB9XG4gICAgXG4gICAgZ3JvdXBCZWdpbihuYW1lKXsgICBcbiAgICAgICAgbGV0IGdyb3VwID0ge25hbWUsIGJlZ2luVGltZTogbmV3IERhdGUoKX07XG4gICAgICAgIHRoaXMuZ3JvdXBTdGFjay5wdXNoKGdyb3VwKTtcbiAgICAgICAgbGV0IGluZGVudFNwYWNlID0gJyc7XG4gICAgICAgIHRoaXMubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqJyk7XG4gICAgICAgIHRoaXMubG9nKGAke2luZGVudFNwYWNlfSR7Z3JvdXAubmFtZX06IGJlZ2luIGF0ICR7Z3JvdXAuYmVnaW5UaW1lfWApO1xuICAgIH1cbiAgICBncm91cEVuZCgpe1xuICAgICAgICBpZih0aGlzLmdyb3VwU3RhY2subGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBsZXQgZ3JvdXAgPSB0aGlzLmdyb3VwU3RhY2sucG9wKCk7XG4gICAgICAgICAgICBsZXQgaW5kZW50U3BhY2UgPSAnJztcbiAgICAgICAgICAgIHRoaXMubG9nKGAke2luZGVudFNwYWNlfSR7Z3JvdXAubmFtZX06IGVuZCBhZnRlciAkeyhuZXcgRGF0ZSgpIC0gZ3JvdXAuYmVnaW5UaW1lKX0gKG1zKWApO1xuICAgICAgICAgICAgdGhpcy5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKionKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBUZXJtTG9nZ2VyKCk7IiwiaW1wb3J0ICogYXMgY2xpUHJvZ3Jlc3MgZnJvbSAnY2xpLXByb2dyZXNzJztcblxuY29uc3QgTG9nTm9kZU1peGlucyA9IChMb2dDbGFzcyk9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNze1xuICAgIGNvbm5lY3QoY2hhbm5lbCl7XG4gICAgICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSl7XG4gICAgICAgIC8vVE9ETzogbWFrZSBkZWNvcmF0b3IgXG4gICAgICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlO1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBwcm9ncmVzc0JlZ2luKHJhbmdlKXtcbiAgICAgICAgdGhpcy5wcm9jZXNzQ291bnRlciArPSAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIgPSBuZXcgY2xpUHJvZ3Jlc3MuQmFyKHt9LCBjbGlQcm9ncmVzcy5QcmVzZXRzLnNoYWRlc19jbGFzc2ljKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyLnNldFRvdGFsKHJhbmdlKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3NVcGRhdGUocHJvZ3Jlc3NNZXNzYWdlKXtcbiAgICAgICAgaWYoIXRoaXMuY3VycmVudEJhcil7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmVnaW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2Nlc3NDb3VudGVyICs9IDE7XG4gICAgICAgIHRoaXMuY3VycmVudEJhci51cGRhdGUodGhpcy5wcm9jZXNzQ291bnRlcik7XG4gICAgfVxuICAgIHByb2dyZXNzRW5kKCl7XG4gICAgICAgIHRoaXMuY3VycmVudEJhci5zdG9wKCk7XG4gICAgICAgIHRoaXMucHJvY2Vzc0NvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBkZWJ1ZyhtZXNzYWdlKXtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHdhcm4obWVzc2FnZSl7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ3dhcm4nXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZXJyb3IobWVzc2FnZSl7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2Vycm9yJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dOb2RlTWl4aW5zOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBKc29uVmlld30gZnJvbSAnLi9wcmV0dHlKc29uJztcbmNvbnN0IExvZ1dlYk1peGlucyA9IChMb2dDbGFzcyk9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNze1xuICAgIGNvbm5lY3QoZG9jdW1lbnRFbD1udWxsKXtcbiAgICAgICAgZG9jdW1lbnRFbCA9IGRvY3VtZW50RWx8fGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBcImxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcIjtcbiAgICAgICAgZG9jdW1lbnRFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgdGhpcy5mcmFtZUVsID0gZG9jdW1lbnRFbDtcbiAgICAgICAgdGhpcy5sb2dnZXJFbCA9IGRvY3VtZW50RWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1bFwiKVswXTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSB7IGRlYnVnOiAnI2YxZjFmMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZzogJyMwMTAxMDEnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuOiAnI2VhZTI2ZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICcjZWE2ZTc4JyB9O1xuICAgIH1cbiAgICBzY3JvbGxCb3R0b20oZWxlbWVudD1udWxsKXtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5mcmFtZUVsO1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIHByb2dyZXNzKHByb2Nlc3NNZXNzYWdlKXtcbiAgICAgICAgLy8gbGV0IG5vZGUgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGk6bnRoLWxhc3Qtb2YtdHlwZSgxKVwiKTtcbiAgICAgICAgbGV0IExJTm9kZXMgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XG4gICAgICAgIGxldCBub2RlID0gTElOb2Rlc1tMSU5vZGVzLmxlbmd0aC0xXTtcbiAgICAgICAgaWYoIW5vZGUgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2dnZXItcHJvZ3Jlc3NcIikpe1xuICAgICAgICAgICAgLy9jcmVhdGUgbmV3IGVsXG4gICAgICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VyLXByb2dyZXNzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShwcm9jZXNzTWVzc2FnZSk7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSwgc3R5bGU9Jycpe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLmxvZ2dlckVsIHx8ICF0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKXtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSAnYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7JzsgICAgICAgXG4gICAgICAgIGxldCBqc29uTm9kZSA9IEpzb25WaWV3LkpTT05EaXNwbGF5KG1lc3NhZ2UpO1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgICAgICBqc29uTm9kZS5zdHlsZS5jc3NUZXh0ICs9ICc7JytzdHlsZTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBzdHlsZSA9ICdjb2xvcjonICsgdGhpcy5jb2xvckNvZGVbJ2RlYnVnJ107XG4gICAgICAgIHRoaXMubG9nKG1lc3NhZ2UsIHN0eWxlKTsgICAgICBcbiAgICB9XG5cbiAgICB3YXJuKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ3dhcm4nXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3R5bGUgPSAnY29sb3I6JyArIHRoaXMuY29sb3JDb2RlWyd3YXJuJ107XG4gICAgICAgIHRoaXMubG9nKG1lc3NhZ2UsIHN0eWxlKTtcbiAgICB9XG5cbiAgICBlcnJvcihtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydlcnJvciddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdHlsZSA9ICdjb2xvcjonICsgdGhpcy5jb2xvckNvZGVbJ2Vycm9yJ107XG4gICAgICAgIHRoaXMubG9nKG1lc3NhZ2UsIHN0eWxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dXZWJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpX3Byb2dyZXNzX187Il0sInNvdXJjZVJvb3QiOiIifQ==