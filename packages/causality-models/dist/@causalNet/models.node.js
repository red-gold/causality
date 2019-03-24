(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/models"] = factory(require("causal-net.core"), require("causal-net.utils"));
	else
		root["@causalNet/models"] = factory(root["causal-net.core"], root["causal-net.utils"]);
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

  get Fit() {
    return (inputTensor, netRunners) => {
      let outPutTensor = netRunners.PredictRunner(inputTensor);
      let logProb = outPutTensor.sub(outPutTensor.logSumExp(1, true));
      return logProb;
    };
  }

  get Predict() {
    const Fit = this.Fit;
    return (inputTensor, netRunner) => {
      let logProb = Fit(inputTensor, netRunner);
      let predictedClass = logProb.argMax(1);
      return predictedClass;
    };
  }

  OneHotPredict() {
    const Predict = this.Predict;
    return (inputTensor, netRunner) => {
      let predictedClass = Predict(inputTensor, netRunner);
      let oneHotPredict = this.T.oneHot(predictedClass, this.numClass);
      return oneHotPredict;
    };
  }

  Loss() {
    const Fit = this.Fit;
    return (inputTensor, labelTensor, netRunner) => {
      let logProb = Fit(inputTensor, netRunner);
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
  get Loss() {
    if (!this.modelLoss) {
      throw Error('Loss is not set');
    }

    return this.modelLoss;
  }

  get Decode() {
    if (!this.modelDecode) {
      throw Error('Predict is not set');
    }

    return this.modelDecode;
  }

  get Encode() {
    if (!this.modelEncode) {
      throw Error('Predict is not set');
    }

    return this.modelEncode;
  }

  get Fit() {
    if (!this.modelFit) {
      throw Error(`Fit is not set`);
    }

    return this.modelFit;
  }

  set Loss(loss) {
    this.modelLoss = loss;
  }

  set Decode(decode) {
    this.modelDecode = decode;
  }

  set Encode(encode) {
    this.modelEncode = encode;
  }

  set Fit(fit) {
    this.modelFit = fit;
  }

  get OneHotPredict() {
    if (!this.modelOneHotPredict) {
      throw Error('modelOneHotPredict is not set');
    }

    return this.modelOneHotPredict;
  }

  set OneHotPredict(oneHotPredict) {
    this.modelOneHotPredict = oneHotPredict;
  }

  get Predict() {
    if (!this.modelPredict) {
      throw Error('modelPredict is not set');
    }

    return this.modelPredict;
  }

  set Predict(predict) {
    this.modelPredict = predict;
  }

  netPredict(inputTensor) {
    console.log({
      modelPredict: this.modelPredict
    });
    const PredictRunner = this.NetRunner.PredictRunner;
    return this.modelPredict(inputTensor, {
      PredictRunner
    });
  }

  netEncode(inputTensor) {
    let encodeRunner = this.EncodeRunner;
    return this.Encode(inputTensor, encodeRunner);
  }

  netDecode(inputTensor) {
    let decodeRunner = this.DecodeRunner;
    return this.Decode(inputTensor, decodeRunner);
  }

  getModelFromConfig(netConfig) {
    const {
      Loss,
      Fit,
      Predict,
      OneHotPredict,
      Encode,
      Decode
    } = netConfig.Net.Model;
    console.log({
      Loss,
      Fit,
      Predict,
      OneHotPredict,
      Encode,
      Decode
    });
    this.Loss = Loss;
    this.Fit = Fit;
    this.Predict = Predict;
    this.OneHotPredict = OneHotPredict;
    this.Encode = Encode;
    this.Decode = Decode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9iYXNlU3VwZXJ2aXNlZE1vZGVsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL1N1cGVydmlzZWRNb2RlbHMvY2F1c2FsTmV0U3VwZXJ2aXNlZE1vZGVscy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9TdXBlcnZpc2VkTW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL1N1cGVydmlzZWRNb2RlbHMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9tb2RlbC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJCYXNlU3VwZXJ2aXNlZE1vZGVsIiwiVGVuc29yIiwiY29uc3RydWN0b3IiLCJtb2RlbE5hbWUiLCJmaXQiLCJFcnJvciIsImxvc3MiLCJwcmVkaWN0Iiwib25lSG90UHJlZGljdCIsIkNhdXNhbE5ldE1vZGVscyIsInBsYXRmb3JtIiwibWl4V2l0aCIsImNsYXNzaWZpY2F0aW9uIiwibnVtQ2xhc3MiLCJtb2RlbCIsIlNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24iLCJGaXQiLCJpbnB1dFRlbnNvciIsIm5ldFJ1bm5lcnMiLCJvdXRQdXRUZW5zb3IiLCJQcmVkaWN0UnVubmVyIiwibG9nUHJvYiIsInN1YiIsImxvZ1N1bUV4cCIsIlByZWRpY3QiLCJuZXRSdW5uZXIiLCJwcmVkaWN0ZWRDbGFzcyIsImFyZ01heCIsIk9uZUhvdFByZWRpY3QiLCJUIiwib25lSG90IiwiTG9zcyIsImxhYmVsVGVuc29yIiwibGlrZWxpaG9vZCIsIm5lZyIsIm11bCIsInN1bSIsIm1lYW4iLCJVblN1cGVydmlzZWRNb2RlbHNNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIm1vZGVsTG9zcyIsIkRlY29kZSIsIm1vZGVsRGVjb2RlIiwiRW5jb2RlIiwibW9kZWxFbmNvZGUiLCJtb2RlbEZpdCIsImRlY29kZSIsImVuY29kZSIsIm1vZGVsT25lSG90UHJlZGljdCIsIm1vZGVsUHJlZGljdCIsIm5ldFByZWRpY3QiLCJjb25zb2xlIiwibG9nIiwiTmV0UnVubmVyIiwibmV0RW5jb2RlIiwiZW5jb2RlUnVubmVyIiwiRW5jb2RlUnVubmVyIiwibmV0RGVjb2RlIiwiZGVjb2RlUnVubmVyIiwiRGVjb2RlUnVubmVyIiwiZ2V0TW9kZWxGcm9tQ29uZmlnIiwibmV0Q29uZmlnIiwiTmV0IiwiTW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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ImZpbGUiOiJAY2F1c2FsTmV0L21vZGVscy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuY2xhc3MgQmFzZVN1cGVydmlzZWRNb2RlbCBleHRlbmRzIFRlbnNvcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vZGVsTmFtZSA9ICcnO1xuICAgIH1cblxuICAgIGZpdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbG9zcygpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcHJlZGljdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIG9uZUhvdFByZWRpY3QoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVN1cGVydmlzZWRNb2RlbDsiLCJpbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiB9IGZyb20gJy4vc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbic7XG5jbGFzcyBDYXVzYWxOZXRNb2RlbHMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKCBUZW5zb3IsIFtdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgXG4gICAgY2xhc3NpZmljYXRpb24obnVtQ2xhc3Mpe1xuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24obnVtQ2xhc3MpO1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbDtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TW9kZWxzKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRNb2RlbHMgfSBmcm9tICcuL2NhdXNhbE5ldFN1cGVydmlzZWRNb2RlbHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYXNlU3VwZXJ2aXNlZE1vZGVsIH0gZnJvbSAnLi9iYXNlU3VwZXJ2aXNlZE1vZGVsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiB9IGZyb20gJy4vc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbic7XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VTdXBlcnZpc2VkTW9kZWwgfSBmcm9tICcuL2Jhc2VTdXBlcnZpc2VkTW9kZWwnO1xuXG5jbGFzcyBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIGV4dGVuZHMgQmFzZVN1cGVydmlzZWRNb2RlbHtcbiAgICBjb25zdHJ1Y3RvcihudW1DbGFzcyl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmKG51bUNsYXNzID4gMCl7XG4gICAgICAgICAgICB0aGlzLm51bUNsYXNzID0gbnVtQ2xhc3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgbnVtY2xhc3MsIGdldCAke251bUNsYXNzfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgcmV0dXJuIChpbnB1dFRlbnNvciwgbmV0UnVubmVycyk9PntcbiAgICAgICAgICAgIGxldCBvdXRQdXRUZW5zb3IgPSBuZXRSdW5uZXJzLlByZWRpY3RSdW5uZXIoaW5wdXRUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBvdXRQdXRUZW5zb3Iuc3ViKG91dFB1dFRlbnNvci5sb2dTdW1FeHAoMSwgdHJ1ZSkpO1xuICAgICAgICAgICAgcmV0dXJuIGxvZ1Byb2I7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIGdldCBQcmVkaWN0KCl7XG4gICAgICAgIGNvbnN0IEZpdCA9IHRoaXMuRml0O1xuICAgICAgICByZXR1cm4gKGlucHV0VGVuc29yLCBuZXRSdW5uZXIpPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChpbnB1dFRlbnNvciwgbmV0UnVubmVyKTtcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHByZWRpY3RlZENsYXNzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIE9uZUhvdFByZWRpY3QoKXtcbiAgICAgICAgY29uc3QgUHJlZGljdCA9IHRoaXMuUHJlZGljdDtcbiAgICAgICAgcmV0dXJuIChpbnB1dFRlbnNvciwgbmV0UnVubmVyKT0+e1xuICAgICAgICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gUHJlZGljdChpbnB1dFRlbnNvciwgbmV0UnVubmVyKTtcbiAgICAgICAgICAgIGxldCBvbmVIb3RQcmVkaWN0ID0gdGhpcy5ULm9uZUhvdChwcmVkaWN0ZWRDbGFzcywgdGhpcy5udW1DbGFzcyk7XG4gICAgICAgICAgICByZXR1cm4gb25lSG90UHJlZGljdDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgTG9zcygpe1xuICAgICAgICBjb25zdCBGaXQgPSB0aGlzLkZpdDtcbiAgICAgICAgcmV0dXJuIChpbnB1dFRlbnNvciwgbGFiZWxUZW5zb3IsIG5ldFJ1bm5lcik9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KGlucHV0VGVuc29yLCBuZXRSdW5uZXIpO1xuICAgICAgICAgICAgbGV0IGxpa2VsaWhvb2QgPSBsb2dQcm9iLm5lZygpLm11bChsYWJlbFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgbG9zcyA9IGxpa2VsaWhvb2Quc3VtKDEpLm1lYW4oKTtcbiAgICAgICAgICAgIHJldHVybiBsb3NzO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb247IiwiZXhwb3J0IHsgY2F1c2FsTmV0TW9kZWxzLCBcbiAgICAgICAgIEJhc2VTdXBlcnZpc2VkTW9kZWwsIFxuICAgICAgICAgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiB9IGZyb20gJy4vU3VwZXJ2aXNlZE1vZGVscy9pbmRleCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGVsTWl4aW5zIH0gZnJvbSAnLi9tb2RlbC5taXhpbnMnO1xuIiwiY29uc3QgVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgXG4gICAgZ2V0IExvc3MoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxMb3NzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdMb3NzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbExvc3M7XG4gICAgfVxuICAgIFxuICAgIGdldCBEZWNvZGUoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxEZWNvZGUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1ByZWRpY3QgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsRGVjb2RlO1xuICAgIH1cblxuICAgIGdldCBFbmNvZGUoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxFbmNvZGUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1ByZWRpY3QgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsRW5jb2RlO1xuICAgIH1cblxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxGaXQpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEZpdCBpcyBub3Qgc2V0YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxGaXQ7XG4gICAgfVxuXG4gICAgc2V0IExvc3MobG9zcyl7XG4gICAgICAgIHRoaXMubW9kZWxMb3NzID0gbG9zcztcbiAgICB9XG4gICAgXG4gICAgc2V0IERlY29kZShkZWNvZGUpe1xuICAgICAgICB0aGlzLm1vZGVsRGVjb2RlID0gZGVjb2RlO1xuICAgIH1cblxuICAgIHNldCBFbmNvZGUoZW5jb2RlKXtcbiAgICAgICAgdGhpcy5tb2RlbEVuY29kZSA9IGVuY29kZTtcbiAgICB9XG5cbiAgICBzZXQgRml0KGZpdCl7XG4gICAgICAgIHRoaXMubW9kZWxGaXQgPSBmaXQ7XG4gICAgfVxuXG4gICAgZ2V0IE9uZUhvdFByZWRpY3QoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxPbmVIb3RQcmVkaWN0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdtb2RlbE9uZUhvdFByZWRpY3QgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsT25lSG90UHJlZGljdDtcbiAgICB9XG5cbiAgICBzZXQgT25lSG90UHJlZGljdChvbmVIb3RQcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbE9uZUhvdFByZWRpY3QgPSBvbmVIb3RQcmVkaWN0O1xuICAgIH1cblxuICAgIGdldCBQcmVkaWN0KCl7XG4gICAgICAgIGlmKCF0aGlzLm1vZGVsUHJlZGljdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbW9kZWxQcmVkaWN0IGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbFByZWRpY3Q7XG4gICAgfVxuXG4gICAgc2V0IFByZWRpY3QocHJlZGljdCl7XG4gICAgICAgIHRoaXMubW9kZWxQcmVkaWN0ID0gcHJlZGljdDtcbiAgICB9XG4gICAgXG5cbiAgICBuZXRQcmVkaWN0KGlucHV0VGVuc29yKXtcbiAgICAgICAgY29uc29sZS5sb2coe21vZGVsUHJlZGljdDogdGhpcy5tb2RlbFByZWRpY3R9KTtcbiAgICAgICAgY29uc3QgUHJlZGljdFJ1bm5lciA9IHRoaXMuTmV0UnVubmVyLlByZWRpY3RSdW5uZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsUHJlZGljdChpbnB1dFRlbnNvciwgeyBQcmVkaWN0UnVubmVyIH0pO1xuICAgIH1cblxuICAgIG5ldEVuY29kZShpbnB1dFRlbnNvcil7XG4gICAgICAgIGxldCBlbmNvZGVSdW5uZXIgPSB0aGlzLkVuY29kZVJ1bm5lcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuRW5jb2RlKGlucHV0VGVuc29yLCBlbmNvZGVSdW5uZXIpO1xuICAgIH1cblxuICAgIG5ldERlY29kZShpbnB1dFRlbnNvcil7XG4gICAgICAgIGxldCBkZWNvZGVSdW5uZXIgPSB0aGlzLkRlY29kZVJ1bm5lcjtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGVjb2RlKGlucHV0VGVuc29yLCBkZWNvZGVSdW5uZXIpO1xuICAgIH1cblxuICAgIGdldE1vZGVsRnJvbUNvbmZpZyhuZXRDb25maWcpe1xuICAgICAgICBjb25zdCB7IExvc3MsIEZpdCwgUHJlZGljdCwgT25lSG90UHJlZGljdCwgRW5jb2RlLCBEZWNvZGUgfSA9IG5ldENvbmZpZy5OZXQuTW9kZWw7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgTG9zcywgRml0LCBQcmVkaWN0LCBPbmVIb3RQcmVkaWN0LCBFbmNvZGUsIERlY29kZSB9KTtcbiAgICAgICAgdGhpcy5Mb3NzID0gTG9zcztcbiAgICAgICAgdGhpcy5GaXQgPSBGaXQ7XG4gICAgICAgIHRoaXMuUHJlZGljdCA9IFByZWRpY3Q7XG4gICAgICAgIHRoaXMuT25lSG90UHJlZGljdCA9IE9uZUhvdFByZWRpY3Q7XG4gICAgICAgIHRoaXMuRW5jb2RlID0gRW5jb2RlO1xuICAgICAgICB0aGlzLkRlY29kZSA9IERlY29kZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9