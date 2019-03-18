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
class BaseSupervisedModel {
  constructor() {
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




class CausalNetModels extends causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Tensor"], [SingleLabelMixins, SequenceLabelsMixins, WordContextModelMixins]) {
  constructor() {
    super();
  }

  classification(numClass) {
    return new _singleLableClassification__WEBPACK_IMPORTED_MODULE_2__["default"](numClass);
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
    if (numClass > 0) {
      this.numClass = numClass;
    } else {
      throw Error(`expect numclass, get ${numClass}`);
    }
  }

  fit(pipelineOutTensor) {
    let logProb = pipelineOutTensor.sub(pipelineOutTensor.logSumExp(1, true));
    return logProb;
  }

  predict(pipelineOutTensor) {
    let logProb = Fit(pipelineOutTensor);
    let predictedClass = logProb.argMax(1);
    return predictedClass;
  }

  oneHotPredict(pipelineOutTensor) {
    let predictedClass = Predict(pipelineOutTensor);
    let oneHotPredict = this.T.oneHot(predictedClass, numClasses);
    return oneHotPredict;
  }

  loss(pipelineOutTensor, labelTensor) {
    let logProb = Fit(pipelineOutTensor);
    let likelihood = logProb.neg().mul(labelTensor);
    let loss = likelihood.mean();
    return loss;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SingleLabelClassification);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetModels, BaseSupervisedModel, SingleLabelClassification, SupervisedModelsMixins, UnSupervisedModelsMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SupervisedModels_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SupervisedModels/index */ "./src/SupervisedModels/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetModels", function() { return _SupervisedModels_index__WEBPACK_IMPORTED_MODULE_0__["causalNetModels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSupervisedModel", function() { return _SupervisedModels_index__WEBPACK_IMPORTED_MODULE_0__["BaseSupervisedModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleLabelClassification", function() { return _SupervisedModels_index__WEBPACK_IMPORTED_MODULE_0__["SingleLabelClassification"]; });

/* harmony import */ var _supervisedModels_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supervisedModels.mixins */ "./src/supervisedModels.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SupervisedModelsMixins", function() { return _supervisedModels_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _unSupervisedModels_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unSupervisedModels.mixins */ "./src/unSupervisedModels.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnSupervisedModelsMixins", function() { return _unSupervisedModels_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/supervisedModels.mixins.js":
/*!****************************************!*\
  !*** ./src/supervisedModels.mixins.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SupervisedModelsMixins = BasePipelineClass => class extends BasePipelineClass {
  get Loss() {
    if (!this.modelLoss) {
      throw Error('Loss is not set');
    }

    return this.modelLoss;
  }

  get Predict() {
    if (!this.modelPredict) {
      throw Error('Predict is not set');
    }

    return this.modelPredict;
  }

  get OneHotPredict() {
    if (!this.modelOneHotPredict) {
      throw Error(`OneHotPredict is not set`);
    }

    return this.modelOneHotPredict;
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

  set Predict(predict) {
    this.modelPredict = predict;
  }

  set Fit(fit) {
    this.modelFit = fit;
  }

  set OneHotPredict(oneHotPredict) {
    this.modelOneHotPredict = oneHotPredict;
  }

  setModelByConfig(netConfig) {
    const model = netConfig.Model;
    assert.beInstanceOf(model, BaseSupervisedModel);
    this.Loss = model.loss;
    this.Fit = model.fit;
    this.Predict = model.predict;
    this.OneHotPredict = model.oneHotPredict;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (SupervisedModelsMixins);

/***/ }),

/***/ "./src/unSupervisedModels.mixins.js":
/*!******************************************!*\
  !*** ./src/unSupervisedModels.mixins.js ***!
  \******************************************/
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

  get Fit() {
    if (!this.modelFit) {
      throw Error(`Fit is not set`);
    }

    return this.modelFit;
  }

  set Loss(loss) {
    this.modelLoss = loss;
  }

  set Predict(predict) {
    this.modelPredict = predict;
  }

  set Fit(fit) {
    this.modelFit = fit;
  }

  set OneHotPredict(oneHotPredict) {
    this.modelOneHotPredict = oneHotPredict;
  }

  setModelByConfig(netConfig) {
    const model = netConfig.Model;
    assert.beInstanceOf(model, BaseSupervisedModel);
    this.Loss = Loss;
    this.Fit = Fit;
    this.Predict = Predict;
    this.OneHotPredict = OneHotPredict;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9iYXNlU3VwZXJ2aXNlZE1vZGVsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL1N1cGVydmlzZWRNb2RlbHMvY2F1c2FsTmV0U3VwZXJ2aXNlZE1vZGVscy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9TdXBlcnZpc2VkTW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL1N1cGVydmlzZWRNb2RlbHMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9zdXBlcnZpc2VkTW9kZWxzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy91blN1cGVydmlzZWRNb2RlbHMubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQmFzZVN1cGVydmlzZWRNb2RlbCIsImNvbnN0cnVjdG9yIiwibW9kZWxOYW1lIiwiZml0IiwiRXJyb3IiLCJsb3NzIiwicHJlZGljdCIsIm9uZUhvdFByZWRpY3QiLCJDYXVzYWxOZXRNb2RlbHMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJUZW5zb3IiLCJTaW5nbGVMYWJlbE1peGlucyIsIlNlcXVlbmNlTGFiZWxzTWl4aW5zIiwiV29yZENvbnRleHRNb2RlbE1peGlucyIsImNsYXNzaWZpY2F0aW9uIiwibnVtQ2xhc3MiLCJzaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIiwiU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiIsInBpcGVsaW5lT3V0VGVuc29yIiwibG9nUHJvYiIsInN1YiIsImxvZ1N1bUV4cCIsIkZpdCIsInByZWRpY3RlZENsYXNzIiwiYXJnTWF4IiwiUHJlZGljdCIsIlQiLCJvbmVIb3QiLCJudW1DbGFzc2VzIiwibGFiZWxUZW5zb3IiLCJsaWtlbGlob29kIiwibmVnIiwibXVsIiwibWVhbiIsIlN1cGVydmlzZWRNb2RlbHNNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIkxvc3MiLCJtb2RlbExvc3MiLCJtb2RlbFByZWRpY3QiLCJPbmVIb3RQcmVkaWN0IiwibW9kZWxPbmVIb3RQcmVkaWN0IiwibW9kZWxGaXQiLCJzZXRNb2RlbEJ5Q29uZmlnIiwibmV0Q29uZmlnIiwibW9kZWwiLCJNb2RlbCIsImFzc2VydCIsImJlSW5zdGFuY2VPZiIsIlVuU3VwZXJ2aXNlZE1vZGVsc01peGlucyIsIkRlY29kZSIsIm1vZGVsRGVjb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUtpQyxTQUFMLEdBQWlCakMsSUFBakI7QUFDSDs7QUFFRCxNQUFJcUIsT0FBSixDQUFZcEIsT0FBWixFQUFvQjtBQUNoQixTQUFLaUMsWUFBTCxHQUFvQmpDLE9BQXBCO0FBQ0g7O0FBRUQsTUFBSWlCLEdBQUosQ0FBUXBCLEdBQVIsRUFBWTtBQUNSLFNBQUt1QyxRQUFMLEdBQWdCdkMsR0FBaEI7QUFDSDs7QUFFRCxNQUFJcUMsYUFBSixDQUFrQmpDLGFBQWxCLEVBQWdDO0FBQzVCLFNBQUtrQyxrQkFBTCxHQUEwQmxDLGFBQTFCO0FBQ0g7O0FBRURvQyxrQkFBZ0IsQ0FBQ0MsU0FBRCxFQUFXO0FBQ3ZCLFVBQU1DLEtBQUssR0FBR0QsU0FBUyxDQUFDRSxLQUF4QjtBQUNBQyxVQUFNLENBQUNDLFlBQVAsQ0FBb0JILEtBQXBCLEVBQTJCN0MsbUJBQTNCO0FBQ0EsU0FBS3FDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtkLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtHLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtjLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0g7O0FBOUNpRixDQUF0Rjs7QUFpRGVTLHVGQUFmLEU7Ozs7Ozs7Ozs7O0FDakRBLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbW9kZWxzLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgQmFzZVN1cGVydmlzZWRNb2RlbHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLm1vZGVsTmFtZSA9ICcnO1xuICAgIH1cbiAgICBmaXQoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGxvc3MoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIHByZWRpY3QoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbiAgICBvbmVIb3RQcmVkaWN0KCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VTdXBlcnZpc2VkTW9kZWw7IiwiaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24nO1xuY2xhc3MgQ2F1c2FsTmV0TW9kZWxzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggVGVuc29yLCBcbiAgICBbIFNpbmdsZUxhYmVsTWl4aW5zLCBcbiAgICAgIFNlcXVlbmNlTGFiZWxzTWl4aW5zLFxuICAgICAgV29yZENvbnRleHRNb2RlbE1peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBjbGFzc2lmaWNhdGlvbihudW1DbGFzcyl7XG4gICAgICAgIHJldHVybiBuZXcgc2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbihudW1DbGFzcyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldE1vZGVscygpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0TW9kZWxzIH0gZnJvbSAnLi9jYXVzYWxOZXRTdXBlcnZpc2VkTW9kZWxzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmFzZVN1cGVydmlzZWRNb2RlbCB9IGZyb20gJy4vYmFzZVN1cGVydmlzZWRNb2RlbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gfSBmcm9tICcuL3NpbmdsZUxhYmxlQ2xhc3NpZmljYXRpb24nO1xuIiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBCYXNlU3VwZXJ2aXNlZE1vZGVsIH0gZnJvbSAnLi9iYXNlU3VwZXJ2aXNlZE1vZGVsJztcbmNsYXNzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gZXh0ZW5kcyBCYXNlU3VwZXJ2aXNlZE1vZGVse1xuICAgIGNvbnN0cnVjdG9yKG51bUNsYXNzKXtcbiAgICAgICAgaWYobnVtQ2xhc3MgPiAwKXtcbiAgICAgICAgICAgIHRoaXMubnVtQ2xhc3MgPSBudW1DbGFzcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBudW1jbGFzcywgZ2V0ICR7bnVtQ2xhc3N9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZml0KHBpcGVsaW5lT3V0VGVuc29yKXtcbiAgICAgICAgbGV0IGxvZ1Byb2IgPSBwaXBlbGluZU91dFRlbnNvci5zdWIocGlwZWxpbmVPdXRUZW5zb3IubG9nU3VtRXhwKDEsIHRydWUpKTtcbiAgICAgICAgcmV0dXJuIGxvZ1Byb2I7XG4gICAgfVxuICAgIFxuICAgIHByZWRpY3QocGlwZWxpbmVPdXRUZW5zb3Ipe1xuICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICByZXR1cm4gcHJlZGljdGVkQ2xhc3M7XG4gICAgfVxuICAgIG9uZUhvdFByZWRpY3QocGlwZWxpbmVPdXRUZW5zb3Ipe1xuICAgICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBQcmVkaWN0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgbGV0IG9uZUhvdFByZWRpY3QgPSB0aGlzLlQub25lSG90KHByZWRpY3RlZENsYXNzLCBudW1DbGFzc2VzKTtcbiAgICAgICAgcmV0dXJuIG9uZUhvdFByZWRpY3Q7XG4gICAgfVxuICAgIGxvc3MocGlwZWxpbmVPdXRUZW5zb3IsIGxhYmVsVGVuc29yKXtcbiAgICAgICAgbGV0IGxvZ1Byb2IgPSBGaXQocGlwZWxpbmVPdXRUZW5zb3IpO1xuICAgICAgICBsZXQgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubmVnKCkubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgICAgbGV0IGxvc3MgPSBsaWtlbGlob29kLm1lYW4oKTtcbiAgICAgICAgcmV0dXJuIGxvc3M7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbjsiLCJleHBvcnQgeyBjYXVzYWxOZXRNb2RlbHMsIFxuICAgICAgICAgQmFzZVN1cGVydmlzZWRNb2RlbCwgXG4gICAgICAgICBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIH0gZnJvbSAnLi9TdXBlcnZpc2VkTW9kZWxzL2luZGV4JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3VwZXJ2aXNlZE1vZGVsc01peGlucyB9IGZyb20gJy4vc3VwZXJ2aXNlZE1vZGVscy5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnMgfSBmcm9tICcuL3VuU3VwZXJ2aXNlZE1vZGVscy5taXhpbnMnO1xuIiwiY29uc3QgU3VwZXJ2aXNlZE1vZGVsc01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIFxuICAgIGdldCBMb3NzKCl7XG4gICAgICAgIGlmKCF0aGlzLm1vZGVsTG9zcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTG9zcyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxMb3NzO1xuICAgIH1cbiAgICBcbiAgICBnZXQgUHJlZGljdCgpe1xuICAgICAgICBpZighdGhpcy5tb2RlbFByZWRpY3Qpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1ByZWRpY3QgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsUHJlZGljdDtcbiAgICB9XG5cbiAgICBnZXQgT25lSG90UHJlZGljdCgpe1xuICAgICAgICBpZighdGhpcy5tb2RlbE9uZUhvdFByZWRpY3Qpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE9uZUhvdFByZWRpY3QgaXMgbm90IHNldGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsT25lSG90UHJlZGljdDtcbiAgICB9XG5cbiAgICBnZXQgRml0KCl7XG4gICAgICAgIGlmKCF0aGlzLm1vZGVsRml0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBGaXQgaXMgbm90IHNldGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsRml0O1xuICAgIH1cblxuICAgIHNldCBMb3NzKGxvc3Mpe1xuICAgICAgICB0aGlzLm1vZGVsTG9zcyA9IGxvc3M7XG4gICAgfVxuICAgIFxuICAgIHNldCBQcmVkaWN0KHByZWRpY3Qpe1xuICAgICAgICB0aGlzLm1vZGVsUHJlZGljdCA9IHByZWRpY3Q7XG4gICAgfVxuXG4gICAgc2V0IEZpdChmaXQpe1xuICAgICAgICB0aGlzLm1vZGVsRml0ID0gZml0O1xuICAgIH1cblxuICAgIHNldCBPbmVIb3RQcmVkaWN0KG9uZUhvdFByZWRpY3Qpe1xuICAgICAgICB0aGlzLm1vZGVsT25lSG90UHJlZGljdCA9IG9uZUhvdFByZWRpY3Q7XG4gICAgfVxuXG4gICAgc2V0TW9kZWxCeUNvbmZpZyhuZXRDb25maWcpe1xuICAgICAgICBjb25zdCBtb2RlbCA9IG5ldENvbmZpZy5Nb2RlbDtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihtb2RlbCwgQmFzZVN1cGVydmlzZWRNb2RlbCk7XG4gICAgICAgIHRoaXMuTG9zcyA9IG1vZGVsLmxvc3M7XG4gICAgICAgIHRoaXMuRml0ID0gbW9kZWwuZml0O1xuICAgICAgICB0aGlzLlByZWRpY3QgPSBtb2RlbC5wcmVkaWN0O1xuICAgICAgICB0aGlzLk9uZUhvdFByZWRpY3QgPSBtb2RlbC5vbmVIb3RQcmVkaWN0O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1cGVydmlzZWRNb2RlbHNNaXhpbnM7XG4iLCJjb25zdCBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBcbiAgICBnZXQgTG9zcygpe1xuICAgICAgICBpZighdGhpcy5tb2RlbExvc3Mpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xvc3MgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsTG9zcztcbiAgICB9XG4gICAgXG4gICAgZ2V0IERlY29kZSgpe1xuICAgICAgICBpZighdGhpcy5tb2RlbERlY29kZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignUHJlZGljdCBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxEZWNvZGU7XG4gICAgfVxuXG4gICAgZ2V0IEZpdCgpe1xuICAgICAgICBpZighdGhpcy5tb2RlbEZpdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgRml0IGlzIG5vdCBzZXRgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbEZpdDtcbiAgICB9XG5cbiAgICBzZXQgTG9zcyhsb3NzKXtcbiAgICAgICAgdGhpcy5tb2RlbExvc3MgPSBsb3NzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgUHJlZGljdChwcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbFByZWRpY3QgPSBwcmVkaWN0O1xuICAgIH1cblxuICAgIHNldCBGaXQoZml0KXtcbiAgICAgICAgdGhpcy5tb2RlbEZpdCA9IGZpdDtcbiAgICB9XG5cbiAgICBzZXQgT25lSG90UHJlZGljdChvbmVIb3RQcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbE9uZUhvdFByZWRpY3QgPSBvbmVIb3RQcmVkaWN0O1xuICAgIH1cblxuICAgIHNldE1vZGVsQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBuZXRDb25maWcuTW9kZWw7XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YobW9kZWwsIEJhc2VTdXBlcnZpc2VkTW9kZWwpO1xuICAgICAgICB0aGlzLkxvc3MgPSBMb3NzO1xuICAgICAgICB0aGlzLkZpdCA9IEZpdDtcbiAgICAgICAgdGhpcy5QcmVkaWN0ID0gUHJlZGljdDtcbiAgICAgICAgdGhpcy5PbmVIb3RQcmVkaWN0ID0gT25lSG90UHJlZGljdDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9