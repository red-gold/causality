(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/deployment"] = factory(require("causal-net.core"), require("causal-net.utils"));
	else
		root["@causalNet/deployment"] = factory(root["causal-net.core"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "./src/causalNetDeployment.js":
/*!************************************!*\
  !*** ./src/causalNetDeployment.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functor */ "./src/functor.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_2__);



/**
 * The implementation for event-based model deployment which is supplied 
 * to pipeline class instance as **Deployment** attribute. Pipeline class must be mixed with DeploymentMixins.
 * @class CausalNetDeployment
 * @extends Event
 * @example
 * [EXAMPLE ../examples/causalNetDeployment.babel.js]
 */

class CausalNetDeployment extends causal_net_utils__WEBPACK_IMPORTED_MODULE_2__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Event"], []) {
  constructor(functor) {
    super();
    this.F = functor;
    this.R = functor.CoreFunctor;
  }

  set Emitter(emitter) {
    this.deployEmitter = emitter;
  }

  get Emitter() {
    if (!this.deployEmitter) {
      throw Error('Emitter is not set');
    }

    return this.deployEmitter;
  }

  set Listener(listener) {
    this.deployListener = listener;
    this.on('inferencer', infer => {
      this.deployListener(infer);
    });
    this.on('ensembleInferencer', infer => {
      this.deployListener(infer);
    });
  }

  get Listener() {
    if (!this.deployListener) {
      throw Error('Listener is not set');
    }

    return this.deployListener;
  }

  set Inferencer(inferencer) {
    this.deployInferencer = inferencer;
    this.on('emitter', async emitValue => {
      let inferValue = await this.deployInferencer(emitValue);

      if (inferValue && inferValue !== {}) {
        this.emit('inferencer', inferValue);
      }
    });
  }

  get Inferencer() {
    if (!this.deployInferencer) {
      throw Error('Inferencer is not set');
    }

    return this.deployInferencer;
  }

  set EnsembleInferencer(ensembleInferencer) {
    this.deployEnsembleInferencer = ensembleInferencer;
    this.on('emitter', async emitValue => {
      let inferValue = await this.deployEnsembleInferencer(emitValue);

      if (inferValue && inferValue !== {}) {
        this.emit('ensembleInferencer', inferValue);
      }
    });
  }

  get EnsembleInferencer() {
    if (!this.deployEnsembleInferencer) {
      throw Error('EnsembleInferencer is not set');
    }

    return this.deployEnsembleInferencer;
  }

  async deploy() {
    return new Promise(async (resolve, reject) => {
      let counter = 0;
      let emitValue = await this.Emitter();

      while (emitValue !== null) {
        this.emit('emitter', emitValue);
        counter += 1;
        emitValue = await this.Emitter();
      }

      resolve(counter);
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetDeployment(_functor__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/deployment.mixins.js":
/*!**********************************!*\
  !*** ./src/deployment.mixins.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This mixin class provides attributes: **Deployment**, **Inferencer**, and handle Deployment setting of pipelineConfig.
 * @class DeploymentMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/causalNetDeployment.babel.js]
 */
const DeploymentMixins = BasePipelineClass => class extends BasePipelineClass {
  set Deployment(deployment) {
    this.deployment = deployment;
  }

  get Deployment() {
    if (!this.deployment) {
      throw Error('deployment is not set');
    }

    return this.deployment;
  }

  get Inferencer() {
    const ModelLenses = () => {
      return this.Model;
    };

    const T = this.T;
    return async input => {
      let {
        Predict,
        Encode,
        Decode
      } = input;
      let infer = {};
      const Model = ModelLenses();

      if (Predict) {
        let inputTensor = T.tensor(Predict).asType('float32').reshape([1, -1]);
        let predictTensor = Model.Predict(inputTensor);
        infer.Predict = await predictTensor.data();
      }

      if (Encode) {
        let inputTensor = T.tensor(Encode).asType('float32').reshape([1, -1]);
        let encodeTensor = Model.Encode(inputTensor);
        infer.Encode = await encodeTensor.data();
      }

      if (Decode) {
        let inputTensor = T.tensor(Decode).asType('float32').reshape([1, -1]);
        let decodeTensor = Model.Encode(inputTensor);
        infer.Decode = await decodeTensor.data();
      }

      return infer;
    };
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('set deployment by config');
    const {
      Emitter,
      Listener
    } = pipelineConfig.Deployment;
    this.Deployment.Emitter = Emitter;
    this.Deployment.Listener = Listener;
    this.Deployment.Inferencer = this.Inferencer;
    this.Logger.groupEnd();
    return pipelineConfig;
  }

  async deploy() {
    return await this.Deployment.deploy();
  }

};

/* harmony default export */ __webpack_exports__["default"] = (DeploymentMixins);

/***/ }),

/***/ "./src/functor.js":
/*!************************!*\
  !*** ./src/functor.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (new causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"]());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetDeployment, DeploymentMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetDeployment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetDeployment */ "./src/causalNetDeployment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetDeployment", function() { return _causalNetDeployment__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _deployment_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deployment.mixins */ "./src/deployment.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeploymentMixins", function() { return _deployment_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvY2F1c2FsTmV0RGVwbG95bWVudC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2Z1bmN0b3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXREZXBsb3ltZW50IiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJjb25zdHJ1Y3RvciIsImZ1bmN0b3IiLCJGIiwiUiIsIkNvcmVGdW5jdG9yIiwiRW1pdHRlciIsImVtaXR0ZXIiLCJkZXBsb3lFbWl0dGVyIiwiRXJyb3IiLCJMaXN0ZW5lciIsImxpc3RlbmVyIiwiZGVwbG95TGlzdGVuZXIiLCJvbiIsImluZmVyIiwiSW5mZXJlbmNlciIsImluZmVyZW5jZXIiLCJkZXBsb3lJbmZlcmVuY2VyIiwiZW1pdFZhbHVlIiwiaW5mZXJWYWx1ZSIsImVtaXQiLCJFbnNlbWJsZUluZmVyZW5jZXIiLCJlbnNlbWJsZUluZmVyZW5jZXIiLCJkZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIiLCJkZXBsb3kiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvdW50ZXIiLCJEZXBsb3ltZW50TWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJEZXBsb3ltZW50IiwiZGVwbG95bWVudCIsIk1vZGVsTGVuc2VzIiwiTW9kZWwiLCJUIiwiaW5wdXQiLCJQcmVkaWN0IiwiRW5jb2RlIiwiRGVjb2RlIiwiaW5wdXRUZW5zb3IiLCJ0ZW5zb3IiLCJhc1R5cGUiLCJyZXNoYXBlIiwicHJlZGljdFRlbnNvciIsImRhdGEiLCJlbmNvZGVUZW5zb3IiLCJkZWNvZGVUZW5zb3IiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsImdyb3VwRW5kIiwiRnVuY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FB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QixVQUFMLENBQWdCaEIsVUFBaEIsR0FBNkIsS0FBS0EsVUFBbEM7QUFDQSxTQUFLbUMsTUFBTCxDQUFZRSxRQUFaO0FBQ0EsV0FBT0gsY0FBUDtBQUNIOztBQUVELFFBQU16QixNQUFOLEdBQWM7QUFDVixXQUFPLE1BQU0sS0FBS08sVUFBTCxDQUFnQlAsTUFBaEIsRUFBYjtBQUNIOztBQXhEMEUsQ0FBL0U7O0FBMkRlSywrRUFBZixFOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFDZSxtRUFBSXdCLHVEQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kZXBsb3ltZW50Lm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kZXBsb3ltZW50XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9kZXBsb3ltZW50XCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG4vKipcbiAqIFRoZSBpbXBsZW1lbnRhdGlvbiBmb3IgZXZlbnQtYmFzZWQgbW9kZWwgZGVwbG95bWVudCB3aGljaCBpcyBzdXBwbGllZCBcbiAqIHRvIHBpcGVsaW5lIGNsYXNzIGluc3RhbmNlIGFzICoqRGVwbG95bWVudCoqIGF0dHJpYnV0ZS4gUGlwZWxpbmUgY2xhc3MgbXVzdCBiZSBtaXhlZCB3aXRoIERlcGxveW1lbnRNaXhpbnMuXG4gKiBAY2xhc3MgQ2F1c2FsTmV0RGVwbG95bWVudFxuICogQGV4dGVuZHMgRXZlbnRcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXREZXBsb3ltZW50LmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXREZXBsb3ltZW50IGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggRXZlbnQsIFtdICl7XG4gICAgXG4gICAgY29uc3RydWN0b3IoZnVuY3Rvcil7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuRiA9IGZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IGZ1bmN0b3IuQ29yZUZ1bmN0b3I7XG4gICAgfVxuXG4gICAgc2V0IEVtaXR0ZXIoZW1pdHRlcil7XG4gICAgICAgIHRoaXMuZGVwbG95RW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgfVxuXG4gICAgZ2V0IEVtaXR0ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95RW1pdHRlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRW1pdHRlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95RW1pdHRlcjtcbiAgICB9XG5cbiAgICBzZXQgTGlzdGVuZXIobGlzdGVuZXIpe1xuICAgICAgICB0aGlzLmRlcGxveUxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgICAgIHRoaXMub24oJ2luZmVyZW5jZXInLCAoaW5mZXIpPT57XG4gICAgICAgICAgICB0aGlzLmRlcGxveUxpc3RlbmVyKGluZmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oJ2Vuc2VtYmxlSW5mZXJlbmNlcicsIChpbmZlcik9PntcbiAgICAgICAgICAgIHRoaXMuZGVwbG95TGlzdGVuZXIoaW5mZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IExpc3RlbmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmRlcGxveUxpc3RlbmVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdMaXN0ZW5lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95TGlzdGVuZXI7XG4gICAgfVxuXG4gICAgc2V0IEluZmVyZW5jZXIoaW5mZXJlbmNlcil7XG4gICAgICAgIHRoaXMuZGVwbG95SW5mZXJlbmNlciA9IGluZmVyZW5jZXI7XG4gICAgICAgIHRoaXMub24oJ2VtaXR0ZXInLCBhc3luYyAoZW1pdFZhbHVlKT0+e1xuICAgICAgICAgICAgbGV0IGluZmVyVmFsdWUgPSBhd2FpdCB0aGlzLmRlcGxveUluZmVyZW5jZXIoZW1pdFZhbHVlKTtcbiAgICAgICAgICAgIGlmKGluZmVyVmFsdWUgJiYgaW5mZXJWYWx1ZSAhPT0ge30pe1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnaW5mZXJlbmNlcicsIGluZmVyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgSW5mZXJlbmNlcigpe1xuICAgICAgICBpZighdGhpcy5kZXBsb3lJbmZlcmVuY2VyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdJbmZlcmVuY2VyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZXBsb3lJbmZlcmVuY2VyO1xuICAgIH1cblxuICAgIHNldCBFbnNlbWJsZUluZmVyZW5jZXIoZW5zZW1ibGVJbmZlcmVuY2VyKXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGVwbG95RW5zZW1ibGVJbmZlcmVuY2VyID0gZW5zZW1ibGVJbmZlcmVuY2VyO1xuICAgICAgICB0aGlzLm9uKCdlbWl0dGVyJywgYXN5bmMgKGVtaXRWYWx1ZSk9PntcbiAgICAgICAgICAgIGxldCBpbmZlclZhbHVlID0gYXdhaXQgdGhpcy5kZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIoZW1pdFZhbHVlKTtcbiAgICAgICAgICAgIGlmKGluZmVyVmFsdWUgJiYgaW5mZXJWYWx1ZSAhPT0ge30pe1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZW5zZW1ibGVJbmZlcmVuY2VyJywgaW5mZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBFbnNlbWJsZUluZmVyZW5jZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95RW5zZW1ibGVJbmZlcmVuY2VyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdFbnNlbWJsZUluZmVyZW5jZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveUVuc2VtYmxlSW5mZXJlbmNlcjtcbiAgICB9XG5cbiAgICBhc3luYyBkZXBsb3koKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICBsZXQgZW1pdFZhbHVlID0gYXdhaXQgdGhpcy5FbWl0dGVyKCk7XG4gICAgICAgICAgICB3aGlsZShlbWl0VmFsdWUgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZW1pdHRlcicsIGVtaXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICAgICAgICAgIGVtaXRWYWx1ZSA9IGF3YWl0IHRoaXMuRW1pdHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShjb3VudGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0RGVwbG95bWVudChmdW5jdG9yKTsiLCIvKipcbiAqIFRoaXMgbWl4aW4gY2xhc3MgcHJvdmlkZXMgYXR0cmlidXRlczogKipEZXBsb3ltZW50KiosICoqSW5mZXJlbmNlcioqLCBhbmQgaGFuZGxlIERlcGxveW1lbnQgc2V0dGluZyBvZiBwaXBlbGluZUNvbmZpZy5cbiAqIEBjbGFzcyBEZXBsb3ltZW50TWl4aW5zXG4gKiBAZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldERlcGxveW1lbnQuYmFiZWwuanNdXG4gKi9cbmNvbnN0IERlcGxveW1lbnRNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzcyB7XG4gICBcbiAgICBzZXQgRGVwbG95bWVudChkZXBsb3ltZW50KXtcbiAgICAgICAgdGhpcy5kZXBsb3ltZW50ID0gZGVwbG95bWVudDtcbiAgICB9XG5cbiAgICBnZXQgRGVwbG95bWVudCgpe1xuICAgICAgICBpZighdGhpcy5kZXBsb3ltZW50KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdkZXBsb3ltZW50IGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZXBsb3ltZW50O1xuICAgIH1cblxuICAgIGdldCBJbmZlcmVuY2VyKCl7XG4gICAgICAgIGNvbnN0IE1vZGVsTGVuc2VzID0gKCk9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1vZGVsO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICByZXR1cm4gYXN5bmMgKGlucHV0KT0+e1xuICAgICAgICAgICAgbGV0IHsgUHJlZGljdCwgRW5jb2RlLCBEZWNvZGUgfSA9IGlucHV0O1xuICAgICAgICAgICAgbGV0IGluZmVyID0ge307XG4gICAgICAgICAgICBjb25zdCBNb2RlbCA9IE1vZGVsTGVuc2VzKCk7XG4gICAgICAgICAgICBpZihQcmVkaWN0KXtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihQcmVkaWN0KS5hc1R5cGUoJ2Zsb2F0MzInKS5yZXNoYXBlKFsxLCAtMV0pO1xuICAgICAgICAgICAgICAgIGxldCBwcmVkaWN0VGVuc29yID0gTW9kZWwuUHJlZGljdChpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICAgICAgaW5mZXIuUHJlZGljdCA9IGF3YWl0IHByZWRpY3RUZW5zb3IuZGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoRW5jb2RlKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihFbmNvZGUpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IGVuY29kZVRlbnNvciA9IE1vZGVsLkVuY29kZShpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICAgICAgaW5mZXIuRW5jb2RlID0gYXdhaXQgZW5jb2RlVGVuc29yLmRhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKERlY29kZSl7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VGVuc29yID0gVC50ZW5zb3IoRGVjb2RlKS5hc1R5cGUoJ2Zsb2F0MzInKS5yZXNoYXBlKFsxLCAtMV0pO1xuICAgICAgICAgICAgICAgIGxldCBkZWNvZGVUZW5zb3IgPSBNb2RlbC5FbmNvZGUoaW5wdXRUZW5zb3IpO1xuICAgICAgICAgICAgICAgIGluZmVyLkRlY29kZSA9IGF3YWl0IGRlY29kZVRlbnNvci5kYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5mZXI7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IGRlcGxveW1lbnQgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgRW1pdHRlciwgTGlzdGVuZXIgfSA9IHBpcGVsaW5lQ29uZmlnLkRlcGxveW1lbnQ7XG4gICAgICAgIHRoaXMuRGVwbG95bWVudC5FbWl0dGVyID0gRW1pdHRlcjtcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50Lkxpc3RlbmVyID0gTGlzdGVuZXI7XG4gICAgICAgIHRoaXMuRGVwbG95bWVudC5JbmZlcmVuY2VyID0gdGhpcy5JbmZlcmVuY2VyO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICByZXR1cm4gcGlwZWxpbmVDb25maWc7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVwbG95KCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLkRlcGxveW1lbnQuZGVwbG95KCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVwbG95bWVudE1peGluczsiLCJpbXBvcnQgeyBGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXREZXBsb3ltZW50IH0gZnJvbSAnLi9jYXVzYWxOZXREZXBsb3ltZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVwbG95bWVudE1peGlucyB9IGZyb20gJy4vZGVwbG95bWVudC5taXhpbnMnOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=