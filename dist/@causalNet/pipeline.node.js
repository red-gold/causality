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

/***/ "./packages/causality-deployment/dist/@causalNet/deployment.web.js":
/*!*************************************************************************!*\
  !*** ./packages/causality-deployment/dist/@causalNet/deployment.web.js ***!
  \*************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvY2F1c2FsTmV0RGVwbG95bWVudC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2Z1bmN0b3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXREZXBsb3ltZW50IiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJjb25zdHJ1Y3RvciIsImZ1bmN0b3IiLCJGIiwiUiIsIkNvcmVGdW5jdG9yIiwiRW1pdHRlciIsImVtaXR0ZXIiLCJkZXBsb3lFbWl0dGVyIiwiRXJyb3IiLCJMaXN0ZW5lciIsImxpc3RlbmVyIiwiZGVwbG95TGlzdGVuZXIiLCJvbiIsImluZmVyIiwiSW5mZXJlbmNlciIsImluZmVyZW5jZXIiLCJkZXBsb3lJbmZlcmVuY2VyIiwiZW1pdFZhbHVlIiwiaW5mZXJWYWx1ZSIsImVtaXQiLCJFbnNlbWJsZUluZmVyZW5jZXIiLCJlbnNlbWJsZUluZmVyZW5jZXIiLCJkZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIiLCJkZXBsb3kiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvdW50ZXIiLCJEZXBsb3ltZW50TWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJEZXBsb3ltZW50IiwiZGVwbG95bWVudCIsIk1vZGVsTGVuc2VzIiwiTW9kZWwiLCJUIiwiaW5wdXQiLCJQcmVkaWN0IiwiRW5jb2RlIiwiRGVjb2RlIiwiaW5wdXRUZW5zb3IiLCJ0ZW5zb3IiLCJhc1R5cGUiLCJyZXNoYXBlIiwicHJlZGljdFRlbnNvciIsImRhdGEiLCJlbmNvZGVUZW5zb3IiLCJkZWNvZGVUZW5zb3IiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsImdyb3VwRW5kIiwiRnVuY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztB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QTZCLEtBQUtBLFVBQWxDO0FBQ0EsU0FBS21DLE1BQUwsQ0FBWUUsUUFBWjtBQUNBLFdBQU9ILGNBQVA7QUFDSDs7QUFFRCxRQUFNekIsTUFBTixHQUFjO0FBQ1YsV0FBTyxNQUFNLEtBQUtPLFVBQUwsQ0FBZ0JQLE1BQWhCLEVBQWI7QUFDSDs7QUF4RDBFLENBQS9FOztBQTJEZUssK0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFBQTtBQUFBO0FBQ2UsbUVBQUl3Qix1REFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvZGVwbG95bWVudC53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kZXBsb3ltZW50XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9kZXBsb3ltZW50XCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmltcG9ydCB7IHBsYXRmb3JtLCBhc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcblxuY2xhc3MgQ2F1c2FsTmV0RGVwbG95bWVudCBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoIEV2ZW50LCBbXSApe1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGZ1bmN0b3Ipe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLkYgPSBmdW5jdG9yO1xuICAgICAgICB0aGlzLlIgPSBmdW5jdG9yLkNvcmVGdW5jdG9yO1xuICAgIH1cblxuICAgIHNldCBFbWl0dGVyKGVtaXR0ZXIpe1xuICAgICAgICB0aGlzLmRlcGxveUVtaXR0ZXIgPSBlbWl0dGVyO1xuICAgIH1cblxuICAgIGdldCBFbWl0dGVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmRlcGxveUVtaXR0ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0VtaXR0ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveUVtaXR0ZXI7XG4gICAgfVxuXG4gICAgc2V0IExpc3RlbmVyKGxpc3RlbmVyKXtcbiAgICAgICAgdGhpcy5kZXBsb3lMaXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgICAgICB0aGlzLm9uKCdpbmZlcmVuY2VyJywgKGluZmVyKT0+e1xuICAgICAgICAgICAgdGhpcy5kZXBsb3lMaXN0ZW5lcihpbmZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm9uKCdlbnNlbWJsZUluZmVyZW5jZXInLCAoaW5mZXIpPT57XG4gICAgICAgICAgICB0aGlzLmRlcGxveUxpc3RlbmVyKGluZmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGdldCBMaXN0ZW5lcigpe1xuICAgICAgICBpZighdGhpcy5kZXBsb3lMaXN0ZW5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTGlzdGVuZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveUxpc3RlbmVyO1xuICAgIH1cblxuICAgIHNldCBJbmZlcmVuY2VyKGluZmVyZW5jZXIpe1xuICAgICAgICB0aGlzLmRlcGxveUluZmVyZW5jZXIgPSBpbmZlcmVuY2VyO1xuICAgICAgICB0aGlzLm9uKCdlbWl0dGVyJywgYXN5bmMgKGVtaXRWYWx1ZSk9PntcbiAgICAgICAgICAgIGxldCBpbmZlclZhbHVlID0gYXdhaXQgdGhpcy5kZXBsb3lJbmZlcmVuY2VyKGVtaXRWYWx1ZSk7XG4gICAgICAgICAgICBpZihpbmZlclZhbHVlICYmIGluZmVyVmFsdWUgIT09IHt9KXtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2luZmVyZW5jZXInLCBpbmZlclZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IEluZmVyZW5jZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95SW5mZXJlbmNlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignSW5mZXJlbmNlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95SW5mZXJlbmNlcjtcbiAgICB9XG5cbiAgICBzZXQgRW5zZW1ibGVJbmZlcmVuY2VyKGVuc2VtYmxlSW5mZXJlbmNlcil7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRlcGxveUVuc2VtYmxlSW5mZXJlbmNlciA9IGVuc2VtYmxlSW5mZXJlbmNlcjtcbiAgICAgICAgdGhpcy5vbignZW1pdHRlcicsIGFzeW5jIChlbWl0VmFsdWUpPT57XG4gICAgICAgICAgICBsZXQgaW5mZXJWYWx1ZSA9IGF3YWl0IHRoaXMuZGVwbG95RW5zZW1ibGVJbmZlcmVuY2VyKGVtaXRWYWx1ZSk7XG4gICAgICAgICAgICBpZihpbmZlclZhbHVlICYmIGluZmVyVmFsdWUgIT09IHt9KXtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vuc2VtYmxlSW5mZXJlbmNlcicsIGluZmVyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgRW5zZW1ibGVJbmZlcmVuY2VyKCl7XG4gICAgICAgIGlmKCF0aGlzLmRlcGxveUVuc2VtYmxlSW5mZXJlbmNlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRW5zZW1ibGVJbmZlcmVuY2VyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZXBsb3lFbnNlbWJsZUluZmVyZW5jZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVwbG95KCl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgbGV0IGVtaXRWYWx1ZSA9IGF3YWl0IHRoaXMuRW1pdHRlcigpO1xuICAgICAgICAgICAgd2hpbGUoZW1pdFZhbHVlICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2VtaXR0ZXInLCBlbWl0VmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgICAgICBlbWl0VmFsdWUgPSBhd2FpdCB0aGlzLkVtaXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc29sdmUoY291bnRlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldERlcGxveW1lbnQoZnVuY3Rvcik7IiwiY29uc3QgRGVwbG95bWVudE1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzIHtcbiAgIFxuICAgIHNldCBEZXBsb3ltZW50KGRlcGxveW1lbnQpe1xuICAgICAgICB0aGlzLmRlcGxveW1lbnQgPSBkZXBsb3ltZW50O1xuICAgIH1cblxuICAgIGdldCBEZXBsb3ltZW50KCl7XG4gICAgICAgIGlmKCF0aGlzLmRlcGxveW1lbnQpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2RlcGxveW1lbnQgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IEluZmVyZW5jZXIoKXtcbiAgICAgICAgY29uc3QgTW9kZWxMZW5zZXMgPSAoKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuTW9kZWw7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIHJldHVybiBhc3luYyAoaW5wdXQpPT57XG4gICAgICAgICAgICBsZXQgeyBQcmVkaWN0LCBFbmNvZGUsIERlY29kZSB9ID0gaW5wdXQ7XG4gICAgICAgICAgICBsZXQgaW5mZXIgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IE1vZGVsID0gTW9kZWxMZW5zZXMoKTtcbiAgICAgICAgICAgIGlmKFByZWRpY3Qpe1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKFByZWRpY3QpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IHByZWRpY3RUZW5zb3IgPSBNb2RlbC5QcmVkaWN0KGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgICAgICBpbmZlci5QcmVkaWN0ID0gYXdhaXQgcHJlZGljdFRlbnNvci5kYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihFbmNvZGUpe1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKEVuY29kZSkuYXNUeXBlKCdmbG9hdDMyJykucmVzaGFwZShbMSwgLTFdKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5jb2RlVGVuc29yID0gTW9kZWwuRW5jb2RlKGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgICAgICBpbmZlci5FbmNvZGUgPSBhd2FpdCBlbmNvZGVUZW5zb3IuZGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoRGVjb2RlKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihEZWNvZGUpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IGRlY29kZVRlbnNvciA9IE1vZGVsLkVuY29kZShpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICAgICAgaW5mZXIuRGVjb2RlID0gYXdhaXQgZGVjb2RlVGVuc29yLmRhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmZlcjtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgZGVwbG95bWVudCBieSBjb25maWcnKTtcbiAgICAgICAgY29uc3QgeyBFbWl0dGVyLCBMaXN0ZW5lciB9ID0gcGlwZWxpbmVDb25maWcuRGVwbG95bWVudDtcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50LkVtaXR0ZXIgPSBFbWl0dGVyO1xuICAgICAgICB0aGlzLkRlcGxveW1lbnQuTGlzdGVuZXIgPSBMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50LkluZmVyZW5jZXIgPSB0aGlzLkluZmVyZW5jZXI7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBwaXBlbGluZUNvbmZpZztcbiAgICB9XG5cbiAgICBhc3luYyBkZXBsb3koKXtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuRGVwbG95bWVudC5kZXBsb3koKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXBsb3ltZW50TWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldERlcGxveW1lbnQgfSBmcm9tICcuL2NhdXNhbE5ldERlcGxveW1lbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXBsb3ltZW50TWl4aW5zIH0gZnJvbSAnLi9kZXBsb3ltZW50Lm1peGlucyc7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./packages/causality-models/dist/@causalNet/models.web.js":
/*!*****************************************************************!*\
  !*** ./packages/causality-models/dist/@causalNet/models.web.js ***!
  \*****************************************************************/
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

/***/ "./src/SupervisedModels/baseSupervisedModel.js":
/*!*****************************************************!*\
  !*** ./src/SupervisedModels/baseSupervisedModel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);


class BaseSupervisedModel extends causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"] {
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

/* harmony default export */ __webpack_exports__["default"] = (BaseSupervisedModel);

/***/ }),

/***/ "./src/SupervisedModels/causalNetSupervisedModels.js":
/*!***********************************************************!*\
  !*** ./src/SupervisedModels/causalNetSupervisedModels.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleLableClassification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleLableClassification */ "./src/SupervisedModels/singleLableClassification.js");




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

/***/ "./src/SupervisedModels/index.js":
/*!***************************************!*\
  !*** ./src/SupervisedModels/index.js ***!
  \***************************************/
