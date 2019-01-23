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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9sb2dnZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3ByZXR0eUpzb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJCYXNlTG9nIiwiY29uc3RydWN0b3IiLCJBY2NlcHRlZExldmVscyIsImRlYnVnIiwibG9nIiwid2FybmluZyIsImVycm9yIiwickFjY2VwdGVkTGV2ZWxzIiwibGV2ZWwiLCJMZXZlbCIsInVuZGVmaW5lZCIsIkVycm9yIiwiT2JqZWN0Iiwia2V5cyIsIkxvZ2dlck1peGlucyIsIkJhc2VkQ2xhc3MiLCJhcmdzIiwibG9nZ2VyIiwiY29uc29sZSIsIkxvZ2dlciIsIkpzb25WaWV3IiwiSlNPTkRpc3BsYXkiLCJqc29uIiwib3BlbkxldmVsc0FyZyIsInN0eWxlT3B0aW9uc0FyZyIsIkRFRkFVTFRfU1RZTEVfT1BUSU9OUyIsInJvb3QiLCJ0YWciLCJzdHlsZSIsInRpdGxlQ29udGFpbmVyIiwidGl0bGUiLCJ0aXRsZVRleHQiLCJvcGVuQnV0dG9uIiwiY29udGVudHNDb250YWluZXIiLCJrZXlWYWx1ZVBhaXIiLCJrZXkiLCJzeW1ib2xWYWx1ZSIsInN0cmluZ1ZhbHVlIiwibnVtYmVyVmFsdWUiLCJib29sZWFuVmFsdWUiLCJudWxsVmFsdWUiLCJvcGVuTGV2ZWxzIiwiaXNOYU4iLCJwYXJzZUludCIsIkluZmluaXR5Iiwic3R5bGVPcHRpb25zIiwibWVyZ2VTdHlsZU9wdGlvbnMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJUeXBlRXJyb3IiLCJ0byIsImluZGV4IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibmV4dFNvdXJjZSIsIm5leHRLZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyZW5kZXIiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY3NzVGV4dCIsInZvaWRFbGVtZW50IiwiZ2V0VmFsdWUiLCJhcHBlbmRDaGlsZCIsIkRhdGUiLCJkYXRlRWxlbWVudCIsInRvSVNPU3RyaW5nIiwibm9uRXhwYW5kYWJsZUVsZW1lbnQiLCJBcnJheSIsImlzQXJyYXkiLCJ0aGlzTGV2ZWxJc0Nsb3NlZCIsImdldFRpdGxlIiwiY29udmVydEpzb25Ub0VsZW1lbnRzIiwibmV4dExldmVsSXNDbG9zZWQiLCJjb250YWluZXIiLCJnZXRDb250ZW50c0NvbnRhaW5lciIsImdldFN0YW5kYXJkUGFpciIsImdldE93blByb3BlcnR5U3ltYm9scyIsImZvckVhY2giLCJzeW1ib2wiLCJ0b1N0cmluZyIsIm9wdGlvbmFsS2V5IiwibGV2ZWxJc0Nsb3NlZCIsImN1cnJlbnRseUNsb3NlZCIsImNvbnRhaW5lckVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0RWxlbWVudCIsInRpdGxlRWxlbWVudCIsImdldE9wZW5CdXR0b24iLCJnZXRLZXkiLCJjcmVhdGVUZXh0Tm9kZSIsIm9uY2xpY2siLCJmaXJzdENoaWxkIiwib2JqZWN0Q29udGVudHMiLCJwYXJlbnROb2RlIiwibmV4dFNpYmxpbmciLCJkaXNwbGF5IiwidHJhbnNmb3JtIiwiYnV0dG9uRWxlbWVudCIsImlzQ2xvc2VkIiwidmFsdWUiLCJwYWlyRWxlbWVudCIsIm5hbWUiLCJrZXlFbGVtZW50IiwidmFsdWVFbGVtZW50IiwibnVsbFR5cGUiLCJkZWZhdWx0cyIsIm92ZXJyaWRlcyIsIm1lcmdlZCIsIlRlcm1Mb2ciLCJQbGF0Zm9ybSIsIm1peFdpdGgiLCJMb2dOb2RlTWl4aW5zIiwiV2ViTm9kZU1peGlucyIsIkxvZ0NsYXNzIiwiY29ubmVjdCIsImNoYW5uZWwiLCJtZXNzYWdlIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTWVzc2FnZSIsImRvY3VtZW50RWwiLCJib2R5Iiwibm9kZSIsImZyYW1lRWwiLCJsb2dnZXJFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2Nyb2xsQm90dG9tIiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiTElOb2RlcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwianNvbk5vZGUiLCJkYXRlIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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UztBQUNSLFVBQUcsS0FBS2hILEtBQUwsSUFBYyxLQUFLTixjQUFMLENBQW9CLEtBQXBCLENBQWpCLEVBQTRDO0FBQ3hDLGVBQU8sSUFBUDtBQUNIOztBQUNELFVBQUcsQ0FBQyxLQUFLNkgsUUFBTixJQUFrQixDQUFDLEtBQUtBLFFBQUwsQ0FBYzdELFdBQXBDLEVBQWdEO0FBQzVDLGFBQUtvRCxPQUFMO0FBQ0g7O0FBQ0QsVUFBSU8sSUFBSSxHQUFHaEUsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQStELFVBQUksQ0FBQ2pHLEtBQUwsQ0FBV21DLE9BQVgsR0FBcUIsbUNBQXJCOztBQUNBLFVBQUkwRSxRQUFRLEdBQUdySCxvQkFBU0MsV0FBVCxDQUFxQm1HLE9BQXJCLENBQWY7O0FBQ0EsVUFBSWtCLElBQUksR0FBRyxJQUFJdkUsSUFBSixFQUFYO0FBQ0EwRCxVQUFJLENBQUNjLFNBQUwsR0FBa0IsZ0RBQStDRCxJQUFLLE1BQXRFO0FBQ0FiLFVBQUksQ0FBQzNELFdBQUwsQ0FBaUJ1RSxRQUFqQjtBQUNBLFdBQUtWLFFBQUwsQ0FBYzdELFdBQWQsQ0FBMEIyRCxJQUExQjtBQUNBLFdBQUtJLFlBQUw7QUFDQS9HLGFBQU8sQ0FBQ2QsR0FBUixDQUFZb0gsT0FBWjtBQUNIOztBQUVEckgsU0FBSyxDQUFDcUgsT0FBRCxFQUFTO0FBQ1YsVUFBRyxLQUFLaEgsS0FBTCxJQUFjLEtBQUtOLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBakIsRUFBOEM7QUFDMUMsZUFBTyxJQUFQO0FBQ0gsT0FIUyxDQUlWOzs7QUFDQWdCLGFBQU8sQ0FBQ2YsS0FBUixDQUFjcUgsT0FBZDtBQUNIOztBQXJEb0QsR0FBekQ7O2lCQXdEZUosYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEZiw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2xvZy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUxvZ3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLkFjY2VwdGVkTGV2ZWxzID0ge2RlYnVnOiAwLCBsb2c6MSwgd2FybmluZzoyLCBlcnJvcjogM307XG4gICAgICAgIHRoaXMuckFjY2VwdGVkTGV2ZWxzID0gezA6J2RlYnVnJywgMTogJ2xvZycsIDI6ICd3YXJuaW5nJywgMzogJ2Vycm9yJ307XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddO1xuICAgIH1cbiAgICBzZXQgTGV2ZWwobGV2ZWwpe1xuICAgICAgICBpZih0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXSE9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1tsZXZlbF07ICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtsZXZlbH0gbXVzdCBiZSBvbmUgb2YgJHtPYmplY3Qua2V5cyh0aGlzLkFjY2VwdGVkTGV2ZWxzKX1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgTGV2ZWwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuckFjY2VwdGVkTGV2ZWxzW3RoaXMubGV2ZWxdO1xuICAgIH1cbn0iLCJjb25zdCBMb2dnZXJNaXhpbnMgPSAoQmFzZWRDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VkQ2xhc3N7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncyl7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgfVxuICAgIHNldCBMb2dnZXIobG9nZ2VyKXtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBMb2dnZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlck1peGluczsiLCIvLyBvcmlnaW4gY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWN5Z2lsYmVydC9qc29uLWRpc3BsYXkvYmxvYi9tYXN0ZXIvanNvbi1kaXNwbGF5LmpzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgTHVjeSBHaWxiZXJ0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVmlld3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBzdGF0aWMgSlNPTkRpc3BsYXkoanNvbiwgb3BlbkxldmVsc0FyZywgc3R5bGVPcHRpb25zQXJnKSB7XG4gICAgICAgIHZhciBERUZBVUxUX1NUWUxFX09QVElPTlMgPSB7XG4gICAgICAgICAgcm9vdDogeyB0YWc6ICdwcmUnLCBzdHlsZTogJ3BhZGRpbmc6IDVweDsgZm9udC1zaXplOiAxcmVtOycgfSxcbiAgICAgICAgICB0aXRsZUNvbnRhaW5lcjogeyB0YWc6ICdkaXYnLCBzdHlsZTogJ21hcmdpbi1ib3R0b206IDNweDsnIH0sXG4gICAgICAgICAgdGl0bGU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyOycgfSxcbiAgICAgICAgICB0aXRsZVRleHQ6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnJyB9LFxuICAgICAgICAgIG9wZW5CdXR0b246IHsgXG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW46IDBweCA3cHggMHB4IDJweDsgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAnXG4gICAgICAgICAgICAgICAgICsgJ2JvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjazsnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudHNDb250YWluZXI6IHsgdGFnOiAnZGl2Jywgc3R5bGU6ICdwYWRkaW5nLWxlZnQ6IDE4cHg7JyB9LFxuICAgICAgICAgIGtleVZhbHVlUGFpcjogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogMnB4OycgfSxcbiAgICAgICAgICBrZXk6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGRhcmtibHVlOycgfSxcbiAgICAgICAgICBzeW1ib2xWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogZGFya2dyZWVuOycgfSxcbiAgICAgICAgICBzdHJpbmdWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogY3JpbXNvbjsnIH0sXG4gICAgICAgICAgbnVtYmVyVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICAgIGJvb2xlYW5WYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgICAgbnVsbFZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9wZW5MZXZlbHMgPSBpc05hTihwYXJzZUludChvcGVuTGV2ZWxzQXJnKSkgPyBJbmZpbml0eSA6IHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpO1xuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0gdHlwZW9mIHN0eWxlT3B0aW9uc0FyZyA9PT0gJ29iamVjdCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1lcmdlU3R5bGVPcHRpb25zKERFRkFVTFRfU1RZTEVfT1BUSU9OUywgc3R5bGVPcHRpb25zQXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBERUZBVUxUX1NUWUxFX09QVElPTlM7XG4gICAgXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgXG4gICAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMucm9vdC50YWcpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5yb290LnN0eWxlO1xuICAgIFxuICAgICAgICAgIGlmIChqc29uID09PSBudWxsIHx8IGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHZvaWRFbGVtZW50ID0gZ2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZvaWRFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb24gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBub25FeHBhbmRhYmxlRWxlbWVudCA9IGdldFZhbHVlKGpzb24pO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub25FeHBhbmRhYmxlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IEFycmF5LmlzQXJyYXkoanNvbikgPyAnQXJyYXlbJyArIGpzb24ubGVuZ3RoICsgJ10nIDogJ09iamVjdCc7XG4gICAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBvcGVuTGV2ZWxzIDwgMTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUodGl0bGUsIG51bGwsIHRoaXNMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCAxKSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCBpbmRleCkge1xuICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgICAgICB2YXIgbmV4dExldmVsSXNDbG9zZWQgPSBpbmRleCArIDEgPiBvcGVuTGV2ZWxzO1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250ZW50c0NvbnRhaW5lcih0aGlzTGV2ZWxJc0Nsb3NlZCk7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdBcnJheVsnICsganNvbltrZXldLmxlbmd0aCArICddJywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSA9PT0gbnVsbCB8fCBqc29uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwgbnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0udG9JU09TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbltrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ09iamVjdCcsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoanNvbikuZm9yRWFjaChmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihzeW1ib2wudG9TdHJpbmcoKSwganNvbltzeW1ib2xdKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRUaXRsZSh0aXRsZVRleHQsIG9wdGlvbmFsS2V5LCBsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRseUNsb3NlZCA9IGxldmVsSXNDbG9zZWQ7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlLnRhZyk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGUuc3R5bGU7XG4gICAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGlmIChvcHRpb25hbEtleSkge1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KG9wdGlvbmFsS2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3BlbkJ1dHRvbiA9IHRpdGxlRWxlbWVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBvYmplY3RDb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gY3VycmVudGx5Q2xvc2VkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgIG9wZW5CdXR0b24uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudGx5Q2xvc2VkID8gJ3JvdGF0ZSg5MGRlZyknIDogJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi50YWcpO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnN0eWxlO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICAgIHJldHVybiBidXR0b25FbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbnRlbnRzQ29udGFpbmVyKGlzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAnY29udGVudHNDb250YWluZXInKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIuc3R5bGU7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKGlzQ2xvc2VkID8gJ25vbmUnIDogJ2Jsb2NrJyk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgcGFpckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIudGFnKTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci5zdHlsZTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VmFsdWUodmFsdWUpKTtcbiAgICAgICAgICByZXR1cm4gcGFpckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KG5hbWUpIHtcbiAgICAgICAgICB2YXIga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleS50YWcpO1xuICAgICAgICAgIGtleUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXkuc3R5bGU7XG4gICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lICsgJzogJykpO1xuICAgICAgICAgIHJldHVybiBrZXlFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgICAgICB2YXIgbnVsbFR5cGUgPSAnb2JqZWN0JztcbiAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCInICsgdmFsdWUgKyAnXCInKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG51bGxUeXBlOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udWxsVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgICAgIHZhciBtZXJnZWQgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG1lcmdlZFtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiByZW5kZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtkZWZhdWx0IGFzIEJhc2VMb2d9IGZyb20gJy4vYmFzZUxvZyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgTG9nTm9kZU1peGluc30gZnJvbSAnLi90ZXJtTG9nLm1peGlucy5ub2RlJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBXZWJOb2RlTWl4aW5zfSBmcm9tICcuL3Rlcm1Mb2cubWl4aW5zLndlYic7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNsYXNzIFRlcm1Mb2cgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VMb2csIHsnbm9kZSc6W0xvZ05vZGVNaXhpbnNdLCd3ZWInOltXZWJOb2RlTWl4aW5zXX0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuY29uc3QgTG9nZ2VyID0gbmV3IFRlcm1Mb2coKTtcbmV4cG9ydCBkZWZhdWx0IExvZ2dlcjsiLCJjb25zdCBMb2dOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChjaGFubmVsKXtcbiAgICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2Upe1xuICAgICAgICAvL1RPRE86IGltcGxlbWVudCBwcm9ncmVzcyBzaG93XG4gICAgfVxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gXG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nTm9kZU1peGluczsiLCJpbXBvcnQge2RlZmF1bHQgYXMgSnNvblZpZXd9IGZyb20gJy4vcHJldHR5SnNvbic7XG5jb25zdCBXZWJOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChkb2N1bWVudEVsPW51bGwpe1xuICAgICAgICBkb2N1bWVudEVsID0gZG9jdW1lbnRFbHx8ZG9jdW1lbnQuYm9keTtcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IFwibGlzdC1zdHlsZS10eXBlOiBub25lO1wiO1xuICAgICAgICBkb2N1bWVudEVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB0aGlzLmZyYW1lRWwgPSBkb2N1bWVudEVsO1xuICAgICAgICB0aGlzLmxvZ2dlckVsID0gZG9jdW1lbnRFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpWzBdO1xuICAgIH1cbiAgICBzY3JvbGxCb3R0b20oZWxlbWVudD1udWxsKXtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5mcmFtZUVsO1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIHByb2dyZXNzKHByb2Nlc3NNZXNzYWdlKXtcbiAgICAgICAgLy8gbGV0IG5vZGUgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGk6bnRoLWxhc3Qtb2YtdHlwZSgxKVwiKTtcbiAgICAgICAgbGV0IExJTm9kZXMgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XG4gICAgICAgIGxldCBub2RlID0gTElOb2Rlc1tMSU5vZGVzLmxlbmd0aC0xXTtcbiAgICAgICAgaWYoIW5vZGUgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2dnZXItcHJvZ3Jlc3NcIikpe1xuICAgICAgICAgICAgLy9jcmVhdGUgbmV3IGVsXG4gICAgICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VyLXByb2dyZXNzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShwcm9jZXNzTWVzc2FnZSk7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSl7XG4gICAgICAgIGlmKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snbG9nJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMubG9nZ2VyRWwgfHwgIXRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQpe1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9ICdib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTsnOyAgICAgICBcbiAgICAgICAgbGV0IGpzb25Ob2RlID0gSnNvblZpZXcuSlNPTkRpc3BsYXkobWVzc2FnZSk7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBkZWJ1ZyhtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vbm8gc2hvdyBvbiB3ZWIgc2NyZWVuOyAgICAgICAgXG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2ViTm9kZU1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),

