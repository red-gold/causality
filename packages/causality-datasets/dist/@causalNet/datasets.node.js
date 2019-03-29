(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.memcache"), require("causal-net.preprocessing"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.memcache", "causal-net.preprocessing", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/datasets"] = factory(require("causal-net.core"), require("causal-net.memcache"), require("causal-net.preprocessing"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/datasets"] = factory(root["causal-net.core"], root["causal-net.memcache"], root["causal-net.preprocessing"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__, __WEBPACK_EXTERNAL_MODULE_causal_net_preprocessing__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/null-loader/index.js":
/*!***********************************************************************!*\
  !*** /Users/huynh/github/causality/node_modules/null-loader/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	this.cacheable();
	return "// empty (null-loader)";
};
module.exports.pitch = function() {
	this.cacheable();
	return "// empty (null-loader)";
};

/***/ }),

/***/ "../causality-log/dist/@causalNet/log.web.js":
/*!***************************************************!*\
  !*** ../causality-log/dist/@causalNet/log.web.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! null-loader */ "../../node_modules/null-loader/index.js"));
	else {}
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
/*!******************************!*\
  !*** external "null-loader" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cli_progress__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9sb2dnZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3ByZXR0eUpzb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nZ2VyLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2dnZXIubWl4aW5zLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcIm51bGwtbG9hZGVyXCIiXSwibmFtZXMiOlsiQmFzZUxvZ2dlciIsImNvbnN0cnVjdG9yIiwiQWNjZXB0ZWRMZXZlbHMiLCJkZWJ1ZyIsImxvZyIsIndhcm4iLCJlcnJvciIsInJBY2NlcHRlZExldmVscyIsImxldmVsIiwiTGV2ZWwiLCJ1bmRlZmluZWQiLCJFcnJvciIsIk9iamVjdCIsImtleXMiLCJjb25uZWN0IiwibWVzc2FnZSIsImdyb3VwQmVnaW4iLCJuYW1lIiwiZ3JvdXBFbmQiLCJwcm9ncmVzc0JlZ2luIiwicmFuZ2UiLCJwcm9ncmVzc1VwZGF0ZSIsInByb2dyZXNzRW5kIiwiTG9nZ2VyTWl4aW5zIiwiQmFzZUNsYXNzIiwiTG9nZ2VyIiwibG9nZ2VyIiwiYXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiSnNvblZpZXciLCJKU09ORGlzcGxheSIsImpzb24iLCJvcGVuTGV2ZWxzQXJnIiwic3R5bGVPcHRpb25zQXJnIiwiREVGQVVMVF9TVFlMRV9PUFRJT05TIiwicm9vdCIsInRhZyIsInN0eWxlIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZSIsInRpdGxlVGV4dCIsIm9wZW5CdXR0b24iLCJjb250ZW50c0NvbnRhaW5lciIsImtleVZhbHVlUGFpciIsImtleSIsInN5bWJvbFZhbHVlIiwic3RyaW5nVmFsdWUiLCJudW1iZXJWYWx1ZSIsImJvb2xlYW5WYWx1ZSIsIm51bGxWYWx1ZSIsIm9wZW5MZXZlbHMiLCJpc05hTiIsInBhcnNlSW50IiwiSW5maW5pdHkiLCJzdHlsZU9wdGlvbnMiLCJtZXJnZVN0eWxlT3B0aW9ucyIsImFzc2lnbiIsInRhcmdldCIsIlR5cGVFcnJvciIsInRvIiwiaW5kZXgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuZXh0U291cmNlIiwibmV4dEtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJlbmRlciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjc3NUZXh0Iiwidm9pZEVsZW1lbnQiLCJnZXRWYWx1ZSIsImFwcGVuZENoaWxkIiwiRGF0ZSIsImRhdGVFbGVtZW50IiwidG9JU09TdHJpbmciLCJub25FeHBhbmRhYmxlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsInRoaXNMZXZlbElzQ2xvc2VkIiwiZ2V0VGl0bGUiLCJjb252ZXJ0SnNvblRvRWxlbWVudHMiLCJuZXh0TGV2ZWxJc0Nsb3NlZCIsImNvbnRhaW5lciIsImdldENvbnRlbnRzQ29udGFpbmVyIiwiZ2V0U3RhbmRhcmRQYWlyIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZm9yRWFjaCIsInN5bWJvbCIsInRvU3RyaW5nIiwib3B0aW9uYWxLZXkiLCJsZXZlbElzQ2xvc2VkIiwiY3VycmVudGx5Q2xvc2VkIiwiY29udGFpbmVyRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRFbGVtZW50IiwidGl0bGVFbGVtZW50IiwiZ2V0T3BlbkJ1dHRvbiIsImdldEtleSIsImNyZWF0ZVRleHROb2RlIiwib25jbGljayIsImZpcnN0Q2hpbGQiLCJvYmplY3RDb250ZW50cyIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsImRpc3BsYXkiLCJ0cmFuc2Zvcm0iLCJidXR0b25FbGVtZW50IiwiaXNDbG9zZWQiLCJ2YWx1ZSIsInBhaXJFbGVtZW50Iiwia2V5RWxlbWVudCIsInZhbHVlRWxlbWVudCIsIm51bGxUeXBlIiwiZGVmYXVsdHMiLCJvdmVycmlkZXMiLCJtZXJnZWQiLCJUZXJtTG9nZ2VyIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwibm9kZSIsIkxvZ05vZGVNaXhpbnMiLCJ3ZWIiLCJMb2dXZWJNaXhpbnMiLCJncm91cFN0YWNrIiwiZ3JvdXAiLCJiZWdpblRpbWUiLCJwdXNoIiwiaW5kZW50U3BhY2UiLCJwb3AiLCJMb2dDbGFzcyIsImNoYW5uZWwiLCJjdXJyZW50QmFyIiwiY29uc29sZSIsInByb2Nlc3NDb3VudGVyIiwiY2xpUHJvZ3Jlc3MiLCJzaGFkZXNfY2xhc3NpYyIsInNldFRvdGFsIiwicHJvZ3Jlc3NNZXNzYWdlIiwidXBkYXRlIiwic3RvcCIsImRvY3VtZW50RWwiLCJib2R5IiwiZnJhbWVFbCIsImxvZ2dlckVsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb2xvckNvZGUiLCJzY3JvbGxCb3R0b20iLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJwcm9ncmVzcyIsInByb2Nlc3NNZXNzYWdlIiwiTElOb2RlcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwianNvbk5vZGUiLCJkYXRlIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7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QU8sSUFBUDtBQUNIOztBQUNELFFBQUltQyxLQUFLLEdBQUcsV0FBVyxLQUFLZ0gsU0FBTCxDQUFlLE9BQWYsQ0FBdkI7QUFDQSxTQUFLakosR0FBTCxDQUFTVyxPQUFULEVBQWtCc0IsS0FBbEI7QUFDSDs7QUEzRW1ELENBQXhEOztBQThFZXlGLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBLDhEOzs7Ozs7Ozs7OztBQ0FBLDBEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbG9nLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJudWxsLWxvYWRlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LnV0aWxzXCIsIFwibnVsbC1sb2FkZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwibnVsbC1sb2FkZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgcm9vdFtcIm51bGwtbG9hZGVyXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NsaV9wcm9ncmVzc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiBUaGlzIEJhc2VMb2dnZXIgY2xhc3MgcHJvdmlkZWQgYWJzdHJhY3QgY2xhc3MgZm9yIGV4dGVuZGluZyBuZXcgbG9nZ2VyIGNsYXNzXG4gKiBAY2xhc3MgQmFzZUxvZ1xuICovXG5jbGFzcyBCYXNlTG9nZ2Vye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuQWNjZXB0ZWRMZXZlbHMgPSB7ZGVidWc6IDAsIGxvZzoxLCB3YXJuOjIsIGVycm9yOiAzfTtcbiAgICAgICAgdGhpcy5yQWNjZXB0ZWRMZXZlbHMgPSB7MDonZGVidWcnLCAxOiAnbG9nJywgMjogJ3dhcm4nLCAzOiAnZXJyb3InfTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ107XG4gICAgfVxuICAgIHNldCBMZXZlbChsZXZlbCl7XG4gICAgICAgIGlmKHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke2xldmVsfSBtdXN0IGJlIG9uZSBvZiAke09iamVjdC5rZXlzKHRoaXMuQWNjZXB0ZWRMZXZlbHMpfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBMZXZlbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yQWNjZXB0ZWRMZXZlbHNbdGhpcy5sZXZlbF07XG4gICAgfVxuXG4gICAgY29ubmVjdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbG9nKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIFxuICAgIHdhcm4obWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG4gICAgXG4gICAgZXJyb3IobWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBkZWJ1ZyhtZXNzYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGdyb3VwQmVnaW4obmFtZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBncm91cEVuZCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3NCZWdpbihyYW5nZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBwcm9ncmVzc1VwZGF0ZShtZXNzYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIHByb2dyZXNzRW5kKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlTG9nZ2VyOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdGVybUxvZ2dlciB9IGZyb20gJy4vdGVybUxvZ2dlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ2dlck1peGlucyB9IGZyb20gJy4vbG9nZ2VyLm1peGlucyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmFzZUxvZ2dlciB9IGZyb20gJy4vYmFzZUxvZ2dlcic7XG5cbiIsImltcG9ydCB7ZGVmYXVsdCBhcyBCYXNlTG9nZ2VyIH0gZnJvbSAnLi9iYXNlTG9nZ2VyJztcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIExvZ2dlck1peGlucyBjbGFzcyBwcm92aWRlcyBtaXhpbnMgZm9yIGFjY3F1aXJpbmcgbG9nZ2VyXG4gKiBAY2xhc3MgTG9nZ2VyTWl4aW5zXG4gKiBAZXh0ZW5kcyBCYXNlQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9sb2dnZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBMb2dnZXJNaXhpbnMgPSAoQmFzZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUNsYXNze1xuICAgIFxuICAgIHNldCBMb2dnZXIobG9nZ2VyKXtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihsb2dnZXIsIEJhc2VMb2dnZXIpO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB9XG4gICAgXG4gICAgZ2V0IExvZ2dlcigpe1xuICAgICAgICBpZighdGhpcy5sb2dnZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2xvZ2dlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlck1peGluczsiLCIvLyBvcmlnaW4gY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWN5Z2lsYmVydC9qc29uLWRpc3BsYXkvYmxvYi9tYXN0ZXIvanNvbi1kaXNwbGF5LmpzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgTHVjeSBHaWxiZXJ0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVmlld3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBzdGF0aWMgSlNPTkRpc3BsYXkoanNvbiwgb3BlbkxldmVsc0FyZywgc3R5bGVPcHRpb25zQXJnKSB7XG4gICAgICAgIHZhciBERUZBVUxUX1NUWUxFX09QVElPTlMgPSB7XG4gICAgICAgICAgcm9vdDogeyB0YWc6ICdwcmUnLCBzdHlsZTogJ3BhZGRpbmc6IDVweDsgZm9udC1zaXplOiAxcmVtOycgfSxcbiAgICAgICAgICB0aXRsZUNvbnRhaW5lcjogeyB0YWc6ICdkaXYnLCBzdHlsZTogJ21hcmdpbi1ib3R0b206IDNweDsnIH0sXG4gICAgICAgICAgdGl0bGU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyOycgfSxcbiAgICAgICAgICB0aXRsZVRleHQ6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnJyB9LFxuICAgICAgICAgIG9wZW5CdXR0b246IHsgXG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW46IDBweCA3cHggMHB4IDJweDsgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAnXG4gICAgICAgICAgICAgICAgICsgJ2JvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjazsnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudHNDb250YWluZXI6IHsgdGFnOiAnZGl2Jywgc3R5bGU6ICdwYWRkaW5nLWxlZnQ6IDE4cHg7JyB9LFxuICAgICAgICAgIGtleVZhbHVlUGFpcjogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogMnB4OycgfSxcbiAgICAgICAgICBrZXk6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGRhcmtibHVlOycgfSxcbiAgICAgICAgICBzeW1ib2xWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogZGFya2dyZWVuOycgfSxcbiAgICAgICAgICBzdHJpbmdWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogY3JpbXNvbjsnIH0sXG4gICAgICAgICAgbnVtYmVyVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICAgIGJvb2xlYW5WYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgICAgbnVsbFZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9wZW5MZXZlbHMgPSBpc05hTihwYXJzZUludChvcGVuTGV2ZWxzQXJnKSkgPyBJbmZpbml0eSA6IHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpO1xuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0gdHlwZW9mIHN0eWxlT3B0aW9uc0FyZyA9PT0gJ29iamVjdCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1lcmdlU3R5bGVPcHRpb25zKERFRkFVTFRfU1RZTEVfT1BUSU9OUywgc3R5bGVPcHRpb25zQXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBERUZBVUxUX1NUWUxFX09QVElPTlM7XG4gICAgXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgXG4gICAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMucm9vdC50YWcpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5yb290LnN0eWxlO1xuICAgIFxuICAgICAgICAgIGlmIChqc29uID09PSBudWxsIHx8IGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHZvaWRFbGVtZW50ID0gZ2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZvaWRFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb24gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBub25FeHBhbmRhYmxlRWxlbWVudCA9IGdldFZhbHVlKGpzb24pO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub25FeHBhbmRhYmxlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IEFycmF5LmlzQXJyYXkoanNvbikgPyAnQXJyYXlbJyArIGpzb24ubGVuZ3RoICsgJ10nIDogJ09iamVjdCc7XG4gICAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBvcGVuTGV2ZWxzIDwgMTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUodGl0bGUsIG51bGwsIHRoaXNMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCAxKSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCBpbmRleCkge1xuICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgICAgICB2YXIgbmV4dExldmVsSXNDbG9zZWQgPSBpbmRleCArIDEgPiBvcGVuTGV2ZWxzO1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250ZW50c0NvbnRhaW5lcih0aGlzTGV2ZWxJc0Nsb3NlZCk7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdBcnJheVsnICsganNvbltrZXldLmxlbmd0aCArICddJywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSA9PT0gbnVsbCB8fCBqc29uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwgbnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0udG9JU09TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbltrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ09iamVjdCcsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoanNvbikuZm9yRWFjaChmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihzeW1ib2wudG9TdHJpbmcoKSwganNvbltzeW1ib2xdKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRUaXRsZSh0aXRsZVRleHQsIG9wdGlvbmFsS2V5LCBsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRseUNsb3NlZCA9IGxldmVsSXNDbG9zZWQ7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlLnRhZyk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGUuc3R5bGU7XG4gICAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGlmIChvcHRpb25hbEtleSkge1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KG9wdGlvbmFsS2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3BlbkJ1dHRvbiA9IHRpdGxlRWxlbWVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBvYmplY3RDb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gY3VycmVudGx5Q2xvc2VkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgIG9wZW5CdXR0b24uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudGx5Q2xvc2VkID8gJ3JvdGF0ZSg5MGRlZyknIDogJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi50YWcpO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnN0eWxlO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICAgIHJldHVybiBidXR0b25FbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbnRlbnRzQ29udGFpbmVyKGlzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAnY29udGVudHNDb250YWluZXInKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIuc3R5bGU7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKGlzQ2xvc2VkID8gJ25vbmUnIDogJ2Jsb2NrJyk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgcGFpckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIudGFnKTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci5zdHlsZTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VmFsdWUodmFsdWUpKTtcbiAgICAgICAgICByZXR1cm4gcGFpckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KG5hbWUpIHtcbiAgICAgICAgICB2YXIga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleS50YWcpO1xuICAgICAgICAgIGtleUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXkuc3R5bGU7XG4gICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lICsgJzogJykpO1xuICAgICAgICAgIHJldHVybiBrZXlFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgICAgICB2YXIgbnVsbFR5cGUgPSAnb2JqZWN0JztcbiAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCInICsgdmFsdWUgKyAnXCInKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG51bGxUeXBlOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udWxsVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgICAgIHZhciBtZXJnZWQgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG1lcmdlZFtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiByZW5kZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBCYXNlTG9nZ2VyIH0gZnJvbSAnLi9iYXNlTG9nZ2VyJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgTG9nTm9kZU1peGlucyB9IGZyb20gJy4vdGVybUxvZ2dlci5taXhpbnMubm9kZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIExvZ1dlYk1peGlucyB9IGZyb20gJy4vdGVybUxvZ2dlci5taXhpbnMud2ViJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG4vKipcbiAqIFRoaXMgVGVybUxvZ2dlciBwcm92aWRlIGlzb21vcnBoaWMgbG9nZ2VyXG4gKiB7IG1peFdpdGggOiB7ICdub2RlJzogW0xvZ05vZGVNaXhpbnNdLCAnd2ViJzogW1dlYk5vZGVNaXhpbnNdIH0gfVxuICogQGNsYXNzIFRlcm1Mb2dnZXJcbiAqIEBleHRlbmRzIEJhc2VMb2dnZXJcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9sb2cuYmFiZWwuanNdXG4gKi9cbmNsYXNzIFRlcm1Mb2dnZXIgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VMb2dnZXIsIFxuICAgICAgICB7IG5vZGU6W0xvZ05vZGVNaXhpbnNdLCBcbiAgICAgICAgICB3ZWI6W0xvZ1dlYk1peGluc10gfSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8qKkBwcml2YXRlIHsgQXJyYXkgfSBzdGFjayBvZiBncm91cHMgKi9cbiAgICAgICAgdGhpcy5ncm91cFN0YWNrID0gW107XG4gICAgfVxuICAgIFxuICAgIGdyb3VwQmVnaW4obmFtZSl7ICAgXG4gICAgICAgIGxldCBncm91cCA9IHtuYW1lLCBiZWdpblRpbWU6IG5ldyBEYXRlKCl9O1xuICAgICAgICB0aGlzLmdyb3VwU3RhY2sucHVzaChncm91cCk7XG4gICAgICAgIGxldCBpbmRlbnRTcGFjZSA9ICcnO1xuICAgICAgICB0aGlzLmxvZyhgJHtpbmRlbnRTcGFjZX0ke2dyb3VwLm5hbWV9OiBiZWdpbiBhdCAke2dyb3VwLmJlZ2luVGltZX1gKTtcbiAgICB9XG4gICAgZ3JvdXBFbmQoKXtcbiAgICAgICAgaWYodGhpcy5ncm91cFN0YWNrLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cFN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgbGV0IGluZGVudFNwYWNlID0gJyc7XG4gICAgICAgICAgICB0aGlzLmxvZyhgJHtpbmRlbnRTcGFjZX0ke2dyb3VwLm5hbWV9OiBlbmQgYWZ0ZXIgJHsobmV3IERhdGUoKSAtIGdyb3VwLmJlZ2luVGltZSl9IChtcylgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBUZXJtTG9nZ2VyKCk7IiwiaW1wb3J0ICogYXMgY2xpUHJvZ3Jlc3MgZnJvbSAnY2xpLXByb2dyZXNzJztcblxuY29uc3QgTG9nTm9kZU1peGlucyA9IChMb2dDbGFzcyk9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNze1xuICAgIGNvbm5lY3QoY2hhbm5lbCl7XG4gICAgICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSl7XG4gICAgICAgIC8vVE9ETzogbWFrZSBkZWNvcmF0b3IgXG4gICAgICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlO1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBwcm9ncmVzc0JlZ2luKHJhbmdlKXtcbiAgICAgICAgdGhpcy5wcm9jZXNzQ291bnRlciArPSAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIgPSBuZXcgY2xpUHJvZ3Jlc3MuQmFyKHt9LCBjbGlQcm9ncmVzcy5QcmVzZXRzLnNoYWRlc19jbGFzc2ljKTtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyLnNldFRvdGFsKHJhbmdlKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3NVcGRhdGUocHJvZ3Jlc3NNZXNzYWdlKXtcbiAgICAgICAgaWYoIXRoaXMuY3VycmVudEJhcil7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmVnaW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2Nlc3NDb3VudGVyICs9IDE7XG4gICAgICAgIHRoaXMuY3VycmVudEJhci51cGRhdGUodGhpcy5wcm9jZXNzQ291bnRlcik7XG4gICAgfVxuICAgIHByb2dyZXNzRW5kKCl7XG4gICAgICAgIHRoaXMuY3VycmVudEJhci5zdG9wKCk7XG4gICAgICAgIHRoaXMucHJvY2Vzc0NvdW50ZXIgPSAwO1xuICAgIH1cbiAgICBkZWJ1ZyhtZXNzYWdlKXtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHdhcm4obWVzc2FnZSl7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ3dhcm4nXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZXJyb3IobWVzc2FnZSl7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2Vycm9yJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dOb2RlTWl4aW5zOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBKc29uVmlld30gZnJvbSAnLi9wcmV0dHlKc29uJztcbmNvbnN0IExvZ1dlYk1peGlucyA9IChMb2dDbGFzcyk9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNze1xuICAgIGNvbm5lY3QoZG9jdW1lbnRFbD1udWxsKXtcbiAgICAgICAgZG9jdW1lbnRFbCA9IGRvY3VtZW50RWx8fGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBcImxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcIjtcbiAgICAgICAgZG9jdW1lbnRFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgdGhpcy5mcmFtZUVsID0gZG9jdW1lbnRFbDtcbiAgICAgICAgdGhpcy5sb2dnZXJFbCA9IGRvY3VtZW50RWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1bFwiKVswXTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSB7IGRlYnVnOiAnI2YxZjFmMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZzogJyMwMTAxMDEnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuOiAnI2VhZTI2ZScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICcjZWE2ZTc4JyB9O1xuICAgIH1cbiAgICBzY3JvbGxCb3R0b20oZWxlbWVudD1udWxsKXtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5mcmFtZUVsO1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIHByb2dyZXNzKHByb2Nlc3NNZXNzYWdlKXtcbiAgICAgICAgLy8gbGV0IG5vZGUgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGk6bnRoLWxhc3Qtb2YtdHlwZSgxKVwiKTtcbiAgICAgICAgbGV0IExJTm9kZXMgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XG4gICAgICAgIGxldCBub2RlID0gTElOb2Rlc1tMSU5vZGVzLmxlbmd0aC0xXTtcbiAgICAgICAgaWYoIW5vZGUgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2dnZXItcHJvZ3Jlc3NcIikpe1xuICAgICAgICAgICAgLy9jcmVhdGUgbmV3IGVsXG4gICAgICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VyLXByb2dyZXNzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShwcm9jZXNzTWVzc2FnZSk7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSwgc3R5bGU9Jycpe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLmxvZ2dlckVsIHx8ICF0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKXtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSAnYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7JzsgICAgICAgXG4gICAgICAgIGxldCBqc29uTm9kZSA9IEpzb25WaWV3LkpTT05EaXNwbGF5KG1lc3NhZ2UpO1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgICAgICBqc29uTm9kZS5zdHlsZS5jc3NUZXh0ICs9ICc7JytzdHlsZTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBzdHlsZSA9ICdjb2xvcjonICsgdGhpcy5jb2xvckNvZGVbJ2RlYnVnJ107XG4gICAgICAgIHRoaXMubG9nKG1lc3NhZ2UsIHN0eWxlKTsgICAgICBcbiAgICB9XG5cbiAgICB3YXJuKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ3dhcm4nXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3R5bGUgPSAnY29sb3I6JyArIHRoaXMuY29sb3JDb2RlWyd3YXJuJ107XG4gICAgICAgIHRoaXMubG9nKG1lc3NhZ2UsIHN0eWxlKTtcbiAgICB9XG5cbiAgICBlcnJvcihtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydlcnJvciddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdHlsZSA9ICdjb2xvcjonICsgdGhpcy5jb2xvckNvZGVbJ2Vycm9yJ107XG4gICAgICAgIHRoaXMubG9nKG1lc3NhZ2UsIHN0eWxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dXZWJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpX3Byb2dyZXNzX187Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/MNIST.ImgDataset.js":
/*!*********************************!*\
  !*** ./src/MNIST.ImgDataset.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MnistDataset; });
/* harmony import */ var _baseImgDataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseImgDataset */ "./src/baseImgDataset.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.log */ "../causality-log/dist/@causalNet/log.web.js");
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_log__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.storage */ "causal-net.storage");
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! causal-net.memcache */ "causal-net.memcache");
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(causal_net_memcache__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function */ "./src/function.js");
/* harmony import */ var _imageDatasetfetch_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imageDatasetfetch.mixins */ "./src/imageDatasetfetch.mixins.js");
/* harmony import */ var _imageDatasetPreprocessing_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imageDatasetPreprocessing.mixins */ "./src/imageDatasetPreprocessing.mixins.js");
/* harmony import */ var _imageDatasetGenerator_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imageDatasetGenerator.mixins */ "./src/imageDatasetGenerator.mixins.js");
/* harmony import */ var causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! causal-net.preprocessing */ "causal-net.preprocessing");
/* harmony import */ var causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__);










