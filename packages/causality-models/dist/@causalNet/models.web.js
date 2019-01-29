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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvY2F1c2FsTmV0TW9kZWxzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL3N1cGVydmlzZWRNb2RlbHMubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzLy4vc3JjL3N1cGVydmlzZWRNb2RlbHMvY2xhc3NpZmljYXRpb25Nb2RlbC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRNb2RlbHMiLCJQbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiQ2xhc3NpZmljYXRpb25Nb2RlbE1peGlucyIsImNvbnN0cnVjdG9yIiwiRiIsIkZ1bmN0aW9uIiwiQmFzZUZ1bmN0aW9uIiwiU3VwZXJ2aXNlZE1vZGVsc01peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiTW9kZWxzIiwibW9kZWxzIiwiTG9zcyIsIm1vZGVsTG9zcyIsImxvc3MiLCJiaW5kIiwiUHJlZGljdCIsIm1vZGVsUHJlZGljdCIsInByZWRpY3QiLCJGaXQiLCJtb2RlbEZpdCIsImZpdCIsIk51bUNsYXNzZXMiLCJtb2RlbE51bUNsYXNzZXMiLCJudW1DbGFzc2VzIiwiT25lSG90UHJlZGljdCIsInNhbXBsZXMiLCJtb2RlbE9uZUhvdFByZWRpY3QiLCJvbmVIb3RQcmVkaWN0Iiwic2V0TW9kZWxCeUNvbmZpZyIsIm5ldENvbmZpZyIsIk1vZGVsIiwiRXJyb3IiLCJiYXNlUGlwZWxpbmVDbGFzcyIsImNsYXNzaWZpY2F0aW9uIiwicGlwZWxpbmVPdXRUZW5zb3IiLCJsb2dQcm9iIiwic3ViIiwibG9nU3VtRXhwIiwicHJlZGljdGVkQ2xhc3MiLCJhcmdNYXgiLCJUIiwib25lSG90IiwibGFiZWxUZW5zb3IiLCJsaWtlbGlob29kIiwibmVnIiwibXVsIiwibWVhbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7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LEtBQWtDO0FBQ3BELFlBQUllLGNBQWMsR0FBR3ZCLE9BQU8sQ0FBQ21CLGlCQUFELENBQTVCO0FBQ0EsWUFBSVAsYUFBYSxHQUFHLEtBQUthLENBQUwsQ0FBT0MsTUFBUCxDQUFjSCxjQUFkLEVBQThCZixVQUE5QixDQUFwQjtBQUNBLGVBQU9JLGFBQVA7QUFDSCxPQUpEOztBQUtBLFlBQU1oQixJQUFJLEdBQUcsQ0FBQ3VCLGlCQUFELEVBQW9CUSxXQUFwQixLQUFrQztBQUMzQyxZQUFJUCxPQUFPLEdBQUdqQixHQUFHLENBQUNnQixpQkFBRCxDQUFqQjtBQUNBLFlBQUlTLFVBQVUsR0FBR1IsT0FBTyxDQUFDUyxHQUFSLEdBQWNDLEdBQWQsQ0FBa0JILFdBQWxCLENBQWpCO0FBQ0EsWUFBSTdCLElBQUksR0FBRzhCLFVBQVUsQ0FBQ0csSUFBWCxFQUFYO0FBQ0EsZUFBT2pDLElBQVA7QUFDSCxPQUxEOztBQU1BLGFBQU87QUFBRUUsZUFBRjtBQUFXUyxxQkFBWDtBQUEwQmIsWUFBMUI7QUFBZ0NPO0FBQWhDLE9BQVA7QUFDSDs7QUF2Qm9GLEdBQXpGOztpQkEwQmVoQix5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCZiw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L21vZGVscy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgQ2xhc3NpZmljYXRpb25Nb2RlbE1peGlucyB9IGZyb20gJy4vc3VwZXJ2aXNlZE1vZGVscy9pbmRleCc7IFxuY2xhc3MgQ2F1c2FsTmV0TW9kZWxzIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICBbIENsYXNzaWZpY2F0aW9uTW9kZWxNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TW9kZWxzOyIsImltcG9ydCB7RnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9ufSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBCYXNlRnVuY3Rpb257XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59IiwiY29uc3QgU3VwZXJ2aXNlZE1vZGVsc01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIGdldCBNb2RlbHMoKXtcbiAgICAgICAgdGhpcy5tb2RlbHM7XG4gICAgfVxuICAgIHNldCBNb2RlbHMobW9kZWxzKXtcbiAgICAgICAgdGhpcy5tb2RlbHMgPSBtb2RlbHM7XG4gICAgfVxuICAgIGdldCBMb3NzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsTG9zcztcbiAgICB9XG4gICAgc2V0IExvc3MobG9zcyl7XG4gICAgICAgIHRoaXMubW9kZWxMb3NzID0gbG9zcztcbiAgICAgICAgdGhpcy5tb2RlbExvc3MuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgUHJlZGljdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbFByZWRpY3Q7XG4gICAgfVxuICAgIHNldCBQcmVkaWN0KHByZWRpY3Qpe1xuICAgICAgICB0aGlzLm1vZGVsUHJlZGljdCA9IHByZWRpY3Q7XG4gICAgICAgIHRoaXMubW9kZWxQcmVkaWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IEZpdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbEZpdDtcbiAgICB9XG4gICAgc2V0IEZpdChmaXQpe1xuICAgICAgICB0aGlzLm1vZGVsRml0ID0gZml0O1xuICAgICAgICB0aGlzLm1vZGVsRml0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IE51bUNsYXNzZXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxOdW1DbGFzc2VzO1xuICAgIH1cbiAgICBzZXQgTnVtQ2xhc3NlcyhudW1DbGFzc2VzKXtcbiAgICAgICAgdGhpcy5tb2RlbE51bUNsYXNzZXMgPSBudW1DbGFzc2VzO1xuICAgIH1cblxuICAgIGdldCBPbmVIb3RQcmVkaWN0KCl7XG4gICAgICAgIHJldHVybiAoc2FtcGxlcyk9PnRoaXMubW9kZWxPbmVIb3RQcmVkaWN0KHNhbXBsZXMsIHRoaXMuTnVtQ2xhc3Nlcyk7XG4gICAgfVxuICAgIHNldCBPbmVIb3RQcmVkaWN0KG9uZUhvdFByZWRpY3Qpe1xuICAgICAgICB0aGlzLm1vZGVsT25lSG90UHJlZGljdCA9IG9uZUhvdFByZWRpY3Q7XG4gICAgICAgIHRoaXMubW9kZWxPbmVIb3RQcmVkaWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0TW9kZWxCeUNvbmZpZyhuZXRDb25maWcpe1xuICAgICAgICBjb25zdCBOdW1DbGFzc2VzID0gbmV0Q29uZmlnLk51bUNsYXNzZXM7XG4gICAgICAgIGNvbnN0IHtMb3NzLCBQcmVkaWN0LCBPbmVIb3RQcmVkaWN0LCBGaXR9ID0gbmV0Q29uZmlnLk1vZGVsO1xuICAgICAgICBpZighTG9zcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTG9zcyBtdXN0IGJlIGRlZmluZCBhcyBhIHRlbnNvciBmdW5jdGlvbiBvciBhY3F1aXJlIGZyb20gQ2F1c2FsTmV0Lm1vZGVscycpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZihMb3NzKSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aGlzLkxvc3MgPSBMb3NzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbm90IGtub3duaW5nIHlldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZihGaXQpID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRoaXMuRml0ID0gRml0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbm90IGtub3duaW5nIHlldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZihQcmVkaWN0KSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aGlzLlByZWRpY3QgPSBQcmVkaWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbm90IGtub3duaW5nIHlldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZihPbmVIb3RQcmVkaWN0KSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aGlzLk9uZUhvdFByZWRpY3QgPSBPbmVIb3RQcmVkaWN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbm90IGtub3duaW5nIHlldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKE51bUNsYXNzZXMgPiAwKXtcbiAgICAgICAgICAgIHRoaXMuTnVtQ2xhc3NlcyA9IE51bUNsYXNzZXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdOdW1DbGFzc2VzIGZyb20gbmV0Q29uZmlnIG11c3QgYmUgbm9uIHplcm8sIHBvc2l0aXZlIG51bWJlcicpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VwZXJ2aXNlZE1vZGVsc01peGlucztcbiIsImNvbnN0IENsYXNzaWZpY2F0aW9uTW9kZWxNaXhpbnMgPSAoYmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyAoYmFzZVBpcGVsaW5lQ2xhc3Mpe1xuICAgIGNsYXNzaWZpY2F0aW9uKCl7XG4gICAgICAgIGNvbnN0IEZpdCA9IChwaXBlbGluZU91dFRlbnNvcikgPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IHBpcGVsaW5lT3V0VGVuc29yLnN1YihwaXBlbGluZU91dFRlbnNvci5sb2dTdW1FeHAoMSwgdHJ1ZSkpO1xuICAgICAgICAgICAgcmV0dXJuIGxvZ1Byb2I7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IFByZWRpY3QgPSAocGlwZWxpbmVPdXRUZW5zb3IpID0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBGaXQocGlwZWxpbmVPdXRUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gbG9nUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgICAgICByZXR1cm4gcHJlZGljdGVkQ2xhc3M7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IE9uZUhvdFByZWRpY3QgPSAocGlwZWxpbmVPdXRUZW5zb3IsIG51bUNsYXNzZXMpID0+e1xuICAgICAgICAgICAgbGV0IHByZWRpY3RlZENsYXNzID0gUHJlZGljdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgb25lSG90UHJlZGljdCA9IHRoaXMuVC5vbmVIb3QocHJlZGljdGVkQ2xhc3MsIG51bUNsYXNzZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9uZUhvdFByZWRpY3Q7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IExvc3MgPSAocGlwZWxpbmVPdXRUZW5zb3IsIGxhYmVsVGVuc29yKT0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBGaXQocGlwZWxpbmVPdXRUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IGxpa2VsaWhvb2QgPSBsb2dQcm9iLm5lZygpLm11bChsYWJlbFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgbG9zcyA9IGxpa2VsaWhvb2QubWVhbigpO1xuICAgICAgICAgICAgcmV0dXJuIGxvc3M7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IFByZWRpY3QsIE9uZUhvdFByZWRpY3QsIExvc3MsIEZpdCB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsYXNzaWZpY2F0aW9uTW9kZWxNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==