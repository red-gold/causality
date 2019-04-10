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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvU0dERml0UGFyYW1zLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9hZGFtT3B0aW1pemVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9TdG9jaGFzdGljR3JhZGllbnREZXNjZW50L2NhdXNhbE5ldFNHRE9wdGltaXplci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9ldmFsdWF0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy90cmFpbmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiU0dERml0UGFyYW1zTWl4aW5zIiwiQmFzZU9wdGltaXplckNsYXNzIiwiZml0IiwibG9zc0ZuIiwidHJhaW5hYmxlVmFycyIsInRyYWluZXIiLCJtaW5pbWl6ZSIsIkFkYW1PcHRpbWl6ZXIiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiY29uc3RydWN0b3IiLCJvcHRpbWl6ZXJQYXJhbXMiLCJEZWZhdWx0UGFyYW1ldGVycyIsImJldGExIiwiYmV0YTIiLCJlcHNpbG9uIiwibGVhcm5pbmdSYXRlIiwiZnVuY3RvciIsIm1lcmdlUGFyYW1zIiwicGFyYW1zIiwiVCIsInRyYWluIiwiYWRhbSIsIlBhcmFtcyIsIkNhdXNhbE5ldFNHRE9wdGltaXplciIsIkZ1bmN0b3IiLCJCYXNlRnVuY3RvciIsImRlZmF1bHRPcHRpbWl6ZXJQYXJhbWV0ZXJzIiwiUiIsIm1lcmdlRGVlcExlZnQiLCJFdmFsdWF0b3JNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIlRlc3REYXRhR2VuZXJhdG9yIiwidGVzdERhdGFHZW5lcmF0b3IiLCJFcnJvciIsInRlc3QiLCJiYXRjaFNpemUiLCJGIiwiQ29yZUZ1bmN0b3IiLCJPbmVIb3RQcmVkaWN0TW9kZWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRlc3REYXRhIiwicGFzcyIsInNhbXBsZXMiLCJsYWJlbHMiLCJzYW1wbGVUZW5zb3IiLCJ0ZW5zb3IiLCJhc1R5cGUiLCJsYWJlbFRlbnNvciIsInByZWRpY3RMYWJlbFRlbnNvciIsImNvcnJlY3RQcmVkaWN0cyIsIm11bCIsInN1bSIsImRhdGEiLCJhY2N1cmFjeSIsIm1lYW4iLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIkRhdGFzZXQiLCJncm91cEVuZCIsIlRyYWluZXJNaXhpbnMiLCJUcmFpbmVyIiwiTG9zcyIsIkxvc3NNb2RlbCIsIk9wdGltaXplciIsIkxvc3NGbiIsInRpZHkiLCJvcHRpbWl6ZXIiLCJUcmFpbkRhdGFHZW5lcmF0b3IiLCJ0cmFpbkRhdGFHZW5lcmF0b3IiLCJudW1FcG9jaHMiLCJsb3NzZXMiLCJsb2dnZXIiLCJwcm9ncmVzc0JlZ2luIiwiZXBvY2hJZHgiLCJyYW5nZSIsInRyYWluRGF0YSIsIml0ZXJMb3NzZXMiLCJsb3NzIiwicHVzaCIsInByb2dyZXNzVXBkYXRlIiwicHJvZ3Jlc3NFbmQiLCJOZXQiLCJMYXllclJ1bm5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLFFBQU1BLGtCQUFrQixHQUFJQyxrQkFBRCxJQUF3QixjQUFjQSxrQkFBZCxDQUFnQztBQUMvRUMsT0FBRyxDQUFDQyxNQUFELEVBQVNDLGFBQVQsRUFBdUI7QUFDdEIsYUFBTyxLQUFLQyxPQUFMLENBQWFDLFFB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LGdCQUFNLENBQUNRLElBQVAsQ0FBWXZELENBQUMsQ0FBQzZCLElBQUYsQ0FBT3dCLFVBQVAsQ0FBWjtBQUNBQSxvQkFBVSxHQUFHLEVBQWI7QUFDQUwsZ0JBQU0sQ0FBQ1EsY0FBUCxDQUFzQjtBQUFDTixvQkFBRDtBQUFXSCxrQkFBWDtBQUFtQkQ7QUFBbkIsV0FBdEI7QUFDSDs7QUFDREUsY0FBTSxDQUFDUyxXQUFQO0FBQ0E1QyxlQUFPLENBQUM7QUFBQ2tDO0FBQUQsU0FBRCxDQUFQO0FBQ0gsT0FqQk0sQ0FBUDtBQWtCSDs7QUFHRGpCLGVBQVcsQ0FBQ0MsY0FBRCxFQUFnQjtBQUN2QixVQUFHLE1BQU1ELFdBQVQsRUFBcUI7QUFDakIsY0FBTUEsV0FBTixDQUFrQkMsY0FBbEI7QUFDSDs7QUFDRCxXQUFLQyxNQUFMLENBQVlDLFVBQVosQ0FBdUIsdUJBQXZCO0FBQ0EsWUFBTTtBQUFFTztBQUFGLFVBQWdCVCxjQUFjLENBQUMyQixHQUFyQztBQUNBLFdBQUtsQixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBQSxlQUFTLENBQUNtQixXQUFWLEdBQXdCLEtBQUtBLFdBQTdCO0FBQ0EsV0FBS2Ysa0JBQUwsR0FBMEJiLGNBQWMsQ0FBQ0csT0FBZixDQUF1QlUsa0JBQWpEO0FBQ0EsV0FBS1osTUFBTCxDQUFZRyxRQUFaO0FBQ0g7O0FBdkVzRSxHQUEzRTs7aUJBMEVlQyxhOzs7Ozs7Ozs7Ozs7O0FDcEZmLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvb3B0aW1pemVycy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJjb25zdCBTR0RGaXRQYXJhbXNNaXhpbnMgPSAoQmFzZU9wdGltaXplckNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VPcHRpbWl6ZXJDbGFzc3tcbiAgICBmaXQobG9zc0ZuLCB0cmFpbmFibGVWYXJzKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhaW5lci5taW5pbWl6ZShsb3NzRm4sIHRydWUsIHRyYWluYWJsZVZhcnMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNHREZpdFBhcmFtc01peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU0dERml0UGFyYW1zTWl4aW5zIH0gZnJvbSAnLi9TR0RGaXRQYXJhbXMubWl4aW5zJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYW1PcHRpbWl6ZXIgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFxuICAgIFsgU0dERml0UGFyYW1zTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKG9wdGltaXplclBhcmFtcz17fSl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldCBEZWZhdWx0UGFyYW1ldGVycyA9IHtiZXRhMTogMC4xLCBiZXRhMjogMC4yLCBlcHNpbG9uOjAuMDN9O1xuICAgICAgICBjb25zdCB7bGVhcm5pbmdSYXRlLCBiZXRhMSwgYmV0YTIsIGVwc2lsb259ID0gZnVuY3Rvci5tZXJnZVBhcmFtcyhvcHRpbWl6ZXJQYXJhbXMsIERlZmF1bHRQYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSB7IGxlYXJuaW5nUmF0ZSwgYmV0YTEsIGJldGEyLCBlcHNpbG9uIH07XG4gICAgICAgIHRoaXMudHJhaW5lciA9IHRoaXMuVC50cmFpbi5hZGFtKGxlYXJuaW5nUmF0ZSwgYmV0YTEsIGJldGEyLCBlcHNpbG9uKTtcbiAgICB9XG5cbiAgICBnZXQgUGFyYW1zKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtcztcbiAgICB9XG59IiwiaW1wb3J0IHtkZWZhdWx0IGFzIEFkYW1PcHRpbWl6ZXJ9IGZyb20gJy4vYWRhbU9wdGltaXplcic7XG5pbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBTR0RGaXRQYXJhbXNNaXhpbnMgfSBmcm9tICcuL1NHREZpdFBhcmFtcy5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIG9wdGltaXppbmcgbWV0aG9kcyB3aGljaCBjYW4gYmUgYWNjZXNzZWQgdmlhICoqY2F1c2FsTmV0U0dET3B0aW1pemVyKiogaW5zdGFuY2UuXG4gKlxuICogQGNsYXNzIENhdXNhbE5ldFNHRE9wdGltaXplclxuICogQGV4dGVuZHMge1RlbnNvcn1cbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXRTR0RPcHRpbWl6ZXJzLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRTR0RPcHRpbWl6ZXIgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFtTR0RGaXRQYXJhbXNNaXhpbnNdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBhZGFtKG9wdGltaXplclBhcmFtcyl7XG4gICAgICAgIHJldHVybiBuZXcgQWRhbU9wdGltaXplcihvcHRpbWl6ZXJQYXJhbXMpOyBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRTR0RPcHRpbWl6ZXIoKTsiLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmNsYXNzIEZ1bmN0b3IgZXh0ZW5kcyBCYXNlRnVuY3RvcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBcbiAgICBtZXJnZVBhcmFtcyhvcHRpbWl6ZXJQYXJhbXMsIGRlZmF1bHRPcHRpbWl6ZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIubWVyZ2VEZWVwTGVmdChvcHRpbWl6ZXJQYXJhbXMsIGRlZmF1bHRPcHRpbWl6ZXJQYXJhbWV0ZXJzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiLyoqXG4gKiBUaGlzIG1peGluIGNsYXNzIHByb3ZpZGVzIG1ldGhvZHM6ICoqdGVzdCoqIGFuZCBcbiAqIGhhbmRsZSAqKlRlc3REYXRhR2VuZXJhdG9yKiogc2V0dGluZyBvZiBwaXBlbGluZUNvbmZpZy5EYXRhc2V0LlxuICpcbiAqIEBjbGFzcyBFdmFsdWF0b3JNaXhpbnNcbiAqIEBleHRlbmRzIHtCYXNlUGlwZWxpbmVDbGFzc31cbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy90cmFpbmVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY29uc3QgRXZhbHVhdG9yTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgXG4gICAgZ2V0IFRlc3REYXRhR2VuZXJhdG9yKCl7XG4gICAgICAgIGlmKCF0aGlzLnRlc3REYXRhR2VuZXJhdG9yKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd0ZXN0RGF0YUdlbmVyYXRvciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdERhdGFHZW5lcmF0b3I7XG4gICAgfVxuICAgIHNldCBUZXN0RGF0YUdlbmVyYXRvcih0ZXN0RGF0YUdlbmVyYXRvcil7XG4gICAgICAgIHRoaXMudGVzdERhdGFHZW5lcmF0b3IgPSB0ZXN0RGF0YUdlbmVyYXRvcjtcbiAgICB9XG5cbiAgICBhc3luYyB0ZXN0KGJhdGNoU2l6ZT0zMil7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIFIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgICAgIGNvbnN0IFRlc3REYXRhR2VuZXJhdG9yID0gdGhpcy5UZXN0RGF0YUdlbmVyYXRvciwgT25lSG90UHJlZGljdE1vZGVsID0gdGhpcy5PbmVIb3RQcmVkaWN0TW9kZWw7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgY29uc3QgdGVzdERhdGEgPSBUZXN0RGF0YUdlbmVyYXRvcihiYXRjaFNpemUpOyAgICBcbiAgICAgICAgICAgIGxldCBwYXNzID0gW107XG4gICAgICAgICAgICBmb3IgYXdhaXQgKGxldCB7IHNhbXBsZXMsIGxhYmVscyB9IG9mIHRlc3REYXRhKXtcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3Ioc2FtcGxlcykuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsVGVuc29yID0gVC50ZW5zb3IobGFiZWxzKS5hc1R5cGUoJ2Zsb2F0MzInKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlZGljdExhYmVsVGVuc29yID0gT25lSG90UHJlZGljdE1vZGVsKHNhbXBsZVRlbnNvcik7XG4gICAgICAgICAgICAgICAgbGV0IGNvcnJlY3RQcmVkaWN0cyA9IHByZWRpY3RMYWJlbFRlbnNvci5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgICAgICAgICAgIHBhc3MgPSBbLi4ucGFzcywgLi4uIGF3YWl0IGNvcnJlY3RQcmVkaWN0cy5zdW0oMSkuZGF0YSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhY2N1cmFjeSA9IFIubWVhbihwYXNzKTtcbiAgICAgICAgICAgIHJlc29sdmUoe2FjY3VyYWN5LCBwYXNzfSk7ICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgRXZhbHVhdG9yIGJ5IGNvbmZpZycpO1xuICAgICAgICB0aGlzLlRlc3REYXRhR2VuZXJhdG9yID0gcGlwZWxpbmVDb25maWcuRGF0YXNldC5UZXN0RGF0YUdlbmVyYXRvcjtcbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmFsdWF0b3JNaXhpbnM7IiwiLyoqXG4gKiBUaGlzIG1peGluIGNsYXNzIHByb3ZpZGVzIGF0dHJpYnV0ZXM6ICoqT3B0aW1pemVyKiosICoqVHJhaW5lcioqLCAqKlRyYWluRGF0YUdlbmVyYXRvcioqLCBcbiAqIG1ldGhvZHMgKip0cmFpbioqLCBoYW5kbGUgKipPcHRpbWl6ZXIqKiBzZXR0aW5nIG9mIHBpcGVsaW5lQ29uZmlnLk5ldFxuICogYW5kICoqVHJhaW5EYXRhR2VuZXJhdG9yKiogc2V0dGluZyBvZiBwaXBlbGluZUNvbmZpZy5EYXRhc2V0LlxuICpcbiAqIEBjbGFzcyBUcmFpbmVyTWl4aW5zXG4gKiBAZXh0ZW5kcyB7QmFzZVBpcGVsaW5lQ2xhc3N9XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvdHJhaW5lci5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IFRyYWluZXJNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBcbiAgICBnZXQgVHJhaW5lcigpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICBjb25zdCBMb3NzPXRoaXMuTG9zc01vZGVsLCBPcHRpbWl6ZXI9dGhpcy5PcHRpbWl6ZXI7XG4gICAgICAgIHJldHVybiAoc2FtcGxlVGVuc29yLCBsYWJlbFRlbnNvcik9PntcbiAgICAgICAgICAgIGNvbnN0IExvc3NGbiA9ICgpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIFQudGlkeSggKCk9PnsgcmV0dXJuIExvc3Moc2FtcGxlVGVuc29yLCBsYWJlbFRlbnNvcik7IH0gKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gT3B0aW1pemVyLmZpdChMb3NzRm4pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBPcHRpbWl6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMub3B0aW1pemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdvcHRpbWl6ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGltaXplcjtcbiAgICB9XG4gICAgXG5cbiAgICBzZXQgT3B0aW1pemVyKG9wdGltaXplcil7XG4gICAgICAgIHRoaXMub3B0aW1pemVyID0gb3B0aW1pemVyO1xuICAgIH1cblxuICAgIGdldCBUcmFpbkRhdGFHZW5lcmF0b3IoKXtcbiAgICAgICAgaWYoIXRoaXMudHJhaW5EYXRhR2VuZXJhdG9yKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUcmFpbkRhdGFHZW5lcmF0b3IgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRyYWluRGF0YUdlbmVyYXRvcjtcbiAgICB9XG4gICAgc2V0IFRyYWluRGF0YUdlbmVyYXRvcihUcmFpbkRhdGFHZW5lcmF0b3Ipe1xuICAgICAgICB0aGlzLnRyYWluRGF0YUdlbmVyYXRvciA9IFRyYWluRGF0YUdlbmVyYXRvcjtcbiAgICB9XG5cbiAgICBhc3luYyB0cmFpbihudW1FcG9jaHMsIGJhdGNoU2l6ZSl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBGID0gdGhpcy5GLCBSID0gdGhpcy5GLkNvcmVGdW5jdG9yLCBUID0gdGhpcy5UO1xuICAgICAgICBjb25zdCBUcmFpbkRhdGFHZW5lcmF0b3IgPSB0aGlzLlRyYWluRGF0YUdlbmVyYXRvciwgVHJhaW5lciA9IHRoaXMuVHJhaW5lcjtcbiAgICAgICAgbGV0IGxvc3NlcyA9IFtdLCBsb2dnZXIgPSB0aGlzLkxvZ2dlcjtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBsb2dnZXIucHJvZ3Jlc3NCZWdpbihudW1FcG9jaHMpO1xuICAgICAgICAgICAgZm9yKGxldCBlcG9jaElkeCBvZiBGLnJhbmdlKG51bUVwb2Nocykpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYWluRGF0YSA9IFRyYWluRGF0YUdlbmVyYXRvcihiYXRjaFNpemUpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVyTG9zc2VzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQgeyBzYW1wbGVzLCBsYWJlbHMgfSBvZiB0cmFpbkRhdGEpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3Ioc2FtcGxlcykuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbFRlbnNvciA9IFQudGVuc29yKGxhYmVscykuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb3NzID0gVHJhaW5lcihzYW1wbGVUZW5zb3IsIGxhYmVsVGVuc29yKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlckxvc3Nlcy5wdXNoKGF3YWl0IGxvc3MuZGF0YSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9zc2VzLnB1c2goUi5tZWFuKGl0ZXJMb3NzZXMpKTtcbiAgICAgICAgICAgICAgICBpdGVyTG9zc2VzID0gW107XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnByb2dyZXNzVXBkYXRlKHtlcG9jaElkeCwgbG9zc2VzLCBudW1FcG9jaHN9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2dlci5wcm9ncmVzc0VuZCgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7bG9zc2VzfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IFRyYWluZXIgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgT3B0aW1pemVyIH0gPSBwaXBlbGluZUNvbmZpZy5OZXQ7XG4gICAgICAgIHRoaXMuT3B0aW1pemVyID0gT3B0aW1pemVyO1xuICAgICAgICBPcHRpbWl6ZXIuTGF5ZXJSdW5uZXIgPSB0aGlzLkxheWVyUnVubmVyO1xuICAgICAgICB0aGlzLlRyYWluRGF0YUdlbmVyYXRvciA9IHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuVHJhaW5EYXRhR2VuZXJhdG9yO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWluZXJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==