(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/layer"] = factory(require("causal-net.core"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/layer"] = factory(root["causal-net.core"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectSpread.js":
/*!**********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./src/CausalNetLayers/causalNetLayers.js":
/*!************************************************!*\
  !*** ./src/CausalNetLayers/causalNetLayers.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dense_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dense.mixins */ "./src/CausalNetLayers/dense.mixins.js");
/* harmony import */ var _convolution_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convolution.mixins */ "./src/CausalNetLayers/convolution.mixins.js");
/* harmony import */ var _recurrent_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recurrent.mixins */ "./src/CausalNetLayers/recurrent.mixins.js");





/**
 * This class provides common used layers which can be accessed via **causalNetLayers** instance.
 * { mixWith: [ LayerMixins, DenseMixins ] }
 * @class CausalNetLayers
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/dense.layer.js]
 */

class CausalNetLayers extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [_dense_mixins__WEBPACK_IMPORTED_MODULE_2__["default"], _convolution_mixins__WEBPACK_IMPORTED_MODULE_3__["default"], _recurrent_mixins__WEBPACK_IMPORTED_MODULE_4__["default"]]) {
  constructor() {
    super();
    this.layerNames = [];
  }

  nameGenerator(layerType) {
    const layerIdx = this.layerNames.length;
    let newName = layerType + '/' + layerIdx;
    this.layerNames.push(newName);
    return newName;
  }

  checkName(name, layerType) {
    if (!name) {
      const Name = this.nameGenerator(layerType);
      return {
        Name,
        Reused: false
      };
    } else {
      const Reused = this.layerNames.indexOf(name) > -1;

      if (!Reused) {
        this.layerNames.push(name);
      }

      return {
        Name: name,
        Reused
      };
    }
  }

  custom({
    Net,
    Parameters = {},
    name = null
  }) {
    const {
      Name,
      Reused
    } = this.checkName(name, 'custom');

    if (Reused) {
      Parameters = null;
    }

    return {
      Name,
      Type: 'Layer',
      Config: {
        name
      },
      Parameters,
      Net
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetLayers());

/***/ }),

/***/ "./src/CausalNetLayers/convolution.mixins.js":
/*!***************************************************!*\
  !*** ./src/CausalNetLayers/convolution.mixins.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ConvolutionMixins = PipelineClass => class extends PipelineClass {
  /**
   * Convolutional layer
   * @param {Number} inputSize - size of net input
   * @param {Array} kernelSize - size of net output
   * @param {String|Function} activator - activator function can be customed or get from built-in by string name
   * @param {String} name - layer name, default by null
   * @returns { Object } layer
   */
  convolution({
    kernelSize,
    filters,
    strides = 1,
    padding = 'same',
    dilations = [1, 1],
    flatten = false,
    activator = 'sigmoid',
    name = null
  }) {
    const {
      Name,
      Reused
    } = this.checkName(name, 'convolution');

    if (Reused) {
      Parameters = null;
    } else {
      Parameters = {
        Kernel: [...kernelSize, ...filters]
      };
    }

    const FConv = this.T.conv2d;
    const shapeType = 'NHWC';
    return {
      Name,
      Type: 'Layer',
      Config: {
        kernelSize,
        filters,
        strides,
        padding,
        dilations,
        flatten,
        activator,
        shapeType
      },
      Parameters,
      Net: (value, params, contexts) => {
        let {
          Kernel
        } = params;
        let result = FConv(value, Kernel, strides, padding, shapeType, dilations);

        if (typeof activator === "string") {
          result = result[activator]();
        } else {
          result = activator(result);
        }

        if (flatten) {
          const {
            batchSize
          } = contexts;
          result = result.reshape([batchSize, -1]);
        }

        return result;
      }
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ConvolutionMixins);

/***/ }),

/***/ "./src/CausalNetLayers/dense.mixins.js":
/*!*********************************************!*\
  !*** ./src/CausalNetLayers/dense.mixins.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);


const DenseLayerMixins = PipelineClass => class extends PipelineClass {
  /**
   * Simple dense layer
   * @param {Number} inputSize - size of net input
   * @param {Number} outputSize - size of net output
   * @param {String|Function} activator - activator function can be customed or get from built-in by string name
   * @param {String} name - layer name, default by null
   * @returns { Object } layer
   */
  dense({
    inputSize,
    outputSize,
    activator = 'sigmoid',
    withBias = true,
    transpose = false,
    name = null
  }) {
    const {
      Name,
      Reused
    } = this.checkName(name, 'convolution');
    let BiasParams = withBias ? {
      Bias: [outputSize]
    } : {};
    const Parameters = Reused ? null : _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
      Weight: [inputSize, outputSize]
    }, BiasParams);
    return {
      Name,
      Type: 'Layer',
      Config: {
        inputSize,
        outputSize,
        activator
      },
      Parameters,
      Net: (value, params, contexts) => {
        let {
          Weight,
          Bias
        } = params;
        let result = transpose ? value.dot(Weight.transpose()) : value.dot(Weight);

        if (Bias) {
          result = result.add(Bias);
        }

        if (activator === null) {
          return result;
        } else {
          if (typeof activator === "string") {
            return result[activator]();
          } else {
            return activator(result);
          }
        }
      }
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (DenseLayerMixins);

/***/ }),

/***/ "./src/CausalNetLayers/index.js":
/*!**************************************!*\
  !*** ./src/CausalNetLayers/index.js ***!
  \**************************************/
/*! exports provided: causalNetLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetLayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetLayers */ "./src/CausalNetLayers/causalNetLayers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetLayers", function() { return _causalNetLayers__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/CausalNetLayers/recurrent.mixins.js":
/*!*************************************************!*\
  !*** ./src/CausalNetLayers/recurrent.mixins.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);


const RecurrentMixins = PipelineClass => class extends PipelineClass {
  /**
   * Convolutional layer
   * @param {Number} inputSize - size of net input
   * @param {Array} kernelSize - size of net output
   * @param {String|Function} activator - activator function can be customed or get from built-in by string name
   * @param {String} name - layer name, default by null
   * @returns { Object } layer
   */
  seq2vec({
    inputSize,
    encodeSize,
    pad = 0,
    attention = false,
    name = null
  }) {
    name = this.checkName(name, 'seq2vec');
    const {
      Name,
      Reused
    } = this.checkName(name, 'convolution');
    const RNNCell = this.T.basicLSTMCell;

    const InitState = (batchSize, vecSize) => [this.T.zeros([batchSize, vecSize]), this.T.zeros([batchSize, vecSize])];

    const AttentionParams = attention ? {
      AttWeight: [encodeSize, 1],
      AttBias: [1]
    } : {};
    const Parameters = Reused ? _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({
      LSTMKernel: [encodeSize + inputSize, encodeSize * 4],
      LSTMBias: [encodeSize * 4]
    }, AttentionParams) : null;
    return {
      Name,
      Type: 'Layer',
      Config: {
        inputSize,
        encodeSize,
        pad,
        name
      },
      Parameters,
      Net: (value, params, contexts) => {
        let {
          batchSize,
          seqLen
        } = contexts;

        if (!(batchSize > 0 && seqLen > 0)) {
          throw Error(`expect { batchSize, seqLen } 
                                positive numbers get ${JSON.stringify(contexts)}`);
        }

        let {
          LSTMKernel,
          LSTMBias,
          AttWeight = null,
          AttBias = null
        } = params;
        let [h, c] = InitState(batchSize, encodeSize);
        let hiddens = [],
            prev_h = null,
            prev_c = null;

        for (let idx = 0; idx < seqLen; idx++) {
          let token = value.gather(idx, 1);
          prev_h = h;
          prev_c = c;
          [h, c] = RNNCell(0.5, LSTMKernel, LSTMBias, token, h, c); // h = h.mul(mask).add(prev_h);
          // c = c.mul(mask).add(prev_c.mul(this.T.));

          hiddens.push(h);
        }

        if (AttWeight && AttBias) {
          let attVecs = [];

          for (let h of hiddens) {
            attVecs.push(h.matMul(AttWeight).add(AttBias).exp());
          }

          let attVecSum = this.T.concat(attVecs, 1).sum(1, true);
          let idx = 0,
              attH = null;

          for (let h of hiddens) {
            if (idx === 0) {
              attH = h.mul(attVecs[idx].div(attVecSum));
            } else {
              attH = attH.add(h.mul(attVecs[idx].div(attVecSum)));
            }

            idx += 1;
          }

          return attH;
        }

        return h;
      }
    };
  }

  vec2seq({
    encodeSize,
    outputSize,
    pad = 0,
    name = null
  }) {
    name = this.checkName(name, 'seq2vec');
    const RNNCell = this.T.basicLSTMCell;

    const InitState = (batchSize, vecSize) => [this.T.zeros([batchSize, vecSize]), this.T.zeros([batchSize, vecSize])];

    return {
      Name: name,
      Type: 'Layer',
      Config: {
        wordVecSize,
        encodeSize,
        pad,
        name
      },
      Parameters: {
        LSTMKernel: [encodeSize + wordVecSize, encodeSize * 4],
        LSTMBias: [encodeSize * 4],
        OutputWeight: [encodeSize, outputSize],
        OutputBias: [outputSize]
      },
      Net: (value, params, contexts) => {
        let {
          batchSize,
          seqLen,
          isTraining
        } = contexts;

        if (isTraining) {
          throw Error(`expect { isTraining } 
                                a boolean get ${JSON.stringify(contexts)}`);
        }

        if (!(batchSize > 0 && seqLen > 0)) {
          throw Error(`expect { batchSize, seqLen } 
                                positive numbers get ${JSON.stringify(contexts)}`);
        }

        let {
          LSTMKernel,
          LSTMBias,
          OutputWeight,
          OutputBias
        } = params;
        let [h, c] = InitState(batchSize, encodeSize);

        if (isTraining) {
          for (let idx = 0; idx < seqLen; idx++) {
            let token = value.gather(idx, 1);
            [h, c] = RNNCell(1, LSTMKernel, LSTMBias, token, h, c);
          }

          return h;
        } else {
          for (let idx = 0; idx < seqLen; idx++) {
            let token = value.gather(idx, 1);
            [h, c] = RNNCell(1, LSTMKernel, LSTMBias, token, h, c);
          }

          return h;
        }
      }
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (RecurrentMixins);

/***/ }),

/***/ "./src/CausalNetParameters/causalNetParameters.js":
/*!********************************************************!*\
  !*** ./src/CausalNetParameters/causalNetParameters.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.storage */ "causal-net.storage");
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parameter_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parameter.mixins */ "./src/CausalNetParameters/parameter.mixins.js");
/* harmony import */ var _parameterFunctor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parameterFunctor */ "./src/CausalNetParameters/parameterFunctor.js");





