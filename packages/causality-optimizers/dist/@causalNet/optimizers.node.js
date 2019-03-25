(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/optimizers"] = factory(require("causal-net.core"), require("causal-net.utils"));
	else
		root["@causalNet/optimizers"] = factory(root["causal-net.core"], root["causal-net.utils"]);
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
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./src/StochasticGradientDescent/SGDFitParams.mixins.js":
/*!**************************************************************!*\
  !*** ./src/StochasticGradientDescent/SGDFitParams.mixins.js ***!
  \**************************************************************/
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

  const SGDFitParamsMixins = BaseOptimizerClass => class extends BaseOptimizerClass {
    fit(lossFn, trainableVars) {
      return this.trainer.minimize(lossFn, true, trainableVars);
    }

  };

  var _default = SGDFitParamsMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/StochasticGradientDescent/adamOptimizer.js":
/*!********************************************************!*\
  !*** ./src/StochasticGradientDescent/adamOptimizer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./functor */ "./src/StochasticGradientDescent/functor.js"), __webpack_require__(/*! ./SGDFitParams.mixins */ "./src/StochasticGradientDescent/SGDFitParams.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _functor, _SGDFitParams) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _functor = _interopRequireDefault(_functor);
  _SGDFitParams = _interopRequireDefault(_SGDFitParams);

  class AdamOptimizer extends _causalNet2.platform.mixWith(_causalNet.Tensor, [_SGDFitParams.default]) {
    constructor(optimizerParams = {}) {
      super();
      let DefaultParameters = {
        beta1: 0.1,
        beta2: 0.2,
        epsilon: 0.03
      };

      const {
        learningRate,
        beta1,
        beta2,
        epsilon
      } = _functor.default.mergeParams(optimizerParams, DefaultParameters);

      this.params = {
        learningRate,
        beta1,
        beta2,
        epsilon
      };
      this.trainer = this.T.train.adam(learningRate, beta1, beta2, epsilon);
    }

    get Params() {
      return this.params;
    }

  }

  _exports.default = AdamOptimizer;
});

/***/ }),

/***/ "./src/StochasticGradientDescent/causalNetSGDOptimizer.js":
/*!****************************************************************!*\
  !*** ./src/StochasticGradientDescent/causalNetSGDOptimizer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./adamOptimizer */ "./src/StochasticGradientDescent/adamOptimizer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _adamOptimizer) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _adamOptimizer = _interopRequireDefault(_adamOptimizer);

  /**
   * This CausalNetSGDOptimizer provide SGD optimizers based on Tensorflowjs optimizer
   *
   * @class CausalNetSGDOptimizer
   */
  class CausalNetSGDOptimizer {
    constructor() {}

    adam(optimizerParams) {
      return new _adamOptimizer.default(optimizerParams);
    }

  }

  var _default = new CausalNetSGDOptimizer();

  _exports.default = _default;
});

/***/ }),

/***/ "./src/StochasticGradientDescent/functor.js":
/*!**************************************************!*\
  !*** ./src/StochasticGradientDescent/functor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Functor extends _causalNet.Functor {
    constructor() {
      super();
    }

    mergeParams(optimizerParams, defaultOptimizerParameters) {
      const R = this.R;
      return R.mergeDeepLeft(optimizerParams, defaultOptimizerParameters);
    }

  }

  var _default = new Functor();

  _exports.default = _default;
});

/***/ }),

/***/ "./src/StochasticGradientDescent/index.js":
/*!************************************************!*\
  !*** ./src/StochasticGradientDescent/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./causalNetSGDOptimizer */ "./src/StochasticGradientDescent/causalNetSGDOptimizer.js"), __webpack_require__(/*! ./SGDFitParams.mixins */ "./src/StochasticGradientDescent/SGDFitParams.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNetSGDOptimizer, _SGDFitParams) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "causalNetSGDOptimizer", {
    enumerable: true,
    get: function () {
      return _causalNetSGDOptimizer.default;
    }
  });
  Object.defineProperty(_exports, "SGDFitParamsMixins", {
    enumerable: true,
    get: function () {
      return _SGDFitParams.default;
    }
  });
  _causalNetSGDOptimizer = _interopRequireDefault(_causalNetSGDOptimizer);
  _SGDFitParams = _interopRequireDefault(_SGDFitParams);
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./StochasticGradientDescent/index */ "./src/StochasticGradientDescent/index.js"), __webpack_require__(/*! ./trainer.mixins */ "./src/trainer.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _index, _trainer) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "causalNetSGDOptimizer", {
    enumerable: true,
    get: function () {
      return _index.causalNetSGDOptimizer;
    }
  });
  Object.defineProperty(_exports, "TrainerMixins", {
    enumerable: true,
    get: function () {
      return _trainer.default;
    }
  });
  _trainer = _interopRequireDefault(_trainer);
});

