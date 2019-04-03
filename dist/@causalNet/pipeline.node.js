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
      this.emit('inferencer', inferValue);
    });
  }

  get Inferencer() {
    if (!this.deployInferencer) {
      throw Error('Inferencer is not set');
    }

    return this.deployInferencer;
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
    const ModelLense = () => {
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
      const Model = ModelLense();

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

    this.Logger.groupBegin('deployment');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvY2F1c2FsTmV0RGVwbG95bWVudC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2Z1bmN0b3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXREZXBsb3ltZW50IiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJjb25zdHJ1Y3RvciIsImZ1bmN0b3IiLCJGIiwiUiIsIkNvcmVGdW5jdG9yIiwiRW1pdHRlciIsImVtaXR0ZXIiLCJkZXBsb3lFbWl0dGVyIiwiRXJyb3IiLCJMaXN0ZW5lciIsImxpc3RlbmVyIiwiZGVwbG95TGlzdGVuZXIiLCJvbiIsImluZmVyIiwiSW5mZXJlbmNlciIsImluZmVyZW5jZXIiLCJkZXBsb3lJbmZlcmVuY2VyIiwiZW1pdFZhbHVlIiwiaW5mZXJWYWx1ZSIsImVtaXQiLCJkZXBsb3kiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvdW50ZXIiLCJEZXBsb3ltZW50TWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJEZXBsb3ltZW50IiwiZGVwbG95bWVudCIsIk1vZGVsTGVuc2UiLCJNb2RlbCIsIlQiLCJpbnB1dCIsIlByZWRpY3QiLCJFbmNvZGUiLCJEZWNvZGUiLCJpbnB1dFRlbnNvciIsInRlbnNvciIsImFzVHlwZSIsInJlc2hhcGUiLCJwcmVkaWN0VGVuc29yIiwiZGF0YSIsImVuY29kZVRlbnNvciIsImRlY29kZVRlbnNvciIsInNldEJ5Q29uZmlnIiwicGlwZWxpbmVDb25maWciLCJMb2dnZXIiLCJncm91cEJlZ2luIiwiZ3JvdXBFbmQiLCJGdW5jdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsbUJBQU4sU0FBa0NDLHlEQUFRLENBQUNDLE9BQVQsQ0FBa0JDLHFEQUFsQixFQUF5QixFQUF6QixDQUFs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Z0I7QUFDdkIsUUFBRyxNQUFNRCxXQUFULEVBQXFCO0FBQ2pCLFlBQU1BLFdBQU4sQ0FBa0JDLGNBQWxCO0FBQ0g7O0FBQ0QsU0FBS0MsTUFBTCxDQUFZQyxVQUFaLENBQXVCLFlBQXZCO0FBQ0EsVUFBTTtBQUFFMUMsYUFBRjtBQUFXSTtBQUFYLFFBQXdCb0MsY0FBYyxDQUFDbEIsVUFBN0M7QUFDQSxTQUFLQSxVQUFMLENBQWdCdEIsT0FBaEIsR0FBMEJBLE9BQTFCO0FBQ0EsU0FBS3NCLFVBQUwsQ0FBZ0JsQixRQUFoQixHQUEyQkEsUUFBM0I7QUFDQSxTQUFLa0IsVUFBTCxDQUFnQmIsVUFBaEIsR0FBNkIsS0FBS0EsVUFBbEM7QUFDQSxTQUFLZ0MsTUFBTCxDQUFZRSxRQUFaO0FBQ0EsV0FBT0gsY0FBUDtBQUNIOztBQUVELFFBQU16QixNQUFOLEdBQWM7QUFDVixXQUFPLE1BQU0sS0FBS08sVUFBTCxDQUFnQlAsTUFBaEIsRUFBYjtBQUNIOztBQXhEMEUsQ0FBL0U7O0FBMkRlSywrRUFBZixFOzs7Ozs7Ozs7Ozs7QUMzREE7QUFBQTtBQUFBO0FBQUE7QUFDZSxtRUFBSXdCLHVEQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kZXBsb3ltZW50LndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RlcGxveW1lbnRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RlcGxveW1lbnRcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuaW1wb3J0IHsgcGxhdGZvcm0sIGFzc2VydCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuXG5jbGFzcyBDYXVzYWxOZXREZXBsb3ltZW50IGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggRXZlbnQsIFtdICl7XG4gICAgXG4gICAgY29uc3RydWN0b3IoZnVuY3Rvcil7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuRiA9IGZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IGZ1bmN0b3IuQ29yZUZ1bmN0b3I7XG4gICAgfVxuXG4gICAgc2V0IEVtaXR0ZXIoZW1pdHRlcil7XG4gICAgICAgIHRoaXMuZGVwbG95RW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgfVxuXG4gICAgZ2V0IEVtaXR0ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95RW1pdHRlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRW1pdHRlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95RW1pdHRlcjtcbiAgICB9XG5cbiAgICBzZXQgTGlzdGVuZXIobGlzdGVuZXIpe1xuICAgICAgICB0aGlzLmRlcGxveUxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgICAgIHRoaXMub24oJ2luZmVyZW5jZXInLCAoaW5mZXIpPT57XG4gICAgICAgICAgICB0aGlzLmRlcGxveUxpc3RlbmVyKGluZmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGdldCBMaXN0ZW5lcigpe1xuICAgICAgICBpZighdGhpcy5kZXBsb3lMaXN0ZW5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTGlzdGVuZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveUxpc3RlbmVyO1xuICAgIH1cblxuICAgIHNldCBJbmZlcmVuY2VyKGluZmVyZW5jZXIpe1xuICAgICAgICB0aGlzLmRlcGxveUluZmVyZW5jZXIgPSBpbmZlcmVuY2VyO1xuICAgICAgICB0aGlzLm9uKCdlbWl0dGVyJywgYXN5bmMgKGVtaXRWYWx1ZSk9PntcbiAgICAgICAgICAgIGxldCBpbmZlclZhbHVlID0gYXdhaXQgdGhpcy5kZXBsb3lJbmZlcmVuY2VyKGVtaXRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2luZmVyZW5jZXInLCBpbmZlclZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IEluZmVyZW5jZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95SW5mZXJlbmNlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignSW5mZXJlbmNlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95SW5mZXJlbmNlcjtcbiAgICB9XG5cbiAgICBhc3luYyBkZXBsb3koKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICBsZXQgZW1pdFZhbHVlID0gYXdhaXQgdGhpcy5FbWl0dGVyKCk7XG4gICAgICAgICAgICB3aGlsZShlbWl0VmFsdWUgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZW1pdHRlcicsIGVtaXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICAgICAgICAgIGVtaXRWYWx1ZSA9IGF3YWl0IHRoaXMuRW1pdHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShjb3VudGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0RGVwbG95bWVudChmdW5jdG9yKTsiLCJjb25zdCBEZXBsb3ltZW50TWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3Mge1xuICAgXG4gICAgc2V0IERlcGxveW1lbnQoZGVwbG95bWVudCl7XG4gICAgICAgIHRoaXMuZGVwbG95bWVudCA9IGRlcGxveW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IERlcGxveW1lbnQoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95bWVudCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZGVwbG95bWVudCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95bWVudDtcbiAgICB9XG5cbiAgICBnZXQgSW5mZXJlbmNlcigpe1xuICAgICAgICBjb25zdCBNb2RlbExlbnNlID0gKCk9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1vZGVsO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICByZXR1cm4gYXN5bmMgKGlucHV0KT0+e1xuICAgICAgICAgICAgbGV0IHsgUHJlZGljdCwgRW5jb2RlLCBEZWNvZGUgfSA9IGlucHV0O1xuICAgICAgICAgICAgbGV0IGluZmVyID0ge307XG4gICAgICAgICAgICBjb25zdCBNb2RlbCA9IE1vZGVsTGVuc2UoKTtcbiAgICAgICAgICAgIGlmKFByZWRpY3Qpe1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKFByZWRpY3QpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IHByZWRpY3RUZW5zb3IgPSBNb2RlbC5QcmVkaWN0KGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgICAgICBpbmZlci5QcmVkaWN0ID0gYXdhaXQgcHJlZGljdFRlbnNvci5kYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihFbmNvZGUpe1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKEVuY29kZSkuYXNUeXBlKCdmbG9hdDMyJykucmVzaGFwZShbMSwgLTFdKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5jb2RlVGVuc29yID0gTW9kZWwuRW5jb2RlKGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgICAgICBpbmZlci5FbmNvZGUgPSBhd2FpdCBlbmNvZGVUZW5zb3IuZGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoRGVjb2RlKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihEZWNvZGUpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IGRlY29kZVRlbnNvciA9IE1vZGVsLkVuY29kZShpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICAgICAgaW5mZXIuRGVjb2RlID0gYXdhaXQgZGVjb2RlVGVuc29yLmRhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmZlcjtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdkZXBsb3ltZW50Jyk7XG4gICAgICAgIGNvbnN0IHsgRW1pdHRlciwgTGlzdGVuZXIgfSA9IHBpcGVsaW5lQ29uZmlnLkRlcGxveW1lbnQ7XG4gICAgICAgIHRoaXMuRGVwbG95bWVudC5FbWl0dGVyID0gRW1pdHRlcjtcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50Lkxpc3RlbmVyID0gTGlzdGVuZXI7XG4gICAgICAgIHRoaXMuRGVwbG95bWVudC5JbmZlcmVuY2VyID0gdGhpcy5JbmZlcmVuY2VyO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICByZXR1cm4gcGlwZWxpbmVDb25maWc7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVwbG95KCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLkRlcGxveW1lbnQuZGVwbG95KCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVwbG95bWVudE1peGluczsiLCJpbXBvcnQgeyBGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXREZXBsb3ltZW50IH0gZnJvbSAnLi9jYXVzYWxOZXREZXBsb3ltZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRGVwbG95bWVudE1peGlucyB9IGZyb20gJy4vZGVwbG95bWVudC5taXhpbnMnOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=

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











class CausalNet extends causal_net_utils__WEBPACK_IMPORTED_MODULE_6__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_5__["Tensor"], [causal_net_datasets__WEBPACK_IMPORTED_MODULE_0__["DataSourceMixins"], causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1__["PreprocessingMixins"], causal_net_layer__WEBPACK_IMPORTED_MODULE_4__["LayerRunnerMixins"], causal_net_models__WEBPACK_IMPORTED_MODULE_3__["ModelMixins"], causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2__["EvaluatorMixins"], causal_net_optimizers__WEBPACK_IMPORTED_MODULE_2__["TrainerMixins"], causal_net_log__WEBPACK_IMPORTED_MODULE_8__["LoggerMixins"], causal_net_deployment__WEBPACK_IMPORTED_MODULE_7__["DeploymentMixins"]]) {
  constructor(functor, logger, streamPreprocessing, netRunner, streamDeployment) {
    super();
    this.F = functor;
    this.Logger = logger;
    this.Preprocessing = streamPreprocessing;
    this.LayerRunner = netRunner;
    this.Deployment = streamDeployment;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CausalNet(_functor__WEBPACK_IMPORTED_MODULE_9__["default"], causal_net_log__WEBPACK_IMPORTED_MODULE_8__["termLogger"], causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_1__["causalNetPreprocessingStream"], causal_net_layer__WEBPACK_IMPORTED_MODULE_4__["causalNetRunner"], causal_net_deployment__WEBPACK_IMPORTED_MODULE_7__["causalNetDeployment"]));

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


class Functor extends causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"] {
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
/*! exports provided: CausalNet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNet */ "./src/causalNet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CausalNet", function() { return _causalNet__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9wYWNrYWdlcy9jYXVzYWxpdHktZGVwbG95bWVudC9kaXN0L0BjYXVzYWxOZXQvZGVwbG95bWVudC53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3BhY2thZ2VzL2NhdXNhbGl0eS1tb2RlbHMvZGlzdC9AY2F1c2FsTmV0L21vZGVscy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxOZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmRhdGFzZXRzXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQubGF5ZXJcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5sb2dcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5vcHRpbWl6ZXJzXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0IiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiRGF0YVNvdXJjZU1peGlucyIsIlByZXByb2Nlc3NpbmdNaXhpbnMiLCJMYXllclJ1bm5lck1peGlucyIsIk1vZGVsTWl4aW5zIiwiRXZhbHVhdG9yTWl4aW5zIiwiVHJhaW5lck1peGlucyIsIkxvZ2dlck1peGlucyIsIkRlcGxveW1lbnRNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImZ1bmN0b3IiLCJsb2dnZXIiLCJzdHJlYW1QcmVwcm9jZXNzaW5nIiwibmV0UnVubmVyIiwic3RyZWFtRGVwbG95bWVudCIsIkYiLCJMb2dnZXIiLCJQcmVwcm9jZXNzaW5nIiwiTGF5ZXJSdW5uZXIiLCJEZXBsb3ltZW50IiwidGVybUxvZ2dlciIsImNhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0iLCJjYXVzYWxOZXRSdW5uZXIiLCJjYXVzYWxOZXREZXBsb3ltZW50IiwiRnVuY3RvciIsIkJhc2VGdW5jdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RCwyQkFBMkIsbUJBQU8sQ0FBQyx3Q0FBaUIsR0FBRyxtQkFBTyxDQUFDLDBDQUFrQjtBQUNqRixNQUFNLEVBS3VGO0FBQzdGLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEcscUVBQXFFLEVBQUU7O0FBRW5MO0FBQ0EseUdBQXlHLG1FQUFtRSxFQUFFOzs7OztBQUs5SyxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxP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QyxFQVF6Q0Msc0VBUnlDLENBQXpCLENBQXhCLENBUTJCO0FBQ3ZCQyxhQUFXLENBQUVDLE9BQUYsRUFBV0MsTUFBWCxFQUFtQkMsbUJBQW5CLEVBQXdDQyxTQUF4QyxFQUFtREMsZ0JBQW5ELEVBQW9FO0FBQzNFO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTTCxPQUFUO0FBQ0EsU0FBS00sTUFBTCxHQUFjTCxNQUFkO0FBQ0EsU0FBS00sYUFBTCxHQUFxQkwsbUJBQXJCO0FBQ0EsU0FBS00sV0FBTCxHQUFtQkwsU0FBbkI7QUFDQSxTQUFLTSxVQUFMLEdBQWtCTCxnQkFBbEI7QUFDSDs7QUFSc0I7O0FBV1pqQix3RUFBUyxDQUFFYSxnREFBRixFQUNFVSx5REFERixFQUVFQyxxRkFGRixFQUdFQyxnRUFIRixFQUlFQyx5RUFKRixDQUF4QixFOzs7Ozs7Ozs7Ozs7QUM5QkE7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsTUFBTUMsT0FBTixTQUFzQkMsdURBQXRCLENBQWlDO0FBQzdCaEIsYUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFINEI7O0FBTWxCLG1FQUFJZSxPQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcGlwZWxpbmUubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuZGF0YXNldHNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxheWVyXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sb2dcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm9wdGltaXplcnNcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQuZGF0YXNldHNcIiwgXCJjYXVzYWwtbmV0LmxheWVyXCIsIFwiY2F1c2FsLW5ldC5sb2dcIiwgXCJjYXVzYWwtbmV0Lm9wdGltaXplcnNcIiwgXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcGlwZWxpbmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmRhdGFzZXRzXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sYXllclwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5vcHRpbWl6ZXJzXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuZGF0YXNldHNcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmxheWVyXCJdLCByb290W1wiY2F1c2FsLW5ldC5sb2dcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm9wdGltaXplcnNcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9kYXRhc2V0c19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbGF5ZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfb3B0aW1pemVyc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvZGVwbG95bWVudFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvZGVwbG95bWVudFwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9zcmMvY2F1c2FsTmV0RGVwbG95bWVudC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2NhdXNhbE5ldERlcGxveW1lbnQuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZnVuY3Rvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9mdW5jdG9yICovIFwiLi9zcmMvZnVuY3Rvci5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LnV0aWxzICovIFwiY2F1c2FsLW5ldC51dGlsc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fKTtcblxuXG5cblxuY2xhc3MgQ2F1c2FsTmV0RGVwbG95bWVudCBleHRlbmRzIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcInBsYXRmb3JtXCJdLm1peFdpdGgoY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJFdmVudFwiXSwgW10pIHtcbiAgY29uc3RydWN0b3IoZnVuY3Rvcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICB0aGlzLlIgPSBmdW5jdG9yLkNvcmVGdW5jdG9yO1xuICB9XG5cbiAgc2V0IEVtaXR0ZXIoZW1pdHRlcikge1xuICAgIHRoaXMuZGVwbG95RW1pdHRlciA9IGVtaXR0ZXI7XG4gIH1cblxuICBnZXQgRW1pdHRlcigpIHtcbiAgICBpZiAoIXRoaXMuZGVwbG95RW1pdHRlcikge1xuICAgICAgdGhyb3cgRXJyb3IoJ0VtaXR0ZXIgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlcGxveUVtaXR0ZXI7XG4gIH1cblxuICBzZXQgTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICB0aGlzLmRlcGxveUxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgdGhpcy5vbignaW5mZXJlbmNlcicsIGluZmVyID0+IHtcbiAgICAgIHRoaXMuZGVwbG95TGlzdGVuZXIoaW5mZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IExpc3RlbmVyKCkge1xuICAgIGlmICghdGhpcy5kZXBsb3lMaXN0ZW5lcikge1xuICAgICAgdGhyb3cgRXJyb3IoJ0xpc3RlbmVyIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZXBsb3lMaXN0ZW5lcjtcbiAgfVxuXG4gIHNldCBJbmZlcmVuY2VyKGluZmVyZW5jZXIpIHtcbiAgICB0aGlzLmRlcGxveUluZmVyZW5jZXIgPSBpbmZlcmVuY2VyO1xuICAgIHRoaXMub24oJ2VtaXR0ZXInLCBhc3luYyBlbWl0VmFsdWUgPT4ge1xuICAgICAgbGV0IGluZmVyVmFsdWUgPSBhd2FpdCB0aGlzLmRlcGxveUluZmVyZW5jZXIoZW1pdFZhbHVlKTtcbiAgICAgIHRoaXMuZW1pdCgnaW5mZXJlbmNlcicsIGluZmVyVmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IEluZmVyZW5jZXIoKSB7XG4gICAgaWYgKCF0aGlzLmRlcGxveUluZmVyZW5jZXIpIHtcbiAgICAgIHRocm93IEVycm9yKCdJbmZlcmVuY2VyIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kZXBsb3lJbmZlcmVuY2VyO1xuICB9XG5cbiAgYXN5bmMgZGVwbG95KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICBsZXQgZW1pdFZhbHVlID0gYXdhaXQgdGhpcy5FbWl0dGVyKCk7XG5cbiAgICAgIHdoaWxlIChlbWl0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlbWl0dGVyJywgZW1pdFZhbHVlKTtcbiAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICBlbWl0VmFsdWUgPSBhd2FpdCB0aGlzLkVtaXR0ZXIoKTtcbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZShjb3VudGVyKTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAobmV3IENhdXNhbE5ldERlcGxveW1lbnQoX2Z1bmN0b3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0pKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmNvbnN0IERlcGxveW1lbnRNaXhpbnMgPSBCYXNlUGlwZWxpbmVDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzIHtcbiAgc2V0IERlcGxveW1lbnQoZGVwbG95bWVudCkge1xuICAgIHRoaXMuZGVwbG95bWVudCA9IGRlcGxveW1lbnQ7XG4gIH1cblxuICBnZXQgRGVwbG95bWVudCgpIHtcbiAgICBpZiAoIXRoaXMuZGVwbG95bWVudCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ2RlcGxveW1lbnQgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRlcGxveW1lbnQ7XG4gIH1cblxuICBnZXQgSW5mZXJlbmNlcigpIHtcbiAgICBjb25zdCBNb2RlbExlbnNlID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuTW9kZWw7XG4gICAgfTtcblxuICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgcmV0dXJuIGFzeW5jIGlucHV0ID0+IHtcbiAgICAgIGxldCB7XG4gICAgICAgIFByZWRpY3QsXG4gICAgICAgIEVuY29kZSxcbiAgICAgICAgRGVjb2RlXG4gICAgICB9ID0gaW5wdXQ7XG4gICAgICBsZXQgaW5mZXIgPSB7fTtcbiAgICAgIGNvbnN0IE1vZGVsID0gTW9kZWxMZW5zZSgpO1xuXG4gICAgICBpZiAoUHJlZGljdCkge1xuICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihQcmVkaWN0KS5hc1R5cGUoJ2Zsb2F0MzInKS5yZXNoYXBlKFsxLCAtMV0pO1xuICAgICAgICBsZXQgcHJlZGljdFRlbnNvciA9IE1vZGVsLlByZWRpY3QoaW5wdXRUZW5zb3IpO1xuICAgICAgICBpbmZlci5QcmVkaWN0ID0gYXdhaXQgcHJlZGljdFRlbnNvci5kYXRhKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChFbmNvZGUpIHtcbiAgICAgICAgbGV0IGlucHV0VGVuc29yID0gVC50ZW5zb3IoRW5jb2RlKS5hc1R5cGUoJ2Zsb2F0MzInKS5yZXNoYXBlKFsxLCAtMV0pO1xuICAgICAgICBsZXQgZW5jb2RlVGVuc29yID0gTW9kZWwuRW5jb2RlKGlucHV0VGVuc29yKTtcbiAgICAgICAgaW5mZXIuRW5jb2RlID0gYXdhaXQgZW5jb2RlVGVuc29yLmRhdGEoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKERlY29kZSkge1xuICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihEZWNvZGUpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgIGxldCBkZWNvZGVUZW5zb3IgPSBNb2RlbC5FbmNvZGUoaW5wdXRUZW5zb3IpO1xuICAgICAgICBpbmZlci5EZWNvZGUgPSBhd2FpdCBkZWNvZGVUZW5zb3IuZGF0YSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5mZXI7XG4gICAgfTtcbiAgfVxuXG4gIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKSB7XG4gICAgaWYgKHN1cGVyLnNldEJ5Q29uZmlnKSB7XG4gICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgfVxuXG4gICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignZGVwbG95bWVudCcpO1xuICAgIGNvbnN0IHtcbiAgICAgIEVtaXR0ZXIsXG4gICAgICBMaXN0ZW5lclxuICAgIH0gPSBwaXBlbGluZUNvbmZpZy5EZXBsb3ltZW50O1xuICAgIHRoaXMuRGVwbG95bWVudC5FbWl0dGVyID0gRW1pdHRlcjtcbiAgICB0aGlzLkRlcGxveW1lbnQuTGlzdGVuZXIgPSBMaXN0ZW5lcjtcbiAgICB0aGlzLkRlcGxveW1lbnQuSW5mZXJlbmNlciA9IHRoaXMuSW5mZXJlbmNlcjtcbiAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgIHJldHVybiBwaXBlbGluZUNvbmZpZztcbiAgfVxuXG4gIGFzeW5jIGRlcGxveSgpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5EZXBsb3ltZW50LmRlcGxveSgpO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoRGVwbG95bWVudE1peGlucyk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2Z1bmN0b3IuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9mdW5jdG9yLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQuY29yZSAqLyBcImNhdXNhbC1uZXQuY29yZVwiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAobmV3IGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRnVuY3RvclwiXSgpKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogY2F1c2FsTmV0RGVwbG95bWVudCwgRGVwbG95bWVudE1peGlucyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2F1c2FsTmV0RGVwbG95bWVudF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYXVzYWxOZXREZXBsb3ltZW50ICovIFwiLi9zcmMvY2F1c2FsTmV0RGVwbG95bWVudC5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNhdXNhbE5ldERlcGxveW1lbnRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfY2F1c2FsTmV0RGVwbG95bWVudF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZGVwbG95bWVudF9taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZGVwbG95bWVudC5taXhpbnMgKi8gXCIuL3NyYy9kZXBsb3ltZW50Lm1peGlucy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkRlcGxveW1lbnRNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfZGVwbG95bWVudF9taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl07IH0pO1xuXG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LmNvcmVcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQudXRpbHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyUmxjR3h2ZVcxbGJuUXZkMlZpY0dGamF5OTFibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUlpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2WkdWd2JHOTViV1Z1ZEM5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMlJsY0d4dmVXMWxiblF2TGk5emNtTXZZMkYxYzJGc1RtVjBSR1Z3Ykc5NWJXVnVkQzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMlJsY0d4dmVXMWxiblF2TGk5emNtTXZaR1Z3Ykc5NWJXVnVkQzV0YVhocGJuTXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOWtaWEJzYjNsdFpXNTBMeTR2YzNKakwyWjFibU4wYjNJdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5a1pYQnNiM2x0Wlc1MEx5NHZjM0pqTDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZaR1Z3Ykc5NWJXVnVkQzlsZUhSbGNtNWhiQ0JjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpSWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZaR1Z3Ykc5NWJXVnVkQzlsZUhSbGNtNWhiQ0JjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWlKZExDSnVZVzFsY3lJNld5SkRZWFZ6WVd4T1pYUkVaWEJzYjNsdFpXNTBJaXdpY0d4aGRHWnZjbTBpTENKdGFYaFhhWFJvSWl3aVJYWmxiblFpTENKamIyNXpkSEoxWTNSdmNpSXNJbVoxYm1OMGIzSWlMQ0pHSWl3aVVpSXNJa052Y21WR2RXNWpkRzl5SWl3aVJXMXBkSFJsY2lJc0ltVnRhWFIwWlhJaUxDSmtaWEJzYjNsRmJXbDBkR1Z5SWl3aVJYSnliM0lpTENKTWFYTjBaVzVsY2lJc0lteHBjM1JsYm1WeUlpd2laR1Z3Ykc5NVRHbHpkR1Z1WlhJaUxDSnZiaUlzSW1sdVptVnlJaXdpU1c1bVpYSmxibU5sY2lJc0ltbHVabVZ5Wlc1alpYSWlMQ0prWlhCc2IzbEpibVpsY21WdVkyVnlJaXdpWlcxcGRGWmhiSFZsSWl3aWFXNW1aWEpXWVd4MVpTSXNJbVZ0YVhRaUxDSmtaWEJzYjNraUxDSlFjbTl0YVhObElpd2ljbVZ6YjJ4MlpTSXNJbkpsYW1WamRDSXNJbU52ZFc1MFpYSWlMQ0pFWlhCc2IzbHRaVzUwVFdsNGFXNXpJaXdpUW1GelpWQnBjR1ZzYVc1bFEyeGhjM01pTENKRVpYQnNiM2x0Wlc1MElpd2laR1Z3Ykc5NWJXVnVkQ0lzSWsxdlpHVnNUR1Z1YzJVaUxDSk5iMlJsYkNJc0lsUWlMQ0pwYm5CMWRDSXNJbEJ5WldScFkzUWlMQ0pGYm1OdlpHVWlMQ0pFWldOdlpHVWlMQ0pwYm5CMWRGUmxibk52Y2lJc0luUmxibk52Y2lJc0ltRnpWSGx3WlNJc0luSmxjMmhoY0dVaUxDSndjbVZrYVdOMFZHVnVjMjl5SWl3aVpHRjBZU0lzSW1WdVkyOWtaVlJsYm5OdmNpSXNJbVJsWTI5a1pWUmxibk52Y2lJc0luTmxkRUo1UTI5dVptbG5JaXdpY0dsd1pXeHBibVZEYjI1bWFXY2lMQ0pNYjJkblpYSWlMQ0puY205MWNFSmxaMmx1SWl3aVozSnZkWEJGYm1RaUxDSkdkVzVqZEc5eUlsMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZETzBGQlEwUXNUenRCUTFaQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBSQlFUQkRMR2REUVVGblF6dEJRVU14UlR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdkRlFVRjNSQ3hyUWtGQmEwSTdRVUZETVVVN1FVRkRRU3g1UkVGQmFVUXNZMEZCWXp0QlFVTXZSRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVVJCUVhsRExHbERRVUZwUXp0QlFVTXhSU3gzU0VGQlowZ3NiVUpCUVcxQ0xFVkJRVVU3UVVGRGNrazdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHRRMEZCTWtJc01FSkJRVEJDTEVWQlFVVTdRVUZEZGtRc2VVTkJRV2xETEdWQlFXVTdRVUZEYUVRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNPRVJCUVhORUxDdEVRVUVyUkRzN1FVRkZja2c3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEyeEdRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzVFVGQlRVRXNiVUpCUVU0c1UwRkJhME5ETEhsRVFVRlJMRU5CUVVORExFOUJRVlFzUTBGQmEwSkRMSEZFUVVGc1FpeEZRVUY1UWl4RlFVRjZRaXhEUVVGc1F5eERRVUVyUkR0QlFVVXpSRU1zWVVGQlZ5eERRVUZEUXl4UFFVRkVMRVZCUVZNN1FVRkRhRUk3UVVGRFFTeFRRVUZMUXl4RFFVRk1MRWRCUVZORUxFOUJRVlE3UVVGRFFTeFRRVUZMUlN4RFFVRk1MRWRCUVZOR0xFOUJRVThzUTBGQlEwY3NWMEZCYWtJN1FVRkRTRHM3UVVGRlJDeE5RVUZKUXl4UFFVRktMRU5CUVZsRExFOUJRVm9zUlVGQmIwSTdRVUZEYUVJc1UwRkJTME1zWVVGQlRDeEhRVUZ4UWtRc1QwRkJja0k3UVVGRFNEczdRVUZGUkN4TlFVRkpSQ3hQUVVGS0xFZEJRV0U3UVVGRFZDeFJRVUZITEVOQlFVTXNTMEZCUzBVc1lVRkJWQ3hGUVVGMVFqdEJRVU51UWl4WlFVRk5ReXhMUVVGTExFTkJRVU1zYjBKQlFVUXNRMEZCV0R0QlFVTklPenRCUVVORUxGZEJRVThzUzBGQlMwUXNZVUZCV2p0QlFVTklPenRCUVVWRUxFMUJRVWxGTEZGQlFVb3NRMEZCWVVNc1VVRkJZaXhGUVVGelFqdEJRVU5zUWl4VFFVRkxReXhqUVVGTUxFZEJRWE5DUkN4UlFVRjBRanRCUVVOQkxGTkJRVXRGTEVWQlFVd3NRMEZCVVN4WlFVRlNMRVZCUVhWQ1F5eExRVUZFTEVsQlFWTTdRVUZETTBJc1YwRkJTMFlzWTBGQlRDeERRVUZ2UWtVc1MwRkJjRUk3UVVGRFNDeExRVVpFTzBGQlIwZzdPMEZCUlVRc1RVRkJTVW9zVVVGQlNpeEhRVUZqTzBGQlExWXNVVUZCUnl4RFFVRkRMRXRCUVV0RkxHTkJRVlFzUlVGQmQwSTdRVUZEY0VJc1dVRkJUVWdzUzBGQlN5eERRVUZETEhGQ1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdEhMR05CUVZvN1FVRkRTRHM3UVVGRlJDeE5RVUZKUnl4VlFVRktMRU5CUVdWRExGVkJRV1lzUlVGQk1FSTdRVUZEZEVJc1UwRkJTME1zWjBKQlFVd3NSMEZCZDBKRUxGVkJRWGhDTzBGQlEwRXNVMEZCUzBnc1JVRkJUQ3hEUVVGUkxGTkJRVklzUlVGQmJVSXNUVUZCVDBzc1UwRkJVQ3hKUVVGdFFqdEJRVU5zUXl4VlFVRkpReXhWUVVGVkxFZEJRVWNzVFVGQlRTeExRVUZMUml4blFrRkJUQ3hEUVVGelFrTXNVMEZCZEVJc1EwRkJka0k3UVVGRFFTeFhRVUZMUlN4SlFVRk1MRU5CUVZVc1dVRkJWaXhGUVVGM1FrUXNWVUZCZUVJN1FVRkRTQ3hMUVVoRU8wRkJTVWc3TzBGQlJVUXNUVUZCU1Vvc1ZVRkJTaXhIUVVGblFqdEJRVU5hTEZGQlFVY3NRMEZCUXl4TFFVRkxSU3huUWtGQlZDeEZRVUV3UWp0QlFVTjBRaXhaUVVGTlVpeExRVUZMTEVOQlFVTXNkVUpCUVVRc1EwRkJXRHRCUVVOSU96dEJRVU5FTEZkQlFVOHNTMEZCUzFFc1owSkJRVm83UVVGRFNEczdRVUZGUkN4UlFVRk5TU3hOUVVGT0xFZEJRV003UVVGRFZpeFhRVUZQTEVsQlFVbERMRTlCUVVvc1EwRkJXU3hQUVVGUFF5eFBRVUZRTEVWQlFXZENReXhOUVVGb1FpeExRVUY1UWp0QlFVTjRReXhWUVVGSlF5eFBRVUZQTEVkQlFVY3NRMEZCWkR0QlFVTkJMRlZCUVVsUUxGTkJRVk1zUjBGQlJ5eE5RVUZOTEV0QlFVdGFMRTlCUVV3c1JVRkJkRUk3TzBGQlEwRXNZVUZCVFZrc1UwRkJVeXhMUVVGTExFbEJRWEJDTEVWQlFYbENPMEZCUTNKQ0xHRkJRVXRGTEVsQlFVd3NRMEZCVlN4VFFVRldMRVZCUVhGQ1JpeFRRVUZ5UWp0QlFVTkJUeXhsUVVGUExFbEJRVWtzUTBGQldEdEJRVU5CVUN4cFFrRkJVeXhIUVVGSExFMUJRVTBzUzBGQlMxb3NUMEZCVEN4RlFVRnNRanRCUVVOSU96dEJRVU5FYVVJc1lVRkJUeXhEUVVGRFJTeFBRVUZFTEVOQlFWQTdRVUZEU0N4TFFWUk5MRU5CUVZBN1FVRlZTRHM3UVVFelJEQkVPenRCUVRoRWFFUXNiVVZCUVVrMVFpeHRRa0ZCU2l4RFFVRjNRa3NzWjBSQlFYaENMRU5CUVdZc1JUczdPenM3T3pzN096czdPMEZEYkVWQk8wRkJRVUVzVFVGQlRYZENMR2RDUVVGblFpeEhRVUZKUXl4cFFrRkJSQ3hKUVVGelFpeGpRVUZqUVN4cFFrRkJaQ3hEUVVGblF6dEJRVVV6UlN4TlFVRkpReXhWUVVGS0xFTkJRV1ZETEZWQlFXWXNSVUZCTUVJN1FVRkRkRUlzVTBGQlMwRXNWVUZCVEN4SFFVRnJRa0VzVlVGQmJFSTdRVUZEU0RzN1FVRkZSQ3hOUVVGSlJDeFZRVUZLTEVkQlFXZENPMEZCUTFvc1VVRkJSeXhEUVVGRExFdEJRVXRETEZWQlFWUXNSVUZCYjBJN1FVRkRhRUlzV1VGQlRYQkNMRXRCUVVzc1EwRkJReXgxUWtGQlJDeERRVUZZTzBGQlEwZzdPMEZCUTBRc1YwRkJUeXhMUVVGTGIwSXNWVUZCV2p0QlFVTklPenRCUVVWRUxFMUJRVWxrTEZWQlFVb3NSMEZCWjBJN1FVRkRXaXhWUVVGTlpTeFZRVUZWTEVkQlFVY3NUVUZCU1R0QlFVTnVRaXhoUVVGUExFdEJRVXRETEV0QlFWbzdRVUZEU0N4TFFVWkVPenRCUVVkQkxGVkJRVTFETEVOQlFVTXNSMEZCUnl4TFFVRkxRU3hEUVVGbU8wRkJRMEVzVjBGQlR5eE5RVUZQUXl4TFFVRlFMRWxCUVdVN1FVRkRiRUlzVlVGQlNUdEJRVUZGUXl4bFFVRkdPMEZCUVZkRExHTkJRVmc3UVVGQmJVSkRPMEZCUVc1Q0xGVkJRVGhDU0N4TFFVRnNRenRCUVVOQkxGVkJRVWx1UWl4TFFVRkxMRWRCUVVjc1JVRkJXanRCUVVOQkxGbEJRVTFwUWl4TFFVRkxMRWRCUVVkRUxGVkJRVlVzUlVGQmVFSTdPMEZCUTBFc1ZVRkJSMGtzVDBGQlNDeEZRVUZYTzBGQlExQXNXVUZCU1Vjc1YwRkJWeXhIUVVGSFRDeERRVUZETEVOQlFVTk5MRTFCUVVZc1EwRkJVMG9zVDBGQlZDeEZRVUZyUWtzc1RVRkJiRUlzUTBGQmVVSXNVMEZCZWtJc1JVRkJiME5ETEU5QlFYQkRMRU5CUVRSRExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVTXNRMEZCVEN4RFFVRTFReXhEUVVGc1FqdEJRVU5CTEZsQlFVbERMR0ZCUVdFc1IwRkJSMVlzUzBGQlN5eERRVUZEUnl4UFFVRk9MRU5CUVdOSExGZEJRV1FzUTBGQmNFSTdRVUZEUVhaQ0xHRkJRVXNzUTBGQlEyOUNMRTlCUVU0c1IwRkJaMElzVFVGQlRVOHNZVUZCWVN4RFFVRkRReXhKUVVGa0xFVkJRWFJDTzBGQlEwZzdPMEZCUTBRc1ZVRkJSMUFzVFVGQlNDeEZRVUZWTzBGQlEwNHNXVUZCU1VVc1YwRkJWeXhIUVVGSFRDeERRVUZETEVOQlFVTk5MRTFCUVVZc1EwRkJVMGdzVFVGQlZDeEZRVUZwUWtrc1RVRkJha0lzUTBGQmQwSXNVMEZCZUVJc1JVRkJiVU5ETEU5QlFXNURMRU5CUVRKRExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVTXNRMEZCVEN4RFFVRXpReXhEUVVGc1FqdEJRVU5CTEZsQlFVbEhMRmxCUVZrc1IwRkJSMW9zUzBGQlN5eERRVUZEU1N4TlFVRk9MRU5CUVdGRkxGZEJRV0lzUTBGQmJrSTdRVUZEUVhaQ0xHRkJRVXNzUTBGQlEzRkNMRTFCUVU0c1IwRkJaU3hOUVVGTlVTeFpRVUZaTEVOQlFVTkVMRWxCUVdJc1JVRkJja0k3UVVGRFNEczdRVUZEUkN4VlFVRkhUaXhOUVVGSUxFVkJRVlU3UVVGRFRpeFpRVUZKUXl4WFFVRlhMRWRCUVVkTUxFTkJRVU1zUTBGQlEwMHNUVUZCUml4RFFVRlRSaXhOUVVGVUxFVkJRV2xDUnl4TlFVRnFRaXhEUVVGM1FpeFRRVUY0UWl4RlFVRnRRME1zVDBGQmJrTXNRMEZCTWtNc1EwRkJReXhEUVVGRUxFVkJRVWtzUTBGQlF5eERRVUZNTEVOQlFUTkRMRU5CUVd4Q08wRkJRMEVzV1VGQlNVa3NXVUZCV1N4SFFVRkhZaXhMUVVGTExFTkJRVU5KTEUxQlFVNHNRMEZCWVVVc1YwRkJZaXhEUVVGdVFqdEJRVU5CZGtJc1lVRkJTeXhEUVVGRGMwSXNUVUZCVGl4SFFVRmxMRTFCUVUxUkxGbEJRVmtzUTBGQlEwWXNTVUZCWWl4RlFVRnlRanRCUVVOSU96dEJRVU5FTEdGQlFVODFRaXhMUVVGUU8wRkJRMGdzUzBGd1FrUTdRVUZ4UWtnN08wRkJSVVFyUWl4aFFVRlhMRU5CUVVORExHTkJRVVFzUlVGQlowSTdRVUZEZGtJc1VVRkJSeXhOUVVGTlJDeFhRVUZVTEVWQlFYRkNPMEZCUTJwQ0xGbEJRVTFCTEZkQlFVNHNRMEZCYTBKRExHTkJRV3hDTzBGQlEwZzdPMEZCUTBRc1UwRkJTME1zVFVGQlRDeERRVUZaUXl4VlFVRmFMRU5CUVhWQ0xGbEJRWFpDTzBGQlEwRXNWVUZCVFR0QlFVRkZNVU1zWVVGQlJqdEJRVUZYU1R0QlFVRllMRkZCUVhkQ2IwTXNZMEZCWXl4RFFVRkRiRUlzVlVGQk4wTTdRVUZEUVN4VFFVRkxRU3hWUVVGTUxFTkJRV2RDZEVJc1QwRkJhRUlzUjBGQk1FSkJMRTlCUVRGQ08wRkJRMEVzVTBGQlMzTkNMRlZCUVV3c1EwRkJaMEpzUWl4UlFVRm9RaXhIUVVFeVFrRXNVVUZCTTBJN1FVRkRRU3hUUVVGTGEwSXNWVUZCVEN4RFFVRm5RbUlzVlVGQmFFSXNSMEZCTmtJc1MwRkJTMEVzVlVGQmJFTTdRVUZEUVN4VFFVRkxaME1zVFVGQlRDeERRVUZaUlN4UlFVRmFPMEZCUTBFc1YwRkJUMGdzWTBGQlVEdEJRVU5JT3p0QlFVVkVMRkZCUVUxNlFpeE5RVUZPTEVkQlFXTTdRVUZEVml4WFFVRlBMRTFCUVUwc1MwRkJTMDhzVlVGQlRDeERRVUZuUWxBc1RVRkJhRUlzUlVGQllqdEJRVU5JT3p0QlFYaEVNRVVzUTBGQkwwVTdPMEZCTWtSbFN5d3JSVUZCWml4Rk96czdPenM3T3pzN096czdRVU16UkVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGRFpTeHRSVUZCU1hkQ0xIVkVRVUZLTEVWQlFXWXNSVHM3T3pzN096czdPenM3TzBGRFJFRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUczdPenM3T3pzN096czdPMEZEUVVFc05rUTdPenM3T3pzN096czdPMEZEUVVFc09FUWlMQ0ptYVd4bElqb2lRR05oZFhOaGJFNWxkQzlrWlhCc2IzbHRaVzUwTG5kbFlpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb2NtVnhkV2x5WlNoY0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aUtTd2djbVZ4ZFdseVpTaGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaWtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9XMXdpWTJGMWMyRnNMVzVsZEM1amIzSmxYQ0lzSUZ3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aVhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0pBWTJGMWMyRnNUbVYwTDJSbGNHeHZlVzFsYm5SY0lsMGdQU0JtWVdOMGIzSjVLSEpsY1hWcGNtVW9YQ0pqWVhWellXd3RibVYwTG1OdmNtVmNJaWtzSUhKbGNYVnBjbVVvWENKallYVnpZV3d0Ym1WMExuVjBhV3h6WENJcEtUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0pBWTJGMWMyRnNUbVYwTDJSbGNHeHZlVzFsYm5SY0lsMGdQU0JtWVdOMGIzSjVLSEp2YjNSYlhDSmpZWFZ6WVd3dGJtVjBMbU52Y21WY0lsMHNJSEp2YjNSYlhDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSmRLVHRjYm4wcEtIUm9hWE1zSUdaMWJtTjBhVzl1S0Y5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWTJGMWMyRnNYMjVsZEY5amIzSmxYMThzSUY5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWTJGMWMyRnNYMjVsZEY5MWRHbHNjMTlmS1NCN1hHNXlaWFIxY200Z0lpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lHZGxkRG9nWjJWMGRHVnlJSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdYMTlsYzAxdlpIVnNaU0J2YmlCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6S1NCN1hHNGdYSFJjZEdsbUtIUjVjR1Z2WmlCVGVXMWliMndnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnlrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVJRngwWEhSOVhHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQW5YMTlsYzAxdlpIVnNaU2NzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJqY21WaGRHVWdZU0JtWVd0bElHNWhiV1Z6Y0dGalpTQnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUF4T2lCMllXeDFaU0JwY3lCaElHMXZaSFZzWlNCcFpDd2djbVZ4ZFdseVpTQnBkRnh1SUZ4MEx5OGdiVzlrWlNBbUlESTZJRzFsY21kbElHRnNiQ0J3Y205d1pYSjBhV1Z6SUc5bUlIWmhiSFZsSUdsdWRHOGdkR2hsSUc1elhHNGdYSFF2THlCdGIyUmxJQ1lnTkRvZ2NtVjBkWEp1SUhaaGJIVmxJSGRvWlc0Z1lXeHlaV0ZrZVNCdWN5QnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUE0ZkRFNklHSmxhR0YyWlNCc2FXdGxJSEpsY1hWcGNtVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWRDQTlJR1oxYm1OMGFXOXVLSFpoYkhWbExDQnRiMlJsS1NCN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeEtTQjJZV3gxWlNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9kbUZzZFdVcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ09Da2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFJwWmlnb2JXOWtaU0FtSURRcElDWW1JSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlsYzAxdlpIVnNaU2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhSMllYSWdibk1nUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cE8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSW9ibk1wTzF4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2JuTXNJQ2RrWldaaGRXeDBKeXdnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCMllXeDFaVG9nZG1Gc2RXVWdmU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF5SUNZbUlIUjVjR1Z2WmlCMllXeDFaU0FoUFNBbmMzUnlhVzVuSnlrZ1ptOXlLSFpoY2lCclpYa2dhVzRnZG1Gc2RXVXBJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNodWN5d2dhMlY1TENCbWRXNWpkR2x2YmloclpYa3BJSHNnY21WMGRYSnVJSFpoYkhWbFcydGxlVjA3SUgwdVltbHVaQ2h1ZFd4c0xDQnJaWGtwS1R0Y2JpQmNkRngwY21WMGRYSnVJRzV6TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJRndpTGk5emNtTXZhVzVrWlhndWFuTmNJaWs3WEc0aUxDSnBiWEJ2Y25RZ2V5QkZkbVZ1ZENCOUlHWnliMjBnSjJOaGRYTmhiQzF1WlhRdVkyOXlaU2M3WEc1cGJYQnZjblFnZXlCa1pXWmhkV3gwSUdGeklHWjFibU4wYjNJZ2ZTQm1jbTl0SUNjdUwyWjFibU4wYjNJbk8xeHVhVzF3YjNKMElIc2djR3hoZEdadmNtMHNJR0Z6YzJWeWRDQjlJR1p5YjIwZ0oyTmhkWE5oYkMxdVpYUXVkWFJwYkhNbk8xeHVYRzVqYkdGemN5QkRZWFZ6WVd4T1pYUkVaWEJzYjNsdFpXNTBJR1Y0ZEdWdVpITWdjR3hoZEdadmNtMHViV2w0VjJsMGFDZ2dSWFpsYm5Rc0lGdGRJQ2w3WEc0Z0lDQWdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9ablZ1WTNSdmNpbDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVJpQTlJR1oxYm1OMGIzSTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVVpQTlJR1oxYm1OMGIzSXVRMjl5WlVaMWJtTjBiM0k3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwSUVWdGFYUjBaWElvWlcxcGRIUmxjaWw3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaR1Z3Ykc5NVJXMXBkSFJsY2lBOUlHVnRhWFIwWlhJN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMElFVnRhWFIwWlhJb0tYdGNiaUFnSUNBZ0lDQWdhV1lvSVhSb2FYTXVaR1Z3Ykc5NVJXMXBkSFJsY2lsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnblJXMXBkSFJsY2lCcGN5QnViM1FnYzJWMEp5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVpHVndiRzk1UlcxcGRIUmxjanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaWFFnVEdsemRHVnVaWElvYkdsemRHVnVaWElwZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbVJsY0d4dmVVeHBjM1JsYm1WeUlEMGdiR2x6ZEdWdVpYSTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIyNG9KMmx1Wm1WeVpXNWpaWEluTENBb2FXNW1aWElwUFQ1N1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtUmxjR3h2ZVV4cGMzUmxibVZ5S0dsdVptVnlLVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHZGxkQ0JNYVhOMFpXNWxjaWdwZTF4dUlDQWdJQ0FnSUNCcFppZ2hkR2hwY3k1a1pYQnNiM2xNYVhOMFpXNWxjaWw3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduVEdsemRHVnVaWElnYVhNZ2JtOTBJSE5sZENjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1SbGNHeHZlVXhwYzNSbGJtVnlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITmxkQ0JKYm1abGNtVnVZMlZ5S0dsdVptVnlaVzVqWlhJcGUxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1SbGNHeHZlVWx1Wm1WeVpXNWpaWElnUFNCcGJtWmxjbVZ1WTJWeU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG05dUtDZGxiV2wwZEdWeUp5d2dZWE41Ym1NZ0tHVnRhWFJXWVd4MVpTazlQbnRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JwYm1abGNsWmhiSFZsSUQwZ1lYZGhhWFFnZEdocGN5NWtaWEJzYjNsSmJtWmxjbVZ1WTJWeUtHVnRhWFJXWVd4MVpTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbVZ0YVhRb0oybHVabVZ5Wlc1alpYSW5MQ0JwYm1abGNsWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBJRWx1Wm1WeVpXNWpaWElvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdVpHVndiRzk1U1c1bVpYSmxibU5sY2lsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnblNXNW1aWEpsYm1ObGNpQnBjeUJ1YjNRZ2MyVjBKeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaR1Z3Ykc5NVNXNW1aWEpsYm1ObGNqdGNiaUFnSUNCOVhHNWNiaUFnSUNCaGMzbHVZeUJrWlhCc2Iza29LWHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0dGemVXNWpJQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnWTI5MWJuUmxjaUE5SURBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1pXMXBkRlpoYkhWbElEMGdZWGRoYVhRZ2RHaHBjeTVGYldsMGRHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjNhR2xzWlNobGJXbDBWbUZzZFdVZ0lUMDlJRzUxYkd3cGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WlcxcGRDZ25aVzFwZEhSbGNpY3NJR1Z0YVhSV1lXeDFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5MWJuUmxjaUFyUFNBeE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHVnRhWFJXWVd4MVpTQTlJR0YzWVdsMElIUm9hWE11UlcxcGRIUmxjaWdwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnpiMngyWlNoamIzVnVkR1Z5S1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0J1WlhjZ1EyRjFjMkZzVG1WMFJHVndiRzk1YldWdWRDaG1kVzVqZEc5eUtUc2lMQ0pqYjI1emRDQkVaWEJzYjNsdFpXNTBUV2w0YVc1eklEMGdLRUpoYzJWUWFYQmxiR2x1WlVOc1lYTnpLVDArSUdOc1lYTnpJR1Y0ZEdWdVpITWdRbUZ6WlZCcGNHVnNhVzVsUTJ4aGMzTWdlMXh1SUNBZ1hHNGdJQ0FnYzJWMElFUmxjR3h2ZVcxbGJuUW9aR1Z3Ykc5NWJXVnVkQ2w3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaR1Z3Ykc5NWJXVnVkQ0E5SUdSbGNHeHZlVzFsYm5RN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMElFUmxjR3h2ZVcxbGJuUW9LWHRjYmlBZ0lDQWdJQ0FnYVdZb0lYUm9hWE11WkdWd2JHOTViV1Z1ZENsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnblpHVndiRzk1YldWdWRDQnBjeUJ1YjNRZ2MyVjBKeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaR1Z3Ykc5NWJXVnVkRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFFnU1c1bVpYSmxibU5sY2lncGUxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCTmIyUmxiRXhsYm5ObElEMGdLQ2s5UG50Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGsxdlpHVnNPMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JVSUQwZ2RHaHBjeTVVTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWVhONWJtTWdLR2x1Y0hWMEtUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSHNnVUhKbFpHbGpkQ3dnUlc1amIyUmxMQ0JFWldOdlpHVWdmU0E5SUdsdWNIVjBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR2x1Wm1WeUlEMGdlMzA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCTmIyUmxiQ0E5SUUxdlpHVnNUR1Z1YzJVb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUtGQnlaV1JwWTNRcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JwYm5CMWRGUmxibk52Y2lBOUlGUXVkR1Z1YzI5eUtGQnlaV1JwWTNRcExtRnpWSGx3WlNnblpteHZZWFF6TWljcExuSmxjMmhoY0dVb1d6RXNJQzB4WFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSEJ5WldScFkzUlVaVzV6YjNJZ1BTQk5iMlJsYkM1UWNtVmthV04wS0dsdWNIVjBWR1Z1YzI5eUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBibVpsY2k1UWNtVmthV04wSUQwZ1lYZGhhWFFnY0hKbFpHbGpkRlJsYm5OdmNpNWtZWFJoS0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWhGYm1OdlpHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCcGJuQjFkRlJsYm5OdmNpQTlJRlF1ZEdWdWMyOXlLRVZ1WTI5a1pTa3VZWE5VZVhCbEtDZG1iRzloZERNeUp5a3VjbVZ6YUdGd1pTaGJNU3dnTFRGZEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnWlc1amIyUmxWR1Z1YzI5eUlEMGdUVzlrWld3dVJXNWpiMlJsS0dsdWNIVjBWR1Z1YzI5eUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBibVpsY2k1RmJtTnZaR1VnUFNCaGQyRnBkQ0JsYm1OdlpHVlVaVzV6YjNJdVpHRjBZU2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWW9SR1ZqYjJSbEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYVc1d2RYUlVaVzV6YjNJZ1BTQlVMblJsYm5OdmNpaEVaV052WkdVcExtRnpWSGx3WlNnblpteHZZWFF6TWljcExuSmxjMmhoY0dVb1d6RXNJQzB4WFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR1JsWTI5a1pWUmxibk52Y2lBOUlFMXZaR1ZzTGtWdVkyOWtaU2hwYm5CMWRGUmxibk52Y2lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXNW1aWEl1UkdWamIyUmxJRDBnWVhkaGFYUWdaR1ZqYjJSbFZHVnVjMjl5TG1SaGRHRW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJwYm1abGNqdGNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaWFJDZVVOdmJtWnBaeWh3YVhCbGJHbHVaVU52Ym1acFp5bDdYRzRnSUNBZ0lDQWdJR2xtS0hOMWNHVnlMbk5sZEVKNVEyOXVabWxuS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4xY0dWeUxuTmxkRUo1UTI5dVptbG5LSEJwY0dWc2FXNWxRMjl1Wm1sbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdsekxreHZaMmRsY2k1bmNtOTFjRUpsWjJsdUtDZGtaWEJzYjNsdFpXNTBKeWs3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSHNnUlcxcGRIUmxjaXdnVEdsemRHVnVaWElnZlNBOUlIQnBjR1ZzYVc1bFEyOXVabWxuTGtSbGNHeHZlVzFsYm5RN1hHNGdJQ0FnSUNBZ0lIUm9hWE11UkdWd2JHOTViV1Z1ZEM1RmJXbDBkR1Z5SUQwZ1JXMXBkSFJsY2p0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVFWlhCc2IzbHRaVzUwTGt4cGMzUmxibVZ5SUQwZ1RHbHpkR1Z1WlhJN1hHNGdJQ0FnSUNBZ0lIUm9hWE11UkdWd2JHOTViV1Z1ZEM1SmJtWmxjbVZ1WTJWeUlEMGdkR2hwY3k1SmJtWmxjbVZ1WTJWeU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGt4dloyZGxjaTVuY205MWNFVnVaQ2dwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY0dsd1pXeHBibVZEYjI1bWFXYzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1lYTjVibU1nWkdWd2JHOTVLQ2w3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoZDJGcGRDQjBhR2x6TGtSbGNHeHZlVzFsYm5RdVpHVndiRzk1S0NrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdSR1Z3Ykc5NWJXVnVkRTFwZUdsdWN6c2lMQ0pwYlhCdmNuUWdleUJHZFc1amRHOXlJSDBnWm5KdmJTQW5ZMkYxYzJGc0xXNWxkQzVqYjNKbEp6dGNibVY0Y0c5eWRDQmtaV1poZFd4MElHNWxkeUJHZFc1amRHOXlLQ2s3SWl3aVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5QmpZWFZ6WVd4T1pYUkVaWEJzYjNsdFpXNTBJSDBnWm5KdmJTQW5MaTlqWVhWellXeE9aWFJFWlhCc2IzbHRaVzUwSnp0Y2JtVjRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdSR1Z3Ykc5NWJXVnVkRTFwZUdsdWN5QjlJR1p5YjIwZ0p5NHZaR1Z3Ykc5NWJXVnVkQzV0YVhocGJuTW5PeUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlqWVhWellXeGZibVYwWDJOdmNtVmZYenNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUY5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWTJGMWMyRnNYMjVsZEY5MWRHbHNjMTlmT3lKZExDSnpiM1Z5WTJWU2IyOTBJam9pSW4wPSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9TdXBlcnZpc2VkTW9kZWxzL2Jhc2VTdXBlcnZpc2VkTW9kZWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL1N1cGVydmlzZWRNb2RlbHMvYmFzZVN1cGVydmlzZWRNb2RlbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQuY29yZSAqLyBcImNhdXNhbC1uZXQuY29yZVwiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X2NvcmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG5cblxuY2xhc3MgQmFzZVN1cGVydmlzZWRNb2RlbCBleHRlbmRzIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiVGVuc29yXCJdIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1vZGVsTmFtZSA9ICcnO1xuICB9XG5cbiAgc2V0IExheWVyUnVubmVyKHJ1bm5lcikge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGdldCBMYXllclJ1bm5lcigpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBmaXQoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgbG9zcygpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBwcmVkaWN0KCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIG9uZUhvdFByZWRpY3QoKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChCYXNlU3VwZXJ2aXNlZE1vZGVsKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9jYXVzYWxOZXRTdXBlcnZpc2VkTW9kZWxzLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9TdXBlcnZpc2VkTW9kZWxzL2NhdXNhbE5ldFN1cGVydmlzZWRNb2RlbHMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC51dGlscyAqLyBcImNhdXNhbC1uZXQudXRpbHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24gKi8gXCIuL3NyYy9TdXBlcnZpc2VkTW9kZWxzL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24uanNcIik7XG5cblxuXG5cbmNsYXNzIENhdXNhbE5ldE1vZGVscyBleHRlbmRzIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcInBsYXRmb3JtXCJdLm1peFdpdGgoY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJUZW5zb3JcIl0sIFtdKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjbGFzc2lmaWNhdGlvbihudW1DbGFzcykge1xuICAgIHRoaXMubW9kZWwgPSBuZXcgX3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl0obnVtQ2xhc3MpO1xuICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICB9XG5cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChuZXcgQ2F1c2FsTmV0TW9kZWxzKCkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9TdXBlcnZpc2VkTW9kZWxzL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGNhdXNhbE5ldE1vZGVscywgQmFzZVN1cGVydmlzZWRNb2RlbCwgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2F1c2FsTmV0U3VwZXJ2aXNlZE1vZGVsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jYXVzYWxOZXRTdXBlcnZpc2VkTW9kZWxzICovIFwiLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9jYXVzYWxOZXRTdXBlcnZpc2VkTW9kZWxzLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiY2F1c2FsTmV0TW9kZWxzXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2NhdXNhbE5ldFN1cGVydmlzZWRNb2RlbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2Jhc2VTdXBlcnZpc2VkTW9kZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYmFzZVN1cGVydmlzZWRNb2RlbCAqLyBcIi4vc3JjL1N1cGVydmlzZWRNb2RlbHMvYmFzZVN1cGVydmlzZWRNb2RlbC5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkJhc2VTdXBlcnZpc2VkTW9kZWxcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfYmFzZVN1cGVydmlzZWRNb2RlbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uICovIFwiLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9TdXBlcnZpc2VkTW9kZWxzL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL1N1cGVydmlzZWRNb2RlbHMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfYmFzZVN1cGVydmlzZWRNb2RlbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlU3VwZXJ2aXNlZE1vZGVsICovIFwiLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9iYXNlU3VwZXJ2aXNlZE1vZGVsLmpzXCIpO1xuXG5cbmNsYXNzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gZXh0ZW5kcyBfYmFzZVN1cGVydmlzZWRNb2RlbF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSB7XG4gIGNvbnN0cnVjdG9yKG51bUNsYXNzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGlmIChudW1DbGFzcyA+IDApIHtcbiAgICAgIHRoaXMubnVtQ2xhc3MgPSBudW1DbGFzcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBudW1jbGFzcywgZ2V0ICR7bnVtQ2xhc3N9YCk7XG4gICAgfVxuICB9XG5cbiAgc2V0IExheWVyUnVubmVyKGxheWVyUnVubmVyKSB7XG4gICAgbGV0IHtcbiAgICAgIFByZWRpY3RvclxuICAgIH0gPSBsYXllclJ1bm5lcjtcbiAgICB0aGlzLnJ1bm5lciA9IHtcbiAgICAgIFByZWRpY3RvclxuICAgIH07XG4gIH1cblxuICBnZXQgTGF5ZXJSdW5uZXIoKSB7XG4gICAgaWYgKCF0aGlzLnJ1bm5lcikge1xuICAgICAgdGhyb3cgRXJyb3IoJ3J1bm5lciBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucnVubmVyO1xuICB9XG5cbiAgZ2V0IEZpdCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBQcmVkaWN0b3JcbiAgICB9ID0gdGhpcy5MYXllclJ1bm5lcjtcbiAgICByZXR1cm4gaW5wdXRUZW5zb3IgPT4ge1xuICAgICAgbGV0IG91dFB1dFRlbnNvciA9IFByZWRpY3RvcihpbnB1dFRlbnNvcik7XG4gICAgICBsZXQgbG9nUHJvYiA9IG91dFB1dFRlbnNvci5zdWIob3V0UHV0VGVuc29yLmxvZ1N1bUV4cCgxLCB0cnVlKSk7XG4gICAgICByZXR1cm4gbG9nUHJvYjtcbiAgICB9O1xuICB9XG5cbiAgZ2V0IFByZWRpY3QoKSB7XG4gICAgY29uc3QgRml0ID0gdGhpcy5GaXQ7XG4gICAgcmV0dXJuIGlucHV0VGVuc29yID0+IHtcbiAgICAgIGxldCBsb2dQcm9iID0gRml0KGlucHV0VGVuc29yKTtcbiAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgcmV0dXJuIHByZWRpY3RlZENsYXNzO1xuICAgIH07XG4gIH1cblxuICBnZXQgT25lSG90UHJlZGljdCgpIHtcbiAgICBjb25zdCBQcmVkaWN0ID0gdGhpcy5QcmVkaWN0O1xuICAgIHJldHVybiBpbnB1dFRlbnNvciA9PiB7XG4gICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBQcmVkaWN0KGlucHV0VGVuc29yKTtcbiAgICAgIGxldCBvbmVIb3RQcmVkaWN0ID0gdGhpcy5ULm9uZUhvdChwcmVkaWN0ZWRDbGFzcywgdGhpcy5udW1DbGFzcyk7XG4gICAgICByZXR1cm4gb25lSG90UHJlZGljdDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0IExvc3MoKSB7XG4gICAgY29uc3QgRml0ID0gdGhpcy5GaXQ7XG4gICAgcmV0dXJuIChpbnB1dFRlbnNvciwgbGFiZWxUZW5zb3IpID0+IHtcbiAgICAgIGxldCBsb2dQcm9iID0gRml0KGlucHV0VGVuc29yKTtcbiAgICAgIGxldCBsaWtlbGlob29kID0gbG9nUHJvYi5uZWcoKS5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgbGV0IGxvc3MgPSBsaWtlbGlob29kLnN1bSgxKS5tZWFuKCk7XG4gICAgICByZXR1cm4gbG9zcztcbiAgICB9O1xuICB9XG5cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogY2F1c2FsTmV0TW9kZWxzLCBCYXNlU3VwZXJ2aXNlZE1vZGVsLCBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uLCBNb2RlbE1peGlucyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfU3VwZXJ2aXNlZE1vZGVsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9TdXBlcnZpc2VkTW9kZWxzL2luZGV4ICovIFwiLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9pbmRleC5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNhdXNhbE5ldE1vZGVsc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9TdXBlcnZpc2VkTW9kZWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJjYXVzYWxOZXRNb2RlbHNcIl07IH0pO1xuXG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJCYXNlU3VwZXJ2aXNlZE1vZGVsXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX1N1cGVydmlzZWRNb2RlbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkJhc2VTdXBlcnZpc2VkTW9kZWxcIl07IH0pO1xuXG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX1N1cGVydmlzZWRNb2RlbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIlNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb25cIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21vZGVsX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tb2RlbC5taXhpbnMgKi8gXCIuL3NyYy9tb2RlbC5taXhpbnMuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJNb2RlbE1peGluc1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9tb2RlbF9taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl07IH0pO1xuXG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tb2RlbC5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21vZGVsLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmNvbnN0IFVuU3VwZXJ2aXNlZE1vZGVsc01peGlucyA9IEJhc2VQaXBlbGluZUNsYXNzID0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3Mge1xuICBnZXQgTG9zc01vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5Mb3NzO1xuICB9XG5cbiAgZ2V0IEZpdE1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5GaXQ7XG4gIH1cblxuICBnZXQgT25lSG90UHJlZGljdE1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5PbmVIb3RQcmVkaWN0O1xuICB9XG5cbiAgZ2V0IFByZWRpY3RNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuUHJlZGljdDtcbiAgfVxuXG4gIGdldCBFbmNvZGVNb2RlbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0TW9kZWwpIHtcbiAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuRW5jb2RlO1xuICB9XG5cbiAgZ2V0IERlY29kZU1vZGVsKCkge1xuICAgIGlmICghdGhpcy5uZXRNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5EZWNvZGU7XG4gIH1cblxuICBnZXQgTW9kZWwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldE1vZGVsKSB7XG4gICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm5ldE1vZGVsO1xuICB9XG5cbiAgc2V0IE1vZGVsKG1vZGVsKSB7XG4gICAgdGhpcy5uZXRNb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpIHtcbiAgICBpZiAoc3VwZXIuc2V0QnlDb25maWcpIHtcbiAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICB9XG5cbiAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgTW9kZWwgYnkgY29uZmlnJyk7XG4gICAgY29uc3Qge1xuICAgICAgTW9kZWxcbiAgICB9ID0gcGlwZWxpbmVDb25maWcuTmV0O1xuXG4gICAgaWYgKCFNb2RlbCkge1xuICAgICAgdGhyb3cgRXJyb3IoYE1vZGVsIGlzIG5vdCBzZXQgaW4gJHtKU09OLnN0cmluZ2xpZnkocGlwZWxpbmVDb25maWcpfWApO1xuICAgIH1cblxuICAgIE1vZGVsLkxheWVyUnVubmVyID0gdGhpcy5MYXllclJ1bm5lcjtcbiAgICB0aGlzLk1vZGVsID0gTW9kZWw7XG4gICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgfVxuXG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKFVuU3VwZXJ2aXNlZE1vZGVsc01peGlucyk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQuY29yZVwiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXztcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC51dGlsc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTkzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dGIyUmxiSE12ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRiMlJsYkhNdkxpOXpjbU12VTNWd1pYSjJhWE5sWkUxdlpHVnNjeTlpWVhObFUzVndaWEoyYVhObFpFMXZaR1ZzTG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2Ylc5a1pXeHpMeTR2YzNKakwxTjFjR1Z5ZG1selpXUk5iMlJsYkhNdlkyRjFjMkZzVG1WMFUzVndaWEoyYVhObFpFMXZaR1ZzY3k1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTh1TDNOeVl5OVRkWEJsY25acGMyVmtUVzlrWld4ekwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2Ylc5a1pXeHpMeTR2YzNKakwxTjFjR1Z5ZG1selpXUk5iMlJsYkhNdmMybHVaMnhsVEdGaWJHVkRiR0Z6YzJsbWFXTmhkR2x2Ymk1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTh1TDNOeVl5OXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxdlpHVnNjeTh1TDNOeVl5OXRiMlJsYkM1dGFYaHBibk11YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0YjJSbGJITXZaWGgwWlhKdVlXd2dYQ0pqWVhWellXd3RibVYwTG1OdmNtVmNJaUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMXZaR1ZzY3k5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpSmRMQ0p1WVcxbGN5STZXeUpDWVhObFUzVndaWEoyYVhObFpFMXZaR1ZzSWl3aVZHVnVjMjl5SWl3aVkyOXVjM1J5ZFdOMGIzSWlMQ0p0YjJSbGJFNWhiV1VpTENKTVlYbGxjbEoxYm01bGNpSXNJbkoxYm01bGNpSXNJa1Z5Y205eUlpd2labWwwSWl3aWJHOXpjeUlzSW5CeVpXUnBZM1FpTENKdmJtVkliM1JRY21Wa2FXTjBJaXdpUTJGMWMyRnNUbVYwVFc5a1pXeHpJaXdpY0d4aGRHWnZjbTBpTENKdGFYaFhhWFJvSWl3aVkyeGhjM05wWm1sallYUnBiMjRpTENKdWRXMURiR0Z6Y3lJc0ltMXZaR1ZzSWl3aVUybHVaMnhsVEdGaVpXeERiR0Z6YzJsbWFXTmhkR2x2YmlJc0lteGhlV1Z5VW5WdWJtVnlJaXdpVUhKbFpHbGpkRzl5SWl3aVJtbDBJaXdpYVc1d2RYUlVaVzV6YjNJaUxDSnZkWFJRZFhSVVpXNXpiM0lpTENKc2IyZFFjbTlpSWl3aWMzVmlJaXdpYkc5blUzVnRSWGh3SWl3aVVISmxaR2xqZENJc0luQnlaV1JwWTNSbFpFTnNZWE56SWl3aVlYSm5UV0Y0SWl3aVQyNWxTRzkwVUhKbFpHbGpkQ0lzSWxRaUxDSnZibVZJYjNRaUxDSk1iM056SWl3aWJHRmlaV3hVWlc1emIzSWlMQ0pzYVd0bGJHbG9iMjlrSWl3aWJtVm5JaXdpYlhWc0lpd2ljM1Z0SWl3aWJXVmhiaUlzSWxWdVUzVndaWEoyYVhObFpFMXZaR1ZzYzAxcGVHbHVjeUlzSWtKaGMyVlFhWEJsYkdsdVpVTnNZWE56SWl3aVRHOXpjMDF2WkdWc0lpd2libVYwVFc5a1pXd2lMQ0pHYVhSTmIyUmxiQ0lzSWs5dVpVaHZkRkJ5WldScFkzUk5iMlJsYkNJc0lsQnlaV1JwWTNSTmIyUmxiQ0lzSWtWdVkyOWtaVTF2WkdWc0lpd2lSVzVqYjJSbElpd2lSR1ZqYjJSbFRXOWtaV3dpTENKRVpXTnZaR1VpTENKTmIyUmxiQ0lzSW5ObGRFSjVRMjl1Wm1sbklpd2ljR2x3Wld4cGJtVkRiMjVtYVdjaUxDSk1iMmRuWlhJaUxDSm5jbTkxY0VKbFoybHVJaXdpVG1WMElpd2lTbE5QVGlJc0luTjBjbWx1WjJ4cFpua2lMQ0puY205MWNFVnVaQ0pkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N1FVTldRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdEVRVUV3UXl4blEwRkJaME03UVVGRE1VVTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SVUZCZDBRc2EwSkJRV3RDTzBGQlF6RkZPMEZCUTBFc2VVUkJRV2xFTEdOQlFXTTdRVUZETDBRN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsRVFVRjVReXhwUTBGQmFVTTdRVUZETVVVc2QwaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8wRkJRM0pKTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN096czdPenM3T3pzN096czdRVU5zUmtFN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlEwRXNUVUZCVFVFc2JVSkJRVTRzVTBGQmEwTkRMSE5FUVVGc1F5eERRVUYzUXp0QlFVTndRME1zWVVGQlZ5eEhRVUZGTzBGQlExUTdRVUZEUVN4VFFVRkxReXhUUVVGTUxFZEJRV2xDTEVWQlFXcENPMEZCUTBnN08wRkJSVVFzVFVGQlNVTXNWMEZCU2l4RFFVRm5Ra01zVFVGQmFFSXNSVUZCZFVJN1FVRkRia0lzVlVGQlRVTXNTMEZCU3l4RFFVRkRMRzlDUVVGRUxFTkJRVmc3UVVGRFNEczdRVUZGUkN4TlFVRkpSaXhYUVVGS0xFZEJRV2xDTzBGQlEySXNWVUZCVFVVc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSRU1zUzBGQlJ5eEhRVUZGTzBGQlEwUXNWVUZCVFVRc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSRVVzVFVGQlNTeEhRVUZGTzBGQlEwWXNWVUZCVFVZc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSRWNzVTBGQlR5eEhRVUZGTzBGQlEwd3NWVUZCVFVnc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSRWtzWlVGQllTeEhRVUZGTzBGQlExZ3NWVUZCVFVvc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRXpRbTFET3p0QlFUaENla0pPTEd0R1FVRm1MRVU3T3pzN096czdPenM3T3p0QlF5OUNRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVTkJPMEZCUTBFN08wRkJRMEVzVFVGQlRWY3NaVUZCVGl4VFFVRTRRa01zZVVSQlFWRXNRMEZCUTBNc1QwRkJWQ3hEUVVGclFsb3NjMFJCUVd4Q0xFVkJRVEJDTEVWQlFURkNMRU5CUVRsQ0xFTkJRVFJFTzBGQlEzaEVReXhoUVVGWExFZEJRVVU3UVVGRFZEdEJRVU5JT3p0QlFVVkVXU3huUWtGQll5eERRVUZEUXl4UlFVRkVMRVZCUVZVN1FVRkRjRUlzVTBGQlMwTXNTMEZCVEN4SFFVRmhMRWxCUVVsRExHdEZRVUZLTEVOQlFUaENSaXhSUVVFNVFpeERRVUZpTzBGQlEwRXNWMEZCVHl4TFFVRkxReXhMUVVGYU8wRkJRMGc3TzBGQlVuVkVPenRCUVZVM1F5eHRSVUZCU1V3c1pVRkJTaXhGUVVGbUxFVTdPenM3T3pzN096czdPenRCUTJKQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTBSQk8wRkJRVUU3UVVGQlFUczdRVUZGUVN4TlFVRk5UU3g1UWtGQlRpeFRRVUYzUTJwQ0xEUkVRVUY0UXl4RFFVRXlSRHRCUVVOMlJFVXNZVUZCVnl4RFFVRkRZU3hSUVVGRUxFVkJRVlU3UVVGRGFrSTdPMEZCUTBFc1VVRkJSMEVzVVVGQlVTeEhRVUZITEVOQlFXUXNSVUZCWjBJN1FVRkRXaXhYUVVGTFFTeFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5JTEV0QlJrUXNUVUZIU1R0QlFVTkJMRmxCUVUxVUxFdEJRVXNzUTBGQlJTeDNRa0ZCZFVKVExGRkJRVk1zUlVGQmJFTXNRMEZCV0R0QlFVTklPMEZCUTBvN08wRkJSVVFzVFVGQlNWZ3NWMEZCU2l4RFFVRm5RbU1zVjBGQmFFSXNSVUZCTkVJN1FVRkRlRUlzVVVGQlNUdEJRVUZGUXp0QlFVRkdMRkZCUVdkQ1JDeFhRVUZ3UWp0QlFVTkJMRk5CUVV0aUxFMUJRVXdzUjBGQll6dEJRVUZGWXp0QlFVRkdMRXRCUVdRN1FVRkRTRHM3UVVGRlJDeE5RVUZKWml4WFFVRktMRWRCUVdsQ08wRkJRMklzVVVGQlJ5eERRVUZETEV0QlFVdERMRTFCUVZRc1JVRkJaMEk3UVVGRFdpeFpRVUZOUXl4TFFVRkxMRU5CUVVNc2JVSkJRVVFzUTBGQldEdEJRVU5JT3p0QlFVTkVMRmRCUVU4c1MwRkJTMFFzVFVGQldqdEJRVU5JT3p0QlFVVkVMRTFCUVVsbExFZEJRVW9zUjBGQlV6dEJRVU5NTEZWQlFVMDdRVUZCUlVRN1FVRkJSaXhSUVVGblFpeExRVUZMWml4WFFVRXpRanRCUVVOQkxGZEJRVkZwUWl4WFFVRkVMRWxCUVdVN1FVRkRiRUlzVlVGQlNVTXNXVUZCV1N4SFFVRkhTQ3hUUVVGVExFTkJRVU5GTEZkQlFVUXNRMEZCTlVJN1FVRkRRU3hWUVVGSlJTeFBRVUZQTEVkQlFVZEVMRmxCUVZrc1EwRkJRMFVzUjBGQllpeERRVUZwUWtZc1dVRkJXU3hEUVVGRFJ5eFRRVUZpTEVOQlFYVkNMRU5CUVhaQ0xFVkJRVEJDTEVsQlFURkNMRU5CUVdwQ0xFTkJRV1E3UVVGRFFTeGhRVUZQUml4UFFVRlFPMEZCUTBnc1MwRktSRHRCUVV0SU96dEJRVVZFTEUxQlFVbEhMRTlCUVVvc1IwRkJZVHRCUVVOVUxGVkJRVTFPTEVkQlFVY3NSMEZCUnl4TFFVRkxRU3hIUVVGcVFqdEJRVU5CTEZkQlFWRkRMRmRCUVVRc1NVRkJaVHRCUVVOc1FpeFZRVUZKUlN4UFFVRlBMRWRCUVVkSUxFZEJRVWNzUTBGQlEwTXNWMEZCUkN4RFFVRnFRanRCUVVOQkxGVkJRVWxOTEdOQlFXTXNSMEZCUjBvc1QwRkJUeXhEUVVGRFN5eE5RVUZTTEVOQlFXVXNRMEZCWml4RFFVRnlRanRCUVVOQkxHRkJRVTlFTEdOQlFWQTdRVUZEU0N4TFFVcEVPMEZCUzBnN08wRkJSVVFzVFVGQlNVVXNZVUZCU2l4SFFVRnRRanRCUVVObUxGVkJRVTFJTEU5QlFVOHNSMEZCUnl4TFFVRkxRU3hQUVVGeVFqdEJRVU5CTEZkQlFWRk1MRmRCUVVRc1NVRkJaVHRCUVVOc1FpeFZRVUZKVFN4alFVRmpMRWRCUVVkRUxFOUJRVThzUTBGQlEwd3NWMEZCUkN4RFFVRTFRanRCUVVOQkxGVkJRVWxZTEdGQlFXRXNSMEZCUnl4TFFVRkxiMElzUTBGQlRDeERRVUZQUXl4TlFVRlFMRU5CUVdOS0xHTkJRV1FzUlVGQk9FSXNTMEZCUzFvc1VVRkJia01zUTBGQmNFSTdRVUZEUVN4aFFVRlBUQ3hoUVVGUU8wRkJRMGdzUzBGS1JEdEJRVXRJT3p0QlFVTkVMRTFCUVVselFpeEpRVUZLTEVkQlFWVTdRVUZEVGl4VlFVRk5XaXhIUVVGSExFZEJRVWNzUzBGQlMwRXNSMEZCYWtJN1FVRkRRU3hYUVVGUExFTkJRVU5ETEZkQlFVUXNSVUZCWTFrc1YwRkJaQ3hMUVVFMFFqdEJRVU12UWl4VlFVRkpWaXhQUVVGUExFZEJRVWRJTEVkQlFVY3NRMEZCUTBNc1YwRkJSQ3hEUVVGcVFqdEJRVU5CTEZWQlFVbGhMRlZCUVZVc1IwRkJSMWdzVDBGQlR5eERRVUZEV1N4SFFVRlNMRWRCUVdORExFZEJRV1FzUTBGQmEwSklMRmRCUVd4Q0xFTkJRV3BDTzBGQlEwRXNWVUZCU1hwQ0xFbEJRVWtzUjBGQlJ6QkNMRlZCUVZVc1EwRkJRMGNzUjBGQldDeERRVUZsTEVOQlFXWXNSVUZCYTBKRExFbEJRV3hDTEVWQlFWZzdRVUZEUVN4aFFVRlBPVUlzU1VGQlVEdEJRVU5JTEV0QlRFUTdRVUZOU0RzN1FVRjZSSE5FT3p0QlFUSkVOVU5UTEhkR1FVRm1MRVU3T3pzN096czdPenM3T3p0QlF6ZEVRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3T3pzN096czdPenM3T3pzN1FVTkJRVHRCUVVGQkxFMUJRVTF6UWl4M1FrRkJkMElzUjBGQlNVTXNhVUpCUVVRc1NVRkJjMElzWTBGQlkwRXNhVUpCUVdRc1EwRkJLMEk3UVVGRGJFWXNUVUZCU1VNc1UwRkJTaXhIUVVGbE8wRkJRMWdzVVVGQlJ5eERRVUZETEV0QlFVdERMRkZCUVZRc1JVRkJhMEk3UVVGRFpDeFpRVUZOY0VNc1MwRkJTeXhEUVVGRExIRkNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkRSQ3hYUVVGUExFdEJRVXR2UXl4UlFVRk1MRU5CUVdOV0xFbEJRWEpDTzBGQlEwZzdPMEZCUlVRc1RVRkJTVmNzVVVGQlNpeEhRVUZqTzBGQlExWXNVVUZCUnl4RFFVRkRMRXRCUVV0RUxGRkJRVlFzUlVGQmEwSTdRVUZEWkN4WlFVRk5jRU1zUzBGQlN5eERRVUZETEhGQ1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRFJDeFhRVUZQTEV0QlFVdHZReXhSUVVGTUxFTkJRV04wUWl4SFFVRnlRanRCUVVOSU96dEJRVVZFTEUxQlFVbDNRaXhyUWtGQlNpeEhRVUYzUWp0QlFVTndRaXhSUVVGSExFTkJRVU1zUzBGQlMwWXNVVUZCVkN4RlFVRnJRanRCUVVOa0xGbEJRVTF3UXl4TFFVRkxMRU5CUVVNc2NVSkJRVVFzUTBGQldEdEJRVU5JT3p0QlFVTkVMRmRCUVU4c1MwRkJTMjlETEZGQlFVd3NRMEZCWTJJc1lVRkJja0k3UVVGRFNEczdRVUZGUkN4TlFVRkpaMElzV1VGQlNpeEhRVUZyUWp0QlFVTmtMRkZCUVVjc1EwRkJReXhMUVVGTFNDeFJRVUZVTEVWQlFXdENPMEZCUTJRc1dVRkJUWEJETEV0QlFVc3NRMEZCUXl4eFFrRkJSQ3hEUVVGWU8wRkJRMGc3TzBGQlEwUXNWMEZCVHl4TFFVRkxiME1zVVVGQlRDeERRVUZqYUVJc1QwRkJja0k3UVVGRFNEczdRVUZGUkN4TlFVRkpiMElzVjBGQlNpeEhRVUZwUWp0QlFVTmlMRkZCUVVjc1EwRkJReXhMUVVGTFNpeFJRVUZVTEVWQlFXdENPMEZCUTJRc1dVRkJUWEJETEV0QlFVc3NRMEZCUXl4eFFrRkJSQ3hEUVVGWU8wRkJRMGc3TzBGQlEwUXNWMEZCVHl4TFFVRkxiME1zVVVGQlRDeERRVUZqU3l4TlFVRnlRanRCUVVOSU96dEJRVVZFTEUxQlFVbERMRmRCUVVvc1IwRkJhVUk3UVVGRFlpeFJRVUZITEVOQlFVTXNTMEZCUzA0c1VVRkJWQ3hGUVVGclFqdEJRVU5rTEZsQlFVMXdReXhMUVVGTExFTkJRVU1zY1VKQlFVUXNRMEZCV0R0QlFVTklPenRCUVVORUxGZEJRVThzUzBGQlMyOURMRkZCUVV3c1EwRkJZMDhzVFVGQmNrSTdRVUZEU0RzN1FVRkhSQ3hOUVVGSlF5eExRVUZLTEVkQlFWYzdRVUZEVUN4UlFVRkhMRU5CUVVNc1MwRkJTMUlzVVVGQlZDeEZRVUZyUWp0QlFVTmtMRmxCUVUxd1F5eExRVUZMTEVOQlFVTXNjVUpCUVVRc1EwRkJXRHRCUVVOSU96dEJRVU5FTEZkQlFVOHNTMEZCUzI5RExGRkJRVm83UVVGRFNEczdRVUZIUkN4TlFVRkpVU3hMUVVGS0xFTkJRVlZzUXl4TFFVRldMRVZCUVdkQ08wRkJRMW9zVTBGQlN6QkNMRkZCUVV3c1IwRkJaMEl4UWl4TFFVRm9RanRCUVVOSU96dEJRVVZFYlVNc1lVRkJWeXhEUVVGRFF5eGpRVUZFTEVWQlFXZENPMEZCUTNaQ0xGRkJRVWNzVFVGQlRVUXNWMEZCVkN4RlFVRnhRanRCUVVOcVFpeFpRVUZOUVN4WFFVRk9MRU5CUVd0Q1F5eGpRVUZzUWp0QlFVTklPenRCUVVORUxGTkJRVXRETEUxQlFVd3NRMEZCV1VNc1ZVRkJXaXhEUVVGMVFpeHhRa0ZCZGtJN1FVRkRRU3hWUVVGTk8wRkJRVVZLTzBGQlFVWXNVVUZCV1VVc1kwRkJZeXhEUVVGRFJ5eEhRVUZxUXpzN1FVRkRRU3hSUVVGSExFTkJRVU5NTEV0QlFVb3NSVUZCVlR0QlFVTk9MRmxCUVUwMVF5eExRVUZMTEVOQlFVVXNkVUpCUVhOQ2EwUXNTVUZCU1N4RFFVRkRReXhWUVVGTUxFTkJRV2RDVEN4alFVRm9RaXhEUVVGblF5eEZRVUY0UkN4RFFVRllPMEZCUTBnN08wRkJRMFJHTEZOQlFVc3NRMEZCUXpsRExGZEJRVTRzUjBGQmIwSXNTMEZCUzBFc1YwRkJla0k3UVVGRFFTeFRRVUZMT0VNc1MwRkJUQ3hIUVVGaFFTeExRVUZpTzBGQlEwRXNVMEZCUzBjc1RVRkJUQ3hEUVVGWlN5eFJRVUZhTzBGQlEwZzdPMEZCY0VWcFJpeERRVUYwUmpzN1FVRjFSV1Z1UWl4MVJrRkJaaXhGT3pzN096czdPenM3T3p0QlEzWkZRU3cyUkRzN096czdPenM3T3pzN1FVTkJRU3c0UkNJc0ltWnBiR1VpT2lKQVkyRjFjMkZzVG1WMEwyMXZaR1ZzY3k1M1pXSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtISmxjWFZwY21Vb1hDSmpZWFZ6WVd3dGJtVjBMbU52Y21WY0lpa3NJSEpsY1hWcGNtVW9YQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0lwS1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pHVm1hVzVsSUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUdSbFptbHVaUzVoYldRcFhHNWNkRngwWkdWbWFXNWxLRnRjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpTENCY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lsMHNJR1poWTNSdmNua3BPMXh1WEhSbGJITmxJR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJsZUhCdmNuUnpXMXdpUUdOaGRYTmhiRTVsZEM5dGIyUmxiSE5jSWwwZ1BTQm1ZV04wYjNKNUtISmxjWFZwY21Vb1hDSmpZWFZ6WVd3dGJtVjBMbU52Y21WY0lpa3NJSEpsY1hWcGNtVW9YQ0pqWVhWellXd3RibVYwTG5WMGFXeHpYQ0lwS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSkFZMkYxYzJGc1RtVjBMMjF2WkdWc2Mxd2lYU0E5SUdaaFkzUnZjbmtvY205dmRGdGNJbU5oZFhOaGJDMXVaWFF1WTI5eVpWd2lYU3dnY205dmRGdGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJbDBwTzF4dWZTa29kR2hwY3l3Z1puVnVZM1JwYjI0b1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgyTnZjbVZmWHl3Z1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgzVjBhV3h6WDE4cElIdGNibkpsZEhWeWJpQWlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnWENJdUwzTnlZeTlwYm1SbGVDNXFjMXdpS1R0Y2JpSXNJbWx0Y0c5eWRDQjdJRlJsYm5OdmNpQjlJR1p5YjIwZ0oyTmhkWE5oYkMxdVpYUXVZMjl5WlNjN1hHNWpiR0Z6Y3lCQ1lYTmxVM1Z3WlhKMmFYTmxaRTF2WkdWc0lHVjRkR1Z1WkhNZ1ZHVnVjMjl5ZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0NsN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ylc5a1pXeE9ZVzFsSUQwZ0p5YzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBJRXhoZVdWeVVuVnVibVZ5S0hKMWJtNWxjaWw3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtDZHBiWEJzWlcxbGJuUWdjbVZ4ZFdseVpXUW5LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFFnVEdGNVpYSlNkVzV1WlhJb0tYdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjJsdGNHeGxiV1Z1ZENCeVpYRjFhWEpsWkNjcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdacGRDZ3BlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmFXMXdiR1Z0Wlc1MElISmxjWFZwY21Wa0p5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHOXpjeWdwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjSEpsWkdsamRDZ3BlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmFXMXdiR1Z0Wlc1MElISmxjWFZwY21Wa0p5azdYRzRnSUNBZ2ZWeHVJQ0FnSUc5dVpVaHZkRkJ5WldScFkzUW9LWHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dSWEp5YjNJb0oybHRjR3hsYldWdWRDQnlaWEYxYVhKbFpDY3BPMXh1SUNBZ0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUW1GelpWTjFjR1Z5ZG1selpXUk5iMlJsYkRzaUxDSnBiWEJ2Y25RZ2V5QndiR0YwWm05eWJTQjlJR1p5YjIwZ0oyTmhkWE5oYkMxdVpYUXVkWFJwYkhNbk8xeHVhVzF3YjNKMElIc2dWR1Z1YzI5eUlIMGdabkp2YlNBblkyRjFjMkZzTFc1bGRDNWpiM0psSnp0Y2JtbHRjRzl5ZENCN0lHUmxabUYxYkhRZ1lYTWdVMmx1WjJ4bFRHRmlaV3hEYkdGemMybG1hV05oZEdsdmJpQjlJR1p5YjIwZ0p5NHZjMmx1WjJ4bFRHRmliR1ZEYkdGemMybG1hV05oZEdsdmJpYzdYRzVqYkdGemN5QkRZWFZ6WVd4T1pYUk5iMlJsYkhNZ1pYaDBaVzVrY3lCd2JHRjBabTl5YlM1dGFYaFhhWFJvS0NCVVpXNXpiM0lzSUZ0ZElDbDdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9LWHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9LVHRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnWTJ4aGMzTnBabWxqWVhScGIyNG9iblZ0UTJ4aGMzTXBlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMXZaR1ZzSUQwZ2JtVjNJRk5wYm1kc1pVeGhZbVZzUTJ4aGMzTnBabWxqWVhScGIyNG9iblZ0UTJ4aGMzTXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dGIyUmxiRHRjYmlBZ0lDQjlYRzU5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0J1WlhjZ1EyRjFjMkZzVG1WMFRXOWtaV3h6S0NrN0lpd2laWGh3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJqWVhWellXeE9aWFJOYjJSbGJITWdmU0JtY205dElDY3VMMk5oZFhOaGJFNWxkRk4xY0dWeWRtbHpaV1JOYjJSbGJITW5PMXh1Wlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCQ1lYTmxVM1Z3WlhKMmFYTmxaRTF2WkdWc0lIMGdabkp2YlNBbkxpOWlZWE5sVTNWd1pYSjJhWE5sWkUxdlpHVnNKenRjYm1WNGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1UybHVaMnhsVEdGaVpXeERiR0Z6YzJsbWFXTmhkR2x2YmlCOUlHWnliMjBnSnk0dmMybHVaMnhsVEdGaWJHVkRiR0Z6YzJsbWFXTmhkR2x2YmljN1hHNGlMQ0pwYlhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUVKaGMyVlRkWEJsY25acGMyVmtUVzlrWld3Z2ZTQm1jbTl0SUNjdUwySmhjMlZUZFhCbGNuWnBjMlZrVFc5a1pXd25PMXh1WEc1amJHRnpjeUJUYVc1bmJHVk1ZV0psYkVOc1lYTnphV1pwWTJGMGFXOXVJR1Y0ZEdWdVpITWdRbUZ6WlZOMWNHVnlkbWx6WldSTmIyUmxiSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWh1ZFcxRGJHRnpjeWw3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUdsbUtHNTFiVU5zWVhOeklENGdNQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG01MWJVTnNZWE56SUQwZ2JuVnRRMnhoYzNNN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaV3h6Wlh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0dCbGVIQmxZM1FnYm5WdFkyeGhjM01zSUdkbGRDQWtlMjUxYlVOc1lYTnpmV0FwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWMElFeGhlV1Z5VW5WdWJtVnlLR3hoZVdWeVVuVnVibVZ5S1h0Y2JpQWdJQ0FnSUNBZ2JHVjBJSHNnVUhKbFpHbGpkRzl5SUgwZ1BTQnNZWGxsY2xKMWJtNWxjanRjYmlBZ0lDQWdJQ0FnZEdocGN5NXlkVzV1WlhJZ1BTQjdJRkJ5WldScFkzUnZjaUI5TzF4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZENCTVlYbGxjbEoxYm01bGNpZ3BlMXh1SUNBZ0lDQWdJQ0JwWmlnaGRHaHBjeTV5ZFc1dVpYSXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KM0oxYm01bGNpQnBjeUJ1YjNRZ2MyVjBKeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjblZ1Ym1WeU8xeHVJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQm5aWFFnUm1sMEtDbDdYRzRnSUNBZ0lDQWdJR052Ym5OMElIc2dVSEpsWkdsamRHOXlJSDBnUFNCMGFHbHpMa3hoZVdWeVVuVnVibVZ5TzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0dsdWNIVjBWR1Z1YzI5eUtUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJRzkxZEZCMWRGUmxibk52Y2lBOUlGQnlaV1JwWTNSdmNpaHBibkIxZEZSbGJuTnZjaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYkc5blVISnZZaUE5SUc5MWRGQjFkRlJsYm5OdmNpNXpkV0lvYjNWMFVIVjBWR1Z1YzI5eUxteHZaMU4xYlVWNGNDZ3hMQ0IwY25WbEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYkc5blVISnZZanRjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ1oyVjBJRkJ5WldScFkzUW9LWHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdSbWwwSUQwZ2RHaHBjeTVHYVhRN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb2FXNXdkWFJVWlc1emIzSXBQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYkc5blVISnZZaUE5SUVacGRDaHBibkIxZEZSbGJuTnZjaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY0hKbFpHbGpkR1ZrUTJ4aGMzTWdQU0JzYjJkUWNtOWlMbUZ5WjAxaGVDZ3hLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCd2NtVmthV04wWldSRGJHRnpjenRjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhRZ1QyNWxTRzkwVUhKbFpHbGpkQ2dwZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JRY21Wa2FXTjBJRDBnZEdocGN5NVFjbVZrYVdOME8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHbHVjSFYwVkdWdWMyOXlLVDArZTF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhCeVpXUnBZM1JsWkVOc1lYTnpJRDBnVUhKbFpHbGpkQ2hwYm5CMWRGUmxibk52Y2lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2IyNWxTRzkwVUhKbFpHbGpkQ0E5SUhSb2FYTXVWQzV2Ym1WSWIzUW9jSEpsWkdsamRHVmtRMnhoYzNNc0lIUm9hWE11Ym5WdFEyeGhjM01wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHOXVaVWh2ZEZCeVpXUnBZM1E3WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlZ4dUlDQWdJR2RsZENCTWIzTnpLQ2w3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRVpwZENBOUlIUm9hWE11Um1sME8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHbHVjSFYwVkdWdWMyOXlMQ0JzWVdKbGJGUmxibk52Y2lrOVBudGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnNiMmRRY205aUlEMGdSbWwwS0dsdWNIVjBWR1Z1YzI5eUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnNhV3RsYkdsb2IyOWtJRDBnYkc5blVISnZZaTV1Wldjb0tTNXRkV3dvYkdGaVpXeFVaVzV6YjNJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHeHZjM01nUFNCc2FXdGxiR2xvYjI5a0xuTjFiU2d4S1M1dFpXRnVLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JHOXpjenRjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1OVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVGFXNW5iR1ZNWVdKbGJFTnNZWE56YVdacFkyRjBhVzl1T3lJc0ltVjRjRzl5ZENCN0lHTmhkWE5oYkU1bGRFMXZaR1ZzY3l3Z1hHNGdJQ0FnSUNBZ0lDQkNZWE5sVTNWd1pYSjJhWE5sWkUxdlpHVnNMQ0JjYmlBZ0lDQWdJQ0FnSUZOcGJtZHNaVXhoWW1Wc1EyeGhjM05wWm1sallYUnBiMjRnZlNCbWNtOXRJQ2N1TDFOMWNHVnlkbWx6WldSTmIyUmxiSE12YVc1a1pYZ25PMXh1Wlhod2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCTmIyUmxiRTFwZUdsdWN5QjlJR1p5YjIwZ0p5NHZiVzlrWld3dWJXbDRhVzV6Snp0Y2JpSXNJbU52Ym5OMElGVnVVM1Z3WlhKMmFYTmxaRTF2WkdWc2MwMXBlR2x1Y3lBOUlDaENZWE5sVUdsd1pXeHBibVZEYkdGemN5azlQaUJqYkdGemN5QmxlSFJsYm1SeklFSmhjMlZRYVhCbGJHbHVaVU5zWVhOemUxeHVJQ0FnSUdkbGRDQk1iM056VFc5a1pXd29LWHRjYmlBZ0lDQWdJQ0FnYVdZb0lYUm9hWE11Ym1WMFRXOWtaV3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvSjI1bGRFMXZaR1ZzSUdseklHNXZkQ0J6WlhRbktUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dVpYUk5iMlJsYkM1TWIzTnpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkQ0JHYVhSTmIyUmxiQ2dwZTF4dUlDQWdJQ0FnSUNCcFppZ2hkR2hwY3k1dVpYUk5iMlJsYkNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmJtVjBUVzlrWld3Z2FYTWdibTkwSUhObGRDY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtNWxkRTF2WkdWc0xrWnBkRHRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnWjJWMElFOXVaVWh2ZEZCeVpXUnBZM1JOYjJSbGJDZ3BlMXh1SUNBZ0lDQWdJQ0JwWmlnaGRHaHBjeTV1WlhSTmIyUmxiQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYm1WMFRXOWtaV3dnYVhNZ2JtOTBJSE5sZENjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG01bGRFMXZaR1ZzTGs5dVpVaHZkRkJ5WldScFkzUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBJRkJ5WldScFkzUk5iMlJsYkNncGUxeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NXVaWFJOYjJSbGJDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25ibVYwVFc5a1pXd2dhWE1nYm05MElITmxkQ2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTVsZEUxdlpHVnNMbEJ5WldScFkzUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBJRVZ1WTI5a1pVMXZaR1ZzS0NsN1hHNGdJQ0FnSUNBZ0lHbG1LQ0YwYUdsekxtNWxkRTF2WkdWc0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtDZHVaWFJOYjJSbGJDQnBjeUJ1YjNRZ2MyVjBKeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVibVYwVFc5a1pXd3VSVzVqYjJSbE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRDQkVaV052WkdWTmIyUmxiQ2dwZTF4dUlDQWdJQ0FnSUNCcFppZ2hkR2hwY3k1dVpYUk5iMlJsYkNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmJtVjBUVzlrWld3Z2FYTWdibTkwSUhObGRDY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtNWxkRTF2WkdWc0xrUmxZMjlrWlR0Y2JpQWdJQ0I5WEc1Y2JseHVJQ0FnSUdkbGRDQk5iMlJsYkNncGUxeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NXVaWFJOYjJSbGJDbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25ibVYwVFc5a1pXd2dhWE1nYm05MElITmxkQ2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTVsZEUxdlpHVnNPMXh1SUNBZ0lIMWNiaUFnSUNCY2JseHVJQ0FnSUhObGRDQk5iMlJsYkNodGIyUmxiQ2w3SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnZEdocGN5NXVaWFJOYjJSbGJDQTlJRzF2WkdWc08xeHVJQ0FnSUgxY2JseHVJQ0FnSUhObGRFSjVRMjl1Wm1sbktIQnBjR1ZzYVc1bFEyOXVabWxuS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9jM1Z3WlhJdWMyVjBRbmxEYjI1bWFXY3BlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MzVndaWEl1YzJWMFFubERiMjVtYVdjb2NHbHdaV3hwYm1WRGIyNW1hV2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIUm9hWE11VEc5bloyVnlMbWR5YjNWd1FtVm5hVzRvSjNObGRDQk5iMlJsYkNCaWVTQmpiMjVtYVdjbktUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2V5Qk5iMlJsYkNCOUlEMGdjR2x3Wld4cGJtVkRiMjVtYVdjdVRtVjBPMXh1SUNBZ0lDQWdJQ0JwWmlnaFRXOWtaV3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ1JYSnliM0lvWUUxdlpHVnNJR2x6SUc1dmRDQnpaWFFnYVc0Z0pIdEtVMDlPTG5OMGNtbHVaMnhwWm5rb2NHbHdaV3hwYm1WRGIyNW1hV2NwZldBcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJRTF2WkdWc0xreGhlV1Z5VW5WdWJtVnlJRDBnZEdocGN5NU1ZWGxsY2xKMWJtNWxjanRjYmlBZ0lDQWdJQ0FnZEdocGN5NU5iMlJsYkNBOUlFMXZaR1ZzTzF4dUlDQWdJQ0FnSUNCMGFHbHpMa3h2WjJkbGNpNW5jbTkxY0VWdVpDZ3BPMXh1SUNBZ0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZWdVUzVndaWEoyYVhObFpFMXZaR1ZzYzAxcGVHbHVjenRjYmlJc0ltMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gxOVhSVUpRUVVOTFgwVllWRVZTVGtGTVgwMVBSRlZNUlY5allYVnpZV3hmYm1WMFgyTnZjbVZmWHpzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZlkyRjFjMkZzWDI1bGRGOTFkR2xzYzE5Zk95SmRMQ0p6YjNWeVkyVlNiMjkwSWpvaUluMD0iLCJpbXBvcnQgeyBEYXRhU291cmNlTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5kYXRhc2V0cyc7XG5pbXBvcnQgeyBQcmVwcm9jZXNzaW5nTWl4aW5zLCBjYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtIH0gZnJvbSAnY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nJztcbmltcG9ydCB7IFRyYWluZXJNaXhpbnMsIEV2YWx1YXRvck1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQub3B0aW1pemVycyc7XG5pbXBvcnQgeyBNb2RlbE1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQubW9kZWxzJztcbmltcG9ydCB7IGNhdXNhbE5ldFJ1bm5lciwgTGF5ZXJSdW5uZXJNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmxheWVyJztcbmltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgY2F1c2FsTmV0RGVwbG95bWVudCwgRGVwbG95bWVudE1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQuZGVwbG95bWVudCc7XG5pbXBvcnQgeyB0ZXJtTG9nZ2VyLCBMb2dnZXJNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LmxvZyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuXG5jbGFzcyBDYXVzYWxOZXQgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKFRlbnNvciwgWyBcbiAgICAgICAgRGF0YVNvdXJjZU1peGlucyxcbiAgICAgICAgUHJlcHJvY2Vzc2luZ01peGlucyxcbiAgICAgICAgTGF5ZXJSdW5uZXJNaXhpbnMsIFxuICAgICAgICBNb2RlbE1peGlucywgXG4gICAgICAgIEV2YWx1YXRvck1peGlucyxcbiAgICAgICAgVHJhaW5lck1peGlucywgXG4gICAgICAgIExvZ2dlck1peGlucyxcbiAgICAgICAgRGVwbG95bWVudE1peGlucyBdKXtcbiAgICBjb25zdHJ1Y3RvciggZnVuY3RvciwgbG9nZ2VyLCBzdHJlYW1QcmVwcm9jZXNzaW5nLCBuZXRSdW5uZXIsIHN0cmVhbURlcGxveW1lbnQpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLkYgPSBmdW5jdG9yO1xuICAgICAgICB0aGlzLkxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nID0gc3RyZWFtUHJlcHJvY2Vzc2luZztcbiAgICAgICAgdGhpcy5MYXllclJ1bm5lciA9IG5ldFJ1bm5lcjsgICAgICAgIFxuICAgICAgICB0aGlzLkRlcGxveW1lbnQgPSBzdHJlYW1EZXBsb3ltZW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F1c2FsTmV0KCBmdW5jdG9yLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVybUxvZ2dlciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXVzYWxOZXRSdW5uZXIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXVzYWxOZXREZXBsb3ltZW50ICk7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5jbGFzcyBGdW5jdG9yIGV4dGVuZHMgQmFzZUZ1bmN0b3J7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXVzYWxOZXQgfSBmcm9tICcuL2NhdXNhbE5ldCc7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2RhdGFzZXRzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbGF5ZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sb2dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9vcHRpbWl6ZXJzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==