/*! exports provided: causalNetModels, BaseSupervisedModel, SingleLabelClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetSupervisedModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetSupervisedModels */ "./src/SupervisedModels/causalNetSupervisedModels.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetModels", function() { return _causalNetSupervisedModels__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _baseSupervisedModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseSupervisedModel */ "./src/SupervisedModels/baseSupervisedModel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSupervisedModel", function() { return _baseSupervisedModel__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _singleLableClassification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleLableClassification */ "./src/SupervisedModels/singleLableClassification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleLabelClassification", function() { return _singleLableClassification__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/SupervisedModels/singleLableClassification.js":
/*!***********************************************************!*\
  !*** ./src/SupervisedModels/singleLableClassification.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSupervisedModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseSupervisedModel */ "./src/SupervisedModels/baseSupervisedModel.js");


class SingleLabelClassification extends _baseSupervisedModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetModels, BaseSupervisedModel, SingleLabelClassification, ModelMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SupervisedModels_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SupervisedModels/index */ "./src/SupervisedModels/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetModels", function() { return _SupervisedModels_index__WEBPACK_IMPORTED_MODULE_0__["causalNetModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSupervisedModel", function() { return _SupervisedModels_index__WEBPACK_IMPORTED_MODULE_0__["BaseSupervisedModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleLabelClassification", function() { return _SupervisedModels_index__WEBPACK_IMPORTED_MODULE_0__["SingleLabelClassification"]; });

/* harmony import */ var _model_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.mixins */ "./src/model.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelMixins", function() { return _model_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/model.mixins.js":
/*!*****************************!*\
  !*** ./src/model.mixins.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const UnSupervisedModelsMixins = BasePipelineClass => class extends BasePipelineClass {
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

/* harmony default export */ __webpack_exports__["default"] = (UnSupervisedModelsMixins);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9iYXNlU3VwZXJ2aXNlZE1vZGVsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL1N1cGVydmlzZWRNb2RlbHMvY2F1c2FsTmV0U3VwZXJ2aXNlZE1vZGVscy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9TdXBlcnZpc2VkTW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL1N1cGVydmlzZWRNb2RlbHMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9tb2RlbC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJCYXNlU3VwZXJ2aXNlZE1vZGVsIiwiVGVuc29yIiwiY29uc3RydWN0b3IiLCJtb2RlbE5hbWUiLCJMYXllclJ1bm5lciIsInJ1bm5lciIsIkVycm9yIiwiZml0IiwibG9zcyIsInByZWRpY3QiLCJvbmVIb3RQcmVkaWN0IiwiQ2F1c2FsTmV0TW9kZWxzIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiY2xhc3NpZmljYXRpb24iLCJudW1DbGFzcyIsIm1vZGVsIiwiU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiIsImxheWVyUnVubmVyIiwiUHJlZGljdG9yIiwiRml0IiwiaW5wdXRUZW5zb3IiLCJvdXRQdXRUZW5zb3IiLCJsb2dQcm9iIiwic3ViIiwibG9nU3VtRXhwIiwiUHJlZGljdCIsInByZWRpY3RlZENsYXNzIiwiYXJnTWF4IiwiT25lSG90UHJlZGljdCIsIlQiLCJvbmVIb3QiLCJMb3NzIiwibGFiZWxUZW5zb3IiLCJsaWtlbGlob29kIiwibmVnIiwibXVsIiwic3VtIiwibWVhbiIsIlVuU3VwZXJ2aXNlZE1vZGVsc01peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiTG9zc01vZGVsIiwibmV0TW9kZWwiLCJGaXRNb2RlbCIsIk9uZUhvdFByZWRpY3RNb2RlbCIsIlByZWRpY3RNb2RlbCIsIkVuY29kZU1vZGVsIiwiRW5jb2RlIiwiRGVjb2RlTW9kZWwiLCJEZWNvZGUiLCJNb2RlbCIsInNldEJ5Q29uZmlnIiwicGlwZWxpbmVDb25maWciLCJMb2dnZXIiLCJncm91cEJlZ2luIiwiTmV0IiwiSlNPTiIsInN0cmluZ2xpZnkiLCJncm91cEVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FB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QUwsR0FBZ0IxQixLQUFoQjtBQUNIOztBQUVEbUMsYUFBVyxDQUFDQyxjQUFELEVBQWdCO0FBQ3ZCLFFBQUcsTUFBTUQsV0FBVCxFQUFxQjtBQUNqQixZQUFNQSxXQUFOLENBQWtCQyxjQUFsQjtBQUNIOztBQUNELFNBQUtDLE1BQUwsQ0FBWUMsVUFBWixDQUF1QixxQkFBdkI7QUFDQSxVQUFNO0FBQUVKO0FBQUYsUUFBWUUsY0FBYyxDQUFDRyxHQUFqQzs7QUFDQSxRQUFHLENBQUNMLEtBQUosRUFBVTtBQUNOLFlBQU01QyxLQUFLLENBQUUsdUJBQXNCa0QsSUFBSSxDQUFDQyxVQUFMLENBQWdCTCxjQUFoQixDQUFnQyxFQUF4RCxDQUFYO0FBQ0g7O0FBQ0RGLFNBQUssQ0FBQzlDLFdBQU4sR0FBb0IsS0FBS0EsV0FBekI7QUFDQSxTQUFLOEMsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0csTUFBTCxDQUFZSyxRQUFaO0FBQ0g7O0FBcEVpRixDQUF0Rjs7QUF1RWVuQix1RkFBZixFOzs7Ozs7Ozs7OztBQ3ZFQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L21vZGVscy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5jbGFzcyBCYXNlU3VwZXJ2aXNlZE1vZGVsIGV4dGVuZHMgVGVuc29ye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kZWxOYW1lID0gJyc7XG4gICAgfVxuXG4gICAgc2V0IExheWVyUnVubmVyKHJ1bm5lcil7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBnZXQgTGF5ZXJSdW5uZXIoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGZpdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbG9zcygpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcHJlZGljdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIG9uZUhvdFByZWRpY3QoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVN1cGVydmlzZWRNb2RlbDsiLCJpbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiB9IGZyb20gJy4vc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbic7XG5jbGFzcyBDYXVzYWxOZXRNb2RlbHMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKCBUZW5zb3IsIFtdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgXG4gICAgY2xhc3NpZmljYXRpb24obnVtQ2xhc3Mpe1xuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24obnVtQ2xhc3MpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbDtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TW9kZWxzKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRNb2RlbHMgfSBmcm9tICcuL2NhdXNhbE5ldFN1cGVydmlzZWRNb2RlbHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNlU3VwZXJ2aXNlZE1vZGVsIH0gZnJvbSAnLi9iYXNlU3VwZXJ2aXNlZE1vZGVsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiB9IGZyb20gJy4vc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbic7XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VTdXBlcnZpc2VkTW9kZWwgfSBmcm9tICcuL2Jhc2VTdXBlcnZpc2VkTW9kZWwnO1xuXG5jbGFzcyBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIGV4dGVuZHMgQmFzZVN1cGVydmlzZWRNb2RlbHtcbiAgICBjb25zdHJ1Y3RvcihudW1DbGFzcyl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmKG51bUNsYXNzID4gMCl7XG4gICAgICAgICAgICB0aGlzLm51bUNsYXNzID0gbnVtQ2xhc3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgbnVtY2xhc3MsIGdldCAke251bUNsYXNzfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IExheWVyUnVubmVyKGxheWVyUnVubmVyKXtcbiAgICAgICAgbGV0IHsgUHJlZGljdG9yIH0gPSBsYXllclJ1bm5lcjtcbiAgICAgICAgdGhpcy5ydW5uZXIgPSB7IFByZWRpY3RvciB9O1xuICAgIH1cblxuICAgIGdldCBMYXllclJ1bm5lcigpe1xuICAgICAgICBpZighdGhpcy5ydW5uZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3J1bm5lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucnVubmVyO1xuICAgIH1cbiAgICBcbiAgICBnZXQgRml0KCl7XG4gICAgICAgIGNvbnN0IHsgUHJlZGljdG9yIH0gPSB0aGlzLkxheWVyUnVubmVyO1xuICAgICAgICByZXR1cm4gKGlucHV0VGVuc29yKT0+e1xuICAgICAgICAgICAgbGV0IG91dFB1dFRlbnNvciA9IFByZWRpY3RvcihpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IG91dFB1dFRlbnNvci5zdWIob3V0UHV0VGVuc29yLmxvZ1N1bUV4cCgxLCB0cnVlKSk7XG4gICAgICAgICAgICByZXR1cm4gbG9nUHJvYjtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IFByZWRpY3QoKXtcbiAgICAgICAgY29uc3QgRml0ID0gdGhpcy5GaXQ7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IpPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgICAgICAgIHJldHVybiBwcmVkaWN0ZWRDbGFzcztcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgT25lSG90UHJlZGljdCgpe1xuICAgICAgICBjb25zdCBQcmVkaWN0ID0gdGhpcy5QcmVkaWN0O1xuICAgICAgICByZXR1cm4gKGlucHV0VGVuc29yKT0+e1xuICAgICAgICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gUHJlZGljdChpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgb25lSG90UHJlZGljdCA9IHRoaXMuVC5vbmVIb3QocHJlZGljdGVkQ2xhc3MsIHRoaXMubnVtQ2xhc3MpO1xuICAgICAgICAgICAgcmV0dXJuIG9uZUhvdFByZWRpY3Q7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCBMb3NzKCl7XG4gICAgICAgIGNvbnN0IEZpdCA9IHRoaXMuRml0O1xuICAgICAgICByZXR1cm4gKGlucHV0VGVuc29yLCBsYWJlbFRlbnNvcik9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsaWtlbGlob29kID0gbG9nUHJvYi5uZWcoKS5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IGxvc3MgPSBsaWtlbGlob29kLnN1bSgxKS5tZWFuKCk7XG4gICAgICAgICAgICByZXR1cm4gbG9zcztcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uOyIsImV4cG9ydCB7IGNhdXNhbE5ldE1vZGVscywgXG4gICAgICAgICBCYXNlU3VwZXJ2aXNlZE1vZGVsLCBcbiAgICAgICAgIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL1N1cGVydmlzZWRNb2RlbHMvaW5kZXgnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RlbE1peGlucyB9IGZyb20gJy4vbW9kZWwubWl4aW5zJztcbiIsImNvbnN0IFVuU3VwZXJ2aXNlZE1vZGVsc01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIGdldCBMb3NzTW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5Mb3NzO1xuICAgIH1cblxuICAgIGdldCBGaXRNb2RlbCgpe1xuICAgICAgICBpZighdGhpcy5uZXRNb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkZpdDtcbiAgICB9XG4gICAgXG4gICAgZ2V0IE9uZUhvdFByZWRpY3RNb2RlbCgpe1xuICAgICAgICBpZighdGhpcy5uZXRNb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLk9uZUhvdFByZWRpY3Q7XG4gICAgfVxuXG4gICAgZ2V0IFByZWRpY3RNb2RlbCgpe1xuICAgICAgICBpZighdGhpcy5uZXRNb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLlByZWRpY3Q7XG4gICAgfVxuXG4gICAgZ2V0IEVuY29kZU1vZGVsKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldE1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuRW5jb2RlO1xuICAgIH1cblxuICAgIGdldCBEZWNvZGVNb2RlbCgpe1xuICAgICAgICBpZighdGhpcy5uZXRNb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkRlY29kZTtcbiAgICB9XG5cblxuICAgIGdldCBNb2RlbCgpe1xuICAgICAgICBpZighdGhpcy5uZXRNb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldE1vZGVsO1xuICAgIH1cbiAgICBcblxuICAgIHNldCBNb2RlbChtb2RlbCl7ICAgICAgICBcbiAgICAgICAgdGhpcy5uZXRNb2RlbCA9IG1vZGVsO1xuICAgIH1cblxuICAgIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgaWYoc3VwZXIuc2V0QnlDb25maWcpe1xuICAgICAgICAgICAgc3VwZXIuc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3NldCBNb2RlbCBieSBjb25maWcnKTtcbiAgICAgICAgY29uc3QgeyBNb2RlbCB9ID0gcGlwZWxpbmVDb25maWcuTmV0O1xuICAgICAgICBpZighTW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE1vZGVsIGlzIG5vdCBzZXQgaW4gJHtKU09OLnN0cmluZ2xpZnkocGlwZWxpbmVDb25maWcpfWApO1xuICAgICAgICB9XG4gICAgICAgIE1vZGVsLkxheWVyUnVubmVyID0gdGhpcy5MYXllclJ1bm5lcjtcbiAgICAgICAgdGhpcy5Nb2RlbCA9IE1vZGVsO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVuU3VwZXJ2aXNlZE1vZGVsc01peGlucztcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=

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
/* harmony import */ var causal_net_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.models */ "./packages/causality-models/dist/@causalNet/models.web.js");
/* harmony import */ var causal_net_models__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_models__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var causal_net_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! causal-net.layer */ "causal-net.layer");
/* harmony import */ var causal_net_layer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(causal_net_layer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var causal_net_deployment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! causal-net.deployment */ "./packages/causality-deployment/dist/@causalNet/deployment.web.js");
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
 * @extends { Tensor }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9wYWNrYWdlcy9jYXVzYWxpdHktZGVwbG95bWVudC9kaXN0L0BjYXVzYWxOZXQvZGVwbG95bWVudC53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3BhY2thZ2VzL2NhdXNhbGl0eS1tb2RlbHMvZGlzdC9AY2F1c2FsTmV0L21vZGVscy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9FbnNlbWJsZS9lbnNlbWJsZURlcGxveW1lbnQubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvZW5zZW1ibGVFdmFsdWF0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvZW5zZW1ibGVNb2RlbC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9FbnNlbWJsZS9lbnNlbWJsZVRyYWluZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvRW5zZW1ibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxOZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmRhdGFzZXRzXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQubGF5ZXJcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5sb2dcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5vcHRpbWl6ZXJzXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJFbnNlbWJsZUluZmVyZW5jZXIiLCJNb2RlbExlbnNlcyIsIkVuc2VtYmxlUHJlZGljdCIsIkVuc2VtYmxlTW9kZWxQcmVkaWN0IiwiVCIsImlucHV0IiwiaW5mZXIiLCJpbnB1dFRlbnNvciIsInRlbnNvciIsImFzVHlwZSIsInJlc2hhcGUiLCJwcmVkaWN0VGVuc29yIiwiZGF0YSIsInNldEJ5Q29uZmlnIiwicGlwZWxpbmVDb25maWciLCJMb2dnZXIiLCJncm91cEJlZ2luIiwiRGVwbG95bWVudCIsImdyb3VwRW5kIiwiZGVwbG95IiwiRW5zZW1ibGVFdmFsdWF0b3JNaXhpbnMiLCJlbnNlbWJsZVRlc3QiLCJiYXRjaFNpemUiLCJtZXRob2QiLCJFcnJvciIsIkVuc2VtYmxlTW9kZWxNaXhpbnMiLCJGaXRNb2RlbCIsIkVuc2VtYmxlTW9kZWxzIiwiQmFnZ2luZyIsInByb2JGaXRzIiwibW9kZWwiLCJsb2FkUGFyYW1zIiwicHJvYiIsImV4cCIsInB1c2giLCJtZWFuUHJvYiIsInN0YWNrIiwibWVhbiIsImFyZ01heCIsIm1vZGVsaXN0IiwiZW5zZW1ibGVNb2RlbHMiLCJFbnNlbWJsZVRyYWluZXJNaXhpbnMiLCJlbnNlbWJsZVRyYWluIiwibnVtRXBvY2hzIiwic2F2ZUZpbGVOYW1lIiwiTGF5ZXJSdW5uZXIiLCJOZXRQYXJhbWV0ZXJzIiwiUGFyYW1ldGVySW5pdGlhbGl6ZXIiLCJOZXRMYXllcnMiLCJsb3NzZXMiLCJ0cmFpbiIsInNhdmVQYXJhbXMiLCJDYXVzYWxOZXQiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJUZW5zb3IiLCJEYXRhU291cmNlTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ01peGlucyIsIkxheWVyUnVubmVyTWl4aW5zIiwiTW9kZWxNaXhpbnMiLCJFdmFsdWF0b3JNaXhpbnMiLCJUcmFpbmVyTWl4aW5zIiwiTG9nZ2VyTWl4aW5zIiwiRGVwbG95bWVudE1peGlucyIsImNvbnN0cnVjdG9yIiwiZnVuY3RvciIsImxvZ2dlciIsInN0cmVhbVByZXByb2Nlc3NpbmciLCJuZXRSdW5uZXIiLCJzdHJlYW1EZXBsb3ltZW50IiwiRiIsIlIiLCJDb3JlRnVuY3RvciIsIlByZXByb2Nlc3NpbmciLCJ0ZXJtTG9nZ2VyIiwiY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSIsImNhdXNhbE5ldFJ1bm5lciIsImNhdXNhbE5ldERlcGxveW1lbnQiLCJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJLElBQXlEO0FBQzdELDJCQUEyQixtQkFBTyxDQUFDLHdDQUFpQixHQUFHLG1CQUFPLENBQUMsMENBQWtCO0FBQ2pGLE1BQU0sRUFLdUY7QUFDN0YsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQ0FBZ0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGtCQUFrQjtBQUNsRjtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlDQUFpQztBQUNsRix3SEFBd0gsbUJBQW1CLEVBQUU7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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RDs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L3BpcGVsaW5lLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmRhdGFzZXRzXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sYXllclwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5vcHRpbWl6ZXJzXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LmRhdGFzZXRzXCIsIFwiY2F1c2FsLW5ldC5sYXllclwiLCBcImNhdXNhbC1uZXQubG9nXCIsIFwiY2F1c2FsLW5ldC5vcHRpbWl6ZXJzXCIsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5kYXRhc2V0c1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubGF5ZXJcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxvZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQub3B0aW1pemVyc1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvcGlwZWxpbmVcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmRhdGFzZXRzXCJdLCByb290W1wiY2F1c2FsLW5ldC5sYXllclwiXSwgcm9vdFtcImNhdXNhbC1uZXQubG9nXCJdLCByb290W1wiY2F1c2FsLW5ldC5vcHRpbWl6ZXJzXCJdLCByb290W1wiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfZGF0YXNldHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xheWVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sb2dfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X29wdGltaXplcnNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RlcGxveW1lbnRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RlcGxveW1lbnRcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vc3JjL2NhdXNhbE5ldERlcGxveW1lbnQuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jYXVzYWxOZXREZXBsb3ltZW50LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQuY29yZSAqLyBcImNhdXNhbC1uZXQuY29yZVwiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Z1bmN0b3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZnVuY3RvciAqLyBcIi4vc3JjL2Z1bmN0b3IuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC51dGlscyAqLyBcImNhdXNhbC1uZXQudXRpbHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyk7XG5cblxuXG5cbmNsYXNzIENhdXNhbE5ldERlcGxveW1lbnQgZXh0ZW5kcyBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJwbGF0Zm9ybVwiXS5taXhXaXRoKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRXZlbnRcIl0sIFtdKSB7XG4gIGNvbnN0cnVjdG9yKGZ1bmN0b3IpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuRiA9IGZ1bmN0b3I7XG4gICAgdGhpcy5SID0gZnVuY3Rvci5Db3JlRnVuY3RvcjtcbiAgfVxuXG4gIHNldCBFbWl0dGVyKGVtaXR0ZXIpIHtcbiAgICB0aGlzLmRlcGxveUVtaXR0ZXIgPSBlbWl0dGVyO1xuICB9XG5cbiAgZ2V0IEVtaXR0ZXIoKSB7XG4gICAgaWYgKCF0aGlzLmRlcGxveUVtaXR0ZXIpIHtcbiAgICAgIHRocm93IEVycm9yKCdFbWl0dGVyIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZXBsb3lFbWl0dGVyO1xuICB9XG5cbiAgc2V0IExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgdGhpcy5kZXBsb3lMaXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgIHRoaXMub24oJ2luZmVyZW5jZXInLCBpbmZlciA9PiB7XG4gICAgICB0aGlzLmRlcGxveUxpc3RlbmVyKGluZmVyKTtcbiAgICB9KTtcbiAgICB0aGlzLm9uKCdlbnNlbWJsZUluZmVyZW5jZXInLCBpbmZlciA9PiB7XG4gICAgICB0aGlzLmRlcGxveUxpc3RlbmVyKGluZmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBMaXN0ZW5lcigpIHtcbiAgICBpZiAoIXRoaXMuZGVwbG95TGlzdGVuZXIpIHtcbiAgICAgIHRocm93IEVycm9yKCdMaXN0ZW5lciBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGVwbG95TGlzdGVuZXI7XG4gIH1cblxuICBzZXQgSW5mZXJlbmNlcihpbmZlcmVuY2VyKSB7XG4gICAgdGhpcy5kZXBsb3lJbmZlcmVuY2VyID0gaW5mZXJlbmNlcjtcbiAgICB0aGlzLm9uKCdlbWl0dGVyJywgYXN5bmMgZW1pdFZhbHVlID0+IHtcbiAgICAgIGxldCBpbmZlclZhbHVlID0gYXdhaXQgdGhpcy5kZXBsb3lJbmZlcmVuY2VyKGVtaXRWYWx1ZSk7XG5cbiAgICAgIGlmIChpbmZlclZhbHVlICYmIGluZmVyVmFsdWUgIT09IHt9KSB7XG4gICAgICAgIHRoaXMuZW1pdCgnaW5mZXJlbmNlcicsIGluZmVyVmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IEluZmVyZW5jZXIoKSB7XG4gICAgaWYgKCF0aGlzLmRlcGxveUluZmVyZW5jZXIpIHtcbiAgICAgIHRocm93IEVycm9yKCdJbmZlcmVuY2VyIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZXBsb3lJbmZlcmVuY2VyO1xuICB9XG5cbiAgc2V0IEVuc2VtYmxlSW5mZXJlbmNlcihlbnNlbWJsZUluZmVyZW5jZXIpIHtcbiAgICB0aGlzLmRlcGxveUVuc2VtYmxlSW5mZXJlbmNlciA9IGVuc2VtYmxlSW5mZXJlbmNlcjtcbiAgICB0aGlzLm9uKCdlbWl0dGVyJywgYXN5bmMgZW1pdFZhbHVlID0+IHtcbiAgICAgIGxldCBpbmZlclZhbHVlID0gYXdhaXQgdGhpcy5kZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIoZW1pdFZhbHVlKTtcblxuICAgICAgaWYgKGluZmVyVmFsdWUgJiYgaW5mZXJWYWx1ZSAhPT0ge30pIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlbnNlbWJsZUluZmVyZW5jZXInLCBpbmZlclZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBFbnNlbWJsZUluZmVyZW5jZXIoKSB7XG4gICAgaWYgKCF0aGlzLmRlcGxveUVuc2VtYmxlSW5mZXJlbmNlcikge1xuICAgICAgdGhyb3cgRXJyb3IoJ0Vuc2VtYmxlSW5mZXJlbmNlciBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGVwbG95RW5zZW1ibGVJbmZlcmVuY2VyO1xuICB9XG5cbiAgYXN5bmMgZGVwbG95KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICBsZXQgZW1pdFZhbHVlID0gYXdhaXQgdGhpcy5FbWl0dGVyKCk7XG5cbiAgICAgIHdoaWxlIChlbWl0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlbWl0dGVyJywgZW1pdFZhbHVlKTtcbiAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICBlbWl0VmFsdWUgPSBhd2FpdCB0aGlzLkVtaXR0ZXIoKTtcbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZShjb3VudGVyKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAobmV3IENhdXNhbE5ldERlcGxveW1lbnQoX2Z1bmN0b3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0pKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmNvbnN0IERlcGxveW1lbnRNaXhpbnMgPSBCYXNlUGlwZWxpbmVDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzIHtcbiAgc2V0IERlcGxveW1lbnQoZGVwbG95bWVudCkge1xuICAgIHRoaXMuZGVwbG95bWVudCA9IGRlcGxveW1lbnQ7XG4gIH1cblxuICBnZXQgRGVwbG95bWVudCgpIHtcbiAgICBpZiAoIXRoaXMuZGVwbG95bWVudCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ2RlcGxveW1lbnQgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlcGxveW1lbnQ7XG4gIH1cblxuICBnZXQgSW5mZXJlbmNlcigpIHtcbiAgICBjb25zdCBNb2RlbExlbnNlcyA9ICgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLk1vZGVsO1xuICAgIH07XG5cbiAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgIHJldHVybiBhc3luYyBpbnB1dCA9PiB7XG4gICAgICBsZXQge1xuICAgICAgICBQcmVkaWN0LFxuICAgICAgICBFbmNvZGUsXG4gICAgICAgIERlY29kZVxuICAgICAgfSA9IGlucHV0O1xuICAgICAgbGV0IGluZmVyID0ge307XG4gICAgICBjb25zdCBNb2RlbCA9IE1vZGVsTGVuc2VzKCk7XG5cbiAgICAgIGlmIChQcmVkaWN0KSB7XG4gICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKFByZWRpY3QpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgIGxldCBwcmVkaWN0VGVuc29yID0gTW9kZWwuUHJlZGljdChpbnB1dFRlbnNvcik7XG4gICAgICAgIGluZmVyLlByZWRpY3QgPSBhd2FpdCBwcmVkaWN0VGVuc29yLmRhdGEoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEVuY29kZSkge1xuICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihFbmNvZGUpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgIGxldCBlbmNvZGVUZW5zb3IgPSBNb2RlbC5FbmNvZGUoaW5wdXRUZW5zb3IpO1xuICAgICAgICBpbmZlci5FbmNvZGUgPSBhd2FpdCBlbmNvZGVUZW5zb3IuZGF0YSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoRGVjb2RlKSB7XG4gICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKERlY29kZSkuYXNUeXBlKCdmbG9hdDMyJykucmVzaGFwZShbMSwgLTFdKTtcbiAgICAgICAgbGV0IGRlY29kZVRlbnNvciA9IE1vZGVsLkVuY29kZShpbnB1dFRlbnNvcik7XG4gICAgICAgIGluZmVyLkRlY29kZSA9IGF3YWl0IGRlY29kZVRlbnNvci5kYXRhKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmZlcjtcbiAgICB9O1xuICB9XG5cbiAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpIHtcbiAgICBpZiAoc3VwZXIuc2V0QnlDb25maWcpIHtcbiAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICB9XG5cbiAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgZGVwbG95bWVudCBieSBjb25maWcnKTtcbiAgICBjb25zdCB7XG4gICAgICBFbWl0dGVyLFxuICAgICAgTGlzdGVuZXJcbiAgICB9ID0gcGlwZWxpbmVDb25maWcuRGVwbG95bWVudDtcbiAgICB0aGlzLkRlcGxveW1lbnQuRW1pdHRlciA9IEVtaXR0ZXI7XG4gICAgdGhpcy5EZXBsb3ltZW50Lkxpc3RlbmVyID0gTGlzdGVuZXI7XG4gICAgdGhpcy5EZXBsb3ltZW50LkluZmVyZW5jZXIgPSB0aGlzLkluZmVyZW5jZXI7XG4gICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICByZXR1cm4gcGlwZWxpbmVDb25maWc7XG4gIH1cblxuICBhc3luYyBkZXBsb3koKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuRGVwbG95bWVudC5kZXBsb3koKTtcbiAgfVxuXG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKERlcGxveW1lbnRNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9mdW5jdG9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZnVuY3Rvci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKG5ldyBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkZ1bmN0b3JcIl0oKSk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGNhdXNhbE5ldERlcGxveW1lbnQsIERlcGxveW1lbnRNaXhpbnMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NhdXNhbE5ldERlcGxveW1lbnRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2F1c2FsTmV0RGVwbG95bWVudCAqLyBcIi4vc3JjL2NhdXNhbE5ldERlcGxveW1lbnQuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJjYXVzYWxOZXREZXBsb3ltZW50XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2NhdXNhbE5ldERlcGxveW1lbnRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2RlcGxveW1lbnRfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2RlcGxveW1lbnQubWl4aW5zICovIFwiLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJEZXBsb3ltZW50TWl4aW5zXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2RlcGxveW1lbnRfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC5jb3JlXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXztcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMlJsY0d4dmVXMWxiblF2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdlpHVndiRzk1YldWdWRDOTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDSXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJSbGNHeHZlVzFsYm5RdkxpOXpjbU12WTJGMWMyRnNUbVYwUkdWd2JHOTViV1Z1ZEM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJSbGNHeHZlVzFsYm5RdkxpOXpjbU12WkdWd2JHOTViV1Z1ZEM1dGFYaHBibk11YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlrWlhCc2IzbHRaVzUwTHk0dmMzSmpMMloxYm1OMGIzSXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOWtaWEJzYjNsdFpXNTBMeTR2YzNKakwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2WkdWd2JHOTViV1Z1ZEM5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aUlpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2WkdWd2JHOTViV1Z1ZEM5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpSmRMQ0p1WVcxbGN5STZXeUpEWVhWellXeE9aWFJFWlhCc2IzbHRaVzUwSWl3aWNHeGhkR1p2Y20waUxDSnRhWGhYYVhSb0lpd2lSWFpsYm5RaUxDSmpiMjV6ZEhKMVkzUnZjaUlzSW1aMWJtTjBiM0lpTENKR0lpd2lVaUlzSWtOdmNtVkdkVzVqZEc5eUlpd2lSVzFwZEhSbGNpSXNJbVZ0YVhSMFpYSWlMQ0prWlhCc2IzbEZiV2wwZEdWeUlpd2lSWEp5YjNJaUxDSk1hWE4wWlc1bGNpSXNJbXhwYzNSbGJtVnlJaXdpWkdWd2JHOTVUR2x6ZEdWdVpYSWlMQ0p2YmlJc0ltbHVabVZ5SWl3aVNXNW1aWEpsYm1ObGNpSXNJbWx1Wm1WeVpXNWpaWElpTENKa1pYQnNiM2xKYm1abGNtVnVZMlZ5SWl3aVpXMXBkRlpoYkhWbElpd2lhVzVtWlhKV1lXeDFaU0lzSW1WdGFYUWlMQ0pGYm5ObGJXSnNaVWx1Wm1WeVpXNWpaWElpTENKbGJuTmxiV0pzWlVsdVptVnlaVzVqWlhJaUxDSmtaWEJzYjNsRmJuTmxiV0pzWlVsdVptVnlaVzVqWlhJaUxDSmtaWEJzYjNraUxDSlFjbTl0YVhObElpd2ljbVZ6YjJ4MlpTSXNJbkpsYW1WamRDSXNJbU52ZFc1MFpYSWlMQ0pFWlhCc2IzbHRaVzUwVFdsNGFXNXpJaXdpUW1GelpWQnBjR1ZzYVc1bFEyeGhjM01pTENKRVpYQnNiM2x0Wlc1MElpd2laR1Z3Ykc5NWJXVnVkQ0lzSWsxdlpHVnNUR1Z1YzJWeklpd2lUVzlrWld3aUxDSlVJaXdpYVc1d2RYUWlMQ0pRY21Wa2FXTjBJaXdpUlc1amIyUmxJaXdpUkdWamIyUmxJaXdpYVc1d2RYUlVaVzV6YjNJaUxDSjBaVzV6YjNJaUxDSmhjMVI1Y0dVaUxDSnlaWE5vWVhCbElpd2ljSEpsWkdsamRGUmxibk52Y2lJc0ltUmhkR0VpTENKbGJtTnZaR1ZVWlc1emIzSWlMQ0prWldOdlpHVlVaVzV6YjNJaUxDSnpaWFJDZVVOdmJtWnBaeUlzSW5CcGNHVnNhVzVsUTI5dVptbG5JaXdpVEc5bloyVnlJaXdpWjNKdmRYQkNaV2RwYmlJc0ltZHliM1Z3Ulc1a0lpd2lSblZ1WTNSdmNpSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RVFVRXdReXhuUTBGQlowTTdRVUZETVVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJkMFFzYTBKQlFXdENPMEZCUXpGRk8wRkJRMEVzZVVSQlFXbEVMR05CUVdNN1FVRkRMMFE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGNVF5eHBRMEZCYVVNN1FVRkRNVVVzZDBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzBGQlEzSkpPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTnNSa0U3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEUxQlFVMUJMRzFDUVVGT0xGTkJRV3REUXl4NVJFRkJVU3hEUVVGRFF5eFBRVUZVTEVOQlFXdENReXh4UkVGQmJFSXNSVUZCZVVJc1JVRkJla0lzUTBGQmJFTXNRMEZCSzBRN1FVRkZNMFJETEdGQlFWY3NRMEZCUTBNc1QwRkJSQ3hGUVVGVE8wRkJRMmhDTzBGQlEwRXNVMEZCUzBNc1EwRkJUQ3hIUVVGVFJDeFBRVUZVTzBGQlEwRXNVMEZCUzBVc1EwRkJUQ3hIUVVGVFJpeFBRVUZQTEVOQlFVTkhMRmRCUVdwQ08wRkJRMGc3TzBGQlJVUXNUVUZCU1VNc1QwRkJTaXhEUVVGWlF5eFBRVUZhTEVWQlFXOUNPMEZCUTJoQ0xGTkJRVXRETEdGQlFVd3NSMEZCY1VKRUxFOUJRWEpDTzBGQlEwZzdPMEZCUlVRc1RVRkJTVVFzVDBGQlNpeEhRVUZoTzBGQlExUXNVVUZCUnl4RFFVRkRMRXRCUVV0RkxHRkJRVlFzUlVGQmRVSTdRVUZEYmtJc1dVRkJUVU1zUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdEVMR0ZCUVZvN1FVRkRTRHM3UVVGRlJDeE5RVUZKUlN4UlFVRktMRU5CUVdGRExGRkJRV0lzUlVGQmMwSTdRVUZEYkVJc1UwRkJTME1zWTBGQlRDeEhRVUZ6UWtRc1VVRkJkRUk3UVVGRFFTeFRRVUZMUlN4RlFVRk1MRU5CUVZFc1dVRkJVaXhGUVVGMVFrTXNTMEZCUkN4SlFVRlRPMEZCUXpOQ0xGZEJRVXRHTEdOQlFVd3NRMEZCYjBKRkxFdEJRWEJDTzBGQlEwZ3NTMEZHUkR0QlFVZEJMRk5CUVV0RUxFVkJRVXdzUTBGQlVTeHZRa0ZCVWl4RlFVRXJRa01zUzBGQlJDeEpRVUZUTzBGQlEyNURMRmRCUVV0R0xHTkJRVXdzUTBGQmIwSkZMRXRCUVhCQ08wRkJRMGdzUzBGR1JEdEJRVWRJT3p0QlFVVkVMRTFCUVVsS0xGRkJRVW9zUjBGQll6dEJRVU5XTEZGQlFVY3NRMEZCUXl4TFFVRkxSU3hqUVVGVUxFVkJRWGRDTzBGQlEzQkNMRmxCUVUxSUxFdEJRVXNzUTBGQlF5eHhRa0ZCUkN4RFFVRllPMEZCUTBnN08wRkJRMFFzVjBGQlR5eExRVUZMUnl4alFVRmFPMEZCUTBnN08wRkJSVVFzVFVGQlNVY3NWVUZCU2l4RFFVRmxReXhWUVVGbUxFVkJRVEJDTzBGQlEzUkNMRk5CUVV0RExHZENRVUZNTEVkQlFYZENSQ3hWUVVGNFFqdEJRVU5CTEZOQlFVdElMRVZCUVV3c1EwRkJVU3hUUVVGU0xFVkJRVzFDTEUxQlFVOUxMRk5CUVZBc1NVRkJiVUk3UVVGRGJFTXNWVUZCU1VNc1ZVRkJWU3hIUVVGSExFMUJRVTBzUzBGQlMwWXNaMEpCUVV3c1EwRkJjMEpETEZOQlFYUkNMRU5CUVhaQ096dEJRVU5CTEZWQlFVZERMRlZCUVZVc1NVRkJTVUVzVlVGQlZTeExRVUZMTEVWQlFXaERMRVZCUVcxRE8wRkJReTlDTEdGQlFVdERMRWxCUVV3c1EwRkJWU3haUVVGV0xFVkJRWGRDUkN4VlFVRjRRanRCUVVOSU8wRkJRMG9zUzBGTVJEdEJRVTFJT3p0QlFVVkVMRTFCUVVsS0xGVkJRVW9zUjBGQlowSTdRVUZEV2l4UlFVRkhMRU5CUVVNc1MwRkJTMFVzWjBKQlFWUXNSVUZCTUVJN1FVRkRkRUlzV1VGQlRWSXNTMEZCU3l4RFFVRkRMSFZDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0UkxHZENRVUZhTzBGQlEwZzdPMEZCUlVRc1RVRkJTVWtzYTBKQlFVb3NRMEZCZFVKRExHdENRVUYyUWl4RlFVRXdRenRCUVVWMFF5eFRRVUZMUXl4M1FrRkJUQ3hIUVVGblEwUXNhMEpCUVdoRE8wRkJRMEVzVTBGQlMxUXNSVUZCVEN4RFFVRlJMRk5CUVZJc1JVRkJiVUlzVFVGQlQwc3NVMEZCVUN4SlFVRnRRanRCUVVOc1F5eFZRVUZKUXl4VlFVRlZMRWRCUVVjc1RVRkJUU3hMUVVGTFNTeDNRa0ZCVEN4RFFVRTRRa3dzVTBGQk9VSXNRMEZCZGtJN08wRkJRMEVzVlVGQlIwTXNWVUZCVlN4SlFVRkpRU3hWUVVGVkxFdEJRVXNzUlVGQmFFTXNSVUZCYlVNN1FVRkRMMElzWVVGQlMwTXNTVUZCVEN4RFFVRlZMRzlDUVVGV0xFVkJRV2REUkN4VlFVRm9RenRCUVVOSU8wRkJRMG9zUzBGTVJEdEJRVTFJT3p0QlFVVkVMRTFCUVVsRkxHdENRVUZLTEVkQlFYZENPMEZCUTNCQ0xGRkJRVWNzUTBGQlF5eExRVUZMUlN4M1FrRkJWQ3hGUVVGclF6dEJRVU01UWl4WlFVRk5aQ3hMUVVGTExFTkJRVU1zSzBKQlFVUXNRMEZCV0R0QlFVTklPenRCUVVORUxGZEJRVThzUzBGQlMyTXNkMEpCUVZvN1FVRkRTRHM3UVVGRlJDeFJRVUZOUXl4TlFVRk9MRWRCUVdNN1FVRkRWaXhYUVVGUExFbEJRVWxETEU5QlFVb3NRMEZCV1N4UFFVRlBReXhQUVVGUUxFVkJRV2RDUXl4TlFVRm9RaXhMUVVGNVFqdEJRVU40UXl4VlFVRkpReXhQUVVGUExFZEJRVWNzUTBGQlpEdEJRVU5CTEZWQlFVbFdMRk5CUVZNc1IwRkJSeXhOUVVGTkxFdEJRVXRhTEU5QlFVd3NSVUZCZEVJN08wRkJRMEVzWVVGQlRWa3NVMEZCVXl4TFFVRkxMRWxCUVhCQ0xFVkJRWGxDTzBGQlEzSkNMR0ZCUVV0RkxFbEJRVXdzUTBGQlZTeFRRVUZXTEVWQlFYRkNSaXhUUVVGeVFqdEJRVU5CVlN4bFFVRlBMRWxCUVVrc1EwRkJXRHRCUVVOQlZpeHBRa0ZCVXl4SFFVRkhMRTFCUVUwc1MwRkJTMW9zVDBGQlRDeEZRVUZzUWp0QlFVTklPenRCUVVORWIwSXNZVUZCVHl4RFFVRkRSU3hQUVVGRUxFTkJRVkE3UVVGRFNDeExRVlJOTEVOQlFWQTdRVUZWU0RzN1FVRnNSakJFT3p0QlFYRkdhRVFzYlVWQlFVa3ZRaXh0UWtGQlNpeERRVUYzUWtzc1owUkJRWGhDTEVOQlFXWXNSVHM3T3pzN096czdPenM3TzBGRGVrWkJPMEZCUVVFc1RVRkJUVEpDTEdkQ1FVRm5RaXhIUVVGSlF5eHBRa0ZCUkN4SlFVRnpRaXhqUVVGalFTeHBRa0ZCWkN4RFFVRm5RenRCUVVVelJTeE5RVUZKUXl4VlFVRktMRU5CUVdWRExGVkJRV1lzUlVGQk1FSTdRVUZEZEVJc1UwRkJTMEVzVlVGQlRDeEhRVUZyUWtFc1ZVRkJiRUk3UVVGRFNEczdRVUZGUkN4TlFVRkpSQ3hWUVVGS0xFZEJRV2RDTzBGQlExb3NVVUZCUnl4RFFVRkRMRXRCUVV0RExGVkJRVlFzUlVGQmIwSTdRVUZEYUVJc1dVRkJUWFpDTEV0QlFVc3NRMEZCUXl4MVFrRkJSQ3hEUVVGWU8wRkJRMGc3TzBGQlEwUXNWMEZCVHl4TFFVRkxkVUlzVlVGQldqdEJRVU5JT3p0QlFVVkVMRTFCUVVscVFpeFZRVUZLTEVkQlFXZENPMEZCUTFvc1ZVRkJUV3RDTEZkQlFWY3NSMEZCUnl4TlFVRkpPMEZCUTNCQ0xHRkJRVThzUzBGQlMwTXNTMEZCV2p0QlFVTklMRXRCUmtRN08wRkJSMEVzVlVGQlRVTXNRMEZCUXl4SFFVRkhMRXRCUVV0QkxFTkJRV1k3UVVGRFFTeFhRVUZQTEUxQlFVOURMRXRCUVZBc1NVRkJaVHRCUVVOc1FpeFZRVUZKTzBGQlFVVkRMR1ZCUVVZN1FVRkJWME1zWTBGQldEdEJRVUZ0UWtNN1FVRkJia0lzVlVGQk9FSklMRXRCUVd4RE8wRkJRMEVzVlVGQlNYUkNMRXRCUVVzc1IwRkJSeXhGUVVGYU8wRkJRMEVzV1VGQlRXOUNMRXRCUVVzc1IwRkJSMFFzVjBGQlZ5eEZRVUY2UWpzN1FVRkRRU3hWUVVGSFNTeFBRVUZJTEVWQlFWYzdRVUZEVUN4WlFVRkpSeXhYUVVGWExFZEJRVWRNTEVOQlFVTXNRMEZCUTAwc1RVRkJSaXhEUVVGVFNpeFBRVUZVTEVWQlFXdENTeXhOUVVGc1FpeERRVUY1UWl4VFFVRjZRaXhGUVVGdlEwTXNUMEZCY0VNc1EwRkJORU1zUTBGQlF5eERRVUZFTEVWQlFVa3NRMEZCUXl4RFFVRk1MRU5CUVRWRExFTkJRV3hDTzBGQlEwRXNXVUZCU1VNc1lVRkJZU3hIUVVGSFZpeExRVUZMTEVOQlFVTkhMRTlCUVU0c1EwRkJZMGNzVjBGQlpDeERRVUZ3UWp0QlFVTkJNVUlzWVVGQlN5eERRVUZEZFVJc1QwRkJUaXhIUVVGblFpeE5RVUZOVHl4aFFVRmhMRU5CUVVORExFbEJRV1FzUlVGQmRFSTdRVUZEU0RzN1FVRkRSQ3hWUVVGSFVDeE5RVUZJTEVWQlFWVTdRVUZEVGl4WlFVRkpSU3hYUVVGWExFZEJRVWRNTEVOQlFVTXNRMEZCUTAwc1RVRkJSaXhEUVVGVFNDeE5RVUZVTEVWQlFXbENTU3hOUVVGcVFpeERRVUYzUWl4VFFVRjRRaXhGUVVGdFEwTXNUMEZCYmtNc1EwRkJNa01zUTBGQlF5eERRVUZFTEVWQlFVa3NRMEZCUXl4RFFVRk1MRU5CUVRORExFTkJRV3hDTzBGQlEwRXNXVUZCU1Vjc1dVRkJXU3hIUVVGSFdpeExRVUZMTEVOQlFVTkpMRTFCUVU0c1EwRkJZVVVzVjBGQllpeERRVUZ1UWp0QlFVTkJNVUlzWVVGQlN5eERRVUZEZDBJc1RVRkJUaXhIUVVGbExFMUJRVTFSTEZsQlFWa3NRMEZCUTBRc1NVRkJZaXhGUVVGeVFqdEJRVU5JT3p0QlFVTkVMRlZCUVVkT0xFMUJRVWdzUlVGQlZUdEJRVU5PTEZsQlFVbERMRmRCUVZjc1IwRkJSMHdzUTBGQlF5eERRVUZEVFN4TlFVRkdMRU5CUVZOR0xFMUJRVlFzUlVGQmFVSkhMRTFCUVdwQ0xFTkJRWGRDTEZOQlFYaENMRVZCUVcxRFF5eFBRVUZ1UXl4RFFVRXlReXhEUVVGRExFTkJRVVFzUlVGQlNTeERRVUZETEVOQlFVd3NRMEZCTTBNc1EwRkJiRUk3UVVGRFFTeFpRVUZKU1N4WlFVRlpMRWRCUVVkaUxFdEJRVXNzUTBGQlEwa3NUVUZCVGl4RFFVRmhSU3hYUVVGaUxFTkJRVzVDTzBGQlEwRXhRaXhoUVVGTExFTkJRVU41UWl4TlFVRk9MRWRCUVdVc1RVRkJUVkVzV1VGQldTeERRVUZEUml4SlFVRmlMRVZCUVhKQ08wRkJRMGc3TzBGQlEwUXNZVUZCVHk5Q0xFdEJRVkE3UVVGRFNDeExRWEJDUkR0QlFYRkNTRHM3UVVGRlJHdERMR0ZCUVZjc1EwRkJRME1zWTBGQlJDeEZRVUZuUWp0QlFVTjJRaXhSUVVGSExFMUJRVTFFTEZkQlFWUXNSVUZCY1VJN1FVRkRha0lzV1VGQlRVRXNWMEZCVGl4RFFVRnJRa01zWTBGQmJFSTdRVUZEU0RzN1FVRkRSQ3hUUVVGTFF5eE5RVUZNTEVOQlFWbERMRlZCUVZvc1EwRkJkVUlzTUVKQlFYWkNPMEZCUTBFc1ZVRkJUVHRCUVVGRk4wTXNZVUZCUmp0QlFVRlhTVHRCUVVGWUxGRkJRWGRDZFVNc1kwRkJZeXhEUVVGRGJFSXNWVUZCTjBNN1FVRkRRU3hUUVVGTFFTeFZRVUZNTEVOQlFXZENla0lzVDBGQmFFSXNSMEZCTUVKQkxFOUJRVEZDTzBGQlEwRXNVMEZCUzNsQ0xGVkJRVXdzUTBGQlowSnlRaXhSUVVGb1FpeEhRVUV5UWtFc1VVRkJNMEk3UVVGRFFTeFRRVUZMY1VJc1ZVRkJUQ3hEUVVGblFtaENMRlZCUVdoQ0xFZEJRVFpDTEV0QlFVdEJMRlZCUVd4RE8wRkJRMEVzVTBGQlMyMURMRTFCUVV3c1EwRkJXVVVzVVVGQldqdEJRVU5CTEZkQlFVOUlMR05CUVZBN1FVRkRTRHM3UVVGRlJDeFJRVUZOZWtJc1RVRkJUaXhIUVVGak8wRkJRMVlzVjBGQlR5eE5RVUZOTEV0QlFVdFBMRlZCUVV3c1EwRkJaMEpRTEUxQlFXaENMRVZCUVdJN1FVRkRTRHM3UVVGNFJEQkZMRU5CUVM5Rk96dEJRVEpFWlVzc0swVkJRV1lzUlRzN096czdPenM3T3pzN08wRkRNMFJCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUTJVc2JVVkJRVWwzUWl4MVJFRkJTaXhGUVVGbUxFVTdPenM3T3pzN096czdPenRCUTBSQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN096czdPenM3T3pzN096dEJRMEZCTERaRU96czdPenM3T3pzN096dEJRMEZCTERoRUlpd2labWxzWlNJNklrQmpZWFZ6WVd4T1pYUXZaR1Z3Ykc5NWJXVnVkQzUzWldJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0hKbGNYVnBjbVVvWENKallYVnpZV3d0Ym1WMExtTnZjbVZjSWlrc0lISmxjWFZwY21Vb1hDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSXBLVHRjYmx4MFpXeHpaU0JwWmloMGVYQmxiMllnWkdWbWFXNWxJRDA5UFNBblpuVnVZM1JwYjI0bklDWW1JR1JsWm1sdVpTNWhiV1FwWEc1Y2RGeDBaR1ZtYVc1bEtGdGNJbU5oZFhOaGJDMXVaWFF1WTI5eVpWd2lMQ0JjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWwwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2lRR05oZFhOaGJFNWxkQzlrWlhCc2IzbHRaVzUwWENKZElEMGdabUZqZEc5eWVTaHlaWEYxYVhKbEtGd2lZMkYxYzJGc0xXNWxkQzVqYjNKbFhDSXBMQ0J5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1MWRHbHNjMXdpS1NrN1hHNWNkR1ZzYzJWY2JseDBYSFJ5YjI5MFcxd2lRR05oZFhOaGJFNWxkQzlrWlhCc2IzbHRaVzUwWENKZElEMGdabUZqZEc5eWVTaHliMjkwVzF3aVkyRjFjMkZzTFc1bGRDNWpiM0psWENKZExDQnliMjkwVzF3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aVhTazdYRzU5S1NoMGFHbHpMQ0JtZFc1amRHbHZiaWhmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYMk5oZFhOaGJGOXVaWFJmWTI5eVpWOWZMQ0JmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYMk5oZFhOaGJGOXVaWFJmZFhScGJITmZYeWtnZTF4dWNtVjBkWEp1SUNJc0lpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1NCN1hHNGdYSFJjZEZ4MGNtVjBkWEp1SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1WNGNHOXlkSE03WEc0Z1hIUmNkSDFjYmlCY2RGeDBMeThnUTNKbFlYUmxJR0VnYm1WM0lHMXZaSFZzWlNBb1lXNWtJSEIxZENCcGRDQnBiblJ2SUhSb1pTQmpZV05vWlNsY2JpQmNkRngwZG1GeUlHMXZaSFZzWlNBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZElEMGdlMXh1SUZ4MFhIUmNkR2s2SUcxdlpIVnNaVWxrTEZ4dUlGeDBYSFJjZEd3NklHWmhiSE5sTEZ4dUlGeDBYSFJjZEdWNGNHOXlkSE02SUh0OVhHNGdYSFJjZEgwN1hHNWNiaUJjZEZ4MEx5OGdSWGhsWTNWMFpTQjBhR1VnYlc5a2RXeGxJR1oxYm1OMGFXOXVYRzRnWEhSY2RHMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtTmhiR3dvYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTd2diVzlrZFd4bExtVjRjRzl5ZEhNc0lGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHBPMXh1WEc0Z1hIUmNkQzh2SUVac1lXY2dkR2hsSUcxdlpIVnNaU0JoY3lCc2IyRmtaV1JjYmlCY2RGeDBiVzlrZFd4bExtd2dQU0IwY25WbE8xeHVYRzRnWEhSY2RDOHZJRkpsZEhWeWJpQjBhR1VnWlhod2IzSjBjeUJ2WmlCMGFHVWdiVzlrZFd4bFhHNGdYSFJjZEhKbGRIVnliaUJ0YjJSMWJHVXVaWGh3YjNKMGN6dGNiaUJjZEgxY2JseHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pYTWdiMkpxWldOMElDaGZYM2RsWW5CaFkydGZiVzlrZFd4bGMxOWZLVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXRJRDBnYlc5a2RXeGxjenRjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVl5QTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQm5aWFIwWlhJZ1puVnVZM1JwYjI0Z1ptOXlJR2hoY20xdmJua2daWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0lEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5d2dibUZ0WlN3Z1oyVjBkR1Z5S1NCN1hHNGdYSFJjZEdsbUtDRmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThvWlhod2IzSjBjeXdnYm1GdFpTa3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z2JtRnRaU3dnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCblpYUTZJR2RsZEhSbGNpQjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaR1ZtYVc1bElGOWZaWE5OYjJSMWJHVWdiMjRnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeWtnZTF4dUlGeDBYSFJwWmloMGVYQmxiMllnVTNsdFltOXNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NwSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5MQ0I3SUhaaGJIVmxPaUFuVFc5a2RXeGxKeUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z0oxOWZaWE5OYjJSMWJHVW5MQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdZM0psWVhSbElHRWdabUZyWlNCdVlXMWxjM0JoWTJVZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdNVG9nZG1Gc2RXVWdhWE1nWVNCdGIyUjFiR1VnYVdRc0lISmxjWFZwY21VZ2FYUmNiaUJjZEM4dklHMXZaR1VnSmlBeU9pQnRaWEpuWlNCaGJHd2djSEp2Y0dWeWRHbGxjeUJ2WmlCMllXeDFaU0JwYm5SdklIUm9aU0J1YzF4dUlGeDBMeThnYlc5a1pTQW1JRFE2SUhKbGRIVnliaUIyWVd4MVpTQjNhR1Z1SUdGc2NtVmhaSGtnYm5NZ2IySnFaV04wWEc0Z1hIUXZMeUJ0YjJSbElDWWdPSHd4T2lCaVpXaGhkbVVnYkdsclpTQnlaWEYxYVhKbFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5RZ1BTQm1kVzVqZEdsdmJpaDJZV3gxWlN3Z2JXOWtaU2tnZTF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTVNrZ2RtRnNkV1VnUFNCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktIWmhiSFZsS1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURncElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBhV1lvS0cxdlpHVWdKaUEwS1NBbUppQjBlWEJsYjJZZ2RtRnNkV1VnUFQwOUlDZHZZbXBsWTNRbklDWW1JSFpoYkhWbElDWW1JSFpoYkhWbExsOWZaWE5OYjJSMWJHVXBJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwZG1GeUlHNXpJRDBnVDJKcVpXTjBMbU55WldGMFpTaHVkV3hzS1R0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUtHNXpLVHRjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0c1ekxDQW5aR1ZtWVhWc2RDY3NJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnZG1Gc2RXVTZJSFpoYkhWbElIMHBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNaUFtSmlCMGVYQmxiMllnZG1Gc2RXVWdJVDBnSjNOMGNtbHVaeWNwSUdadmNpaDJZWElnYTJWNUlHbHVJSFpoYkhWbEtTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvYm5Nc0lHdGxlU3dnWm5WdVkzUnBiMjRvYTJWNUtTQjdJSEpsZEhWeWJpQjJZV3gxWlZ0clpYbGRPeUI5TG1KcGJtUW9iblZzYkN3Z2EyVjVLU2s3WEc0Z1hIUmNkSEpsZEhWeWJpQnVjenRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR2RsZEVSbFptRjFiSFJGZUhCdmNuUWdablZ1WTNScGIyNGdabTl5SUdOdmJYQmhkR2xpYVd4cGRIa2dkMmwwYUNCdWIyNHRhR0Z5Ylc5dWVTQnRiMlIxYkdWelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG00Z1BTQm1kVzVqZEdsdmJpaHRiMlIxYkdVcElIdGNiaUJjZEZ4MGRtRnlJR2RsZEhSbGNpQTlJRzF2WkhWc1pTQW1KaUJ0YjJSMWJHVXVYMTlsYzAxdlpIVnNaU0EvWEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFJHVm1ZWFZzZENncElIc2djbVYwZFhKdUlHMXZaSFZzWlZzblpHVm1ZWFZzZENkZE95QjlJRHBjYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSTmIyUjFiR1ZGZUhCdmNuUnpLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxPeUI5TzF4dUlGeDBYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb1oyVjBkR1Z5TENBbllTY3NJR2RsZEhSbGNpazdYRzRnWEhSY2RISmxkSFZ5YmlCblpYUjBaWEk3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3hjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVieUE5SUdaMWJtTjBhVzl1S0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwSUhzZ2NtVjBkWEp1SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNodlltcGxZM1FzSUhCeWIzQmxjblI1S1RzZ2ZUdGNibHh1SUZ4MEx5OGdYMTkzWldKd1lXTnJYM0IxWW14cFkxOXdZWFJvWDE5Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y0NBOUlGd2lYQ0k3WEc1Y2JseHVJRngwTHk4Z1RHOWhaQ0JsYm5SeWVTQnRiMlIxYkdVZ1lXNWtJSEpsZEhWeWJpQmxlSEJ2Y25SelhHNGdYSFJ5WlhSMWNtNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWhmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5NZ1BTQmNJaTR2YzNKakwybHVaR1Y0TG1welhDSXBPMXh1SWl3aWFXMXdiM0owSUhzZ1JYWmxiblFnZlNCbWNtOXRJQ2RqWVhWellXd3RibVYwTG1OdmNtVW5PMXh1YVcxd2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCbWRXNWpkRzl5SUgwZ1puSnZiU0FuTGk5bWRXNWpkRzl5Snp0Y2JtbHRjRzl5ZENCN0lIQnNZWFJtYjNKdExDQmhjM05sY25RZ2ZTQm1jbTl0SUNkallYVnpZV3d0Ym1WMExuVjBhV3h6Snp0Y2JseHVZMnhoYzNNZ1EyRjFjMkZzVG1WMFJHVndiRzk1YldWdWRDQmxlSFJsYm1SeklIQnNZWFJtYjNKdExtMXBlRmRwZEdnb0lFVjJaVzUwTENCYlhTQXBlMXh1SUNBZ0lGeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHWjFibU4wYjNJcGUxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGtZZ1BTQm1kVzVqZEc5eU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGxJZ1BTQm1kVzVqZEc5eUxrTnZjbVZHZFc1amRHOXlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITmxkQ0JGYldsMGRHVnlLR1Z0YVhSMFpYSXBlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtUmxjR3h2ZVVWdGFYUjBaWElnUFNCbGJXbDBkR1Z5TzF4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZENCRmJXbDBkR1Z5S0NsN1hHNGdJQ0FnSUNBZ0lHbG1LQ0YwYUdsekxtUmxjR3h2ZVVWdGFYUjBaWElwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjBWdGFYUjBaWElnYVhNZ2JtOTBJSE5sZENjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1SbGNHeHZlVVZ0YVhSMFpYSTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBJRXhwYzNSbGJtVnlLR3hwYzNSbGJtVnlLWHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWtaWEJzYjNsTWFYTjBaVzVsY2lBOUlHeHBjM1JsYm1WeU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG05dUtDZHBibVpsY21WdVkyVnlKeXdnS0dsdVptVnlLVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1a1pYQnNiM2xNYVhOMFpXNWxjaWhwYm1abGNpazdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTl1S0NkbGJuTmxiV0pzWlVsdVptVnlaVzVqWlhJbkxDQW9hVzVtWlhJcFBUNTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVJsY0d4dmVVeHBjM1JsYm1WeUtHbHVabVZ5S1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJR2RsZENCTWFYTjBaVzVsY2lncGUxeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NWtaWEJzYjNsTWFYTjBaVzVsY2lsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnblRHbHpkR1Z1WlhJZ2FYTWdibTkwSUhObGRDY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtUmxjR3h2ZVV4cGMzUmxibVZ5TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE5sZENCSmJtWmxjbVZ1WTJWeUtHbHVabVZ5Wlc1alpYSXBlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtUmxjR3h2ZVVsdVptVnlaVzVqWlhJZ1BTQnBibVpsY21WdVkyVnlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOXVLQ2RsYldsMGRHVnlKeXdnWVhONWJtTWdLR1Z0YVhSV1lXeDFaU2s5UG50Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCcGJtWmxjbFpoYkhWbElEMGdZWGRoYVhRZ2RHaHBjeTVrWlhCc2IzbEpibVpsY21WdVkyVnlLR1Z0YVhSV1lXeDFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWhwYm1abGNsWmhiSFZsSUNZbUlHbHVabVZ5Vm1Gc2RXVWdJVDA5SUh0OUtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdGFYUW9KMmx1Wm1WeVpXNWpaWEluTENCcGJtWmxjbFpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBJRWx1Wm1WeVpXNWpaWElvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdVpHVndiRzk1U1c1bVpYSmxibU5sY2lsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnblNXNW1aWEpsYm1ObGNpQnBjeUJ1YjNRZ2MyVjBKeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaR1Z3Ykc5NVNXNW1aWEpsYm1ObGNqdGNiaUFnSUNCOVhHNWNiaUFnSUNCelpYUWdSVzV6WlcxaWJHVkpibVpsY21WdVkyVnlLR1Z1YzJWdFlteGxTVzVtWlhKbGJtTmxjaWw3WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCMGFHbHpMbVJsY0d4dmVVVnVjMlZ0WW14bFNXNW1aWEpsYm1ObGNpQTlJR1Z1YzJWdFlteGxTVzVtWlhKbGJtTmxjanRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZiaWduWlcxcGRIUmxjaWNzSUdGemVXNWpJQ2hsYldsMFZtRnNkV1VwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2FXNW1aWEpXWVd4MVpTQTlJR0YzWVdsMElIUm9hWE11WkdWd2JHOTVSVzV6WlcxaWJHVkpibVpsY21WdVkyVnlLR1Z0YVhSV1lXeDFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWhwYm1abGNsWmhiSFZsSUNZbUlHbHVabVZ5Vm1Gc2RXVWdJVDA5SUh0OUtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1WdGFYUW9KMlZ1YzJWdFlteGxTVzVtWlhKbGJtTmxjaWNzSUdsdVptVnlWbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUWdSVzV6WlcxaWJHVkpibVpsY21WdVkyVnlLQ2w3WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6TG1SbGNHeHZlVVZ1YzJWdFlteGxTVzVtWlhKbGJtTmxjaWw3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduUlc1elpXMWliR1ZKYm1abGNtVnVZMlZ5SUdseklHNXZkQ0J6WlhRbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1a1pYQnNiM2xGYm5ObGJXSnNaVWx1Wm1WeVpXNWpaWEk3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZWE41Ym1NZ1pHVndiRzk1S0NsN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTaGhjM2x1WXlBb2NtVnpiMngyWlN3Z2NtVnFaV04wS1QwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHTnZkVzUwWlhJZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR1Z0YVhSV1lXeDFaU0E5SUdGM1lXbDBJSFJvYVhNdVJXMXBkSFJsY2lncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZDJocGJHVW9aVzFwZEZaaGJIVmxJQ0U5UFNCdWRXeHNLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnRhWFFvSjJWdGFYUjBaWEluTENCbGJXbDBWbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZkVzUwWlhJZ0t6MGdNVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsYldsMFZtRnNkV1VnUFNCaGQyRnBkQ0IwYUdsekxrVnRhWFIwWlhJb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYzI5c2RtVW9ZMjkxYm5SbGNpazdYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2JtVjNJRU5oZFhOaGJFNWxkRVJsY0d4dmVXMWxiblFvWm5WdVkzUnZjaWs3SWl3aVkyOXVjM1FnUkdWd2JHOTViV1Z1ZEUxcGVHbHVjeUE5SUNoQ1lYTmxVR2x3Wld4cGJtVkRiR0Z6Y3lrOVBpQmpiR0Z6Y3lCbGVIUmxibVJ6SUVKaGMyVlFhWEJsYkdsdVpVTnNZWE56SUh0Y2JpQWdJRnh1SUNBZ0lITmxkQ0JFWlhCc2IzbHRaVzUwS0dSbGNHeHZlVzFsYm5RcGUxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1SbGNHeHZlVzFsYm5RZ1BTQmtaWEJzYjNsdFpXNTBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkQ0JFWlhCc2IzbHRaVzUwS0NsN1hHNGdJQ0FnSUNBZ0lHbG1LQ0YwYUdsekxtUmxjR3h2ZVcxbGJuUXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMlJsY0d4dmVXMWxiblFnYVhNZ2JtOTBJSE5sZENjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1SbGNHeHZlVzFsYm5RN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMElFbHVabVZ5Wlc1alpYSW9LWHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdUVzlrWld4TVpXNXpaWE1nUFNBb0tUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVUVzlrWld3N1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJR052Ym5OMElGUWdQU0IwYUdsekxsUTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmhjM2x1WXlBb2FXNXdkWFFwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2V5QlFjbVZrYVdOMExDQkZibU52WkdVc0lFUmxZMjlrWlNCOUlEMGdhVzV3ZFhRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2FXNW1aWElnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJRTF2WkdWc0lEMGdUVzlrWld4TVpXNXpaWE1vS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0ZCeVpXUnBZM1FwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQnBibkIxZEZSbGJuTnZjaUE5SUZRdWRHVnVjMjl5S0ZCeVpXUnBZM1FwTG1GelZIbHdaU2duWm14dllYUXpNaWNwTG5KbGMyaGhjR1VvV3pFc0lDMHhYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIQnlaV1JwWTNSVVpXNXpiM0lnUFNCTmIyUmxiQzVRY21Wa2FXTjBLR2x1Y0hWMFZHVnVjMjl5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGJtWmxjaTVRY21Wa2FXTjBJRDBnWVhkaGFYUWdjSEpsWkdsamRGUmxibk52Y2k1a1lYUmhLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppaEZibU52WkdVcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JwYm5CMWRGUmxibk52Y2lBOUlGUXVkR1Z1YzI5eUtFVnVZMjlrWlNrdVlYTlVlWEJsS0NkbWJHOWhkRE15SnlrdWNtVnphR0Z3WlNoYk1Td2dMVEZkS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdaVzVqYjJSbFZHVnVjMjl5SUQwZ1RXOWtaV3d1Ulc1amIyUmxLR2x1Y0hWMFZHVnVjMjl5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGJtWmxjaTVGYm1OdlpHVWdQU0JoZDJGcGRDQmxibU52WkdWVVpXNXpiM0l1WkdGMFlTZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb1JHVmpiMlJsS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdhVzV3ZFhSVVpXNXpiM0lnUFNCVUxuUmxibk52Y2loRVpXTnZaR1VwTG1GelZIbHdaU2duWm14dllYUXpNaWNwTG5KbGMyaGhjR1VvV3pFc0lDMHhYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHUmxZMjlrWlZSbGJuTnZjaUE5SUUxdlpHVnNMa1Z1WTI5a1pTaHBibkIxZEZSbGJuTnZjaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVc1bVpYSXVSR1ZqYjJSbElEMGdZWGRoYVhRZ1pHVmpiMlJsVkdWdWMyOXlMbVJoZEdFb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnBibVpsY2p0Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNCelpYUkNlVU52Ym1acFp5aHdhWEJsYkdsdVpVTnZibVpwWnlsN1hHNGdJQ0FnSUNBZ0lHbG1LSE4xY0dWeUxuTmxkRUo1UTI5dVptbG5LWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjFjR1Z5TG5ObGRFSjVRMjl1Wm1sbktIQnBjR1ZzYVc1bFEyOXVabWxuS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TGt4dloyZGxjaTVuY205MWNFSmxaMmx1S0NkelpYUWdaR1Z3Ykc5NWJXVnVkQ0JpZVNCamIyNW1hV2NuS1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZXlCRmJXbDBkR1Z5TENCTWFYTjBaVzVsY2lCOUlEMGdjR2x3Wld4cGJtVkRiMjVtYVdjdVJHVndiRzk1YldWdWREdGNiaUFnSUNBZ0lDQWdkR2hwY3k1RVpYQnNiM2x0Wlc1MExrVnRhWFIwWlhJZ1BTQkZiV2wwZEdWeU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGtSbGNHeHZlVzFsYm5RdVRHbHpkR1Z1WlhJZ1BTQk1hWE4wWlc1bGNqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1RVpYQnNiM2x0Wlc1MExrbHVabVZ5Wlc1alpYSWdQU0IwYUdsekxrbHVabVZ5Wlc1alpYSTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVRHOW5aMlZ5TG1keWIzVndSVzVrS0NrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCd2FYQmxiR2x1WlVOdmJtWnBaenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQmhjM2x1WXlCa1pYQnNiM2tvS1h0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGM1lXbDBJSFJvYVhNdVJHVndiRzk1YldWdWRDNWtaWEJzYjNrb0tUdGNiaUFnSUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JFWlhCc2IzbHRaVzUwVFdsNGFXNXpPeUlzSW1sdGNHOXlkQ0I3SUVaMWJtTjBiM0lnZlNCbWNtOXRJQ2RqWVhWellXd3RibVYwTG1OdmNtVW5PMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdibVYzSUVaMWJtTjBiM0lvS1RzaUxDSmxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJR05oZFhOaGJFNWxkRVJsY0d4dmVXMWxiblFnZlNCbWNtOXRJQ2N1TDJOaGRYTmhiRTVsZEVSbGNHeHZlVzFsYm5Rbk8xeHVaWGh3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJFWlhCc2IzbHRaVzUwVFdsNGFXNXpJSDBnWm5KdmJTQW5MaTlrWlhCc2IzbHRaVzUwTG0xcGVHbHVjeWM3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDJOaGRYTmhiRjl1WlhSZlkyOXlaVjlmT3lJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgzVjBhV3h6WDE4N0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9iYXNlU3VwZXJ2aXNlZE1vZGVsLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9TdXBlcnZpc2VkTW9kZWxzL2Jhc2VTdXBlcnZpc2VkTW9kZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuXG5cbmNsYXNzIEJhc2VTdXBlcnZpc2VkTW9kZWwgZXh0ZW5kcyBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIlRlbnNvclwiXSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tb2RlbE5hbWUgPSAnJztcbiAgfVxuXG4gIHNldCBMYXllclJ1bm5lcihydW5uZXIpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBnZXQgTGF5ZXJSdW5uZXIoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgZml0KCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGxvc3MoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgcHJlZGljdCgpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBvbmVIb3RQcmVkaWN0KCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoQmFzZVN1cGVydmlzZWRNb2RlbCk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL1N1cGVydmlzZWRNb2RlbHMvY2F1c2FsTmV0U3VwZXJ2aXNlZE1vZGVscy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9jYXVzYWxOZXRTdXBlcnZpc2VkTW9kZWxzLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uICovIFwiLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uLmpzXCIpO1xuXG5cblxuXG5jbGFzcyBDYXVzYWxOZXRNb2RlbHMgZXh0ZW5kcyBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJwbGF0Zm9ybVwiXS5taXhXaXRoKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiVGVuc29yXCJdLCBbXSkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY2xhc3NpZmljYXRpb24obnVtQ2xhc3MpIHtcbiAgICB0aGlzLm1vZGVsID0gbmV3IF9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdKG51bUNsYXNzKTtcbiAgICByZXR1cm4gdGhpcy5tb2RlbDtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAobmV3IENhdXNhbE5ldE1vZGVscygpKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL1N1cGVydmlzZWRNb2RlbHMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBjYXVzYWxOZXRNb2RlbHMsIEJhc2VTdXBlcnZpc2VkTW9kZWwsIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2NhdXNhbE5ldFN1cGVydmlzZWRNb2RlbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2F1c2FsTmV0U3VwZXJ2aXNlZE1vZGVscyAqLyBcIi4vc3JjL1N1cGVydmlzZWRNb2RlbHMvY2F1c2FsTmV0U3VwZXJ2aXNlZE1vZGVscy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNhdXNhbE5ldE1vZGVsc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9jYXVzYWxOZXRTdXBlcnZpc2VkTW9kZWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9iYXNlU3VwZXJ2aXNlZE1vZGVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VTdXBlcnZpc2VkTW9kZWwgKi8gXCIuL3NyYy9TdXBlcnZpc2VkTW9kZWxzL2Jhc2VTdXBlcnZpc2VkTW9kZWwuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJCYXNlU3VwZXJ2aXNlZE1vZGVsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2Jhc2VTdXBlcnZpc2VkTW9kZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbiAqLyBcIi4vc3JjL1N1cGVydmlzZWRNb2RlbHMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb25cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9TdXBlcnZpc2VkTW9kZWxzL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Jhc2VTdXBlcnZpc2VkTW9kZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYmFzZVN1cGVydmlzZWRNb2RlbCAqLyBcIi4vc3JjL1N1cGVydmlzZWRNb2RlbHMvYmFzZVN1cGVydmlzZWRNb2RlbC5qc1wiKTtcblxuXG5jbGFzcyBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIGV4dGVuZHMgX2Jhc2VTdXBlcnZpc2VkTW9kZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ge1xuICBjb25zdHJ1Y3RvcihudW1DbGFzcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICBpZiAobnVtQ2xhc3MgPiAwKSB7XG4gICAgICB0aGlzLm51bUNsYXNzID0gbnVtQ2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKGBleHBlY3QgbnVtY2xhc3MsIGdldCAke251bUNsYXNzfWApO1xuICAgIH1cbiAgfVxuXG4gIHNldCBMYXllclJ1bm5lcihsYXllclJ1bm5lcikge1xuICAgIGxldCB7XG4gICAgICBQcmVkaWN0b3JcbiAgICB9ID0gbGF5ZXJSdW5uZXI7XG4gICAgdGhpcy5ydW5uZXIgPSB7XG4gICAgICBQcmVkaWN0b3JcbiAgICB9O1xuICB9XG5cbiAgZ2V0IExheWVyUnVubmVyKCkge1xuICAgIGlmICghdGhpcy5ydW5uZXIpIHtcbiAgICAgIHRocm93IEVycm9yKCdydW5uZXIgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJ1bm5lcjtcbiAgfVxuXG4gIGdldCBGaXQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgUHJlZGljdG9yXG4gICAgfSA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgcmV0dXJuIGlucHV0VGVuc29yID0+IHtcbiAgICAgIGxldCBvdXRQdXRUZW5zb3IgPSBQcmVkaWN0b3IoaW5wdXRUZW5zb3IpO1xuICAgICAgbGV0IGxvZ1Byb2IgPSBvdXRQdXRUZW5zb3Iuc3ViKG91dFB1dFRlbnNvci5sb2dTdW1FeHAoMSwgdHJ1ZSkpO1xuICAgICAgcmV0dXJuIGxvZ1Byb2I7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBQcmVkaWN0KCkge1xuICAgIGNvbnN0IEZpdCA9IHRoaXMuRml0O1xuICAgIHJldHVybiBpbnB1dFRlbnNvciA9PiB7XG4gICAgICBsZXQgbG9nUHJvYiA9IEZpdChpbnB1dFRlbnNvcik7XG4gICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgIHJldHVybiBwcmVkaWN0ZWRDbGFzcztcbiAgICB9O1xuICB9XG5cbiAgZ2V0IE9uZUhvdFByZWRpY3QoKSB7XG4gICAgY29uc3QgUHJlZGljdCA9IHRoaXMuUHJlZGljdDtcbiAgICByZXR1cm4gaW5wdXRUZW5zb3IgPT4ge1xuICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gUHJlZGljdChpbnB1dFRlbnNvcik7XG4gICAgICBsZXQgb25lSG90UHJlZGljdCA9IHRoaXMuVC5vbmVIb3QocHJlZGljdGVkQ2xhc3MsIHRoaXMubnVtQ2xhc3MpO1xuICAgICAgcmV0dXJuIG9uZUhvdFByZWRpY3Q7XG4gICAgfTtcbiAgfVxuXG4gIGdldCBMb3NzKCkge1xuICAgIGNvbnN0IEZpdCA9IHRoaXMuRml0O1xuICAgIHJldHVybiAoaW5wdXRUZW5zb3IsIGxhYmVsVGVuc29yKSA9PiB7XG4gICAgICBsZXQgbG9nUHJvYiA9IEZpdChpbnB1dFRlbnNvcik7XG4gICAgICBsZXQgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubmVnKCkubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgIGxldCBsb3NzID0gbGlrZWxpaG9vZC5zdW0oMSkubWVhbigpO1xuICAgICAgcmV0dXJuIGxvc3M7XG4gICAgfTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbik7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGNhdXNhbE5ldE1vZGVscywgQmFzZVN1cGVydmlzZWRNb2RlbCwgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiwgTW9kZWxNaXhpbnMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1N1cGVydmlzZWRNb2RlbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vU3VwZXJ2aXNlZE1vZGVscy9pbmRleCAqLyBcIi4vc3JjL1N1cGVydmlzZWRNb2RlbHMvaW5kZXguanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJjYXVzYWxOZXRNb2RlbHNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfU3VwZXJ2aXNlZE1vZGVsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiY2F1c2FsTmV0TW9kZWxzXCJdOyB9KTtcblxuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQmFzZVN1cGVydmlzZWRNb2RlbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9TdXBlcnZpc2VkTW9kZWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJCYXNlU3VwZXJ2aXNlZE1vZGVsXCJdOyB9KTtcblxuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9TdXBlcnZpc2VkTW9kZWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uXCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tb2RlbF9taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbW9kZWwubWl4aW5zICovIFwiLi9zcmMvbW9kZWwubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTW9kZWxNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbW9kZWxfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbW9kZWwubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tb2RlbC5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5jb25zdCBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnMgPSBCYXNlUGlwZWxpbmVDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzIHtcbiAgZ2V0IExvc3NNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuTG9zcztcbiAgfVxuXG4gIGdldCBGaXRNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuRml0O1xuICB9XG5cbiAgZ2V0IE9uZUhvdFByZWRpY3RNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuT25lSG90UHJlZGljdDtcbiAgfVxuXG4gIGdldCBQcmVkaWN0TW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLlByZWRpY3Q7XG4gIH1cblxuICBnZXQgRW5jb2RlTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkVuY29kZTtcbiAgfVxuXG4gIGdldCBEZWNvZGVNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuRGVjb2RlO1xuICB9XG5cbiAgZ2V0IE1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbDtcbiAgfVxuXG4gIHNldCBNb2RlbChtb2RlbCkge1xuICAgIHRoaXMubmV0TW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKSB7XG4gICAgaWYgKHN1cGVyLnNldEJ5Q29uZmlnKSB7XG4gICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IE1vZGVsIGJ5IGNvbmZpZycpO1xuICAgIGNvbnN0IHtcbiAgICAgIE1vZGVsXG4gICAgfSA9IHBpcGVsaW5lQ29uZmlnLk5ldDtcblxuICAgIGlmICghTW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKGBNb2RlbCBpcyBub3Qgc2V0IGluICR7SlNPTi5zdHJpbmdsaWZ5KHBpcGVsaW5lQ29uZmlnKX1gKTtcbiAgICB9XG5cbiAgICBNb2RlbC5MYXllclJ1bm5lciA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgdGhpcy5Nb2RlbCA9IE1vZGVsO1xuICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gIH1cblxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChVblN1cGVydmlzZWRNb2RlbHNNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LmNvcmVcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQudXRpbHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMXZaR1ZzY3k5M1pXSndZV05yTDNWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRpTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRiMlJsYkhNdmQyVmljR0ZqYXk5aWIyOTBjM1J5WVhBaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0YjJSbGJITXZMaTl6Y21NdlUzVndaWEoyYVhObFpFMXZaR1ZzY3k5aVlYTmxVM1Z3WlhKMmFYTmxaRTF2WkdWc0xtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXOWtaV3h6THk0dmMzSmpMMU4xY0dWeWRtbHpaV1JOYjJSbGJITXZZMkYxYzJGc1RtVjBVM1Z3WlhKMmFYTmxaRTF2WkdWc2N5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMXZaR1ZzY3k4dUwzTnlZeTlUZFhCbGNuWnBjMlZrVFc5a1pXeHpMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXOWtaV3h6THk0dmMzSmpMMU4xY0dWeWRtbHpaV1JOYjJSbGJITXZjMmx1WjJ4bFRHRmliR1ZEYkdGemMybG1hV05oZEdsdmJpNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMXZaR1ZzY3k4dUwzTnlZeTlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMXZaR1ZzY3k4dUwzTnlZeTl0YjJSbGJDNXRhWGhwYm5NdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dGIyUmxiSE12WlhoMFpYSnVZV3dnWENKallYVnpZV3d0Ym1WMExtTnZjbVZjSWlJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjF2WkdWc2N5OWxlSFJsY201aGJDQmNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaUpkTENKdVlXMWxjeUk2V3lKQ1lYTmxVM1Z3WlhKMmFYTmxaRTF2WkdWc0lpd2lWR1Z1YzI5eUlpd2lZMjl1YzNSeWRXTjBiM0lpTENKdGIyUmxiRTVoYldVaUxDSk1ZWGxsY2xKMWJtNWxjaUlzSW5KMWJtNWxjaUlzSWtWeWNtOXlJaXdpWm1sMElpd2liRzl6Y3lJc0luQnlaV1JwWTNRaUxDSnZibVZJYjNSUWNtVmthV04wSWl3aVEyRjFjMkZzVG1WMFRXOWtaV3h6SWl3aWNHeGhkR1p2Y20waUxDSnRhWGhYYVhSb0lpd2lZMnhoYzNOcFptbGpZWFJwYjI0aUxDSnVkVzFEYkdGemN5SXNJbTF2WkdWc0lpd2lVMmx1WjJ4bFRHRmlaV3hEYkdGemMybG1hV05oZEdsdmJpSXNJbXhoZVdWeVVuVnVibVZ5SWl3aVVISmxaR2xqZEc5eUlpd2lSbWwwSWl3aWFXNXdkWFJVWlc1emIzSWlMQ0p2ZFhSUWRYUlVaVzV6YjNJaUxDSnNiMmRRY205aUlpd2ljM1ZpSWl3aWJHOW5VM1Z0Ulhod0lpd2lVSEpsWkdsamRDSXNJbkJ5WldScFkzUmxaRU5zWVhOeklpd2lZWEpuVFdGNElpd2lUMjVsU0c5MFVISmxaR2xqZENJc0lsUWlMQ0p2Ym1WSWIzUWlMQ0pNYjNOeklpd2liR0ZpWld4VVpXNXpiM0lpTENKc2FXdGxiR2xvYjI5a0lpd2libVZuSWl3aWJYVnNJaXdpYzNWdElpd2liV1ZoYmlJc0lsVnVVM1Z3WlhKMmFYTmxaRTF2WkdWc2MwMXBlR2x1Y3lJc0lrSmhjMlZRYVhCbGJHbHVaVU5zWVhOeklpd2lURzl6YzAxdlpHVnNJaXdpYm1WMFRXOWtaV3dpTENKR2FYUk5iMlJsYkNJc0lrOXVaVWh2ZEZCeVpXUnBZM1JOYjJSbGJDSXNJbEJ5WldScFkzUk5iMlJsYkNJc0lrVnVZMjlrWlUxdlpHVnNJaXdpUlc1amIyUmxJaXdpUkdWamIyUmxUVzlrWld3aUxDSkVaV052WkdVaUxDSk5iMlJsYkNJc0luTmxkRUo1UTI5dVptbG5JaXdpY0dsd1pXeHBibVZEYjI1bWFXY2lMQ0pNYjJkblpYSWlMQ0puY205MWNFSmxaMmx1SWl3aVRtVjBJaXdpU2xOUFRpSXNJbk4wY21sdVoyeHBabmtpTENKbmNtOTFjRVZ1WkNKZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORUxFODdRVU5XUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR3RFUVVFd1F5eG5RMEZCWjBNN1FVRkRNVVU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUlVGQmQwUXNhMEpCUVd0Q08wRkJRekZGTzBGQlEwRXNlVVJCUVdsRUxHTkJRV003UVVGREwwUTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbEVRVUY1UXl4cFEwRkJhVU03UVVGRE1VVXNkMGhCUVdkSUxHMUNRVUZ0UWl4RlFVRkZPMEZCUTNKSk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPenM3T3pzN096czdPenM3UVVOc1JrRTdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJRMEVzVFVGQlRVRXNiVUpCUVU0c1UwRkJhME5ETEhORVFVRnNReXhEUVVGM1F6dEJRVU53UTBNc1lVRkJWeXhIUVVGRk8wRkJRMVE3UVVGRFFTeFRRVUZMUXl4VFFVRk1MRWRCUVdsQ0xFVkJRV3BDTzBGQlEwZzdPMEZCUlVRc1RVRkJTVU1zVjBGQlNpeERRVUZuUWtNc1RVRkJhRUlzUlVGQmRVSTdRVUZEYmtJc1ZVRkJUVU1zUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRlJDeE5RVUZKUml4WFFVRktMRWRCUVdsQ08wRkJRMklzVlVGQlRVVXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkVNc1MwRkJSeXhIUVVGRk8wRkJRMFFzVlVGQlRVUXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkVVc1RVRkJTU3hIUVVGRk8wRkJRMFlzVlVGQlRVWXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkVjc1UwRkJUeXhIUVVGRk8wRkJRMHdzVlVGQlRVZ3NTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkVrc1pVRkJZU3hIUVVGRk8wRkJRMWdzVlVGQlRVb3NTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUV6UW0xRE96dEJRVGhDZWtKT0xHdEdRVUZtTEVVN096czdPenM3T3pzN096dEJReTlDUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVU5CTzBGQlEwRTdPMEZCUTBFc1RVRkJUVmNzWlVGQlRpeFRRVUU0UWtNc2VVUkJRVkVzUTBGQlEwTXNUMEZCVkN4RFFVRnJRbG9zYzBSQlFXeENMRVZCUVRCQ0xFVkJRVEZDTEVOQlFUbENMRU5CUVRSRU8wRkJRM2hFUXl4aFFVRlhMRWRCUVVVN1FVRkRWRHRCUVVOSU96dEJRVVZFV1N4blFrRkJZeXhEUVVGRFF5eFJRVUZFTEVWQlFWVTdRVUZEY0VJc1UwRkJTME1zUzBGQlRDeEhRVUZoTEVsQlFVbERMR3RGUVVGS0xFTkJRVGhDUml4UlFVRTVRaXhEUVVGaU8wRkJRMEVzVjBGQlR5eExRVUZMUXl4TFFVRmFPMEZCUTBnN08wRkJVblZFT3p0QlFWVTNReXh0UlVGQlNVd3NaVUZCU2l4RlFVRm1MRVU3T3pzN096czdPenM3T3p0QlEySkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEwUkJPMEZCUVVFN1FVRkJRVHM3UVVGRlFTeE5RVUZOVFN4NVFrRkJUaXhUUVVGM1EycENMRFJFUVVGNFF5eERRVUV5UkR0QlFVTjJSRVVzWVVGQlZ5eERRVUZEWVN4UlFVRkVMRVZCUVZVN1FVRkRha0k3TzBGQlEwRXNVVUZCUjBFc1VVRkJVU3hIUVVGSExFTkJRV1FzUlVGQlowSTdRVUZEV2l4WFFVRkxRU3hSUVVGTUxFZEJRV2RDUVN4UlFVRm9RanRCUVVOSUxFdEJSa1FzVFVGSFNUdEJRVU5CTEZsQlFVMVVMRXRCUVVzc1EwRkJSU3gzUWtGQmRVSlRMRkZCUVZNc1JVRkJiRU1zUTBGQldEdEJRVU5JTzBGQlEwbzdPMEZCUlVRc1RVRkJTVmdzVjBGQlNpeERRVUZuUW1Nc1YwRkJhRUlzUlVGQk5FSTdRVUZEZUVJc1VVRkJTVHRCUVVGRlF6dEJRVUZHTEZGQlFXZENSQ3hYUVVGd1FqdEJRVU5CTEZOQlFVdGlMRTFCUVV3c1IwRkJZenRCUVVGRll6dEJRVUZHTEV0QlFXUTdRVUZEU0RzN1FVRkZSQ3hOUVVGSlppeFhRVUZLTEVkQlFXbENPMEZCUTJJc1VVRkJSeXhEUVVGRExFdEJRVXRETEUxQlFWUXNSVUZCWjBJN1FVRkRXaXhaUVVGTlF5eExRVUZMTEVOQlFVTXNiVUpCUVVRc1EwRkJXRHRCUVVOSU96dEJRVU5FTEZkQlFVOHNTMEZCUzBRc1RVRkJXanRCUVVOSU96dEJRVVZFTEUxQlFVbGxMRWRCUVVvc1IwRkJVenRCUVVOTUxGVkJRVTA3UVVGQlJVUTdRVUZCUml4UlFVRm5RaXhMUVVGTFppeFhRVUV6UWp0QlFVTkJMRmRCUVZGcFFpeFhRVUZFTEVsQlFXVTdRVUZEYkVJc1ZVRkJTVU1zV1VGQldTeEhRVUZIU0N4VFFVRlRMRU5CUVVORkxGZEJRVVFzUTBGQk5VSTdRVUZEUVN4VlFVRkpSU3hQUVVGUExFZEJRVWRFTEZsQlFWa3NRMEZCUTBVc1IwRkJZaXhEUVVGcFFrWXNXVUZCV1N4RFFVRkRSeXhUUVVGaUxFTkJRWFZDTEVOQlFYWkNMRVZCUVRCQ0xFbEJRVEZDTEVOQlFXcENMRU5CUVdRN1FVRkRRU3hoUVVGUFJpeFBRVUZRTzBGQlEwZ3NTMEZLUkR0QlFVdElPenRCUVVWRUxFMUJRVWxITEU5QlFVb3NSMEZCWVR0QlFVTlVMRlZCUVUxT0xFZEJRVWNzUjBGQlJ5eExRVUZMUVN4SFFVRnFRanRCUVVOQkxGZEJRVkZETEZkQlFVUXNTVUZCWlR0QlFVTnNRaXhWUVVGSlJTeFBRVUZQTEVkQlFVZElMRWRCUVVjc1EwRkJRME1zVjBGQlJDeERRVUZxUWp0QlFVTkJMRlZCUVVsTkxHTkJRV01zUjBGQlIwb3NUMEZCVHl4RFFVRkRTeXhOUVVGU0xFTkJRV1VzUTBGQlppeERRVUZ5UWp0QlFVTkJMR0ZCUVU5RUxHTkJRVkE3UVVGRFNDeExRVXBFTzBGQlMwZzdPMEZCUlVRc1RVRkJTVVVzWVVGQlNpeEhRVUZ0UWp0QlFVTm1MRlZCUVUxSUxFOUJRVThzUjBGQlJ5eExRVUZMUVN4UFFVRnlRanRCUVVOQkxGZEJRVkZNTEZkQlFVUXNTVUZCWlR0QlFVTnNRaXhWUVVGSlRTeGpRVUZqTEVkQlFVZEVMRTlCUVU4c1EwRkJRMHdzVjBGQlJDeERRVUUxUWp0QlFVTkJMRlZCUVVsWUxHRkJRV0VzUjBGQlJ5eExRVUZMYjBJc1EwRkJUQ3hEUVVGUFF5eE5RVUZRTEVOQlFXTktMR05CUVdRc1JVRkJPRUlzUzBGQlMxb3NVVUZCYmtNc1EwRkJjRUk3UVVGRFFTeGhRVUZQVEN4aFFVRlFPMEZCUTBnc1MwRktSRHRCUVV0SU96dEJRVU5FTEUxQlFVbHpRaXhKUVVGS0xFZEJRVlU3UVVGRFRpeFZRVUZOV2l4SFFVRkhMRWRCUVVjc1MwRkJTMEVzUjBGQmFrSTdRVUZEUVN4WFFVRlBMRU5CUVVORExGZEJRVVFzUlVGQlkxa3NWMEZCWkN4TFFVRTBRanRCUVVNdlFpeFZRVUZKVml4UFFVRlBMRWRCUVVkSUxFZEJRVWNzUTBGQlEwTXNWMEZCUkN4RFFVRnFRanRCUVVOQkxGVkJRVWxoTEZWQlFWVXNSMEZCUjFnc1QwRkJUeXhEUVVGRFdTeEhRVUZTTEVkQlFXTkRMRWRCUVdRc1EwRkJhMEpJTEZkQlFXeENMRU5CUVdwQ08wRkJRMEVzVlVGQlNYcENMRWxCUVVrc1IwRkJSekJDTEZWQlFWVXNRMEZCUTBjc1IwRkJXQ3hEUVVGbExFTkJRV1lzUlVGQmEwSkRMRWxCUVd4Q0xFVkJRVmc3UVVGRFFTeGhRVUZQT1VJc1NVRkJVRHRCUVVOSUxFdEJURVE3UVVGTlNEczdRVUY2UkhORU96dEJRVEpFTlVOVExIZEdRVUZtTEVVN096czdPenM3T3pzN096dEJRemRFUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN096czdPenM3T3pzN096czdRVU5CUVR0QlFVRkJMRTFCUVUxelFpeDNRa0ZCZDBJc1IwRkJTVU1zYVVKQlFVUXNTVUZCYzBJc1kwRkJZMEVzYVVKQlFXUXNRMEZCSzBJN1FVRkRiRVlzVFVGQlNVTXNVMEZCU2l4SFFVRmxPMEZCUTFnc1VVRkJSeXhEUVVGRExFdEJRVXRETEZGQlFWUXNSVUZCYTBJN1FVRkRaQ3haUVVGTmNFTXNTMEZCU3l4RFFVRkRMSEZDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZEUkN4WFFVRlBMRXRCUVV0dlF5eFJRVUZNTEVOQlFXTldMRWxCUVhKQ08wRkJRMGc3TzBGQlJVUXNUVUZCU1Zjc1VVRkJTaXhIUVVGak8wRkJRMVlzVVVGQlJ5eERRVUZETEV0QlFVdEVMRkZCUVZRc1JVRkJhMEk3UVVGRFpDeFpRVUZOY0VNc1MwRkJTeXhEUVVGRExIRkNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSQ3hYUVVGUExFdEJRVXR2UXl4UlFVRk1MRU5CUVdOMFFpeEhRVUZ5UWp0QlFVTklPenRCUVVWRUxFMUJRVWwzUWl4clFrRkJTaXhIUVVGM1FqdEJRVU53UWl4UlFVRkhMRU5CUVVNc1MwRkJTMFlzVVVGQlZDeEZRVUZyUWp0QlFVTmtMRmxCUVUxd1F5eExRVUZMTEVOQlFVTXNjVUpCUVVRc1EwRkJXRHRCUVVOSU96dEJRVU5FTEZkQlFVOHNTMEZCUzI5RExGRkJRVXdzUTBGQlkySXNZVUZCY2tJN1FVRkRTRHM3UVVGRlJDeE5RVUZKWjBJc1dVRkJTaXhIUVVGclFqdEJRVU5rTEZGQlFVY3NRMEZCUXl4TFFVRkxTQ3hSUVVGVUxFVkJRV3RDTzBGQlEyUXNXVUZCVFhCRExFdEJRVXNzUTBGQlF5eHhRa0ZCUkN4RFFVRllPMEZCUTBnN08wRkJRMFFzVjBGQlR5eExRVUZMYjBNc1VVRkJUQ3hEUVVGamFFSXNUMEZCY2tJN1FVRkRTRHM3UVVGRlJDeE5RVUZKYjBJc1YwRkJTaXhIUVVGcFFqdEJRVU5pTEZGQlFVY3NRMEZCUXl4TFFVRkxTaXhSUVVGVUxFVkJRV3RDTzBGQlEyUXNXVUZCVFhCRExFdEJRVXNzUTBGQlF5eHhRa0ZCUkN4RFFVRllPMEZCUTBnN08wRkJRMFFzVjBGQlR5eExRVUZMYjBNc1VVRkJUQ3hEUVVGalN5eE5RVUZ5UWp0QlFVTklPenRCUVVWRUxFMUJRVWxETEZkQlFVb3NSMEZCYVVJN1FVRkRZaXhSUVVGSExFTkJRVU1zUzBGQlMwNHNVVUZCVkN4RlFVRnJRanRCUVVOa0xGbEJRVTF3UXl4TFFVRkxMRU5CUVVNc2NVSkJRVVFzUTBGQldEdEJRVU5JT3p0QlFVTkVMRmRCUVU4c1MwRkJTMjlETEZGQlFVd3NRMEZCWTA4c1RVRkJja0k3UVVGRFNEczdRVUZIUkN4TlFVRkpReXhMUVVGS0xFZEJRVmM3UVVGRFVDeFJRVUZITEVOQlFVTXNTMEZCUzFJc1VVRkJWQ3hGUVVGclFqdEJRVU5rTEZsQlFVMXdReXhMUVVGTExFTkJRVU1zY1VKQlFVUXNRMEZCV0R0QlFVTklPenRCUVVORUxGZEJRVThzUzBGQlMyOURMRkZCUVZvN1FVRkRTRHM3UVVGSFJDeE5RVUZKVVN4TFFVRktMRU5CUVZWc1F5eExRVUZXTEVWQlFXZENPMEZCUTFvc1UwRkJTekJDTEZGQlFVd3NSMEZCWjBJeFFpeExRVUZvUWp0QlFVTklPenRCUVVWRWJVTXNZVUZCVnl4RFFVRkRReXhqUVVGRUxFVkJRV2RDTzBGQlEzWkNMRkZCUVVjc1RVRkJUVVFzVjBGQlZDeEZRVUZ4UWp0QlFVTnFRaXhaUVVGTlFTeFhRVUZPTEVOQlFXdENReXhqUVVGc1FqdEJRVU5JT3p0QlFVTkVMRk5CUVV0RExFMUJRVXdzUTBGQldVTXNWVUZCV2l4RFFVRjFRaXh4UWtGQmRrSTdRVUZEUVN4VlFVRk5PMEZCUVVWS08wRkJRVVlzVVVGQldVVXNZMEZCWXl4RFFVRkRSeXhIUVVGcVF6czdRVUZEUVN4UlFVRkhMRU5CUVVOTUxFdEJRVW9zUlVGQlZUdEJRVU5PTEZsQlFVMDFReXhMUVVGTExFTkJRVVVzZFVKQlFYTkNhMFFzU1VGQlNTeERRVUZEUXl4VlFVRk1MRU5CUVdkQ1RDeGpRVUZvUWl4RFFVRm5ReXhGUVVGNFJDeERRVUZZTzBGQlEwZzdPMEZCUTBSR0xGTkJRVXNzUTBGQlF6bERMRmRCUVU0c1IwRkJiMElzUzBGQlMwRXNWMEZCZWtJN1FVRkRRU3hUUVVGTE9FTXNTMEZCVEN4SFFVRmhRU3hMUVVGaU8wRkJRMEVzVTBGQlMwY3NUVUZCVEN4RFFVRlpTeXhSUVVGYU8wRkJRMGc3TzBGQmNFVnBSaXhEUVVGMFJqczdRVUYxUldWdVFpeDFSa0ZCWml4Rk96czdPenM3T3pzN096dEJRM1pGUVN3MlJEczdPenM3T3pzN096czdRVU5CUVN3NFJDSXNJbVpwYkdVaU9pSkFZMkYxYzJGc1RtVjBMMjF2WkdWc2N5NTNaV0l1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLSEpsY1hWcGNtVW9YQ0pqWVhWellXd3RibVYwTG1OdmNtVmNJaWtzSUhKbGNYVnBjbVVvWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENJcEtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0Y0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aUxDQmNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJbDBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aVFHTmhkWE5oYkU1bGRDOXRiMlJsYkhOY0lsMGdQU0JtWVdOMGIzSjVLSEpsY1hWcGNtVW9YQ0pqWVhWellXd3RibVYwTG1OdmNtVmNJaWtzSUhKbGNYVnBjbVVvWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENJcEtUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0pBWTJGMWMyRnNUbVYwTDIxdlpHVnNjMXdpWFNBOUlHWmhZM1J2Y25rb2NtOXZkRnRjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpWFN3Z2NtOXZkRnRjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWwwcE8xeHVmU2tvZEdocGN5d2dablZ1WTNScGIyNG9YMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYMk52Y21WZlh5d2dYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYM1YwYVd4elgxOHBJSHRjYm5KbGRIVnliaUFpTENJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQm5aWFIwWlhJZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXBJSHRjYmlCY2RGeDBhV1lvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5LU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5d2dleUIyWVd4MVpUb2dKMDF2WkhWc1pTY2dmU2s3WEc0Z1hIUmNkSDFjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUNkZlgyVnpUVzlrZFd4bEp5d2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHTnlaV0YwWlNCaElHWmhhMlVnYm1GdFpYTndZV05sSUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlERTZJSFpoYkhWbElHbHpJR0VnYlc5a2RXeGxJR2xrTENCeVpYRjFhWEpsSUdsMFhHNGdYSFF2THlCdGIyUmxJQ1lnTWpvZ2JXVnlaMlVnWVd4c0lIQnliM0JsY25ScFpYTWdiMllnZG1Gc2RXVWdhVzUwYnlCMGFHVWdibk5jYmlCY2RDOHZJRzF2WkdVZ0ppQTBPaUJ5WlhSMWNtNGdkbUZzZFdVZ2QyaGxiaUJoYkhKbFlXUjVJRzV6SUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlEaDhNVG9nWW1Wb1lYWmxJR3hwYTJVZ2NtVnhkV2x5WlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTUwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUcxdlpHVXBJSHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JREVwSUhaaGJIVmxJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloMllXeDFaU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUE0S1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RHbG1LQ2h0YjJSbElDWWdOQ2tnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSnlBbUppQjJZV3gxWlNBbUppQjJZV3gxWlM1ZlgyVnpUVzlrZFd4bEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkSFpoY2lCdWN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lodWN5azdYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h1Y3l3Z0oyUmxabUYxYkhRbkxDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJSFpoYkhWbE9pQjJZV3gxWlNCOUtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlESWdKaVlnZEhsd1pXOW1JSFpoYkhWbElDRTlJQ2R6ZEhKcGJtY25LU0JtYjNJb2RtRnlJR3RsZVNCcGJpQjJZV3gxWlNrZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLRzV6TENCclpYa3NJR1oxYm1OMGFXOXVLR3RsZVNrZ2V5QnlaWFIxY200Z2RtRnNkV1ZiYTJWNVhUc2dmUzVpYVc1a0tHNTFiR3dzSUd0bGVTa3BPMXh1SUZ4MFhIUnlaWFIxY200Z2JuTTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ1hDSXVMM055WXk5cGJtUmxlQzVxYzF3aUtUdGNiaUlzSW1sdGNHOXlkQ0I3SUZSbGJuTnZjaUI5SUdaeWIyMGdKMk5oZFhOaGJDMXVaWFF1WTI5eVpTYzdYRzVqYkdGemN5QkNZWE5sVTNWd1pYSjJhWE5sWkUxdlpHVnNJR1Y0ZEdWdVpITWdWR1Z1YzI5eWUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXOWtaV3hPWVcxbElEMGdKeWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwSUV4aGVXVnlVblZ1Ym1WeUtISjFibTVsY2lsN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLQ2RwYlhCc1pXMWxiblFnY21WeGRXbHlaV1FuS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhRZ1RHRjVaWEpTZFc1dVpYSW9LWHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oybHRjR3hsYldWdWRDQnlaWEYxYVhKbFpDY3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWnBkQ2dwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiRzl6Y3lncGUxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYVcxd2JHVnRaVzUwSUhKbGNYVnBjbVZrSnlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY0hKbFpHbGpkQ2dwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1SUNBZ0lHOXVaVWh2ZEZCeVpXUnBZM1FvS1h0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMmx0Y0d4bGJXVnVkQ0J5WlhGMWFYSmxaQ2NwTzF4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FtRnpaVk4xY0dWeWRtbHpaV1JOYjJSbGJEc2lMQ0pwYlhCdmNuUWdleUJ3YkdGMFptOXliU0I5SUdaeWIyMGdKMk5oZFhOaGJDMXVaWFF1ZFhScGJITW5PMXh1YVcxd2IzSjBJSHNnVkdWdWMyOXlJSDBnWm5KdmJTQW5ZMkYxYzJGc0xXNWxkQzVqYjNKbEp6dGNibWx0Y0c5eWRDQjdJR1JsWm1GMWJIUWdZWE1nVTJsdVoyeGxUR0ZpWld4RGJHRnpjMmxtYVdOaGRHbHZiaUI5SUdaeWIyMGdKeTR2YzJsdVoyeGxUR0ZpYkdWRGJHRnpjMmxtYVdOaGRHbHZiaWM3WEc1amJHRnpjeUJEWVhWellXeE9aWFJOYjJSbGJITWdaWGgwWlc1a2N5QndiR0YwWm05eWJTNXRhWGhYYVhSb0tDQlVaVzV6YjNJc0lGdGRJQ2w3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvS1h0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ1kyeGhjM05wWm1sallYUnBiMjRvYm5WdFEyeGhjM01wZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbTF2WkdWc0lEMGdibVYzSUZOcGJtZHNaVXhoWW1Wc1EyeGhjM05wWm1sallYUnBiMjRvYm5WdFEyeGhjM01wTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXRiMlJsYkR0Y2JpQWdJQ0I5WEc1OVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCdVpYY2dRMkYxYzJGc1RtVjBUVzlrWld4ektDazdJaXdpWlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCallYVnpZV3hPWlhSTmIyUmxiSE1nZlNCbWNtOXRJQ2N1TDJOaGRYTmhiRTVsZEZOMWNHVnlkbWx6WldSTmIyUmxiSE1uTzF4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5QkNZWE5sVTNWd1pYSjJhWE5sWkUxdlpHVnNJSDBnWm5KdmJTQW5MaTlpWVhObFUzVndaWEoyYVhObFpFMXZaR1ZzSnp0Y2JtVjRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdVMmx1WjJ4bFRHRmlaV3hEYkdGemMybG1hV05oZEdsdmJpQjlJR1p5YjIwZ0p5NHZjMmx1WjJ4bFRHRmliR1ZEYkdGemMybG1hV05oZEdsdmJpYzdYRzRpTENKcGJYQnZjblFnZXlCa1pXWmhkV3gwSUdGeklFSmhjMlZUZFhCbGNuWnBjMlZrVFc5a1pXd2dmU0JtY205dElDY3VMMkpoYzJWVGRYQmxjblpwYzJWa1RXOWtaV3duTzF4dVhHNWpiR0Z6Y3lCVGFXNW5iR1ZNWVdKbGJFTnNZWE56YVdacFkyRjBhVzl1SUdWNGRHVnVaSE1nUW1GelpWTjFjR1Z5ZG1selpXUk5iMlJsYkh0Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lodWRXMURiR0Z6Y3lsN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lHbG1LRzUxYlVOc1lYTnpJRDRnTUNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtNTFiVU5zWVhOeklEMGdiblZ0UTJ4aGMzTTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWld4elpYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtHQmxlSEJsWTNRZ2JuVnRZMnhoYzNNc0lHZGxkQ0FrZTI1MWJVTnNZWE56ZldBcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBJRXhoZVdWeVVuVnVibVZ5S0d4aGVXVnlVblZ1Ym1WeUtYdGNiaUFnSUNBZ0lDQWdiR1YwSUhzZ1VISmxaR2xqZEc5eUlIMGdQU0JzWVhsbGNsSjFibTVsY2p0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV5ZFc1dVpYSWdQU0I3SUZCeVpXUnBZM1J2Y2lCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRDQk1ZWGxsY2xKMWJtNWxjaWdwZTF4dUlDQWdJQ0FnSUNCcFppZ2hkR2hwY3k1eWRXNXVaWElwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjNKMWJtNWxjaUJwY3lCdWIzUWdjMlYwSnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Y25WdWJtVnlPMXh1SUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0JuWlhRZ1JtbDBLQ2w3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSHNnVUhKbFpHbGpkRzl5SUgwZ1BTQjBhR2x6TGt4aGVXVnlVblZ1Ym1WeU8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHbHVjSFYwVkdWdWMyOXlLVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUc5MWRGQjFkRlJsYm5OdmNpQTlJRkJ5WldScFkzUnZjaWhwYm5CMWRGUmxibk52Y2lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2JHOW5VSEp2WWlBOUlHOTFkRkIxZEZSbGJuTnZjaTV6ZFdJb2IzVjBVSFYwVkdWdWMyOXlMbXh2WjFOMWJVVjRjQ2d4TENCMGNuVmxLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JHOW5VSEp2WWp0Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdaMlYwSUZCeVpXUnBZM1FvS1h0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnUm1sMElEMGdkR2hwY3k1R2FYUTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9hVzV3ZFhSVVpXNXpiM0lwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2JHOW5VSEp2WWlBOUlFWnBkQ2hwYm5CMWRGUmxibk52Y2lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2NISmxaR2xqZEdWa1EyeGhjM01nUFNCc2IyZFFjbTlpTG1GeVowMWhlQ2d4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQndjbVZrYVdOMFpXUkRiR0Z6Y3p0Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUWdUMjVsU0c5MFVISmxaR2xqZENncGUxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCUWNtVmthV04wSUQwZ2RHaHBjeTVRY21Wa2FXTjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLR2x1Y0hWMFZHVnVjMjl5S1QwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIQnlaV1JwWTNSbFpFTnNZWE56SUQwZ1VISmxaR2xqZENocGJuQjFkRlJsYm5OdmNpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdiMjVsU0c5MFVISmxaR2xqZENBOUlIUm9hWE11VkM1dmJtVkliM1FvY0hKbFpHbGpkR1ZrUTJ4aGMzTXNJSFJvYVhNdWJuVnRRMnhoYzNNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzl1WlVodmRGQnlaV1JwWTNRN1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVJQ0FnSUdkbGRDQk1iM056S0NsN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUVacGRDQTlJSFJvYVhNdVJtbDBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLR2x1Y0hWMFZHVnVjMjl5TENCc1lXSmxiRlJsYm5OdmNpazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JzYjJkUWNtOWlJRDBnUm1sMEtHbHVjSFYwVkdWdWMyOXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JzYVd0bGJHbG9iMjlrSUQwZ2JHOW5VSEp2WWk1dVpXY29LUzV0ZFd3b2JHRmlaV3hVWlc1emIzSXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR3h2YzNNZ1BTQnNhV3RsYkdsb2IyOWtMbk4xYlNneEtTNXRaV0Z1S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiRzl6Y3p0Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNTlYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlRhVzVuYkdWTVlXSmxiRU5zWVhOemFXWnBZMkYwYVc5dU95SXNJbVY0Y0c5eWRDQjdJR05oZFhOaGJFNWxkRTF2WkdWc2N5d2dYRzRnSUNBZ0lDQWdJQ0JDWVhObFUzVndaWEoyYVhObFpFMXZaR1ZzTENCY2JpQWdJQ0FnSUNBZ0lGTnBibWRzWlV4aFltVnNRMnhoYzNOcFptbGpZWFJwYjI0Z2ZTQm1jbTl0SUNjdUwxTjFjR1Z5ZG1selpXUk5iMlJsYkhNdmFXNWtaWGduTzF4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5Qk5iMlJsYkUxcGVHbHVjeUI5SUdaeWIyMGdKeTR2Ylc5a1pXd3ViV2w0YVc1ekp6dGNiaUlzSW1OdmJuTjBJRlZ1VTNWd1pYSjJhWE5sWkUxdlpHVnNjMDFwZUdsdWN5QTlJQ2hDWVhObFVHbHdaV3hwYm1WRGJHRnpjeWs5UGlCamJHRnpjeUJsZUhSbGJtUnpJRUpoYzJWUWFYQmxiR2x1WlVOc1lYTnplMXh1SUNBZ0lHZGxkQ0JNYjNOelRXOWtaV3dvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJtVjBUVzlrWld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oyNWxkRTF2WkdWc0lHbHpJRzV2ZENCelpYUW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXVaWFJOYjJSbGJDNU1iM056TzF4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZENCR2FYUk5iMlJsYkNncGUxeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NXVaWFJOYjJSbGJDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25ibVYwVFc5a1pXd2dhWE1nYm05MElITmxkQ2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTVsZEUxdlpHVnNMa1pwZER0Y2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ1oyVjBJRTl1WlVodmRGQnlaV1JwWTNSTmIyUmxiQ2dwZTF4dUlDQWdJQ0FnSUNCcFppZ2hkR2hwY3k1dVpYUk5iMlJsYkNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmJtVjBUVzlrWld3Z2FYTWdibTkwSUhObGRDY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtNWxkRTF2WkdWc0xrOXVaVWh2ZEZCeVpXUnBZM1E3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwSUZCeVpXUnBZM1JOYjJSbGJDZ3BlMXh1SUNBZ0lDQWdJQ0JwWmlnaGRHaHBjeTV1WlhSTmIyUmxiQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYm1WMFRXOWtaV3dnYVhNZ2JtOTBJSE5sZENjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG01bGRFMXZaR1ZzTGxCeVpXUnBZM1E3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwSUVWdVkyOWtaVTF2WkdWc0tDbDdYRzRnSUNBZ0lDQWdJR2xtS0NGMGFHbHpMbTVsZEUxdlpHVnNLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLQ2R1WlhSTmIyUmxiQ0JwY3lCdWIzUWdjMlYwSnlrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11Ym1WMFRXOWtaV3d1Ulc1amIyUmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkQ0JFWldOdlpHVk5iMlJsYkNncGUxeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NXVaWFJOYjJSbGJDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25ibVYwVFc5a1pXd2dhWE1nYm05MElITmxkQ2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTVsZEUxdlpHVnNMa1JsWTI5a1pUdGNiaUFnSUNCOVhHNWNibHh1SUNBZ0lHZGxkQ0JOYjJSbGJDZ3BlMXh1SUNBZ0lDQWdJQ0JwWmlnaGRHaHBjeTV1WlhSTmIyUmxiQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYm1WMFRXOWtaV3dnYVhNZ2JtOTBJSE5sZENjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG01bGRFMXZaR1ZzTzF4dUlDQWdJSDFjYmlBZ0lDQmNibHh1SUNBZ0lITmxkQ0JOYjJSbGJDaHRiMlJsYkNsN0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2RHaHBjeTV1WlhSTmIyUmxiQ0E5SUcxdlpHVnNPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITmxkRUo1UTI5dVptbG5LSEJwY0dWc2FXNWxRMjl1Wm1sbktYdGNiaUFnSUNBZ0lDQWdhV1lvYzNWd1pYSXVjMlYwUW5sRGIyNW1hV2NwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjM1Z3WlhJdWMyVjBRbmxEYjI1bWFXY29jR2x3Wld4cGJtVkRiMjVtYVdjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFJvYVhNdVRHOW5aMlZ5TG1keWIzVndRbVZuYVc0b0ozTmxkQ0JOYjJSbGJDQmllU0JqYjI1bWFXY25LVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdleUJOYjJSbGJDQjlJRDBnY0dsd1pXeHBibVZEYjI1bWFXY3VUbVYwTzF4dUlDQWdJQ0FnSUNCcFppZ2hUVzlrWld3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb1lFMXZaR1ZzSUdseklHNXZkQ0J6WlhRZ2FXNGdKSHRLVTA5T0xuTjBjbWx1WjJ4cFpua29jR2x3Wld4cGJtVkRiMjVtYVdjcGZXQXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUUxdlpHVnNMa3hoZVdWeVVuVnVibVZ5SUQwZ2RHaHBjeTVNWVhsbGNsSjFibTVsY2p0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVOYjJSbGJDQTlJRTF2WkdWc08xeHVJQ0FnSUNBZ0lDQjBhR2x6TGt4dloyZGxjaTVuY205MWNFVnVaQ2dwTzF4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElGVnVVM1Z3WlhKMmFYTmxaRTF2WkdWc2MwMXBlR2x1Y3p0Y2JpSXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYMk52Y21WZlh6c2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMkYxYzJGc1gyNWxkRjkxZEdsc2MxOWZPeUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9IiwiLyoqXG4gKiBUaGUgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zIGNsYXNzIGlzIHRoZSBtaXhpcyBjbGFzcyBmb3IgZGVwbG95aW5nIGVuc2VtYmxlIG1vZGVsXG4gKiBAY2xhc3MgQ2F1c2FsTmV0XG4gKiBAZXh0ZW5kcyB7IEJhc2VQaXBlbGluZUNsYXNzIH1cbiAqL1xuY29uc3QgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3Mge1xuICAgIC8qKlxuICAgICAqIFByb3ZpZGUgRW5zZW1ibGVJbmZlcmVuY2VyIGNhbGxlciwgRW5zZW1ibGVNb2RlbFByZWRpY3QgbXVzdCBiZSBzZXQgaW4gcHJpb3JcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICBnZXQgRW5zZW1ibGVJbmZlcmVuY2VyKCl7XG4gICAgICAgIGNvbnN0IE1vZGVsTGVuc2VzID0gKCk9Pih7IEVuc2VtYmxlUHJlZGljdDogdGhpcy5FbnNlbWJsZU1vZGVsUHJlZGljdCB9KTtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgcmV0dXJuIGFzeW5jIChpbnB1dCk9PntcbiAgICAgICAgICAgIGxldCB7IEVuc2VtYmxlUHJlZGljdCB9ID0gaW5wdXQ7XG4gICAgICAgICAgICBsZXQgaW5mZXIgPSB7fTtcbiAgICAgICAgICAgIGlmKEVuc2VtYmxlUHJlZGljdCl7XG4gICAgICAgICAgICAgICAgbGV0IGlucHV0VGVuc29yID0gVC50ZW5zb3IoRW5zZW1ibGVQcmVkaWN0KS5hc1R5cGUoJ2Zsb2F0MzInKS5yZXNoYXBlKFsxLCAtMV0pO1xuICAgICAgICAgICAgICAgIGxldCBwcmVkaWN0VGVuc29yID0gYXdhaXQgTW9kZWxMZW5zZXMoKS5FbnNlbWJsZVByZWRpY3QoaW5wdXRUZW5zb3IpO1xuICAgICAgICAgICAgICAgIGluZmVyLkVuc2VtYmxlUHJlZGljdCA9IGF3YWl0IHByZWRpY3RUZW5zb3IuZGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluZmVyO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBwcm9jZXNzIHBpcGVsaW5lQ29uZmlnIG9iamVjdCBmb3IgZW5zZW1ibGUgZGVwbG95bWVudFxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IHBpcGVsaW5lQ29uZmlnXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgZW5zZW1ibGUgZGVwbG95bWVudCBieSBjb25maWcnKTtcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50LkVuc2VtYmxlSW5mZXJlbmNlciA9IHRoaXMuRW5zZW1ibGVJbmZlcmVuY2VyO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICByZXR1cm4gcGlwZWxpbmVDb25maWc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGRlcGxveSBtb2RlbFxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9IGRlcGxveW1lbnQgc3VtbWFyeVxuICAgICAqL1xuICAgIGFzeW5jIGRlcGxveSgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5EZXBsb3ltZW50LmRlcGxveSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuc2VtYmxlRGVwbG95bWVudE1peGluczsiLCJjb25zdCBFbnNlbWJsZUV2YWx1YXRvck1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzeyBcbiAgICBhc3luYyBlbnNlbWJsZVRlc3QoYmF0Y2hTaXplLCBtZXRob2Q9J2FjY3VyYWN5Jyl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZScpOyBcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRW5zZW1ibGVFdmFsdWF0b3JNaXhpbnM7IiwiLyoqXG4gKiBUaGUgRW5zZW1ibGVNb2RlbE1peGlucyBjbGFzcyBpcyB0aGUgbWl4aXMgY2xhc3MgZm9yIGVuc2VtYmxlIG1vZGVsIGNhbGxlclxuICogQGNsYXNzIEVuc2VtYmxlTW9kZWxNaXhpbnNcbiAqIEBleHRlbmRzIHtCYXNlUGlwZWxpbmVDbGFzc31cbiAqL1xuY29uc3QgRW5zZW1ibGVNb2RlbE1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzeyBcblxuICAgIGdldCBFbnNlbWJsZU1vZGVsUHJlZGljdCgpe1xuICAgICAgICBjb25zdCBGaXRNb2RlbCA9IHRoaXMuRml0TW9kZWw7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGNvbnN0IEVuc2VtYmxlTW9kZWxzID0gdGhpcy5FbnNlbWJsZU1vZGVscztcbiAgICAgICAgY29uc3QgQmFnZ2luZyA9IGFzeW5jIChpbnB1dFRlbnNvcik9PntcbiAgICAgICAgICAgIGxldCBwcm9iRml0cyA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBFbnNlbWJsZU1vZGVscyl7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUGFyYW1zKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvYiA9IEZpdE1vZGVsKGlucHV0VGVuc29yKS5leHAoKTtcbiAgICAgICAgICAgICAgICBwcm9iRml0cy5wdXNoKHByb2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG1lYW5Qcm9iID0gVC5zdGFjayhwcm9iRml0cykubWVhbigwKTtcbiAgICAgICAgICAgIHJldHVybiBtZWFuUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBCYWdnaW5nOyAgIFxuICAgIH1cblxuICAgIHNldCBFbnNlbWJsZU1vZGVscyhtb2RlbGlzdCl7XG4gICAgICAgIHRoaXMuZW5zZW1ibGVNb2RlbHMgPSBtb2RlbGlzdDtcbiAgICB9XG5cbiAgICBnZXQgRW5zZW1ibGVNb2RlbHMoKXtcbiAgICAgICAgaWYoIXRoaXMuZW5zZW1ibGVNb2RlbHMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0Vuc2VtYmxlTW9kZWxzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5zZW1ibGVNb2RlbHM7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEVuc2VtYmxlTW9kZWxNaXhpbnM7IiwiLyoqXG4gKiBUaGUgRW5zZW1ibGVUcmFpbmVyTWl4aW5zIGNsYXNzIGlzIHRoZSBtaXhpbnMgY2xhc3MgZm9yIHRyYWluaW5nIGVuc2FtYmxhYmxlIG1vZGVsc1xuICogQGNsYXNzIEVuc2VtYmxlVHJhaW5lck1peGluc1xuICogQGV4dGVuZHMge0Jhc2VQaXBlbGluZUNsYXNzfVxuICovXG5jb25zdCBFbnNlbWJsZVRyYWluZXJNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICAvKipcbiAgICAgKiBUcmFpbiBtb2RlbCBhbmQgc2F2ZSB0byBzdG9yYWdlIHVuZGVyIHRoZSBnaXZlbiBmaWxlbmFtZS4gcGFyYW1ldGVycyBpcyByZWluaXRlZCBmb3IgZWFjaCB0cmFpbmluZ1xuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IG51bUVwb2Noc1xuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IGJhdGNoU2l6ZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IHNhdmVGaWxlTmFtZVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9IFRyYWluaW5nIGxvc3Nlc1xuICAgICAqL1xuICAgIGFzeW5jIGVuc2VtYmxlVHJhaW4obnVtRXBvY2hzLCBiYXRjaFNpemUsIHNhdmVGaWxlTmFtZSl7XG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycyA9IHRoaXMuUGFyYW1ldGVySW5pdGlhbGl6ZXIodGhpcy5MYXllclJ1bm5lci5OZXRMYXllcnMpO1xuICAgICAgICBsZXQgbG9zc2VzID0gYXdhaXQgdGhpcy50cmFpbihudW1FcG9jaHMsIGJhdGNoU2l6ZSk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVBhcmFtcyhzYXZlRmlsZU5hbWUpO1xuICAgICAgICByZXR1cm4ge1tzYXZlRmlsZU5hbWVdOiBsb3NzZXN9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuc2VtYmxlVHJhaW5lck1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEVuc2VtYmxlVHJhaW5lck1peGlucyB9IGZyb20gJy4vZW5zZW1ibGVUcmFpbmVyLm1peGlucyc7IFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbnNlbWJsZU1vZGVsTWl4aW5zIH0gZnJvbSAnLi9lbnNlbWJsZU1vZGVsLm1peGlucyc7IFxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgfSBmcm9tICcuL2Vuc2VtYmxlRGVwbG95bWVudC5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbnNlbWJsZUV2YWx1YXRvck1peGlucyB9IGZyb20gJy4vZW5zZW1ibGVFdmFsdWF0b3IubWl4aW5zJzsgIiwiaW1wb3J0IHsgRGF0YVNvdXJjZU1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQuZGF0YXNldHMnO1xuaW1wb3J0IHsgUHJlcHJvY2Vzc2luZ01peGlucywgY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSB9IGZyb20gJ2NhdXNhbC1uZXQucHJlcHJvY2Vzc2luZyc7XG5pbXBvcnQgeyBUcmFpbmVyTWl4aW5zLCBFdmFsdWF0b3JNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0Lm9wdGltaXplcnMnO1xuaW1wb3J0IHsgTW9kZWxNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0Lm1vZGVscyc7XG5pbXBvcnQgeyBjYXVzYWxOZXRSdW5uZXIsIExheWVyUnVubmVyTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5sYXllcic7XG5pbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGNhdXNhbE5ldERlcGxveW1lbnQsIERlcGxveW1lbnRNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmRlcGxveW1lbnQnO1xuaW1wb3J0IHsgdGVybUxvZ2dlciwgTG9nZ2VyTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5sb2cnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmltcG9ydCB7IEVuc2VtYmxlVHJhaW5lck1peGlucywgRW5zZW1ibGVNb2RlbE1peGlucywgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zIH0gZnJvbSAnLi9FbnNlbWJsZS9pbmRleCc7XG4vKipcbiAqIFRoZSBDYXVzYWxOZXQgY2xhc3MgaXMgdGhlIHByZWJ1aWx0IHBpcGVsaW5lIHdpdGggbWV0aG9kcyBmb3IgXG4gKiBwcm9jZXNzaW5nIGRhdGEvdHJhaW4vZXZhbHVhdGUvZGVwbG95L2Vuc2VtYmxlIGRlcGxveVxuICogeyBtaXhXaXRoOiBbIFxuICogICAgICAgICBEYXRhU291cmNlTWl4aW5zLFxuICogICAgICAgICBQcmVwcm9jZXNzaW5nTWl4aW5zLFxuICogICAgICAgICBMYXllclJ1bm5lck1peGlucywgXG4gKiAgICAgICAgIE1vZGVsTWl4aW5zLCBcbiAqICAgICAgICAgRXZhbHVhdG9yTWl4aW5zLFxuICogICAgICAgICBUcmFpbmVyTWl4aW5zLCBcbiAqICAgICAgICAgTG9nZ2VyTWl4aW5zLFxuICogICAgICAgICBEZXBsb3ltZW50TWl4aW5zLFxuICogICAgICAgICBFbnNlbWJsZVRyYWluZXJNaXhpbnMsXG4gKiAgICAgICAgIEVuc2VtYmxlTW9kZWxNaXhpbnMsIFxuICogICAgICAgICBFbnNlbWJsZURlcGxveW1lbnRNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0XG4gKiBAZXh0ZW5kcyB7IFRlbnNvciB9XG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXQvZW5zZW1ibGUubG9naXN0aWNSZWdyZXNzaW9uLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXQgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKFRlbnNvciwgWyBcbiAgICAgICAgRGF0YVNvdXJjZU1peGlucyxcbiAgICAgICAgUHJlcHJvY2Vzc2luZ01peGlucyxcbiAgICAgICAgTGF5ZXJSdW5uZXJNaXhpbnMsIFxuICAgICAgICBNb2RlbE1peGlucywgXG4gICAgICAgIEV2YWx1YXRvck1peGlucyxcbiAgICAgICAgVHJhaW5lck1peGlucywgXG4gICAgICAgIExvZ2dlck1peGlucyxcbiAgICAgICAgRGVwbG95bWVudE1peGlucyxcbiAgICAgICAgRW5zZW1ibGVUcmFpbmVyTWl4aW5zLFxuICAgICAgICBFbnNlbWJsZU1vZGVsTWl4aW5zLCBcbiAgICAgICAgRW5zZW1ibGVEZXBsb3ltZW50TWl4aW5zIF0pe1xuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDYXVzYWxOZXQuXG4gICAgICogQHBhcmFtIHsgRnVuY3RvciB9IGZ1bmN0b3JcbiAgICAgKiBAcGFyYW0geyBMb2cgfSBsb2dnZXJcbiAgICAgKiBAcGFyYW0geyBGdW5jdG9yIH0gc3RyZWFtUHJlcHJvY2Vzc2luZ1xuICAgICAqIEBwYXJhbSB7IFRlbnNvciB9IG5ldFBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0geyBUZW5zb3IgfSBuZXRSdW5uZXJcbiAgICAgKiBAcGFyYW0geyBFdmVudCB9IHN0cmVhbURlcGxveW1lbnRcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoIGZ1bmN0b3IsIGxvZ2dlciwgc3RyZWFtUHJlcHJvY2Vzc2luZywgbmV0UnVubmVyLCBzdHJlYW1EZXBsb3ltZW50KXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICB0aGlzLkxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nID0gc3RyZWFtUHJlcHJvY2Vzc2luZztcbiAgICAgICAgdGhpcy5MYXllclJ1bm5lciA9IG5ldFJ1bm5lcjsgICAgICAgIFxuICAgICAgICB0aGlzLkRlcGxveW1lbnQgPSBzdHJlYW1EZXBsb3ltZW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3ICBDYXVzYWxOZXQoICBmdW5jdG9yLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybUxvZ2dlciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXVzYWxOZXRSdW5uZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXVzYWxOZXREZXBsb3ltZW50ICk7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIEZ1bmN0b3IgY2xhc3MgcHJvdmlkZXMgY29tbW9uIHVzZWQgZGF0YSBwcm9jZXNzaW5nIG1ldGhvZHMgZm9yIHBpcGVsaW5lXG4gKiBAY2xhc3MgRnVuY3RvclxuICogQGV4dGVuZHMgQmFzZUZ1bmN0b3JcbiAqL1xuY2xhc3MgRnVuY3RvciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFtdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXQgfSBmcm9tICcuL2NhdXNhbE5ldCc7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2RhdGFzZXRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sb2dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9vcHRpbWl6ZXJzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==