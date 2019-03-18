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
    super();

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
    let logProb = this.fit(pipelineOutTensor);
    let predictedClass = logProb.argMax(1);
    return predictedClass;
  }

  oneHotPredict(pipelineOutTensor) {
    let predictedClass = this.predict(pipelineOutTensor);
    let oneHotPredict = this.T.oneHot(predictedClass, this.numClass);
    return oneHotPredict;
  }

  loss(pipelineOutTensor, labelTensor) {
    let logProb = this.fit(pipelineOutTensor);
    let likelihood = logProb.neg().mul(labelTensor);
    let loss = likelihood.sum(1).mean();
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

  set Decode(decode) {
    this.modelDecode = decode;
  }

  set Fit(fit) {
    this.modelDecode = fit;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9iYXNlU3VwZXJ2aXNlZE1vZGVsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL1N1cGVydmlzZWRNb2RlbHMvY2F1c2FsTmV0U3VwZXJ2aXNlZE1vZGVscy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9TdXBlcnZpc2VkTW9kZWxzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL1N1cGVydmlzZWRNb2RlbHMvc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9zdXBlcnZpc2VkTW9kZWxzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy91blN1cGVydmlzZWRNb2RlbHMubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQmFzZVN1cGVydmlzZWRNb2RlbCIsIlRlbnNvciIsImNvbnN0cnVjdG9yIiwibW9kZWxOYW1lIiwiZml0IiwiRXJyb3IiLCJsb3NzIiwicHJlZGljdCIsIm9uZUhvdFByZWRpY3QiLCJDYXVzYWxOZXRNb2RlbHMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJjbGFzc2lmaWNhdGlvbiIsIm51bUNsYXNzIiwiU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiIsInBpcGVsaW5lT3V0VGVuc29yIiwibG9nUHJvYiIsInN1YiIsImxvZ1N1bUV4cCIsInByZWRpY3RlZENsYXNzIiwiYXJnTWF4IiwiVCIsIm9uZUhvdCIsImxhYmVsVGVuc29yIiwibGlrZWxpaG9vZCIsIm5lZyIsIm11bCIsInN1bSIsIm1lYW4iLCJTdXBlcnZpc2VkTW9kZWxzTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJMb3NzIiwibW9kZWxMb3NzIiwiUHJlZGljdCIsIm1vZGVsUHJlZGljdCIsIk9uZUhvdFByZWRpY3QiLCJtb2RlbE9uZUhvdFByZWRpY3QiLCJGaXQiLCJtb2RlbEZpdCIsInNldE1vZGVsQnlDb25maWciLCJuZXRDb25maWciLCJtb2RlbCIsIk1vZGVsIiwiYXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zIiwiRGVjb2RlIiwibW9kZWxEZWNvZGUiLCJkZWNvZGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBOztBQUNBLE1BQU1BLG1CQUFOLFNBQWtDQyxzREFBbEMsQ0FBd0M7QUFDcENDLGFBQVcsR0FBRTtBQUNUO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNIOztBQUNEQyxLQUFHLEdBQUU7QUFDRCxVQUFNQyxLQUFLLENBQUMsb0JBQUQsQ0FBWDtBQUNIOztBQUVEQyxNQUFJLEdBQUU7QUFDRixVQUFNRCxLQUFLLENBQUMsb0JBQUQsQ0FBWDtBQUNIOztBQUVERSxTQUFPLEdBQUU7QUFDTCxVQUFNRixLQUFLLENBQUMsb0JBQUQsQ0FBWDtBQUNIOztBQUNERyxlQUFhLEdBQUU7QUFDWCxVQUFNSCxLQUFLLENBQUMsb0JBQUQsQ0FBWDtBQUNIOztBQWxCbUM7O0FBcUJ6Qkwsa0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNUyxlQUFOLFNBQThCQyx5REFBUSxDQUFDQyxPQUFULENBQWtCVixzREFBbEIsRUFBMEIsRUFBMUIsQ0FBOUIsQ0FBNEQ7QUFDeERDLGFBQVcsR0FBRTtBQUNUO0FBQ0g7O0FBQ0RVLGdCQUFjLENBQUNDLFFBQUQsRUFBVTtBQUNwQixXQUFPLElBQUlDLGtFQUFKLENBQThCRCxRQUE5QixDQUFQO0FBQ0g7O0FBTnVEOztBQVE3QyxtRUFBSUosZUFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTs7QUFFQSxNQUFNSyx5QkFBTixTQUF3Q2QsNERBQXhDLENBQTJEO0FBQ3ZERSxhQUFXLENBQUNXLFFBQUQsRUFBVTtBQUNqQjs7QUFDQSxRQUFHQSxRQUFRLEdBQUcsQ0FBZCxFQUFnQjtBQUNaLFdBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0gsS0FGRCxNQUdJO0FBQ0EsWUFBTVIsS0FBSyxDQUFFLHdCQUF1QlEsUUFBUyxFQUFsQyxDQUFYO0FBQ0g7QUFDSjs7QUFFRFQsS0FBRyxDQUFDVyxpQkFBRCxFQUFtQjtBQUNsQixRQUFJQyxPQUFPLEdBQUdELGlCQUFpQixDQUFDRSxHQUFsQixDQUFzQkYsaUJBQWlCLENBQUNHLFNBQWxCLENBQTRCLENBQTVCLEVBQStCLElBQS9CLENBQXRCLENBQWQ7QUFDQSxXQUFPRixPQUFQO0FBQ0g7O0FBRURULFNBQU8sQ0FBQ1EsaUJBQUQsRUFBbUI7QUFDdEIsUUFBSUMsT0FBTyxHQUFHLEtBQUtaLEdBQUwsQ0FBU1csaUJBQVQsQ0FBZDtBQUNBLFFBQUlJLGNBQWMsR0FBR0gsT0FBTyxDQUFDSSxNQUFSLENBQWUsQ0FBZixDQUFyQjtBQUNBLFdBQU9ELGNBQVA7QUFDSDs7QUFDRFgsZUFBYSxDQUFDTyxpQkFBRCxFQUFtQjtBQUM1QixRQUFJSSxjQUFjLEdBQUcsS0FBS1osT0FBTCxDQUFhUSxpQkFBYixDQUFyQjtBQUNBLFFBQUlQLGFBQWEsR0FBRyxLQUFLYSxDQUFMLENBQU9DLE1BQVAsQ0FBY0gsY0FBZCxFQUE4QixLQUFLTixRQUFuQyxDQUFwQjtBQUNBLFdBQU9MLGFBQVA7QUFDSDs7QUFDREYsTUFBSSxDQUFDUyxpQkFBRCxFQUFvQlEsV0FBcEIsRUFBZ0M7QUFDaEMsUUFBSVAsT0FBTyxHQUFHLEtBQUtaLEdBQUwsQ0FBU1csaUJBQVQsQ0FBZDtBQUNBLFFBQUlTLFVBQVUsR0FBR1IsT0FBTyxDQUFDUyxHQUFSLEdBQWNDLEdBQWQsQ0FBa0JILFdBQWxCLENBQWpCO0FBQ0EsUUFBSWpCLElBQUksR0FBR2tCLFVBQVUsQ0FBQ0csR0FBWCxDQUFlLENBQWYsRUFBa0JDLElBQWxCLEVBQVg7QUFDQSxXQUFPdEIsSUFBUDtBQUNIOztBQS9Cc0Q7O0FBaUM1Q1Esd0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQSxNQUFNZSxzQkFBc0IsR0FBSUMsaUJBQUQsSUFBc0IsY0FBY0EsaUJBQWQsQ0FBK0I7QUFFaEYsTUFBSUMsSUFBSixHQUFVO0FBQ04sUUFBRyxDQUFDLEtBQUtDLFNBQVQsRUFBbUI7QUFDZixZQUFNM0IsS0FBSyxDQUFDLGlCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUsyQixTQUFaO0FBQ0g7O0FBRUQsTUFBSUMsT0FBSixHQUFhO0FBQ1QsUUFBRyxDQUFDLEtBQUtDLFlBQVQsRUFBc0I7QUFDbEIsWUFBTTdCLEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLNkIsWUFBWjtBQUNIOztBQUVELE1BQUlDLGFBQUosR0FBbUI7QUFDZixRQUFHLENBQUMsS0FBS0Msa0JBQVQsRUFBNEI7QUFDeEIsWUFBTS9CLEtBQUssQ0FBRSwwQkFBRixDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLK0Isa0JBQVo7QUFDSDs7QUFFRCxNQUFJQyxHQUFKLEdBQVM7QUFDTCxRQUFHLENBQUMsS0FBS0MsUUFBVCxFQUFrQjtBQUNkLFlBQU1qQyxLQUFLLENBQUUsZ0JBQUYsQ0FBWDtBQUNIOztBQUNELFdBQU8sS0FBS2lDLFFBQVo7QUFDSDs7QUFFRCxNQUFJUCxJQUFKLENBQVN6QixJQUFULEVBQWM7QUFDVixTQUFLMEIsU0FBTCxHQUFpQjFCLElBQWpCO0FBQ0g7O0FBRUQsTUFBSTJCLE9BQUosQ0FBWTFCLE9BQVosRUFBb0I7QUFDaEIsU0FBSzJCLFlBQUwsR0FBb0IzQixPQUFwQjtBQUNIOztBQUVELE1BQUk4QixHQUFKLENBQVFqQyxHQUFSLEVBQVk7QUFDUixTQUFLa0MsUUFBTCxHQUFnQmxDLEdBQWhCO0FBQ0g7O0FBRUQsTUFBSStCLGFBQUosQ0FBa0IzQixhQUFsQixFQUFnQztBQUM1QixTQUFLNEIsa0JBQUwsR0FBMEI1QixhQUExQjtBQUNIOztBQUVEK0Isa0JBQWdCLENBQUNDLFNBQUQsRUFBVztBQUN2QixVQUFNQyxLQUFLLEdBQUdELFNBQVMsQ0FBQ0UsS0FBeEI7QUFDQUMsVUFBTSxDQUFDQyxZQUFQLENBQW9CSCxLQUFwQixFQUEyQnpDLG1CQUEzQjtBQUNBLFNBQUsrQixJQUFMLEdBQVlVLEtBQUssQ0FBQ25DLElBQWxCO0FBQ0EsU0FBSytCLEdBQUwsR0FBV0ksS0FBSyxDQUFDckMsR0FBakI7QUFDQSxTQUFLNkIsT0FBTCxHQUFlUSxLQUFLLENBQUNsQyxPQUFyQjtBQUNBLFNBQUs0QixhQUFMLEdBQXFCTSxLQUFLLENBQUNqQyxhQUEzQjtBQUNIOztBQXJEK0UsQ0FBcEY7O0FBd0RlcUIscUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUEsTUFBTWdCLHdCQUF3QixHQUFJZixpQkFBRCxJQUFzQixjQUFjQSxpQkFBZCxDQUErQjtBQUVsRixNQUFJQyxJQUFKLEdBQVU7QUFDTixRQUFHLENBQUMsS0FBS0MsU0FBVCxFQUFtQjtBQUNmLFlBQU0zQixLQUFLLENBQUMsaUJBQUQsQ0FBWDtBQUNIOztBQUNELFdBQU8sS0FBSzJCLFNBQVo7QUFDSDs7QUFFRCxNQUFJYyxNQUFKLEdBQVk7QUFDUixRQUFHLENBQUMsS0FBS0MsV0FBVCxFQUFxQjtBQUNqQixZQUFNMUMsS0FBSyxDQUFDLG9CQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUswQyxXQUFaO0FBQ0g7O0FBRUQsTUFBSVYsR0FBSixHQUFTO0FBQ0wsUUFBRyxDQUFDLEtBQUtDLFFBQVQsRUFBa0I7QUFDZCxZQUFNakMsS0FBSyxDQUFFLGdCQUFGLENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUtpQyxRQUFaO0FBQ0g7O0FBRUQsTUFBSVAsSUFBSixDQUFTekIsSUFBVCxFQUFjO0FBQ1YsU0FBSzBCLFNBQUwsR0FBaUIxQixJQUFqQjtBQUNIOztBQUVELE1BQUl3QyxNQUFKLENBQVdFLE1BQVgsRUFBa0I7QUFDZCxTQUFLRCxXQUFMLEdBQW1CQyxNQUFuQjtBQUNIOztBQUVELE1BQUlYLEdBQUosQ0FBUWpDLEdBQVIsRUFBWTtBQUNSLFNBQUsyQyxXQUFMLEdBQW1CM0MsR0FBbkI7QUFDSDs7QUFFRCxNQUFJK0IsYUFBSixDQUFrQjNCLGFBQWxCLEVBQWdDO0FBQzVCLFNBQUs0QixrQkFBTCxHQUEwQjVCLGFBQTFCO0FBQ0g7O0FBRUQrQixrQkFBZ0IsQ0FBQ0MsU0FBRCxFQUFXO0FBQ3ZCLFVBQU1DLEtBQUssR0FBR0QsU0FBUyxDQUFDRSxLQUF4QjtBQUNBQyxVQUFNLENBQUNDLFlBQVAsQ0FBb0JILEtBQXBCLEVBQTJCekMsbUJBQTNCO0FBQ0EsU0FBSytCLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtNLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtKLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtFLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0g7O0FBOUNpRixDQUF0Rjs7QUFpRGVVLHVGQUFmLEU7Ozs7Ozs7Ozs7O0FDakRBLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbW9kZWxzLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5jbGFzcyBCYXNlU3VwZXJ2aXNlZE1vZGVsIGV4dGVuZHMgVGVuc29ye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kZWxOYW1lID0gJyc7XG4gICAgfVxuICAgIGZpdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbG9zcygpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcHJlZGljdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIG9uZUhvdFByZWRpY3QoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVN1cGVydmlzZWRNb2RlbDsiLCJpbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiB9IGZyb20gJy4vc2luZ2xlTGFibGVDbGFzc2lmaWNhdGlvbic7XG5jbGFzcyBDYXVzYWxOZXRNb2RlbHMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKCBUZW5zb3IsIFtdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgY2xhc3NpZmljYXRpb24obnVtQ2xhc3Mpe1xuICAgICAgICByZXR1cm4gbmV3IFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24obnVtQ2xhc3MpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRNb2RlbHMoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldE1vZGVscyB9IGZyb20gJy4vY2F1c2FsTmV0U3VwZXJ2aXNlZE1vZGVscyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2VTdXBlcnZpc2VkTW9kZWwgfSBmcm9tICcuL2Jhc2VTdXBlcnZpc2VkTW9kZWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaW5nbGVMYWJlbENsYXNzaWZpY2F0aW9uIH0gZnJvbSAnLi9zaW5nbGVMYWJsZUNsYXNzaWZpY2F0aW9uJztcbiIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZVN1cGVydmlzZWRNb2RlbCB9IGZyb20gJy4vYmFzZVN1cGVydmlzZWRNb2RlbCc7XG5cbmNsYXNzIFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb24gZXh0ZW5kcyBCYXNlU3VwZXJ2aXNlZE1vZGVse1xuICAgIGNvbnN0cnVjdG9yKG51bUNsYXNzKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgaWYobnVtQ2xhc3MgPiAwKXtcbiAgICAgICAgICAgIHRoaXMubnVtQ2xhc3MgPSBudW1DbGFzcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBudW1jbGFzcywgZ2V0ICR7bnVtQ2xhc3N9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZml0KHBpcGVsaW5lT3V0VGVuc29yKXtcbiAgICAgICAgbGV0IGxvZ1Byb2IgPSBwaXBlbGluZU91dFRlbnNvci5zdWIocGlwZWxpbmVPdXRUZW5zb3IubG9nU3VtRXhwKDEsIHRydWUpKTtcbiAgICAgICAgcmV0dXJuIGxvZ1Byb2I7XG4gICAgfVxuICAgIFxuICAgIHByZWRpY3QocGlwZWxpbmVPdXRUZW5zb3Ipe1xuICAgICAgICBsZXQgbG9nUHJvYiA9IHRoaXMuZml0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gbG9nUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgIHJldHVybiBwcmVkaWN0ZWRDbGFzcztcbiAgICB9XG4gICAgb25lSG90UHJlZGljdChwaXBlbGluZU91dFRlbnNvcil7XG4gICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IHRoaXMucHJlZGljdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgIGxldCBvbmVIb3RQcmVkaWN0ID0gdGhpcy5ULm9uZUhvdChwcmVkaWN0ZWRDbGFzcywgdGhpcy5udW1DbGFzcyk7XG4gICAgICAgIHJldHVybiBvbmVIb3RQcmVkaWN0O1xuICAgIH1cbiAgICBsb3NzKHBpcGVsaW5lT3V0VGVuc29yLCBsYWJlbFRlbnNvcil7XG4gICAgICAgIGxldCBsb2dQcm9iID0gdGhpcy5maXQocGlwZWxpbmVPdXRUZW5zb3IpO1xuICAgICAgICBsZXQgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubmVnKCkubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgICAgbGV0IGxvc3MgPSBsaWtlbGlob29kLnN1bSgxKS5tZWFuKCk7XG4gICAgICAgIHJldHVybiBsb3NzO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUxhYmVsQ2xhc3NpZmljYXRpb247IiwiZXhwb3J0IHsgY2F1c2FsTmV0TW9kZWxzLCBcbiAgICAgICAgIEJhc2VTdXBlcnZpc2VkTW9kZWwsIFxuICAgICAgICAgU2luZ2xlTGFiZWxDbGFzc2lmaWNhdGlvbiB9IGZyb20gJy4vU3VwZXJ2aXNlZE1vZGVscy9pbmRleCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN1cGVydmlzZWRNb2RlbHNNaXhpbnMgfSBmcm9tICcuL3N1cGVydmlzZWRNb2RlbHMubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zIH0gZnJvbSAnLi91blN1cGVydmlzZWRNb2RlbHMubWl4aW5zJztcbiIsImNvbnN0IFN1cGVydmlzZWRNb2RlbHNNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBcbiAgICBnZXQgTG9zcygpe1xuICAgICAgICBpZighdGhpcy5tb2RlbExvc3Mpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xvc3MgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsTG9zcztcbiAgICB9XG4gICAgXG4gICAgZ2V0IFByZWRpY3QoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxQcmVkaWN0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdQcmVkaWN0IGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbFByZWRpY3Q7XG4gICAgfVxuXG4gICAgZ2V0IE9uZUhvdFByZWRpY3QoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxPbmVIb3RQcmVkaWN0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBPbmVIb3RQcmVkaWN0IGlzIG5vdCBzZXRgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbE9uZUhvdFByZWRpY3Q7XG4gICAgfVxuXG4gICAgZ2V0IEZpdCgpe1xuICAgICAgICBpZighdGhpcy5tb2RlbEZpdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgRml0IGlzIG5vdCBzZXRgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbEZpdDtcbiAgICB9XG5cbiAgICBzZXQgTG9zcyhsb3NzKXtcbiAgICAgICAgdGhpcy5tb2RlbExvc3MgPSBsb3NzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgUHJlZGljdChwcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbFByZWRpY3QgPSBwcmVkaWN0O1xuICAgIH1cblxuICAgIHNldCBGaXQoZml0KXtcbiAgICAgICAgdGhpcy5tb2RlbEZpdCA9IGZpdDtcbiAgICB9XG5cbiAgICBzZXQgT25lSG90UHJlZGljdChvbmVIb3RQcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbE9uZUhvdFByZWRpY3QgPSBvbmVIb3RQcmVkaWN0O1xuICAgIH1cblxuICAgIHNldE1vZGVsQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBuZXRDb25maWcuTW9kZWw7XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YobW9kZWwsIEJhc2VTdXBlcnZpc2VkTW9kZWwpO1xuICAgICAgICB0aGlzLkxvc3MgPSBtb2RlbC5sb3NzO1xuICAgICAgICB0aGlzLkZpdCA9IG1vZGVsLmZpdDtcbiAgICAgICAgdGhpcy5QcmVkaWN0ID0gbW9kZWwucHJlZGljdDtcbiAgICAgICAgdGhpcy5PbmVIb3RQcmVkaWN0ID0gbW9kZWwub25lSG90UHJlZGljdDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdXBlcnZpc2VkTW9kZWxzTWl4aW5zO1xuIiwiY29uc3QgVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgXG4gICAgZ2V0IExvc3MoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxMb3NzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdMb3NzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbExvc3M7XG4gICAgfVxuICAgIFxuICAgIGdldCBEZWNvZGUoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxEZWNvZGUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1ByZWRpY3QgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsRGVjb2RlO1xuICAgIH1cblxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxGaXQpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYEZpdCBpcyBub3Qgc2V0YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxGaXQ7XG4gICAgfVxuXG4gICAgc2V0IExvc3MobG9zcyl7XG4gICAgICAgIHRoaXMubW9kZWxMb3NzID0gbG9zcztcbiAgICB9XG4gICAgXG4gICAgc2V0IERlY29kZShkZWNvZGUpe1xuICAgICAgICB0aGlzLm1vZGVsRGVjb2RlID0gZGVjb2RlO1xuICAgIH1cblxuICAgIHNldCBGaXQoZml0KXtcbiAgICAgICAgdGhpcy5tb2RlbERlY29kZSA9IGZpdDtcbiAgICB9XG5cbiAgICBzZXQgT25lSG90UHJlZGljdChvbmVIb3RQcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbE9uZUhvdFByZWRpY3QgPSBvbmVIb3RQcmVkaWN0O1xuICAgIH1cblxuICAgIHNldE1vZGVsQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBuZXRDb25maWcuTW9kZWw7XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YobW9kZWwsIEJhc2VTdXBlcnZpc2VkTW9kZWwpO1xuICAgICAgICB0aGlzLkxvc3MgPSBMb3NzO1xuICAgICAgICB0aGlzLkZpdCA9IEZpdDtcbiAgICAgICAgdGhpcy5QcmVkaWN0ID0gUHJlZGljdDtcbiAgICAgICAgdGhpcy5PbmVIb3RQcmVkaWN0ID0gT25lSG90UHJlZGljdDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9