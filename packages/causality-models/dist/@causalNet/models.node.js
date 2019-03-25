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

  set Net(net) {
    let {
      Predictor
    } = net;
    this.net = {
      Predictor
    };
  }

  get Fit() {
    return (inputTensor, net = this.net) => {
      let outPutTensor = net.Predictor(inputTensor);
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

  get OneHotPredict() {
    const Predict = this.Predict;
    return (inputTensor, netRunner) => {
      let predictedClass = Predict(inputTensor, netRunner);
      let oneHotPredict = this.T.oneHot(predictedClass, this.numClass);
      return oneHotPredict;
    };
  }

  get Loss() {
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

  set Model(model) {
    this.netModel = model;
    this.netModel.Net = this.Net;
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.logger.groupBegin('set Model by config');
    const Net = pipelineConfig.Net;

    if (!Net) {
      throw Error(`Net is not set in ${JSON.stringify(pipelineConfig)}`);
    }

    const {
      Model
    } = Net;

    if (!Model) {
      throw Error(`Model is not set in ${JSON.stringify(Net)}`);
    }

    this.Model = Model;
    this.logger.groupEnd();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9iYXNlU3VwZXJ2aXNlZE1vZGVsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL1N1cGVydmlzZWRNb2RlbHMvY2F1c2FsTmV0U3VwZXJ2aXNlZE1vZGVscy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9TdXBlcnZpc2VkTW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL1N1cGVydmlzZWRNb2RlbHMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9tb2RlbC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJCYXNlU3VwZXJ2aXNlZE1vZGVsIiwiVGVuc29yIiwiY29uc3RydWN0b3IiLCJtb2RlbE5hbWUiLCJmaXQiLCJFcnJvciIsImxvc3MiLCJwcmVkaWN0Iiwib25lSG90UHJlZGljdCIsIkNhdXNhbE5ldE1vZGVscyIsInBsYXRmb3JtIiwibWl4V2l0aCIsImNsYXNzaWZpY2F0aW9uIiwibnVtQ2xhc3MiLCJtb2RlbCIsIlNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24iLCJOZXQiLCJuZXQiLCJQcmVkaWN0b3IiLCJGaXQiLCJpbnB1dFRlbnNvciIsIm91dFB1dFRlbnNvciIsImxvZ1Byb2IiLCJzdWIiLCJsb2dTdW1FeHAiLCJQcmVkaWN0IiwibmV0UnVubmVyIiwicHJlZGljdGVkQ2xhc3MiLCJhcmdNYXgiLCJPbmVIb3RQcmVkaWN0IiwiVCIsIm9uZUhvdCIsIkxvc3MiLCJsYWJlbFRlbnNvciIsImxpa2VsaWhvb2QiLCJuZWciLCJtdWwiLCJzdW0iLCJtZWFuIiwiVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJMb3NzTW9kZWwiLCJuZXRNb2RlbCIsIkZpdE1vZGVsIiwiT25lSG90UHJlZGljdE1vZGVsIiwiUHJlZGljdE1vZGVsIiwiRW5jb2RlTW9kZWwiLCJFbmNvZGUiLCJEZWNvZGVNb2RlbCIsIkRlY29kZSIsIk1vZGVsIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsImxvZ2dlciIsImdyb3VwQmVnaW4iLCJKU09OIiwic3RyaW5naWZ5IiwiZ3JvdXBFbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1D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LFNBQUwsQ0FBZUosY0FBZixDQUErQixFQUFyRCxDQUFYO0FBQ0g7O0FBQ0QsVUFBTTtBQUFFRjtBQUFGLFFBQVlsQyxHQUFsQjs7QUFDQSxRQUFHLENBQUNrQyxLQUFKLEVBQVU7QUFDTixZQUFNN0MsS0FBSyxDQUFFLHVCQUFzQmtELElBQUksQ0FBQ0MsU0FBTCxDQUFleEMsR0FBZixDQUFvQixFQUE1QyxDQUFYO0FBQ0g7O0FBQ0QsU0FBS2tDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtHLE1BQUwsQ0FBWUksUUFBWjtBQUNIOztBQXBFaUYsQ0FBdEY7O0FBdUVlbEIsdUZBQWYsRTs7Ozs7Ozs7Ozs7QUN2RUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9tb2RlbHMubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmNsYXNzIEJhc2VTdXBlcnZpc2VkTW9kZWwgZXh0ZW5kcyBUZW5zb3J7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2RlbE5hbWUgPSAnJztcbiAgICB9XG5cbiAgICBmaXQoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGxvc3MoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIHByZWRpY3QoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbiAgICBvbmVIb3RQcmVkaWN0KCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VTdXBlcnZpc2VkTW9kZWw7IiwiaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24nO1xuY2xhc3MgQ2F1c2FsTmV0TW9kZWxzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggVGVuc29yLCBbXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIGNsYXNzaWZpY2F0aW9uKG51bUNsYXNzKXtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uKG51bUNsYXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWw7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldE1vZGVscygpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0TW9kZWxzIH0gZnJvbSAnLi9jYXVzYWxOZXRTdXBlcnZpc2VkTW9kZWxzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmFzZVN1cGVydmlzZWRNb2RlbCB9IGZyb20gJy4vYmFzZVN1cGVydmlzZWRNb2RlbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24nO1xuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBCYXNlU3VwZXJ2aXNlZE1vZGVsIH0gZnJvbSAnLi9iYXNlU3VwZXJ2aXNlZE1vZGVsJztcblxuY2xhc3MgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiBleHRlbmRzIEJhc2VTdXBlcnZpc2VkTW9kZWx7XG4gICAgY29uc3RydWN0b3IobnVtQ2xhc3Mpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZihudW1DbGFzcyA+IDApe1xuICAgICAgICAgICAgdGhpcy5udW1DbGFzcyA9IG51bUNsYXNzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IG51bWNsYXNzLCBnZXQgJHtudW1DbGFzc31gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldCBOZXQobmV0KXtcbiAgICAgICAgbGV0IHsgUHJlZGljdG9yIH0gPSBuZXQ7XG4gICAgICAgIHRoaXMubmV0ID0geyBQcmVkaWN0b3IgfTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IEZpdCgpe1xuICAgICAgICByZXR1cm4gKGlucHV0VGVuc29yLCBuZXQ9dGhpcy5uZXQpPT57XG4gICAgICAgICAgICBsZXQgb3V0UHV0VGVuc29yID0gbmV0LlByZWRpY3RvcihpbnB1dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IG91dFB1dFRlbnNvci5zdWIob3V0UHV0VGVuc29yLmxvZ1N1bUV4cCgxLCB0cnVlKSk7XG4gICAgICAgICAgICByZXR1cm4gbG9nUHJvYjtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IFByZWRpY3QoKXtcbiAgICAgICAgY29uc3QgRml0ID0gdGhpcy5GaXQ7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IsIG5ldFJ1bm5lcik9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KGlucHV0VGVuc29yLCBuZXRSdW5uZXIpO1xuICAgICAgICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gbG9nUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgICAgICByZXR1cm4gcHJlZGljdGVkQ2xhc3M7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IE9uZUhvdFByZWRpY3QoKXtcbiAgICAgICAgY29uc3QgUHJlZGljdCA9IHRoaXMuUHJlZGljdDtcbiAgICAgICAgcmV0dXJuIChpbnB1dFRlbnNvciwgbmV0UnVubmVyKT0+e1xuICAgICAgICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gUHJlZGljdChpbnB1dFRlbnNvciwgbmV0UnVubmVyKTtcbiAgICAgICAgICAgIGxldCBvbmVIb3RQcmVkaWN0ID0gdGhpcy5ULm9uZUhvdChwcmVkaWN0ZWRDbGFzcywgdGhpcy5udW1DbGFzcyk7XG4gICAgICAgICAgICByZXR1cm4gb25lSG90UHJlZGljdDtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IExvc3MoKXtcbiAgICAgICAgY29uc3QgRml0ID0gdGhpcy5GaXQ7XG4gICAgICAgIHJldHVybiAoaW5wdXRUZW5zb3IsIGxhYmVsVGVuc29yLCBuZXRSdW5uZXIpPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChpbnB1dFRlbnNvciwgbmV0UnVubmVyKTtcbiAgICAgICAgICAgIGxldCBsaWtlbGlob29kID0gbG9nUHJvYi5uZWcoKS5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IGxvc3MgPSBsaWtlbGlob29kLnN1bSgxKS5tZWFuKCk7XG4gICAgICAgICAgICByZXR1cm4gbG9zcztcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uOyIsImV4cG9ydCB7IGNhdXNhbE5ldE1vZGVscywgXG4gICAgICAgICBCYXNlU3VwZXJ2aXNlZE1vZGVsLCBcbiAgICAgICAgIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL1N1cGVydmlzZWRNb2RlbHMvaW5kZXgnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RlbE1peGlucyB9IGZyb20gJy4vbW9kZWwubWl4aW5zJztcbiIsImNvbnN0IFVuU3VwZXJ2aXNlZE1vZGVsc01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIFxuXG4gICAgZ2V0IExvc3NNb2RlbCgpe1xuICAgICAgICBpZighdGhpcy5uZXRNb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TW9kZWwgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldE1vZGVsLkxvc3M7XG4gICAgfVxuXG4gICAgZ2V0IEZpdE1vZGVsKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldE1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuRml0O1xuICAgIH1cbiAgICBcbiAgICBnZXQgT25lSG90UHJlZGljdE1vZGVsKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldE1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuT25lSG90UHJlZGljdDtcbiAgICB9XG5cbiAgICBnZXQgUHJlZGljdE1vZGVsKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldE1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuUHJlZGljdDtcbiAgICB9XG5cbiAgICBnZXQgRW5jb2RlTW9kZWwoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldE1vZGVsIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRNb2RlbC5FbmNvZGU7XG4gICAgfVxuXG4gICAgZ2V0IERlY29kZU1vZGVsKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldE1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRNb2RlbCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TW9kZWwuRGVjb2RlO1xuICAgIH1cblxuICAgIFxuXG4gICAgc2V0IE1vZGVsKG1vZGVsKXsgICAgICAgIFxuICAgICAgICB0aGlzLm5ldE1vZGVsID0gbW9kZWw7XG4gICAgICAgIHRoaXMubmV0TW9kZWwuTmV0ID0gdGhpcy5OZXQ7XG4gICAgfVxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2dnZXIuZ3JvdXBCZWdpbignc2V0IE1vZGVsIGJ5IGNvbmZpZycpO1xuICAgICAgICBjb25zdCBOZXQgPSBwaXBlbGluZUNvbmZpZy5OZXQ7XG4gICAgICAgIFxuICAgICAgICBpZighTmV0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBOZXQgaXMgbm90IHNldCBpbiAke0pTT04uc3RyaW5naWZ5KHBpcGVsaW5lQ29uZmlnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IE1vZGVsIH0gPSBOZXQ7XG4gICAgICAgIGlmKCFNb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgTW9kZWwgaXMgbm90IHNldCBpbiAke0pTT04uc3RyaW5naWZ5KE5ldCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Nb2RlbCA9IE1vZGVsO1xuICAgICAgICB0aGlzLmxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVuU3VwZXJ2aXNlZE1vZGVsc01peGlucztcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=