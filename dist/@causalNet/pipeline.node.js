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
    constructor(prefix = []) {
      this.prefix = prefix;
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
    constructor(prefix) {
      super(prefix);
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
      console.log(message);
    }

    scrollBottom() {//nothing
    }

    progress(processMessage) {
      let node = this.getElementsByTagName("li:nth-last-of-type(1)");
      console.log(node);

      if (!node) {//create new
      }
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
      console.log(this.prefix.join('/'));
      console.log(message);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9wcmV0dHlKc29uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2cuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQmFzZUxvZyIsImNvbnN0cnVjdG9yIiwicHJlZml4IiwiSnNvblZpZXciLCJKU09ORGlzcGxheSIsImpzb24iLCJvcGVuTGV2ZWxzQXJnIiwic3R5bGVPcHRpb25zQXJnIiwiREVGQVVMVF9TVFlMRV9PUFRJT05TIiwicm9vdCIsInRhZyIsInN0eWxlIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZSIsInRpdGxlVGV4dCIsIm9wZW5CdXR0b24iLCJjb250ZW50c0NvbnRhaW5lciIsImtleVZhbHVlUGFpciIsImtleSIsInN5bWJvbFZhbHVlIiwic3RyaW5nVmFsdWUiLCJudW1iZXJWYWx1ZSIsImJvb2xlYW5WYWx1ZSIsIm51bGxWYWx1ZSIsIm9wZW5MZXZlbHMiLCJpc05hTiIsInBhcnNlSW50IiwiSW5maW5pdHkiLCJzdHlsZU9wdGlvbnMiLCJtZXJnZVN0eWxlT3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsIlR5cGVFcnJvciIsInRvIiwiaW5kZXgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuZXh0U291cmNlIiwibmV4dEtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJlbmRlciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjc3NUZXh0IiwidW5kZWZpbmVkIiwidm9pZEVsZW1lbnQiLCJnZXRWYWx1ZSIsImFwcGVuZENoaWxkIiwiRGF0ZSIsImRhdGVFbGVtZW50IiwidG9JU09TdHJpbmciLCJub25FeHBhbmRhYmxlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsInRoaXNMZXZlbElzQ2xvc2VkIiwiZ2V0VGl0bGUiLCJjb252ZXJ0SnNvblRvRWxlbWVudHMiLCJuZXh0TGV2ZWxJc0Nsb3NlZCIsImNvbnRhaW5lciIsImdldENvbnRlbnRzQ29udGFpbmVyIiwiZ2V0U3RhbmRhcmRQYWlyIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZm9yRWFjaCIsInN5bWJvbCIsInRvU3RyaW5nIiwib3B0aW9uYWxLZXkiLCJsZXZlbElzQ2xvc2VkIiwiY3VycmVudGx5Q2xvc2VkIiwiY29udGFpbmVyRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRFbGVtZW50IiwidGl0bGVFbGVtZW50IiwiZ2V0T3BlbkJ1dHRvbiIsImdldEtleSIsImNyZWF0ZVRleHROb2RlIiwib25jbGljayIsImZpcnN0Q2hpbGQiLCJvYmplY3RDb250ZW50cyIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsImRpc3BsYXkiLCJ0cmFuc2Zvcm0iLCJidXR0b25FbGVtZW50IiwiaXNDbG9zZWQiLCJ2YWx1ZSIsInBhaXJFbGVtZW50IiwibmFtZSIsImtleUVsZW1lbnQiLCJ2YWx1ZUVsZW1lbnQiLCJudWxsVHlwZSIsImRlZmF1bHRzIiwib3ZlcnJpZGVzIiwibWVyZ2VkIiwiVGVybUxvZyIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkxvZ05vZGVNaXhpbnMiLCJXZWJOb2RlTWl4aW5zIiwiTG9nZ2VyIiwiTG9nQ2xhc3MiLCJjb25uZWN0IiwiY2hhbm5lbCIsImxvZyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwic2Nyb2xsQm90dG9tIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTWVzc2FnZSIsIm5vZGUiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImRvY3VtZW50RWwiLCJib2R5IiwiZnJhbWVFbCIsImxvZ2dlckVsIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiTElOb2RlcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwianNvbk5vZGUiLCJkYXRlIiwiaW5uZXJIVE1MIiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFB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QUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBa0UsVUFBSSxDQUFDckcsS0FBTCxDQUFXb0MsT0FBWCxHQUFxQixtQ0FBckI7O0FBQ0EsVUFBSThFLFFBQVEsR0FBRzFILG9CQUFTQyxXQUFULENBQXFCdUcsT0FBckIsQ0FBZjs7QUFDQSxVQUFJbUIsSUFBSSxHQUFHLElBQUkxRSxJQUFKLEVBQVg7QUFDQTRELFVBQUksQ0FBQ2UsU0FBTCxHQUFrQixnREFBK0NELElBQUssTUFBdEU7QUFDQWQsVUFBSSxDQUFDN0QsV0FBTCxDQUFpQjBFLFFBQWpCO0FBQ0EsV0FBS1IsUUFBTCxDQUFjbEUsV0FBZCxDQUEwQjZELElBQTFCO0FBQ0EsV0FBS0gsWUFBTDtBQUNBRCxhQUFPLENBQUNGLEdBQVIsQ0FBWSxLQUFLeEcsTUFBTCxDQUFZOEgsSUFBWixDQUFpQixHQUFqQixDQUFaO0FBQ0FwQixhQUFPLENBQUNGLEdBQVIsQ0FBWUMsT0FBWjtBQUNIOztBQTNDb0QsR0FBekQ7O2lCQThDZU4sYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DZiw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2xvZy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUxvZ3tcbiAgICBjb25zdHJ1Y3RvcihwcmVmaXg9W10pe1xuICAgICAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB9XG59IiwiLy9vcmlnaW4gY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWN5Z2lsYmVydC9qc29uLWRpc3BsYXkvYmxvYi9tYXN0ZXIvanNvbi1kaXNwbGF5LmpzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgTHVjeSBHaWxiZXJ0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVmlld3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBzdGF0aWMgSlNPTkRpc3BsYXkoanNvbiwgb3BlbkxldmVsc0FyZywgc3R5bGVPcHRpb25zQXJnKSB7XG4gICAgICAgIHZhciBERUZBVUxUX1NUWUxFX09QVElPTlMgPSB7XG4gICAgICAgICAgcm9vdDogeyB0YWc6ICdwcmUnLCBzdHlsZTogJ3BhZGRpbmc6IDVweDsgZm9udC1zaXplOiAxcmVtOycgfSxcbiAgICAgICAgICB0aXRsZUNvbnRhaW5lcjogeyB0YWc6ICdkaXYnLCBzdHlsZTogJ21hcmdpbi1ib3R0b206IDNweDsnIH0sXG4gICAgICAgICAgdGl0bGU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyOycgfSxcbiAgICAgICAgICB0aXRsZVRleHQ6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnJyB9LFxuICAgICAgICAgIG9wZW5CdXR0b246IHsgXG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW46IDBweCA3cHggMHB4IDJweDsgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAnXG4gICAgICAgICAgICAgICAgICsgJ2JvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjazsnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudHNDb250YWluZXI6IHsgdGFnOiAnZGl2Jywgc3R5bGU6ICdwYWRkaW5nLWxlZnQ6IDE4cHg7JyB9LFxuICAgICAgICAgIGtleVZhbHVlUGFpcjogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogMnB4OycgfSxcbiAgICAgICAgICBrZXk6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGRhcmtibHVlOycgfSxcbiAgICAgICAgICBzeW1ib2xWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogZGFya2dyZWVuOycgfSxcbiAgICAgICAgICBzdHJpbmdWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogY3JpbXNvbjsnIH0sXG4gICAgICAgICAgbnVtYmVyVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICAgIGJvb2xlYW5WYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgICAgbnVsbFZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9wZW5MZXZlbHMgPSBpc05hTihwYXJzZUludChvcGVuTGV2ZWxzQXJnKSkgPyBJbmZpbml0eSA6IHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpO1xuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0gdHlwZW9mIHN0eWxlT3B0aW9uc0FyZyA9PT0gJ29iamVjdCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1lcmdlU3R5bGVPcHRpb25zKERFRkFVTFRfU1RZTEVfT1BUSU9OUywgc3R5bGVPcHRpb25zQXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBERUZBVUxUX1NUWUxFX09QVElPTlM7XG4gICAgXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgXG4gICAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMucm9vdC50YWcpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5yb290LnN0eWxlO1xuICAgIFxuICAgICAgICAgIGlmIChqc29uID09PSBudWxsIHx8IGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHZvaWRFbGVtZW50ID0gZ2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZvaWRFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb24gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBub25FeHBhbmRhYmxlRWxlbWVudCA9IGdldFZhbHVlKGpzb24pO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub25FeHBhbmRhYmxlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IEFycmF5LmlzQXJyYXkoanNvbikgPyAnQXJyYXlbJyArIGpzb24ubGVuZ3RoICsgJ10nIDogJ09iamVjdCc7XG4gICAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBvcGVuTGV2ZWxzIDwgMTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUodGl0bGUsIG51bGwsIHRoaXNMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCAxKSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCBpbmRleCkge1xuICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgICAgICB2YXIgbmV4dExldmVsSXNDbG9zZWQgPSBpbmRleCArIDEgPiBvcGVuTGV2ZWxzO1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250ZW50c0NvbnRhaW5lcih0aGlzTGV2ZWxJc0Nsb3NlZCk7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdBcnJheVsnICsganNvbltrZXldLmxlbmd0aCArICddJywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSA9PT0gbnVsbCB8fCBqc29uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwgbnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0udG9JU09TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbltrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ09iamVjdCcsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoanNvbikuZm9yRWFjaChmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihzeW1ib2wudG9TdHJpbmcoKSwganNvbltzeW1ib2xdKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRUaXRsZSh0aXRsZVRleHQsIG9wdGlvbmFsS2V5LCBsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRseUNsb3NlZCA9IGxldmVsSXNDbG9zZWQ7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlLnRhZyk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGUuc3R5bGU7XG4gICAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGlmIChvcHRpb25hbEtleSkge1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KG9wdGlvbmFsS2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3BlbkJ1dHRvbiA9IHRpdGxlRWxlbWVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBvYmplY3RDb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gY3VycmVudGx5Q2xvc2VkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgIG9wZW5CdXR0b24uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudGx5Q2xvc2VkID8gJ3JvdGF0ZSg5MGRlZyknIDogJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi50YWcpO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnN0eWxlO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICAgIHJldHVybiBidXR0b25FbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbnRlbnRzQ29udGFpbmVyKGlzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAnY29udGVudHNDb250YWluZXInKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIuc3R5bGU7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKGlzQ2xvc2VkID8gJ25vbmUnIDogJ2Jsb2NrJyk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgcGFpckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIudGFnKTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci5zdHlsZTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VmFsdWUodmFsdWUpKTtcbiAgICAgICAgICByZXR1cm4gcGFpckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KG5hbWUpIHtcbiAgICAgICAgICB2YXIga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleS50YWcpO1xuICAgICAgICAgIGtleUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXkuc3R5bGU7XG4gICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lICsgJzogJykpO1xuICAgICAgICAgIHJldHVybiBrZXlFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgICAgICB2YXIgbnVsbFR5cGUgPSAnb2JqZWN0JztcbiAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCInICsgdmFsdWUgKyAnXCInKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG51bGxUeXBlOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udWxsVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgICAgIHZhciBtZXJnZWQgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG1lcmdlZFtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiByZW5kZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtkZWZhdWx0IGFzIEJhc2VMb2d9IGZyb20gJy4vYmFzZUxvZyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgTG9nTm9kZU1peGluc30gZnJvbSAnLi90ZXJtTG9nLm1peGlucy5ub2RlJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBXZWJOb2RlTWl4aW5zfSBmcm9tICcuL3Rlcm1Mb2cubWl4aW5zLndlYic7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNsYXNzIFRlcm1Mb2cgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VMb2csIHsnbm9kZSc6W0xvZ05vZGVNaXhpbnNdLCd3ZWInOltXZWJOb2RlTWl4aW5zXX0pe1xuICAgIGNvbnN0cnVjdG9yKHByZWZpeCl7XG4gICAgICAgIHN1cGVyKHByZWZpeCk7XG4gICAgfVxufVxuY29uc3QgTG9nZ2VyID0gbmV3IFRlcm1Mb2coKTtcbmV4cG9ydCBkZWZhdWx0IExvZ2dlcjsiLCJjb25zdCBMb2dOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChjaGFubmVsKXtcbiAgICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuICAgIHNjcm9sbEJvdHRvbSgpe1xuICAgICAgICAvL25vdGhpbmdcbiAgICB9XG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2Upe1xuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaTpudGgtbGFzdC1vZi10eXBlKDEpXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhub2RlKTtcbiAgICAgICAgaWYoIW5vZGUpey8vY3JlYXRlIG5ld1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nTm9kZU1peGluczsiLCJpbXBvcnQge2RlZmF1bHQgYXMgSnNvblZpZXd9IGZyb20gJy4vcHJldHR5SnNvbic7XG5jb25zdCBXZWJOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChkb2N1bWVudEVsPW51bGwpe1xuICAgICAgICBkb2N1bWVudEVsID0gZG9jdW1lbnRFbHx8ZG9jdW1lbnQuYm9keTtcbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IFwibGlzdC1zdHlsZS10eXBlOiBub25lO1wiO1xuICAgICAgICBkb2N1bWVudEVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB0aGlzLmZyYW1lRWwgPSBkb2N1bWVudEVsO1xuICAgICAgICB0aGlzLmxvZ2dlckVsID0gZG9jdW1lbnRFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVsXCIpWzBdO1xuICAgIH1cbiAgICBzY3JvbGxCb3R0b20oZWxlbWVudD1udWxsKXtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgdGhpcy5mcmFtZUVsO1xuICAgICAgICBjb25zb2xlLmxvZygnc2NvbGwgYm90dG9tICcgKyBlbGVtZW50LnNjcm9sbEhlaWdodCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSl7XG4gICAgICAgIC8vIGxldCBub2RlID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpOm50aC1sYXN0LW9mLXR5cGUoMSlcIik7XG4gICAgICAgIGxldCBMSU5vZGVzID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgICAgICBsZXQgbm9kZSA9IExJTm9kZXNbTElOb2Rlcy5sZW5ndGgtMV07XG4gICAgICAgIGlmKCFub2RlIHx8IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibG9nZ2VyLXByb2dyZXNzXCIpKXsvL2NyZWF0ZSBuZXdcbiAgICAgICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJsb2dnZXItcHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBqc29uTm9kZSA9IEpzb25WaWV3LkpTT05EaXNwbGF5KHByb2Nlc3NNZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgaWYoIXRoaXMubG9nZ2VyRWwgfHwgIXRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQpe1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9ICdib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTsnOyAgICAgICBcbiAgICAgICAgbGV0IGpzb25Ob2RlID0gSnNvblZpZXcuSlNPTkRpc3BsYXkobWVzc2FnZSk7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZWZpeC5qb2luKCcvJykpO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWJOb2RlTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==

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
      this.storage = storage || _causalNet2.indexDBStorage;
      this.saveModelDir = '/saveModel/';
      this.HyperParameters = this.F.getHyperParameter(netConfig);
      this.BasePipeline = this.F.getPipeline(netConfig);
      this.netParams = this.setOrInitParams(this.BasePipeline, netParams);
      this.flattenParams = this.flattenParams(this.netParams);
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
      console.log({
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
      const Pipeline = f.parameterAcquisition(this.BasePipeline, this.HyperParameters);
      console.log({
        Pipeline
      });
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
    }
    /**
     * @param  {} sampleBatch
     * @param  {} labelBatch
     * @param  {} numSample
     */


    loss(batchSamples, batchLabels, numSample) {
      const T = this.T;
      let labelTensor = T.tensor(batchLabels).reshape([numSample, -1]);
      let sampleTensor = T.tensor(batchSamples).asType('float32');
      const {
        logProb
      } = this.makePredict(sampleTensor, numSample);
      const likelihood = logProb.neg().mul(labelTensor);
      const loss = likelihood.mean();
      return loss;
    }

    /**
     * @param  {} SampleGeneratorFn
     * @param  {} batchSize
     * @param  {} numEpochs=2
     * @param  {} lr=0.01
     */
    async train(SampleGeneratorFn, batchSize, numEpochs = 2, lr = 0.001) {
      const T = this.T,
            F = this.F,
            R = this.R;
      const start = new Date();
      let loss = [],
          averageLoss = [];
      const optimizer = T.train.adam(lr);

      for (let epochIdx of F.range(numEpochs)) {
        if (this.logger) {
          this.logger.progress({
            epochIdx,
            averageLoss,
            time: new Date().toISOString(),
            start: start.toISOString(),
            elapse: (new Date() - start) / 1000
          });
        }

        const sampleGenerator = SampleGeneratorFn(batchSize);

        for await (let [batchSamples, batchLabels] of sampleGenerator) {
          optimizer.minimize(() => {
            let l = this.loss(batchSamples, batchLabels, batchSize);
            loss = [...loss, ...l.dataSync()];
            console.log({
              loss
            });
            return l.asType('float32');
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

    async test(TestSampleGeneratorFn, testBatchSize, numClasses = 10) {
      const T = this.T,
            F = this.F,
            R = this.R;
      const testSampleGenerator = TestSampleGeneratorFn(testBatchSize);
      let testResult = T.zeros([1]);

      for await (let [batchSamples, batchLabels] of testSampleGenerator) {
        let labelTensor = T.tensor(batchLabels).reshape([testBatchSize, numClasses]);
        let sampleTensor = T.tensor(batchSamples).asType('float32');
        const {
          predict
        } = this.makePredict(sampleTensor, testBatchSize);
        let onehotPredict = T.oneHot(predict, numClasses);
        onehotPredict.print();
        labelTensor.print();
        onehotPredict.mul(labelTensor).sum().print();
        testResult = testResult.add(onehotPredict.mul(labelTensor).sum());
      }

      let result = await testResult.data();
      let pass = result[0];
      let accuracy = pass / testBatchSize;
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

        console.log({
          _params
        });
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
    async ensembleTest(TestSampleGeneratorFn, modelList, testBatchSize, numClasses = 10) {
      const T = this.T,
            F = this.F,
            R = this.R;
      const testSampleGenerator = TestSampleGeneratorFn(testBatchSize);
      let testResult = T.zeros([1]);

      for await (let [batchSamples, batchLabels] of testSampleGenerator) {
        let labelTensor = T.tensor(batchLabels).reshape([testBatchSize, numClasses]);
        let sampleTensor = T.tensor(batchSamples).asType('float32');
        const {
          predict
        } = await this.makeEnsemblePredict(modelList, sampleTensor, testBatchSize);
        let onehotPredict = T.oneHot(predict, numClasses);
        onehotPredict.print();
        labelTensor.print();
        onehotPredict.mul(labelTensor).sum().print();
        testResult = testResult.add(onehotPredict.mul(labelTensor).sum());
      }

      let result = await testResult.data();
      let pass = result[0];
      let accuracy = pass / testBatchSize;
      return {
        accuracy,
        pass
      };
    }

    async makeEnsemblePredict(modelList, samples, numSamples = 1) {
      const T = this.T,
            f = this.F,
            l = this.L;
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
  Object.defineProperty(_exports, "Strorage", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3BhY2thZ2VzL2NhdXNhbGl0eS1sb2cvZGlzdC9AY2F1c2FsTmV0L2xvZy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxpdHkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jb3JlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvZGF0YXNldHMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9lbnNlbWJsZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL2xvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL21lbWNhY2hlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5kYXRhc2V0c1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0IiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiRW5zZW1ibGVNaXhpbnMiLCJjb25zdHJ1Y3RvciIsIm5ldENvbmZpZyIsIm5ldFBhcmFtcyIsInN0b3JhZ2UiLCJGIiwiRnVuY3Rpb24iLCJSIiwiQ29yZUZ1bmN0aW9uIiwiaW5kZXhEQlN0b3JhZ2UiLCJzYXZlTW9kZWxEaXIiLCJIeXBlclBhcmFtZXRlcnMiLCJnZXRIeXBlclBhcmFtZXRlciIsIkJhc2VQaXBlbGluZSIsImdldFBpcGVsaW5lIiwic2V0T3JJbml0UGFyYW1zIiwiZmxhdHRlblBhcmFtcyIsInBhcmFtcyIsIk1hcFZhbHVlcyIsIm9iak9yQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJGbGF0dGVuIiwicHYiLCJpc1RlbnNvciIsImZsYXR0ZW4iLCJyZWR1Y2UiLCJ2IiwicmVzIiwiaXMiLCJsYXllciIsInZhbHVlIiwibGF5ZXJDb25maWd1cmUiLCJsYXllclBhcmFtZXRlcnMiLCJOYW1lIiwiVHlwZSIsIlBhcmFtZXRlcnMiLCJGbG93IiwiY29uc29sZSIsImxvZyIsIk9wc1J1bm5lciIsImFkZEluZGV4IiwiX18iLCJyZXN1bHQiLCJ0cmFjZSIsIm5vZGUiLCJpZHgiLCJQYXJhbWV0ZXIiLCJUIiwiT3AiLCJBcmdzIiwic2hhcGUiLCJwaXBlbGluZSIsInBpcGVQYXJhbXMiLCJmcm9tUGFpcnMiLCJmaWx0ZXIiLCJrIiwidW5kZWZpbmVkIiwibWFwIiwicCIsIlNldE9ySW5pdCIsIm1haW5WYWx1ZSIsInN1YlZhbCIsImtleXMiLCJrZXlNYWluVmFsU3ViVmFsIiwicHJvcCIsInByb3BPciIsIlZhbE1hcHBpbmciLCJrZXkiLCJtYWluVmFsIiwiaXNQYXJhbWV0ZXIiLCJwYXJhbVNoYXBlIiwiaXNOaWwiLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsInRlbnNvciIsInJlc2hhcGUiLCJtYWtlUHJlZGljdCIsInNhbXBsZXMiLCJudW1TYW1wbGVzIiwiZiIsImwiLCJMIiwiRGF0YXNpemUiLCJQaXBlbGluZSIsInBhcmFtZXRlckFjcXVpc2l0aW9uIiwicGlwZVZhbHVlIiwiUGlwZUlucHV0IiwidHJhY2VzIiwidGlkeSIsImxheWVyT3V0cHV0IiwiSW5wdXQiLCJwdXNoIiwicGlwZU91dHB1dCIsImxvZ1Byb2IiLCJzdWIiLCJsb2dTdW1FeHAiLCJwcmVkaWN0IiwiYXJnTWF4IiwibG9zcyIsImJhdGNoU2FtcGxlcyIsImJhdGNoTGFiZWxzIiwibnVtU2FtcGxlIiwibGFiZWxUZW5zb3IiLCJzYW1wbGVUZW5zb3IiLCJhc1R5cGUiLCJsaWtlbGlob29kIiwibmVnIiwibXVsIiwibWVhbiIsInRyYWluIiwiU2FtcGxlR2VuZXJhdG9yRm4iLCJiYXRjaFNpemUiLCJudW1FcG9jaHMiLCJsciIsInN0YXJ0IiwiRGF0ZSIsImF2ZXJhZ2VMb3NzIiwib3B0aW1pemVyIiwiYWRhbSIsImVwb2NoSWR4IiwicmFuZ2UiLCJsb2dnZXIiLCJwcm9ncmVzcyIsInRpbWUiLCJ0b0lTT1N0cmluZyIsImVsYXBzZSIsInNhbXBsZUdlbmVyYXRvciIsIm1pbmltaXplIiwiZGF0YVN5bmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRlc3QiLCJUZXN0U2FtcGxlR2VuZXJhdG9yRm4iLCJ0ZXN0QmF0Y2hTaXplIiwibnVtQ2xhc3NlcyIsInRlc3RTYW1wbGVHZW5lcmF0b3IiLCJ0ZXN0UmVzdWx0IiwiemVyb3MiLCJvbmVob3RQcmVkaWN0Iiwib25lSG90IiwicHJpbnQiLCJzdW0iLCJhZGQiLCJkYXRhIiwicGFzcyIsImFjY3VyYWN5IiwiZ2V0UGFyYW1zIiwiYXNPYmplY3QiLCJmcm9tIiwia1ZhbHMiLCJ0b1BhaXJzIiwidmFsIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFNhdmVkUGFyYW1zIiwiZmlsZUxpc3QiLCJnZXRGaWxlTGlzdCIsImZpbGVOYW1lIiwicmVwbGFjZSIsInNhdmVQYXJhbXMiLCJ3cml0ZUZpbGUiLCJsb2FkUGFyYW1zIiwiX3BhcmFtcyIsInJlYWRGaWxlIiwicGFyc2UiLCJDb3JlIiwiRGF0YXNldHMiLCJQaXBlbGluZUNsYXNzIiwiZW5zZW1ibGVUZXN0IiwibW9kZWxMaXN0IiwibWFrZUVuc2VtYmxlUHJlZGljdCIsInByb2JzIiwibW9kZWwiLCJleHAiLCJtZWFuUHJvYiIsImNvbmNhdCIsImVuc2VtYmxlUHJlZGljdCIsIkJhc2VGdW5jdGlvbiIsImxlbiIsImFsbCIsIk51bWJlciIsImdldFRyYXZlcnNlIiwiY3VycnkiLCJpdGVtIiwicGlwZSIsImFwcGx5IiwicGlwZWxpbmVJdGVtIiwiaHlwZXJQYXJhbWV0ZXJzIiwicmVwbGFjZUlmTWF0Y2giLCJTdHJpbmciLCJzdGFydHNXaXRoIiwic2xpY2UiLCJJbmZpbml0eSIsImRvUmVwbGFjZUlmTWF0Y2giLCJyZXBsYWNlSHlwZXJQYXJhbWV0ZXIiLCJvYmplY3QiLCJzaXplIiwiZHR5cGUiLCJMb2ciLCJNZW1DYWNoZSIsIlN0b3JhZ2UiLCJVdGlscyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxNQUFNLFlBQVk7QUFDckIsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdHQUFnRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxNQUFNLFlBQVk7QUFDckIsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE1BQU0sWUFBWTtBQUNyQixDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0RBQWtELHFCQUFxQixLQUFLO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RDs7QUFFN0Q7O0FBRUE7QUFDQSxrREFBa0QscUJBQXFCLEtBQUs7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQLFVBQVU7QUFDVixDQUFDO0FBQ0QsMkNBQTJDLGNBQWMsK3p2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOXBCMUMsUUFBTUEsU0FBTixTQUF3QkMscUJBQVNDLE9BQVQsQ0FBaUJDLGlCQUFqQixFQUF3QixDQUFDQyxpQkFBRCxDQUF4QixDQUF4QixDQUFpRTtBQUM1RTs7OztBQUlBQyxlQUFXLENBQUVDLFNBQUYsRUFBYUMsU0FBUyxHQUFDLElBQXZCLEVBQTZCQyxPQUFPLEdBQUMsSUFBckMsRUFBMkM7QUFDbEQ7QUFDQSxXQUFLQyxDQUFMLEdBQVMsSUFBSUMsaUJBQUosRUFBVDtBQUNBLFdBQUtDLENBQUwsR0FBUyxLQUFLRixDQUFMLENBQU9HLFlBQWhCO0FBQ0EsV0FBS0osT0FBTCxHQUFlQSxPQUFPLElBQUlLLDBCQUExQjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsYUFBcEI7QUFDQSxXQUFLQyxlQUFMLEdBQXVCLEtBQUtOLENBQUwsQ0FBT08saUJBQVAsQ0FBeUJWLFNBQXpCLENBQXZCO0FBQ0EsV0FBS1csWUFBTCxHQUFvQixLQUFLUixDQUFMLENBQU9TLFdBQVAsQ0FBbUJaLFNBQW5CLENBQXBCO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixLQUFLWSxlQUFMLENBQXFCLEtBQUtGLFlBQTFCLEVBQXdDVixTQUF4QyxDQUFqQjtBQUNBLFdBQUthLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQixLQUFLYixTQUF4QixDQUFyQjtBQUNIOztBQUVEYSxpQkFBYSxDQUFDQyxNQUFELEVBQVE7QUFDakIsWUFBTVYsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxZQUFrQkYsQ0FBQyxHQUFHLEtBQUtBLENBQTNCOztBQUNBLFlBQU1hLFNBQVMsR0FBSUMsVUFBRCxJQUFjQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsVUFBZCxJQUEwQkEsVUFBMUIsR0FBcUNHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixVQUFkLENBQXJFOztBQUNBLFlBQU1LLE9BQU8sR0FBSUMsRUFBRCxJQUFNO0FBQ2xCLFlBQUdwQixDQUFDLENBQUNxQixRQUFGLENBQVdELEVBQVgsQ0FBSCxFQUFrQjtBQUNkLGlCQUFPQSxFQUFQO0FBQ0gsU0FGRCxNQUdJO0FBQ0EsY0FBSUYsTUFBTSxHQUFHTCxTQUFTLENBQUNPLEVBQUQsQ0FBdEI7QUFDQSxjQUFJRSxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjLENBQUNELE9BQUQsRUFBVUUsQ0FBVixLQUFjO0FBQ3RDLGdCQUFJQyxHQUFHLEdBQUdOLE9BQU8sQ0FBQ0ssQ0FBRCxDQUFqQjs7QUFDQSxnQkFBR3RCLENBQUMsQ0FBQ3dCLEVBQUYsQ0FBS1gsS0FBTCxFQUFZVSxHQUFaLENBQUgsRUFBb0I7QUFDaEJILHFCQUFPLEdBQUcsQ0FBQyxHQUFHQSxPQUFKLEVBQWEsR0FBR0csR0FBaEIsQ0FBVjtBQUNILGFBRkQsTUFHSTtBQUNBSCxxQkFBTyxHQUFHLENBQUMsR0FBR0EsT0FBSixFQUFhRyxHQUFiLENBQVY7QUFDSDs7QUFDRCxtQkFBT0gsT0FBUDtBQUNILFdBVGEsRUFTWCxFQVRXLENBQWQ7QUFVQSxpQkFBT0EsT0FBUDtBQUNIO0FBQ0osT0FsQkQ7O0FBbUJBLFVBQUlKLE1BQU0sR0FBR0wsU0FBUyxDQUFDRCxNQUFELENBQXRCO0FBRUEsYUFBT00sTUFBTSxDQUFDSyxNQUFQLENBQWMsQ0FBQ0QsT0FBRCxFQUFTRSxDQUFULEtBQWEsQ0FBQyxHQUFHRixPQUFKLEVBQWEsR0FBR0gsT0FBTyxDQUFDSyxDQUFELENBQXZCLENBQTNCLEVBQXVELEVBQXZELENBQVA7QUFDSDs7QUFFREcsU0FBSyxDQUFDQyxLQUFELEVBQVFDLGNBQVIsRUFBd0JDLGVBQXhCLEVBQXdDO0FBQ3pDLFlBQU01QixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLFlBQU07QUFBQzZCLFlBQUQ7QUFBT0MsWUFBUDtBQUFhQyxrQkFBYjtBQUF5QkM7QUFBekIsVUFBaUNMLGNBQXZDO0FBQ0FNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNMLFlBQUQ7QUFBT0MsWUFBUDtBQUFhQyxrQkFBYjtBQUF5QkM7QUFBekIsT0FBWjtBQUNBLFlBQU1HLFNBQVMsR0FBR25DLENBQUMsQ0FBQ29DLFFBQUYsQ0FBV3BDLENBQUMsQ0FBQ3FCLE1BQWIsRUFBcUJyQixDQUFDLENBQUNxQyxFQUF2QixFQUEwQjtBQUFDQyxjQUFNLEVBQUVaLEtBQVQ7QUFBZ0JhLGFBQUssRUFBRTtBQUF2QixPQUExQixFQUFzRFAsSUFBdEQsQ0FBbEI7QUFDQSxVQUFJO0FBQUNNLGNBQUQ7QUFBU0M7QUFBVCxVQUFrQkosU0FBUyxDQUFDLENBQUM7QUFBQ0csY0FBRDtBQUFTQztBQUFULE9BQUQsRUFBa0JDLElBQWxCLEVBQXdCQyxHQUF4QixLQUE4QjtBQUMxRCxZQUFHRCxJQUFJLENBQUNFLFNBQVIsRUFBa0I7QUFDZEosZ0JBQU0sR0FBRyxLQUFLSyxDQUFMLENBQU9ILElBQUksQ0FBQ0ksRUFBWixFQUFnQk4sTUFBaEIsRUFBd0JWLGVBQWUsQ0FBQ1ksSUFBSSxDQUFDRSxTQUFOLENBQXZDLEVBQXlELEdBQUdGLElBQUksQ0FBQ0ssSUFBakUsQ0FBVDtBQUNILFNBRkQsTUFHSTtBQUNBUCxnQkFBTSxHQUFHLEtBQUtLLENBQUwsQ0FBT0gsSUFBSSxDQUFDSSxFQUFaLEVBQWdCTixNQUFoQixFQUF3QixHQUFHRSxJQUFJLENBQUNLLElBQWhDLENBQVQ7QUFDSDs7QUFBQTtBQUNETixhQUFLLENBQUNFLEdBQUQsQ0FBTCxHQUFhSCxNQUFNLENBQUNRLEtBQXBCO0FBQ0EsZUFBTztBQUFDUixnQkFBRDtBQUFTQztBQUFULFNBQVA7QUFDSCxPQVQ4QixDQUEvQjtBQVVBLGFBQU87QUFBQyxTQUFDVixJQUFELEdBQVFTLE1BQVQ7QUFBaUJDO0FBQWpCLE9BQVA7QUFDSDs7QUFFRC9CLG1CQUFlLENBQUN1QyxRQUFELEVBQVduRCxTQUFYLEVBQXFCO0FBQ2hDLFlBQU1JLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQUEsWUFBa0IyQyxDQUFDLEdBQUcsS0FBS0EsQ0FBM0I7QUFBQSxZQUE4QjdDLENBQUMsR0FBRyxLQUFLQSxDQUF2QztBQUNBLFVBQUlrRCxVQUFVLEdBQUdoRCxDQUFDLENBQUNpRCxTQUFGLENBQVlqRCxDQUFDLENBQUNrRCxNQUFGLENBQVMsQ0FBQyxDQUFDQyxDQUFELEVBQUc3QixDQUFILENBQUQsS0FBU0EsQ0FBQyxLQUFLOEIsU0FBeEIsRUFDTHBELENBQUMsQ0FBQ3FELEdBQUYsQ0FBTXJELENBQUMsQ0FBQ3FDLEVBQVIsRUFBWVUsUUFBWixFQUFzQk8sQ0FBQyxJQUFFLENBQUNBLENBQUMsQ0FBQ3pCLElBQUgsRUFBU3lCLENBQUMsQ0FBQ3ZCLFVBQVgsQ0FBekIsQ0FESyxDQUFaLENBQWpCOztBQUVBLFlBQU13QixTQUFTLEdBQUcsQ0FBQ0MsU0FBRCxFQUFZQyxNQUFaLEtBQXFCO0FBQ25DLFlBQUlDLElBQUksR0FBRzFELENBQUMsQ0FBQzBELElBQUYsQ0FBT0YsU0FBUCxDQUFYO0FBQ0EsWUFBSUcsZ0JBQWdCLEdBQUczRCxDQUFDLENBQUNxRCxHQUFGLENBQU9GLENBQUQsSUFBTSxDQUFDQSxDQUFELEVBQUluRCxDQUFDLENBQUM0RCxJQUFGLENBQU9ULENBQVAsRUFBVUssU0FBVixDQUFKLEVBQTBCeEQsQ0FBQyxDQUFDNkQsTUFBRixDQUFTLElBQVQsRUFBZVYsQ0FBZixFQUFrQk0sTUFBbEIsQ0FBMUIsQ0FBWixFQUFrRUMsSUFBbEUsQ0FBdkI7O0FBQ0EsY0FBTUksVUFBVSxHQUFHLENBQUMsQ0FBQ0MsR0FBRCxFQUFNQyxPQUFOLEVBQWVQLE1BQWYsQ0FBRCxLQUEwQjtBQUN6QyxjQUFHM0QsQ0FBQyxDQUFDbUUsV0FBRixDQUFjRCxPQUFkLENBQUgsRUFBMEI7QUFDdEIsa0JBQU1FLFVBQVUsR0FBR0YsT0FBbkI7O0FBQ0EsZ0JBQUdoRSxDQUFDLENBQUNtRSxLQUFGLENBQVFWLE1BQVIsQ0FBSCxFQUFtQjtBQUNmLHFCQUFPLENBQUNNLEdBQUQsRUFBTXBCLENBQUMsQ0FBQ3lCLFFBQUYsQ0FBV3pCLENBQUMsQ0FBQzBCLFlBQUYsQ0FBZUgsVUFBZixDQUFYLENBQU4sQ0FBUDtBQUNILGFBRkQsTUFHSTtBQUNBLHFCQUFPLENBQUNILEdBQUQsRUFBTXBCLENBQUMsQ0FBQ3lCLFFBQUYsQ0FBV3pCLENBQUMsQ0FBQzJCLE1BQUYsQ0FBU2IsTUFBVCxFQUFpQmMsT0FBakIsQ0FBeUJMLFVBQXpCLENBQVgsQ0FBTixDQUFQO0FBQ0g7QUFDSixXQVJELE1BU0k7QUFDQSxtQkFBTyxDQUFDSCxHQUFELEVBQU1SLFNBQVMsQ0FBQ1MsT0FBRCxFQUFVUCxNQUFWLENBQWYsQ0FBUDtBQUNIO0FBQ0osU0FiRDs7QUFjQSxlQUFPekQsQ0FBQyxDQUFDaUQsU0FBRixDQUFZakQsQ0FBQyxDQUFDcUQsR0FBRixDQUFNUyxVQUFOLEVBQWtCSCxnQkFBbEIsQ0FBWixDQUFQO0FBQ0gsT0FsQkQ7O0FBbUJBLGFBQU9KLFNBQVMsQ0FBQ1AsVUFBRCxFQUFhcEQsU0FBYixDQUFoQjtBQUNIO0FBRUQ7Ozs7OztBQUlBNEUsZUFBVyxDQUFDQyxPQUFELEVBQVVDLFVBQVUsR0FBQyxDQUFyQixFQUF1QjtBQUM5QixZQUFNL0IsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxZQUFrQmdDLENBQUMsR0FBRyxLQUFLN0UsQ0FBM0I7QUFBQSxZQUE4QjhFLENBQUMsR0FBRyxLQUFLQyxDQUF2QztBQUNBLFdBQUt6RSxlQUFMLENBQXFCMEUsUUFBckIsR0FBZ0NKLFVBQWhDO0FBQ0EsWUFBTUssUUFBUSxHQUFHSixDQUFDLENBQUNLLG9CQUFGLENBQXVCLEtBQUsxRSxZQUE1QixFQUEwQyxLQUFLRixlQUEvQyxDQUFqQjtBQUNBNkIsYUFBTyxDQUFDQyxHQUFSLENBQWE7QUFBQzZDO0FBQUQsT0FBYjtBQUNBLFVBQUlFLFNBQVMsR0FBRztBQUFDQyxpQkFBUyxFQUFFVDtBQUFaLE9BQWhCO0FBQUEsVUFBc0NVLE1BQU0sR0FBRyxFQUEvQztBQUFBLFVBQW1EdkYsU0FBUyxHQUFHLEtBQUtBLFNBQXBFO0FBQ0EsYUFBTytDLENBQUMsQ0FBQ3lDLElBQUYsQ0FBTyxNQUFJO0FBQ2QsYUFBSSxJQUFJM0QsS0FBUixJQUFpQnNELFFBQWpCLEVBQTBCO0FBQ3RCLGNBQUlNLFdBQVcsR0FBRyxLQUFLNUQsS0FBTCxDQUFXd0QsU0FBUyxDQUFDeEQsS0FBSyxDQUFDNkQsS0FBUCxDQUFwQixFQUFtQzdELEtBQW5DLEVBQTBDN0IsU0FBUyxDQUFDNkIsS0FBSyxDQUFDSSxJQUFQLENBQW5ELENBQWxCO0FBQ0FvRCxtQkFBUyxDQUFDeEQsS0FBSyxDQUFDSSxJQUFQLENBQVQsR0FBd0J3RCxXQUFXLENBQUM1RCxLQUFLLENBQUNJLElBQVAsQ0FBbkM7QUFDQXNELGdCQUFNLENBQUNJLElBQVAsQ0FBWTtBQUFDLGFBQUM5RCxLQUFLLENBQUNJLElBQVAsR0FBY3dELFdBQVcsQ0FBQzlDO0FBQTNCLFdBQVo7QUFDSDs7QUFDRE4sZUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ2lEO0FBQUQsU0FBWjtBQUNBLFlBQUlLLFVBQVUsR0FBR1AsU0FBUyxDQUFDLFlBQUQsQ0FBMUI7QUFDQSxZQUFJUSxPQUFPLEdBQUdELFVBQVUsQ0FBQ0UsR0FBWCxDQUFlL0MsQ0FBQyxDQUFDZ0QsU0FBRixDQUFZSCxVQUFaLEVBQXdCLENBQXhCLEVBQTJCLElBQTNCLENBQWYsQ0FBZDtBQUNBLFlBQUlJLE9BQU8sR0FBR0gsT0FBTyxDQUFDSSxNQUFSLENBQWUsQ0FBZixDQUFkO0FBQ0EsZUFBTztBQUFDSixpQkFBRDtBQUFVRztBQUFWLFNBQVA7QUFDSCxPQVhNLENBQVA7QUFZSDtBQUNEOzs7Ozs7O0FBS0FFLFFBQUksQ0FBQ0MsWUFBRCxFQUFlQyxXQUFmLEVBQTRCQyxTQUE1QixFQUFzQztBQUN0QyxZQUFNdEQsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxVQUFJdUQsV0FBVyxHQUFJdkQsQ0FBQyxDQUFDMkIsTUFBRixDQUFTMEIsV0FBVCxFQUFzQnpCLE9BQXRCLENBQThCLENBQUMwQixTQUFELEVBQVksQ0FBQyxDQUFiLENBQTlCLENBQW5CO0FBQ0EsVUFBSUUsWUFBWSxHQUFHeEQsQ0FBQyxDQUFDMkIsTUFBRixDQUFTeUIsWUFBVCxFQUF1QkssTUFBdkIsQ0FBOEIsU0FBOUIsQ0FBbkI7QUFDQSxZQUFNO0FBQUNYO0FBQUQsVUFBWSxLQUFLakIsV0FBTCxDQUFpQjJCLFlBQWpCLEVBQStCRixTQUEvQixDQUFsQjtBQUNBLFlBQU1JLFVBQVUsR0FBR1osT0FBTyxDQUFDYSxHQUFSLEdBQWNDLEdBQWQsQ0FBa0JMLFdBQWxCLENBQW5CO0FBQ0EsWUFBTUosSUFBSSxHQUFHTyxVQUFVLENBQUNHLElBQVgsRUFBYjtBQUNBLGFBQU9WLElBQVA7QUFDSDs7QUFDRDs7Ozs7O0FBTUEsVUFBTVcsS0FBTixDQUFZQyxpQkFBWixFQUErQkMsU0FBL0IsRUFBMENDLFNBQVMsR0FBRyxDQUF0RCxFQUF5REMsRUFBRSxHQUFDLEtBQTVELEVBQWtFO0FBQzlELFlBQU1sRSxDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFlBQWtCN0MsQ0FBQyxHQUFHLEtBQUtBLENBQTNCO0FBQUEsWUFBOEJFLENBQUMsR0FBRyxLQUFLQSxDQUF2QztBQUNBLFlBQU04RyxLQUFLLEdBQUcsSUFBSUMsSUFBSixFQUFkO0FBQ0EsVUFBSWpCLElBQUksR0FBRyxFQUFYO0FBQUEsVUFBZWtCLFdBQVcsR0FBRyxFQUE3QjtBQUNBLFlBQU1DLFNBQVMsR0FBR3RFLENBQUMsQ0FBQzhELEtBQUYsQ0FBUVMsSUFBUixDQUFhTCxFQUFiLENBQWxCOztBQUNBLFdBQUksSUFBSU0sUUFBUixJQUFvQnJILENBQUMsQ0FBQ3NILEtBQUYsQ0FBUVIsU0FBUixDQUFwQixFQUF1QztBQUNuQyxZQUFHLEtBQUtTLE1BQVIsRUFBZTtBQUNYLGVBQUtBLE1BQUwsQ0FBWUMsUUFBWixDQUFxQjtBQUFDSCxvQkFBRDtBQUFXSCx1QkFBWDtBQUF3Qk8sZ0JBQUksRUFBRSxJQUFJUixJQUFKLEdBQVdTLFdBQVgsRUFBOUI7QUFDUlYsaUJBQUssRUFBRUEsS0FBSyxDQUFDVSxXQUFOLEVBREM7QUFDb0JDLGtCQUFNLEVBQUUsQ0FBQyxJQUFJVixJQUFKLEtBQWFELEtBQWQsSUFBcUI7QUFEakQsV0FBckI7QUFFSDs7QUFDRCxjQUFNWSxlQUFlLEdBQUdoQixpQkFBaUIsQ0FBQ0MsU0FBRCxDQUF6Qzs7QUFDQSxtQkFBVyxJQUFJLENBQUNaLFlBQUQsRUFBZUMsV0FBZixDQUFmLElBQThDMEIsZUFBOUMsRUFBOEQ7QUFDMURULG1CQUFTLENBQUNVLFFBQVYsQ0FBbUIsTUFBSTtBQUNuQixnQkFBSS9DLENBQUMsR0FBRyxLQUFLa0IsSUFBTCxDQUFVQyxZQUFWLEVBQXdCQyxXQUF4QixFQUFxQ1csU0FBckMsQ0FBUjtBQUNBYixnQkFBSSxHQUFHLENBQUMsR0FBR0EsSUFBSixFQUFVLEdBQUdsQixDQUFDLENBQUNnRCxRQUFGLEVBQWIsQ0FBUDtBQUNBM0YsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUM0RDtBQUFELGFBQVo7QUFDQSxtQkFBT2xCLENBQUMsQ0FBQ3dCLE1BQUYsQ0FBUyxTQUFULENBQVA7QUFDSCxXQUxEO0FBTUg7O0FBQ0RZLG1CQUFXLEdBQUcsQ0FBQyxHQUFHQSxXQUFKLEVBQWlCaEgsQ0FBQyxDQUFDd0csSUFBRixDQUFPVixJQUFQLENBQWpCLENBQWQ7QUFDQUEsWUFBSSxHQUFHLEVBQVA7QUFDSDs7QUFDRCxhQUFPLElBQUkrQixPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQW1CO0FBQ2xDRCxlQUFPLENBQUM7QUFBQ2Q7QUFBRCxTQUFELENBQVA7QUFDSCxPQUZNLENBQVA7QUFHSDs7QUFFRCxVQUFNZ0IsSUFBTixDQUFXQyxxQkFBWCxFQUFrQ0MsYUFBbEMsRUFBaURDLFVBQVUsR0FBQyxFQUE1RCxFQUErRDtBQUMzRCxZQUFNeEYsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxZQUFrQjdDLENBQUMsR0FBRyxLQUFLQSxDQUEzQjtBQUFBLFlBQThCRSxDQUFDLEdBQUcsS0FBS0EsQ0FBdkM7QUFDQSxZQUFNb0ksbUJBQW1CLEdBQUdILHFCQUFxQixDQUFDQyxhQUFELENBQWpEO0FBQ0EsVUFBSUcsVUFBVSxHQUFHMUYsQ0FBQyxDQUFDMkYsS0FBRixDQUFRLENBQUMsQ0FBRCxDQUFSLENBQWpCOztBQUNBLGlCQUFXLElBQUksQ0FBQ3ZDLFlBQUQsRUFBZUMsV0FBZixDQUFmLElBQThDb0MsbUJBQTlDLEVBQWtFO0FBQzlELFlBQUlsQyxXQUFXLEdBQUl2RCxDQUFDLENBQUMyQixNQUFGLENBQVMwQixXQUFULEVBQXNCekIsT0FBdEIsQ0FBOEIsQ0FBQzJELGFBQUQsRUFBZ0JDLFVBQWhCLENBQTlCLENBQW5CO0FBQ0EsWUFBSWhDLFlBQVksR0FBR3hELENBQUMsQ0FBQzJCLE1BQUYsQ0FBU3lCLFlBQVQsRUFBdUJLLE1BQXZCLENBQThCLFNBQTlCLENBQW5CO0FBQ0EsY0FBTTtBQUFDUjtBQUFELFlBQVksS0FBS3BCLFdBQUwsQ0FBaUIyQixZQUFqQixFQUErQitCLGFBQS9CLENBQWxCO0FBQ0EsWUFBSUssYUFBYSxHQUFHNUYsQ0FBQyxDQUFDNkYsTUFBRixDQUFTNUMsT0FBVCxFQUFrQnVDLFVBQWxCLENBQXBCO0FBQ0FJLHFCQUFhLENBQUNFLEtBQWQ7QUFDQXZDLG1CQUFXLENBQUN1QyxLQUFaO0FBQ0FGLHFCQUFhLENBQUNoQyxHQUFkLENBQWtCTCxXQUFsQixFQUErQndDLEdBQS9CLEdBQXFDRCxLQUFyQztBQUNBSixrQkFBVSxHQUFHQSxVQUFVLENBQUNNLEdBQVgsQ0FBZUosYUFBYSxDQUFDaEMsR0FBZCxDQUFrQkwsV0FBbEIsRUFBK0J3QyxHQUEvQixFQUFmLENBQWI7QUFDSDs7QUFDRCxVQUFJcEcsTUFBTSxHQUFHLE1BQU0rRixVQUFVLENBQUNPLElBQVgsRUFBbkI7QUFDQSxVQUFJQyxJQUFJLEdBQUd2RyxNQUFNLENBQUMsQ0FBRCxDQUFqQjtBQUNBLFVBQUl3RyxRQUFRLEdBQUdELElBQUksR0FBQ1gsYUFBcEI7QUFDQSxhQUFPO0FBQUNZLGdCQUFEO0FBQVdEO0FBQVgsT0FBUDtBQUNIOztBQUVELFVBQU1FLFNBQU4sQ0FBZ0JDLFFBQVEsR0FBQyxJQUF6QixFQUE4QjtBQUMxQixZQUFNbEosQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxZQUFrQkUsQ0FBQyxHQUFHLEtBQUtBLENBQTNCOztBQUNBLFlBQU0rSSxTQUFTLEdBQUcsTUFBT3JJLE1BQVAsSUFBZ0I7QUFDOUIsWUFBR1osQ0FBQyxDQUFDcUIsUUFBRixDQUFXVCxNQUFYLENBQUgsRUFBc0I7QUFDbEIsaUJBQU9HLEtBQUssQ0FBQ29JLElBQU4sRUFBVyxNQUFNdkksTUFBTSxDQUFDa0ksSUFBUCxFQUFqQixFQUFQO0FBQ0gsU0FGRCxNQUdJO0FBQ0EsY0FBSU0sS0FBSyxHQUFHbEosQ0FBQyxDQUFDbUosT0FBRixDQUFVekksTUFBVixDQUFaO0FBQ0EsY0FBSWEsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsZUFBSSxJQUFJLENBQUM0QixDQUFELEVBQUlpRyxHQUFKLENBQVIsSUFBb0JGLEtBQXBCLEVBQTBCO0FBQ3RCM0gsZUFBRyxDQUFDNEIsQ0FBRCxDQUFILEdBQVMsTUFBTTRGLFNBQVMsQ0FBQ0ssR0FBRCxDQUF4QjtBQUNIOztBQUNELGlCQUFPN0gsR0FBUDtBQUNIO0FBQ0osT0FaRDs7QUFhQSxVQUFJYixNQUFNLEdBQUcsTUFBTXFJLFNBQVMsQ0FBQyxLQUFLbkosU0FBTixDQUE1Qjs7QUFDQSxVQUFHb0osUUFBSCxFQUFZO0FBQ1IsZUFBT3RJLE1BQVA7QUFDSCxPQUZELE1BR0k7QUFDQSxlQUFPMkksSUFBSSxDQUFDQyxTQUFMLENBQWU1SSxNQUFmLENBQVA7QUFDSDtBQUNKOztBQUNELFVBQU02SSxjQUFOLEdBQXNCO0FBQ2xCLFVBQUlDLFFBQVEsR0FBRyxNQUFNLEtBQUszSixPQUFMLENBQWE0SixXQUFiLENBQXlCLEtBQUt0SixZQUE5QixDQUFyQjtBQUNBLGFBQU9xSixRQUFRLENBQUNuRyxHQUFULENBQWFxRyxRQUFRLElBQUVBLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQixLQUFLeEosWUFBdEIsRUFBbUMsRUFBbkMsQ0FBdkIsQ0FBUDtBQUNIOztBQUNELFVBQU15SixVQUFOLENBQWlCRixRQUFRLEdBQUMsWUFBMUIsRUFBdUM7QUFDbkMsWUFBTWhKLE1BQU0sR0FBRyxNQUFNLEtBQUtxSSxTQUFMLEVBQXJCO0FBQ0EsWUFBTSxLQUFLbEosT0FBTCxDQUFhZ0ssU0FBYixDQUF1QixLQUFLMUosWUFBTCxHQUFvQnVKLFFBQTNDLEVBQXFETCxJQUFJLENBQUNDLFNBQUwsQ0FBZTVJLE1BQWYsQ0FBckQsQ0FBTjtBQUNBLGFBQU9BLE1BQVA7QUFDSDs7QUFDRCxVQUFNb0osVUFBTixDQUFpQkosUUFBakIsRUFBMkJoSixNQUFNLEdBQUMsSUFBbEMsRUFBdUM7QUFDbkMsVUFBRyxDQUFDQSxNQUFKLEVBQVc7QUFDUCxZQUFJcUosT0FBTyxHQUFHLE1BQU0sS0FBS2xLLE9BQUwsQ0FBYW1LLFFBQWIsQ0FBc0IsS0FBSzdKLFlBQUwsR0FBa0J1SixRQUF4QyxDQUFwQjs7QUFDQXpILGVBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUM2SDtBQUFELFNBQVo7QUFDQXJKLGNBQU0sR0FBRzJJLElBQUksQ0FBQ1ksS0FBTCxDQUFXRixPQUFYLENBQVQ7QUFDSDs7QUFDRCxXQUFLbkssU0FBTCxHQUFpQixLQUFLWSxlQUFMLENBQXFCLEtBQUtGLFlBQTFCLEVBQXdDSSxNQUF4QyxDQUFqQjtBQUNBLGFBQU8sTUFBTSxLQUFLcUksU0FBTCxDQUFlLEtBQWYsQ0FBYjtBQUNIOztBQTFOMkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJDTGpFbUIsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQ0FBQyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGYsUUFBTTFLLGNBQWMsR0FBSTJLLGFBQUQsSUFBa0IsY0FBY0EsYUFBZCxDQUEyQjtBQUNoRSxVQUFNQyxZQUFOLENBQW1CcEMscUJBQW5CLEVBQTBDcUMsU0FBMUMsRUFBcURwQyxhQUFyRCxFQUFvRUMsVUFBVSxHQUFDLEVBQS9FLEVBQWtGO0FBQzlFLFlBQU14RixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFlBQWtCN0MsQ0FBQyxHQUFHLEtBQUtBLENBQTNCO0FBQUEsWUFBOEJFLENBQUMsR0FBRyxLQUFLQSxDQUF2QztBQUNBLFlBQU1vSSxtQkFBbUIsR0FBR0gscUJBQXFCLENBQUNDLGFBQUQsQ0FBakQ7QUFDQSxVQUFJRyxVQUFVLEdBQUcxRixDQUFDLENBQUMyRixLQUFGLENBQVEsQ0FBQyxDQUFELENBQVIsQ0FBakI7O0FBQ0EsaUJBQVcsSUFBSSxDQUFDdkMsWUFBRCxFQUFlQyxXQUFmLENBQWYsSUFBOENvQyxtQkFBOUMsRUFBa0U7QUFDOUQsWUFBSWxDLFdBQVcsR0FBSXZELENBQUMsQ0FBQzJCLE1BQUYsQ0FBUzBCLFdBQVQsRUFBc0J6QixPQUF0QixDQUE4QixDQUFDMkQsYUFBRCxFQUFnQkMsVUFBaEIsQ0FBOUIsQ0FBbkI7QUFDQSxZQUFJaEMsWUFBWSxHQUFHeEQsQ0FBQyxDQUFDMkIsTUFBRixDQUFTeUIsWUFBVCxFQUF1QkssTUFBdkIsQ0FBOEIsU0FBOUIsQ0FBbkI7QUFDQSxjQUFNO0FBQUNSO0FBQUQsWUFBWSxNQUFNLEtBQUsyRSxtQkFBTCxDQUF5QkQsU0FBekIsRUFBb0NuRSxZQUFwQyxFQUFrRCtCLGFBQWxELENBQXhCO0FBQ0EsWUFBSUssYUFBYSxHQUFHNUYsQ0FBQyxDQUFDNkYsTUFBRixDQUFTNUMsT0FBVCxFQUFrQnVDLFVBQWxCLENBQXBCO0FBQ0FJLHFCQUFhLENBQUNFLEtBQWQ7QUFDQXZDLG1CQUFXLENBQUN1QyxLQUFaO0FBQ0FGLHFCQUFhLENBQUNoQyxHQUFkLENBQWtCTCxXQUFsQixFQUErQndDLEdBQS9CLEdBQXFDRCxLQUFyQztBQUNBSixrQkFBVSxHQUFHQSxVQUFVLENBQUNNLEdBQVgsQ0FBZUosYUFBYSxDQUFDaEMsR0FBZCxDQUFrQkwsV0FBbEIsRUFBK0J3QyxHQUEvQixFQUFmLENBQWI7QUFDSDs7QUFDRCxVQUFJcEcsTUFBTSxHQUFHLE1BQU0rRixVQUFVLENBQUNPLElBQVgsRUFBbkI7QUFDQSxVQUFJQyxJQUFJLEdBQUd2RyxNQUFNLENBQUMsQ0FBRCxDQUFqQjtBQUNBLFVBQUl3RyxRQUFRLEdBQUdELElBQUksR0FBQ1gsYUFBcEI7QUFDQSxhQUFPO0FBQUNZLGdCQUFEO0FBQVdEO0FBQVgsT0FBUDtBQUNIOztBQUNELFVBQU0wQixtQkFBTixDQUEwQkQsU0FBMUIsRUFBcUM3RixPQUFyQyxFQUE4Q0MsVUFBVSxHQUFDLENBQXpELEVBQTJEO0FBQ3ZELFlBQU0vQixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFlBQWtCZ0MsQ0FBQyxHQUFHLEtBQUs3RSxDQUEzQjtBQUFBLFlBQThCOEUsQ0FBQyxHQUFHLEtBQUtDLENBQXZDO0FBQ0EsV0FBS3pFLGVBQUwsQ0FBcUIwRSxRQUFyQixHQUFnQ0osVUFBaEM7QUFDQSxZQUFNSyxRQUFRLEdBQUdKLENBQUMsQ0FBQ0ssb0JBQUYsQ0FBdUIsS0FBSzFFLFlBQTVCLEVBQTBDLEtBQUtGLGVBQS9DLENBQWpCO0FBQ0EsVUFBSTZFLFNBQVMsR0FBRztBQUFDQyxpQkFBUyxFQUFFVDtBQUFaLE9BQWhCO0FBQUEsVUFBc0NVLE1BQU0sR0FBRyxFQUEvQztBQUFBLFVBQW1EdkYsU0FBUyxHQUFHLEtBQUtBLFNBQXBFO0FBQ0EsVUFBSTRLLEtBQUssR0FBRyxFQUFaOztBQUNBLFdBQUksSUFBSUMsS0FBUixJQUFpQkgsU0FBakIsRUFBMkI7QUFDdkIsY0FBTSxLQUFLUixVQUFMLENBQWdCVyxLQUFoQixDQUFOO0FBQ0EsWUFBSTtBQUFDaEY7QUFBRCxZQUFZOUMsQ0FBQyxDQUFDeUMsSUFBRixDQUFPLE1BQUk7QUFDdkIsZUFBSSxJQUFJM0QsS0FBUixJQUFpQnNELFFBQWpCLEVBQTBCO0FBQ3RCLGdCQUFJTSxXQUFXLEdBQUcsS0FBSzVELEtBQUwsQ0FBV3dELFNBQVMsQ0FBQ3hELEtBQUssQ0FBQzZELEtBQVAsQ0FBcEIsRUFBbUM3RCxLQUFuQyxFQUEwQzdCLFNBQVMsQ0FBQzZCLEtBQUssQ0FBQ0ksSUFBUCxDQUFuRCxDQUFsQjtBQUNBb0QscUJBQVMsQ0FBQ3hELEtBQUssQ0FBQ0ksSUFBUCxDQUFULEdBQXdCd0QsV0FBVyxDQUFDNUQsS0FBSyxDQUFDSSxJQUFQLENBQW5DO0FBQ0FzRCxrQkFBTSxDQUFDSSxJQUFQLENBQVk7QUFBQyxlQUFDOUQsS0FBSyxDQUFDSSxJQUFQLEdBQWN3RCxXQUFXLENBQUM5QztBQUEzQixhQUFaO0FBQ0g7O0FBQ0ROLGlCQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDaUQ7QUFBRCxXQUFaO0FBQ0EsY0FBSUssVUFBVSxHQUFHUCxTQUFTLENBQUMsWUFBRCxDQUExQjtBQUNBLGNBQUlRLE9BQU8sR0FBR0QsVUFBVSxDQUFDRSxHQUFYLENBQWUvQyxDQUFDLENBQUNnRCxTQUFGLENBQVlILFVBQVosRUFBd0IsQ0FBeEIsRUFBMkIsSUFBM0IsQ0FBZixDQUFkO0FBQ0EsY0FBSUksT0FBTyxHQUFHSCxPQUFPLENBQUNJLE1BQVIsQ0FBZSxDQUFmLENBQWQ7QUFDQSxpQkFBTztBQUFDSixtQkFBRDtBQUFVRztBQUFWLFdBQVA7QUFDSCxTQVhlLENBQWhCO0FBWUFILGVBQU8sQ0FBQ2dELEtBQVI7QUFDQStCLGFBQUssQ0FBQ2pGLElBQU4sQ0FBVzVDLENBQUMsQ0FBQytILEdBQUYsQ0FBTWpGLE9BQU4sQ0FBWDtBQUNIOztBQUNELFVBQUlrRixRQUFRLEdBQUdoSSxDQUFDLENBQUNpSSxNQUFGLENBQVNKLEtBQVQsRUFBZ0JoRSxJQUFoQixDQUFxQixDQUFyQixFQUF3QixJQUF4QixDQUFmO0FBQ0FtRSxjQUFRLENBQUNsQyxLQUFUO0FBQ0EsVUFBSW9DLGVBQWUsR0FBR0YsUUFBUSxDQUFDOUUsTUFBVCxDQUFnQixDQUFoQixDQUF0QjtBQUNBLGFBQU87QUFBQ0QsZUFBTyxFQUFDaUY7QUFBVCxPQUFQO0FBQ0g7O0FBL0MrRCxHQUFwRTs7aUJBaURlcEwsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQSxRQUFNTSxRQUFOLFNBQXVCK0ssbUJBQXZCLENBQW1DO0FBQzlDcEwsZUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFFRHlCLFlBQVEsQ0FBQ2lJLEdBQUQsRUFBSztBQUNUO0FBQ0EsYUFBT0EsR0FBRyxDQUFDdEcsS0FBSixLQUFjTSxTQUFyQjtBQUNIOztBQUNEZ0UsU0FBSyxDQUFDMkQsR0FBRCxFQUFLO0FBQ04sYUFBTyxLQUFLL0ssQ0FBTCxDQUFPb0gsS0FBUCxDQUFhLENBQWIsRUFBZ0IyRCxHQUFoQixDQUFQO0FBQ0g7O0FBRUQ5RyxlQUFXLENBQUNtRixHQUFELEVBQUs7QUFDWixZQUFNcEosQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxhQUFPQSxDQUFDLENBQUN3QixFQUFGLENBQUtYLEtBQUwsRUFBWXVJLEdBQVosS0FBb0JwSixDQUFDLENBQUNnTCxHQUFGLENBQU1oTCxDQUFDLENBQUN3QixFQUFGLENBQUt5SixNQUFMLENBQU4sRUFBb0I3QixHQUFwQixDQUEzQjtBQUNIOztBQUVEN0ksZUFBVyxDQUFDWixTQUFELEVBQVc7QUFDbEI7QUFDQSxhQUFPLEtBQUtLLENBQUwsQ0FBTzRELElBQVAsQ0FBWSxVQUFaLEVBQXdCakUsU0FBeEIsQ0FBUDtBQUNIOztBQUVEVSxxQkFBaUIsQ0FBQ1YsU0FBRCxFQUFXO0FBQ3hCO0FBQ0EsYUFBTyxLQUFLSyxDQUFMLENBQU80RCxJQUFQLENBQVksaUJBQVosRUFBK0JqRSxTQUEvQixDQUFQO0FBQ0g7O0FBRUR1TCxlQUFXLEdBQUU7QUFDVCxhQUFPbEwsQ0FBQyxDQUFDbUwsS0FBRixDQUFRLFVBQVN6SCxJQUFULEVBQWUwSCxJQUFmLEVBQW9CO0FBQy9CcEwsU0FBQyxDQUFDcUwsSUFBRixDQUFPQyxLQUFQLENBQWEsSUFBYixFQUFtQnRMLENBQUMsQ0FBQ3FELEdBQUYsQ0FBTXJELENBQUMsQ0FBQzRELElBQVIsRUFBY0YsSUFBZCxDQUFuQixFQUF3QzBILElBQXhDO0FBQ0gsT0FGTSxDQUFQO0FBR0g7O0FBRURwRyx3QkFBb0IsQ0FBQ3VHLFlBQUQsRUFBZUMsZUFBZixFQUErQjtBQUMvQyxZQUFNeEwsQ0FBQyxHQUFHLEtBQUtBLENBQWY7O0FBQ0EsZUFBU3lMLGNBQVQsQ0FBd0IvSixLQUF4QixFQUErQjhKLGVBQS9CLEVBQStDO0FBQzNDLFlBQUd4TCxDQUFDLENBQUN3QixFQUFGLENBQUtrSyxNQUFMLEVBQWFoSyxLQUFiLEtBQXVCMUIsQ0FBQyxDQUFDMkwsVUFBRixDQUFhLEdBQWIsRUFBa0JqSyxLQUFsQixDQUExQixFQUFtRDtBQUMvQyxnQkFBTXFDLEdBQUcsR0FBRy9ELENBQUMsQ0FBQzRMLEtBQUYsQ0FBUSxDQUFSLEVBQVdDLFFBQVgsRUFBcUJuSyxLQUFyQixDQUFaO0FBQ0EsaUJBQU8xQixDQUFDLENBQUM0RCxJQUFGLENBQU9HLEdBQVAsRUFBWXlILGVBQVosQ0FBUDtBQUNIOztBQUNELGVBQU85SixLQUFQO0FBQ0g7O0FBQ0QsWUFBTW9LLGdCQUFnQixHQUFHOUwsQ0FBQyxDQUFDbUwsS0FBRixDQUFRTSxjQUFSLEVBQXdCekwsQ0FBQyxDQUFDcUMsRUFBMUIsRUFBOEJtSixlQUE5QixDQUF6Qjs7QUFDQSxlQUFTTyxxQkFBVCxDQUErQlIsWUFBL0IsRUFBNEM7QUFDeEMsWUFBR3ZMLENBQUMsQ0FBQ3dCLEVBQUYsQ0FBS1gsS0FBTCxFQUFZMEssWUFBWixLQUE2QnZMLENBQUMsQ0FBQ3dCLEVBQUYsQ0FBS1QsTUFBTCxFQUFhd0ssWUFBYixDQUFoQyxFQUEyRDtBQUN2RCxpQkFBT3ZMLENBQUMsQ0FBQ3FELEdBQUYsQ0FBTTBJLHFCQUFOLEVBQTZCUixZQUE3QixDQUFQO0FBQ0gsU0FGRCxNQUdJO0FBQ0EsaUJBQU9PLGdCQUFnQixDQUFDUCxZQUFELENBQXZCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPUSxxQkFBcUIsQ0FBQ1IsWUFBRCxDQUE1QjtBQUNIOztBQUVEcEssWUFBUSxDQUFDNkssTUFBRCxFQUFRO0FBQ1osYUFBT0EsTUFBTSxDQUFDQyxJQUFQLEtBQWdCN0ksU0FBaEIsSUFBNkI0SSxNQUFNLENBQUNsSixLQUFQLEtBQWlCTSxTQUE5QyxJQUEyRDRJLE1BQU0sQ0FBQ0UsS0FBUCxLQUFpQjlJLFNBQW5GO0FBQ0g7O0FBekQ2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkNEbkMrSSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJDQUFDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkNBQUMsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQ0FBQyxLOzs7Ozs7Ozs7Ozs7O0FDRGYsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9waXBlbGluZS5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5kYXRhc2V0c1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQuZGF0YXNldHNcIiwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5kYXRhc2V0c1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5kYXRhc2V0c1wiXSwgcm9vdFtcImNhdXNhbC1uZXQubWVtY2FjaGVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9kYXRhc2V0c19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG5ld09iaiA9IHt9O1xuXG4gICAgaWYgKG9iaiAhPSBudWxsKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307XG5cbiAgICAgICAgICBpZiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3T2JqLmRlZmF1bHQgPSBvYmo7XG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvYmFzZUxvZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Jhc2VMb2cuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtleHBvcnRzXSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID0gKGZhY3RvcnkpLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyA9ICh0eXBlb2YgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0KF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXy5hcHBseShleHBvcnRzLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fKSkgOiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18pLFxuXHRcdFx0XHRfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXyAhPT0gdW5kZWZpbmVkICYmIChtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fKSk7XG4gIH0gZWxzZSB7IHZhciBtb2Q7IH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChfZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX2V4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbiAgY2xhc3MgQmFzZUxvZyB7XG4gICAgY29uc3RydWN0b3IocHJlZml4ID0gW10pIHtcbiAgICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICAgIH1cblxuICB9XG5cbiAgX2V4cG9ydHMuZGVmYXVsdCA9IEJhc2VMb2c7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHRydWUpIHtcbiAgICAhKF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18gPSBbZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXJtTG9nICovIFwiLi9zcmMvdGVybUxvZy5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlTG9nICovIFwiLi9zcmMvYmFzZUxvZy5qc1wiKV0sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2UgeyB2YXIgbW9kOyB9XG59KSh0aGlzLCBmdW5jdGlvbiAoX2V4cG9ydHMsIF90ZXJtTG9nLCBfYmFzZUxvZykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9leHBvcnRzLCBcIkxvZ2dlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGVybUxvZy5kZWZhdWx0O1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJCYXNlTG9nXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9iYXNlTG9nLmRlZmF1bHQ7XG4gICAgfVxuICB9KTtcbiAgX3Rlcm1Mb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXJtTG9nKTtcbiAgX2Jhc2VMb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlTG9nKTtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wcmV0dHlKc29uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcHJldHR5SnNvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICAvL29yaWdpbiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2x1Y3lnaWxiZXJ0L2pzb24tZGlzcGxheS9ibG9iL21hc3Rlci9qc29uLWRpc3BsYXkuanNcbiAgLy8gQ29weXJpZ2h0IChjKSAyMDE3IEx1Y3kgR2lsYmVydFxuICBjbGFzcyBKc29uVmlldyB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc3RhdGljIEpTT05EaXNwbGF5KGpzb24sIG9wZW5MZXZlbHNBcmcsIHN0eWxlT3B0aW9uc0FyZykge1xuICAgICAgdmFyIERFRkFVTFRfU1RZTEVfT1BUSU9OUyA9IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHRhZzogJ3ByZScsXG4gICAgICAgICAgc3R5bGU6ICdwYWRkaW5nOiA1cHg7IGZvbnQtc2l6ZTogMXJlbTsnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlQ29udGFpbmVyOiB7XG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICBzdHlsZTogJ21hcmdpbi1ib3R0b206IDNweDsnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXI7J1xuICAgICAgICB9LFxuICAgICAgICB0aXRsZVRleHQ6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgb3BlbkJ1dHRvbjoge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW46IDBweCA3cHggMHB4IDJweDsgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAnICsgJ2JvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjazsnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRzQ29udGFpbmVyOiB7XG4gICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICBzdHlsZTogJ3BhZGRpbmctbGVmdDogMThweDsnXG4gICAgICAgIH0sXG4gICAgICAgIGtleVZhbHVlUGFpcjoge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDJweDsnXG4gICAgICAgIH0sXG4gICAgICAgIGtleToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGRhcmtibHVlOydcbiAgICAgICAgfSxcbiAgICAgICAgc3ltYm9sVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBkYXJrZ3JlZW47J1xuICAgICAgICB9LFxuICAgICAgICBzdHJpbmdWYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGNyaW1zb247J1xuICAgICAgICB9LFxuICAgICAgICBudW1iZXJWYWx1ZToge1xuICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgIHN0eWxlOiAnY29sb3I6IGJsdWU7J1xuICAgICAgICB9LFxuICAgICAgICBib29sZWFuVmFsdWU6IHtcbiAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICBzdHlsZTogJ2NvbG9yOiBibHVlOydcbiAgICAgICAgfSxcbiAgICAgICAgbnVsbFZhbHVlOiB7XG4gICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgc3R5bGU6ICdjb2xvcjogYmx1ZTsnXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgb3BlbkxldmVscyA9IGlzTmFOKHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpKSA/IEluZmluaXR5IDogcGFyc2VJbnQob3BlbkxldmVsc0FyZyk7XG4gICAgICB2YXIgc3R5bGVPcHRpb25zID0gdHlwZW9mIHN0eWxlT3B0aW9uc0FyZyA9PT0gJ29iamVjdCcgPyBtZXJnZVN0eWxlT3B0aW9ucyhERUZBVUxUX1NUWUxFX09QVElPTlMsIHN0eWxlT3B0aW9uc0FyZykgOiBERUZBVUxUX1NUWUxFX09QVElPTlM7XG5cbiAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcblxuICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnJvb3QudGFnKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnJvb3Quc3R5bGU7XG5cbiAgICAgICAgaWYgKGpzb24gPT09IG51bGwgfHwganNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFyIHZvaWRFbGVtZW50ID0gZ2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh2b2lkRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICB2YXIgZGF0ZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBqc29uICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhciBub25FeHBhbmRhYmxlRWxlbWVudCA9IGdldFZhbHVlKGpzb24pO1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9uRXhwYW5kYWJsZUVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0aXRsZSA9IEFycmF5LmlzQXJyYXkoanNvbikgPyAnQXJyYXlbJyArIGpzb24ubGVuZ3RoICsgJ10nIDogJ09iamVjdCc7XG4gICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gb3BlbkxldmVscyA8IDE7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChnZXRUaXRsZSh0aXRsZSwgbnVsbCwgdGhpc0xldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCAxKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIGluZGV4KSB7XG4gICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgICAgdmFyIG5leHRMZXZlbElzQ2xvc2VkID0gaW5kZXggKyAxID4gb3BlbkxldmVscztcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRlbnRzQ29udGFpbmVyKHRoaXNMZXZlbElzQ2xvc2VkKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4ganNvbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnQXJyYXlbJyArIGpzb25ba2V5XS5sZW5ndGggKyAnXScsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSA9PT0gbnVsbCB8fCBqc29uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIG51bGwpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0udG9JU09TdHJpbmcoKSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnT2JqZWN0Jywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhqc29uKS5mb3JFYWNoKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoc3ltYm9sLnRvU3RyaW5nKCksIGpzb25bc3ltYm9sXSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0VGl0bGUodGl0bGVUZXh0LCBvcHRpb25hbEtleSwgbGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICB2YXIgY3VycmVudGx5Q2xvc2VkID0gbGV2ZWxJc0Nsb3NlZDtcbiAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIuc3R5bGU7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAndGl0bGVDb250YWluZXInKTtcbiAgICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICAgIHZhciB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZS50YWcpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZS5zdHlsZTtcbiAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZChnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpKTtcblxuICAgICAgICBpZiAob3B0aW9uYWxLZXkpIHtcbiAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkob3B0aW9uYWxLZXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuXG4gICAgICAgIHRpdGxlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBvcGVuQnV0dG9uID0gdGl0bGVFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgb2JqZWN0Q29udGVudHMuc3R5bGUuZGlzcGxheSA9IGN1cnJlbnRseUNsb3NlZCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgb3BlbkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50bHlDbG9zZWQgPyAncm90YXRlKDkwZGVnKScgOiAncm90YXRlKDBkZWcpJztcbiAgICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm9wZW5CdXR0b24udGFnKTtcbiAgICAgICAgYnV0dG9uRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm9wZW5CdXR0b24uc3R5bGU7XG4gICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0Q29udGVudHNDb250YWluZXIoaXNDbG9zZWQpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ2NvbnRlbnRzQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gaXNDbG9zZWQgPyAnbm9uZScgOiAnYmxvY2snO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHBhaXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnRhZyk7XG4gICAgICAgIHBhaXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnN0eWxlO1xuICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldFZhbHVlKHZhbHVlKSk7XG4gICAgICAgIHJldHVybiBwYWlyRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0S2V5KG5hbWUpIHtcbiAgICAgICAgdmFyIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXkudGFnKTtcbiAgICAgICAga2V5RWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleS5zdHlsZTtcbiAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lICsgJzogJykpO1xuICAgICAgICByZXR1cm4ga2V5RWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgICAgdmFyIG51bGxUeXBlID0gJ29iamVjdCc7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5zdHJpbmdWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCInICsgdmFsdWUgKyAnXCInKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udW1iZXJWYWx1ZS50YWcpO1xuICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIG51bGxUeXBlOlxuICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5udWxsVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgICB2YXIgbWVyZ2VkID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgbWVyZ2VkW2tleV0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0c1trZXldLCBvdmVycmlkZXNba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVuZGVyKCk7XG4gICAgfVxuXG4gIH1cblxuICBfZXhwb3J0cy5kZWZhdWx0ID0gSnNvblZpZXc7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2cuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHJ1ZSkge1xuICAgICEoX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyA9IFtleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VMb2cgKi8gXCIuL3NyYy9iYXNlTG9nLmpzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Rlcm1Mb2cubWl4aW5zLm5vZGUgKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Rlcm1Mb2cubWl4aW5zLndlYiAqLyBcIi4vc3JjL3Rlcm1Mb2cubWl4aW5zLndlYi5qc1wiKSwgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC51dGlscyAqLyBcImNhdXNhbC1uZXQudXRpbHNcIildLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzLCBfYmFzZUxvZywgX3Rlcm1Mb2dNaXhpbnMsIF90ZXJtTG9nTWl4aW5zMiwgX2NhdXNhbE5ldCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgX2Jhc2VMb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlTG9nKTtcbiAgX3Rlcm1Mb2dNaXhpbnMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90ZXJtTG9nTWl4aW5zKTtcbiAgX3Rlcm1Mb2dNaXhpbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGVybUxvZ01peGluczIpO1xuXG4gIGNsYXNzIFRlcm1Mb2cgZXh0ZW5kcyBfY2F1c2FsTmV0LlBsYXRmb3JtLm1peFdpdGgoX2Jhc2VMb2cuZGVmYXVsdCwge1xuICAgICdub2RlJzogW190ZXJtTG9nTWl4aW5zLmRlZmF1bHRdLFxuICAgICd3ZWInOiBbX3Rlcm1Mb2dNaXhpbnMyLmRlZmF1bHRdXG4gIH0pIHtcbiAgICBjb25zdHJ1Y3RvcihwcmVmaXgpIHtcbiAgICAgIHN1cGVyKHByZWZpeCk7XG4gICAgfVxuXG4gIH1cblxuICBjb25zdCBMb2dnZXIgPSBuZXcgVGVybUxvZygpO1xuICB2YXIgX2RlZmF1bHQgPSBMb2dnZXI7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy90ZXJtTG9nLm1peGlucy5ub2RlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHNdLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuICBjb25zdCBMb2dOb2RlTWl4aW5zID0gTG9nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzcyB7XG4gICAgY29ubmVjdChjaGFubmVsKSB7Ly9ub3RoaW5nXG4gICAgfVxuXG4gICAgbG9nKG1lc3NhZ2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHNjcm9sbEJvdHRvbSgpIHsvL25vdGhpbmdcbiAgICB9XG5cbiAgICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSkge1xuICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGk6bnRoLWxhc3Qtb2YtdHlwZSgxKVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKG5vZGUpO1xuXG4gICAgICBpZiAoIW5vZGUpIHsvL2NyZWF0ZSBuZXdcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuICB2YXIgX2RlZmF1bHQgPSBMb2dOb2RlTWl4aW5zO1xuICBfZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG59KTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZy5taXhpbnMud2ViLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcHJldHR5SnNvbiAqLyBcIi4vc3JjL3ByZXR0eUpzb24uanNcIildLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPSAoZmFjdG9yeSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKHR5cGVvZiBfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18gPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHQoX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fLmFwcGx5KGV4cG9ydHMsIF9fV0VCUEFDS19BTURfREVGSU5FX0FSUkFZX18pKSA6IF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcbiAgfSBlbHNlIHsgdmFyIG1vZDsgfVxufSkodGhpcywgZnVuY3Rpb24gKF9leHBvcnRzLCBfcHJldHR5SnNvbikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIEBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0ICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgX2V4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgX3ByZXR0eUpzb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmV0dHlKc29uKTtcblxuICBjb25zdCBXZWJOb2RlTWl4aW5zID0gTG9nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzcyB7XG4gICAgY29ubmVjdChkb2N1bWVudEVsID0gbnVsbCkge1xuICAgICAgZG9jdW1lbnRFbCA9IGRvY3VtZW50RWwgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gXCJsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XCI7XG4gICAgICBkb2N1bWVudEVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgdGhpcy5mcmFtZUVsID0gZG9jdW1lbnRFbDtcbiAgICAgIHRoaXMubG9nZ2VyRWwgPSBkb2N1bWVudEVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIilbMF07XG4gICAgfVxuXG4gICAgc2Nyb2xsQm90dG9tKGVsZW1lbnQgPSBudWxsKSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLmZyYW1lRWw7XG4gICAgICBjb25zb2xlLmxvZygnc2NvbGwgYm90dG9tICcgKyBlbGVtZW50LnNjcm9sbEhlaWdodCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9XG5cbiAgICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSkge1xuICAgICAgLy8gbGV0IG5vZGUgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGk6bnRoLWxhc3Qtb2YtdHlwZSgxKVwiKTtcbiAgICAgIGxldCBMSU5vZGVzID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpO1xuICAgICAgbGV0IG5vZGUgPSBMSU5vZGVzW0xJTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghbm9kZSB8fCBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlci1wcm9ncmVzc1wiKSkge1xuICAgICAgICAvL2NyZWF0ZSBuZXdcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VyLXByb2dyZXNzXCIpO1xuICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBsZXQganNvbk5vZGUgPSBfcHJldHR5SnNvbi5kZWZhdWx0LkpTT05EaXNwbGF5KHByb2Nlc3NNZXNzYWdlKTtcblxuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgfVxuXG4gICAgbG9nKG1lc3NhZ2UpIHtcbiAgICAgIGlmICghdGhpcy5sb2dnZXJFbCB8fCAhdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZCkge1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSAnYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7JztcblxuICAgICAgbGV0IGpzb25Ob2RlID0gX3ByZXR0eUpzb24uZGVmYXVsdC5KU09ORGlzcGxheShtZXNzYWdlKTtcblxuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5wcmVmaXguam9pbignLycpKTtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICB9O1xuXG4gIHZhciBfZGVmYXVsdCA9IFdlYk5vZGVNaXhpbnM7XG4gIF9leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMDpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogbXVsdGkgLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NyYy9pbmRleC5qcyAqL1wiLi9zcmMvaW5kZXguanNcIik7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC51dGlsc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OTNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZRR0poWW1Wc0wzSjFiblJwYldVdmFHVnNjR1Z5Y3k5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2TGk5emNtTXZZbUZ6WlV4dlp5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyeHZaeTh1TDNOeVl5OXdjbVYwZEhsS2MyOXVMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiRzluTHk0dmMzSmpMM1JsY20xTWIyY3Vhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXNiMmN2TGk5emNtTXZkR1Z5YlV4dlp5NXRhWGhwYm5NdWJtOWtaUzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMnh2Wnk4dUwzTnlZeTkwWlhKdFRHOW5MbTFwZUdsdWN5NTNaV0l1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdlpYaDBaWEp1WVd3Z1hDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSWlYU3dpYm1GdFpYTWlPbHNpUW1GelpVeHZaeUlzSW1OdmJuTjBjblZqZEc5eUlpd2ljSEpsWm1sNElpd2lTbk52YmxacFpYY2lMQ0pLVTA5T1JHbHpjR3hoZVNJc0ltcHpiMjRpTENKdmNHVnVUR1YyWld4elFYSm5JaXdpYzNSNWJHVlBjSFJwYjI1elFYSm5JaXdpUkVWR1FWVk1WRjlUVkZsTVJWOVBVRlJKVDA1VElpd2ljbTl2ZENJc0luUmhaeUlzSW5OMGVXeGxJaXdpZEdsMGJHVkRiMjUwWVdsdVpYSWlMQ0owYVhSc1pTSXNJblJwZEd4bFZHVjRkQ0lzSW05d1pXNUNkWFIwYjI0aUxDSmpiMjUwWlc1MGMwTnZiblJoYVc1bGNpSXNJbXRsZVZaaGJIVmxVR0ZwY2lJc0ltdGxlU0lzSW5ONWJXSnZiRlpoYkhWbElpd2ljM1J5YVc1blZtRnNkV1VpTENKdWRXMWlaWEpXWVd4MVpTSXNJbUp2YjJ4bFlXNVdZV3gxWlNJc0ltNTFiR3hXWVd4MVpTSXNJbTl3Wlc1TVpYWmxiSE1pTENKcGMwNWhUaUlzSW5CaGNuTmxTVzUwSWl3aVNXNW1hVzVwZEhraUxDSnpkSGxzWlU5d2RHbHZibk1pTENKdFpYSm5aVk4wZVd4bFQzQjBhVzl1Y3lJc0lrOWlhbVZqZENJc0ltRnpjMmxuYmlJc0luUmhjbWRsZENJc0lsUjVjR1ZGY25KdmNpSXNJblJ2SWl3aWFXNWtaWGdpTENKaGNtZDFiV1Z1ZEhNaUxDSnNaVzVuZEdnaUxDSnVaWGgwVTI5MWNtTmxJaXdpYm1WNGRFdGxlU0lzSW5CeWIzUnZkSGx3WlNJc0ltaGhjMDkzYmxCeWIzQmxjblI1SWl3aVkyRnNiQ0lzSW5KbGJtUmxjaUlzSW1Wc1pXMWxiblFpTENKa2IyTjFiV1Z1ZENJc0ltTnlaV0YwWlVWc1pXMWxiblFpTENKamMzTlVaWGgwSWl3aWRXNWtaV1pwYm1Wa0lpd2lkbTlwWkVWc1pXMWxiblFpTENKblpYUldZV3gxWlNJc0ltRndjR1Z1WkVOb2FXeGtJaXdpUkdGMFpTSXNJbVJoZEdWRmJHVnRaVzUwSWl3aWRHOUpVMDlUZEhKcGJtY2lMQ0p1YjI1RmVIQmhibVJoWW14bFJXeGxiV1Z1ZENJc0lrRnljbUY1SWl3aWFYTkJjbkpoZVNJc0luUm9hWE5NWlhabGJFbHpRMnh2YzJWa0lpd2laMlYwVkdsMGJHVWlMQ0pqYjI1MlpYSjBTbk52YmxSdlJXeGxiV1Z1ZEhNaUxDSnVaWGgwVEdWMlpXeEpjME5zYjNObFpDSXNJbU52Ym5SaGFXNWxjaUlzSW1kbGRFTnZiblJsYm5SelEyOXVkR0ZwYm1WeUlpd2laMlYwVTNSaGJtUmhjbVJRWVdseUlpd2laMlYwVDNkdVVISnZjR1Z5ZEhsVGVXMWliMnh6SWl3aVptOXlSV0ZqYUNJc0luTjViV0p2YkNJc0luUnZVM1J5YVc1bklpd2liM0IwYVc5dVlXeExaWGtpTENKc1pYWmxiRWx6UTJ4dmMyVmtJaXdpWTNWeWNtVnVkR3g1UTJ4dmMyVmtJaXdpWTI5dWRHRnBibVZ5Uld4bGJXVnVkQ0lzSW5ObGRFRjBkSEpwWW5WMFpTSXNJblJsZUhSRmJHVnRaVzUwSWl3aWRHbDBiR1ZGYkdWdFpXNTBJaXdpWjJWMFQzQmxia0oxZEhSdmJpSXNJbWRsZEV0bGVTSXNJbU55WldGMFpWUmxlSFJPYjJSbElpd2liMjVqYkdsamF5SXNJbVpwY25OMFEyaHBiR1FpTENKdlltcGxZM1JEYjI1MFpXNTBjeUlzSW5CaGNtVnVkRTV2WkdVaUxDSnVaWGgwVTJsaWJHbHVaeUlzSW1ScGMzQnNZWGtpTENKMGNtRnVjMlp2Y20waUxDSmlkWFIwYjI1RmJHVnRaVzUwSWl3aWFYTkRiRzl6WldRaUxDSjJZV3gxWlNJc0luQmhhWEpGYkdWdFpXNTBJaXdpYm1GdFpTSXNJbXRsZVVWc1pXMWxiblFpTENKMllXeDFaVVZzWlcxbGJuUWlMQ0p1ZFd4c1ZIbHdaU0lzSW1SbFptRjFiSFJ6SWl3aWIzWmxjbkpwWkdWeklpd2liV1Z5WjJWa0lpd2lWR1Z5YlV4dlp5SXNJbEJzWVhSbWIzSnRJaXdpYldsNFYybDBhQ0lzSWt4dlowNXZaR1ZOYVhocGJuTWlMQ0pYWldKT2IyUmxUV2w0YVc1eklpd2lURzluWjJWeUlpd2lURzluUTJ4aGMzTWlMQ0pqYjI1dVpXTjBJaXdpWTJoaGJtNWxiQ0lzSW14dlp5SXNJbTFsYzNOaFoyVWlMQ0pqYjI1emIyeGxJaXdpYzJOeWIyeHNRbTkwZEc5dElpd2ljSEp2WjNKbGMzTWlMQ0p3Y205alpYTnpUV1Z6YzJGblpTSXNJbTV2WkdVaUxDSm5aWFJGYkdWdFpXNTBjMEo1VkdGblRtRnRaU0lzSW1SdlkzVnRaVzUwUld3aUxDSmliMlI1SWl3aVpuSmhiV1ZGYkNJc0lteHZaMmRsY2tWc0lpd2ljMk55YjJ4c1NHVnBaMmgwSWl3aVkyeHBaVzUwU0dWcFoyaDBJaXdpYzJOeWIyeHNWRzl3SWl3aVRFbE9iMlJsY3lJc0ltTnNZWE56VEdsemRDSXNJbU52Ym5SaGFXNXpJaXdpWVdSa0lpd2lhbk52Yms1dlpHVWlMQ0prWVhSbElpd2lhVzV1WlhKSVZFMU1JaXdpYW05cGJpSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RVFVRXdReXhuUTBGQlowTTdRVUZETVVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJkMFFzYTBKQlFXdENPMEZCUXpGRk8wRkJRMEVzZVVSQlFXbEVMR05CUVdNN1FVRkRMMFE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGNVF5eHBRMEZCYVVNN1FVRkRNVVVzZDBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzBGQlEzSkpPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3pzN096czdPenM3T3p0QlEyeEdRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMSGRET3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTA1bExGRkJRVTFCTEU5QlFVNHNRMEZCWVR0QlFVTjRRa01zWlVGQlZ5eERRVUZEUXl4TlFVRk5MRWRCUVVNc1JVRkJVaXhGUVVGWE8wRkJRMnhDTEZkQlFVdEJMRTFCUVV3c1IwRkJZMEVzVFVGQlpEdEJRVU5JT3p0QlFVaDFRanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRRVFZDTzBGQlEwRTdRVUZEWlN4UlFVRk5ReXhSUVVGT0xFTkJRV003UVVGRGVrSkdMR1ZCUVZjc1IwRkJSU3hEUVVOYU96dEJRVU5FTEZkQlFVOUhMRmRCUVZBc1EwRkJiVUpETEVsQlFXNUNMRVZCUVhsQ1F5eGhRVUY2UWl4RlFVRjNRME1zWlVGQmVFTXNSVUZCZVVRN1FVRkRja1FzVlVGQlNVTXNjVUpCUVhGQ0xFZEJRVWM3UVVGRE1VSkRMRmxCUVVrc1JVRkJSVHRCUVVGRlF5eGhRVUZITEVWQlFVVXNTMEZCVUR0QlFVRmpReXhsUVVGTExFVkJRVVU3UVVGQmNrSXNVMEZFYjBJN1FVRkZNVUpETEhOQ1FVRmpMRVZCUVVVN1FVRkJSVVlzWVVGQlJ5eEZRVUZGTEV0QlFWQTdRVUZCWTBNc1pVRkJTeXhGUVVGRk8wRkJRWEpDTEZOQlJsVTdRVUZITVVKRkxHRkJRVXNzUlVGQlJUdEJRVUZGU0N4aFFVRkhMRVZCUVVVc1RVRkJVRHRCUVVGbFF5eGxRVUZMTEVWQlFVVTdRVUZCZEVJc1UwRkliVUk3UVVGSk1VSkhMR2xDUVVGVExFVkJRVVU3UVVGQlJVb3NZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNMRk5CU21VN1FVRkxNVUpKTEd0Q1FVRlZMRVZCUVVVN1FVRkRWa3dzWVVGQlJ5eEZRVUZGTEUxQlJFczdRVUZGVmtNc1pVRkJTeXhGUVVGRkxIZEdRVU5CTzBGQlNFY3NVMEZNWXp0QlFWVXhRa3NzZVVKQlFXbENMRVZCUVVVN1FVRkJSVTRzWVVGQlJ5eEZRVUZGTEV0QlFWQTdRVUZCWTBNc1pVRkJTeXhGUVVGRk8wRkJRWEpDTEZOQlZrODdRVUZYTVVKTkxHOUNRVUZaTEVWQlFVVTdRVUZCUlZBc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ0xGTkJXRms3UVVGWk1VSlBMRmRCUVVjc1JVRkJSVHRCUVVGRlVpeGhRVUZITEVWQlFVVXNUVUZCVUR0QlFVRmxReXhsUVVGTExFVkJRVVU3UVVGQmRFSXNVMEZhY1VJN1FVRmhNVUpSTEcxQ1FVRlhMRVZCUVVVN1FVRkJSVlFzWVVGQlJ5eEZRVUZGTEUxQlFWQTdRVUZCWlVNc1pVRkJTeXhGUVVGRk8wRkJRWFJDTEZOQlltRTdRVUZqTVVKVExHMUNRVUZYTEVWQlFVVTdRVUZCUlZZc1lVRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNaVUZCU3l4RlFVRkZPMEZCUVhSQ0xGTkJaR0U3UVVGbE1VSlZMRzFDUVVGWExFVkJRVVU3UVVGQlJWZ3NZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNMRk5CWm1FN1FVRm5RakZDVnl4dlFrRkJXU3hGUVVGRk8wRkJRVVZhTEdGQlFVY3NSVUZCUlN4TlFVRlFPMEZCUVdWRExHVkJRVXNzUlVGQlJUdEJRVUYwUWl4VFFXaENXVHRCUVdsQ01VSlpMR2xDUVVGVExFVkJRVVU3UVVGQlJXSXNZVUZCUnl4RlFVRkZMRTFCUVZBN1FVRkJaVU1zWlVGQlN5eEZRVUZGTzBGQlFYUkNPMEZCYWtKbExFOUJRVFZDTzBGQmJVSkJMRlZCUVVsaExGVkJRVlVzUjBGQlIwTXNTMEZCU3l4RFFVRkRReXhSUVVGUkxFTkJRVU53UWl4aFFVRkVMRU5CUVZRc1EwRkJUQ3hIUVVGcFEzRkNMRkZCUVdwRExFZEJRVFJEUkN4UlFVRlJMRU5CUVVOd1FpeGhRVUZFTEVOQlFYSkZPMEZCUTBFc1ZVRkJTWE5DTEZsQlFWa3NSMEZCUnl4UFFVRlBja0lzWlVGQlVDeExRVUV5UWl4UlFVRXpRaXhIUVVORmMwSXNhVUpCUVdsQ0xFTkJRVU55UWl4eFFrRkJSQ3hGUVVGM1FrUXNaVUZCZUVJc1EwRkVia0lzUjBGRlJVTXNjVUpCUm5KQ096dEJRVWxCTEZWQlFVa3NUMEZCVDNOQ0xFMUJRVTBzUTBGQlEwTXNUVUZCWkN4SlFVRjNRaXhWUVVFMVFpeEZRVUYzUXp0QlFVTjBRMFFzWTBGQlRTeERRVUZEUXl4TlFVRlFMRWRCUVdkQ0xGVkJRVk5ETEUxQlFWUXNSVUZCYVVJN1FVRkRMMElzWTBGQlNVRXNUVUZCVFN4SlFVRkpMRWxCUVdRc1JVRkJiMEk3UVVGRGJFSXNhMEpCUVUwc1NVRkJTVU1zVTBGQlNpeERRVUZqTERSRFFVRmtMRU5CUVU0N1FVRkRSRHM3UVVGRlJDeGpRVUZKUXl4RlFVRkZMRWRCUVVkS0xFMUJRVTBzUTBGQlEwVXNUVUZCUkN4RFFVRm1PenRCUVVWQkxHVkJRVXNzU1VGQlNVY3NTMEZCU3l4SFFVRkhMRU5CUVdwQ0xFVkJRVzlDUVN4TFFVRkxMRWRCUVVkRExGTkJRVk1zUTBGQlEwTXNUVUZCZEVNc1JVRkJPRU5HTEV0QlFVc3NSVUZCYmtRc1JVRkJkVVE3UVVGRGNrUXNaMEpCUVVsSExGVkJRVlVzUjBGQlIwWXNVMEZCVXl4RFFVRkRSQ3hMUVVGRUxFTkJRVEZDT3p0QlFVVkJMR2RDUVVGSlJ5eFZRVUZWTEVsQlFVa3NTVUZCYkVJc1JVRkJkMEk3UVVGRGRFSXNiVUpCUVVzc1NVRkJTVU1zVDBGQlZDeEpRVUZ2UWtRc1ZVRkJjRUlzUlVGQlowTTdRVUZET1VJc2IwSkJRVWxTTEUxQlFVMHNRMEZCUTFVc1UwRkJVQ3hEUVVGcFFrTXNZMEZCYWtJc1EwRkJaME5ETEVsQlFXaERMRU5CUVhGRFNpeFZRVUZ5UXl4RlFVRnBSRU1zVDBGQmFrUXNRMEZCU2l4RlFVRXJSRHRCUVVNM1JFd3NiMEpCUVVVc1EwRkJRMHNzVDBGQlJDeERRVUZHTEVkQlFXTkVMRlZCUVZVc1EwRkJRME1zVDBGQlJDeERRVUY0UWp0QlFVTkVPMEZCUTBZN1FVRkRSanRCUVVOR096dEJRVU5FTEdsQ1FVRlBUQ3hGUVVGUU8wRkJRMFFzVTBGdVFrUTdRVUZ2UWtRN08wRkJSVVFzWlVGQlUxTXNUVUZCVkN4SFFVRnJRanRCUVVOb1FpeFpRVUZKUXl4UFFVRlBMRWRCUVVkRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXhDTEZsQlFWa3NRMEZCUTI1Q0xFbEJRV0lzUTBGQmEwSkRMRWRCUVhwRExFTkJRV1E3UVVGRFFXdERMR1ZCUVU4c1EwRkJRMnBETEV0QlFWSXNRMEZCWTI5RExFOUJRV1FzUjBGQmQwSnVRaXhaUVVGWkxFTkJRVU51UWl4SlFVRmlMRU5CUVd0Q1JTeExRVUV4UXpzN1FVRkZRU3haUVVGSlRpeEpRVUZKTEV0QlFVc3NTVUZCVkN4SlFVRnBRa0VzU1VGQlNTeExRVUZMTWtNc1UwRkJPVUlzUlVGQmVVTTdRVUZEZGtNc1kwRkJTVU1zVjBGQlZ5eEhRVUZIUXl4UlFVRlJMRU5CUVVNc1NVRkJSQ3hEUVVFeFFqdEJRVU5CVGl4cFFrRkJUeXhEUVVGRFR5eFhRVUZTTEVOQlFXOUNSaXhYUVVGd1FqdEJRVU5FTEZOQlNFUXNUVUZIVHl4SlFVRkpOVU1zU1VGQlNTeFpRVUZaSzBNc1NVRkJjRUlzUlVGQk1FSTdRVUZETDBJc1kwRkJTVU1zVjBGQlZ5eEhRVUZIU0N4UlFVRlJMRU5CUVVNM1F5eEpRVUZKTEVOQlFVTnBSQ3hYUVVGTUxFVkJRVVFzUTBGQk1VSTdRVUZEUVZZc2FVSkJRVThzUTBGQlEwOHNWMEZCVWl4RFFVRnZRa1VzVjBGQmNFSTdRVUZEUkN4VFFVaE5MRTFCUjBFc1NVRkJTU3hQUVVGUGFFUXNTVUZCVUN4TFFVRm5RaXhSUVVGd1FpeEZRVUU0UWp0QlFVTnVReXhqUVVGSmEwUXNiMEpCUVc5Q0xFZEJRVWRNTEZGQlFWRXNRMEZCUXpkRExFbEJRVVFzUTBGQmJrTTdRVUZEUVhWRExHbENRVUZQTEVOQlFVTlBMRmRCUVZJc1EwRkJiMEpKTEc5Q1FVRndRanRCUVVORUxGTkJTRTBzVFVGSFFUdEJRVU5NTEdOQlFVa3hReXhMUVVGTExFZEJRVWN5UXl4TFFVRkxMRU5CUVVORExFOUJRVTRzUTBGQlkzQkVMRWxCUVdRc1NVRkJjMElzVjBGQlYwRXNTVUZCU1N4RFFVRkRaME1zVFVGQmFFSXNSMEZCZVVJc1IwRkJMME1zUjBGQmNVUXNVVUZCYWtVN1FVRkRRU3hqUVVGSmNVSXNhVUpCUVdsQ0xFZEJRVWRzUXl4VlFVRlZMRWRCUVVjc1EwRkJja003UVVGRFFXOUNMR2xDUVVGUExFTkJRVU5QTEZkQlFWSXNRMEZCYjBKUkxGRkJRVkVzUTBGQlF6bERMRXRCUVVRc1JVRkJVU3hKUVVGU0xFVkJRV00yUXl4cFFrRkJaQ3hEUVVFMVFqdEJRVU5CWkN4cFFrRkJUeXhEUVVGRFR5eFhRVUZTTEVOQlFXOUNVeXh4UWtGQmNVSXNRMEZCUTNaRUxFbEJRVVFzUlVGQlR5eERRVUZRTEVOQlFYcERPMEZCUTBRN08wRkJSVVFzWlVGQlQzVkRMRTlCUVZBN1FVRkRSRHM3UVVGRlJDeGxRVUZUWjBJc2NVSkJRVlFzUTBGQkswSjJSQ3hKUVVFdlFpeEZRVUZ4UXpoQ0xFdEJRWEpETEVWQlFUUkRPMEZCUXpGRExGbEJRVWwxUWl4cFFrRkJhVUlzUjBGQlIzWkNMRXRCUVVzc1IwRkJSMWdzVlVGQmFFTTdRVUZEUVN4WlFVRkpjVU1zYVVKQlFXbENMRWRCUVVjeFFpeExRVUZMTEVkQlFVY3NRMEZCVWl4SFFVRlpXQ3hWUVVGd1F6dEJRVU5CTEZsQlFVbHpReXhUUVVGVExFZEJRVWRETEc5Q1FVRnZRaXhEUVVGRFRDeHBRa0ZCUkN4RFFVRndRenM3UVVGRFFTeGhRVUZMTEVsQlFVbDRReXhIUVVGVUxFbEJRV2RDWWl4SlFVRm9RaXhGUVVGelFqdEJRVU53UWl4alFVRkpiVVFzUzBGQlN5eERRVUZEUXl4UFFVRk9MRU5CUVdOd1JDeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJiRUlzUTBGQlNpeEZRVUU0UWp0QlFVTTFRalJETEhGQ1FVRlRMRU5CUVVOWUxGZEJRVllzUTBGQmMwSlJMRkZCUVZFc1EwRkJReXhYUVVGWGRFUXNTVUZCU1N4RFFVRkRZU3hIUVVGRUxFTkJRVW9zUTBGQlZXMUNMRTFCUVhKQ0xFZEJRVGhDTEVkQlFTOUNMRVZCUVc5RGJrSXNSMEZCY0VNc1JVRkJlVU15UXl4cFFrRkJla01zUTBGQk9VSTdRVUZEUVVNc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbE1zY1VKQlFYRkNMRU5CUVVOMlJDeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJUQ3hGUVVGWmFVSXNTMEZCU3l4SFFVRkhMRU5CUVhCQ0xFTkJRVE5ETzBGQlEwUXNWMEZJUkN4TlFVZFBMRWxCUVVrNVFpeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJTaXhMUVVGakxFbEJRV1FzU1VGQmMwSmlMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZLTEV0QlFXTTRRaXhUUVVGNFF5eEZRVUZ0UkR0QlFVTjRSR01zY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkRPVU1zUjBGQlJDeEZRVUZOTEVsQlFVNHNRMEZCY2tNN1FVRkRSQ3hYUVVaTkxFMUJSVUVzU1VGQlNXSXNTVUZCU1N4RFFVRkRZU3hIUVVGRUxFTkJRVW9zV1VGQmNVSnJReXhKUVVGNlFpeEZRVUVyUWp0QlFVTndRMVVzY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkRPVU1zUjBGQlJDeEZRVUZOWWl4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlNpeERRVUZWYjBNc1YwRkJWaXhGUVVGT0xFTkJRWEpETzBGQlEwUXNWMEZHVFN4TlFVVkJMRWxCUVVrc1QwRkJUMnBFTEVsQlFVa3NRMEZCUTJFc1IwRkJSQ3hEUVVGWUxFdEJRWEZDTEZGQlFYcENMRVZCUVcxRE8wRkJRM2hETkVNc2NVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbEVzVVVGQlVTeERRVUZETEZGQlFVUXNSVUZCVjNwRExFZEJRVmdzUlVGQlowSXlReXhwUWtGQmFFSXNRMEZCT1VJN1FVRkRRVU1zY1VKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFsTXNjVUpCUVhGQ0xFTkJRVU4yUkN4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQlRDeEZRVUZaYVVJc1MwRkJTeXhIUVVGSExFTkJRWEJDTEVOQlFUTkRPMEZCUTBRc1YwRklUU3hOUVVkQk8wRkJRMHd5UWl4eFFrRkJVeXhEUVVGRFdDeFhRVUZXTEVOQlFYTkNZU3hsUVVGbExFTkJRVU01UXl4SFFVRkVMRVZCUVUxaUxFbEJRVWtzUTBGQlEyRXNSMEZCUkN4RFFVRldMRU5CUVhKRE8wRkJRMFE3UVVGRFJqczdRVUZEUkN4WlFVRkpMRTlCUVU5WkxFMUJRVTBzUTBGQlEyMURMSEZDUVVGa0xFdEJRWGRETEZWQlFUVkRMRVZCUVhkRU8wRkJRM1JFYmtNc1owSkJRVTBzUTBGQlEyMURMSEZDUVVGUUxFTkJRVFpDTlVRc1NVRkJOMElzUlVGQmJVTTJSQ3hQUVVGdVF5eERRVUV5UXl4VlFVRlRReXhOUVVGVUxFVkJRV2xDTzBGQlF6RkVUQ3h4UWtGQlV5eERRVUZEV0N4WFFVRldMRU5CUVhOQ1lTeGxRVUZsTEVOQlFVTkhMRTFCUVUwc1EwRkJRME1zVVVGQlVDeEZRVUZFTEVWQlFXOUNMMFFzU1VGQlNTeERRVUZET0VRc1RVRkJSQ3hEUVVGNFFpeERRVUZ5UXp0QlFVTkVMRmRCUmtRN1FVRkhSRHM3UVVGRlJDeGxRVUZQVEN4VFFVRlFPMEZCUTBRN08wRkJSVVFzWlVGQlUwZ3NVVUZCVkN4RFFVRnJRamRETEZOQlFXeENMRVZCUVRaQ2RVUXNWMEZCTjBJc1JVRkJNRU5ETEdGQlFURkRMRVZCUVhsRU8wRkJRM1pFTEZsQlFVbERMR1ZCUVdVc1IwRkJSMFFzWVVGQmRFSTdRVUZEUVN4WlFVRkpSU3huUWtGQlowSXNSMEZCUnpOQ0xGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXhDTEZsQlFWa3NRMEZCUTJoQ0xHTkJRV0lzUTBGQk5FSkdMRWRCUVc1RUxFTkJRWFpDTzBGQlEwRTRSQ3gzUWtGQlowSXNRMEZCUXpkRUxFdEJRV3BDTEVOQlFYVkNiME1zVDBGQmRrSXNSMEZCYVVOdVFpeFpRVUZaTEVOQlFVTm9RaXhqUVVGaUxFTkJRVFJDUkN4TFFVRTNSRHRCUVVOQk5rUXNkMEpCUVdkQ0xFTkJRVU5ETEZsQlFXcENMRU5CUVRoQ0xGZEJRVGxDTEVWQlFUSkRMR2RDUVVFelF6dEJRVU5CTEZsQlFVbERMRmRCUVZjc1IwRkJSemRDTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFteENMRmxCUVZrc1EwRkJRMlFzVTBGQllpeERRVUYxUWtvc1IwRkJPVU1zUTBGQmJFSTdRVUZEUVN4WlFVRkphVVVzV1VGQldTeEhRVUZIT1VJc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNiRUlzV1VGQldTeERRVUZEWml4TFFVRmlMRU5CUVcxQ1NDeEhRVUV4UXl4RFFVRnVRanRCUVVOQmFVVXNiMEpCUVZrc1EwRkJRMmhGTEV0QlFXSXNRMEZCYlVKdlF5eFBRVUZ1UWl4SFFVRTJRbTVDTEZsQlFWa3NRMEZCUTJZc1MwRkJZaXhEUVVGdFFrWXNTMEZCYUVRN1FVRkRRU3RFTEcxQ1FVRlhMRU5CUVVNdlJDeExRVUZhTEVOQlFXdENiME1zVDBGQmJFSXNSMEZCTkVKdVFpeFpRVUZaTEVOQlFVTmtMRk5CUVdJc1EwRkJkVUpJTEV0QlFXNUVPMEZCUlVGblJTeHZRa0ZCV1N4RFFVRkRlRUlzVjBGQllpeERRVUY1UW5sQ0xHRkJRV0VzUTBGQlEwNHNZVUZCUkN4RFFVRjBRenM3UVVGRFFTeFpRVUZKUkN4WFFVRktMRVZCUVdsQ08wRkJRMlpMTEhGQ1FVRlhMRU5CUVVOMlFpeFhRVUZhTEVOQlFYZENNRUlzVFVGQlRTeERRVUZEVWl4WFFVRkVMRU5CUVRsQ08wRkJRMFE3TzBGQlEwUkxMRzFDUVVGWExFTkJRVU4yUWl4WFFVRmFMRU5CUVhkQ1RpeFJRVUZSTEVOQlFVTnBReXhqUVVGVUxFTkJRWGRDYUVVc1UwRkJlRUlzUTBGQmVFSTdRVUZEUVRaRUxHOUNRVUZaTEVOQlFVTjRRaXhYUVVGaUxFTkJRWGxDZFVJc1YwRkJla0k3TzBGQlJVRkRMRzlDUVVGWkxFTkJRVU5KTEU5QlFXSXNSMEZCZFVJc1dVRkJXVHRCUVVOcVF5eGpRVUZKYUVVc1ZVRkJWU3hIUVVGSE5FUXNXVUZCV1N4RFFVRkRTeXhWUVVFNVFqdEJRVU5CTEdOQlFVbERMR05CUVdNc1IwRkJSMDRzV1VGQldTeERRVUZEVHl4VlFVRmlMRU5CUVhkQ1F5eFhRVUUzUXp0QlFVTkJSaXgzUWtGQll5eERRVUZEZEVVc1MwRkJaaXhEUVVGeFFubEZMRTlCUVhKQ0xFZEJRU3RDWWl4bFFVRmxMRWRCUVVjc1QwRkJTQ3hIUVVGaExFMUJRVE5FTzBGQlEwRjRSQ3h2UWtGQlZTeERRVUZEU2l4TFFVRllMRU5CUVdsQ01FVXNVMEZCYWtJc1IwRkJOa0prTEdWQlFXVXNSMEZCUnl4bFFVRklMRWRCUVhGQ0xHTkJRV3BGTzBGQlEwRkJMSGxDUVVGbExFZEJRVWNzUTBGQlEwRXNaVUZCYmtJN1FVRkRSQ3hUUVU1RU96dEJRVkZCUXl4M1FrRkJaMElzUTBGQlEzSkNMRmRCUVdwQ0xFTkJRVFpDZDBJc1dVRkJOMEk3UVVGRFFTeGxRVUZQU0N4blFrRkJVRHRCUVVORU96dEJRVVZFTEdWQlFWTkpMR0ZCUVZRc1EwRkJkVUpPTEdGQlFYWkNMRVZCUVhORE8wRkJRM0JETEZsQlFVbG5RaXhoUVVGaExFZEJRVWQ2UXl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnNRaXhaUVVGWkxFTkJRVU5pTEZWQlFXSXNRMEZCZDBKTUxFZEJRUzlETEVOQlFYQkNPMEZCUTBFMFJTeHhRa0ZCWVN4RFFVRkRNMFVzUzBGQlpDeERRVUZ2UW05RExFOUJRWEJDTEVkQlFUaENia0lzV1VGQldTeERRVUZEWWl4VlFVRmlMRU5CUVhkQ1NpeExRVUYwUkR0QlFVTkJNa1VzY1VKQlFXRXNRMEZCUXpORkxFdEJRV1FzUTBGQmIwSXdSU3hUUVVGd1FpeEhRVUZuUTJZc1lVRkJZU3hIUVVGSExHTkJRVWdzUjBGQmIwSXNaVUZCYWtVN1FVRkRRU3hsUVVGUFowSXNZVUZCVUR0QlFVTkVPenRCUVVWRUxHVkJRVk4yUWl4dlFrRkJWQ3hEUVVFNFFuZENMRkZCUVRsQ0xFVkJRWGRETzBGQlEzUkRMRmxCUVVsbUxHZENRVUZuUWl4SFFVRkhNMElzVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2JFSXNXVUZCV1N4RFFVRkRXaXhwUWtGQllpeERRVUVyUWs0c1IwRkJkRVFzUTBGQmRrSTdRVUZEUVRoRUxIZENRVUZuUWl4RFFVRkRReXhaUVVGcVFpeERRVUU0UWl4WFFVRTVRaXhGUVVFeVF5eHRRa0ZCTTBNN1FVRkRRVVFzZDBKQlFXZENMRU5CUVVNM1JDeExRVUZxUWl4RFFVRjFRbTlETEU5QlFYWkNMRWRCUVdsRGJrSXNXVUZCV1N4RFFVRkRXaXhwUWtGQllpeERRVUVyUWt3c1MwRkJhRVU3UVVGRFFUWkVMSGRDUVVGblFpeERRVUZETjBRc1MwRkJha0lzUTBGQmRVSjVSU3hQUVVGMlFpeEhRVUZyUTBjc1VVRkJVU3hIUVVGSExFMUJRVWdzUjBGQldTeFBRVUYwUkR0QlFVTkJMR1ZCUVU5bUxHZENRVUZRTzBGQlEwUTdPMEZCUlVRc1pVRkJVMUlzWlVGQlZDeERRVUY1UWpsRExFZEJRWHBDTEVWQlFUaENjMFVzUzBGQk9VSXNSVUZCY1VNN1FVRkRia01zV1VGQlNVTXNWMEZCVnl4SFFVRkhOVU1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2JFSXNXVUZCV1N4RFFVRkRXQ3haUVVGaUxFTkJRVEJDVUN4SFFVRnFSQ3hEUVVGc1FqdEJRVU5CSzBVc2JVSkJRVmNzUTBGQlF6bEZMRXRCUVZvc1EwRkJhMEp2UXl4UFFVRnNRaXhIUVVFMFFtNUNMRmxCUVZrc1EwRkJRMWdzV1VGQllpeERRVUV3UWs0c1MwRkJkRVE3UVVGRFFUaEZMRzFDUVVGWExFTkJRVU4wUXl4WFFVRmFMRU5CUVhkQ01FSXNUVUZCVFN4RFFVRkRNMFFzUjBGQlJDeERRVUU1UWp0QlFVTkJkVVVzYlVKQlFWY3NRMEZCUTNSRExGZEJRVm9zUTBGQmQwSkVMRkZCUVZFc1EwRkJRM05ETEV0QlFVUXNRMEZCYUVNN1FVRkRRU3hsUVVGUFF5eFhRVUZRTzBGQlEwUTdPMEZCUlVRc1pVRkJVMW9zVFVGQlZDeERRVUZuUW1Fc1NVRkJhRUlzUlVGQmMwSTdRVUZEY0VJc1dVRkJTVU1zVlVGQlZTeEhRVUZIT1VNc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNiRUlzV1VGQldTeERRVUZEVml4SFFVRmlMRU5CUVdsQ1VpeEhRVUY0UXl4RFFVRnFRanRCUVVOQmFVWXNhMEpCUVZVc1EwRkJRMmhHTEV0QlFWZ3NRMEZCYVVKdlF5eFBRVUZxUWl4SFFVRXlRbTVDTEZsQlFWa3NRMEZCUTFZc1IwRkJZaXhEUVVGcFFsQXNTMEZCTlVNN1FVRkRRV2RHTEd0Q1FVRlZMRU5CUVVONFF5eFhRVUZZTEVOQlFYVkNUaXhSUVVGUkxFTkJRVU5wUXl4alFVRlVMRU5CUVhkQ1dTeEpRVUZKTEVkQlFVY3NTVUZCTDBJc1EwRkJka0k3UVVGRFFTeGxRVUZQUXl4VlFVRlFPMEZCUTBRN08wRkJSVVFzWlVGQlUzcERMRkZCUVZRc1EwRkJhMEp6UXl4TFFVRnNRaXhGUVVGNVFqdEJRVU4yUWl4WlFVRkpTU3haUVVGS08wRkJRMEVzV1VGQlNVTXNVVUZCVVN4SFFVRkhMRkZCUVdZN08wRkJRMEVzWjBKQlFWRXNUMEZCVDB3c1MwRkJaanRCUVVORkxHVkJRVXNzVVVGQlREdEJRVU5GU1N4M1FrRkJXU3hIUVVGSEwwTXNVVUZCVVN4RFFVRkRReXhoUVVGVUxFTkJRWFZDYkVJc1dVRkJXU3hEUVVGRFZDeFhRVUZpTEVOQlFYbENWQ3hIUVVGb1JDeERRVUZtTzBGQlEwRnJSaXgzUWtGQldTeERRVUZEYWtZc1MwRkJZaXhEUVVGdFFtOURMRTlCUVc1Q0xFZEJRVFpDYmtJc1dVRkJXU3hEUVVGRFZDeFhRVUZpTEVOQlFYbENVaXhMUVVGMFJEdEJRVU5CYVVZc2QwSkJRVmtzUTBGQlEzcERMRmRCUVdJc1EwRkJlVUpPTEZGQlFWRXNRMEZCUTJsRExHTkJRVlFzUTBGQmQwSlZMRXRCUVVzc1EwRkJRM0JDTEZGQlFVNHNSVUZCZUVJc1EwRkJla0k3UVVGRFFUczdRVUZEUml4bFFVRkxMRkZCUVV3N1FVRkRSWGRDTEhkQ1FVRlpMRWRCUVVjdlF5eFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUpzUWl4WlFVRlpMRU5CUVVOU0xGZEJRV0lzUTBGQmVVSldMRWRCUVdoRUxFTkJRV1k3UVVGRFFXdEdMSGRDUVVGWkxFTkJRVU5xUml4TFFVRmlMRU5CUVcxQ2IwTXNUMEZCYmtJc1IwRkJOa0p1UWl4WlFVRlpMRU5CUVVOU0xGZEJRV0lzUTBGQmVVSlVMRXRCUVhSRU8wRkJRMEZwUml4M1FrRkJXU3hEUVVGRGVrTXNWMEZCWWl4RFFVRjVRazRzVVVGQlVTeERRVUZEYVVNc1kwRkJWQ3hEUVVGM1FpeE5RVUZOVlN4TFFVRk9MRWRCUVdNc1IwRkJkRU1zUTBGQmVrSTdRVUZEUVRzN1FVRkRSaXhsUVVGTExGRkJRVXc3UVVGRFJVa3NkMEpCUVZrc1IwRkJSeTlETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFteENMRmxCUVZrc1EwRkJRMUFzVjBGQllpeERRVUY1UWxnc1IwRkJhRVFzUTBGQlpqdEJRVU5CYTBZc2QwSkJRVmtzUTBGQlEycEdMRXRCUVdJc1EwRkJiVUp2UXl4UFFVRnVRaXhIUVVFMlFtNUNMRmxCUVZrc1EwRkJRMUFzVjBGQllpeERRVUY1UWxZc1MwRkJkRVE3UVVGRFFXbEdMSGRDUVVGWkxFTkJRVU42UXl4WFFVRmlMRU5CUVhsQ1RpeFJRVUZSTEVOQlFVTnBReXhqUVVGVUxFTkJRWGRDVlN4TFFVRjRRaXhEUVVGNlFqdEJRVU5CT3p0QlFVTkdMR1ZCUVVzc1UwRkJURHRCUVVORlNTeDNRa0ZCV1N4SFFVRkhMME1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2JFSXNXVUZCV1N4RFFVRkRUaXhaUVVGaUxFTkJRVEJDV2l4SFFVRnFSQ3hEUVVGbU8wRkJRMEZyUml4M1FrRkJXU3hEUVVGRGFrWXNTMEZCWWl4RFFVRnRRbTlETEU5QlFXNUNMRWRCUVRaQ2JrSXNXVUZCV1N4RFFVRkRUaXhaUVVGaUxFTkJRVEJDV0N4TFFVRjJSRHRCUVVOQmFVWXNkMEpCUVZrc1EwRkJRM3BETEZkQlFXSXNRMEZCZVVKT0xGRkJRVkVzUTBGQlEybERMR05CUVZRc1EwRkJkMEpWTEV0QlFYaENMRU5CUVhwQ08wRkJRMEU3TzBGQlEwWXNaVUZCUzBzc1VVRkJURHRCUVVORlJDeDNRa0ZCV1N4SFFVRkhMME1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2JFSXNXVUZCV1N4RFFVRkRUQ3hUUVVGaUxFTkJRWFZDWWl4SFFVRTVReXhEUVVGbU8wRkJRMEZyUml4M1FrRkJXU3hEUVVGRGFrWXNTMEZCWWl4RFFVRnRRbTlETEU5QlFXNUNMRWRCUVRaQ2JrSXNXVUZCV1N4RFFVRkRUQ3hUUVVGaUxFTkJRWFZDV2l4TFFVRndSRHRCUVVOQmFVWXNkMEpCUVZrc1EwRkJRM3BETEZkQlFXSXNRMEZCZVVKT0xGRkJRVkVzUTBGQlEybERMR05CUVZRc1EwRkJkMEpWTEV0QlFYaENMRU5CUVhwQ08wRkJRMEU3UVVGNlFrbzdPMEZCTWtKQkxHVkJRVTlKTEZsQlFWQTdRVUZEUkRzN1FVRkZSQ3hsUVVGVEwwUXNhVUpCUVZRc1EwRkJNa0pwUlN4UlFVRXpRaXhGUVVGeFEwTXNVMEZCY2tNc1JVRkJaMFE3UVVGRE9VTXNXVUZCU1VNc1RVRkJUU3hIUVVGSExFVkJRV0k3TzBGQlEwRXNZVUZCU3l4SlFVRkpPVVVzUjBGQlZDeEpRVUZuUWpSRkxGRkJRV2hDTEVWQlFUQkNPMEZCUTNoQ1JTeG5Ra0ZCVFN4RFFVRkRPVVVzUjBGQlJDeERRVUZPTEVkQlFXTlpMRTFCUVUwc1EwRkJRME1zVFVGQlVDeERRVUZqTEVWQlFXUXNSVUZCYTBJclJDeFJRVUZSTEVOQlFVTTFSU3hIUVVGRUxFTkJRVEZDTEVWQlFXbEROa1VzVTBGQlV5eERRVUZETjBVc1IwRkJSQ3hEUVVFeFF5eERRVUZrTzBGQlEwUTdPMEZCUTBRc1pVRkJUemhGTEUxQlFWQTdRVUZEUkRzN1FVRkZSQ3hoUVVGUGNrUXNUVUZCVFN4RlFVRmlPMEZCUTBnN08wRkJNMDEzUWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTBVM1FpeFJRVUZOYzBRc1QwRkJUaXhUUVVGelFrTXNiMEpCUVZORExFOUJRVlFzUTBGQmFVSnVSeXhuUWtGQmFrSXNSVUZCTUVJN1FVRkJReXhaUVVGUExFTkJRVU52Unl4elFrRkJSQ3hEUVVGU08wRkJRWGRDTEZkQlFVMHNRMEZCUTBNc2RVSkJRVVE3UVVGQk9VSXNSMEZCTVVJc1EwRkJkRUlzUTBGQkswWTdRVUZETTBad1J5eGxRVUZYTEVOQlFVTkRMRTFCUVVRc1JVRkJVVHRCUVVObUxGbEJRVTFCTEUxQlFVNDdRVUZEU0RzN1FVRklNRVk3TzBGQlN5OUdMRkZCUVUxdlJ5eE5RVUZOTEVkQlFVY3NTVUZCU1V3c1QwRkJTaXhGUVVGbU8ybENRVU5sU3l4Tk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkRWbVlzVVVGQlRVWXNZVUZCWVN4SFFVRkpSeXhSUVVGRUxFbEJRV0VzWTBGQlkwRXNVVUZCWkN4RFFVRnpRanRCUVVOeVJFTXNWMEZCVHl4RFFVRkRReXhQUVVGRUxFVkJRVk1zUTBGRFdqdEJRVU5JT3p0QlFVTkVReXhQUVVGSExFTkJRVU5ETEU5QlFVUXNSVUZCVXp0QlFVTlNReXhoUVVGUExFTkJRVU5HTEVkQlFWSXNRMEZCV1VNc1QwRkJXanRCUVVOSU96dEJRVU5FUlN4blFrRkJXU3hIUVVGRkxFTkJRMVk3UVVGRFNEczdRVUZEUkVNc1dVRkJVU3hEUVVGRFF5eGpRVUZFTEVWQlFXZENPMEZCUTNCQ0xGVkJRVWxETEVsQlFVa3NSMEZCUnl4TFFVRkxReXh2UWtGQlRDeERRVUV3UWl4M1FrRkJNVUlzUTBGQldEdEJRVU5CVEN4aFFVRlBMRU5CUVVOR0xFZEJRVklzUTBGQldVMHNTVUZCV2pzN1FVRkRRU3hWUVVGSExFTkJRVU5CTEVsQlFVb3NSVUZCVXl4RFFVRkRPMEZCUTFRN1FVRkRTanM3UVVGbWIwUXNSMEZCZWtRN08ybENRV3RDWlZvc1lUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTJwQ1ppeFJRVUZOUXl4aFFVRmhMRWRCUVVsRkxGRkJRVVFzU1VGQllTeGpRVUZqUVN4UlFVRmtMRU5CUVhOQ08wRkJRM0pFUXl4WFFVRlBMRU5CUVVOVkxGVkJRVlVzUjBGQlF5eEpRVUZhTEVWQlFXbENPMEZCUTNCQ1FTeG5Ra0ZCVlN4SFFVRkhRU3hWUVVGVkxFbEJRVVZ5UlN4UlFVRlJMRU5CUVVOelJTeEpRVUZzUXp0QlFVTkJMRlZCUVVsSUxFbEJRVWtzUjBGQlIyNUZMRkZCUVZFc1EwRkJRME1zWVVGQlZDeERRVUYxUWl4SlFVRjJRaXhEUVVGWU8wRkJRMEZyUlN4VlFVRkpMRU5CUVVOeVJ5eExRVUZNTEVOQlFWZHZReXhQUVVGWUxFZEJRWEZDTEhkQ1FVRnlRanRCUVVOQmJVVXNaMEpCUVZVc1EwRkJReTlFTEZkQlFWZ3NRMEZCZFVJMlJDeEpRVUYyUWp0QlFVTkJMRmRCUVV0SkxFOUJRVXdzUjBGQlpVWXNWVUZCWmp0QlFVTkJMRmRCUVV0SExGRkJRVXdzUjBGQlowSklMRlZCUVZVc1EwRkJRMFFzYjBKQlFWZ3NRMEZCWjBNc1NVRkJhRU1zUlVGQmMwTXNRMEZCZEVNc1EwRkJhRUk3UVVGRFNEczdRVUZEUkVvc1owSkJRVmtzUTBGQlEycEZMRTlCUVU4c1IwRkJReXhKUVVGVUxFVkJRV003UVVGRGRFSkJMR0ZCUVU4c1IwRkJSMEVzVDBGQlR5eEpRVUZKTEV0QlFVdDNSU3hQUVVFeFFqdEJRVU5CVWl4aFFVRlBMRU5CUVVOR0xFZEJRVklzUTBGQldTeHJRa0ZCYTBJNVJDeFBRVUZQTEVOQlFVTXdSU3haUVVFeFFpeEhRVUY1UXpGRkxFOUJRVThzUTBGQlF6SkZMRmxCUVRkRU8wRkJRMEV6UlN4aFFVRlBMRU5CUVVNMFJTeFRRVUZTTEVkQlFXOUNOVVVzVDBGQlR5eERRVUZETUVVc1dVRkJVaXhIUVVGMVFqRkZMRTlCUVU4c1EwRkJRekpGTEZsQlFXNUVPMEZCUTBnN08wRkJRMFJVTEZsQlFWRXNRMEZCUTBNc1kwRkJSQ3hGUVVGblFqdEJRVU53UWp0QlFVTkJMRlZCUVVsVkxFOUJRVThzUjBGQlJ5eExRVUZMU2l4UlFVRk1MRU5CUVdOS0xHOUNRVUZrTEVOQlFXMURMRWxCUVc1RExFTkJRV1E3UVVGRFFTeFZRVUZKUkN4SlFVRkpMRWRCUVVkVExFOUJRVThzUTBGQlEwRXNUMEZCVHl4RFFVRkRjRVlzVFVGQlVpeEhRVUZsTEVOQlFXaENMRU5CUVd4Q096dEJRVU5CTEZWQlFVY3NRMEZCUXpKRkxFbEJRVVFzU1VGQlUwRXNTVUZCU1N4RFFVRkRWU3hUUVVGTUxFTkJRV1ZETEZGQlFXWXNRMEZCZDBJc2FVSkJRWGhDTEVOQlFWb3NSVUZCZFVRN1FVRkJRenRCUVVOd1JGZ3NXVUZCU1N4SFFVRkhia1VzVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ0xFbEJRWFpDTEVOQlFWQTdRVUZEUVd0RkxGbEJRVWtzUTBGQlExVXNVMEZCVEN4RFFVRmxSU3hIUVVGbUxFTkJRVzFDTEdsQ1FVRnVRanRCUVVOQkxHRkJRVXRRTEZGQlFVd3NRMEZCWTJ4RkxGZEJRV1FzUTBGQk1FSTJSQ3hKUVVFeFFqdEJRVU5JT3p0QlFVTkVMRlZCUVVsaExGRkJRVkVzUjBGQlJ6RklMRzlDUVVGVFF5eFhRVUZVTEVOQlFYRkNNa2NzWTBGQmNrSXNRMEZCWmpzN1FVRkRRU3hWUVVGSlpTeEpRVUZKTEVkQlFVY3NTVUZCU1RGRkxFbEJRVW9zUlVGQldEdEJRVU5CTkVRc1ZVRkJTU3hEUVVGRFpTeFRRVUZNTEVkQlFXdENMR2RFUVVFclEwUXNTVUZCU3l4TlFVRjBSVHRCUVVOQlpDeFZRVUZKTEVOQlFVTTNSQ3hYUVVGTUxFTkJRV2xDTUVVc1VVRkJha0k3UVVGRFFTeFhRVUZMYUVJc1dVRkJURHRCUVVOSU96dEJRVU5FU0N4UFFVRkhMRU5CUVVORExFOUJRVVFzUlVGQlV6dEJRVU5TTEZWQlFVY3NRMEZCUXl4TFFVRkxWU3hSUVVGT0xFbEJRV3RDTEVOQlFVTXNTMEZCUzBFc1VVRkJUQ3hEUVVGamJFVXNWMEZCY0VNc1JVRkJaMFE3UVVGRE5VTXNZVUZCUzNGRUxFOUJRVXc3UVVGRFNEczdRVUZEUkN4VlFVRkpVU3hKUVVGSkxFZEJRVWR1UlN4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSXNTVUZCZGtJc1EwRkJXRHRCUVVOQmEwVXNWVUZCU1N4RFFVRkRja2NzUzBGQlRDeERRVUZYYjBNc1QwRkJXQ3hIUVVGeFFpeHRRMEZCY2tJN08wRkJRMEVzVlVGQlNUaEZMRkZCUVZFc1IwRkJSekZJTEc5Q1FVRlRReXhYUVVGVUxFTkJRWEZDZFVjc1QwRkJja0lzUTBGQlpqczdRVUZEUVN4VlFVRkpiVUlzU1VGQlNTeEhRVUZITEVsQlFVa3hSU3hKUVVGS0xFVkJRVmc3UVVGRFFUUkVMRlZCUVVrc1EwRkJRMlVzVTBGQlRDeEhRVUZyUWl4blJFRkJLME5FTEVsQlFVc3NUVUZCZEVVN1FVRkRRV1FzVlVGQlNTeERRVUZETjBRc1YwRkJUQ3hEUVVGcFFqQkZMRkZCUVdwQ08wRkJRMEVzVjBGQlMxSXNVVUZCVEN4RFFVRmpiRVVzVjBGQlpDeERRVUV3UWpaRUxFbEJRVEZDTzBGQlEwRXNWMEZCUzBnc1dVRkJURHRCUVVOQlJDeGhRVUZQTEVOQlFVTkdMRWRCUVZJc1EwRkJXU3hMUVVGTGVFY3NUVUZCVEN4RFFVRlpPRWdzU1VGQldpeERRVUZwUWl4SFFVRnFRaXhEUVVGYU8wRkJRMEZ3UWl4aFFVRlBMRU5CUVVOR0xFZEJRVklzUTBGQldVTXNUMEZCV2p0QlFVTklPenRCUVRORGIwUXNSMEZCZWtRN08ybENRVGhEWlU0c1lUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlF5OURaaXc0UkNJc0ltWnBiR1VpT2lKQVkyRjFjMkZzVG1WMEwyeHZaeTUzWldJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0hKbGNYVnBjbVVvWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENJcEtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0Y0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lsMHNJR1poWTNSdmNua3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJsZUhCdmNuUnpXMXdpUUdOaGRYTmhiRTVsZEM5c2IyZGNJbDBnUFNCbVlXTjBiM0o1S0hKbGNYVnBjbVVvWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENJcEtUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0pBWTJGMWMyRnNUbVYwTDJ4dloxd2lYU0E5SUdaaFkzUnZjbmtvY205dmRGdGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJbDBwTzF4dWZTa29kR2hwY3l3Z1puVnVZM1JwYjI0b1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgzVjBhV3h6WDE4cElIdGNibkpsZEhWeWJpQWlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnTUNrN1hHNGlMQ0ptZFc1amRHbHZiaUJmYVc1MFpYSnZjRkpsY1hWcGNtVkVaV1poZFd4MEtHOWlhaWtnZTF4dUlDQnlaWFIxY200Z2IySnFJQ1ltSUc5aWFpNWZYMlZ6VFc5a2RXeGxJRDhnYjJKcUlEb2dlMXh1SUNBZ0lHUmxabUYxYkhRNklHOWlhbHh1SUNCOU8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUY5cGJuUmxjbTl3VW1WeGRXbHlaVVJsWm1GMWJIUTdJaXdpWlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FtRnpaVXh2WjN0Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lod2NtVm1hWGc5VzEwcGUxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CeVpXWnBlQ0E5SUhCeVpXWnBlRHRjYmlBZ0lDQjlYRzU5SWl3aUx5OXZjbWxuYVc0Z1kyOWtaU0JtY205dElHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXNkV041WjJsc1ltVnlkQzlxYzI5dUxXUnBjM0JzWVhrdllteHZZaTl0WVhOMFpYSXZhbk52Ymkxa2FYTndiR0Y1TG1welhHNHZMeUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGNnVEhWamVTQkhhV3hpWlhKMFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJLYzI5dVZtbGxkM3RjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWdwZTF4dUlDQWdJSDFjYmlBZ0lDQnpkR0YwYVdNZ1NsTlBUa1JwYzNCc1lYa29hbk52Yml3Z2IzQmxia3hsZG1Wc2MwRnlaeXdnYzNSNWJHVlBjSFJwYjI1elFYSm5LU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQkVSVVpCVlV4VVgxTlVXVXhGWDA5UVZFbFBUbE1nUFNCN1hHNGdJQ0FnSUNBZ0lDQWdjbTl2ZERvZ2V5QjBZV2M2SUNkd2NtVW5MQ0J6ZEhsc1pUb2dKM0JoWkdScGJtYzZJRFZ3ZURzZ1ptOXVkQzF6YVhwbE9pQXhjbVZ0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pVTnZiblJoYVc1bGNqb2dleUIwWVdjNklDZGthWFluTENCemRIbHNaVG9nSjIxaGNtZHBiaTFpYjNSMGIyMDZJRE53ZURzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnZEdsMGJHVTZJSHNnZEdGbk9pQW5jM0JoYmljc0lITjBlV3hsT2lBblkzVnljMjl5T2lCd2IybHVkR1Z5T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pWUmxlSFE2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5KeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lHOXdaVzVDZFhSMGIyNDZJSHNnWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBZV2M2SUNkemNHRnVKeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsT2lBblpHbHpjR3hoZVRvZ2FXNXNhVzVsTFdKc2IyTnJPeUJ0WVhKbmFXNDZJREJ3ZUNBM2NIZ2dNSEI0SURKd2VEc2dZbTl5WkdWeUxYUnZjRG9nTlhCNElITnZiR2xrSUhSeVlXNXpjR0Z5Wlc1ME95QW5YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ3NnSjJKdmNtUmxjaTFpYjNSMGIyMDZJRFZ3ZUNCemIyeHBaQ0IwY21GdWMzQmhjbVZ1ZERzZ1ltOXlaR1Z5TFd4bFpuUTZJRFZ3ZUNCemIyeHBaQ0JpYkdGamF6c25MRnh1SUNBZ0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdWdWRITkRiMjUwWVdsdVpYSTZJSHNnZEdGbk9pQW5aR2wySnl3Z2MzUjViR1U2SUNkd1lXUmthVzVuTFd4bFpuUTZJREU0Y0hnN0p5QjlMRnh1SUNBZ0lDQWdJQ0FnSUd0bGVWWmhiSFZsVUdGcGNqb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNka2FYTndiR0Y1T2lCaWJHOWphenNnYldGeVoybHVMV0p2ZEhSdmJUb2dNbkI0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0JyWlhrNklIc2dkR0ZuT2lBbmMzQmhiaWNzSUhOMGVXeGxPaUFuWTI5c2IzSTZJR1JoY210aWJIVmxPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQnplVzFpYjJ4V1lXeDFaVG9nZXlCMFlXYzZJQ2R6Y0dGdUp5d2djM1I1YkdVNklDZGpiMnh2Y2pvZ1pHRnlhMmR5WldWdU95Y2dmU3hjYmlBZ0lDQWdJQ0FnSUNCemRISnBibWRXWVd4MVpUb2dleUIwWVdjNklDZHpjR0Z1Snl3Z2MzUjViR1U2SUNkamIyeHZjam9nWTNKcGJYTnZianNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdiblZ0WW1WeVZtRnNkV1U2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5ZMjlzYjNJNklHSnNkV1U3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJR0p2YjJ4bFlXNVdZV3gxWlRvZ2V5QjBZV2M2SUNkemNHRnVKeXdnYzNSNWJHVTZJQ2RqYjJ4dmNqb2dZbXgxWlRzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnYm5Wc2JGWmhiSFZsT2lCN0lIUmhaem9nSjNOd1lXNG5MQ0J6ZEhsc1pUb2dKMk52Ykc5eU9pQmliSFZsT3ljZ2ZTeGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHOXdaVzVNWlhabGJITWdQU0JwYzA1aFRpaHdZWEp6WlVsdWRDaHZjR1Z1VEdWMlpXeHpRWEpuS1NrZ1B5QkpibVpwYm1sMGVTQTZJSEJoY25ObFNXNTBLRzl3Wlc1TVpYWmxiSE5CY21jcE8xeHVJQ0FnSUNBZ0lDQjJZWElnYzNSNWJHVlBjSFJwYjI1eklEMGdkSGx3Wlc5bUlITjBlV3hsVDNCMGFXOXVjMEZ5WnlBOVBUMGdKMjlpYW1WamRDY2dYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0EvSUcxbGNtZGxVM1I1YkdWUGNIUnBiMjV6S0VSRlJrRlZURlJmVTFSWlRFVmZUMUJVU1U5T1V5d2djM1I1YkdWUGNIUnBiMjV6UVhKbktWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdPaUJFUlVaQlZVeFVYMU5VV1V4RlgwOVFWRWxQVGxNN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ1QySnFaV04wTG1GemMybG5iaUFoUFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQWdJQ0FnVDJKcVpXTjBMbUZ6YzJsbmJpQTlJR1oxYm1OMGFXOXVLSFJoY21kbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJoY21kbGRDQTlQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KME5oYm01dmRDQmpiMjUyWlhKMElIVnVaR1ZtYVc1bFpDQnZjaUJ1ZFd4c0lIUnZJRzlpYW1WamRDY3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUhSdklEMGdUMkpxWldOMEtIUmhjbWRsZENrN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnBibVJsZUNBOUlERTdJR2x1WkdWNElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhVzVrWlhnckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnYm1WNGRGTnZkWEpqWlNBOUlHRnlaM1Z0Wlc1MGMxdHBibVJsZUYwN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYaDBVMjkxY21ObElDRTlJRzUxYkd3cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0haaGNpQnVaWGgwUzJWNUlHbHVJRzVsZUhSVGIzVnlZMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYm1WNGRGTnZkWEpqWlN3Z2JtVjRkRXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc5YmJtVjRkRXRsZVYwZ1BTQnVaWGgwVTI5MWNtTmxXMjVsZUhSTFpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSdk8xeHVJQ0FnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnY21WdVpHVnlLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJsYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11Y205dmRDNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NXliMjkwTG5OMGVXeGxPMXh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJR2xtSUNocWMyOXVJRDA5UFNCdWRXeHNJSHg4SUdwemIyNGdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIWnZhV1JGYkdWdFpXNTBJRDBnWjJWMFZtRnNkV1VvYm5Wc2JDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tIWnZhV1JGYkdWdFpXNTBLVHRjYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHcHpiMjRnYVc1emRHRnVZMlZ2WmlCRVlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnWkdGMFpVVnNaVzFsYm5RZ1BTQm5aWFJXWVd4MVpTaHFjMjl1TG5SdlNWTlBVM1J5YVc1bktDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtZWFJsUld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2FuTnZiaUFoUFQwZ0oyOWlhbVZqZENjcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGNpQnViMjVGZUhCaGJtUmhZbXhsUld4bGJXVnVkQ0E5SUdkbGRGWmhiSFZsS0dwemIyNHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaHViMjVGZUhCaGJtUmhZbXhsUld4bGJXVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCMGFYUnNaU0E5SUVGeWNtRjVMbWx6UVhKeVlYa29hbk52YmlrZ1B5QW5RWEp5WVhsYkp5QXJJR3B6YjI0dWJHVnVaM1JvSUNzZ0oxMG5JRG9nSjA5aWFtVmpkQ2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnZEdocGMweGxkbVZzU1hORGJHOXpaV1FnUFNCdmNHVnVUR1YyWld4eklEd2dNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9aMlYwVkdsMGJHVW9kR2wwYkdVc0lHNTFiR3dzSUhSb2FYTk1aWFpsYkVselEyeHZjMlZrS1NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dOdmJuWmxjblJLYzI5dVZHOUZiR1Z0Wlc1MGN5aHFjMjl1TENBeEtTazdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJsYkdWdFpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJR052Ym5abGNuUktjMjl1Vkc5RmJHVnRaVzUwY3locWMyOXVMQ0JwYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQjBhR2x6VEdWMlpXeEpjME5zYjNObFpDQTlJR2x1WkdWNElENGdiM0JsYmt4bGRtVnNjenRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdibVY0ZEV4bGRtVnNTWE5EYkc5elpXUWdQU0JwYm1SbGVDQXJJREVnUGlCdmNHVnVUR1YyWld4ek8xeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCamIyNTBZV2x1WlhJZ1BTQm5aWFJEYjI1MFpXNTBjME52Ym5SaGFXNWxjaWgwYUdselRHVjJaV3hKYzBOc2IzTmxaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2EyVjVJR2x1SUdwemIyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hCY25KaGVTNXBjMEZ5Y21GNUtHcHpiMjViYTJWNVhTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGUnBkR3hsS0NkQmNuSmhlVnNuSUNzZ2FuTnZibHRyWlhsZExteGxibWQwYUNBcklDZGRKeXdnYTJWNUxDQnVaWGgwVEdWMlpXeEpjME5zYjNObFpDa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWVdsdVpYSXVZWEJ3Wlc1a1EyaHBiR1FvWTI5dWRtVnlkRXB6YjI1VWIwVnNaVzFsYm5SektHcHpiMjViYTJWNVhTd2dhVzVrWlhnZ0t5QXhLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR3B6YjI1YmEyVjVYU0E5UFQwZ2JuVnNiQ0I4ZkNCcWMyOXVXMnRsZVYwZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1oyVjBVM1JoYm1SaGNtUlFZV2x5S0d0bGVTd2diblZzYkNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNocWMyOXVXMnRsZVYwZ2FXNXpkR0Z1WTJWdlppQkVZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2k1aGNIQmxibVJEYUdsc1pDaG5aWFJUZEdGdVpHRnlaRkJoYVhJb2EyVjVMQ0JxYzI5dVcydGxlVjB1ZEc5SlUwOVRkSEpwYm1jb0tTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2FuTnZibHRyWlhsZElEMDlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1oyVjBWR2wwYkdVb0owOWlhbVZqZENjc0lHdGxlU3dnYm1WNGRFeGxkbVZzU1hORGJHOXpaV1FwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5TG1Gd2NHVnVaRU5vYVd4a0tHTnZiblpsY25SS2MyOXVWRzlGYkdWdFpXNTBjeWhxYzI5dVcydGxlVjBzSUdsdVpHVjRJQ3NnTVNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWhyWlhrc0lHcHpiMjViYTJWNVhTa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVk41YldKdmJITWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVWTjViV0p2YkhNb2FuTnZiaWt1Wm05eVJXRmphQ2htZFc1amRHbHZiaWh6ZVcxaWIyd3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWh6ZVcxaWIyd3VkRzlUZEhKcGJtY29LU3dnYW5OdmJsdHplVzFpYjJ4ZEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ym5SaGFXNWxjanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJuWlhSVWFYUnNaU2gwYVhSc1pWUmxlSFFzSUc5d2RHbHZibUZzUzJWNUxDQnNaWFpsYkVselEyeHZjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdOMWNuSmxiblJzZVVOc2IzTmxaQ0E5SUd4bGRtVnNTWE5EYkc5elpXUTdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlVOdmJuUmhhVzVsY2k1MFlXY3BPMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuUmhhVzVsY2tWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1MGFYUnNaVU52Ym5SaGFXNWxjaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk5sZEVGMGRISnBZblYwWlNnblpHRjBZUzEwWlhOMEp5d2dKM1JwZEd4bFEyOXVkR0ZwYm1WeUp5azdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIUmxlSFJGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11ZEdsMGJHVlVaWGgwTG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIUnBkR3hsUld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG5ScGRHeGxMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdkR2wwYkdWRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWRHbDBiR1V1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnZEdWNGRFVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0E5SUhOMGVXeGxUM0IwYVc5dWN5NTBhWFJzWlZSbGVIUXVjM1I1YkdVN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRFOXdaVzVDZFhSMGIyNG9iR1YyWld4SmMwTnNiM05sWkNrcE8xeHVJQ0FnSUNBZ0lDQWdJR2xtSUNodmNIUnBiMjVoYkV0bGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHVjRkRVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFMyVjVLRzl3ZEdsdmJtRnNTMlY1S1NrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUhSbGVIUkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR1J2WTNWdFpXNTBMbU55WldGMFpWUmxlSFJPYjJSbEtIUnBkR3hsVkdWNGRDa3BPMXh1SUNBZ0lDQWdJQ0FnSUhScGRHeGxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwWlhoMFJXeGxiV1Z1ZENrN1hHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ2RHbDBiR1ZGYkdWdFpXNTBMbTl1WTJ4cFkyc2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2IzQmxia0oxZEhSdmJpQTlJSFJwZEd4bFJXeGxiV1Z1ZEM1bWFYSnpkRU5vYVd4a08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHOWlhbVZqZEVOdmJuUmxiblJ6SUQwZ2RHbDBiR1ZGYkdWdFpXNTBMbkJoY21WdWRFNXZaR1V1Ym1WNGRGTnBZbXhwYm1jN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2WW1wbFkzUkRiMjUwWlc1MGN5NXpkSGxzWlM1a2FYTndiR0Y1SUQwZ1kzVnljbVZ1ZEd4NVEyeHZjMlZrSUQ4Z0oySnNiMk5ySnlBNklDZHViMjVsSnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzl3Wlc1Q2RYUjBiMjR1YzNSNWJHVXVkSEpoYm5ObWIzSnRJRDBnWTNWeWNtVnVkR3g1UTJ4dmMyVmtJRDhnSjNKdmRHRjBaU2c1TUdSbFp5a25JRG9nSjNKdmRHRjBaU2d3WkdWbktTYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwYkhsRGJHOXpaV1FnUFNBaFkzVnljbVZ1ZEd4NVEyeHZjMlZrTzF4dUlDQWdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2gwYVhSc1pVVnNaVzFsYm5RcE8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjUwWVdsdVpYSkZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRTl3Wlc1Q2RYUjBiMjRvYkdWMlpXeEpjME5zYjNObFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQmlkWFIwYjI1RmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2h6ZEhsc1pVOXdkR2x2Ym5NdWIzQmxia0oxZEhSdmJpNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1dmNHVnVRblYwZEc5dUxuTjBlV3hsTzF4dUlDQWdJQ0FnSUNBZ0lHSjFkSFJ2YmtWc1pXMWxiblF1YzNSNWJHVXVkSEpoYm5ObWIzSnRJRDBnYkdWMlpXeEpjME5zYjNObFpDQS9JQ2R5YjNSaGRHVW9NR1JsWnlrbklEb2dKM0p2ZEdGMFpTZzVNR1JsWnlrbk8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmlkWFIwYjI1RmJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUdkbGRFTnZiblJsYm5SelEyOXVkR0ZwYm1WeUtHbHpRMnh2YzJWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHTnZiblJoYVc1bGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NWpiMjUwWlc1MGMwTnZiblJoYVc1bGNpNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNrVnNaVzFsYm5RdWMyVjBRWFIwY21saWRYUmxLQ2RrWVhSaExYUmxjM1FuTENBblkyOXVkR1Z1ZEhORGIyNTBZV2x1WlhJbktUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11WTI5dWRHVnVkSE5EYjI1MFlXbHVaWEl1YzNSNWJHVTdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHRnBibVZ5Uld4bGJXVnVkQzV6ZEhsc1pTNWthWE53YkdGNUlEMGdLR2x6UTJ4dmMyVmtJRDhnSjI1dmJtVW5JRG9nSjJKc2IyTnJKeWs3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOdmJuUmhhVzVsY2tWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWm5WdVkzUnBiMjRnWjJWMFUzUmhibVJoY21SUVlXbHlLR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnY0dGcGNrVnNaVzFsYm5RZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0hOMGVXeGxUM0IwYVc5dWN5NXJaWGxXWVd4MVpWQmhhWEl1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0J3WVdseVJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxtdGxlVlpoYkhWbFVHRnBjaTV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0J3WVdseVJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaG5aWFJMWlhrb2EyVjVLU2s3WEc0Z0lDQWdJQ0FnSUNBZ2NHRnBja1ZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvWjJWMFZtRnNkV1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnY0dGcGNrVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z1oyVjBTMlY1S0c1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdhMlY1Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG10bGVTNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lHdGxlVVZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlITjBlV3hsVDNCMGFXOXVjeTVyWlhrdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ2EyVjVSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaHVZVzFsSUNzZ0p6b2dKeWtwTzF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCclpYbEZiR1Z0Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lHWjFibU4wYVc5dUlHZGxkRlpoYkhWbEtIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhaaGJIVmxSV3hsYldWdWREdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2JuVnNiRlI1Y0dVZ1BTQW5iMkpxWldOMEp6dGNiaUFnSUNBZ0lDQWdJQ0J6ZDJsMFkyZ2dLSFI1Y0dWdlppQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5jM2x0WW05c0p6cGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11YzNsdFltOXNWbUZzZFdVdWRHRm5LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWMzbHRZbTlzVm1Gc2RXVXVjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkQzVqY21WaGRHVlVaWGgwVG05a1pTaDJZV3gxWlM1MGIxTjBjbWx1WnlncEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmMzUnlhVzVuSnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXVjM1J5YVc1blZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11YzNSeWFXNW5WbUZzZFdVdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNnblhDSW5JQ3NnZG1Gc2RXVWdLeUFuWENJbktTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmJuVnRZbVZ5SnpwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXViblZ0WW1WeVZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11Ym5WdFltVnlWbUZzZFdVdWMzUjViR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNoMllXeDFaU2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKMkp2YjJ4bFlXNG5PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblFnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLSE4wZVd4bFQzQjBhVzl1Y3k1aWIyOXNaV0Z1Vm1Gc2RXVXVkR0ZuS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXVZbTl2YkdWaGJsWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElHNTFiR3hVZVhCbE9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTV1ZFd4c1ZtRnNkV1V1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11Ym5Wc2JGWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpVVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0FnSUNBZ1puVnVZM1JwYjI0Z2JXVnlaMlZUZEhsc1pVOXdkR2x2Ym5Nb1pHVm1ZWFZzZEhNc0lHOTJaWEp5YVdSbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGNpQnRaWEpuWldRZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnWkdWbVlYVnNkSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFsY21kbFpGdHJaWGxkSUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z1pHVm1ZWFZzZEhOYmEyVjVYU3dnYjNabGNuSnBaR1Z6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JXVnlaMlZrTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5Wlc1a1pYSW9LVHRjYmlBZ0lDQjlYRzU5SWl3aWFXMXdiM0owSUh0a1pXWmhkV3gwSUdGeklFSmhjMlZNYjJkOUlHWnliMjBnSnk0dlltRnpaVXh2WnljN1hHNXBiWEJ2Y25RZ2UyUmxabUYxYkhRZ1lYTWdURzluVG05a1pVMXBlR2x1YzMwZ1puSnZiU0FuTGk5MFpYSnRURzluTG0xcGVHbHVjeTV1YjJSbEp6dGNibWx0Y0c5eWRDQjdaR1ZtWVhWc2RDQmhjeUJYWldKT2IyUmxUV2w0YVc1emZTQm1jbTl0SUNjdUwzUmxjbTFNYjJjdWJXbDRhVzV6TG5kbFlpYzdYRzVwYlhCdmNuUWdlMUJzWVhSbWIzSnRmU0JtY205dElDZGpZWFZ6WVd3dGJtVjBMblYwYVd4ekp6dGNibU5zWVhOeklGUmxjbTFNYjJjZ1pYaDBaVzVrY3lCUWJHRjBabTl5YlM1dGFYaFhhWFJvS0VKaGMyVk1iMmNzSUhzbmJtOWtaU2M2VzB4dlowNXZaR1ZOYVhocGJuTmRMQ2QzWldJbk9sdFhaV0pPYjJSbFRXbDRhVzV6WFgwcGUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtIQnlaV1pwZUNsN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0hCeVpXWnBlQ2s3WEc0Z0lDQWdmVnh1ZlZ4dVkyOXVjM1FnVEc5bloyVnlJRDBnYm1WM0lGUmxjbTFNYjJjb0tUdGNibVY0Y0c5eWRDQmtaV1poZFd4MElFeHZaMmRsY2pzaUxDSmpiMjV6ZENCTWIyZE9iMlJsVFdsNGFXNXpJRDBnS0V4dlowTnNZWE56S1QwK0lHTnNZWE56SUdWNGRHVnVaSE1nVEc5blEyeGhjM043WEc0Z0lDQWdZMjl1Ym1WamRDaGphR0Z1Ym1Wc0tYdGNiaUFnSUNBZ0lDQWdMeTl1YjNSb2FXNW5YRzRnSUNBZ2ZWeHVJQ0FnSUd4dlp5aHRaWE56WVdkbEtYdGNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvYldWemMyRm5aU2s3WEc0Z0lDQWdmVnh1SUNBZ0lITmpjbTlzYkVKdmRIUnZiU2dwZTF4dUlDQWdJQ0FnSUNBdkwyNXZkR2hwYm1kY2JpQWdJQ0I5WEc0Z0lDQWdjSEp2WjNKbGMzTW9jSEp2WTJWemMwMWxjM05oWjJVcGUxeHVJQ0FnSUNBZ0lDQnNaWFFnYm05a1pTQTlJSFJvYVhNdVoyVjBSV3hsYldWdWRITkNlVlJoWjA1aGJXVW9YQ0pzYVRwdWRHZ3RiR0Z6ZEMxdlppMTBlWEJsS0RFcFhDSXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlodWIyUmxLVHRjYmlBZ0lDQWdJQ0FnYVdZb0lXNXZaR1VwZXk4dlkzSmxZWFJsSUc1bGQxeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVEc5blRtOWtaVTFwZUdsdWN6c2lMQ0pwYlhCdmNuUWdlMlJsWm1GMWJIUWdZWE1nU25OdmJsWnBaWGQ5SUdaeWIyMGdKeTR2Y0hKbGRIUjVTbk52YmljN1hHNWpiMjV6ZENCWFpXSk9iMlJsVFdsNGFXNXpJRDBnS0V4dlowTnNZWE56S1QwK0lHTnNZWE56SUdWNGRHVnVaSE1nVEc5blEyeGhjM043WEc0Z0lDQWdZMjl1Ym1WamRDaGtiMk4xYldWdWRFVnNQVzUxYkd3cGUxeHVJQ0FnSUNBZ0lDQmtiMk4xYldWdWRFVnNJRDBnWkc5amRXMWxiblJGYkh4OFpHOWpkVzFsYm5RdVltOWtlVHRjYmlBZ0lDQWdJQ0FnYkdWMElHNXZaR1VnUFNCa2IyTjFiV1Z1ZEM1amNtVmhkR1ZGYkdWdFpXNTBLRndpZFd4Y0lpazdYRzRnSUNBZ0lDQWdJRzV2WkdVdWMzUjViR1V1WTNOelZHVjRkQ0E5SUZ3aWJHbHpkQzF6ZEhsc1pTMTBlWEJsT2lCdWIyNWxPMXdpTzF4dUlDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEVWc0xtRndjR1Z1WkVOb2FXeGtLRzV2WkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1aeVlXMWxSV3dnUFNCa2IyTjFiV1Z1ZEVWc08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG14dloyZGxja1ZzSUQwZ1pHOWpkVzFsYm5SRmJDNW5aWFJGYkdWdFpXNTBjMEo1VkdGblRtRnRaU2hjSW5Wc1hDSXBXekJkTzF4dUlDQWdJSDFjYmlBZ0lDQnpZM0p2Ykd4Q2IzUjBiMjBvWld4bGJXVnVkRDF1ZFd4c0tYdGNiaUFnSUNBZ0lDQWdaV3hsYldWdWRDQTlJR1ZzWlcxbGJuUWdmSHdnZEdocGN5NW1jbUZ0WlVWc08xeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWduYzJOdmJHd2dZbTkwZEc5dElDY2dLeUJsYkdWdFpXNTBMbk5qY205c2JFaGxhV2RvZENBcklHVnNaVzFsYm5RdVkyeHBaVzUwU0dWcFoyaDBLVHRjYmlBZ0lDQWdJQ0FnWld4bGJXVnVkQzV6WTNKdmJHeFViM0FnUFNCbGJHVnRaVzUwTG5OamNtOXNiRWhsYVdkb2RDQXRJR1ZzWlcxbGJuUXVZMnhwWlc1MFNHVnBaMmgwTzF4dUlDQWdJSDFjYmlBZ0lDQndjbTluY21WemN5aHdjbTlqWlhOelRXVnpjMkZuWlNsN1hHNGdJQ0FnSUNBZ0lDOHZJR3hsZENCdWIyUmxJRDBnZEdocGN5NXNiMmRuWlhKRmJDNW5aWFJGYkdWdFpXNTBjMEo1VkdGblRtRnRaU2hjSW14cE9tNTBhQzFzWVhOMExXOW1MWFI1Y0dVb01TbGNJaWs3WEc0Z0lDQWdJQ0FnSUd4bGRDQk1TVTV2WkdWeklEMGdkR2hwY3k1c2IyZG5aWEpGYkM1blpYUkZiR1Z0Wlc1MGMwSjVWR0ZuVG1GdFpTaGNJbXhwWENJcE8xeHVJQ0FnSUNBZ0lDQnNaWFFnYm05a1pTQTlJRXhKVG05a1pYTmJURWxPYjJSbGN5NXNaVzVuZEdndE1WMDdYRzRnSUNBZ0lDQWdJR2xtS0NGdWIyUmxJSHg4SUc1dlpHVXVZMnhoYzNOTWFYTjBMbU52Ym5SaGFXNXpLRndpYkc5bloyVnlMWEJ5YjJkeVpYTnpYQ0lwS1hzdkwyTnlaV0YwWlNCdVpYZGNiaUFnSUNBZ0lDQWdJQ0FnSUc1dlpHVWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtGd2liR2xjSWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1YjJSbExtTnNZWE56VEdsemRDNWhaR1FvWENKc2IyZG5aWEl0Y0hKdlozSmxjM05jSWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxteHZaMmRsY2tWc0xtRndjR1Z1WkVOb2FXeGtLRzV2WkdVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR3hsZENCcWMyOXVUbTlrWlNBOUlFcHpiMjVXYVdWM0xrcFRUMDVFYVhOd2JHRjVLSEJ5YjJObGMzTk5aWE56WVdkbEtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdSaGRHVWdQU0J1WlhjZ1JHRjBaU2dwTzF4dUlDQWdJQ0FnSUNCdWIyUmxMbWx1Ym1WeVNGUk5UQ0E5SUdBOGNDQnpkSGxzWlQxY0ltWnZiblF0YzJsNlpUb2dNVEp3ZURzZ2RHVjRkQzFoYkdsbmJqcHlhV2RvZEZ3aVBpUjdaR0YwWlgwOEwzQStZRHRjYmlBZ0lDQWdJQ0FnYm05a1pTNWhjSEJsYm1SRGFHbHNaQ2hxYzI5dVRtOWtaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk55YjJ4c1FtOTBkRzl0S0NrN1hHNGdJQ0FnZlZ4dUlDQWdJR3h2WnlodFpYTnpZV2RsS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJHOW5aMlZ5Uld3Z2ZId2dJWFJvYVhNdWJHOW5aMlZ5Uld3dVlYQndaVzVrUTJocGJHUXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqYjI1dVpXTjBLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2JHVjBJRzV2WkdVZ1BTQmtiMk4xYldWdWRDNWpjbVZoZEdWRmJHVnRaVzUwS0Z3aWJHbGNJaWs3WEc0Z0lDQWdJQ0FnSUc1dlpHVXVjM1I1YkdVdVkzTnpWR1Y0ZENBOUlDZGliM0prWlhJdFltOTBkRzl0T2lBeGNIZ2djMjlzYVdRZ0kyUmxaR1ZrWlRzbk95QWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2JHVjBJR3B6YjI1T2IyUmxJRDBnU25OdmJsWnBaWGN1U2xOUFRrUnBjM0JzWVhrb2JXVnpjMkZuWlNrN1hHNGdJQ0FnSUNBZ0lIWmhjaUJrWVhSbElEMGdibVYzSUVSaGRHVW9LVHRjYmlBZ0lDQWdJQ0FnYm05a1pTNXBibTVsY2toVVRVd2dQU0JnUEhBZ2MzUjViR1U5WENKbWIyNTBMWE5wZW1VNklERXljSGc3SUhSbGVIUXRZV3hwWjI0NmNtbG5hSFJjSWo0a2UyUmhkR1Y5UEM5d1BtQTdYRzRnSUNBZ0lDQWdJRzV2WkdVdVlYQndaVzVrUTJocGJHUW9hbk52Yms1dlpHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxteHZaMmRsY2tWc0xtRndjR1Z1WkVOb2FXeGtLRzV2WkdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OamNtOXNiRUp2ZEhSdmJTZ3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnloMGFHbHpMbkJ5WldacGVDNXFiMmx1S0Njdkp5a3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlodFpYTnpZV2RsS1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlhaV0pPYjJSbFRXbDRhVzV6T3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgzVjBhV3h6WDE4N0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCJpbXBvcnQge1RlbnNvcn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7aW5kZXhEQlN0b3JhZ2V9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBFbnNlbWJsZU1peGluc30gZnJvbSAnLi9lbnNlbWJsZS5taXhpbnMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEZ1bmN0aW9ufSBmcm9tICcuL2Z1bmN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F1c2FsTmV0IGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsW0Vuc2VtYmxlTWl4aW5zXSl7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBuZXRDb25maWdcbiAgICAgKiBAcGFyYW0gIHt9IG5ldFBhcmFtc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBuZXRDb25maWcsIG5ldFBhcmFtcz1udWxsLCBzdG9yYWdlPW51bGwgKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuRi5Db3JlRnVuY3Rpb247XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2UgfHwgaW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMuc2F2ZU1vZGVsRGlyID0gJy9zYXZlTW9kZWwvJztcbiAgICAgICAgdGhpcy5IeXBlclBhcmFtZXRlcnMgPSB0aGlzLkYuZ2V0SHlwZXJQYXJhbWV0ZXIobmV0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5CYXNlUGlwZWxpbmUgPSB0aGlzLkYuZ2V0UGlwZWxpbmUobmV0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5uZXRQYXJhbXMgPSB0aGlzLnNldE9ySW5pdFBhcmFtcyh0aGlzLkJhc2VQaXBlbGluZSwgbmV0UGFyYW1zKTtcbiAgICAgICAgdGhpcy5mbGF0dGVuUGFyYW1zID0gdGhpcy5mbGF0dGVuUGFyYW1zKHRoaXMubmV0UGFyYW1zKTsgICAgICAgIFxuICAgIH1cblxuICAgIGZsYXR0ZW5QYXJhbXMocGFyYW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc3QgTWFwVmFsdWVzID0gKG9iak9yQXJyYXkpPT5BcnJheS5pc0FycmF5KG9iak9yQXJyYXkpP29iak9yQXJyYXk6T2JqZWN0LnZhbHVlcyhvYmpPckFycmF5KTtcbiAgICAgICAgY29uc3QgRmxhdHRlbiA9IChwdik9PntcbiAgICAgICAgICAgIGlmKEYuaXNUZW5zb3IocHYpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBNYXBWYWx1ZXMocHYpO1xuICAgICAgICAgICAgICAgIGxldCBmbGF0dGVuID0gdmFsdWVzLnJlZHVjZSgoZmxhdHRlbiwgdik9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IEZsYXR0ZW4odik7XG4gICAgICAgICAgICAgICAgICAgIGlmKFIuaXMoQXJyYXksIHJlcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbiA9IFsuLi5mbGF0dGVuLCAuLi5yZXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuID0gWy4uLmZsYXR0ZW4sIHJlc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsYXR0ZW47XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbGF0dGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgdmFsdWVzID0gTWFwVmFsdWVzKHBhcmFtcyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmFsdWVzLnJlZHVjZSgoZmxhdHRlbix2KT0+Wy4uLmZsYXR0ZW4sIC4uLkZsYXR0ZW4odildLFtdKTtcbiAgICB9XG5cbiAgICBsYXllcih2YWx1ZSwgbGF5ZXJDb25maWd1cmUsIGxheWVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IHtOYW1lLCBUeXBlLCBQYXJhbWV0ZXJzLCBGbG93fSA9IGxheWVyQ29uZmlndXJlO1xuICAgICAgICBjb25zb2xlLmxvZyh7TmFtZSwgVHlwZSwgUGFyYW1ldGVycywgRmxvd30pO1xuICAgICAgICBjb25zdCBPcHNSdW5uZXIgPSBSLmFkZEluZGV4KFIucmVkdWNlKShSLl9fLHtyZXN1bHQ6IHZhbHVlLCB0cmFjZToge319LCBGbG93KTtcbiAgICAgICAgdmFyIHtyZXN1bHQsIHRyYWNlfSA9IE9wc1J1bm5lcigoe3Jlc3VsdCwgdHJhY2V9LCBub2RlLCBpZHgpPT57XG4gICAgICAgICAgICBpZihub2RlLlBhcmFtZXRlcil7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5UW25vZGUuT3BdKHJlc3VsdCwgbGF5ZXJQYXJhbWV0ZXJzW25vZGUuUGFyYW1ldGVyXSwgLi4ubm9kZS5BcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5UW25vZGUuT3BdKHJlc3VsdCwgLi4ubm9kZS5BcmdzKTsgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJhY2VbaWR4XSA9IHJlc3VsdC5zaGFwZTtcbiAgICAgICAgICAgIHJldHVybiB7cmVzdWx0LCB0cmFjZX07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0LCB0cmFjZX07XG4gICAgfVxuXG4gICAgc2V0T3JJbml0UGFyYW1zKHBpcGVsaW5lLCBuZXRQYXJhbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBUID0gdGhpcy5ULCBGID0gdGhpcy5GO1xuICAgICAgICBsZXQgcGlwZVBhcmFtcyA9IFIuZnJvbVBhaXJzKFIuZmlsdGVyKChbayx2XSk9PnYgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUi5tYXAoUi5fXywgcGlwZWxpbmUpKHA9PltwLk5hbWUsIHAuUGFyYW1ldGVyc10pKSk7XG4gICAgICAgIGNvbnN0IFNldE9ySW5pdCA9IChtYWluVmFsdWUsIHN1YlZhbCk9PntcbiAgICAgICAgICAgIGxldCBrZXlzID0gUi5rZXlzKG1haW5WYWx1ZSk7XG4gICAgICAgICAgICBsZXQga2V5TWFpblZhbFN1YlZhbCA9IFIubWFwKChrKT0+IFtrLCBSLnByb3AoaywgbWFpblZhbHVlKSwgUi5wcm9wT3IobnVsbCwgaywgc3ViVmFsKV0sIGtleXMpO1xuICAgICAgICAgICAgY29uc3QgVmFsTWFwcGluZyA9IChba2V5LCBtYWluVmFsLCBzdWJWYWxdKT0+e1xuICAgICAgICAgICAgICAgIGlmKEYuaXNQYXJhbWV0ZXIobWFpblZhbCkpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbVNoYXBlID0gbWFpblZhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYoUi5pc05pbChzdWJWYWwpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBULnZhcmlhYmxlKFQucmFuZG9tTm9ybWFsKHBhcmFtU2hhcGUpKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBULnZhcmlhYmxlKFQudGVuc29yKHN1YlZhbCkucmVzaGFwZShwYXJhbVNoYXBlKSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBTZXRPckluaXQobWFpblZhbCwgc3ViVmFsKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBSLmZyb21QYWlycyhSLm1hcChWYWxNYXBwaW5nLCBrZXlNYWluVmFsU3ViVmFsKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBTZXRPckluaXQocGlwZVBhcmFtcywgbmV0UGFyYW1zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHt9IHNhbXBsZXNcbiAgICAgKiBAcGFyYW0gIHt9IG51bVNhbXBsZXM9MVxuICAgICAqL1xuICAgIG1ha2VQcmVkaWN0KHNhbXBsZXMsIG51bVNhbXBsZXM9MSl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIGYgPSB0aGlzLkYsIGwgPSB0aGlzLkw7XG4gICAgICAgIHRoaXMuSHlwZXJQYXJhbWV0ZXJzLkRhdGFzaXplID0gbnVtU2FtcGxlcztcbiAgICAgICAgY29uc3QgUGlwZWxpbmUgPSBmLnBhcmFtZXRlckFjcXVpc2l0aW9uKHRoaXMuQmFzZVBpcGVsaW5lLCB0aGlzLkh5cGVyUGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCh7UGlwZWxpbmV9KSk7XG4gICAgICAgIGxldCBwaXBlVmFsdWUgPSB7UGlwZUlucHV0OiBzYW1wbGVzfSwgdHJhY2VzID0gW10sIG5ldFBhcmFtcyA9IHRoaXMubmV0UGFyYW1zO1xuICAgICAgICByZXR1cm4gVC50aWR5KCgpPT57XG4gICAgICAgICAgICBmb3IobGV0IGxheWVyIG9mIFBpcGVsaW5lKXtcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXJPdXRwdXQgPSB0aGlzLmxheWVyKHBpcGVWYWx1ZVtsYXllci5JbnB1dF0sIGxheWVyLCBuZXRQYXJhbXNbbGF5ZXIuTmFtZV0pO1xuICAgICAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgICAgIHRyYWNlcy5wdXNoKHtbbGF5ZXIuTmFtZV06IGxheWVyT3V0cHV0LnRyYWNlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7dHJhY2VzfSk7XG4gICAgICAgICAgICBsZXQgcGlwZU91dHB1dCA9IHBpcGVWYWx1ZVsnUGlwZU91dHB1dCddO1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBwaXBlT3V0cHV0LnN1YihULmxvZ1N1bUV4cChwaXBlT3V0cHV0LCAxLCB0cnVlKSk7XG4gICAgICAgICAgICBsZXQgcHJlZGljdCA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtsb2dQcm9iLCBwcmVkaWN0fTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gc2FtcGxlQmF0Y2hcbiAgICAgKiBAcGFyYW0gIHt9IGxhYmVsQmF0Y2hcbiAgICAgKiBAcGFyYW0gIHt9IG51bVNhbXBsZVxuICAgICAqL1xuICAgIGxvc3MoYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVscywgbnVtU2FtcGxlKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgbGV0IGxhYmVsVGVuc29yICA9IFQudGVuc29yKGJhdGNoTGFiZWxzKS5yZXNoYXBlKFtudW1TYW1wbGUsIC0xXSk7XG4gICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihiYXRjaFNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpOyBcbiAgICAgICAgY29uc3Qge2xvZ1Byb2J9ID0gdGhpcy5tYWtlUHJlZGljdChzYW1wbGVUZW5zb3IsIG51bVNhbXBsZSk7XG4gICAgICAgIGNvbnN0IGxpa2VsaWhvb2QgPSBsb2dQcm9iLm5lZygpLm11bChsYWJlbFRlbnNvcik7XG4gICAgICAgIGNvbnN0IGxvc3MgPSBsaWtlbGlob29kLm1lYW4oKTtcbiAgICAgICAgcmV0dXJuIGxvc3M7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHt9IFNhbXBsZUdlbmVyYXRvckZuXG4gICAgICogQHBhcmFtICB7fSBiYXRjaFNpemVcbiAgICAgKiBAcGFyYW0gIHt9IG51bUVwb2Nocz0yXG4gICAgICogQHBhcmFtICB7fSBscj0wLjAxXG4gICAgICovXG4gICAgYXN5bmMgdHJhaW4oU2FtcGxlR2VuZXJhdG9yRm4sIGJhdGNoU2l6ZSwgbnVtRXBvY2hzID0gMiwgbHI9MC4wMDEpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBsb3NzID0gW10sIGF2ZXJhZ2VMb3NzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGltaXplciA9IFQudHJhaW4uYWRhbShscik7XG4gICAgICAgIGZvcihsZXQgZXBvY2hJZHggb2YgRi5yYW5nZShudW1FcG9jaHMpKXtcbiAgICAgICAgICAgIGlmKHRoaXMubG9nZ2VyKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5wcm9ncmVzcyh7ZXBvY2hJZHgsIGF2ZXJhZ2VMb3NzLCB0aW1lOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogc3RhcnQudG9JU09TdHJpbmcoKSwgZWxhcHNlOiAobmV3IERhdGUoKSAtIHN0YXJ0KS8xMDAwfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzYW1wbGVHZW5lcmF0b3IgPSBTYW1wbGVHZW5lcmF0b3JGbihiYXRjaFNpemUpO1xuICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQgW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdIG9mIHNhbXBsZUdlbmVyYXRvcil7XG4gICAgICAgICAgICAgICAgb3B0aW1pemVyLm1pbmltaXplKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBsID0gdGhpcy5sb3NzKGJhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHMsIGJhdGNoU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvc3MgPSBbLi4ubG9zcywgLi4ubC5kYXRhU3luYygpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2xvc3N9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdmVyYWdlTG9zcyA9IFsuLi5hdmVyYWdlTG9zcywgUi5tZWFuKGxvc3MpXTtcbiAgICAgICAgICAgIGxvc3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoe2F2ZXJhZ2VMb3NzfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYyB0ZXN0KFRlc3RTYW1wbGVHZW5lcmF0b3JGbiwgdGVzdEJhdGNoU2l6ZSwgbnVtQ2xhc3Nlcz0xMCl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIEYgPSB0aGlzLkYsIFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IHRlc3RTYW1wbGVHZW5lcmF0b3IgPSBUZXN0U2FtcGxlR2VuZXJhdG9yRm4odGVzdEJhdGNoU2l6ZSk7XG4gICAgICAgIGxldCB0ZXN0UmVzdWx0ID0gVC56ZXJvcyhbMV0pO1xuICAgICAgICBmb3IgYXdhaXQgKGxldCBbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc10gb2YgdGVzdFNhbXBsZUdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgbGFiZWxUZW5zb3IgID0gVC50ZW5zb3IoYmF0Y2hMYWJlbHMpLnJlc2hhcGUoW3Rlc3RCYXRjaFNpemUsIG51bUNsYXNzZXNdKTtcbiAgICAgICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihiYXRjaFNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpOyBcbiAgICAgICAgICAgIGNvbnN0IHtwcmVkaWN0fSA9IHRoaXMubWFrZVByZWRpY3Qoc2FtcGxlVGVuc29yLCB0ZXN0QmF0Y2hTaXplKTtcbiAgICAgICAgICAgIGxldCBvbmVob3RQcmVkaWN0ID0gVC5vbmVIb3QocHJlZGljdCwgbnVtQ2xhc3Nlcyk7XG4gICAgICAgICAgICBvbmVob3RQcmVkaWN0LnByaW50KCk7XG4gICAgICAgICAgICBsYWJlbFRlbnNvci5wcmludCgpO1xuICAgICAgICAgICAgb25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpLnByaW50KCk7XG4gICAgICAgICAgICB0ZXN0UmVzdWx0ID0gdGVzdFJlc3VsdC5hZGQob25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGVzdFJlc3VsdC5kYXRhKCk7XG4gICAgICAgIGxldCBwYXNzID0gcmVzdWx0WzBdO1xuICAgICAgICBsZXQgYWNjdXJhY3kgPSBwYXNzL3Rlc3RCYXRjaFNpemU7XG4gICAgICAgIHJldHVybiB7YWNjdXJhY3ksIHBhc3N9OyAgICAgICAgXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UGFyYW1zKGFzT2JqZWN0PXRydWUpe1xuICAgICAgICBjb25zdCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBnZXRQYXJhbXMgPSBhc3luYyAocGFyYW1zKT0+e1xuICAgICAgICAgICAgaWYoRi5pc1RlbnNvcihwYXJhbXMpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhd2FpdCBwYXJhbXMuZGF0YSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IGtWYWxzID0gUi50b1BhaXJzKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW2ssIHZhbF0gb2Yga1ZhbHMpe1xuICAgICAgICAgICAgICAgICAgICByZXNba10gPSBhd2FpdCBnZXRQYXJhbXModmFsKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBwYXJhbXMgPSBhd2FpdCBnZXRQYXJhbXModGhpcy5uZXRQYXJhbXMpO1xuICAgICAgICBpZihhc09iamVjdCl7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRTYXZlZFBhcmFtcygpe1xuICAgICAgICBsZXQgZmlsZUxpc3QgPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0RmlsZUxpc3QodGhpcy5zYXZlTW9kZWxEaXIpO1xuICAgICAgICByZXR1cm4gZmlsZUxpc3QubWFwKGZpbGVOYW1lPT5maWxlTmFtZS5yZXBsYWNlKHRoaXMuc2F2ZU1vZGVsRGlyLCcnKSk7XG4gICAgfVxuICAgIGFzeW5jIHNhdmVQYXJhbXMoZmlsZU5hbWU9J3NhdmUubW9kZWwnKXtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gYXdhaXQgdGhpcy5nZXRQYXJhbXMoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLndyaXRlRmlsZSh0aGlzLnNhdmVNb2RlbERpciArIGZpbGVOYW1lLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG4gICAgYXN5bmMgbG9hZFBhcmFtcyhmaWxlTmFtZSwgcGFyYW1zPW51bGwpe1xuICAgICAgICBpZighcGFyYW1zKXtcbiAgICAgICAgICAgIGxldCBfcGFyYW1zID0gYXdhaXQgdGhpcy5zdG9yYWdlLnJlYWRGaWxlKHRoaXMuc2F2ZU1vZGVsRGlyK2ZpbGVOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtfcGFyYW1zfSk7XG4gICAgICAgICAgICBwYXJhbXMgPSBKU09OLnBhcnNlKF9wYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV0UGFyYW1zID0gdGhpcy5zZXRPckluaXRQYXJhbXModGhpcy5CYXNlUGlwZWxpbmUsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFBhcmFtcyhmYWxzZSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIENvcmUgZnJvbSBcImNhdXNhbC1uZXQuY29yZVwiO1xuZXhwb3J0IGRlZmF1bHQgQ29yZTsiLCJpbXBvcnQgKiBhcyBEYXRhc2V0cyBmcm9tICdjYXVzYWwtbmV0LmRhdGFzZXRzJztcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXRzOyIsImNvbnN0IEVuc2VtYmxlTWl4aW5zID0gKFBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBQaXBlbGluZUNsYXNzeyBcbiAgICBhc3luYyBlbnNlbWJsZVRlc3QoVGVzdFNhbXBsZUdlbmVyYXRvckZuLCBtb2RlbExpc3QsIHRlc3RCYXRjaFNpemUsIG51bUNsYXNzZXM9MTApe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCB0ZXN0U2FtcGxlR2VuZXJhdG9yID0gVGVzdFNhbXBsZUdlbmVyYXRvckZuKHRlc3RCYXRjaFNpemUpO1xuICAgICAgICBsZXQgdGVzdFJlc3VsdCA9IFQuemVyb3MoWzFdKTtcbiAgICAgICAgZm9yIGF3YWl0IChsZXQgW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdIG9mIHRlc3RTYW1wbGVHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgbGV0IGxhYmVsVGVuc29yICA9IFQudGVuc29yKGJhdGNoTGFiZWxzKS5yZXNoYXBlKFt0ZXN0QmF0Y2hTaXplLCBudW1DbGFzc2VzXSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3IoYmF0Y2hTYW1wbGVzKS5hc1R5cGUoJ2Zsb2F0MzInKTsgXG4gICAgICAgICAgICBjb25zdCB7cHJlZGljdH0gPSBhd2FpdCB0aGlzLm1ha2VFbnNlbWJsZVByZWRpY3QobW9kZWxMaXN0LCBzYW1wbGVUZW5zb3IsIHRlc3RCYXRjaFNpemUpO1xuICAgICAgICAgICAgbGV0IG9uZWhvdFByZWRpY3QgPSBULm9uZUhvdChwcmVkaWN0LCBudW1DbGFzc2VzKTtcbiAgICAgICAgICAgIG9uZWhvdFByZWRpY3QucHJpbnQoKTtcbiAgICAgICAgICAgIGxhYmVsVGVuc29yLnByaW50KCk7XG4gICAgICAgICAgICBvbmVob3RQcmVkaWN0Lm11bChsYWJlbFRlbnNvcikuc3VtKCkucHJpbnQoKTtcbiAgICAgICAgICAgIHRlc3RSZXN1bHQgPSB0ZXN0UmVzdWx0LmFkZChvbmVob3RQcmVkaWN0Lm11bChsYWJlbFRlbnNvcikuc3VtKCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0ZXN0UmVzdWx0LmRhdGEoKTtcbiAgICAgICAgbGV0IHBhc3MgPSByZXN1bHRbMF07XG4gICAgICAgIGxldCBhY2N1cmFjeSA9IHBhc3MvdGVzdEJhdGNoU2l6ZTtcbiAgICAgICAgcmV0dXJuIHthY2N1cmFjeSwgcGFzc307ICAgICAgICBcbiAgICB9XG4gICAgYXN5bmMgbWFrZUVuc2VtYmxlUHJlZGljdChtb2RlbExpc3QsIHNhbXBsZXMsIG51bVNhbXBsZXM9MSl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIGYgPSB0aGlzLkYsIGwgPSB0aGlzLkw7XG4gICAgICAgIHRoaXMuSHlwZXJQYXJhbWV0ZXJzLkRhdGFzaXplID0gbnVtU2FtcGxlcztcbiAgICAgICAgY29uc3QgUGlwZWxpbmUgPSBmLnBhcmFtZXRlckFjcXVpc2l0aW9uKHRoaXMuQmFzZVBpcGVsaW5lLCB0aGlzLkh5cGVyUGFyYW1ldGVycyk7XG4gICAgICAgIGxldCBwaXBlVmFsdWUgPSB7UGlwZUlucHV0OiBzYW1wbGVzfSwgdHJhY2VzID0gW10sIG5ldFBhcmFtcyA9IHRoaXMubmV0UGFyYW1zO1xuICAgICAgICBsZXQgcHJvYnMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBtb2RlbExpc3Qpe1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUGFyYW1zKG1vZGVsKTtcbiAgICAgICAgICAgIGxldCB7bG9nUHJvYn0gPSBULnRpZHkoKCk9PntcbiAgICAgICAgICAgICAgICBmb3IobGV0IGxheWVyIG9mIFBpcGVsaW5lKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxheWVyT3V0cHV0ID0gdGhpcy5sYXllcihwaXBlVmFsdWVbbGF5ZXIuSW5wdXRdLCBsYXllciwgbmV0UGFyYW1zW2xheWVyLk5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgcGlwZVZhbHVlW2xheWVyLk5hbWVdID0gbGF5ZXJPdXRwdXRbbGF5ZXIuTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHRyYWNlcy5wdXNoKHtbbGF5ZXIuTmFtZV06IGxheWVyT3V0cHV0LnRyYWNlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHt0cmFjZXN9KTtcbiAgICAgICAgICAgICAgICBsZXQgcGlwZU91dHB1dCA9IHBpcGVWYWx1ZVsnUGlwZU91dHB1dCddO1xuICAgICAgICAgICAgICAgIGxldCBsb2dQcm9iID0gcGlwZU91dHB1dC5zdWIoVC5sb2dTdW1FeHAocGlwZU91dHB1dCwgMSwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIGxldCBwcmVkaWN0ID0gbG9nUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtsb2dQcm9iLCBwcmVkaWN0fTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbG9nUHJvYi5wcmludCgpO1xuICAgICAgICAgICAgcHJvYnMucHVzaChULmV4cChsb2dQcm9iKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1lYW5Qcm9iID0gVC5jb25jYXQocHJvYnMpLm1lYW4oMCwgdHJ1ZSk7XG4gICAgICAgIG1lYW5Qcm9iLnByaW50KCk7XG4gICAgICAgIGxldCBlbnNlbWJsZVByZWRpY3QgPSBtZWFuUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgIHJldHVybiB7cHJlZGljdDplbnNlbWJsZVByZWRpY3R9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBFbnNlbWJsZU1peGluczsiLCJpbXBvcnQge0Z1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBCYXNlRnVuY3Rpb257XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpc1RlbnNvcih2YWwpe1xuICAgICAgICAvLyByZXR1cm4gdmFsIGluc3RhbmNlb2YgdGhpcyYmIFxuICAgICAgICByZXR1cm4gdmFsLnNoYXBlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJhbmdlKGxlbil7XG4gICAgICAgIHJldHVybiB0aGlzLlIucmFuZ2UoMCwgbGVuKTtcbiAgICB9XG5cbiAgICBpc1BhcmFtZXRlcih2YWwpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5pcyhBcnJheSkodmFsKSAmJiBSLmFsbChSLmlzKE51bWJlciksIHZhbCk7XG4gICAgfVxuXG4gICAgZ2V0UGlwZWxpbmUobmV0Q29uZmlnKXtcbiAgICAgICAgLy9UT0RPOiBtYWtlIGFzc2VydG9yXG4gICAgICAgIHJldHVybiB0aGlzLlIucHJvcCgnUGlwZWxpbmUnLCBuZXRDb25maWcpO1xuICAgIH1cbiAgICBcbiAgICBnZXRIeXBlclBhcmFtZXRlcihuZXRDb25maWcpe1xuICAgICAgICAvL1RPRE86IG1ha2UgYXNzZXJ0b3JcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5wcm9wKCdIeXBlclBhcmFtZXRlcnMnLCBuZXRDb25maWcpO1xuICAgIH1cbiAgICBcbiAgICBnZXRUcmF2ZXJzZSgpe1xuICAgICAgICByZXR1cm4gUi5jdXJyeShmdW5jdGlvbihrZXlzLCBpdGVtKXtcbiAgICAgICAgICAgIFIucGlwZS5hcHBseShudWxsLCBSLm1hcChSLnByb3AsIGtleXMpKShpdGVtKTtcbiAgICAgICAgfSk7IFxuICAgIH1cbiAgICBcbiAgICBwYXJhbWV0ZXJBY3F1aXNpdGlvbihwaXBlbGluZUl0ZW0sIGh5cGVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7IFxuICAgICAgICBmdW5jdGlvbiByZXBsYWNlSWZNYXRjaCh2YWx1ZSwgaHlwZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIGlmKFIuaXMoU3RyaW5nLCB2YWx1ZSkgJiYgUi5zdGFydHNXaXRoKCckJywgdmFsdWUpKXtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBSLnNsaWNlKDEsIEluZmluaXR5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFIucHJvcChrZXksIGh5cGVyUGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZG9SZXBsYWNlSWZNYXRjaCA9IFIuY3VycnkocmVwbGFjZUlmTWF0Y2gpKFIuX18sIGh5cGVyUGFyYW1ldGVycyk7XG4gICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VIeXBlclBhcmFtZXRlcihwaXBlbGluZUl0ZW0pe1xuICAgICAgICAgICAgaWYoUi5pcyhBcnJheSwgcGlwZWxpbmVJdGVtKSB8fCBSLmlzKE9iamVjdCwgcGlwZWxpbmVJdGVtKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFIubWFwKHJlcGxhY2VIeXBlclBhcmFtZXRlciwgcGlwZWxpbmVJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvUmVwbGFjZUlmTWF0Y2gocGlwZWxpbmVJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVwbGFjZUh5cGVyUGFyYW1ldGVyKHBpcGVsaW5lSXRlbSk7XG4gICAgfVxuXG4gICAgaXNUZW5zb3Iob2JqZWN0KXtcbiAgICAgICAgcmV0dXJuIG9iamVjdC5zaXplICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnNoYXBlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmR0eXBlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIExvZyBmcm9tIFwiY2F1c2FsLW5ldC5sb2dcIjtcbmV4cG9ydCBkZWZhdWx0IExvZzsiLCJpbXBvcnQgKiBhcyBNZW1DYWNoZSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmV4cG9ydCBkZWZhdWx0IE1lbUNhY2hlOyIsImltcG9ydCAqIGFzIFN0b3JhZ2UgZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmV4cG9ydCBkZWZhdWx0IFN0b3JhZ2U7IiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5leHBvcnQgZGVmYXVsdCBVdGlsczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfZGF0YXNldHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=