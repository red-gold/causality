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
/* harmony import */ var _layer_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layer.mixins */ "./src/CausalNetLayers/layer.mixins.js");




/**
 * This CausalNetLayer class provide common use layers
 * { mixWith: [ LayerMixins, DenseMixins ] }
 * @class CausalNetLayer
 * @extends BaseTensor
 */

class CausalNetLayers extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [_layer_mixins__WEBPACK_IMPORTED_MODULE_3__["default"], _dense_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
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

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetLayers());

/***/ }),

/***/ "./src/CausalNetLayers/dense.mixins.js":
/*!*********************************************!*\
  !*** ./src/CausalNetLayers/dense.mixins.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DenseLayerMixins = PipelineClass => class extends PipelineClass {
  /**
   * Simple dense layer
   * @param { Number } inputSize - size of net input
   * @param { Number } outputSize - size of net output
   * @param { String } name - layer name
   * @returns { Object } layer
   */
  dense(inputSize, outputSize, name) {
    if (!name) {
      name = this.nameGenerator('dense');
    }

    return {
      Name: name,
      Type: 'Layer',
      Parameters: {
        Weight: [inputSize, outputSize],
        Bias: [outputSize]
      },
      Net: function (value, params) {
        let trace = {};
        let {
          Weight,
          Bias
        } = params;
        let result = value.dot(Weight).add(Bias);
        return {
          result,
          trace
        };
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
/*! exports provided: causalNetLayers, LayerMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetLayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetLayers */ "./src/CausalNetLayers/causalNetLayers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetLayers", function() { return _causalNetLayers__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _layer_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layer.mixins */ "./src/CausalNetLayers/layer.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerMixins", function() { return _layer_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/CausalNetLayers/layer.mixins.js":
/*!*********************************************!*\
  !*** ./src/CausalNetLayers/layer.mixins.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This LayerMixins class provide mixin for building pipeline
 * @class CausalNetLayer
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/layer.mixins.babel.js]
 */
const LayerMixins = BasePipelineClass => class extends BasePipelineClass {
  get DecodeLayers() {
    if (!this.decodeLayers) {
      throw Error('decodeLayers is not set');
    }

    this.decodeLayers;
  }

  get EncodeLayers() {
    if (!this.encodeLayers) {
      throw Error('encodeLayers is not set');
    }

    this.encodeLayers;
  }

  get PredictLayers() {
    if (!this.predictLayers) {
      throw Error('predictLayers is not set');
    }

    this.predictLayers;
  }

  set DecodeLayers(decodeLayers) {
    this.decodeLayers = decodeLayers;
  }

  set EncodeLayers(encodeLayers) {
    this.encodeLayers = encodeLayers;
  }

  set PredictLayers(predictLayers) {
    this.predictLayers = predictLayers;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LayerMixins);

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
 * This CausalNetLayer class provide common use layers
 * { mixWith: [ DenseMixins ] }
 * @class CausalNetLayer
 * @extends BaseTensor
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
/*! exports provided: causalNetParameters, ParameterMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetParameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetParameters */ "./src/CausalNetParameters/causalNetParameters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetParameters", function() { return _causalNetParameters__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _parameter_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameter.mixins */ "./src/CausalNetParameters/parameter.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterMixins", function() { return _parameter_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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
  get PredictParameters() {
    if (!this.parameters || !this.parameters.Predict) {
      throw Error('parameters is not set');
    }

    return this.parameters.Predict;
  }

  get EncodeParameters() {
    if (!this.parameters || !this.parameters.Encode) {
      throw Error('parameters is not set');
    }

    return this.parameters.Encode;
  }

  get DecodeParameters() {
    if (!this.parameters || !this.parameters.Decode) {
      throw Error('parameters is not set');
    }

    return this.parameters.Decode;
  }

  set PredictParameters(predictParameters) {
    this.parameters = this.parameters ? this.parameters : {};
    this.parameters.Predict = predictParameters;
  }

  set EncodeParameters(encodeParameters) {
    this.parameters = this.parameters ? this.parameters : {};
    this.parameters.Encode = encodeParameters;
  }

  set DecodeParameters(decodeParameters) {
    this.parameters = this.parameters ? this.parameters : {};
    this.parameters.Decode = decodeParameters;
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
    const R = this.R,
          T = this.T,
          F = this.F;
    const GetParamSize = R.compose(R.fromPairs, R.map(p => [p.Name, p.Parameters]));
    const PredictSize = GetParamSize(F.getIn(['Predict'], layers, []));
    const EncodeSize = GetParamSize(F.getIn(['Encode'], layers, []));
    const DecodeSize = GetParamSize(F.getIn(['Decode'], layers, []));
    this.ParameterSizes = {
      PredictSize,
      EncodeSize,
      DecodeSize
    };
  }

  importParameters(paramObject) {
    const T = this.T,
          R = this.R,
          F = this.F;
    console.log({
      paramObject
    });
    let predictParamObject = F.getIn(['Predict'], paramObject, {});
    let encodeParamObject = F.getIn(['Encode'], paramObject, {});
    let decodeParamObject = F.getIn(['Decode'], paramObject, {});
    const {
      PredictSize,
      EncodeSize,
      DecodeSize
    } = this.ParameterSizes;

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

    this.PredictParameters = SetOrInit(PredictSize, predictParamObject);
    this.EncodeParameters = SetOrInit(EncodeSize, encodeParamObject);
    this.DecodeParameters = SetOrInit(DecodeSize, decodeParamObject);
  }

  setOrInitParams(layers, paramObject) {
    this.initParamSizesByLayers(layers);
    this.importParameters(paramObject);
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
    return await this.Parameters;
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
 * This CausalNetLayer class provide common use layers
 * { mixWith: [ DenseMixins ] }
 * @class CausalNetLayer
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

    return this.netParameters;
  }

  get NetLayers() {
    if (!this.netLayers) {
      throw Error('netLayers is not set');
    }

    return this.netLayers;
  }

  runOpFlow(value, flow, parameters) {
    const R = this.R;
    const OpsRunner = R.addIndex(R.reduce)(R.__, {
      result: value,
      trace: {}
    }, flow);
    var {
      result,
      trace
    } = OpsRunner(({
      result,
      trace
    }, node, idx) => {
      if (node.Parameter) {
        let params = parameters[node.Parameter];
        result = result[node.Op](params, ...node.Args);
      } else {
        result = result[node.Op](...node.Args);
      }

      ;
      trace[idx] = result.shape;
      return {
        result,
        trace
      };
    });
    return {
      result,
      trace
    };
  }

  runOpLayer(value, net, parameters) {
    let {
      result,
      trace
    } = net(value, parameters);
    return {
      result,
      trace
    };
  }

  runLayer(value, layerConfigure, layerParameters) {
    const {
      Name,
      Type,
      Flow,
      Net
    } = layerConfigure;

    if (Type === 'Tensor') {
      let {
        result,
        trace
      } = this.runOpFlow(value, Flow, layerParameters);
      return {
        [Name]: result,
        trace
      };
    } else if (Type === 'Layer') {
      let {
        result,
        trace
      } = this.runOpLayer(value, Net, layerParameters);
      return {
        [Name]: result,
        trace
      };
    } else {
      throw Error('type must be either Layer or Tensor');
    }
  }

  tracing(traces, name, trace) {
    if (traces) {
      traces.push({
        [name]: trace
      });
    }
  }

  run(layers, samples, parameters, traces = null) {
    let pipeValue = {
      PipeInput: samples
    },
        lastLayer = 'PipeInput';

    for (let layer of layers) {
      let layerOutput = this.runLayer(pipeValue[lastLayer], layer, parameters[layer.Name]);
      pipeValue[layer.Name] = layerOutput[layer.Name];
      lastLayer = layer.Name;
      this.tracing(traces, layer.Name, layerOutput.trace);
    }

    if (traces) {
      this.logger.debug({
        traces
      });
    }

    return pipeValue[lastLayer];
  }

  get PredictRunner() {
    let predictLayers = this.NetLayers.Predict;
    let predictParameters = this.NetParameters.PredictParameters;
    return samples => {
      return this.run(predictLayers, samples, predictParameters);
    };
  }

  get EncodeRunner() {
    let encodeLayers = this.NetLayers.Encode;
    let encodeParameters = this.NetParameters.EncodeParameters;
    return samples => {
      return this.run(encodeLayers, samples, encodeParameters);
    };
  }

  get DecodeRunner() {
    let decodeLayers = this.NetLayers.Decode;
    let decodeParameters = this.NetParameters.DecodeParameters;
    return samples => {
      return this.run(decodeLayers, samples, decodeParameters);
    };
  }

};

/* harmony default export */ __webpack_exports__["default"] = (RunnerMixins);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetLayers, LayerMixins, causalNetParameters, ParameterMixins, causalNetRunner, RunnerMixins, NetMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CausalNetLayers/index */ "./src/CausalNetLayers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetLayers", function() { return _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__["causalNetLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerMixins", function() { return _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__["LayerMixins"]; });

/* harmony import */ var _CausalNetParameters_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CausalNetParameters/index */ "./src/CausalNetParameters/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetParameters", function() { return _CausalNetParameters_index__WEBPACK_IMPORTED_MODULE_1__["causalNetParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterMixins", function() { return _CausalNetParameters_index__WEBPACK_IMPORTED_MODULE_1__["ParameterMixins"]; });

/* harmony import */ var _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CausalNetRunner/index */ "./src/CausalNetRunner/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetRunner", function() { return _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_2__["causalNetRunner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RunnerMixins", function() { return _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_2__["RunnerMixins"]; });

/* harmony import */ var _net_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./net.mixins */ "./src/net.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetMixins", function() { return _net_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/net.mixins.js":
/*!***************************!*\
  !*** ./src/net.mixins.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This NetMixins class provide mixin for building pipeline
 * @class NetMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/net.mixins.babel.js]
 */
const NetMixins = BasePipelineClass => class extends BasePipelineClass {
  getNetFromConfig(pipelineConfig) {
    const {
      Net
    } = pipelineConfig;
    const {
      Layers,
      Parameters
    } = Net;
    this.NetParameters.setOrInitParams(Layers, Parameters);
    this.NetRunner.NetLayers = Layers;
    this.NetRunner.NetParameters = this.NetParameters;
  }

  set NetParameters(parameters) {
    this.netParameters = parameters;
  }

  get NetParameters() {
    if (!this.netParameters) {
      throw Error('netRunner is not set');
    }

    return this.netParameters;
  }

  set NetRunner(runner) {
    this.netRunner = runner;
  }

  get NetRunner() {
    if (!this.netRunner) {
      throw Error('netRunner is not set');
    }

    return this.netRunner;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (NetMixins);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9kZW5zZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvbGF5ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9jYXVzYWxOZXRQYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFBhcmFtZXRlcnMvcGFyYW1ldGVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFBhcmFtZXRlcnMvcGFyYW1ldGVyRnVuY3Rvci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFBhcmFtZXRlcnMvcGFyYW1ldGVyRnVuY3Rvci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvY2F1c2FsTmV0UnVubmVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UnVubmVyL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UnVubmVyL3J1bm5lci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL25ldC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNhdXNhbE5ldExheWVycyIsInBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VUZW5zb3IiLCJMYXllck1peGlucyIsIkRlbnNlTWl4aW5zIiwiY29uc3RydWN0b3IiLCJsYXllck5hbWVzIiwibmFtZUdlbmVyYXRvciIsImxheWVyVHlwZSIsImxheWVySWR4IiwibGVuZ3RoIiwibmV3TmFtZSIsInB1c2giLCJEZW5zZUxheWVyTWl4aW5zIiwiUGlwZWxpbmVDbGFzcyIsImRlbnNlIiwiaW5wdXRTaXplIiwib3V0cHV0U2l6ZSIsIm5hbWUiLCJOYW1lIiwiVHlwZSIsIlBhcmFtZXRlcnMiLCJXZWlnaHQiLCJCaWFzIiwiTmV0IiwidmFsdWUiLCJwYXJhbXMiLCJ0cmFjZSIsInJlc3VsdCIsImRvdCIsImFkZCIsIkJhc2VQaXBlbGluZUNsYXNzIiwiRGVjb2RlTGF5ZXJzIiwiZGVjb2RlTGF5ZXJzIiwiRXJyb3IiLCJFbmNvZGVMYXllcnMiLCJlbmNvZGVMYXllcnMiLCJQcmVkaWN0TGF5ZXJzIiwicHJlZGljdExheWVycyIsIkNhdXNhbE5ldFBhcmFtZXRlcnMiLCJTdG9yYWdlTWl4aW5zIiwiUGFyYW1ldGVyTWl4aW5zIiwic3RvcmFnZSIsInBhcmFtZXRlcmZ1bmN0b3IiLCJwYXJhbWV0ZXJzIiwiU3RvcmFnZSIsIkYiLCJSIiwiQ29yZUZ1bmN0b3IiLCJpbmRleERCU3RvcmFnZSIsIkJhc2VQYXJhbWV0ZXJDbGFzcyIsIlByZWRpY3RQYXJhbWV0ZXJzIiwiUHJlZGljdCIsIkVuY29kZVBhcmFtZXRlcnMiLCJFbmNvZGUiLCJEZWNvZGVQYXJhbWV0ZXJzIiwiRGVjb2RlIiwicHJlZGljdFBhcmFtZXRlcnMiLCJlbmNvZGVQYXJhbWV0ZXJzIiwiZGVjb2RlUGFyYW1ldGVycyIsIlBhcmFtZXRlclNpemVzIiwicGFyYW1ldGVyU2l6ZXMiLCJTYXZlTW9kZWxEaXIiLCJleHBvcnRQYXJhbWV0ZXJzIiwiRm4iLCJwYXJhbSIsIkFycmF5IiwiZnJvbSIsImRhdGEiLCJleHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdCIsImZuIiwiVHJhdmVsbGVyIiwiaXNUZW5zb3IiLCJrVmFscyIsInRvUGFpcnMiLCJyZXMiLCJrIiwidmFsIiwicGFyYW1ldGVyc1N1bW1hcnkiLCJtZWFuIiwiaW5pdFBhcmFtU2l6ZXNCeUxheWVycyIsImxheWVycyIsIlQiLCJHZXRQYXJhbVNpemUiLCJjb21wb3NlIiwiZnJvbVBhaXJzIiwibWFwIiwicCIsIlByZWRpY3RTaXplIiwiZ2V0SW4iLCJFbmNvZGVTaXplIiwiRGVjb2RlU2l6ZSIsImltcG9ydFBhcmFtZXRlcnMiLCJwYXJhbU9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJwcmVkaWN0UGFyYW1PYmplY3QiLCJlbmNvZGVQYXJhbU9iamVjdCIsImRlY29kZVBhcmFtT2JqZWN0IiwiU2V0T3JJbml0IiwiaW5pdFByZWRpY3QiLCJwYXJhbWV0ZXJNYXBXaXRoS2V5Iiwia2V5cyIsInBhcmFtU2l6ZSIsInBhcmFtVmFsdWUiLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsImFzVHlwZSIsInRlbnNvciIsInNldE9ySW5pdFBhcmFtcyIsImdldFNhdmVkUGFyYW1MaXN0IiwiU2F2ZURpciIsImZpbGVMaXN0IiwiZ2V0RmlsZUxpc3QiLCJmaWxlTmFtZSIsInJlcGxhY2UiLCJzYXZlUGFyYW1zIiwid3JpdGVGaWxlIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWRQYXJhbXMiLCJzdHJQYXJhbXMiLCJyZWFkRmlsZSIsInBhcnNlIiwiUGFyYW1ldGVyRnVuY3RvciIsIkJhc2VGdW5jdG9yIiwiUGFyYW1ldGVyRnVuY3Rvck1peGlucyIsIkZ1bmN0b3JDbGFzcyIsImlzUGFyYW1ldGVyIiwiaWZFbHNlIiwiaXMiLCJhbGwiLCJOdW1iZXIiLCJhbHdheXMiLCJwYXJhbWV0ZXJPYmplY3QiLCJSZXMiLCJzdWJPYmplY3QiLCJrZXkiLCJPYmplY3QiLCJDYXVzYWxOZXRSdW5uZXIiLCJSdW5uZXJNaXhpbnMiLCJCYXNlUnVubmVyQ2xhc3MiLCJOZXRQYXJhbWV0ZXJzIiwibmV0UGFyYW1ldGVycyIsIk5ldExheWVycyIsIm5ldExheWVycyIsInJ1bk9wRmxvdyIsImZsb3ciLCJPcHNSdW5uZXIiLCJhZGRJbmRleCIsInJlZHVjZSIsIl9fIiwibm9kZSIsImlkeCIsIlBhcmFtZXRlciIsIk9wIiwiQXJncyIsInNoYXBlIiwicnVuT3BMYXllciIsIm5ldCIsInJ1bkxheWVyIiwibGF5ZXJDb25maWd1cmUiLCJsYXllclBhcmFtZXRlcnMiLCJGbG93IiwidHJhY2luZyIsInRyYWNlcyIsInJ1biIsInNhbXBsZXMiLCJwaXBlVmFsdWUiLCJQaXBlSW5wdXQiLCJsYXN0TGF5ZXIiLCJsYXllciIsImxheWVyT3V0cHV0IiwibG9nZ2VyIiwiZGVidWciLCJQcmVkaWN0UnVubmVyIiwiRW5jb2RlUnVubmVyIiwiRGVjb2RlUnVubmVyIiwiTmV0TWl4aW5zIiwiZ2V0TmV0RnJvbUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTGF5ZXJzIiwiTmV0UnVubmVyIiwicnVubmVyIiwibmV0UnVubmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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Q0EsU0FBS3NILGFBQUwsQ0FBbUJqQyxlQUFuQixDQUFtQ3dFLE1BQW5DLEVBQTJDaEssVUFBM0M7QUFDQSxTQUFLaUssU0FBTCxDQUFldEMsU0FBZixHQUEyQnFDLE1BQTNCO0FBQ0EsU0FBS0MsU0FBTCxDQUFleEMsYUFBZixHQUErQixLQUFLQSxhQUFwQztBQUNIOztBQUNELE1BQUlBLGFBQUosQ0FBa0JsRyxVQUFsQixFQUE2QjtBQUN6QixTQUFLbUcsYUFBTCxHQUFxQm5HLFVBQXJCO0FBQ0g7O0FBQ0QsTUFBSWtHLGFBQUosR0FBbUI7QUFDZixRQUFHLENBQUMsS0FBS0MsYUFBVCxFQUF1QjtBQUNuQixZQUFNN0csS0FBSyxDQUFDLHNCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUs2RyxhQUFaO0FBQ0g7O0FBQ0QsTUFBSXVDLFNBQUosQ0FBY0MsTUFBZCxFQUFxQjtBQUNqQixTQUFLQyxTQUFMLEdBQWlCRCxNQUFqQjtBQUNIOztBQUNELE1BQUlELFNBQUosR0FBZTtBQUNYLFFBQUcsQ0FBQyxLQUFLRSxTQUFULEVBQW1CO0FBQ2YsWUFBTXRKLEtBQUssQ0FBQyxzQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLc0osU0FBWjtBQUNIOztBQXpCa0UsQ0FBdkU7O0FBNEJlTix3RUFBZixFOzs7Ozs7Ozs7OztBQ25DQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2xheWVyLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sYXllclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbGF5ZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEZW5zZU1peGlucyB9IGZyb20gJy4vZGVuc2UubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgTGF5ZXJNaXhpbnMgfSBmcm9tICcuL2xheWVyLm1peGlucyc7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0TGF5ZXIgY2xhc3MgcHJvdmlkZSBjb21tb24gdXNlIGxheWVyc1xuICogeyBtaXhXaXRoOiBbIExheWVyTWl4aW5zLCBEZW5zZU1peGlucyBdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRMYXllclxuICogQGV4dGVuZHMgQmFzZVRlbnNvclxuICovXG5jbGFzcyBDYXVzYWxOZXRMYXllcnMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFxuICAgIFsgTGF5ZXJNaXhpbnMsIFxuICAgICAgRGVuc2VNaXhpbnMgXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGF5ZXJOYW1lcyA9IFtdO1xuICAgIH1cbiAgICBuYW1lR2VuZXJhdG9yKGxheWVyVHlwZSl7XG4gICAgICAgIGNvbnN0IGxheWVySWR4ID0gdGhpcy5sYXllck5hbWVzLmxlbmd0aDsgXG4gICAgICAgIGxldCBuZXdOYW1lID0gbGF5ZXJUeXBlICsgJy8nICsgbGF5ZXJJZHg7XG4gICAgICAgIHRoaXMubGF5ZXJOYW1lcy5wdXNoKG5ld05hbWUpO1xuICAgICAgICByZXR1cm4gbmV3TmFtZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRMYXllcnMoKTsiLCJjb25zdCBEZW5zZUxheWVyTWl4aW5zID0gKFBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBQaXBlbGluZUNsYXNze1xuICAgIC8qKlxuICAgICAqIFNpbXBsZSBkZW5zZSBsYXllclxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IGlucHV0U2l6ZSAtIHNpemUgb2YgbmV0IGlucHV0XG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gb3V0cHV0U2l6ZSAtIHNpemUgb2YgbmV0IG91dHB1dFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG5hbWUgLSBsYXllciBuYW1lXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSBsYXllclxuICAgICAqL1xuICAgIGRlbnNlKGlucHV0U2l6ZSwgb3V0cHV0U2l6ZSwgbmFtZSl7XG4gICAgICAgIGlmKCFuYW1lKXtcbiAgICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWVHZW5lcmF0b3IoJ2RlbnNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBOYW1lOiBuYW1lLCBUeXBlOiAnTGF5ZXInLFxuICAgICAgICAgICAgUGFyYW1ldGVyczogeyBXZWlnaHQ6IFtpbnB1dFNpemUsIG91dHB1dFNpemVdLCBCaWFzOiBbb3V0cHV0U2l6ZV0gfSxcbiAgICAgICAgICAgIE5ldDogZnVuY3Rpb24odmFsdWUsIHBhcmFtcyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBsZXQge1dlaWdodCwgQmlhc30gPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWx1ZS5kb3QoV2VpZ2h0KS5hZGQoQmlhcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHJlc3VsdCwgdHJhY2UgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBEZW5zZUxheWVyTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0TGF5ZXJzIH0gZnJvbSAnLi9jYXVzYWxOZXRMYXllcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXllck1peGlucyB9IGZyb20gJy4vbGF5ZXIubWl4aW5zJzsiLCIvKipcbiAqIFRoaXMgTGF5ZXJNaXhpbnMgY2xhc3MgcHJvdmlkZSBtaXhpbiBmb3IgYnVpbGRpbmcgcGlwZWxpbmVcbiAqIEBjbGFzcyBDYXVzYWxOZXRMYXllclxuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9sYXllci5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IExheWVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgZ2V0IERlY29kZUxheWVycygpe1xuICAgICAgICBpZighdGhpcy5kZWNvZGVMYXllcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2RlY29kZUxheWVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWNvZGVMYXllcnM7XG4gICAgfVxuXG4gICAgZ2V0IEVuY29kZUxheWVycygpe1xuICAgICAgICBpZighdGhpcy5lbmNvZGVMYXllcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2VuY29kZUxheWVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmNvZGVMYXllcnM7XG4gICAgfVxuICAgIFxuICAgIGdldCBQcmVkaWN0TGF5ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnByZWRpY3RMYXllcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ByZWRpY3RMYXllcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZGljdExheWVycztcbiAgICB9XG5cbiAgICBzZXQgRGVjb2RlTGF5ZXJzKGRlY29kZUxheWVycyl7XG4gICAgICAgIHRoaXMuZGVjb2RlTGF5ZXJzID0gZGVjb2RlTGF5ZXJzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgRW5jb2RlTGF5ZXJzKGVuY29kZUxheWVycyl7XG4gICAgICAgIHRoaXMuZW5jb2RlTGF5ZXJzID0gZW5jb2RlTGF5ZXJzO1xuICAgIH1cbiAgICBzZXQgUHJlZGljdExheWVycyhwcmVkaWN0TGF5ZXJzKXtcbiAgICAgICAgdGhpcy5wcmVkaWN0TGF5ZXJzID0gcHJlZGljdExheWVycztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXllck1peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlci5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBwYXJhbWV0ZXJmdW5jdG9yIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRMYXllciBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2UgbGF5ZXJzXG4gKiB7IG1peFdpdGg6IFsgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UGFyYW1ldGVycyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgW1N0b3JhZ2VNaXhpbnMsIFBhcmFtZXRlck1peGluc10gKXtcbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlLCBwYXJhbWV0ZXJmdW5jdG9yKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gc3RvcmFnZTtcbiAgICAgICAgdGhpcy5GID0gcGFyYW1ldGVyZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgIH1cbn0gICBcblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFBhcmFtZXRlcnMoaW5kZXhEQlN0b3JhZ2UsIHBhcmFtZXRlcmZ1bmN0b3IpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0UGFyYW1ldGVycyB9IGZyb20gJy4vY2F1c2FsTmV0UGFyYW1ldGVycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFtZXRlck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyLm1peGlucyc7IiwiY29uc3QgUGFyYW1ldGVyTWl4aW5zID0gKEJhc2VQYXJhbWV0ZXJDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQYXJhbWV0ZXJDbGFzc3sgXG4gICAgXG4gICAgZ2V0IFByZWRpY3RQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMgfHwgIXRoaXMucGFyYW1ldGVycy5QcmVkaWN0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLlByZWRpY3Q7XG4gICAgfVxuICAgIFxuICAgIGdldCBFbmNvZGVQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMgfHwgIXRoaXMucGFyYW1ldGVycy5FbmNvZGUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuRW5jb2RlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgRGVjb2RlUGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzIHx8ICF0aGlzLnBhcmFtZXRlcnMuRGVjb2RlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLkRlY29kZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IFByZWRpY3RQYXJhbWV0ZXJzKHByZWRpY3RQYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gKHRoaXMucGFyYW1ldGVycyk/IHRoaXMucGFyYW1ldGVyczoge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5QcmVkaWN0ID0gcHJlZGljdFBhcmFtZXRlcnM7XG4gICAgfVxuICAgIFxuICAgIHNldCBFbmNvZGVQYXJhbWV0ZXJzKGVuY29kZVBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSAodGhpcy5wYXJhbWV0ZXJzKT8gdGhpcy5wYXJhbWV0ZXJzOiB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLkVuY29kZSA9IGVuY29kZVBhcmFtZXRlcnM7XG4gICAgfVxuICAgIFxuICAgIHNldCBEZWNvZGVQYXJhbWV0ZXJzKGRlY29kZVBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSAodGhpcy5wYXJhbWV0ZXJzKT8gdGhpcy5wYXJhbWV0ZXJzOiB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLkRlY29kZSA9IGRlY29kZVBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgc2V0IFBhcmFtZXRlclNpemVzKHBhcmFtZXRlclNpemVzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJTaXplcyA9IHBhcmFtZXRlclNpemVzO1xuICAgIH1cblxuICAgIGdldCBQYXJhbWV0ZXJTaXplcygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJTaXplcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyU2l6ZXMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlclNpemVzO1xuICAgIH1cbiAgICBcbiAgICBnZXQgU2F2ZU1vZGVsRGlyKCl7XG4gICAgICAgIHJldHVybiAnc2F2ZU1vZGVsLyc7XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGFzeW5jICgpPT57XG4gICAgICAgICAgICBjb25zdCBGbiA9IGFzeW5jIChwYXJhbSk9PihBcnJheS5mcm9tKGF3YWl0IHBhcmFtLmRhdGEoKSkpO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QodGhpcy5wYXJhbWV0ZXJzLCBGbik7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIGV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHBhcmFtcywgZm4pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUcmF2ZWxsZXIgPSBhc3luYyAocGFyYW1zLCBmbik9PntcbiAgICAgICAgICAgIGlmKHRoaXMuaXNUZW5zb3IocGFyYW1zKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZuKHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBrVmFscyA9IFIudG9QYWlycyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtrLCB2YWxdIG9mIGtWYWxzKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2tdID0gYXdhaXQgVHJhdmVsbGVyKHZhbCwgZm4pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFRyYXZlbGxlcihwYXJhbXMsIGZuKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgcGFyYW1ldGVyc1N1bW1hcnkoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIG11c3QgYmUgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgRm4gPSBhc3luYyAocGFyYW0pPT5BcnJheS5mcm9tKGF3YWl0IHBhcmFtLm1lYW4oKS5kYXRhKCkpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5leHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdCh0aGlzLnBhcmFtZXRlcnMsIEZuKTtcbiAgICB9XG4gICAgXG4gICAgaW5pdFBhcmFtU2l6ZXNCeUxheWVycyhsYXllcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBUID0gdGhpcy5ULCBGID0gdGhpcy5GO1xuICAgICAgICBjb25zdCBHZXRQYXJhbVNpemUgPSBSLmNvbXBvc2UoUi5mcm9tUGFpcnMsIFIubWFwKHA9PltwLk5hbWUsIHAuUGFyYW1ldGVyc10pKTtcbiAgICAgICAgY29uc3QgUHJlZGljdFNpemUgPSBHZXRQYXJhbVNpemUoRi5nZXRJbihbJ1ByZWRpY3QnXSwgbGF5ZXJzLCBbXSkpO1xuICAgICAgICBjb25zdCBFbmNvZGVTaXplICA9IEdldFBhcmFtU2l6ZShGLmdldEluKFsnRW5jb2RlJ10sIGxheWVycywgW10pKTtcbiAgICAgICAgY29uc3QgRGVjb2RlU2l6ZSAgPSBHZXRQYXJhbVNpemUoRi5nZXRJbihbJ0RlY29kZSddLCBsYXllcnMsIFtdKSk7IFxuICAgICAgICB0aGlzLlBhcmFtZXRlclNpemVzID0ge1ByZWRpY3RTaXplLCBFbmNvZGVTaXplLCBEZWNvZGVTaXplfTtcbiAgICB9XG5cbiAgICBpbXBvcnRQYXJhbWV0ZXJzKHBhcmFtT2JqZWN0KXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgUiA9IHRoaXMuUiwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc29sZS5sb2coe3BhcmFtT2JqZWN0fSk7XG4gICAgICAgIGxldCBwcmVkaWN0UGFyYW1PYmplY3QgPSBGLmdldEluKFsnUHJlZGljdCddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZW5jb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0VuY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZGVjb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0RlY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBjb25zdCB7IFByZWRpY3RTaXplLCBFbmNvZGVTaXplLCBEZWNvZGVTaXplIH0gPSB0aGlzLlBhcmFtZXRlclNpemVzO1xuICAgICAgICBjb25zdCBTZXRPckluaXQgPSAoIGluaXRQcmVkaWN0LCBwYXJhbU9iamVjdCApPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGLnBhcmFtZXRlck1hcFdpdGhLZXkoKGtleXMsIHBhcmFtU2l6ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbVZhbHVlID0gdGhpcy5GLmdldEluKGtleXMsIHBhcmFtT2JqZWN0LCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhcmFtVmFsdWUgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBULnZhcmlhYmxlKFQucmFuZG9tTm9ybWFsKHBhcmFtU2l6ZSkuYXNUeXBlKCdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVC52YXJpYWJsZShULnRlbnNvcihwYXJhbVZhbHVlLCBwYXJhbVNpemUsICdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LCBpbml0UHJlZGljdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5QcmVkaWN0UGFyYW1ldGVycyA9IFNldE9ySW5pdCggUHJlZGljdFNpemUsIHByZWRpY3RQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkVuY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBFbmNvZGVTaXplLCBlbmNvZGVQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkRlY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBEZWNvZGVTaXplLCBkZWNvZGVQYXJhbU9iamVjdCApOyBcbiAgICB9XG5cbiAgICBzZXRPckluaXRQYXJhbXMobGF5ZXJzLCBwYXJhbU9iamVjdCl7XG4gICAgICAgIHRoaXMuaW5pdFBhcmFtU2l6ZXNCeUxheWVycyhsYXllcnMpO1xuICAgICAgICB0aGlzLmltcG9ydFBhcmFtZXRlcnMocGFyYW1PYmplY3QpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkUGFyYW1MaXN0KCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2UsIFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgU3RvcmFnZS5nZXRGaWxlTGlzdChTYXZlRGlyKTtcbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0Lm1hcChmaWxlTmFtZT0+ZmlsZU5hbWUucmVwbGFjZShTYXZlRGlyLCcnKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGNvbnN0IFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXhwb3J0UGFyYW1ldGVycygpO1xuICAgICAgICBhd2FpdCBTdG9yYWdlLndyaXRlRmlsZShTYXZlRGlyICsgZmlsZU5hbWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZSwgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBsZXQgc3RyUGFyYW1zID0gYXdhaXQgU3RvcmFnZS5yZWFkRmlsZShTYXZlRGlyK2ZpbGVOYW1lKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IEpTT04ucGFyc2Uoc3RyUGFyYW1zKTtcbiAgICAgICAgdGhpcy5pbXBvcnRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLlBhcmFtZXRlcnM7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYW1ldGVyTWl4aW5zOyIsImltcG9ydCB7RnVuY3RvciBhcyBCYXNlRnVuY3Rvcn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7cGxhdGZvcm19IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlckZ1bmN0b3IubWl4aW5zJztcblxuY2xhc3MgUGFyYW1ldGVyRnVuY3RvciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFsgUGFyYW1ldGVyRnVuY3Rvck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQYXJhbWV0ZXJGdW5jdG9yKCk7IiwiY29uc3QgUGFyYW1ldGVyRnVuY3Rvck1peGlucyA9IChGdW5jdG9yQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBGdW5jdG9yQ2xhc3N7IFxuICAgIGlzUGFyYW1ldGVyKHZhbCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmlmRWxzZShSLmlzKEFycmF5KSwgUi5hbGwoUi5pcyhOdW1iZXIpKSwgUi5hbHdheXMoZmFsc2UpKSh2YWwpO1xuICAgIH1cbiAgICBwYXJhbWV0ZXJNYXBXaXRoS2V5KGZuLCBwYXJhbWV0ZXJPYmplY3Qpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgUmVzID0gKGtleXMsIHN1Yk9iamVjdCkgPT4gUi5jb21wb3NlKFIuZnJvbVBhaXJzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFIubWFwKChba2V5LCBzdWJPYmplY3RdKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNQYXJhbWV0ZXIoc3ViT2JqZWN0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBmbihbLi4ua2V5cywga2V5XSwgc3ViT2JqZWN0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKFIuaXMoT2JqZWN0LCBzdWJPYmplY3QpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBSZXMoWy4uLmtleXMsIGtleV0sIHN1Yk9iamVjdCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgc3ViT2JqZWN0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSLnRvUGFpcnMpKHN1Yk9iamVjdCk7XG4gICAgICAgIHJldHVybiBSZXMoW10sIHBhcmFtZXRlck9iamVjdCk7XG4gICAgfSAgICAgICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFJ1bm5lck1peGlucyB9IGZyb20gJy4vcnVubmVyLm1peGlucyc7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0TGF5ZXIgY2xhc3MgcHJvdmlkZSBjb21tb24gdXNlIGxheWVyc1xuICogeyBtaXhXaXRoOiBbIERlbnNlTWl4aW5zIF0gfVxuICogQGNsYXNzIENhdXNhbE5ldExheWVyXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvcnVubmVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UnVubmVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbIFJ1bm5lck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRSdW5uZXIoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFJ1bm5lciB9IGZyb20gJy4vY2F1c2FsTmV0UnVubmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJzsiLCIvKipcbiAqIFRoaXMgUnVubmVyTWl4aW5zIGNsYXNzIHByb3ZpZGUgbWV0aG9kcyBmb3IgcnVubmVyIGNsYXNzLlxuICogQGNsYXNzIFJ1bm5lck1peGluc1xuICogQGV4dGVuZHMgQmFzZVJ1bm5lckNsYXNzXG4gKi9cbmNvbnN0IFJ1bm5lck1peGlucyA9ICggQmFzZVJ1bm5lckNsYXNzICk9PiBjbGFzcyBleHRlbmRzIEJhc2VSdW5uZXJDbGFzc3tcbiAgICBzZXQgTmV0UGFyYW1ldGVycyhwYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5uZXRQYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG4gICAgc2V0IE5ldExheWVycyhuZXRMYXllcnMpe1xuICAgICAgICB0aGlzLm5ldExheWVycyA9IG5ldExheWVycztcbiAgICB9XG4gICAgZ2V0IE5ldFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0UGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0UGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0UGFyYW1ldGVycztcbiAgICB9XG4gICAgZ2V0IE5ldExheWVycygpe1xuICAgICAgICBpZighdGhpcy5uZXRMYXllcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldExheWVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TGF5ZXJzO1xuICAgIH1cbiAgICBydW5PcEZsb3codmFsdWUsIGZsb3csIHBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBPcHNSdW5uZXIgPSBSLmFkZEluZGV4KFIucmVkdWNlKShSLl9fLHtyZXN1bHQ6IHZhbHVlLCB0cmFjZToge319LCBmbG93KTtcbiAgICAgICAgdmFyIHtyZXN1bHQsIHRyYWNlfSA9IE9wc1J1bm5lcigoe3Jlc3VsdCwgdHJhY2V9LCBub2RlLCBpZHgpPT57XG4gICAgICAgICAgICBpZihub2RlLlBhcmFtZXRlcil7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHBhcmFtZXRlcnNbbm9kZS5QYXJhbWV0ZXJdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtub2RlLk9wXShwYXJhbXMsIC4uLm5vZGUuQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtub2RlLk9wXSguLi5ub2RlLkFyZ3MpOyAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmFjZVtpZHhdID0gcmVzdWx0LnNoYXBlO1xuICAgICAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7cmVzdWx0LCB0cmFjZX07XG4gICAgfVxuXG4gICAgcnVuT3BMYXllcih2YWx1ZSwgbmV0LCBwYXJhbWV0ZXJzKXtcbiAgICAgICAgbGV0IHsgcmVzdWx0LCB0cmFjZSB9ID0gbmV0KHZhbHVlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICB9XG4gICAgcnVuTGF5ZXIodmFsdWUsIGxheWVyQ29uZmlndXJlLCBsYXllclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCB7TmFtZSwgVHlwZSwgRmxvdywgTmV0fSA9IGxheWVyQ29uZmlndXJlO1xuICAgICAgICBpZihUeXBlID09PSAnVGVuc29yJyl7XG4gICAgICAgICAgICBsZXQge3Jlc3VsdCwgdHJhY2V9ID0gdGhpcy5ydW5PcEZsb3codmFsdWUsIEZsb3csIGxheWVyUGFyYW1ldGVycyk7XG4gICAgICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0LCB0cmFjZX07XG4gICAgICAgIH0gICBcbiAgICAgICAgZWxzZSBpZihUeXBlID09PSAnTGF5ZXInKXtcbiAgICAgICAgICAgIGxldCB7cmVzdWx0LCB0cmFjZX0gPSB0aGlzLnJ1bk9wTGF5ZXIodmFsdWUsIE5ldCwgbGF5ZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB7W05hbWVdOiByZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSAgIFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3R5cGUgbXVzdCBiZSBlaXRoZXIgTGF5ZXIgb3IgVGVuc29yJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFjaW5nKHRyYWNlcywgbmFtZSwgdHJhY2Upe1xuICAgICAgICBpZih0cmFjZXMpe1xuICAgICAgICAgICAgdHJhY2VzLnB1c2goe1tuYW1lXTogdHJhY2V9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBydW4obGF5ZXJzLCBzYW1wbGVzLCBwYXJhbWV0ZXJzLCB0cmFjZXM9bnVsbCl7XG4gICAgICAgIGxldCBwaXBlVmFsdWUgPSB7UGlwZUlucHV0OiBzYW1wbGVzfSwgbGFzdExheWVyID0gJ1BpcGVJbnB1dCc7XG4gICAgICAgIGZvcihsZXQgbGF5ZXIgb2YgbGF5ZXJzKXtcbiAgICAgICAgICAgIGxldCBsYXllck91dHB1dCA9IHRoaXMucnVuTGF5ZXIocGlwZVZhbHVlW2xhc3RMYXllcl0sIGxheWVyLCBwYXJhbWV0ZXJzW2xheWVyLk5hbWVdKTtcbiAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgbGFzdExheWVyID0gbGF5ZXIuTmFtZTtcbiAgICAgICAgICAgIHRoaXMudHJhY2luZyh0cmFjZXMsIGxheWVyLk5hbWUsIGxheWVyT3V0cHV0LnRyYWNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0cmFjZXMpe1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3RyYWNlc30pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlVmFsdWVbbGFzdExheWVyXTtcbiAgICB9XG5cbiAgICBnZXQgUHJlZGljdFJ1bm5lcigpe1xuICAgICAgICBsZXQgcHJlZGljdExheWVycyA9IHRoaXMuTmV0TGF5ZXJzLlByZWRpY3Q7XG4gICAgICAgIGxldCBwcmVkaWN0UGFyYW1ldGVycyA9IHRoaXMuTmV0UGFyYW1ldGVycy5QcmVkaWN0UGFyYW1ldGVycztcbiAgICAgICAgcmV0dXJuIChzYW1wbGVzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuKHByZWRpY3RMYXllcnMsIHNhbXBsZXMsIHByZWRpY3RQYXJhbWV0ZXJzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IEVuY29kZVJ1bm5lcigpe1xuICAgICAgICBsZXQgZW5jb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRW5jb2RlO1xuICAgICAgICBsZXQgZW5jb2RlUGFyYW1ldGVycyA9IHRoaXMuTmV0UGFyYW1ldGVycy5FbmNvZGVQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4oZW5jb2RlTGF5ZXJzLCBzYW1wbGVzLCBlbmNvZGVQYXJhbWV0ZXJzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IERlY29kZVJ1bm5lcigpe1xuICAgICAgICBsZXQgZGVjb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRGVjb2RlO1xuICAgICAgICBsZXQgZGVjb2RlUGFyYW1ldGVycyA9IHRoaXMuTmV0UGFyYW1ldGVycy5EZWNvZGVQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4oZGVjb2RlTGF5ZXJzLCBzYW1wbGVzLCBkZWNvZGVQYXJhbWV0ZXJzKTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSdW5uZXJNaXhpbnM7XG4iLCJleHBvcnQgeyBjYXVzYWxOZXRMYXllcnMsIExheWVyTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRMYXllcnMvaW5kZXgnO1xuZXhwb3J0IHsgY2F1c2FsTmV0UGFyYW1ldGVycywgUGFyYW1ldGVyTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4JztcbmV4cG9ydCB7IGNhdXNhbE5ldFJ1bm5lciwgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRSdW5uZXIvaW5kZXgnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOZXRNaXhpbnMgfSBmcm9tICcuL25ldC5taXhpbnMnO1xuIiwiLyoqXG4gKiBUaGlzIE5ldE1peGlucyBjbGFzcyBwcm92aWRlIG1peGluIGZvciBidWlsZGluZyBwaXBlbGluZVxuICogQGNsYXNzIE5ldE1peGluc1xuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9uZXQubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBOZXRNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXROZXRGcm9tQ29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgY29uc3QgeyBOZXQgfSA9IHBpcGVsaW5lQ29uZmlnO1xuICAgICAgICBjb25zdCB7IExheWVycywgUGFyYW1ldGVycyB9ID0gTmV0OyAgICAgICAgXG4gICAgICAgIHRoaXMuTmV0UGFyYW1ldGVycy5zZXRPckluaXRQYXJhbXMoTGF5ZXJzLCBQYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5OZXRSdW5uZXIuTmV0TGF5ZXJzID0gTGF5ZXJzO1xuICAgICAgICB0aGlzLk5ldFJ1bm5lci5OZXRQYXJhbWV0ZXJzID0gdGhpcy5OZXRQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBzZXQgTmV0UGFyYW1ldGVycyhwYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5uZXRQYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG4gICAgZ2V0IE5ldFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0UGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0UnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBzZXQgTmV0UnVubmVyKHJ1bm5lcil7XG4gICAgICAgIHRoaXMubmV0UnVubmVyID0gcnVubmVyO1xuICAgIH1cbiAgICBnZXQgTmV0UnVubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldFJ1bm5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0UnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRSdW5uZXI7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV0TWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9