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
 * This class provided the 
 * @class BaseLog
 */
class BaseLogger {
  constructor() {
    this.AcceptedLevels = {
      debug: 0,
      log: 1,
      warning: 2,
      error: 3
    };
    this.rAcceptedLevels = {
      0: 'debug',
      1: 'log',
      2: 'warning',
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



const LoggerMixins = BasedClass => class extends BasedClass {
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
 */

class TermLogger extends causal_net_utils__WEBPACK_IMPORTED_MODULE_3__["platform"].mixWith(_baseLogger__WEBPACK_IMPORTED_MODULE_0__["default"], {
  node: [_termLogger_mixins_node__WEBPACK_IMPORTED_MODULE_1__["default"]],
  web: [_termLogger_mixins_web__WEBPACK_IMPORTED_MODULE_2__["default"]]
}) {
  constructor() {
    super();
    this.groupStack = [];
  }

  plot(data) {}

  groupBegin(name) {
    let group = {
      name,
      beginTime: new Date()
    };
    this.groupStack.push(group);
    let indentSpace = '';
    this.log(`${indentSpace}${group.name}: begin at ${group.beginTime}`);
  }

  groupEnd() {
    if (this.groupStack.length > 0) {
      let group = this.groupStack.pop();
      let indentSpace = '';
      this.log(`${indentSpace}${group.name}: end after ${new Date() - group.beginTime} (ms)`);
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
    this.currentBar = false;

    if (this.level >= this.AcceptedLevels['debug']) {
      return null;
    }

    console.debug(message);
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

  log(message) {
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
    node.appendChild(jsonNode);
    this.loggerEl.appendChild(node);
    this.scrollBottom();
    console.log(message);
  }

  debug(message) {
    if (this.level >= this.AcceptedLevels['debug']) {
      return null;
    } //no show on web screen;        


    console.debug(message);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9sb2dnZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3ByZXR0eUpzb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nZ2VyLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2dnZXIubWl4aW5zLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNsaS1wcm9ncmVzc1wiIl0sIm5hbWVzIjpbIkJhc2VMb2dnZXIiLCJjb25zdHJ1Y3RvciIsIkFjY2VwdGVkTGV2ZWxzIiwiZGVidWciLCJsb2ciLCJ3YXJuaW5nIiwiZXJyb3IiLCJyQWNjZXB0ZWRMZXZlbHMiLCJsZXZlbCIsIkxldmVsIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiY29ubmVjdCIsIm1lc3NhZ2UiLCJncm91cEJlZ2luIiwibmFtZSIsImdyb3VwRW5kIiwicHJvZ3Jlc3NCZWdpbiIsInJhbmdlIiwicHJvZ3Jlc3NVcGRhdGUiLCJwcm9ncmVzc0VuZCIsIkxvZ2dlck1peGlucyIsIkJhc2VkQ2xhc3MiLCJMb2dnZXIiLCJsb2dnZXIiLCJhc3NlcnQiLCJiZUluc3RhbmNlT2YiLCJKc29uVmlldyIsIkpTT05EaXNwbGF5IiwianNvbiIsIm9wZW5MZXZlbHNBcmciLCJzdHlsZU9wdGlvbnNBcmciLCJERUZBVUxUX1NUWUxFX09QVElPTlMiLCJyb290IiwidGFnIiwic3R5bGUiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlIiwidGl0bGVUZXh0Iiwib3BlbkJ1dHRvbiIsImNvbnRlbnRzQ29udGFpbmVyIiwia2V5VmFsdWVQYWlyIiwia2V5Iiwic3ltYm9sVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIm51bWJlclZhbHVlIiwiYm9vbGVhblZhbHVlIiwibnVsbFZhbHVlIiwib3BlbkxldmVscyIsImlzTmFOIiwicGFyc2VJbnQiLCJJbmZpbml0eSIsInN0eWxlT3B0aW9ucyIsIm1lcmdlU3R5bGVPcHRpb25zIiwiYXNzaWduIiwidGFyZ2V0IiwiVHlwZUVycm9yIiwidG8iLCJpbmRleCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm5leHRTb3VyY2UiLCJuZXh0S2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicmVuZGVyIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNzc1RleHQiLCJ2b2lkRWxlbWVudCIsImdldFZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJEYXRlIiwiZGF0ZUVsZW1lbnQiLCJ0b0lTT1N0cmluZyIsIm5vbkV4cGFuZGFibGVFbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwidGhpc0xldmVsSXNDbG9zZWQiLCJnZXRUaXRsZSIsImNvbnZlcnRKc29uVG9FbGVtZW50cyIsIm5leHRMZXZlbElzQ2xvc2VkIiwiY29udGFpbmVyIiwiZ2V0Q29udGVudHNDb250YWluZXIiLCJnZXRTdGFuZGFyZFBhaXIiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmb3JFYWNoIiwic3ltYm9sIiwidG9TdHJpbmciLCJvcHRpb25hbEtleSIsImxldmVsSXNDbG9zZWQiLCJjdXJyZW50bHlDbG9zZWQiLCJjb250YWluZXJFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGV4dEVsZW1lbnQiLCJ0aXRsZUVsZW1lbnQiLCJnZXRPcGVuQnV0dG9uIiwiZ2V0S2V5IiwiY3JlYXRlVGV4dE5vZGUiLCJvbmNsaWNrIiwiZmlyc3RDaGlsZCIsIm9iamVjdENvbnRlbnRzIiwicGFyZW50Tm9kZSIsIm5leHRTaWJsaW5nIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsImJ1dHRvbkVsZW1lbnQiLCJpc0Nsb3NlZCIsInZhbHVlIiwicGFpckVsZW1lbnQiLCJrZXlFbGVtZW50IiwidmFsdWVFbGVtZW50IiwibnVsbFR5cGUiLCJkZWZhdWx0cyIsIm92ZXJyaWRlcyIsIm1lcmdlZCIsIlRlcm1Mb2dnZXIiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJub2RlIiwiTG9nTm9kZU1peGlucyIsIndlYiIsIkxvZ1dlYk1peGlucyIsImdyb3VwU3RhY2siLCJwbG90IiwiZGF0YSIsImdyb3VwIiwiYmVnaW5UaW1lIiwicHVzaCIsImluZGVudFNwYWNlIiwicG9wIiwiTG9nQ2xhc3MiLCJjaGFubmVsIiwiY3VycmVudEJhciIsImNvbnNvbGUiLCJwcm9jZXNzQ291bnRlciIsImNsaVByb2dyZXNzIiwic2hhZGVzX2NsYXNzaWMiLCJzZXRUb3RhbCIsInByb2dyZXNzTWVzc2FnZSIsInVwZGF0ZSIsInN0b3AiLCJkb2N1bWVudEVsIiwiYm9keSIsImZyYW1lRWwiLCJsb2dnZXJFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2Nyb2xsQm90dG9tIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicHJvZ3Jlc3MiLCJwcm9jZXNzTWVzc2FnZSIsIkxJTm9kZXMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsImpzb25Ob2RlIiwiZGF0ZSIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNB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Q0FBQ3ZJLEtBQVIsQ0FBY1ksT0FBZDtBQUNIOztBQXJEbUQsQ0FBeEQ7O0FBd0RlK0csMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9sb2cubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJjbGktcHJvZ3Jlc3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC51dGlsc1wiLCBcImNsaS1wcm9ncmVzc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJjbGktcHJvZ3Jlc3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgcm9vdFtcImNsaS1wcm9ncmVzc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jbGlfcHJvZ3Jlc3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlZCB0aGUgXG4gKiBAY2xhc3MgQmFzZUxvZ1xuICovXG5jbGFzcyBCYXNlTG9nZ2Vye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuQWNjZXB0ZWRMZXZlbHMgPSB7ZGVidWc6IDAsIGxvZzoxLCB3YXJuaW5nOjIsIGVycm9yOiAzfTtcbiAgICAgICAgdGhpcy5yQWNjZXB0ZWRMZXZlbHMgPSB7MDonZGVidWcnLCAxOiAnbG9nJywgMjogJ3dhcm5pbmcnLCAzOiAnZXJyb3InfTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ107XG4gICAgfVxuICAgIHNldCBMZXZlbChsZXZlbCl7XG4gICAgICAgIGlmKHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke2xldmVsfSBtdXN0IGJlIG9uZSBvZiAke09iamVjdC5rZXlzKHRoaXMuQWNjZXB0ZWRMZXZlbHMpfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBMZXZlbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yQWNjZXB0ZWRMZXZlbHNbdGhpcy5sZXZlbF07XG4gICAgfVxuXG4gICAgY29ubmVjdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbG9nKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIFxuICAgIGVycm9yKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgZGVidWcobWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBncm91cEJlZ2luKG5hbWUpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgZ3JvdXBFbmQoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIHByb2dyZXNzQmVnaW4ocmFuZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3NVcGRhdGUobWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBwcm9ncmVzc0VuZChtZXNzYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxvZ2dlcjsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIHRlcm1Mb2dnZXIgfSBmcm9tICcuL3Rlcm1Mb2dnZXInO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ2dlck1peGlucyB9IGZyb20gJy4vbG9nZ2VyLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2VMb2dnZXIgfSBmcm9tICcuL2Jhc2VMb2dnZXInO1xuIiwiaW1wb3J0IHtkZWZhdWx0IGFzIEJhc2VMb2dnZXIgfSBmcm9tICcuL2Jhc2VMb2dnZXInO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5jb25zdCBMb2dnZXJNaXhpbnMgPSAoQmFzZWRDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VkQ2xhc3N7XG4gICAgXG4gICAgc2V0IExvZ2dlcihsb2dnZXIpe1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKGxvZ2dlciwgQmFzZUxvZ2dlcik7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIH1cbiAgICBcbiAgICBnZXQgTG9nZ2VyKCl7XG4gICAgICAgIGlmKCF0aGlzLmxvZ2dlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbG9nZ2VyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXI7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyTWl4aW5zOyIsIi8vIG9yaWdpbiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2x1Y3lnaWxiZXJ0L2pzb24tZGlzcGxheS9ibG9iL21hc3Rlci9qc29uLWRpc3BsYXkuanNcbi8vIENvcHlyaWdodCAoYykgMjAxNyBMdWN5IEdpbGJlcnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25WaWV3e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIHN0YXRpYyBKU09ORGlzcGxheShqc29uLCBvcGVuTGV2ZWxzQXJnLCBzdHlsZU9wdGlvbnNBcmcpIHtcbiAgICAgICAgdmFyIERFRkFVTFRfU1RZTEVfT1BUSU9OUyA9IHtcbiAgICAgICAgICByb290OiB7IHRhZzogJ3ByZScsIHN0eWxlOiAncGFkZGluZzogNXB4OyBmb250LXNpemU6IDFyZW07JyB9LFxuICAgICAgICAgIHRpdGxlQ29udGFpbmVyOiB7IHRhZzogJ2RpdicsIHN0eWxlOiAnbWFyZ2luLWJvdHRvbTogM3B4OycgfSxcbiAgICAgICAgICB0aXRsZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXI7JyB9LFxuICAgICAgICAgIHRpdGxlVGV4dDogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICcnIH0sXG4gICAgICAgICAgb3BlbkJ1dHRvbjogeyBcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgc3R5bGU6ICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbjogMHB4IDdweCAwcHggMnB4OyBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7ICdcbiAgICAgICAgICAgICAgICAgKyAnYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDogNXB4IHNvbGlkIGJsYWNrOycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50c0NvbnRhaW5lcjogeyB0YWc6ICdkaXYnLCBzdHlsZTogJ3BhZGRpbmctbGVmdDogMThweDsnIH0sXG4gICAgICAgICAga2V5VmFsdWVQYWlyOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAycHg7JyB9LFxuICAgICAgICAgIGtleTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogZGFya2JsdWU7JyB9LFxuICAgICAgICAgIHN5bWJvbFZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBkYXJrZ3JlZW47JyB9LFxuICAgICAgICAgIHN0cmluZ1ZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBjcmltc29uOycgfSxcbiAgICAgICAgICBudW1iZXJWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgICAgYm9vbGVhblZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgICBudWxsVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgb3BlbkxldmVscyA9IGlzTmFOKHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpKSA/IEluZmluaXR5IDogcGFyc2VJbnQob3BlbkxldmVsc0FyZyk7XG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB0eXBlb2Ygc3R5bGVPcHRpb25zQXJnID09PSAnb2JqZWN0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbWVyZ2VTdHlsZU9wdGlvbnMoREVGQVVMVF9TVFlMRV9PUFRJT05TLCBzdHlsZU9wdGlvbnNBcmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IERFRkFVTFRfU1RZTEVfT1BUSU9OUztcbiAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICBcbiAgICAgICAgICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5yb290LnRhZyk7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnJvb3Quc3R5bGU7XG4gICAgXG4gICAgICAgICAgaWYgKGpzb24gPT09IG51bGwgfHwganNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgdm9pZEVsZW1lbnQgPSBnZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodm9pZEVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoanNvbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRlRWxlbWVudCA9IGdldFZhbHVlKGpzb24udG9JU09TdHJpbmcoKSk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGVFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFyIG5vbkV4cGFuZGFibGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbik7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vbkV4cGFuZGFibGVFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gQXJyYXkuaXNBcnJheShqc29uKSA/ICdBcnJheVsnICsganNvbi5sZW5ndGggKyAnXScgOiAnT2JqZWN0JztcbiAgICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IG9wZW5MZXZlbHMgPCAxO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChnZXRUaXRsZSh0aXRsZSwgbnVsbCwgdGhpc0xldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIDEpKTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIGluZGV4KSB7XG4gICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gaW5kZXggPiBvcGVuTGV2ZWxzO1xuICAgICAgICAgIHZhciBuZXh0TGV2ZWxJc0Nsb3NlZCA9IGluZGV4ICsgMSA+IG9wZW5MZXZlbHM7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRlbnRzQ29udGFpbmVyKHRoaXNMZXZlbElzQ2xvc2VkKTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbltrZXldKSkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ0FycmF5WycgKyBqc29uW2tleV0ubGVuZ3RoICsgJ10nLCBrZXksIG5leHRMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoanNvbltrZXldID09PSBudWxsIHx8IGpzb25ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBudWxsKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XS50b0lTT1N0cmluZygpKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnT2JqZWN0Jywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhqc29uKS5mb3JFYWNoKGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKHN5bWJvbC50b1N0cmluZygpLCBqc29uW3N5bWJvbF0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFRpdGxlKHRpdGxlVGV4dCwgb3B0aW9uYWxLZXksIGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgY3VycmVudGx5Q2xvc2VkID0gbGV2ZWxJc0Nsb3NlZDtcbiAgICAgICAgICB2YXIgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnRhZyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnN0eWxlO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAndGl0bGVDb250YWluZXInKTtcbiAgICAgICAgICB2YXIgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZVRleHQudGFnKTtcbiAgICAgICAgICB2YXIgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGUudGFnKTtcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZS5zdHlsZTtcbiAgICAgICAgICB0ZXh0RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlVGV4dC5zdHlsZTtcbiAgICBcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgaWYgKG9wdGlvbmFsS2V5KSB7XG4gICAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkob3B0aW9uYWxLZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGVUZXh0KSk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcbiAgICBcbiAgICAgICAgICB0aXRsZUVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcGVuQnV0dG9uID0gdGl0bGVFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgb2JqZWN0Q29udGVudHMgPSB0aXRsZUVsZW1lbnQucGFyZW50Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgIG9iamVjdENvbnRlbnRzLnN0eWxlLmRpc3BsYXkgPSBjdXJyZW50bHlDbG9zZWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICAgICAgb3BlbkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50bHlDbG9zZWQgPyAncm90YXRlKDkwZGVnKScgOiAncm90YXRlKDBkZWcpJztcbiAgICAgICAgICAgIGN1cnJlbnRseUNsb3NlZCA9ICFjdXJyZW50bHlDbG9zZWQ7XG4gICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnRhZyk7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm9wZW5CdXR0b24uc3R5bGU7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBsZXZlbElzQ2xvc2VkID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgICAgcmV0dXJuIGJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29udGVudHNDb250YWluZXIoaXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnRhZyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICdjb250ZW50c0NvbnRhaW5lcicpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAoaXNDbG9zZWQgPyAnbm9uZScgOiAnYmxvY2snKTtcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRTdGFuZGFyZFBhaXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHZhciBwYWlyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci50YWcpO1xuICAgICAgICAgIHBhaXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnN0eWxlO1xuICAgICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldEtleShrZXkpKTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICAgIHJldHVybiBwYWlyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRLZXkobmFtZSkge1xuICAgICAgICAgIHZhciBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5LnRhZyk7XG4gICAgICAgICAga2V5RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleS5zdHlsZTtcbiAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUgKyAnOiAnKSk7XG4gICAgICAgICAgcmV0dXJuIGtleUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgICB2YXIgdmFsdWVFbGVtZW50O1xuICAgICAgICAgIHZhciBudWxsVHlwZSA9ICdvYmplY3QnO1xuICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdcIicgKyB2YWx1ZSArICdcIicpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbnVsbFR5cGU6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bGxWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udWxsVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbHVlRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBtZXJnZVN0eWxlT3B0aW9ucyhkZWZhdWx0cywgb3ZlcnJpZGVzKSB7XG4gICAgICAgICAgdmFyIG1lcmdlZCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgbWVyZ2VkW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0c1trZXldLCBvdmVycmlkZXNba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIHJlbmRlcigpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VMb2dnZXIgfSBmcm9tICcuL2Jhc2VMb2dnZXInO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBMb2dOb2RlTWl4aW5zIH0gZnJvbSAnLi90ZXJtTG9nZ2VyLm1peGlucy5ub2RlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgTG9nV2ViTWl4aW5zIH0gZnJvbSAnLi90ZXJtTG9nZ2VyLm1peGlucy53ZWInO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBUZXJtTG9nZ2VyIHByb3ZpZGUgaXNvbW9ycGhpYyBsb2dnZXJcbiAqIHsgbWl4V2l0aCA6IHsgJ25vZGUnOiBbTG9nTm9kZU1peGluc10sICd3ZWInOiBbV2ViTm9kZU1peGluc10gfSB9XG4gKiBAY2xhc3MgVGVybUxvZ2dlclxuICogQGV4dGVuZHMgQmFzZUxvZ2dlclxuICovXG5jbGFzcyBUZXJtTG9nZ2VyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlTG9nZ2VyLCBcbiAgICAgICAgeyBub2RlOltMb2dOb2RlTWl4aW5zXSwgXG4gICAgICAgICAgd2ViOltMb2dXZWJNaXhpbnNdIH0gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmdyb3VwU3RhY2sgPSBbXTtcbiAgICB9XG5cbiAgICBwbG90KGRhdGEpe1xuXG4gICAgfVxuICAgIFxuICAgIGdyb3VwQmVnaW4obmFtZSl7ICAgXG4gICAgICAgIGxldCBncm91cCA9IHtuYW1lLCBiZWdpblRpbWU6IG5ldyBEYXRlKCl9O1xuICAgICAgICB0aGlzLmdyb3VwU3RhY2sucHVzaChncm91cCk7XG4gICAgICAgIGxldCBpbmRlbnRTcGFjZSA9ICcnO1xuICAgICAgICB0aGlzLmxvZyhgJHtpbmRlbnRTcGFjZX0ke2dyb3VwLm5hbWV9OiBiZWdpbiBhdCAke2dyb3VwLmJlZ2luVGltZX1gKTtcbiAgICB9XG4gICAgZ3JvdXBFbmQoKXtcbiAgICAgICAgaWYodGhpcy5ncm91cFN0YWNrLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cFN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgbGV0IGluZGVudFNwYWNlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmxvZyhgJHtpbmRlbnRTcGFjZX0ke2dyb3VwLm5hbWV9OiBlbmQgYWZ0ZXIgJHsobmV3IERhdGUoKSAtIGdyb3VwLmJlZ2luVGltZSl9IChtcylgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBUZXJtTG9nZ2VyKCk7IiwiaW1wb3J0ICogYXMgY2xpUHJvZ3Jlc3MgZnJvbSAnY2xpLXByb2dyZXNzJztcblxuY29uc3QgTG9nTm9kZU1peGlucyA9IChMb2dDbGFzcyk9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNze1xuICAgIGNvbm5lY3QoY2hhbm5lbCl7XG4gICAgICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSl7XG4gICAgICAgIC8vVE9ETzogbWFrZSBkZWNvcmF0b3IgXG4gICAgICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlO1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBwcm9ncmVzc0JlZ2luKHJhbmdlKXtcbiAgICAgICAgdGhpcy5wcm9jZXNzQ291bnRlciArPSAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIgPSBuZXcgY2xpUHJvZ3Jlc3MuQmFyKHt9LCBjbGlQcm9ncmVzcy5QcmVzZXRzLnNoYWRlc19jbGFzc2ljKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyLnNldFRvdGFsKHJhbmdlKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3NVcGRhdGUocHJvZ3Jlc3NNZXNzYWdlKXtcbiAgICAgICAgaWYoIXRoaXMuY3VycmVudEJhcil7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmVnaW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2Nlc3NDb3VudGVyICs9IDE7XG4gICAgICAgIHRoaXMuY3VycmVudEJhci51cGRhdGUodGhpcy5wcm9jZXNzQ291bnRlcik7XG4gICAgfVxuICAgIHByb2dyZXNzRW5kKCl7XG4gICAgICAgIHRoaXMuY3VycmVudEJhci5zdG9wKCk7XG4gICAgICAgIHRoaXMucHJvY2Vzc0NvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBkZWJ1ZyhtZXNzYWdlKXtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyID0gZmFsc2U7IFxuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dOb2RlTWl4aW5zOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBKc29uVmlld30gZnJvbSAnLi9wcmV0dHlKc29uJztcbmNvbnN0IExvZ1dlYk1peGlucyA9IChMb2dDbGFzcyk9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNze1xuICAgIGNvbm5lY3QoZG9jdW1lbnRFbD1udWxsKXtcbiAgICAgICAgZG9jdW1lbnRFbCA9IGRvY3VtZW50RWx8fGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBcImxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcIjtcbiAgICAgICAgZG9jdW1lbnRFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgdGhpcy5mcmFtZUVsID0gZG9jdW1lbnRFbDtcbiAgICAgICAgdGhpcy5sb2dnZXJFbCA9IGRvY3VtZW50RWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1bFwiKVswXTtcbiAgICB9XG4gICAgc2Nyb2xsQm90dG9tKGVsZW1lbnQ9bnVsbCl7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuZnJhbWVFbDtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSl7XG4gICAgICAgIC8vIGxldCBub2RlID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpOm50aC1sYXN0LW9mLXR5cGUoMSlcIik7XG4gICAgICAgIGxldCBMSU5vZGVzID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgICAgICBsZXQgbm9kZSA9IExJTm9kZXNbTElOb2Rlcy5sZW5ndGgtMV07XG4gICAgICAgIGlmKCFub2RlIHx8IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9nZ2VyLXByb2dyZXNzXCIpKXtcbiAgICAgICAgICAgIC8vY3JlYXRlIG5ldyBlbFxuICAgICAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImxvZ2dlci1wcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGpzb25Ob2RlID0gSnNvblZpZXcuSlNPTkRpc3BsYXkocHJvY2Vzc01lc3NhZ2UpO1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICB9XG4gICAgbG9nKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLmxvZ2dlckVsIHx8ICF0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKXtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSAnYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7JzsgICAgICAgXG4gICAgICAgIGxldCBqc29uTm9kZSA9IEpzb25WaWV3LkpTT05EaXNwbGF5KG1lc3NhZ2UpO1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZGVidWcobWVzc2FnZSl7XG4gICAgICAgIGlmKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvL25vIHNob3cgb24gd2ViIHNjcmVlbjsgICAgICAgIFxuICAgICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ1dlYk1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jbGlfcHJvZ3Jlc3NfXzsiXSwic291cmNlUm9vdCI6IiJ9