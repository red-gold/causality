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
  Object.defineProperty(_exports, "WordContextModelsMixins", {
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

  const WordContextModelsMixins = basePipelineClass => class extends basePipelineClass {
    contextConcurrence() {
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

  var _default = WordContextModelsMixins;
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

  class CausalNetModels extends _causalNet.Platform.mixWith(_causalNet2.Tensor, [_index.ClassificationModelMixins, _index2.WordContextModelsMixins]) {
    constructor() {}

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

    get NumClasses() {
      return this.modelNumClasses;
    }

    set NumClasses(numClasses) {
      this.modelNumClasses = numClasses;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvU3VwZXJ2aXNlZE1vZGVscy9jbGFzc2lmaWNhdGlvbk1vZGVsLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9VblN1cGVydmlzZWRNb2RlbHMvd29yZENvbnRleHRzTW9kZWxzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy8uL3NyYy9jYXVzYWxOZXRNb2RlbHMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvc3VwZXJ2aXNlZE1vZGVscy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tb2RlbHMvLi9zcmMvdW5TdXBlcnZpc2VkTW9kZWxzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21vZGVscy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbW9kZWxzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNsYXNzaWZpY2F0aW9uTW9kZWxNaXhpbnMiLCJiYXNlUGlwZWxpbmVDbGFzcyIsImNsYXNzaWZpY2F0aW9uIiwiRml0IiwicGlwZWxpbmVPdXRUZW5zb3IiLCJsb2dQcm9iIiwic3ViIiwibG9nU3VtRXhwIiwiUHJlZGljdCIsInByZWRpY3RlZENsYXNzIiwiYXJnTWF4IiwiT25lSG90UHJlZGljdCIsIm51bUNsYXNzZXMiLCJvbmVIb3RQcmVkaWN0IiwiVCIsIm9uZUhvdCIsIkxvc3MiLCJsYWJlbFRlbnNvciIsImxpa2VsaWhvb2QiLCJuZWciLCJtdWwiLCJsb3NzIiwibWVhbiIsIldvcmRDb250ZXh0TW9kZWxzTWl4aW5zIiwiY29udGV4dENvbmN1cnJlbmNlIiwibG9nU2lnbW9pZCIsIkNhdXNhbE5ldE1vZGVscyIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIlRlbnNvciIsImNvbnN0cnVjdG9yIiwiU3VwZXJ2aXNlZE1vZGVsc01peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiTW9kZWxzIiwibW9kZWxzIiwibW9kZWxMb3NzIiwiYmluZCIsIm1vZGVsUHJlZGljdCIsInByZWRpY3QiLCJtb2RlbEZpdCIsImZpdCIsIk51bUNsYXNzZXMiLCJtb2RlbE51bUNsYXNzZXMiLCJzYW1wbGVzIiwibW9kZWxPbmVIb3RQcmVkaWN0Iiwic2V0TW9kZWxCeUNvbmZpZyIsIm5ldENvbmZpZyIsIk1vZGVsIiwiRXJyb3IiLCJVblN1cGVydmlzZWRNb2RlbHNNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFn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TyxLQUFLLENBQUMsNkRBQUQsQ0FBWDtBQUNIO0FBQ0o7O0FBMUVpRixHQUF0Rjs7aUJBNkVlQyx3Qjs7Ozs7Ozs7Ozs7OztBQzdFZiw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L21vZGVscy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9tb2RlbHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L21vZGVsc1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJjb25zdCBDbGFzc2lmaWNhdGlvbk1vZGVsTWl4aW5zID0gKGJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgKGJhc2VQaXBlbGluZUNsYXNzKXtcbiAgICBjbGFzc2lmaWNhdGlvbigpe1xuICAgICAgICBjb25zdCBGaXQgPSAocGlwZWxpbmVPdXRUZW5zb3IpID0+e1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBwaXBlbGluZU91dFRlbnNvci5zdWIocGlwZWxpbmVPdXRUZW5zb3IubG9nU3VtRXhwKDEsIHRydWUpKTtcbiAgICAgICAgICAgIHJldHVybiBsb2dQcm9iO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBQcmVkaWN0ID0gKHBpcGVsaW5lT3V0VGVuc29yKSA9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHByZWRpY3RlZENsYXNzO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBPbmVIb3RQcmVkaWN0ID0gKHBpcGVsaW5lT3V0VGVuc29yLCBudW1DbGFzc2VzKSA9PntcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ZWRDbGFzcyA9IFByZWRpY3QocGlwZWxpbmVPdXRUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IG9uZUhvdFByZWRpY3QgPSB0aGlzLlQub25lSG90KHByZWRpY3RlZENsYXNzLCBudW1DbGFzc2VzKTtcbiAgICAgICAgICAgIHJldHVybiBvbmVIb3RQcmVkaWN0O1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBMb3NzID0gKHBpcGVsaW5lT3V0VGVuc29yLCBsYWJlbFRlbnNvcik9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gRml0KHBpcGVsaW5lT3V0VGVuc29yKTtcbiAgICAgICAgICAgIGxldCBsaWtlbGlob29kID0gbG9nUHJvYi5uZWcoKS5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgICAgICAgbGV0IGxvc3MgPSBsaWtlbGlob29kLm1lYW4oKTtcbiAgICAgICAgICAgIHJldHVybiBsb3NzO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBQcmVkaWN0LCBPbmVIb3RQcmVkaWN0LCBMb3NzLCBGaXQgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGFzc2lmaWNhdGlvbk1vZGVsTWl4aW5zOyIsImNvbnN0IFdvcmRDb250ZXh0TW9kZWxzTWl4aW5zID0gKGJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgKGJhc2VQaXBlbGluZUNsYXNzKXtcbiAgICBjb250ZXh0Q29uY3VycmVuY2UoKXtcbiAgICAgICAgLy8gVE9ETzogY29tZSB1cCB3aXRoIGJldHRlciBuYW1lIGxhdGVyXG4gICAgICAgIC8vaW1wbGljaXQgbWF0cml4IGZhY3Rvcml6YXRpb25cbiAgICAgICAgY29uc3QgRml0ID0gKHBpcGVsaW5lT3V0VGVuc29yKSA9PntcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gcGlwZWxpbmVPdXRUZW5zb3I7XG4gICAgICAgICAgICByZXR1cm4gbG9nUHJvYjtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgTG9zcyA9IChwaXBlbGluZU91dFRlbnNvciwgbGFiZWxUZW5zb3IpPT57XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IEZpdChwaXBlbGluZU91dFRlbnNvcik7XG4gICAgICAgICAgICBsZXQgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubXVsKGxhYmVsVGVuc29yKS5sb2dTaWdtb2lkKCk7XG4gICAgICAgICAgICBsZXQgbG9zcyA9IGxpa2VsaWhvb2QubWVhbigpO1xuICAgICAgICAgICAgcmV0dXJuIGxvc3M7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IExvc3MsIEZpdCB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRDb250ZXh0TW9kZWxzTWl4aW5zOyIsImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgQ2xhc3NpZmljYXRpb25Nb2RlbE1peGlucyB9IGZyb20gJy4vU3VwZXJ2aXNlZE1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBXb3JkQ29udGV4dE1vZGVsc01peGlucyB9IGZyb20gJy4vVW5TdXBlcnZpc2VkTW9kZWxzL2luZGV4JztcbmNsYXNzIENhdXNhbE5ldE1vZGVscyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoVGVuc29yLCBcbiAgICBbIENsYXNzaWZpY2F0aW9uTW9kZWxNaXhpbnMsIFdvcmRDb250ZXh0TW9kZWxzTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TW9kZWxzOyIsImNvbnN0IFN1cGVydmlzZWRNb2RlbHNNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXQgTW9kZWxzKCl7XG4gICAgICAgIHRoaXMubW9kZWxzO1xuICAgIH1cbiAgICBzZXQgTW9kZWxzKG1vZGVscyl7XG4gICAgICAgIHRoaXMubW9kZWxzID0gbW9kZWxzO1xuICAgIH1cbiAgICBnZXQgTG9zcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbExvc3M7XG4gICAgfVxuICAgIHNldCBMb3NzKGxvc3Mpe1xuICAgICAgICB0aGlzLm1vZGVsTG9zcyA9IGxvc3M7XG4gICAgICAgIHRoaXMubW9kZWxMb3NzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IFByZWRpY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxQcmVkaWN0O1xuICAgIH1cbiAgICBzZXQgUHJlZGljdChwcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbFByZWRpY3QgPSBwcmVkaWN0O1xuICAgICAgICB0aGlzLm1vZGVsUHJlZGljdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxGaXQ7XG4gICAgfVxuICAgIHNldCBGaXQoZml0KXtcbiAgICAgICAgdGhpcy5tb2RlbEZpdCA9IGZpdDtcbiAgICAgICAgdGhpcy5tb2RlbEZpdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBOdW1DbGFzc2VzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsTnVtQ2xhc3NlcztcbiAgICB9XG4gICAgc2V0IE51bUNsYXNzZXMobnVtQ2xhc3Nlcyl7XG4gICAgICAgIHRoaXMubW9kZWxOdW1DbGFzc2VzID0gbnVtQ2xhc3NlcztcbiAgICB9XG5cbiAgICBnZXQgT25lSG90UHJlZGljdCgpe1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT50aGlzLm1vZGVsT25lSG90UHJlZGljdChzYW1wbGVzLCB0aGlzLk51bUNsYXNzZXMpO1xuICAgIH1cbiAgICBzZXQgT25lSG90UHJlZGljdChvbmVIb3RQcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbE9uZUhvdFByZWRpY3QgPSBvbmVIb3RQcmVkaWN0O1xuICAgICAgICB0aGlzLm1vZGVsT25lSG90UHJlZGljdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNldE1vZGVsQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgY29uc3QgTnVtQ2xhc3NlcyA9IG5ldENvbmZpZy5OdW1DbGFzc2VzO1xuICAgICAgICBjb25zdCB7TG9zcywgUHJlZGljdCwgT25lSG90UHJlZGljdCwgRml0fSA9IG5ldENvbmZpZy5Nb2RlbDtcbiAgICAgICAgaWYoIUxvc3Mpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xvc3MgbXVzdCBiZSBkZWZpbmQgYXMgYSB0ZW5zb3IgZnVuY3Rpb24gb3IgYWNxdWlyZSBmcm9tIENhdXNhbE5ldC5tb2RlbHMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoTG9zcykgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5Mb3NzID0gTG9zcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoRml0KSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aGlzLkZpdCA9IEZpdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoUHJlZGljdCkgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5QcmVkaWN0ID0gUHJlZGljdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YoT25lSG90UHJlZGljdCkgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5PbmVIb3RQcmVkaWN0ID0gT25lSG90UHJlZGljdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25vdCBrbm93bmluZyB5ZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZihOdW1DbGFzc2VzID4gMCl7XG4gICAgICAgICAgICB0aGlzLk51bUNsYXNzZXMgPSBOdW1DbGFzc2VzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTnVtQ2xhc3NlcyBmcm9tIG5ldENvbmZpZyBtdXN0IGJlIG5vbiB6ZXJvLCBwb3NpdGl2ZSBudW1iZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN1cGVydmlzZWRNb2RlbHNNaXhpbnM7XG4iLCJjb25zdCBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXQgTW9kZWxzKCl7XG4gICAgICAgIHRoaXMubW9kZWxzO1xuICAgIH1cbiAgICBzZXQgTW9kZWxzKG1vZGVscyl7XG4gICAgICAgIHRoaXMubW9kZWxzID0gbW9kZWxzO1xuICAgIH1cbiAgICBnZXQgTG9zcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbExvc3M7XG4gICAgfVxuICAgIHNldCBMb3NzKGxvc3Mpe1xuICAgICAgICB0aGlzLm1vZGVsTG9zcyA9IGxvc3M7XG4gICAgICAgIHRoaXMubW9kZWxMb3NzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IFByZWRpY3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxQcmVkaWN0O1xuICAgIH1cbiAgICBzZXQgUHJlZGljdChwcmVkaWN0KXtcbiAgICAgICAgdGhpcy5tb2RlbFByZWRpY3QgPSBwcmVkaWN0O1xuICAgICAgICB0aGlzLm1vZGVsUHJlZGljdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBGaXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxGaXQ7XG4gICAgfVxuICAgIHNldCBGaXQoZml0KXtcbiAgICAgICAgdGhpcy5tb2RlbEZpdCA9IGZpdDtcbiAgICAgICAgdGhpcy5tb2RlbEZpdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGdldCBOdW1DbGFzc2VzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsTnVtQ2xhc3NlcztcbiAgICB9XG4gICAgc2V0IE51bUNsYXNzZXMobnVtQ2xhc3Nlcyl7XG4gICAgICAgIHRoaXMubW9kZWxOdW1DbGFzc2VzID0gbnVtQ2xhc3NlcztcbiAgICB9XG5cbiAgICBzZXRNb2RlbEJ5Q29uZmlnKG5ldENvbmZpZyl7XG4gICAgICAgIGNvbnN0IE51bUNsYXNzZXMgPSBuZXRDb25maWcuTnVtQ2xhc3NlcztcbiAgICAgICAgY29uc3Qge0xvc3MsIFByZWRpY3QsIE9uZUhvdFByZWRpY3QsIEZpdH0gPSBuZXRDb25maWcuTW9kZWw7XG4gICAgICAgIGlmKCFMb3NzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdMb3NzIG11c3QgYmUgZGVmaW5kIGFzIGEgdGVuc29yIGZ1bmN0aW9uIG9yIGFjcXVpcmUgZnJvbSBDYXVzYWxOZXQubW9kZWxzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mKExvc3MpID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRoaXMuTG9zcyA9IExvc3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdub3Qga25vd25pbmcgeWV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mKEZpdCkgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhpcy5GaXQgPSBGaXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdub3Qga25vd25pbmcgeWV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mKFByZWRpY3QpID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRoaXMuUHJlZGljdCA9IFByZWRpY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdub3Qga25vd25pbmcgeWV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mKE9uZUhvdFByZWRpY3QpID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRoaXMuT25lSG90UHJlZGljdCA9IE9uZUhvdFByZWRpY3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdub3Qga25vd25pbmcgeWV0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoTnVtQ2xhc3NlcyA+IDApe1xuICAgICAgICAgICAgdGhpcy5OdW1DbGFzc2VzID0gTnVtQ2xhc3NlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ051bUNsYXNzZXMgZnJvbSBuZXRDb25maWcgbXVzdCBiZSBub24gemVybywgcG9zaXRpdmUgbnVtYmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVblN1cGVydmlzZWRNb2RlbHNNaXhpbnM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9