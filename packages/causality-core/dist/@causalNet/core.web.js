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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvY2F1c2FsTmV0Q29yZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvLi9zcmMvdGVuc29yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvY29yZS9leHRlcm5hbCBcIkB0ZW5zb3JmbG93L3RmanNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2NvcmUvZXh0ZXJuYWwgXCJsZXZlbHVwXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9jb3JlL2V4dGVybmFsIFwicmFtZGFcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRDb3JlIiwiY29uc3RydWN0b3IiLCJGIiwiRnVuY3Rpb24iLCJUIiwiVGVuc29yIiwiQ29yZUZ1bmN0aW9uIiwiQ29yZVRlbnNvciIsIlIiLCJyZXF1aXJlIiwibG9nZ2VyIiwiY29uc29sZSIsImdldEluIiwia2V5cyIsIml0ZW0iLCJkZWZhdWx0VmFsdWUiLCJwYXRoT3IiLCJzZXRJbiIsInZhbHVlIiwiYXNzb2NQYXRoIiwiemlwIiwicGFpcnMiLCJ1bnppcCIsIlVuemlwIiwidXoiLCJ2MSIsInYyIiwicmVkdWNlIiwiU3RvcmUiLCJsZXZlbHVwIiwic3RvcmUiLCJjb25uZWN0IiwiRXJyb3IiLCJjb3JyZWN0TmFtZSIsImZpbGVQYXRoIiwicmVwbGFjZSIsImdldEl0ZW0iLCJrZXkiLCJhc0J1ZmZlciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwiZXJyIiwiZGF0YSIsImRlYnVnIiwic2V0SXRlbSIsInB1dCIsImRlbEl0ZW0iLCJkZWwiLCJtYWtlQ2hlY2tJdGVtTmFtZUZuIiwibmFtZSIsInBhdHRlcm4iLCJyZWdleCIsIlJlZ0V4cCIsImZpbGVOYW1lIiwibWF0Y2giLCJnZXRJdGVtTGlzdCIsIm5hbWVQYXRoIiwiTmFtZVRlc3RlciIsImZpbGVMaXN0IiwiY3JlYXRlS2V5U3RyZWFtIiwib24iLCJ0b1N0cmluZyIsImxlbmd0aCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFPQSxNQUFNQSxhQUFOLENBQW1CO0FBQ2ZDLGFBQVcsR0FBRTtBQUNULFNBQUtDLENBQUwsR0FBUyxJ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WjtBQUNIOztBQWRzQixDOzs7Ozs7Ozs7OztBQ0wzQiw4RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJAY2F1c2FsTmV0L2NvcmUud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqc1wiKSwgcmVxdWlyZShcImxldmVsdXBcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAdGVuc29yZmxvdy90ZmpzXCIsIFwibGV2ZWx1cFwiLCBcInJhbWRhXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvY29yZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanNcIiksIHJlcXVpcmUoXCJsZXZlbHVwXCIpLCByZXF1aXJlKFwicmFtZGFcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvY29yZVwiXSA9IGZhY3Rvcnkocm9vdFtcIkB0ZW5zb3JmbG93L3RmanNcIl0sIHJvb3RbXCJsZXZlbHVwXCJdLCByb290W1wicmFtZGFcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGVuc29yZmxvd190ZmpzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfbGV2ZWx1cF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgVGVuc29yIH0gZnJvbSAnLi90ZW5zb3InO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuLyoqXG4gKiBUaGlzIGNsYXNzIENhdXNhbE5ldENvcmUgcHJvdmlkZSBhY2Nlc3MgdG8gY29yZSBmdW5jdGlvbiBhbmQgY29yZSB0ZW5zb3JcbiAqXG4gKiBAY2xhc3MgQ2F1c2FsTmV0Q29yZVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NvcmUuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldENvcmV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgICAgIHRoaXMuVCA9IG5ldyBUZW5zb3IoKTtcbiAgICB9XG4gICAgZ2V0IENvcmVGdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5GLkNvcmVGdW5jdGlvbjsgXG4gICAgfVxuXG4gICAgZ2V0IENvcmVUZW5zb3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuVC5Db3JlVGVuc29yOyBcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0Q29yZSgpOyIsIi8qKlxuICogY2xhc3MgRnVuY3Rpb24gaXMgdGhlIHByaW1pdGl2ZSBjbGFzcyBmb3IgY29tcG9zaW5nIGhpZ2hlciBjbGFzcy5cbiAqIFRoaXMgY2xhc3Mgd3JhcCBbUmFtZGFdKGh0dHBzOi8vcmFtZGFqcy5jb20vKSBmb3IgcHJvdmlkaW5nIEZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgc3R5bGUgbWV0aG9kLlxuICogQGNsYXNzIEZ1bmN0aW9uXG4gKi9cbmNsYXNzIEZ1bmN0aW9ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZSB7IE9iamVjdCB9IFJhbWRhIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLlIgPSByZXF1aXJlKCdyYW1kYScpO1xuICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGUgeyBMb2dnZXIgfSBsb2dnZXIgICBcbiAgICAgICAgICovICAgICAgICBcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm4gY29yZSBSYW1kYSBpbnN0YW5jZVxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBGdW5jdGlvblxuICAgICAqL1xuICAgIGdldCBDb3JlRnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUjtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IGtleXNcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBpdGVtXG4gICAgICogQHBhcmFtIHsgQW55IH0gZGVmYXVsdFZhbHVlIC0gcmV0dXJuIHZhbHVlIGluIGNhc2Ugb2Ygbm90IGZvdW5kXG4gICAgICogQHJldHVybnMgeyBBbnkgfSByZXR1cm4gZm91bmQgdmFsdWUgb3IgZGVmYXVsdFZhbHVlXG4gICAgICogQG1lbWJlcm9mIEZ1bmN0aW9uXG4gICAgICovXG4gICAgZ2V0SW4oa2V5cywgaXRlbSwgZGVmYXVsdFZhbHVlKXtcbiAgICAgICAgcmV0dXJuIFIucGF0aE9yKGRlZmF1bHRWYWx1ZSwga2V5cywgaXRlbSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBpbnRvIG9iamVjdCBieSB0aGUga2V5cyBsaXN0XG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBrZXlzXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBpdGVtIC0gaXRlbSB0byBzZXRcbiAgICAgKiBAcmV0dXJucyB7IEFueSB9IHJldHVybiBmb3VuZCB2YWx1ZSBvciBkZWZhdWx0VmFsdWVcbiAgICAgKiBAbWVtYmVyb2YgRnVuY3Rpb25cbiAgICAgKi9cbiAgICBzZXRJbihrZXlzLCB2YWx1ZSwgaXRlbSl7XG4gICAgICAgIHJldHVybiB0aGlzLlIuYXNzb2NQYXRoKGtleXMsIHZhbHVlLCBpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB6aXAgdHdvIGFycmF5XG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBwYWlycyAtIHR3byBhcnJheXMgdG8gemlwXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IGFycmF5IGFmdGVyIHppcFxuICAgICAqIEBtZW1iZXJvZiBGdW5jdGlvblxuICAgICAqL1xuICAgIHppcCguLi5wYWlycyl7XG4gICAgICAgIHJldHVybiB0aGlzLlIuemlwKC4uLnBhaXJzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVW56aXAgYXJyYXkgb2YgcGFpcnMgdG8gdHdvIGFycmF5c1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gcGFpcnMgLSBhcnJheSBvZiBwYWlycyB0byB1bnppcFxuICAgICAqIEByZXR1cm5zIHsgW0FycmF5MSwgQXJyYXkyXSB9IC0gdHdvIGFycmF5cyBcbiAgICAgKiBAbWVtYmVyb2YgRnVuY3Rpb25cbiAgICAgKi9cbiAgICB1bnppcChwYWlycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFVuemlwID0gKHV6LCBbdjEsIHYyXSk9PntcbiAgICAgICAgICAgIHV6WzBdID0gWy4uLnV6WzBdLCB2MV07XG4gICAgICAgICAgICB1elsxXSA9IFsuLi51elsxXSwgdjJdO1xuICAgICAgICAgICAgcmV0dXJuIHV6O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoVW56aXAsW1tdLCBbXV0scGFpcnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb247IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBUZW5zb3IgfSBmcm9tICcuL3RlbnNvcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldENvcmUgfSBmcm9tICcuL2NhdXNhbE5ldENvcmUnO1xuXG4iLCIvKipcbiAqIGNsYXNzIFN0b3JlIGlzIHRoZSBwcmltaXRpdmUgY2xhc3MgZm9yIGNvbXBvc2luZyBoaWdoZXIgc3RvcmUgY2xhc3MuXG4gKiBUaGlzIGNsYXNzIHdyYXAgW2xldmVsdXBdKGh0dHBzOi8vd3d3LnRlbnNvcmZsb3cub3JnL2pzKSBcbiAqIGZvciBjb25uZWN0IHdpdGggYWJzdHJhY3QtbGV2ZWxkb3duIGNvbXBsaWFudCBzdG9yZXMuXG4gKiBAY2xhc3MgU3RvcmVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmV7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5sZXZlbHVwID0gcmVxdWlyZSgnbGV2ZWx1cCcpO1xuICAgICAgICB0aGlzLnN0b3JlID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBjb25uZWN0KCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBjb3JyZWN0TmFtZShmaWxlUGF0aCl7XG4gICAgICAgIGZpbGVQYXRoID0gJy8nICtmaWxlUGF0aDtcbiAgICAgICAgcmV0dXJuIGZpbGVQYXRoLnJlcGxhY2UoL1xcL3sxLH0vZywgJy8nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgaXRlbSBnaXZlbiB0aGUga2V5XG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0ga2V5IC0ga2V5IG5hbWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthc0J1ZmZlcj1mYWxzZV0gLSByZXR1cm4gb2JqZWN0IG9yIGJ1ZmZlciBhcnJheSwgZGVmYXVsdCBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGl0ZW0gb2JqZWN0IFxuICAgICAqIEBtZW1iZXJvZiBNZW1vcnlDYWNoZVxuICAgICAqL1xuICAgIGFzeW5jIGdldEl0ZW0oa2V5LCBhc0J1ZmZlcj1mYWxzZSl7XG4gICAgICAgIGlmKCF0aGlzLnN0b3JlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzdG9yZSBpcyBub3QgY29ubmVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIGtleSA9IHRoaXMuY29ycmVjdE5hbWUoa2V5KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmdldChrZXksIHthc0J1ZmZlcn0sIChlcnIsIGRhdGEpPT57XG4gICAgICAgICAgICAgICAgaWYoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe2tleSwgZXJyfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgnZXJyb3IgcmVhZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtba2V5XTogZGF0YX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IG5ldyBpdGVtIHdpdGggdGhlIGdpdmVuIGtleSBhbmQgdmFsdWVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBrZXkgLSBrZXkgbmFtZSBvZiBpdGVtXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZGF0YSAtIHZhbHVlIG9mIGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7IFByb21pc2UgfSAtIG5ldyBrZXkgcHJvbWlzZVxuICAgICAqIEBtZW1iZXJvZiBNZW1vcnlDYWNoZVxuICAgICAqL1xuICAgIGFzeW5jIHNldEl0ZW0oa2V5LCBkYXRhKXtcbiAgICAgICAgaWYoIXRoaXMuc3RvcmUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0b3JlIGlzIG5vdCBjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAga2V5ID0gdGhpcy5jb3JyZWN0TmFtZShrZXkpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RvcmUucHV0KGtleSwgZGF0YSwgKGVycik9PntcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7a2V5LCBlcnJ9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdlcnJvciB3cml0ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtba2V5XTogZGF0YX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVsZXRlIGl0ZW0gZ2l2ZW4gdGhlIGl0ZW0ga2V5XG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0ga2V5IC0ga2V5IG5hbWUgdG8gZGVsZXRlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH0gZGVsZXRlZCBrZXkgcHJvbWlzZVxuICAgICAqIEBtZW1iZXJvZiBNZW1vcnlDYWNoZVxuICAgICAqL1xuICAgIGFzeW5jIGRlbEl0ZW0oa2V5KXtcbiAgICAgICAgaWYoIXRoaXMuc3RvcmUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0b3JlIGlzIG5vdCBjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAga2V5ID0gdGhpcy5jb3JyZWN0TmFtZShrZXkpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGVsKGtleSwgKGVycik9PntcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7ZXJyfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgnZXJyb3Igd3JpdGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFrZSBuYW1lIG1hY2hpbmcgZnVuY3Rpb24gYmFzZWQgb24gcHJlZml4IHBhdGhcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBuYW1lIC0gcHJlZml4IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7IEZ1bmN0aW9uIH0gbmFtZSBtYXRjaGluZyBmdW5jdGlvblxuICAgICAqIEBtZW1iZXJvZiBNZW1vcnlDYWNoZVxuICAgICAqL1xuICAgIG1ha2VDaGVja0l0ZW1OYW1lRm4obmFtZSl7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gbmFtZTtcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChgJHtwYXR0ZXJufS4qYCwnZycpO1xuICAgICAgICByZXR1cm4gKGZpbGVOYW1lKT0+ZmlsZU5hbWUubWF0Y2gocmVnZXgpIHx8IFtdO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgaXRlbXMgdW5kZXIgdGhlIHByZWZpeCBwYXRoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gW25hbWVQYXRoPScvJ11cbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gbGlzdCBvZiBpdGVtIG5hbWVzXG4gICAgICogQG1lbWJlcm9mIE1lbW9yeUNhY2hlXG4gICAgICovXG4gICAgYXN5bmMgZ2V0SXRlbUxpc3QobmFtZVBhdGg9Jy8nKXtcbiAgICAgICAgaWYoIXRoaXMuc3RvcmUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0b3JlIGlzIG5vdCBjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZVBhdGggPSB0aGlzLmNvcnJlY3ROYW1lKG5hbWVQYXRoKTtcbiAgICAgICAgY29uc3QgTmFtZVRlc3RlciA9IHRoaXMubWFrZUNoZWNrSXRlbU5hbWVGbihuYW1lUGF0aCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgbGV0IGZpbGVMaXN0ID0gW107XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmNyZWF0ZUtleVN0cmVhbSgpXG4gICAgICAgICAgICAgICAgLm9uKCdkYXRhJywgKGtleSkgPT57XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS50b1N0cmluZygndXRmOCcpO1xuICAgICAgICAgICAgICAgICAgICBpZihOYW1lVGVzdGVyKGtleSkubGVuZ3RoPT09MSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlTGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5vbignY2xvc2UnLCAoKSA9PiByZXNvbHZlKGZpbGVMaXN0KSApXG4gICAgICAgICAgICAgICAgLm9uKCdlbmQnLCAgKCkgPT4gcmVzb2x2ZShmaWxlTGlzdCkgKVxuICAgICAgICAgICAgICAgIC5vbignZXJyb3InLCAoZXJyKSA9PnsgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHsgZXJyIH0pO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoJ2Vycm9yIGdldEZpbGVMaXN0JykgO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiLyoqXG4gKiBjbGFzcyBUZW5zb3IgaXMgdGhlIHByaW1pdGl2ZSBjbGFzcyBmb3IgY29tcG9zaW5nIGhpZ2hlciBjbGFzcy5cbiAqIFRoaXMgY2xhc3Mgd3JhcCBbdGVuc29yZmxvd2pzXShodHRwczovL3d3dy50ZW5zb3JmbG93Lm9yZy9qcykgZm9yIHByb3ZpZGluZyB0ZW5zb3IgY2FsY3VsYXRpb25cbiAqIEBjbGFzcyBUZW5zb3JcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVuc29ye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuVCA9IHJlcXVpcmUoJ0B0ZW5zb3JmbG93L3RmanMnKTtcbiAgICAgICAgcmVxdWlyZSgnQHRlbnNvcmZsb3cvdGZqcy1ub2RlJyk7XG4gICAgICAgIHJlcXVpcmUoJ0B0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHUnKTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCByZXR1cm4gdGhlIGNvcmUgdGVuc29yIGluc3RhbmNlXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIFRlbnNvclxuICAgICAqL1xuICAgIGdldCBDb3JlVGVuc29yKCl7XG4gICAgICAgIHJldHVybiB0aGlzLlQ7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGVuc29yZmxvd190ZmpzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2xldmVsdXBfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXzsiXSwic291cmNlUm9vdCI6IiJ9