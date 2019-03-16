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

/***/ "./src/SupervisedModels/index.js":
/*!***************************************!*\
  !*** ./src/SupervisedModels/index.js ***!
  \***************************************/
/*! exports provided: SingleLabelMixins, SequenceLabelsMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _singleLabel_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleLabel.mixins */ "./src/SupervisedModels/singleLabel.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleLabelMixins", function() { return _singleLabel_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _sequenceLabels_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sequenceLabels.mixins */ "./src/SupervisedModels/sequenceLabels.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SequenceLabelsMixins", function() { return _sequenceLabels_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/SupervisedModels/sequenceLabels.mixins.js":
/*!*******************************************************!*\
  !*** ./src/SupervisedModels/sequenceLabels.mixins.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SequenceLabelsMixins = basePipelineClass => class extends basePipelineClass {
  Decoder() {
    throw Error('implement required');
  }

  CTCDecode() {
    throw Error('implement required');
  }

};

/* harmony default export */ __webpack_exports__["default"] = (SequenceLabelsMixins);

/***/ }),

/***/ "./src/SupervisedModels/singleLabel.mixins.js":
/*!****************************************************!*\
  !*** ./src/SupervisedModels/singleLabel.mixins.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SingleLabelMixins = basePipelineClass => class extends basePipelineClass {
  classification() {
    const Fit = pipelineOutTensor => {
      let logProb = pipelineOutTensor.sub(pipelineOutTensor.logSumExp(1, true));
      return logProb;
    };

    const Predict = pipelineOutTensor => {
      let logProb = Fit(pipelineOutTensor);
      let predictedClass = logProb.argMax(1);
      return predictedClass;
    };

    const OneHotPredict = (pipelineOutTensor, numClasses) => {
      let predictedClass = Predict(pipelineOutTensor);
      let oneHotPredict = this.T.oneHot(predictedClass, numClasses);
      return oneHotPredict;
    };

    const Loss = (pipelineOutTensor, labelTensor) => {
      let logProb = Fit(pipelineOutTensor);
      let likelihood = logProb.neg().mul(labelTensor);
      let loss = likelihood.mean();
      return loss;
    };

    return {
      Predict,
      OneHotPredict,
      Loss,
      Fit
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (SingleLabelMixins);

/***/ }),

/***/ "./src/UnSupervisedModels/index.js":
/*!*****************************************!*\
  !*** ./src/UnSupervisedModels/index.js ***!
  \*****************************************/
/*! exports provided: WordContextModelMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordContextsModels_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordContextsModels.mixins */ "./src/UnSupervisedModels/wordContextsModels.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordContextModelMixins", function() { return _wordContextsModels_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/UnSupervisedModels/wordContextsModels.mixins.js":
/*!*************************************************************!*\
  !*** ./src/UnSupervisedModels/wordContextsModels.mixins.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const WordContextModelMixins = basePipelineClass => class extends basePipelineClass {
  skipGram() {
    // TODO: come up with better name later
    //implicit matrix factorization
    const Fit = pipelineOutTensor => {
      let logProb = pipelineOutTensor;
      return logProb;
    };

    const Loss = (pipelineOutTensor, labelTensor) => {
      let logProb = Fit(pipelineOutTensor);
      let likelihood = logProb.mul(labelTensor).logSigmoid();
      let loss = likelihood.mean();
      return loss;
    };

    return {
      Loss,
      Fit
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (WordContextModelMixins);

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
/* harmony import */ var _SupervisedModels_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SupervisedModels/index */ "./src/SupervisedModels/index.js");
/* harmony import */ var _UnSupervisedModels_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnSupervisedModels/index */ "./src/UnSupervisedModels/index.js");





