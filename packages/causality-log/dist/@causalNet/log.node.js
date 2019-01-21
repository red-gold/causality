(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/log"] = factory(require("causal-net.utils"));
	else
		root["@causalNet/log"] = factory(root["causal-net.utils"]);
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

    progress(processMessage) {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9wcmV0dHlKc29uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2cuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQmFzZUxvZyIsImNvbnN0cnVjdG9yIiwicHJlZml4IiwiSnNvblZpZXciLCJKU09ORGlzcGxheSIsImpzb24iLCJvcGVuTGV2ZWxzQXJnIiwic3R5bGVPcHRpb25zQXJnIiwiREVGQVVMVF9TVFlMRV9PUFRJT05TIiwicm9vdCIsInRhZyIsInN0eWxlIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZSIsInRpdGxlVGV4dCIsIm9wZW5CdXR0b24iLCJjb250ZW50c0NvbnRhaW5lciIsImtleVZhbHVlUGFpciIsImtleSIsInN5bWJvbFZhbHVlIiwic3RyaW5nVmFsdWUiLCJudW1iZXJWYWx1ZSIsImJvb2xlYW5WYWx1ZSIsIm51bGxWYWx1ZSIsIm9wZW5MZXZlbHMiLCJpc05hTiIsInBhcnNlSW50IiwiSW5maW5pdHkiLCJzdHlsZU9wdGlvbnMiLCJtZXJnZVN0eWxlT3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsIlR5cGVFcnJvciIsInRvIiwiaW5kZXgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuZXh0U291cmNlIiwibmV4dEtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJlbmRlciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjc3NUZXh0IiwidW5kZWZpbmVkIiwidm9pZEVsZW1lbnQiLCJnZXRWYWx1ZSIsImFwcGVuZENoaWxkIiwiRGF0ZSIsImRhdGVFbGVtZW50IiwidG9JU09TdHJpbmciLCJub25FeHBhbmRhYmxlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsInRoaXNMZXZlbElzQ2xvc2VkIiwiZ2V0VGl0bGUiLCJjb252ZXJ0SnNvblRvRWxlbWVudHMiLCJuZXh0TGV2ZWxJc0Nsb3NlZCIsImNvbnRhaW5lciIsImdldENvbnRlbnRzQ29udGFpbmVyIiwiZ2V0U3RhbmRhcmRQYWlyIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZm9yRWFjaCIsInN5bWJvbCIsInRvU3RyaW5nIiwib3B0aW9uYWxLZXkiLCJsZXZlbElzQ2xvc2VkIiwiY3VycmVudGx5Q2xvc2VkIiwiY29udGFpbmVyRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRFbGVtZW50IiwidGl0bGVFbGVtZW50IiwiZ2V0T3BlbkJ1dHRvbiIsImdldEtleSIsImNyZWF0ZVRleHROb2RlIiwib25jbGljayIsImZpcnN0Q2hpbGQiLCJvYmplY3RDb250ZW50cyIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsImRpc3BsYXkiLCJ0cmFuc2Zvcm0iLCJidXR0b25FbGVtZW50IiwiaXNDbG9zZWQiLCJ2YWx1ZSIsInBhaXJFbGVtZW50IiwibmFtZSIsImtleUVsZW1lbnQiLCJ2YWx1ZUVsZW1lbnQiLCJudWxsVHlwZSIsImRlZmF1bHRzIiwib3ZlcnJpZGVzIiwibWVyZ2VkIiwiVGVybUxvZyIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkxvZ05vZGVNaXhpbnMiLCJXZWJOb2RlTWl4aW5zIiwiTG9nZ2VyIiwiTG9nQ2xhc3MiLCJjb25uZWN0IiwiY2hhbm5lbCIsImxvZyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwic2Nyb2xsQm90dG9tIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTWVzc2FnZSIsImRvY3VtZW50RWwiLCJib2R5Iiwibm9kZSIsImZyYW1lRWwiLCJsb2dnZXJFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiTElOb2RlcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwianNvbk5vZGUiLCJkYXRlIiwiaW5uZXJIVE1MIiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFB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ckIsQ0FBZjs7QUFDQSxVQUFJbUIsSUFBSSxHQUFHLElBQUkxRSxJQUFKLEVBQVg7QUFDQThELFVBQUksQ0FBQ2EsU0FBTCxHQUFrQixnREFBK0NELElBQUssTUFBdEU7QUFDQVosVUFBSSxDQUFDL0QsV0FBTCxDQUFpQjBFLFFBQWpCO0FBQ0EsV0FBS1QsUUFBTCxDQUFjakUsV0FBZCxDQUEwQitELElBQTFCO0FBQ0EsV0FBS0wsWUFBTDtBQUNBRCxhQUFPLENBQUNGLEdBQVIsQ0FBWSxLQUFLeEcsTUFBTCxDQUFZOEgsSUFBWixDQUFpQixHQUFqQixDQUFaO0FBQ0FwQixhQUFPLENBQUNGLEdBQVIsQ0FBWUMsT0FBWjtBQUNIOztBQTNDb0QsR0FBekQ7O2lCQThDZU4sYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DZiw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2xvZy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VMb2d7XG4gICAgY29uc3RydWN0b3IocHJlZml4PVtdKXtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgfVxufSIsIi8vb3JpZ2luIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbHVjeWdpbGJlcnQvanNvbi1kaXNwbGF5L2Jsb2IvbWFzdGVyL2pzb24tZGlzcGxheS5qc1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IEx1Y3kgR2lsYmVydFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblZpZXd7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgc3RhdGljIEpTT05EaXNwbGF5KGpzb24sIG9wZW5MZXZlbHNBcmcsIHN0eWxlT3B0aW9uc0FyZykge1xuICAgICAgICB2YXIgREVGQVVMVF9TVFlMRV9PUFRJT05TID0ge1xuICAgICAgICAgIHJvb3Q6IHsgdGFnOiAncHJlJywgc3R5bGU6ICdwYWRkaW5nOiA1cHg7IGZvbnQtc2l6ZTogMXJlbTsnIH0sXG4gICAgICAgICAgdGl0bGVDb250YWluZXI6IHsgdGFnOiAnZGl2Jywgc3R5bGU6ICdtYXJnaW4tYm90dG9tOiAzcHg7JyB9LFxuICAgICAgICAgIHRpdGxlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcjsnIH0sXG4gICAgICAgICAgdGl0bGVUZXh0OiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJycgfSxcbiAgICAgICAgICBvcGVuQnV0dG9uOiB7IFxuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luOiAwcHggN3B4IDBweCAycHg7IGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgJ1xuICAgICAgICAgICAgICAgICArICdib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnRzQ29udGFpbmVyOiB7IHRhZzogJ2RpdicsIHN0eWxlOiAncGFkZGluZy1sZWZ0OiAxOHB4OycgfSxcbiAgICAgICAgICBrZXlWYWx1ZVBhaXI6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDJweDsnIH0sXG4gICAgICAgICAga2V5OiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBkYXJrYmx1ZTsnIH0sXG4gICAgICAgICAgc3ltYm9sVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGRhcmtncmVlbjsnIH0sXG4gICAgICAgICAgc3RyaW5nVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGNyaW1zb247JyB9LFxuICAgICAgICAgIG51bWJlclZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgICBib29sZWFuVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICAgIG51bGxWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcGVuTGV2ZWxzID0gaXNOYU4ocGFyc2VJbnQob3BlbkxldmVsc0FyZykpID8gSW5maW5pdHkgOiBwYXJzZUludChvcGVuTGV2ZWxzQXJnKTtcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHR5cGVvZiBzdHlsZU9wdGlvbnNBcmcgPT09ICdvYmplY3QnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXJnZVN0eWxlT3B0aW9ucyhERUZBVUxUX1NUWUxFX09QVElPTlMsIHN0eWxlT3B0aW9uc0FyZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogREVGQVVMVF9TVFlMRV9PUFRJT05TO1xuICAgIFxuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAgIFxuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRTb3VyY2UsIG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnJvb3QudGFnKTtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMucm9vdC5zdHlsZTtcbiAgICBcbiAgICAgICAgICBpZiAoanNvbiA9PT0gbnVsbCB8fCBqc29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciB2b2lkRWxlbWVudCA9IGdldFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh2b2lkRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgdmFyIGRhdGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbi50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb24gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YXIgbm9uRXhwYW5kYWJsZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9uRXhwYW5kYWJsZUVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBBcnJheS5pc0FycmF5KGpzb24pID8gJ0FycmF5WycgKyBqc29uLmxlbmd0aCArICddJyA6ICdPYmplY3QnO1xuICAgICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gb3BlbkxldmVscyA8IDE7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGdldFRpdGxlKHRpdGxlLCBudWxsLCB0aGlzTGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgMSkpO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBpbmRleCA+IG9wZW5MZXZlbHM7XG4gICAgICAgICAgdmFyIG5leHRMZXZlbElzQ2xvc2VkID0gaW5kZXggKyAxID4gb3BlbkxldmVscztcbiAgICAgICAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGVudHNDb250YWluZXIodGhpc0xldmVsSXNDbG9zZWQpO1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uW2tleV0pKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnQXJyYXlbJyArIGpzb25ba2V5XS5sZW5ndGggKyAnXScsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gPT09IG51bGwgfHwganNvbltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIG51bGwpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoanNvbltrZXldIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldLnRvSVNPU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdPYmplY3QnLCBrZXksIG5leHRMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGpzb24pLmZvckVhY2goZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoc3ltYm9sLnRvU3RyaW5nKCksIGpzb25bc3ltYm9sXSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0VGl0bGUodGl0bGVUZXh0LCBvcHRpb25hbEtleSwgbGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBjdXJyZW50bHlDbG9zZWQgPSBsZXZlbElzQ2xvc2VkO1xuICAgICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIudGFnKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIuc3R5bGU7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICd0aXRsZUNvbnRhaW5lcicpO1xuICAgICAgICAgIHZhciB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlVGV4dC50YWcpO1xuICAgICAgICAgIHZhciB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZS50YWcpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlLnN0eWxlO1xuICAgICAgICAgIHRleHRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnN0eWxlO1xuICAgIFxuICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZChnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICBpZiAob3B0aW9uYWxLZXkpIHtcbiAgICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGdldEtleShvcHRpb25hbEtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZVRleHQpKTtcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuICAgIFxuICAgICAgICAgIHRpdGxlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wZW5CdXR0b24gPSB0aXRsZUVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBvYmplY3RDb250ZW50cyA9IHRpdGxlRWxlbWVudC5wYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgb2JqZWN0Q29udGVudHMuc3R5bGUuZGlzcGxheSA9IGN1cnJlbnRseUNsb3NlZCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgICBvcGVuQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRseUNsb3NlZCA/ICdyb3RhdGUoOTBkZWcpJyA6ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICAgICAgY3VycmVudGx5Q2xvc2VkID0gIWN1cnJlbnRseUNsb3NlZDtcbiAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm9wZW5CdXR0b24udGFnKTtcbiAgICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi5zdHlsZTtcbiAgICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGxldmVsSXNDbG9zZWQgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRDb250ZW50c0NvbnRhaW5lcihpc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIudGFnKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ2NvbnRlbnRzQ29udGFpbmVyJyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnN0eWxlO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IChpc0Nsb3NlZCA/ICdub25lJyA6ICdibG9jaycpO1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YW5kYXJkUGFpcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHBhaXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnRhZyk7XG4gICAgICAgICAgcGFpckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIuc3R5bGU7XG4gICAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KGtleSkpO1xuICAgICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldFZhbHVlKHZhbHVlKSk7XG4gICAgICAgICAgcmV0dXJuIHBhaXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldEtleShuYW1lKSB7XG4gICAgICAgICAgdmFyIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXkudGFnKTtcbiAgICAgICAgICBrZXlFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5LnN0eWxlO1xuICAgICAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSArICc6ICcpKTtcbiAgICAgICAgICByZXR1cm4ga2V5RWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgIHZhciB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgICAgdmFyIG51bGxUeXBlID0gJ29iamVjdCc7XG4gICAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1wiJyArIHZhbHVlICsgJ1wiJykpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBudWxsVHlwZTpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bGxWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmFsdWVFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIG1lcmdlU3R5bGVPcHRpb25zKGRlZmF1bHRzLCBvdmVycmlkZXMpIHtcbiAgICAgICAgICB2YXIgbWVyZ2VkID0ge307XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBtZXJnZWRba2V5XSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzW2tleV0sIG92ZXJyaWRlc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gcmVuZGVyKCk7XG4gICAgfVxufSIsImltcG9ydCB7ZGVmYXVsdCBhcyBCYXNlTG9nfSBmcm9tICcuL2Jhc2VMb2cnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIExvZ05vZGVNaXhpbnN9IGZyb20gJy4vdGVybUxvZy5taXhpbnMubm9kZSc7XG5pbXBvcnQge2RlZmF1bHQgYXMgV2ViTm9kZU1peGluc30gZnJvbSAnLi90ZXJtTG9nLm1peGlucy53ZWInO1xuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5jbGFzcyBUZXJtTG9nIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlTG9nLCB7J25vZGUnOltMb2dOb2RlTWl4aW5zXSwnd2ViJzpbV2ViTm9kZU1peGluc119KXtcbiAgICBjb25zdHJ1Y3RvcihwcmVmaXgpe1xuICAgICAgICBzdXBlcihwcmVmaXgpO1xuICAgIH1cbn1cbmNvbnN0IExvZ2dlciA9IG5ldyBUZXJtTG9nKCk7XG5leHBvcnQgZGVmYXVsdCBMb2dnZXI7IiwiY29uc3QgTG9nTm9kZU1peGlucyA9IChMb2dDbGFzcyk9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNze1xuICAgIGNvbm5lY3QoY2hhbm5lbCl7XG4gICAgICAgIC8vbm90aGluZ1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBzY3JvbGxCb3R0b20oKXtcbiAgICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICAgIHByb2dyZXNzKHByb2Nlc3NNZXNzYWdlKXtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dOb2RlTWl4aW5zOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBKc29uVmlld30gZnJvbSAnLi9wcmV0dHlKc29uJztcbmNvbnN0IFdlYk5vZGVNaXhpbnMgPSAoTG9nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzc3tcbiAgICBjb25uZWN0KGRvY3VtZW50RWw9bnVsbCl7XG4gICAgICAgIGRvY3VtZW50RWwgPSBkb2N1bWVudEVsfHxkb2N1bWVudC5ib2R5O1xuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gXCJsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XCI7XG4gICAgICAgIGRvY3VtZW50RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbCA9IGRvY3VtZW50RWw7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwgPSBkb2N1bWVudEVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIilbMF07XG4gICAgfVxuICAgIHNjcm9sbEJvdHRvbShlbGVtZW50PW51bGwpe1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLmZyYW1lRWw7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzY29sbCBib3R0b20gJyArIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgZWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIHByb2dyZXNzKHByb2Nlc3NNZXNzYWdlKXtcbiAgICAgICAgLy8gbGV0IG5vZGUgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGk6bnRoLWxhc3Qtb2YtdHlwZSgxKVwiKTtcbiAgICAgICAgbGV0IExJTm9kZXMgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XG4gICAgICAgIGxldCBub2RlID0gTElOb2Rlc1tMSU5vZGVzLmxlbmd0aC0xXTtcbiAgICAgICAgaWYoIW5vZGUgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2dnZXItcHJvZ3Jlc3NcIikpey8vY3JlYXRlIG5ld1xuICAgICAgICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImxvZ2dlci1wcm9ncmVzc1wiKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGpzb25Ob2RlID0gSnNvblZpZXcuSlNPTkRpc3BsYXkocHJvY2Vzc01lc3NhZ2UpO1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICB9XG4gICAgbG9nKG1lc3NhZ2Upe1xuICAgICAgICBpZighdGhpcy5sb2dnZXJFbCB8fCAhdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZCl7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gJ2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlOyc7ICAgICAgIFxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShtZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlZml4LmpvaW4oJy8nKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlYk5vZGVNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9