class MnistDataset extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(_baseImgDataset__WEBPACK_IMPORTED_MODULE_0__["default"], [_imageDatasetfetch_mixins__WEBPACK_IMPORTED_MODULE_6__["default"], _imageDatasetPreprocessing_mixins__WEBPACK_IMPORTED_MODULE_7__["default"], causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__["PreprocessingMixins"], _imageDatasetGenerator_mixins__WEBPACK_IMPORTED_MODULE_8__["default"], causal_net_memcache__WEBPACK_IMPORTED_MODULE_4__["MemCacheMixins"], causal_net_storage__WEBPACK_IMPORTED_MODULE_3__["StorageMixins"], causal_net_log__WEBPACK_IMPORTED_MODULE_2__["LoggerMixins"]]) {
  constructor(...args) {
    super(...args);
    this.F = new _function__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.Storage = causal_net_storage__WEBPACK_IMPORTED_MODULE_3__["indexDBStorage"];
    this.MemCache = causal_net_memcache__WEBPACK_IMPORTED_MODULE_4__["memDownCache"];

    const PreprocessingSample = async (masterSampleBuffer, sampleSize) => {
      return await causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__["imagePreprocessing"].imageSplit(masterSampleBuffer, sampleSize);
    };

    const PreprocessingLabel = async (masterLabelBuffer, labelSize) => {
      return await causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__["imagePreprocessing"].imageSplit(masterLabelBuffer, labelSize);
    };

    this.setPreprocessingFunctions(PreprocessingSample, PreprocessingLabel);
  }

}
;

/***/ }),

/***/ "./src/baseImgDataset.js":
/*!*******************************!*\
  !*** ./src/baseImgDataset.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseImgDataset; });
class BaseImgDataset {
  constructor(datasetConfigure) {
    this.configuration = datasetConfigure;
    const {
      numSamples,
      sampleSize,
      numClasses
    } = this.configuration;
    this.dataSize = [numSamples, ...sampleSize];
    this.numSamples = numSamples;
    this.sampleSize = sampleSize;
    this.numClass = numClasses;
  }

  summary() {
    return this.configuration;
  }

}

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Function; });
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _function_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function.mixins */ "./src/function.mixins.js");



class Function extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], [_function_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
  constructor() {
    super();
  }

}

/***/ }),

/***/ "./src/function.mixins.js":
/*!********************************!*\
  !*** ./src/function.mixins.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const FunctionMixins = BaseFunctionClass => class extends BaseFunctionClass {
  getImgBufferSize(imgSize) {
    const R = this.R;
    return R.reduce((s, d) => s * d, 1, imgSize);
  }

  generatorWithIndex(items) {
    const R = this.R;
    return R.addIndex(R.map)((d, idx) => [idx, d], items);
  }

  splitTrainTestSet(items, splitIndex) {
    const R = this.R;
    return R.splitAt(splitIndex, items);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (FunctionMixins);

/***/ }),

/***/ "./src/imageDatasetGenerator.mixins.js":
/*!*********************************************!*\
  !*** ./src/imageDatasetGenerator.mixins.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const ImageDatasetGeneratorMixins = BaseImageClass => class extends BaseImageClass {
  getTrainTestSet(trainSize = null) {
    trainSize = trainSize || parseInt(this.savedPreprocessing.length * 0.9);
    const [trainSet, testSet] = this.F.splitTrainTestSet(this.savedPreprocessing, trainSize);
    return [trainSet, testSet];
  }

  makeSampleGenerator(sampleIdxSet, batchSize = null, start = 0, end = null) {
    if (!this.savedPreprocessing) {
      throw Error('preprocessing must be performed');
    }

    batchSize = batchSize ? batchSize : sampleIdxSet.length;

    const _batches = this.F.hsplitEvery(sampleIdxSet, batchSize);

    const batches = causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["Sampling"].choice(_batches, _batches.length);

    if (end === null) {
      end = batches.length;
    }

    let nextIndex = start,
        iterationCount = 0,
        step = 1;
    const batchGenerator = {
      next: async () => {
        let batchSamples = [],
            batchLabels = [];

        for (let [samplePath, labelPath] of batches[nextIndex]) {
          let sampleItem = await this.preProcessingStorage.getItem(samplePath, true);
          let labelItem = await this.preProcessingStorage.getItem(labelPath, true);
          batchSamples = [...batchSamples, sampleItem[samplePath]];
          batchLabels = [...batchLabels, labelItem[labelPath]];
        }

        nextIndex += step;
        let idx = iterationCount;
        iterationCount++;
        return {
          idx,
          batchSize,
          data: [batchSamples, batchLabels]
        };
      },

      *[Symbol.iterator]() {
        while (nextIndex < end) {
          yield this.next();
        }
      }

    };
    return batchGenerator;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ImageDatasetGeneratorMixins);

/***/ }),

/***/ "./src/imageDatasetPreprocessing.mixins.js":
/*!*************************************************!*\
  !*** ./src/imageDatasetPreprocessing.mixins.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const ImageDatasetPreprocessingMixins = BaseImageClass => class extends BaseImageClass {
  makePreprocessingStream(saveDir) {
    const ImageBufferSize = this.F.getImgBufferSize(this.sampleSize);
    const LabelBufferSize = this.numClass;
    this.logger.debug({
      imageBufferSize: ImageBufferSize,
      labelBufferSize: LabelBufferSize
    });

    const TransformFn = (chunk, chunkEncoding, afterTransformFn) => {
      const TransformAsync = async () => {
        let sampleBuffer = chunk.sample;
        let labelBuffer = chunk.label;
        this.logger.debug({
          sampleBuffer,
          labelBuffer
        });
        let preprocessedImgBuffer = await this.PreprocessingSampleFn(sampleBuffer, ImageBufferSize);
        let preprocessedLabelBuffer = await this.PreprocessingLabelFn(labelBuffer, LabelBufferSize);
        return {
          processedChunk: this.F.zip(preprocessedImgBuffer, preprocessedLabelBuffer),
          chunkIdx: chunk.idx
        };
      };

      TransformAsync(chunk).then(processedChunk => {
        afterTransformFn(null, processedChunk);
      });
    };

    const WriteFn = (processedChunk, chunkEncoding, callback) => {
      const WriteAsync = async processedChunk => {
        let generator = this.F.generatorWithIndex(processedChunk.processedChunk);
        let chunkIdx = processedChunk.chunkIdx;
        let samplePath = [],
            labelPath = [];

        for (let [idx, [sample, label]] of generator) {
          let chunkSamplePath = await this.preProcessingStorage.setItem(saveDir + 'sample/' + chunkIdx + '/' + idx + '/', sample);
          let chunkLabelPath = await this.preProcessingStorage.setItem(saveDir + 'label/' + chunkIdx + '/' + idx + '/', label);
          samplePath = [...samplePath, chunkSamplePath];
          labelPath = [...labelPath, chunkLabelPath];
          this.progress({
            preprocessing: [chunkSamplePath, chunkLabelPath]
          });
        }

        return this.F.zip(samplePath, labelPath);
      };

      WriteAsync(processedChunk).then(result => {
        if (this.savedPreprocessing) {
          this.savedPreprocessing = [...this.savedPreprocessing, ...result];
        } else {
          this.savedPreprocessing = result;
        }

        callback();
      });
    };

    let duplexer = causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["Stream"].makeDuplex(WriteFn);
    let transformer = causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["Stream"].makeTransform(TransformFn);
    let stream = duplexer.pipe(transformer).pipe(duplexer);
    return stream;
  }

  async preprocessingDataset(saveDir = '/preprocessing/mnist/', storeInMemory = false) {
    this.preProcessingStorage = storeInMemory ? this.memCache : this.storage;
    let stream = this.makePreprocessingStream(saveDir);
    let generator = this.F.generatorWithIndex(this.savedChunks);

    for (let [idx, [samplePath, labelPath]] of generator) {
      let sampleItem = await this.storage.getItem(samplePath, true);
      let labelItem = await this.storage.getItem(labelPath, true);
      let sample = sampleItem[samplePath];
      let label = labelItem[labelPath];
      this.logger.debug({
        sample,
        label
      });
      stream.push({
        idx,
        sample,
        label
      });
    }

    stream.push(null);
    return new Promise((resolve, reject) => {
      stream.on('finish', () => {
        resolve(this.savedPreprocessing);
      });
    });
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ImageDatasetPreprocessingMixins);

/***/ }),

/***/ "./src/imageDatasetfetch.mixins.js":
/*!*****************************************!*\
  !*** ./src/imageDatasetfetch.mixins.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const DatasetfetchMixins = BaseImageClass => class extends BaseClass {
  async fetchLabelChunk(saveDir, labelChunk) {
    let labelChunkUrl = this.configuration.datasetUrl + labelChunk;
    let labelSavePath = saveDir + labelChunk;
    return await this.storage.fetchFile(labelChunkUrl, labelSavePath);
  }

  async fetchSampleChunk(saveDir, sampleChunk) {
    let sampleChunkUrl = this.configuration.datasetUrl + sampleChunk;
    let sammpleSavePath = saveDir + sampleChunk;
    this.logger.debug({
      sampleChunkUrl,
      sammpleSavePath
    });
    return await this.storage.fetchPNGFile(sampleChunkUrl, sammpleSavePath);
  }

  selectChunks(numchunks, selectBy = 'random') {
    let chunkIdxs = causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["Sampling"].choice(this.configuration.chunkList, numchunks);
    return chunkIdxs.map((idx, ith) => [`data-chunk-${idx}.png`, `label-chunk-${idx}`]);
  }

  async fetchDataset(saveDir = '/mnist/', numchunks = 10, selectBy = 'random') {
    let selectedChunks = this.selectChunks(numchunks, selectBy);
    this.savedChunks = [];

    for (let [sampleChunk, labelChunk] of selectedChunks) {
      let samplePath = await this.fetchSampleChunk(saveDir, sampleChunk);
      let labelPath = await this.fetchLabelChunk(saveDir, labelChunk);
      this.savedChunks.push([samplePath, labelPath]);
      this.progress({
        saveChunks: [samplePath, labelPath]
      });
    }

    ;
    return this.F.unzip(this.savedChunks);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ImageDatasetfetchMixins);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: MNIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MNIST_ImgDataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MNIST.ImgDataset */ "./src/MNIST.ImgDataset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MNIST", function() { return _MNIST_ImgDataset__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

/***/ }),

/***/ "causal-net.memcache":
/*!**************************************!*\
  !*** external "causal-net.memcache" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__;

/***/ }),

/***/ "causal-net.preprocessing":
/*!*******************************************!*\
  !*** external "causal-net.preprocessing" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_preprocessing__;

/***/ }),

/***/ "causal-net.storage":
/*!*************************************!*\
  !*** external "causal-net.storage" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_storage__;

/***/ }),

