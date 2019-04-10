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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi1kZXBsb3ltZW50L2Rpc3QvQGNhdXNhbE5ldC9kZXBsb3ltZW50LndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4tbW9kZWxzL2Rpc3QvQGNhdXNhbE5ldC9tb2RlbHMud2ViLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvZW5zZW1ibGVEZXBsb3ltZW50Lm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL0Vuc2VtYmxlL2Vuc2VtYmxlRXZhbHVhdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL0Vuc2VtYmxlL2Vuc2VtYmxlTW9kZWwubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvZW5zZW1ibGVUcmFpbmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL0Vuc2VtYmxlL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvY2F1c2FsTmV0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvZnVuY3Rvci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5kYXRhc2V0c1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmxheWVyXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQub3B0aW1pemVyc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkVuc2VtYmxlRGVwbG95bWVudE1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiRW5zZW1ibGVJbmZlcmVuY2VyIiwiTW9kZWxMZW5zZXMiLCJFbnNlbWJsZVByZWRpY3QiLCJFbnNlbWJsZU1vZGVsUHJlZGljdCIsIlQiLCJpbnB1dCIsImluZmVyIiwiaW5wdXRUZW5zb3IiLCJ0ZW5zb3IiLCJhc1R5cGUiLCJyZXNoYXBlIiwicHJlZGljdFRlbnNvciIsImRhdGEiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIkRlcGxveW1lbnQiLCJncm91cEVuZCIsImRlcGxveSIsIkVuc2VtYmxlRXZhbHVhdG9yTWl4aW5zIiwiZW5zZW1ibGVUZXN0IiwiYmF0Y2hTaXplIiwibWV0aG9kIiwiRXJyb3IiLCJFbnNlbWJsZU1vZGVsTWl4aW5zIiwiRml0TW9kZWwiLCJFbnNlbWJsZU1vZGVscyIsIkJhZ2dpbmciLCJwcm9iRml0cyIsIm1vZGVsIiwibG9hZFBhcmFtcyIsInByb2IiLCJleHAiLCJwdXNoIiwibWVhblByb2IiLCJzdGFjayIsIm1lYW4iLCJhcmdNYXgiLCJtb2RlbGlzdCIsImVuc2VtYmxlTW9kZWxzIiwiRW5zZW1ibGVUcmFpbmVyTWl4aW5zIiwiZW5zZW1ibGVUcmFpbiIsIm51bUVwb2NocyIsInNhdmVGaWxlTmFtZSIsIkxheWVyUnVubmVyIiwiTmV0UGFyYW1ldGVycyIsIlBhcmFtZXRlckluaXRpYWxpemVyIiwiTmV0TGF5ZXJzIiwibG9zc2VzIiwidHJhaW4iLCJzYXZlUGFyYW1zIiwiQ2F1c2FsTmV0IiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiRGF0YVNvdXJjZU1peGlucyIsIlByZXByb2Nlc3NpbmdNaXhpbnMiLCJMYXllclJ1bm5lck1peGlucyIsIk1vZGVsTWl4aW5zIiwiRXZhbHVhdG9yTWl4aW5zIiwiVHJhaW5lck1peGlucyIsIkxvZ2dlck1peGlucyIsIkRlcGxveW1lbnRNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImZ1bmN0b3IiLCJsb2dnZXIiLCJzdHJlYW1QcmVwcm9jZXNzaW5nIiwibmV0UnVubmVyIiwic3RyZWFtRGVwbG95bWVudCIsIkYiLCJSIiwiQ29yZUZ1bmN0b3IiLCJQcmVwcm9jZXNzaW5nIiwidGVybUxvZ2dlciIsImNhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0iLCJjYXVzYWxOZXRSdW5uZXIiLCJjYXVzYWxOZXREZXBsb3ltZW50IiwiRnVuY3RvciIsIkJhc2VGdW5jdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyx3Q0FBaUIsR0FBRyxtQkFBTyxDQUFDLDBDQUFrQjtBQUNqRixNQUFNLEVBS3VGO0FBQzdGLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtB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IkBjYXVzYWxOZXQvcGlwZWxpbmUud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5kYXRhc2V0c1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubGF5ZXJcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxvZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQub3B0aW1pemVyc1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5kYXRhc2V0c1wiLCBcImNhdXNhbC1uZXQubGF5ZXJcIiwgXCJjYXVzYWwtbmV0LmxvZ1wiLCBcImNhdXNhbC1uZXQub3B0aW1pemVyc1wiLCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuZGF0YXNldHNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxheWVyXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sb2dcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm9wdGltaXplcnNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5kYXRhc2V0c1wiXSwgcm9vdFtcImNhdXNhbC1uZXQubGF5ZXJcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmxvZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQub3B0aW1pemVyc1wiXSwgcm9vdFtcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2RhdGFzZXRzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sYXllcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbG9nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9vcHRpbWl6ZXJzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kZXBsb3ltZW50XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9kZXBsb3ltZW50XCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9jYXVzYWxOZXREZXBsb3ltZW50LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvY2F1c2FsTmV0RGVwbG95bWVudC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9mdW5jdG9yX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Z1bmN0b3IgKi8gXCIuL3NyYy9mdW5jdG9yLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18pO1xuXG5cblxuLyoqXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gZm9yIGV2ZW50LWJhc2VkIG1vZGVsIGRlcGxveW1lbnQgd2hpY2ggaXMgc3VwcGxpZWQgXG4gKiB0byBwaXBlbGluZSBjbGFzcyBpbnN0YW5jZSBhcyAqKkRlcGxveW1lbnQqKiBhdHRyaWJ1dGUuIFBpcGVsaW5lIGNsYXNzIG11c3QgYmUgbWl4ZWQgd2l0aCBEZXBsb3ltZW50TWl4aW5zLlxuICogQGNsYXNzIENhdXNhbE5ldERlcGxveW1lbnRcbiAqIEBleHRlbmRzIEV2ZW50XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0RGVwbG95bWVudC5iYWJlbC5qc11cbiAqL1xuXG5jbGFzcyBDYXVzYWxOZXREZXBsb3ltZW50IGV4dGVuZHMgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wicGxhdGZvcm1cIl0ubWl4V2l0aChjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkV2ZW50XCJdLCBbXSkge1xuICBjb25zdHJ1Y3RvcihmdW5jdG9yKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLkYgPSBmdW5jdG9yO1xuICAgIHRoaXMuUiA9IGZ1bmN0b3IuQ29yZUZ1bmN0b3I7XG4gIH1cblxuICBzZXQgRW1pdHRlcihlbWl0dGVyKSB7XG4gICAgdGhpcy5kZXBsb3lFbWl0dGVyID0gZW1pdHRlcjtcbiAgfVxuXG4gIGdldCBFbWl0dGVyKCkge1xuICAgIGlmICghdGhpcy5kZXBsb3lFbWl0dGVyKSB7XG4gICAgICB0aHJvdyBFcnJvcignRW1pdHRlciBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGVwbG95RW1pdHRlcjtcbiAgfVxuXG4gIHNldCBMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgIHRoaXMuZGVwbG95TGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgICB0aGlzLm9uKCdpbmZlcmVuY2VyJywgaW5mZXIgPT4ge1xuICAgICAgdGhpcy5kZXBsb3lMaXN0ZW5lcihpbmZlcik7XG4gICAgfSk7XG4gICAgdGhpcy5vbignZW5zZW1ibGVJbmZlcmVuY2VyJywgaW5mZXIgPT4ge1xuICAgICAgdGhpcy5kZXBsb3lMaXN0ZW5lcihpbmZlcik7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgTGlzdGVuZXIoKSB7XG4gICAgaWYgKCF0aGlzLmRlcGxveUxpc3RlbmVyKSB7XG4gICAgICB0aHJvdyBFcnJvcignTGlzdGVuZXIgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlcGxveUxpc3RlbmVyO1xuICB9XG5cbiAgc2V0IEluZmVyZW5jZXIoaW5mZXJlbmNlcikge1xuICAgIHRoaXMuZGVwbG95SW5mZXJlbmNlciA9IGluZmVyZW5jZXI7XG4gICAgdGhpcy5vbignZW1pdHRlcicsIGFzeW5jIGVtaXRWYWx1ZSA9PiB7XG4gICAgICBsZXQgaW5mZXJWYWx1ZSA9IGF3YWl0IHRoaXMuZGVwbG95SW5mZXJlbmNlcihlbWl0VmFsdWUpO1xuXG4gICAgICBpZiAoaW5mZXJWYWx1ZSAmJiBpbmZlclZhbHVlICE9PSB7fSkge1xuICAgICAgICB0aGlzLmVtaXQoJ2luZmVyZW5jZXInLCBpbmZlclZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBJbmZlcmVuY2VyKCkge1xuICAgIGlmICghdGhpcy5kZXBsb3lJbmZlcmVuY2VyKSB7XG4gICAgICB0aHJvdyBFcnJvcignSW5mZXJlbmNlciBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGVwbG95SW5mZXJlbmNlcjtcbiAgfVxuXG4gIHNldCBFbnNlbWJsZUluZmVyZW5jZXIoZW5zZW1ibGVJbmZlcmVuY2VyKSB7XG4gICAgdGhpcy5kZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIgPSBlbnNlbWJsZUluZmVyZW5jZXI7XG4gICAgdGhpcy5vbignZW1pdHRlcicsIGFzeW5jIGVtaXRWYWx1ZSA9PiB7XG4gICAgICBsZXQgaW5mZXJWYWx1ZSA9IGF3YWl0IHRoaXMuZGVwbG95RW5zZW1ibGVJbmZlcmVuY2VyKGVtaXRWYWx1ZSk7XG5cbiAgICAgIGlmIChpbmZlclZhbHVlICYmIGluZmVyVmFsdWUgIT09IHt9KSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZW5zZW1ibGVJbmZlcmVuY2VyJywgaW5mZXJWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgRW5zZW1ibGVJbmZlcmVuY2VyKCkge1xuICAgIGlmICghdGhpcy5kZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIpIHtcbiAgICAgIHRocm93IEVycm9yKCdFbnNlbWJsZUluZmVyZW5jZXIgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlcGxveUVuc2VtYmxlSW5mZXJlbmNlcjtcbiAgfVxuXG4gIGFzeW5jIGRlcGxveSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgbGV0IGVtaXRWYWx1ZSA9IGF3YWl0IHRoaXMuRW1pdHRlcigpO1xuXG4gICAgICB3aGlsZSAoZW1pdFZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZW1pdHRlcicsIGVtaXRWYWx1ZSk7XG4gICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgZW1pdFZhbHVlID0gYXdhaXQgdGhpcy5FbWl0dGVyKCk7XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUoY291bnRlcik7XG4gICAgfSk7XG4gIH1cblxufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKG5ldyBDYXVzYWxOZXREZXBsb3ltZW50KF9mdW5jdG9yX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2RlcGxveW1lbnQubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2RlcGxveW1lbnQubWl4aW5zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKipcbiAqIFRoaXMgbWl4aW4gY2xhc3MgcHJvdmlkZXMgYXR0cmlidXRlczogKipEZXBsb3ltZW50KiosICoqSW5mZXJlbmNlcioqLCBhbmQgaGFuZGxlIERlcGxveW1lbnQgc2V0dGluZyBvZiBwaXBlbGluZUNvbmZpZy5cbiAqIEBjbGFzcyBEZXBsb3ltZW50TWl4aW5zXG4gKiBAZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldERlcGxveW1lbnQuYmFiZWwuanNdXG4gKi9cbmNvbnN0IERlcGxveW1lbnRNaXhpbnMgPSBCYXNlUGlwZWxpbmVDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzIHtcbiAgc2V0IERlcGxveW1lbnQoZGVwbG95bWVudCkge1xuICAgIHRoaXMuZGVwbG95bWVudCA9IGRlcGxveW1lbnQ7XG4gIH1cblxuICBnZXQgRGVwbG95bWVudCgpIHtcbiAgICBpZiAoIXRoaXMuZGVwbG95bWVudCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ2RlcGxveW1lbnQgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlcGxveW1lbnQ7XG4gIH1cblxuICBnZXQgSW5mZXJlbmNlcigpIHtcbiAgICBjb25zdCBNb2RlbExlbnNlcyA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLk1vZGVsO1xuICAgIH07XG5cbiAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgIHJldHVybiBhc3luYyBpbnB1dCA9PiB7XG4gICAgICBsZXQge1xuICAgICAgICBQcmVkaWN0LFxuICAgICAgICBFbmNvZGUsXG4gICAgICAgIERlY29kZVxuICAgICAgfSA9IGlucHV0O1xuICAgICAgbGV0IGluZmVyID0ge307XG4gICAgICBjb25zdCBNb2RlbCA9IE1vZGVsTGVuc2VzKCk7XG5cbiAgICAgIGlmIChQcmVkaWN0KSB7XG4gICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKFByZWRpY3QpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgIGxldCBwcmVkaWN0VGVuc29yID0gTW9kZWwuUHJlZGljdChpbnB1dFRlbnNvcik7XG4gICAgICAgIGluZmVyLlByZWRpY3QgPSBhd2FpdCBwcmVkaWN0VGVuc29yLmRhdGEoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEVuY29kZSkge1xuICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihFbmNvZGUpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgIGxldCBlbmNvZGVUZW5zb3IgPSBNb2RlbC5FbmNvZGUoaW5wdXRUZW5zb3IpO1xuICAgICAgICBpbmZlci5FbmNvZGUgPSBhd2FpdCBlbmNvZGVUZW5zb3IuZGF0YSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoRGVjb2RlKSB7XG4gICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKERlY29kZSkuYXNUeXBlKCdmbG9hdDMyJykucmVzaGFwZShbMSwgLTFdKTtcbiAgICAgICAgbGV0IGRlY29kZVRlbnNvciA9IE1vZGVsLkVuY29kZShpbnB1dFRlbnNvcik7XG4gICAgICAgIGluZmVyLkRlY29kZSA9IGF3YWl0IGRlY29kZVRlbnNvci5kYXRhKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmZlcjtcbiAgICB9O1xuICB9XG5cbiAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpIHtcbiAgICBpZiAoc3VwZXIuc2V0QnlDb25maWcpIHtcbiAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICB9XG5cbiAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgZGVwbG95bWVudCBieSBjb25maWcnKTtcbiAgICBjb25zdCB7XG4gICAgICBFbWl0dGVyLFxuICAgICAgTGlzdGVuZXJcbiAgICB9ID0gcGlwZWxpbmVDb25maWcuRGVwbG95bWVudDtcbiAgICB0aGlzLkRlcGxveW1lbnQuRW1pdHRlciA9IEVtaXR0ZXI7XG4gICAgdGhpcy5EZXBsb3ltZW50Lkxpc3RlbmVyID0gTGlzdGVuZXI7XG4gICAgdGhpcy5EZXBsb3ltZW50LkluZmVyZW5jZXIgPSB0aGlzLkluZmVyZW5jZXI7XG4gICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICByZXR1cm4gcGlwZWxpbmVDb25maWc7XG4gIH1cblxuICBhc3luYyBkZXBsb3koKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuRGVwbG95bWVudC5kZXBsb3koKTtcbiAgfVxuXG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKERlcGxveW1lbnRNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9mdW5jdG9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZnVuY3Rvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKG5ldyBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkZ1bmN0b3JcIl0oKSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGNhdXNhbE5ldERlcGxveW1lbnQsIERlcGxveW1lbnRNaXhpbnMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NhdXNhbE5ldERlcGxveW1lbnRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2F1c2FsTmV0RGVwbG95bWVudCAqLyBcIi4vc3JjL2NhdXNhbE5ldERlcGxveW1lbnQuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJjYXVzYWxOZXREZXBsb3ltZW50XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2NhdXNhbE5ldERlcGxveW1lbnRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2RlcGxveW1lbnRfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2RlcGxveW1lbnQubWl4aW5zICovIFwiLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJEZXBsb3ltZW50TWl4aW5zXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2RlcGxveW1lbnRfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC5jb3JlXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXztcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMlJsY0d4dmVXMWxiblF2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdlpHVndiRzk1YldWdWRDOTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDSXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJSbGNHeHZlVzFsYm5RdkxpOXpjbU12WTJGMWMyRnNUbVYwUkdWd2JHOTViV1Z1ZEM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJSbGNHeHZlVzFsYm5RdkxpOXpjbU12WkdWd2JHOTViV1Z1ZEM1dGFYaHBibk11YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlrWlhCc2IzbHRaVzUwTHk0dmMzSmpMMloxYm1OMGIzSXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOWtaWEJzYjNsdFpXNTBMeTR2YzNKakwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2WkdWd2JHOTViV1Z1ZEM5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aUlpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2WkdWd2JHOTViV1Z1ZEM5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpSmRMQ0p1WVcxbGN5STZXeUpEWVhWellXeE9aWFJFWlhCc2IzbHRaVzUwSWl3aWNHeGhkR1p2Y20waUxDSnRhWGhYYVhSb0lpd2lSWFpsYm5RaUxDSmpiMjV6ZEhKMVkzUnZjaUlzSW1aMWJtTjBiM0lpTENKR0lpd2lVaUlzSWtOdmNtVkdkVzVqZEc5eUlpd2lSVzFwZEhSbGNpSXNJbVZ0YVhSMFpYSWlMQ0prWlhCc2IzbEZiV2wwZEdWeUlpd2lSWEp5YjNJaUxDSk1hWE4wWlc1bGNpSXNJbXhwYzNSbGJtVnlJaXdpWkdWd2JHOTVUR2x6ZEdWdVpYSWlMQ0p2YmlJc0ltbHVabVZ5SWl3aVNXNW1aWEpsYm1ObGNpSXNJbWx1Wm1WeVpXNWpaWElpTENKa1pYQnNiM2xKYm1abGNtVnVZMlZ5SWl3aVpXMXBkRlpoYkhWbElpd2lhVzVtWlhKV1lXeDFaU0lzSW1WdGFYUWlMQ0pGYm5ObGJXSnNaVWx1Wm1WeVpXNWpaWElpTENKbGJuTmxiV0pzWlVsdVptVnlaVzVqWlhJaUxDSmtaWEJzYjNsRmJuTmxiV0pzWlVsdVptVnlaVzVqWlhJaUxDSmtaWEJzYjNraUxDSlFjbTl0YVhObElpd2ljbVZ6YjJ4MlpTSXNJbkpsYW1WamRDSXNJbU52ZFc1MFpYSWlMQ0pFWlhCc2IzbHRaVzUwVFdsNGFXNXpJaXdpUW1GelpWQnBjR1ZzYVc1bFEyeGhjM01pTENKRVpYQnNiM2x0Wlc1MElpd2laR1Z3Ykc5NWJXVnVkQ0lzSWsxdlpHVnNUR1Z1YzJWeklpd2lUVzlrWld3aUxDSlVJaXdpYVc1d2RYUWlMQ0pRY21Wa2FXTjBJaXdpUlc1amIyUmxJaXdpUkdWamIyUmxJaXdpYVc1d2RYUlVaVzV6YjNJaUxDSjBaVzV6YjNJaUxDSmhjMVI1Y0dVaUxDSnlaWE5vWVhCbElpd2ljSEpsWkdsamRGUmxibk52Y2lJc0ltUmhkR0VpTENKbGJtTnZaR1ZVWlc1emIzSWlMQ0prWldOdlpHVlVaVzV6YjNJaUxDSnpaWFJDZVVOdmJtWnBaeUlzSW5CcGNHVnNhVzVsUTI5dVptbG5JaXdpVEc5bloyVnlJaXdpWjNKdmRYQkNaV2RwYmlJc0ltZHliM1Z3Ulc1a0lpd2lSblZ1WTNSdmNpSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RVFVRXdReXhuUTBGQlowTTdRVUZETVVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJkMFFzYTBKQlFXdENPMEZCUXpGRk8wRkJRMEVzZVVSQlFXbEVMR05CUVdNN1FVRkRMMFE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGNVF5eHBRMEZCYVVNN1FVRkRNVVVzZDBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzBGQlEzSkpPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTnNSa0U3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenRCUVZGQkxFMUJRVTFCTEcxQ1FVRk9MRk5CUVd0RFF5eDVSRUZCVVN4RFFVRkRReXhQUVVGVUxFTkJRV3RDUXl4eFJFRkJiRUlzUlVGQmVVSXNSVUZCZWtJc1EwRkJiRU1zUTBGQkswUTdRVUZGTTBSRExHRkJRVmNzUTBGQlEwTXNUMEZCUkN4RlFVRlRPMEZCUTJoQ08wRkJRMEVzVTBGQlMwTXNRMEZCVEN4SFFVRlRSQ3hQUVVGVU8wRkJRMEVzVTBGQlMwVXNRMEZCVEN4SFFVRlRSaXhQUVVGUExFTkJRVU5ITEZkQlFXcENPMEZCUTBnN08wRkJSVVFzVFVGQlNVTXNUMEZCU2l4RFFVRlpReXhQUVVGYUxFVkJRVzlDTzBGQlEyaENMRk5CUVV0RExHRkJRVXdzUjBGQmNVSkVMRTlCUVhKQ08wRkJRMGc3TzBGQlJVUXNUVUZCU1VRc1QwRkJTaXhIUVVGaE8wRkJRMVFzVVVGQlJ5eERRVUZETEV0QlFVdEZMR0ZCUVZRc1JVRkJkVUk3UVVGRGJrSXNXVUZCVFVNc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSQ3hYUVVGUExFdEJRVXRFTEdGQlFWbzdRVUZEU0RzN1FVRkZSQ3hOUVVGSlJTeFJRVUZLTEVOQlFXRkRMRkZCUVdJc1JVRkJjMEk3UVVGRGJFSXNVMEZCUzBNc1kwRkJUQ3hIUVVGelFrUXNVVUZCZEVJN1FVRkRRU3hUUVVGTFJTeEZRVUZNTEVOQlFWRXNXVUZCVWl4RlFVRjFRa01zUzBGQlJDeEpRVUZUTzBGQlF6TkNMRmRCUVV0R0xHTkJRVXdzUTBGQmIwSkZMRXRCUVhCQ08wRkJRMGdzUzBGR1JEdEJRVWRCTEZOQlFVdEVMRVZCUVV3c1EwRkJVU3h2UWtGQlVpeEZRVUVyUWtNc1MwRkJSQ3hKUVVGVE8wRkJRMjVETEZkQlFVdEdMR05CUVV3c1EwRkJiMEpGTEV0QlFYQkNPMEZCUTBnc1MwRkdSRHRCUVVkSU96dEJRVVZFTEUxQlFVbEtMRkZCUVVvc1IwRkJZenRCUVVOV0xGRkJRVWNzUTBGQlF5eExRVUZMUlN4alFVRlVMRVZCUVhkQ08wRkJRM0JDTEZsQlFVMUlMRXRCUVVzc1EwRkJReXh4UWtGQlJDeERRVUZZTzBGQlEwZzdPMEZCUTBRc1YwRkJUeXhMUVVGTFJ5eGpRVUZhTzBGQlEwZzdPMEZCUlVRc1RVRkJTVWNzVlVGQlNpeERRVUZsUXl4VlFVRm1MRVZCUVRCQ08wRkJRM1JDTEZOQlFVdERMR2RDUVVGTUxFZEJRWGRDUkN4VlFVRjRRanRCUVVOQkxGTkJRVXRJTEVWQlFVd3NRMEZCVVN4VFFVRlNMRVZCUVcxQ0xFMUJRVTlMTEZOQlFWQXNTVUZCYlVJN1FVRkRiRU1zVlVGQlNVTXNWVUZCVlN4SFFVRkhMRTFCUVUwc1MwRkJTMFlzWjBKQlFVd3NRMEZCYzBKRExGTkJRWFJDTEVOQlFYWkNPenRCUVVOQkxGVkJRVWRETEZWQlFWVXNTVUZCU1VFc1ZVRkJWU3hMUVVGTExFVkJRV2hETEVWQlFXMURPMEZCUXk5Q0xHRkJRVXRETEVsQlFVd3NRMEZCVlN4WlFVRldMRVZCUVhkQ1JDeFZRVUY0UWp0QlFVTklPMEZCUTBvc1MwRk1SRHRCUVUxSU96dEJRVVZFTEUxQlFVbEtMRlZCUVVvc1IwRkJaMEk3UVVGRFdpeFJRVUZITEVOQlFVTXNTMEZCUzBVc1owSkJRVlFzUlVGQk1FSTdRVUZEZEVJc1dVRkJUVklzUzBGQlN5eERRVUZETEhWQ1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdFJMR2RDUVVGYU8wRkJRMGc3TzBGQlJVUXNUVUZCU1Vrc2EwSkJRVW9zUTBGQmRVSkRMR3RDUVVGMlFpeEZRVUV3UXp0QlFVVjBReXhUUVVGTFF5eDNRa0ZCVEN4SFFVRm5RMFFzYTBKQlFXaERPMEZCUTBFc1UwRkJTMVFzUlVGQlRDeERRVUZSTEZOQlFWSXNSVUZCYlVJc1RVRkJUMHNzVTBGQlVDeEpRVUZ0UWp0QlFVTnNReXhWUVVGSlF5eFZRVUZWTEVkQlFVY3NUVUZCVFN4TFFVRkxTU3gzUWtGQlRDeERRVUU0UWt3c1UwRkJPVUlzUTBGQmRrSTdPMEZCUTBFc1ZVRkJSME1zVlVGQlZTeEpRVUZKUVN4VlFVRlZMRXRCUVVzc1JVRkJhRU1zUlVGQmJVTTdRVUZETDBJc1lVRkJTME1zU1VGQlRDeERRVUZWTEc5Q1FVRldMRVZCUVdkRFJDeFZRVUZvUXp0QlFVTklPMEZCUTBvc1MwRk1SRHRCUVUxSU96dEJRVVZFTEUxQlFVbEZMR3RDUVVGS0xFZEJRWGRDTzBGQlEzQkNMRkZCUVVjc1EwRkJReXhMUVVGTFJTeDNRa0ZCVkN4RlFVRnJRenRCUVVNNVFpeFpRVUZOWkN4TFFVRkxMRU5CUVVNc0swSkJRVVFzUTBGQldEdEJRVU5JT3p0QlFVTkVMRmRCUVU4c1MwRkJTMk1zZDBKQlFWbzdRVUZEU0RzN1FVRkZSQ3hSUVVGTlF5eE5RVUZPTEVkQlFXTTdRVUZEVml4WFFVRlBMRWxCUVVsRExFOUJRVW9zUTBGQldTeFBRVUZQUXl4UFFVRlFMRVZCUVdkQ1F5eE5RVUZvUWl4TFFVRjVRanRCUVVONFF5eFZRVUZKUXl4UFFVRlBMRWRCUVVjc1EwRkJaRHRCUVVOQkxGVkJRVWxXTEZOQlFWTXNSMEZCUnl4TlFVRk5MRXRCUVV0YUxFOUJRVXdzUlVGQmRFSTdPMEZCUTBFc1lVRkJUVmtzVTBGQlV5eExRVUZMTEVsQlFYQkNMRVZCUVhsQ08wRkJRM0pDTEdGQlFVdEZMRWxCUVV3c1EwRkJWU3hUUVVGV0xFVkJRWEZDUml4VFFVRnlRanRCUVVOQlZTeGxRVUZQTEVsQlFVa3NRMEZCV0R0QlFVTkJWaXhwUWtGQlV5eEhRVUZITEUxQlFVMHNTMEZCUzFvc1QwRkJUQ3hGUVVGc1FqdEJRVU5JT3p0QlFVTkViMElzWVVGQlR5eERRVUZEUlN4UFFVRkVMRU5CUVZBN1FVRkRTQ3hMUVZSTkxFTkJRVkE3UVVGVlNEczdRVUZzUmpCRU96dEJRWEZHYUVRc2JVVkJRVWt2UWl4dFFrRkJTaXhEUVVGM1Frc3NaMFJCUVhoQ0xFTkJRV1lzUlRzN096czdPenM3T3pzN08wRkRhRWRCTzBGQlFVRTdPenM3T3pzN1FVRlBRU3hOUVVGTk1rSXNaMEpCUVdkQ0xFZEJRVWxETEdsQ1FVRkVMRWxCUVhOQ0xHTkJRV05CTEdsQ1FVRmtMRU5CUVdkRE8wRkJSVE5GTEUxQlFVbERMRlZCUVVvc1EwRkJaVU1zVlVGQlppeEZRVUV3UWp0QlFVTjBRaXhUUVVGTFFTeFZRVUZNTEVkQlFXdENRU3hWUVVGc1FqdEJRVU5JT3p0QlFVVkVMRTFCUVVsRUxGVkJRVW9zUjBGQlowSTdRVUZEV2l4UlFVRkhMRU5CUVVNc1MwRkJTME1zVlVGQlZDeEZRVUZ2UWp0QlFVTm9RaXhaUVVGTmRrSXNTMEZCU3l4RFFVRkRMSFZDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0MVFpeFZRVUZhTzBGQlEwZzdPMEZCUlVRc1RVRkJTV3BDTEZWQlFVb3NSMEZCWjBJN1FVRkRXaXhWUVVGTmEwSXNWMEZCVnl4SFFVRkhMRTFCUVVrN1FVRkRjRUlzWVVGQlR5eExRVUZMUXl4TFFVRmFPMEZCUTBnc1MwRkdSRHM3UVVGSFFTeFZRVUZOUXl4RFFVRkRMRWRCUVVjc1MwRkJTMEVzUTBGQlpqdEJRVU5CTEZkQlFVOHNUVUZCVDBNc1MwRkJVQ3hKUVVGbE8wRkJRMnhDTEZWQlFVazdRVUZCUlVNc1pVRkJSanRCUVVGWFF5eGpRVUZZTzBGQlFXMUNRenRCUVVGdVFpeFZRVUU0UWtnc1MwRkJiRU03UVVGRFFTeFZRVUZKZEVJc1MwRkJTeXhIUVVGSExFVkJRVm83UVVGRFFTeFpRVUZOYjBJc1MwRkJTeXhIUVVGSFJDeFhRVUZYTEVWQlFYcENPenRCUVVOQkxGVkJRVWRKTEU5QlFVZ3NSVUZCVnp0QlFVTlFMRmxCUVVsSExGZEJRVmNzUjBGQlIwd3NRMEZCUXl4RFFVRkRUU3hOUVVGR0xFTkJRVk5LTEU5QlFWUXNSVUZCYTBKTExFMUJRV3hDTEVOQlFYbENMRk5CUVhwQ0xFVkJRVzlEUXl4UFFVRndReXhEUVVFMFF5eERRVUZETEVOQlFVUXNSVUZCU1N4RFFVRkRMRU5CUVV3c1EwRkJOVU1zUTBGQmJFSTdRVUZEUVN4WlFVRkpReXhoUVVGaExFZEJRVWRXTEV0QlFVc3NRMEZCUTBjc1QwRkJUaXhEUVVGalJ5eFhRVUZrTEVOQlFYQkNPMEZCUTBFeFFpeGhRVUZMTEVOQlFVTjFRaXhQUVVGT0xFZEJRV2RDTEUxQlFVMVBMR0ZCUVdFc1EwRkJRME1zU1VGQlpDeEZRVUYwUWp0QlFVTklPenRCUVVORUxGVkJRVWRRTEUxQlFVZ3NSVUZCVlR0QlFVTk9MRmxCUVVsRkxGZEJRVmNzUjBGQlIwd3NRMEZCUXl4RFFVRkRUU3hOUVVGR0xFTkJRVk5JTEUxQlFWUXNSVUZCYVVKSkxFMUJRV3BDTEVOQlFYZENMRk5CUVhoQ0xFVkJRVzFEUXl4UFFVRnVReXhEUVVFeVF5eERRVUZETEVOQlFVUXNSVUZCU1N4RFFVRkRMRU5CUVV3c1EwRkJNME1zUTBGQmJFSTdRVUZEUVN4WlFVRkpSeXhaUVVGWkxFZEJRVWRhTEV0QlFVc3NRMEZCUTBrc1RVRkJUaXhEUVVGaFJTeFhRVUZpTEVOQlFXNUNPMEZCUTBFeFFpeGhRVUZMTEVOQlFVTjNRaXhOUVVGT0xFZEJRV1VzVFVGQlRWRXNXVUZCV1N4RFFVRkRSQ3hKUVVGaUxFVkJRWEpDTzBGQlEwZzdPMEZCUTBRc1ZVRkJSMDRzVFVGQlNDeEZRVUZWTzBGQlEwNHNXVUZCU1VNc1YwRkJWeXhIUVVGSFRDeERRVUZETEVOQlFVTk5MRTFCUVVZc1EwRkJVMFlzVFVGQlZDeEZRVUZwUWtjc1RVRkJha0lzUTBGQmQwSXNVMEZCZUVJc1JVRkJiVU5ETEU5QlFXNURMRU5CUVRKRExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVTXNRMEZCVEN4RFFVRXpReXhEUVVGc1FqdEJRVU5CTEZsQlFVbEpMRmxCUVZrc1IwRkJSMklzUzBGQlN5eERRVUZEU1N4TlFVRk9MRU5CUVdGRkxGZEJRV0lzUTBGQmJrSTdRVUZEUVRGQ0xHRkJRVXNzUTBGQlEzbENMRTFCUVU0c1IwRkJaU3hOUVVGTlVTeFpRVUZaTEVOQlFVTkdMRWxCUVdJc1JVRkJja0k3UVVGRFNEczdRVUZEUkN4aFFVRlBMMElzUzBGQlVEdEJRVU5JTEV0QmNFSkVPMEZCY1VKSU96dEJRVVZFYTBNc1lVRkJWeXhEUVVGRFF5eGpRVUZFTEVWQlFXZENPMEZCUTNaQ0xGRkJRVWNzVFVGQlRVUXNWMEZCVkN4RlFVRnhRanRCUVVOcVFpeFpRVUZOUVN4WFFVRk9MRU5CUVd0Q1F5eGpRVUZzUWp0QlFVTklPenRCUVVORUxGTkJRVXRETEUxQlFVd3NRMEZCV1VNc1ZVRkJXaXhEUVVGMVFpd3dRa0ZCZGtJN1FVRkRRU3hWUVVGTk8wRkJRVVUzUXl4aFFVRkdPMEZCUVZkSk8wRkJRVmdzVVVGQmQwSjFReXhqUVVGakxFTkJRVU5zUWl4VlFVRTNRenRCUVVOQkxGTkJRVXRCTEZWQlFVd3NRMEZCWjBKNlFpeFBRVUZvUWl4SFFVRXdRa0VzVDBGQk1VSTdRVUZEUVN4VFFVRkxlVUlzVlVGQlRDeERRVUZuUW5KQ0xGRkJRV2hDTEVkQlFUSkNRU3hSUVVFelFqdEJRVU5CTEZOQlFVdHhRaXhWUVVGTUxFTkJRV2RDYUVJc1ZVRkJhRUlzUjBGQk5rSXNTMEZCUzBFc1ZVRkJiRU03UVVGRFFTeFRRVUZMYlVNc1RVRkJUQ3hEUVVGWlJTeFJRVUZhTzBGQlEwRXNWMEZCVDBnc1kwRkJVRHRCUVVOSU96dEJRVVZFTEZGQlFVMTZRaXhOUVVGT0xFZEJRV003UVVGRFZpeFhRVUZQTEUxQlFVMHNTMEZCUzA4c1ZVRkJUQ3hEUVVGblFsQXNUVUZCYUVJc1JVRkJZanRCUVVOSU96dEJRWGhFTUVVc1EwRkJMMFU3TzBGQk1rUmxTeXdyUlVGQlppeEZPenM3T3pzN096czdPenM3UVVOc1JVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRaU3h0UlVGQlNYZENMSFZFUVVGS0xFVkJRV1lzUlRzN096czdPenM3T3pzN08wRkRSRUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3T3pzN096czdPenM3TzBGRFFVRXNOa1E3T3pzN096czdPenM3TzBGRFFVRXNPRVFpTENKbWFXeGxJam9pUUdOaGRYTmhiRTVsZEM5a1pYQnNiM2x0Wlc1MExuZGxZaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29jbVZ4ZFdseVpTaGNJbU5oZFhOaGJDMXVaWFF1WTI5eVpWd2lLU3dnY21WeGRXbHlaU2hjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWlrcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvVzF3aVkyRjFjMkZzTFc1bGRDNWpiM0psWENJc0lGd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEdWNGNHOXlkSE5iWENKQVkyRjFjMkZzVG1WMEwyUmxjR3h2ZVcxbGJuUmNJbDBnUFNCbVlXTjBiM0o1S0hKbGNYVnBjbVVvWENKallYVnpZV3d0Ym1WMExtTnZjbVZjSWlrc0lISmxjWFZwY21Vb1hDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSXBLVHRjYmx4MFpXeHpaVnh1WEhSY2RISnZiM1JiWENKQVkyRjFjMkZzVG1WMEwyUmxjR3h2ZVcxbGJuUmNJbDBnUFNCbVlXTjBiM0o1S0hKdmIzUmJYQ0pqWVhWellXd3RibVYwTG1OdmNtVmNJbDBzSUhKdmIzUmJYQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0pkS1R0Y2JuMHBLSFJvYVhNc0lHWjFibU4wYVc5dUtGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyRjFjMkZzWDI1bGRGOWpiM0psWDE4c0lGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyRjFjMkZzWDI1bGRGOTFkR2xzYzE5ZktTQjdYRzV5WlhSMWNtNGdJaXdpSUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwZG1GeUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlGeDBMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JpQmNkR1oxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseHVJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaUJjZEZ4MGFXWW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHBJSHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNiaUJjZEZ4MGZWeHVJRngwWEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1SUZ4MFhIUjJZWElnYlc5a2RXeGxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBnUFNCN1hHNGdYSFJjZEZ4MGFUb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzFjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUdkbGRIUmxjaUJtZFc1amRHbHZiaUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6TENCdVlXMWxMQ0JuWlhSMFpYSXBJSHRjYmlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0J1WVcxbExDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJR2RsZERvZ1oyVjBkR1Z5SUgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWDE5bGMwMXZaSFZzWlNCdmJpQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5JZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SektTQjdYRzRnWEhSY2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjc0lIc2dkbUZzZFdVNklDZE5iMlIxYkdVbklIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCamNtVmhkR1VnWVNCbVlXdGxJRzVoYldWemNHRmpaU0J2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBeE9pQjJZV3gxWlNCcGN5QmhJRzF2WkhWc1pTQnBaQ3dnY21WeGRXbHlaU0JwZEZ4dUlGeDBMeThnYlc5a1pTQW1JREk2SUcxbGNtZGxJR0ZzYkNCd2NtOXdaWEowYVdWeklHOW1JSFpoYkhWbElHbHVkRzhnZEdobElHNXpYRzRnWEhRdkx5QnRiMlJsSUNZZ05Eb2djbVYwZFhKdUlIWmhiSFZsSUhkb1pXNGdZV3h5WldGa2VTQnVjeUJ2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBNGZERTZJR0psYUdGMlpTQnNhV3RsSUhKbGNYVnBjbVZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVkQ0E5SUdaMWJtTjBhVzl1S0haaGJIVmxMQ0J0YjJSbEtTQjdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXhLU0IyWVd4MVpTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvZG1Gc2RXVXBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdPQ2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhScFppZ29iVzlrWlNBbUlEUXBJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RtRnNkV1VnSmlZZ2RtRnNkV1V1WDE5bGMwMXZaSFZzWlNrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUjJZWElnYm5NZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklvYm5NcE8xeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ibk1zSUNka1pXWmhkV3gwSnl3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQjJZV3gxWlRvZ2RtRnNkV1VnZlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeUlDWW1JSFI1Y0dWdlppQjJZV3gxWlNBaFBTQW5jM1J5YVc1bkp5a2dabTl5S0haaGNpQnJaWGtnYVc0Z2RtRnNkV1VwSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaHVjeXdnYTJWNUxDQm1kVzVqZEdsdmJpaHJaWGtwSUhzZ2NtVjBkWEp1SUhaaGJIVmxXMnRsZVYwN0lIMHVZbWx1WkNodWRXeHNMQ0JyWlhrcEtUdGNiaUJjZEZ4MGNtVjBkWEp1SUc1ek8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1WEc0Z1hIUXZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYmlCY2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjeUE5SUZ3aUxpOXpjbU12YVc1a1pYZ3Vhbk5jSWlrN1hHNGlMQ0pwYlhCdmNuUWdleUJGZG1WdWRDQjlJR1p5YjIwZ0oyTmhkWE5oYkMxdVpYUXVZMjl5WlNjN1hHNXBiWEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJR1oxYm1OMGIzSWdmU0JtY205dElDY3VMMloxYm1OMGIzSW5PMXh1YVcxd2IzSjBJSHNnY0d4aGRHWnZjbTBnZlNCbWNtOXRJQ2RqWVhWellXd3RibVYwTG5WMGFXeHpKenRjYmk4cUtseHVJQ29nVkdobElHbHRjR3hsYldWdWRHRjBhVzl1SUdadmNpQmxkbVZ1ZEMxaVlYTmxaQ0J0YjJSbGJDQmtaWEJzYjNsdFpXNTBJSGRvYVdOb0lHbHpJSE4xY0hCc2FXVmtJRnh1SUNvZ2RHOGdjR2x3Wld4cGJtVWdZMnhoYzNNZ2FXNXpkR0Z1WTJVZ1lYTWdLaXBFWlhCc2IzbHRaVzUwS2lvZ1lYUjBjbWxpZFhSbExpQlFhWEJsYkdsdVpTQmpiR0Z6Y3lCdGRYTjBJR0psSUcxcGVHVmtJSGRwZEdnZ1JHVndiRzk1YldWdWRFMXBlR2x1Y3k1Y2JpQXFJRUJqYkdGemN5QkRZWFZ6WVd4T1pYUkVaWEJzYjNsdFpXNTBYRzRnS2lCQVpYaDBaVzVrY3lCRmRtVnVkRnh1SUNvZ1FHVjRZVzF3YkdWY2JpQXFJRnRGV0VGTlVFeEZJQzR1TDJWNFlXMXdiR1Z6TDJOaGRYTmhiRTVsZEVSbGNHeHZlVzFsYm5RdVltRmlaV3d1YW5OZFhHNGdLaTljYm1Oc1lYTnpJRU5oZFhOaGJFNWxkRVJsY0d4dmVXMWxiblFnWlhoMFpXNWtjeUJ3YkdGMFptOXliUzV0YVhoWGFYUm9LQ0JGZG1WdWRDd2dXMTBnS1h0Y2JpQWdJQ0JjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWhtZFc1amRHOXlLWHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NUdJRDBnWm5WdVkzUnZjanRjYmlBZ0lDQWdJQ0FnZEdocGN5NVNJRDBnWm5WdVkzUnZjaTVEYjNKbFJuVnVZM1J2Y2p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhRZ1JXMXBkSFJsY2lobGJXbDBkR1Z5S1h0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVrWlhCc2IzbEZiV2wwZEdWeUlEMGdaVzFwZEhSbGNqdGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUWdSVzFwZEhSbGNpZ3BlMXh1SUNBZ0lDQWdJQ0JwWmlnaGRHaHBjeTVrWlhCc2IzbEZiV2wwZEdWeUtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtDZEZiV2wwZEdWeUlHbHpJRzV2ZENCelpYUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWtaWEJzYjNsRmJXbDBkR1Z5TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE5sZENCTWFYTjBaVzVsY2loc2FYTjBaVzVsY2lsN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WkdWd2JHOTVUR2x6ZEdWdVpYSWdQU0JzYVhOMFpXNWxjanRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZiaWduYVc1bVpYSmxibU5sY2ljc0lDaHBibVpsY2lrOVBudGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaR1Z3Ykc5NVRHbHpkR1Z1WlhJb2FXNW1aWElwTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJpZ25aVzV6WlcxaWJHVkpibVpsY21WdVkyVnlKeXdnS0dsdVptVnlLVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1a1pYQnNiM2xNYVhOMFpXNWxjaWhwYm1abGNpazdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmlBZ0lDQmNiaUFnSUNCblpYUWdUR2x6ZEdWdVpYSW9LWHRjYmlBZ0lDQWdJQ0FnYVdZb0lYUm9hWE11WkdWd2JHOTVUR2x6ZEdWdVpYSXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMHhwYzNSbGJtVnlJR2x6SUc1dmRDQnpaWFFuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVrWlhCc2IzbE1hWE4wWlc1bGNqdGNiaUFnSUNCOVhHNWNiaUFnSUNCelpYUWdTVzVtWlhKbGJtTmxjaWhwYm1abGNtVnVZMlZ5S1h0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVrWlhCc2IzbEpibVpsY21WdVkyVnlJRDBnYVc1bVpYSmxibU5sY2p0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2YmlnblpXMXBkSFJsY2ljc0lHRnplVzVqSUNobGJXbDBWbUZzZFdVcFBUNTdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdhVzVtWlhKV1lXeDFaU0E5SUdGM1lXbDBJSFJvYVhNdVpHVndiRzk1U1c1bVpYSmxibU5sY2lobGJXbDBWbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2FXNW1aWEpXWVd4MVpTQW1KaUJwYm1abGNsWmhiSFZsSUNFOVBTQjdmU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxiV2wwS0NkcGJtWmxjbVZ1WTJWeUp5d2dhVzVtWlhKV1lXeDFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZENCSmJtWmxjbVZ1WTJWeUtDbDdYRzRnSUNBZ0lDQWdJR2xtS0NGMGFHbHpMbVJsY0d4dmVVbHVabVZ5Wlc1alpYSXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMGx1Wm1WeVpXNWpaWElnYVhNZ2JtOTBJSE5sZENjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1SbGNHeHZlVWx1Wm1WeVpXNWpaWEk3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwSUVWdWMyVnRZbXhsU1c1bVpYSmxibU5sY2lobGJuTmxiV0pzWlVsdVptVnlaVzVqWlhJcGUxeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdkR2hwY3k1a1pYQnNiM2xGYm5ObGJXSnNaVWx1Wm1WeVpXNWpaWElnUFNCbGJuTmxiV0pzWlVsdVptVnlaVzVqWlhJN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjI0b0oyVnRhWFIwWlhJbkxDQmhjM2x1WXlBb1pXMXBkRlpoYkhWbEtUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR2x1Wm1WeVZtRnNkV1VnUFNCaGQyRnBkQ0IwYUdsekxtUmxjR3h2ZVVWdWMyVnRZbXhsU1c1bVpYSmxibU5sY2lobGJXbDBWbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2FXNW1aWEpXWVd4MVpTQW1KaUJwYm1abGNsWmhiSFZsSUNFOVBTQjdmU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxiV2wwS0NkbGJuTmxiV0pzWlVsdVptVnlaVzVqWlhJbkxDQnBibVpsY2xaaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwSUVWdWMyVnRZbXhsU1c1bVpYSmxibU5sY2lncGUxeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NWtaWEJzYjNsRmJuTmxiV0pzWlVsdVptVnlaVzVqWlhJcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0owVnVjMlZ0WW14bFNXNW1aWEpsYm1ObGNpQnBjeUJ1YjNRZ2MyVjBKeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaR1Z3Ykc5NVJXNXpaVzFpYkdWSmJtWmxjbVZ1WTJWeU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdGemVXNWpJR1JsY0d4dmVTZ3BlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvWVhONWJtTWdLSEpsYzI5c2RtVXNJSEpsYW1WamRDazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JqYjNWdWRHVnlJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCbGJXbDBWbUZzZFdVZ1BTQmhkMkZwZENCMGFHbHpMa1Z0YVhSMFpYSW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIZG9hV3hsS0dWdGFYUldZV3gxWlNBaFBUMGdiblZzYkNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVsYldsMEtDZGxiV2wwZEdWeUp5d2daVzFwZEZaaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjNWdWRHVnlJQ3M5SURFN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXMXBkRlpoYkhWbElEMGdZWGRoYVhRZ2RHaHBjeTVGYldsMGRHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0dOdmRXNTBaWElwTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRzVsZHlCRFlYVnpZV3hPWlhSRVpYQnNiM2x0Wlc1MEtHWjFibU4wYjNJcE95SXNJaThxS2x4dUlDb2dWR2hwY3lCdGFYaHBiaUJqYkdGemN5QndjbTkyYVdSbGN5QmhkSFJ5YVdKMWRHVnpPaUFxS2tSbGNHeHZlVzFsYm5RcUtpd2dLaXBKYm1abGNtVnVZMlZ5S2lvc0lHRnVaQ0JvWVc1a2JHVWdSR1Z3Ykc5NWJXVnVkQ0J6WlhSMGFXNW5JRzltSUhCcGNHVnNhVzVsUTI5dVptbG5MbHh1SUNvZ1FHTnNZWE56SUVSbGNHeHZlVzFsYm5STmFYaHBibk5jYmlBcUlFQmxlSFJsYm1SeklFSmhjMlZRYVhCbGJHbHVaVU5zWVhOelhHNGdLaUJBWlhoaGJYQnNaVnh1SUNvZ1cwVllRVTFRVEVVZ0xpNHZaWGhoYlhCc1pYTXZZMkYxYzJGc1RtVjBSR1Z3Ykc5NWJXVnVkQzVpWVdKbGJDNXFjMTFjYmlBcUwxeHVZMjl1YzNRZ1JHVndiRzk1YldWdWRFMXBlR2x1Y3lBOUlDaENZWE5sVUdsd1pXeHBibVZEYkdGemN5azlQaUJqYkdGemN5QmxlSFJsYm1SeklFSmhjMlZRYVhCbGJHbHVaVU5zWVhOeklIdGNiaUFnSUZ4dUlDQWdJSE5sZENCRVpYQnNiM2x0Wlc1MEtHUmxjR3h2ZVcxbGJuUXBlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtUmxjR3h2ZVcxbGJuUWdQU0JrWlhCc2IzbHRaVzUwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZENCRVpYQnNiM2x0Wlc1MEtDbDdYRzRnSUNBZ0lDQWdJR2xtS0NGMGFHbHpMbVJsY0d4dmVXMWxiblFwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjJSbGNHeHZlVzFsYm5RZ2FYTWdibTkwSUhObGRDY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtUmxjR3h2ZVcxbGJuUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBJRWx1Wm1WeVpXNWpaWElvS1h0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnVFc5a1pXeE1aVzV6WlhNZ1BTQW9LVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11VFc5a1pXdzdYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRlFnUFNCMGFHbHpMbFE3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoYzNsdVl5QW9hVzV3ZFhRcFBUNTdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdleUJRY21Wa2FXTjBMQ0JGYm1OdlpHVXNJRVJsWTI5a1pTQjlJRDBnYVc1d2RYUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdhVzVtWlhJZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUUxdlpHVnNJRDBnVFc5a1pXeE1aVzV6WlhNb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtGQnlaV1JwWTNRcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JwYm5CMWRGUmxibk52Y2lBOUlGUXVkR1Z1YzI5eUtGQnlaV1JwWTNRcExtRnpWSGx3WlNnblpteHZZWFF6TWljcExuSmxjMmhoY0dVb1d6RXNJQzB4WFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSEJ5WldScFkzUlVaVzV6YjNJZ1BTQk5iMlJsYkM1UWNtVmthV04wS0dsdWNIVjBWR1Z1YzI5eUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBibVpsY2k1UWNtVmthV04wSUQwZ1lYZGhhWFFnY0hKbFpHbGpkRlJsYm5OdmNpNWtZWFJoS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWhGYm1OdlpHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCcGJuQjFkRlJsYm5OdmNpQTlJRlF1ZEdWdWMyOXlLRVZ1WTI5a1pTa3VZWE5VZVhCbEtDZG1iRzloZERNeUp5a3VjbVZ6YUdGd1pTaGJNU3dnTFRGZEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnWlc1amIyUmxWR1Z1YzI5eUlEMGdUVzlrWld3dVJXNWpiMlJsS0dsdWNIVjBWR1Z1YzI5eUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBibVpsY2k1RmJtTnZaR1VnUFNCaGQyRnBkQ0JsYm1OdlpHVlVaVzV6YjNJdVpHRjBZU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9SR1ZqYjJSbEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYVc1d2RYUlVaVzV6YjNJZ1BTQlVMblJsYm5OdmNpaEVaV052WkdVcExtRnpWSGx3WlNnblpteHZZWFF6TWljcExuSmxjMmhoY0dVb1d6RXNJQzB4WFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR1JsWTI5a1pWUmxibk52Y2lBOUlFMXZaR1ZzTGtWdVkyOWtaU2hwYm5CMWRGUmxibk52Y2lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXNW1aWEl1UkdWamIyUmxJRDBnWVhkaGFYUWdaR1ZqYjJSbFZHVnVjMjl5TG1SaGRHRW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJwYm1abGNqdGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaWFJDZVVOdmJtWnBaeWh3YVhCbGJHbHVaVU52Ym1acFp5bDdYRzRnSUNBZ0lDQWdJR2xtS0hOMWNHVnlMbk5sZEVKNVEyOXVabWxuS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4xY0dWeUxuTmxkRUo1UTI5dVptbG5LSEJwY0dWc2FXNWxRMjl1Wm1sbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdsekxreHZaMmRsY2k1bmNtOTFjRUpsWjJsdUtDZHpaWFFnWkdWd2JHOTViV1Z1ZENCaWVTQmpiMjVtYVdjbktUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2V5QkZiV2wwZEdWeUxDQk1hWE4wWlc1bGNpQjlJRDBnY0dsd1pXeHBibVZEYjI1bWFXY3VSR1Z3Ykc5NWJXVnVkRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NUVaWEJzYjNsdFpXNTBMa1Z0YVhSMFpYSWdQU0JGYldsMGRHVnlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxrUmxjR3h2ZVcxbGJuUXVUR2x6ZEdWdVpYSWdQU0JNYVhOMFpXNWxjanRjYmlBZ0lDQWdJQ0FnZEdocGN5NUVaWEJzYjNsdFpXNTBMa2x1Wm1WeVpXNWpaWElnUFNCMGFHbHpMa2x1Wm1WeVpXNWpaWEk3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVURzluWjJWeUxtZHliM1Z3Ulc1a0tDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQndhWEJsYkdsdVpVTnZibVpwWnp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JoYzNsdVl5QmtaWEJzYjNrb0tYdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHRjNZV2wwSUhSb2FYTXVSR1Z3Ykc5NWJXVnVkQzVrWlhCc2Iza29LVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCRVpYQnNiM2x0Wlc1MFRXbDRhVzV6T3lJc0ltbHRjRzl5ZENCN0lFWjFibU4wYjNJZ2ZTQm1jbTl0SUNkallYVnpZV3d0Ym1WMExtTnZjbVVuTzF4dVpYaHdiM0owSUdSbFptRjFiSFFnYm1WM0lFWjFibU4wYjNJb0tUc2lMQ0psZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUdOaGRYTmhiRTVsZEVSbGNHeHZlVzFsYm5RZ2ZTQm1jbTl0SUNjdUwyTmhkWE5oYkU1bGRFUmxjR3h2ZVcxbGJuUW5PMXh1Wlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCRVpYQnNiM2x0Wlc1MFRXbDRhVzV6SUgwZ1puSnZiU0FuTGk5a1pYQnNiM2x0Wlc1MExtMXBlR2x1Y3ljN0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4RlgyTmhkWE5oYkY5dVpYUmZZMjl5WlY5Zk95SXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYM1YwYVd4elgxODdJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09IiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL2Jhc2VNb2RlbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvYmFzZU1vZGVsLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcblxuXG5jbGFzcyBCYXNlTW9kZWwgZXh0ZW5kcyBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIlRlbnNvclwiXSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbE5hbWUgPSAnJztcbiAgfVxuXG4gIHNldCBMYXllclJ1bm5lcihydW5uZXIpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBnZXQgTGF5ZXJSdW5uZXIoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgZml0KCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGxvc3MoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgcHJlZGljdCgpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBvbmVIb3RQcmVkaWN0KCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoQmFzZU1vZGVsKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvY2F1c2FsTmV0TW9kZWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jYXVzYWxOZXRNb2RlbHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC51dGlscyAqLyBcImNhdXNhbC1uZXQudXRpbHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24gKi8gXCIuL3NyYy9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uLmpzXCIpO1xuXG5cblxuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGUgY29tbW9uIHVzZWQgbW9kZWxzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRNb2RlbHMqKiBpbnN0YW5jZS5cbiAqIEBjbGFzcyBDYXVzYWxOZXRNb2RlbHNcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9zaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uLmJhYmVsLmpzXVxuICovXG5cbmNsYXNzIENhdXNhbE5ldE1vZGVscyBleHRlbmRzIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcInBsYXRmb3JtXCJdLm1peFdpdGgoY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJUZW5zb3JcIl0sIFtdKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjbGFzc2lmaWNhdGlvbihudW1DbGFzcykge1xuICAgIHRoaXMubW9kZWwgPSBuZXcgX3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl0obnVtQ2xhc3MpO1xuICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICB9XG5cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChuZXcgQ2F1c2FsTmV0TW9kZWxzKCkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBjYXVzYWxOZXRNb2RlbHMsIE1vZGVsTWl4aW5zLCBCYXNlTW9kZWwsIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NhdXNhbE5ldE1vZGVsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYXVzYWxOZXRNb2RlbHMgKi8gXCIuL3NyYy9jYXVzYWxOZXRNb2RlbHMuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJjYXVzYWxOZXRNb2RlbHNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfY2F1c2FsTmV0TW9kZWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tb2RlbF9taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbW9kZWwubWl4aW5zICovIFwiLi9zcmMvbW9kZWwubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTW9kZWxNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbW9kZWxfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9iYXNlTW9kZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYmFzZU1vZGVsICovIFwiLi9zcmMvYmFzZU1vZGVsLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQmFzZU1vZGVsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2Jhc2VNb2RlbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uICovIFwiLi9zcmMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb25cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tb2RlbC5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21vZGVsLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmNvbnN0IE1vZGVsTWl4aW5zID0gQmFzZVBpcGVsaW5lQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzcyB7XG4gIGdldCBMb3NzTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkxvc3M7XG4gIH1cblxuICBnZXQgRml0TW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkZpdDtcbiAgfVxuXG4gIGdldCBPbmVIb3RQcmVkaWN0TW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLk9uZUhvdFByZWRpY3Q7XG4gIH1cblxuICBnZXQgUHJlZGljdE1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5QcmVkaWN0O1xuICB9XG5cbiAgZ2V0IEVuY29kZU1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5FbmNvZGU7XG4gIH1cblxuICBnZXQgRGVjb2RlTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkRlY29kZTtcbiAgfVxuXG4gIGdldCBNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWw7XG4gIH1cblxuICBzZXQgTW9kZWwobW9kZWwpIHtcbiAgICB0aGlzLm5ldE1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZykge1xuICAgIGlmIChzdXBlci5zZXRCeUNvbmZpZykge1xuICAgICAgc3VwZXIuc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpO1xuICAgIH1cblxuICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3NldCBNb2RlbCBieSBjb25maWcnKTtcbiAgICBjb25zdCB7XG4gICAgICBNb2RlbFxuICAgIH0gPSBwaXBlbGluZUNvbmZpZy5OZXQ7XG5cbiAgICBpZiAoIU1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcihgTW9kZWwgaXMgbm90IHNldCBpbiAke0pTT04uc3RyaW5nbGlmeShwaXBlbGluZUNvbmZpZyl9YCk7XG4gICAgfVxuXG4gICAgTW9kZWwuTGF5ZXJSdW5uZXIgPSB0aGlzLkxheWVyUnVubmVyO1xuICAgIHRoaXMuTW9kZWwgPSBNb2RlbDtcbiAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoTW9kZWxNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Jhc2VNb2RlbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlTW9kZWwgKi8gXCIuL3NyYy9iYXNlTW9kZWwuanNcIik7XG5cblxuY2xhc3MgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiBleHRlbmRzIF9iYXNlTW9kZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ge1xuICBjb25zdHJ1Y3RvcihudW1DbGFzcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAobnVtQ2xhc3MgPiAwKSB7XG4gICAgICB0aGlzLm51bUNsYXNzID0gbnVtQ2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKGBleHBlY3QgbnVtY2xhc3MsIGdldCAke251bUNsYXNzfWApO1xuICAgIH1cbiAgfVxuXG4gIHNldCBMYXllclJ1bm5lcihsYXllclJ1bm5lcikge1xuICAgIGxldCB7XG4gICAgICBQcmVkaWN0b3JcbiAgICB9ID0gbGF5ZXJSdW5uZXI7XG4gICAgdGhpcy5ydW5uZXIgPSB7XG4gICAgICBQcmVkaWN0b3JcbiAgICB9O1xuICB9XG5cbiAgZ2V0IExheWVyUnVubmVyKCkge1xuICAgIGlmICghdGhpcy5ydW5uZXIpIHtcbiAgICAgIHRocm93IEVycm9yKCdydW5uZXIgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJ1bm5lcjtcbiAgfVxuXG4gIGdldCBGaXQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgUHJlZGljdG9yXG4gICAgfSA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgcmV0dXJuIGlucHV0VGVuc29yID0+IHtcbiAgICAgIGxldCBvdXRQdXRUZW5zb3IgPSBQcmVkaWN0b3IoaW5wdXRUZW5zb3IpO1xuICAgICAgbGV0IGxvZ1Byb2IgPSBvdXRQdXRUZW5zb3Iuc3ViKG91dFB1dFRlbnNvci5sb2dTdW1FeHAoMSwgdHJ1ZSkpO1xuICAgICAgcmV0dXJuIGxvZ1Byb2I7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBQcmVkaWN0KCkge1xuICAgIGNvbnN0IEZpdCA9IHRoaXMuRml0O1xuICAgIHJldHVybiBpbnB1dFRlbnNvciA9PiB7XG4gICAgICBsZXQgbG9nUHJvYiA9IEZpdChpbnB1dFRlbnNvcik7XG4gICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgIHJldHVybiBwcmVkaWN0ZWRDbGFzcztcbiAgICB9O1xuICB9XG5cbiAgZ2V0IE9uZUhvdFByZWRpY3QoKSB7XG4gICAgY29uc3QgUHJlZGljdCA9IHRoaXMuUHJlZGljdDtcbiAgICByZXR1cm4gaW5wdXRUZW5zb3IgPT4ge1xuICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gUHJlZGljdChpbnB1dFRlbnNvcik7XG4gICAgICBsZXQgb25lSG90UHJlZGljdCA9IHRoaXMuVC5vbmVIb3QocHJlZGljdGVkQ2xhc3MsIHRoaXMubnVtQ2xhc3MpO1xuICAgICAgcmV0dXJuIG9uZUhvdFByZWRpY3Q7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBMb3NzKCkge1xuICAgIGNvbnN0IEZpdCA9IHRoaXMuRml0O1xuICAgIHJldHVybiAoaW5wdXRUZW5zb3IsIGxhYmVsVGVuc29yKSA9PiB7XG4gICAgICBsZXQgbG9nUHJvYiA9IEZpdChpbnB1dFRlbnNvcik7XG4gICAgICBsZXQgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubmVnKCkubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgIGxldCBsb3NzID0gbGlrZWxpaG9vZC5zdW0oMSkubWVhbigpO1xuICAgICAgcmV0dXJuIGxvc3M7XG4gICAgfTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQuY29yZVwiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXztcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC51dGlsc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTkzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dGIyUmxiSE12ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRiMlJsYkhNdkxpOXpjbU12WW1GelpVMXZaR1ZzTG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2Ylc5a1pXeHpMeTR2YzNKakwyTmhkWE5oYkU1bGRFMXZaR1ZzY3k1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTh1TDNOeVl5OXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTh1TDNOeVl5OXRiMlJsYkM1dGFYaHBibk11YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0YjJSbGJITXZMaTl6Y21NdmMybHVaMnhsVEdGaWJHVkRiR0Z6YzJsbWFXTmhkR2x2Ymk1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTlsZUhSbGNtNWhiQ0JjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpSWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiVzlrWld4ekwyVjRkR1Z5Ym1Gc0lGd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lJbDBzSW01aGJXVnpJanBiSWtKaGMyVk5iMlJsYkNJc0lsUmxibk52Y2lJc0ltTnZibk4wY25WamRHOXlJaXdpYlc5a1pXeE9ZVzFsSWl3aVRHRjVaWEpTZFc1dVpYSWlMQ0p5ZFc1dVpYSWlMQ0pGY25KdmNpSXNJbVpwZENJc0lteHZjM01pTENKd2NtVmthV04wSWl3aWIyNWxTRzkwVUhKbFpHbGpkQ0lzSWtOaGRYTmhiRTVsZEUxdlpHVnNjeUlzSW5Cc1lYUm1iM0p0SWl3aWJXbDRWMmwwYUNJc0lrSmhjMlZVWlc1emIzSWlMQ0pqYkdGemMybG1hV05oZEdsdmJpSXNJbTUxYlVOc1lYTnpJaXdpYlc5a1pXd2lMQ0pUYVc1bmJHVk1ZV0psYkVOc1lYTnphV1pwWTJGMGFXOXVJaXdpVFc5a1pXeE5hWGhwYm5NaUxDSkNZWE5sVUdsd1pXeHBibVZEYkdGemN5SXNJa3h2YzNOTmIyUmxiQ0lzSW01bGRFMXZaR1ZzSWl3aVRHOXpjeUlzSWtacGRFMXZaR1ZzSWl3aVJtbDBJaXdpVDI1bFNHOTBVSEpsWkdsamRFMXZaR1ZzSWl3aVQyNWxTRzkwVUhKbFpHbGpkQ0lzSWxCeVpXUnBZM1JOYjJSbGJDSXNJbEJ5WldScFkzUWlMQ0pGYm1OdlpHVk5iMlJsYkNJc0lrVnVZMjlrWlNJc0lrUmxZMjlrWlUxdlpHVnNJaXdpUkdWamIyUmxJaXdpVFc5a1pXd2lMQ0p6WlhSQ2VVTnZibVpwWnlJc0luQnBjR1ZzYVc1bFEyOXVabWxuSWl3aVRHOW5aMlZ5SWl3aVozSnZkWEJDWldkcGJpSXNJazVsZENJc0lrcFRUMDRpTENKemRISnBibWRzYVdaNUlpd2laM0p2ZFhCRmJtUWlMQ0pzWVhsbGNsSjFibTVsY2lJc0lsQnlaV1JwWTNSdmNpSXNJbWx1Y0hWMFZHVnVjMjl5SWl3aWIzVjBVSFYwVkdWdWMyOXlJaXdpYkc5blVISnZZaUlzSW5OMVlpSXNJbXh2WjFOMWJVVjRjQ0lzSW5CeVpXUnBZM1JsWkVOc1lYTnpJaXdpWVhKblRXRjRJaXdpVkNJc0ltOXVaVWh2ZENJc0lteGhZbVZzVkdWdWMyOXlJaXdpYkdsclpXeHBhRzl2WkNJc0ltNWxaeUlzSW0xMWJDSXNJbk4xYlNJc0ltMWxZVzRpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCTUVNc1owTkJRV2RETzBGQlF6RkZPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVhkRUxHdENRVUZyUWp0QlFVTXhSVHRCUVVOQkxIbEVRVUZwUkN4alFVRmpPMEZCUXk5RU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFJFRkJlVU1zYVVOQlFXbERPMEZCUXpGRkxIZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdEJRVU55U1R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEYkVaQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVTkJMRTFCUVUxQkxGTkJRVTRzVTBGQmQwSkRMSE5FUVVGNFFpeERRVUU0UWp0QlFVTXhRa01zWVVGQlZ5eEhRVUZGTzBGQlExUTdRVUZEUVN4VFFVRkxReXhUUVVGTUxFZEJRV2xDTEVWQlFXcENPMEZCUTBnN08wRkJSVVFzVFVGQlNVTXNWMEZCU2l4RFFVRm5Ra01zVFVGQmFFSXNSVUZCZFVJN1FVRkRia0lzVlVGQlRVTXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkN4TlFVRkpSaXhYUVVGS0xFZEJRV2xDTzBGQlEySXNWVUZCVFVVc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSRU1zUzBGQlJ5eEhRVUZGTzBGQlEwUXNWVUZCVFVRc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSRVVzVFVGQlNTeEhRVUZGTzBGQlEwWXNWVUZCVFVZc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSRWNzVTBGQlR5eEhRVUZGTzBGQlEwd3NWVUZCVFVnc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSRWtzWlVGQllTeEhRVUZGTzBGQlExZ3NWVUZCVFVvc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRXpRbmxDT3p0QlFUaENaazRzZDBWQlFXWXNSVHM3T3pzN096czdPenM3TzBGREwwSkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096dEJRVTlCTEUxQlFVMVhMR1ZCUVU0c1UwRkJPRUpETEhsRVFVRlJMRU5CUVVORExFOUJRVlFzUTBGQmEwSkRMSE5FUVVGc1FpeEZRVUU0UWl4RlFVRTVRaXhEUVVFNVFpeERRVUZuUlR0QlFVTTFSRm9zWVVGQlZ5eEhRVUZGTzBGQlExUTdRVUZEU0RzN1FVRkZSR0VzWjBKQlFXTXNRMEZCUTBNc1VVRkJSQ3hGUVVGVk8wRkJRM0JDTEZOQlFVdERMRXRCUVV3c1IwRkJZU3hKUVVGSlF5eHJSVUZCU2l4RFFVRTRRa1lzVVVGQk9VSXNRMEZCWWp0QlFVTkJMRmRCUVU4c1MwRkJTME1zUzBGQldqdEJRVU5JT3p0QlFWSXlSRHM3UVVGVmFrUXNiVVZCUVVsT0xHVkJRVW9zUlVGQlppeEZPenM3T3pzN096czdPenM3UVVOd1FrRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVOQk8wRkJSVUU3T3pzN096czdPenM3T3pzN1FVTklRVHRCUVVGQkxFMUJRVTFSTEZkQlFWY3NSMEZCU1VNc2FVSkJRVVFzU1VGQmMwSXNZMEZCWTBFc2FVSkJRV1FzUTBGQkswSTdRVUZEY2tVc1RVRkJTVU1zVTBGQlNpeEhRVUZsTzBGQlExZ3NVVUZCUnl4RFFVRkRMRXRCUVV0RExGRkJRVlFzUlVGQmEwSTdRVUZEWkN4WlFVRk5hRUlzUzBGQlN5eERRVUZETEhGQ1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdG5RaXhSUVVGTUxFTkJRV05ETEVsQlFYSkNPMEZCUTBnN08wRkJSVVFzVFVGQlNVTXNVVUZCU2l4SFFVRmpPMEZCUTFZc1VVRkJSeXhEUVVGRExFdEJRVXRHTEZGQlFWUXNSVUZCYTBJN1FVRkRaQ3haUVVGTmFFSXNTMEZCU3l4RFFVRkRMSEZDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0blFpeFJRVUZNTEVOQlFXTkhMRWRCUVhKQ08wRkJRMGc3TzBGQlJVUXNUVUZCU1VNc2EwSkJRVW9zUjBGQmQwSTdRVUZEY0VJc1VVRkJSeXhEUVVGRExFdEJRVXRLTEZGQlFWUXNSVUZCYTBJN1FVRkRaQ3haUVVGTmFFSXNTMEZCU3l4RFFVRkRMSEZDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0blFpeFJRVUZNTEVOQlFXTkxMR0ZCUVhKQ08wRkJRMGc3TzBGQlJVUXNUVUZCU1VNc1dVRkJTaXhIUVVGclFqdEJRVU5rTEZGQlFVY3NRMEZCUXl4TFFVRkxUaXhSUVVGVUxFVkJRV3RDTzBGQlEyUXNXVUZCVFdoQ0xFdEJRVXNzUTBGQlF5eHhRa0ZCUkN4RFFVRllPMEZCUTBnN08wRkJRMFFzVjBGQlR5eExRVUZMWjBJc1VVRkJUQ3hEUVVGalR5eFBRVUZ5UWp0QlFVTklPenRCUVVWRUxFMUJRVWxETEZkQlFVb3NSMEZCYVVJN1FVRkRZaXhSUVVGSExFTkJRVU1zUzBGQlMxSXNVVUZCVkN4RlFVRnJRanRCUVVOa0xGbEJRVTFvUWl4TFFVRkxMRU5CUVVNc2NVSkJRVVFzUTBGQldEdEJRVU5JT3p0QlFVTkVMRmRCUVU4c1MwRkJTMmRDTEZGQlFVd3NRMEZCWTFNc1RVRkJja0k3UVVGRFNEczdRVUZGUkN4TlFVRkpReXhYUVVGS0xFZEJRV2xDTzBGQlEySXNVVUZCUnl4RFFVRkRMRXRCUVV0V0xGRkJRVlFzUlVGQmEwSTdRVUZEWkN4WlFVRk5hRUlzUzBGQlN5eERRVUZETEhGQ1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdG5RaXhSUVVGTUxFTkJRV05YTEUxQlFYSkNPMEZCUTBnN08wRkJSMFFzVFVGQlNVTXNTMEZCU2l4SFFVRlhPMEZCUTFBc1VVRkJSeXhEUVVGRExFdEJRVXRhTEZGQlFWUXNSVUZCYTBJN1FVRkRaQ3haUVVGTmFFSXNTMEZCU3l4RFFVRkRMSEZDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0blFpeFJRVUZhTzBGQlEwZzdPMEZCUjBRc1RVRkJTVmtzUzBGQlNpeERRVUZWYWtJc1MwRkJWaXhGUVVGblFqdEJRVU5hTEZOQlFVdExMRkZCUVV3c1IwRkJaMEpNTEV0QlFXaENPMEZCUTBnN08wRkJSVVJyUWl4aFFVRlhMRU5CUVVORExHTkJRVVFzUlVGQlowSTdRVUZEZGtJc1VVRkJSeXhOUVVGTlJDeFhRVUZVTEVWQlFYRkNPMEZCUTJwQ0xGbEJRVTFCTEZkQlFVNHNRMEZCYTBKRExHTkJRV3hDTzBGQlEwZzdPMEZCUTBRc1UwRkJTME1zVFVGQlRDeERRVUZaUXl4VlFVRmFMRU5CUVhWQ0xIRkNRVUYyUWp0QlFVTkJMRlZCUVUwN1FVRkJSVW83UVVGQlJpeFJRVUZaUlN4alFVRmpMRU5CUVVOSExFZEJRV3BET3p0QlFVTkJMRkZCUVVjc1EwRkJRMHdzUzBGQlNpeEZRVUZWTzBGQlEwNHNXVUZCVFRWQ0xFdEJRVXNzUTBGQlJTeDFRa0ZCYzBKclF5eEpRVUZKTEVOQlFVTkRMRlZCUVV3c1EwRkJaMEpNTEdOQlFXaENMRU5CUVdkRExFVkJRWGhFTEVOQlFWZzdRVUZEU0RzN1FVRkRSRVlzVTBGQlN5eERRVUZET1VJc1YwRkJUaXhIUVVGdlFpeExRVUZMUVN4WFFVRjZRanRCUVVOQkxGTkJRVXM0UWl4TFFVRk1MRWRCUVdGQkxFdEJRV0k3UVVGRFFTeFRRVUZMUnl4TlFVRk1MRU5CUVZsTExGRkJRVm83UVVGRFNEczdRVUZ3Ulc5RkxFTkJRWHBGT3p0QlFYVkZaWFpDTERCRlFVRm1MRVU3T3pzN096czdPenM3T3p0QlEzWkZRVHRCUVVGQk8wRkJRVUU3TzBGQlJVRXNUVUZCVFVRc2VVSkJRVTRzVTBGQmQwTnNRaXhyUkVGQmVFTXNRMEZCYVVRN1FVRkROME5GTEdGQlFWY3NRMEZCUTJNc1VVRkJSQ3hGUVVGVk8wRkJRMnBDT3p0QlFVTkJMRkZCUVVkQkxGRkJRVkVzUjBGQlJ5eERRVUZrTEVWQlFXZENPMEZCUTFvc1YwRkJTMEVzVVVGQlRDeEhRVUZuUWtFc1VVRkJhRUk3UVVGRFNDeExRVVpFTEUxQlIwazdRVUZEUVN4WlFVRk5WaXhMUVVGTExFTkJRVVVzZDBKQlFYVkNWU3hSUVVGVExFVkJRV3hETEVOQlFWZzdRVUZEU0R0QlFVTktPenRCUVVWRUxFMUJRVWxhTEZkQlFVb3NRMEZCWjBKMVF5eFhRVUZvUWl4RlFVRTBRanRCUVVONFFpeFJRVUZKTzBGQlFVVkRPMEZCUVVZc1VVRkJaMEpFTEZkQlFYQkNPMEZCUTBFc1UwRkJTM1JETEUxQlFVd3NSMEZCWXp0QlFVRkZkVU03UVVGQlJpeExRVUZrTzBGQlEwZzdPMEZCUlVRc1RVRkJTWGhETEZkQlFVb3NSMEZCYVVJN1FVRkRZaXhSUVVGSExFTkJRVU1zUzBGQlMwTXNUVUZCVkN4RlFVRm5RanRCUVVOYUxGbEJRVTFETEV0QlFVc3NRMEZCUXl4dFFrRkJSQ3hEUVVGWU8wRkJRMGc3TzBGQlEwUXNWMEZCVHl4TFFVRkxSQ3hOUVVGYU8wRkJRMGc3TzBGQlJVUXNUVUZCU1c5Q0xFZEJRVW9zUjBGQlV6dEJRVU5NTEZWQlFVMDdRVUZCUlcxQ08wRkJRVVlzVVVGQlowSXNTMEZCUzNoRExGZEJRVE5DTzBGQlEwRXNWMEZCVVhsRExGZEJRVVFzU1VGQlpUdEJRVU5zUWl4VlFVRkpReXhaUVVGWkxFZEJRVWRHTEZOQlFWTXNRMEZCUTBNc1YwRkJSQ3hEUVVFMVFqdEJRVU5CTEZWQlFVbEZMRTlCUVU4c1IwRkJSMFFzV1VGQldTeERRVUZEUlN4SFFVRmlMRU5CUVdsQ1JpeFpRVUZaTEVOQlFVTkhMRk5CUVdJc1EwRkJkVUlzUTBGQmRrSXNSVUZCTUVJc1NVRkJNVUlzUTBGQmFrSXNRMEZCWkR0QlFVTkJMR0ZCUVU5R0xFOUJRVkE3UVVGRFNDeExRVXBFTzBGQlMwZzdPMEZCUlVRc1RVRkJTV3hDTEU5QlFVb3NSMEZCWVR0QlFVTlVMRlZCUVUxS0xFZEJRVWNzUjBGQlJ5eExRVUZMUVN4SFFVRnFRanRCUVVOQkxGZEJRVkZ2UWl4WFFVRkVMRWxCUVdVN1FVRkRiRUlzVlVGQlNVVXNUMEZCVHl4SFFVRkhkRUlzUjBGQlJ5eERRVUZEYjBJc1YwRkJSQ3hEUVVGcVFqdEJRVU5CTEZWQlFVbExMR05CUVdNc1IwRkJSMGdzVDBGQlR5eERRVUZEU1N4TlFVRlNMRU5CUVdVc1EwRkJaaXhEUVVGeVFqdEJRVU5CTEdGQlFVOUVMR05CUVZBN1FVRkRTQ3hMUVVwRU8wRkJTMGc3TzBGQlJVUXNUVUZCU1haQ0xHRkJRVW9zUjBGQmJVSTdRVUZEWml4VlFVRk5SU3hQUVVGUExFZEJRVWNzUzBGQlMwRXNUMEZCY2tJN1FVRkRRU3hYUVVGUlowSXNWMEZCUkN4SlFVRmxPMEZCUTJ4Q0xGVkJRVWxMTEdOQlFXTXNSMEZCUjNKQ0xFOUJRVThzUTBGQlEyZENMRmRCUVVRc1EwRkJOVUk3UVVGRFFTeFZRVUZKYmtNc1lVRkJZU3hIUVVGSExFdEJRVXN3UXl4RFFVRk1MRU5CUVU5RExFMUJRVkFzUTBGQlkwZ3NZMEZCWkN4RlFVRTRRaXhMUVVGTGJFTXNVVUZCYmtNc1EwRkJjRUk3UVVGRFFTeGhRVUZQVGl4aFFVRlFPMEZCUTBnc1MwRktSRHRCUVV0SU96dEJRVU5FTEUxQlFVbGhMRWxCUVVvc1IwRkJWVHRCUVVOT0xGVkJRVTFGTEVkQlFVY3NSMEZCUnl4TFFVRkxRU3hIUVVGcVFqdEJRVU5CTEZkQlFVOHNRMEZCUTI5Q0xGZEJRVVFzUlVGQlkxTXNWMEZCWkN4TFFVRTBRanRCUVVNdlFpeFZRVUZKVUN4UFFVRlBMRWRCUVVkMFFpeEhRVUZITEVOQlFVTnZRaXhYUVVGRUxFTkJRV3BDTzBGQlEwRXNWVUZCU1ZVc1ZVRkJWU3hIUVVGSFVpeFBRVUZQTEVOQlFVTlRMRWRCUVZJc1IwRkJZME1zUjBGQlpDeERRVUZyUWtnc1YwRkJiRUlzUTBGQmFrSTdRVUZEUVN4VlFVRkpPVU1zU1VGQlNTeEhRVUZISzBNc1ZVRkJWU3hEUVVGRFJ5eEhRVUZZTEVOQlFXVXNRMEZCWml4RlFVRnJRa01zU1VGQmJFSXNSVUZCV0R0QlFVTkJMR0ZCUVU5dVJDeEpRVUZRTzBGQlEwZ3NTMEZNUkR0QlFVMUlPenRCUVhwRU5FTTdPMEZCTWtSc1ExVXNkMFpCUVdZc1JUczdPenM3T3pzN096czdRVU0zUkVFc05rUTdPenM3T3pzN096czdPMEZEUVVFc09FUWlMQ0ptYVd4bElqb2lRR05oZFhOaGJFNWxkQzl0YjJSbGJITXVkMlZpTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1amIzSmxYQ0lwTENCeVpYRjFhWEpsS0Z3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aUtTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhDSmpZWFZ6WVd3dGJtVjBMbU52Y21WY0lpd2dYQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0pkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0lrQmpZWFZ6WVd4T1pYUXZiVzlrWld4elhDSmRJRDBnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1amIzSmxYQ0lwTENCeVpYRjFhWEpsS0Z3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aUtTazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpUUdOaGRYTmhiRTVsZEM5dGIyUmxiSE5jSWwwZ1BTQm1ZV04wYjNKNUtISnZiM1JiWENKallYVnpZV3d0Ym1WMExtTnZjbVZjSWwwc0lISnZiM1JiWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENKZEtUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjlqYjNKbFgxOHNJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjkxZEdsc2MxOWZLU0I3WEc1eVpYUjFjbTRnSWl3aUlGeDBMeThnVkdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MGRtRnlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTWdQU0I3ZlR0Y2JseHVJRngwTHk4Z1ZHaGxJSEpsY1hWcGNtVWdablZ1WTNScGIyNWNiaUJjZEdaMWJtTjBhVzl1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2JXOWtkV3hsU1dRcElIdGNibHh1SUZ4MFhIUXZMeUJEYUdWamF5QnBaaUJ0YjJSMWJHVWdhWE1nYVc0Z1kyRmphR1ZjYmlCY2RGeDBhV1lvYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBwSUh0Y2JpQmNkRngwWEhSeVpYUjFjbTRnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1Wlhod2IzSjBjenRjYmlCY2RGeDBmVnh1SUZ4MFhIUXZMeUJEY21WaGRHVWdZU0J1WlhjZ2JXOWtkV3hsSUNoaGJtUWdjSFYwSUdsMElHbHVkRzhnZEdobElHTmhZMmhsS1Z4dUlGeDBYSFIyWVhJZ2JXOWtkV3hsSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwZ1BTQjdYRzRnWEhSY2RGeDBhVG9nYlc5a2RXeGxTV1FzWEc0Z1hIUmNkRngwYkRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWlhod2IzSjBjem9nZTMxY2JpQmNkRngwZlR0Y2JseHVJRngwWEhRdkx5QkZlR1ZqZFhSbElIUm9aU0J0YjJSMWJHVWdablZ1WTNScGIyNWNiaUJjZEZ4MGJXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVkyRnNiQ2h0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExDQnRiMlIxYkdVdVpYaHdiM0owY3l3Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5azdYRzVjYmlCY2RGeDBMeThnUm14aFp5QjBhR1VnYlc5a2RXeGxJR0Z6SUd4dllXUmxaRnh1SUZ4MFhIUnRiMlIxYkdVdWJDQTlJSFJ5ZFdVN1hHNWNiaUJjZEZ4MEx5OGdVbVYwZFhKdUlIUm9aU0JsZUhCdmNuUnpJRzltSUhSb1pTQnRiMlIxYkdWY2JpQmNkRngwY21WMGRYSnVJRzF2WkhWc1pTNWxlSEJ2Y25Sek8xeHVJRngwZlZ4dVhHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bGN5QnZZbXBsWTNRZ0tGOWZkMlZpY0dGamExOXRiMlIxYkdWelgxOHBYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtMGdQU0J0YjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1aklEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElHZGxkSFJsY2lCbWRXNWpkR2x2YmlCbWIzSWdhR0Z5Ylc5dWVTQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1RZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SekxDQnVZVzFsTENCblpYUjBaWElwSUh0Y2JpQmNkRngwYVdZb0lWOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieWhsZUhCdmNuUnpMQ0J1WVcxbEtTa2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCdVlXMWxMQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUdkbGREb2daMlYwZEdWeUlIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1gxOWxjMDF2WkhWc1pTQnZiaUJsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpLU0I3WEc0Z1hIUmNkR2xtS0hSNWNHVnZaaUJUZVcxaWIyd2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeWtnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3NJSHNnZG1Gc2RXVTZJQ2ROYjJSMWJHVW5JSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENBblgxOWxjMDF2WkhWc1pTY3NJSHNnZG1Gc2RXVTZJSFJ5ZFdVZ2ZTazdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QmpjbVZoZEdVZ1lTQm1ZV3RsSUc1aGJXVnpjR0ZqWlNCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQXhPaUIyWVd4MVpTQnBjeUJoSUcxdlpIVnNaU0JwWkN3Z2NtVnhkV2x5WlNCcGRGeHVJRngwTHk4Z2JXOWtaU0FtSURJNklHMWxjbWRsSUdGc2JDQndjbTl3WlhKMGFXVnpJRzltSUhaaGJIVmxJR2x1ZEc4Z2RHaGxJRzV6WEc0Z1hIUXZMeUJ0YjJSbElDWWdORG9nY21WMGRYSnVJSFpoYkhWbElIZG9aVzRnWVd4eVpXRmtlU0J1Y3lCdlltcGxZM1JjYmlCY2RDOHZJRzF2WkdVZ0ppQTRmREU2SUdKbGFHRjJaU0JzYVd0bElISmxjWFZwY21WY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1ZENBOUlHWjFibU4wYVc5dUtIWmhiSFZsTENCdGIyUmxLU0I3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF4S1NCMllXeDFaU0E5SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b2RtRnNkV1VwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnT0NrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUnBaaWdvYlc5a1pTQW1JRFFwSUNZbUlIUjVjR1Z2WmlCMllXeDFaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkbUZzZFdVZ0ppWWdkbUZzZFdVdVgxOWxjMDF2WkhWc1pTa2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFIyWVhJZ2JuTWdQU0JQWW1wbFkzUXVZM0psWVhSbEtHNTFiR3dwTzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5Jb2JuTXBPMXh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYm5Nc0lDZGtaV1poZFd4MEp5d2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0IyWVd4MVpUb2dkbUZzZFdVZ2ZTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXlJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQWhQU0FuYzNSeWFXNW5KeWtnWm05eUtIWmhjaUJyWlhrZ2FXNGdkbUZzZFdVcElGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2h1Y3l3Z2EyVjVMQ0JtZFc1amRHbHZiaWhyWlhrcElIc2djbVYwZFhKdUlIWmhiSFZsVzJ0bGVWMDdJSDB1WW1sdVpDaHVkV3hzTENCclpYa3BLVHRjYmlCY2RGeDBjbVYwZFhKdUlHNXpPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dVhHNGdYSFF2THlCTWIyRmtJR1Z1ZEhKNUlHMXZaSFZzWlNCaGJtUWdjbVYwZFhKdUlHVjRjRzl5ZEhOY2JpQmNkSEpsZEhWeWJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y3lBOUlGd2lMaTl6Y21NdmFXNWtaWGd1YW5OY0lpazdYRzRpTENKcGJYQnZjblFnZXlCVVpXNXpiM0lnZlNCbWNtOXRJQ2RqWVhWellXd3RibVYwTG1OdmNtVW5PMXh1WTJ4aGMzTWdRbUZ6WlUxdlpHVnNJR1Y0ZEdWdVpITWdWR1Z1YzI5eWUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXOWtaV3hPWVcxbElEMGdKeWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwSUV4aGVXVnlVblZ1Ym1WeUtISjFibTVsY2lsN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLQ2RwYlhCc1pXMWxiblFnY21WeGRXbHlaV1FuS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhRZ1RHRjVaWEpTZFc1dVpYSW9LWHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oybHRjR3hsYldWdWRDQnlaWEYxYVhKbFpDY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWnBkQ2dwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiRzl6Y3lncGUxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYVcxd2JHVnRaVzUwSUhKbGNYVnBjbVZrSnlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY0hKbFpHbGpkQ2dwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1SUNBZ0lHOXVaVWh2ZEZCeVpXUnBZM1FvS1h0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMmx0Y0d4bGJXVnVkQ0J5WlhGMWFYSmxaQ2NwTzF4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FtRnpaVTF2WkdWc095SXNJbWx0Y0c5eWRDQjdJSEJzWVhSbWIzSnRJSDBnWm5KdmJTQW5ZMkYxYzJGc0xXNWxkQzUxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJVWlc1emIzSWdZWE1nUW1GelpWUmxibk52Y2lCOUlHWnliMjBnSjJOaGRYTmhiQzF1WlhRdVkyOXlaU2M3WEc1cGJYQnZjblFnZXlCa1pXWmhkV3gwSUdGeklGTnBibWRzWlV4aFltVnNRMnhoYzNOcFptbGpZWFJwYjI0Z2ZTQm1jbTl0SUNjdUwzTnBibWRzWlV4aFlteGxRMnhoYzNOcFptbGpZWFJwYjI0bk8xeHVMeW9xWEc0Z0tpQlVhR2x6SUdOc1lYTnpJSEJ5YjNacFpHVWdZMjl0Ylc5dUlIVnpaV1FnYlc5a1pXeHpJSGRvYVdOb0lHTmhiaUJpWlNCaFkyTmxjM05sWkNCMmFXRWdLaXBqWVhWellXeE9aWFJOYjJSbGJITXFLaUJwYm5OMFlXNWpaUzVjYmlBcUlFQmpiR0Z6Y3lCRFlYVnpZV3hPWlhSTmIyUmxiSE5jYmlBcUlFQmxlSFJsYm1SeklFSmhjMlZVWlc1emIzSmNiaUFxSUVCbGVHRnRjR3hsWEc0Z0tpQmJSVmhCVFZCTVJTQXVMaTlsZUdGdGNHeGxjeTl6YVc1bmJHVk1ZV0psYkVOc1lYTnphV1pwWTJGMGFXOXVMbUpoWW1Wc0xtcHpYVnh1SUNvdlhHNWpiR0Z6Y3lCRFlYVnpZV3hPWlhSTmIyUmxiSE1nWlhoMFpXNWtjeUJ3YkdGMFptOXliUzV0YVhoWGFYUm9LQ0JDWVhObFZHVnVjMjl5TENCYlhTQXBlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLQ2w3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUdOc1lYTnphV1pwWTJGMGFXOXVLRzUxYlVOc1lYTnpLWHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRiMlJsYkNBOUlHNWxkeUJUYVc1bmJHVk1ZV0psYkVOc1lYTnphV1pwWTJGMGFXOXVLRzUxYlVOc1lYTnpLVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJXOWtaV3c3WEc0Z0lDQWdmVnh1ZlZ4dVpYaHdiM0owSUdSbFptRjFiSFFnYm1WM0lFTmhkWE5oYkU1bGRFMXZaR1ZzY3lncE95SXNJbVY0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nWTJGMWMyRnNUbVYwVFc5a1pXeHpJSDBnWm5KdmJTQW5MaTlqWVhWellXeE9aWFJOYjJSbGJITW5PMXh1Wlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCTmIyUmxiRTFwZUdsdWN5QjlJR1p5YjIwZ0p5NHZiVzlrWld3dWJXbDRhVzV6Snp0Y2JseHVaWGh3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJDWVhObFRXOWtaV3dnZlNCbWNtOXRJQ2N1TDJKaGMyVk5iMlJsYkNjN1hHNWxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJRk5wYm1kc1pVeGhZbVZzUTJ4aGMzTnBabWxqWVhScGIyNGdmU0JtY205dElDY3VMM05wYm1kc1pVeGhZbXhsUTJ4aGMzTnBabWxqWVhScGIyNG5PMXh1SWl3aVkyOXVjM1FnVFc5a1pXeE5hWGhwYm5NZ1BTQW9RbUZ6WlZCcGNHVnNhVzVsUTJ4aGMzTXBQVDRnWTJ4aGMzTWdaWGgwWlc1a2N5QkNZWE5sVUdsd1pXeHBibVZEYkdGemMzdGNiaUFnSUNCblpYUWdURzl6YzAxdlpHVnNLQ2w3WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6TG01bGRFMXZaR1ZzS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0NkdVpYUk5iMlJsYkNCcGN5QnViM1FnYzJWMEp5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJtVjBUVzlrWld3dVRHOXpjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFFnUm1sMFRXOWtaV3dvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJtVjBUVzlrWld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oyNWxkRTF2WkdWc0lHbHpJRzV2ZENCelpYUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXVaWFJOYjJSbGJDNUdhWFE3WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUdkbGRDQlBibVZJYjNSUWNtVmthV04wVFc5a1pXd29LWHRjYmlBZ0lDQWdJQ0FnYVdZb0lYUm9hWE11Ym1WMFRXOWtaV3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjI1bGRFMXZaR1ZzSUdseklHNXZkQ0J6WlhRbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dVpYUk5iMlJsYkM1UGJtVkliM1JRY21Wa2FXTjBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkQ0JRY21Wa2FXTjBUVzlrWld3b0tYdGNiaUFnSUNBZ0lDQWdhV1lvSVhSb2FYTXVibVYwVFc5a1pXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMjVsZEUxdlpHVnNJR2x6SUc1dmRDQnpaWFFuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV1WlhSTmIyUmxiQzVRY21Wa2FXTjBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkQ0JGYm1OdlpHVk5iMlJsYkNncGUxeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NXVaWFJOYjJSbGJDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25ibVYwVFc5a1pXd2dhWE1nYm05MElITmxkQ2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTVsZEUxdlpHVnNMa1Z1WTI5a1pUdGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUWdSR1ZqYjJSbFRXOWtaV3dvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJtVjBUVzlrWld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oyNWxkRTF2WkdWc0lHbHpJRzV2ZENCelpYUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXVaWFJOYjJSbGJDNUVaV052WkdVN1hHNGdJQ0FnZlZ4dVhHNWNiaUFnSUNCblpYUWdUVzlrWld3b0tYdGNiaUFnSUNBZ0lDQWdhV1lvSVhSb2FYTXVibVYwVFc5a1pXd3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMjVsZEUxdlpHVnNJR2x6SUc1dmRDQnpaWFFuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV1WlhSTmIyUmxiRHRjYmlBZ0lDQjlYRzRnSUNBZ1hHNWNiaUFnSUNCelpYUWdUVzlrWld3b2JXOWtaV3dwZXlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhSb2FYTXVibVYwVFc5a1pXd2dQU0J0YjJSbGJEdGNiaUFnSUNCOVhHNWNiaUFnSUNCelpYUkNlVU52Ym1acFp5aHdhWEJsYkdsdVpVTnZibVpwWnlsN1hHNGdJQ0FnSUNBZ0lHbG1LSE4xY0dWeUxuTmxkRUo1UTI5dVptbG5LWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjFjR1Z5TG5ObGRFSjVRMjl1Wm1sbktIQnBjR1ZzYVc1bFEyOXVabWxuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TGt4dloyZGxjaTVuY205MWNFSmxaMmx1S0NkelpYUWdUVzlrWld3Z1lua2dZMjl1Wm1sbkp5azdYRzRnSUNBZ0lDQWdJR052Ym5OMElIc2dUVzlrWld3Z2ZTQTlJSEJwY0dWc2FXNWxRMjl1Wm1sbkxrNWxkRHRjYmlBZ0lDQWdJQ0FnYVdZb0lVMXZaR1ZzS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0dCTmIyUmxiQ0JwY3lCdWIzUWdjMlYwSUdsdUlDUjdTbE5QVGk1emRISnBibWRzYVdaNUtIQnBjR1ZzYVc1bFEyOXVabWxuS1gxZ0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JOYjJSbGJDNU1ZWGxsY2xKMWJtNWxjaUE5SUhSb2FYTXVUR0Y1WlhKU2RXNXVaWEk3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVUVzlrWld3Z1BTQk5iMlJsYkR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVNYjJkblpYSXVaM0p2ZFhCRmJtUW9LVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCTmIyUmxiRTFwZUdsdWN6dGNiaUlzSW1sdGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1FtRnpaVTF2WkdWc0lIMGdabkp2YlNBbkxpOWlZWE5sVFc5a1pXd25PMXh1WEc1amJHRnpjeUJUYVc1bmJHVk1ZV0psYkVOc1lYTnphV1pwWTJGMGFXOXVJR1Y0ZEdWdVpITWdRbUZ6WlUxdlpHVnNlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLRzUxYlVOc1lYTnpLWHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9LVHRjYmlBZ0lDQWdJQ0FnYVdZb2JuVnRRMnhoYzNNZ1BpQXdLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Ym5WdFEyeGhjM01nUFNCdWRXMURiR0Z6Y3p0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmxiSE5sZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvWUdWNGNHVmpkQ0J1ZFcxamJHRnpjeXdnWjJWMElDUjdiblZ0UTJ4aGMzTjlZQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhRZ1RHRjVaWEpTZFc1dVpYSW9iR0Y1WlhKU2RXNXVaWElwZTF4dUlDQWdJQ0FnSUNCc1pYUWdleUJRY21Wa2FXTjBiM0lnZlNBOUlHeGhlV1Z5VW5WdWJtVnlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuSjFibTVsY2lBOUlIc2dVSEpsWkdsamRHOXlJSDA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwSUV4aGVXVnlVblZ1Ym1WeUtDbDdYRzRnSUNBZ0lDQWdJR2xtS0NGMGFHbHpMbkoxYm01bGNpbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25jblZ1Ym1WeUlHbHpJRzV2ZENCelpYUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXlkVzV1WlhJN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHZGxkQ0JHYVhRb0tYdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2V5QlFjbVZrYVdOMGIzSWdmU0E5SUhSb2FYTXVUR0Y1WlhKU2RXNXVaWEk3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvYVc1d2RYUlVaVzV6YjNJcFBUNTdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdiM1YwVUhWMFZHVnVjMjl5SUQwZ1VISmxaR2xqZEc5eUtHbHVjSFYwVkdWdWMyOXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JzYjJkUWNtOWlJRDBnYjNWMFVIVjBWR1Z1YzI5eUxuTjFZaWh2ZFhSUWRYUlVaVzV6YjNJdWJHOW5VM1Z0Ulhod0tERXNJSFJ5ZFdVcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJzYjJkUWNtOWlPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmlBZ0lDQmNiaUFnSUNCblpYUWdVSEpsWkdsamRDZ3BlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQkdhWFFnUFNCMGFHbHpMa1pwZER0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNocGJuQjFkRlJsYm5OdmNpazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JzYjJkUWNtOWlJRDBnUm1sMEtHbHVjSFYwVkdWdWMyOXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3Y21Wa2FXTjBaV1JEYkdGemN5QTlJR3h2WjFCeWIySXVZWEpuVFdGNEtERXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhCeVpXUnBZM1JsWkVOc1lYTnpPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZENCUGJtVkliM1JRY21Wa2FXTjBLQ2w3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRkJ5WldScFkzUWdQU0IwYUdsekxsQnlaV1JwWTNRN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb2FXNXdkWFJVWlc1emIzSXBQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY0hKbFpHbGpkR1ZrUTJ4aGMzTWdQU0JRY21Wa2FXTjBLR2x1Y0hWMFZHVnVjMjl5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCdmJtVkliM1JRY21Wa2FXTjBJRDBnZEdocGN5NVVMbTl1WlVodmRDaHdjbVZrYVdOMFpXUkRiR0Z6Y3l3Z2RHaHBjeTV1ZFcxRGJHRnpjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2IyNWxTRzkwVUhKbFpHbGpkRHRjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc0Z0lDQWdaMlYwSUV4dmMzTW9LWHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdSbWwwSUQwZ2RHaHBjeTVHYVhRN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb2FXNXdkWFJVWlc1emIzSXNJR3hoWW1Wc1ZHVnVjMjl5S1QwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHeHZaMUJ5YjJJZ1BTQkdhWFFvYVc1d2RYUlVaVzV6YjNJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHeHBhMlZzYVdodmIyUWdQU0JzYjJkUWNtOWlMbTVsWnlncExtMTFiQ2hzWVdKbGJGUmxibk52Y2lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2JHOXpjeUE5SUd4cGEyVnNhV2h2YjJRdWMzVnRLREVwTG0xbFlXNG9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCc2IzTnpPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYm4xY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZOcGJtZHNaVXhoWW1Wc1EyeGhjM05wWm1sallYUnBiMjQ3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDJOaGRYTmhiRjl1WlhSZlkyOXlaVjlmT3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgzVjBhV3h6WDE4N0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCIvKipcbiAqIFRoZSBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgY2xhc3MgaXMgdGhlIG1peGlzIGNsYXNzIGZvciBkZXBsb3lpbmcgZW5zZW1ibGUgbW9kZWxcbiAqIEBjbGFzcyBDYXVzYWxOZXRcbiAqIEBleHRlbmRzIHsgQmFzZVBpcGVsaW5lQ2xhc3MgfVxuICovXG5jb25zdCBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzcyB7XG4gICAgLyoqXG4gICAgICogUHJvdmlkZSBFbnNlbWJsZUluZmVyZW5jZXIgY2FsbGVyLCBFbnNlbWJsZU1vZGVsUHJlZGljdCBtdXN0IGJlIHNldCBpbiBwcmlvclxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIGdldCBFbnNlbWJsZUluZmVyZW5jZXIoKXtcbiAgICAgICAgY29uc3QgTW9kZWxMZW5zZXMgPSAoKT0+KHsgRW5zZW1ibGVQcmVkaWN0OiB0aGlzLkVuc2VtYmxlTW9kZWxQcmVkaWN0IH0pO1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICByZXR1cm4gYXN5bmMgKGlucHV0KT0+e1xuICAgICAgICAgICAgbGV0IHsgRW5zZW1ibGVQcmVkaWN0IH0gPSBpbnB1dDtcbiAgICAgICAgICAgIGxldCBpbmZlciA9IHt9O1xuICAgICAgICAgICAgaWYoRW5zZW1ibGVQcmVkaWN0KXtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihFbnNlbWJsZVByZWRpY3QpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IHByZWRpY3RUZW5zb3IgPSBhd2FpdCBNb2RlbExlbnNlcygpLkVuc2VtYmxlUHJlZGljdChpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICAgICAgaW5mZXIuRW5zZW1ibGVQcmVkaWN0ID0gYXdhaXQgcHJlZGljdFRlbnNvci5kYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5mZXI7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHByb2Nlc3MgcGlwZWxpbmVDb25maWcgb2JqZWN0IGZvciBlbnNlbWJsZSBkZXBsb3ltZW50XG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gcGlwZWxpbmVDb25maWdcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgaWYoc3VwZXIuc2V0QnlDb25maWcpe1xuICAgICAgICAgICAgc3VwZXIuc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3NldCBlbnNlbWJsZSBkZXBsb3ltZW50IGJ5IGNvbmZpZycpO1xuICAgICAgICB0aGlzLkRlcGxveW1lbnQuRW5zZW1ibGVJbmZlcmVuY2VyID0gdGhpcy5FbnNlbWJsZUluZmVyZW5jZXI7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBwaXBlbGluZUNvbmZpZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogZGVwbG95IG1vZGVsXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH0gZGVwbG95bWVudCBzdW1tYXJ5XG4gICAgICovXG4gICAgYXN5bmMgZGVwbG95KCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLkRlcGxveW1lbnQuZGVwbG95KCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zOyIsImNvbnN0IEVuc2VtYmxlRXZhbHVhdG9yTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7IFxuICAgIGFzeW5jIGVuc2VtYmxlVGVzdChiYXRjaFNpemUsIG1ldGhvZD0nYWNjdXJhY3knKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlJyk7IFxuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBFbnNlbWJsZUV2YWx1YXRvck1peGluczsiLCIvKipcbiAqIFRoZSBFbnNlbWJsZU1vZGVsTWl4aW5zIGNsYXNzIGlzIHRoZSBtaXhpcyBjbGFzcyBmb3IgZW5zZW1ibGUgbW9kZWwgY2FsbGVyXG4gKiBAY2xhc3MgRW5zZW1ibGVNb2RlbE1peGluc1xuICogQGV4dGVuZHMge0Jhc2VQaXBlbGluZUNsYXNzfVxuICovXG5jb25zdCBFbnNlbWJsZU1vZGVsTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7IFxuXG4gICAgZ2V0IEVuc2VtYmxlTW9kZWxQcmVkaWN0KCl7XG4gICAgICAgIGNvbnN0IEZpdE1vZGVsID0gdGhpcy5GaXRNb2RlbDtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgY29uc3QgRW5zZW1ibGVNb2RlbHMgPSB0aGlzLkVuc2VtYmxlTW9kZWxzO1xuICAgICAgICBjb25zdCBCYWdnaW5nID0gYXN5bmMgKGlucHV0VGVuc29yKT0+e1xuICAgICAgICAgICAgbGV0IHByb2JGaXRzID0gW107XG4gICAgICAgICAgICBmb3IobGV0IG1vZGVsIG9mIEVuc2VtYmxlTW9kZWxzKXtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQYXJhbXMobW9kZWwpO1xuICAgICAgICAgICAgICAgIGxldCBwcm9iID0gRml0TW9kZWwoaW5wdXRUZW5zb3IpLmV4cCgpO1xuICAgICAgICAgICAgICAgIHByb2JGaXRzLnB1c2gocHJvYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbWVhblByb2IgPSBULnN0YWNrKHByb2JGaXRzKS5tZWFuKDApO1xuICAgICAgICAgICAgcmV0dXJuIG1lYW5Qcm9iLmFyZ01heCgxKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEJhZ2dpbmc7ICAgXG4gICAgfVxuXG4gICAgc2V0IEVuc2VtYmxlTW9kZWxzKG1vZGVsaXN0KXtcbiAgICAgICAgdGhpcy5lbnNlbWJsZU1vZGVscyA9IG1vZGVsaXN0O1xuICAgIH1cblxuICAgIGdldCBFbnNlbWJsZU1vZGVscygpe1xuICAgICAgICBpZighdGhpcy5lbnNlbWJsZU1vZGVscyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRW5zZW1ibGVNb2RlbHMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5lbnNlbWJsZU1vZGVscztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRW5zZW1ibGVNb2RlbE1peGluczsiLCIvKipcbiAqIFRoZSBFbnNlbWJsZVRyYWluZXJNaXhpbnMgY2xhc3MgaXMgdGhlIG1peGlucyBjbGFzcyBmb3IgdHJhaW5pbmcgZW5zYW1ibGFibGUgbW9kZWxzXG4gKiBAY2xhc3MgRW5zZW1ibGVUcmFpbmVyTWl4aW5zXG4gKiBAZXh0ZW5kcyB7QmFzZVBpcGVsaW5lQ2xhc3N9XG4gKi9cbmNvbnN0IEVuc2VtYmxlVHJhaW5lck1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIC8qKlxuICAgICAqIFRyYWluIG1vZGVsIGFuZCBzYXZlIHRvIHN0b3JhZ2UgdW5kZXIgdGhlIGdpdmVuIGZpbGVuYW1lLiBwYXJhbWV0ZXJzIGlzIHJlaW5pdGVkIGZvciBlYWNoIHRyYWluaW5nXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gbnVtRXBvY2hzXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gYmF0Y2hTaXplXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gc2F2ZUZpbGVOYW1lXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH0gVHJhaW5pbmcgbG9zc2VzXG4gICAgICovXG4gICAgYXN5bmMgZW5zZW1ibGVUcmFpbihudW1FcG9jaHMsIGJhdGNoU2l6ZSwgc2F2ZUZpbGVOYW1lKXtcbiAgICAgICAgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzID0gdGhpcy5QYXJhbWV0ZXJJbml0aWFsaXplcih0aGlzLkxheWVyUnVubmVyLk5ldExheWVycyk7XG4gICAgICAgIGxldCBsb3NzZXMgPSBhd2FpdCB0aGlzLnRyYWluKG51bUVwb2NocywgYmF0Y2hTaXplKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlUGFyYW1zKHNhdmVGaWxlTmFtZSk7XG4gICAgICAgIHJldHVybiB7W3NhdmVGaWxlTmFtZV06IGxvc3Nlc307XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5zZW1ibGVUcmFpbmVyTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRW5zZW1ibGVUcmFpbmVyTWl4aW5zIH0gZnJvbSAnLi9lbnNlbWJsZVRyYWluZXIubWl4aW5zJzsgXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuc2VtYmxlTW9kZWxNaXhpbnMgfSBmcm9tICcuL2Vuc2VtYmxlTW9kZWwubWl4aW5zJzsgXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuc2VtYmxlRGVwbG95bWVudE1peGlucyB9IGZyb20gJy4vZW5zZW1ibGVEZXBsb3ltZW50Lm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVuc2VtYmxlRXZhbHVhdG9yTWl4aW5zIH0gZnJvbSAnLi9lbnNlbWJsZUV2YWx1YXRvci5taXhpbnMnOyAiLCJpbXBvcnQgeyBEYXRhU291cmNlTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5kYXRhc2V0cyc7XG5pbXBvcnQgeyBQcmVwcm9jZXNzaW5nTWl4aW5zLCBjYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtIH0gZnJvbSAnY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nJztcbmltcG9ydCB7IFRyYWluZXJNaXhpbnMsIEV2YWx1YXRvck1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQub3B0aW1pemVycyc7XG5pbXBvcnQgeyBNb2RlbE1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQubW9kZWxzJztcbmltcG9ydCB7IGNhdXNhbE5ldFJ1bm5lciwgTGF5ZXJSdW5uZXJNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmxheWVyJztcbmltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgY2F1c2FsTmV0RGVwbG95bWVudCwgRGVwbG95bWVudE1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQuZGVwbG95bWVudCc7XG5pbXBvcnQgeyB0ZXJtTG9nZ2VyLCBMb2dnZXJNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmxvZyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuaW1wb3J0IHsgRW5zZW1ibGVUcmFpbmVyTWl4aW5zLCBFbnNlbWJsZU1vZGVsTWl4aW5zLCBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgfSBmcm9tICcuL0Vuc2VtYmxlL2luZGV4Jztcbi8qKlxuICogVGhlIENhdXNhbE5ldCBjbGFzcyBpcyB0aGUgcHJlYnVpbHQgcGlwZWxpbmUgd2l0aCBtZXRob2RzIGZvciBcbiAqIHByb2Nlc3NpbmcgZGF0YS90cmFpbi9ldmFsdWF0ZS9kZXBsb3kvZW5zZW1ibGUgZGVwbG95XG4gKiB7IG1peFdpdGg6IFsgXG4gKiAgICAgICAgIERhdGFTb3VyY2VNaXhpbnMsXG4gKiAgICAgICAgIFByZXByb2Nlc3NpbmdNaXhpbnMsXG4gKiAgICAgICAgIExheWVyUnVubmVyTWl4aW5zLCBcbiAqICAgICAgICAgTW9kZWxNaXhpbnMsIFxuICogICAgICAgICBFdmFsdWF0b3JNaXhpbnMsXG4gKiAgICAgICAgIFRyYWluZXJNaXhpbnMsIFxuICogICAgICAgICBMb2dnZXJNaXhpbnMsXG4gKiAgICAgICAgIERlcGxveW1lbnRNaXhpbnMsXG4gKiAgICAgICAgIEVuc2VtYmxlVHJhaW5lck1peGlucyxcbiAqICAgICAgICAgRW5zZW1ibGVNb2RlbE1peGlucywgXG4gKiAgICAgICAgIEVuc2VtYmxlRGVwbG95bWVudE1peGlucyBdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRcbiAqIEBleHRlbmRzIHtUZW5zb3J9XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0L2Vuc2VtYmxlLmxvZ2lzdGljUmVncmVzc2lvbi5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0IGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsIFsgXG4gICAgICAgIERhdGFTb3VyY2VNaXhpbnMsXG4gICAgICAgIFByZXByb2Nlc3NpbmdNaXhpbnMsXG4gICAgICAgIExheWVyUnVubmVyTWl4aW5zLCBcbiAgICAgICAgTW9kZWxNaXhpbnMsIFxuICAgICAgICBFdmFsdWF0b3JNaXhpbnMsXG4gICAgICAgIFRyYWluZXJNaXhpbnMsIFxuICAgICAgICBMb2dnZXJNaXhpbnMsXG4gICAgICAgIERlcGxveW1lbnRNaXhpbnMsXG4gICAgICAgIEVuc2VtYmxlVHJhaW5lck1peGlucyxcbiAgICAgICAgRW5zZW1ibGVNb2RlbE1peGlucywgXG4gICAgICAgIEVuc2VtYmxlRGVwbG95bWVudE1peGlucyBdKXtcbiAgICAvKipcbiAgICAgKkNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ2F1c2FsTmV0LlxuICAgICAqIEBwYXJhbSB7IEZ1bmN0b3IgfSBmdW5jdG9yXG4gICAgICogQHBhcmFtIHsgTG9nIH0gbG9nZ2VyXG4gICAgICogQHBhcmFtIHsgRnVuY3RvciB9IHN0cmVhbVByZXByb2Nlc3NpbmdcbiAgICAgKiBAcGFyYW0geyBUZW5zb3IgfSBuZXRQYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHsgVGVuc29yIH0gbmV0UnVubmVyXG4gICAgICogQHBhcmFtIHsgRXZlbnQgfSBzdHJlYW1EZXBsb3ltZW50XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBmdW5jdG9yLCBsb2dnZXIsIHN0cmVhbVByZXByb2Nlc3NpbmcsIG5ldFJ1bm5lciwgc3RyZWFtRGVwbG95bWVudCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuRiA9IGZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICAgICAgdGhpcy5Mb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZyA9IHN0cmVhbVByZXByb2Nlc3Npbmc7XG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIgPSBuZXRSdW5uZXI7ICAgICAgICBcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50ID0gc3RyZWFtRGVwbG95bWVudDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyAgQ2F1c2FsTmV0KCAgZnVuY3RvciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1Mb2dnZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F1c2FsTmV0UnVubmVyLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F1c2FsTmV0RGVwbG95bWVudCApOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBGdW5jdG9yIGNsYXNzIHByb3ZpZGVzIGNvbW1vbiB1c2VkIGRhdGEgcHJvY2Vzc2luZyBtZXRob2RzIGZvciBwaXBlbGluZVxuICogQGNsYXNzIEZ1bmN0b3JcbiAqIEBleHRlbmRzIEJhc2VGdW5jdG9yXG4gKi9cbmNsYXNzIEZ1bmN0b3IgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBbXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRnVuY3RvcigpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0IH0gZnJvbSAnLi9jYXVzYWxOZXQnOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9kYXRhc2V0c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xheWVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbG9nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfb3B0aW1pemVyc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=