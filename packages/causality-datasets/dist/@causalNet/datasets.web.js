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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uLi9jYXVzYWxpdHktbG9nL2Rpc3QvQGNhdXNhbE5ldC9sb2cud2ViLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvTU5JU1QuSW1nRGF0YXNldC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2Jhc2VJbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9pbWFnZURhdGFzZXRGZXRjaC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9pbWFnZURhdGFzZXRHZW5lcmF0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvaW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIk1uaXN0RGF0YXNldCIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VJbWdEYXRhc2V0IiwiSW1hZ2VEYXRhc2V0RmV0Y2hNaXhpbnMiLCJJbWFnZURhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ01peGlucyIsIkltYWdlRGF0YXNldEdlbmVyYXRvck1peGlucyIsIk1lbUNhY2hlTWl4aW5zIiwiU3RvcmFnZU1peGlucyIsIkxvZ2dlck1peGlucyIsImNvbnN0cnVjdG9yIiwiYXJncyIsIkYiLCJGdW5jdGlvbiIsIlN0b3JhZ2UiLCJpbmRleERCU3RvcmFnZSIsIk1lbUNhY2hlIiwibWVtRG93bkNhY2hlIiwiUHJlcHJvY2Vzc2luZ1NhbXBsZSIsIm1hc3RlclNhbXBsZUJ1ZmZlciIsInNhbXBsZVNpemUiLCJpbWFnZVByZXByb2Nlc3NpbmciLCJpbWFnZVNwbGl0IiwiUHJlcHJvY2Vzc2luZ0xhYmVsIiwibWFzdGVyTGFiZWxCdWZmZXIiLCJsYWJlbFNpemUiLCJzZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zIiwiZGF0YXNldENvbmZpZ3VyZSIsImNvbmZpZ3VyYXRpb24iLCJudW1TYW1wbGVzIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwibnVtQ2xhc3MiLCJzdW1tYXJ5IiwiQmFzZUZ1bmN0aW9uIiwiRnVuY3Rpb25NaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImdldEltZ0J1ZmZlclNpemUiLCJpbWdTaXplIiwiUiIsInJlZHVjZSIsInMiLCJkIiwiZ2VuZXJhdG9yV2l0aEluZGV4IiwiaXRlbXMiLCJhZGRJbmRleCIsIm1hcCIsImlkeCIsInNwbGl0VHJhaW5UZXN0U2V0Iiwic3BsaXRJbmRleCIsInNwbGl0QXQiLCJCYXNlSW1hZ2VDbGFzcyIsImZldGNoTGFiZWxDaHVuayIsInNhdmVEaXIiLCJsYWJlbENodW5rIiwibGFiZWxDaHVua1VybCIsImRhdGFzZXRVcmwiLCJsYWJlbFNhdmVQYXRoIiwic3RvcmFnZSIsImZldGNoRmlsZSIsImZldGNoU2FtcGxlQ2h1bmsiLCJzYW1wbGVDaHVuayIsInNhbXBsZUNodW5rVXJsIiwic2FtbXBsZVNhdmVQYXRoIiwibG9nZ2VyIiwiZGVidWciLCJmZXRjaFBOR0ZpbGUiLCJzZWxlY3RDaHVua3MiLCJudW1jaHVua3MiLCJzZWxlY3RCeSIsImNodW5rSWR4cyIsIlNhbXBsaW5nIiwiY2hvaWNlIiwiY2h1bmtMaXN0IiwiaXRoIiwiZmV0Y2hEYXRhc2V0Iiwic2VsZWN0ZWRDaHVua3MiLCJzYXZlZENodW5rcyIsInNhbXBsZVBhdGgiLCJsYWJlbFBhdGgiLCJwdXNoIiwicHJvZ3Jlc3MiLCJzYXZlQ2h1bmtzIiwidW56aXAiLCJnZXRUcmFpblRlc3RTZXQiLCJ0cmFpblNpemUiLCJwYXJzZUludCIsInNhdmVkUHJlcHJvY2Vzc2luZyIsImxlbmd0aCIsInRyYWluU2V0IiwidGVzdFNldCIsIm1ha2VTYW1wbGVHZW5lcmF0b3IiLCJzYW1wbGVJZHhTZXQiLCJiYXRjaFNpemUiLCJzdGFydCIsImVuZCIsIkVycm9yIiwiX2JhdGNoZXMiLCJoc3BsaXRFdmVyeSIsImJhdGNoZXMiLCJuZXh0SW5kZXgiLCJpdGVyYXRpb25Db3VudCIsInN0ZXAiLCJiYXRjaEdlbmVyYXRvciIsIm5leHQiLCJiYXRjaFNhbXBsZXMiLCJiYXRjaExhYmVscyIsInNhbXBsZUl0ZW0iLCJwcmVQcm9jZXNzaW5nU3RvcmFnZSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJkYXRhIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbSIsIkltYWdlQnVmZmVyU2l6ZSIsIkxhYmVsQnVmZmVyU2l6ZSIsImltYWdlQnVmZmVyU2l6ZSIsImxhYmVsQnVmZmVyU2l6ZSIsIlRyYW5zZm9ybUZuIiwiY2h1bmsiLCJjaHVua0VuY29kaW5nIiwiYWZ0ZXJUcmFuc2Zvcm1GbiIsIlRyYW5zZm9ybUFzeW5jIiwic2FtcGxlQnVmZmVyIiwic2FtcGxlIiwibGFiZWxCdWZmZXIiLCJsYWJlbCIsInByZXByb2Nlc3NlZEltZ0J1ZmZlciIsIlByZXByb2Nlc3NpbmdTYW1wbGVGbiIsInByZXByb2Nlc3NlZExhYmVsQnVmZmVyIiwiUHJlcHJvY2Vzc2luZ0xhYmVsRm4iLCJwcm9jZXNzZWRDaHVuayIsInppcCIsImNodW5rSWR4IiwidGhlbiIsIldyaXRlRm4iLCJjYWxsYmFjayIsIldyaXRlQXN5bmMiLCJnZW5lcmF0b3IiLCJjaHVua1NhbXBsZVBhdGgiLCJzZXRJdGVtIiwiY2h1bmtMYWJlbFBhdGgiLCJwcmVwcm9jZXNzaW5nIiwicmVzdWx0IiwiZHVwbGV4ZXIiLCJTdHJlYW0iLCJtYWtlRHVwbGV4IiwidHJhbnNmb3JtZXIiLCJtYWtlVHJhbnNmb3JtIiwic3RyZWFtIiwicGlwZSIsInByZXByb2Nlc3NpbmdEYXRhc2V0Iiwic3RvcmVJbk1lbW9yeSIsIm1lbUNhY2hlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0Es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Q0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxNQUFNLFlBQVk7QUFDckIsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFTRTtBQUFULFNBQWxCO0FBQ0F1QixjQUFNLENBQUN0RSxJQUFQLENBQVk7QUFBQ2pDLGFBQUQ7QUFBTThFLGdCQUFOO0FBQWNFO0FBQWQsU0FBWjtBQUNIOztBQUNEdUIsWUFBTSxDQUFDdEUsSUFBUCxDQUFZLElBQVo7QUFDQSxhQUFPLElBQUkyRSxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQW1CO0FBQ2xDUCxjQUFNLENBQUNRLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLE1BQUk7QUFDcEJGLGlCQUFPLENBQUMsS0FBS3JFLGtCQUFOLENBQVA7QUFDSCxTQUZEO0FBR0gsT0FKTSxDQUFQO0FBS0g7O0FBekVrRixHQUF2Rjs7aUJBMkVlbkYsK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RWYsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kYXRhc2V0cy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCJdLCByb290W1wiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Jhc2VMb2cuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9iYXNlTG9nLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0c10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4gIGNsYXNzIEJhc2VMb2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5BY2NlcHRlZExldmVscyA9IHtcbiAgICAgICAgZGVidWc6IDAsXG4gICAgICAgIGxvZzogMSxcbiAgICAgICAgd2FybmluZzogMixcbiAgICAgICAgZXJyb3I6IDNcbiAgICAgIH07XG4gICAgICB0aGlzLnJBY2NlcHRlZExldmVscyA9IHtcbiAgICAgICAgMDogJ2RlYnVnJyxcbiAgICAgICAgMTogJ2xvZycsXG4gICAgICAgIDI6ICd3YXJuaW5nJyxcbiAgICAgICAgMzogJ2Vycm9yJ1xuICAgICAgfTtcbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddO1xuICAgIH1cblxuICAgIHNldCBMZXZlbChsZXZlbCkge1xuICAgICAgaWYgKHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYCR7bGV2ZWx9IG11c3QgYmUgb25lIG9mICR7T2JqZWN0LmtleXModGhpcy5BY2NlcHRlZExldmVscyl9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IExldmVsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuckFjY2VwdGVkTGV2ZWxzW3RoaXMubGV2ZWxdO1xuICAgIH1cblxuICB9XG5cbiAgX2V4cG9ydHMuZGVmYXVsdCA9IEJhc2VMb2c7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXJtTG9nICovIFwiLi9zcmMvdGVybUxvZy5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlTG9nICovIFwiLi9zcmMvYmFzZUxvZy5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9sb2dnZXIubWl4aW5zICovIFwiLi9zcmMvbG9nZ2VyLm1peGlucy5qc1wiKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMsIF90ZXJtTG9nLCBfYmFzZUxvZywgX2xvZ2dlcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcInRlcm1Mb2dnZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3Rlcm1Mb2cuZGVmYXVsdDtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiQmFzZUxvZ1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfYmFzZUxvZy5kZWZhdWx0O1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJMb2dnZXJNaXhpbnNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2xvZ2dlci5kZWZhdWx0O1xuICAgIH1cbiAgfSk7XG4gIF90ZXJtTG9nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVybUxvZyk7XG4gIF9iYXNlTG9nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFzZUxvZyk7XG4gIF9sb2dnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2dnZXIpO1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2xvZ2dlci5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9sb2dnZXIubWl4aW5zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0c10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4gIGNvbnN0IExvZ2dlck1peGlucyA9IEJhc2VkQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlZENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG5cbiAgICBwcm9ncmVzcyhwcm9ncmVzc01lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxvZ2dlci5wcm9ncmVzcykge1xuICAgICAgICB0aGlzLmxvZ2dlci5wcm9ncmVzcyhwcm9ncmVzc01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNldCBMb2dnZXIobG9nZ2VyKSB7XG4gICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICB9XG5cbiAgICBnZXQgTG9nZ2VyKCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyO1xuICAgIH1cblxuICB9O1xuXG4gIHZhciBfZGVmYXVsdCA9IExvZ2dlck1peGlucztcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3ByZXR0eUpzb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wcmV0dHlKc29uLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0c10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4gIC8vIG9yaWdpbiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2x1Y3lnaWxiZXJ0L2pzb24tZGlzcGxheS9ibG9iL21hc3Rlci9qc29uLWRpc3BsYXkuanNcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE3IEx1Y3kgR2lsYmVydFxuICBjbGFzcyBKc29uVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc3RhdGljIEpTT05EaXNwbGF5KGpzb24sIG9wZW5MZXZlbHNBcmcsIHN0eWxlT3B0aW9uc0FyZykge1xuICAgICAgdmFyIERFRkFVTFRfU1RZTEVfT1BUSU9OUyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHRhZzogJ3ByZScsXG4gICAgICAgICAgc3R5bGU6ICdwYWRkaW5nOiA1cHg7IGZvbnQtc2l6ZTogMXJlbTsnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlQ29udGFpbmVyOiB7XG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICBzdHlsZTogJ21hcmdpbi1ib3R0b206IDNweDsnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXI7J1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZVRleHQ6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgb3BlbkJ1dHRvbjoge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW46IDBweCA3cHggMHB4IDJweDsgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAnICsgJ2JvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjazsnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRzQ29udGFpbmVyOiB7XG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICBzdHlsZTogJ3BhZGRpbmctbGVmdDogMThweDsnXG4gICAgICAgIH0sXG4gICAgICAgIGtleVZhbHVlUGFpcjoge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDJweDsnXG4gICAgICAgIH0sXG4gICAgICAgIGtleToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGRhcmtibHVlOydcbiAgICAgICAgfSxcbiAgICAgICAgc3ltYm9sVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBkYXJrZ3JlZW47J1xuICAgICAgICB9LFxuICAgICAgICBzdHJpbmdWYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGNyaW1zb247J1xuICAgICAgICB9LFxuICAgICAgICBudW1iZXJWYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGJsdWU7J1xuICAgICAgICB9LFxuICAgICAgICBib29sZWFuVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBibHVlOydcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbFZhbHVlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjb2xvcjogYmx1ZTsnXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgb3BlbkxldmVscyA9IGlzTmFOKHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpKSA/IEluZmluaXR5IDogcGFyc2VJbnQob3BlbkxldmVsc0FyZyk7XG4gICAgICB2YXIgc3R5bGVPcHRpb25zID0gdHlwZW9mIHN0eWxlT3B0aW9uc0FyZyA9PT0gJ29iamVjdCcgPyBtZXJnZVN0eWxlT3B0aW9ucyhERUZBVUxUX1NUWUxFX09QVElPTlMsIHN0eWxlT3B0aW9uc0FyZykgOiBERUZBVUxUX1NUWUxFX09QVElPTlM7XG5cbiAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcblxuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnJvb3QudGFnKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnJvb3Quc3R5bGU7XG5cbiAgICAgICAgaWYgKGpzb24gPT09IG51bGwgfHwganNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHZvaWRFbGVtZW50ID0gZ2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh2b2lkRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICB2YXIgZGF0ZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhciBub25FeHBhbmRhYmxlRWxlbWVudCA9IGdldFZhbHVlKGpzb24pO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9uRXhwYW5kYWJsZUVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0aXRsZSA9IEFycmF5LmlzQXJyYXkoanNvbikgPyAnQXJyYXlbJyArIGpzb24ubGVuZ3RoICsgJ10nIDogJ09iamVjdCc7XG4gICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gb3BlbkxldmVscyA8IDE7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChnZXRUaXRsZSh0aXRsZSwgbnVsbCwgdGhpc0xldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCAxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIGluZGV4KSB7XG4gICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgICAgdmFyIG5leHRMZXZlbElzQ2xvc2VkID0gaW5kZXggKyAxID4gb3BlbkxldmVscztcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRlbnRzQ29udGFpbmVyKHRoaXNMZXZlbElzQ2xvc2VkKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnQXJyYXlbJyArIGpzb25ba2V5XS5sZW5ndGggKyAnXScsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSA9PT0gbnVsbCB8fCBqc29uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIG51bGwpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0udG9JU09TdHJpbmcoKSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnT2JqZWN0Jywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhqc29uKS5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoc3ltYm9sLnRvU3RyaW5nKCksIGpzb25bc3ltYm9sXSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0VGl0bGUodGl0bGVUZXh0LCBvcHRpb25hbEtleSwgbGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICB2YXIgY3VycmVudGx5Q2xvc2VkID0gbGV2ZWxJc0Nsb3NlZDtcbiAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIuc3R5bGU7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAndGl0bGVDb250YWluZXInKTtcbiAgICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICAgIHZhciB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZS50YWcpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZS5zdHlsZTtcbiAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZChnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpKTtcblxuICAgICAgICBpZiAob3B0aW9uYWxLZXkpIHtcbiAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkob3B0aW9uYWxLZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuXG4gICAgICAgIHRpdGxlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBvcGVuQnV0dG9uID0gdGl0bGVFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgb2JqZWN0Q29udGVudHMuc3R5bGUuZGlzcGxheSA9IGN1cnJlbnRseUNsb3NlZCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgb3BlbkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50bHlDbG9zZWQgPyAncm90YXRlKDkwZGVnKScgOiAncm90YXRlKDBkZWcpJztcbiAgICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm9wZW5CdXR0b24udGFnKTtcbiAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm9wZW5CdXR0b24uc3R5bGU7XG4gICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0Q29udGVudHNDb250YWluZXIoaXNDbG9zZWQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ2NvbnRlbnRzQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNDbG9zZWQgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHBhaXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnRhZyk7XG4gICAgICAgIHBhaXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnN0eWxlO1xuICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldFZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiBwYWlyRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0S2V5KG5hbWUpIHtcbiAgICAgICAgdmFyIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXkudGFnKTtcbiAgICAgICAga2V5RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleS5zdHlsZTtcbiAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lICsgJzogJykpO1xuICAgICAgICByZXR1cm4ga2V5RWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgICAgdmFyIG51bGxUeXBlID0gJ29iamVjdCc7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCInICsgdmFsdWUgKyAnXCInKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS50YWcpO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIG51bGxUeXBlOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udWxsVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgICB2YXIgbWVyZ2VkID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgbWVyZ2VkW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0c1trZXldLCBvdmVycmlkZXNba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVuZGVyKCk7XG4gICAgfVxuXG4gIH1cblxuICBfZXhwb3J0cy5kZWZhdWx0ID0gSnNvblZpZXc7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2cuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VMb2cgKi8gXCIuL3NyYy9iYXNlTG9nLmpzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Rlcm1Mb2cubWl4aW5zLm5vZGUgKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Rlcm1Mb2cubWl4aW5zLndlYiAqLyBcIi4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC51dGlscyAqLyBcImNhdXNhbC1uZXQudXRpbHNcIildLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzLCBfYmFzZUxvZywgX3Rlcm1Mb2dNaXhpbnMsIF90ZXJtTG9nTWl4aW5zMiwgX2NhdXNhbE5ldCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgX2Jhc2VMb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlTG9nKTtcbiAgX3Rlcm1Mb2dNaXhpbnMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXJtTG9nTWl4aW5zKTtcbiAgX3Rlcm1Mb2dNaXhpbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVybUxvZ01peGluczIpO1xuXG4gIGNsYXNzIFRlcm1Mb2cgZXh0ZW5kcyBfY2F1c2FsTmV0LlBsYXRmb3JtLm1peFdpdGgoX2Jhc2VMb2cuZGVmYXVsdCwge1xuICAgICdub2RlJzogW190ZXJtTG9nTWl4aW5zLmRlZmF1bHRdLFxuICAgICd3ZWInOiBbX3Rlcm1Mb2dNaXhpbnMyLmRlZmF1bHRdXG4gIH0pIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gIH1cblxuICB2YXIgX2RlZmF1bHQgPSBuZXcgVGVybUxvZygpO1xuXG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICBjb25zdCBMb2dOb2RlTWl4aW5zID0gTG9nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzcyB7XG4gICAgY29ubmVjdChjaGFubmVsKSB7Ly9ub3RoaW5nXG4gICAgfVxuXG4gICAgbG9nKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSkgey8vVE9ETzogaW1wbGVtZW50IHByb2dyZXNzIHNob3dcbiAgICB9XG5cbiAgICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cblxuICB9O1xuXG4gIHZhciBfZGVmYXVsdCA9IExvZ05vZGVNaXhpbnM7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wcmV0dHlKc29uICovIFwiLi9zcmMvcHJldHR5SnNvbi5qc1wiKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMsIF9wcmV0dHlKc29uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIik7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBfcHJldHR5SnNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXR0eUpzb24pO1xuXG4gIGNvbnN0IFdlYk5vZGVNaXhpbnMgPSBMb2dDbGFzcyA9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNzIHtcbiAgICBjb25uZWN0KGRvY3VtZW50RWwgPSBudWxsKSB7XG4gICAgICBkb2N1bWVudEVsID0gZG9jdW1lbnRFbCB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBcImxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcIjtcbiAgICAgIGRvY3VtZW50RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB0aGlzLmZyYW1lRWwgPSBkb2N1bWVudEVsO1xuICAgICAgdGhpcy5sb2dnZXJFbCA9IGRvY3VtZW50RWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1bFwiKVswXTtcbiAgICB9XG5cbiAgICBzY3JvbGxCb3R0b20oZWxlbWVudCA9IG51bGwpIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuZnJhbWVFbDtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9XG5cbiAgICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSkge1xuICAgICAgLy8gbGV0IG5vZGUgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGk6bnRoLWxhc3Qtb2YtdHlwZSgxKVwiKTtcbiAgICAgIGxldCBMSU5vZGVzID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgICAgbGV0IG5vZGUgPSBMSU5vZGVzW0xJTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghbm9kZSB8fCBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlci1wcm9ncmVzc1wiKSkge1xuICAgICAgICAvL2NyZWF0ZSBuZXcgZWxcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VyLXByb2dyZXNzXCIpO1xuICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBsZXQganNvbk5vZGUgPSBfcHJldHR5SnNvbi5kZWZhdWx0LkpTT05EaXNwbGF5KHByb2Nlc3NNZXNzYWdlKTtcblxuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgfVxuXG4gICAgbG9nKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMubG9nZ2VyRWwgfHwgIXRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICB9XG5cbiAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gJ2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlOyc7XG5cbiAgICAgIGxldCBqc29uTm9kZSA9IF9wcmV0dHlKc29uLmRlZmF1bHQuSlNPTkRpc3BsYXkobWVzc2FnZSk7XG5cbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IC8vbm8gc2hvdyBvbiB3ZWIgc2NyZWVuOyAgICAgICAgXG5cblxuICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgfTtcblxuICB2YXIgX2RlZmF1bHQgPSBXZWJOb2RlTWl4aW5zO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDA6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIG11bHRpIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zcmMvaW5kZXguanMgKi9cIi4vc3JjL2luZGV4LmpzXCIpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQudXRpbHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyeHZaeTkzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5c2IyY3ZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5c2IyY3ZMMmh2YldVdmFIVjVibWh1WjNWNVpXNHZaMmwwYUhWaUwyTmhkWE5oYkdsMGVTOXViMlJsWDIxdlpIVnNaWE12UUdKaFltVnNMM0oxYm5ScGJXVXZhR1ZzY0dWeWN5OXBiblJsY205d1VtVnhkV2x5WlVSbFptRjFiSFF1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdkxpOXpjbU12WW1GelpVeHZaeTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk4dUwzTnlZeTlzYjJkblpYSXViV2w0YVc1ekxtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJHOW5MeTR2YzNKakwzQnlaWFIwZVVwemIyNHVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2TGk5emNtTXZkR1Z5YlV4dlp5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyeHZaeTh1TDNOeVl5OTBaWEp0VEc5bkxtMXBlR2x1Y3k1dWIyUmxMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiRzluTHk0dmMzSmpMM1JsY20xTWIyY3ViV2w0YVc1ekxuZGxZaTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpSmRMQ0p1WVcxbGN5STZXeUpDWVhObFRHOW5JaXdpWTI5dWMzUnlkV04wYjNJaUxDSkJZMk5sY0hSbFpFeGxkbVZzY3lJc0ltUmxZblZuSWl3aWJHOW5JaXdpZDJGeWJtbHVaeUlzSW1WeWNtOXlJaXdpY2tGalkyVndkR1ZrVEdWMlpXeHpJaXdpYkdWMlpXd2lMQ0pNWlhabGJDSXNJblZ1WkdWbWFXNWxaQ0lzSWtWeWNtOXlJaXdpVDJKcVpXTjBJaXdpYTJWNWN5SXNJa3h2WjJkbGNrMXBlR2x1Y3lJc0lrSmhjMlZrUTJ4aGMzTWlMQ0poY21keklpd2liRzluWjJWeUlpd2lZMjl1YzI5c1pTSXNJbkJ5YjJkeVpYTnpJaXdpY0hKdlozSmxjM05OWlhOellXZGxJaXdpVEc5bloyVnlJaXdpU25OdmJsWnBaWGNpTENKS1UwOU9SR2x6Y0d4aGVTSXNJbXB6YjI0aUxDSnZjR1Z1VEdWMlpXeHpRWEpuSWl3aWMzUjViR1ZQY0hScGIyNXpRWEpuSWl3aVJFVkdRVlZNVkY5VFZGbE1SVjlQVUZSSlQwNVRJaXdpY205dmRDSXNJblJoWnlJc0luTjBlV3hsSWl3aWRHbDBiR1ZEYjI1MFlXbHVaWElpTENKMGFYUnNaU0lzSW5ScGRHeGxWR1Y0ZENJc0ltOXdaVzVDZFhSMGIyNGlMQ0pqYjI1MFpXNTBjME52Ym5SaGFXNWxjaUlzSW10bGVWWmhiSFZsVUdGcGNpSXNJbXRsZVNJc0luTjViV0p2YkZaaGJIVmxJaXdpYzNSeWFXNW5WbUZzZFdVaUxDSnVkVzFpWlhKV1lXeDFaU0lzSW1KdmIyeGxZVzVXWVd4MVpTSXNJbTUxYkd4V1lXeDFaU0lzSW05d1pXNU1aWFpsYkhNaUxDSnBjMDVoVGlJc0luQmhjbk5sU1c1MElpd2lTVzVtYVc1cGRIa2lMQ0p6ZEhsc1pVOXdkR2x2Ym5NaUxDSnRaWEpuWlZOMGVXeGxUM0IwYVc5dWN5SXNJbUZ6YzJsbmJpSXNJblJoY21kbGRDSXNJbFI1Y0dWRmNuSnZjaUlzSW5Sdklpd2lhVzVrWlhnaUxDSmhjbWQxYldWdWRITWlMQ0pzWlc1bmRHZ2lMQ0p1WlhoMFUyOTFjbU5sSWl3aWJtVjRkRXRsZVNJc0luQnliM1J2ZEhsd1pTSXNJbWhoYzA5M2JsQnliM0JsY25SNUlpd2lZMkZzYkNJc0luSmxibVJsY2lJc0ltVnNaVzFsYm5RaUxDSmtiMk4xYldWdWRDSXNJbU55WldGMFpVVnNaVzFsYm5RaUxDSmpjM05VWlhoMElpd2lkbTlwWkVWc1pXMWxiblFpTENKblpYUldZV3gxWlNJc0ltRndjR1Z1WkVOb2FXeGtJaXdpUkdGMFpTSXNJbVJoZEdWRmJHVnRaVzUwSWl3aWRHOUpVMDlUZEhKcGJtY2lMQ0p1YjI1RmVIQmhibVJoWW14bFJXeGxiV1Z1ZENJc0lrRnljbUY1SWl3aWFYTkJjbkpoZVNJc0luUm9hWE5NWlhabGJFbHpRMnh2YzJWa0lpd2laMlYwVkdsMGJHVWlMQ0pqYjI1MlpYSjBTbk52YmxSdlJXeGxiV1Z1ZEhNaUxDSnVaWGgwVEdWMlpXeEpjME5zYjNObFpDSXNJbU52Ym5SaGFXNWxjaUlzSW1kbGRFTnZiblJsYm5SelEyOXVkR0ZwYm1WeUlpd2laMlYwVTNSaGJtUmhjbVJRWVdseUlpd2laMlYwVDNkdVVISnZjR1Z5ZEhsVGVXMWliMnh6SWl3aVptOXlSV0ZqYUNJc0luTjViV0p2YkNJc0luUnZVM1J5YVc1bklpd2liM0IwYVc5dVlXeExaWGtpTENKc1pYWmxiRWx6UTJ4dmMyVmtJaXdpWTNWeWNtVnVkR3g1UTJ4dmMyVmtJaXdpWTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0lzSW5ObGRFRjBkSEpwWW5WMFpTSXNJblJsZUhSRmJHVnRaVzUwSWl3aWRHbDBiR1ZGYkdWdFpXNTBJaXdpWjJWMFQzQmxia0oxZEhSdmJpSXNJbWRsZEV0bGVTSXNJbU55WldGMFpWUmxlSFJPYjJSbElpd2liMjVqYkdsamF5SXNJbVpwY25OMFEyaHBiR1FpTENKdlltcGxZM1JEYjI1MFpXNTBjeUlzSW5CaGNtVnVkRTV2WkdVaUxDSnVaWGgwVTJsaWJHbHVaeUlzSW1ScGMzQnNZWGtpTENKMGNtRnVjMlp2Y20waUxDSmlkWFIwYjI1RmJHVnRaVzUwSWl3aWFYTkRiRzl6WldRaUxDSjJZV3gxWlNJc0luQmhhWEpGYkdWdFpXNTBJaXdpYm1GdFpTSXNJbXRsZVVWc1pXMWxiblFpTENKMllXeDFaVVZzWlcxbGJuUWlMQ0p1ZFd4c1ZIbHdaU0lzSW1SbFptRjFiSFJ6SWl3aWIzWmxjbkpwWkdWeklpd2liV1Z5WjJWa0lpd2lWR1Z5YlV4dlp5SXNJbEJzWVhSbWIzSnRJaXdpYldsNFYybDBhQ0lzSWt4dlowNXZaR1ZOYVhocGJuTWlMQ0pYWldKT2IyUmxUV2w0YVc1eklpd2lURzluUTJ4aGMzTWlMQ0pqYjI1dVpXTjBJaXdpWTJoaGJtNWxiQ0lzSW0xbGMzTmhaMlVpTENKd2NtOWpaWE56VFdWemMyRm5aU0lzSW1SdlkzVnRaVzUwUld3aUxDSmliMlI1SWl3aWJtOWtaU0lzSW1aeVlXMWxSV3dpTENKc2IyZG5aWEpGYkNJc0ltZGxkRVZzWlcxbGJuUnpRbmxVWVdkT1lXMWxJaXdpYzJOeWIyeHNRbTkwZEc5dElpd2ljMk55YjJ4c1ZHOXdJaXdpYzJOeWIyeHNTR1ZwWjJoMElpd2lZMnhwWlc1MFNHVnBaMmgwSWl3aVRFbE9iMlJsY3lJc0ltTnNZWE56VEdsemRDSXNJbU52Ym5SaGFXNXpJaXdpWVdSa0lpd2lhbk52Yms1dlpHVWlMQ0prWVhSbElpd2lhVzV1WlhKSVZFMU1JbDBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFFzVHp0QlExWkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2EwUkJRVEJETEdkRFFVRm5RenRCUVVNeFJUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZEZRVUYzUkN4clFrRkJhMEk3UVVGRE1VVTdRVUZEUVN4NVJFRkJhVVFzWTBGQll6dEJRVU12UkRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVSQlFYbERMR2xEUVVGcFF6dEJRVU14UlN4M1NFRkJaMGdzYlVKQlFXMUNMRVZCUVVVN1FVRkRja2s3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3h0UTBGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3UVVGRGRrUXNlVU5CUVdsRExHVkJRV1U3UVVGRGFFUTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzT0VSQlFYTkVMQ3RFUVVFclJEczdRVUZGY2tnN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN096czdPenM3T3pzN08wRkRiRVpCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzZDBNN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFRtVXNVVUZCVFVFc1QwRkJUaXhEUVVGaE8wRkJRM2hDUXl4bFFVRlhMRWRCUVVVN1FVRkRWQ3hYUVVGTFF5eGpRVUZNTEVkQlFYTkNPMEZCUVVORExHRkJRVXNzUlVGQlJTeERRVUZTTzBGQlFWZERMRmRCUVVjc1JVRkJReXhEUVVGbU8wRkJRV3RDUXl4bFFVRlBMRVZCUVVNc1EwRkJNVUk3UVVGQk5rSkRMR0ZCUVVzc1JVRkJSVHRCUVVGd1F5eFBRVUYwUWp0QlFVTkJMRmRCUVV0RExHVkJRVXdzUjBGQmRVSTdRVUZCUXl4WFFVRkZMRTlCUVVnN1FVRkJXU3hYUVVGSExFdEJRV1k3UVVGQmMwSXNWMEZCUnl4VFFVRjZRanRCUVVGdlF5eFhRVUZITzBGQlFYWkRMRTlCUVhaQ08wRkJRMEVzVjBGQlMwTXNTMEZCVEN4SFFVRmhMRXRCUVV0T0xHTkJRVXdzUTBGQmIwSXNUMEZCY0VJc1EwRkJZanRCUVVOSU96dEJRVU5FTEZGQlFVbFBMRXRCUVVvc1EwRkJWVVFzUzBGQlZpeEZRVUZuUWp0QlFVTmFMRlZCUVVjc1MwRkJTMDRzWTBGQlRDeERRVUZ2UWswc1MwRkJjRUlzVFVGQk5rSkZMRk5CUVdoRExFVkJRVEJETzBGQlEzUkRMR0ZCUVV0R0xFdEJRVXdzUjBGQllTeExRVUZMVGl4alFVRk1MRU5CUVc5Q1RTeExRVUZ3UWl4RFFVRmlPMEZCUTBnc1QwRkdSQ3hOUVVkSk8wRkJRMEVzWTBGQlRVY3NTMEZCU3l4RFFVRkZMRWRCUVVWSUxFdEJRVTBzYlVKQlFXdENTU3hOUVVGTkxFTkJRVU5ETEVsQlFWQXNRMEZCV1N4TFFVRkxXQ3hqUVVGcVFpeERRVUZwUXl4RlFVRTNSQ3hEUVVGWU8wRkJRMGc3UVVGRFNqczdRVUZEUkN4UlFVRkpUeXhMUVVGS0xFZEJRVmM3UVVGRFVDeGhRVUZQTEV0QlFVdEdMR1ZCUVV3c1EwRkJjVUlzUzBGQlMwTXNTMEZCTVVJc1EwRkJVRHRCUVVOSU96dEJRV2hDZFVJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVU5CTlVJc1VVRkJUVTBzV1VGQldTeEhRVUZKUXl4VlFVRkVMRWxCUVdVc1kwRkJZMEVzVlVGQlpDeERRVUYzUWp0QlFVTjRSR1FzWlVGQlZ5eERRVUZETEVkQlFVZGxMRWxCUVVvc1JVRkJVenRCUVVOb1FpeFpRVUZOTEVkQlFVZEJMRWxCUVZRN1FVRkRRU3hYUVVGTFF5eE5RVUZNTEVkQlFXTkRMRTlCUVdRN1FVRkRTRHM3UVVGRFJFTXNXVUZCVVN4RFFVRkRReXhsUVVGRUxFVkJRV2xDTzBGQlEzSkNMRlZCUVVjc1MwRkJTMGdzVFVGQlRDeERRVUZaUlN4UlFVRm1MRVZCUVhkQ08wRkJRM0JDTEdGQlFVdEdMRTFCUVV3c1EwRkJXVVVzVVVGQldpeERRVUZ4UWtNc1pVRkJja0k3UVVGRFNEdEJRVU5LT3p0QlFVTkVMRkZCUVVsRExFMUJRVW9zUTBGQlYwb3NUVUZCV0N4RlFVRnJRanRCUVVOa0xGZEJRVXRCTEUxQlFVd3NSMEZCWTBFc1RVRkJaRHRCUVVOSU96dEJRVVZFTEZGQlFVbEpMRTFCUVVvc1IwRkJXVHRCUVVOU0xHRkJRVThzUzBGQlMwb3NUVUZCV2p0QlFVTklPenRCUVdoQ2RVUXNSMEZCTlVRN08ybENRVzFDWlVnc1dUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMjVDWmp0QlFVTkJPMEZCUTJVc1VVRkJUVkVzVVVGQlRpeERRVUZqTzBGQlEzcENja0lzWlVGQlZ5eEhRVUZGTEVOQlExbzdPMEZCUTBRc1YwRkJUM05DTEZkQlFWQXNRMEZCYlVKRExFbEJRVzVDTEVWQlFYbENReXhoUVVGNlFpeEZRVUYzUTBNc1pVRkJlRU1zUlVGQmVVUTdRVUZEY2tRc1ZVRkJTVU1zY1VKQlFYRkNMRWRCUVVjN1FVRkRNVUpETEZsQlFVa3NSVUZCUlR0QlFVRkZReXhoUVVGSExFVkJRVVVzUzBGQlVEdEJRVUZqUXl4bFFVRkxMRVZCUVVVN1FVRkJja0lzVTBGRWIwSTdRVUZGTVVKRExITkNRVUZqTEVWQlFVVTdRVUZCUlVZc1lVRkJSeXhGUVVGRkxFdEJRVkE3UVVGQlkwTXNaVUZCU3l4RlFVRkZPMEZCUVhKQ0xGTkJSbFU3UVVGSE1VSkZMR0ZCUVVzc1JVRkJSVHRCUVVGRlNDeGhRVUZITEVWQlFVVXNUVUZCVUR0QlFVRmxReXhsUVVGTExFVkJRVVU3UVVGQmRFSXNVMEZJYlVJN1FVRkpNVUpITEdsQ1FVRlRMRVZCUVVVN1FVRkJSVW9zWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTEZOQlNtVTdRVUZMTVVKSkxHdENRVUZWTEVWQlFVVTdRVUZEVmt3c1lVRkJSeXhGUVVGRkxFMUJSRXM3UVVGRlZrTXNaVUZCU3l4RlFVRkZMSGRHUVVOQk8wRkJTRWNzVTBGTVl6dEJRVlV4UWtzc2VVSkJRV2xDTEVWQlFVVTdRVUZCUlU0c1lVRkJSeXhGUVVGRkxFdEJRVkE3UVVGQlkwTXNaVUZCU3l4RlFVRkZPMEZCUVhKQ0xGTkJWazg3UVVGWE1VSk5MRzlDUVVGWkxFVkJRVVU3UVVGQlJWQXNZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNMRk5CV0ZrN1FVRlpNVUpQTEZkQlFVY3NSVUZCUlR0QlFVRkZVaXhoUVVGSExFVkJRVVVzVFVGQlVEdEJRVUZsUXl4bFFVRkxMRVZCUVVVN1FVRkJkRUlzVTBGYWNVSTdRVUZoTVVKUkxHMUNRVUZYTEVWQlFVVTdRVUZCUlZRc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ0xGTkJZbUU3UVVGak1VSlRMRzFDUVVGWExFVkJRVVU3UVVGQlJWWXNZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNMRk5CWkdFN1FVRmxNVUpWTEcxQ1FVRlhMRVZCUVVVN1FVRkJSVmdzWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTEZOQlptRTdRVUZuUWpGQ1Z5eHZRa0ZCV1N4RlFVRkZPMEZCUVVWYUxHRkJRVWNzUlVGQlJTeE5RVUZRTzBGQlFXVkRMR1ZCUVVzc1JVRkJSVHRCUVVGMFFpeFRRV2hDV1R0QlFXbENNVUpaTEdsQ1FVRlRMRVZCUVVVN1FVRkJSV0lzWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTzBGQmFrSmxMRTlCUVRWQ08wRkJiVUpCTEZWQlFVbGhMRlZCUVZVc1IwRkJSME1zUzBGQlN5eERRVUZEUXl4UlFVRlJMRU5CUVVOd1FpeGhRVUZFTEVOQlFWUXNRMEZCVEN4SFFVRnBRM0ZDTEZGQlFXcERMRWRCUVRSRFJDeFJRVUZSTEVOQlFVTndRaXhoUVVGRUxFTkJRWEpGTzBGQlEwRXNWVUZCU1hOQ0xGbEJRVmtzUjBGQlJ5eFBRVUZQY2tJc1pVRkJVQ3hMUVVFeVFpeFJRVUV6UWl4SFFVTkZjMElzYVVKQlFXbENMRU5CUVVOeVFpeHhRa0ZCUkN4RlFVRjNRa1FzWlVGQmVFSXNRMEZFYmtJc1IwRkZSVU1zY1VKQlJuSkNPenRCUVVsQkxGVkJRVWtzVDBGQlQyWXNUVUZCVFN4RFFVRkRjVU1zVFVGQlpDeEpRVUYzUWl4VlFVRTFRaXhGUVVGM1F6dEJRVU4wUTNKRExHTkJRVTBzUTBGQlEzRkRMRTFCUVZBc1IwRkJaMElzVlVGQlUwTXNUVUZCVkN4RlFVRnBRanRCUVVNdlFpeGpRVUZKUVN4TlFVRk5MRWxCUVVrc1NVRkJaQ3hGUVVGdlFqdEJRVU5zUWl4clFrRkJUU3hKUVVGSlF5eFRRVUZLTEVOQlFXTXNORU5CUVdRc1EwRkJUanRCUVVORU96dEJRVVZFTEdOQlFVbERMRVZCUVVVc1IwRkJSM2hETEUxQlFVMHNRMEZCUTNORExFMUJRVVFzUTBGQlpqczdRVUZGUVN4bFFVRkxMRWxCUVVsSExFdEJRVXNzUjBGQlJ5eERRVUZxUWl4RlFVRnZRa0VzUzBGQlN5eEhRVUZIUXl4VFFVRlRMRU5CUVVORExFMUJRWFJETEVWQlFUaERSaXhMUVVGTExFVkJRVzVFTEVWQlFYVkVPMEZCUTNKRUxHZENRVUZKUnl4VlFVRlZMRWRCUVVkR0xGTkJRVk1zUTBGQlEwUXNTMEZCUkN4RFFVRXhRanM3UVVGRlFTeG5Ra0ZCU1Vjc1ZVRkJWU3hKUVVGSkxFbEJRV3hDTEVWQlFYZENPMEZCUTNSQ0xHMUNRVUZMTEVsQlFVbERMRTlCUVZRc1NVRkJiMEpFTEZWQlFYQkNMRVZCUVdkRE8wRkJRemxDTEc5Q1FVRkpOVU1zVFVGQlRTeERRVUZET0VNc1UwRkJVQ3hEUVVGcFFrTXNZMEZCYWtJc1EwRkJaME5ETEVsQlFXaERMRU5CUVhGRFNpeFZRVUZ5UXl4RlFVRnBSRU1zVDBGQmFrUXNRMEZCU2l4RlFVRXJSRHRCUVVNM1JFd3NiMEpCUVVVc1EwRkJRMHNzVDBGQlJDeERRVUZHTEVkQlFXTkVMRlZCUVZVc1EwRkJRME1zVDBGQlJDeERRVUY0UWp0QlFVTkVPMEZCUTBZN1FVRkRSanRCUVVOR096dEJRVU5FTEdsQ1FVRlBUQ3hGUVVGUU8wRkJRMFFzVTBGdVFrUTdRVUZ2UWtRN08wRkJSVVFzWlVGQlUxTXNUVUZCVkN4SFFVRnJRanRCUVVOb1FpeFpRVUZKUXl4UFFVRlBMRWRCUVVkRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTI1Q0xFbEJRV0lzUTBGQmEwSkRMRWRCUVhwRExFTkJRV1E3UVVGRFFXbERMR1ZCUVU4c1EwRkJRMmhETEV0QlFWSXNRMEZCWTIxRExFOUJRV1FzUjBGQmQwSnNRaXhaUVVGWkxFTkJRVU51UWl4SlFVRmlMRU5CUVd0Q1JTeExRVUV4UXpzN1FVRkZRU3haUVVGSlRpeEpRVUZKTEV0QlFVc3NTVUZCVkN4SlFVRnBRa0VzU1VGQlNTeExRVUZMWkN4VFFVRTVRaXhGUVVGNVF6dEJRVU4yUXl4alFVRkpkMFFzVjBGQlZ5eEhRVUZIUXl4UlFVRlJMRU5CUVVNc1NVRkJSQ3hEUVVFeFFqdEJRVU5CVEN4cFFrRkJUeXhEUVVGRFRTeFhRVUZTTEVOQlFXOUNSaXhYUVVGd1FqdEJRVU5FTEZOQlNFUXNUVUZIVHl4SlFVRkpNVU1zU1VGQlNTeFpRVUZaTmtNc1NVRkJjRUlzUlVGQk1FSTdRVUZETDBJc1kwRkJTVU1zVjBGQlZ5eEhRVUZIU0N4UlFVRlJMRU5CUVVNelF5eEpRVUZKTEVOQlFVTXJReXhYUVVGTUxFVkJRVVFzUTBGQk1VSTdRVUZEUVZRc2FVSkJRVThzUTBGQlEwMHNWMEZCVWl4RFFVRnZRa1VzVjBGQmNFSTdRVUZEUkN4VFFVaE5MRTFCUjBFc1NVRkJTU3hQUVVGUE9VTXNTVUZCVUN4TFFVRm5RaXhSUVVGd1FpeEZRVUU0UWp0QlFVTnVReXhqUVVGSlowUXNiMEpCUVc5Q0xFZEJRVWRNTEZGQlFWRXNRMEZCUXpORExFbEJRVVFzUTBGQmJrTTdRVUZEUVhORExHbENRVUZQTEVOQlFVTk5MRmRCUVZJc1EwRkJiMEpKTEc5Q1FVRndRanRCUVVORUxGTkJTRTBzVFVGSFFUdEJRVU5NTEdOQlFVbDRReXhMUVVGTExFZEJRVWQ1UXl4TFFVRkxMRU5CUVVORExFOUJRVTRzUTBGQlkyeEVMRWxCUVdRc1NVRkJjMElzVjBGQlYwRXNTVUZCU1N4RFFVRkRLMElzVFVGQmFFSXNSMEZCZVVJc1IwRkJMME1zUjBGQmNVUXNVVUZCYWtVN1FVRkRRU3hqUVVGSmIwSXNhVUpCUVdsQ0xFZEJRVWRvUXl4VlFVRlZMRWRCUVVjc1EwRkJja003UVVGRFFXMUNMR2xDUVVGUExFTkJRVU5OTEZkQlFWSXNRMEZCYjBKUkxGRkJRVkVzUTBGQlF6VkRMRXRCUVVRc1JVRkJVU3hKUVVGU0xFVkJRV015UXl4cFFrRkJaQ3hEUVVFMVFqdEJRVU5CWWl4cFFrRkJUeXhEUVVGRFRTeFhRVUZTTEVOQlFXOUNVeXh4UWtGQmNVSXNRMEZCUTNKRUxFbEJRVVFzUlVGQlR5eERRVUZRTEVOQlFYcERPMEZCUTBRN08wRkJSVVFzWlVGQlQzTkRMRTlCUVZBN1FVRkRSRHM3UVVGRlJDeGxRVUZUWlN4eFFrRkJWQ3hEUVVFclFuSkVMRWxCUVM5Q0xFVkJRWEZETmtJc1MwRkJja01zUlVGQk5FTTdRVUZETVVNc1dVRkJTWE5DTEdsQ1FVRnBRaXhIUVVGSGRFSXNTMEZCU3l4SFFVRkhWaXhWUVVGb1F6dEJRVU5CTEZsQlFVbHRReXhwUWtGQmFVSXNSMEZCUjNwQ0xFdEJRVXNzUjBGQlJ5eERRVUZTTEVkQlFWbFdMRlZCUVhCRE8wRkJRMEVzV1VGQlNXOURMRk5CUVZNc1IwRkJSME1zYjBKQlFXOUNMRU5CUVVOTUxHbENRVUZFTEVOQlFYQkRPenRCUVVOQkxHRkJRVXNzU1VGQlNYUkRMRWRCUVZRc1NVRkJaMEppTEVsQlFXaENMRVZCUVhOQ08wRkJRM0JDTEdOQlFVbHBSQ3hMUVVGTExFTkJRVU5ETEU5QlFVNHNRMEZCWTJ4RUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRnNRaXhEUVVGS0xFVkJRVGhDTzBGQlF6VkNNRU1zY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFsRXNVVUZCVVN4RFFVRkRMRmRCUVZkd1JDeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJTaXhEUVVGVmEwSXNUVUZCY2tJc1IwRkJPRUlzUjBGQkwwSXNSVUZCYjBOc1FpeEhRVUZ3UXl4RlFVRjVRM2xETEdsQ1FVRjZReXhEUVVFNVFqdEJRVU5CUXl4eFFrRkJVeXhEUVVGRFdDeFhRVUZXTEVOQlFYTkNVeXh4UWtGQmNVSXNRMEZCUTNKRUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRk1MRVZCUVZsblFpeExRVUZMTEVkQlFVY3NRMEZCY0VJc1EwRkJNME03UVVGRFJDeFhRVWhFTEUxQlIwOHNTVUZCU1RkQ0xFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRktMRXRCUVdNc1NVRkJaQ3hKUVVGelFtSXNTVUZCU1N4RFFVRkRZU3hIUVVGRUxFTkJRVW9zUzBGQll6TkNMRk5CUVhoRExFVkJRVzFFTzBGQlEzaEVjVVVzY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkROVU1zUjBGQlJDeEZRVUZOTEVsQlFVNHNRMEZCY2tNN1FVRkRSQ3hYUVVaTkxFMUJSVUVzU1VGQlNXSXNTVUZCU1N4RFFVRkRZU3hIUVVGRUxFTkJRVW9zV1VGQmNVSm5ReXhKUVVGNlFpeEZRVUVyUWp0QlFVTndRMVVzY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkROVU1zUjBGQlJDeEZRVUZOWWl4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlNpeERRVUZWYTBNc1YwRkJWaXhGUVVGT0xFTkJRWEpETzBGQlEwUXNWMEZHVFN4TlFVVkJMRWxCUVVrc1QwRkJUeTlETEVsQlFVa3NRMEZCUTJFc1IwRkJSQ3hEUVVGWUxFdEJRWEZDTEZGQlFYcENMRVZCUVcxRE8wRkJRM2hETUVNc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbEVzVVVGQlVTeERRVUZETEZGQlFVUXNSVUZCVjNaRExFZEJRVmdzUlVGQlowSjVReXhwUWtGQmFFSXNRMEZCT1VJN1FVRkRRVU1zY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFsTXNjVUpCUVhGQ0xFTkJRVU55UkN4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlRDeEZRVUZaWjBJc1MwRkJTeXhIUVVGSExFTkJRWEJDTEVOQlFUTkRPMEZCUTBRc1YwRklUU3hOUVVkQk8wRkJRMHd3UWl4eFFrRkJVeXhEUVVGRFdDeFhRVUZXTEVOQlFYTkNZU3hsUVVGbExFTkJRVU0xUXl4SFFVRkVMRVZCUVUxaUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRldMRU5CUVhKRE8wRkJRMFE3UVVGRFJqczdRVUZEUkN4WlFVRkpMRTlCUVU5NlFpeE5RVUZOTEVOQlFVTnpSU3h4UWtGQlpDeExRVUYzUXl4VlFVRTFReXhGUVVGM1JEdEJRVU4wUkhSRkxHZENRVUZOTEVOQlFVTnpSU3h4UWtGQlVDeERRVUUyUWpGRUxFbEJRVGRDTEVWQlFXMURNa1FzVDBGQmJrTXNRMEZCTWtNc1ZVRkJVME1zVFVGQlZDeEZRVUZwUWp0QlFVTXhSRXdzY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkRSeXhOUVVGTkxFTkJRVU5ETEZGQlFWQXNSVUZCUkN4RlFVRnZRamRFTEVsQlFVa3NRMEZCUXpSRUxFMUJRVVFzUTBGQmVFSXNRMEZCY2tNN1FVRkRSQ3hYUVVaRU8wRkJSMFE3TzBGQlJVUXNaVUZCVDB3c1UwRkJVRHRCUVVORU96dEJRVVZFTEdWQlFWTklMRkZCUVZRc1EwRkJhMEl6UXl4VFFVRnNRaXhGUVVFMlFuRkVMRmRCUVRkQ0xFVkJRVEJEUXl4aFFVRXhReXhGUVVGNVJEdEJRVU4yUkN4WlFVRkpReXhsUVVGbExFZEJRVWRFTEdGQlFYUkNPMEZCUTBFc1dVRkJTVVVzWjBKQlFXZENMRWRCUVVjeFFpeFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUpxUWl4WlFVRlpMRU5CUVVOb1FpeGpRVUZpTEVOQlFUUkNSaXhIUVVGdVJDeERRVUYyUWp0QlFVTkJORVFzZDBKQlFXZENMRU5CUVVNelJDeExRVUZxUWl4RFFVRjFRbTFETEU5QlFYWkNMRWRCUVdsRGJFSXNXVUZCV1N4RFFVRkRhRUlzWTBGQllpeERRVUUwUWtRc1MwRkJOMFE3UVVGRFFUSkVMSGRDUVVGblFpeERRVUZEUXl4WlFVRnFRaXhEUVVFNFFpeFhRVUU1UWl4RlFVRXlReXhuUWtGQk0wTTdRVUZEUVN4WlFVRkpReXhYUVVGWExFZEJRVWMxUWl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU5rTEZOQlFXSXNRMEZCZFVKS0xFZEJRVGxETEVOQlFXeENPMEZCUTBFc1dVRkJTU3RFTEZsQlFWa3NSMEZCUnpkQ0xGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTJZc1MwRkJZaXhEUVVGdFFrZ3NSMEZCTVVNc1EwRkJia0k3UVVGRFFTdEVMRzlDUVVGWkxFTkJRVU01UkN4TFFVRmlMRU5CUVcxQ2JVTXNUMEZCYmtJc1IwRkJOa0pzUWl4WlFVRlpMRU5CUVVObUxFdEJRV0lzUTBGQmJVSkdMRXRCUVdoRU8wRkJRMEUyUkN4dFFrRkJWeXhEUVVGRE4wUXNTMEZCV2l4RFFVRnJRbTFETEU5QlFXeENMRWRCUVRSQ2JFSXNXVUZCV1N4RFFVRkRaQ3hUUVVGaUxFTkJRWFZDU0N4TFFVRnVSRHRCUVVWQk9FUXNiMEpCUVZrc1EwRkJRM2hDTEZkQlFXSXNRMEZCZVVKNVFpeGhRVUZoTEVOQlFVTk9MR0ZCUVVRc1EwRkJkRU03TzBGQlEwRXNXVUZCU1VRc1YwRkJTaXhGUVVGcFFqdEJRVU5tU3l4eFFrRkJWeXhEUVVGRGRrSXNWMEZCV2l4RFFVRjNRakJDTEUxQlFVMHNRMEZCUTFJc1YwRkJSQ3hEUVVFNVFqdEJRVU5FT3p0QlFVTkVTeXh0UWtGQlZ5eERRVUZEZGtJc1YwRkJXaXhEUVVGM1Frd3NVVUZCVVN4RFFVRkRaME1zWTBGQlZDeERRVUYzUWpsRUxGTkJRWGhDTEVOQlFYaENPMEZCUTBFeVJDeHZRa0ZCV1N4RFFVRkRlRUlzVjBGQllpeERRVUY1UW5WQ0xGZEJRWHBDT3p0QlFVVkJReXh2UWtGQldTeERRVUZEU1N4UFFVRmlMRWRCUVhWQ0xGbEJRVms3UVVGRGFrTXNZMEZCU1RsRUxGVkJRVlVzUjBGQlJ6QkVMRmxCUVZrc1EwRkJRMHNzVlVGQk9VSTdRVUZEUVN4alFVRkpReXhqUVVGakxFZEJRVWRPTEZsQlFWa3NRMEZCUTA4c1ZVRkJZaXhEUVVGM1FrTXNWMEZCTjBNN1FVRkRRVVlzZDBKQlFXTXNRMEZCUTNCRkxFdEJRV1lzUTBGQmNVSjFSU3hQUVVGeVFpeEhRVUVyUW1Jc1pVRkJaU3hIUVVGSExFOUJRVWdzUjBGQllTeE5RVUV6UkR0QlFVTkJkRVFzYjBKQlFWVXNRMEZCUTBvc1MwRkJXQ3hEUVVGcFFuZEZMRk5CUVdwQ0xFZEJRVFpDWkN4bFFVRmxMRWRCUVVjc1pVRkJTQ3hIUVVGeFFpeGpRVUZxUlR0QlFVTkJRU3g1UWtGQlpTeEhRVUZITEVOQlFVTkJMR1ZCUVc1Q08wRkJRMFFzVTBGT1JEczdRVUZSUVVNc2QwSkJRV2RDTEVOQlFVTnlRaXhYUVVGcVFpeERRVUUyUW5kQ0xGbEJRVGRDTzBGQlEwRXNaVUZCVDBnc1owSkJRVkE3UVVGRFJEczdRVUZGUkN4bFFVRlRTU3hoUVVGVUxFTkJRWFZDVGl4aFFVRjJRaXhGUVVGelF6dEJRVU53UXl4WlFVRkpaMElzWVVGQllTeEhRVUZIZUVNc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNha0lzV1VGQldTeERRVUZEWWl4VlFVRmlMRU5CUVhkQ1RDeEhRVUV2UXl4RFFVRndRanRCUVVOQk1FVXNjVUpCUVdFc1EwRkJRM3BGTEV0QlFXUXNRMEZCYjBKdFF5eFBRVUZ3UWl4SFFVRTRRbXhDTEZsQlFWa3NRMEZCUTJJc1ZVRkJZaXhEUVVGM1Frb3NTMEZCZEVRN1FVRkRRWGxGTEhGQ1FVRmhMRU5CUVVONlJTeExRVUZrTEVOQlFXOUNkMFVzVTBGQmNFSXNSMEZCWjBObUxHRkJRV0VzUjBGQlJ5eGpRVUZJTEVkQlFXOUNMR1ZCUVdwRk8wRkJRMEVzWlVGQlQyZENMR0ZCUVZBN1FVRkRSRHM3UVVGRlJDeGxRVUZUZGtJc2IwSkJRVlFzUTBGQk9FSjNRaXhSUVVFNVFpeEZRVUYzUXp0QlFVTjBReXhaUVVGSlppeG5Ra0ZCWjBJc1IwRkJSekZDTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMW9zYVVKQlFXSXNRMEZCSzBKT0xFZEJRWFJFTEVOQlFYWkNPMEZCUTBFMFJDeDNRa0ZCWjBJc1EwRkJRME1zV1VGQmFrSXNRMEZCT0VJc1YwRkJPVUlzUlVGQk1rTXNiVUpCUVRORE8wRkJRMEZFTEhkQ1FVRm5RaXhEUVVGRE0wUXNTMEZCYWtJc1EwRkJkVUp0UXl4UFFVRjJRaXhIUVVGcFEyeENMRmxCUVZrc1EwRkJRMW9zYVVKQlFXSXNRMEZCSzBKTUxFdEJRV2hGTzBGQlEwRXlSQ3gzUWtGQlowSXNRMEZCUXpORUxFdEJRV3BDTEVOQlFYVkNkVVVzVDBGQmRrSXNSMEZCYTBOSExGRkJRVkVzUjBGQlJ5eE5RVUZJTEVkQlFWa3NUMEZCZEVRN1FVRkRRU3hsUVVGUFppeG5Ra0ZCVUR0QlFVTkVPenRCUVVWRUxHVkJRVk5TTEdWQlFWUXNRMEZCZVVJMVF5eEhRVUY2UWl4RlFVRTRRbTlGTEV0QlFUbENMRVZCUVhGRE8wRkJRMjVETEZsQlFVbERMRmRCUVZjc1IwRkJSek5ETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMWdzV1VGQllpeERRVUV3UWxBc1IwRkJha1FzUTBGQmJFSTdRVUZEUVRaRkxHMUNRVUZYTEVOQlFVTTFSU3hMUVVGYUxFTkJRV3RDYlVNc1QwRkJiRUlzUjBGQk5FSnNRaXhaUVVGWkxFTkJRVU5ZTEZsQlFXSXNRMEZCTUVKT0xFdEJRWFJFTzBGQlEwRTBSU3h0UWtGQlZ5eERRVUZEZEVNc1YwRkJXaXhEUVVGM1FqQkNMRTFCUVUwc1EwRkJRM3BFTEVkQlFVUXNRMEZCT1VJN1FVRkRRWEZGTEcxQ1FVRlhMRU5CUVVOMFF5eFhRVUZhTEVOQlFYZENSQ3hSUVVGUkxFTkJRVU56UXl4TFFVRkVMRU5CUVdoRE8wRkJRMEVzWlVGQlQwTXNWMEZCVUR0QlFVTkVPenRCUVVWRUxHVkJRVk5hTEUxQlFWUXNRMEZCWjBKaExFbEJRV2hDTEVWQlFYTkNPMEZCUTNCQ0xGbEJRVWxETEZWQlFWVXNSMEZCUnpkRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTFZc1IwRkJZaXhEUVVGcFFsSXNSMEZCZUVNc1EwRkJha0k3UVVGRFFTdEZMR3RDUVVGVkxFTkJRVU01UlN4TFFVRllMRU5CUVdsQ2JVTXNUMEZCYWtJc1IwRkJNa0pzUWl4WlFVRlpMRU5CUVVOV0xFZEJRV0lzUTBGQmFVSlFMRXRCUVRWRE8wRkJRMEU0UlN4clFrRkJWU3hEUVVGRGVFTXNWMEZCV0N4RFFVRjFRa3dzVVVGQlVTeERRVUZEWjBNc1kwRkJWQ3hEUVVGM1Fsa3NTVUZCU1N4SFFVRkhMRWxCUVM5Q0xFTkJRWFpDTzBGQlEwRXNaVUZCVDBNc1ZVRkJVRHRCUVVORU96dEJRVVZFTEdWQlFWTjZReXhSUVVGVUxFTkJRV3RDYzBNc1MwRkJiRUlzUlVGQmVVSTdRVUZEZGtJc1dVRkJTVWtzV1VGQlNqdEJRVU5CTEZsQlFVbERMRkZCUVZFc1IwRkJSeXhSUVVGbU96dEJRVU5CTEdkQ1FVRlJMRTlCUVU5TUxFdEJRV1k3UVVGRFJTeGxRVUZMTEZGQlFVdzdRVUZEUlVrc2QwSkJRVmtzUjBGQlJ6bERMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlExUXNWMEZCWWl4RFFVRjVRbFFzUjBGQmFFUXNRMEZCWmp0QlFVTkJaMFlzZDBKQlFWa3NRMEZCUXk5RkxFdEJRV0lzUTBGQmJVSnRReXhQUVVGdVFpeEhRVUUyUW14Q0xGbEJRVmtzUTBGQlExUXNWMEZCWWl4RFFVRjVRbElzUzBGQmRFUTdRVUZEUVN0RkxIZENRVUZaTEVOQlFVTjZReXhYUVVGaUxFTkJRWGxDVEN4UlFVRlJMRU5CUVVOblF5eGpRVUZVTEVOQlFYZENWU3hMUVVGTExFTkJRVU53UWl4UlFVRk9MRVZCUVhoQ0xFTkJRWHBDTzBGQlEwRTdPMEZCUTBZc1pVRkJTeXhSUVVGTU8wRkJRMFYzUWl4M1FrRkJXU3hIUVVGSE9VTXNVVUZCVVN4RFFVRkRReXhoUVVGVUxFTkJRWFZDYWtJc1dVRkJXU3hEUVVGRFVpeFhRVUZpTEVOQlFYbENWaXhIUVVGb1JDeERRVUZtTzBGQlEwRm5SaXgzUWtGQldTeERRVUZETDBVc1MwRkJZaXhEUVVGdFFtMURMRTlCUVc1Q0xFZEJRVFpDYkVJc1dVRkJXU3hEUVVGRFVpeFhRVUZpTEVOQlFYbENWQ3hMUVVGMFJEdEJRVU5CSzBVc2QwSkJRVmtzUTBGQlEzcERMRmRCUVdJc1EwRkJlVUpNTEZGQlFWRXNRMEZCUTJkRExHTkJRVlFzUTBGQmQwSXNUVUZCVFZVc1MwRkJUaXhIUVVGakxFZEJRWFJETEVOQlFYcENPMEZCUTBFN08wRkJRMFlzWlVGQlN5eFJRVUZNTzBGQlEwVkpMSGRDUVVGWkxFZEJRVWM1UXl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU5RTEZkQlFXSXNRMEZCZVVKWUxFZEJRV2hFTEVOQlFXWTdRVUZEUVdkR0xIZENRVUZaTEVOQlFVTXZSU3hMUVVGaUxFTkJRVzFDYlVNc1QwRkJia0lzUjBGQk5rSnNRaXhaUVVGWkxFTkJRVU5RTEZkQlFXSXNRMEZCZVVKV0xFdEJRWFJFTzBGQlEwRXJSU3gzUWtGQldTeERRVUZEZWtNc1YwRkJZaXhEUVVGNVFrd3NVVUZCVVN4RFFVRkRaME1zWTBGQlZDeERRVUYzUWxVc1MwRkJlRUlzUTBGQmVrSTdRVUZEUVRzN1FVRkRSaXhsUVVGTExGTkJRVXc3UVVGRFJVa3NkMEpCUVZrc1IwRkJSemxETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMDRzV1VGQllpeERRVUV3UWxvc1IwRkJha1FzUTBGQlpqdEJRVU5CWjBZc2QwSkJRVmtzUTBGQlF5OUZMRXRCUVdJc1EwRkJiVUp0UXl4UFFVRnVRaXhIUVVFMlFteENMRmxCUVZrc1EwRkJRMDRzV1VGQllpeERRVUV3UWxnc1MwRkJka1E3UVVGRFFTdEZMSGRDUVVGWkxFTkJRVU42UXl4WFFVRmlMRU5CUVhsQ1RDeFJRVUZSTEVOQlFVTm5ReXhqUVVGVUxFTkJRWGRDVlN4TFFVRjRRaXhEUVVGNlFqdEJRVU5CT3p0QlFVTkdMR1ZCUVV0TExGRkJRVXc3UVVGRFJVUXNkMEpCUVZrc1IwRkJSemxETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMHdzVTBGQllpeERRVUYxUW1Jc1IwRkJPVU1zUTBGQlpqdEJRVU5CWjBZc2QwSkJRVmtzUTBGQlF5OUZMRXRCUVdJc1EwRkJiVUp0UXl4UFFVRnVRaXhIUVVFMlFteENMRmxCUVZrc1EwRkJRMHdzVTBGQllpeERRVUYxUWxvc1MwRkJjRVE3UVVGRFFTdEZMSGRDUVVGWkxFTkJRVU42UXl4WFFVRmlMRU5CUVhsQ1RDeFJRVUZSTEVOQlFVTm5ReXhqUVVGVUxFTkJRWGRDVlN4TFFVRjRRaXhEUVVGNlFqdEJRVU5CTzBGQmVrSktPenRCUVRKQ1FTeGxRVUZQU1N4WlFVRlFPMEZCUTBRN08wRkJSVVFzWlVGQlV6ZEVMR2xDUVVGVUxFTkJRVEpDSzBRc1VVRkJNMElzUlVGQmNVTkRMRk5CUVhKRExFVkJRV2RFTzBGQlF6bERMRmxCUVVsRExFMUJRVTBzUjBGQlJ5eEZRVUZpT3p0QlFVTkJMR0ZCUVVzc1NVRkJTVFZGTEVkQlFWUXNTVUZCWjBJd1JTeFJRVUZvUWl4RlFVRXdRanRCUVVONFFrVXNaMEpCUVUwc1EwRkJRelZGTEVkQlFVUXNRMEZCVGl4SFFVRmpla0lzVFVGQlRTeERRVUZEY1VNc1RVRkJVQ3hEUVVGakxFVkJRV1FzUlVGQmEwSTRSQ3hSUVVGUkxFTkJRVU14UlN4SFFVRkVMRU5CUVRGQ0xFVkJRV2xETWtVc1UwRkJVeXhEUVVGRE0wVXNSMEZCUkN4RFFVRXhReXhEUVVGa08wRkJRMFE3TzBGQlEwUXNaVUZCVHpSRkxFMUJRVkE3UVVGRFJEczdRVUZGUkN4aFFVRlBjRVFzVFVGQlRTeEZRVUZpTzBGQlEwZzdPMEZCTTAxM1FqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlEwVTNRaXhSUVVGTmNVUXNUMEZCVGl4VFFVRnpRa01zYjBKQlFWTkRMRTlCUVZRc1EwRkJhVUp3U0N4blFrRkJha0lzUlVGQk1FSTdRVUZCUXl4WlFVRlBMRU5CUVVOeFNDeHpRa0ZCUkN4RFFVRlNPMEZCUVhkQ0xGZEJRVTBzUTBGQlEwTXNkVUpCUVVRN1FVRkJPVUlzUjBGQk1VSXNRMEZCZEVJc1EwRkJLMFk3UVVGRE0wWnlTQ3hsUVVGWExFZEJRVVU3UVVGRFZEdEJRVU5JT3p0QlFVZ3dSanM3YVVKQlMyaEdMRWxCUVVscFNDeFBRVUZLTEVVN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRWR1lzVVVGQlRVY3NZVUZCWVN4SFFVRkpSU3hSUVVGRUxFbEJRV0VzWTBGQlkwRXNVVUZCWkN4RFFVRnpRanRCUVVOeVJFTXNWMEZCVHl4RFFVRkRReXhQUVVGRUxFVkJRVk1zUTBGRFdqdEJRVU5JT3p0QlFVTkVja2dzVDBGQlJ5eERRVUZEYzBnc1QwRkJSQ3hGUVVGVE8wRkJRMUlzVlVGQlJ5eExRVUZMYkVnc1MwRkJUQ3hKUVVGakxFdEJRVXRPTEdOQlFVd3NRMEZCYjBJc1MwRkJjRUlzUTBGQmFrSXNSVUZCTkVNN1FVRkRlRU1zWlVGQlR5eEpRVUZRTzBGQlEwZzdPMEZCUTBSblFpeGhRVUZQTEVOQlFVTmtMRWRCUVZJc1EwRkJXWE5JTEU5QlFWbzdRVUZEU0RzN1FVRkRSSFpITEZsQlFWRXNRMEZCUTNkSExHTkJRVVFzUlVGQlowSXNRMEZEY0VJN1FVRkRTRHM3UVVGRFJIaElMRk5CUVVzc1EwRkJRM1ZJTEU5QlFVUXNSVUZCVXp0QlFVTldMRlZCUVVjc1MwRkJTMnhJTEV0QlFVd3NTVUZCWXl4TFFVRkxUaXhqUVVGTUxFTkJRVzlDTEU5QlFYQkNMRU5CUVdwQ0xFVkJRVGhETzBGQlF6RkRMR1ZCUVU4c1NVRkJVRHRCUVVOSU96dEJRVU5FWjBJc1lVRkJUeXhEUVVGRFppeExRVUZTTEVOQlFXTjFTQ3hQUVVGa08wRkJRMGc3TzBGQmJFSnZSQ3hIUVVGNlJEczdhVUpCY1VKbFRDeGhPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRGNFSm1MRkZCUVUxRExHRkJRV0VzUjBGQlNVTXNVVUZCUkN4SlFVRmhMR05CUVdOQkxGRkJRV1FzUTBGQmMwSTdRVUZEY2tSRExGZEJRVThzUTBGQlEwa3NWVUZCVlN4SFFVRkRMRWxCUVZvc1JVRkJhVUk3UVVGRGNFSkJMR2RDUVVGVkxFZEJRVWRCTEZWQlFWVXNTVUZCUlRkRUxGRkJRVkVzUTBGQlF6aEVMRWxCUVd4RE8wRkJRMEVzVlVGQlNVTXNTVUZCU1N4SFFVRkhMMFFzVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ0xFbEJRWFpDTEVOQlFWZzdRVUZEUVRoRUxGVkJRVWtzUTBGQlEyaEhMRXRCUVV3c1EwRkJWMjFETEU5QlFWZ3NSMEZCY1VJc2QwSkJRWEpDTzBGQlEwRXlSQ3huUWtGQlZTeERRVUZEZUVRc1YwRkJXQ3hEUVVGMVFqQkVMRWxCUVhaQ08wRkJRMEVzVjBGQlMwTXNUMEZCVEN4SFFVRmxTQ3hWUVVGbU8wRkJRMEVzVjBGQlMwa3NVVUZCVEN4SFFVRm5Ra29zVlVGQlZTeERRVUZEU3l4dlFrRkJXQ3hEUVVGblF5eEpRVUZvUXl4RlFVRnpReXhEUVVGMFF5eERRVUZvUWp0QlFVTklPenRCUVVORVF5eG5Ra0ZCV1N4RFFVRkRjRVVzVDBGQlR5eEhRVUZETEVsQlFWUXNSVUZCWXp0QlFVTjBRa0VzWVVGQlR5eEhRVUZIUVN4UFFVRlBMRWxCUVVrc1MwRkJTMmxGTEU5QlFURkNPMEZCUTBGcVJTeGhRVUZQTEVOQlFVTnhSU3hUUVVGU0xFZEJRVzlDY2tVc1QwRkJUeXhEUVVGRGMwVXNXVUZCVWl4SFFVRjFRblJGTEU5QlFVOHNRMEZCUTNWRkxGbEJRVzVFTzBGQlEwZzdPMEZCUTBSc1NDeFpRVUZSTEVOQlFVTjNSeXhqUVVGRUxFVkJRV2RDTzBGQlEzQkNPMEZCUTBFc1ZVRkJTVmNzVDBGQlR5eEhRVUZITEV0QlFVdE9MRkZCUVV3c1EwRkJZME1zYjBKQlFXUXNRMEZCYlVNc1NVRkJia01zUTBGQlpEdEJRVU5CTEZWQlFVbElMRWxCUVVrc1IwRkJSMUVzVDBGQlR5eERRVUZEUVN4UFFVRlBMRU5CUVVNdlJTeE5RVUZTTEVkQlFXVXNRMEZCYUVJc1EwRkJiRUk3TzBGQlEwRXNWVUZCUnl4RFFVRkRkVVVzU1VGQlJDeEpRVUZUUVN4SlFVRkpMRU5CUVVOVExGTkJRVXdzUTBGQlpVTXNVVUZCWml4RFFVRjNRaXhwUWtGQmVFSXNRMEZCV2l4RlFVRjFSRHRCUVVOdVJEdEJRVU5CVml4WlFVRkpMRWRCUVVjdlJDeFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUlzU1VGQmRrSXNRMEZCVUR0QlFVTkJPRVFzV1VGQlNTeERRVUZEVXl4VFFVRk1MRU5CUVdWRkxFZEJRV1lzUTBGQmJVSXNhVUpCUVc1Q08wRkJRMEVzWVVGQlMxUXNVVUZCVEN4RFFVRmpOVVFzVjBGQlpDeERRVUV3UWpCRUxFbEJRVEZDTzBGQlEwZzdPMEZCUTBRc1ZVRkJTVmtzVVVGQlVTeEhRVUZIY0Vnc2IwSkJRVk5ETEZkQlFWUXNRMEZCY1VKdlJ5eGpRVUZ5UWl4RFFVRm1PenRCUVVOQkxGVkJRVWxuUWl4SlFVRkpMRWRCUVVjc1NVRkJTWFJGTEVsQlFVb3NSVUZCV0R0QlFVTkJlVVFzVlVGQlNTeERRVUZEWXl4VFFVRk1MRWRCUVd0Q0xHZEVRVUVyUTBRc1NVRkJTeXhOUVVGMFJUdEJRVU5CWWl4VlFVRkpMRU5CUVVNeFJDeFhRVUZNTEVOQlFXbENjMFVzVVVGQmFrSTdRVUZEUVN4WFFVRkxVaXhaUVVGTU8wRkJRMGc3TzBGQlEwUTVTQ3hQUVVGSExFTkJRVU56U0N4UFFVRkVMRVZCUVZNN1FVRkRVaXhWUVVGSExFdEJRVXRzU0N4TFFVRk1MRWxCUVdNc1MwRkJTMDRzWTBGQlRDeERRVUZ2UWl4TFFVRndRaXhEUVVGcVFpeEZRVUUwUXp0QlFVTjRReXhsUVVGUExFbEJRVkE3UVVGRFNEczdRVUZEUkN4VlFVRkhMRU5CUVVNc1MwRkJTemhJTEZGQlFVNHNTVUZCYTBJc1EwRkJReXhMUVVGTFFTeFJRVUZNTEVOQlFXTTFSQ3hYUVVGd1F5eEZRVUZuUkR0QlFVTTFReXhoUVVGTGIwUXNUMEZCVER0QlFVTklPenRCUVVORUxGVkJRVWxOTEVsQlFVa3NSMEZCUnk5RUxGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRaXhKUVVGMlFpeERRVUZZTzBGQlEwRTRSQ3hWUVVGSkxFTkJRVU5vUnl4TFFVRk1MRU5CUVZkdFF5eFBRVUZZTEVkQlFYRkNMRzFEUVVGeVFqczdRVUZEUVN4VlFVRkplVVVzVVVGQlVTeEhRVUZIY0Vnc2IwSkJRVk5ETEZkQlFWUXNRMEZCY1VKdFJ5eFBRVUZ5UWl4RFFVRm1PenRCUVVOQkxGVkJRVWxwUWl4SlFVRkpMRWRCUVVjc1NVRkJTWFJGTEVsQlFVb3NSVUZCV0R0QlFVTkJlVVFzVlVGQlNTeERRVUZEWXl4VFFVRk1MRWRCUVd0Q0xHZEVRVUVyUTBRc1NVRkJTeXhOUVVGMFJUdEJRVU5CWWl4VlFVRkpMRU5CUVVNeFJDeFhRVUZNTEVOQlFXbENjMFVzVVVGQmFrSTdRVUZEUVN4WFFVRkxWaXhSUVVGTUxFTkJRV00xUkN4WFFVRmtMRU5CUVRCQ01FUXNTVUZCTVVJN1FVRkRRU3hYUVVGTFNTeFpRVUZNTzBGQlEwRm9TQ3hoUVVGUExFTkJRVU5rTEVkQlFWSXNRMEZCV1hOSUxFOUJRVm83UVVGRFNEczdRVUZGUkhaSUxGTkJRVXNzUTBGQlEzVklMRTlCUVVRc1JVRkJVenRCUVVOV0xGVkJRVWNzUzBGQlMyeElMRXRCUVV3c1NVRkJZeXhMUVVGTFRpeGpRVUZNTEVOQlFXOUNMRTlCUVhCQ0xFTkJRV3BDTEVWQlFUaERPMEZCUXpGRExHVkJRVThzU1VGQlVEdEJRVU5JTEU5QlNGTXNRMEZKVmpzN08wRkJRMEZuUWl4aFFVRlBMRU5CUVVObUxFdEJRVklzUTBGQlkzVklMRTlCUVdRN1FVRkRTRHM3UVVGeVJHOUVMRWRCUVhwRU96dHBRa0YzUkdWS0xHRTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTjZSR1lzT0VRaUxDSm1hV3hsSWpvaVFHTmhkWE5oYkU1bGRDOXNiMmN1ZDJWaUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNoeVpYRjFhWEpsS0Z3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aUtTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSmRMQ0JtWVdOMGIzSjVLVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwWlhod2IzSjBjMXRjSWtCallYVnpZV3hPWlhRdmJHOW5YQ0pkSUQwZ1ptRmpkRzl5ZVNoeVpYRjFhWEpsS0Z3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aUtTazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpUUdOaGRYTmhiRTVsZEM5c2IyZGNJbDBnUFNCbVlXTjBiM0o1S0hKdmIzUmJYQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0pkS1R0Y2JuMHBLSFJvYVhNc0lHWjFibU4wYVc5dUtGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyRjFjMkZzWDI1bGRGOTFkR2xzYzE5ZktTQjdYRzV5WlhSMWNtNGdJaXdpSUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwZG1GeUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlGeDBMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JpQmNkR1oxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseHVJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaUJjZEZ4MGFXWW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHBJSHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNiaUJjZEZ4MGZWeHVJRngwWEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1SUZ4MFhIUjJZWElnYlc5a2RXeGxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBnUFNCN1hHNGdYSFJjZEZ4MGFUb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzFjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUdkbGRIUmxjaUJtZFc1amRHbHZiaUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6TENCdVlXMWxMQ0JuWlhSMFpYSXBJSHRjYmlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0J1WVcxbExDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJR2RsZERvZ1oyVjBkR1Z5SUgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWDE5bGMwMXZaSFZzWlNCdmJpQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5JZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SektTQjdYRzRnWEhSY2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjc0lIc2dkbUZzZFdVNklDZE5iMlIxYkdVbklIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCamNtVmhkR1VnWVNCbVlXdGxJRzVoYldWemNHRmpaU0J2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBeE9pQjJZV3gxWlNCcGN5QmhJRzF2WkhWc1pTQnBaQ3dnY21WeGRXbHlaU0JwZEZ4dUlGeDBMeThnYlc5a1pTQW1JREk2SUcxbGNtZGxJR0ZzYkNCd2NtOXdaWEowYVdWeklHOW1JSFpoYkhWbElHbHVkRzhnZEdobElHNXpYRzRnWEhRdkx5QnRiMlJsSUNZZ05Eb2djbVYwZFhKdUlIWmhiSFZsSUhkb1pXNGdZV3h5WldGa2VTQnVjeUJ2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBNGZERTZJR0psYUdGMlpTQnNhV3RsSUhKbGNYVnBjbVZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVkQ0E5SUdaMWJtTjBhVzl1S0haaGJIVmxMQ0J0YjJSbEtTQjdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXhLU0IyWVd4MVpTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvZG1Gc2RXVXBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdPQ2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhScFppZ29iVzlrWlNBbUlEUXBJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RtRnNkV1VnSmlZZ2RtRnNkV1V1WDE5bGMwMXZaSFZzWlNrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUjJZWElnYm5NZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklvYm5NcE8xeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ibk1zSUNka1pXWmhkV3gwSnl3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQjJZV3gxWlRvZ2RtRnNkV1VnZlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeUlDWW1JSFI1Y0dWdlppQjJZV3gxWlNBaFBTQW5jM1J5YVc1bkp5a2dabTl5S0haaGNpQnJaWGtnYVc0Z2RtRnNkV1VwSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaHVjeXdnYTJWNUxDQm1kVzVqZEdsdmJpaHJaWGtwSUhzZ2NtVjBkWEp1SUhaaGJIVmxXMnRsZVYwN0lIMHVZbWx1WkNodWRXeHNMQ0JyWlhrcEtUdGNiaUJjZEZ4MGNtVjBkWEp1SUc1ek8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1WEc0Z1hIUXZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYmlCY2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjeUE5SURBcE8xeHVJaXdpWm5WdVkzUnBiMjRnWDJsdWRHVnliM0JTWlhGMWFYSmxSR1ZtWVhWc2RDaHZZbW9wSUh0Y2JpQWdjbVYwZFhKdUlHOWlhaUFtSmlCdlltb3VYMTlsYzAxdlpIVnNaU0EvSUc5aWFpQTZJSHRjYmlBZ0lDQmtaV1poZFd4ME9pQnZZbXBjYmlBZ2ZUdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZmFXNTBaWEp2Y0ZKbGNYVnBjbVZFWldaaGRXeDBPeUlzSW1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFSmhjMlZNYjJkN1hHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb0tYdGNiaUFnSUNBZ0lDQWdkR2hwY3k1QlkyTmxjSFJsWkV4bGRtVnNjeUE5SUh0a1pXSjFaem9nTUN3Z2JHOW5PakVzSUhkaGNtNXBibWM2TWl3Z1pYSnliM0k2SUROOU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5KQlkyTmxjSFJsWkV4bGRtVnNjeUE5SUhzd09pZGtaV0oxWnljc0lERTZJQ2RzYjJjbkxDQXlPaUFuZDJGeWJtbHVaeWNzSURNNklDZGxjbkp2Y2lkOU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14bGRtVnNJRDBnZEdocGN5NUJZMk5sY0hSbFpFeGxkbVZzYzFzblpHVmlkV2NuWFR0Y2JpQWdJQ0I5WEc0Z0lDQWdjMlYwSUV4bGRtVnNLR3hsZG1Wc0tYdGNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NUJZMk5sY0hSbFpFeGxkbVZzYzF0c1pYWmxiRjBoUFQxMWJtUmxabWx1WldRcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXNaWFpsYkNBOUlIUm9hWE11UVdOalpYQjBaV1JNWlhabGJITmJiR1YyWld4ZE95QWdJQ0JjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9ZQ1I3YkdWMlpXeDlJRzExYzNRZ1ltVWdiMjVsSUc5bUlDUjdUMkpxWldOMExtdGxlWE1vZEdocGN5NUJZMk5sY0hSbFpFeGxkbVZzY3lsOVlDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1oyVjBJRXhsZG1Wc0tDbDdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5KQlkyTmxjSFJsWkV4bGRtVnNjMXQwYUdsekxteGxkbVZzWFR0Y2JpQWdJQ0I5WEc1OUlpd2lZMjl1YzNRZ1RHOW5aMlZ5VFdsNGFXNXpJRDBnS0VKaGMyVmtRMnhoYzNNcFBUNGdZMnhoYzNNZ1pYaDBaVzVrY3lCQ1lYTmxaRU5zWVhOemUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDNHVMbUZ5WjNNcGUxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lndUxpNWhjbWR6S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJkblpYSWdQU0JqYjI1emIyeGxPMXh1SUNBZ0lIMWNiaUFnSUNCd2NtOW5jbVZ6Y3lod2NtOW5jbVZ6YzAxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TG14dloyZGxjaTV3Y205bmNtVnpjeWw3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG14dloyZGxjaTV3Y205bmNtVnpjeWh3Y205bmNtVnpjMDFsYzNOaFoyVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lITmxkQ0JNYjJkblpYSW9iRzluWjJWeUtYdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c2IyZG5aWElnUFNCc2IyZG5aWEk3WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUdkbGRDQk1iMmRuWlhJb0tYdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Ykc5bloyVnlPMXh1SUNBZ0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUV4dloyZGxjazFwZUdsdWN6c2lMQ0l2THlCdmNtbG5hVzRnWTI5a1pTQm1jbTl0SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5c2RXTjVaMmxzWW1WeWRDOXFjMjl1TFdScGMzQnNZWGt2WW14dllpOXRZWE4wWlhJdmFuTnZiaTFrYVhOd2JHRjVMbXB6WEc0dkx5QkRiM0I1Y21sbmFIUWdLR01wSURJd01UY2dUSFZqZVNCSGFXeGlaWEowWEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QktjMjl1Vm1sbGQzdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpZ3BlMXh1SUNBZ0lIMWNiaUFnSUNCemRHRjBhV01nU2xOUFRrUnBjM0JzWVhrb2FuTnZiaXdnYjNCbGJreGxkbVZzYzBGeVp5d2djM1I1YkdWUGNIUnBiMjV6UVhKbktTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCRVJVWkJWVXhVWDFOVVdVeEZYMDlRVkVsUFRsTWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtOXZkRG9nZXlCMFlXYzZJQ2R3Y21VbkxDQnpkSGxzWlRvZ0ozQmhaR1JwYm1jNklEVndlRHNnWm05dWRDMXphWHBsT2lBeGNtVnRPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQjBhWFJzWlVOdmJuUmhhVzVsY2pvZ2V5QjBZV2M2SUNka2FYWW5MQ0J6ZEhsc1pUb2dKMjFoY21kcGJpMWliM1IwYjIwNklETndlRHNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdkR2wwYkdVNklIc2dkR0ZuT2lBbmMzQmhiaWNzSUhOMGVXeGxPaUFuWTNWeWMyOXlPaUJ3YjJsdWRHVnlPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQjBhWFJzWlZSbGVIUTZJSHNnZEdGbk9pQW5jM0JoYmljc0lITjBlV3hsT2lBbkp5QjlMRnh1SUNBZ0lDQWdJQ0FnSUc5d1pXNUNkWFIwYjI0NklIc2dYRzRnSUNBZ0lDQWdJQ0FnSUNCMFlXYzZJQ2R6Y0dGdUp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxPaUFuWkdsemNHeGhlVG9nYVc1c2FXNWxMV0pzYjJOck95QnRZWEpuYVc0NklEQndlQ0EzY0hnZ01IQjRJREp3ZURzZ1ltOXlaR1Z5TFhSdmNEb2dOWEI0SUhOdmJHbGtJSFJ5WVc1emNHRnlaVzUwT3lBblhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDc2dKMkp2Y21SbGNpMWliM1IwYjIwNklEVndlQ0J6YjJ4cFpDQjBjbUZ1YzNCaGNtVnVkRHNnWW05eVpHVnlMV3hsWm5RNklEVndlQ0J6YjJ4cFpDQmliR0ZqYXpzbkxGeHVJQ0FnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkR1Z1ZEhORGIyNTBZV2x1WlhJNklIc2dkR0ZuT2lBblpHbDJKeXdnYzNSNWJHVTZJQ2R3WVdSa2FXNW5MV3hsWm5RNklERTRjSGc3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJR3RsZVZaaGJIVmxVR0ZwY2pvZ2V5QjBZV2M2SUNkemNHRnVKeXdnYzNSNWJHVTZJQ2RrYVhOd2JHRjVPaUJpYkc5amF6c2diV0Z5WjJsdUxXSnZkSFJ2YlRvZ01uQjRPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQnJaWGs2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5ZMjlzYjNJNklHUmhjbXRpYkhWbE95Y2dmU3hjYmlBZ0lDQWdJQ0FnSUNCemVXMWliMnhXWVd4MVpUb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNkamIyeHZjam9nWkdGeWEyZHlaV1Z1T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0J6ZEhKcGJtZFdZV3gxWlRvZ2V5QjBZV2M2SUNkemNHRnVKeXdnYzNSNWJHVTZJQ2RqYjJ4dmNqb2dZM0pwYlhOdmJqc25JSDBzWEc0Z0lDQWdJQ0FnSUNBZ2JuVnRZbVZ5Vm1Gc2RXVTZJSHNnZEdGbk9pQW5jM0JoYmljc0lITjBlV3hsT2lBblkyOXNiM0k2SUdKc2RXVTdKeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lHSnZiMnhsWVc1V1lXeDFaVG9nZXlCMFlXYzZJQ2R6Y0dGdUp5d2djM1I1YkdVNklDZGpiMnh2Y2pvZ1lteDFaVHNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdiblZzYkZaaGJIVmxPaUI3SUhSaFp6b2dKM053WVc0bkxDQnpkSGxzWlRvZ0oyTnZiRzl5T2lCaWJIVmxPeWNnZlN4Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lDQWdkbUZ5SUc5d1pXNU1aWFpsYkhNZ1BTQnBjMDVoVGlod1lYSnpaVWx1ZENodmNHVnVUR1YyWld4elFYSm5LU2tnUHlCSmJtWnBibWwwZVNBNklIQmhjbk5sU1c1MEtHOXdaVzVNWlhabGJITkJjbWNwTzF4dUlDQWdJQ0FnSUNCMllYSWdjM1I1YkdWUGNIUnBiMjV6SUQwZ2RIbHdaVzltSUhOMGVXeGxUM0IwYVc5dWMwRnlaeUE5UFQwZ0oyOWlhbVZqZENjZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQS9JRzFsY21kbFUzUjViR1ZQY0hScGIyNXpLRVJGUmtGVlRGUmZVMVJaVEVWZlQxQlVTVTlPVXl3Z2MzUjViR1ZQY0hScGIyNXpRWEpuS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ09pQkVSVVpCVlV4VVgxTlVXVXhGWDA5UVZFbFBUbE03WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnVDJKcVpXTjBMbUZ6YzJsbmJpQWhQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdUMkpxWldOMExtRnpjMmxuYmlBOUlHWjFibU4wYVc5dUtIUmhjbWRsZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUmhjbWRsZENBOVBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owTmhibTV2ZENCamIyNTJaWEowSUhWdVpHVm1hVzVsWkNCdmNpQnVkV3hzSUhSdklHOWlhbVZqZENjcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSFJ2SUQwZ1QySnFaV04wS0hSaGNtZGxkQ2s3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCcGJtUmxlQ0E5SURFN0lHbHVaR1Y0SUR3Z1lYSm5kVzFsYm5SekxteGxibWQwYURzZ2FXNWtaWGdyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdibVY0ZEZOdmRYSmpaU0E5SUdGeVozVnRaVzUwYzF0cGJtUmxlRjA3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhoMFUyOTFjbU5sSUNFOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCdVpYaDBTMlY1SUdsdUlHNWxlSFJUYjNWeVkyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaFBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29ibVY0ZEZOdmRYSmpaU3dnYm1WNGRFdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkRzliYm1WNGRFdGxlVjBnUFNCdVpYaDBVMjkxY21ObFcyNWxlSFJMWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ2TzF4dUlDQWdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNGdjbVZ1WkdWeUtDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmxiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXVjbTl2ZEM1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUdWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1eWIyOTBMbk4wZVd4bE8xeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2hxYzI5dUlEMDlQU0J1ZFd4c0lIeDhJR3B6YjI0Z1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhadmFXUkZiR1Z0Wlc1MElEMGdaMlYwVm1Gc2RXVW9iblZzYkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0hadmFXUkZiR1Z0Wlc1MEtUdGNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dwemIyNGdhVzV6ZEdGdVkyVnZaaUJFWVhSbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdaR0YwWlVWc1pXMWxiblFnUFNCblpYUldZV3gxWlNocWMyOXVMblJ2U1ZOUFUzUnlhVzVuS0NrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNoa1lYUmxSV3hsYldWdWRDazdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnYW5OdmJpQWhQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCdWIyNUZlSEJoYm1SaFlteGxSV3hsYldWdWRDQTlJR2RsZEZaaGJIVmxLR3B6YjI0cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNodWIyNUZlSEJoYm1SaFlteGxSV3hsYldWdWRDazdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUIwYVhSc1pTQTlJRUZ5Y21GNUxtbHpRWEp5WVhrb2FuTnZiaWtnUHlBblFYSnlZWGxiSnlBcklHcHpiMjR1YkdWdVozUm9JQ3NnSjEwbklEb2dKMDlpYW1WamRDYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdkR2hwYzB4bGRtVnNTWE5EYkc5elpXUWdQU0J2Y0dWdVRHVjJaV3h6SUR3Z01UdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1oyVjBWR2wwYkdVb2RHbDBiR1VzSUc1MWJHd3NJSFJvYVhOTVpYWmxiRWx6UTJ4dmMyVmtLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR052Ym5abGNuUktjMjl1Vkc5RmJHVnRaVzUwY3locWMyOXVMQ0F4S1NrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmxiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHTnZiblpsY25SS2MyOXVWRzlGYkdWdFpXNTBjeWhxYzI5dUxDQnBibVJsZUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCMGFHbHpUR1YyWld4SmMwTnNiM05sWkNBOUlHbHVaR1Y0SUQ0Z2IzQmxia3hsZG1Wc2N6dGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2JtVjRkRXhsZG1Wc1NYTkRiRzl6WldRZ1BTQnBibVJsZUNBcklERWdQaUJ2Y0dWdVRHVjJaV3h6TzF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJqYjI1MFlXbHVaWElnUFNCblpYUkRiMjUwWlc1MGMwTnZiblJoYVc1bGNpaDBhR2x6VEdWMlpXeEpjME5zYjNObFpDazdYRzRnSUNBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYTJWNUlHbHVJR3B6YjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaEJjbkpoZVM1cGMwRnljbUY1S0dwemIyNWJhMlY1WFNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxtRndjR1Z1WkVOb2FXeGtLR2RsZEZScGRHeGxLQ2RCY25KaGVWc25JQ3NnYW5OdmJsdHJaWGxkTG14bGJtZDBhQ0FySUNkZEp5d2dhMlY1TENCdVpYaDBUR1YyWld4SmMwTnNiM05sWkNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNTBZV2x1WlhJdVlYQndaVzVrUTJocGJHUW9ZMjl1ZG1WeWRFcHpiMjVVYjBWc1pXMWxiblJ6S0dwemIyNWJhMlY1WFN3Z2FXNWtaWGdnS3lBeEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHcHpiMjViYTJWNVhTQTlQVDBnYm5Wc2JDQjhmQ0JxYzI5dVcydGxlVjBnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFUzUmhibVJoY21SUVlXbHlLR3RsZVN3Z2JuVnNiQ2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hxYzI5dVcydGxlVjBnYVc1emRHRnVZMlZ2WmlCRVlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5SaGFXNWxjaTVoY0hCbGJtUkRhR2xzWkNoblpYUlRkR0Z1WkdGeVpGQmhhWElvYTJWNUxDQnFjMjl1VzJ0bGVWMHVkRzlKVTA5VGRISnBibWNvS1NrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnYW5OdmJsdHJaWGxkSUQwOVBTQW5iMkpxWldOMEp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFZHbDBiR1VvSjA5aWFtVmpkQ2NzSUd0bGVTd2dibVY0ZEV4bGRtVnNTWE5EYkc5elpXUXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dOdmJuWmxjblJLYzI5dVZHOUZiR1Z0Wlc1MGN5aHFjMjl1VzJ0bGVWMHNJR2x1WkdWNElDc2dNU2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxtRndjR1Z1WkVOb2FXeGtLR2RsZEZOMFlXNWtZWEprVUdGcGNpaHJaWGtzSUdwemIyNWJhMlY1WFNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVWTjViV0p2YkhNZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRTlpYW1WamRDNW5aWFJQZDI1UWNtOXdaWEowZVZONWJXSnZiSE1vYW5OdmJpa3VabTl5UldGamFDaG1kVzVqZEdsdmJpaHplVzFpYjJ3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxtRndjR1Z1WkVOb2FXeGtLR2RsZEZOMFlXNWtZWEprVUdGcGNpaHplVzFpYjJ3dWRHOVRkSEpwYm1jb0tTd2dhbk52Ymx0emVXMWliMnhkS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTnZiblJoYVc1bGNqdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJpQm5aWFJVYVhSc1pTaDBhWFJzWlZSbGVIUXNJRzl3ZEdsdmJtRnNTMlY1TENCc1pYWmxiRWx6UTJ4dmMyVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR04xY25KbGJuUnNlVU5zYjNObFpDQTlJR3hsZG1Wc1NYTkRiRzl6WldRN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdOdmJuUmhhVzVsY2tWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLSE4wZVd4bFQzQjBhVzl1Y3k1MGFYUnNaVU52Ym5SaGFXNWxjaTUwWVdjcE8xeHVJQ0FnSUNBZ0lDQWdJR052Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTUwYVhSc1pVTnZiblJoYVc1bGNpNXpkSGxzWlR0Y2JpQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTmxkRUYwZEhKcFluVjBaU2duWkdGMFlTMTBaWE4wSnl3Z0ozUnBkR3hsUTI5dWRHRnBibVZ5SnlrN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhSbGVIUkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXVkR2wwYkdWVVpYaDBMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhScGRHeGxSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb2MzUjViR1ZQY0hScGIyNXpMblJwZEd4bExuUmhaeWs3WEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11ZEdsMGJHVXVjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lDQWdkR1Y0ZEVWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1MGFYUnNaVlJsZUhRdWMzUjViR1U3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnZEdsMGJHVkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR2RsZEU5d1pXNUNkWFIwYjI0b2JHVjJaV3hKYzBOc2IzTmxaQ2twTzF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2h2Y0hScGIyNWhiRXRsZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdWNGRFVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9aMlYwUzJWNUtHOXdkR2x2Ym1Gc1MyVjVLU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSFJsZUhSRmJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHUnZZM1Z0Wlc1MExtTnlaV0YwWlZSbGVIUk9iMlJsS0hScGRHeGxWR1Y0ZENrcE8xeHVJQ0FnSUNBZ0lDQWdJSFJwZEd4bFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaDBaWGgwUld4bGJXVnVkQ2s3WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnZEdsMGJHVkZiR1Z0Wlc1MExtOXVZMnhwWTJzZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYjNCbGJrSjFkSFJ2YmlBOUlIUnBkR3hsUld4bGJXVnVkQzVtYVhKemRFTm9hV3hrTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUc5aWFtVmpkRU52Ym5SbGJuUnpJRDBnZEdsMGJHVkZiR1Z0Wlc1MExuQmhjbVZ1ZEU1dlpHVXVibVY0ZEZOcFlteHBibWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZZbXBsWTNSRGIyNTBaVzUwY3k1emRIbHNaUzVrYVhOd2JHRjVJRDBnWTNWeWNtVnVkR3g1UTJ4dmMyVmtJRDhnSjJKc2IyTnJKeUE2SUNkdWIyNWxKenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHOXdaVzVDZFhSMGIyNHVjM1I1YkdVdWRISmhibk5tYjNKdElEMGdZM1Z5Y21WdWRHeDVRMnh2YzJWa0lEOGdKM0p2ZEdGMFpTZzVNR1JsWnlrbklEb2dKM0p2ZEdGMFpTZ3daR1ZuS1NjN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBiSGxEYkc5elpXUWdQU0FoWTNWeWNtVnVkR3g1UTJ4dmMyVmtPMXh1SUNBZ0lDQWdJQ0FnSUgwN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeVJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaDBhWFJzWlVWc1pXMWxiblFwTzF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyNTBZV2x1WlhKRmJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUdkbGRFOXdaVzVDZFhSMGIyNG9iR1YyWld4SmMwTnNiM05sWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCaWRYUjBiMjVGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11YjNCbGJrSjFkSFJ2Ymk1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUdKMWRIUnZia1ZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTV2Y0dWdVFuVjBkRzl1TG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUdKMWRIUnZia1ZzWlcxbGJuUXVjM1I1YkdVdWRISmhibk5tYjNKdElEMGdiR1YyWld4SmMwTnNiM05sWkNBL0lDZHliM1JoZEdVb01HUmxaeWtuSURvZ0ozSnZkR0YwWlNnNU1HUmxaeWtuTzF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaWRYUjBiMjVGYkdWdFpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJR2RsZEVOdmJuUmxiblJ6UTI5dWRHRnBibVZ5S0dselEyeHZjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdOdmJuUmhhVzVsY2tWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLSE4wZVd4bFQzQjBhVzl1Y3k1amIyNTBaVzUwYzBOdmJuUmhhVzVsY2k1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzJWMFFYUjBjbWxpZFhSbEtDZGtZWFJoTFhSbGMzUW5MQ0FuWTI5dWRHVnVkSE5EYjI1MFlXbHVaWEluS1R0Y2JpQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSkZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXVZMjl1ZEdWdWRITkRiMjUwWVdsdVpYSXVjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1a2FYTndiR0Y1SUQwZ0tHbHpRMnh2YzJWa0lEOGdKMjV2Ym1VbklEb2dKMkpzYjJOckp5azdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ym5SaGFXNWxja1ZzWlcxbGJuUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNGdaMlYwVTNSaGJtUmhjbVJRWVdseUtHdGxlU3dnZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdjR0ZwY2tWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLSE4wZVd4bFQzQjBhVzl1Y3k1clpYbFdZV3gxWlZCaGFYSXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQndZV2x5Uld4bGJXVnVkQzV6ZEhsc1pTNWpjM05VWlhoMElEMGdjM1I1YkdWUGNIUnBiMjV6TG10bGVWWmhiSFZsVUdGcGNpNXpkSGxzWlR0Y2JpQWdJQ0FnSUNBZ0lDQndZV2x5Uld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNoblpYUkxaWGtvYTJWNUtTazdYRzRnSUNBZ0lDQWdJQ0FnY0dGcGNrVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9aMlYwVm1Gc2RXVW9kbUZzZFdVcEtUdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjR0ZwY2tWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnWjJWMFMyVjVLRzVoYldVcElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2EyVjVSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb2MzUjViR1ZQY0hScGIyNXpMbXRsZVM1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUd0bGVVVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NXJaWGt1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnYTJWNVJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNodVlXMWxJQ3NnSnpvZ0p5a3BPMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJyWlhsRmJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUdkbGRGWmhiSFZsS0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJSFpoYkhWbFJXeGxiV1Z1ZER0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnYm5Wc2JGUjVjR1VnUFNBbmIySnFaV04wSnp0Y2JpQWdJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tIUjVjR1Z2WmlCMllXeDFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmMzbHRZbTlzSnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXVjM2x0WW05c1ZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11YzNsdFltOXNWbUZzZFdVdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNoMllXeDFaUzUwYjFOMGNtbHVaeWdwS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FuYzNSeWFXNW5KenBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2h6ZEhsc1pVOXdkR2x2Ym5NdWMzUnlhVzVuVm1Gc2RXVXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXVjM1J5YVc1blZtRnNkV1V1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNoa2IyTjFiV1Z1ZEM1amNtVmhkR1ZVWlhoMFRtOWtaU2duWENJbklDc2dkbUZzZFdVZ0t5QW5YQ0luS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FuYm5WdFltVnlKenBjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2h6ZEhsc1pVOXdkR2x2Ym5NdWJuVnRZbVZ5Vm1Gc2RXVXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXViblZ0WW1WeVZtRnNkV1V1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNoa2IyTjFiV1Z1ZEM1amNtVmhkR1ZVWlhoMFRtOWtaU2gyWVd4MVpTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0oySnZiMnhsWVc0bk9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTVpYjI5c1pXRnVWbUZzZFdVdWRHRm5LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdVltOXZiR1ZoYmxaaGJIVmxMbk4wZVd4bE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWkc5amRXMWxiblF1WTNKbFlYUmxWR1Y0ZEU1dlpHVW9kbUZzZFdVcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUc1MWJHeFVlWEJsT2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpVVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NXVkV3hzVm1Gc2RXVXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXViblZzYkZaaGJIVmxMbk4wZVd4bE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWkc5amRXMWxiblF1WTNKbFlYUmxWR1Y0ZEU1dlpHVW9kbUZzZFdVcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjJZV3gxWlVWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnYldWeVoyVlRkSGxzWlU5d2RHbHZibk1vWkdWbVlYVnNkSE1zSUc5MlpYSnlhV1JsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCdFpYSm5aV1FnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJyWlhrZ2FXNGdaR1ZtWVhWc2RITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWxjbWRsWkZ0clpYbGRJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaDdmU3dnWkdWbVlYVnNkSE5iYTJWNVhTd2diM1psY25KcFpHVnpXMnRsZVYwcE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYldWeVoyVmtPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaVzVrWlhJb0tUdGNiaUFnSUNCOVhHNTlJaXdpYVcxd2IzSjBJSHRrWldaaGRXeDBJR0Z6SUVKaGMyVk1iMmQ5SUdaeWIyMGdKeTR2WW1GelpVeHZaeWM3WEc1cGJYQnZjblFnZTJSbFptRjFiSFFnWVhNZ1RHOW5UbTlrWlUxcGVHbHVjMzBnWm5KdmJTQW5MaTkwWlhKdFRHOW5MbTFwZUdsdWN5NXViMlJsSnp0Y2JtbHRjRzl5ZENCN1pHVm1ZWFZzZENCaGN5QlhaV0pPYjJSbFRXbDRhVzV6ZlNCbWNtOXRJQ2N1TDNSbGNtMU1iMmN1YldsNGFXNXpMbmRsWWljN1hHNXBiWEJ2Y25RZ2UxQnNZWFJtYjNKdGZTQm1jbTl0SUNkallYVnpZV3d0Ym1WMExuVjBhV3h6Snp0Y2JtTnNZWE56SUZSbGNtMU1iMmNnWlhoMFpXNWtjeUJRYkdGMFptOXliUzV0YVhoWGFYUm9LRUpoYzJWTWIyY3NJSHNuYm05a1pTYzZXMHh2WjA1dlpHVk5hWGhwYm5OZExDZDNaV0luT2x0WFpXSk9iMlJsVFdsNGFXNXpYWDBwZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NsN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNGdJQ0FnZlZ4dWZWeHVaWGh3YjNKMElHUmxabUYxYkhRZ2JtVjNJRlJsY20xTWIyY29LVHNpTENKamIyNXpkQ0JNYjJkT2IyUmxUV2w0YVc1eklEMGdLRXh2WjBOc1lYTnpLVDArSUdOc1lYTnpJR1Y0ZEdWdVpITWdURzluUTJ4aGMzTjdYRzRnSUNBZ1kyOXVibVZqZENoamFHRnVibVZzS1h0Y2JpQWdJQ0FnSUNBZ0x5OXViM1JvYVc1blhHNGdJQ0FnZlZ4dUlDQWdJR3h2WnlodFpYTnpZV2RsS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3k1c1pYWmxiQ0ErUFNCMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4eld5ZHNiMmNuWFNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWh0WlhOellXZGxLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NISnZaM0psYzNNb2NISnZZMlZ6YzAxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNBdkwxUlBSRTg2SUdsdGNHeGxiV1Z1ZENCd2NtOW5jbVZ6Y3lCemFHOTNYRzRnSUNBZ2ZWeHVJQ0FnSUdSbFluVm5LRzFsYzNOaFoyVXBlMXh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMbXhsZG1Wc0lENDlJSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE5iSjJSbFluVm5KMTBwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUgwZ1hHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVpHVmlkV2NvYldWemMyRm5aU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1RHOW5UbTlrWlUxcGVHbHVjenNpTENKcGJYQnZjblFnZTJSbFptRjFiSFFnWVhNZ1NuTnZibFpwWlhkOUlHWnliMjBnSnk0dmNISmxkSFI1U25OdmJpYzdYRzVqYjI1emRDQlhaV0pPYjJSbFRXbDRhVzV6SUQwZ0tFeHZaME5zWVhOektUMCtJR05zWVhOeklHVjRkR1Z1WkhNZ1RHOW5RMnhoYzNON1hHNGdJQ0FnWTI5dWJtVmpkQ2hrYjJOMWJXVnVkRVZzUFc1MWJHd3BlMXh1SUNBZ0lDQWdJQ0JrYjJOMWJXVnVkRVZzSUQwZ1pHOWpkVzFsYm5SRmJIeDhaRzlqZFcxbGJuUXVZbTlrZVR0Y2JpQWdJQ0FnSUNBZ2JHVjBJRzV2WkdVZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Z3aWRXeGNJaWs3WEc0Z0lDQWdJQ0FnSUc1dlpHVXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlGd2liR2x6ZEMxemRIbHNaUzEwZVhCbE9pQnViMjVsTzF3aU8xeHVJQ0FnSUNBZ0lDQmtiMk4xYldWdWRFVnNMbUZ3Y0dWdVpFTm9hV3hrS0c1dlpHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtWnlZVzFsUld3Z1BTQmtiMk4xYldWdWRFVnNPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZaMmRsY2tWc0lEMGdaRzlqZFcxbGJuUkZiQzVuWlhSRmJHVnRaVzUwYzBKNVZHRm5UbUZ0WlNoY0luVnNYQ0lwV3pCZE8xeHVJQ0FnSUgxY2JpQWdJQ0J6WTNKdmJHeENiM1IwYjIwb1pXeGxiV1Z1ZEQxdWRXeHNLWHRjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQ0E5SUdWc1pXMWxiblFnZkh3Z2RHaHBjeTVtY21GdFpVVnNPMXh1SUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbk5qY205c2JGUnZjQ0E5SUdWc1pXMWxiblF1YzJOeWIyeHNTR1ZwWjJoMElDMGdaV3hsYldWdWRDNWpiR2xsYm5SSVpXbG5hSFE3WEc0Z0lDQWdmVnh1SUNBZ0lIQnliMmR5WlhOektIQnliMk5sYzNOTlpYTnpZV2RsS1h0Y2JpQWdJQ0FnSUNBZ0x5OGdiR1YwSUc1dlpHVWdQU0IwYUdsekxteHZaMmRsY2tWc0xtZGxkRVZzWlcxbGJuUnpRbmxVWVdkT1lXMWxLRndpYkdrNmJuUm9MV3hoYzNRdGIyWXRkSGx3WlNneEtWd2lLVHRjYmlBZ0lDQWdJQ0FnYkdWMElFeEpUbTlrWlhNZ1BTQjBhR2x6TG14dloyZGxja1ZzTG1kbGRFVnNaVzFsYm5SelFubFVZV2RPWVcxbEtGd2liR2xjSWlrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J1YjJSbElEMGdURWxPYjJSbGMxdE1TVTV2WkdWekxteGxibWQwYUMweFhUdGNiaUFnSUNBZ0lDQWdhV1lvSVc1dlpHVWdmSHdnYm05a1pTNWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9YQ0pzYjJkblpYSXRjSEp2WjNKbGMzTmNJaWtwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeTlqY21WaGRHVWdibVYzSUdWc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1YjJSbElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoY0lteHBYQ0lwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdibTlrWlM1amJHRnpjMHhwYzNRdVlXUmtLRndpYkc5bloyVnlMWEJ5YjJkeVpYTnpYQ0lwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1c2IyZG5aWEpGYkM1aGNIQmxibVJEYUdsc1pDaHViMlJsS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnNaWFFnYW5OdmJrNXZaR1VnUFNCS2MyOXVWbWxsZHk1S1UwOU9SR2x6Y0d4aGVTaHdjbTlqWlhOelRXVnpjMkZuWlNrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJrWVhSbElEMGdibVYzSUVSaGRHVW9LVHRjYmlBZ0lDQWdJQ0FnYm05a1pTNXBibTVsY2toVVRVd2dQU0JnUEhBZ2MzUjViR1U5WENKbWIyNTBMWE5wZW1VNklERXljSGc3SUhSbGVIUXRZV3hwWjI0NmNtbG5hSFJjSWo0a2UyUmhkR1Y5UEM5d1BtQTdYRzRnSUNBZ0lDQWdJRzV2WkdVdVlYQndaVzVrUTJocGJHUW9hbk52Yms1dlpHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpjbTlzYkVKdmRIUnZiU2dwTzF4dUlDQWdJSDFjYmlBZ0lDQnNiMmNvYldWemMyRm5aU2w3WEc0Z0lDQWdJQ0FnSUdsbUtIUm9hWE11YkdWMlpXd2dQajBnZEdocGN5NUJZMk5sY0hSbFpFeGxkbVZzYzFzbmJHOW5KMTBwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJHOW5aMlZ5Uld3Z2ZId2dJWFJvYVhNdWJHOW5aMlZ5Uld3dVlYQndaVzVrUTJocGJHUXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqYjI1dVpXTjBLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2JHVjBJRzV2WkdVZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Z3aWJHbGNJaWs3WEc0Z0lDQWdJQ0FnSUc1dlpHVXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlDZGliM0prWlhJdFltOTBkRzl0T2lBeGNIZ2djMjlzYVdRZ0kyUmxaR1ZrWlRzbk95QWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2JHVjBJR3B6YjI1T2IyUmxJRDBnU25OdmJsWnBaWGN1U2xOUFRrUnBjM0JzWVhrb2JXVnpjMkZuWlNrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJrWVhSbElEMGdibVYzSUVSaGRHVW9LVHRjYmlBZ0lDQWdJQ0FnYm05a1pTNXBibTVsY2toVVRVd2dQU0JnUEhBZ2MzUjViR1U5WENKbWIyNTBMWE5wZW1VNklERXljSGc3SUhSbGVIUXRZV3hwWjI0NmNtbG5hSFJjSWo0a2UyUmhkR1Y5UEM5d1BtQTdYRzRnSUNBZ0lDQWdJRzV2WkdVdVlYQndaVzVrUTJocGJHUW9hbk52Yms1dlpHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZaMmRsY2tWc0xtRndjR1Z1WkVOb2FXeGtLRzV2WkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OamNtOXNiRUp2ZEhSdmJTZ3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlodFpYTnpZV2RsS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JrWldKMVp5aHRaWE56WVdkbEtYdGNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NXNaWFpsYkNBK1BTQjBhR2x6TGtGalkyVndkR1ZrVEdWMlpXeHpXeWRrWldKMVp5ZGRLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXeHNPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUM4dmJtOGdjMmh2ZHlCdmJpQjNaV0lnYzJOeVpXVnVPeUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaR1ZpZFdjb2JXVnpjMkZuWlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdWMlZpVG05a1pVMXBlR2x1Y3pzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyRjFjMkZzWDI1bGRGOTFkR2xzYzE5Zk95SmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VJbWdEYXRhc2V0IH0gZnJvbSAnLi9iYXNlSW1nRGF0YXNldCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgTG9nZ2VyTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5sb2cnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgTWVtQ2FjaGVNaXhpbnMsIG1lbURvd25DYWNoZSB9IGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBJbWFnZURhdGFzZXRGZXRjaE1peGlucyB9IGZyb20gJy4vaW1hZ2VEYXRhc2V0RmV0Y2gubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgSW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGlucyB9IGZyb20gJy4vaW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBJbWFnZURhdGFzZXRHZW5lcmF0b3JNaXhpbnMgfSBmcm9tICcuL2ltYWdlRGF0YXNldEdlbmVyYXRvci5taXhpbnMnO1xuaW1wb3J0IHsgUHJlcHJvY2Vzc2luZ01peGlucywgaW1hZ2VQcmVwcm9jZXNzaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW5pc3REYXRhc2V0IGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlSW1nRGF0YXNldCwgXG4gICAgICAgIFsgSW1hZ2VEYXRhc2V0RmV0Y2hNaXhpbnMsXG4gICAgICAgICAgSW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGlucyxcbiAgICAgICAgICBQcmVwcm9jZXNzaW5nTWl4aW5zLFxuICAgICAgICAgIEltYWdlRGF0YXNldEdlbmVyYXRvck1peGlucyxcbiAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAgICAgICAgICBTdG9yYWdlTWl4aW5zLFxuICAgICAgICAgIExvZ2dlck1peGlucyBdKXtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKXtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBpbmRleERCU3RvcmFnZTtcbiAgICAgICAgdGhpcy5NZW1DYWNoZSA9IG1lbURvd25DYWNoZTtcbiAgICAgICAgY29uc3QgUHJlcHJvY2Vzc2luZ1NhbXBsZSA9IGFzeW5jIChtYXN0ZXJTYW1wbGVCdWZmZXIsIHNhbXBsZVNpemUpPT57XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgaW1hZ2VQcmVwcm9jZXNzaW5nLmltYWdlU3BsaXQobWFzdGVyU2FtcGxlQnVmZmVyLCBzYW1wbGVTaXplKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgUHJlcHJvY2Vzc2luZ0xhYmVsID0gYXN5bmMgKG1hc3RlckxhYmVsQnVmZmVyLCBsYWJlbFNpemUpPT57XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgaW1hZ2VQcmVwcm9jZXNzaW5nLmltYWdlU3BsaXQobWFzdGVyTGFiZWxCdWZmZXIsIGxhYmVsU2l6ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyhQcmVwcm9jZXNzaW5nU2FtcGxlLCBQcmVwcm9jZXNzaW5nTGFiZWwpO1xuICAgIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlSW1nRGF0YXNldHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhc2V0Q29uZmlndXJlKXtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gZGF0YXNldENvbmZpZ3VyZTtcbiAgICAgICAgY29uc3Qge251bVNhbXBsZXMsIHNhbXBsZVNpemUsIG51bUNsYXNzZXN9ID0gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmRhdGFTaXplID0gW251bVNhbXBsZXMsIC4uLnNhbXBsZVNpemVdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5udW1TYW1wbGVzID0gbnVtU2FtcGxlcztcbiAgICAgICAgdGhpcy5zYW1wbGVTaXplID0gc2FtcGxlU2l6ZTtcbiAgICAgICAgdGhpcy5udW1DbGFzcyAgID0gbnVtQ2xhc3NlcztcbiAgICB9XG4gICAgXG4gICAgc3VtbWFyeSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb259IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbk1peGluc30gZnJvbSAnLi9mdW5jdGlvbi5taXhpbnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdGlvbixbRnVuY3Rpb25NaXhpbnNdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn0iLCJjb25zdCBGdW5jdGlvbk1peGlucyA9IChCYXNlRnVuY3Rpb25DbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VGdW5jdGlvbkNsYXNzeyBcbiAgICBnZXRJbWdCdWZmZXJTaXplKGltZ1NpemUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoKHMsZCk9PnMqZCwxLGltZ1NpemUpO1xuICAgIH1cbiAgICBnZW5lcmF0b3JXaXRoSW5kZXgoaXRlbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5hZGRJbmRleChSLm1hcCkoKGQsIGlkeCk9PltpZHgsIGRdLCBpdGVtcyk7XG4gICAgfVxuICAgIHNwbGl0VHJhaW5UZXN0U2V0KGl0ZW1zLCBzcGxpdEluZGV4KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuc3BsaXRBdChzcGxpdEluZGV4LCBpdGVtcyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uTWl4aW5zOyIsIlxuaW1wb3J0IHsgU2FtcGxpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IEltYWdlRGF0YXNldEZldGNoTWl4aW5zID0gKEJhc2VJbWFnZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUltYWdlQ2xhc3N7IFxuICAgIGFzeW5jIGZldGNoTGFiZWxDaHVuayhzYXZlRGlyLCBsYWJlbENodW5rKXtcbiAgICAgICAgbGV0IGxhYmVsQ2h1bmtVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZGF0YXNldFVybCArIGxhYmVsQ2h1bms7XG4gICAgICAgIGxldCBsYWJlbFNhdmVQYXRoID0gc2F2ZURpciArIGxhYmVsQ2h1bms7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hGaWxlKGxhYmVsQ2h1bmtVcmwsIGxhYmVsU2F2ZVBhdGgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoU2FtcGxlQ2h1bmsoc2F2ZURpciwgc2FtcGxlQ2h1bmspe1xuICAgICAgICBsZXQgc2FtcGxlQ2h1bmtVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZGF0YXNldFVybCArIHNhbXBsZUNodW5rO1xuICAgICAgICBsZXQgc2FtbXBsZVNhdmVQYXRoID0gc2F2ZURpciArIHNhbXBsZUNodW5rO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7c2FtcGxlQ2h1bmtVcmwsIHNhbW1wbGVTYXZlUGF0aH0pO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoUE5HRmlsZShzYW1wbGVDaHVua1VybCwgc2FtbXBsZVNhdmVQYXRoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RDaHVua3MobnVtY2h1bmtzLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIGxldCBjaHVua0lkeHMgPSBTYW1wbGluZy5jaG9pY2UodGhpcy5jb25maWd1cmF0aW9uLmNodW5rTGlzdCwgbnVtY2h1bmtzKTtcbiAgICAgICAgcmV0dXJuIGNodW5rSWR4cy5tYXAoKGlkeCwgaXRoKT0+KFtgZGF0YS1jaHVuay0ke2lkeH0ucG5nYCxgbGFiZWwtY2h1bmstJHtpZHh9YF0pKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaERhdGFzZXQoc2F2ZURpcj0nL21uaXN0LycsbnVtY2h1bmtzPTEwLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIGxldCBzZWxlY3RlZENodW5rcyA9IHRoaXMuc2VsZWN0Q2h1bmtzKG51bWNodW5rcywgc2VsZWN0QnkpO1xuICAgICAgICB0aGlzLnNhdmVkQ2h1bmtzID0gW107XG4gICAgICAgIGZvcihsZXQgW3NhbXBsZUNodW5rLCBsYWJlbENodW5rXSBvZiBzZWxlY3RlZENodW5rcyl7XG4gICAgICAgICAgICBsZXQgc2FtcGxlUGF0aCA9IGF3YWl0IHRoaXMuZmV0Y2hTYW1wbGVDaHVuayhzYXZlRGlyLCBzYW1wbGVDaHVuayk7XG4gICAgICAgICAgICBsZXQgbGFiZWxQYXRoID0gYXdhaXQgdGhpcy5mZXRjaExhYmVsQ2h1bmsoc2F2ZURpciwgbGFiZWxDaHVuayk7XG4gICAgICAgICAgICB0aGlzLnNhdmVkQ2h1bmtzLnB1c2goW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0pO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyh7c2F2ZUNodW5rczpbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXX0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5GLnVuemlwKHRoaXMuc2F2ZWRDaHVua3MpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBJbWFnZURhdGFzZXRGZXRjaE1peGluczsiLCJpbXBvcnQgeyBTYW1wbGluZyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY29uc3QgSW1hZ2VEYXRhc2V0R2VuZXJhdG9yTWl4aW5zID0gKEJhc2VJbWFnZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUltYWdlQ2xhc3N7IFxuICAgIFxuICAgIGdldFRyYWluVGVzdFNldCh0cmFpblNpemU9bnVsbCl7XG4gICAgICAgIHRyYWluU2l6ZSA9IHRyYWluU2l6ZXx8cGFyc2VJbnQodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcubGVuZ3RoKjAuOSk7XG4gICAgICAgIGNvbnN0IFt0cmFpblNldCwgdGVzdFNldF0gPSB0aGlzLkYuc3BsaXRUcmFpblRlc3RTZXQodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIHRyYWluU2l6ZSk7XG4gICAgICAgIHJldHVybiBbdHJhaW5TZXQsIHRlc3RTZXRdO1xuICAgIH1cblxuICAgIG1ha2VTYW1wbGVHZW5lcmF0b3Ioc2FtcGxlSWR4U2V0LCBiYXRjaFNpemU9bnVsbCwgc3RhcnQ9MCwgZW5kPW51bGwpe1xuICAgICAgICBpZighdGhpcy5zYXZlZFByZXByb2Nlc3Npbmcpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ByZXByb2Nlc3NpbmcgbXVzdCBiZSBwZXJmb3JtZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBiYXRjaFNpemUgPSBiYXRjaFNpemU/YmF0Y2hTaXplOnNhbXBsZUlkeFNldC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IF9iYXRjaGVzID0gdGhpcy5GLmhzcGxpdEV2ZXJ5KHNhbXBsZUlkeFNldCwgYmF0Y2hTaXplKTtcbiAgICAgICAgY29uc3QgYmF0Y2hlcyA9IFNhbXBsaW5nLmNob2ljZShfYmF0Y2hlcywgX2JhdGNoZXMubGVuZ3RoKTtcbiAgICAgICAgaWYoZW5kID09PSBudWxsKXtcbiAgICAgICAgICAgIGVuZCA9IGJhdGNoZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSBzdGFydCwgaXRlcmF0aW9uQ291bnQgPSAwLCBzdGVwID0gMTtcbiAgICAgICAgY29uc3QgYmF0Y2hHZW5lcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgbmV4dDogYXN5bmMoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmF0Y2hTYW1wbGVzID0gW10sIGJhdGNoTGFiZWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0gb2YgYmF0Y2hlc1tuZXh0SW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoU2FtcGxlcyA9IFsuLi5iYXRjaFNhbXBsZXMsIHNhbXBsZUl0ZW1bc2FtcGxlUGF0aF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hMYWJlbHMgPSBbLi4uYmF0Y2hMYWJlbHMsIGxhYmVsSXRlbVtsYWJlbFBhdGhdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggKz0gc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkeCA9IGl0ZXJhdGlvbkNvdW50O1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb25Db3VudCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2lkeCwgYmF0Y2hTaXplLCBkYXRhOltiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXX07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKG5leHRJbmRleCA8IGVuZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBiYXRjaEdlbmVyYXRvcjtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEYXRhc2V0R2VuZXJhdG9yTWl4aW5zOyIsImltcG9ydCB7IFN0cmVhbSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY29uc3QgSW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGlucyA9IChCYXNlSW1hZ2VDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VJbWFnZUNsYXNzeyBcbiAgICBtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbShzYXZlRGlyKXtcbiAgICAgICAgY29uc3QgSW1hZ2VCdWZmZXJTaXplID0gdGhpcy5GLmdldEltZ0J1ZmZlclNpemUodGhpcy5zYW1wbGVTaXplKTtcbiAgICAgICAgY29uc3QgTGFiZWxCdWZmZXJTaXplID0gdGhpcy5udW1DbGFzcztcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe2ltYWdlQnVmZmVyU2l6ZTogSW1hZ2VCdWZmZXJTaXplLCBcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsQnVmZmVyU2l6ZTogTGFiZWxCdWZmZXJTaXplfSk7XG4gICAgICAgIGNvbnN0IFRyYW5zZm9ybUZuID0gKGNodW5rLCBjaHVua0VuY29kaW5nLCBhZnRlclRyYW5zZm9ybUZuKSA9PntcbiAgICAgICAgICAgIGNvbnN0IFRyYW5zZm9ybUFzeW5jID0gYXN5bmMgKCk9PntcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlQnVmZmVyID0gY2h1bmsuc2FtcGxlO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbEJ1ZmZlciA9IGNodW5rLmxhYmVsO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtzYW1wbGVCdWZmZXIsIGxhYmVsQnVmZmVyfSk7XG4gICAgICAgICAgICAgICAgbGV0IHByZXByb2Nlc3NlZEltZ0J1ZmZlciA9IGF3YWl0IHRoaXMuUHJlcHJvY2Vzc2luZ1NhbXBsZUZuKHNhbXBsZUJ1ZmZlciwgSW1hZ2VCdWZmZXJTaXplKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlcHJvY2Vzc2VkTGFiZWxCdWZmZXIgPSBhd2FpdCB0aGlzLlByZXByb2Nlc3NpbmdMYWJlbEZuKGxhYmVsQnVmZmVyLCBMYWJlbEJ1ZmZlclNpemUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHByb2Nlc3NlZENodW5rOiB0aGlzLkYuemlwKHByZXByb2Nlc3NlZEltZ0J1ZmZlciwgcHJlcHJvY2Vzc2VkTGFiZWxCdWZmZXIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICBjaHVua0lkeDogY2h1bmsuaWR4fTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBUcmFuc2Zvcm1Bc3luYyhjaHVuaykudGhlbihwcm9jZXNzZWRDaHVuaz0+e1xuICAgICAgICAgICAgICAgIGFmdGVyVHJhbnNmb3JtRm4obnVsbCwgcHJvY2Vzc2VkQ2h1bmspO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBXcml0ZUZuID0gKHByb2Nlc3NlZENodW5rLCBjaHVua0VuY29kaW5nLCBjYWxsYmFjaykgPT57XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IFdyaXRlQXN5bmMgPSBhc3luYyAocHJvY2Vzc2VkQ2h1bmspPT57XG4gICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgocHJvY2Vzc2VkQ2h1bmsucHJvY2Vzc2VkQ2h1bmspO1xuICAgICAgICAgICAgICAgIGxldCBjaHVua0lkeCAgPSBwcm9jZXNzZWRDaHVuay5jaHVua0lkeDtcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlUGF0aCAgPSBbXSwgbGFiZWxQYXRoID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBbaWR4LCBbc2FtcGxlLCBsYWJlbF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua1NhbXBsZVBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdzYW1wbGUvJyArIGNodW5rSWR4ICsgJy8nICsgaWR4ICsgJy8nLCBzYW1wbGUpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rTGFiZWxQYXRoID0gYXdhaXQgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJdGVtKHNhdmVEaXIgKyAnbGFiZWwvJyArIGNodW5rSWR4ICsgJy8nICsgaWR4ICsgJy8nLCBsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZVBhdGggPSBbLi4uc2FtcGxlUGF0aCwgY2h1bmtTYW1wbGVQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxQYXRoID0gWy4uLmxhYmVsUGF0aCwgY2h1bmtMYWJlbFBhdGhdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzKHtwcmVwcm9jZXNzaW5nOiBbY2h1bmtTYW1wbGVQYXRoLCBjaHVua0xhYmVsUGF0aF19KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRi56aXAoc2FtcGxlUGF0aCwgbGFiZWxQYXRoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFdyaXRlQXN5bmMocHJvY2Vzc2VkQ2h1bmspLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gWy4uLnRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLCAuLi5yZXN1bHRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZHVwbGV4ZXIgPSBTdHJlYW0ubWFrZUR1cGxleChXcml0ZUZuKTtcbiAgICAgICAgbGV0IHRyYW5zZm9ybWVyID0gU3RyZWFtLm1ha2VUcmFuc2Zvcm0oVHJhbnNmb3JtRm4pO1xuICAgICAgICBsZXQgc3RyZWFtID0gZHVwbGV4ZXIucGlwZSh0cmFuc2Zvcm1lcikucGlwZShkdXBsZXhlcik7XG4gICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJlcHJvY2Vzc2luZ0RhdGFzZXQoc2F2ZURpcj0nL3ByZXByb2Nlc3NpbmcvbW5pc3QvJyxzdG9yZUluTWVtb3J5PWZhbHNlKXtcbiAgICAgICAgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZSA9IChzdG9yZUluTWVtb3J5KT90aGlzLm1lbUNhY2hlOnRoaXMuc3RvcmFnZTtcbiAgICAgICAgbGV0IHN0cmVhbSA9IHRoaXMubWFrZVByZXByb2Nlc3NpbmdTdHJlYW0oc2F2ZURpcik7XG4gICAgICAgIGxldCBnZW5lcmF0b3IgPSB0aGlzLkYuZ2VuZXJhdG9yV2l0aEluZGV4KHRoaXMuc2F2ZWRDaHVua3MpO1xuICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdXSBvZiBnZW5lcmF0b3Ipe1xuICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IHNhbXBsZSA9IHNhbXBsZUl0ZW1bc2FtcGxlUGF0aF07XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBsYWJlbEl0ZW1bbGFiZWxQYXRoXTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtzYW1wbGUsIGxhYmVsfSk7XG4gICAgICAgICAgICBzdHJlYW0ucHVzaCh7aWR4LCBzYW1wbGUsIGxhYmVsfSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWFtLnB1c2gobnVsbCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgc3RyZWFtLm9uKCdmaW5pc2gnLCAoKT0+e1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBJbWFnZURhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9