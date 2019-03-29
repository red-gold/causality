(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@tensorflow/tfjs"), require("levelup"), require("ramda"));
	else if(typeof define === 'function' && define.amd)
		define(["@tensorflow/tfjs", "levelup", "ramda"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/core"] = factory(require("@tensorflow/tfjs"), require("levelup"), require("ramda"));
	else
		root["@causalNet/core"] = factory(root["@tensorflow/tfjs"], root["levelup"], root["ramda"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs__, __WEBPACK_EXTERNAL_MODULE_levelup__, __WEBPACK_EXTERNAL_MODULE_ramda__) {
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

/***/ "./src/causalNetCore.js":
/*!******************************!*\
  !*** ./src/causalNetCore.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tensor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tensor */ "./src/tensor.js");
/* harmony import */ var _functor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functor */ "./src/functor.js");


/**
 * This class CausalNetCore provide access to core function and core tensor
 *
 * @class CausalNetCore
 * @example
 * [EXAMPLE ../examples/core.babel.js]
 */

class CausalNetCore {
  constructor() {
    this.F = new _functor__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.T = new _tensor__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  get CoreFunctor() {
    return this.F.CoreFunctor;
  }

  get CoreTensor() {
    return this.T.CoreTensor;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetCore());

/***/ }),

/***/ "./src/functor.js":
/*!************************!*\
  !*** ./src/functor.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * class Functor is the primitive class for composing higher class.
 * This class wrap [Ramda](https://ramdajs.com/) for providing Functional programming style method.
 * @class Functor
 */
class Functor {
  constructor() {
    /**
     * @private { Object } Ramda instance
     */
    this.R = __webpack_require__(/*! ramda */ "ramda");
    /**
     * @private { Logger } logger   
     */

    this.logger = console;
  }
  /**
   * This method return core Ramda instance
   * @readonly
   * @memberof Functor
   */


  get CoreFunctor() {
    return this.R;
  }
  /**
   *
   * @param { Array } keys
   * @param { Object } item
   * @param { Any } defaultValue - return value in case of not found
   * @returns { Any } return found value or defaultValue
   * @memberof Functor
   */


  getIn(keys, item, defaultValue) {
    return this.R.pathOr(defaultValue, keys, item);
  }
  /**
   * set value into object by the keys list
   * @param { Array } keys
   * @param { Object } value
   * @param { Object } item - item to set
   * @returns { Any } return found value or defaultValue
   * @memberof Functor
   */


  setIn(keys, value, item) {
    return this.R.assocPath(keys, value, item);
  }
  /**
   * zip two array
   * @param { Array } pairs - two arrays to zip
   * @returns { Array } array after zip
   * @memberof Functor
   */


  zip(...pairs) {
    return this.R.zip(...pairs);
  }
  /**
   * Unzip array of pairs to two arrays
   * @param { Array } pairs - array of pairs to unzip
   * @returns { [Array1, Array2] } - two arrays 
   * @memberof Functor
   */


  unzip(pairs) {
    const R = this.R;

    const Unzip = (uz, [v1, v2]) => {
      uz[0] = [...uz[0], v1];
      uz[1] = [...uz[1], v2];
      return uz;
    };

    return R.reduce(Unzip, [[], []], pairs);
  }
  /**
   * Return an array with the given range
   * @param { Array } size - array of pairs to unzip
   * @returns { [Array] } - arrays from [beginAt, ...size]
   * @memberof Functor
   */


  range(size, beginIdx = 0) {
    const R = this.R;
    return R.range(beginIdx, size);
  }

  enumerate(array) {
    const R = this.R;
    return R.addIndex(R.map)((v, i) => [i, v])(array);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Functor);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Tensor, Functor, Store, causalNetCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tensor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tensor */ "./src/tensor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tensor", function() { return _tensor__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _functor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functor */ "./src/functor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Functor", function() { return _functor__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _store__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _causalNetCore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./causalNetCore */ "./src/causalNetCore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetCore", function() { return _causalNetCore__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Store; });
/**
 * class Store is the primitive class for composing higher store class.
 * This class wrap [levelup](https://www.tensorflow.org/js) 
 * for connect with abstract-leveldown compliant stores.
 * @class Store
 */
class Store {
  constructor() {
    this.levelup = __webpack_require__(/*! levelup */ "levelup");
    this.store = null;
    this.logger = console;
  }

  async connect() {
    throw Error('implement required');
  }
  /**
   * Get item given the key
   * @param { String } key - key name
   * @param {boolean} [asBuffer=false] - return object or buffer array, default object
   * @returns { Object } item object 
   * @memberof MemoryCache
   */


  async getItem(key, asBuffer = false, noError = false) {
    if (!this.store) {
      throw Error('store is not connect');
    }

    return new Promise((resolve, reject) => {
      this.store.get(key, {
        asBuffer
      }, (err, data) => {
        if (err) {
          if (noError) {
            resolve({
              [key]: null
            });
          } else {
            this.logger.debug({
              key,
              err
            });
            reject('error read');
          }
        } else {
          resolve({
            [key]: data
          });
        }
      });
    });
  }
  /**
   * Set new item with the given key and value
   * @param { String } key - key name of item
   * @param { Object } data - value of item
   * @returns { Promise } - new key promise
   * @memberof MemoryCache
   */


  async setItem(key, data, noError = false) {
    if (!this.store) {
      throw Error('store is not connect');
    }

    return new Promise((resolve, reject) => {
      this.store.put(key, data, err => {
        if (err) {
          if (noError) {
            resolve({
              [key]: null
            });
          } else {
            this.logger.debug({
              key,
              err
            });
            reject('error write');
          }
        } else {
          resolve({
            [key]: data
          });
        }
      });
    });
  }
  /**
   * Delete item given the item key
   * @param { String } key - key name to delete
   * @returns { Promise } deleted key promise
   * @memberof MemoryCache
   */


  async delItem(key, noError = false) {
    if (!this.store) {
      throw Error('store is not connect');
    }

    return new Promise((resolve, reject) => {
      this.store.del(key, err => {
        if (err) {
          if (noError) {
            resolve(null);
          } else {
            this.logger.debug(err);
            reject(`error delete ${key}`);
          }
        } else {
          resolve(key);
        }
      });
    });
  }
  /**
   * Make name maching function based on prefix path
   * @param { String } pattern - prefix name
   * @returns { Function } name matching function
   * @memberof MemoryCache
   */


  makeCheckItemNameFn(pattern) {
    var regex = new RegExp(`${pattern}.*`, 'g');
    return fileName => fileName.match(regex) || [];
  }
  /**
   * Get the current items under the prefix path
   * @param { String } namePrefix
   * @returns { Array } list of item names
   * @memberof MemoryCache
   */


  async getItemList(namePrefix, noError = false) {
    if (!this.store) {
      throw Error('store is not connect');
    }

    const NameTester = this.makeCheckItemNameFn(namePrefix);
    return new Promise((resolve, reject) => {
      let fileList = [];
      this.store.createKeyStream().on('data', key => {
        key = key.toString('utf8');

        if (NameTester(key).length === 1) {
          fileList.push(key);
        }
      }).on('close', () => resolve(fileList)).on('end', () => resolve(fileList)).on('error', err => {
        if (noError) {
          resolve(fileList);
        } else {
          this.logger.debug(err);
          reject(`error getItemList ${namePrefix}`);
        }
      });
    });
  }

}

/***/ }),

/***/ "./src/tensor.js":
/*!***********************!*\
  !*** ./src/tensor.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tensor; });
/**
 * class Tensor is the primitive class for composing higher class.
 * This class wrap [tensorflowjs](https://www.tensorflow.org/js) for providing tensor calculation
 * @class Tensor
 */
class Tensor {
  constructor() {
    this.T = __webpack_require__(/*! @tensorflow/tfjs */ "@tensorflow/tfjs");

    __webpack_require__(/*! @tensorflow/tfjs-node */ "@tensorflow/tfjs");

    __webpack_require__(/*! @tensorflow/tfjs-node-gpu */ "@tensorflow/tfjs");

    this.logger = console;
  }
  /**
   * This method return the core tensor instance
   * @readonly
   * @memberof Tensor
   */


  get CoreTensor() {
    return this.T;
  }

  isTensor(object) {
    return object instanceof this.T.Tensor;
  }

}

/***/ }),

/***/ "@tensorflow/tfjs":
/*!***********************************!*\
  !*** external "@tensorflow/tfjs" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs__;

/***/ }),