/***/ "causal-net.utils":
/*!***********************************!*\
  !*** external "causal-net.utils" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_utils__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL1VzZXJzL2h1eW5oL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL251bGwtbG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi4vY2F1c2FsaXR5LWxvZy9kaXN0L0BjYXVzYWxOZXQvbG9nLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL01OSVNULkltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9iYXNlSW1nRGF0YXNldC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvZnVuY3Rpb24ubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvaW1hZ2VEYXRhc2V0R2VuZXJhdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2ltYWdlRGF0YXNldFByZXByb2Nlc3NpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvaW1hZ2VEYXRhc2V0ZmV0Y2gubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIk1uaXN0RGF0YXNldCIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VJbWdEYXRhc2V0IiwiSW1hZ2VEYXRhc2V0ZmV0Y2hNaXhpbnMiLCJJbWFnZURhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ01peGlucyIsIkltYWdlRGF0YXNldEdlbmVyYXRvck1peGlucyIsIk1lbUNhY2hlTWl4aW5zIiwiU3RvcmFnZU1peGlucyIsIkxvZ2dlck1peGlucyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIkYiLCJGdW5jdGlvbiIsIlN0b3JhZ2UiLCJpbmRleERCU3RvcmFnZSIsIk1lbUNhY2hlIiwibWVtRG93bkNhY2hlIiwiUHJlcHJvY2Vzc2luZ1NhbXBsZSIsIm1hc3RlclNhbXBsZUJ1ZmZlciIsInNhbXBsZVNpemUiLCJpbWFnZVByZXByb2Nlc3NpbmciLCJpbWFnZVNwbGl0IiwiUHJlcHJvY2Vzc2luZ0xhYmVsIiwibWFzdGVyTGFiZWxCdWZmZXIiLCJsYWJlbFNpemUiLCJzZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zIiwiZGF0YXNldENvbmZpZ3VyZSIsImNvbmZpZ3VyYXRpb24iLCJudW1TYW1wbGVzIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwibnVtQ2xhc3MiLCJzdW1tYXJ5IiwiQmFzZUZ1bmN0aW9uIiwiRnVuY3Rpb25NaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImdldEltZ0J1ZmZlclNpemUiLCJpbWdTaXplIiwiUiIsInJlZHVjZSIsInMiLCJkIiwiZ2VuZXJhdG9yV2l0aEluZGV4IiwiaXRlbXMiLCJhZGRJbmRleCIsIm1hcCIsImlkeCIsInNwbGl0VHJhaW5UZXN0U2V0Iiwic3BsaXRJbmRleCIsInNwbGl0QXQiLCJCYXNlSW1hZ2VDbGFzcyIsImdldFRyYWluVGVzdFNldCIsInRyYWluU2l6ZSIsInBhcnNlSW50Iiwic2F2ZWRQcmVwcm9jZXNzaW5nIiwibGVuZ3RoIiwidHJhaW5TZXQiLCJ0ZXN0U2V0IiwibWFrZVNhbXBsZUdlbmVyYXRvciIsInNhbXBsZUlkeFNldCIsImJhdGNoU2l6ZSIsInN0YXJ0IiwiZW5kIiwiRXJyb3IiLCJfYmF0Y2hlcyIsImhzcGxpdEV2ZXJ5IiwiYmF0Y2hlcyIsIlNhbXBsaW5nIiwiY2hvaWNlIiwibmV4dEluZGV4IiwiaXRlcmF0aW9uQ291bnQiLCJzdGVwIiwiYmF0Y2hHZW5lcmF0b3IiLCJuZXh0IiwiYmF0Y2hTYW1wbGVzIiwiYmF0Y2hMYWJlbHMiLCJzYW1wbGVQYXRoIiwibGFiZWxQYXRoIiwic2FtcGxlSXRlbSIsInByZVByb2Nlc3NpbmdTdG9yYWdlIiwiZ2V0SXRlbSIsImxhYmVsSXRlbSIsImRhdGEiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtIiwic2F2ZURpciIsIkltYWdlQnVmZmVyU2l6ZSIsIkxhYmVsQnVmZmVyU2l6ZSIsImxvZ2dlciIsImRlYnVnIiwiaW1hZ2VCdWZmZXJTaXplIiwibGFiZWxCdWZmZXJTaXplIiwiVHJhbnNmb3JtRm4iLCJjaHVuayIsImNodW5rRW5jb2RpbmciLCJhZnRlclRyYW5zZm9ybUZuIiwiVHJhbnNmb3JtQXN5bmMiLCJzYW1wbGVCdWZmZXIiLCJzYW1wbGUiLCJsYWJlbEJ1ZmZlciIsImxhYmVsIiwicHJlcHJvY2Vzc2VkSW1nQnVmZmVyIiwiUHJlcHJvY2Vzc2luZ1NhbXBsZUZuIiwicHJlcHJvY2Vzc2VkTGFiZWxCdWZmZXIiLCJQcmVwcm9jZXNzaW5nTGFiZWxGbiIsInByb2Nlc3NlZENodW5rIiwiemlwIiwiY2h1bmtJZHgiLCJ0aGVuIiwiV3JpdGVGbiIsImNhbGxiYWNrIiwiV3JpdGVBc3luYyIsImdlbmVyYXRvciIsImNodW5rU2FtcGxlUGF0aCIsInNldEl0ZW0iLCJjaHVua0xhYmVsUGF0aCIsInByb2dyZXNzIiwicHJlcHJvY2Vzc2luZyIsInJlc3VsdCIsImR1cGxleGVyIiwiU3RyZWFtIiwibWFrZUR1cGxleCIsInRyYW5zZm9ybWVyIiwibWFrZVRyYW5zZm9ybSIsInN0cmVhbSIsInBpcGUiLCJwcmVwcm9jZXNzaW5nRGF0YXNldCIsInN0b3JlSW5NZW1vcnkiLCJtZW1DYWNoZSIsInN0b3JhZ2UiLCJzYXZlZENodW5rcyIsInB1c2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwiRGF0YXNldGZldGNoTWl4aW5zIiwiQmFzZUNsYXNzIiwiZmV0Y2hMYWJlbENodW5rIiwibGFiZWxDaHVuayIsImxhYmVsQ2h1bmtVcmwiLCJkYXRhc2V0VXJsIiwibGFiZWxTYXZlUGF0aCIsImZldGNoRmlsZSIsImZldGNoU2FtcGxlQ2h1bmsiLCJzYW1wbGVDaHVuayIsInNhbXBsZUNodW5rVXJsIiwic2FtbXBsZVNhdmVQYXRoIiwiZmV0Y2hQTkdGaWxlIiwic2VsZWN0Q2h1bmtzIiwibnVtY2h1bmtzIiwic2VsZWN0QnkiLCJjaHVua0lkeHMiLCJjaHVua0xpc3QiLCJpdGgiLCJmZXRjaERhdGFzZXQiLCJzZWxlY3RlZENodW5rcyIsInNhdmVDaHVua3MiLCJ1bnppcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDUEE7QUFDQSxJQUFJLElBQXlEO0FBQzdELDJCQUEyQixtQkFBTyxDQUFDLDBDQUFrQixHQUFHLG1CQUFPLENBQUMsNERBQWE7QUFDN0UsTUFBTSxFQUs0RTtBQUNsRixDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFCQUFxQixNQUFNLGtCQUFrQixpQ0FBaUM7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRyw0REFBNEQsRUFBRTs7QUFFaks7QUFDQSxxR0FBcUcsK0RBQStELEVBQUU7O0FBRXRLO0FBQ0EsbUdBQW1HLDREQUE0RCxFQUFFOzs7Ozs7QUFNakssT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpR0FBaUcsaUJBQWlCLEVBQUU7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUJBQWlCO0FBQzlDLE9BQU87QUFDUDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLE9BQU87QUFDUDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHNDQUFzQyx5QkFBeUIsbUNBQW1DLDJDQUEyQyw4QkFBOEI7QUFDM0ssT0FBTztBQUNQO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsT0FBTztBQUNQO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CO0FBQ25ELE9BQU87QUFDUDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLE9BQU87QUFDUDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLE9BQU87QUFDUDtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLE9BQU87QUFDUDtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLE9BQU87QUFDUDtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCLDBCQUEwQjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0EsSUFBSSxZQUFZLGtEQUFrRDtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWSxFQUFFLFdBQVcsYUFBYSxnQkFBZ0I7QUFDdEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWSxFQUFFLFdBQVcsY0FBYyw2QkFBNkI7QUFDdEY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxxQkFBcUIsS0FBSztBQUMxRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSxnREFBZ0QscUJBQXFCLEtBQUs7QUFDMUUsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdB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RyxLQUFLUCxZQUFMLENBQWtCQyxTQUFsQixFQUE2QkMsUUFBN0IsQ0FBckI7QUFDQSxTQUFLckIsV0FBTCxHQUFtQixFQUFuQjs7QUFDQSxTQUFJLElBQUksQ0FBQ2UsV0FBRCxFQUFjTixVQUFkLENBQVIsSUFBcUNpQixjQUFyQyxFQUFvRDtBQUNoRCxVQUFJakYsVUFBVSxHQUFHLE1BQU0sS0FBS3FFLGdCQUFMLENBQXNCM0QsT0FBdEIsRUFBK0I0RCxXQUEvQixDQUF2QjtBQUNBLFVBQUlyRSxTQUFTLEdBQUcsTUFBTSxLQUFLOEQsZUFBTCxDQUFxQnJELE9BQXJCLEVBQThCc0QsVUFBOUIsQ0FBdEI7QUFDQSxXQUFLVCxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixDQUFDeEQsVUFBRCxFQUFhQyxTQUFiLENBQXRCO0FBQ0EsV0FBS3dDLFFBQUwsQ0FBYztBQUFDeUMsa0JBQVUsRUFBQyxDQUFDbEYsVUFBRCxFQUFhQyxTQUFiO0FBQVosT0FBZDtBQUNIOztBQUFBO0FBQ0QsV0FBTyxLQUFLbEUsQ0FBTCxDQUFPb0osS0FBUCxDQUFhLEtBQUs1QixXQUFsQixDQUFQO0FBQ0g7O0FBN0JnRSxDQUFyRTs7QUErQmVqSSxzRkFBZixFOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvZGF0YXNldHMubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiwgXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQubWVtY2FjaGVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNhY2hlYWJsZSgpO1xyXG5cdHJldHVybiBcIi8vIGVtcHR5IChudWxsLWxvYWRlcilcIjtcclxufTtcclxubW9kdWxlLmV4cG9ydHMucGl0Y2ggPSBmdW5jdGlvbigpIHtcclxuXHR0aGlzLmNhY2hlYWJsZSgpO1xyXG5cdHJldHVybiBcIi8vIGVtcHR5IChudWxsLWxvYWRlcilcIjtcclxufTsiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwibnVsbC1sb2FkZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC51dGlsc1wiLCBcIm51bGwtbG9hZGVyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcIm51bGwtbG9hZGVyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIHJvb3RbXCJudWxsLWxvYWRlclwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jbGlfcHJvZ3Jlc3NfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9zcmMvYmFzZUxvZ2dlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Jhc2VMb2dnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyoqXG4gKiBUaGlzIEJhc2VMb2dnZXIgY2xhc3MgcHJvdmlkZWQgYWJzdHJhY3QgY2xhc3MgZm9yIGV4dGVuZGluZyBuZXcgbG9nZ2VyIGNsYXNzXG4gKiBAY2xhc3MgQmFzZUxvZ1xuICovXG5jbGFzcyBCYXNlTG9nZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5BY2NlcHRlZExldmVscyA9IHtcbiAgICAgIGRlYnVnOiAwLFxuICAgICAgbG9nOiAxLFxuICAgICAgd2FybjogMixcbiAgICAgIGVycm9yOiAzXG4gICAgfTtcbiAgICB0aGlzLnJBY2NlcHRlZExldmVscyA9IHtcbiAgICAgIDA6ICdkZWJ1ZycsXG4gICAgICAxOiAnbG9nJyxcbiAgICAgIDI6ICd3YXJuJyxcbiAgICAgIDM6ICdlcnJvcidcbiAgICB9O1xuICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddO1xuICB9XG5cbiAgc2V0IExldmVsKGxldmVsKSB7XG4gICAgaWYgKHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoYCR7bGV2ZWx9IG11c3QgYmUgb25lIG9mICR7T2JqZWN0LmtleXModGhpcy5BY2NlcHRlZExldmVscyl9YCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IExldmVsKCkge1xuICAgIHJldHVybiB0aGlzLnJBY2NlcHRlZExldmVsc1t0aGlzLmxldmVsXTtcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgbG9nKG1lc3NhZ2UpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICB3YXJuKG1lc3NhZ2UpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGdyb3VwQmVnaW4obmFtZSkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGdyb3VwRW5kKCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIHByb2dyZXNzQmVnaW4ocmFuZ2UpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBwcm9ncmVzc1VwZGF0ZShtZXNzYWdlKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgcHJvZ3Jlc3NFbmQobWVzc2FnZSkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoQmFzZUxvZ2dlcik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IHRlcm1Mb2dnZXIsIExvZ2dlck1peGlucywgQmFzZUxvZ2dlciAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdGVybUxvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXJtTG9nZ2VyICovIFwiLi9zcmMvdGVybUxvZ2dlci5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInRlcm1Mb2dnZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfdGVybUxvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbG9nZ2VyX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9sb2dnZXIubWl4aW5zICovIFwiLi9zcmMvbG9nZ2VyLm1peGlucy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkxvZ2dlck1peGluc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9sb2dnZXJfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9iYXNlTG9nZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VMb2dnZXIgKi8gXCIuL3NyYy9iYXNlTG9nZ2VyLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQmFzZUxvZ2dlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9iYXNlTG9nZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9sb2dnZXIubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbG9nZ2VyLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Jhc2VMb2dnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYmFzZUxvZ2dlciAqLyBcIi4vc3JjL2Jhc2VMb2dnZXIuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC51dGlscyAqLyBcImNhdXNhbC1uZXQudXRpbHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG5cblxuLyoqXG4gKiBUaGlzIExvZ2dlck1peGlucyBjbGFzcyBwcm92aWRlcyBtaXhpbnMgZm9yIGFjY3F1aXJpbmcgbG9nZ2VyXG4gKiBAY2xhc3MgTG9nZ2VyTWl4aW5zXG4gKiBAZXh0ZW5kcyBCYXNlQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9sb2dnZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5cbmNvbnN0IExvZ2dlck1peGlucyA9IEJhc2VDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VDbGFzcyB7XG4gIHNldCBMb2dnZXIobG9nZ2VyKSB7XG4gICAgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiYXNzZXJ0XCJdLmJlSW5zdGFuY2VPZihsb2dnZXIsIF9iYXNlTG9nZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKTtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgfVxuXG4gIGdldCBMb2dnZXIoKSB7XG4gICAgaWYgKCF0aGlzLmxvZ2dlcikge1xuICAgICAgdGhyb3cgRXJyb3IoJ2xvZ2dlciBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9nZ2VyO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoTG9nZ2VyTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcHJldHR5SnNvbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3ByZXR0eUpzb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBKc29uVmlldzsgfSk7XG4vLyBvcmlnaW4gY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWN5Z2lsYmVydC9qc29uLWRpc3BsYXkvYmxvYi9tYXN0ZXIvanNvbi1kaXNwbGF5LmpzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgTHVjeSBHaWxiZXJ0XG5jbGFzcyBKc29uVmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGF0aWMgSlNPTkRpc3BsYXkoanNvbiwgb3BlbkxldmVsc0FyZywgc3R5bGVPcHRpb25zQXJnKSB7XG4gICAgdmFyIERFRkFVTFRfU1RZTEVfT1BUSU9OUyA9IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgdGFnOiAncHJlJyxcbiAgICAgICAgc3R5bGU6ICdwYWRkaW5nOiA1cHg7IGZvbnQtc2l6ZTogMXJlbTsnXG4gICAgICB9LFxuICAgICAgdGl0bGVDb250YWluZXI6IHtcbiAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgc3R5bGU6ICdtYXJnaW4tYm90dG9tOiAzcHg7J1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcjsnXG4gICAgICB9LFxuICAgICAgdGl0bGVUZXh0OiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJydcbiAgICAgIH0sXG4gICAgICBvcGVuQnV0dG9uOiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luOiAwcHggN3B4IDBweCAycHg7IGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgJyArICdib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7J1xuICAgICAgfSxcbiAgICAgIGNvbnRlbnRzQ29udGFpbmVyOiB7XG4gICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIHN0eWxlOiAncGFkZGluZy1sZWZ0OiAxOHB4OydcbiAgICAgIH0sXG4gICAgICBrZXlWYWx1ZVBhaXI6IHtcbiAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDJweDsnXG4gICAgICB9LFxuICAgICAga2V5OiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2NvbG9yOiBkYXJrYmx1ZTsnXG4gICAgICB9LFxuICAgICAgc3ltYm9sVmFsdWU6IHtcbiAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgIHN0eWxlOiAnY29sb3I6IGRhcmtncmVlbjsnXG4gICAgICB9LFxuICAgICAgc3RyaW5nVmFsdWU6IHtcbiAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgIHN0eWxlOiAnY29sb3I6IGNyaW1zb247J1xuICAgICAgfSxcbiAgICAgIG51bWJlclZhbHVlOiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2NvbG9yOiBibHVlOydcbiAgICAgIH0sXG4gICAgICBib29sZWFuVmFsdWU6IHtcbiAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgIHN0eWxlOiAnY29sb3I6IGJsdWU7J1xuICAgICAgfSxcbiAgICAgIG51bGxWYWx1ZToge1xuICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgc3R5bGU6ICdjb2xvcjogYmx1ZTsnXG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgb3BlbkxldmVscyA9IGlzTmFOKHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpKSA/IEluZmluaXR5IDogcGFyc2VJbnQob3BlbkxldmVsc0FyZyk7XG4gICAgdmFyIHN0eWxlT3B0aW9ucyA9IHR5cGVvZiBzdHlsZU9wdGlvbnNBcmcgPT09ICdvYmplY3QnID8gbWVyZ2VTdHlsZU9wdGlvbnMoREVGQVVMVF9TVFlMRV9PUFRJT05TLCBzdHlsZU9wdGlvbnNBcmcpIDogREVGQVVMVF9TVFlMRV9PUFRJT05TO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0bztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5yb290LnRhZyk7XG4gICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMucm9vdC5zdHlsZTtcblxuICAgICAgaWYgKGpzb24gPT09IG51bGwgfHwganNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciB2b2lkRWxlbWVudCA9IGdldFZhbHVlKG51bGwpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZvaWRFbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoanNvbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgdmFyIGRhdGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbi50b0lTT1N0cmluZygpKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB2YXIgbm9uRXhwYW5kYWJsZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub25FeHBhbmRhYmxlRWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdGl0bGUgPSBBcnJheS5pc0FycmF5KGpzb24pID8gJ0FycmF5WycgKyBqc29uLmxlbmd0aCArICddJyA6ICdPYmplY3QnO1xuICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBvcGVuTGV2ZWxzIDwgMTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChnZXRUaXRsZSh0aXRsZSwgbnVsbCwgdGhpc0xldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgMSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgaW5kZXgpIHtcbiAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgIHZhciBuZXh0TGV2ZWxJc0Nsb3NlZCA9IGluZGV4ICsgMSA+IG9wZW5MZXZlbHM7XG4gICAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGVudHNDb250YWluZXIodGhpc0xldmVsSXNDbG9zZWQpO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uW2tleV0pKSB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdBcnJheVsnICsganNvbltrZXldLmxlbmd0aCArICddJywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gPT09IG51bGwgfHwganNvbltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwgbnVsbCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldLnRvSVNPU3RyaW5nKCkpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbltrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnT2JqZWN0Jywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoanNvbikuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihzeW1ib2wudG9TdHJpbmcoKSwganNvbltzeW1ib2xdKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKHRpdGxlVGV4dCwgb3B0aW9uYWxLZXksIGxldmVsSXNDbG9zZWQpIHtcbiAgICAgIHZhciBjdXJyZW50bHlDbG9zZWQgPSBsZXZlbElzQ2xvc2VkO1xuICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnN0eWxlO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICd0aXRsZUNvbnRhaW5lcicpO1xuICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICB2YXIgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGUudGFnKTtcbiAgICAgIHRpdGxlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlLnN0eWxlO1xuICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSk7XG5cbiAgICAgIGlmIChvcHRpb25hbEtleSkge1xuICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkob3B0aW9uYWxLZXkpKTtcbiAgICAgIH1cblxuICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGVUZXh0KSk7XG4gICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuXG4gICAgICB0aXRsZUVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZW5CdXR0b24gPSB0aXRsZUVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIG9iamVjdENvbnRlbnRzLnN0eWxlLmRpc3BsYXkgPSBjdXJyZW50bHlDbG9zZWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICBvcGVuQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRseUNsb3NlZCA/ICdyb3RhdGUoOTBkZWcpJyA6ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgfTtcblxuICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSB7XG4gICAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm9wZW5CdXR0b24udGFnKTtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnN0eWxlO1xuICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBsZXZlbElzQ2xvc2VkID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDkwZGVnKSc7XG4gICAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50c0NvbnRhaW5lcihpc0Nsb3NlZCkge1xuICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICdjb250ZW50c0NvbnRhaW5lcicpO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnN0eWxlO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNDbG9zZWQgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBwYWlyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci50YWcpO1xuICAgICAgcGFpckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIuc3R5bGU7XG4gICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRWYWx1ZSh2YWx1ZSkpO1xuICAgICAgcmV0dXJuIHBhaXJFbGVtZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEtleShuYW1lKSB7XG4gICAgICB2YXIga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleS50YWcpO1xuICAgICAga2V5RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleS5zdHlsZTtcbiAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSArICc6ICcpKTtcbiAgICAgIHJldHVybiBrZXlFbGVtZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlKSB7XG4gICAgICB2YXIgdmFsdWVFbGVtZW50O1xuICAgICAgdmFyIG51bGxUeXBlID0gJ29iamVjdCc7XG5cbiAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS5zdHlsZTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUudG9TdHJpbmcoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUudGFnKTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS5zdHlsZTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1wiJyArIHZhbHVlICsgJ1wiJykpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUudGFnKTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS5zdHlsZTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUuc3R5bGU7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBudWxsVHlwZTpcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udWxsVmFsdWUudGFnKTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udWxsVmFsdWUuc3R5bGU7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgdmFyIG1lcmdlZCA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgbWVyZ2VkW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0c1trZXldLCBvdmVycmlkZXNba2V5XSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlcigpO1xuICB9XG5cbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZ2dlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2dnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9iYXNlTG9nZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VMb2dnZXIgKi8gXCIuL3NyYy9iYXNlTG9nZ2VyLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF90ZXJtTG9nZ2VyX21peGluc19ub2RlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Rlcm1Mb2dnZXIubWl4aW5zLm5vZGUgKi8gXCIuL3NyYy90ZXJtTG9nZ2VyLm1peGlucy5ub2RlLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF90ZXJtTG9nZ2VyX21peGluc193ZWJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGVybUxvZ2dlci5taXhpbnMud2ViICovIFwiLi9zcmMvdGVybUxvZ2dlci5taXhpbnMud2ViLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xuXG5cblxuXG4vKipcbiAqIFRoaXMgVGVybUxvZ2dlciBwcm92aWRlIGlzb21vcnBoaWMgbG9nZ2VyXG4gKiB7IG1peFdpdGggOiB7ICdub2RlJzogW0xvZ05vZGVNaXhpbnNdLCAnd2ViJzogW1dlYk5vZGVNaXhpbnNdIH0gfVxuICogQGNsYXNzIFRlcm1Mb2dnZXJcbiAqIEBleHRlbmRzIEJhc2VMb2dnZXJcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9sb2cuYmFiZWwuanNdXG4gKi9cblxuY2xhc3MgVGVybUxvZ2dlciBleHRlbmRzIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX1tcInBsYXRmb3JtXCJdLm1peFdpdGgoX2Jhc2VMb2dnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0sIHtcbiAgbm9kZTogW190ZXJtTG9nZ2VyX21peGluc19ub2RlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdXSxcbiAgd2ViOiBbX3Rlcm1Mb2dnZXJfbWl4aW5zX3dlYl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXV1cbn0pIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKipAcHJpdmF0ZSB7IEFycmF5IH0gc3RhY2sgb2YgZ3JvdXBzICovXG5cbiAgICB0aGlzLmdyb3VwU3RhY2sgPSBbXTtcbiAgfVxuXG4gIGdyb3VwQmVnaW4obmFtZSkge1xuICAgIGxldCBncm91cCA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBiZWdpblRpbWU6IG5ldyBEYXRlKClcbiAgICB9O1xuICAgIHRoaXMuZ3JvdXBTdGFjay5wdXNoKGdyb3VwKTtcbiAgICBsZXQgaW5kZW50U3BhY2UgPSAnJztcbiAgICB0aGlzLmxvZyhgJHtpbmRlbnRTcGFjZX0ke2dyb3VwLm5hbWV9OiBiZWdpbiBhdCAke2dyb3VwLmJlZ2luVGltZX1gKTtcbiAgfVxuXG4gIGdyb3VwRW5kKCkge1xuICAgIGlmICh0aGlzLmdyb3VwU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cFN0YWNrLnBvcCgpO1xuICAgICAgbGV0IGluZGVudFNwYWNlID0gJyc7XG4gICAgICB0aGlzLmxvZyhgJHtpbmRlbnRTcGFjZX0ke2dyb3VwLm5hbWV9OiBlbmQgYWZ0ZXIgJHtuZXcgRGF0ZSgpIC0gZ3JvdXAuYmVnaW5UaW1lfSAobXMpYCk7XG4gICAgfVxuICB9XG5cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChuZXcgVGVybUxvZ2dlcigpKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZ2dlci5taXhpbnMubm9kZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2dnZXIubWl4aW5zLm5vZGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNsaV9wcm9ncmVzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2xpLXByb2dyZXNzICovIFwiY2xpLXByb2dyZXNzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNsaV9wcm9ncmVzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNsaV9wcm9ncmVzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcblxuXG5jb25zdCBMb2dOb2RlTWl4aW5zID0gTG9nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzcyB7XG4gIGNvbm5lY3QoY2hhbm5lbCkge1xuICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlO1xuICB9XG5cbiAgbG9nKG1lc3NhZ2UpIHtcbiAgICAvL1RPRE86IG1ha2UgZGVjb3JhdG9yIFxuICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snbG9nJ10pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHJvZ3Jlc3NCZWdpbihyYW5nZSkge1xuICAgIHRoaXMucHJvY2Vzc0NvdW50ZXIgKz0gMTtcbiAgICB0aGlzLmN1cnJlbnRCYXIgPSBuZXcgY2xpX3Byb2dyZXNzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJCYXJcIl0oe30sIGNsaV9wcm9ncmVzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiUHJlc2V0c1wiXS5zaGFkZXNfY2xhc3NpYyk7XG4gICAgdGhpcy5jdXJyZW50QmFyLnNldFRvdGFsKHJhbmdlKTtcbiAgfVxuXG4gIHByb2dyZXNzVXBkYXRlKHByb2dyZXNzTWVzc2FnZSkge1xuICAgIGlmICghdGhpcy5jdXJyZW50QmFyKSB7XG4gICAgICB0aGlzLnByb2dyZXNzQmVnaW4oKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb2Nlc3NDb3VudGVyICs9IDE7XG4gICAgdGhpcy5jdXJyZW50QmFyLnVwZGF0ZSh0aGlzLnByb2Nlc3NDb3VudGVyKTtcbiAgfVxuXG4gIHByb2dyZXNzRW5kKCkge1xuICAgIHRoaXMuY3VycmVudEJhci5zdG9wKCk7XG4gICAgdGhpcy5wcm9jZXNzQ291bnRlciA9IDA7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgfVxuXG4gIHdhcm4obWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ3dhcm4nXSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2Vycm9yJ10pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cblxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChMb2dOb2RlTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZ2dlci5taXhpbnMud2ViLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90ZXJtTG9nZ2VyLm1peGlucy53ZWIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3ByZXR0eUpzb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJldHR5SnNvbiAqLyBcIi4vc3JjL3ByZXR0eUpzb24uanNcIik7XG5cblxuY29uc3QgTG9nV2ViTWl4aW5zID0gTG9nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzcyB7XG4gIGNvbm5lY3QoZG9jdW1lbnRFbCA9IG51bGwpIHtcbiAgICBkb2N1bWVudEVsID0gZG9jdW1lbnRFbCB8fCBkb2N1bWVudC5ib2R5O1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IFwibGlzdC1zdHlsZS10eXBlOiBub25lO1wiO1xuICAgIGRvY3VtZW50RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgdGhpcy5mcmFtZUVsID0gZG9jdW1lbnRFbDtcbiAgICB0aGlzLmxvZ2dlckVsID0gZG9jdW1lbnRFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpWzBdO1xuICAgIHRoaXMuY29sb3JDb2RlID0ge1xuICAgICAgZGVidWc6ICcjZjFmMWYxJyxcbiAgICAgIGxvZzogJyMwMTAxMDEnLFxuICAgICAgd2FybjogJyNlYWUyNmUnLFxuICAgICAgZXJyb3I6ICcjZWE2ZTc4J1xuICAgIH07XG4gIH1cblxuICBzY3JvbGxCb3R0b20oZWxlbWVudCA9IG51bGwpIHtcbiAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLmZyYW1lRWw7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2UpIHtcbiAgICAvLyBsZXQgbm9kZSA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaTpudGgtbGFzdC1vZi10eXBlKDEpXCIpO1xuICAgIGxldCBMSU5vZGVzID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgIGxldCBub2RlID0gTElOb2Rlc1tMSU5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKCFub2RlIHx8IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9nZ2VyLXByb2dyZXNzXCIpKSB7XG4gICAgICAvL2NyZWF0ZSBuZXcgZWxcbiAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJsb2dnZXItcHJvZ3Jlc3NcIik7XG4gICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cblxuICAgIGxldCBqc29uTm9kZSA9IF9wcmV0dHlKc29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdLkpTT05EaXNwbGF5KHByb2Nlc3NNZXNzYWdlKTtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgfVxuXG4gIGxvZyhtZXNzYWdlLCBzdHlsZSA9ICcnKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snbG9nJ10pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5sb2dnZXJFbCB8fCAhdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZCkge1xuICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgfVxuXG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gJ2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlOyc7XG4gICAgbGV0IGpzb25Ob2RlID0gX3ByZXR0eUpzb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0uSlNPTkRpc3BsYXkobWVzc2FnZSk7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgIGpzb25Ob2RlLnN0eWxlLmNzc1RleHQgKz0gJzsnICsgc3R5bGU7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBzdHlsZSA9ICdjb2xvcjonICsgdGhpcy5jb2xvckNvZGVbJ2RlYnVnJ107XG4gICAgdGhpcy5sb2cobWVzc2FnZSwgc3R5bGUpO1xuICB9XG5cbiAgd2FybihtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snd2FybiddKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgc3R5bGUgPSAnY29sb3I6JyArIHRoaXMuY29sb3JDb2RlWyd3YXJuJ107XG4gICAgdGhpcy5sb2cobWVzc2FnZSwgc3R5bGUpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2Vycm9yJ10pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBzdHlsZSA9ICdjb2xvcjonICsgdGhpcy5jb2xvckNvZGVbJ2Vycm9yJ107XG4gICAgdGhpcy5sb2cobWVzc2FnZSwgc3R5bGUpO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoTG9nV2ViTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDA6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIG11bHRpIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zcmMvaW5kZXguanMgKi9cIi4vc3JjL2luZGV4LmpzXCIpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQudXRpbHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjbGktcHJvZ3Jlc3NcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcIm51bGwtbG9hZGVyXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpX3Byb2dyZXNzX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OTNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdkxpOXpjbU12WW1GelpVeHZaMmRsY2k1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OHVMM055WXk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk4dUwzTnlZeTlzYjJkblpYSXViV2w0YVc1ekxtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJHOW5MeTR2YzNKakwzQnlaWFIwZVVwemIyNHVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2TGk5emNtTXZkR1Z5YlV4dloyZGxjaTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk4dUwzTnlZeTkwWlhKdFRHOW5aMlZ5TG0xcGVHbHVjeTV1YjJSbExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJHOW5MeTR2YzNKakwzUmxjbTFNYjJkblpYSXViV2w0YVc1ekxuZGxZaTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpSXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OWxlSFJsY201aGJDQmNJbTUxYkd3dGJHOWhaR1Z5WENJaVhTd2libUZ0WlhNaU9sc2lRbUZ6WlV4dloyZGxjaUlzSW1OdmJuTjBjblZqZEc5eUlpd2lRV05qWlhCMFpXUk1aWFpsYkhNaUxDSmtaV0oxWnlJc0lteHZaeUlzSW5kaGNtNGlMQ0psY25KdmNpSXNJbkpCWTJObGNIUmxaRXhsZG1Wc2N5SXNJbXhsZG1Wc0lpd2lUR1YyWld3aUxDSjFibVJsWm1sdVpXUWlMQ0pGY25KdmNpSXNJazlpYW1WamRDSXNJbXRsZVhNaUxDSmpiMjV1WldOMElpd2liV1Z6YzJGblpTSXNJbWR5YjNWd1FtVm5hVzRpTENKdVlXMWxJaXdpWjNKdmRYQkZibVFpTENKd2NtOW5jbVZ6YzBKbFoybHVJaXdpY21GdVoyVWlMQ0p3Y205bmNtVnpjMVZ3WkdGMFpTSXNJbkJ5YjJkeVpYTnpSVzVrSWl3aVRHOW5aMlZ5VFdsNGFXNXpJaXdpUW1GelpVTnNZWE56SWl3aVRHOW5aMlZ5SWl3aWJHOW5aMlZ5SWl3aVlYTnpaWEowSWl3aVltVkpibk4wWVc1alpVOW1JaXdpU25OdmJsWnBaWGNpTENKS1UwOU9SR2x6Y0d4aGVTSXNJbXB6YjI0aUxDSnZjR1Z1VEdWMlpXeHpRWEpuSWl3aWMzUjViR1ZQY0hScGIyNXpRWEpuSWl3aVJFVkdRVlZNVkY5VFZGbE1SVjlQVUZSSlQwNVRJaXdpY205dmRDSXNJblJoWnlJc0luTjBlV3hsSWl3aWRHbDBiR1ZEYjI1MFlXbHVaWElpTENKMGFYUnNaU0lzSW5ScGRHeGxWR1Y0ZENJc0ltOXdaVzVDZFhSMGIyNGlMQ0pqYjI1MFpXNTBjME52Ym5SaGFXNWxjaUlzSW10bGVWWmhiSFZsVUdGcGNpSXNJbXRsZVNJc0luTjViV0p2YkZaaGJIVmxJaXdpYzNSeWFXNW5WbUZzZFdVaUxDSnVkVzFpWlhKV1lXeDFaU0lzSW1KdmIyeGxZVzVXWVd4MVpTSXNJbTUxYkd4V1lXeDFaU0lzSW05d1pXNU1aWFpsYkhNaUxDSnBjMDVoVGlJc0luQmhjbk5sU1c1MElpd2lTVzVtYVc1cGRIa2lMQ0p6ZEhsc1pVOXdkR2x2Ym5NaUxDSnRaWEpuWlZOMGVXeGxUM0IwYVc5dWN5SXNJbUZ6YzJsbmJpSXNJblJoY21kbGRDSXNJbFI1Y0dWRmNuSnZjaUlzSW5Sdklpd2lhVzVrWlhnaUxDSmhjbWQxYldWdWRITWlMQ0pzWlc1bmRHZ2lMQ0p1WlhoMFUyOTFjbU5sSWl3aWJtVjRkRXRsZVNJc0luQnliM1J2ZEhsd1pTSXNJbWhoYzA5M2JsQnliM0JsY25SNUlpd2lZMkZzYkNJc0luSmxibVJsY2lJc0ltVnNaVzFsYm5RaUxDSmtiMk4xYldWdWRDSXNJbU55WldGMFpVVnNaVzFsYm5RaUxDSmpjM05VWlhoMElpd2lkbTlwWkVWc1pXMWxiblFpTENKblpYUldZV3gxWlNJc0ltRndjR1Z1WkVOb2FXeGtJaXdpUkdGMFpTSXNJbVJoZEdWRmJHVnRaVzUwSWl3aWRHOUpVMDlUZEhKcGJtY2lMQ0p1YjI1RmVIQmhibVJoWW14bFJXeGxiV1Z1ZENJc0lrRnljbUY1SWl3aWFYTkJjbkpoZVNJc0luUm9hWE5NWlhabGJFbHpRMnh2YzJWa0lpd2laMlYwVkdsMGJHVWlMQ0pqYjI1MlpYSjBTbk52YmxSdlJXeGxiV1Z1ZEhNaUxDSnVaWGgwVEdWMlpXeEpjME5zYjNObFpDSXNJbU52Ym5SaGFXNWxjaUlzSW1kbGRFTnZiblJsYm5SelEyOXVkR0ZwYm1WeUlpd2laMlYwVTNSaGJtUmhjbVJRWVdseUlpd2laMlYwVDNkdVVISnZjR1Z5ZEhsVGVXMWliMnh6SWl3aVptOXlSV0ZqYUNJc0luTjViV0p2YkNJc0luUnZVM1J5YVc1bklpd2liM0IwYVc5dVlXeExaWGtpTENKc1pYWmxiRWx6UTJ4dmMyVmtJaXdpWTNWeWNtVnVkR3g1UTJ4dmMyVmtJaXdpWTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0lzSW5ObGRFRjBkSEpwWW5WMFpTSXNJblJsZUhSRmJHVnRaVzUwSWl3aWRHbDBiR1ZGYkdWdFpXNTBJaXdpWjJWMFQzQmxia0oxZEhSdmJpSXNJbWRsZEV0bGVTSXNJbU55WldGMFpWUmxlSFJPYjJSbElpd2liMjVqYkdsamF5SXNJbVpwY25OMFEyaHBiR1FpTENKdlltcGxZM1JEYjI1MFpXNTBjeUlzSW5CaGNtVnVkRTV2WkdVaUxDSnVaWGgwVTJsaWJHbHVaeUlzSW1ScGMzQnNZWGtpTENKMGNtRnVjMlp2Y20waUxDSmlkWFIwYjI1RmJHVnRaVzUwSWl3aWFYTkRiRzl6WldRaUxDSjJZV3gxWlNJc0luQmhhWEpGYkdWdFpXNTBJaXdpYTJWNVJXeGxiV1Z1ZENJc0luWmhiSFZsUld4bGJXVnVkQ0lzSW01MWJHeFVlWEJsSWl3aVpHVm1ZWFZzZEhNaUxDSnZkbVZ5Y21sa1pYTWlMQ0p0WlhKblpXUWlMQ0pVWlhKdFRHOW5aMlZ5SWl3aWNHeGhkR1p2Y20waUxDSnRhWGhYYVhSb0lpd2libTlrWlNJc0lreHZaMDV2WkdWTmFYaHBibk1pTENKM1pXSWlMQ0pNYjJkWFpXSk5hWGhwYm5NaUxDSm5jbTkxY0ZOMFlXTnJJaXdpWjNKdmRYQWlMQ0ppWldkcGJsUnBiV1VpTENKd2RYTm9JaXdpYVc1a1pXNTBVM0JoWTJVaUxDSndiM0FpTENKTWIyZERiR0Z6Y3lJc0ltTm9ZVzV1Wld3aUxDSmpkWEp5Wlc1MFFtRnlJaXdpWTI5dWMyOXNaU0lzSW5CeWIyTmxjM05EYjNWdWRHVnlJaXdpWTJ4cFVISnZaM0psYzNNaUxDSnphR0ZrWlhOZlkyeGhjM05wWXlJc0luTmxkRlJ2ZEdGc0lpd2ljSEp2WjNKbGMzTk5aWE56WVdkbElpd2lkWEJrWVhSbElpd2ljM1J2Y0NJc0ltUnZZM1Z0Wlc1MFJXd2lMQ0ppYjJSNUlpd2labkpoYldWRmJDSXNJbXh2WjJkbGNrVnNJaXdpWjJWMFJXeGxiV1Z1ZEhOQ2VWUmhaMDVoYldVaUxDSmpiMnh2Y2tOdlpHVWlMQ0p6WTNKdmJHeENiM1IwYjIwaUxDSnpZM0p2Ykd4VWIzQWlMQ0p6WTNKdmJHeElaV2xuYUhRaUxDSmpiR2xsYm5SSVpXbG5hSFFpTENKd2NtOW5jbVZ6Y3lJc0luQnliMk5sYzNOTlpYTnpZV2RsSWl3aVRFbE9iMlJsY3lJc0ltTnNZWE56VEdsemRDSXNJbU52Ym5SaGFXNXpJaXdpWVdSa0lpd2lhbk52Yms1dlpHVWlMQ0prWVhSbElpd2lhVzV1WlhKSVZFMU1JbDBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFFzVHp0QlExWkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2EwUkJRVEJETEdkRFFVRm5RenRCUVVNeFJUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZEZRVUYzUkN4clFrRkJhMEk3UVVGRE1VVTdRVUZEUVN4NVJFRkJhVVFzWTBGQll6dEJRVU12UkRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVSQlFYbERMR2xEUVVGcFF6dEJRVU14UlN4M1NFRkJaMGdzYlVKQlFXMUNMRVZCUVVVN1FVRkRja2s3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UTBGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3UVVGRGRrUXNlVU5CUVdsRExHVkJRV1U3UVVGRGFFUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzT0VSQlFYTkVMQ3RFUVVFclJEczdRVUZGY2tnN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMnhHUVR0QlFVRkJPenM3TzBGQlNVRXNUVUZCVFVFc1ZVRkJUaXhEUVVGblFqdEJRVU5hUXl4aFFVRlhMRWRCUVVVN1FVRkRWQ3hUUVVGTFF5eGpRVUZNTEVkQlFYTkNPMEZCUVVORExGZEJRVXNzUlVGQlJTeERRVUZTTzBGQlFWZERMRk5CUVVjc1JVRkJReXhEUVVGbU8wRkJRV3RDUXl4VlFVRkpMRVZCUVVNc1EwRkJka0k3UVVGQk1FSkRMRmRCUVVzc1JVRkJSVHRCUVVGcVF5eExRVUYwUWp0QlFVTkJMRk5CUVV0RExHVkJRVXdzUjBGQmRVSTdRVUZCUXl4VFFVRkZMRTlCUVVnN1FVRkJXU3hUUVVGSExFdEJRV1k3UVVGQmMwSXNVMEZCUnl4TlFVRjZRanRCUVVGcFF5eFRRVUZITzBGQlFYQkRMRXRCUVhaQ08wRkJRMEVzVTBGQlMwTXNTMEZCVEN4SFFVRmhMRXRCUVV0T0xHTkJRVXdzUTBGQmIwSXNUMEZCY0VJc1EwRkJZanRCUVVOSU96dEJRVU5FTEUxQlFVbFBMRXRCUVVvc1EwRkJWVVFzUzBGQlZpeEZRVUZuUWp0QlFVTmFMRkZCUVVjc1MwRkJTMDRzWTBGQlRDeERRVUZ2UWswc1MwRkJjRUlzVFVGQk5rSkZMRk5CUVdoRExFVkJRVEJETzBGQlEzUkRMRmRCUVV0R0xFdEJRVXdzUjBGQllTeExRVUZMVGl4alFVRk1MRU5CUVc5Q1RTeExRVUZ3UWl4RFFVRmlPMEZCUTBnc1MwRkdSQ3hOUVVkSk8wRkJRMEVzV1VGQlRVY3NTMEZCU3l4RFFVRkZMRWRCUVVWSUxFdEJRVTBzYlVKQlFXdENTU3hOUVVGTkxFTkJRVU5ETEVsQlFWQXNRMEZCV1N4TFFVRkxXQ3hqUVVGcVFpeERRVUZwUXl4RlFVRTNSQ3hEUVVGWU8wRkJRMGc3UVVGRFNqczdRVUZEUkN4TlFVRkpUeXhMUVVGS0xFZEJRVmM3UVVGRFVDeFhRVUZQTEV0QlFVdEdMR1ZCUVV3c1EwRkJjVUlzUzBGQlMwTXNTMEZCTVVJc1EwRkJVRHRCUVVOSU96dEJRVVZFVFN4VFFVRlBMRWRCUVVVN1FVRkRUQ3hWUVVGTlNDeExRVUZMTEVOQlFVTXNiMEpCUVVRc1EwRkJXRHRCUVVOSU96dEJRVVZFVUN4TFFVRkhMRU5CUVVOWExFOUJRVVFzUlVGQlV6dEJRVU5TTEZWQlFVMUtMRXRCUVVzc1EwRkJReXh2UWtGQlJDeERRVUZZTzBGQlEwZzdPMEZCUlVST0xFMUJRVWtzUTBGQlExVXNUMEZCUkN4RlFVRlRPMEZCUTFRc1ZVRkJUVW9zUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRlJFd3NUMEZCU3l4RFFVRkRVeXhQUVVGRUxFVkJRVk03UVVGRFZpeFZRVUZOU2l4TFFVRkxMRU5CUVVNc2IwSkJRVVFzUTBGQldEdEJRVU5JT3p0QlFVVkVVaXhQUVVGTExFTkJRVU5aTEU5QlFVUXNSVUZCVXp0QlFVTldMRlZCUVUxS0xFdEJRVXNzUTBGQlF5eHZRa0ZCUkN4RFFVRllPMEZCUTBnN08wRkJSVVJMTEZsQlFWVXNRMEZCUTBNc1NVRkJSQ3hGUVVGTk8wRkJRMW9zVlVGQlRVNHNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkU4c1ZVRkJVU3hIUVVGRk8wRkJRMDRzVlVGQlRWQXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkZFc1pVRkJZU3hEUVVGRFF5eExRVUZFTEVWQlFVODdRVUZEYUVJc1ZVRkJUVlFzUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRlJGVXNaMEpCUVdNc1EwRkJRMDRzVDBGQlJDeEZRVUZUTzBGQlEyNUNMRlZCUVUxS0xFdEJRVXNzUTBGQlF5eHZRa0ZCUkN4RFFVRllPMEZCUTBnN08wRkJSVVJYTEdGQlFWY3NRMEZCUTFBc1QwRkJSQ3hGUVVGVE8wRkJRMmhDTEZWQlFVMUtMRXRCUVVzc1EwRkJReXh2UWtGQlJDeERRVUZZTzBGQlEwZzdPMEZCZUVSWE96dEJRVEpFUkZnc2VVVkJRV1lzUlRzN096czdPenM3T3pzN08wRkRMMFJCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRMFJCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRRVHRCUVVOQk96czdPenM3T3p0QlFVOUJMRTFCUVUxMVFpeFpRVUZaTEVkQlFVbERMRk5CUVVRc1NVRkJZeXhqUVVGalFTeFRRVUZrTEVOQlFYVkNPMEZCUlhSRUxFMUJRVWxETEUxQlFVb3NRMEZCVjBNc1RVRkJXQ3hGUVVGclFqdEJRVU5rUXl3eVJFRkJUU3hEUVVGRFF5eFpRVUZRTEVOQlFXOUNSaXhOUVVGd1FpeEZRVUUwUWpGQ0xHMUVRVUUxUWp0QlFVTkJMRk5CUVVzd1FpeE5RVUZNTEVkQlFXTkJMRTFCUVdRN1FVRkRTRHM3UVVGRlJDeE5RVUZKUkN4TlFVRktMRWRCUVZrN1FVRkRVaXhSUVVGSExFTkJRVU1zUzBGQlMwTXNUVUZCVkN4RlFVRm5RanRCUVVOYUxGbEJRVTFtTEV0QlFVc3NRMEZCUXl4dFFrRkJSQ3hEUVVGWU8wRkJRMGc3TzBGQlEwUXNWMEZCVHl4TFFVRkxaU3hOUVVGYU8wRkJRMGc3TzBGQlduRkVMRU5CUVRGRU96dEJRV1ZsU0N3eVJVRkJaaXhGT3pzN096czdPenM3T3pzN1FVTjRRa0U3UVVGQlFUdEJRVUZCTzBGQlEwRTdRVUZEWlN4TlFVRk5UU3hSUVVGT0xFTkJRV003UVVGRGVrSTFRaXhoUVVGWExFZEJRVVVzUTBGRFdqczdRVUZEUkN4VFFVRlBOa0lzVjBGQlVDeERRVUZ0UWtNc1NVRkJia0lzUlVGQmVVSkRMR0ZCUVhwQ0xFVkJRWGREUXl4bFFVRjRReXhGUVVGNVJEdEJRVU55UkN4UlFVRkpReXh4UWtGQmNVSXNSMEZCUnp0QlFVTXhRa01zVlVGQlNTeEZRVUZGTzBGQlFVVkRMRmRCUVVjc1JVRkJSU3hMUVVGUU8wRkJRV05ETEdGQlFVc3NSVUZCUlR0QlFVRnlRaXhQUVVSdlFqdEJRVVV4UWtNc2IwSkJRV01zUlVGQlJUdEJRVUZGUml4WFFVRkhMRVZCUVVVc1MwRkJVRHRCUVVGalF5eGhRVUZMTEVWQlFVVTdRVUZCY2tJc1QwRkdWVHRCUVVjeFFrVXNWMEZCU3l4RlFVRkZPMEZCUVVWSUxGZEJRVWNzUlVGQlJTeE5RVUZRTzBGQlFXVkRMR0ZCUVVzc1JVRkJSVHRCUVVGMFFpeFBRVWh0UWp0QlFVa3hRa2NzWlVGQlV5eEZRVUZGTzBGQlFVVktMRmRCUVVjc1JVRkJSU3hOUVVGUU8wRkJRV1ZETEdGQlFVc3NSVUZCUlR0QlFVRjBRaXhQUVVwbE8wRkJTekZDU1N4blFrRkJWU3hGUVVGRk8wRkJRMVpNTEZkQlFVY3NSVUZCUlN4TlFVUkxPMEZCUlZaRExHRkJRVXNzUlVGQlJTeDNSa0ZEUVR0QlFVaEhMRTlCVEdNN1FVRlZNVUpMTEhWQ1FVRnBRaXhGUVVGRk8wRkJRVVZPTEZkQlFVY3NSVUZCUlN4TFFVRlFPMEZCUVdORExHRkJRVXNzUlVGQlJUdEJRVUZ5UWl4UFFWWlBPMEZCVnpGQ1RTeHJRa0ZCV1N4RlFVRkZPMEZCUVVWUUxGZEJRVWNzUlVGQlJTeE5RVUZRTzBGQlFXVkRMR0ZCUVVzc1JVRkJSVHRCUVVGMFFpeFBRVmhaTzBGQldURkNUeXhUUVVGSExFVkJRVVU3UVVGQlJWSXNWMEZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWVVGQlN5eEZRVUZGTzBGQlFYUkNMRTlCV25GQ08wRkJZVEZDVVN4cFFrRkJWeXhGUVVGRk8wRkJRVVZVTEZkQlFVY3NSVUZCUlN4TlFVRlFPMEZCUVdWRExHRkJRVXNzUlVGQlJUdEJRVUYwUWl4UFFXSmhPMEZCWXpGQ1V5eHBRa0ZCVnl4RlFVRkZPMEZCUVVWV0xGZEJRVWNzUlVGQlJTeE5RVUZRTzBGQlFXVkRMR0ZCUVVzc1JVRkJSVHRCUVVGMFFpeFBRV1JoTzBGQlpURkNWU3hwUWtGQlZ5eEZRVUZGTzBGQlFVVllMRmRCUVVjc1JVRkJSU3hOUVVGUU8wRkJRV1ZETEdGQlFVc3NSVUZCUlR0QlFVRjBRaXhQUVdaaE8wRkJaMEl4UWxjc2EwSkJRVmtzUlVGQlJUdEJRVUZGV2l4WFFVRkhMRVZCUVVVc1RVRkJVRHRCUVVGbFF5eGhRVUZMTEVWQlFVVTdRVUZCZEVJc1QwRm9RbGs3UVVGcFFqRkNXU3hsUVVGVExFVkJRVVU3UVVGQlJXSXNWMEZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWVVGQlN5eEZRVUZGTzBGQlFYUkNPMEZCYWtKbExFdEJRVFZDTzBGQmJVSkJMRkZCUVVsaExGVkJRVlVzUjBGQlIwTXNTMEZCU3l4RFFVRkRReXhSUVVGUkxFTkJRVU53UWl4aFFVRkVMRU5CUVZRc1EwRkJUQ3hIUVVGcFEzRkNMRkZCUVdwRExFZEJRVFJEUkN4UlFVRlJMRU5CUVVOd1FpeGhRVUZFTEVOQlFYSkZPMEZCUTBFc1VVRkJTWE5DTEZsQlFWa3NSMEZCUnl4UFFVRlBja0lzWlVGQlVDeExRVUV5UWl4UlFVRXpRaXhIUVVORmMwSXNhVUpCUVdsQ0xFTkJRVU55UWl4eFFrRkJSQ3hGUVVGM1FrUXNaVUZCZUVJc1EwRkVia0lzUjBGRlJVTXNjVUpCUm5KQ096dEJRVWxCTEZGQlFVa3NUMEZCVDNSQ0xFMUJRVTBzUTBGQlF6UkRMRTFCUVdRc1NVRkJkMElzVlVGQk5VSXNSVUZCZDBNN1FVRkRkRU0xUXl4WlFVRk5MRU5CUVVNMFF5eE5RVUZRTEVkQlFXZENMRlZCUVZORExFMUJRVlFzUlVGQmFVSTdRVUZETDBJc1dVRkJTVUVzVFVGQlRTeEpRVUZKTEVsQlFXUXNSVUZCYjBJN1FVRkRiRUlzWjBKQlFVMHNTVUZCU1VNc1UwRkJTaXhEUVVGakxEUkRRVUZrTEVOQlFVNDdRVUZEUkRzN1FVRkZSQ3haUVVGSlF5eEZRVUZGTEVkQlFVY3ZReXhOUVVGTkxFTkJRVU0yUXl4TlFVRkVMRU5CUVdZN08wRkJSVUVzWVVGQlN5eEpRVUZKUnl4TFFVRkxMRWRCUVVjc1EwRkJha0lzUlVGQmIwSkJMRXRCUVVzc1IwRkJSME1zVTBGQlV5eERRVUZEUXl4TlFVRjBReXhGUVVFNFEwWXNTMEZCU3l4RlFVRnVSQ3hGUVVGMVJEdEJRVU55UkN4alFVRkpSeXhWUVVGVkxFZEJRVWRHTEZOQlFWTXNRMEZCUTBRc1MwRkJSQ3hEUVVFeFFqczdRVUZGUVN4alFVRkpSeXhWUVVGVkxFbEJRVWtzU1VGQmJFSXNSVUZCZDBJN1FVRkRkRUlzYVVKQlFVc3NTVUZCU1VNc1QwRkJWQ3hKUVVGdlFrUXNWVUZCY0VJc1JVRkJaME03UVVGRE9VSXNhMEpCUVVsdVJDeE5RVUZOTEVOQlFVTnhSQ3hUUVVGUUxFTkJRV2xDUXl4alFVRnFRaXhEUVVGblEwTXNTVUZCYUVNc1EwRkJjVU5LTEZWQlFYSkRMRVZCUVdsRVF5eFBRVUZxUkN4RFFVRktMRVZCUVN0RU8wRkJRemRFVEN4clFrRkJSU3hEUVVGRFN5eFBRVUZFTEVOQlFVWXNSMEZCWTBRc1ZVRkJWU3hEUVVGRFF5eFBRVUZFTEVOQlFYaENPMEZCUTBRN1FVRkRSanRCUVVOR08wRkJRMFk3TzBGQlEwUXNaVUZCVDB3c1JVRkJVRHRCUVVORUxFOUJia0pFTzBGQmIwSkVPenRCUVVWRUxHRkJRVk5UTEUxQlFWUXNSMEZCYTBJN1FVRkRhRUlzVlVGQlNVTXNUMEZCVHl4SFFVRkhReXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVKcVFpeFpRVUZaTEVOQlFVTnVRaXhKUVVGaUxFTkJRV3RDUXl4SFFVRjZReXhEUVVGa08wRkJRMEZwUXl4aFFVRlBMRU5CUVVOb1F5eExRVUZTTEVOQlFXTnRReXhQUVVGa0xFZEJRWGRDYkVJc1dVRkJXU3hEUVVGRGJrSXNTVUZCWWl4RFFVRnJRa1VzUzBGQk1VTTdPMEZCUlVFc1ZVRkJTVTRzU1VGQlNTeExRVUZMTEVsQlFWUXNTVUZCYVVKQkxFbEJRVWtzUzBGQlMzSkNMRk5CUVRsQ0xFVkJRWGxETzBGQlEzWkRMRmxCUVVrclJDeFhRVUZYTEVkQlFVZERMRkZCUVZFc1EwRkJReXhKUVVGRUxFTkJRVEZDTzBGQlEwRk1MR1ZCUVU4c1EwRkJRMDBzVjBGQlVpeERRVUZ2UWtZc1YwRkJjRUk3UVVGRFJDeFBRVWhFTEUxQlIwOHNTVUZCU1RGRExFbEJRVWtzV1VGQldUWkRMRWxCUVhCQ0xFVkJRVEJDTzBGQlF5OUNMRmxCUVVsRExGZEJRVmNzUjBGQlIwZ3NVVUZCVVN4RFFVRkRNME1zU1VGQlNTeERRVUZESzBNc1YwRkJUQ3hGUVVGRUxFTkJRVEZDTzBGQlEwRlVMR1ZCUVU4c1EwRkJRMDBzVjBGQlVpeERRVUZ2UWtVc1YwRkJjRUk3UVVGRFJDeFBRVWhOTEUxQlIwRXNTVUZCU1N4UFFVRlBPVU1zU1VGQlVDeExRVUZuUWl4UlFVRndRaXhGUVVFNFFqdEJRVU51UXl4WlFVRkpaMFFzYjBKQlFXOUNMRWRCUVVkTUxGRkJRVkVzUTBGQlF6TkRMRWxCUVVRc1EwRkJia003UVVGRFFYTkRMR1ZCUVU4c1EwRkJRMDBzVjBGQlVpeERRVUZ2UWtrc2IwSkJRWEJDTzBGQlEwUXNUMEZJVFN4TlFVZEJPMEZCUTB3c1dVRkJTWGhETEV0QlFVc3NSMEZCUjNsRExFdEJRVXNzUTBGQlEwTXNUMEZCVGl4RFFVRmpiRVFzU1VGQlpDeEpRVUZ6UWl4WFFVRlhRU3hKUVVGSkxFTkJRVU1yUWl4TlFVRm9RaXhIUVVGNVFpeEhRVUV2UXl4SFFVRnhSQ3hSUVVGcVJUdEJRVU5CTEZsQlFVbHZRaXhwUWtGQmFVSXNSMEZCUjJoRExGVkJRVlVzUjBGQlJ5eERRVUZ5UXp0QlFVTkJiVUlzWlVGQlR5eERRVUZEVFN4WFFVRlNMRU5CUVc5Q1VTeFJRVUZSTEVOQlFVTTFReXhMUVVGRUxFVkJRVkVzU1VGQlVpeEZRVUZqTWtNc2FVSkJRV1FzUTBGQk5VSTdRVUZEUVdJc1pVRkJUeXhEUVVGRFRTeFhRVUZTTEVOQlFXOUNVeXh4UWtGQmNVSXNRMEZCUTNKRUxFbEJRVVFzUlVGQlR5eERRVUZRTEVOQlFYcERPMEZCUTBRN08wRkJSVVFzWVVGQlQzTkRMRTlCUVZBN1FVRkRSRHM3UVVGRlJDeGhRVUZUWlN4eFFrRkJWQ3hEUVVFclFuSkVMRWxCUVM5Q0xFVkJRWEZETmtJc1MwRkJja01zUlVGQk5FTTdRVUZETVVNc1ZVRkJTWE5DTEdsQ1FVRnBRaXhIUVVGSGRFSXNTMEZCU3l4SFFVRkhWaXhWUVVGb1F6dEJRVU5CTEZWQlFVbHRReXhwUWtGQmFVSXNSMEZCUjNwQ0xFdEJRVXNzUjBGQlJ5eERRVUZTTEVkQlFWbFdMRlZCUVhCRE8wRkJRMEVzVlVGQlNXOURMRk5CUVZNc1IwRkJSME1zYjBKQlFXOUNMRU5CUVVOTUxHbENRVUZFTEVOQlFYQkRPenRCUVVOQkxGZEJRVXNzU1VGQlNYUkRMRWRCUVZRc1NVRkJaMEppTEVsQlFXaENMRVZCUVhOQ08wRkJRM0JDTEZsQlFVbHBSQ3hMUVVGTExFTkJRVU5ETEU5QlFVNHNRMEZCWTJ4RUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRnNRaXhEUVVGS0xFVkJRVGhDTzBGQlF6VkNNRU1zYlVKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFsRXNVVUZCVVN4RFFVRkRMRmRCUVZkd1JDeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJTaXhEUVVGVmEwSXNUVUZCY2tJc1IwRkJPRUlzUjBGQkwwSXNSVUZCYjBOc1FpeEhRVUZ3UXl4RlFVRjVRM2xETEdsQ1FVRjZReXhEUVVFNVFqdEJRVU5CUXl4dFFrRkJVeXhEUVVGRFdDeFhRVUZXTEVOQlFYTkNVeXh4UWtGQmNVSXNRMEZCUTNKRUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRk1MRVZCUVZsblFpeExRVUZMTEVkQlFVY3NRMEZCY0VJc1EwRkJNME03UVVGRFJDeFRRVWhFTEUxQlIwOHNTVUZCU1RkQ0xFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRktMRXRCUVdNc1NVRkJaQ3hKUVVGelFtSXNTVUZCU1N4RFFVRkRZU3hIUVVGRUxFTkJRVW9zUzBGQlkyeERMRk5CUVhoRExFVkJRVzFFTzBGQlEzaEVORVVzYlVKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkROVU1zUjBGQlJDeEZRVUZOTEVsQlFVNHNRMEZCY2tNN1FVRkRSQ3hUUVVaTkxFMUJSVUVzU1VGQlNXSXNTVUZCU1N4RFFVRkRZU3hIUVVGRUxFTkJRVW9zV1VGQmNVSm5ReXhKUVVGNlFpeEZRVUVyUWp0QlFVTndRMVVzYlVKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkROVU1zUjBGQlJDeEZRVUZOWWl4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlNpeERRVUZWYTBNc1YwRkJWaXhGUVVGT0xFTkJRWEpETzBGQlEwUXNVMEZHVFN4TlFVVkJMRWxCUVVrc1QwRkJUeTlETEVsQlFVa3NRMEZCUTJFc1IwRkJSQ3hEUVVGWUxFdEJRWEZDTEZGQlFYcENMRVZCUVcxRE8wRkJRM2hETUVNc2JVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbEVzVVVGQlVTeERRVUZETEZGQlFVUXNSVUZCVjNaRExFZEJRVmdzUlVGQlowSjVReXhwUWtGQmFFSXNRMEZCT1VJN1FVRkRRVU1zYlVKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFsTXNjVUpCUVhGQ0xFTkJRVU55UkN4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlRDeEZRVUZaWjBJc1MwRkJTeXhIUVVGSExFTkJRWEJDTEVOQlFUTkRPMEZCUTBRc1UwRklUU3hOUVVkQk8wRkJRMHd3UWl4dFFrRkJVeXhEUVVGRFdDeFhRVUZXTEVOQlFYTkNZU3hsUVVGbExFTkJRVU0xUXl4SFFVRkVMRVZCUVUxaUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRldMRU5CUVhKRE8wRkJRMFE3UVVGRFJqczdRVUZEUkN4VlFVRkpMRTlCUVU5b1F5eE5RVUZOTEVOQlFVTTJSU3h4UWtGQlpDeExRVUYzUXl4VlFVRTFReXhGUVVGM1JEdEJRVU4wUkRkRkxHTkJRVTBzUTBGQlF6WkZMSEZDUVVGUUxFTkJRVFpDTVVRc1NVRkJOMElzUlVGQmJVTXlSQ3hQUVVGdVF5eERRVUV5UXl4VlFVRlRReXhOUVVGVUxFVkJRV2xDTzBGQlF6RkVUQ3h0UWtGQlV5eERRVUZEV0N4WFFVRldMRU5CUVhOQ1lTeGxRVUZsTEVOQlFVTkhMRTFCUVUwc1EwRkJRME1zVVVGQlVDeEZRVUZFTEVWQlFXOUNOMFFzU1VGQlNTeERRVUZETkVRc1RVRkJSQ3hEUVVGNFFpeERRVUZ5UXp0QlFVTkVMRk5CUmtRN1FVRkhSRHM3UVVGRlJDeGhRVUZQVEN4VFFVRlFPMEZCUTBRN08wRkJSVVFzWVVGQlUwZ3NVVUZCVkN4RFFVRnJRak5ETEZOQlFXeENMRVZCUVRaQ2NVUXNWMEZCTjBJc1JVRkJNRU5ETEdGQlFURkRMRVZCUVhsRU8wRkJRM1pFTEZWQlFVbERMR1ZCUVdVc1IwRkJSMFFzWVVGQmRFSTdRVUZEUVN4VlFVRkpSU3huUWtGQlowSXNSMEZCUnpGQ0xGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTJoQ0xHTkJRV0lzUTBGQk5FSkdMRWRCUVc1RUxFTkJRWFpDTzBGQlEwRTBSQ3h6UWtGQlowSXNRMEZCUXpORUxFdEJRV3BDTEVOQlFYVkNiVU1zVDBGQmRrSXNSMEZCYVVOc1FpeFpRVUZaTEVOQlFVTm9RaXhqUVVGaUxFTkJRVFJDUkN4TFFVRTNSRHRCUVVOQk1rUXNjMEpCUVdkQ0xFTkJRVU5ETEZsQlFXcENMRU5CUVRoQ0xGZEJRVGxDTEVWQlFUSkRMR2RDUVVFelF6dEJRVU5CTEZWQlFVbERMRmRCUVZjc1IwRkJSelZDTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMlFzVTBGQllpeERRVUYxUWtvc1IwRkJPVU1zUTBGQmJFSTdRVUZEUVN4VlFVRkpLMFFzV1VGQldTeEhRVUZITjBJc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNha0lzV1VGQldTeERRVUZEWml4TFFVRmlMRU5CUVcxQ1NDeEhRVUV4UXl4RFFVRnVRanRCUVVOQkswUXNhMEpCUVZrc1EwRkJRemxFTEV0QlFXSXNRMEZCYlVKdFF5eFBRVUZ1UWl4SFFVRTJRbXhDTEZsQlFWa3NRMEZCUTJZc1MwRkJZaXhEUVVGdFFrWXNTMEZCYUVRN1FVRkRRVFpFTEdsQ1FVRlhMRU5CUVVNM1JDeExRVUZhTEVOQlFXdENiVU1zVDBGQmJFSXNSMEZCTkVKc1FpeFpRVUZaTEVOQlFVTmtMRk5CUVdJc1EwRkJkVUpJTEV0QlFXNUVPMEZCUlVFNFJDeHJRa0ZCV1N4RFFVRkRlRUlzVjBGQllpeERRVUY1UW5sQ0xHRkJRV0VzUTBGQlEwNHNZVUZCUkN4RFFVRjBRenM3UVVGRFFTeFZRVUZKUkN4WFFVRktMRVZCUVdsQ08wRkJRMlpMTEcxQ1FVRlhMRU5CUVVOMlFpeFhRVUZhTEVOQlFYZENNRUlzVFVGQlRTeERRVUZEVWl4WFFVRkVMRU5CUVRsQ08wRkJRMFE3TzBGQlEwUkxMR2xDUVVGWExFTkJRVU4yUWl4WFFVRmFMRU5CUVhkQ1RDeFJRVUZSTEVOQlFVTm5ReXhqUVVGVUxFTkJRWGRDT1VRc1UwRkJlRUlzUTBGQmVFSTdRVUZEUVRKRUxHdENRVUZaTEVOQlFVTjRRaXhYUVVGaUxFTkJRWGxDZFVJc1YwRkJla0k3TzBGQlJVRkRMR3RDUVVGWkxFTkJRVU5KTEU5QlFXSXNSMEZCZFVJc1dVRkJXVHRCUVVOcVF5eFpRVUZKT1VRc1ZVRkJWU3hIUVVGSE1FUXNXVUZCV1N4RFFVRkRTeXhWUVVFNVFqdEJRVU5CTEZsQlFVbERMR05CUVdNc1IwRkJSMDRzV1VGQldTeERRVUZEVHl4VlFVRmlMRU5CUVhkQ1F5eFhRVUUzUXp0QlFVTkJSaXh6UWtGQll5eERRVUZEY0VVc1MwRkJaaXhEUVVGeFFuVkZMRTlCUVhKQ0xFZEJRU3RDWWl4bFFVRmxMRWRCUVVjc1QwRkJTQ3hIUVVGaExFMUJRVE5FTzBGQlEwRjBSQ3hyUWtGQlZTeERRVUZEU2l4TFFVRllMRU5CUVdsQ2QwVXNVMEZCYWtJc1IwRkJOa0prTEdWQlFXVXNSMEZCUnl4bFFVRklMRWRCUVhGQ0xHTkJRV3BGTzBGQlEwRkJMSFZDUVVGbExFZEJRVWNzUTBGQlEwRXNaVUZCYmtJN1FVRkRSQ3hQUVU1RU96dEJRVkZCUXl4elFrRkJaMElzUTBGQlEzSkNMRmRCUVdwQ0xFTkJRVFpDZDBJc1dVRkJOMEk3UVVGRFFTeGhRVUZQU0N4blFrRkJVRHRCUVVORU96dEJRVVZFTEdGQlFWTkpMR0ZCUVZRc1EwRkJkVUpPTEdGQlFYWkNMRVZCUVhORE8wRkJRM0JETEZWQlFVbG5RaXhoUVVGaExFZEJRVWQ0UXl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU5pTEZWQlFXSXNRMEZCZDBKTUxFZEJRUzlETEVOQlFYQkNPMEZCUTBFd1JTeHRRa0ZCWVN4RFFVRkRla1VzUzBGQlpDeERRVUZ2UW0xRExFOUJRWEJDTEVkQlFUaENiRUlzV1VGQldTeERRVUZEWWl4VlFVRmlMRU5CUVhkQ1NpeExRVUYwUkR0QlFVTkJlVVVzYlVKQlFXRXNRMEZCUTNwRkxFdEJRV1FzUTBGQmIwSjNSU3hUUVVGd1FpeEhRVUZuUTJZc1lVRkJZU3hIUVVGSExHTkJRVWdzUjBGQmIwSXNaVUZCYWtVN1FVRkRRU3hoUVVGUFowSXNZVUZCVUR0QlFVTkVPenRCUVVWRUxHRkJRVk4yUWl4dlFrRkJWQ3hEUVVFNFFuZENMRkZCUVRsQ0xFVkJRWGRETzBGQlEzUkRMRlZCUVVsbUxHZENRVUZuUWl4SFFVRkhNVUlzVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1N4RFFVRkRXaXhwUWtGQllpeERRVUVyUWs0c1IwRkJkRVFzUTBGQmRrSTdRVUZEUVRSRUxITkNRVUZuUWl4RFFVRkRReXhaUVVGcVFpeERRVUU0UWl4WFFVRTVRaXhGUVVFeVF5eHRRa0ZCTTBNN1FVRkRRVVFzYzBKQlFXZENMRU5CUVVNelJDeExRVUZxUWl4RFFVRjFRbTFETEU5QlFYWkNMRWRCUVdsRGJFSXNXVUZCV1N4RFFVRkRXaXhwUWtGQllpeERRVUVyUWt3c1MwRkJhRVU3UVVGRFFUSkVMSE5DUVVGblFpeERRVUZETTBRc1MwRkJha0lzUTBGQmRVSjFSU3hQUVVGMlFpeEhRVUZyUTBjc1VVRkJVU3hIUVVGSExFMUJRVWdzUjBGQldTeFBRVUYwUkR0QlFVTkJMR0ZCUVU5bUxHZENRVUZRTzBGQlEwUTdPMEZCUlVRc1lVRkJVMUlzWlVGQlZDeERRVUY1UWpWRExFZEJRWHBDTEVWQlFUaENiMFVzUzBGQk9VSXNSVUZCY1VNN1FVRkRia01zVlVGQlNVTXNWMEZCVnl4SFFVRkhNME1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1N4RFFVRkRXQ3haUVVGaUxFTkJRVEJDVUN4SFFVRnFSQ3hEUVVGc1FqdEJRVU5CTmtVc2FVSkJRVmNzUTBGQlF6VkZMRXRCUVZvc1EwRkJhMEp0UXl4UFFVRnNRaXhIUVVFMFFteENMRmxCUVZrc1EwRkJRMWdzV1VGQllpeERRVUV3UWs0c1MwRkJkRVE3UVVGRFFUUkZMR2xDUVVGWExFTkJRVU4wUXl4WFFVRmFMRU5CUVhkQ01FSXNUVUZCVFN4RFFVRkRla1FzUjBGQlJDeERRVUU1UWp0QlFVTkJjVVVzYVVKQlFWY3NRMEZCUTNSRExGZEJRVm9zUTBGQmQwSkVMRkZCUVZFc1EwRkJRM05ETEV0QlFVUXNRMEZCYUVNN1FVRkRRU3hoUVVGUFF5eFhRVUZRTzBGQlEwUTdPMEZCUlVRc1lVRkJVMW9zVFVGQlZDeERRVUZuUW5CR0xFbEJRV2hDTEVWQlFYTkNPMEZCUTNCQ0xGVkJRVWxwUnl4VlFVRlZMRWRCUVVjMVF5eFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUpxUWl4WlFVRlpMRU5CUVVOV0xFZEJRV0lzUTBGQmFVSlNMRWRCUVhoRExFTkJRV3BDTzBGQlEwRTRSU3huUWtGQlZTeERRVUZETjBVc1MwRkJXQ3hEUVVGcFFtMURMRTlCUVdwQ0xFZEJRVEpDYkVJc1dVRkJXU3hEUVVGRFZpeEhRVUZpTEVOQlFXbENVQ3hMUVVFMVF6dEJRVU5CTmtVc1owSkJRVlVzUTBGQlEzWkRMRmRCUVZnc1EwRkJkVUpNTEZGQlFWRXNRMEZCUTJkRExHTkJRVlFzUTBGQmQwSnlSaXhKUVVGSkxFZEJRVWNzU1VGQkwwSXNRMEZCZGtJN1FVRkRRU3hoUVVGUGFVY3NWVUZCVUR0QlFVTkVPenRCUVVWRUxHRkJRVk40UXl4UlFVRlVMRU5CUVd0Q2MwTXNTMEZCYkVJc1JVRkJlVUk3UVVGRGRrSXNWVUZCU1Vjc1dVRkJTanRCUVVOQkxGVkJRVWxETEZGQlFWRXNSMEZCUnl4UlFVRm1PenRCUVVOQkxHTkJRVkVzVDBGQlQwb3NTMEZCWmp0QlFVTkZMR0ZCUVVzc1VVRkJURHRCUVVORlJ5eHpRa0ZCV1N4SFFVRkhOME1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1N4RFFVRkRWQ3hYUVVGaUxFTkJRWGxDVkN4SFFVRm9SQ3hEUVVGbU8wRkJRMEVyUlN4elFrRkJXU3hEUVVGRE9VVXNTMEZCWWl4RFFVRnRRbTFETEU5QlFXNUNMRWRCUVRaQ2JFSXNXVUZCV1N4RFFVRkRWQ3hYUVVGaUxFTkJRWGxDVWl4TFFVRjBSRHRCUVVOQk9FVXNjMEpCUVZrc1EwRkJRM2hETEZkQlFXSXNRMEZCZVVKTUxGRkJRVkVzUTBGQlEyZERMR05CUVZRc1EwRkJkMEpWTEV0QlFVc3NRMEZCUTNCQ0xGRkJRVTRzUlVGQmVFSXNRMEZCZWtJN1FVRkRRVHM3UVVGRFJpeGhRVUZMTEZGQlFVdzdRVUZEUlhWQ0xITkNRVUZaTEVkQlFVYzNReXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVKcVFpeFpRVUZaTEVOQlFVTlNMRmRCUVdJc1EwRkJlVUpXTEVkQlFXaEVMRU5CUVdZN1FVRkRRU3RGTEhOQ1FVRlpMRU5CUVVNNVJTeExRVUZpTEVOQlFXMUNiVU1zVDBGQmJrSXNSMEZCTmtKc1FpeFpRVUZaTEVOQlFVTlNMRmRCUVdJc1EwRkJlVUpVTEV0QlFYUkVPMEZCUTBFNFJTeHpRa0ZCV1N4RFFVRkRlRU1zVjBGQllpeERRVUY1UWt3c1VVRkJVU3hEUVVGRFowTXNZMEZCVkN4RFFVRjNRaXhOUVVGTlZTeExRVUZPTEVkQlFXTXNSMEZCZEVNc1EwRkJla0k3UVVGRFFUczdRVUZEUml4aFFVRkxMRkZCUVV3N1FVRkRSVWNzYzBKQlFWa3NSMEZCUnpkRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTFBc1YwRkJZaXhEUVVGNVFsZ3NSMEZCYUVRc1EwRkJaanRCUVVOQkswVXNjMEpCUVZrc1EwRkJRemxGTEV0QlFXSXNRMEZCYlVKdFF5eFBRVUZ1UWl4SFFVRTJRbXhDTEZsQlFWa3NRMEZCUTFBc1YwRkJZaXhEUVVGNVFsWXNTMEZCZEVRN1FVRkRRVGhGTEhOQ1FVRlpMRU5CUVVONFF5eFhRVUZpTEVOQlFYbENUQ3hSUVVGUkxFTkJRVU5uUXl4alFVRlVMRU5CUVhkQ1ZTeExRVUY0UWl4RFFVRjZRanRCUVVOQk96dEJRVU5HTEdGQlFVc3NVMEZCVER0QlFVTkZSeXh6UWtGQldTeEhRVUZITjBNc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNha0lzV1VGQldTeERRVUZEVGl4WlFVRmlMRU5CUVRCQ1dpeEhRVUZxUkN4RFFVRm1PMEZCUTBFclJTeHpRa0ZCV1N4RFFVRkRPVVVzUzBGQllpeERRVUZ0UW0xRExFOUJRVzVDTEVkQlFUWkNiRUlzV1VGQldTeERRVUZEVGl4WlFVRmlMRU5CUVRCQ1dDeExRVUYyUkR0QlFVTkJPRVVzYzBKQlFWa3NRMEZCUTNoRExGZEJRV0lzUTBGQmVVSk1MRkZCUVZFc1EwRkJRMmRETEdOQlFWUXNRMEZCZDBKVkxFdEJRWGhDTEVOQlFYcENPMEZCUTBFN08wRkJRMFlzWVVGQlMwa3NVVUZCVER0QlFVTkZSQ3h6UWtGQldTeEhRVUZITjBNc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNha0lzV1VGQldTeERRVUZEVEN4VFFVRmlMRU5CUVhWQ1lpeEhRVUU1UXl4RFFVRm1PMEZCUTBFclJTeHpRa0ZCV1N4RFFVRkRPVVVzUzBGQllpeERRVUZ0UW0xRExFOUJRVzVDTEVkQlFUWkNiRUlzV1VGQldTeERRVUZEVEN4VFFVRmlMRU5CUVhWQ1dpeExRVUZ3UkR0QlFVTkJPRVVzYzBKQlFWa3NRMEZCUTNoRExGZEJRV0lzUTBGQmVVSk1MRkZCUVZFc1EwRkJRMmRETEdOQlFWUXNRMEZCZDBKVkxFdEJRWGhDTEVOQlFYcENPMEZCUTBFN1FVRjZRa283TzBGQk1rSkJMR0ZCUVU5SExGbEJRVkE3UVVGRFJEczdRVUZGUkN4aFFVRlROVVFzYVVKQlFWUXNRMEZCTWtJNFJDeFJRVUV6UWl4RlFVRnhRME1zVTBGQmNrTXNSVUZCWjBRN1FVRkRPVU1zVlVGQlNVTXNUVUZCVFN4SFFVRkhMRVZCUVdJN08wRkJRMEVzVjBGQlN5eEpRVUZKTTBVc1IwRkJWQ3hKUVVGblFubEZMRkZCUVdoQ0xFVkJRVEJDTzBGQlEzaENSU3hqUVVGTkxFTkJRVU16UlN4SFFVRkVMRU5CUVU0c1IwRkJZMmhETEUxQlFVMHNRMEZCUXpSRExFMUJRVkFzUTBGQll5eEZRVUZrTEVWQlFXdENOa1FzVVVGQlVTeERRVUZEZWtVc1IwRkJSQ3hEUVVFeFFpeEZRVUZwUXpCRkxGTkJRVk1zUTBGQlF6RkZMRWRCUVVRc1EwRkJNVU1zUTBGQlpEdEJRVU5FT3p0QlFVTkVMR0ZCUVU4eVJTeE5RVUZRTzBGQlEwUTdPMEZCUlVRc1YwRkJUMjVFTEUxQlFVMHNSVUZCWWp0QlFVTklPenRCUVROTmQwSXNRenM3T3pzN096czdPenM3TzBGRFJqZENPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3p0QlFWRkJMRTFCUVUxdlJDeFZRVUZPTEZOQlFYbENReXg1UkVGQlVTeERRVUZEUXl4UFFVRlVMRU5CUVdsQ01VZ3NiVVJCUVdwQ0xFVkJRMnBDTzBGQlFVVXlTQ3hOUVVGSkxFVkJRVU1zUTBGQlEwTXNLMFJCUVVRc1EwRkJVRHRCUVVORlF5eExRVUZITEVWQlFVTXNRMEZCUTBNc09FUkJRVVE3UVVGRVRpeERRVVJwUWl4RFFVRjZRaXhEUVVWblF6dEJRVU0xUWpkSUxHRkJRVmNzUjBGQlJUdEJRVU5VTzBGQlEwRTdPMEZCUTBFc1UwRkJTemhJTEZWQlFVd3NSMEZCYTBJc1JVRkJiRUk3UVVGRFNEczdRVUZGUkM5SExGbEJRVlVzUTBGQlEwTXNTVUZCUkN4RlFVRk5PMEZCUTFvc1VVRkJTU3RITEV0QlFVc3NSMEZCUnp0QlFVRkRMMGNzVlVGQlJEdEJRVUZQWjBnc1pVRkJVeXhGUVVGRkxFbEJRVWx5UkN4SlFVRktPMEZCUVd4Q0xFdEJRVm83UVVGRFFTeFRRVUZMYlVRc1ZVRkJUQ3hEUVVGblFrY3NTVUZCYUVJc1EwRkJjVUpHTEV0QlFYSkNPMEZCUTBFc1VVRkJTVWNzVjBGQlZ5eEhRVUZITEVWQlFXeENPMEZCUTBFc1UwRkJTeTlJTEVkQlFVd3NRMEZCVlN4SFFVRkZLMGdzVjBGQldTeEhRVUZGU0N4TFFVRkxMRU5CUVVNdlJ5eEpRVUZMTEdOQlFXRXJSeXhMUVVGTExFTkJRVU5ETEZOQlFWVXNSVUZCYkVVN1FVRkRTRHM3UVVGRFJDOUhMRlZCUVZFc1IwRkJSVHRCUVVOT0xGRkJRVWNzUzBGQlN6WkhMRlZCUVV3c1EwRkJaMEpxUlN4TlFVRm9RaXhIUVVGNVFpeERRVUUxUWl4RlFVRTRRanRCUVVNeFFpeFZRVUZKYTBVc1MwRkJTeXhIUVVGSExFdEJRVXRFTEZWQlFVd3NRMEZCWjBKTExFZEJRV2hDTEVWQlFWbzdRVUZEUVN4VlFVRkpSQ3hYUVVGWExFZEJRVWNzUlVGQmJFSTdRVUZEUVN4WFFVRkxMMGdzUjBGQlRDeERRVUZWTEVkQlFVVXJTQ3hYUVVGWkxFZEJRVVZJTEV0QlFVc3NRMEZCUXk5SExFbEJRVXNzWlVGQlpTeEpRVUZKTWtRc1NVRkJTaXhMUVVGaGIwUXNTMEZCU3l4RFFVRkRReXhUUVVGWExFOUJRV3hHTzBGQlEwZzdRVUZEU2pzN1FVRnVRakpDT3p0QlFYRkNha0lzYlVWQlFVbFVMRlZCUVVvc1JVRkJaaXhGT3pzN096czdPenM3T3pzN1FVTnVRMEU3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUlVFc1RVRkJUVWtzWVVGQllTeEhRVUZKVXl4UlFVRkVMRWxCUVdFc1kwRkJZMEVzVVVGQlpDeERRVUZ6UWp0QlFVTnlSSFpJTEZOQlFVOHNRMEZCUTNkSUxFOUJRVVFzUlVGQlV6dEJRVU5hTEZOQlFVdERMRlZCUVV3c1IwRkJhMElzUzBGQmJFSTdRVUZEU0RzN1FVRkRSRzVKTEV0QlFVY3NRMEZCUTFjc1QwRkJSQ3hGUVVGVE8wRkJRMUk3UVVGRFFTeFRRVUZMZDBnc1ZVRkJUQ3hIUVVGclFpeExRVUZzUWpzN1FVRkRRU3hSUVVGSExFdEJRVXN2U0N4TFFVRk1MRWxCUVdNc1MwRkJTMDRzWTBGQlRDeERRVUZ2UWl4TFFVRndRaXhEUVVGcVFpeEZRVUUwUXp0QlFVTjRReXhoUVVGUExFbEJRVkE3UVVGRFNEczdRVUZEUkhOSkxGZEJRVThzUTBGQlEzQkpMRWRCUVZJc1EwRkJXVmNzVDBGQldqdEJRVU5JT3p0QlFVTkVTU3hsUVVGaExFTkJRVU5ETEV0QlFVUXNSVUZCVHp0QlFVTm9RaXhUUVVGTGNVZ3NZMEZCVEN4SlFVRjFRaXhEUVVGMlFqdEJRVU5CTEZOQlFVdEdMRlZCUVV3c1IwRkJhMElzU1VGQlNVY3NaMFJCUVVvc1EwRkJiMElzUlVGQmNFSXNSVUZCZDBKQkxHOUVRVUZCTEVOQlFXOUNReXhqUVVFMVF5eERRVUZzUWp0QlFVTkJMRk5CUVV0S0xGVkJRVXdzUTBGQlowSkxMRkZCUVdoQ0xFTkJRWGxDZUVnc1MwRkJla0k3UVVGRFNEczdRVUZEUkVNc1owSkJRV01zUTBGQlEzZElMR1ZCUVVRc1JVRkJhVUk3UVVGRE0wSXNVVUZCUnl4RFFVRkRMRXRCUVV0T0xGVkJRVlFzUlVGQmIwSTdRVUZEYUVJc1YwRkJTM0JJTEdGQlFVdzdRVUZEU0RzN1FVRkRSQ3hUUVVGTGMwZ3NZMEZCVEN4SlFVRjFRaXhEUVVGMlFqdEJRVU5CTEZOQlFVdEdMRlZCUVV3c1EwRkJaMEpQTEUxQlFXaENMRU5CUVhWQ0xFdEJRVXRNTEdOQlFUVkNPMEZCUTBnN08wRkJRMFJ1U0N4aFFVRlhMRWRCUVVVN1FVRkRWQ3hUUVVGTGFVZ3NWVUZCVEN4RFFVRm5RbEVzU1VGQmFFSTdRVUZEUVN4VFFVRkxUaXhqUVVGTUxFZEJRWE5DTEVOQlFYUkNPMEZCUTBnN08wRkJRMFIwU1N4UFFVRkxMRU5CUVVOWkxFOUJRVVFzUlVGQlV6dEJRVVZXTEZGQlFVY3NTMEZCUzFBc1MwRkJUQ3hKUVVGakxFdEJRVXRPTEdOQlFVd3NRMEZCYjBJc1QwRkJjRUlzUTBGQmFrSXNSVUZCT0VNN1FVRkRNVU1zWVVGQlR5eEpRVUZRTzBGQlEwZzdPMEZCUTBSelNTeFhRVUZQTEVOQlFVTnlTU3hMUVVGU0xFTkJRV05aTEU5QlFXUTdRVUZEU0RzN1FVRkZSRllzVFVGQlNTeERRVUZEVlN4UFFVRkVMRVZCUVZNN1FVRkZWQ3hSUVVGSExFdEJRVXRRTEV0QlFVd3NTVUZCWXl4TFFVRkxUaXhqUVVGTUxFTkJRVzlDTEUxQlFYQkNMRU5CUVdwQ0xFVkJRVFpETzBGQlEzcERMR0ZCUVU4c1NVRkJVRHRCUVVOSU96dEJRVU5FYzBrc1YwRkJUeXhEUVVGRGJra3NTVUZCVWl4RFFVRmhWU3hQUVVGaU8wRkJRMGc3TzBGQlJVUlVMRTlCUVVzc1EwRkJRMU1zVDBGQlJDeEZRVUZUTzBGQlJWWXNVVUZCUnl4TFFVRkxVQ3hMUVVGTUxFbEJRV01zUzBGQlMwNHNZMEZCVEN4RFFVRnZRaXhQUVVGd1FpeERRVUZxUWl4RlFVRTRRenRCUVVNeFF5eGhRVUZQTEVsQlFWQTdRVUZEU0RzN1FVRkRSSE5KTEZkQlFVOHNRMEZCUTJ4SkxFdEJRVklzUTBGQlkxTXNUMEZCWkR0QlFVTklPenRCUVd4RWIwUXNRMEZCZWtRN08wRkJjVVJsTmtjc05FVkJRV1lzUlRzN096czdPenM3T3pzN08wRkRka1JCTzBGQlFVRTdRVUZCUVRzN1FVRkRRU3hOUVVGTlJTeFpRVUZaTEVkQlFVbFBMRkZCUVVRc1NVRkJZU3hqUVVGalFTeFJRVUZrTEVOQlFYTkNPMEZCUTNCRWRrZ3NVMEZCVHl4RFFVRkRhMGtzVlVGQlZTeEhRVUZETEVsQlFWb3NSVUZCYVVJN1FVRkRjRUpCTEdOQlFWVXNSMEZCUjBFc1ZVRkJWU3hKUVVGRk1VVXNVVUZCVVN4RFFVRkRNa1VzU1VGQmJFTTdRVUZEUVN4UlFVRkpkRUlzU1VGQlNTeEhRVUZIY2tRc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNMRWxCUVhaQ0xFTkJRVmc3UVVGRFFXOUVMRkZCUVVrc1EwRkJRM1JHTEV0QlFVd3NRMEZCVjIxRExFOUJRVmdzUjBGQmNVSXNkMEpCUVhKQ08wRkJRMEYzUlN4alFVRlZMRU5CUVVOeVJTeFhRVUZZTEVOQlFYVkNaMFFzU1VGQmRrSTdRVUZEUVN4VFFVRkxkVUlzVDBGQlRDeEhRVUZsUml4VlFVRm1PMEZCUTBFc1UwRkJTMGNzVVVGQlRDeEhRVUZuUWtnc1ZVRkJWU3hEUVVGRFNTeHZRa0ZCV0N4RFFVRm5ReXhKUVVGb1F5eEZRVUZ6UXl4RFFVRjBReXhEUVVGb1FqdEJRVU5CTEZOQlFVdERMRk5CUVV3c1IwRkJhVUk3UVVGQlJXeEtMRmRCUVVzc1JVRkJSU3hUUVVGVU8wRkJRMGxETEZOQlFVY3NSVUZCUlN4VFFVUlVPMEZCUlVkRExGVkJRVWtzUlVGQlJTeFRRVVpVTzBGQlIwVkRMRmRCUVVzc1JVRkJSVHRCUVVoVUxFdEJRV3BDTzBGQlNVZzdPMEZCUTBSblNpeGpRVUZaTEVOQlFVTnFSaXhQUVVGUExFZEJRVU1zU1VGQlZDeEZRVUZqTzBGQlEzUkNRU3hYUVVGUExFZEJRVWRCTEU5QlFVOHNTVUZCU1N4TFFVRkxOa1VzVDBGQk1VSTdRVUZEUVRkRkxGZEJRVThzUTBGQlEydEdMRk5CUVZJc1IwRkJiMEpzUml4UFFVRlBMRU5CUVVOdFJpeFpRVUZTTEVkQlFYVkNia1lzVDBGQlR5eERRVUZEYjBZc1dVRkJia1E3UVVGRFNEczdRVUZEUkVNc1ZVRkJVU3hEUVVGRFF5eGpRVUZFTEVWQlFXZENPMEZCUTNCQ08wRkJRMEVzVVVGQlNVTXNUMEZCVHl4SFFVRkhMRXRCUVV0VUxGRkJRVXdzUTBGQlkwTXNiMEpCUVdRc1EwRkJiVU1zU1VGQmJrTXNRMEZCWkR0QlFVTkJMRkZCUVVsNlFpeEpRVUZKTEVkQlFVZHBReXhQUVVGUExFTkJRVU5CTEU5QlFVOHNRMEZCUXpsR0xFMUJRVklzUjBGQlpTeERRVUZvUWl4RFFVRnNRanM3UVVGRFFTeFJRVUZITEVOQlFVTTJSQ3hKUVVGRUxFbEJRVk5CTEVsQlFVa3NRMEZCUTJ0RExGTkJRVXdzUTBGQlpVTXNVVUZCWml4RFFVRjNRaXhwUWtGQmVFSXNRMEZCV2l4RlFVRjFSRHRCUVVOdVJEdEJRVU5CYmtNc1ZVRkJTU3hIUVVGSGNrUXNVVUZCVVN4RFFVRkRReXhoUVVGVUxFTkJRWFZDTEVsQlFYWkNMRU5CUVZBN1FVRkRRVzlFTEZWQlFVa3NRMEZCUTJ0RExGTkJRVXdzUTBGQlpVVXNSMEZCWml4RFFVRnRRaXhwUWtGQmJrSTdRVUZEUVN4WFFVRkxXaXhSUVVGTUxFTkJRV040UlN4WFFVRmtMRU5CUVRCQ1owUXNTVUZCTVVJN1FVRkRTRHM3UVVGRFJDeFJRVUZKY1VNc1VVRkJVU3hIUVVGSGJra3NiVVJCUVZFc1EwRkJRME1zVjBGQlZDeERRVUZ4UWpaSUxHTkJRWEpDTEVOQlFXWTdRVUZEUVN4UlFVRkpUU3hKUVVGSkxFZEJRVWNzU1VGQlNYSkdMRWxCUVVvc1JVRkJXRHRCUVVOQkswTXNVVUZCU1N4RFFVRkRkVU1zVTBGQlRDeEhRVUZyUWl4blJFRkJLME5FTEVsQlFVc3NUVUZCZEVVN1FVRkRRWFJETEZGQlFVa3NRMEZCUTJoRUxGZEJRVXdzUTBGQmFVSnhSaXhSUVVGcVFqdEJRVU5CTEZOQlFVdFdMRmxCUVV3N1FVRkRTRHM3UVVGRFJHeEtMRXRCUVVjc1EwRkJRMWNzVDBGQlJDeEZRVUZWYzBJc1MwRkJTeXhIUVVGRExFVkJRV2hDTEVWQlFXMUNPMEZCUTJ4Q0xGRkJRVWNzUzBGQlN6ZENMRXRCUVV3c1NVRkJZeXhMUVVGTFRpeGpRVUZNTEVOQlFXOUNMRXRCUVhCQ0xFTkJRV3BDTEVWQlFUUkRPMEZCUTNoRExHRkJRVThzU1VGQlVEdEJRVU5JT3p0QlFVTkVMRkZCUVVjc1EwRkJReXhMUVVGTGFVb3NVVUZCVGl4SlFVRnJRaXhEUVVGRExFdEJRVXRCTEZGQlFVd3NRMEZCWTNoRkxGZEJRWEJETEVWQlFXZEVPMEZCUXpWRExGZEJRVXMzUkN4UFFVRk1PMEZCUTBnN08wRkJRMFFzVVVGQlNUWkhMRWxCUVVrc1IwRkJSM0pFTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFpeEpRVUYyUWl4RFFVRllPMEZCUTBGdlJDeFJRVUZKTEVOQlFVTjBSaXhMUVVGTUxFTkJRVmR0UXl4UFFVRllMRWRCUVhGQ0xHMURRVUZ5UWp0QlFVTkJMRkZCUVVsM1JpeFJRVUZSTEVkQlFVZHVTU3h0UkVGQlVTeERRVUZEUXl4WFFVRlVMRU5CUVhGQ1ppeFBRVUZ5UWl4RFFVRm1PMEZCUTBFc1VVRkJTV3RLTEVsQlFVa3NSMEZCUnl4SlFVRkpja1lzU1VGQlNpeEZRVUZZTzBGQlEwRXJReXhSUVVGSkxFTkJRVU4xUXl4VFFVRk1MRWRCUVd0Q0xHZEVRVUVyUTBRc1NVRkJTeXhOUVVGMFJUdEJRVU5CUkN4WlFVRlJMRU5CUVVNelNDeExRVUZVTEVOQlFXVnRReXhQUVVGbUxFbEJRVEJDTEUxQlFVbHVReXhMUVVFNVFqdEJRVU5CYzBZc1VVRkJTU3hEUVVGRGFFUXNWMEZCVEN4RFFVRnBRbkZHTEZGQlFXcENPMEZCUTBFc1UwRkJTMklzVVVGQlRDeERRVUZqZUVVc1YwRkJaQ3hEUVVFd1FtZEVMRWxCUVRGQ08wRkJRMEVzVTBGQlN6SkNMRmxCUVV3N1FVRkRRV1FzVjBGQlR5eERRVUZEY0Vrc1IwRkJVaXhEUVVGWlZ5eFBRVUZhTzBGQlEwZzdPMEZCUlVSYUxFOUJRVXNzUTBGQlExa3NUMEZCUkN4RlFVRlRPMEZCUTFZc1VVRkJSeXhMUVVGTFVDeExRVUZNTEVsQlFXTXNTMEZCUzA0c1kwRkJUQ3hEUVVGdlFpeFBRVUZ3UWl4RFFVRnFRaXhGUVVFNFF6dEJRVU14UXl4aFFVRlBMRWxCUVZBN1FVRkRTRHM3UVVGRlJDeFJRVUZKYlVNc1MwRkJTeXhIUVVGSExGZEJRVmNzUzBGQlMyZElMRk5CUVV3c1EwRkJaU3hQUVVGbUxFTkJRWFpDTzBGQlEwRXNVMEZCUzJwS0xFZEJRVXdzUTBGQlUxY3NUMEZCVkN4RlFVRnJRbk5DTEV0QlFXeENPMEZCUTBnN08wRkJSVVJvUXl4TlFVRkpMRU5CUVVOVkxFOUJRVVFzUlVGQlV6dEJRVU5VTEZGQlFVY3NTMEZCUzFBc1MwRkJUQ3hKUVVGakxFdEJRVXRPTEdOQlFVd3NRMEZCYjBJc1RVRkJjRUlzUTBGQmFrSXNSVUZCTmtNN1FVRkRla01zWVVGQlR5eEpRVUZRTzBGQlEwZzdPMEZCUTBRc1VVRkJTVzFETEV0QlFVc3NSMEZCUnl4WFFVRlhMRXRCUVV0blNDeFRRVUZNTEVOQlFXVXNUVUZCWml4RFFVRjJRanRCUVVOQkxGTkJRVXRxU2l4SFFVRk1MRU5CUVZOWExFOUJRVlFzUlVGQmEwSnpRaXhMUVVGc1FqdEJRVU5JT3p0QlFVVkVMMElzVDBGQlN5eERRVUZEVXl4UFFVRkVMRVZCUVZNN1FVRkRWaXhSUVVGSExFdEJRVXRRTEV0QlFVd3NTVUZCWXl4TFFVRkxUaXhqUVVGTUxFTkJRVzlDTEU5QlFYQkNMRU5CUVdwQ0xFVkJRVGhETzBGQlF6RkRMR0ZCUVU4c1NVRkJVRHRCUVVOSU96dEJRVU5FTEZGQlFVbHRReXhMUVVGTExFZEJRVWNzVjBGQlZ5eExRVUZMWjBnc1UwRkJUQ3hEUVVGbExFOUJRV1lzUTBGQmRrSTdRVUZEUVN4VFFVRkxha29zUjBGQlRDeERRVUZUVnl4UFFVRlVMRVZCUVd0Q2MwSXNTMEZCYkVJN1FVRkRTRHM3UVVFelJXMUVMRU5CUVhoRU96dEJRVGhGWlhsR0xESkZRVUZtTEVVN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZETDBWQkxEaEVPenM3T3pzN096czdPenRCUTBGQkxEQkVJaXdpWm1sc1pTSTZJa0JqWVhWellXeE9aWFF2Ykc5bkxuZGxZaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29jbVZ4ZFdseVpTaGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaWtzSUhKbGNYVnBjbVVvWENKdWRXeHNMV3h2WVdSbGNsd2lLU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGJYQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0lzSUZ3aWJuVnNiQzFzYjJGa1pYSmNJbDBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aVFHTmhkWE5oYkU1bGRDOXNiMmRjSWwwZ1BTQm1ZV04wYjNKNUtISmxjWFZwY21Vb1hDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSXBMQ0J5WlhGMWFYSmxLRndpYm5Wc2JDMXNiMkZrWlhKY0lpa3BPMXh1WEhSbGJITmxYRzVjZEZ4MGNtOXZkRnRjSWtCallYVnpZV3hPWlhRdmJHOW5YQ0pkSUQwZ1ptRmpkRzl5ZVNoeWIyOTBXMXdpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpWFN3Z2NtOXZkRnRjSW01MWJHd3RiRzloWkdWeVhDSmRLVHRjYm4wcEtIUm9hWE1zSUdaMWJtTjBhVzl1S0Y5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWTJGMWMyRnNYMjVsZEY5MWRHbHNjMTlmTENCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDJOc2FWOXdjbTluY21WemMxOWZLU0I3WEc1eVpYUjFjbTRnSWl3aUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlEQXBPMXh1SWl3aUx5b3FYRzRnS2lCVWFHbHpJRUpoYzJWTWIyZG5aWElnWTJ4aGMzTWdjSEp2ZG1sa1pXUWdZV0p6ZEhKaFkzUWdZMnhoYzNNZ1ptOXlJR1Y0ZEdWdVpHbHVaeUJ1WlhjZ2JHOW5aMlZ5SUdOc1lYTnpYRzRnS2lCQVkyeGhjM01nUW1GelpVeHZaMXh1SUNvdlhHNWpiR0Z6Y3lCQ1lYTmxURzluWjJWeWUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE1nUFNCN1pHVmlkV2M2SURBc0lHeHZaem94TENCM1lYSnVPaklzSUdWeWNtOXlPaUF6ZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV5UVdOalpYQjBaV1JNWlhabGJITWdQU0I3TURvblpHVmlkV2NuTENBeE9pQW5iRzluSnl3Z01qb2dKM2RoY200bkxDQXpPaUFuWlhKeWIzSW5mVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNaWFpsYkNBOUlIUm9hWE11UVdOalpYQjBaV1JNWlhabGJITmJKMlJsWW5WbkoxMDdYRzRnSUNBZ2ZWeHVJQ0FnSUhObGRDQk1aWFpsYkNoc1pYWmxiQ2w3WEc0Z0lDQWdJQ0FnSUdsbUtIUm9hWE11UVdOalpYQjBaV1JNWlhabGJITmJiR1YyWld4ZElUMDlkVzVrWldacGJtVmtLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YkdWMlpXd2dQU0IwYUdsekxrRmpZMlZ3ZEdWa1RHVjJaV3h6VzJ4bGRtVnNYVHNnSUNBZ1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6Wlh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0dBa2UyeGxkbVZzZlNCdGRYTjBJR0psSUc5dVpTQnZaaUFrZTA5aWFtVmpkQzVyWlhsektIUm9hWE11UVdOalpYQjBaV1JNWlhabGJITXBmV0FwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJR2RsZENCTVpYWmxiQ2dwZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXlRV05qWlhCMFpXUk1aWFpsYkhOYmRHaHBjeTVzWlhabGJGMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kyOXVibVZqZENncGUxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYVcxd2JHVnRaVzUwSUhKbGNYVnBjbVZrSnlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkc5bktHMWxjM05oWjJVcGUxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYVcxd2JHVnRaVzUwSUhKbGNYVnBjbVZrSnlrN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lIZGhjbTRvYldWemMyRm5aU2w3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtDZHBiWEJzWlcxbGJuUWdjbVZ4ZFdseVpXUW5LVHRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnWlhKeWIzSW9iV1Z6YzJGblpTbDdYRzRnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0NkcGJYQnNaVzFsYm5RZ2NtVnhkV2x5WldRbktUdGNiaUFnSUNCOVhHNWNiaUFnSUNCa1pXSjFaeWh0WlhOellXZGxLWHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oybHRjR3hsYldWdWRDQnlaWEYxYVhKbFpDY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZHliM1Z3UW1WbmFXNG9ibUZ0WlNsN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLQ2RwYlhCc1pXMWxiblFnY21WeGRXbHlaV1FuS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuY205MWNFVnVaQ2dwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjSEp2WjNKbGMzTkNaV2RwYmloeVlXNW5aU2w3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtDZHBiWEJzWlcxbGJuUWdjbVZ4ZFdseVpXUW5LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQndjbTluY21WemMxVndaR0YwWlNodFpYTnpZV2RsS1h0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMmx0Y0d4bGJXVnVkQ0J5WlhGMWFYSmxaQ2NwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEJ5YjJkeVpYTnpSVzVrS0cxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCQ1lYTmxURzluWjJWeU95SXNJbVY0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nZEdWeWJVeHZaMmRsY2lCOUlHWnliMjBnSnk0dmRHVnliVXh2WjJkbGNpYzdYRzVsZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUV4dloyZGxjazFwZUdsdWN5QjlJR1p5YjIwZ0p5NHZiRzluWjJWeUxtMXBlR2x1Y3ljN1hHNWNibVY0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nUW1GelpVeHZaMmRsY2lCOUlHWnliMjBnSnk0dlltRnpaVXh2WjJkbGNpYzdYRzVjYmlJc0ltbHRjRzl5ZENCN1pHVm1ZWFZzZENCaGN5QkNZWE5sVEc5bloyVnlJSDBnWm5KdmJTQW5MaTlpWVhObFRHOW5aMlZ5Snp0Y2JtbHRjRzl5ZENCN0lHRnpjMlZ5ZENCOUlHWnliMjBnSjJOaGRYTmhiQzF1WlhRdWRYUnBiSE1uTzF4dUx5b3FYRzRnS2lCVWFHbHpJRXh2WjJkbGNrMXBlR2x1Y3lCamJHRnpjeUJ3Y205MmFXUmxjeUJ0YVhocGJuTWdabTl5SUdGalkzRjFhWEpwYm1jZ2JHOW5aMlZ5WEc0Z0tpQkFZMnhoYzNNZ1RHOW5aMlZ5VFdsNGFXNXpYRzRnS2lCQVpYaDBaVzVrY3lCQ1lYTmxRMnhoYzNOY2JpQXFJRUJsZUdGdGNHeGxYRzRnS2lCYlJWaEJUVkJNUlNBdUxpOWxlR0Z0Y0d4bGN5OXNiMmRuWlhJdWJXbDRhVzV6TG1KaFltVnNMbXB6WFZ4dUlDb3ZYRzVqYjI1emRDQk1iMmRuWlhKTmFYaHBibk1nUFNBb1FtRnpaVU5zWVhOektUMCtJR05zWVhOeklHVjRkR1Z1WkhNZ1FtRnpaVU5zWVhOemUxeHVJQ0FnSUZ4dUlDQWdJSE5sZENCTWIyZG5aWElvYkc5bloyVnlLWHRjYmlBZ0lDQWdJQ0FnWVhOelpYSjBMbUpsU1c1emRHRnVZMlZQWmloc2IyZG5aWElzSUVKaGMyVk1iMmRuWlhJcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dloyZGxjaUE5SUd4dloyZGxjanRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnWjJWMElFeHZaMmRsY2lncGUxeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NXNiMmRuWlhJcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oyeHZaMmRsY2lCcGN5QnViM1FnYzJWMEp5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJHOW5aMlZ5TzF4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFeHZaMmRsY2sxcGVHbHVjenNpTENJdkx5QnZjbWxuYVc0Z1kyOWtaU0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXNkV041WjJsc1ltVnlkQzlxYzI5dUxXUnBjM0JzWVhrdllteHZZaTl0WVhOMFpYSXZhbk52Ymkxa2FYTndiR0Y1TG1welhHNHZMeUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGNnVEhWamVTQkhhV3hpWlhKMFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJLYzI5dVZtbGxkM3RjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwZTF4dUlDQWdJSDFjYmlBZ0lDQnpkR0YwYVdNZ1NsTlBUa1JwYzNCc1lYa29hbk52Yml3Z2IzQmxia3hsZG1Wc2MwRnlaeXdnYzNSNWJHVlBjSFJwYjI1elFYSm5LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQkVSVVpCVlV4VVgxTlVXVXhGWDA5UVZFbFBUbE1nUFNCN1hHNGdJQ0FnSUNBZ0lDQWdjbTl2ZERvZ2V5QjBZV2M2SUNkd2NtVW5MQ0J6ZEhsc1pUb2dKM0JoWkdScGJtYzZJRFZ3ZURzZ1ptOXVkQzF6YVhwbE9pQXhjbVZ0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pVTnZiblJoYVc1bGNqb2dleUIwWVdjNklDZGthWFluTENCemRIbHNaVG9nSjIxaGNtZHBiaTFpYjNSMGIyMDZJRE53ZURzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnZEdsMGJHVTZJSHNnZEdGbk9pQW5jM0JoYmljc0lITjBlV3hsT2lBblkzVnljMjl5T2lCd2IybHVkR1Z5T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pWUmxlSFE2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5KeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lHOXdaVzVDZFhSMGIyNDZJSHNnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBZV2M2SUNkemNHRnVKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lBblpHbHpjR3hoZVRvZ2FXNXNhVzVsTFdKc2IyTnJPeUJ0WVhKbmFXNDZJREJ3ZUNBM2NIZ2dNSEI0SURKd2VEc2dZbTl5WkdWeUxYUnZjRG9nTlhCNElITnZiR2xrSUhSeVlXNXpjR0Z5Wlc1ME95QW5YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ3NnSjJKdmNtUmxjaTFpYjNSMGIyMDZJRFZ3ZUNCemIyeHBaQ0IwY21GdWMzQmhjbVZ1ZERzZ1ltOXlaR1Z5TFd4bFpuUTZJRFZ3ZUNCemIyeHBaQ0JpYkdGamF6c25MRnh1SUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdWdWRITkRiMjUwWVdsdVpYSTZJSHNnZEdGbk9pQW5aR2wySnl3Z2MzUjViR1U2SUNkd1lXUmthVzVuTFd4bFpuUTZJREU0Y0hnN0p5QjlMRnh1SUNBZ0lDQWdJQ0FnSUd0bGVWWmhiSFZsVUdGcGNqb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNka2FYTndiR0Y1T2lCaWJHOWphenNnYldGeVoybHVMV0p2ZEhSdmJUb2dNbkI0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0JyWlhrNklIc2dkR0ZuT2lBbmMzQmhiaWNzSUhOMGVXeGxPaUFuWTI5c2IzSTZJR1JoY210aWJIVmxPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQnplVzFpYjJ4V1lXeDFaVG9nZXlCMFlXYzZJQ2R6Y0dGdUp5d2djM1I1YkdVNklDZGpiMnh2Y2pvZ1pHRnlhMmR5WldWdU95Y2dmU3hjYmlBZ0lDQWdJQ0FnSUNCemRISnBibWRXWVd4MVpUb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNkamIyeHZjam9nWTNKcGJYTnZianNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdiblZ0WW1WeVZtRnNkV1U2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5ZMjlzYjNJNklHSnNkV1U3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJR0p2YjJ4bFlXNVdZV3gxWlRvZ2V5QjBZV2M2SUNkemNHRnVKeXdnYzNSNWJHVTZJQ2RqYjJ4dmNqb2dZbXgxWlRzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnYm5Wc2JGWmhiSFZsT2lCN0lIUmhaem9nSjNOd1lXNG5MQ0J6ZEhsc1pUb2dKMk52Ykc5eU9pQmliSFZsT3ljZ2ZTeGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHOXdaVzVNWlhabGJITWdQU0JwYzA1aFRpaHdZWEp6WlVsdWRDaHZjR1Z1VEdWMlpXeHpRWEpuS1NrZ1B5QkpibVpwYm1sMGVTQTZJSEJoY25ObFNXNTBLRzl3Wlc1TVpYWmxiSE5CY21jcE8xeHVJQ0FnSUNBZ0lDQjJZWElnYzNSNWJHVlBjSFJwYjI1eklEMGdkSGx3Wlc5bUlITjBlV3hsVDNCMGFXOXVjMEZ5WnlBOVBUMGdKMjlpYW1WamRDY2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0EvSUcxbGNtZGxVM1I1YkdWUGNIUnBiMjV6S0VSRlJrRlZURlJmVTFSWlRFVmZUMUJVU1U5T1V5d2djM1I1YkdWUGNIUnBiMjV6UVhKbktWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdPaUJFUlVaQlZVeFVYMU5VV1V4RlgwOVFWRWxQVGxNN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ1QySnFaV04wTG1GemMybG5iaUFoUFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQWdJQ0FnVDJKcVpXTjBMbUZ6YzJsbmJpQTlJR1oxYm1OMGFXOXVLSFJoY21kbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJoY21kbGRDQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KME5oYm01dmRDQmpiMjUyWlhKMElIVnVaR1ZtYVc1bFpDQnZjaUJ1ZFd4c0lIUnZJRzlpYW1WamRDY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhSdklEMGdUMkpxWldOMEtIUmhjbWRsZENrN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnBibVJsZUNBOUlERTdJR2x1WkdWNElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhVzVrWlhnckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYm1WNGRGTnZkWEpqWlNBOUlHRnlaM1Z0Wlc1MGMxdHBibVJsZUYwN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYaDBVMjkxY21ObElDRTlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnVaWGgwUzJWNUlHbHVJRzVsZUhSVGIzVnlZMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYm1WNGRGTnZkWEpqWlN3Z2JtVjRkRXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc5YmJtVjRkRXRsZVYwZ1BTQnVaWGgwVTI5MWNtTmxXMjVsZUhSTFpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSdk8xeHVJQ0FnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnY21WdVpHVnlLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJsYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11Y205dmRDNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NXliMjkwTG5OMGVXeGxPMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJR2xtSUNocWMyOXVJRDA5UFNCdWRXeHNJSHg4SUdwemIyNGdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIWnZhV1JGYkdWdFpXNTBJRDBnWjJWMFZtRnNkV1VvYm5Wc2JDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tIWnZhV1JGYkdWdFpXNTBLVHRjYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHcHpiMjRnYVc1emRHRnVZMlZ2WmlCRVlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWkdGMFpVVnNaVzFsYm5RZ1BTQm5aWFJXWVd4MVpTaHFjMjl1TG5SdlNWTlBVM1J5YVc1bktDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtZWFJsUld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2FuTnZiaUFoUFQwZ0oyOWlhbVZqZENjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnViMjVGZUhCaGJtUmhZbXhsUld4bGJXVnVkQ0E5SUdkbGRGWmhiSFZsS0dwemIyNHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaHViMjVGZUhCaGJtUmhZbXhsUld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCMGFYUnNaU0E5SUVGeWNtRjVMbWx6UVhKeVlYa29hbk52YmlrZ1B5QW5RWEp5WVhsYkp5QXJJR3B6YjI0dWJHVnVaM1JvSUNzZ0oxMG5JRG9nSjA5aWFtVmpkQ2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnZEdocGMweGxkbVZzU1hORGJHOXpaV1FnUFNCdmNHVnVUR1YyWld4eklEd2dNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9aMlYwVkdsMGJHVW9kR2wwYkdVc0lHNTFiR3dzSUhSb2FYTk1aWFpsYkVselEyeHZjMlZrS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dOdmJuWmxjblJLYzI5dVZHOUZiR1Z0Wlc1MGN5aHFjMjl1TENBeEtTazdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJsYkdWdFpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJR052Ym5abGNuUktjMjl1Vkc5RmJHVnRaVzUwY3locWMyOXVMQ0JwYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQjBhR2x6VEdWMlpXeEpjME5zYjNObFpDQTlJR2x1WkdWNElENGdiM0JsYmt4bGRtVnNjenRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdibVY0ZEV4bGRtVnNTWE5EYkc5elpXUWdQU0JwYm1SbGVDQXJJREVnUGlCdmNHVnVUR1YyWld4ek8xeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCamIyNTBZV2x1WlhJZ1BTQm5aWFJEYjI1MFpXNTBjME52Ym5SaGFXNWxjaWgwYUdselRHVjJaV3hKYzBOc2IzTmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2EyVjVJR2x1SUdwemIyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hCY25KaGVTNXBjMEZ5Y21GNUtHcHpiMjViYTJWNVhTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGUnBkR3hsS0NkQmNuSmhlVnNuSUNzZ2FuTnZibHRyWlhsZExteGxibWQwYUNBcklDZGRKeXdnYTJWNUxDQnVaWGgwVEdWMlpXeEpjME5zYjNObFpDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWTI5dWRtVnlkRXB6YjI1VWIwVnNaVzFsYm5SektHcHpiMjViYTJWNVhTd2dhVzVrWlhnZ0t5QXhLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR3B6YjI1YmEyVjVYU0E5UFQwZ2JuVnNiQ0I4ZkNCcWMyOXVXMnRsZVYwZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1oyVjBVM1JoYm1SaGNtUlFZV2x5S0d0bGVTd2diblZzYkNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNocWMyOXVXMnRsZVYwZ2FXNXpkR0Z1WTJWdlppQkVZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1aGNIQmxibVJEYUdsc1pDaG5aWFJUZEdGdVpHRnlaRkJoYVhJb2EyVjVMQ0JxYzI5dVcydGxlVjB1ZEc5SlUwOVRkSEpwYm1jb0tTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2FuTnZibHRyWlhsZElEMDlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1oyVjBWR2wwYkdVb0owOWlhbVZqZENjc0lHdGxlU3dnYm1WNGRFeGxkbVZzU1hORGJHOXpaV1FwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5TG1Gd2NHVnVaRU5vYVd4a0tHTnZiblpsY25SS2MyOXVWRzlGYkdWdFpXNTBjeWhxYzI5dVcydGxlVjBzSUdsdVpHVjRJQ3NnTVNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWhyWlhrc0lHcHpiMjViYTJWNVhTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVk41YldKdmJITWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVWTjViV0p2YkhNb2FuTnZiaWt1Wm05eVJXRmphQ2htZFc1amRHbHZiaWh6ZVcxaWIyd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWh6ZVcxaWIyd3VkRzlUZEhKcGJtY29LU3dnYW5OdmJsdHplVzFpYjJ4ZEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ym5SaGFXNWxjanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJuWlhSVWFYUnNaU2gwYVhSc1pWUmxlSFFzSUc5d2RHbHZibUZzUzJWNUxDQnNaWFpsYkVselEyeHZjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdOMWNuSmxiblJzZVVOc2IzTmxaQ0E5SUd4bGRtVnNTWE5EYkc5elpXUTdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlVOdmJuUmhhVzVsY2k1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1MGFYUnNaVU52Ym5SaGFXNWxjaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNnblpHRjBZUzEwWlhOMEp5d2dKM1JwZEd4bFEyOXVkR0ZwYm1WeUp5azdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIUmxlSFJGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11ZEdsMGJHVlVaWGgwTG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIUnBkR3hsUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG5ScGRHeGxMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdkR2wwYkdWRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWRHbDBiR1V1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnZEdWNGRFVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlZSbGVIUXVjM1I1YkdVN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRFOXdaVzVDZFhSMGIyNG9iR1YyWld4SmMwTnNiM05sWkNrcE8xeHVJQ0FnSUNBZ0lDQWdJR2xtSUNodmNIUnBiMjVoYkV0bGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHVjRkRVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFMyVjVLRzl3ZEdsdmJtRnNTMlY1S1NrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUhSbGVIUkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR1J2WTNWdFpXNTBMbU55WldGMFpWUmxlSFJPYjJSbEtIUnBkR3hsVkdWNGRDa3BPMXh1SUNBZ0lDQWdJQ0FnSUhScGRHeGxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwWlhoMFJXeGxiV1Z1ZENrN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZGYkdWdFpXNTBMbTl1WTJ4cFkyc2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2IzQmxia0oxZEhSdmJpQTlJSFJwZEd4bFJXeGxiV1Z1ZEM1bWFYSnpkRU5vYVd4a08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHOWlhbVZqZEVOdmJuUmxiblJ6SUQwZ2RHbDBiR1ZGYkdWdFpXNTBMbkJoY21WdWRFNXZaR1V1Ym1WNGRGTnBZbXhwYm1jN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2WW1wbFkzUkRiMjUwWlc1MGN5NXpkSGxzWlM1a2FYTndiR0Y1SUQwZ1kzVnljbVZ1ZEd4NVEyeHZjMlZrSUQ4Z0oySnNiMk5ySnlBNklDZHViMjVsSnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzl3Wlc1Q2RYUjBiMjR1YzNSNWJHVXVkSEpoYm5ObWIzSnRJRDBnWTNWeWNtVnVkR3g1UTJ4dmMyVmtJRDhnSjNKdmRHRjBaU2c1TUdSbFp5a25JRG9nSjNKdmRHRjBaU2d3WkdWbktTYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwYkhsRGJHOXpaV1FnUFNBaFkzVnljbVZ1ZEd4NVEyeHZjMlZrTzF4dUlDQWdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwYVhSc1pVVnNaVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjUwWVdsdVpYSkZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRTl3Wlc1Q2RYUjBiMjRvYkdWMlpXeEpjME5zYjNObFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmlkWFIwYjI1RmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2h6ZEhsc1pVOXdkR2x2Ym5NdWIzQmxia0oxZEhSdmJpNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1dmNHVnVRblYwZEc5dUxuTjBlV3hsTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtWc1pXMWxiblF1YzNSNWJHVXVkSEpoYm5ObWIzSnRJRDBnYkdWMlpXeEpjME5zYjNObFpDQS9JQ2R5YjNSaGRHVW9NR1JsWnlrbklEb2dKM0p2ZEdGMFpTZzVNR1JsWnlrbk8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmlkWFIwYjI1RmJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUdkbGRFTnZiblJsYm5SelEyOXVkR0ZwYm1WeUtHbHpRMnh2YzJWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NWpiMjUwWlc1MGMwTnZiblJoYVc1bGNpNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMyVjBRWFIwY21saWRYUmxLQ2RrWVhSaExYUmxjM1FuTENBblkyOXVkR1Z1ZEhORGIyNTBZV2x1WlhJbktUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11WTI5dWRHVnVkSE5EYjI1MFlXbHVaWEl1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdLR2x6UTJ4dmMyVmtJRDhnSjI1dmJtVW5JRG9nSjJKc2IyTnJKeWs3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOdmJuUmhhVzVsY2tWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnWjJWMFUzUmhibVJoY21SUVlXbHlLR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnY0dGcGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NXJaWGxXWVd4MVpWQmhhWEl1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0J3WVdseVJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxtdGxlVlpoYkhWbFVHRnBjaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0J3WVdseVJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaG5aWFJMWlhrb2EyVjVLU2s3WEc0Z0lDQWdJQ0FnSUNBZ2NHRnBja1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFZtRnNkV1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnY0dGcGNrVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z1oyVjBTMlY1S0c1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdhMlY1Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG10bGVTNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHdGxlVVZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTVyWlhrdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ2EyVjVSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaHVZVzFsSUNzZ0p6b2dKeWtwTzF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCclpYbEZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRlpoYkhWbEtIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhaaGJIVmxSV3hsYldWdWREdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2JuVnNiRlI1Y0dVZ1BTQW5iMkpxWldOMEp6dGNiaUFnSUNBZ0lDQWdJQ0J6ZDJsMFkyZ2dLSFI1Y0dWdlppQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5jM2x0WW05c0p6cGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11YzNsdFltOXNWbUZzZFdVdWRHRm5LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWMzbHRZbTlzVm1Gc2RXVXVjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaDJZV3gxWlM1MGIxTjBjbWx1WnlncEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmMzUnlhVzVuSnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXVjM1J5YVc1blZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11YzNSeWFXNW5WbUZzZFdVdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNnblhDSW5JQ3NnZG1Gc2RXVWdLeUFuWENJbktTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmJuVnRZbVZ5SnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXViblZ0WW1WeVZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11Ym5WdFltVnlWbUZzZFdVdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNoMllXeDFaU2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKMkp2YjJ4bFlXNG5PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLSE4wZVd4bFQzQjBhVzl1Y3k1aWIyOXNaV0Z1Vm1Gc2RXVXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXVZbTl2YkdWaGJsWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElHNTFiR3hVZVhCbE9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTV1ZFd4c1ZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11Ym5Wc2JGWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpVVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z2JXVnlaMlZUZEhsc1pVOXdkR2x2Ym5Nb1pHVm1ZWFZzZEhNc0lHOTJaWEp5YVdSbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQnRaWEpuWldRZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnWkdWbVlYVnNkSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFsY21kbFpGdHJaWGxkSUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z1pHVm1ZWFZzZEhOYmEyVjVYU3dnYjNabGNuSnBaR1Z6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JXVnlaMlZrTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5Wlc1a1pYSW9LVHRjYmlBZ0lDQjlYRzU5SWl3aWFXMXdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5QkNZWE5sVEc5bloyVnlJSDBnWm5KdmJTQW5MaTlpWVhObFRHOW5aMlZ5Snp0Y2JtbHRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdURzluVG05a1pVMXBlR2x1Y3lCOUlHWnliMjBnSnk0dmRHVnliVXh2WjJkbGNpNXRhWGhwYm5NdWJtOWtaU2M3WEc1cGJYQnZjblFnZXlCa1pXWmhkV3gwSUdGeklFeHZaMWRsWWsxcGVHbHVjeUI5SUdaeWIyMGdKeTR2ZEdWeWJVeHZaMmRsY2k1dGFYaHBibk11ZDJWaUp6dGNibWx0Y0c5eWRDQjdJSEJzWVhSbWIzSnRJSDBnWm5KdmJTQW5ZMkYxYzJGc0xXNWxkQzUxZEdsc2N5YzdYRzR2S2lwY2JpQXFJRlJvYVhNZ1ZHVnliVXh2WjJkbGNpQndjbTkyYVdSbElHbHpiMjF2Y25Cb2FXTWdiRzluWjJWeVhHNGdLaUI3SUcxcGVGZHBkR2dnT2lCN0lDZHViMlJsSnpvZ1cweHZaMDV2WkdWTmFYaHBibk5kTENBbmQyVmlKem9nVzFkbFlrNXZaR1ZOYVhocGJuTmRJSDBnZlZ4dUlDb2dRR05zWVhOeklGUmxjbTFNYjJkblpYSmNiaUFxSUVCbGVIUmxibVJ6SUVKaGMyVk1iMmRuWlhKY2JpQXFJRUJsZUdGdGNHeGxYRzRnS2lCYlJWaEJUVkJNUlNBdUxpOWxlR0Z0Y0d4bGN5OXNiMmN1WW1GaVpXd3Vhbk5kWEc0Z0tpOWNibU5zWVhOeklGUmxjbTFNYjJkblpYSWdaWGgwWlc1a2N5QndiR0YwWm05eWJTNXRhWGhYYVhSb0tFSmhjMlZNYjJkblpYSXNJRnh1SUNBZ0lDQWdJQ0I3SUc1dlpHVTZXMHh2WjA1dlpHVk5hWGhwYm5OZExDQmNiaUFnSUNBZ0lDQWdJQ0IzWldJNlcweHZaMWRsWWsxcGVHbHVjMTBnZlNBcGUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ0lDQWdJQzhxS2tCd2NtbDJZWFJsSUhzZ1FYSnlZWGtnZlNCemRHRmpheUJ2WmlCbmNtOTFjSE1nS2k5Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuY205MWNGTjBZV05ySUQwZ1cxMDdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJR2R5YjNWd1FtVm5hVzRvYm1GdFpTbDdJQ0FnWEc0Z0lDQWdJQ0FnSUd4bGRDQm5jbTkxY0NBOUlIdHVZVzFsTENCaVpXZHBibFJwYldVNklHNWxkeUJFWVhSbEtDbDlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtZHliM1Z3VTNSaFkyc3VjSFZ6YUNobmNtOTFjQ2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQnBibVJsYm5SVGNHRmpaU0E5SUNjbk8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dlp5aGdKSHRwYm1SbGJuUlRjR0ZqWlgwa2UyZHliM1Z3TG01aGJXVjlPaUJpWldkcGJpQmhkQ0FrZTJkeWIzVndMbUpsWjJsdVZHbHRaWDFnS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdaM0p2ZFhCRmJtUW9LWHRjYmlBZ0lDQWdJQ0FnYVdZb2RHaHBjeTVuY205MWNGTjBZV05yTG14bGJtZDBhQ0ErSURBcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHZHliM1Z3SUQwZ2RHaHBjeTVuY205MWNGTjBZV05yTG5CdmNDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR2x1WkdWdWRGTndZV05sSUQwZ0p5YzdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbXh2WnloZ0pIdHBibVJsYm5SVGNHRmpaWDBrZTJkeWIzVndMbTVoYldWOU9pQmxibVFnWVdaMFpYSWdKSHNvYm1WM0lFUmhkR1VvS1NBdElHZHliM1Z3TG1KbFoybHVWR2x0WlNsOUlDaHRjeWxnS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JuMWNibVY0Y0c5eWRDQmtaV1poZFd4MElHNWxkeUJVWlhKdFRHOW5aMlZ5S0NrN0lpd2lhVzF3YjNKMElDb2dZWE1nWTJ4cFVISnZaM0psYzNNZ1puSnZiU0FuWTJ4cExYQnliMmR5WlhOekp6dGNibHh1WTI5dWMzUWdURzluVG05a1pVMXBlR2x1Y3lBOUlDaE1iMmREYkdGemN5azlQaUJqYkdGemN5QmxlSFJsYm1SeklFeHZaME5zWVhOemUxeHVJQ0FnSUdOdmJtNWxZM1FvWTJoaGJtNWxiQ2w3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRFSmhjaUE5SUdaaGJITmxPMXh1SUNBZ0lIMWNiaUFnSUNCc2IyY29iV1Z6YzJGblpTbDdYRzRnSUNBZ0lDQWdJQzh2VkU5RVR6b2diV0ZyWlNCa1pXTnZjbUYwYjNJZ1hHNGdJQ0FnSUNBZ0lIUm9hWE11WTNWeWNtVnVkRUpoY2lBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TG14bGRtVnNJRDQ5SUhSb2FYTXVRV05qWlhCMFpXUk1aWFpsYkhOYkoyeHZaeWRkS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LRzFsYzNOaFoyVXBPMXh1SUNBZ0lIMWNiaUFnSUNCd2NtOW5jbVZ6YzBKbFoybHVLSEpoYm1kbEtYdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2NtOWpaWE56UTI5MWJuUmxjaUFyUFNBeE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OMWNuSmxiblJDWVhJZ1BTQnVaWGNnWTJ4cFVISnZaM0psYzNNdVFtRnlLSHQ5TENCamJHbFFjbTluY21WemN5NVFjbVZ6WlhSekxuTm9ZV1JsYzE5amJHRnpjMmxqS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqZFhKeVpXNTBRbUZ5TG5ObGRGUnZkR0ZzS0hKaGJtZGxLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NISnZaM0psYzNOVmNHUmhkR1VvY0hKdlozSmxjM05OWlhOellXZGxLWHRjYmlBZ0lDQWdJQ0FnYVdZb0lYUm9hWE11WTNWeWNtVnVkRUpoY2lsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQnliMmR5WlhOelFtVm5hVzRvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CeWIyTmxjM05EYjNWdWRHVnlJQ3M5SURFN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WTNWeWNtVnVkRUpoY2k1MWNHUmhkR1VvZEdocGN5NXdjbTlqWlhOelEyOTFiblJsY2lrN1hHNGdJQ0FnZlZ4dUlDQWdJSEJ5YjJkeVpYTnpSVzVrS0NsN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WTNWeWNtVnVkRUpoY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSEp2WTJWemMwTnZkVzUwWlhJZ1BTQXdPMXh1SUNBZ0lIMWNiaUFnSUNCa1pXSjFaeWh0WlhOellXZGxLWHRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdsbUtIUm9hWE11YkdWMlpXd2dQajBnZEdocGN5NUJZMk5sY0hSbFpFeGxkbVZzYzFzblpHVmlkV2NuWFNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExtUmxZblZuS0cxbGMzTmhaMlVwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSGRoY200b2JXVnpjMkZuWlNsN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnBaaWgwYUdsekxteGxkbVZzSUQ0OUlIUm9hWE11UVdOalpYQjBaV1JNWlhabGJITmJKM2RoY200blhTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbmRoY200b2JXVnpjMkZuWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWlhKeWIzSW9iV1Z6YzJGblpTbDdYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMbXhsZG1Wc0lENDlJSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE5iSjJWeWNtOXlKMTBwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1bGNuSnZjaWh0WlhOellXZGxLVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCTWIyZE9iMlJsVFdsNGFXNXpPeUlzSW1sdGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCS2MyOXVWbWxsZDMwZ1puSnZiU0FuTGk5d2NtVjBkSGxLYzI5dUp6dGNibU52Ym5OMElFeHZaMWRsWWsxcGVHbHVjeUE5SUNoTWIyZERiR0Z6Y3lrOVBpQmpiR0Z6Y3lCbGVIUmxibVJ6SUV4dlowTnNZWE56ZTF4dUlDQWdJR052Ym01bFkzUW9aRzlqZFcxbGJuUkZiRDF1ZFd4c0tYdGNiaUFnSUNBZ0lDQWdaRzlqZFcxbGJuUkZiQ0E5SUdSdlkzVnRaVzUwUld4OGZHUnZZM1Z0Wlc1MExtSnZaSGs3WEc0Z0lDQWdJQ0FnSUd4bGRDQnViMlJsSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2hjSW5Wc1hDSXBPMXh1SUNBZ0lDQWdJQ0J1YjJSbExuTjBlV3hsTG1OemMxUmxlSFFnUFNCY0lteHBjM1F0YzNSNWJHVXRkSGx3WlRvZ2JtOXVaVHRjSWp0Y2JpQWdJQ0FnSUNBZ1pHOWpkVzFsYm5SRmJDNWhjSEJsYm1SRGFHbHNaQ2h1YjJSbEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bWNtRnRaVVZzSUQwZ1pHOWpkVzFsYm5SRmJEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyZG5aWEpGYkNBOUlHUnZZM1Z0Wlc1MFJXd3VaMlYwUld4bGJXVnVkSE5DZVZSaFowNWhiV1VvWENKMWJGd2lLVnN3WFR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqYjJ4dmNrTnZaR1VnUFNCN0lHUmxZblZuT2lBbkkyWXhaakZtTVNjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3h2WnpvZ0p5TXdNVEF4TURFbkxDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IzWVhKdU9pQW5JMlZoWlRJMlpTY3NJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWlhKeWIzSTZJQ2NqWldFMlpUYzRKeUI5TzF4dUlDQWdJSDFjYmlBZ0lDQnpZM0p2Ykd4Q2IzUjBiMjBvWld4bGJXVnVkRDF1ZFd4c0tYdGNiaUFnSUNBZ0lDQWdaV3hsYldWdWRDQTlJR1ZzWlcxbGJuUWdmSHdnZEdocGN5NW1jbUZ0WlVWc08xeHVJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExuTmpjbTlzYkZSdmNDQTlJR1ZzWlcxbGJuUXVjMk55YjJ4c1NHVnBaMmgwSUMwZ1pXeGxiV1Z1ZEM1amJHbGxiblJJWldsbmFIUTdYRzRnSUNBZ2ZWeHVJQ0FnSUhCeWIyZHlaWE56S0hCeWIyTmxjM05OWlhOellXZGxLWHRjYmlBZ0lDQWdJQ0FnTHk4Z2JHVjBJRzV2WkdVZ1BTQjBhR2x6TG14dloyZGxja1ZzTG1kbGRFVnNaVzFsYm5SelFubFVZV2RPWVcxbEtGd2liR2s2Ym5Sb0xXeGhjM1F0YjJZdGRIbHdaU2d4S1Z3aUtUdGNiaUFnSUNBZ0lDQWdiR1YwSUV4SlRtOWtaWE1nUFNCMGFHbHpMbXh2WjJkbGNrVnNMbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsS0Z3aWJHbGNJaWs3WEc0Z0lDQWdJQ0FnSUd4bGRDQnViMlJsSUQwZ1RFbE9iMlJsYzF0TVNVNXZaR1Z6TG14bGJtZDBhQzB4WFR0Y2JpQWdJQ0FnSUNBZ2FXWW9JVzV2WkdVZ2ZId2dibTlrWlM1amJHRnpjMHhwYzNRdVkyOXVkR0ZwYm5Nb1hDSnNiMmRuWlhJdGNISnZaM0psYzNOY0lpa3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OWpjbVZoZEdVZ2JtVjNJR1ZzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnViMlJsSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2hjSW14cFhDSXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JtOWtaUzVqYkdGemMweHBjM1F1WVdSa0tGd2liRzluWjJWeUxYQnliMmR5WlhOelhDSXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVzYjJkblpYSkZiQzVoY0hCbGJtUkRhR2xzWkNodWIyUmxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCc1pYUWdhbk52Yms1dlpHVWdQU0JLYzI5dVZtbGxkeTVLVTA5T1JHbHpjR3hoZVNod2NtOWpaWE56VFdWemMyRm5aU2s3WEc0Z0lDQWdJQ0FnSUhaaGNpQmtZWFJsSUQwZ2JtVjNJRVJoZEdVb0tUdGNiaUFnSUNBZ0lDQWdibTlrWlM1cGJtNWxja2hVVFV3Z1BTQmdQSEFnYzNSNWJHVTlYQ0ptYjI1MExYTnBlbVU2SURFeWNIZzdJSFJsZUhRdFlXeHBaMjQ2Y21sbmFIUmNJajRrZTJSaGRHVjlQQzl3UG1BN1hHNGdJQ0FnSUNBZ0lHNXZaR1V1WVhCd1pXNWtRMmhwYkdRb2FuTnZiazV2WkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OamNtOXNiRUp2ZEhSdmJTZ3BPMXh1SUNBZ0lIMWNiaUFnSUNCc2IyY29iV1Z6YzJGblpTd2djM1I1YkdVOUp5Y3BlMXh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMbXhsZG1Wc0lENDlJSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE5iSjJ4dlp5ZGRLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXeHNPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6TG14dloyZGxja1ZzSUh4OElDRjBhR2x6TG14dloyZGxja1ZzTG1Gd2NHVnVaRU5vYVd4a0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZMjl1Ym1WamRDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUd4bGRDQnViMlJsSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2hjSW14cFhDSXBPMXh1SUNBZ0lDQWdJQ0J1YjJSbExuTjBlV3hsTG1OemMxUmxlSFFnUFNBblltOXlaR1Z5TFdKdmRIUnZiVG9nTVhCNElITnZiR2xrSUNOa1pXUmxaR1U3SnpzZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUd4bGRDQnFjMjl1VG05a1pTQTlJRXB6YjI1V2FXVjNMa3BUVDA1RWFYTndiR0Y1S0cxbGMzTmhaMlVwTzF4dUlDQWdJQ0FnSUNCMllYSWdaR0YwWlNBOUlHNWxkeUJFWVhSbEtDazdYRzRnSUNBZ0lDQWdJRzV2WkdVdWFXNXVaWEpJVkUxTUlEMGdZRHh3SUhOMGVXeGxQVndpWm05dWRDMXphWHBsT2lBeE1uQjRPeUIwWlhoMExXRnNhV2R1T25KcFoyaDBYQ0krSkh0a1lYUmxmVHd2Y0Q1Z08xeHVJQ0FnSUNBZ0lDQnFjMjl1VG05a1pTNXpkSGxzWlM1amMzTlVaWGgwSUNzOUlDYzdKeXR6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdibTlrWlM1aGNIQmxibVJEYUdsc1pDaHFjMjl1VG05a1pTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOW5aMlZ5Uld3dVlYQndaVzVrUTJocGJHUW9ibTlrWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOeWIyeHNRbTkwZEc5dEtDazdYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0cxbGMzTmhaMlVwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR1JsWW5WbktHMWxjM05oWjJVcGUxeHVJQ0FnSUNBZ0lDQnBaaWgwYUdsekxteGxkbVZzSUQ0OUlIUm9hWE11UVdOalpYQjBaV1JNWlhabGJITmJKMlJsWW5WbkoxMHBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUd4bGRDQnpkSGxzWlNBOUlDZGpiMnh2Y2pvbklDc2dkR2hwY3k1amIyeHZja052WkdWYkoyUmxZblZuSjEwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5bktHMWxjM05oWjJVc0lITjBlV3hsS1RzZ0lDQWdJQ0JjYmlBZ0lDQjlYRzVjYmlBZ0lDQjNZWEp1S0cxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TG14bGRtVnNJRDQ5SUhSb2FYTXVRV05qWlhCMFpXUk1aWFpsYkhOYkozZGhjbTRuWFNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnNaWFFnYzNSNWJHVWdQU0FuWTI5c2IzSTZKeUFySUhSb2FYTXVZMjlzYjNKRGIyUmxXeWQzWVhKdUoxMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOW5LRzFsYzNOaFoyVXNJSE4wZVd4bEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCbGNuSnZjaWh0WlhOellXZGxLWHRjYmlBZ0lDQWdJQ0FnYVdZb2RHaHBjeTVzWlhabGJDQStQU0IwYUdsekxrRmpZMlZ3ZEdWa1RHVjJaV3h6V3lkbGNuSnZjaWRkS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHeGxkQ0J6ZEhsc1pTQTlJQ2RqYjJ4dmNqb25JQ3NnZEdocGN5NWpiMnh2Y2tOdlpHVmJKMlZ5Y205eUoxMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOW5LRzFsYzNOaFoyVXNJSE4wZVd4bEtUdGNiaUFnSUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JNYjJkWFpXSk5hWGhwYm5NN0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4RlgyTmhkWE5oYkY5dVpYUmZkWFJwYkhOZlh6c2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMnhwWDNCeWIyZHlaWE56WDE4N0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VJbWdEYXRhc2V0IH0gZnJvbSAnLi9iYXNlSW1nRGF0YXNldCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgTG9nZ2VyTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5sb2cnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgTWVtQ2FjaGVNaXhpbnMsIG1lbURvd25DYWNoZSB9IGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBJbWFnZURhdGFzZXRmZXRjaE1peGlucyB9IGZyb20gJy4vaW1hZ2VEYXRhc2V0ZmV0Y2gubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgSW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGlucyB9IGZyb20gJy4vaW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBJbWFnZURhdGFzZXRHZW5lcmF0b3JNaXhpbnMgfSBmcm9tICcuL2ltYWdlRGF0YXNldEdlbmVyYXRvci5taXhpbnMnO1xuaW1wb3J0IHsgUHJlcHJvY2Vzc2luZ01peGlucywgaW1hZ2VQcmVwcm9jZXNzaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW5pc3REYXRhc2V0IGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlSW1nRGF0YXNldCwgXG4gICAgICAgIFsgSW1hZ2VEYXRhc2V0ZmV0Y2hNaXhpbnMsXG4gICAgICAgICAgSW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGlucyxcbiAgICAgICAgICBQcmVwcm9jZXNzaW5nTWl4aW5zLFxuICAgICAgICAgIEltYWdlRGF0YXNldEdlbmVyYXRvck1peGlucyxcbiAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAgICAgICAgICBTdG9yYWdlTWl4aW5zLFxuICAgICAgICAgIExvZ2dlck1peGlucyBdKXtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKXtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBpbmRleERCU3RvcmFnZTtcbiAgICAgICAgdGhpcy5NZW1DYWNoZSA9IG1lbURvd25DYWNoZTtcbiAgICAgICAgY29uc3QgUHJlcHJvY2Vzc2luZ1NhbXBsZSA9IGFzeW5jIChtYXN0ZXJTYW1wbGVCdWZmZXIsIHNhbXBsZVNpemUpPT57XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgaW1hZ2VQcmVwcm9jZXNzaW5nLmltYWdlU3BsaXQobWFzdGVyU2FtcGxlQnVmZmVyLCBzYW1wbGVTaXplKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgUHJlcHJvY2Vzc2luZ0xhYmVsID0gYXN5bmMgKG1hc3RlckxhYmVsQnVmZmVyLCBsYWJlbFNpemUpPT57XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgaW1hZ2VQcmVwcm9jZXNzaW5nLmltYWdlU3BsaXQobWFzdGVyTGFiZWxCdWZmZXIsIGxhYmVsU2l6ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyhQcmVwcm9jZXNzaW5nU2FtcGxlLCBQcmVwcm9jZXNzaW5nTGFiZWwpO1xuICAgIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlSW1nRGF0YXNldHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhc2V0Q29uZmlndXJlKXtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gZGF0YXNldENvbmZpZ3VyZTtcbiAgICAgICAgY29uc3Qge251bVNhbXBsZXMsIHNhbXBsZVNpemUsIG51bUNsYXNzZXN9ID0gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmRhdGFTaXplID0gW251bVNhbXBsZXMsIC4uLnNhbXBsZVNpemVdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5udW1TYW1wbGVzID0gbnVtU2FtcGxlcztcbiAgICAgICAgdGhpcy5zYW1wbGVTaXplID0gc2FtcGxlU2l6ZTtcbiAgICAgICAgdGhpcy5udW1DbGFzcyAgID0gbnVtQ2xhc3NlcztcbiAgICB9XG4gICAgXG4gICAgc3VtbWFyeSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb259IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbk1peGluc30gZnJvbSAnLi9mdW5jdGlvbi5taXhpbnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdGlvbixbRnVuY3Rpb25NaXhpbnNdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn0iLCJjb25zdCBGdW5jdGlvbk1peGlucyA9IChCYXNlRnVuY3Rpb25DbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VGdW5jdGlvbkNsYXNzeyBcbiAgICBnZXRJbWdCdWZmZXJTaXplKGltZ1NpemUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoKHMsZCk9PnMqZCwxLGltZ1NpemUpO1xuICAgIH1cbiAgICBnZW5lcmF0b3JXaXRoSW5kZXgoaXRlbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5hZGRJbmRleChSLm1hcCkoKGQsIGlkeCk9PltpZHgsIGRdLCBpdGVtcyk7XG4gICAgfVxuICAgIHNwbGl0VHJhaW5UZXN0U2V0KGl0ZW1zLCBzcGxpdEluZGV4KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuc3BsaXRBdChzcGxpdEluZGV4LCBpdGVtcyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uTWl4aW5zOyIsImltcG9ydCB7IFNhbXBsaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5jb25zdCBJbWFnZURhdGFzZXRHZW5lcmF0b3JNaXhpbnMgPSAoQmFzZUltYWdlQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlSW1hZ2VDbGFzc3sgXG4gICAgXG4gICAgZ2V0VHJhaW5UZXN0U2V0KHRyYWluU2l6ZT1udWxsKXtcbiAgICAgICAgdHJhaW5TaXplID0gdHJhaW5TaXplfHxwYXJzZUludCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZy5sZW5ndGgqMC45KTtcbiAgICAgICAgY29uc3QgW3RyYWluU2V0LCB0ZXN0U2V0XSA9IHRoaXMuRi5zcGxpdFRyYWluVGVzdFNldCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgdHJhaW5TaXplKTtcbiAgICAgICAgcmV0dXJuIFt0cmFpblNldCwgdGVzdFNldF07XG4gICAgfVxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcihzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZT1udWxsLCBzdGFydD0wLCBlbmQ9bnVsbCl7XG4gICAgICAgIGlmKCF0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncHJlcHJvY2Vzc2luZyBtdXN0IGJlIHBlcmZvcm1lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGJhdGNoU2l6ZSA9IGJhdGNoU2l6ZT9iYXRjaFNpemU6c2FtcGxlSWR4U2V0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgX2JhdGNoZXMgPSB0aGlzLkYuaHNwbGl0RXZlcnkoc2FtcGxlSWR4U2V0LCBiYXRjaFNpemUpO1xuICAgICAgICBjb25zdCBiYXRjaGVzID0gU2FtcGxpbmcuY2hvaWNlKF9iYXRjaGVzLCBfYmF0Y2hlcy5sZW5ndGgpO1xuICAgICAgICBpZihlbmQgPT09IG51bGwpe1xuICAgICAgICAgICAgZW5kID0gYmF0Y2hlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRJbmRleCA9IHN0YXJ0LCBpdGVyYXRpb25Db3VudCA9IDAsIHN0ZXAgPSAxO1xuICAgICAgICBjb25zdCBiYXRjaEdlbmVyYXRvciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiBhc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXRjaFNhbXBsZXMgPSBbXSwgYmF0Y2hMYWJlbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSBvZiBiYXRjaGVzW25leHRJbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hTYW1wbGVzID0gWy4uLmJhdGNoU2FtcGxlcywgc2FtcGxlSXRlbVtzYW1wbGVQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaExhYmVscyA9IFsuLi5iYXRjaExhYmVscywgbGFiZWxJdGVtW2xhYmVsUGF0aF1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSBzdGVwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWR4ID0gaXRlcmF0aW9uQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7aWR4LCBiYXRjaFNpemUsIGRhdGE6W2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUobmV4dEluZGV4IDwgZW5kKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJhdGNoR2VuZXJhdG9yO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBJbWFnZURhdGFzZXRHZW5lcmF0b3JNaXhpbnM7IiwiaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5jb25zdCBJbWFnZURhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zID0gKEJhc2VJbWFnZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUltYWdlQ2xhc3N7IFxuICAgIG1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtKHNhdmVEaXIpe1xuICAgICAgICBjb25zdCBJbWFnZUJ1ZmZlclNpemUgPSB0aGlzLkYuZ2V0SW1nQnVmZmVyU2l6ZSh0aGlzLnNhbXBsZVNpemUpO1xuICAgICAgICBjb25zdCBMYWJlbEJ1ZmZlclNpemUgPSB0aGlzLm51bUNsYXNzO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7aW1hZ2VCdWZmZXJTaXplOiBJbWFnZUJ1ZmZlclNpemUsIFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWxCdWZmZXJTaXplOiBMYWJlbEJ1ZmZlclNpemV9KTtcbiAgICAgICAgY29uc3QgVHJhbnNmb3JtRm4gPSAoY2h1bmssIGNodW5rRW5jb2RpbmcsIGFmdGVyVHJhbnNmb3JtRm4pID0+e1xuICAgICAgICAgICAgY29uc3QgVHJhbnNmb3JtQXN5bmMgPSBhc3luYyAoKT0+e1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVCdWZmZXIgPSBjaHVuay5zYW1wbGU7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsQnVmZmVyID0gY2h1bmsubGFiZWw7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZUJ1ZmZlciwgbGFiZWxCdWZmZXJ9KTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlcHJvY2Vzc2VkSW1nQnVmZmVyID0gYXdhaXQgdGhpcy5QcmVwcm9jZXNzaW5nU2FtcGxlRm4oc2FtcGxlQnVmZmVyLCBJbWFnZUJ1ZmZlclNpemUpO1xuICAgICAgICAgICAgICAgIGxldCBwcmVwcm9jZXNzZWRMYWJlbEJ1ZmZlciA9IGF3YWl0IHRoaXMuUHJlcHJvY2Vzc2luZ0xhYmVsRm4obGFiZWxCdWZmZXIsIExhYmVsQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvY2Vzc2VkQ2h1bms6IHRoaXMuRi56aXAocHJlcHJvY2Vzc2VkSW1nQnVmZmVyLCBwcmVwcm9jZXNzZWRMYWJlbEJ1ZmZlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rSWR4OiBjaHVuay5pZHh9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFRyYW5zZm9ybUFzeW5jKGNodW5rKS50aGVuKHByb2Nlc3NlZENodW5rPT57XG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2Zvcm1GbihudWxsLCBwcm9jZXNzZWRDaHVuayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFdyaXRlRm4gPSAocHJvY2Vzc2VkQ2h1bmssIGNodW5rRW5jb2RpbmcsIGNhbGxiYWNrKSA9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgV3JpdGVBc3luYyA9IGFzeW5jIChwcm9jZXNzZWRDaHVuayk9PntcbiAgICAgICAgICAgICAgICBsZXQgZ2VuZXJhdG9yID0gdGhpcy5GLmdlbmVyYXRvcldpdGhJbmRleChwcm9jZXNzZWRDaHVuay5wcm9jZXNzZWRDaHVuayk7XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rSWR4ICA9IHByb2Nlc3NlZENodW5rLmNodW5rSWR4O1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVQYXRoICA9IFtdLCBsYWJlbFBhdGggPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGUsIGxhYmVsXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rU2FtcGxlUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ3NhbXBsZS8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIHNhbXBsZSk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtMYWJlbFBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdsYWJlbC8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlUGF0aCA9IFsuLi5zYW1wbGVQYXRoLCBjaHVua1NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFBhdGggPSBbLi4ubGFiZWxQYXRoLCBjaHVua0xhYmVsUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Moe3ByZXByb2Nlc3Npbmc6IFtjaHVua1NhbXBsZVBhdGgsIGNodW5rTGFiZWxQYXRoXX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5GLnppcChzYW1wbGVQYXRoLCBsYWJlbFBhdGgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgV3JpdGVBc3luYyhwcm9jZXNzZWRDaHVuaykudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSBbLi4udGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIC4uLnJlc3VsdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBkdXBsZXhlciA9IFN0cmVhbS5tYWtlRHVwbGV4KFdyaXRlRm4pO1xuICAgICAgICBsZXQgdHJhbnNmb3JtZXIgPSBTdHJlYW0ubWFrZVRyYW5zZm9ybShUcmFuc2Zvcm1Gbik7XG4gICAgICAgIGxldCBzdHJlYW0gPSBkdXBsZXhlci5waXBlKHRyYW5zZm9ybWVyKS5waXBlKGR1cGxleGVyKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG5cbiAgICBhc3luYyBwcmVwcm9jZXNzaW5nRGF0YXNldChzYXZlRGlyPScvcHJlcHJvY2Vzc2luZy9tbmlzdC8nLHN0b3JlSW5NZW1vcnk9ZmFsc2Upe1xuICAgICAgICB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlID0gKHN0b3JlSW5NZW1vcnkpP3RoaXMubWVtQ2FjaGU6dGhpcy5zdG9yYWdlO1xuICAgICAgICBsZXQgc3RyZWFtID0gdGhpcy5tYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbShzYXZlRGlyKTtcbiAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlID0gc2FtcGxlSXRlbVtzYW1wbGVQYXRoXTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGxhYmVsSXRlbVtsYWJlbFBhdGhdO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgICAgIHN0cmVhbS5wdXNoKHtpZHgsIHNhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0ucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBzdHJlYW0ub24oJ2ZpbmlzaCcsICgpPT57XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlRGF0YXNldFByZXByb2Nlc3NpbmdNaXhpbnM7IiwiXG5pbXBvcnQgeyBTYW1wbGluZyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY29uc3QgRGF0YXNldGZldGNoTWl4aW5zID0gKEJhc2VJbWFnZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUNsYXNzeyBcbiAgICBhc3luYyBmZXRjaExhYmVsQ2h1bmsoc2F2ZURpciwgbGFiZWxDaHVuayl7XG4gICAgICAgIGxldCBsYWJlbENodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBsYWJlbENodW5rO1xuICAgICAgICBsZXQgbGFiZWxTYXZlUGF0aCA9IHNhdmVEaXIgKyBsYWJlbENodW5rO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoRmlsZShsYWJlbENodW5rVXJsLCBsYWJlbFNhdmVQYXRoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaFNhbXBsZUNodW5rKHNhdmVEaXIsIHNhbXBsZUNodW5rKXtcbiAgICAgICAgbGV0IHNhbXBsZUNodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBzYW1wbGVDaHVuaztcbiAgICAgICAgbGV0IHNhbW1wbGVTYXZlUGF0aCA9IHNhdmVEaXIgKyBzYW1wbGVDaHVuaztcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZUNodW5rVXJsLCBzYW1tcGxlU2F2ZVBhdGh9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaFBOR0ZpbGUoc2FtcGxlQ2h1bmtVcmwsIHNhbW1wbGVTYXZlUGF0aCk7XG4gICAgfVxuXG4gICAgc2VsZWN0Q2h1bmtzKG51bWNodW5rcywgc2VsZWN0Qnk9J3JhbmRvbScpe1xuICAgICAgICBsZXQgY2h1bmtJZHhzID0gU2FtcGxpbmcuY2hvaWNlKHRoaXMuY29uZmlndXJhdGlvbi5jaHVua0xpc3QsIG51bWNodW5rcyk7XG4gICAgICAgIHJldHVybiBjaHVua0lkeHMubWFwKChpZHgsIGl0aCk9PihbYGRhdGEtY2h1bmstJHtpZHh9LnBuZ2AsYGxhYmVsLWNodW5rLSR7aWR4fWBdKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hEYXRhc2V0KHNhdmVEaXI9Jy9tbmlzdC8nLG51bWNodW5rcz0xMCwgc2VsZWN0Qnk9J3JhbmRvbScpe1xuICAgICAgICBsZXQgc2VsZWN0ZWRDaHVua3MgPSB0aGlzLnNlbGVjdENodW5rcyhudW1jaHVua3MsIHNlbGVjdEJ5KTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rcyA9IFtdO1xuICAgICAgICBmb3IobGV0IFtzYW1wbGVDaHVuaywgbGFiZWxDaHVua10gb2Ygc2VsZWN0ZWRDaHVua3Mpe1xuICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggPSBhd2FpdCB0aGlzLmZldGNoU2FtcGxlQ2h1bmsoc2F2ZURpciwgc2FtcGxlQ2h1bmspO1xuICAgICAgICAgICAgbGV0IGxhYmVsUGF0aCA9IGF3YWl0IHRoaXMuZmV0Y2hMYWJlbENodW5rKHNhdmVEaXIsIGxhYmVsQ2h1bmspO1xuICAgICAgICAgICAgdGhpcy5zYXZlZENodW5rcy5wdXNoKFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Moe3NhdmVDaHVua3M6W3NhbXBsZVBhdGgsIGxhYmVsUGF0aF19KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuRi51bnppcCh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEYXRhc2V0ZmV0Y2hNaXhpbnM7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIE1OSVNUfSBmcm9tICcuL01OSVNULkltZ0RhdGFzZXQnOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9