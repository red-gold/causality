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
/*!**************************************************************************************************!*\
  !*** /Users/huynh/github/causality/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
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

  class Functor extends _causalNet.Function {
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
    get Optimizer() {
      if (!this.optimizer) {
        throw Error('optimizer is not set');
      }

      return this.optimizer;
    }

    get OptimizerParameters() {
      return this.optimizerParameters;
      return this.Optimizer.Params;
    }

    get TrainableParameters() {
      if (!this.trainableParameters) {
        throw Error('trainableParameters is not set');
      }

      return this.trainableParameters;
    }

    set Trainer(trainer) {
      const {
        Optimizer,
        OptimizerParameters,
        TrainableParameters
      } = trainer;
      this.OptimizerParameters = OptimizerParameters;
      this.Optimizer = Optimizer;

      if (TrainableParameters) {
        this.TrainableParameters = TrainableParameters;
      }
    }

    set Optimizer(optimizer) {
      let params = this.OptimizerParameters;
      this.optimizer = optimizer(params);
    }

    set OptimizerParameters(optimizerParameters) {
      _causalNet2.assert.beInstanceOf(optimizerParameters, Object);

      this.optimizerParameters = optimizerParameters;
    }

    set TrainableParameters(trainableParameters) {
      _causalNet2.assert.beInstanceOf(trainableParameters, Array);

      this.trainableParameters = trainableParameters;
    }

    flattenParams(params) {
      const R = this.R,
            F = this.F;

      const MapValues = objOrArray => Array.isArray(objOrArray) ? objOrArray : Object.values(objOrArray);

      const Flatten = pv => {
        if (F.isTensor(pv)) {
          return pv;
        } else {
          let values = MapValues(pv);
          let flatten = values.reduce((flatten, v) => {
            let res = Flatten(v);

            if (R.is(Array, res)) {
              flatten = [...flatten, ...res];
            } else {
              flatten = [...flatten, res];
            }

            return flatten;
          }, []);
          return flatten;
        }
      };

      let values = MapValues(params);
      return values.reduce((flatten, v) => [...flatten, ...Flatten(v)], []);
    }

    setTrainerByConfig(netConfig) {
      this.Trainer = netConfig.Trainer;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL1VzZXJzL2h1eW5oL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9TdG9jaGFzdGljR3JhZGllbnREZXNjZW50L1NHREZpdFBhcmFtcy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvYWRhbU9wdGltaXplci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9jYXVzYWxOZXRTR0RPcHRpbWl6ZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvZnVuY3Rvci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvdHJhaW5lci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIlNHREZpdFBhcmFtc01peGlucyIsIkJhc2VPcHRpbWl6ZXJDbGFzcyIsImZpdCIsImxvc3NGbiIsInRyYWluYWJsZVZhcnMiLCJ0cmFpbmVyIiwibWluaW1pemUiLCJBZGFtT3B0aW1pemVyIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZVRlbnNvciIsImNvbnN0cnVjdG9yIiwib3B0aW1pemVyUGFyYW1zIiwiRGVmYXVsdFBhcmFtZXRlcnMiLCJiZXRhMSIsImJldGEyIiwiZXBzaWxvbiIsImxlYXJuaW5nUmF0ZSIsImZ1bmN0b3IiLCJtZXJnZVBhcmFtcyIsInBhcmFtcyIsIlQiLCJ0cmFpbiIsImFkYW0iLCJQYXJhbXMiLCJDYXVzYWxOZXRTR0RPcHRpbWl6ZXIiLCJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyIsIlIiLCJtZXJnZURlZXBMZWZ0IiwiVHJhaW5lck1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiT3B0aW1pemVyIiwib3B0aW1pemVyIiwiRXJyb3IiLCJPcHRpbWl6ZXJQYXJhbWV0ZXJzIiwib3B0aW1pemVyUGFyYW1ldGVycyIsIlRyYWluYWJsZVBhcmFtZXRlcnMiLCJ0cmFpbmFibGVQYXJhbWV0ZXJzIiwiVHJhaW5lciIsImFzc2VydCIsImJlSW5zdGFuY2VPZiIsIk9iamVjdCIsIkFycmF5IiwiZmxhdHRlblBhcmFtcyIsIkYiLCJNYXBWYWx1ZXMiLCJvYmpPckFycmF5IiwiaXNBcnJheSIsInZhbHVlcyIsIkZsYXR0ZW4iLCJwdiIsImlzVGVuc29yIiwiZmxhdHRlbiIsInJlZHVjZSIsInYiLCJyZXMiLCJpcyIsInNldFRyYWluZXJCeUNvbmZpZyIsIm5ldENvbmZpZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxn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QUFKLEVBQWEsR0FBR0gsT0FBTyxDQUFDSyxDQUFELENBQXZCLENBQTNCLEVBQXVELEVBQXZELENBQVA7QUFDSDs7QUFFREcsc0JBQWtCLENBQUNDLFNBQUQsRUFBVztBQUN6QixXQUFLcEIsT0FBTCxHQUFlb0IsU0FBUyxDQUFDcEIsT0FBekI7QUFDSDs7QUF6RXNFLEdBQTNFOztpQkE0RWVULGE7Ozs7Ozs7Ozs7Ozs7QUM5RWYsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImNvbnN0IFNHREZpdFBhcmFtc01peGlucyA9IChCYXNlT3B0aW1pemVyQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZU9wdGltaXplckNsYXNze1xuICAgIGZpdChsb3NzRm4sIHRyYWluYWJsZVZhcnMpe1xuICAgICAgICByZXR1cm4gdGhpcy50cmFpbmVyLm1pbmltaXplKGxvc3NGbiwgdHJ1ZSwgdHJhaW5hYmxlVmFycyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU0dERml0UGFyYW1zTWl4aW5zOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBTR0RGaXRQYXJhbXNNaXhpbnMgfSBmcm9tICcuL1NHREZpdFBhcmFtcy5taXhpbnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRhbU9wdGltaXplciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgWyBTR0RGaXRQYXJhbXNNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3Iob3B0aW1pemVyUGFyYW1zPXt9KXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IERlZmF1bHRQYXJhbWV0ZXJzID0ge2JldGExOiAwLjEsIGJldGEyOiAwLjIsIGVwc2lsb246MC4wM307XG4gICAgICAgIGNvbnN0IHtsZWFybmluZ1JhdGUsIGJldGExLCBiZXRhMiwgZXBzaWxvbn0gPSBmdW5jdG9yLm1lcmdlUGFyYW1zKG9wdGltaXplclBhcmFtcywgRGVmYXVsdFBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLnBhcmFtcyA9IHsgbGVhcm5pbmdSYXRlLCBiZXRhMSwgYmV0YTIsIGVwc2lsb24gfTtcbiAgICAgICAgdGhpcy50cmFpbmVyID0gdGhpcy5ULnRyYWluLmFkYW0obGVhcm5pbmdSYXRlLCBiZXRhMSwgYmV0YTIsIGVwc2lsb24pO1xuICAgIH1cblxuICAgIGdldCBQYXJhbXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICAgIH1cbn0iLCJpbXBvcnQge2RlZmF1bHQgYXMgQWRhbU9wdGltaXplcn0gZnJvbSAnLi9hZGFtT3B0aW1pemVyJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRTR0RPcHRpbWl6ZXIgcHJvdmlkZSBTR0Qgb3B0aW1pemVycyBiYXNlZCBvbiBUZW5zb3JmbG93anMgb3B0aW1pemVyXG4gKlxuICogQGNsYXNzIENhdXNhbE5ldFNHRE9wdGltaXplclxuICovXG5jbGFzcyBDYXVzYWxOZXRTR0RPcHRpbWl6ZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgYWRhbShvcHRpbWl6ZXJQYXJhbXMpe1xuICAgICAgICByZXR1cm4gbmV3IEFkYW1PcHRpbWl6ZXIob3B0aW1pemVyUGFyYW1zKTsgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0U0dET3B0aW1pemVyKCk7IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuY2xhc3MgRnVuY3RvciBleHRlbmRzIEJhc2VGdW5jdG9ye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIG1lcmdlUGFyYW1zKG9wdGltaXplclBhcmFtcywgZGVmYXVsdE9wdGltaXplclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5tZXJnZURlZXBMZWZ0KG9wdGltaXplclBhcmFtcywgZGVmYXVsdE9wdGltaXplclBhcmFtZXRlcnMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5jb25zdCBUcmFpbmVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgXG4gICAgZ2V0IE9wdGltaXplcigpe1xuICAgICAgICBpZighdGhpcy5vcHRpbWl6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ29wdGltaXplciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW1pemVyO1xuICAgIH1cbiAgICBcbiAgICBnZXQgT3B0aW1pemVyUGFyYW1ldGVycygpe1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpbWl6ZXJQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gdGhpcy5PcHRpbWl6ZXIuUGFyYW1zO1xuICAgIH1cblxuICAgIGdldCBUcmFpbmFibGVQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnRyYWluYWJsZVBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3RyYWluYWJsZVBhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRyYWluYWJsZVBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgc2V0IFRyYWluZXIodHJhaW5lcil7XG4gICAgICAgIGNvbnN0IHsgT3B0aW1pemVyLCBPcHRpbWl6ZXJQYXJhbWV0ZXJzLCBUcmFpbmFibGVQYXJhbWV0ZXJzIH0gPSB0cmFpbmVyO1xuICAgICAgICB0aGlzLk9wdGltaXplclBhcmFtZXRlcnMgPSBPcHRpbWl6ZXJQYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLk9wdGltaXplciA9IE9wdGltaXplcjtcbiAgICAgICAgaWYoVHJhaW5hYmxlUGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aGlzLlRyYWluYWJsZVBhcmFtZXRlcnMgPSBUcmFpbmFibGVQYXJhbWV0ZXJzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0IE9wdGltaXplcihvcHRpbWl6ZXIpe1xuICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5PcHRpbWl6ZXJQYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLm9wdGltaXplciA9IG9wdGltaXplcihwYXJhbXMpO1xuICAgIH1cblxuICAgIHNldCBPcHRpbWl6ZXJQYXJhbWV0ZXJzKG9wdGltaXplclBhcmFtZXRlcnMpe1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKG9wdGltaXplclBhcmFtZXRlcnMsIE9iamVjdCk7XG4gICAgICAgIHRoaXMub3B0aW1pemVyUGFyYW1ldGVycyA9IG9wdGltaXplclBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgc2V0IFRyYWluYWJsZVBhcmFtZXRlcnModHJhaW5hYmxlUGFyYW1ldGVycyl7XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YodHJhaW5hYmxlUGFyYW1ldGVycywgQXJyYXkpO1xuICAgICAgICB0aGlzLnRyYWluYWJsZVBhcmFtZXRlcnMgPSB0cmFpbmFibGVQYXJhbWV0ZXJzO1xuICAgIH1cblxuICAgIGZsYXR0ZW5QYXJhbXMocGFyYW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc3QgTWFwVmFsdWVzID0gKG9iak9yQXJyYXkpPT5BcnJheS5pc0FycmF5KG9iak9yQXJyYXkpP29iak9yQXJyYXk6T2JqZWN0LnZhbHVlcyhvYmpPckFycmF5KTtcbiAgICAgICAgY29uc3QgRmxhdHRlbiA9IChwdik9PntcbiAgICAgICAgICAgIGlmKEYuaXNUZW5zb3IocHYpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBNYXBWYWx1ZXMocHYpO1xuICAgICAgICAgICAgICAgIGxldCBmbGF0dGVuID0gdmFsdWVzLnJlZHVjZSgoZmxhdHRlbiwgdik9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IEZsYXR0ZW4odik7XG4gICAgICAgICAgICAgICAgICAgIGlmKFIuaXMoQXJyYXksIHJlcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbiA9IFsuLi5mbGF0dGVuLCAuLi5yZXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuID0gWy4uLmZsYXR0ZW4sIHJlc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsYXR0ZW47XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbGF0dGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgdmFsdWVzID0gTWFwVmFsdWVzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKChmbGF0dGVuLHYpPT5bLi4uZmxhdHRlbiwgLi4uRmxhdHRlbih2KV0sW10pO1xuICAgIH1cblxuICAgIHNldFRyYWluZXJCeUNvbmZpZyhuZXRDb25maWcpe1xuICAgICAgICB0aGlzLlRyYWluZXIgPSBuZXRDb25maWcuVHJhaW5lcjtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFpbmVyTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=