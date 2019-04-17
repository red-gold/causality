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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvU0dERml0UGFyYW1zLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9hZGFtT3B0aW1pemVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9TdG9jaGFzdGljR3JhZGllbnREZXNjZW50L2NhdXNhbE5ldFNHRE9wdGltaXplci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9ldmFsdWF0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy90cmFpbmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiU0dERml0UGFyYW1zTWl4aW5zIiwiQmFzZU9wdGltaXplckNsYXNzIiwiZml0IiwibG9zc0ZuIiwidHJhaW5hYmxlVmFycyIsInRyYWluZXIiLCJtaW5pbWl6ZSIsIkFkYW1PcHRpbWl6ZXIiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiY29uc3RydWN0b3IiLCJvcHRpbWl6ZXJQYXJhbXMiLCJEZWZhdWx0UGFyYW1ldGVycyIsImJldGExIiwiYmV0YTIiLCJlcHNpbG9uIiwibGVhcm5pbmdSYXRlIiwiZnVuY3RvciIsIm1lcmdlUGFyYW1zIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsIlQiLCJ0cmFpbiIsImFkYW0iLCJQYXJhbXMiLCJDYXVzYWxOZXRTR0RPcHRpbWl6ZXIiLCJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyIsIlIiLCJtZXJnZURlZXBMZWZ0IiwiRXZhbHVhdG9yTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJUZXN0RGF0YUdlbmVyYXRvciIsInRlc3REYXRhR2VuZXJhdG9yIiwiRXJyb3IiLCJ0ZXN0IiwiYmF0Y2hTaXplIiwiRiIsIkNvcmVGdW5jdG9yIiwiT25lSG90UHJlZGljdE1vZGVsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0ZXN0RGF0YSIsInBhc3MiLCJzYW1wbGVzIiwibGFiZWxzIiwic2FtcGxlVGVuc29yIiwidGVuc29yIiwiYXNUeXBlIiwibGFiZWxUZW5zb3IiLCJwcmVkaWN0TGFiZWxUZW5zb3IiLCJjb3JyZWN0UHJlZGljdHMiLCJtdWwiLCJzdW0iLCJkYXRhIiwiYWNjdXJhY3kiLCJtZWFuIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsIkxvZ2dlciIsImdyb3VwQmVnaW4iLCJEYXRhc2V0IiwiZ3JvdXBFbmQiLCJUcmFpbmVyTWl4aW5zIiwiVHJhaW5lciIsIkxvc3MiLCJMb3NzTW9kZWwiLCJPcHRpbWl6ZXIiLCJMb3NzRm4iLCJ0aWR5Iiwib3B0aW1pemVyIiwiVHJhaW5EYXRhR2VuZXJhdG9yIiwidHJhaW5EYXRhR2VuZXJhdG9yIiwibnVtRXBvY2hzIiwibG9zc2VzIiwibG9nZ2VyIiwicHJvZ3Jlc3NCZWdpbiIsImVwb2NoSWR4IiwicmFuZ2UiLCJUcmFpbkRhdGEiLCJpdGVyTG9zc2VzIiwibG9zcyIsInB1c2giLCJwcm9ncmVzc1VwZGF0ZSIsInByb2dyZXNzRW5kIiwiTmV0IiwiTGF5ZXJSdW5uZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSxRQUFNQSxrQkFBa0IsR0FBSUMsa0JBQUQsSUFBd0IsY0FBY0Esa0JBQWQsQ0FBZ0M7QUFDL0VDLE9BQUcsQ0FBQ0MsTUFBRCxFQUFTQyxhQUFULEVBQXVCO0FBQ3RCLGFBQU8sS0FB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QWxCO0FBQ0EsZ0JBQUlpQyxJQUFJLEdBQUdqQixPQUFPLENBQUNsQixZQUFELEVBQWVHLFdBQWYsQ0FBbEI7QUFDQStCLHNCQUFVLENBQUNFLElBQVgsRUFBZ0IsTUFBTUQsSUFBSSxDQUFDM0IsSUFBTCxFQUF0QjtBQUNIOztBQUNEb0IsZ0JBQU0sQ0FBQ1EsSUFBUCxDQUFZdkQsQ0FBQyxDQUFDNkIsSUFBRixDQUFPd0IsVUFBUCxDQUFaO0FBQ0FBLG9CQUFVLEdBQUcsRUFBYjtBQUNBTCxnQkFBTSxDQUFDUSxjQUFQLENBQXNCO0FBQUNOLG9CQUFEO0FBQVdILGtCQUFYO0FBQW1CRDtBQUFuQixXQUF0QjtBQUNIOztBQUNERSxjQUFNLENBQUNTLFdBQVA7QUFDQTVDLGVBQU8sQ0FBQztBQUFDa0M7QUFBRCxTQUFELENBQVA7QUFDSCxPQWpCTSxDQUFQO0FBa0JIOztBQUdEakIsZUFBVyxDQUFDQyxjQUFELEVBQWdCO0FBQ3ZCLFVBQUcsTUFBTUQsV0FBVCxFQUFxQjtBQUNqQixjQUFNQSxXQUFOLENBQWtCQyxjQUFsQjtBQUNIOztBQUNELFdBQUtDLE1BQUwsQ0FBWUMsVUFBWixDQUF1Qix1QkFBdkI7QUFDQSxZQUFNO0FBQUVPO0FBQUYsVUFBZ0JULGNBQWMsQ0FBQzJCLEdBQXJDO0FBQ0EsV0FBS2xCLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0FBLGVBQVMsQ0FBQ21CLFdBQVYsR0FBd0IsS0FBS0EsV0FBN0I7QUFDQSxXQUFLZixrQkFBTCxHQUEwQmIsY0FBYyxDQUFDRyxPQUFmLENBQXVCVSxrQkFBakQ7QUFDQSxXQUFLWixNQUFMLENBQVlHLFFBQVo7QUFDSDs7QUExRXNFLEdBQTNFOztpQkE2RWVDLGE7Ozs7Ozs7Ozs7Ozs7QUN2RmYsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L29wdGltaXplcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L29wdGltaXplcnNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImNvbnN0IFNHREZpdFBhcmFtc01peGlucyA9IChCYXNlT3B0aW1pemVyQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZU9wdGltaXplckNsYXNze1xuICAgIGZpdChsb3NzRm4sIHRyYWluYWJsZVZhcnMpe1xuICAgICAgICByZXR1cm4gdGhpcy50cmFpbmVyLm1pbmltaXplKGxvc3NGbiwgdHJ1ZSwgdHJhaW5hYmxlVmFycyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU0dERml0UGFyYW1zTWl4aW5zOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBTR0RGaXRQYXJhbXNNaXhpbnMgfSBmcm9tICcuL1NHREZpdFBhcmFtcy5taXhpbnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRhbU9wdGltaXplciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgWyBTR0RGaXRQYXJhbXNNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3Iob3B0aW1pemVyUGFyYW1zPXt9KXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IERlZmF1bHRQYXJhbWV0ZXJzID0ge2JldGExOiAwLjEsIGJldGEyOiAwLjIsIGVwc2lsb246MC4wM307XG4gICAgICAgIGNvbnN0IHtsZWFybmluZ1JhdGUsIGJldGExLCBiZXRhMiwgZXBzaWxvbn0gPSBmdW5jdG9yLm1lcmdlUGFyYW1zKG9wdGltaXplclBhcmFtcywgRGVmYXVsdFBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHsgbGVhcm5pbmdSYXRlLCBiZXRhMSwgYmV0YTIsIGVwc2lsb24gfTtcbiAgICAgICAgY29uc29sZS5sb2coeyd0aGlzIGlzIGFkYW0nOiB0aGlzLlQudHJhaW4uYWRhbX0pO1xuICAgICAgICB0aGlzLnRyYWluZXIgPSB0aGlzLlQudHJhaW4uYWRhbShsZWFybmluZ1JhdGUsIGJldGExLCBiZXRhMiwgZXBzaWxvbik7XG4gICAgfVxuXG4gICAgZ2V0IFBhcmFtcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbXM7XG4gICAgfVxufSIsImltcG9ydCB7ZGVmYXVsdCBhcyBBZGFtT3B0aW1pemVyfSBmcm9tICcuL2FkYW1PcHRpbWl6ZXInO1xuaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU0dERml0UGFyYW1zTWl4aW5zIH0gZnJvbSAnLi9TR0RGaXRQYXJhbXMubWl4aW5zJztcbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBvcHRpbWl6aW5nIG1ldGhvZHMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHZpYSAqKmNhdXNhbE5ldFNHRE9wdGltaXplcioqIGluc3RhbmNlLlxuICpcbiAqIEBjbGFzcyBDYXVzYWxOZXRTR0RPcHRpbWl6ZXJcbiAqIEBleHRlbmRzIHtUZW5zb3J9XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0U0dET3B0aW1pemVycy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0U0dET3B0aW1pemVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbU0dERml0UGFyYW1zTWl4aW5zXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYWRhbShvcHRpbWl6ZXJQYXJhbXMpe1xuICAgICAgICByZXR1cm4gbmV3IEFkYW1PcHRpbWl6ZXIob3B0aW1pemVyUGFyYW1zKTsgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0U0dET3B0aW1pemVyKCk7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5jbGFzcyBGdW5jdG9yIGV4dGVuZHMgQmFzZUZ1bmN0b3J7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgXG4gICAgbWVyZ2VQYXJhbXMob3B0aW1pemVyUGFyYW1zLCBkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLm1lcmdlRGVlcExlZnQob3B0aW1pemVyUGFyYW1zLCBkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRnVuY3RvcigpOyIsIi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlcyBtZXRob2RzOiAqKnRlc3QqKiBhbmQgXG4gKiBoYW5kbGUgKipUZXN0RGF0YUdlbmVyYXRvcioqIHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcuRGF0YXNldC5cbiAqXG4gKiBAY2xhc3MgRXZhbHVhdG9yTWl4aW5zXG4gKiBAZXh0ZW5kcyB7QmFzZVBpcGVsaW5lQ2xhc3N9XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvdHJhaW5lci5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IEV2YWx1YXRvck1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIFxuICAgIGdldCBUZXN0RGF0YUdlbmVyYXRvcigpe1xuICAgICAgICBpZighdGhpcy50ZXN0RGF0YUdlbmVyYXRvcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndGVzdERhdGFHZW5lcmF0b3IgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3REYXRhR2VuZXJhdG9yO1xuICAgIH1cbiAgICBzZXQgVGVzdERhdGFHZW5lcmF0b3IodGVzdERhdGFHZW5lcmF0b3Ipe1xuICAgICAgICB0aGlzLnRlc3REYXRhR2VuZXJhdG9yID0gdGVzdERhdGFHZW5lcmF0b3I7XG4gICAgfVxuXG4gICAgYXN5bmMgdGVzdChiYXRjaFNpemU9MzIpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBSID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICBjb25zdCBUZXN0RGF0YUdlbmVyYXRvciA9IHRoaXMuVGVzdERhdGFHZW5lcmF0b3IsIE9uZUhvdFByZWRpY3RNb2RlbCA9IHRoaXMuT25lSG90UHJlZGljdE1vZGVsO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIGNvbnN0IHRlc3REYXRhID0gVGVzdERhdGFHZW5lcmF0b3IoYmF0Y2hTaXplKTsgICAgXG4gICAgICAgICAgICBsZXQgcGFzcyA9IFtdO1xuICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQgeyBzYW1wbGVzLCBsYWJlbHMgfSBvZiB0ZXN0RGF0YSl7XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZVRlbnNvciA9IFQudGVuc29yKHNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbFRlbnNvciA9IFQudGVuc29yKGxhYmVscykuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgbGV0IHByZWRpY3RMYWJlbFRlbnNvciA9IE9uZUhvdFByZWRpY3RNb2RlbChzYW1wbGVUZW5zb3IpO1xuICAgICAgICAgICAgICAgIGxldCBjb3JyZWN0UHJlZGljdHMgPSBwcmVkaWN0TGFiZWxUZW5zb3IubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgICAgICAgICAgICBwYXNzID0gWy4uLnBhc3MsIC4uLiBhd2FpdCBjb3JyZWN0UHJlZGljdHMuc3VtKDEpLmRhdGEoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYWNjdXJhY3kgPSBSLm1lYW4ocGFzcyk7XG4gICAgICAgICAgICByZXNvbHZlKHthY2N1cmFjeSwgcGFzc30pOyAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IEV2YWx1YXRvciBieSBjb25maWcnKTtcbiAgICAgICAgdGhpcy5UZXN0RGF0YUdlbmVyYXRvciA9IHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuVGVzdERhdGFHZW5lcmF0b3I7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZhbHVhdG9yTWl4aW5zOyIsIi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlcyBhdHRyaWJ1dGVzOiAqKk9wdGltaXplcioqLCAqKlRyYWluZXIqKiwgKipUcmFpbkRhdGFHZW5lcmF0b3IqKiwgXG4gKiBtZXRob2RzICoqdHJhaW4qKiwgaGFuZGxlICoqT3B0aW1pemVyKiogc2V0dGluZyBvZiBwaXBlbGluZUNvbmZpZy5OZXRcbiAqIGFuZCAqKlRyYWluRGF0YUdlbmVyYXRvcioqIHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcuRGF0YXNldC5cbiAqXG4gKiBAY2xhc3MgVHJhaW5lck1peGluc1xuICogQGV4dGVuZHMge0Jhc2VQaXBlbGluZUNsYXNzfVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3RyYWluZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBUcmFpbmVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgXG4gICAgZ2V0IFRyYWluZXIoKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgY29uc3QgTG9zcz10aGlzLkxvc3NNb2RlbCwgT3B0aW1pemVyPXRoaXMuT3B0aW1pemVyO1xuICAgICAgICByZXR1cm4gKHNhbXBsZVRlbnNvciwgbGFiZWxUZW5zb3IpPT57XG4gICAgICAgICAgICBjb25zdCBMb3NzRm4gPSAoKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBULnRpZHkoICgpPT57IFxuICAgICAgICAgICAgICAgICAgICBMb3NzKHNhbXBsZVRlbnNvciwgbGFiZWxUZW5zb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTG9zcyhzYW1wbGVUZW5zb3IsIGxhYmVsVGVuc29yKTsgXG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBPcHRpbWl6ZXIuZml0KExvc3NGbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IE9wdGltaXplcigpe1xuICAgICAgICBpZighdGhpcy5vcHRpbWl6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ29wdGltaXplciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW1pemVyO1xuICAgIH1cbiAgICBcblxuICAgIHNldCBPcHRpbWl6ZXIob3B0aW1pemVyKXtcbiAgICAgICAgdGhpcy5vcHRpbWl6ZXIgPSBvcHRpbWl6ZXI7XG4gICAgfVxuXG4gICAgZ2V0IFRyYWluRGF0YUdlbmVyYXRvcigpe1xuICAgICAgICBpZighdGhpcy50cmFpbkRhdGFHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RyYWluRGF0YUdlbmVyYXRvciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHJhaW5EYXRhR2VuZXJhdG9yO1xuICAgIH1cbiAgICBzZXQgVHJhaW5EYXRhR2VuZXJhdG9yKFRyYWluRGF0YUdlbmVyYXRvcil7XG4gICAgICAgIHRoaXMudHJhaW5EYXRhR2VuZXJhdG9yID0gVHJhaW5EYXRhR2VuZXJhdG9yO1xuICAgIH1cblxuICAgIGFzeW5jIHRyYWluKG51bUVwb2NocywgYmF0Y2hTaXplKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IEYgPSB0aGlzLkYsIFIgPSB0aGlzLkYuQ29yZUZ1bmN0b3IsIFQgPSB0aGlzLlQ7XG4gICAgICAgIGNvbnN0IFRyYWluRGF0YUdlbmVyYXRvciA9IHRoaXMuVHJhaW5EYXRhR2VuZXJhdG9yLCBUcmFpbmVyID0gdGhpcy5UcmFpbmVyO1xuICAgICAgICBsZXQgbG9zc2VzID0gW10sIGxvZ2dlciA9IHRoaXMuTG9nZ2VyO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIGxvZ2dlci5wcm9ncmVzc0JlZ2luKG51bUVwb2Nocyk7XG4gICAgICAgICAgICBmb3IobGV0IGVwb2NoSWR4IG9mIEYucmFuZ2UobnVtRXBvY2hzKSl7XG4gICAgICAgICAgICAgICAgY29uc3QgVHJhaW5EYXRhID0gVHJhaW5EYXRhR2VuZXJhdG9yKGJhdGNoU2l6ZSk7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZXJMb3NzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgYXdhaXQgKGxldCB7IHNhbXBsZXMsIGxhYmVscyB9IG9mIFRyYWluRGF0YSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihzYW1wbGVzKS5hc1R5cGUoJ2Zsb2F0MzInKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsVGVuc29yID0gVC50ZW5zb3IobGFiZWxzKS5hc1R5cGUoJ2Zsb2F0MzInKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxvc3MgPSBUcmFpbmVyKHNhbXBsZVRlbnNvciwgbGFiZWxUZW5zb3IpO1xuICAgICAgICAgICAgICAgICAgICBpdGVyTG9zc2VzLnB1c2goYXdhaXQgbG9zcy5kYXRhKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb3NzZXMucHVzaChSLm1lYW4oaXRlckxvc3NlcykpO1xuICAgICAgICAgICAgICAgIGl0ZXJMb3NzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBsb2dnZXIucHJvZ3Jlc3NVcGRhdGUoe2Vwb2NoSWR4LCBsb3NzZXMsIG51bUVwb2Noc30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLnByb2dyZXNzRW5kKCk7XG4gICAgICAgICAgICByZXNvbHZlKHtsb3NzZXN9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgVHJhaW5lciBieSBjb25maWcnKTtcbiAgICAgICAgY29uc3QgeyBPcHRpbWl6ZXIgfSA9IHBpcGVsaW5lQ29uZmlnLk5ldDtcbiAgICAgICAgdGhpcy5PcHRpbWl6ZXIgPSBPcHRpbWl6ZXI7XG4gICAgICAgIE9wdGltaXplci5MYXllclJ1bm5lciA9IHRoaXMuTGF5ZXJSdW5uZXI7XG4gICAgICAgIHRoaXMuVHJhaW5EYXRhR2VuZXJhdG9yID0gcGlwZWxpbmVDb25maWcuRGF0YXNldC5UcmFpbkRhdGFHZW5lcmF0b3I7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhaW5lck1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9