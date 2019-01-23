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

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../causality-log/dist/@causalNet/log.web.js":
/*!***************************************************!*\
  !*** ../causality-log/dist/@causalNet/log.web.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! causal-net.utils */ "causal-net.utils"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./src/baseLog.js":
/*!************************!*\
  !*** ./src/baseLog.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  _exports.default = BaseLog;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./termLog */ "./src/termLog.js"), __webpack_require__(/*! ./baseLog */ "./src/baseLog.js"), __webpack_require__(/*! ./logger.mixins */ "./src/logger.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _termLog, _baseLog, _logger) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Logger", {
    enumerable: true,
    get: function () {
      return _termLog.default;
    }
  });
  Object.defineProperty(_exports, "BaseLog", {
    enumerable: true,
    get: function () {
      return _baseLog.default;
    }
  });
  Object.defineProperty(_exports, "LoggerMixins", {
    enumerable: true,
    get: function () {
      return _logger.default;
    }
  });
  _termLog = _interopRequireDefault(_termLog);
  _baseLog = _interopRequireDefault(_baseLog);
  _logger = _interopRequireDefault(_logger);
});

/***/ }),

/***/ "./src/logger.mixins.js":
/*!******************************!*\
  !*** ./src/logger.mixins.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const LoggerMixins = BasedClass => class extends BasedClass {
    constructor(...args) {
      super(...args);
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

  var _default = LoggerMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/prettyJson.js":
/*!***************************!*\
  !*** ./src/prettyJson.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  _exports.default = JsonView;
});

/***/ }),

/***/ "./src/termLog.js":
/*!************************!*\
  !*** ./src/termLog.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./baseLog */ "./src/baseLog.js"), __webpack_require__(/*! ./termLog.mixins.node */ "./src/termLog.mixins.node.js"), __webpack_require__(/*! ./termLog.mixins.web */ "./src/termLog.mixins.web.js"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _baseLog, _termLogMixins, _termLogMixins2, _causalNet) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _baseLog = _interopRequireDefault(_baseLog);
  _termLogMixins = _interopRequireDefault(_termLogMixins);
  _termLogMixins2 = _interopRequireDefault(_termLogMixins2);

  class TermLog extends _causalNet.Platform.mixWith(_baseLog.default, {
    'node': [_termLogMixins.default],
    'web': [_termLogMixins2.default]
  }) {
    constructor() {
      super();
    }

  }

  const Logger = new TermLog();
  var _default = Logger;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/termLog.mixins.node.js":
/*!************************************!*\
  !*** ./src/termLog.mixins.node.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const LogNodeMixins = LogClass => class extends LogClass {
    connect(channel) {//nothing
    }

    log(message) {
      if (this.level >= this.AcceptedLevels['log']) {
        return null;
      }

      console.log(message);
    }

    progress(processMessage) {//TODO: implement progress show
    }

    debug(message) {
      if (this.level >= this.AcceptedLevels['debug']) {
        return null;
      }

      console.debug(message);
    }

  };

  var _default = LogNodeMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/termLog.mixins.web.js":
/*!***********************************!*\
  !*** ./src/termLog.mixins.web.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./prettyJson */ "./src/prettyJson.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _prettyJson) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _prettyJson = _interopRequireDefault(_prettyJson);

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

      let jsonNode = _prettyJson.default.JSONDisplay(processMessage);

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

      let jsonNode = _prettyJson.default.JSONDisplay(message);

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

  var _default = WebNodeMixins;
  _exports.default = _default;
});

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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9sb2dnZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3ByZXR0eUpzb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJCYXNlTG9nIiwiY29uc3RydWN0b3IiLCJBY2NlcHRlZExldmVscyIsImRlYnVnIiwibG9nIiwid2FybmluZyIsImVycm9yIiwickFjY2VwdGVkTGV2ZWxzIiwibGV2ZWwiLCJMZXZlbCIsInVuZGVmaW5lZCIsIkVycm9yIiwiT2JqZWN0Iiwia2V5cyIsIkxvZ2dlck1peGlucyIsIkJhc2VkQ2xhc3MiLCJhcmdzIiwibG9nZ2VyIiwiY29uc29sZSIsInByb2dyZXNzIiwicHJvZ3Jlc3NNZXNzYWdlIiwiTG9nZ2VyIiwiSnNvblZpZXciLCJKU09ORGlzcGxheSIsImpzb24iLCJvcGVuTGV2ZWxzQXJnIiwic3R5bGVPcHRpb25zQXJnIiwiREVGQVVMVF9TVFlMRV9PUFRJT05TIiwicm9vdCIsInRhZyIsInN0eWxlIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZSIsInRpdGxlVGV4dCIsIm9wZW5CdXR0b24iLCJjb250ZW50c0NvbnRhaW5lciIsImtleVZhbHVlUGFpciIsImtleSIsInN5bWJvbFZhbHVlIiwic3RyaW5nVmFsdWUiLCJudW1iZXJWYWx1ZSIsImJvb2xlYW5WYWx1ZSIsIm51bGxWYWx1ZSIsIm9wZW5MZXZlbHMiLCJpc05hTiIsInBhcnNlSW50IiwiSW5maW5pdHkiLCJzdHlsZU9wdGlvbnMiLCJtZXJnZVN0eWxlT3B0aW9ucyIsImFzc2lnbiIsInRhcmdldCIsIlR5cGVFcnJvciIsInRvIiwiaW5kZXgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuZXh0U291cmNlIiwibmV4dEtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJlbmRlciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjc3NUZXh0Iiwidm9pZEVsZW1lbnQiLCJnZXRWYWx1ZSIsImFwcGVuZENoaWxkIiwiRGF0ZSIsImRhdGVFbGVtZW50IiwidG9JU09TdHJpbmciLCJub25FeHBhbmRhYmxlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsInRoaXNMZXZlbElzQ2xvc2VkIiwiZ2V0VGl0bGUiLCJjb252ZXJ0SnNvblRvRWxlbWVudHMiLCJuZXh0TGV2ZWxJc0Nsb3NlZCIsImNvbnRhaW5lciIsImdldENvbnRlbnRzQ29udGFpbmVyIiwiZ2V0U3RhbmRhcmRQYWlyIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZm9yRWFjaCIsInN5bWJvbCIsInRvU3RyaW5nIiwib3B0aW9uYWxLZXkiLCJsZXZlbElzQ2xvc2VkIiwiY3VycmVudGx5Q2xvc2VkIiwiY29udGFpbmVyRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRFbGVtZW50IiwidGl0bGVFbGVtZW50IiwiZ2V0T3BlbkJ1dHRvbiIsImdldEtleSIsImNyZWF0ZVRleHROb2RlIiwib25jbGljayIsImZpcnN0Q2hpbGQiLCJvYmplY3RDb250ZW50cyIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsImRpc3BsYXkiLCJ0cmFuc2Zvcm0iLCJidXR0b25FbGVtZW50IiwiaXNDbG9zZWQiLCJ2YWx1ZSIsInBhaXJFbGVtZW50IiwibmFtZSIsImtleUVsZW1lbnQiLCJ2YWx1ZUVsZW1lbnQiLCJudWxsVHlwZSIsImRlZmF1bHRzIiwib3ZlcnJpZGVzIiwibWVyZ2VkIiwiVGVybUxvZyIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkxvZ05vZGVNaXhpbnMiLCJXZWJOb2RlTWl4aW5zIiwiTG9nQ2xhc3MiLCJjb25uZWN0IiwiY2hhbm5lbCIsIm1lc3NhZ2UiLCJwcm9jZXNzTWVzc2FnZSIsImRvY3VtZW50RWwiLCJib2R5Iiwibm9kZSIsImZyYW1lRWwiLCJsb2dnZXJFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2Nyb2xsQm90dG9tIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiTElOb2RlcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwianNvbk5vZGUiLCJkYXRlIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEZiw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2xvZy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUxvZ3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLkFjY2VwdGVkTGV2ZWxzID0ge2RlYnVnOiAwLCBsb2c6MSwgd2FybmluZzoyLCBlcnJvcjogM307XG4gICAgICAgIHRoaXMuckFjY2VwdGVkTGV2ZWxzID0gezA6J2RlYnVnJywgMTogJ2xvZycsIDI6ICd3YXJuaW5nJywgMzogJ2Vycm9yJ307XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddO1xuICAgIH1cbiAgICBzZXQgTGV2ZWwobGV2ZWwpe1xuICAgICAgICBpZih0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXSE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1tsZXZlbF07ICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtsZXZlbH0gbXVzdCBiZSBvbmUgb2YgJHtPYmplY3Qua2V5cyh0aGlzLkFjY2VwdGVkTGV2ZWxzKX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgTGV2ZWwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuckFjY2VwdGVkTGV2ZWxzW3RoaXMubGV2ZWxdO1xuICAgIH1cbn0iLCJjb25zdCBMb2dnZXJNaXhpbnMgPSAoQmFzZWRDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VkQ2xhc3N7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncyl7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgfVxuICAgIHByb2dyZXNzKHByb2dyZXNzTWVzc2FnZSl7XG4gICAgICAgIGlmKHRoaXMubG9nZ2VyLnByb2dyZXNzKXtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLnByb2dyZXNzKHByb2dyZXNzTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0IExvZ2dlcihsb2dnZXIpe1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB9XG4gICAgXG4gICAgZ2V0IExvZ2dlcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXI7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyTWl4aW5zOyIsIi8vIG9yaWdpbiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2x1Y3lnaWxiZXJ0L2pzb24tZGlzcGxheS9ibG9iL21hc3Rlci9qc29uLWRpc3BsYXkuanNcbi8vIENvcHlyaWdodCAoYykgMjAxNyBMdWN5IEdpbGJlcnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25WaWV3e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIHN0YXRpYyBKU09ORGlzcGxheShqc29uLCBvcGVuTGV2ZWxzQXJnLCBzdHlsZU9wdGlvbnNBcmcpIHtcbiAgICAgICAgdmFyIERFRkFVTFRfU1RZTEVfT1BUSU9OUyA9IHtcbiAgICAgICAgICByb290OiB7IHRhZzogJ3ByZScsIHN0eWxlOiAncGFkZGluZzogNXB4OyBmb250LXNpemU6IDFyZW07JyB9LFxuICAgICAgICAgIHRpdGxlQ29udGFpbmVyOiB7IHRhZzogJ2RpdicsIHN0eWxlOiAnbWFyZ2luLWJvdHRvbTogM3B4OycgfSxcbiAgICAgICAgICB0aXRsZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXI7JyB9LFxuICAgICAgICAgIHRpdGxlVGV4dDogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICcnIH0sXG4gICAgICAgICAgb3BlbkJ1dHRvbjogeyBcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgc3R5bGU6ICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbjogMHB4IDdweCAwcHggMnB4OyBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7ICdcbiAgICAgICAgICAgICAgICAgKyAnYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDogNXB4IHNvbGlkIGJsYWNrOycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb250ZW50c0NvbnRhaW5lcjogeyB0YWc6ICdkaXYnLCBzdHlsZTogJ3BhZGRpbmctbGVmdDogMThweDsnIH0sXG4gICAgICAgICAga2V5VmFsdWVQYWlyOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAycHg7JyB9LFxuICAgICAgICAgIGtleTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogZGFya2JsdWU7JyB9LFxuICAgICAgICAgIHN5bWJvbFZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBkYXJrZ3JlZW47JyB9LFxuICAgICAgICAgIHN0cmluZ1ZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBjcmltc29uOycgfSxcbiAgICAgICAgICBudW1iZXJWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgICAgYm9vbGVhblZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgICBudWxsVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICB9O1xuICAgICAgICB2YXIgb3BlbkxldmVscyA9IGlzTmFOKHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpKSA/IEluZmluaXR5IDogcGFyc2VJbnQob3BlbkxldmVsc0FyZyk7XG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB0eXBlb2Ygc3R5bGVPcHRpb25zQXJnID09PSAnb2JqZWN0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbWVyZ2VTdHlsZU9wdGlvbnMoREVGQVVMVF9TVFlMRV9PUFRJT05TLCBzdHlsZU9wdGlvbnNBcmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA6IERFRkFVTFRfU1RZTEVfT1BUSU9OUztcbiAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICBcbiAgICAgICAgICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5yb290LnRhZyk7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnJvb3Quc3R5bGU7XG4gICAgXG4gICAgICAgICAgaWYgKGpzb24gPT09IG51bGwgfHwganNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgdm9pZEVsZW1lbnQgPSBnZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodm9pZEVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoanNvbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHZhciBkYXRlRWxlbWVudCA9IGdldFZhbHVlKGpzb24udG9JU09TdHJpbmcoKSk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGVFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFyIG5vbkV4cGFuZGFibGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbik7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vbkV4cGFuZGFibGVFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gQXJyYXkuaXNBcnJheShqc29uKSA/ICdBcnJheVsnICsganNvbi5sZW5ndGggKyAnXScgOiAnT2JqZWN0JztcbiAgICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IG9wZW5MZXZlbHMgPCAxO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChnZXRUaXRsZSh0aXRsZSwgbnVsbCwgdGhpc0xldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIDEpKTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIGluZGV4KSB7XG4gICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gaW5kZXggPiBvcGVuTGV2ZWxzO1xuICAgICAgICAgIHZhciBuZXh0TGV2ZWxJc0Nsb3NlZCA9IGluZGV4ICsgMSA+IG9wZW5MZXZlbHM7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRlbnRzQ29udGFpbmVyKHRoaXNMZXZlbElzQ2xvc2VkKTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbltrZXldKSkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ0FycmF5WycgKyBqc29uW2tleV0ubGVuZ3RoICsgJ10nLCBrZXksIG5leHRMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoanNvbltrZXldID09PSBudWxsIHx8IGpzb25ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBudWxsKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XS50b0lTT1N0cmluZygpKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnT2JqZWN0Jywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhqc29uKS5mb3JFYWNoKGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKHN5bWJvbC50b1N0cmluZygpLCBqc29uW3N5bWJvbF0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFRpdGxlKHRpdGxlVGV4dCwgb3B0aW9uYWxLZXksIGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgY3VycmVudGx5Q2xvc2VkID0gbGV2ZWxJc0Nsb3NlZDtcbiAgICAgICAgICB2YXIgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnRhZyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnN0eWxlO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAndGl0bGVDb250YWluZXInKTtcbiAgICAgICAgICB2YXIgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZVRleHQudGFnKTtcbiAgICAgICAgICB2YXIgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGUudGFnKTtcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZS5zdHlsZTtcbiAgICAgICAgICB0ZXh0RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlVGV4dC5zdHlsZTtcbiAgICBcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgaWYgKG9wdGlvbmFsS2V5KSB7XG4gICAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkob3B0aW9uYWxLZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGVUZXh0KSk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcbiAgICBcbiAgICAgICAgICB0aXRsZUVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcGVuQnV0dG9uID0gdGl0bGVFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB2YXIgb2JqZWN0Q29udGVudHMgPSB0aXRsZUVsZW1lbnQucGFyZW50Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgIG9iamVjdENvbnRlbnRzLnN0eWxlLmRpc3BsYXkgPSBjdXJyZW50bHlDbG9zZWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICAgICAgb3BlbkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50bHlDbG9zZWQgPyAncm90YXRlKDkwZGVnKScgOiAncm90YXRlKDBkZWcpJztcbiAgICAgICAgICAgIGN1cnJlbnRseUNsb3NlZCA9ICFjdXJyZW50bHlDbG9zZWQ7XG4gICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnRhZyk7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm9wZW5CdXR0b24uc3R5bGU7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBsZXZlbElzQ2xvc2VkID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgICAgcmV0dXJuIGJ1dHRvbkVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29udGVudHNDb250YWluZXIoaXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnRhZyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICdjb250ZW50c0NvbnRhaW5lcicpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAoaXNDbG9zZWQgPyAnbm9uZScgOiAnYmxvY2snKTtcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRTdGFuZGFyZFBhaXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgIHZhciBwYWlyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci50YWcpO1xuICAgICAgICAgIHBhaXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnN0eWxlO1xuICAgICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldEtleShrZXkpKTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICAgIHJldHVybiBwYWlyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRLZXkobmFtZSkge1xuICAgICAgICAgIHZhciBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5LnRhZyk7XG4gICAgICAgICAga2V5RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleS5zdHlsZTtcbiAgICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUgKyAnOiAnKSk7XG4gICAgICAgICAgcmV0dXJuIGtleUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgICB2YXIgdmFsdWVFbGVtZW50O1xuICAgICAgICAgIHZhciBudWxsVHlwZSA9ICdvYmplY3QnO1xuICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdcIicgKyB2YWx1ZSArICdcIicpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbnVsbFR5cGU6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bGxWYWx1ZS50YWcpO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udWxsVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHZhbHVlRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBtZXJnZVN0eWxlT3B0aW9ucyhkZWZhdWx0cywgb3ZlcnJpZGVzKSB7XG4gICAgICAgICAgdmFyIG1lcmdlZCA9IHt9O1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgICAgbWVyZ2VkW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0c1trZXldLCBvdmVycmlkZXNba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIHJlbmRlcigpO1xuICAgIH1cbn0iLCJpbXBvcnQge2RlZmF1bHQgYXMgQmFzZUxvZ30gZnJvbSAnLi9iYXNlTG9nJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBMb2dOb2RlTWl4aW5zfSBmcm9tICcuL3Rlcm1Mb2cubWl4aW5zLm5vZGUnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIFdlYk5vZGVNaXhpbnN9IGZyb20gJy4vdGVybUxvZy5taXhpbnMud2ViJztcbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY2xhc3MgVGVybUxvZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUxvZywgeydub2RlJzpbTG9nTm9kZU1peGluc10sJ3dlYic6W1dlYk5vZGVNaXhpbnNdfSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5jb25zdCBMb2dnZXIgPSBuZXcgVGVybUxvZygpO1xuZXhwb3J0IGRlZmF1bHQgTG9nZ2VyOyIsImNvbnN0IExvZ05vZGVNaXhpbnMgPSAoTG9nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzc3tcbiAgICBjb25uZWN0KGNoYW5uZWwpe1xuICAgICAgICAvL25vdGhpbmdcbiAgICB9XG4gICAgbG9nKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSl7XG4gICAgICAgIC8vVE9ETzogaW1wbGVtZW50IHByb2dyZXNzIHNob3dcbiAgICB9XG4gICAgZGVidWcobWVzc2FnZSl7XG4gICAgICAgIGlmKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dOb2RlTWl4aW5zOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBKc29uVmlld30gZnJvbSAnLi9wcmV0dHlKc29uJztcbmNvbnN0IFdlYk5vZGVNaXhpbnMgPSAoTG9nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzc3tcbiAgICBjb25uZWN0KGRvY3VtZW50RWw9bnVsbCl7XG4gICAgICAgIGRvY3VtZW50RWwgPSBkb2N1bWVudEVsfHxkb2N1bWVudC5ib2R5O1xuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gXCJsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XCI7XG4gICAgICAgIGRvY3VtZW50RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbCA9IGRvY3VtZW50RWw7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwgPSBkb2N1bWVudEVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIilbMF07XG4gICAgfVxuICAgIHNjcm9sbEJvdHRvbShlbGVtZW50PW51bGwpe1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLmZyYW1lRWw7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9XG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2Upe1xuICAgICAgICAvLyBsZXQgbm9kZSA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaTpudGgtbGFzdC1vZi10eXBlKDEpXCIpO1xuICAgICAgICBsZXQgTElOb2RlcyA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKTtcbiAgICAgICAgbGV0IG5vZGUgPSBMSU5vZGVzW0xJTm9kZXMubGVuZ3RoLTFdO1xuICAgICAgICBpZighbm9kZSB8fCBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlci1wcm9ncmVzc1wiKSl7XG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgZWxcbiAgICAgICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJsb2dnZXItcHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBqc29uTm9kZSA9IEpzb25WaWV3LkpTT05EaXNwbGF5KHByb2Nlc3NNZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5sb2dnZXJFbCB8fCAhdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZCl7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gJ2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlOyc7ICAgICAgIFxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShtZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy9ubyBzaG93IG9uIHdlYiBzY3JlZW47ICAgICAgICBcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWJOb2RlTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/MNIST.ImgDataset.js":
/*!*********************************!*\
  !*** ./src/MNIST.ImgDataset.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./baseImgDataset */ "./src/baseImgDataset.js"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! causal-net.log */ "../causality-log/dist/@causalNet/log.web.js"), __webpack_require__(/*! causal-net.storage */ "causal-net.storage"), __webpack_require__(/*! causal-net.memcache */ "causal-net.memcache"), __webpack_require__(/*! ./function */ "./src/function.js"), __webpack_require__(/*! ./imgDatasetFetch.mixins */ "./src/imgDatasetFetch.mixins.js"), __webpack_require__(/*! ./imgDatasetPreprocessing.mixins */ "./src/imgDatasetPreprocessing.mixins.js"), __webpack_require__(/*! ./imgDatasetGenerator.mixins */ "./src/imgDatasetGenerator.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _baseImgDataset, _causalNet, _causalNet2, _causalNet3, _causalNet4, _function, _imgDatasetFetch, _imgDatasetPreprocessing, _imgDatasetGenerator) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _baseImgDataset = _interopRequireDefault(_baseImgDataset);
  _function = _interopRequireDefault(_function);
  _imgDatasetFetch = _interopRequireDefault(_imgDatasetFetch);
  _imgDatasetPreprocessing = _interopRequireDefault(_imgDatasetPreprocessing);
  _imgDatasetGenerator = _interopRequireDefault(_imgDatasetGenerator);

  class MnistDataset extends _causalNet.Platform.mixWith(_baseImgDataset.default, [_imgDatasetFetch.default, _imgDatasetPreprocessing.default, _imgDatasetGenerator.default, _causalNet4.MemCacheMixins, _causalNet3.StorageMixins, _causalNet2.LoggerMixins]) {
    constructor(...args) {
      super(...args);
      this.F = new _function.default();
      this.Storage = _causalNet3.indexDBStorage;
      this.MemCache = _causalNet4.memDownCache;
    }

  }

  _exports.default = MnistDataset;
  ;
});

