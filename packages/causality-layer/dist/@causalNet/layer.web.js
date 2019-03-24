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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9kZW5zZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvbGF5ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9jYXVzYWxOZXRQYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFBhcmFtZXRlcnMvcGFyYW1ldGVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFBhcmFtZXRlcnMvcGFyYW1ldGVyRnVuY3Rvci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFBhcmFtZXRlcnMvcGFyYW1ldGVyRnVuY3Rvci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvY2F1c2FsTmV0UnVubmVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UnVubmVyL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UnVubmVyL3J1bm5lci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL25ldC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNhdXNhbE5ldExheWVycyIsInBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VUZW5zb3IiLCJMYXllck1peGlucyIsIkRlbnNlTWl4aW5zIiwiY29uc3RydWN0b3IiLCJsYXllck5hbWVzIiwibmFtZUdlbmVyYXRvciIsImxheWVyVHlwZSIsImxheWVySWR4IiwibGVuZ3RoIiwibmV3TmFtZSIsInB1c2giLCJEZW5zZUxheWVyTWl4aW5zIiwiUGlwZWxpbmVDbGFzcyIsImRlbnNlIiwiaW5wdXRTaXplIiwib3V0cHV0U2l6ZSIsIm5hbWUiLCJOYW1lIiwiVHlwZSIsIlBhcmFtZXRlcnMiLCJXZWlnaHQiLCJCaWFzIiwiTmV0IiwidmFsdWUiLCJwYXJhbXMiLCJ0cmFjZSIsInJlc3VsdCIsImRvdCIsImFkZCIsIkJhc2VQaXBlbGluZUNsYXNzIiwiRGVjb2RlTGF5ZXJzIiwiZGVjb2RlTGF5ZXJzIiwiRXJyb3IiLCJFbmNvZGVMYXllcnMiLCJlbmNvZGVMYXllcnMiLCJQcmVkaWN0TGF5ZXJzIiwicHJlZGljdExheWVycyIsIkNhdXNhbE5ldFBhcmFtZXRlcnMiLCJTdG9yYWdlTWl4aW5zIiwiUGFyYW1ldGVyTWl4aW5zIiwic3RvcmFnZSIsInBhcmFtZXRlcmZ1bmN0b3IiLCJwYXJhbWV0ZXJzIiwiU3RvcmFnZSIsIkYiLCJSIiwiQ29yZUZ1bmN0b3IiLCJpbmRleERCU3RvcmFnZSIsIkJhc2VQYXJhbWV0ZXJDbGFzcyIsIlByZWRpY3RQYXJhbWV0ZXJzIiwiUHJlZGljdCIsIkVuY29kZVBhcmFtZXRlcnMiLCJFbmNvZGUiLCJEZWNvZGVQYXJhbWV0ZXJzIiwiRGVjb2RlIiwicHJlZGljdFBhcmFtZXRlcnMiLCJlbmNvZGVQYXJhbWV0ZXJzIiwiZGVjb2RlUGFyYW1ldGVycyIsIlBhcmFtZXRlclNpemVzIiwicGFyYW1ldGVyU2l6ZXMiLCJTYXZlTW9kZWxEaXIiLCJleHBvcnRQYXJhbWV0ZXJzIiwiRm4iLCJwYXJhbSIsIkFycmF5IiwiZnJvbSIsImRhdGEiLCJleHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdCIsImZuIiwiVHJhdmVsbGVyIiwiaXNUZW5zb3IiLCJrVmFscyIsInRvUGFpcnMiLCJyZXMiLCJrIiwidmFsIiwicGFyYW1ldGVyc1N1bW1hcnkiLCJtZWFuIiwiaW5pdFBhcmFtU2l6ZXNCeUxheWVycyIsImxheWVycyIsIlQiLCJHZXRQYXJhbVNpemUiLCJjb21wb3NlIiwiZnJvbVBhaXJzIiwibWFwIiwicCIsIlByZWRpY3RTaXplIiwiZ2V0SW4iLCJFbmNvZGVTaXplIiwiRGVjb2RlU2l6ZSIsImltcG9ydFBhcmFtZXRlcnMiLCJwYXJhbU9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJwcmVkaWN0UGFyYW1PYmplY3QiLCJlbmNvZGVQYXJhbU9iamVjdCIsImRlY29kZVBhcmFtT2JqZWN0IiwiU2V0T3JJbml0IiwiaW5pdFByZWRpY3QiLCJwYXJhbWV0ZXJNYXBXaXRoS2V5Iiwia2V5cyIsInBhcmFtU2l6ZSIsInBhcmFtVmFsdWUiLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsImFzVHlwZSIsInRlbnNvciIsInNldE9ySW5pdFBhcmFtcyIsImdldFNhdmVkUGFyYW1MaXN0IiwiU2F2ZURpciIsImZpbGVMaXN0IiwiZ2V0RmlsZUxpc3QiLCJmaWxlTmFtZSIsInJlcGxhY2UiLCJzYXZlUGFyYW1zIiwid3JpdGVGaWxlIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWRQYXJhbXMiLCJzdHJQYXJhbXMiLCJyZWFkRmlsZSIsInBhcnNlIiwiUGFyYW1ldGVyRnVuY3RvciIsIkJhc2VGdW5jdG9yIiwiUGFyYW1ldGVyRnVuY3Rvck1peGlucyIsIkZ1bmN0b3JDbGFzcyIsImlzUGFyYW1ldGVyIiwiaWZFbHNlIiwiaXMiLCJhbGwiLCJOdW1iZXIiLCJhbHdheXMiLCJwYXJhbWV0ZXJPYmplY3QiLCJSZXMiLCJzdWJPYmplY3QiLCJrZXkiLCJPYmplY3QiLCJDYXVzYWxOZXRSdW5uZXIiLCJSdW5uZXJNaXhpbnMiLCJCYXNlUnVubmVyQ2xhc3MiLCJOZXRQYXJhbWV0ZXJzIiwibmV0UGFyYW1ldGVycyIsIk5ldExheWVycyIsIm5ldExheWVycyIsInJ1bk9wRmxvdyIsImZsb3ciLCJPcHNSdW5uZXIiLCJhZGRJbmRleCIsInJlZHVjZSIsIl9fIiwibm9kZSIsImlkeCIsIlBhcmFtZXRlciIsIk9wIiwiQXJncyIsInNoYXBlIiwicnVuT3BMYXllciIsIm5ldCIsInJ1bkxheWVyIiwibGF5ZXJDb25maWd1cmUiLCJsYXllclBhcmFtZXRlcnMiLCJGbG93IiwidHJhY2luZyIsInRyYWNlcyIsInJ1biIsInNhbXBsZXMiLCJwaXBlVmFsdWUiLCJQaXBlSW5wdXQiLCJsYXN0TGF5ZXIiLCJsYXllciIsImxheWVyT3V0cHV0IiwibG9nZ2VyIiwiZGVidWciLCJQcmVkaWN0UnVubmVyIiwiRW5jb2RlUnVubmVyIiwiRGVjb2RlUnVubmVyIiwiTmV0TWl4aW5zIiwiZ2V0TmV0RnJvbUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTGF5ZXJzIiwiTmV0UnVubmVyIiwicnVubmVyIiwibmV0UnVubmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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Q0EsU0FBS3NILGFBQUwsQ0FBbUJqQyxlQUFuQixDQUFtQ3dFLE1BQW5DLEVBQTJDaEssVUFBM0M7QUFDQSxTQUFLaUssU0FBTCxDQUFldEMsU0FBZixHQUEyQnFDLE1BQTNCO0FBQ0EsU0FBS0MsU0FBTCxDQUFleEMsYUFBZixHQUErQixLQUFLQSxhQUFwQztBQUNIOztBQUNELE1BQUlBLGFBQUosQ0FBa0JsRyxVQUFsQixFQUE2QjtBQUN6QixTQUFLbUcsYUFBTCxHQUFxQm5HLFVBQXJCO0FBQ0g7O0FBQ0QsTUFBSWtHLGFBQUosR0FBbUI7QUFDZixRQUFHLENBQUMsS0FBS0MsYUFBVCxFQUF1QjtBQUNuQixZQUFNN0csS0FBSyxDQUFDLHNCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUs2RyxhQUFaO0FBQ0g7O0FBQ0QsTUFBSXVDLFNBQUosQ0FBY0MsTUFBZCxFQUFxQjtBQUNqQixTQUFLQyxTQUFMLEdBQWlCRCxNQUFqQjtBQUNIOztBQUNELE1BQUlELFNBQUosR0FBZTtBQUNYLFFBQUcsQ0FBQyxLQUFLRSxTQUFULEVBQW1CO0FBQ2YsWUFBTXRKLEtBQUssQ0FBQyxzQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLc0osU0FBWjtBQUNIOztBQXpCa0UsQ0FBdkU7O0FBNEJlTix3RUFBZixFOzs7Ozs7Ozs7OztBQ25DQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2xheWVyLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2xheWVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sYXllclwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERlbnNlTWl4aW5zIH0gZnJvbSAnLi9kZW5zZS5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBMYXllck1peGlucyB9IGZyb20gJy4vbGF5ZXIubWl4aW5zJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRMYXllciBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2UgbGF5ZXJzXG4gKiB7IG1peFdpdGg6IFsgTGF5ZXJNaXhpbnMsIERlbnNlTWl4aW5zIF0gfVxuICogQGNsYXNzIENhdXNhbE5ldExheWVyXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKi9cbmNsYXNzIENhdXNhbE5ldExheWVycyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgWyBMYXllck1peGlucywgXG4gICAgICBEZW5zZU1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYXllck5hbWVzID0gW107XG4gICAgfVxuICAgIG5hbWVHZW5lcmF0b3IobGF5ZXJUeXBlKXtcbiAgICAgICAgY29uc3QgbGF5ZXJJZHggPSB0aGlzLmxheWVyTmFtZXMubGVuZ3RoOyBcbiAgICAgICAgbGV0IG5ld05hbWUgPSBsYXllclR5cGUgKyAnLycgKyBsYXllcklkeDtcbiAgICAgICAgdGhpcy5sYXllck5hbWVzLnB1c2gobmV3TmFtZSk7XG4gICAgICAgIHJldHVybiBuZXdOYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldExheWVycygpOyIsImNvbnN0IERlbnNlTGF5ZXJNaXhpbnMgPSAoUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIFBpcGVsaW5lQ2xhc3N7XG4gICAgLyoqXG4gICAgICogU2ltcGxlIGRlbnNlIGxheWVyXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gaW5wdXRTaXplIC0gc2l6ZSBvZiBuZXQgaW5wdXRcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBvdXRwdXRTaXplIC0gc2l6ZSBvZiBuZXQgb3V0cHV0XG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbmFtZSAtIGxheWVyIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGxheWVyXG4gICAgICovXG4gICAgZGVuc2UoaW5wdXRTaXplLCBvdXRwdXRTaXplLCBuYW1lKXtcbiAgICAgICAgaWYoIW5hbWUpe1xuICAgICAgICAgICAgbmFtZSA9IHRoaXMubmFtZUdlbmVyYXRvcignZGVuc2UnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIE5hbWU6IG5hbWUsIFR5cGU6ICdMYXllcicsXG4gICAgICAgICAgICBQYXJhbWV0ZXJzOiB7IFdlaWdodDogW2lucHV0U2l6ZSwgb3V0cHV0U2l6ZV0sIEJpYXM6IFtvdXRwdXRTaXplXSB9LFxuICAgICAgICAgICAgTmV0OiBmdW5jdGlvbih2YWx1ZSwgcGFyYW1zKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlID0ge307XG4gICAgICAgICAgICAgICAgICAgIGxldCB7V2VpZ2h0LCBCaWFzfSA9IHBhcmFtcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlLmRvdChXZWlnaHQpLmFkZChCaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0LCB0cmFjZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERlbnNlTGF5ZXJNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRMYXllcnMgfSBmcm9tICcuL2NhdXNhbE5ldExheWVycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExheWVyTWl4aW5zIH0gZnJvbSAnLi9sYXllci5taXhpbnMnOyIsIi8qKlxuICogVGhpcyBMYXllck1peGlucyBjbGFzcyBwcm92aWRlIG1peGluIGZvciBidWlsZGluZyBwaXBlbGluZVxuICogQGNsYXNzIENhdXNhbE5ldExheWVyXG4gKiBAZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2xheWVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY29uc3QgTGF5ZXJNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXQgRGVjb2RlTGF5ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLmRlY29kZUxheWVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZGVjb2RlTGF5ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlY29kZUxheWVycztcbiAgICB9XG5cbiAgICBnZXQgRW5jb2RlTGF5ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLmVuY29kZUxheWVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZW5jb2RlTGF5ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuY29kZUxheWVycztcbiAgICB9XG4gICAgXG4gICAgZ2V0IFByZWRpY3RMYXllcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucHJlZGljdExheWVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncHJlZGljdExheWVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVkaWN0TGF5ZXJzO1xuICAgIH1cblxuICAgIHNldCBEZWNvZGVMYXllcnMoZGVjb2RlTGF5ZXJzKXtcbiAgICAgICAgdGhpcy5kZWNvZGVMYXllcnMgPSBkZWNvZGVMYXllcnM7XG4gICAgfVxuICAgIFxuICAgIHNldCBFbmNvZGVMYXllcnMoZW5jb2RlTGF5ZXJzKXtcbiAgICAgICAgdGhpcy5lbmNvZGVMYXllcnMgPSBlbmNvZGVMYXllcnM7XG4gICAgfVxuICAgIHNldCBQcmVkaWN0TGF5ZXJzKHByZWRpY3RMYXllcnMpe1xuICAgICAgICB0aGlzLnByZWRpY3RMYXllcnMgPSBwcmVkaWN0TGF5ZXJzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyTWl4aW5zOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBTdG9yYWdlTWl4aW5zLCBpbmRleERCU3RvcmFnZSB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFBhcmFtZXRlck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHBhcmFtZXRlcmZ1bmN0b3IgfSBmcm9tICcuL3BhcmFtZXRlckZ1bmN0b3InO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldExheWVyIGNsYXNzIHByb3ZpZGUgY29tbW9uIHVzZSBsYXllcnNcbiAqIHsgbWl4V2l0aDogWyBEZW5zZU1peGlucyBdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRMYXllclxuICogQGV4dGVuZHMgQmFzZVRlbnNvclxuICovXG5jbGFzcyBDYXVzYWxOZXRQYXJhbWV0ZXJzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbU3RvcmFnZU1peGlucywgUGFyYW1ldGVyTWl4aW5zXSApe1xuICAgIGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHBhcmFtZXRlcmZ1bmN0b3Ipe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBzdG9yYWdlO1xuICAgICAgICB0aGlzLkYgPSBwYXJhbWV0ZXJmdW5jdG9yO1xuICAgICAgICB0aGlzLlIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgfVxufSAgIFxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0UGFyYW1ldGVycyhpbmRleERCU3RvcmFnZSwgcGFyYW1ldGVyZnVuY3Rvcik7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRQYXJhbWV0ZXJzIH0gZnJvbSAnLi9jYXVzYWxOZXRQYXJhbWV0ZXJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1ldGVyTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXIubWl4aW5zJzsiLCJjb25zdCBQYXJhbWV0ZXJNaXhpbnMgPSAoQmFzZVBhcmFtZXRlckNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBhcmFtZXRlckNsYXNzeyBcbiAgICBcbiAgICBnZXQgUHJlZGljdFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyB8fCAhdGhpcy5wYXJhbWV0ZXJzLlByZWRpY3Qpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuUHJlZGljdDtcbiAgICB9XG4gICAgXG4gICAgZ2V0IEVuY29kZVBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyB8fCAhdGhpcy5wYXJhbWV0ZXJzLkVuY29kZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5FbmNvZGU7XG4gICAgfVxuICAgIFxuICAgIGdldCBEZWNvZGVQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMgfHwgIXRoaXMucGFyYW1ldGVycy5EZWNvZGUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuRGVjb2RlO1xuICAgIH1cbiAgICBcbiAgICBzZXQgUHJlZGljdFBhcmFtZXRlcnMocHJlZGljdFBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSAodGhpcy5wYXJhbWV0ZXJzKT8gdGhpcy5wYXJhbWV0ZXJzOiB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLlByZWRpY3QgPSBwcmVkaWN0UGFyYW1ldGVycztcbiAgICB9XG4gICAgXG4gICAgc2V0IEVuY29kZVBhcmFtZXRlcnMoZW5jb2RlUGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9ICh0aGlzLnBhcmFtZXRlcnMpPyB0aGlzLnBhcmFtZXRlcnM6IHt9O1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuRW5jb2RlID0gZW5jb2RlUGFyYW1ldGVycztcbiAgICB9XG4gICAgXG4gICAgc2V0IERlY29kZVBhcmFtZXRlcnMoZGVjb2RlUGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9ICh0aGlzLnBhcmFtZXRlcnMpPyB0aGlzLnBhcmFtZXRlcnM6IHt9O1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuRGVjb2RlID0gZGVjb2RlUGFyYW1ldGVycztcbiAgICB9XG5cbiAgICBzZXQgUGFyYW1ldGVyU2l6ZXMocGFyYW1ldGVyU2l6ZXMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlclNpemVzID0gcGFyYW1ldGVyU2l6ZXM7XG4gICAgfVxuXG4gICAgZ2V0IFBhcmFtZXRlclNpemVzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlclNpemVzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJTaXplcyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVyU2l6ZXM7XG4gICAgfVxuICAgIFxuICAgIGdldCBTYXZlTW9kZWxEaXIoKXtcbiAgICAgICAgcmV0dXJuICdzYXZlTW9kZWwvJztcbiAgICB9XG4gICAgXG4gICAgZXhwb3J0UGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYXN5bmMgKCk9PntcbiAgICAgICAgICAgIGNvbnN0IEZuID0gYXN5bmMgKHBhcmFtKT0+KEFycmF5LmZyb20oYXdhaXQgcGFyYW0uZGF0YSgpKSk7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gYXdhaXQgdGhpcy5leHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdCh0aGlzLnBhcmFtZXRlcnMsIEZuKTtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG4gICAgXG4gICAgYXN5bmMgZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QocGFyYW1zLCBmbil7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFRyYXZlbGxlciA9IGFzeW5jIChwYXJhbXMsIGZuKT0+e1xuICAgICAgICAgICAgaWYodGhpcy5pc1RlbnNvcihwYXJhbXMpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZm4ocGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IGtWYWxzID0gUi50b1BhaXJzKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW2ssIHZhbF0gb2Yga1ZhbHMpe1xuICAgICAgICAgICAgICAgICAgICByZXNba10gPSBhd2FpdCBUcmF2ZWxsZXIodmFsLCBmbik7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYXdhaXQgVHJhdmVsbGVyKHBhcmFtcywgZm4pO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBwYXJhbWV0ZXJzU3VtbWFyeSgpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXIgbXVzdCBiZSBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBGbiA9IGFzeW5jIChwYXJhbSk9PkFycmF5LmZyb20oYXdhaXQgcGFyYW0ubWVhbigpLmRhdGEoKSk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHRoaXMucGFyYW1ldGVycywgRm4pO1xuICAgIH1cbiAgICBcbiAgICBpbml0UGFyYW1TaXplc0J5TGF5ZXJzKGxheWVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFQgPSB0aGlzLlQsIEYgPSB0aGlzLkY7XG4gICAgICAgIGNvbnN0IEdldFBhcmFtU2l6ZSA9IFIuY29tcG9zZShSLmZyb21QYWlycywgUi5tYXAocD0+W3AuTmFtZSwgcC5QYXJhbWV0ZXJzXSkpO1xuICAgICAgICBjb25zdCBQcmVkaWN0U2l6ZSA9IEdldFBhcmFtU2l6ZShGLmdldEluKFsnUHJlZGljdCddLCBsYXllcnMsIFtdKSk7XG4gICAgICAgIGNvbnN0IEVuY29kZVNpemUgID0gR2V0UGFyYW1TaXplKEYuZ2V0SW4oWydFbmNvZGUnXSwgbGF5ZXJzLCBbXSkpO1xuICAgICAgICBjb25zdCBEZWNvZGVTaXplICA9IEdldFBhcmFtU2l6ZShGLmdldEluKFsnRGVjb2RlJ10sIGxheWVycywgW10pKTsgXG4gICAgICAgIHRoaXMuUGFyYW1ldGVyU2l6ZXMgPSB7UHJlZGljdFNpemUsIEVuY29kZVNpemUsIERlY29kZVNpemV9O1xuICAgIH1cblxuICAgIGltcG9ydFBhcmFtZXRlcnMocGFyYW1PYmplY3Qpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBSID0gdGhpcy5SLCBGID0gdGhpcy5GO1xuICAgICAgICBjb25zb2xlLmxvZyh7cGFyYW1PYmplY3R9KTtcbiAgICAgICAgbGV0IHByZWRpY3RQYXJhbU9iamVjdCA9IEYuZ2V0SW4oWydQcmVkaWN0J10sIHBhcmFtT2JqZWN0LCB7fSk7XG4gICAgICAgIGxldCBlbmNvZGVQYXJhbU9iamVjdCAgPSBGLmdldEluKFsnRW5jb2RlJ10sIHBhcmFtT2JqZWN0LCB7fSk7XG4gICAgICAgIGxldCBkZWNvZGVQYXJhbU9iamVjdCAgPSBGLmdldEluKFsnRGVjb2RlJ10sIHBhcmFtT2JqZWN0LCB7fSk7XG4gICAgICAgIGNvbnN0IHsgUHJlZGljdFNpemUsIEVuY29kZVNpemUsIERlY29kZVNpemUgfSA9IHRoaXMuUGFyYW1ldGVyU2l6ZXM7XG4gICAgICAgIGNvbnN0IFNldE9ySW5pdCA9ICggaW5pdFByZWRpY3QsIHBhcmFtT2JqZWN0ICk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEYucGFyYW1ldGVyTWFwV2l0aEtleSgoa2V5cywgcGFyYW1TaXplKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtVmFsdWUgPSB0aGlzLkYuZ2V0SW4oa2V5cywgcGFyYW1PYmplY3QsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyYW1WYWx1ZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFQudmFyaWFibGUoVC5yYW5kb21Ob3JtYWwocGFyYW1TaXplKS5hc1R5cGUoJ2Zsb2F0MzInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBULnZhcmlhYmxlKFQudGVuc29yKHBhcmFtVmFsdWUsIHBhcmFtU2l6ZSwgJ2Zsb2F0MzInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sIGluaXRQcmVkaWN0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB0aGlzLlByZWRpY3RQYXJhbWV0ZXJzID0gU2V0T3JJbml0KCBQcmVkaWN0U2l6ZSwgcHJlZGljdFBhcmFtT2JqZWN0ICk7XG4gICAgICAgIHRoaXMuRW5jb2RlUGFyYW1ldGVycyAgPSBTZXRPckluaXQoIEVuY29kZVNpemUsIGVuY29kZVBhcmFtT2JqZWN0ICk7XG4gICAgICAgIHRoaXMuRGVjb2RlUGFyYW1ldGVycyAgPSBTZXRPckluaXQoIERlY29kZVNpemUsIGRlY29kZVBhcmFtT2JqZWN0ICk7IFxuICAgIH1cblxuICAgIHNldE9ySW5pdFBhcmFtcyhsYXllcnMsIHBhcmFtT2JqZWN0KXtcbiAgICAgICAgdGhpcy5pbml0UGFyYW1TaXplc0J5TGF5ZXJzKGxheWVycyk7XG4gICAgICAgIHRoaXMuaW1wb3J0UGFyYW1ldGVycyhwYXJhbU9iamVjdCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2F2ZWRQYXJhbUxpc3QoKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZSwgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBsZXQgZmlsZUxpc3QgPSBhd2FpdCBTdG9yYWdlLmdldEZpbGVMaXN0KFNhdmVEaXIpO1xuICAgICAgICByZXR1cm4gZmlsZUxpc3QubWFwKGZpbGVOYW1lPT5maWxlTmFtZS5yZXBsYWNlKFNhdmVEaXIsJycpKTtcbiAgICB9XG5cbiAgICBhc3luYyBzYXZlUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgY29uc3QgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICBsZXQgcGFyYW1zID0gYXdhaXQgdGhpcy5leHBvcnRQYXJhbWV0ZXJzKCk7XG4gICAgICAgIGF3YWl0IFN0b3JhZ2Uud3JpdGVGaWxlKFNhdmVEaXIgKyBmaWxlTmFtZSwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlLCBTYXZlRGlyID0gdGhpcy5TYXZlTW9kZWxEaXI7XG4gICAgICAgIGxldCBzdHJQYXJhbXMgPSBhd2FpdCBTdG9yYWdlLnJlYWRGaWxlKFNhdmVEaXIrZmlsZU5hbWUpO1xuICAgICAgICBsZXQgcGFyYW1zID0gSlNPTi5wYXJzZShzdHJQYXJhbXMpO1xuICAgICAgICB0aGlzLmltcG9ydFBhcmFtZXRlcnMocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuUGFyYW1ldGVycztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhbWV0ZXJNaXhpbnM7IiwiaW1wb3J0IHtGdW5jdG9yIGFzIEJhc2VGdW5jdG9yfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHtwbGF0Zm9ybX0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgUGFyYW1ldGVyRnVuY3Rvck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyRnVuY3Rvci5taXhpbnMnO1xuXG5jbGFzcyBQYXJhbWV0ZXJGdW5jdG9yIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgWyBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIF0gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBhcmFtZXRlckZ1bmN0b3IoKTsiLCJjb25zdCBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zID0gKEZ1bmN0b3JDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEZ1bmN0b3JDbGFzc3sgXG4gICAgaXNQYXJhbWV0ZXIodmFsKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuaWZFbHNlKFIuaXMoQXJyYXkpLCBSLmFsbChSLmlzKE51bWJlcikpLCBSLmFsd2F5cyhmYWxzZSkpKHZhbCk7XG4gICAgfVxuICAgIHBhcmFtZXRlck1hcFdpdGhLZXkoZm4sIHBhcmFtZXRlck9iamVjdCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBSZXMgPSAoa2V5cywgc3ViT2JqZWN0KSA9PiBSLmNvbXBvc2UoUi5mcm9tUGFpcnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgUi5tYXAoKFtrZXksIHN1Yk9iamVjdF0pPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pc1BhcmFtZXRlcihzdWJPYmplY3QpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIGZuKFsuLi5rZXlzLCBrZXldLCBzdWJPYmplY3QpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoUi5pcyhPYmplY3QsIHN1Yk9iamVjdCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFJlcyhbLi4ua2V5cywga2V5XSwgc3ViT2JqZWN0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBzdWJPYmplY3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIFIudG9QYWlycykoc3ViT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIFJlcyhbXSwgcGFyYW1ldGVyT2JqZWN0KTtcbiAgICB9ICAgICAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFtZXRlckZ1bmN0b3JNaXhpbnM7IiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRMYXllciBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2UgbGF5ZXJzXG4gKiB7IG1peFdpdGg6IFsgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9ydW5uZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRSdW5uZXIgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFsgUnVubmVyTWl4aW5zIF0gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFJ1bm5lcigpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0UnVubmVyIH0gZnJvbSAnLi9jYXVzYWxOZXRSdW5uZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSdW5uZXJNaXhpbnMgfSBmcm9tICcuL3J1bm5lci5taXhpbnMnOyIsIi8qKlxuICogVGhpcyBSdW5uZXJNaXhpbnMgY2xhc3MgcHJvdmlkZSBtZXRob2RzIGZvciBydW5uZXIgY2xhc3MuXG4gKiBAY2xhc3MgUnVubmVyTWl4aW5zXG4gKiBAZXh0ZW5kcyBCYXNlUnVubmVyQ2xhc3NcbiAqL1xuY29uc3QgUnVubmVyTWl4aW5zID0gKCBCYXNlUnVubmVyQ2xhc3MgKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVJ1bm5lckNsYXNze1xuICAgIHNldCBOZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLm5ldFBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBzZXQgTmV0TGF5ZXJzKG5ldExheWVycyl7XG4gICAgICAgIHRoaXMubmV0TGF5ZXJzID0gbmV0TGF5ZXJzO1xuICAgIH1cbiAgICBnZXQgTmV0UGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5uZXRQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRQYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBnZXQgTmV0TGF5ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldExheWVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TGF5ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRMYXllcnM7XG4gICAgfVxuICAgIHJ1bk9wRmxvdyh2YWx1ZSwgZmxvdywgcGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IE9wc1J1bm5lciA9IFIuYWRkSW5kZXgoUi5yZWR1Y2UpKFIuX18se3Jlc3VsdDogdmFsdWUsIHRyYWNlOiB7fX0sIGZsb3cpO1xuICAgICAgICB2YXIge3Jlc3VsdCwgdHJhY2V9ID0gT3BzUnVubmVyKCh7cmVzdWx0LCB0cmFjZX0sIG5vZGUsIGlkeCk9PntcbiAgICAgICAgICAgIGlmKG5vZGUuUGFyYW1ldGVyKXtcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gcGFyYW1ldGVyc1tub2RlLlBhcmFtZXRlcl07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W25vZGUuT3BdKHBhcmFtcywgLi4ubm9kZS5BcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W25vZGUuT3BdKC4uLm5vZGUuQXJncyk7ICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyYWNlW2lkeF0gPSByZXN1bHQuc2hhcGU7XG4gICAgICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICB9XG5cbiAgICBydW5PcExheWVyKHZhbHVlLCBuZXQsIHBhcmFtZXRlcnMpe1xuICAgICAgICBsZXQgeyByZXN1bHQsIHRyYWNlIH0gPSBuZXQodmFsdWUsIHBhcmFtZXRlcnMpO1xuICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgIH1cbiAgICBydW5MYXllcih2YWx1ZSwgbGF5ZXJDb25maWd1cmUsIGxheWVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IHtOYW1lLCBUeXBlLCBGbG93LCBOZXR9ID0gbGF5ZXJDb25maWd1cmU7XG4gICAgICAgIGlmKFR5cGUgPT09ICdUZW5zb3InKXtcbiAgICAgICAgICAgIGxldCB7cmVzdWx0LCB0cmFjZX0gPSB0aGlzLnJ1bk9wRmxvdyh2YWx1ZSwgRmxvdywgbGF5ZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB7W05hbWVdOiByZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSAgIFxuICAgICAgICBlbHNlIGlmKFR5cGUgPT09ICdMYXllcicpe1xuICAgICAgICAgICAgbGV0IHtyZXN1bHQsIHRyYWNlfSA9IHRoaXMucnVuT3BMYXllcih2YWx1ZSwgTmV0LCBsYXllclBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHtbTmFtZV06IHJlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9ICAgXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndHlwZSBtdXN0IGJlIGVpdGhlciBMYXllciBvciBUZW5zb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYWNpbmcodHJhY2VzLCBuYW1lLCB0cmFjZSl7XG4gICAgICAgIGlmKHRyYWNlcyl7XG4gICAgICAgICAgICB0cmFjZXMucHVzaCh7W25hbWVdOiB0cmFjZX0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJ1bihsYXllcnMsIHNhbXBsZXMsIHBhcmFtZXRlcnMsIHRyYWNlcz1udWxsKXtcbiAgICAgICAgbGV0IHBpcGVWYWx1ZSA9IHtQaXBlSW5wdXQ6IHNhbXBsZXN9LCBsYXN0TGF5ZXIgPSAnUGlwZUlucHV0JztcbiAgICAgICAgZm9yKGxldCBsYXllciBvZiBsYXllcnMpe1xuICAgICAgICAgICAgbGV0IGxheWVyT3V0cHV0ID0gdGhpcy5ydW5MYXllcihwaXBlVmFsdWVbbGFzdExheWVyXSwgbGF5ZXIsIHBhcmFtZXRlcnNbbGF5ZXIuTmFtZV0pO1xuICAgICAgICAgICAgcGlwZVZhbHVlW2xheWVyLk5hbWVdID0gbGF5ZXJPdXRwdXRbbGF5ZXIuTmFtZV07XG4gICAgICAgICAgICBsYXN0TGF5ZXIgPSBsYXllci5OYW1lO1xuICAgICAgICAgICAgdGhpcy50cmFjaW5nKHRyYWNlcywgbGF5ZXIuTmFtZSwgbGF5ZXJPdXRwdXQudHJhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRyYWNlcyl7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7dHJhY2VzfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpcGVWYWx1ZVtsYXN0TGF5ZXJdO1xuICAgIH1cblxuICAgIGdldCBQcmVkaWN0UnVubmVyKCl7XG4gICAgICAgIGxldCBwcmVkaWN0TGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuUHJlZGljdDtcbiAgICAgICAgbGV0IHByZWRpY3RQYXJhbWV0ZXJzID0gdGhpcy5OZXRQYXJhbWV0ZXJzLlByZWRpY3RQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4ocHJlZGljdExheWVycywgc2FtcGxlcywgcHJlZGljdFBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgRW5jb2RlUnVubmVyKCl7XG4gICAgICAgIGxldCBlbmNvZGVMYXllcnMgPSB0aGlzLk5ldExheWVycy5FbmNvZGU7XG4gICAgICAgIGxldCBlbmNvZGVQYXJhbWV0ZXJzID0gdGhpcy5OZXRQYXJhbWV0ZXJzLkVuY29kZVBhcmFtZXRlcnM7XG4gICAgICAgIHJldHVybiAoc2FtcGxlcyk9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bihlbmNvZGVMYXllcnMsIHNhbXBsZXMsIGVuY29kZVBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgRGVjb2RlUnVubmVyKCl7XG4gICAgICAgIGxldCBkZWNvZGVMYXllcnMgPSB0aGlzLk5ldExheWVycy5EZWNvZGU7XG4gICAgICAgIGxldCBkZWNvZGVQYXJhbWV0ZXJzID0gdGhpcy5OZXRQYXJhbWV0ZXJzLkRlY29kZVBhcmFtZXRlcnM7XG4gICAgICAgIHJldHVybiAoc2FtcGxlcyk9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bihkZWNvZGVMYXllcnMsIHNhbXBsZXMsIGRlY29kZVBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bm5lck1peGlucztcbiIsImV4cG9ydCB7IGNhdXNhbE5ldExheWVycywgTGF5ZXJNaXhpbnMgfSBmcm9tICcuL0NhdXNhbE5ldExheWVycy9pbmRleCc7XG5leHBvcnQgeyBjYXVzYWxOZXRQYXJhbWV0ZXJzLCBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL0NhdXNhbE5ldFBhcmFtZXRlcnMvaW5kZXgnO1xuZXhwb3J0IHsgY2F1c2FsTmV0UnVubmVyLCBSdW5uZXJNaXhpbnMgfSBmcm9tICcuL0NhdXNhbE5ldFJ1bm5lci9pbmRleCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5ldE1peGlucyB9IGZyb20gJy4vbmV0Lm1peGlucyc7XG4iLCIvKipcbiAqIFRoaXMgTmV0TWl4aW5zIGNsYXNzIHByb3ZpZGUgbWl4aW4gZm9yIGJ1aWxkaW5nIHBpcGVsaW5lXG4gKiBAY2xhc3MgTmV0TWl4aW5zXG4gKiBAZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL25ldC5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IE5ldE1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIGdldE5ldEZyb21Db25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBjb25zdCB7IE5ldCB9ID0gcGlwZWxpbmVDb25maWc7XG4gICAgICAgIGNvbnN0IHsgTGF5ZXJzLCBQYXJhbWV0ZXJzIH0gPSBOZXQ7ICAgICAgICBcbiAgICAgICAgdGhpcy5OZXRQYXJhbWV0ZXJzLnNldE9ySW5pdFBhcmFtcyhMYXllcnMsIFBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLk5ldFJ1bm5lci5OZXRMYXllcnMgPSBMYXllcnM7XG4gICAgICAgIHRoaXMuTmV0UnVubmVyLk5ldFBhcmFtZXRlcnMgPSB0aGlzLk5ldFBhcmFtZXRlcnM7XG4gICAgfVxuICAgIHNldCBOZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLm5ldFBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBnZXQgTmV0UGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5uZXRQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRSdW5uZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldFBhcmFtZXRlcnM7XG4gICAgfVxuICAgIHNldCBOZXRSdW5uZXIocnVubmVyKXtcbiAgICAgICAgdGhpcy5uZXRSdW5uZXIgPSBydW5uZXI7XG4gICAgfVxuICAgIGdldCBOZXRSdW5uZXIoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0UnVubmVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRSdW5uZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldFJ1bm5lcjtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXRNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=