/***/ }),

/***/ "./src/trainer.mixins.js":
/*!*******************************!*\
  !*** ./src/trainer.mixins.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const TrainerMixins = BasePipelineClass => class extends BasePipelineClass {
    get Trainer() {
      const T = this.T;
      return (sampleTensor, labelTensor, Loss = this.LossModel, Optimizer = this.Optimizer) => {
        const LossFn = () => {
          return T.tidy(() => {
            return Loss(sampleTensor, labelTensor);
          });
        };

        return Optimizer.fit(LossFn);
      };
    }

    get Optimizer() {
      if (!this.optimizer) {
        throw Error('optimizer is not set');
      }

      return this.optimizer;
    }

    set Optimizer(optimizer) {
      this.optimizer = optimizer;
    }

    get TrainData() {
      if (!this.trainData) {
        throw Error('trainData is not set');
      }

      return this.trainData;
    }

    set TrainData(trainData) {
      this.trainData = trainData;
    }

    train(numIter = 10) {
      for (let iter of new Array(numIter).map((d, i) => i)) {
        return 0;
      }
    }

    test() {}

    setByConfig(pipelineConfig) {
      if (super.setByConfig) {
        super.setByConfig(pipelineConfig);
      }

      this.logger.groupBegin('set Trainer by config');
      const Net = pipelineConfig.Net;

      if (!Net) {
        throw Error(`Net is not set in ${JSON.stringify(pipelineConfig)}`);
      }

      const {
        Optimizer
      } = Net;

      if (!Optimizer) {
        throw Error(`Model is not set in ${JSON.stringify(Net)}`);
      }

      this.Optimizer = Optimizer;

      if (!pipelineConfig.Dataset) {
        throw Error(`Dataset is not set in ${JSON.stringify(pipelineConfig)}`);
      }

      this.TrainData = pipelineConfig.Dataset.TrainData;
      this.TestData = pipelineConfig.Dataset.TestData;
      this.ValidateData = pipelineConfig.Dataset.ValidateData;
      this.logger.groupEnd();
    }

  };

  var _default = TrainerMixins;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvU0dERml0UGFyYW1zLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9hZGFtT3B0aW1pemVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9TdG9jaGFzdGljR3JhZGllbnREZXNjZW50L2NhdXNhbE5ldFNHRE9wdGltaXplci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy90cmFpbmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiU0dERml0UGFyYW1zTWl4aW5zIiwiQmFzZU9wdGltaXplckNsYXNzIiwiZml0IiwibG9zc0ZuIiwidHJhaW5hYmxlVmFycyIsInRyYWluZXIiLCJtaW5pbWl6ZSIsIkFkYW1PcHRpbWl6ZXIiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiY29uc3RydWN0b3IiLCJvcHRpbWl6ZXJQYXJhbXMiLCJEZWZhdWx0UGFyYW1ldGVycyIsImJldGExIiwiYmV0YTIiLCJlcHNpbG9uIiwibGVhcm5pbmdSYXRlIiwiZnVuY3RvciIsIm1lcmdlUGFyYW1zIiwicGFyYW1zIiwiVCIsInRyYWluIiwiYWRhbSIsIlBhcmFtcyIsIkNhdXNhbE5ldFNHRE9wdGltaXplciIsIkZ1bmN0b3IiLCJCYXNlRnVuY3RvciIsImRlZmF1bHRPcHRpbWl6ZXJQYXJhbWV0ZXJzIiwiUiIsIm1lcmdlRGVlcExlZnQiLCJUcmFpbmVyTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJUcmFpbmVyIiwic2FtcGxlVGVuc29yIiwibGFiZWxUZW5zb3IiLCJMb3NzIiwiTG9zc01vZGVsIiwiT3B0aW1pemVyIiwiTG9zc0ZuIiwidGlkeSIsIm9wdGltaXplciIsIkVycm9yIiwiVHJhaW5EYXRhIiwidHJhaW5EYXRhIiwibnVtSXRlciIsIml0ZXIiLCJBcnJheSIsIm1hcCIsImQiLCJpIiwidGVzdCIsInNldEJ5Q29uZmlnIiwicGlwZWxpbmVDb25maWciLCJsb2dnZXIiLCJncm91cEJlZ2luIiwiTmV0IiwiSlNPTiIsInN0cmluZ2lmeSIsIkRhdGFzZXQiLCJUZXN0RGF0YSIsIlZhbGlkYXRlRGF0YSIsImdyb3VwRW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsUUFBTUEsa0JBQWtCLEdBQUlDLGtCQUFELElBQXdCLGNBQWNBLGtCQUFkLENBQWdDO0FBQy9FQyxPQUFHLENBQUNDLE1BQUQsRUFBU0MsYUFBVCxFQUF1QjtBQUN0QixhQUFPLEtBQUtDLE9BQUwsQ0FBYUMsUUFBYixDQUFzQkgsTUFBdEIsRUFBOEIsSUFBOUIsRUFBb0NDLGFBQXBDLENBQVA7QUFDSDs7QUFIOEUsR0FBbkY7O2lCQU1lSixrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxRQUFNTyxhQUFOLFNBQTRCQyxxQkFBU0MsT0FBVCxDQUFpQkMsaUJBQWpCLEVBQ3ZDLENBQUVWLHFCQUFGLENBRHVDLENBQTVCLENBQ1k7QUFDdkJXLGVBQVcsQ0FBQ0MsZUFBZSxHQUFDLEVBQWpCLEVBQW9CO0FBQzNCO0FBQ0EsVUFBSUMsaUJBQWlCLEdBQUc7QUFBQ0MsYUFBSyxFQUFFLEdBQVI7QUFBYUMsYUFBSyxFQUFFLEdBQXBCO0FBQXlCQyxlQUFPLEVBQUM7QUFBakMsT0FBeEI7O0FBQ0EsWUFBTTtBQUFDQyxvQkFBRDtBQUFlSCxhQUFmO0FBQXNCQyxhQUF0QjtBQUE2QkM7QUFBN0IsVUFBd0NFLGlCQUFRQyxXQUFSLENBQW9CUCxlQUFwQixFQUFxQ0MsaUJBQXJDLENBQTlDOztBQUNBLFdBQUtPLE1BQUwsR0FBYztBQUFFSCxvQkFBRjtBQUFnQkgsYUFBaEI7QUFBdUJDLGFBQXZCO0FBQThCQztBQUE5QixPQUFkO0FBQ0EsV0FBS1gsT0FBTCxHQUFlLEtBQUtnQixDQUFMLENBQU9DLEtBQVAsQ0FBYUMsSUFBYixDQUFrQk4sWUFBbEIsRUFBZ0NILEtBQWhDLEVBQXVDQyxLQUF2QyxFQUE4Q0MsT0FBOUMsQ0FBZjtBQUNIOztBQUVELFFBQUlRLE1BQUosR0FBWTtBQUNSLGFBQU8sS0FBS0osTUFBWjtBQUNIOztBQVhzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKM0I7Ozs7O0FBS0EsUUFBTUsscUJBQU4sQ0FBMkI7QUFDdkJkLGVBQVcsR0FBRSxDQUNaOztBQUNEWSxRQUFJLENBQUNYLGVBQUQsRUFBaUI7QUFDakIsYUFBTyxJQUFJTCxzQkFBSixDQUFrQkssZUFBbEIsQ0FBUDtBQUNIOztBQUxzQjs7aUJBUVosSUFBSWEscUJBQUosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZixRQUFNQyxPQUFOLFNBQXNCQyxrQkFBdEIsQ0FBaUM7QUFDN0JoQixlQUFXLEdBQUU7QUFDVDtBQUNIOztBQUVEUSxlQUFXLENBQUNQLGVBQUQsRUFBa0JnQiwwQkFBbEIsRUFBNkM7QUFDcEQsWUFBTUMsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxhQUFPQSxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JsQixlQUFoQixFQUFpQ2dCLDBCQUFqQyxDQUFQO0FBQ0g7O0FBUjRCOztpQkFXbEIsSUFBSUYsT0FBSixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZixRQUFNSyxhQUFhLEdBQUlDLGlCQUFELElBQXNCLGNBQWNBLGlCQUFkLENBQStCO0FBRXZFLFFBQUlDLE9BQUosR0FBYTtBQUNULFlBQU1aLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsYUFBTyxDQUFDYSxZQUFELEVBQWVDLFdBQWYsRUFBNEJDLElBQUksR0FBQyxLQUFLQyxTQUF0QyxFQUFpREMsU0FBUyxHQUFDLEtBQUtBLFNBQWhFLEtBQTRFO0FBQy9FLGNBQU1DLE1BQU0sR0FBRyxNQUFJO0FBQ2YsaUJBQU9sQixDQUFDLENBQUNtQixJQUFGLENBQVEsTUFBSTtBQUFFLG1CQUFPSixJQUFJLENBQUNGLFlBQUQsRUFBZUMsV0FBZixDQUFYO0FBQXlDLFdBQXZELENBQVA7QUFDSCxTQUZEOztBQUdBLGVBQU9HLFNBQVMsQ0FBQ3BDLEdBQVYsQ0FBY3FDLE1BQWQsQ0FBUDtBQUNILE9BTEQ7QUFNSDs7QUFFRCxRQUFJRCxTQUFKLEdBQWU7QUFDWCxVQUFHLENBQUMsS0FBS0csU0FBVCxFQUFtQjtBQUNmLGNBQU1DLEtBQUssQ0FBQyxzQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsYUFBTyxLQUFLRCxTQUFaO0FBQ0g7O0FBR0QsUUFBSUgsU0FBSixDQUFjRyxTQUFkLEVBQXdCO0FBQ3BCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0g7O0FBRUQsUUFBSUUsU0FBSixHQUFlO0FBQ1gsVUFBRyxDQUFDLEtBQUtDLFNBQVQsRUFBbUI7QUFDZixjQUFNRixLQUFLLENBQUMsc0JBQUQsQ0FBWDtBQUNIOztBQUNELGFBQU8sS0FBS0UsU0FBWjtBQUNIOztBQUNELFFBQUlELFNBQUosQ0FBY0MsU0FBZCxFQUF3QjtBQUNwQixXQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIOztBQUVEdEIsU0FBSyxDQUFDdUIsT0FBTyxHQUFDLEVBQVQsRUFBWTtBQUNiLFdBQUksSUFBSUMsSUFBUixJQUFnQixJQUFJQyxLQUFKLENBQVVGLE9BQVYsRUFBbUJHLEdBQW5CLENBQXVCLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxLQUFPQSxDQUE5QixDQUFoQixFQUFpRDtBQUM3QyxlQUFPLENBQVA7QUFDSDtBQUNKOztBQUVEQyxRQUFJLEdBQUUsQ0FFTDs7QUFFREMsZUFBVyxDQUFDQyxjQUFELEVBQWdCO0FBQ3ZCLFVBQUcsTUFBTUQsV0FBVCxFQUFxQjtBQUNqQixjQUFNQSxXQUFOLENBQWtCQyxjQUFsQjtBQUNIOztBQUNELFdBQUtDLE1BQUwsQ0FBWUMsVUFBWixDQUF1Qix1QkFBdkI7QUFDQSxZQUFNQyxHQUFHLEdBQUdILGNBQWMsQ0FBQ0csR0FBM0I7O0FBQ0EsVUFBRyxDQUFDQSxHQUFKLEVBQVE7QUFDSixjQUFNZCxLQUFLLENBQUUscUJBQW9CZSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsY0FBZixDQUErQixFQUFyRCxDQUFYO0FBQ0g7O0FBQ0QsWUFBTTtBQUFFZjtBQUFGLFVBQWdCa0IsR0FBdEI7O0FBQ0EsVUFBRyxDQUFDbEIsU0FBSixFQUFjO0FBQ1YsY0FBTUksS0FBSyxDQUFFLHVCQUFzQmUsSUFBSSxDQUFDQyxTQUFMLENBQWVGLEdBQWYsQ0FBb0IsRUFBNUMsQ0FBWDtBQUNIOztBQUNELFdBQUtsQixTQUFMLEdBQWlCQSxTQUFqQjs7QUFDQSxVQUFHLENBQUNlLGNBQWMsQ0FBQ00sT0FBbkIsRUFBMkI7QUFDdkIsY0FBTWpCLEtBQUssQ0FBRSx5QkFBd0JlLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxjQUFmLENBQStCLEVBQXpELENBQVg7QUFDSDs7QUFDRCxXQUFLVixTQUFMLEdBQWlCVSxjQUFjLENBQUNNLE9BQWYsQ0FBdUJoQixTQUF4QztBQUNBLFdBQUtpQixRQUFMLEdBQWdCUCxjQUFjLENBQUNNLE9BQWYsQ0FBdUJDLFFBQXZDO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQlIsY0FBYyxDQUFDTSxPQUFmLENBQXVCRSxZQUEzQztBQUNBLFdBQUtQLE1BQUwsQ0FBWVEsUUFBWjtBQUNIOztBQWpFc0UsR0FBM0U7O2lCQW9FZS9CLGE7Ozs7Ozs7Ozs7Ozs7QUN0RWYsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJjb25zdCBTR0RGaXRQYXJhbXNNaXhpbnMgPSAoQmFzZU9wdGltaXplckNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VPcHRpbWl6ZXJDbGFzc3tcbiAgICBmaXQobG9zc0ZuLCB0cmFpbmFibGVWYXJzKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhaW5lci5taW5pbWl6ZShsb3NzRm4sIHRydWUsIHRyYWluYWJsZVZhcnMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNHREZpdFBhcmFtc01peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU0dERml0UGFyYW1zTWl4aW5zIH0gZnJvbSAnLi9TR0RGaXRQYXJhbXMubWl4aW5zJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYW1PcHRpbWl6ZXIgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFxuICAgIFsgU0dERml0UGFyYW1zTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKG9wdGltaXplclBhcmFtcz17fSl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldCBEZWZhdWx0UGFyYW1ldGVycyA9IHtiZXRhMTogMC4xLCBiZXRhMjogMC4yLCBlcHNpbG9uOjAuMDN9O1xuICAgICAgICBjb25zdCB7bGVhcm5pbmdSYXRlLCBiZXRhMSwgYmV0YTIsIGVwc2lsb259ID0gZnVuY3Rvci5tZXJnZVBhcmFtcyhvcHRpbWl6ZXJQYXJhbXMsIERlZmF1bHRQYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSB7IGxlYXJuaW5nUmF0ZSwgYmV0YTEsIGJldGEyLCBlcHNpbG9uIH07XG4gICAgICAgIHRoaXMudHJhaW5lciA9IHRoaXMuVC50cmFpbi5hZGFtKGxlYXJuaW5nUmF0ZSwgYmV0YTEsIGJldGEyLCBlcHNpbG9uKTtcbiAgICB9XG5cbiAgICBnZXQgUGFyYW1zKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtcztcbiAgICB9XG59IiwiaW1wb3J0IHtkZWZhdWx0IGFzIEFkYW1PcHRpbWl6ZXJ9IGZyb20gJy4vYWRhbU9wdGltaXplcic7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0U0dET3B0aW1pemVyIHByb3ZpZGUgU0dEIG9wdGltaXplcnMgYmFzZWQgb24gVGVuc29yZmxvd2pzIG9wdGltaXplclxuICpcbiAqIEBjbGFzcyBDYXVzYWxOZXRTR0RPcHRpbWl6ZXJcbiAqL1xuY2xhc3MgQ2F1c2FsTmV0U0dET3B0aW1pemVye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIGFkYW0ob3B0aW1pemVyUGFyYW1zKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBZGFtT3B0aW1pemVyKG9wdGltaXplclBhcmFtcyk7IFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFNHRE9wdGltaXplcigpOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuY2xhc3MgRnVuY3RvciBleHRlbmRzIEJhc2VGdW5jdG9ye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIG1lcmdlUGFyYW1zKG9wdGltaXplclBhcmFtcywgZGVmYXVsdE9wdGltaXplclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5tZXJnZURlZXBMZWZ0KG9wdGltaXplclBhcmFtcywgZGVmYXVsdE9wdGltaXplclBhcmFtZXRlcnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5jb25zdCBUcmFpbmVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgXG4gICAgZ2V0IFRyYWluZXIoKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgcmV0dXJuIChzYW1wbGVUZW5zb3IsIGxhYmVsVGVuc29yLCBMb3NzPXRoaXMuTG9zc01vZGVsLCBPcHRpbWl6ZXI9dGhpcy5PcHRpbWl6ZXIpPT57XG4gICAgICAgICAgICBjb25zdCBMb3NzRm4gPSAoKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBULnRpZHkoICgpPT57IHJldHVybiBMb3NzKHNhbXBsZVRlbnNvciwgbGFiZWxUZW5zb3IpOyB9ICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIE9wdGltaXplci5maXQoTG9zc0ZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgT3B0aW1pemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLm9wdGltaXplcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignb3B0aW1pemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpbWl6ZXI7XG4gICAgfVxuICAgIFxuXG4gICAgc2V0IE9wdGltaXplcihvcHRpbWl6ZXIpe1xuICAgICAgICB0aGlzLm9wdGltaXplciA9IG9wdGltaXplcjtcbiAgICB9XG5cbiAgICBnZXQgVHJhaW5EYXRhKCl7XG4gICAgICAgIGlmKCF0aGlzLnRyYWluRGF0YSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndHJhaW5EYXRhIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50cmFpbkRhdGE7XG4gICAgfVxuICAgIHNldCBUcmFpbkRhdGEodHJhaW5EYXRhKXtcbiAgICAgICAgdGhpcy50cmFpbkRhdGEgPSB0cmFpbkRhdGE7XG4gICAgfVxuXG4gICAgdHJhaW4obnVtSXRlcj0xMCl7XG4gICAgICAgIGZvcihsZXQgaXRlciBvZiBuZXcgQXJyYXkobnVtSXRlcikubWFwKChkLGkpPT5pKSl7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRlc3QoKXtcblxuICAgIH1cblxuICAgIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgaWYoc3VwZXIuc2V0QnlDb25maWcpe1xuICAgICAgICAgICAgc3VwZXIuc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nZ2VyLmdyb3VwQmVnaW4oJ3NldCBUcmFpbmVyIGJ5IGNvbmZpZycpO1xuICAgICAgICBjb25zdCBOZXQgPSBwaXBlbGluZUNvbmZpZy5OZXQ7XG4gICAgICAgIGlmKCFOZXQpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE5ldCBpcyBub3Qgc2V0IGluICR7SlNPTi5zdHJpbmdpZnkocGlwZWxpbmVDb25maWcpfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgT3B0aW1pemVyIH0gPSBOZXQ7XG4gICAgICAgIGlmKCFPcHRpbWl6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE1vZGVsIGlzIG5vdCBzZXQgaW4gJHtKU09OLnN0cmluZ2lmeShOZXQpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuT3B0aW1pemVyID0gT3B0aW1pemVyO1xuICAgICAgICBpZighcGlwZWxpbmVDb25maWcuRGF0YXNldCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgRGF0YXNldCBpcyBub3Qgc2V0IGluICR7SlNPTi5zdHJpbmdpZnkocGlwZWxpbmVDb25maWcpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuVHJhaW5EYXRhID0gcGlwZWxpbmVDb25maWcuRGF0YXNldC5UcmFpbkRhdGE7XG4gICAgICAgIHRoaXMuVGVzdERhdGEgPSBwaXBlbGluZUNvbmZpZy5EYXRhc2V0LlRlc3REYXRhO1xuICAgICAgICB0aGlzLlZhbGlkYXRlRGF0YSA9IHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuVmFsaWRhdGVEYXRhO1xuICAgICAgICB0aGlzLmxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWluZXJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==