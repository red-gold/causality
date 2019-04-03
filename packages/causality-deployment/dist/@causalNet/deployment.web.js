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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvY2F1c2FsTmV0RGVwbG95bWVudC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RlcGxveW1lbnQvLi9zcmMvZGVwbG95bWVudC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2Z1bmN0b3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kZXBsb3ltZW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGVwbG95bWVudC9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXREZXBsb3ltZW50IiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJjb25zdHJ1Y3RvciIsImZ1bmN0b3IiLCJGIiwiUiIsIkNvcmVGdW5jdG9yIiwiRW1pdHRlciIsImVtaXR0ZXIiLCJkZXBsb3lFbWl0dGVyIiwiRXJyb3IiLCJMaXN0ZW5lciIsImxpc3RlbmVyIiwiZGVwbG95TGlzdGVuZXIiLCJvbiIsImluZmVyIiwiSW5mZXJlbmNlciIsImluZmVyZW5jZXIiLCJkZXBsb3lJbmZlcmVuY2VyIiwiZW1pdFZhbHVlIiwiaW5mZXJWYWx1ZSIsImVtaXQiLCJFbnNlbWJsZUluZmVyZW5jZXIiLCJlbnNlbWJsZUluZmVyZW5jZXIiLCJkZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIiLCJkZXBsb3kiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvdW50ZXIiLCJEZXBsb3ltZW50TWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJEZXBsb3ltZW50IiwiZGVwbG95bWVudCIsIk1vZGVsTGVuc2UiLCJNb2RlbCIsIlQiLCJpbnB1dCIsIlByZWRpY3QiLCJFbmNvZGUiLCJEZWNvZGUiLCJpbnB1dFRlbnNvciIsInRlbnNvciIsImFzVHlwZSIsInJlc2hhcGUiLCJwcmVkaWN0VGVuc29yIiwiZGF0YSIsImVuY29kZVRlbnNvciIsImRlY29kZVRlbnNvciIsInNldEJ5Q29uZmlnIiwicGlwZWxpbmVDb25maWciLCJMb2dnZXIiLCJncm91cEJlZ2luIiwiZ3JvdXBFbmQiLCJGdW5jdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsbUJBQU4sU0FBa0NDLHlEQUFRLENBQUNDLE9BQVQsQ0FBa0JDLHFEQUFsQixFQUF5QixFQUF6QixDQUFsQyxDQUErRDtBQUUzREMsYUFBVyxDQUFDQyxPQUFELEVBQVM7QUFDaEI7QUFDQSxTQUFLQyxDQUFMLEdBQVNELE9BQVQ7QUFDQSxTQUFLRSxDQUFMLEdBQVNGLE9BQU8sQ0FBQ0csV0FBakI7QUFDSDs7QUFFRCxNQUFJQyxPQUFKLENBQVlDLE9BQVosRUFBb0I7QUFDaEIsU0FBS0MsYUFBTCxHQUFxQkQsT0FBckI7QUFDSDs7QUFFRCxNQUFJRCxPQUFKLEdBQWE7QUFDVCxRQUFHLENBQUMsS0FBS0UsYUFBVCxFQUF1QjtBQUNuQixZQUFNQyxLQUFLLENBQUMsb0JBQUQsQ0FBWDtBQUNIOztBQUNELFdBQU8sS0FBS0QsYUFBWjtBQUNIOztBQUVELE1BQUlFLFFBQUosQ0FBYUMsUUFBYixFQUFzQjtBQUNsQixTQUFLQyxjQUFMLEdBQXNCRCxRQUF0QjtBQUNBLFNBQUtFLEVBQUwsQ0FBUSxZQUFSLEVBQXVCQyxLQUFELElBQVM7QUFDM0IsV0FBS0YsY0FBTCxDQUFvQkUsS0FBcEI7QUFDSCxLQUZEO0FBR0EsU0FBS0QsRUFBTCxDQUFRLG9CQUFSLEVBQStCQyxLQUFELElBQVM7QUFDbkMsV0FBS0YsY0FBTCxDQUFvQkUsS0FBcEI7QUFDSCxLQUZEO0FBR0g7O0FBRUQsTUFBSUosUUFBSixHQUFjO0FBQ1YsUUFBRyxDQUFDLEtBQUtFLGNBQVQsRUFBd0I7QUFDcEIsWUFBTUgsS0FBSyxDQUFDLHFCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUtHLGNBQVo7QUFDSDs7QUFFRCxNQUFJRyxVQUFKLENBQWVDLFVBQWYsRUFBMEI7QUFDdEIsU0FBS0MsZ0JBQUwsR0FBd0JELFVBQXhCO0FBQ0EsU0FBS0gsRUFBTCxDQUFRLFNBQVIsRUFBbUIsTUFBT0ssU0FBUCxJQUFtQjtBQUNsQyxVQUFJQyxVQUFVLEdBQUcsTUFBTSxLQUFLRixnQkFBTCxDQUFzQkMsU0FBdEIsQ0FBdkI7O0FBQ0EsVUFBR0MsVUFBVSxJQUFJQSxVQUFVLEtBQUssRUFBaEMsRUFBbUM7QUFDL0IsYUFBS0MsSUFBTCxDQUFVLFlBQVYsRUFBd0JELFVBQXhCO0FBQ0g7QUFDSixLQUxEO0FBTUg7O0FBRUQsTUFBSUosVUFBSixHQUFnQjtBQUNaLFFBQUcsQ0FBQyxLQUFLRSxnQkFBVCxFQUEwQjtBQUN0QixZQUFNUixLQUFLLENBQUMsdUJBQUQsQ0FBWDtBQUNIOztBQUNELFdBQU8sS0FBS1EsZ0JBQVo7QUFDSDs7QUFFRCxNQUFJSSxrQkFBSixDQUF1QkMsa0JBQXZCLEVBQTBDO0FBRXRDLFNBQUtDLHdCQUFMLEdBQWdDRCxrQkFBaEM7QUFDQSxTQUFLVCxFQUFMLENBQVEsU0FBUixFQUFtQixNQUFPSyxTQUFQLElBQW1CO0FBQ2xDLFVBQUlDLFVBQVUsR0FBRyxNQUFNLEtBQUtJLHdCQUFMLENBQThCTCxTQUE5QixDQUF2Qjs7QUFDQSxVQUFHQyxVQUFVLElBQUlBLFVBQVUsS0FBSyxFQUFoQyxFQUFtQztBQUMvQixhQUFLQyxJQUFMLENBQVUsb0JBQVYsRUFBZ0NELFVBQWhDO0FBQ0g7QUFDSixLQUxEO0FBTUg7O0FBRUQsTUFBSUUsa0JBQUosR0FBd0I7QUFDcEIsUUFBRyxDQUFDLEtBQUtFLHdCQUFULEVBQWtDO0FBQzlCLFlBQU1kLEtBQUssQ0FBQywrQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLYyx3QkFBWjtBQUNIOztBQUVELFFBQU1DLE1BQU4sR0FBYztBQUNWLFdBQU8sSUFBSUMsT0FBSixDQUFZLE9BQU9DLE9BQVAsRUFBZ0JDLE1BQWhCLEtBQXlCO0FBQ3hDLFVBQUlDLE9BQU8sR0FBRyxDQUFkO0FBQ0EsVUFBSVYsU0FBUyxHQUFHLE1BQU0sS0FBS1osT0FBTCxFQUF0Qjs7QUFDQSxhQUFNWSxTQUFTLEtBQUssSUFBcEIsRUFBeUI7QUFDckIsYUFBS0UsSUFBTCxDQUFVLFNBQVYsRUFBcUJGLFNBQXJCO0FBQ0FVLGVBQU8sSUFBSSxDQUFYO0FBQ0FWLGlCQUFTLEdBQUcsTUFBTSxLQUFLWixPQUFMLEVBQWxCO0FBQ0g7O0FBQ0RvQixhQUFPLENBQUNFLE9BQUQsQ0FBUDtBQUNILEtBVE0sQ0FBUDtBQVVIOztBQWxGMEQ7O0FBcUZoRCxtRUFBSS9CLG1CQUFKLENBQXdCSyxnREFBeEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUN6RkE7QUFBQSxNQUFNMkIsZ0JBQWdCLEdBQUlDLGlCQUFELElBQXNCLGNBQWNBLGlCQUFkLENBQWdDO0FBRTNFLE1BQUlDLFVBQUosQ0FBZUMsVUFBZixFQUEwQjtBQUN0QixTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNIOztBQUVELE1BQUlELFVBQUosR0FBZ0I7QUFDWixRQUFHLENBQUMsS0FBS0MsVUFBVCxFQUFvQjtBQUNoQixZQUFNdkIsS0FBSyxDQUFDLHVCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUt1QixVQUFaO0FBQ0g7O0FBRUQsTUFBSWpCLFVBQUosR0FBZ0I7QUFDWixVQUFNa0IsVUFBVSxHQUFHLE1BQUk7QUFDbkIsYUFBTyxLQUFLQyxLQUFaO0FBQ0gsS0FGRDs7QUFHQSxVQUFNQyxDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLFdBQU8sTUFBT0MsS0FBUCxJQUFlO0FBQ2xCLFVBQUk7QUFBRUMsZUFBRjtBQUFXQyxjQUFYO0FBQW1CQztBQUFuQixVQUE4QkgsS0FBbEM7QUFDQSxVQUFJdEIsS0FBSyxHQUFHLEVBQVo7QUFDQSxZQUFNb0IsS0FBSyxHQUFHRCxVQUFVLEVBQXhCOztBQUNBLFVBQUdJLE9BQUgsRUFBVztBQUNQLFlBQUlHLFdBQVcsR0FBR0wsQ0FBQyxDQUFDTSxNQUFGLENBQVNKLE9BQVQsRUFBa0JLLE1BQWxCLENBQXlCLFNBQXpCLEVBQW9DQyxPQUFwQyxDQUE0QyxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsQ0FBNUMsQ0FBbEI7QUFDQSxZQUFJQyxhQUFhLEdBQUdWLEtBQUssQ0FBQ0csT0FBTixDQUFjRyxXQUFkLENBQXBCO0FBQ0ExQixhQUFLLENBQUN1QixPQUFOLEdBQWdCLE1BQU1PLGFBQWEsQ0FBQ0MsSUFBZCxFQUF0QjtBQUNIOztBQUNELFVBQUdQLE1BQUgsRUFBVTtBQUNOLFlBQUlFLFdBQVcsR0FBR0wsQ0FBQyxDQUFDTSxNQUFGLENBQVNILE1BQVQsRUFBaUJJLE1BQWpCLENBQXdCLFNBQXhCLEVBQW1DQyxPQUFuQyxDQUEyQyxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsQ0FBM0MsQ0FBbEI7QUFDQSxZQUFJRyxZQUFZLEdBQUdaLEtBQUssQ0FBQ0ksTUFBTixDQUFhRSxXQUFiLENBQW5CO0FBQ0ExQixhQUFLLENBQUN3QixNQUFOLEdBQWUsTUFBTVEsWUFBWSxDQUFDRCxJQUFiLEVBQXJCO0FBQ0g7O0FBQ0QsVUFBR04sTUFBSCxFQUFVO0FBQ04sWUFBSUMsV0FBVyxHQUFHTCxDQUFDLENBQUNNLE1BQUYsQ0FBU0YsTUFBVCxFQUFpQkcsTUFBakIsQ0FBd0IsU0FBeEIsRUFBbUNDLE9BQW5DLENBQTJDLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBTCxDQUEzQyxDQUFsQjtBQUNBLFlBQUlJLFlBQVksR0FBR2IsS0FBSyxDQUFDSSxNQUFOLENBQWFFLFdBQWIsQ0FBbkI7QUFDQTFCLGFBQUssQ0FBQ3lCLE1BQU4sR0FBZSxNQUFNUSxZQUFZLENBQUNGLElBQWIsRUFBckI7QUFDSDs7QUFDRCxhQUFPL0IsS0FBUDtBQUNILEtBcEJEO0FBcUJIOztBQUVEa0MsYUFBVyxDQUFDQyxjQUFELEVBQWdCO0FBQ3ZCLFFBQUcsTUFBTUQsV0FBVCxFQUFxQjtBQUNqQixZQUFNQSxXQUFOLENBQWtCQyxjQUFsQjtBQUNIOztBQUNELFNBQUtDLE1BQUwsQ0FBWUMsVUFBWixDQUF1QiwwQkFBdkI7QUFDQSxVQUFNO0FBQUU3QyxhQUFGO0FBQVdJO0FBQVgsUUFBd0J1QyxjQUFjLENBQUNsQixVQUE3QztBQUNBLFNBQUtBLFVBQUwsQ0FBZ0J6QixPQUFoQixHQUEwQkEsT0FBMUI7QUFDQSxTQUFLeUIsVUFBTCxDQUFnQnJCLFFBQWhCLEdBQTJCQSxRQUEzQjtBQUNBLFNBQUtxQixVQUFMLENBQWdCaEIsVUFBaEIsR0FBNkIsS0FBS0EsVUFBbEM7QUFDQSxTQUFLbUMsTUFBTCxDQUFZRSxRQUFaO0FBQ0EsV0FBT0gsY0FBUDtBQUNIOztBQUVELFFBQU16QixNQUFOLEdBQWM7QUFDVixXQUFPLE1BQU0sS0FBS08sVUFBTCxDQUFnQlAsTUFBaEIsRUFBYjtBQUNIOztBQXhEMEUsQ0FBL0U7O0FBMkRlSywrRUFBZixFOzs7Ozs7Ozs7Ozs7QUMzREE7QUFBQTtBQUFBO0FBQUE7QUFDZSxtRUFBSXdCLHVEQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kZXBsb3ltZW50LndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RlcGxveW1lbnRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RlcGxveW1lbnRcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuaW1wb3J0IHsgcGxhdGZvcm0sIGFzc2VydCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuXG5jbGFzcyBDYXVzYWxOZXREZXBsb3ltZW50IGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggRXZlbnQsIFtdICl7XG4gICAgXG4gICAgY29uc3RydWN0b3IoZnVuY3Rvcil7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuRiA9IGZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IGZ1bmN0b3IuQ29yZUZ1bmN0b3I7XG4gICAgfVxuXG4gICAgc2V0IEVtaXR0ZXIoZW1pdHRlcil7XG4gICAgICAgIHRoaXMuZGVwbG95RW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgfVxuXG4gICAgZ2V0IEVtaXR0ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95RW1pdHRlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRW1pdHRlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95RW1pdHRlcjtcbiAgICB9XG5cbiAgICBzZXQgTGlzdGVuZXIobGlzdGVuZXIpe1xuICAgICAgICB0aGlzLmRlcGxveUxpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgICAgIHRoaXMub24oJ2luZmVyZW5jZXInLCAoaW5mZXIpPT57XG4gICAgICAgICAgICB0aGlzLmRlcGxveUxpc3RlbmVyKGluZmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMub24oJ2Vuc2VtYmxlSW5mZXJlbmNlcicsIChpbmZlcik9PntcbiAgICAgICAgICAgIHRoaXMuZGVwbG95TGlzdGVuZXIoaW5mZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IExpc3RlbmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmRlcGxveUxpc3RlbmVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdMaXN0ZW5lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95TGlzdGVuZXI7XG4gICAgfVxuXG4gICAgc2V0IEluZmVyZW5jZXIoaW5mZXJlbmNlcil7XG4gICAgICAgIHRoaXMuZGVwbG95SW5mZXJlbmNlciA9IGluZmVyZW5jZXI7XG4gICAgICAgIHRoaXMub24oJ2VtaXR0ZXInLCBhc3luYyAoZW1pdFZhbHVlKT0+e1xuICAgICAgICAgICAgbGV0IGluZmVyVmFsdWUgPSBhd2FpdCB0aGlzLmRlcGxveUluZmVyZW5jZXIoZW1pdFZhbHVlKTtcbiAgICAgICAgICAgIGlmKGluZmVyVmFsdWUgJiYgaW5mZXJWYWx1ZSAhPT0ge30pe1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnaW5mZXJlbmNlcicsIGluZmVyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgSW5mZXJlbmNlcigpe1xuICAgICAgICBpZighdGhpcy5kZXBsb3lJbmZlcmVuY2VyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdJbmZlcmVuY2VyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZXBsb3lJbmZlcmVuY2VyO1xuICAgIH1cblxuICAgIHNldCBFbnNlbWJsZUluZmVyZW5jZXIoZW5zZW1ibGVJbmZlcmVuY2VyKXtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGVwbG95RW5zZW1ibGVJbmZlcmVuY2VyID0gZW5zZW1ibGVJbmZlcmVuY2VyO1xuICAgICAgICB0aGlzLm9uKCdlbWl0dGVyJywgYXN5bmMgKGVtaXRWYWx1ZSk9PntcbiAgICAgICAgICAgIGxldCBpbmZlclZhbHVlID0gYXdhaXQgdGhpcy5kZXBsb3lFbnNlbWJsZUluZmVyZW5jZXIoZW1pdFZhbHVlKTtcbiAgICAgICAgICAgIGlmKGluZmVyVmFsdWUgJiYgaW5mZXJWYWx1ZSAhPT0ge30pe1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZW5zZW1ibGVJbmZlcmVuY2VyJywgaW5mZXJWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBFbnNlbWJsZUluZmVyZW5jZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95RW5zZW1ibGVJbmZlcmVuY2VyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdFbnNlbWJsZUluZmVyZW5jZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveUVuc2VtYmxlSW5mZXJlbmNlcjtcbiAgICB9XG5cbiAgICBhc3luYyBkZXBsb3koKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICBsZXQgZW1pdFZhbHVlID0gYXdhaXQgdGhpcy5FbWl0dGVyKCk7XG4gICAgICAgICAgICB3aGlsZShlbWl0VmFsdWUgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZW1pdHRlcicsIGVtaXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICAgICAgICAgIGVtaXRWYWx1ZSA9IGF3YWl0IHRoaXMuRW1pdHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShjb3VudGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0RGVwbG95bWVudChmdW5jdG9yKTsiLCJjb25zdCBEZXBsb3ltZW50TWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3Mge1xuICAgXG4gICAgc2V0IERlcGxveW1lbnQoZGVwbG95bWVudCl7XG4gICAgICAgIHRoaXMuZGVwbG95bWVudCA9IGRlcGxveW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IERlcGxveW1lbnQoKXtcbiAgICAgICAgaWYoIXRoaXMuZGVwbG95bWVudCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZGVwbG95bWVudCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95bWVudDtcbiAgICB9XG5cbiAgICBnZXQgSW5mZXJlbmNlcigpe1xuICAgICAgICBjb25zdCBNb2RlbExlbnNlID0gKCk9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLk1vZGVsO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICByZXR1cm4gYXN5bmMgKGlucHV0KT0+e1xuICAgICAgICAgICAgbGV0IHsgUHJlZGljdCwgRW5jb2RlLCBEZWNvZGUgfSA9IGlucHV0O1xuICAgICAgICAgICAgbGV0IGluZmVyID0ge307XG4gICAgICAgICAgICBjb25zdCBNb2RlbCA9IE1vZGVsTGVuc2UoKTtcbiAgICAgICAgICAgIGlmKFByZWRpY3Qpe1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKFByZWRpY3QpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IHByZWRpY3RUZW5zb3IgPSBNb2RlbC5QcmVkaWN0KGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgICAgICBpbmZlci5QcmVkaWN0ID0gYXdhaXQgcHJlZGljdFRlbnNvci5kYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihFbmNvZGUpe1xuICAgICAgICAgICAgICAgIGxldCBpbnB1dFRlbnNvciA9IFQudGVuc29yKEVuY29kZSkuYXNUeXBlKCdmbG9hdDMyJykucmVzaGFwZShbMSwgLTFdKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5jb2RlVGVuc29yID0gTW9kZWwuRW5jb2RlKGlucHV0VGVuc29yKTtcbiAgICAgICAgICAgICAgICBpbmZlci5FbmNvZGUgPSBhd2FpdCBlbmNvZGVUZW5zb3IuZGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoRGVjb2RlKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRUZW5zb3IgPSBULnRlbnNvcihEZWNvZGUpLmFzVHlwZSgnZmxvYXQzMicpLnJlc2hhcGUoWzEsIC0xXSk7XG4gICAgICAgICAgICAgICAgbGV0IGRlY29kZVRlbnNvciA9IE1vZGVsLkVuY29kZShpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICAgICAgaW5mZXIuRGVjb2RlID0gYXdhaXQgZGVjb2RlVGVuc29yLmRhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmZlcjtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgZGVwbG95bWVudCBieSBjb25maWcnKTtcbiAgICAgICAgY29uc3QgeyBFbWl0dGVyLCBMaXN0ZW5lciB9ID0gcGlwZWxpbmVDb25maWcuRGVwbG95bWVudDtcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50LkVtaXR0ZXIgPSBFbWl0dGVyO1xuICAgICAgICB0aGlzLkRlcGxveW1lbnQuTGlzdGVuZXIgPSBMaXN0ZW5lcjtcbiAgICAgICAgdGhpcy5EZXBsb3ltZW50LkluZmVyZW5jZXIgPSB0aGlzLkluZmVyZW5jZXI7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBwaXBlbGluZUNvbmZpZztcbiAgICB9XG5cbiAgICBhc3luYyBkZXBsb3koKXtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuRGVwbG95bWVudC5kZXBsb3koKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXBsb3ltZW50TWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldERlcGxveW1lbnQgfSBmcm9tICcuL2NhdXNhbE5ldERlcGxveW1lbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEZXBsb3ltZW50TWl4aW5zIH0gZnJvbSAnLi9kZXBsb3ltZW50Lm1peGlucyc7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==