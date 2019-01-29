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

/***/ "./src/causalNetModels.js":
/*!********************************!*\
  !*** ./src/causalNetModels.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./function */ "./src/function.js"), __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./supervisedModels/index */ "./src/supervisedModels/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _function, _causalNet, _causalNet2, _index) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _function = _interopRequireDefault(_function);

  class CausalNetModels extends _causalNet2.Platform.mixWith(_causalNet.Tensor, [_index.ClassificationModelMixins]) {
    constructor() {
      super();
      this.F = new _function.default();
    }

  }

  var _default = new CausalNetModels();

  _exports.default = _default;
});

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
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

  class Function extends _causalNet.Function {
    constructor() {
      super();
    }

  }

  _exports.default = Function;
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./supervisedModels.mixins */ "./src/supervisedModels.mixins.js"), __webpack_require__(/*! ./causalNetModels */ "./src/causalNetModels.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _supervisedModels, _causalNetModels) {
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
  Object.defineProperty(_exports, "causalNetModels", {
    enumerable: true,
    get: function () {
      return _causalNetModels.default;
    }
  });
  _supervisedModels = _interopRequireDefault(_supervisedModels);
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

    get NumClasses() {
      return this.modelNumClasses;
    }

    set NumClasses(numClasses) {
      this.modelNumClasses = numClasses;
    }

    get OneHotPredict() {
      return samples => this.modelOneHotPredict(samples, this.NumClasses);
    }

    set OneHotPredict(oneHotPredict) {
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

  var _default = SupervisedModelsMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/supervisedModels/classificationModel.mixins.js":
/*!************************************************************!*\
  !*** ./src/supervisedModels/classificationModel.mixins.js ***!
  \************************************************************/
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

  const ClassificationModelMixins = basePipelineClass => class extends basePipelineClass {
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

  var _default = ClassificationModelMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/supervisedModels/index.js":
/*!***************************************!*\
  !*** ./src/supervisedModels/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./classificationModel.mixins */ "./src/supervisedModels/classificationModel.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classificationModel) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "ClassificationModelMixins", {
    enumerable: true,
    get: function () {
      return _classificationModel.default;
    }
  });
  _classificationModel = _interopRequireDefault(_classificationModel);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvY2F1c2FsTmV0TW9kZWxzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL3N1cGVydmlzZWRNb2RlbHMubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL3N1cGVydmlzZWRNb2RlbHMvY2xhc3NpZmljYXRpb25Nb2RlbC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRNb2RlbHMiLCJQbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiQ2xhc3NpZmljYXRpb25Nb2RlbE1peGlucyIsImNvbnN0cnVjdG9yIiwiRiIsIkZ1bmN0aW9uIiwiQmFzZUZ1bmN0aW9uIiwiU3VwZXJ2aXNlZE1vZGVsc01peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiTW9kZWxzIiwibW9kZWxzIiwiTG9zcyIsIm1vZGVsTG9zcyIsImxvc3MiLCJiaW5kIiwiUHJlZGljdCIsIm1vZGVsUHJlZGljdCIsInByZWRpY3QiLCJGaXQiLCJtb2RlbEZpdCIsImZpdCIsIk51bUNsYXNzZXMiLCJtb2RlbE51bUNsYXNzZXMiLCJudW1DbGFzc2VzIiwiT25lSG90UHJlZGljdCIsInNhbXBsZXMiLCJtb2RlbE9uZUhvdFByZWRpY3QiLCJvbmVIb3RQcmVkaWN0Iiwic2V0TW9kZWxCeUNvbmZpZyIsIm5ldENvbmZpZyIsIk1vZGVsIiwiRXJyb3IiLCJiYXNlUGlwZWxpbmVDbGFzcyIsImNsYXNzaWZpY2F0aW9uIiwicGlwZWxpbmVPdXRUZW5zb3IiLCJsb2dQcm9iIiwic3ViIiwibG9nU3VtRXhwIiwicHJlZGljdGVkQ2xhc3MiLCJhcmdNYXgiLCJUIiwib25lSG90IiwibGFiZWxUZW5zb3IiLCJsaWtlbGlob29kIiwibmVnIiwibXVsIiwibWVhbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7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LEtBQWtDO0FBQ3BELFlBQUllLGNBQWMsR0FBR3ZCLE9BQU8sQ0FBQ21CLGlCQUFELENBQTVCO0FBQ0EsWUFBSVAsYUFBYSxHQUFHLEtBQUthLENBQUwsQ0FBT0MsTUFBUCxDQUFjSCxjQUFkLEVBQThCZixVQUE5QixDQUFwQjtBQUNBLGVBQU9JLGFBQVA7QUFDSCxPQUpEOztBQUtBLFlBQU1oQixJQUFJLEdBQUcsQ0FBQ3VCLGlCQUFELEVBQW9CUSxXQUFwQixLQUFrQztBQUMzQyxZQUFJUCxPQUFPLEdBQUdqQixHQUFHLENBQUNnQixpQkFBRCxDQUFqQjtBQUNBLFlBQUlTLFVBQVUsR0FBR1IsT0FBTyxDQUFDUyxHQUFSLEdBQWNDLEdBQWQsQ0FBa0JILFdBQWxCLENBQWpCO0FBQ0EsWUFBSTdCLElBQUksR0FBRzhCLFVBQVUsQ0FBQ0csSUFBWCxFQUFYO0FBQ0EsZUFBT2pDLElBQVA7QUFDSCxPQUxEOztBQU1BLGFBQU87QUFBRUUsZUFBRjtBQUFXUyxxQkFBWDtBQUEwQmIsWUFBMUI7QUFBZ0NPO0FBQWhDLE9BQVA7QUFDSDs7QUF2Qm9GLEdBQXpGOztpQkEwQmVoQix5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCZiw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L21vZGVscy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IENsYXNzaWZpY2F0aW9uTW9kZWxNaXhpbnMgfSBmcm9tICcuL3N1cGVydmlzZWRNb2RlbHMvaW5kZXgnOyBcbmNsYXNzIENhdXNhbE5ldE1vZGVscyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgWyBDbGFzc2lmaWNhdGlvbk1vZGVsTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldE1vZGVsczsiLCJpbXBvcnQge0Z1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgQmFzZUZ1bmN0aW9ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufSIsImNvbnN0IFN1cGVydmlzZWRNb2RlbHNNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXQgTW9kZWxzKCl7XG4gICAgICAgIHRoaXMubW9kZWxzO1xuICAgIH1cbiAgICBzZXQgTW9kZWxzKG1vZGVscyl7XG4gICAgICAgIHRoaXMubW9kZWxzID0gbW9kZWxzO1xuICAgIH1cbiAgICBnZXQgTG9zcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbExvc3M7XG4gICAgfVxuICAgIHNldCBMb3NzKGxvc3Mpe1xuICAgICAgICB0aGlzLm1vZGVsTG9zcyA9IGxvc3M7XG4gICAgICAgIHRoaXMubW9kZWxMb3NzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IFByZWRpY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxQcmVkaWN0O1xuICAgIH1cbiAgICBzZXQgUHJlZGljdChwcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbFByZWRpY3QgPSBwcmVkaWN0O1xuICAgICAgICB0aGlzLm1vZGVsUHJlZGljdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxGaXQ7XG4gICAgfVxuICAgIHNldCBGaXQoZml0KXtcbiAgICAgICAgdGhpcy5tb2RlbEZpdCA9IGZpdDtcbiAgICAgICAgdGhpcy5tb2RlbEZpdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBOdW1DbGFzc2VzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsTnVtQ2xhc3NlcztcbiAgICB9XG4gICAgc2V0IE51bUNsYXNzZXMobnVtQ2xhc3Nlcyl7XG4gICAgICAgIHRoaXMubW9kZWxOdW1DbGFzc2VzID0gbnVtQ2xhc3NlcztcbiAgICB9XG5cbiAgICBnZXQgT25lSG90UHJlZGljdCgpe1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT50aGlzLm1vZGVsT25lSG90UHJlZGljdChzYW1wbGVzLCB0aGlzLk51bUNsYXNzZXMpO1xuICAgIH1cbiAgICBzZXQgT25lSG90UHJlZGljdChvbmVIb3RQcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbE9uZUhvdFByZWRpY3QgPSBvbmVIb3RQcmVkaWN0O1xuICAgICAgICB0aGlzLm1vZGVsT25lSG90UHJlZGljdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNldE1vZGVsQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgY29uc3QgTnVtQ2xhc3NlcyA9IG5ldENvbmZpZy5OdW1DbGFzc2VzO1xuICAgICAgICBjb25zdCB7TG9zcywgUHJlZGljdCwgT25lSG90UHJlZGljdCwgRml0fSA9IG5ldENvbmZpZy5Nb2RlbDtcbiAgICAgICAgaWYoIUxvc3Mpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xvc3MgbXVzdCBiZSBkZWZpbmQgYXMgYSB0ZW5zb3IgZnVuY3Rpb24gb3IgYWNxdWlyZSBmcm9tIENhdXNhbE5ldC5tb2RlbHMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoTG9zcykgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5Mb3NzID0gTG9zcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoRml0KSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aGlzLkZpdCA9IEZpdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoUHJlZGljdCkgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5QcmVkaWN0ID0gUHJlZGljdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoT25lSG90UHJlZGljdCkgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5PbmVIb3RQcmVkaWN0ID0gT25lSG90UHJlZGljdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihOdW1DbGFzc2VzID4gMCl7XG4gICAgICAgICAgICB0aGlzLk51bUNsYXNzZXMgPSBOdW1DbGFzc2VzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTnVtQ2xhc3NlcyBmcm9tIG5ldENvbmZpZyBtdXN0IGJlIG5vbiB6ZXJvLCBwb3NpdGl2ZSBudW1iZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1cGVydmlzZWRNb2RlbHNNaXhpbnM7XG4iLCJjb25zdCBDbGFzc2lmaWNhdGlvbk1vZGVsTWl4aW5zID0gKGJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgKGJhc2VQaXBlbGluZUNsYXNzKXtcbiAgICBjbGFzc2lmaWNhdGlvbigpe1xuICAgICAgICBjb25zdCBGaXQgPSAocGlwZWxpbmVPdXRUZW5zb3IpID0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBwaXBlbGluZU91dFRlbnNvci5zdWIocGlwZWxpbmVPdXRUZW5zb3IubG9nU3VtRXhwKDEsIHRydWUpKTtcbiAgICAgICAgICAgIHJldHVybiBsb2dQcm9iO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBQcmVkaWN0ID0gKHBpcGVsaW5lT3V0VGVuc29yKSA9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHByZWRpY3RlZENsYXNzO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBPbmVIb3RQcmVkaWN0ID0gKHBpcGVsaW5lT3V0VGVuc29yLCBudW1DbGFzc2VzKSA9PntcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IFByZWRpY3QocGlwZWxpbmVPdXRUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IG9uZUhvdFByZWRpY3QgPSB0aGlzLlQub25lSG90KHByZWRpY3RlZENsYXNzLCBudW1DbGFzc2VzKTtcbiAgICAgICAgICAgIHJldHVybiBvbmVIb3RQcmVkaWN0O1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBMb3NzID0gKHBpcGVsaW5lT3V0VGVuc29yLCBsYWJlbFRlbnNvcik9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsaWtlbGlob29kID0gbG9nUHJvYi5uZWcoKS5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IGxvc3MgPSBsaWtlbGlob29kLm1lYW4oKTtcbiAgICAgICAgICAgIHJldHVybiBsb3NzO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBQcmVkaWN0LCBPbmVIb3RQcmVkaWN0LCBMb3NzLCBGaXQgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGFzc2lmaWNhdGlvbk1vZGVsTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=