/**
 * This class is a standard implementation for model parameters which can be accessed via **causalNetParameters** instance
 * { mixWith: [StorageMixins, ParameterMixins] }
 * @class CausalNetParameters
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../example/parameters.babel.js]
 */

class CausalNetParameters extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["StorageMixins"], _parameter_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]]) {
  constructor(storage, parameterfunctor) {
    super();
    this.parameters = null;
    this.Storage = storage;
    this.F = parameterfunctor;
    this.R = this.F.CoreFunctor;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetParameters(causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["indexDBStorage"], _parameterFunctor__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/CausalNetParameters/index.js":
/*!******************************************!*\
  !*** ./src/CausalNetParameters/index.js ***!
  \******************************************/
/*! exports provided: causalNetParameters, ParameterMixins, ParameterFunctorMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetParameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetParameters */ "./src/CausalNetParameters/causalNetParameters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetParameters", function() { return _causalNetParameters__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _parameter_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameter.mixins */ "./src/CausalNetParameters/parameter.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterMixins", function() { return _parameter_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _parameterFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameterFunctor.mixins */ "./src/CausalNetParameters/parameterFunctor.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterFunctorMixins", function() { return _parameterFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/CausalNetParameters/parameter.mixins.js":
/*!*****************************************************!*\
  !*** ./src/CausalNetParameters/parameter.mixins.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ParameterMixins = BaseParameterClass => class extends BaseParameterClass {
  get Parameters() {
    if (!this.parameters) {
      throw Error('parameters is not set');
    }

    return this.parameters;
  }

  set Parameters(parameters) {
    this.parameters = parameters;
  }

  set ParameterSizes(parameterSizes) {
    this.parameterSizes = parameterSizes;
  }

  get ParameterSizes() {
    if (!this.parameterSizes) {
      throw Error('parameterSizes is not set');
    }

    return this.parameterSizes;
  }

  get SaveModelDir() {
    return 'saveModel/';
  }

  exportParameters() {
    if (!this.parameters) {
      throw Error('parameter is not set');
    }

    return (async () => {
      const Fn = async param => Array.from((await param.data()));

      let params = await this.extractParamFromTensorDict(this.parameters, Fn);
      return params;
    })();
  }

  async extractParamFromTensorDict(params, fn) {
    const R = this.R;

    const Traveller = async (params, fn) => {
      if (this.isTensor(params)) {
        return await fn(params);
      } else {
        let kVals = R.toPairs(params);
        let res = {};

        for (let [k, val] of kVals) {
          res[k] = await Traveller(val, fn);
        }

        return res;
      }
    };

    return await Traveller(params, fn);
  }

  async parametersSummary() {
    if (!this.parameters) {
      throw Error('parameter must be set');
    }

    const Fn = async param => Array.from((await param.mean().data()));

    return await this.extractParamFromTensorDict(this.parameters, Fn);
  }

  initParamSizesByLayers(layers) {
    const {
      compose,
      fromPairs,
      map,
      values,
      concat,
      reduce,
      filter
    } = this.R;
    const GetParamSize = compose(fromPairs, map(p => [p.Name, p.Parameters]), filter(p => p.Parameters));
    let flattenLayers = compose(reduce((s, v) => concat(s, v), []), values)(layers);
    this.ParameterSizes = GetParamSize(flattenLayers);
  }

  importParameters(paramObject) {
    const T = this.T,
          F = this.F;

    const SetOrInit = (initPredict, paramObject) => {
      return F.parameterMapWithKey((keys, paramSize) => {
        let paramValue = this.F.getIn(keys, paramObject, null);

        if (paramValue === null) {
          return T.variable(T.randomNormal(paramSize).asType('float32'));
        } else {
          return T.variable(T.tensor(paramValue, paramSize, 'float32'));
        }
      }, initPredict);
    };

    this.Parameters = SetOrInit(this.ParameterSizes, paramObject);
  }

  InitParameters(paramObject = {}) {
    return layers => {
      return this.setOrInitParams(layers, paramObject);
    };
  }

  setOrInitParams(layers, paramObject) {
    this.initParamSizesByLayers(layers);
    this.importParameters(paramObject);
    return this;
  }

  async getSavedParamList() {
    const Storage = this.Storage,
          SaveDir = this.SaveModelDir;
    let fileList = await Storage.getFileList(SaveDir);
    return fileList.map(fileName => fileName.replace(SaveDir, ''));
  }

  async saveParams(fileName) {
    const SaveDir = this.SaveModelDir;
    const Storage = this.Storage;
    let params = await this.exportParameters();
    await Storage.writeFile(SaveDir + fileName, JSON.stringify(params));
    return params;
  }

  async loadParams(fileName) {
    const Storage = this.Storage,
          SaveDir = this.SaveModelDir;
    let strParams = await Storage.readFile(SaveDir + fileName);
    let params = JSON.parse(strParams);
    this.importParameters(params);
    return this;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ParameterMixins);

/***/ }),

/***/ "./src/CausalNetParameters/parameterFunctor.js":
/*!*****************************************************!*\
  !*** ./src/CausalNetParameters/parameterFunctor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parameterFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parameterFunctor.mixins */ "./src/CausalNetParameters/parameterFunctor.mixins.js");




class ParameterFunctor extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_parameterFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ParameterFunctor());

/***/ }),

/***/ "./src/CausalNetParameters/parameterFunctor.mixins.js":
/*!************************************************************!*\
  !*** ./src/CausalNetParameters/parameterFunctor.mixins.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ParameterFunctorMixins = FunctorClass => class extends FunctorClass {
  isParameter(val) {
    const R = this.R;
    return R.ifElse(R.is(Array), R.all(R.is(Number)), R.always(false))(val);
  }

  parameterMapWithKey(fn, parameterObject) {
    const R = this.R;

    const Res = (keys, subObject) => R.compose(R.fromPairs, R.map(([key, subObject]) => {
      if (this.isParameter(subObject)) {
        return [key, fn([...keys, key], subObject)];
      } else {
        if (R.is(Object, subObject)) {
          return [key, Res([...keys, key], subObject)];
        } else {
          return [key, subObject];
        }
      }
    }), R.toPairs)(subObject);

    return Res([], parameterObject);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ParameterFunctorMixins);

/***/ }),

/***/ "./src/CausalNetRunner/causalNetRunner.js":
/*!************************************************!*\
  !*** ./src/CausalNetRunner/causalNetRunner.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _runner_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runner.mixins */ "./src/CausalNetRunner/runner.mixins.js");



/**
 * This CausalNetRunner class provide net excecutor which is provided pipeline instance at **LayerRunner** attribute.
 * { mixWith: [ RunnerMixins ] }
 * @class CausalNetRunner
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/runner.mixins.babel.js]
 */

class CausalNetRunner extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [_runner_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetRunner());

/***/ }),

/***/ "./src/CausalNetRunner/index.js":
/*!**************************************!*\
  !*** ./src/CausalNetRunner/index.js ***!
  \**************************************/
