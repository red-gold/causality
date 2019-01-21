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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9wcmV0dHlKc29uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2cuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZy5taXhpbnMubm9kZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nLm1peGlucy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQmFzZUxvZyIsImNvbnN0cnVjdG9yIiwicHJlZml4IiwiSnNvblZpZXciLCJKU09ORGlzcGxheSIsImpzb24iLCJvcGVuTGV2ZWxzQXJnIiwic3R5bGVPcHRpb25zQXJnIiwiREVGQVVMVF9TVFlMRV9PUFRJT05TIiwicm9vdCIsInRhZyIsInN0eWxlIiwidGl0bGVDb250YWluZXIiLCJ0aXRsZSIsInRpdGxlVGV4dCIsIm9wZW5CdXR0b24iLCJjb250ZW50c0NvbnRhaW5lciIsImtleVZhbHVlUGFpciIsImtleSIsInN5bWJvbFZhbHVlIiwic3RyaW5nVmFsdWUiLCJudW1iZXJWYWx1ZSIsImJvb2xlYW5WYWx1ZSIsIm51bGxWYWx1ZSIsIm9wZW5MZXZlbHMiLCJpc05hTiIsInBhcnNlSW50IiwiSW5maW5pdHkiLCJzdHlsZU9wdGlvbnMiLCJtZXJnZVN0eWxlT3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInRhcmdldCIsIlR5cGVFcnJvciIsInRvIiwiaW5kZXgiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJuZXh0U291cmNlIiwibmV4dEtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJlbmRlciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjc3NUZXh0IiwidW5kZWZpbmVkIiwidm9pZEVsZW1lbnQiLCJnZXRWYWx1ZSIsImFwcGVuZENoaWxkIiwiRGF0ZSIsImRhdGVFbGVtZW50IiwidG9JU09TdHJpbmciLCJub25FeHBhbmRhYmxlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsInRoaXNMZXZlbElzQ2xvc2VkIiwiZ2V0VGl0bGUiLCJjb252ZXJ0SnNvblRvRWxlbWVudHMiLCJuZXh0TGV2ZWxJc0Nsb3NlZCIsImNvbnRhaW5lciIsImdldENvbnRlbnRzQ29udGFpbmVyIiwiZ2V0U3RhbmRhcmRQYWlyIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZm9yRWFjaCIsInN5bWJvbCIsInRvU3RyaW5nIiwib3B0aW9uYWxLZXkiLCJsZXZlbElzQ2xvc2VkIiwiY3VycmVudGx5Q2xvc2VkIiwiY29udGFpbmVyRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRFbGVtZW50IiwidGl0bGVFbGVtZW50IiwiZ2V0T3BlbkJ1dHRvbiIsImdldEtleSIsImNyZWF0ZVRleHROb2RlIiwib25jbGljayIsImZpcnN0Q2hpbGQiLCJvYmplY3RDb250ZW50cyIsInBhcmVudE5vZGUiLCJuZXh0U2libGluZyIsImRpc3BsYXkiLCJ0cmFuc2Zvcm0iLCJidXR0b25FbGVtZW50IiwiaXNDbG9zZWQiLCJ2YWx1ZSIsInBhaXJFbGVtZW50IiwibmFtZSIsImtleUVsZW1lbnQiLCJ2YWx1ZUVsZW1lbnQiLCJudWxsVHlwZSIsImRlZmF1bHRzIiwib3ZlcnJpZGVzIiwibWVyZ2VkIiwiVGVybUxvZyIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkxvZ05vZGVNaXhpbnMiLCJXZWJOb2RlTWl4aW5zIiwiTG9nZ2VyIiwiTG9nQ2xhc3MiLCJjb25uZWN0IiwiY2hhbm5lbCIsImxvZyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwic2Nyb2xsQm90dG9tIiwicHJvZ3Jlc3MiLCJwcm9jZXNzTWVzc2FnZSIsImRvY3VtZW50RWwiLCJib2R5Iiwibm9kZSIsImZyYW1lRWwiLCJsb2dnZXJFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG9wIiwiTElOb2RlcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwianNvbk5vZGUiLCJkYXRlIiwiaW5uZXJIVE1MIiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFB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ckIsQ0FBZjs7QUFDQSxVQUFJbUIsSUFBSSxHQUFHLElBQUkxRSxJQUFKLEVBQVg7QUFDQThELFVBQUksQ0FBQ2EsU0FBTCxHQUFrQixnREFBK0NELElBQUssTUFBdEU7QUFDQVosVUFBSSxDQUFDL0QsV0FBTCxDQUFpQjBFLFFBQWpCO0FBQ0EsV0FBS1QsUUFBTCxDQUFjakUsV0FBZCxDQUEwQitELElBQTFCO0FBQ0EsV0FBS0wsWUFBTDtBQUNBRCxhQUFPLENBQUNGLEdBQVIsQ0FBWSxLQUFLeEcsTUFBTCxDQUFZOEgsSUFBWixDQUFpQixHQUFqQixDQUFaO0FBQ0FwQixhQUFPLENBQUNGLEdBQVIsQ0FBWUMsT0FBWjtBQUNIOztBQTNDb0QsR0FBekQ7O2lCQThDZU4sYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DZiw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2xvZy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUxvZ3tcbiAgICBjb25zdHJ1Y3RvcihwcmVmaXg9W10pe1xuICAgICAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB9XG59IiwiLy9vcmlnaW4gY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9sdWN5Z2lsYmVydC9qc29uLWRpc3BsYXkvYmxvYi9tYXN0ZXIvanNvbi1kaXNwbGF5LmpzXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgTHVjeSBHaWxiZXJ0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uVmlld3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBzdGF0aWMgSlNPTkRpc3BsYXkoanNvbiwgb3BlbkxldmVsc0FyZywgc3R5bGVPcHRpb25zQXJnKSB7XG4gICAgICAgIHZhciBERUZBVUxUX1NUWUxFX09QVElPTlMgPSB7XG4gICAgICAgICAgcm9vdDogeyB0YWc6ICdwcmUnLCBzdHlsZTogJ3BhZGRpbmc6IDVweDsgZm9udC1zaXplOiAxcmVtOycgfSxcbiAgICAgICAgICB0aXRsZUNvbnRhaW5lcjogeyB0YWc6ICdkaXYnLCBzdHlsZTogJ21hcmdpbi1ib3R0b206IDNweDsnIH0sXG4gICAgICAgICAgdGl0bGU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY3Vyc29yOiBwb2ludGVyOycgfSxcbiAgICAgICAgICB0aXRsZVRleHQ6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnJyB9LFxuICAgICAgICAgIG9wZW5CdXR0b246IHsgXG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW46IDBweCA3cHggMHB4IDJweDsgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyAnXG4gICAgICAgICAgICAgICAgICsgJ2JvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjazsnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudHNDb250YWluZXI6IHsgdGFnOiAnZGl2Jywgc3R5bGU6ICdwYWRkaW5nLWxlZnQ6IDE4cHg7JyB9LFxuICAgICAgICAgIGtleVZhbHVlUGFpcjogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogMnB4OycgfSxcbiAgICAgICAgICBrZXk6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGRhcmtibHVlOycgfSxcbiAgICAgICAgICBzeW1ib2xWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogZGFya2dyZWVuOycgfSxcbiAgICAgICAgICBzdHJpbmdWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogY3JpbXNvbjsnIH0sXG4gICAgICAgICAgbnVtYmVyVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICAgIGJvb2xlYW5WYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgICAgbnVsbFZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9wZW5MZXZlbHMgPSBpc05hTihwYXJzZUludChvcGVuTGV2ZWxzQXJnKSkgPyBJbmZpbml0eSA6IHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpO1xuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0gdHlwZW9mIHN0eWxlT3B0aW9uc0FyZyA9PT0gJ29iamVjdCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1lcmdlU3R5bGVPcHRpb25zKERFRkFVTFRfU1RZTEVfT1BUSU9OUywgc3R5bGVPcHRpb25zQXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBERUZBVUxUX1NUWUxFX09QVElPTlM7XG4gICAgXG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbiA9IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdmFyIHRvID0gT2JqZWN0KHRhcmdldCk7XG4gICAgXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgXG4gICAgICAgICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuZXh0S2V5IGluIG5leHRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMucm9vdC50YWcpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5yb290LnN0eWxlO1xuICAgIFxuICAgICAgICAgIGlmIChqc29uID09PSBudWxsIHx8IGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHZvaWRFbGVtZW50ID0gZ2V0VmFsdWUobnVsbCk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHZvaWRFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpzb24gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICB2YXIgZGF0ZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhciBub25FeHBhbmRhYmxlRWxlbWVudCA9IGdldFZhbHVlKGpzb24pO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub25FeHBhbmRhYmxlRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IEFycmF5LmlzQXJyYXkoanNvbikgPyAnQXJyYXlbJyArIGpzb24ubGVuZ3RoICsgJ10nIDogJ09iamVjdCc7XG4gICAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBvcGVuTGV2ZWxzIDwgMTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUodGl0bGUsIG51bGwsIHRoaXNMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCAxKSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uLCBpbmRleCkge1xuICAgICAgICAgIHZhciB0aGlzTGV2ZWxJc0Nsb3NlZCA9IGluZGV4ID4gb3BlbkxldmVscztcbiAgICAgICAgICB2YXIgbmV4dExldmVsSXNDbG9zZWQgPSBpbmRleCArIDEgPiBvcGVuTGV2ZWxzO1xuICAgICAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250ZW50c0NvbnRhaW5lcih0aGlzTGV2ZWxJc0Nsb3NlZCk7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25ba2V5XSkpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdBcnJheVsnICsganNvbltrZXldLmxlbmd0aCArICddJywga2V5LCBuZXh0TGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGpzb25ba2V5XSA9PT0gbnVsbCB8fCBqc29uW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwgbnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0udG9JU09TdHJpbmcoKSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbltrZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ09iamVjdCcsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoanNvbikuZm9yRWFjaChmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihzeW1ib2wudG9TdHJpbmcoKSwganNvbltzeW1ib2xdKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRUaXRsZSh0aXRsZVRleHQsIG9wdGlvbmFsS2V5LCBsZXZlbElzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRseUNsb3NlZCA9IGxldmVsSXNDbG9zZWQ7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci5zdHlsZTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgICAgICAgdmFyIHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnRhZyk7XG4gICAgICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlLnRhZyk7XG4gICAgICAgICAgdGl0bGVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGUuc3R5bGU7XG4gICAgICAgICAgdGV4dEVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZVRleHQuc3R5bGU7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgIGlmIChvcHRpb25hbEtleSkge1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KG9wdGlvbmFsS2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XG4gICAgXG4gICAgICAgICAgdGl0bGVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3BlbkJ1dHRvbiA9IHRpdGxlRWxlbWVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgdmFyIG9iamVjdENvbnRlbnRzID0gdGl0bGVFbGVtZW50LnBhcmVudE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBvYmplY3RDb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gY3VycmVudGx5Q2xvc2VkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgIG9wZW5CdXR0b24uc3R5bGUudHJhbnNmb3JtID0gY3VycmVudGx5Q2xvc2VkID8gJ3JvdGF0ZSg5MGRlZyknIDogJ3JvdGF0ZSgwZGVnKSc7XG4gICAgICAgICAgICBjdXJyZW50bHlDbG9zZWQgPSAhY3VycmVudGx5Q2xvc2VkO1xuICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi50YWcpO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnN0eWxlO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICAgIHJldHVybiBidXR0b25FbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldENvbnRlbnRzQ29udGFpbmVyKGlzQ2xvc2VkKSB7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci50YWcpO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAnY29udGVudHNDb250YWluZXInKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIuc3R5bGU7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gKGlzQ2xvc2VkID8gJ25vbmUnIDogJ2Jsb2NrJyk7XG4gICAgICAgICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhbmRhcmRQYWlyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgcGFpckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIudGFnKTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmtleVZhbHVlUGFpci5zdHlsZTtcbiAgICAgICAgICBwYWlyRWxlbWVudC5hcHBlbmRDaGlsZChnZXRLZXkoa2V5KSk7XG4gICAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VmFsdWUodmFsdWUpKTtcbiAgICAgICAgICByZXR1cm4gcGFpckVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KG5hbWUpIHtcbiAgICAgICAgICB2YXIga2V5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLmtleS50YWcpO1xuICAgICAgICAgIGtleUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXkuc3R5bGU7XG4gICAgICAgICAga2V5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lICsgJzogJykpO1xuICAgICAgICAgIHJldHVybiBrZXlFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgICAgICB2YXIgbnVsbFR5cGUgPSAnb2JqZWN0JztcbiAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXCInICsgdmFsdWUgKyAnXCInKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5ib29sZWFuVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG51bGxUeXBlOlxuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5udWxsVmFsdWUudGFnKTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gbWVyZ2VTdHlsZU9wdGlvbnMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xuICAgICAgICAgIHZhciBtZXJnZWQgPSB7fTtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG1lcmdlZFtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiByZW5kZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0IHtkZWZhdWx0IGFzIEJhc2VMb2d9IGZyb20gJy4vYmFzZUxvZyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgTG9nTm9kZU1peGluc30gZnJvbSAnLi90ZXJtTG9nLm1peGlucy5ub2RlJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBXZWJOb2RlTWl4aW5zfSBmcm9tICcuL3Rlcm1Mb2cubWl4aW5zLndlYic7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNsYXNzIFRlcm1Mb2cgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VMb2csIHsnbm9kZSc6W0xvZ05vZGVNaXhpbnNdLCd3ZWInOltXZWJOb2RlTWl4aW5zXX0pe1xuICAgIGNvbnN0cnVjdG9yKHByZWZpeCl7XG4gICAgICAgIHN1cGVyKHByZWZpeCk7XG4gICAgfVxufVxuY29uc3QgTG9nZ2VyID0gbmV3IFRlcm1Mb2coKTtcbmV4cG9ydCBkZWZhdWx0IExvZ2dlcjsiLCJjb25zdCBMb2dOb2RlTWl4aW5zID0gKExvZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3N7XG4gICAgY29ubmVjdChjaGFubmVsKXtcbiAgICAgICAgLy9ub3RoaW5nXG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxuICAgIHNjcm9sbEJvdHRvbSgpe1xuICAgICAgICAvL25vdGhpbmdcbiAgICB9XG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2Upe1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ05vZGVNaXhpbnM7IiwiaW1wb3J0IHtkZWZhdWx0IGFzIEpzb25WaWV3fSBmcm9tICcuL3ByZXR0eUpzb24nO1xuY29uc3QgV2ViTm9kZU1peGlucyA9IChMb2dDbGFzcyk9PiBjbGFzcyBleHRlbmRzIExvZ0NsYXNze1xuICAgIGNvbm5lY3QoZG9jdW1lbnRFbD1udWxsKXtcbiAgICAgICAgZG9jdW1lbnRFbCA9IGRvY3VtZW50RWx8fGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBcImxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcIjtcbiAgICAgICAgZG9jdW1lbnRFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgdGhpcy5mcmFtZUVsID0gZG9jdW1lbnRFbDtcbiAgICAgICAgdGhpcy5sb2dnZXJFbCA9IGRvY3VtZW50RWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1bFwiKVswXTtcbiAgICB9XG4gICAgc2Nyb2xsQm90dG9tKGVsZW1lbnQ9bnVsbCl7XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuZnJhbWVFbDtcbiAgICAgICAgY29uc29sZS5sb2coJ3Njb2xsIGJvdHRvbSAnICsgZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBlbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9XG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2Upe1xuICAgICAgICAvLyBsZXQgbm9kZSA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaTpudGgtbGFzdC1vZi10eXBlKDEpXCIpO1xuICAgICAgICBsZXQgTElOb2RlcyA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKTtcbiAgICAgICAgbGV0IG5vZGUgPSBMSU5vZGVzW0xJTm9kZXMubGVuZ3RoLTFdO1xuICAgICAgICBpZighbm9kZSB8fCBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlci1wcm9ncmVzc1wiKSl7Ly9jcmVhdGUgbmV3XG4gICAgICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKFwibG9nZ2VyLXByb2dyZXNzXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShwcm9jZXNzTWVzc2FnZSk7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoanNvbk5vZGUpO1xuICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgIH1cbiAgICBsb2cobWVzc2FnZSl7XG4gICAgICAgIGlmKCF0aGlzLmxvZ2dlckVsIHx8ICF0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKXtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSAnYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7JzsgICAgICAgXG4gICAgICAgIGxldCBqc29uTm9kZSA9IEpzb25WaWV3LkpTT05EaXNwbGF5KG1lc3NhZ2UpO1xuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG5vZGUuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyB0ZXh0LWFsaWduOnJpZ2h0XCI+JHtkYXRlfTwvcD5gO1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICAgICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgdGhpcy5zY3JvbGxCb3R0b20oKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVmaXguam9pbignLycpKTtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2ViTm9kZU1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=