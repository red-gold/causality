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

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./src/SupervisedModels/index.js":
/*!***************************************!*\
  !*** ./src/SupervisedModels/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./singleLabel.mixins */ "./src/SupervisedModels/singleLabel.mixins.js"), __webpack_require__(/*! ./sequenceLabels.mixins */ "./src/SupervisedModels/sequenceLabels.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _singleLabel, _sequenceLabels) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "SingleLabelMixins", {
    enumerable: true,
    get: function () {
      return _singleLabel.default;
    }
  });
  Object.defineProperty(_exports, "SequenceLabelsMixins", {
    enumerable: true,
    get: function () {
      return _sequenceLabels.default;
    }
  });
  _singleLabel = _interopRequireDefault(_singleLabel);
  _sequenceLabels = _interopRequireDefault(_sequenceLabels);
});

/***/ }),

/***/ "./src/SupervisedModels/sequenceLabels.mixins.js":
/*!*******************************************************!*\
  !*** ./src/SupervisedModels/sequenceLabels.mixins.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const SequenceLabelsMixins = basePipelineClass => class extends basePipelineClass {
    Decoder() {
      const Fit = (pipelineOutTensor, labelTensor) => {
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
        let logProb = Fit(pipelineOutTensor, labelTensor);
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

  var _default = SequenceLabelsMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/SupervisedModels/singleLabel.mixins.js":
/*!****************************************************!*\
  !*** ./src/SupervisedModels/singleLabel.mixins.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  var _default = SingleLabelMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/UnSupervisedModels/index.js":
/*!*****************************************!*\
  !*** ./src/UnSupervisedModels/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./wordContextsModels.mixins */ "./src/UnSupervisedModels/wordContextsModels.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _wordContextsModels) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "WordContextModelMixins", {
    enumerable: true,
    get: function () {
      return _wordContextsModels.default;
    }
  });
  _wordContextsModels = _interopRequireDefault(_wordContextsModels);
});

/***/ }),

/***/ "./src/UnSupervisedModels/wordContextsModels.mixins.js":
/*!*************************************************************!*\
  !*** ./src/UnSupervisedModels/wordContextsModels.mixins.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  var _default = WordContextModelMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/causalNetModels.js":
/*!********************************!*\
  !*** ./src/causalNetModels.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! ./SupervisedModels/index */ "./src/SupervisedModels/index.js"), __webpack_require__(/*! ./UnSupervisedModels/index */ "./src/UnSupervisedModels/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _index, _index2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CausalNetModels extends _causalNet.Platform.mixWith(_causalNet2.Tensor, [_index.SingleLabelMixins, _index.SequenceLabelsMixins, _index2.WordContextModelMixins]) {
    constructor() {
      super();
    }

  }

  var _default = new CausalNetModels();

  _exports.default = _default;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./supervisedModels.mixins */ "./src/supervisedModels.mixins.js"), __webpack_require__(/*! ./unSupervisedModels.mixins */ "./src/unSupervisedModels.mixins.js"), __webpack_require__(/*! ./causalNetModels */ "./src/causalNetModels.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _supervisedModels, _unSupervisedModels, _causalNetModels) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "SupervisedModelsMixins", {
    enumerable: true,
    get: function () {
      return _supervisedModels.default;
    }
  });
  Object.defineProperty(_exports, "UnSupervisedModelsMixins", {
    enumerable: true,
    get: function () {
      return _unSupervisedModels.default;
    }
  });
  Object.defineProperty(_exports, "causalNetModels", {
    enumerable: true,
    get: function () {
      return _causalNetModels.default;
    }
  });
  _supervisedModels = _interopRequireDefault(_supervisedModels);
  _unSupervisedModels = _interopRequireDefault(_unSupervisedModels);
  _causalNetModels = _interopRequireDefault(_causalNetModels);
});

/***/ }),

