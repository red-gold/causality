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
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"@causalNet/datasets": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = this["webpackJsonp_causalNet_datasets"] = this["webpackJsonp_causalNet_datasets"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../causality-log/dist/@causalNet/log.web.js":
/*!***************************************************!*\
  !*** ../causality-log/dist/@causalNet/log.web.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! cli-progress */ "../../node_modules/cli-progress/cli-progress.js"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9sb2dnZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3ByZXR0eUpzb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nZ2VyLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2dnZXIubWl4aW5zLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNsaS1wcm9ncmVzc1wiIl0sIm5hbWVzIjpbIkJhc2VMb2dnZXIiLCJjb25zdHJ1Y3RvciIsIkFjY2VwdGVkTGV2ZWxzIiwiZGVidWciLCJsb2ciLCJ3YXJuaW5nIiwiZXJyb3IiLCJyQWNjZXB0ZWRMZXZlbHMiLCJsZXZlbCIsIkxldmVsIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiY29ubmVjdCIsIm1lc3NhZ2UiLCJncm91cEJlZ2luIiwibmFtZSIsImdyb3VwRW5kIiwicHJvZ3Jlc3NCZWdpbiIsInJhbmdlIiwicHJvZ3Jlc3NVcGRhdGUiLCJwcm9ncmVzc0VuZCIsIkxvZ2dlck1peGlucyIsIkJhc2VkQ2xhc3MiLCJMb2dnZXIiLCJsb2dnZXIiLCJhc3NlcnQiLCJiZUluc3RhbmNlT2YiLCJKc29uVmlldyIsIkpTT05EaXNwbGF5IiwianNvbiIsIm9wZW5MZXZlbHNBcmciLCJzdHlsZU9wdGlvbnNBcmciLCJERUZBVUxUX1NUWUxFX09QVElPTlMiLCJyb290IiwidGFnIiwic3R5bGUiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlIiwidGl0bGVUZXh0Iiwib3BlbkJ1dHRvbiIsImNvbnRlbnRzQ29udGFpbmVyIiwia2V5VmFsdWVQYWlyIiwia2V5Iiwic3ltYm9sVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIm51bWJlclZhbHVlIiwiYm9vbGVhblZhbHVlIiwibnVsbFZhbHVlIiwib3BlbkxldmVscyIsImlzTmFOIiwicGFyc2VJbnQiLCJJbmZpbml0eSIsInN0eWxlT3B0aW9ucyIsIm1lcmdlU3R5bGVPcHRpb25zIiwiYXNzaWduIiwidGFyZ2V0IiwiVHlwZUVycm9yIiwidG8iLCJpbmRleCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm5leHRTb3VyY2UiLCJuZXh0S2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicmVuZGVyIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNzc1RleHQiLCJ2b2lkRWxlbWVudCIsImdldFZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJEYXRlIiwiZGF0ZUVsZW1lbnQiLCJ0b0lTT1N0cmluZyIsIm5vbkV4cGFuZGFibGVFbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwidGhpc0xldmVsSXNDbG9zZWQiLCJnZXRUaXRsZSIsImNvbnZlcnRKc29uVG9FbGVtZW50cyIsIm5leHRMZXZlbElzQ2xvc2VkIiwiY29udGFpbmVyIiwiZ2V0Q29udGVudHNDb250YWluZXIiLCJnZXRTdGFuZGFyZFBhaXIiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmb3JFYWNoIiwic3ltYm9sIiwidG9TdHJpbmciLCJvcHRpb25hbEtleSIsImxldmVsSXNDbG9zZWQiLCJjdXJyZW50bHlDbG9zZWQiLCJjb250YWluZXJFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGV4dEVsZW1lbnQiLCJ0aXRsZUVsZW1lbnQiLCJnZXRPcGVuQnV0dG9uIiwiZ2V0S2V5IiwiY3JlYXRlVGV4dE5vZGUiLCJvbmNsaWNrIiwiZmlyc3RDaGlsZCIsIm9iamVjdENvbnRlbnRzIiwicGFyZW50Tm9kZSIsIm5leHRTaWJsaW5nIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsImJ1dHRvbkVsZW1lbnQiLCJpc0Nsb3NlZCIsInZhbHVlIiwicGFpckVsZW1lbnQiLCJrZXlFbGVtZW50IiwidmFsdWVFbGVtZW50IiwibnVsbFR5cGUiLCJkZWZhdWx0cyIsIm92ZXJyaWRlcyIsIm1lcmdlZCIsIlRlcm1Mb2dnZXIiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJub2RlIiwiTG9nTm9kZU1peGlucyIsIndlYiIsIkxvZ1dlYk1peGlucyIsImdyb3VwU3RhY2siLCJncm91cCIsImJlZ2luVGltZSIsInB1c2giLCJpbmRlbnRTcGFjZSIsInBvcCIsIkxvZ0NsYXNzIiwiY2hhbm5lbCIsImN1cnJlbnRCYXIiLCJjb25zb2xlIiwicHJvY2Vzc0NvdW50ZXIiLCJjbGlQcm9ncmVzcyIsInNoYWRlc19jbGFzc2ljIiwic2V0VG90YWwiLCJwcm9ncmVzc01lc3NhZ2UiLCJ1cGRhdGUiLCJzdG9wIiwiZG9jdW1lbnRFbCIsImJvZHkiLCJmcmFtZUVsIiwibG9nZ2VyRWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNjcm9sbEJvdHRvbSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInByb2dyZXNzIiwicHJvY2Vzc01lc3NhZ2UiLCJMSU5vZGVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJqc29uTm9kZSIsImRhdGUiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztB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ZStHLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBLDhEOzs7Ozs7Ozs7OztBQ0FBLDBEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbG9nLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJjbGktcHJvZ3Jlc3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC51dGlsc1wiLCBcImNsaS1wcm9ncmVzc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJjbGktcHJvZ3Jlc3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgcm9vdFtcImNsaS1wcm9ncmVzc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jbGlfcHJvZ3Jlc3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlZCB0aGUgXG4gKiBAY2xhc3MgQmFzZUxvZ1xuICovXG5jbGFzcyBCYXNlTG9nZ2Vye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuQWNjZXB0ZWRMZXZlbHMgPSB7ZGVidWc6IDAsIGxvZzoxLCB3YXJuaW5nOjIsIGVycm9yOiAzfTtcbiAgICAgICAgdGhpcy5yQWNjZXB0ZWRMZXZlbHMgPSB7MDonZGVidWcnLCAxOiAnbG9nJywgMjogJ3dhcm5pbmcnLCAzOiAnZXJyb3InfTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ107XG4gICAgfVxuICAgIHNldCBMZXZlbChsZXZlbCl7XG4gICAgICAgIGlmKHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke2xldmVsfSBtdXN0IGJlIG9uZSBvZiAke09iamVjdC5rZXlzKHRoaXMuQWNjZXB0ZWRMZXZlbHMpfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBMZXZlbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yQWNjZXB0ZWRMZXZlbHNbdGhpcy5sZXZlbF07XG4gICAgfVxuXG4gICAgY29ubmVjdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbG9nKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIFxuICAgIGVycm9yKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgZGVidWcobWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBncm91cEJlZ2luKG5hbWUpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgZ3JvdXBFbmQoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIHByb2dyZXNzQmVnaW4ocmFuZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3NVcGRhdGUobWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBwcm9ncmVzc0VuZChtZXNzYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxvZ2dlcjsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIHRlcm1Mb2dnZXIgfSBmcm9tICcuL3Rlcm1Mb2dnZXInO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ2dlck1peGlucyB9IGZyb20gJy4vbG9nZ2VyLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2VMb2dnZXIgfSBmcm9tICcuL2Jhc2VMb2dnZXInO1xuXG4iLCJpbXBvcnQge2RlZmF1bHQgYXMgQmFzZUxvZ2dlciB9IGZyb20gJy4vYmFzZUxvZ2dlcic7XG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IExvZ2dlck1peGlucyA9IChCYXNlZENsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZWRDbGFzc3tcbiAgICBcbiAgICBzZXQgTG9nZ2VyKGxvZ2dlcil7XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YobG9nZ2VyLCBCYXNlTG9nZ2VyKTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBMb2dnZXIoKXtcbiAgICAgICAgaWYoIXRoaXMubG9nZ2VyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdsb2dnZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlcjtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dnZXJNaXhpbnM7IiwiLy8gb3JpZ2luIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbHVjeWdpbGJlcnQvanNvbi1kaXNwbGF5L2Jsb2IvbWFzdGVyL2pzb24tZGlzcGxheS5qc1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IEx1Y3kgR2lsYmVydFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblZpZXd7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgc3RhdGljIEpTT05EaXNwbGF5KGpzb24sIG9wZW5MZXZlbHNBcmcsIHN0eWxlT3B0aW9uc0FyZykge1xuICAgICAgICB2YXIgREVGQVVMVF9TVFlMRV9PUFRJT05TID0ge1xuICAgICAgICAgIHJvb3Q6IHsgdGFnOiAncHJlJywgc3R5bGU6ICdwYWRkaW5nOiA1cHg7IGZvbnQtc2l6ZTogMXJlbTsnIH0sXG4gICAgICAgICAgdGl0bGVDb250YWluZXI6IHsgdGFnOiAnZGl2Jywgc3R5bGU6ICdtYXJnaW4tYm90dG9tOiAzcHg7JyB9LFxuICAgICAgICAgIHRpdGxlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcjsnIH0sXG4gICAgICAgICAgdGl0bGVUZXh0OiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJycgfSxcbiAgICAgICAgICBvcGVuQnV0dG9uOiB7IFxuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luOiAwcHggN3B4IDBweCAycHg7IGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgJ1xuICAgICAgICAgICAgICAgICArICdib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnRzQ29udGFpbmVyOiB7IHRhZzogJ2RpdicsIHN0eWxlOiAncGFkZGluZy1sZWZ0OiAxOHB4OycgfSxcbiAgICAgICAgICBrZXlWYWx1ZVBhaXI6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDJweDsnIH0sXG4gICAgICAgICAga2V5OiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBkYXJrYmx1ZTsnIH0sXG4gICAgICAgICAgc3ltYm9sVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGRhcmtncmVlbjsnIH0sXG4gICAgICAgICAgc3RyaW5nVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGNyaW1zb247JyB9LFxuICAgICAgICAgIG51bWJlclZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgICBib29sZWFuVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICAgIG51bGxWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcGVuTGV2ZWxzID0gaXNOYU4ocGFyc2VJbnQob3BlbkxldmVsc0FyZykpID8gSW5maW5pdHkgOiBwYXJzZUludChvcGVuTGV2ZWxzQXJnKTtcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHR5cGVvZiBzdHlsZU9wdGlvbnNBcmcgPT09ICdvYmplY3QnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXJnZVN0eWxlT3B0aW9ucyhERUZBVUxUX1NUWUxFX09QVElPTlMsIHN0eWxlT3B0aW9uc0FyZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogREVGQVVMVF9TVFlMRV9PUFRJT05TO1xuICAgIFxuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAgIFxuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRTb3VyY2UsIG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnJvb3QudGFnKTtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMucm9vdC5zdHlsZTtcbiAgICBcbiAgICAgICAgICBpZiAoanNvbiA9PT0gbnVsbCB8fCBqc29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciB2b2lkRWxlbWVudCA9IGdldFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh2b2lkRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgdmFyIGRhdGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbi50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb24gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YXIgbm9uRXhwYW5kYWJsZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9uRXhwYW5kYWJsZUVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBBcnJheS5pc0FycmF5KGpzb24pID8gJ0FycmF5WycgKyBqc29uLmxlbmd0aCArICddJyA6ICdPYmplY3QnO1xuICAgICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gb3BlbkxldmVscyA8IDE7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGdldFRpdGxlKHRpdGxlLCBudWxsLCB0aGlzTGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgMSkpO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBpbmRleCA+IG9wZW5MZXZlbHM7XG4gICAgICAgICAgdmFyIG5leHRMZXZlbElzQ2xvc2VkID0gaW5kZXggKyAxID4gb3BlbkxldmVscztcbiAgICAgICAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGVudHNDb250YWluZXIodGhpc0xldmVsSXNDbG9zZWQpO1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uW2tleV0pKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnQXJyYXlbJyArIGpzb25ba2V5XS5sZW5ndGggKyAnXScsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gPT09IG51bGwgfHwganNvbltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIG51bGwpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoanNvbltrZXldIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldLnRvSVNPU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdPYmplY3QnLCBrZXksIG5leHRMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGpzb24pLmZvckVhY2goZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoc3ltYm9sLnRvU3RyaW5nKCksIGpzb25bc3ltYm9sXSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0VGl0bGUodGl0bGVUZXh0LCBvcHRpb25hbEtleSwgbGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBjdXJyZW50bHlDbG9zZWQgPSBsZXZlbElzQ2xvc2VkO1xuICAgICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIudGFnKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIuc3R5bGU7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICd0aXRsZUNvbnRhaW5lcicpO1xuICAgICAgICAgIHZhciB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlVGV4dC50YWcpO1xuICAgICAgICAgIHZhciB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZS50YWcpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlLnN0eWxlO1xuICAgICAgICAgIHRleHRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnN0eWxlO1xuICAgIFxuICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZChnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICBpZiAob3B0aW9uYWxLZXkpIHtcbiAgICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGdldEtleShvcHRpb25hbEtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZVRleHQpKTtcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuICAgIFxuICAgICAgICAgIHRpdGxlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wZW5CdXR0b24gPSB0aXRsZUVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBvYmplY3RDb250ZW50cyA9IHRpdGxlRWxlbWVudC5wYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgb2JqZWN0Q29udGVudHMuc3R5bGUuZGlzcGxheSA9IGN1cnJlbnRseUNsb3NlZCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgICBvcGVuQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRseUNsb3NlZCA/ICdyb3RhdGUoOTBkZWcpJyA6ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICAgICAgY3VycmVudGx5Q2xvc2VkID0gIWN1cnJlbnRseUNsb3NlZDtcbiAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm9wZW5CdXR0b24udGFnKTtcbiAgICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi5zdHlsZTtcbiAgICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGxldmVsSXNDbG9zZWQgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRDb250ZW50c0NvbnRhaW5lcihpc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIudGFnKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ2NvbnRlbnRzQ29udGFpbmVyJyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnN0eWxlO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IChpc0Nsb3NlZCA/ICdub25lJyA6ICdibG9jaycpO1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YW5kYXJkUGFpcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHBhaXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnRhZyk7XG4gICAgICAgICAgcGFpckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIuc3R5bGU7XG4gICAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KGtleSkpO1xuICAgICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldFZhbHVlKHZhbHVlKSk7XG4gICAgICAgICAgcmV0dXJuIHBhaXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldEtleShuYW1lKSB7XG4gICAgICAgICAgdmFyIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXkudGFnKTtcbiAgICAgICAgICBrZXlFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5LnN0eWxlO1xuICAgICAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSArICc6ICcpKTtcbiAgICAgICAgICByZXR1cm4ga2V5RWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgIHZhciB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgICAgdmFyIG51bGxUeXBlID0gJ29iamVjdCc7XG4gICAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1wiJyArIHZhbHVlICsgJ1wiJykpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBudWxsVHlwZTpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bGxWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmFsdWVFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIG1lcmdlU3R5bGVPcHRpb25zKGRlZmF1bHRzLCBvdmVycmlkZXMpIHtcbiAgICAgICAgICB2YXIgbWVyZ2VkID0ge307XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBtZXJnZWRba2V5XSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzW2tleV0sIG92ZXJyaWRlc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gcmVuZGVyKCk7XG4gICAgfVxufSIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZUxvZ2dlciB9IGZyb20gJy4vYmFzZUxvZ2dlcic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIExvZ05vZGVNaXhpbnMgfSBmcm9tICcuL3Rlcm1Mb2dnZXIubWl4aW5zLm5vZGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBMb2dXZWJNaXhpbnMgfSBmcm9tICcuL3Rlcm1Mb2dnZXIubWl4aW5zLndlYic7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIFRlcm1Mb2dnZXIgcHJvdmlkZSBpc29tb3JwaGljIGxvZ2dlclxuICogeyBtaXhXaXRoIDogeyAnbm9kZSc6IFtMb2dOb2RlTWl4aW5zXSwgJ3dlYic6IFtXZWJOb2RlTWl4aW5zXSB9IH1cbiAqIEBjbGFzcyBUZXJtTG9nZ2VyXG4gKiBAZXh0ZW5kcyBCYXNlTG9nZ2VyXG4gKi9cbmNsYXNzIFRlcm1Mb2dnZXIgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VMb2dnZXIsIFxuICAgICAgICB7IG5vZGU6W0xvZ05vZGVNaXhpbnNdLCBcbiAgICAgICAgICB3ZWI6W0xvZ1dlYk1peGluc10gfSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZ3JvdXBTdGFjayA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBncm91cEJlZ2luKG5hbWUpeyAgIFxuICAgICAgICBsZXQgZ3JvdXAgPSB7bmFtZSwgYmVnaW5UaW1lOiBuZXcgRGF0ZSgpfTtcbiAgICAgICAgdGhpcy5ncm91cFN0YWNrLnB1c2goZ3JvdXApO1xuICAgICAgICBsZXQgaW5kZW50U3BhY2UgPSAnJztcbiAgICAgICAgdGhpcy5sb2coYCR7aW5kZW50U3BhY2V9JHtncm91cC5uYW1lfTogYmVnaW4gYXQgJHtncm91cC5iZWdpblRpbWV9YCk7XG4gICAgfVxuICAgIGdyb3VwRW5kKCl7XG4gICAgICAgIGlmKHRoaXMuZ3JvdXBTdGFjay5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBTdGFjay5wb3AoKTtcbiAgICAgICAgICAgIGxldCBpbmRlbnRTcGFjZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5sb2coYCR7aW5kZW50U3BhY2V9JHtncm91cC5uYW1lfTogZW5kIGFmdGVyICR7KG5ldyBEYXRlKCkgLSBncm91cC5iZWdpblRpbWUpfSAobXMpYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgVGVybUxvZ2dlcigpOyIsImltcG9ydCAqIGFzIGNsaVByb2dyZXNzIGZyb20gJ2NsaS1wcm9ncmVzcyc7XG5cbmNvbnN0IExvZ05vZGVNaXhpbnMgPSAoTG9nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzc3tcbiAgICBjb25uZWN0KGNoYW5uZWwpe1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9nKG1lc3NhZ2Upe1xuICAgICAgICAvL1RPRE86IG1ha2UgZGVjb3JhdG9yIFxuICAgICAgICB0aGlzLmN1cnJlbnRCYXIgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3NCZWdpbihyYW5nZSl7XG4gICAgICAgIHRoaXMucHJvY2Vzc0NvdW50ZXIgKz0gMTtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyID0gbmV3IGNsaVByb2dyZXNzLkJhcih7fSwgY2xpUHJvZ3Jlc3MuUHJlc2V0cy5zaGFkZXNfY2xhc3NpYyk7XG4gICAgICAgIHRoaXMuY3VycmVudEJhci5zZXRUb3RhbChyYW5nZSk7XG4gICAgfVxuICAgIHByb2dyZXNzVXBkYXRlKHByb2dyZXNzTWVzc2FnZSl7XG4gICAgICAgIGlmKCF0aGlzLmN1cnJlbnRCYXIpe1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JlZ2luKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9jZXNzQ291bnRlciArPSAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIudXBkYXRlKHRoaXMucHJvY2Vzc0NvdW50ZXIpO1xuICAgIH1cbiAgICBwcm9ncmVzc0VuZCgpe1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIuc3RvcCgpO1xuICAgICAgICB0aGlzLnByb2Nlc3NDb3VudGVyID0gMDtcbiAgICB9XG4gICAgZGVidWcobWVzc2FnZSl7XG4gICAgICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlOyBcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nTm9kZU1peGluczsiLCJpbXBvcnQge2RlZmF1bHQgYXMgSnNvblZpZXd9IGZyb20gJy4vcHJldHR5SnNvbic7XG5jb25zdCBMb2dXZWJNaXhpbnMgPSAoTG9nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzc3tcbiAgICBjb25uZWN0KGRvY3VtZW50RWw9bnVsbCl7XG4gICAgICAgIGRvY3VtZW50RWwgPSBkb2N1bWVudEVsfHxkb2N1bWVudC5ib2R5O1xuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gXCJsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XCI7XG4gICAgICAgIGRvY3VtZW50RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbCA9IGRvY3VtZW50RWw7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwgPSBkb2N1bWVudEVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIilbMF07XG4gICAgfVxuICAgIHNjcm9sbEJvdHRvbShlbGVtZW50PW51bGwpe1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLmZyYW1lRWw7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9XG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2Upe1xuICAgICAgICAvLyBsZXQgbm9kZSA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaTpudGgtbGFzdC1vZi10eXBlKDEpXCIpO1xuICAgICAgICBsZXQgTElOb2RlcyA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKTtcbiAgICAgICAgbGV0IG5vZGUgPSBMSU5vZGVzW0xJTm9kZXMubGVuZ3RoLTFdO1xuICAgICAgICBpZighbm9kZSB8fCBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlci1wcm9ncmVzc1wiKSl7XG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgZWxcbiAgICAgICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJsb2dnZXItcHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBqc29uTm9kZSA9IEpzb25WaWV3LkpTT05EaXNwbGF5KHByb2Nlc3NNZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5sb2dnZXJFbCB8fCAhdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZCl7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gJ2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlOyc7ICAgICAgIFxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShtZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy9ubyBzaG93IG9uIHdlYiBzY3JlZW47ICAgICAgICBcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dXZWJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpX3Byb2dyZXNzX187Il0sInNvdXJjZVJvb3QiOiIifQ==

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
!(function webpackMissingModule() { var e = new Error("Cannot find module './imageDatasetfetch.mixins'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _imageDatasetPreprocessing_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imageDatasetPreprocessing.mixins */ "./src/imageDatasetPreprocessing.mixins.js");
/* harmony import */ var _imageDatasetGenerator_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imageDatasetGenerator.mixins */ "./src/imageDatasetGenerator.mixins.js");
/* harmony import */ var causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! causal-net.preprocessing */ "causal-net.preprocessing");
/* harmony import */ var causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__);










class MnistDataset extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(_baseImgDataset__WEBPACK_IMPORTED_MODULE_0__["default"], [!(function webpackMissingModule() { var e = new Error("Cannot find module './imageDatasetfetch.mixins'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _imageDatasetPreprocessing_mixins__WEBPACK_IMPORTED_MODULE_7__["default"], causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__["PreprocessingMixins"], _imageDatasetGenerator_mixins__WEBPACK_IMPORTED_MODULE_8__["default"], causal_net_memcache__WEBPACK_IMPORTED_MODULE_4__["MemCacheMixins"], causal_net_storage__WEBPACK_IMPORTED_MODULE_3__["StorageMixins"], causal_net_log__WEBPACK_IMPORTED_MODULE_2__["LoggerMixins"]]) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi4vY2F1c2FsaXR5LWxvZy9kaXN0L0BjYXVzYWxOZXQvbG9nLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL01OSVNULkltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9iYXNlSW1nRGF0YXNldC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvZnVuY3Rpb24ubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvaW1hZ2VEYXRhc2V0R2VuZXJhdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2ltYWdlRGF0YXNldFByZXByb2Nlc3NpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIk1uaXN0RGF0YXNldCIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VJbWdEYXRhc2V0IiwiSW1hZ2VEYXRhc2V0ZmV0Y2hNaXhpbnMiLCJJbWFnZURhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ01peGlucyIsIkltYWdlRGF0YXNldEdlbmVyYXRvck1peGlucyIsIk1lbUNhY2hlTWl4aW5zIiwiU3RvcmFnZU1peGlucyIsIkxvZ2dlck1peGlucyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIkYiLCJGdW5jdGlvbiIsIlN0b3JhZ2UiLCJpbmRleERCU3RvcmFnZSIsIk1lbUNhY2hlIiwibWVtRG93bkNhY2hlIiwiUHJlcHJvY2Vzc2luZ1NhbXBsZSIsIm1hc3RlclNhbXBsZUJ1ZmZlciIsInNhbXBsZVNpemUiLCJpbWFnZVByZXByb2Nlc3NpbmciLCJpbWFnZVNwbGl0IiwiUHJlcHJvY2Vzc2luZ0xhYmVsIiwibWFzdGVyTGFiZWxCdWZmZXIiLCJsYWJlbFNpemUiLCJzZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zIiwiZGF0YXNldENvbmZpZ3VyZSIsImNvbmZpZ3VyYXRpb24iLCJudW1TYW1wbGVzIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwibnVtQ2xhc3MiLCJzdW1tYXJ5IiwiQmFzZUZ1bmN0aW9uIiwiRnVuY3Rpb25NaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImdldEltZ0J1ZmZlclNpemUiLCJpbWdTaXplIiwiUiIsInJlZHVjZSIsInMiLCJkIiwiZ2VuZXJhdG9yV2l0aEluZGV4IiwiaXRlbXMiLCJhZGRJbmRleCIsIm1hcCIsImlkeCIsInNwbGl0VHJhaW5UZXN0U2V0Iiwic3BsaXRJbmRleCIsInNwbGl0QXQiLCJCYXNlSW1hZ2VDbGFzcyIsImdldFRyYWluVGVzdFNldCIsInRyYWluU2l6ZSIsInBhcnNlSW50Iiwic2F2ZWRQcmVwcm9jZXNzaW5nIiwibGVuZ3RoIiwidHJhaW5TZXQiLCJ0ZXN0U2V0IiwibWFrZVNhbXBsZUdlbmVyYXRvciIsInNhbXBsZUlkeFNldCIsImJhdGNoU2l6ZSIsInN0YXJ0IiwiZW5kIiwiRXJyb3IiLCJfYmF0Y2hlcyIsImhzcGxpdEV2ZXJ5IiwiYmF0Y2hlcyIsIlNhbXBsaW5nIiwiY2hvaWNlIiwibmV4dEluZGV4IiwiaXRlcmF0aW9uQ291bnQiLCJzdGVwIiwiYmF0Y2hHZW5lcmF0b3IiLCJuZXh0IiwiYmF0Y2hTYW1wbGVzIiwiYmF0Y2hMYWJlbHMiLCJzYW1wbGVQYXRoIiwibGFiZWxQYXRoIiwic2FtcGxlSXRlbSIsInByZVByb2Nlc3NpbmdTdG9yYWdlIiwiZ2V0SXRlbSIsImxhYmVsSXRlbSIsImRhdGEiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtIiwic2F2ZURpciIsIkltYWdlQnVmZmVyU2l6ZSIsIkxhYmVsQnVmZmVyU2l6ZSIsImxvZ2dlciIsImRlYnVnIiwiaW1hZ2VCdWZmZXJTaXplIiwibGFiZWxCdWZmZXJTaXplIiwiVHJhbnNmb3JtRm4iLCJjaHVuayIsImNodW5rRW5jb2RpbmciLCJhZnRlclRyYW5zZm9ybUZuIiwiVHJhbnNmb3JtQXN5bmMiLCJzYW1wbGVCdWZmZXIiLCJzYW1wbGUiLCJsYWJlbEJ1ZmZlciIsImxhYmVsIiwicHJlcHJvY2Vzc2VkSW1nQnVmZmVyIiwiUHJlcHJvY2Vzc2luZ1NhbXBsZUZuIiwicHJlcHJvY2Vzc2VkTGFiZWxCdWZmZXIiLCJQcmVwcm9jZXNzaW5nTGFiZWxGbiIsInByb2Nlc3NlZENodW5rIiwiemlwIiwiY2h1bmtJZHgiLCJ0aGVuIiwiV3JpdGVGbiIsImNhbGxiYWNrIiwiV3JpdGVBc3luYyIsImdlbmVyYXRvciIsImNodW5rU2FtcGxlUGF0aCIsInNldEl0ZW0iLCJjaHVua0xhYmVsUGF0aCIsInByb2dyZXNzIiwicHJlcHJvY2Vzc2luZyIsInJlc3VsdCIsImR1cGxleGVyIiwiU3RyZWFtIiwibWFrZUR1cGxleCIsInRyYW5zZm9ybWVyIiwibWFrZVRyYW5zZm9ybSIsInN0cmVhbSIsInBpcGUiLCJwcmVwcm9jZXNzaW5nRGF0YXNldCIsInN0b3JlSW5NZW1vcnkiLCJtZW1DYWNoZSIsInN0b3JhZ2UiLCJzYXZlZENodW5rcyIsInB1c2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQSxJQUFJLFlBQVksa0RBQWtEO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWSxFQUFFLFdBQVcsYUFBYSxnQkFBZ0I7QUFDdEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWSxFQUFFLFdBQVcsY0FBYyw2QkFBNkI7QUFDdEY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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cEIsU0FBUyxDQUFDSixTQUFELENBQXJCO0FBQ0EsV0FBS1ksTUFBTCxDQUFZQyxLQUFaLENBQWtCO0FBQUNTLGNBQUQ7QUFBU0U7QUFBVCxPQUFsQjtBQUNBd0IsWUFBTSxDQUFDTyxJQUFQLENBQVk7QUFBQ3RGLFdBQUQ7QUFBTXFELGNBQU47QUFBY0U7QUFBZCxPQUFaO0FBQ0g7O0FBQ0R3QixVQUFNLENBQUNPLElBQVAsQ0FBWSxJQUFaO0FBQ0EsV0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQW1CO0FBQ2xDVixZQUFNLENBQUNXLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLE1BQUk7QUFDcEJGLGVBQU8sQ0FBQyxLQUFLaEYsa0JBQU4sQ0FBUDtBQUNILE9BRkQ7QUFHSCxLQUpNLENBQVA7QUFLSDs7QUF6RWtGLENBQXZGOztBQTJFZW5ELDhGQUFmLEU7Ozs7Ozs7Ozs7OztBQzVFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kYXRhc2V0cy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCJdLCByb290W1wiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIkBjYXVzYWxOZXQvZGF0YXNldHNcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHRoaXNbXCJ3ZWJwYWNrSnNvbnBfY2F1c2FsTmV0X2RhdGFzZXRzXCJdID0gdGhpc1tcIndlYnBhY2tKc29ucF9jYXVzYWxOZXRfZGF0YXNldHNcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXguanNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwiY2xpLXByb2dyZXNzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQudXRpbHNcIiwgXCJjbGktcHJvZ3Jlc3NcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwiY2xpLXByb2dyZXNzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIHJvb3RbXCJjbGktcHJvZ3Jlc3NcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpX3Byb2dyZXNzX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL2Jhc2VMb2dnZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9iYXNlTG9nZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlZCB0aGUgXG4gKiBAY2xhc3MgQmFzZUxvZ1xuICovXG5jbGFzcyBCYXNlTG9nZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5BY2NlcHRlZExldmVscyA9IHtcbiAgICAgIGRlYnVnOiAwLFxuICAgICAgbG9nOiAxLFxuICAgICAgd2FybmluZzogMixcbiAgICAgIGVycm9yOiAzXG4gICAgfTtcbiAgICB0aGlzLnJBY2NlcHRlZExldmVscyA9IHtcbiAgICAgIDA6ICdkZWJ1ZycsXG4gICAgICAxOiAnbG9nJyxcbiAgICAgIDI6ICd3YXJuaW5nJyxcbiAgICAgIDM6ICdlcnJvcidcbiAgICB9O1xuICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddO1xuICB9XG5cbiAgc2V0IExldmVsKGxldmVsKSB7XG4gICAgaWYgKHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoYCR7bGV2ZWx9IG11c3QgYmUgb25lIG9mICR7T2JqZWN0LmtleXModGhpcy5BY2NlcHRlZExldmVscyl9YCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IExldmVsKCkge1xuICAgIHJldHVybiB0aGlzLnJBY2NlcHRlZExldmVsc1t0aGlzLmxldmVsXTtcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgbG9nKG1lc3NhZ2UpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGdyb3VwQmVnaW4obmFtZSkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGdyb3VwRW5kKCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIHByb2dyZXNzQmVnaW4ocmFuZ2UpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBwcm9ncmVzc1VwZGF0ZShtZXNzYWdlKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgcHJvZ3Jlc3NFbmQobWVzc2FnZSkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoQmFzZUxvZ2dlcik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IHRlcm1Mb2dnZXIsIExvZ2dlck1peGlucywgQmFzZUxvZ2dlciAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdGVybUxvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXJtTG9nZ2VyICovIFwiLi9zcmMvdGVybUxvZ2dlci5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInRlcm1Mb2dnZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfdGVybUxvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbG9nZ2VyX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9sb2dnZXIubWl4aW5zICovIFwiLi9zcmMvbG9nZ2VyLm1peGlucy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkxvZ2dlck1peGluc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9sb2dnZXJfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9iYXNlTG9nZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VMb2dnZXIgKi8gXCIuL3NyYy9iYXNlTG9nZ2VyLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQmFzZUxvZ2dlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9iYXNlTG9nZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9sb2dnZXIubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbG9nZ2VyLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Jhc2VMb2dnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYmFzZUxvZ2dlciAqLyBcIi4vc3JjL2Jhc2VMb2dnZXIuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC51dGlscyAqLyBcImNhdXNhbC1uZXQudXRpbHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG5cblxuXG5jb25zdCBMb2dnZXJNaXhpbnMgPSBCYXNlZENsYXNzID0+IGNsYXNzIGV4dGVuZHMgQmFzZWRDbGFzcyB7XG4gIHNldCBMb2dnZXIobG9nZ2VyKSB7XG4gICAgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiYXNzZXJ0XCJdLmJlSW5zdGFuY2VPZihsb2dnZXIsIF9iYXNlTG9nZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKTtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgfVxuXG4gIGdldCBMb2dnZXIoKSB7XG4gICAgaWYgKCF0aGlzLmxvZ2dlcikge1xuICAgICAgdGhyb3cgRXJyb3IoJ2xvZ2dlciBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9nZ2VyO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoTG9nZ2VyTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcHJldHR5SnNvbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3ByZXR0eUpzb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBKc29uVmlldzsgfSk7XG4vLyBvcmlnaW4gY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWN5Z2lsYmVydC9qc29uLWRpc3BsYXkvYmxvYi9tYXN0ZXIvanNvbi1kaXNwbGF5LmpzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgTHVjeSBHaWxiZXJ0XG5jbGFzcyBKc29uVmlldyB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGF0aWMgSlNPTkRpc3BsYXkoanNvbiwgb3BlbkxldmVsc0FyZywgc3R5bGVPcHRpb25zQXJnKSB7XG4gICAgdmFyIERFRkFVTFRfU1RZTEVfT1BUSU9OUyA9IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgdGFnOiAncHJlJyxcbiAgICAgICAgc3R5bGU6ICdwYWRkaW5nOiA1cHg7IGZvbnQtc2l6ZTogMXJlbTsnXG4gICAgICB9LFxuICAgICAgdGl0bGVDb250YWluZXI6IHtcbiAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgc3R5bGU6ICdtYXJnaW4tYm90dG9tOiAzcHg7J1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcjsnXG4gICAgICB9LFxuICAgICAgdGl0bGVUZXh0OiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJydcbiAgICAgIH0sXG4gICAgICBvcGVuQnV0dG9uOiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luOiAwcHggN3B4IDBweCAycHg7IGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgJyArICdib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7J1xuICAgICAgfSxcbiAgICAgIGNvbnRlbnRzQ29udGFpbmVyOiB7XG4gICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIHN0eWxlOiAncGFkZGluZy1sZWZ0OiAxOHB4OydcbiAgICAgIH0sXG4gICAgICBrZXlWYWx1ZVBhaXI6IHtcbiAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDJweDsnXG4gICAgICB9LFxuICAgICAga2V5OiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2NvbG9yOiBkYXJrYmx1ZTsnXG4gICAgICB9LFxuICAgICAgc3ltYm9sVmFsdWU6IHtcbiAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgIHN0eWxlOiAnY29sb3I6IGRhcmtncmVlbjsnXG4gICAgICB9LFxuICAgICAgc3RyaW5nVmFsdWU6IHtcbiAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgIHN0eWxlOiAnY29sb3I6IGNyaW1zb247J1xuICAgICAgfSxcbiAgICAgIG51bWJlclZhbHVlOiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2NvbG9yOiBibHVlOydcbiAgICAgIH0sXG4gICAgICBib29sZWFuVmFsdWU6IHtcbiAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgIHN0eWxlOiAnY29sb3I6IGJsdWU7J1xuICAgICAgfSxcbiAgICAgIG51bGxWYWx1ZToge1xuICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgc3R5bGU6ICdjb2xvcjogYmx1ZTsnXG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgb3BlbkxldmVscyA9IGlzTmFOKHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpKSA/IEluZmluaXR5IDogcGFyc2VJbnQob3BlbkxldmVsc0FyZyk7XG4gICAgdmFyIHN0eWxlT3B0aW9ucyA9IHR5cGVvZiBzdHlsZU9wdGlvbnNBcmcgPT09ICdvYmplY3QnID8gbWVyZ2VTdHlsZU9wdGlvbnMoREVGQVVMVF9TVFlMRV9PUFRJT05TLCBzdHlsZU9wdGlvbnNBcmcpIDogREVGQVVMVF9TVFlMRV9PUFRJT05TO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0bztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5yb290LnRhZyk7XG4gICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMucm9vdC5zdHlsZTtcblxuICAgICAgaWYgKGpzb24gPT09IG51bGwgfHwganNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciB2b2lkRWxlbWVudCA9IGdldFZhbHVlKG51bGwpO1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZvaWRFbGVtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoanNvbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgdmFyIGRhdGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbi50b0lTT1N0cmluZygpKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB2YXIgbm9uRXhwYW5kYWJsZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub25FeHBhbmRhYmxlRWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdGl0bGUgPSBBcnJheS5pc0FycmF5KGpzb24pID8gJ0FycmF5WycgKyBqc29uLmxlbmd0aCArICddJyA6ICdPYmplY3QnO1xuICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBvcGVuTGV2ZWxzIDwgMTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChnZXRUaXRsZSh0aXRsZSwgbnVsbCwgdGhpc0xldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgMSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgaW5kZXgpIHtcbiAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgIHZhciBuZXh0TGV2ZWxJc0Nsb3NlZCA9IGluZGV4ICsgMSA+IG9wZW5MZXZlbHM7XG4gICAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGVudHNDb250YWluZXIodGhpc0xldmVsSXNDbG9zZWQpO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uW2tleV0pKSB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdBcnJheVsnICsganNvbltrZXldLmxlbmd0aCArICddJywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gPT09IG51bGwgfHwganNvbltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwgbnVsbCkpO1xuICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldLnRvSVNPU3RyaW5nKCkpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbltrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnT2JqZWN0Jywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoanNvbikuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihzeW1ib2wudG9TdHJpbmcoKSwganNvbltzeW1ib2xdKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRpdGxlKHRpdGxlVGV4dCwgb3B0aW9uYWxLZXksIGxldmVsSXNDbG9zZWQpIHtcbiAgICAgIHZhciBjdXJyZW50bHlDbG9zZWQgPSBsZXZlbElzQ2xvc2VkO1xuICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnN0eWxlO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICd0aXRsZUNvbnRhaW5lcicpO1xuICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICB2YXIgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGUudGFnKTtcbiAgICAgIHRpdGxlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlLnN0eWxlO1xuICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSk7XG5cbiAgICAgIGlmIChvcHRpb25hbEtleSkge1xuICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkob3B0aW9uYWxLZXkpKTtcbiAgICAgIH1cblxuICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGVUZXh0KSk7XG4gICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuXG4gICAgICB0aXRsZUVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZW5CdXR0b24gPSB0aXRsZUVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgIG9iamVjdENvbnRlbnRzLnN0eWxlLmRpc3BsYXkgPSBjdXJyZW50bHlDbG9zZWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICBvcGVuQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRseUNsb3NlZCA/ICdyb3RhdGUoOTBkZWcpJyA6ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgfTtcblxuICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSB7XG4gICAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm9wZW5CdXR0b24udGFnKTtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnN0eWxlO1xuICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBsZXZlbElzQ2xvc2VkID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDkwZGVnKSc7XG4gICAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50c0NvbnRhaW5lcihpc0Nsb3NlZCkge1xuICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICdjb250ZW50c0NvbnRhaW5lcicpO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnN0eWxlO1xuICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNDbG9zZWQgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBwYWlyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci50YWcpO1xuICAgICAgcGFpckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIuc3R5bGU7XG4gICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRWYWx1ZSh2YWx1ZSkpO1xuICAgICAgcmV0dXJuIHBhaXJFbGVtZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEtleShuYW1lKSB7XG4gICAgICB2YXIga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleS50YWcpO1xuICAgICAga2V5RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleS5zdHlsZTtcbiAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSArICc6ICcpKTtcbiAgICAgIHJldHVybiBrZXlFbGVtZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlKSB7XG4gICAgICB2YXIgdmFsdWVFbGVtZW50O1xuICAgICAgdmFyIG51bGxUeXBlID0gJ29iamVjdCc7XG5cbiAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS5zdHlsZTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUudG9TdHJpbmcoKSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUudGFnKTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS5zdHlsZTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1wiJyArIHZhbHVlICsgJ1wiJykpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUudGFnKTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS5zdHlsZTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUuc3R5bGU7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBudWxsVHlwZTpcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udWxsVmFsdWUudGFnKTtcbiAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udWxsVmFsdWUuc3R5bGU7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgdmFyIG1lcmdlZCA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgbWVyZ2VkW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0c1trZXldLCBvdmVycmlkZXNba2V5XSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlcigpO1xuICB9XG5cbn1cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZ2dlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2dnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9iYXNlTG9nZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VMb2dnZXIgKi8gXCIuL3NyYy9iYXNlTG9nZ2VyLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF90ZXJtTG9nZ2VyX21peGluc19ub2RlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Rlcm1Mb2dnZXIubWl4aW5zLm5vZGUgKi8gXCIuL3NyYy90ZXJtTG9nZ2VyLm1peGlucy5ub2RlLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF90ZXJtTG9nZ2VyX21peGluc193ZWJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGVybUxvZ2dlci5taXhpbnMud2ViICovIFwiLi9zcmMvdGVybUxvZ2dlci5taXhpbnMud2ViLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18pO1xuXG5cblxuXG4vKipcbiAqIFRoaXMgVGVybUxvZ2dlciBwcm92aWRlIGlzb21vcnBoaWMgbG9nZ2VyXG4gKiB7IG1peFdpdGggOiB7ICdub2RlJzogW0xvZ05vZGVNaXhpbnNdLCAnd2ViJzogW1dlYk5vZGVNaXhpbnNdIH0gfVxuICogQGNsYXNzIFRlcm1Mb2dnZXJcbiAqIEBleHRlbmRzIEJhc2VMb2dnZXJcbiAqL1xuXG5jbGFzcyBUZXJtTG9nZ2VyIGV4dGVuZHMgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wicGxhdGZvcm1cIl0ubWl4V2l0aChfYmFzZUxvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSwge1xuICBub2RlOiBbX3Rlcm1Mb2dnZXJfbWl4aW5zX25vZGVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl1dLFxuICB3ZWI6IFtfdGVybUxvZ2dlcl9taXhpbnNfd2ViX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdXVxufSkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZ3JvdXBTdGFjayA9IFtdO1xuICB9XG5cbiAgZ3JvdXBCZWdpbihuYW1lKSB7XG4gICAgbGV0IGdyb3VwID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGJlZ2luVGltZTogbmV3IERhdGUoKVxuICAgIH07XG4gICAgdGhpcy5ncm91cFN0YWNrLnB1c2goZ3JvdXApO1xuICAgIGxldCBpbmRlbnRTcGFjZSA9ICcnO1xuICAgIHRoaXMubG9nKGAke2luZGVudFNwYWNlfSR7Z3JvdXAubmFtZX06IGJlZ2luIGF0ICR7Z3JvdXAuYmVnaW5UaW1lfWApO1xuICB9XG5cbiAgZ3JvdXBFbmQoKSB7XG4gICAgaWYgKHRoaXMuZ3JvdXBTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgZ3JvdXAgPSB0aGlzLmdyb3VwU3RhY2sucG9wKCk7XG4gICAgICBsZXQgaW5kZW50U3BhY2UgPSAnJztcbiAgICAgIHRoaXMubG9nKGAke2luZGVudFNwYWNlfSR7Z3JvdXAubmFtZX06IGVuZCBhZnRlciAke25ldyBEYXRlKCkgLSBncm91cC5iZWdpblRpbWV9IChtcylgKTtcbiAgICB9XG4gIH1cblxufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKG5ldyBUZXJtTG9nZ2VyKCkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90ZXJtTG9nZ2VyLm1peGlucy5ub2RlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdGVybUxvZ2dlci5taXhpbnMubm9kZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2xpX3Byb2dyZXNzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjbGktcHJvZ3Jlc3MgKi8gXCJjbGktcHJvZ3Jlc3NcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2xpX3Byb2dyZXNzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2xpX3Byb2dyZXNzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuXG5cbmNvbnN0IExvZ05vZGVNaXhpbnMgPSBMb2dDbGFzcyA9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNzIHtcbiAgY29ubmVjdChjaGFubmVsKSB7XG4gICAgdGhpcy5jdXJyZW50QmFyID0gZmFsc2U7XG4gIH1cblxuICBsb2cobWVzc2FnZSkge1xuICAgIC8vVE9ETzogbWFrZSBkZWNvcmF0b3IgXG4gICAgdGhpcy5jdXJyZW50QmFyID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cblxuICBwcm9ncmVzc0JlZ2luKHJhbmdlKSB7XG4gICAgdGhpcy5wcm9jZXNzQ291bnRlciArPSAxO1xuICAgIHRoaXMuY3VycmVudEJhciA9IG5ldyBjbGlfcHJvZ3Jlc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkJhclwiXSh7fSwgY2xpX3Byb2dyZXNzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJQcmVzZXRzXCJdLnNoYWRlc19jbGFzc2ljKTtcbiAgICB0aGlzLmN1cnJlbnRCYXIuc2V0VG90YWwocmFuZ2UpO1xuICB9XG5cbiAgcHJvZ3Jlc3NVcGRhdGUocHJvZ3Jlc3NNZXNzYWdlKSB7XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRCYXIpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3NCZWdpbigpO1xuICAgIH1cblxuICAgIHRoaXMucHJvY2Vzc0NvdW50ZXIgKz0gMTtcbiAgICB0aGlzLmN1cnJlbnRCYXIudXBkYXRlKHRoaXMucHJvY2Vzc0NvdW50ZXIpO1xuICB9XG5cbiAgcHJvZ3Jlc3NFbmQoKSB7XG4gICAgdGhpcy5jdXJyZW50QmFyLnN0b3AoKTtcbiAgICB0aGlzLnByb2Nlc3NDb3VudGVyID0gMDtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmN1cnJlbnRCYXIgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gIH1cblxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChMb2dOb2RlTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZ2dlci5taXhpbnMud2ViLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90ZXJtTG9nZ2VyLm1peGlucy53ZWIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3ByZXR0eUpzb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJldHR5SnNvbiAqLyBcIi4vc3JjL3ByZXR0eUpzb24uanNcIik7XG5cblxuY29uc3QgTG9nV2ViTWl4aW5zID0gTG9nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzcyB7XG4gIGNvbm5lY3QoZG9jdW1lbnRFbCA9IG51bGwpIHtcbiAgICBkb2N1bWVudEVsID0gZG9jdW1lbnRFbCB8fCBkb2N1bWVudC5ib2R5O1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IFwibGlzdC1zdHlsZS10eXBlOiBub25lO1wiO1xuICAgIGRvY3VtZW50RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgdGhpcy5mcmFtZUVsID0gZG9jdW1lbnRFbDtcbiAgICB0aGlzLmxvZ2dlckVsID0gZG9jdW1lbnRFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpWzBdO1xuICB9XG5cbiAgc2Nyb2xsQm90dG9tKGVsZW1lbnQgPSBudWxsKSB7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5mcmFtZUVsO1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgfVxuXG4gIHByb2dyZXNzKHByb2Nlc3NNZXNzYWdlKSB7XG4gICAgLy8gbGV0IG5vZGUgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGk6bnRoLWxhc3Qtb2YtdHlwZSgxKVwiKTtcbiAgICBsZXQgTElOb2RlcyA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKTtcbiAgICBsZXQgbm9kZSA9IExJTm9kZXNbTElOb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgIGlmICghbm9kZSB8fCBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlci1wcm9ncmVzc1wiKSkge1xuICAgICAgLy9jcmVhdGUgbmV3IGVsXG4gICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VyLXByb2dyZXNzXCIpO1xuICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG5cbiAgICBsZXQganNvbk5vZGUgPSBfcHJldHR5SnNvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXS5KU09ORGlzcGxheShwcm9jZXNzTWVzc2FnZSk7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gIH1cblxuICBsb2cobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubG9nZ2VyRWwgfHwgIXRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQpIHtcbiAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9ICdib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTsnO1xuICAgIGxldCBqc29uTm9kZSA9IF9wcmV0dHlKc29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdLkpTT05EaXNwbGF5KG1lc3NhZ2UpO1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSAvL25vIHNob3cgb24gd2ViIHNjcmVlbjsgICAgICAgIFxuXG5cbiAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoTG9nV2ViTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDA6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIG11bHRpIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zcmMvaW5kZXguanMgKi9cIi4vc3JjL2luZGV4LmpzXCIpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQudXRpbHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjbGktcHJvZ3Jlc3NcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjbGktcHJvZ3Jlc3NcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpX3Byb2dyZXNzX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OTNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdkxpOXpjbU12WW1GelpVeHZaMmRsY2k1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OHVMM055WXk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk4dUwzTnlZeTlzYjJkblpYSXViV2w0YVc1ekxtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJHOW5MeTR2YzNKakwzQnlaWFIwZVVwemIyNHVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2TGk5emNtTXZkR1Z5YlV4dloyZGxjaTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk4dUwzTnlZeTkwWlhKdFRHOW5aMlZ5TG0xcGVHbHVjeTV1YjJSbExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJHOW5MeTR2YzNKakwzUmxjbTFNYjJkblpYSXViV2w0YVc1ekxuZGxZaTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpSXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OWxlSFJsY201aGJDQmNJbU5zYVMxd2NtOW5jbVZ6YzF3aUlsMHNJbTVoYldWeklqcGJJa0poYzJWTWIyZG5aWElpTENKamIyNXpkSEoxWTNSdmNpSXNJa0ZqWTJWd2RHVmtUR1YyWld4eklpd2laR1ZpZFdjaUxDSnNiMmNpTENKM1lYSnVhVzVuSWl3aVpYSnliM0lpTENKeVFXTmpaWEIwWldSTVpYWmxiSE1pTENKc1pYWmxiQ0lzSWt4bGRtVnNJaXdpZFc1a1pXWnBibVZrSWl3aVJYSnliM0lpTENKUFltcGxZM1FpTENKclpYbHpJaXdpWTI5dWJtVmpkQ0lzSW0xbGMzTmhaMlVpTENKbmNtOTFjRUpsWjJsdUlpd2libUZ0WlNJc0ltZHliM1Z3Ulc1a0lpd2ljSEp2WjNKbGMzTkNaV2RwYmlJc0luSmhibWRsSWl3aWNISnZaM0psYzNOVmNHUmhkR1VpTENKd2NtOW5jbVZ6YzBWdVpDSXNJa3h2WjJkbGNrMXBlR2x1Y3lJc0lrSmhjMlZrUTJ4aGMzTWlMQ0pNYjJkblpYSWlMQ0pzYjJkblpYSWlMQ0poYzNObGNuUWlMQ0ppWlVsdWMzUmhibU5sVDJZaUxDSktjMjl1Vm1sbGR5SXNJa3BUVDA1RWFYTndiR0Y1SWl3aWFuTnZiaUlzSW05d1pXNU1aWFpsYkhOQmNtY2lMQ0p6ZEhsc1pVOXdkR2x2Ym5OQmNtY2lMQ0pFUlVaQlZVeFVYMU5VV1V4RlgwOVFWRWxQVGxNaUxDSnliMjkwSWl3aWRHRm5JaXdpYzNSNWJHVWlMQ0owYVhSc1pVTnZiblJoYVc1bGNpSXNJblJwZEd4bElpd2lkR2wwYkdWVVpYaDBJaXdpYjNCbGJrSjFkSFJ2YmlJc0ltTnZiblJsYm5SelEyOXVkR0ZwYm1WeUlpd2lhMlY1Vm1Gc2RXVlFZV2x5SWl3aWEyVjVJaXdpYzNsdFltOXNWbUZzZFdVaUxDSnpkSEpwYm1kV1lXeDFaU0lzSW01MWJXSmxjbFpoYkhWbElpd2lZbTl2YkdWaGJsWmhiSFZsSWl3aWJuVnNiRlpoYkhWbElpd2liM0JsYmt4bGRtVnNjeUlzSW1selRtRk9JaXdpY0dGeWMyVkpiblFpTENKSmJtWnBibWwwZVNJc0luTjBlV3hsVDNCMGFXOXVjeUlzSW0xbGNtZGxVM1I1YkdWUGNIUnBiMjV6SWl3aVlYTnphV2R1SWl3aWRHRnlaMlYwSWl3aVZIbHdaVVZ5Y205eUlpd2lkRzhpTENKcGJtUmxlQ0lzSW1GeVozVnRaVzUwY3lJc0lteGxibWQwYUNJc0ltNWxlSFJUYjNWeVkyVWlMQ0p1WlhoMFMyVjVJaXdpY0hKdmRHOTBlWEJsSWl3aWFHRnpUM2R1VUhKdmNHVnlkSGtpTENKallXeHNJaXdpY21WdVpHVnlJaXdpWld4bGJXVnVkQ0lzSW1SdlkzVnRaVzUwSWl3aVkzSmxZWFJsUld4bGJXVnVkQ0lzSW1OemMxUmxlSFFpTENKMmIybGtSV3hsYldWdWRDSXNJbWRsZEZaaGJIVmxJaXdpWVhCd1pXNWtRMmhwYkdRaUxDSkVZWFJsSWl3aVpHRjBaVVZzWlcxbGJuUWlMQ0owYjBsVFQxTjBjbWx1WnlJc0ltNXZia1Y0Y0dGdVpHRmliR1ZGYkdWdFpXNTBJaXdpUVhKeVlYa2lMQ0pwYzBGeWNtRjVJaXdpZEdocGMweGxkbVZzU1hORGJHOXpaV1FpTENKblpYUlVhWFJzWlNJc0ltTnZiblpsY25SS2MyOXVWRzlGYkdWdFpXNTBjeUlzSW01bGVIUk1aWFpsYkVselEyeHZjMlZrSWl3aVkyOXVkR0ZwYm1WeUlpd2laMlYwUTI5dWRHVnVkSE5EYjI1MFlXbHVaWElpTENKblpYUlRkR0Z1WkdGeVpGQmhhWElpTENKblpYUlBkMjVRY205d1pYSjBlVk41YldKdmJITWlMQ0ptYjNKRllXTm9JaXdpYzNsdFltOXNJaXdpZEc5VGRISnBibWNpTENKdmNIUnBiMjVoYkV0bGVTSXNJbXhsZG1Wc1NYTkRiRzl6WldRaUxDSmpkWEp5Wlc1MGJIbERiRzl6WldRaUxDSmpiMjUwWVdsdVpYSkZiR1Z0Wlc1MElpd2ljMlYwUVhSMGNtbGlkWFJsSWl3aWRHVjRkRVZzWlcxbGJuUWlMQ0owYVhSc1pVVnNaVzFsYm5RaUxDSm5aWFJQY0dWdVFuVjBkRzl1SWl3aVoyVjBTMlY1SWl3aVkzSmxZWFJsVkdWNGRFNXZaR1VpTENKdmJtTnNhV05ySWl3aVptbHljM1JEYUdsc1pDSXNJbTlpYW1WamRFTnZiblJsYm5Seklpd2ljR0Z5Wlc1MFRtOWtaU0lzSW01bGVIUlRhV0pzYVc1bklpd2laR2x6Y0d4aGVTSXNJblJ5WVc1elptOXliU0lzSW1KMWRIUnZia1ZzWlcxbGJuUWlMQ0pwYzBOc2IzTmxaQ0lzSW5aaGJIVmxJaXdpY0dGcGNrVnNaVzFsYm5RaUxDSnJaWGxGYkdWdFpXNTBJaXdpZG1Gc2RXVkZiR1Z0Wlc1MElpd2liblZzYkZSNWNHVWlMQ0prWldaaGRXeDBjeUlzSW05MlpYSnlhV1JsY3lJc0ltMWxjbWRsWkNJc0lsUmxjbTFNYjJkblpYSWlMQ0p3YkdGMFptOXliU0lzSW0xcGVGZHBkR2dpTENKdWIyUmxJaXdpVEc5blRtOWtaVTFwZUdsdWN5SXNJbmRsWWlJc0lreHZaMWRsWWsxcGVHbHVjeUlzSW1keWIzVndVM1JoWTJzaUxDSm5jbTkxY0NJc0ltSmxaMmx1VkdsdFpTSXNJbkIxYzJnaUxDSnBibVJsYm5SVGNHRmpaU0lzSW5CdmNDSXNJa3h2WjBOc1lYTnpJaXdpWTJoaGJtNWxiQ0lzSW1OMWNuSmxiblJDWVhJaUxDSmpiMjV6YjJ4bElpd2ljSEp2WTJWemMwTnZkVzUwWlhJaUxDSmpiR2xRY205bmNtVnpjeUlzSW5Ob1lXUmxjMTlqYkdGemMybGpJaXdpYzJWMFZHOTBZV3dpTENKd2NtOW5jbVZ6YzAxbGMzTmhaMlVpTENKMWNHUmhkR1VpTENKemRHOXdJaXdpWkc5amRXMWxiblJGYkNJc0ltSnZaSGtpTENKbWNtRnRaVVZzSWl3aWJHOW5aMlZ5Uld3aUxDSm5aWFJGYkdWdFpXNTBjMEo1VkdGblRtRnRaU0lzSW5OamNtOXNiRUp2ZEhSdmJTSXNJbk5qY205c2JGUnZjQ0lzSW5OamNtOXNiRWhsYVdkb2RDSXNJbU5zYVdWdWRFaGxhV2RvZENJc0luQnliMmR5WlhOeklpd2ljSEp2WTJWemMwMWxjM05oWjJVaUxDSk1TVTV2WkdWeklpd2lZMnhoYzNOTWFYTjBJaXdpWTI5dWRHRnBibk1pTENKaFpHUWlMQ0pxYzI5dVRtOWtaU0lzSW1SaGRHVWlMQ0pwYm01bGNraFVUVXdpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCTUVNc1owTkJRV2RETzBGQlF6RkZPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVhkRUxHdENRVUZyUWp0QlFVTXhSVHRCUVVOQkxIbEVRVUZwUkN4alFVRmpPMEZCUXk5RU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFJFRkJlVU1zYVVOQlFXbERPMEZCUXpGRkxIZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdEJRVU55U1R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEYkVaQk8wRkJRVUU3T3pzN1FVRkpRU3hOUVVGTlFTeFZRVUZPTEVOQlFXZENPMEZCUTFwRExHRkJRVmNzUjBGQlJUdEJRVU5VTEZOQlFVdERMR05CUVV3c1IwRkJjMEk3UVVGQlEwTXNWMEZCU3l4RlFVRkZMRU5CUVZJN1FVRkJWME1zVTBGQlJ5eEZRVUZETEVOQlFXWTdRVUZCYTBKRExHRkJRVThzUlVGQlF5eERRVUV4UWp0QlFVRTJRa01zVjBGQlN5eEZRVUZGTzBGQlFYQkRMRXRCUVhSQ08wRkJRMEVzVTBGQlMwTXNaVUZCVEN4SFFVRjFRanRCUVVGRExGTkJRVVVzVDBGQlNEdEJRVUZaTEZOQlFVY3NTMEZCWmp0QlFVRnpRaXhUUVVGSExGTkJRWHBDTzBGQlFXOURMRk5CUVVjN1FVRkJka01zUzBGQmRrSTdRVUZEUVN4VFFVRkxReXhMUVVGTUxFZEJRV0VzUzBGQlMwNHNZMEZCVEN4RFFVRnZRaXhQUVVGd1FpeERRVUZpTzBGQlEwZzdPMEZCUTBRc1RVRkJTVThzUzBGQlNpeERRVUZWUkN4TFFVRldMRVZCUVdkQ08wRkJRMW9zVVVGQlJ5eExRVUZMVGl4alFVRk1MRU5CUVc5Q1RTeExRVUZ3UWl4TlFVRTJRa1VzVTBGQmFFTXNSVUZCTUVNN1FVRkRkRU1zVjBGQlMwWXNTMEZCVEN4SFFVRmhMRXRCUVV0T0xHTkJRVXdzUTBGQmIwSk5MRXRCUVhCQ0xFTkJRV0k3UVVGRFNDeExRVVpFTEUxQlIwazdRVUZEUVN4WlFVRk5SeXhMUVVGTExFTkJRVVVzUjBGQlJVZ3NTMEZCVFN4dFFrRkJhMEpKTEUxQlFVMHNRMEZCUTBNc1NVRkJVQ3hEUVVGWkxFdEJRVXRZTEdOQlFXcENMRU5CUVdsRExFVkJRVGRFTEVOQlFWZzdRVUZEU0R0QlFVTktPenRCUVVORUxFMUJRVWxQTEV0QlFVb3NSMEZCVnp0QlFVTlFMRmRCUVU4c1MwRkJTMFlzWlVGQlRDeERRVUZ4UWl4TFFVRkxReXhMUVVFeFFpeERRVUZRTzBGQlEwZzdPMEZCUlVSTkxGTkJRVThzUjBGQlJUdEJRVU5NTEZWQlFVMUlMRXRCUVVzc1EwRkJReXh2UWtGQlJDeERRVUZZTzBGQlEwZzdPMEZCUlVSUUxFdEJRVWNzUTBGQlExY3NUMEZCUkN4RlFVRlRPMEZCUTFJc1ZVRkJUVW9zUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRlJFd3NUMEZCU3l4RFFVRkRVeXhQUVVGRUxFVkJRVk03UVVGRFZpeFZRVUZOU2l4TFFVRkxMRU5CUVVNc2IwSkJRVVFzUTBGQldEdEJRVU5JT3p0QlFVVkVVaXhQUVVGTExFTkJRVU5aTEU5QlFVUXNSVUZCVXp0QlFVTldMRlZCUVUxS0xFdEJRVXNzUTBGQlF5eHZRa0ZCUkN4RFFVRllPMEZCUTBnN08wRkJSVVJMTEZsQlFWVXNRMEZCUTBNc1NVRkJSQ3hGUVVGTk8wRkJRMW9zVlVGQlRVNHNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkU4c1ZVRkJVU3hIUVVGRk8wRkJRMDRzVlVGQlRWQXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkZFc1pVRkJZU3hEUVVGRFF5eExRVUZFTEVWQlFVODdRVUZEYUVJc1ZVRkJUVlFzUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRlJGVXNaMEpCUVdNc1EwRkJRMDRzVDBGQlJDeEZRVUZUTzBGQlEyNUNMRlZCUVUxS0xFdEJRVXNzUTBGQlF5eHZRa0ZCUkN4RFFVRllPMEZCUTBnN08wRkJSVVJYTEdGQlFWY3NRMEZCUTFBc1QwRkJSQ3hGUVVGVE8wRkJRMmhDTEZWQlFVMUtMRXRCUVVzc1EwRkJReXh2UWtGQlJDeERRVUZZTzBGQlEwZzdPMEZCY0VSWE96dEJRWFZFUkZnc2VVVkJRV1lzUlRzN096czdPenM3T3pzN08wRkRNMFJCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZGUVRzN096czdPenM3T3pzN096dEJRMFpCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRRVHM3UVVGRFFTeE5RVUZOZFVJc1dVRkJXU3hIUVVGSlF5eFZRVUZFTEVsQlFXVXNZMEZCWTBFc1ZVRkJaQ3hEUVVGM1FqdEJRVVY0UkN4TlFVRkpReXhOUVVGS0xFTkJRVmRETEUxQlFWZ3NSVUZCYTBJN1FVRkRaRU1zTWtSQlFVMHNRMEZCUTBNc1dVRkJVQ3hEUVVGdlFrWXNUVUZCY0VJc1JVRkJORUl4UWl4dFJFRkJOVUk3UVVGRFFTeFRRVUZMTUVJc1RVRkJUQ3hIUVVGalFTeE5RVUZrTzBGQlEwZzdPMEZCUlVRc1RVRkJTVVFzVFVGQlNpeEhRVUZaTzBGQlExSXNVVUZCUnl4RFFVRkRMRXRCUVV0RExFMUJRVlFzUlVGQlowSTdRVUZEV2l4WlFVRk5aaXhMUVVGTExFTkJRVU1zYlVKQlFVUXNRMEZCV0R0QlFVTklPenRCUVVORUxGZEJRVThzUzBGQlMyVXNUVUZCV2p0QlFVTklPenRCUVZwMVJDeERRVUUxUkRzN1FVRmxaVWdzTWtWQlFXWXNSVHM3T3pzN096czdPenM3TzBGRGFrSkJPMEZCUVVFN1FVRkJRVHRCUVVOQk8wRkJRMlVzVFVGQlRVMHNVVUZCVGl4RFFVRmpPMEZCUTNwQ05VSXNZVUZCVnl4SFFVRkZMRU5CUTFvN08wRkJRMFFzVTBGQlR6WkNMRmRCUVZBc1EwRkJiVUpETEVsQlFXNUNMRVZCUVhsQ1F5eGhRVUY2UWl4RlFVRjNRME1zWlVGQmVFTXNSVUZCZVVRN1FVRkRja1FzVVVGQlNVTXNjVUpCUVhGQ0xFZEJRVWM3UVVGRE1VSkRMRlZCUVVrc1JVRkJSVHRCUVVGRlF5eFhRVUZITEVWQlFVVXNTMEZCVUR0QlFVRmpReXhoUVVGTExFVkJRVVU3UVVGQmNrSXNUMEZFYjBJN1FVRkZNVUpETEc5Q1FVRmpMRVZCUVVVN1FVRkJSVVlzVjBGQlJ5eEZRVUZGTEV0QlFWQTdRVUZCWTBNc1lVRkJTeXhGUVVGRk8wRkJRWEpDTEU5QlJsVTdRVUZITVVKRkxGZEJRVXNzUlVGQlJUdEJRVUZGU0N4WFFVRkhMRVZCUVVVc1RVRkJVRHRCUVVGbFF5eGhRVUZMTEVWQlFVVTdRVUZCZEVJc1QwRkliVUk3UVVGSk1VSkhMR1ZCUVZNc1JVRkJSVHRCUVVGRlNpeFhRVUZITEVWQlFVVXNUVUZCVUR0QlFVRmxReXhoUVVGTExFVkJRVVU3UVVGQmRFSXNUMEZLWlR0QlFVc3hRa2tzWjBKQlFWVXNSVUZCUlR0QlFVTldUQ3hYUVVGSExFVkJRVVVzVFVGRVN6dEJRVVZXUXl4aFFVRkxMRVZCUVVVc2QwWkJRMEU3UVVGSVJ5eFBRVXhqTzBGQlZURkNTeXgxUWtGQmFVSXNSVUZCUlR0QlFVRkZUaXhYUVVGSExFVkJRVVVzUzBGQlVEdEJRVUZqUXl4aFFVRkxMRVZCUVVVN1FVRkJja0lzVDBGV1R6dEJRVmN4UWswc2EwSkJRVmtzUlVGQlJUdEJRVUZGVUN4WFFVRkhMRVZCUVVVc1RVRkJVRHRCUVVGbFF5eGhRVUZMTEVWQlFVVTdRVUZCZEVJc1QwRllXVHRCUVZreFFrOHNVMEZCUnl4RlFVRkZPMEZCUVVWU0xGZEJRVWNzUlVGQlJTeE5RVUZRTzBGQlFXVkRMR0ZCUVVzc1JVRkJSVHRCUVVGMFFpeFBRVnB4UWp0QlFXRXhRbEVzYVVKQlFWY3NSVUZCUlR0QlFVRkZWQ3hYUVVGSExFVkJRVVVzVFVGQlVEdEJRVUZsUXl4aFFVRkxMRVZCUVVVN1FVRkJkRUlzVDBGaVlUdEJRV014UWxNc2FVSkJRVmNzUlVGQlJUdEJRVUZGVml4WFFVRkhMRVZCUVVVc1RVRkJVRHRCUVVGbFF5eGhRVUZMTEVWQlFVVTdRVUZCZEVJc1QwRmtZVHRCUVdVeFFsVXNhVUpCUVZjc1JVRkJSVHRCUVVGRldDeFhRVUZITEVWQlFVVXNUVUZCVUR0QlFVRmxReXhoUVVGTExFVkJRVVU3UVVGQmRFSXNUMEZtWVR0QlFXZENNVUpYTEd0Q1FVRlpMRVZCUVVVN1FVRkJSVm9zVjBGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1lVRkJTeXhGUVVGRk8wRkJRWFJDTEU5QmFFSlpPMEZCYVVJeFFsa3NaVUZCVXl4RlFVRkZPMEZCUVVWaUxGZEJRVWNzUlVGQlJTeE5RVUZRTzBGQlFXVkRMR0ZCUVVzc1JVRkJSVHRCUVVGMFFqdEJRV3BDWlN4TFFVRTFRanRCUVcxQ1FTeFJRVUZKWVN4VlFVRlZMRWRCUVVkRExFdEJRVXNzUTBGQlEwTXNVVUZCVVN4RFFVRkRjRUlzWVVGQlJDeERRVUZVTEVOQlFVd3NSMEZCYVVOeFFpeFJRVUZxUXl4SFFVRTBRMFFzVVVGQlVTeERRVUZEY0VJc1lVRkJSQ3hEUVVGeVJUdEJRVU5CTEZGQlFVbHpRaXhaUVVGWkxFZEJRVWNzVDBGQlQzSkNMR1ZCUVZBc1MwRkJNa0lzVVVGQk0wSXNSMEZEUlhOQ0xHbENRVUZwUWl4RFFVRkRja0lzY1VKQlFVUXNSVUZCZDBKRUxHVkJRWGhDTEVOQlJHNUNMRWRCUlVWRExIRkNRVVp5UWpzN1FVRkpRU3hSUVVGSkxFOUJRVTkwUWl4TlFVRk5MRU5CUVVNMFF5eE5RVUZrTEVsQlFYZENMRlZCUVRWQ0xFVkJRWGRETzBGQlEzUkROVU1zV1VGQlRTeERRVUZETkVNc1RVRkJVQ3hIUVVGblFpeFZRVUZUUXl4TlFVRlVMRVZCUVdsQ08wRkJReTlDTEZsQlFVbEJMRTFCUVUwc1NVRkJTU3hKUVVGa0xFVkJRVzlDTzBGQlEyeENMR2RDUVVGTkxFbEJRVWxETEZOQlFVb3NRMEZCWXl3MFEwRkJaQ3hEUVVGT08wRkJRMFE3TzBGQlJVUXNXVUZCU1VNc1JVRkJSU3hIUVVGSEwwTXNUVUZCVFN4RFFVRkROa01zVFVGQlJDeERRVUZtT3p0QlFVVkJMR0ZCUVVzc1NVRkJTVWNzUzBGQlN5eEhRVUZITEVOQlFXcENMRVZCUVc5Q1FTeExRVUZMTEVkQlFVZERMRk5CUVZNc1EwRkJRME1zVFVGQmRFTXNSVUZCT0VOR0xFdEJRVXNzUlVGQmJrUXNSVUZCZFVRN1FVRkRja1FzWTBGQlNVY3NWVUZCVlN4SFFVRkhSaXhUUVVGVExFTkJRVU5FTEV0QlFVUXNRMEZCTVVJN08wRkJSVUVzWTBGQlNVY3NWVUZCVlN4SlFVRkpMRWxCUVd4Q0xFVkJRWGRDTzBGQlEzUkNMR2xDUVVGTExFbEJRVWxETEU5QlFWUXNTVUZCYjBKRUxGVkJRWEJDTEVWQlFXZERPMEZCUXpsQ0xHdENRVUZKYmtRc1RVRkJUU3hEUVVGRGNVUXNVMEZCVUN4RFFVRnBRa01zWTBGQmFrSXNRMEZCWjBORExFbEJRV2hETEVOQlFYRkRTaXhWUVVGeVF5eEZRVUZwUkVNc1QwRkJha1FzUTBGQlNpeEZRVUVyUkR0QlFVTTNSRXdzYTBKQlFVVXNRMEZCUTBzc1QwRkJSQ3hEUVVGR0xFZEJRV05FTEZWQlFWVXNRMEZCUTBNc1QwRkJSQ3hEUVVGNFFqdEJRVU5FTzBGQlEwWTdRVUZEUmp0QlFVTkdPenRCUVVORUxHVkJRVTlNTEVWQlFWQTdRVUZEUkN4UFFXNUNSRHRCUVc5Q1JEczdRVUZGUkN4aFFVRlRVeXhOUVVGVUxFZEJRV3RDTzBGQlEyaENMRlZCUVVsRExFOUJRVThzUjBGQlIwTXNVVUZCVVN4RFFVRkRReXhoUVVGVUxFTkJRWFZDYWtJc1dVRkJXU3hEUVVGRGJrSXNTVUZCWWl4RFFVRnJRa01zUjBGQmVrTXNRMEZCWkR0QlFVTkJhVU1zWVVGQlR5eERRVUZEYUVNc1MwRkJVaXhEUVVGamJVTXNUMEZCWkN4SFFVRjNRbXhDTEZsQlFWa3NRMEZCUTI1Q0xFbEJRV0lzUTBGQmEwSkZMRXRCUVRGRE96dEJRVVZCTEZWQlFVbE9MRWxCUVVrc1MwRkJTeXhKUVVGVUxFbEJRV2xDUVN4SlFVRkpMRXRCUVV0eVFpeFRRVUU1UWl4RlFVRjVRenRCUVVOMlF5eFpRVUZKSzBRc1YwRkJWeXhIUVVGSFF5eFJRVUZSTEVOQlFVTXNTVUZCUkN4RFFVRXhRanRCUVVOQlRDeGxRVUZQTEVOQlFVTk5MRmRCUVZJc1EwRkJiMEpHTEZkQlFYQkNPMEZCUTBRc1QwRklSQ3hOUVVkUExFbEJRVWt4UXl4SlFVRkpMRmxCUVZrMlF5eEpRVUZ3UWl4RlFVRXdRanRCUVVNdlFpeFpRVUZKUXl4WFFVRlhMRWRCUVVkSUxGRkJRVkVzUTBGQlF6TkRMRWxCUVVrc1EwRkJReXRETEZkQlFVd3NSVUZCUkN4RFFVRXhRanRCUVVOQlZDeGxRVUZQTEVOQlFVTk5MRmRCUVZJc1EwRkJiMEpGTEZkQlFYQkNPMEZCUTBRc1QwRklUU3hOUVVkQkxFbEJRVWtzVDBGQlR6bERMRWxCUVZBc1MwRkJaMElzVVVGQmNFSXNSVUZCT0VJN1FVRkRia01zV1VGQlNXZEVMRzlDUVVGdlFpeEhRVUZIVEN4UlFVRlJMRU5CUVVNelF5eEpRVUZFTEVOQlFXNURPMEZCUTBGelF5eGxRVUZQTEVOQlFVTk5MRmRCUVZJc1EwRkJiMEpKTEc5Q1FVRndRanRCUVVORUxFOUJTRTBzVFVGSFFUdEJRVU5NTEZsQlFVbDRReXhMUVVGTExFZEJRVWQ1UXl4TFFVRkxMRU5CUVVORExFOUJRVTRzUTBGQlkyeEVMRWxCUVdRc1NVRkJjMElzVjBGQlYwRXNTVUZCU1N4RFFVRkRLMElzVFVGQmFFSXNSMEZCZVVJc1IwRkJMME1zUjBGQmNVUXNVVUZCYWtVN1FVRkRRU3haUVVGSmIwSXNhVUpCUVdsQ0xFZEJRVWRvUXl4VlFVRlZMRWRCUVVjc1EwRkJja003UVVGRFFXMUNMR1ZCUVU4c1EwRkJRMDBzVjBGQlVpeERRVUZ2UWxFc1VVRkJVU3hEUVVGRE5VTXNTMEZCUkN4RlFVRlJMRWxCUVZJc1JVRkJZekpETEdsQ1FVRmtMRU5CUVRWQ08wRkJRMEZpTEdWQlFVOHNRMEZCUTAwc1YwRkJVaXhEUVVGdlFsTXNjVUpCUVhGQ0xFTkJRVU55UkN4SlFVRkVMRVZCUVU4c1EwRkJVQ3hEUVVGNlF6dEJRVU5FT3p0QlFVVkVMR0ZCUVU5elF5eFBRVUZRTzBGQlEwUTdPMEZCUlVRc1lVRkJVMlVzY1VKQlFWUXNRMEZCSzBKeVJDeEpRVUV2UWl4RlFVRnhRelpDTEV0QlFYSkRMRVZCUVRSRE8wRkJRekZETEZWQlFVbHpRaXhwUWtGQmFVSXNSMEZCUjNSQ0xFdEJRVXNzUjBGQlIxWXNWVUZCYUVNN1FVRkRRU3hWUVVGSmJVTXNhVUpCUVdsQ0xFZEJRVWQ2UWl4TFFVRkxMRWRCUVVjc1EwRkJVaXhIUVVGWlZpeFZRVUZ3UXp0QlFVTkJMRlZCUVVsdlF5eFRRVUZUTEVkQlFVZERMRzlDUVVGdlFpeERRVUZEVEN4cFFrRkJSQ3hEUVVGd1F6czdRVUZEUVN4WFFVRkxMRWxCUVVsMFF5eEhRVUZVTEVsQlFXZENZaXhKUVVGb1FpeEZRVUZ6UWp0QlFVTndRaXhaUVVGSmFVUXNTMEZCU3l4RFFVRkRReXhQUVVGT0xFTkJRV05zUkN4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQmJFSXNRMEZCU2l4RlFVRTRRanRCUVVNMVFqQkRMRzFDUVVGVExFTkJRVU5ZTEZkQlFWWXNRMEZCYzBKUkxGRkJRVkVzUTBGQlF5eFhRVUZYY0VRc1NVRkJTU3hEUVVGRFlTeEhRVUZFTEVOQlFVb3NRMEZCVld0Q0xFMUJRWEpDTEVkQlFUaENMRWRCUVM5Q0xFVkJRVzlEYkVJc1IwRkJjRU1zUlVGQmVVTjVReXhwUWtGQmVrTXNRMEZCT1VJN1FVRkRRVU1zYlVKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFsTXNjVUpCUVhGQ0xFTkJRVU55UkN4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlRDeEZRVUZaWjBJc1MwRkJTeXhIUVVGSExFTkJRWEJDTEVOQlFUTkRPMEZCUTBRc1UwRklSQ3hOUVVkUExFbEJRVWszUWl4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlNpeExRVUZqTEVsQlFXUXNTVUZCYzBKaUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRktMRXRCUVdOc1F5eFRRVUY0UXl4RlFVRnRSRHRCUVVONFJEUkZMRzFDUVVGVExFTkJRVU5ZTEZkQlFWWXNRMEZCYzBKaExHVkJRV1VzUTBGQlF6VkRMRWRCUVVRc1JVRkJUU3hKUVVGT0xFTkJRWEpETzBGQlEwUXNVMEZHVFN4TlFVVkJMRWxCUVVsaUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRktMRmxCUVhGQ1owTXNTVUZCZWtJc1JVRkJLMEk3UVVGRGNFTlZMRzFDUVVGVExFTkJRVU5ZTEZkQlFWWXNRMEZCYzBKaExHVkJRV1VzUTBGQlF6VkRMRWRCUVVRc1JVRkJUV0lzU1VGQlNTeERRVUZEWVN4SFFVRkVMRU5CUVVvc1EwRkJWV3RETEZkQlFWWXNSVUZCVGl4RFFVRnlRenRCUVVORUxGTkJSazBzVFVGRlFTeEpRVUZKTEU5QlFVOHZReXhKUVVGSkxFTkJRVU5oTEVkQlFVUXNRMEZCV0N4TFFVRnhRaXhSUVVGNlFpeEZRVUZ0UXp0QlFVTjRRekJETEcxQ1FVRlRMRU5CUVVOWUxGZEJRVllzUTBGQmMwSlJMRkZCUVZFc1EwRkJReXhSUVVGRUxFVkJRVmQyUXl4SFFVRllMRVZCUVdkQ2VVTXNhVUpCUVdoQ0xFTkJRVGxDTzBGQlEwRkRMRzFDUVVGVExFTkJRVU5ZTEZkQlFWWXNRMEZCYzBKVExIRkNRVUZ4UWl4RFFVRkRja1FzU1VGQlNTeERRVUZEWVN4SFFVRkVMRU5CUVV3c1JVRkJXV2RDTEV0QlFVc3NSMEZCUnl4RFFVRndRaXhEUVVFelF6dEJRVU5FTEZOQlNFMHNUVUZIUVR0QlFVTk1NRUlzYlVKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkROVU1zUjBGQlJDeEZRVUZOWWl4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlZpeERRVUZ5UXp0QlFVTkVPMEZCUTBZN08wRkJRMFFzVlVGQlNTeFBRVUZQYUVNc1RVRkJUU3hEUVVGRE5rVXNjVUpCUVdRc1MwRkJkME1zVlVGQk5VTXNSVUZCZDBRN1FVRkRkRVEzUlN4alFVRk5MRU5CUVVNMlJTeHhRa0ZCVUN4RFFVRTJRakZFTEVsQlFUZENMRVZCUVcxRE1rUXNUMEZCYmtNc1EwRkJNa01zVlVGQlUwTXNUVUZCVkN4RlFVRnBRanRCUVVNeFJFd3NiVUpCUVZNc1EwRkJRMWdzVjBGQlZpeERRVUZ6UW1Fc1pVRkJaU3hEUVVGRFJ5eE5RVUZOTEVOQlFVTkRMRkZCUVZBc1JVRkJSQ3hGUVVGdlFqZEVMRWxCUVVrc1EwRkJRelJFTEUxQlFVUXNRMEZCZUVJc1EwRkJja003UVVGRFJDeFRRVVpFTzBGQlIwUTdPMEZCUlVRc1lVRkJUMHdzVTBGQlVEdEJRVU5FT3p0QlFVVkVMR0ZCUVZOSUxGRkJRVlFzUTBGQmEwSXpReXhUUVVGc1FpeEZRVUUyUW5GRUxGZEJRVGRDTEVWQlFUQkRReXhoUVVFeFF5eEZRVUY1UkR0QlFVTjJSQ3hWUVVGSlF5eGxRVUZsTEVkQlFVZEVMR0ZCUVhSQ08wRkJRMEVzVlVGQlNVVXNaMEpCUVdkQ0xFZEJRVWN4UWl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU5vUWl4alFVRmlMRU5CUVRSQ1JpeEhRVUZ1UkN4RFFVRjJRanRCUVVOQk5FUXNjMEpCUVdkQ0xFTkJRVU16UkN4TFFVRnFRaXhEUVVGMVFtMURMRTlCUVhaQ0xFZEJRV2xEYkVJc1dVRkJXU3hEUVVGRGFFSXNZMEZCWWl4RFFVRTBRa1FzUzBGQk4wUTdRVUZEUVRKRUxITkNRVUZuUWl4RFFVRkRReXhaUVVGcVFpeERRVUU0UWl4WFFVRTVRaXhGUVVFeVF5eG5Ra0ZCTTBNN1FVRkRRU3hWUVVGSlF5eFhRVUZYTEVkQlFVYzFRaXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVKcVFpeFpRVUZaTEVOQlFVTmtMRk5CUVdJc1EwRkJkVUpLTEVkQlFUbERMRU5CUVd4Q08wRkJRMEVzVlVGQlNTdEVMRmxCUVZrc1IwRkJSemRDTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMllzUzBGQllpeERRVUZ0UWtnc1IwRkJNVU1zUTBGQmJrSTdRVUZEUVN0RUxHdENRVUZaTEVOQlFVTTVSQ3hMUVVGaUxFTkJRVzFDYlVNc1QwRkJia0lzUjBGQk5rSnNRaXhaUVVGWkxFTkJRVU5tTEV0QlFXSXNRMEZCYlVKR0xFdEJRV2hFTzBGQlEwRTJSQ3hwUWtGQlZ5eERRVUZETjBRc1MwRkJXaXhEUVVGclFtMURMRTlCUVd4Q0xFZEJRVFJDYkVJc1dVRkJXU3hEUVVGRFpDeFRRVUZpTEVOQlFYVkNTQ3hMUVVGdVJEdEJRVVZCT0VRc2EwSkJRVmtzUTBGQlEzaENMRmRCUVdJc1EwRkJlVUo1UWl4aFFVRmhMRU5CUVVOT0xHRkJRVVFzUTBGQmRFTTdPMEZCUTBFc1ZVRkJTVVFzVjBGQlNpeEZRVUZwUWp0QlFVTm1TeXh0UWtGQlZ5eERRVUZEZGtJc1YwRkJXaXhEUVVGM1FqQkNMRTFCUVUwc1EwRkJRMUlzVjBGQlJDeERRVUU1UWp0QlFVTkVPenRCUVVORVN5eHBRa0ZCVnl4RFFVRkRka0lzVjBGQldpeERRVUYzUWt3c1VVRkJVU3hEUVVGRFowTXNZMEZCVkN4RFFVRjNRamxFTEZOQlFYaENMRU5CUVhoQ08wRkJRMEV5UkN4clFrRkJXU3hEUVVGRGVFSXNWMEZCWWl4RFFVRjVRblZDTEZkQlFYcENPenRCUVVWQlF5eHJRa0ZCV1N4RFFVRkRTU3hQUVVGaUxFZEJRWFZDTEZsQlFWazdRVUZEYWtNc1dVRkJTVGxFTEZWQlFWVXNSMEZCUnpCRUxGbEJRVmtzUTBGQlEwc3NWVUZCT1VJN1FVRkRRU3haUVVGSlF5eGpRVUZqTEVkQlFVZE9MRmxCUVZrc1EwRkJRMDhzVlVGQllpeERRVUYzUWtNc1YwRkJOME03UVVGRFFVWXNjMEpCUVdNc1EwRkJRM0JGTEV0QlFXWXNRMEZCY1VKMVJTeFBRVUZ5UWl4SFFVRXJRbUlzWlVGQlpTeEhRVUZITEU5QlFVZ3NSMEZCWVN4TlFVRXpSRHRCUVVOQmRFUXNhMEpCUVZVc1EwRkJRMG9zUzBGQldDeERRVUZwUW5kRkxGTkJRV3BDTEVkQlFUWkNaQ3hsUVVGbExFZEJRVWNzWlVGQlNDeEhRVUZ4UWl4alFVRnFSVHRCUVVOQlFTeDFRa0ZCWlN4SFFVRkhMRU5CUVVOQkxHVkJRVzVDTzBGQlEwUXNUMEZPUkRzN1FVRlJRVU1zYzBKQlFXZENMRU5CUVVOeVFpeFhRVUZxUWl4RFFVRTJRbmRDTEZsQlFUZENPMEZCUTBFc1lVRkJUMGdzWjBKQlFWQTdRVUZEUkRzN1FVRkZSQ3hoUVVGVFNTeGhRVUZVTEVOQlFYVkNUaXhoUVVGMlFpeEZRVUZ6UXp0QlFVTndReXhWUVVGSlowSXNZVUZCWVN4SFFVRkhlRU1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1N4RFFVRkRZaXhWUVVGaUxFTkJRWGRDVEN4SFFVRXZReXhEUVVGd1FqdEJRVU5CTUVVc2JVSkJRV0VzUTBGQlEzcEZMRXRCUVdRc1EwRkJiMEp0UXl4UFFVRndRaXhIUVVFNFFteENMRmxCUVZrc1EwRkJRMklzVlVGQllpeERRVUYzUWtvc1MwRkJkRVE3UVVGRFFYbEZMRzFDUVVGaExFTkJRVU42UlN4TFFVRmtMRU5CUVc5Q2QwVXNVMEZCY0VJc1IwRkJaME5tTEdGQlFXRXNSMEZCUnl4alFVRklMRWRCUVc5Q0xHVkJRV3BGTzBGQlEwRXNZVUZCVDJkQ0xHRkJRVkE3UVVGRFJEczdRVUZGUkN4aFFVRlRka0lzYjBKQlFWUXNRMEZCT0VKM1FpeFJRVUU1UWl4RlFVRjNRenRCUVVOMFF5eFZRVUZKWml4blFrRkJaMElzUjBGQlJ6RkNMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlExb3NhVUpCUVdJc1EwRkJLMEpPTEVkQlFYUkVMRU5CUVhaQ08wRkJRMEUwUkN4elFrRkJaMElzUTBGQlEwTXNXVUZCYWtJc1EwRkJPRUlzVjBGQk9VSXNSVUZCTWtNc2JVSkJRVE5ETzBGQlEwRkVMSE5DUVVGblFpeERRVUZETTBRc1MwRkJha0lzUTBGQmRVSnRReXhQUVVGMlFpeEhRVUZwUTJ4Q0xGbEJRVmtzUTBGQlExb3NhVUpCUVdJc1EwRkJLMEpNTEV0QlFXaEZPMEZCUTBFeVJDeHpRa0ZCWjBJc1EwRkJRek5FTEV0QlFXcENMRU5CUVhWQ2RVVXNUMEZCZGtJc1IwRkJhME5ITEZGQlFWRXNSMEZCUnl4TlFVRklMRWRCUVZrc1QwRkJkRVE3UVVGRFFTeGhRVUZQWml4blFrRkJVRHRCUVVORU96dEJRVVZFTEdGQlFWTlNMR1ZCUVZRc1EwRkJlVUkxUXl4SFFVRjZRaXhGUVVFNFFtOUZMRXRCUVRsQ0xFVkJRWEZETzBGQlEyNURMRlZCUVVsRExGZEJRVmNzUjBGQlJ6TkRMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlExZ3NXVUZCWWl4RFFVRXdRbEFzUjBGQmFrUXNRMEZCYkVJN1FVRkRRVFpGTEdsQ1FVRlhMRU5CUVVNMVJTeExRVUZhTEVOQlFXdENiVU1zVDBGQmJFSXNSMEZCTkVKc1FpeFpRVUZaTEVOQlFVTllMRmxCUVdJc1EwRkJNRUpPTEV0QlFYUkVPMEZCUTBFMFJTeHBRa0ZCVnl4RFFVRkRkRU1zVjBGQldpeERRVUYzUWpCQ0xFMUJRVTBzUTBGQlEzcEVMRWRCUVVRc1EwRkJPVUk3UVVGRFFYRkZMR2xDUVVGWExFTkJRVU4wUXl4WFFVRmFMRU5CUVhkQ1JDeFJRVUZSTEVOQlFVTnpReXhMUVVGRUxFTkJRV2hETzBGQlEwRXNZVUZCVDBNc1YwRkJVRHRCUVVORU96dEJRVVZFTEdGQlFWTmFMRTFCUVZRc1EwRkJaMEp3Uml4SlFVRm9RaXhGUVVGelFqdEJRVU53UWl4VlFVRkphVWNzVlVGQlZTeEhRVUZITlVNc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNha0lzV1VGQldTeERRVUZEVml4SFFVRmlMRU5CUVdsQ1VpeEhRVUY0UXl4RFFVRnFRanRCUVVOQk9FVXNaMEpCUVZVc1EwRkJRemRGTEV0QlFWZ3NRMEZCYVVKdFF5eFBRVUZxUWl4SFFVRXlRbXhDTEZsQlFWa3NRMEZCUTFZc1IwRkJZaXhEUVVGcFFsQXNTMEZCTlVNN1FVRkRRVFpGTEdkQ1FVRlZMRU5CUVVOMlF5eFhRVUZZTEVOQlFYVkNUQ3hSUVVGUkxFTkJRVU5uUXl4alFVRlVMRU5CUVhkQ2NrWXNTVUZCU1N4SFFVRkhMRWxCUVM5Q0xFTkJRWFpDTzBGQlEwRXNZVUZCVDJsSExGVkJRVkE3UVVGRFJEczdRVUZGUkN4aFFVRlRlRU1zVVVGQlZDeERRVUZyUW5ORExFdEJRV3hDTEVWQlFYbENPMEZCUTNaQ0xGVkJRVWxITEZsQlFVbzdRVUZEUVN4VlFVRkpReXhSUVVGUkxFZEJRVWNzVVVGQlpqczdRVUZEUVN4alFVRlJMRTlCUVU5S0xFdEJRV1k3UVVGRFJTeGhRVUZMTEZGQlFVdzdRVUZEUlVjc2MwSkJRVmtzUjBGQlJ6ZERMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlExUXNWMEZCWWl4RFFVRjVRbFFzUjBGQmFFUXNRMEZCWmp0QlFVTkJLMFVzYzBKQlFWa3NRMEZCUXpsRkxFdEJRV0lzUTBGQmJVSnRReXhQUVVGdVFpeEhRVUUyUW14Q0xGbEJRVmtzUTBGQlExUXNWMEZCWWl4RFFVRjVRbElzUzBGQmRFUTdRVUZEUVRoRkxITkNRVUZaTEVOQlFVTjRReXhYUVVGaUxFTkJRWGxDVEN4UlFVRlJMRU5CUVVOblF5eGpRVUZVTEVOQlFYZENWU3hMUVVGTExFTkJRVU53UWl4UlFVRk9MRVZCUVhoQ0xFTkJRWHBDTzBGQlEwRTdPMEZCUTBZc1lVRkJTeXhSUVVGTU8wRkJRMFYxUWl4elFrRkJXU3hIUVVGSE4wTXNVVUZCVVN4RFFVRkRReXhoUVVGVUxFTkJRWFZDYWtJc1dVRkJXU3hEUVVGRFVpeFhRVUZpTEVOQlFYbENWaXhIUVVGb1JDeERRVUZtTzBGQlEwRXJSU3h6UWtGQldTeERRVUZET1VVc1MwRkJZaXhEUVVGdFFtMURMRTlCUVc1Q0xFZEJRVFpDYkVJc1dVRkJXU3hEUVVGRFVpeFhRVUZpTEVOQlFYbENWQ3hMUVVGMFJEdEJRVU5CT0VVc2MwSkJRVmtzUTBGQlEzaERMRmRCUVdJc1EwRkJlVUpNTEZGQlFWRXNRMEZCUTJkRExHTkJRVlFzUTBGQmQwSXNUVUZCVFZVc1MwRkJUaXhIUVVGakxFZEJRWFJETEVOQlFYcENPMEZCUTBFN08wRkJRMFlzWVVGQlN5eFJRVUZNTzBGQlEwVkhMSE5DUVVGWkxFZEJRVWMzUXl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU5RTEZkQlFXSXNRMEZCZVVKWUxFZEJRV2hFTEVOQlFXWTdRVUZEUVN0RkxITkNRVUZaTEVOQlFVTTVSU3hMUVVGaUxFTkJRVzFDYlVNc1QwRkJia0lzUjBGQk5rSnNRaXhaUVVGWkxFTkJRVU5RTEZkQlFXSXNRMEZCZVVKV0xFdEJRWFJFTzBGQlEwRTRSU3h6UWtGQldTeERRVUZEZUVNc1YwRkJZaXhEUVVGNVFrd3NVVUZCVVN4RFFVRkRaME1zWTBGQlZDeERRVUYzUWxVc1MwRkJlRUlzUTBGQmVrSTdRVUZEUVRzN1FVRkRSaXhoUVVGTExGTkJRVXc3UVVGRFJVY3NjMEpCUVZrc1IwRkJSemRETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMDRzV1VGQllpeERRVUV3UWxvc1IwRkJha1FzUTBGQlpqdEJRVU5CSzBVc2MwSkJRVmtzUTBGQlF6bEZMRXRCUVdJc1EwRkJiVUp0UXl4UFFVRnVRaXhIUVVFMlFteENMRmxCUVZrc1EwRkJRMDRzV1VGQllpeERRVUV3UWxnc1MwRkJka1E3UVVGRFFUaEZMSE5DUVVGWkxFTkJRVU40UXl4WFFVRmlMRU5CUVhsQ1RDeFJRVUZSTEVOQlFVTm5ReXhqUVVGVUxFTkJRWGRDVlN4TFFVRjRRaXhEUVVGNlFqdEJRVU5CT3p0QlFVTkdMR0ZCUVV0SkxGRkJRVXc3UVVGRFJVUXNjMEpCUVZrc1IwRkJSemRETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMHdzVTBGQllpeERRVUYxUW1Jc1IwRkJPVU1zUTBGQlpqdEJRVU5CSzBVc2MwSkJRVmtzUTBGQlF6bEZMRXRCUVdJc1EwRkJiVUp0UXl4UFFVRnVRaXhIUVVFMlFteENMRmxCUVZrc1EwRkJRMHdzVTBGQllpeERRVUYxUWxvc1MwRkJjRVE3UVVGRFFUaEZMSE5DUVVGWkxFTkJRVU40UXl4WFFVRmlMRU5CUVhsQ1RDeFJRVUZSTEVOQlFVTm5ReXhqUVVGVUxFTkJRWGRDVlN4TFFVRjRRaXhEUVVGNlFqdEJRVU5CTzBGQmVrSktPenRCUVRKQ1FTeGhRVUZQUnl4WlFVRlFPMEZCUTBRN08wRkJSVVFzWVVGQlV6VkVMR2xDUVVGVUxFTkJRVEpDT0VRc1VVRkJNMElzUlVGQmNVTkRMRk5CUVhKRExFVkJRV2RFTzBGQlF6bERMRlZCUVVsRExFMUJRVTBzUjBGQlJ5eEZRVUZpT3p0QlFVTkJMRmRCUVVzc1NVRkJTVE5GTEVkQlFWUXNTVUZCWjBKNVJTeFJRVUZvUWl4RlFVRXdRanRCUVVONFFrVXNZMEZCVFN4RFFVRkRNMFVzUjBGQlJDeERRVUZPTEVkQlFXTm9ReXhOUVVGTkxFTkJRVU0wUXl4TlFVRlFMRU5CUVdNc1JVRkJaQ3hGUVVGclFqWkVMRkZCUVZFc1EwRkJRM3BGTEVkQlFVUXNRMEZCTVVJc1JVRkJhVU13UlN4VFFVRlRMRU5CUVVNeFJTeEhRVUZFTEVOQlFURkRMRU5CUVdRN1FVRkRSRHM3UVVGRFJDeGhRVUZQTWtVc1RVRkJVRHRCUVVORU96dEJRVVZFTEZkQlFVOXVSQ3hOUVVGTkxFVkJRV0k3UVVGRFNEczdRVUV6VFhkQ0xFTTdPenM3T3pzN096czdPenRCUTBZM1FqdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPMEZCVFVFc1RVRkJUVzlFTEZWQlFVNHNVMEZCZVVKRExIbEVRVUZSTEVOQlFVTkRMRTlCUVZRc1EwRkJhVUl4U0N4dFJFRkJha0lzUlVGRGFrSTdRVUZCUlRKSUxFMUJRVWtzUlVGQlF5eERRVUZEUXl3clJFRkJSQ3hEUVVGUU8wRkJRMFZETEV0QlFVY3NSVUZCUXl4RFFVRkRReXc0UkVGQlJEdEJRVVJPTEVOQlJHbENMRU5CUVhwQ0xFTkJSV2RETzBGQlF6VkNOMGdzWVVGQlZ5eEhRVUZGTzBGQlExUTdRVUZEUVN4VFFVRkxPRWdzVlVGQlRDeEhRVUZyUWl4RlFVRnNRanRCUVVOSU96dEJRVVZFTDBjc1dVRkJWU3hEUVVGRFF5eEpRVUZFTEVWQlFVMDdRVUZEV2l4UlFVRkpLMGNzUzBGQlN5eEhRVUZITzBGQlFVTXZSeXhWUVVGRU8wRkJRVTluU0N4bFFVRlRMRVZCUVVVc1NVRkJTWEpFTEVsQlFVbzdRVUZCYkVJc1MwRkJXanRCUVVOQkxGTkJRVXR0UkN4VlFVRk1MRU5CUVdkQ1J5eEpRVUZvUWl4RFFVRnhRa1lzUzBGQmNrSTdRVUZEUVN4UlFVRkpSeXhYUVVGWExFZEJRVWNzUlVGQmJFSTdRVUZEUVN4VFFVRkxMMGdzUjBGQlRDeERRVUZWTEVkQlFVVXJTQ3hYUVVGWkxFZEJRVVZJTEV0QlFVc3NRMEZCUXk5SExFbEJRVXNzWTBGQllTdEhMRXRCUVVzc1EwRkJRME1zVTBGQlZTeEZRVUZzUlR0QlFVTklPenRCUVVORUwwY3NWVUZCVVN4SFFVRkZPMEZCUTA0c1VVRkJSeXhMUVVGTE5rY3NWVUZCVEN4RFFVRm5RbXBGTEUxQlFXaENMRWRCUVhsQ0xFTkJRVFZDTEVWQlFUaENPMEZCUXpGQ0xGVkJRVWxyUlN4TFFVRkxMRWRCUVVjc1MwRkJTMFFzVlVGQlRDeERRVUZuUWtzc1IwRkJhRUlzUlVGQldqdEJRVU5CTEZWQlFVbEVMRmRCUVZjc1IwRkJSeXhGUVVGc1FqdEJRVU5CTEZkQlFVc3ZTQ3hIUVVGTUxFTkJRVlVzUjBGQlJTdElMRmRCUVZrc1IwRkJSVWdzUzBGQlN5eERRVUZETDBjc1NVRkJTeXhsUVVGbExFbEJRVWt5UkN4SlFVRktMRXRCUVdGdlJDeExRVUZMTEVOQlFVTkRMRk5CUVZjc1QwRkJiRVk3UVVGRFNEdEJRVU5LT3p0QlFXeENNa0k3TzBGQmIwSnFRaXh0UlVGQlNWUXNWVUZCU2l4RlFVRm1MRVU3T3pzN096czdPenM3T3p0QlEyaERRVHRCUVVGQk8wRkJRVUU3UVVGQlFUczdRVUZGUVN4TlFVRk5TU3hoUVVGaExFZEJRVWxUTEZGQlFVUXNTVUZCWVN4alFVRmpRU3hSUVVGa0xFTkJRWE5DTzBGQlEzSkVka2dzVTBGQlR5eERRVUZEZDBnc1QwRkJSQ3hGUVVGVE8wRkJRMW9zVTBGQlMwTXNWVUZCVEN4SFFVRnJRaXhMUVVGc1FqdEJRVU5JT3p0QlFVTkVia2tzUzBGQlJ5eERRVUZEVnl4UFFVRkVMRVZCUVZNN1FVRkRVanRCUVVOQkxGTkJRVXQzU0N4VlFVRk1MRWRCUVd0Q0xFdEJRV3hDT3p0QlFVTkJMRkZCUVVjc1MwRkJTeTlJTEV0QlFVd3NTVUZCWXl4TFFVRkxUaXhqUVVGTUxFTkJRVzlDTEV0QlFYQkNMRU5CUVdwQ0xFVkJRVFJETzBGQlEzaERMR0ZCUVU4c1NVRkJVRHRCUVVOSU96dEJRVU5FYzBrc1YwRkJUeXhEUVVGRGNFa3NSMEZCVWl4RFFVRlpWeXhQUVVGYU8wRkJRMGc3TzBGQlEwUkpMR1ZCUVdFc1EwRkJRME1zUzBGQlJDeEZRVUZQTzBGQlEyaENMRk5CUVV0eFNDeGpRVUZNTEVsQlFYVkNMRU5CUVhaQ08wRkJRMEVzVTBGQlMwWXNWVUZCVEN4SFFVRnJRaXhKUVVGSlJ5eG5SRUZCU2l4RFFVRnZRaXhGUVVGd1FpeEZRVUYzUWtFc2IwUkJRVUVzUTBGQmIwSkRMR05CUVRWRExFTkJRV3hDTzBGQlEwRXNVMEZCUzBvc1ZVRkJUQ3hEUVVGblFrc3NVVUZCYUVJc1EwRkJlVUo0U0N4TFFVRjZRanRCUVVOSU96dEJRVU5FUXl4blFrRkJZeXhEUVVGRGQwZ3NaVUZCUkN4RlFVRnBRanRCUVVNelFpeFJRVUZITEVOQlFVTXNTMEZCUzA0c1ZVRkJWQ3hGUVVGdlFqdEJRVU5vUWl4WFFVRkxjRWdzWVVGQlREdEJRVU5JT3p0QlFVTkVMRk5CUVV0elNDeGpRVUZNTEVsQlFYVkNMRU5CUVhaQ08wRkJRMEVzVTBGQlMwWXNWVUZCVEN4RFFVRm5RazhzVFVGQmFFSXNRMEZCZFVJc1MwRkJTMHdzWTBGQk5VSTdRVUZEU0RzN1FVRkRSRzVJTEdGQlFWY3NSMEZCUlR0QlFVTlVMRk5CUVV0cFNDeFZRVUZNTEVOQlFXZENVU3hKUVVGb1FqdEJRVU5CTEZOQlFVdE9MR05CUVV3c1IwRkJjMElzUTBGQmRFSTdRVUZEU0RzN1FVRkRSSFJKTEU5QlFVc3NRMEZCUTFrc1QwRkJSQ3hGUVVGVE8wRkJRMVlzVTBGQlMzZElMRlZCUVV3c1IwRkJhMElzUzBGQmJFSTdPMEZCUTBFc1VVRkJSeXhMUVVGTEwwZ3NTMEZCVEN4SlFVRmpMRXRCUVV0T0xHTkJRVXdzUTBGQmIwSXNUMEZCY0VJc1EwRkJha0lzUlVGQk9FTTdRVUZETVVNc1lVRkJUeXhKUVVGUU8wRkJRMGc3TzBGQlEwUnpTU3hYUVVGUExFTkJRVU55U1N4TFFVRlNMRU5CUVdOWkxFOUJRV1E3UVVGRFNEczdRVUZzUTI5RUxFTkJRWHBFT3p0QlFYRkRaVFpITERSRlFVRm1MRVU3T3pzN096czdPenM3T3p0QlEzWkRRVHRCUVVGQk8wRkJRVUU3TzBGQlEwRXNUVUZCVFVVc1dVRkJXU3hIUVVGSlR5eFJRVUZFTEVsQlFXRXNZMEZCWTBFc1VVRkJaQ3hEUVVGelFqdEJRVU53UkhaSUxGTkJRVThzUTBGQlEydEpMRlZCUVZVc1IwRkJReXhKUVVGYUxFVkJRV2xDTzBGQlEzQkNRU3hqUVVGVkxFZEJRVWRCTEZWQlFWVXNTVUZCUlRGRkxGRkJRVkVzUTBGQlF6SkZMRWxCUVd4RE8wRkJRMEVzVVVGQlNYUkNMRWxCUVVrc1IwRkJSM0pFTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFpeEpRVUYyUWl4RFFVRllPMEZCUTBGdlJDeFJRVUZKTEVOQlFVTjBSaXhMUVVGTUxFTkJRVmR0UXl4UFFVRllMRWRCUVhGQ0xIZENRVUZ5UWp0QlFVTkJkMFVzWTBGQlZTeERRVUZEY2tVc1YwRkJXQ3hEUVVGMVFtZEVMRWxCUVhaQ08wRkJRMEVzVTBGQlMzVkNMRTlCUVV3c1IwRkJaVVlzVlVGQlpqdEJRVU5CTEZOQlFVdEhMRkZCUVV3c1IwRkJaMEpJTEZWQlFWVXNRMEZCUTBrc2IwSkJRVmdzUTBGQlowTXNTVUZCYUVNc1JVRkJjME1zUTBGQmRFTXNRMEZCYUVJN1FVRkRTRHM3UVVGRFJFTXNZMEZCV1N4RFFVRkRhRVlzVDBGQlR5eEhRVUZETEVsQlFWUXNSVUZCWXp0QlFVTjBRa0VzVjBGQlR5eEhRVUZIUVN4UFFVRlBMRWxCUVVrc1MwRkJTelpGTEU5QlFURkNPMEZCUTBFM1JTeFhRVUZQTEVOQlFVTnBSaXhUUVVGU0xFZEJRVzlDYWtZc1QwRkJUeXhEUVVGRGEwWXNXVUZCVWl4SFFVRjFRbXhHTEU5QlFVOHNRMEZCUTIxR0xGbEJRVzVFTzBGQlEwZzdPMEZCUTBSRExGVkJRVkVzUTBGQlEwTXNZMEZCUkN4RlFVRm5RanRCUVVOd1FqdEJRVU5CTEZGQlFVbERMRTlCUVU4c1IwRkJSeXhMUVVGTFVpeFJRVUZNTEVOQlFXTkRMRzlDUVVGa0xFTkJRVzFETEVsQlFXNURMRU5CUVdRN1FVRkRRU3hSUVVGSmVrSXNTVUZCU1N4SFFVRkhaME1zVDBGQlR5eERRVUZEUVN4UFFVRlBMRU5CUVVNM1JpeE5RVUZTTEVkQlFXVXNRMEZCYUVJc1EwRkJiRUk3TzBGQlEwRXNVVUZCUnl4RFFVRkROa1FzU1VGQlJDeEpRVUZUUVN4SlFVRkpMRU5CUVVOcFF5eFRRVUZNTEVOQlFXVkRMRkZCUVdZc1EwRkJkMElzYVVKQlFYaENMRU5CUVZvc1JVRkJkVVE3UVVGRGJrUTdRVUZEUVd4RExGVkJRVWtzUjBGQlIzSkVMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUWl4SlFVRjJRaXhEUVVGUU8wRkJRMEZ2UkN4VlFVRkpMRU5CUVVOcFF5eFRRVUZNTEVOQlFXVkZMRWRCUVdZc1EwRkJiVUlzYVVKQlFXNUNPMEZCUTBFc1YwRkJTMWdzVVVGQlRDeERRVUZqZUVVc1YwRkJaQ3hEUVVFd1FtZEVMRWxCUVRGQ08wRkJRMGc3TzBGQlEwUXNVVUZCU1c5RExGRkJRVkVzUjBGQlIyeEpMRzFFUVVGUkxFTkJRVU5ETEZkQlFWUXNRMEZCY1VJMFNDeGpRVUZ5UWl4RFFVRm1PMEZCUTBFc1VVRkJTVTBzU1VGQlNTeEhRVUZITEVsQlFVbHdSaXhKUVVGS0xFVkJRVmc3UVVGRFFTdERMRkZCUVVrc1EwRkJRM05ETEZOQlFVd3NSMEZCYTBJc1owUkJRU3REUkN4SlFVRkxMRTFCUVhSRk8wRkJRMEZ5UXl4UlFVRkpMRU5CUVVOb1JDeFhRVUZNTEVOQlFXbENiMFlzVVVGQmFrSTdRVUZEUVN4VFFVRkxWaXhaUVVGTU8wRkJRMGc3TzBGQlEwUnFTaXhMUVVGSExFTkJRVU5YTEU5QlFVUXNSVUZCVXp0QlFVTlNMRkZCUVVjc1MwRkJTMUFzUzBGQlRDeEpRVUZqTEV0QlFVdE9MR05CUVV3c1EwRkJiMElzUzBGQmNFSXNRMEZCYWtJc1JVRkJORU03UVVGRGVFTXNZVUZCVHl4SlFVRlFPMEZCUTBnN08wRkJRMFFzVVVGQlJ5eERRVUZETEV0QlFVdHBTaXhSUVVGT0xFbEJRV3RDTEVOQlFVTXNTMEZCUzBFc1VVRkJUQ3hEUVVGamVFVXNWMEZCY0VNc1JVRkJaMFE3UVVGRE5VTXNWMEZCU3pkRUxFOUJRVXc3UVVGRFNEczdRVUZEUkN4UlFVRkpOa2NzU1VGQlNTeEhRVUZIY2tRc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNMRWxCUVhaQ0xFTkJRVmc3UVVGRFFXOUVMRkZCUVVrc1EwRkJRM1JHTEV0QlFVd3NRMEZCVjIxRExFOUJRVmdzUjBGQmNVSXNiVU5CUVhKQ08wRkJRMEVzVVVGQlNYVkdMRkZCUVZFc1IwRkJSMnhKTEcxRVFVRlJMRU5CUVVORExGZEJRVlFzUTBGQmNVSm1MRTlCUVhKQ0xFTkJRV1k3UVVGRFFTeFJRVUZKYVVvc1NVRkJTU3hIUVVGSExFbEJRVWx3Uml4SlFVRktMRVZCUVZnN1FVRkRRU3RETEZGQlFVa3NRMEZCUTNORExGTkJRVXdzUjBGQmEwSXNaMFJCUVN0RFJDeEpRVUZMTEUxQlFYUkZPMEZCUTBGeVF5eFJRVUZKTEVOQlFVTm9SQ3hYUVVGTUxFTkJRV2xDYjBZc1VVRkJha0k3UVVGRFFTeFRRVUZMV2l4UlFVRk1MRU5CUVdONFJTeFhRVUZrTEVOQlFUQkNaMFFzU1VGQk1VSTdRVUZEUVN4VFFVRkxNRUlzV1VGQlREdEJRVU5CWWl4WFFVRlBMRU5CUVVOd1NTeEhRVUZTTEVOQlFWbFhMRTlCUVZvN1FVRkRTRHM3UVVGRlJGb3NUMEZCU3l4RFFVRkRXU3hQUVVGRUxFVkJRVk03UVVGRFZpeFJRVUZITEV0QlFVdFFMRXRCUVV3c1NVRkJZeXhMUVVGTFRpeGpRVUZNTEVOQlFXOUNMRTlCUVhCQ0xFTkJRV3BDTEVWQlFUaERPMEZCUXpGRExHRkJRVThzU1VGQlVEdEJRVU5JTEV0QlNGTXNRMEZKVmpzN08wRkJRMEZ6U1N4WFFVRlBMRU5CUVVOeVNTeExRVUZTTEVOQlFXTlpMRTlCUVdRN1FVRkRTRHM3UVVGeVJHMUVMRU5CUVhoRU96dEJRWGRFWlN0SExESkZRVUZtTEVVN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEZWtSQkxEaEVPenM3T3pzN096czdPenRCUTBGQkxEQkVJaXdpWm1sc1pTSTZJa0JqWVhWellXeE9aWFF2Ykc5bkxuZGxZaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29jbVZ4ZFdseVpTaGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaWtzSUhKbGNYVnBjbVVvWENKamJHa3RjSEp2WjNKbGMzTmNJaWtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9XMXdpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpTENCY0ltTnNhUzF3Y205bmNtVnpjMXdpWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSkFZMkYxYzJGc1RtVjBMMnh2WjF3aVhTQTlJR1poWTNSdmNua29jbVZ4ZFdseVpTaGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaWtzSUhKbGNYVnBjbVVvWENKamJHa3RjSEp2WjNKbGMzTmNJaWtwTzF4dVhIUmxiSE5sWEc1Y2RGeDBjbTl2ZEZ0Y0lrQmpZWFZ6WVd4T1pYUXZiRzluWENKZElEMGdabUZqZEc5eWVTaHliMjkwVzF3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aVhTd2djbTl2ZEZ0Y0ltTnNhUzF3Y205bmNtVnpjMXdpWFNrN1hHNTlLU2gwYUdsekxDQm1kVzVqZEdsdmJpaGZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4RlgyTmhkWE5oYkY5dVpYUmZkWFJwYkhOZlh5d2dYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpiR2xmY0hKdlozSmxjM05mWHlrZ2UxeHVjbVYwZFhKdUlDSXNJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQm5aWFE2SUdkbGRIUmxjaUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWkdWbWFXNWxJRjlmWlhOTmIyUjFiR1VnYjI0Z1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5SUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3lrZ2UxeHVJRngwWEhScFppaDBlWEJsYjJZZ1UzbHRZbTlzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuTENCN0lIWmhiSFZsT2lBblRXOWtkV3hsSnlCOUtUdGNiaUJjZEZ4MGZWeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dKMTlmWlhOTmIyUjFiR1VuTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWTNKbFlYUmxJR0VnWm1GclpTQnVZVzFsYzNCaFkyVWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnTVRvZ2RtRnNkV1VnYVhNZ1lTQnRiMlIxYkdVZ2FXUXNJSEpsY1hWcGNtVWdhWFJjYmlCY2RDOHZJRzF2WkdVZ0ppQXlPaUJ0WlhKblpTQmhiR3dnY0hKdmNHVnlkR2xsY3lCdlppQjJZV3gxWlNCcGJuUnZJSFJvWlNCdWMxeHVJRngwTHk4Z2JXOWtaU0FtSURRNklISmxkSFZ5YmlCMllXeDFaU0IzYUdWdUlHRnNjbVZoWkhrZ2JuTWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnT0h3eE9pQmlaV2hoZG1VZ2JHbHJaU0J5WlhGMWFYSmxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuUWdQU0JtZFc1amRHbHZiaWgyWVd4MVpTd2diVzlrWlNrZ2UxeHVJRngwWEhScFppaHRiMlJsSUNZZ01Ta2dkbUZzZFdVZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLSFpoYkhWbEtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlEZ3BJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwYVdZb0tHMXZaR1VnSmlBMEtTQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhaaGJIVmxJQ1ltSUhaaGJIVmxMbDlmWlhOTmIyUjFiR1VwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGRtRnlJRzV6SUQwZ1QySnFaV04wTG1OeVpXRjBaU2h1ZFd4c0tUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlLRzV6S1R0Y2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHNXpMQ0FuWkdWbVlYVnNkQ2NzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z2RtRnNkV1U2SUhaaGJIVmxJSDBwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTWlBbUppQjBlWEJsYjJZZ2RtRnNkV1VnSVQwZ0ozTjBjbWx1WnljcElHWnZjaWgyWVhJZ2EyVjVJR2x1SUhaaGJIVmxLU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb2JuTXNJR3RsZVN3Z1puVnVZM1JwYjI0b2EyVjVLU0I3SUhKbGRIVnliaUIyWVd4MVpWdHJaWGxkT3lCOUxtSnBibVFvYm5Wc2JDd2dhMlY1S1NrN1hHNGdYSFJjZEhKbGRIVnliaUJ1Y3p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0F3S1R0Y2JpSXNJaThxS2x4dUlDb2dWR2hwY3lCamJHRnpjeUJ3Y205MmFXUmxaQ0IwYUdVZ1hHNGdLaUJBWTJ4aGMzTWdRbUZ6WlV4dloxeHVJQ292WEc1amJHRnpjeUJDWVhObFRHOW5aMlZ5ZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NsN1hHNGdJQ0FnSUNBZ0lIUm9hWE11UVdOalpYQjBaV1JNWlhabGJITWdQU0I3WkdWaWRXYzZJREFzSUd4dlp6b3hMQ0IzWVhKdWFXNW5PaklzSUdWeWNtOXlPaUF6ZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV5UVdOalpYQjBaV1JNWlhabGJITWdQU0I3TURvblpHVmlkV2NuTENBeE9pQW5iRzluSnl3Z01qb2dKM2RoY201cGJtY25MQ0F6T2lBblpYSnliM0luZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzWlhabGJDQTlJSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE5iSjJSbFluVm5KMTA3WEc0Z0lDQWdmVnh1SUNBZ0lITmxkQ0JNWlhabGJDaHNaWFpsYkNsN1hHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE5iYkdWMlpXeGRJVDA5ZFc1a1pXWnBibVZrS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJHVjJaV3dnUFNCMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4elcyeGxkbVZzWFRzZ0lDQWdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWld4elpYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtHQWtlMnhsZG1Wc2ZTQnRkWE4wSUdKbElHOXVaU0J2WmlBa2UwOWlhbVZqZEM1clpYbHpLSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE1wZldBcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUdkbGRDQk1aWFpsYkNncGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV5UVdOalpYQjBaV1JNWlhabGJITmJkR2hwY3k1c1pYWmxiRjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl1Ym1WamRDZ3BlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmFXMXdiR1Z0Wlc1MElISmxjWFZwY21Wa0p5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHOW5LRzFsYzNOaFoyVXBlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmFXMXdiR1Z0Wlc1MElISmxjWFZwY21Wa0p5azdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJR1Z5Y205eUtHMWxjM05oWjJVcGUxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYVcxd2JHVnRaVzUwSUhKbGNYVnBjbVZrSnlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWkdWaWRXY29iV1Z6YzJGblpTbDdYRzRnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0NkcGJYQnNaVzFsYm5RZ2NtVnhkV2x5WldRbktUdGNiaUFnSUNCOVhHNWNiaUFnSUNCbmNtOTFjRUpsWjJsdUtHNWhiV1VwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaM0p2ZFhCRmJtUW9LWHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oybHRjR3hsYldWdWRDQnlaWEYxYVhKbFpDY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIQnliMmR5WlhOelFtVm5hVzRvY21GdVoyVXBlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmFXMXdiR1Z0Wlc1MElISmxjWFZwY21Wa0p5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NISnZaM0psYzNOVmNHUmhkR1VvYldWemMyRm5aU2w3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtDZHBiWEJzWlcxbGJuUWdjbVZ4ZFdseVpXUW5LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQndjbTluY21WemMwVnVaQ2h0WlhOellXZGxLWHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oybHRjR3hsYldWdWRDQnlaWEYxYVhKbFpDY3BPMXh1SUNBZ0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUW1GelpVeHZaMmRsY2pzaUxDSmxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJSFJsY20xTWIyZG5aWElnZlNCbWNtOXRJQ2N1TDNSbGNtMU1iMmRuWlhJbk8xeHVYRzVsZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUV4dloyZGxjazFwZUdsdWN5QjlJR1p5YjIwZ0p5NHZiRzluWjJWeUxtMXBlR2x1Y3ljN1hHNWxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJRUpoYzJWTWIyZG5aWElnZlNCbWNtOXRJQ2N1TDJKaGMyVk1iMmRuWlhJbk8xeHVYRzRpTENKcGJYQnZjblFnZTJSbFptRjFiSFFnWVhNZ1FtRnpaVXh2WjJkbGNpQjlJR1p5YjIwZ0p5NHZZbUZ6WlV4dloyZGxjaWM3WEc1cGJYQnZjblFnZXlCaGMzTmxjblFnZlNCbWNtOXRJQ2RqWVhWellXd3RibVYwTG5WMGFXeHpKenRjYm1OdmJuTjBJRXh2WjJkbGNrMXBlR2x1Y3lBOUlDaENZWE5sWkVOc1lYTnpLVDArSUdOc1lYTnpJR1Y0ZEdWdVpITWdRbUZ6WldSRGJHRnpjM3RjYmlBZ0lDQmNiaUFnSUNCelpYUWdURzluWjJWeUtHeHZaMmRsY2lsN1hHNGdJQ0FnSUNBZ0lHRnpjMlZ5ZEM1aVpVbHVjM1JoYm1ObFQyWW9iRzluWjJWeUxDQkNZWE5sVEc5bloyVnlLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMmRuWlhJZ1BTQnNiMmRuWlhJN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHZGxkQ0JNYjJkblpYSW9LWHRjYmlBZ0lDQWdJQ0FnYVdZb0lYUm9hWE11Ykc5bloyVnlLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLQ2RzYjJkblpYSWdhWE1nYm05MElITmxkQ2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbXh2WjJkbGNqdGNiaUFnSUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JNYjJkblpYSk5hWGhwYm5NN0lpd2lMeThnYjNKcFoybHVJR052WkdVZ1puSnZiU0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2YkhWamVXZHBiR0psY25RdmFuTnZiaTFrYVhOd2JHRjVMMkpzYjJJdmJXRnpkR1Z5TDJwemIyNHRaR2x6Y0d4aGVTNXFjMXh1THk4Z1EyOXdlWEpwWjJoMElDaGpLU0F5TURFM0lFeDFZM2tnUjJsc1ltVnlkRnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1NuTnZibFpwWlhkN1hHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb0tYdGNiaUFnSUNCOVhHNGdJQ0FnYzNSaGRHbGpJRXBUVDA1RWFYTndiR0Y1S0dwemIyNHNJRzl3Wlc1TVpYWmxiSE5CY21jc0lITjBlV3hsVDNCMGFXOXVjMEZ5WnlrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnUkVWR1FWVk1WRjlUVkZsTVJWOVBVRlJKVDA1VElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUhKdmIzUTZJSHNnZEdGbk9pQW5jSEpsSnl3Z2MzUjViR1U2SUNkd1lXUmthVzVuT2lBMWNIZzdJR1p2Ym5RdGMybDZaVG9nTVhKbGJUc25JSDBzWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZEYjI1MFlXbHVaWEk2SUhzZ2RHRm5PaUFuWkdsMkp5d2djM1I1YkdVNklDZHRZWEpuYVc0dFltOTBkRzl0T2lBemNIZzdKeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lIUnBkR3hsT2lCN0lIUmhaem9nSjNOd1lXNG5MQ0J6ZEhsc1pUb2dKMk4xY25OdmNqb2djRzlwYm5SbGNqc25JSDBzWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZVWlhoME9pQjdJSFJoWnpvZ0ozTndZVzRuTENCemRIbHNaVG9nSnljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0J2Y0dWdVFuVjBkRzl1T2lCN0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdGbk9pQW5jM0JoYmljc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEhsc1pUb2dKMlJwYzNCc1lYazZJR2x1YkdsdVpTMWliRzlqYXpzZ2JXRnlaMmx1T2lBd2NIZ2dOM0I0SURCd2VDQXljSGc3SUdKdmNtUmxjaTEwYjNBNklEVndlQ0J6YjJ4cFpDQjBjbUZ1YzNCaGNtVnVkRHNnSjF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcklDZGliM0prWlhJdFltOTBkRzl0T2lBMWNIZ2djMjlzYVdRZ2RISmhibk53WVhKbGJuUTdJR0p2Y21SbGNpMXNaV1owT2lBMWNIZ2djMjlzYVdRZ1lteGhZMnM3Snl4Y2JpQWdJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0FnSUdOdmJuUmxiblJ6UTI5dWRHRnBibVZ5T2lCN0lIUmhaem9nSjJScGRpY3NJSE4wZVd4bE9pQW5jR0ZrWkdsdVp5MXNaV1owT2lBeE9IQjRPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQnJaWGxXWVd4MVpWQmhhWEk2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5aR2x6Y0d4aGVUb2dZbXh2WTJzN0lHMWhjbWRwYmkxaWIzUjBiMjA2SURKd2VEc25JSDBzWEc0Z0lDQWdJQ0FnSUNBZ2EyVjVPaUI3SUhSaFp6b2dKM053WVc0bkxDQnpkSGxzWlRvZ0oyTnZiRzl5T2lCa1lYSnJZbXgxWlRzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnYzNsdFltOXNWbUZzZFdVNklIc2dkR0ZuT2lBbmMzQmhiaWNzSUhOMGVXeGxPaUFuWTI5c2IzSTZJR1JoY210bmNtVmxianNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdjM1J5YVc1blZtRnNkV1U2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5ZMjlzYjNJNklHTnlhVzF6YjI0N0p5QjlMRnh1SUNBZ0lDQWdJQ0FnSUc1MWJXSmxjbFpoYkhWbE9pQjdJSFJoWnpvZ0ozTndZVzRuTENCemRIbHNaVG9nSjJOdmJHOXlPaUJpYkhWbE95Y2dmU3hjYmlBZ0lDQWdJQ0FnSUNCaWIyOXNaV0Z1Vm1Gc2RXVTZJSHNnZEdGbk9pQW5jM0JoYmljc0lITjBlV3hsT2lBblkyOXNiM0k2SUdKc2RXVTdKeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lHNTFiR3hXWVd4MVpUb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNkamIyeHZjam9nWW14MVpUc25JSDBzWEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ2Y0dWdVRHVjJaV3h6SUQwZ2FYTk9ZVTRvY0dGeWMyVkpiblFvYjNCbGJreGxkbVZzYzBGeVp5a3BJRDhnU1c1bWFXNXBkSGtnT2lCd1lYSnpaVWx1ZENodmNHVnVUR1YyWld4elFYSm5LVHRjYmlBZ0lDQWdJQ0FnZG1GeUlITjBlV3hsVDNCMGFXOXVjeUE5SUhSNWNHVnZaaUJ6ZEhsc1pVOXdkR2x2Ym5OQmNtY2dQVDA5SUNkdlltcGxZM1FuSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1B5QnRaWEpuWlZOMGVXeGxUM0IwYVc5dWN5aEVSVVpCVlV4VVgxTlVXVXhGWDA5UVZFbFBUbE1zSUhOMGVXeGxUM0IwYVc5dWMwRnlaeWxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSURvZ1JFVkdRVlZNVkY5VFZGbE1SVjlQVUZSSlQwNVRPMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JRTlpYW1WamRDNWhjM05wWjI0Z0lUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lFOWlhbVZqZEM1aGMzTnBaMjRnUFNCbWRXNWpkR2x2YmloMFlYSm5aWFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMFlYSm5aWFFnUFQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkRFlXNXViM1FnWTI5dWRtVnlkQ0IxYm1SbFptbHVaV1FnYjNJZ2JuVnNiQ0IwYnlCdlltcGxZM1FuS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQjBieUE5SUU5aWFtVmpkQ2gwWVhKblpYUXBPMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYVc1a1pYZ2dQU0F4T3lCcGJtUmxlQ0E4SUdGeVozVnRaVzUwY3k1c1pXNW5kR2c3SUdsdVpHVjRLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHNWxlSFJUYjNWeVkyVWdQU0JoY21kMWJXVnVkSE5iYVc1a1pYaGRPMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibVY0ZEZOdmRYSmpaU0FoUFNCdWRXeHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYm1WNGRFdGxlU0JwYmlCdVpYaDBVMjkxY21ObEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHNWxlSFJUYjNWeVkyVXNJRzVsZUhSTFpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnZXMjVsZUhSTFpYbGRJRDBnYm1WNGRGTnZkWEpqWlZ0dVpYaDBTMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBienRjYmlBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlISmxibVJsY2lncElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ1pXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvYzNSNWJHVlBjSFJwYjI1ekxuSnZiM1F1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11Y205dmRDNXpkSGxzWlR0Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNCcFppQW9hbk52YmlBOVBUMGdiblZzYkNCOGZDQnFjMjl1SUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUIyYjJsa1JXeGxiV1Z1ZENBOUlHZGxkRlpoYkhWbEtHNTFiR3dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gyYjJsa1JXeGxiV1Z1ZENrN1hHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hxYzI5dUlHbHVjM1JoYm1ObGIyWWdSR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHUmhkR1ZGYkdWdFpXNTBJRDBnWjJWMFZtRnNkV1VvYW5OdmJpNTBiMGxUVDFOMGNtbHVaeWdwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWkdGMFpVVnNaVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvZEhsd1pXOW1JR3B6YjI0Z0lUMDlJQ2R2WW1wbFkzUW5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYm05dVJYaHdZVzVrWVdKc1pVVnNaVzFsYm5RZ1BTQm5aWFJXWVd4MVpTaHFjMjl1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvYm05dVJYaHdZVzVrWVdKc1pVVnNaVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdkR2wwYkdVZ1BTQkJjbkpoZVM1cGMwRnljbUY1S0dwemIyNHBJRDhnSjBGeWNtRjVXeWNnS3lCcWMyOXVMbXhsYm1kMGFDQXJJQ2RkSnlBNklDZFBZbXBsWTNRbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIUm9hWE5NWlhabGJFbHpRMnh2YzJWa0lEMGdiM0JsYmt4bGRtVnNjeUE4SURFN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGUnBkR3hsS0hScGRHeGxMQ0J1ZFd4c0xDQjBhR2x6VEdWMlpXeEpjME5zYjNObFpDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGpiMjUyWlhKMFNuTnZibFJ2Uld4bGJXVnVkSE1vYW5OdmJpd2dNU2twTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1pXeGxiV1Z1ZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCamIyNTJaWEowU25OdmJsUnZSV3hsYldWdWRITW9hbk52Yml3Z2FXNWtaWGdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnZEdocGMweGxkbVZzU1hORGJHOXpaV1FnUFNCcGJtUmxlQ0ErSUc5d1pXNU1aWFpsYkhNN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUc1bGVIUk1aWFpsYkVselEyeHZjMlZrSUQwZ2FXNWtaWGdnS3lBeElENGdiM0JsYmt4bGRtVnNjenRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdZMjl1ZEdGcGJtVnlJRDBnWjJWMFEyOXVkR1Z1ZEhORGIyNTBZV2x1WlhJb2RHaHBjMHhsZG1Wc1NYTkRiRzl6WldRcE8xeHVJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQnFjMjl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1FYSnlZWGt1YVhOQmNuSmhlU2hxYzI5dVcydGxlVjBwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1aGNIQmxibVJEYUdsc1pDaG5aWFJVYVhSc1pTZ25RWEp5WVhsYkp5QXJJR3B6YjI1YmEyVjVYUzVzWlc1bmRHZ2dLeUFuWFNjc0lHdGxlU3dnYm1WNGRFeGxkbVZzU1hORGJHOXpaV1FwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5TG1Gd2NHVnVaRU5vYVd4a0tHTnZiblpsY25SS2MyOXVWRzlGYkdWdFpXNTBjeWhxYzI5dVcydGxlVjBzSUdsdVpHVjRJQ3NnTVNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNocWMyOXVXMnRsZVYwZ1BUMDlJRzUxYkd3Z2ZId2dhbk52Ymx0clpYbGRJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxtRndjR1Z1WkVOb2FXeGtLR2RsZEZOMFlXNWtZWEprVUdGcGNpaHJaWGtzSUc1MWJHd3BLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9hbk52Ymx0clpYbGRJR2x1YzNSaGJtTmxiMllnUkdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFUzUmhibVJoY21SUVlXbHlLR3RsZVN3Z2FuTnZibHRyWlhsZExuUnZTVk5QVTNSeWFXNW5LQ2twS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvZEhsd1pXOW1JR3B6YjI1YmEyVjVYU0E5UFQwZ0oyOWlhbVZqZENjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxtRndjR1Z1WkVOb2FXeGtLR2RsZEZScGRHeGxLQ2RQWW1wbFkzUW5MQ0JyWlhrc0lHNWxlSFJNWlhabGJFbHpRMnh2YzJWa0tTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNpNWhjSEJsYm1SRGFHbHNaQ2hqYjI1MlpYSjBTbk52YmxSdlJXeGxiV1Z1ZEhNb2FuTnZibHRyWlhsZExDQnBibVJsZUNBcklERXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1aGNIQmxibVJEYUdsc1pDaG5aWFJUZEdGdVpHRnlaRkJoYVhJb2EyVjVMQ0JxYzI5dVcydGxlVjBwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJQWW1wbFkzUXVaMlYwVDNkdVVISnZjR1Z5ZEhsVGVXMWliMnh6SUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQlBZbXBsWTNRdVoyVjBUM2R1VUhKdmNHVnlkSGxUZVcxaWIyeHpLR3B6YjI0cExtWnZja1ZoWTJnb1puVnVZM1JwYjI0b2MzbHRZbTlzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1aGNIQmxibVJEYUdsc1pDaG5aWFJUZEdGdVpHRnlaRkJoYVhJb2MzbHRZbTlzTG5SdlUzUnlhVzVuS0Nrc0lHcHpiMjViYzNsdFltOXNYU2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyNTBZV2x1WlhJN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z1oyVjBWR2wwYkdVb2RHbDBiR1ZVWlhoMExDQnZjSFJwYjI1aGJFdGxlU3dnYkdWMlpXeEpjME5zYjNObFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmpkWEp5Wlc1MGJIbERiRzl6WldRZ1BTQnNaWFpsYkVselEyeHZjMlZrTzF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJqYjI1MFlXbHVaWEpGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11ZEdsMGJHVkRiMjUwWVdsdVpYSXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXVkR2wwYkdWRGIyNTBZV2x1WlhJdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9KMlJoZEdFdGRHVnpkQ2NzSUNkMGFYUnNaVU52Ym5SaGFXNWxjaWNwTzF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUIwWlhoMFJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvYzNSNWJHVlBjSFJwYjI1ekxuUnBkR3hsVkdWNGRDNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUIwYVhSc1pVVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlM1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUhScGRHeGxSV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUQwZ2MzUjViR1ZQY0hScGIyNXpMblJwZEd4bExuTjBlV3hsTzF4dUlDQWdJQ0FnSUNBZ0lIUmxlSFJGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11ZEdsMGJHVlVaWGgwTG5OMGVXeGxPMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJSFJwZEd4bFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaG5aWFJQY0dWdVFuVjBkRzl1S0d4bGRtVnNTWE5EYkc5elpXUXBLVHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9iM0IwYVc5dVlXeExaWGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJsZUhSRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHZGxkRXRsZVNodmNIUnBiMjVoYkV0bGVTa3BPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjBaWGgwUld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNoa2IyTjFiV1Z1ZEM1amNtVmhkR1ZVWlhoMFRtOWtaU2gwYVhSc1pWUmxlSFFwS1R0Y2JpQWdJQ0FnSUNBZ0lDQjBhWFJzWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb2RHVjRkRVZzWlcxbGJuUXBPMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJSFJwZEd4bFJXeGxiV1Z1ZEM1dmJtTnNhV05ySUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRzl3Wlc1Q2RYUjBiMjRnUFNCMGFYUnNaVVZzWlcxbGJuUXVabWx5YzNSRGFHbHNaRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ2WW1wbFkzUkRiMjUwWlc1MGN5QTlJSFJwZEd4bFJXeGxiV1Z1ZEM1d1lYSmxiblJPYjJSbExtNWxlSFJUYVdKc2FXNW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ2IySnFaV04wUTI5dWRHVnVkSE11YzNSNWJHVXVaR2x6Y0d4aGVTQTlJR04xY25KbGJuUnNlVU5zYjNObFpDQS9JQ2RpYkc5amF5Y2dPaUFuYm05dVpTYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCdmNHVnVRblYwZEc5dUxuTjBlV3hsTG5SeVlXNXpabTl5YlNBOUlHTjFjbkpsYm5Sc2VVTnNiM05sWkNBL0lDZHliM1JoZEdVb09UQmtaV2NwSnlBNklDZHliM1JoZEdVb01HUmxaeWtuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRHeDVRMnh2YzJWa0lEMGdJV04xY25KbGJuUnNlVU5zYjNObFpEdGNiaUFnSUNBZ0lDQWdJQ0I5TzF4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2tWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb2RHbDBiR1ZGYkdWdFpXNTBLVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTI5dWRHRnBibVZ5Uld4bGJXVnVkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJuWlhSUGNHVnVRblYwZEc5dUtHeGxkbVZzU1hORGJHOXpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnWW5WMGRHOXVSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb2MzUjViR1ZQY0hScGIyNXpMbTl3Wlc1Q2RYUjBiMjR1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0JpZFhSMGIyNUZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXViM0JsYmtKMWRIUnZiaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0JpZFhSMGIyNUZiR1Z0Wlc1MExuTjBlV3hsTG5SeVlXNXpabTl5YlNBOUlHeGxkbVZzU1hORGJHOXpaV1FnUHlBbmNtOTBZWFJsS0RCa1pXY3BKeUE2SUNkeWIzUmhkR1VvT1RCa1pXY3BKenRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWW5WMGRHOXVSV3hsYldWdWREdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJpQm5aWFJEYjI1MFpXNTBjME52Ym5SaGFXNWxjaWhwYzBOc2IzTmxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJqYjI1MFlXbHVaWEpGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11WTI5dWRHVnVkSE5EYjI1MFlXbHVaWEl1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNnblpHRjBZUzEwWlhOMEp5d2dKMk52Ym5SbGJuUnpRMjl1ZEdGcGJtVnlKeWs3WEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxtTnZiblJsYm5SelEyOXVkR0ZwYm1WeUxuTjBlV3hsTzF4dUlDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMzUjViR1V1WkdsemNHeGhlU0E5SUNocGMwTnNiM05sWkNBL0lDZHViMjVsSnlBNklDZGliRzlqYXljcE8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjUwWVdsdVpYSkZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRk4wWVc1a1lYSmtVR0ZwY2loclpYa3NJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIQmhhWEpGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11YTJWNVZtRnNkV1ZRWVdseUxuUmhaeWs3WEc0Z0lDQWdJQ0FnSUNBZ2NHRnBja1ZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTVyWlhsV1lXeDFaVkJoYVhJdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ2NHRnBja1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFMyVjVLR3RsZVNrcE8xeHVJQ0FnSUNBZ0lDQWdJSEJoYVhKRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHZGxkRlpoYkhWbEtIWmhiSFZsS1NrN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIQmhhWEpGYkdWdFpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJR2RsZEV0bGVTaHVZVzFsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUd0bGVVVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NXJaWGt1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0JyWlhsRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWEyVjVMbk4wZVd4bE8xeHVJQ0FnSUNBZ0lDQWdJR3RsZVVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvYm1GdFpTQXJJQ2M2SUNjcEtUdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdhMlY1Uld4bGJXVnVkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJuWlhSV1lXeDFaU2gyWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQjJZV3gxWlVWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJRzUxYkd4VWVYQmxJRDBnSjI5aWFtVmpkQ2M3WEc0Z0lDQWdJQ0FnSUNBZ2MzZHBkR05vSUNoMGVYQmxiMllnZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSjNONWJXSnZiQ2M2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvYzNSNWJHVlBjSFJwYjI1ekxuTjViV0p2YkZaaGJIVmxMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUQwZ2MzUjViR1ZQY0hScGIyNXpMbk41YldKdmJGWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXVkRzlUZEhKcGJtY29LU2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKM04wY21sdVp5YzZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG5OMGNtbHVaMVpoYkhWbExuUmhaeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxuTjBjbWx1WjFaaGJIVmxMbk4wZVd4bE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWkc5amRXMWxiblF1WTNKbFlYUmxWR1Y0ZEU1dlpHVW9KMXdpSnlBcklIWmhiSFZsSUNzZ0oxd2lKeWtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKMjUxYldKbGNpYzZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG01MWJXSmxjbFpoYkhWbExuUmhaeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxtNTFiV0psY2xaaGJIVmxMbk4wZVd4bE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWkc5amRXMWxiblF1WTNKbFlYUmxWR1Y0ZEU1dlpHVW9kbUZzZFdVcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkaWIyOXNaV0Z1SnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXVZbTl2YkdWaGJsWmhiSFZsTG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUld4bGJXVnVkQzV6ZEhsc1pTNWpjM05VWlhoMElEMGdjM1I1YkdWUGNIUnBiMjV6TG1KdmIyeGxZVzVXWVd4MVpTNXpkSGxzWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR1J2WTNWdFpXNTBMbU55WldGMFpWUmxlSFJPYjJSbEtIWmhiSFZsS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0J1ZFd4c1ZIbHdaVHBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2h6ZEhsc1pVOXdkR2x2Ym5NdWJuVnNiRlpoYkhWbExuUmhaeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxtNTFiR3hXWVd4MVpTNXpkSGxzWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR1J2WTNWdFpXNTBMbU55WldGMFpWUmxlSFJPYjJSbEtIWmhiSFZsS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RtRnNkV1ZGYkdWdFpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJRzFsY21kbFUzUjViR1ZQY0hScGIyNXpLR1JsWm1GMWJIUnpMQ0J2ZG1WeWNtbGtaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnYldWeVoyVmtJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lDQWdabTl5SUNoMllYSWdhMlY1SUdsdUlHUmxabUYxYkhSektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdFpYSm5aV1JiYTJWNVhTQTlJRTlpYW1WamRDNWhjM05wWjI0b2UzMHNJR1JsWm1GMWJIUnpXMnRsZVYwc0lHOTJaWEp5YVdSbGMxdHJaWGxkS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzFsY21kbFpEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnVaR1Z5S0NrN1hHNGdJQ0FnZlZ4dWZTSXNJbWx0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nUW1GelpVeHZaMmRsY2lCOUlHWnliMjBnSnk0dlltRnpaVXh2WjJkbGNpYzdYRzVwYlhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUV4dlowNXZaR1ZOYVhocGJuTWdmU0JtY205dElDY3VMM1JsY20xTWIyZG5aWEl1YldsNGFXNXpMbTV2WkdVbk8xeHVhVzF3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJNYjJkWFpXSk5hWGhwYm5NZ2ZTQm1jbTl0SUNjdUwzUmxjbTFNYjJkblpYSXViV2w0YVc1ekxuZGxZaWM3WEc1cGJYQnZjblFnZXlCd2JHRjBabTl5YlNCOUlHWnliMjBnSjJOaGRYTmhiQzF1WlhRdWRYUnBiSE1uTzF4dUx5b3FYRzRnS2lCVWFHbHpJRlJsY20xTWIyZG5aWElnY0hKdmRtbGtaU0JwYzI5dGIzSndhR2xqSUd4dloyZGxjbHh1SUNvZ2V5QnRhWGhYYVhSb0lEb2dleUFuYm05a1pTYzZJRnRNYjJkT2IyUmxUV2w0YVc1elhTd2dKM2RsWWljNklGdFhaV0pPYjJSbFRXbDRhVzV6WFNCOUlIMWNiaUFxSUVCamJHRnpjeUJVWlhKdFRHOW5aMlZ5WEc0Z0tpQkFaWGgwWlc1a2N5QkNZWE5sVEc5bloyVnlYRzRnS2k5Y2JtTnNZWE56SUZSbGNtMU1iMmRuWlhJZ1pYaDBaVzVrY3lCd2JHRjBabTl5YlM1dGFYaFhhWFJvS0VKaGMyVk1iMmRuWlhJc0lGeHVJQ0FnSUNBZ0lDQjdJRzV2WkdVNlcweHZaMDV2WkdWTmFYaHBibk5kTENCY2JpQWdJQ0FnSUNBZ0lDQjNaV0k2VzB4dloxZGxZazFwZUdsdWMxMGdmU0FwZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NsN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjNKdmRYQlRkR0ZqYXlBOUlGdGRPMXh1SUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0JuY205MWNFSmxaMmx1S0c1aGJXVXBleUFnSUZ4dUlDQWdJQ0FnSUNCc1pYUWdaM0p2ZFhBZ1BTQjdibUZ0WlN3Z1ltVm5hVzVVYVcxbE9pQnVaWGNnUkdGMFpTZ3BmVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5jbTkxY0ZOMFlXTnJMbkIxYzJnb1ozSnZkWEFwTzF4dUlDQWdJQ0FnSUNCc1pYUWdhVzVrWlc1MFUzQmhZMlVnUFNBbkp6dGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyY29ZQ1I3YVc1a1pXNTBVM0JoWTJWOUpIdG5jbTkxY0M1dVlXMWxmVG9nWW1WbmFXNGdZWFFnSkh0bmNtOTFjQzVpWldkcGJsUnBiV1Y5WUNrN1hHNGdJQ0FnZlZ4dUlDQWdJR2R5YjNWd1JXNWtLQ2w3WEc0Z0lDQWdJQ0FnSUdsbUtIUm9hWE11WjNKdmRYQlRkR0ZqYXk1c1pXNW5kR2dnUGlBd0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQm5jbTkxY0NBOUlIUm9hWE11WjNKdmRYQlRkR0ZqYXk1d2IzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JwYm1SbGJuUlRjR0ZqWlNBOUlDY25PMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVzYjJjb1lDUjdhVzVrWlc1MFUzQmhZMlY5Skh0bmNtOTFjQzV1WVcxbGZUb2daVzVrSUdGbWRHVnlJQ1I3S0c1bGR5QkVZWFJsS0NrZ0xTQm5jbTkxY0M1aVpXZHBibFJwYldVcGZTQW9iWE1wWUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNTlYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQnVaWGNnVkdWeWJVeHZaMmRsY2lncE95SXNJbWx0Y0c5eWRDQXFJR0Z6SUdOc2FWQnliMmR5WlhOeklHWnliMjBnSjJOc2FTMXdjbTluY21WemN5YzdYRzVjYm1OdmJuTjBJRXh2WjA1dlpHVk5hWGhwYm5NZ1BTQW9URzluUTJ4aGMzTXBQVDRnWTJ4aGMzTWdaWGgwWlc1a2N5Qk1iMmREYkdGemMzdGNiaUFnSUNCamIyNXVaV04wS0dOb1lXNXVaV3dwZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbU4xY25KbGJuUkNZWElnUFNCbVlXeHpaVHRjYmlBZ0lDQjlYRzRnSUNBZ2JHOW5LRzFsYzNOaFoyVXBlMXh1SUNBZ0lDQWdJQ0F2TDFSUFJFODZJRzFoYTJVZ1pHVmpiM0poZEc5eUlGeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OMWNuSmxiblJDWVhJZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3k1c1pYWmxiQ0ErUFNCMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4eld5ZHNiMmNuWFNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWh0WlhOellXZGxLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NISnZaM0psYzNOQ1pXZHBiaWh5WVc1blpTbDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNISnZZMlZ6YzBOdmRXNTBaWElnS3owZ01UdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amRYSnlaVzUwUW1GeUlEMGdibVYzSUdOc2FWQnliMmR5WlhOekxrSmhjaWg3ZlN3Z1kyeHBVSEp2WjNKbGMzTXVVSEpsYzJWMGN5NXphR0ZrWlhOZlkyeGhjM05wWXlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WTNWeWNtVnVkRUpoY2k1elpYUlViM1JoYkNoeVlXNW5aU2s3WEc0Z0lDQWdmVnh1SUNBZ0lIQnliMmR5WlhOelZYQmtZWFJsS0hCeWIyZHlaWE56VFdWemMyRm5aU2w3WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6TG1OMWNuSmxiblJDWVhJcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdjbTluY21WemMwSmxaMmx1S0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1d2NtOWpaWE56UTI5MWJuUmxjaUFyUFNBeE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OMWNuSmxiblJDWVhJdWRYQmtZWFJsS0hSb2FYTXVjSEp2WTJWemMwTnZkVzUwWlhJcE8xeHVJQ0FnSUgxY2JpQWdJQ0J3Y205bmNtVnpjMFZ1WkNncGUxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OMWNuSmxiblJDWVhJdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ5YjJObGMzTkRiM1Z1ZEdWeUlEMGdNRHRjYmlBZ0lDQjlYRzRnSUNBZ1pHVmlkV2NvYldWemMyRm5aU2w3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRFSmhjaUE5SUdaaGJITmxPeUJjYmlBZ0lDQWdJQ0FnYVdZb2RHaHBjeTVzWlhabGJDQStQU0IwYUdsekxrRmpZMlZ3ZEdWa1RHVjJaV3h6V3lka1pXSjFaeWRkS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVpHVmlkV2NvYldWemMyRm5aU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1RHOW5UbTlrWlUxcGVHbHVjenNpTENKcGJYQnZjblFnZTJSbFptRjFiSFFnWVhNZ1NuTnZibFpwWlhkOUlHWnliMjBnSnk0dmNISmxkSFI1U25OdmJpYzdYRzVqYjI1emRDQk1iMmRYWldKTmFYaHBibk1nUFNBb1RHOW5RMnhoYzNNcFBUNGdZMnhoYzNNZ1pYaDBaVzVrY3lCTWIyZERiR0Z6YzN0Y2JpQWdJQ0JqYjI1dVpXTjBLR1J2WTNWdFpXNTBSV3c5Ym5Wc2JDbDdYRzRnSUNBZ0lDQWdJR1J2WTNWdFpXNTBSV3dnUFNCa2IyTjFiV1Z1ZEVWc2ZIeGtiMk4xYldWdWRDNWliMlI1TzF4dUlDQWdJQ0FnSUNCc1pYUWdibTlrWlNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvWENKMWJGd2lLVHRjYmlBZ0lDQWdJQ0FnYm05a1pTNXpkSGxzWlM1amMzTlVaWGgwSUQwZ1hDSnNhWE4wTFhOMGVXeGxMWFI1Y0dVNklHNXZibVU3WENJN1hHNGdJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MFJXd3VZWEJ3Wlc1a1EyaHBiR1FvYm05a1pTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpuSmhiV1ZGYkNBOUlHUnZZM1Z0Wlc1MFJXdzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOW5aMlZ5Uld3Z1BTQmtiMk4xYldWdWRFVnNMbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsS0Z3aWRXeGNJaWxiTUYwN1hHNGdJQ0FnZlZ4dUlDQWdJSE5qY205c2JFSnZkSFJ2YlNobGJHVnRaVzUwUFc1MWJHd3BlMXh1SUNBZ0lDQWdJQ0JsYkdWdFpXNTBJRDBnWld4bGJXVnVkQ0I4ZkNCMGFHbHpMbVp5WVcxbFJXdzdYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjMk55YjJ4c1ZHOXdJRDBnWld4bGJXVnVkQzV6WTNKdmJHeElaV2xuYUhRZ0xTQmxiR1Z0Wlc1MExtTnNhV1Z1ZEVobGFXZG9kRHRjYmlBZ0lDQjlYRzRnSUNBZ2NISnZaM0psYzNNb2NISnZZMlZ6YzAxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNBdkx5QnNaWFFnYm05a1pTQTlJSFJvYVhNdWJHOW5aMlZ5Uld3dVoyVjBSV3hsYldWdWRITkNlVlJoWjA1aGJXVW9YQ0pzYVRwdWRHZ3RiR0Z6ZEMxdlppMTBlWEJsS0RFcFhDSXBPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1RFbE9iMlJsY3lBOUlIUm9hWE11Ykc5bloyVnlSV3d1WjJWMFJXeGxiV1Z1ZEhOQ2VWUmhaMDVoYldVb1hDSnNhVndpS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJRzV2WkdVZ1BTQk1TVTV2WkdWelcweEpUbTlrWlhNdWJHVnVaM1JvTFRGZE8xeHVJQ0FnSUNBZ0lDQnBaaWdoYm05a1pTQjhmQ0J1YjJSbExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5aGNJbXh2WjJkbGNpMXdjbTluY21WemMxd2lLU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMMk55WldGMFpTQnVaWGNnWld4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzV2WkdVZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Z3aWJHbGNJaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnViMlJsTG1Oc1lYTnpUR2x6ZEM1aFpHUW9YQ0pzYjJkblpYSXRjSEp2WjNKbGMzTmNJaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG14dloyZGxja1ZzTG1Gd2NHVnVaRU5vYVd4a0tHNXZaR1VwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHeGxkQ0JxYzI5dVRtOWtaU0E5SUVwemIyNVdhV1YzTGtwVFQwNUVhWE53YkdGNUtIQnliMk5sYzNOTlpYTnpZV2RsS1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1JoZEdVZ1BTQnVaWGNnUkdGMFpTZ3BPMXh1SUNBZ0lDQWdJQ0J1YjJSbExtbHVibVZ5U0ZSTlRDQTlJR0E4Y0NCemRIbHNaVDFjSW1admJuUXRjMmw2WlRvZ01USndlRHNnZEdWNGRDMWhiR2xuYmpweWFXZG9kRndpUGlSN1pHRjBaWDA4TDNBK1lEdGNiaUFnSUNBZ0lDQWdibTlrWlM1aGNIQmxibVJEYUdsc1pDaHFjMjl1VG05a1pTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTnliMnhzUW05MGRHOXRLQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lHeHZaeWh0WlhOellXZGxLWHRjYmlBZ0lDQWdJQ0FnYVdZb2RHaHBjeTVzWlhabGJDQStQU0IwYUdsekxrRmpZMlZ3ZEdWa1RHVjJaV3h6V3lkc2IyY25YU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JuVnNiRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCcFppZ2hkR2hwY3k1c2IyZG5aWEpGYkNCOGZDQWhkR2hwY3k1c2IyZG5aWEpGYkM1aGNIQmxibVJEYUdsc1pDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU52Ym01bFkzUW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCc1pYUWdibTlrWlNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvWENKc2FWd2lLVHRjYmlBZ0lDQWdJQ0FnYm05a1pTNXpkSGxzWlM1amMzTlVaWGgwSUQwZ0oySnZjbVJsY2kxaWIzUjBiMjA2SURGd2VDQnpiMnhwWkNBalpHVmtaV1JsT3ljN0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCc1pYUWdhbk52Yms1dlpHVWdQU0JLYzI5dVZtbGxkeTVLVTA5T1JHbHpjR3hoZVNodFpYTnpZV2RsS1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1JoZEdVZ1BTQnVaWGNnUkdGMFpTZ3BPMXh1SUNBZ0lDQWdJQ0J1YjJSbExtbHVibVZ5U0ZSTlRDQTlJR0E4Y0NCemRIbHNaVDFjSW1admJuUXRjMmw2WlRvZ01USndlRHNnZEdWNGRDMWhiR2xuYmpweWFXZG9kRndpUGlSN1pHRjBaWDA4TDNBK1lEdGNiaUFnSUNBZ0lDQWdibTlrWlM1aGNIQmxibVJEYUdsc1pDaHFjMjl1VG05a1pTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOW5aMlZ5Uld3dVlYQndaVzVrUTJocGJHUW9ibTlrWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOeWIyeHNRbTkwZEc5dEtDazdYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0cxbGMzTmhaMlVwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR1JsWW5WbktHMWxjM05oWjJVcGUxeHVJQ0FnSUNBZ0lDQnBaaWgwYUdsekxteGxkbVZzSUQ0OUlIUm9hWE11UVdOalpYQjBaV1JNWlhabGJITmJKMlJsWW5WbkoxMHBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnTHk5dWJ5QnphRzkzSUc5dUlIZGxZaUJ6WTNKbFpXNDdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNWtaV0oxWnlodFpYTnpZV2RsS1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQk1iMmRYWldKTmFYaHBibk03SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDJOaGRYTmhiRjl1WlhSZmRYUnBiSE5mWHpzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyeHBYM0J5YjJkeVpYTnpYMTg3SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZUltZ0RhdGFzZXQgfSBmcm9tICcuL2Jhc2VJbWdEYXRhc2V0JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBMb2dnZXJNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmxvZyc7XG5pbXBvcnQgeyBTdG9yYWdlTWl4aW5zLCBpbmRleERCU3RvcmFnZSB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyBNZW1DYWNoZU1peGlucywgbWVtRG93bkNhY2hlIH0gZnJvbSAnY2F1c2FsLW5ldC5tZW1jYWNoZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEltYWdlRGF0YXNldGZldGNoTWl4aW5zIH0gZnJvbSAnLi9pbWFnZURhdGFzZXRmZXRjaC5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBJbWFnZURhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zIH0gZnJvbSAnLi9pbWFnZURhdGFzZXRQcmVwcm9jZXNzaW5nLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEltYWdlRGF0YXNldEdlbmVyYXRvck1peGlucyB9IGZyb20gJy4vaW1hZ2VEYXRhc2V0R2VuZXJhdG9yLm1peGlucyc7XG5pbXBvcnQgeyBQcmVwcm9jZXNzaW5nTWl4aW5zLCBpbWFnZVByZXByb2Nlc3NpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNbmlzdERhdGFzZXQgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VJbWdEYXRhc2V0LCBcbiAgICAgICAgWyBJbWFnZURhdGFzZXRmZXRjaE1peGlucyxcbiAgICAgICAgICBJbWFnZURhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zLFxuICAgICAgICAgIFByZXByb2Nlc3NpbmdNaXhpbnMsXG4gICAgICAgICAgSW1hZ2VEYXRhc2V0R2VuZXJhdG9yTWl4aW5zLFxuICAgICAgICAgIE1lbUNhY2hlTWl4aW5zLFxuICAgICAgICAgIFN0b3JhZ2VNaXhpbnMsXG4gICAgICAgICAgTG9nZ2VyTWl4aW5zIF0pe1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3Mpe1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IGluZGV4REJTdG9yYWdlO1xuICAgICAgICB0aGlzLk1lbUNhY2hlID0gbWVtRG93bkNhY2hlO1xuICAgICAgICBjb25zdCBQcmVwcm9jZXNzaW5nU2FtcGxlID0gYXN5bmMgKG1hc3RlclNhbXBsZUJ1ZmZlciwgc2FtcGxlU2l6ZSk9PntcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBpbWFnZVByZXByb2Nlc3NpbmcuaW1hZ2VTcGxpdChtYXN0ZXJTYW1wbGVCdWZmZXIsIHNhbXBsZVNpemUpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBQcmVwcm9jZXNzaW5nTGFiZWwgPSBhc3luYyAobWFzdGVyTGFiZWxCdWZmZXIsIGxhYmVsU2l6ZSk9PntcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBpbWFnZVByZXByb2Nlc3NpbmcuaW1hZ2VTcGxpdChtYXN0ZXJMYWJlbEJ1ZmZlciwgbGFiZWxTaXplKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zKFByZXByb2Nlc3NpbmdTYW1wbGUsIFByZXByb2Nlc3NpbmdMYWJlbCk7XG4gICAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VJbWdEYXRhc2V0e1xuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXRDb25maWd1cmUpe1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBkYXRhc2V0Q29uZmlndXJlO1xuICAgICAgICBjb25zdCB7bnVtU2FtcGxlcywgc2FtcGxlU2l6ZSwgbnVtQ2xhc3Nlc30gPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuZGF0YVNpemUgPSBbbnVtU2FtcGxlcywgLi4uc2FtcGxlU2l6ZV07XG4gICAgICAgIFxuICAgICAgICB0aGlzLm51bVNhbXBsZXMgPSBudW1TYW1wbGVzO1xuICAgICAgICB0aGlzLnNhbXBsZVNpemUgPSBzYW1wbGVTaXplO1xuICAgICAgICB0aGlzLm51bUNsYXNzICAgPSBudW1DbGFzc2VzO1xuICAgIH1cbiAgICBcbiAgICBzdW1tYXJ5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgfVxufSIsImltcG9ydCB7IEZ1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0aW9uTWl4aW5zfSBmcm9tICcuL2Z1bmN0aW9uLm1peGlucyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbiBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLFtGdW5jdGlvbk1peGluc10pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufSIsImNvbnN0IEZ1bmN0aW9uTWl4aW5zID0gKEJhc2VGdW5jdGlvbkNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUZ1bmN0aW9uQ2xhc3N7IFxuICAgIGdldEltZ0J1ZmZlclNpemUoaW1nU2l6ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnJlZHVjZSgocyxkKT0+cypkLDEsaW1nU2l6ZSk7XG4gICAgfVxuICAgIGdlbmVyYXRvcldpdGhJbmRleChpdGVtcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmFkZEluZGV4KFIubWFwKSgoZCwgaWR4KT0+W2lkeCwgZF0sIGl0ZW1zKTtcbiAgICB9XG4gICAgc3BsaXRUcmFpblRlc3RTZXQoaXRlbXMsIHNwbGl0SW5kZXgpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5zcGxpdEF0KHNwbGl0SW5kZXgsIGl0ZW1zKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25NaXhpbnM7IiwiaW1wb3J0IHsgU2FtcGxpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IEltYWdlRGF0YXNldEdlbmVyYXRvck1peGlucyA9IChCYXNlSW1hZ2VDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VJbWFnZUNsYXNzeyBcbiAgICBcbiAgICBnZXRUcmFpblRlc3RTZXQodHJhaW5TaXplPW51bGwpe1xuICAgICAgICB0cmFpblNpemUgPSB0cmFpblNpemV8fHBhcnNlSW50KHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLmxlbmd0aCowLjkpO1xuICAgICAgICBjb25zdCBbdHJhaW5TZXQsIHRlc3RTZXRdID0gdGhpcy5GLnNwbGl0VHJhaW5UZXN0U2V0KHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLCB0cmFpblNpemUpO1xuICAgICAgICByZXR1cm4gW3RyYWluU2V0LCB0ZXN0U2V0XTtcbiAgICB9XG5cbiAgICBtYWtlU2FtcGxlR2VuZXJhdG9yKHNhbXBsZUlkeFNldCwgYmF0Y2hTaXplPW51bGwsIHN0YXJ0PTAsIGVuZD1udWxsKXtcbiAgICAgICAgaWYoIXRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwcmVwcm9jZXNzaW5nIG11c3QgYmUgcGVyZm9ybWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgYmF0Y2hTaXplID0gYmF0Y2hTaXplP2JhdGNoU2l6ZTpzYW1wbGVJZHhTZXQubGVuZ3RoO1xuICAgICAgICBjb25zdCBfYmF0Y2hlcyA9IHRoaXMuRi5oc3BsaXRFdmVyeShzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZSk7XG4gICAgICAgIGNvbnN0IGJhdGNoZXMgPSBTYW1wbGluZy5jaG9pY2UoX2JhdGNoZXMsIF9iYXRjaGVzLmxlbmd0aCk7XG4gICAgICAgIGlmKGVuZCA9PT0gbnVsbCl7XG4gICAgICAgICAgICBlbmQgPSBiYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gc3RhcnQsIGl0ZXJhdGlvbkNvdW50ID0gMCwgc3RlcCA9IDE7XG4gICAgICAgIGNvbnN0IGJhdGNoR2VuZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgIG5leHQ6IGFzeW5jKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhdGNoU2FtcGxlcyA9IFtdLCBiYXRjaExhYmVscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdIG9mIGJhdGNoZXNbbmV4dEluZGV4XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaFNhbXBsZXMgPSBbLi4uYmF0Y2hTYW1wbGVzLCBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoTGFiZWxzID0gWy4uLmJhdGNoTGFiZWxzLCBsYWJlbEl0ZW1bbGFiZWxQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4ICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZHggPSBpdGVyYXRpb25Db3VudDtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtpZHgsIGJhdGNoU2l6ZSwgZGF0YTpbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc119O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZShuZXh0SW5kZXggPCBlbmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYmF0Y2hHZW5lcmF0b3I7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlRGF0YXNldEdlbmVyYXRvck1peGluczsiLCJpbXBvcnQgeyBTdHJlYW0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IEltYWdlRGF0YXNldFByZXByb2Nlc3NpbmdNaXhpbnMgPSAoQmFzZUltYWdlQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlSW1hZ2VDbGFzc3sgXG4gICAgbWFrZVByZXByb2Nlc3NpbmdTdHJlYW0oc2F2ZURpcil7XG4gICAgICAgIGNvbnN0IEltYWdlQnVmZmVyU2l6ZSA9IHRoaXMuRi5nZXRJbWdCdWZmZXJTaXplKHRoaXMuc2FtcGxlU2l6ZSk7XG4gICAgICAgIGNvbnN0IExhYmVsQnVmZmVyU2l6ZSA9IHRoaXMubnVtQ2xhc3M7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtpbWFnZUJ1ZmZlclNpemU6IEltYWdlQnVmZmVyU2l6ZSwgXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbEJ1ZmZlclNpemU6IExhYmVsQnVmZmVyU2l6ZX0pO1xuICAgICAgICBjb25zdCBUcmFuc2Zvcm1GbiA9IChjaHVuaywgY2h1bmtFbmNvZGluZywgYWZ0ZXJUcmFuc2Zvcm1GbikgPT57XG4gICAgICAgICAgICBjb25zdCBUcmFuc2Zvcm1Bc3luYyA9IGFzeW5jICgpPT57XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZUJ1ZmZlciA9IGNodW5rLnNhbXBsZTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxCdWZmZXIgPSBjaHVuay5sYWJlbDtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7c2FtcGxlQnVmZmVyLCBsYWJlbEJ1ZmZlcn0pO1xuICAgICAgICAgICAgICAgIGxldCBwcmVwcm9jZXNzZWRJbWdCdWZmZXIgPSBhd2FpdCB0aGlzLlByZXByb2Nlc3NpbmdTYW1wbGVGbihzYW1wbGVCdWZmZXIsIEltYWdlQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgbGV0IHByZXByb2Nlc3NlZExhYmVsQnVmZmVyID0gYXdhaXQgdGhpcy5QcmVwcm9jZXNzaW5nTGFiZWxGbihsYWJlbEJ1ZmZlciwgTGFiZWxCdWZmZXJTaXplKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9jZXNzZWRDaHVuazogdGhpcy5GLnppcChwcmVwcm9jZXNzZWRJbWdCdWZmZXIsIHByZXByb2Nlc3NlZExhYmVsQnVmZmVyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtJZHg6IGNodW5rLmlkeH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgVHJhbnNmb3JtQXN5bmMoY2h1bmspLnRoZW4ocHJvY2Vzc2VkQ2h1bms9PntcbiAgICAgICAgICAgICAgICBhZnRlclRyYW5zZm9ybUZuKG51bGwsIHByb2Nlc3NlZENodW5rKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgV3JpdGVGbiA9IChwcm9jZXNzZWRDaHVuaywgY2h1bmtFbmNvZGluZywgY2FsbGJhY2spID0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBXcml0ZUFzeW5jID0gYXN5bmMgKHByb2Nlc3NlZENodW5rKT0+e1xuICAgICAgICAgICAgICAgIGxldCBnZW5lcmF0b3IgPSB0aGlzLkYuZ2VuZXJhdG9yV2l0aEluZGV4KHByb2Nlc3NlZENodW5rLnByb2Nlc3NlZENodW5rKTtcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtJZHggID0gcHJvY2Vzc2VkQ2h1bmsuY2h1bmtJZHg7XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggID0gW10sIGxhYmVsUGF0aCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZSwgbGFiZWxdXSBvZiBnZW5lcmF0b3Ipe1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtTYW1wbGVQYXRoID0gYXdhaXQgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJdGVtKHNhdmVEaXIgKyAnc2FtcGxlLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgc2FtcGxlKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0xhYmVsUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ2xhYmVsLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVQYXRoID0gWy4uLnNhbXBsZVBhdGgsIGNodW5rU2FtcGxlUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUGF0aCA9IFsuLi5sYWJlbFBhdGgsIGNodW5rTGFiZWxQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyh7cHJlcHJvY2Vzc2luZzogW2NodW5rU2FtcGxlUGF0aCwgY2h1bmtMYWJlbFBhdGhdfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkYuemlwKHNhbXBsZVBhdGgsIGxhYmVsUGF0aCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBXcml0ZUFzeW5jKHByb2Nlc3NlZENodW5rKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zYXZlZFByZXByb2Nlc3Npbmcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyA9IFsuLi50aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgLi4ucmVzdWx0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGR1cGxleGVyID0gU3RyZWFtLm1ha2VEdXBsZXgoV3JpdGVGbik7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1lciA9IFN0cmVhbS5tYWtlVHJhbnNmb3JtKFRyYW5zZm9ybUZuKTtcbiAgICAgICAgbGV0IHN0cmVhbSA9IGR1cGxleGVyLnBpcGUodHJhbnNmb3JtZXIpLnBpcGUoZHVwbGV4ZXIpO1xuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgIH1cblxuICAgIGFzeW5jIHByZXByb2Nlc3NpbmdEYXRhc2V0KHNhdmVEaXI9Jy9wcmVwcm9jZXNzaW5nL21uaXN0Lycsc3RvcmVJbk1lbW9yeT1mYWxzZSl7XG4gICAgICAgIHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UgPSAoc3RvcmVJbk1lbW9yeSk/dGhpcy5tZW1DYWNoZTp0aGlzLnN0b3JhZ2U7XG4gICAgICAgIGxldCBzdHJlYW0gPSB0aGlzLm1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtKHNhdmVEaXIpO1xuICAgICAgICBsZXQgZ2VuZXJhdG9yID0gdGhpcy5GLmdlbmVyYXRvcldpdGhJbmRleCh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgZm9yKGxldCBbaWR4LCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBzYW1wbGUgPSBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbGFiZWxJdGVtW2xhYmVsUGF0aF07XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7c2FtcGxlLCBsYWJlbH0pO1xuICAgICAgICAgICAgc3RyZWFtLnB1c2goe2lkeCwgc2FtcGxlLCBsYWJlbH0pO1xuICAgICAgICB9XG4gICAgICAgIHN0cmVhbS5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHN0cmVhbS5vbignZmluaXNoJywgKCk9PntcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGluczsiLCJleHBvcnQge2RlZmF1bHQgYXMgTU5JU1R9IGZyb20gJy4vTU5JU1QuSW1nRGF0YXNldCc7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=