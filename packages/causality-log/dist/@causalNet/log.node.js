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

/***/ "./src/baseLog.js":
/*!************************!*\
  !*** ./src/baseLog.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseLog; });
class BaseLog {
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

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: termLogger, BaseLog, LoggerMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _termLog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termLog */ "./src/termLog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "termLogger", function() { return _termLog__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _baseLog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseLog */ "./src/baseLog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLog", function() { return _baseLog__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _logger_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.mixins */ "./src/logger.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerMixins", function() { return _logger_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/logger.mixins.js":
/*!******************************!*\
  !*** ./src/logger.mixins.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LoggerMixins = BasedClass => class extends BasedClass {
  constructor() {
    super();
    this.logger = console;
  }

  progress(progressMessage) {
    if (this.logger.progress) {
      this.logger.progress(progressMessage);
    }
  }

  set Logger(logger) {
    this.logger = logger;
  }

  get Logger() {
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

/***/ "./src/termLog.js":
/*!************************!*\
  !*** ./src/termLog.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseLog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLog */ "./src/baseLog.js");
/* harmony import */ var _termLog_mixins_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termLog.mixins.node */ "./src/termLog.mixins.node.js");
/* harmony import */ var _termLog_mixins_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./termLog.mixins.web */ "./src/termLog.mixins.web.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_3__);





class TermLog extends causal_net_utils__WEBPACK_IMPORTED_MODULE_3__["Platform"].mixWith(_baseLog__WEBPACK_IMPORTED_MODULE_0__["default"], {
  'node': [_termLog_mixins_node__WEBPACK_IMPORTED_MODULE_1__["default"]],
  'web': [_termLog_mixins_web__WEBPACK_IMPORTED_MODULE_2__["default"]]
}) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TermLog());

/***/ }),

/***/ "./src/termLog.mixins.node.js":
/*!************************************!*\
  !*** ./src/termLog.mixins.node.js ***!
  \************************************/
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
    this.currentBar = new cli_progress__WEBPACK_IMPORTED_MODULE_0__["Bar"]({}, cli_progress__WEBPACK_IMPORTED_MODULE_0__["Presets"].shades_classic);
  }

  progressUpdate(progressMessage) {
    if (!this.currentBar) {
      let totalVal = progressMessage.total ? progressMessage.total : 100;
      this.currentBar.start(totalVal, 0, progressMessage);
    } else {
      let totalVal = progressMessage.total ? progressMessage.total : 100;
      let currentVal = progressMessage.current ? progressMessage.current : 1;
      this.currentBar.setTotal(totalVal);
    }

    this.currentBar.update(currentVal);
  }

  progressEnd() {}

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

/***/ "./src/termLog.mixins.web.js":
/*!***********************************!*\
  !*** ./src/termLog.mixins.web.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prettyJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prettyJson */ "./src/prettyJson.js");


