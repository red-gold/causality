(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.datasets"), require("causal-net.layer"), require("causal-net.log"), require("causal-net.optimizers"), require("causal-net.preprocessing"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.datasets", "causal-net.layer", "causal-net.log", "causal-net.optimizers", "causal-net.preprocessing", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/pipeline"] = factory(require("causal-net.core"), require("causal-net.datasets"), require("causal-net.layer"), require("causal-net.log"), require("causal-net.optimizers"), require("causal-net.preprocessing"), require("causal-net.utils"));
	else
		root["@causalNet/pipeline"] = factory(root["causal-net.core"], root["causal-net.datasets"], root["causal-net.layer"], root["causal-net.log"], root["causal-net.optimizers"], root["causal-net.preprocessing"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_datasets__, __WEBPACK_EXTERNAL_MODULE_causal_net_layer__, __WEBPACK_EXTERNAL_MODULE_causal_net_log__, __WEBPACK_EXTERNAL_MODULE_causal_net_optimizers__, __WEBPACK_EXTERNAL_MODULE_causal_net_preprocessing__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "../causality-deployment/dist/@causalNet/deployment.web.js":
/*!******************************************************!*\
  !*** .-deployment/dist/@causalNet/deployment.web.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"));
	else {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvY2F1c2FsTmV0RGVwbG95bWVudC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2Z1bmN0b3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXREZXBsb3ltZW50IiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJjb25zdHJ1Y3RvciIsImZ1bmN0b3IiLCJGIiwiUiIsIkNvcmVGdW5jdG9yIiwiRW1pdHRlciIsImVtaXR0ZXIiLCJkZXBsb3lFbWl0dGVyIiwiRXJyb3IiLCJMaXN0ZW5lciIsImxpc3RlbmVyIiwiZGVwbG95TGlzdGVuZXIiLCJvbiIsImluZmVyIiwiSW5mZXJlbmNlciIsImluZmVyZW5jZXIiLCJkZXBsb3lJbmZlcmVuY2VyIiwiZW1pdFZhbHVlIiwiaW5mZXJWYWx1ZSIsImVtaXQiLCJFbnNlbWJsZUluZmVyZW5jZXIiLCJlbnNlbWJsZUluZmVyZW5jZXIiLCJkZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIiLCJkZXBsb3kiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvdW50ZXIiLCJEZXBsb3ltZW50TWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJEZXBsb3ltZW50IiwiZGVwbG95bWVudCIsIk1vZGVsTGVuc2VzIiwiTW9kZWwiLCJUIiwiaW5wdXQiLCJQcmVkaWN0IiwiRW5jb2RlIiwiRGVjb2RlIiwiaW5wdXRUZW5zb3IiLCJ0ZW5zb3IiLCJhc1R5cGUiLCJyZXNoYXBlIiwicHJlZGljdFRlbnNvciIsImRhdGEiLCJlbmNvZGVUZW5zb3IiLCJkZWNvZGVUZW5zb3IiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsImdyb3VwRW5kIiwiRnVuY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FB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QixVQUFMLENBQWdCaEIsVUFBaEIsR0FBNkIsS0FBS0EsVUFBbEM7QUFDQSxTQUFLbUMsTUFBTCxDQUFZRSxRQUFaO0FBQ0EsV0FBT0gsY0FBUDtBQUNIOztBQUVELFFBQU16QixNQUFOLEdBQWM7QUFDVixXQUFPLE1BQU0sS0FBS08sVUFBTCxDQUFnQlAsTUFBaEIsRUFBYjtBQUNIOztBQXhEMEUsQ0FBL0U7O0FBMkRlSywrRUFBZixFOzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFDZSxtRUFBSXdCLHVEQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kZXBsb3ltZW50LndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RlcGxveW1lbnRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RlcGxveW1lbnRcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhlIGltcGxlbWVudGF0aW9uIGZvciBldmVudC1iYXNlZCBtb2RlbCBkZXBsb3ltZW50IHdoaWNoIGlzIHN1cHBsaWVkIFxuICogdG8gcGlwZWxpbmUgY2xhc3MgaW5zdGFuY2UgYXMgKipEZXBsb3ltZW50KiogYXR0cmlidXRlLiBQaXBlbGluZSBjbGFzcyBtdXN0IGJlIG1peGVkIHdpdGggRGVwbG95bWVudE1peGlucy5cbiAqIEBjbGFzcyBDYXVzYWxOZXREZXBsb3ltZW50XG4gKiBAZXh0ZW5kcyBFdmVudFxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldERlcGxveW1lbnQuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldERlcGxveW1lbnQgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKCBFdmVudCwgW10gKXtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihmdW5jdG9yKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gZnVuY3Rvci5Db3JlRnVuY3RvcjtcbiAgICB9XG5cbiAgICBzZXQgRW1pdHRlcihlbWl0dGVyKXtcbiAgICAgICAgdGhpcy5kZXBsb3lFbWl0dGVyID0gZW1pdHRlcjtcbiAgICB9XG5cbiAgICBnZXQgRW1pdHRlcigpe1xuICAgICAgICBpZighdGhpcy5kZXBsb3lFbWl0dGVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdFbWl0dGVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZXBsb3lFbWl0dGVyO1xuICAgIH1cblxuICAgIHNldCBMaXN0ZW5lcihsaXN0ZW5lcil7XG4gICAgICAgIHRoaXMuZGVwbG95TGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5vbignaW5mZXJlbmNlcicsIChpbmZlcik9PntcbiAgICAgICAgICAgIHRoaXMuZGVwbG95TGlzdGVuZXIoaW5mZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbignZW5zZW1ibGVJbmZlcmVuY2VyJywgKGluZmVyKT0+e1xuICAgICAgICAgICAgdGhpcy5kZXBsb3lMaXN0ZW5lcihpbmZlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBnZXQgTGlzdGVuZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95TGlzdGVuZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xpc3RlbmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZXBsb3lMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBzZXQgSW5mZXJlbmNlcihpbmZlcmVuY2VyKXtcbiAgICAgICAgdGhpcy5kZXBsb3lJbmZlcmVuY2VyID0gaW5mZXJlbmNlcjtcbiAgICAgICAgdGhpcy5vbignZW1pdHRlcicsIGFzeW5jIChlbWl0VmFsdWUpPT57XG4gICAgICAgICAgICBsZXQgaW5mZXJWYWx1ZSA9IGF3YWl0IHRoaXMuZGVwbG95SW5mZXJlbmNlcihlbWl0VmFsdWUpO1xuICAgICAgICAgICAgaWYoaW5mZXJWYWx1ZSAmJiBpbmZlclZhbHVlICE9PSB7fSl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdpbmZlcmVuY2VyJywgaW5mZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBJbmZlcmVuY2VyKCl7XG4gICAgICAgIGlmKCF0aGlzLmRlcGxveUluZmVyZW5jZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0luZmVyZW5jZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveUluZmVyZW5jZXI7XG4gICAgfVxuXG4gICAgc2V0IEVuc2VtYmxlSW5mZXJlbmNlcihlbnNlbWJsZUluZmVyZW5jZXIpe1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIgPSBlbnNlbWJsZUluZmVyZW5jZXI7XG4gICAgICAgIHRoaXMub24oJ2VtaXR0ZXInLCBhc3luYyAoZW1pdFZhbHVlKT0+e1xuICAgICAgICAgICAgbGV0IGluZmVyVmFsdWUgPSBhd2FpdCB0aGlzLmRlcGxveUVuc2VtYmxlSW5mZXJlbmNlcihlbWl0VmFsdWUpO1xuICAgICAgICAgICAgaWYoaW5mZXJWYWx1ZSAmJiBpbmZlclZhbHVlICE9PSB7fSl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlbnNlbWJsZUluZmVyZW5jZXInLCBpbmZlclZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IEVuc2VtYmxlSW5mZXJlbmNlcigpe1xuICAgICAgICBpZighdGhpcy5kZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0Vuc2VtYmxlSW5mZXJlbmNlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95RW5zZW1ibGVJbmZlcmVuY2VyO1xuICAgIH1cblxuICAgIGFzeW5jIGRlcGxveSgpe1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgICAgIGxldCBlbWl0VmFsdWUgPSBhd2FpdCB0aGlzLkVtaXR0ZXIoKTtcbiAgICAgICAgICAgIHdoaWxlKGVtaXRWYWx1ZSAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlbWl0dGVyJywgZW1pdFZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgICAgICAgICAgZW1pdFZhbHVlID0gYXdhaXQgdGhpcy5FbWl0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKGNvdW50ZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXREZXBsb3ltZW50KGZ1bmN0b3IpOyIsIi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlcyBhdHRyaWJ1dGVzOiAqKkRlcGxveW1lbnQqKiwgKipJbmZlcmVuY2VyKiosIGFuZCBoYW5kbGUgRGVwbG95bWVudCBzZXR0aW5nIG9mIHBpcGVsaW5lQ29uZmlnLlxuICogQGNsYXNzIERlcGxveW1lbnRNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0RGVwbG95bWVudC5iYWJlbC5qc11cbiAqL1xuY29uc3QgRGVwbG95bWVudE1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzIHtcbiAgIFxuICAgIHNldCBEZXBsb3ltZW50KGRlcGxveW1lbnQpe1xuICAgICAgICB0aGlzLmRlcGxveW1lbnQgPSBkZXBsb3ltZW50O1xuICAgIH1cblxuICAgIGdldCBEZXBsb3ltZW50KCl7XG4gICAgICAgIGlmKCF0aGlzLmRlcGxveW1lbnQpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2RlcGxveW1lbnQgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IEluZmVyZW5jZXIoKXtcbiAgICAgICAgY29uc3QgTW9kZWxMZW5zZXMgPSAoKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTW9kZWw7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIHJldHVybiBhc3luYyAoaW5wdXQpPT57XG4gICAgICAgICAgICBsZXQgeyBQcmVkaWN0LCBFbmNvZGUsIERlY29kZSB9ID0gaW5wdXQ7XG4gICAgICAgICAgICBsZXQgaW5mZXIgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IE1vZGVsID0gTW9kZWxMZW5zZXMoKTtcbiAgICAgICAgICAgIGlmKFByZWRpY3Qpe1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKFByZWRpY3QpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IHByZWRpY3RUZW5zb3IgPSBNb2RlbC5QcmVkaWN0KGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgICAgICBpbmZlci5QcmVkaWN0ID0gYXdhaXQgcHJlZGljdFRlbnNvci5kYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihFbmNvZGUpe1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKEVuY29kZSkuYXNUeXBlKCdmbG9hdDMyJykucmVzaGFwZShbMSwgLTFdKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5jb2RlVGVuc29yID0gTW9kZWwuRW5jb2RlKGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgICAgICBpbmZlci5FbmNvZGUgPSBhd2FpdCBlbmNvZGVUZW5zb3IuZGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoRGVjb2RlKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihEZWNvZGUpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IGRlY29kZVRlbnNvciA9IE1vZGVsLkVuY29kZShpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICAgICAgaW5mZXIuRGVjb2RlID0gYXdhaXQgZGVjb2RlVGVuc29yLmRhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmZlcjtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgZGVwbG95bWVudCBieSBjb25maWcnKTtcbiAgICAgICAgY29uc3QgeyBFbWl0dGVyLCBMaXN0ZW5lciB9ID0gcGlwZWxpbmVDb25maWcuRGVwbG95bWVudDtcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50LkVtaXR0ZXIgPSBFbWl0dGVyO1xuICAgICAgICB0aGlzLkRlcGxveW1lbnQuTGlzdGVuZXIgPSBMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50LkluZmVyZW5jZXIgPSB0aGlzLkluZmVyZW5jZXI7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBwaXBlbGluZUNvbmZpZztcbiAgICB9XG5cbiAgICBhc3luYyBkZXBsb3koKXtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuRGVwbG95bWVudC5kZXBsb3koKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXBsb3ltZW50TWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldERlcGxveW1lbnQgfSBmcm9tICcuL2NhdXNhbE5ldERlcGxveW1lbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXBsb3ltZW50TWl4aW5zIH0gZnJvbSAnLi9kZXBsb3ltZW50Lm1peGlucyc7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "../causality-models/dist/@causalNet/models.web.js":
/*!**********************************************!*\
  !*** .-models/dist/@causalNet/models.web.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"));
	else {}
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

/***/ "./src/baseModel.js":
/*!**************************!*\
  !*** ./src/baseModel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);


class BaseModel extends causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"] {
  constructor() {
    super();
    this.modelName = '';
  }

  set LayerRunner(runner) {
    throw Error('implement required');
  }

  get LayerRunner() {
    throw Error('implement required');
  }

  fit() {
    throw Error('implement required');
  }

  loss() {
    throw Error('implement required');
  }

  predict() {
    throw Error('implement required');
  }

  oneHotPredict() {
    throw Error('implement required');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BaseModel);

/***/ }),

/***/ "./src/causalNetModels.js":
/*!********************************!*\
  !*** ./src/causalNetModels.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleLableClassification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleLableClassification */ "./src/singleLableClassification.js");



/**
 * This class provide common used models which can be accessed via **causalNetModels** instance.
 * @class CausalNetModels
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/singleLabelClassification.babel.js]
 */

class CausalNetModels extends causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Tensor"], []) {
  constructor() {
    super();
  }

  classification(numClass) {
    this.model = new _singleLableClassification__WEBPACK_IMPORTED_MODULE_2__["default"](numClass);
    return this.model;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetModels());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetModels, ModelMixins, BaseModel, SingleLabelClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetModels */ "./src/causalNetModels.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetModels", function() { return _causalNetModels__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _model_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.mixins */ "./src/model.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelMixins", function() { return _model_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseModel */ "./src/baseModel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return _baseModel__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _singleLableClassification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singleLableClassification */ "./src/singleLableClassification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleLabelClassification", function() { return _singleLableClassification__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/model.mixins.js":
/*!*****************************!*\
  !*** ./src/model.mixins.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ModelMixins = BasePipelineClass => class extends BasePipelineClass {
  get LossModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.Loss;
  }

  get FitModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.Fit;
  }

  get OneHotPredictModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.OneHotPredict;
  }

  get PredictModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.Predict;
  }

  get EncodeModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.Encode;
  }

  get DecodeModel() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel.Decode;
  }

  get Model() {
    if (!this.netModel) {
      throw Error('netModel is not set');
    }

    return this.netModel;
  }

  set Model(model) {
    this.netModel = model;
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('set Model by config');
    const {
      Model
    } = pipelineConfig.Net;

    if (!Model) {
      throw Error(`Model is not set in ${JSON.stringlify(pipelineConfig)}`);
    }

    Model.LayerRunner = this.LayerRunner;
    this.Model = Model;
    this.Logger.groupEnd();
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ModelMixins);

/***/ }),

/***/ "./src/singleLableClassification.js":
/*!******************************************!*\
  !*** ./src/singleLableClassification.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseModel */ "./src/baseModel.js");


class SingleLabelClassification extends _baseModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(numClass) {
    super();

