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
      const {
        learningRate,
        beta1,
        beta2,
        epsilon
      } = this.F.R.mergeDeepLeft(optimizerParams, defaultOptimizerParameters);
      this.trainer = this.T.train.adam(learningRate, beta1, beta2, epsilon);
    }

  }

  _exports.default = AdamOptimizer;
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
  let causalNetSGDOptimizer = {
    adam: optimizerParams => {
      return new _adamOptimizer.default(optimizerParams);
    }
  };
  var _default = causalNetSGDOptimizer;
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./StochasticGradientDescent */ "./src/StochasticGradientDescent/index.js"), __webpack_require__(/*! ./trainer.mixins */ "./src/trainer.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _StochasticGradientDescent, _trainer) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "causalNetSGDOptimizer", {
    enumerable: true,
    get: function () {
      return _StochasticGradientDescent.default;
    }
  });
  Object.defineProperty(_exports, "TrainerMixins", {
    enumerable: true,
    get: function () {
      return _trainer.default;
    }
  });
  _StochasticGradientDescent = _interopRequireDefault(_StochasticGradientDescent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvU0dERml0UGFyYW1zLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9hZGFtT3B0aW1pemVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9TdG9jaGFzdGljR3JhZGllbnREZXNjZW50L2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy90cmFpbmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiU0dERml0UGFyYW1zTWl4aW5zIiwiQmFzZU9wdGltaXplckNsYXNzIiwiZml0IiwibG9zc0ZuIiwidHJhaW5hYmxlVmFycyIsInRyYWluZXIiLCJtaW5pbWl6ZSIsIkFkYW1PcHRpbWl6ZXIiLCJQbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiY29uc3RydWN0b3IiLCJvcHRpbWl6ZXJQYXJhbXMiLCJkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyIsImJldGExIiwiYmV0YTIiLCJlcHNpbG9uIiwiRiIsIkZ1bmN0aW9uIiwibGVhcm5pbmdSYXRlIiwiUiIsIm1lcmdlRGVlcExlZnQiLCJUIiwidHJhaW4iLCJhZGFtIiwiY2F1c2FsTmV0U0dET3B0aW1pemVyIiwiVHJhaW5lck1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiT3B0aW1pemVyIiwib3B0aW1pemVyIiwiRXJyb3IiLCJPcHRpbWl6ZXJQYXJhbWV0ZXJzIiwib3B0aW1pemVyUGFyYW1ldGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJUcmFpbmVyIiwib3B0aW1pemVyUGFtZXRlcnMiLCJUcmFpbmFibGVQYXJhbWV0ZXJzIiwidHJhaW5hYmxlUGFyYW1ldGVycyIsImZsYXR0ZW5QYXJhbXMiLCJwYXJhbXMiLCJNYXBWYWx1ZXMiLCJvYmpPckFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiRmxhdHRlbiIsInB2IiwiaXNUZW5zb3IiLCJmbGF0dGVuIiwicmVkdWNlIiwidiIsInJlcyIsImlzIiwic2V0VHJhaW5lckJ5Q29uZmlnIiwibmV0Q29uZmlnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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dC9vcHRpbWl6ZXJzLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L29wdGltaXplcnNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L29wdGltaXplcnNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiY29uc3QgU0dERml0UGFyYW1zTWl4aW5zID0gKEJhc2VPcHRpbWl6ZXJDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlT3B0aW1pemVyQ2xhc3N7XG4gICAgZml0KGxvc3NGbiwgdHJhaW5hYmxlVmFycyl7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYWluZXIubWluaW1pemUobG9zc0ZuLCB0cnVlLCB0cmFpbmFibGVWYXJzKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTR0RGaXRQYXJhbXNNaXhpbnM7IiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IsIEZ1bmN0aW9uIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNHREZpdFBhcmFtc01peGlucyB9IGZyb20gJy4vU0dERml0UGFyYW1zLm1peGlucyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGFtT3B0aW1pemVyIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICBbIFNHREZpdFBhcmFtc01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3RvcihvcHRpbWl6ZXJQYXJhbXM9e30pe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgZGVmYXVsdE9wdGltaXplclBhcmFtZXRlcnMgPSB7YmV0YTE6IDAuMSwgYmV0YTI6IDAuMiwgZXBzaWxvbjowLjAzfTtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgICAgIGNvbnN0IHtsZWFybmluZ1JhdGUsIGJldGExLCBiZXRhMiwgZXBzaWxvbn0gPSBcbiAgICAgICAgICAgIHRoaXMuRi5SLm1lcmdlRGVlcExlZnQob3B0aW1pemVyUGFyYW1zLCBkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMudHJhaW5lciA9IHRoaXMuVC50cmFpbi5hZGFtKGxlYXJuaW5nUmF0ZSwgYmV0YTEsIGJldGEyLCBlcHNpbG9uKTtcbiAgICB9XG59IiwiaW1wb3J0IHtkZWZhdWx0IGFzIEFkYW1PcHRpbWl6ZXJ9IGZyb20gJy4vYWRhbU9wdGltaXplcic7XG5sZXQgY2F1c2FsTmV0U0dET3B0aW1pemVyID0ge1xuICAgIGFkYW06IChvcHRpbWl6ZXJQYXJhbXMpPT57XG4gICAgICAgIHJldHVybiBuZXcgQWRhbU9wdGltaXplcihvcHRpbWl6ZXJQYXJhbXMpOyBcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgY2F1c2FsTmV0U0dET3B0aW1pemVyOyIsImNvbnN0IFRyYWluZXJNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXQgT3B0aW1pemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLm9wdGltaXplcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignb3B0aW1pemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpbWl6ZXI7XG4gICAgfVxuICAgIFxuICAgIHNldCBPcHRpbWl6ZXIob3B0aW1pemVyKXtcbiAgICAgICAgaWYoIW9wdGltaXplcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IG9wdGltaXplciBnb3QgJHtvcHRpbWl6ZXJ9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpbWl6ZXIgPSBvcHRpbWl6ZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBPcHRpbWl6ZXJQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLm9wdGltaXplclBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ29wdGltaXplclBhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGltaXplclBhcmFtZXRlcnM7XG4gICAgfVxuICAgIFxuICAgIHNldCBPcHRpbWl6ZXJQYXJhbWV0ZXJzKG9wdGltaXplclBhcmFtZXRlcnMpe1xuICAgICAgICBpZighb3B0aW1pemVyUGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IG9wdGltaXplclBhbWV0ZXJzIGdvdCAke0pTT04uc3RyaW5naWZ5KG9wdGltaXplclBhcmFtZXRlcnMpfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW1pemVyUGFyYW1ldGVycyA9IG9wdGltaXplclBhcmFtZXRlcnM7XG4gICAgfVxuICAgIFxuICAgIGdldCBUcmFpbmVyKCl7XG4gICAgICAgIGxldCBvcHRpbWl6ZXIgPSB0aGlzLk9wdGltaXplcjtcbiAgICAgICAgbGV0IG9wdGltaXplclBhbWV0ZXJzID0gdGhpcy5PcHRpbWl6ZXJQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gb3B0aW1pemVyKG9wdGltaXplclBhbWV0ZXJzKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IFRyYWluYWJsZVBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMudHJhaW5hYmxlUGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndHJhaW5hYmxlUGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHJhaW5hYmxlUGFyYW1ldGVycztcbiAgICB9XG5cbiAgICBzZXQgVHJhaW5hYmxlUGFyYW1ldGVycyh0cmFpbmFibGVQYXJhbWV0ZXJzKXtcbiAgICAgICAgaWYoIXRyYWluYWJsZVBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCB0cmFpbmFibGVQYXJhbWV0ZXJzIGdvdCAke3RyYWluYWJsZVBhcmFtZXRlcnN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFpbmFibGVQYXJhbWV0ZXJzID0gdHJhaW5hYmxlUGFyYW1ldGVycztcbiAgICB9XG5cbiAgICBmbGF0dGVuUGFyYW1zKHBhcmFtcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIEYgPSB0aGlzLkY7XG4gICAgICAgIGNvbnN0IE1hcFZhbHVlcyA9IChvYmpPckFycmF5KT0+QXJyYXkuaXNBcnJheShvYmpPckFycmF5KT9vYmpPckFycmF5Ok9iamVjdC52YWx1ZXMob2JqT3JBcnJheSk7XG4gICAgICAgIGNvbnN0IEZsYXR0ZW4gPSAocHYpPT57XG4gICAgICAgICAgICBpZihGLmlzVGVuc29yKHB2KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gTWFwVmFsdWVzKHB2KTtcbiAgICAgICAgICAgICAgICBsZXQgZmxhdHRlbiA9IHZhbHVlcy5yZWR1Y2UoKGZsYXR0ZW4sIHYpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBGbGF0dGVuKHYpO1xuICAgICAgICAgICAgICAgICAgICBpZihSLmlzKEFycmF5LCByZXMpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW4gPSBbLi4uZmxhdHRlbiwgLi4ucmVzXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbiA9IFsuLi5mbGF0dGVuLCByZXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmbGF0dGVuO1xuICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxhdHRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHZhbHVlcyA9IE1hcFZhbHVlcyhwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdmFsdWVzLnJlZHVjZSgoZmxhdHRlbix2KT0+Wy4uLmZsYXR0ZW4sIC4uLkZsYXR0ZW4odildLFtdKTtcbiAgICB9XG5cbiAgICBcbiAgICBcbiAgICBzZXRUcmFpbmVyQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgY29uc3QgVHJhaW5lciA9IG5ldENvbmZpZy5UcmFpbmVyO1xuICAgICAgICBpZighVHJhaW5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IFRyYWluZXIgZ290ICR7VHJhaW5lcn1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7T3B0aW1pemVyLCBPcHRpbWl6ZXJQYXJhbWV0ZXJzLCBUcmFpbmFibGVQYXJhbWV0ZXJzfSA9IFRyYWluZXI7XG4gICAgICAgIHRoaXMuT3B0aW1pemVyID0gT3B0aW1pemVyO1xuICAgICAgICB0aGlzLk9wdGltaXplclBhcmFtZXRlcnMgPSBPcHRpbWl6ZXJQYXJhbWV0ZXJzO1xuICAgICAgICBpZihUcmFpbmFibGVQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRoaXMuVHJhaW5hYmxlUGFyYW1ldGVycyA9IFRyYWluYWJsZVBhcmFtZXRlcnM7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFpbmVyTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=