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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./adamOptimizer */ "./src/StochasticGradientDescent/adamOptimizer.js"), __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./SGDFitParams.mixins */ "./src/StochasticGradientDescent/SGDFitParams.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _adamOptimizer, _causalNet, _causalNet2, _SGDFitParams) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _adamOptimizer = _interopRequireDefault(_adamOptimizer);
  _SGDFitParams = _interopRequireDefault(_SGDFitParams);

  /**
   * This class provides optimizing methods which can be accessed via **causalNetSGDOptimizer** instance.
   *
   * @class CausalNetSGDOptimizer
   * @extends {Tensor}
   * @example
   * [EXAMPLE ../examples/causalNetSGDOptimizers.babel.js]
   */
  class CausalNetSGDOptimizer extends _causalNet2.platform.mixWith(_causalNet.Tensor, [_SGDFitParams.default]) {
    constructor() {
      super();
    }

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

/***/ "./src/evaluator.mixins.js":
/*!*********************************!*\
  !*** ./src/evaluator.mixins.js ***!
  \*********************************/
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

  /**
   * This mixin class provides methods: **test** and 
   * handle **TestDataGenerator** setting of pipelineConfig.Dataset.
   *
   * @class EvaluatorMixins
   * @extends {BasePipelineClass}
   * @example
   * [EXAMPLE ../examples/trainer.mixins.babel.js]
   */
  const EvaluatorMixins = BasePipelineClass => class extends BasePipelineClass {
    get TestDataGenerator() {
      if (!this.testDataGenerator) {
        throw Error('testDataGenerator is not set');
      }

      return this.testDataGenerator;
    }

    set TestDataGenerator(testDataGenerator) {
      this.testDataGenerator = testDataGenerator;
    }

    async test(batchSize = 32) {
      const T = this.T,
            R = this.F.CoreFunctor;
      const TestDataGenerator = this.TestDataGenerator,
            OneHotPredictModel = this.OneHotPredictModel;
      return new Promise(async (resolve, reject) => {
        const testData = TestDataGenerator(batchSize);
        let pass = [];

        for await (let _ref of testData) {
          let {
            samples,
            labels
          } = _ref;
          let sampleTensor = T.tensor(samples).asType('float32');
          let labelTensor = T.tensor(labels).asType('float32');
          let predictLabelTensor = OneHotPredictModel(sampleTensor);
          let correctPredicts = predictLabelTensor.mul(labelTensor);
          pass = [...pass, ...(await correctPredicts.sum(1).data())];
        }

        let accuracy = R.mean(pass);
        resolve({
          accuracy,
          pass
        });
      });
    }

    setByConfig(pipelineConfig) {
      if (super.setByConfig) {
        super.setByConfig(pipelineConfig);
      }

      this.Logger.groupBegin('set Evaluator by config');
      this.TestDataGenerator = pipelineConfig.Dataset.TestDataGenerator;
      this.Logger.groupEnd();
    }

  };

  var _default = EvaluatorMixins;
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./StochasticGradientDescent/index */ "./src/StochasticGradientDescent/index.js"), __webpack_require__(/*! ./trainer.mixins */ "./src/trainer.mixins.js"), __webpack_require__(/*! ./evaluator.mixins */ "./src/evaluator.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _index, _trainer, _evaluator) {
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
  Object.defineProperty(_exports, "EvaluatorMixins", {
    enumerable: true,
    get: function () {
      return _evaluator.default;
    }
  });
  _trainer = _interopRequireDefault(_trainer);
  _evaluator = _interopRequireDefault(_evaluator);
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

  /**
   * This mixin class provides attributes: **Optimizer**, **Trainer**, **TrainDataGenerator**, 
   * methods **train**, handle **Optimizer** setting of pipelineConfig.Net
   * and **TrainDataGenerator** setting of pipelineConfig.Dataset.
   *
   * @class TrainerMixins
   * @extends {BasePipelineClass}
   * @example
   * [EXAMPLE ../examples/trainer.mixins.babel.js]
   */
  const TrainerMixins = BasePipelineClass => class extends BasePipelineClass {
    get Trainer() {
      const T = this.T;
      const Loss = this.LossModel,
            Optimizer = this.Optimizer;
      return (sampleTensor, labelTensor) => {
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

    get TrainDataGenerator() {
      if (!this.trainDataGenerator) {
        throw Error('TrainDataGenerator is not set');
      }

      return this.trainDataGenerator;
    }

    set TrainDataGenerator(TrainDataGenerator) {
      this.trainDataGenerator = TrainDataGenerator;
    }

    async train(numEpochs, batchSize) {
      const F = this.F,
            R = this.F.CoreFunctor,
            T = this.T;
      const TrainDataGenerator = this.TrainDataGenerator,
            Trainer = this.Trainer;
      let losses = [],
          logger = this.Logger;
      return new Promise(async (resolve, reject) => {
        logger.progressBegin(numEpochs);

        for (let epochIdx of F.range(numEpochs)) {
          const trainData = TrainDataGenerator(batchSize);
          let iterLosses = [];

          for await (let _ref of trainData) {
            let {
              samples,
              labels
            } = _ref;
            let sampleTensor = T.tensor(samples).asType('float32');
            let labelTensor = T.tensor(labels).asType('float32');
            let loss = Trainer(sampleTensor, labelTensor);
            iterLosses.push((await loss.data()));
          }

          losses.push(R.mean(iterLosses));
          iterLosses = [];
          logger.progressUpdate({
            epochIdx,
            losses,
            numEpochs
          });
        }

        logger.progressEnd();
        resolve({
          losses
        });
      });
    }

    setByConfig(pipelineConfig) {
      if (super.setByConfig) {
        super.setByConfig(pipelineConfig);
      }

      this.Logger.groupBegin('set Trainer by config');
      const {
        Optimizer
      } = pipelineConfig.Net;
      this.Optimizer = Optimizer;
      Optimizer.LayerRunner = this.LayerRunner;
      this.TrainDataGenerator = pipelineConfig.Dataset.TrainDataGenerator;
      this.Logger.groupEnd();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvU0dERml0UGFyYW1zLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9hZGFtT3B0aW1pemVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9TdG9jaGFzdGljR3JhZGllbnREZXNjZW50L2NhdXNhbE5ldFNHRE9wdGltaXplci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9ldmFsdWF0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy90cmFpbmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiU0dERml0UGFyYW1zTWl4aW5zIiwiQmFzZU9wdGltaXplckNsYXNzIiwiZml0IiwibG9zc0ZuIiwidHJhaW5hYmxlVmFycyIsInRyYWluZXIiLCJtaW5pbWl6ZSIsIkFkYW1PcHRpbWl6ZXIiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiY29uc3RydWN0b3IiLCJvcHRpbWl6ZXJQYXJhbXMiLCJEZWZhdWx0UGFyYW1ldGVycyIsImJldGExIiwiYmV0YTIiLCJlcHNpbG9uIiwibGVhcm5pbmdSYXRlIiwiZnVuY3RvciIsIm1lcmdlUGFyYW1zIiwicGFyYW1zIiwiVCIsInRyYWluIiwiYWRhbSIsIlBhcmFtcyIsIkNhdXNhbE5ldFNHRE9wdGltaXplciIsIkZ1bmN0b3IiLCJCYXNlRnVuY3RvciIsImRlZmF1bHRPcHRpbWl6ZXJQYXJhbWV0ZXJzIiwiUiIsIm1lcmdlRGVlcExlZnQiLCJFdmFsdWF0b3JNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIlRlc3REYXRhR2VuZXJhdG9yIiwidGVzdERhdGFHZW5lcmF0b3IiLCJFcnJvciIsInRlc3QiLCJiYXRjaFNpemUiLCJGIiwiQ29yZUZ1bmN0b3IiLCJPbmVIb3RQcmVkaWN0TW9kZWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRlc3REYXRhIiwicGFzcyIsInNhbXBsZXMiLCJsYWJlbHMiLCJzYW1wbGVUZW5zb3IiLCJ0ZW5zb3IiLCJhc1R5cGUiLCJsYWJlbFRlbnNvciIsInByZWRpY3RMYWJlbFRlbnNvciIsImNvcnJlY3RQcmVkaWN0cyIsIm11bCIsInN1bSIsImRhdGEiLCJhY2N1cmFjeSIsIm1lYW4iLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIkRhdGFzZXQiLCJncm91cEVuZCIsIlRyYWluZXJNaXhpbnMiLCJUcmFpbmVyIiwiTG9zcyIsIkxvc3NNb2RlbCIsIk9wdGltaXplciIsIkxvc3NGbiIsInRpZHkiLCJvcHRpbWl6ZXIiLCJUcmFpbkRhdGFHZW5lcmF0b3IiLCJ0cmFpbkRhdGFHZW5lcmF0b3IiLCJudW1FcG9jaHMiLCJsb3NzZXMiLCJsb2dnZXIiLCJwcm9ncmVzc0JlZ2luIiwiZXBvY2hJZHgiLCJyYW5nZSIsInRyYWluRGF0YSIsIml0ZXJMb3NzZXMiLCJsb3NzIiwicHVzaCIsInByb2dyZXNzVXBkYXRlIiwicHJvZ3Jlc3NFbmQiLCJOZXQiLCJMYXllclJ1bm5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLFFBQU1BLGtCQUFrQixHQUFJQyxrQkFBRCxJQUF3QixjQUFjQSxrQkFBZCxDQUFnQztBQUMvRUMsT0FBRyxDQUFDQyxNQUFELEVBQVNDLGFBQVQsRUFBdUI7QUFDdEIsYUFBTyxLQUFLQyxPQUFMLENBQWFDLFFB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LGdCQUFNLENBQUNRLElBQVAsQ0FBWXZELENBQUMsQ0FBQzZCLElBQUYsQ0FBT3dCLFVBQVAsQ0FBWjtBQUNBQSxvQkFBVSxHQUFHLEVBQWI7QUFDQUwsZ0JBQU0sQ0FBQ1EsY0FBUCxDQUFzQjtBQUFDTixvQkFBRDtBQUFXSCxrQkFBWDtBQUFtQkQ7QUFBbkIsV0FBdEI7QUFDSDs7QUFDREUsY0FBTSxDQUFDUyxXQUFQO0FBQ0E1QyxlQUFPLENBQUM7QUFBQ2tDO0FBQUQsU0FBRCxDQUFQO0FBQ0gsT0FqQk0sQ0FBUDtBQWtCSDs7QUFHRGpCLGVBQVcsQ0FBQ0MsY0FBRCxFQUFnQjtBQUN2QixVQUFHLE1BQU1ELFdBQVQsRUFBcUI7QUFDakIsY0FBTUEsV0FBTixDQUFrQkMsY0FBbEI7QUFDSDs7QUFDRCxXQUFLQyxNQUFMLENBQVlDLFVBQVosQ0FBdUIsdUJBQXZCO0FBQ0EsWUFBTTtBQUFFTztBQUFGLFVBQWdCVCxjQUFjLENBQUMyQixHQUFyQztBQUNBLFdBQUtsQixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBQSxlQUFTLENBQUNtQixXQUFWLEdBQXdCLEtBQUtBLFdBQTdCO0FBQ0EsV0FBS2Ysa0JBQUwsR0FBMEJiLGNBQWMsQ0FBQ0csT0FBZixDQUF1QlUsa0JBQWpEO0FBQ0EsV0FBS1osTUFBTCxDQUFZRyxRQUFaO0FBQ0g7O0FBdkVzRSxHQUEzRTs7aUJBMEVlQyxhOzs7Ozs7Ozs7Ozs7O0FDcEZmLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvb3B0aW1pemVycy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvb3B0aW1pemVyc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvb3B0aW1pemVyc1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiY29uc3QgU0dERml0UGFyYW1zTWl4aW5zID0gKEJhc2VPcHRpbWl6ZXJDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlT3B0aW1pemVyQ2xhc3N7XG4gICAgZml0KGxvc3NGbiwgdHJhaW5hYmxlVmFycyl7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYWluZXIubWluaW1pemUobG9zc0ZuLCB0cnVlLCB0cmFpbmFibGVWYXJzKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTR0RGaXRQYXJhbXNNaXhpbnM7IiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZnVuY3RvciB9IGZyb20gJy4vZnVuY3Rvcic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNHREZpdFBhcmFtc01peGlucyB9IGZyb20gJy4vU0dERml0UGFyYW1zLm1peGlucyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGFtT3B0aW1pemVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICBbIFNHREZpdFBhcmFtc01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3RvcihvcHRpbWl6ZXJQYXJhbXM9e30pe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgRGVmYXVsdFBhcmFtZXRlcnMgPSB7YmV0YTE6IDAuMSwgYmV0YTI6IDAuMiwgZXBzaWxvbjowLjAzfTtcbiAgICAgICAgY29uc3Qge2xlYXJuaW5nUmF0ZSwgYmV0YTEsIGJldGEyLCBlcHNpbG9ufSA9IGZ1bmN0b3IubWVyZ2VQYXJhbXMob3B0aW1pemVyUGFyYW1zLCBEZWZhdWx0UGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMucGFyYW1zID0geyBsZWFybmluZ1JhdGUsIGJldGExLCBiZXRhMiwgZXBzaWxvbiB9O1xuICAgICAgICB0aGlzLnRyYWluZXIgPSB0aGlzLlQudHJhaW4uYWRhbShsZWFybmluZ1JhdGUsIGJldGExLCBiZXRhMiwgZXBzaWxvbik7XG4gICAgfVxuXG4gICAgZ2V0IFBhcmFtcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXM7XG4gICAgfVxufSIsImltcG9ydCB7ZGVmYXVsdCBhcyBBZGFtT3B0aW1pemVyfSBmcm9tICcuL2FkYW1PcHRpbWl6ZXInO1xuaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU0dERml0UGFyYW1zTWl4aW5zIH0gZnJvbSAnLi9TR0RGaXRQYXJhbXMubWl4aW5zJztcbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBvcHRpbWl6aW5nIG1ldGhvZHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHZpYSAqKmNhdXNhbE5ldFNHRE9wdGltaXplcioqIGluc3RhbmNlLlxuICpcbiAqIEBjbGFzcyBDYXVzYWxOZXRTR0RPcHRpbWl6ZXJcbiAqIEBleHRlbmRzIHtUZW5zb3J9XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0U0dET3B0aW1pemVycy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0U0dET3B0aW1pemVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbU0dERml0UGFyYW1zTWl4aW5zXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWRhbShvcHRpbWl6ZXJQYXJhbXMpe1xuICAgICAgICByZXR1cm4gbmV3IEFkYW1PcHRpbWl6ZXIob3B0aW1pemVyUGFyYW1zKTsgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0U0dET3B0aW1pemVyKCk7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5jbGFzcyBGdW5jdG9yIGV4dGVuZHMgQmFzZUZ1bmN0b3J7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgXG4gICAgbWVyZ2VQYXJhbXMob3B0aW1pemVyUGFyYW1zLCBkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLm1lcmdlRGVlcExlZnQob3B0aW1pemVyUGFyYW1zLCBkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRnVuY3RvcigpOyIsIi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlcyBtZXRob2RzOiAqKnRlc3QqKiBhbmQgXG4gKiBoYW5kbGUgKipUZXN0RGF0YUdlbmVyYXRvcioqIHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcuRGF0YXNldC5cbiAqXG4gKiBAY2xhc3MgRXZhbHVhdG9yTWl4aW5zXG4gKiBAZXh0ZW5kcyB7QmFzZVBpcGVsaW5lQ2xhc3N9XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvdHJhaW5lci5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IEV2YWx1YXRvck1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIFxuICAgIGdldCBUZXN0RGF0YUdlbmVyYXRvcigpe1xuICAgICAgICBpZighdGhpcy50ZXN0RGF0YUdlbmVyYXRvcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndGVzdERhdGFHZW5lcmF0b3IgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3REYXRhR2VuZXJhdG9yO1xuICAgIH1cbiAgICBzZXQgVGVzdERhdGFHZW5lcmF0b3IodGVzdERhdGFHZW5lcmF0b3Ipe1xuICAgICAgICB0aGlzLnRlc3REYXRhR2VuZXJhdG9yID0gdGVzdERhdGFHZW5lcmF0b3I7XG4gICAgfVxuXG4gICAgYXN5bmMgdGVzdChiYXRjaFNpemU9MzIpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBSID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICBjb25zdCBUZXN0RGF0YUdlbmVyYXRvciA9IHRoaXMuVGVzdERhdGFHZW5lcmF0b3IsIE9uZUhvdFByZWRpY3RNb2RlbCA9IHRoaXMuT25lSG90UHJlZGljdE1vZGVsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIGNvbnN0IHRlc3REYXRhID0gVGVzdERhdGFHZW5lcmF0b3IoYmF0Y2hTaXplKTsgICAgXG4gICAgICAgICAgICBsZXQgcGFzcyA9IFtdO1xuICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQgeyBzYW1wbGVzLCBsYWJlbHMgfSBvZiB0ZXN0RGF0YSl7XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZVRlbnNvciA9IFQudGVuc29yKHNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbFRlbnNvciA9IFQudGVuc29yKGxhYmVscykuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgbGV0IHByZWRpY3RMYWJlbFRlbnNvciA9IE9uZUhvdFByZWRpY3RNb2RlbChzYW1wbGVUZW5zb3IpO1xuICAgICAgICAgICAgICAgIGxldCBjb3JyZWN0UHJlZGljdHMgPSBwcmVkaWN0TGFiZWxUZW5zb3IubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgICAgICAgICAgICBwYXNzID0gWy4uLnBhc3MsIC4uLiBhd2FpdCBjb3JyZWN0UHJlZGljdHMuc3VtKDEpLmRhdGEoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYWNjdXJhY3kgPSBSLm1lYW4ocGFzcyk7XG4gICAgICAgICAgICByZXNvbHZlKHthY2N1cmFjeSwgcGFzc30pOyAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IEV2YWx1YXRvciBieSBjb25maWcnKTtcbiAgICAgICAgdGhpcy5UZXN0RGF0YUdlbmVyYXRvciA9IHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuVGVzdERhdGFHZW5lcmF0b3I7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZhbHVhdG9yTWl4aW5zOyIsIi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlcyBhdHRyaWJ1dGVzOiAqKk9wdGltaXplcioqLCAqKlRyYWluZXIqKiwgKipUcmFpbkRhdGFHZW5lcmF0b3IqKiwgXG4gKiBtZXRob2RzICoqdHJhaW4qKiwgaGFuZGxlICoqT3B0aW1pemVyKiogc2V0dGluZyBvZiBwaXBlbGluZUNvbmZpZy5OZXRcbiAqIGFuZCAqKlRyYWluRGF0YUdlbmVyYXRvcioqIHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcuRGF0YXNldC5cbiAqXG4gKiBAY2xhc3MgVHJhaW5lck1peGluc1xuICogQGV4dGVuZHMge0Jhc2VQaXBlbGluZUNsYXNzfVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3RyYWluZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBUcmFpbmVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgXG4gICAgZ2V0IFRyYWluZXIoKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgY29uc3QgTG9zcz10aGlzLkxvc3NNb2RlbCwgT3B0aW1pemVyPXRoaXMuT3B0aW1pemVyO1xuICAgICAgICByZXR1cm4gKHNhbXBsZVRlbnNvciwgbGFiZWxUZW5zb3IpPT57XG4gICAgICAgICAgICBjb25zdCBMb3NzRm4gPSAoKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBULnRpZHkoICgpPT57IHJldHVybiBMb3NzKHNhbXBsZVRlbnNvciwgbGFiZWxUZW5zb3IpOyB9ICk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIE9wdGltaXplci5maXQoTG9zc0ZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXQgT3B0aW1pemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLm9wdGltaXplcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignb3B0aW1pemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpbWl6ZXI7XG4gICAgfVxuICAgIFxuXG4gICAgc2V0IE9wdGltaXplcihvcHRpbWl6ZXIpe1xuICAgICAgICB0aGlzLm9wdGltaXplciA9IG9wdGltaXplcjtcbiAgICB9XG5cbiAgICBnZXQgVHJhaW5EYXRhR2VuZXJhdG9yKCl7XG4gICAgICAgIGlmKCF0aGlzLnRyYWluRGF0YUdlbmVyYXRvcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignVHJhaW5EYXRhR2VuZXJhdG9yIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50cmFpbkRhdGFHZW5lcmF0b3I7XG4gICAgfVxuICAgIHNldCBUcmFpbkRhdGFHZW5lcmF0b3IoVHJhaW5EYXRhR2VuZXJhdG9yKXtcbiAgICAgICAgdGhpcy50cmFpbkRhdGFHZW5lcmF0b3IgPSBUcmFpbkRhdGFHZW5lcmF0b3I7XG4gICAgfVxuXG4gICAgYXN5bmMgdHJhaW4obnVtRXBvY2hzLCBiYXRjaFNpemUpe1xuICAgICAgICBcbiAgICAgICAgY29uc3QgRiA9IHRoaXMuRiwgUiA9IHRoaXMuRi5Db3JlRnVuY3RvciwgVCA9IHRoaXMuVDtcbiAgICAgICAgY29uc3QgVHJhaW5EYXRhR2VuZXJhdG9yID0gdGhpcy5UcmFpbkRhdGFHZW5lcmF0b3IsIFRyYWluZXIgPSB0aGlzLlRyYWluZXI7XG4gICAgICAgIGxldCBsb3NzZXMgPSBbXSwgbG9nZ2VyID0gdGhpcy5Mb2dnZXI7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgbG9nZ2VyLnByb2dyZXNzQmVnaW4obnVtRXBvY2hzKTtcbiAgICAgICAgICAgIGZvcihsZXQgZXBvY2hJZHggb2YgRi5yYW5nZShudW1FcG9jaHMpKXtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFpbkRhdGEgPSBUcmFpbkRhdGFHZW5lcmF0b3IoYmF0Y2hTaXplKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlckxvc3NlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciBhd2FpdCAobGV0IHsgc2FtcGxlcywgbGFiZWxzIH0gb2YgdHJhaW5EYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZVRlbnNvciA9IFQudGVuc29yKHNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxUZW5zb3IgPSBULnRlbnNvcihsYWJlbHMpLmFzVHlwZSgnZmxvYXQzMicpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbG9zcyA9IFRyYWluZXIoc2FtcGxlVGVuc29yLCBsYWJlbFRlbnNvcik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJMb3NzZXMucHVzaChhd2FpdCBsb3NzLmRhdGEoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvc3Nlcy5wdXNoKFIubWVhbihpdGVyTG9zc2VzKSk7XG4gICAgICAgICAgICAgICAgaXRlckxvc3NlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5wcm9ncmVzc1VwZGF0ZSh7ZXBvY2hJZHgsIGxvc3NlcywgbnVtRXBvY2hzfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2dnZXIucHJvZ3Jlc3NFbmQoKTtcbiAgICAgICAgICAgIHJlc29sdmUoe2xvc3Nlc30pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgaWYoc3VwZXIuc2V0QnlDb25maWcpe1xuICAgICAgICAgICAgc3VwZXIuc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3NldCBUcmFpbmVyIGJ5IGNvbmZpZycpO1xuICAgICAgICBjb25zdCB7IE9wdGltaXplciB9ID0gcGlwZWxpbmVDb25maWcuTmV0O1xuICAgICAgICB0aGlzLk9wdGltaXplciA9IE9wdGltaXplcjtcbiAgICAgICAgT3B0aW1pemVyLkxheWVyUnVubmVyID0gdGhpcy5MYXllclJ1bm5lcjtcbiAgICAgICAgdGhpcy5UcmFpbkRhdGFHZW5lcmF0b3IgPSBwaXBlbGluZUNvbmZpZy5EYXRhc2V0LlRyYWluRGF0YUdlbmVyYXRvcjtcbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFpbmVyTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=