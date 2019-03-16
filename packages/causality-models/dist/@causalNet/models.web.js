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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9TdXBlcnZpc2VkTW9kZWxzL3NlcXVlbmNlTGFiZWxzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9TdXBlcnZpc2VkTW9kZWxzL3NpbmdsZUxhYmVsLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9VblN1cGVydmlzZWRNb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvVW5TdXBlcnZpc2VkTW9kZWxzL3dvcmRDb250ZXh0c01vZGVscy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvY2F1c2FsTmV0TW9kZWxzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL3N1cGVydmlzZWRNb2RlbHMubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL3VuU3VwZXJ2aXNlZE1vZGVscy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJTZXF1ZW5jZUxhYmVsc01peGlucyIsImJhc2VQaXBlbGluZUNsYXNzIiwiRGVjb2RlciIsIkVycm9yIiwiQ1RDRGVjb2RlIiwiU2luZ2xlTGFiZWxNaXhpbnMiLCJjbGFzc2lmaWNhdGlvbiIsIkZpdCIsInBpcGVsaW5lT3V0VGVuc29yIiwibG9nUHJvYiIsInN1YiIsImxvZ1N1bUV4cCIsIlByZWRpY3QiLCJwcmVkaWN0ZWRDbGFzcyIsImFyZ01heCIsIk9uZUhvdFByZWRpY3QiLCJudW1DbGFzc2VzIiwib25lSG90UHJlZGljdCIsIlQiLCJvbmVIb3QiLCJMb3NzIiwibGFiZWxUZW5zb3IiLCJsaWtlbGlob29kIiwibmVnIiwibXVsIiwibG9zcyIsIm1lYW4iLCJXb3JkQ29udGV4dE1vZGVsTWl4aW5zIiwic2tpcEdyYW0iLCJsb2dTaWdtb2lkIiwiQ2F1c2FsTmV0TW9kZWxzIiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiY29uc3RydWN0b3IiLCJTdXBlcnZpc2VkTW9kZWxzTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJtb2RlbExvc3MiLCJKU09OIiwic3RyaW5naWZ5IiwiYmluZCIsIm1vZGVsUHJlZGljdCIsInByZWRpY3QiLCJtb2RlbEZpdCIsImZpdCIsIk51bUNsYXNzZXMiLCJtb2RlbE51bUNsYXNzZXMiLCJzYW1wbGVzIiwibW9kZWxPbmVIb3RQcmVkaWN0Iiwic2V0TW9kZWxCeUNvbmZpZyIsIm5ldENvbmZpZyIsIk1vZGVsIiwiVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zIiwiTW9kZWxzIiwibW9kZWxzIiwiRW5jb2RlIiwiRGVjb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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LENBQVg7QUFDSDs7QUFDRCxRQUFHLE9BQU9JLEdBQVAsS0FBZ0IsVUFBbkIsRUFBOEI7QUFDMUIsV0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0gsS0FGRCxNQUdJO0FBQ0EsWUFBTUosS0FBSyxDQUFDLGtCQUFELENBQVg7QUFDSDs7QUFDRCxRQUFHLE9BQU9TLE9BQVAsS0FBb0IsVUFBdkIsRUFBa0M7QUFDOUIsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0gsS0FGRCxNQUdJO0FBQ0EsWUFBTVQsS0FBSyxDQUFDLGtCQUFELENBQVg7QUFDSDs7QUFDRCxRQUFHLE9BQU9ZLGFBQVAsS0FBMEIsVUFBN0IsRUFBd0M7QUFDcEMsV0FBS0EsYUFBTCxHQUFxQkEsYUFBckI7QUFDSCxLQUZELE1BR0k7QUFDQSxZQUFNWixLQUFLLENBQUMsa0JBQUQsQ0FBWDtBQUNIOztBQUNELFFBQUcwQyxVQUFVLEdBQUcsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNILEtBRkQsTUFHSTtBQUNBLFlBQU0xQyxLQUFLLENBQUMsNkRBQUQsQ0FBWDtBQUNIO0FBQ0o7O0FBbEVpRixDQUF0Rjs7QUFxRWVpRCx1RkFBZixFOzs7Ozs7Ozs7OztBQ3JFQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L21vZGVscy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU2luZ2xlTGFiZWxNaXhpbnMgfSBmcm9tICcuL3NpbmdsZUxhYmVsLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcXVlbmNlTGFiZWxzTWl4aW5zIH0gZnJvbSAnLi9zZXF1ZW5jZUxhYmVscy5taXhpbnMnOyIsImNvbnN0IFNlcXVlbmNlTGFiZWxzTWl4aW5zID0gKGJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgKGJhc2VQaXBlbGluZUNsYXNzKXtcbiAgICBEZWNvZGVyKCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBDVENEZWNvZGUoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlcXVlbmNlTGFiZWxzTWl4aW5zOyIsImNvbnN0IFNpbmdsZUxhYmVsTWl4aW5zID0gKGJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgKGJhc2VQaXBlbGluZUNsYXNzKXtcbiAgICBjbGFzc2lmaWNhdGlvbigpe1xuICAgICAgICBjb25zdCBGaXQgPSAocGlwZWxpbmVPdXRUZW5zb3IpID0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBwaXBlbGluZU91dFRlbnNvci5zdWIocGlwZWxpbmVPdXRUZW5zb3IubG9nU3VtRXhwKDEsIHRydWUpKTtcbiAgICAgICAgICAgIHJldHVybiBsb2dQcm9iO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBQcmVkaWN0ID0gKHBpcGVsaW5lT3V0VGVuc29yKSA9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHByZWRpY3RlZENsYXNzO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBPbmVIb3RQcmVkaWN0ID0gKHBpcGVsaW5lT3V0VGVuc29yLCBudW1DbGFzc2VzKSA9PntcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IFByZWRpY3QocGlwZWxpbmVPdXRUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IG9uZUhvdFByZWRpY3QgPSB0aGlzLlQub25lSG90KHByZWRpY3RlZENsYXNzLCBudW1DbGFzc2VzKTtcbiAgICAgICAgICAgIHJldHVybiBvbmVIb3RQcmVkaWN0O1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBMb3NzID0gKHBpcGVsaW5lT3V0VGVuc29yLCBsYWJlbFRlbnNvcik9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsaWtlbGlob29kID0gbG9nUHJvYi5uZWcoKS5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IGxvc3MgPSBsaWtlbGlob29kLm1lYW4oKTtcbiAgICAgICAgICAgIHJldHVybiBsb3NzO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBQcmVkaWN0LCBPbmVIb3RQcmVkaWN0LCBMb3NzLCBGaXQgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVMYWJlbE1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFdvcmRDb250ZXh0TW9kZWxNaXhpbnMgfSBmcm9tICcuL3dvcmRDb250ZXh0c01vZGVscy5taXhpbnMnOyIsImNvbnN0IFdvcmRDb250ZXh0TW9kZWxNaXhpbnMgPSAoYmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyAoYmFzZVBpcGVsaW5lQ2xhc3Mpe1xuICAgIHNraXBHcmFtKCl7XG4gICAgICAgIC8vIFRPRE86IGNvbWUgdXAgd2l0aCBiZXR0ZXIgbmFtZSBsYXRlclxuICAgICAgICAvL2ltcGxpY2l0IG1hdHJpeCBmYWN0b3JpemF0aW9uXG4gICAgICAgIGNvbnN0IEZpdCA9IChwaXBlbGluZU91dFRlbnNvcikgPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IHBpcGVsaW5lT3V0VGVuc29yO1xuICAgICAgICAgICAgcmV0dXJuIGxvZ1Byb2I7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IExvc3MgPSAocGlwZWxpbmVPdXRUZW5zb3IsIGxhYmVsVGVuc29yKT0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBGaXQocGlwZWxpbmVPdXRUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IGxpa2VsaWhvb2QgPSBsb2dQcm9iLm11bChsYWJlbFRlbnNvcikubG9nU2lnbW9pZCgpO1xuICAgICAgICAgICAgbGV0IGxvc3MgPSBsaWtlbGlob29kLm1lYW4oKTtcbiAgICAgICAgICAgIHJldHVybiBsb3NzO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBMb3NzLCBGaXQgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JkQ29udGV4dE1vZGVsTWl4aW5zOyIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgU2luZ2xlTGFiZWxNaXhpbnMsIFNlcXVlbmNlTGFiZWxzTWl4aW5zIH0gZnJvbSAnLi9TdXBlcnZpc2VkTW9kZWxzL2luZGV4JztcbmltcG9ydCB7IFdvcmRDb250ZXh0TW9kZWxNaXhpbnMgfSBmcm9tICcuL1VuU3VwZXJ2aXNlZE1vZGVscy9pbmRleCc7XG5jbGFzcyBDYXVzYWxOZXRNb2RlbHMgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKFRlbnNvciwgXG4gICAgWyBTaW5nbGVMYWJlbE1peGlucywgXG4gICAgICBTZXF1ZW5jZUxhYmVsc01peGlucyxcbiAgICAgIFdvcmRDb250ZXh0TW9kZWxNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TW9kZWxzOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU3VwZXJ2aXNlZE1vZGVsc01peGlucyB9IGZyb20gJy4vc3VwZXJ2aXNlZE1vZGVscy5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnMgfSBmcm9tICcuL3VuU3VwZXJ2aXNlZE1vZGVscy5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRNb2RlbHMgfSBmcm9tICcuL2NhdXNhbE5ldE1vZGVscyc7IiwiY29uc3QgU3VwZXJ2aXNlZE1vZGVsc01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIFxuICAgIGdldCBMb3NzKCl7XG4gICAgICAgIGlmKCF0aGlzLm1vZGVsTG9zcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbW9kZWxMb3NzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbExvc3M7XG4gICAgfVxuICAgIHNldCBMb3NzKGxvc3Mpe1xuICAgICAgICBpZighbG9zcyB8fCB0eXBlb2YoTG9zcykgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBsb3NzLCBnb3QgJHtKU09OLnN0cmluZ2lmeShsb3NzKX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsTG9zcyA9IGxvc3M7XG4gICAgICAgIHRoaXMubW9kZWxMb3NzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IFByZWRpY3QoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxQcmVkaWN0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdtb2RlbFByZWRpY3QgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsUHJlZGljdDtcbiAgICB9XG4gICAgc2V0IFByZWRpY3QocHJlZGljdCl7XG4gICAgICAgIGlmKCFwcmVkaWN0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgcHJlZGljdCwgZ290ICR7cHJlZGljdH1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsUHJlZGljdCA9IHByZWRpY3Q7XG4gICAgICAgIHRoaXMubW9kZWxQcmVkaWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IEZpdCgpe1xuICAgICAgICBpZighdGhpcy5tb2RlbEZpdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgbW9kZWxGaXQgaXMgbm90IHNldGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsRml0O1xuICAgIH1cbiAgICBzZXQgRml0KGZpdCl7XG4gICAgICAgIGlmKCFmaXQgfHwgdHlwZW9mKGZpdCkgIT09ICdmdW5jdGlvbicgKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgZml0LCBnb3QgJHtKU09OLnN0cmluZ2lmeShmaXQpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWxGaXQgPSBmaXQ7XG4gICAgICAgIHRoaXMubW9kZWxGaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgTnVtQ2xhc3Nlcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbE51bUNsYXNzZXM7XG4gICAgfVxuICAgIHNldCBOdW1DbGFzc2VzKG51bUNsYXNzZXMpe1xuICAgICAgICBpZih0eXBlb2YobnVtQ2xhc3NlcykgIT09ICdudW1iZXInIHx8IG51bUNsYXNzZXMgPD0gMCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IG51bUNsYXNzZXMsIGdvdCAke0pTT04uc3RyaW5naWZ5KG51bUNsYXNzZXMpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWxOdW1DbGFzc2VzID0gbnVtQ2xhc3NlcztcbiAgICB9XG5cbiAgICBnZXQgT25lSG90UHJlZGljdCgpe1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT50aGlzLm1vZGVsT25lSG90UHJlZGljdChzYW1wbGVzLCB0aGlzLk51bUNsYXNzZXMpO1xuICAgIH1cbiAgICBzZXQgT25lSG90UHJlZGljdChvbmVIb3RQcmVkaWN0KXtcbiAgICAgICAgaWYoIW9uZUhvdFByZWRpY3QgfHwgdHlwZW9mKG9uZUhvdFByZWRpY3QpICE9PSAnZnVuY3Rpb24nICl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IG9uZUhvdFByZWRpY3QsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9uZUhvdFByZWRpY3QpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWxPbmVIb3RQcmVkaWN0ID0gb25lSG90UHJlZGljdDtcbiAgICAgICAgdGhpcy5tb2RlbE9uZUhvdFByZWRpY3QuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRNb2RlbEJ5Q29uZmlnKG5ldENvbmZpZyl7XG4gICAgICAgIGNvbnN0IE51bUNsYXNzZXMgPSBuZXRDb25maWcuTnVtQ2xhc3NlcztcbiAgICAgICAgY29uc3Qge0xvc3MsIFByZWRpY3QsIE9uZUhvdFByZWRpY3QsIEZpdH0gPSBuZXRDb25maWcuTW9kZWw7XG4gICAgICAgIHRoaXMuTG9zcyA9IExvc3M7XG4gICAgICAgIHRoaXMuRml0ID0gRml0O1xuICAgICAgICB0aGlzLlByZWRpY3QgPSBQcmVkaWN0O1xuICAgICAgICB0aGlzLk9uZUhvdFByZWRpY3QgPSBPbmVIb3RQcmVkaWN0O1xuICAgICAgICB0aGlzLk51bUNsYXNzZXMgPSBOdW1DbGFzc2VzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1cGVydmlzZWRNb2RlbHNNaXhpbnM7XG4iLCJjb25zdCBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXQgTW9kZWxzKCl7XG4gICAgICAgIHRoaXMubW9kZWxzO1xuICAgIH1cbiAgICBzZXQgTW9kZWxzKG1vZGVscyl7XG4gICAgICAgIHRoaXMubW9kZWxzID0gbW9kZWxzO1xuICAgIH1cbiAgICBnZXQgTG9zcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbExvc3M7XG4gICAgfVxuICAgIHNldCBMb3NzKGxvc3Mpe1xuICAgICAgICB0aGlzLm1vZGVsTG9zcyA9IGxvc3M7XG4gICAgICAgIHRoaXMubW9kZWxMb3NzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IFByZWRpY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxQcmVkaWN0O1xuICAgIH1cbiAgICBzZXQgUHJlZGljdChwcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbFByZWRpY3QgPSBwcmVkaWN0O1xuICAgICAgICB0aGlzLm1vZGVsUHJlZGljdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxGaXQ7XG4gICAgfVxuICAgIHNldCBGaXQoZml0KXtcbiAgICAgICAgdGhpcy5tb2RlbEZpdCA9IGZpdDtcbiAgICAgICAgdGhpcy5tb2RlbEZpdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNldE1vZGVsQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgY29uc3Qge0xvc3MsIEVuY29kZSwgRGVjb2RlLCBGaXR9ID0gbmV0Q29uZmlnLk1vZGVsO1xuICAgICAgICBpZighTG9zcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTG9zcyBtdXN0IGJlIGRlZmluZCBhcyBhIHRlbnNvciBmdW5jdGlvbiBvciBhY3F1aXJlIGZyb20gQ2F1c2FsTmV0Lm1vZGVscycpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZihMb3NzKSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aGlzLkxvc3MgPSBMb3NzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbm90IGtub3duaW5nIHlldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZihGaXQpID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRoaXMuRml0ID0gRml0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbm90IGtub3duaW5nIHlldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZihQcmVkaWN0KSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aGlzLlByZWRpY3QgPSBQcmVkaWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbm90IGtub3duaW5nIHlldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZihPbmVIb3RQcmVkaWN0KSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aGlzLk9uZUhvdFByZWRpY3QgPSBPbmVIb3RQcmVkaWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbm90IGtub3duaW5nIHlldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKE51bUNsYXNzZXMgPiAwKXtcbiAgICAgICAgICAgIHRoaXMuTnVtQ2xhc3NlcyA9IE51bUNsYXNzZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdOdW1DbGFzc2VzIGZyb20gbmV0Q29uZmlnIG11c3QgYmUgbm9uIHplcm8sIHBvc2l0aXZlIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==