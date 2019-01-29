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
  Object.defineProperty(_exports, "termLogger", {
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

  var _default = new TermLog();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9sb2dnZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3ByZXR0eUpzb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJCYXNlTG9nIiwiY29uc3RydWN0b3IiLCJBY2NlcHRlZExldmVscyIsImRlYnVnIiwibG9nIiwid2FybmluZyIsImVycm9yIiwickFjY2VwdGVkTGV2ZWxzIiwibGV2ZWwiLCJMZXZlbCIsInVuZGVmaW5lZCIsIkVycm9yIiwiT2JqZWN0Iiwia2V5cyIsIkxvZ2dlck1peGlucyIsIkJhc2VkQ2xhc3MiLCJhcmdzIiwibG9nZ2VyIiwiY29uc29sZSIsInByb2dyZXNzIiwicHJvZ3Jlc3NNZXNzYWdlIiwiTG9nZ2VyIiwiSnNvblZpZXciLCJKU09ORGlzcGxheSIsImpzb24iLCJvcGVuTGV2ZWxzQXJnIiwic3R5bGVPcHRpb25zQXJnIiwiREVGQVVMVF9TVFlMRV9PUFRJT05TIiwicm9vdCIsInRhZyIsInN0eWxlIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZSIsInRpdGxlVGV4dCIsIm9wZW5CdXR0b24iLCJjb250ZW50c0NvbnRhaW5lciIsImtleVZhbHVlUGFpciIsImtleSIsInN5bWJvbFZhbHVlIiwic3RyaW5nVmFsdWUiLCJudW1iZXJWYWx1ZSIsImJvb2xlYW5WYWx1ZSIsIm51bGxWYWx1ZSIsIm9wZW5MZXZlbHMiLCJpc05hTiIsInBhcnNlSW50IiwiSW5maW5pdHkiLCJzdHlsZU9wdGlvbnMiLCJtZXJnZVN0eWxlT3B0aW9ucyIsImFzc2lnbiIsInRhcmdldCIsIlR5cGVFcnJvciIsInRvIiwiaW5kZXgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuZXh0U291cmNlIiwibmV4dEtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJlbmRlciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjc3NUZXh0Iiwidm9pZEVsZW1lbnQiLCJnZXRWYWx1ZSIsImFwcGVuZENoaWxkIiwiRGF0ZSIsImRhdGVFbGVtZW50IiwidG9JU09TdHJpbmciLCJub25FeHBhbmRhYmxlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsInRoaXNMZXZlbElzQ2xvc2VkIiwiZ2V0VGl0bGUiLCJjb252ZXJ0SnNvblRvRWxlbWVudHMiLCJuZXh0TGV2ZWxJc0Nsb3NlZCIsImNvbnRhaW5lciIsImdldENvbnRlbnRzQ29udGFpbmVyIiwiZ2V0U3RhbmRhcmRQYWlyIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZm9yRWFjaCIsInN5bWJvbCIsInRvU3RyaW5nIiwib3B0aW9uYWxLZXkiLCJsZXZlbElzQ2xvc2VkIiwiY3VycmVudGx5Q2xvc2VkIiwiY29udGFpbmVyRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRFbGVtZW50IiwidGl0bGVFbGVtZW50IiwiZ2V0T3BlbkJ1dHRvbiIsImdldEtleSIsImNyZWF0ZVRleHROb2RlIiwib25jbGljayIsImZpcnN0Q2hpbGQiLCJvYmplY3RDb250ZW50cyIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsImRpc3BsYXkiLCJ0cmFuc2Zvcm0iLCJidXR0b25FbGVtZW50IiwiaXNDbG9zZWQiLCJ2YWx1ZSIsInBhaXJFbGVtZW50IiwibmFtZSIsImtleUVsZW1lbnQiLCJ2YWx1ZUVsZW1lbnQiLCJudWxsVHlwZSIsImRlZmF1bHRzIiwib3ZlcnJpZGVzIiwibWVyZ2VkIiwiVGVybUxvZyIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkxvZ05vZGVNaXhpbnMiLCJXZWJOb2RlTWl4aW5zIiwiTG9nQ2xhc3MiLCJjb25uZWN0IiwiY2hhbm5lbCIsIm1lc3NhZ2UiLCJwcm9jZXNzTWVzc2FnZSIsImRvY3VtZW50RWwiLCJib2R5Iiwibm9kZSIsImZyYW1lRWwiLCJsb2dnZXJFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2Nyb2xsQm90dG9tIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiTElOb2RlcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwianNvbk5vZGUiLCJkYXRlIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFD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LCJmaWxlIjoiQGNhdXNhbE5ldC9sb2cud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VMb2d7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5BY2NlcHRlZExldmVscyA9IHtkZWJ1ZzogMCwgbG9nOjEsIHdhcm5pbmc6MiwgZXJyb3I6IDN9O1xuICAgICAgICB0aGlzLnJBY2NlcHRlZExldmVscyA9IHswOidkZWJ1ZycsIDE6ICdsb2cnLCAyOiAnd2FybmluZycsIDM6ICdlcnJvcid9O1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXTtcbiAgICB9XG4gICAgc2V0IExldmVsKGxldmVsKXtcbiAgICAgICAgaWYodGhpcy5BY2NlcHRlZExldmVsc1tsZXZlbF0hPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdOyAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7bGV2ZWx9IG11c3QgYmUgb25lIG9mICR7T2JqZWN0LmtleXModGhpcy5BY2NlcHRlZExldmVscyl9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IExldmVsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJBY2NlcHRlZExldmVsc1t0aGlzLmxldmVsXTtcbiAgICB9XG59IiwiY29uc3QgTG9nZ2VyTWl4aW5zID0gKEJhc2VkQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlZENsYXNze1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3Mpe1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgIH1cbiAgICBwcm9ncmVzcyhwcm9ncmVzc01lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxvZ2dlci5wcm9ncmVzcyl7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5wcm9ncmVzcyhwcm9ncmVzc01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldCBMb2dnZXIobG9nZ2VyKXtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBMb2dnZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlck1peGluczsiLCIvLyBvcmlnaW4gY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWN5Z2lsYmVydC9qc29uLWRpc3BsYXkvYmxvYi9tYXN0ZXIvanNvbi1kaXNwbGF5LmpzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgTHVjeSBHaWxiZXJ0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVmlld3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBzdGF0aWMgSlNPTkRpc3BsYXkoanNvbiwgb3BlbkxldmVsc0FyZywgc3R5bGVPcHRpb25zQXJnKSB7XG4gICAgICAgIHZhciBERUZBVUxUX1NUWUxFX09QVElPTlMgPSB7XG4gICAgICAgICAgcm9vdDogeyB0YWc6ICdwcmUnLCBzdHlsZTogJ3BhZGRpbmc6IDVweDsgZm9udC1zaXplOiAxcmVtOycgfSxcbiAgICAgICAgICB0aXRsZUNvbnRhaW5lcjogeyB0YWc6ICdkaXYnLCBzdHlsZTogJ21hcmdpbi1ib3R0b206IDNweDsnIH0sXG4gICAgICAgICAgdGl0bGU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyOycgfSxcbiAgICAgICAgICB0aXRsZVRleHQ6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnJyB9LFxuICAgICAgICAgIG9wZW5CdXR0b246IHsgXG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW46IDBweCA3cHggMHB4IDJweDsgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAnXG4gICAgICAgICAgICAgICAgICsgJ2JvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjazsnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudHNDb250YWluZXI6IHsgdGFnOiAnZGl2Jywgc3R5bGU6ICdwYWRkaW5nLWxlZnQ6IDE4cHg7JyB9LFxuICAgICAgICAgIGtleVZhbHVlUGFpcjogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogMnB4OycgfSxcbiAgICAgICAgICBrZXk6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGRhcmtibHVlOycgfSxcbiAgICAgICAgICBzeW1ib2xWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogZGFya2dyZWVuOycgfSxcbiAgICAgICAgICBzdHJpbmdWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogY3JpbXNvbjsnIH0sXG4gICAgICAgICAgbnVtYmVyVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICAgIGJvb2xlYW5WYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgICAgbnVsbFZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9wZW5MZXZlbHMgPSBpc05hTihwYXJzZUludChvcGVuTGV2ZWxzQXJnKSkgPyBJbmZpbml0eSA6IHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpO1xuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0gdHlwZW9mIHN0eWxlT3B0aW9uc0FyZyA9PT0gJ29iamVjdCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1lcmdlU3R5bGVPcHRpb25zKERFRkFVTFRfU1RZTEVfT1BUSU9OUywgc3R5bGVPcHRpb25zQXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBERUZBVUxUX1NUWUxFX09QVElPTlM7XG4gICAgXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgXG4gICAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMucm9vdC50YWcpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5yb290LnN0eWxlO1xuICAgIFxuICAgICAgICAgIGlmIChqc29uID09PSBudWxsIHx8IGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHZvaWRFbGVtZW50ID0gZ2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZvaWRFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb24gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBub25FeHBhbmRhYmxlRWxlbWVudCA9IGdldFZhbHVlKGpzb24pO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub25FeHBhbmRhYmxlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IEFycmF5LmlzQXJyYXkoanNvbikgPyAnQXJyYXlbJyArIGpzb24ubGVuZ3RoICsgJ10nIDogJ09iamVjdCc7XG4gICAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBvcGVuTGV2ZWxzIDwgMTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUodGl0bGUsIG51bGwsIHRoaXNMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCAxKSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCBpbmRleCkge1xuICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgICAgICB2YXIgbmV4dExldmVsSXNDbG9zZWQgPSBpbmRleCArIDEgPiBvcGVuTGV2ZWxzO1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250ZW50c0NvbnRhaW5lcih0aGlzTGV2ZWxJc0Nsb3NlZCk7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdBcnJheVsnICsganNvbltrZXldLmxlbmd0aCArICddJywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSA9PT0gbnVsbCB8fCBqc29uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwgbnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0udG9JU09TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbltrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ09iamVjdCcsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoanNvbikuZm9yRWFjaChmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihzeW1ib2wudG9TdHJpbmcoKSwganNvbltzeW1ib2xdKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRUaXRsZSh0aXRsZVRleHQsIG9wdGlvbmFsS2V5LCBsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRseUNsb3NlZCA9IGxldmVsSXNDbG9zZWQ7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlLnRhZyk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGUuc3R5bGU7XG4gICAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGlmIChvcHRpb25hbEtleSkge1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KG9wdGlvbmFsS2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3BlbkJ1dHRvbiA9IHRpdGxlRWxlbWVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBvYmplY3RDb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gY3VycmVudGx5Q2xvc2VkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgIG9wZW5CdXR0b24uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudGx5Q2xvc2VkID8gJ3JvdGF0ZSg5MGRlZyknIDogJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi50YWcpO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnN0eWxlO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICAgIHJldHVybiBidXR0b25FbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbnRlbnRzQ29udGFpbmVyKGlzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAnY29udGVudHNDb250YWluZXInKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIuc3R5bGU7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKGlzQ2xvc2VkID8gJ25vbmUnIDogJ2Jsb2NrJyk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgcGFpckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIudGFnKTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci5zdHlsZTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VmFsdWUodmFsdWUpKTtcbiAgICAgICAgICByZXR1cm4gcGFpckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KG5hbWUpIHtcbiAgICAgICAgICB2YXIga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleS50YWcpO1xuICAgICAgICAgIGtleUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXkuc3R5bGU7XG4gICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lICsgJzogJykpO1xuICAgICAgICAgIHJldHVybiBrZXlFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgICAgICB2YXIgbnVsbFR5cGUgPSAnb2JqZWN0JztcbiAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCInICsgdmFsdWUgKyAnXCInKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG51bGxUeXBlOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udWxsVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgICAgIHZhciBtZXJnZWQgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG1lcmdlZFtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiByZW5kZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtkZWZhdWx0IGFzIEJhc2VMb2d9IGZyb20gJy4vYmFzZUxvZyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgTG9nTm9kZU1peGluc30gZnJvbSAnLi90ZXJtTG9nLm1peGlucy5ub2RlJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBXZWJOb2RlTWl4aW5zfSBmcm9tICcuL3Rlcm1Mb2cubWl4aW5zLndlYic7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNsYXNzIFRlcm1Mb2cgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VMb2csIHsnbm9kZSc6W0xvZ05vZGVNaXhpbnNdLCd3ZWInOltXZWJOb2RlTWl4aW5zXX0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFRlcm1Mb2coKTsiLCJjb25zdCBMb2dOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChjaGFubmVsKXtcbiAgICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2Upe1xuICAgICAgICAvL1RPRE86IGltcGxlbWVudCBwcm9ncmVzcyBzaG93XG4gICAgfVxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gXG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nTm9kZU1peGluczsiLCJpbXBvcnQge2RlZmF1bHQgYXMgSnNvblZpZXd9IGZyb20gJy4vcHJldHR5SnNvbic7XG5jb25zdCBXZWJOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChkb2N1bWVudEVsPW51bGwpe1xuICAgICAgICBkb2N1bWVudEVsID0gZG9jdW1lbnRFbHx8ZG9jdW1lbnQuYm9keTtcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IFwibGlzdC1zdHlsZS10eXBlOiBub25lO1wiO1xuICAgICAgICBkb2N1bWVudEVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB0aGlzLmZyYW1lRWwgPSBkb2N1bWVudEVsO1xuICAgICAgICB0aGlzLmxvZ2dlckVsID0gZG9jdW1lbnRFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpWzBdO1xuICAgIH1cbiAgICBzY3JvbGxCb3R0b20oZWxlbWVudD1udWxsKXtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5mcmFtZUVsO1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIHByb2dyZXNzKHByb2Nlc3NNZXNzYWdlKXtcbiAgICAgICAgLy8gbGV0IG5vZGUgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGk6bnRoLWxhc3Qtb2YtdHlwZSgxKVwiKTtcbiAgICAgICAgbGV0IExJTm9kZXMgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XG4gICAgICAgIGxldCBub2RlID0gTElOb2Rlc1tMSU5vZGVzLmxlbmd0aC0xXTtcbiAgICAgICAgaWYoIW5vZGUgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2dnZXItcHJvZ3Jlc3NcIikpe1xuICAgICAgICAgICAgLy9jcmVhdGUgbmV3IGVsXG4gICAgICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VyLXByb2dyZXNzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShwcm9jZXNzTWVzc2FnZSk7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSl7XG4gICAgICAgIGlmKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snbG9nJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMubG9nZ2VyRWwgfHwgIXRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQpe1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9ICdib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTsnOyAgICAgICBcbiAgICAgICAgbGV0IGpzb25Ob2RlID0gSnNvblZpZXcuSlNPTkRpc3BsYXkobWVzc2FnZSk7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBkZWJ1ZyhtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vbm8gc2hvdyBvbiB3ZWIgc2NyZWVuOyAgICAgICAgXG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2ViTm9kZU1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./src/MNIST.ImgDataset.js":
/*!*********************************!*\
  !*** ./src/MNIST.ImgDataset.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./baseImgDataset */ "./src/baseImgDataset.js"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! causal-net.log */ "../causality-log/dist/@causalNet/log.web.js"), __webpack_require__(/*! causal-net.storage */ "causal-net.storage"), __webpack_require__(/*! causal-net.memcache */ "causal-net.memcache"), __webpack_require__(/*! ./function */ "./src/function.js"), __webpack_require__(/*! ./imageDatasetFetch.mixins */ "./src/imageDatasetFetch.mixins.js"), __webpack_require__(/*! ./imageDatasetPreprocessing.mixins */ "./src/imageDatasetPreprocessing.mixins.js"), __webpack_require__(/*! ./imageDatasetGenerator.mixins */ "./src/imageDatasetGenerator.mixins.js"), __webpack_require__(/*! causal-net.preprocessing */ "causal-net.preprocessing")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _baseImgDataset, _causalNet, _causalNet2, _causalNet3, _causalNet4, _function, _imageDatasetFetch, _imageDatasetPreprocessing, _imageDatasetGenerator, _causalNet5) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _baseImgDataset = _interopRequireDefault(_baseImgDataset);
  _function = _interopRequireDefault(_function);
  _imageDatasetFetch = _interopRequireDefault(_imageDatasetFetch);
  _imageDatasetPreprocessing = _interopRequireDefault(_imageDatasetPreprocessing);
  _imageDatasetGenerator = _interopRequireDefault(_imageDatasetGenerator);

  class MnistDataset extends _causalNet.Platform.mixWith(_baseImgDataset.default, [_imageDatasetFetch.default, _imageDatasetPreprocessing.default, _causalNet5.PreprocessingMixins, _imageDatasetGenerator.default, _causalNet4.MemCacheMixins, _causalNet3.StorageMixins, _causalNet2.LoggerMixins]) {
    constructor(...args) {
      super(...args);
      this.F = new _function.default();
      this.Storage = _causalNet3.indexDBStorage;
      this.MemCache = _causalNet4.memDownCache;

      const PreprocessingSample = async (masterSampleBuffer, sampleSize) => {
        return await _causalNet5.imagePreprocessing.imageSplit(masterSampleBuffer, sampleSize);
      };

      const PreprocessingLabel = async (masterLabelBuffer, labelSize) => {
        return await _causalNet5.imagePreprocessing.imageSplit(masterLabelBuffer, labelSize);
      };

      this.setPreprocessingFunctions(PreprocessingSample, PreprocessingLabel);
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

/***/ "./src/imageDatasetFetch.mixins.js":
/*!*****************************************!*\
  !*** ./src/imageDatasetFetch.mixins.js ***!
  \*****************************************/
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

  const ImageDatasetFetchMixins = BaseImageClass => class extends BaseImageClass {
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

  var _default = ImageDatasetFetchMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/imageDatasetGenerator.mixins.js":
/*!*********************************************!*\
  !*** ./src/imageDatasetGenerator.mixins.js ***!
  \*********************************************/
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

  var _default = ImageDatasetGeneratorMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/imageDatasetPreprocessing.mixins.js":
/*!*************************************************!*\
  !*** ./src/imageDatasetPreprocessing.mixins.js ***!
  \*************************************************/
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

      let duplexer = _causalNet.Stream.makeDuplex(WriteFn);

      let transformer = _causalNet.Stream.makeTransform(TransformFn);

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

  var _default = ImageDatasetPreprocessingMixins;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uLi9jYXVzYWxpdHktbG9nL2Rpc3QvQGNhdXNhbE5ldC9sb2cud2ViLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvTU5JU1QuSW1nRGF0YXNldC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2Jhc2VJbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9pbWFnZURhdGFzZXRGZXRjaC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9pbWFnZURhdGFzZXRHZW5lcmF0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvaW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIk1uaXN0RGF0YXNldCIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VJbWdEYXRhc2V0IiwiSW1hZ2VEYXRhc2V0RmV0Y2hNaXhpbnMiLCJJbWFnZURhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ01peGlucyIsIkltYWdlRGF0YXNldEdlbmVyYXRvck1peGlucyIsIk1lbUNhY2hlTWl4aW5zIiwiU3RvcmFnZU1peGlucyIsIkxvZ2dlck1peGlucyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIkYiLCJGdW5jdGlvbiIsIlN0b3JhZ2UiLCJpbmRleERCU3RvcmFnZSIsIk1lbUNhY2hlIiwibWVtRG93bkNhY2hlIiwiUHJlcHJvY2Vzc2luZ1NhbXBsZSIsIm1hc3RlclNhbXBsZUJ1ZmZlciIsInNhbXBsZVNpemUiLCJpbWFnZVByZXByb2Nlc3NpbmciLCJpbWFnZVNwbGl0IiwiUHJlcHJvY2Vzc2luZ0xhYmVsIiwibWFzdGVyTGFiZWxCdWZmZXIiLCJsYWJlbFNpemUiLCJzZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zIiwiZGF0YXNldENvbmZpZ3VyZSIsImNvbmZpZ3VyYXRpb24iLCJudW1TYW1wbGVzIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwibnVtQ2xhc3MiLCJzdW1tYXJ5IiwiQmFzZUZ1bmN0aW9uIiwiRnVuY3Rpb25NaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImdldEltZ0J1ZmZlclNpemUiLCJpbWdTaXplIiwiUiIsInJlZHVjZSIsInMiLCJkIiwiZ2VuZXJhdG9yV2l0aEluZGV4IiwiaXRlbXMiLCJhZGRJbmRleCIsIm1hcCIsImlkeCIsInNwbGl0VHJhaW5UZXN0U2V0Iiwic3BsaXRJbmRleCIsInNwbGl0QXQiLCJCYXNlSW1hZ2VDbGFzcyIsImZldGNoTGFiZWxDaHVuayIsInNhdmVEaXIiLCJsYWJlbENodW5rIiwibGFiZWxDaHVua1VybCIsImRhdGFzZXRVcmwiLCJsYWJlbFNhdmVQYXRoIiwic3RvcmFnZSIsImZldGNoRmlsZSIsImZldGNoU2FtcGxlQ2h1bmsiLCJzYW1wbGVDaHVuayIsInNhbXBsZUNodW5rVXJsIiwic2FtbXBsZVNhdmVQYXRoIiwibG9nZ2VyIiwiZGVidWciLCJmZXRjaFBOR0ZpbGUiLCJzZWxlY3RDaHVua3MiLCJudW1jaHVua3MiLCJzZWxlY3RCeSIsImNodW5rSWR4cyIsIlNhbXBsaW5nIiwiY2hvaWNlIiwiY2h1bmtMaXN0IiwiaXRoIiwiZmV0Y2hEYXRhc2V0Iiwic2VsZWN0ZWRDaHVua3MiLCJzYXZlZENodW5rcyIsInNhbXBsZVBhdGgiLCJsYWJlbFBhdGgiLCJwdXNoIiwicHJvZ3Jlc3MiLCJzYXZlQ2h1bmtzIiwidW56aXAiLCJnZXRUcmFpblRlc3RTZXQiLCJ0cmFpblNpemUiLCJwYXJzZUludCIsInNhdmVkUHJlcHJvY2Vzc2luZyIsImxlbmd0aCIsInRyYWluU2V0IiwidGVzdFNldCIsIm1ha2VTYW1wbGVHZW5lcmF0b3IiLCJzYW1wbGVJZHhTZXQiLCJiYXRjaFNpemUiLCJzdGFydCIsImVuZCIsIkVycm9yIiwiX2JhdGNoZXMiLCJoc3BsaXRFdmVyeSIsImJhdGNoZXMiLCJuZXh0SW5kZXgiLCJpdGVyYXRpb25Db3VudCIsInN0ZXAiLCJiYXRjaEdlbmVyYXRvciIsIm5leHQiLCJiYXRjaFNhbXBsZXMiLCJiYXRjaExhYmVscyIsInNhbXBsZUl0ZW0iLCJwcmVQcm9jZXNzaW5nU3RvcmFnZSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJkYXRhIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbSIsIkltYWdlQnVmZmVyU2l6ZSIsIkxhYmVsQnVmZmVyU2l6ZSIsImltYWdlQnVmZmVyU2l6ZSIsImxhYmVsQnVmZmVyU2l6ZSIsIlRyYW5zZm9ybUZuIiwiY2h1bmsiLCJjaHVua0VuY29kaW5nIiwiYWZ0ZXJUcmFuc2Zvcm1GbiIsIlRyYW5zZm9ybUFzeW5jIiwic2FtcGxlQnVmZmVyIiwic2FtcGxlIiwibGFiZWxCdWZmZXIiLCJsYWJlbCIsInByZXByb2Nlc3NlZEltZ0J1ZmZlciIsIlByZXByb2Nlc3NpbmdTYW1wbGVGbiIsInByZXByb2Nlc3NlZExhYmVsQnVmZmVyIiwiUHJlcHJvY2Vzc2luZ0xhYmVsRm4iLCJwcm9jZXNzZWRDaHVuayIsInppcCIsImNodW5rSWR4IiwidGhlbiIsIldyaXRlRm4iLCJjYWxsYmFjayIsIldyaXRlQXN5bmMiLCJnZW5lcmF0b3IiLCJjaHVua1NhbXBsZVBhdGgiLCJzZXRJdGVtIiwiY2h1bmtMYWJlbFBhdGgiLCJwcmVwcm9jZXNzaW5nIiwicmVzdWx0IiwiZHVwbGV4ZXIiLCJTdHJlYW0iLCJtYWtlRHVwbGV4IiwidHJhbnNmb3JtZXIiLCJtYWtlVHJhbnNmb3JtIiwic3RyZWFtIiwicGlwZSIsInByZXByb2Nlc3NpbmdEYXRhc2V0Iiwic3RvcmVJbk1lbW9yeSIsIm1lbUNhY2hlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0Es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Q0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxNQUFNLFlBQVk7QUFDckIsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFTRTtBQUFULFNBQWxCO0FBQ0F1QixjQUFNLENBQUN0RSxJQUFQLENBQVk7QUFBQ2pDLGFBQUQ7QUFBTThFLGdCQUFOO0FBQWNFO0FBQWQsU0FBWjtBQUNIOztBQUNEdUIsWUFBTSxDQUFDdEUsSUFBUCxDQUFZLElBQVo7QUFDQSxhQUFPLElBQUkyRSxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQW1CO0FBQ2xDUCxjQUFNLENBQUNRLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLE1BQUk7QUFDcEJGLGlCQUFPLENBQUMsS0FBS3JFLGtCQUFOLENBQVA7QUFDSCxTQUZEO0FBR0gsT0FKTSxDQUFQO0FBS0g7O0FBekVrRixHQUF2Rjs7aUJBMkVlbkYsK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RWYsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kYXRhc2V0cy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5tZW1jYWNoZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9iYXNlTG9nLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvYmFzZUxvZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICBjbGFzcyBCYXNlTG9nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuQWNjZXB0ZWRMZXZlbHMgPSB7XG4gICAgICAgIGRlYnVnOiAwLFxuICAgICAgICBsb2c6IDEsXG4gICAgICAgIHdhcm5pbmc6IDIsXG4gICAgICAgIGVycm9yOiAzXG4gICAgICB9O1xuICAgICAgdGhpcy5yQWNjZXB0ZWRMZXZlbHMgPSB7XG4gICAgICAgIDA6ICdkZWJ1ZycsXG4gICAgICAgIDE6ICdsb2cnLFxuICAgICAgICAyOiAnd2FybmluZycsXG4gICAgICAgIDM6ICdlcnJvcidcbiAgICAgIH07XG4gICAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXTtcbiAgICB9XG5cbiAgICBzZXQgTGV2ZWwobGV2ZWwpIHtcbiAgICAgIGlmICh0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKGAke2xldmVsfSBtdXN0IGJlIG9uZSBvZiAke09iamVjdC5rZXlzKHRoaXMuQWNjZXB0ZWRMZXZlbHMpfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBMZXZlbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJBY2NlcHRlZExldmVsc1t0aGlzLmxldmVsXTtcbiAgICB9XG5cbiAgfVxuXG4gIF9leHBvcnRzLmRlZmF1bHQgPSBCYXNlTG9nO1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGVybUxvZyAqLyBcIi4vc3JjL3Rlcm1Mb2cuanNcIiksIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYmFzZUxvZyAqLyBcIi4vc3JjL2Jhc2VMb2cuanNcIiksIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbG9nZ2VyLm1peGlucyAqLyBcIi4vc3JjL2xvZ2dlci5taXhpbnMuanNcIildLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzLCBfdGVybUxvZywgX2Jhc2VMb2csIF9sb2dnZXIpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiKTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJ0ZXJtTG9nZ2VyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90ZXJtTG9nLmRlZmF1bHQ7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIkJhc2VMb2dcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2Jhc2VMb2cuZGVmYXVsdDtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiTG9nZ2VyTWl4aW5zXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9sb2dnZXIuZGVmYXVsdDtcbiAgICB9XG4gIH0pO1xuICBfdGVybUxvZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rlcm1Mb2cpO1xuICBfYmFzZUxvZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jhc2VMb2cpO1xuICBfbG9nZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9nZ2VyKTtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9sb2dnZXIubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbG9nZ2VyLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICBjb25zdCBMb2dnZXJNaXhpbnMgPSBCYXNlZENsYXNzID0+IGNsYXNzIGV4dGVuZHMgQmFzZWRDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3MocHJvZ3Jlc3NNZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sb2dnZXIucHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIucHJvZ3Jlc3MocHJvZ3Jlc3NNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgTG9nZ2VyKGxvZ2dlcikge1xuICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgfVxuXG4gICAgZ2V0IExvZ2dlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvZ2dlcjtcbiAgICB9XG5cbiAgfTtcblxuICB2YXIgX2RlZmF1bHQgPSBMb2dnZXJNaXhpbnM7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wcmV0dHlKc29uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcHJldHR5SnNvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICAvLyBvcmlnaW4gY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWN5Z2lsYmVydC9qc29uLWRpc3BsYXkvYmxvYi9tYXN0ZXIvanNvbi1kaXNwbGF5LmpzXG4gIC8vIENvcHlyaWdodCAoYykgMjAxNyBMdWN5IEdpbGJlcnRcbiAgY2xhc3MgSnNvblZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHN0YXRpYyBKU09ORGlzcGxheShqc29uLCBvcGVuTGV2ZWxzQXJnLCBzdHlsZU9wdGlvbnNBcmcpIHtcbiAgICAgIHZhciBERUZBVUxUX1NUWUxFX09QVElPTlMgPSB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICB0YWc6ICdwcmUnLFxuICAgICAgICAgIHN0eWxlOiAncGFkZGluZzogNXB4OyBmb250LXNpemU6IDFyZW07J1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZUNvbnRhaW5lcjoge1xuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgc3R5bGU6ICdtYXJnaW4tYm90dG9tOiAzcHg7J1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyOydcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGVUZXh0OiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5CdXR0b246IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luOiAwcHggN3B4IDBweCAycHg7IGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgJyArICdib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7J1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50c0NvbnRhaW5lcjoge1xuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgc3R5bGU6ICdwYWRkaW5nLWxlZnQ6IDE4cHg7J1xuICAgICAgICB9LFxuICAgICAgICBrZXlWYWx1ZVBhaXI6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAycHg7J1xuICAgICAgICB9LFxuICAgICAgICBrZXk6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBkYXJrYmx1ZTsnXG4gICAgICAgIH0sXG4gICAgICAgIHN5bWJvbFZhbHVlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjb2xvcjogZGFya2dyZWVuOydcbiAgICAgICAgfSxcbiAgICAgICAgc3RyaW5nVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBjcmltc29uOydcbiAgICAgICAgfSxcbiAgICAgICAgbnVtYmVyVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBibHVlOydcbiAgICAgICAgfSxcbiAgICAgICAgYm9vbGVhblZhbHVlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjb2xvcjogYmx1ZTsnXG4gICAgICAgIH0sXG4gICAgICAgIG51bGxWYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGJsdWU7J1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIG9wZW5MZXZlbHMgPSBpc05hTihwYXJzZUludChvcGVuTGV2ZWxzQXJnKSkgPyBJbmZpbml0eSA6IHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpO1xuICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHR5cGVvZiBzdHlsZU9wdGlvbnNBcmcgPT09ICdvYmplY3QnID8gbWVyZ2VTdHlsZU9wdGlvbnMoREVGQVVMVF9TVFlMRV9PUFRJT05TLCBzdHlsZU9wdGlvbnNBcmcpIDogREVGQVVMVF9TVFlMRV9PUFRJT05TO1xuXG4gICAgICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG5cbiAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5yb290LnRhZyk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5yb290LnN0eWxlO1xuXG4gICAgICAgIGlmIChqc29uID09PSBudWxsIHx8IGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciB2b2lkRWxlbWVudCA9IGdldFZhbHVlKG51bGwpO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodm9pZEVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGpzb24gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgdmFyIGRhdGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbi50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGVFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB2YXIgbm9uRXhwYW5kYWJsZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uKTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vbkV4cGFuZGFibGVFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdGl0bGUgPSBBcnJheS5pc0FycmF5KGpzb24pID8gJ0FycmF5WycgKyBqc29uLmxlbmd0aCArICddJyA6ICdPYmplY3QnO1xuICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IG9wZW5MZXZlbHMgPCAxO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUodGl0bGUsIG51bGwsIHRoaXNMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCBpbmRleCkge1xuICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBpbmRleCA+IG9wZW5MZXZlbHM7XG4gICAgICAgIHZhciBuZXh0TGV2ZWxJc0Nsb3NlZCA9IGluZGV4ICsgMSA+IG9wZW5MZXZlbHM7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250ZW50c0NvbnRhaW5lcih0aGlzTGV2ZWxJc0Nsb3NlZCk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uW2tleV0pKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ0FycmF5WycgKyBqc29uW2tleV0ubGVuZ3RoICsgJ10nLCBrZXksIG5leHRMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gPT09IG51bGwgfHwganNvbltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBudWxsKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldLnRvSVNPU3RyaW5nKCkpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ09iamVjdCcsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoanNvbikuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKHN5bWJvbC50b1N0cmluZygpLCBqc29uW3N5bWJvbF0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFRpdGxlKHRpdGxlVGV4dCwgb3B0aW9uYWxLZXksIGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRseUNsb3NlZCA9IGxldmVsSXNDbG9zZWQ7XG4gICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIudGFnKTtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnN0eWxlO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgICAgIHZhciB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlVGV4dC50YWcpO1xuICAgICAgICB2YXIgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGUudGFnKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGUuc3R5bGU7XG4gICAgICAgIHRleHRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnN0eWxlO1xuICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSk7XG5cbiAgICAgICAgaWYgKG9wdGlvbmFsS2V5KSB7XG4gICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KG9wdGlvbmFsS2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZVRleHQpKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcblxuICAgICAgICB0aXRsZUVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgb3BlbkJ1dHRvbiA9IHRpdGxlRWxlbWVudC5maXJzdENoaWxkO1xuICAgICAgICAgIHZhciBvYmplY3RDb250ZW50cyA9IHRpdGxlRWxlbWVudC5wYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgIG9iamVjdENvbnRlbnRzLnN0eWxlLmRpc3BsYXkgPSBjdXJyZW50bHlDbG9zZWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICAgIG9wZW5CdXR0b24uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudGx5Q2xvc2VkID8gJ3JvdGF0ZSg5MGRlZyknIDogJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgICAgY3VycmVudGx5Q2xvc2VkID0gIWN1cnJlbnRseUNsb3NlZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnRhZyk7XG4gICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnN0eWxlO1xuICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGxldmVsSXNDbG9zZWQgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgcmV0dXJuIGJ1dHRvbkVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldENvbnRlbnRzQ29udGFpbmVyKGlzQ2xvc2VkKSB7XG4gICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIudGFnKTtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICdjb250ZW50c0NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIuc3R5bGU7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzQ2xvc2VkID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFN0YW5kYXJkUGFpcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBwYWlyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci50YWcpO1xuICAgICAgICBwYWlyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci5zdHlsZTtcbiAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KGtleSkpO1xuICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICByZXR1cm4gcGFpckVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldEtleShuYW1lKSB7XG4gICAgICAgIHZhciBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5LnRhZyk7XG4gICAgICAgIGtleUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXkuc3R5bGU7XG4gICAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSArICc6ICcpKTtcbiAgICAgICAgcmV0dXJuIGtleUVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgIHZhciBudWxsVHlwZSA9ICdvYmplY3QnO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS50YWcpO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1wiJyArIHZhbHVlICsgJ1wiJykpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBudWxsVHlwZTpcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bGxWYWx1ZS50YWcpO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZUVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG1lcmdlU3R5bGVPcHRpb25zKGRlZmF1bHRzLCBvdmVycmlkZXMpIHtcbiAgICAgICAgdmFyIG1lcmdlZCA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgIG1lcmdlZFtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbmRlcigpO1xuICAgIH1cblxuICB9XG5cbiAgX2V4cG9ydHMuZGVmYXVsdCA9IEpzb25WaWV3O1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3Rlcm1Mb2cuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90ZXJtTG9nLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlTG9nICovIFwiLi9zcmMvYmFzZUxvZy5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXJtTG9nLm1peGlucy5ub2RlICovIFwiLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXJtTG9nLm1peGlucy53ZWIgKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanNcIiksIF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gIH0gZWxzZSB7IHZhciBtb2Q7IH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChfZXhwb3J0cywgX2Jhc2VMb2csIF90ZXJtTG9nTWl4aW5zLCBfdGVybUxvZ01peGluczIsIF9jYXVzYWxOZXQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiKTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gIF9iYXNlTG9nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFzZUxvZyk7XG4gIF90ZXJtTG9nTWl4aW5zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVybUxvZ01peGlucyk7XG4gIF90ZXJtTG9nTWl4aW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rlcm1Mb2dNaXhpbnMyKTtcblxuICBjbGFzcyBUZXJtTG9nIGV4dGVuZHMgX2NhdXNhbE5ldC5QbGF0Zm9ybS5taXhXaXRoKF9iYXNlTG9nLmRlZmF1bHQsIHtcbiAgICAnbm9kZSc6IFtfdGVybUxvZ01peGlucy5kZWZhdWx0XSxcbiAgICAnd2ViJzogW190ZXJtTG9nTWl4aW5zMi5kZWZhdWx0XVxuICB9KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgIH1cblxuICB9XG5cbiAgdmFyIF9kZWZhdWx0ID0gbmV3IFRlcm1Mb2coKTtcblxuICBfZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2cubWl4aW5zLm5vZGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtleHBvcnRzXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gIH0gZWxzZSB7IHZhciBtb2Q7IH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChfZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbiAgY29uc3QgTG9nTm9kZU1peGlucyA9IExvZ0NsYXNzID0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3Mge1xuICAgIGNvbm5lY3QoY2hhbm5lbCkgey8vbm90aGluZ1xuICAgIH1cblxuICAgIGxvZyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2UpIHsvL1RPRE86IGltcGxlbWVudCBwcm9ncmVzcyBzaG93XG4gICAgfVxuXG4gICAgZGVidWcobWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgfTtcblxuICB2YXIgX2RlZmF1bHQgPSBMb2dOb2RlTWl4aW5zO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZy5taXhpbnMud2ViLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJldHR5SnNvbiAqLyBcIi4vc3JjL3ByZXR0eUpzb24uanNcIildLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzLCBfcHJldHR5SnNvbikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgX3ByZXR0eUpzb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmV0dHlKc29uKTtcblxuICBjb25zdCBXZWJOb2RlTWl4aW5zID0gTG9nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzcyB7XG4gICAgY29ubmVjdChkb2N1bWVudEVsID0gbnVsbCkge1xuICAgICAgZG9jdW1lbnRFbCA9IGRvY3VtZW50RWwgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gXCJsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XCI7XG4gICAgICBkb2N1bWVudEVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgdGhpcy5mcmFtZUVsID0gZG9jdW1lbnRFbDtcbiAgICAgIHRoaXMubG9nZ2VyRWwgPSBkb2N1bWVudEVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIilbMF07XG4gICAgfVxuXG4gICAgc2Nyb2xsQm90dG9tKGVsZW1lbnQgPSBudWxsKSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLmZyYW1lRWw7XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2UpIHtcbiAgICAgIC8vIGxldCBub2RlID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpOm50aC1sYXN0LW9mLXR5cGUoMSlcIik7XG4gICAgICBsZXQgTElOb2RlcyA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKTtcbiAgICAgIGxldCBub2RlID0gTElOb2Rlc1tMSU5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIW5vZGUgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2dnZXItcHJvZ3Jlc3NcIikpIHtcbiAgICAgICAgLy9jcmVhdGUgbmV3IGVsXG4gICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImxvZ2dlci1wcm9ncmVzc1wiKTtcbiAgICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGpzb25Ob2RlID0gX3ByZXR0eUpzb24uZGVmYXVsdC5KU09ORGlzcGxheShwcm9jZXNzTWVzc2FnZSk7XG5cbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgIH1cblxuICAgIGxvZyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmxvZ2dlckVsIHx8ICF0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9ICdib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTsnO1xuXG4gICAgICBsZXQganNvbk5vZGUgPSBfcHJldHR5SnNvbi5kZWZhdWx0LkpTT05EaXNwbGF5KG1lc3NhZ2UpO1xuXG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSAvL25vIHNob3cgb24gd2ViIHNjcmVlbjsgICAgICAgIFxuXG5cbiAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxuXG4gIH07XG5cbiAgdmFyIF9kZWZhdWx0ID0gV2ViTm9kZU1peGlucztcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyAwOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBtdWx0aSAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3JjL2luZGV4LmpzICovXCIuL3NyYy9pbmRleC5qc1wiKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXztcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk5M1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdlFHSmhZbVZzTDNKMWJuUnBiV1V2YUdWc2NHVnljeTlwYm5SbGNtOXdVbVZ4ZFdseVpVUmxabUYxYkhRdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5c2IyY3ZMaTl6Y21NdlltRnpaVXh2Wnk1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OHVMM055WXk5c2IyZG5aWEl1YldsNGFXNXpMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiRzluTHk0dmMzSmpMM0J5WlhSMGVVcHpiMjR1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdkxpOXpjbU12ZEdWeWJVeHZaeTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk4dUwzTnlZeTkwWlhKdFRHOW5MbTFwZUdsdWN5NXViMlJsTG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2Ykc5bkx5NHZjM0pqTDNSbGNtMU1iMmN1YldsNGFXNXpMbmRsWWk1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OWxlSFJsY201aGJDQmNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaUpkTENKdVlXMWxjeUk2V3lKQ1lYTmxURzluSWl3aVkyOXVjM1J5ZFdOMGIzSWlMQ0pCWTJObGNIUmxaRXhsZG1Wc2N5SXNJbVJsWW5Wbklpd2liRzluSWl3aWQyRnlibWx1WnlJc0ltVnljbTl5SWl3aWNrRmpZMlZ3ZEdWa1RHVjJaV3h6SWl3aWJHVjJaV3dpTENKTVpYWmxiQ0lzSW5WdVpHVm1hVzVsWkNJc0lrVnljbTl5SWl3aVQySnFaV04wSWl3aWEyVjVjeUlzSWt4dloyZGxjazFwZUdsdWN5SXNJa0poYzJWa1EyeGhjM01pTENKaGNtZHpJaXdpYkc5bloyVnlJaXdpWTI5dWMyOXNaU0lzSW5CeWIyZHlaWE56SWl3aWNISnZaM0psYzNOTlpYTnpZV2RsSWl3aVRHOW5aMlZ5SWl3aVNuTnZibFpwWlhjaUxDSktVMDlPUkdsemNHeGhlU0lzSW1wemIyNGlMQ0p2Y0dWdVRHVjJaV3h6UVhKbklpd2ljM1I1YkdWUGNIUnBiMjV6UVhKbklpd2lSRVZHUVZWTVZGOVRWRmxNUlY5UFVGUkpUMDVUSWl3aWNtOXZkQ0lzSW5SaFp5SXNJbk4wZVd4bElpd2lkR2wwYkdWRGIyNTBZV2x1WlhJaUxDSjBhWFJzWlNJc0luUnBkR3hsVkdWNGRDSXNJbTl3Wlc1Q2RYUjBiMjRpTENKamIyNTBaVzUwYzBOdmJuUmhhVzVsY2lJc0ltdGxlVlpoYkhWbFVHRnBjaUlzSW10bGVTSXNJbk41YldKdmJGWmhiSFZsSWl3aWMzUnlhVzVuVm1Gc2RXVWlMQ0p1ZFcxaVpYSldZV3gxWlNJc0ltSnZiMnhsWVc1V1lXeDFaU0lzSW01MWJHeFdZV3gxWlNJc0ltOXdaVzVNWlhabGJITWlMQ0pwYzA1aFRpSXNJbkJoY25ObFNXNTBJaXdpU1c1bWFXNXBkSGtpTENKemRIbHNaVTl3ZEdsdmJuTWlMQ0p0WlhKblpWTjBlV3hsVDNCMGFXOXVjeUlzSW1GemMybG5iaUlzSW5SaGNtZGxkQ0lzSWxSNWNHVkZjbkp2Y2lJc0luUnZJaXdpYVc1a1pYZ2lMQ0poY21kMWJXVnVkSE1pTENKc1pXNW5kR2dpTENKdVpYaDBVMjkxY21ObElpd2libVY0ZEV0bGVTSXNJbkJ5YjNSdmRIbHdaU0lzSW1oaGMwOTNibEJ5YjNCbGNuUjVJaXdpWTJGc2JDSXNJbkpsYm1SbGNpSXNJbVZzWlcxbGJuUWlMQ0prYjJOMWJXVnVkQ0lzSW1OeVpXRjBaVVZzWlcxbGJuUWlMQ0pqYzNOVVpYaDBJaXdpZG05cFpFVnNaVzFsYm5RaUxDSm5aWFJXWVd4MVpTSXNJbUZ3Y0dWdVpFTm9hV3hrSWl3aVJHRjBaU0lzSW1SaGRHVkZiR1Z0Wlc1MElpd2lkRzlKVTA5VGRISnBibWNpTENKdWIyNUZlSEJoYm1SaFlteGxSV3hsYldWdWRDSXNJa0Z5Y21GNUlpd2lhWE5CY25KaGVTSXNJblJvYVhOTVpYWmxiRWx6UTJ4dmMyVmtJaXdpWjJWMFZHbDBiR1VpTENKamIyNTJaWEowU25OdmJsUnZSV3hsYldWdWRITWlMQ0p1WlhoMFRHVjJaV3hKYzBOc2IzTmxaQ0lzSW1OdmJuUmhhVzVsY2lJc0ltZGxkRU52Ym5SbGJuUnpRMjl1ZEdGcGJtVnlJaXdpWjJWMFUzUmhibVJoY21SUVlXbHlJaXdpWjJWMFQzZHVVSEp2Y0dWeWRIbFRlVzFpYjJ4eklpd2labTl5UldGamFDSXNJbk41YldKdmJDSXNJblJ2VTNSeWFXNW5JaXdpYjNCMGFXOXVZV3hMWlhraUxDSnNaWFpsYkVselEyeHZjMlZrSWl3aVkzVnljbVZ1ZEd4NVEyeHZjMlZrSWl3aVkyOXVkR0ZwYm1WeVJXeGxiV1Z1ZENJc0luTmxkRUYwZEhKcFluVjBaU0lzSW5SbGVIUkZiR1Z0Wlc1MElpd2lkR2wwYkdWRmJHVnRaVzUwSWl3aVoyVjBUM0JsYmtKMWRIUnZiaUlzSW1kbGRFdGxlU0lzSW1OeVpXRjBaVlJsZUhST2IyUmxJaXdpYjI1amJHbGpheUlzSW1acGNuTjBRMmhwYkdRaUxDSnZZbXBsWTNSRGIyNTBaVzUwY3lJc0luQmhjbVZ1ZEU1dlpHVWlMQ0p1WlhoMFUybGliR2x1WnlJc0ltUnBjM0JzWVhraUxDSjBjbUZ1YzJadmNtMGlMQ0ppZFhSMGIyNUZiR1Z0Wlc1MElpd2lhWE5EYkc5elpXUWlMQ0oyWVd4MVpTSXNJbkJoYVhKRmJHVnRaVzUwSWl3aWJtRnRaU0lzSW10bGVVVnNaVzFsYm5RaUxDSjJZV3gxWlVWc1pXMWxiblFpTENKdWRXeHNWSGx3WlNJc0ltUmxabUYxYkhSeklpd2liM1psY25KcFpHVnpJaXdpYldWeVoyVmtJaXdpVkdWeWJVeHZaeUlzSWxCc1lYUm1iM0p0SWl3aWJXbDRWMmwwYUNJc0lreHZaMDV2WkdWTmFYaHBibk1pTENKWFpXSk9iMlJsVFdsNGFXNXpJaXdpVEc5blEyeGhjM01pTENKamIyNXVaV04wSWl3aVkyaGhibTVsYkNJc0ltMWxjM05oWjJVaUxDSndjbTlqWlhOelRXVnpjMkZuWlNJc0ltUnZZM1Z0Wlc1MFJXd2lMQ0ppYjJSNUlpd2libTlrWlNJc0ltWnlZVzFsUld3aUxDSnNiMmRuWlhKRmJDSXNJbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsSWl3aWMyTnliMnhzUW05MGRHOXRJaXdpYzJOeWIyeHNWRzl3SWl3aWMyTnliMnhzU0dWcFoyaDBJaXdpWTJ4cFpXNTBTR1ZwWjJoMElpd2lURWxPYjJSbGN5SXNJbU5zWVhOelRHbHpkQ0lzSW1OdmJuUmhhVzV6SWl3aVlXUmtJaXdpYW5OdmJrNXZaR1VpTENKa1lYUmxJaXdpYVc1dVpYSklWRTFNSWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRc1R6dEJRMVpCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMFJCUVRCRExHZERRVUZuUXp0QlFVTXhSVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RGUVVGM1JDeHJRa0ZCYTBJN1FVRkRNVVU3UVVGRFFTeDVSRUZCYVVRc1kwRkJZenRCUVVNdlJEczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVUkJRWGxETEdsRFFVRnBRenRCUVVNeFJTeDNTRUZCWjBnc2JVSkJRVzFDTEVWQlFVVTdRVUZEY2trN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFEwRkJNa0lzTUVKQlFUQkNMRVZCUVVVN1FVRkRka1FzZVVOQlFXbERMR1ZCUVdVN1FVRkRhRVE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc09FUkJRWE5FTEN0RVFVRXJSRHM3UVVGRmNrZzdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdPenM3T3pzN096czdPMEZEYkVaQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2QwTTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRUbVVzVVVGQlRVRXNUMEZCVGl4RFFVRmhPMEZCUTNoQ1F5eGxRVUZYTEVkQlFVVTdRVUZEVkN4WFFVRkxReXhqUVVGTUxFZEJRWE5DTzBGQlFVTkRMR0ZCUVVzc1JVRkJSU3hEUVVGU08wRkJRVmRETEZkQlFVY3NSVUZCUXl4RFFVRm1PMEZCUVd0Q1F5eGxRVUZQTEVWQlFVTXNRMEZCTVVJN1FVRkJOa0pETEdGQlFVc3NSVUZCUlR0QlFVRndReXhQUVVGMFFqdEJRVU5CTEZkQlFVdERMR1ZCUVV3c1IwRkJkVUk3UVVGQlF5eFhRVUZGTEU5QlFVZzdRVUZCV1N4WFFVRkhMRXRCUVdZN1FVRkJjMElzVjBGQlJ5eFRRVUY2UWp0QlFVRnZReXhYUVVGSE8wRkJRWFpETEU5QlFYWkNPMEZCUTBFc1YwRkJTME1zUzBGQlRDeEhRVUZoTEV0QlFVdE9MR05CUVV3c1EwRkJiMElzVDBGQmNFSXNRMEZCWWp0QlFVTklPenRCUVVORUxGRkJRVWxQTEV0QlFVb3NRMEZCVlVRc1MwRkJWaXhGUVVGblFqdEJRVU5hTEZWQlFVY3NTMEZCUzA0c1kwRkJUQ3hEUVVGdlFrMHNTMEZCY0VJc1RVRkJOa0pGTEZOQlFXaERMRVZCUVRCRE8wRkJRM1JETEdGQlFVdEdMRXRCUVV3c1IwRkJZU3hMUVVGTFRpeGpRVUZNTEVOQlFXOUNUU3hMUVVGd1FpeERRVUZpTzBGQlEwZ3NUMEZHUkN4TlFVZEpPMEZCUTBFc1kwRkJUVWNzUzBGQlN5eERRVUZGTEVkQlFVVklMRXRCUVUwc2JVSkJRV3RDU1N4TlFVRk5MRU5CUVVORExFbEJRVkFzUTBGQldTeExRVUZMV0N4alFVRnFRaXhEUVVGcFF5eEZRVUUzUkN4RFFVRllPMEZCUTBnN1FVRkRTanM3UVVGRFJDeFJRVUZKVHl4TFFVRktMRWRCUVZjN1FVRkRVQ3hoUVVGUExFdEJRVXRHTEdWQlFVd3NRMEZCY1VJc1MwRkJTME1zUzBGQk1VSXNRMEZCVUR0QlFVTklPenRCUVdoQ2RVSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVOQk5VSXNVVUZCVFUwc1dVRkJXU3hIUVVGSlF5eFZRVUZFTEVsQlFXVXNZMEZCWTBFc1ZVRkJaQ3hEUVVGM1FqdEJRVU40UkdRc1pVRkJWeXhEUVVGRExFZEJRVWRsTEVsQlFVb3NSVUZCVXp0QlFVTm9RaXhaUVVGTkxFZEJRVWRCTEVsQlFWUTdRVUZEUVN4WFFVRkxReXhOUVVGTUxFZEJRV05ETEU5QlFXUTdRVUZEU0RzN1FVRkRSRU1zV1VGQlVTeERRVUZEUXl4bFFVRkVMRVZCUVdsQ08wRkJRM0pDTEZWQlFVY3NTMEZCUzBnc1RVRkJUQ3hEUVVGWlJTeFJRVUZtTEVWQlFYZENPMEZCUTNCQ0xHRkJRVXRHTEUxQlFVd3NRMEZCV1VVc1VVRkJXaXhEUVVGeFFrTXNaVUZCY2tJN1FVRkRTRHRCUVVOS096dEJRVU5FTEZGQlFVbERMRTFCUVVvc1EwRkJWMG9zVFVGQldDeEZRVUZyUWp0QlFVTmtMRmRCUVV0QkxFMUJRVXdzUjBGQlkwRXNUVUZCWkR0QlFVTklPenRCUVVWRUxGRkJRVWxKTEUxQlFVb3NSMEZCV1R0QlFVTlNMR0ZCUVU4c1MwRkJTMG9zVFVGQldqdEJRVU5JT3p0QlFXaENkVVFzUjBGQk5VUTdPMmxDUVcxQ1pVZ3NXVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTI1Q1pqdEJRVU5CTzBGQlEyVXNVVUZCVFZFc1VVRkJUaXhEUVVGak8wRkJRM3BDY2tJc1pVRkJWeXhIUVVGRkxFTkJRMW83TzBGQlEwUXNWMEZCVDNOQ0xGZEJRVkFzUTBGQmJVSkRMRWxCUVc1Q0xFVkJRWGxDUXl4aFFVRjZRaXhGUVVGM1EwTXNaVUZCZUVNc1JVRkJlVVE3UVVGRGNrUXNWVUZCU1VNc2NVSkJRWEZDTEVkQlFVYzdRVUZETVVKRExGbEJRVWtzUlVGQlJUdEJRVUZGUXl4aFFVRkhMRVZCUVVVc1MwRkJVRHRCUVVGalF5eGxRVUZMTEVWQlFVVTdRVUZCY2tJc1UwRkViMEk3UVVGRk1VSkRMSE5DUVVGakxFVkJRVVU3UVVGQlJVWXNZVUZCUnl4RlFVRkZMRXRCUVZBN1FVRkJZME1zWlVGQlN5eEZRVUZGTzBGQlFYSkNMRk5CUmxVN1FVRkhNVUpGTEdGQlFVc3NSVUZCUlR0QlFVRkZTQ3hoUVVGSExFVkJRVVVzVFVGQlVEdEJRVUZsUXl4bFFVRkxMRVZCUVVVN1FVRkJkRUlzVTBGSWJVSTdRVUZKTVVKSExHbENRVUZUTEVWQlFVVTdRVUZCUlVvc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ0xGTkJTbVU3UVVGTE1VSkpMR3RDUVVGVkxFVkJRVVU3UVVGRFZrd3NZVUZCUnl4RlFVRkZMRTFCUkVzN1FVRkZWa01zWlVGQlN5eEZRVUZGTEhkR1FVTkJPMEZCU0Vjc1UwRk1ZenRCUVZVeFFrc3NlVUpCUVdsQ0xFVkJRVVU3UVVGQlJVNHNZVUZCUnl4RlFVRkZMRXRCUVZBN1FVRkJZME1zWlVGQlN5eEZRVUZGTzBGQlFYSkNMRk5CVms4N1FVRlhNVUpOTEc5Q1FVRlpMRVZCUVVVN1FVRkJSVkFzWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTEZOQldGazdRVUZaTVVKUExGZEJRVWNzUlVGQlJUdEJRVUZGVWl4aFFVRkhMRVZCUVVVc1RVRkJVRHRCUVVGbFF5eGxRVUZMTEVWQlFVVTdRVUZCZEVJc1UwRmFjVUk3UVVGaE1VSlJMRzFDUVVGWExFVkJRVVU3UVVGQlJWUXNZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNMRk5CWW1FN1FVRmpNVUpUTEcxQ1FVRlhMRVZCUVVVN1FVRkJSVllzWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTEZOQlpHRTdRVUZsTVVKVkxHMUNRVUZYTEVWQlFVVTdRVUZCUlZnc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ0xGTkJabUU3UVVGblFqRkNWeXh2UWtGQldTeEZRVUZGTzBGQlFVVmFMR0ZCUVVjc1JVRkJSU3hOUVVGUU8wRkJRV1ZETEdWQlFVc3NSVUZCUlR0QlFVRjBRaXhUUVdoQ1dUdEJRV2xDTVVKWkxHbENRVUZUTEVWQlFVVTdRVUZCUldJc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ08wRkJha0psTEU5QlFUVkNPMEZCYlVKQkxGVkJRVWxoTEZWQlFWVXNSMEZCUjBNc1MwRkJTeXhEUVVGRFF5eFJRVUZSTEVOQlFVTndRaXhoUVVGRUxFTkJRVlFzUTBGQlRDeEhRVUZwUTNGQ0xGRkJRV3BETEVkQlFUUkRSQ3hSUVVGUkxFTkJRVU53UWl4aFFVRkVMRU5CUVhKRk8wRkJRMEVzVlVGQlNYTkNMRmxCUVZrc1IwRkJSeXhQUVVGUGNrSXNaVUZCVUN4TFFVRXlRaXhSUVVFelFpeEhRVU5GYzBJc2FVSkJRV2xDTEVOQlFVTnlRaXh4UWtGQlJDeEZRVUYzUWtRc1pVRkJlRUlzUTBGRWJrSXNSMEZGUlVNc2NVSkJSbkpDT3p0QlFVbEJMRlZCUVVrc1QwRkJUMllzVFVGQlRTeERRVUZEY1VNc1RVRkJaQ3hKUVVGM1FpeFZRVUUxUWl4RlFVRjNRenRCUVVOMFEzSkRMR05CUVUwc1EwRkJRM0ZETEUxQlFWQXNSMEZCWjBJc1ZVRkJVME1zVFVGQlZDeEZRVUZwUWp0QlFVTXZRaXhqUVVGSlFTeE5RVUZOTEVsQlFVa3NTVUZCWkN4RlFVRnZRanRCUVVOc1FpeHJRa0ZCVFN4SlFVRkpReXhUUVVGS0xFTkJRV01zTkVOQlFXUXNRMEZCVGp0QlFVTkVPenRCUVVWRUxHTkJRVWxETEVWQlFVVXNSMEZCUjNoRExFMUJRVTBzUTBGQlEzTkRMRTFCUVVRc1EwRkJaanM3UVVGRlFTeGxRVUZMTEVsQlFVbEhMRXRCUVVzc1IwRkJSeXhEUVVGcVFpeEZRVUZ2UWtFc1MwRkJTeXhIUVVGSFF5eFRRVUZUTEVOQlFVTkRMRTFCUVhSRExFVkJRVGhEUml4TFFVRkxMRVZCUVc1RUxFVkJRWFZFTzBGQlEzSkVMR2RDUVVGSlJ5eFZRVUZWTEVkQlFVZEdMRk5CUVZNc1EwRkJRMFFzUzBGQlJDeERRVUV4UWpzN1FVRkZRU3huUWtGQlNVY3NWVUZCVlN4SlFVRkpMRWxCUVd4Q0xFVkJRWGRDTzBGQlEzUkNMRzFDUVVGTExFbEJRVWxETEU5QlFWUXNTVUZCYjBKRUxGVkJRWEJDTEVWQlFXZERPMEZCUXpsQ0xHOUNRVUZKTlVNc1RVRkJUU3hEUVVGRE9FTXNVMEZCVUN4RFFVRnBRa01zWTBGQmFrSXNRMEZCWjBORExFbEJRV2hETEVOQlFYRkRTaXhWUVVGeVF5eEZRVUZwUkVNc1QwRkJha1FzUTBGQlNpeEZRVUVyUkR0QlFVTTNSRXdzYjBKQlFVVXNRMEZCUTBzc1QwRkJSQ3hEUVVGR0xFZEJRV05FTEZWQlFWVXNRMEZCUTBNc1QwRkJSQ3hEUVVGNFFqdEJRVU5FTzBGQlEwWTdRVUZEUmp0QlFVTkdPenRCUVVORUxHbENRVUZQVEN4RlFVRlFPMEZCUTBRc1UwRnVRa1E3UVVGdlFrUTdPMEZCUlVRc1pVRkJVMU1zVFVGQlZDeEhRVUZyUWp0QlFVTm9RaXhaUVVGSlF5eFBRVUZQTEVkQlFVZERMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlEyNUNMRWxCUVdJc1EwRkJhMEpETEVkQlFYcERMRU5CUVdRN1FVRkRRV2xETEdWQlFVOHNRMEZCUTJoRExFdEJRVklzUTBGQlkyMURMRTlCUVdRc1IwRkJkMEpzUWl4WlFVRlpMRU5CUVVOdVFpeEpRVUZpTEVOQlFXdENSU3hMUVVFeFF6czdRVUZGUVN4WlFVRkpUaXhKUVVGSkxFdEJRVXNzU1VGQlZDeEpRVUZwUWtFc1NVRkJTU3hMUVVGTFpDeFRRVUU1UWl4RlFVRjVRenRCUVVOMlF5eGpRVUZKZDBRc1YwRkJWeXhIUVVGSFF5eFJRVUZSTEVOQlFVTXNTVUZCUkN4RFFVRXhRanRCUVVOQlRDeHBRa0ZCVHl4RFFVRkRUU3hYUVVGU0xFTkJRVzlDUml4WFFVRndRanRCUVVORUxGTkJTRVFzVFVGSFR5eEpRVUZKTVVNc1NVRkJTU3haUVVGWk5rTXNTVUZCY0VJc1JVRkJNRUk3UVVGREwwSXNZMEZCU1VNc1YwRkJWeXhIUVVGSFNDeFJRVUZSTEVOQlFVTXpReXhKUVVGSkxFTkJRVU1yUXl4WFFVRk1MRVZCUVVRc1EwRkJNVUk3UVVGRFFWUXNhVUpCUVU4c1EwRkJRMDBzVjBGQlVpeERRVUZ2UWtVc1YwRkJjRUk3UVVGRFJDeFRRVWhOTEUxQlIwRXNTVUZCU1N4UFFVRlBPVU1zU1VGQlVDeExRVUZuUWl4UlFVRndRaXhGUVVFNFFqdEJRVU51UXl4alFVRkpaMFFzYjBKQlFXOUNMRWRCUVVkTUxGRkJRVkVzUTBGQlF6TkRMRWxCUVVRc1EwRkJia003UVVGRFFYTkRMR2xDUVVGUExFTkJRVU5OTEZkQlFWSXNRMEZCYjBKSkxHOUNRVUZ3UWp0QlFVTkVMRk5CU0Uwc1RVRkhRVHRCUVVOTUxHTkJRVWw0UXl4TFFVRkxMRWRCUVVkNVF5eExRVUZMTEVOQlFVTkRMRTlCUVU0c1EwRkJZMnhFTEVsQlFXUXNTVUZCYzBJc1YwRkJWMEVzU1VGQlNTeERRVUZESzBJc1RVRkJhRUlzUjBGQmVVSXNSMEZCTDBNc1IwRkJjVVFzVVVGQmFrVTdRVUZEUVN4alFVRkpiMElzYVVKQlFXbENMRWRCUVVkb1F5eFZRVUZWTEVkQlFVY3NRMEZCY2tNN1FVRkRRVzFDTEdsQ1FVRlBMRU5CUVVOTkxGZEJRVklzUTBGQmIwSlJMRkZCUVZFc1EwRkJRelZETEV0QlFVUXNSVUZCVVN4SlFVRlNMRVZCUVdNeVF5eHBRa0ZCWkN4RFFVRTFRanRCUVVOQllpeHBRa0ZCVHl4RFFVRkRUU3hYUVVGU0xFTkJRVzlDVXl4eFFrRkJjVUlzUTBGQlEzSkVMRWxCUVVRc1JVRkJUeXhEUVVGUUxFTkJRWHBETzBGQlEwUTdPMEZCUlVRc1pVRkJUM05ETEU5QlFWQTdRVUZEUkRzN1FVRkZSQ3hsUVVGVFpTeHhRa0ZCVkN4RFFVRXJRbkpFTEVsQlFTOUNMRVZCUVhGRE5rSXNTMEZCY2tNc1JVRkJORU03UVVGRE1VTXNXVUZCU1hOQ0xHbENRVUZwUWl4SFFVRkhkRUlzUzBGQlN5eEhRVUZIVml4VlFVRm9RenRCUVVOQkxGbEJRVWx0UXl4cFFrRkJhVUlzUjBGQlIzcENMRXRCUVVzc1IwRkJSeXhEUVVGU0xFZEJRVmxXTEZWQlFYQkRPMEZCUTBFc1dVRkJTVzlETEZOQlFWTXNSMEZCUjBNc2IwSkJRVzlDTEVOQlFVTk1MR2xDUVVGRUxFTkJRWEJET3p0QlFVTkJMR0ZCUVVzc1NVRkJTWFJETEVkQlFWUXNTVUZCWjBKaUxFbEJRV2hDTEVWQlFYTkNPMEZCUTNCQ0xHTkJRVWxwUkN4TFFVRkxMRU5CUVVORExFOUJRVTRzUTBGQlkyeEVMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZzUWl4RFFVRktMRVZCUVRoQ08wRkJRelZDTUVNc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbEVzVVVGQlVTeERRVUZETEZkQlFWZHdSQ3hKUVVGSkxFTkJRVU5oTEVkQlFVUXNRMEZCU2l4RFFVRlZhMElzVFVGQmNrSXNSMEZCT0VJc1IwRkJMMElzUlVGQmIwTnNRaXhIUVVGd1F5eEZRVUY1UTNsRExHbENRVUY2UXl4RFFVRTVRanRCUVVOQlF5eHhRa0ZCVXl4RFFVRkRXQ3hYUVVGV0xFTkJRWE5DVXl4eFFrRkJjVUlzUTBGQlEzSkVMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZNTEVWQlFWbG5RaXhMUVVGTExFZEJRVWNzUTBGQmNFSXNRMEZCTTBNN1FVRkRSQ3hYUVVoRUxFMUJSMDhzU1VGQlNUZENMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZLTEV0QlFXTXNTVUZCWkN4SlFVRnpRbUlzU1VGQlNTeERRVUZEWVN4SFFVRkVMRU5CUVVvc1MwRkJZek5DTEZOQlFYaERMRVZCUVcxRU8wRkJRM2hFY1VVc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbUVzWlVGQlpTeERRVUZETlVNc1IwRkJSQ3hGUVVGTkxFbEJRVTRzUTBGQmNrTTdRVUZEUkN4WFFVWk5MRTFCUlVFc1NVRkJTV0lzU1VGQlNTeERRVUZEWVN4SFFVRkVMRU5CUVVvc1dVRkJjVUpuUXl4SlFVRjZRaXhGUVVFclFqdEJRVU53UTFVc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbUVzWlVGQlpTeERRVUZETlVNc1IwRkJSQ3hGUVVGTllpeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJTaXhEUVVGVmEwTXNWMEZCVml4RlFVRk9MRU5CUVhKRE8wRkJRMFFzVjBGR1RTeE5RVVZCTEVsQlFVa3NUMEZCVHk5RExFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRllMRXRCUVhGQ0xGRkJRWHBDTEVWQlFXMURPMEZCUTNoRE1FTXNjVUpCUVZNc1EwRkJRMWdzVjBGQlZpeERRVUZ6UWxFc1VVRkJVU3hEUVVGRExGRkJRVVFzUlVGQlYzWkRMRWRCUVZnc1JVRkJaMEo1UXl4cFFrRkJhRUlzUTBGQk9VSTdRVUZEUVVNc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbE1zY1VKQlFYRkNMRU5CUVVOeVJDeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJUQ3hGUVVGWlowSXNTMEZCU3l4SFFVRkhMRU5CUVhCQ0xFTkJRVE5ETzBGQlEwUXNWMEZJVFN4TlFVZEJPMEZCUTB3d1FpeHhRa0ZCVXl4RFFVRkRXQ3hYUVVGV0xFTkJRWE5DWVN4bFFVRmxMRU5CUVVNMVF5eEhRVUZFTEVWQlFVMWlMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZXTEVOQlFYSkRPMEZCUTBRN1FVRkRSanM3UVVGRFJDeFpRVUZKTEU5QlFVOTZRaXhOUVVGTkxFTkJRVU56UlN4eFFrRkJaQ3hMUVVGM1F5eFZRVUUxUXl4RlFVRjNSRHRCUVVOMFJIUkZMR2RDUVVGTkxFTkJRVU56UlN4eFFrRkJVQ3hEUVVFMlFqRkVMRWxCUVRkQ0xFVkJRVzFETWtRc1QwRkJia01zUTBGQk1rTXNWVUZCVTBNc1RVRkJWQ3hGUVVGcFFqdEJRVU14UkV3c2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbUVzWlVGQlpTeERRVUZEUnl4TlFVRk5MRU5CUVVORExGRkJRVkFzUlVGQlJDeEZRVUZ2UWpkRUxFbEJRVWtzUTBGQlF6UkVMRTFCUVVRc1EwRkJlRUlzUTBGQmNrTTdRVUZEUkN4WFFVWkVPMEZCUjBRN08wRkJSVVFzWlVGQlQwd3NVMEZCVUR0QlFVTkVPenRCUVVWRUxHVkJRVk5JTEZGQlFWUXNRMEZCYTBJelF5eFRRVUZzUWl4RlFVRTJRbkZFTEZkQlFUZENMRVZCUVRCRFF5eGhRVUV4UXl4RlFVRjVSRHRCUVVOMlJDeFpRVUZKUXl4bFFVRmxMRWRCUVVkRUxHRkJRWFJDTzBGQlEwRXNXVUZCU1VVc1owSkJRV2RDTEVkQlFVY3hRaXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVKcVFpeFpRVUZaTEVOQlFVTm9RaXhqUVVGaUxFTkJRVFJDUml4SFFVRnVSQ3hEUVVGMlFqdEJRVU5CTkVRc2QwSkJRV2RDTEVOQlFVTXpSQ3hMUVVGcVFpeERRVUYxUW0xRExFOUJRWFpDTEVkQlFXbERiRUlzV1VGQldTeERRVUZEYUVJc1kwRkJZaXhEUVVFMFFrUXNTMEZCTjBRN1FVRkRRVEpFTEhkQ1FVRm5RaXhEUVVGRFF5eFpRVUZxUWl4RFFVRTRRaXhYUVVFNVFpeEZRVUV5UXl4blFrRkJNME03UVVGRFFTeFpRVUZKUXl4WFFVRlhMRWRCUVVjMVFpeFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUpxUWl4WlFVRlpMRU5CUVVOa0xGTkJRV0lzUTBGQmRVSktMRWRCUVRsRExFTkJRV3hDTzBGQlEwRXNXVUZCU1N0RUxGbEJRVmtzUjBGQlJ6ZENMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlEyWXNTMEZCWWl4RFFVRnRRa2dzUjBGQk1VTXNRMEZCYmtJN1FVRkRRU3RFTEc5Q1FVRlpMRU5CUVVNNVJDeExRVUZpTEVOQlFXMUNiVU1zVDBGQmJrSXNSMEZCTmtKc1FpeFpRVUZaTEVOQlFVTm1MRXRCUVdJc1EwRkJiVUpHTEV0QlFXaEVPMEZCUTBFMlJDeHRRa0ZCVnl4RFFVRkROMFFzUzBGQldpeERRVUZyUW0xRExFOUJRV3hDTEVkQlFUUkNiRUlzV1VGQldTeERRVUZEWkN4VFFVRmlMRU5CUVhWQ1NDeExRVUZ1UkR0QlFVVkJPRVFzYjBKQlFWa3NRMEZCUTNoQ0xGZEJRV0lzUTBGQmVVSjVRaXhoUVVGaExFTkJRVU5PTEdGQlFVUXNRMEZCZEVNN08wRkJRMEVzV1VGQlNVUXNWMEZCU2l4RlFVRnBRanRCUVVObVN5eHhRa0ZCVnl4RFFVRkRka0lzVjBGQldpeERRVUYzUWpCQ0xFMUJRVTBzUTBGQlExSXNWMEZCUkN4RFFVRTVRanRCUVVORU96dEJRVU5FU3l4dFFrRkJWeXhEUVVGRGRrSXNWMEZCV2l4RFFVRjNRa3dzVVVGQlVTeERRVUZEWjBNc1kwRkJWQ3hEUVVGM1FqbEVMRk5CUVhoQ0xFTkJRWGhDTzBGQlEwRXlSQ3h2UWtGQldTeERRVUZEZUVJc1YwRkJZaXhEUVVGNVFuVkNMRmRCUVhwQ096dEJRVVZCUXl4dlFrRkJXU3hEUVVGRFNTeFBRVUZpTEVkQlFYVkNMRmxCUVZrN1FVRkRha01zWTBGQlNUbEVMRlZCUVZVc1IwRkJSekJFTEZsQlFWa3NRMEZCUTBzc1ZVRkJPVUk3UVVGRFFTeGpRVUZKUXl4alFVRmpMRWRCUVVkT0xGbEJRVmtzUTBGQlEwOHNWVUZCWWl4RFFVRjNRa01zVjBGQk4wTTdRVUZEUVVZc2QwSkJRV01zUTBGQlEzQkZMRXRCUVdZc1EwRkJjVUoxUlN4UFFVRnlRaXhIUVVFclFtSXNaVUZCWlN4SFFVRkhMRTlCUVVnc1IwRkJZU3hOUVVFelJEdEJRVU5CZEVRc2IwSkJRVlVzUTBGQlEwb3NTMEZCV0N4RFFVRnBRbmRGTEZOQlFXcENMRWRCUVRaQ1pDeGxRVUZsTEVkQlFVY3NaVUZCU0N4SFFVRnhRaXhqUVVGcVJUdEJRVU5CUVN4NVFrRkJaU3hIUVVGSExFTkJRVU5CTEdWQlFXNUNPMEZCUTBRc1UwRk9SRHM3UVVGUlFVTXNkMEpCUVdkQ0xFTkJRVU55UWl4WFFVRnFRaXhEUVVFMlFuZENMRmxCUVRkQ08wRkJRMEVzWlVGQlQwZ3NaMEpCUVZBN1FVRkRSRHM3UVVGRlJDeGxRVUZUU1N4aFFVRlVMRU5CUVhWQ1RpeGhRVUYyUWl4RlFVRnpRenRCUVVOd1F5eFpRVUZKWjBJc1lVRkJZU3hIUVVGSGVFTXNVVUZCVVN4RFFVRkRReXhoUVVGVUxFTkJRWFZDYWtJc1dVRkJXU3hEUVVGRFlpeFZRVUZpTEVOQlFYZENUQ3hIUVVFdlF5eERRVUZ3UWp0QlFVTkJNRVVzY1VKQlFXRXNRMEZCUTNwRkxFdEJRV1FzUTBGQmIwSnRReXhQUVVGd1FpeEhRVUU0UW14Q0xGbEJRVmtzUTBGQlEySXNWVUZCWWl4RFFVRjNRa29zUzBGQmRFUTdRVUZEUVhsRkxIRkNRVUZoTEVOQlFVTjZSU3hMUVVGa0xFTkJRVzlDZDBVc1UwRkJjRUlzUjBGQlowTm1MR0ZCUVdFc1IwRkJSeXhqUVVGSUxFZEJRVzlDTEdWQlFXcEZPMEZCUTBFc1pVRkJUMmRDTEdGQlFWQTdRVUZEUkRzN1FVRkZSQ3hsUVVGVGRrSXNiMEpCUVZRc1EwRkJPRUozUWl4UlFVRTVRaXhGUVVGM1F6dEJRVU4wUXl4WlFVRkpaaXhuUWtGQlowSXNSMEZCUnpGQ0xGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTFvc2FVSkJRV0lzUTBGQkswSk9MRWRCUVhSRUxFTkJRWFpDTzBGQlEwRTBSQ3gzUWtGQlowSXNRMEZCUTBNc1dVRkJha0lzUTBGQk9FSXNWMEZCT1VJc1JVRkJNa01zYlVKQlFUTkRPMEZCUTBGRUxIZENRVUZuUWl4RFFVRkRNMFFzUzBGQmFrSXNRMEZCZFVKdFF5eFBRVUYyUWl4SFFVRnBRMnhDTEZsQlFWa3NRMEZCUTFvc2FVSkJRV0lzUTBGQkswSk1MRXRCUVdoRk8wRkJRMEV5UkN4M1FrRkJaMElzUTBGQlF6TkVMRXRCUVdwQ0xFTkJRWFZDZFVVc1QwRkJka0lzUjBGQmEwTkhMRkZCUVZFc1IwRkJSeXhOUVVGSUxFZEJRVmtzVDBGQmRFUTdRVUZEUVN4bFFVRlBaaXhuUWtGQlVEdEJRVU5FT3p0QlFVVkVMR1ZCUVZOU0xHVkJRVlFzUTBGQmVVSTFReXhIUVVGNlFpeEZRVUU0UW05RkxFdEJRVGxDTEVWQlFYRkRPMEZCUTI1RExGbEJRVWxETEZkQlFWY3NSMEZCUnpORExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTFnc1dVRkJZaXhEUVVFd1FsQXNSMEZCYWtRc1EwRkJiRUk3UVVGRFFUWkZMRzFDUVVGWExFTkJRVU0xUlN4TFFVRmFMRU5CUVd0Q2JVTXNUMEZCYkVJc1IwRkJORUpzUWl4WlFVRlpMRU5CUVVOWUxGbEJRV0lzUTBGQk1FSk9MRXRCUVhSRU8wRkJRMEUwUlN4dFFrRkJWeXhEUVVGRGRFTXNWMEZCV2l4RFFVRjNRakJDTEUxQlFVMHNRMEZCUTNwRUxFZEJRVVFzUTBGQk9VSTdRVUZEUVhGRkxHMUNRVUZYTEVOQlFVTjBReXhYUVVGYUxFTkJRWGRDUkN4UlFVRlJMRU5CUVVOelF5eExRVUZFTEVOQlFXaERPMEZCUTBFc1pVRkJUME1zVjBGQlVEdEJRVU5FT3p0QlFVVkVMR1ZCUVZOYUxFMUJRVlFzUTBGQlowSmhMRWxCUVdoQ0xFVkJRWE5DTzBGQlEzQkNMRmxCUVVsRExGVkJRVlVzUjBGQlJ6ZERMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlExWXNSMEZCWWl4RFFVRnBRbElzUjBGQmVFTXNRMEZCYWtJN1FVRkRRU3RGTEd0Q1FVRlZMRU5CUVVNNVJTeExRVUZZTEVOQlFXbENiVU1zVDBGQmFrSXNSMEZCTWtKc1FpeFpRVUZaTEVOQlFVTldMRWRCUVdJc1EwRkJhVUpRTEV0QlFUVkRPMEZCUTBFNFJTeHJRa0ZCVlN4RFFVRkRlRU1zVjBGQldDeERRVUYxUWt3c1VVRkJVU3hEUVVGRFowTXNZMEZCVkN4RFFVRjNRbGtzU1VGQlNTeEhRVUZITEVsQlFTOUNMRU5CUVhaQ08wRkJRMEVzWlVGQlQwTXNWVUZCVUR0QlFVTkVPenRCUVVWRUxHVkJRVk42UXl4UlFVRlVMRU5CUVd0Q2MwTXNTMEZCYkVJc1JVRkJlVUk3UVVGRGRrSXNXVUZCU1Vrc1dVRkJTanRCUVVOQkxGbEJRVWxETEZGQlFWRXNSMEZCUnl4UlFVRm1PenRCUVVOQkxHZENRVUZSTEU5QlFVOU1MRXRCUVdZN1FVRkRSU3hsUVVGTExGRkJRVXc3UVVGRFJVa3NkMEpCUVZrc1IwRkJSemxETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMVFzVjBGQllpeERRVUY1UWxRc1IwRkJhRVFzUTBGQlpqdEJRVU5CWjBZc2QwSkJRVmtzUTBGQlF5OUZMRXRCUVdJc1EwRkJiVUp0UXl4UFFVRnVRaXhIUVVFMlFteENMRmxCUVZrc1EwRkJRMVFzVjBGQllpeERRVUY1UWxJc1MwRkJkRVE3UVVGRFFTdEZMSGRDUVVGWkxFTkJRVU42UXl4WFFVRmlMRU5CUVhsQ1RDeFJRVUZSTEVOQlFVTm5ReXhqUVVGVUxFTkJRWGRDVlN4TFFVRkxMRU5CUVVOd1FpeFJRVUZPTEVWQlFYaENMRU5CUVhwQ08wRkJRMEU3TzBGQlEwWXNaVUZCU3l4UlFVRk1PMEZCUTBWM1FpeDNRa0ZCV1N4SFFVRkhPVU1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1N4RFFVRkRVaXhYUVVGaUxFTkJRWGxDVml4SFFVRm9SQ3hEUVVGbU8wRkJRMEZuUml4M1FrRkJXU3hEUVVGREwwVXNTMEZCWWl4RFFVRnRRbTFETEU5QlFXNUNMRWRCUVRaQ2JFSXNXVUZCV1N4RFFVRkRVaXhYUVVGaUxFTkJRWGxDVkN4TFFVRjBSRHRCUVVOQkswVXNkMEpCUVZrc1EwRkJRM3BETEZkQlFXSXNRMEZCZVVKTUxGRkJRVkVzUTBGQlEyZERMR05CUVZRc1EwRkJkMElzVFVGQlRWVXNTMEZCVGl4SFFVRmpMRWRCUVhSRExFTkJRWHBDTzBGQlEwRTdPMEZCUTBZc1pVRkJTeXhSUVVGTU8wRkJRMFZKTEhkQ1FVRlpMRWRCUVVjNVF5eFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUpxUWl4WlFVRlpMRU5CUVVOUUxGZEJRV0lzUTBGQmVVSllMRWRCUVdoRUxFTkJRV1k3UVVGRFFXZEdMSGRDUVVGWkxFTkJRVU12UlN4TFFVRmlMRU5CUVcxQ2JVTXNUMEZCYmtJc1IwRkJOa0pzUWl4WlFVRlpMRU5CUVVOUUxGZEJRV0lzUTBGQmVVSldMRXRCUVhSRU8wRkJRMEVyUlN4M1FrRkJXU3hEUVVGRGVrTXNWMEZCWWl4RFFVRjVRa3dzVVVGQlVTeERRVUZEWjBNc1kwRkJWQ3hEUVVGM1FsVXNTMEZCZUVJc1EwRkJla0k3UVVGRFFUczdRVUZEUml4bFFVRkxMRk5CUVV3N1FVRkRSVWtzZDBKQlFWa3NSMEZCUnpsRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTA0c1dVRkJZaXhEUVVFd1Fsb3NSMEZCYWtRc1EwRkJaanRCUVVOQlowWXNkMEpCUVZrc1EwRkJReTlGTEV0QlFXSXNRMEZCYlVKdFF5eFBRVUZ1UWl4SFFVRTJRbXhDTEZsQlFWa3NRMEZCUTA0c1dVRkJZaXhEUVVFd1FsZ3NTMEZCZGtRN1FVRkRRU3RGTEhkQ1FVRlpMRU5CUVVONlF5eFhRVUZpTEVOQlFYbENUQ3hSUVVGUkxFTkJRVU5uUXl4alFVRlVMRU5CUVhkQ1ZTeExRVUY0UWl4RFFVRjZRanRCUVVOQk96dEJRVU5HTEdWQlFVdExMRkZCUVV3N1FVRkRSVVFzZDBKQlFWa3NSMEZCUnpsRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTB3c1UwRkJZaXhEUVVGMVFtSXNSMEZCT1VNc1EwRkJaanRCUVVOQlowWXNkMEpCUVZrc1EwRkJReTlGTEV0QlFXSXNRMEZCYlVKdFF5eFBRVUZ1UWl4SFFVRTJRbXhDTEZsQlFWa3NRMEZCUTB3c1UwRkJZaXhEUVVGMVFsb3NTMEZCY0VRN1FVRkRRU3RGTEhkQ1FVRlpMRU5CUVVONlF5eFhRVUZpTEVOQlFYbENUQ3hSUVVGUkxFTkJRVU5uUXl4alFVRlVMRU5CUVhkQ1ZTeExRVUY0UWl4RFFVRjZRanRCUVVOQk8wRkJla0pLT3p0QlFUSkNRU3hsUVVGUFNTeFpRVUZRTzBGQlEwUTdPMEZCUlVRc1pVRkJVemRFTEdsQ1FVRlVMRU5CUVRKQ0swUXNVVUZCTTBJc1JVRkJjVU5ETEZOQlFYSkRMRVZCUVdkRU8wRkJRemxETEZsQlFVbERMRTFCUVUwc1IwRkJSeXhGUVVGaU96dEJRVU5CTEdGQlFVc3NTVUZCU1RWRkxFZEJRVlFzU1VGQlowSXdSU3hSUVVGb1FpeEZRVUV3UWp0QlFVTjRRa1VzWjBKQlFVMHNRMEZCUXpWRkxFZEJRVVFzUTBGQlRpeEhRVUZqZWtJc1RVRkJUU3hEUVVGRGNVTXNUVUZCVUN4RFFVRmpMRVZCUVdRc1JVRkJhMEk0UkN4UlFVRlJMRU5CUVVNeFJTeEhRVUZFTEVOQlFURkNMRVZCUVdsRE1rVXNVMEZCVXl4RFFVRkRNMFVzUjBGQlJDeERRVUV4UXl4RFFVRmtPMEZCUTBRN08wRkJRMFFzWlVGQlR6UkZMRTFCUVZBN1FVRkRSRHM3UVVGRlJDeGhRVUZQY0VRc1RVRkJUU3hGUVVGaU8wRkJRMGc3TzBGQk0wMTNRanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMFUzUWl4UlFVRk5jVVFzVDBGQlRpeFRRVUZ6UWtNc2IwSkJRVk5ETEU5QlFWUXNRMEZCYVVKd1NDeG5Ra0ZCYWtJc1JVRkJNRUk3UVVGQlF5eFpRVUZQTEVOQlFVTnhTQ3h6UWtGQlJDeERRVUZTTzBGQlFYZENMRmRCUVUwc1EwRkJRME1zZFVKQlFVUTdRVUZCT1VJc1IwRkJNVUlzUTBGQmRFSXNRMEZCSzBZN1FVRkRNMFp5U0N4bFFVRlhMRWRCUVVVN1FVRkRWRHRCUVVOSU96dEJRVWd3UmpzN2FVSkJTMmhHTEVsQlFVbHBTQ3hQUVVGS0xFVTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZEVkdZc1VVRkJUVWNzWVVGQllTeEhRVUZKUlN4UlFVRkVMRWxCUVdFc1kwRkJZMEVzVVVGQlpDeERRVUZ6UWp0QlFVTnlSRU1zVjBGQlR5eERRVUZEUXl4UFFVRkVMRVZCUVZNc1EwRkRXanRCUVVOSU96dEJRVU5FY2tnc1QwRkJSeXhEUVVGRGMwZ3NUMEZCUkN4RlFVRlRPMEZCUTFJc1ZVRkJSeXhMUVVGTGJFZ3NTMEZCVEN4SlFVRmpMRXRCUVV0T0xHTkJRVXdzUTBGQmIwSXNTMEZCY0VJc1EwRkJha0lzUlVGQk5FTTdRVUZEZUVNc1pVRkJUeXhKUVVGUU8wRkJRMGc3TzBGQlEwUm5RaXhoUVVGUExFTkJRVU5rTEVkQlFWSXNRMEZCV1hOSUxFOUJRVm83UVVGRFNEczdRVUZEUkhaSExGbEJRVkVzUTBGQlEzZEhMR05CUVVRc1JVRkJaMElzUTBGRGNFSTdRVUZEU0RzN1FVRkRSSGhJTEZOQlFVc3NRMEZCUTNWSUxFOUJRVVFzUlVGQlV6dEJRVU5XTEZWQlFVY3NTMEZCUzJ4SUxFdEJRVXdzU1VGQll5eExRVUZMVGl4alFVRk1MRU5CUVc5Q0xFOUJRWEJDTEVOQlFXcENMRVZCUVRoRE8wRkJRekZETEdWQlFVOHNTVUZCVUR0QlFVTklPenRCUVVORVowSXNZVUZCVHl4RFFVRkRaaXhMUVVGU0xFTkJRV04xU0N4UFFVRmtPMEZCUTBnN08wRkJiRUp2UkN4SFFVRjZSRHM3YVVKQmNVSmxUQ3hoT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRjRUptTEZGQlFVMURMR0ZCUVdFc1IwRkJTVU1zVVVGQlJDeEpRVUZoTEdOQlFXTkJMRkZCUVdRc1EwRkJjMEk3UVVGRGNrUkRMRmRCUVU4c1EwRkJRMGtzVlVGQlZTeEhRVUZETEVsQlFWb3NSVUZCYVVJN1FVRkRjRUpCTEdkQ1FVRlZMRWRCUVVkQkxGVkJRVlVzU1VGQlJUZEVMRkZCUVZFc1EwRkJRemhFTEVsQlFXeERPMEZCUTBFc1ZVRkJTVU1zU1VGQlNTeEhRVUZITDBRc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNMRWxCUVhaQ0xFTkJRVmc3UVVGRFFUaEVMRlZCUVVrc1EwRkJRMmhITEV0QlFVd3NRMEZCVjIxRExFOUJRVmdzUjBGQmNVSXNkMEpCUVhKQ08wRkJRMEV5UkN4blFrRkJWU3hEUVVGRGVFUXNWMEZCV0N4RFFVRjFRakJFTEVsQlFYWkNPMEZCUTBFc1YwRkJTME1zVDBGQlRDeEhRVUZsU0N4VlFVRm1PMEZCUTBFc1YwRkJTMGtzVVVGQlRDeEhRVUZuUWtvc1ZVRkJWU3hEUVVGRFN5eHZRa0ZCV0N4RFFVRm5ReXhKUVVGb1F5eEZRVUZ6UXl4RFFVRjBReXhEUVVGb1FqdEJRVU5JT3p0QlFVTkVReXhuUWtGQldTeERRVUZEY0VVc1QwRkJUeXhIUVVGRExFbEJRVlFzUlVGQll6dEJRVU4wUWtFc1lVRkJUeXhIUVVGSFFTeFBRVUZQTEVsQlFVa3NTMEZCUzJsRkxFOUJRVEZDTzBGQlEwRnFSU3hoUVVGUExFTkJRVU54UlN4VFFVRlNMRWRCUVc5Q2NrVXNUMEZCVHl4RFFVRkRjMFVzV1VGQlVpeEhRVUYxUW5SRkxFOUJRVThzUTBGQlEzVkZMRmxCUVc1RU8wRkJRMGc3TzBGQlEwUnNTQ3haUVVGUkxFTkJRVU4zUnl4alFVRkVMRVZCUVdkQ08wRkJRM0JDTzBGQlEwRXNWVUZCU1Zjc1QwRkJUeXhIUVVGSExFdEJRVXRPTEZGQlFVd3NRMEZCWTBNc2IwSkJRV1FzUTBGQmJVTXNTVUZCYmtNc1EwRkJaRHRCUVVOQkxGVkJRVWxJTEVsQlFVa3NSMEZCUjFFc1QwRkJUeXhEUVVGRFFTeFBRVUZQTEVOQlFVTXZSU3hOUVVGU0xFZEJRV1VzUTBGQmFFSXNRMEZCYkVJN08wRkJRMEVzVlVGQlJ5eERRVUZEZFVVc1NVRkJSQ3hKUVVGVFFTeEpRVUZKTEVOQlFVTlRMRk5CUVV3c1EwRkJaVU1zVVVGQlppeERRVUYzUWl4cFFrRkJlRUlzUTBGQldpeEZRVUYxUkR0QlFVTnVSRHRCUVVOQlZpeFpRVUZKTEVkQlFVY3ZSQ3hSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVJc1NVRkJka0lzUTBGQlVEdEJRVU5CT0VRc1dVRkJTU3hEUVVGRFV5eFRRVUZNTEVOQlFXVkZMRWRCUVdZc1EwRkJiVUlzYVVKQlFXNUNPMEZCUTBFc1lVRkJTMVFzVVVGQlRDeERRVUZqTlVRc1YwRkJaQ3hEUVVFd1FqQkVMRWxCUVRGQ08wRkJRMGc3TzBGQlEwUXNWVUZCU1Zrc1VVRkJVU3hIUVVGSGNFZ3NiMEpCUVZORExGZEJRVlFzUTBGQmNVSnZSeXhqUVVGeVFpeERRVUZtT3p0QlFVTkJMRlZCUVVsblFpeEpRVUZKTEVkQlFVY3NTVUZCU1hSRkxFbEJRVW9zUlVGQldEdEJRVU5CZVVRc1ZVRkJTU3hEUVVGRFl5eFRRVUZNTEVkQlFXdENMR2RFUVVFclEwUXNTVUZCU3l4TlFVRjBSVHRCUVVOQllpeFZRVUZKTEVOQlFVTXhSQ3hYUVVGTUxFTkJRV2xDYzBVc1VVRkJha0k3UVVGRFFTeFhRVUZMVWl4WlFVRk1PMEZCUTBnN08wRkJRMFE1U0N4UFFVRkhMRU5CUVVOelNDeFBRVUZFTEVWQlFWTTdRVUZEVWl4VlFVRkhMRXRCUVV0c1NDeExRVUZNTEVsQlFXTXNTMEZCUzA0c1kwRkJUQ3hEUVVGdlFpeExRVUZ3UWl4RFFVRnFRaXhGUVVFMFF6dEJRVU40UXl4bFFVRlBMRWxCUVZBN1FVRkRTRHM3UVVGRFJDeFZRVUZITEVOQlFVTXNTMEZCU3poSUxGRkJRVTRzU1VGQmEwSXNRMEZCUXl4TFFVRkxRU3hSUVVGTUxFTkJRV00xUkN4WFFVRndReXhGUVVGblJEdEJRVU0xUXl4aFFVRkxiMFFzVDBGQlREdEJRVU5JT3p0QlFVTkVMRlZCUVVsTkxFbEJRVWtzUjBGQlJ5OUVMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUWl4SlFVRjJRaXhEUVVGWU8wRkJRMEU0UkN4VlFVRkpMRU5CUVVOb1J5eExRVUZNTEVOQlFWZHRReXhQUVVGWUxFZEJRWEZDTEcxRFFVRnlRanM3UVVGRFFTeFZRVUZKZVVVc1VVRkJVU3hIUVVGSGNFZ3NiMEpCUVZORExGZEJRVlFzUTBGQmNVSnRSeXhQUVVGeVFpeERRVUZtT3p0QlFVTkJMRlZCUVVscFFpeEpRVUZKTEVkQlFVY3NTVUZCU1hSRkxFbEJRVW9zUlVGQldEdEJRVU5CZVVRc1ZVRkJTU3hEUVVGRFl5eFRRVUZNTEVkQlFXdENMR2RFUVVFclEwUXNTVUZCU3l4TlFVRjBSVHRCUVVOQllpeFZRVUZKTEVOQlFVTXhSQ3hYUVVGTUxFTkJRV2xDYzBVc1VVRkJha0k3UVVGRFFTeFhRVUZMVml4UlFVRk1MRU5CUVdNMVJDeFhRVUZrTEVOQlFUQkNNRVFzU1VGQk1VSTdRVUZEUVN4WFFVRkxTU3haUVVGTU8wRkJRMEZvU0N4aFFVRlBMRU5CUVVOa0xFZEJRVklzUTBGQldYTklMRTlCUVZvN1FVRkRTRHM3UVVGRlJIWklMRk5CUVVzc1EwRkJRM1ZJTEU5QlFVUXNSVUZCVXp0QlFVTldMRlZCUVVjc1MwRkJTMnhJTEV0QlFVd3NTVUZCWXl4TFFVRkxUaXhqUVVGTUxFTkJRVzlDTEU5QlFYQkNMRU5CUVdwQ0xFVkJRVGhETzBGQlF6RkRMR1ZCUVU4c1NVRkJVRHRCUVVOSUxFOUJTRk1zUTBGSlZqczdPMEZCUTBGblFpeGhRVUZQTEVOQlFVTm1MRXRCUVZJc1EwRkJZM1ZJTEU5QlFXUTdRVUZEU0RzN1FVRnlSRzlFTEVkQlFYcEVPenRwUWtGM1JHVktMR0U3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVU42UkdZc09FUWlMQ0ptYVd4bElqb2lRR05oZFhOaGJFNWxkQzlzYjJjdWQyVmlMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUlIZGxZbkJoWTJ0VmJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1S0hKdmIzUXNJR1poWTNSdmNua3BJSHRjYmx4MGFXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUJ0YjJSMWJHVWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdabUZqZEc5eWVTaHlaWEYxYVhKbEtGd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lLU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGJYQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0pkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0lrQmpZWFZ6WVd4T1pYUXZiRzluWENKZElEMGdabUZqZEc5eWVTaHlaWEYxYVhKbEtGd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lLU2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aVFHTmhkWE5oYkU1bGRDOXNiMmRjSWwwZ1BTQm1ZV04wYjNKNUtISnZiM1JiWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENKZEtUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjkxZEdsc2MxOWZLU0I3WEc1eVpYUjFjbTRnSWl3aUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlEQXBPMXh1SWl3aVpuVnVZM1JwYjI0Z1gybHVkR1Z5YjNCU1pYRjFhWEpsUkdWbVlYVnNkQ2h2WW1vcElIdGNiaUFnY21WMGRYSnVJRzlpYWlBbUppQnZZbW91WDE5bGMwMXZaSFZzWlNBL0lHOWlhaUE2SUh0Y2JpQWdJQ0JrWldaaGRXeDBPaUJ2WW1wY2JpQWdmVHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmZhVzUwWlhKdmNGSmxjWFZwY21WRVpXWmhkV3gwT3lJc0ltVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRUpoYzJWTWIyZDdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9LWHRjYmlBZ0lDQWdJQ0FnZEdocGN5NUJZMk5sY0hSbFpFeGxkbVZzY3lBOUlIdGtaV0oxWnpvZ01Dd2diRzluT2pFc0lIZGhjbTVwYm1jNk1pd2daWEp5YjNJNklETjlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuSkJZMk5sY0hSbFpFeGxkbVZzY3lBOUlIc3dPaWRrWldKMVp5Y3NJREU2SUNkc2IyY25MQ0F5T2lBbmQyRnlibWx1Wnljc0lETTZJQ2RsY25KdmNpZDlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteGxkbVZzSUQwZ2RHaHBjeTVCWTJObGNIUmxaRXhsZG1Wc2Mxc25aR1ZpZFdjblhUdGNiaUFnSUNCOVhHNGdJQ0FnYzJWMElFeGxkbVZzS0d4bGRtVnNLWHRjYmlBZ0lDQWdJQ0FnYVdZb2RHaHBjeTVCWTJObGNIUmxaRXhsZG1Wc2MxdHNaWFpsYkYwaFBUMTFibVJsWm1sdVpXUXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVzWlhabGJDQTlJSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE5iYkdWMlpXeGRPeUFnSUNCY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvWUNSN2JHVjJaV3g5SUcxMWMzUWdZbVVnYjI1bElHOW1JQ1I3VDJKcVpXTjBMbXRsZVhNb2RHaHBjeTVCWTJObGNIUmxaRXhsZG1Wc2N5bDlZQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdaMlYwSUV4bGRtVnNLQ2w3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuSkJZMk5sY0hSbFpFeGxkbVZzYzF0MGFHbHpMbXhsZG1Wc1hUdGNiaUFnSUNCOVhHNTlJaXdpWTI5dWMzUWdURzluWjJWeVRXbDRhVzV6SUQwZ0tFSmhjMlZrUTJ4aGMzTXBQVDRnWTJ4aGMzTWdaWGgwWlc1a2N5QkNZWE5sWkVOc1lYTnplMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLQzR1TG1GeVozTXBlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpZ3VMaTVoY21kektUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyZG5aWElnUFNCamIyNXpiMnhsTzF4dUlDQWdJSDFjYmlBZ0lDQndjbTluY21WemN5aHdjbTluY21WemMwMWxjM05oWjJVcGUxeHVJQ0FnSUNBZ0lDQnBaaWgwYUdsekxteHZaMmRsY2k1d2NtOW5jbVZ6Y3lsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxteHZaMmRsY2k1d2NtOW5jbVZ6Y3lod2NtOW5jbVZ6YzAxbGMzTmhaMlVwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJSE5sZENCTWIyZG5aWElvYkc5bloyVnlLWHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMmRuWlhJZ1BTQnNiMmRuWlhJN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHZGxkQ0JNYjJkblpYSW9LWHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJHOW5aMlZ5TzF4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFeHZaMmRsY2sxcGVHbHVjenNpTENJdkx5QnZjbWxuYVc0Z1kyOWtaU0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXNkV041WjJsc1ltVnlkQzlxYzI5dUxXUnBjM0JzWVhrdllteHZZaTl0WVhOMFpYSXZhbk52Ymkxa2FYTndiR0Y1TG1welhHNHZMeUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGNnVEhWamVTQkhhV3hpWlhKMFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJLYzI5dVZtbGxkM3RjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwZTF4dUlDQWdJSDFjYmlBZ0lDQnpkR0YwYVdNZ1NsTlBUa1JwYzNCc1lYa29hbk52Yml3Z2IzQmxia3hsZG1Wc2MwRnlaeXdnYzNSNWJHVlBjSFJwYjI1elFYSm5LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQkVSVVpCVlV4VVgxTlVXVXhGWDA5UVZFbFBUbE1nUFNCN1hHNGdJQ0FnSUNBZ0lDQWdjbTl2ZERvZ2V5QjBZV2M2SUNkd2NtVW5MQ0J6ZEhsc1pUb2dKM0JoWkdScGJtYzZJRFZ3ZURzZ1ptOXVkQzF6YVhwbE9pQXhjbVZ0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pVTnZiblJoYVc1bGNqb2dleUIwWVdjNklDZGthWFluTENCemRIbHNaVG9nSjIxaGNtZHBiaTFpYjNSMGIyMDZJRE53ZURzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnZEdsMGJHVTZJSHNnZEdGbk9pQW5jM0JoYmljc0lITjBlV3hsT2lBblkzVnljMjl5T2lCd2IybHVkR1Z5T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pWUmxlSFE2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5KeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lHOXdaVzVDZFhSMGIyNDZJSHNnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBZV2M2SUNkemNHRnVKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lBblpHbHpjR3hoZVRvZ2FXNXNhVzVsTFdKc2IyTnJPeUJ0WVhKbmFXNDZJREJ3ZUNBM2NIZ2dNSEI0SURKd2VEc2dZbTl5WkdWeUxYUnZjRG9nTlhCNElITnZiR2xrSUhSeVlXNXpjR0Z5Wlc1ME95QW5YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ3NnSjJKdmNtUmxjaTFpYjNSMGIyMDZJRFZ3ZUNCemIyeHBaQ0IwY21GdWMzQmhjbVZ1ZERzZ1ltOXlaR1Z5TFd4bFpuUTZJRFZ3ZUNCemIyeHBaQ0JpYkdGamF6c25MRnh1SUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdWdWRITkRiMjUwWVdsdVpYSTZJSHNnZEdGbk9pQW5aR2wySnl3Z2MzUjViR1U2SUNkd1lXUmthVzVuTFd4bFpuUTZJREU0Y0hnN0p5QjlMRnh1SUNBZ0lDQWdJQ0FnSUd0bGVWWmhiSFZsVUdGcGNqb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNka2FYTndiR0Y1T2lCaWJHOWphenNnYldGeVoybHVMV0p2ZEhSdmJUb2dNbkI0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0JyWlhrNklIc2dkR0ZuT2lBbmMzQmhiaWNzSUhOMGVXeGxPaUFuWTI5c2IzSTZJR1JoY210aWJIVmxPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQnplVzFpYjJ4V1lXeDFaVG9nZXlCMFlXYzZJQ2R6Y0dGdUp5d2djM1I1YkdVNklDZGpiMnh2Y2pvZ1pHRnlhMmR5WldWdU95Y2dmU3hjYmlBZ0lDQWdJQ0FnSUNCemRISnBibWRXWVd4MVpUb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNkamIyeHZjam9nWTNKcGJYTnZianNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdiblZ0WW1WeVZtRnNkV1U2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5ZMjlzYjNJNklHSnNkV1U3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJR0p2YjJ4bFlXNVdZV3gxWlRvZ2V5QjBZV2M2SUNkemNHRnVKeXdnYzNSNWJHVTZJQ2RqYjJ4dmNqb2dZbXgxWlRzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnYm5Wc2JGWmhiSFZsT2lCN0lIUmhaem9nSjNOd1lXNG5MQ0J6ZEhsc1pUb2dKMk52Ykc5eU9pQmliSFZsT3ljZ2ZTeGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHOXdaVzVNWlhabGJITWdQU0JwYzA1aFRpaHdZWEp6WlVsdWRDaHZjR1Z1VEdWMlpXeHpRWEpuS1NrZ1B5QkpibVpwYm1sMGVTQTZJSEJoY25ObFNXNTBLRzl3Wlc1TVpYWmxiSE5CY21jcE8xeHVJQ0FnSUNBZ0lDQjJZWElnYzNSNWJHVlBjSFJwYjI1eklEMGdkSGx3Wlc5bUlITjBlV3hsVDNCMGFXOXVjMEZ5WnlBOVBUMGdKMjlpYW1WamRDY2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0EvSUcxbGNtZGxVM1I1YkdWUGNIUnBiMjV6S0VSRlJrRlZURlJmVTFSWlRFVmZUMUJVU1U5T1V5d2djM1I1YkdWUGNIUnBiMjV6UVhKbktWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdPaUJFUlVaQlZVeFVYMU5VV1V4RlgwOVFWRWxQVGxNN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ1QySnFaV04wTG1GemMybG5iaUFoUFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQWdJQ0FnVDJKcVpXTjBMbUZ6YzJsbmJpQTlJR1oxYm1OMGFXOXVLSFJoY21kbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJoY21kbGRDQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KME5oYm01dmRDQmpiMjUyWlhKMElIVnVaR1ZtYVc1bFpDQnZjaUJ1ZFd4c0lIUnZJRzlpYW1WamRDY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhSdklEMGdUMkpxWldOMEtIUmhjbWRsZENrN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnBibVJsZUNBOUlERTdJR2x1WkdWNElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhVzVrWlhnckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYm1WNGRGTnZkWEpqWlNBOUlHRnlaM1Z0Wlc1MGMxdHBibVJsZUYwN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYaDBVMjkxY21ObElDRTlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnVaWGgwUzJWNUlHbHVJRzVsZUhSVGIzVnlZMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYm1WNGRGTnZkWEpqWlN3Z2JtVjRkRXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc5YmJtVjRkRXRsZVYwZ1BTQnVaWGgwVTI5MWNtTmxXMjVsZUhSTFpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSdk8xeHVJQ0FnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnY21WdVpHVnlLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJsYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11Y205dmRDNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NXliMjkwTG5OMGVXeGxPMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJR2xtSUNocWMyOXVJRDA5UFNCdWRXeHNJSHg4SUdwemIyNGdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIWnZhV1JGYkdWdFpXNTBJRDBnWjJWMFZtRnNkV1VvYm5Wc2JDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tIWnZhV1JGYkdWdFpXNTBLVHRjYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHcHpiMjRnYVc1emRHRnVZMlZ2WmlCRVlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWkdGMFpVVnNaVzFsYm5RZ1BTQm5aWFJXWVd4MVpTaHFjMjl1TG5SdlNWTlBVM1J5YVc1bktDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtZWFJsUld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2FuTnZiaUFoUFQwZ0oyOWlhbVZqZENjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnViMjVGZUhCaGJtUmhZbXhsUld4bGJXVnVkQ0E5SUdkbGRGWmhiSFZsS0dwemIyNHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaHViMjVGZUhCaGJtUmhZbXhsUld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCMGFYUnNaU0E5SUVGeWNtRjVMbWx6UVhKeVlYa29hbk52YmlrZ1B5QW5RWEp5WVhsYkp5QXJJR3B6YjI0dWJHVnVaM1JvSUNzZ0oxMG5JRG9nSjA5aWFtVmpkQ2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnZEdocGMweGxkbVZzU1hORGJHOXpaV1FnUFNCdmNHVnVUR1YyWld4eklEd2dNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9aMlYwVkdsMGJHVW9kR2wwYkdVc0lHNTFiR3dzSUhSb2FYTk1aWFpsYkVselEyeHZjMlZrS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dOdmJuWmxjblJLYzI5dVZHOUZiR1Z0Wlc1MGN5aHFjMjl1TENBeEtTazdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJsYkdWdFpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJR052Ym5abGNuUktjMjl1Vkc5RmJHVnRaVzUwY3locWMyOXVMQ0JwYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQjBhR2x6VEdWMlpXeEpjME5zYjNObFpDQTlJR2x1WkdWNElENGdiM0JsYmt4bGRtVnNjenRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdibVY0ZEV4bGRtVnNTWE5EYkc5elpXUWdQU0JwYm1SbGVDQXJJREVnUGlCdmNHVnVUR1YyWld4ek8xeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCamIyNTBZV2x1WlhJZ1BTQm5aWFJEYjI1MFpXNTBjME52Ym5SaGFXNWxjaWgwYUdselRHVjJaV3hKYzBOc2IzTmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2EyVjVJR2x1SUdwemIyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hCY25KaGVTNXBjMEZ5Y21GNUtHcHpiMjViYTJWNVhTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGUnBkR3hsS0NkQmNuSmhlVnNuSUNzZ2FuTnZibHRyWlhsZExteGxibWQwYUNBcklDZGRKeXdnYTJWNUxDQnVaWGgwVEdWMlpXeEpjME5zYjNObFpDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWTI5dWRtVnlkRXB6YjI1VWIwVnNaVzFsYm5SektHcHpiMjViYTJWNVhTd2dhVzVrWlhnZ0t5QXhLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR3B6YjI1YmEyVjVYU0E5UFQwZ2JuVnNiQ0I4ZkNCcWMyOXVXMnRsZVYwZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1oyVjBVM1JoYm1SaGNtUlFZV2x5S0d0bGVTd2diblZzYkNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNocWMyOXVXMnRsZVYwZ2FXNXpkR0Z1WTJWdlppQkVZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1aGNIQmxibVJEYUdsc1pDaG5aWFJUZEdGdVpHRnlaRkJoYVhJb2EyVjVMQ0JxYzI5dVcydGxlVjB1ZEc5SlUwOVRkSEpwYm1jb0tTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2FuTnZibHRyWlhsZElEMDlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1oyVjBWR2wwYkdVb0owOWlhbVZqZENjc0lHdGxlU3dnYm1WNGRFeGxkbVZzU1hORGJHOXpaV1FwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5TG1Gd2NHVnVaRU5vYVd4a0tHTnZiblpsY25SS2MyOXVWRzlGYkdWdFpXNTBjeWhxYzI5dVcydGxlVjBzSUdsdVpHVjRJQ3NnTVNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWhyWlhrc0lHcHpiMjViYTJWNVhTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVk41YldKdmJITWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVWTjViV0p2YkhNb2FuTnZiaWt1Wm05eVJXRmphQ2htZFc1amRHbHZiaWh6ZVcxaWIyd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWh6ZVcxaWIyd3VkRzlUZEhKcGJtY29LU3dnYW5OdmJsdHplVzFpYjJ4ZEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ym5SaGFXNWxjanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJuWlhSVWFYUnNaU2gwYVhSc1pWUmxlSFFzSUc5d2RHbHZibUZzUzJWNUxDQnNaWFpsYkVselEyeHZjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdOMWNuSmxiblJzZVVOc2IzTmxaQ0E5SUd4bGRtVnNTWE5EYkc5elpXUTdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlVOdmJuUmhhVzVsY2k1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1MGFYUnNaVU52Ym5SaGFXNWxjaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNnblpHRjBZUzEwWlhOMEp5d2dKM1JwZEd4bFEyOXVkR0ZwYm1WeUp5azdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIUmxlSFJGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11ZEdsMGJHVlVaWGgwTG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIUnBkR3hsUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG5ScGRHeGxMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdkR2wwYkdWRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWRHbDBiR1V1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnZEdWNGRFVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlZSbGVIUXVjM1I1YkdVN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRFOXdaVzVDZFhSMGIyNG9iR1YyWld4SmMwTnNiM05sWkNrcE8xeHVJQ0FnSUNBZ0lDQWdJR2xtSUNodmNIUnBiMjVoYkV0bGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHVjRkRVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFMyVjVLRzl3ZEdsdmJtRnNTMlY1S1NrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUhSbGVIUkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR1J2WTNWdFpXNTBMbU55WldGMFpWUmxlSFJPYjJSbEtIUnBkR3hsVkdWNGRDa3BPMXh1SUNBZ0lDQWdJQ0FnSUhScGRHeGxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwWlhoMFJXeGxiV1Z1ZENrN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZGYkdWdFpXNTBMbTl1WTJ4cFkyc2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2IzQmxia0oxZEhSdmJpQTlJSFJwZEd4bFJXeGxiV1Z1ZEM1bWFYSnpkRU5vYVd4a08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHOWlhbVZqZEVOdmJuUmxiblJ6SUQwZ2RHbDBiR1ZGYkdWdFpXNTBMbkJoY21WdWRFNXZaR1V1Ym1WNGRGTnBZbXhwYm1jN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2WW1wbFkzUkRiMjUwWlc1MGN5NXpkSGxzWlM1a2FYTndiR0Y1SUQwZ1kzVnljbVZ1ZEd4NVEyeHZjMlZrSUQ4Z0oySnNiMk5ySnlBNklDZHViMjVsSnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzl3Wlc1Q2RYUjBiMjR1YzNSNWJHVXVkSEpoYm5ObWIzSnRJRDBnWTNWeWNtVnVkR3g1UTJ4dmMyVmtJRDhnSjNKdmRHRjBaU2c1TUdSbFp5a25JRG9nSjNKdmRHRjBaU2d3WkdWbktTYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwYkhsRGJHOXpaV1FnUFNBaFkzVnljbVZ1ZEd4NVEyeHZjMlZrTzF4dUlDQWdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwYVhSc1pVVnNaVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjUwWVdsdVpYSkZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRTl3Wlc1Q2RYUjBiMjRvYkdWMlpXeEpjME5zYjNObFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmlkWFIwYjI1RmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2h6ZEhsc1pVOXdkR2x2Ym5NdWIzQmxia0oxZEhSdmJpNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1dmNHVnVRblYwZEc5dUxuTjBlV3hsTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtWc1pXMWxiblF1YzNSNWJHVXVkSEpoYm5ObWIzSnRJRDBnYkdWMlpXeEpjME5zYjNObFpDQS9JQ2R5YjNSaGRHVW9NR1JsWnlrbklEb2dKM0p2ZEdGMFpTZzVNR1JsWnlrbk8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmlkWFIwYjI1RmJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUdkbGRFTnZiblJsYm5SelEyOXVkR0ZwYm1WeUtHbHpRMnh2YzJWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NWpiMjUwWlc1MGMwTnZiblJoYVc1bGNpNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMyVjBRWFIwY21saWRYUmxLQ2RrWVhSaExYUmxjM1FuTENBblkyOXVkR1Z1ZEhORGIyNTBZV2x1WlhJbktUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11WTI5dWRHVnVkSE5EYjI1MFlXbHVaWEl1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdLR2x6UTJ4dmMyVmtJRDhnSjI1dmJtVW5JRG9nSjJKc2IyTnJKeWs3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOdmJuUmhhVzVsY2tWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnWjJWMFUzUmhibVJoY21SUVlXbHlLR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnY0dGcGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NXJaWGxXWVd4MVpWQmhhWEl1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0J3WVdseVJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxtdGxlVlpoYkhWbFVHRnBjaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0J3WVdseVJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaG5aWFJMWlhrb2EyVjVLU2s3WEc0Z0lDQWdJQ0FnSUNBZ2NHRnBja1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFZtRnNkV1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnY0dGcGNrVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z1oyVjBTMlY1S0c1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdhMlY1Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG10bGVTNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHdGxlVVZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTVyWlhrdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ2EyVjVSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaHVZVzFsSUNzZ0p6b2dKeWtwTzF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCclpYbEZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRlpoYkhWbEtIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhaaGJIVmxSV3hsYldWdWREdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2JuVnNiRlI1Y0dVZ1BTQW5iMkpxWldOMEp6dGNiaUFnSUNBZ0lDQWdJQ0J6ZDJsMFkyZ2dLSFI1Y0dWdlppQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5jM2x0WW05c0p6cGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11YzNsdFltOXNWbUZzZFdVdWRHRm5LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWMzbHRZbTlzVm1Gc2RXVXVjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaDJZV3gxWlM1MGIxTjBjbWx1WnlncEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmMzUnlhVzVuSnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXVjM1J5YVc1blZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11YzNSeWFXNW5WbUZzZFdVdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNnblhDSW5JQ3NnZG1Gc2RXVWdLeUFuWENJbktTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmJuVnRZbVZ5SnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXViblZ0WW1WeVZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11Ym5WdFltVnlWbUZzZFdVdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNoMllXeDFaU2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKMkp2YjJ4bFlXNG5PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLSE4wZVd4bFQzQjBhVzl1Y3k1aWIyOXNaV0Z1Vm1Gc2RXVXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXVZbTl2YkdWaGJsWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElHNTFiR3hVZVhCbE9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTV1ZFd4c1ZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11Ym5Wc2JGWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpVVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z2JXVnlaMlZUZEhsc1pVOXdkR2x2Ym5Nb1pHVm1ZWFZzZEhNc0lHOTJaWEp5YVdSbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQnRaWEpuWldRZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnWkdWbVlYVnNkSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFsY21kbFpGdHJaWGxkSUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z1pHVm1ZWFZzZEhOYmEyVjVYU3dnYjNabGNuSnBaR1Z6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JXVnlaMlZrTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5Wlc1a1pYSW9LVHRjYmlBZ0lDQjlYRzU5SWl3aWFXMXdiM0owSUh0a1pXWmhkV3gwSUdGeklFSmhjMlZNYjJkOUlHWnliMjBnSnk0dlltRnpaVXh2WnljN1hHNXBiWEJ2Y25RZ2UyUmxabUYxYkhRZ1lYTWdURzluVG05a1pVMXBlR2x1YzMwZ1puSnZiU0FuTGk5MFpYSnRURzluTG0xcGVHbHVjeTV1YjJSbEp6dGNibWx0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJYWldKT2IyUmxUV2w0YVc1emZTQm1jbTl0SUNjdUwzUmxjbTFNYjJjdWJXbDRhVzV6TG5kbFlpYzdYRzVwYlhCdmNuUWdlMUJzWVhSbWIzSnRmU0JtY205dElDZGpZWFZ6WVd3dGJtVjBMblYwYVd4ekp6dGNibU5zWVhOeklGUmxjbTFNYjJjZ1pYaDBaVzVrY3lCUWJHRjBabTl5YlM1dGFYaFhhWFJvS0VKaGMyVk1iMmNzSUhzbmJtOWtaU2M2VzB4dlowNXZaR1ZOYVhocGJuTmRMQ2QzWldJbk9sdFhaV0pPYjJSbFRXbDRhVzV6WFgwcGUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ2ZWeHVmVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdibVYzSUZSbGNtMU1iMmNvS1RzaUxDSmpiMjV6ZENCTWIyZE9iMlJsVFdsNGFXNXpJRDBnS0V4dlowTnNZWE56S1QwK0lHTnNZWE56SUdWNGRHVnVaSE1nVEc5blEyeGhjM043WEc0Z0lDQWdZMjl1Ym1WamRDaGphR0Z1Ym1Wc0tYdGNiaUFnSUNBZ0lDQWdMeTl1YjNSb2FXNW5YRzRnSUNBZ2ZWeHVJQ0FnSUd4dlp5aHRaWE56WVdkbEtYdGNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NXNaWFpsYkNBK1BTQjBhR2x6TGtGalkyVndkR1ZrVEdWMlpXeHpXeWRzYjJjblhTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlodFpYTnpZV2RsS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjSEp2WjNKbGMzTW9jSEp2WTJWemMwMWxjM05oWjJVcGUxeHVJQ0FnSUNBZ0lDQXZMMVJQUkU4NklHbHRjR3hsYldWdWRDQndjbTluY21WemN5QnphRzkzWEc0Z0lDQWdmVnh1SUNBZ0lHUmxZblZuS0cxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TG14bGRtVnNJRDQ5SUhSb2FYTXVRV05qWlhCMFpXUk1aWFpsYkhOYkoyUmxZblZuSjEwcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzUxYkd3N1hHNGdJQ0FnSUNBZ0lIMGdYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaR1ZpZFdjb2JXVnpjMkZuWlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdURzluVG05a1pVMXBlR2x1Y3pzaUxDSnBiWEJ2Y25RZ2UyUmxabUYxYkhRZ1lYTWdTbk52YmxacFpYZDlJR1p5YjIwZ0p5NHZjSEpsZEhSNVNuTnZiaWM3WEc1amIyNXpkQ0JYWldKT2IyUmxUV2w0YVc1eklEMGdLRXh2WjBOc1lYTnpLVDArSUdOc1lYTnpJR1Y0ZEdWdVpITWdURzluUTJ4aGMzTjdYRzRnSUNBZ1kyOXVibVZqZENoa2IyTjFiV1Z1ZEVWc1BXNTFiR3dwZTF4dUlDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEVWc0lEMGdaRzlqZFcxbGJuUkZiSHg4Wkc5amRXMWxiblF1WW05a2VUdGNiaUFnSUNBZ0lDQWdiR1YwSUc1dlpHVWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtGd2lkV3hjSWlrN1hHNGdJQ0FnSUNBZ0lHNXZaR1V1YzNSNWJHVXVZM056VkdWNGRDQTlJRndpYkdsemRDMXpkSGxzWlMxMGVYQmxPaUJ1YjI1bE8xd2lPMXh1SUNBZ0lDQWdJQ0JrYjJOMWJXVnVkRVZzTG1Gd2NHVnVaRU5vYVd4a0tHNXZaR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVp5WVcxbFJXd2dQU0JrYjJOMWJXVnVkRVZzTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WjJkbGNrVnNJRDBnWkc5amRXMWxiblJGYkM1blpYUkZiR1Z0Wlc1MGMwSjVWR0ZuVG1GdFpTaGNJblZzWENJcFd6QmRPMXh1SUNBZ0lIMWNiaUFnSUNCelkzSnZiR3hDYjNSMGIyMG9aV3hsYldWdWREMXVkV3hzS1h0Y2JpQWdJQ0FnSUNBZ1pXeGxiV1Z1ZENBOUlHVnNaVzFsYm5RZ2ZId2dkR2hwY3k1bWNtRnRaVVZzTzF4dUlDQWdJQ0FnSUNCbGJHVnRaVzUwTG5OamNtOXNiRlJ2Y0NBOUlHVnNaVzFsYm5RdWMyTnliMnhzU0dWcFoyaDBJQzBnWld4bGJXVnVkQzVqYkdsbGJuUklaV2xuYUhRN1hHNGdJQ0FnZlZ4dUlDQWdJSEJ5YjJkeVpYTnpLSEJ5YjJObGMzTk5aWE56WVdkbEtYdGNiaUFnSUNBZ0lDQWdMeThnYkdWMElHNXZaR1VnUFNCMGFHbHpMbXh2WjJkbGNrVnNMbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsS0Z3aWJHazZiblJvTFd4aGMzUXRiMll0ZEhsd1pTZ3hLVndpS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJRXhKVG05a1pYTWdQU0IwYUdsekxteHZaMmRsY2tWc0xtZGxkRVZzWlcxbGJuUnpRbmxVWVdkT1lXMWxLRndpYkdsY0lpazdYRzRnSUNBZ0lDQWdJR3hsZENCdWIyUmxJRDBnVEVsT2IyUmxjMXRNU1U1dlpHVnpMbXhsYm1kMGFDMHhYVHRjYmlBZ0lDQWdJQ0FnYVdZb0lXNXZaR1VnZkh3Z2JtOWtaUzVqYkdGemMweHBjM1F1WTI5dWRHRnBibk1vWENKc2IyZG5aWEl0Y0hKdlozSmxjM05jSWlrcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk5amNtVmhkR1VnYm1WM0lHVnNYRzRnSUNBZ0lDQWdJQ0FnSUNCdWIyUmxJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaGNJbXhwWENJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYm05a1pTNWpiR0Z6YzB4cGMzUXVZV1JrS0Z3aWJHOW5aMlZ5TFhCeWIyZHlaWE56WENJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXNiMmRuWlhKRmJDNWhjSEJsYm1SRGFHbHNaQ2h1YjJSbEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JzWlhRZ2FuTnZiazV2WkdVZ1BTQktjMjl1Vm1sbGR5NUtVMDlPUkdsemNHeGhlU2h3Y205alpYTnpUV1Z6YzJGblpTazdYRzRnSUNBZ0lDQWdJSFpoY2lCa1lYUmxJRDBnYm1WM0lFUmhkR1VvS1R0Y2JpQWdJQ0FnSUNBZ2JtOWtaUzVwYm01bGNraFVUVXdnUFNCZ1BIQWdjM1I1YkdVOVhDSm1iMjUwTFhOcGVtVTZJREV5Y0hnN0lIUmxlSFF0WVd4cFoyNDZjbWxuYUhSY0lqNGtlMlJoZEdWOVBDOXdQbUE3WEc0Z0lDQWdJQ0FnSUc1dlpHVXVZWEJ3Wlc1a1EyaHBiR1FvYW5OdmJrNXZaR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5qY205c2JFSnZkSFJ2YlNncE8xeHVJQ0FnSUgxY2JpQWdJQ0JzYjJjb2JXVnpjMkZuWlNsN1hHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNdWJHVjJaV3dnUGowZ2RHaHBjeTVCWTJObGNIUmxaRXhsZG1Wc2Mxc25iRzluSjEwcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzUxYkd3N1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lvSVhSb2FYTXViRzluWjJWeVJXd2dmSHdnSVhSb2FYTXViRzluWjJWeVJXd3VZWEJ3Wlc1a1EyaHBiR1FwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1amIyNXVaV04wS0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdiR1YwSUc1dlpHVWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtGd2liR2xjSWlrN1hHNGdJQ0FnSUNBZ0lHNXZaR1V1YzNSNWJHVXVZM056VkdWNGRDQTlJQ2RpYjNKa1pYSXRZbTkwZEc5dE9pQXhjSGdnYzI5c2FXUWdJMlJsWkdWa1pUc25PeUFnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdiR1YwSUdwemIyNU9iMlJsSUQwZ1NuTnZibFpwWlhjdVNsTlBUa1JwYzNCc1lYa29iV1Z6YzJGblpTazdYRzRnSUNBZ0lDQWdJSFpoY2lCa1lYUmxJRDBnYm1WM0lFUmhkR1VvS1R0Y2JpQWdJQ0FnSUNBZ2JtOWtaUzVwYm01bGNraFVUVXdnUFNCZ1BIQWdjM1I1YkdVOVhDSm1iMjUwTFhOcGVtVTZJREV5Y0hnN0lIUmxlSFF0WVd4cFoyNDZjbWxuYUhSY0lqNGtlMlJoZEdWOVBDOXdQbUE3WEc0Z0lDQWdJQ0FnSUc1dlpHVXVZWEJ3Wlc1a1EyaHBiR1FvYW5OdmJrNXZaR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXh2WjJkbGNrVnNMbUZ3Y0dWdVpFTm9hV3hrS0c1dlpHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpjbTlzYkVKdmRIUnZiU2dwTzF4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG14dlp5aHRaWE56WVdkbEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCa1pXSjFaeWh0WlhOellXZGxLWHRjYmlBZ0lDQWdJQ0FnYVdZb2RHaHBjeTVzWlhabGJDQStQU0IwYUdsekxrRmpZMlZ3ZEdWa1RHVjJaV3h6V3lka1pXSjFaeWRkS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDOHZibThnYzJodmR5QnZiaUIzWldJZ2MyTnlaV1Z1T3lBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WkdWaWRXY29iV1Z6YzJGblpTazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVjJWaVRtOWtaVTFwZUdsdWN6c2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjkxZEdsc2MxOWZPeUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBCYXNlSW1nRGF0YXNldCB9IGZyb20gJy4vYmFzZUltZ0RhdGFzZXQnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IExvZ2dlck1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQubG9nJztcbmltcG9ydCB7IFN0b3JhZ2VNaXhpbnMsIGluZGV4REJTdG9yYWdlIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IE1lbUNhY2hlTWl4aW5zLCBtZW1Eb3duQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRnVuY3Rpb24gfSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgSW1hZ2VEYXRhc2V0RmV0Y2hNaXhpbnMgfSBmcm9tICcuL2ltYWdlRGF0YXNldEZldGNoLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEltYWdlRGF0YXNldFByZXByb2Nlc3NpbmdNaXhpbnMgfSBmcm9tICcuL2ltYWdlRGF0YXNldFByZXByb2Nlc3NpbmcubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgSW1hZ2VEYXRhc2V0R2VuZXJhdG9yTWl4aW5zIH0gZnJvbSAnLi9pbWFnZURhdGFzZXRHZW5lcmF0b3IubWl4aW5zJztcbmltcG9ydCB7IFByZXByb2Nlc3NpbmdNaXhpbnMsIGltYWdlUHJlcHJvY2Vzc2luZyB9IGZyb20gJ2NhdXNhbC1uZXQucHJlcHJvY2Vzc2luZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1uaXN0RGF0YXNldCBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUltZ0RhdGFzZXQsIFxuICAgICAgICBbIEltYWdlRGF0YXNldEZldGNoTWl4aW5zLFxuICAgICAgICAgIEltYWdlRGF0YXNldFByZXByb2Nlc3NpbmdNaXhpbnMsXG4gICAgICAgICAgUHJlcHJvY2Vzc2luZ01peGlucyxcbiAgICAgICAgICBJbWFnZURhdGFzZXRHZW5lcmF0b3JNaXhpbnMsXG4gICAgICAgICAgTWVtQ2FjaGVNaXhpbnMsXG4gICAgICAgICAgU3RvcmFnZU1peGlucyxcbiAgICAgICAgICBMb2dnZXJNaXhpbnMgXSl7XG4gICAgXG4gICAgY29uc3RydWN0b3IoLi4uYXJncyl7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLkYgPSBuZXcgRnVuY3Rpb24oKTtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gaW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMuTWVtQ2FjaGUgPSBtZW1Eb3duQ2FjaGU7XG4gICAgICAgIGNvbnN0IFByZXByb2Nlc3NpbmdTYW1wbGUgPSBhc3luYyAobWFzdGVyU2FtcGxlQnVmZmVyLCBzYW1wbGVTaXplKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGltYWdlUHJlcHJvY2Vzc2luZy5pbWFnZVNwbGl0KG1hc3RlclNhbXBsZUJ1ZmZlciwgc2FtcGxlU2l6ZSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IFByZXByb2Nlc3NpbmdMYWJlbCA9IGFzeW5jIChtYXN0ZXJMYWJlbEJ1ZmZlciwgbGFiZWxTaXplKT0+e1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGltYWdlUHJlcHJvY2Vzc2luZy5pbWFnZVNwbGl0KG1hc3RlckxhYmVsQnVmZmVyLCBsYWJlbFNpemUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldFByZXByb2Nlc3NpbmdGdW5jdGlvbnMoUHJlcHJvY2Vzc2luZ1NhbXBsZSwgUHJlcHJvY2Vzc2luZ0xhYmVsKTtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUltZ0RhdGFzZXR7XG4gICAgY29uc3RydWN0b3IoZGF0YXNldENvbmZpZ3VyZSl7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGRhdGFzZXRDb25maWd1cmU7XG4gICAgICAgIGNvbnN0IHtudW1TYW1wbGVzLCBzYW1wbGVTaXplLCBudW1DbGFzc2VzfSA9IHRoaXMuY29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5kYXRhU2l6ZSA9IFtudW1TYW1wbGVzLCAuLi5zYW1wbGVTaXplXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubnVtU2FtcGxlcyA9IG51bVNhbXBsZXM7XG4gICAgICAgIHRoaXMuc2FtcGxlU2l6ZSA9IHNhbXBsZVNpemU7XG4gICAgICAgIHRoaXMubnVtQ2xhc3MgICA9IG51bUNsYXNzZXM7XG4gICAgfVxuICAgIFxuICAgIHN1bW1hcnkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbjtcbiAgICB9XG59IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9ufSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRnVuY3Rpb25NaXhpbnN9IGZyb20gJy4vZnVuY3Rpb24ubWl4aW5zJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3Rpb24sW0Z1bmN0aW9uTWl4aW5zXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59IiwiY29uc3QgRnVuY3Rpb25NaXhpbnMgPSAoQmFzZUZ1bmN0aW9uQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRnVuY3Rpb25DbGFzc3sgXG4gICAgZ2V0SW1nQnVmZmVyU2l6ZShpbWdTaXplKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKChzLGQpPT5zKmQsMSxpbWdTaXplKTtcbiAgICB9XG4gICAgZ2VuZXJhdG9yV2l0aEluZGV4KGl0ZW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuYWRkSW5kZXgoUi5tYXApKChkLCBpZHgpPT5baWR4LCBkXSwgaXRlbXMpO1xuICAgIH1cbiAgICBzcGxpdFRyYWluVGVzdFNldChpdGVtcywgc3BsaXRJbmRleCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnNwbGl0QXQoc3BsaXRJbmRleCwgaXRlbXMpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBGdW5jdGlvbk1peGluczsiLCJcbmltcG9ydCB7IFNhbXBsaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5jb25zdCBJbWFnZURhdGFzZXRGZXRjaE1peGlucyA9IChCYXNlSW1hZ2VDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VJbWFnZUNsYXNzeyBcbiAgICBhc3luYyBmZXRjaExhYmVsQ2h1bmsoc2F2ZURpciwgbGFiZWxDaHVuayl7XG4gICAgICAgIGxldCBsYWJlbENodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBsYWJlbENodW5rO1xuICAgICAgICBsZXQgbGFiZWxTYXZlUGF0aCA9IHNhdmVEaXIgKyBsYWJlbENodW5rO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoRmlsZShsYWJlbENodW5rVXJsLCBsYWJlbFNhdmVQYXRoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaFNhbXBsZUNodW5rKHNhdmVEaXIsIHNhbXBsZUNodW5rKXtcbiAgICAgICAgbGV0IHNhbXBsZUNodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBzYW1wbGVDaHVuaztcbiAgICAgICAgbGV0IHNhbW1wbGVTYXZlUGF0aCA9IHNhdmVEaXIgKyBzYW1wbGVDaHVuaztcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZUNodW5rVXJsLCBzYW1tcGxlU2F2ZVBhdGh9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaFBOR0ZpbGUoc2FtcGxlQ2h1bmtVcmwsIHNhbW1wbGVTYXZlUGF0aCk7XG4gICAgfVxuXG4gICAgc2VsZWN0Q2h1bmtzKG51bWNodW5rcywgc2VsZWN0Qnk9J3JhbmRvbScpe1xuICAgICAgICBsZXQgY2h1bmtJZHhzID0gU2FtcGxpbmcuY2hvaWNlKHRoaXMuY29uZmlndXJhdGlvbi5jaHVua0xpc3QsIG51bWNodW5rcyk7XG4gICAgICAgIHJldHVybiBjaHVua0lkeHMubWFwKChpZHgsIGl0aCk9PihbYGRhdGEtY2h1bmstJHtpZHh9LnBuZ2AsYGxhYmVsLWNodW5rLSR7aWR4fWBdKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hEYXRhc2V0KHNhdmVEaXI9Jy9tbmlzdC8nLG51bWNodW5rcz0xMCwgc2VsZWN0Qnk9J3JhbmRvbScpe1xuICAgICAgICBsZXQgc2VsZWN0ZWRDaHVua3MgPSB0aGlzLnNlbGVjdENodW5rcyhudW1jaHVua3MsIHNlbGVjdEJ5KTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rcyA9IFtdO1xuICAgICAgICBmb3IobGV0IFtzYW1wbGVDaHVuaywgbGFiZWxDaHVua10gb2Ygc2VsZWN0ZWRDaHVua3Mpe1xuICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggPSBhd2FpdCB0aGlzLmZldGNoU2FtcGxlQ2h1bmsoc2F2ZURpciwgc2FtcGxlQ2h1bmspO1xuICAgICAgICAgICAgbGV0IGxhYmVsUGF0aCA9IGF3YWl0IHRoaXMuZmV0Y2hMYWJlbENodW5rKHNhdmVEaXIsIGxhYmVsQ2h1bmspO1xuICAgICAgICAgICAgdGhpcy5zYXZlZENodW5rcy5wdXNoKFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Moe3NhdmVDaHVua3M6W3NhbXBsZVBhdGgsIGxhYmVsUGF0aF19KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuRi51bnppcCh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEYXRhc2V0RmV0Y2hNaXhpbnM7IiwiaW1wb3J0IHsgU2FtcGxpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IEltYWdlRGF0YXNldEdlbmVyYXRvck1peGlucyA9IChCYXNlSW1hZ2VDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VJbWFnZUNsYXNzeyBcbiAgICBcbiAgICBnZXRUcmFpblRlc3RTZXQodHJhaW5TaXplPW51bGwpe1xuICAgICAgICB0cmFpblNpemUgPSB0cmFpblNpemV8fHBhcnNlSW50KHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLmxlbmd0aCowLjkpO1xuICAgICAgICBjb25zdCBbdHJhaW5TZXQsIHRlc3RTZXRdID0gdGhpcy5GLnNwbGl0VHJhaW5UZXN0U2V0KHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLCB0cmFpblNpemUpO1xuICAgICAgICByZXR1cm4gW3RyYWluU2V0LCB0ZXN0U2V0XTtcbiAgICB9XG5cbiAgICBtYWtlU2FtcGxlR2VuZXJhdG9yKHNhbXBsZUlkeFNldCwgYmF0Y2hTaXplPW51bGwsIHN0YXJ0PTAsIGVuZD1udWxsKXtcbiAgICAgICAgaWYoIXRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwcmVwcm9jZXNzaW5nIG11c3QgYmUgcGVyZm9ybWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgYmF0Y2hTaXplID0gYmF0Y2hTaXplP2JhdGNoU2l6ZTpzYW1wbGVJZHhTZXQubGVuZ3RoO1xuICAgICAgICBjb25zdCBfYmF0Y2hlcyA9IHRoaXMuRi5oc3BsaXRFdmVyeShzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZSk7XG4gICAgICAgIGNvbnN0IGJhdGNoZXMgPSBTYW1wbGluZy5jaG9pY2UoX2JhdGNoZXMsIF9iYXRjaGVzLmxlbmd0aCk7XG4gICAgICAgIGlmKGVuZCA9PT0gbnVsbCl7XG4gICAgICAgICAgICBlbmQgPSBiYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gc3RhcnQsIGl0ZXJhdGlvbkNvdW50ID0gMCwgc3RlcCA9IDE7XG4gICAgICAgIGNvbnN0IGJhdGNoR2VuZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgIG5leHQ6IGFzeW5jKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhdGNoU2FtcGxlcyA9IFtdLCBiYXRjaExhYmVscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdIG9mIGJhdGNoZXNbbmV4dEluZGV4XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaFNhbXBsZXMgPSBbLi4uYmF0Y2hTYW1wbGVzLCBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoTGFiZWxzID0gWy4uLmJhdGNoTGFiZWxzLCBsYWJlbEl0ZW1bbGFiZWxQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4ICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZHggPSBpdGVyYXRpb25Db3VudDtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtpZHgsIGJhdGNoU2l6ZSwgZGF0YTpbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc119O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZShuZXh0SW5kZXggPCBlbmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYmF0Y2hHZW5lcmF0b3I7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlRGF0YXNldEdlbmVyYXRvck1peGluczsiLCJpbXBvcnQgeyBTdHJlYW0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IEltYWdlRGF0YXNldFByZXByb2Nlc3NpbmdNaXhpbnMgPSAoQmFzZUltYWdlQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlSW1hZ2VDbGFzc3sgXG4gICAgbWFrZVByZXByb2Nlc3NpbmdTdHJlYW0oc2F2ZURpcil7XG4gICAgICAgIGNvbnN0IEltYWdlQnVmZmVyU2l6ZSA9IHRoaXMuRi5nZXRJbWdCdWZmZXJTaXplKHRoaXMuc2FtcGxlU2l6ZSk7XG4gICAgICAgIGNvbnN0IExhYmVsQnVmZmVyU2l6ZSA9IHRoaXMubnVtQ2xhc3M7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtpbWFnZUJ1ZmZlclNpemU6IEltYWdlQnVmZmVyU2l6ZSwgXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbEJ1ZmZlclNpemU6IExhYmVsQnVmZmVyU2l6ZX0pO1xuICAgICAgICBjb25zdCBUcmFuc2Zvcm1GbiA9IChjaHVuaywgY2h1bmtFbmNvZGluZywgYWZ0ZXJUcmFuc2Zvcm1GbikgPT57XG4gICAgICAgICAgICBjb25zdCBUcmFuc2Zvcm1Bc3luYyA9IGFzeW5jICgpPT57XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZUJ1ZmZlciA9IGNodW5rLnNhbXBsZTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxCdWZmZXIgPSBjaHVuay5sYWJlbDtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7c2FtcGxlQnVmZmVyLCBsYWJlbEJ1ZmZlcn0pO1xuICAgICAgICAgICAgICAgIGxldCBwcmVwcm9jZXNzZWRJbWdCdWZmZXIgPSBhd2FpdCB0aGlzLlByZXByb2Nlc3NpbmdTYW1wbGVGbihzYW1wbGVCdWZmZXIsIEltYWdlQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgbGV0IHByZXByb2Nlc3NlZExhYmVsQnVmZmVyID0gYXdhaXQgdGhpcy5QcmVwcm9jZXNzaW5nTGFiZWxGbihsYWJlbEJ1ZmZlciwgTGFiZWxCdWZmZXJTaXplKTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBwcm9jZXNzZWRDaHVuazogdGhpcy5GLnppcChwcmVwcm9jZXNzZWRJbWdCdWZmZXIsIHByZXByb2Nlc3NlZExhYmVsQnVmZmVyKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2h1bmtJZHg6IGNodW5rLmlkeH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgVHJhbnNmb3JtQXN5bmMoY2h1bmspLnRoZW4ocHJvY2Vzc2VkQ2h1bms9PntcbiAgICAgICAgICAgICAgICBhZnRlclRyYW5zZm9ybUZuKG51bGwsIHByb2Nlc3NlZENodW5rKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgV3JpdGVGbiA9IChwcm9jZXNzZWRDaHVuaywgY2h1bmtFbmNvZGluZywgY2FsbGJhY2spID0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBXcml0ZUFzeW5jID0gYXN5bmMgKHByb2Nlc3NlZENodW5rKT0+e1xuICAgICAgICAgICAgICAgIGxldCBnZW5lcmF0b3IgPSB0aGlzLkYuZ2VuZXJhdG9yV2l0aEluZGV4KHByb2Nlc3NlZENodW5rLnByb2Nlc3NlZENodW5rKTtcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtJZHggID0gcHJvY2Vzc2VkQ2h1bmsuY2h1bmtJZHg7XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggID0gW10sIGxhYmVsUGF0aCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZSwgbGFiZWxdXSBvZiBnZW5lcmF0b3Ipe1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtTYW1wbGVQYXRoID0gYXdhaXQgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJdGVtKHNhdmVEaXIgKyAnc2FtcGxlLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgc2FtcGxlKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0xhYmVsUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ2xhYmVsLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVQYXRoID0gWy4uLnNhbXBsZVBhdGgsIGNodW5rU2FtcGxlUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUGF0aCA9IFsuLi5sYWJlbFBhdGgsIGNodW5rTGFiZWxQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyh7cHJlcHJvY2Vzc2luZzogW2NodW5rU2FtcGxlUGF0aCwgY2h1bmtMYWJlbFBhdGhdfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkYuemlwKHNhbXBsZVBhdGgsIGxhYmVsUGF0aCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBXcml0ZUFzeW5jKHByb2Nlc3NlZENodW5rKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zYXZlZFByZXByb2Nlc3Npbmcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyA9IFsuLi50aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgLi4ucmVzdWx0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGR1cGxleGVyID0gU3RyZWFtLm1ha2VEdXBsZXgoV3JpdGVGbik7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1lciA9IFN0cmVhbS5tYWtlVHJhbnNmb3JtKFRyYW5zZm9ybUZuKTtcbiAgICAgICAgbGV0IHN0cmVhbSA9IGR1cGxleGVyLnBpcGUodHJhbnNmb3JtZXIpLnBpcGUoZHVwbGV4ZXIpO1xuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgIH1cblxuICAgIGFzeW5jIHByZXByb2Nlc3NpbmdEYXRhc2V0KHNhdmVEaXI9Jy9wcmVwcm9jZXNzaW5nL21uaXN0Lycsc3RvcmVJbk1lbW9yeT1mYWxzZSl7XG4gICAgICAgIHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UgPSAoc3RvcmVJbk1lbW9yeSk/dGhpcy5tZW1DYWNoZTp0aGlzLnN0b3JhZ2U7XG4gICAgICAgIGxldCBzdHJlYW0gPSB0aGlzLm1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtKHNhdmVEaXIpO1xuICAgICAgICBsZXQgZ2VuZXJhdG9yID0gdGhpcy5GLmdlbmVyYXRvcldpdGhJbmRleCh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgZm9yKGxldCBbaWR4LCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBzYW1wbGUgPSBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbGFiZWxJdGVtW2xhYmVsUGF0aF07XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7c2FtcGxlLCBsYWJlbH0pO1xuICAgICAgICAgICAgc3RyZWFtLnB1c2goe2lkeCwgc2FtcGxlLCBsYWJlbH0pO1xuICAgICAgICB9XG4gICAgICAgIHN0cmVhbS5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHN0cmVhbS5vbignZmluaXNoJywgKCk9PntcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==