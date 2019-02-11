(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@tensorflow/tfjs"), require("ramda"));
	else if(typeof define === 'function' && define.amd)
		define(["@tensorflow/tfjs", "ramda"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/core"] = factory(require("@tensorflow/tfjs"), require("ramda"));
	else
		root["@causalNet/core"] = factory(root["@tensorflow/tfjs"], root["ramda"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs__, __WEBPACK_EXTERNAL_MODULE_ramda__) {
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

      Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @tensorflow/tfjs-node */ "@tensorflow/tfjs", 7));
      Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @tensorflow/tfjs-node-gpu */ "@tensorflow/tfjs", 7));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS8uL3NyYy90ZW5zb3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlL2V4dGVybmFsIFwiQHRlbnNvcmZsb3cvdGZqc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS9leHRlcm5hbCBcInJhbWRhXCIiXSwibmFtZXMiOlsiRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIlIiLCJsb2dnZXIiLCJjb25zb2xlIiwiQ29yZUZ1bmN0aW9uIiwiZ2V0SW4iLCJrZXlzIiwiaXRlbSIsImRlZmF1bHRWYWx1ZSIsInBhdGhPciIsInNldEluIiwidmFsdWUiLCJhc3NvY1BhdGgiLCJ2c3RhY2siLCJ2YWxzIiwiaHN0YWNrIiwidnNwbGl0IiwidmFsdWVzIiwiaHNwbGl0IiwiaHNwbGl0RXZlcnkiLCJzcGxpdFNpemUiLCJzcGxpdEV2ZXJ5IiwidnNwbGl0RXZlcnkiLCJ6aXAiLCJwYWlycyIsInVuemlwIiwiZGF0dW0iLCJVbnppcCIsInV6IiwicGFpciIsInJlZHVjZSIsImNhdXNhbE5ldENvcmUiLCJDb3JlVGVuc29yIiwiVGVuc29yIiwidGVuc29yIiwiZnVuY3Rpb24iLCJ0ZiIsInJlcXVpcmUiLCJUIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmUsUUFBTUEsUUFBTixDQUFjO0FBQ3pCQyxl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Ozs7QUNBM0IsOEQ7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoiQGNhdXNhbE5ldC9jb3JlLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanNcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAdGVuc29yZmxvdy90ZmpzXCIsIFwicmFtZGFcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9jb3JlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqc1wiKSwgcmVxdWlyZShcInJhbWRhXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2NvcmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJAdGVuc29yZmxvdy90ZmpzXCJdLCByb290W1wicmFtZGFcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGVuc29yZmxvd190ZmpzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV3T2JqID0ge307XG5cbiAgICBpZiAob2JqICE9IG51bGwpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTtcblxuICAgICAgICAgIGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLlIgPSBSO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgfVxuXG4gICAgZ2V0IENvcmVGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5SO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBnZXRJbihrZXlzLCBpdGVtLCBkZWZhdWx0VmFsdWUpe1xuICAgICAgICByZXR1cm4gUi5wYXRoT3IoZGVmYXVsdFZhbHVlLCBrZXlzLCBpdGVtKTtcbiAgICB9XG4gICAgXG4gICAgc2V0SW4oa2V5cywgdmFsdWUsIGl0ZW0pe1xuICAgICAgICByZXR1cm4gUi5hc3NvY1BhdGgoa2V5cywgdmFsdWUsIGl0ZW0pO1xuICAgIH1cblxuICAgIHZzdGFjayguLi52YWxzKXtcbiAgICAgICAgXG4gICAgfVxuICAgIGhzdGFjayguLi52YWxzKXtcblxuICAgIH1cbiAgICB2c3BsaXQodmFsdWVzKXtcbiAgICAgICAgXG4gICAgfVxuICAgIGhzcGxpdCh2YWx1ZXMpe1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBoc3BsaXRFdmVyeSh2YWx1ZXMsIHNwbGl0U2l6ZSl7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5SLnNwbGl0RXZlcnkoc3BsaXRTaXplLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIHZzcGxpdEV2ZXJ5KHZhbHVlcywgc3BsaXRTaXplKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgemlwKC4uLnBhaXJzKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi56aXAoLi4ucGFpcnMpO1xuICAgIH1cbiAgICB1bnppcChkYXR1bSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFVuemlwID0gKHV6LCBwYWlyKT0+e1xuICAgICAgICAgICAgdXpbMF0gPSBbLi4udXpbMF0sIHBhaXJbMF1dO1xuICAgICAgICAgICAgdXpbMV0gPSBbLi4udXpbMV0sIHBhaXJbMV1dO1xuICAgICAgICAgICAgcmV0dXJuIHV6O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoVW56aXAsW1tdLCBbXV0sZGF0dW0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIFRlbnNvciB9IGZyb20gJy4vdGVuc29yJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRnVuY3Rpb24gfSBmcm9tICcuL2Z1bmN0aW9uJztcbmNvbnN0IGNhdXNhbE5ldENvcmUgPSB7XG4gICAgZ2V0IENvcmVGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKCkuQ29yZUZ1bmN0aW9uOyBcbiAgICB9LFxuICAgIGdldCBDb3JlVGVuc29yKCl7XG4gICAgICAgIHJldHVybiBuZXcgVGVuc29yKCkuQ29yZVRlbnNvcjsgXG4gICAgfSxcbiAgICBnZXQgdGVuc29yKCl7XG4gICAgICAgIHJldHVybiBuZXcgVGVuc29yKCk7XG4gICAgfSxcbiAgICBnZXQgZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbigpO1xuICAgIH1cbn07XG5leHBvcnQgeyBUZW5zb3IsIEZ1bmN0aW9uLCBjYXVzYWxOZXRDb3JlIH07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUZW5zb3J7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdmFyIHRmID0gcmVxdWlyZSgnQHRlbnNvcmZsb3cvdGZqcycpO1xuICAgICAgICBpbXBvcnQoJ0B0ZW5zb3JmbG93L3RmanMtbm9kZScpO1xuICAgICAgICBpbXBvcnQoJ0B0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHUnKTtcbiAgICAgICAgdGhpcy5UID0gdGY7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG4gICAgZ2V0IENvcmVUZW5zb3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuVDtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X3RmanNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXzsiXSwic291cmNlUm9vdCI6IiJ9