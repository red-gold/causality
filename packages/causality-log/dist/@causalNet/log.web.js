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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9sb2dnZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3ByZXR0eUpzb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNsaS1wcm9ncmVzc1wiIl0sIm5hbWVzIjpbIkJhc2VMb2ciLCJjb25zdHJ1Y3RvciIsIkFjY2VwdGVkTGV2ZWxzIiwiZGVidWciLCJsb2ciLCJ3YXJuaW5nIiwiZXJyb3IiLCJyQWNjZXB0ZWRMZXZlbHMiLCJsZXZlbCIsIkxldmVsIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiTG9nZ2VyTWl4aW5zIiwiQmFzZWRDbGFzcyIsImxvZ2dlciIsImNvbnNvbGUiLCJwcm9ncmVzcyIsInByb2dyZXNzTWVzc2FnZSIsIkxvZ2dlciIsIkpzb25WaWV3IiwiSlNPTkRpc3BsYXkiLCJqc29uIiwib3BlbkxldmVsc0FyZyIsInN0eWxlT3B0aW9uc0FyZyIsIkRFRkFVTFRfU1RZTEVfT1BUSU9OUyIsInJvb3QiLCJ0YWciLCJzdHlsZSIsInRpdGxlQ29udGFpbmVyIiwidGl0bGUiLCJ0aXRsZVRleHQiLCJvcGVuQnV0dG9uIiwiY29udGVudHNDb250YWluZXIiLCJrZXlWYWx1ZVBhaXIiLCJrZXkiLCJzeW1ib2xWYWx1ZSIsInN0cmluZ1ZhbHVlIiwibnVtYmVyVmFsdWUiLCJib29sZWFuVmFsdWUiLCJudWxsVmFsdWUiLCJvcGVuTGV2ZWxzIiwiaXNOYU4iLCJwYXJzZUludCIsIkluZmluaXR5Iiwic3R5bGVPcHRpb25zIiwibWVyZ2VTdHlsZU9wdGlvbnMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJ0byIsImluZGV4IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibmV4dFNvdXJjZSIsIm5leHRLZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyZW5kZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3NzVGV4dCIsInZvaWRFbGVtZW50IiwiZ2V0VmFsdWUiLCJhcHBlbmRDaGlsZCIsIkRhdGUiLCJkYXRlRWxlbWVudCIsInRvSVNPU3RyaW5nIiwibm9uRXhwYW5kYWJsZUVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJ0aGlzTGV2ZWxJc0Nsb3NlZCIsImdldFRpdGxlIiwiY29udmVydEpzb25Ub0VsZW1lbnRzIiwibmV4dExldmVsSXNDbG9zZWQiLCJjb250YWluZXIiLCJnZXRDb250ZW50c0NvbnRhaW5lciIsImdldFN0YW5kYXJkUGFpciIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZvckVhY2giLCJzeW1ib2wiLCJ0b1N0cmluZyIsIm9wdGlvbmFsS2V5IiwibGV2ZWxJc0Nsb3NlZCIsImN1cnJlbnRseUNsb3NlZCIsImNvbnRhaW5lckVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0RWxlbWVudCIsInRpdGxlRWxlbWVudCIsImdldE9wZW5CdXR0b24iLCJnZXRLZXkiLCJjcmVhdGVUZXh0Tm9kZSIsIm9uY2xpY2siLCJmaXJzdENoaWxkIiwib2JqZWN0Q29udGVudHMiLCJwYXJlbnROb2RlIiwibmV4dFNpYmxpbmciLCJkaXNwbGF5IiwidHJhbnNmb3JtIiwiYnV0dG9uRWxlbWVudCIsImlzQ2xvc2VkIiwidmFsdWUiLCJwYWlyRWxlbWVudCIsIm5hbWUiLCJrZXlFbGVtZW50IiwidmFsdWVFbGVtZW50IiwibnVsbFR5cGUiLCJkZWZhdWx0cyIsIm92ZXJyaWRlcyIsIm1lcmdlZCIsIlRlcm1Mb2ciLCJQbGF0Zm9ybSIsIm1peFdpdGgiLCJMb2dOb2RlTWl4aW5zIiwiV2ViTm9kZU1peGlucyIsIkxvZ0NsYXNzIiwiY29ubmVjdCIsImNoYW5uZWwiLCJjdXJyZW50QmFyIiwibWVzc2FnZSIsInByb2dyZXNzQmVnaW4iLCJyYW5nZSIsImNsaVByb2dyZXNzIiwic2hhZGVzX2NsYXNzaWMiLCJwcm9ncmVzc1VwZGF0ZSIsInRvdGFsVmFsIiwidG90YWwiLCJzdGFydCIsImN1cnJlbnRWYWwiLCJjdXJyZW50Iiwic2V0VG90YWwiLCJ1cGRhdGUiLCJwcm9ncmVzc0VuZCIsImRvY3VtZW50RWwiLCJib2R5Iiwibm9kZSIsImZyYW1lRWwiLCJsb2dnZXJFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2Nyb2xsQm90dG9tIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicHJvY2Vzc01lc3NhZ2UiLCJMSU5vZGVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJqc29uTm9kZSIsImRhdGUiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7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QUFjLEtBQUtOLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBakIsRUFBNEM7QUFDeEMsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsUUFBRyxDQUFDLEtBQUswSSxRQUFOLElBQWtCLENBQUMsS0FBS0EsUUFBTCxDQUFjekUsV0FBcEMsRUFBZ0Q7QUFDNUMsV0FBS29ELE9BQUw7QUFDSDs7QUFDRCxRQUFJbUIsSUFBSSxHQUFHNUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQTJFLFFBQUksQ0FBQzdHLEtBQUwsQ0FBV21DLE9BQVgsR0FBcUIsbUNBQXJCO0FBQ0EsUUFBSXVGLFFBQVEsR0FBR2xJLG1EQUFRLENBQUNDLFdBQVQsQ0FBcUJvRyxPQUFyQixDQUFmO0FBQ0EsUUFBSThCLElBQUksR0FBRyxJQUFJcEYsSUFBSixFQUFYO0FBQ0FzRSxRQUFJLENBQUNlLFNBQUwsR0FBa0IsZ0RBQStDRCxJQUFLLE1BQXRFO0FBQ0FkLFFBQUksQ0FBQ3ZFLFdBQUwsQ0FBaUJvRixRQUFqQjtBQUNBLFNBQUtYLFFBQUwsQ0FBY3pFLFdBQWQsQ0FBMEJ1RSxJQUExQjtBQUNBLFNBQUtJLFlBQUw7QUFDQTdILFdBQU8sQ0FBQ2IsR0FBUixDQUFZc0gsT0FBWjtBQUNIOztBQUVEdkgsT0FBSyxDQUFDdUgsT0FBRCxFQUFTO0FBQ1YsUUFBRyxLQUFLbEgsS0FBTCxJQUFjLEtBQUtOLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBakIsRUFBOEM7QUFDMUMsYUFBTyxJQUFQO0FBQ0gsS0FIUyxDQUlWOzs7QUFDQWUsV0FBTyxDQUFDZCxLQUFSLENBQWN1SCxPQUFkO0FBQ0g7O0FBckRvRCxDQUF6RDs7QUF3RGVMLDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBLDhEOzs7Ozs7Ozs7OztBQ0FBLDBEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbG9nLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJjbGktcHJvZ3Jlc3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC51dGlsc1wiLCBcImNsaS1wcm9ncmVzc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJjbGktcHJvZ3Jlc3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgcm9vdFtcImNsaS1wcm9ncmVzc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jbGlfcHJvZ3Jlc3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VMb2d7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5BY2NlcHRlZExldmVscyA9IHtkZWJ1ZzogMCwgbG9nOjEsIHdhcm5pbmc6MiwgZXJyb3I6IDN9O1xuICAgICAgICB0aGlzLnJBY2NlcHRlZExldmVscyA9IHswOidkZWJ1ZycsIDE6ICdsb2cnLCAyOiAnd2FybmluZycsIDM6ICdlcnJvcid9O1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXTtcbiAgICB9XG4gICAgc2V0IExldmVsKGxldmVsKXtcbiAgICAgICAgaWYodGhpcy5BY2NlcHRlZExldmVsc1tsZXZlbF0hPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdOyAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7bGV2ZWx9IG11c3QgYmUgb25lIG9mICR7T2JqZWN0LmtleXModGhpcy5BY2NlcHRlZExldmVscyl9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IExldmVsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJBY2NlcHRlZExldmVsc1t0aGlzLmxldmVsXTtcbiAgICB9XG59IiwiZXhwb3J0IHtkZWZhdWx0IGFzIHRlcm1Mb2dnZXJ9IGZyb20gJy4vdGVybUxvZyc7XG5leHBvcnQge2RlZmF1bHQgYXMgQmFzZUxvZ30gZnJvbSAnLi9iYXNlTG9nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBMb2dnZXJNaXhpbnN9IGZyb20gJy4vbG9nZ2VyLm1peGlucyc7XG4iLCJjb25zdCBMb2dnZXJNaXhpbnMgPSAoQmFzZWRDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VkQ2xhc3N7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgIH1cbiAgICBwcm9ncmVzcyhwcm9ncmVzc01lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxvZ2dlci5wcm9ncmVzcyl7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5wcm9ncmVzcyhwcm9ncmVzc01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldCBMb2dnZXIobG9nZ2VyKXtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBMb2dnZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlck1peGluczsiLCIvLyBvcmlnaW4gY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWN5Z2lsYmVydC9qc29uLWRpc3BsYXkvYmxvYi9tYXN0ZXIvanNvbi1kaXNwbGF5LmpzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgTHVjeSBHaWxiZXJ0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVmlld3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBzdGF0aWMgSlNPTkRpc3BsYXkoanNvbiwgb3BlbkxldmVsc0FyZywgc3R5bGVPcHRpb25zQXJnKSB7XG4gICAgICAgIHZhciBERUZBVUxUX1NUWUxFX09QVElPTlMgPSB7XG4gICAgICAgICAgcm9vdDogeyB0YWc6ICdwcmUnLCBzdHlsZTogJ3BhZGRpbmc6IDVweDsgZm9udC1zaXplOiAxcmVtOycgfSxcbiAgICAgICAgICB0aXRsZUNvbnRhaW5lcjogeyB0YWc6ICdkaXYnLCBzdHlsZTogJ21hcmdpbi1ib3R0b206IDNweDsnIH0sXG4gICAgICAgICAgdGl0bGU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyOycgfSxcbiAgICAgICAgICB0aXRsZVRleHQ6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnJyB9LFxuICAgICAgICAgIG9wZW5CdXR0b246IHsgXG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW46IDBweCA3cHggMHB4IDJweDsgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAnXG4gICAgICAgICAgICAgICAgICsgJ2JvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjazsnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudHNDb250YWluZXI6IHsgdGFnOiAnZGl2Jywgc3R5bGU6ICdwYWRkaW5nLWxlZnQ6IDE4cHg7JyB9LFxuICAgICAgICAgIGtleVZhbHVlUGFpcjogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogMnB4OycgfSxcbiAgICAgICAgICBrZXk6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGRhcmtibHVlOycgfSxcbiAgICAgICAgICBzeW1ib2xWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogZGFya2dyZWVuOycgfSxcbiAgICAgICAgICBzdHJpbmdWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogY3JpbXNvbjsnIH0sXG4gICAgICAgICAgbnVtYmVyVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICAgIGJvb2xlYW5WYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgICAgbnVsbFZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9wZW5MZXZlbHMgPSBpc05hTihwYXJzZUludChvcGVuTGV2ZWxzQXJnKSkgPyBJbmZpbml0eSA6IHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpO1xuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0gdHlwZW9mIHN0eWxlT3B0aW9uc0FyZyA9PT0gJ29iamVjdCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1lcmdlU3R5bGVPcHRpb25zKERFRkFVTFRfU1RZTEVfT1BUSU9OUywgc3R5bGVPcHRpb25zQXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBERUZBVUxUX1NUWUxFX09QVElPTlM7XG4gICAgXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgXG4gICAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMucm9vdC50YWcpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5yb290LnN0eWxlO1xuICAgIFxuICAgICAgICAgIGlmIChqc29uID09PSBudWxsIHx8IGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHZvaWRFbGVtZW50ID0gZ2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZvaWRFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb24gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBub25FeHBhbmRhYmxlRWxlbWVudCA9IGdldFZhbHVlKGpzb24pO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub25FeHBhbmRhYmxlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IEFycmF5LmlzQXJyYXkoanNvbikgPyAnQXJyYXlbJyArIGpzb24ubGVuZ3RoICsgJ10nIDogJ09iamVjdCc7XG4gICAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBvcGVuTGV2ZWxzIDwgMTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUodGl0bGUsIG51bGwsIHRoaXNMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCAxKSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCBpbmRleCkge1xuICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgICAgICB2YXIgbmV4dExldmVsSXNDbG9zZWQgPSBpbmRleCArIDEgPiBvcGVuTGV2ZWxzO1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250ZW50c0NvbnRhaW5lcih0aGlzTGV2ZWxJc0Nsb3NlZCk7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdBcnJheVsnICsganNvbltrZXldLmxlbmd0aCArICddJywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSA9PT0gbnVsbCB8fCBqc29uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwgbnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0udG9JU09TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbltrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ09iamVjdCcsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoanNvbikuZm9yRWFjaChmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihzeW1ib2wudG9TdHJpbmcoKSwganNvbltzeW1ib2xdKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRUaXRsZSh0aXRsZVRleHQsIG9wdGlvbmFsS2V5LCBsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRseUNsb3NlZCA9IGxldmVsSXNDbG9zZWQ7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlLnRhZyk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGUuc3R5bGU7XG4gICAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGlmIChvcHRpb25hbEtleSkge1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KG9wdGlvbmFsS2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3BlbkJ1dHRvbiA9IHRpdGxlRWxlbWVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBvYmplY3RDb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gY3VycmVudGx5Q2xvc2VkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgIG9wZW5CdXR0b24uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudGx5Q2xvc2VkID8gJ3JvdGF0ZSg5MGRlZyknIDogJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi50YWcpO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnN0eWxlO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICAgIHJldHVybiBidXR0b25FbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbnRlbnRzQ29udGFpbmVyKGlzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAnY29udGVudHNDb250YWluZXInKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIuc3R5bGU7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKGlzQ2xvc2VkID8gJ25vbmUnIDogJ2Jsb2NrJyk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgcGFpckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIudGFnKTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci5zdHlsZTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VmFsdWUodmFsdWUpKTtcbiAgICAgICAgICByZXR1cm4gcGFpckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KG5hbWUpIHtcbiAgICAgICAgICB2YXIga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleS50YWcpO1xuICAgICAgICAgIGtleUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXkuc3R5bGU7XG4gICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lICsgJzogJykpO1xuICAgICAgICAgIHJldHVybiBrZXlFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgICAgICB2YXIgbnVsbFR5cGUgPSAnb2JqZWN0JztcbiAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCInICsgdmFsdWUgKyAnXCInKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG51bGxUeXBlOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udWxsVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgICAgIHZhciBtZXJnZWQgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG1lcmdlZFtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiByZW5kZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBCYXNlTG9nIH0gZnJvbSAnLi9iYXNlTG9nJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgTG9nTm9kZU1peGlucyB9IGZyb20gJy4vdGVybUxvZy5taXhpbnMubm9kZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFdlYk5vZGVNaXhpbnMgfSBmcm9tICcuL3Rlcm1Mb2cubWl4aW5zLndlYic7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY2xhc3MgVGVybUxvZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUxvZywgeydub2RlJzpbTG9nTm9kZU1peGluc10sJ3dlYic6W1dlYk5vZGVNaXhpbnNdfSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgVGVybUxvZygpOyIsImltcG9ydCAqIGFzIGNsaVByb2dyZXNzIGZyb20gJ2NsaS1wcm9ncmVzcyc7XG5cbmNvbnN0IExvZ05vZGVNaXhpbnMgPSAoTG9nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzc3tcbiAgICBjb25uZWN0KGNoYW5uZWwpe1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9nKG1lc3NhZ2Upe1xuICAgICAgICAvL1RPRE86IG1ha2UgZGVjb3JhdG9yIFxuICAgICAgICB0aGlzLmN1cnJlbnRCYXIgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3NCZWdpbihyYW5nZSl7XG4gICAgICAgIHRoaXMuY3VycmVudEJhciA9IG5ldyBjbGlQcm9ncmVzcy5CYXIoe30sIGNsaVByb2dyZXNzLlByZXNldHMuc2hhZGVzX2NsYXNzaWMpO1xuICAgIH1cbiAgICBwcm9ncmVzc1VwZGF0ZShwcm9ncmVzc01lc3NhZ2Upe1xuICAgICAgICBpZighdGhpcy5jdXJyZW50QmFyKXtcbiAgICAgICAgICAgIGxldCB0b3RhbFZhbCA9IChwcm9ncmVzc01lc3NhZ2UudG90YWwpP3Byb2dyZXNzTWVzc2FnZS50b3RhbDoxMDA7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCYXIuc3RhcnQodG90YWxWYWwsIDAsIHByb2dyZXNzTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxldCB0b3RhbFZhbCA9IChwcm9ncmVzc01lc3NhZ2UudG90YWwpP3Byb2dyZXNzTWVzc2FnZS50b3RhbDoxMDA7XG4gICAgICAgICAgICBsZXQgY3VycmVudFZhbCA9IChwcm9ncmVzc01lc3NhZ2UuY3VycmVudCk/cHJvZ3Jlc3NNZXNzYWdlLmN1cnJlbnQ6MTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJhci5zZXRUb3RhbCh0b3RhbFZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50QmFyLnVwZGF0ZShjdXJyZW50VmFsKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3NFbmQoKXtcblxuICAgIH1cbiAgICBkZWJ1ZyhtZXNzYWdlKXtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyID0gZmFsc2U7IFxuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dOb2RlTWl4aW5zOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBKc29uVmlld30gZnJvbSAnLi9wcmV0dHlKc29uJztcbmNvbnN0IFdlYk5vZGVNaXhpbnMgPSAoTG9nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzc3tcbiAgICBjb25uZWN0KGRvY3VtZW50RWw9bnVsbCl7XG4gICAgICAgIGRvY3VtZW50RWwgPSBkb2N1bWVudEVsfHxkb2N1bWVudC5ib2R5O1xuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gXCJsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XCI7XG4gICAgICAgIGRvY3VtZW50RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbCA9IGRvY3VtZW50RWw7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwgPSBkb2N1bWVudEVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIilbMF07XG4gICAgfVxuICAgIHNjcm9sbEJvdHRvbShlbGVtZW50PW51bGwpe1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLmZyYW1lRWw7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9XG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2Upe1xuICAgICAgICAvLyBsZXQgbm9kZSA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaTpudGgtbGFzdC1vZi10eXBlKDEpXCIpO1xuICAgICAgICBsZXQgTElOb2RlcyA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKTtcbiAgICAgICAgbGV0IG5vZGUgPSBMSU5vZGVzW0xJTm9kZXMubGVuZ3RoLTFdO1xuICAgICAgICBpZighbm9kZSB8fCBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlci1wcm9ncmVzc1wiKSl7XG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgZWxcbiAgICAgICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJsb2dnZXItcHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBqc29uTm9kZSA9IEpzb25WaWV3LkpTT05EaXNwbGF5KHByb2Nlc3NNZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5sb2dnZXJFbCB8fCAhdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZCl7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gJ2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlOyc7ICAgICAgIFxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShtZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy9ubyBzaG93IG9uIHdlYiBzY3JlZW47ICAgICAgICBcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWJOb2RlTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NsaV9wcm9ncmVzc19fOyJdLCJzb3VyY2VSb290IjoiIn0=