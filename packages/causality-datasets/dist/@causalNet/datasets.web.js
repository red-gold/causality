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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uLi9jYXVzYWxpdHktbG9nL2Rpc3QvQGNhdXNhbE5ldC9sb2cud2ViLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvTU5JU1QuSW1nRGF0YXNldC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2Jhc2VJbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9pbWdEYXRhc2V0RmV0Y2gubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvaW1nRGF0YXNldEdlbmVyYXRvci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9pbWdEYXRhc2V0UHJlcHJvY2Vzc2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIk1uaXN0RGF0YXNldCIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VJbWdEYXRhc2V0IiwiSW1nRGF0YXNldEZldGNoTWl4aW5zIiwiSW1nRGF0YXNldFByZXByb2Nlc3NpbmdNaXhpbnMiLCJJbWdEYXRhc2V0R2VuZXJhdG9yTWl4aW5zIiwiTWVtQ2FjaGVNaXhpbnMiLCJTdG9yYWdlTWl4aW5zIiwiTG9nZ2VyTWl4aW5zIiwiY29uc3RydWN0b3IiLCJhcmdzIiwiRiIsIkZ1bmN0aW9uIiwiU3RvcmFnZSIsImluZGV4REJTdG9yYWdlIiwiTWVtQ2FjaGUiLCJtZW1Eb3duQ2FjaGUiLCJkYXRhc2V0Q29uZmlndXJlIiwiY29uZmlndXJhdGlvbiIsIm51bVNhbXBsZXMiLCJzYW1wbGVTaXplIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwibnVtQ2xhc3MiLCJzdW1tYXJ5IiwiQmFzZUZ1bmN0aW9uIiwiRnVuY3Rpb25NaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImdldEltZ0J1ZmZlclNpemUiLCJpbWdTaXplIiwiUiIsInJlZHVjZSIsInMiLCJkIiwiZ2VuZXJhdG9yV2l0aEluZGV4IiwiaXRlbXMiLCJhZGRJbmRleCIsIm1hcCIsImlkeCIsInNwbGl0VHJhaW5UZXN0U2V0Iiwic3BsaXRJbmRleCIsInNwbGl0QXQiLCJCYXNlSW1hZ2VDbGFzcyIsImZldGNoTGFiZWxDaHVuayIsInNhdmVEaXIiLCJsYWJlbENodW5rIiwibGFiZWxDaHVua1VybCIsImRhdGFzZXRVcmwiLCJsYWJlbFNhdmVQYXRoIiwic3RvcmFnZSIsImZldGNoRmlsZSIsImZldGNoU2FtcGxlQ2h1bmsiLCJzYW1wbGVDaHVuayIsInNhbXBsZUNodW5rVXJsIiwic2FtbXBsZVNhdmVQYXRoIiwibG9nZ2VyIiwiZGVidWciLCJmZXRjaFBOR0ZpbGUiLCJzZWxlY3RDaHVua3MiLCJudW1jaHVua3MiLCJzZWxlY3RCeSIsImNodW5rSWR4cyIsIlNhbXBsaW5nIiwiY2hvaWNlIiwiY2h1bmtMaXN0IiwiaXRoIiwiZmV0Y2hEYXRhc2V0Iiwic2VsZWN0ZWRDaHVua3MiLCJzYXZlZENodW5rcyIsInNhbXBsZVBhdGgiLCJsYWJlbFBhdGgiLCJwdXNoIiwicHJvZ3Jlc3MiLCJzYXZlQ2h1bmtzIiwidW56aXAiLCJnZXRUcmFpblRlc3RTZXQiLCJ0cmFpblNpemUiLCJwYXJzZUludCIsInNhdmVkUHJlcHJvY2Vzc2luZyIsImxlbmd0aCIsInRyYWluU2V0IiwidGVzdFNldCIsIm1ha2VTYW1wbGVHZW5lcmF0b3IiLCJzYW1wbGVJZHhTZXQiLCJiYXRjaFNpemUiLCJzdGFydCIsImVuZCIsIkVycm9yIiwiX2JhdGNoZXMiLCJoc3BsaXRFdmVyeSIsImJhdGNoZXMiLCJuZXh0SW5kZXgiLCJpdGVyYXRpb25Db3VudCIsInN0ZXAiLCJiYXRjaEdlbmVyYXRvciIsIm5leHQiLCJiYXRjaFNhbXBsZXMiLCJiYXRjaExhYmVscyIsInNhbXBsZUl0ZW0iLCJwcmVQcm9jZXNzaW5nU3RvcmFnZSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJkYXRhIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbSIsIkltYWdlQnVmZmVyU2l6ZSIsIkxhYmVsQnVmZmVyU2l6ZSIsImltYWdlQnVmZmVyU2l6ZSIsImxhYmVsQnVmZmVyU2l6ZSIsIlRyYW5zZm9ybUZuIiwiY2h1bmsiLCJjaHVua0VuY29kaW5nIiwiYWZ0ZXJUcmFuc2Zvcm1GbiIsIlRyYW5zZm9ybUFzeW5jIiwic2FtcGxlQnVmZmVyIiwic2FtcGxlIiwibGFiZWxCdWZmZXIiLCJsYWJlbCIsInNwbGl0ZWRJbWdCdWZmZXIiLCJwcmVwcm9jZXNzaW5nIiwic3BsaXRJbWFnZUJ1ZmZlciIsInNwbGl0ZWRMYWJlbEJ1ZmZlciIsInByb2Nlc3NlZENodW5rIiwiemlwIiwiY2h1bmtJZHgiLCJ0aGVuIiwiV3JpdGVGbiIsImNhbGxiYWNrIiwiV3JpdGVBc3luYyIsImdlbmVyYXRvciIsImNodW5rU2FtcGxlUGF0aCIsInNldEl0ZW0iLCJjaHVua0xhYmVsUGF0aCIsInJlc3VsdCIsImR1cGxleGVyIiwiU3RyZWFtIiwibWFrZUR1cGxleCIsInRyYW5zZm9ybWVyIiwibWFrZVRyYW5zZm9ybSIsInN0cmVhbSIsInBpcGUiLCJwcmVwcm9jZXNzaW5nRGF0YXNldCIsInN0b3JlSW5NZW1vcnkiLCJtZW1DYWNoZSIsIlByZXByb2Nlc3NpbmciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Es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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE1BQU0sWUFBWTtBQUNyQixDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE1BQU0sWUFBWTtBQUNyQixDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7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bE5ldC9kYXRhc2V0cy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCJdLCByb290W1wiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Jhc2VMb2cuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9iYXNlTG9nLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0c10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4gIGNsYXNzIEJhc2VMb2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5BY2NlcHRlZExldmVscyA9IHtcbiAgICAgICAgZGVidWc6IDAsXG4gICAgICAgIGxvZzogMSxcbiAgICAgICAgd2FybmluZzogMixcbiAgICAgICAgZXJyb3I6IDNcbiAgICAgIH07XG4gICAgICB0aGlzLnJBY2NlcHRlZExldmVscyA9IHtcbiAgICAgICAgMDogJ2RlYnVnJyxcbiAgICAgICAgMTogJ2xvZycsXG4gICAgICAgIDI6ICd3YXJuaW5nJyxcbiAgICAgICAgMzogJ2Vycm9yJ1xuICAgICAgfTtcbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddO1xuICAgIH1cblxuICAgIHNldCBMZXZlbChsZXZlbCkge1xuICAgICAgaWYgKHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYCR7bGV2ZWx9IG11c3QgYmUgb25lIG9mICR7T2JqZWN0LmtleXModGhpcy5BY2NlcHRlZExldmVscyl9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IExldmVsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuckFjY2VwdGVkTGV2ZWxzW3RoaXMubGV2ZWxdO1xuICAgIH1cblxuICB9XG5cbiAgX2V4cG9ydHMuZGVmYXVsdCA9IEJhc2VMb2c7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXJtTG9nICovIFwiLi9zcmMvdGVybUxvZy5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlTG9nICovIFwiLi9zcmMvYmFzZUxvZy5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9sb2dnZXIubWl4aW5zICovIFwiLi9zcmMvbG9nZ2VyLm1peGlucy5qc1wiKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMsIF90ZXJtTG9nLCBfYmFzZUxvZywgX2xvZ2dlcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIkxvZ2dlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGVybUxvZy5kZWZhdWx0O1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJCYXNlTG9nXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9iYXNlTG9nLmRlZmF1bHQ7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIkxvZ2dlck1peGluc1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfbG9nZ2VyLmRlZmF1bHQ7XG4gICAgfVxuICB9KTtcbiAgX3Rlcm1Mb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXJtTG9nKTtcbiAgX2Jhc2VMb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlTG9nKTtcbiAgX2xvZ2dlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZ2dlcik7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbG9nZ2VyLm1peGlucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2xvZ2dlci5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtleHBvcnRzXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gIH0gZWxzZSB7IHZhciBtb2Q7IH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChfZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbiAgY29uc3QgTG9nZ2VyTWl4aW5zID0gQmFzZWRDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VkQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgIH1cblxuICAgIHByb2dyZXNzKHByb2dyZXNzTWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMubG9nZ2VyLnByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLnByb2dyZXNzKHByb2dyZXNzTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0IExvZ2dlcihsb2dnZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIH1cblxuICAgIGdldCBMb2dnZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2dnZXI7XG4gICAgfVxuXG4gIH07XG5cbiAgdmFyIF9kZWZhdWx0ID0gTG9nZ2VyTWl4aW5zO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcHJldHR5SnNvbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3ByZXR0eUpzb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtleHBvcnRzXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gIH0gZWxzZSB7IHZhciBtb2Q7IH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChfZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbiAgLy8gb3JpZ2luIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbHVjeWdpbGJlcnQvanNvbi1kaXNwbGF5L2Jsb2IvbWFzdGVyL2pzb24tZGlzcGxheS5qc1xuICAvLyBDb3B5cmlnaHQgKGMpIDIwMTcgTHVjeSBHaWxiZXJ0XG4gIGNsYXNzIEpzb25WaWV3IHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzdGF0aWMgSlNPTkRpc3BsYXkoanNvbiwgb3BlbkxldmVsc0FyZywgc3R5bGVPcHRpb25zQXJnKSB7XG4gICAgICB2YXIgREVGQVVMVF9TVFlMRV9PUFRJT05TID0ge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgdGFnOiAncHJlJyxcbiAgICAgICAgICBzdHlsZTogJ3BhZGRpbmc6IDVweDsgZm9udC1zaXplOiAxcmVtOydcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGVDb250YWluZXI6IHtcbiAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgIHN0eWxlOiAnbWFyZ2luLWJvdHRvbTogM3B4OydcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcjsnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlVGV4dDoge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBvcGVuQnV0dG9uOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbjogMHB4IDdweCAwcHggMnB4OyBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7ICcgKyAnYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDogNXB4IHNvbGlkIGJsYWNrOydcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudHNDb250YWluZXI6IHtcbiAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgIHN0eWxlOiAncGFkZGluZy1sZWZ0OiAxOHB4OydcbiAgICAgICAgfSxcbiAgICAgICAga2V5VmFsdWVQYWlyOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogMnB4OydcbiAgICAgICAgfSxcbiAgICAgICAga2V5OiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjb2xvcjogZGFya2JsdWU7J1xuICAgICAgICB9LFxuICAgICAgICBzeW1ib2xWYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGRhcmtncmVlbjsnXG4gICAgICAgIH0sXG4gICAgICAgIHN0cmluZ1ZhbHVlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjb2xvcjogY3JpbXNvbjsnXG4gICAgICAgIH0sXG4gICAgICAgIG51bWJlclZhbHVlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjb2xvcjogYmx1ZTsnXG4gICAgICAgIH0sXG4gICAgICAgIGJvb2xlYW5WYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGJsdWU7J1xuICAgICAgICB9LFxuICAgICAgICBudWxsVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBibHVlOydcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBvcGVuTGV2ZWxzID0gaXNOYU4ocGFyc2VJbnQob3BlbkxldmVsc0FyZykpID8gSW5maW5pdHkgOiBwYXJzZUludChvcGVuTGV2ZWxzQXJnKTtcbiAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB0eXBlb2Ygc3R5bGVPcHRpb25zQXJnID09PSAnb2JqZWN0JyA/IG1lcmdlU3R5bGVPcHRpb25zKERFRkFVTFRfU1RZTEVfT1BUSU9OUywgc3R5bGVPcHRpb25zQXJnKSA6IERFRkFVTFRfU1RZTEVfT1BUSU9OUztcblxuICAgICAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuXG4gICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcblxuICAgICAgICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRTb3VyY2UsIG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMucm9vdC50YWcpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMucm9vdC5zdHlsZTtcblxuICAgICAgICBpZiAoanNvbiA9PT0gbnVsbCB8fCBqc29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgdm9pZEVsZW1lbnQgPSBnZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZvaWRFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChqc29uIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgIHZhciBkYXRlRWxlbWVudCA9IGdldFZhbHVlKGpzb24udG9JU09TdHJpbmcoKSk7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb24gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdmFyIG5vbkV4cGFuZGFibGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbik7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub25FeHBhbmRhYmxlRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHRpdGxlID0gQXJyYXkuaXNBcnJheShqc29uKSA/ICdBcnJheVsnICsganNvbi5sZW5ndGggKyAnXScgOiAnT2JqZWN0JztcbiAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBvcGVuTGV2ZWxzIDwgMTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGdldFRpdGxlKHRpdGxlLCBudWxsLCB0aGlzTGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gaW5kZXggPiBvcGVuTGV2ZWxzO1xuICAgICAgICB2YXIgbmV4dExldmVsSXNDbG9zZWQgPSBpbmRleCArIDEgPiBvcGVuTGV2ZWxzO1xuICAgICAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGVudHNDb250YWluZXIodGhpc0xldmVsSXNDbG9zZWQpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbltrZXldKSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdBcnJheVsnICsganNvbltrZXldLmxlbmd0aCArICddJywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoanNvbltrZXldID09PSBudWxsIHx8IGpzb25ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwgbnVsbCkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoanNvbltrZXldIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XS50b0lTT1N0cmluZygpKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbltrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdPYmplY3QnLCBrZXksIG5leHRMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGpzb24pLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihzeW1ib2wudG9TdHJpbmcoKSwganNvbltzeW1ib2xdKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRUaXRsZSh0aXRsZVRleHQsIG9wdGlvbmFsS2V5LCBsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgIHZhciBjdXJyZW50bHlDbG9zZWQgPSBsZXZlbElzQ2xvc2VkO1xuICAgICAgICB2YXIgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnRhZyk7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICd0aXRsZUNvbnRhaW5lcicpO1xuICAgICAgICB2YXIgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZVRleHQudGFnKTtcbiAgICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlLnRhZyk7XG4gICAgICAgIHRpdGxlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlLnN0eWxlO1xuICAgICAgICB0ZXh0RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlVGV4dC5zdHlsZTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkpO1xuXG4gICAgICAgIGlmIChvcHRpb25hbEtleSkge1xuICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGdldEtleShvcHRpb25hbEtleSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGVUZXh0KSk7XG4gICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG5cbiAgICAgICAgdGl0bGVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG9wZW5CdXR0b24gPSB0aXRsZUVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICB2YXIgb2JqZWN0Q29udGVudHMgPSB0aXRsZUVsZW1lbnQucGFyZW50Tm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICBvYmplY3RDb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gY3VycmVudGx5Q2xvc2VkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICBvcGVuQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRseUNsb3NlZCA/ICdyb3RhdGUoOTBkZWcpJyA6ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICAgIGN1cnJlbnRseUNsb3NlZCA9ICFjdXJyZW50bHlDbG9zZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi50YWcpO1xuICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi5zdHlsZTtcbiAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBsZXZlbElzQ2xvc2VkID8gJ3JvdGF0ZSgwZGVnKScgOiAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIHJldHVybiBidXR0b25FbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRDb250ZW50c0NvbnRhaW5lcihpc0Nsb3NlZCkge1xuICAgICAgICB2YXIgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnRhZyk7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAnY29udGVudHNDb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnN0eWxlO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBpc0Nsb3NlZCA/ICdub25lJyA6ICdibG9jayc7XG4gICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRTdGFuZGFyZFBhaXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgcGFpckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIudGFnKTtcbiAgICAgICAgcGFpckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIuc3R5bGU7XG4gICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldEtleShrZXkpKTtcbiAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VmFsdWUodmFsdWUpKTtcbiAgICAgICAgcmV0dXJuIHBhaXJFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRLZXkobmFtZSkge1xuICAgICAgICB2YXIga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleS50YWcpO1xuICAgICAgICBrZXlFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5LnN0eWxlO1xuICAgICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUgKyAnOiAnKSk7XG4gICAgICAgIHJldHVybiBrZXlFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWVFbGVtZW50O1xuICAgICAgICB2YXIgbnVsbFR5cGUgPSAnb2JqZWN0JztcblxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS50YWcpO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdcIicgKyB2YWx1ZSArICdcIicpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS50YWcpO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgbnVsbFR5cGU6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udWxsVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bGxWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWVFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtZXJnZVN0eWxlT3B0aW9ucyhkZWZhdWx0cywgb3ZlcnJpZGVzKSB7XG4gICAgICAgIHZhciBtZXJnZWQgPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICBtZXJnZWRba2V5XSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzW2tleV0sIG92ZXJyaWRlc1trZXldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZW5kZXIoKTtcbiAgICB9XG5cbiAgfVxuXG4gIF9leHBvcnRzLmRlZmF1bHQgPSBKc29uVmlldztcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90ZXJtTG9nLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdGVybUxvZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYmFzZUxvZyAqLyBcIi4vc3JjL2Jhc2VMb2cuanNcIiksIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGVybUxvZy5taXhpbnMubm9kZSAqLyBcIi4vc3JjL3Rlcm1Mb2cubWl4aW5zLm5vZGUuanNcIiksIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGVybUxvZy5taXhpbnMud2ViICovIFwiLi9zcmMvdGVybUxvZy5taXhpbnMud2ViLmpzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LnV0aWxzICovIFwiY2F1c2FsLW5ldC51dGlsc1wiKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMsIF9iYXNlTG9nLCBfdGVybUxvZ01peGlucywgX3Rlcm1Mb2dNaXhpbnMyLCBfY2F1c2FsTmV0KSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIik7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBfYmFzZUxvZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jhc2VMb2cpO1xuICBfdGVybUxvZ01peGlucyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rlcm1Mb2dNaXhpbnMpO1xuICBfdGVybUxvZ01peGluczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXJtTG9nTWl4aW5zMik7XG5cbiAgY2xhc3MgVGVybUxvZyBleHRlbmRzIF9jYXVzYWxOZXQuUGxhdGZvcm0ubWl4V2l0aChfYmFzZUxvZy5kZWZhdWx0LCB7XG4gICAgJ25vZGUnOiBbX3Rlcm1Mb2dNaXhpbnMuZGVmYXVsdF0sXG4gICAgJ3dlYic6IFtfdGVybUxvZ01peGluczIuZGVmYXVsdF1cbiAgfSkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0IExvZ2dlciA9IG5ldyBUZXJtTG9nKCk7XG4gIHZhciBfZGVmYXVsdCA9IExvZ2dlcjtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3Rlcm1Mb2cubWl4aW5zLm5vZGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0c10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4gIGNvbnN0IExvZ05vZGVNaXhpbnMgPSBMb2dDbGFzcyA9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNzIHtcbiAgICBjb25uZWN0KGNoYW5uZWwpIHsvL25vdGhpbmdcbiAgICB9XG5cbiAgICBsb2cobWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snbG9nJ10pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHByb2dyZXNzKHByb2Nlc3NNZXNzYWdlKSB7Ly9UT0RPOiBpbXBsZW1lbnQgcHJvZ3Jlc3Mgc2hvd1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxuXG4gIH07XG5cbiAgdmFyIF9kZWZhdWx0ID0gTG9nTm9kZU1peGlucztcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdGVybUxvZy5taXhpbnMud2ViLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ByZXR0eUpzb24gKi8gXCIuL3NyYy9wcmV0dHlKc29uLmpzXCIpXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gIH0gZWxzZSB7IHZhciBtb2Q7IH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChfZXhwb3J0cywgX3ByZXR0eUpzb24pIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiKTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gIF9wcmV0dHlKc29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJldHR5SnNvbik7XG5cbiAgY29uc3QgV2ViTm9kZU1peGlucyA9IExvZ0NsYXNzID0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3Mge1xuICAgIGNvbm5lY3QoZG9jdW1lbnRFbCA9IG51bGwpIHtcbiAgICAgIGRvY3VtZW50RWwgPSBkb2N1bWVudEVsIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IFwibGlzdC1zdHlsZS10eXBlOiBub25lO1wiO1xuICAgICAgZG9jdW1lbnRFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIHRoaXMuZnJhbWVFbCA9IGRvY3VtZW50RWw7XG4gICAgICB0aGlzLmxvZ2dlckVsID0gZG9jdW1lbnRFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpWzBdO1xuICAgIH1cblxuICAgIHNjcm9sbEJvdHRvbShlbGVtZW50ID0gbnVsbCkge1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5mcmFtZUVsO1xuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIHByb2dyZXNzKHByb2Nlc3NNZXNzYWdlKSB7XG4gICAgICAvLyBsZXQgbm9kZSA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaTpudGgtbGFzdC1vZi10eXBlKDEpXCIpO1xuICAgICAgbGV0IExJTm9kZXMgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XG4gICAgICBsZXQgbm9kZSA9IExJTm9kZXNbTElOb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKCFub2RlIHx8IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9nZ2VyLXByb2dyZXNzXCIpKSB7XG4gICAgICAgIC8vY3JlYXRlIG5ldyBlbFxuICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJsb2dnZXItcHJvZ3Jlc3NcIik7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBqc29uTm9kZSA9IF9wcmV0dHlKc29uLmRlZmF1bHQuSlNPTkRpc3BsYXkocHJvY2Vzc01lc3NhZ2UpO1xuXG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICB9XG5cbiAgICBsb2cobWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snbG9nJ10pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5sb2dnZXJFbCB8fCAhdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSAnYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7JztcblxuICAgICAgbGV0IGpzb25Ob2RlID0gX3ByZXR0eUpzb24uZGVmYXVsdC5KU09ORGlzcGxheShtZXNzYWdlKTtcblxuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZGVidWcobWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gLy9ubyBzaG93IG9uIHdlYiBzY3JlZW47ICAgICAgICBcblxuXG4gICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cblxuICB9O1xuXG4gIHZhciBfZGVmYXVsdCA9IFdlYk5vZGVNaXhpbnM7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMDpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogbXVsdGkgLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NyYy9pbmRleC5qcyAqL1wiLi9zcmMvaW5kZXguanNcIik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC51dGlsc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OTNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZRR0poWW1Wc0wzSjFiblJwYldVdmFHVnNjR1Z5Y3k5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2TGk5emNtTXZZbUZ6WlV4dlp5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyeHZaeTh1TDNOeVl5OXNiMmRuWlhJdWJXbDRhVzV6TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2Ykc5bkx5NHZjM0pqTDNCeVpYUjBlVXB6YjI0dWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5c2IyY3ZMaTl6Y21NdmRHVnliVXh2Wnk1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OHVMM055WXk5MFpYSnRURzluTG0xcGVHbHVjeTV1YjJSbExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJHOW5MeTR2YzNKakwzUmxjbTFNYjJjdWJXbDRhVzV6TG5kbFlpNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyeHZaeTlsZUhSbGNtNWhiQ0JjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWlKZExDSnVZVzFsY3lJNld5SkNZWE5sVEc5bklpd2lZMjl1YzNSeWRXTjBiM0lpTENKQlkyTmxjSFJsWkV4bGRtVnNjeUlzSW1SbFluVm5JaXdpYkc5bklpd2lkMkZ5Ym1sdVp5SXNJbVZ5Y205eUlpd2lja0ZqWTJWd2RHVmtUR1YyWld4eklpd2liR1YyWld3aUxDSk1aWFpsYkNJc0luVnVaR1ZtYVc1bFpDSXNJa1Z5Y205eUlpd2lUMkpxWldOMElpd2lhMlY1Y3lJc0lreHZaMmRsY2sxcGVHbHVjeUlzSWtKaGMyVmtRMnhoYzNNaUxDSmhjbWR6SWl3aWJHOW5aMlZ5SWl3aVkyOXVjMjlzWlNJc0luQnliMmR5WlhOeklpd2ljSEp2WjNKbGMzTk5aWE56WVdkbElpd2lURzluWjJWeUlpd2lTbk52YmxacFpYY2lMQ0pLVTA5T1JHbHpjR3hoZVNJc0ltcHpiMjRpTENKdmNHVnVUR1YyWld4elFYSm5JaXdpYzNSNWJHVlBjSFJwYjI1elFYSm5JaXdpUkVWR1FWVk1WRjlUVkZsTVJWOVBVRlJKVDA1VElpd2ljbTl2ZENJc0luUmhaeUlzSW5OMGVXeGxJaXdpZEdsMGJHVkRiMjUwWVdsdVpYSWlMQ0owYVhSc1pTSXNJblJwZEd4bFZHVjRkQ0lzSW05d1pXNUNkWFIwYjI0aUxDSmpiMjUwWlc1MGMwTnZiblJoYVc1bGNpSXNJbXRsZVZaaGJIVmxVR0ZwY2lJc0ltdGxlU0lzSW5ONWJXSnZiRlpoYkhWbElpd2ljM1J5YVc1blZtRnNkV1VpTENKdWRXMWlaWEpXWVd4MVpTSXNJbUp2YjJ4bFlXNVdZV3gxWlNJc0ltNTFiR3hXWVd4MVpTSXNJbTl3Wlc1TVpYWmxiSE1pTENKcGMwNWhUaUlzSW5CaGNuTmxTVzUwSWl3aVNXNW1hVzVwZEhraUxDSnpkSGxzWlU5d2RHbHZibk1pTENKdFpYSm5aVk4wZVd4bFQzQjBhVzl1Y3lJc0ltRnpjMmxuYmlJc0luUmhjbWRsZENJc0lsUjVjR1ZGY25KdmNpSXNJblJ2SWl3aWFXNWtaWGdpTENKaGNtZDFiV1Z1ZEhNaUxDSnNaVzVuZEdnaUxDSnVaWGgwVTI5MWNtTmxJaXdpYm1WNGRFdGxlU0lzSW5CeWIzUnZkSGx3WlNJc0ltaGhjMDkzYmxCeWIzQmxjblI1SWl3aVkyRnNiQ0lzSW5KbGJtUmxjaUlzSW1Wc1pXMWxiblFpTENKa2IyTjFiV1Z1ZENJc0ltTnlaV0YwWlVWc1pXMWxiblFpTENKamMzTlVaWGgwSWl3aWRtOXBaRVZzWlcxbGJuUWlMQ0puWlhSV1lXeDFaU0lzSW1Gd2NHVnVaRU5vYVd4a0lpd2lSR0YwWlNJc0ltUmhkR1ZGYkdWdFpXNTBJaXdpZEc5SlUwOVRkSEpwYm1jaUxDSnViMjVGZUhCaGJtUmhZbXhsUld4bGJXVnVkQ0lzSWtGeWNtRjVJaXdpYVhOQmNuSmhlU0lzSW5Sb2FYTk1aWFpsYkVselEyeHZjMlZrSWl3aVoyVjBWR2wwYkdVaUxDSmpiMjUyWlhKMFNuTnZibFJ2Uld4bGJXVnVkSE1pTENKdVpYaDBUR1YyWld4SmMwTnNiM05sWkNJc0ltTnZiblJoYVc1bGNpSXNJbWRsZEVOdmJuUmxiblJ6UTI5dWRHRnBibVZ5SWl3aVoyVjBVM1JoYm1SaGNtUlFZV2x5SWl3aVoyVjBUM2R1VUhKdmNHVnlkSGxUZVcxaWIyeHpJaXdpWm05eVJXRmphQ0lzSW5ONWJXSnZiQ0lzSW5SdlUzUnlhVzVuSWl3aWIzQjBhVzl1WVd4TFpYa2lMQ0pzWlhabGJFbHpRMnh2YzJWa0lpd2lZM1Z5Y21WdWRHeDVRMnh2YzJWa0lpd2lZMjl1ZEdGcGJtVnlSV3hsYldWdWRDSXNJbk5sZEVGMGRISnBZblYwWlNJc0luUmxlSFJGYkdWdFpXNTBJaXdpZEdsMGJHVkZiR1Z0Wlc1MElpd2laMlYwVDNCbGJrSjFkSFJ2YmlJc0ltZGxkRXRsZVNJc0ltTnlaV0YwWlZSbGVIUk9iMlJsSWl3aWIyNWpiR2xqYXlJc0ltWnBjbk4wUTJocGJHUWlMQ0p2WW1wbFkzUkRiMjUwWlc1MGN5SXNJbkJoY21WdWRFNXZaR1VpTENKdVpYaDBVMmxpYkdsdVp5SXNJbVJwYzNCc1lYa2lMQ0owY21GdWMyWnZjbTBpTENKaWRYUjBiMjVGYkdWdFpXNTBJaXdpYVhORGJHOXpaV1FpTENKMllXeDFaU0lzSW5CaGFYSkZiR1Z0Wlc1MElpd2libUZ0WlNJc0ltdGxlVVZzWlcxbGJuUWlMQ0oyWVd4MVpVVnNaVzFsYm5RaUxDSnVkV3hzVkhsd1pTSXNJbVJsWm1GMWJIUnpJaXdpYjNabGNuSnBaR1Z6SWl3aWJXVnlaMlZrSWl3aVZHVnliVXh2WnlJc0lsQnNZWFJtYjNKdElpd2liV2w0VjJsMGFDSXNJa3h2WjA1dlpHVk5hWGhwYm5NaUxDSlhaV0pPYjJSbFRXbDRhVzV6SWl3aVRHOW5RMnhoYzNNaUxDSmpiMjV1WldOMElpd2lZMmhoYm01bGJDSXNJbTFsYzNOaFoyVWlMQ0p3Y205alpYTnpUV1Z6YzJGblpTSXNJbVJ2WTNWdFpXNTBSV3dpTENKaWIyUjVJaXdpYm05a1pTSXNJbVp5WVcxbFJXd2lMQ0pzYjJkblpYSkZiQ0lzSW1kbGRFVnNaVzFsYm5SelFubFVZV2RPWVcxbElpd2ljMk55YjJ4c1FtOTBkRzl0SWl3aWMyTnliMnhzVkc5d0lpd2ljMk55YjJ4c1NHVnBaMmgwSWl3aVkyeHBaVzUwU0dWcFoyaDBJaXdpVEVsT2IyUmxjeUlzSW1Oc1lYTnpUR2x6ZENJc0ltTnZiblJoYVc1eklpd2lZV1JrSWl3aWFuTnZiazV2WkdVaUxDSmtZWFJsSWl3aWFXNXVaWEpJVkUxTUlsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUXNUenRCUTFaQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBSQlFUQkRMR2REUVVGblF6dEJRVU14UlR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdkRlFVRjNSQ3hyUWtGQmEwSTdRVUZETVVVN1FVRkRRU3g1UkVGQmFVUXNZMEZCWXp0QlFVTXZSRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVVJCUVhsRExHbERRVUZwUXp0QlFVTXhSU3gzU0VGQlowZ3NiVUpCUVcxQ0xFVkJRVVU3UVVGRGNrazdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRMEZCTWtJc01FSkJRVEJDTEVWQlFVVTdRVUZEZGtRc2VVTkJRV2xETEdWQlFXVTdRVUZEYUVRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNPRVJCUVhORUxDdEVRVUVyUkRzN1FVRkZja2c3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3T3pzN096czdPenM3TzBGRGJFWkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNkME03T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEVG1Vc1VVRkJUVUVzVDBGQlRpeERRVUZoTzBGQlEzaENReXhsUVVGWExFZEJRVVU3UVVGRFZDeFhRVUZMUXl4alFVRk1MRWRCUVhOQ08wRkJRVU5ETEdGQlFVc3NSVUZCUlN4RFFVRlNPMEZCUVZkRExGZEJRVWNzUlVGQlF5eERRVUZtTzBGQlFXdENReXhsUVVGUExFVkJRVU1zUTBGQk1VSTdRVUZCTmtKRExHRkJRVXNzUlVGQlJUdEJRVUZ3UXl4UFFVRjBRanRCUVVOQkxGZEJRVXRETEdWQlFVd3NSMEZCZFVJN1FVRkJReXhYUVVGRkxFOUJRVWc3UVVGQldTeFhRVUZITEV0QlFXWTdRVUZCYzBJc1YwRkJSeXhUUVVGNlFqdEJRVUZ2UXl4WFFVRkhPMEZCUVhaRExFOUJRWFpDTzBGQlEwRXNWMEZCUzBNc1MwRkJUQ3hIUVVGaExFdEJRVXRPTEdOQlFVd3NRMEZCYjBJc1QwRkJjRUlzUTBGQllqdEJRVU5JT3p0QlFVTkVMRkZCUVVsUExFdEJRVW9zUTBGQlZVUXNTMEZCVml4RlFVRm5RanRCUVVOYUxGVkJRVWNzUzBGQlMwNHNZMEZCVEN4RFFVRnZRazBzUzBGQmNFSXNUVUZCTmtKRkxGTkJRV2hETEVWQlFUQkRPMEZCUTNSRExHRkJRVXRHTEV0QlFVd3NSMEZCWVN4TFFVRkxUaXhqUVVGTUxFTkJRVzlDVFN4TFFVRndRaXhEUVVGaU8wRkJRMGdzVDBGR1JDeE5RVWRKTzBGQlEwRXNZMEZCVFVjc1MwRkJTeXhEUVVGRkxFZEJRVVZJTEV0QlFVMHNiVUpCUVd0Q1NTeE5RVUZOTEVOQlFVTkRMRWxCUVZBc1EwRkJXU3hMUVVGTFdDeGpRVUZxUWl4RFFVRnBReXhGUVVFM1JDeERRVUZZTzBGQlEwZzdRVUZEU2pzN1FVRkRSQ3hSUVVGSlR5eExRVUZLTEVkQlFWYzdRVUZEVUN4aFFVRlBMRXRCUVV0R0xHVkJRVXdzUTBGQmNVSXNTMEZCUzBNc1MwRkJNVUlzUTBGQlVEdEJRVU5JT3p0QlFXaENkVUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTkJOVUlzVVVGQlRVMHNXVUZCV1N4SFFVRkpReXhWUVVGRUxFbEJRV1VzWTBGQlkwRXNWVUZCWkN4RFFVRjNRanRCUVVONFJHUXNaVUZCVnl4RFFVRkRMRWRCUVVkbExFbEJRVW9zUlVGQlV6dEJRVU5vUWl4WlFVRk5MRWRCUVVkQkxFbEJRVlE3UVVGRFFTeFhRVUZMUXl4TlFVRk1MRWRCUVdORExFOUJRV1E3UVVGRFNEczdRVUZEUkVNc1dVRkJVU3hEUVVGRFF5eGxRVUZFTEVWQlFXbENPMEZCUTNKQ0xGVkJRVWNzUzBGQlMwZ3NUVUZCVEN4RFFVRlpSU3hSUVVGbUxFVkJRWGRDTzBGQlEzQkNMR0ZCUVV0R0xFMUJRVXdzUTBGQldVVXNVVUZCV2l4RFFVRnhRa01zWlVGQmNrSTdRVUZEU0R0QlFVTktPenRCUVVORUxGRkJRVWxETEUxQlFVb3NRMEZCVjBvc1RVRkJXQ3hGUVVGclFqdEJRVU5rTEZkQlFVdEJMRTFCUVV3c1IwRkJZMEVzVFVGQlpEdEJRVU5JT3p0QlFVVkVMRkZCUVVsSkxFMUJRVW9zUjBGQldUdEJRVU5TTEdGQlFVOHNTMEZCUzBvc1RVRkJXanRCUVVOSU96dEJRV2hDZFVRc1IwRkJOVVE3TzJsQ1FXMUNaVWdzV1RzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEyNUNaanRCUVVOQk8wRkJRMlVzVVVGQlRWRXNVVUZCVGl4RFFVRmpPMEZCUTNwQ2NrSXNaVUZCVnl4SFFVRkZMRU5CUTFvN08wRkJRMFFzVjBGQlQzTkNMRmRCUVZBc1EwRkJiVUpETEVsQlFXNUNMRVZCUVhsQ1F5eGhRVUY2UWl4RlFVRjNRME1zWlVGQmVFTXNSVUZCZVVRN1FVRkRja1FzVlVGQlNVTXNjVUpCUVhGQ0xFZEJRVWM3UVVGRE1VSkRMRmxCUVVrc1JVRkJSVHRCUVVGRlF5eGhRVUZITEVWQlFVVXNTMEZCVUR0QlFVRmpReXhsUVVGTExFVkJRVVU3UVVGQmNrSXNVMEZFYjBJN1FVRkZNVUpETEhOQ1FVRmpMRVZCUVVVN1FVRkJSVVlzWVVGQlJ5eEZRVUZGTEV0QlFWQTdRVUZCWTBNc1pVRkJTeXhGUVVGRk8wRkJRWEpDTEZOQlJsVTdRVUZITVVKRkxHRkJRVXNzUlVGQlJUdEJRVUZGU0N4aFFVRkhMRVZCUVVVc1RVRkJVRHRCUVVGbFF5eGxRVUZMTEVWQlFVVTdRVUZCZEVJc1UwRkliVUk3UVVGSk1VSkhMR2xDUVVGVExFVkJRVVU3UVVGQlJVb3NZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNMRk5CU21VN1FVRkxNVUpKTEd0Q1FVRlZMRVZCUVVVN1FVRkRWa3dzWVVGQlJ5eEZRVUZGTEUxQlJFczdRVUZGVmtNc1pVRkJTeXhGUVVGRkxIZEdRVU5CTzBGQlNFY3NVMEZNWXp0QlFWVXhRa3NzZVVKQlFXbENMRVZCUVVVN1FVRkJSVTRzWVVGQlJ5eEZRVUZGTEV0QlFWQTdRVUZCWTBNc1pVRkJTeXhGUVVGRk8wRkJRWEpDTEZOQlZrODdRVUZYTVVKTkxHOUNRVUZaTEVWQlFVVTdRVUZCUlZBc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ0xGTkJXRms3UVVGWk1VSlBMRmRCUVVjc1JVRkJSVHRCUVVGRlVpeGhRVUZITEVWQlFVVXNUVUZCVUR0QlFVRmxReXhsUVVGTExFVkJRVVU3UVVGQmRFSXNVMEZhY1VJN1FVRmhNVUpSTEcxQ1FVRlhMRVZCUVVVN1FVRkJSVlFzWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTEZOQlltRTdRVUZqTVVKVExHMUNRVUZYTEVWQlFVVTdRVUZCUlZZc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ0xGTkJaR0U3UVVGbE1VSlZMRzFDUVVGWExFVkJRVVU3UVVGQlJWZ3NZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNMRk5CWm1FN1FVRm5RakZDVnl4dlFrRkJXU3hGUVVGRk8wRkJRVVZhTEdGQlFVY3NSVUZCUlN4TlFVRlFPMEZCUVdWRExHVkJRVXNzUlVGQlJUdEJRVUYwUWl4VFFXaENXVHRCUVdsQ01VSlpMR2xDUVVGVExFVkJRVVU3UVVGQlJXSXNZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNPMEZCYWtKbExFOUJRVFZDTzBGQmJVSkJMRlZCUVVsaExGVkJRVlVzUjBGQlIwTXNTMEZCU3l4RFFVRkRReXhSUVVGUkxFTkJRVU53UWl4aFFVRkVMRU5CUVZRc1EwRkJUQ3hIUVVGcFEzRkNMRkZCUVdwRExFZEJRVFJEUkN4UlFVRlJMRU5CUVVOd1FpeGhRVUZFTEVOQlFYSkZPMEZCUTBFc1ZVRkJTWE5DTEZsQlFWa3NSMEZCUnl4UFFVRlBja0lzWlVGQlVDeExRVUV5UWl4UlFVRXpRaXhIUVVORmMwSXNhVUpCUVdsQ0xFTkJRVU55UWl4eFFrRkJSQ3hGUVVGM1FrUXNaVUZCZUVJc1EwRkVia0lzUjBGRlJVTXNjVUpCUm5KQ096dEJRVWxCTEZWQlFVa3NUMEZCVDJZc1RVRkJUU3hEUVVGRGNVTXNUVUZCWkN4SlFVRjNRaXhWUVVFMVFpeEZRVUYzUXp0QlFVTjBRM0pETEdOQlFVMHNRMEZCUTNGRExFMUJRVkFzUjBGQlowSXNWVUZCVTBNc1RVRkJWQ3hGUVVGcFFqdEJRVU12UWl4alFVRkpRU3hOUVVGTkxFbEJRVWtzU1VGQlpDeEZRVUZ2UWp0QlFVTnNRaXhyUWtGQlRTeEpRVUZKUXl4VFFVRktMRU5CUVdNc05FTkJRV1FzUTBGQlRqdEJRVU5FT3p0QlFVVkVMR05CUVVsRExFVkJRVVVzUjBGQlIzaERMRTFCUVUwc1EwRkJRM05ETEUxQlFVUXNRMEZCWmpzN1FVRkZRU3hsUVVGTExFbEJRVWxITEV0QlFVc3NSMEZCUnl4RFFVRnFRaXhGUVVGdlFrRXNTMEZCU3l4SFFVRkhReXhUUVVGVExFTkJRVU5ETEUxQlFYUkRMRVZCUVRoRFJpeExRVUZMTEVWQlFXNUVMRVZCUVhWRU8wRkJRM0pFTEdkQ1FVRkpSeXhWUVVGVkxFZEJRVWRHTEZOQlFWTXNRMEZCUTBRc1MwRkJSQ3hEUVVFeFFqczdRVUZGUVN4blFrRkJTVWNzVlVGQlZTeEpRVUZKTEVsQlFXeENMRVZCUVhkQ08wRkJRM1JDTEcxQ1FVRkxMRWxCUVVsRExFOUJRVlFzU1VGQmIwSkVMRlZCUVhCQ0xFVkJRV2RETzBGQlF6bENMRzlDUVVGSk5VTXNUVUZCVFN4RFFVRkRPRU1zVTBGQlVDeERRVUZwUWtNc1kwRkJha0lzUTBGQlowTkRMRWxCUVdoRExFTkJRWEZEU2l4VlFVRnlReXhGUVVGcFJFTXNUMEZCYWtRc1EwRkJTaXhGUVVFclJEdEJRVU0zUkV3c2IwSkJRVVVzUTBGQlEwc3NUMEZCUkN4RFFVRkdMRWRCUVdORUxGVkJRVlVzUTBGQlEwTXNUMEZCUkN4RFFVRjRRanRCUVVORU8wRkJRMFk3UVVGRFJqdEJRVU5HT3p0QlFVTkVMR2xDUVVGUFRDeEZRVUZRTzBGQlEwUXNVMEZ1UWtRN1FVRnZRa1E3TzBGQlJVUXNaVUZCVTFNc1RVRkJWQ3hIUVVGclFqdEJRVU5vUWl4WlFVRkpReXhQUVVGUExFZEJRVWRETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMjVDTEVsQlFXSXNRMEZCYTBKRExFZEJRWHBETEVOQlFXUTdRVUZEUVdsRExHVkJRVThzUTBGQlEyaERMRXRCUVZJc1EwRkJZMjFETEU5QlFXUXNSMEZCZDBKc1FpeFpRVUZaTEVOQlFVTnVRaXhKUVVGaUxFTkJRV3RDUlN4TFFVRXhRenM3UVVGRlFTeFpRVUZKVGl4SlFVRkpMRXRCUVVzc1NVRkJWQ3hKUVVGcFFrRXNTVUZCU1N4TFFVRkxaQ3hUUVVFNVFpeEZRVUY1UXp0QlFVTjJReXhqUVVGSmQwUXNWMEZCVnl4SFFVRkhReXhSUVVGUkxFTkJRVU1zU1VGQlJDeERRVUV4UWp0QlFVTkJUQ3hwUWtGQlR5eERRVUZEVFN4WFFVRlNMRU5CUVc5Q1JpeFhRVUZ3UWp0QlFVTkVMRk5CU0VRc1RVRkhUeXhKUVVGSk1VTXNTVUZCU1N4WlFVRlpOa01zU1VGQmNFSXNSVUZCTUVJN1FVRkRMMElzWTBGQlNVTXNWMEZCVnl4SFFVRkhTQ3hSUVVGUkxFTkJRVU16UXl4SlFVRkpMRU5CUVVNclF5eFhRVUZNTEVWQlFVUXNRMEZCTVVJN1FVRkRRVlFzYVVKQlFVOHNRMEZCUTAwc1YwRkJVaXhEUVVGdlFrVXNWMEZCY0VJN1FVRkRSQ3hUUVVoTkxFMUJSMEVzU1VGQlNTeFBRVUZQT1VNc1NVRkJVQ3hMUVVGblFpeFJRVUZ3UWl4RlFVRTRRanRCUVVOdVF5eGpRVUZKWjBRc2IwSkJRVzlDTEVkQlFVZE1MRkZCUVZFc1EwRkJRek5ETEVsQlFVUXNRMEZCYmtNN1FVRkRRWE5ETEdsQ1FVRlBMRU5CUVVOTkxGZEJRVklzUTBGQmIwSkpMRzlDUVVGd1FqdEJRVU5FTEZOQlNFMHNUVUZIUVR0QlFVTk1MR05CUVVsNFF5eExRVUZMTEVkQlFVZDVReXhMUVVGTExFTkJRVU5ETEU5QlFVNHNRMEZCWTJ4RUxFbEJRV1FzU1VGQmMwSXNWMEZCVjBFc1NVRkJTU3hEUVVGREswSXNUVUZCYUVJc1IwRkJlVUlzUjBGQkwwTXNSMEZCY1VRc1VVRkJha1U3UVVGRFFTeGpRVUZKYjBJc2FVSkJRV2xDTEVkQlFVZG9ReXhWUVVGVkxFZEJRVWNzUTBGQmNrTTdRVUZEUVcxQ0xHbENRVUZQTEVOQlFVTk5MRmRCUVZJc1EwRkJiMEpSTEZGQlFWRXNRMEZCUXpWRExFdEJRVVFzUlVGQlVTeEpRVUZTTEVWQlFXTXlReXhwUWtGQlpDeERRVUUxUWp0QlFVTkJZaXhwUWtGQlR5eERRVUZEVFN4WFFVRlNMRU5CUVc5Q1V5eHhRa0ZCY1VJc1EwRkJRM0pFTEVsQlFVUXNSVUZCVHl4RFFVRlFMRU5CUVhwRE8wRkJRMFE3TzBGQlJVUXNaVUZCVDNORExFOUJRVkE3UVVGRFJEczdRVUZGUkN4bFFVRlRaU3h4UWtGQlZDeERRVUVyUW5KRUxFbEJRUzlDTEVWQlFYRkROa0lzUzBGQmNrTXNSVUZCTkVNN1FVRkRNVU1zV1VGQlNYTkNMR2xDUVVGcFFpeEhRVUZIZEVJc1MwRkJTeXhIUVVGSFZpeFZRVUZvUXp0QlFVTkJMRmxCUVVsdFF5eHBRa0ZCYVVJc1IwRkJSM3BDTEV0QlFVc3NSMEZCUnl4RFFVRlNMRWRCUVZsV0xGVkJRWEJETzBGQlEwRXNXVUZCU1c5RExGTkJRVk1zUjBGQlIwTXNiMEpCUVc5Q0xFTkJRVU5NTEdsQ1FVRkVMRU5CUVhCRE96dEJRVU5CTEdGQlFVc3NTVUZCU1hSRExFZEJRVlFzU1VGQlowSmlMRWxCUVdoQ0xFVkJRWE5DTzBGQlEzQkNMR05CUVVscFJDeExRVUZMTEVOQlFVTkRMRTlCUVU0c1EwRkJZMnhFTEVsQlFVa3NRMEZCUTJFc1IwRkJSQ3hEUVVGc1FpeERRVUZLTEVWQlFUaENPMEZCUXpWQ01FTXNjVUpCUVZNc1EwRkJRMWdzVjBGQlZpeERRVUZ6UWxFc1VVRkJVU3hEUVVGRExGZEJRVmR3UkN4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlNpeERRVUZWYTBJc1RVRkJja0lzUjBGQk9FSXNSMEZCTDBJc1JVRkJiME5zUWl4SFFVRndReXhGUVVGNVEzbERMR2xDUVVGNlF5eERRVUU1UWp0QlFVTkJReXh4UWtGQlV5eERRVUZEV0N4WFFVRldMRU5CUVhOQ1V5eHhRa0ZCY1VJc1EwRkJRM0pFTEVsQlFVa3NRMEZCUTJFc1IwRkJSQ3hEUVVGTUxFVkJRVmxuUWl4TFFVRkxMRWRCUVVjc1EwRkJjRUlzUTBGQk0wTTdRVUZEUkN4WFFVaEVMRTFCUjA4c1NVRkJTVGRDTEVsQlFVa3NRMEZCUTJFc1IwRkJSQ3hEUVVGS0xFdEJRV01zU1VGQlpDeEpRVUZ6UW1Jc1NVRkJTU3hEUVVGRFlTeEhRVUZFTEVOQlFVb3NTMEZCWXpOQ0xGTkJRWGhETEVWQlFXMUVPMEZCUTNoRWNVVXNjVUpCUVZNc1EwRkJRMWdzVjBGQlZpeERRVUZ6UW1Fc1pVRkJaU3hEUVVGRE5VTXNSMEZCUkN4RlFVRk5MRWxCUVU0c1EwRkJja003UVVGRFJDeFhRVVpOTEUxQlJVRXNTVUZCU1dJc1NVRkJTU3hEUVVGRFlTeEhRVUZFTEVOQlFVb3NXVUZCY1VKblF5eEpRVUY2UWl4RlFVRXJRanRCUVVOd1ExVXNjVUpCUVZNc1EwRkJRMWdzVjBGQlZpeERRVUZ6UW1Fc1pVRkJaU3hEUVVGRE5VTXNSMEZCUkN4RlFVRk5ZaXhKUVVGSkxFTkJRVU5oTEVkQlFVUXNRMEZCU2l4RFFVRlZhME1zVjBGQlZpeEZRVUZPTEVOQlFYSkRPMEZCUTBRc1YwRkdUU3hOUVVWQkxFbEJRVWtzVDBGQlR5OURMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZZTEV0QlFYRkNMRkZCUVhwQ0xFVkJRVzFETzBGQlEzaERNRU1zY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFsRXNVVUZCVVN4RFFVRkRMRkZCUVVRc1JVRkJWM1pETEVkQlFWZ3NSVUZCWjBKNVF5eHBRa0ZCYUVJc1EwRkJPVUk3UVVGRFFVTXNjVUpCUVZNc1EwRkJRMWdzVjBGQlZpeERRVUZ6UWxNc2NVSkJRWEZDTEVOQlFVTnlSQ3hKUVVGSkxFTkJRVU5oTEVkQlFVUXNRMEZCVEN4RlFVRlpaMElzUzBGQlN5eEhRVUZITEVOQlFYQkNMRU5CUVRORE8wRkJRMFFzVjBGSVRTeE5RVWRCTzBGQlEwd3dRaXh4UWtGQlV5eERRVUZEV0N4WFFVRldMRU5CUVhOQ1lTeGxRVUZsTEVOQlFVTTFReXhIUVVGRUxFVkJRVTFpTEVsQlFVa3NRMEZCUTJFc1IwRkJSQ3hEUVVGV0xFTkJRWEpETzBGQlEwUTdRVUZEUmpzN1FVRkRSQ3haUVVGSkxFOUJRVTk2UWl4TlFVRk5MRU5CUVVOelJTeHhRa0ZCWkN4TFFVRjNReXhWUVVFMVF5eEZRVUYzUkR0QlFVTjBSSFJGTEdkQ1FVRk5MRU5CUVVOelJTeHhRa0ZCVUN4RFFVRTJRakZFTEVsQlFUZENMRVZCUVcxRE1rUXNUMEZCYmtNc1EwRkJNa01zVlVGQlUwTXNUVUZCVkN4RlFVRnBRanRCUVVNeFJFd3NjVUpCUVZNc1EwRkJRMWdzVjBGQlZpeERRVUZ6UW1Fc1pVRkJaU3hEUVVGRFJ5eE5RVUZOTEVOQlFVTkRMRkZCUVZBc1JVRkJSQ3hGUVVGdlFqZEVMRWxCUVVrc1EwRkJRelJFTEUxQlFVUXNRMEZCZUVJc1EwRkJja003UVVGRFJDeFhRVVpFTzBGQlIwUTdPMEZCUlVRc1pVRkJUMHdzVTBGQlVEdEJRVU5FT3p0QlFVVkVMR1ZCUVZOSUxGRkJRVlFzUTBGQmEwSXpReXhUUVVGc1FpeEZRVUUyUW5GRUxGZEJRVGRDTEVWQlFUQkRReXhoUVVFeFF5eEZRVUY1UkR0QlFVTjJSQ3haUVVGSlF5eGxRVUZsTEVkQlFVZEVMR0ZCUVhSQ08wRkJRMEVzV1VGQlNVVXNaMEpCUVdkQ0xFZEJRVWN4UWl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU5vUWl4alFVRmlMRU5CUVRSQ1JpeEhRVUZ1UkN4RFFVRjJRanRCUVVOQk5FUXNkMEpCUVdkQ0xFTkJRVU16UkN4TFFVRnFRaXhEUVVGMVFtMURMRTlCUVhaQ0xFZEJRV2xEYkVJc1dVRkJXU3hEUVVGRGFFSXNZMEZCWWl4RFFVRTBRa1FzUzBGQk4wUTdRVUZEUVRKRUxIZENRVUZuUWl4RFFVRkRReXhaUVVGcVFpeERRVUU0UWl4WFFVRTVRaXhGUVVFeVF5eG5Ra0ZCTTBNN1FVRkRRU3haUVVGSlF5eFhRVUZYTEVkQlFVYzFRaXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVKcVFpeFpRVUZaTEVOQlFVTmtMRk5CUVdJc1EwRkJkVUpLTEVkQlFUbERMRU5CUVd4Q08wRkJRMEVzV1VGQlNTdEVMRmxCUVZrc1IwRkJSemRDTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMllzUzBGQllpeERRVUZ0UWtnc1IwRkJNVU1zUTBGQmJrSTdRVUZEUVN0RUxHOUNRVUZaTEVOQlFVTTVSQ3hMUVVGaUxFTkJRVzFDYlVNc1QwRkJia0lzUjBGQk5rSnNRaXhaUVVGWkxFTkJRVU5tTEV0QlFXSXNRMEZCYlVKR0xFdEJRV2hFTzBGQlEwRTJSQ3h0UWtGQlZ5eERRVUZETjBRc1MwRkJXaXhEUVVGclFtMURMRTlCUVd4Q0xFZEJRVFJDYkVJc1dVRkJXU3hEUVVGRFpDeFRRVUZpTEVOQlFYVkNTQ3hMUVVGdVJEdEJRVVZCT0VRc2IwSkJRVmtzUTBGQlEzaENMRmRCUVdJc1EwRkJlVUo1UWl4aFFVRmhMRU5CUVVOT0xHRkJRVVFzUTBGQmRFTTdPMEZCUTBFc1dVRkJTVVFzVjBGQlNpeEZRVUZwUWp0QlFVTm1TeXh4UWtGQlZ5eERRVUZEZGtJc1YwRkJXaXhEUVVGM1FqQkNMRTFCUVUwc1EwRkJRMUlzVjBGQlJDeERRVUU1UWp0QlFVTkVPenRCUVVORVN5eHRRa0ZCVnl4RFFVRkRka0lzVjBGQldpeERRVUYzUWt3c1VVRkJVU3hEUVVGRFowTXNZMEZCVkN4RFFVRjNRamxFTEZOQlFYaENMRU5CUVhoQ08wRkJRMEV5UkN4dlFrRkJXU3hEUVVGRGVFSXNWMEZCWWl4RFFVRjVRblZDTEZkQlFYcENPenRCUVVWQlF5eHZRa0ZCV1N4RFFVRkRTU3hQUVVGaUxFZEJRWFZDTEZsQlFWazdRVUZEYWtNc1kwRkJTVGxFTEZWQlFWVXNSMEZCUnpCRUxGbEJRVmtzUTBGQlEwc3NWVUZCT1VJN1FVRkRRU3hqUVVGSlF5eGpRVUZqTEVkQlFVZE9MRmxCUVZrc1EwRkJRMDhzVlVGQllpeERRVUYzUWtNc1YwRkJOME03UVVGRFFVWXNkMEpCUVdNc1EwRkJRM0JGTEV0QlFXWXNRMEZCY1VKMVJTeFBRVUZ5UWl4SFFVRXJRbUlzWlVGQlpTeEhRVUZITEU5QlFVZ3NSMEZCWVN4TlFVRXpSRHRCUVVOQmRFUXNiMEpCUVZVc1EwRkJRMG9zUzBGQldDeERRVUZwUW5kRkxGTkJRV3BDTEVkQlFUWkNaQ3hsUVVGbExFZEJRVWNzWlVGQlNDeEhRVUZ4UWl4alFVRnFSVHRCUVVOQlFTeDVRa0ZCWlN4SFFVRkhMRU5CUVVOQkxHVkJRVzVDTzBGQlEwUXNVMEZPUkRzN1FVRlJRVU1zZDBKQlFXZENMRU5CUVVOeVFpeFhRVUZxUWl4RFFVRTJRbmRDTEZsQlFUZENPMEZCUTBFc1pVRkJUMGdzWjBKQlFWQTdRVUZEUkRzN1FVRkZSQ3hsUVVGVFNTeGhRVUZVTEVOQlFYVkNUaXhoUVVGMlFpeEZRVUZ6UXp0QlFVTndReXhaUVVGSlowSXNZVUZCWVN4SFFVRkhlRU1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1N4RFFVRkRZaXhWUVVGaUxFTkJRWGRDVEN4SFFVRXZReXhEUVVGd1FqdEJRVU5CTUVVc2NVSkJRV0VzUTBGQlEzcEZMRXRCUVdRc1EwRkJiMEp0UXl4UFFVRndRaXhIUVVFNFFteENMRmxCUVZrc1EwRkJRMklzVlVGQllpeERRVUYzUWtvc1MwRkJkRVE3UVVGRFFYbEZMSEZDUVVGaExFTkJRVU42UlN4TFFVRmtMRU5CUVc5Q2QwVXNVMEZCY0VJc1IwRkJaME5tTEdGQlFXRXNSMEZCUnl4alFVRklMRWRCUVc5Q0xHVkJRV3BGTzBGQlEwRXNaVUZCVDJkQ0xHRkJRVkE3UVVGRFJEczdRVUZGUkN4bFFVRlRka0lzYjBKQlFWUXNRMEZCT0VKM1FpeFJRVUU1UWl4RlFVRjNRenRCUVVOMFF5eFpRVUZKWml4blFrRkJaMElzUjBGQlJ6RkNMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlExb3NhVUpCUVdJc1EwRkJLMEpPTEVkQlFYUkVMRU5CUVhaQ08wRkJRMEUwUkN4M1FrRkJaMElzUTBGQlEwTXNXVUZCYWtJc1EwRkJPRUlzVjBGQk9VSXNSVUZCTWtNc2JVSkJRVE5ETzBGQlEwRkVMSGRDUVVGblFpeERRVUZETTBRc1MwRkJha0lzUTBGQmRVSnRReXhQUVVGMlFpeEhRVUZwUTJ4Q0xGbEJRVmtzUTBGQlExb3NhVUpCUVdJc1EwRkJLMEpNTEV0QlFXaEZPMEZCUTBFeVJDeDNRa0ZCWjBJc1EwRkJRek5FTEV0QlFXcENMRU5CUVhWQ2RVVXNUMEZCZGtJc1IwRkJhME5ITEZGQlFWRXNSMEZCUnl4TlFVRklMRWRCUVZrc1QwRkJkRVE3UVVGRFFTeGxRVUZQWml4blFrRkJVRHRCUVVORU96dEJRVVZFTEdWQlFWTlNMR1ZCUVZRc1EwRkJlVUkxUXl4SFFVRjZRaXhGUVVFNFFtOUZMRXRCUVRsQ0xFVkJRWEZETzBGQlEyNURMRmxCUVVsRExGZEJRVmNzUjBGQlJ6TkRMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlExZ3NXVUZCWWl4RFFVRXdRbEFzUjBGQmFrUXNRMEZCYkVJN1FVRkRRVFpGTEcxQ1FVRlhMRU5CUVVNMVJTeExRVUZhTEVOQlFXdENiVU1zVDBGQmJFSXNSMEZCTkVKc1FpeFpRVUZaTEVOQlFVTllMRmxCUVdJc1EwRkJNRUpPTEV0QlFYUkVPMEZCUTBFMFJTeHRRa0ZCVnl4RFFVRkRkRU1zVjBGQldpeERRVUYzUWpCQ0xFMUJRVTBzUTBGQlEzcEVMRWRCUVVRc1EwRkJPVUk3UVVGRFFYRkZMRzFDUVVGWExFTkJRVU4wUXl4WFFVRmFMRU5CUVhkQ1JDeFJRVUZSTEVOQlFVTnpReXhMUVVGRUxFTkJRV2hETzBGQlEwRXNaVUZCVDBNc1YwRkJVRHRCUVVORU96dEJRVVZFTEdWQlFWTmFMRTFCUVZRc1EwRkJaMEpoTEVsQlFXaENMRVZCUVhOQ08wRkJRM0JDTEZsQlFVbERMRlZCUVZVc1IwRkJSemRETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMVlzUjBGQllpeERRVUZwUWxJc1IwRkJlRU1zUTBGQmFrSTdRVUZEUVN0RkxHdENRVUZWTEVOQlFVTTVSU3hMUVVGWUxFTkJRV2xDYlVNc1QwRkJha0lzUjBGQk1rSnNRaXhaUVVGWkxFTkJRVU5XTEVkQlFXSXNRMEZCYVVKUUxFdEJRVFZETzBGQlEwRTRSU3hyUWtGQlZTeERRVUZEZUVNc1YwRkJXQ3hEUVVGMVFrd3NVVUZCVVN4RFFVRkRaME1zWTBGQlZDeERRVUYzUWxrc1NVRkJTU3hIUVVGSExFbEJRUzlDTEVOQlFYWkNPMEZCUTBFc1pVRkJUME1zVlVGQlVEdEJRVU5FT3p0QlFVVkVMR1ZCUVZONlF5eFJRVUZVTEVOQlFXdENjME1zUzBGQmJFSXNSVUZCZVVJN1FVRkRka0lzV1VGQlNVa3NXVUZCU2p0QlFVTkJMRmxCUVVsRExGRkJRVkVzUjBGQlJ5eFJRVUZtT3p0QlFVTkJMR2RDUVVGUkxFOUJRVTlNTEV0QlFXWTdRVUZEUlN4bFFVRkxMRkZCUVV3N1FVRkRSVWtzZDBKQlFWa3NSMEZCUnpsRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTFRc1YwRkJZaXhEUVVGNVFsUXNSMEZCYUVRc1EwRkJaanRCUVVOQlowWXNkMEpCUVZrc1EwRkJReTlGTEV0QlFXSXNRMEZCYlVKdFF5eFBRVUZ1UWl4SFFVRTJRbXhDTEZsQlFWa3NRMEZCUTFRc1YwRkJZaXhEUVVGNVFsSXNTMEZCZEVRN1FVRkRRU3RGTEhkQ1FVRlpMRU5CUVVONlF5eFhRVUZpTEVOQlFYbENUQ3hSUVVGUkxFTkJRVU5uUXl4alFVRlVMRU5CUVhkQ1ZTeExRVUZMTEVOQlFVTndRaXhSUVVGT0xFVkJRWGhDTEVOQlFYcENPMEZCUTBFN08wRkJRMFlzWlVGQlN5eFJRVUZNTzBGQlEwVjNRaXgzUWtGQldTeEhRVUZIT1VNc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNha0lzV1VGQldTeERRVUZEVWl4WFFVRmlMRU5CUVhsQ1ZpeEhRVUZvUkN4RFFVRm1PMEZCUTBGblJpeDNRa0ZCV1N4RFFVRkRMMFVzUzBGQllpeERRVUZ0UW0xRExFOUJRVzVDTEVkQlFUWkNiRUlzV1VGQldTeERRVUZEVWl4WFFVRmlMRU5CUVhsQ1ZDeExRVUYwUkR0QlFVTkJLMFVzZDBKQlFWa3NRMEZCUTNwRExGZEJRV0lzUTBGQmVVSk1MRkZCUVZFc1EwRkJRMmRETEdOQlFWUXNRMEZCZDBJc1RVRkJUVlVzUzBGQlRpeEhRVUZqTEVkQlFYUkRMRU5CUVhwQ08wRkJRMEU3TzBGQlEwWXNaVUZCU3l4UlFVRk1PMEZCUTBWSkxIZENRVUZaTEVkQlFVYzVReXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVKcVFpeFpRVUZaTEVOQlFVTlFMRmRCUVdJc1EwRkJlVUpZTEVkQlFXaEVMRU5CUVdZN1FVRkRRV2RHTEhkQ1FVRlpMRU5CUVVNdlJTeExRVUZpTEVOQlFXMUNiVU1zVDBGQmJrSXNSMEZCTmtKc1FpeFpRVUZaTEVOQlFVTlFMRmRCUVdJc1EwRkJlVUpXTEV0QlFYUkVPMEZCUTBFclJTeDNRa0ZCV1N4RFFVRkRla01zVjBGQllpeERRVUY1UWt3c1VVRkJVU3hEUVVGRFowTXNZMEZCVkN4RFFVRjNRbFVzUzBGQmVFSXNRMEZCZWtJN1FVRkRRVHM3UVVGRFJpeGxRVUZMTEZOQlFVdzdRVUZEUlVrc2QwSkJRVmtzUjBGQlJ6bERMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlEwNHNXVUZCWWl4RFFVRXdRbG9zUjBGQmFrUXNRMEZCWmp0QlFVTkJaMFlzZDBKQlFWa3NRMEZCUXk5RkxFdEJRV0lzUTBGQmJVSnRReXhQUVVGdVFpeEhRVUUyUW14Q0xGbEJRVmtzUTBGQlEwNHNXVUZCWWl4RFFVRXdRbGdzUzBGQmRrUTdRVUZEUVN0RkxIZENRVUZaTEVOQlFVTjZReXhYUVVGaUxFTkJRWGxDVEN4UlFVRlJMRU5CUVVOblF5eGpRVUZVTEVOQlFYZENWU3hMUVVGNFFpeERRVUY2UWp0QlFVTkJPenRCUVVOR0xHVkJRVXRMTEZGQlFVdzdRVUZEUlVRc2QwSkJRVmtzUjBGQlJ6bERMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlEwd3NVMEZCWWl4RFFVRjFRbUlzUjBGQk9VTXNRMEZCWmp0QlFVTkJaMFlzZDBKQlFWa3NRMEZCUXk5RkxFdEJRV0lzUTBGQmJVSnRReXhQUVVGdVFpeEhRVUUyUW14Q0xGbEJRVmtzUTBGQlEwd3NVMEZCWWl4RFFVRjFRbG9zUzBGQmNFUTdRVUZEUVN0RkxIZENRVUZaTEVOQlFVTjZReXhYUVVGaUxFTkJRWGxDVEN4UlFVRlJMRU5CUVVOblF5eGpRVUZVTEVOQlFYZENWU3hMUVVGNFFpeERRVUY2UWp0QlFVTkJPMEZCZWtKS096dEJRVEpDUVN4bFFVRlBTU3haUVVGUU8wRkJRMFE3TzBGQlJVUXNaVUZCVXpkRUxHbENRVUZVTEVOQlFUSkNLMFFzVVVGQk0wSXNSVUZCY1VORExGTkJRWEpETEVWQlFXZEVPMEZCUXpsRExGbEJRVWxETEUxQlFVMHNSMEZCUnl4RlFVRmlPenRCUVVOQkxHRkJRVXNzU1VGQlNUVkZMRWRCUVZRc1NVRkJaMEl3UlN4UlFVRm9RaXhGUVVFd1FqdEJRVU40UWtVc1owSkJRVTBzUTBGQlF6VkZMRWRCUVVRc1EwRkJUaXhIUVVGamVrSXNUVUZCVFN4RFFVRkRjVU1zVFVGQlVDeERRVUZqTEVWQlFXUXNSVUZCYTBJNFJDeFJRVUZSTEVOQlFVTXhSU3hIUVVGRUxFTkJRVEZDTEVWQlFXbERNa1VzVTBGQlV5eERRVUZETTBVc1IwRkJSQ3hEUVVFeFF5eERRVUZrTzBGQlEwUTdPMEZCUTBRc1pVRkJUelJGTEUxQlFWQTdRVUZEUkRzN1FVRkZSQ3hoUVVGUGNFUXNUVUZCVFN4RlFVRmlPMEZCUTBnN08wRkJNMDEzUWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTBVM1FpeFJRVUZOY1VRc1QwRkJUaXhUUVVGelFrTXNiMEpCUVZORExFOUJRVlFzUTBGQmFVSndTQ3huUWtGQmFrSXNSVUZCTUVJN1FVRkJReXhaUVVGUExFTkJRVU54U0N4elFrRkJSQ3hEUVVGU08wRkJRWGRDTEZkQlFVMHNRMEZCUTBNc2RVSkJRVVE3UVVGQk9VSXNSMEZCTVVJc1EwRkJkRUlzUTBGQkswWTdRVUZETTBaeVNDeGxRVUZYTEVkQlFVVTdRVUZEVkR0QlFVTklPenRCUVVnd1JqczdRVUZMTDBZc1VVRkJUVzlDTEUxQlFVMHNSMEZCUnl4SlFVRkpOa1lzVDBGQlNpeEZRVUZtTzJsQ1FVTmxOMFlzVFRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlExWm1MRkZCUVUxblJ5eGhRVUZoTEVkQlFVbEZMRkZCUVVRc1NVRkJZU3hqUVVGalFTeFJRVUZrTEVOQlFYTkNPMEZCUTNKRVF5eFhRVUZQTEVOQlFVTkRMRTlCUVVRc1JVRkJVeXhEUVVOYU8wRkJRMGc3TzBGQlEwUnlTQ3hQUVVGSExFTkJRVU56U0N4UFFVRkVMRVZCUVZNN1FVRkRVaXhWUVVGSExFdEJRVXRzU0N4TFFVRk1MRWxCUVdNc1MwRkJTMDRzWTBGQlRDeERRVUZ2UWl4TFFVRndRaXhEUVVGcVFpeEZRVUUwUXp0QlFVTjRReXhsUVVGUExFbEJRVkE3UVVGRFNEczdRVUZEUkdkQ0xHRkJRVThzUTBGQlEyUXNSMEZCVWl4RFFVRlpjMGdzVDBGQldqdEJRVU5JT3p0QlFVTkVka2NzV1VGQlVTeERRVUZEZDBjc1kwRkJSQ3hGUVVGblFpeERRVU53UWp0QlFVTklPenRCUVVORWVFZ3NVMEZCU3l4RFFVRkRkVWdzVDBGQlJDeEZRVUZUTzBGQlExWXNWVUZCUnl4TFFVRkxiRWdzUzBGQlRDeEpRVUZqTEV0QlFVdE9MR05CUVV3c1EwRkJiMElzVDBGQmNFSXNRMEZCYWtJc1JVRkJPRU03UVVGRE1VTXNaVUZCVHl4SlFVRlFPMEZCUTBnN08wRkJRMFJuUWl4aFFVRlBMRU5CUVVObUxFdEJRVklzUTBGQlkzVklMRTlCUVdRN1FVRkRTRHM3UVVGc1FtOUVMRWRCUVhwRU96dHBRa0Z4UW1WTUxHRTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVOd1FtWXNVVUZCVFVNc1lVRkJZU3hIUVVGSlF5eFJRVUZFTEVsQlFXRXNZMEZCWTBFc1VVRkJaQ3hEUVVGelFqdEJRVU55UkVNc1YwRkJUeXhEUVVGRFNTeFZRVUZWTEVkQlFVTXNTVUZCV2l4RlFVRnBRanRCUVVOd1FrRXNaMEpCUVZVc1IwRkJSMEVzVlVGQlZTeEpRVUZGTjBRc1VVRkJVU3hEUVVGRE9FUXNTVUZCYkVNN1FVRkRRU3hWUVVGSlF5eEpRVUZKTEVkQlFVY3ZSQ3hSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVJc1NVRkJka0lzUTBGQldEdEJRVU5CT0VRc1ZVRkJTU3hEUVVGRGFFY3NTMEZCVEN4RFFVRlhiVU1zVDBGQldDeEhRVUZ4UWl4M1FrRkJja0k3UVVGRFFUSkVMR2RDUVVGVkxFTkJRVU40UkN4WFFVRllMRU5CUVhWQ01FUXNTVUZCZGtJN1FVRkRRU3hYUVVGTFF5eFBRVUZNTEVkQlFXVklMRlZCUVdZN1FVRkRRU3hYUVVGTFNTeFJRVUZNTEVkQlFXZENTaXhWUVVGVkxFTkJRVU5MTEc5Q1FVRllMRU5CUVdkRExFbEJRV2hETEVWQlFYTkRMRU5CUVhSRExFTkJRV2hDTzBGQlEwZzdPMEZCUTBSRExHZENRVUZaTEVOQlFVTndSU3hQUVVGUExFZEJRVU1zU1VGQlZDeEZRVUZqTzBGQlEzUkNRU3hoUVVGUExFZEJRVWRCTEU5QlFVOHNTVUZCU1N4TFFVRkxhVVVzVDBGQk1VSTdRVUZEUVdwRkxHRkJRVThzUTBGQlEzRkZMRk5CUVZJc1IwRkJiMEp5UlN4UFFVRlBMRU5CUVVOelJTeFpRVUZTTEVkQlFYVkNkRVVzVDBGQlR5eERRVUZEZFVVc1dVRkJia1E3UVVGRFNEczdRVUZEUkd4SUxGbEJRVkVzUTBGQlEzZEhMR05CUVVRc1JVRkJaMEk3UVVGRGNFSTdRVUZEUVN4VlFVRkpWeXhQUVVGUExFZEJRVWNzUzBGQlMwNHNVVUZCVEN4RFFVRmpReXh2UWtGQlpDeERRVUZ0UXl4SlFVRnVReXhEUVVGa08wRkJRMEVzVlVGQlNVZ3NTVUZCU1N4SFFVRkhVU3hQUVVGUExFTkJRVU5CTEU5QlFVOHNRMEZCUXk5RkxFMUJRVklzUjBGQlpTeERRVUZvUWl4RFFVRnNRanM3UVVGRFFTeFZRVUZITEVOQlFVTjFSU3hKUVVGRUxFbEJRVk5CTEVsQlFVa3NRMEZCUTFNc1UwRkJUQ3hEUVVGbFF5eFJRVUZtTEVOQlFYZENMR2xDUVVGNFFpeERRVUZhTEVWQlFYVkVPMEZCUTI1RU8wRkJRMEZXTEZsQlFVa3NSMEZCUnk5RUxGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRaXhKUVVGMlFpeERRVUZRTzBGQlEwRTRSQ3haUVVGSkxFTkJRVU5UTEZOQlFVd3NRMEZCWlVVc1IwRkJaaXhEUVVGdFFpeHBRa0ZCYmtJN1FVRkRRU3hoUVVGTFZDeFJRVUZNTEVOQlFXTTFSQ3hYUVVGa0xFTkJRVEJDTUVRc1NVRkJNVUk3UVVGRFNEczdRVUZEUkN4VlFVRkpXU3hSUVVGUkxFZEJRVWR3U0N4dlFrRkJVME1zVjBGQlZDeERRVUZ4UW05SExHTkJRWEpDTEVOQlFXWTdPMEZCUTBFc1ZVRkJTV2RDTEVsQlFVa3NSMEZCUnl4SlFVRkpkRVVzU1VGQlNpeEZRVUZZTzBGQlEwRjVSQ3hWUVVGSkxFTkJRVU5qTEZOQlFVd3NSMEZCYTBJc1owUkJRU3REUkN4SlFVRkxMRTFCUVhSRk8wRkJRMEZpTEZWQlFVa3NRMEZCUXpGRUxGZEJRVXdzUTBGQmFVSnpSU3hSUVVGcVFqdEJRVU5CTEZkQlFVdFNMRmxCUVV3N1FVRkRTRHM3UVVGRFJEbElMRTlCUVVjc1EwRkJRM05JTEU5QlFVUXNSVUZCVXp0QlFVTlNMRlZCUVVjc1MwRkJTMnhJTEV0QlFVd3NTVUZCWXl4TFFVRkxUaXhqUVVGTUxFTkJRVzlDTEV0QlFYQkNMRU5CUVdwQ0xFVkJRVFJETzBGQlEzaERMR1ZCUVU4c1NVRkJVRHRCUVVOSU96dEJRVU5FTEZWQlFVY3NRMEZCUXl4TFFVRkxPRWdzVVVGQlRpeEpRVUZyUWl4RFFVRkRMRXRCUVV0QkxGRkJRVXdzUTBGQll6VkVMRmRCUVhCRExFVkJRV2RFTzBGQlF6VkRMR0ZCUVV0dlJDeFBRVUZNTzBGQlEwZzdPMEZCUTBRc1ZVRkJTVTBzU1VGQlNTeEhRVUZITDBRc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNMRWxCUVhaQ0xFTkJRVmc3UVVGRFFUaEVMRlZCUVVrc1EwRkJRMmhITEV0QlFVd3NRMEZCVjIxRExFOUJRVmdzUjBGQmNVSXNiVU5CUVhKQ096dEJRVU5CTEZWQlFVbDVSU3hSUVVGUkxFZEJRVWR3U0N4dlFrRkJVME1zVjBGQlZDeERRVUZ4UW0xSExFOUJRWEpDTEVOQlFXWTdPMEZCUTBFc1ZVRkJTV2xDTEVsQlFVa3NSMEZCUnl4SlFVRkpkRVVzU1VGQlNpeEZRVUZZTzBGQlEwRjVSQ3hWUVVGSkxFTkJRVU5qTEZOQlFVd3NSMEZCYTBJc1owUkJRU3REUkN4SlFVRkxMRTFCUVhSRk8wRkJRMEZpTEZWQlFVa3NRMEZCUXpGRUxGZEJRVXdzUTBGQmFVSnpSU3hSUVVGcVFqdEJRVU5CTEZkQlFVdFdMRkZCUVV3c1EwRkJZelZFTEZkQlFXUXNRMEZCTUVJd1JDeEpRVUV4UWp0QlFVTkJMRmRCUVV0SkxGbEJRVXc3UVVGRFFXaElMR0ZCUVU4c1EwRkJRMlFzUjBGQlVpeERRVUZaYzBnc1QwRkJXanRCUVVOSU96dEJRVVZFZGtnc1UwRkJTeXhEUVVGRGRVZ3NUMEZCUkN4RlFVRlRPMEZCUTFZc1ZVRkJSeXhMUVVGTGJFZ3NTMEZCVEN4SlFVRmpMRXRCUVV0T0xHTkJRVXdzUTBGQmIwSXNUMEZCY0VJc1EwRkJha0lzUlVGQk9FTTdRVUZETVVNc1pVRkJUeXhKUVVGUU8wRkJRMGdzVDBGSVV5eERRVWxXT3pzN1FVRkRRV2RDTEdGQlFVOHNRMEZCUTJZc1MwRkJVaXhEUVVGamRVZ3NUMEZCWkR0QlFVTklPenRCUVhKRWIwUXNSMEZCZWtRN08ybENRWGRFWlVvc1lUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEzcEVaaXc0UkNJc0ltWnBiR1VpT2lKQVkyRjFjMkZzVG1WMEwyeHZaeTUzWldJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0hKbGNYVnBjbVVvWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENJcEtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0Y0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lsMHNJR1poWTNSdmNua3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJsZUhCdmNuUnpXMXdpUUdOaGRYTmhiRTVsZEM5c2IyZGNJbDBnUFNCbVlXTjBiM0o1S0hKbGNYVnBjbVVvWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENJcEtUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0pBWTJGMWMyRnNUbVYwTDJ4dloxd2lYU0E5SUdaaFkzUnZjbmtvY205dmRGdGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJbDBwTzF4dWZTa29kR2hwY3l3Z1puVnVZM1JwYjI0b1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgzVjBhV3h6WDE4cElIdGNibkpsZEhWeWJpQWlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNGlMQ0ptZFc1amRHbHZiaUJmYVc1MFpYSnZjRkpsY1hWcGNtVkVaV1poZFd4MEtHOWlhaWtnZTF4dUlDQnlaWFIxY200Z2IySnFJQ1ltSUc5aWFpNWZYMlZ6VFc5a2RXeGxJRDhnYjJKcUlEb2dlMXh1SUNBZ0lHUmxabUYxYkhRNklHOWlhbHh1SUNCOU8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUY5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUTdJaXdpWlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FtRnpaVXh2WjN0Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lncGUxeHVJQ0FnSUNBZ0lDQjBhR2x6TGtGalkyVndkR1ZrVEdWMlpXeHpJRDBnZTJSbFluVm5PaUF3TENCc2IyYzZNU3dnZDJGeWJtbHVaem95TENCbGNuSnZjam9nTTMwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y2tGalkyVndkR1ZrVEdWMlpXeHpJRDBnZXpBNkoyUmxZblZuSnl3Z01Ub2dKMnh2Wnljc0lESTZJQ2QzWVhKdWFXNW5KeXdnTXpvZ0oyVnljbTl5SjMwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YkdWMlpXd2dQU0IwYUdsekxrRmpZMlZ3ZEdWa1RHVjJaV3h6V3lka1pXSjFaeWRkTzF4dUlDQWdJSDFjYmlBZ0lDQnpaWFFnVEdWMlpXd29iR1YyWld3cGUxeHVJQ0FnSUNBZ0lDQnBaaWgwYUdsekxrRmpZMlZ3ZEdWa1RHVjJaV3h6VzJ4bGRtVnNYU0U5UFhWdVpHVm1hVzVsWkNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxteGxkbVZzSUQwZ2RHaHBjeTVCWTJObGNIUmxaRXhsZG1Wc2MxdHNaWFpsYkYwN0lDQWdJRnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdWc2MyVjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpaGdKSHRzWlhabGJIMGdiWFZ6ZENCaVpTQnZibVVnYjJZZ0pIdFBZbXBsWTNRdWEyVjVjeWgwYUdsekxrRmpZMlZ3ZEdWa1RHVjJaV3h6S1gxZ0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCblpYUWdUR1YyWld3b0tYdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Y2tGalkyVndkR1ZrVEdWMlpXeHpXM1JvYVhNdWJHVjJaV3hkTzF4dUlDQWdJSDFjYm4waUxDSmpiMjV6ZENCTWIyZG5aWEpOYVhocGJuTWdQU0FvUW1GelpXUkRiR0Z6Y3lrOVBpQmpiR0Z6Y3lCbGVIUmxibVJ6SUVKaGMyVmtRMnhoYzNON1hHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb0xpNHVZWEpuY3lsN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0M0dUxtRnlaM01wTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WjJkbGNpQTlJR052Ym5OdmJHVTdYRzRnSUNBZ2ZWeHVJQ0FnSUhCeWIyZHlaWE56S0hCeWIyZHlaWE56VFdWemMyRm5aU2w3WEc0Z0lDQWdJQ0FnSUdsbUtIUm9hWE11Ykc5bloyVnlMbkJ5YjJkeVpYTnpLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Ykc5bloyVnlMbkJ5YjJkeVpYTnpLSEJ5YjJkeVpYTnpUV1Z6YzJGblpTazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2MyVjBJRXh2WjJkbGNpaHNiMmRuWlhJcGUxeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dloyZGxjaUE5SUd4dloyZGxjanRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnWjJWMElFeHZaMmRsY2lncGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVzYjJkblpYSTdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVEc5bloyVnlUV2w0YVc1ek95SXNJaTh2SUc5eWFXZHBiaUJqYjJSbElHWnliMjBnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJ4MVkzbG5hV3hpWlhKMEwycHpiMjR0WkdsemNHeGhlUzlpYkc5aUwyMWhjM1JsY2k5cWMyOXVMV1JwYzNCc1lYa3Vhbk5jYmk4dklFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE55Qk1kV041SUVkcGJHSmxjblJjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFcHpiMjVXYVdWM2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ2ZWeHVJQ0FnSUhOMFlYUnBZeUJLVTA5T1JHbHpjR3hoZVNocWMyOXVMQ0J2Y0dWdVRHVjJaV3h6UVhKbkxDQnpkSGxzWlU5d2RHbHZibk5CY21jcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUVSRlJrRlZURlJmVTFSWlRFVmZUMUJVU1U5T1V5QTlJSHRjYmlBZ0lDQWdJQ0FnSUNCeWIyOTBPaUI3SUhSaFp6b2dKM0J5WlNjc0lITjBlV3hsT2lBbmNHRmtaR2x1WnpvZ05YQjRPeUJtYjI1MExYTnBlbVU2SURGeVpXMDdKeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lIUnBkR3hsUTI5dWRHRnBibVZ5T2lCN0lIUmhaem9nSjJScGRpY3NJSE4wZVd4bE9pQW5iV0Z5WjJsdUxXSnZkSFJ2YlRvZ00zQjRPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQjBhWFJzWlRvZ2V5QjBZV2M2SUNkemNHRnVKeXdnYzNSNWJHVTZJQ2RqZFhKemIzSTZJSEJ2YVc1MFpYSTdKeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lIUnBkR3hsVkdWNGREb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNjbklIMHNYRzRnSUNBZ0lDQWdJQ0FnYjNCbGJrSjFkSFJ2YmpvZ2V5QmNiaUFnSUNBZ0lDQWdJQ0FnSUhSaFp6b2dKM053WVc0bkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVTZJQ2RrYVhOd2JHRjVPaUJwYm14cGJtVXRZbXh2WTJzN0lHMWhjbWRwYmpvZ01IQjRJRGR3ZUNBd2NIZ2dNbkI0T3lCaWIzSmtaWEl0ZEc5d09pQTFjSGdnYzI5c2FXUWdkSEpoYm5Od1lYSmxiblE3SUNkY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0t5QW5ZbTl5WkdWeUxXSnZkSFJ2YlRvZ05YQjRJSE52Ykdsa0lIUnlZVzV6Y0dGeVpXNTBPeUJpYjNKa1pYSXRiR1ZtZERvZ05YQjRJSE52Ykdsa0lHSnNZV05yT3ljc1hHNGdJQ0FnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnSUNCamIyNTBaVzUwYzBOdmJuUmhhVzVsY2pvZ2V5QjBZV2M2SUNka2FYWW5MQ0J6ZEhsc1pUb2dKM0JoWkdScGJtY3RiR1ZtZERvZ01UaHdlRHNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdhMlY1Vm1Gc2RXVlFZV2x5T2lCN0lIUmhaem9nSjNOd1lXNG5MQ0J6ZEhsc1pUb2dKMlJwYzNCc1lYazZJR0pzYjJOck95QnRZWEpuYVc0dFltOTBkRzl0T2lBeWNIZzdKeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lHdGxlVG9nZXlCMFlXYzZJQ2R6Y0dGdUp5d2djM1I1YkdVNklDZGpiMnh2Y2pvZ1pHRnlhMkpzZFdVN0p5QjlMRnh1SUNBZ0lDQWdJQ0FnSUhONWJXSnZiRlpoYkhWbE9pQjdJSFJoWnpvZ0ozTndZVzRuTENCemRIbHNaVG9nSjJOdmJHOXlPaUJrWVhKclozSmxaVzQ3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJSE4wY21sdVoxWmhiSFZsT2lCN0lIUmhaem9nSjNOd1lXNG5MQ0J6ZEhsc1pUb2dKMk52Ykc5eU9pQmpjbWx0YzI5dU95Y2dmU3hjYmlBZ0lDQWdJQ0FnSUNCdWRXMWlaWEpXWVd4MVpUb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNkamIyeHZjam9nWW14MVpUc25JSDBzWEc0Z0lDQWdJQ0FnSUNBZ1ltOXZiR1ZoYmxaaGJIVmxPaUI3SUhSaFp6b2dKM053WVc0bkxDQnpkSGxzWlRvZ0oyTnZiRzl5T2lCaWJIVmxPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQnVkV3hzVm1Gc2RXVTZJSHNnZEdGbk9pQW5jM0JoYmljc0lITjBlV3hsT2lBblkyOXNiM0k2SUdKc2RXVTdKeUI5TEZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQjJZWElnYjNCbGJreGxkbVZzY3lBOUlHbHpUbUZPS0hCaGNuTmxTVzUwS0c5d1pXNU1aWFpsYkhOQmNtY3BLU0EvSUVsdVptbHVhWFI1SURvZ2NHRnljMlZKYm5Rb2IzQmxia3hsZG1Wc2MwRnlaeWs3WEc0Z0lDQWdJQ0FnSUhaaGNpQnpkSGxzWlU5d2RHbHZibk1nUFNCMGVYQmxiMllnYzNSNWJHVlBjSFJwYjI1elFYSm5JRDA5UFNBbmIySnFaV04wSnlCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEOGdiV1Z5WjJWVGRIbHNaVTl3ZEdsdmJuTW9SRVZHUVZWTVZGOVRWRmxNUlY5UFVGUkpUMDVUTENCemRIbHNaVTl3ZEdsdmJuTkJjbWNwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBNklFUkZSa0ZWVEZSZlUxUlpURVZmVDFCVVNVOU9VenRjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJQWW1wbFkzUXVZWE56YVdkdUlDRTlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQlBZbXBsWTNRdVlYTnphV2R1SUQwZ1puVnVZM1JwYjI0b2RHRnlaMlYwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHRnlaMlYwSUQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblEyRnVibTkwSUdOdmJuWmxjblFnZFc1a1pXWnBibVZrSUc5eUlHNTFiR3dnZEc4Z2IySnFaV04wSnlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdkRzhnUFNCUFltcGxZM1FvZEdGeVoyVjBLVHRjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdsdVpHVjRJRDBnTVRzZ2FXNWtaWGdnUENCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvT3lCcGJtUmxlQ3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGNpQnVaWGgwVTI5MWNtTmxJRDBnWVhKbmRXMWxiblJ6VzJsdVpHVjRYVHRjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzVsZUhSVGIzVnlZMlVnSVQwZ2JuVnNiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUc1bGVIUkxaWGtnYVc0Z2JtVjRkRk52ZFhKalpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHVaWGgwVTI5MWNtTmxMQ0J1WlhoMFMyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBiMXR1WlhoMFMyVjVYU0E5SUc1bGVIUlRiM1Z5WTJWYmJtVjRkRXRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkRzg3WEc0Z0lDQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJpQnlaVzVrWlhJb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NXliMjkwTG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6ZEhsc1pTNWpjM05VWlhoMElEMGdjM1I1YkdWUGNIUnBiMjV6TG5KdmIzUXVjM1I1YkdVN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLR3B6YjI0Z1BUMDlJRzUxYkd3Z2ZId2dhbk52YmlBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnZG05cFpFVnNaVzFsYm5RZ1BTQm5aWFJXWVd4MVpTaHVkV3hzS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvZG05cFpFVnNaVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvYW5OdmJpQnBibk4wWVc1alpXOW1JRVJoZEdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQmtZWFJsUld4bGJXVnVkQ0E5SUdkbGRGWmhiSFZsS0dwemIyNHVkRzlKVTA5VGRISnBibWNvS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dSaGRHVkZiR1Z0Wlc1MEtUdGNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hSNWNHVnZaaUJxYzI5dUlDRTlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUc1dmJrVjRjR0Z1WkdGaWJHVkZiR1Z0Wlc1MElEMGdaMlYwVm1Gc2RXVW9hbk52YmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0c1dmJrVjRjR0Z1WkdGaWJHVkZiR1Z0Wlc1MEtUdGNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSFJwZEd4bElEMGdRWEp5WVhrdWFYTkJjbkpoZVNocWMyOXVLU0EvSUNkQmNuSmhlVnNuSUNzZ2FuTnZiaTVzWlc1bmRHZ2dLeUFuWFNjZ09pQW5UMkpxWldOMEp6dGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQjBhR2x6VEdWMlpXeEpjME5zYjNObFpDQTlJRzl3Wlc1TVpYWmxiSE1nUENBeE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNoblpYUlVhWFJzWlNoMGFYUnNaU3dnYm5Wc2JDd2dkR2hwYzB4bGRtVnNTWE5EYkc5elpXUXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9ZMjl1ZG1WeWRFcHpiMjVVYjBWc1pXMWxiblJ6S0dwemIyNHNJREVwS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z1kyOXVkbVZ5ZEVwemIyNVViMFZzWlcxbGJuUnpLR3B6YjI0c0lHbHVaR1Y0S1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhSb2FYTk1aWFpsYkVselEyeHZjMlZrSUQwZ2FXNWtaWGdnUGlCdmNHVnVUR1YyWld4ek8xeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCdVpYaDBUR1YyWld4SmMwTnNiM05sWkNBOUlHbHVaR1Y0SUNzZ01TQStJRzl3Wlc1TVpYWmxiSE03WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR052Ym5SaGFXNWxjaUE5SUdkbGRFTnZiblJsYm5SelEyOXVkR0ZwYm1WeUtIUm9hWE5NWlhabGJFbHpRMnh2YzJWa0tUdGNiaUFnSUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJyWlhrZ2FXNGdhbk52YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tFRnljbUY1TG1selFYSnlZWGtvYW5OdmJsdHJaWGxkS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNTBZV2x1WlhJdVlYQndaVzVrUTJocGJHUW9aMlYwVkdsMGJHVW9KMEZ5Y21GNVd5Y2dLeUJxYzI5dVcydGxlVjB1YkdWdVozUm9JQ3NnSjEwbkxDQnJaWGtzSUc1bGVIUk1aWFpsYkVselEyeHZjMlZrS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1aGNIQmxibVJEYUdsc1pDaGpiMjUyWlhKMFNuTnZibFJ2Uld4bGJXVnVkSE1vYW5OdmJsdHJaWGxkTENCcGJtUmxlQ0FySURFcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FuTnZibHRyWlhsZElEMDlQU0J1ZFd4c0lIeDhJR3B6YjI1YmEyVjVYU0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNpNWhjSEJsYm1SRGFHbHNaQ2huWlhSVGRHRnVaR0Z5WkZCaGFYSW9hMlY1TENCdWRXeHNLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR3B6YjI1YmEyVjVYU0JwYm5OMFlXNWpaVzltSUVSaGRHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWhyWlhrc0lHcHpiMjViYTJWNVhTNTBiMGxUVDFOMGNtbHVaeWdwS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hSNWNHVnZaaUJxYzI5dVcydGxlVjBnUFQwOUlDZHZZbXBsWTNRbktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNpNWhjSEJsYm1SRGFHbHNaQ2huWlhSVWFYUnNaU2duVDJKcVpXTjBKeXdnYTJWNUxDQnVaWGgwVEdWMlpXeEpjME5zYjNObFpDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWTI5dWRtVnlkRXB6YjI1VWIwVnNaVzFsYm5SektHcHpiMjViYTJWNVhTd2dhVzVrWlhnZ0t5QXhLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNTBZV2x1WlhJdVlYQndaVzVrUTJocGJHUW9aMlYwVTNSaGJtUmhjbVJRWVdseUtHdGxlU3dnYW5OdmJsdHJaWGxkS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVUzbHRZbTlzY3lBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdUMkpxWldOMExtZGxkRTkzYmxCeWIzQmxjblI1VTNsdFltOXNjeWhxYzI5dUtTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUtITjViV0p2YkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNTBZV2x1WlhJdVlYQndaVzVrUTJocGJHUW9aMlYwVTNSaGJtUmhjbVJRWVdseUtITjViV0p2YkM1MGIxTjBjbWx1WnlncExDQnFjMjl1VzNONWJXSnZiRjBwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXVkR0ZwYm1WeU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRlJwZEd4bEtIUnBkR3hsVkdWNGRDd2diM0IwYVc5dVlXeExaWGtzSUd4bGRtVnNTWE5EYkc5elpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdZM1Z5Y21WdWRHeDVRMnh2YzJWa0lEMGdiR1YyWld4SmMwTnNiM05sWkR0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnWTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG5ScGRHeGxRMjl1ZEdGcGJtVnlMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUQwZ2MzUjViR1ZQY0hScGIyNXpMblJwZEd4bFEyOXVkR0ZwYm1WeUxuTjBlV3hsTzF4dUlDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMyVjBRWFIwY21saWRYUmxLQ2RrWVhSaExYUmxjM1FuTENBbmRHbDBiR1ZEYjI1MFlXbHVaWEluS1R0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnZEdWNGRFVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlZSbGVIUXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnZEdsMGJHVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXVkR2wwYkdVdWRHRm5LVHRjYmlBZ0lDQWdJQ0FnSUNCMGFYUnNaVVZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTUwYVhSc1pTNXpkSGxzWlR0Y2JpQWdJQ0FnSUNBZ0lDQjBaWGgwUld4bGJXVnVkQzV6ZEhsc1pTNWpjM05VWlhoMElEMGdjM1I1YkdWUGNIUnBiMjV6TG5ScGRHeGxWR1Y0ZEM1emRIbHNaVHRjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pVVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9aMlYwVDNCbGJrSjFkSFJ2Ymloc1pYWmxiRWx6UTJ4dmMyVmtLU2s3WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLRzl3ZEdsdmJtRnNTMlY1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwWlhoMFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaG5aWFJMWlhrb2IzQjBhVzl1WVd4TFpYa3BLVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdkR1Y0ZEVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZEdsMGJHVlVaWGgwS1NrN1hHNGdJQ0FnSUNBZ0lDQWdkR2wwYkdWRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tIUmxlSFJGYkdWdFpXNTBLVHRjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pVVnNaVzFsYm5RdWIyNWpiR2xqYXlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ2Y0dWdVFuVjBkRzl1SUQwZ2RHbDBiR1ZGYkdWdFpXNTBMbVpwY25OMFEyaHBiR1E3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYjJKcVpXTjBRMjl1ZEdWdWRITWdQU0IwYVhSc1pVVnNaVzFsYm5RdWNHRnlaVzUwVG05a1pTNXVaWGgwVTJsaWJHbHVaenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHOWlhbVZqZEVOdmJuUmxiblJ6TG5OMGVXeGxMbVJwYzNCc1lYa2dQU0JqZFhKeVpXNTBiSGxEYkc5elpXUWdQeUFuWW14dlkyc25JRG9nSjI1dmJtVW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ2IzQmxia0oxZEhSdmJpNXpkSGxzWlM1MGNtRnVjMlp2Y20wZ1BTQmpkWEp5Wlc1MGJIbERiRzl6WldRZ1B5QW5jbTkwWVhSbEtEa3daR1ZuS1NjZ09pQW5jbTkwWVhSbEtEQmtaV2NwSnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUnNlVU5zYjNObFpDQTlJQ0ZqZFhKeVpXNTBiSGxEYkc5elpXUTdYRzRnSUNBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNCamIyNTBZV2x1WlhKRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tIUnBkR3hsUld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOdmJuUmhhVzVsY2tWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnWjJWMFQzQmxia0oxZEhSdmJpaHNaWFpsYkVselEyeHZjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdKMWRIUnZia1ZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTV2Y0dWdVFuVjBkRzl1TG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnWW5WMGRHOXVSV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUQwZ2MzUjViR1ZQY0hScGIyNXpMbTl3Wlc1Q2RYUjBiMjR1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnWW5WMGRHOXVSV3hsYldWdWRDNXpkSGxzWlM1MGNtRnVjMlp2Y20wZ1BTQnNaWFpsYkVselEyeHZjMlZrSUQ4Z0ozSnZkR0YwWlNnd1pHVm5LU2NnT2lBbmNtOTBZWFJsS0Rrd1pHVm5LU2M3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdKMWRIUnZia1ZzWlcxbGJuUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNGdaMlYwUTI5dWRHVnVkSE5EYjI1MFlXbHVaWElvYVhORGJHOXpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnWTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG1OdmJuUmxiblJ6UTI5dWRHRnBibVZ5TG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6WlhSQmRIUnlhV0oxZEdVb0oyUmhkR0V0ZEdWemRDY3NJQ2RqYjI1MFpXNTBjME52Ym5SaGFXNWxjaWNwTzF4dUlDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NWpiMjUwWlc1MGMwTnZiblJoYVc1bGNpNXpkSGxzWlR0Y2JpQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG1ScGMzQnNZWGtnUFNBb2FYTkRiRzl6WldRZ1B5QW5ibTl1WlNjZ09pQW5ZbXh2WTJzbktUdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMjl1ZEdGcGJtVnlSV3hsYldWdWREdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJpQm5aWFJUZEdGdVpHRnlaRkJoYVhJb2EyVjVMQ0IyWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQndZV2x5Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG10bGVWWmhiSFZsVUdGcGNpNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lIQmhhWEpGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11YTJWNVZtRnNkV1ZRWVdseUxuTjBlV3hsTzF4dUlDQWdJQ0FnSUNBZ0lIQmhhWEpGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRFdGxlU2hyWlhrcEtUdGNiaUFnSUNBZ0lDQWdJQ0J3WVdseVJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaG5aWFJXWVd4MVpTaDJZV3gxWlNrcE8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQndZV2x5Uld4bGJXVnVkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJuWlhSTFpYa29ibUZ0WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCclpYbEZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXVhMlY1TG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnYTJWNVJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxtdGxlUzV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0JyWlhsRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHUnZZM1Z0Wlc1MExtTnlaV0YwWlZSbGVIUk9iMlJsS0c1aGJXVWdLeUFuT2lBbktTazdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR3RsZVVWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnWjJWMFZtRnNkV1VvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdkbUZzZFdWRmJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJ1ZFd4c1ZIbHdaU0E5SUNkdlltcGxZM1FuTzF4dUlDQWdJQ0FnSUNBZ0lITjNhWFJqYUNBb2RIbHdaVzltSUhaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkemVXMWliMnduT2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpVVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NXplVzFpYjJ4V1lXeDFaUzUwWVdjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTV6ZVcxaWIyeFdZV3gxWlM1emRIbHNaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHUnZZM1Z0Wlc1MExtTnlaV0YwWlZSbGVIUk9iMlJsS0haaGJIVmxMblJ2VTNSeWFXNW5LQ2twS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2R6ZEhKcGJtY25PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLSE4wZVd4bFQzQjBhVzl1Y3k1emRISnBibWRXWVd4MVpTNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpVVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NXpkSEpwYm1kV1lXeDFaUzV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dSdlkzVnRaVzUwTG1OeVpXRjBaVlJsZUhST2IyUmxLQ2RjSWljZ0t5QjJZV3gxWlNBcklDZGNJaWNwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2R1ZFcxaVpYSW5PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLSE4wZVd4bFQzQjBhVzl1Y3k1dWRXMWlaWEpXWVd4MVpTNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpVVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NXVkVzFpWlhKV1lXeDFaUzV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dSdlkzVnRaVzUwTG1OeVpXRjBaVlJsZUhST2IyUmxLSFpoYkhWbEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBblltOXZiR1ZoYmljNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb2MzUjViR1ZQY0hScGIyNXpMbUp2YjJ4bFlXNVdZV3gxWlM1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1aWIyOXNaV0Z1Vm1Gc2RXVXVjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaDJZV3gxWlNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnYm5Wc2JGUjVjR1U2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvYzNSNWJHVlBjSFJwYjI1ekxtNTFiR3hXWVd4MVpTNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpVVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NXVkV3hzVm1Gc2RXVXVjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaDJZV3gxWlNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsUld4bGJXVnVkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJ0WlhKblpWTjBlV3hsVDNCMGFXOXVjeWhrWldaaGRXeDBjeXdnYjNabGNuSnBaR1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUcxbGNtZGxaQ0E5SUh0OU8xeHVJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQmtaV1poZFd4MGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JXVnlaMlZrVzJ0bGVWMGdQU0JQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0JrWldaaGRXeDBjMXRyWlhsZExDQnZkbVZ5Y21sa1pYTmJhMlY1WFNrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ0WlhKblpXUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISmxibVJsY2lncE8xeHVJQ0FnSUgxY2JuMGlMQ0pwYlhCdmNuUWdlMlJsWm1GMWJIUWdZWE1nUW1GelpVeHZaMzBnWm5KdmJTQW5MaTlpWVhObFRHOW5KenRjYm1sdGNHOXlkQ0I3WkdWbVlYVnNkQ0JoY3lCTWIyZE9iMlJsVFdsNGFXNXpmU0JtY205dElDY3VMM1JsY20xTWIyY3ViV2w0YVc1ekxtNXZaR1VuTzF4dWFXMXdiM0owSUh0a1pXWmhkV3gwSUdGeklGZGxZazV2WkdWTmFYaHBibk45SUdaeWIyMGdKeTR2ZEdWeWJVeHZaeTV0YVhocGJuTXVkMlZpSnp0Y2JtbHRjRzl5ZENCN1VHeGhkR1p2Y20xOUlHWnliMjBnSjJOaGRYTmhiQzF1WlhRdWRYUnBiSE1uTzF4dVkyeGhjM01nVkdWeWJVeHZaeUJsZUhSbGJtUnpJRkJzWVhSbWIzSnRMbTFwZUZkcGRHZ29RbUZ6WlV4dlp5d2dleWR1YjJSbEp6cGJURzluVG05a1pVMXBlR2x1YzEwc0ozZGxZaWM2VzFkbFlrNXZaR1ZOYVhocGJuTmRmU2w3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvS1h0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvS1R0Y2JpQWdJQ0I5WEc1OVhHNWpiMjV6ZENCTWIyZG5aWElnUFNCdVpYY2dWR1Z5YlV4dlp5Z3BPMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdURzluWjJWeU95SXNJbU52Ym5OMElFeHZaMDV2WkdWTmFYaHBibk1nUFNBb1RHOW5RMnhoYzNNcFBUNGdZMnhoYzNNZ1pYaDBaVzVrY3lCTWIyZERiR0Z6YzN0Y2JpQWdJQ0JqYjI1dVpXTjBLR05vWVc1dVpXd3BlMXh1SUNBZ0lDQWdJQ0F2TDI1dmRHaHBibWRjYmlBZ0lDQjlYRzRnSUNBZ2JHOW5LRzFsYzNOaFoyVXBlMXh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMbXhsZG1Wc0lENDlJSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE5iSjJ4dlp5ZGRLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXeHNPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktHMWxjM05oWjJVcE8xeHVJQ0FnSUgxY2JpQWdJQ0J3Y205bmNtVnpjeWh3Y205alpYTnpUV1Z6YzJGblpTbDdYRzRnSUNBZ0lDQWdJQzh2VkU5RVR6b2dhVzF3YkdWdFpXNTBJSEJ5YjJkeVpYTnpJSE5vYjNkY2JpQWdJQ0I5WEc0Z0lDQWdaR1ZpZFdjb2JXVnpjMkZuWlNsN1hHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWJHVjJaV3dnUGowZ2RHaHBjeTVCWTJObGNIUmxaRXhsZG1Wc2Mxc25aR1ZpZFdjblhTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdmU0JjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVrWldKMVp5aHRaWE56WVdkbEtUdGNiaUFnSUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JNYjJkT2IyUmxUV2w0YVc1ek95SXNJbWx0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJLYzI5dVZtbGxkMzBnWm5KdmJTQW5MaTl3Y21WMGRIbEtjMjl1Snp0Y2JtTnZibk4wSUZkbFlrNXZaR1ZOYVhocGJuTWdQU0FvVEc5blEyeGhjM01wUFQ0Z1kyeGhjM01nWlhoMFpXNWtjeUJNYjJkRGJHRnpjM3RjYmlBZ0lDQmpiMjV1WldOMEtHUnZZM1Z0Wlc1MFJXdzliblZzYkNsN1hHNGdJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MFJXd2dQU0JrYjJOMWJXVnVkRVZzZkh4a2IyTjFiV1Z1ZEM1aWIyUjVPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2JtOWtaU0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9YQ0oxYkZ3aUtUdGNiaUFnSUNBZ0lDQWdibTlrWlM1emRIbHNaUzVqYzNOVVpYaDBJRDBnWENKc2FYTjBMWE4wZVd4bExYUjVjR1U2SUc1dmJtVTdYQ0k3WEc0Z0lDQWdJQ0FnSUdSdlkzVnRaVzUwUld3dVlYQndaVzVrUTJocGJHUW9ibTlrWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wm5KaGJXVkZiQ0E5SUdSdlkzVnRaVzUwUld3N1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5bloyVnlSV3dnUFNCa2IyTjFiV1Z1ZEVWc0xtZGxkRVZzWlcxbGJuUnpRbmxVWVdkT1lXMWxLRndpZFd4Y0lpbGJNRjA3WEc0Z0lDQWdmVnh1SUNBZ0lITmpjbTlzYkVKdmRIUnZiU2hsYkdWdFpXNTBQVzUxYkd3cGUxeHVJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MElEMGdaV3hsYldWdWRDQjhmQ0IwYUdsekxtWnlZVzFsUld3N1hHNGdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMyTnliMnhzVkc5d0lEMGdaV3hsYldWdWRDNXpZM0p2Ykd4SVpXbG5hSFFnTFNCbGJHVnRaVzUwTG1Oc2FXVnVkRWhsYVdkb2REdGNiaUFnSUNCOVhHNGdJQ0FnY0hKdlozSmxjM01vY0hKdlkyVnpjMDFsYzNOaFoyVXBlMXh1SUNBZ0lDQWdJQ0F2THlCc1pYUWdibTlrWlNBOUlIUm9hWE11Ykc5bloyVnlSV3d1WjJWMFJXeGxiV1Z1ZEhOQ2VWUmhaMDVoYldVb1hDSnNhVHB1ZEdndGJHRnpkQzF2WmkxMGVYQmxLREVwWENJcE8xeHVJQ0FnSUNBZ0lDQnNaWFFnVEVsT2IyUmxjeUE5SUhSb2FYTXViRzluWjJWeVJXd3VaMlYwUld4bGJXVnVkSE5DZVZSaFowNWhiV1VvWENKc2FWd2lLVHRjYmlBZ0lDQWdJQ0FnYkdWMElHNXZaR1VnUFNCTVNVNXZaR1Z6VzB4SlRtOWtaWE11YkdWdVozUm9MVEZkTzF4dUlDQWdJQ0FnSUNCcFppZ2hibTlrWlNCOGZDQnViMlJsTG1Oc1lYTnpUR2x6ZEM1amIyNTBZV2x1Y3loY0lteHZaMmRsY2kxd2NtOW5jbVZ6YzF3aUtTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkwyTnlaV0YwWlNCdVpYY2daV3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHNXZaR1VnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLRndpYkdsY0lpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCdWIyUmxMbU5zWVhOelRHbHpkQzVoWkdRb1hDSnNiMmRuWlhJdGNISnZaM0psYzNOY0lpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbXh2WjJkbGNrVnNMbUZ3Y0dWdVpFTm9hV3hrS0c1dlpHVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUd4bGRDQnFjMjl1VG05a1pTQTlJRXB6YjI1V2FXVjNMa3BUVDA1RWFYTndiR0Y1S0hCeWIyTmxjM05OWlhOellXZGxLVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHUmhkR1VnUFNCdVpYY2dSR0YwWlNncE8xeHVJQ0FnSUNBZ0lDQnViMlJsTG1sdWJtVnlTRlJOVENBOUlHQThjQ0J6ZEhsc1pUMWNJbVp2Ym5RdGMybDZaVG9nTVRKd2VEc2dkR1Y0ZEMxaGJHbG5ianB5YVdkb2RGd2lQaVI3WkdGMFpYMDhMM0ErWUR0Y2JpQWdJQ0FnSUNBZ2JtOWtaUzVoY0hCbGJtUkRhR2xzWkNocWMyOXVUbTlrWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzJOeWIyeHNRbTkwZEc5dEtDazdYRzRnSUNBZ2ZWeHVJQ0FnSUd4dlp5aHRaWE56WVdkbEtYdGNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NXNaWFpsYkNBK1BTQjBhR2x6TGtGalkyVndkR1ZrVEdWMlpXeHpXeWRzYjJjblhTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JwWmlnaGRHaHBjeTVzYjJkblpYSkZiQ0I4ZkNBaGRHaHBjeTVzYjJkblpYSkZiQzVoY0hCbGJtUkRhR2xzWkNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtTnZibTVsWTNRb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JzWlhRZ2JtOWtaU0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9YQ0pzYVZ3aUtUdGNiaUFnSUNBZ0lDQWdibTlrWlM1emRIbHNaUzVqYzNOVVpYaDBJRDBnSjJKdmNtUmxjaTFpYjNSMGIyMDZJREZ3ZUNCemIyeHBaQ0FqWkdWa1pXUmxPeWM3SUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JzWlhRZ2FuTnZiazV2WkdVZ1BTQktjMjl1Vm1sbGR5NUtVMDlPUkdsemNHeGhlU2h0WlhOellXZGxLVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHUmhkR1VnUFNCdVpYY2dSR0YwWlNncE8xeHVJQ0FnSUNBZ0lDQnViMlJsTG1sdWJtVnlTRlJOVENBOUlHQThjQ0J6ZEhsc1pUMWNJbVp2Ym5RdGMybDZaVG9nTVRKd2VEc2dkR1Y0ZEMxaGJHbG5ianB5YVdkb2RGd2lQaVI3WkdGMFpYMDhMM0ErWUR0Y2JpQWdJQ0FnSUNBZ2JtOWtaUzVoY0hCbGJtUkRhR2xzWkNocWMyOXVUbTlrWlNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ykc5bloyVnlSV3d1WVhCd1pXNWtRMmhwYkdRb2JtOWtaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk55YjJ4c1FtOTBkRzl0S0NrN1hHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LRzFsYzNOaFoyVXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHUmxZblZuS0cxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TG14bGRtVnNJRDQ5SUhSb2FYTXVRV05qWlhCMFpXUk1aWFpsYkhOYkoyUmxZblZuSjEwcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzUxYkd3N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdMeTl1YnlCemFHOTNJRzl1SUhkbFlpQnpZM0psWlc0N0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1a1pXSjFaeWh0WlhOellXZGxLVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCWFpXSk9iMlJsVFdsNGFXNXpPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlqWVhWellXeGZibVYwWDNWMGFXeHpYMTg3SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZUltZ0RhdGFzZXQgfSBmcm9tICcuL2Jhc2VJbWdEYXRhc2V0JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBMb2dnZXJNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmxvZyc7XG5pbXBvcnQgeyBTdG9yYWdlTWl4aW5zLCBpbmRleERCU3RvcmFnZSB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyBNZW1DYWNoZU1peGlucywgbWVtRG93bkNhY2hlIH0gZnJvbSAnY2F1c2FsLW5ldC5tZW1jYWNoZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEltZ0RhdGFzZXRGZXRjaE1peGlucyB9IGZyb20gJy4vaW1nRGF0YXNldEZldGNoLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEltZ0RhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zIH0gZnJvbSAnLi9pbWdEYXRhc2V0UHJlcHJvY2Vzc2luZy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBJbWdEYXRhc2V0R2VuZXJhdG9yTWl4aW5zIH0gZnJvbSAnLi9pbWdEYXRhc2V0R2VuZXJhdG9yLm1peGlucyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNbmlzdERhdGFzZXQgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VJbWdEYXRhc2V0LCBcbiAgICAgICAgWyBJbWdEYXRhc2V0RmV0Y2hNaXhpbnMsXG4gICAgICAgICAgSW1nRGF0YXNldFByZXByb2Nlc3NpbmdNaXhpbnMsXG4gICAgICAgICAgSW1nRGF0YXNldEdlbmVyYXRvck1peGlucyxcbiAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAgICAgICAgICBTdG9yYWdlTWl4aW5zLFxuICAgICAgICAgIExvZ2dlck1peGlucyBdKXtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKXtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBpbmRleERCU3RvcmFnZTtcbiAgICAgICAgdGhpcy5NZW1DYWNoZSA9IG1lbURvd25DYWNoZTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUltZ0RhdGFzZXR7XG4gICAgY29uc3RydWN0b3IoZGF0YXNldENvbmZpZ3VyZSl7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGRhdGFzZXRDb25maWd1cmU7XG4gICAgICAgIGNvbnN0IHtudW1TYW1wbGVzLCBzYW1wbGVTaXplLCBudW1DbGFzc2VzfSA9IHRoaXMuY29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5kYXRhU2l6ZSA9IFtudW1TYW1wbGVzLCAuLi5zYW1wbGVTaXplXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubnVtU2FtcGxlcyA9IG51bVNhbXBsZXM7XG4gICAgICAgIHRoaXMuc2FtcGxlU2l6ZSA9IHNhbXBsZVNpemU7XG4gICAgICAgIHRoaXMubnVtQ2xhc3MgICA9IG51bUNsYXNzZXM7XG4gICAgfVxuICAgIFxuICAgIHN1bW1hcnkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbjtcbiAgICB9XG59IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9ufSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRnVuY3Rpb25NaXhpbnN9IGZyb20gJy4vZnVuY3Rpb24ubWl4aW5zJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3Rpb24sW0Z1bmN0aW9uTWl4aW5zXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59IiwiY29uc3QgRnVuY3Rpb25NaXhpbnMgPSAoQmFzZUZ1bmN0aW9uQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRnVuY3Rpb25DbGFzc3sgXG4gICAgZ2V0SW1nQnVmZmVyU2l6ZShpbWdTaXplKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKChzLGQpPT5zKmQsMSxpbWdTaXplKTtcbiAgICB9XG4gICAgZ2VuZXJhdG9yV2l0aEluZGV4KGl0ZW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuYWRkSW5kZXgoUi5tYXApKChkLCBpZHgpPT5baWR4LCBkXSwgaXRlbXMpO1xuICAgIH1cbiAgICBzcGxpdFRyYWluVGVzdFNldChpdGVtcywgc3BsaXRJbmRleCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnNwbGl0QXQoc3BsaXRJbmRleCwgaXRlbXMpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbk1peGluczsiLCJcbmltcG9ydCB7IFNhbXBsaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5jb25zdCBJbWdEYXRhc2V0RmV0Y2hNaXhpbnMgPSAoQmFzZUltYWdlQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlSW1hZ2VDbGFzc3sgXG4gICAgYXN5bmMgZmV0Y2hMYWJlbENodW5rKHNhdmVEaXIsIGxhYmVsQ2h1bmspe1xuICAgICAgICBsZXQgbGFiZWxDaHVua1VybCA9IHRoaXMuY29uZmlndXJhdGlvbi5kYXRhc2V0VXJsICsgbGFiZWxDaHVuaztcbiAgICAgICAgbGV0IGxhYmVsU2F2ZVBhdGggPSBzYXZlRGlyICsgbGFiZWxDaHVuaztcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaEZpbGUobGFiZWxDaHVua1VybCwgbGFiZWxTYXZlUGF0aCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hTYW1wbGVDaHVuayhzYXZlRGlyLCBzYW1wbGVDaHVuayl7XG4gICAgICAgIGxldCBzYW1wbGVDaHVua1VybCA9IHRoaXMuY29uZmlndXJhdGlvbi5kYXRhc2V0VXJsICsgc2FtcGxlQ2h1bms7XG4gICAgICAgIGxldCBzYW1tcGxlU2F2ZVBhdGggPSBzYXZlRGlyICsgc2FtcGxlQ2h1bms7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtzYW1wbGVDaHVua1VybCwgc2FtbXBsZVNhdmVQYXRofSk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hQTkdGaWxlKHNhbXBsZUNodW5rVXJsLCBzYW1tcGxlU2F2ZVBhdGgpO1xuICAgIH1cblxuICAgIHNlbGVjdENodW5rcyhudW1jaHVua3MsIHNlbGVjdEJ5PSdyYW5kb20nKXtcbiAgICAgICAgbGV0IGNodW5rSWR4cyA9IFNhbXBsaW5nLmNob2ljZSh0aGlzLmNvbmZpZ3VyYXRpb24uY2h1bmtMaXN0LCBudW1jaHVua3MpO1xuICAgICAgICByZXR1cm4gY2h1bmtJZHhzLm1hcCgoaWR4LCBpdGgpPT4oW2BkYXRhLWNodW5rLSR7aWR4fS5wbmdgLGBsYWJlbC1jaHVuay0ke2lkeH1gXSkpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoRGF0YXNldChzYXZlRGlyPScvbW5pc3QvJyxudW1jaHVua3M9MTAsIHNlbGVjdEJ5PSdyYW5kb20nKXtcbiAgICAgICAgbGV0IHNlbGVjdGVkQ2h1bmtzID0gdGhpcy5zZWxlY3RDaHVua3MobnVtY2h1bmtzLCBzZWxlY3RCeSk7XG4gICAgICAgIHRoaXMuc2F2ZWRDaHVua3MgPSBbXTtcbiAgICAgICAgZm9yKGxldCBbc2FtcGxlQ2h1bmssIGxhYmVsQ2h1bmtdIG9mIHNlbGVjdGVkQ2h1bmtzKXtcbiAgICAgICAgICAgIGxldCBzYW1wbGVQYXRoID0gYXdhaXQgdGhpcy5mZXRjaFNhbXBsZUNodW5rKHNhdmVEaXIsIHNhbXBsZUNodW5rKTtcbiAgICAgICAgICAgIGxldCBsYWJlbFBhdGggPSBhd2FpdCB0aGlzLmZldGNoTGFiZWxDaHVuayhzYXZlRGlyLCBsYWJlbENodW5rKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRDaHVua3MucHVzaChbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzKHtzYXZlQ2h1bmtzOltzYW1wbGVQYXRoLCBsYWJlbFBhdGhdfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLkYudW56aXAodGhpcy5zYXZlZENodW5rcyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEltZ0RhdGFzZXRGZXRjaE1peGluczsiLCJpbXBvcnQgeyBTYW1wbGluZyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY29uc3QgSW1nRGF0YXNldEdlbmVyYXRvck1peGlucyA9IChCYXNlSW1hZ2VDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VJbWFnZUNsYXNzeyBcbiAgICBcbiAgICBnZXRUcmFpblRlc3RTZXQodHJhaW5TaXplPW51bGwpe1xuICAgICAgICB0cmFpblNpemUgPSB0cmFpblNpemV8fHBhcnNlSW50KHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLmxlbmd0aCowLjkpO1xuICAgICAgICBjb25zdCBbdHJhaW5TZXQsIHRlc3RTZXRdID0gdGhpcy5GLnNwbGl0VHJhaW5UZXN0U2V0KHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLCB0cmFpblNpemUpO1xuICAgICAgICByZXR1cm4gW3RyYWluU2V0LCB0ZXN0U2V0XTtcbiAgICB9XG5cbiAgICBtYWtlU2FtcGxlR2VuZXJhdG9yKHNhbXBsZUlkeFNldCwgYmF0Y2hTaXplPW51bGwsIHN0YXJ0PTAsIGVuZD1udWxsKXtcbiAgICAgICAgaWYoIXRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwcmVwcm9jZXNzaW5nIG11c3QgYmUgcGVyZm9ybWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgYmF0Y2hTaXplID0gYmF0Y2hTaXplP2JhdGNoU2l6ZTpzYW1wbGVJZHhTZXQubGVuZ3RoO1xuICAgICAgICBjb25zdCBfYmF0Y2hlcyA9IHRoaXMuRi5oc3BsaXRFdmVyeShzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZSk7XG4gICAgICAgIGNvbnN0IGJhdGNoZXMgPSBTYW1wbGluZy5jaG9pY2UoX2JhdGNoZXMsIF9iYXRjaGVzLmxlbmd0aCk7XG4gICAgICAgIGlmKGVuZCA9PT0gbnVsbCl7XG4gICAgICAgICAgICBlbmQgPSBiYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gc3RhcnQsIGl0ZXJhdGlvbkNvdW50ID0gMCwgc3RlcCA9IDE7XG4gICAgICAgIGNvbnN0IGJhdGNoR2VuZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgIG5leHQ6IGFzeW5jKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhdGNoU2FtcGxlcyA9IFtdLCBiYXRjaExhYmVscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdIG9mIGJhdGNoZXNbbmV4dEluZGV4XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaFNhbXBsZXMgPSBbLi4uYmF0Y2hTYW1wbGVzLCBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoTGFiZWxzID0gWy4uLmJhdGNoTGFiZWxzLCBsYWJlbEl0ZW1bbGFiZWxQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4ICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZHggPSBpdGVyYXRpb25Db3VudDtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtpZHgsIGJhdGNoU2l6ZSwgZGF0YTpbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc119O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZShuZXh0SW5kZXggPCBlbmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYmF0Y2hHZW5lcmF0b3I7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEltZ0RhdGFzZXRHZW5lcmF0b3JNaXhpbnM7IiwiaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBQcmVwcm9jZXNzaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nJztcbmNvbnN0IEltZ0RhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zID0gKEJhc2VJbWFnZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUltYWdlQ2xhc3N7IFxuICAgIG1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtKHNhdmVEaXIpe1xuICAgICAgICBjb25zdCBJbWFnZUJ1ZmZlclNpemUgPSB0aGlzLkYuZ2V0SW1nQnVmZmVyU2l6ZSh0aGlzLnNhbXBsZVNpemUpO1xuICAgICAgICBjb25zdCBMYWJlbEJ1ZmZlclNpemUgPSB0aGlzLm51bUNsYXNzO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7aW1hZ2VCdWZmZXJTaXplOiBJbWFnZUJ1ZmZlclNpemUsIFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWxCdWZmZXJTaXplOiBMYWJlbEJ1ZmZlclNpemV9KTtcbiAgICAgICAgY29uc3QgVHJhbnNmb3JtRm4gPSAoY2h1bmssIGNodW5rRW5jb2RpbmcsIGFmdGVyVHJhbnNmb3JtRm4pID0+e1xuICAgICAgICAgICAgY29uc3QgVHJhbnNmb3JtQXN5bmMgPSBhc3luYyAoKT0+e1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVCdWZmZXIgPSBjaHVuay5zYW1wbGU7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsQnVmZmVyID0gY2h1bmsubGFiZWw7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZUJ1ZmZlciwgbGFiZWxCdWZmZXJ9KTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRlZEltZ0J1ZmZlciA9IGF3YWl0IHRoaXMucHJlcHJvY2Vzc2luZy5zcGxpdEltYWdlQnVmZmVyKHNhbXBsZUJ1ZmZlciwgSW1hZ2VCdWZmZXJTaXplKTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRlZExhYmVsQnVmZmVyID0gYXdhaXQgdGhpcy5wcmVwcm9jZXNzaW5nLnNwbGl0SW1hZ2VCdWZmZXIobGFiZWxCdWZmZXIsIExhYmVsQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvY2Vzc2VkQ2h1bms6IHRoaXMuRi56aXAoc3BsaXRlZEltZ0J1ZmZlciwgc3BsaXRlZExhYmVsQnVmZmVyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtJZHg6IGNodW5rLmlkeH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgVHJhbnNmb3JtQXN5bmMoY2h1bmspLnRoZW4ocHJvY2Vzc2VkQ2h1bms9PntcbiAgICAgICAgICAgICAgICBhZnRlclRyYW5zZm9ybUZuKG51bGwsIHByb2Nlc3NlZENodW5rKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgV3JpdGVGbiA9IChwcm9jZXNzZWRDaHVuaywgY2h1bmtFbmNvZGluZywgY2FsbGJhY2spID0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBXcml0ZUFzeW5jID0gYXN5bmMgKHByb2Nlc3NlZENodW5rKT0+e1xuICAgICAgICAgICAgICAgIGxldCBnZW5lcmF0b3IgPSB0aGlzLkYuZ2VuZXJhdG9yV2l0aEluZGV4KHByb2Nlc3NlZENodW5rLnByb2Nlc3NlZENodW5rKTtcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtJZHggID0gcHJvY2Vzc2VkQ2h1bmsuY2h1bmtJZHg7XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggID0gW10sIGxhYmVsUGF0aCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZSwgbGFiZWxdXSBvZiBnZW5lcmF0b3Ipe1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtTYW1wbGVQYXRoID0gYXdhaXQgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJdGVtKHNhdmVEaXIgKyAnc2FtcGxlLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgc2FtcGxlKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0xhYmVsUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ2xhYmVsLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVQYXRoID0gWy4uLnNhbXBsZVBhdGgsIGNodW5rU2FtcGxlUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUGF0aCA9IFsuLi5sYWJlbFBhdGgsIGNodW5rTGFiZWxQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyh7cHJlcHJvY2Vzc2luZzogW2NodW5rU2FtcGxlUGF0aCwgY2h1bmtMYWJlbFBhdGhdfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkYuemlwKHNhbXBsZVBhdGgsIGxhYmVsUGF0aCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBXcml0ZUFzeW5jKHByb2Nlc3NlZENodW5rKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zYXZlZFByZXByb2Nlc3Npbmcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyA9IFsuLi50aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgLi4ucmVzdWx0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGR1cGxleGVyID0gU3RyZWFtLm1ha2VEdXBsZXgoV3JpdGVGbik7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1lciA9IFN0cmVhbS5tYWtlVHJhbnNmb3JtKFRyYW5zZm9ybUZuKTtcbiAgICAgICAgbGV0IHN0cmVhbSA9IGR1cGxleGVyLnBpcGUodHJhbnNmb3JtZXIpLnBpcGUoZHVwbGV4ZXIpO1xuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgIH1cblxuICAgIGFzeW5jIHByZXByb2Nlc3NpbmdEYXRhc2V0KHNhdmVEaXI9Jy9wcmVwcm9jZXNzaW5nL21uaXN0Lycsc3RvcmVJbk1lbW9yeT1mYWxzZSl7XG4gICAgICAgIHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UgPSAoc3RvcmVJbk1lbW9yeSk/dGhpcy5tZW1DYWNoZTp0aGlzLnN0b3JhZ2U7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZyA9IG5ldyBQcmVwcm9jZXNzaW5nKCk7XG4gICAgICAgIGxldCBzdHJlYW0gPSB0aGlzLm1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtKHNhdmVEaXIpO1xuICAgICAgICBsZXQgZ2VuZXJhdG9yID0gdGhpcy5GLmdlbmVyYXRvcldpdGhJbmRleCh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgZm9yKGxldCBbaWR4LCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBzYW1wbGUgPSBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbGFiZWxJdGVtW2xhYmVsUGF0aF07XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7c2FtcGxlLCBsYWJlbH0pO1xuICAgICAgICAgICAgc3RyZWFtLnB1c2goe2lkeCwgc2FtcGxlLCBsYWJlbH0pO1xuICAgICAgICB9XG4gICAgICAgIHN0cmVhbS5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHN0cmVhbS5vbignZmluaXNoJywgKCk9PntcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSW1nRGF0YXNldFByZXByb2Nlc3NpbmdNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=