/*! exports provided: causalNetRunner, RunnerMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetRunner */ "./src/CausalNetRunner/causalNetRunner.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetRunner", function() { return _causalNetRunner__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _runner_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runner.mixins */ "./src/CausalNetRunner/runner.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RunnerMixins", function() { return _runner_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/CausalNetRunner/runner.mixins.js":
/*!**********************************************!*\
  !*** ./src/CausalNetRunner/runner.mixins.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);


/**
 * This RunnerMixins class provide methods for runner class.
 * @class RunnerMixins
 * @extends BaseRunnerClass
 */
const RunnerMixins = BaseRunnerClass => class extends BaseRunnerClass {
  set NetParameters(parameters) {
    this.netParameters = parameters;
  }

  set NetLayers(netLayers) {
    this.netLayers = netLayers;
  }

  get NetParameters() {
    if (!this.netParameters) {
      throw Error('netParameters is not set');
    }

    return this.netParameters.Parameters;
  }

  get NetLayers() {
    if (!this.netLayers) {
      throw Error('netLayers is not set');
    }

    return this.netLayers;
  }

  runLayer(value, layerConfigure, layerParameters, contexts) {
    const {
      Name,
      Type,
      Net
    } = layerConfigure;

    if (Type === 'Layer') {
      let result = Net(value, layerParameters, contexts);
      return {
        [Name]: result
      };
    } else {
      throw Error(`expect {Type} to be 'Layer' get ${layerConfigure}`);
    }
  }

  run(layers, samples, parameters, contexts) {
    let pipeValue = {
      PipeInput: samples
    },
        lastLayer = 'PipeInput';

    for (let layer of layers) {
      let layerOutput = this.runLayer(pipeValue[lastLayer], layer, parameters[layer.Name], contexts);
      pipeValue[layer.Name] = layerOutput[layer.Name];
      lastLayer = layer.Name;
    }

    return pipeValue[lastLayer];
  }

  get LayerPredict() {
    let predictLayers = this.NetLayers.Predict;
    return (samples, contexts = {}) => {
      let parameters = this.NetParameters;
      return this.run(predictLayers, samples, parameters, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, contexts, {
        layer: 'Predict'
      }));
    };
  }

  get LayerEncode() {
    let encodeLayers = this.NetLayers.Encode;
    return (samples, contexts = {}) => {
      let parameters = this.NetParameters;
      return this.run(encodeLayers, samples, parameters, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, contexts, {
        layer: 'Encode'
      }));
    };
  }

  get LayerDecode() {
    let decodeLayers = this.NetLayers.Decode;
    return (samples, contexts = {}) => {
      let parameters = this.NetParameters;
      return this.run(decodeLayers, samples, parameters, _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, contexts, {
        layer: 'Decode'
      }));
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (RunnerMixins);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetLayers, causalNetParameters, ParameterMixins, ParameterFunctorMixins, causalNetRunner, RunnerMixins, LayerRunnerMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CausalNetLayers/index */ "./src/CausalNetLayers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetLayers", function() { return _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__["causalNetLayers"]; });

/* harmony import */ var _CausalNetParameters_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CausalNetParameters/index */ "./src/CausalNetParameters/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetParameters", function() { return _CausalNetParameters_index__WEBPACK_IMPORTED_MODULE_1__["causalNetParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterMixins", function() { return _CausalNetParameters_index__WEBPACK_IMPORTED_MODULE_1__["ParameterMixins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterFunctorMixins", function() { return _CausalNetParameters_index__WEBPACK_IMPORTED_MODULE_1__["ParameterFunctorMixins"]; });

/* harmony import */ var _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CausalNetRunner/index */ "./src/CausalNetRunner/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetRunner", function() { return _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_2__["causalNetRunner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RunnerMixins", function() { return _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_2__["RunnerMixins"]; });

/* harmony import */ var _layerRunner_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layerRunner.mixins */ "./src/layerRunner.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerRunnerMixins", function() { return _layerRunner_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/layerRunner.mixins.js":
/*!***********************************!*\
  !*** ./src/layerRunner.mixins.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This mixin class provide attributes: **ParameterInitializer**, **LayerRunner**, 
 * and handle **Net** setting of pipelineConfig 
 * @class LayerRunnerMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/layerRunner.mixins.babel.js]
 */
const LayerRunnerMixins = BasePipelineClass => class extends BasePipelineClass {
  async saveParams(fileName) {
    await this.LayerRunner.NetParameters.saveParams(fileName);
    return this;
  }

  async loadParams(fileName) {
    this.LayerRunner.NetParameters = await this.LayerRunner.NetParameters.loadParams(fileName);
    return this;
  }

  async getSavedParamList() {
    return await this.LayerRunner.NetParameters.getSavedParamList();
  }

  get ParameterInitializer() {
    if (!this.parameterInitializer) {
      throw Error('ParameterInitializer is not set');
    }

    return this.parameterInitializer;
  }

  set ParameterInitializer(parameterInitializer) {
    this.parameterInitializer = parameterInitializer;
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('set LayerRunner by config');
    const {
      Net
    } = pipelineConfig;
    const {
      Layers,
      Parameters
    } = Net;
    this.LayerRunner.NetLayers = Layers;
    this.ParameterInitializer = Parameters;
    this.LayerRunner.NetParameters = this.ParameterInitializer(Layers);
    this.Logger.groupEnd();
  }

  set LayerRunner(runner) {
    this.layerRunner = runner;
  }

  get LayerRunner() {
    if (!this.layerRunner) {
      throw Error('layerRunner is not set');
    }

    return this.layerRunner;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LayerRunnerMixins);

/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

/***/ }),

/***/ "causal-net.storage":
/*!*************************************!*\
  !*** external "causal-net.storage" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_storage__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9jb252b2x1dGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvZGVuc2UubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL3JlY3VycmVudC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2NhdXNhbE5ldFBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFJ1bm5lci9jYXVzYWxOZXRSdW5uZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvcnVubmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvbGF5ZXJSdW5uZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRMYXllcnMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiRGVuc2VNaXhpbnMiLCJDb252b2x1dGlvbmFsTWl4aW5zIiwiUmVjdXJyZW50TWl4aW5zIiwiY29uc3RydWN0b3IiLCJsYXllck5hbWVzIiwibmFtZUdlbmVyYXRvciIsImxheWVyVHlwZSIsImxheWVySWR4IiwibGVuZ3RoIiwibmV3TmFtZSIsInB1c2giLCJjaGVja05hbWUiLCJuYW1lIiwiTmFtZSIsIlJldXNlZCIsImluZGV4T2YiLCJjdXN0b20iLCJOZXQiLCJQYXJhbWV0ZXJzIiwiVHlwZSIsIkNvbmZpZyIsIkNvbnZvbHV0aW9uTWl4aW5zIiwiUGlwZWxpbmVDbGFzcyIsImNvbnZvbHV0aW9uIiwia2VybmVsU2l6ZSIsImZpbHRlcnMiLCJzdHJpZGVzIiwicGFkZGluZyIsImRpbGF0aW9ucyIsImZsYXR0ZW4iLCJhY3RpdmF0b3IiLCJLZXJuZWwiLCJGQ29udiIsIlQiLCJjb252MmQiLCJzaGFwZVR5cGUiLCJ2YWx1ZSIsInBhcmFtcyIsImNvbnRleHRzIiwicmVzdWx0IiwiYmF0Y2hTaXplIiwicmVzaGFwZSIsIkRlbnNlTGF5ZXJNaXhpbnMiLCJkZW5zZSIsImlucHV0U2l6ZSIsIm91dHB1dFNpemUiLCJ3aXRoQmlhcyIsInRyYW5zcG9zZSIsIkJpYXNQYXJhbXMiLCJCaWFzIiwiV2VpZ2h0IiwiZG90IiwiYWRkIiwic2VxMnZlYyIsImVuY29kZVNpemUiLCJwYWQiLCJhdHRlbnRpb24iLCJSTk5DZWxsIiwiYmFzaWNMU1RNQ2VsbCIsIkluaXRTdGF0ZSIsInZlY1NpemUiLCJ6ZXJvcyIsIkF0dGVudGlvblBhcmFtcyIsIkF0dFdlaWdodCIsIkF0dEJpYXMiLCJMU1RNS2VybmVsIiwiTFNUTUJpYXMiLCJzZXFMZW4iLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJoIiwiYyIsImhpZGRlbnMiLCJwcmV2X2giLCJwcmV2X2MiLCJpZHgiLCJ0b2tlbiIsImdhdGhlciIsImF0dFZlY3MiLCJtYXRNdWwiLCJleHAiLCJhdHRWZWNTdW0iLCJjb25jYXQiLCJzdW0iLCJhdHRIIiwibXVsIiwiZGl2IiwidmVjMnNlcSIsIndvcmRWZWNTaXplIiwiT3V0cHV0V2VpZ2h0IiwiT3V0cHV0QmlhcyIsImlzVHJhaW5pbmciLCJDYXVzYWxOZXRQYXJhbWV0ZXJzIiwiU3RvcmFnZU1peGlucyIsIlBhcmFtZXRlck1peGlucyIsInN0b3JhZ2UiLCJwYXJhbWV0ZXJmdW5jdG9yIiwicGFyYW1ldGVycyIsIlN0b3JhZ2UiLCJGIiwiUiIsIkNvcmVGdW5jdG9yIiwiaW5kZXhEQlN0b3JhZ2UiLCJCYXNlUGFyYW1ldGVyQ2xhc3MiLCJQYXJhbWV0ZXJTaXplcyIsInBhcmFtZXRlclNpemVzIiwiU2F2ZU1vZGVsRGlyIiwiZXhwb3J0UGFyYW1ldGVycyIsIkZuIiwicGFyYW0iLCJBcnJheSIsImZyb20iLCJkYXRhIiwiZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QiLCJmbiIsIlRyYXZlbGxlciIsImlzVGVuc29yIiwia1ZhbHMiLCJ0b1BhaXJzIiwicmVzIiwiayIsInZhbCIsInBhcmFtZXRlcnNTdW1tYXJ5IiwibWVhbiIsImluaXRQYXJhbVNpemVzQnlMYXllcnMiLCJsYXllcnMiLCJjb21wb3NlIiwiZnJvbVBhaXJzIiwibWFwIiwidmFsdWVzIiwicmVkdWNlIiwiZmlsdGVyIiwiR2V0UGFyYW1TaXplIiwicCIsImZsYXR0ZW5MYXllcnMiLCJzIiwidiIsImltcG9ydFBhcmFtZXRlcnMiLCJwYXJhbU9iamVjdCIsIlNldE9ySW5pdCIsImluaXRQcmVkaWN0IiwicGFyYW1ldGVyTWFwV2l0aEtleSIsImtleXMiLCJwYXJhbVNpemUiLCJwYXJhbVZhbHVlIiwiZ2V0SW4iLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsImFzVHlwZSIsInRlbnNvciIsIkluaXRQYXJhbWV0ZXJzIiwic2V0T3JJbml0UGFyYW1zIiwiZ2V0U2F2ZWRQYXJhbUxpc3QiLCJTYXZlRGlyIiwiZmlsZUxpc3QiLCJnZXRGaWxlTGlzdCIsImZpbGVOYW1lIiwicmVwbGFjZSIsInNhdmVQYXJhbXMiLCJ3cml0ZUZpbGUiLCJsb2FkUGFyYW1zIiwic3RyUGFyYW1zIiwicmVhZEZpbGUiLCJwYXJzZSIsIlBhcmFtZXRlckZ1bmN0b3IiLCJCYXNlRnVuY3RvciIsIlBhcmFtZXRlckZ1bmN0b3JNaXhpbnMiLCJGdW5jdG9yQ2xhc3MiLCJpc1BhcmFtZXRlciIsImlmRWxzZSIsImlzIiwiYWxsIiwiTnVtYmVyIiwiYWx3YXlzIiwicGFyYW1ldGVyT2JqZWN0IiwiUmVzIiwic3ViT2JqZWN0Iiwia2V5IiwiT2JqZWN0IiwiQ2F1c2FsTmV0UnVubmVyIiwiUnVubmVyTWl4aW5zIiwiQmFzZVJ1bm5lckNsYXNzIiwiTmV0UGFyYW1ldGVycyIsIm5ldFBhcmFtZXRlcnMiLCJOZXRMYXllcnMiLCJuZXRMYXllcnMiLCJydW5MYXllciIsImxheWVyQ29uZmlndXJlIiwibGF5ZXJQYXJhbWV0ZXJzIiwicnVuIiwic2FtcGxlcyIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsImxhc3RMYXllciIsImxheWVyIiwibGF5ZXJPdXRwdXQiLCJMYXllclByZWRpY3QiLCJwcmVkaWN0TGF5ZXJzIiwiUHJlZGljdCIsIkxheWVyRW5jb2RlIiwiZW5jb2RlTGF5ZXJzIiwiRW5jb2RlIiwiTGF5ZXJEZWNvZGUiLCJkZWNvZGVMYXllcnMiLCJEZWNvZGUiLCJMYXllclJ1bm5lck1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiTGF5ZXJSdW5uZXIiLCJQYXJhbWV0ZXJJbml0aWFsaXplciIsInBhcmFtZXRlckluaXRpYWxpemVyIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsIkxvZ2dlciIsImdyb3VwQmVnaW4iLCJMYXllcnMiLCJncm91cEVuZCIsInJ1bm5lciIsImxheWVyUnVubmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtB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L0I7QUFDQSxTQUFLK0wsV0FBTCxDQUFpQnZCLFNBQWpCLEdBQTZCOEIsTUFBN0I7QUFDQSxTQUFLTixvQkFBTCxHQUE0Qi9MLFVBQTVCO0FBQ0EsU0FBSzhMLFdBQUwsQ0FBaUJ6QixhQUFqQixHQUFpQyxLQUFLMEIsb0JBQUwsQ0FBMEJNLE1BQTFCLENBQWpDO0FBQ0EsU0FBS0YsTUFBTCxDQUFZRyxRQUFaO0FBQ0g7O0FBRUQsTUFBSVIsV0FBSixDQUFnQlMsTUFBaEIsRUFBdUI7QUFDbkIsU0FBS0MsV0FBTCxHQUFtQkQsTUFBbkI7QUFDSDs7QUFDRCxNQUFJVCxXQUFKLEdBQWlCO0FBQ2IsUUFBRyxDQUFDLEtBQUtVLFdBQVQsRUFBcUI7QUFDakIsWUFBTXRKLEtBQUssQ0FBQyx3QkFBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLc0osV0FBWjtBQUNIOztBQS9DMEUsQ0FBL0U7O0FBa0RlWixnRkFBZixFOzs7Ozs7Ozs7OztBQzFEQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2xheWVyLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sYXllclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbGF5ZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERlbnNlTWl4aW5zIH0gZnJvbSAnLi9kZW5zZS5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBDb252b2x1dGlvbmFsTWl4aW5zIH0gZnJvbSAnLi9jb252b2x1dGlvbi5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBSZWN1cnJlbnRNaXhpbnMgfSBmcm9tICcuL3JlY3VycmVudC5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGNvbW1vbiB1c2VkIGxheWVycyB3aGljaCBjYW4gYmUgYWNjZXNzZWQgdmlhICoqY2F1c2FsTmV0TGF5ZXJzKiogaW5zdGFuY2UuXG4gKiB7IG1peFdpdGg6IFsgTGF5ZXJNaXhpbnMsIERlbnNlTWl4aW5zIF0gfVxuICogQGNsYXNzIENhdXNhbE5ldExheWVyc1xuICogQGV4dGVuZHMgQmFzZVRlbnNvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2RlbnNlLmxheWVyLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRMYXllcnMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFxuICAgIFsgRGVuc2VNaXhpbnMsIENvbnZvbHV0aW9uYWxNaXhpbnMsIFJlY3VycmVudE1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYXllck5hbWVzID0gW107XG4gICAgfVxuICAgIG5hbWVHZW5lcmF0b3IobGF5ZXJUeXBlKXtcbiAgICAgICAgY29uc3QgbGF5ZXJJZHggPSB0aGlzLmxheWVyTmFtZXMubGVuZ3RoOyBcbiAgICAgICAgbGV0IG5ld05hbWUgPSBsYXllclR5cGUgKyAnLycgKyBsYXllcklkeDtcbiAgICAgICAgdGhpcy5sYXllck5hbWVzLnB1c2gobmV3TmFtZSk7XG4gICAgICAgIHJldHVybiBuZXdOYW1lO1xuICAgIH1cblxuICAgIGNoZWNrTmFtZShuYW1lLCBsYXllclR5cGUpe1xuICAgICAgICBpZighbmFtZSl7XG4gICAgICAgICAgICBjb25zdCBOYW1lID0gdGhpcy5uYW1lR2VuZXJhdG9yKGxheWVyVHlwZSk7XG4gICAgICAgICAgICByZXR1cm4geyBOYW1lLCBSZXVzZWQ6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IFJldXNlZCA9IHRoaXMubGF5ZXJOYW1lcy5pbmRleE9mKG5hbWUpPi0xO1xuICAgICAgICAgICAgaWYoIVJldXNlZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXllck5hbWVzLnB1c2gobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBOYW1lOm5hbWUsIFJldXNlZCB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3VzdG9tKHtOZXQsIFBhcmFtZXRlcnM9e30sIG5hbWU9bnVsbH0pe1xuICAgICAgICBjb25zdCB7IE5hbWUsIFJldXNlZCB9ID0gdGhpcy5jaGVja05hbWUobmFtZSwgJ2N1c3RvbScpO1xuICAgICAgICBpZihSZXVzZWQpe1xuICAgICAgICAgICAgUGFyYW1ldGVycyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgTmFtZSwgVHlwZTogJ0xheWVyJywgQ29uZmlnOiB7bmFtZX0sIFBhcmFtZXRlcnMsIE5ldCB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldExheWVycygpOyIsImNvbnN0IENvbnZvbHV0aW9uTWl4aW5zID0gKFBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBQaXBlbGluZUNsYXNze1xuICAgIC8qKlxuICAgICAqIENvbnZvbHV0aW9uYWwgbGF5ZXJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5wdXRTaXplIC0gc2l6ZSBvZiBuZXQgaW5wdXRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBrZXJuZWxTaXplIC0gc2l6ZSBvZiBuZXQgb3V0cHV0XG4gICAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IGFjdGl2YXRvciAtIGFjdGl2YXRvciBmdW5jdGlvbiBjYW4gYmUgY3VzdG9tZWQgb3IgZ2V0IGZyb20gYnVpbHQtaW4gYnkgc3RyaW5nIG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIGxheWVyIG5hbWUsIGRlZmF1bHQgYnkgbnVsbFxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gbGF5ZXJcbiAgICAgKi9cbiAgICBjb252b2x1dGlvbih7IGtlcm5lbFNpemUsIGZpbHRlcnMsIFxuICAgICAgICAgICAgICAgICAgc3RyaWRlcz0xLCBwYWRkaW5nPSdzYW1lJyxcbiAgICAgICAgICAgICAgICAgIGRpbGF0aW9ucz1bMSwxXSwgZmxhdHRlbj1mYWxzZSwgXG4gICAgICAgICAgICAgICAgICBhY3RpdmF0b3I9J3NpZ21vaWQnLCBuYW1lPW51bGx9KXtcbiAgICAgICAgY29uc3QgeyBOYW1lLCBSZXVzZWQgfSA9IHRoaXMuY2hlY2tOYW1lKG5hbWUsICdjb252b2x1dGlvbicpO1xuICAgICAgICBpZihSZXVzZWQpe1xuICAgICAgICAgICAgUGFyYW1ldGVycyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIFBhcmFtZXRlcnMgPSB7IEtlcm5lbDogWy4uLmtlcm5lbFNpemUsIC4uLmZpbHRlcnNdIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgRkNvbnYgPSB0aGlzLlQuY29udjJkO1xuICAgICAgICBjb25zdCBzaGFwZVR5cGUgPSAnTkhXQyc7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgTmFtZSwgVHlwZTogJ0xheWVyJyxcbiAgICAgICAgICAgIENvbmZpZzogeyBrZXJuZWxTaXplLCBmaWx0ZXJzLCBzdHJpZGVzLCBwYWRkaW5nLCBkaWxhdGlvbnMsIFxuICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW4sIGFjdGl2YXRvciwgc2hhcGVUeXBlIH0sXG4gICAgICAgICAgICBQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgTmV0OiAodmFsdWUsIHBhcmFtcywgY29udGV4dHMpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCB7IEtlcm5lbCB9ID0gcGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gRkNvbnYodmFsdWUsIEtlcm5lbCwgc3RyaWRlcywgcGFkZGluZywgc2hhcGVUeXBlLCBkaWxhdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgYWN0aXZhdG9yID09PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFthY3RpdmF0b3JdKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGFjdGl2YXRvcihyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgaWYoZmxhdHRlbil7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGJhdGNoU2l6ZSB9ID0gY29udGV4dHM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVzaGFwZShbYmF0Y2hTaXplLCAtMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29udm9sdXRpb25NaXhpbnM7IiwiY29uc3QgRGVuc2VMYXllck1peGlucyA9IChQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgUGlwZWxpbmVDbGFzc3tcbiAgICAvKipcbiAgICAgKiBTaW1wbGUgZGVuc2UgbGF5ZXJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5wdXRTaXplIC0gc2l6ZSBvZiBuZXQgaW5wdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3V0cHV0U2l6ZSAtIHNpemUgb2YgbmV0IG91dHB1dFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBhY3RpdmF0b3IgLSBhY3RpdmF0b3IgZnVuY3Rpb24gY2FuIGJlIGN1c3RvbWVkIG9yIGdldCBmcm9tIGJ1aWx0LWluIGJ5IHN0cmluZyBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBsYXllciBuYW1lLCBkZWZhdWx0IGJ5IG51bGxcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGxheWVyXG4gICAgICovXG4gICAgZGVuc2Uoe2lucHV0U2l6ZSwgb3V0cHV0U2l6ZSwgYWN0aXZhdG9yPSdzaWdtb2lkJywgd2l0aEJpYXM9dHJ1ZSwgdHJhbnNwb3NlPWZhbHNlLCBuYW1lPW51bGx9KXtcbiAgICAgICAgY29uc3QgeyBOYW1lLCBSZXVzZWQgfSA9IHRoaXMuY2hlY2tOYW1lKG5hbWUsICdjb252b2x1dGlvbicpO1xuICAgICAgICBsZXQgQmlhc1BhcmFtcyA9ICh3aXRoQmlhcyk/e0JpYXM6IFtvdXRwdXRTaXplXX06e307XG4gICAgICAgIGNvbnN0IFBhcmFtZXRlcnMgPSAoUmV1c2VkKT9udWxsOiB7IFdlaWdodDogW2lucHV0U2l6ZSwgb3V0cHV0U2l6ZV0sIC4uLiBCaWFzUGFyYW1zIH07XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgTmFtZSwgVHlwZTogJ0xheWVyJyxcbiAgICAgICAgICAgIENvbmZpZzogeyBpbnB1dFNpemUsIG91dHB1dFNpemUsIGFjdGl2YXRvciB9LCBQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgTmV0OiAodmFsdWUsIHBhcmFtcywgY29udGV4dHMpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCB7V2VpZ2h0LCBCaWFzfSA9IHBhcmFtcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICh0cmFuc3Bvc2UpP3ZhbHVlLmRvdChXZWlnaHQudHJhbnNwb3NlKCkpOnZhbHVlLmRvdChXZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBpZihCaWFzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5hZGQoQmlhcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoYWN0aXZhdG9yID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBhY3RpdmF0b3IgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRbYWN0aXZhdG9yXSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aXZhdG9yKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICBcbn07XG5leHBvcnQgZGVmYXVsdCBEZW5zZUxheWVyTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0TGF5ZXJzIH0gZnJvbSAnLi9jYXVzYWxOZXRMYXllcnMnOyIsImNvbnN0IFJlY3VycmVudE1peGlucyA9IChQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgUGlwZWxpbmVDbGFzc3tcbiAgICAvKipcbiAgICAgKiBDb252b2x1dGlvbmFsIGxheWVyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlucHV0U2l6ZSAtIHNpemUgb2YgbmV0IGlucHV0XG4gICAgICogQHBhcmFtIHtBcnJheX0ga2VybmVsU2l6ZSAtIHNpemUgb2YgbmV0IG91dHB1dFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBhY3RpdmF0b3IgLSBhY3RpdmF0b3IgZnVuY3Rpb24gY2FuIGJlIGN1c3RvbWVkIG9yIGdldCBmcm9tIGJ1aWx0LWluIGJ5IHN0cmluZyBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBsYXllciBuYW1lLCBkZWZhdWx0IGJ5IG51bGxcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGxheWVyXG4gICAgICovXG4gICAgc2VxMnZlYyh7IGlucHV0U2l6ZSwgZW5jb2RlU2l6ZSwgcGFkPTAsIGF0dGVudGlvbiA9IGZhbHNlLCBuYW1lPW51bGwgfSl7XG4gICAgICAgIG5hbWUgPSB0aGlzLmNoZWNrTmFtZShuYW1lLCAnc2VxMnZlYycpO1xuICAgICAgICBjb25zdCB7IE5hbWUsIFJldXNlZCB9ID0gdGhpcy5jaGVja05hbWUobmFtZSwgJ2NvbnZvbHV0aW9uJyk7XG4gICAgICAgIGNvbnN0IFJOTkNlbGwgPSB0aGlzLlQuYmFzaWNMU1RNQ2VsbDtcbiAgICAgICAgY29uc3QgSW5pdFN0YXRlID0gKGJhdGNoU2l6ZSwgdmVjU2l6ZSk9PihbIHRoaXMuVC56ZXJvcyhbYmF0Y2hTaXplLCB2ZWNTaXplXSksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ULnplcm9zKFtiYXRjaFNpemUsIHZlY1NpemVdKSBdKTtcbiAgICAgICAgY29uc3QgQXR0ZW50aW9uUGFyYW1zID0gKGF0dGVudGlvbik/eyBBdHRXZWlnaHQ6W2VuY29kZVNpemUsIDFdLCBBdHRCaWFzOiBbMV0gfTp7fTtcbiAgICAgICAgY29uc3QgUGFyYW1ldGVycyA9ICAoUmV1c2VkKT97IFxuICAgICAgICAgICAgICAgIExTVE1LZXJuZWw6IFtlbmNvZGVTaXplICsgaW5wdXRTaXplLCBlbmNvZGVTaXplKjRdLCBcbiAgICAgICAgICAgICAgICBMU1RNQmlhczogW2VuY29kZVNpemUqNF0sIC4uLkF0dGVudGlvblBhcmFtcyB9Om51bGw7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgTmFtZSwgVHlwZTogJ0xheWVyJyxcbiAgICAgICAgICAgIENvbmZpZzoge2lucHV0U2l6ZSwgZW5jb2RlU2l6ZSwgcGFkLCBuYW1lIH0sXG4gICAgICAgICAgICBQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgTmV0OiAodmFsdWUsIHBhcmFtcywgY29udGV4dHMpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCB7IGJhdGNoU2l6ZSwgc2VxTGVuIH0gPSBjb250ZXh0cztcbiAgICAgICAgICAgICAgICAgICAgaWYoIShiYXRjaFNpemUgPiAwICYmIHNlcUxlbiA+IDApKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3QgeyBiYXRjaFNpemUsIHNlcUxlbiB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGl2ZSBudW1iZXJzIGdldCAke0pTT04uc3RyaW5naWZ5KGNvbnRleHRzKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgeyBMU1RNS2VybmVsLCBMU1RNQmlhcywgQXR0V2VpZ2h0PW51bGwsIEF0dEJpYXM9bnVsbCB9ID0gcGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICBsZXQgWyBoLCBjIF0gPSBJbml0U3RhdGUoYmF0Y2hTaXplLCBlbmNvZGVTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpZGRlbnMgPSBbXSwgcHJldl9oID0gbnVsbCwgcHJldl9jID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpZHg9MDsgaWR4IDwgc2VxTGVuOyBpZHgrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSB2YWx1ZS5nYXRoZXIoaWR4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZfaCA9IGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2X2MgPSBjO1xuICAgICAgICAgICAgICAgICAgICAgICAgWyBoLCBjIF0gPSBSTk5DZWxsKDAuNSwgTFNUTUtlcm5lbCwgTFNUTUJpYXMsIHRva2VuLCBoLCBjICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoID0gaC5tdWwobWFzaykuYWRkKHByZXZfaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjID0gYy5tdWwobWFzaykuYWRkKHByZXZfYy5tdWwodGhpcy5ULikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVucy5wdXNoKGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKEF0dFdlaWdodCAmJiBBdHRCaWFzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRWZWNzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGggb2YgaGlkZGVucyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0VmVjcy5wdXNoKGgubWF0TXVsKEF0dFdlaWdodCkuYWRkKEF0dEJpYXMpLmV4cCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdHRWZWNTdW0gPSB0aGlzLlQuY29uY2F0KGF0dFZlY3MsMSkuc3VtKDEsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkeCA9IDAsIGF0dEggPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBoIG9mIGhpZGRlbnMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlkeD09PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRIID0gaC5tdWwoYXR0VmVjc1tpZHhdLmRpdihhdHRWZWNTdW0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0SCA9IGF0dEguYWRkKGgubXVsKGF0dFZlY3NbaWR4XS5kaXYoYXR0VmVjU3VtKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRIO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHZlYzJzZXEoeyBlbmNvZGVTaXplLCBvdXRwdXRTaXplLCBwYWQ9MCwgbmFtZT1udWxsIH0pe1xuICAgICAgICBuYW1lID0gdGhpcy5jaGVja05hbWUobmFtZSwgJ3NlcTJ2ZWMnKTtcbiAgICAgICAgY29uc3QgUk5OQ2VsbCA9IHRoaXMuVC5iYXNpY0xTVE1DZWxsO1xuICAgICAgICBjb25zdCBJbml0U3RhdGUgPSAoYmF0Y2hTaXplLCB2ZWNTaXplKT0+KFsgdGhpcy5ULnplcm9zKFtiYXRjaFNpemUsIHZlY1NpemVdKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlQuemVyb3MoW2JhdGNoU2l6ZSwgdmVjU2l6ZV0pIF0pO1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIE5hbWU6IG5hbWUsIFR5cGU6ICdMYXllcicsXG4gICAgICAgICAgICBDb25maWc6IHt3b3JkVmVjU2l6ZSwgZW5jb2RlU2l6ZSwgcGFkLCBuYW1lIH0sXG4gICAgICAgICAgICBQYXJhbWV0ZXJzOiB7IExTVE1LZXJuZWw6IFtlbmNvZGVTaXplICsgd29yZFZlY1NpemUsIGVuY29kZVNpemUqNF0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBMU1RNQmlhczogW2VuY29kZVNpemUqNF0sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBPdXRwdXRXZWlnaHQ6IFtlbmNvZGVTaXplLCBvdXRwdXRTaXplXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgT3V0cHV0QmlhczogW291dHB1dFNpemVdICB9LFxuICAgICAgICAgICAgTmV0OiAodmFsdWUsIHBhcmFtcywgY29udGV4dHMpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCB7IGJhdGNoU2l6ZSwgc2VxTGVuLCBpc1RyYWluaW5nIH0gPSBjb250ZXh0cztcbiAgICAgICAgICAgICAgICAgICAgaWYoaXNUcmFpbmluZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHsgaXNUcmFpbmluZyB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhIGJvb2xlYW4gZ2V0ICR7SlNPTi5zdHJpbmdpZnkoY29udGV4dHMpfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKCEoYmF0Y2hTaXplID4gMCAmJiBzZXFMZW4gPiAwKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHsgYmF0Y2hTaXplLCBzZXFMZW4gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpdmUgbnVtYmVycyBnZXQgJHtKU09OLnN0cmluZ2lmeShjb250ZXh0cyl9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHsgTFNUTUtlcm5lbCwgTFNUTUJpYXMsIE91dHB1dFdlaWdodCwgT3V0cHV0QmlhcyB9ID0gcGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICBsZXQgWyBoLCBjIF0gPSBJbml0U3RhdGUoYmF0Y2hTaXplLCBlbmNvZGVTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIGlzVHJhaW5pbmcgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaWR4PTA7IGlkeCA8IHNlcUxlbjsgaWR4Kyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHZhbHVlLmdhdGhlcihpZHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgaCwgYyBdID0gUk5OQ2VsbCgxLCBMU1RNS2VybmVsLCBMU1RNQmlhcywgdG9rZW4sIGgsIGMgKTsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaWR4PTA7IGlkeCA8IHNlcUxlbjsgaWR4Kyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHZhbHVlLmdhdGhlcihpZHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgaCwgYyBdID0gUk5OQ2VsbCgxLCBMU1RNS2VybmVsLCBMU1RNQmlhcywgdG9rZW4sIGgsIGMgKTsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBSZWN1cnJlbnRNaXhpbnM7IiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFN0b3JhZ2VNaXhpbnMsIGluZGV4REJTdG9yYWdlIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1ldGVyTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXIubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgcGFyYW1ldGVyZnVuY3RvciB9IGZyb20gJy4vcGFyYW1ldGVyRnVuY3Rvcic7XG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBzdGFuZGFyZCBpbXBsZW1lbnRhdGlvbiBmb3IgbW9kZWwgcGFyYW1ldGVycyB3aGljaCBjYW4gYmUgYWNjZXNzZWQgdmlhICoqY2F1c2FsTmV0UGFyYW1ldGVycyoqIGluc3RhbmNlXG4gKiB7IG1peFdpdGg6IFtTdG9yYWdlTWl4aW5zLCBQYXJhbWV0ZXJNaXhpbnNdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRQYXJhbWV0ZXJzXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZS9wYXJhbWV0ZXJzLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRQYXJhbWV0ZXJzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbU3RvcmFnZU1peGlucywgUGFyYW1ldGVyTWl4aW5zXSApe1xuICAgIGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHBhcmFtZXRlcmZ1bmN0b3Ipe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBzdG9yYWdlO1xuICAgICAgICB0aGlzLkYgPSBwYXJhbWV0ZXJmdW5jdG9yO1xuICAgICAgICB0aGlzLlIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgfVxufSAgIFxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0UGFyYW1ldGVycyhpbmRleERCU3RvcmFnZSwgcGFyYW1ldGVyZnVuY3Rvcik7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRQYXJhbWV0ZXJzIH0gZnJvbSAnLi9jYXVzYWxOZXRQYXJhbWV0ZXJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1ldGVyTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXIubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1ldGVyRnVuY3Rvck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyRnVuY3Rvci5taXhpbnMnOyIsImNvbnN0IFBhcmFtZXRlck1peGlucyA9IChCYXNlUGFyYW1ldGVyQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGFyYW1ldGVyQ2xhc3N7IFxuICAgIFxuICAgIFxuICAgIFxuICAgIGdldCBQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gICAgfVxuICAgIFxuICAgIHNldCBQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIH1cblxuICAgIHNldCBQYXJhbWV0ZXJTaXplcyhwYXJhbWV0ZXJTaXplcyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyU2l6ZXMgPSBwYXJhbWV0ZXJTaXplcztcbiAgICB9XG5cbiAgICBnZXQgUGFyYW1ldGVyU2l6ZXMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVyU2l6ZXMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlclNpemVzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJTaXplcztcbiAgICB9XG4gICAgXG4gICAgZ2V0IFNhdmVNb2RlbERpcigpe1xuICAgICAgICByZXR1cm4gJ3NhdmVNb2RlbC8nO1xuICAgIH1cbiAgICBcbiAgICBleHBvcnRQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChhc3luYyAoKT0+e1xuICAgICAgICAgICAgY29uc3QgRm4gPSBhc3luYyAocGFyYW0pPT4oQXJyYXkuZnJvbShhd2FpdCBwYXJhbS5kYXRhKCkpKTtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSBhd2FpdCB0aGlzLmV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHRoaXMucGFyYW1ldGVycywgRm4pO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICBcbiAgICBhc3luYyBleHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdChwYXJhbXMsIGZuKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVHJhdmVsbGVyID0gYXN5bmMgKHBhcmFtcywgZm4pPT57XG4gICAgICAgICAgICBpZih0aGlzLmlzVGVuc29yKHBhcmFtcykpe1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBmbihwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQga1ZhbHMgPSBSLnRvUGFpcnMocGFyYW1zKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0ge307XG4gICAgICAgICAgICAgICAgZm9yKGxldCBbaywgdmFsXSBvZiBrVmFscyl7XG4gICAgICAgICAgICAgICAgICAgIHJlc1trXSA9IGF3YWl0IFRyYXZlbGxlcih2YWwsIGZuKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhd2FpdCBUcmF2ZWxsZXIocGFyYW1zLCBmbik7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHBhcmFtZXRlcnNTdW1tYXJ5KCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlciBtdXN0IGJlIHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IEZuID0gYXN5bmMgKHBhcmFtKT0+QXJyYXkuZnJvbShhd2FpdCBwYXJhbS5tZWFuKCkuZGF0YSgpKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QodGhpcy5wYXJhbWV0ZXJzLCBGbik7XG4gICAgfVxuICAgIFxuICAgIGluaXRQYXJhbVNpemVzQnlMYXllcnMobGF5ZXJzKXtcbiAgICAgICAgY29uc3QgeyBjb21wb3NlLCBmcm9tUGFpcnMsIG1hcCwgdmFsdWVzLCBjb25jYXQsIHJlZHVjZSwgZmlsdGVyIH0gPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IEdldFBhcmFtU2l6ZSA9IGNvbXBvc2UoZnJvbVBhaXJzLCBtYXAocD0+W3AuTmFtZSwgcC5QYXJhbWV0ZXJzXSksIGZpbHRlcihwPT5wLlBhcmFtZXRlcnMpKTtcbiAgICAgICAgbGV0IGZsYXR0ZW5MYXllcnMgPSBjb21wb3NlKHJlZHVjZSgocyx2KT0+Y29uY2F0KHMsdiksW10pLCB2YWx1ZXMpKGxheWVycyk7XG4gICAgICAgIHRoaXMuUGFyYW1ldGVyU2l6ZXMgPSBHZXRQYXJhbVNpemUoZmxhdHRlbkxheWVycyk7XG4gICAgfVxuXG4gICAgaW1wb3J0UGFyYW1ldGVycyhwYXJhbU9iamVjdCl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIEYgPSB0aGlzLkY7XG4gICAgICAgIGNvbnN0IFNldE9ySW5pdCA9ICggaW5pdFByZWRpY3QsIHBhcmFtT2JqZWN0ICk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEYucGFyYW1ldGVyTWFwV2l0aEtleSgoa2V5cywgcGFyYW1TaXplKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtVmFsdWUgPSB0aGlzLkYuZ2V0SW4oa2V5cywgcGFyYW1PYmplY3QsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyYW1WYWx1ZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFQudmFyaWFibGUoVC5yYW5kb21Ob3JtYWwocGFyYW1TaXplKS5hc1R5cGUoJ2Zsb2F0MzInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBULnZhcmlhYmxlKFQudGVuc29yKHBhcmFtVmFsdWUsIHBhcmFtU2l6ZSwgJ2Zsb2F0MzInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sIGluaXRQcmVkaWN0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB0aGlzLlBhcmFtZXRlcnMgPSBTZXRPckluaXQoIHRoaXMuUGFyYW1ldGVyU2l6ZXMsIHBhcmFtT2JqZWN0ICk7XG4gICAgfVxuXG4gICAgSW5pdFBhcmFtZXRlcnMocGFyYW1PYmplY3Q9e30pe1xuICAgICAgICByZXR1cm4gKGxheWVycyk9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldE9ySW5pdFBhcmFtcyhsYXllcnMsIHBhcmFtT2JqZWN0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRPckluaXRQYXJhbXMobGF5ZXJzLCBwYXJhbU9iamVjdCl7XG4gICAgICAgIHRoaXMuaW5pdFBhcmFtU2l6ZXNCeUxheWVycyhsYXllcnMpO1xuICAgICAgICB0aGlzLmltcG9ydFBhcmFtZXRlcnMocGFyYW1PYmplY3QpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTYXZlZFBhcmFtTGlzdCgpe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlLCBTYXZlRGlyID0gdGhpcy5TYXZlTW9kZWxEaXI7XG4gICAgICAgIGxldCBmaWxlTGlzdCA9IGF3YWl0IFN0b3JhZ2UuZ2V0RmlsZUxpc3QoU2F2ZURpcik7XG4gICAgICAgIHJldHVybiBmaWxlTGlzdC5tYXAoZmlsZU5hbWU9PmZpbGVOYW1lLnJlcGxhY2UoU2F2ZURpciwnJykpO1xuICAgIH1cblxuICAgIGFzeW5jIHNhdmVQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICBjb25zdCBTYXZlRGlyID0gdGhpcy5TYXZlTW9kZWxEaXI7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIGxldCBwYXJhbXMgPSBhd2FpdCB0aGlzLmV4cG9ydFBhcmFtZXRlcnMoKTtcbiAgICAgICAgYXdhaXQgU3RvcmFnZS53cml0ZUZpbGUoU2F2ZURpciArIGZpbGVOYW1lLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG4gICAgYXN5bmMgbG9hZFBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2UsIFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgbGV0IHN0clBhcmFtcyA9IGF3YWl0IFN0b3JhZ2UucmVhZEZpbGUoU2F2ZURpcitmaWxlTmFtZSk7XG4gICAgICAgIGxldCBwYXJhbXMgPSBKU09OLnBhcnNlKHN0clBhcmFtcyk7XG4gICAgICAgIHRoaXMuaW1wb3J0UGFyYW1ldGVycyhwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhbWV0ZXJNaXhpbnM7IiwiaW1wb3J0IHtGdW5jdG9yIGFzIEJhc2VGdW5jdG9yfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHtwbGF0Zm9ybX0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgUGFyYW1ldGVyRnVuY3Rvck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyRnVuY3Rvci5taXhpbnMnO1xuXG5jbGFzcyBQYXJhbWV0ZXJGdW5jdG9yIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgWyBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIF0gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBhcmFtZXRlckZ1bmN0b3IoKTsiLCJjb25zdCBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zID0gKEZ1bmN0b3JDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEZ1bmN0b3JDbGFzc3sgXG4gICAgaXNQYXJhbWV0ZXIodmFsKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuaWZFbHNlKFIuaXMoQXJyYXkpLCBSLmFsbChSLmlzKE51bWJlcikpLCBSLmFsd2F5cyhmYWxzZSkpKHZhbCk7XG4gICAgfVxuICAgIHBhcmFtZXRlck1hcFdpdGhLZXkoZm4sIHBhcmFtZXRlck9iamVjdCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBSZXMgPSAoa2V5cywgc3ViT2JqZWN0KSA9PiBSLmNvbXBvc2UoUi5mcm9tUGFpcnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgUi5tYXAoKFtrZXksIHN1Yk9iamVjdF0pPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pc1BhcmFtZXRlcihzdWJPYmplY3QpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIGZuKFsuLi5rZXlzLCBrZXldLCBzdWJPYmplY3QpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoUi5pcyhPYmplY3QsIHN1Yk9iamVjdCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFJlcyhbLi4ua2V5cywga2V5XSwgc3ViT2JqZWN0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBzdWJPYmplY3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIFIudG9QYWlycykoc3ViT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIFJlcyhbXSwgcGFyYW1ldGVyT2JqZWN0KTtcbiAgICB9ICAgICAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFtZXRlckZ1bmN0b3JNaXhpbnM7IiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRSdW5uZXIgY2xhc3MgcHJvdmlkZSBuZXQgZXhjZWN1dG9yIHdoaWNoIGlzIHByb3ZpZGVkIHBpcGVsaW5lIGluc3RhbmNlIGF0ICoqTGF5ZXJSdW5uZXIqKiBhdHRyaWJ1dGUuXG4gKiB7IG1peFdpdGg6IFsgUnVubmVyTWl4aW5zIF0gfVxuICogQGNsYXNzIENhdXNhbE5ldFJ1bm5lclxuICogQGV4dGVuZHMgQmFzZVRlbnNvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3J1bm5lci5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldFJ1bm5lciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgWyBSdW5uZXJNaXhpbnMgXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0UnVubmVyKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRSdW5uZXIgfSBmcm9tICcuL2NhdXNhbE5ldFJ1bm5lcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJ1bm5lck1peGlucyB9IGZyb20gJy4vcnVubmVyLm1peGlucyc7IiwiLyoqXG4gKiBUaGlzIFJ1bm5lck1peGlucyBjbGFzcyBwcm92aWRlIG1ldGhvZHMgZm9yIHJ1bm5lciBjbGFzcy5cbiAqIEBjbGFzcyBSdW5uZXJNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VSdW5uZXJDbGFzc1xuICovXG5jb25zdCBSdW5uZXJNaXhpbnMgPSAoIEJhc2VSdW5uZXJDbGFzcyApPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUnVubmVyQ2xhc3N7XG4gICAgc2V0IE5ldFBhcmFtZXRlcnMocGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMubmV0UGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgfVxuICAgIHNldCBOZXRMYXllcnMobmV0TGF5ZXJzKXtcbiAgICAgICAgdGhpcy5uZXRMYXllcnMgPSBuZXRMYXllcnM7XG4gICAgfVxuICAgIGdldCBOZXRQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldFBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldFBhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldFBhcmFtZXRlcnMuUGFyYW1ldGVycztcbiAgICB9XG4gICAgZ2V0IE5ldExheWVycygpe1xuICAgICAgICBpZighdGhpcy5uZXRMYXllcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldExheWVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TGF5ZXJzO1xuICAgIH1cbiAgICBcblxuICAgIHJ1bkxheWVyKHZhbHVlLCBsYXllckNvbmZpZ3VyZSwgbGF5ZXJQYXJhbWV0ZXJzLCBjb250ZXh0cyl7XG4gICAgICAgIGNvbnN0IHsgTmFtZSwgVHlwZSwgTmV0IH0gPSBsYXllckNvbmZpZ3VyZTsgIFxuICAgICAgICBpZihUeXBlID09PSAnTGF5ZXInKXtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBOZXQodmFsdWUsIGxheWVyUGFyYW1ldGVycywgY29udGV4dHMpO1xuICAgICAgICAgICAgcmV0dXJuIHtbTmFtZV06IHJlc3VsdH07XG4gICAgICAgIH0gICBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBleHBlY3Qge1R5cGV9IHRvIGJlICdMYXllcicgZ2V0ICR7bGF5ZXJDb25maWd1cmV9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBydW4obGF5ZXJzLCBzYW1wbGVzLCBwYXJhbWV0ZXJzLCBjb250ZXh0cyl7XG4gICAgICAgIGxldCBwaXBlVmFsdWUgPSB7UGlwZUlucHV0OiBzYW1wbGVzfSwgbGFzdExheWVyID0gJ1BpcGVJbnB1dCc7XG4gICAgICAgIGZvcihsZXQgbGF5ZXIgb2YgbGF5ZXJzKXtcbiAgICAgICAgICAgIGxldCBsYXllck91dHB1dCA9IHRoaXMucnVuTGF5ZXIocGlwZVZhbHVlW2xhc3RMYXllcl0sIGxheWVyLCBwYXJhbWV0ZXJzW2xheWVyLk5hbWVdLCBjb250ZXh0cyk7XG4gICAgICAgICAgICBwaXBlVmFsdWVbbGF5ZXIuTmFtZV0gPSBsYXllck91dHB1dFtsYXllci5OYW1lXTtcbiAgICAgICAgICAgIGxhc3RMYXllciA9IGxheWVyLk5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpcGVWYWx1ZVtsYXN0TGF5ZXJdO1xuICAgIH1cblxuICAgIGdldCBMYXllclByZWRpY3QoKXtcbiAgICAgICAgbGV0IHByZWRpY3RMYXllcnMgPSB0aGlzLk5ldExheWVycy5QcmVkaWN0O1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMsIGNvbnRleHRzPXt9KT0+e1xuICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB0aGlzLk5ldFBhcmFtZXRlcnM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4ocHJlZGljdExheWVycywgc2FtcGxlcywgcGFyYW1ldGVycywgey4uLmNvbnRleHRzLCBsYXllcjogJ1ByZWRpY3QnfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCBMYXllckVuY29kZSgpe1xuICAgICAgICBsZXQgZW5jb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRW5jb2RlO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMsIGNvbnRleHRzPXt9KT0+e1xuICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSB0aGlzLk5ldFBhcmFtZXRlcnM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4oZW5jb2RlTGF5ZXJzLCBzYW1wbGVzLCBwYXJhbWV0ZXJzLCB7Li4uY29udGV4dHMsIGxheWVyOiAnRW5jb2RlJ30pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgTGF5ZXJEZWNvZGUoKXtcbiAgICAgICAgbGV0IGRlY29kZUxheWVycyA9IHRoaXMuTmV0TGF5ZXJzLkRlY29kZTtcbiAgICAgICAgcmV0dXJuIChzYW1wbGVzLCBjb250ZXh0cz17fSk9PntcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJzID0gdGhpcy5OZXRQYXJhbWV0ZXJzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuKGRlY29kZUxheWVycywgc2FtcGxlcywgcGFyYW1ldGVycywgey4uLmNvbnRleHRzLCBsYXllcjogJ0RlY29kZSd9KTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSdW5uZXJNaXhpbnM7XG4iLCJleHBvcnQgeyBjYXVzYWxOZXRMYXllcnMgfSBmcm9tICcuL0NhdXNhbE5ldExheWVycy9pbmRleCc7XG5leHBvcnQgeyBjYXVzYWxOZXRQYXJhbWV0ZXJzLCBQYXJhbWV0ZXJNaXhpbnMsIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgfSBmcm9tICcuL0NhdXNhbE5ldFBhcmFtZXRlcnMvaW5kZXgnO1xuZXhwb3J0IHsgY2F1c2FsTmV0UnVubmVyLCBSdW5uZXJNaXhpbnMgfSBmcm9tICcuL0NhdXNhbE5ldFJ1bm5lci9pbmRleCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExheWVyUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9sYXllclJ1bm5lci5taXhpbnMnO1xuIiwiLyoqXG4gKiBUaGlzIG1peGluIGNsYXNzIHByb3ZpZGUgYXR0cmlidXRlczogKipQYXJhbWV0ZXJJbml0aWFsaXplcioqLCAqKkxheWVyUnVubmVyKiosIFxuICogYW5kIGhhbmRsZSAqKk5ldCoqIHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcgXG4gKiBAY2xhc3MgTGF5ZXJSdW5uZXJNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvbGF5ZXJSdW5uZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBMYXllclJ1bm5lck1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIGFzeW5jIHNhdmVQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICBhd2FpdCB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMuc2F2ZVBhcmFtcyhmaWxlTmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzID0gYXdhaXQgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzLmxvYWRQYXJhbXMoZmlsZU5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTYXZlZFBhcmFtTGlzdCgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzLmdldFNhdmVkUGFyYW1MaXN0KCk7XG4gICAgfVxuXG4gICAgZ2V0IFBhcmFtZXRlckluaXRpYWxpemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlckluaXRpYWxpemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdQYXJhbWV0ZXJJbml0aWFsaXplciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW5pdGlhbGl6ZXI7XG4gICAgfVxuXG4gICAgc2V0IFBhcmFtZXRlckluaXRpYWxpemVyKHBhcmFtZXRlckluaXRpYWxpemVyKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJJbml0aWFsaXplciA9IHBhcmFtZXRlckluaXRpYWxpemVyO1xuICAgIH1cblxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IExheWVyUnVubmVyIGJ5IGNvbmZpZycpO1xuICAgICAgICBjb25zdCB7IE5ldCB9ID0gcGlwZWxpbmVDb25maWc7XG4gICAgICAgIGNvbnN0IHsgTGF5ZXJzLCBQYXJhbWV0ZXJzIH0gPSBOZXQ7IFxuICAgICAgICB0aGlzLkxheWVyUnVubmVyLk5ldExheWVycyA9IExheWVycztcbiAgICAgICAgdGhpcy5QYXJhbWV0ZXJJbml0aWFsaXplciA9IFBhcmFtZXRlcnM7ICAgICAgIFxuICAgICAgICB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMgPSB0aGlzLlBhcmFtZXRlckluaXRpYWxpemVyKExheWVycyk7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgc2V0IExheWVyUnVubmVyKHJ1bm5lcil7XG4gICAgICAgIHRoaXMubGF5ZXJSdW5uZXIgPSBydW5uZXI7XG4gICAgfVxuICAgIGdldCBMYXllclJ1bm5lcigpe1xuICAgICAgICBpZighdGhpcy5sYXllclJ1bm5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbGF5ZXJSdW5uZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyUnVubmVyO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyUnVubmVyTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9