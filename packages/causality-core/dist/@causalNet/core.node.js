(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@tensorflow/tfjs"), require("@tensorflow/tfjs-node"), require("@tensorflow/tfjs-node-gpu"), require("ramda"));
	else if(typeof define === 'function' && define.amd)
		define(["@tensorflow/tfjs", "@tensorflow/tfjs-node", "@tensorflow/tfjs-node-gpu", "ramda"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/core"] = factory(require("@tensorflow/tfjs"), require("@tensorflow/tfjs-node"), require("@tensorflow/tfjs-node-gpu"), require("ramda"));
	else
		root["@causalNet/core"] = factory(root["@tensorflow/tfjs"], root["@tensorflow/tfjs-node"], root["@tensorflow/tfjs-node-gpu"], root["ramda"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs__, __WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs_node__, __WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs_node_gpu__, __WEBPACK_EXTERNAL_MODULE_ramda__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
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
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"@causalNet/core": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = this["webpackJsonp_causalNet_core"] = this["webpackJsonp_causalNet_core"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
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

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!********************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \********************************************************************************************************/
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

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ramda */ "ramda")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, R) {
  "use strict";

  var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  R = _interopRequireWildcard(R);

  class Function {
    constructor() {
      this.R = R;
      this.logger = console;
    }

    get CoreFunction() {
      return this.R;
    }

    getIn(keys, item, defaultValue) {
      return R.pathOr(defaultValue, keys, item);
    }

    setIn(keys, value, item) {
      return R.assocPath(keys, value, item);
    }

    vstack(...vals) {}

    hstack(...vals) {}

    vsplit(values) {}

    hsplit(values) {
      return null;
    }

    hsplitEvery(values, splitSize) {
      return this.R.splitEvery(splitSize, values);
    }

    vsplitEvery(values, splitSize) {
      return null;
    }

    zip(...pairs) {
      return this.R.zip(...pairs);
    }

    unzip(datum) {
      const R = this.R;

      const Unzip = (uz, pair) => {
        uz[0] = [...uz[0], pair[0]];
        uz[1] = [...uz[1], pair[1]];
        return uz;
      };

      return R.reduce(Unzip, [[], []], datum);
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./tensor */ "./src/tensor.js"), __webpack_require__(/*! ./function */ "./src/function.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _tensor, _function) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Tensor", {
    enumerable: true,
    get: function () {
      return _tensor.default;
    }
  });
  Object.defineProperty(_exports, "Function", {
    enumerable: true,
    get: function () {
      return _function.default;
    }
  });
  _exports.causalNetCore = void 0;
  _tensor = _interopRequireDefault(_tensor);
  _function = _interopRequireDefault(_function);
  const causalNetCore = {
    get CoreFunction() {
      return new _function.default().CoreFunction;
    },

    get CoreTensor() {
      return new _tensor.default().CoreTensor;
    },

    get tensor() {
      return new _tensor.default();
    },

    get function() {
      return new _function.default();
    }

  };
  _exports.causalNetCore = causalNetCore;
});

/***/ }),

/***/ "./src/tensor.js":
/*!***********************!*\
  !*** ./src/tensor.js ***!
  \***********************/
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

  class Tensor {
    constructor() {
      var tf = __webpack_require__(/*! @tensorflow/tfjs */ "@tensorflow/tfjs");

      Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @tensorflow/tfjs-node */ "@tensorflow/tfjs-node", 7));
      Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @tensorflow/tfjs-node-gpu */ "@tensorflow/tfjs-node-gpu", 7));
      this.T = tf;
      this.logger = console;
    }

    get CoreTensor() {
      return this.T;
    }

  }

  _exports.default = Tensor;
});

/***/ }),

/***/ "@tensorflow/tfjs":
/*!***********************************!*\
  !*** external "@tensorflow/tfjs" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs__;

/***/ }),

/***/ "@tensorflow/tfjs-node":
/*!****************************************!*\
  !*** external "@tensorflow/tfjs-node" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs_node__;

/***/ }),