const WebNodeMixins = LogClass => class extends LogClass {
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

/* harmony default export */ __webpack_exports__["default"] = (WebNodeMixins);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9sb2dnZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3ByZXR0eUpzb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNsaS1wcm9ncmVzc1wiIl0sIm5hbWVzIjpbIkJhc2VMb2ciLCJjb25zdHJ1Y3RvciIsIkFjY2VwdGVkTGV2ZWxzIiwiZGVidWciLCJsb2ciLCJ3YXJuaW5nIiwiZXJyb3IiLCJyQWNjZXB0ZWRMZXZlbHMiLCJsZXZlbCIsIkxldmVsIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiTG9nZ2VyTWl4aW5zIiwiQmFzZWRDbGFzcyIsImxvZ2dlciIsImNvbnNvbGUiLCJwcm9ncmVzcyIsInByb2dyZXNzTWVzc2FnZSIsIkxvZ2dlciIsIkpzb25WaWV3IiwiSlNPTkRpc3BsYXkiLCJqc29uIiwib3BlbkxldmVsc0FyZyIsInN0eWxlT3B0aW9uc0FyZyIsIkRFRkFVTFRfU1RZTEVfT1BUSU9OUyIsInJvb3QiLCJ0YWciLCJzdHlsZSIsInRpdGxlQ29udGFpbmVyIiwidGl0bGUiLCJ0aXRsZVRleHQiLCJvcGVuQnV0dG9uIiwiY29udGVudHNDb250YWluZXIiLCJrZXlWYWx1ZVBhaXIiLCJrZXkiLCJzeW1ib2xWYWx1ZSIsInN0cmluZ1ZhbHVlIiwibnVtYmVyVmFsdWUiLCJib29sZWFuVmFsdWUiLCJudWxsVmFsdWUiLCJvcGVuTGV2ZWxzIiwiaXNOYU4iLCJwYXJzZUludCIsIkluZmluaXR5Iiwic3R5bGVPcHRpb25zIiwibWVyZ2VTdHlsZU9wdGlvbnMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJ0byIsImluZGV4IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibmV4dFNvdXJjZSIsIm5leHRLZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyZW5kZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3NzVGV4dCIsInZvaWRFbGVtZW50IiwiZ2V0VmFsdWUiLCJhcHBlbmRDaGlsZCIsIkRhdGUiLCJkYXRlRWxlbWVudCIsInRvSVNPU3RyaW5nIiwibm9uRXhwYW5kYWJsZUVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJ0aGlzTGV2ZWxJc0Nsb3NlZCIsImdldFRpdGxlIiwiY29udmVydEpzb25Ub0VsZW1lbnRzIiwibmV4dExldmVsSXNDbG9zZWQiLCJjb250YWluZXIiLCJnZXRDb250ZW50c0NvbnRhaW5lciIsImdldFN0YW5kYXJkUGFpciIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZvckVhY2giLCJzeW1ib2wiLCJ0b1N0cmluZyIsIm9wdGlvbmFsS2V5IiwibGV2ZWxJc0Nsb3NlZCIsImN1cnJlbnRseUNsb3NlZCIsImNvbnRhaW5lckVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0RWxlbWVudCIsInRpdGxlRWxlbWVudCIsImdldE9wZW5CdXR0b24iLCJnZXRLZXkiLCJjcmVhdGVUZXh0Tm9kZSIsIm9uY2xpY2siLCJmaXJzdENoaWxkIiwib2JqZWN0Q29udGVudHMiLCJwYXJlbnROb2RlIiwibmV4dFNpYmxpbmciLCJkaXNwbGF5IiwidHJhbnNmb3JtIiwiYnV0dG9uRWxlbWVudCIsImlzQ2xvc2VkIiwidmFsdWUiLCJwYWlyRWxlbWVudCIsIm5hbWUiLCJrZXlFbGVtZW50IiwidmFsdWVFbGVtZW50IiwibnVsbFR5cGUiLCJkZWZhdWx0cyIsIm92ZXJyaWRlcyIsIm1lcmdlZCIsIlRlcm1Mb2ciLCJQbGF0Zm9ybSIsIm1peFdpdGgiLCJMb2dOb2RlTWl4aW5zIiwiV2ViTm9kZU1peGlucyIsIkxvZ0NsYXNzIiwiY29ubmVjdCIsImNoYW5uZWwiLCJjdXJyZW50QmFyIiwibWVzc2FnZSIsInByb2dyZXNzQmVnaW4iLCJyYW5nZSIsImNsaVByb2dyZXNzIiwic2hhZGVzX2NsYXNzaWMiLCJwcm9ncmVzc1VwZGF0ZSIsInRvdGFsVmFsIiwidG90YWwiLCJzdGFydCIsImN1cnJlbnRWYWwiLCJjdXJyZW50Iiwic2V0VG90YWwiLCJ1cGRhdGUiLCJwcm9ncmVzc0VuZCIsImRvY3VtZW50RWwiLCJib2R5Iiwibm9kZSIsImZyYW1lRWwiLCJsb2dnZXJFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2Nyb2xsQm90dG9tIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicHJvY2Vzc01lc3NhZ2UiLCJMSU5vZGVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJqc29uTm9kZSIsImRhdGUiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7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QUFjLEtBQUtOLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBakIsRUFBNEM7QUFDeEMsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsUUFBRyxDQUFDLEtBQUswSSxRQUFOLElBQWtCLENBQUMsS0FBS0EsUUFBTCxDQUFjekUsV0FBcEMsRUFBZ0Q7QUFDNUMsV0FBS29ELE9BQUw7QUFDSDs7QUFDRCxRQUFJbUIsSUFBSSxHQUFHNUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQTJFLFFBQUksQ0FBQzdHLEtBQUwsQ0FBV21DLE9BQVgsR0FBcUIsbUNBQXJCO0FBQ0EsUUFBSXVGLFFBQVEsR0FBR2xJLG1EQUFRLENBQUNDLFdBQVQsQ0FBcUJvRyxPQUFyQixDQUFmO0FBQ0EsUUFBSThCLElBQUksR0FBRyxJQUFJcEYsSUFBSixFQUFYO0FBQ0FzRSxRQUFJLENBQUNlLFNBQUwsR0FBa0IsZ0RBQStDRCxJQUFLLE1BQXRFO0FBQ0FkLFFBQUksQ0FBQ3ZFLFdBQUwsQ0FBaUJvRixRQUFqQjtBQUNBLFNBQUtYLFFBQUwsQ0FBY3pFLFdBQWQsQ0FBMEJ1RSxJQUExQjtBQUNBLFNBQUtJLFlBQUw7QUFDQTdILFdBQU8sQ0FBQ2IsR0FBUixDQUFZc0gsT0FBWjtBQUNIOztBQUVEdkgsT0FBSyxDQUFDdUgsT0FBRCxFQUFTO0FBQ1YsUUFBRyxLQUFLbEgsS0FBTCxJQUFjLEtBQUtOLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBakIsRUFBOEM7QUFDMUMsYUFBTyxJQUFQO0FBQ0gsS0FIUyxDQUlWOzs7QUFDQWUsV0FBTyxDQUFDZCxLQUFSLENBQWN1SCxPQUFkO0FBQ0g7O0FBckRvRCxDQUF6RDs7QUF3RGVMLDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBLDhEOzs7Ozs7Ozs7OztBQ0FBLDBEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbG9nLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwiY2xpLXByb2dyZXNzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQudXRpbHNcIiwgXCJjbGktcHJvZ3Jlc3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwiY2xpLXByb2dyZXNzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIHJvb3RbXCJjbGktcHJvZ3Jlc3NcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpX3Byb2dyZXNzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlTG9ne1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuQWNjZXB0ZWRMZXZlbHMgPSB7ZGVidWc6IDAsIGxvZzoxLCB3YXJuaW5nOjIsIGVycm9yOiAzfTtcbiAgICAgICAgdGhpcy5yQWNjZXB0ZWRMZXZlbHMgPSB7MDonZGVidWcnLCAxOiAnbG9nJywgMjogJ3dhcm5pbmcnLCAzOiAnZXJyb3InfTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ107XG4gICAgfVxuICAgIHNldCBMZXZlbChsZXZlbCl7XG4gICAgICAgIGlmKHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke2xldmVsfSBtdXN0IGJlIG9uZSBvZiAke09iamVjdC5rZXlzKHRoaXMuQWNjZXB0ZWRMZXZlbHMpfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBMZXZlbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yQWNjZXB0ZWRMZXZlbHNbdGhpcy5sZXZlbF07XG4gICAgfVxufSIsImV4cG9ydCB7ZGVmYXVsdCBhcyB0ZXJtTG9nZ2VyfSBmcm9tICcuL3Rlcm1Mb2cnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEJhc2VMb2d9IGZyb20gJy4vYmFzZUxvZyc7XG5leHBvcnQge2RlZmF1bHQgYXMgTG9nZ2VyTWl4aW5zfSBmcm9tICcuL2xvZ2dlci5taXhpbnMnO1xuIiwiY29uc3QgTG9nZ2VyTWl4aW5zID0gKEJhc2VkQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlZENsYXNze1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG4gICAgcHJvZ3Jlc3MocHJvZ3Jlc3NNZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sb2dnZXIucHJvZ3Jlc3Mpe1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIucHJvZ3Jlc3MocHJvZ3Jlc3NNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXQgTG9nZ2VyKGxvZ2dlcil7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIH1cbiAgICBcbiAgICBnZXQgTG9nZ2VyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlcjtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dnZXJNaXhpbnM7IiwiLy8gb3JpZ2luIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbHVjeWdpbGJlcnQvanNvbi1kaXNwbGF5L2Jsb2IvbWFzdGVyL2pzb24tZGlzcGxheS5qc1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IEx1Y3kgR2lsYmVydFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblZpZXd7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgc3RhdGljIEpTT05EaXNwbGF5KGpzb24sIG9wZW5MZXZlbHNBcmcsIHN0eWxlT3B0aW9uc0FyZykge1xuICAgICAgICB2YXIgREVGQVVMVF9TVFlMRV9PUFRJT05TID0ge1xuICAgICAgICAgIHJvb3Q6IHsgdGFnOiAncHJlJywgc3R5bGU6ICdwYWRkaW5nOiA1cHg7IGZvbnQtc2l6ZTogMXJlbTsnIH0sXG4gICAgICAgICAgdGl0bGVDb250YWluZXI6IHsgdGFnOiAnZGl2Jywgc3R5bGU6ICdtYXJnaW4tYm90dG9tOiAzcHg7JyB9LFxuICAgICAgICAgIHRpdGxlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcjsnIH0sXG4gICAgICAgICAgdGl0bGVUZXh0OiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJycgfSxcbiAgICAgICAgICBvcGVuQnV0dG9uOiB7IFxuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luOiAwcHggN3B4IDBweCAycHg7IGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgJ1xuICAgICAgICAgICAgICAgICArICdib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnRzQ29udGFpbmVyOiB7IHRhZzogJ2RpdicsIHN0eWxlOiAncGFkZGluZy1sZWZ0OiAxOHB4OycgfSxcbiAgICAgICAgICBrZXlWYWx1ZVBhaXI6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDJweDsnIH0sXG4gICAgICAgICAga2V5OiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBkYXJrYmx1ZTsnIH0sXG4gICAgICAgICAgc3ltYm9sVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGRhcmtncmVlbjsnIH0sXG4gICAgICAgICAgc3RyaW5nVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGNyaW1zb247JyB9LFxuICAgICAgICAgIG51bWJlclZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgICBib29sZWFuVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICAgIG51bGxWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcGVuTGV2ZWxzID0gaXNOYU4ocGFyc2VJbnQob3BlbkxldmVsc0FyZykpID8gSW5maW5pdHkgOiBwYXJzZUludChvcGVuTGV2ZWxzQXJnKTtcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHR5cGVvZiBzdHlsZU9wdGlvbnNBcmcgPT09ICdvYmplY3QnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXJnZVN0eWxlT3B0aW9ucyhERUZBVUxUX1NUWUxFX09QVElPTlMsIHN0eWxlT3B0aW9uc0FyZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogREVGQVVMVF9TVFlMRV9PUFRJT05TO1xuICAgIFxuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAgIFxuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRTb3VyY2UsIG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnJvb3QudGFnKTtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMucm9vdC5zdHlsZTtcbiAgICBcbiAgICAgICAgICBpZiAoanNvbiA9PT0gbnVsbCB8fCBqc29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciB2b2lkRWxlbWVudCA9IGdldFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh2b2lkRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgdmFyIGRhdGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbi50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb24gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YXIgbm9uRXhwYW5kYWJsZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9uRXhwYW5kYWJsZUVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBBcnJheS5pc0FycmF5KGpzb24pID8gJ0FycmF5WycgKyBqc29uLmxlbmd0aCArICddJyA6ICdPYmplY3QnO1xuICAgICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gb3BlbkxldmVscyA8IDE7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGdldFRpdGxlKHRpdGxlLCBudWxsLCB0aGlzTGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgMSkpO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBpbmRleCA+IG9wZW5MZXZlbHM7XG4gICAgICAgICAgdmFyIG5leHRMZXZlbElzQ2xvc2VkID0gaW5kZXggKyAxID4gb3BlbkxldmVscztcbiAgICAgICAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGVudHNDb250YWluZXIodGhpc0xldmVsSXNDbG9zZWQpO1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uW2tleV0pKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnQXJyYXlbJyArIGpzb25ba2V5XS5sZW5ndGggKyAnXScsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gPT09IG51bGwgfHwganNvbltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIG51bGwpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoanNvbltrZXldIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldLnRvSVNPU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdPYmplY3QnLCBrZXksIG5leHRMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGpzb24pLmZvckVhY2goZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoc3ltYm9sLnRvU3RyaW5nKCksIGpzb25bc3ltYm9sXSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0VGl0bGUodGl0bGVUZXh0LCBvcHRpb25hbEtleSwgbGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBjdXJyZW50bHlDbG9zZWQgPSBsZXZlbElzQ2xvc2VkO1xuICAgICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIudGFnKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIuc3R5bGU7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICd0aXRsZUNvbnRhaW5lcicpO1xuICAgICAgICAgIHZhciB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlVGV4dC50YWcpO1xuICAgICAgICAgIHZhciB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZS50YWcpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlLnN0eWxlO1xuICAgICAgICAgIHRleHRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnN0eWxlO1xuICAgIFxuICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZChnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICBpZiAob3B0aW9uYWxLZXkpIHtcbiAgICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGdldEtleShvcHRpb25hbEtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZVRleHQpKTtcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuICAgIFxuICAgICAgICAgIHRpdGxlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wZW5CdXR0b24gPSB0aXRsZUVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBvYmplY3RDb250ZW50cyA9IHRpdGxlRWxlbWVudC5wYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgb2JqZWN0Q29udGVudHMuc3R5bGUuZGlzcGxheSA9IGN1cnJlbnRseUNsb3NlZCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgICBvcGVuQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRseUNsb3NlZCA/ICdyb3RhdGUoOTBkZWcpJyA6ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICAgICAgY3VycmVudGx5Q2xvc2VkID0gIWN1cnJlbnRseUNsb3NlZDtcbiAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm9wZW5CdXR0b24udGFnKTtcbiAgICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi5zdHlsZTtcbiAgICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGxldmVsSXNDbG9zZWQgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRDb250ZW50c0NvbnRhaW5lcihpc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIudGFnKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ2NvbnRlbnRzQ29udGFpbmVyJyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnN0eWxlO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IChpc0Nsb3NlZCA/ICdub25lJyA6ICdibG9jaycpO1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YW5kYXJkUGFpcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHBhaXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnRhZyk7XG4gICAgICAgICAgcGFpckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIuc3R5bGU7XG4gICAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KGtleSkpO1xuICAgICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldFZhbHVlKHZhbHVlKSk7XG4gICAgICAgICAgcmV0dXJuIHBhaXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldEtleShuYW1lKSB7XG4gICAgICAgICAgdmFyIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXkudGFnKTtcbiAgICAgICAgICBrZXlFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5LnN0eWxlO1xuICAgICAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSArICc6ICcpKTtcbiAgICAgICAgICByZXR1cm4ga2V5RWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgIHZhciB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgICAgdmFyIG51bGxUeXBlID0gJ29iamVjdCc7XG4gICAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1wiJyArIHZhbHVlICsgJ1wiJykpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBudWxsVHlwZTpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bGxWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmFsdWVFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIG1lcmdlU3R5bGVPcHRpb25zKGRlZmF1bHRzLCBvdmVycmlkZXMpIHtcbiAgICAgICAgICB2YXIgbWVyZ2VkID0ge307XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBtZXJnZWRba2V5XSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzW2tleV0sIG92ZXJyaWRlc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gcmVuZGVyKCk7XG4gICAgfVxufSIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZUxvZyB9IGZyb20gJy4vYmFzZUxvZyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIExvZ05vZGVNaXhpbnMgfSBmcm9tICcuL3Rlcm1Mb2cubWl4aW5zLm5vZGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBXZWJOb2RlTWl4aW5zIH0gZnJvbSAnLi90ZXJtTG9nLm1peGlucy53ZWInO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNsYXNzIFRlcm1Mb2cgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VMb2csIHsnbm9kZSc6W0xvZ05vZGVNaXhpbnNdLCd3ZWInOltXZWJOb2RlTWl4aW5zXX0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFRlcm1Mb2coKTsiLCJpbXBvcnQgKiBhcyBjbGlQcm9ncmVzcyBmcm9tICdjbGktcHJvZ3Jlc3MnO1xuXG5jb25zdCBMb2dOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChjaGFubmVsKXtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyID0gZmFsc2U7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgLy9UT0RPOiBtYWtlIGRlY29yYXRvciBcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyID0gZmFsc2U7XG4gICAgICAgIGlmKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snbG9nJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuICAgIHByb2dyZXNzQmVnaW4ocmFuZ2Upe1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIgPSBuZXcgY2xpUHJvZ3Jlc3MuQmFyKHt9LCBjbGlQcm9ncmVzcy5QcmVzZXRzLnNoYWRlc19jbGFzc2ljKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3NVcGRhdGUocHJvZ3Jlc3NNZXNzYWdlKXtcbiAgICAgICAgaWYoIXRoaXMuY3VycmVudEJhcil7XG4gICAgICAgICAgICBsZXQgdG90YWxWYWwgPSAocHJvZ3Jlc3NNZXNzYWdlLnRvdGFsKT9wcm9ncmVzc01lc3NhZ2UudG90YWw6MTAwO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmFyLnN0YXJ0KHRvdGFsVmFsLCAwLCBwcm9ncmVzc01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgdG90YWxWYWwgPSAocHJvZ3Jlc3NNZXNzYWdlLnRvdGFsKT9wcm9ncmVzc01lc3NhZ2UudG90YWw6MTAwO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRWYWwgPSAocHJvZ3Jlc3NNZXNzYWdlLmN1cnJlbnQpP3Byb2dyZXNzTWVzc2FnZS5jdXJyZW50OjE7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCYXIuc2V0VG90YWwodG90YWxWYWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEJhci51cGRhdGUoY3VycmVudFZhbCk7XG4gICAgfVxuICAgIHByb2dyZXNzRW5kKCl7XG5cbiAgICB9XG4gICAgZGVidWcobWVzc2FnZSl7XG4gICAgICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlOyBcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nTm9kZU1peGluczsiLCJpbXBvcnQge2RlZmF1bHQgYXMgSnNvblZpZXd9IGZyb20gJy4vcHJldHR5SnNvbic7XG5jb25zdCBXZWJOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChkb2N1bWVudEVsPW51bGwpe1xuICAgICAgICBkb2N1bWVudEVsID0gZG9jdW1lbnRFbHx8ZG9jdW1lbnQuYm9keTtcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IFwibGlzdC1zdHlsZS10eXBlOiBub25lO1wiO1xuICAgICAgICBkb2N1bWVudEVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB0aGlzLmZyYW1lRWwgPSBkb2N1bWVudEVsO1xuICAgICAgICB0aGlzLmxvZ2dlckVsID0gZG9jdW1lbnRFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpWzBdO1xuICAgIH1cbiAgICBzY3JvbGxCb3R0b20oZWxlbWVudD1udWxsKXtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5mcmFtZUVsO1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIHByb2dyZXNzKHByb2Nlc3NNZXNzYWdlKXtcbiAgICAgICAgLy8gbGV0IG5vZGUgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGk6bnRoLWxhc3Qtb2YtdHlwZSgxKVwiKTtcbiAgICAgICAgbGV0IExJTm9kZXMgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XG4gICAgICAgIGxldCBub2RlID0gTElOb2Rlc1tMSU5vZGVzLmxlbmd0aC0xXTtcbiAgICAgICAgaWYoIW5vZGUgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2dnZXItcHJvZ3Jlc3NcIikpe1xuICAgICAgICAgICAgLy9jcmVhdGUgbmV3IGVsXG4gICAgICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VyLXByb2dyZXNzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShwcm9jZXNzTWVzc2FnZSk7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSl7XG4gICAgICAgIGlmKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snbG9nJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMubG9nZ2VyRWwgfHwgIXRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQpe1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9ICdib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTsnOyAgICAgICBcbiAgICAgICAgbGV0IGpzb25Ob2RlID0gSnNvblZpZXcuSlNPTkRpc3BsYXkobWVzc2FnZSk7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBkZWJ1ZyhtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vbm8gc2hvdyBvbiB3ZWIgc2NyZWVuOyAgICAgICAgXG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2ViTm9kZU1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jbGlfcHJvZ3Jlc3NfXzsiXSwic291cmNlUm9vdCI6IiJ9