/***/ "./src/MNIST.ImgDataset.js":
/*!*********************************!*\
  !*** ./src/MNIST.ImgDataset.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./baseImgDataset */ "./src/baseImgDataset.js"), __webpack_require__(/*! ./function */ "./src/function.js"), __webpack_require__(/*! causal-net.storage */ "causal-net.storage"), __webpack_require__(/*! causal-net.memcache */ "causal-net.memcache"), __webpack_require__(/*! causal-net.log */ "../causality-log/dist/@causalNet/log.web.js"), __webpack_require__(/*! causal-net.preprocessing */ "causal-net.preprocessing"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _baseImgDataset, _function, _causalNet, _causalNet2, _causalNet3, _causalNet4, _causalNet5) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _baseImgDataset = _interopRequireDefault(_baseImgDataset);
  _function = _interopRequireDefault(_function);

  class MnistDataset extends _causalNet5.Platform.mixWith(_baseImgDataset.default, [_causalNet3.LoggerMixins]) {
    constructor(configure) {
      super(configure);
      this.storage = _causalNet.indexDBStorage;
      this.memCache = _causalNet2.memDownCache;
      this.preprocessing = new _causalNet4.Preprocessing();
      this.F = new _function.default();
    }

    async fetchLabelChunk(chunkUrl, savePath) {
      this.logger.debug({
        chunkUrl,
        savePath
      });
      return await this.storage.fetchFile(chunkUrl, savePath);
    }

    async fetchSampleChunk(chunkUrl, savePath) {
      return await this.storage.fetchPNGFile(chunkUrl, savePath);
    }

    selectChunks(numchunks, selectBy = 'random') {
      let chunkIdxs = _causalNet5.Sampling.choice(this.configuration.chunkList, numchunks);

      return chunkIdxs.map((idx, ith) => [`data-chunk-${idx}.png`, `label-chunk-${idx}`]);
    }

    async fetchDataset(saveDir = '/mnist/', numchunks = 1, selectBy = 'random') {
      let selectedChunks = this.selectChunks(numchunks, selectBy);
      let [sampleChunks, labelChunks] = this.F.unzip(selectedChunks);
      this.logger.debug({
        selectedChunks,
        sampleChunks,
        labelChunks
      });
      let chunkFetchList = this.F.zip(sampleChunks, labelChunks);
      this.savedChunks = [];

      for (let [sampleChunk, labelChunk] of chunkFetchList) {
        let sampleChunkUrl = this.configuration.datasetUrl + sampleChunk;
        let sammpleSavePath = saveDir + sampleChunk;
        this.logger.debug({
          sampleChunkUrl,
          sammpleSavePath
        });
        let samplePath = await this.storage.fetchPNGFile(sampleChunkUrl, sammpleSavePath);
        this.logger.debug({
          samplePath
        });
        let labelChunkUrl = this.configuration.datasetUrl + labelChunk;
        let labelSavePath = saveDir + labelChunk;
        this.logger.debug({
          labelChunkUrl,
          labelSavePath
        });
        let labelPath = await this.storage.fetchFile(labelChunkUrl, labelSavePath);
        this.logger.debug({
          labelPath
        });
        this.savedChunks.push([samplePath, labelPath]);
        this.progress({
          saveChunks: [samplePath, labelPath]
        });
      }

      ;
      let [sampleStorage, labelStorage] = this.F.unzip(this.savedChunks);
      this.savedChunkSamples = sampleStorage;
      this.savedChunkLabels = labelStorage;
      return {
        sampleStorage,
        labelStorage
      };
    }

    makePreprocessingStream(saveDir = '/preprocessing/mnist/', storeInMemory = false) {
      this.preProcessingStorage = storeInMemory ? this.memCache : this.storage;
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

      let duplexer = _causalNet5.Stream.makeDuplex(WriteFn);

      let transformer = _causalNet5.Stream.makeTransform(TransformFn);

      let stream = duplexer.pipe(transformer).pipe(duplexer);
      return stream;
    }

    async preprocessingDataset(stream) {
      this.logger.debug(this.savedChunks);
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

    getTrainTestSet(trainSize = null) {
      trainSize = trainSize || parseInt(this.savedPreprocessing.length * 0.9);
      const [trainSet, testSet] = this.F.splitTrainTestSet(this.savedPreprocessing, trainSize);
      return [trainSet, testSet];
    }

    makeSampleGenerator(sampleIdxSet, batchSize = null, start = 0, end = null) {
      batchSize = batchSize ? batchSize : sampleIdxSet.length;

      const _batches = this.F.hsplitEvery(sampleIdxSet, batchSize);

      const batches = _causalNet5.Sampling.choice(_batches, _batches.length);

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
            let sampleItem = await this.storage.getItem(samplePath, true);
            let labelItem = await this.storage.getItem(labelPath, true);
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

  class Function extends _causalNet.Function {
    constructor() {
      super();
    }

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

  }

  _exports.default = Function;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uLi9jYXVzYWxpdHktbG9nL2Rpc3QvQGNhdXNhbE5ldC9sb2cud2ViLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvTU5JU1QuSW1nRGF0YXNldC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2Jhc2VJbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIk1uaXN0RGF0YXNldCIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VJbWdEYXRhc2V0IiwiTG9nZ2VyTWl4aW5zIiwiY29uc3RydWN0b3IiLCJjb25maWd1cmUiLCJzdG9yYWdlIiwiaW5kZXhEQlN0b3JhZ2UiLCJtZW1DYWNoZSIsIm1lbURvd25DYWNoZSIsInByZXByb2Nlc3NpbmciLCJQcmVwcm9jZXNzaW5nIiwiRiIsIkZ1bmN0aW9uIiwiZmV0Y2hMYWJlbENodW5rIiwiY2h1bmtVcmwiLCJzYXZlUGF0aCIsImxvZ2dlciIsImRlYnVnIiwiZmV0Y2hGaWxlIiwiZmV0Y2hTYW1wbGVDaHVuayIsImZldGNoUE5HRmlsZSIsInNlbGVjdENodW5rcyIsIm51bWNodW5rcyIsInNlbGVjdEJ5IiwiY2h1bmtJZHhzIiwiU2FtcGxpbmciLCJjaG9pY2UiLCJjb25maWd1cmF0aW9uIiwiY2h1bmtMaXN0IiwibWFwIiwiaWR4IiwiaXRoIiwiZmV0Y2hEYXRhc2V0Iiwic2F2ZURpciIsInNlbGVjdGVkQ2h1bmtzIiwic2FtcGxlQ2h1bmtzIiwibGFiZWxDaHVua3MiLCJ1bnppcCIsImNodW5rRmV0Y2hMaXN0IiwiemlwIiwic2F2ZWRDaHVua3MiLCJzYW1wbGVDaHVuayIsImxhYmVsQ2h1bmsiLCJzYW1wbGVDaHVua1VybCIsImRhdGFzZXRVcmwiLCJzYW1tcGxlU2F2ZVBhdGgiLCJzYW1wbGVQYXRoIiwibGFiZWxDaHVua1VybCIsImxhYmVsU2F2ZVBhdGgiLCJsYWJlbFBhdGgiLCJwdXNoIiwicHJvZ3Jlc3MiLCJzYXZlQ2h1bmtzIiwic2FtcGxlU3RvcmFnZSIsImxhYmVsU3RvcmFnZSIsInNhdmVkQ2h1bmtTYW1wbGVzIiwic2F2ZWRDaHVua0xhYmVscyIsIm1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtIiwic3RvcmVJbk1lbW9yeSIsInByZVByb2Nlc3NpbmdTdG9yYWdlIiwiSW1hZ2VCdWZmZXJTaXplIiwiZ2V0SW1nQnVmZmVyU2l6ZSIsInNhbXBsZVNpemUiLCJMYWJlbEJ1ZmZlclNpemUiLCJudW1DbGFzcyIsImltYWdlQnVmZmVyU2l6ZSIsImxhYmVsQnVmZmVyU2l6ZSIsIlRyYW5zZm9ybUZuIiwiY2h1bmsiLCJjaHVua0VuY29kaW5nIiwiYWZ0ZXJUcmFuc2Zvcm1GbiIsIlRyYW5zZm9ybUFzeW5jIiwic2FtcGxlQnVmZmVyIiwic2FtcGxlIiwibGFiZWxCdWZmZXIiLCJsYWJlbCIsInNwbGl0ZWRJbWdCdWZmZXIiLCJzcGxpdEltYWdlQnVmZmVyIiwic3BsaXRlZExhYmVsQnVmZmVyIiwicHJvY2Vzc2VkQ2h1bmsiLCJjaHVua0lkeCIsInRoZW4iLCJXcml0ZUZuIiwiY2FsbGJhY2siLCJXcml0ZUFzeW5jIiwiZ2VuZXJhdG9yIiwiZ2VuZXJhdG9yV2l0aEluZGV4IiwiY2h1bmtTYW1wbGVQYXRoIiwic2V0SXRlbSIsImNodW5rTGFiZWxQYXRoIiwicmVzdWx0Iiwic2F2ZWRQcmVwcm9jZXNzaW5nIiwiZHVwbGV4ZXIiLCJTdHJlYW0iLCJtYWtlRHVwbGV4IiwidHJhbnNmb3JtZXIiLCJtYWtlVHJhbnNmb3JtIiwic3RyZWFtIiwicGlwZSIsInByZXByb2Nlc3NpbmdEYXRhc2V0Iiwic2FtcGxlSXRlbSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwiZ2V0VHJhaW5UZXN0U2V0IiwidHJhaW5TaXplIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJ0cmFpblNldCIsInRlc3RTZXQiLCJzcGxpdFRyYWluVGVzdFNldCIsIm1ha2VTYW1wbGVHZW5lcmF0b3IiLCJzYW1wbGVJZHhTZXQiLCJiYXRjaFNpemUiLCJzdGFydCIsImVuZCIsIl9iYXRjaGVzIiwiaHNwbGl0RXZlcnkiLCJiYXRjaGVzIiwibmV4dEluZGV4IiwiaXRlcmF0aW9uQ291bnQiLCJzdGVwIiwiYmF0Y2hHZW5lcmF0b3IiLCJuZXh0IiwiYmF0Y2hTYW1wbGVzIiwiYmF0Y2hMYWJlbHMiLCJkYXRhIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJkYXRhc2V0Q29uZmlndXJlIiwibnVtU2FtcGxlcyIsIm51bUNsYXNzZXMiLCJkYXRhU2l6ZSIsInN1bW1hcnkiLCJCYXNlRnVuY3Rpb24iLCJpbWdTaXplIiwiUiIsInJlZHVjZSIsInMiLCJkIiwiaXRlbXMiLCJhZGRJbmRleCIsInNwbGl0SW5kZXgiLCJzcGxpdEF0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxJQUFJLElBQXlEO0FBQzdELDJCQUEyQixtQkFBTyxDQUFDLDBDQUFrQjtBQUNyRCxNQUFNLEVBS3VEO0FBQzdELENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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R0MsQ0FBSCxLQUFPRCxDQUFDLEdBQUNDLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCSixPQUF0QixDQUFQO0FBQ0g7O0FBQ0RwRCxzQkFBa0IsQ0FBQ3lELEtBQUQsRUFBTztBQUNyQixZQUFNSixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLGFBQU9BLENBQUMsQ0FBQ0ssUUFBRixDQUFXTCxDQUFDLENBQUM5RyxHQUFiLEVBQWtCLENBQUNpSCxDQUFELEVBQUloSCxHQUFKLEtBQVUsQ0FBQ0EsR0FBRCxFQUFNZ0gsQ0FBTixDQUE1QixFQUFzQ0MsS0FBdEMsQ0FBUDtBQUNIOztBQUNEOUIscUJBQWlCLENBQUM4QixLQUFELEVBQVFFLFVBQVIsRUFBbUI7QUFDaEMsWUFBTU4sQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxhQUFPQSxDQUFDLENBQUNPLE9BQUYsQ0FBVUQsVUFBVixFQUFzQkYsS0FBdEIsQ0FBUDtBQUNIOztBQWhCNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGxELDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvZGF0YXNldHMud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5tZW1jYWNoZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9iYXNlTG9nLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvYmFzZUxvZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICBjbGFzcyBCYXNlTG9nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuQWNjZXB0ZWRMZXZlbHMgPSB7XG4gICAgICAgIGRlYnVnOiAwLFxuICAgICAgICBsb2c6IDEsXG4gICAgICAgIHdhcm5pbmc6IDIsXG4gICAgICAgIGVycm9yOiAzXG4gICAgICB9O1xuICAgICAgdGhpcy5yQWNjZXB0ZWRMZXZlbHMgPSB7XG4gICAgICAgIDA6ICdkZWJ1ZycsXG4gICAgICAgIDE6ICdsb2cnLFxuICAgICAgICAyOiAnd2FybmluZycsXG4gICAgICAgIDM6ICdlcnJvcidcbiAgICAgIH07XG4gICAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXTtcbiAgICB9XG5cbiAgICBzZXQgTGV2ZWwobGV2ZWwpIHtcbiAgICAgIGlmICh0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKGAke2xldmVsfSBtdXN0IGJlIG9uZSBvZiAke09iamVjdC5rZXlzKHRoaXMuQWNjZXB0ZWRMZXZlbHMpfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldCBMZXZlbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJBY2NlcHRlZExldmVsc1t0aGlzLmxldmVsXTtcbiAgICB9XG5cbiAgfVxuXG4gIF9leHBvcnRzLmRlZmF1bHQgPSBCYXNlTG9nO1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGVybUxvZyAqLyBcIi4vc3JjL3Rlcm1Mb2cuanNcIiksIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYmFzZUxvZyAqLyBcIi4vc3JjL2Jhc2VMb2cuanNcIiksIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbG9nZ2VyLm1peGlucyAqLyBcIi4vc3JjL2xvZ2dlci5taXhpbnMuanNcIildLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzLCBfdGVybUxvZywgX2Jhc2VMb2csIF9sb2dnZXIpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiKTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJMb2dnZXJcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3Rlcm1Mb2cuZGVmYXVsdDtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiQmFzZUxvZ1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfYmFzZUxvZy5kZWZhdWx0O1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJMb2dnZXJNaXhpbnNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2xvZ2dlci5kZWZhdWx0O1xuICAgIH1cbiAgfSk7XG4gIF90ZXJtTG9nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVybUxvZyk7XG4gIF9iYXNlTG9nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFzZUxvZyk7XG4gIF9sb2dnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2dnZXIpO1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2xvZ2dlci5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9sb2dnZXIubWl4aW5zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0c10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4gIGNvbnN0IExvZ2dlck1peGlucyA9IEJhc2VkQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlZENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG5cbiAgICBzZXQgTG9nZ2VyKGxvZ2dlcikge1xuICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgfVxuXG4gICAgZ2V0IExvZ2dlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvZ2dlcjtcbiAgICB9XG5cbiAgfTtcblxuICB2YXIgX2RlZmF1bHQgPSBMb2dnZXJNaXhpbnM7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wcmV0dHlKc29uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcHJldHR5SnNvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICAvLyBvcmlnaW4gY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWN5Z2lsYmVydC9qc29uLWRpc3BsYXkvYmxvYi9tYXN0ZXIvanNvbi1kaXNwbGF5LmpzXG4gIC8vIENvcHlyaWdodCAoYykgMjAxNyBMdWN5IEdpbGJlcnRcbiAgY2xhc3MgSnNvblZpZXcge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHN0YXRpYyBKU09ORGlzcGxheShqc29uLCBvcGVuTGV2ZWxzQXJnLCBzdHlsZU9wdGlvbnNBcmcpIHtcbiAgICAgIHZhciBERUZBVUxUX1NUWUxFX09QVElPTlMgPSB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICB0YWc6ICdwcmUnLFxuICAgICAgICAgIHN0eWxlOiAncGFkZGluZzogNXB4OyBmb250LXNpemU6IDFyZW07J1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZUNvbnRhaW5lcjoge1xuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgc3R5bGU6ICdtYXJnaW4tYm90dG9tOiAzcHg7J1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyOydcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGVUZXh0OiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG9wZW5CdXR0b246IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luOiAwcHggN3B4IDBweCAycHg7IGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgJyArICdib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7J1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50c0NvbnRhaW5lcjoge1xuICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgc3R5bGU6ICdwYWRkaW5nLWxlZnQ6IDE4cHg7J1xuICAgICAgICB9LFxuICAgICAgICBrZXlWYWx1ZVBhaXI6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAycHg7J1xuICAgICAgICB9LFxuICAgICAgICBrZXk6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBkYXJrYmx1ZTsnXG4gICAgICAgIH0sXG4gICAgICAgIHN5bWJvbFZhbHVlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjb2xvcjogZGFya2dyZWVuOydcbiAgICAgICAgfSxcbiAgICAgICAgc3RyaW5nVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBjcmltc29uOydcbiAgICAgICAgfSxcbiAgICAgICAgbnVtYmVyVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBibHVlOydcbiAgICAgICAgfSxcbiAgICAgICAgYm9vbGVhblZhbHVlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjb2xvcjogYmx1ZTsnXG4gICAgICAgIH0sXG4gICAgICAgIG51bGxWYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGJsdWU7J1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIG9wZW5MZXZlbHMgPSBpc05hTihwYXJzZUludChvcGVuTGV2ZWxzQXJnKSkgPyBJbmZpbml0eSA6IHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpO1xuICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHR5cGVvZiBzdHlsZU9wdGlvbnNBcmcgPT09ICdvYmplY3QnID8gbWVyZ2VTdHlsZU9wdGlvbnMoREVGQVVMVF9TVFlMRV9PUFRJT05TLCBzdHlsZU9wdGlvbnNBcmcpIDogREVGQVVMVF9TVFlMRV9PUFRJT05TO1xuXG4gICAgICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG5cbiAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dFNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5yb290LnRhZyk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5yb290LnN0eWxlO1xuXG4gICAgICAgIGlmIChqc29uID09PSBudWxsIHx8IGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciB2b2lkRWxlbWVudCA9IGdldFZhbHVlKG51bGwpO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodm9pZEVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGpzb24gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgdmFyIGRhdGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbi50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRhdGVFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB2YXIgbm9uRXhwYW5kYWJsZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uKTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG5vbkV4cGFuZGFibGVFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdGl0bGUgPSBBcnJheS5pc0FycmF5KGpzb24pID8gJ0FycmF5WycgKyBqc29uLmxlbmd0aCArICddJyA6ICdPYmplY3QnO1xuICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IG9wZW5MZXZlbHMgPCAxO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUodGl0bGUsIG51bGwsIHRoaXNMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCBpbmRleCkge1xuICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBpbmRleCA+IG9wZW5MZXZlbHM7XG4gICAgICAgIHZhciBuZXh0TGV2ZWxJc0Nsb3NlZCA9IGluZGV4ICsgMSA+IG9wZW5MZXZlbHM7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250ZW50c0NvbnRhaW5lcih0aGlzTGV2ZWxJc0Nsb3NlZCk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uW2tleV0pKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ0FycmF5WycgKyBqc29uW2tleV0ubGVuZ3RoICsgJ10nLCBrZXksIG5leHRMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gPT09IG51bGwgfHwganNvbltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBudWxsKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldLnRvSVNPU3RyaW5nKCkpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ09iamVjdCcsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoanNvbikuZm9yRWFjaChmdW5jdGlvbiAoc3ltYm9sKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKHN5bWJvbC50b1N0cmluZygpLCBqc29uW3N5bWJvbF0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFRpdGxlKHRpdGxlVGV4dCwgb3B0aW9uYWxLZXksIGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRseUNsb3NlZCA9IGxldmVsSXNDbG9zZWQ7XG4gICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIudGFnKTtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlQ29udGFpbmVyLnN0eWxlO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgICAgIHZhciB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlVGV4dC50YWcpO1xuICAgICAgICB2YXIgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGUudGFnKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGUuc3R5bGU7XG4gICAgICAgIHRleHRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnN0eWxlO1xuICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0T3BlbkJ1dHRvbihsZXZlbElzQ2xvc2VkKSk7XG5cbiAgICAgICAgaWYgKG9wdGlvbmFsS2V5KSB7XG4gICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KG9wdGlvbmFsS2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZVRleHQpKTtcbiAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcblxuICAgICAgICB0aXRsZUVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgb3BlbkJ1dHRvbiA9IHRpdGxlRWxlbWVudC5maXJzdENoaWxkO1xuICAgICAgICAgIHZhciBvYmplY3RDb250ZW50cyA9IHRpdGxlRWxlbWVudC5wYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgIG9iamVjdENvbnRlbnRzLnN0eWxlLmRpc3BsYXkgPSBjdXJyZW50bHlDbG9zZWQgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICAgIG9wZW5CdXR0b24uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudGx5Q2xvc2VkID8gJ3JvdGF0ZSg5MGRlZyknIDogJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgICAgY3VycmVudGx5Q2xvc2VkID0gIWN1cnJlbnRseUNsb3NlZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnRhZyk7XG4gICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnN0eWxlO1xuICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGxldmVsSXNDbG9zZWQgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgcmV0dXJuIGJ1dHRvbkVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldENvbnRlbnRzQ29udGFpbmVyKGlzQ2xvc2VkKSB7XG4gICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIudGFnKTtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICdjb250ZW50c0NvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIuc3R5bGU7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzQ2xvc2VkID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFN0YW5kYXJkUGFpcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBwYWlyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci50YWcpO1xuICAgICAgICBwYWlyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci5zdHlsZTtcbiAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KGtleSkpO1xuICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICByZXR1cm4gcGFpckVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldEtleShuYW1lKSB7XG4gICAgICAgIHZhciBrZXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5LnRhZyk7XG4gICAgICAgIGtleUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXkuc3R5bGU7XG4gICAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSArICc6ICcpKTtcbiAgICAgICAgcmV0dXJuIGtleUVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgIHZhciBudWxsVHlwZSA9ICdvYmplY3QnO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zeW1ib2xWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS50YWcpO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1wiJyArIHZhbHVlICsgJ1wiJykpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBudWxsVHlwZTpcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bGxWYWx1ZS50YWcpO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZUVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG1lcmdlU3R5bGVPcHRpb25zKGRlZmF1bHRzLCBvdmVycmlkZXMpIHtcbiAgICAgICAgdmFyIG1lcmdlZCA9IHt9O1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgICAgIG1lcmdlZFtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbmRlcigpO1xuICAgIH1cblxuICB9XG5cbiAgX2V4cG9ydHMuZGVmYXVsdCA9IEpzb25WaWV3O1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3Rlcm1Mb2cuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90ZXJtTG9nLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlTG9nICovIFwiLi9zcmMvYmFzZUxvZy5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXJtTG9nLm1peGlucy5ub2RlICovIFwiLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXJtTG9nLm1peGlucy53ZWIgKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanNcIiksIF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gIH0gZWxzZSB7IHZhciBtb2Q7IH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChfZXhwb3J0cywgX2Jhc2VMb2csIF90ZXJtTG9nTWl4aW5zLCBfdGVybUxvZ01peGluczIsIF9jYXVzYWxOZXQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiKTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gIF9iYXNlTG9nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmFzZUxvZyk7XG4gIF90ZXJtTG9nTWl4aW5zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVybUxvZ01peGlucyk7XG4gIF90ZXJtTG9nTWl4aW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Rlcm1Mb2dNaXhpbnMyKTtcblxuICBjbGFzcyBUZXJtTG9nIGV4dGVuZHMgX2NhdXNhbE5ldC5QbGF0Zm9ybS5taXhXaXRoKF9iYXNlTG9nLmRlZmF1bHQsIHtcbiAgICAnbm9kZSc6IFtfdGVybUxvZ01peGlucy5kZWZhdWx0XSxcbiAgICAnd2ViJzogW190ZXJtTG9nTWl4aW5zMi5kZWZhdWx0XVxuICB9KSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgIH1cblxuICB9XG5cbiAgY29uc3QgTG9nZ2VyID0gbmV3IFRlcm1Mb2coKTtcbiAgdmFyIF9kZWZhdWx0ID0gTG9nZ2VyO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2cubWl4aW5zLm5vZGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtleHBvcnRzXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gIH0gZWxzZSB7IHZhciBtb2Q7IH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChfZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbiAgY29uc3QgTG9nTm9kZU1peGlucyA9IExvZ0NsYXNzID0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3Mge1xuICAgIGNvbm5lY3QoY2hhbm5lbCkgey8vbm90aGluZ1xuICAgIH1cblxuICAgIGxvZyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2UpIHsvL1RPRE86IGltcGxlbWVudCBwcm9ncmVzcyBzaG93XG4gICAgfVxuXG4gICAgZGVidWcobWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgfTtcblxuICB2YXIgX2RlZmF1bHQgPSBMb2dOb2RlTWl4aW5zO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZy5taXhpbnMud2ViLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJldHR5SnNvbiAqLyBcIi4vc3JjL3ByZXR0eUpzb24uanNcIildLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzLCBfcHJldHR5SnNvbikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgX3ByZXR0eUpzb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmV0dHlKc29uKTtcblxuICBjb25zdCBXZWJOb2RlTWl4aW5zID0gTG9nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzcyB7XG4gICAgY29ubmVjdChkb2N1bWVudEVsID0gbnVsbCkge1xuICAgICAgZG9jdW1lbnRFbCA9IGRvY3VtZW50RWwgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gXCJsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XCI7XG4gICAgICBkb2N1bWVudEVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgdGhpcy5mcmFtZUVsID0gZG9jdW1lbnRFbDtcbiAgICAgIHRoaXMubG9nZ2VyRWwgPSBkb2N1bWVudEVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIilbMF07XG4gICAgfVxuXG4gICAgc2Nyb2xsQm90dG9tKGVsZW1lbnQgPSBudWxsKSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLmZyYW1lRWw7XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2UpIHtcbiAgICAgIC8vIGxldCBub2RlID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpOm50aC1sYXN0LW9mLXR5cGUoMSlcIik7XG4gICAgICBsZXQgTElOb2RlcyA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKTtcbiAgICAgIGxldCBub2RlID0gTElOb2Rlc1tMSU5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoIW5vZGUgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2dnZXItcHJvZ3Jlc3NcIikpIHtcbiAgICAgICAgLy9jcmVhdGUgbmV3IGVsXG4gICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImxvZ2dlci1wcm9ncmVzc1wiKTtcbiAgICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGpzb25Ob2RlID0gX3ByZXR0eUpzb24uZGVmYXVsdC5KU09ORGlzcGxheShwcm9jZXNzTWVzc2FnZSk7XG5cbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgIH1cblxuICAgIGxvZyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmxvZ2dlckVsIHx8ICF0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgfVxuXG4gICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9ICdib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTsnO1xuXG4gICAgICBsZXQganNvbk5vZGUgPSBfcHJldHR5SnNvbi5kZWZhdWx0LkpTT05EaXNwbGF5KG1lc3NhZ2UpO1xuXG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSAvL25vIHNob3cgb24gd2ViIHNjcmVlbjsgICAgICAgIFxuXG5cbiAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxuXG4gIH07XG5cbiAgdmFyIF9kZWZhdWx0ID0gV2ViTm9kZU1peGlucztcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xufSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyAwOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBtdWx0aSAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3JjL2luZGV4LmpzICovXCIuL3NyYy9pbmRleC5qc1wiKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXztcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk5M1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdlFHSmhZbVZzTDNKMWJuUnBiV1V2YUdWc2NHVnljeTlwYm5SbGNtOXdVbVZ4ZFdseVpVUmxabUYxYkhRdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5c2IyY3ZMaTl6Y21NdlltRnpaVXh2Wnk1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OHVMM055WXk5c2IyZG5aWEl1YldsNGFXNXpMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiRzluTHk0dmMzSmpMM0J5WlhSMGVVcHpiMjR1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdkxpOXpjbU12ZEdWeWJVeHZaeTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk4dUwzTnlZeTkwWlhKdFRHOW5MbTFwZUdsdWN5NXViMlJsTG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2Ykc5bkx5NHZjM0pqTDNSbGNtMU1iMmN1YldsNGFXNXpMbmRsWWk1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OWxlSFJsY201aGJDQmNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaUpkTENKdVlXMWxjeUk2V3lKQ1lYTmxURzluSWl3aVkyOXVjM1J5ZFdOMGIzSWlMQ0pCWTJObGNIUmxaRXhsZG1Wc2N5SXNJbVJsWW5Wbklpd2liRzluSWl3aWQyRnlibWx1WnlJc0ltVnljbTl5SWl3aWNrRmpZMlZ3ZEdWa1RHVjJaV3h6SWl3aWJHVjJaV3dpTENKTVpYWmxiQ0lzSW5WdVpHVm1hVzVsWkNJc0lrVnljbTl5SWl3aVQySnFaV04wSWl3aWEyVjVjeUlzSWt4dloyZGxjazFwZUdsdWN5SXNJa0poYzJWa1EyeGhjM01pTENKaGNtZHpJaXdpYkc5bloyVnlJaXdpWTI5dWMyOXNaU0lzSWt4dloyZGxjaUlzSWtwemIyNVdhV1YzSWl3aVNsTlBUa1JwYzNCc1lYa2lMQ0pxYzI5dUlpd2liM0JsYmt4bGRtVnNjMEZ5WnlJc0luTjBlV3hsVDNCMGFXOXVjMEZ5WnlJc0lrUkZSa0ZWVEZSZlUxUlpURVZmVDFCVVNVOU9VeUlzSW5KdmIzUWlMQ0owWVdjaUxDSnpkSGxzWlNJc0luUnBkR3hsUTI5dWRHRnBibVZ5SWl3aWRHbDBiR1VpTENKMGFYUnNaVlJsZUhRaUxDSnZjR1Z1UW5WMGRHOXVJaXdpWTI5dWRHVnVkSE5EYjI1MFlXbHVaWElpTENKclpYbFdZV3gxWlZCaGFYSWlMQ0pyWlhraUxDSnplVzFpYjJ4V1lXeDFaU0lzSW5OMGNtbHVaMVpoYkhWbElpd2liblZ0WW1WeVZtRnNkV1VpTENKaWIyOXNaV0Z1Vm1Gc2RXVWlMQ0p1ZFd4c1ZtRnNkV1VpTENKdmNHVnVUR1YyWld4eklpd2lhWE5PWVU0aUxDSndZWEp6WlVsdWRDSXNJa2x1Wm1sdWFYUjVJaXdpYzNSNWJHVlBjSFJwYjI1eklpd2liV1Z5WjJWVGRIbHNaVTl3ZEdsdmJuTWlMQ0poYzNOcFoyNGlMQ0owWVhKblpYUWlMQ0pVZVhCbFJYSnliM0lpTENKMGJ5SXNJbWx1WkdWNElpd2lZWEpuZFcxbGJuUnpJaXdpYkdWdVozUm9JaXdpYm1WNGRGTnZkWEpqWlNJc0ltNWxlSFJMWlhraUxDSndjbTkwYjNSNWNHVWlMQ0pvWVhOUGQyNVFjbTl3WlhKMGVTSXNJbU5oYkd3aUxDSnlaVzVrWlhJaUxDSmxiR1Z0Wlc1MElpd2laRzlqZFcxbGJuUWlMQ0pqY21WaGRHVkZiR1Z0Wlc1MElpd2lZM056VkdWNGRDSXNJblp2YVdSRmJHVnRaVzUwSWl3aVoyVjBWbUZzZFdVaUxDSmhjSEJsYm1SRGFHbHNaQ0lzSWtSaGRHVWlMQ0prWVhSbFJXeGxiV1Z1ZENJc0luUnZTVk5QVTNSeWFXNW5JaXdpYm05dVJYaHdZVzVrWVdKc1pVVnNaVzFsYm5RaUxDSkJjbkpoZVNJc0ltbHpRWEp5WVhraUxDSjBhR2x6VEdWMlpXeEpjME5zYjNObFpDSXNJbWRsZEZScGRHeGxJaXdpWTI5dWRtVnlkRXB6YjI1VWIwVnNaVzFsYm5Seklpd2libVY0ZEV4bGRtVnNTWE5EYkc5elpXUWlMQ0pqYjI1MFlXbHVaWElpTENKblpYUkRiMjUwWlc1MGMwTnZiblJoYVc1bGNpSXNJbWRsZEZOMFlXNWtZWEprVUdGcGNpSXNJbWRsZEU5M2JsQnliM0JsY25SNVUzbHRZbTlzY3lJc0ltWnZja1ZoWTJnaUxDSnplVzFpYjJ3aUxDSjBiMU4wY21sdVp5SXNJbTl3ZEdsdmJtRnNTMlY1SWl3aWJHVjJaV3hKYzBOc2IzTmxaQ0lzSW1OMWNuSmxiblJzZVVOc2IzTmxaQ0lzSW1OdmJuUmhhVzVsY2tWc1pXMWxiblFpTENKelpYUkJkSFJ5YVdKMWRHVWlMQ0owWlhoMFJXeGxiV1Z1ZENJc0luUnBkR3hsUld4bGJXVnVkQ0lzSW1kbGRFOXdaVzVDZFhSMGIyNGlMQ0puWlhSTFpYa2lMQ0pqY21WaGRHVlVaWGgwVG05a1pTSXNJbTl1WTJ4cFkyc2lMQ0ptYVhKemRFTm9hV3hrSWl3aWIySnFaV04wUTI5dWRHVnVkSE1pTENKd1lYSmxiblJPYjJSbElpd2libVY0ZEZOcFlteHBibWNpTENKa2FYTndiR0Y1SWl3aWRISmhibk5tYjNKdElpd2lZblYwZEc5dVJXeGxiV1Z1ZENJc0ltbHpRMnh2YzJWa0lpd2lkbUZzZFdVaUxDSndZV2x5Uld4bGJXVnVkQ0lzSW01aGJXVWlMQ0pyWlhsRmJHVnRaVzUwSWl3aWRtRnNkV1ZGYkdWdFpXNTBJaXdpYm5Wc2JGUjVjR1VpTENKa1pXWmhkV3gwY3lJc0ltOTJaWEp5YVdSbGN5SXNJbTFsY21kbFpDSXNJbFJsY20xTWIyY2lMQ0pRYkdGMFptOXliU0lzSW0xcGVGZHBkR2dpTENKTWIyZE9iMlJsVFdsNGFXNXpJaXdpVjJWaVRtOWtaVTFwZUdsdWN5SXNJa3h2WjBOc1lYTnpJaXdpWTI5dWJtVmpkQ0lzSW1Ob1lXNXVaV3dpTENKdFpYTnpZV2RsSWl3aWNISnZaM0psYzNNaUxDSndjbTlqWlhOelRXVnpjMkZuWlNJc0ltUnZZM1Z0Wlc1MFJXd2lMQ0ppYjJSNUlpd2libTlrWlNJc0ltWnlZVzFsUld3aUxDSnNiMmRuWlhKRmJDSXNJbWRsZEVWc1pXMWxiblJ6UW5sVVlXZE9ZVzFsSWl3aWMyTnliMnhzUW05MGRHOXRJaXdpYzJOeWIyeHNWRzl3SWl3aWMyTnliMnhzU0dWcFoyaDBJaXdpWTJ4cFpXNTBTR1ZwWjJoMElpd2lURWxPYjJSbGN5SXNJbU5zWVhOelRHbHpkQ0lzSW1OdmJuUmhhVzV6SWl3aVlXUmtJaXdpYW5OdmJrNXZaR1VpTENKa1lYUmxJaXdpYVc1dVpYSklWRTFNSWwwc0ltMWhjSEJwYm1keklqb2lRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRc1R6dEJRMVpCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMFJCUVRCRExHZERRVUZuUXp0QlFVTXhSVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RGUVVGM1JDeHJRa0ZCYTBJN1FVRkRNVVU3UVVGRFFTeDVSRUZCYVVRc1kwRkJZenRCUVVNdlJEczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVUkJRWGxETEdsRFFVRnBRenRCUVVNeFJTeDNTRUZCWjBnc2JVSkJRVzFDTEVWQlFVVTdRVUZEY2trN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4dFEwRkJNa0lzTUVKQlFUQkNMRVZCUVVVN1FVRkRka1FzZVVOQlFXbERMR1ZCUVdVN1FVRkRhRVE3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc09FUkJRWE5FTEN0RVFVRXJSRHM3UVVGRmNrZzdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdPenM3T3pzN096czdPMEZEYkVaQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2QwTTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRUbVVzVVVGQlRVRXNUMEZCVGl4RFFVRmhPMEZCUTNoQ1F5eGxRVUZYTEVkQlFVVTdRVUZEVkN4WFFVRkxReXhqUVVGTUxFZEJRWE5DTzBGQlFVTkRMR0ZCUVVzc1JVRkJSU3hEUVVGU08wRkJRVmRETEZkQlFVY3NSVUZCUXl4RFFVRm1PMEZCUVd0Q1F5eGxRVUZQTEVWQlFVTXNRMEZCTVVJN1FVRkJOa0pETEdGQlFVc3NSVUZCUlR0QlFVRndReXhQUVVGMFFqdEJRVU5CTEZkQlFVdERMR1ZCUVV3c1IwRkJkVUk3UVVGQlF5eFhRVUZGTEU5QlFVZzdRVUZCV1N4WFFVRkhMRXRCUVdZN1FVRkJjMElzVjBGQlJ5eFRRVUY2UWp0QlFVRnZReXhYUVVGSE8wRkJRWFpETEU5QlFYWkNPMEZCUTBFc1YwRkJTME1zUzBGQlRDeEhRVUZoTEV0QlFVdE9MR05CUVV3c1EwRkJiMElzVDBGQmNFSXNRMEZCWWp0QlFVTklPenRCUVVORUxGRkJRVWxQTEV0QlFVb3NRMEZCVlVRc1MwRkJWaXhGUVVGblFqdEJRVU5hTEZWQlFVY3NTMEZCUzA0c1kwRkJUQ3hEUVVGdlFrMHNTMEZCY0VJc1RVRkJOa0pGTEZOQlFXaERMRVZCUVRCRE8wRkJRM1JETEdGQlFVdEdMRXRCUVV3c1IwRkJZU3hMUVVGTFRpeGpRVUZNTEVOQlFXOUNUU3hMUVVGd1FpeERRVUZpTzBGQlEwZ3NUMEZHUkN4TlFVZEpPMEZCUTBFc1kwRkJUVWNzUzBGQlN5eERRVUZGTEVkQlFVVklMRXRCUVUwc2JVSkJRV3RDU1N4TlFVRk5MRU5CUVVORExFbEJRVkFzUTBGQldTeExRVUZMV0N4alFVRnFRaXhEUVVGcFF5eEZRVUUzUkN4RFFVRllPMEZCUTBnN1FVRkRTanM3UVVGRFJDeFJRVUZKVHl4TFFVRktMRWRCUVZjN1FVRkRVQ3hoUVVGUExFdEJRVXRHTEdWQlFVd3NRMEZCY1VJc1MwRkJTME1zUzBGQk1VSXNRMEZCVUR0QlFVTklPenRCUVdoQ2RVSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVOQk5VSXNVVUZCVFUwc1dVRkJXU3hIUVVGSlF5eFZRVUZFTEVsQlFXVXNZMEZCWTBFc1ZVRkJaQ3hEUVVGM1FqdEJRVU40UkdRc1pVRkJWeXhEUVVGRExFZEJRVWRsTEVsQlFVb3NSVUZCVXp0QlFVTm9RaXhaUVVGTkxFZEJRVWRCTEVsQlFWUTdRVUZEUVN4WFFVRkxReXhOUVVGTUxFZEJRV05ETEU5QlFXUTdRVUZEU0RzN1FVRkRSQ3hSUVVGSlF5eE5RVUZLTEVOQlFWZEdMRTFCUVZnc1JVRkJhMEk3UVVGRFpDeFhRVUZMUVN4TlFVRk1MRWRCUVdOQkxFMUJRV1E3UVVGRFNEczdRVUZGUkN4UlFVRkpSU3hOUVVGS0xFZEJRVms3UVVGRFVpeGhRVUZQTEV0QlFVdEdMRTFCUVZvN1FVRkRTRHM3UVVGWWRVUXNSMEZCTlVRN08ybENRV05sU0N4Wk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRaR1k3UVVGRFFUdEJRVU5sTEZGQlFVMU5MRkZCUVU0c1EwRkJZenRCUVVONlFtNUNMR1ZCUVZjc1IwRkJSU3hEUVVOYU96dEJRVU5FTEZkQlFVOXZRaXhYUVVGUUxFTkJRVzFDUXl4SlFVRnVRaXhGUVVGNVFrTXNZVUZCZWtJc1JVRkJkME5ETEdWQlFYaERMRVZCUVhsRU8wRkJRM0pFTEZWQlFVbERMSEZDUVVGeFFpeEhRVUZITzBGQlF6RkNReXhaUVVGSkxFVkJRVVU3UVVGQlJVTXNZVUZCUnl4RlFVRkZMRXRCUVZBN1FVRkJZME1zWlVGQlN5eEZRVUZGTzBGQlFYSkNMRk5CUkc5Q08wRkJSVEZDUXl4elFrRkJZeXhGUVVGRk8wRkJRVVZHTEdGQlFVY3NSVUZCUlN4TFFVRlFPMEZCUVdORExHVkJRVXNzUlVGQlJUdEJRVUZ5UWl4VFFVWlZPMEZCUnpGQ1JTeGhRVUZMTEVWQlFVVTdRVUZCUlVnc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ0xGTkJTRzFDTzBGQlNURkNSeXhwUWtGQlV5eEZRVUZGTzBGQlFVVktMR0ZCUVVjc1JVRkJSU3hOUVVGUU8wRkJRV1ZETEdWQlFVc3NSVUZCUlR0QlFVRjBRaXhUUVVwbE8wRkJTekZDU1N4clFrRkJWU3hGUVVGRk8wRkJRMVpNTEdGQlFVY3NSVUZCUlN4TlFVUkxPMEZCUlZaRExHVkJRVXNzUlVGQlJTeDNSa0ZEUVR0QlFVaEhMRk5CVEdNN1FVRlZNVUpMTEhsQ1FVRnBRaXhGUVVGRk8wRkJRVVZPTEdGQlFVY3NSVUZCUlN4TFFVRlFPMEZCUVdORExHVkJRVXNzUlVGQlJUdEJRVUZ5UWl4VFFWWlBPMEZCVnpGQ1RTeHZRa0ZCV1N4RlFVRkZPMEZCUVVWUUxHRkJRVWNzUlVGQlJTeE5RVUZRTzBGQlFXVkRMR1ZCUVVzc1JVRkJSVHRCUVVGMFFpeFRRVmhaTzBGQldURkNUeXhYUVVGSExFVkJRVVU3UVVGQlJWSXNZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNMRk5CV25GQ08wRkJZVEZDVVN4dFFrRkJWeXhGUVVGRk8wRkJRVVZVTEdGQlFVY3NSVUZCUlN4TlFVRlFPMEZCUVdWRExHVkJRVXNzUlVGQlJUdEJRVUYwUWl4VFFXSmhPMEZCWXpGQ1V5eHRRa0ZCVnl4RlFVRkZPMEZCUVVWV0xHRkJRVWNzUlVGQlJTeE5RVUZRTzBGQlFXVkRMR1ZCUVVzc1JVRkJSVHRCUVVGMFFpeFRRV1JoTzBGQlpURkNWU3h0UWtGQlZ5eEZRVUZGTzBGQlFVVllMR0ZCUVVjc1JVRkJSU3hOUVVGUU8wRkJRV1ZETEdWQlFVc3NSVUZCUlR0QlFVRjBRaXhUUVdaaE8wRkJaMEl4UWxjc2IwSkJRVmtzUlVGQlJUdEJRVUZGV2l4aFFVRkhMRVZCUVVVc1RVRkJVRHRCUVVGbFF5eGxRVUZMTEVWQlFVVTdRVUZCZEVJc1UwRm9RbGs3UVVGcFFqRkNXU3hwUWtGQlV5eEZRVUZGTzBGQlFVVmlMR0ZCUVVjc1JVRkJSU3hOUVVGUU8wRkJRV1ZETEdWQlFVc3NSVUZCUlR0QlFVRjBRanRCUVdwQ1pTeFBRVUUxUWp0QlFXMUNRU3hWUVVGSllTeFZRVUZWTEVkQlFVZERMRXRCUVVzc1EwRkJRME1zVVVGQlVTeERRVUZEY0VJc1lVRkJSQ3hEUVVGVUxFTkJRVXdzUjBGQmFVTnhRaXhSUVVGcVF5eEhRVUUwUTBRc1VVRkJVU3hEUVVGRGNFSXNZVUZCUkN4RFFVRnlSVHRCUVVOQkxGVkJRVWx6UWl4WlFVRlpMRWRCUVVjc1QwRkJUM0pDTEdWQlFWQXNTMEZCTWtJc1VVRkJNMElzUjBGRFJYTkNMR2xDUVVGcFFpeERRVUZEY2tJc2NVSkJRVVFzUlVGQmQwSkVMR1ZCUVhoQ0xFTkJSRzVDTEVkQlJVVkRMSEZDUVVaeVFqczdRVUZKUVN4VlFVRkpMRTlCUVU5aUxFMUJRVTBzUTBGQlEyMURMRTFCUVdRc1NVRkJkMElzVlVGQk5VSXNSVUZCZDBNN1FVRkRkRU51UXl4alFVRk5MRU5CUVVOdFF5eE5RVUZRTEVkQlFXZENMRlZCUVZORExFMUJRVlFzUlVGQmFVSTdRVUZETDBJc1kwRkJTVUVzVFVGQlRTeEpRVUZKTEVsQlFXUXNSVUZCYjBJN1FVRkRiRUlzYTBKQlFVMHNTVUZCU1VNc1UwRkJTaXhEUVVGakxEUkRRVUZrTEVOQlFVNDdRVUZEUkRzN1FVRkZSQ3hqUVVGSlF5eEZRVUZGTEVkQlFVZDBReXhOUVVGTkxFTkJRVU52UXl4TlFVRkVMRU5CUVdZN08wRkJSVUVzWlVGQlN5eEpRVUZKUnl4TFFVRkxMRWRCUVVjc1EwRkJha0lzUlVGQmIwSkJMRXRCUVVzc1IwRkJSME1zVTBGQlV5eERRVUZEUXl4TlFVRjBReXhGUVVFNFEwWXNTMEZCU3l4RlFVRnVSQ3hGUVVGMVJEdEJRVU55UkN4blFrRkJTVWNzVlVGQlZTeEhRVUZIUml4VFFVRlRMRU5CUVVORUxFdEJRVVFzUTBGQk1VSTdPMEZCUlVFc1owSkJRVWxITEZWQlFWVXNTVUZCU1N4SlFVRnNRaXhGUVVGM1FqdEJRVU4wUWl4dFFrRkJTeXhKUVVGSlF5eFBRVUZVTEVsQlFXOUNSQ3hWUVVGd1FpeEZRVUZuUXp0QlFVTTVRaXh2UWtGQlNURkRMRTFCUVUwc1EwRkJRelJETEZOQlFWQXNRMEZCYVVKRExHTkJRV3BDTEVOQlFXZERReXhKUVVGb1F5eERRVUZ4UTBvc1ZVRkJja01zUlVGQmFVUkRMRTlCUVdwRUxFTkJRVW9zUlVGQkswUTdRVUZETjBSTUxHOUNRVUZGTEVOQlFVTkxMRTlCUVVRc1EwRkJSaXhIUVVGalJDeFZRVUZWTEVOQlFVTkRMRTlCUVVRc1EwRkJlRUk3UVVGRFJEdEJRVU5HTzBGQlEwWTdRVUZEUmpzN1FVRkRSQ3hwUWtGQlQwd3NSVUZCVUR0QlFVTkVMRk5CYmtKRU8wRkJiMEpFT3p0QlFVVkVMR1ZCUVZOVExFMUJRVlFzUjBGQmEwSTdRVUZEYUVJc1dVRkJTVU1zVDBGQlR5eEhRVUZIUXl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU51UWl4SlFVRmlMRU5CUVd0Q1F5eEhRVUY2UXl4RFFVRmtPMEZCUTBGcFF5eGxRVUZQTEVOQlFVTm9ReXhMUVVGU0xFTkJRV050UXl4UFFVRmtMRWRCUVhkQ2JFSXNXVUZCV1N4RFFVRkRia0lzU1VGQllpeERRVUZyUWtVc1MwRkJNVU03TzBGQlJVRXNXVUZCU1U0c1NVRkJTU3hMUVVGTExFbEJRVlFzU1VGQmFVSkJMRWxCUVVrc1MwRkJTMW9zVTBGQk9VSXNSVUZCZVVNN1FVRkRka01zWTBGQlNYTkVMRmRCUVZjc1IwRkJSME1zVVVGQlVTeERRVUZETEVsQlFVUXNRMEZCTVVJN1FVRkRRVXdzYVVKQlFVOHNRMEZCUTAwc1YwRkJVaXhEUVVGdlFrWXNWMEZCY0VJN1FVRkRSQ3hUUVVoRUxFMUJSMDhzU1VGQlNURkRMRWxCUVVrc1dVRkJXVFpETEVsQlFYQkNMRVZCUVRCQ08wRkJReTlDTEdOQlFVbERMRmRCUVZjc1IwRkJSMGdzVVVGQlVTeERRVUZETTBNc1NVRkJTU3hEUVVGREswTXNWMEZCVEN4RlFVRkVMRU5CUVRGQ08wRkJRMEZVTEdsQ1FVRlBMRU5CUVVOTkxGZEJRVklzUTBGQmIwSkZMRmRCUVhCQ08wRkJRMFFzVTBGSVRTeE5RVWRCTEVsQlFVa3NUMEZCVHpsRExFbEJRVkFzUzBGQlowSXNVVUZCY0VJc1JVRkJPRUk3UVVGRGJrTXNZMEZCU1dkRUxHOUNRVUZ2UWl4SFFVRkhUQ3hSUVVGUkxFTkJRVU16UXl4SlFVRkVMRU5CUVc1RE8wRkJRMEZ6UXl4cFFrRkJUeXhEUVVGRFRTeFhRVUZTTEVOQlFXOUNTU3h2UWtGQmNFSTdRVUZEUkN4VFFVaE5MRTFCUjBFN1FVRkRUQ3hqUVVGSmVFTXNTMEZCU3l4SFFVRkhlVU1zUzBGQlN5eERRVUZEUXl4UFFVRk9MRU5CUVdOc1JDeEpRVUZrTEVsQlFYTkNMRmRCUVZkQkxFbEJRVWtzUTBGQlF5dENMRTFCUVdoQ0xFZEJRWGxDTEVkQlFTOURMRWRCUVhGRUxGRkJRV3BGTzBGQlEwRXNZMEZCU1c5Q0xHbENRVUZwUWl4SFFVRkhhRU1zVlVGQlZTeEhRVUZITEVOQlFYSkRPMEZCUTBGdFFpeHBRa0ZCVHl4RFFVRkRUU3hYUVVGU0xFTkJRVzlDVVN4UlFVRlJMRU5CUVVNMVF5eExRVUZFTEVWQlFWRXNTVUZCVWl4RlFVRmpNa01zYVVKQlFXUXNRMEZCTlVJN1FVRkRRV0lzYVVKQlFVOHNRMEZCUTAwc1YwRkJVaXhEUVVGdlFsTXNjVUpCUVhGQ0xFTkJRVU55UkN4SlFVRkVMRVZCUVU4c1EwRkJVQ3hEUVVGNlF6dEJRVU5FT3p0QlFVVkVMR1ZCUVU5elF5eFBRVUZRTzBGQlEwUTdPMEZCUlVRc1pVRkJVMlVzY1VKQlFWUXNRMEZCSzBKeVJDeEpRVUV2UWl4RlFVRnhRelpDTEV0QlFYSkRMRVZCUVRSRE8wRkJRekZETEZsQlFVbHpRaXhwUWtGQmFVSXNSMEZCUjNSQ0xFdEJRVXNzUjBGQlIxWXNWVUZCYUVNN1FVRkRRU3haUVVGSmJVTXNhVUpCUVdsQ0xFZEJRVWQ2UWl4TFFVRkxMRWRCUVVjc1EwRkJVaXhIUVVGWlZpeFZRVUZ3UXp0QlFVTkJMRmxCUVVsdlF5eFRRVUZUTEVkQlFVZERMRzlDUVVGdlFpeERRVUZEVEN4cFFrRkJSQ3hEUVVGd1F6czdRVUZEUVN4aFFVRkxMRWxCUVVsMFF5eEhRVUZVTEVsQlFXZENZaXhKUVVGb1FpeEZRVUZ6UWp0QlFVTndRaXhqUVVGSmFVUXNTMEZCU3l4RFFVRkRReXhQUVVGT0xFTkJRV05zUkN4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQmJFSXNRMEZCU2l4RlFVRTRRanRCUVVNMVFqQkRMSEZDUVVGVExFTkJRVU5ZTEZkQlFWWXNRMEZCYzBKUkxGRkJRVkVzUTBGQlF5eFhRVUZYY0VRc1NVRkJTU3hEUVVGRFlTeEhRVUZFTEVOQlFVb3NRMEZCVld0Q0xFMUJRWEpDTEVkQlFUaENMRWRCUVM5Q0xFVkJRVzlEYkVJc1IwRkJjRU1zUlVGQmVVTjVReXhwUWtGQmVrTXNRMEZCT1VJN1FVRkRRVU1zY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFsTXNjVUpCUVhGQ0xFTkJRVU55UkN4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlRDeEZRVUZaWjBJc1MwRkJTeXhIUVVGSExFTkJRWEJDTEVOQlFUTkRPMEZCUTBRc1YwRklSQ3hOUVVkUExFbEJRVWszUWl4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlNpeExRVUZqTEVsQlFXUXNTVUZCYzBKaUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRktMRXRCUVdONlFpeFRRVUY0UXl4RlFVRnRSRHRCUVVONFJHMUZMSEZDUVVGVExFTkJRVU5ZTEZkQlFWWXNRMEZCYzBKaExHVkJRV1VzUTBGQlF6VkRMRWRCUVVRc1JVRkJUU3hKUVVGT0xFTkJRWEpETzBGQlEwUXNWMEZHVFN4TlFVVkJMRWxCUVVsaUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRktMRmxCUVhGQ1owTXNTVUZCZWtJc1JVRkJLMEk3UVVGRGNFTlZMSEZDUVVGVExFTkJRVU5ZTEZkQlFWWXNRMEZCYzBKaExHVkJRV1VzUTBGQlF6VkRMRWRCUVVRc1JVRkJUV0lzU1VGQlNTeERRVUZEWVN4SFFVRkVMRU5CUVVvc1EwRkJWV3RETEZkQlFWWXNSVUZCVGl4RFFVRnlRenRCUVVORUxGZEJSazBzVFVGRlFTeEpRVUZKTEU5QlFVOHZReXhKUVVGSkxFTkJRVU5oTEVkQlFVUXNRMEZCV0N4TFFVRnhRaXhSUVVGNlFpeEZRVUZ0UXp0QlFVTjRRekJETEhGQ1FVRlRMRU5CUVVOWUxGZEJRVllzUTBGQmMwSlJMRkZCUVZFc1EwRkJReXhSUVVGRUxFVkJRVmQyUXl4SFFVRllMRVZCUVdkQ2VVTXNhVUpCUVdoQ0xFTkJRVGxDTzBGQlEwRkRMSEZDUVVGVExFTkJRVU5ZTEZkQlFWWXNRMEZCYzBKVExIRkNRVUZ4UWl4RFFVRkRja1FzU1VGQlNTeERRVUZEWVN4SFFVRkVMRU5CUVV3c1JVRkJXV2RDTEV0QlFVc3NSMEZCUnl4RFFVRndRaXhEUVVFelF6dEJRVU5FTEZkQlNFMHNUVUZIUVR0QlFVTk1NRUlzY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkROVU1zUjBGQlJDeEZRVUZOWWl4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlZpeERRVUZ5UXp0QlFVTkVPMEZCUTBZN08wRkJRMFFzV1VGQlNTeFBRVUZQZGtJc1RVRkJUU3hEUVVGRGIwVXNjVUpCUVdRc1MwRkJkME1zVlVGQk5VTXNSVUZCZDBRN1FVRkRkRVJ3UlN4blFrRkJUU3hEUVVGRGIwVXNjVUpCUVZBc1EwRkJOa0l4UkN4SlFVRTNRaXhGUVVGdFF6SkVMRTlCUVc1RExFTkJRVEpETEZWQlFWTkRMRTFCUVZRc1JVRkJhVUk3UVVGRE1VUk1MSEZDUVVGVExFTkJRVU5ZTEZkQlFWWXNRMEZCYzBKaExHVkJRV1VzUTBGQlEwY3NUVUZCVFN4RFFVRkRReXhSUVVGUUxFVkJRVVFzUlVGQmIwSTNSQ3hKUVVGSkxFTkJRVU0wUkN4TlFVRkVMRU5CUVhoQ0xFTkJRWEpETzBGQlEwUXNWMEZHUkR0QlFVZEVPenRCUVVWRUxHVkJRVTlNTEZOQlFWQTdRVUZEUkRzN1FVRkZSQ3hsUVVGVFNDeFJRVUZVTEVOQlFXdENNME1zVTBGQmJFSXNSVUZCTmtKeFJDeFhRVUUzUWl4RlFVRXdRME1zWVVGQk1VTXNSVUZCZVVRN1FVRkRka1FzV1VGQlNVTXNaVUZCWlN4SFFVRkhSQ3hoUVVGMFFqdEJRVU5CTEZsQlFVbEZMR2RDUVVGblFpeEhRVUZITVVJc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNha0lzV1VGQldTeERRVUZEYUVJc1kwRkJZaXhEUVVFMFFrWXNSMEZCYmtRc1EwRkJka0k3UVVGRFFUUkVMSGRDUVVGblFpeERRVUZETTBRc1MwRkJha0lzUTBGQmRVSnRReXhQUVVGMlFpeEhRVUZwUTJ4Q0xGbEJRVmtzUTBGQlEyaENMR05CUVdJc1EwRkJORUpFTEV0QlFUZEVPMEZCUTBFeVJDeDNRa0ZCWjBJc1EwRkJRME1zV1VGQmFrSXNRMEZCT0VJc1YwRkJPVUlzUlVGQk1rTXNaMEpCUVRORE8wRkJRMEVzV1VGQlNVTXNWMEZCVnl4SFFVRkhOVUlzVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1N4RFFVRkRaQ3hUUVVGaUxFTkJRWFZDU2l4SFFVRTVReXhEUVVGc1FqdEJRVU5CTEZsQlFVa3JSQ3haUVVGWkxFZEJRVWMzUWl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU5tTEV0QlFXSXNRMEZCYlVKSUxFZEJRVEZETEVOQlFXNUNPMEZCUTBFclJDeHZRa0ZCV1N4RFFVRkRPVVFzUzBGQllpeERRVUZ0UW0xRExFOUJRVzVDTEVkQlFUWkNiRUlzV1VGQldTeERRVUZEWml4TFFVRmlMRU5CUVcxQ1JpeExRVUZvUkR0QlFVTkJOa1FzYlVKQlFWY3NRMEZCUXpkRUxFdEJRVm9zUTBGQmEwSnRReXhQUVVGc1FpeEhRVUUwUW14Q0xGbEJRVmtzUTBGQlEyUXNVMEZCWWl4RFFVRjFRa2dzUzBGQmJrUTdRVUZGUVRoRUxHOUNRVUZaTEVOQlFVTjRRaXhYUVVGaUxFTkJRWGxDZVVJc1lVRkJZU3hEUVVGRFRpeGhRVUZFTEVOQlFYUkRPenRCUVVOQkxGbEJRVWxFTEZkQlFVb3NSVUZCYVVJN1FVRkRaa3NzY1VKQlFWY3NRMEZCUTNaQ0xGZEJRVm9zUTBGQmQwSXdRaXhOUVVGTkxFTkJRVU5TTEZkQlFVUXNRMEZCT1VJN1FVRkRSRHM3UVVGRFJFc3NiVUpCUVZjc1EwRkJRM1pDTEZkQlFWb3NRMEZCZDBKTUxGRkJRVkVzUTBGQlEyZERMR05CUVZRc1EwRkJkMEk1UkN4VFFVRjRRaXhEUVVGNFFqdEJRVU5CTWtRc2IwSkJRVmtzUTBGQlEzaENMRmRCUVdJc1EwRkJlVUoxUWl4WFFVRjZRanM3UVVGRlFVTXNiMEpCUVZrc1EwRkJRMGtzVDBGQllpeEhRVUYxUWl4WlFVRlpPMEZCUTJwRExHTkJRVWs1UkN4VlFVRlZMRWRCUVVjd1JDeFpRVUZaTEVOQlFVTkxMRlZCUVRsQ08wRkJRMEVzWTBGQlNVTXNZMEZCWXl4SFFVRkhUaXhaUVVGWkxFTkJRVU5QTEZWQlFXSXNRMEZCZDBKRExGZEJRVGRETzBGQlEwRkdMSGRDUVVGakxFTkJRVU53UlN4TFFVRm1MRU5CUVhGQ2RVVXNUMEZCY2tJc1IwRkJLMEppTEdWQlFXVXNSMEZCUnl4UFFVRklMRWRCUVdFc1RVRkJNMFE3UVVGRFFYUkVMRzlDUVVGVkxFTkJRVU5LTEV0QlFWZ3NRMEZCYVVKM1JTeFRRVUZxUWl4SFFVRTJRbVFzWlVGQlpTeEhRVUZITEdWQlFVZ3NSMEZCY1VJc1kwRkJha1U3UVVGRFFVRXNlVUpCUVdVc1IwRkJSeXhEUVVGRFFTeGxRVUZ1UWp0QlFVTkVMRk5CVGtRN08wRkJVVUZETEhkQ1FVRm5RaXhEUVVGRGNrSXNWMEZCYWtJc1EwRkJOa0ozUWl4WlFVRTNRanRCUVVOQkxHVkJRVTlJTEdkQ1FVRlFPMEZCUTBRN08wRkJSVVFzWlVGQlUwa3NZVUZCVkN4RFFVRjFRazRzWVVGQmRrSXNSVUZCYzBNN1FVRkRjRU1zV1VGQlNXZENMR0ZCUVdFc1IwRkJSM2hETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMklzVlVGQllpeERRVUYzUWt3c1IwRkJMME1zUTBGQmNFSTdRVUZEUVRCRkxIRkNRVUZoTEVOQlFVTjZSU3hMUVVGa0xFTkJRVzlDYlVNc1QwRkJjRUlzUjBGQk9FSnNRaXhaUVVGWkxFTkJRVU5pTEZWQlFXSXNRMEZCZDBKS0xFdEJRWFJFTzBGQlEwRjVSU3h4UWtGQllTeERRVUZEZWtVc1MwRkJaQ3hEUVVGdlFuZEZMRk5CUVhCQ0xFZEJRV2REWml4aFFVRmhMRWRCUVVjc1kwRkJTQ3hIUVVGdlFpeGxRVUZxUlR0QlFVTkJMR1ZCUVU5blFpeGhRVUZRTzBGQlEwUTdPMEZCUlVRc1pVRkJVM1pDTEc5Q1FVRlVMRU5CUVRoQ2QwSXNVVUZCT1VJc1JVRkJkME03UVVGRGRFTXNXVUZCU1dZc1owSkJRV2RDTEVkQlFVY3hRaXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVKcVFpeFpRVUZaTEVOQlFVTmFMR2xDUVVGaUxFTkJRU3RDVGl4SFFVRjBSQ3hEUVVGMlFqdEJRVU5CTkVRc2QwSkJRV2RDTEVOQlFVTkRMRmxCUVdwQ0xFTkJRVGhDTEZkQlFUbENMRVZCUVRKRExHMUNRVUV6UXp0QlFVTkJSQ3gzUWtGQlowSXNRMEZCUXpORUxFdEJRV3BDTEVOQlFYVkNiVU1zVDBGQmRrSXNSMEZCYVVOc1FpeFpRVUZaTEVOQlFVTmFMR2xDUVVGaUxFTkJRU3RDVEN4TFFVRm9SVHRCUVVOQk1rUXNkMEpCUVdkQ0xFTkJRVU16UkN4TFFVRnFRaXhEUVVGMVFuVkZMRTlCUVhaQ0xFZEJRV3REUnl4UlFVRlJMRWRCUVVjc1RVRkJTQ3hIUVVGWkxFOUJRWFJFTzBGQlEwRXNaVUZCVDJZc1owSkJRVkE3UVVGRFJEczdRVUZGUkN4bFFVRlRVaXhsUVVGVUxFTkJRWGxDTlVNc1IwRkJla0lzUlVGQk9FSnZSU3hMUVVFNVFpeEZRVUZ4UXp0QlFVTnVReXhaUVVGSlF5eFhRVUZYTEVkQlFVY3pReXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVKcVFpeFpRVUZaTEVOQlFVTllMRmxCUVdJc1EwRkJNRUpRTEVkQlFXcEVMRU5CUVd4Q08wRkJRMEUyUlN4dFFrRkJWeXhEUVVGRE5VVXNTMEZCV2l4RFFVRnJRbTFETEU5QlFXeENMRWRCUVRSQ2JFSXNXVUZCV1N4RFFVRkRXQ3haUVVGaUxFTkJRVEJDVGl4TFFVRjBSRHRCUVVOQk5FVXNiVUpCUVZjc1EwRkJRM1JETEZkQlFWb3NRMEZCZDBJd1FpeE5RVUZOTEVOQlFVTjZSQ3hIUVVGRUxFTkJRVGxDTzBGQlEwRnhSU3h0UWtGQlZ5eERRVUZEZEVNc1YwRkJXaXhEUVVGM1FrUXNVVUZCVVN4RFFVRkRjME1zUzBGQlJDeERRVUZvUXp0QlFVTkJMR1ZCUVU5RExGZEJRVkE3UVVGRFJEczdRVUZGUkN4bFFVRlRXaXhOUVVGVUxFTkJRV2RDWVN4SlFVRm9RaXhGUVVGelFqdEJRVU53UWl4WlFVRkpReXhWUVVGVkxFZEJRVWMzUXl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU5XTEVkQlFXSXNRMEZCYVVKU0xFZEJRWGhETEVOQlFXcENPMEZCUTBFclJTeHJRa0ZCVlN4RFFVRkRPVVVzUzBGQldDeERRVUZwUW0xRExFOUJRV3BDTEVkQlFUSkNiRUlzV1VGQldTeERRVUZEVml4SFFVRmlMRU5CUVdsQ1VDeExRVUUxUXp0QlFVTkJPRVVzYTBKQlFWVXNRMEZCUTNoRExGZEJRVmdzUTBGQmRVSk1MRkZCUVZFc1EwRkJRMmRETEdOQlFWUXNRMEZCZDBKWkxFbEJRVWtzUjBGQlJ5eEpRVUV2UWl4RFFVRjJRanRCUVVOQkxHVkJRVTlETEZWQlFWQTdRVUZEUkRzN1FVRkZSQ3hsUVVGVGVrTXNVVUZCVkN4RFFVRnJRbk5ETEV0QlFXeENMRVZCUVhsQ08wRkJRM1pDTEZsQlFVbEpMRmxCUVVvN1FVRkRRU3haUVVGSlF5eFJRVUZSTEVkQlFVY3NVVUZCWmpzN1FVRkRRU3huUWtGQlVTeFBRVUZQVEN4TFFVRm1PMEZCUTBVc1pVRkJTeXhSUVVGTU8wRkJRMFZKTEhkQ1FVRlpMRWRCUVVjNVF5eFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUpxUWl4WlFVRlpMRU5CUVVOVUxGZEJRV0lzUTBGQmVVSlVMRWRCUVdoRUxFTkJRV1k3UVVGRFFXZEdMSGRDUVVGWkxFTkJRVU12UlN4TFFVRmlMRU5CUVcxQ2JVTXNUMEZCYmtJc1IwRkJOa0pzUWl4WlFVRlpMRU5CUVVOVUxGZEJRV0lzUTBGQmVVSlNMRXRCUVhSRU8wRkJRMEVyUlN4M1FrRkJXU3hEUVVGRGVrTXNWMEZCWWl4RFFVRjVRa3dzVVVGQlVTeERRVUZEWjBNc1kwRkJWQ3hEUVVGM1FsVXNTMEZCU3l4RFFVRkRjRUlzVVVGQlRpeEZRVUY0UWl4RFFVRjZRanRCUVVOQk96dEJRVU5HTEdWQlFVc3NVVUZCVER0QlFVTkZkMElzZDBKQlFWa3NSMEZCUnpsRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTFJc1YwRkJZaXhEUVVGNVFsWXNSMEZCYUVRc1EwRkJaanRCUVVOQlowWXNkMEpCUVZrc1EwRkJReTlGTEV0QlFXSXNRMEZCYlVKdFF5eFBRVUZ1UWl4SFFVRTJRbXhDTEZsQlFWa3NRMEZCUTFJc1YwRkJZaXhEUVVGNVFsUXNTMEZCZEVRN1FVRkRRU3RGTEhkQ1FVRlpMRU5CUVVONlF5eFhRVUZpTEVOQlFYbENUQ3hSUVVGUkxFTkJRVU5uUXl4alFVRlVMRU5CUVhkQ0xFMUJRVTFWTEV0QlFVNHNSMEZCWXl4SFFVRjBReXhEUVVGNlFqdEJRVU5CT3p0QlFVTkdMR1ZCUVVzc1VVRkJURHRCUVVORlNTeDNRa0ZCV1N4SFFVRkhPVU1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1N4RFFVRkRVQ3hYUVVGaUxFTkJRWGxDV0N4SFFVRm9SQ3hEUVVGbU8wRkJRMEZuUml4M1FrRkJXU3hEUVVGREwwVXNTMEZCWWl4RFFVRnRRbTFETEU5QlFXNUNMRWRCUVRaQ2JFSXNXVUZCV1N4RFFVRkRVQ3hYUVVGaUxFTkJRWGxDVml4TFFVRjBSRHRCUVVOQkswVXNkMEpCUVZrc1EwRkJRM3BETEZkQlFXSXNRMEZCZVVKTUxGRkJRVkVzUTBGQlEyZERMR05CUVZRc1EwRkJkMEpWTEV0QlFYaENMRU5CUVhwQ08wRkJRMEU3TzBGQlEwWXNaVUZCU3l4VFFVRk1PMEZCUTBWSkxIZENRVUZaTEVkQlFVYzVReXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVKcVFpeFpRVUZaTEVOQlFVTk9MRmxCUVdJc1EwRkJNRUphTEVkQlFXcEVMRU5CUVdZN1FVRkRRV2RHTEhkQ1FVRlpMRU5CUVVNdlJTeExRVUZpTEVOQlFXMUNiVU1zVDBGQmJrSXNSMEZCTmtKc1FpeFpRVUZaTEVOQlFVTk9MRmxCUVdJc1EwRkJNRUpZTEV0QlFYWkVPMEZCUTBFclJTeDNRa0ZCV1N4RFFVRkRla01zVjBGQllpeERRVUY1UWt3c1VVRkJVU3hEUVVGRFowTXNZMEZCVkN4RFFVRjNRbFVzUzBGQmVFSXNRMEZCZWtJN1FVRkRRVHM3UVVGRFJpeGxRVUZMU3l4UlFVRk1PMEZCUTBWRUxIZENRVUZaTEVkQlFVYzVReXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVKcVFpeFpRVUZaTEVOQlFVTk1MRk5CUVdJc1EwRkJkVUppTEVkQlFUbERMRU5CUVdZN1FVRkRRV2RHTEhkQ1FVRlpMRU5CUVVNdlJTeExRVUZpTEVOQlFXMUNiVU1zVDBGQmJrSXNSMEZCTmtKc1FpeFpRVUZaTEVOQlFVTk1MRk5CUVdJc1EwRkJkVUphTEV0QlFYQkVPMEZCUTBFclJTeDNRa0ZCV1N4RFFVRkRla01zVjBGQllpeERRVUY1UWt3c1VVRkJVU3hEUVVGRFowTXNZMEZCVkN4RFFVRjNRbFVzUzBGQmVFSXNRMEZCZWtJN1FVRkRRVHRCUVhwQ1NqczdRVUV5UWtFc1pVRkJUMGtzV1VGQlVEdEJRVU5FT3p0QlFVVkVMR1ZCUVZNM1JDeHBRa0ZCVkN4RFFVRXlRaXRFTEZGQlFUTkNMRVZCUVhGRFF5eFRRVUZ5UXl4RlFVRm5SRHRCUVVNNVF5eFpRVUZKUXl4TlFVRk5MRWRCUVVjc1JVRkJZanM3UVVGRFFTeGhRVUZMTEVsQlFVazFSU3hIUVVGVUxFbEJRV2RDTUVVc1VVRkJhRUlzUlVGQk1FSTdRVUZEZUVKRkxHZENRVUZOTEVOQlFVTTFSU3hIUVVGRUxFTkJRVTRzUjBGQlkzWkNMRTFCUVUwc1EwRkJRMjFETEUxQlFWQXNRMEZCWXl4RlFVRmtMRVZCUVd0Q09FUXNVVUZCVVN4RFFVRkRNVVVzUjBGQlJDeERRVUV4UWl4RlFVRnBRekpGTEZOQlFWTXNRMEZCUXpORkxFZEJRVVFzUTBGQk1VTXNRMEZCWkR0QlFVTkVPenRCUVVORUxHVkJRVTgwUlN4TlFVRlFPMEZCUTBRN08wRkJSVVFzWVVGQlQzQkVMRTFCUVUwc1JVRkJZanRCUVVOSU96dEJRVE5OZDBJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVORk4wSXNVVUZCVFhGRUxFOUJRVTRzVTBGQmMwSkRMRzlDUVVGVFF5eFBRVUZVTEVOQlFXbENiRWdzWjBKQlFXcENMRVZCUVRCQ08wRkJRVU1zV1VGQlR5eERRVUZEYlVnc2MwSkJRVVFzUTBGQlVqdEJRVUYzUWl4WFFVRk5MRU5CUVVORExIVkNRVUZFTzBGQlFUbENMRWRCUVRGQ0xFTkJRWFJDTEVOQlFTdEdPMEZCUXpOR2JrZ3NaVUZCVnl4SFFVRkZPMEZCUTFRN1FVRkRTRHM3UVVGSU1FWTdPMEZCU3k5R0xGRkJRVTFyUWl4TlFVRk5MRWRCUVVjc1NVRkJTVFpHTEU5QlFVb3NSVUZCWmp0cFFrRkRaVGRHTEUwN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTldaaXhSUVVGTlowY3NZVUZCWVN4SFFVRkpSU3hSUVVGRUxFbEJRV0VzWTBGQlkwRXNVVUZCWkN4RFFVRnpRanRCUVVOeVJFTXNWMEZCVHl4RFFVRkRReXhQUVVGRUxFVkJRVk1zUTBGRFdqdEJRVU5JT3p0QlFVTkVia2dzVDBGQlJ5eERRVUZEYjBnc1QwRkJSQ3hGUVVGVE8wRkJRMUlzVlVGQlJ5eExRVUZMYUVnc1MwRkJUQ3hKUVVGakxFdEJRVXRPTEdOQlFVd3NRMEZCYjBJc1MwRkJjRUlzUTBGQmFrSXNSVUZCTkVNN1FVRkRlRU1zWlVGQlR5eEpRVUZRTzBGQlEwZzdPMEZCUTBSblFpeGhRVUZQTEVOQlFVTmtMRWRCUVZJc1EwRkJXVzlJTEU5QlFWbzdRVUZEU0RzN1FVRkRSRU1zV1VGQlVTeERRVUZEUXl4alFVRkVMRVZCUVdkQ0xFTkJRM0JDTzBGQlEwZzdPMEZCUTBSMlNDeFRRVUZMTEVOQlFVTnhTQ3hQUVVGRUxFVkJRVk03UVVGRFZpeFZRVUZITEV0QlFVdG9TQ3hMUVVGTUxFbEJRV01zUzBGQlMwNHNZMEZCVEN4RFFVRnZRaXhQUVVGd1FpeERRVUZxUWl4RlFVRTRRenRCUVVNeFF5eGxRVUZQTEVsQlFWQTdRVUZEU0RzN1FVRkRSR2RDTEdGQlFVOHNRMEZCUTJZc1MwRkJVaXhEUVVGamNVZ3NUMEZCWkR0QlFVTklPenRCUVd4Q2IwUXNSMEZCZWtRN08ybENRWEZDWlV3c1lUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTNCQ1ppeFJRVUZOUXl4aFFVRmhMRWRCUVVsRExGRkJRVVFzU1VGQllTeGpRVUZqUVN4UlFVRmtMRU5CUVhOQ08wRkJRM0pFUXl4WFFVRlBMRU5CUVVOTExGVkJRVlVzUjBGQlF5eEpRVUZhTEVWQlFXbENPMEZCUTNCQ1FTeG5Ra0ZCVlN4SFFVRkhRU3hWUVVGVkxFbEJRVVU1UkN4UlFVRlJMRU5CUVVNclJDeEpRVUZzUXp0QlFVTkJMRlZCUVVsRExFbEJRVWtzUjBGQlIyaEZMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUWl4SlFVRjJRaXhEUVVGWU8wRkJRMEVyUkN4VlFVRkpMRU5CUVVOcVJ5eExRVUZNTEVOQlFWZHRReXhQUVVGWUxFZEJRWEZDTEhkQ1FVRnlRanRCUVVOQk5FUXNaMEpCUVZVc1EwRkJRM3BFTEZkQlFWZ3NRMEZCZFVJeVJDeEpRVUYyUWp0QlFVTkJMRmRCUVV0RExFOUJRVXdzUjBGQlpVZ3NWVUZCWmp0QlFVTkJMRmRCUVV0SkxGRkJRVXdzUjBGQlowSktMRlZCUVZVc1EwRkJRMHNzYjBKQlFWZ3NRMEZCWjBNc1NVRkJhRU1zUlVGQmMwTXNRMEZCZEVNc1EwRkJhRUk3UVVGRFNEczdRVUZEUkVNc1owSkJRVmtzUTBGQlEzSkZMRTlCUVU4c1IwRkJReXhKUVVGVUxFVkJRV003UVVGRGRFSkJMR0ZCUVU4c1IwRkJSMEVzVDBGQlR5eEpRVUZKTEV0QlFVdHJSU3hQUVVFeFFqdEJRVU5CYkVVc1lVRkJUeXhEUVVGRGMwVXNVMEZCVWl4SFFVRnZRblJGTEU5QlFVOHNRMEZCUTNWRkxGbEJRVklzUjBGQmRVSjJSU3hQUVVGUExFTkJRVU4zUlN4WlFVRnVSRHRCUVVOSU96dEJRVU5FV0N4WlFVRlJMRU5CUVVORExHTkJRVVFzUlVGQlowSTdRVUZEY0VJN1FVRkRRU3hWUVVGSlZ5eFBRVUZQTEVkQlFVY3NTMEZCUzA0c1VVRkJUQ3hEUVVGalF5eHZRa0ZCWkN4RFFVRnRReXhKUVVGdVF5eERRVUZrTzBGQlEwRXNWVUZCU1Vnc1NVRkJTU3hIUVVGSFVTeFBRVUZQTEVOQlFVTkJMRTlCUVU4c1EwRkJRMmhHTEUxQlFWSXNSMEZCWlN4RFFVRm9RaXhEUVVGc1FqczdRVUZEUVN4VlFVRkhMRU5CUVVOM1JTeEpRVUZFTEVsQlFWTkJMRWxCUVVrc1EwRkJRMU1zVTBGQlRDeERRVUZsUXl4UlFVRm1MRU5CUVhkQ0xHbENRVUY0UWl4RFFVRmFMRVZCUVhWRU8wRkJRMjVFTzBGQlEwRldMRmxCUVVrc1IwRkJSMmhGTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFpeEpRVUYyUWl4RFFVRlFPMEZCUTBFclJDeFpRVUZKTEVOQlFVTlRMRk5CUVV3c1EwRkJaVVVzUjBGQlppeERRVUZ0UWl4cFFrRkJia0k3UVVGRFFTeGhRVUZMVkN4UlFVRk1MRU5CUVdNM1JDeFhRVUZrTEVOQlFUQkNNa1FzU1VGQk1VSTdRVUZEU0RzN1FVRkRSQ3hWUVVGSldTeFJRVUZSTEVkQlFVZHlTQ3h2UWtGQlUwTXNWMEZCVkN4RFFVRnhRbkZITEdOQlFYSkNMRU5CUVdZN08wRkJRMEVzVlVGQlNXZENMRWxCUVVrc1IwRkJSeXhKUVVGSmRrVXNTVUZCU2l4RlFVRllPMEZCUTBFd1JDeFZRVUZKTEVOQlFVTmpMRk5CUVV3c1IwRkJhMElzWjBSQlFTdERSQ3hKUVVGTExFMUJRWFJGTzBGQlEwRmlMRlZCUVVrc1EwRkJRek5FTEZkQlFVd3NRMEZCYVVKMVJTeFJRVUZxUWp0QlFVTkJMRmRCUVV0U0xGbEJRVXc3UVVGRFNEczdRVUZEUkRkSUxFOUJRVWNzUTBGQlEyOUlMRTlCUVVRc1JVRkJVenRCUVVOU0xGVkJRVWNzUzBGQlMyaElMRXRCUVV3c1NVRkJZeXhMUVVGTFRpeGpRVUZNTEVOQlFXOUNMRXRCUVhCQ0xFTkJRV3BDTEVWQlFUUkRPMEZCUTNoRExHVkJRVThzU1VGQlVEdEJRVU5JT3p0QlFVTkVMRlZCUVVjc1EwRkJReXhMUVVGTE5rZ3NVVUZCVGl4SlFVRnJRaXhEUVVGRExFdEJRVXRCTEZGQlFVd3NRMEZCWXpkRUxGZEJRWEJETEVWQlFXZEVPMEZCUXpWRExHRkJRVXR2UkN4UFFVRk1PMEZCUTBnN08wRkJRMFFzVlVGQlNVOHNTVUZCU1N4SFFVRkhhRVVzVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ0xFbEJRWFpDTEVOQlFWZzdRVUZEUVN0RUxGVkJRVWtzUTBGQlEycEhMRXRCUVV3c1EwRkJWMjFETEU5QlFWZ3NSMEZCY1VJc2JVTkJRWEpDT3p0QlFVTkJMRlZCUVVrd1JTeFJRVUZSTEVkQlFVZHlTQ3h2UWtGQlUwTXNWMEZCVkN4RFFVRnhRbTFITEU5QlFYSkNMRU5CUVdZN08wRkJRMEVzVlVGQlNXdENMRWxCUVVrc1IwRkJSeXhKUVVGSmRrVXNTVUZCU2l4RlFVRllPMEZCUTBFd1JDeFZRVUZKTEVOQlFVTmpMRk5CUVV3c1IwRkJhMElzWjBSQlFTdERSQ3hKUVVGTExFMUJRWFJGTzBGQlEwRmlMRlZCUVVrc1EwRkJRek5FTEZkQlFVd3NRMEZCYVVKMVJTeFJRVUZxUWp0QlFVTkJMRmRCUVV0V0xGRkJRVXdzUTBGQll6ZEVMRmRCUVdRc1EwRkJNRUl5UkN4SlFVRXhRanRCUVVOQkxGZEJRVXRKTEZsQlFVdzdRVUZEUVM5SExHRkJRVThzUTBGQlEyUXNSMEZCVWl4RFFVRlpiMGdzVDBGQldqdEJRVU5JT3p0QlFVVkVja2dzVTBGQlN5eERRVUZEY1Vnc1QwRkJSQ3hGUVVGVE8wRkJRMVlzVlVGQlJ5eExRVUZMYUVnc1MwRkJUQ3hKUVVGakxFdEJRVXRPTEdOQlFVd3NRMEZCYjBJc1QwRkJjRUlzUTBGQmFrSXNSVUZCT0VNN1FVRkRNVU1zWlVGQlR5eEpRVUZRTzBGQlEwZ3NUMEZJVXl4RFFVbFdPenM3UVVGRFFXZENMR0ZCUVU4c1EwRkJRMllzUzBGQlVpeERRVUZqY1Vnc1QwRkJaRHRCUVVOSU96dEJRWEpFYjBRc1IwRkJla1E3TzJsQ1FYZEVaVW9zWVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTNwRVppdzRSQ0lzSW1acGJHVWlPaUpBWTJGMWMyRnNUbVYwTDJ4dlp5NTNaV0l1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLSEpsY1hWcGNtVW9YQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0lwS1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pHVm1hVzVsSUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUdSbFptbHVaUzVoYldRcFhHNWNkRngwWkdWbWFXNWxLRnRjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWwwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2lRR05oZFhOaGJFNWxkQzlzYjJkY0lsMGdQU0JtWVdOMGIzSjVLSEpsY1hWcGNtVW9YQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0lwS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSkFZMkYxYzJGc1RtVjBMMnh2WjF3aVhTQTlJR1poWTNSdmNua29jbTl2ZEZ0Y0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lsMHBPMXh1ZlNrb2RHaHBjeXdnWm5WdVkzUnBiMjRvWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlqWVhWellXeGZibVYwWDNWMGFXeHpYMThwSUh0Y2JuSmxkSFZ5YmlBaUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdNQ2s3WEc0aUxDSm1kVzVqZEdsdmJpQmZhVzUwWlhKdmNGSmxjWFZwY21WRVpXWmhkV3gwS0c5aWFpa2dlMXh1SUNCeVpYUjFjbTRnYjJKcUlDWW1JRzlpYWk1ZlgyVnpUVzlrZFd4bElEOGdiMkpxSURvZ2UxeHVJQ0FnSUdSbFptRjFiSFE2SUc5aWFseHVJQ0I5TzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlwYm5SbGNtOXdVbVZ4ZFdseVpVUmxabUYxYkhRN0lpd2laWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUW1GelpVeHZaM3RjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwZTF4dUlDQWdJQ0FnSUNCMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4eklEMGdlMlJsWW5Wbk9pQXdMQ0JzYjJjNk1Td2dkMkZ5Ym1sdVp6b3lMQ0JsY25KdmNqb2dNMzA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVja0ZqWTJWd2RHVmtUR1YyWld4eklEMGdlekE2SjJSbFluVm5KeXdnTVRvZ0oyeHZaeWNzSURJNklDZDNZWEp1YVc1bkp5d2dNem9nSjJWeWNtOXlKMzA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViR1YyWld3Z1BTQjBhR2x6TGtGalkyVndkR1ZrVEdWMlpXeHpXeWRrWldKMVp5ZGRPMXh1SUNBZ0lIMWNiaUFnSUNCelpYUWdUR1YyWld3b2JHVjJaV3dwZTF4dUlDQWdJQ0FnSUNCcFppaDBhR2x6TGtGalkyVndkR1ZrVEdWMlpXeHpXMnhsZG1Wc1hTRTlQWFZ1WkdWbWFXNWxaQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG14bGRtVnNJRDBnZEdocGN5NUJZMk5sY0hSbFpFeGxkbVZzYzF0c1pYWmxiRjA3SUNBZ0lGeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJWN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2loZ0pIdHNaWFpsYkgwZ2JYVnpkQ0JpWlNCdmJtVWdiMllnSkh0UFltcGxZM1F1YTJWNWN5aDBhR2x6TGtGalkyVndkR1ZrVEdWMlpXeHpLWDFnS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0JuWlhRZ1RHVjJaV3dvS1h0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVja0ZqWTJWd2RHVmtUR1YyWld4elczUm9hWE11YkdWMlpXeGRPMXh1SUNBZ0lIMWNibjBpTENKamIyNXpkQ0JNYjJkblpYSk5hWGhwYm5NZ1BTQW9RbUZ6WldSRGJHRnpjeWs5UGlCamJHRnpjeUJsZUhSbGJtUnpJRUpoYzJWa1EyeGhjM043WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvTGk0dVlYSm5jeWw3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQzR1TG1GeVozTXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZaMmRsY2lBOUlHTnZibk52YkdVN1hHNGdJQ0FnZlZ4dUlDQWdJSE5sZENCTWIyZG5aWElvYkc5bloyVnlLWHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMmRuWlhJZ1BTQnNiMmRuWlhJN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHZGxkQ0JNYjJkblpYSW9LWHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJHOW5aMlZ5TzF4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFeHZaMmRsY2sxcGVHbHVjenNpTENJdkx5QnZjbWxuYVc0Z1kyOWtaU0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXNkV041WjJsc1ltVnlkQzlxYzI5dUxXUnBjM0JzWVhrdllteHZZaTl0WVhOMFpYSXZhbk52Ymkxa2FYTndiR0Y1TG1welhHNHZMeUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGNnVEhWamVTQkhhV3hpWlhKMFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJLYzI5dVZtbGxkM3RjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwZTF4dUlDQWdJSDFjYmlBZ0lDQnpkR0YwYVdNZ1NsTlBUa1JwYzNCc1lYa29hbk52Yml3Z2IzQmxia3hsZG1Wc2MwRnlaeXdnYzNSNWJHVlBjSFJwYjI1elFYSm5LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQkVSVVpCVlV4VVgxTlVXVXhGWDA5UVZFbFBUbE1nUFNCN1hHNGdJQ0FnSUNBZ0lDQWdjbTl2ZERvZ2V5QjBZV2M2SUNkd2NtVW5MQ0J6ZEhsc1pUb2dKM0JoWkdScGJtYzZJRFZ3ZURzZ1ptOXVkQzF6YVhwbE9pQXhjbVZ0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pVTnZiblJoYVc1bGNqb2dleUIwWVdjNklDZGthWFluTENCemRIbHNaVG9nSjIxaGNtZHBiaTFpYjNSMGIyMDZJRE53ZURzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnZEdsMGJHVTZJSHNnZEdGbk9pQW5jM0JoYmljc0lITjBlV3hsT2lBblkzVnljMjl5T2lCd2IybHVkR1Z5T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pWUmxlSFE2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5KeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lHOXdaVzVDZFhSMGIyNDZJSHNnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBZV2M2SUNkemNHRnVKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lBblpHbHpjR3hoZVRvZ2FXNXNhVzVsTFdKc2IyTnJPeUJ0WVhKbmFXNDZJREJ3ZUNBM2NIZ2dNSEI0SURKd2VEc2dZbTl5WkdWeUxYUnZjRG9nTlhCNElITnZiR2xrSUhSeVlXNXpjR0Z5Wlc1ME95QW5YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ3NnSjJKdmNtUmxjaTFpYjNSMGIyMDZJRFZ3ZUNCemIyeHBaQ0IwY21GdWMzQmhjbVZ1ZERzZ1ltOXlaR1Z5TFd4bFpuUTZJRFZ3ZUNCemIyeHBaQ0JpYkdGamF6c25MRnh1SUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdWdWRITkRiMjUwWVdsdVpYSTZJSHNnZEdGbk9pQW5aR2wySnl3Z2MzUjViR1U2SUNkd1lXUmthVzVuTFd4bFpuUTZJREU0Y0hnN0p5QjlMRnh1SUNBZ0lDQWdJQ0FnSUd0bGVWWmhiSFZsVUdGcGNqb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNka2FYTndiR0Y1T2lCaWJHOWphenNnYldGeVoybHVMV0p2ZEhSdmJUb2dNbkI0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0JyWlhrNklIc2dkR0ZuT2lBbmMzQmhiaWNzSUhOMGVXeGxPaUFuWTI5c2IzSTZJR1JoY210aWJIVmxPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQnplVzFpYjJ4V1lXeDFaVG9nZXlCMFlXYzZJQ2R6Y0dGdUp5d2djM1I1YkdVNklDZGpiMnh2Y2pvZ1pHRnlhMmR5WldWdU95Y2dmU3hjYmlBZ0lDQWdJQ0FnSUNCemRISnBibWRXWVd4MVpUb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNkamIyeHZjam9nWTNKcGJYTnZianNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdiblZ0WW1WeVZtRnNkV1U2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5ZMjlzYjNJNklHSnNkV1U3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJR0p2YjJ4bFlXNVdZV3gxWlRvZ2V5QjBZV2M2SUNkemNHRnVKeXdnYzNSNWJHVTZJQ2RqYjJ4dmNqb2dZbXgxWlRzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnYm5Wc2JGWmhiSFZsT2lCN0lIUmhaem9nSjNOd1lXNG5MQ0J6ZEhsc1pUb2dKMk52Ykc5eU9pQmliSFZsT3ljZ2ZTeGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHOXdaVzVNWlhabGJITWdQU0JwYzA1aFRpaHdZWEp6WlVsdWRDaHZjR1Z1VEdWMlpXeHpRWEpuS1NrZ1B5QkpibVpwYm1sMGVTQTZJSEJoY25ObFNXNTBLRzl3Wlc1TVpYWmxiSE5CY21jcE8xeHVJQ0FnSUNBZ0lDQjJZWElnYzNSNWJHVlBjSFJwYjI1eklEMGdkSGx3Wlc5bUlITjBlV3hsVDNCMGFXOXVjMEZ5WnlBOVBUMGdKMjlpYW1WamRDY2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0EvSUcxbGNtZGxVM1I1YkdWUGNIUnBiMjV6S0VSRlJrRlZURlJmVTFSWlRFVmZUMUJVU1U5T1V5d2djM1I1YkdWUGNIUnBiMjV6UVhKbktWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdPaUJFUlVaQlZVeFVYMU5VV1V4RlgwOVFWRWxQVGxNN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ1QySnFaV04wTG1GemMybG5iaUFoUFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQWdJQ0FnVDJKcVpXTjBMbUZ6YzJsbmJpQTlJR1oxYm1OMGFXOXVLSFJoY21kbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJoY21kbGRDQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KME5oYm01dmRDQmpiMjUyWlhKMElIVnVaR1ZtYVc1bFpDQnZjaUJ1ZFd4c0lIUnZJRzlpYW1WamRDY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhSdklEMGdUMkpxWldOMEtIUmhjbWRsZENrN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnBibVJsZUNBOUlERTdJR2x1WkdWNElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhVzVrWlhnckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYm1WNGRGTnZkWEpqWlNBOUlHRnlaM1Z0Wlc1MGMxdHBibVJsZUYwN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYaDBVMjkxY21ObElDRTlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnVaWGgwUzJWNUlHbHVJRzVsZUhSVGIzVnlZMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYm1WNGRGTnZkWEpqWlN3Z2JtVjRkRXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc5YmJtVjRkRXRsZVYwZ1BTQnVaWGgwVTI5MWNtTmxXMjVsZUhSTFpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSdk8xeHVJQ0FnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnY21WdVpHVnlLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJsYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11Y205dmRDNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NXliMjkwTG5OMGVXeGxPMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJR2xtSUNocWMyOXVJRDA5UFNCdWRXeHNJSHg4SUdwemIyNGdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIWnZhV1JGYkdWdFpXNTBJRDBnWjJWMFZtRnNkV1VvYm5Wc2JDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tIWnZhV1JGYkdWdFpXNTBLVHRjYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHcHpiMjRnYVc1emRHRnVZMlZ2WmlCRVlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWkdGMFpVVnNaVzFsYm5RZ1BTQm5aWFJXWVd4MVpTaHFjMjl1TG5SdlNWTlBVM1J5YVc1bktDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtZWFJsUld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2FuTnZiaUFoUFQwZ0oyOWlhbVZqZENjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnViMjVGZUhCaGJtUmhZbXhsUld4bGJXVnVkQ0E5SUdkbGRGWmhiSFZsS0dwemIyNHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaHViMjVGZUhCaGJtUmhZbXhsUld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCMGFYUnNaU0E5SUVGeWNtRjVMbWx6UVhKeVlYa29hbk52YmlrZ1B5QW5RWEp5WVhsYkp5QXJJR3B6YjI0dWJHVnVaM1JvSUNzZ0oxMG5JRG9nSjA5aWFtVmpkQ2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnZEdocGMweGxkbVZzU1hORGJHOXpaV1FnUFNCdmNHVnVUR1YyWld4eklEd2dNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9aMlYwVkdsMGJHVW9kR2wwYkdVc0lHNTFiR3dzSUhSb2FYTk1aWFpsYkVselEyeHZjMlZrS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dOdmJuWmxjblJLYzI5dVZHOUZiR1Z0Wlc1MGN5aHFjMjl1TENBeEtTazdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJsYkdWdFpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJR052Ym5abGNuUktjMjl1Vkc5RmJHVnRaVzUwY3locWMyOXVMQ0JwYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQjBhR2x6VEdWMlpXeEpjME5zYjNObFpDQTlJR2x1WkdWNElENGdiM0JsYmt4bGRtVnNjenRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdibVY0ZEV4bGRtVnNTWE5EYkc5elpXUWdQU0JwYm1SbGVDQXJJREVnUGlCdmNHVnVUR1YyWld4ek8xeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCamIyNTBZV2x1WlhJZ1BTQm5aWFJEYjI1MFpXNTBjME52Ym5SaGFXNWxjaWgwYUdselRHVjJaV3hKYzBOc2IzTmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2EyVjVJR2x1SUdwemIyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hCY25KaGVTNXBjMEZ5Y21GNUtHcHpiMjViYTJWNVhTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGUnBkR3hsS0NkQmNuSmhlVnNuSUNzZ2FuTnZibHRyWlhsZExteGxibWQwYUNBcklDZGRKeXdnYTJWNUxDQnVaWGgwVEdWMlpXeEpjME5zYjNObFpDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWTI5dWRtVnlkRXB6YjI1VWIwVnNaVzFsYm5SektHcHpiMjViYTJWNVhTd2dhVzVrWlhnZ0t5QXhLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR3B6YjI1YmEyVjVYU0E5UFQwZ2JuVnNiQ0I4ZkNCcWMyOXVXMnRsZVYwZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1oyVjBVM1JoYm1SaGNtUlFZV2x5S0d0bGVTd2diblZzYkNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNocWMyOXVXMnRsZVYwZ2FXNXpkR0Z1WTJWdlppQkVZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1aGNIQmxibVJEYUdsc1pDaG5aWFJUZEdGdVpHRnlaRkJoYVhJb2EyVjVMQ0JxYzI5dVcydGxlVjB1ZEc5SlUwOVRkSEpwYm1jb0tTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2FuTnZibHRyWlhsZElEMDlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1oyVjBWR2wwYkdVb0owOWlhbVZqZENjc0lHdGxlU3dnYm1WNGRFeGxkbVZzU1hORGJHOXpaV1FwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5TG1Gd2NHVnVaRU5vYVd4a0tHTnZiblpsY25SS2MyOXVWRzlGYkdWdFpXNTBjeWhxYzI5dVcydGxlVjBzSUdsdVpHVjRJQ3NnTVNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWhyWlhrc0lHcHpiMjViYTJWNVhTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVk41YldKdmJITWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVWTjViV0p2YkhNb2FuTnZiaWt1Wm05eVJXRmphQ2htZFc1amRHbHZiaWh6ZVcxaWIyd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWh6ZVcxaWIyd3VkRzlUZEhKcGJtY29LU3dnYW5OdmJsdHplVzFpYjJ4ZEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ym5SaGFXNWxjanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJuWlhSVWFYUnNaU2gwYVhSc1pWUmxlSFFzSUc5d2RHbHZibUZzUzJWNUxDQnNaWFpsYkVselEyeHZjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdOMWNuSmxiblJzZVVOc2IzTmxaQ0E5SUd4bGRtVnNTWE5EYkc5elpXUTdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlVOdmJuUmhhVzVsY2k1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1MGFYUnNaVU52Ym5SaGFXNWxjaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNnblpHRjBZUzEwWlhOMEp5d2dKM1JwZEd4bFEyOXVkR0ZwYm1WeUp5azdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIUmxlSFJGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11ZEdsMGJHVlVaWGgwTG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIUnBkR3hsUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG5ScGRHeGxMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdkR2wwYkdWRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWRHbDBiR1V1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnZEdWNGRFVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlZSbGVIUXVjM1I1YkdVN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRFOXdaVzVDZFhSMGIyNG9iR1YyWld4SmMwTnNiM05sWkNrcE8xeHVJQ0FnSUNBZ0lDQWdJR2xtSUNodmNIUnBiMjVoYkV0bGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHVjRkRVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFMyVjVLRzl3ZEdsdmJtRnNTMlY1S1NrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUhSbGVIUkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR1J2WTNWdFpXNTBMbU55WldGMFpWUmxlSFJPYjJSbEtIUnBkR3hsVkdWNGRDa3BPMXh1SUNBZ0lDQWdJQ0FnSUhScGRHeGxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwWlhoMFJXeGxiV1Z1ZENrN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZGYkdWdFpXNTBMbTl1WTJ4cFkyc2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2IzQmxia0oxZEhSdmJpQTlJSFJwZEd4bFJXeGxiV1Z1ZEM1bWFYSnpkRU5vYVd4a08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHOWlhbVZqZEVOdmJuUmxiblJ6SUQwZ2RHbDBiR1ZGYkdWdFpXNTBMbkJoY21WdWRFNXZaR1V1Ym1WNGRGTnBZbXhwYm1jN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2WW1wbFkzUkRiMjUwWlc1MGN5NXpkSGxzWlM1a2FYTndiR0Y1SUQwZ1kzVnljbVZ1ZEd4NVEyeHZjMlZrSUQ4Z0oySnNiMk5ySnlBNklDZHViMjVsSnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzl3Wlc1Q2RYUjBiMjR1YzNSNWJHVXVkSEpoYm5ObWIzSnRJRDBnWTNWeWNtVnVkR3g1UTJ4dmMyVmtJRDhnSjNKdmRHRjBaU2c1TUdSbFp5a25JRG9nSjNKdmRHRjBaU2d3WkdWbktTYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwYkhsRGJHOXpaV1FnUFNBaFkzVnljbVZ1ZEd4NVEyeHZjMlZrTzF4dUlDQWdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwYVhSc1pVVnNaVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjUwWVdsdVpYSkZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRTl3Wlc1Q2RYUjBiMjRvYkdWMlpXeEpjME5zYjNObFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmlkWFIwYjI1RmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2h6ZEhsc1pVOXdkR2x2Ym5NdWIzQmxia0oxZEhSdmJpNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1dmNHVnVRblYwZEc5dUxuTjBlV3hsTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtWc1pXMWxiblF1YzNSNWJHVXVkSEpoYm5ObWIzSnRJRDBnYkdWMlpXeEpjME5zYjNObFpDQS9JQ2R5YjNSaGRHVW9NR1JsWnlrbklEb2dKM0p2ZEdGMFpTZzVNR1JsWnlrbk8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmlkWFIwYjI1RmJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUdkbGRFTnZiblJsYm5SelEyOXVkR0ZwYm1WeUtHbHpRMnh2YzJWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NWpiMjUwWlc1MGMwTnZiblJoYVc1bGNpNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMyVjBRWFIwY21saWRYUmxLQ2RrWVhSaExYUmxjM1FuTENBblkyOXVkR1Z1ZEhORGIyNTBZV2x1WlhJbktUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11WTI5dWRHVnVkSE5EYjI1MFlXbHVaWEl1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdLR2x6UTJ4dmMyVmtJRDhnSjI1dmJtVW5JRG9nSjJKc2IyTnJKeWs3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOdmJuUmhhVzVsY2tWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnWjJWMFUzUmhibVJoY21SUVlXbHlLR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnY0dGcGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NXJaWGxXWVd4MVpWQmhhWEl1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0J3WVdseVJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxtdGxlVlpoYkhWbFVHRnBjaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0J3WVdseVJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaG5aWFJMWlhrb2EyVjVLU2s3WEc0Z0lDQWdJQ0FnSUNBZ2NHRnBja1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFZtRnNkV1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnY0dGcGNrVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z1oyVjBTMlY1S0c1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdhMlY1Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG10bGVTNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHdGxlVVZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTVyWlhrdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ2EyVjVSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaHVZVzFsSUNzZ0p6b2dKeWtwTzF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCclpYbEZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRlpoYkhWbEtIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhaaGJIVmxSV3hsYldWdWREdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2JuVnNiRlI1Y0dVZ1BTQW5iMkpxWldOMEp6dGNiaUFnSUNBZ0lDQWdJQ0J6ZDJsMFkyZ2dLSFI1Y0dWdlppQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5jM2x0WW05c0p6cGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11YzNsdFltOXNWbUZzZFdVdWRHRm5LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWMzbHRZbTlzVm1Gc2RXVXVjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaDJZV3gxWlM1MGIxTjBjbWx1WnlncEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmMzUnlhVzVuSnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXVjM1J5YVc1blZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11YzNSeWFXNW5WbUZzZFdVdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNnblhDSW5JQ3NnZG1Gc2RXVWdLeUFuWENJbktTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmJuVnRZbVZ5SnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXViblZ0WW1WeVZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11Ym5WdFltVnlWbUZzZFdVdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNoMllXeDFaU2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKMkp2YjJ4bFlXNG5PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLSE4wZVd4bFQzQjBhVzl1Y3k1aWIyOXNaV0Z1Vm1Gc2RXVXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXVZbTl2YkdWaGJsWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElHNTFiR3hVZVhCbE9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTV1ZFd4c1ZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11Ym5Wc2JGWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpVVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z2JXVnlaMlZUZEhsc1pVOXdkR2x2Ym5Nb1pHVm1ZWFZzZEhNc0lHOTJaWEp5YVdSbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQnRaWEpuWldRZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnWkdWbVlYVnNkSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFsY21kbFpGdHJaWGxkSUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z1pHVm1ZWFZzZEhOYmEyVjVYU3dnYjNabGNuSnBaR1Z6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JXVnlaMlZrTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5Wlc1a1pYSW9LVHRjYmlBZ0lDQjlYRzU5SWl3aWFXMXdiM0owSUh0a1pXWmhkV3gwSUdGeklFSmhjMlZNYjJkOUlHWnliMjBnSnk0dlltRnpaVXh2WnljN1hHNXBiWEJ2Y25RZ2UyUmxabUYxYkhRZ1lYTWdURzluVG05a1pVMXBlR2x1YzMwZ1puSnZiU0FuTGk5MFpYSnRURzluTG0xcGVHbHVjeTV1YjJSbEp6dGNibWx0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJYWldKT2IyUmxUV2w0YVc1emZTQm1jbTl0SUNjdUwzUmxjbTFNYjJjdWJXbDRhVzV6TG5kbFlpYzdYRzVwYlhCdmNuUWdlMUJzWVhSbWIzSnRmU0JtY205dElDZGpZWFZ6WVd3dGJtVjBMblYwYVd4ekp6dGNibU5zWVhOeklGUmxjbTFNYjJjZ1pYaDBaVzVrY3lCUWJHRjBabTl5YlM1dGFYaFhhWFJvS0VKaGMyVk1iMmNzSUhzbmJtOWtaU2M2VzB4dlowNXZaR1ZOYVhocGJuTmRMQ2QzWldJbk9sdFhaV0pPYjJSbFRXbDRhVzV6WFgwcGUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ2ZWeHVmVnh1WTI5dWMzUWdURzluWjJWeUlEMGdibVYzSUZSbGNtMU1iMmNvS1R0Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUV4dloyZGxjanNpTENKamIyNXpkQ0JNYjJkT2IyUmxUV2w0YVc1eklEMGdLRXh2WjBOc1lYTnpLVDArSUdOc1lYTnpJR1Y0ZEdWdVpITWdURzluUTJ4aGMzTjdYRzRnSUNBZ1kyOXVibVZqZENoamFHRnVibVZzS1h0Y2JpQWdJQ0FnSUNBZ0x5OXViM1JvYVc1blhHNGdJQ0FnZlZ4dUlDQWdJR3h2WnlodFpYTnpZV2RsS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3k1c1pYWmxiQ0ErUFNCMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4eld5ZHNiMmNuWFNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWh0WlhOellXZGxLVHRjYmlBZ0lDQjlYRzRnSUNBZ2NISnZaM0psYzNNb2NISnZZMlZ6YzAxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNBdkwxUlBSRTg2SUdsdGNHeGxiV1Z1ZENCd2NtOW5jbVZ6Y3lCemFHOTNYRzRnSUNBZ2ZWeHVJQ0FnSUdSbFluVm5LRzFsYzNOaFoyVXBlMXh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMbXhsZG1Wc0lENDlJSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE5iSjJSbFluVm5KMTBwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUgwZ1hHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdVpHVmlkV2NvYldWemMyRm5aU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1RHOW5UbTlrWlUxcGVHbHVjenNpTENKcGJYQnZjblFnZTJSbFptRjFiSFFnWVhNZ1NuTnZibFpwWlhkOUlHWnliMjBnSnk0dmNISmxkSFI1U25OdmJpYzdYRzVqYjI1emRDQlhaV0pPYjJSbFRXbDRhVzV6SUQwZ0tFeHZaME5zWVhOektUMCtJR05zWVhOeklHVjRkR1Z1WkhNZ1RHOW5RMnhoYzNON1hHNGdJQ0FnWTI5dWJtVmpkQ2hrYjJOMWJXVnVkRVZzUFc1MWJHd3BlMXh1SUNBZ0lDQWdJQ0JrYjJOMWJXVnVkRVZzSUQwZ1pHOWpkVzFsYm5SRmJIeDhaRzlqZFcxbGJuUXVZbTlrZVR0Y2JpQWdJQ0FnSUNBZ2JHVjBJRzV2WkdVZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Z3aWRXeGNJaWs3WEc0Z0lDQWdJQ0FnSUc1dlpHVXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlGd2liR2x6ZEMxemRIbHNaUzEwZVhCbE9pQnViMjVsTzF3aU8xeHVJQ0FnSUNBZ0lDQmtiMk4xYldWdWRFVnNMbUZ3Y0dWdVpFTm9hV3hrS0c1dlpHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtWnlZVzFsUld3Z1BTQmtiMk4xYldWdWRFVnNPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZaMmRsY2tWc0lEMGdaRzlqZFcxbGJuUkZiQzVuWlhSRmJHVnRaVzUwYzBKNVZHRm5UbUZ0WlNoY0luVnNYQ0lwV3pCZE8xeHVJQ0FnSUgxY2JpQWdJQ0J6WTNKdmJHeENiM1IwYjIwb1pXeGxiV1Z1ZEQxdWRXeHNLWHRjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQ0E5SUdWc1pXMWxiblFnZkh3Z2RHaHBjeTVtY21GdFpVVnNPMXh1SUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbk5qY205c2JGUnZjQ0E5SUdWc1pXMWxiblF1YzJOeWIyeHNTR1ZwWjJoMElDMGdaV3hsYldWdWRDNWpiR2xsYm5SSVpXbG5hSFE3WEc0Z0lDQWdmVnh1SUNBZ0lIQnliMmR5WlhOektIQnliMk5sYzNOTlpYTnpZV2RsS1h0Y2JpQWdJQ0FnSUNBZ0x5OGdiR1YwSUc1dlpHVWdQU0IwYUdsekxteHZaMmRsY2tWc0xtZGxkRVZzWlcxbGJuUnpRbmxVWVdkT1lXMWxLRndpYkdrNmJuUm9MV3hoYzNRdGIyWXRkSGx3WlNneEtWd2lLVHRjYmlBZ0lDQWdJQ0FnYkdWMElFeEpUbTlrWlhNZ1BTQjBhR2x6TG14dloyZGxja1ZzTG1kbGRFVnNaVzFsYm5SelFubFVZV2RPWVcxbEtGd2liR2xjSWlrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J1YjJSbElEMGdURWxPYjJSbGMxdE1TVTV2WkdWekxteGxibWQwYUMweFhUdGNiaUFnSUNBZ0lDQWdhV1lvSVc1dlpHVWdmSHdnYm05a1pTNWpiR0Z6YzB4cGMzUXVZMjl1ZEdGcGJuTW9YQ0pzYjJkblpYSXRjSEp2WjNKbGMzTmNJaWtwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeTlqY21WaGRHVWdibVYzSUdWc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1YjJSbElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoY0lteHBYQ0lwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdibTlrWlM1amJHRnpjMHhwYzNRdVlXUmtLRndpYkc5bloyVnlMWEJ5YjJkeVpYTnpYQ0lwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1c2IyZG5aWEpGYkM1aGNIQmxibVJEYUdsc1pDaHViMlJsS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnNaWFFnYW5OdmJrNXZaR1VnUFNCS2MyOXVWbWxsZHk1S1UwOU9SR2x6Y0d4aGVTaHdjbTlqWlhOelRXVnpjMkZuWlNrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJrWVhSbElEMGdibVYzSUVSaGRHVW9LVHRjYmlBZ0lDQWdJQ0FnYm05a1pTNXBibTVsY2toVVRVd2dQU0JnUEhBZ2MzUjViR1U5WENKbWIyNTBMWE5wZW1VNklERXljSGc3SUhSbGVIUXRZV3hwWjI0NmNtbG5hSFJjSWo0a2UyUmhkR1Y5UEM5d1BtQTdYRzRnSUNBZ0lDQWdJRzV2WkdVdVlYQndaVzVrUTJocGJHUW9hbk52Yms1dlpHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmpjbTlzYkVKdmRIUnZiU2dwTzF4dUlDQWdJSDFjYmlBZ0lDQnNiMmNvYldWemMyRm5aU2w3WEc0Z0lDQWdJQ0FnSUdsbUtIUm9hWE11YkdWMlpXd2dQajBnZEdocGN5NUJZMk5sY0hSbFpFeGxkbVZzYzFzbmJHOW5KMTBwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJHOW5aMlZ5Uld3Z2ZId2dJWFJvYVhNdWJHOW5aMlZ5Uld3dVlYQndaVzVrUTJocGJHUXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqYjI1dVpXTjBLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2JHVjBJRzV2WkdVZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Z3aWJHbGNJaWs3WEc0Z0lDQWdJQ0FnSUc1dlpHVXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlDZGliM0prWlhJdFltOTBkRzl0T2lBeGNIZ2djMjlzYVdRZ0kyUmxaR1ZrWlRzbk95QWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2JHVjBJR3B6YjI1T2IyUmxJRDBnU25OdmJsWnBaWGN1U2xOUFRrUnBjM0JzWVhrb2JXVnpjMkZuWlNrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJrWVhSbElEMGdibVYzSUVSaGRHVW9LVHRjYmlBZ0lDQWdJQ0FnYm05a1pTNXBibTVsY2toVVRVd2dQU0JnUEhBZ2MzUjViR1U5WENKbWIyNTBMWE5wZW1VNklERXljSGc3SUhSbGVIUXRZV3hwWjI0NmNtbG5hSFJjSWo0a2UyUmhkR1Y5UEM5d1BtQTdYRzRnSUNBZ0lDQWdJRzV2WkdVdVlYQndaVzVrUTJocGJHUW9hbk52Yms1dlpHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZaMmRsY2tWc0xtRndjR1Z1WkVOb2FXeGtLRzV2WkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OamNtOXNiRUp2ZEhSdmJTZ3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlodFpYTnpZV2RsS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JrWldKMVp5aHRaWE56WVdkbEtYdGNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NXNaWFpsYkNBK1BTQjBhR2x6TGtGalkyVndkR1ZrVEdWMlpXeHpXeWRrWldKMVp5ZGRLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCdWRXeHNPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUM4dmJtOGdjMmh2ZHlCdmJpQjNaV0lnYzJOeVpXVnVPeUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaR1ZpZFdjb2JXVnpjMkZuWlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdWMlZpVG05a1pVMXBlR2x1Y3pzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyRjFjMkZzWDI1bGRGOTFkR2xzYzE5Zk95SmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VJbWdEYXRhc2V0IH0gZnJvbSAnLi9iYXNlSW1nRGF0YXNldCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyBpbmRleERCU3RvcmFnZSB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyBtZW1Eb3duQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmltcG9ydCB7IExvZ2dlck1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQubG9nJztcbmltcG9ydCB7IFByZXByb2Nlc3NpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmcnO1xuaW1wb3J0IHsgU3RyZWFtLCBTYW1wbGluZywgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW5pc3REYXRhc2V0IGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlSW1nRGF0YXNldCwgW0xvZ2dlck1peGluc10pe1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyZSl7XG4gICAgICAgIHN1cGVyKGNvbmZpZ3VyZSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IGluZGV4REJTdG9yYWdlO1xuICAgICAgICB0aGlzLm1lbUNhY2hlID0gbWVtRG93bkNhY2hlO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmcgPSBuZXcgUHJlcHJvY2Vzc2luZygpO1xuICAgICAgICB0aGlzLkYgPSBuZXcgRnVuY3Rpb24oKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaExhYmVsQ2h1bmsoY2h1bmtVcmwsIHNhdmVQYXRoKXtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe2NodW5rVXJsLCBzYXZlUGF0aH0pO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoRmlsZShjaHVua1VybCwgc2F2ZVBhdGgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoU2FtcGxlQ2h1bmsoY2h1bmtVcmwsIHNhdmVQYXRoKXtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaFBOR0ZpbGUoY2h1bmtVcmwsIHNhdmVQYXRoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RDaHVua3MobnVtY2h1bmtzLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIGxldCBjaHVua0lkeHMgPSBTYW1wbGluZy5jaG9pY2UodGhpcy5jb25maWd1cmF0aW9uLmNodW5rTGlzdCwgbnVtY2h1bmtzKTtcbiAgICAgICAgcmV0dXJuIGNodW5rSWR4cy5tYXAoKGlkeCwgaXRoKT0+KFtgZGF0YS1jaHVuay0ke2lkeH0ucG5nYCxgbGFiZWwtY2h1bmstJHtpZHh9YF0pKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaERhdGFzZXQoc2F2ZURpcj0nL21uaXN0LycsbnVtY2h1bmtzPTEsIHNlbGVjdEJ5PSdyYW5kb20nKXtcbiAgICAgICAgbGV0IHNlbGVjdGVkQ2h1bmtzID0gdGhpcy5zZWxlY3RDaHVua3MobnVtY2h1bmtzLCBzZWxlY3RCeSk7XG4gICAgICAgIGxldCBbc2FtcGxlQ2h1bmtzLCBsYWJlbENodW5rc10gPSB0aGlzLkYudW56aXAoc2VsZWN0ZWRDaHVua3MpO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7c2VsZWN0ZWRDaHVua3MsIHNhbXBsZUNodW5rcywgbGFiZWxDaHVua3N9KTtcbiAgICAgICAgbGV0IGNodW5rRmV0Y2hMaXN0ID0gdGhpcy5GLnppcChzYW1wbGVDaHVua3MsIGxhYmVsQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rcyA9IFtdO1xuICAgICAgICBmb3IobGV0IFtzYW1wbGVDaHVuaywgbGFiZWxDaHVua10gb2YgY2h1bmtGZXRjaExpc3Qpe1xuICAgICAgICAgICAgbGV0IHNhbXBsZUNodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBzYW1wbGVDaHVuaztcbiAgICAgICAgICAgIGxldCBzYW1tcGxlU2F2ZVBhdGggPSBzYXZlRGlyICsgc2FtcGxlQ2h1bms7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7c2FtcGxlQ2h1bmtVcmwsIHNhbW1wbGVTYXZlUGF0aH0pO1xuICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hQTkdGaWxlKHNhbXBsZUNodW5rVXJsLCBzYW1tcGxlU2F2ZVBhdGgpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZVBhdGh9KTtcbiAgICAgICAgICAgIGxldCBsYWJlbENodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBsYWJlbENodW5rO1xuICAgICAgICAgICAgbGV0IGxhYmVsU2F2ZVBhdGggPSBzYXZlRGlyICsgbGFiZWxDaHVuaztcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtsYWJlbENodW5rVXJsLCBsYWJlbFNhdmVQYXRofSk7XG4gICAgICAgICAgICBsZXQgbGFiZWxQYXRoID0gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoRmlsZShsYWJlbENodW5rVXJsLCBsYWJlbFNhdmVQYXRoKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtsYWJlbFBhdGh9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRDaHVua3MucHVzaChbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzKHtzYXZlQ2h1bmtzOltzYW1wbGVQYXRoLCBsYWJlbFBhdGhdfSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBbc2FtcGxlU3RvcmFnZSwgbGFiZWxTdG9yYWdlXSA9IHRoaXMuRi51bnppcCh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rU2FtcGxlcyA9IHNhbXBsZVN0b3JhZ2U7XG4gICAgICAgIHRoaXMuc2F2ZWRDaHVua0xhYmVscyA9IGxhYmVsU3RvcmFnZTtcbiAgICAgICAgcmV0dXJuIHtzYW1wbGVTdG9yYWdlLCBsYWJlbFN0b3JhZ2V9O1xuICAgIH1cbiAgICBcbiAgICBtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbShzYXZlRGlyPScvcHJlcHJvY2Vzc2luZy9tbmlzdC8nLHN0b3JlSW5NZW1vcnk9ZmFsc2Upe1xuICAgICAgICB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlID0gKHN0b3JlSW5NZW1vcnkpP3RoaXMubWVtQ2FjaGU6dGhpcy5zdG9yYWdlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgSW1hZ2VCdWZmZXJTaXplID0gdGhpcy5GLmdldEltZ0J1ZmZlclNpemUodGhpcy5zYW1wbGVTaXplKTtcbiAgICAgICAgY29uc3QgTGFiZWxCdWZmZXJTaXplID0gdGhpcy5udW1DbGFzcztcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe2ltYWdlQnVmZmVyU2l6ZTogSW1hZ2VCdWZmZXJTaXplLCBcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsQnVmZmVyU2l6ZTogTGFiZWxCdWZmZXJTaXplfSk7XG4gICAgICAgIGNvbnN0IFRyYW5zZm9ybUZuID0gKGNodW5rLCBjaHVua0VuY29kaW5nLCBhZnRlclRyYW5zZm9ybUZuKSA9PntcbiAgICAgICAgICAgIGNvbnN0IFRyYW5zZm9ybUFzeW5jID0gYXN5bmMgKCk9PntcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlQnVmZmVyID0gY2h1bmsuc2FtcGxlO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbEJ1ZmZlciA9IGNodW5rLmxhYmVsO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtzYW1wbGVCdWZmZXIsIGxhYmVsQnVmZmVyfSk7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0ZWRJbWdCdWZmZXIgPSBhd2FpdCB0aGlzLnByZXByb2Nlc3Npbmcuc3BsaXRJbWFnZUJ1ZmZlcihzYW1wbGVCdWZmZXIsIEltYWdlQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0ZWRMYWJlbEJ1ZmZlciA9IGF3YWl0IHRoaXMucHJlcHJvY2Vzc2luZy5zcGxpdEltYWdlQnVmZmVyKGxhYmVsQnVmZmVyLCBMYWJlbEJ1ZmZlclNpemUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHByb2Nlc3NlZENodW5rOiB0aGlzLkYuemlwKHNwbGl0ZWRJbWdCdWZmZXIsIHNwbGl0ZWRMYWJlbEJ1ZmZlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rSWR4OiBjaHVuay5pZHh9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFRyYW5zZm9ybUFzeW5jKGNodW5rKS50aGVuKHByb2Nlc3NlZENodW5rPT57XG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2Zvcm1GbihudWxsLCBwcm9jZXNzZWRDaHVuayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFdyaXRlRm4gPSAocHJvY2Vzc2VkQ2h1bmssIGNodW5rRW5jb2RpbmcsIGNhbGxiYWNrKSA9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgV3JpdGVBc3luYyA9IGFzeW5jIChwcm9jZXNzZWRDaHVuayk9PntcbiAgICAgICAgICAgICAgICBsZXQgZ2VuZXJhdG9yID0gdGhpcy5GLmdlbmVyYXRvcldpdGhJbmRleChwcm9jZXNzZWRDaHVuay5wcm9jZXNzZWRDaHVuayk7XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rSWR4ICA9IHByb2Nlc3NlZENodW5rLmNodW5rSWR4O1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVQYXRoICA9IFtdLCBsYWJlbFBhdGggPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGUsIGxhYmVsXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rU2FtcGxlUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ3NhbXBsZS8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIHNhbXBsZSk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtMYWJlbFBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdsYWJlbC8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlUGF0aCA9IFsuLi5zYW1wbGVQYXRoLCBjaHVua1NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFBhdGggPSBbLi4ubGFiZWxQYXRoLCBjaHVua0xhYmVsUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Moe3ByZXByb2Nlc3Npbmc6IFtjaHVua1NhbXBsZVBhdGgsIGNodW5rTGFiZWxQYXRoXX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5GLnppcChzYW1wbGVQYXRoLCBsYWJlbFBhdGgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgV3JpdGVBc3luYyhwcm9jZXNzZWRDaHVuaykudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSBbLi4udGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIC4uLnJlc3VsdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBkdXBsZXhlciA9IFN0cmVhbS5tYWtlRHVwbGV4KFdyaXRlRm4pO1xuICAgICAgICBsZXQgdHJhbnNmb3JtZXIgPSBTdHJlYW0ubWFrZVRyYW5zZm9ybShUcmFuc2Zvcm1Gbik7XG4gICAgICAgIGxldCBzdHJlYW0gPSBkdXBsZXhlci5waXBlKHRyYW5zZm9ybWVyKS5waXBlKGR1cGxleGVyKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG5cbiAgICBhc3luYyBwcmVwcm9jZXNzaW5nRGF0YXNldChzdHJlYW0pe1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlID0gc2FtcGxlSXRlbVtzYW1wbGVQYXRoXTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGxhYmVsSXRlbVtsYWJlbFBhdGhdO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgICAgIHN0cmVhbS5wdXNoKHtpZHgsIHNhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0ucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBzdHJlYW0ub24oJ2ZpbmlzaCcsICgpPT57XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGdldFRyYWluVGVzdFNldCh0cmFpblNpemU9bnVsbCl7XG4gICAgICAgIHRyYWluU2l6ZSA9IHRyYWluU2l6ZXx8cGFyc2VJbnQodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcubGVuZ3RoKjAuOSk7XG5cbiAgICAgICAgY29uc3QgW3RyYWluU2V0LCB0ZXN0U2V0XSA9IHRoaXMuRi5zcGxpdFRyYWluVGVzdFNldCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgdHJhaW5TaXplKTtcbiAgICAgICAgcmV0dXJuIFt0cmFpblNldCwgdGVzdFNldF07XG4gICAgfVxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcihzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZT1udWxsLCBzdGFydD0wLCBlbmQ9bnVsbCl7XG4gICAgICAgIFxuICAgICAgICBiYXRjaFNpemUgPSBiYXRjaFNpemU/YmF0Y2hTaXplOnNhbXBsZUlkeFNldC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IF9iYXRjaGVzID0gdGhpcy5GLmhzcGxpdEV2ZXJ5KHNhbXBsZUlkeFNldCwgYmF0Y2hTaXplKTtcbiAgICAgICAgY29uc3QgYmF0Y2hlcyA9IFNhbXBsaW5nLmNob2ljZShfYmF0Y2hlcywgX2JhdGNoZXMubGVuZ3RoKTtcbiAgICAgICAgaWYoZW5kID09PSBudWxsKXtcbiAgICAgICAgICAgIGVuZCA9IGJhdGNoZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSBzdGFydCwgaXRlcmF0aW9uQ291bnQgPSAwLCBzdGVwID0gMTtcbiAgICAgICAgY29uc3QgYmF0Y2hHZW5lcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgbmV4dDogYXN5bmMoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmF0Y2hTYW1wbGVzID0gW10sIGJhdGNoTGFiZWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0gb2YgYmF0Y2hlc1tuZXh0SW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaFNhbXBsZXMgPSBbLi4uYmF0Y2hTYW1wbGVzLCBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoTGFiZWxzID0gWy4uLmJhdGNoTGFiZWxzLCBsYWJlbEl0ZW1bbGFiZWxQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4ICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZHggPSBpdGVyYXRpb25Db3VudDtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtpZHgsIGJhdGNoU2l6ZSwgZGF0YTpbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc119O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZShuZXh0SW5kZXggPCBlbmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYmF0Y2hHZW5lcmF0b3I7XG4gICAgfVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VJbWdEYXRhc2V0e1xuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXRDb25maWd1cmUpe1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBkYXRhc2V0Q29uZmlndXJlO1xuICAgICAgICBjb25zdCB7bnVtU2FtcGxlcywgc2FtcGxlU2l6ZSwgbnVtQ2xhc3Nlc30gPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuZGF0YVNpemUgPSBbbnVtU2FtcGxlcywgLi4uc2FtcGxlU2l6ZV07XG4gICAgICAgIFxuICAgICAgICB0aGlzLm51bVNhbXBsZXMgPSBudW1TYW1wbGVzO1xuICAgICAgICB0aGlzLnNhbXBsZVNpemUgPSBzYW1wbGVTaXplO1xuICAgICAgICB0aGlzLm51bUNsYXNzICAgPSBudW1DbGFzc2VzO1xuICAgIH1cbiAgICBcbiAgICBzdW1tYXJ5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgfVxufSIsImltcG9ydCB7RnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9ufSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBCYXNlRnVuY3Rpb257XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0SW1nQnVmZmVyU2l6ZShpbWdTaXplKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKChzLGQpPT5zKmQsMSxpbWdTaXplKTtcbiAgICB9XG4gICAgZ2VuZXJhdG9yV2l0aEluZGV4KGl0ZW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuYWRkSW5kZXgoUi5tYXApKChkLCBpZHgpPT5baWR4LCBkXSwgaXRlbXMpO1xuICAgIH1cbiAgICBzcGxpdFRyYWluVGVzdFNldChpdGVtcywgc3BsaXRJbmRleCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnNwbGl0QXQoc3BsaXRJbmRleCwgaXRlbXMpO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==