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
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ "./src/function.js");


/**
 * This class CausalNetCore provide access to core function and core tensor
 *
 * @class CausalNetCore
 * @example
 * [EXAMPLE ../examples/core.babel.js]
 */

class CausalNetCore {
  constructor() {
    this.F = new _function__WEBPACK_IMPORTED_MODULE_1__["default"]();
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

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * class Function is the primitive class for composing higher class.
 * This class wrap [Ramda](https://ramdajs.com/) for providing Functional programming style method.
 * @class Function
 */
class Function {
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
   * @memberof Function
   */


  get CoreFunction() {
    return this.R;
  }
  /**
   *
   * @param { Array } keys
   * @param { Object } item
   * @param { Any } defaultValue - return value in case of not found
   * @returns { Any } return found value or defaultValue
   * @memberof Function
   */


  getIn(keys, item, defaultValue) {
    return R.pathOr(defaultValue, keys, item);
  }
  /**
   * set value into object by the keys list
   * @param { Array } keys
   * @param { Object } value
   * @param { Object } item - item to set
   * @returns { Any } return found value or defaultValue
   * @memberof Function
   */


  setIn(keys, value, item) {
    return this.R.assocPath(keys, value, item);
  }
  /**
   * zip two array
   * @param { Array } pairs - two arrays to zip
   * @returns { Array } array after zip
   * @memberof Function
   */


  zip(...pairs) {
    return this.R.zip(...pairs);
  }
  /**
   * Unzip array of pairs to two arrays
   * @param { Array } pairs - array of pairs to unzip
   * @returns { [Array1, Array2] } - two arrays 
   * @memberof Function
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

/* harmony default export */ __webpack_exports__["default"] = (Function);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Tensor, Function, Store, causalNetCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tensor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tensor */ "./src/tensor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tensor", function() { return _tensor__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ "./src/function.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Function", function() { return _function__WEBPACK_IMPORTED_MODULE_1__["default"]; });

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

  correctName(filePath) {
    filePath = '/' + filePath;
    return filePath.replace(/\/{1,}/g, '/');
  }
  /**
   * Get item given the key
   * @param { String } key - key name
   * @param {boolean} [asBuffer=false] - return object or buffer array, default object
   * @returns { Object } item object 
   * @memberof MemoryCache
   */


  async getItem(key, asBuffer = false) {
    if (!this.store) {
      throw Error('store is not connect');
    }

    key = this.correctName(key);
    return new Promise((resolve, reject) => {
      this.store.get(key, {
        asBuffer
      }, (err, data) => {
        if (err) {
          this.logger.debug({
            key,
            err
          });
          reject('error read');
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


  async setItem(key, data) {
    if (!this.store) {
      throw Error('store is not connect');
    }

    key = this.correctName(key);
    return new Promise((resolve, reject) => {
      this.store.put(key, data, err => {
        if (err) {
          this.logger.debug({
            key,
            err
          });
          reject('error write');
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


  async delItem(key) {
    if (!this.store) {
      throw Error('store is not connect');
    }

    key = this.correctName(key);
    return new Promise((resolve, reject) => {
      this.store.del(key, err => {
        if (err) {
          this.logger.debug({
            err
          });
          reject('error write');
        } else {
          resolve(key);
        }
      });
    });
  }
  /**
   * Make name maching function based on prefix path
   * @param { String } name - prefix name
   * @returns { Function } name matching function
   * @memberof MemoryCache
   */


  makeCheckItemNameFn(name) {
    var pattern = name;
    var regex = new RegExp(`${pattern}.*`, 'g');
    return fileName => fileName.match(regex) || [];
  }
  /**
   * Get the current items under the prefix path
   * @param { String } [namePath='/']
   * @returns { Array } list of item names
   * @memberof MemoryCache
   */


  async getItemList(namePath = '/') {
    if (!this.store) {
      throw Error('store is not connect');
    }

    namePath = this.correctName(namePath);
    const NameTester = this.makeCheckItemNameFn(namePath);
    return new Promise((resolve, reject) => {
      let fileList = [];
      this.store.createKeyStream().on('data', key => {
        key = key.toString('utf8');

        if (NameTester(key).length === 1) {
          fileList.push(key);
        }
      }).on('close', () => resolve(fileList)).on('end', () => resolve(fileList)).on('error', err => {
        this.logger.debug({
          err
        });
        reject('error getFileList');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvY2F1c2FsTmV0Q29yZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvdGVuc29yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS9leHRlcm5hbCBcIkB0ZW5zb3JmbG93L3RmanNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvZXh0ZXJuYWwgXCJAdGVuc29yZmxvdy90ZmpzLW5vZGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvZXh0ZXJuYWwgXCJAdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1XCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlL2V4dGVybmFsIFwibGV2ZWx1cFwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS9leHRlcm5hbCBcInJhbWRhXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0Q29yZSIsImNvbnN0cnVjdG9yIiwiRiIsIkZ1bmN0aW9uIiwiVCIsIlRlbnNvciIsIkNvcmVGdW5jdGlvbiIsIkNvcmVUZW5zb3IiLCJSIiwicmVxdWlyZSIsImxvZ2dlciIsImNvbnNvbGUiLCJnZXRJbiIsImtleXMiLCJpdGVtIiwiZGVmYXVsdFZhbHVlIiwicGF0aE9yIiwic2V0SW4iLCJ2YWx1ZSIsImFzc29jUGF0aCIsInppcCIsInBhaXJzIiwidW56aXAiLCJVbnppcCIsInV6IiwidjEiLCJ2MiIsInJlZHVjZSIsIlN0b3JlIiwibGV2ZWx1cCIsInN0b3JlIiwiY29ubmVjdCIsIkVycm9yIiwiY29ycmVjdE5hbWUiLCJmaWxlUGF0aCIsInJlcGxhY2UiLCJnZXRJdGVtIiwia2V5IiwiYXNCdWZmZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldCIsImVyciIsImRhdGEiLCJkZWJ1ZyIsInNldEl0ZW0iLCJwdXQiLCJkZWxJdGVtIiwiZGVsIiwibWFrZUNoZWNrSXRlbU5hbWVGbiIsIm5hbWUiLCJwYXR0ZXJuIiwicmVnZXgiLCJSZWdFeHAiLCJmaWxlTmFtZSIsIm1hdGNoIiwiZ2V0SXRlbUxpc3QiLCJuYW1lUGF0aCIsIk5hbWVUZXN0ZXIiLCJmaWxlTGlzdCIsImNyZWF0ZUtleVN0cmVhbSIsIm9uIiwidG9TdHJpbmciLCJsZW5ndGgiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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Q0FBQyxvREFBRCxDQUFQOztBQUNBQSx1QkFBTyxDQUFDLDREQUFELENBQVA7O0FBQ0EsU0FBS0MsTUFBTCxHQUFjQyxPQUFkO0FBQ0g7QUFDRDs7Ozs7OztBQUtBLE1BQUlKLFVBQUosR0FBZ0I7QUFDWixXQUFPLEtBQUtILENBQVo7QUFDSDs7QUFkc0IsQzs7Ozs7Ozs7Ozs7QUNMM0IsOEQ7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoiQGNhdXNhbE5ldC9jb3JlLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGVuc29yZmxvdy90ZmpzXCIpLCByZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqcy1ub2RlXCIpLCByZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdVwiKSwgcmVxdWlyZShcImxldmVsdXBcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAdGVuc29yZmxvdy90ZmpzXCIsIFwiQHRlbnNvcmZsb3cvdGZqcy1ub2RlXCIsIFwiQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdVwiLCBcImxldmVsdXBcIiwgXCJyYW1kYVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2NvcmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGVuc29yZmxvdy90ZmpzXCIpLCByZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqcy1ub2RlXCIpLCByZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdVwiKSwgcmVxdWlyZShcImxldmVsdXBcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9jb3JlXCJdID0gZmFjdG9yeShyb290W1wiQHRlbnNvcmZsb3cvdGZqc1wiXSwgcm9vdFtcIkB0ZW5zb3JmbG93L3RmanMtbm9kZVwiXSwgcm9vdFtcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIl0sIHJvb3RbXCJsZXZlbHVwXCJdLCByb290W1wicmFtZGFcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGVuc29yZmxvd190ZmpzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19ub2RlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19ub2RlX2dwdV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xldmVsdXBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIFRlbnNvciB9IGZyb20gJy4vdGVuc29yJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRnVuY3Rpb24gfSBmcm9tICcuL2Z1bmN0aW9uJztcbi8qKlxuICogVGhpcyBjbGFzcyBDYXVzYWxOZXRDb3JlIHByb3ZpZGUgYWNjZXNzIHRvIGNvcmUgZnVuY3Rpb24gYW5kIGNvcmUgdGVuc29yXG4gKlxuICogQGNsYXNzIENhdXNhbE5ldENvcmVcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jb3JlLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRDb3Jle1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgICAgICB0aGlzLlQgPSBuZXcgVGVuc29yKCk7XG4gICAgfVxuICAgIGdldCBDb3JlRnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuRi5Db3JlRnVuY3Rpb247IFxuICAgIH1cblxuICAgIGdldCBDb3JlVGVuc29yKCl7XG4gICAgICAgIHJldHVybiB0aGlzLlQuQ29yZVRlbnNvcjsgXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldENvcmUoKTsiLCIvKipcbiAqIGNsYXNzIEZ1bmN0aW9uIGlzIHRoZSBwcmltaXRpdmUgY2xhc3MgZm9yIGNvbXBvc2luZyBoaWdoZXIgY2xhc3MuXG4gKiBUaGlzIGNsYXNzIHdyYXAgW1JhbWRhXShodHRwczovL3JhbWRhanMuY29tLykgZm9yIHByb3ZpZGluZyBGdW5jdGlvbmFsIHByb2dyYW1taW5nIHN0eWxlIG1ldGhvZC5cbiAqIEBjbGFzcyBGdW5jdGlvblxuICovXG5jbGFzcyBGdW5jdGlvbntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGUgeyBPYmplY3QgfSBSYW1kYSBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5SID0gcmVxdWlyZSgncmFtZGEnKTtcbiAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlIHsgTG9nZ2VyIH0gbG9nZ2VyICAgXG4gICAgICAgICAqLyAgICAgICAgXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJuIGNvcmUgUmFtZGEgaW5zdGFuY2VcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgRnVuY3Rpb25cbiAgICAgKi9cbiAgICBnZXQgQ29yZUZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLlI7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBrZXlzXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gaXRlbVxuICAgICAqIEBwYXJhbSB7IEFueSB9IGRlZmF1bHRWYWx1ZSAtIHJldHVybiB2YWx1ZSBpbiBjYXNlIG9mIG5vdCBmb3VuZFxuICAgICAqIEByZXR1cm5zIHsgQW55IH0gcmV0dXJuIGZvdW5kIHZhbHVlIG9yIGRlZmF1bHRWYWx1ZVxuICAgICAqIEBtZW1iZXJvZiBGdW5jdGlvblxuICAgICAqL1xuICAgIGdldEluKGtleXMsIGl0ZW0sIGRlZmF1bHRWYWx1ZSl7XG4gICAgICAgIHJldHVybiBSLnBhdGhPcihkZWZhdWx0VmFsdWUsIGtleXMsIGl0ZW0pO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBzZXQgdmFsdWUgaW50byBvYmplY3QgYnkgdGhlIGtleXMgbGlzdFxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0ga2V5c1xuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IHZhbHVlXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gaXRlbSAtIGl0ZW0gdG8gc2V0XG4gICAgICogQHJldHVybnMgeyBBbnkgfSByZXR1cm4gZm91bmQgdmFsdWUgb3IgZGVmYXVsdFZhbHVlXG4gICAgICogQG1lbWJlcm9mIEZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0SW4oa2V5cywgdmFsdWUsIGl0ZW0pe1xuICAgICAgICByZXR1cm4gdGhpcy5SLmFzc29jUGF0aChrZXlzLCB2YWx1ZSwgaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogemlwIHR3byBhcnJheVxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gcGFpcnMgLSB0d28gYXJyYXlzIHRvIHppcFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBhcnJheSBhZnRlciB6aXBcbiAgICAgKiBAbWVtYmVyb2YgRnVuY3Rpb25cbiAgICAgKi9cbiAgICB6aXAoLi4ucGFpcnMpe1xuICAgICAgICByZXR1cm4gdGhpcy5SLnppcCguLi5wYWlycyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVuemlwIGFycmF5IG9mIHBhaXJzIHRvIHR3byBhcnJheXNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHBhaXJzIC0gYXJyYXkgb2YgcGFpcnMgdG8gdW56aXBcbiAgICAgKiBAcmV0dXJucyB7IFtBcnJheTEsIEFycmF5Ml0gfSAtIHR3byBhcnJheXMgXG4gICAgICogQG1lbWJlcm9mIEZ1bmN0aW9uXG4gICAgICovXG4gICAgdW56aXAocGFpcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBVbnppcCA9ICh1eiwgW3YxLCB2Ml0pPT57XG4gICAgICAgICAgICB1elswXSA9IFsuLi51elswXSwgdjFdO1xuICAgICAgICAgICAgdXpbMV0gPSBbLi4udXpbMV0sIHYyXTtcbiAgICAgICAgICAgIHJldHVybiB1ejtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKFVuemlwLFtbXSwgW11dLHBhaXJzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVGVuc29yIH0gZnJvbSAnLi90ZW5zb3InO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdG9yZSB9IGZyb20gJy4vc3RvcmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRDb3JlIH0gZnJvbSAnLi9jYXVzYWxOZXRDb3JlJztcblxuIiwiLyoqXG4gKiBjbGFzcyBTdG9yZSBpcyB0aGUgcHJpbWl0aXZlIGNsYXNzIGZvciBjb21wb3NpbmcgaGlnaGVyIHN0b3JlIGNsYXNzLlxuICogVGhpcyBjbGFzcyB3cmFwIFtsZXZlbHVwXShodHRwczovL3d3dy50ZW5zb3JmbG93Lm9yZy9qcykgXG4gKiBmb3IgY29ubmVjdCB3aXRoIGFic3RyYWN0LWxldmVsZG93biBjb21wbGlhbnQgc3RvcmVzLlxuICogQGNsYXNzIFN0b3JlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3Jle1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMubGV2ZWx1cCA9IHJlcXVpcmUoJ2xldmVsdXAnKTtcbiAgICAgICAgdGhpcy5zdG9yZSA9IG51bGw7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgY29ubmVjdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgY29ycmVjdE5hbWUoZmlsZVBhdGgpe1xuICAgICAgICBmaWxlUGF0aCA9ICcvJyArZmlsZVBhdGg7XG4gICAgICAgIHJldHVybiBmaWxlUGF0aC5yZXBsYWNlKC9cXC97MSx9L2csICcvJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGl0ZW0gZ2l2ZW4gdGhlIGtleVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IGtleSAtIGtleSBuYW1lXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYXNCdWZmZXI9ZmFsc2VdIC0gcmV0dXJuIG9iamVjdCBvciBidWZmZXIgYXJyYXksIGRlZmF1bHQgb2JqZWN0XG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSBpdGVtIG9iamVjdCBcbiAgICAgKiBAbWVtYmVyb2YgTWVtb3J5Q2FjaGVcbiAgICAgKi9cbiAgICBhc3luYyBnZXRJdGVtKGtleSwgYXNCdWZmZXI9ZmFsc2Upe1xuICAgICAgICBpZighdGhpcy5zdG9yZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc3RvcmUgaXMgbm90IGNvbm5lY3QnKTtcbiAgICAgICAgfVxuICAgICAgICBrZXkgPSB0aGlzLmNvcnJlY3ROYW1lKGtleSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5nZXQoa2V5LCB7YXNCdWZmZXJ9LCAoZXJyLCBkYXRhKT0+e1xuICAgICAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtrZXksIGVycn0pO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ2Vycm9yIHJlYWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7W2tleV06IGRhdGF9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCBuZXcgaXRlbSB3aXRoIHRoZSBnaXZlbiBrZXkgYW5kIHZhbHVlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0ga2V5IC0ga2V5IG5hbWUgb2YgaXRlbVxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGRhdGEgLSB2YWx1ZSBvZiBpdGVtXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH0gLSBuZXcga2V5IHByb21pc2VcbiAgICAgKiBAbWVtYmVyb2YgTWVtb3J5Q2FjaGVcbiAgICAgKi9cbiAgICBhc3luYyBzZXRJdGVtKGtleSwgZGF0YSl7XG4gICAgICAgIGlmKCF0aGlzLnN0b3JlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzdG9yZSBpcyBub3QgY29ubmVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIGtleSA9IHRoaXMuY29ycmVjdE5hbWUoa2V5KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLnN0b3JlLnB1dChrZXksIGRhdGEsIChlcnIpPT57XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe2tleSwgZXJyfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgnZXJyb3Igd3JpdGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7W2tleV06IGRhdGF9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBpdGVtIGdpdmVuIHRoZSBpdGVtIGtleVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IGtleSAtIGtleSBuYW1lIHRvIGRlbGV0ZVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9IGRlbGV0ZWQga2V5IHByb21pc2VcbiAgICAgKiBAbWVtYmVyb2YgTWVtb3J5Q2FjaGVcbiAgICAgKi9cbiAgICBhc3luYyBkZWxJdGVtKGtleSl7XG4gICAgICAgIGlmKCF0aGlzLnN0b3JlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzdG9yZSBpcyBub3QgY29ubmVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIGtleSA9IHRoaXMuY29ycmVjdE5hbWUoa2V5KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRlbChrZXksIChlcnIpPT57XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe2Vycn0pO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ2Vycm9yIHdyaXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ha2UgbmFtZSBtYWNoaW5nIGZ1bmN0aW9uIGJhc2VkIG9uIHByZWZpeCBwYXRoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbmFtZSAtIHByZWZpeCBuYW1lXG4gICAgICogQHJldHVybnMgeyBGdW5jdGlvbiB9IG5hbWUgbWF0Y2hpbmcgZnVuY3Rpb25cbiAgICAgKiBAbWVtYmVyb2YgTWVtb3J5Q2FjaGVcbiAgICAgKi9cbiAgICBtYWtlQ2hlY2tJdGVtTmFtZUZuKG5hbWUpe1xuICAgICAgICB2YXIgcGF0dGVybiA9IG5hbWU7XG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoYCR7cGF0dGVybn0uKmAsJ2cnKTtcbiAgICAgICAgcmV0dXJuIChmaWxlTmFtZSk9PmZpbGVOYW1lLm1hdGNoKHJlZ2V4KSB8fCBbXTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IGl0ZW1zIHVuZGVyIHRoZSBwcmVmaXggcGF0aFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IFtuYW1lUGF0aD0nLyddXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IGxpc3Qgb2YgaXRlbSBuYW1lc1xuICAgICAqIEBtZW1iZXJvZiBNZW1vcnlDYWNoZVxuICAgICAqL1xuICAgIGFzeW5jIGdldEl0ZW1MaXN0KG5hbWVQYXRoPScvJyl7XG4gICAgICAgIGlmKCF0aGlzLnN0b3JlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzdG9yZSBpcyBub3QgY29ubmVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIG5hbWVQYXRoID0gdGhpcy5jb3JyZWN0TmFtZShuYW1lUGF0aCk7XG4gICAgICAgIGNvbnN0IE5hbWVUZXN0ZXIgPSB0aGlzLm1ha2VDaGVja0l0ZW1OYW1lRm4obmFtZVBhdGgpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIGxldCBmaWxlTGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5jcmVhdGVLZXlTdHJlYW0oKVxuICAgICAgICAgICAgICAgIC5vbignZGF0YScsIChrZXkpID0+e1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkudG9TdHJpbmcoJ3V0ZjgnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoTmFtZVRlc3RlcihrZXkpLmxlbmd0aD09PTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUxpc3QucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oJ2Nsb3NlJywgKCkgPT4gcmVzb2x2ZShmaWxlTGlzdCkgKVxuICAgICAgICAgICAgICAgIC5vbignZW5kJywgICgpID0+IHJlc29sdmUoZmlsZUxpc3QpIClcbiAgICAgICAgICAgICAgICAub24oJ2Vycm9yJywgKGVycikgPT57IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7IGVyciB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdlcnJvciBnZXRGaWxlTGlzdCcpIDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8qKlxuICogY2xhc3MgVGVuc29yIGlzIHRoZSBwcmltaXRpdmUgY2xhc3MgZm9yIGNvbXBvc2luZyBoaWdoZXIgY2xhc3MuXG4gKiBUaGlzIGNsYXNzIHdyYXAgW3RlbnNvcmZsb3dqc10oaHR0cHM6Ly93d3cudGVuc29yZmxvdy5vcmcvanMpIGZvciBwcm92aWRpbmcgdGVuc29yIGNhbGN1bGF0aW9uXG4gKiBAY2xhc3MgVGVuc29yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbnNvcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLlQgPSByZXF1aXJlKCdAdGVuc29yZmxvdy90ZmpzJyk7XG4gICAgICAgIHJlcXVpcmUoJ0B0ZW5zb3JmbG93L3RmanMtbm9kZScpO1xuICAgICAgICByZXF1aXJlKCdAdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1Jyk7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgcmV0dXJuIHRoZSBjb3JlIHRlbnNvciBpbnN0YW5jZVxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBUZW5zb3JcbiAgICAgKi9cbiAgICBnZXQgQ29yZVRlbnNvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5UO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGVuc29yZmxvd190ZmpzX25vZGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfdGZqc19ub2RlX2dwdV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9sZXZlbHVwX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX187Il0sInNvdXJjZVJvb3QiOiIifQ==