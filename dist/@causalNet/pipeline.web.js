(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.datasets"), require("causal-net.memcache"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.datasets", "causal-net.memcache", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/pipeline"] = factory(require("causal-net.core"), require("causal-net.datasets"), require("causal-net.memcache"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/pipeline"] = factory(root["causal-net.core"], root["causal-net.datasets"], root["causal-net.memcache"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_datasets__, __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./packages/causality-log/dist/@causalNet/log.web.js":
/*!***********************************************************!*\
  !*** ./packages/causality-log/dist/@causalNet/log.web.js ***!
  \***********************************************************/
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./termLog */ "./src/termLog.js"), __webpack_require__(/*! ./baseLog */ "./src/baseLog.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _termLog, _baseLog) {
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
  _termLog = _interopRequireDefault(_termLog);
  _baseLog = _interopRequireDefault(_baseLog);
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

  //origin code from https://github.com/lucygilbert/json-display/blob/master/json-display.js
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

    scrollBottom() {//nothing
    }

    progress(processMessage) {}

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
      console.log('scoll bottom ' + element.scrollHeight + element.clientHeight);
      element.scrollTop = element.scrollHeight - element.clientHeight;
    }

    progress(processMessage) {
      // let node = this.loggerEl.getElementsByTagName("li:nth-last-of-type(1)");
      let LINodes = this.loggerEl.getElementsByTagName("li");
      let node = LINodes[LINodes.length - 1];

      if (!node || node.classList.contains("logger-progress")) {
        //create new
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9wcmV0dHlKc29uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2cuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQmFzZUxvZyIsImNvbnN0cnVjdG9yIiwiQWNjZXB0ZWRMZXZlbHMiLCJkZWJ1ZyIsImxvZyIsIndhcm5pbmciLCJlcnJvciIsInJBY2NlcHRlZExldmVscyIsImxldmVsIiwiTGV2ZWwiLCJ1bmRlZmluZWQiLCJFcnJvciIsIk9iamVjdCIsImtleXMiLCJKc29uVmlldyIsIkpTT05EaXNwbGF5IiwianNvbiIsIm9wZW5MZXZlbHNBcmciLCJzdHlsZU9wdGlvbnNBcmciLCJERUZBVUxUX1NUWUxFX09QVElPTlMiLCJyb290IiwidGFnIiwic3R5bGUiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlIiwidGl0bGVUZXh0Iiwib3BlbkJ1dHRvbiIsImNvbnRlbnRzQ29udGFpbmVyIiwia2V5VmFsdWVQYWlyIiwia2V5Iiwic3ltYm9sVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIm51bWJlclZhbHVlIiwiYm9vbGVhblZhbHVlIiwibnVsbFZhbHVlIiwib3BlbkxldmVscyIsImlzTmFOIiwicGFyc2VJbnQiLCJJbmZpbml0eSIsInN0eWxlT3B0aW9ucyIsIm1lcmdlU3R5bGVPcHRpb25zIiwiYXNzaWduIiwidGFyZ2V0IiwiVHlwZUVycm9yIiwidG8iLCJpbmRleCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm5leHRTb3VyY2UiLCJuZXh0S2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicmVuZGVyIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNzc1RleHQiLCJ2b2lkRWxlbWVudCIsImdldFZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJEYXRlIiwiZGF0ZUVsZW1lbnQiLCJ0b0lTT1N0cmluZyIsIm5vbkV4cGFuZGFibGVFbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwidGhpc0xldmVsSXNDbG9zZWQiLCJnZXRUaXRsZSIsImNvbnZlcnRKc29uVG9FbGVtZW50cyIsIm5leHRMZXZlbElzQ2xvc2VkIiwiY29udGFpbmVyIiwiZ2V0Q29udGVudHNDb250YWluZXIiLCJnZXRTdGFuZGFyZFBhaXIiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmb3JFYWNoIiwic3ltYm9sIiwidG9TdHJpbmciLCJvcHRpb25hbEtleSIsImxldmVsSXNDbG9zZWQiLCJjdXJyZW50bHlDbG9zZWQiLCJjb250YWluZXJFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGV4dEVsZW1lbnQiLCJ0aXRsZUVsZW1lbnQiLCJnZXRPcGVuQnV0dG9uIiwiZ2V0S2V5IiwiY3JlYXRlVGV4dE5vZGUiLCJvbmNsaWNrIiwiZmlyc3RDaGlsZCIsIm9iamVjdENvbnRlbnRzIiwicGFyZW50Tm9kZSIsIm5leHRTaWJsaW5nIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsImJ1dHRvbkVsZW1lbnQiLCJpc0Nsb3NlZCIsInZhbHVlIiwicGFpckVsZW1lbnQiLCJuYW1lIiwia2V5RWxlbWVudCIsInZhbHVlRWxlbWVudCIsIm51bGxUeXBlIiwiZGVmYXVsdHMiLCJvdmVycmlkZXMiLCJtZXJnZWQiLCJUZXJtTG9nIiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiTG9nTm9kZU1peGlucyIsIldlYk5vZGVNaXhpbnMiLCJMb2dnZXIiLCJMb2dDbGFzcyIsImNvbm5lY3QiLCJjaGFubmVsIiwibWVzc2FnZSIsImNvbnNvbGUiLCJzY3JvbGxCb3R0b20iLCJwcm9ncmVzcyIsInByb2Nlc3NNZXNzYWdlIiwiZG9jdW1lbnRFbCIsImJvZHkiLCJub2RlIiwiZnJhbWVFbCIsImxvZ2dlckVsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxUb3AiLCJMSU5vZGVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJqc29uTm9kZSIsImRhdGUiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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LEdBQUd2SCxvQkFBU0MsV0FBVCxDQUFxQm9HLE9BQXJCLENBQWY7O0FBQ0EsVUFBSW1CLElBQUksR0FBRyxJQUFJekUsSUFBSixFQUFYO0FBQ0E2RCxVQUFJLENBQUNhLFNBQUwsR0FBa0IsZ0RBQStDRCxJQUFLLE1BQXRFO0FBQ0FaLFVBQUksQ0FBQzlELFdBQUwsQ0FBaUJ5RSxRQUFqQjtBQUNBLFdBQUtULFFBQUwsQ0FBY2hFLFdBQWQsQ0FBMEI4RCxJQUExQjtBQUNBLFdBQUtMLFlBQUw7QUFDQUQsYUFBTyxDQUFDaEgsR0FBUixDQUFZK0csT0FBWjtBQUNIOztBQUVEaEgsU0FBSyxDQUFDZ0gsT0FBRCxFQUFTO0FBQ1YsVUFBRyxLQUFLM0csS0FBTCxJQUFjLEtBQUtOLGNBQUwsQ0FBb0IsT0FBcEIsQ0FBakIsRUFBOEM7QUFDMUMsZUFBTyxJQUFQO0FBQ0gsT0FIUyxDQUlWOzs7QUFDQWtILGFBQU8sQ0FBQ2pILEtBQVIsQ0FBY2dILE9BQWQ7QUFDSDs7QUFyRG9ELEdBQXpEOztpQkF3RGVMLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RGYsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9sb2cud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VMb2d7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5BY2NlcHRlZExldmVscyA9IHtkZWJ1ZzogMCwgbG9nOjEsIHdhcm5pbmc6MiwgZXJyb3I6IDN9O1xuICAgICAgICB0aGlzLnJBY2NlcHRlZExldmVscyA9IHswOidkZWJ1ZycsIDE6ICdsb2cnLCAyOiAnd2FybmluZycsIDM6ICdlcnJvcid9O1xuICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXTtcbiAgICB9XG4gICAgc2V0IExldmVsKGxldmVsKXtcbiAgICAgICAgaWYodGhpcy5BY2NlcHRlZExldmVsc1tsZXZlbF0hPT11bmRlZmluZWQpe1xuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdOyAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7bGV2ZWx9IG11c3QgYmUgb25lIG9mICR7T2JqZWN0LmtleXModGhpcy5BY2NlcHRlZExldmVscyl9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IExldmVsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJBY2NlcHRlZExldmVsc1t0aGlzLmxldmVsXTtcbiAgICB9XG59IiwiLy9vcmlnaW4gY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWN5Z2lsYmVydC9qc29uLWRpc3BsYXkvYmxvYi9tYXN0ZXIvanNvbi1kaXNwbGF5LmpzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgTHVjeSBHaWxiZXJ0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVmlld3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBzdGF0aWMgSlNPTkRpc3BsYXkoanNvbiwgb3BlbkxldmVsc0FyZywgc3R5bGVPcHRpb25zQXJnKSB7XG4gICAgICAgIHZhciBERUZBVUxUX1NUWUxFX09QVElPTlMgPSB7XG4gICAgICAgICAgcm9vdDogeyB0YWc6ICdwcmUnLCBzdHlsZTogJ3BhZGRpbmc6IDVweDsgZm9udC1zaXplOiAxcmVtOycgfSxcbiAgICAgICAgICB0aXRsZUNvbnRhaW5lcjogeyB0YWc6ICdkaXYnLCBzdHlsZTogJ21hcmdpbi1ib3R0b206IDNweDsnIH0sXG4gICAgICAgICAgdGl0bGU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyOycgfSxcbiAgICAgICAgICB0aXRsZVRleHQ6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnJyB9LFxuICAgICAgICAgIG9wZW5CdXR0b246IHsgXG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW46IDBweCA3cHggMHB4IDJweDsgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAnXG4gICAgICAgICAgICAgICAgICsgJ2JvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjazsnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudHNDb250YWluZXI6IHsgdGFnOiAnZGl2Jywgc3R5bGU6ICdwYWRkaW5nLWxlZnQ6IDE4cHg7JyB9LFxuICAgICAgICAgIGtleVZhbHVlUGFpcjogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogMnB4OycgfSxcbiAgICAgICAgICBrZXk6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGRhcmtibHVlOycgfSxcbiAgICAgICAgICBzeW1ib2xWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogZGFya2dyZWVuOycgfSxcbiAgICAgICAgICBzdHJpbmdWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogY3JpbXNvbjsnIH0sXG4gICAgICAgICAgbnVtYmVyVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICAgIGJvb2xlYW5WYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgICAgbnVsbFZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9wZW5MZXZlbHMgPSBpc05hTihwYXJzZUludChvcGVuTGV2ZWxzQXJnKSkgPyBJbmZpbml0eSA6IHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpO1xuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0gdHlwZW9mIHN0eWxlT3B0aW9uc0FyZyA9PT0gJ29iamVjdCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1lcmdlU3R5bGVPcHRpb25zKERFRkFVTFRfU1RZTEVfT1BUSU9OUywgc3R5bGVPcHRpb25zQXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBERUZBVUxUX1NUWUxFX09QVElPTlM7XG4gICAgXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgXG4gICAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMucm9vdC50YWcpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5yb290LnN0eWxlO1xuICAgIFxuICAgICAgICAgIGlmIChqc29uID09PSBudWxsIHx8IGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHZvaWRFbGVtZW50ID0gZ2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZvaWRFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb24gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBub25FeHBhbmRhYmxlRWxlbWVudCA9IGdldFZhbHVlKGpzb24pO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub25FeHBhbmRhYmxlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IEFycmF5LmlzQXJyYXkoanNvbikgPyAnQXJyYXlbJyArIGpzb24ubGVuZ3RoICsgJ10nIDogJ09iamVjdCc7XG4gICAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBvcGVuTGV2ZWxzIDwgMTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUodGl0bGUsIG51bGwsIHRoaXNMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCAxKSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCBpbmRleCkge1xuICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgICAgICB2YXIgbmV4dExldmVsSXNDbG9zZWQgPSBpbmRleCArIDEgPiBvcGVuTGV2ZWxzO1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250ZW50c0NvbnRhaW5lcih0aGlzTGV2ZWxJc0Nsb3NlZCk7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdBcnJheVsnICsganNvbltrZXldLmxlbmd0aCArICddJywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSA9PT0gbnVsbCB8fCBqc29uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwgbnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0udG9JU09TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbltrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ09iamVjdCcsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoanNvbikuZm9yRWFjaChmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihzeW1ib2wudG9TdHJpbmcoKSwganNvbltzeW1ib2xdKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRUaXRsZSh0aXRsZVRleHQsIG9wdGlvbmFsS2V5LCBsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRseUNsb3NlZCA9IGxldmVsSXNDbG9zZWQ7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlLnRhZyk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGUuc3R5bGU7XG4gICAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGlmIChvcHRpb25hbEtleSkge1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KG9wdGlvbmFsS2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3BlbkJ1dHRvbiA9IHRpdGxlRWxlbWVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBvYmplY3RDb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gY3VycmVudGx5Q2xvc2VkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgIG9wZW5CdXR0b24uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudGx5Q2xvc2VkID8gJ3JvdGF0ZSg5MGRlZyknIDogJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi50YWcpO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnN0eWxlO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICAgIHJldHVybiBidXR0b25FbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbnRlbnRzQ29udGFpbmVyKGlzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAnY29udGVudHNDb250YWluZXInKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIuc3R5bGU7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKGlzQ2xvc2VkID8gJ25vbmUnIDogJ2Jsb2NrJyk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgcGFpckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIudGFnKTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci5zdHlsZTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VmFsdWUodmFsdWUpKTtcbiAgICAgICAgICByZXR1cm4gcGFpckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KG5hbWUpIHtcbiAgICAgICAgICB2YXIga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleS50YWcpO1xuICAgICAgICAgIGtleUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXkuc3R5bGU7XG4gICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lICsgJzogJykpO1xuICAgICAgICAgIHJldHVybiBrZXlFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgICAgICB2YXIgbnVsbFR5cGUgPSAnb2JqZWN0JztcbiAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCInICsgdmFsdWUgKyAnXCInKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG51bGxUeXBlOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udWxsVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgICAgIHZhciBtZXJnZWQgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG1lcmdlZFtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiByZW5kZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtkZWZhdWx0IGFzIEJhc2VMb2d9IGZyb20gJy4vYmFzZUxvZyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgTG9nTm9kZU1peGluc30gZnJvbSAnLi90ZXJtTG9nLm1peGlucy5ub2RlJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBXZWJOb2RlTWl4aW5zfSBmcm9tICcuL3Rlcm1Mb2cubWl4aW5zLndlYic7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNsYXNzIFRlcm1Mb2cgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VMb2csIHsnbm9kZSc6W0xvZ05vZGVNaXhpbnNdLCd3ZWInOltXZWJOb2RlTWl4aW5zXX0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuY29uc3QgTG9nZ2VyID0gbmV3IFRlcm1Mb2coKTtcbmV4cG9ydCBkZWZhdWx0IExvZ2dlcjsiLCJjb25zdCBMb2dOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChjaGFubmVsKXtcbiAgICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG4gICAgc2Nyb2xsQm90dG9tKCl7XG4gICAgICAgIC8vbm90aGluZ1xuICAgIH1cbiAgICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSl7XG4gICAgfVxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gXG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nTm9kZU1peGluczsiLCJpbXBvcnQge2RlZmF1bHQgYXMgSnNvblZpZXd9IGZyb20gJy4vcHJldHR5SnNvbic7XG5jb25zdCBXZWJOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChkb2N1bWVudEVsPW51bGwpe1xuICAgICAgICBkb2N1bWVudEVsID0gZG9jdW1lbnRFbHx8ZG9jdW1lbnQuYm9keTtcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IFwibGlzdC1zdHlsZS10eXBlOiBub25lO1wiO1xuICAgICAgICBkb2N1bWVudEVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB0aGlzLmZyYW1lRWwgPSBkb2N1bWVudEVsO1xuICAgICAgICB0aGlzLmxvZ2dlckVsID0gZG9jdW1lbnRFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpWzBdO1xuICAgIH1cbiAgICBzY3JvbGxCb3R0b20oZWxlbWVudD1udWxsKXtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5mcmFtZUVsO1xuICAgICAgICBjb25zb2xlLmxvZygnc2NvbGwgYm90dG9tICcgKyBlbGVtZW50LnNjcm9sbEhlaWdodCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSl7XG4gICAgICAgIC8vIGxldCBub2RlID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpOm50aC1sYXN0LW9mLXR5cGUoMSlcIik7XG4gICAgICAgIGxldCBMSU5vZGVzID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgICAgICBsZXQgbm9kZSA9IExJTm9kZXNbTElOb2Rlcy5sZW5ndGgtMV07XG4gICAgICAgIGlmKCFub2RlIHx8IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9nZ2VyLXByb2dyZXNzXCIpKXsvL2NyZWF0ZSBuZXdcbiAgICAgICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJsb2dnZXItcHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBqc29uTm9kZSA9IEpzb25WaWV3LkpTT05EaXNwbGF5KHByb2Nlc3NNZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5sb2dnZXJFbCB8fCAhdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZCl7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gJ2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlOyc7ICAgICAgIFxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShtZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy9ubyBzaG93IG9uIHdlYiBzY3JlZW47ICAgICAgICBcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWJOb2RlTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/causality.js":
/*!**************************!*\
  !*** ./src/causality.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.storage */ "causal-net.storage"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./ensemble.mixins */ "./src/ensemble.mixins.js"), __webpack_require__(/*! ./function */ "./src/function.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _causalNet3, _ensemble, _function) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _ensemble = _interopRequireDefault(_ensemble);
  _function = _interopRequireDefault(_function);

  class CausalNet extends _causalNet3.Platform.mixWith(_causalNet.Tensor, [_ensemble.default]) {
    /**
     * @param  {} netConfig
     * @param  {} netParams
     */
    constructor(netConfig, netParams = null, storage = null) {
      super();
      this.F = new _function.default();
      this.R = this.F.CoreFunction;
      this.logger = console;
      this.storage = storage || _causalNet2.indexDBStorage;
      this.saveModelDir = '/saveModel/';
      this.HyperParameters = this.F.getHyperParameter(netConfig);
      this.BasePipeline = this.F.getPipeline(netConfig);
      this.netParams = this.setOrInitParams(this.BasePipeline, netParams);
      this.flattenParams = this.flattenParams(this.netParams);
    }

    set Logger(logger) {
      this.logger = logger;
    }

    get Logger() {
      return this.logger;
    }

    flattenParams(params) {
      const R = this.R,
            F = this.F;

      const MapValues = objOrArray => Array.isArray(objOrArray) ? objOrArray : Object.values(objOrArray);

      const Flatten = pv => {
        if (F.isTensor(pv)) {
          return pv;
        } else {
          let values = MapValues(pv);
          let flatten = values.reduce((flatten, v) => {
            let res = Flatten(v);

            if (R.is(Array, res)) {
              flatten = [...flatten, ...res];
            } else {
              flatten = [...flatten, res];
            }

            return flatten;
          }, []);
          return flatten;
        }
      };

      let values = MapValues(params);
      return values.reduce((flatten, v) => [...flatten, ...Flatten(v)], []);
    }

    layer(value, layerConfigure, layerParameters) {
      const R = this.R;
      const {
        Name,
        Type,
        Parameters,
        Flow
      } = layerConfigure;
      this.logger.debug({
        Name,
        Type,
        Parameters,
        Flow
      });
      const OpsRunner = R.addIndex(R.reduce)(R.__, {
        result: value,
        trace: {}
      }, Flow);
      var {
        result,
        trace
      } = OpsRunner(({
        result,
        trace
      }, node, idx) => {
        if (node.Parameter) {
          result = this.T[node.Op](result, layerParameters[node.Parameter], ...node.Args);
        } else {
          result = this.T[node.Op](result, ...node.Args);
        }

        ;
        trace[idx] = result.shape;
        return {
          result,
          trace
        };
      });
      return {
        [Name]: result,
        trace
      };
    }

    setOrInitParams(pipeline, netParams) {
      const R = this.R,
            T = this.T,
            F = this.F;
      let pipeParams = R.fromPairs(R.filter(([k, v]) => v !== undefined, R.map(R.__, pipeline)(p => [p.Name, p.Parameters])));

      const SetOrInit = (mainValue, subVal) => {
        let keys = R.keys(mainValue);
        let keyMainValSubVal = R.map(k => [k, R.prop(k, mainValue), R.propOr(null, k, subVal)], keys);

        const ValMapping = ([key, mainVal, subVal]) => {
          if (F.isParameter(mainVal)) {
            const paramShape = mainVal;

            if (R.isNil(subVal)) {
              return [key, T.variable(T.randomNormal(paramShape))];
            } else {
              return [key, T.variable(T.tensor(subVal).reshape(paramShape))];
            }
          } else {
            return [key, SetOrInit(mainVal, subVal)];
          }
        };

        return R.fromPairs(R.map(ValMapping, keyMainValSubVal));
      };

      return SetOrInit(pipeParams, netParams);
    }
    /**
     * @param  {} samples
     * @param  {} numSamples=1
     */


    makePredict(samples, numSamples = 1) {
      const T = this.T,
            f = this.F,
            l = this.L;
      this.HyperParameters.Datasize = numSamples;
      const Pipeline = f.parameterAcquisition(this.BasePipeline, this.HyperParameters); // console.log(({Pipeline}));

      let pipeValue = {
        PipeInput: samples
      },
          traces = [],
          netParams = this.netParams;
      return T.tidy(() => {
        for (let layer of Pipeline) {
          let layerOutput = this.layer(pipeValue[layer.Input], layer, netParams[layer.Name]);
          pipeValue[layer.Name] = layerOutput[layer.Name];
          traces.push({
            [layer.Name]: layerOutput.trace
          });
        } // console.log({traces});


        let pipeOutput = pipeValue['PipeOutput'];
        let logProb = pipeOutput.sub(T.logSumExp(pipeOutput, 1, true));
        let predict = logProb.argMax(1);
        return {
          logProb,
          predict
        };
      });
    }
    /**
     * @param  {} sampleBatch
     * @param  {} labelBatch
     * @param  {} numSample
     */


    loss(batchSamples, batchLabels, numSample) {
      const T = this.T;
      let sampleTensor = T.tensor(batchSamples).reshape([numSample, -1]).asType('float32');
      let labelTensor = T.tensor(batchLabels).reshape([numSample, -1]);
      const {
        logProb
      } = this.makePredict(sampleTensor, numSample);
      const likelihood = logProb.neg().mul(labelTensor);
      const loss = likelihood.mean();
      return loss;
    }

    makeOptimizer(method = 'adam', args = [0.02]) {
      this.optimizer = this.T.train[method](...args);
      return this.optimizer;
    }
    /**
     * @param  {} SampleGeneratorFn
     * @param  {} batchSize
     * @param  {} numEpochs=2
     * @param  {} lr=0.01
     */


    async train(SampleGeneratorFn, numEpochs = 2, lr = 0.001) {
      const T = this.T,
            F = this.F,
            R = this.R;
      const start = new Date();
      let loss = [],
          averageLoss = [];

      if (!this.optimizer) {
        this.makeOptimizer();
      }

      let optimizer = this.optimizer;

      for (let epochIdx of F.range(numEpochs)) {
        if (this.logger.progress) {
          this.logger.progress({
            epochIdx,
            averageLoss,
            time: new Date().toISOString(),
            start: start.toISOString(),
            elapse: (new Date() - start) / 1000
          });
        }

        const sampleGenerator = SampleGeneratorFn();

        for await (let _ref of sampleGenerator) {
          let {
            idx,
            batchSize,
            data
          } = _ref;
          let [batchSamples, batchLabels] = data;
          optimizer.minimize(() => {
            let l = this.loss(batchSamples, batchLabels, batchSize);
            loss = [...loss, ...l.dataSync()];
            return l;
          });
        }

        averageLoss = [...averageLoss, R.mean(loss)];
        loss = [];
      }

      return new Promise((resolve, reject) => {
        resolve({
          averageLoss
        });
      });
    }

    async test(TestSampleGeneratorFn) {
      const T = this.T,
            F = this.F,
            R = this.R;
      const testSampleGenerator = TestSampleGeneratorFn();
      let testResult = T.zeros([1]);
      let testSize = 0;

      for await (let _ref2 of testSampleGenerator) {
        let {
          idx,
          batchSize,
          data
        } = _ref2;
        let [batchSamples, batchLabels] = data;
        let labelTensor = T.tensor(batchLabels).reshape([batchSize, -1]);
        let sampleTensor = T.tensor(batchSamples);
        let numClasses = labelTensor.shape[1];
        testSize += batchSize;
        const {
          predict
        } = this.makePredict(sampleTensor, batchSize);
        let onehotPredict = T.oneHot(predict, numClasses);
        onehotPredict.print();
        labelTensor.print();
        onehotPredict.mul(labelTensor).sum().print();
        testResult = testResult.add(onehotPredict.mul(labelTensor).sum());
      }

      let result = await testResult.data();
      let pass = result[0];
      let accuracy = pass / testSize;
      return {
        accuracy,
        pass
      };
    }

    async getParams(asObject = true) {
      const F = this.F,
            R = this.R;

      const getParams = async params => {
        if (F.isTensor(params)) {
          return Array.from((await params.data()));
        } else {
          let kVals = R.toPairs(params);
          let res = {};

          for (let [k, val] of kVals) {
            res[k] = await getParams(val);
          }

          return res;
        }
      };

      let params = await getParams(this.netParams);

      if (asObject) {
        return params;
      } else {
        return JSON.stringify(params);
      }
    }

    async getSavedParams() {
      let fileList = await this.storage.getFileList(this.saveModelDir);
      return fileList.map(fileName => fileName.replace(this.saveModelDir, ''));
    }

    async saveParams(fileName = 'save.model') {
      const params = await this.getParams();
      await this.storage.writeFile(this.saveModelDir + fileName, JSON.stringify(params));
      return params;
    }

    async loadParams(fileName, params = null) {
      if (!params) {
        let _params = await this.storage.readFile(this.saveModelDir + fileName);

        params = JSON.parse(_params);
      }

      this.netParams = this.setOrInitParams(this.BasePipeline, params);
      return await this.getParams(false);
    }

  }

  _exports.default = CausalNet;
});

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, Core) {
  "use strict";

  var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  Core = _interopRequireWildcard(Core);
  var _default = Core;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/datasets.js":
/*!*************************!*\
  !*** ./src/datasets.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.datasets */ "causal-net.datasets")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, Datasets) {
  "use strict";

  var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  Datasets = _interopRequireWildcard(Datasets);
  var _default = Datasets;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/ensemble.mixins.js":
/*!********************************!*\
  !*** ./src/ensemble.mixins.js ***!
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

  const EnsembleMixins = PipelineClass => class extends PipelineClass {
    async ensembleTest(TestSampleGeneratorFn, modelList) {
      const T = this.T,
            F = this.F,
            R = this.R;
      const testSampleGenerator = TestSampleGeneratorFn();
      let testResult = T.zeros([1]);
      let testSize = 0;

      for await (let _ref of testSampleGenerator) {
        let {
          idx,
          batchSize,
          data
        } = _ref;
        let [batchSamples, batchLabels] = data;
        let labelTensor = T.tensor(batchLabels).reshape([batchSize, -1]);
        let sampleTensor = T.tensor(batchSamples);
        let numClasses = labelTensor.shape[1];
        testSize += batchSize;
        const {
          predict
        } = await this.makeEnsemblePredict(modelList, sampleTensor, batchSize);
        let onehotPredict = T.oneHot(predict, numClasses);
        onehotPredict.print();
        labelTensor.print();
        onehotPredict.mul(labelTensor).sum().print();
        testResult = testResult.add(onehotPredict.mul(labelTensor).sum());
      }

      let result = await testResult.data();
      let pass = result[0];
      let accuracy = pass / testSize;
      return {
        accuracy,
        pass
      };
    }

    async makeEnsemblePredict(modelList, samples, numSamples = 1) {
      const T = this.T,
            f = this.F;
      this.HyperParameters.Datasize = numSamples;
      const Pipeline = f.parameterAcquisition(this.BasePipeline, this.HyperParameters);
      let pipeValue = {
        PipeInput: samples
      },
          traces = [],
          netParams = this.netParams;
      let probs = [];

      for (let model of modelList) {
        await this.loadParams(model);
        let {
          logProb
        } = T.tidy(() => {
          for (let layer of Pipeline) {
            let layerOutput = this.layer(pipeValue[layer.Input], layer, netParams[layer.Name]);
            pipeValue[layer.Name] = layerOutput[layer.Name];
            traces.push({
              [layer.Name]: layerOutput.trace
            });
          }

          console.log({
            traces
          });
          let pipeOutput = pipeValue['PipeOutput'];
          let logProb = pipeOutput.sub(T.logSumExp(pipeOutput, 1, true));
          let predict = logProb.argMax(1);
          return {
            logProb,
            predict
          };
        });
        logProb.print();
        probs.push(T.exp(logProb));
      }

      let meanProb = T.concat(probs).mean(0, true);
      meanProb.print();
      let ensemblePredict = meanProb.argMax(1);
      return {
        predict: ensemblePredict
      };
    }

  };

  var _default = EnsembleMixins;
  _exports.default = _default;
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

    isTensor(val) {
      // return val instanceof this&& 
      return val.shape !== undefined;
    }

    range(len) {
      return this.R.range(0, len);
    }

    isParameter(val) {
      const R = this.R;
      return R.is(Array)(val) && R.all(R.is(Number), val);
    }

    getPipeline(netConfig) {
      //TODO: make assertor
      return this.R.prop('Pipeline', netConfig);
    }

    getHyperParameter(netConfig) {
      //TODO: make assertor
      return this.R.prop('HyperParameters', netConfig);
    }

    getTraverse() {
      return R.curry(function (keys, item) {
        R.pipe.apply(null, R.map(R.prop, keys))(item);
      });
    }

    parameterAcquisition(pipelineItem, hyperParameters) {
      const R = this.R;

      function replaceIfMatch(value, hyperParameters) {
        if (R.is(String, value) && R.startsWith('$', value)) {
          const key = R.slice(1, Infinity, value);
          return R.prop(key, hyperParameters);
        }

        return value;
      }

      const doReplaceIfMatch = R.curry(replaceIfMatch)(R.__, hyperParameters);

      function replaceHyperParameter(pipelineItem) {
        if (R.is(Array, pipelineItem) || R.is(Object, pipelineItem)) {
          return R.map(replaceHyperParameter, pipelineItem);
        } else {
          return doReplaceIfMatch(pipelineItem);
        }
      }

      return replaceHyperParameter(pipelineItem);
    }

    isTensor(object) {
      return object.size !== undefined && object.shape !== undefined && object.dtype !== undefined;
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./utils */ "./src/utils.js"), __webpack_require__(/*! ./core */ "./src/core.js"), __webpack_require__(/*! ./log */ "./src/log.js"), __webpack_require__(/*! ./storage */ "./src/storage.js"), __webpack_require__(/*! ./memcache */ "./src/memcache.js"), __webpack_require__(/*! ./datasets */ "./src/datasets.js"), __webpack_require__(/*! ./causality */ "./src/causality.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _utils, _core, _log, _storage, _memcache, _datasets, _causality) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Utils", {
    enumerable: true,
    get: function () {
      return _utils.default;
    }
  });
  Object.defineProperty(_exports, "Preprocessing", {
    enumerable: true,
    get: function () {
      return _utils.default;
    }
  });
  Object.defineProperty(_exports, "Core", {
    enumerable: true,
    get: function () {
      return _core.default;
    }
  });
  Object.defineProperty(_exports, "Log", {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(_exports, "Storage", {
    enumerable: true,
    get: function () {
      return _storage.default;
    }
  });
  Object.defineProperty(_exports, "Memcache", {
    enumerable: true,
    get: function () {
      return _memcache.default;
    }
  });
  Object.defineProperty(_exports, "Datasets", {
    enumerable: true,
    get: function () {
      return _datasets.default;
    }
  });
  Object.defineProperty(_exports, "CausalNet", {
    enumerable: true,
    get: function () {
      return _causality.default;
    }
  });
  _utils = _interopRequireDefault(_utils);
  _core = _interopRequireDefault(_core);
  _log = _interopRequireDefault(_log);
  _storage = _interopRequireDefault(_storage);
  _memcache = _interopRequireDefault(_memcache);
  _datasets = _interopRequireDefault(_datasets);
  _causality = _interopRequireDefault(_causality);
});

