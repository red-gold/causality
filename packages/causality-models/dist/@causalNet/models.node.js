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

/***/ "./src/SupervisedModels/classificationModel.mixins.js":
/*!************************************************************!*\
  !*** ./src/SupervisedModels/classificationModel.mixins.js ***!
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

/***/ "./src/SupervisedModels/index.js":
/*!***************************************!*\
  !*** ./src/SupervisedModels/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./classificationModel.mixins */ "./src/SupervisedModels/classificationModel.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ "./src/UnSupervisedModels/index.js":
/*!*****************************************!*\
  !*** ./src/UnSupervisedModels/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./wordContextsModels.mixins */ "./src/UnSupervisedModels/wordContextsModels.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _wordContextsModels) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "WordContextModelMixins", {
    enumerable: true,
    get: function () {
      return _wordContextsModels.default;
    }
  });
  _wordContextsModels = _interopRequireDefault(_wordContextsModels);
});

/***/ }),

/***/ "./src/UnSupervisedModels/wordContextsModels.mixins.js":
/*!*************************************************************!*\
  !*** ./src/UnSupervisedModels/wordContextsModels.mixins.js ***!
  \*************************************************************/
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

  const WordContextModelMixins = basePipelineClass => class extends basePipelineClass {
    skipGram() {
      // TODO: come up with better name later
      //implicit matrix factorization
      const Fit = pipelineOutTensor => {
        let logProb = pipelineOutTensor;
        return logProb;
      };

      const Loss = (pipelineOutTensor, labelTensor) => {
        let logProb = Fit(pipelineOutTensor);
        let likelihood = logProb.mul(labelTensor).logSigmoid();
        let loss = likelihood.mean();
        return loss;
      };

      return {
        Loss,
        Fit
      };
    }

  };

  var _default = WordContextModelMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/causalNetModels.js":
/*!********************************!*\
  !*** ./src/causalNetModels.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! ./SupervisedModels/index */ "./src/SupervisedModels/index.js"), __webpack_require__(/*! ./UnSupervisedModels/index */ "./src/UnSupervisedModels/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _index, _index2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class CausalNetModels extends _causalNet.Platform.mixWith(_causalNet2.Tensor, [_index.ClassificationModelMixins, _index2.WordContextModelMixins]) {
    constructor() {
      super();
    }

  }

  var _default = new CausalNetModels();

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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./supervisedModels.mixins */ "./src/supervisedModels.mixins.js"), __webpack_require__(/*! ./unSupervisedModels.mixins */ "./src/unSupervisedModels.mixins.js"), __webpack_require__(/*! ./causalNetModels */ "./src/causalNetModels.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _supervisedModels, _unSupervisedModels, _causalNetModels) {
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
  Object.defineProperty(_exports, "UnSupervisedModelsMixins", {
    enumerable: true,
    get: function () {
      return _unSupervisedModels.default;
    }
  });
  Object.defineProperty(_exports, "causalNetModels", {
    enumerable: true,
    get: function () {
      return _causalNetModels.default;
    }
  });
  _supervisedModels = _interopRequireDefault(_supervisedModels);
  _unSupervisedModels = _interopRequireDefault(_unSupervisedModels);
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
    get Loss() {
      if (!this.modelLoss) {
        throw Error('modelLoss is not set');
      }

      return this.modelLoss;
    }

    set Loss(loss) {
      if (!loss || typeof Loss !== 'function') {
        throw Error(`expect loss, got ${JSON.stringify(loss)}`);
      }

      this.modelLoss = loss;
      this.modelLoss.bind(this);
    }

    get Predict() {
      if (!this.modelPredict) {
        throw Error('modelPredict is not set');
      }

      return this.modelPredict;
    }

    set Predict(predict) {
      if (!predict) {
        throw Error(`expect predict, got ${predict}`);
      }

      this.modelPredict = predict;
      this.modelPredict.bind(this);
    }

    get Fit() {
      if (!this.modelFit) {
        throw Error(`modelFit is not set`);
      }

      return this.modelFit;
    }

    set Fit(fit) {
      if (!fit || typeof fit !== 'function') {
        throw Error(`expect fit, got ${JSON.stringify(fit)}`);
      }

      this.modelFit = fit;
      this.modelFit.bind(this);
    }

    get NumClasses() {
      return this.modelNumClasses;
    }

    set NumClasses(numClasses) {
      if (typeof numClasses !== 'number' || numClasses <= 0) {
        throw Error(`expect numClasses, got ${JSON.stringify(numClasses)}`);
      }

      this.modelNumClasses = numClasses;
    }

    get OneHotPredict() {
      return samples => this.modelOneHotPredict(samples, this.NumClasses);
    }

    set OneHotPredict(oneHotPredict) {
      if (!oneHotPredict || typeof oneHotPredict !== 'function') {
        throw Error(`expect oneHotPredict, got ${JSON.stringify(oneHotPredict)}`);
      }

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
      this.Loss = Loss;
      this.Fit = Fit;
      this.Predict = Predict;
      this.OneHotPredict = OneHotPredict;
      this.NumClasses = NumClasses;
    }

  };

  var _default = SupervisedModelsMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/unSupervisedModels.mixins.js":
