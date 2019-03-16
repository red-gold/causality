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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./SGDFitParams.mixins */ "./src/StochasticGradientDescent/SGDFitParams.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _SGDFitParams) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _SGDFitParams = _interopRequireDefault(_SGDFitParams);

  class AdamOptimizer extends _causalNet2.Platform.mixWith(_causalNet.Tensor, [_SGDFitParams.default]) {
    constructor(optimizerParams = {}) {
      super();
      let defaultOptimizerParameters = {
        beta1: 0.1,
        beta2: 0.2,
        epsilon: 0.03
      };
      this.F = new _causalNet.Function();
      const R = this.F.R;
      const {
        learningRate,
        beta1,
        beta2,
        epsilon
      } = R.mergeDeepLeft(optimizerParams, defaultOptimizerParameters);
      this.trainer = this.T.train.adam(learningRate, beta1, beta2, epsilon);
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

/***/ "./src/StochasticGradientDescent/index.js":
/*!************************************************!*\
  !*** ./src/StochasticGradientDescent/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./causalNetSGDOptimizer */ "./src/StochasticGradientDescent/causalNetSGDOptimizer.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNetSGDOptimizer) {
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
  _causalNetSGDOptimizer = _interopRequireDefault(_causalNetSGDOptimizer);
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
      return _index.default;
    }
  });
  Object.defineProperty(_exports, "TrainerMixins", {
    enumerable: true,
    get: function () {
      return _trainer.default;
    }
  });
  _index = _interopRequireDefault(_index);
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

  const TrainerMixins = BasePipelineClass => class extends BasePipelineClass {
    get Optimizer() {
      if (!this.optimizer) {
        throw Error('optimizer is not set');
      }

      return this.optimizer;
    }

    set Optimizer(optimizer) {
      if (!optimizer) {
        throw Error(`expect optimizer got ${optimizer}`);
      }

      this.optimizer = optimizer;
    }

    get OptimizerParameters() {
      if (!this.optimizerParameters) {
        throw Error('optimizerParameters is not set');
      }

      return this.optimizerParameters;
    }

    set OptimizerParameters(optimizerParameters) {
      if (!optimizerParameters) {
        throw Error(`expect optimizerPameters got ${JSON.stringify(optimizerParameters)}`);
      }

      this.optimizerParameters = optimizerParameters;
    }

    get Trainer() {
      let optimizer = this.Optimizer;
      let optimizerPameters = this.OptimizerParameters;
      return optimizer(optimizerPameters);
    }

    get TrainableParameters() {
      if (!this.trainableParameters) {
        throw Error('trainableParameters is not set');
      }

      return this.trainableParameters;
    }

    set TrainableParameters(trainableParameters) {
      if (!trainableParameters) {
        throw Error(`expect trainableParameters got ${trainableParameters}`);
      }

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
      const Trainer = netConfig.Trainer;

      if (!Trainer) {
        throw Error(`expect Trainer got ${Trainer}`);
      }

      const {
        Optimizer,
        OptimizerParameters,
        TrainableParameters
      } = Trainer;
      this.Optimizer = Optimizer;
      this.OptimizerParameters = OptimizerParameters;

      if (TrainableParameters) {
        this.TrainableParameters = TrainableParameters;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvU0dERml0UGFyYW1zLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9hZGFtT3B0aW1pemVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9TdG9jaGFzdGljR3JhZGllbnREZXNjZW50L2NhdXNhbE5ldFNHRE9wdGltaXplci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvdHJhaW5lci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIlNHREZpdFBhcmFtc01peGlucyIsIkJhc2VPcHRpbWl6ZXJDbGFzcyIsImZpdCIsImxvc3NGbiIsInRyYWluYWJsZVZhcnMiLCJ0cmFpbmVyIiwibWluaW1pemUiLCJBZGFtT3B0aW1pemVyIiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZVRlbnNvciIsImNvbnN0cnVjdG9yIiwib3B0aW1pemVyUGFyYW1zIiwiZGVmYXVsdE9wdGltaXplclBhcmFtZXRlcnMiLCJiZXRhMSIsImJldGEyIiwiZXBzaWxvbiIsIkYiLCJGdW5jdGlvbiIsIlIiLCJsZWFybmluZ1JhdGUiLCJtZXJnZURlZXBMZWZ0IiwiVCIsInRyYWluIiwiYWRhbSIsIkNhdXNhbE5ldFNHRE9wdGltaXplciIsIlRyYWluZXJNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIk9wdGltaXplciIsIm9wdGltaXplciIsIkVycm9yIiwiT3B0aW1pemVyUGFyYW1ldGVycyIsIm9wdGltaXplclBhcmFtZXRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiVHJhaW5lciIsIm9wdGltaXplclBhbWV0ZXJzIiwiVHJhaW5hYmxlUGFyYW1ldGVycyIsInRyYWluYWJsZVBhcmFtZXRlcnMiLCJmbGF0dGVuUGFyYW1zIiwicGFyYW1zIiwiTWFwVmFsdWVzIiwib2JqT3JBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsIkZsYXR0ZW4iLCJwdiIsImlzVGVuc29yIiwiZmxhdHRlbiIsInJlZHVjZSIsInYiLCJyZXMiLCJpcyIsInNldFRyYWluZXJCeUNvbmZpZyIsIm5ldENvbmZpZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLFFBQU1BLGtCQUFrQixHQUFJQyxrQkFBRCxJQUF3QixjQUFjQSxrQkFBZCxDQUFnQztBQUMvRUMsT0FBRyxDQUFDQyxNQUFELEVBQVNDLGFBQVQsRUFBdUI7QUFDdEIsYUFBTyxLQUFLQyxPQUFMLENBQWFDLFFBQWIsQ0FBc0JILE1BQXRCLEVBQThCLElBQTlCLEVBQW9DQyxhQUFwQyxDQUFQO0FBQ0g7O0FBSDhFLEdBQW5GOztpQkFNZUosa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSxRQUFNTyxhQUFOLFNBQTRCQyxxQkFBU0MsT0FBVCxDQUFpQkMsaUJBQWpCLEVBQ3ZDLENBQUVWLHFCQUFGLENBRHVDLENBQTVCLENBQ1k7QUFDdkJXLGVBQVcsQ0FBQ0MsZUFBZSxHQUFDLEVBQWpCLEVBQW9CO0FBQzNCO0FBQ0EsVUFBSUMsMEJBQTBCLEdBQUc7QUFBQ0MsYUFBSyxFQUFFLEdBQVI7QUFBYUMsYUFBSyxFQUFFLEdBQXBCO0FBQXlCQyxlQUFPLEVBQUM7QUFBakMsT0FBakM7QUFDQSxXQUFLQyxDQUFMLEdBQVMsSUFBSUMsbUJBQUosRUFBVDtBQUNBLFlBQU1DLENBQUMsR0FBRyxLQUFLRixDQUFMLENBQU9FLENBQWpCO0FBQ0EsWUFBTTtBQUFDQyxvQkFBRDtBQUFlTixhQUFmO0FBQXNCQyxhQUF0QjtBQUE2QkM7QUFBN0IsVUFDRkcsQ0FBQyxDQUFDRSxhQUFGLENBQWdCVCxlQUFoQixFQUFpQ0MsMEJBQWpDLENBREo7QUFFQSxXQUFLUixPQUFMLEdBQWUsS0FBS2lCLENBQUwsQ0FBT0MsS0FBUCxDQUFhQyxJQUFiLENBQWtCSixZQUFsQixFQUFnQ04sS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDQyxPQUE5QyxDQUFmO0FBQ0g7O0FBVHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gzQjs7Ozs7QUFLQSxRQUFNUyxxQkFBTixDQUEyQjtBQUN2QmQsZUFBVyxHQUFFLENBRVo7O0FBQ0RhLFFBQUksQ0FBQ1osZUFBRCxFQUFpQjtBQUNqQixhQUFPLElBQUlMLHNCQUFKLENBQWtCSyxlQUFsQixDQUFQO0FBQ0g7O0FBTnNCOztpQkFTWixJQUFJYSxxQkFBSixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZixRQUFNQyxhQUFhLEdBQUlDLGlCQUFELElBQXNCLGNBQWNBLGlCQUFkLENBQStCO0FBRXZFLFFBQUlDLFNBQUosR0FBZTtBQUNYLFVBQUcsQ0FBQyxLQUFLQyxTQUFULEVBQW1CO0FBQ2YsY0FBTUMsS0FBSyxDQUFDLHNCQUFELENBQVg7QUFDSDs7QUFDRCxhQUFPLEtBQUtELFNBQVo7QUFDSDs7QUFFRCxRQUFJRCxTQUFKLENBQWNDLFNBQWQsRUFBd0I7QUFDcEIsVUFBRyxDQUFDQSxTQUFKLEVBQWM7QUFDVixjQUFNQyxLQUFLLENBQUUsd0JBQXVCRCxTQUFVLEVBQW5DLENBQVg7QUFDSDs7QUFDRCxXQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIOztBQUVELFFBQUlFLG1CQUFKLEdBQXlCO0FBQ3JCLFVBQUcsQ0FBQyxLQUFLQyxtQkFBVCxFQUE2QjtBQUN6QixjQUFNRixLQUFLLENBQUMsZ0NBQUQsQ0FBWDtBQUNIOztBQUNELGFBQU8sS0FBS0UsbUJBQVo7QUFDSDs7QUFFRCxRQUFJRCxtQkFBSixDQUF3QkMsbUJBQXhCLEVBQTRDO0FBQ3hDLFVBQUcsQ0FBQ0EsbUJBQUosRUFBd0I7QUFDcEIsY0FBTUYsS0FBSyxDQUFFLGdDQUErQkcsSUFBSSxDQUFDQyxTQUFMLENBQWVGLG1CQUFmLENBQW9DLEVBQXJFLENBQVg7QUFDSDs7QUFDRCxXQUFLQSxtQkFBTCxHQUEyQkEsbUJBQTNCO0FBQ0g7O0FBRUQsUUFBSUcsT0FBSixHQUFhO0FBQ1QsVUFBSU4sU0FBUyxHQUFHLEtBQUtELFNBQXJCO0FBQ0EsVUFBSVEsaUJBQWlCLEdBQUcsS0FBS0wsbUJBQTdCO0FBQ0EsYUFBT0YsU0FBUyxDQUFDTyxpQkFBRCxDQUFoQjtBQUNIOztBQUVELFFBQUlDLG1CQUFKLEdBQXlCO0FBQ3JCLFVBQUcsQ0FBQyxLQUFLQyxtQkFBVCxFQUE2QjtBQUN6QixjQUFNUixLQUFLLENBQUMsZ0NBQUQsQ0FBWDtBQUNIOztBQUNELGFBQU8sS0FBS1EsbUJBQVo7QUFDSDs7QUFFRCxRQUFJRCxtQkFBSixDQUF3QkMsbUJBQXhCLEVBQTRDO0FBQ3hDLFVBQUcsQ0FBQ0EsbUJBQUosRUFBd0I7QUFDcEIsY0FBTVIsS0FBSyxDQUFFLGtDQUFpQ1EsbUJBQW9CLEVBQXZELENBQVg7QUFDSDs7QUFDRCxXQUFLQSxtQkFBTCxHQUEyQkEsbUJBQTNCO0FBQ0g7O0FBRURDLGlCQUFhLENBQUNDLE1BQUQsRUFBUTtBQUNqQixZQUFNckIsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxZQUFrQkYsQ0FBQyxHQUFHLEtBQUtBLENBQTNCOztBQUNBLFlBQU13QixTQUFTLEdBQUlDLFVBQUQsSUFBY0MsS0FBSyxDQUFDQyxPQUFOLENBQWNGLFVBQWQsSUFBMEJBLFVBQTFCLEdBQXFDRyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osVUFBZCxDQUFyRTs7QUFDQSxZQUFNSyxPQUFPLEdBQUlDLEVBQUQsSUFBTTtBQUNsQixZQUFHL0IsQ0FBQyxDQUFDZ0MsUUFBRixDQUFXRCxFQUFYLENBQUgsRUFBa0I7QUFDZCxpQkFBT0EsRUFBUDtBQUNILFNBRkQsTUFHSTtBQUNBLGNBQUlGLE1BQU0sR0FBR0wsU0FBUyxDQUFDTyxFQUFELENBQXRCO0FBQ0EsY0FBSUUsT0FBTyxHQUFHSixNQUFNLENBQUNLLE1BQVAsQ0FBYyxDQUFDRCxPQUFELEVBQVVFLENBQVYsS0FBYztBQUN0QyxnQkFBSUMsR0FBRyxHQUFHTixPQUFPLENBQUNLLENBQUQsQ0FBakI7O0FBQ0EsZ0JBQUdqQyxDQUFDLENBQUNtQyxFQUFGLENBQUtYLEtBQUwsRUFBWVUsR0FBWixDQUFILEVBQW9CO0FBQ2hCSCxxQkFBTyxHQUFHLENBQUMsR0FBR0EsT0FBSixFQUFhLEdBQUdHLEdBQWhCLENBQVY7QUFDSCxhQUZELE1BR0k7QUFDQUgscUJBQU8sR0FBRyxDQUFDLEdBQUdBLE9BQUosRUFBYUcsR0FBYixDQUFWO0FBQ0g7O0FBQ0QsbUJBQU9ILE9BQVA7QUFDSCxXQVRhLEVBU1gsRUFUVyxDQUFkO0FBVUEsaUJBQU9BLE9BQVA7QUFDSDtBQUNKLE9BbEJEOztBQW1CQSxVQUFJSixNQUFNLEdBQUdMLFNBQVMsQ0FBQ0QsTUFBRCxDQUF0QjtBQUNBLGFBQU9NLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjLENBQUNELE9BQUQsRUFBU0UsQ0FBVCxLQUFhLENBQUMsR0FBR0YsT0FBSixFQUFhLEdBQUdILE9BQU8sQ0FBQ0ssQ0FBRCxDQUF2QixDQUEzQixFQUF1RCxFQUF2RCxDQUFQO0FBQ0g7O0FBSURHLHNCQUFrQixDQUFDQyxTQUFELEVBQVc7QUFDekIsWUFBTXJCLE9BQU8sR0FBR3FCLFNBQVMsQ0FBQ3JCLE9BQTFCOztBQUNBLFVBQUcsQ0FBQ0EsT0FBSixFQUFZO0FBQ1IsY0FBTUwsS0FBSyxDQUFFLHNCQUFxQkssT0FBUSxFQUEvQixDQUFYO0FBQ0g7O0FBQ0QsWUFBTTtBQUFDUCxpQkFBRDtBQUFZRywyQkFBWjtBQUFpQ007QUFBakMsVUFBd0RGLE9BQTlEO0FBQ0EsV0FBS1AsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxXQUFLRyxtQkFBTCxHQUEyQkEsbUJBQTNCOztBQUNBLFVBQUdNLG1CQUFILEVBQXVCO0FBQ25CLGFBQUtBLG1CQUFMLEdBQTJCQSxtQkFBM0I7QUFDSDtBQUNKOztBQXpGc0UsR0FBM0U7O2lCQTRGZVgsYTs7Ozs7Ozs7Ozs7OztBQzVGZiw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L29wdGltaXplcnMud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvb3B0aW1pemVyc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvb3B0aW1pemVyc1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJjb25zdCBTR0RGaXRQYXJhbXNNaXhpbnMgPSAoQmFzZU9wdGltaXplckNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VPcHRpbWl6ZXJDbGFzc3tcbiAgICBmaXQobG9zc0ZuLCB0cmFpbmFibGVWYXJzKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhaW5lci5taW5pbWl6ZShsb3NzRm4sIHRydWUsIHRyYWluYWJsZVZhcnMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNHREZpdFBhcmFtc01peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciwgRnVuY3Rpb24gfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU0dERml0UGFyYW1zTWl4aW5zIH0gZnJvbSAnLi9TR0RGaXRQYXJhbXMubWl4aW5zJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYW1PcHRpbWl6ZXIgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFxuICAgIFsgU0dERml0UGFyYW1zTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKG9wdGltaXplclBhcmFtcz17fSl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldCBkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyA9IHtiZXRhMTogMC4xLCBiZXRhMjogMC4yLCBlcHNpbG9uOjAuMDN9O1xuICAgICAgICB0aGlzLkYgPSBuZXcgRnVuY3Rpb24oKTtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuRi5SO1xuICAgICAgICBjb25zdCB7bGVhcm5pbmdSYXRlLCBiZXRhMSwgYmV0YTIsIGVwc2lsb259ID0gXG4gICAgICAgICAgICBSLm1lcmdlRGVlcExlZnQob3B0aW1pemVyUGFyYW1zLCBkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMudHJhaW5lciA9IHRoaXMuVC50cmFpbi5hZGFtKGxlYXJuaW5nUmF0ZSwgYmV0YTEsIGJldGEyLCBlcHNpbG9uKTtcbiAgICB9XG59IiwiaW1wb3J0IHtkZWZhdWx0IGFzIEFkYW1PcHRpbWl6ZXJ9IGZyb20gJy4vYWRhbU9wdGltaXplcic7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0U0dET3B0aW1pemVyIHByb3ZpZGUgU0dEIG9wdGltaXplcnMgYmFzZWQgb24gVGVuc29yZmxvd2pzIG9wdGltaXplclxuICpcbiAqIEBjbGFzcyBDYXVzYWxOZXRTR0RPcHRpbWl6ZXJcbiAqL1xuY2xhc3MgQ2F1c2FsTmV0U0dET3B0aW1pemVye1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG4gICAgYWRhbShvcHRpbWl6ZXJQYXJhbXMpe1xuICAgICAgICByZXR1cm4gbmV3IEFkYW1PcHRpbWl6ZXIob3B0aW1pemVyUGFyYW1zKTsgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0U0dET3B0aW1pemVyKCk7IiwiY29uc3QgVHJhaW5lck1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIFxuICAgIGdldCBPcHRpbWl6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMub3B0aW1pemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdvcHRpbWl6ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGltaXplcjtcbiAgICB9XG4gICAgXG4gICAgc2V0IE9wdGltaXplcihvcHRpbWl6ZXIpe1xuICAgICAgICBpZighb3B0aW1pemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3Qgb3B0aW1pemVyIGdvdCAke29wdGltaXplcn1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGltaXplciA9IG9wdGltaXplcjtcbiAgICB9XG4gICAgXG4gICAgZ2V0IE9wdGltaXplclBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMub3B0aW1pemVyUGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignb3B0aW1pemVyUGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW1pemVyUGFyYW1ldGVycztcbiAgICB9XG4gICAgXG4gICAgc2V0IE9wdGltaXplclBhcmFtZXRlcnMob3B0aW1pemVyUGFyYW1ldGVycyl7XG4gICAgICAgIGlmKCFvcHRpbWl6ZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3Qgb3B0aW1pemVyUGFtZXRlcnMgZ290ICR7SlNPTi5zdHJpbmdpZnkob3B0aW1pemVyUGFyYW1ldGVycyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpbWl6ZXJQYXJhbWV0ZXJzID0gb3B0aW1pemVyUGFyYW1ldGVycztcbiAgICB9XG4gICAgXG4gICAgZ2V0IFRyYWluZXIoKXtcbiAgICAgICAgbGV0IG9wdGltaXplciA9IHRoaXMuT3B0aW1pemVyO1xuICAgICAgICBsZXQgb3B0aW1pemVyUGFtZXRlcnMgPSB0aGlzLk9wdGltaXplclBhcmFtZXRlcnM7XG4gICAgICAgIHJldHVybiBvcHRpbWl6ZXIob3B0aW1pemVyUGFtZXRlcnMpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgVHJhaW5hYmxlUGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy50cmFpbmFibGVQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd0cmFpbmFibGVQYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50cmFpbmFibGVQYXJhbWV0ZXJzO1xuICAgIH1cblxuICAgIHNldCBUcmFpbmFibGVQYXJhbWV0ZXJzKHRyYWluYWJsZVBhcmFtZXRlcnMpe1xuICAgICAgICBpZighdHJhaW5hYmxlUGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHRyYWluYWJsZVBhcmFtZXRlcnMgZ290ICR7dHJhaW5hYmxlUGFyYW1ldGVyc31gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYWluYWJsZVBhcmFtZXRlcnMgPSB0cmFpbmFibGVQYXJhbWV0ZXJzO1xuICAgIH1cblxuICAgIGZsYXR0ZW5QYXJhbXMocGFyYW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc3QgTWFwVmFsdWVzID0gKG9iak9yQXJyYXkpPT5BcnJheS5pc0FycmF5KG9iak9yQXJyYXkpP29iak9yQXJyYXk6T2JqZWN0LnZhbHVlcyhvYmpPckFycmF5KTtcbiAgICAgICAgY29uc3QgRmxhdHRlbiA9IChwdik9PntcbiAgICAgICAgICAgIGlmKEYuaXNUZW5zb3IocHYpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBNYXBWYWx1ZXMocHYpO1xuICAgICAgICAgICAgICAgIGxldCBmbGF0dGVuID0gdmFsdWVzLnJlZHVjZSgoZmxhdHRlbiwgdik9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IEZsYXR0ZW4odik7XG4gICAgICAgICAgICAgICAgICAgIGlmKFIuaXMoQXJyYXksIHJlcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbiA9IFsuLi5mbGF0dGVuLCAuLi5yZXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuID0gWy4uLmZsYXR0ZW4sIHJlc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsYXR0ZW47XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbGF0dGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgdmFsdWVzID0gTWFwVmFsdWVzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKChmbGF0dGVuLHYpPT5bLi4uZmxhdHRlbiwgLi4uRmxhdHRlbih2KV0sW10pO1xuICAgIH1cblxuICAgIFxuICAgIFxuICAgIHNldFRyYWluZXJCeUNvbmZpZyhuZXRDb25maWcpe1xuICAgICAgICBjb25zdCBUcmFpbmVyID0gbmV0Q29uZmlnLlRyYWluZXI7XG4gICAgICAgIGlmKCFUcmFpbmVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgVHJhaW5lciBnb3QgJHtUcmFpbmVyfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHtPcHRpbWl6ZXIsIE9wdGltaXplclBhcmFtZXRlcnMsIFRyYWluYWJsZVBhcmFtZXRlcnN9ID0gVHJhaW5lcjtcbiAgICAgICAgdGhpcy5PcHRpbWl6ZXIgPSBPcHRpbWl6ZXI7XG4gICAgICAgIHRoaXMuT3B0aW1pemVyUGFyYW1ldGVycyA9IE9wdGltaXplclBhcmFtZXRlcnM7XG4gICAgICAgIGlmKFRyYWluYWJsZVBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhpcy5UcmFpbmFibGVQYXJhbWV0ZXJzID0gVHJhaW5hYmxlUGFyYW1ldGVycztcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWluZXJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==