/***/ }),

/***/ "./src/log.js":
/*!********************!*\
  !*** ./src/log.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.log */ "./packages/causality-log/dist/@causalNet/log.web.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, Log) {
  "use strict";

  var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  Log = _interopRequireWildcard(Log);
  var _default = Log;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/memcache.js":
/*!*************************!*\
  !*** ./src/memcache.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.memcache */ "causal-net.memcache")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, MemCache) {
  "use strict";

  var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  MemCache = _interopRequireWildcard(MemCache);
  var _default = MemCache;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.storage */ "causal-net.storage")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, Storage) {
  "use strict";

  var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  Storage = _interopRequireWildcard(Storage);
  var _default = Storage;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.utils */ "causal-net.utils")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, Utils) {
  "use strict";

  var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  Utils = _interopRequireWildcard(Utils);
  var _default = Utils;
  _exports.default = _default;
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

/***/ "causal-net.datasets":
/*!**************************************!*\
  !*** external "causal-net.datasets" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_datasets__;

/***/ }),

/***/ "causal-net.memcache":
/*!**************************************!*\
  !*** external "causal-net.memcache" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3BhY2thZ2VzL2NhdXNhbGl0eS1sb2cvZGlzdC9AY2F1c2FsTmV0L2xvZy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxpdHkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jb3JlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvZGF0YXNldHMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9lbnNlbWJsZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL2xvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL21lbWNhY2hlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5kYXRhc2V0c1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0IiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiRW5zZW1ibGVNaXhpbnMiLCJjb25zdHJ1Y3RvciIsIm5ldENvbmZpZyIsIm5ldFBhcmFtcyIsInN0b3JhZ2UiLCJGIiwiRnVuY3Rpb24iLCJSIiwiQ29yZUZ1bmN0aW9uIiwibG9nZ2VyIiwiY29uc29sZSIsImluZGV4REJTdG9yYWdlIiwic2F2ZU1vZGVsRGlyIiwiSHlwZXJQYXJhbWV0ZXJzIiwiZ2V0SHlwZXJQYXJhbWV0ZXIiLCJCYXNlUGlwZWxpbmUiLCJnZXRQaXBlbGluZSIsInNldE9ySW5pdFBhcmFtcyIsImZsYXR0ZW5QYXJhbXMiLCJMb2dnZXIiLCJwYXJhbXMiLCJNYXBWYWx1ZXMiLCJvYmpPckFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiRmxhdHRlbiIsInB2IiwiaXNUZW5zb3IiLCJmbGF0dGVuIiwicmVkdWNlIiwidiIsInJlcyIsImlzIiwibGF5ZXIiLCJ2YWx1ZSIsImxheWVyQ29uZmlndXJlIiwibGF5ZXJQYXJhbWV0ZXJzIiwiTmFtZSIsIlR5cGUiLCJQYXJhbWV0ZXJzIiwiRmxvdyIsImRlYnVnIiwiT3BzUnVubmVyIiwiYWRkSW5kZXgiLCJfXyIsInJlc3VsdCIsInRyYWNlIiwibm9kZSIsImlkeCIsIlBhcmFtZXRlciIsIlQiLCJPcCIsIkFyZ3MiLCJzaGFwZSIsInBpcGVsaW5lIiwicGlwZVBhcmFtcyIsImZyb21QYWlycyIsImZpbHRlciIsImsiLCJ1bmRlZmluZWQiLCJtYXAiLCJwIiwiU2V0T3JJbml0IiwibWFpblZhbHVlIiwic3ViVmFsIiwia2V5cyIsImtleU1haW5WYWxTdWJWYWwiLCJwcm9wIiwicHJvcE9yIiwiVmFsTWFwcGluZyIsImtleSIsIm1haW5WYWwiLCJpc1BhcmFtZXRlciIsInBhcmFtU2hhcGUiLCJpc05pbCIsInZhcmlhYmxlIiwicmFuZG9tTm9ybWFsIiwidGVuc29yIiwicmVzaGFwZSIsIm1ha2VQcmVkaWN0Iiwic2FtcGxlcyIsIm51bVNhbXBsZXMiLCJmIiwibCIsIkwiLCJEYXRhc2l6ZSIsIlBpcGVsaW5lIiwicGFyYW1ldGVyQWNxdWlzaXRpb24iLCJwaXBlVmFsdWUiLCJQaXBlSW5wdXQiLCJ0cmFjZXMiLCJ0aWR5IiwibGF5ZXJPdXRwdXQiLCJJbnB1dCIsInB1c2giLCJwaXBlT3V0cHV0IiwibG9nUHJvYiIsInN1YiIsImxvZ1N1bUV4cCIsInByZWRpY3QiLCJhcmdNYXgiLCJsb3NzIiwiYmF0Y2hTYW1wbGVzIiwiYmF0Y2hMYWJlbHMiLCJudW1TYW1wbGUiLCJzYW1wbGVUZW5zb3IiLCJhc1R5cGUiLCJsYWJlbFRlbnNvciIsImxpa2VsaWhvb2QiLCJuZWciLCJtdWwiLCJtZWFuIiwibWFrZU9wdGltaXplciIsIm1ldGhvZCIsImFyZ3MiLCJvcHRpbWl6ZXIiLCJ0cmFpbiIsIlNhbXBsZUdlbmVyYXRvckZuIiwibnVtRXBvY2hzIiwibHIiLCJzdGFydCIsIkRhdGUiLCJhdmVyYWdlTG9zcyIsImVwb2NoSWR4IiwicmFuZ2UiLCJwcm9ncmVzcyIsInRpbWUiLCJ0b0lTT1N0cmluZyIsImVsYXBzZSIsInNhbXBsZUdlbmVyYXRvciIsImJhdGNoU2l6ZSIsImRhdGEiLCJtaW5pbWl6ZSIsImRhdGFTeW5jIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXN0IiwiVGVzdFNhbXBsZUdlbmVyYXRvckZuIiwidGVzdFNhbXBsZUdlbmVyYXRvciIsInRlc3RSZXN1bHQiLCJ6ZXJvcyIsInRlc3RTaXplIiwibnVtQ2xhc3NlcyIsIm9uZWhvdFByZWRpY3QiLCJvbmVIb3QiLCJwcmludCIsInN1bSIsImFkZCIsInBhc3MiLCJhY2N1cmFjeSIsImdldFBhcmFtcyIsImFzT2JqZWN0IiwiZnJvbSIsImtWYWxzIiwidG9QYWlycyIsInZhbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRTYXZlZFBhcmFtcyIsImZpbGVMaXN0IiwiZ2V0RmlsZUxpc3QiLCJmaWxlTmFtZSIsInJlcGxhY2UiLCJzYXZlUGFyYW1zIiwid3JpdGVGaWxlIiwibG9hZFBhcmFtcyIsIl9wYXJhbXMiLCJyZWFkRmlsZSIsInBhcnNlIiwiQ29yZSIsIkRhdGFzZXRzIiwiUGlwZWxpbmVDbGFzcyIsImVuc2VtYmxlVGVzdCIsIm1vZGVsTGlzdCIsIm1ha2VFbnNlbWJsZVByZWRpY3QiLCJwcm9icyIsIm1vZGVsIiwibG9nIiwiZXhwIiwibWVhblByb2IiLCJjb25jYXQiLCJlbnNlbWJsZVByZWRpY3QiLCJCYXNlRnVuY3Rpb24iLCJsZW4iLCJhbGwiLCJOdW1iZXIiLCJnZXRUcmF2ZXJzZSIsImN1cnJ5IiwiaXRlbSIsInBpcGUiLCJhcHBseSIsInBpcGVsaW5lSXRlbSIsImh5cGVyUGFyYW1ldGVycyIsInJlcGxhY2VJZk1hdGNoIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsInNsaWNlIiwiSW5maW5pdHkiLCJkb1JlcGxhY2VJZk1hdGNoIiwicmVwbGFjZUh5cGVyUGFyYW1ldGVyIiwib2JqZWN0Iiwic2l6ZSIsImR0eXBlIiwiTG9nIiwiTWVtQ2FjaGUiLCJTdG9yYWdlIiwiVXRpbHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnR0FBZ0c7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsTUFBTSxZQUFZO0FBQ3JCLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QXpCOztBQUNBLGVBQVNPLHFCQUFULENBQStCUixZQUEvQixFQUE0QztBQUN4QyxZQUFHM0wsQ0FBQyxDQUFDMkIsRUFBRixDQUFLWCxLQUFMLEVBQVkySyxZQUFaLEtBQTZCM0wsQ0FBQyxDQUFDMkIsRUFBRixDQUFLVCxNQUFMLEVBQWF5SyxZQUFiLENBQWhDLEVBQTJEO0FBQ3ZELGlCQUFPM0wsQ0FBQyxDQUFDdUQsR0FBRixDQUFNNEkscUJBQU4sRUFBNkJSLFlBQTdCLENBQVA7QUFDSCxTQUZELE1BR0k7QUFDQSxpQkFBT08sZ0JBQWdCLENBQUNQLFlBQUQsQ0FBdkI7QUFDSDtBQUNKOztBQUNELGFBQU9RLHFCQUFxQixDQUFDUixZQUFELENBQTVCO0FBQ0g7O0FBRURySyxZQUFRLENBQUM4SyxNQUFELEVBQVE7QUFDWixhQUFPQSxNQUFNLENBQUNDLElBQVAsS0FBZ0IvSSxTQUFoQixJQUE2QjhJLE1BQU0sQ0FBQ3BKLEtBQVAsS0FBaUJNLFNBQTlDLElBQTJEOEksTUFBTSxDQUFDRSxLQUFQLEtBQWlCaEosU0FBbkY7QUFDSDs7QUF6RDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQ0RuQ2lKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkNBQUMsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQ0FBQyxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJDQUFDLEs7Ozs7Ozs7Ozs7Ozs7QUNEZiw2RDs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L3BpcGVsaW5lLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuZGF0YXNldHNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LmRhdGFzZXRzXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuZGF0YXNldHNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuZGF0YXNldHNcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfZGF0YXNldHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9IGVsc2Uge1xuICAgIHZhciBuZXdPYmogPSB7fTtcblxuICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IHt9O1xuXG4gICAgICAgICAgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5ld09iai5kZWZhdWx0ID0gb2JqO1xuICAgIHJldHVybiBuZXdPYmo7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Jhc2VMb2cuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9iYXNlTG9nLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0c10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4gIGNsYXNzIEJhc2VMb2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5BY2NlcHRlZExldmVscyA9IHtcbiAgICAgICAgZGVidWc6IDAsXG4gICAgICAgIGxvZzogMSxcbiAgICAgICAgd2FybmluZzogMixcbiAgICAgICAgZXJyb3I6IDNcbiAgICAgIH07XG4gICAgICB0aGlzLnJBY2NlcHRlZExldmVscyA9IHtcbiAgICAgICAgMDogJ2RlYnVnJyxcbiAgICAgICAgMTogJ2xvZycsXG4gICAgICAgIDI6ICd3YXJuaW5nJyxcbiAgICAgICAgMzogJ2Vycm9yJ1xuICAgICAgfTtcbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddO1xuICAgIH1cblxuICAgIHNldCBMZXZlbChsZXZlbCkge1xuICAgICAgaWYgKHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoYCR7bGV2ZWx9IG11c3QgYmUgb25lIG9mICR7T2JqZWN0LmtleXModGhpcy5BY2NlcHRlZExldmVscyl9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IExldmVsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuckFjY2VwdGVkTGV2ZWxzW3RoaXMubGV2ZWxdO1xuICAgIH1cblxuICB9XG5cbiAgX2V4cG9ydHMuZGVmYXVsdCA9IEJhc2VMb2c7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXJtTG9nICovIFwiLi9zcmMvdGVybUxvZy5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlTG9nICovIFwiLi9zcmMvYmFzZUxvZy5qc1wiKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMsIF90ZXJtTG9nLCBfYmFzZUxvZykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIkxvZ2dlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGVybUxvZy5kZWZhdWx0O1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJCYXNlTG9nXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9iYXNlTG9nLmRlZmF1bHQ7XG4gICAgfVxuICB9KTtcbiAgX3Rlcm1Mb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXJtTG9nKTtcbiAgX2Jhc2VMb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlTG9nKTtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wcmV0dHlKc29uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcHJldHR5SnNvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICAvL29yaWdpbiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2x1Y3lnaWxiZXJ0L2pzb24tZGlzcGxheS9ibG9iL21hc3Rlci9qc29uLWRpc3BsYXkuanNcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE3IEx1Y3kgR2lsYmVydFxuICBjbGFzcyBKc29uVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc3RhdGljIEpTT05EaXNwbGF5KGpzb24sIG9wZW5MZXZlbHNBcmcsIHN0eWxlT3B0aW9uc0FyZykge1xuICAgICAgdmFyIERFRkFVTFRfU1RZTEVfT1BUSU9OUyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHRhZzogJ3ByZScsXG4gICAgICAgICAgc3R5bGU6ICdwYWRkaW5nOiA1cHg7IGZvbnQtc2l6ZTogMXJlbTsnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlQ29udGFpbmVyOiB7XG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICBzdHlsZTogJ21hcmdpbi1ib3R0b206IDNweDsnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXI7J1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZVRleHQ6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgb3BlbkJ1dHRvbjoge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW46IDBweCA3cHggMHB4IDJweDsgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAnICsgJ2JvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjazsnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRzQ29udGFpbmVyOiB7XG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICBzdHlsZTogJ3BhZGRpbmctbGVmdDogMThweDsnXG4gICAgICAgIH0sXG4gICAgICAgIGtleVZhbHVlUGFpcjoge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDJweDsnXG4gICAgICAgIH0sXG4gICAgICAgIGtleToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGRhcmtibHVlOydcbiAgICAgICAgfSxcbiAgICAgICAgc3ltYm9sVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBkYXJrZ3JlZW47J1xuICAgICAgICB9LFxuICAgICAgICBzdHJpbmdWYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGNyaW1zb247J1xuICAgICAgICB9LFxuICAgICAgICBudW1iZXJWYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGJsdWU7J1xuICAgICAgICB9LFxuICAgICAgICBib29sZWFuVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBibHVlOydcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbFZhbHVlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjb2xvcjogYmx1ZTsnXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgb3BlbkxldmVscyA9IGlzTmFOKHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpKSA/IEluZmluaXR5IDogcGFyc2VJbnQob3BlbkxldmVsc0FyZyk7XG4gICAgICB2YXIgc3R5bGVPcHRpb25zID0gdHlwZW9mIHN0eWxlT3B0aW9uc0FyZyA9PT0gJ29iamVjdCcgPyBtZXJnZVN0eWxlT3B0aW9ucyhERUZBVUxUX1NUWUxFX09QVElPTlMsIHN0eWxlT3B0aW9uc0FyZykgOiBERUZBVUxUX1NUWUxFX09QVElPTlM7XG5cbiAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcblxuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnJvb3QudGFnKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnJvb3Quc3R5bGU7XG5cbiAgICAgICAgaWYgKGpzb24gPT09IG51bGwgfHwganNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHZvaWRFbGVtZW50ID0gZ2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh2b2lkRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICB2YXIgZGF0ZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhciBub25FeHBhbmRhYmxlRWxlbWVudCA9IGdldFZhbHVlKGpzb24pO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9uRXhwYW5kYWJsZUVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0aXRsZSA9IEFycmF5LmlzQXJyYXkoanNvbikgPyAnQXJyYXlbJyArIGpzb24ubGVuZ3RoICsgJ10nIDogJ09iamVjdCc7XG4gICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gb3BlbkxldmVscyA8IDE7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChnZXRUaXRsZSh0aXRsZSwgbnVsbCwgdGhpc0xldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCAxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIGluZGV4KSB7XG4gICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgICAgdmFyIG5leHRMZXZlbElzQ2xvc2VkID0gaW5kZXggKyAxID4gb3BlbkxldmVscztcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRlbnRzQ29udGFpbmVyKHRoaXNMZXZlbElzQ2xvc2VkKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnQXJyYXlbJyArIGpzb25ba2V5XS5sZW5ndGggKyAnXScsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSA9PT0gbnVsbCB8fCBqc29uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIG51bGwpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0udG9JU09TdHJpbmcoKSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnT2JqZWN0Jywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhqc29uKS5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoc3ltYm9sLnRvU3RyaW5nKCksIGpzb25bc3ltYm9sXSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0VGl0bGUodGl0bGVUZXh0LCBvcHRpb25hbEtleSwgbGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICB2YXIgY3VycmVudGx5Q2xvc2VkID0gbGV2ZWxJc0Nsb3NlZDtcbiAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIuc3R5bGU7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAndGl0bGVDb250YWluZXInKTtcbiAgICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICAgIHZhciB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZS50YWcpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZS5zdHlsZTtcbiAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZChnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpKTtcblxuICAgICAgICBpZiAob3B0aW9uYWxLZXkpIHtcbiAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkob3B0aW9uYWxLZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuXG4gICAgICAgIHRpdGxlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBvcGVuQnV0dG9uID0gdGl0bGVFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgb2JqZWN0Q29udGVudHMuc3R5bGUuZGlzcGxheSA9IGN1cnJlbnRseUNsb3NlZCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgb3BlbkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50bHlDbG9zZWQgPyAncm90YXRlKDkwZGVnKScgOiAncm90YXRlKDBkZWcpJztcbiAgICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm9wZW5CdXR0b24udGFnKTtcbiAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm9wZW5CdXR0b24uc3R5bGU7XG4gICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0Q29udGVudHNDb250YWluZXIoaXNDbG9zZWQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ2NvbnRlbnRzQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNDbG9zZWQgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHBhaXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnRhZyk7XG4gICAgICAgIHBhaXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnN0eWxlO1xuICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldFZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiBwYWlyRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0S2V5KG5hbWUpIHtcbiAgICAgICAgdmFyIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXkudGFnKTtcbiAgICAgICAga2V5RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleS5zdHlsZTtcbiAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lICsgJzogJykpO1xuICAgICAgICByZXR1cm4ga2V5RWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgICAgdmFyIG51bGxUeXBlID0gJ29iamVjdCc7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCInICsgdmFsdWUgKyAnXCInKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS50YWcpO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIG51bGxUeXBlOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udWxsVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgICB2YXIgbWVyZ2VkID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgbWVyZ2VkW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0c1trZXldLCBvdmVycmlkZXNba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVuZGVyKCk7XG4gICAgfVxuXG4gIH1cblxuICBfZXhwb3J0cy5kZWZhdWx0ID0gSnNvblZpZXc7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2cuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VMb2cgKi8gXCIuL3NyYy9iYXNlTG9nLmpzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Rlcm1Mb2cubWl4aW5zLm5vZGUgKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Rlcm1Mb2cubWl4aW5zLndlYiAqLyBcIi4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC51dGlscyAqLyBcImNhdXNhbC1uZXQudXRpbHNcIildLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzLCBfYmFzZUxvZywgX3Rlcm1Mb2dNaXhpbnMsIF90ZXJtTG9nTWl4aW5zMiwgX2NhdXNhbE5ldCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgX2Jhc2VMb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlTG9nKTtcbiAgX3Rlcm1Mb2dNaXhpbnMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXJtTG9nTWl4aW5zKTtcbiAgX3Rlcm1Mb2dNaXhpbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVybUxvZ01peGluczIpO1xuXG4gIGNsYXNzIFRlcm1Mb2cgZXh0ZW5kcyBfY2F1c2FsTmV0LlBsYXRmb3JtLm1peFdpdGgoX2Jhc2VMb2cuZGVmYXVsdCwge1xuICAgICdub2RlJzogW190ZXJtTG9nTWl4aW5zLmRlZmF1bHRdLFxuICAgICd3ZWInOiBbX3Rlcm1Mb2dNaXhpbnMyLmRlZmF1bHRdXG4gIH0pIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gIH1cblxuICBjb25zdCBMb2dnZXIgPSBuZXcgVGVybUxvZygpO1xuICB2YXIgX2RlZmF1bHQgPSBMb2dnZXI7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICBjb25zdCBMb2dOb2RlTWl4aW5zID0gTG9nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzcyB7XG4gICAgY29ubmVjdChjaGFubmVsKSB7Ly9ub3RoaW5nXG4gICAgfVxuXG4gICAgbG9nKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2xvZyddKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzY3JvbGxCb3R0b20oKSB7Ly9ub3RoaW5nXG4gICAgfVxuXG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2UpIHt9XG5cbiAgICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cblxuICB9O1xuXG4gIHZhciBfZGVmYXVsdCA9IExvZ05vZGVNaXhpbnM7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wcmV0dHlKc29uICovIFwiLi9zcmMvcHJldHR5SnNvbi5qc1wiKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMsIF9wcmV0dHlKc29uKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIik7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBfcHJldHR5SnNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXR0eUpzb24pO1xuXG4gIGNvbnN0IFdlYk5vZGVNaXhpbnMgPSBMb2dDbGFzcyA9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNzIHtcbiAgICBjb25uZWN0KGRvY3VtZW50RWwgPSBudWxsKSB7XG4gICAgICBkb2N1bWVudEVsID0gZG9jdW1lbnRFbCB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBcImxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcIjtcbiAgICAgIGRvY3VtZW50RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB0aGlzLmZyYW1lRWwgPSBkb2N1bWVudEVsO1xuICAgICAgdGhpcy5sb2dnZXJFbCA9IGRvY3VtZW50RWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1bFwiKVswXTtcbiAgICB9XG5cbiAgICBzY3JvbGxCb3R0b20oZWxlbWVudCA9IG51bGwpIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuZnJhbWVFbDtcbiAgICAgIGNvbnNvbGUubG9nKCdzY29sbCBib3R0b20gJyArIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgZWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIHByb2dyZXNzKHByb2Nlc3NNZXNzYWdlKSB7XG4gICAgICAvLyBsZXQgbm9kZSA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaTpudGgtbGFzdC1vZi10eXBlKDEpXCIpO1xuICAgICAgbGV0IExJTm9kZXMgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XG4gICAgICBsZXQgbm9kZSA9IExJTm9kZXNbTElOb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKCFub2RlIHx8IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9nZ2VyLXByb2dyZXNzXCIpKSB7XG4gICAgICAgIC8vY3JlYXRlIG5ld1xuICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJsb2dnZXItcHJvZ3Jlc3NcIik7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBqc29uTm9kZSA9IF9wcmV0dHlKc29uLmRlZmF1bHQuSlNPTkRpc3BsYXkocHJvY2Vzc01lc3NhZ2UpO1xuXG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICB9XG5cbiAgICBsb2cobWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snbG9nJ10pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5sb2dnZXJFbCB8fCAhdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSAnYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7JztcblxuICAgICAgbGV0IGpzb25Ob2RlID0gX3ByZXR0eUpzb24uZGVmYXVsdC5KU09ORGlzcGxheShtZXNzYWdlKTtcblxuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZGVidWcobWVzc2FnZSkge1xuICAgICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gLy9ubyBzaG93IG9uIHdlYiBzY3JlZW47ICAgICAgICBcblxuXG4gICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICAgIH1cblxuICB9O1xuXG4gIHZhciBfZGVmYXVsdCA9IFdlYk5vZGVNaXhpbnM7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMDpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogbXVsdGkgLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NyYy9pbmRleC5qcyAqL1wiLi9zcmMvaW5kZXguanNcIik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC51dGlsc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OTNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZRR0poWW1Wc0wzSjFiblJwYldVdmFHVnNjR1Z5Y3k5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2TGk5emNtTXZZbUZ6WlV4dlp5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyeHZaeTh1TDNOeVl5OXdjbVYwZEhsS2MyOXVMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiRzluTHk0dmMzSmpMM1JsY20xTWIyY3Vhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2TGk5emNtTXZkR1Z5YlV4dlp5NXRhWGhwYm5NdWJtOWtaUzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk4dUwzTnlZeTkwWlhKdFRHOW5MbTFwZUdsdWN5NTNaV0l1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdlpYaDBaWEp1WVd3Z1hDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSWlYU3dpYm1GdFpYTWlPbHNpUW1GelpVeHZaeUlzSW1OdmJuTjBjblZqZEc5eUlpd2lRV05qWlhCMFpXUk1aWFpsYkhNaUxDSmtaV0oxWnlJc0lteHZaeUlzSW5kaGNtNXBibWNpTENKbGNuSnZjaUlzSW5KQlkyTmxjSFJsWkV4bGRtVnNjeUlzSW14bGRtVnNJaXdpVEdWMlpXd2lMQ0oxYm1SbFptbHVaV1FpTENKRmNuSnZjaUlzSWs5aWFtVmpkQ0lzSW10bGVYTWlMQ0pLYzI5dVZtbGxkeUlzSWtwVFQwNUVhWE53YkdGNUlpd2lhbk52YmlJc0ltOXdaVzVNWlhabGJITkJjbWNpTENKemRIbHNaVTl3ZEdsdmJuTkJjbWNpTENKRVJVWkJWVXhVWDFOVVdVeEZYMDlRVkVsUFRsTWlMQ0p5YjI5MElpd2lkR0ZuSWl3aWMzUjViR1VpTENKMGFYUnNaVU52Ym5SaGFXNWxjaUlzSW5ScGRHeGxJaXdpZEdsMGJHVlVaWGgwSWl3aWIzQmxia0oxZEhSdmJpSXNJbU52Ym5SbGJuUnpRMjl1ZEdGcGJtVnlJaXdpYTJWNVZtRnNkV1ZRWVdseUlpd2lhMlY1SWl3aWMzbHRZbTlzVm1Gc2RXVWlMQ0p6ZEhKcGJtZFdZV3gxWlNJc0ltNTFiV0psY2xaaGJIVmxJaXdpWW05dmJHVmhibFpoYkhWbElpd2liblZzYkZaaGJIVmxJaXdpYjNCbGJreGxkbVZzY3lJc0ltbHpUbUZPSWl3aWNHRnljMlZKYm5RaUxDSkpibVpwYm1sMGVTSXNJbk4wZVd4bFQzQjBhVzl1Y3lJc0ltMWxjbWRsVTNSNWJHVlBjSFJwYjI1eklpd2lZWE56YVdkdUlpd2lkR0Z5WjJWMElpd2lWSGx3WlVWeWNtOXlJaXdpZEc4aUxDSnBibVJsZUNJc0ltRnlaM1Z0Wlc1MGN5SXNJbXhsYm1kMGFDSXNJbTVsZUhSVGIzVnlZMlVpTENKdVpYaDBTMlY1SWl3aWNISnZkRzkwZVhCbElpd2lhR0Z6VDNkdVVISnZjR1Z5ZEhraUxDSmpZV3hzSWl3aWNtVnVaR1Z5SWl3aVpXeGxiV1Z1ZENJc0ltUnZZM1Z0Wlc1MElpd2lZM0psWVhSbFJXeGxiV1Z1ZENJc0ltTnpjMVJsZUhRaUxDSjJiMmxrUld4bGJXVnVkQ0lzSW1kbGRGWmhiSFZsSWl3aVlYQndaVzVrUTJocGJHUWlMQ0pFWVhSbElpd2laR0YwWlVWc1pXMWxiblFpTENKMGIwbFRUMU4wY21sdVp5SXNJbTV2YmtWNGNHRnVaR0ZpYkdWRmJHVnRaVzUwSWl3aVFYSnlZWGtpTENKcGMwRnljbUY1SWl3aWRHaHBjMHhsZG1Wc1NYTkRiRzl6WldRaUxDSm5aWFJVYVhSc1pTSXNJbU52Ym5abGNuUktjMjl1Vkc5RmJHVnRaVzUwY3lJc0ltNWxlSFJNWlhabGJFbHpRMnh2YzJWa0lpd2lZMjl1ZEdGcGJtVnlJaXdpWjJWMFEyOXVkR1Z1ZEhORGIyNTBZV2x1WlhJaUxDSm5aWFJUZEdGdVpHRnlaRkJoYVhJaUxDSm5aWFJQZDI1UWNtOXdaWEowZVZONWJXSnZiSE1pTENKbWIzSkZZV05vSWl3aWMzbHRZbTlzSWl3aWRHOVRkSEpwYm1jaUxDSnZjSFJwYjI1aGJFdGxlU0lzSW14bGRtVnNTWE5EYkc5elpXUWlMQ0pqZFhKeVpXNTBiSGxEYkc5elpXUWlMQ0pqYjI1MFlXbHVaWEpGYkdWdFpXNTBJaXdpYzJWMFFYUjBjbWxpZFhSbElpd2lkR1Y0ZEVWc1pXMWxiblFpTENKMGFYUnNaVVZzWlcxbGJuUWlMQ0puWlhSUGNHVnVRblYwZEc5dUlpd2laMlYwUzJWNUlpd2lZM0psWVhSbFZHVjRkRTV2WkdVaUxDSnZibU5zYVdOcklpd2labWx5YzNSRGFHbHNaQ0lzSW05aWFtVmpkRU52Ym5SbGJuUnpJaXdpY0dGeVpXNTBUbTlrWlNJc0ltNWxlSFJUYVdKc2FXNW5JaXdpWkdsemNHeGhlU0lzSW5SeVlXNXpabTl5YlNJc0ltSjFkSFJ2YmtWc1pXMWxiblFpTENKcGMwTnNiM05sWkNJc0luWmhiSFZsSWl3aWNHRnBja1ZzWlcxbGJuUWlMQ0p1WVcxbElpd2lhMlY1Uld4bGJXVnVkQ0lzSW5aaGJIVmxSV3hsYldWdWRDSXNJbTUxYkd4VWVYQmxJaXdpWkdWbVlYVnNkSE1pTENKdmRtVnljbWxrWlhNaUxDSnRaWEpuWldRaUxDSlVaWEp0VEc5bklpd2lVR3hoZEdadmNtMGlMQ0p0YVhoWGFYUm9JaXdpVEc5blRtOWtaVTFwZUdsdWN5SXNJbGRsWWs1dlpHVk5hWGhwYm5NaUxDSk1iMmRuWlhJaUxDSk1iMmREYkdGemN5SXNJbU52Ym01bFkzUWlMQ0pqYUdGdWJtVnNJaXdpYldWemMyRm5aU0lzSW1OdmJuTnZiR1VpTENKelkzSnZiR3hDYjNSMGIyMGlMQ0p3Y205bmNtVnpjeUlzSW5CeWIyTmxjM05OWlhOellXZGxJaXdpWkc5amRXMWxiblJGYkNJc0ltSnZaSGtpTENKdWIyUmxJaXdpWm5KaGJXVkZiQ0lzSW14dloyZGxja1ZzSWl3aVoyVjBSV3hsYldWdWRITkNlVlJoWjA1aGJXVWlMQ0p6WTNKdmJHeElaV2xuYUhRaUxDSmpiR2xsYm5SSVpXbG5hSFFpTENKelkzSnZiR3hVYjNBaUxDSk1TVTV2WkdWeklpd2lZMnhoYzNOTWFYTjBJaXdpWTI5dWRHRnBibk1pTENKaFpHUWlMQ0pxYzI5dVRtOWtaU0lzSW1SaGRHVWlMQ0pwYm01bGNraFVUVXdpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCTUVNc1owTkJRV2RETzBGQlF6RkZPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVhkRUxHdENRVUZyUWp0QlFVTXhSVHRCUVVOQkxIbEVRVUZwUkN4alFVRmpPMEZCUXk5RU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFJFRkJlVU1zYVVOQlFXbERPMEZCUXpGRkxIZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdEJRVU55U1R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdPenM3T3pzN096czdRVU5zUmtFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4M1F6czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVTk9aU3hSUVVGTlFTeFBRVUZPTEVOQlFXRTdRVUZEZUVKRExHVkJRVmNzUjBGQlJUdEJRVU5VTEZkQlFVdERMR05CUVV3c1IwRkJjMEk3UVVGQlEwTXNZVUZCU3l4RlFVRkZMRU5CUVZJN1FVRkJWME1zVjBGQlJ5eEZRVUZETEVOQlFXWTdRVUZCYTBKRExHVkJRVThzUlVGQlF5eERRVUV4UWp0QlFVRTJRa01zWVVGQlN5eEZRVUZGTzBGQlFYQkRMRTlCUVhSQ08wRkJRMEVzVjBGQlMwTXNaVUZCVEN4SFFVRjFRanRCUVVGRExGZEJRVVVzVDBGQlNEdEJRVUZaTEZkQlFVY3NTMEZCWmp0QlFVRnpRaXhYUVVGSExGTkJRWHBDTzBGQlFXOURMRmRCUVVjN1FVRkJka01zVDBGQmRrSTdRVUZEUVN4WFFVRkxReXhMUVVGTUxFZEJRV0VzUzBGQlMwNHNZMEZCVEN4RFFVRnZRaXhQUVVGd1FpeERRVUZpTzBGQlEwZzdPMEZCUTBRc1VVRkJTVThzUzBGQlNpeERRVUZWUkN4TFFVRldMRVZCUVdkQ08wRkJRMW9zVlVGQlJ5eExRVUZMVGl4alFVRk1MRU5CUVc5Q1RTeExRVUZ3UWl4TlFVRTJRa1VzVTBGQmFFTXNSVUZCTUVNN1FVRkRkRU1zWVVGQlMwWXNTMEZCVEN4SFFVRmhMRXRCUVV0T0xHTkJRVXdzUTBGQmIwSk5MRXRCUVhCQ0xFTkJRV0k3UVVGRFNDeFBRVVpFTEUxQlIwazdRVUZEUVN4alFVRk5SeXhMUVVGTExFTkJRVVVzUjBGQlJVZ3NTMEZCVFN4dFFrRkJhMEpKTEUxQlFVMHNRMEZCUTBNc1NVRkJVQ3hEUVVGWkxFdEJRVXRZTEdOQlFXcENMRU5CUVdsRExFVkJRVGRFTEVOQlFWZzdRVUZEU0R0QlFVTktPenRCUVVORUxGRkJRVWxQTEV0QlFVb3NSMEZCVnp0QlFVTlFMR0ZCUVU4c1MwRkJTMFlzWlVGQlRDeERRVUZ4UWl4TFFVRkxReXhMUVVFeFFpeERRVUZRTzBGQlEwZzdPMEZCYUVKMVFqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRFFUVkNPMEZCUTBFN1FVRkRaU3hSUVVGTlRTeFJRVUZPTEVOQlFXTTdRVUZEZWtKaUxHVkJRVmNzUjBGQlJTeERRVU5hT3p0QlFVTkVMRmRCUVU5akxGZEJRVkFzUTBGQmJVSkRMRWxCUVc1Q0xFVkJRWGxDUXl4aFFVRjZRaXhGUVVGM1EwTXNaVUZCZUVNc1JVRkJlVVE3UVVGRGNrUXNWVUZCU1VNc2NVSkJRWEZDTEVkQlFVYzdRVUZETVVKRExGbEJRVWtzUlVGQlJUdEJRVUZGUXl4aFFVRkhMRVZCUVVVc1MwRkJVRHRCUVVGalF5eGxRVUZMTEVWQlFVVTdRVUZCY2tJc1UwRkViMEk3UVVGRk1VSkRMSE5DUVVGakxFVkJRVVU3UVVGQlJVWXNZVUZCUnl4RlFVRkZMRXRCUVZBN1FVRkJZME1zWlVGQlN5eEZRVUZGTzBGQlFYSkNMRk5CUmxVN1FVRkhNVUpGTEdGQlFVc3NSVUZCUlR0QlFVRkZTQ3hoUVVGSExFVkJRVVVzVFVGQlVEdEJRVUZsUXl4bFFVRkxMRVZCUVVVN1FVRkJkRUlzVTBGSWJVSTdRVUZKTVVKSExHbENRVUZUTEVWQlFVVTdRVUZCUlVvc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ0xGTkJTbVU3UVVGTE1VSkpMR3RDUVVGVkxFVkJRVVU3UVVGRFZrd3NZVUZCUnl4RlFVRkZMRTFCUkVzN1FVRkZWa01zWlVGQlN5eEZRVUZGTEhkR1FVTkJPMEZCU0Vjc1UwRk1ZenRCUVZVeFFrc3NlVUpCUVdsQ0xFVkJRVVU3UVVGQlJVNHNZVUZCUnl4RlFVRkZMRXRCUVZBN1FVRkJZME1zWlVGQlN5eEZRVUZGTzBGQlFYSkNMRk5CVms4N1FVRlhNVUpOTEc5Q1FVRlpMRVZCUVVVN1FVRkJSVkFzWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTEZOQldGazdRVUZaTVVKUExGZEJRVWNzUlVGQlJUdEJRVUZGVWl4aFFVRkhMRVZCUVVVc1RVRkJVRHRCUVVGbFF5eGxRVUZMTEVWQlFVVTdRVUZCZEVJc1UwRmFjVUk3UVVGaE1VSlJMRzFDUVVGWExFVkJRVVU3UVVGQlJWUXNZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNMRk5CWW1FN1FVRmpNVUpUTEcxQ1FVRlhMRVZCUVVVN1FVRkJSVllzWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTEZOQlpHRTdRVUZsTVVKVkxHMUNRVUZYTEVWQlFVVTdRVUZCUlZnc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ0xGTkJabUU3UVVGblFqRkNWeXh2UWtGQldTeEZRVUZGTzBGQlFVVmFMR0ZCUVVjc1JVRkJSU3hOUVVGUU8wRkJRV1ZETEdWQlFVc3NSVUZCUlR0QlFVRjBRaXhUUVdoQ1dUdEJRV2xDTVVKWkxHbENRVUZUTEVWQlFVVTdRVUZCUldJc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ08wRkJha0psTEU5QlFUVkNPMEZCYlVKQkxGVkJRVWxoTEZWQlFWVXNSMEZCUjBNc1MwRkJTeXhEUVVGRFF5eFJRVUZSTEVOQlFVTndRaXhoUVVGRUxFTkJRVlFzUTBGQlRDeEhRVUZwUTNGQ0xGRkJRV3BETEVkQlFUUkRSQ3hSUVVGUkxFTkJRVU53UWl4aFFVRkVMRU5CUVhKRk8wRkJRMEVzVlVGQlNYTkNMRmxCUVZrc1IwRkJSeXhQUVVGUGNrSXNaVUZCVUN4TFFVRXlRaXhSUVVFelFpeEhRVU5GYzBJc2FVSkJRV2xDTEVOQlFVTnlRaXh4UWtGQlJDeEZRVUYzUWtRc1pVRkJlRUlzUTBGRWJrSXNSMEZGUlVNc2NVSkJSbkpDT3p0QlFVbEJMRlZCUVVrc1QwRkJUMUFzVFVGQlRTeERRVUZETmtJc1RVRkJaQ3hKUVVGM1FpeFZRVUUxUWl4RlFVRjNRenRCUVVOMFF6ZENMR05CUVUwc1EwRkJRelpDTEUxQlFWQXNSMEZCWjBJc1ZVRkJVME1zVFVGQlZDeEZRVUZwUWp0QlFVTXZRaXhqUVVGSlFTeE5RVUZOTEVsQlFVa3NTVUZCWkN4RlFVRnZRanRCUVVOc1FpeHJRa0ZCVFN4SlFVRkpReXhUUVVGS0xFTkJRV01zTkVOQlFXUXNRMEZCVGp0QlFVTkVPenRCUVVWRUxHTkJRVWxETEVWQlFVVXNSMEZCUjJoRExFMUJRVTBzUTBGQlF6aENMRTFCUVVRc1EwRkJaanM3UVVGRlFTeGxRVUZMTEVsQlFVbEhMRXRCUVVzc1IwRkJSeXhEUVVGcVFpeEZRVUZ2UWtFc1MwRkJTeXhIUVVGSFF5eFRRVUZUTEVOQlFVTkRMRTFCUVhSRExFVkJRVGhEUml4TFFVRkxMRVZCUVc1RUxFVkJRWFZFTzBGQlEzSkVMR2RDUVVGSlJ5eFZRVUZWTEVkQlFVZEdMRk5CUVZNc1EwRkJRMFFzUzBGQlJDeERRVUV4UWpzN1FVRkZRU3huUWtGQlNVY3NWVUZCVlN4SlFVRkpMRWxCUVd4Q0xFVkJRWGRDTzBGQlEzUkNMRzFDUVVGTExFbEJRVWxETEU5QlFWUXNTVUZCYjBKRUxGVkJRWEJDTEVWQlFXZERPMEZCUXpsQ0xHOUNRVUZKY0VNc1RVRkJUU3hEUVVGRGMwTXNVMEZCVUN4RFFVRnBRa01zWTBGQmFrSXNRMEZCWjBORExFbEJRV2hETEVOQlFYRkRTaXhWUVVGeVF5eEZRVUZwUkVNc1QwRkJha1FzUTBGQlNpeEZRVUVyUkR0QlFVTTNSRXdzYjBKQlFVVXNRMEZCUTBzc1QwRkJSQ3hEUVVGR0xFZEJRV05FTEZWQlFWVXNRMEZCUTBNc1QwRkJSQ3hEUVVGNFFqdEJRVU5FTzBGQlEwWTdRVUZEUmp0QlFVTkdPenRCUVVORUxHbENRVUZQVEN4RlFVRlFPMEZCUTBRc1UwRnVRa1E3UVVGdlFrUTdPMEZCUlVRc1pVRkJVMU1zVFVGQlZDeEhRVUZyUWp0QlFVTm9RaXhaUVVGSlF5eFBRVUZQTEVkQlFVZERMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlEyNUNMRWxCUVdJc1EwRkJhMEpETEVkQlFYcERMRU5CUVdRN1FVRkRRV2xETEdWQlFVOHNRMEZCUTJoRExFdEJRVklzUTBGQlkyMURMRTlCUVdRc1IwRkJkMEpzUWl4WlFVRlpMRU5CUVVOdVFpeEpRVUZpTEVOQlFXdENSU3hMUVVFeFF6czdRVUZGUVN4WlFVRkpUaXhKUVVGSkxFdEJRVXNzU1VGQlZDeEpRVUZwUWtFc1NVRkJTU3hMUVVGTFRpeFRRVUU1UWl4RlFVRjVRenRCUVVOMlF5eGpRVUZKWjBRc1YwRkJWeXhIUVVGSFF5eFJRVUZSTEVOQlFVTXNTVUZCUkN4RFFVRXhRanRCUVVOQlRDeHBRa0ZCVHl4RFFVRkRUU3hYUVVGU0xFTkJRVzlDUml4WFFVRndRanRCUVVORUxGTkJTRVFzVFVGSFR5eEpRVUZKTVVNc1NVRkJTU3haUVVGWk5rTXNTVUZCY0VJc1JVRkJNRUk3UVVGREwwSXNZMEZCU1VNc1YwRkJWeXhIUVVGSFNDeFJRVUZSTEVOQlFVTXpReXhKUVVGSkxFTkJRVU1yUXl4WFFVRk1MRVZCUVVRc1EwRkJNVUk3UVVGRFFWUXNhVUpCUVU4c1EwRkJRMDBzVjBGQlVpeERRVUZ2UWtVc1YwRkJjRUk3UVVGRFJDeFRRVWhOTEUxQlIwRXNTVUZCU1N4UFFVRlBPVU1zU1VGQlVDeExRVUZuUWl4UlFVRndRaXhGUVVFNFFqdEJRVU51UXl4alFVRkpaMFFzYjBKQlFXOUNMRWRCUVVkTUxGRkJRVkVzUTBGQlF6TkRMRWxCUVVRc1EwRkJia003UVVGRFFYTkRMR2xDUVVGUExFTkJRVU5OTEZkQlFWSXNRMEZCYjBKSkxHOUNRVUZ3UWp0QlFVTkVMRk5CU0Uwc1RVRkhRVHRCUVVOTUxHTkJRVWw0UXl4TFFVRkxMRWRCUVVkNVF5eExRVUZMTEVOQlFVTkRMRTlCUVU0c1EwRkJZMnhFTEVsQlFXUXNTVUZCYzBJc1YwRkJWMEVzU1VGQlNTeERRVUZESzBJc1RVRkJhRUlzUjBGQmVVSXNSMEZCTDBNc1IwRkJjVVFzVVVGQmFrVTdRVUZEUVN4alFVRkpiMElzYVVKQlFXbENMRWRCUVVkb1F5eFZRVUZWTEVkQlFVY3NRMEZCY2tNN1FVRkRRVzFDTEdsQ1FVRlBMRU5CUVVOTkxGZEJRVklzUTBGQmIwSlJMRkZCUVZFc1EwRkJRelZETEV0QlFVUXNSVUZCVVN4SlFVRlNMRVZCUVdNeVF5eHBRa0ZCWkN4RFFVRTFRanRCUVVOQllpeHBRa0ZCVHl4RFFVRkRUU3hYUVVGU0xFTkJRVzlDVXl4eFFrRkJjVUlzUTBGQlEzSkVMRWxCUVVRc1JVRkJUeXhEUVVGUUxFTkJRWHBETzBGQlEwUTdPMEZCUlVRc1pVRkJUM05ETEU5QlFWQTdRVUZEUkRzN1FVRkZSQ3hsUVVGVFpTeHhRa0ZCVkN4RFFVRXJRbkpFTEVsQlFTOUNMRVZCUVhGRE5rSXNTMEZCY2tNc1JVRkJORU03UVVGRE1VTXNXVUZCU1hOQ0xHbENRVUZwUWl4SFFVRkhkRUlzUzBGQlN5eEhRVUZIVml4VlFVRm9RenRCUVVOQkxGbEJRVWx0UXl4cFFrRkJhVUlzUjBGQlIzcENMRXRCUVVzc1IwRkJSeXhEUVVGU0xFZEJRVmxXTEZWQlFYQkRPMEZCUTBFc1dVRkJTVzlETEZOQlFWTXNSMEZCUjBNc2IwSkJRVzlDTEVOQlFVTk1MR2xDUVVGRUxFTkJRWEJET3p0QlFVTkJMR0ZCUVVzc1NVRkJTWFJETEVkQlFWUXNTVUZCWjBKaUxFbEJRV2hDTEVWQlFYTkNPMEZCUTNCQ0xHTkJRVWxwUkN4TFFVRkxMRU5CUVVORExFOUJRVTRzUTBGQlkyeEVMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZzUWl4RFFVRktMRVZCUVRoQ08wRkJRelZDTUVNc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbEVzVVVGQlVTeERRVUZETEZkQlFWZHdSQ3hKUVVGSkxFTkJRVU5oTEVkQlFVUXNRMEZCU2l4RFFVRlZhMElzVFVGQmNrSXNSMEZCT0VJc1IwRkJMMElzUlVGQmIwTnNRaXhIUVVGd1F5eEZRVUY1UTNsRExHbENRVUY2UXl4RFFVRTVRanRCUVVOQlF5eHhRa0ZCVXl4RFFVRkRXQ3hYUVVGV0xFTkJRWE5DVXl4eFFrRkJjVUlzUTBGQlEzSkVMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZNTEVWQlFWbG5RaXhMUVVGTExFZEJRVWNzUTBGQmNFSXNRMEZCTTBNN1FVRkRSQ3hYUVVoRUxFMUJSMDhzU1VGQlNUZENMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZLTEV0QlFXTXNTVUZCWkN4SlFVRnpRbUlzU1VGQlNTeERRVUZEWVN4SFFVRkVMRU5CUVVvc1MwRkJZMjVDTEZOQlFYaERMRVZCUVcxRU8wRkJRM2hFTmtRc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbUVzWlVGQlpTeERRVUZETlVNc1IwRkJSQ3hGUVVGTkxFbEJRVTRzUTBGQmNrTTdRVUZEUkN4WFFVWk5MRTFCUlVFc1NVRkJTV0lzU1VGQlNTeERRVUZEWVN4SFFVRkVMRU5CUVVvc1dVRkJjVUpuUXl4SlFVRjZRaXhGUVVFclFqdEJRVU53UTFVc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbUVzWlVGQlpTeERRVUZETlVNc1IwRkJSQ3hGUVVGTllpeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJTaXhEUVVGVmEwTXNWMEZCVml4RlFVRk9MRU5CUVhKRE8wRkJRMFFzVjBGR1RTeE5RVVZCTEVsQlFVa3NUMEZCVHk5RExFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRllMRXRCUVhGQ0xGRkJRWHBDTEVWQlFXMURPMEZCUTNoRE1FTXNjVUpCUVZNc1EwRkJRMWdzVjBGQlZpeERRVUZ6UWxFc1VVRkJVU3hEUVVGRExGRkJRVVFzUlVGQlYzWkRMRWRCUVZnc1JVRkJaMEo1UXl4cFFrRkJhRUlzUTBGQk9VSTdRVUZEUVVNc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbE1zY1VKQlFYRkNMRU5CUVVOeVJDeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJUQ3hGUVVGWlowSXNTMEZCU3l4SFFVRkhMRU5CUVhCQ0xFTkJRVE5ETzBGQlEwUXNWMEZJVFN4TlFVZEJPMEZCUTB3d1FpeHhRa0ZCVXl4RFFVRkRXQ3hYUVVGV0xFTkJRWE5DWVN4bFFVRmxMRU5CUVVNMVF5eEhRVUZFTEVWQlFVMWlMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZXTEVOQlFYSkRPMEZCUTBRN1FVRkRSanM3UVVGRFJDeFpRVUZKTEU5QlFVOXFRaXhOUVVGTkxFTkJRVU00UkN4eFFrRkJaQ3hMUVVGM1F5eFZRVUUxUXl4RlFVRjNSRHRCUVVOMFJEbEVMR2RDUVVGTkxFTkJRVU00UkN4eFFrRkJVQ3hEUVVFMlFqRkVMRWxCUVRkQ0xFVkJRVzFETWtRc1QwRkJia01zUTBGQk1rTXNWVUZCVTBNc1RVRkJWQ3hGUVVGcFFqdEJRVU14UkV3c2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbUVzWlVGQlpTeERRVUZEUnl4TlFVRk5MRU5CUVVORExGRkJRVkFzUlVGQlJDeEZRVUZ2UWpkRUxFbEJRVWtzUTBGQlF6UkVMRTFCUVVRc1EwRkJlRUlzUTBGQmNrTTdRVUZEUkN4WFFVWkVPMEZCUjBRN08wRkJSVVFzWlVGQlQwd3NVMEZCVUR0QlFVTkVPenRCUVVWRUxHVkJRVk5JTEZGQlFWUXNRMEZCYTBJelF5eFRRVUZzUWl4RlFVRTJRbkZFTEZkQlFUZENMRVZCUVRCRFF5eGhRVUV4UXl4RlFVRjVSRHRCUVVOMlJDeFpRVUZKUXl4bFFVRmxMRWRCUVVkRUxHRkJRWFJDTzBGQlEwRXNXVUZCU1VVc1owSkJRV2RDTEVkQlFVY3hRaXhSUVVGUkxFTkJRVU5ETEdGQlFWUXNRMEZCZFVKcVFpeFpRVUZaTEVOQlFVTm9RaXhqUVVGaUxFTkJRVFJDUml4SFFVRnVSQ3hEUVVGMlFqdEJRVU5CTkVRc2QwSkJRV2RDTEVOQlFVTXpSQ3hMUVVGcVFpeERRVUYxUW0xRExFOUJRWFpDTEVkQlFXbERiRUlzV1VGQldTeERRVUZEYUVJc1kwRkJZaXhEUVVFMFFrUXNTMEZCTjBRN1FVRkRRVEpFTEhkQ1FVRm5RaXhEUVVGRFF5eFpRVUZxUWl4RFFVRTRRaXhYUVVFNVFpeEZRVUV5UXl4blFrRkJNME03UVVGRFFTeFpRVUZKUXl4WFFVRlhMRWRCUVVjMVFpeFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUpxUWl4WlFVRlpMRU5CUVVOa0xGTkJRV0lzUTBGQmRVSktMRWRCUVRsRExFTkJRV3hDTzBGQlEwRXNXVUZCU1N0RUxGbEJRVmtzUjBGQlJ6ZENMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlEyWXNTMEZCWWl4RFFVRnRRa2dzUjBGQk1VTXNRMEZCYmtJN1FVRkRRU3RFTEc5Q1FVRlpMRU5CUVVNNVJDeExRVUZpTEVOQlFXMUNiVU1zVDBGQmJrSXNSMEZCTmtKc1FpeFpRVUZaTEVOQlFVTm1MRXRCUVdJc1EwRkJiVUpHTEV0QlFXaEVPMEZCUTBFMlJDeHRRa0ZCVnl4RFFVRkROMFFzUzBGQldpeERRVUZyUW0xRExFOUJRV3hDTEVkQlFUUkNiRUlzV1VGQldTeERRVUZEWkN4VFFVRmlMRU5CUVhWQ1NDeExRVUZ1UkR0QlFVVkJPRVFzYjBKQlFWa3NRMEZCUTNoQ0xGZEJRV0lzUTBGQmVVSjVRaXhoUVVGaExFTkJRVU5PTEdGQlFVUXNRMEZCZEVNN08wRkJRMEVzV1VGQlNVUXNWMEZCU2l4RlFVRnBRanRCUVVObVN5eHhRa0ZCVnl4RFFVRkRka0lzVjBGQldpeERRVUYzUWpCQ0xFMUJRVTBzUTBGQlExSXNWMEZCUkN4RFFVRTVRanRCUVVORU96dEJRVU5FU3l4dFFrRkJWeXhEUVVGRGRrSXNWMEZCV2l4RFFVRjNRa3dzVVVGQlVTeERRVUZEWjBNc1kwRkJWQ3hEUVVGM1FqbEVMRk5CUVhoQ0xFTkJRWGhDTzBGQlEwRXlSQ3h2UWtGQldTeERRVUZEZUVJc1YwRkJZaXhEUVVGNVFuVkNMRmRCUVhwQ096dEJRVVZCUXl4dlFrRkJXU3hEUVVGRFNTeFBRVUZpTEVkQlFYVkNMRmxCUVZrN1FVRkRha01zWTBGQlNUbEVMRlZCUVZVc1IwRkJSekJFTEZsQlFWa3NRMEZCUTBzc1ZVRkJPVUk3UVVGRFFTeGpRVUZKUXl4alFVRmpMRWRCUVVkT0xGbEJRVmtzUTBGQlEwOHNWVUZCWWl4RFFVRjNRa01zVjBGQk4wTTdRVUZEUVVZc2QwSkJRV01zUTBGQlEzQkZMRXRCUVdZc1EwRkJjVUoxUlN4UFFVRnlRaXhIUVVFclFtSXNaVUZCWlN4SFFVRkhMRTlCUVVnc1IwRkJZU3hOUVVFelJEdEJRVU5CZEVRc2IwSkJRVlVzUTBGQlEwb3NTMEZCV0N4RFFVRnBRbmRGTEZOQlFXcENMRWRCUVRaQ1pDeGxRVUZsTEVkQlFVY3NaVUZCU0N4SFFVRnhRaXhqUVVGcVJUdEJRVU5CUVN4NVFrRkJaU3hIUVVGSExFTkJRVU5CTEdWQlFXNUNPMEZCUTBRc1UwRk9SRHM3UVVGUlFVTXNkMEpCUVdkQ0xFTkJRVU55UWl4WFFVRnFRaXhEUVVFMlFuZENMRmxCUVRkQ08wRkJRMEVzWlVGQlQwZ3NaMEpCUVZBN1FVRkRSRHM3UVVGRlJDeGxRVUZUU1N4aFFVRlVMRU5CUVhWQ1RpeGhRVUYyUWl4RlFVRnpRenRCUVVOd1F5eFpRVUZKWjBJc1lVRkJZU3hIUVVGSGVFTXNVVUZCVVN4RFFVRkRReXhoUVVGVUxFTkJRWFZDYWtJc1dVRkJXU3hEUVVGRFlpeFZRVUZpTEVOQlFYZENUQ3hIUVVFdlF5eERRVUZ3UWp0QlFVTkJNRVVzY1VKQlFXRXNRMEZCUTNwRkxFdEJRV1FzUTBGQmIwSnRReXhQUVVGd1FpeEhRVUU0UW14Q0xGbEJRVmtzUTBGQlEySXNWVUZCWWl4RFFVRjNRa29zUzBGQmRFUTdRVUZEUVhsRkxIRkNRVUZoTEVOQlFVTjZSU3hMUVVGa0xFTkJRVzlDZDBVc1UwRkJjRUlzUjBGQlowTm1MR0ZCUVdFc1IwRkJSeXhqUVVGSUxFZEJRVzlDTEdWQlFXcEZPMEZCUTBFc1pVRkJUMmRDTEdGQlFWQTdRVUZEUkRzN1FVRkZSQ3hsUVVGVGRrSXNiMEpCUVZRc1EwRkJPRUozUWl4UlFVRTVRaXhGUVVGM1F6dEJRVU4wUXl4WlFVRkpaaXhuUWtGQlowSXNSMEZCUnpGQ0xGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTFvc2FVSkJRV0lzUTBGQkswSk9MRWRCUVhSRUxFTkJRWFpDTzBGQlEwRTBSQ3gzUWtGQlowSXNRMEZCUTBNc1dVRkJha0lzUTBGQk9FSXNWMEZCT1VJc1JVRkJNa01zYlVKQlFUTkRPMEZCUTBGRUxIZENRVUZuUWl4RFFVRkRNMFFzUzBGQmFrSXNRMEZCZFVKdFF5eFBRVUYyUWl4SFFVRnBRMnhDTEZsQlFWa3NRMEZCUTFvc2FVSkJRV0lzUTBGQkswSk1MRXRCUVdoRk8wRkJRMEV5UkN4M1FrRkJaMElzUTBGQlF6TkVMRXRCUVdwQ0xFTkJRWFZDZFVVc1QwRkJka0lzUjBGQmEwTkhMRkZCUVZFc1IwRkJSeXhOUVVGSUxFZEJRVmtzVDBGQmRFUTdRVUZEUVN4bFFVRlBaaXhuUWtGQlVEdEJRVU5FT3p0QlFVVkVMR1ZCUVZOU0xHVkJRVlFzUTBGQmVVSTFReXhIUVVGNlFpeEZRVUU0UW05RkxFdEJRVGxDTEVWQlFYRkRPMEZCUTI1RExGbEJRVWxETEZkQlFWY3NSMEZCUnpORExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTFnc1dVRkJZaXhEUVVFd1FsQXNSMEZCYWtRc1EwRkJiRUk3UVVGRFFUWkZMRzFDUVVGWExFTkJRVU0xUlN4TFFVRmFMRU5CUVd0Q2JVTXNUMEZCYkVJc1IwRkJORUpzUWl4WlFVRlpMRU5CUVVOWUxGbEJRV0lzUTBGQk1FSk9MRXRCUVhSRU8wRkJRMEUwUlN4dFFrRkJWeXhEUVVGRGRFTXNWMEZCV2l4RFFVRjNRakJDTEUxQlFVMHNRMEZCUTNwRUxFZEJRVVFzUTBGQk9VSTdRVUZEUVhGRkxHMUNRVUZYTEVOQlFVTjBReXhYUVVGYUxFTkJRWGRDUkN4UlFVRlJMRU5CUVVOelF5eExRVUZFTEVOQlFXaERPMEZCUTBFc1pVRkJUME1zVjBGQlVEdEJRVU5FT3p0QlFVVkVMR1ZCUVZOYUxFMUJRVlFzUTBGQlowSmhMRWxCUVdoQ0xFVkJRWE5DTzBGQlEzQkNMRmxCUVVsRExGVkJRVlVzUjBGQlJ6ZERMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUW1wQ0xGbEJRVmtzUTBGQlExWXNSMEZCWWl4RFFVRnBRbElzUjBGQmVFTXNRMEZCYWtJN1FVRkRRU3RGTEd0Q1FVRlZMRU5CUVVNNVJTeExRVUZZTEVOQlFXbENiVU1zVDBGQmFrSXNSMEZCTWtKc1FpeFpRVUZaTEVOQlFVTldMRWRCUVdJc1EwRkJhVUpRTEV0QlFUVkRPMEZCUTBFNFJTeHJRa0ZCVlN4RFFVRkRlRU1zVjBGQldDeERRVUYxUWt3c1VVRkJVU3hEUVVGRFowTXNZMEZCVkN4RFFVRjNRbGtzU1VGQlNTeEhRVUZITEVsQlFTOUNMRU5CUVhaQ08wRkJRMEVzWlVGQlQwTXNWVUZCVUR0QlFVTkVPenRCUVVWRUxHVkJRVk42UXl4UlFVRlVMRU5CUVd0Q2MwTXNTMEZCYkVJc1JVRkJlVUk3UVVGRGRrSXNXVUZCU1Vrc1dVRkJTanRCUVVOQkxGbEJRVWxETEZGQlFWRXNSMEZCUnl4UlFVRm1PenRCUVVOQkxHZENRVUZSTEU5QlFVOU1MRXRCUVdZN1FVRkRSU3hsUVVGTExGRkJRVXc3UVVGRFJVa3NkMEpCUVZrc1IwRkJSemxETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMVFzVjBGQllpeERRVUY1UWxRc1IwRkJhRVFzUTBGQlpqdEJRVU5CWjBZc2QwSkJRVmtzUTBGQlF5OUZMRXRCUVdJc1EwRkJiVUp0UXl4UFFVRnVRaXhIUVVFMlFteENMRmxCUVZrc1EwRkJRMVFzVjBGQllpeERRVUY1UWxJc1MwRkJkRVE3UVVGRFFTdEZMSGRDUVVGWkxFTkJRVU42UXl4WFFVRmlMRU5CUVhsQ1RDeFJRVUZSTEVOQlFVTm5ReXhqUVVGVUxFTkJRWGRDVlN4TFFVRkxMRU5CUVVOd1FpeFJRVUZPTEVWQlFYaENMRU5CUVhwQ08wRkJRMEU3TzBGQlEwWXNaVUZCU3l4UlFVRk1PMEZCUTBWM1FpeDNRa0ZCV1N4SFFVRkhPVU1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1N4RFFVRkRVaXhYUVVGaUxFTkJRWGxDVml4SFFVRm9SQ3hEUVVGbU8wRkJRMEZuUml4M1FrRkJXU3hEUVVGREwwVXNTMEZCWWl4RFFVRnRRbTFETEU5QlFXNUNMRWRCUVRaQ2JFSXNXVUZCV1N4RFFVRkRVaXhYUVVGaUxFTkJRWGxDVkN4TFFVRjBSRHRCUVVOQkswVXNkMEpCUVZrc1EwRkJRM3BETEZkQlFXSXNRMEZCZVVKTUxGRkJRVkVzUTBGQlEyZERMR05CUVZRc1EwRkJkMElzVFVGQlRWVXNTMEZCVGl4SFFVRmpMRWRCUVhSRExFTkJRWHBDTzBGQlEwRTdPMEZCUTBZc1pVRkJTeXhSUVVGTU8wRkJRMFZKTEhkQ1FVRlpMRWRCUVVjNVF5eFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUpxUWl4WlFVRlpMRU5CUVVOUUxGZEJRV0lzUTBGQmVVSllMRWRCUVdoRUxFTkJRV1k3UVVGRFFXZEdMSGRDUVVGWkxFTkJRVU12UlN4TFFVRmlMRU5CUVcxQ2JVTXNUMEZCYmtJc1IwRkJOa0pzUWl4WlFVRlpMRU5CUVVOUUxGZEJRV0lzUTBGQmVVSldMRXRCUVhSRU8wRkJRMEVyUlN4M1FrRkJXU3hEUVVGRGVrTXNWMEZCWWl4RFFVRjVRa3dzVVVGQlVTeERRVUZEWjBNc1kwRkJWQ3hEUVVGM1FsVXNTMEZCZUVJc1EwRkJla0k3UVVGRFFUczdRVUZEUml4bFFVRkxMRk5CUVV3N1FVRkRSVWtzZDBKQlFWa3NSMEZCUnpsRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTA0c1dVRkJZaXhEUVVFd1Fsb3NSMEZCYWtRc1EwRkJaanRCUVVOQlowWXNkMEpCUVZrc1EwRkJReTlGTEV0QlFXSXNRMEZCYlVKdFF5eFBRVUZ1UWl4SFFVRTJRbXhDTEZsQlFWa3NRMEZCUTA0c1dVRkJZaXhEUVVFd1FsZ3NTMEZCZGtRN1FVRkRRU3RGTEhkQ1FVRlpMRU5CUVVONlF5eFhRVUZpTEVOQlFYbENUQ3hSUVVGUkxFTkJRVU5uUXl4alFVRlVMRU5CUVhkQ1ZTeExRVUY0UWl4RFFVRjZRanRCUVVOQk96dEJRVU5HTEdWQlFVdExMRkZCUVV3N1FVRkRSVVFzZDBKQlFWa3NSMEZCUnpsRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTB3c1UwRkJZaXhEUVVGMVFtSXNSMEZCT1VNc1EwRkJaanRCUVVOQlowWXNkMEpCUVZrc1EwRkJReTlGTEV0QlFXSXNRMEZCYlVKdFF5eFBRVUZ1UWl4SFFVRTJRbXhDTEZsQlFWa3NRMEZCUTB3c1UwRkJZaXhEUVVGMVFsb3NTMEZCY0VRN1FVRkRRU3RGTEhkQ1FVRlpMRU5CUVVONlF5eFhRVUZpTEVOQlFYbENUQ3hSUVVGUkxFTkJRVU5uUXl4alFVRlVMRU5CUVhkQ1ZTeExRVUY0UWl4RFFVRjZRanRCUVVOQk8wRkJla0pLT3p0QlFUSkNRU3hsUVVGUFNTeFpRVUZRTzBGQlEwUTdPMEZCUlVRc1pVRkJVemRFTEdsQ1FVRlVMRU5CUVRKQ0swUXNVVUZCTTBJc1JVRkJjVU5ETEZOQlFYSkRMRVZCUVdkRU8wRkJRemxETEZsQlFVbERMRTFCUVUwc1IwRkJSeXhGUVVGaU96dEJRVU5CTEdGQlFVc3NTVUZCU1RWRkxFZEJRVlFzU1VGQlowSXdSU3hSUVVGb1FpeEZRVUV3UWp0QlFVTjRRa1VzWjBKQlFVMHNRMEZCUXpWRkxFZEJRVVFzUTBGQlRpeEhRVUZqYWtJc1RVRkJUU3hEUVVGRE5rSXNUVUZCVUN4RFFVRmpMRVZCUVdRc1JVRkJhMEk0UkN4UlFVRlJMRU5CUVVNeFJTeEhRVUZFTEVOQlFURkNMRVZCUVdsRE1rVXNVMEZCVXl4RFFVRkRNMFVzUjBGQlJDeERRVUV4UXl4RFFVRmtPMEZCUTBRN08wRkJRMFFzWlVGQlR6UkZMRTFCUVZBN1FVRkRSRHM3UVVGRlJDeGhRVUZQY0VRc1RVRkJUU3hGUVVGaU8wRkJRMGc3TzBGQk0wMTNRanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRMFUzUWl4UlFVRk5jVVFzVDBGQlRpeFRRVUZ6UWtNc2IwSkJRVk5ETEU5QlFWUXNRMEZCYVVJMVJ5eG5Ra0ZCYWtJc1JVRkJNRUk3UVVGQlF5eFpRVUZQTEVOQlFVTTJSeXh6UWtGQlJDeERRVUZTTzBGQlFYZENMRmRCUVUwc1EwRkJRME1zZFVKQlFVUTdRVUZCT1VJc1IwRkJNVUlzUTBGQmRFSXNRMEZCSzBZN1FVRkRNMFkzUnl4bFFVRlhMRWRCUVVVN1FVRkRWRHRCUVVOSU96dEJRVWd3UmpzN1FVRkxMMFlzVVVGQlRUaEhMRTFCUVUwc1IwRkJSeXhKUVVGSlRDeFBRVUZLTEVWQlFXWTdhVUpCUTJWTExFMDdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVU5XWml4UlFVRk5SaXhoUVVGaExFZEJRVWxITEZGQlFVUXNTVUZCWVN4alFVRmpRU3hSUVVGa0xFTkJRWE5DTzBGQlEzSkVReXhYUVVGUExFTkJRVU5ETEU5QlFVUXNSVUZCVXl4RFFVTmFPMEZCUTBnN08wRkJRMFE1Unl4UFFVRkhMRU5CUVVNclJ5eFBRVUZFTEVWQlFWTTdRVUZEVWl4VlFVRkhMRXRCUVVzelJ5eExRVUZNTEVsQlFXTXNTMEZCUzA0c1kwRkJUQ3hEUVVGdlFpeExRVUZ3UWl4RFFVRnFRaXhGUVVFMFF6dEJRVU40UXl4bFFVRlBMRWxCUVZBN1FVRkRTRHM3UVVGRFJHdElMR0ZCUVU4c1EwRkJRMmhJTEVkQlFWSXNRMEZCV1N0SExFOUJRVm83UVVGRFNEczdRVUZEUkVVc1owSkJRVmtzUjBGQlJTeERRVU5XTzBGQlEwZzdPMEZCUTBSRExGbEJRVkVzUTBGQlEwTXNZMEZCUkN4RlFVRm5RaXhEUVVOMlFqczdRVUZEUkhCSUxGTkJRVXNzUTBGQlEyZElMRTlCUVVRc1JVRkJVenRCUVVOV0xGVkJRVWNzUzBGQlN6TkhMRXRCUVV3c1NVRkJZeXhMUVVGTFRpeGpRVUZNTEVOQlFXOUNMRTlCUVhCQ0xFTkJRV3BDTEVWQlFUaERPMEZCUXpGRExHVkJRVThzU1VGQlVEdEJRVU5JT3p0QlFVTkVhMGdzWVVGQlR5eERRVUZEYWtnc1MwRkJVaXhEUVVGalowZ3NUMEZCWkR0QlFVTklPenRCUVhCQ2IwUXNSMEZCZWtRN08ybENRWFZDWlU0c1lUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTNSQ1ppeFJRVUZOUXl4aFFVRmhMRWRCUVVsRkxGRkJRVVFzU1VGQllTeGpRVUZqUVN4UlFVRmtMRU5CUVhOQ08wRkJRM0pFUXl4WFFVRlBMRU5CUVVOUExGVkJRVlVzUjBGQlF5eEpRVUZhTEVWQlFXbENPMEZCUTNCQ1FTeG5Ra0ZCVlN4SFFVRkhRU3hWUVVGVkxFbEJRVVZxUlN4UlFVRlJMRU5CUVVOclJTeEpRVUZzUXp0QlFVTkJMRlZCUVVsRExFbEJRVWtzUjBGQlIyNUZMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUWl4SlFVRjJRaXhEUVVGWU8wRkJRMEZyUlN4VlFVRkpMRU5CUVVOd1J5eExRVUZNTEVOQlFWZHRReXhQUVVGWUxFZEJRWEZDTEhkQ1FVRnlRanRCUVVOQkswUXNaMEpCUVZVc1EwRkJRelZFTEZkQlFWZ3NRMEZCZFVJNFJDeEpRVUYyUWp0QlFVTkJMRmRCUVV0RExFOUJRVXdzUjBGQlpVZ3NWVUZCWmp0QlFVTkJMRmRCUVV0SkxGRkJRVXdzUjBGQlowSktMRlZCUVZVc1EwRkJRMHNzYjBKQlFWZ3NRMEZCWjBNc1NVRkJhRU1zUlVGQmMwTXNRMEZCZEVNc1EwRkJhRUk3UVVGRFNEczdRVUZEUkZJc1owSkJRVmtzUTBGQlF5OUVMRTlCUVU4c1IwRkJReXhKUVVGVUxFVkJRV003UVVGRGRFSkJMR0ZCUVU4c1IwRkJSMEVzVDBGQlR5eEpRVUZKTEV0QlFVdHhSU3hQUVVFeFFqdEJRVU5CVUN4aFFVRlBMRU5CUVVOb1NDeEhRVUZTTEVOQlFWa3NhMEpCUVd0Q2EwUXNUMEZCVHl4RFFVRkRkMFVzV1VGQk1VSXNSMEZCZVVONFJTeFBRVUZQTEVOQlFVTjVSU3haUVVFM1JEdEJRVU5CZWtVc1lVRkJUeXhEUVVGRE1FVXNVMEZCVWl4SFFVRnZRakZGTEU5QlFVOHNRMEZCUTNkRkxGbEJRVklzUjBGQmRVSjRSU3hQUVVGUExFTkJRVU41UlN4WlFVRnVSRHRCUVVOSU96dEJRVU5FVkN4WlFVRlJMRU5CUVVORExHTkJRVVFzUlVGQlowSTdRVUZEY0VJN1FVRkRRU3hWUVVGSlZTeFBRVUZQTEVkQlFVY3NTMEZCUzB3c1VVRkJUQ3hEUVVGalF5eHZRa0ZCWkN4RFFVRnRReXhKUVVGdVF5eERRVUZrTzBGQlEwRXNWVUZCU1Vnc1NVRkJTU3hIUVVGSFR5eFBRVUZQTEVOQlFVTkJMRTlCUVU4c1EwRkJRMnhHTEUxQlFWSXNSMEZCWlN4RFFVRm9RaXhEUVVGc1FqczdRVUZEUVN4VlFVRkhMRU5CUVVNeVJTeEpRVUZFTEVsQlFWTkJMRWxCUVVrc1EwRkJRMUVzVTBGQlRDeERRVUZsUXl4UlFVRm1MRU5CUVhkQ0xHbENRVUY0UWl4RFFVRmFMRVZCUVhWRU8wRkJRVU03UVVGRGNFUlVMRmxCUVVrc1IwRkJSMjVGTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFpeEpRVUYyUWl4RFFVRlFPMEZCUTBGclJTeFpRVUZKTEVOQlFVTlJMRk5CUVV3c1EwRkJaVVVzUjBGQlppeERRVUZ0UWl4cFFrRkJia0k3UVVGRFFTeGhRVUZMVWl4UlFVRk1MRU5CUVdOb1JTeFhRVUZrTEVOQlFUQkNPRVFzU1VGQk1VSTdRVUZEU0RzN1FVRkRSQ3hWUVVGSlZ5eFJRVUZSTEVkQlFVZDJTQ3h2UWtGQlUwTXNWMEZCVkN4RFFVRnhRbmRITEdOQlFYSkNMRU5CUVdZN08wRkJRMEVzVlVGQlNXVXNTVUZCU1N4SFFVRkhMRWxCUVVsNlJTeEpRVUZLTEVWQlFWZzdRVUZEUVRaRUxGVkJRVWtzUTBGQlEyRXNVMEZCVEN4SFFVRnJRaXhuUkVGQkswTkVMRWxCUVVzc1RVRkJkRVU3UVVGRFFWb3NWVUZCU1N4RFFVRkRPVVFzVjBGQlRDeERRVUZwUW5sRkxGRkJRV3BDTzBGQlEwRXNWMEZCUzJoQ0xGbEJRVXc3UVVGRFNEczdRVUZEUkdwSUxFOUJRVWNzUTBGQlF5dEhMRTlCUVVRc1JVRkJVenRCUVVOU0xGVkJRVWNzUzBGQlN6TkhMRXRCUVV3c1NVRkJZeXhMUVVGTFRpeGpRVUZNTEVOQlFXOUNMRXRCUVhCQ0xFTkJRV3BDTEVWQlFUUkRPMEZCUTNoRExHVkJRVThzU1VGQlVEdEJRVU5JT3p0QlFVTkVMRlZCUVVjc1EwRkJReXhMUVVGTE1FZ3NVVUZCVGl4SlFVRnJRaXhEUVVGRExFdEJRVXRCTEZGQlFVd3NRMEZCWTJoRkxGZEJRWEJETEVWQlFXZEVPMEZCUXpWRExHRkJRVXR4UkN4UFFVRk1PMEZCUTBnN08wRkJRMFFzVlVGQlNWTXNTVUZCU1N4SFFVRkhia1VzVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ0xFbEJRWFpDTEVOQlFWZzdRVUZEUVd0RkxGVkJRVWtzUTBGQlEzQkhMRXRCUVV3c1EwRkJWMjFETEU5QlFWZ3NSMEZCY1VJc2JVTkJRWEpDT3p0QlFVTkJMRlZCUVVrMFJTeFJRVUZSTEVkQlFVZDJTQ3h2UWtGQlUwTXNWMEZCVkN4RFFVRnhRbTlITEU5QlFYSkNMRU5CUVdZN08wRkJRMEVzVlVGQlNXMUNMRWxCUVVrc1IwRkJSeXhKUVVGSmVrVXNTVUZCU2l4RlFVRllPMEZCUTBFMlJDeFZRVUZKTEVOQlFVTmhMRk5CUVV3c1IwRkJhMElzWjBSQlFTdERSQ3hKUVVGTExFMUJRWFJGTzBGQlEwRmFMRlZCUVVrc1EwRkJRemxFTEZkQlFVd3NRMEZCYVVKNVJTeFJRVUZxUWp0QlFVTkJMRmRCUVV0VUxGRkJRVXdzUTBGQlkyaEZMRmRCUVdRc1EwRkJNRUk0UkN4SlFVRXhRanRCUVVOQkxGZEJRVXRNTEZsQlFVdzdRVUZEUVVRc1lVRkJUeXhEUVVGRGFFZ3NSMEZCVWl4RFFVRlpLMGNzVDBGQldqdEJRVU5JT3p0QlFVVkVhRWdzVTBGQlN5eERRVUZEWjBnc1QwRkJSQ3hGUVVGVE8wRkJRMVlzVlVGQlJ5eExRVUZMTTBjc1MwRkJUQ3hKUVVGakxFdEJRVXRPTEdOQlFVd3NRMEZCYjBJc1QwRkJjRUlzUTBGQmFrSXNSVUZCT0VNN1FVRkRNVU1zWlVGQlR5eEpRVUZRTzBGQlEwZ3NUMEZJVXl4RFFVbFdPenM3UVVGRFFXdElMR0ZCUVU4c1EwRkJRMnBJTEV0QlFWSXNRMEZCWTJkSUxFOUJRV1E3UVVGRFNEczdRVUZ5Ukc5RUxFZEJRWHBFT3p0cFFrRjNSR1ZNTEdFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVONlJHWXNPRVFpTENKbWFXeGxJam9pUUdOaGRYTmhiRTVsZEM5c2IyY3VkMlZpTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpS1NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hiWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENKZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJa0JqWVhWellXeE9aWFF2Ykc5blhDSmRJRDBnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpS1NrN1hHNWNkR1ZzYzJWY2JseDBYSFJ5YjI5MFcxd2lRR05oZFhOaGJFNWxkQzlzYjJkY0lsMGdQU0JtWVdOMGIzSjVLSEp2YjNSYlhDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSmRLVHRjYm4wcEtIUm9hWE1zSUdaMWJtTjBhVzl1S0Y5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWTJGMWMyRnNYMjVsZEY5MWRHbHNjMTlmS1NCN1hHNXlaWFIxY200Z0lpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lHZGxkRG9nWjJWMGRHVnlJSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdYMTlsYzAxdlpIVnNaU0J2YmlCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6S1NCN1hHNGdYSFJjZEdsbUtIUjVjR1Z2WmlCVGVXMWliMndnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnlrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVJRngwWEhSOVhHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQW5YMTlsYzAxdlpIVnNaU2NzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJqY21WaGRHVWdZU0JtWVd0bElHNWhiV1Z6Y0dGalpTQnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUF4T2lCMllXeDFaU0JwY3lCaElHMXZaSFZzWlNCcFpDd2djbVZ4ZFdseVpTQnBkRnh1SUZ4MEx5OGdiVzlrWlNBbUlESTZJRzFsY21kbElHRnNiQ0J3Y205d1pYSjBhV1Z6SUc5bUlIWmhiSFZsSUdsdWRHOGdkR2hsSUc1elhHNGdYSFF2THlCdGIyUmxJQ1lnTkRvZ2NtVjBkWEp1SUhaaGJIVmxJSGRvWlc0Z1lXeHlaV0ZrZVNCdWN5QnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUE0ZkRFNklHSmxhR0YyWlNCc2FXdGxJSEpsY1hWcGNtVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWRDQTlJR1oxYm1OMGFXOXVLSFpoYkhWbExDQnRiMlJsS1NCN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeEtTQjJZV3gxWlNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9kbUZzZFdVcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ09Da2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFJwWmlnb2JXOWtaU0FtSURRcElDWW1JSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlsYzAxdlpIVnNaU2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhSMllYSWdibk1nUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cE8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSW9ibk1wTzF4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2JuTXNJQ2RrWldaaGRXeDBKeXdnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCMllXeDFaVG9nZG1Gc2RXVWdmU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF5SUNZbUlIUjVjR1Z2WmlCMllXeDFaU0FoUFNBbmMzUnlhVzVuSnlrZ1ptOXlLSFpoY2lCclpYa2dhVzRnZG1Gc2RXVXBJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNodWN5d2dhMlY1TENCbWRXNWpkR2x2YmloclpYa3BJSHNnY21WMGRYSnVJSFpoYkhWbFcydGxlVjA3SUgwdVltbHVaQ2h1ZFd4c0xDQnJaWGtwS1R0Y2JpQmNkRngwY21WMGRYSnVJRzV6TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJREFwTzF4dUlpd2lablZ1WTNScGIyNGdYMmx1ZEdWeWIzQlNaWEYxYVhKbFJHVm1ZWFZzZENodlltb3BJSHRjYmlBZ2NtVjBkWEp1SUc5aWFpQW1KaUJ2WW1vdVgxOWxjMDF2WkhWc1pTQS9JRzlpYWlBNklIdGNiaUFnSUNCa1pXWmhkV3gwT2lCdlltcGNiaUFnZlR0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmYVc1MFpYSnZjRkpsY1hWcGNtVkVaV1poZFd4ME95SXNJbVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVKaGMyVk1iMmQ3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvS1h0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVCWTJObGNIUmxaRXhsZG1Wc2N5QTlJSHRrWldKMVp6b2dNQ3dnYkc5bk9qRXNJSGRoY201cGJtYzZNaXdnWlhKeWIzSTZJRE45TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkpCWTJObGNIUmxaRXhsZG1Wc2N5QTlJSHN3T2lka1pXSjFaeWNzSURFNklDZHNiMmNuTENBeU9pQW5kMkZ5Ym1sdVp5Y3NJRE02SUNkbGNuSnZjaWQ5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbXhsZG1Wc0lEMGdkR2hwY3k1QlkyTmxjSFJsWkV4bGRtVnNjMXNuWkdWaWRXY25YVHRjYmlBZ0lDQjlYRzRnSUNBZ2MyVjBJRXhsZG1Wc0tHeGxkbVZzS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3k1QlkyTmxjSFJsWkV4bGRtVnNjMXRzWlhabGJGMGhQVDExYm1SbFptbHVaV1FwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1c1pYWmxiQ0E5SUhSb2FYTXVRV05qWlhCMFpXUk1aWFpsYkhOYmJHVjJaV3hkT3lBZ0lDQmNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb1lDUjdiR1YyWld4OUlHMTFjM1FnWW1VZ2IyNWxJRzltSUNSN1QySnFaV04wTG10bGVYTW9kR2hwY3k1QlkyTmxjSFJsWkV4bGRtVnNjeWw5WUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnWjJWMElFeGxkbVZzS0NsN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpCWTJObGNIUmxaRXhsZG1Wc2MxdDBhR2x6TG14bGRtVnNYVHRjYmlBZ0lDQjlYRzU5SWl3aUx5OXZjbWxuYVc0Z1kyOWtaU0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXNkV041WjJsc1ltVnlkQzlxYzI5dUxXUnBjM0JzWVhrdllteHZZaTl0WVhOMFpYSXZhbk52Ymkxa2FYTndiR0Y1TG1welhHNHZMeUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGNnVEhWamVTQkhhV3hpWlhKMFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJLYzI5dVZtbGxkM3RjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwZTF4dUlDQWdJSDFjYmlBZ0lDQnpkR0YwYVdNZ1NsTlBUa1JwYzNCc1lYa29hbk52Yml3Z2IzQmxia3hsZG1Wc2MwRnlaeXdnYzNSNWJHVlBjSFJwYjI1elFYSm5LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQkVSVVpCVlV4VVgxTlVXVXhGWDA5UVZFbFBUbE1nUFNCN1hHNGdJQ0FnSUNBZ0lDQWdjbTl2ZERvZ2V5QjBZV2M2SUNkd2NtVW5MQ0J6ZEhsc1pUb2dKM0JoWkdScGJtYzZJRFZ3ZURzZ1ptOXVkQzF6YVhwbE9pQXhjbVZ0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pVTnZiblJoYVc1bGNqb2dleUIwWVdjNklDZGthWFluTENCemRIbHNaVG9nSjIxaGNtZHBiaTFpYjNSMGIyMDZJRE53ZURzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnZEdsMGJHVTZJSHNnZEdGbk9pQW5jM0JoYmljc0lITjBlV3hsT2lBblkzVnljMjl5T2lCd2IybHVkR1Z5T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pWUmxlSFE2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5KeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lHOXdaVzVDZFhSMGIyNDZJSHNnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBZV2M2SUNkemNHRnVKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lBblpHbHpjR3hoZVRvZ2FXNXNhVzVsTFdKc2IyTnJPeUJ0WVhKbmFXNDZJREJ3ZUNBM2NIZ2dNSEI0SURKd2VEc2dZbTl5WkdWeUxYUnZjRG9nTlhCNElITnZiR2xrSUhSeVlXNXpjR0Z5Wlc1ME95QW5YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ3NnSjJKdmNtUmxjaTFpYjNSMGIyMDZJRFZ3ZUNCemIyeHBaQ0IwY21GdWMzQmhjbVZ1ZERzZ1ltOXlaR1Z5TFd4bFpuUTZJRFZ3ZUNCemIyeHBaQ0JpYkdGamF6c25MRnh1SUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdWdWRITkRiMjUwWVdsdVpYSTZJSHNnZEdGbk9pQW5aR2wySnl3Z2MzUjViR1U2SUNkd1lXUmthVzVuTFd4bFpuUTZJREU0Y0hnN0p5QjlMRnh1SUNBZ0lDQWdJQ0FnSUd0bGVWWmhiSFZsVUdGcGNqb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNka2FYTndiR0Y1T2lCaWJHOWphenNnYldGeVoybHVMV0p2ZEhSdmJUb2dNbkI0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0JyWlhrNklIc2dkR0ZuT2lBbmMzQmhiaWNzSUhOMGVXeGxPaUFuWTI5c2IzSTZJR1JoY210aWJIVmxPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQnplVzFpYjJ4V1lXeDFaVG9nZXlCMFlXYzZJQ2R6Y0dGdUp5d2djM1I1YkdVNklDZGpiMnh2Y2pvZ1pHRnlhMmR5WldWdU95Y2dmU3hjYmlBZ0lDQWdJQ0FnSUNCemRISnBibWRXWVd4MVpUb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNkamIyeHZjam9nWTNKcGJYTnZianNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdiblZ0WW1WeVZtRnNkV1U2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5ZMjlzYjNJNklHSnNkV1U3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJR0p2YjJ4bFlXNVdZV3gxWlRvZ2V5QjBZV2M2SUNkemNHRnVKeXdnYzNSNWJHVTZJQ2RqYjJ4dmNqb2dZbXgxWlRzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnYm5Wc2JGWmhiSFZsT2lCN0lIUmhaem9nSjNOd1lXNG5MQ0J6ZEhsc1pUb2dKMk52Ykc5eU9pQmliSFZsT3ljZ2ZTeGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHOXdaVzVNWlhabGJITWdQU0JwYzA1aFRpaHdZWEp6WlVsdWRDaHZjR1Z1VEdWMlpXeHpRWEpuS1NrZ1B5QkpibVpwYm1sMGVTQTZJSEJoY25ObFNXNTBLRzl3Wlc1TVpYWmxiSE5CY21jcE8xeHVJQ0FnSUNBZ0lDQjJZWElnYzNSNWJHVlBjSFJwYjI1eklEMGdkSGx3Wlc5bUlITjBlV3hsVDNCMGFXOXVjMEZ5WnlBOVBUMGdKMjlpYW1WamRDY2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0EvSUcxbGNtZGxVM1I1YkdWUGNIUnBiMjV6S0VSRlJrRlZURlJmVTFSWlRFVmZUMUJVU1U5T1V5d2djM1I1YkdWUGNIUnBiMjV6UVhKbktWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdPaUJFUlVaQlZVeFVYMU5VV1V4RlgwOVFWRWxQVGxNN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ1QySnFaV04wTG1GemMybG5iaUFoUFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQWdJQ0FnVDJKcVpXTjBMbUZ6YzJsbmJpQTlJR1oxYm1OMGFXOXVLSFJoY21kbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJoY21kbGRDQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KME5oYm01dmRDQmpiMjUyWlhKMElIVnVaR1ZtYVc1bFpDQnZjaUJ1ZFd4c0lIUnZJRzlpYW1WamRDY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhSdklEMGdUMkpxWldOMEtIUmhjbWRsZENrN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnBibVJsZUNBOUlERTdJR2x1WkdWNElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhVzVrWlhnckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYm1WNGRGTnZkWEpqWlNBOUlHRnlaM1Z0Wlc1MGMxdHBibVJsZUYwN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYaDBVMjkxY21ObElDRTlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnVaWGgwUzJWNUlHbHVJRzVsZUhSVGIzVnlZMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYm1WNGRGTnZkWEpqWlN3Z2JtVjRkRXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc5YmJtVjRkRXRsZVYwZ1BTQnVaWGgwVTI5MWNtTmxXMjVsZUhSTFpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSdk8xeHVJQ0FnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnY21WdVpHVnlLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJsYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11Y205dmRDNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NXliMjkwTG5OMGVXeGxPMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJR2xtSUNocWMyOXVJRDA5UFNCdWRXeHNJSHg4SUdwemIyNGdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIWnZhV1JGYkdWdFpXNTBJRDBnWjJWMFZtRnNkV1VvYm5Wc2JDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tIWnZhV1JGYkdWdFpXNTBLVHRjYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHcHpiMjRnYVc1emRHRnVZMlZ2WmlCRVlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWkdGMFpVVnNaVzFsYm5RZ1BTQm5aWFJXWVd4MVpTaHFjMjl1TG5SdlNWTlBVM1J5YVc1bktDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtZWFJsUld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2FuTnZiaUFoUFQwZ0oyOWlhbVZqZENjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnViMjVGZUhCaGJtUmhZbXhsUld4bGJXVnVkQ0E5SUdkbGRGWmhiSFZsS0dwemIyNHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaHViMjVGZUhCaGJtUmhZbXhsUld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCMGFYUnNaU0E5SUVGeWNtRjVMbWx6UVhKeVlYa29hbk52YmlrZ1B5QW5RWEp5WVhsYkp5QXJJR3B6YjI0dWJHVnVaM1JvSUNzZ0oxMG5JRG9nSjA5aWFtVmpkQ2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnZEdocGMweGxkbVZzU1hORGJHOXpaV1FnUFNCdmNHVnVUR1YyWld4eklEd2dNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9aMlYwVkdsMGJHVW9kR2wwYkdVc0lHNTFiR3dzSUhSb2FYTk1aWFpsYkVselEyeHZjMlZrS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dOdmJuWmxjblJLYzI5dVZHOUZiR1Z0Wlc1MGN5aHFjMjl1TENBeEtTazdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJsYkdWdFpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJR052Ym5abGNuUktjMjl1Vkc5RmJHVnRaVzUwY3locWMyOXVMQ0JwYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQjBhR2x6VEdWMlpXeEpjME5zYjNObFpDQTlJR2x1WkdWNElENGdiM0JsYmt4bGRtVnNjenRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdibVY0ZEV4bGRtVnNTWE5EYkc5elpXUWdQU0JwYm1SbGVDQXJJREVnUGlCdmNHVnVUR1YyWld4ek8xeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCamIyNTBZV2x1WlhJZ1BTQm5aWFJEYjI1MFpXNTBjME52Ym5SaGFXNWxjaWgwYUdselRHVjJaV3hKYzBOc2IzTmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2EyVjVJR2x1SUdwemIyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hCY25KaGVTNXBjMEZ5Y21GNUtHcHpiMjViYTJWNVhTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGUnBkR3hsS0NkQmNuSmhlVnNuSUNzZ2FuTnZibHRyWlhsZExteGxibWQwYUNBcklDZGRKeXdnYTJWNUxDQnVaWGgwVEdWMlpXeEpjME5zYjNObFpDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWTI5dWRtVnlkRXB6YjI1VWIwVnNaVzFsYm5SektHcHpiMjViYTJWNVhTd2dhVzVrWlhnZ0t5QXhLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR3B6YjI1YmEyVjVYU0E5UFQwZ2JuVnNiQ0I4ZkNCcWMyOXVXMnRsZVYwZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1oyVjBVM1JoYm1SaGNtUlFZV2x5S0d0bGVTd2diblZzYkNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNocWMyOXVXMnRsZVYwZ2FXNXpkR0Z1WTJWdlppQkVZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1aGNIQmxibVJEYUdsc1pDaG5aWFJUZEdGdVpHRnlaRkJoYVhJb2EyVjVMQ0JxYzI5dVcydGxlVjB1ZEc5SlUwOVRkSEpwYm1jb0tTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2FuTnZibHRyWlhsZElEMDlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1oyVjBWR2wwYkdVb0owOWlhbVZqZENjc0lHdGxlU3dnYm1WNGRFeGxkbVZzU1hORGJHOXpaV1FwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5TG1Gd2NHVnVaRU5vYVd4a0tHTnZiblpsY25SS2MyOXVWRzlGYkdWdFpXNTBjeWhxYzI5dVcydGxlVjBzSUdsdVpHVjRJQ3NnTVNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWhyWlhrc0lHcHpiMjViYTJWNVhTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVk41YldKdmJITWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVWTjViV0p2YkhNb2FuTnZiaWt1Wm05eVJXRmphQ2htZFc1amRHbHZiaWh6ZVcxaWIyd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWh6ZVcxaWIyd3VkRzlUZEhKcGJtY29LU3dnYW5OdmJsdHplVzFpYjJ4ZEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ym5SaGFXNWxjanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJuWlhSVWFYUnNaU2gwYVhSc1pWUmxlSFFzSUc5d2RHbHZibUZzUzJWNUxDQnNaWFpsYkVselEyeHZjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdOMWNuSmxiblJzZVVOc2IzTmxaQ0E5SUd4bGRtVnNTWE5EYkc5elpXUTdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlVOdmJuUmhhVzVsY2k1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1MGFYUnNaVU52Ym5SaGFXNWxjaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNnblpHRjBZUzEwWlhOMEp5d2dKM1JwZEd4bFEyOXVkR0ZwYm1WeUp5azdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIUmxlSFJGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11ZEdsMGJHVlVaWGgwTG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIUnBkR3hsUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG5ScGRHeGxMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdkR2wwYkdWRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWRHbDBiR1V1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnZEdWNGRFVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlZSbGVIUXVjM1I1YkdVN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRFOXdaVzVDZFhSMGIyNG9iR1YyWld4SmMwTnNiM05sWkNrcE8xeHVJQ0FnSUNBZ0lDQWdJR2xtSUNodmNIUnBiMjVoYkV0bGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHVjRkRVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFMyVjVLRzl3ZEdsdmJtRnNTMlY1S1NrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUhSbGVIUkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR1J2WTNWdFpXNTBMbU55WldGMFpWUmxlSFJPYjJSbEtIUnBkR3hsVkdWNGRDa3BPMXh1SUNBZ0lDQWdJQ0FnSUhScGRHeGxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwWlhoMFJXeGxiV1Z1ZENrN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZGYkdWdFpXNTBMbTl1WTJ4cFkyc2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2IzQmxia0oxZEhSdmJpQTlJSFJwZEd4bFJXeGxiV1Z1ZEM1bWFYSnpkRU5vYVd4a08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHOWlhbVZqZEVOdmJuUmxiblJ6SUQwZ2RHbDBiR1ZGYkdWdFpXNTBMbkJoY21WdWRFNXZaR1V1Ym1WNGRGTnBZbXhwYm1jN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2WW1wbFkzUkRiMjUwWlc1MGN5NXpkSGxzWlM1a2FYTndiR0Y1SUQwZ1kzVnljbVZ1ZEd4NVEyeHZjMlZrSUQ4Z0oySnNiMk5ySnlBNklDZHViMjVsSnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzl3Wlc1Q2RYUjBiMjR1YzNSNWJHVXVkSEpoYm5ObWIzSnRJRDBnWTNWeWNtVnVkR3g1UTJ4dmMyVmtJRDhnSjNKdmRHRjBaU2c1TUdSbFp5a25JRG9nSjNKdmRHRjBaU2d3WkdWbktTYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwYkhsRGJHOXpaV1FnUFNBaFkzVnljbVZ1ZEd4NVEyeHZjMlZrTzF4dUlDQWdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwYVhSc1pVVnNaVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjUwWVdsdVpYSkZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRTl3Wlc1Q2RYUjBiMjRvYkdWMlpXeEpjME5zYjNObFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmlkWFIwYjI1RmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2h6ZEhsc1pVOXdkR2x2Ym5NdWIzQmxia0oxZEhSdmJpNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1dmNHVnVRblYwZEc5dUxuTjBlV3hsTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtWc1pXMWxiblF1YzNSNWJHVXVkSEpoYm5ObWIzSnRJRDBnYkdWMlpXeEpjME5zYjNObFpDQS9JQ2R5YjNSaGRHVW9NR1JsWnlrbklEb2dKM0p2ZEdGMFpTZzVNR1JsWnlrbk8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmlkWFIwYjI1RmJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUdkbGRFTnZiblJsYm5SelEyOXVkR0ZwYm1WeUtHbHpRMnh2YzJWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NWpiMjUwWlc1MGMwTnZiblJoYVc1bGNpNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMyVjBRWFIwY21saWRYUmxLQ2RrWVhSaExYUmxjM1FuTENBblkyOXVkR1Z1ZEhORGIyNTBZV2x1WlhJbktUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11WTI5dWRHVnVkSE5EYjI1MFlXbHVaWEl1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdLR2x6UTJ4dmMyVmtJRDhnSjI1dmJtVW5JRG9nSjJKc2IyTnJKeWs3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOdmJuUmhhVzVsY2tWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnWjJWMFUzUmhibVJoY21SUVlXbHlLR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnY0dGcGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NXJaWGxXWVd4MVpWQmhhWEl1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0J3WVdseVJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxtdGxlVlpoYkhWbFVHRnBjaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0J3WVdseVJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaG5aWFJMWlhrb2EyVjVLU2s3WEc0Z0lDQWdJQ0FnSUNBZ2NHRnBja1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFZtRnNkV1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnY0dGcGNrVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z1oyVjBTMlY1S0c1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdhMlY1Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG10bGVTNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHdGxlVVZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTVyWlhrdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ2EyVjVSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaHVZVzFsSUNzZ0p6b2dKeWtwTzF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCclpYbEZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRlpoYkhWbEtIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhaaGJIVmxSV3hsYldWdWREdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2JuVnNiRlI1Y0dVZ1BTQW5iMkpxWldOMEp6dGNiaUFnSUNBZ0lDQWdJQ0J6ZDJsMFkyZ2dLSFI1Y0dWdlppQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5jM2x0WW05c0p6cGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11YzNsdFltOXNWbUZzZFdVdWRHRm5LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWMzbHRZbTlzVm1Gc2RXVXVjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaDJZV3gxWlM1MGIxTjBjbWx1WnlncEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmMzUnlhVzVuSnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXVjM1J5YVc1blZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11YzNSeWFXNW5WbUZzZFdVdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNnblhDSW5JQ3NnZG1Gc2RXVWdLeUFuWENJbktTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmJuVnRZbVZ5SnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXViblZ0WW1WeVZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11Ym5WdFltVnlWbUZzZFdVdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNoMllXeDFaU2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKMkp2YjJ4bFlXNG5PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLSE4wZVd4bFQzQjBhVzl1Y3k1aWIyOXNaV0Z1Vm1Gc2RXVXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXVZbTl2YkdWaGJsWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElHNTFiR3hVZVhCbE9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTV1ZFd4c1ZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11Ym5Wc2JGWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpVVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z2JXVnlaMlZUZEhsc1pVOXdkR2x2Ym5Nb1pHVm1ZWFZzZEhNc0lHOTJaWEp5YVdSbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQnRaWEpuWldRZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnWkdWbVlYVnNkSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFsY21kbFpGdHJaWGxkSUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z1pHVm1ZWFZzZEhOYmEyVjVYU3dnYjNabGNuSnBaR1Z6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JXVnlaMlZrTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5Wlc1a1pYSW9LVHRjYmlBZ0lDQjlYRzU5SWl3aWFXMXdiM0owSUh0a1pXWmhkV3gwSUdGeklFSmhjMlZNYjJkOUlHWnliMjBnSnk0dlltRnpaVXh2WnljN1hHNXBiWEJ2Y25RZ2UyUmxabUYxYkhRZ1lYTWdURzluVG05a1pVMXBlR2x1YzMwZ1puSnZiU0FuTGk5MFpYSnRURzluTG0xcGVHbHVjeTV1YjJSbEp6dGNibWx0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJYWldKT2IyUmxUV2w0YVc1emZTQm1jbTl0SUNjdUwzUmxjbTFNYjJjdWJXbDRhVzV6TG5kbFlpYzdYRzVwYlhCdmNuUWdlMUJzWVhSbWIzSnRmU0JtY205dElDZGpZWFZ6WVd3dGJtVjBMblYwYVd4ekp6dGNibU5zWVhOeklGUmxjbTFNYjJjZ1pYaDBaVzVrY3lCUWJHRjBabTl5YlM1dGFYaFhhWFJvS0VKaGMyVk1iMmNzSUhzbmJtOWtaU2M2VzB4dlowNXZaR1ZOYVhocGJuTmRMQ2QzWldJbk9sdFhaV0pPYjJSbFRXbDRhVzV6WFgwcGUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ2ZWeHVmVnh1WTI5dWMzUWdURzluWjJWeUlEMGdibVYzSUZSbGNtMU1iMmNvS1R0Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUV4dloyZGxjanNpTENKamIyNXpkQ0JNYjJkT2IyUmxUV2w0YVc1eklEMGdLRXh2WjBOc1lYTnpLVDArSUdOc1lYTnpJR1Y0ZEdWdVpITWdURzluUTJ4aGMzTjdYRzRnSUNBZ1kyOXVibVZqZENoamFHRnVibVZzS1h0Y2JpQWdJQ0FnSUNBZ0x5OXViM1JvYVc1blhHNGdJQ0FnZlZ4dUlDQWdJR3h2WnlodFpYTnpZV2RsS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3k1c1pYWmxiQ0ErUFNCMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4eld5ZHNiMmNuWFNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWh0WlhOellXZGxLVHRjYmlBZ0lDQjlYRzRnSUNBZ2MyTnliMnhzUW05MGRHOXRLQ2w3WEc0Z0lDQWdJQ0FnSUM4dmJtOTBhR2x1WjF4dUlDQWdJSDFjYmlBZ0lDQndjbTluY21WemN5aHdjbTlqWlhOelRXVnpjMkZuWlNsN1hHNGdJQ0FnZlZ4dUlDQWdJR1JsWW5WbktHMWxjM05oWjJVcGUxeHVJQ0FnSUNBZ0lDQnBaaWgwYUdsekxteGxkbVZzSUQ0OUlIUm9hWE11UVdOalpYQjBaV1JNWlhabGJITmJKMlJsWW5WbkoxMHBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc1MWJHdzdYRzRnSUNBZ0lDQWdJSDBnWEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1WkdWaWRXY29iV1Z6YzJGblpTazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVEc5blRtOWtaVTFwZUdsdWN6c2lMQ0pwYlhCdmNuUWdlMlJsWm1GMWJIUWdZWE1nU25OdmJsWnBaWGQ5SUdaeWIyMGdKeTR2Y0hKbGRIUjVTbk52YmljN1hHNWpiMjV6ZENCWFpXSk9iMlJsVFdsNGFXNXpJRDBnS0V4dlowTnNZWE56S1QwK0lHTnNZWE56SUdWNGRHVnVaSE1nVEc5blEyeGhjM043WEc0Z0lDQWdZMjl1Ym1WamRDaGtiMk4xYldWdWRFVnNQVzUxYkd3cGUxeHVJQ0FnSUNBZ0lDQmtiMk4xYldWdWRFVnNJRDBnWkc5amRXMWxiblJGYkh4OFpHOWpkVzFsYm5RdVltOWtlVHRjYmlBZ0lDQWdJQ0FnYkdWMElHNXZaR1VnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLRndpZFd4Y0lpazdYRzRnSUNBZ0lDQWdJRzV2WkdVdWMzUjViR1V1WTNOelZHVjRkQ0E5SUZ3aWJHbHpkQzF6ZEhsc1pTMTBlWEJsT2lCdWIyNWxPMXdpTzF4dUlDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEVWc0xtRndjR1Z1WkVOb2FXeGtLRzV2WkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1aeVlXMWxSV3dnUFNCa2IyTjFiV1Z1ZEVWc08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dloyZGxja1ZzSUQwZ1pHOWpkVzFsYm5SRmJDNW5aWFJGYkdWdFpXNTBjMEo1VkdGblRtRnRaU2hjSW5Wc1hDSXBXekJkTzF4dUlDQWdJSDFjYmlBZ0lDQnpZM0p2Ykd4Q2IzUjBiMjBvWld4bGJXVnVkRDF1ZFd4c0tYdGNiaUFnSUNBZ0lDQWdaV3hsYldWdWRDQTlJR1ZzWlcxbGJuUWdmSHdnZEdocGN5NW1jbUZ0WlVWc08xeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWduYzJOdmJHd2dZbTkwZEc5dElDY2dLeUJsYkdWdFpXNTBMbk5qY205c2JFaGxhV2RvZENBcklHVnNaVzFsYm5RdVkyeHBaVzUwU0dWcFoyaDBLVHRjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6WTNKdmJHeFViM0FnUFNCbGJHVnRaVzUwTG5OamNtOXNiRWhsYVdkb2RDQXRJR1ZzWlcxbGJuUXVZMnhwWlc1MFNHVnBaMmgwTzF4dUlDQWdJSDFjYmlBZ0lDQndjbTluY21WemN5aHdjbTlqWlhOelRXVnpjMkZuWlNsN1hHNGdJQ0FnSUNBZ0lDOHZJR3hsZENCdWIyUmxJRDBnZEdocGN5NXNiMmRuWlhKRmJDNW5aWFJGYkdWdFpXNTBjMEo1VkdGblRtRnRaU2hjSW14cE9tNTBhQzFzWVhOMExXOW1MWFI1Y0dVb01TbGNJaWs3WEc0Z0lDQWdJQ0FnSUd4bGRDQk1TVTV2WkdWeklEMGdkR2hwY3k1c2IyZG5aWEpGYkM1blpYUkZiR1Z0Wlc1MGMwSjVWR0ZuVG1GdFpTaGNJbXhwWENJcE8xeHVJQ0FnSUNBZ0lDQnNaWFFnYm05a1pTQTlJRXhKVG05a1pYTmJURWxPYjJSbGN5NXNaVzVuZEdndE1WMDdYRzRnSUNBZ0lDQWdJR2xtS0NGdWIyUmxJSHg4SUc1dlpHVXVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLRndpYkc5bloyVnlMWEJ5YjJkeVpYTnpYQ0lwS1hzdkwyTnlaV0YwWlNCdVpYZGNiaUFnSUNBZ0lDQWdJQ0FnSUc1dlpHVWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtGd2liR2xjSWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1YjJSbExtTnNZWE56VEdsemRDNWhaR1FvWENKc2IyZG5aWEl0Y0hKdlozSmxjM05jSWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxteHZaMmRsY2tWc0xtRndjR1Z1WkVOb2FXeGtLRzV2WkdVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR3hsZENCcWMyOXVUbTlrWlNBOUlFcHpiMjVXYVdWM0xrcFRUMDVFYVhOd2JHRjVLSEJ5YjJObGMzTk5aWE56WVdkbEtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdSaGRHVWdQU0J1WlhjZ1JHRjBaU2dwTzF4dUlDQWdJQ0FnSUNCdWIyUmxMbWx1Ym1WeVNGUk5UQ0E5SUdBOGNDQnpkSGxzWlQxY0ltWnZiblF0YzJsNlpUb2dNVEp3ZURzZ2RHVjRkQzFoYkdsbmJqcHlhV2RvZEZ3aVBpUjdaR0YwWlgwOEwzQStZRHRjYmlBZ0lDQWdJQ0FnYm05a1pTNWhjSEJsYm1SRGFHbHNaQ2hxYzI5dVRtOWtaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk55YjJ4c1FtOTBkRzl0S0NrN1hHNGdJQ0FnZlZ4dUlDQWdJR3h2WnlodFpYTnpZV2RsS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3k1c1pYWmxiQ0ErUFNCMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4eld5ZHNiMmNuWFNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NXNiMmRuWlhKRmJDQjhmQ0FoZEdocGN5NXNiMmRuWlhKRmJDNWhjSEJsYm1SRGFHbHNaQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OdmJtNWxZM1FvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnNaWFFnYm05a1pTQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb1hDSnNhVndpS1R0Y2JpQWdJQ0FnSUNBZ2JtOWtaUzV6ZEhsc1pTNWpjM05VWlhoMElEMGdKMkp2Y21SbGNpMWliM1IwYjIwNklERndlQ0J6YjJ4cFpDQWpaR1ZrWldSbE95YzdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnNaWFFnYW5OdmJrNXZaR1VnUFNCS2MyOXVWbWxsZHk1S1UwOU9SR2x6Y0d4aGVTaHRaWE56WVdkbEtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdSaGRHVWdQU0J1WlhjZ1JHRjBaU2dwTzF4dUlDQWdJQ0FnSUNCdWIyUmxMbWx1Ym1WeVNGUk5UQ0E5SUdBOGNDQnpkSGxzWlQxY0ltWnZiblF0YzJsNlpUb2dNVEp3ZURzZ2RHVjRkQzFoYkdsbmJqcHlhV2RvZEZ3aVBpUjdaR0YwWlgwOEwzQStZRHRjYmlBZ0lDQWdJQ0FnYm05a1pTNWhjSEJsYm1SRGFHbHNaQ2hxYzI5dVRtOWtaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzluWjJWeVJXd3VZWEJ3Wlc1a1EyaHBiR1FvYm05a1pTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTnliMnhzUW05MGRHOXRLQ2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktHMWxjM05oWjJVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdSbFluVm5LRzFsYzNOaFoyVXBlMXh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMbXhsZG1Wc0lENDlJSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE5iSjJSbFluVm5KMTBwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0x5OXVieUJ6YUc5M0lHOXVJSGRsWWlCelkzSmxaVzQ3SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVrWldKMVp5aHRaWE56WVdkbEtUdGNiaUFnSUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JYWldKT2IyUmxUV2w0YVc1ek95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYM1YwYVd4elgxODdJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09IiwiaW1wb3J0IHtUZW5zb3J9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQge2luZGV4REJTdG9yYWdlfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgRW5zZW1ibGVNaXhpbnN9IGZyb20gJy4vZW5zZW1ibGUubWl4aW5zJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBGdW5jdGlvbn0gZnJvbSAnLi9mdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdXNhbE5ldCBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoVGVuc29yLFtFbnNlbWJsZU1peGluc10pe1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gbmV0Q29uZmlnXG4gICAgICogQHBhcmFtICB7fSBuZXRQYXJhbXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciggbmV0Q29uZmlnLCBuZXRQYXJhbXM9bnVsbCwgc3RvcmFnZT1udWxsICl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgICAgICB0aGlzLlIgPSB0aGlzLkYuQ29yZUZ1bmN0aW9uO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2UgfHwgaW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMuc2F2ZU1vZGVsRGlyID0gJy9zYXZlTW9kZWwvJztcbiAgICAgICAgdGhpcy5IeXBlclBhcmFtZXRlcnMgPSB0aGlzLkYuZ2V0SHlwZXJQYXJhbWV0ZXIobmV0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5CYXNlUGlwZWxpbmUgPSB0aGlzLkYuZ2V0UGlwZWxpbmUobmV0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5uZXRQYXJhbXMgPSB0aGlzLnNldE9ySW5pdFBhcmFtcyh0aGlzLkJhc2VQaXBlbGluZSwgbmV0UGFyYW1zKTtcbiAgICAgICAgdGhpcy5mbGF0dGVuUGFyYW1zID0gdGhpcy5mbGF0dGVuUGFyYW1zKHRoaXMubmV0UGFyYW1zKTsgICAgICAgIFxuICAgIH1cblxuICAgIHNldCBMb2dnZXIobG9nZ2VyKXtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgfVxuXG4gICAgZ2V0IExvZ2dlcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZXI7XG4gICAgfVxuXG4gICAgZmxhdHRlblBhcmFtcyhwYXJhbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBGID0gdGhpcy5GO1xuICAgICAgICBjb25zdCBNYXBWYWx1ZXMgPSAob2JqT3JBcnJheSk9PkFycmF5LmlzQXJyYXkob2JqT3JBcnJheSk/b2JqT3JBcnJheTpPYmplY3QudmFsdWVzKG9iak9yQXJyYXkpO1xuICAgICAgICBjb25zdCBGbGF0dGVuID0gKHB2KT0+e1xuICAgICAgICAgICAgaWYoRi5pc1RlbnNvcihwdikpe1xuICAgICAgICAgICAgICAgIHJldHVybiBwdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IE1hcFZhbHVlcyhwdik7XG4gICAgICAgICAgICAgICAgbGV0IGZsYXR0ZW4gPSB2YWx1ZXMucmVkdWNlKChmbGF0dGVuLCB2KT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gRmxhdHRlbih2KTtcbiAgICAgICAgICAgICAgICAgICAgaWYoUi5pcyhBcnJheSwgcmVzKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuID0gWy4uLmZsYXR0ZW4sIC4uLnJlc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW4gPSBbLi4uZmxhdHRlbiwgcmVzXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmxhdHRlbjtcbiAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsYXR0ZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCB2YWx1ZXMgPSBNYXBWYWx1ZXMocGFyYW1zKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKChmbGF0dGVuLHYpPT5bLi4uZmxhdHRlbiwgLi4uRmxhdHRlbih2KV0sW10pO1xuICAgIH1cblxuICAgIGxheWVyKHZhbHVlLCBsYXllckNvbmZpZ3VyZSwgbGF5ZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3Qge05hbWUsIFR5cGUsIFBhcmFtZXRlcnMsIEZsb3d9ID0gbGF5ZXJDb25maWd1cmU7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtOYW1lLCBUeXBlLCBQYXJhbWV0ZXJzLCBGbG93fSk7XG4gICAgICAgIGNvbnN0IE9wc1J1bm5lciA9IFIuYWRkSW5kZXgoUi5yZWR1Y2UpKFIuX18se3Jlc3VsdDogdmFsdWUsIHRyYWNlOiB7fX0sIEZsb3cpO1xuICAgICAgICB2YXIge3Jlc3VsdCwgdHJhY2V9ID0gT3BzUnVubmVyKCh7cmVzdWx0LCB0cmFjZX0sIG5vZGUsIGlkeCk9PntcbiAgICAgICAgICAgIGlmKG5vZGUuUGFyYW1ldGVyKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLlRbbm9kZS5PcF0ocmVzdWx0LCBsYXllclBhcmFtZXRlcnNbbm9kZS5QYXJhbWV0ZXJdLCAuLi5ub2RlLkFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLlRbbm9kZS5PcF0ocmVzdWx0LCAuLi5ub2RlLkFyZ3MpOyAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmFjZVtpZHhdID0gcmVzdWx0LnNoYXBlO1xuICAgICAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7W05hbWVdOiByZXN1bHQsIHRyYWNlfTtcbiAgICB9XG5cbiAgICBzZXRPckluaXRQYXJhbXMocGlwZWxpbmUsIG5ldFBhcmFtcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFQgPSB0aGlzLlQsIEYgPSB0aGlzLkY7XG4gICAgICAgIGxldCBwaXBlUGFyYW1zID0gUi5mcm9tUGFpcnMoUi5maWx0ZXIoKFtrLHZdKT0+diAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSLm1hcChSLl9fLCBwaXBlbGluZSkocD0+W3AuTmFtZSwgcC5QYXJhbWV0ZXJzXSkpKTtcbiAgICAgICAgY29uc3QgU2V0T3JJbml0ID0gKG1haW5WYWx1ZSwgc3ViVmFsKT0+e1xuICAgICAgICAgICAgbGV0IGtleXMgPSBSLmtleXMobWFpblZhbHVlKTtcbiAgICAgICAgICAgIGxldCBrZXlNYWluVmFsU3ViVmFsID0gUi5tYXAoKGspPT4gW2ssIFIucHJvcChrLCBtYWluVmFsdWUpLCBSLnByb3BPcihudWxsLCBrLCBzdWJWYWwpXSwga2V5cyk7XG4gICAgICAgICAgICBjb25zdCBWYWxNYXBwaW5nID0gKFtrZXksIG1haW5WYWwsIHN1YlZhbF0pPT57XG4gICAgICAgICAgICAgICAgaWYoRi5pc1BhcmFtZXRlcihtYWluVmFsKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtU2hhcGUgPSBtYWluVmFsO1xuICAgICAgICAgICAgICAgICAgICBpZihSLmlzTmlsKHN1YlZhbCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFQudmFyaWFibGUoVC5yYW5kb21Ob3JtYWwocGFyYW1TaGFwZSkpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFQudmFyaWFibGUoVC50ZW5zb3Ioc3ViVmFsKS5yZXNoYXBlKHBhcmFtU2hhcGUpKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFNldE9ySW5pdChtYWluVmFsLCBzdWJWYWwpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFIuZnJvbVBhaXJzKFIubWFwKFZhbE1hcHBpbmcsIGtleU1haW5WYWxTdWJWYWwpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFNldE9ySW5pdChwaXBlUGFyYW1zLCBuZXRQYXJhbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gc2FtcGxlc1xuICAgICAqIEBwYXJhbSAge30gbnVtU2FtcGxlcz0xXG4gICAgICovXG4gICAgbWFrZVByZWRpY3Qoc2FtcGxlcywgbnVtU2FtcGxlcz0xKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgZiA9IHRoaXMuRiwgbCA9IHRoaXMuTDtcbiAgICAgICAgdGhpcy5IeXBlclBhcmFtZXRlcnMuRGF0YXNpemUgPSBudW1TYW1wbGVzO1xuICAgICAgICBjb25zdCBQaXBlbGluZSA9IGYucGFyYW1ldGVyQWNxdWlzaXRpb24odGhpcy5CYXNlUGlwZWxpbmUsIHRoaXMuSHlwZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coKHtQaXBlbGluZX0pKTtcbiAgICAgICAgbGV0IHBpcGVWYWx1ZSA9IHtQaXBlSW5wdXQ6IHNhbXBsZXN9LCB0cmFjZXMgPSBbXSwgbmV0UGFyYW1zID0gdGhpcy5uZXRQYXJhbXM7XG4gICAgICAgIHJldHVybiBULnRpZHkoKCk9PntcbiAgICAgICAgICAgIGZvcihsZXQgbGF5ZXIgb2YgUGlwZWxpbmUpe1xuICAgICAgICAgICAgICAgIGxldCBsYXllck91dHB1dCA9IHRoaXMubGF5ZXIocGlwZVZhbHVlW2xheWVyLklucHV0XSwgbGF5ZXIsIG5ldFBhcmFtc1tsYXllci5OYW1lXSk7XG4gICAgICAgICAgICAgICAgcGlwZVZhbHVlW2xheWVyLk5hbWVdID0gbGF5ZXJPdXRwdXRbbGF5ZXIuTmFtZV07XG4gICAgICAgICAgICAgICAgdHJhY2VzLnB1c2goe1tsYXllci5OYW1lXTogbGF5ZXJPdXRwdXQudHJhY2V9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHt0cmFjZXN9KTtcbiAgICAgICAgICAgIGxldCBwaXBlT3V0cHV0ID0gcGlwZVZhbHVlWydQaXBlT3V0cHV0J107XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IHBpcGVPdXRwdXQuc3ViKFQubG9nU3VtRXhwKHBpcGVPdXRwdXQsIDEsIHRydWUpKTtcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ID0gbG9nUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgICAgICByZXR1cm4ge2xvZ1Byb2IsIHByZWRpY3R9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBzYW1wbGVCYXRjaFxuICAgICAqIEBwYXJhbSAge30gbGFiZWxCYXRjaFxuICAgICAqIEBwYXJhbSAge30gbnVtU2FtcGxlXG4gICAgICovXG4gICAgbG9zcyhiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzLCBudW1TYW1wbGUpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3IoYmF0Y2hTYW1wbGVzKS5yZXNoYXBlKFtudW1TYW1wbGUsIC0xXSkuYXNUeXBlKCdmbG9hdDMyJyk7IFxuICAgICAgICBsZXQgbGFiZWxUZW5zb3IgID0gVC50ZW5zb3IoYmF0Y2hMYWJlbHMpLnJlc2hhcGUoW251bVNhbXBsZSwgLTFdKTtcbiAgICAgICAgY29uc3Qge2xvZ1Byb2J9ID0gdGhpcy5tYWtlUHJlZGljdChzYW1wbGVUZW5zb3IsIG51bVNhbXBsZSk7XG4gICAgICAgIGNvbnN0IGxpa2VsaWhvb2QgPSBsb2dQcm9iLm5lZygpLm11bChsYWJlbFRlbnNvcik7XG4gICAgICAgIGNvbnN0IGxvc3MgPSBsaWtlbGlob29kLm1lYW4oKTtcbiAgICAgICAgcmV0dXJuIGxvc3M7XG4gICAgfTtcbiAgICBtYWtlT3B0aW1pemVyKG1ldGhvZD0nYWRhbScsIGFyZ3M9WzAuMDJdKXsgICAgICAgIFxuICAgICAgICB0aGlzLm9wdGltaXplciA9IHRoaXMuVC50cmFpblttZXRob2RdKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpbWl6ZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gU2FtcGxlR2VuZXJhdG9yRm5cbiAgICAgKiBAcGFyYW0gIHt9IGJhdGNoU2l6ZVxuICAgICAqIEBwYXJhbSAge30gbnVtRXBvY2hzPTJcbiAgICAgKiBAcGFyYW0gIHt9IGxyPTAuMDFcbiAgICAgKi9cbiAgICBhc3luYyB0cmFpbihTYW1wbGVHZW5lcmF0b3JGbiwgbnVtRXBvY2hzID0gMiwgbHI9MC4wMDEpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBsb3NzID0gW10sIGF2ZXJhZ2VMb3NzID0gW107XG4gICAgICAgIGlmKCF0aGlzLm9wdGltaXplcil7XG4gICAgICAgICAgICB0aGlzLm1ha2VPcHRpbWl6ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3B0aW1pemVyID0gdGhpcy5vcHRpbWl6ZXI7XG4gICAgICAgIGZvcihsZXQgZXBvY2hJZHggb2YgRi5yYW5nZShudW1FcG9jaHMpKXtcbiAgICAgICAgICAgIGlmKHRoaXMubG9nZ2VyLnByb2dyZXNzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5wcm9ncmVzcyh7ZXBvY2hJZHgsIGF2ZXJhZ2VMb3NzLCB0aW1lOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogc3RhcnQudG9JU09TdHJpbmcoKSwgZWxhcHNlOiAobmV3IERhdGUoKSAtIHN0YXJ0KS8xMDAwfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzYW1wbGVHZW5lcmF0b3IgPSBTYW1wbGVHZW5lcmF0b3JGbigpO1xuICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQge2lkeCwgYmF0Y2hTaXplLCBkYXRhfSBvZiBzYW1wbGVHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgICAgIGxldCBbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc10gPSBkYXRhO1xuICAgICAgICAgICAgICAgIG9wdGltaXplci5taW5pbWl6ZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgbCA9IHRoaXMubG9zcyhiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzLCBiYXRjaFNpemUpO1xuICAgICAgICAgICAgICAgICAgICBsb3NzID0gWy4uLmxvc3MsIC4uLmwuZGF0YVN5bmMoKV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXZlcmFnZUxvc3MgPSBbLi4uYXZlcmFnZUxvc3MsIFIubWVhbihsb3NzKV07XG4gICAgICAgICAgICBsb3NzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICByZXNvbHZlKHthdmVyYWdlTG9zc30pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMgdGVzdChUZXN0U2FtcGxlR2VuZXJhdG9yRm4pe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCB0ZXN0U2FtcGxlR2VuZXJhdG9yID0gVGVzdFNhbXBsZUdlbmVyYXRvckZuKCk7XG4gICAgICAgIGxldCB0ZXN0UmVzdWx0ID0gVC56ZXJvcyhbMV0pO1xuICAgICAgICBsZXQgdGVzdFNpemUgPSAwO1xuICAgICAgICBmb3IgYXdhaXQgKGxldCB7aWR4LCBiYXRjaFNpemUsIGRhdGF9IG9mIHRlc3RTYW1wbGVHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgbGV0IFtiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXSA9IGRhdGE7XG4gICAgICAgICAgICBsZXQgbGFiZWxUZW5zb3IgID0gVC50ZW5zb3IoYmF0Y2hMYWJlbHMpLnJlc2hhcGUoW2JhdGNoU2l6ZSwgLTFdKTtcbiAgICAgICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihiYXRjaFNhbXBsZXMpO1xuICAgICAgICAgICAgbGV0IG51bUNsYXNzZXMgPSBsYWJlbFRlbnNvci5zaGFwZVsxXTtcbiAgICAgICAgICAgIHRlc3RTaXplICs9IGJhdGNoU2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IHtwcmVkaWN0fSA9IHRoaXMubWFrZVByZWRpY3Qoc2FtcGxlVGVuc29yLCBiYXRjaFNpemUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBvbmVob3RQcmVkaWN0ID0gVC5vbmVIb3QocHJlZGljdCwgbnVtQ2xhc3Nlcyk7XG4gICAgICAgICAgICBvbmVob3RQcmVkaWN0LnByaW50KCk7XG4gICAgICAgICAgICBsYWJlbFRlbnNvci5wcmludCgpO1xuICAgICAgICAgICAgb25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpLnByaW50KCk7XG4gICAgICAgICAgICB0ZXN0UmVzdWx0ID0gdGVzdFJlc3VsdC5hZGQob25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGVzdFJlc3VsdC5kYXRhKCk7XG4gICAgICAgIGxldCBwYXNzID0gcmVzdWx0WzBdO1xuICAgICAgICBsZXQgYWNjdXJhY3kgPSBwYXNzL3Rlc3RTaXplO1xuICAgICAgICByZXR1cm4ge2FjY3VyYWN5LCBwYXNzfTsgICAgICAgIFxuICAgIH1cblxuICAgIGFzeW5jIGdldFBhcmFtcyhhc09iamVjdD10cnVlKXtcbiAgICAgICAgY29uc3QgRiA9IHRoaXMuRiwgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgZ2V0UGFyYW1zID0gYXN5bmMgKHBhcmFtcyk9PntcbiAgICAgICAgICAgIGlmKEYuaXNUZW5zb3IocGFyYW1zKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXdhaXQgcGFyYW1zLmRhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBrVmFscyA9IFIudG9QYWlycyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtrLCB2YWxdIG9mIGtWYWxzKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2tdID0gYXdhaXQgZ2V0UGFyYW1zKHZhbCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgcGFyYW1zID0gYXdhaXQgZ2V0UGFyYW1zKHRoaXMubmV0UGFyYW1zKTtcbiAgICAgICAgaWYoYXNPYmplY3Qpe1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0U2F2ZWRQYXJhbXMoKXtcbiAgICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEZpbGVMaXN0KHRoaXMuc2F2ZU1vZGVsRGlyKTtcbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0Lm1hcChmaWxlTmFtZT0+ZmlsZU5hbWUucmVwbGFjZSh0aGlzLnNhdmVNb2RlbERpciwnJykpO1xuICAgIH1cbiAgICBhc3luYyBzYXZlUGFyYW1zKGZpbGVOYW1lPSdzYXZlLm1vZGVsJyl7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZ2V0UGFyYW1zKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS53cml0ZUZpbGUodGhpcy5zYXZlTW9kZWxEaXIgKyBmaWxlTmFtZSwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRQYXJhbXMoZmlsZU5hbWUsIHBhcmFtcz1udWxsKXtcbiAgICAgICAgaWYoIXBhcmFtcyl7XG4gICAgICAgICAgICBsZXQgX3BhcmFtcyA9IGF3YWl0IHRoaXMuc3RvcmFnZS5yZWFkRmlsZSh0aGlzLnNhdmVNb2RlbERpcitmaWxlTmFtZSk7XG4gICAgICAgICAgICBwYXJhbXMgPSBKU09OLnBhcnNlKF9wYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV0UGFyYW1zID0gdGhpcy5zZXRPckluaXRQYXJhbXModGhpcy5CYXNlUGlwZWxpbmUsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFBhcmFtcyhmYWxzZSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcImNhdXNhbC1uZXQuY29yZVwiO1xuZXhwb3J0IGRlZmF1bHQgQ29yZTsiLCJpbXBvcnQgKiBhcyBEYXRhc2V0cyBmcm9tICdjYXVzYWwtbmV0LmRhdGFzZXRzJztcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXRzOyIsImNvbnN0IEVuc2VtYmxlTWl4aW5zID0gKFBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBQaXBlbGluZUNsYXNzeyBcbiAgICBhc3luYyBlbnNlbWJsZVRlc3QoVGVzdFNhbXBsZUdlbmVyYXRvckZuLCBtb2RlbExpc3Qpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCB0ZXN0U2FtcGxlR2VuZXJhdG9yID0gVGVzdFNhbXBsZUdlbmVyYXRvckZuKCk7XG4gICAgICAgIGxldCB0ZXN0UmVzdWx0ID0gVC56ZXJvcyhbMV0pO1xuICAgICAgICBsZXQgdGVzdFNpemUgPSAwO1xuICAgICAgICBmb3IgYXdhaXQgKGxldCB7aWR4LCBiYXRjaFNpemUsIGRhdGF9IG9mIHRlc3RTYW1wbGVHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgbGV0IFtiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXSA9IGRhdGE7XG4gICAgICAgICAgICBsZXQgbGFiZWxUZW5zb3IgID0gVC50ZW5zb3IoYmF0Y2hMYWJlbHMpLnJlc2hhcGUoW2JhdGNoU2l6ZSwgLTFdKTtcbiAgICAgICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihiYXRjaFNhbXBsZXMpO1xuICAgICAgICAgICAgbGV0IG51bUNsYXNzZXMgPSBsYWJlbFRlbnNvci5zaGFwZVsxXTtcbiAgICAgICAgICAgIHRlc3RTaXplICs9IGJhdGNoU2l6ZTtcbiAgICAgICAgICAgIGNvbnN0IHtwcmVkaWN0fSA9IGF3YWl0IHRoaXMubWFrZUVuc2VtYmxlUHJlZGljdChtb2RlbExpc3QsIHNhbXBsZVRlbnNvciwgYmF0Y2hTaXplKTtcbiAgICAgICAgICAgIGxldCBvbmVob3RQcmVkaWN0ID0gVC5vbmVIb3QocHJlZGljdCwgbnVtQ2xhc3Nlcyk7XG4gICAgICAgICAgICBvbmVob3RQcmVkaWN0LnByaW50KCk7XG4gICAgICAgICAgICBsYWJlbFRlbnNvci5wcmludCgpO1xuICAgICAgICAgICAgb25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpLnByaW50KCk7XG4gICAgICAgICAgICB0ZXN0UmVzdWx0ID0gdGVzdFJlc3VsdC5hZGQob25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGVzdFJlc3VsdC5kYXRhKCk7XG4gICAgICAgIGxldCBwYXNzID0gcmVzdWx0WzBdO1xuICAgICAgICBsZXQgYWNjdXJhY3kgPSBwYXNzL3Rlc3RTaXplO1xuICAgICAgICByZXR1cm4ge2FjY3VyYWN5LCBwYXNzfTsgICAgICAgIFxuICAgIH1cbiAgICBhc3luYyBtYWtlRW5zZW1ibGVQcmVkaWN0KG1vZGVsTGlzdCwgc2FtcGxlcywgbnVtU2FtcGxlcz0xKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgZiA9IHRoaXMuRjtcbiAgICAgICAgdGhpcy5IeXBlclBhcmFtZXRlcnMuRGF0YXNpemUgPSBudW1TYW1wbGVzO1xuICAgICAgICBjb25zdCBQaXBlbGluZSA9IGYucGFyYW1ldGVyQWNxdWlzaXRpb24odGhpcy5CYXNlUGlwZWxpbmUsIHRoaXMuSHlwZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgbGV0IHBpcGVWYWx1ZSA9IHtQaXBlSW5wdXQ6IHNhbXBsZXN9LCB0cmFjZXMgPSBbXSwgbmV0UGFyYW1zID0gdGhpcy5uZXRQYXJhbXM7XG4gICAgICAgIGxldCBwcm9icyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1vZGVsIG9mIG1vZGVsTGlzdCl7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQYXJhbXMobW9kZWwpO1xuICAgICAgICAgICAgbGV0IHtsb2dQcm9ifSA9IFQudGlkeSgoKT0+e1xuICAgICAgICAgICAgICAgIGZvcihsZXQgbGF5ZXIgb2YgUGlwZWxpbmUpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGF5ZXJPdXRwdXQgPSB0aGlzLmxheWVyKHBpcGVWYWx1ZVtsYXllci5JbnB1dF0sIGxheWVyLCBuZXRQYXJhbXNbbGF5ZXIuTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICBwaXBlVmFsdWVbbGF5ZXIuTmFtZV0gPSBsYXllck91dHB1dFtsYXllci5OYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgdHJhY2VzLnB1c2goe1tsYXllci5OYW1lXTogbGF5ZXJPdXRwdXQudHJhY2V9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coe3RyYWNlc30pO1xuICAgICAgICAgICAgICAgIGxldCBwaXBlT3V0cHV0ID0gcGlwZVZhbHVlWydQaXBlT3V0cHV0J107XG4gICAgICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBwaXBlT3V0cHV0LnN1YihULmxvZ1N1bUV4cChwaXBlT3V0cHV0LCAxLCB0cnVlKSk7XG4gICAgICAgICAgICAgICAgbGV0IHByZWRpY3QgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2xvZ1Byb2IsIHByZWRpY3R9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsb2dQcm9iLnByaW50KCk7XG4gICAgICAgICAgICBwcm9icy5wdXNoKFQuZXhwKGxvZ1Byb2IpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbWVhblByb2IgPSBULmNvbmNhdChwcm9icykubWVhbigwLCB0cnVlKTtcbiAgICAgICAgbWVhblByb2IucHJpbnQoKTtcbiAgICAgICAgbGV0IGVuc2VtYmxlUHJlZGljdCA9IG1lYW5Qcm9iLmFyZ01heCgxKTtcbiAgICAgICAgcmV0dXJuIHtwcmVkaWN0OmVuc2VtYmxlUHJlZGljdH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEVuc2VtYmxlTWl4aW5zOyIsImltcG9ydCB7RnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9ufSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbiBleHRlbmRzIEJhc2VGdW5jdGlvbntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlzVGVuc29yKHZhbCl7XG4gICAgICAgIC8vIHJldHVybiB2YWwgaW5zdGFuY2VvZiB0aGlzJiYgXG4gICAgICAgIHJldHVybiB2YWwuc2hhcGUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmFuZ2UobGVuKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5yYW5nZSgwLCBsZW4pO1xuICAgIH1cblxuICAgIGlzUGFyYW1ldGVyKHZhbCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmlzKEFycmF5KSh2YWwpICYmIFIuYWxsKFIuaXMoTnVtYmVyKSwgdmFsKTtcbiAgICB9XG5cbiAgICBnZXRQaXBlbGluZShuZXRDb25maWcpe1xuICAgICAgICAvL1RPRE86IG1ha2UgYXNzZXJ0b3JcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5wcm9wKCdQaXBlbGluZScsIG5ldENvbmZpZyk7XG4gICAgfVxuICAgIFxuICAgIGdldEh5cGVyUGFyYW1ldGVyKG5ldENvbmZpZyl7XG4gICAgICAgIC8vVE9ETzogbWFrZSBhc3NlcnRvclxuICAgICAgICByZXR1cm4gdGhpcy5SLnByb3AoJ0h5cGVyUGFyYW1ldGVycycsIG5ldENvbmZpZyk7XG4gICAgfVxuICAgIFxuICAgIGdldFRyYXZlcnNlKCl7XG4gICAgICAgIHJldHVybiBSLmN1cnJ5KGZ1bmN0aW9uKGtleXMsIGl0ZW0pe1xuICAgICAgICAgICAgUi5waXBlLmFwcGx5KG51bGwsIFIubWFwKFIucHJvcCwga2V5cykpKGl0ZW0pO1xuICAgICAgICB9KTsgXG4gICAgfVxuICAgIFxuICAgIHBhcmFtZXRlckFjcXVpc2l0aW9uKHBpcGVsaW5lSXRlbSwgaHlwZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjsgXG4gICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VJZk1hdGNoKHZhbHVlLCBoeXBlclBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgaWYoUi5pcyhTdHJpbmcsIHZhbHVlKSAmJiBSLnN0YXJ0c1dpdGgoJyQnLCB2YWx1ZSkpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IFIuc2xpY2UoMSwgSW5maW5pdHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUi5wcm9wKGtleSwgaHlwZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkb1JlcGxhY2VJZk1hdGNoID0gUi5jdXJyeShyZXBsYWNlSWZNYXRjaCkoUi5fXywgaHlwZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZUh5cGVyUGFyYW1ldGVyKHBpcGVsaW5lSXRlbSl7XG4gICAgICAgICAgICBpZihSLmlzKEFycmF5LCBwaXBlbGluZUl0ZW0pIHx8IFIuaXMoT2JqZWN0LCBwaXBlbGluZUl0ZW0pKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gUi5tYXAocmVwbGFjZUh5cGVyUGFyYW1ldGVyLCBwaXBlbGluZUl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9SZXBsYWNlSWZNYXRjaChwaXBlbGluZUl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXBsYWNlSHlwZXJQYXJhbWV0ZXIocGlwZWxpbmVJdGVtKTtcbiAgICB9XG5cbiAgICBpc1RlbnNvcihvYmplY3Qpe1xuICAgICAgICByZXR1cm4gb2JqZWN0LnNpemUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Quc2hhcGUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZHR5cGUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgTG9nIGZyb20gXCJjYXVzYWwtbmV0LmxvZ1wiO1xuZXhwb3J0IGRlZmF1bHQgTG9nOyIsImltcG9ydCAqIGFzIE1lbUNhY2hlIGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuZXhwb3J0IGRlZmF1bHQgTWVtQ2FjaGU7IiwiaW1wb3J0ICogYXMgU3RvcmFnZSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZTsiLCJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmV4cG9ydCBkZWZhdWx0IFV0aWxzOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9kYXRhc2V0c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==