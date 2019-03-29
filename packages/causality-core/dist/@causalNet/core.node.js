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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvY2F1c2FsTmV0Q29yZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvZnVuY3Rvci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS8uL3NyYy90ZW5zb3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlL2V4dGVybmFsIFwiQHRlbnNvcmZsb3cvdGZqc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS9leHRlcm5hbCBcIkB0ZW5zb3JmbG93L3RmanMtbm9kZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS9leHRlcm5hbCBcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvZXh0ZXJuYWwgXCJsZXZlbHVwXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlL2V4dGVybmFsIFwicmFtZGFcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRDb3JlIiwiY29uc3RydWN0b3IiLCJGIiwiRnVuY3RvciIsIlQiLCJUZW5zb3IiLCJDb3JlRnVuY3RvciIsIkNvcmVUZW5zb3IiLCJSIiwicmVxdWlyZSIsImxvZ2dlciIsImNvbnNvbGUiLCJnZXRJbiIsImtleXMiLCJpdGVtIiwiZGVmYXVsdFZhbHVlIiwicGF0aE9yIiwic2V0SW4iLCJ2YWx1ZSIsImFzc29jUGF0aCIsInppcCIsInBhaXJzIiwidW56aXAiLCJVbnppcCIsInV6IiwidjEiLCJ2MiIsInJlZHVjZSIsInJhbmdlIiwic2l6ZSIsImJlZ2luSWR4IiwiZW51bWVyYXRlIiwiYXJyYXkiLCJhZGRJbmRleCIsIm1hcCIsInYiLCJpIiwiU3RvcmUiLCJsZXZlbHVwIiwic3RvcmUiLCJjb25uZWN0IiwiRXJyb3IiLCJnZXRJdGVtIiwia2V5IiwiYXNCdWZmZXIiLCJub0Vycm9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJlcnIiLCJkYXRhIiwiZGVidWciLCJzZXRJdGVtIiwicHV0IiwiZGVsSXRlbSIsImRlbCIsIm1ha2VDaGVja0l0ZW1OYW1lRm4iLCJwYXR0ZXJuIiwicmVnZXgiLCJSZWdFeHAiLCJmaWxlTmFtZSIsIm1hdGNoIiwiZ2V0SXRlbUxpc3QiLCJuYW1lUHJlZml4IiwiTmFtZVRlc3RlciIsImZpbGVMaXN0IiwiY3JlYXRlS2V5U3RyZWFtIiwib24iLCJ0b1N0cmluZyIsImxlbmd0aCIsInB1c2giLCJpc1RlbnNvciIsIm9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZE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YnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqc1wiKSwgcmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanMtbm9kZVwiKSwgcmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIiksIHJlcXVpcmUoXCJsZXZlbHVwXCIpLCByZXF1aXJlKFwicmFtZGFcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQHRlbnNvcmZsb3cvdGZqc1wiLCBcIkB0ZW5zb3JmbG93L3RmanMtbm9kZVwiLCBcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIiwgXCJsZXZlbHVwXCIsIFwicmFtZGFcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9jb3JlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqc1wiKSwgcmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanMtbm9kZVwiKSwgcmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIiksIHJlcXVpcmUoXCJsZXZlbHVwXCIpLCByZXF1aXJlKFwicmFtZGFcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkB0ZW5zb3JmbG93L3RmanNcIl0sIHJvb3RbXCJAdGVuc29yZmxvdy90ZmpzLW5vZGVcIl0sIHJvb3RbXCJAdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1XCJdLCByb290W1wibGV2ZWx1cFwiXSwgcm9vdFtcInJhbWRhXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X3RmanNfbm9kZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X3RmanNfbm9kZV9ncHVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sZXZlbHVwX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBUZW5zb3IgfSBmcm9tICcuL3RlbnNvcic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuLyoqXG4gKiBUaGlzIGNsYXNzIENhdXNhbE5ldENvcmUgcHJvdmlkZSBhY2Nlc3MgdG8gY29yZSBmdW5jdGlvbiBhbmQgY29yZSB0ZW5zb3JcbiAqXG4gKiBAY2xhc3MgQ2F1c2FsTmV0Q29yZVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NvcmUuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldENvcmV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0b3IoKTtcbiAgICAgICAgdGhpcy5UID0gbmV3IFRlbnNvcigpO1xuICAgIH1cbiAgICBnZXQgQ29yZUZ1bmN0b3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuRi5Db3JlRnVuY3RvcjsgXG4gICAgfVxuXG4gICAgZ2V0IENvcmVUZW5zb3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuVC5Db3JlVGVuc29yOyBcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0Q29yZSgpOyIsIi8qKlxuICogY2xhc3MgRnVuY3RvciBpcyB0aGUgcHJpbWl0aXZlIGNsYXNzIGZvciBjb21wb3NpbmcgaGlnaGVyIGNsYXNzLlxuICogVGhpcyBjbGFzcyB3cmFwIFtSYW1kYV0oaHR0cHM6Ly9yYW1kYWpzLmNvbS8pIGZvciBwcm92aWRpbmcgRnVuY3Rpb25hbCBwcm9ncmFtbWluZyBzdHlsZSBtZXRob2QuXG4gKiBAY2xhc3MgRnVuY3RvclxuICovXG5jbGFzcyBGdW5jdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGUgeyBPYmplY3QgfSBSYW1kYSBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5SID0gcmVxdWlyZSgncmFtZGEnKTtcbiAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlIHsgTG9nZ2VyIH0gbG9nZ2VyICAgXG4gICAgICAgICAqLyAgICAgICAgXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJuIGNvcmUgUmFtZGEgaW5zdGFuY2VcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgRnVuY3RvclxuICAgICAqL1xuICAgIGdldCBDb3JlRnVuY3Rvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5SO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0ga2V5c1xuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGl0ZW1cbiAgICAgKiBAcGFyYW0geyBBbnkgfSBkZWZhdWx0VmFsdWUgLSByZXR1cm4gdmFsdWUgaW4gY2FzZSBvZiBub3QgZm91bmRcbiAgICAgKiBAcmV0dXJucyB7IEFueSB9IHJldHVybiBmb3VuZCB2YWx1ZSBvciBkZWZhdWx0VmFsdWVcbiAgICAgKiBAbWVtYmVyb2YgRnVuY3RvclxuICAgICAqL1xuICAgIGdldEluKGtleXMsIGl0ZW0sIGRlZmF1bHRWYWx1ZSl7XG4gICAgICAgIHJldHVybiB0aGlzLlIucGF0aE9yKGRlZmF1bHRWYWx1ZSwga2V5cywgaXRlbSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBpbnRvIG9iamVjdCBieSB0aGUga2V5cyBsaXN0XG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBrZXlzXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBpdGVtIC0gaXRlbSB0byBzZXRcbiAgICAgKiBAcmV0dXJucyB7IEFueSB9IHJldHVybiBmb3VuZCB2YWx1ZSBvciBkZWZhdWx0VmFsdWVcbiAgICAgKiBAbWVtYmVyb2YgRnVuY3RvclxuICAgICAqL1xuICAgIHNldEluKGtleXMsIHZhbHVlLCBpdGVtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5hc3NvY1BhdGgoa2V5cywgdmFsdWUsIGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHppcCB0d28gYXJyYXlcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHBhaXJzIC0gdHdvIGFycmF5cyB0byB6aXBcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgYWZ0ZXIgemlwXG4gICAgICogQG1lbWJlcm9mIEZ1bmN0b3JcbiAgICAgKi9cbiAgICB6aXAoLi4ucGFpcnMpe1xuICAgICAgICByZXR1cm4gdGhpcy5SLnppcCguLi5wYWlycyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVuemlwIGFycmF5IG9mIHBhaXJzIHRvIHR3byBhcnJheXNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHBhaXJzIC0gYXJyYXkgb2YgcGFpcnMgdG8gdW56aXBcbiAgICAgKiBAcmV0dXJucyB7IFtBcnJheTEsIEFycmF5Ml0gfSAtIHR3byBhcnJheXMgXG4gICAgICogQG1lbWJlcm9mIEZ1bmN0b3JcbiAgICAgKi9cbiAgICB1bnppcChwYWlycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFVuemlwID0gKHV6LCBbdjEsIHYyXSk9PntcbiAgICAgICAgICAgIHV6WzBdID0gWy4uLnV6WzBdLCB2MV07XG4gICAgICAgICAgICB1elsxXSA9IFsuLi51elsxXSwgdjJdO1xuICAgICAgICAgICAgcmV0dXJuIHV6O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoVW56aXAsW1tdLCBbXV0scGFpcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBhcnJheSB3aXRoIHRoZSBnaXZlbiByYW5nZVxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gc2l6ZSAtIGFycmF5IG9mIHBhaXJzIHRvIHVuemlwXG4gICAgICogQHJldHVybnMgeyBbQXJyYXldIH0gLSBhcnJheXMgZnJvbSBbYmVnaW5BdCwgLi4uc2l6ZV1cbiAgICAgKiBAbWVtYmVyb2YgRnVuY3RvclxuICAgICAqL1xuICAgIHJhbmdlKHNpemUsIGJlZ2luSWR4PTApe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5yYW5nZShiZWdpbklkeCwgc2l6ZSk7XG4gICAgfVxuXG4gICAgZW51bWVyYXRlKGFycmF5KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuYWRkSW5kZXgoUi5tYXApKCh2LGkpPT4oW2ksdl0pKShhcnJheSk7XG4gICAgfSAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVuY3RvcjsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFRlbnNvciB9IGZyb20gJy4vdGVuc29yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRnVuY3RvciB9IGZyb20gJy4vZnVuY3Rvcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldENvcmUgfSBmcm9tICcuL2NhdXNhbE5ldENvcmUnO1xuXG4iLCIvKipcbiAqIGNsYXNzIFN0b3JlIGlzIHRoZSBwcmltaXRpdmUgY2xhc3MgZm9yIGNvbXBvc2luZyBoaWdoZXIgc3RvcmUgY2xhc3MuXG4gKiBUaGlzIGNsYXNzIHdyYXAgW2xldmVsdXBdKGh0dHBzOi8vd3d3LnRlbnNvcmZsb3cub3JnL2pzKSBcbiAqIGZvciBjb25uZWN0IHdpdGggYWJzdHJhY3QtbGV2ZWxkb3duIGNvbXBsaWFudCBzdG9yZXMuXG4gKiBAY2xhc3MgU3RvcmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5sZXZlbHVwID0gcmVxdWlyZSgnbGV2ZWx1cCcpO1xuICAgICAgICB0aGlzLnN0b3JlID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBjb25uZWN0KCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgaXRlbSBnaXZlbiB0aGUga2V5XG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0ga2V5IC0ga2V5IG5hbWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthc0J1ZmZlcj1mYWxzZV0gLSByZXR1cm4gb2JqZWN0IG9yIGJ1ZmZlciBhcnJheSwgZGVmYXVsdCBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGl0ZW0gb2JqZWN0IFxuICAgICAqIEBtZW1iZXJvZiBNZW1vcnlDYWNoZVxuICAgICAqL1xuICAgIGFzeW5jIGdldEl0ZW0oa2V5LCBhc0J1ZmZlcj1mYWxzZSwgbm9FcnJvcj1mYWxzZSl7XG4gICAgICAgIGlmKCF0aGlzLnN0b3JlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzdG9yZSBpcyBub3QgY29ubmVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5nZXQoa2V5LCB7YXNCdWZmZXJ9LCAoZXJyLCBkYXRhKT0+e1xuICAgICAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5vRXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7W2tleV06IG51bGx9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe2tleSwgZXJyfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoJ2Vycm9yIHJlYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtba2V5XTogZGF0YX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IG5ldyBpdGVtIHdpdGggdGhlIGdpdmVuIGtleSBhbmQgdmFsdWVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBrZXkgLSBrZXkgbmFtZSBvZiBpdGVtXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZGF0YSAtIHZhbHVlIG9mIGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7IFByb21pc2UgfSAtIG5ldyBrZXkgcHJvbWlzZVxuICAgICAqIEBtZW1iZXJvZiBNZW1vcnlDYWNoZVxuICAgICAqL1xuICAgIGFzeW5jIHNldEl0ZW0oa2V5LCBkYXRhLCBub0Vycm9yPWZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMuc3RvcmUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0b3JlIGlzIG5vdCBjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLnN0b3JlLnB1dChrZXksIGRhdGEsIChlcnIpPT57XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgaWYobm9FcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtba2V5XTogbnVsbH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7a2V5LCBlcnJ9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgnZXJyb3Igd3JpdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtba2V5XTogZGF0YX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlIGl0ZW0gZ2l2ZW4gdGhlIGl0ZW0ga2V5XG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0ga2V5IC0ga2V5IG5hbWUgdG8gZGVsZXRlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH0gZGVsZXRlZCBrZXkgcHJvbWlzZVxuICAgICAqIEBtZW1iZXJvZiBNZW1vcnlDYWNoZVxuICAgICAqL1xuICAgIGFzeW5jIGRlbEl0ZW0oa2V5LCBub0Vycm9yPWZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMuc3RvcmUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0b3JlIGlzIG5vdCBjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRlbChrZXksIChlcnIpPT57XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgaWYobm9FcnJvcil7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGBlcnJvciBkZWxldGUgJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFrZSBuYW1lIG1hY2hpbmcgZnVuY3Rpb24gYmFzZWQgb24gcHJlZml4IHBhdGhcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBwYXR0ZXJuIC0gcHJlZml4IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7IEZ1bmN0aW9uIH0gbmFtZSBtYXRjaGluZyBmdW5jdGlvblxuICAgICAqIEBtZW1iZXJvZiBNZW1vcnlDYWNoZVxuICAgICAqL1xuICAgIG1ha2VDaGVja0l0ZW1OYW1lRm4ocGF0dGVybil7XG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoYCR7cGF0dGVybn0uKmAsJ2cnKTtcbiAgICAgICAgcmV0dXJuIChmaWxlTmFtZSk9PmZpbGVOYW1lLm1hdGNoKHJlZ2V4KSB8fCBbXTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGl0ZW1zIHVuZGVyIHRoZSBwcmVmaXggcGF0aFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG5hbWVQcmVmaXhcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gbGlzdCBvZiBpdGVtIG5hbWVzXG4gICAgICogQG1lbWJlcm9mIE1lbW9yeUNhY2hlXG4gICAgICovXG4gICAgYXN5bmMgZ2V0SXRlbUxpc3QobmFtZVByZWZpeCwgbm9FcnJvcj1mYWxzZSl7XG4gICAgICAgIGlmKCF0aGlzLnN0b3JlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzdG9yZSBpcyBub3QgY29ubmVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IE5hbWVUZXN0ZXIgPSB0aGlzLm1ha2VDaGVja0l0ZW1OYW1lRm4obmFtZVByZWZpeCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgbGV0IGZpbGVMaXN0ID0gW107XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmNyZWF0ZUtleVN0cmVhbSgpXG4gICAgICAgICAgICAgICAgLm9uKCdkYXRhJywgKGtleSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS50b1N0cmluZygndXRmOCcpO1xuICAgICAgICAgICAgICAgICAgICBpZihOYW1lVGVzdGVyKGtleSkubGVuZ3RoPT09MSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbignY2xvc2UnLCAoKSA9PiByZXNvbHZlKGZpbGVMaXN0KSApXG4gICAgICAgICAgICAgICAgLm9uKCdlbmQnLCAgKCkgPT4gcmVzb2x2ZShmaWxlTGlzdCkgKVxuICAgICAgICAgICAgICAgIC5vbignZXJyb3InLCAoZXJyKSA9PnsgXG4gICAgICAgICAgICAgICAgICAgIGlmKG5vRXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCBlcnIgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChgZXJyb3IgZ2V0SXRlbUxpc3QgJHtuYW1lUHJlZml4fWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCIvKipcbiAqIGNsYXNzIFRlbnNvciBpcyB0aGUgcHJpbWl0aXZlIGNsYXNzIGZvciBjb21wb3NpbmcgaGlnaGVyIGNsYXNzLlxuICogVGhpcyBjbGFzcyB3cmFwIFt0ZW5zb3JmbG93anNdKGh0dHBzOi8vd3d3LnRlbnNvcmZsb3cub3JnL2pzKSBmb3IgcHJvdmlkaW5nIHRlbnNvciBjYWxjdWxhdGlvblxuICogQGNsYXNzIFRlbnNvclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW5zb3J7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5UID0gcmVxdWlyZSgnQHRlbnNvcmZsb3cvdGZqcycpO1xuICAgICAgICByZXF1aXJlKCdAdGVuc29yZmxvdy90ZmpzLW5vZGUnKTtcbiAgICAgICAgcmVxdWlyZSgnQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdScpO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGNvbnNvbGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHJldHVybiB0aGUgY29yZSB0ZW5zb3IgaW5zdGFuY2VcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgVGVuc29yXG4gICAgICovXG4gICAgZ2V0IENvcmVUZW5zb3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuVDtcbiAgICB9XG5cbiAgICBpc1RlbnNvcihvYmplY3Qpe1xuICAgICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiB0aGlzLlQuVGVuc29yOyBcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X3RmanNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19ub2RlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X3RmanNfbm9kZV9ncHVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbGV2ZWx1cF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyJdLCJzb3VyY2VSb290IjoiIn0=