    if (numClass > 0) {
      this.numClass = numClass;
    } else {
      throw Error(`expect numclass, get ${numClass}`);
    }
  }

  set LayerRunner(layerRunner) {
    let {
      Predictor
    } = layerRunner;
    this.runner = {
      Predictor
    };
  }

  get LayerRunner() {
    if (!this.runner) {
      throw Error('runner is not set');
    }

    return this.runner;
  }

  get Fit() {
    const {
      Predictor
    } = this.LayerRunner;
    return inputTensor => {
      let outPutTensor = Predictor(inputTensor);
      let logProb = outPutTensor.sub(outPutTensor.logSumExp(1, true));
      return logProb;
    };
  }

  get Predict() {
    const Fit = this.Fit;
    return inputTensor => {
      let logProb = Fit(inputTensor);
      let predictedClass = logProb.argMax(1);
      return predictedClass;
    };
  }

  get OneHotPredict() {
    const Predict = this.Predict;
    return inputTensor => {
      let predictedClass = Predict(inputTensor);
      let oneHotPredict = this.T.oneHot(predictedClass, this.numClass);
      return oneHotPredict;
    };
  }

  get Loss() {
    const Fit = this.Fit;
    return (inputTensor, labelTensor) => {
      let logProb = Fit(inputTensor);
      let likelihood = logProb.neg().mul(labelTensor);
      let loss = likelihood.sum(1).mean();
      return loss;
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SingleLabelClassification);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvYmFzZU1vZGVsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL2NhdXNhbE5ldE1vZGVscy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9tb2RlbC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkJhc2VNb2RlbCIsIlRlbnNvciIsImNvbnN0cnVjdG9yIiwibW9kZWxOYW1lIiwiTGF5ZXJSdW5uZXIiLCJydW5uZXIiLCJFcnJvciIsImZpdCIsImxvc3MiLCJwcmVkaWN0Iiwib25lSG90UHJlZGljdCIsIkNhdXNhbE5ldE1vZGVscyIsInBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VUZW5zb3IiLCJjbGFzc2lmaWNhdGlvbiIsIm51bUNsYXNzIiwibW9kZWwiLCJTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIiwiTW9kZWxNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIkxvc3NNb2RlbCIsIm5ldE1vZGVsIiwiTG9zcyIsIkZpdE1vZGVsIiwiRml0IiwiT25lSG90UHJlZGljdE1vZGVsIiwiT25lSG90UHJlZGljdCIsIlByZWRpY3RNb2RlbCIsIlByZWRpY3QiLCJFbmNvZGVNb2RlbCIsIkVuY29kZSIsIkRlY29kZU1vZGVsIiwiRGVjb2RlIiwiTW9kZWwiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIk5ldCIsIkpTT04iLCJzdHJpbmdsaWZ5IiwiZ3JvdXBFbmQiLCJsYXllclJ1bm5lciIsIlByZWRpY3RvciIsImlucHV0VGVuc29yIiwib3V0UHV0VGVuc29yIiwibG9nUHJvYiIsInN1YiIsImxvZ1N1bUV4cCIsInByZWRpY3RlZENsYXNzIiwiYXJnTWF4IiwiVCIsIm9uZUhvdCIsImxhYmVsVGVuc29yIiwibGlrZWxpaG9vZCIsIm5lZyIsIm11bCIsInN1bSIsIm1lYW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7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Q29CLFdBQUQsRUFBY1MsV0FBZCxLQUE0QjtBQUMvQixVQUFJUCxPQUFPLEdBQUd0QixHQUFHLENBQUNvQixXQUFELENBQWpCO0FBQ0EsVUFBSVUsVUFBVSxHQUFHUixPQUFPLENBQUNTLEdBQVIsR0FBY0MsR0FBZCxDQUFrQkgsV0FBbEIsQ0FBakI7QUFDQSxVQUFJOUMsSUFBSSxHQUFHK0MsVUFBVSxDQUFDRyxHQUFYLENBQWUsQ0FBZixFQUFrQkMsSUFBbEIsRUFBWDtBQUNBLGFBQU9uRCxJQUFQO0FBQ0gsS0FMRDtBQU1IOztBQXpENEM7O0FBMkRsQ1Usd0ZBQWYsRTs7Ozs7Ozs7Ozs7QUM3REEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9tb2RlbHMud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuY2xhc3MgQmFzZU1vZGVsIGV4dGVuZHMgVGVuc29ye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kZWxOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgc2V0IExheWVyUnVubmVyKHJ1bm5lcil7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBnZXQgTGF5ZXJSdW5uZXIoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGZpdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbG9zcygpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcHJlZGljdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIG9uZUhvdFByZWRpY3QoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZU1vZGVsOyIsImltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24nO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGUgY29tbW9uIHVzZWQgbW9kZWxzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRNb2RlbHMqKiBpbnN0YW5jZS5cbiAqIEBjbGFzcyBDYXVzYWxOZXRNb2RlbHNcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9zaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRNb2RlbHMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKCBCYXNlVGVuc29yLCBbXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIGNsYXNzaWZpY2F0aW9uKG51bUNsYXNzKXtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uKG51bUNsYXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWw7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldE1vZGVscygpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0TW9kZWxzIH0gZnJvbSAnLi9jYXVzYWxOZXRNb2RlbHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RlbE1peGlucyB9IGZyb20gJy4vbW9kZWwubWl4aW5zJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNlTW9kZWwgfSBmcm9tICcuL2Jhc2VNb2RlbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24nO1xuIiwiY29uc3QgTW9kZWxNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXQgTG9zc01vZGVsKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldE1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuTG9zcztcbiAgICB9XG5cbiAgICBnZXQgRml0TW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5GaXQ7XG4gICAgfVxuICAgIFxuICAgIGdldCBPbmVIb3RQcmVkaWN0TW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5PbmVIb3RQcmVkaWN0O1xuICAgIH1cblxuICAgIGdldCBQcmVkaWN0TW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5QcmVkaWN0O1xuICAgIH1cblxuICAgIGdldCBFbmNvZGVNb2RlbCgpe1xuICAgICAgICBpZighdGhpcy5uZXRNb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkVuY29kZTtcbiAgICB9XG5cbiAgICBnZXQgRGVjb2RlTW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5EZWNvZGU7XG4gICAgfVxuXG5cbiAgICBnZXQgTW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbDtcbiAgICB9XG4gICAgXG5cbiAgICBzZXQgTW9kZWwobW9kZWwpeyAgICAgICAgXG4gICAgICAgIHRoaXMubmV0TW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgTW9kZWwgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgTW9kZWwgfSA9IHBpcGVsaW5lQ29uZmlnLk5ldDtcbiAgICAgICAgaWYoIU1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBNb2RlbCBpcyBub3Qgc2V0IGluICR7SlNPTi5zdHJpbmdsaWZ5KHBpcGVsaW5lQ29uZmlnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBNb2RlbC5MYXllclJ1bm5lciA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgICAgIHRoaXMuTW9kZWwgPSBNb2RlbDtcbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RlbE1peGlucztcbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZU1vZGVsIH0gZnJvbSAnLi9iYXNlTW9kZWwnO1xuXG5jbGFzcyBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIGV4dGVuZHMgQmFzZU1vZGVse1xuICAgIGNvbnN0cnVjdG9yKG51bUNsYXNzKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYobnVtQ2xhc3MgPiAwKXtcbiAgICAgICAgICAgIHRoaXMubnVtQ2xhc3MgPSBudW1DbGFzcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBudW1jbGFzcywgZ2V0ICR7bnVtQ2xhc3N9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQgTGF5ZXJSdW5uZXIobGF5ZXJSdW5uZXIpe1xuICAgICAgICBsZXQgeyBQcmVkaWN0b3IgfSA9IGxheWVyUnVubmVyO1xuICAgICAgICB0aGlzLnJ1bm5lciA9IHsgUHJlZGljdG9yIH07XG4gICAgfVxuXG4gICAgZ2V0IExheWVyUnVubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnJ1bm5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5ydW5uZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgY29uc3QgeyBQcmVkaWN0b3IgfSA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IpPT57XG4gICAgICAgICAgICBsZXQgb3V0UHV0VGVuc29yID0gUHJlZGljdG9yKGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gb3V0UHV0VGVuc29yLnN1YihvdXRQdXRUZW5zb3IubG9nU3VtRXhwKDEsIHRydWUpKTtcbiAgICAgICAgICAgIHJldHVybiBsb2dQcm9iO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBcbiAgICBnZXQgUHJlZGljdCgpe1xuICAgICAgICBjb25zdCBGaXQgPSB0aGlzLkZpdDtcbiAgICAgICAgcmV0dXJuIChpbnB1dFRlbnNvcik9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHByZWRpY3RlZENsYXNzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBPbmVIb3RQcmVkaWN0KCl7XG4gICAgICAgIGNvbnN0IFByZWRpY3QgPSB0aGlzLlByZWRpY3Q7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IpPT57XG4gICAgICAgICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBQcmVkaWN0KGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBvbmVIb3RQcmVkaWN0ID0gdGhpcy5ULm9uZUhvdChwcmVkaWN0ZWRDbGFzcywgdGhpcy5udW1DbGFzcyk7XG4gICAgICAgICAgICByZXR1cm4gb25lSG90UHJlZGljdDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IExvc3MoKXtcbiAgICAgICAgY29uc3QgRml0ID0gdGhpcy5GaXQ7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IsIGxhYmVsVGVuc29yKT0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBGaXQoaW5wdXRUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IGxpa2VsaWhvb2QgPSBsb2dQcm9iLm5lZygpLm11bChsYWJlbFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgbG9zcyA9IGxpa2VsaWhvb2Quc3VtKDEpLm1lYW4oKTtcbiAgICAgICAgICAgIHJldHVybiBsb3NzO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb247IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/Ensemble/ensembleDeployment.mixins.js":
/*!***************************************************!*\
  !*** ./src/Ensemble/ensembleDeployment.mixins.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The EnsembleDeploymentMixins class is the mixis class for deploying ensemble model
 * @class CausalNet
 * @extends { BasePipelineClass }
 */
const EnsembleDeploymentMixins = BasePipelineClass => class extends BasePipelineClass {
  /**
   * Provide EnsembleInferencer caller, EnsembleModelPredict must be set in prior
   * @readonly
   */
  get EnsembleInferencer() {
    const ModelLenses = () => ({
      EnsemblePredict: this.EnsembleModelPredict
    });

    const T = this.T;
    return async input => {
      let {
        EnsemblePredict
      } = input;
      let infer = {};

      if (EnsemblePredict) {
        let inputTensor = T.tensor(EnsemblePredict).asType('float32').reshape([1, -1]);
        let predictTensor = await ModelLenses().EnsemblePredict(inputTensor);
        infer.EnsemblePredict = await predictTensor.data();
      }

      return infer;
    };
  }
  /**
   * process pipelineConfig object for ensemble deployment
   * @param { Object } pipelineConfig
   * @returns
   */


  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('set ensemble deployment by config');
    this.Deployment.EnsembleInferencer = this.EnsembleInferencer;
    this.Logger.groupEnd();
    return pipelineConfig;
  }
  /**
   * deploy model
   * @returns { Promise } deployment summary
   */


  async deploy() {
    return await this.Deployment.deploy();
  }

};

/* harmony default export */ __webpack_exports__["default"] = (EnsembleDeploymentMixins);

/***/ }),

/***/ "./src/Ensemble/ensembleEvaluator.mixins.js":
/*!**************************************************!*\
  !*** ./src/Ensemble/ensembleEvaluator.mixins.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const EnsembleEvaluatorMixins = BasePipelineClass => class extends BasePipelineClass {
  async ensembleTest(batchSize, method = 'accuracy') {
    throw Error('implement require');
  }

};

/* harmony default export */ __webpack_exports__["default"] = (EnsembleEvaluatorMixins);

/***/ }),

/***/ "./src/Ensemble/ensembleModel.mixins.js":
/*!**********************************************!*\
  !*** ./src/Ensemble/ensembleModel.mixins.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The EnsembleModelMixins class is the mixis class for ensemble model caller
 * @class EnsembleModelMixins
 * @extends {BasePipelineClass}
 */
const EnsembleModelMixins = BasePipelineClass => class extends BasePipelineClass {
  get EnsembleModelPredict() {
    const FitModel = this.FitModel;
    const T = this.T;
    const EnsembleModels = this.EnsembleModels;

    const Bagging = async inputTensor => {
      let probFits = [];

      for (let model of EnsembleModels) {
        await this.loadParams(model);
        let prob = FitModel(inputTensor).exp();
        probFits.push(prob);
      }

      let meanProb = T.stack(probFits).mean(0);
      return meanProb.argMax(1);
    };

    return Bagging;
  }

  set EnsembleModels(modelist) {
    this.ensembleModels = modelist;
  }

  get EnsembleModels() {
    if (!this.ensembleModels) {
      throw Error('EnsembleModels is not set');
    }

    return this.ensembleModels;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (EnsembleModelMixins);

/***/ }),

/***/ "./src/Ensemble/ensembleTrainer.mixins.js":
/*!************************************************!*\
  !*** ./src/Ensemble/ensembleTrainer.mixins.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The EnsembleTrainerMixins class is the mixins class for training ensamblable models
 * @class EnsembleTrainerMixins
 * @extends {BasePipelineClass}
 */
const EnsembleTrainerMixins = BasePipelineClass => class extends BasePipelineClass {
  /**
   * Train model and save to storage under the given filename. parameters is reinited for each training
   * @param { Number } numEpochs
   * @param { Number } batchSize
   * @param { String } saveFileName
   * @returns { Promise } Training losses
   */
  async ensembleTrain(numEpochs, batchSize, saveFileName) {
    this.LayerRunner.NetParameters = this.ParameterInitializer(this.LayerRunner.NetLayers);
    let losses = await this.train(numEpochs, batchSize);
    await this.saveParams(saveFileName);
    return {
      [saveFileName]: losses
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (EnsembleTrainerMixins);

/***/ }),

/***/ "./src/Ensemble/index.js":
/*!*******************************!*\
  !*** ./src/Ensemble/index.js ***!
  \*******************************/
/*! exports provided: EnsembleTrainerMixins, EnsembleModelMixins, EnsembleDeploymentMixins, EnsembleEvaluatorMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ensembleTrainer_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ensembleTrainer.mixins */ "./src/Ensemble/ensembleTrainer.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnsembleTrainerMixins", function() { return _ensembleTrainer_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ensembleModel_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ensembleModel.mixins */ "./src/Ensemble/ensembleModel.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnsembleModelMixins", function() { return _ensembleModel_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ensembleDeployment_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ensembleDeployment.mixins */ "./src/Ensemble/ensembleDeployment.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnsembleDeploymentMixins", function() { return _ensembleDeployment_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ensembleEvaluator_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ensembleEvaluator.mixins */ "./src/Ensemble/ensembleEvaluator.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnsembleEvaluatorMixins", function() { return _ensembleEvaluator_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/causalNet.js":
/*!**************************!*\
  !*** ./src/causalNet.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_datasets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.datasets */ "causal-net.datasets");
/* harmony import */ var causal_net_datasets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_datasets__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.preprocessing */ "causal-net.preprocessing");
/* harmony import */ var causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.optimizers */ "causal-net.optimizers");
/* harmony import */ var causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var causal_net_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.models */ "../causality-models/dist/@causalNet/models.web.js");
/* harmony import */ var causal_net_models__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_models__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var causal_net_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! causal-net.layer */ "causal-net.layer");
/* harmony import */ var causal_net_layer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(causal_net_layer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var causal_net_deployment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! causal-net.deployment */ "../causality-deployment/dist/@causalNet/deployment.web.js");
/* harmony import */ var causal_net_deployment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(causal_net_deployment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! causal-net.log */ "causal-net.log");
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(causal_net_log__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _functor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functor */ "./src/functor.js");
/* harmony import */ var _Ensemble_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Ensemble/index */ "./src/Ensemble/index.js");











/**
 * The CausalNet class is the prebuilt pipeline with methods for 
 * processing data/train/evaluate/deploy/ensemble deploy
 * { mixWith: [ 
 *         DataSourceMixins,
 *         PreprocessingMixins,
 *         LayerRunnerMixins, 
 *         ModelMixins, 
 *         EvaluatorMixins,
 *         TrainerMixins, 
 *         LoggerMixins,
 *         DeploymentMixins,
 *         EnsembleTrainerMixins,
 *         EnsembleModelMixins, 
 *         EnsembleDeploymentMixins ] }
 * @class CausalNet
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/causalNet/ensemble.logisticRegression.babel.js]
 */

class CausalNet extends causal_net_utils__WEBPACK_IMPORTED_MODULE_6__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_5__["Tensor"], [causal_net_datasets__WEBPACK_IMPORTED_MODULE_0__["DataSourceMixins"], causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1__["PreprocessingMixins"], causal_net_layer__WEBPACK_IMPORTED_MODULE_4__["LayerRunnerMixins"], causal_net_models__WEBPACK_IMPORTED_MODULE_3__["ModelMixins"], causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2__["EvaluatorMixins"], causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2__["TrainerMixins"], causal_net_log__WEBPACK_IMPORTED_MODULE_8__["LoggerMixins"], causal_net_deployment__WEBPACK_IMPORTED_MODULE_7__["DeploymentMixins"], _Ensemble_index__WEBPACK_IMPORTED_MODULE_10__["EnsembleTrainerMixins"], _Ensemble_index__WEBPACK_IMPORTED_MODULE_10__["EnsembleModelMixins"], _Ensemble_index__WEBPACK_IMPORTED_MODULE_10__["EnsembleDeploymentMixins"]]) {
  /**
   *Creates an instance of CausalNet.
   * @param { Functor } functor
   * @param { Log } logger
   * @param { Functor } streamPreprocessing
   * @param { Tensor } netParameters
   * @param { Tensor } netRunner
   * @param { Event } streamDeployment
   * @memberof CausalNet
   */
  constructor(functor, logger, streamPreprocessing, netRunner, streamDeployment) {
    super();
    this.F = functor;
    this.R = this.F.CoreFunctor;
    this.Logger = logger;
    this.Preprocessing = streamPreprocessing;
    this.LayerRunner = netRunner;
    this.Deployment = streamDeployment;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNet(_functor__WEBPACK_IMPORTED_MODULE_9__["default"], causal_net_log__WEBPACK_IMPORTED_MODULE_8__["termLogger"], causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1__["causalNetPreprocessingStream"], causal_net_layer__WEBPACK_IMPORTED_MODULE_4__["causalNetRunner"], causal_net_deployment__WEBPACK_IMPORTED_MODULE_7__["causalNetDeployment"]));

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
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This Functor class provides common used data processing methods for pipeline
 * @class Functor
 * @extends BaseFunctor
 */

class Functor extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], []) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Functor());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNet */ "./src/causalNet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNet", function() { return _causalNet__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

/***/ }),

/***/ "causal-net.datasets":
/*!**************************************!*\
  !*** external "causal-net.datasets" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_datasets__;

/***/ }),

/***/ "causal-net.layer":
/*!***********************************!*\
  !*** external "causal-net.layer" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_layer__;

/***/ }),

/***/ "causal-net.log":
/*!*********************************!*\
  !*** external "causal-net.log" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_log__;

/***/ }),

/***/ "causal-net.optimizers":
/*!****************************************!*\
  !*** external "causal-net.optimizers" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_optimizers__;

/***/ }),

