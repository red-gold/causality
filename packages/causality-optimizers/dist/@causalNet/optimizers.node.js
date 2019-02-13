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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9vcHRpbWl6ZXJzLy4vc3JjL1N0b2NoYXN0aWNHcmFkaWVudERlc2NlbnQvU0dERml0UGFyYW1zLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvLi9zcmMvU3RvY2hhc3RpY0dyYWRpZW50RGVzY2VudC9hZGFtT3B0aW1pemVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy9TdG9jaGFzdGljR3JhZGllbnREZXNjZW50L2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvb3B0aW1pemVycy8uL3NyYy90cmFpbmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L29wdGltaXplcnMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiU0dERml0UGFyYW1zTWl4aW5zIiwiQmFzZU9wdGltaXplckNsYXNzIiwiZml0IiwibG9zc0ZuIiwidHJhaW5hYmxlVmFycyIsInRyYWluZXIiLCJtaW5pbWl6ZSIsIkFkYW1PcHRpbWl6ZXIiLCJQbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiY29uc3RydWN0b3IiLCJvcHRpbWl6ZXJQYXJhbXMiLCJkZWZhdWx0T3B0aW1pemVyUGFyYW1ldGVycyIsImJldGExIiwiYmV0YTIiLCJlcHNpbG9uIiwiRiIsIkZ1bmN0aW9uIiwibGVhcm5pbmdSYXRlIiwiUiIsIm1lcmdlRGVlcExlZnQiLCJUIiwidHJhaW4iLCJhZGFtIiwiY2F1c2FsTmV0U0dET3B0aW1pemVyIiwiVHJhaW5lck1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiT3B0aW1pemVyIiwib3B0aW1pemVyIiwiRXJyb3IiLCJPcHRpbWl6ZXJQYXJhbWV0ZXJzIiwib3B0aW1pemVyUGFyYW1ldGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJUcmFpbmVyIiwib3B0aW1pemVyUGFtZXRlcnMiLCJUcmFpbmFibGVQYXJhbWV0ZXJzIiwidHJhaW5hYmxlUGFyYW1ldGVycyIsImZsYXR0ZW5QYXJhbXMiLCJwYXJhbXMiLCJNYXBWYWx1ZXMiLCJvYmpPckFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiRmxhdHRlbiIsInB2IiwiaXNUZW5zb3IiLCJmbGF0dGVuIiwicmVkdWNlIiwidiIsInJlcyIsImlzIiwic2V0VHJhaW5lckJ5Q29uZmlnIiwibmV0Q29uZmlnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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dC9vcHRpbWl6ZXJzLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9vcHRpbWl6ZXJzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImNvbnN0IFNHREZpdFBhcmFtc01peGlucyA9IChCYXNlT3B0aW1pemVyQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZU9wdGltaXplckNsYXNze1xuICAgIGZpdChsb3NzRm4sIHRyYWluYWJsZVZhcnMpe1xuICAgICAgICByZXR1cm4gdGhpcy50cmFpbmVyLm1pbmltaXplKGxvc3NGbiwgdHJ1ZSwgdHJhaW5hYmxlVmFycyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU0dERml0UGFyYW1zTWl4aW5zOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yLCBGdW5jdGlvbiB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBTR0RGaXRQYXJhbXNNaXhpbnMgfSBmcm9tICcuL1NHREZpdFBhcmFtcy5taXhpbnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRhbU9wdGltaXplciBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgWyBTR0RGaXRQYXJhbXNNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3Iob3B0aW1pemVyUGFyYW1zPXt9KXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IGRlZmF1bHRPcHRpbWl6ZXJQYXJhbWV0ZXJzID0ge2JldGExOiAwLjEsIGJldGEyOiAwLjIsIGVwc2lsb246MC4wM307XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgICAgICBjb25zdCB7bGVhcm5pbmdSYXRlLCBiZXRhMSwgYmV0YTIsIGVwc2lsb259ID0gXG4gICAgICAgICAgICB0aGlzLkYuUi5tZXJnZURlZXBMZWZ0KG9wdGltaXplclBhcmFtcywgZGVmYXVsdE9wdGltaXplclBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLnRyYWluZXIgPSB0aGlzLlQudHJhaW4uYWRhbShsZWFybmluZ1JhdGUsIGJldGExLCBiZXRhMiwgZXBzaWxvbik7XG4gICAgfVxufSIsImltcG9ydCB7ZGVmYXVsdCBhcyBBZGFtT3B0aW1pemVyfSBmcm9tICcuL2FkYW1PcHRpbWl6ZXInO1xubGV0IGNhdXNhbE5ldFNHRE9wdGltaXplciA9IHtcbiAgICBhZGFtOiAob3B0aW1pemVyUGFyYW1zKT0+e1xuICAgICAgICByZXR1cm4gbmV3IEFkYW1PcHRpbWl6ZXIob3B0aW1pemVyUGFyYW1zKTsgXG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGNhdXNhbE5ldFNHRE9wdGltaXplcjsiLCJjb25zdCBUcmFpbmVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgZ2V0IE9wdGltaXplcigpe1xuICAgICAgICBpZighdGhpcy5vcHRpbWl6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ29wdGltaXplciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW1pemVyO1xuICAgIH1cbiAgICBcbiAgICBzZXQgT3B0aW1pemVyKG9wdGltaXplcil7XG4gICAgICAgIGlmKCFvcHRpbWl6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBvcHRpbWl6ZXIgZ290ICR7b3B0aW1pemVyfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW1pemVyID0gb3B0aW1pemVyO1xuICAgIH1cbiAgICBcbiAgICBnZXQgT3B0aW1pemVyUGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5vcHRpbWl6ZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdvcHRpbWl6ZXJQYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpbWl6ZXJQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgT3B0aW1pemVyUGFyYW1ldGVycyhvcHRpbWl6ZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgaWYoIW9wdGltaXplclBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBvcHRpbWl6ZXJQYW1ldGVycyBnb3QgJHtKU09OLnN0cmluZ2lmeShvcHRpbWl6ZXJQYXJhbWV0ZXJzKX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGltaXplclBhcmFtZXRlcnMgPSBvcHRpbWl6ZXJQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBcbiAgICBnZXQgVHJhaW5lcigpe1xuICAgICAgICBsZXQgb3B0aW1pemVyID0gdGhpcy5PcHRpbWl6ZXI7XG4gICAgICAgIGxldCBvcHRpbWl6ZXJQYW1ldGVycyA9IHRoaXMuT3B0aW1pemVyUGFyYW1ldGVycztcbiAgICAgICAgcmV0dXJuIG9wdGltaXplcihvcHRpbWl6ZXJQYW1ldGVycyk7XG4gICAgfVxuICAgIFxuICAgIGdldCBUcmFpbmFibGVQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnRyYWluYWJsZVBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3RyYWluYWJsZVBhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRyYWluYWJsZVBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgc2V0IFRyYWluYWJsZVBhcmFtZXRlcnModHJhaW5hYmxlUGFyYW1ldGVycyl7XG4gICAgICAgIGlmKCF0cmFpbmFibGVQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgdHJhaW5hYmxlUGFyYW1ldGVycyBnb3QgJHt0cmFpbmFibGVQYXJhbWV0ZXJzfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhaW5hYmxlUGFyYW1ldGVycyA9IHRyYWluYWJsZVBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgZmxhdHRlblBhcmFtcyhwYXJhbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBGID0gdGhpcy5GO1xuICAgICAgICBjb25zdCBNYXBWYWx1ZXMgPSAob2JqT3JBcnJheSk9PkFycmF5LmlzQXJyYXkob2JqT3JBcnJheSk/b2JqT3JBcnJheTpPYmplY3QudmFsdWVzKG9iak9yQXJyYXkpO1xuICAgICAgICBjb25zdCBGbGF0dGVuID0gKHB2KT0+e1xuICAgICAgICAgICAgaWYoRi5pc1RlbnNvcihwdikpe1xuICAgICAgICAgICAgICAgIHJldHVybiBwdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IE1hcFZhbHVlcyhwdik7XG4gICAgICAgICAgICAgICAgbGV0IGZsYXR0ZW4gPSB2YWx1ZXMucmVkdWNlKChmbGF0dGVuLCB2KT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gRmxhdHRlbih2KTtcbiAgICAgICAgICAgICAgICAgICAgaWYoUi5pcyhBcnJheSwgcmVzKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuID0gWy4uLmZsYXR0ZW4sIC4uLnJlc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW4gPSBbLi4uZmxhdHRlbiwgcmVzXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmxhdHRlbjtcbiAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsYXR0ZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCB2YWx1ZXMgPSBNYXBWYWx1ZXMocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoKGZsYXR0ZW4sdik9PlsuLi5mbGF0dGVuLCAuLi5GbGF0dGVuKHYpXSxbXSk7XG4gICAgfVxuXG4gICAgXG4gICAgXG4gICAgc2V0VHJhaW5lckJ5Q29uZmlnKG5ldENvbmZpZyl7XG4gICAgICAgIGNvbnN0IFRyYWluZXIgPSBuZXRDb25maWcuVHJhaW5lcjtcbiAgICAgICAgaWYoIVRyYWluZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBUcmFpbmVyIGdvdCAke1RyYWluZXJ9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qge09wdGltaXplciwgT3B0aW1pemVyUGFyYW1ldGVycywgVHJhaW5hYmxlUGFyYW1ldGVyc30gPSBUcmFpbmVyO1xuICAgICAgICB0aGlzLk9wdGltaXplciA9IE9wdGltaXplcjtcbiAgICAgICAgdGhpcy5PcHRpbWl6ZXJQYXJhbWV0ZXJzID0gT3B0aW1pemVyUGFyYW1ldGVycztcbiAgICAgICAgaWYoVHJhaW5hYmxlUGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aGlzLlRyYWluYWJsZVBhcmFtZXRlcnMgPSBUcmFpbmFibGVQYXJhbWV0ZXJzO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhaW5lck1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9