/***/ "levelup":
/*!**************************!*\
  !*** external "levelup" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_levelup__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvY2F1c2FsTmV0Q29yZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvZnVuY3Rvci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS8uL3NyYy90ZW5zb3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlL2V4dGVybmFsIFwiQHRlbnNvcmZsb3cvdGZqc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS9leHRlcm5hbCBcImxldmVsdXBcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvZXh0ZXJuYWwgXCJyYW1kYVwiIl0sIm5hbWVzIjpbIkNhdXNhbE5ldENvcmUiLCJjb25zdHJ1Y3RvciIsIkYiLCJGdW5jdG9yIiwiVCIsIlRlbnNvciIsIkNvcmVGdW5jdG9yIiwiQ29yZVRlbnNvciIsIlIiLCJyZXF1aXJlIiwibG9nZ2VyIiwiY29uc29sZSIsImdldEluIiwia2V5cyIsIml0ZW0iLCJkZWZhdWx0VmFsdWUiLCJwYXRoT3IiLCJzZXRJbiIsInZhbHVlIiwiYXNzb2NQYXRoIiwiemlwIiwicGFpcnMiLCJ1bnppcCIsIlVuemlwIiwidXoiLCJ2MSIsInYyIiwicmVkdWNlIiwicmFuZ2UiLCJzaXplIiwiYmVnaW5JZHgiLCJlbnVtZXJhdGUiLCJhcnJheSIsImFkZEluZGV4IiwibWFwIiwidiIsImkiLCJTdG9yZSIsImxldmVsdXAiLCJzdG9yZSIsImNvbm5lY3QiLCJFcnJvciIsImdldEl0ZW0iLCJrZXkiLCJhc0J1ZmZlciIsIm5vRXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldCIsImVyciIsImRhdGEiLCJkZWJ1ZyIsInNldEl0ZW0iLCJwdXQiLCJkZWxJdGVtIiwiZGVsIiwibWFrZUNoZWNrSXRlbU5hbWVGbiIsInBhdHRlcm4iLCJyZWdleCIsIlJlZ0V4cCIsImZpbGVOYW1lIiwibWF0Y2giLCJnZXRJdGVtTGlzdCIsIm5hbWVQcmVmaXgiLCJOYW1lVGVzdGVyIiwiZmlsZUxpc3QiLCJjcmVhdGVLZXlTdHJlYW0iLCJvbiIsInRvU3RyaW5nIiwibGVuZ3RoIiwicHVzaCIsImlzVGVuc29yIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FB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QUFPLENBQUNtQixRQUFELENBUjdCLEVBU0tFLEVBVEwsQ0FTUSxPQVRSLEVBU2tCbEIsR0FBRCxJQUFRO0FBQ2pCLFlBQUdMLE9BQUgsRUFBVztBQUNQRSxpQkFBTyxDQUFDbUIsUUFBRCxDQUFQO0FBQ0gsU0FGRCxNQUdJO0FBQ0EsZUFBS3hELE1BQUwsQ0FBWTBDLEtBQVosQ0FBbUJGLEdBQW5CO0FBQ0FGLGdCQUFNLENBQUUscUJBQW9CZ0IsVUFBVyxFQUFqQyxDQUFOO0FBQ0g7QUFDSixPQWpCTDtBQWtCSCxLQXBCTSxDQUFQO0FBcUJIOztBQXpJcUIsQzs7Ozs7Ozs7Ozs7O0FDTjFCO0FBQUE7QUFBQTs7Ozs7QUFLZSxNQUFNM0QsTUFBTixDQUFZO0FBQ3ZCSixhQUFXLEdBQUU7QUFDVCxTQUFLRyxDQUFMLEdBQVNLLG1CQUFPLENBQUMsMENBQUQsQ0FBaEI7O0FBQ0FBLHVCQUFPLENBQUMsK0NBQUQsQ0FBUDs7QUFDQUEsdUJBQU8sQ0FBQyxtREFBRCxDQUFQOztBQUNBLFNBQUtDLE1BQUwsR0FBY0MsT0FBZDtBQUNIO0FBQ0Q7Ozs7Ozs7QUFLQSxNQUFJSixVQUFKLEdBQWdCO0FBQ1osV0FBTyxLQUFLSCxDQUFaO0FBQ0g7O0FBRURvRSxVQUFRLENBQUNDLE1BQUQsRUFBUTtBQUNiLFdBQU9BLE1BQU0sWUFBWSxLQUFLckUsQ0FBTCxDQUFPQyxNQUFoQztBQUNGOztBQWxCc0IsQzs7Ozs7Ozs7Ozs7QUNMM0IsOEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoiQGNhdXNhbE5ldC9jb3JlLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanNcIiksIHJlcXVpcmUoXCJsZXZlbHVwXCIpLCByZXF1aXJlKFwicmFtZGFcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQHRlbnNvcmZsb3cvdGZqc1wiLCBcImxldmVsdXBcIiwgXCJyYW1kYVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2NvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGVuc29yZmxvdy90ZmpzXCIpLCByZXF1aXJlKFwibGV2ZWx1cFwiKSwgcmVxdWlyZShcInJhbWRhXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2NvcmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJAdGVuc29yZmxvdy90ZmpzXCJdLCByb290W1wibGV2ZWx1cFwiXSwgcm9vdFtcInJhbWRhXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xldmVsdXBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIFRlbnNvciB9IGZyb20gJy4vdGVuc29yJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRnVuY3RvciB9IGZyb20gJy4vZnVuY3Rvcic7XG4vKipcbiAqIFRoaXMgY2xhc3MgQ2F1c2FsTmV0Q29yZSBwcm92aWRlIGFjY2VzcyB0byBjb3JlIGZ1bmN0aW9uIGFuZCBjb3JlIHRlbnNvclxuICpcbiAqIEBjbGFzcyBDYXVzYWxOZXRDb3JlXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY29yZS5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0Q29yZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLkYgPSBuZXcgRnVuY3RvcigpO1xuICAgICAgICB0aGlzLlQgPSBuZXcgVGVuc29yKCk7XG4gICAgfVxuICAgIGdldCBDb3JlRnVuY3Rvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5GLkNvcmVGdW5jdG9yOyBcbiAgICB9XG5cbiAgICBnZXQgQ29yZVRlbnNvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5ULkNvcmVUZW5zb3I7IFxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRDb3JlKCk7IiwiLyoqXG4gKiBjbGFzcyBGdW5jdG9yIGlzIHRoZSBwcmltaXRpdmUgY2xhc3MgZm9yIGNvbXBvc2luZyBoaWdoZXIgY2xhc3MuXG4gKiBUaGlzIGNsYXNzIHdyYXAgW1JhbWRhXShodHRwczovL3JhbWRhanMuY29tLykgZm9yIHByb3ZpZGluZyBGdW5jdGlvbmFsIHByb2dyYW1taW5nIHN0eWxlIG1ldGhvZC5cbiAqIEBjbGFzcyBGdW5jdG9yXG4gKi9cbmNsYXNzIEZ1bmN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZSB7IE9iamVjdCB9IFJhbWRhIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLlIgPSByZXF1aXJlKCdyYW1kYScpO1xuICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGUgeyBMb2dnZXIgfSBsb2dnZXIgICBcbiAgICAgICAgICovICAgICAgICBcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm4gY29yZSBSYW1kYSBpbnN0YW5jZVxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBGdW5jdG9yXG4gICAgICovXG4gICAgZ2V0IENvcmVGdW5jdG9yKCl7XG4gICAgICAgIHJldHVybiB0aGlzLlI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBrZXlzXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gaXRlbVxuICAgICAqIEBwYXJhbSB7IEFueSB9IGRlZmF1bHRWYWx1ZSAtIHJldHVybiB2YWx1ZSBpbiBjYXNlIG9mIG5vdCBmb3VuZFxuICAgICAqIEByZXR1cm5zIHsgQW55IH0gcmV0dXJuIGZvdW5kIHZhbHVlIG9yIGRlZmF1bHRWYWx1ZVxuICAgICAqIEBtZW1iZXJvZiBGdW5jdG9yXG4gICAgICovXG4gICAgZ2V0SW4oa2V5cywgaXRlbSwgZGVmYXVsdFZhbHVlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5wYXRoT3IoZGVmYXVsdFZhbHVlLCBrZXlzLCBpdGVtKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGludG8gb2JqZWN0IGJ5IHRoZSBrZXlzIGxpc3RcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IGtleXNcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGl0ZW0gLSBpdGVtIHRvIHNldFxuICAgICAqIEByZXR1cm5zIHsgQW55IH0gcmV0dXJuIGZvdW5kIHZhbHVlIG9yIGRlZmF1bHRWYWx1ZVxuICAgICAqIEBtZW1iZXJvZiBGdW5jdG9yXG4gICAgICovXG4gICAgc2V0SW4oa2V5cywgdmFsdWUsIGl0ZW0pe1xuICAgICAgICByZXR1cm4gdGhpcy5SLmFzc29jUGF0aChrZXlzLCB2YWx1ZSwgaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogemlwIHR3byBhcnJheVxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gcGFpcnMgLSB0d28gYXJyYXlzIHRvIHppcFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBhcnJheSBhZnRlciB6aXBcbiAgICAgKiBAbWVtYmVyb2YgRnVuY3RvclxuICAgICAqL1xuICAgIHppcCguLi5wYWlycyl7XG4gICAgICAgIHJldHVybiB0aGlzLlIuemlwKC4uLnBhaXJzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW56aXAgYXJyYXkgb2YgcGFpcnMgdG8gdHdvIGFycmF5c1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gcGFpcnMgLSBhcnJheSBvZiBwYWlycyB0byB1bnppcFxuICAgICAqIEByZXR1cm5zIHsgW0FycmF5MSwgQXJyYXkyXSB9IC0gdHdvIGFycmF5cyBcbiAgICAgKiBAbWVtYmVyb2YgRnVuY3RvclxuICAgICAqL1xuICAgIHVuemlwKHBhaXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVW56aXAgPSAodXosIFt2MSwgdjJdKT0+e1xuICAgICAgICAgICAgdXpbMF0gPSBbLi4udXpbMF0sIHYxXTtcbiAgICAgICAgICAgIHV6WzFdID0gWy4uLnV6WzFdLCB2Ml07XG4gICAgICAgICAgICByZXR1cm4gdXo7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSLnJlZHVjZShVbnppcCxbW10sIFtdXSxwYWlycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIGFycmF5IHdpdGggdGhlIGdpdmVuIHJhbmdlXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBzaXplIC0gYXJyYXkgb2YgcGFpcnMgdG8gdW56aXBcbiAgICAgKiBAcmV0dXJucyB7IFtBcnJheV0gfSAtIGFycmF5cyBmcm9tIFtiZWdpbkF0LCAuLi5zaXplXVxuICAgICAqIEBtZW1iZXJvZiBGdW5jdG9yXG4gICAgICovXG4gICAgcmFuZ2Uoc2l6ZSwgYmVnaW5JZHg9MCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnJhbmdlKGJlZ2luSWR4LCBzaXplKTtcbiAgICB9XG5cbiAgICBlbnVtZXJhdGUoYXJyYXkpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5hZGRJbmRleChSLm1hcCkoKHYsaSk9PihbaSx2XSkpKGFycmF5KTtcbiAgICB9ICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBGdW5jdG9yOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVGVuc29yIH0gZnJvbSAnLi90ZW5zb3InO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0Q29yZSB9IGZyb20gJy4vY2F1c2FsTmV0Q29yZSc7XG5cbiIsIi8qKlxuICogY2xhc3MgU3RvcmUgaXMgdGhlIHByaW1pdGl2ZSBjbGFzcyBmb3IgY29tcG9zaW5nIGhpZ2hlciBzdG9yZSBjbGFzcy5cbiAqIFRoaXMgY2xhc3Mgd3JhcCBbbGV2ZWx1cF0oaHR0cHM6Ly93d3cudGVuc29yZmxvdy5vcmcvanMpIFxuICogZm9yIGNvbm5lY3Qgd2l0aCBhYnN0cmFjdC1sZXZlbGRvd24gY29tcGxpYW50IHN0b3Jlcy5cbiAqIEBjbGFzcyBTdG9yZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmxldmVsdXAgPSByZXF1aXJlKCdsZXZlbHVwJyk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBudWxsO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGNvbm5lY3QoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpdGVtIGdpdmVuIHRoZSBrZXlcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBrZXkgLSBrZXkgbmFtZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FzQnVmZmVyPWZhbHNlXSAtIHJldHVybiBvYmplY3Qgb3IgYnVmZmVyIGFycmF5LCBkZWZhdWx0IG9iamVjdFxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gaXRlbSBvYmplY3QgXG4gICAgICogQG1lbWJlcm9mIE1lbW9yeUNhY2hlXG4gICAgICovXG4gICAgYXN5bmMgZ2V0SXRlbShrZXksIGFzQnVmZmVyPWZhbHNlLCBub0Vycm9yPWZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMuc3RvcmUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0b3JlIGlzIG5vdCBjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmdldChrZXksIHthc0J1ZmZlcn0sIChlcnIsIGRhdGEpPT57XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgaWYobm9FcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtba2V5XTogbnVsbH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7a2V5LCBlcnJ9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgnZXJyb3IgcmVhZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1trZXldOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgbmV3IGl0ZW0gd2l0aCB0aGUgZ2l2ZW4ga2V5IGFuZCB2YWx1ZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IGtleSAtIGtleSBuYW1lIG9mIGl0ZW1cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBkYXRhIC0gdmFsdWUgb2YgaXRlbVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9IC0gbmV3IGtleSBwcm9taXNlXG4gICAgICogQG1lbWJlcm9mIE1lbW9yeUNhY2hlXG4gICAgICovXG4gICAgYXN5bmMgc2V0SXRlbShrZXksIGRhdGEsIG5vRXJyb3I9ZmFsc2Upe1xuICAgICAgICBpZighdGhpcy5zdG9yZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc3RvcmUgaXMgbm90IGNvbm5lY3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucHV0KGtleSwgZGF0YSwgKGVycik9PntcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICBpZihub0Vycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1trZXldOiBudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtrZXksIGVycn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdlcnJvciB3cml0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1trZXldOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGUgaXRlbSBnaXZlbiB0aGUgaXRlbSBrZXlcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBrZXkgLSBrZXkgbmFtZSB0byBkZWxldGVcbiAgICAgKiBAcmV0dXJucyB7IFByb21pc2UgfSBkZWxldGVkIGtleSBwcm9taXNlXG4gICAgICogQG1lbWJlcm9mIE1lbW9yeUNhY2hlXG4gICAgICovXG4gICAgYXN5bmMgZGVsSXRlbShrZXksIG5vRXJyb3I9ZmFsc2Upe1xuICAgICAgICBpZighdGhpcy5zdG9yZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc3RvcmUgaXMgbm90IGNvbm5lY3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGVsKGtleSwgKGVycik9PntcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICBpZihub0Vycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoYGVycm9yIGRlbGV0ZSAke2tleX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYWtlIG5hbWUgbWFjaGluZyBmdW5jdGlvbiBiYXNlZCBvbiBwcmVmaXggcGF0aFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IHBhdHRlcm4gLSBwcmVmaXggbmFtZVxuICAgICAqIEByZXR1cm5zIHsgRnVuY3Rpb24gfSBuYW1lIG1hdGNoaW5nIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlcm9mIE1lbW9yeUNhY2hlXG4gICAgICovXG4gICAgbWFrZUNoZWNrSXRlbU5hbWVGbihwYXR0ZXJuKXtcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChgJHtwYXR0ZXJufS4qYCwnZycpO1xuICAgICAgICByZXR1cm4gKGZpbGVOYW1lKT0+ZmlsZU5hbWUubWF0Y2gocmVnZXgpIHx8IFtdO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgaXRlbXMgdW5kZXIgdGhlIHByZWZpeCBwYXRoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbmFtZVByZWZpeFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBsaXN0IG9mIGl0ZW0gbmFtZXNcbiAgICAgKiBAbWVtYmVyb2YgTWVtb3J5Q2FjaGVcbiAgICAgKi9cbiAgICBhc3luYyBnZXRJdGVtTGlzdChuYW1lUHJlZml4LCBub0Vycm9yPWZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMuc3RvcmUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0b3JlIGlzIG5vdCBjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgTmFtZVRlc3RlciA9IHRoaXMubWFrZUNoZWNrSXRlbU5hbWVGbihuYW1lUHJlZml4KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBsZXQgZmlsZUxpc3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuY3JlYXRlS2V5U3RyZWFtKClcbiAgICAgICAgICAgICAgICAub24oJ2RhdGEnLCAoa2V5KSA9PntcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnRvU3RyaW5nKCd1dGY4Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKE5hbWVUZXN0ZXIoa2V5KS5sZW5ndGg9PT0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdjbG9zZScsICgpID0+IHJlc29sdmUoZmlsZUxpc3QpIClcbiAgICAgICAgICAgICAgICAub24oJ2VuZCcsICAoKSA9PiByZXNvbHZlKGZpbGVMaXN0KSApXG4gICAgICAgICAgICAgICAgLm9uKCdlcnJvcicsIChlcnIpID0+eyBcbiAgICAgICAgICAgICAgICAgICAgaWYobm9FcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbGVMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoIGVyciApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGBlcnJvciBnZXRJdGVtTGlzdCAke25hbWVQcmVmaXh9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8qKlxuICogY2xhc3MgVGVuc29yIGlzIHRoZSBwcmltaXRpdmUgY2xhc3MgZm9yIGNvbXBvc2luZyBoaWdoZXIgY2xhc3MuXG4gKiBUaGlzIGNsYXNzIHdyYXAgW3RlbnNvcmZsb3dqc10oaHR0cHM6Ly93d3cudGVuc29yZmxvdy5vcmcvanMpIGZvciBwcm92aWRpbmcgdGVuc29yIGNhbGN1bGF0aW9uXG4gKiBAY2xhc3MgVGVuc29yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbnNvcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLlQgPSByZXF1aXJlKCdAdGVuc29yZmxvdy90ZmpzJyk7XG4gICAgICAgIHJlcXVpcmUoJ0B0ZW5zb3JmbG93L3RmanMtbm9kZScpO1xuICAgICAgICByZXF1aXJlKCdAdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1Jyk7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJuIHRoZSBjb3JlIHRlbnNvciBpbnN0YW5jZVxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBUZW5zb3JcbiAgICAgKi9cbiAgICBnZXQgQ29yZVRlbnNvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5UO1xuICAgIH1cblxuICAgIGlzVGVuc29yKG9iamVjdCl7XG4gICAgICAgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIHRoaXMuVC5UZW5zb3I7IFxuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sZXZlbHVwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX187Il0sInNvdXJjZVJvb3QiOiIifQ==