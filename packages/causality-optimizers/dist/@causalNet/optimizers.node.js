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
      console.log({
        'this is adam': this.T.train.adam
      });
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
            Loss(sampleTensor, labelTensor);
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
          const TrainData = TrainDataGenerator(batchSize);
          let iterLosses = [];

          for await (let _ref of TrainData) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvU0dERml0UGFyYW1zLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9hZGFtT3B0aW1pemVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9TdG9jaGFzdGljR3JhZGllbnREZXNjZW50L2NhdXNhbE5ldFNHRE9wdGltaXplci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9ldmFsdWF0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy90cmFpbmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiU0dERml0UGFyYW1zTWl4aW5zIiwiQmFzZU9wdGltaXplckNsYXNzIiwiZml0IiwibG9zc0ZuIiwidHJhaW5hYmxlVmFycyIsInRyYWluZXIiLCJtaW5pbWl6ZSIsIkFkYW1PcHRpbWl6ZXIiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiY29uc3RydWN0b3IiLCJvcHRpbWl6ZXJQYXJhbXMiLCJEZWZhdWx0UGFyYW1ldGVycyIsImJldGExIiwiYmV0YTIiLCJlcHNpbG9uIiwibGVhcm5pbmdSYXRlIiwiZnVuY3RvciIsIm1lcmdlUGFyYW1zIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsIlQiLCJ0cmFpbiIsImFkYW0iLCJQYXJhbXMiLCJDYXVzYWxOZXRTR0RPcHRpbWl6ZXIiLCJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyIsIlIiLCJtZXJnZURlZXBMZWZ0IiwiRXZhbHVhdG9yTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJUZXN0RGF0YUdlbmVyYXRvciIsInRlc3REYXRhR2VuZXJhdG9yIiwiRXJyb3IiLCJ0ZXN0IiwiYmF0Y2hTaXplIiwiRiIsIkNvcmVGdW5jdG9yIiwiT25lSG90UHJlZGljdE1vZGVsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXN0RGF0YSIsInBhc3MiLCJzYW1wbGVzIiwibGFiZWxzIiwic2FtcGxlVGVuc29yIiwidGVuc29yIiwiYXNUeXBlIiwibGFiZWxUZW5zb3IiLCJwcmVkaWN0TGFiZWxUZW5zb3IiLCJjb3JyZWN0UHJlZGljdHMiLCJtdWwiLCJzdW0iLCJkYXRhIiwiYWNjdXJhY3kiLCJtZWFuIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsIkxvZ2dlciIsImdyb3VwQmVnaW4iLCJEYXRhc2V0IiwiZ3JvdXBFbmQiLCJUcmFpbmVyTWl4aW5zIiwiVHJhaW5lciIsIkxvc3MiLCJMb3NzTW9kZWwiLCJPcHRpbWl6ZXIiLCJMb3NzRm4iLCJ0aWR5Iiwib3B0aW1pemVyIiwiVHJhaW5EYXRhR2VuZXJhdG9yIiwidHJhaW5EYXRhR2VuZXJhdG9yIiwibnVtRXBvY2hzIiwibG9zc2VzIiwibG9nZ2VyIiwicHJvZ3Jlc3NCZWdpbiIsImVwb2NoSWR4IiwicmFuZ2UiLCJUcmFpbkRhdGEiLCJpdGVyTG9zc2VzIiwibG9zcyIsInB1c2giLCJwcm9ncmVzc1VwZGF0ZSIsInByb2dyZXNzRW5kIiwiTmV0IiwiTGF5ZXJSdW5uZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSxRQUFNQSxrQkFBa0IsR0FBSUMsa0JBQUQsSUFBd0IsY0FBY0Esa0JBQWQsQ0FBZ0M7QUFDL0VDLE9BQUcsQ0FBQ0MsTUFBRCxFQUFTQyxhQUFULEVBQXVCO0FBQ3RCLGFBQU8sS0FB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QWxCO0FBQ0EsZ0JBQUlpQyxJQUFJLEdBQUdqQixPQUFPLENBQUNsQixZQUFELEVBQWVHLFdBQWYsQ0FBbEI7QUFDQStCLHNCQUFVLENBQUNFLElBQVgsRUFBZ0IsTUFBTUQsSUFBSSxDQUFDM0IsSUFBTCxFQUF0QjtBQUNIOztBQUNEb0IsZ0JBQU0sQ0FBQ1EsSUFBUCxDQUFZdkQsQ0FBQyxDQUFDNkIsSUFBRixDQUFPd0IsVUFBUCxDQUFaO0FBQ0FBLG9CQUFVLEdBQUcsRUFBYjtBQUNBTCxnQkFBTSxDQUFDUSxjQUFQLENBQXNCO0FBQUNOLG9CQUFEO0FBQVdILGtCQUFYO0FBQW1CRDtBQUFuQixXQUF0QjtBQUNIOztBQUNERSxjQUFNLENBQUNTLFdBQVA7QUFDQTVDLGVBQU8sQ0FBQztBQUFDa0M7QUFBRCxTQUFELENBQVA7QUFDSCxPQWpCTSxDQUFQO0FBa0JIOztBQUdEakIsZUFBVyxDQUFDQyxjQUFELEVBQWdCO0FBQ3ZCLFVBQUcsTUFBTUQsV0FBVCxFQUFxQjtBQUNqQixjQUFNQSxXQUFOLENBQWtCQyxjQUFsQjtBQUNIOztBQUNELFdBQUtDLE1BQUwsQ0FBWUMsVUFBWixDQUF1Qix1QkFBdkI7QUFDQSxZQUFNO0FBQUVPO0FBQUYsVUFBZ0JULGNBQWMsQ0FBQzJCLEdBQXJDO0FBQ0EsV0FBS2xCLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0FBLGVBQVMsQ0FBQ21CLFdBQVYsR0FBd0IsS0FBS0EsV0FBN0I7QUFDQSxXQUFLZixrQkFBTCxHQUEwQmIsY0FBYyxDQUFDRyxPQUFmLENBQXVCVSxrQkFBakQ7QUFDQSxXQUFLWixNQUFMLENBQVlHLFFBQVo7QUFDSDs7QUExRXNFLEdBQTNFOztpQkE2RWVDLGE7Ozs7Ozs7Ozs7Ozs7QUN2RmYsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJjb25zdCBTR0RGaXRQYXJhbXNNaXhpbnMgPSAoQmFzZU9wdGltaXplckNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VPcHRpbWl6ZXJDbGFzc3tcbiAgICBmaXQobG9zc0ZuLCB0cmFpbmFibGVWYXJzKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhaW5lci5taW5pbWl6ZShsb3NzRm4sIHRydWUsIHRyYWluYWJsZVZhcnMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNHREZpdFBhcmFtc01peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU0dERml0UGFyYW1zTWl4aW5zIH0gZnJvbSAnLi9TR0RGaXRQYXJhbXMubWl4aW5zJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYW1PcHRpbWl6ZXIgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFxuICAgIFsgU0dERml0UGFyYW1zTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKG9wdGltaXplclBhcmFtcz17fSl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldCBEZWZhdWx0UGFyYW1ldGVycyA9IHtiZXRhMTogMC4xLCBiZXRhMjogMC4yLCBlcHNpbG9uOjAuMDN9O1xuICAgICAgICBjb25zdCB7bGVhcm5pbmdSYXRlLCBiZXRhMSwgYmV0YTIsIGVwc2lsb259ID0gZnVuY3Rvci5tZXJnZVBhcmFtcyhvcHRpbWl6ZXJQYXJhbXMsIERlZmF1bHRQYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSB7IGxlYXJuaW5nUmF0ZSwgYmV0YTEsIGJldGEyLCBlcHNpbG9uIH07XG4gICAgICAgIGNvbnNvbGUubG9nKHsndGhpcyBpcyBhZGFtJzogdGhpcy5ULnRyYWluLmFkYW19KTtcbiAgICAgICAgdGhpcy50cmFpbmVyID0gdGhpcy5ULnRyYWluLmFkYW0obGVhcm5pbmdSYXRlLCBiZXRhMSwgYmV0YTIsIGVwc2lsb24pO1xuICAgIH1cblxuICAgIGdldCBQYXJhbXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICAgIH1cbn0iLCJpbXBvcnQge2RlZmF1bHQgYXMgQWRhbU9wdGltaXplcn0gZnJvbSAnLi9hZGFtT3B0aW1pemVyJztcbmltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNHREZpdFBhcmFtc01peGlucyB9IGZyb20gJy4vU0dERml0UGFyYW1zLm1peGlucyc7XG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgb3B0aW1pemluZyBtZXRob2RzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRTR0RPcHRpbWl6ZXIqKiBpbnN0YW5jZS5cbiAqXG4gKiBAY2xhc3MgQ2F1c2FsTmV0U0dET3B0aW1pemVyXG4gKiBAZXh0ZW5kcyB7VGVuc29yfVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldFNHRE9wdGltaXplcnMuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldFNHRE9wdGltaXplciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgW1NHREZpdFBhcmFtc01peGluc10pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFkYW0ob3B0aW1pemVyUGFyYW1zKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBZGFtT3B0aW1pemVyKG9wdGltaXplclBhcmFtcyk7IFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFNHRE9wdGltaXplcigpOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuY2xhc3MgRnVuY3RvciBleHRlbmRzIEJhc2VGdW5jdG9ye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIG1lcmdlUGFyYW1zKG9wdGltaXplclBhcmFtcywgZGVmYXVsdE9wdGltaXplclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5tZXJnZURlZXBMZWZ0KG9wdGltaXplclBhcmFtcywgZGVmYXVsdE9wdGltaXplclBhcmFtZXRlcnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCIvKipcbiAqIFRoaXMgbWl4aW4gY2xhc3MgcHJvdmlkZXMgbWV0aG9kczogKip0ZXN0KiogYW5kIFxuICogaGFuZGxlICoqVGVzdERhdGFHZW5lcmF0b3IqKiBzZXR0aW5nIG9mIHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuXG4gKlxuICogQGNsYXNzIEV2YWx1YXRvck1peGluc1xuICogQGV4dGVuZHMge0Jhc2VQaXBlbGluZUNsYXNzfVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3RyYWluZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBFdmFsdWF0b3JNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBcbiAgICBnZXQgVGVzdERhdGFHZW5lcmF0b3IoKXtcbiAgICAgICAgaWYoIXRoaXMudGVzdERhdGFHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3Rlc3REYXRhR2VuZXJhdG9yIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50ZXN0RGF0YUdlbmVyYXRvcjtcbiAgICB9XG4gICAgc2V0IFRlc3REYXRhR2VuZXJhdG9yKHRlc3REYXRhR2VuZXJhdG9yKXtcbiAgICAgICAgdGhpcy50ZXN0RGF0YUdlbmVyYXRvciA9IHRlc3REYXRhR2VuZXJhdG9yO1xuICAgIH1cblxuICAgIGFzeW5jIHRlc3QoYmF0Y2hTaXplPTMyKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICAgICAgY29uc3QgVGVzdERhdGFHZW5lcmF0b3IgPSB0aGlzLlRlc3REYXRhR2VuZXJhdG9yLCBPbmVIb3RQcmVkaWN0TW9kZWwgPSB0aGlzLk9uZUhvdFByZWRpY3RNb2RlbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBjb25zdCB0ZXN0RGF0YSA9IFRlc3REYXRhR2VuZXJhdG9yKGJhdGNoU2l6ZSk7ICAgIFxuICAgICAgICAgICAgbGV0IHBhc3MgPSBbXTtcbiAgICAgICAgICAgIGZvciBhd2FpdCAobGV0IHsgc2FtcGxlcywgbGFiZWxzIH0gb2YgdGVzdERhdGEpe1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihzYW1wbGVzKS5hc1R5cGUoJ2Zsb2F0MzInKTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxUZW5zb3IgPSBULnRlbnNvcihsYWJlbHMpLmFzVHlwZSgnZmxvYXQzMicpO1xuICAgICAgICAgICAgICAgIGxldCBwcmVkaWN0TGFiZWxUZW5zb3IgPSBPbmVIb3RQcmVkaWN0TW9kZWwoc2FtcGxlVGVuc29yKTtcbiAgICAgICAgICAgICAgICBsZXQgY29ycmVjdFByZWRpY3RzID0gcHJlZGljdExhYmVsVGVuc29yLm11bChsYWJlbFRlbnNvcik7XG4gICAgICAgICAgICAgICAgcGFzcyA9IFsuLi5wYXNzLCAuLi4gYXdhaXQgY29ycmVjdFByZWRpY3RzLnN1bSgxKS5kYXRhKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFjY3VyYWN5ID0gUi5tZWFuKHBhc3MpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7YWNjdXJhY3ksIHBhc3N9KTsgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgaWYoc3VwZXIuc2V0QnlDb25maWcpe1xuICAgICAgICAgICAgc3VwZXIuc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3NldCBFdmFsdWF0b3IgYnkgY29uZmlnJyk7XG4gICAgICAgIHRoaXMuVGVzdERhdGFHZW5lcmF0b3IgPSBwaXBlbGluZUNvbmZpZy5EYXRhc2V0LlRlc3REYXRhR2VuZXJhdG9yO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2YWx1YXRvck1peGluczsiLCIvKipcbiAqIFRoaXMgbWl4aW4gY2xhc3MgcHJvdmlkZXMgYXR0cmlidXRlczogKipPcHRpbWl6ZXIqKiwgKipUcmFpbmVyKiosICoqVHJhaW5EYXRhR2VuZXJhdG9yKiosIFxuICogbWV0aG9kcyAqKnRyYWluKiosIGhhbmRsZSAqKk9wdGltaXplcioqIHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcuTmV0XG4gKiBhbmQgKipUcmFpbkRhdGFHZW5lcmF0b3IqKiBzZXR0aW5nIG9mIHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuXG4gKlxuICogQGNsYXNzIFRyYWluZXJNaXhpbnNcbiAqIEBleHRlbmRzIHtCYXNlUGlwZWxpbmVDbGFzc31cbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy90cmFpbmVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY29uc3QgVHJhaW5lck1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIFxuICAgIGdldCBUcmFpbmVyKCl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGNvbnN0IExvc3M9dGhpcy5Mb3NzTW9kZWwsIE9wdGltaXplcj10aGlzLk9wdGltaXplcjtcbiAgICAgICAgcmV0dXJuIChzYW1wbGVUZW5zb3IsIGxhYmVsVGVuc29yKT0+e1xuICAgICAgICAgICAgY29uc3QgTG9zc0ZuID0gKCk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gVC50aWR5KCAoKT0+eyBcbiAgICAgICAgICAgICAgICAgICAgTG9zcyhzYW1wbGVUZW5zb3IsIGxhYmVsVGVuc29yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExvc3Moc2FtcGxlVGVuc29yLCBsYWJlbFRlbnNvcik7IFxuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gT3B0aW1pemVyLmZpdChMb3NzRm4pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldCBPcHRpbWl6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMub3B0aW1pemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdvcHRpbWl6ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGltaXplcjtcbiAgICB9XG4gICAgXG5cbiAgICBzZXQgT3B0aW1pemVyKG9wdGltaXplcil7XG4gICAgICAgIHRoaXMub3B0aW1pemVyID0gb3B0aW1pemVyO1xuICAgIH1cblxuICAgIGdldCBUcmFpbkRhdGFHZW5lcmF0b3IoKXtcbiAgICAgICAgaWYoIXRoaXMudHJhaW5EYXRhR2VuZXJhdG9yKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdUcmFpbkRhdGFHZW5lcmF0b3IgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRyYWluRGF0YUdlbmVyYXRvcjtcbiAgICB9XG4gICAgc2V0IFRyYWluRGF0YUdlbmVyYXRvcihUcmFpbkRhdGFHZW5lcmF0b3Ipe1xuICAgICAgICB0aGlzLnRyYWluRGF0YUdlbmVyYXRvciA9IFRyYWluRGF0YUdlbmVyYXRvcjtcbiAgICB9XG5cbiAgICBhc3luYyB0cmFpbihudW1FcG9jaHMsIGJhdGNoU2l6ZSl7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBGID0gdGhpcy5GLCBSID0gdGhpcy5GLkNvcmVGdW5jdG9yLCBUID0gdGhpcy5UO1xuICAgICAgICBjb25zdCBUcmFpbkRhdGFHZW5lcmF0b3IgPSB0aGlzLlRyYWluRGF0YUdlbmVyYXRvciwgVHJhaW5lciA9IHRoaXMuVHJhaW5lcjtcbiAgICAgICAgbGV0IGxvc3NlcyA9IFtdLCBsb2dnZXIgPSB0aGlzLkxvZ2dlcjtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBsb2dnZXIucHJvZ3Jlc3NCZWdpbihudW1FcG9jaHMpO1xuICAgICAgICAgICAgZm9yKGxldCBlcG9jaElkeCBvZiBGLnJhbmdlKG51bUVwb2Nocykpe1xuICAgICAgICAgICAgICAgIGNvbnN0IFRyYWluRGF0YSA9IFRyYWluRGF0YUdlbmVyYXRvcihiYXRjaFNpemUpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVyTG9zc2VzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQgeyBzYW1wbGVzLCBsYWJlbHMgfSBvZiBUcmFpbkRhdGEpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3Ioc2FtcGxlcykuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbFRlbnNvciA9IFQudGVuc29yKGxhYmVscykuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsb3NzID0gVHJhaW5lcihzYW1wbGVUZW5zb3IsIGxhYmVsVGVuc29yKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlckxvc3Nlcy5wdXNoKGF3YWl0IGxvc3MuZGF0YSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9zc2VzLnB1c2goUi5tZWFuKGl0ZXJMb3NzZXMpKTtcbiAgICAgICAgICAgICAgICBpdGVyTG9zc2VzID0gW107XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnByb2dyZXNzVXBkYXRlKHtlcG9jaElkeCwgbG9zc2VzLCBudW1FcG9jaHN9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2dlci5wcm9ncmVzc0VuZCgpO1xuICAgICAgICAgICAgcmVzb2x2ZSh7bG9zc2VzfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IFRyYWluZXIgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgT3B0aW1pemVyIH0gPSBwaXBlbGluZUNvbmZpZy5OZXQ7XG4gICAgICAgIHRoaXMuT3B0aW1pemVyID0gT3B0aW1pemVyO1xuICAgICAgICBPcHRpbWl6ZXIuTGF5ZXJSdW5uZXIgPSB0aGlzLkxheWVyUnVubmVyO1xuICAgICAgICB0aGlzLlRyYWluRGF0YUdlbmVyYXRvciA9IHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuVHJhaW5EYXRhR2VuZXJhdG9yO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWluZXJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==