/***/ }),

/***/ "./src/baseImgDataset.js":
/*!*******************************!*\
  !*** ./src/baseImgDataset.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  _exports.default = BaseImgDataset;
});

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./function.mixins */ "./src/function.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _function) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _function = _interopRequireDefault(_function);

  class Function extends _causalNet2.Platform.mixWith(_causalNet.Function, [_function.default]) {
    constructor() {
      super();
    }

  }

  _exports.default = Function;
});

/***/ }),

/***/ "./src/function.mixins.js":
/*!********************************!*\
  !*** ./src/function.mixins.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  var _default = FunctionMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/imgDatasetFetch.mixins.js":
/*!***************************************!*\
  !*** ./src/imgDatasetFetch.mixins.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.utils */ "causal-net.utils")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const ImgDatasetFetchMixins = BaseImageClass => class extends BaseImageClass {
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
      let chunkIdxs = _causalNet.Sampling.choice(this.configuration.chunkList, numchunks);

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

  var _default = ImgDatasetFetchMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/imgDatasetGenerator.mixins.js":
/*!*******************************************!*\
  !*** ./src/imgDatasetGenerator.mixins.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.utils */ "causal-net.utils")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const ImgDatasetGeneratorMixins = BaseImageClass => class extends BaseImageClass {
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

      const batches = _causalNet.Sampling.choice(_batches, _batches.length);

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

  var _default = ImgDatasetGeneratorMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/imgDatasetPreprocessing.mixins.js":
/*!***********************************************!*\
  !*** ./src/imgDatasetPreprocessing.mixins.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! causal-net.preprocessing */ "causal-net.preprocessing")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const ImgDatasetPreprocessingMixins = BaseImageClass => class extends BaseImageClass {
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
          let splitedImgBuffer = await this.preprocessing.splitImageBuffer(sampleBuffer, ImageBufferSize);
          let splitedLabelBuffer = await this.preprocessing.splitImageBuffer(labelBuffer, LabelBufferSize);
          return {
            processedChunk: this.F.zip(splitedImgBuffer, splitedLabelBuffer),
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

      let duplexer = _causalNet.Stream.makeDuplex(WriteFn);

      let transformer = _causalNet.Stream.makeTransform(TransformFn);

      let stream = duplexer.pipe(transformer).pipe(duplexer);
      return stream;
    }

    async preprocessingDataset(saveDir = '/preprocessing/mnist/', storeInMemory = false) {
      this.preProcessingStorage = storeInMemory ? this.memCache : this.storage;
      this.preprocessing = new _causalNet2.Preprocessing();
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

  var _default = ImgDatasetPreprocessingMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./MNIST.ImgDataset */ "./src/MNIST.ImgDataset.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MNIST) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "MNIST", {
    enumerable: true,
    get: function () {
      return _MNIST.default;
    }
  });
  _MNIST = _interopRequireDefault(_MNIST);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uLi9jYXVzYWxpdHktbG9nL2Rpc3QvQGNhdXNhbE5ldC9sb2cud2ViLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvTU5JU1QuSW1nRGF0YXNldC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2Jhc2VJbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9pbWdEYXRhc2V0RmV0Y2gubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvaW1nRGF0YXNldEdlbmVyYXRvci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9pbWdEYXRhc2V0UHJlcHJvY2Vzc2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIk1uaXN0RGF0YXNldCIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VJbWdEYXRhc2V0IiwiSW1nRGF0YXNldEZldGNoTWl4aW5zIiwiSW1nRGF0YXNldFByZXByb2Nlc3NpbmdNaXhpbnMiLCJJbWdEYXRhc2V0R2VuZXJhdG9yTWl4aW5zIiwiTWVtQ2FjaGVNaXhpbnMiLCJTdG9yYWdlTWl4aW5zIiwiTG9nZ2VyTWl4aW5zIiwiY29uc3RydWN0b3IiLCJhcmdzIiwiRiIsIkZ1bmN0aW9uIiwiU3RvcmFnZSIsImluZGV4REJTdG9yYWdlIiwiTWVtQ2FjaGUiLCJtZW1Eb3duQ2FjaGUiLCJkYXRhc2V0Q29uZmlndXJlIiwiY29uZmlndXJhdGlvbiIsIm51bVNhbXBsZXMiLCJzYW1wbGVTaXplIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwibnVtQ2xhc3MiLCJzdW1tYXJ5IiwiQmFzZUZ1bmN0aW9uIiwiRnVuY3Rpb25NaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImdldEltZ0J1ZmZlclNpemUiLCJpbWdTaXplIiwiUiIsInJlZHVjZSIsInMiLCJkIiwiZ2VuZXJhdG9yV2l0aEluZGV4IiwiaXRlbXMiLCJhZGRJbmRleCIsIm1hcCIsImlkeCIsInNwbGl0VHJhaW5UZXN0U2V0Iiwic3BsaXRJbmRleCIsInNwbGl0QXQiLCJCYXNlSW1hZ2VDbGFzcyIsImZldGNoTGFiZWxDaHVuayIsInNhdmVEaXIiLCJsYWJlbENodW5rIiwibGFiZWxDaHVua1VybCIsImRhdGFzZXRVcmwiLCJsYWJlbFNhdmVQYXRoIiwic3RvcmFnZSIsImZldGNoRmlsZSIsImZldGNoU2FtcGxlQ2h1bmsiLCJzYW1wbGVDaHVuayIsInNhbXBsZUNodW5rVXJsIiwic2FtbXBsZVNhdmVQYXRoIiwibG9nZ2VyIiwiZGVidWciLCJmZXRjaFBOR0ZpbGUiLCJzZWxlY3RDaHVua3MiLCJudW1jaHVua3MiLCJzZWxlY3RCeSIsImNodW5rSWR4cyIsIlNhbXBsaW5nIiwiY2hvaWNlIiwiY2h1bmtMaXN0IiwiaXRoIiwiZmV0Y2hEYXRhc2V0Iiwic2VsZWN0ZWRDaHVua3MiLCJzYXZlZENodW5rcyIsInNhbXBsZVBhdGgiLCJsYWJlbFBhdGgiLCJwdXNoIiwicHJvZ3Jlc3MiLCJzYXZlQ2h1bmtzIiwidW56aXAiLCJnZXRUcmFpblRlc3RTZXQiLCJ0cmFpblNpemUiLCJwYXJzZUludCIsInNhdmVkUHJlcHJvY2Vzc2luZyIsImxlbmd0aCIsInRyYWluU2V0IiwidGVzdFNldCIsIm1ha2VTYW1wbGVHZW5lcmF0b3IiLCJzYW1wbGVJZHhTZXQiLCJiYXRjaFNpemUiLCJzdGFydCIsImVuZCIsIkVycm9yIiwiX2JhdGNoZXMiLCJoc3BsaXRFdmVyeSIsImJhdGNoZXMiLCJuZXh0SW5kZXgiLCJpdGVyYXRpb25Db3VudCIsInN0ZXAiLCJiYXRjaEdlbmVyYXRvciIsIm5leHQiLCJiYXRjaFNhbXBsZXMiLCJiYXRjaExhYmVscyIsInNhbXBsZUl0ZW0iLCJwcmVQcm9jZXNzaW5nU3RvcmFnZSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJkYXRhIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbSIsIkltYWdlQnVmZmVyU2l6ZSIsIkxhYmVsQnVmZmVyU2l6ZSIsImltYWdlQnVmZmVyU2l6ZSIsImxhYmVsQnVmZmVyU2l6ZSIsIlRyYW5zZm9ybUZuIiwiY2h1bmsiLCJjaHVua0VuY29kaW5nIiwiYWZ0ZXJUcmFuc2Zvcm1GbiIsIlRyYW5zZm9ybUFzeW5jIiwic2FtcGxlQnVmZmVyIiwic2FtcGxlIiwibGFiZWxCdWZmZXIiLCJsYWJlbCIsInNwbGl0ZWRJbWdCdWZmZXIiLCJwcmVwcm9jZXNzaW5nIiwic3BsaXRJbWFnZUJ1ZmZlciIsInNwbGl0ZWRMYWJlbEJ1ZmZlciIsInByb2Nlc3NlZENodW5rIiwiemlwIiwiY2h1bmtJZHgiLCJ0aGVuIiwiV3JpdGVGbiIsImNhbGxiYWNrIiwiV3JpdGVBc3luYyIsImdlbmVyYXRvciIsImNodW5rU2FtcGxlUGF0aCIsInNldEl0ZW0iLCJjaHVua0xhYmVsUGF0aCIsInJlc3VsdCIsImR1cGxleGVyIiwiU3RyZWFtIiwibWFrZUR1cGxleCIsInRyYW5zZm9ybWVyIiwibWFrZVRyYW5zZm9ybSIsInN0cmVhbSIsInBpcGUiLCJwcmVwcm9jZXNzaW5nRGF0YXNldCIsInN0b3JlSW5NZW1vcnkiLCJtZW1DYWNoZSIsIlByZXByb2Nlc3NpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxJQUFJLElBQXlEO0FBQzdELDJCQUEyQixtQkFBTyxDQUFDLDBDQUFrQjtBQUNyRCxNQUFNLEVBS3VEO0FBQzdELENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxNQUFNLFlBQVk7QUFDckIsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHVCQUF1QixNQUFNLGtCQUFrQixpQ0FBaUM7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxNQUFNLFlBQVk7QUFDckIsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnR0FBZ0c7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsTUFBTSxZQUFZO0FBQ3JCLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxNQUFNLFlBQVk7QUFDckIsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsaUJBQWlCO0FBQ2hELFNBQVM7QUFDVDtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHdDQUF3Qyx5QkFBeUIsbUNBQW1DLDJDQUEyQyw4QkFBOEI7QUFDN0ssU0FBUztBQUNUO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsU0FBUztBQUNUO0FBQ0E7QUFDQSxpQ0FBaUMsb0JBQW9CO0FBQ3JELFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkJBQTZCLDBCQUEwQjtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE1BQU0sWUFBWTtBQUNyQixDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE1BQU0sWUFBWTtBQUNyQixDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7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bE5ldC9kYXRhc2V0cy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5tZW1jYWNoZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9iYXNlTG9nLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvYmFzZUxvZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICBjbGFzcyBCYXNlTG9nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuQWNjZXB0ZWRMZXZlbHMgPSB7XG4gICAgICAgIGRlYnVnOiAwLFxuICAgICAgICBsb2c6IDEsXG4gICAgICAgIHdhcm5pbmc6IDIsXG4gICAgICAgIGVycm9yOiAzXG4gICAgICB9O1xuICAgICAgdGhpcy5yQWNjZXB0ZWRMZXZlbHMgPSB7XG4gICAgICAgIDA6ICdkZWJ1ZycsXG4gICAgICAgIDE6ICdsb2cnLFxuICAgICAgICAyOiAnd2FybmluZycsXG4gICAgICAgIDM6ICdlcnJvcidcbiAgICAgIH07XG4gICAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXTtcbiAgICB9XG5cbiAgICBzZXQgTGV2ZWwobGV2ZWwpIHtcbiAgICAgIGlmICh0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKGAke2xldmVsfSBtdXN0IGJlIG9uZSBvZiAke09iamVjdC5rZXlzKHRoaXMuQWNjZXB0ZWRMZXZlbHMpfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBMZXZlbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJBY2NlcHRlZExldmVsc1t0aGlzLmxldmVsXTtcbiAgICB9XG5cbiAgfVxuXG4gIF9leHBvcnRzLmRlZmF1bHQgPSBCYXNlTG9nO1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGVybUxvZyAqLyBcIi4vc3JjL3Rlcm1Mb2cuanNcIiksIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYmFzZUxvZyAqLyBcIi4vc3JjL2Jhc2VMb2cuanNcIiksIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbG9nZ2VyLm1peGlucyAqLyBcIi4vc3JjL2xvZ2dlci5taXhpbnMuanNcIildLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzLCBfdGVybUxvZywgX2Jhc2VMb2csIF9sb2dnZXIpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiKTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJMb2dnZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3Rlcm1Mb2cuZGVmYXVsdDtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiQmFzZUxvZ1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfYmFzZUxvZy5kZWZhdWx0O1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJMb2dnZXJNaXhpbnNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2xvZ2dlci5kZWZhdWx0O1xuICAgIH1cbiAgfSk7XG4gIF90ZXJtTG9nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVybUxvZyk7XG4gIF9iYXNlTG9nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFzZUxvZyk7XG4gIF9sb2dnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2dnZXIpO1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2xvZ2dlci5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9sb2dnZXIubWl4aW5zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0c10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4gIGNvbnN0IExvZ2dlck1peGlucyA9IEJhc2VkQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlZENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG5cbiAgICBwcm9ncmVzcyhwcm9ncmVzc01lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxvZ2dlci5wcm9ncmVzcykge1xuICAgICAgICB0aGlzLmxvZ2dlci5wcm9ncmVzcyhwcm9ncmVzc01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldCBMb2dnZXIobG9nZ2VyKSB7XG4gICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB9XG5cbiAgICBnZXQgTG9nZ2VyKCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyO1xuICAgIH1cblxuICB9O1xuXG4gIHZhciBfZGVmYXVsdCA9IExvZ2dlck1peGlucztcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3ByZXR0eUpzb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wcmV0dHlKc29uLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0c10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4gIC8vIG9yaWdpbiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2x1Y3lnaWxiZXJ0L2pzb24tZGlzcGxheS9ibG9iL21hc3Rlci9qc29uLWRpc3BsYXkuanNcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE3IEx1Y3kgR2lsYmVydFxuICBjbGFzcyBKc29uVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc3RhdGljIEpTT05EaXNwbGF5KGpzb24sIG9wZW5MZXZlbHNBcmcsIHN0eWxlT3B0aW9uc0FyZykge1xuICAgICAgdmFyIERFRkFVTFRfU1RZTEVfT1BUSU9OUyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHRhZzogJ3ByZScsXG4gICAgICAgICAgc3R5bGU6ICdwYWRkaW5nOiA1cHg7IGZvbnQtc2l6ZTogMXJlbTsnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlQ29udGFpbmVyOiB7XG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICBzdHlsZTogJ21hcmdpbi1ib3R0b206IDNweDsnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXI7J1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZVRleHQ6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgb3BlbkJ1dHRvbjoge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW46IDBweCA3cHggMHB4IDJweDsgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAnICsgJ2JvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjazsnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRzQ29udGFpbmVyOiB7XG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICBzdHlsZTogJ3BhZGRpbmctbGVmdDogMThweDsnXG4gICAgICAgIH0sXG4gICAgICAgIGtleVZhbHVlUGFpcjoge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDJweDsnXG4gICAgICAgIH0sXG4gICAgICAgIGtleToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGRhcmtibHVlOydcbiAgICAgICAgfSxcbiAgICAgICAgc3ltYm9sVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBkYXJrZ3JlZW47J1xuICAgICAgICB9LFxuICAgICAgICBzdHJpbmdWYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGNyaW1zb247J1xuICAgICAgICB9LFxuICAgICAgICBudW1iZXJWYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGJsdWU7J1xuICAgICAgICB9LFxuICAgICAgICBib29sZWFuVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBibHVlOydcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbFZhbHVlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjb2xvcjogYmx1ZTsnXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgb3BlbkxldmVscyA9IGlzTmFOKHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpKSA/IEluZmluaXR5IDogcGFyc2VJbnQob3BlbkxldmVsc0FyZyk7XG4gICAgICB2YXIgc3R5bGVPcHRpb25zID0gdHlwZW9mIHN0eWxlT3B0aW9uc0FyZyA9PT0gJ29iamVjdCcgPyBtZXJnZVN0eWxlT3B0aW9ucyhERUZBVUxUX1NUWUxFX09QVElPTlMsIHN0eWxlT3B0aW9uc0FyZykgOiBERUZBVUxUX1NUWUxFX09QVElPTlM7XG5cbiAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcblxuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnJvb3QudGFnKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnJvb3Quc3R5bGU7XG5cbiAgICAgICAgaWYgKGpzb24gPT09IG51bGwgfHwganNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHZvaWRFbGVtZW50ID0gZ2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh2b2lkRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICB2YXIgZGF0ZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhciBub25FeHBhbmRhYmxlRWxlbWVudCA9IGdldFZhbHVlKGpzb24pO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9uRXhwYW5kYWJsZUVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0aXRsZSA9IEFycmF5LmlzQXJyYXkoanNvbikgPyAnQXJyYXlbJyArIGpzb24ubGVuZ3RoICsgJ10nIDogJ09iamVjdCc7XG4gICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gb3BlbkxldmVscyA8IDE7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChnZXRUaXRsZSh0aXRsZSwgbnVsbCwgdGhpc0xldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCAxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIGluZGV4KSB7XG4gICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgICAgdmFyIG5leHRMZXZlbElzQ2xvc2VkID0gaW5kZXggKyAxID4gb3BlbkxldmVscztcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRlbnRzQ29udGFpbmVyKHRoaXNMZXZlbElzQ2xvc2VkKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnQXJyYXlbJyArIGpzb25ba2V5XS5sZW5ndGggKyAnXScsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSA9PT0gbnVsbCB8fCBqc29uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIG51bGwpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0udG9JU09TdHJpbmcoKSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnT2JqZWN0Jywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhqc29uKS5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoc3ltYm9sLnRvU3RyaW5nKCksIGpzb25bc3ltYm9sXSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0VGl0bGUodGl0bGVUZXh0LCBvcHRpb25hbEtleSwgbGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICB2YXIgY3VycmVudGx5Q2xvc2VkID0gbGV2ZWxJc0Nsb3NlZDtcbiAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIuc3R5bGU7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAndGl0bGVDb250YWluZXInKTtcbiAgICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICAgIHZhciB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZS50YWcpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZS5zdHlsZTtcbiAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZChnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpKTtcblxuICAgICAgICBpZiAob3B0aW9uYWxLZXkpIHtcbiAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkob3B0aW9uYWxLZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuXG4gICAgICAgIHRpdGxlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBvcGVuQnV0dG9uID0gdGl0bGVFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgb2JqZWN0Q29udGVudHMuc3R5bGUuZGlzcGxheSA9IGN1cnJlbnRseUNsb3NlZCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgb3BlbkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50bHlDbG9zZWQgPyAncm90YXRlKDkwZGVnKScgOiAncm90YXRlKDBkZWcpJztcbiAgICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm9wZW5CdXR0b24udGFnKTtcbiAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm9wZW5CdXR0b24uc3R5bGU7XG4gICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0Q29udGVudHNDb250YWluZXIoaXNDbG9zZWQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ2NvbnRlbnRzQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNDbG9zZWQgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHBhaXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnRhZyk7XG4gICAgICAgIHBhaXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnN0eWxlO1xuICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldFZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiBwYWlyRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0S2V5KG5hbWUpIHtcbiAgICAgICAgdmFyIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXkudGFnKTtcbiAgICAgICAga2V5RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleS5zdHlsZTtcbiAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lICsgJzogJykpO1xuICAgICAgICByZXR1cm4ga2V5RWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgICAgdmFyIG51bGxUeXBlID0gJ29iamVjdCc7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCInICsgdmFsdWUgKyAnXCInKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS50YWcpO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIG51bGxUeXBlOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udWxsVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgICB2YXIgbWVyZ2VkID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgbWVyZ2VkW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0c1trZXldLCBvdmVycmlkZXNba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVuZGVyKCk7XG4gICAgfVxuXG4gIH1cblxuICBfZXhwb3J0cy5kZWZhdWx0ID0gSnNvblZpZXc7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2cuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VMb2cgKi8gXCIuL3NyYy9iYXNlTG9nLmpzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Rlcm1Mb2cubWl4aW5zLm5vZGUgKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Rlcm1Mb2cubWl4aW5zLndlYiAqLyBcIi4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC51dGlscyAqLyBcImNhdXNhbC1uZXQudXRpbHNcIildLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzLCBfYmFzZUxvZywgX3Rlcm1Mb2dNaXhpbnMsIF90ZXJtTG9nTWl4aW5zMiwgX2NhdXNhbE5ldCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgX2Jhc2VMb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlTG9nKTtcbiAgX3Rlcm1Mb2dNaXhpbnMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXJtTG9nTWl4aW5zKTtcbiAgX3Rlcm1Mb2dNaXhpbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVybUxvZ01peGluczIpO1xuXG4gIGNsYXNzIFRlcm1Mb2cgZXh0ZW5kcyBfY2F1c2FsTmV0LlBsYXRmb3JtLm1peFdpdGgoX2Jhc2VMb2cuZGVmYXVsdCwge1xuICAgICdub2RlJzogW190ZXJtTG9nTWl4aW5zLmRlZmF1bHRdLFxuICAgICd3ZWInOiBbX3Rlcm1Mb2dNaXhpbnMyLmRlZmF1bHRdXG4gIH0pIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gIH1cblxuICBjb25zdCBMb2dnZXIgPSBuZXcgVGVybUxvZygpO1xuICB2YXIgX2RlZmF1bHQgPSBMb2dnZXI7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICBjb25zdCBMb2dOb2RlTWl4aW5zID0gTG9nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzcyB7XG4gICAgY29ubmVjdChjaGFubmVsKSB7Ly9ub3RoaW5nXG4gICAgfVxuXG4gICAgbG9nKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSkgey8vVE9ETzogaW1wbGVtZW50IHByb2dyZXNzIHNob3dcbiAgICB9XG5cbiAgICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cblxuICB9O1xuXG4gIHZhciBfZGVmYXVsdCA9IExvZ05vZGVNaXhpbnM7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wcmV0dHlKc29uICovIFwiLi9zcmMvcHJldHR5SnNvbi5qc1wiKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMsIF9wcmV0dHlKc29uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIik7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBfcHJldHR5SnNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXR0eUpzb24pO1xuXG4gIGNvbnN0IFdlYk5vZGVNaXhpbnMgPSBMb2dDbGFzcyA9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNzIHtcbiAgICBjb25uZWN0KGRvY3VtZW50RWwgPSBudWxsKSB7XG4gICAgICBkb2N1bWVudEVsID0gZG9jdW1lbnRFbCB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBcImxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcIjtcbiAgICAgIGRvY3VtZW50RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB0aGlzLmZyYW1lRWwgPSBkb2N1bWVudEVsO1xuICAgICAgdGhpcy5sb2dnZXJFbCA9IGRvY3VtZW50RWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1bFwiKVswXTtcbiAgICB9XG5cbiAgICBzY3JvbGxCb3R0b20oZWxlbWVudCA9IG51bGwpIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuZnJhbWVFbDtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9XG5cbiAgICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSkge1xuICAgICAgLy8gbGV0IG5vZGUgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGk6bnRoLWxhc3Qtb2YtdHlwZSgxKVwiKTtcbiAgICAgIGxldCBMSU5vZGVzID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgICAgbGV0IG5vZGUgPSBMSU5vZGVzW0xJTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghbm9kZSB8fCBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlci1wcm9ncmVzc1wiKSkge1xuICAgICAgICAvL2NyZWF0ZSBuZXcgZWxcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VyLXByb2dyZXNzXCIpO1xuICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBsZXQganNvbk5vZGUgPSBfcHJldHR5SnNvbi5kZWZhdWx0LkpTT05EaXNwbGF5KHByb2Nlc3NNZXNzYWdlKTtcblxuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgfVxuXG4gICAgbG9nKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMubG9nZ2VyRWwgfHwgIXRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gJ2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlOyc7XG5cbiAgICAgIGxldCBqc29uTm9kZSA9IF9wcmV0dHlKc29uLmRlZmF1bHQuSlNPTkRpc3BsYXkobWVzc2FnZSk7XG5cbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IC8vbm8gc2hvdyBvbiB3ZWIgc2NyZWVuOyAgICAgICAgXG5cblxuICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgfTtcblxuICB2YXIgX2RlZmF1bHQgPSBXZWJOb2RlTWl4aW5zO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDA6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIG11bHRpIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zcmMvaW5kZXguanMgKi9cIi4vc3JjL2luZGV4LmpzXCIpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQudXRpbHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyeHZaeTkzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5c2IyY3ZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5c2IyY3ZMMmh2YldVdmFIVjVibWh1WjNWNVpXNHZaMmwwYUhWaUwyTmhkWE5oYkdsMGVTOXViMlJsWDIxdlpIVnNaWE12UUdKaFltVnNMM0oxYm5ScGJXVXZhR1ZzY0dWeWN5OXBiblJsY205d1VtVnhkV2x5WlVSbFptRjFiSFF1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdkxpOXpjbU12WW1GelpVeHZaeTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk4dUwzTnlZeTlzYjJkblpYSXViV2w0YVc1ekxtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJHOW5MeTR2YzNKakwzQnlaWFIwZVVwemIyNHVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2TGk5emNtTXZkR1Z5YlV4dlp5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyeHZaeTh1TDNOeVl5OTBaWEp0VEc5bkxtMXBlR2x1Y3k1dWIyUmxMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiRzluTHk0dmMzSmpMM1JsY20xTWIyY3ViV2w0YVc1ekxuZGxZaTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpSmRMQ0p1WVcxbGN5STZXeUpDWVhObFRHOW5JaXdpWTI5dWMzUnlkV04wYjNJaUxDSkJZMk5sY0hSbFpFeGxkbVZzY3lJc0ltUmxZblZuSWl3aWJHOW5JaXdpZDJGeWJtbHVaeUlzSW1WeWNtOXlJaXdpY2tGalkyVndkR1ZrVEdWMlpXeHpJaXdpYkdWMlpXd2lMQ0pNWlhabGJDSXNJblZ1WkdWbWFXNWxaQ0lzSWtWeWNtOXlJaXdpVDJKcVpXTjBJaXdpYTJWNWN5SXNJa3h2WjJkbGNrMXBlR2x1Y3lJc0lrSmhjMlZrUTJ4aGMzTWlMQ0poY21keklpd2liRzluWjJWeUlpd2lZMjl1YzI5c1pTSXNJbkJ5YjJkeVpYTnpJaXdpY0hKdlozSmxjM05OWlhOellXZGxJaXdpVEc5bloyVnlJaXdpU25OdmJsWnBaWGNpTENKS1UwOU9SR2x6Y0d4aGVTSXNJbXB6YjI0aUxDSnZjR1Z1VEdWMlpXeHpRWEpuSWl3aWMzUjViR1ZQY0hScGIyNXpRWEpuSWl3aVJFVkdRVlZNVkY5VFZGbE1SVjlQVUZSSlQwNVRJaXdpY205dmRDSXNJblJoWnlJc0luTjBlV3hsSWl3aWRHbDBiR1ZEYjI1MFlXbHVaWElpTENKMGFYUnNaU0lzSW5ScGRHeGxWR1Y0ZENJc0ltOXdaVzVDZFhSMGIyNGlMQ0pqYjI1MFpXNTBjME52Ym5SaGFXNWxjaUlzSW10bGVWWmhiSFZsVUdGcGNpSXNJbXRsZVNJc0luTjViV0p2YkZaaGJIVmxJaXdpYzNSeWFXNW5WbUZzZFdVaUxDSnVkVzFpWlhKV1lXeDFaU0lzSW1KdmIyeGxZVzVXWVd4MVpTSXNJbTUxYkd4V1lXeDFaU0lzSW05d1pXNU1aWFpsYkhNaUxDSnBjMDVoVGlJc0luQmhjbk5sU1c1MElpd2lTVzVtYVc1cGRIa2lMQ0p6ZEhsc1pVOXdkR2x2Ym5NaUxDSnRaWEpuWlZOMGVXeGxUM0IwYVc5dWN5SXNJbUZ6YzJsbmJpSXNJblJoY21kbGRDSXNJbFI1Y0dWRmNuSnZjaUlzSW5Sdklpd2lhVzVrWlhnaUxDSmhjbWQxYldWdWRITWlMQ0pzWlc1bmRHZ2lMQ0p1WlhoMFUyOTFjbU5sSWl3aWJtVjRkRXRsZVNJc0luQnliM1J2ZEhsd1pTSXNJbWhoYzA5M2JsQnliM0JsY25SNUlpd2lZMkZzYkNJc0luSmxibVJsY2lJc0ltVnNaVzFsYm5RaUxDSmtiMk4xYldWdWRDSXNJbU55WldGMFpVVnNaVzFsYm5RaUxDSmpjM05VWlhoMElpd2lkbTlwWkVWc1pXMWxiblFpTENKblpYUldZV3gxWlNJc0ltRndjR1Z1WkVOb2FXeGtJaXdpUkdGMFpTSXNJbVJoZEdWRmJHVnRaVzUwSWl3aWRHOUpVMDlUZEhKcGJtY2lMQ0p1YjI1RmVIQmhibVJoWW14bFJXeGxiV1Z1ZENJc0lrRnljbUY1SWl3aWFYTkJjbkpoZVNJc0luUm9hWE5NWlhabGJFbHpRMnh2YzJWa0lpd2laMlYwVkdsMGJHVWlMQ0pqYjI1MlpYSjBTbk52YmxSdlJXeGxiV1Z1ZEhNaUxDSnVaWGgwVEdWMlpXeEpjME5zYjNObFpDSXNJbU52Ym5SaGFXNWxjaUlzSW1kbGRFTnZiblJsYm5SelEyOXVkR0ZwYm1WeUlpd2laMlYwVTNSaGJtUmhjbVJRWVdseUlpd2laMlYwVDNkdVVISnZjR1Z5ZEhsVGVXMWliMnh6SWl3aVptOXlSV0ZqYUNJc0luTjViV0p2YkNJc0luUnZVM1J5YVc1bklpd2liM0IwYVc5dVlXeExaWGtpTENKc1pYWmxiRWx6UTJ4dmMyVmtJaXdpWTNWeWNtVnVkR3g1UTJ4dmMyVmtJaXdpWTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0lzSW5ObGRFRjBkSEpwWW5WMFpTSXNJblJsZUhSRmJHVnRaVzUwSWl3aWRHbDBiR1ZGYkdWdFpXNTBJaXdpWjJWMFQzQmxia0oxZEhSdmJpSXNJbWRsZEV0bGVTSXNJbU55WldGMFpWUmxlSFJPYjJSbElpd2liMjVqYkdsamF5SXNJbVpwY25OMFEyaHBiR1FpTENKdlltcGxZM1JEYjI1MFpXNTBjeUlzSW5CaGNtVnVkRTV2WkdVaUxDSnVaWGgwVTJsaWJHbHVaeUlzSW1ScGMzQnNZWGtpTENKMGNtRnVjMlp2Y20waUxDSmlkWFIwYjI1RmJHVnRaVzUwSWl3aWFYTkRiRzl6WldRaUxDSjJZV3gxWlNJc0luQmhhWEpGYkdWdFpXNTBJaXdpYm1GdFpTSXNJbXRsZVVWc1pXMWxiblFpTENKMllXeDFaVVZzWlcxbGJuUWlMQ0p1ZFd4c1ZIbHdaU0lzSW1SbFptRjFiSFJ6SWl3aWIzWmxjbkpwWkdWeklpd2liV1Z5WjJWa0lpd2lWR1Z5YlV4dlp5SXNJbEJzWVhSbWIzSnRJaXdpYldsNFYybDBhQ0lzSWt4dlowNXZaR1ZOYVhocGJuTWlMQ0pYWldKT2IyUmxUV2w0YVc1eklpd2lURzluUTJ4aGMzTWlMQ0pqYjI1dVpXTjBJaXdpWTJoaGJtNWxiQ0lzSW0xbGMzTmhaMlVpTENKd2NtOWpaWE56VFdWemMyRm5aU0lzSW1SdlkzVnRaVzUwUld3aUxDSmliMlI1SWl3aWJtOWtaU0lzSW1aeVlXMWxSV3dpTENKc2IyZG5aWEpGYkNJc0ltZGxkRVZzWlcxbGJuUnpRbmxVWVdkT1lXMWxJaXdpYzJOeWIyeHNRbTkwZEc5dElpd2ljMk55YjJ4c1ZHOXdJaXdpYzJOeWIyeHNTR1ZwWjJoMElpd2lZMnhwWlc1MFNHVnBaMmgwSWl3aVRFbE9iMlJsY3lJc0ltTnNZWE56VEdsemRDSXNJbU52Ym5SaGFXNXpJaXdpWVdSa0lpd2lhbk52Yms1dlpHVWlMQ0prWVhSbElpd2lhVzV1WlhKSVZFMU1JbDBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFFzVHp0QlExWkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2EwUkJRVEJETEdkRFFVRm5RenRCUVVNeFJUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZEZRVUYzUkN4clFrRkJhMEk3UVVGRE1VVTdRVUZEUVN4NVJFRkJhVVFzWTBGQll6dEJRVU12UkRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVSQlFYbERMR2xEUVVGcFF6dEJRVU14UlN4M1NFRkJaMGdzYlVKQlFXMUNMRVZCUVVVN1FVRkRja2s3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UTBGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3UVVGRGRrUXNlVU5CUVdsRExHVkJRV1U3UVVGRGFFUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzT0VSQlFYTkVMQ3RFUVVFclJEczdRVUZGY2tnN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN096czdPenM3T3pzN08wRkRiRVpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzZDBNN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFRtVXNVVUZCVFVFc1QwRkJUaXhEUVVGaE8wRkJRM2hDUXl4bFFVRlhMRWRCUVVVN1FVRkRWQ3hYUVVGTFF5eGpRVUZNTEVkQlFYTkNPMEZCUVVORExHRkJRVXNzUlVGQlJTeERRVUZTTzBGQlFWZERMRmRCUVVjc1JVRkJReXhEUVVGbU8wRkJRV3RDUXl4bFFVRlBMRVZCUVVNc1EwRkJNVUk3UVVGQk5rSkRMR0ZCUVVzc1JVRkJSVHRCUVVGd1F5eFBRVUYwUWp0QlFVTkJMRmRCUVV0RExHVkJRVXdzUjBGQmRVSTdRVUZCUXl4WFFVRkZMRTlCUVVnN1FVRkJXU3hYUVVGSExFdEJRV1k3UVVGQmMwSXNWMEZCUnl4VFFVRjZRanRCUVVGdlF5eFhRVUZITzBGQlFYWkRMRTlCUVhaQ08wRkJRMEVzVjBGQlMwTXNTMEZCVEN4SFFVRmhMRXRCUVV0T0xHTkJRVXdzUTBGQmIwSXNUMEZCY0VJc1EwRkJZanRCUVVOSU96dEJRVU5FTEZGQlFVbFBMRXRCUVVvc1EwRkJWVVFzUzBGQlZpeEZRVUZuUWp0QlFVTmFMRlZCUVVjc1MwRkJTMDRzWTBGQlRDeERRVUZ2UWswc1MwRkJjRUlzVFVGQk5rSkZMRk5CUVdoRExFVkJRVEJETzBGQlEzUkRMR0ZCUVV0R0xFdEJRVXdzUjBGQllTeExRVUZMVGl4alFVRk1MRU5CUVc5Q1RTeExRVUZ3UWl4RFFVRmlPMEZCUTBnc1QwRkdSQ3hOUVVkSk8wRkJRMEVzWTBGQlRVY3NTMEZCU3l4RFFVRkZMRWRCUVVWSUxFdEJRVTBzYlVKQlFXdENTU3hOUVVGTkxFTkJRVU5ETEVsQlFWQXNRMEZCV1N4TFFVRkxXQ3hqUVVGcVFpeERRVUZwUXl4RlFVRTNSQ3hEUVVGWU8wRkJRMGc3UVVGRFNqczdRVUZEUkN4UlFVRkpUeXhMUVVGS0xFZEJRVmM3UVVGRFVDeGhRVUZQTEV0QlFVdEdMR1ZCUVV3c1EwRkJjVUlzUzBGQlMwTXNTMEZCTVVJc1EwRkJVRHRCUVVOSU96dEJRV2hDZFVJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVU5CTlVJc1VVRkJUVTBzV1VGQldTeEhRVUZKUXl4VlFVRkVMRWxCUVdVc1kwRkJZMEVzVlVGQlpDeERRVUYzUWp0QlFVTjRSR1FzWlVGQlZ5eERRVUZETEVkQlFVZGxMRWxCUVVvc1JVRkJVenRCUVVOb1FpeFpRVUZOTEVkQlFVZEJMRWxCUVZRN1FVRkRRU3hYUVVGTFF5eE5RVUZNTEVkQlFXTkRMRTlCUVdRN1FVRkRTRHM3UVVGRFJFTXNXVUZCVVN4RFFVRkRReXhsUVVGRUxFVkJRV2xDTzBGQlEzSkNMRlZCUVVjc1MwRkJTMGdzVFVGQlRDeERRVUZaUlN4UlFVRm1MRVZCUVhkQ08wRkJRM0JDTEdGQlFVdEdMRTFCUVV3c1EwRkJXVVVzVVVGQldpeERRVUZ4UWtNc1pVRkJja0k3UVVGRFNEdEJRVU5LT3p0QlFVTkVMRkZCUVVsRExFMUJRVW9zUTBGQlYwb3NUVUZCV0N4RlFVRnJRanRCUVVOa0xGZEJRVXRCTEUxQlFVd3NSMEZCWTBFc1RVRkJaRHRCUVVOSU96dEJRVVZFTEZGQlFVbEpMRTFCUVVvc1IwRkJXVHRCUVVOU0xHRkJRVThzUzBGQlMwb3NUVUZCV2p0QlFVTklPenRCUVdoQ2RVUXNSMEZCTlVRN08ybENRVzFDWlVnc1dUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMjVDWmp0QlFVTkJPMEZCUTJVc1VVRkJUVkVzVVVGQlRpeERRVUZqTzBGQlEzcENja0lzWlVGQlZ5eEhRVUZGTEVOQlExbzdPMEZCUTBRc1YwRkJUM05DTEZkQlFWQXNRMEZCYlVKRExFbEJRVzVDTEVWQlFYbENReXhoUVVGNlFpeEZRVUYzUTBNc1pVRkJlRU1zUlVGQmVVUTdRVUZEY2tRc1ZVRkJTVU1zY1VKQlFYRkNMRWRCUVVjN1FVRkRNVUpETEZsQlFVa3NSVUZCUlR0QlFVRkZReXhoUVVGSExFVkJRVVVzUzBGQlVEdEJRVUZqUXl4bFFVRkxMRVZCUVVVN1FVRkJja0lzVTBGRWIwSTdRVUZGTVVKRExITkNRVUZqTEVWQlFVVTdRVUZCUlVZc1lVRkJSeXhGUVVGRkxFdEJRVkE3UVVGQlkwTXNaVUZCU3l4RlFVRkZPMEZCUVhKQ0xGTkJSbFU3UVVGSE1VSkZMR0ZCUVVzc1JVRkJSVHRCUVVGRlNDeGhRVUZITEVWQlFVVXNUVUZCVUR0QlFVRmxReXhsUVVGTExFVkJRVVU3UVVGQmRFSXNVMEZJYlVJN1FVRkpNVUpITEdsQ1FVRlRMRVZCUVVVN1FVRkJSVW9zWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTEZOQlNtVTdRVUZMTVVKSkxHdENRVUZWTEVWQlFVVTdRVUZEVmt3c1lVRkJSeXhGUVVGRkxFMUJSRXM3UVVGRlZrTXNaVUZCU3l4RlFVRkZMSGRHUVVOQk8wRkJTRWNzVTBGTVl6dEJRVlV4UWtzc2VVSkJRV2xDTEVWQlFVVTdRVUZCUlU0c1lVRkJSeXhGUVVGRkxFdEJRVkE3UVVGQlkwTXNaVUZCU3l4RlFVRkZPMEZCUVhKQ0xGTkJWazg3UVVGWE1VSk5MRzlDUVVGWkxFVkJRVVU3UVVGQlJWQXNZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNMRk5CV0ZrN1FVRlpNVUpQTEZkQlFVY3NSVUZCUlR0QlFVRkZVaXhoUVVGSExFVkJRVVVzVFVGQlVEdEJRVUZsUXl4bFFVRkxMRVZCUVVVN1FVRkJkRUlzVTBGYWNVSTdRVUZoTVVKUkxHMUNRVUZYTEVWQlFVVTdRVUZCUlZRc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ0xGTkJZbUU3UVVGak1VSlRMRzFDUVVGWExFVkJRVVU3UVVGQlJWWXNZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNMRk5CWkdFN1FVRmxNVUpWTEcxQ1FVRlhMRVZCUVVVN1FVRkJSVmdzWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTEZOQlptRTdRVUZuUWpGQ1Z5eHZRa0ZCV1N4RlFVRkZPMEZCUVVWYUxHRkJRVWNzUlVGQlJTeE5RVUZRTzBGQlFXVkRMR1ZCUVVzc1JVRkJSVHRCUVVGMFFpeFRRV2hDV1R0QlFXbENNVUpaTEdsQ1FVRlRMRVZCUVVVN1FVRkJSV0lzWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTzBGQmFrSmxMRTlCUVRWQ08wRkJiVUpCTEZWQlFVbGhMRlZCUVZVc1IwRkJSME1zUzBGQlN5eERRVUZEUXl4UlFVRlJMRU5CUVVOd1FpeGhRVUZFTEVOQlFWUXNRMEZCVEN4SFFVRnBRM0ZDTEZGQlFXcERMRWRCUVRSRFJDeFJRVUZSTEVOQlFVTndRaXhoUVVGRUxFTkJRWEpGTzBGQlEwRXNWVUZCU1hOQ0xGbEJRVmtzUjBGQlJ5eFBRVUZQY2tJc1pVRkJVQ3hMUVVFeVFpeFJRVUV6UWl4SFFVTkZjMElzYVVKQlFXbENMRU5CUVVOeVFpeHhRa0ZCUkN4RlFVRjNRa1FzWlVGQmVFSXNRMEZFYmtJc1IwRkZSVU1zY1VKQlJuSkNPenRCUVVsQkxGVkJRVWtzVDBGQlQyWXNUVUZCVFN4RFFVRkRjVU1zVFVGQlpDeEpRVUYzUWl4VlFVRTFRaXhGUVVGM1F6dEJRVU4wUTNKRExHTkJRVTBzUTBGQlEzRkRMRTFCUVZBc1IwRkJaMElzVlVGQlUwTXNUVUZCVkN4RlFVRnBRanRCUVVNdlFpeGpRVUZKUVN4TlFVRk5MRWxCUVVrc1NVRkJaQ3hGUVVGdlFqdEJRVU5zUWl4clFrRkJUU3hKUVVGSlF5eFRRVUZLTEVOQlFXTXNORU5CUVdRc1EwRkJUanRCUVVORU96dEJRVVZFTEdOQlFVbERMRVZCUVVVc1IwRkJSM2hETEUxQlFVMHNRMEZCUTNORExFMUJRVVFzUTBGQlpqczdRVUZGUVN4bFFVRkxMRWxCUVVsSExFdEJRVXNzUjBGQlJ5eERRVUZxUWl4RlFVRnZRa0VzUzBGQlN5eEhRVUZIUXl4VFFVRlRMRU5CUVVORExFMUJRWFJETEVWQlFUaERSaXhMUVVGTExFVkJRVzVFTEVWQlFYVkVPMEZCUTNKRUxHZENRVUZKUnl4VlFVRlZMRWRCUVVkR0xGTkJRVk1zUTBGQlEwUXNTMEZCUkN4RFFVRXhRanM3UVVGRlFTeG5Ra0ZCU1Vjc1ZVRkJWU3hKUVVGSkxFbEJRV3hDTEVWQlFYZENPMEZCUTNSQ0xHMUNRVUZMTEVsQlFVbERMRTlCUVZRc1NVRkJiMEpFTEZWQlFYQkNMRVZCUVdkRE8wRkJRemxDTEc5Q1FVRkpOVU1zVFVGQlRTeERRVUZET0VNc1UwRkJVQ3hEUVVGcFFrTXNZMEZCYWtJc1EwRkJaME5ETEVsQlFXaERMRU5CUVhGRFNpeFZRVUZ5UXl4RlFVRnBSRU1zVDBGQmFrUXNRMEZCU2l4RlFVRXJSRHRCUVVNM1JFd3NiMEpCUVVVc1EwRkJRMHNzVDBGQlJDeERRVUZHTEVkQlFXTkVMRlZCUVZVc1EwRkJRME1zVDBGQlJDeERRVUY0UWp0QlFVTkVPMEZCUTBZN1FVRkRSanRCUVVOR096dEJRVU5FTEdsQ1FVRlBUQ3hGUVVGUU8wRkJRMFFzVTBGdVFrUTdRVUZ2UWtRN08wRkJSVVFzWlVGQlUxTXNUVUZCVkN4SFFVRnJRanRCUVVOb1FpeFpRVUZKUXl4UFFVRlBMRWRCUVVkRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTI1Q0xFbEJRV0lzUTBGQmEwSkRMRWRCUVhwRExFTkJRV1E3UVVGRFFXbERMR1ZCUVU4c1EwRkJRMmhETEV0QlFWSXNRMEZCWTIxRExFOUJRV1FzUjBGQmQwSnNRaXhaUVVGWkxFTkJRVU51UWl4SlFVRmlMRU5CUVd0Q1JTeExRVUV4UXpzN1FVRkZRU3haUVVGSlRpeEpRVUZKTEV0QlFVc3NTVUZCVkN4SlFVRnBRa0VzU1VGQlNTeExRVUZMWkN4VFFVRTVRaXhGUVVGNVF6dEJRVU4yUXl4alFVRkpkMFFzVjBGQlZ5eEhRVUZIUXl4UlFVRlJMRU5CUVVNc1NVRkJSQ3hEUVVFeFFqdEJRVU5CVEN4cFFrRkJUeXhEUVVGRFRTeFhRVUZTTEVOQlFXOUNSaXhYUVVGd1FqdEJRVU5FTEZOQlNFUXNUVUZIVHl4SlFVRkpNVU1zU1VGQlNTeFpRVUZaTmtNc1NVRkJjRUlzUlVGQk1FSTdRVUZETDBJc1kwRkJTVU1zVjBGQlZ5eEhRVUZIU0N4UlFVRlJMRU5CUVVNelF5eEpRVUZKTEVOQlFVTXJReXhYUVVGTUxFVkJRVVFzUTBGQk1VSTdRVUZEUVZRc2FVSkJRVThzUTBGQlEwMHNWMEZCVWl4RFFVRnZRa1VzVjBGQmNFSTdRVUZEUkN4VFFVaE5MRTFCUjBFc1NVRkJTU3hQUVVGUE9VTXNTVUZCVUN4TFFVRm5RaXhSUVVGd1FpeEZRVUU0UWp0QlFVTnVReXhqUVVGSlowUXNiMEpCUVc5Q0xFZEJRVWRNTEZGQlFWRXNRMEZCUXpORExFbEJRVVFzUTBGQmJrTTdRVUZEUVhORExHbENRVUZQTEVOQlFVTk5MRmRCUVZJc1EwRkJiMEpKTEc5Q1FVRndRanRCUVVORUxGTkJTRTBzVFVGSFFUdEJRVU5NTEdOQlFVbDRReXhMUVVGTExFZEJRVWQ1UXl4TFFVRkxMRU5CUVVORExFOUJRVTRzUTBGQlkyeEVMRWxCUVdRc1NVRkJjMElzVjBGQlYwRXNTVUZCU1N4RFFVRkRLMElzVFVGQmFFSXNSMEZCZVVJc1IwRkJMME1zUjBGQmNVUXNVVUZCYWtVN1FVRkRRU3hqUVVGSmIwSXNhVUpCUVdsQ0xFZEJRVWRvUXl4VlFVRlZMRWRCUVVjc1EwRkJja003UVVGRFFXMUNMR2xDUVVGUExFTkJRVU5OTEZkQlFWSXNRMEZCYjBKUkxGRkJRVkVzUTBGQlF6VkRMRXRCUVVRc1JVRkJVU3hKUVVGU0xFVkJRV015UXl4cFFrRkJaQ3hEUVVFMVFqdEJRVU5CWWl4cFFrRkJUeXhEUVVGRFRTeFhRVUZTTEVOQlFXOUNVeXh4UWtGQmNVSXNRMEZCUTNKRUxFbEJRVVFzUlVGQlR5eERRVUZRTEVOQlFYcERPMEZCUTBRN08wRkJSVVFzWlVGQlQzTkRMRTlCUVZBN1FVRkRSRHM3UVVGRlJDeGxRVUZUWlN4eFFrRkJWQ3hEUVVFclFuSkVMRWxCUVM5Q0xFVkJRWEZETmtJc1MwRkJja01zUlVGQk5FTTdRVUZETVVNc1dVRkJTWE5DTEdsQ1FVRnBRaXhIUVVGSGRFSXNTMEZCU3l4SFFVRkhWaXhWUVVGb1F6dEJRVU5CTEZsQlFVbHRReXhwUWtGQmFVSXNSMEZCUjNwQ0xFdEJRVXNzUjBGQlJ5eERRVUZTTEVkQlFWbFdMRlZCUVhCRE8wRkJRMEVzV1VGQlNXOURMRk5CUVZNc1IwRkJSME1zYjBKQlFXOUNMRU5CUVVOTUxHbENRVUZFTEVOQlFYQkRPenRCUVVOQkxHRkJRVXNzU1VGQlNYUkRMRWRCUVZRc1NVRkJaMEppTEVsQlFXaENMRVZCUVhOQ08wRkJRM0JDTEdOQlFVbHBSQ3hMUVVGTExFTkJRVU5ETEU5QlFVNHNRMEZCWTJ4RUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRnNRaXhEUVVGS0xFVkJRVGhDTzBGQlF6VkNNRU1zY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFsRXNVVUZCVVN4RFFVRkRMRmRCUVZkd1JDeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJTaXhEUVVGVmEwSXNUVUZCY2tJc1IwRkJPRUlzUjBGQkwwSXNSVUZCYjBOc1FpeEhRVUZ3UXl4RlFVRjVRM2xETEdsQ1FVRjZReXhEUVVFNVFqdEJRVU5CUXl4eFFrRkJVeXhEUVVGRFdDeFhRVUZXTEVOQlFYTkNVeXh4UWtGQmNVSXNRMEZCUTNKRUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRk1MRVZCUVZsblFpeExRVUZMTEVkQlFVY3NRMEZCY0VJc1EwRkJNME03UVVGRFJDeFhRVWhFTEUxQlIwOHNTVUZCU1RkQ0xFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRktMRXRCUVdNc1NVRkJaQ3hKUVVGelFtSXNTVUZCU1N4RFFVRkRZU3hIUVVGRUxFTkJRVW9zUzBGQll6TkNMRk5CUVhoRExFVkJRVzFFTzBGQlEzaEVjVVVzY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkROVU1zUjBGQlJDeEZRVUZOTEVsQlFVNHNRMEZCY2tNN1FVRkRSQ3hYUVVaTkxFMUJSVUVzU1VGQlNXSXNTVUZCU1N4RFFVRkRZU3hIUVVGRUxFTkJRVW9zV1VGQmNVSm5ReXhKUVVGNlFpeEZRVUVyUWp0QlFVTndRMVVzY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkROVU1zUjBGQlJDeEZRVUZOWWl4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlNpeERRVUZWYTBNc1YwRkJWaXhGUVVGT0xFTkJRWEpETzBGQlEwUXNWMEZHVFN4TlFVVkJMRWxCUVVrc1QwRkJUeTlETEVsQlFVa3NRMEZCUTJFc1IwRkJSQ3hEUVVGWUxFdEJRWEZDTEZGQlFYcENMRVZCUVcxRE8wRkJRM2hETUVNc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbEVzVVVGQlVTeERRVUZETEZGQlFVUXNSVUZCVjNaRExFZEJRVmdzUlVGQlowSjVReXhwUWtGQmFFSXNRMEZCT1VJN1FVRkRRVU1zY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFsTXNjVUpCUVhGQ0xFTkJRVU55UkN4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlRDeEZRVUZaWjBJc1MwRkJTeXhIUVVGSExFTkJRWEJDTEVOQlFUTkRPMEZCUTBRc1YwRklUU3hOUVVkQk8wRkJRMHd3UWl4eFFrRkJVeXhEUVVGRFdDeFhRVUZXTEVOQlFYTkNZU3hsUVVGbExFTkJRVU0xUXl4SFFVRkVMRVZCUVUxaUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRldMRU5CUVhKRE8wRkJRMFE3UVVGRFJqczdRVUZEUkN4WlFVRkpMRTlCUVU5NlFpeE5RVUZOTEVOQlFVTnpSU3h4UWtGQlpDeExRVUYzUXl4VlFVRTFReXhGUVVGM1JEdEJRVU4wUkhSRkxHZENRVUZOTEVOQlFVTnpSU3h4UWtGQlVDeERRVUUyUWpGRUxFbEJRVGRDTEVWQlFXMURNa1FzVDBGQmJrTXNRMEZCTWtNc1ZVRkJVME1zVFVGQlZDeEZRVUZwUWp0QlFVTXhSRXdzY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkRSeXhOUVVGTkxFTkJRVU5ETEZGQlFWQXNSVUZCUkN4RlFVRnZRamRFTEVsQlFVa3NRMEZCUXpSRUxFMUJRVVFzUTBGQmVFSXNRMEZCY2tNN1FVRkRSQ3hYUVVaRU8wRkJSMFE3TzBGQlJVUXNaVUZCVDB3c1UwRkJVRHRCUVVORU96dEJRVVZFTEdWQlFWTklMRkZCUVZRc1EwRkJhMEl6UXl4VFFVRnNRaXhGUVVFMlFuRkVMRmRCUVRkQ0xFVkJRVEJEUXl4aFFVRXhReXhGUVVGNVJEdEJRVU4yUkN4WlFVRkpReXhsUVVGbExFZEJRVWRFTEdGQlFYUkNPMEZCUTBFc1dVRkJTVVVzWjBKQlFXZENMRWRCUVVjeFFpeFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUpxUWl4WlFVRlpMRU5CUVVOb1FpeGpRVUZpTEVOQlFUUkNSaXhIUVVGdVJDeERRVUYyUWp0QlFVTkJORVFzZDBKQlFXZENMRU5CUVVNelJDeExRVUZxUWl4RFFVRjFRbTFETEU5QlFYWkNMRWRCUVdsRGJFSXNXVUZCV1N4RFFVRkRhRUlzWTBGQllpeERRVUUwUWtRc1MwRkJOMFE3UVVGRFFUSkVMSGRDUVVGblFpeERRVUZEUXl4WlFVRnFRaXhEUVVFNFFpeFhRVUU1UWl4RlFVRXlReXhuUWtGQk0wTTdRVUZEUVN4WlFVRkpReXhYUVVGWExFZEJRVWMxUWl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU5rTEZOQlFXSXNRMEZCZFVKS0xFZEJRVGxETEVOQlFXeENPMEZCUTBFc1dVRkJTU3RFTEZsQlFWa3NSMEZCUnpkQ0xGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTJZc1MwRkJZaXhEUVVGdFFrZ3NSMEZCTVVNc1EwRkJia0k3UVVGRFFTdEVMRzlDUVVGWkxFTkJRVU01UkN4TFFVRmlMRU5CUVcxQ2JVTXNUMEZCYmtJc1IwRkJOa0pzUWl4WlFVRlpMRU5CUVVObUxFdEJRV0lzUTBGQmJVSkdMRXRCUVdoRU8wRkJRMEUyUkN4dFFrRkJWeXhEUVVGRE4wUXNTMEZCV2l4RFFVRnJRbTFETEU5QlFXeENMRWRCUVRSQ2JFSXNXVUZCV1N4RFFVRkRaQ3hUUVVGaUxFTkJRWFZDU0N4TFFVRnVSRHRCUVVWQk9FUXNiMEpCUVZrc1EwRkJRM2hDTEZkQlFXSXNRMEZCZVVKNVFpeGhRVUZoTEVOQlFVTk9MR0ZCUVVRc1EwRkJkRU03TzBGQlEwRXNXVUZCU1VRc1YwRkJTaXhGUVVGcFFqdEJRVU5tU3l4eFFrRkJWeXhEUVVGRGRrSXNWMEZCV2l4RFFVRjNRakJDTEUxQlFVMHNRMEZCUTFJc1YwRkJSQ3hEUVVFNVFqdEJRVU5FT3p0QlFVTkVTeXh0UWtGQlZ5eERRVUZEZGtJc1YwRkJXaXhEUVVGM1Frd3NVVUZCVVN4RFFVRkRaME1zWTBGQlZDeERRVUYzUWpsRUxGTkJRWGhDTEVOQlFYaENPMEZCUTBFeVJDeHZRa0ZCV1N4RFFVRkRlRUlzVjBGQllpeERRVUY1UW5WQ0xGZEJRWHBDT3p0QlFVVkJReXh2UWtGQldTeERRVUZEU1N4UFFVRmlMRWRCUVhWQ0xGbEJRVms3UVVGRGFrTXNZMEZCU1RsRUxGVkJRVlVzUjBGQlJ6QkVMRmxCUVZrc1EwRkJRMHNzVlVGQk9VSTdRVUZEUVN4alFVRkpReXhqUVVGakxFZEJRVWRPTEZsQlFWa3NRMEZCUTA4c1ZVRkJZaXhEUVVGM1FrTXNWMEZCTjBNN1FVRkRRVVlzZDBKQlFXTXNRMEZCUTNCRkxFdEJRV1lzUTBGQmNVSjFSU3hQUVVGeVFpeEhRVUVyUW1Jc1pVRkJaU3hIUVVGSExFOUJRVWdzUjBGQllTeE5RVUV6UkR0QlFVTkJkRVFzYjBKQlFWVXNRMEZCUTBvc1MwRkJXQ3hEUVVGcFFuZEZMRk5CUVdwQ0xFZEJRVFpDWkN4bFFVRmxMRWRCUVVjc1pVRkJTQ3hIUVVGeFFpeGpRVUZxUlR0QlFVTkJRU3g1UWtGQlpTeEhRVUZITEVOQlFVTkJMR1ZCUVc1Q08wRkJRMFFzVTBGT1JEczdRVUZSUVVNc2QwSkJRV2RDTEVOQlFVTnlRaXhYUVVGcVFpeERRVUUyUW5kQ0xGbEJRVGRDTzBGQlEwRXNaVUZCVDBnc1owSkJRVkE3UVVGRFJEczdRVUZGUkN4bFFVRlRTU3hoUVVGVUxFTkJRWFZDVGl4aFFVRjJRaXhGUVVGelF6dEJRVU53UXl4WlFVRkpaMElzWVVGQllTeEhRVUZIZUVNc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNha0lzV1VGQldTeERRVUZEWWl4VlFVRmlMRU5CUVhkQ1RDeEhRVUV2UXl4RFFVRndRanRCUVVOQk1FVXNjVUpCUVdFc1EwRkJRM3BGTEV0QlFXUXNRMEZCYjBKdFF5eFBRVUZ3UWl4SFFVRTRRbXhDTEZsQlFWa3NRMEZCUTJJc1ZVRkJZaXhEUVVGM1Frb3NTMEZCZEVRN1FVRkRRWGxGTEhGQ1FVRmhMRU5CUVVONlJTeExRVUZrTEVOQlFXOUNkMFVzVTBGQmNFSXNSMEZCWjBObUxHRkJRV0VzUjBGQlJ5eGpRVUZJTEVkQlFXOUNMR1ZCUVdwRk8wRkJRMEVzWlVGQlQyZENMR0ZCUVZBN1FVRkRSRHM3UVVGRlJDeGxRVUZUZGtJc2IwSkJRVlFzUTBGQk9FSjNRaXhSUVVFNVFpeEZRVUYzUXp0QlFVTjBReXhaUVVGSlppeG5Ra0ZCWjBJc1IwRkJSekZDTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMW9zYVVKQlFXSXNRMEZCSzBKT0xFZEJRWFJFTEVOQlFYWkNPMEZCUTBFMFJDeDNRa0ZCWjBJc1EwRkJRME1zV1VGQmFrSXNRMEZCT0VJc1YwRkJPVUlzUlVGQk1rTXNiVUpCUVRORE8wRkJRMEZFTEhkQ1FVRm5RaXhEUVVGRE0wUXNTMEZCYWtJc1EwRkJkVUp0UXl4UFFVRjJRaXhIUVVGcFEyeENMRmxCUVZrc1EwRkJRMW9zYVVKQlFXSXNRMEZCSzBKTUxFdEJRV2hGTzBGQlEwRXlSQ3gzUWtGQlowSXNRMEZCUXpORUxFdEJRV3BDTEVOQlFYVkNkVVVzVDBGQmRrSXNSMEZCYTBOSExGRkJRVkVzUjBGQlJ5eE5RVUZJTEVkQlFWa3NUMEZCZEVRN1FVRkRRU3hsUVVGUFppeG5Ra0ZCVUR0QlFVTkVPenRCUVVWRUxHVkJRVk5TTEdWQlFWUXNRMEZCZVVJMVF5eEhRVUY2UWl4RlFVRTRRbTlGTEV0QlFUbENMRVZCUVhGRE8wRkJRMjVETEZsQlFVbERMRmRCUVZjc1IwRkJSek5ETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMWdzV1VGQllpeERRVUV3UWxBc1IwRkJha1FzUTBGQmJFSTdRVUZEUVRaRkxHMUNRVUZYTEVOQlFVTTFSU3hMUVVGYUxFTkJRV3RDYlVNc1QwRkJiRUlzUjBGQk5FSnNRaXhaUVVGWkxFTkJRVU5ZTEZsQlFXSXNRMEZCTUVKT0xFdEJRWFJFTzBGQlEwRTBSU3h0UWtGQlZ5eERRVUZEZEVNc1YwRkJXaXhEUVVGM1FqQkNMRTFCUVUwc1EwRkJRM3BFTEVkQlFVUXNRMEZCT1VJN1FVRkRRWEZGTEcxQ1FVRlhMRU5CUVVOMFF5eFhRVUZhTEVOQlFYZENSQ3hSUVVGUkxFTkJRVU56UXl4TFFVRkVMRU5CUVdoRE8wRkJRMEVzWlVGQlQwTXNWMEZCVUR0QlFVTkVPenRCUVVWRUxHVkJRVk5hTEUxQlFWUXNRMEZCWjBKaExFbEJRV2hDTEVWQlFYTkNPMEZCUTNCQ0xGbEJRVWxETEZWQlFWVXNSMEZCUnpkRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTFZc1IwRkJZaXhEUVVGcFFsSXNSMEZCZUVNc1EwRkJha0k3UVVGRFFTdEZMR3RDUVVGVkxFTkJRVU01UlN4TFFVRllMRU5CUVdsQ2JVTXNUMEZCYWtJc1IwRkJNa0pzUWl4WlFVRlpMRU5CUVVOV0xFZEJRV0lzUTBGQmFVSlFMRXRCUVRWRE8wRkJRMEU0UlN4clFrRkJWU3hEUVVGRGVFTXNWMEZCV0N4RFFVRjFRa3dzVVVGQlVTeERRVUZEWjBNc1kwRkJWQ3hEUVVGM1Fsa3NTVUZCU1N4SFFVRkhMRWxCUVM5Q0xFTkJRWFpDTzBGQlEwRXNaVUZCVDBNc1ZVRkJVRHRCUVVORU96dEJRVVZFTEdWQlFWTjZReXhSUVVGVUxFTkJRV3RDYzBNc1MwRkJiRUlzUlVGQmVVSTdRVUZEZGtJc1dVRkJTVWtzV1VGQlNqdEJRVU5CTEZsQlFVbERMRkZCUVZFc1IwRkJSeXhSUVVGbU96dEJRVU5CTEdkQ1FVRlJMRTlCUVU5TUxFdEJRV1k3UVVGRFJTeGxRVUZMTEZGQlFVdzdRVUZEUlVrc2QwSkJRVmtzUjBGQlJ6bERMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlExUXNWMEZCWWl4RFFVRjVRbFFzUjBGQmFFUXNRMEZCWmp0QlFVTkJaMFlzZDBKQlFWa3NRMEZCUXk5RkxFdEJRV0lzUTBGQmJVSnRReXhQUVVGdVFpeEhRVUUyUW14Q0xGbEJRVmtzUTBGQlExUXNWMEZCWWl4RFFVRjVRbElzUzBGQmRFUTdRVUZEUVN0RkxIZENRVUZaTEVOQlFVTjZReXhYUVVGaUxFTkJRWGxDVEN4UlFVRlJMRU5CUVVOblF5eGpRVUZVTEVOQlFYZENWU3hMUVVGTExFTkJRVU53UWl4UlFVRk9MRVZCUVhoQ0xFTkJRWHBDTzBGQlEwRTdPMEZCUTBZc1pVRkJTeXhSUVVGTU8wRkJRMFYzUWl4M1FrRkJXU3hIUVVGSE9VTXNVVUZCVVN4RFFVRkRReXhoUVVGVUxFTkJRWFZDYWtJc1dVRkJXU3hEUVVGRFVpeFhRVUZpTEVOQlFYbENWaXhIUVVGb1JDeERRVUZtTzBGQlEwRm5SaXgzUWtGQldTeERRVUZETDBVc1MwRkJZaXhEUVVGdFFtMURMRTlCUVc1Q0xFZEJRVFpDYkVJc1dVRkJXU3hEUVVGRFVpeFhRVUZpTEVOQlFYbENWQ3hMUVVGMFJEdEJRVU5CSzBVc2QwSkJRVmtzUTBGQlEzcERMRmRCUVdJc1EwRkJlVUpNTEZGQlFWRXNRMEZCUTJkRExHTkJRVlFzUTBGQmQwSXNUVUZCVFZVc1MwRkJUaXhIUVVGakxFZEJRWFJETEVOQlFYcENPMEZCUTBFN08wRkJRMFlzWlVGQlN5eFJRVUZNTzBGQlEwVkpMSGRDUVVGWkxFZEJRVWM1UXl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU5RTEZkQlFXSXNRMEZCZVVKWUxFZEJRV2hFTEVOQlFXWTdRVUZEUVdkR0xIZENRVUZaTEVOQlFVTXZSU3hMUVVGaUxFTkJRVzFDYlVNc1QwRkJia0lzUjBGQk5rSnNRaXhaUVVGWkxFTkJRVU5RTEZkQlFXSXNRMEZCZVVKV0xFdEJRWFJFTzBGQlEwRXJSU3gzUWtGQldTeERRVUZEZWtNc1YwRkJZaXhEUVVGNVFrd3NVVUZCVVN4RFFVRkRaME1zWTBGQlZDeERRVUYzUWxVc1MwRkJlRUlzUTBGQmVrSTdRVUZEUVRzN1FVRkRSaXhsUVVGTExGTkJRVXc3UVVGRFJVa3NkMEpCUVZrc1IwRkJSemxETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMDRzV1VGQllpeERRVUV3UWxvc1IwRkJha1FzUTBGQlpqdEJRVU5CWjBZc2QwSkJRVmtzUTBGQlF5OUZMRXRCUVdJc1EwRkJiVUp0UXl4UFFVRnVRaXhIUVVFMlFteENMRmxCUVZrc1EwRkJRMDRzV1VGQllpeERRVUV3UWxnc1MwRkJka1E3UVVGRFFTdEZMSGRDUVVGWkxFTkJRVU42UXl4WFFVRmlMRU5CUVhsQ1RDeFJRVUZSTEVOQlFVTm5ReXhqUVVGVUxFTkJRWGRDVlN4TFFVRjRRaXhEUVVGNlFqdEJRVU5CT3p0QlFVTkdMR1ZCUVV0TExGRkJRVXc3UVVGRFJVUXNkMEpCUVZrc1IwRkJSemxETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMHdzVTBGQllpeERRVUYxUW1Jc1IwRkJPVU1zUTBGQlpqdEJRVU5CWjBZc2QwSkJRVmtzUTBGQlF5OUZMRXRCUVdJc1EwRkJiVUp0UXl4UFFVRnVRaXhIUVVFMlFteENMRmxCUVZrc1EwRkJRMHdzVTBGQllpeERRVUYxUWxvc1MwRkJjRVE3UVVGRFFTdEZMSGRDUVVGWkxFTkJRVU42UXl4WFFVRmlMRU5CUVhsQ1RDeFJRVUZSTEVOQlFVTm5ReXhqUVVGVUxFTkJRWGRDVlN4TFFVRjRRaXhEUVVGNlFqdEJRVU5CTzBGQmVrSktPenRCUVRKQ1FTeGxRVUZQU1N4WlFVRlFPMEZCUTBRN08wRkJSVVFzWlVGQlV6ZEVMR2xDUVVGVUxFTkJRVEpDSzBRc1VVRkJNMElzUlVGQmNVTkRMRk5CUVhKRExFVkJRV2RFTzBGQlF6bERMRmxCUVVsRExFMUJRVTBzUjBGQlJ5eEZRVUZpT3p0QlFVTkJMR0ZCUVVzc1NVRkJTVFZGTEVkQlFWUXNTVUZCWjBJd1JTeFJRVUZvUWl4RlFVRXdRanRCUVVONFFrVXNaMEpCUVUwc1EwRkJRelZGTEVkQlFVUXNRMEZCVGl4SFFVRmpla0lzVFVGQlRTeERRVUZEY1VNc1RVRkJVQ3hEUVVGakxFVkJRV1FzUlVGQmEwSTRSQ3hSUVVGUkxFTkJRVU14UlN4SFFVRkVMRU5CUVRGQ0xFVkJRV2xETWtVc1UwRkJVeXhEUVVGRE0wVXNSMEZCUkN4RFFVRXhReXhEUVVGa08wRkJRMFE3TzBGQlEwUXNaVUZCVHpSRkxFMUJRVkE3UVVGRFJEczdRVUZGUkN4aFFVRlBjRVFzVFVGQlRTeEZRVUZpTzBGQlEwZzdPMEZCTTAxM1FqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEwVTNRaXhSUVVGTmNVUXNUMEZCVGl4VFFVRnpRa01zYjBKQlFWTkRMRTlCUVZRc1EwRkJhVUp3U0N4blFrRkJha0lzUlVGQk1FSTdRVUZCUXl4WlFVRlBMRU5CUVVOeFNDeHpRa0ZCUkN4RFFVRlNPMEZCUVhkQ0xGZEJRVTBzUTBGQlEwTXNkVUpCUVVRN1FVRkJPVUlzUjBGQk1VSXNRMEZCZEVJc1EwRkJLMFk3UVVGRE0wWnlTQ3hsUVVGWExFZEJRVVU3UVVGRFZEdEJRVU5JT3p0QlFVZ3dSanM3UVVGTEwwWXNVVUZCVFc5Q0xFMUJRVTBzUjBGQlJ5eEpRVUZKTmtZc1QwRkJTaXhGUVVGbU8ybENRVU5sTjBZc1RUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMVptTEZGQlFVMW5SeXhoUVVGaExFZEJRVWxGTEZGQlFVUXNTVUZCWVN4alFVRmpRU3hSUVVGa0xFTkJRWE5DTzBGQlEzSkVReXhYUVVGUExFTkJRVU5ETEU5QlFVUXNSVUZCVXl4RFFVTmFPMEZCUTBnN08wRkJRMFJ5U0N4UFFVRkhMRU5CUVVOelNDeFBRVUZFTEVWQlFWTTdRVUZEVWl4VlFVRkhMRXRCUVV0c1NDeExRVUZNTEVsQlFXTXNTMEZCUzA0c1kwRkJUQ3hEUVVGdlFpeExRVUZ3UWl4RFFVRnFRaXhGUVVFMFF6dEJRVU40UXl4bFFVRlBMRWxCUVZBN1FVRkRTRHM3UVVGRFJHZENMR0ZCUVU4c1EwRkJRMlFzUjBGQlVpeERRVUZaYzBnc1QwRkJXanRCUVVOSU96dEJRVU5FZGtjc1dVRkJVU3hEUVVGRGQwY3NZMEZCUkN4RlFVRm5RaXhEUVVOd1FqdEJRVU5JT3p0QlFVTkVlRWdzVTBGQlN5eERRVUZEZFVnc1QwRkJSQ3hGUVVGVE8wRkJRMVlzVlVGQlJ5eExRVUZMYkVnc1MwRkJUQ3hKUVVGakxFdEJRVXRPTEdOQlFVd3NRMEZCYjBJc1QwRkJjRUlzUTBGQmFrSXNSVUZCT0VNN1FVRkRNVU1zWlVGQlR5eEpRVUZRTzBGQlEwZzdPMEZCUTBSblFpeGhRVUZQTEVOQlFVTm1MRXRCUVZJc1EwRkJZM1ZJTEU5QlFXUTdRVUZEU0RzN1FVRnNRbTlFTEVkQlFYcEVPenRwUWtGeFFtVk1MR0U3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTndRbVlzVVVGQlRVTXNZVUZCWVN4SFFVRkpReXhSUVVGRUxFbEJRV0VzWTBGQlkwRXNVVUZCWkN4RFFVRnpRanRCUVVOeVJFTXNWMEZCVHl4RFFVRkRTU3hWUVVGVkxFZEJRVU1zU1VGQldpeEZRVUZwUWp0QlFVTndRa0VzWjBKQlFWVXNSMEZCUjBFc1ZVRkJWU3hKUVVGRk4wUXNVVUZCVVN4RFFVRkRPRVFzU1VGQmJFTTdRVUZEUVN4VlFVRkpReXhKUVVGSkxFZEJRVWN2UkN4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSXNTVUZCZGtJc1EwRkJXRHRCUVVOQk9FUXNWVUZCU1N4RFFVRkRhRWNzUzBGQlRDeERRVUZYYlVNc1QwRkJXQ3hIUVVGeFFpeDNRa0ZCY2tJN1FVRkRRVEpFTEdkQ1FVRlZMRU5CUVVONFJDeFhRVUZZTEVOQlFYVkNNRVFzU1VGQmRrSTdRVUZEUVN4WFFVRkxReXhQUVVGTUxFZEJRV1ZJTEZWQlFXWTdRVUZEUVN4WFFVRkxTU3hSUVVGTUxFZEJRV2RDU2l4VlFVRlZMRU5CUVVOTExHOUNRVUZZTEVOQlFXZERMRWxCUVdoRExFVkJRWE5ETEVOQlFYUkRMRU5CUVdoQ08wRkJRMGc3TzBGQlEwUkRMR2RDUVVGWkxFTkJRVU53UlN4UFFVRlBMRWRCUVVNc1NVRkJWQ3hGUVVGak8wRkJRM1JDUVN4aFFVRlBMRWRCUVVkQkxFOUJRVThzU1VGQlNTeExRVUZMYVVVc1QwRkJNVUk3UVVGRFFXcEZMR0ZCUVU4c1EwRkJRM0ZGTEZOQlFWSXNSMEZCYjBKeVJTeFBRVUZQTEVOQlFVTnpSU3haUVVGU0xFZEJRWFZDZEVVc1QwRkJUeXhEUVVGRGRVVXNXVUZCYmtRN1FVRkRTRHM3UVVGRFJHeElMRmxCUVZFc1EwRkJRM2RITEdOQlFVUXNSVUZCWjBJN1FVRkRjRUk3UVVGRFFTeFZRVUZKVnl4UFFVRlBMRWRCUVVjc1MwRkJTMDRzVVVGQlRDeERRVUZqUXl4dlFrRkJaQ3hEUVVGdFF5eEpRVUZ1UXl4RFFVRmtPMEZCUTBFc1ZVRkJTVWdzU1VGQlNTeEhRVUZIVVN4UFFVRlBMRU5CUVVOQkxFOUJRVThzUTBGQlF5OUZMRTFCUVZJc1IwRkJaU3hEUVVGb1FpeERRVUZzUWpzN1FVRkRRU3hWUVVGSExFTkJRVU4xUlN4SlFVRkVMRWxCUVZOQkxFbEJRVWtzUTBGQlExTXNVMEZCVEN4RFFVRmxReXhSUVVGbUxFTkJRWGRDTEdsQ1FVRjRRaXhEUVVGYUxFVkJRWFZFTzBGQlEyNUVPMEZCUTBGV0xGbEJRVWtzUjBGQlJ5OUVMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUWl4SlFVRjJRaXhEUVVGUU8wRkJRMEU0UkN4WlFVRkpMRU5CUVVOVExGTkJRVXdzUTBGQlpVVXNSMEZCWml4RFFVRnRRaXhwUWtGQmJrSTdRVUZEUVN4aFFVRkxWQ3hSUVVGTUxFTkJRV00xUkN4WFFVRmtMRU5CUVRCQ01FUXNTVUZCTVVJN1FVRkRTRHM3UVVGRFJDeFZRVUZKV1N4UlFVRlJMRWRCUVVkd1NDeHZRa0ZCVTBNc1YwRkJWQ3hEUVVGeFFtOUhMR05CUVhKQ0xFTkJRV1k3TzBGQlEwRXNWVUZCU1dkQ0xFbEJRVWtzUjBGQlJ5eEpRVUZKZEVVc1NVRkJTaXhGUVVGWU8wRkJRMEY1UkN4VlFVRkpMRU5CUVVOakxGTkJRVXdzUjBGQmEwSXNaMFJCUVN0RFJDeEpRVUZMTEUxQlFYUkZPMEZCUTBGaUxGVkJRVWtzUTBGQlF6RkVMRmRCUVV3c1EwRkJhVUp6UlN4UlFVRnFRanRCUVVOQkxGZEJRVXRTTEZsQlFVdzdRVUZEU0RzN1FVRkRSRGxJTEU5QlFVY3NRMEZCUTNOSUxFOUJRVVFzUlVGQlV6dEJRVU5TTEZWQlFVY3NTMEZCUzJ4SUxFdEJRVXdzU1VGQll5eExRVUZMVGl4alFVRk1MRU5CUVc5Q0xFdEJRWEJDTEVOQlFXcENMRVZCUVRSRE8wRkJRM2hETEdWQlFVOHNTVUZCVUR0QlFVTklPenRCUVVORUxGVkJRVWNzUTBGQlF5eExRVUZMT0Vnc1VVRkJUaXhKUVVGclFpeERRVUZETEV0QlFVdEJMRkZCUVV3c1EwRkJZelZFTEZkQlFYQkRMRVZCUVdkRU8wRkJRelZETEdGQlFVdHZSQ3hQUVVGTU8wRkJRMGc3TzBGQlEwUXNWVUZCU1Uwc1NVRkJTU3hIUVVGSEwwUXNVVUZCVVN4RFFVRkRReXhoUVVGVUxFTkJRWFZDTEVsQlFYWkNMRU5CUVZnN1FVRkRRVGhFTEZWQlFVa3NRMEZCUTJoSExFdEJRVXdzUTBGQlYyMURMRTlCUVZnc1IwRkJjVUlzYlVOQlFYSkNPenRCUVVOQkxGVkJRVWw1UlN4UlFVRlJMRWRCUVVkd1NDeHZRa0ZCVTBNc1YwRkJWQ3hEUVVGeFFtMUhMRTlCUVhKQ0xFTkJRV1k3TzBGQlEwRXNWVUZCU1dsQ0xFbEJRVWtzUjBGQlJ5eEpRVUZKZEVVc1NVRkJTaXhGUVVGWU8wRkJRMEY1UkN4VlFVRkpMRU5CUVVOakxGTkJRVXdzUjBGQmEwSXNaMFJCUVN0RFJDeEpRVUZMTEUxQlFYUkZPMEZCUTBGaUxGVkJRVWtzUTBGQlF6RkVMRmRCUVV3c1EwRkJhVUp6UlN4UlFVRnFRanRCUVVOQkxGZEJRVXRXTEZGQlFVd3NRMEZCWXpWRUxGZEJRV1FzUTBGQk1FSXdSQ3hKUVVFeFFqdEJRVU5CTEZkQlFVdEpMRmxCUVV3N1FVRkRRV2hJTEdGQlFVOHNRMEZCUTJRc1IwRkJVaXhEUVVGWmMwZ3NUMEZCV2p0QlFVTklPenRCUVVWRWRrZ3NVMEZCU3l4RFFVRkRkVWdzVDBGQlJDeEZRVUZUTzBGQlExWXNWVUZCUnl4TFFVRkxiRWdzUzBGQlRDeEpRVUZqTEV0QlFVdE9MR05CUVV3c1EwRkJiMElzVDBGQmNFSXNRMEZCYWtJc1JVRkJPRU03UVVGRE1VTXNaVUZCVHl4SlFVRlFPMEZCUTBnc1QwRklVeXhEUVVsV096czdRVUZEUVdkQ0xHRkJRVThzUTBGQlEyWXNTMEZCVWl4RFFVRmpkVWdzVDBGQlpEdEJRVU5JT3p0QlFYSkViMFFzUjBGQmVrUTdPMmxDUVhkRVpVb3NZVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRM3BFWml3NFJDSXNJbVpwYkdVaU9pSkFZMkYxYzJGc1RtVjBMMnh2Wnk1M1pXSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtISmxjWFZwY21Vb1hDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSXBLVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGdGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJbDBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aVFHTmhkWE5oYkU1bGRDOXNiMmRjSWwwZ1BTQm1ZV04wYjNKNUtISmxjWFZwY21Vb1hDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSXBLVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKQVkyRjFjMkZzVG1WMEwyeHZaMXdpWFNBOUlHWmhZM1J2Y25rb2NtOXZkRnRjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWwwcE8xeHVmU2tvZEdocGN5d2dablZ1WTNScGIyNG9YMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYM1YwYVd4elgxOHBJSHRjYm5KbGRIVnliaUFpTENJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQm5aWFIwWlhJZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXBJSHRjYmlCY2RGeDBhV1lvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5LU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5d2dleUIyWVd4MVpUb2dKMDF2WkhWc1pTY2dmU2s3WEc0Z1hIUmNkSDFjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUNkZlgyVnpUVzlrZFd4bEp5d2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHTnlaV0YwWlNCaElHWmhhMlVnYm1GdFpYTndZV05sSUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlERTZJSFpoYkhWbElHbHpJR0VnYlc5a2RXeGxJR2xrTENCeVpYRjFhWEpsSUdsMFhHNGdYSFF2THlCdGIyUmxJQ1lnTWpvZ2JXVnlaMlVnWVd4c0lIQnliM0JsY25ScFpYTWdiMllnZG1Gc2RXVWdhVzUwYnlCMGFHVWdibk5jYmlCY2RDOHZJRzF2WkdVZ0ppQTBPaUJ5WlhSMWNtNGdkbUZzZFdVZ2QyaGxiaUJoYkhKbFlXUjVJRzV6SUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlEaDhNVG9nWW1Wb1lYWmxJR3hwYTJVZ2NtVnhkV2x5WlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTUwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUcxdlpHVXBJSHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JREVwSUhaaGJIVmxJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloMllXeDFaU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUE0S1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RHbG1LQ2h0YjJSbElDWWdOQ2tnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSnlBbUppQjJZV3gxWlNBbUppQjJZV3gxWlM1ZlgyVnpUVzlrZFd4bEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkSFpoY2lCdWN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lodWN5azdYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h1Y3l3Z0oyUmxabUYxYkhRbkxDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJSFpoYkhWbE9pQjJZV3gxWlNCOUtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlESWdKaVlnZEhsd1pXOW1JSFpoYkhWbElDRTlJQ2R6ZEhKcGJtY25LU0JtYjNJb2RtRnlJR3RsZVNCcGJpQjJZV3gxWlNrZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLRzV6TENCclpYa3NJR1oxYm1OMGFXOXVLR3RsZVNrZ2V5QnlaWFIxY200Z2RtRnNkV1ZiYTJWNVhUc2dmUzVpYVc1a0tHNTFiR3dzSUd0bGVTa3BPMXh1SUZ4MFhIUnlaWFIxY200Z2JuTTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ01DazdYRzRpTENKbWRXNWpkR2x2YmlCZmFXNTBaWEp2Y0ZKbGNYVnBjbVZFWldaaGRXeDBLRzlpYWlrZ2UxeHVJQ0J5WlhSMWNtNGdiMkpxSUNZbUlHOWlhaTVmWDJWelRXOWtkV3hsSUQ4Z2IySnFJRG9nZTF4dUlDQWdJR1JsWm1GMWJIUTZJRzlpYWx4dUlDQjlPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlGOXBiblJsY205d1VtVnhkV2x5WlVSbFptRjFiSFE3SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdRbUZ6WlV4dlozdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpZ3BlMXh1SUNBZ0lDQWdJQ0IwYUdsekxrRmpZMlZ3ZEdWa1RHVjJaV3h6SUQwZ2UyUmxZblZuT2lBd0xDQnNiMmM2TVN3Z2QyRnlibWx1WnpveUxDQmxjbkp2Y2pvZ00zMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNrRmpZMlZ3ZEdWa1RHVjJaV3h6SUQwZ2V6QTZKMlJsWW5Wbkp5d2dNVG9nSjJ4dlp5Y3NJREk2SUNkM1lYSnVhVzVuSnl3Z016b2dKMlZ5Y205eUozMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHVjJaV3dnUFNCMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4eld5ZGtaV0oxWnlkZE8xeHVJQ0FnSUgxY2JpQWdJQ0J6WlhRZ1RHVjJaV3dvYkdWMlpXd3BlMXh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4elcyeGxkbVZzWFNFOVBYVnVaR1ZtYVc1bFpDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbXhsZG1Wc0lEMGdkR2hwY3k1QlkyTmxjSFJsWkV4bGRtVnNjMXRzWlhabGJGMDdJQ0FnSUZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNjMlY3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWhnSkh0c1pYWmxiSDBnYlhWemRDQmlaU0J2Ym1VZ2IyWWdKSHRQWW1wbFkzUXVhMlY1Y3loMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4ektYMWdLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQm5aWFFnVEdWMlpXd29LWHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWNrRmpZMlZ3ZEdWa1RHVjJaV3h6VzNSb2FYTXViR1YyWld4ZE8xeHVJQ0FnSUgxY2JuMGlMQ0pqYjI1emRDQk1iMmRuWlhKTmFYaHBibk1nUFNBb1FtRnpaV1JEYkdGemN5azlQaUJqYkdGemN5QmxlSFJsYm1SeklFSmhjMlZrUTJ4aGMzTjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9MaTR1WVhKbmN5bDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDNHVMbUZ5WjNNcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dloyZGxjaUE5SUdOdmJuTnZiR1U3WEc0Z0lDQWdmVnh1SUNBZ0lIQnliMmR5WlhOektIQnliMmR5WlhOelRXVnpjMkZuWlNsN1hHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWJHOW5aMlZ5TG5CeWIyZHlaWE56S1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJHOW5aMlZ5TG5CeWIyZHlaWE56S0hCeWIyZHlaWE56VFdWemMyRm5aU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjMlYwSUV4dloyZGxjaWhzYjJkblpYSXBlMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZaMmRsY2lBOUlHeHZaMmRsY2p0Y2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ1oyVjBJRXh2WjJkbGNpZ3BlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1c2IyZG5aWEk3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1RHOW5aMlZ5VFdsNGFXNXpPeUlzSWk4dklHOXlhV2RwYmlCamIyUmxJR1p5YjIwZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyeDFZM2xuYVd4aVpYSjBMMnB6YjI0dFpHbHpjR3hoZVM5aWJHOWlMMjFoYzNSbGNpOXFjMjl1TFdScGMzQnNZWGt1YW5OY2JpOHZJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhOeUJNZFdONUlFZHBiR0psY25SY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRXB6YjI1V2FXVjNlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2w3WEc0Z0lDQWdmVnh1SUNBZ0lITjBZWFJwWXlCS1UwOU9SR2x6Y0d4aGVTaHFjMjl1TENCdmNHVnVUR1YyWld4elFYSm5MQ0J6ZEhsc1pVOXdkR2x2Ym5OQmNtY3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlFUkZSa0ZWVEZSZlUxUlpURVZmVDFCVVNVOU9VeUE5SUh0Y2JpQWdJQ0FnSUNBZ0lDQnliMjkwT2lCN0lIUmhaem9nSjNCeVpTY3NJSE4wZVd4bE9pQW5jR0ZrWkdsdVp6b2dOWEI0T3lCbWIyNTBMWE5wZW1VNklERnlaVzA3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJSFJwZEd4bFEyOXVkR0ZwYm1WeU9pQjdJSFJoWnpvZ0oyUnBkaWNzSUhOMGVXeGxPaUFuYldGeVoybHVMV0p2ZEhSdmJUb2dNM0I0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pUb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNkamRYSnpiM0k2SUhCdmFXNTBaWEk3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJSFJwZEd4bFZHVjRkRG9nZXlCMFlXYzZJQ2R6Y0dGdUp5d2djM1I1YkdVNklDY25JSDBzWEc0Z0lDQWdJQ0FnSUNBZ2IzQmxia0oxZEhSdmJqb2dleUJjYmlBZ0lDQWdJQ0FnSUNBZ0lIUmhaem9nSjNOd1lXNG5MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U2SUNka2FYTndiR0Y1T2lCcGJteHBibVV0WW14dlkyczdJRzFoY21kcGJqb2dNSEI0SURkd2VDQXdjSGdnTW5CNE95QmliM0prWlhJdGRHOXdPaUExY0hnZ2MyOXNhV1FnZEhKaGJuTndZWEpsYm5RN0lDZGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdLeUFuWW05eVpHVnlMV0p2ZEhSdmJUb2dOWEI0SUhOdmJHbGtJSFJ5WVc1emNHRnlaVzUwT3lCaWIzSmtaWEl0YkdWbWREb2dOWEI0SUhOdmJHbGtJR0pzWVdOck95Y3NYRzRnSUNBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ0lDQmpiMjUwWlc1MGMwTnZiblJoYVc1bGNqb2dleUIwWVdjNklDZGthWFluTENCemRIbHNaVG9nSjNCaFpHUnBibWN0YkdWbWREb2dNVGh3ZURzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnYTJWNVZtRnNkV1ZRWVdseU9pQjdJSFJoWnpvZ0ozTndZVzRuTENCemRIbHNaVG9nSjJScGMzQnNZWGs2SUdKc2IyTnJPeUJ0WVhKbmFXNHRZbTkwZEc5dE9pQXljSGc3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJR3RsZVRvZ2V5QjBZV2M2SUNkemNHRnVKeXdnYzNSNWJHVTZJQ2RqYjJ4dmNqb2daR0Z5YTJKc2RXVTdKeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lITjViV0p2YkZaaGJIVmxPaUI3SUhSaFp6b2dKM053WVc0bkxDQnpkSGxzWlRvZ0oyTnZiRzl5T2lCa1lYSnJaM0psWlc0N0p5QjlMRnh1SUNBZ0lDQWdJQ0FnSUhOMGNtbHVaMVpoYkhWbE9pQjdJSFJoWnpvZ0ozTndZVzRuTENCemRIbHNaVG9nSjJOdmJHOXlPaUJqY21sdGMyOXVPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQnVkVzFpWlhKV1lXeDFaVG9nZXlCMFlXYzZJQ2R6Y0dGdUp5d2djM1I1YkdVNklDZGpiMnh2Y2pvZ1lteDFaVHNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdZbTl2YkdWaGJsWmhiSFZsT2lCN0lIUmhaem9nSjNOd1lXNG5MQ0J6ZEhsc1pUb2dKMk52Ykc5eU9pQmliSFZsT3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0J1ZFd4c1ZtRnNkV1U2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5ZMjlzYjNJNklHSnNkV1U3SnlCOUxGeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2IzQmxia3hsZG1Wc2N5QTlJR2x6VG1GT0tIQmhjbk5sU1c1MEtHOXdaVzVNWlhabGJITkJjbWNwS1NBL0lFbHVabWx1YVhSNUlEb2djR0Z5YzJWSmJuUW9iM0JsYmt4bGRtVnNjMEZ5WnlrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6ZEhsc1pVOXdkR2x2Ym5NZ1BTQjBlWEJsYjJZZ2MzUjViR1ZQY0hScGIyNXpRWEpuSUQwOVBTQW5iMkpxWldOMEp5QmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDhnYldWeVoyVlRkSGxzWlU5d2RHbHZibk1vUkVWR1FWVk1WRjlUVkZsTVJWOVBVRlJKVDA1VExDQnpkSGxzWlU5d2RHbHZibk5CY21jcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQTZJRVJGUmtGVlRGUmZVMVJaVEVWZlQxQlVTVTlPVXp0Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCUFltcGxZM1F1WVhOemFXZHVJQ0U5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0JQWW1wbFkzUXVZWE56YVdkdUlEMGdablZ1WTNScGIyNG9kR0Z5WjJWMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR0Z5WjJWMElEMDlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25RMkZ1Ym05MElHTnZiblpsY25RZ2RXNWtaV1pwYm1Wa0lHOXlJRzUxYkd3Z2RHOGdiMkpxWldOMEp5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnZEc4Z1BTQlBZbXBsWTNRb2RHRnlaMlYwS1R0Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHbHVaR1Y0SUQwZ01Uc2dhVzVrWlhnZ1BDQmhjbWQxYldWdWRITXViR1Z1WjNSb095QnBibVJsZUNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ1WlhoMFUyOTFjbU5sSUQwZ1lYSm5kVzFsYm5SelcybHVaR1Y0WFR0Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0c1bGVIUlRiM1Z5WTJVZ0lUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvZG1GeUlHNWxlSFJMWlhrZ2FXNGdibVY0ZEZOdmRYSmpaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h1WlhoMFUyOTFjbU5sTENCdVpYaDBTMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYjF0dVpYaDBTMlY1WFNBOUlHNWxlSFJUYjNWeVkyVmJibVY0ZEV0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEc4N1hHNGdJQ0FnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJ5Wlc1a1pYSW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR1ZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTV5YjI5MExuUmhaeWs3WEc0Z0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxuSnZiM1F1YzNSNWJHVTdYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0dwemIyNGdQVDA5SUc1MWJHd2dmSHdnYW5OdmJpQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2RtOXBaRVZzWlcxbGJuUWdQU0JuWlhSV1lXeDFaU2h1ZFd4c0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb2RtOXBaRVZzWlcxbGJuUXBPMXh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FuTnZiaUJwYm5OMFlXNWpaVzltSUVSaGRHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJrWVhSbFJXeGxiV1Z1ZENBOUlHZGxkRlpoYkhWbEtHcHpiMjR1ZEc5SlUwOVRkSEpwYm1jb0tTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHUmhkR1ZGYkdWdFpXNTBLVHRjYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCcWMyOXVJQ0U5UFNBbmIySnFaV04wSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHNXZia1Y0Y0dGdVpHRmliR1ZGYkdWdFpXNTBJRDBnWjJWMFZtRnNkV1VvYW5OdmJpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHNXZia1Y0Y0dGdVpHRmliR1ZGYkdWdFpXNTBLVHRjYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhScGRHeGxJRDBnUVhKeVlYa3VhWE5CY25KaGVTaHFjMjl1S1NBL0lDZEJjbkpoZVZzbklDc2dhbk52Ymk1c1pXNW5kR2dnS3lBblhTY2dPaUFuVDJKcVpXTjBKenRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUIwYUdselRHVjJaV3hKYzBOc2IzTmxaQ0E5SUc5d1pXNU1aWFpsYkhNZ1BDQXhPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaG5aWFJVYVhSc1pTaDBhWFJzWlN3Z2JuVnNiQ3dnZEdocGMweGxkbVZzU1hORGJHOXpaV1FwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWTI5dWRtVnlkRXB6YjI1VWIwVnNaVzFsYm5SektHcHpiMjRzSURFcEtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1ZzWlcxbGJuUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNGdZMjl1ZG1WeWRFcHpiMjVVYjBWc1pXMWxiblJ6S0dwemIyNHNJR2x1WkdWNEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIUm9hWE5NWlhabGJFbHpRMnh2YzJWa0lEMGdhVzVrWlhnZ1BpQnZjR1Z1VEdWMlpXeHpPMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQnVaWGgwVEdWMlpXeEpjME5zYjNObFpDQTlJR2x1WkdWNElDc2dNU0ErSUc5d1pXNU1aWFpsYkhNN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdOdmJuUmhhVzVsY2lBOUlHZGxkRU52Ym5SbGJuUnpRMjl1ZEdGcGJtVnlLSFJvYVhOTVpYWmxiRWx6UTJ4dmMyVmtLVHRjYmlBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnYW5OdmJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRUZ5Y21GNUxtbHpRWEp5WVhrb2FuTnZibHRyWlhsZEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFZHbDBiR1VvSjBGeWNtRjVXeWNnS3lCcWMyOXVXMnRsZVYwdWJHVnVaM1JvSUNzZ0oxMG5MQ0JyWlhrc0lHNWxlSFJNWlhabGJFbHpRMnh2YzJWa0tTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNpNWhjSEJsYm1SRGFHbHNaQ2hqYjI1MlpYSjBTbk52YmxSdlJXeGxiV1Z1ZEhNb2FuTnZibHRyWlhsZExDQnBibVJsZUNBcklERXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9hbk52Ymx0clpYbGRJRDA5UFNCdWRXeHNJSHg4SUdwemIyNWJhMlY1WFNBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5SaGFXNWxjaTVoY0hCbGJtUkRhR2xzWkNoblpYUlRkR0Z1WkdGeVpGQmhhWElvYTJWNUxDQnVkV3hzS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dwemIyNWJhMlY1WFNCcGJuTjBZVzVqWlc5bUlFUmhkR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5TG1Gd2NHVnVaRU5vYVd4a0tHZGxkRk4wWVc1a1lYSmtVR0ZwY2loclpYa3NJR3B6YjI1YmEyVjVYUzUwYjBsVFQxTjBjbWx1WnlncEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCcWMyOXVXMnRsZVYwZ1BUMDlJQ2R2WW1wbFkzUW5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5SaGFXNWxjaTVoY0hCbGJtUkRhR2xzWkNoblpYUlVhWFJzWlNnblQySnFaV04wSnl3Z2EyVjVMQ0J1WlhoMFRHVjJaV3hKYzBOc2IzTmxaQ2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1kyOXVkbVZ5ZEVwemIyNVViMFZzWlcxbGJuUnpLR3B6YjI1YmEyVjVYU3dnYVc1a1pYZ2dLeUF4S1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFUzUmhibVJoY21SUVlXbHlLR3RsZVN3Z2FuTnZibHRyWlhsZEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ1QySnFaV04wTG1kbGRFOTNibEJ5YjNCbGNuUjVVM2x0WW05c2N5QTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVUzbHRZbTlzY3locWMyOXVLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVLSE41YldKdmJDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFUzUmhibVJoY21SUVlXbHlLSE41YldKdmJDNTBiMU4wY21sdVp5Z3BMQ0JxYzI5dVczTjViV0p2YkYwcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMjl1ZEdGcGJtVnlPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJR2RsZEZScGRHeGxLSFJwZEd4bFZHVjRkQ3dnYjNCMGFXOXVZV3hMWlhrc0lHeGxkbVZzU1hORGJHOXpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnWTNWeWNtVnVkR3g1UTJ4dmMyVmtJRDBnYkdWMlpXeEpjME5zYjNObFpEdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ1kyOXVkR0ZwYm1WeVJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvYzNSNWJHVlBjSFJwYjI1ekxuUnBkR3hsUTI5dWRHRnBibVZ5TG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNWpjM05VWlhoMElEMGdjM1I1YkdWUGNIUnBiMjV6TG5ScGRHeGxRMjl1ZEdGcGJtVnlMbk4wZVd4bE8xeHVJQ0FnSUNBZ0lDQWdJR052Ym5SaGFXNWxja1ZzWlcxbGJuUXVjMlYwUVhSMGNtbGlkWFJsS0Nka1lYUmhMWFJsYzNRbkxDQW5kR2wwYkdWRGIyNTBZV2x1WlhJbktUdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2RHVjRkRVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTUwYVhSc1pWUmxlSFF1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2RHbDBiR1ZGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11ZEdsMGJHVXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQjBhWFJzWlVWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1MGFYUnNaUzV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0IwWlhoMFJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxuUnBkR3hsVkdWNGRDNXpkSGxzWlR0Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNCMGFYUnNaVVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFQzQmxia0oxZEhSdmJpaHNaWFpsYkVselEyeHZjMlZrS1NrN1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0c5d2RHbHZibUZzUzJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMFpYaDBSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2huWlhSTFpYa29iM0IwYVc5dVlXeExaWGtwS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZEdWNGRFVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9aRzlqZFcxbGJuUXVZM0psWVhSbFZHVjRkRTV2WkdVb2RHbDBiR1ZVWlhoMEtTazdYRzRnSUNBZ0lDQWdJQ0FnZEdsMGJHVkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLSFJsZUhSRmJHVnRaVzUwS1R0Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNCMGFYUnNaVVZzWlcxbGJuUXViMjVqYkdsamF5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCdmNHVnVRblYwZEc5dUlEMGdkR2wwYkdWRmJHVnRaVzUwTG1acGNuTjBRMmhwYkdRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2IySnFaV04wUTI5dWRHVnVkSE1nUFNCMGFYUnNaVVZzWlcxbGJuUXVjR0Z5Wlc1MFRtOWtaUzV1WlhoMFUybGliR2x1Wnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzlpYW1WamRFTnZiblJsYm5SekxuTjBlV3hsTG1ScGMzQnNZWGtnUFNCamRYSnlaVzUwYkhsRGJHOXpaV1FnUHlBbllteHZZMnNuSURvZ0oyNXZibVVuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiM0JsYmtKMWRIUnZiaTV6ZEhsc1pTNTBjbUZ1YzJadmNtMGdQU0JqZFhKeVpXNTBiSGxEYkc5elpXUWdQeUFuY205MFlYUmxLRGt3WkdWbktTY2dPaUFuY205MFlYUmxLREJrWldjcEp6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJzZVVOc2IzTmxaQ0E5SUNGamRYSnlaVzUwYkhsRGJHOXpaV1E3WEc0Z0lDQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLSFJwZEd4bFJXeGxiV1Z1ZENrN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTnZiblJoYVc1bGNrVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z1oyVjBUM0JsYmtKMWRIUnZiaWhzWlhabGJFbHpRMnh2YzJWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHSjFkSFJ2YmtWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLSE4wZVd4bFQzQjBhVzl1Y3k1dmNHVnVRblYwZEc5dUxuUmhaeWs3WEc0Z0lDQWdJQ0FnSUNBZ1luVjBkRzl1Uld4bGJXVnVkQzV6ZEhsc1pTNWpjM05VWlhoMElEMGdjM1I1YkdWUGNIUnBiMjV6TG05d1pXNUNkWFIwYjI0dWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ1luVjBkRzl1Uld4bGJXVnVkQzV6ZEhsc1pTNTBjbUZ1YzJadmNtMGdQU0JzWlhabGJFbHpRMnh2YzJWa0lEOGdKM0p2ZEdGMFpTZ3daR1ZuS1NjZ09pQW5jbTkwWVhSbEtEa3daR1ZuS1NjN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHSjFkSFJ2YmtWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnWjJWMFEyOXVkR1Z1ZEhORGIyNTBZV2x1WlhJb2FYTkRiRzl6WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ1kyOXVkR0ZwYm1WeVJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvYzNSNWJHVlBjSFJwYjI1ekxtTnZiblJsYm5SelEyOXVkR0ZwYm1WeUxuUmhaeWs3WEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9KMlJoZEdFdGRHVnpkQ2NzSUNkamIyNTBaVzUwYzBOdmJuUmhhVzVsY2ljcE8xeHVJQ0FnSUNBZ0lDQWdJR052Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTVqYjI1MFpXNTBjME52Ym5SaGFXNWxjaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExtUnBjM0JzWVhrZ1BTQW9hWE5EYkc5elpXUWdQeUFuYm05dVpTY2dPaUFuWW14dlkyc25LVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTI5dWRHRnBibVZ5Uld4bGJXVnVkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJuWlhSVGRHRnVaR0Z5WkZCaGFYSW9hMlY1TENCMllXeDFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJ3WVdseVJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvYzNSNWJHVlBjSFJwYjI1ekxtdGxlVlpoYkhWbFVHRnBjaTUwWVdjcE8xeHVJQ0FnSUNBZ0lDQWdJSEJoYVhKRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWEyVjVWbUZzZFdWUVlXbHlMbk4wZVd4bE8xeHVJQ0FnSUNBZ0lDQWdJSEJoYVhKRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHZGxkRXRsZVNoclpYa3BLVHRjYmlBZ0lDQWdJQ0FnSUNCd1lXbHlSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2huWlhSV1lXeDFaU2gyWVd4MVpTa3BPMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ3WVdseVJXeGxiV1Z1ZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCblpYUkxaWGtvYm1GdFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQnJaWGxGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11YTJWNUxuUmhaeWs3WEc0Z0lDQWdJQ0FnSUNBZ2EyVjVSV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUQwZ2MzUjViR1ZQY0hScGIyNXpMbXRsZVM1emRIbHNaVHRjYmlBZ0lDQWdJQ0FnSUNCclpYbEZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR1J2WTNWdFpXNTBMbU55WldGMFpWUmxlSFJPYjJSbEtHNWhiV1VnS3lBbk9pQW5LU2s3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUd0bGVVVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z1oyVjBWbUZzZFdVb2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnZG1Gc2RXVkZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCdWRXeHNWSGx3WlNBOUlDZHZZbXBsWTNRbk8xeHVJQ0FnSUNBZ0lDQWdJSE4zYVhSamFDQW9kSGx3Wlc5bUlIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDZHplVzFpYjJ3bk9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTV6ZVcxaWIyeFdZV3gxWlM1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1emVXMWliMnhXWVd4MVpTNXpkSGxzWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR1J2WTNWdFpXNTBMbU55WldGMFpWUmxlSFJPYjJSbEtIWmhiSFZsTG5SdlUzUnlhVzVuS0NrcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkemRISnBibWNuT2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpVVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NXpkSEpwYm1kV1lXeDFaUzUwWVdjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTV6ZEhKcGJtZFdZV3gxWlM1emRIbHNaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHUnZZM1Z0Wlc1MExtTnlaV0YwWlZSbGVIUk9iMlJsS0NkY0lpY2dLeUIyWVd4MVpTQXJJQ2RjSWljcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkdWRXMWlaWEluT2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpVVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NXVkVzFpWlhKV1lXeDFaUzUwWVdjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTV1ZFcxaVpYSldZV3gxWlM1emRIbHNaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHUnZZM1Z0Wlc1MExtTnlaV0YwWlZSbGVIUk9iMlJsS0haaGJIVmxLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5ZbTl2YkdWaGJpYzZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG1KdmIyeGxZVzVXWVd4MVpTNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpVVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NWliMjlzWldGdVZtRnNkV1V1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNoa2IyTjFiV1Z1ZEM1amNtVmhkR1ZVWlhoMFRtOWtaU2gyWVd4MVpTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ2JuVnNiRlI1Y0dVNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb2MzUjViR1ZQY0hScGIyNXpMbTUxYkd4V1lXeDFaUzUwWVdjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTV1ZFd4c1ZtRnNkV1V1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNoa2IyTjFiV1Z1ZEM1amNtVmhkR1ZVWlhoMFRtOWtaU2gyWVd4MVpTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFpoYkhWbFJXeGxiV1Z1ZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCdFpYSm5aVk4wZVd4bFQzQjBhVzl1Y3loa1pXWmhkV3gwY3l3Z2IzWmxjbkpwWkdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHMWxjbWRsWkNBOUlIdDlPMXh1SUNBZ0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUd0bGVTQnBiaUJrWldaaGRXeDBjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiV1Z5WjJWa1cydGxlVjBnUFNCUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCa1pXWmhkV3gwYzF0clpYbGRMQ0J2ZG1WeWNtbGtaWE5iYTJWNVhTazdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdFpYSm5aV1E3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYm1SbGNpZ3BPMXh1SUNBZ0lIMWNibjBpTENKcGJYQnZjblFnZTJSbFptRjFiSFFnWVhNZ1FtRnpaVXh2WjMwZ1puSnZiU0FuTGk5aVlYTmxURzluSnp0Y2JtbHRjRzl5ZENCN1pHVm1ZWFZzZENCaGN5Qk1iMmRPYjJSbFRXbDRhVzV6ZlNCbWNtOXRJQ2N1TDNSbGNtMU1iMmN1YldsNGFXNXpMbTV2WkdVbk8xeHVhVzF3YjNKMElIdGtaV1poZFd4MElHRnpJRmRsWWs1dlpHVk5hWGhwYm5OOUlHWnliMjBnSnk0dmRHVnliVXh2Wnk1dGFYaHBibk11ZDJWaUp6dGNibWx0Y0c5eWRDQjdVR3hoZEdadmNtMTlJR1p5YjIwZ0oyTmhkWE5oYkMxdVpYUXVkWFJwYkhNbk8xeHVZMnhoYzNNZ1ZHVnliVXh2WnlCbGVIUmxibVJ6SUZCc1lYUm1iM0p0TG0xcGVGZHBkR2dvUW1GelpVeHZaeXdnZXlkdWIyUmxKenBiVEc5blRtOWtaVTFwZUdsdWMxMHNKM2RsWWljNlcxZGxZazV2WkdWTmFYaHBibk5kZlNsN1hHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb0tYdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb0tUdGNiaUFnSUNCOVhHNTlYRzVqYjI1emRDQk1iMmRuWlhJZ1BTQnVaWGNnVkdWeWJVeHZaeWdwTzF4dVpYaHdiM0owSUdSbFptRjFiSFFnVEc5bloyVnlPeUlzSW1OdmJuTjBJRXh2WjA1dlpHVk5hWGhwYm5NZ1BTQW9URzluUTJ4aGMzTXBQVDRnWTJ4aGMzTWdaWGgwWlc1a2N5Qk1iMmREYkdGemMzdGNiaUFnSUNCamIyNXVaV04wS0dOb1lXNXVaV3dwZTF4dUlDQWdJQ0FnSUNBdkwyNXZkR2hwYm1kY2JpQWdJQ0I5WEc0Z0lDQWdiRzluS0cxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TG14bGRtVnNJRDQ5SUhSb2FYTXVRV05qWlhCMFpXUk1aWFpsYkhOYkoyeHZaeWRkS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LRzFsYzNOaFoyVXBPMXh1SUNBZ0lIMWNiaUFnSUNCd2NtOW5jbVZ6Y3lod2NtOWpaWE56VFdWemMyRm5aU2w3WEc0Z0lDQWdJQ0FnSUM4dlZFOUVUem9nYVcxd2JHVnRaVzUwSUhCeWIyZHlaWE56SUhOb2IzZGNiaUFnSUNCOVhHNGdJQ0FnWkdWaWRXY29iV1Z6YzJGblpTbDdYRzRnSUNBZ0lDQWdJR2xtS0hSb2FYTXViR1YyWld3Z1BqMGdkR2hwY3k1QlkyTmxjSFJsWkV4bGRtVnNjMXNuWkdWaWRXY25YU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JuVnNiRHRjYmlBZ0lDQWdJQ0FnZlNCY2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1a1pXSjFaeWh0WlhOellXZGxLVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCTWIyZE9iMlJsVFdsNGFXNXpPeUlzSW1sdGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCS2MyOXVWbWxsZDMwZ1puSnZiU0FuTGk5d2NtVjBkSGxLYzI5dUp6dGNibU52Ym5OMElGZGxZazV2WkdWTmFYaHBibk1nUFNBb1RHOW5RMnhoYzNNcFBUNGdZMnhoYzNNZ1pYaDBaVzVrY3lCTWIyZERiR0Z6YzN0Y2JpQWdJQ0JqYjI1dVpXTjBLR1J2WTNWdFpXNTBSV3c5Ym5Wc2JDbDdYRzRnSUNBZ0lDQWdJR1J2WTNWdFpXNTBSV3dnUFNCa2IyTjFiV1Z1ZEVWc2ZIeGtiMk4xYldWdWRDNWliMlI1TzF4dUlDQWdJQ0FnSUNCc1pYUWdibTlrWlNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvWENKMWJGd2lLVHRjYmlBZ0lDQWdJQ0FnYm05a1pTNXpkSGxzWlM1amMzTlVaWGgwSUQwZ1hDSnNhWE4wTFhOMGVXeGxMWFI1Y0dVNklHNXZibVU3WENJN1hHNGdJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MFJXd3VZWEJ3Wlc1a1EyaHBiR1FvYm05a1pTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpuSmhiV1ZGYkNBOUlHUnZZM1Z0Wlc1MFJXdzdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOW5aMlZ5Uld3Z1BTQmtiMk4xYldWdWRFVnNMbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsS0Z3aWRXeGNJaWxiTUYwN1hHNGdJQ0FnZlZ4dUlDQWdJSE5qY205c2JFSnZkSFJ2YlNobGJHVnRaVzUwUFc1MWJHd3BlMXh1SUNBZ0lDQWdJQ0JsYkdWdFpXNTBJRDBnWld4bGJXVnVkQ0I4ZkNCMGFHbHpMbVp5WVcxbFJXdzdYRzRnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVjMk55YjJ4c1ZHOXdJRDBnWld4bGJXVnVkQzV6WTNKdmJHeElaV2xuYUhRZ0xTQmxiR1Z0Wlc1MExtTnNhV1Z1ZEVobGFXZG9kRHRjYmlBZ0lDQjlYRzRnSUNBZ2NISnZaM0psYzNNb2NISnZZMlZ6YzAxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNBdkx5QnNaWFFnYm05a1pTQTlJSFJvYVhNdWJHOW5aMlZ5Uld3dVoyVjBSV3hsYldWdWRITkNlVlJoWjA1aGJXVW9YQ0pzYVRwdWRHZ3RiR0Z6ZEMxdlppMTBlWEJsS0RFcFhDSXBPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1RFbE9iMlJsY3lBOUlIUm9hWE11Ykc5bloyVnlSV3d1WjJWMFJXeGxiV1Z1ZEhOQ2VWUmhaMDVoYldVb1hDSnNhVndpS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJRzV2WkdVZ1BTQk1TVTV2WkdWelcweEpUbTlrWlhNdWJHVnVaM1JvTFRGZE8xeHVJQ0FnSUNBZ0lDQnBaaWdoYm05a1pTQjhmQ0J1YjJSbExtTnNZWE56VEdsemRDNWpiMjUwWVdsdWN5aGNJbXh2WjJkbGNpMXdjbTluY21WemMxd2lLU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMMk55WldGMFpTQnVaWGNnWld4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzV2WkdVZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Z3aWJHbGNJaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnViMlJsTG1Oc1lYTnpUR2x6ZEM1aFpHUW9YQ0pzYjJkblpYSXRjSEp2WjNKbGMzTmNJaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG14dloyZGxja1ZzTG1Gd2NHVnVaRU5vYVd4a0tHNXZaR1VwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHeGxkQ0JxYzI5dVRtOWtaU0E5SUVwemIyNVdhV1YzTGtwVFQwNUVhWE53YkdGNUtIQnliMk5sYzNOTlpYTnpZV2RsS1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1JoZEdVZ1BTQnVaWGNnUkdGMFpTZ3BPMXh1SUNBZ0lDQWdJQ0J1YjJSbExtbHVibVZ5U0ZSTlRDQTlJR0E4Y0NCemRIbHNaVDFjSW1admJuUXRjMmw2WlRvZ01USndlRHNnZEdWNGRDMWhiR2xuYmpweWFXZG9kRndpUGlSN1pHRjBaWDA4TDNBK1lEdGNiaUFnSUNBZ0lDQWdibTlrWlM1aGNIQmxibVJEYUdsc1pDaHFjMjl1VG05a1pTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTnliMnhzUW05MGRHOXRLQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lHeHZaeWh0WlhOellXZGxLWHRjYmlBZ0lDQWdJQ0FnYVdZb2RHaHBjeTVzWlhabGJDQStQU0IwYUdsekxrRmpZMlZ3ZEdWa1RHVjJaV3h6V3lkc2IyY25YU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JuVnNiRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCcFppZ2hkR2hwY3k1c2IyZG5aWEpGYkNCOGZDQWhkR2hwY3k1c2IyZG5aWEpGYkM1aGNIQmxibVJEYUdsc1pDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbU52Ym01bFkzUW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCc1pYUWdibTlrWlNBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvWENKc2FWd2lLVHRjYmlBZ0lDQWdJQ0FnYm05a1pTNXpkSGxzWlM1amMzTlVaWGgwSUQwZ0oySnZjbVJsY2kxaWIzUjBiMjA2SURGd2VDQnpiMnhwWkNBalpHVmtaV1JsT3ljN0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCc1pYUWdhbk52Yms1dlpHVWdQU0JLYzI5dVZtbGxkeTVLVTA5T1JHbHpjR3hoZVNodFpYTnpZV2RsS1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1JoZEdVZ1BTQnVaWGNnUkdGMFpTZ3BPMXh1SUNBZ0lDQWdJQ0J1YjJSbExtbHVibVZ5U0ZSTlRDQTlJR0E4Y0NCemRIbHNaVDFjSW1admJuUXRjMmw2WlRvZ01USndlRHNnZEdWNGRDMWhiR2xuYmpweWFXZG9kRndpUGlSN1pHRjBaWDA4TDNBK1lEdGNiaUFnSUNBZ0lDQWdibTlrWlM1aGNIQmxibVJEYUdsc1pDaHFjMjl1VG05a1pTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJHOW5aMlZ5Uld3dVlYQndaVzVrUTJocGJHUW9ibTlrWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOeWIyeHNRbTkwZEc5dEtDazdYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXViRzluS0cxbGMzTmhaMlVwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR1JsWW5WbktHMWxjM05oWjJVcGUxeHVJQ0FnSUNBZ0lDQnBaaWgwYUdsekxteGxkbVZzSUQ0OUlIUm9hWE11UVdOalpYQjBaV1JNWlhabGJITmJKMlJsWW5WbkoxMHBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnTHk5dWJ5QnphRzkzSUc5dUlIZGxZaUJ6WTNKbFpXNDdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNWtaV0oxWnlodFpYTnpZV2RsS1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlhaV0pPYjJSbFRXbDRhVzV6T3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgzVjBhV3h6WDE4N0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VJbWdEYXRhc2V0IH0gZnJvbSAnLi9iYXNlSW1nRGF0YXNldCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgTG9nZ2VyTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5sb2cnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgTWVtQ2FjaGVNaXhpbnMsIG1lbURvd25DYWNoZSB9IGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBJbWdEYXRhc2V0RmV0Y2hNaXhpbnMgfSBmcm9tICcuL2ltZ0RhdGFzZXRGZXRjaC5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBJbWdEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGlucyB9IGZyb20gJy4vaW1nRGF0YXNldFByZXByb2Nlc3NpbmcubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgSW1nRGF0YXNldEdlbmVyYXRvck1peGlucyB9IGZyb20gJy4vaW1nRGF0YXNldEdlbmVyYXRvci5taXhpbnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW5pc3REYXRhc2V0IGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlSW1nRGF0YXNldCwgXG4gICAgICAgIFsgSW1nRGF0YXNldEZldGNoTWl4aW5zLFxuICAgICAgICAgIEltZ0RhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zLFxuICAgICAgICAgIEltZ0RhdGFzZXRHZW5lcmF0b3JNaXhpbnMsXG4gICAgICAgICAgTWVtQ2FjaGVNaXhpbnMsXG4gICAgICAgICAgU3RvcmFnZU1peGlucyxcbiAgICAgICAgICBMb2dnZXJNaXhpbnMgXSl7XG4gICAgXG4gICAgY29uc3RydWN0b3IoLi4uYXJncyl7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLkYgPSBuZXcgRnVuY3Rpb24oKTtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gaW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMuTWVtQ2FjaGUgPSBtZW1Eb3duQ2FjaGU7XG4gICAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VJbWdEYXRhc2V0e1xuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXRDb25maWd1cmUpe1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBkYXRhc2V0Q29uZmlndXJlO1xuICAgICAgICBjb25zdCB7bnVtU2FtcGxlcywgc2FtcGxlU2l6ZSwgbnVtQ2xhc3Nlc30gPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuZGF0YVNpemUgPSBbbnVtU2FtcGxlcywgLi4uc2FtcGxlU2l6ZV07XG4gICAgICAgIFxuICAgICAgICB0aGlzLm51bVNhbXBsZXMgPSBudW1TYW1wbGVzO1xuICAgICAgICB0aGlzLnNhbXBsZVNpemUgPSBzYW1wbGVTaXplO1xuICAgICAgICB0aGlzLm51bUNsYXNzICAgPSBudW1DbGFzc2VzO1xuICAgIH1cbiAgICBcbiAgICBzdW1tYXJ5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgfVxufSIsImltcG9ydCB7IEZ1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0aW9uTWl4aW5zfSBmcm9tICcuL2Z1bmN0aW9uLm1peGlucyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbiBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLFtGdW5jdGlvbk1peGluc10pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufSIsImNvbnN0IEZ1bmN0aW9uTWl4aW5zID0gKEJhc2VGdW5jdGlvbkNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUZ1bmN0aW9uQ2xhc3N7IFxuICAgIGdldEltZ0J1ZmZlclNpemUoaW1nU2l6ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnJlZHVjZSgocyxkKT0+cypkLDEsaW1nU2l6ZSk7XG4gICAgfVxuICAgIGdlbmVyYXRvcldpdGhJbmRleChpdGVtcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmFkZEluZGV4KFIubWFwKSgoZCwgaWR4KT0+W2lkeCwgZF0sIGl0ZW1zKTtcbiAgICB9XG4gICAgc3BsaXRUcmFpblRlc3RTZXQoaXRlbXMsIHNwbGl0SW5kZXgpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5zcGxpdEF0KHNwbGl0SW5kZXgsIGl0ZW1zKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25NaXhpbnM7IiwiXG5pbXBvcnQgeyBTYW1wbGluZyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY29uc3QgSW1nRGF0YXNldEZldGNoTWl4aW5zID0gKEJhc2VJbWFnZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUltYWdlQ2xhc3N7IFxuICAgIGFzeW5jIGZldGNoTGFiZWxDaHVuayhzYXZlRGlyLCBsYWJlbENodW5rKXtcbiAgICAgICAgbGV0IGxhYmVsQ2h1bmtVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZGF0YXNldFVybCArIGxhYmVsQ2h1bms7XG4gICAgICAgIGxldCBsYWJlbFNhdmVQYXRoID0gc2F2ZURpciArIGxhYmVsQ2h1bms7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hGaWxlKGxhYmVsQ2h1bmtVcmwsIGxhYmVsU2F2ZVBhdGgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoU2FtcGxlQ2h1bmsoc2F2ZURpciwgc2FtcGxlQ2h1bmspe1xuICAgICAgICBsZXQgc2FtcGxlQ2h1bmtVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZGF0YXNldFVybCArIHNhbXBsZUNodW5rO1xuICAgICAgICBsZXQgc2FtbXBsZVNhdmVQYXRoID0gc2F2ZURpciArIHNhbXBsZUNodW5rO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7c2FtcGxlQ2h1bmtVcmwsIHNhbW1wbGVTYXZlUGF0aH0pO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoUE5HRmlsZShzYW1wbGVDaHVua1VybCwgc2FtbXBsZVNhdmVQYXRoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RDaHVua3MobnVtY2h1bmtzLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIGxldCBjaHVua0lkeHMgPSBTYW1wbGluZy5jaG9pY2UodGhpcy5jb25maWd1cmF0aW9uLmNodW5rTGlzdCwgbnVtY2h1bmtzKTtcbiAgICAgICAgcmV0dXJuIGNodW5rSWR4cy5tYXAoKGlkeCwgaXRoKT0+KFtgZGF0YS1jaHVuay0ke2lkeH0ucG5nYCxgbGFiZWwtY2h1bmstJHtpZHh9YF0pKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaERhdGFzZXQoc2F2ZURpcj0nL21uaXN0LycsbnVtY2h1bmtzPTEwLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIGxldCBzZWxlY3RlZENodW5rcyA9IHRoaXMuc2VsZWN0Q2h1bmtzKG51bWNodW5rcywgc2VsZWN0QnkpO1xuICAgICAgICB0aGlzLnNhdmVkQ2h1bmtzID0gW107XG4gICAgICAgIGZvcihsZXQgW3NhbXBsZUNodW5rLCBsYWJlbENodW5rXSBvZiBzZWxlY3RlZENodW5rcyl7XG4gICAgICAgICAgICBsZXQgc2FtcGxlUGF0aCA9IGF3YWl0IHRoaXMuZmV0Y2hTYW1wbGVDaHVuayhzYXZlRGlyLCBzYW1wbGVDaHVuayk7XG4gICAgICAgICAgICBsZXQgbGFiZWxQYXRoID0gYXdhaXQgdGhpcy5mZXRjaExhYmVsQ2h1bmsoc2F2ZURpciwgbGFiZWxDaHVuayk7XG4gICAgICAgICAgICB0aGlzLnNhdmVkQ2h1bmtzLnB1c2goW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0pO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyh7c2F2ZUNodW5rczpbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXX0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5GLnVuemlwKHRoaXMuc2F2ZWRDaHVua3MpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBJbWdEYXRhc2V0RmV0Y2hNaXhpbnM7IiwiaW1wb3J0IHsgU2FtcGxpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IEltZ0RhdGFzZXRHZW5lcmF0b3JNaXhpbnMgPSAoQmFzZUltYWdlQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlSW1hZ2VDbGFzc3sgXG4gICAgXG4gICAgZ2V0VHJhaW5UZXN0U2V0KHRyYWluU2l6ZT1udWxsKXtcbiAgICAgICAgdHJhaW5TaXplID0gdHJhaW5TaXplfHxwYXJzZUludCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZy5sZW5ndGgqMC45KTtcbiAgICAgICAgY29uc3QgW3RyYWluU2V0LCB0ZXN0U2V0XSA9IHRoaXMuRi5zcGxpdFRyYWluVGVzdFNldCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgdHJhaW5TaXplKTtcbiAgICAgICAgcmV0dXJuIFt0cmFpblNldCwgdGVzdFNldF07XG4gICAgfVxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcihzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZT1udWxsLCBzdGFydD0wLCBlbmQ9bnVsbCl7XG4gICAgICAgIGlmKCF0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncHJlcHJvY2Vzc2luZyBtdXN0IGJlIHBlcmZvcm1lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGJhdGNoU2l6ZSA9IGJhdGNoU2l6ZT9iYXRjaFNpemU6c2FtcGxlSWR4U2V0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgX2JhdGNoZXMgPSB0aGlzLkYuaHNwbGl0RXZlcnkoc2FtcGxlSWR4U2V0LCBiYXRjaFNpemUpO1xuICAgICAgICBjb25zdCBiYXRjaGVzID0gU2FtcGxpbmcuY2hvaWNlKF9iYXRjaGVzLCBfYmF0Y2hlcy5sZW5ndGgpO1xuICAgICAgICBpZihlbmQgPT09IG51bGwpe1xuICAgICAgICAgICAgZW5kID0gYmF0Y2hlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRJbmRleCA9IHN0YXJ0LCBpdGVyYXRpb25Db3VudCA9IDAsIHN0ZXAgPSAxO1xuICAgICAgICBjb25zdCBiYXRjaEdlbmVyYXRvciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiBhc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXRjaFNhbXBsZXMgPSBbXSwgYmF0Y2hMYWJlbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSBvZiBiYXRjaGVzW25leHRJbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hTYW1wbGVzID0gWy4uLmJhdGNoU2FtcGxlcywgc2FtcGxlSXRlbVtzYW1wbGVQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaExhYmVscyA9IFsuLi5iYXRjaExhYmVscywgbGFiZWxJdGVtW2xhYmVsUGF0aF1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSBzdGVwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWR4ID0gaXRlcmF0aW9uQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7aWR4LCBiYXRjaFNpemUsIGRhdGE6W2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUobmV4dEluZGV4IDwgZW5kKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJhdGNoR2VuZXJhdG9yO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBJbWdEYXRhc2V0R2VuZXJhdG9yTWl4aW5zOyIsImltcG9ydCB7IFN0cmVhbSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgUHJlcHJvY2Vzc2luZyB9IGZyb20gJ2NhdXNhbC1uZXQucHJlcHJvY2Vzc2luZyc7XG5jb25zdCBJbWdEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGlucyA9IChCYXNlSW1hZ2VDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VJbWFnZUNsYXNzeyBcbiAgICBtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbShzYXZlRGlyKXtcbiAgICAgICAgY29uc3QgSW1hZ2VCdWZmZXJTaXplID0gdGhpcy5GLmdldEltZ0J1ZmZlclNpemUodGhpcy5zYW1wbGVTaXplKTtcbiAgICAgICAgY29uc3QgTGFiZWxCdWZmZXJTaXplID0gdGhpcy5udW1DbGFzcztcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe2ltYWdlQnVmZmVyU2l6ZTogSW1hZ2VCdWZmZXJTaXplLCBcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsQnVmZmVyU2l6ZTogTGFiZWxCdWZmZXJTaXplfSk7XG4gICAgICAgIGNvbnN0IFRyYW5zZm9ybUZuID0gKGNodW5rLCBjaHVua0VuY29kaW5nLCBhZnRlclRyYW5zZm9ybUZuKSA9PntcbiAgICAgICAgICAgIGNvbnN0IFRyYW5zZm9ybUFzeW5jID0gYXN5bmMgKCk9PntcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlQnVmZmVyID0gY2h1bmsuc2FtcGxlO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbEJ1ZmZlciA9IGNodW5rLmxhYmVsO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtzYW1wbGVCdWZmZXIsIGxhYmVsQnVmZmVyfSk7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0ZWRJbWdCdWZmZXIgPSBhd2FpdCB0aGlzLnByZXByb2Nlc3Npbmcuc3BsaXRJbWFnZUJ1ZmZlcihzYW1wbGVCdWZmZXIsIEltYWdlQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0ZWRMYWJlbEJ1ZmZlciA9IGF3YWl0IHRoaXMucHJlcHJvY2Vzc2luZy5zcGxpdEltYWdlQnVmZmVyKGxhYmVsQnVmZmVyLCBMYWJlbEJ1ZmZlclNpemUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHByb2Nlc3NlZENodW5rOiB0aGlzLkYuemlwKHNwbGl0ZWRJbWdCdWZmZXIsIHNwbGl0ZWRMYWJlbEJ1ZmZlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rSWR4OiBjaHVuay5pZHh9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFRyYW5zZm9ybUFzeW5jKGNodW5rKS50aGVuKHByb2Nlc3NlZENodW5rPT57XG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2Zvcm1GbihudWxsLCBwcm9jZXNzZWRDaHVuayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFdyaXRlRm4gPSAocHJvY2Vzc2VkQ2h1bmssIGNodW5rRW5jb2RpbmcsIGNhbGxiYWNrKSA9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgV3JpdGVBc3luYyA9IGFzeW5jIChwcm9jZXNzZWRDaHVuayk9PntcbiAgICAgICAgICAgICAgICBsZXQgZ2VuZXJhdG9yID0gdGhpcy5GLmdlbmVyYXRvcldpdGhJbmRleChwcm9jZXNzZWRDaHVuay5wcm9jZXNzZWRDaHVuayk7XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rSWR4ICA9IHByb2Nlc3NlZENodW5rLmNodW5rSWR4O1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVQYXRoICA9IFtdLCBsYWJlbFBhdGggPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGUsIGxhYmVsXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rU2FtcGxlUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ3NhbXBsZS8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIHNhbXBsZSk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtMYWJlbFBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdsYWJlbC8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlUGF0aCA9IFsuLi5zYW1wbGVQYXRoLCBjaHVua1NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFBhdGggPSBbLi4ubGFiZWxQYXRoLCBjaHVua0xhYmVsUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Moe3ByZXByb2Nlc3Npbmc6IFtjaHVua1NhbXBsZVBhdGgsIGNodW5rTGFiZWxQYXRoXX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5GLnppcChzYW1wbGVQYXRoLCBsYWJlbFBhdGgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgV3JpdGVBc3luYyhwcm9jZXNzZWRDaHVuaykudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSBbLi4udGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIC4uLnJlc3VsdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBkdXBsZXhlciA9IFN0cmVhbS5tYWtlRHVwbGV4KFdyaXRlRm4pO1xuICAgICAgICBsZXQgdHJhbnNmb3JtZXIgPSBTdHJlYW0ubWFrZVRyYW5zZm9ybShUcmFuc2Zvcm1Gbik7XG4gICAgICAgIGxldCBzdHJlYW0gPSBkdXBsZXhlci5waXBlKHRyYW5zZm9ybWVyKS5waXBlKGR1cGxleGVyKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG5cbiAgICBhc3luYyBwcmVwcm9jZXNzaW5nRGF0YXNldChzYXZlRGlyPScvcHJlcHJvY2Vzc2luZy9tbmlzdC8nLHN0b3JlSW5NZW1vcnk9ZmFsc2Upe1xuICAgICAgICB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlID0gKHN0b3JlSW5NZW1vcnkpP3RoaXMubWVtQ2FjaGU6dGhpcy5zdG9yYWdlO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmcgPSBuZXcgUHJlcHJvY2Vzc2luZygpO1xuICAgICAgICBsZXQgc3RyZWFtID0gdGhpcy5tYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbShzYXZlRGlyKTtcbiAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlID0gc2FtcGxlSXRlbVtzYW1wbGVQYXRoXTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGxhYmVsSXRlbVtsYWJlbFBhdGhdO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgICAgIHN0cmVhbS5wdXNoKHtpZHgsIHNhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0ucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBzdHJlYW0ub24oJ2ZpbmlzaCcsICgpPT57XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEltZ0RhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9