class CausalNetModels extends causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Tensor"], [_SupervisedModels_index__WEBPACK_IMPORTED_MODULE_2__["SingleLabelMixins"], _SupervisedModels_index__WEBPACK_IMPORTED_MODULE_2__["SequenceLabelsMixins"], _UnSupervisedModels_index__WEBPACK_IMPORTED_MODULE_3__["WordContextModelMixins"]]) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetModels());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: SupervisedModelsMixins, UnSupervisedModelsMixins, causalNetModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _supervisedModels_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supervisedModels.mixins */ "./src/supervisedModels.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SupervisedModelsMixins", function() { return _supervisedModels_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _unSupervisedModels_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unSupervisedModels.mixins */ "./src/unSupervisedModels.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnSupervisedModelsMixins", function() { return _unSupervisedModels_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _causalNetModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./causalNetModels */ "./src/causalNetModels.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetModels", function() { return _causalNetModels__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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
      throw Error('modelLoss is not set');
    }

    return this.modelLoss;
  }

  set Loss(loss) {
    if (!loss || typeof Loss !== 'function') {
      throw Error(`expect loss, got ${JSON.stringify(loss)}`);
    }

    this.modelLoss = loss;
    this.modelLoss.bind(this);
  }

  get Predict() {
    if (!this.modelPredict) {
      throw Error('modelPredict is not set');
    }

    return this.modelPredict;
  }

  set Predict(predict) {
    if (!predict) {
      throw Error(`expect predict, got ${predict}`);
    }

    this.modelPredict = predict;
    this.modelPredict.bind(this);
  }

  get Fit() {
    if (!this.modelFit) {
      throw Error(`modelFit is not set`);
    }

    return this.modelFit;
  }

  set Fit(fit) {
    if (!fit || typeof fit !== 'function') {
      throw Error(`expect fit, got ${JSON.stringify(fit)}`);
    }

    this.modelFit = fit;
    this.modelFit.bind(this);
  }

  get NumClasses() {
    return this.modelNumClasses;
  }

  set NumClasses(numClasses) {
    if (typeof numClasses !== 'number' || numClasses <= 0) {
      throw Error(`expect numClasses, got ${JSON.stringify(numClasses)}`);
    }

    this.modelNumClasses = numClasses;
  }

  get OneHotPredict() {
    return samples => this.modelOneHotPredict(samples, this.NumClasses);
  }

  set OneHotPredict(oneHotPredict) {
    if (!oneHotPredict || typeof oneHotPredict !== 'function') {
      throw Error(`expect oneHotPredict, got ${JSON.stringify(oneHotPredict)}`);
    }

    this.modelOneHotPredict = oneHotPredict;
    this.modelOneHotPredict.bind(this);
  }

  setModelByConfig(netConfig) {
    const NumClasses = netConfig.NumClasses;
    const {
      Loss,
      Predict,
      OneHotPredict,
      Fit
    } = netConfig.Model;
    this.Loss = Loss;
    this.Fit = Fit;
    this.Predict = Predict;
    this.OneHotPredict = OneHotPredict;
    this.NumClasses = NumClasses;
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
  get Models() {
    this.models;
  }

  set Models(models) {
    this.models = models;
  }

  get Loss() {
    return this.modelLoss;
  }

  set Loss(loss) {
    this.modelLoss = loss;
    this.modelLoss.bind(this);
  }

  get Predict() {
    return this.modelPredict;
  }

  set Predict(predict) {
    this.modelPredict = predict;
    this.modelPredict.bind(this);
  }

  get Fit() {
    return this.modelFit;
  }

  set Fit(fit) {
    this.modelFit = fit;
    this.modelFit.bind(this);
  }

  setModelByConfig(netConfig) {
    const {
      Loss,
      Encode,
      Decode,
      Fit
    } = netConfig.Model;

    if (!Loss) {
      throw Error('Loss must be defind as a tensor function or acquire from CausalNet.models');
    }

    if (typeof Loss === 'function') {
      this.Loss = Loss;
    } else {
      throw Error('not knowning yet');
    }

    if (typeof Fit === 'function') {
      this.Fit = Fit;
    } else {
      throw Error('not knowning yet');
    }

    if (typeof Predict === 'function') {
      this.Predict = Predict;
    } else {
      throw Error('not knowning yet');
    }

    if (typeof OneHotPredict === 'function') {
      this.OneHotPredict = OneHotPredict;
    } else {
      throw Error('not knowning yet');
    }

    if (NumClasses > 0) {
      this.NumClasses = NumClasses;
    } else {
      throw Error('NumClasses from netConfig must be non zero, positive number');
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9TdXBlcnZpc2VkTW9kZWxzL3NlcXVlbmNlTGFiZWxzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9TdXBlcnZpc2VkTW9kZWxzL3NpbmdsZUxhYmVsLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9VblN1cGVydmlzZWRNb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvVW5TdXBlcnZpc2VkTW9kZWxzL3dvcmRDb250ZXh0c01vZGVscy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvY2F1c2FsTmV0TW9kZWxzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL3N1cGVydmlzZWRNb2RlbHMubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL3VuU3VwZXJ2aXNlZE1vZGVscy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJTZXF1ZW5jZUxhYmVsc01peGlucyIsImJhc2VQaXBlbGluZUNsYXNzIiwiRGVjb2RlciIsIkVycm9yIiwiQ1RDRGVjb2RlIiwiU2luZ2xlTGFiZWxNaXhpbnMiLCJjbGFzc2lmaWNhdGlvbiIsIkZpdCIsInBpcGVsaW5lT3V0VGVuc29yIiwibG9nUHJvYiIsInN1YiIsImxvZ1N1bUV4cCIsIlByZWRpY3QiLCJwcmVkaWN0ZWRDbGFzcyIsImFyZ01heCIsIk9uZUhvdFByZWRpY3QiLCJudW1DbGFzc2VzIiwib25lSG90UHJlZGljdCIsIlQiLCJvbmVIb3QiLCJMb3NzIiwibGFiZWxUZW5zb3IiLCJsaWtlbGlob29kIiwibmVnIiwibXVsIiwibG9zcyIsIm1lYW4iLCJXb3JkQ29udGV4dE1vZGVsTWl4aW5zIiwic2tpcEdyYW0iLCJsb2dTaWdtb2lkIiwiQ2F1c2FsTmV0TW9kZWxzIiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiY29uc3RydWN0b3IiLCJTdXBlcnZpc2VkTW9kZWxzTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJtb2RlbExvc3MiLCJKU09OIiwic3RyaW5naWZ5IiwiYmluZCIsIm1vZGVsUHJlZGljdCIsInByZWRpY3QiLCJtb2RlbEZpdCIsImZpdCIsIk51bUNsYXNzZXMiLCJtb2RlbE51bUNsYXNzZXMiLCJzYW1wbGVzIiwibW9kZWxPbmVIb3RQcmVkaWN0Iiwic2V0TW9kZWxCeUNvbmZpZyIsIm5ldENvbmZpZyIsIk1vZGVsIiwiVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zIiwiTW9kZWxzIiwibW9kZWxzIiwiRW5jb2RlIiwiRGVjb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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LENBQVg7QUFDSDs7QUFDRCxRQUFHLE9BQU9JLEdBQVAsS0FBZ0IsVUFBbkIsRUFBOEI7QUFDMUIsV0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0gsS0FGRCxNQUdJO0FBQ0EsWUFBTUosS0FBSyxDQUFDLGtCQUFELENBQVg7QUFDSDs7QUFDRCxRQUFHLE9BQU9TLE9BQVAsS0FBb0IsVUFBdkIsRUFBa0M7QUFDOUIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0gsS0FGRCxNQUdJO0FBQ0EsWUFBTVQsS0FBSyxDQUFDLGtCQUFELENBQVg7QUFDSDs7QUFDRCxRQUFHLE9BQU9ZLGFBQVAsS0FBMEIsVUFBN0IsRUFBd0M7QUFDcEMsV0FBS0EsYUFBTCxHQUFxQkEsYUFBckI7QUFDSCxLQUZELE1BR0k7QUFDQSxZQUFNWixLQUFLLENBQUMsa0JBQUQsQ0FBWDtBQUNIOztBQUNELFFBQUcwQyxVQUFVLEdBQUcsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNILEtBRkQsTUFHSTtBQUNBLFlBQU0xQyxLQUFLLENBQUMsNkRBQUQsQ0FBWDtBQUNIO0FBQ0o7O0FBbEVpRixDQUF0Rjs7QUFxRWVpRCx1RkFBZixFOzs7Ozs7Ozs7OztBQ3JFQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L21vZGVscy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFNpbmdsZUxhYmVsTWl4aW5zIH0gZnJvbSAnLi9zaW5nbGVMYWJlbC5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZXF1ZW5jZUxhYmVsc01peGlucyB9IGZyb20gJy4vc2VxdWVuY2VMYWJlbHMubWl4aW5zJzsiLCJjb25zdCBTZXF1ZW5jZUxhYmVsc01peGlucyA9IChiYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIChiYXNlUGlwZWxpbmVDbGFzcyl7XG4gICAgRGVjb2Rlcigpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgQ1RDRGVjb2RlKCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXF1ZW5jZUxhYmVsc01peGluczsiLCJjb25zdCBTaW5nbGVMYWJlbE1peGlucyA9IChiYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIChiYXNlUGlwZWxpbmVDbGFzcyl7XG4gICAgY2xhc3NpZmljYXRpb24oKXtcbiAgICAgICAgY29uc3QgRml0ID0gKHBpcGVsaW5lT3V0VGVuc29yKSA9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gcGlwZWxpbmVPdXRUZW5zb3Iuc3ViKHBpcGVsaW5lT3V0VGVuc29yLmxvZ1N1bUV4cCgxLCB0cnVlKSk7XG4gICAgICAgICAgICByZXR1cm4gbG9nUHJvYjtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgUHJlZGljdCA9IChwaXBlbGluZU91dFRlbnNvcikgPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgICAgICAgIHJldHVybiBwcmVkaWN0ZWRDbGFzcztcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgT25lSG90UHJlZGljdCA9IChwaXBlbGluZU91dFRlbnNvciwgbnVtQ2xhc3NlcykgPT57XG4gICAgICAgICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBQcmVkaWN0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBvbmVIb3RQcmVkaWN0ID0gdGhpcy5ULm9uZUhvdChwcmVkaWN0ZWRDbGFzcywgbnVtQ2xhc3Nlcyk7XG4gICAgICAgICAgICByZXR1cm4gb25lSG90UHJlZGljdDtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgTG9zcyA9IChwaXBlbGluZU91dFRlbnNvciwgbGFiZWxUZW5zb3IpPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubmVnKCkubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsb3NzID0gbGlrZWxpaG9vZC5tZWFuKCk7XG4gICAgICAgICAgICByZXR1cm4gbG9zcztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgUHJlZGljdCwgT25lSG90UHJlZGljdCwgTG9zcywgRml0IH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlTGFiZWxNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JkQ29udGV4dE1vZGVsTWl4aW5zIH0gZnJvbSAnLi93b3JkQ29udGV4dHNNb2RlbHMubWl4aW5zJzsiLCJjb25zdCBXb3JkQ29udGV4dE1vZGVsTWl4aW5zID0gKGJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgKGJhc2VQaXBlbGluZUNsYXNzKXtcbiAgICBza2lwR3JhbSgpe1xuICAgICAgICAvLyBUT0RPOiBjb21lIHVwIHdpdGggYmV0dGVyIG5hbWUgbGF0ZXJcbiAgICAgICAgLy9pbXBsaWNpdCBtYXRyaXggZmFjdG9yaXphdGlvblxuICAgICAgICBjb25zdCBGaXQgPSAocGlwZWxpbmVPdXRUZW5zb3IpID0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBwaXBlbGluZU91dFRlbnNvcjtcbiAgICAgICAgICAgIHJldHVybiBsb2dQcm9iO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBMb3NzID0gKHBpcGVsaW5lT3V0VGVuc29yLCBsYWJlbFRlbnNvcik9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsaWtlbGlob29kID0gbG9nUHJvYi5tdWwobGFiZWxUZW5zb3IpLmxvZ1NpZ21vaWQoKTtcbiAgICAgICAgICAgIGxldCBsb3NzID0gbGlrZWxpaG9vZC5tZWFuKCk7XG4gICAgICAgICAgICByZXR1cm4gbG9zcztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgTG9zcywgRml0IH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZENvbnRleHRNb2RlbE1peGluczsiLCJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IFNpbmdsZUxhYmVsTWl4aW5zLCBTZXF1ZW5jZUxhYmVsc01peGlucyB9IGZyb20gJy4vU3VwZXJ2aXNlZE1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBXb3JkQ29udGV4dE1vZGVsTWl4aW5zIH0gZnJvbSAnLi9VblN1cGVydmlzZWRNb2RlbHMvaW5kZXgnO1xuY2xhc3MgQ2F1c2FsTmV0TW9kZWxzIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsIFxuICAgIFsgU2luZ2xlTGFiZWxNaXhpbnMsIFxuICAgICAgU2VxdWVuY2VMYWJlbHNNaXhpbnMsXG4gICAgICBXb3JkQ29udGV4dE1vZGVsTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldE1vZGVsczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFN1cGVydmlzZWRNb2RlbHNNaXhpbnMgfSBmcm9tICcuL3N1cGVydmlzZWRNb2RlbHMubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zIH0gZnJvbSAnLi91blN1cGVydmlzZWRNb2RlbHMubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0TW9kZWxzIH0gZnJvbSAnLi9jYXVzYWxOZXRNb2RlbHMnOyIsImNvbnN0IFN1cGVydmlzZWRNb2RlbHNNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBcbiAgICBnZXQgTG9zcygpe1xuICAgICAgICBpZighdGhpcy5tb2RlbExvc3Mpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ21vZGVsTG9zcyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxMb3NzO1xuICAgIH1cbiAgICBzZXQgTG9zcyhsb3NzKXtcbiAgICAgICAgaWYoIWxvc3MgfHwgdHlwZW9mKExvc3MpICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgbG9zcywgZ290ICR7SlNPTi5zdHJpbmdpZnkobG9zcyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbExvc3MgPSBsb3NzO1xuICAgICAgICB0aGlzLm1vZGVsTG9zcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBQcmVkaWN0KCl7XG4gICAgICAgIGlmKCF0aGlzLm1vZGVsUHJlZGljdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbW9kZWxQcmVkaWN0IGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbFByZWRpY3Q7XG4gICAgfVxuICAgIHNldCBQcmVkaWN0KHByZWRpY3Qpe1xuICAgICAgICBpZighcHJlZGljdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHByZWRpY3QsIGdvdCAke3ByZWRpY3R9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbFByZWRpY3QgPSBwcmVkaWN0O1xuICAgICAgICB0aGlzLm1vZGVsUHJlZGljdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxGaXQpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYG1vZGVsRml0IGlzIG5vdCBzZXRgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbEZpdDtcbiAgICB9XG4gICAgc2V0IEZpdChmaXQpe1xuICAgICAgICBpZighZml0IHx8IHR5cGVvZihmaXQpICE9PSAnZnVuY3Rpb24nICl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IGZpdCwgZ290ICR7SlNPTi5zdHJpbmdpZnkoZml0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsRml0ID0gZml0O1xuICAgICAgICB0aGlzLm1vZGVsRml0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IE51bUNsYXNzZXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxOdW1DbGFzc2VzO1xuICAgIH1cbiAgICBzZXQgTnVtQ2xhc3NlcyhudW1DbGFzc2VzKXtcbiAgICAgICAgaWYodHlwZW9mKG51bUNsYXNzZXMpICE9PSAnbnVtYmVyJyB8fCBudW1DbGFzc2VzIDw9IDApe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBudW1DbGFzc2VzLCBnb3QgJHtKU09OLnN0cmluZ2lmeShudW1DbGFzc2VzKX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsTnVtQ2xhc3NlcyA9IG51bUNsYXNzZXM7XG4gICAgfVxuXG4gICAgZ2V0IE9uZUhvdFByZWRpY3QoKXtcbiAgICAgICAgcmV0dXJuIChzYW1wbGVzKT0+dGhpcy5tb2RlbE9uZUhvdFByZWRpY3Qoc2FtcGxlcywgdGhpcy5OdW1DbGFzc2VzKTtcbiAgICB9XG4gICAgc2V0IE9uZUhvdFByZWRpY3Qob25lSG90UHJlZGljdCl7XG4gICAgICAgIGlmKCFvbmVIb3RQcmVkaWN0IHx8IHR5cGVvZihvbmVIb3RQcmVkaWN0KSAhPT0gJ2Z1bmN0aW9uJyApe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBvbmVIb3RQcmVkaWN0LCBnb3QgJHtKU09OLnN0cmluZ2lmeShvbmVIb3RQcmVkaWN0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsT25lSG90UHJlZGljdCA9IG9uZUhvdFByZWRpY3Q7XG4gICAgICAgIHRoaXMubW9kZWxPbmVIb3RQcmVkaWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0TW9kZWxCeUNvbmZpZyhuZXRDb25maWcpe1xuICAgICAgICBjb25zdCBOdW1DbGFzc2VzID0gbmV0Q29uZmlnLk51bUNsYXNzZXM7XG4gICAgICAgIGNvbnN0IHtMb3NzLCBQcmVkaWN0LCBPbmVIb3RQcmVkaWN0LCBGaXR9ID0gbmV0Q29uZmlnLk1vZGVsO1xuICAgICAgICB0aGlzLkxvc3MgPSBMb3NzO1xuICAgICAgICB0aGlzLkZpdCA9IEZpdDtcbiAgICAgICAgdGhpcy5QcmVkaWN0ID0gUHJlZGljdDtcbiAgICAgICAgdGhpcy5PbmVIb3RQcmVkaWN0ID0gT25lSG90UHJlZGljdDtcbiAgICAgICAgdGhpcy5OdW1DbGFzc2VzID0gTnVtQ2xhc3NlcztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdXBlcnZpc2VkTW9kZWxzTWl4aW5zO1xuIiwiY29uc3QgVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgZ2V0IE1vZGVscygpe1xuICAgICAgICB0aGlzLm1vZGVscztcbiAgICB9XG4gICAgc2V0IE1vZGVscyhtb2RlbHMpe1xuICAgICAgICB0aGlzLm1vZGVscyA9IG1vZGVscztcbiAgICB9XG4gICAgZ2V0IExvc3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxMb3NzO1xuICAgIH1cbiAgICBzZXQgTG9zcyhsb3NzKXtcbiAgICAgICAgdGhpcy5tb2RlbExvc3MgPSBsb3NzO1xuICAgICAgICB0aGlzLm1vZGVsTG9zcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBQcmVkaWN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsUHJlZGljdDtcbiAgICB9XG4gICAgc2V0IFByZWRpY3QocHJlZGljdCl7XG4gICAgICAgIHRoaXMubW9kZWxQcmVkaWN0ID0gcHJlZGljdDtcbiAgICAgICAgdGhpcy5tb2RlbFByZWRpY3QuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgRml0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsRml0O1xuICAgIH1cbiAgICBzZXQgRml0KGZpdCl7XG4gICAgICAgIHRoaXMubW9kZWxGaXQgPSBmaXQ7XG4gICAgICAgIHRoaXMubW9kZWxGaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRNb2RlbEJ5Q29uZmlnKG5ldENvbmZpZyl7XG4gICAgICAgIGNvbnN0IHtMb3NzLCBFbmNvZGUsIERlY29kZSwgRml0fSA9IG5ldENvbmZpZy5Nb2RlbDtcbiAgICAgICAgaWYoIUxvc3Mpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xvc3MgbXVzdCBiZSBkZWZpbmQgYXMgYSB0ZW5zb3IgZnVuY3Rpb24gb3IgYWNxdWlyZSBmcm9tIENhdXNhbE5ldC5tb2RlbHMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoTG9zcykgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5Mb3NzID0gTG9zcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoRml0KSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aGlzLkZpdCA9IEZpdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoUHJlZGljdCkgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5QcmVkaWN0ID0gUHJlZGljdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoT25lSG90UHJlZGljdCkgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5PbmVIb3RQcmVkaWN0ID0gT25lSG90UHJlZGljdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihOdW1DbGFzc2VzID4gMCl7XG4gICAgICAgICAgICB0aGlzLk51bUNsYXNzZXMgPSBOdW1DbGFzc2VzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTnVtQ2xhc3NlcyBmcm9tIG5ldENvbmZpZyBtdXN0IGJlIG5vbiB6ZXJvLCBwb3NpdGl2ZSBudW1iZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVuU3VwZXJ2aXNlZE1vZGVsc01peGlucztcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=