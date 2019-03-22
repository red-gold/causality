(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@tensorflow/tfjs"), require("@tensorflow/tfjs-node"), require("@tensorflow/tfjs-node-gpu"), require("levelup"), require("ramda"));
	else if(typeof define === 'function' && define.amd)
		define(["@tensorflow/tfjs", "@tensorflow/tfjs-node", "@tensorflow/tfjs-node-gpu", "levelup", "ramda"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/core"] = factory(require("@tensorflow/tfjs"), require("@tensorflow/tfjs-node"), require("@tensorflow/tfjs-node-gpu"), require("levelup"), require("ramda"));
	else
		root["@causalNet/core"] = factory(root["@tensorflow/tfjs"], root["@tensorflow/tfjs-node"], root["@tensorflow/tfjs-node-gpu"], root["levelup"], root["ramda"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs__, __WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs_node__, __WEBPACK_EXTERNAL_MODULE__tensorflow_tfjs_node_gpu__, __WEBPACK_EXTERNAL_MODULE_levelup__, __WEBPACK_EXTERNAL_MODULE_ramda__) {
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

  get CoreFunction() {
    return this.F.CoreFunction;
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

    __webpack_require__(/*! @tensorflow/tfjs-node */ "@tensorflow/tfjs-node");

    __webpack_require__(/*! @tensorflow/tfjs-node-gpu */ "@tensorflow/tfjs-node-gpu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvY2F1c2FsTmV0Q29yZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvZnVuY3Rvci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS8uL3NyYy90ZW5zb3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlL2V4dGVybmFsIFwiQHRlbnNvcmZsb3cvdGZqc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS9leHRlcm5hbCBcIkB0ZW5zb3JmbG93L3RmanMtbm9kZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS9leHRlcm5hbCBcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvZXh0ZXJuYWwgXCJsZXZlbHVwXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlL2V4dGVybmFsIFwicmFtZGFcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRDb3JlIiwiY29uc3RydWN0b3IiLCJGIiwiRnVuY3RvciIsIlQiLCJUZW5zb3IiLCJDb3JlRnVuY3Rpb24iLCJDb3JlVGVuc29yIiwiUiIsInJlcXVpcmUiLCJsb2dnZXIiLCJjb25zb2xlIiwiQ29yZUZ1bmN0b3IiLCJnZXRJbiIsImtleXMiLCJpdGVtIiwiZGVmYXVsdFZhbHVlIiwicGF0aE9yIiwic2V0SW4iLCJ2YWx1ZSIsImFzc29jUGF0aCIsInppcCIsInBhaXJzIiwidW56aXAiLCJVbnppcCIsInV6IiwidjEiLCJ2MiIsInJlZHVjZSIsIlN0b3JlIiwibGV2ZWx1cCIsInN0b3JlIiwiY29ubmVjdCIsIkVycm9yIiwiZ2V0SXRlbSIsImtleSIsImFzQnVmZmVyIiwibm9FcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwiZXJyIiwiZGF0YSIsImRlYnVnIiwic2V0SXRlbSIsInB1dCIsImRlbEl0ZW0iLCJkZWwiLCJtYWtlQ2hlY2tJdGVtTmFtZUZuIiwicGF0dGVybiIsInJlZ2V4IiwiUmVnRXhwIiwiZmlsZU5hbWUiLCJtYXRjaCIsImdldEl0ZW1MaXN0IiwibmFtZVByZWZpeCIsIk5hbWVUZXN0ZXIiLCJmaWxlTGlzdCIsImNyZWF0ZUtleVN0cmVhbSIsIm9uIiwidG9TdHJpbmciLCJsZW5ndGgiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFD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bkQsTUFBTixDQUFZO0FBQ3ZCSixhQUFXLEdBQUU7QUFDVCxTQUFLRyxDQUFMLEdBQVNLLG1CQUFPLENBQUMsMENBQUQsQ0FBaEI7O0FBQ0FBLHVCQUFPLENBQUMsb0RBQUQsQ0FBUDs7QUFDQUEsdUJBQU8sQ0FBQyw0REFBRCxDQUFQOztBQUNBLFNBQUtDLE1BQUwsR0FBY0MsT0FBZDtBQUNIO0FBQ0Q7Ozs7Ozs7QUFLQSxNQUFJSixVQUFKLEdBQWdCO0FBQ1osV0FBTyxLQUFLSCxDQUFaO0FBQ0g7O0FBZHNCLEM7Ozs7Ozs7Ozs7O0FDTDNCLDhEOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6IkBjYXVzYWxOZXQvY29yZS5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqc1wiKSwgcmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanMtbm9kZVwiKSwgcmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIiksIHJlcXVpcmUoXCJsZXZlbHVwXCIpLCByZXF1aXJlKFwicmFtZGFcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQHRlbnNvcmZsb3cvdGZqc1wiLCBcIkB0ZW5zb3JmbG93L3RmanMtbm9kZVwiLCBcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIiwgXCJsZXZlbHVwXCIsIFwicmFtZGFcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9jb3JlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqc1wiKSwgcmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanMtbm9kZVwiKSwgcmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIiksIHJlcXVpcmUoXCJsZXZlbHVwXCIpLCByZXF1aXJlKFwicmFtZGFcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkB0ZW5zb3JmbG93L3RmanNcIl0sIHJvb3RbXCJAdGVuc29yZmxvdy90ZmpzLW5vZGVcIl0sIHJvb3RbXCJAdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1XCJdLCByb290W1wibGV2ZWx1cFwiXSwgcm9vdFtcInJhbWRhXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X3RmanNfbm9kZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X3RmanNfbm9kZV9ncHVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sZXZlbHVwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBUZW5zb3IgfSBmcm9tICcuL3RlbnNvcic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuLyoqXG4gKiBUaGlzIGNsYXNzIENhdXNhbE5ldENvcmUgcHJvdmlkZSBhY2Nlc3MgdG8gY29yZSBmdW5jdGlvbiBhbmQgY29yZSB0ZW5zb3JcbiAqXG4gKiBAY2xhc3MgQ2F1c2FsTmV0Q29yZVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NvcmUuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldENvcmV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0b3IoKTtcbiAgICAgICAgdGhpcy5UID0gbmV3IFRlbnNvcigpO1xuICAgIH1cbiAgICBnZXQgQ29yZUZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLkYuQ29yZUZ1bmN0aW9uOyBcbiAgICB9XG5cbiAgICBnZXQgQ29yZVRlbnNvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5ULkNvcmVUZW5zb3I7IFxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRDb3JlKCk7IiwiLyoqXG4gKiBjbGFzcyBGdW5jdG9yIGlzIHRoZSBwcmltaXRpdmUgY2xhc3MgZm9yIGNvbXBvc2luZyBoaWdoZXIgY2xhc3MuXG4gKiBUaGlzIGNsYXNzIHdyYXAgW1JhbWRhXShodHRwczovL3JhbWRhanMuY29tLykgZm9yIHByb3ZpZGluZyBGdW5jdGlvbmFsIHByb2dyYW1taW5nIHN0eWxlIG1ldGhvZC5cbiAqIEBjbGFzcyBGdW5jdG9yXG4gKi9cbmNsYXNzIEZ1bmN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZSB7IE9iamVjdCB9IFJhbWRhIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLlIgPSByZXF1aXJlKCdyYW1kYScpO1xuICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGUgeyBMb2dnZXIgfSBsb2dnZXIgICBcbiAgICAgICAgICovICAgICAgICBcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm4gY29yZSBSYW1kYSBpbnN0YW5jZVxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBGdW5jdG9yXG4gICAgICovXG4gICAgZ2V0IENvcmVGdW5jdG9yKCl7XG4gICAgICAgIHJldHVybiB0aGlzLlI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBrZXlzXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gaXRlbVxuICAgICAqIEBwYXJhbSB7IEFueSB9IGRlZmF1bHRWYWx1ZSAtIHJldHVybiB2YWx1ZSBpbiBjYXNlIG9mIG5vdCBmb3VuZFxuICAgICAqIEByZXR1cm5zIHsgQW55IH0gcmV0dXJuIGZvdW5kIHZhbHVlIG9yIGRlZmF1bHRWYWx1ZVxuICAgICAqIEBtZW1iZXJvZiBGdW5jdG9yXG4gICAgICovXG4gICAgZ2V0SW4oa2V5cywgaXRlbSwgZGVmYXVsdFZhbHVlKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5wYXRoT3IoZGVmYXVsdFZhbHVlLCBrZXlzLCBpdGVtKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGludG8gb2JqZWN0IGJ5IHRoZSBrZXlzIGxpc3RcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IGtleXNcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGl0ZW0gLSBpdGVtIHRvIHNldFxuICAgICAqIEByZXR1cm5zIHsgQW55IH0gcmV0dXJuIGZvdW5kIHZhbHVlIG9yIGRlZmF1bHRWYWx1ZVxuICAgICAqIEBtZW1iZXJvZiBGdW5jdG9yXG4gICAgICovXG4gICAgc2V0SW4oa2V5cywgdmFsdWUsIGl0ZW0pe1xuICAgICAgICByZXR1cm4gdGhpcy5SLmFzc29jUGF0aChrZXlzLCB2YWx1ZSwgaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogemlwIHR3byBhcnJheVxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gcGFpcnMgLSB0d28gYXJyYXlzIHRvIHppcFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBhcnJheSBhZnRlciB6aXBcbiAgICAgKiBAbWVtYmVyb2YgRnVuY3RvclxuICAgICAqL1xuICAgIHppcCguLi5wYWlycyl7XG4gICAgICAgIHJldHVybiB0aGlzLlIuemlwKC4uLnBhaXJzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW56aXAgYXJyYXkgb2YgcGFpcnMgdG8gdHdvIGFycmF5c1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gcGFpcnMgLSBhcnJheSBvZiBwYWlycyB0byB1bnppcFxuICAgICAqIEByZXR1cm5zIHsgW0FycmF5MSwgQXJyYXkyXSB9IC0gdHdvIGFycmF5cyBcbiAgICAgKiBAbWVtYmVyb2YgRnVuY3RvclxuICAgICAqL1xuICAgIHVuemlwKHBhaXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVW56aXAgPSAodXosIFt2MSwgdjJdKT0+e1xuICAgICAgICAgICAgdXpbMF0gPSBbLi4udXpbMF0sIHYxXTtcbiAgICAgICAgICAgIHV6WzFdID0gWy4uLnV6WzFdLCB2Ml07XG4gICAgICAgICAgICByZXR1cm4gdXo7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSLnJlZHVjZShVbnppcCxbW10sIFtdXSxwYWlycyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGdW5jdG9yOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVGVuc29yIH0gZnJvbSAnLi90ZW5zb3InO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0Q29yZSB9IGZyb20gJy4vY2F1c2FsTmV0Q29yZSc7XG5cbiIsIi8qKlxuICogY2xhc3MgU3RvcmUgaXMgdGhlIHByaW1pdGl2ZSBjbGFzcyBmb3IgY29tcG9zaW5nIGhpZ2hlciBzdG9yZSBjbGFzcy5cbiAqIFRoaXMgY2xhc3Mgd3JhcCBbbGV2ZWx1cF0oaHR0cHM6Ly93d3cudGVuc29yZmxvdy5vcmcvanMpIFxuICogZm9yIGNvbm5lY3Qgd2l0aCBhYnN0cmFjdC1sZXZlbGRvd24gY29tcGxpYW50IHN0b3Jlcy5cbiAqIEBjbGFzcyBTdG9yZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmxldmVsdXAgPSByZXF1aXJlKCdsZXZlbHVwJyk7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBudWxsO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGNvbm5lY3QoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBpdGVtIGdpdmVuIHRoZSBrZXlcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBrZXkgLSBrZXkgbmFtZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FzQnVmZmVyPWZhbHNlXSAtIHJldHVybiBvYmplY3Qgb3IgYnVmZmVyIGFycmF5LCBkZWZhdWx0IG9iamVjdFxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gaXRlbSBvYmplY3QgXG4gICAgICogQG1lbWJlcm9mIE1lbW9yeUNhY2hlXG4gICAgICovXG4gICAgYXN5bmMgZ2V0SXRlbShrZXksIGFzQnVmZmVyPWZhbHNlLCBub0Vycm9yPWZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMuc3RvcmUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0b3JlIGlzIG5vdCBjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmdldChrZXksIHthc0J1ZmZlcn0sIChlcnIsIGRhdGEpPT57XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgaWYobm9FcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtba2V5XTogbnVsbH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7a2V5LCBlcnJ9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgnZXJyb3IgcmVhZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1trZXldOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgbmV3IGl0ZW0gd2l0aCB0aGUgZ2l2ZW4ga2V5IGFuZCB2YWx1ZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IGtleSAtIGtleSBuYW1lIG9mIGl0ZW1cbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBkYXRhIC0gdmFsdWUgb2YgaXRlbVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9IC0gbmV3IGtleSBwcm9taXNlXG4gICAgICogQG1lbWJlcm9mIE1lbW9yeUNhY2hlXG4gICAgICovXG4gICAgYXN5bmMgc2V0SXRlbShrZXksIGRhdGEsIG5vRXJyb3I9ZmFsc2Upe1xuICAgICAgICBpZighdGhpcy5zdG9yZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc3RvcmUgaXMgbm90IGNvbm5lY3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucHV0KGtleSwgZGF0YSwgKGVycik9PntcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICBpZihub0Vycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1trZXldOiBudWxsfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtrZXksIGVycn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdlcnJvciB3cml0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1trZXldOiBkYXRhfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGUgaXRlbSBnaXZlbiB0aGUgaXRlbSBrZXlcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBrZXkgLSBrZXkgbmFtZSB0byBkZWxldGVcbiAgICAgKiBAcmV0dXJucyB7IFByb21pc2UgfSBkZWxldGVkIGtleSBwcm9taXNlXG4gICAgICogQG1lbWJlcm9mIE1lbW9yeUNhY2hlXG4gICAgICovXG4gICAgYXN5bmMgZGVsSXRlbShrZXksIG5vRXJyb3I9ZmFsc2Upe1xuICAgICAgICBpZighdGhpcy5zdG9yZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc3RvcmUgaXMgbm90IGNvbm5lY3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGVsKGtleSwgKGVycik9PntcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICBpZihub0Vycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoYGVycm9yIGRlbGV0ZSAke2tleX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYWtlIG5hbWUgbWFjaGluZyBmdW5jdGlvbiBiYXNlZCBvbiBwcmVmaXggcGF0aFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IHBhdHRlcm4gLSBwcmVmaXggbmFtZVxuICAgICAqIEByZXR1cm5zIHsgRnVuY3Rpb24gfSBuYW1lIG1hdGNoaW5nIGZ1bmN0aW9uXG4gICAgICogQG1lbWJlcm9mIE1lbW9yeUNhY2hlXG4gICAgICovXG4gICAgbWFrZUNoZWNrSXRlbU5hbWVGbihwYXR0ZXJuKXtcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChgJHtwYXR0ZXJufS4qYCwnZycpO1xuICAgICAgICByZXR1cm4gKGZpbGVOYW1lKT0+ZmlsZU5hbWUubWF0Y2gocmVnZXgpIHx8IFtdO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgaXRlbXMgdW5kZXIgdGhlIHByZWZpeCBwYXRoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbmFtZVByZWZpeFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBsaXN0IG9mIGl0ZW0gbmFtZXNcbiAgICAgKiBAbWVtYmVyb2YgTWVtb3J5Q2FjaGVcbiAgICAgKi9cbiAgICBhc3luYyBnZXRJdGVtTGlzdChuYW1lUHJlZml4LCBub0Vycm9yPWZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMuc3RvcmUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0b3JlIGlzIG5vdCBjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgTmFtZVRlc3RlciA9IHRoaXMubWFrZUNoZWNrSXRlbU5hbWVGbihuYW1lUHJlZml4KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBsZXQgZmlsZUxpc3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuY3JlYXRlS2V5U3RyZWFtKClcbiAgICAgICAgICAgICAgICAub24oJ2RhdGEnLCAoa2V5KSA9PntcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnRvU3RyaW5nKCd1dGY4Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKE5hbWVUZXN0ZXIoa2V5KS5sZW5ndGg9PT0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdjbG9zZScsICgpID0+IHJlc29sdmUoZmlsZUxpc3QpIClcbiAgICAgICAgICAgICAgICAub24oJ2VuZCcsICAoKSA9PiByZXNvbHZlKGZpbGVMaXN0KSApXG4gICAgICAgICAgICAgICAgLm9uKCdlcnJvcicsIChlcnIpID0+eyBcbiAgICAgICAgICAgICAgICAgICAgaWYobm9FcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbGVMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoIGVyciApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGBlcnJvciBnZXRJdGVtTGlzdCAke25hbWVQcmVmaXh9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8qKlxuICogY2xhc3MgVGVuc29yIGlzIHRoZSBwcmltaXRpdmUgY2xhc3MgZm9yIGNvbXBvc2luZyBoaWdoZXIgY2xhc3MuXG4gKiBUaGlzIGNsYXNzIHdyYXAgW3RlbnNvcmZsb3dqc10oaHR0cHM6Ly93d3cudGVuc29yZmxvdy5vcmcvanMpIGZvciBwcm92aWRpbmcgdGVuc29yIGNhbGN1bGF0aW9uXG4gKiBAY2xhc3MgVGVuc29yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbnNvcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLlQgPSByZXF1aXJlKCdAdGVuc29yZmxvdy90ZmpzJyk7XG4gICAgICAgIHJlcXVpcmUoJ0B0ZW5zb3JmbG93L3RmanMtbm9kZScpO1xuICAgICAgICByZXF1aXJlKCdAdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1Jyk7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJuIHRoZSBjb3JlIHRlbnNvciBpbnN0YW5jZVxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBUZW5zb3JcbiAgICAgKi9cbiAgICBnZXQgQ29yZVRlbnNvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5UO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGVuc29yZmxvd190ZmpzX25vZGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19ub2RlX2dwdV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sZXZlbHVwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX187Il0sInNvdXJjZVJvb3QiOiIifQ==