/***/ "@tensorflow/tfjs-node-gpu":
/*!********************************************!*\
  !*** external "@tensorflow/tfjs-node-gpu" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs_node_gpu__;

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ramda__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS8uL3NyYy90ZW5zb3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlL2V4dGVybmFsIFwiQHRlbnNvcmZsb3cvdGZqc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS9leHRlcm5hbCBcIkB0ZW5zb3JmbG93L3RmanMtbm9kZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS9leHRlcm5hbCBcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvZXh0ZXJuYWwgXCJyYW1kYVwiIl0sIm5hbWVzIjpbIkZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJSIiwibG9nZ2VyIiwiY29uc29sZSIsIkNvcmVGdW5jdGlvbiIsImdldEluIiwia2V5cyIsIml0ZW0iLCJkZWZhdWx0VmFsdWUiLCJwYXRoT3IiLCJzZXRJbiIsInZhbHVlIiwiYXNzb2NQYXRoIiwidnN0YWNrIiwidmFscyIsImhzdGFjayIsInZzcGxpdCIsInZhbHVlcyIsImhzcGxpdCIsImhzcGxpdEV2ZXJ5Iiwic3BsaXRTaXplIiwic3BsaXRFdmVyeSIsInZzcGxpdEV2ZXJ5IiwiemlwIiwicGFpcnMiLCJ1bnppcCIsImRhdHVtIiwiVW56aXAiLCJ1eiIsInBhaXIiLCJyZWR1Y2UiLCJjYXVzYWxOZXRDb3JlIiwiQ29yZVRlbnNvciIsIlRlbnNvciIsInRlbnNvciIsImZ1bmN0aW9uIiwidGYiLCJyZXF1aXJlIiwiVCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLGtEQUEwQztBQUMxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFB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LGVBQUosR0FBYUQsVUFBcEI7QUFDSCxLQU5pQjs7QUFPbEIsUUFBSUUsTUFBSixHQUFZO0FBQ1IsYUFBTyxJQUFJRCxlQUFKLEVBQVA7QUFDSCxLQVRpQjs7QUFVbEIsUUFBSUUsUUFBSixHQUFjO0FBQ1YsYUFBTyxJQUFJcEMsaUJBQUosRUFBUDtBQUNIOztBQVppQixHQUF0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZlLFFBQU1rQyxNQUFOLENBQVk7QUFDdkJqQyxlQUFXLEdBQUU7QUFDVCxVQUFJb0MsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQWhCOztBQUNBO0FBQ0E7QUFDQSxXQUFLQyxDQUFMLEdBQVNGLEVBQVQ7QUFDQSxXQUFLbEMsTUFBTCxHQUFjQyxPQUFkO0FBQ0g7O0FBQ0QsUUFBSTZCLFVBQUosR0FBZ0I7QUFDWixhQUFPLEtBQUtNLENBQVo7QUFDSDs7QUFWc0I7Ozs7Ozs7Ozs7Ozs7O0FDQTNCLDhEOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6IkBjYXVzYWxOZXQvY29yZS5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqc1wiKSwgcmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanMtbm9kZVwiKSwgcmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAdGVuc29yZmxvdy90ZmpzXCIsIFwiQHRlbnNvcmZsb3cvdGZqcy1ub2RlXCIsIFwiQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdVwiLCBcInJhbWRhXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvY29yZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanNcIiksIHJlcXVpcmUoXCJAdGVuc29yZmxvdy90ZmpzLW5vZGVcIiksIHJlcXVpcmUoXCJAdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1XCIpLCByZXF1aXJlKFwicmFtZGFcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkB0ZW5zb3JmbG93L3RmanNcIl0sIHJvb3RbXCJAdGVuc29yZmxvdy90ZmpzLW5vZGVcIl0sIHJvb3RbXCJAdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1XCJdLCByb290W1wicmFtZGFcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGVuc29yZmxvd190ZmpzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19ub2RlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19ub2RlX2dwdV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18pIHtcbnJldHVybiAiLCIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIkBjYXVzYWxOZXQvY29yZVwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB0aGlzW1wid2VicGFja0pzb25wX2NhdXNhbE5ldF9jb3JlXCJdID0gdGhpc1tcIndlYnBhY2tKc29ucF9jYXVzYWxOZXRfY29yZVwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV3T2JqID0ge307XG5cbiAgICBpZiAob2JqICE9IG51bGwpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTtcblxuICAgICAgICAgIGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLlIgPSBSO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgfVxuXG4gICAgZ2V0IENvcmVGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5SO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBnZXRJbihrZXlzLCBpdGVtLCBkZWZhdWx0VmFsdWUpe1xuICAgICAgICByZXR1cm4gUi5wYXRoT3IoZGVmYXVsdFZhbHVlLCBrZXlzLCBpdGVtKTtcbiAgICB9XG4gICAgXG4gICAgc2V0SW4oa2V5cywgdmFsdWUsIGl0ZW0pe1xuICAgICAgICByZXR1cm4gUi5hc3NvY1BhdGgoa2V5cywgdmFsdWUsIGl0ZW0pO1xuICAgIH1cblxuICAgIHZzdGFjayguLi52YWxzKXtcbiAgICAgICAgXG4gICAgfVxuICAgIGhzdGFjayguLi52YWxzKXtcblxuICAgIH1cbiAgICB2c3BsaXQodmFsdWVzKXtcbiAgICAgICAgXG4gICAgfVxuICAgIGhzcGxpdCh2YWx1ZXMpe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBoc3BsaXRFdmVyeSh2YWx1ZXMsIHNwbGl0U2l6ZSl7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5SLnNwbGl0RXZlcnkoc3BsaXRTaXplLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIHZzcGxpdEV2ZXJ5KHZhbHVlcywgc3BsaXRTaXplKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgemlwKC4uLnBhaXJzKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi56aXAoLi4ucGFpcnMpO1xuICAgIH1cbiAgICB1bnppcChkYXR1bSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFVuemlwID0gKHV6LCBwYWlyKT0+e1xuICAgICAgICAgICAgdXpbMF0gPSBbLi4udXpbMF0sIHBhaXJbMF1dO1xuICAgICAgICAgICAgdXpbMV0gPSBbLi4udXpbMV0sIHBhaXJbMV1dO1xuICAgICAgICAgICAgcmV0dXJuIHV6O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoVW56aXAsW1tdLCBbXV0sZGF0dW0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIFRlbnNvciB9IGZyb20gJy4vdGVuc29yJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRnVuY3Rpb24gfSBmcm9tICcuL2Z1bmN0aW9uJztcbmNvbnN0IGNhdXNhbE5ldENvcmUgPSB7XG4gICAgZ2V0IENvcmVGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKCkuQ29yZUZ1bmN0aW9uOyBcbiAgICB9LFxuICAgIGdldCBDb3JlVGVuc29yKCl7XG4gICAgICAgIHJldHVybiBuZXcgVGVuc29yKCkuQ29yZVRlbnNvcjsgXG4gICAgfSxcbiAgICBnZXQgdGVuc29yKCl7XG4gICAgICAgIHJldHVybiBuZXcgVGVuc29yKCk7XG4gICAgfSxcbiAgICBnZXQgZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbigpO1xuICAgIH1cbn07XG5leHBvcnQgeyBUZW5zb3IsIEZ1bmN0aW9uLCBjYXVzYWxOZXRDb3JlIH07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZW5zb3J7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdmFyIHRmID0gcmVxdWlyZSgnQHRlbnNvcmZsb3cvdGZqcycpO1xuICAgICAgICBpbXBvcnQoJ0B0ZW5zb3JmbG93L3RmanMtbm9kZScpO1xuICAgICAgICBpbXBvcnQoJ0B0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHUnKTtcbiAgICAgICAgdGhpcy5UID0gdGY7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG4gICAgZ2V0IENvcmVUZW5zb3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuVDtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X3RmanNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19ub2RlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X3RmanNfbm9kZV9ncHVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXzsiXSwic291cmNlUm9vdCI6IiJ9