/*!******************************************!*\
  !*** ./src/unSupervisedModels.mixins.js ***!
  \******************************************/
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

  const UnSupervisedModelsMixins = BasePipelineClass => class extends BasePipelineClass {
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

  var _default = UnSupervisedModelsMixins;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9jbGFzc2lmaWNhdGlvbk1vZGVsLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9VblN1cGVydmlzZWRNb2RlbHMvd29yZENvbnRleHRzTW9kZWxzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9jYXVzYWxOZXRNb2RlbHMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvc3VwZXJ2aXNlZE1vZGVscy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvdW5TdXBlcnZpc2VkTW9kZWxzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNsYXNzaWZpY2F0aW9uTW9kZWxNaXhpbnMiLCJiYXNlUGlwZWxpbmVDbGFzcyIsImNsYXNzaWZpY2F0aW9uIiwiRml0IiwicGlwZWxpbmVPdXRUZW5zb3IiLCJsb2dQcm9iIiwic3ViIiwibG9nU3VtRXhwIiwiUHJlZGljdCIsInByZWRpY3RlZENsYXNzIiwiYXJnTWF4IiwiT25lSG90UHJlZGljdCIsIm51bUNsYXNzZXMiLCJvbmVIb3RQcmVkaWN0IiwiVCIsIm9uZUhvdCIsIkxvc3MiLCJsYWJlbFRlbnNvciIsImxpa2VsaWhvb2QiLCJuZWciLCJtdWwiLCJsb3NzIiwibWVhbiIsIldvcmRDb250ZXh0TW9kZWxNaXhpbnMiLCJza2lwR3JhbSIsImxvZ1NpZ21vaWQiLCJDYXVzYWxOZXRNb2RlbHMiLCJQbGF0Zm9ybSIsIm1peFdpdGgiLCJUZW5zb3IiLCJjb25zdHJ1Y3RvciIsIlN1cGVydmlzZWRNb2RlbHNNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIm1vZGVsTG9zcyIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImJpbmQiLCJtb2RlbFByZWRpY3QiLCJwcmVkaWN0IiwibW9kZWxGaXQiLCJmaXQiLCJOdW1DbGFzc2VzIiwibW9kZWxOdW1DbGFzc2VzIiwic2FtcGxlcyIsIm1vZGVsT25lSG90UHJlZGljdCIsInNldE1vZGVsQnlDb25maWciLCJuZXRDb25maWciLCJNb2RlbCIsIlVuU3VwZXJ2aXNlZE1vZGVsc01peGlucyIsIk1vZGVscyIsIm1vZGVscyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFD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Q0g7O0FBQ0QsVUFBR1EsVUFBVSxHQUFHLENBQWhCLEVBQWtCO0FBQ2QsYUFBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDSCxPQUZELE1BR0k7QUFDQSxjQUFNUixLQUFLLENBQUMsNkRBQUQsQ0FBWDtBQUNIO0FBQ0o7O0FBbkVpRixHQUF0Rjs7aUJBc0VlZSx3Qjs7Ozs7Ozs7Ozs7OztBQ3RFZiw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L21vZGVscy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbW9kZWxzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiY29uc3QgQ2xhc3NpZmljYXRpb25Nb2RlbE1peGlucyA9IChiYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIChiYXNlUGlwZWxpbmVDbGFzcyl7XG4gICAgY2xhc3NpZmljYXRpb24oKXtcbiAgICAgICAgY29uc3QgRml0ID0gKHBpcGVsaW5lT3V0VGVuc29yKSA9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gcGlwZWxpbmVPdXRUZW5zb3Iuc3ViKHBpcGVsaW5lT3V0VGVuc29yLmxvZ1N1bUV4cCgxLCB0cnVlKSk7XG4gICAgICAgICAgICByZXR1cm4gbG9nUHJvYjtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgUHJlZGljdCA9IChwaXBlbGluZU91dFRlbnNvcikgPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgICAgICAgIHJldHVybiBwcmVkaWN0ZWRDbGFzcztcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgT25lSG90UHJlZGljdCA9IChwaXBlbGluZU91dFRlbnNvciwgbnVtQ2xhc3NlcykgPT57XG4gICAgICAgICAgICBsZXQgcHJlZGljdGVkQ2xhc3MgPSBQcmVkaWN0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBvbmVIb3RQcmVkaWN0ID0gdGhpcy5ULm9uZUhvdChwcmVkaWN0ZWRDbGFzcywgbnVtQ2xhc3Nlcyk7XG4gICAgICAgICAgICByZXR1cm4gb25lSG90UHJlZGljdDtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgTG9zcyA9IChwaXBlbGluZU91dFRlbnNvciwgbGFiZWxUZW5zb3IpPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubmVnKCkubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsb3NzID0gbGlrZWxpaG9vZC5tZWFuKCk7XG4gICAgICAgICAgICByZXR1cm4gbG9zcztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgUHJlZGljdCwgT25lSG90UHJlZGljdCwgTG9zcywgRml0IH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xhc3NpZmljYXRpb25Nb2RlbE1peGluczsiLCJjb25zdCBXb3JkQ29udGV4dE1vZGVsTWl4aW5zID0gKGJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgKGJhc2VQaXBlbGluZUNsYXNzKXtcbiAgICBza2lwR3JhbSgpe1xuICAgICAgICAvLyBUT0RPOiBjb21lIHVwIHdpdGggYmV0dGVyIG5hbWUgbGF0ZXJcbiAgICAgICAgLy9pbXBsaWNpdCBtYXRyaXggZmFjdG9yaXphdGlvblxuICAgICAgICBjb25zdCBGaXQgPSAocGlwZWxpbmVPdXRUZW5zb3IpID0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBwaXBlbGluZU91dFRlbnNvcjtcbiAgICAgICAgICAgIHJldHVybiBsb2dQcm9iO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBMb3NzID0gKHBpcGVsaW5lT3V0VGVuc29yLCBsYWJlbFRlbnNvcik9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsaWtlbGlob29kID0gbG9nUHJvYi5tdWwobGFiZWxUZW5zb3IpLmxvZ1NpZ21vaWQoKTtcbiAgICAgICAgICAgIGxldCBsb3NzID0gbGlrZWxpaG9vZC5tZWFuKCk7XG4gICAgICAgICAgICByZXR1cm4gbG9zcztcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgTG9zcywgRml0IH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZENvbnRleHRNb2RlbE1peGluczsiLCJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IENsYXNzaWZpY2F0aW9uTW9kZWxNaXhpbnMgfSBmcm9tICcuL1N1cGVydmlzZWRNb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgV29yZENvbnRleHRNb2RlbE1peGlucyB9IGZyb20gJy4vVW5TdXBlcnZpc2VkTW9kZWxzL2luZGV4JztcbmNsYXNzIENhdXNhbE5ldE1vZGVscyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoVGVuc29yLCBcbiAgICBbIENsYXNzaWZpY2F0aW9uTW9kZWxNaXhpbnMsIFdvcmRDb250ZXh0TW9kZWxNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TW9kZWxzOyIsImNvbnN0IFN1cGVydmlzZWRNb2RlbHNNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBcbiAgICBnZXQgTG9zcygpe1xuICAgICAgICBpZighdGhpcy5tb2RlbExvc3Mpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ21vZGVsTG9zcyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxMb3NzO1xuICAgIH1cbiAgICBzZXQgTG9zcyhsb3NzKXtcbiAgICAgICAgaWYoIWxvc3MgfHwgdHlwZW9mKExvc3MpICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgbG9zcywgZ290ICR7SlNPTi5zdHJpbmdpZnkobG9zcyl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbExvc3MgPSBsb3NzO1xuICAgICAgICB0aGlzLm1vZGVsTG9zcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBQcmVkaWN0KCl7XG4gICAgICAgIGlmKCF0aGlzLm1vZGVsUHJlZGljdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbW9kZWxQcmVkaWN0IGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbFByZWRpY3Q7XG4gICAgfVxuICAgIHNldCBQcmVkaWN0KHByZWRpY3Qpe1xuICAgICAgICBpZighcHJlZGljdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHByZWRpY3QsIGdvdCAke3ByZWRpY3R9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbFByZWRpY3QgPSBwcmVkaWN0O1xuICAgICAgICB0aGlzLm1vZGVsUHJlZGljdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWxGaXQpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYG1vZGVsRml0IGlzIG5vdCBzZXRgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbEZpdDtcbiAgICB9XG4gICAgc2V0IEZpdChmaXQpe1xuICAgICAgICBpZighZml0IHx8IHR5cGVvZihmaXQpICE9PSAnZnVuY3Rpb24nICl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IGZpdCwgZ290ICR7SlNPTi5zdHJpbmdpZnkoZml0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsRml0ID0gZml0O1xuICAgICAgICB0aGlzLm1vZGVsRml0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IE51bUNsYXNzZXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxOdW1DbGFzc2VzO1xuICAgIH1cbiAgICBzZXQgTnVtQ2xhc3NlcyhudW1DbGFzc2VzKXtcbiAgICAgICAgaWYodHlwZW9mKG51bUNsYXNzZXMpICE9PSAnbnVtYmVyJyB8fCBudW1DbGFzc2VzIDw9IDApe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBudW1DbGFzc2VzLCBnb3QgJHtKU09OLnN0cmluZ2lmeShudW1DbGFzc2VzKX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsTnVtQ2xhc3NlcyA9IG51bUNsYXNzZXM7XG4gICAgfVxuXG4gICAgZ2V0IE9uZUhvdFByZWRpY3QoKXtcbiAgICAgICAgcmV0dXJuIChzYW1wbGVzKT0+dGhpcy5tb2RlbE9uZUhvdFByZWRpY3Qoc2FtcGxlcywgdGhpcy5OdW1DbGFzc2VzKTtcbiAgICB9XG4gICAgc2V0IE9uZUhvdFByZWRpY3Qob25lSG90UHJlZGljdCl7XG4gICAgICAgIGlmKCFvbmVIb3RQcmVkaWN0IHx8IHR5cGVvZihvbmVIb3RQcmVkaWN0KSAhPT0gJ2Z1bmN0aW9uJyApe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBvbmVIb3RQcmVkaWN0LCBnb3QgJHtKU09OLnN0cmluZ2lmeShvbmVIb3RQcmVkaWN0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsT25lSG90UHJlZGljdCA9IG9uZUhvdFByZWRpY3Q7XG4gICAgICAgIHRoaXMubW9kZWxPbmVIb3RQcmVkaWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0TW9kZWxCeUNvbmZpZyhuZXRDb25maWcpe1xuICAgICAgICBjb25zdCBOdW1DbGFzc2VzID0gbmV0Q29uZmlnLk51bUNsYXNzZXM7XG4gICAgICAgIGNvbnN0IHtMb3NzLCBQcmVkaWN0LCBPbmVIb3RQcmVkaWN0LCBGaXR9ID0gbmV0Q29uZmlnLk1vZGVsO1xuICAgICAgICB0aGlzLkxvc3MgPSBMb3NzO1xuICAgICAgICB0aGlzLkZpdCA9IEZpdDtcbiAgICAgICAgdGhpcy5QcmVkaWN0ID0gUHJlZGljdDtcbiAgICAgICAgdGhpcy5PbmVIb3RQcmVkaWN0ID0gT25lSG90UHJlZGljdDtcbiAgICAgICAgdGhpcy5OdW1DbGFzc2VzID0gTnVtQ2xhc3NlcztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdXBlcnZpc2VkTW9kZWxzTWl4aW5zO1xuIiwiY29uc3QgVW5TdXBlcnZpc2VkTW9kZWxzTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgZ2V0IE1vZGVscygpe1xuICAgICAgICB0aGlzLm1vZGVscztcbiAgICB9XG4gICAgc2V0IE1vZGVscyhtb2RlbHMpe1xuICAgICAgICB0aGlzLm1vZGVscyA9IG1vZGVscztcbiAgICB9XG4gICAgZ2V0IExvc3MoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxMb3NzO1xuICAgIH1cbiAgICBzZXQgTG9zcyhsb3NzKXtcbiAgICAgICAgdGhpcy5tb2RlbExvc3MgPSBsb3NzO1xuICAgICAgICB0aGlzLm1vZGVsTG9zcy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBQcmVkaWN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsUHJlZGljdDtcbiAgICB9XG4gICAgc2V0IFByZWRpY3QocHJlZGljdCl7XG4gICAgICAgIHRoaXMubW9kZWxQcmVkaWN0ID0gcHJlZGljdDtcbiAgICAgICAgdGhpcy5tb2RlbFByZWRpY3QuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXQgRml0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsRml0O1xuICAgIH1cbiAgICBzZXQgRml0KGZpdCl7XG4gICAgICAgIHRoaXMubW9kZWxGaXQgPSBmaXQ7XG4gICAgICAgIHRoaXMubW9kZWxGaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRNb2RlbEJ5Q29uZmlnKG5ldENvbmZpZyl7XG4gICAgICAgIGNvbnN0IE51bUNsYXNzZXMgPSBuZXRDb25maWcuTnVtQ2xhc3NlcztcbiAgICAgICAgY29uc3Qge0xvc3MsIFByZWRpY3QsIE9uZUhvdFByZWRpY3QsIEZpdH0gPSBuZXRDb25maWcuTW9kZWw7XG4gICAgICAgIGlmKCFMb3NzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdMb3NzIG11c3QgYmUgZGVmaW5kIGFzIGEgdGVuc29yIGZ1bmN0aW9uIG9yIGFjcXVpcmUgZnJvbSBDYXVzYWxOZXQubW9kZWxzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mKExvc3MpID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRoaXMuTG9zcyA9IExvc3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdub3Qga25vd25pbmcgeWV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mKEZpdCkgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5GaXQgPSBGaXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdub3Qga25vd25pbmcgeWV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mKFByZWRpY3QpID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRoaXMuUHJlZGljdCA9IFByZWRpY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdub3Qga25vd25pbmcgeWV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mKE9uZUhvdFByZWRpY3QpID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRoaXMuT25lSG90UHJlZGljdCA9IE9uZUhvdFByZWRpY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdub3Qga25vd25pbmcgeWV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoTnVtQ2xhc3NlcyA+IDApe1xuICAgICAgICAgICAgdGhpcy5OdW1DbGFzc2VzID0gTnVtQ2xhc3NlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ051bUNsYXNzZXMgZnJvbSBuZXRDb25maWcgbXVzdCBiZSBub24gemVybywgcG9zaXRpdmUgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9