/***/ "./src/supervisedModels.mixins.js":
/*!****************************************!*\
  !*** ./src/supervisedModels.mixins.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  var _default = SupervisedModelsMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/unSupervisedModels.mixins.js":
/*!******************************************!*\
  !*** ./src/unSupervisedModels.mixins.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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
      const NumClasses = netConfig.NumClasses;
      const {
        Loss,
        Predict,
        OneHotPredict,
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

  var _default = UnSupervisedModelsMixins;
  _exports.default = _default;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9zZXF1ZW5jZUxhYmVscy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9zaW5nbGVMYWJlbC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvVW5TdXBlcnZpc2VkTW9kZWxzL3dvcmRDb250ZXh0c01vZGVscy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvY2F1c2FsTmV0TW9kZWxzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL3N1cGVydmlzZWRNb2RlbHMubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL3VuU3VwZXJ2aXNlZE1vZGVscy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJTZXF1ZW5jZUxhYmVsc01peGlucyIsImJhc2VQaXBlbGluZUNsYXNzIiwiRGVjb2RlciIsIkZpdCIsInBpcGVsaW5lT3V0VGVuc29yIiwibGFiZWxUZW5zb3IiLCJsb2dQcm9iIiwic3ViIiwibG9nU3VtRXhwIiwiUHJlZGljdCIsInByZWRpY3RlZENsYXNzIiwiYXJnTWF4IiwiT25lSG90UHJlZGljdCIsIm51bUNsYXNzZXMiLCJvbmVIb3RQcmVkaWN0IiwiVCIsIm9uZUhvdCIsIkxvc3MiLCJsaWtlbGlob29kIiwibmVnIiwibXVsIiwibG9zcyIsIm1lYW4iLCJTaW5nbGVMYWJlbE1peGlucyIsImNsYXNzaWZpY2F0aW9uIiwiV29yZENvbnRleHRNb2RlbE1peGlucyIsInNraXBHcmFtIiwibG9nU2lnbW9pZCIsIkNhdXNhbE5ldE1vZGVscyIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIlRlbnNvciIsImNvbnN0cnVjdG9yIiwiU3VwZXJ2aXNlZE1vZGVsc01peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwibW9kZWxMb3NzIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiYmluZCIsIm1vZGVsUHJlZGljdCIsInByZWRpY3QiLCJtb2RlbEZpdCIsImZpdCIsIk51bUNsYXNzZXMiLCJtb2RlbE51bUNsYXNzZXMiLCJzYW1wbGVzIiwibW9kZWxPbmVIb3RQcmVkaWN0Iiwic2V0TW9kZWxCeUNvbmZpZyIsIm5ldENvbmZpZyIsIk1vZGVsIiwiVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zIiwiTW9kZWxzIiwibW9kZWxzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLFFBQU1BLG9CQUFvQixHQUFJQyxpQkFBRCxJQUFzQixjQUFlQSxpQkFBZixDQUFpQztBQUNoRkMsV0FBTyxHQUFFO0FBQ0wsWUFBTUMsR0FBRyxHQUFHLENBQUNDLGlCQUFELEVBQW9CQyxXQUFwQixLQUFtQztBQUMzQyxZQUFJQyxPQUFPLEdBQUdGLGlCQUFpQixDQUFDRyxHQUFsQixDQUFzQkgsaUJBQWlCLENBQUNJLFNBQWxCLENBQTRCLENBQTVCLEVBQStCLElBQS9CLENBQXRCLENBQWQ7QUFDQSxlQUFPRixPQUFQO0FBQ0gsT0FIRDs7QUFJQSxZQUFNRyxPQUFPLEdBQUlMLGlCQUFELElBQXNCO0FBQ2xDLFlBQUlFLE9BQU8sR0FBR0gsR0FBRyxDQUFDQyxpQkFBRCxDQUFqQjtBQUNBLFlBQUlNLGNBQWMsR0FBR0osT0FBTyxDQUFDSyxNQUFSLENBQWUsQ0FBZixDQUFyQjtBQUNBLGVBQU9ELGNBQVA7QUFDSCxPQUpEOztBQUtBLFlBQU1FLGFBQWEsR0FBRyxDQUFDUixpQkFBRCxFQUFvQlMsVUFBcEIsS0FBa0M7QUFDcEQsWUFBSUgsY0FBYyxHQUFHRCxPQUFPLENBQUNMLGlCQUFELENBQTVCO0FBQ0EsWUFBSVUsYUFBYSxHQUFHLEtBQUtDLENBQUwsQ0FBT0MsTUFBUCxDQUFjTixjQUFkLEVBQThCRyxVQUE5QixDQUFwQjtBQUNBLGVBQU9DLGFBQVA7QUFDSCxPQUpEOztBQUtBLFlBQU1HLElBQUksR0FBRyxDQUFDYixpQkFBRCxFQUFvQkMsV0FBcEIsS0FBa0M7QUFDM0MsWUFBSUMsT0FBTyxHQUFHSCxHQUFHLENBQUNDLGlCQUFELEVBQW9CQyxXQUFwQixDQUFqQjtBQUNBLFlBQUlhLFVBQVUsR0FBR1osT0FBTyxDQUFDYSxHQUFSLEdBQWNDLEdBQWQsQ0FBa0JmLFdBQWxCLENBQWpCO0FBQ0EsWUFBSWdCLElBQUksR0FBR0gsVUFBVSxDQUFDSSxJQUFYLEVBQVg7QUFDQSxlQUFPRCxJQUFQO0FBQ0gsT0FMRDs7QUFNQSxhQUFPO0FBQUVaLGVBQUY7QUFBV0cscUJBQVg7QUFBMEJLLFlBQTFCO0FBQWdDZDtBQUFoQyxPQUFQO0FBQ0g7O0FBdkIrRSxHQUFwRjs7aUJBMEJlSCxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCZixRQUFNdUIsaUJBQWlCLEdBQUl0QixpQkFBRCxJQUFzQixjQUFlQSxpQkFBZixDQUFpQztBQUM3RXVCLGtCQUFjLEdBQUU7QUFDWixZQUFNckIsR0FBRyxHQUFJQyxpQkFBRCxJQUFzQjtBQUM5QixZQUFJRSxPQUFPLEdBQUdGLGlCQUFpQixDQUFDRyxHQUFsQixDQUFzQkgsaUJBQWlCLENBQUNJLFNBQWxCLENBQTRCLENBQTVCLEVBQStCLElBQS9CLENBQXRCLENBQWQ7QUFDQSxlQUFPRixPQUFQO0FBQ0gsT0FIRDs7QUFJQSxZQUFNRyxPQUFPLEdBQUlMLGlCQUFELElBQXNCO0FBQ2xDLFlBQUlFLE9BQU8sR0FBR0gsR0FBRyxDQUFDQyxpQkFBRCxDQUFqQjtBQUNBLFlBQUlNLGNBQWMsR0FBR0osT0FBTyxDQUFDSyxNQUFSLENBQWUsQ0FBZixDQUFyQjtBQUNBLGVBQU9ELGNBQVA7QUFDSCxPQUpEOztBQUtBLFlBQU1FLGFBQWEsR0FBRyxDQUFDUixpQkFBRCxFQUFvQlMsVUFBcEIsS0FBa0M7QUFDcEQsWUFBSUgsY0FBYyxHQUFHRCxPQUFPLENBQUNMLGlCQUFELENBQTVCO0FBQ0EsWUFBSVUsYUFBYSxHQUFHLEtBQUtDLENBQUwsQ0FBT0MsTUFBUCxDQUFjTixjQUFkLEVBQThCRyxVQUE5QixDQUFwQjtBQUNBLGVBQU9DLGFBQVA7QUFDSCxPQUpEOztBQUtBLFlBQU1HLElBQUksR0FBRyxDQUFDYixpQkFBRCxFQUFvQkMsV0FBcEIsS0FBa0M7QUFDM0MsWUFBSUMsT0FBTyxHQUFHSCxHQUFHLENBQUNDLGlCQUFELENBQWpCO0FBQ0EsWUFBSWMsVUFBVSxHQUFHWixPQUFPLENBQUNhLEdBQVIsR0FBY0MsR0FBZCxDQUFrQmYsV0FBbEIsQ0FBakI7QUFDQSxZQUFJZ0IsSUFBSSxHQUFHSCxVQUFVLENBQUNJLElBQVgsRUFBWDtBQUNBLGVBQU9ELElBQVA7QUFDSCxPQUxEOztBQU1BLGFBQU87QUFBRVosZUFBRjtBQUFXRyxxQkFBWDtBQUEwQkssWUFBMUI7QUFBZ0NkO0FBQWhDLE9BQVA7QUFDSDs7QUF2QjRFLEdBQWpGOztpQkEwQmVvQixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCZixRQUFNRSxzQkFBc0IsR0FBSXhCLGlCQUFELElBQXNCLGNBQWVBLGlCQUFmLENBQWlDO0FBQ2xGeUIsWUFBUSxHQUFFO0FBQ047QUFDQTtBQUNBLFlBQU12QixHQUFHLEdBQUlDLGlCQUFELElBQXNCO0FBQzlCLFlBQUlFLE9BQU8sR0FBR0YsaUJBQWQ7QUFDQSxlQUFPRSxPQUFQO0FBQ0gsT0FIRDs7QUFJQSxZQUFNVyxJQUFJLEdBQUcsQ0FBQ2IsaUJBQUQsRUFBb0JDLFdBQXBCLEtBQWtDO0FBQzNDLFlBQUlDLE9BQU8sR0FBR0gsR0FBRyxDQUFDQyxpQkFBRCxDQUFqQjtBQUNBLFlBQUljLFVBQVUsR0FBR1osT0FBTyxDQUFDYyxHQUFSLENBQVlmLFdBQVosRUFBeUJzQixVQUF6QixFQUFqQjtBQUNBLFlBQUlOLElBQUksR0FBR0gsVUFBVSxDQUFDSSxJQUFYLEVBQVg7QUFDQSxlQUFPRCxJQUFQO0FBQ0gsT0FMRDs7QUFNQSxhQUFPO0FBQUVKLFlBQUY7QUFBUWQ7QUFBUixPQUFQO0FBQ0g7O0FBZmlGLEdBQXRGOztpQkFrQmVzQixzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RmLFFBQU1HLGVBQU4sU0FBOEJDLG9CQUFTQyxPQUFULENBQWlCQyxrQkFBakIsRUFDMUIsQ0FBRVIsd0JBQUYsRUFDRXZCLDJCQURGLEVBRUV5Qiw4QkFGRixDQUQwQixDQUE5QixDQUcrQjtBQUMzQk8sZUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFIMEI7O2lCQUtoQixJQUFJSixlQUFKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaZixRQUFNSyxzQkFBc0IsR0FBSUMsaUJBQUQsSUFBc0IsY0FBY0EsaUJBQWQsQ0FBK0I7QUFFaEYsUUFBSWpCLElBQUosR0FBVTtBQUNOLFVBQUcsQ0FBQyxLQUFLa0IsU0FBVCxFQUFtQjtBQUNmLGNBQU1DLEtBQUssQ0FBQyxzQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsYUFBTyxLQUFLRCxTQUFaO0FBQ0g7O0FBQ0QsUUFBSWxCLElBQUosQ0FBU0ksSUFBVCxFQUFjO0FBQ1YsVUFBRyxDQUFDQSxJQUFELElBQVMsT0FBT0osSUFBUCxLQUFpQixVQUE3QixFQUF3QztBQUNwQyxjQUFNbUIsS0FBSyxDQUFFLG9CQUFtQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVqQixJQUFmLENBQXFCLEVBQTFDLENBQVg7QUFDSDs7QUFDRCxXQUFLYyxTQUFMLEdBQWlCZCxJQUFqQjtBQUNBLFdBQUtjLFNBQUwsQ0FBZUksSUFBZixDQUFvQixJQUFwQjtBQUNIOztBQUVELFFBQUk5QixPQUFKLEdBQWE7QUFDVCxVQUFHLENBQUMsS0FBSytCLFlBQVQsRUFBc0I7QUFDbEIsY0FBTUosS0FBSyxDQUFDLHlCQUFELENBQVg7QUFDSDs7QUFDRCxhQUFPLEtBQUtJLFlBQVo7QUFDSDs7QUFDRCxRQUFJL0IsT0FBSixDQUFZZ0MsT0FBWixFQUFvQjtBQUNoQixVQUFHLENBQUNBLE9BQUosRUFBWTtBQUNSLGNBQU1MLEtBQUssQ0FBRSx1QkFBc0JLLE9BQVEsRUFBaEMsQ0FBWDtBQUNIOztBQUNELFdBQUtELFlBQUwsR0FBb0JDLE9BQXBCO0FBQ0EsV0FBS0QsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkI7QUFDSDs7QUFFRCxRQUFJcEMsR0FBSixHQUFTO0FBQ0wsVUFBRyxDQUFDLEtBQUt1QyxRQUFULEVBQWtCO0FBQ2QsY0FBTU4sS0FBSyxDQUFFLHFCQUFGLENBQVg7QUFDSDs7QUFDRCxhQUFPLEtBQUtNLFFBQVo7QUFDSDs7QUFDRCxRQUFJdkMsR0FBSixDQUFRd0MsR0FBUixFQUFZO0FBQ1IsVUFBRyxDQUFDQSxHQUFELElBQVEsT0FBT0EsR0FBUCxLQUFnQixVQUEzQixFQUF1QztBQUNuQyxjQUFNUCxLQUFLLENBQUUsbUJBQWtCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUssR0FBZixDQUFvQixFQUF4QyxDQUFYO0FBQ0g7O0FBQ0QsV0FBS0QsUUFBTCxHQUFnQkMsR0FBaEI7QUFDQSxXQUFLRCxRQUFMLENBQWNILElBQWQsQ0FBbUIsSUFBbkI7QUFDSDs7QUFFRCxRQUFJSyxVQUFKLEdBQWdCO0FBQ1osYUFBTyxLQUFLQyxlQUFaO0FBQ0g7O0FBQ0QsUUFBSUQsVUFBSixDQUFlL0IsVUFBZixFQUEwQjtBQUN0QixVQUFHLE9BQU9BLFVBQVAsS0FBdUIsUUFBdkIsSUFBbUNBLFVBQVUsSUFBSSxDQUFwRCxFQUFzRDtBQUNsRCxjQUFNdUIsS0FBSyxDQUFFLDBCQUF5QkMsSUFBSSxDQUFDQyxTQUFMLENBQWV6QixVQUFmLENBQTJCLEVBQXRELENBQVg7QUFDSDs7QUFDRCxXQUFLZ0MsZUFBTCxHQUF1QmhDLFVBQXZCO0FBQ0g7O0FBRUQsUUFBSUQsYUFBSixHQUFtQjtBQUNmLGFBQVFrQyxPQUFELElBQVcsS0FBS0Msa0JBQUwsQ0FBd0JELE9BQXhCLEVBQWlDLEtBQUtGLFVBQXRDLENBQWxCO0FBQ0g7O0FBQ0QsUUFBSWhDLGFBQUosQ0FBa0JFLGFBQWxCLEVBQWdDO0FBQzVCLFVBQUcsQ0FBQ0EsYUFBRCxJQUFrQixPQUFPQSxhQUFQLEtBQTBCLFVBQS9DLEVBQTJEO0FBQ3ZELGNBQU1zQixLQUFLLENBQUUsNkJBQTRCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXhCLGFBQWYsQ0FBOEIsRUFBNUQsQ0FBWDtBQUNIOztBQUNELFdBQUtpQyxrQkFBTCxHQUEwQmpDLGFBQTFCO0FBQ0EsV0FBS2lDLGtCQUFMLENBQXdCUixJQUF4QixDQUE2QixJQUE3QjtBQUNIOztBQUVEUyxvQkFBZ0IsQ0FBQ0MsU0FBRCxFQUFXO0FBQ3ZCLFlBQU1MLFVBQVUsR0FBR0ssU0FBUyxDQUFDTCxVQUE3QjtBQUNBLFlBQU07QUFBQzNCLFlBQUQ7QUFBT1IsZUFBUDtBQUFnQkcscUJBQWhCO0FBQStCVDtBQUEvQixVQUFzQzhDLFNBQVMsQ0FBQ0MsS0FBdEQ7QUFDQSxXQUFLakMsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS2QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsV0FBS00sT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBS0csYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxXQUFLZ0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDSDs7QUF6RStFLEdBQXBGOztpQkE0RWVYLHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVmLFFBQU1rQix3QkFBd0IsR0FBSWpCLGlCQUFELElBQXNCLGNBQWNBLGlCQUFkLENBQStCO0FBQ2xGLFFBQUlrQixNQUFKLEdBQVk7QUFDUixXQUFLQyxNQUFMO0FBQ0g7O0FBQ0QsUUFBSUQsTUFBSixDQUFXQyxNQUFYLEVBQWtCO0FBQ2QsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7O0FBQ0QsUUFBSXBDLElBQUosR0FBVTtBQUNOLGFBQU8sS0FBS2tCLFNBQVo7QUFDSDs7QUFDRCxRQUFJbEIsSUFBSixDQUFTSSxJQUFULEVBQWM7QUFDVixXQUFLYyxTQUFMLEdBQWlCZCxJQUFqQjtBQUNBLFdBQUtjLFNBQUwsQ0FBZUksSUFBZixDQUFvQixJQUFwQjtBQUNIOztBQUVELFFBQUk5QixPQUFKLEdBQWE7QUFDVCxhQUFPLEtBQUsrQixZQUFaO0FBQ0g7O0FBQ0QsUUFBSS9CLE9BQUosQ0FBWWdDLE9BQVosRUFBb0I7QUFDaEIsV0FBS0QsWUFBTCxHQUFvQkMsT0FBcEI7QUFDQSxXQUFLRCxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QjtBQUNIOztBQUVELFFBQUlwQyxHQUFKLEdBQVM7QUFDTCxhQUFPLEtBQUt1QyxRQUFaO0FBQ0g7O0FBQ0QsUUFBSXZDLEdBQUosQ0FBUXdDLEdBQVIsRUFBWTtBQUNSLFdBQUtELFFBQUwsR0FBZ0JDLEdBQWhCO0FBQ0EsV0FBS0QsUUFBTCxDQUFjSCxJQUFkLENBQW1CLElBQW5CO0FBQ0g7O0FBRURTLG9CQUFnQixDQUFDQyxTQUFELEVBQVc7QUFDdkIsWUFBTUwsVUFBVSxHQUFHSyxTQUFTLENBQUNMLFVBQTdCO0FBQ0EsWUFBTTtBQUFDM0IsWUFBRDtBQUFPUixlQUFQO0FBQWdCRyxxQkFBaEI7QUFBK0JUO0FBQS9CLFVBQXNDOEMsU0FBUyxDQUFDQyxLQUF0RDs7QUFDQSxVQUFHLENBQUNqQyxJQUFKLEVBQVM7QUFDTCxjQUFNbUIsS0FBSyxDQUFDLDJFQUFELENBQVg7QUFDSDs7QUFDRCxVQUFHLE9BQU9uQixJQUFQLEtBQWlCLFVBQXBCLEVBQStCO0FBQzNCLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNILE9BRkQsTUFHSTtBQUNBLGNBQU1tQixLQUFLLENBQUMsa0JBQUQsQ0FBWDtBQUNIOztBQUNELFVBQUcsT0FBT2pDLEdBQVAsS0FBZ0IsVUFBbkIsRUFBOEI7QUFDMUIsYUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0gsT0FGRCxNQUdJO0FBQ0EsY0FBTWlDLEtBQUssQ0FBQyxrQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsVUFBRyxPQUFPM0IsT0FBUCxLQUFvQixVQUF2QixFQUFrQztBQUM5QixhQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDSCxPQUZELE1BR0k7QUFDQSxjQUFNMkIsS0FBSyxDQUFDLGtCQUFELENBQVg7QUFDSDs7QUFDRCxVQUFHLE9BQU94QixhQUFQLEtBQTBCLFVBQTdCLEVBQXdDO0FBQ3BDLGFBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0gsT0FGRCxNQUdJO0FBQ0EsY0FBTXdCLEtBQUssQ0FBQyxrQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsVUFBR1EsVUFBVSxHQUFHLENBQWhCLEVBQWtCO0FBQ2QsYUFBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDSCxPQUZELE1BR0k7QUFDQSxjQUFNUixLQUFLLENBQUMsNkRBQUQsQ0FBWDtBQUNIO0FBQ0o7O0FBbkVpRixHQUF0Rjs7aUJBc0VlZSx3Qjs7Ozs7Ozs7Ozs7OztBQ3RFZiw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L21vZGVscy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiY29uc3QgU2VxdWVuY2VMYWJlbHNNaXhpbnMgPSAoYmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyAoYmFzZVBpcGVsaW5lQ2xhc3Mpe1xuICAgIERlY29kZXIoKXtcbiAgICAgICAgY29uc3QgRml0ID0gKHBpcGVsaW5lT3V0VGVuc29yLCBsYWJlbFRlbnNvcikgPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IHBpcGVsaW5lT3V0VGVuc29yLnN1YihwaXBlbGluZU91dFRlbnNvci5sb2dTdW1FeHAoMSwgdHJ1ZSkpO1xuICAgICAgICAgICAgcmV0dXJuIGxvZ1Byb2I7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IFByZWRpY3QgPSAocGlwZWxpbmVPdXRUZW5zb3IpID0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBGaXQocGlwZWxpbmVPdXRUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gbG9nUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgICAgICByZXR1cm4gcHJlZGljdGVkQ2xhc3M7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IE9uZUhvdFByZWRpY3QgPSAocGlwZWxpbmVPdXRUZW5zb3IsIG51bUNsYXNzZXMpID0+e1xuICAgICAgICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gUHJlZGljdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgb25lSG90UHJlZGljdCA9IHRoaXMuVC5vbmVIb3QocHJlZGljdGVkQ2xhc3MsIG51bUNsYXNzZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9uZUhvdFByZWRpY3Q7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IExvc3MgPSAocGlwZWxpbmVPdXRUZW5zb3IsIGxhYmVsVGVuc29yKT0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBGaXQocGlwZWxpbmVPdXRUZW5zb3IsIGxhYmVsVGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsaWtlbGlob29kID0gbG9nUHJvYi5uZWcoKS5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IGxvc3MgPSBsaWtlbGlob29kLm1lYW4oKTtcbiAgICAgICAgICAgIHJldHVybiBsb3NzO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBQcmVkaWN0LCBPbmVIb3RQcmVkaWN0LCBMb3NzLCBGaXQgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXF1ZW5jZUxhYmVsc01peGluczsiLCJjb25zdCBTaW5nbGVMYWJlbE1peGlucyA9IChiYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIChiYXNlUGlwZWxpbmVDbGFzcyl7XG4gICAgY2xhc3NpZmljYXRpb24oKXtcbiAgICAgICAgY29uc3QgRml0ID0gKHBpcGVsaW5lT3V0VGVuc29yKSA9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gcGlwZWxpbmVPdXRUZW5zb3Iuc3ViKHBpcGVsaW5lT3V0VGVuc29yLmxvZ1N1bUV4cCgxLCB0cnVlKSk7XG4gICAgICAgICAgICByZXR1cm4gbG9nUHJvYjtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgUHJlZGljdCA9IChwaXBlbGluZU91dFRlbnNvcikgPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgICAgICAgIHJldHVybiBwcmVkaWN0ZWRDbGFzcztcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgT25lSG90UHJlZGljdCA9IChwaXBlbGluZU91dFRlbnNvciwgbnVtQ2xhc3NlcykgPT57XG4gICAgICAgICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBQcmVkaWN0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBvbmVIb3RQcmVkaWN0ID0gdGhpcy5ULm9uZUhvdChwcmVkaWN0ZWRDbGFzcywgbnVtQ2xhc3Nlcyk7XG4gICAgICAgICAgICByZXR1cm4gb25lSG90UHJlZGljdDtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgTG9zcyA9IChwaXBlbGluZU91dFRlbnNvciwgbGFiZWxUZW5zb3IpPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubmVnKCkubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsb3NzID0gbGlrZWxpaG9vZC5tZWFuKCk7XG4gICAgICAgICAgICByZXR1cm4gbG9zcztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgUHJlZGljdCwgT25lSG90UHJlZGljdCwgTG9zcywgRml0IH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlTGFiZWxNaXhpbnM7IiwiY29uc3QgV29yZENvbnRleHRNb2RlbE1peGlucyA9IChiYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIChiYXNlUGlwZWxpbmVDbGFzcyl7XG4gICAgc2tpcEdyYW0oKXtcbiAgICAgICAgLy8gVE9ETzogY29tZSB1cCB3aXRoIGJldHRlciBuYW1lIGxhdGVyXG4gICAgICAgIC8vaW1wbGljaXQgbWF0cml4IGZhY3Rvcml6YXRpb25cbiAgICAgICAgY29uc3QgRml0ID0gKHBpcGVsaW5lT3V0VGVuc29yKSA9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gcGlwZWxpbmVPdXRUZW5zb3I7XG4gICAgICAgICAgICByZXR1cm4gbG9nUHJvYjtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgTG9zcyA9IChwaXBlbGluZU91dFRlbnNvciwgbGFiZWxUZW5zb3IpPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubXVsKGxhYmVsVGVuc29yKS5sb2dTaWdtb2lkKCk7XG4gICAgICAgICAgICBsZXQgbG9zcyA9IGxpa2VsaWhvb2QubWVhbigpO1xuICAgICAgICAgICAgcmV0dXJuIGxvc3M7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IExvc3MsIEZpdCB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRDb250ZXh0TW9kZWxNaXhpbnM7IiwiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBTaW5nbGVMYWJlbE1peGlucywgU2VxdWVuY2VMYWJlbHNNaXhpbnMgfSBmcm9tICcuL1N1cGVydmlzZWRNb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgV29yZENvbnRleHRNb2RlbE1peGlucyB9IGZyb20gJy4vVW5TdXBlcnZpc2VkTW9kZWxzL2luZGV4JztcbmNsYXNzIENhdXNhbE5ldE1vZGVscyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoVGVuc29yLCBcbiAgICBbIFNpbmdsZUxhYmVsTWl4aW5zLCBcbiAgICAgIFNlcXVlbmNlTGFiZWxzTWl4aW5zLFxuICAgICAgV29yZENvbnRleHRNb2RlbE1peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRNb2RlbHM7IiwiY29uc3QgU3VwZXJ2aXNlZE1vZGVsc01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIFxuICAgIGdldCBMb3NzKCl7XG4gICAgICAgIGlmKCF0aGlzLm1vZGVsTG9zcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbW9kZWxMb3NzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbExvc3M7XG4gICAgfVxuICAgIHNldCBMb3NzKGxvc3Mpe1xuICAgICAgICBpZighbG9zcyB8fCB0eXBlb2YoTG9zcykgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBsb3NzLCBnb3QgJHtKU09OLnN0cmluZ2lmeShsb3NzKX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsTG9zcyA9IGxvc3M7XG4gICAgICAgIHRoaXMubW9kZWxMb3NzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IFByZWRpY3QoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxQcmVkaWN0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdtb2RlbFByZWRpY3QgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsUHJlZGljdDtcbiAgICB9XG4gICAgc2V0IFByZWRpY3QocHJlZGljdCl7XG4gICAgICAgIGlmKCFwcmVkaWN0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgcHJlZGljdCwgZ290ICR7cHJlZGljdH1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsUHJlZGljdCA9IHByZWRpY3Q7XG4gICAgICAgIHRoaXMubW9kZWxQcmVkaWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IEZpdCgpe1xuICAgICAgICBpZighdGhpcy5tb2RlbEZpdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgbW9kZWxGaXQgaXMgbm90IHNldGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsRml0O1xuICAgIH1cbiAgICBzZXQgRml0KGZpdCl7XG4gICAgICAgIGlmKCFmaXQgfHwgdHlwZW9mKGZpdCkgIT09ICdmdW5jdGlvbicgKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgZml0LCBnb3QgJHtKU09OLnN0cmluZ2lmeShmaXQpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWxGaXQgPSBmaXQ7XG4gICAgICAgIHRoaXMubW9kZWxGaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgTnVtQ2xhc3Nlcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbE51bUNsYXNzZXM7XG4gICAgfVxuICAgIHNldCBOdW1DbGFzc2VzKG51bUNsYXNzZXMpe1xuICAgICAgICBpZih0eXBlb2YobnVtQ2xhc3NlcykgIT09ICdudW1iZXInIHx8IG51bUNsYXNzZXMgPD0gMCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IG51bUNsYXNzZXMsIGdvdCAke0pTT04uc3RyaW5naWZ5KG51bUNsYXNzZXMpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWxOdW1DbGFzc2VzID0gbnVtQ2xhc3NlcztcbiAgICB9XG5cbiAgICBnZXQgT25lSG90UHJlZGljdCgpe1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT50aGlzLm1vZGVsT25lSG90UHJlZGljdChzYW1wbGVzLCB0aGlzLk51bUNsYXNzZXMpO1xuICAgIH1cbiAgICBzZXQgT25lSG90UHJlZGljdChvbmVIb3RQcmVkaWN0KXtcbiAgICAgICAgaWYoIW9uZUhvdFByZWRpY3QgfHwgdHlwZW9mKG9uZUhvdFByZWRpY3QpICE9PSAnZnVuY3Rpb24nICl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IG9uZUhvdFByZWRpY3QsIGdvdCAke0pTT04uc3RyaW5naWZ5KG9uZUhvdFByZWRpY3QpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWxPbmVIb3RQcmVkaWN0ID0gb25lSG90UHJlZGljdDtcbiAgICAgICAgdGhpcy5tb2RlbE9uZUhvdFByZWRpY3QuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRNb2RlbEJ5Q29uZmlnKG5ldENvbmZpZyl7XG4gICAgICAgIGNvbnN0IE51bUNsYXNzZXMgPSBuZXRDb25maWcuTnVtQ2xhc3NlcztcbiAgICAgICAgY29uc3Qge0xvc3MsIFByZWRpY3QsIE9uZUhvdFByZWRpY3QsIEZpdH0gPSBuZXRDb25maWcuTW9kZWw7XG4gICAgICAgIHRoaXMuTG9zcyA9IExvc3M7XG4gICAgICAgIHRoaXMuRml0ID0gRml0O1xuICAgICAgICB0aGlzLlByZWRpY3QgPSBQcmVkaWN0O1xuICAgICAgICB0aGlzLk9uZUhvdFByZWRpY3QgPSBPbmVIb3RQcmVkaWN0O1xuICAgICAgICB0aGlzLk51bUNsYXNzZXMgPSBOdW1DbGFzc2VzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1cGVydmlzZWRNb2RlbHNNaXhpbnM7XG4iLCJjb25zdCBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXQgTW9kZWxzKCl7XG4gICAgICAgIHRoaXMubW9kZWxzO1xuICAgIH1cbiAgICBzZXQgTW9kZWxzKG1vZGVscyl7XG4gICAgICAgIHRoaXMubW9kZWxzID0gbW9kZWxzO1xuICAgIH1cbiAgICBnZXQgTG9zcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbExvc3M7XG4gICAgfVxuICAgIHNldCBMb3NzKGxvc3Mpe1xuICAgICAgICB0aGlzLm1vZGVsTG9zcyA9IGxvc3M7XG4gICAgICAgIHRoaXMubW9kZWxMb3NzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IFByZWRpY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxQcmVkaWN0O1xuICAgIH1cbiAgICBzZXQgUHJlZGljdChwcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbFByZWRpY3QgPSBwcmVkaWN0O1xuICAgICAgICB0aGlzLm1vZGVsUHJlZGljdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxGaXQ7XG4gICAgfVxuICAgIHNldCBGaXQoZml0KXtcbiAgICAgICAgdGhpcy5tb2RlbEZpdCA9IGZpdDtcbiAgICAgICAgdGhpcy5tb2RlbEZpdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNldE1vZGVsQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgY29uc3QgTnVtQ2xhc3NlcyA9IG5ldENvbmZpZy5OdW1DbGFzc2VzO1xuICAgICAgICBjb25zdCB7TG9zcywgUHJlZGljdCwgT25lSG90UHJlZGljdCwgRml0fSA9IG5ldENvbmZpZy5Nb2RlbDtcbiAgICAgICAgaWYoIUxvc3Mpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xvc3MgbXVzdCBiZSBkZWZpbmQgYXMgYSB0ZW5zb3IgZnVuY3Rpb24gb3IgYWNxdWlyZSBmcm9tIENhdXNhbE5ldC5tb2RlbHMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoTG9zcykgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5Mb3NzID0gTG9zcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoRml0KSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aGlzLkZpdCA9IEZpdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoUHJlZGljdCkgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5QcmVkaWN0ID0gUHJlZGljdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoT25lSG90UHJlZGljdCkgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5PbmVIb3RQcmVkaWN0ID0gT25lSG90UHJlZGljdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihOdW1DbGFzc2VzID4gMCl7XG4gICAgICAgICAgICB0aGlzLk51bUNsYXNzZXMgPSBOdW1DbGFzc2VzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTnVtQ2xhc3NlcyBmcm9tIG5ldENvbmZpZyBtdXN0IGJlIG5vbiB6ZXJvLCBwb3NpdGl2ZSBudW1iZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVuU3VwZXJ2aXNlZE1vZGVsc01peGlucztcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=