/***/ "causal-net.preprocessing":
/*!*******************************************!*\
  !*** external "causal-net.preprocessing" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_preprocessing__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi1kZXBsb3ltZW50L2Rpc3QvQGNhdXNhbE5ldC9kZXBsb3ltZW50LndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4tbW9kZWxzL2Rpc3QvQGNhdXNhbE5ldC9tb2RlbHMud2ViLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvZW5zZW1ibGVEZXBsb3ltZW50Lm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL0Vuc2VtYmxlL2Vuc2VtYmxlRXZhbHVhdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL0Vuc2VtYmxlL2Vuc2VtYmxlTW9kZWwubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvZW5zZW1ibGVUcmFpbmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL0Vuc2VtYmxlL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvY2F1c2FsTmV0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvZnVuY3Rvci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5kYXRhc2V0c1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmxheWVyXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQub3B0aW1pemVyc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkVuc2VtYmxlRGVwbG95bWVudE1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiRW5zZW1ibGVJbmZlcmVuY2VyIiwiTW9kZWxMZW5zZXMiLCJFbnNlbWJsZVByZWRpY3QiLCJFbnNlbWJsZU1vZGVsUHJlZGljdCIsIlQiLCJpbnB1dCIsImluZmVyIiwiaW5wdXRUZW5zb3IiLCJ0ZW5zb3IiLCJhc1R5cGUiLCJyZXNoYXBlIiwicHJlZGljdFRlbnNvciIsImRhdGEiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIkRlcGxveW1lbnQiLCJncm91cEVuZCIsImRlcGxveSIsIkVuc2VtYmxlRXZhbHVhdG9yTWl4aW5zIiwiZW5zZW1ibGVUZXN0IiwiYmF0Y2hTaXplIiwibWV0aG9kIiwiRXJyb3IiLCJFbnNlbWJsZU1vZGVsTWl4aW5zIiwiRml0TW9kZWwiLCJFbnNlbWJsZU1vZGVscyIsIkJhZ2dpbmciLCJwcm9iRml0cyIsIm1vZGVsIiwibG9hZFBhcmFtcyIsInByb2IiLCJleHAiLCJwdXNoIiwibWVhblByb2IiLCJzdGFjayIsIm1lYW4iLCJhcmdNYXgiLCJtb2RlbGlzdCIsImVuc2VtYmxlTW9kZWxzIiwiRW5zZW1ibGVUcmFpbmVyTWl4aW5zIiwiZW5zZW1ibGVUcmFpbiIsIm51bUVwb2NocyIsInNhdmVGaWxlTmFtZSIsIkxheWVyUnVubmVyIiwiTmV0UGFyYW1ldGVycyIsIlBhcmFtZXRlckluaXRpYWxpemVyIiwiTmV0TGF5ZXJzIiwibG9zc2VzIiwidHJhaW4iLCJzYXZlUGFyYW1zIiwiQ2F1c2FsTmV0IiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiRGF0YVNvdXJjZU1peGlucyIsIlByZXByb2Nlc3NpbmdNaXhpbnMiLCJMYXllclJ1bm5lck1peGlucyIsIk1vZGVsTWl4aW5zIiwiRXZhbHVhdG9yTWl4aW5zIiwiVHJhaW5lck1peGlucyIsIkxvZ2dlck1peGlucyIsIkRlcGxveW1lbnRNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImZ1bmN0b3IiLCJsb2dnZXIiLCJzdHJlYW1QcmVwcm9jZXNzaW5nIiwibmV0UnVubmVyIiwic3RyZWFtRGVwbG95bWVudCIsIkYiLCJSIiwiQ29yZUZ1bmN0b3IiLCJQcmVwcm9jZXNzaW5nIiwidGVybUxvZ2dlciIsImNhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0iLCJjYXVzYWxOZXRSdW5uZXIiLCJjYXVzYWxOZXREZXBsb3ltZW50IiwiRnVuY3RvciIsIkJhc2VGdW5jdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyx3Q0FBaUIsR0FBRyxtQkFBTyxDQUFDLDBDQUFrQjtBQUNqRixNQUFNLEVBS3VGO0FBQzdGLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtB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IkBjYXVzYWxOZXQvcGlwZWxpbmUubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuZGF0YXNldHNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxheWVyXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sb2dcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm9wdGltaXplcnNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQuZGF0YXNldHNcIiwgXCJjYXVzYWwtbmV0LmxheWVyXCIsIFwiY2F1c2FsLW5ldC5sb2dcIiwgXCJjYXVzYWwtbmV0Lm9wdGltaXplcnNcIiwgXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcGlwZWxpbmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmRhdGFzZXRzXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sYXllclwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5vcHRpbWl6ZXJzXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuZGF0YXNldHNcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmxheWVyXCJdLCByb290W1wiY2F1c2FsLW5ldC5sb2dcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm9wdGltaXplcnNcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9kYXRhc2V0c19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbGF5ZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfb3B0aW1pemVyc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvZGVwbG95bWVudFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvZGVwbG95bWVudFwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9zcmMvY2F1c2FsTmV0RGVwbG95bWVudC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NhdXNhbE5ldERlcGxveW1lbnQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZnVuY3Rvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9mdW5jdG9yICovIFwiLi9zcmMvZnVuY3Rvci5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LnV0aWxzICovIFwiY2F1c2FsLW5ldC51dGlsc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fKTtcblxuXG5cbi8qKlxuICogVGhlIGltcGxlbWVudGF0aW9uIGZvciBldmVudC1iYXNlZCBtb2RlbCBkZXBsb3ltZW50IHdoaWNoIGlzIHN1cHBsaWVkIFxuICogdG8gcGlwZWxpbmUgY2xhc3MgaW5zdGFuY2UgYXMgKipEZXBsb3ltZW50KiogYXR0cmlidXRlLiBQaXBlbGluZSBjbGFzcyBtdXN0IGJlIG1peGVkIHdpdGggRGVwbG95bWVudE1peGlucy5cbiAqIEBjbGFzcyBDYXVzYWxOZXREZXBsb3ltZW50XG4gKiBAZXh0ZW5kcyBFdmVudFxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldERlcGxveW1lbnQuYmFiZWwuanNdXG4gKi9cblxuY2xhc3MgQ2F1c2FsTmV0RGVwbG95bWVudCBleHRlbmRzIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcInBsYXRmb3JtXCJdLm1peFdpdGgoY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJFdmVudFwiXSwgW10pIHtcbiAgY29uc3RydWN0b3IoZnVuY3Rvcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICB0aGlzLlIgPSBmdW5jdG9yLkNvcmVGdW5jdG9yO1xuICB9XG5cbiAgc2V0IEVtaXR0ZXIoZW1pdHRlcikge1xuICAgIHRoaXMuZGVwbG95RW1pdHRlciA9IGVtaXR0ZXI7XG4gIH1cblxuICBnZXQgRW1pdHRlcigpIHtcbiAgICBpZiAoIXRoaXMuZGVwbG95RW1pdHRlcikge1xuICAgICAgdGhyb3cgRXJyb3IoJ0VtaXR0ZXIgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlcGxveUVtaXR0ZXI7XG4gIH1cblxuICBzZXQgTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmRlcGxveUxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgdGhpcy5vbignaW5mZXJlbmNlcicsIGluZmVyID0+IHtcbiAgICAgIHRoaXMuZGVwbG95TGlzdGVuZXIoaW5mZXIpO1xuICAgIH0pO1xuICAgIHRoaXMub24oJ2Vuc2VtYmxlSW5mZXJlbmNlcicsIGluZmVyID0+IHtcbiAgICAgIHRoaXMuZGVwbG95TGlzdGVuZXIoaW5mZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IExpc3RlbmVyKCkge1xuICAgIGlmICghdGhpcy5kZXBsb3lMaXN0ZW5lcikge1xuICAgICAgdGhyb3cgRXJyb3IoJ0xpc3RlbmVyIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZXBsb3lMaXN0ZW5lcjtcbiAgfVxuXG4gIHNldCBJbmZlcmVuY2VyKGluZmVyZW5jZXIpIHtcbiAgICB0aGlzLmRlcGxveUluZmVyZW5jZXIgPSBpbmZlcmVuY2VyO1xuICAgIHRoaXMub24oJ2VtaXR0ZXInLCBhc3luYyBlbWl0VmFsdWUgPT4ge1xuICAgICAgbGV0IGluZmVyVmFsdWUgPSBhd2FpdCB0aGlzLmRlcGxveUluZmVyZW5jZXIoZW1pdFZhbHVlKTtcblxuICAgICAgaWYgKGluZmVyVmFsdWUgJiYgaW5mZXJWYWx1ZSAhPT0ge30pIHtcbiAgICAgICAgdGhpcy5lbWl0KCdpbmZlcmVuY2VyJywgaW5mZXJWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgSW5mZXJlbmNlcigpIHtcbiAgICBpZiAoIXRoaXMuZGVwbG95SW5mZXJlbmNlcikge1xuICAgICAgdGhyb3cgRXJyb3IoJ0luZmVyZW5jZXIgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlcGxveUluZmVyZW5jZXI7XG4gIH1cblxuICBzZXQgRW5zZW1ibGVJbmZlcmVuY2VyKGVuc2VtYmxlSW5mZXJlbmNlcikge1xuICAgIHRoaXMuZGVwbG95RW5zZW1ibGVJbmZlcmVuY2VyID0gZW5zZW1ibGVJbmZlcmVuY2VyO1xuICAgIHRoaXMub24oJ2VtaXR0ZXInLCBhc3luYyBlbWl0VmFsdWUgPT4ge1xuICAgICAgbGV0IGluZmVyVmFsdWUgPSBhd2FpdCB0aGlzLmRlcGxveUVuc2VtYmxlSW5mZXJlbmNlcihlbWl0VmFsdWUpO1xuXG4gICAgICBpZiAoaW5mZXJWYWx1ZSAmJiBpbmZlclZhbHVlICE9PSB7fSkge1xuICAgICAgICB0aGlzLmVtaXQoJ2Vuc2VtYmxlSW5mZXJlbmNlcicsIGluZmVyVmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IEVuc2VtYmxlSW5mZXJlbmNlcigpIHtcbiAgICBpZiAoIXRoaXMuZGVwbG95RW5zZW1ibGVJbmZlcmVuY2VyKSB7XG4gICAgICB0aHJvdyBFcnJvcignRW5zZW1ibGVJbmZlcmVuY2VyIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZXBsb3lFbnNlbWJsZUluZmVyZW5jZXI7XG4gIH1cblxuICBhc3luYyBkZXBsb3koKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgIGxldCBlbWl0VmFsdWUgPSBhd2FpdCB0aGlzLkVtaXR0ZXIoKTtcblxuICAgICAgd2hpbGUgKGVtaXRWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2VtaXR0ZXInLCBlbWl0VmFsdWUpO1xuICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgIGVtaXRWYWx1ZSA9IGF3YWl0IHRoaXMuRW1pdHRlcigpO1xuICAgICAgfVxuXG4gICAgICByZXNvbHZlKGNvdW50ZXIpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChuZXcgQ2F1c2FsTmV0RGVwbG95bWVudChfZnVuY3Rvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXSkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9kZXBsb3ltZW50Lm1peGlucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9kZXBsb3ltZW50Lm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyoqXG4gKiBUaGlzIG1peGluIGNsYXNzIHByb3ZpZGVzIGF0dHJpYnV0ZXM6ICoqRGVwbG95bWVudCoqLCAqKkluZmVyZW5jZXIqKiwgYW5kIGhhbmRsZSBEZXBsb3ltZW50IHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcuXG4gKiBAY2xhc3MgRGVwbG95bWVudE1peGluc1xuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXREZXBsb3ltZW50LmJhYmVsLmpzXVxuICovXG5jb25zdCBEZXBsb3ltZW50TWl4aW5zID0gQmFzZVBpcGVsaW5lQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzcyB7XG4gIHNldCBEZXBsb3ltZW50KGRlcGxveW1lbnQpIHtcbiAgICB0aGlzLmRlcGxveW1lbnQgPSBkZXBsb3ltZW50O1xuICB9XG5cbiAgZ2V0IERlcGxveW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLmRlcGxveW1lbnQpIHtcbiAgICAgIHRocm93IEVycm9yKCdkZXBsb3ltZW50IGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZXBsb3ltZW50O1xuICB9XG5cbiAgZ2V0IEluZmVyZW5jZXIoKSB7XG4gICAgY29uc3QgTW9kZWxMZW5zZXMgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5Nb2RlbDtcbiAgICB9O1xuXG4gICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICByZXR1cm4gYXN5bmMgaW5wdXQgPT4ge1xuICAgICAgbGV0IHtcbiAgICAgICAgUHJlZGljdCxcbiAgICAgICAgRW5jb2RlLFxuICAgICAgICBEZWNvZGVcbiAgICAgIH0gPSBpbnB1dDtcbiAgICAgIGxldCBpbmZlciA9IHt9O1xuICAgICAgY29uc3QgTW9kZWwgPSBNb2RlbExlbnNlcygpO1xuXG4gICAgICBpZiAoUHJlZGljdCkge1xuICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihQcmVkaWN0KS5hc1R5cGUoJ2Zsb2F0MzInKS5yZXNoYXBlKFsxLCAtMV0pO1xuICAgICAgICBsZXQgcHJlZGljdFRlbnNvciA9IE1vZGVsLlByZWRpY3QoaW5wdXRUZW5zb3IpO1xuICAgICAgICBpbmZlci5QcmVkaWN0ID0gYXdhaXQgcHJlZGljdFRlbnNvci5kYXRhKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChFbmNvZGUpIHtcbiAgICAgICAgbGV0IGlucHV0VGVuc29yID0gVC50ZW5zb3IoRW5jb2RlKS5hc1R5cGUoJ2Zsb2F0MzInKS5yZXNoYXBlKFsxLCAtMV0pO1xuICAgICAgICBsZXQgZW5jb2RlVGVuc29yID0gTW9kZWwuRW5jb2RlKGlucHV0VGVuc29yKTtcbiAgICAgICAgaW5mZXIuRW5jb2RlID0gYXdhaXQgZW5jb2RlVGVuc29yLmRhdGEoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKERlY29kZSkge1xuICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihEZWNvZGUpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgIGxldCBkZWNvZGVUZW5zb3IgPSBNb2RlbC5FbmNvZGUoaW5wdXRUZW5zb3IpO1xuICAgICAgICBpbmZlci5EZWNvZGUgPSBhd2FpdCBkZWNvZGVUZW5zb3IuZGF0YSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5mZXI7XG4gICAgfTtcbiAgfVxuXG4gIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKSB7XG4gICAgaWYgKHN1cGVyLnNldEJ5Q29uZmlnKSB7XG4gICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IGRlcGxveW1lbnQgYnkgY29uZmlnJyk7XG4gICAgY29uc3Qge1xuICAgICAgRW1pdHRlcixcbiAgICAgIExpc3RlbmVyXG4gICAgfSA9IHBpcGVsaW5lQ29uZmlnLkRlcGxveW1lbnQ7XG4gICAgdGhpcy5EZXBsb3ltZW50LkVtaXR0ZXIgPSBFbWl0dGVyO1xuICAgIHRoaXMuRGVwbG95bWVudC5MaXN0ZW5lciA9IExpc3RlbmVyO1xuICAgIHRoaXMuRGVwbG95bWVudC5JbmZlcmVuY2VyID0gdGhpcy5JbmZlcmVuY2VyO1xuICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgcmV0dXJuIHBpcGVsaW5lQ29uZmlnO1xuICB9XG5cbiAgYXN5bmMgZGVwbG95KCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLkRlcGxveW1lbnQuZGVwbG95KCk7XG4gIH1cblxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChEZXBsb3ltZW50TWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZnVuY3Rvci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Z1bmN0b3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChuZXcgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJGdW5jdG9yXCJdKCkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBjYXVzYWxOZXREZXBsb3ltZW50LCBEZXBsb3ltZW50TWl4aW5zICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jYXVzYWxOZXREZXBsb3ltZW50X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NhdXNhbE5ldERlcGxveW1lbnQgKi8gXCIuL3NyYy9jYXVzYWxOZXREZXBsb3ltZW50LmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiY2F1c2FsTmV0RGVwbG95bWVudFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9jYXVzYWxOZXREZXBsb3ltZW50X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9kZXBsb3ltZW50X21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9kZXBsb3ltZW50Lm1peGlucyAqLyBcIi4vc3JjL2RlcGxveW1lbnQubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRGVwbG95bWVudE1peGluc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9kZXBsb3ltZW50X21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQuY29yZVwiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXztcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC51dGlsc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJSbGNHeHZlVzFsYm5RdmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZaR1Z3Ykc5NWJXVnVkQzkzWldKd1lXTnJMMkp2YjNSemRISmhjQ0lzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyUmxjR3h2ZVcxbGJuUXZMaTl6Y21NdlkyRjFjMkZzVG1WMFJHVndiRzk1YldWdWRDNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyUmxjR3h2ZVcxbGJuUXZMaTl6Y21NdlpHVndiRzk1YldWdWRDNXRhWGhwYm5NdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5a1pYQnNiM2x0Wlc1MEx5NHZjM0pqTDJaMWJtTjBiM0l1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlrWlhCc2IzbHRaVzUwTHk0dmMzSmpMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdlpHVndiRzk1YldWdWRDOWxlSFJsY201aGJDQmNJbU5oZFhOaGJDMXVaWFF1WTI5eVpWd2lJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdlpHVndiRzk1YldWdWRDOWxlSFJsY201aGJDQmNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaUpkTENKdVlXMWxjeUk2V3lKRFlYVnpZV3hPWlhSRVpYQnNiM2x0Wlc1MElpd2ljR3hoZEdadmNtMGlMQ0p0YVhoWGFYUm9JaXdpUlhabGJuUWlMQ0pqYjI1emRISjFZM1J2Y2lJc0ltWjFibU4wYjNJaUxDSkdJaXdpVWlJc0lrTnZjbVZHZFc1amRHOXlJaXdpUlcxcGRIUmxjaUlzSW1WdGFYUjBaWElpTENKa1pYQnNiM2xGYldsMGRHVnlJaXdpUlhKeWIzSWlMQ0pNYVhOMFpXNWxjaUlzSW14cGMzUmxibVZ5SWl3aVpHVndiRzk1VEdsemRHVnVaWElpTENKdmJpSXNJbWx1Wm1WeUlpd2lTVzVtWlhKbGJtTmxjaUlzSW1sdVptVnlaVzVqWlhJaUxDSmtaWEJzYjNsSmJtWmxjbVZ1WTJWeUlpd2laVzFwZEZaaGJIVmxJaXdpYVc1bVpYSldZV3gxWlNJc0ltVnRhWFFpTENKRmJuTmxiV0pzWlVsdVptVnlaVzVqWlhJaUxDSmxibk5sYldKc1pVbHVabVZ5Wlc1alpYSWlMQ0prWlhCc2IzbEZibk5sYldKc1pVbHVabVZ5Wlc1alpYSWlMQ0prWlhCc2Iza2lMQ0pRY205dGFYTmxJaXdpY21WemIyeDJaU0lzSW5KbGFtVmpkQ0lzSW1OdmRXNTBaWElpTENKRVpYQnNiM2x0Wlc1MFRXbDRhVzV6SWl3aVFtRnpaVkJwY0dWc2FXNWxRMnhoYzNNaUxDSkVaWEJzYjNsdFpXNTBJaXdpWkdWd2JHOTViV1Z1ZENJc0lrMXZaR1ZzVEdWdWMyVnpJaXdpVFc5a1pXd2lMQ0pVSWl3aWFXNXdkWFFpTENKUWNtVmthV04wSWl3aVJXNWpiMlJsSWl3aVJHVmpiMlJsSWl3aWFXNXdkWFJVWlc1emIzSWlMQ0owWlc1emIzSWlMQ0poYzFSNWNHVWlMQ0p5WlhOb1lYQmxJaXdpY0hKbFpHbGpkRlJsYm5OdmNpSXNJbVJoZEdFaUxDSmxibU52WkdWVVpXNXpiM0lpTENKa1pXTnZaR1ZVWlc1emIzSWlMQ0p6WlhSQ2VVTnZibVpwWnlJc0luQnBjR1ZzYVc1bFEyOXVabWxuSWl3aVRHOW5aMlZ5SWl3aVozSnZkWEJDWldkcGJpSXNJbWR5YjNWd1JXNWtJaXdpUm5WdVkzUnZjaUpkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N1FVTldRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdEVRVUV3UXl4blEwRkJaME03UVVGRE1VVTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SVUZCZDBRc2EwSkJRV3RDTzBGQlF6RkZPMEZCUTBFc2VVUkJRV2xFTEdOQlFXTTdRVUZETDBRN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsRVFVRjVReXhwUTBGQmFVTTdRVUZETVVVc2QwaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8wRkJRM0pKTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN096czdPenM3T3pzN096czdRVU5zUmtFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3p0QlFWRkJMRTFCUVUxQkxHMUNRVUZPTEZOQlFXdERReXg1UkVGQlVTeERRVUZEUXl4UFFVRlVMRU5CUVd0Q1F5eHhSRUZCYkVJc1JVRkJlVUlzUlVGQmVrSXNRMEZCYkVNc1EwRkJLMFE3UVVGRk0wUkRMR0ZCUVZjc1EwRkJRME1zVDBGQlJDeEZRVUZUTzBGQlEyaENPMEZCUTBFc1UwRkJTME1zUTBGQlRDeEhRVUZUUkN4UFFVRlVPMEZCUTBFc1UwRkJTMFVzUTBGQlRDeEhRVUZUUml4UFFVRlBMRU5CUVVOSExGZEJRV3BDTzBGQlEwZzdPMEZCUlVRc1RVRkJTVU1zVDBGQlNpeERRVUZaUXl4UFFVRmFMRVZCUVc5Q08wRkJRMmhDTEZOQlFVdERMR0ZCUVV3c1IwRkJjVUpFTEU5QlFYSkNPMEZCUTBnN08wRkJSVVFzVFVGQlNVUXNUMEZCU2l4SFFVRmhPMEZCUTFRc1VVRkJSeXhEUVVGRExFdEJRVXRGTEdGQlFWUXNSVUZCZFVJN1FVRkRia0lzV1VGQlRVTXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0RUxHRkJRVm83UVVGRFNEczdRVUZGUkN4TlFVRkpSU3hSUVVGS0xFTkJRV0ZETEZGQlFXSXNSVUZCYzBJN1FVRkRiRUlzVTBGQlMwTXNZMEZCVEN4SFFVRnpRa1FzVVVGQmRFSTdRVUZEUVN4VFFVRkxSU3hGUVVGTUxFTkJRVkVzV1VGQlVpeEZRVUYxUWtNc1MwRkJSQ3hKUVVGVE8wRkJRek5DTEZkQlFVdEdMR05CUVV3c1EwRkJiMEpGTEV0QlFYQkNPMEZCUTBnc1MwRkdSRHRCUVVkQkxGTkJRVXRFTEVWQlFVd3NRMEZCVVN4dlFrRkJVaXhGUVVFclFrTXNTMEZCUkN4SlFVRlRPMEZCUTI1RExGZEJRVXRHTEdOQlFVd3NRMEZCYjBKRkxFdEJRWEJDTzBGQlEwZ3NTMEZHUkR0QlFVZElPenRCUVVWRUxFMUJRVWxLTEZGQlFVb3NSMEZCWXp0QlFVTldMRkZCUVVjc1EwRkJReXhMUVVGTFJTeGpRVUZVTEVWQlFYZENPMEZCUTNCQ0xGbEJRVTFJTEV0QlFVc3NRMEZCUXl4eFFrRkJSQ3hEUVVGWU8wRkJRMGc3TzBGQlEwUXNWMEZCVHl4TFFVRkxSeXhqUVVGYU8wRkJRMGc3TzBGQlJVUXNUVUZCU1Vjc1ZVRkJTaXhEUVVGbFF5eFZRVUZtTEVWQlFUQkNPMEZCUTNSQ0xGTkJRVXRETEdkQ1FVRk1MRWRCUVhkQ1JDeFZRVUY0UWp0QlFVTkJMRk5CUVV0SUxFVkJRVXdzUTBGQlVTeFRRVUZTTEVWQlFXMUNMRTFCUVU5TExGTkJRVkFzU1VGQmJVSTdRVUZEYkVNc1ZVRkJTVU1zVlVGQlZTeEhRVUZITEUxQlFVMHNTMEZCUzBZc1owSkJRVXdzUTBGQmMwSkRMRk5CUVhSQ0xFTkJRWFpDT3p0QlFVTkJMRlZCUVVkRExGVkJRVlVzU1VGQlNVRXNWVUZCVlN4TFFVRkxMRVZCUVdoRExFVkJRVzFETzBGQlF5OUNMR0ZCUVV0RExFbEJRVXdzUTBGQlZTeFpRVUZXTEVWQlFYZENSQ3hWUVVGNFFqdEJRVU5JTzBGQlEwb3NTMEZNUkR0QlFVMUlPenRCUVVWRUxFMUJRVWxLTEZWQlFVb3NSMEZCWjBJN1FVRkRXaXhSUVVGSExFTkJRVU1zUzBGQlMwVXNaMEpCUVZRc1JVRkJNRUk3UVVGRGRFSXNXVUZCVFZJc1MwRkJTeXhEUVVGRExIVkNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSQ3hYUVVGUExFdEJRVXRSTEdkQ1FVRmFPMEZCUTBnN08wRkJSVVFzVFVGQlNVa3NhMEpCUVVvc1EwRkJkVUpETEd0Q1FVRjJRaXhGUVVFd1F6dEJRVVYwUXl4VFFVRkxReXgzUWtGQlRDeEhRVUZuUTBRc2EwSkJRV2hETzBGQlEwRXNVMEZCUzFRc1JVRkJUQ3hEUVVGUkxGTkJRVklzUlVGQmJVSXNUVUZCVDBzc1UwRkJVQ3hKUVVGdFFqdEJRVU5zUXl4VlFVRkpReXhWUVVGVkxFZEJRVWNzVFVGQlRTeExRVUZMU1N4M1FrRkJUQ3hEUVVFNFFrd3NVMEZCT1VJc1EwRkJka0k3TzBGQlEwRXNWVUZCUjBNc1ZVRkJWU3hKUVVGSlFTeFZRVUZWTEV0QlFVc3NSVUZCYUVNc1JVRkJiVU03UVVGREwwSXNZVUZCUzBNc1NVRkJUQ3hEUVVGVkxHOUNRVUZXTEVWQlFXZERSQ3hWUVVGb1F6dEJRVU5JTzBGQlEwb3NTMEZNUkR0QlFVMUlPenRCUVVWRUxFMUJRVWxGTEd0Q1FVRktMRWRCUVhkQ08wRkJRM0JDTEZGQlFVY3NRMEZCUXl4TFFVRkxSU3gzUWtGQlZDeEZRVUZyUXp0QlFVTTVRaXhaUVVGTlpDeExRVUZMTEVOQlFVTXNLMEpCUVVRc1EwRkJXRHRCUVVOSU96dEJRVU5FTEZkQlFVOHNTMEZCUzJNc2QwSkJRVm83UVVGRFNEczdRVUZGUkN4UlFVRk5ReXhOUVVGT0xFZEJRV003UVVGRFZpeFhRVUZQTEVsQlFVbERMRTlCUVVvc1EwRkJXU3hQUVVGUFF5eFBRVUZRTEVWQlFXZENReXhOUVVGb1FpeExRVUY1UWp0QlFVTjRReXhWUVVGSlF5eFBRVUZQTEVkQlFVY3NRMEZCWkR0QlFVTkJMRlZCUVVsV0xGTkJRVk1zUjBGQlJ5eE5RVUZOTEV0QlFVdGFMRTlCUVV3c1JVRkJkRUk3TzBGQlEwRXNZVUZCVFZrc1UwRkJVeXhMUVVGTExFbEJRWEJDTEVWQlFYbENPMEZCUTNKQ0xHRkJRVXRGTEVsQlFVd3NRMEZCVlN4VFFVRldMRVZCUVhGQ1JpeFRRVUZ5UWp0QlFVTkJWU3hsUVVGUExFbEJRVWtzUTBGQldEdEJRVU5CVml4cFFrRkJVeXhIUVVGSExFMUJRVTBzUzBGQlMxb3NUMEZCVEN4RlFVRnNRanRCUVVOSU96dEJRVU5FYjBJc1lVRkJUeXhEUVVGRFJTeFBRVUZFTEVOQlFWQTdRVUZEU0N4TFFWUk5MRU5CUVZBN1FVRlZTRHM3UVVGc1JqQkVPenRCUVhGR2FFUXNiVVZCUVVrdlFpeHRRa0ZCU2l4RFFVRjNRa3NzWjBSQlFYaENMRU5CUVdZc1JUczdPenM3T3pzN096czdPMEZEYUVkQk8wRkJRVUU3T3pzN096czdRVUZQUVN4TlFVRk5Na0lzWjBKQlFXZENMRWRCUVVsRExHbENRVUZFTEVsQlFYTkNMR05CUVdOQkxHbENRVUZrTEVOQlFXZERPMEZCUlRORkxFMUJRVWxETEZWQlFVb3NRMEZCWlVNc1ZVRkJaaXhGUVVFd1FqdEJRVU4wUWl4VFFVRkxRU3hWUVVGTUxFZEJRV3RDUVN4VlFVRnNRanRCUVVOSU96dEJRVVZFTEUxQlFVbEVMRlZCUVVvc1IwRkJaMEk3UVVGRFdpeFJRVUZITEVOQlFVTXNTMEZCUzBNc1ZVRkJWQ3hGUVVGdlFqdEJRVU5vUWl4WlFVRk5ka0lzUzBGQlN5eERRVUZETEhWQ1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdDFRaXhWUVVGYU8wRkJRMGc3TzBGQlJVUXNUVUZCU1dwQ0xGVkJRVW9zUjBGQlowSTdRVUZEV2l4VlFVRk5hMElzVjBGQlZ5eEhRVUZITEUxQlFVazdRVUZEY0VJc1lVRkJUeXhMUVVGTFF5eExRVUZhTzBGQlEwZ3NTMEZHUkRzN1FVRkhRU3hWUVVGTlF5eERRVUZETEVkQlFVY3NTMEZCUzBFc1EwRkJaanRCUVVOQkxGZEJRVThzVFVGQlQwTXNTMEZCVUN4SlFVRmxPMEZCUTJ4Q0xGVkJRVWs3UVVGQlJVTXNaVUZCUmp0QlFVRlhReXhqUVVGWU8wRkJRVzFDUXp0QlFVRnVRaXhWUVVFNFFrZ3NTMEZCYkVNN1FVRkRRU3hWUVVGSmRFSXNTMEZCU3l4SFFVRkhMRVZCUVZvN1FVRkRRU3haUVVGTmIwSXNTMEZCU3l4SFFVRkhSQ3hYUVVGWExFVkJRWHBDT3p0QlFVTkJMRlZCUVVkSkxFOUJRVWdzUlVGQlZ6dEJRVU5RTEZsQlFVbEhMRmRCUVZjc1IwRkJSMHdzUTBGQlF5eERRVUZEVFN4TlFVRkdMRU5CUVZOS0xFOUJRVlFzUlVGQmEwSkxMRTFCUVd4Q0xFTkJRWGxDTEZOQlFYcENMRVZCUVc5RFF5eFBRVUZ3UXl4RFFVRTBReXhEUVVGRExFTkJRVVFzUlVGQlNTeERRVUZETEVOQlFVd3NRMEZCTlVNc1EwRkJiRUk3UVVGRFFTeFpRVUZKUXl4aFFVRmhMRWRCUVVkV0xFdEJRVXNzUTBGQlEwY3NUMEZCVGl4RFFVRmpSeXhYUVVGa0xFTkJRWEJDTzBGQlEwRXhRaXhoUVVGTExFTkJRVU4xUWl4UFFVRk9MRWRCUVdkQ0xFMUJRVTFQTEdGQlFXRXNRMEZCUTBNc1NVRkJaQ3hGUVVGMFFqdEJRVU5JT3p0QlFVTkVMRlZCUVVkUUxFMUJRVWdzUlVGQlZUdEJRVU5PTEZsQlFVbEZMRmRCUVZjc1IwRkJSMHdzUTBGQlF5eERRVUZEVFN4TlFVRkdMRU5CUVZOSUxFMUJRVlFzUlVGQmFVSkpMRTFCUVdwQ0xFTkJRWGRDTEZOQlFYaENMRVZCUVcxRFF5eFBRVUZ1UXl4RFFVRXlReXhEUVVGRExFTkJRVVFzUlVGQlNTeERRVUZETEVOQlFVd3NRMEZCTTBNc1EwRkJiRUk3UVVGRFFTeFpRVUZKUnl4WlFVRlpMRWRCUVVkYUxFdEJRVXNzUTBGQlEwa3NUVUZCVGl4RFFVRmhSU3hYUVVGaUxFTkJRVzVDTzBGQlEwRXhRaXhoUVVGTExFTkJRVU4zUWl4TlFVRk9MRWRCUVdVc1RVRkJUVkVzV1VGQldTeERRVUZEUkN4SlFVRmlMRVZCUVhKQ08wRkJRMGc3TzBGQlEwUXNWVUZCUjA0c1RVRkJTQ3hGUVVGVk8wRkJRMDRzV1VGQlNVTXNWMEZCVnl4SFFVRkhUQ3hEUVVGRExFTkJRVU5OTEUxQlFVWXNRMEZCVTBZc1RVRkJWQ3hGUVVGcFFrY3NUVUZCYWtJc1EwRkJkMElzVTBGQmVFSXNSVUZCYlVORExFOUJRVzVETEVOQlFUSkRMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVU1zUTBGQlRDeERRVUV6UXl4RFFVRnNRanRCUVVOQkxGbEJRVWxKTEZsQlFWa3NSMEZCUjJJc1MwRkJTeXhEUVVGRFNTeE5RVUZPTEVOQlFXRkZMRmRCUVdJc1EwRkJia0k3UVVGRFFURkNMR0ZCUVVzc1EwRkJRM2xDTEUxQlFVNHNSMEZCWlN4TlFVRk5VU3haUVVGWkxFTkJRVU5HTEVsQlFXSXNSVUZCY2tJN1FVRkRTRHM3UVVGRFJDeGhRVUZQTDBJc1MwRkJVRHRCUVVOSUxFdEJjRUpFTzBGQmNVSklPenRCUVVWRWEwTXNZVUZCVnl4RFFVRkRReXhqUVVGRUxFVkJRV2RDTzBGQlEzWkNMRkZCUVVjc1RVRkJUVVFzVjBGQlZDeEZRVUZ4UWp0QlFVTnFRaXhaUVVGTlFTeFhRVUZPTEVOQlFXdENReXhqUVVGc1FqdEJRVU5JT3p0QlFVTkVMRk5CUVV0RExFMUJRVXdzUTBGQldVTXNWVUZCV2l4RFFVRjFRaXd3UWtGQmRrSTdRVUZEUVN4VlFVRk5PMEZCUVVVM1F5eGhRVUZHTzBGQlFWZEpPMEZCUVZnc1VVRkJkMEoxUXl4alFVRmpMRU5CUVVOc1FpeFZRVUUzUXp0QlFVTkJMRk5CUVV0QkxGVkJRVXdzUTBGQlowSjZRaXhQUVVGb1FpeEhRVUV3UWtFc1QwRkJNVUk3UVVGRFFTeFRRVUZMZVVJc1ZVRkJUQ3hEUVVGblFuSkNMRkZCUVdoQ0xFZEJRVEpDUVN4UlFVRXpRanRCUVVOQkxGTkJRVXR4UWl4VlFVRk1MRU5CUVdkQ2FFSXNWVUZCYUVJc1IwRkJOa0lzUzBGQlMwRXNWVUZCYkVNN1FVRkRRU3hUUVVGTGJVTXNUVUZCVEN4RFFVRlpSU3hSUVVGYU8wRkJRMEVzVjBGQlQwZ3NZMEZCVUR0QlFVTklPenRCUVVWRUxGRkJRVTE2UWl4TlFVRk9MRWRCUVdNN1FVRkRWaXhYUVVGUExFMUJRVTBzUzBGQlMwOHNWVUZCVEN4RFFVRm5RbEFzVFVGQmFFSXNSVUZCWWp0QlFVTklPenRCUVhoRU1FVXNRMEZCTDBVN08wRkJNa1JsU3l3clJVRkJaaXhGT3pzN096czdPenM3T3pzN1FVTnNSVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZEWlN4dFJVRkJTWGRDTEhWRVFVRktMRVZCUVdZc1JUczdPenM3T3pzN096czdPMEZEUkVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVRzN096czdPenM3T3pzN08wRkRRVUVzTmtRN096czdPenM3T3pzN08wRkRRVUVzT0VRaUxDSm1hV3hsSWpvaVFHTmhkWE5oYkU1bGRDOWtaWEJzYjNsdFpXNTBMbmRsWWk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUIzWldKd1lXTnJWVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpaHliMjkwTENCbVlXTjBiM0o1S1NCN1hHNWNkR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlBbUppQjBlWEJsYjJZZ2JXOWtkV3hsSUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaaFkzUnZjbmtvY21WeGRXbHlaU2hjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpS1N3Z2NtVnhkV2x5WlNoY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpa3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ2xjYmx4MFhIUmtaV1pwYm1Vb1cxd2lZMkYxYzJGc0xXNWxkQzVqYjNKbFhDSXNJRndpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSkFZMkYxYzJGc1RtVjBMMlJsY0d4dmVXMWxiblJjSWwwZ1BTQm1ZV04wYjNKNUtISmxjWFZwY21Vb1hDSmpZWFZ6WVd3dGJtVjBMbU52Y21WY0lpa3NJSEpsY1hWcGNtVW9YQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0lwS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSkFZMkYxYzJGc1RtVjBMMlJsY0d4dmVXMWxiblJjSWwwZ1BTQm1ZV04wYjNKNUtISnZiM1JiWENKallYVnpZV3d0Ym1WMExtTnZjbVZjSWwwc0lISnZiM1JiWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENKZEtUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjlqYjNKbFgxOHNJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjkxZEdsc2MxOWZLU0I3WEc1eVpYUjFjbTRnSWl3aUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlGd2lMaTl6Y21NdmFXNWtaWGd1YW5OY0lpazdYRzRpTENKcGJYQnZjblFnZXlCRmRtVnVkQ0I5SUdaeWIyMGdKMk5oZFhOaGJDMXVaWFF1WTI5eVpTYzdYRzVwYlhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUdaMWJtTjBiM0lnZlNCbWNtOXRJQ2N1TDJaMWJtTjBiM0luTzF4dWFXMXdiM0owSUhzZ2NHeGhkR1p2Y20wZ2ZTQm1jbTl0SUNkallYVnpZV3d0Ym1WMExuVjBhV3h6Snp0Y2JpOHFLbHh1SUNvZ1ZHaGxJR2x0Y0d4bGJXVnVkR0YwYVc5dUlHWnZjaUJsZG1WdWRDMWlZWE5sWkNCdGIyUmxiQ0JrWlhCc2IzbHRaVzUwSUhkb2FXTm9JR2x6SUhOMWNIQnNhV1ZrSUZ4dUlDb2dkRzhnY0dsd1pXeHBibVVnWTJ4aGMzTWdhVzV6ZEdGdVkyVWdZWE1nS2lwRVpYQnNiM2x0Wlc1MEtpb2dZWFIwY21saWRYUmxMaUJRYVhCbGJHbHVaU0JqYkdGemN5QnRkWE4wSUdKbElHMXBlR1ZrSUhkcGRHZ2dSR1Z3Ykc5NWJXVnVkRTFwZUdsdWN5NWNiaUFxSUVCamJHRnpjeUJEWVhWellXeE9aWFJFWlhCc2IzbHRaVzUwWEc0Z0tpQkFaWGgwWlc1a2N5QkZkbVZ1ZEZ4dUlDb2dRR1Y0WVcxd2JHVmNiaUFxSUZ0RldFRk5VRXhGSUM0dUwyVjRZVzF3YkdWekwyTmhkWE5oYkU1bGRFUmxjR3h2ZVcxbGJuUXVZbUZpWld3dWFuTmRYRzRnS2k5Y2JtTnNZWE56SUVOaGRYTmhiRTVsZEVSbGNHeHZlVzFsYm5RZ1pYaDBaVzVrY3lCd2JHRjBabTl5YlM1dGFYaFhhWFJvS0NCRmRtVnVkQ3dnVzEwZ0tYdGNiaUFnSUNCY2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lobWRXNWpkRzl5S1h0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVHSUQwZ1puVnVZM1J2Y2p0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVTSUQwZ1puVnVZM1J2Y2k1RGIzSmxSblZ1WTNSdmNqdGNiaUFnSUNCOVhHNWNiaUFnSUNCelpYUWdSVzFwZEhSbGNpaGxiV2wwZEdWeUtYdGNiaUFnSUNBZ0lDQWdkR2hwY3k1a1pYQnNiM2xGYldsMGRHVnlJRDBnWlcxcGRIUmxjanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFFnUlcxcGRIUmxjaWdwZTF4dUlDQWdJQ0FnSUNCcFppZ2hkR2hwY3k1a1pYQnNiM2xGYldsMGRHVnlLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLQ2RGYldsMGRHVnlJR2x6SUc1dmRDQnpaWFFuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVrWlhCc2IzbEZiV2wwZEdWeU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhObGRDQk1hWE4wWlc1bGNpaHNhWE4wWlc1bGNpbDdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpHVndiRzk1VEdsemRHVnVaWElnUFNCc2FYTjBaVzVsY2p0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2YmlnbmFXNW1aWEpsYm1ObGNpY3NJQ2hwYm1abGNpazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WkdWd2JHOTVUR2x6ZEdWdVpYSW9hVzVtWlhJcE8xeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZiaWduWlc1elpXMWliR1ZKYm1abGNtVnVZMlZ5Snl3Z0tHbHVabVZ5S1QwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWtaWEJzYjNsTWFYTjBaVzVsY2locGJtWmxjaWs3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQm5aWFFnVEdsemRHVnVaWElvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdVpHVndiRzk1VEdsemRHVnVaWElwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjB4cGMzUmxibVZ5SUdseklHNXZkQ0J6WlhRbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1a1pYQnNiM2xNYVhOMFpXNWxjanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaWFFnU1c1bVpYSmxibU5sY2locGJtWmxjbVZ1WTJWeUtYdGNiaUFnSUNBZ0lDQWdkR2hwY3k1a1pYQnNiM2xKYm1abGNtVnVZMlZ5SUQwZ2FXNW1aWEpsYm1ObGNqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJpZ25aVzFwZEhSbGNpY3NJR0Z6ZVc1aklDaGxiV2wwVm1Gc2RXVXBQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYVc1bVpYSldZV3gxWlNBOUlHRjNZV2wwSUhSb2FYTXVaR1Z3Ykc5NVNXNW1aWEpsYm1ObGNpaGxiV2wwVm1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9hVzVtWlhKV1lXeDFaU0FtSmlCcGJtWmxjbFpoYkhWbElDRTlQU0I3ZlNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYldsMEtDZHBibVpsY21WdVkyVnlKeXdnYVc1bVpYSldZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRDQkpibVpsY21WdVkyVnlLQ2w3WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6TG1SbGNHeHZlVWx1Wm1WeVpXNWpaWElwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjBsdVptVnlaVzVqWlhJZ2FYTWdibTkwSUhObGRDY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtUmxjR3h2ZVVsdVptVnlaVzVqWlhJN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWMElFVnVjMlZ0WW14bFNXNW1aWEpsYm1ObGNpaGxibk5sYldKc1pVbHVabVZ5Wlc1alpYSXBlMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZEdocGN5NWtaWEJzYjNsRmJuTmxiV0pzWlVsdVptVnlaVzVqWlhJZ1BTQmxibk5sYldKc1pVbHVabVZ5Wlc1alpYSTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIyNG9KMlZ0YVhSMFpYSW5MQ0JoYzNsdVl5QW9aVzFwZEZaaGJIVmxLVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdsdVptVnlWbUZzZFdVZ1BTQmhkMkZwZENCMGFHbHpMbVJsY0d4dmVVVnVjMlZ0WW14bFNXNW1aWEpsYm1ObGNpaGxiV2wwVm1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9hVzVtWlhKV1lXeDFaU0FtSmlCcGJtWmxjbFpoYkhWbElDRTlQU0I3ZlNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYldsMEtDZGxibk5sYldKc1pVbHVabVZ5Wlc1alpYSW5MQ0JwYm1abGNsWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMElFVnVjMlZ0WW14bFNXNW1aWEpsYm1ObGNpZ3BlMXh1SUNBZ0lDQWdJQ0JwWmlnaGRHaHBjeTVrWlhCc2IzbEZibk5sYldKc1pVbHVabVZ5Wlc1alpYSXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMFZ1YzJWdFlteGxTVzVtWlhKbGJtTmxjaUJwY3lCdWIzUWdjMlYwSnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WkdWd2JHOTVSVzV6WlcxaWJHVkpibVpsY21WdVkyVnlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHRnplVzVqSUdSbGNHeHZlU2dwZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb1lYTjVibU1nS0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2s5UG50Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCamIzVnVkR1Z5SUQwZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQmxiV2wwVm1Gc2RXVWdQU0JoZDJGcGRDQjBhR2x6TGtWdGFYUjBaWElvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSGRvYVd4bEtHVnRhWFJXWVd4MVpTQWhQVDBnYm5Wc2JDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bGJXbDBLQ2RsYldsMGRHVnlKeXdnWlcxcGRGWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIzVnVkR1Z5SUNzOUlERTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaVzFwZEZaaGJIVmxJRDBnWVhkaGFYUWdkR2hwY3k1RmJXbDBkR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtHTnZkVzUwWlhJcE8xeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUc1bGR5QkRZWFZ6WVd4T1pYUkVaWEJzYjNsdFpXNTBLR1oxYm1OMGIzSXBPeUlzSWk4cUtseHVJQ29nVkdocGN5QnRhWGhwYmlCamJHRnpjeUJ3Y205MmFXUmxjeUJoZEhSeWFXSjFkR1Z6T2lBcUtrUmxjR3h2ZVcxbGJuUXFLaXdnS2lwSmJtWmxjbVZ1WTJWeUtpb3NJR0Z1WkNCb1lXNWtiR1VnUkdWd2JHOTViV1Z1ZENCelpYUjBhVzVuSUc5bUlIQnBjR1ZzYVc1bFEyOXVabWxuTGx4dUlDb2dRR05zWVhOeklFUmxjR3h2ZVcxbGJuUk5hWGhwYm5OY2JpQXFJRUJsZUhSbGJtUnpJRUpoYzJWUWFYQmxiR2x1WlVOc1lYTnpYRzRnS2lCQVpYaGhiWEJzWlZ4dUlDb2dXMFZZUVUxUVRFVWdMaTR2WlhoaGJYQnNaWE12WTJGMWMyRnNUbVYwUkdWd2JHOTViV1Z1ZEM1aVlXSmxiQzVxYzExY2JpQXFMMXh1WTI5dWMzUWdSR1Z3Ykc5NWJXVnVkRTFwZUdsdWN5QTlJQ2hDWVhObFVHbHdaV3hwYm1WRGJHRnpjeWs5UGlCamJHRnpjeUJsZUhSbGJtUnpJRUpoYzJWUWFYQmxiR2x1WlVOc1lYTnpJSHRjYmlBZ0lGeHVJQ0FnSUhObGRDQkVaWEJzYjNsdFpXNTBLR1JsY0d4dmVXMWxiblFwZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbVJsY0d4dmVXMWxiblFnUFNCa1pYQnNiM2x0Wlc1ME8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRDQkVaWEJzYjNsdFpXNTBLQ2w3WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6TG1SbGNHeHZlVzFsYm5RcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oyUmxjR3h2ZVcxbGJuUWdhWE1nYm05MElITmxkQ2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbVJsY0d4dmVXMWxiblE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwSUVsdVptVnlaVzVqWlhJb0tYdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1RXOWtaV3hNWlc1elpYTWdQU0FvS1QwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVRXOWtaV3c3WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUZRZ1BTQjBhR2x6TGxRN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCaGMzbHVZeUFvYVc1d2RYUXBQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnZXlCUWNtVmthV04wTENCRmJtTnZaR1VzSUVSbFkyOWtaU0I5SUQwZ2FXNXdkWFE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYVc1bVpYSWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElFMXZaR1ZzSUQwZ1RXOWtaV3hNWlc1elpYTW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LRkJ5WldScFkzUXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCcGJuQjFkRlJsYm5OdmNpQTlJRlF1ZEdWdWMyOXlLRkJ5WldScFkzUXBMbUZ6Vkhsd1pTZ25abXh2WVhRek1pY3BMbkpsYzJoaGNHVW9XekVzSUMweFhTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhCeVpXUnBZM1JVWlc1emIzSWdQU0JOYjJSbGJDNVFjbVZrYVdOMEtHbHVjSFYwVkdWdWMyOXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYm1abGNpNVFjbVZrYVdOMElEMGdZWGRoYVhRZ2NISmxaR2xqZEZSbGJuTnZjaTVrWVhSaEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmloRmJtTnZaR1VwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQnBibkIxZEZSbGJuTnZjaUE5SUZRdWRHVnVjMjl5S0VWdVkyOWtaU2t1WVhOVWVYQmxLQ2RtYkc5aGRETXlKeWt1Y21WemFHRndaU2hiTVN3Z0xURmRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1pXNWpiMlJsVkdWdWMyOXlJRDBnVFc5a1pXd3VSVzVqYjJSbEtHbHVjSFYwVkdWdWMyOXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYm1abGNpNUZibU52WkdVZ1BTQmhkMkZwZENCbGJtTnZaR1ZVWlc1emIzSXVaR0YwWVNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvUkdWamIyUmxLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2FXNXdkWFJVWlc1emIzSWdQU0JVTG5SbGJuTnZjaWhFWldOdlpHVXBMbUZ6Vkhsd1pTZ25abXh2WVhRek1pY3BMbkpsYzJoaGNHVW9XekVzSUMweFhTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdSbFkyOWtaVlJsYm5OdmNpQTlJRTF2WkdWc0xrVnVZMjlrWlNocGJuQjFkRlJsYm5OdmNpazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhVzVtWlhJdVJHVmpiMlJsSUQwZ1lYZGhhWFFnWkdWamIyUmxWR1Z1YzI5eUxtUmhkR0VvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCcGJtWmxjanRjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhSQ2VVTnZibVpwWnlod2FYQmxiR2x1WlVOdmJtWnBaeWw3WEc0Z0lDQWdJQ0FnSUdsbUtITjFjR1Z5TG5ObGRFSjVRMjl1Wm1sbktYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMWNHVnlMbk5sZEVKNVEyOXVabWxuS0hCcGNHVnNhVzVsUTI5dVptbG5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMGFHbHpMa3h2WjJkbGNpNW5jbTkxY0VKbFoybHVLQ2R6WlhRZ1pHVndiRzk1YldWdWRDQmllU0JqYjI1bWFXY25LVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdleUJGYldsMGRHVnlMQ0JNYVhOMFpXNWxjaUI5SUQwZ2NHbHdaV3hwYm1WRGIyNW1hV2N1UkdWd2JHOTViV1Z1ZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVFWlhCc2IzbHRaVzUwTGtWdGFYUjBaWElnUFNCRmJXbDBkR1Z5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMa1JsY0d4dmVXMWxiblF1VEdsemRHVnVaWElnUFNCTWFYTjBaVzVsY2p0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVFWlhCc2IzbHRaVzUwTGtsdVptVnlaVzVqWlhJZ1BTQjBhR2x6TGtsdVptVnlaVzVqWlhJN1hHNGdJQ0FnSUNBZ0lIUm9hWE11VEc5bloyVnlMbWR5YjNWd1JXNWtLQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ3YVhCbGJHbHVaVU52Ym1acFp6dGNiaUFnSUNCOVhHNWNiaUFnSUNCaGMzbHVZeUJrWlhCc2Iza29LWHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0YzWVdsMElIUm9hWE11UkdWd2JHOTViV1Z1ZEM1a1pYQnNiM2tvS1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQkVaWEJzYjNsdFpXNTBUV2w0YVc1ek95SXNJbWx0Y0c5eWRDQjdJRVoxYm1OMGIzSWdmU0JtY205dElDZGpZWFZ6WVd3dGJtVjBMbU52Y21Vbk8xeHVaWGh3YjNKMElHUmxabUYxYkhRZ2JtVjNJRVoxYm1OMGIzSW9LVHNpTENKbGVIQnZjblFnZXlCa1pXWmhkV3gwSUdGeklHTmhkWE5oYkU1bGRFUmxjR3h2ZVcxbGJuUWdmU0JtY205dElDY3VMMk5oZFhOaGJFNWxkRVJsY0d4dmVXMWxiblFuTzF4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5QkVaWEJzYjNsdFpXNTBUV2w0YVc1eklIMGdabkp2YlNBbkxpOWtaWEJzYjNsdFpXNTBMbTFwZUdsdWN5YzdJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYMk5oZFhOaGJGOXVaWFJmWTI5eVpWOWZPeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlqWVhWellXeGZibVYwWDNWMGFXeHpYMTg3SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9iYXNlTW9kZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2Jhc2VNb2RlbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQuY29yZSAqLyBcImNhdXNhbC1uZXQuY29yZVwiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG5cblxuY2xhc3MgQmFzZU1vZGVsIGV4dGVuZHMgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJUZW5zb3JcIl0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kZWxOYW1lID0gJyc7XG4gIH1cblxuICBzZXQgTGF5ZXJSdW5uZXIocnVubmVyKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgZ2V0IExheWVyUnVubmVyKCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGZpdCgpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBsb3NzKCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIHByZWRpY3QoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgb25lSG90UHJlZGljdCgpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKEJhc2VNb2RlbCk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2NhdXNhbE5ldE1vZGVscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2F1c2FsTmV0TW9kZWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uICovIFwiLi9zcmMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qc1wiKTtcblxuXG5cbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2VkIG1vZGVscyB3aGljaCBjYW4gYmUgYWNjZXNzZWQgdmlhICoqY2F1c2FsTmV0TW9kZWxzKiogaW5zdGFuY2UuXG4gKiBAY2xhc3MgQ2F1c2FsTmV0TW9kZWxzXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvc2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbi5iYWJlbC5qc11cbiAqL1xuXG5jbGFzcyBDYXVzYWxOZXRNb2RlbHMgZXh0ZW5kcyBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJwbGF0Zm9ybVwiXS5taXhXaXRoKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiVGVuc29yXCJdLCBbXSkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY2xhc3NpZmljYXRpb24obnVtQ2xhc3MpIHtcbiAgICB0aGlzLm1vZGVsID0gbmV3IF9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdKG51bUNsYXNzKTtcbiAgICByZXR1cm4gdGhpcy5tb2RlbDtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAobmV3IENhdXNhbE5ldE1vZGVscygpKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogY2F1c2FsTmV0TW9kZWxzLCBNb2RlbE1peGlucywgQmFzZU1vZGVsLCBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9jYXVzYWxOZXRNb2RlbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2F1c2FsTmV0TW9kZWxzICovIFwiLi9zcmMvY2F1c2FsTmV0TW9kZWxzLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiY2F1c2FsTmV0TW9kZWxzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2NhdXNhbE5ldE1vZGVsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbW9kZWxfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21vZGVsLm1peGlucyAqLyBcIi4vc3JjL21vZGVsLm1peGlucy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk1vZGVsTWl4aW5zXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX21vZGVsX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfYmFzZU1vZGVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VNb2RlbCAqLyBcIi4vc3JjL2Jhc2VNb2RlbC5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkJhc2VNb2RlbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9iYXNlTW9kZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbiAqLyBcIi4vc3JjL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24uanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX1tcImRlZmF1bHRcIl07IH0pO1xuXG5cblxuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbW9kZWwubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tb2RlbC5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5jb25zdCBNb2RlbE1peGlucyA9IEJhc2VQaXBlbGluZUNsYXNzID0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3Mge1xuICBnZXQgTG9zc01vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5Mb3NzO1xuICB9XG5cbiAgZ2V0IEZpdE1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5GaXQ7XG4gIH1cblxuICBnZXQgT25lSG90UHJlZGljdE1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5PbmVIb3RQcmVkaWN0O1xuICB9XG5cbiAgZ2V0IFByZWRpY3RNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuUHJlZGljdDtcbiAgfVxuXG4gIGdldCBFbmNvZGVNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuRW5jb2RlO1xuICB9XG5cbiAgZ2V0IERlY29kZU1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5EZWNvZGU7XG4gIH1cblxuICBnZXQgTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsO1xuICB9XG5cbiAgc2V0IE1vZGVsKG1vZGVsKSB7XG4gICAgdGhpcy5uZXRNb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpIHtcbiAgICBpZiAoc3VwZXIuc2V0QnlDb25maWcpIHtcbiAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICB9XG5cbiAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgTW9kZWwgYnkgY29uZmlnJyk7XG4gICAgY29uc3Qge1xuICAgICAgTW9kZWxcbiAgICB9ID0gcGlwZWxpbmVDb25maWcuTmV0O1xuXG4gICAgaWYgKCFNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoYE1vZGVsIGlzIG5vdCBzZXQgaW4gJHtKU09OLnN0cmluZ2xpZnkocGlwZWxpbmVDb25maWcpfWApO1xuICAgIH1cblxuICAgIE1vZGVsLkxheWVyUnVubmVyID0gdGhpcy5MYXllclJ1bm5lcjtcbiAgICB0aGlzLk1vZGVsID0gTW9kZWw7XG4gICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgfVxuXG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKE1vZGVsTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9iYXNlTW9kZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYmFzZU1vZGVsICovIFwiLi9zcmMvYmFzZU1vZGVsLmpzXCIpO1xuXG5cbmNsYXNzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gZXh0ZW5kcyBfYmFzZU1vZGVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdIHtcbiAgY29uc3RydWN0b3IobnVtQ2xhc3MpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgaWYgKG51bUNsYXNzID4gMCkge1xuICAgICAgdGhpcy5udW1DbGFzcyA9IG51bUNsYXNzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IG51bWNsYXNzLCBnZXQgJHtudW1DbGFzc31gKTtcbiAgICB9XG4gIH1cblxuICBzZXQgTGF5ZXJSdW5uZXIobGF5ZXJSdW5uZXIpIHtcbiAgICBsZXQge1xuICAgICAgUHJlZGljdG9yXG4gICAgfSA9IGxheWVyUnVubmVyO1xuICAgIHRoaXMucnVubmVyID0ge1xuICAgICAgUHJlZGljdG9yXG4gICAgfTtcbiAgfVxuXG4gIGdldCBMYXllclJ1bm5lcigpIHtcbiAgICBpZiAoIXRoaXMucnVubmVyKSB7XG4gICAgICB0aHJvdyBFcnJvcigncnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5ydW5uZXI7XG4gIH1cblxuICBnZXQgRml0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIFByZWRpY3RvclxuICAgIH0gPSB0aGlzLkxheWVyUnVubmVyO1xuICAgIHJldHVybiBpbnB1dFRlbnNvciA9PiB7XG4gICAgICBsZXQgb3V0UHV0VGVuc29yID0gUHJlZGljdG9yKGlucHV0VGVuc29yKTtcbiAgICAgIGxldCBsb2dQcm9iID0gb3V0UHV0VGVuc29yLnN1YihvdXRQdXRUZW5zb3IubG9nU3VtRXhwKDEsIHRydWUpKTtcbiAgICAgIHJldHVybiBsb2dQcm9iO1xuICAgIH07XG4gIH1cblxuICBnZXQgUHJlZGljdCgpIHtcbiAgICBjb25zdCBGaXQgPSB0aGlzLkZpdDtcbiAgICByZXR1cm4gaW5wdXRUZW5zb3IgPT4ge1xuICAgICAgbGV0IGxvZ1Byb2IgPSBGaXQoaW5wdXRUZW5zb3IpO1xuICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gbG9nUHJvYi5hcmdNYXgoMSk7XG4gICAgICByZXR1cm4gcHJlZGljdGVkQ2xhc3M7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBPbmVIb3RQcmVkaWN0KCkge1xuICAgIGNvbnN0IFByZWRpY3QgPSB0aGlzLlByZWRpY3Q7XG4gICAgcmV0dXJuIGlucHV0VGVuc29yID0+IHtcbiAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IFByZWRpY3QoaW5wdXRUZW5zb3IpO1xuICAgICAgbGV0IG9uZUhvdFByZWRpY3QgPSB0aGlzLlQub25lSG90KHByZWRpY3RlZENsYXNzLCB0aGlzLm51bUNsYXNzKTtcbiAgICAgIHJldHVybiBvbmVIb3RQcmVkaWN0O1xuICAgIH07XG4gIH1cblxuICBnZXQgTG9zcygpIHtcbiAgICBjb25zdCBGaXQgPSB0aGlzLkZpdDtcbiAgICByZXR1cm4gKGlucHV0VGVuc29yLCBsYWJlbFRlbnNvcikgPT4ge1xuICAgICAgbGV0IGxvZ1Byb2IgPSBGaXQoaW5wdXRUZW5zb3IpO1xuICAgICAgbGV0IGxpa2VsaWhvb2QgPSBsb2dQcm9iLm5lZygpLm11bChsYWJlbFRlbnNvcik7XG4gICAgICBsZXQgbG9zcyA9IGxpa2VsaWhvb2Quc3VtKDEpLm1lYW4oKTtcbiAgICAgIHJldHVybiBsb3NzO1xuICAgIH07XG4gIH1cblxufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LmNvcmVcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQudXRpbHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMXZaR1ZzY3k5M1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRiMlJsYkhNdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0YjJSbGJITXZMaTl6Y21NdlltRnpaVTF2WkdWc0xtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXOWtaV3h6THk0dmMzSmpMMk5oZFhOaGJFNWxkRTF2WkdWc2N5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMXZaR1ZzY3k4dUwzTnlZeTlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMXZaR1ZzY3k4dUwzTnlZeTl0YjJSbGJDNXRhWGhwYm5NdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dGIyUmxiSE12TGk5emNtTXZjMmx1WjJ4bFRHRmliR1ZEYkdGemMybG1hV05oZEdsdmJpNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMXZaR1ZzY3k5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aUlpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2Ylc5a1pXeHpMMlY0ZEdWeWJtRnNJRndpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpSWwwc0ltNWhiV1Z6SWpwYklrSmhjMlZOYjJSbGJDSXNJbFJsYm5OdmNpSXNJbU52Ym5OMGNuVmpkRzl5SWl3aWJXOWtaV3hPWVcxbElpd2lUR0Y1WlhKU2RXNXVaWElpTENKeWRXNXVaWElpTENKRmNuSnZjaUlzSW1acGRDSXNJbXh2YzNNaUxDSndjbVZrYVdOMElpd2liMjVsU0c5MFVISmxaR2xqZENJc0lrTmhkWE5oYkU1bGRFMXZaR1ZzY3lJc0luQnNZWFJtYjNKdElpd2liV2w0VjJsMGFDSXNJa0poYzJWVVpXNXpiM0lpTENKamJHRnpjMmxtYVdOaGRHbHZiaUlzSW01MWJVTnNZWE56SWl3aWJXOWtaV3dpTENKVGFXNW5iR1ZNWVdKbGJFTnNZWE56YVdacFkyRjBhVzl1SWl3aVRXOWtaV3hOYVhocGJuTWlMQ0pDWVhObFVHbHdaV3hwYm1WRGJHRnpjeUlzSWt4dmMzTk5iMlJsYkNJc0ltNWxkRTF2WkdWc0lpd2lURzl6Y3lJc0lrWnBkRTF2WkdWc0lpd2lSbWwwSWl3aVQyNWxTRzkwVUhKbFpHbGpkRTF2WkdWc0lpd2lUMjVsU0c5MFVISmxaR2xqZENJc0lsQnlaV1JwWTNSTmIyUmxiQ0lzSWxCeVpXUnBZM1FpTENKRmJtTnZaR1ZOYjJSbGJDSXNJa1Z1WTI5a1pTSXNJa1JsWTI5a1pVMXZaR1ZzSWl3aVJHVmpiMlJsSWl3aVRXOWtaV3dpTENKelpYUkNlVU52Ym1acFp5SXNJbkJwY0dWc2FXNWxRMjl1Wm1sbklpd2lURzluWjJWeUlpd2laM0p2ZFhCQ1pXZHBiaUlzSWs1bGRDSXNJa3BUVDA0aUxDSnpkSEpwYm1kc2FXWjVJaXdpWjNKdmRYQkZibVFpTENKc1lYbGxjbEoxYm01bGNpSXNJbEJ5WldScFkzUnZjaUlzSW1sdWNIVjBWR1Z1YzI5eUlpd2liM1YwVUhWMFZHVnVjMjl5SWl3aWJHOW5VSEp2WWlJc0luTjFZaUlzSW14dloxTjFiVVY0Y0NJc0luQnlaV1JwWTNSbFpFTnNZWE56SWl3aVlYSm5UV0Y0SWl3aVZDSXNJbTl1WlVodmRDSXNJbXhoWW1Wc1ZHVnVjMjl5SWl3aWJHbHJaV3hwYUc5dlpDSXNJbTVsWnlJc0ltMTFiQ0lzSW5OMWJTSXNJbTFsWVc0aVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUkVGQk1FTXNaME5CUVdkRE8wRkJRekZGTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBWQlFYZEVMR3RDUVVGclFqdEJRVU14UlR0QlFVTkJMSGxFUVVGcFJDeGpRVUZqTzBGQlF5OUVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBSRUZCZVVNc2FVTkJRV2xETzBGQlF6RkZMSGRJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRCUVVOeVNUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGJFWkJPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5CTEUxQlFVMUJMRk5CUVU0c1UwRkJkMEpETEhORVFVRjRRaXhEUVVFNFFqdEJRVU14UWtNc1lVRkJWeXhIUVVGRk8wRkJRMVE3UVVGRFFTeFRRVUZMUXl4VFFVRk1MRWRCUVdsQ0xFVkJRV3BDTzBGQlEwZzdPMEZCUlVRc1RVRkJTVU1zVjBGQlNpeERRVUZuUWtNc1RVRkJhRUlzUlVGQmRVSTdRVUZEYmtJc1ZVRkJUVU1zUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRlJDeE5RVUZKUml4WFFVRktMRWRCUVdsQ08wRkJRMklzVlVGQlRVVXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkVNc1MwRkJSeXhIUVVGRk8wRkJRMFFzVlVGQlRVUXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkVVc1RVRkJTU3hIUVVGRk8wRkJRMFlzVlVGQlRVWXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkVjc1UwRkJUeXhIUVVGRk8wRkJRMHdzVlVGQlRVZ3NTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkVrc1pVRkJZU3hIUVVGRk8wRkJRMWdzVlVGQlRVb3NTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUV6UW5sQ096dEJRVGhDWms0c2QwVkJRV1lzUlRzN096czdPenM3T3pzN08wRkRMMEpCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenRCUVU5QkxFMUJRVTFYTEdWQlFVNHNVMEZCT0VKRExIbEVRVUZSTEVOQlFVTkRMRTlCUVZRc1EwRkJhMEpETEhORVFVRnNRaXhGUVVFNFFpeEZRVUU1UWl4RFFVRTVRaXhEUVVGblJUdEJRVU0xUkZvc1lVRkJWeXhIUVVGRk8wRkJRMVE3UVVGRFNEczdRVUZGUkdFc1owSkJRV01zUTBGQlEwTXNVVUZCUkN4RlFVRlZPMEZCUTNCQ0xGTkJRVXRETEV0QlFVd3NSMEZCWVN4SlFVRkpReXhyUlVGQlNpeERRVUU0UWtZc1VVRkJPVUlzUTBGQllqdEJRVU5CTEZkQlFVOHNTMEZCUzBNc1MwRkJXanRCUVVOSU96dEJRVkl5UkRzN1FVRlZha1FzYlVWQlFVbE9MR1ZCUVVvc1JVRkJaaXhGT3pzN096czdPenM3T3pzN1FVTndRa0U3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVTkJPMEZCUlVFN096czdPenM3T3pzN096czdRVU5JUVR0QlFVRkJMRTFCUVUxUkxGZEJRVmNzUjBGQlNVTXNhVUpCUVVRc1NVRkJjMElzWTBGQlkwRXNhVUpCUVdRc1EwRkJLMEk3UVVGRGNrVXNUVUZCU1VNc1UwRkJTaXhIUVVGbE8wRkJRMWdzVVVGQlJ5eERRVUZETEV0QlFVdERMRkZCUVZRc1JVRkJhMEk3UVVGRFpDeFpRVUZOYUVJc1MwRkJTeXhEUVVGRExIRkNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSQ3hYUVVGUExFdEJRVXRuUWl4UlFVRk1MRU5CUVdORExFbEJRWEpDTzBGQlEwZzdPMEZCUlVRc1RVRkJTVU1zVVVGQlNpeEhRVUZqTzBGQlExWXNVVUZCUnl4RFFVRkRMRXRCUVV0R0xGRkJRVlFzUlVGQmEwSTdRVUZEWkN4WlFVRk5hRUlzUzBGQlN5eERRVUZETEhGQ1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdG5RaXhSUVVGTUxFTkJRV05ITEVkQlFYSkNPMEZCUTBnN08wRkJSVVFzVFVGQlNVTXNhMEpCUVVvc1IwRkJkMEk3UVVGRGNFSXNVVUZCUnl4RFFVRkRMRXRCUVV0S0xGRkJRVlFzUlVGQmEwSTdRVUZEWkN4WlFVRk5hRUlzUzBGQlN5eERRVUZETEhGQ1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdG5RaXhSUVVGTUxFTkJRV05MTEdGQlFYSkNPMEZCUTBnN08wRkJSVVFzVFVGQlNVTXNXVUZCU2l4SFFVRnJRanRCUVVOa0xGRkJRVWNzUTBGQlF5eExRVUZMVGl4UlFVRlVMRVZCUVd0Q08wRkJRMlFzV1VGQlRXaENMRXRCUVVzc1EwRkJReXh4UWtGQlJDeERRVUZZTzBGQlEwZzdPMEZCUTBRc1YwRkJUeXhMUVVGTFowSXNVVUZCVEN4RFFVRmpUeXhQUVVGeVFqdEJRVU5JT3p0QlFVVkVMRTFCUVVsRExGZEJRVW9zUjBGQmFVSTdRVUZEWWl4UlFVRkhMRU5CUVVNc1MwRkJTMUlzVVVGQlZDeEZRVUZyUWp0QlFVTmtMRmxCUVUxb1FpeExRVUZMTEVOQlFVTXNjVUpCUVVRc1EwRkJXRHRCUVVOSU96dEJRVU5FTEZkQlFVOHNTMEZCUzJkQ0xGRkJRVXdzUTBGQlkxTXNUVUZCY2tJN1FVRkRTRHM3UVVGRlJDeE5RVUZKUXl4WFFVRktMRWRCUVdsQ08wRkJRMklzVVVGQlJ5eERRVUZETEV0QlFVdFdMRkZCUVZRc1JVRkJhMEk3UVVGRFpDeFpRVUZOYUVJc1MwRkJTeXhEUVVGRExIRkNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSQ3hYUVVGUExFdEJRVXRuUWl4UlFVRk1MRU5CUVdOWExFMUJRWEpDTzBGQlEwZzdPMEZCUjBRc1RVRkJTVU1zUzBGQlNpeEhRVUZYTzBGQlExQXNVVUZCUnl4RFFVRkRMRXRCUVV0YUxGRkJRVlFzUlVGQmEwSTdRVUZEWkN4WlFVRk5hRUlzUzBGQlN5eERRVUZETEhGQ1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdG5RaXhSUVVGYU8wRkJRMGc3TzBGQlIwUXNUVUZCU1Zrc1MwRkJTaXhEUVVGVmFrSXNTMEZCVml4RlFVRm5RanRCUVVOYUxGTkJRVXRMTEZGQlFVd3NSMEZCWjBKTUxFdEJRV2hDTzBGQlEwZzdPMEZCUlVSclFpeGhRVUZYTEVOQlFVTkRMR05CUVVRc1JVRkJaMEk3UVVGRGRrSXNVVUZCUnl4TlFVRk5SQ3hYUVVGVUxFVkJRWEZDTzBGQlEycENMRmxCUVUxQkxGZEJRVTRzUTBGQmEwSkRMR05CUVd4Q08wRkJRMGc3TzBGQlEwUXNVMEZCUzBNc1RVRkJUQ3hEUVVGWlF5eFZRVUZhTEVOQlFYVkNMSEZDUVVGMlFqdEJRVU5CTEZWQlFVMDdRVUZCUlVvN1FVRkJSaXhSUVVGWlJTeGpRVUZqTEVOQlFVTkhMRWRCUVdwRE96dEJRVU5CTEZGQlFVY3NRMEZCUTB3c1MwRkJTaXhGUVVGVk8wRkJRMDRzV1VGQlRUVkNMRXRCUVVzc1EwRkJSU3gxUWtGQmMwSnJReXhKUVVGSkxFTkJRVU5ETEZWQlFVd3NRMEZCWjBKTUxHTkJRV2hDTEVOQlFXZERMRVZCUVhoRUxFTkJRVmc3UVVGRFNEczdRVUZEUkVZc1UwRkJTeXhEUVVGRE9VSXNWMEZCVGl4SFFVRnZRaXhMUVVGTFFTeFhRVUY2UWp0QlFVTkJMRk5CUVVzNFFpeExRVUZNTEVkQlFXRkJMRXRCUVdJN1FVRkRRU3hUUVVGTFJ5eE5RVUZNTEVOQlFWbExMRkZCUVZvN1FVRkRTRHM3UVVGd1JXOUZMRU5CUVhwRk96dEJRWFZGWlhaQ0xEQkZRVUZtTEVVN096czdPenM3T3pzN096dEJRM1pGUVR0QlFVRkJPMEZCUVVFN08wRkJSVUVzVFVGQlRVUXNlVUpCUVU0c1UwRkJkME5zUWl4clJFRkJlRU1zUTBGQmFVUTdRVUZETjBORkxHRkJRVmNzUTBGQlEyTXNVVUZCUkN4RlFVRlZPMEZCUTJwQ096dEJRVU5CTEZGQlFVZEJMRkZCUVZFc1IwRkJSeXhEUVVGa0xFVkJRV2RDTzBGQlExb3NWMEZCUzBFc1VVRkJUQ3hIUVVGblFrRXNVVUZCYUVJN1FVRkRTQ3hMUVVaRUxFMUJSMGs3UVVGRFFTeFpRVUZOVml4TFFVRkxMRU5CUVVVc2QwSkJRWFZDVlN4UlFVRlRMRVZCUVd4RExFTkJRVmc3UVVGRFNEdEJRVU5LT3p0QlFVVkVMRTFCUVVsYUxGZEJRVW9zUTBGQlowSjFReXhYUVVGb1FpeEZRVUUwUWp0QlFVTjRRaXhSUVVGSk8wRkJRVVZETzBGQlFVWXNVVUZCWjBKRUxGZEJRWEJDTzBGQlEwRXNVMEZCUzNSRExFMUJRVXdzUjBGQll6dEJRVUZGZFVNN1FVRkJSaXhMUVVGa08wRkJRMGc3TzBGQlJVUXNUVUZCU1hoRExGZEJRVW9zUjBGQmFVSTdRVUZEWWl4UlFVRkhMRU5CUVVNc1MwRkJTME1zVFVGQlZDeEZRVUZuUWp0QlFVTmFMRmxCUVUxRExFdEJRVXNzUTBGQlF5eHRRa0ZCUkN4RFFVRllPMEZCUTBnN08wRkJRMFFzVjBGQlR5eExRVUZMUkN4TlFVRmFPMEZCUTBnN08wRkJSVVFzVFVGQlNXOUNMRWRCUVVvc1IwRkJVenRCUVVOTUxGVkJRVTA3UVVGQlJXMUNPMEZCUVVZc1VVRkJaMElzUzBGQlMzaERMRmRCUVROQ08wRkJRMEVzVjBGQlVYbERMRmRCUVVRc1NVRkJaVHRCUVVOc1FpeFZRVUZKUXl4WlFVRlpMRWRCUVVkR0xGTkJRVk1zUTBGQlEwTXNWMEZCUkN4RFFVRTFRanRCUVVOQkxGVkJRVWxGTEU5QlFVOHNSMEZCUjBRc1dVRkJXU3hEUVVGRFJTeEhRVUZpTEVOQlFXbENSaXhaUVVGWkxFTkJRVU5ITEZOQlFXSXNRMEZCZFVJc1EwRkJka0lzUlVGQk1FSXNTVUZCTVVJc1EwRkJha0lzUTBGQlpEdEJRVU5CTEdGQlFVOUdMRTlCUVZBN1FVRkRTQ3hMUVVwRU8wRkJTMGc3TzBGQlJVUXNUVUZCU1d4Q0xFOUJRVW9zUjBGQllUdEJRVU5VTEZWQlFVMUtMRWRCUVVjc1IwRkJSeXhMUVVGTFFTeEhRVUZxUWp0QlFVTkJMRmRCUVZGdlFpeFhRVUZFTEVsQlFXVTdRVUZEYkVJc1ZVRkJTVVVzVDBGQlR5eEhRVUZIZEVJc1IwRkJSeXhEUVVGRGIwSXNWMEZCUkN4RFFVRnFRanRCUVVOQkxGVkJRVWxMTEdOQlFXTXNSMEZCUjBnc1QwRkJUeXhEUVVGRFNTeE5RVUZTTEVOQlFXVXNRMEZCWml4RFFVRnlRanRCUVVOQkxHRkJRVTlFTEdOQlFWQTdRVUZEU0N4TFFVcEVPMEZCUzBnN08wRkJSVVFzVFVGQlNYWkNMR0ZCUVVvc1IwRkJiVUk3UVVGRFppeFZRVUZOUlN4UFFVRlBMRWRCUVVjc1MwRkJTMEVzVDBGQmNrSTdRVUZEUVN4WFFVRlJaMElzVjBGQlJDeEpRVUZsTzBGQlEyeENMRlZCUVVsTExHTkJRV01zUjBGQlIzSkNMRTlCUVU4c1EwRkJRMmRDTEZkQlFVUXNRMEZCTlVJN1FVRkRRU3hWUVVGSmJrTXNZVUZCWVN4SFFVRkhMRXRCUVVzd1F5eERRVUZNTEVOQlFVOURMRTFCUVZBc1EwRkJZMGdzWTBGQlpDeEZRVUU0UWl4TFFVRkxiRU1zVVVGQmJrTXNRMEZCY0VJN1FVRkRRU3hoUVVGUFRpeGhRVUZRTzBGQlEwZ3NTMEZLUkR0QlFVdElPenRCUVVORUxFMUJRVWxoTEVsQlFVb3NSMEZCVlR0QlFVTk9MRlZCUVUxRkxFZEJRVWNzUjBGQlJ5eExRVUZMUVN4SFFVRnFRanRCUVVOQkxGZEJRVThzUTBGQlEyOUNMRmRCUVVRc1JVRkJZMU1zVjBGQlpDeExRVUUwUWp0QlFVTXZRaXhWUVVGSlVDeFBRVUZQTEVkQlFVZDBRaXhIUVVGSExFTkJRVU52UWl4WFFVRkVMRU5CUVdwQ08wRkJRMEVzVlVGQlNWVXNWVUZCVlN4SFFVRkhVaXhQUVVGUExFTkJRVU5UTEVkQlFWSXNSMEZCWTBNc1IwRkJaQ3hEUVVGclFrZ3NWMEZCYkVJc1EwRkJha0k3UVVGRFFTeFZRVUZKT1VNc1NVRkJTU3hIUVVGSEswTXNWVUZCVlN4RFFVRkRSeXhIUVVGWUxFTkJRV1VzUTBGQlppeEZRVUZyUWtNc1NVRkJiRUlzUlVGQldEdEJRVU5CTEdGQlFVOXVSQ3hKUVVGUU8wRkJRMGdzUzBGTVJEdEJRVTFJT3p0QlFYcEVORU03TzBGQk1rUnNRMVVzZDBaQlFXWXNSVHM3T3pzN096czdPenM3UVVNM1JFRXNOa1E3T3pzN096czdPenM3TzBGRFFVRXNPRVFpTENKbWFXeGxJam9pUUdOaGRYTmhiRTVsZEM5dGIyUmxiSE11ZDJWaUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNoeVpYRjFhWEpsS0Z3aVkyRjFjMkZzTFc1bGRDNWpiM0psWENJcExDQnlaWEYxYVhKbEtGd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lLU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGJYQ0pqWVhWellXd3RibVYwTG1OdmNtVmNJaXdnWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENKZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJa0JqWVhWellXeE9aWFF2Ylc5a1pXeHpYQ0pkSUQwZ1ptRmpkRzl5ZVNoeVpYRjFhWEpsS0Z3aVkyRjFjMkZzTFc1bGRDNWpiM0psWENJcExDQnlaWEYxYVhKbEtGd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lLU2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aVFHTmhkWE5oYkU1bGRDOXRiMlJsYkhOY0lsMGdQU0JtWVdOMGIzSjVLSEp2YjNSYlhDSmpZWFZ6WVd3dGJtVjBMbU52Y21WY0lsMHNJSEp2YjNSYlhDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSmRLVHRjYm4wcEtIUm9hWE1zSUdaMWJtTjBhVzl1S0Y5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWTJGMWMyRnNYMjVsZEY5amIzSmxYMThzSUY5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWTJGMWMyRnNYMjVsZEY5MWRHbHNjMTlmS1NCN1hHNXlaWFIxY200Z0lpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lHZGxkRG9nWjJWMGRHVnlJSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdYMTlsYzAxdlpIVnNaU0J2YmlCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6S1NCN1hHNGdYSFJjZEdsbUtIUjVjR1Z2WmlCVGVXMWliMndnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnlrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVJRngwWEhSOVhHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQW5YMTlsYzAxdlpIVnNaU2NzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJqY21WaGRHVWdZU0JtWVd0bElHNWhiV1Z6Y0dGalpTQnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUF4T2lCMllXeDFaU0JwY3lCaElHMXZaSFZzWlNCcFpDd2djbVZ4ZFdseVpTQnBkRnh1SUZ4MEx5OGdiVzlrWlNBbUlESTZJRzFsY21kbElHRnNiQ0J3Y205d1pYSjBhV1Z6SUc5bUlIWmhiSFZsSUdsdWRHOGdkR2hsSUc1elhHNGdYSFF2THlCdGIyUmxJQ1lnTkRvZ2NtVjBkWEp1SUhaaGJIVmxJSGRvWlc0Z1lXeHlaV0ZrZVNCdWN5QnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUE0ZkRFNklHSmxhR0YyWlNCc2FXdGxJSEpsY1hWcGNtVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWRDQTlJR1oxYm1OMGFXOXVLSFpoYkhWbExDQnRiMlJsS1NCN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeEtTQjJZV3gxWlNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9kbUZzZFdVcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ09Da2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFJwWmlnb2JXOWtaU0FtSURRcElDWW1JSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlsYzAxdlpIVnNaU2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhSMllYSWdibk1nUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cE8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSW9ibk1wTzF4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2JuTXNJQ2RrWldaaGRXeDBKeXdnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCMllXeDFaVG9nZG1Gc2RXVWdmU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF5SUNZbUlIUjVjR1Z2WmlCMllXeDFaU0FoUFNBbmMzUnlhVzVuSnlrZ1ptOXlLSFpoY2lCclpYa2dhVzRnZG1Gc2RXVXBJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNodWN5d2dhMlY1TENCbWRXNWpkR2x2YmloclpYa3BJSHNnY21WMGRYSnVJSFpoYkhWbFcydGxlVjA3SUgwdVltbHVaQ2h1ZFd4c0xDQnJaWGtwS1R0Y2JpQmNkRngwY21WMGRYSnVJRzV6TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJRndpTGk5emNtTXZhVzVrWlhndWFuTmNJaWs3WEc0aUxDSnBiWEJ2Y25RZ2V5QlVaVzV6YjNJZ2ZTQm1jbTl0SUNkallYVnpZV3d0Ym1WMExtTnZjbVVuTzF4dVkyeGhjM01nUW1GelpVMXZaR1ZzSUdWNGRHVnVaSE1nVkdWdWMyOXllMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2w3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViVzlrWld4T1lXMWxJRDBnSnljN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWMElFeGhlV1Z5VW5WdWJtVnlLSEoxYm01bGNpbDdYRzRnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0NkcGJYQnNaVzFsYm5RZ2NtVnhkV2x5WldRbktUdGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUWdUR0Y1WlhKU2RXNXVaWElvS1h0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMmx0Y0d4bGJXVnVkQ0J5WlhGMWFYSmxaQ2NwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR1pwZENncGUxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYVcxd2JHVnRaVzUwSUhKbGNYVnBjbVZrSnlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkc5emN5Z3BlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmFXMXdiR1Z0Wlc1MElISmxjWFZwY21Wa0p5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NISmxaR2xqZENncGUxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYVcxd2JHVnRaVzUwSUhKbGNYVnBjbVZrSnlrN1hHNGdJQ0FnZlZ4dUlDQWdJRzl1WlVodmRGQnlaV1JwWTNRb0tYdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjJsdGNHeGxiV1Z1ZENCeVpYRjFhWEpsWkNjcE8xeHVJQ0FnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdRbUZ6WlUxdlpHVnNPeUlzSW1sdGNHOXlkQ0I3SUhCc1lYUm1iM0p0SUgwZ1puSnZiU0FuWTJGMWMyRnNMVzVsZEM1MWRHbHNjeWM3WEc1cGJYQnZjblFnZXlCVVpXNXpiM0lnWVhNZ1FtRnpaVlJsYm5OdmNpQjlJR1p5YjIwZ0oyTmhkWE5oYkMxdVpYUXVZMjl5WlNjN1hHNXBiWEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJRk5wYm1kc1pVeGhZbVZzUTJ4aGMzTnBabWxqWVhScGIyNGdmU0JtY205dElDY3VMM05wYm1kc1pVeGhZbXhsUTJ4aGMzTnBabWxqWVhScGIyNG5PMXh1THlvcVhHNGdLaUJVYUdseklHTnNZWE56SUhCeWIzWnBaR1VnWTI5dGJXOXVJSFZ6WldRZ2JXOWtaV3h6SUhkb2FXTm9JR05oYmlCaVpTQmhZMk5sYzNObFpDQjJhV0VnS2lwallYVnpZV3hPWlhSTmIyUmxiSE1xS2lCcGJuTjBZVzVqWlM1Y2JpQXFJRUJqYkdGemN5QkRZWFZ6WVd4T1pYUk5iMlJsYkhOY2JpQXFJRUJsZUhSbGJtUnpJRUpoYzJWVVpXNXpiM0pjYmlBcUlFQmxlR0Z0Y0d4bFhHNGdLaUJiUlZoQlRWQk1SU0F1TGk5bGVHRnRjR3hsY3k5emFXNW5iR1ZNWVdKbGJFTnNZWE56YVdacFkyRjBhVzl1TG1KaFltVnNMbXB6WFZ4dUlDb3ZYRzVqYkdGemN5QkRZWFZ6WVd4T1pYUk5iMlJsYkhNZ1pYaDBaVzVrY3lCd2JHRjBabTl5YlM1dGFYaFhhWFJvS0NCQ1lYTmxWR1Z1YzI5eUxDQmJYU0FwZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NsN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHTnNZWE56YVdacFkyRjBhVzl1S0c1MWJVTnNZWE56S1h0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0YjJSbGJDQTlJRzVsZHlCVGFXNW5iR1ZNWVdKbGJFTnNZWE56YVdacFkyRjBhVzl1S0c1MWJVTnNZWE56S1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXViVzlrWld3N1hHNGdJQ0FnZlZ4dWZWeHVaWGh3YjNKMElHUmxabUYxYkhRZ2JtVjNJRU5oZFhOaGJFNWxkRTF2WkdWc2N5Z3BPeUlzSW1WNGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1kyRjFjMkZzVG1WMFRXOWtaV3h6SUgwZ1puSnZiU0FuTGk5allYVnpZV3hPWlhSTmIyUmxiSE1uTzF4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5Qk5iMlJsYkUxcGVHbHVjeUI5SUdaeWIyMGdKeTR2Ylc5a1pXd3ViV2w0YVc1ekp6dGNibHh1Wlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCQ1lYTmxUVzlrWld3Z2ZTQm1jbTl0SUNjdUwySmhjMlZOYjJSbGJDYzdYRzVsZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUZOcGJtZHNaVXhoWW1Wc1EyeGhjM05wWm1sallYUnBiMjRnZlNCbWNtOXRJQ2N1TDNOcGJtZHNaVXhoWW14bFEyeGhjM05wWm1sallYUnBiMjRuTzF4dUlpd2lZMjl1YzNRZ1RXOWtaV3hOYVhocGJuTWdQU0FvUW1GelpWQnBjR1ZzYVc1bFEyeGhjM01wUFQ0Z1kyeGhjM01nWlhoMFpXNWtjeUJDWVhObFVHbHdaV3hwYm1WRGJHRnpjM3RjYmlBZ0lDQm5aWFFnVEc5emMwMXZaR1ZzS0NsN1hHNGdJQ0FnSUNBZ0lHbG1LQ0YwYUdsekxtNWxkRTF2WkdWc0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtDZHVaWFJOYjJSbGJDQnBjeUJ1YjNRZ2MyVjBKeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVibVYwVFc5a1pXd3VURzl6Y3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhRZ1JtbDBUVzlrWld3b0tYdGNiaUFnSUNBZ0lDQWdhV1lvSVhSb2FYTXVibVYwVFc5a1pXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMjVsZEUxdlpHVnNJR2x6SUc1dmRDQnpaWFFuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV1WlhSTmIyUmxiQzVHYVhRN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHZGxkQ0JQYm1WSWIzUlFjbVZrYVdOMFRXOWtaV3dvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJtVjBUVzlrWld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oyNWxkRTF2WkdWc0lHbHpJRzV2ZENCelpYUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXVaWFJOYjJSbGJDNVBibVZJYjNSUWNtVmthV04wTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZENCUWNtVmthV04wVFc5a1pXd29LWHRjYmlBZ0lDQWdJQ0FnYVdZb0lYUm9hWE11Ym1WMFRXOWtaV3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjI1bGRFMXZaR1ZzSUdseklHNXZkQ0J6WlhRbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dVpYUk5iMlJsYkM1UWNtVmthV04wTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZENCRmJtTnZaR1ZOYjJSbGJDZ3BlMXh1SUNBZ0lDQWdJQ0JwWmlnaGRHaHBjeTV1WlhSTmIyUmxiQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYm1WMFRXOWtaV3dnYVhNZ2JtOTBJSE5sZENjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG01bGRFMXZaR1ZzTGtWdVkyOWtaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFFnUkdWamIyUmxUVzlrWld3b0tYdGNiaUFnSUNBZ0lDQWdhV1lvSVhSb2FYTXVibVYwVFc5a1pXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMjVsZEUxdlpHVnNJR2x6SUc1dmRDQnpaWFFuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV1WlhSTmIyUmxiQzVFWldOdlpHVTdYRzRnSUNBZ2ZWeHVYRzVjYmlBZ0lDQm5aWFFnVFc5a1pXd29LWHRjYmlBZ0lDQWdJQ0FnYVdZb0lYUm9hWE11Ym1WMFRXOWtaV3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjI1bGRFMXZaR1ZzSUdseklHNXZkQ0J6WlhRbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dVpYUk5iMlJsYkR0Y2JpQWdJQ0I5WEc0Z0lDQWdYRzVjYmlBZ0lDQnpaWFFnVFc5a1pXd29iVzlrWld3cGV5QWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym1WMFRXOWtaV3dnUFNCdGIyUmxiRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaWFJDZVVOdmJtWnBaeWh3YVhCbGJHbHVaVU52Ym1acFp5bDdYRzRnSUNBZ0lDQWdJR2xtS0hOMWNHVnlMbk5sZEVKNVEyOXVabWxuS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4xY0dWeUxuTmxkRUo1UTI5dVptbG5LSEJwY0dWc2FXNWxRMjl1Wm1sbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdsekxreHZaMmRsY2k1bmNtOTFjRUpsWjJsdUtDZHpaWFFnVFc5a1pXd2dZbmtnWTI5dVptbG5KeWs3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSHNnVFc5a1pXd2dmU0E5SUhCcGNHVnNhVzVsUTI5dVptbG5MazVsZER0Y2JpQWdJQ0FnSUNBZ2FXWW9JVTF2WkdWc0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtHQk5iMlJsYkNCcGN5QnViM1FnYzJWMElHbHVJQ1I3U2xOUFRpNXpkSEpwYm1kc2FXWjVLSEJwY0dWc2FXNWxRMjl1Wm1sbktYMWdLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCTmIyUmxiQzVNWVhsbGNsSjFibTVsY2lBOUlIUm9hWE11VEdGNVpYSlNkVzV1WlhJN1hHNGdJQ0FnSUNBZ0lIUm9hWE11VFc5a1pXd2dQU0JOYjJSbGJEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1TWIyZG5aWEl1WjNKdmRYQkZibVFvS1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQk5iMlJsYkUxcGVHbHVjenRjYmlJc0ltbHRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdRbUZ6WlUxdlpHVnNJSDBnWm5KdmJTQW5MaTlpWVhObFRXOWtaV3duTzF4dVhHNWpiR0Z6Y3lCVGFXNW5iR1ZNWVdKbGJFTnNZWE56YVdacFkyRjBhVzl1SUdWNGRHVnVaSE1nUW1GelpVMXZaR1ZzZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0c1MWJVTnNZWE56S1h0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvS1R0Y2JpQWdJQ0FnSUNBZ2FXWW9iblZ0UTJ4aGMzTWdQaUF3S1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJuVnRRMnhoYzNNZ1BTQnVkVzFEYkdGemN6dGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JsYkhObGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb1lHVjRjR1ZqZENCdWRXMWpiR0Z6Y3l3Z1oyVjBJQ1I3Ym5WdFEyeGhjM045WUNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCelpYUWdUR0Y1WlhKU2RXNXVaWElvYkdGNVpYSlNkVzV1WlhJcGUxeHVJQ0FnSUNBZ0lDQnNaWFFnZXlCUWNtVmthV04wYjNJZ2ZTQTlJR3hoZVdWeVVuVnVibVZ5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbkoxYm01bGNpQTlJSHNnVUhKbFpHbGpkRzl5SUgwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMElFeGhlV1Z5VW5WdWJtVnlLQ2w3WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6TG5KMWJtNWxjaWw3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduY25WdWJtVnlJR2x6SUc1dmRDQnpaWFFuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV5ZFc1dVpYSTdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJR2RsZENCR2FYUW9LWHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdleUJRY21Wa2FXTjBiM0lnZlNBOUlIUm9hWE11VEdGNVpYSlNkVzV1WlhJN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb2FXNXdkWFJVWlc1emIzSXBQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYjNWMFVIVjBWR1Z1YzI5eUlEMGdVSEpsWkdsamRHOXlLR2x1Y0hWMFZHVnVjMjl5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCc2IyZFFjbTlpSUQwZ2IzVjBVSFYwVkdWdWMyOXlMbk4xWWlodmRYUlFkWFJVWlc1emIzSXViRzluVTNWdFJYaHdLREVzSUhSeWRXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCc2IyZFFjbTlpTzF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQm5aWFFnVUhKbFpHbGpkQ2dwZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JHYVhRZ1BTQjBhR2x6TGtacGREdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaHBibkIxZEZSbGJuTnZjaWs5UG50Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCc2IyZFFjbTlpSUQwZ1JtbDBLR2x1Y0hWMFZHVnVjMjl5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCd2NtVmthV04wWldSRGJHRnpjeUE5SUd4dloxQnliMkl1WVhKblRXRjRLREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIQnlaV1JwWTNSbFpFTnNZWE56TzF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRDQlBibVZJYjNSUWNtVmthV04wS0NsN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUZCeVpXUnBZM1FnUFNCMGFHbHpMbEJ5WldScFkzUTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9hVzV3ZFhSVVpXNXpiM0lwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2NISmxaR2xqZEdWa1EyeGhjM01nUFNCUWNtVmthV04wS0dsdWNIVjBWR1Z1YzI5eUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnZibVZJYjNSUWNtVmthV04wSUQwZ2RHaHBjeTVVTG05dVpVaHZkQ2h3Y21Wa2FXTjBaV1JEYkdGemN5d2dkR2hwY3k1dWRXMURiR0Z6Y3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiMjVsU0c5MFVISmxaR2xqZER0Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNGdJQ0FnWjJWMElFeHZjM01vS1h0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnUm1sMElEMGdkR2hwY3k1R2FYUTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9hVzV3ZFhSVVpXNXpiM0lzSUd4aFltVnNWR1Z1YzI5eUtUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR3h2WjFCeWIySWdQU0JHYVhRb2FXNXdkWFJVWlc1emIzSXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR3hwYTJWc2FXaHZiMlFnUFNCc2IyZFFjbTlpTG01bFp5Z3BMbTExYkNoc1lXSmxiRlJsYm5OdmNpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdiRzl6Y3lBOUlHeHBhMlZzYVdodmIyUXVjM1Z0S0RFcExtMWxZVzRvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnNiM056TzF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JuMWNibVY0Y0c5eWRDQmtaV1poZFd4MElGTnBibWRzWlV4aFltVnNRMnhoYzNOcFptbGpZWFJwYjI0N0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4RlgyTmhkWE5oYkY5dVpYUmZZMjl5WlY5Zk95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYM1YwYVd4elgxODdJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09IiwiLyoqXG4gKiBUaGUgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zIGNsYXNzIGlzIHRoZSBtaXhpcyBjbGFzcyBmb3IgZGVwbG95aW5nIGVuc2VtYmxlIG1vZGVsXG4gKiBAY2xhc3MgQ2F1c2FsTmV0XG4gKiBAZXh0ZW5kcyB7IEJhc2VQaXBlbGluZUNsYXNzIH1cbiAqL1xuY29uc3QgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFByb3ZpZGUgRW5zZW1ibGVJbmZlcmVuY2VyIGNhbGxlciwgRW5zZW1ibGVNb2RlbFByZWRpY3QgbXVzdCBiZSBzZXQgaW4gcHJpb3JcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICBnZXQgRW5zZW1ibGVJbmZlcmVuY2VyKCl7XG4gICAgICAgIGNvbnN0IE1vZGVsTGVuc2VzID0gKCk9Pih7IEVuc2VtYmxlUHJlZGljdDogdGhpcy5FbnNlbWJsZU1vZGVsUHJlZGljdCB9KTtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgcmV0dXJuIGFzeW5jIChpbnB1dCk9PntcbiAgICAgICAgICAgIGxldCB7IEVuc2VtYmxlUHJlZGljdCB9ID0gaW5wdXQ7XG4gICAgICAgICAgICBsZXQgaW5mZXIgPSB7fTtcbiAgICAgICAgICAgIGlmKEVuc2VtYmxlUHJlZGljdCl7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VGVuc29yID0gVC50ZW5zb3IoRW5zZW1ibGVQcmVkaWN0KS5hc1R5cGUoJ2Zsb2F0MzInKS5yZXNoYXBlKFsxLCAtMV0pO1xuICAgICAgICAgICAgICAgIGxldCBwcmVkaWN0VGVuc29yID0gYXdhaXQgTW9kZWxMZW5zZXMoKS5FbnNlbWJsZVByZWRpY3QoaW5wdXRUZW5zb3IpO1xuICAgICAgICAgICAgICAgIGluZmVyLkVuc2VtYmxlUHJlZGljdCA9IGF3YWl0IHByZWRpY3RUZW5zb3IuZGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZmVyO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBwcm9jZXNzIHBpcGVsaW5lQ29uZmlnIG9iamVjdCBmb3IgZW5zZW1ibGUgZGVwbG95bWVudFxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IHBpcGVsaW5lQ29uZmlnXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgZW5zZW1ibGUgZGVwbG95bWVudCBieSBjb25maWcnKTtcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50LkVuc2VtYmxlSW5mZXJlbmNlciA9IHRoaXMuRW5zZW1ibGVJbmZlcmVuY2VyO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICByZXR1cm4gcGlwZWxpbmVDb25maWc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGRlcGxveSBtb2RlbFxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9IGRlcGxveW1lbnQgc3VtbWFyeVxuICAgICAqL1xuICAgIGFzeW5jIGRlcGxveSgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5EZXBsb3ltZW50LmRlcGxveSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuc2VtYmxlRGVwbG95bWVudE1peGluczsiLCJjb25zdCBFbnNlbWJsZUV2YWx1YXRvck1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzeyBcbiAgICBhc3luYyBlbnNlbWJsZVRlc3QoYmF0Y2hTaXplLCBtZXRob2Q9J2FjY3VyYWN5Jyl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZScpOyBcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRW5zZW1ibGVFdmFsdWF0b3JNaXhpbnM7IiwiLyoqXG4gKiBUaGUgRW5zZW1ibGVNb2RlbE1peGlucyBjbGFzcyBpcyB0aGUgbWl4aXMgY2xhc3MgZm9yIGVuc2VtYmxlIG1vZGVsIGNhbGxlclxuICogQGNsYXNzIEVuc2VtYmxlTW9kZWxNaXhpbnNcbiAqIEBleHRlbmRzIHtCYXNlUGlwZWxpbmVDbGFzc31cbiAqL1xuY29uc3QgRW5zZW1ibGVNb2RlbE1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzeyBcblxuICAgIGdldCBFbnNlbWJsZU1vZGVsUHJlZGljdCgpe1xuICAgICAgICBjb25zdCBGaXRNb2RlbCA9IHRoaXMuRml0TW9kZWw7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGNvbnN0IEVuc2VtYmxlTW9kZWxzID0gdGhpcy5FbnNlbWJsZU1vZGVscztcbiAgICAgICAgY29uc3QgQmFnZ2luZyA9IGFzeW5jIChpbnB1dFRlbnNvcik9PntcbiAgICAgICAgICAgIGxldCBwcm9iRml0cyA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBFbnNlbWJsZU1vZGVscyl7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUGFyYW1zKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvYiA9IEZpdE1vZGVsKGlucHV0VGVuc29yKS5leHAoKTtcbiAgICAgICAgICAgICAgICBwcm9iRml0cy5wdXNoKHByb2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG1lYW5Qcm9iID0gVC5zdGFjayhwcm9iRml0cykubWVhbigwKTtcbiAgICAgICAgICAgIHJldHVybiBtZWFuUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBCYWdnaW5nOyAgIFxuICAgIH1cblxuICAgIHNldCBFbnNlbWJsZU1vZGVscyhtb2RlbGlzdCl7XG4gICAgICAgIHRoaXMuZW5zZW1ibGVNb2RlbHMgPSBtb2RlbGlzdDtcbiAgICB9XG5cbiAgICBnZXQgRW5zZW1ibGVNb2RlbHMoKXtcbiAgICAgICAgaWYoIXRoaXMuZW5zZW1ibGVNb2RlbHMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0Vuc2VtYmxlTW9kZWxzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5zZW1ibGVNb2RlbHM7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEVuc2VtYmxlTW9kZWxNaXhpbnM7IiwiLyoqXG4gKiBUaGUgRW5zZW1ibGVUcmFpbmVyTWl4aW5zIGNsYXNzIGlzIHRoZSBtaXhpbnMgY2xhc3MgZm9yIHRyYWluaW5nIGVuc2FtYmxhYmxlIG1vZGVsc1xuICogQGNsYXNzIEVuc2VtYmxlVHJhaW5lck1peGluc1xuICogQGV4dGVuZHMge0Jhc2VQaXBlbGluZUNsYXNzfVxuICovXG5jb25zdCBFbnNlbWJsZVRyYWluZXJNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICAvKipcbiAgICAgKiBUcmFpbiBtb2RlbCBhbmQgc2F2ZSB0byBzdG9yYWdlIHVuZGVyIHRoZSBnaXZlbiBmaWxlbmFtZS4gcGFyYW1ldGVycyBpcyByZWluaXRlZCBmb3IgZWFjaCB0cmFpbmluZ1xuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IG51bUVwb2Noc1xuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IGJhdGNoU2l6ZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IHNhdmVGaWxlTmFtZVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9IFRyYWluaW5nIGxvc3Nlc1xuICAgICAqL1xuICAgIGFzeW5jIGVuc2VtYmxlVHJhaW4obnVtRXBvY2hzLCBiYXRjaFNpemUsIHNhdmVGaWxlTmFtZSl7XG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycyA9IHRoaXMuUGFyYW1ldGVySW5pdGlhbGl6ZXIodGhpcy5MYXllclJ1bm5lci5OZXRMYXllcnMpO1xuICAgICAgICBsZXQgbG9zc2VzID0gYXdhaXQgdGhpcy50cmFpbihudW1FcG9jaHMsIGJhdGNoU2l6ZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVBhcmFtcyhzYXZlRmlsZU5hbWUpO1xuICAgICAgICByZXR1cm4ge1tzYXZlRmlsZU5hbWVdOiBsb3NzZXN9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuc2VtYmxlVHJhaW5lck1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEVuc2VtYmxlVHJhaW5lck1peGlucyB9IGZyb20gJy4vZW5zZW1ibGVUcmFpbmVyLm1peGlucyc7IFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbnNlbWJsZU1vZGVsTWl4aW5zIH0gZnJvbSAnLi9lbnNlbWJsZU1vZGVsLm1peGlucyc7IFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgfSBmcm9tICcuL2Vuc2VtYmxlRGVwbG95bWVudC5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbnNlbWJsZUV2YWx1YXRvck1peGlucyB9IGZyb20gJy4vZW5zZW1ibGVFdmFsdWF0b3IubWl4aW5zJzsgIiwiaW1wb3J0IHsgRGF0YVNvdXJjZU1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQuZGF0YXNldHMnO1xuaW1wb3J0IHsgUHJlcHJvY2Vzc2luZ01peGlucywgY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSB9IGZyb20gJ2NhdXNhbC1uZXQucHJlcHJvY2Vzc2luZyc7XG5pbXBvcnQgeyBUcmFpbmVyTWl4aW5zLCBFdmFsdWF0b3JNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0Lm9wdGltaXplcnMnO1xuaW1wb3J0IHsgTW9kZWxNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0Lm1vZGVscyc7XG5pbXBvcnQgeyBjYXVzYWxOZXRSdW5uZXIsIExheWVyUnVubmVyTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5sYXllcic7XG5pbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGNhdXNhbE5ldERlcGxveW1lbnQsIERlcGxveW1lbnRNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmRlcGxveW1lbnQnO1xuaW1wb3J0IHsgdGVybUxvZ2dlciwgTG9nZ2VyTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5sb2cnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmltcG9ydCB7IEVuc2VtYmxlVHJhaW5lck1peGlucywgRW5zZW1ibGVNb2RlbE1peGlucywgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zIH0gZnJvbSAnLi9FbnNlbWJsZS9pbmRleCc7XG4vKipcbiAqIFRoZSBDYXVzYWxOZXQgY2xhc3MgaXMgdGhlIHByZWJ1aWx0IHBpcGVsaW5lIHdpdGggbWV0aG9kcyBmb3IgXG4gKiBwcm9jZXNzaW5nIGRhdGEvdHJhaW4vZXZhbHVhdGUvZGVwbG95L2Vuc2VtYmxlIGRlcGxveVxuICogeyBtaXhXaXRoOiBbIFxuICogICAgICAgICBEYXRhU291cmNlTWl4aW5zLFxuICogICAgICAgICBQcmVwcm9jZXNzaW5nTWl4aW5zLFxuICogICAgICAgICBMYXllclJ1bm5lck1peGlucywgXG4gKiAgICAgICAgIE1vZGVsTWl4aW5zLCBcbiAqICAgICAgICAgRXZhbHVhdG9yTWl4aW5zLFxuICogICAgICAgICBUcmFpbmVyTWl4aW5zLCBcbiAqICAgICAgICAgTG9nZ2VyTWl4aW5zLFxuICogICAgICAgICBEZXBsb3ltZW50TWl4aW5zLFxuICogICAgICAgICBFbnNlbWJsZVRyYWluZXJNaXhpbnMsXG4gKiAgICAgICAgIEVuc2VtYmxlTW9kZWxNaXhpbnMsIFxuICogICAgICAgICBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0XG4gKiBAZXh0ZW5kcyB7VGVuc29yfVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldC9lbnNlbWJsZS5sb2dpc3RpY1JlZ3Jlc3Npb24uYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldCBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoVGVuc29yLCBbIFxuICAgICAgICBEYXRhU291cmNlTWl4aW5zLFxuICAgICAgICBQcmVwcm9jZXNzaW5nTWl4aW5zLFxuICAgICAgICBMYXllclJ1bm5lck1peGlucywgXG4gICAgICAgIE1vZGVsTWl4aW5zLCBcbiAgICAgICAgRXZhbHVhdG9yTWl4aW5zLFxuICAgICAgICBUcmFpbmVyTWl4aW5zLCBcbiAgICAgICAgTG9nZ2VyTWl4aW5zLFxuICAgICAgICBEZXBsb3ltZW50TWl4aW5zLFxuICAgICAgICBFbnNlbWJsZVRyYWluZXJNaXhpbnMsXG4gICAgICAgIEVuc2VtYmxlTW9kZWxNaXhpbnMsIFxuICAgICAgICBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgXSl7XG4gICAgLyoqXG4gICAgICpDcmVhdGVzIGFuIGluc3RhbmNlIG9mIENhdXNhbE5ldC5cbiAgICAgKiBAcGFyYW0geyBGdW5jdG9yIH0gZnVuY3RvclxuICAgICAqIEBwYXJhbSB7IExvZyB9IGxvZ2dlclxuICAgICAqIEBwYXJhbSB7IEZ1bmN0b3IgfSBzdHJlYW1QcmVwcm9jZXNzaW5nXG4gICAgICogQHBhcmFtIHsgVGVuc29yIH0gbmV0UGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7IFRlbnNvciB9IG5ldFJ1bm5lclxuICAgICAqIEBwYXJhbSB7IEV2ZW50IH0gc3RyZWFtRGVwbG95bWVudFxuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciggZnVuY3RvciwgbG9nZ2VyLCBzdHJlYW1QcmVwcm9jZXNzaW5nLCBuZXRSdW5uZXIsIHN0cmVhbURlcGxveW1lbnQpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLkYgPSBmdW5jdG9yO1xuICAgICAgICB0aGlzLlIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgICAgIHRoaXMuTG9nZ2VyID0gbG9nZ2VyO1xuICAgICAgICB0aGlzLlByZXByb2Nlc3NpbmcgPSBzdHJlYW1QcmVwcm9jZXNzaW5nO1xuICAgICAgICB0aGlzLkxheWVyUnVubmVyID0gbmV0UnVubmVyOyAgICAgICAgXG4gICAgICAgIHRoaXMuRGVwbG95bWVudCA9IHN0cmVhbURlcGxveW1lbnQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgIENhdXNhbE5ldCggIGZ1bmN0b3IsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXJtTG9nZ2VyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdXNhbE5ldFJ1bm5lciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdXNhbE5ldERlcGxveW1lbnQgKTsiLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG4vKipcbiAqIFRoaXMgRnVuY3RvciBjbGFzcyBwcm92aWRlcyBjb21tb24gdXNlZCBkYXRhIHByb2Nlc3NpbmcgbWV0aG9kcyBmb3IgcGlwZWxpbmVcbiAqIEBjbGFzcyBGdW5jdG9yXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3RvclxuICovXG5jbGFzcyBGdW5jdG9yIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgW10gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldCB9IGZyb20gJy4vY2F1c2FsTmV0JzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfZGF0YXNldHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sYXllcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X29wdGltaXplcnNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9