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
      throw Error('predictLayers1 is not set');
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
    this.NetLayers = Layers;
    this.NetParameters.setOrInitParams(Layers, Parameters);
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

  set NetLayers(layers) {
    console.log({
      layers
    });
    this.netLayers = layers;
  }

  get NetLayers() {
    if (!this.netLayers) {
      throw Error('netLayers is not set');
    }

    return this.netLayers;
  }

  netPredict(samples, traces = null) {
    const NetRunner = this.NetRunner,
          NetParameters = this.NetParameters;
    let predictLayers = this.NetLayers.Predict;
    let predictParameters = NetParameters.PredictParameters;
    return NetRunner.run(predictLayers, samples, predictParameters, traces);
  }

  netEncode(samples, traces = null) {
    const NetRunner = this.NetRunner,
          NetParameters = this.NetParameters;
    let encodeLayers = this.NetLayers.Encode;
    let encodeParameters = NetParameters.EncodeParameters;
    return NetRunner.run(encodeLayers, samples, encodeParameters, traces);
  }

  netDecode(samples, traces = null) {
    const NetRunner = this.NetRunner,
          NetParameters = this.NetParameters;
    let decodeLayers = this.NetLayers.Decode;
    let decodeParameters = NetParameters.DecodeParameters;
    return NetRunner.run(decodeLayers, samples, decodeParameters, traces);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9kZW5zZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvbGF5ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9jYXVzYWxOZXRQYXJhbWV0ZXJzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFBhcmFtZXRlcnMvcGFyYW1ldGVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFBhcmFtZXRlcnMvcGFyYW1ldGVyRnVuY3Rvci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFBhcmFtZXRlcnMvcGFyYW1ldGVyRnVuY3Rvci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvY2F1c2FsTmV0UnVubmVyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UnVubmVyL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UnVubmVyL3J1bm5lci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL25ldC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNhdXNhbE5ldExheWVycyIsInBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VUZW5zb3IiLCJMYXllck1peGlucyIsIkRlbnNlTWl4aW5zIiwiY29uc3RydWN0b3IiLCJsYXllck5hbWVzIiwibmFtZUdlbmVyYXRvciIsImxheWVyVHlwZSIsImxheWVySWR4IiwibGVuZ3RoIiwibmV3TmFtZSIsInB1c2giLCJEZW5zZUxheWVyTWl4aW5zIiwiUGlwZWxpbmVDbGFzcyIsImRlbnNlIiwiaW5wdXRTaXplIiwib3V0cHV0U2l6ZSIsIm5hbWUiLCJOYW1lIiwiVHlwZSIsIlBhcmFtZXRlcnMiLCJXZWlnaHQiLCJCaWFzIiwiTmV0IiwidmFsdWUiLCJwYXJhbXMiLCJ0cmFjZSIsInJlc3VsdCIsImRvdCIsImFkZCIsIkJhc2VQaXBlbGluZUNsYXNzIiwiRGVjb2RlTGF5ZXJzIiwiZGVjb2RlTGF5ZXJzIiwiRXJyb3IiLCJFbmNvZGVMYXllcnMiLCJlbmNvZGVMYXllcnMiLCJQcmVkaWN0TGF5ZXJzIiwicHJlZGljdExheWVycyIsIkNhdXNhbE5ldFBhcmFtZXRlcnMiLCJTdG9yYWdlTWl4aW5zIiwiUGFyYW1ldGVyTWl4aW5zIiwic3RvcmFnZSIsInBhcmFtZXRlcmZ1bmN0b3IiLCJwYXJhbWV0ZXJzIiwiU3RvcmFnZSIsIkYiLCJSIiwiQ29yZUZ1bmN0b3IiLCJpbmRleERCU3RvcmFnZSIsIkJhc2VQYXJhbWV0ZXJDbGFzcyIsIlByZWRpY3RQYXJhbWV0ZXJzIiwiUHJlZGljdCIsIkVuY29kZVBhcmFtZXRlcnMiLCJFbmNvZGUiLCJEZWNvZGVQYXJhbWV0ZXJzIiwiRGVjb2RlIiwicHJlZGljdFBhcmFtZXRlcnMiLCJlbmNvZGVQYXJhbWV0ZXJzIiwiZGVjb2RlUGFyYW1ldGVycyIsIlBhcmFtZXRlclNpemVzIiwicGFyYW1ldGVyU2l6ZXMiLCJTYXZlTW9kZWxEaXIiLCJleHBvcnRQYXJhbWV0ZXJzIiwiRm4iLCJwYXJhbSIsIkFycmF5IiwiZnJvbSIsImRhdGEiLCJleHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdCIsImZuIiwiVHJhdmVsbGVyIiwiaXNUZW5zb3IiLCJrVmFscyIsInRvUGFpcnMiLCJyZXMiLCJrIiwidmFsIiwicGFyYW1ldGVyc1N1bW1hcnkiLCJtZWFuIiwiaW5pdFBhcmFtU2l6ZXNCeUxheWVycyIsImxheWVycyIsIlQiLCJHZXRQYXJhbVNpemUiLCJjb21wb3NlIiwiZnJvbVBhaXJzIiwibWFwIiwicCIsIlByZWRpY3RTaXplIiwiZ2V0SW4iLCJFbmNvZGVTaXplIiwiRGVjb2RlU2l6ZSIsImltcG9ydFBhcmFtZXRlcnMiLCJwYXJhbU9iamVjdCIsImNvbnNvbGUiLCJsb2ciLCJwcmVkaWN0UGFyYW1PYmplY3QiLCJlbmNvZGVQYXJhbU9iamVjdCIsImRlY29kZVBhcmFtT2JqZWN0IiwiU2V0T3JJbml0IiwiaW5pdFByZWRpY3QiLCJwYXJhbWV0ZXJNYXBXaXRoS2V5Iiwia2V5cyIsInBhcmFtU2l6ZSIsInBhcmFtVmFsdWUiLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsImFzVHlwZSIsInRlbnNvciIsInNldE9ySW5pdFBhcmFtcyIsImdldFNhdmVkUGFyYW1MaXN0IiwiU2F2ZURpciIsImZpbGVMaXN0IiwiZ2V0RmlsZUxpc3QiLCJmaWxlTmFtZSIsInJlcGxhY2UiLCJzYXZlUGFyYW1zIiwid3JpdGVGaWxlIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWRQYXJhbXMiLCJzdHJQYXJhbXMiLCJyZWFkRmlsZSIsInBhcnNlIiwiUGFyYW1ldGVyRnVuY3RvciIsIkJhc2VGdW5jdG9yIiwiUGFyYW1ldGVyRnVuY3Rvck1peGlucyIsIkZ1bmN0b3JDbGFzcyIsImlzUGFyYW1ldGVyIiwiaWZFbHNlIiwiaXMiLCJhbGwiLCJOdW1iZXIiLCJhbHdheXMiLCJwYXJhbWV0ZXJPYmplY3QiLCJSZXMiLCJzdWJPYmplY3QiLCJrZXkiLCJPYmplY3QiLCJDYXVzYWxOZXRSdW5uZXIiLCJSdW5uZXJNaXhpbnMiLCJCYXNlUnVubmVyQ2xhc3MiLCJydW5PcEZsb3ciLCJmbG93IiwiT3BzUnVubmVyIiwiYWRkSW5kZXgiLCJyZWR1Y2UiLCJfXyIsIm5vZGUiLCJpZHgiLCJQYXJhbWV0ZXIiLCJPcCIsIkFyZ3MiLCJzaGFwZSIsInJ1bk9wTGF5ZXIiLCJuZXQiLCJydW5MYXllciIsImxheWVyQ29uZmlndXJlIiwibGF5ZXJQYXJhbWV0ZXJzIiwiRmxvdyIsInRyYWNpbmciLCJ0cmFjZXMiLCJydW4iLCJzYW1wbGVzIiwicGlwZVZhbHVlIiwiUGlwZUlucHV0IiwibGFzdExheWVyIiwibGF5ZXIiLCJsYXllck91dHB1dCIsImxvZ2dlciIsImRlYnVnIiwiTmV0TWl4aW5zIiwiZ2V0TmV0RnJvbUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTGF5ZXJzIiwiTmV0TGF5ZXJzIiwiTmV0UGFyYW1ldGVycyIsIm5ldFBhcmFtZXRlcnMiLCJOZXRSdW5uZXIiLCJydW5uZXIiLCJuZXRSdW5uZXIiLCJuZXRMYXllcnMiLCJuZXRQcmVkaWN0IiwibmV0RW5jb2RlIiwibmV0RGVjb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFNQSxNQUFNQSxlQUFOLFNBQThCQyx5REFBUSxDQUFDQyxPQUFULENBQWlCQyxzREFBakIsRUFDMUIsQ0FBRUMscURBQUYsRUFBZUMscURBQWYsQ0FEMEIsQ0FBOUIsQ0FDa0M7QUFDOUJDLGFBQVcsR0FBRTtBQUNUO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNIOztBQUNEQyxlQUFhLENBQUNDLFNBQUQsRUFBVztBQUNwQixVQUFNQyxRQUFRLEdBQUcsS0FBS0gsVUFBTCxDQUFnQkksTUFBakM7QUFDQSxRQUFJQyxPQUFPLEdBQUdILFNBQVMsR0FBRyxHQUFaLEdBQWtCQyxRQUFoQztBQUNBLFNBQUtILFVBQUwsQ0FBZ0JNLElBQWhCLENBQXFCRCxPQUFyQjtBQUNBLFdBQU9BLE9BQVA7QUFDSDs7QUFWNkI7O0FBYW5CLG1FQUFJWixlQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUEsTUFBTWMsZ0JBQWdCLEdBQUlDLGFBQUQsSUFBa0IsY0FBY0EsYUFBZCxDQUEyQjtBQUNsRTs7Ozs7OztBQU9BQyxPQUFLLENBQUNDLFNBQUQsRUFBWUMsVUFBWixFQUF3QkMsSUFBeEIsRUFBNkI7QUFDOUIsUUFBRyxDQUFDQSxJQUFKLEVBQVM7QUFDTEEsVUFBSSxHQUFHLEtBQUtYLGFBQUwsQ0FBbUIsT0FBbkIsQ0FBUDtBQUNIOztBQUNELFdBQU87QUFDSFksVUFBSSxFQUFFRCxJQURIO0FBQ1NFLFVBQUksRUFBRSxPQURmO0FBRUhDLGdCQUFVLEVBQUU7QUFBRUMsY0FBTSxFQUFFLENBQUNOLFNBQUQsRUFBWUMsVUFBWixDQUFWO0FBQW1DTSxZQUFJLEVBQUUsQ0FBQ04sVUFBRDtBQUF6QyxPQUZUO0FBR0hPLFNBQUcsRUFBRSxVQUFTQyxLQUFULEVBQWdCQyxNQUFoQixFQUF1QjtBQUNwQixZQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLFlBQUk7QUFBQ0wsZ0JBQUQ7QUFBU0M7QUFBVCxZQUFpQkcsTUFBckI7QUFDQSxZQUFJRSxNQUFNLEdBQUdILEtBQUssQ0FBQ0ksR0FBTixDQUFVUCxNQUFWLEVBQWtCUSxHQUFsQixDQUFzQlAsSUFBdEIsQ0FBYjtBQUNBLGVBQU87QUFBRUssZ0JBQUY7QUFBVUQ7QUFBVixTQUFQO0FBQ0g7QUFSRixLQUFQO0FBVUg7O0FBdEJpRSxDQUF0RTs7QUF3QmVkLCtFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7OztBQU9BLE1BQU1WLFdBQVcsR0FBSTRCLGlCQUFELElBQXNCLGNBQWNBLGlCQUFkLENBQStCO0FBQ3JFLE1BQUlDLFlBQUosR0FBa0I7QUFDZCxRQUFHLENBQUMsS0FBS0MsWUFBVCxFQUFzQjtBQUNsQixZQUFNQyxLQUFLLENBQUMseUJBQUQsQ0FBWDtBQUNIOztBQUNELFNBQUtELFlBQUw7QUFDSDs7QUFFRCxNQUFJRSxZQUFKLEdBQWtCO0FBQ2QsUUFBRyxDQUFDLEtBQUtDLFlBQVQsRUFBc0I7QUFDbEIsWUFBTUYsS0FBSyxDQUFDLHlCQUFELENBQVg7QUFDSDs7QUFDRCxTQUFLRSxZQUFMO0FBQ0g7O0FBRUQsTUFBSUMsYUFBSixHQUFtQjtBQUNmLFFBQUcsQ0FBQyxLQUFLQyxhQUFULEVBQXVCO0FBQ25CLFlBQU1KLEtBQUssQ0FBQywyQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsU0FBS0ksYUFBTDtBQUNIOztBQUVELE1BQUlOLFlBQUosQ0FBaUJDLFlBQWpCLEVBQThCO0FBQzFCLFNBQUtBLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0g7O0FBRUQsTUFBSUUsWUFBSixDQUFpQkMsWUFBakIsRUFBOEI7QUFDMUIsU0FBS0EsWUFBTCxHQUFvQkEsWUFBcEI7QUFDSDs7QUFDRCxNQUFJQyxhQUFKLENBQWtCQyxhQUFsQixFQUFnQztBQUM1QixTQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNIOztBQS9Cb0UsQ0FBekU7O0FBa0NlbkMsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU1BLE1BQU1vQyxtQkFBTixTQUFrQ3ZDLHlEQUFRLENBQUNDLE9BQVQsQ0FBaUJDLHNEQUFqQixFQUE2QixDQUFDc0MsZ0VBQUQsRUFBZ0JDLHlEQUFoQixDQUE3QixDQUFsQyxDQUFpRztBQUM3RnBDLGFBQVcsQ0FBQ3FDLE9BQUQsRUFBVUMsZ0JBQVYsRUFBMkI7QUFDbEM7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlSCxPQUFmO0FBQ0EsU0FBS0ksQ0FBTCxHQUFTSCxnQkFBVDtBQUNBLFNBQUtJLENBQUwsR0FBUyxLQUFLRCxDQUFMLENBQU9FLFdBQWhCO0FBQ0g7O0FBUDRGOztBQVVsRixtRUFBSVQsbUJBQUosQ0FBd0JVLGlFQUF4QixFQUF3Q04seURBQXhDLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBLE1BQU1GLGVBQWUsR0FBSVMsa0JBQUQsSUFBdUIsY0FBY0Esa0JBQWQsQ0FBZ0M7QUFFM0UsTUFBSUMsaUJBQUosR0FBdUI7QUFDbkIsUUFBRyxDQUFDLEtBQUtQLFVBQU4sSUFBb0IsQ0FBQyxLQUFLQSxVQUFMLENBQWdCUSxPQUF4QyxFQUFnRDtBQUM1QyxZQUFNbEIsS0FBSyxDQUFDLHVCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUtVLFVBQUwsQ0FBZ0JRLE9BQXZCO0FBQ0g7O0FBRUQsTUFBSUMsZ0JBQUosR0FBc0I7QUFDbEIsUUFBRyxDQUFDLEtBQUtULFVBQU4sSUFBb0IsQ0FBQyxLQUFLQSxVQUFMLENBQWdCVSxNQUF4QyxFQUErQztBQUMzQyxZQUFNcEIsS0FBSyxDQUFDLHVCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUtVLFVBQUwsQ0FBZ0JVLE1BQXZCO0FBQ0g7O0FBRUQsTUFBSUMsZ0JBQUosR0FBc0I7QUFDbEIsUUFBRyxDQUFDLEtBQUtYLFVBQU4sSUFBb0IsQ0FBQyxLQUFLQSxVQUFMLENBQWdCWSxNQUF4QyxFQUErQztBQUMzQyxZQUFNdEIsS0FBSyxDQUFDLHVCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUtVLFVBQUwsQ0FBZ0JZLE1BQXZCO0FBQ0g7O0FBRUQsTUFBSUwsaUJBQUosQ0FBc0JNLGlCQUF0QixFQUF3QztBQUNwQyxTQUFLYixVQUFMLEdBQW1CLEtBQUtBLFVBQU4sR0FBbUIsS0FBS0EsVUFBeEIsR0FBb0MsRUFBdEQ7QUFDQSxTQUFLQSxVQUFMLENBQWdCUSxPQUFoQixHQUEwQkssaUJBQTFCO0FBQ0g7O0FBRUQsTUFBSUosZ0JBQUosQ0FBcUJLLGdCQUFyQixFQUFzQztBQUNsQyxTQUFLZCxVQUFMLEdBQW1CLEtBQUtBLFVBQU4sR0FBbUIsS0FBS0EsVUFBeEIsR0FBb0MsRUFBdEQ7QUFDQSxTQUFLQSxVQUFMLENBQWdCVSxNQUFoQixHQUF5QkksZ0JBQXpCO0FBQ0g7O0FBRUQsTUFBSUgsZ0JBQUosQ0FBcUJJLGdCQUFyQixFQUFzQztBQUNsQyxTQUFLZixVQUFMLEdBQW1CLEtBQUtBLFVBQU4sR0FBbUIsS0FBS0EsVUFBeEIsR0FBb0MsRUFBdEQ7QUFDQSxTQUFLQSxVQUFMLENBQWdCWSxNQUFoQixHQUF5QkcsZ0JBQXpCO0FBQ0g7O0FBRUQsTUFBSUMsY0FBSixDQUFtQkMsY0FBbkIsRUFBa0M7QUFDOUIsU0FBS0EsY0FBTCxHQUFzQkEsY0FBdEI7QUFDSDs7QUFFRCxNQUFJRCxjQUFKLEdBQW9CO0FBQ2hCLFFBQUcsQ0FBQyxLQUFLQyxjQUFULEVBQXdCO0FBQ3BCLFlBQU0zQixLQUFLLENBQUMsMkJBQUQsQ0FBWDtBQUNIOztBQUNELFdBQU8sS0FBSzJCLGNBQVo7QUFDSDs7QUFFRCxNQUFJQyxZQUFKLEdBQWtCO0FBQ2QsV0FBTyxZQUFQO0FBQ0g7O0FBRURDLGtCQUFnQixHQUFFO0FBQ2QsUUFBRyxDQUFDLEtBQUtuQixVQUFULEVBQW9CO0FBQ2hCLFlBQU1WLEtBQUssQ0FBQyxzQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxDQUFDLFlBQVU7QUFDZCxZQUFNOEIsRUFBRSxHQUFHLE1BQU9DLEtBQVAsSUFBZ0JDLEtBQUssQ0FBQ0MsSUFBTixFQUFXLE1BQU1GLEtBQUssQ0FBQ0csSUFBTixFQUFqQixFQUEzQjs7QUFDQSxVQUFJMUMsTUFBTSxHQUFHLE1BQU0sS0FBSzJDLDBCQUFMLENBQWdDLEtBQUt6QixVQUFyQyxFQUFpRG9CLEVBQWpELENBQW5CO0FBQ0EsYUFBT3RDLE1BQVA7QUFDSCxLQUpNLEdBQVA7QUFLSDs7QUFHRCxRQUFNMkMsMEJBQU4sQ0FBaUMzQyxNQUFqQyxFQUF5QzRDLEVBQXpDLEVBQTRDO0FBQ3hDLFVBQU12QixDQUFDLEdBQUcsS0FBS0EsQ0FBZjs7QUFDQSxVQUFNd0IsU0FBUyxHQUFHLE9BQU83QyxNQUFQLEVBQWU0QyxFQUFmLEtBQW9CO0FBQ2xDLFVBQUcsS0FBS0UsUUFBTCxDQUFjOUMsTUFBZCxDQUFILEVBQXlCO0FBQ3JCLGVBQU8sTUFBTTRDLEVBQUUsQ0FBQzVDLE1BQUQsQ0FBZjtBQUNILE9BRkQsTUFHSTtBQUNBLFlBQUkrQyxLQUFLLEdBQUcxQixDQUFDLENBQUMyQixPQUFGLENBQVVoRCxNQUFWLENBQVo7QUFDQSxZQUFJaUQsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsYUFBSSxJQUFJLENBQUNDLENBQUQsRUFBSUMsR0FBSixDQUFSLElBQW9CSixLQUFwQixFQUEwQjtBQUN0QkUsYUFBRyxDQUFDQyxDQUFELENBQUgsR0FBUyxNQUFNTCxTQUFTLENBQUNNLEdBQUQsRUFBTVAsRUFBTixDQUF4QjtBQUNIOztBQUNELGVBQU9LLEdBQVA7QUFDSDtBQUNKLEtBWkQ7O0FBYUEsV0FBTyxNQUFNSixTQUFTLENBQUM3QyxNQUFELEVBQVM0QyxFQUFULENBQXRCO0FBQ0g7O0FBRUQsUUFBTVEsaUJBQU4sR0FBeUI7QUFDckIsUUFBRyxDQUFDLEtBQUtsQyxVQUFULEVBQW9CO0FBQ2hCLFlBQU1WLEtBQUssQ0FBQyx1QkFBRCxDQUFYO0FBQ0g7O0FBQ0QsVUFBTThCLEVBQUUsR0FBRyxNQUFPQyxLQUFQLElBQWVDLEtBQUssQ0FBQ0MsSUFBTixFQUFXLE1BQU1GLEtBQUssQ0FBQ2MsSUFBTixHQUFhWCxJQUFiLEVBQWpCLEVBQTFCOztBQUNBLFdBQU8sTUFBTSxLQUFLQywwQkFBTCxDQUFnQyxLQUFLekIsVUFBckMsRUFBaURvQixFQUFqRCxDQUFiO0FBQ0g7O0FBRURnQix3QkFBc0IsQ0FBQ0MsTUFBRCxFQUFRO0FBQzFCLFVBQU1sQyxDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFVBQWtCbUMsQ0FBQyxHQUFHLEtBQUtBLENBQTNCO0FBQUEsVUFBOEJwQyxDQUFDLEdBQUcsS0FBS0EsQ0FBdkM7QUFDQSxVQUFNcUMsWUFBWSxHQUFHcEMsQ0FBQyxDQUFDcUMsT0FBRixDQUFVckMsQ0FBQyxDQUFDc0MsU0FBWixFQUF1QnRDLENBQUMsQ0FBQ3VDLEdBQUYsQ0FBTUMsQ0FBQyxJQUFFLENBQUNBLENBQUMsQ0FBQ3BFLElBQUgsRUFBU29FLENBQUMsQ0FBQ2xFLFVBQVgsQ0FBVCxDQUF2QixDQUFyQjtBQUNBLFVBQU1tRSxXQUFXLEdBQUdMLFlBQVksQ0FBQ3JDLENBQUMsQ0FBQzJDLEtBQUYsQ0FBUSxDQUFDLFNBQUQsQ0FBUixFQUFxQlIsTUFBckIsRUFBNkIsRUFBN0IsQ0FBRCxDQUFoQztBQUNBLFVBQU1TLFVBQVUsR0FBSVAsWUFBWSxDQUFDckMsQ0FBQyxDQUFDMkMsS0FBRixDQUFRLENBQUMsUUFBRCxDQUFSLEVBQW9CUixNQUFwQixFQUE0QixFQUE1QixDQUFELENBQWhDO0FBQ0EsVUFBTVUsVUFBVSxHQUFJUixZQUFZLENBQUNyQyxDQUFDLENBQUMyQyxLQUFGLENBQVEsQ0FBQyxRQUFELENBQVIsRUFBb0JSLE1BQXBCLEVBQTRCLEVBQTVCLENBQUQsQ0FBaEM7QUFDQSxTQUFLckIsY0FBTCxHQUFzQjtBQUFDNEIsaUJBQUQ7QUFBY0UsZ0JBQWQ7QUFBMEJDO0FBQTFCLEtBQXRCO0FBQ0g7O0FBRURDLGtCQUFnQixDQUFDQyxXQUFELEVBQWE7QUFDekIsVUFBTVgsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxVQUFrQm5DLENBQUMsR0FBRyxLQUFLQSxDQUEzQjtBQUFBLFVBQThCRCxDQUFDLEdBQUcsS0FBS0EsQ0FBdkM7QUFDQWdELFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNGO0FBQUQsS0FBWjtBQUNBLFFBQUlHLGtCQUFrQixHQUFHbEQsQ0FBQyxDQUFDMkMsS0FBRixDQUFRLENBQUMsU0FBRCxDQUFSLEVBQXFCSSxXQUFyQixFQUFrQyxFQUFsQyxDQUF6QjtBQUNBLFFBQUlJLGlCQUFpQixHQUFJbkQsQ0FBQyxDQUFDMkMsS0FBRixDQUFRLENBQUMsUUFBRCxDQUFSLEVBQW9CSSxXQUFwQixFQUFpQyxFQUFqQyxDQUF6QjtBQUNBLFFBQUlLLGlCQUFpQixHQUFJcEQsQ0FBQyxDQUFDMkMsS0FBRixDQUFRLENBQUMsUUFBRCxDQUFSLEVBQW9CSSxXQUFwQixFQUFpQyxFQUFqQyxDQUF6QjtBQUNBLFVBQU07QUFBRUwsaUJBQUY7QUFBZUUsZ0JBQWY7QUFBMkJDO0FBQTNCLFFBQTBDLEtBQUsvQixjQUFyRDs7QUFDQSxVQUFNdUMsU0FBUyxHQUFHLENBQUVDLFdBQUYsRUFBZVAsV0FBZixLQUE4QjtBQUNwQyxhQUFPL0MsQ0FBQyxDQUFDdUQsbUJBQUYsQ0FBc0IsQ0FBQ0MsSUFBRCxFQUFPQyxTQUFQLEtBQW1CO0FBQzVDLFlBQUlDLFVBQVUsR0FBRyxLQUFLMUQsQ0FBTCxDQUFPMkMsS0FBUCxDQUFhYSxJQUFiLEVBQW1CVCxXQUFuQixFQUFnQyxJQUFoQyxDQUFqQjs7QUFDQSxZQUFHVyxVQUFVLEtBQUssSUFBbEIsRUFBdUI7QUFDbkIsaUJBQU90QixDQUFDLENBQUN1QixRQUFGLENBQVd2QixDQUFDLENBQUN3QixZQUFGLENBQWVILFNBQWYsRUFBMEJJLE1BQTFCLENBQWlDLFNBQWpDLENBQVgsQ0FBUDtBQUNILFNBRkQsTUFHSTtBQUNBLGlCQUFPekIsQ0FBQyxDQUFDdUIsUUFBRixDQUFXdkIsQ0FBQyxDQUFDMEIsTUFBRixDQUFTSixVQUFULEVBQXFCRCxTQUFyQixFQUFnQyxTQUFoQyxDQUFYLENBQVA7QUFDSDtBQUNKLE9BUk0sRUFRSkgsV0FSSSxDQUFQO0FBU0gsS0FWVDs7QUFXQSxTQUFLakQsaUJBQUwsR0FBeUJnRCxTQUFTLENBQUVYLFdBQUYsRUFBZVEsa0JBQWYsQ0FBbEM7QUFDQSxTQUFLM0MsZ0JBQUwsR0FBeUI4QyxTQUFTLENBQUVULFVBQUYsRUFBY08saUJBQWQsQ0FBbEM7QUFDQSxTQUFLMUMsZ0JBQUwsR0FBeUI0QyxTQUFTLENBQUVSLFVBQUYsRUFBY08saUJBQWQsQ0FBbEM7QUFDSDs7QUFFRFcsaUJBQWUsQ0FBQzVCLE1BQUQsRUFBU1ksV0FBVCxFQUFxQjtBQUNoQyxTQUFLYixzQkFBTCxDQUE0QkMsTUFBNUI7QUFDQSxTQUFLVyxnQkFBTCxDQUFzQkMsV0FBdEI7QUFDSDs7QUFFRCxRQUFNaUIsaUJBQU4sR0FBeUI7QUFDckIsVUFBTWpFLE9BQU8sR0FBRyxLQUFLQSxPQUFyQjtBQUFBLFVBQThCa0UsT0FBTyxHQUFHLEtBQUtqRCxZQUE3QztBQUNBLFFBQUlrRCxRQUFRLEdBQUcsTUFBTW5FLE9BQU8sQ0FBQ29FLFdBQVIsQ0FBb0JGLE9BQXBCLENBQXJCO0FBQ0EsV0FBT0MsUUFBUSxDQUFDMUIsR0FBVCxDQUFhNEIsUUFBUSxJQUFFQSxRQUFRLENBQUNDLE9BQVQsQ0FBaUJKLE9BQWpCLEVBQXlCLEVBQXpCLENBQXZCLENBQVA7QUFDSDs7QUFFRCxRQUFNSyxVQUFOLENBQWlCRixRQUFqQixFQUEwQjtBQUN0QixVQUFNSCxPQUFPLEdBQUcsS0FBS2pELFlBQXJCO0FBQ0EsVUFBTWpCLE9BQU8sR0FBRyxLQUFLQSxPQUFyQjtBQUNBLFFBQUluQixNQUFNLEdBQUcsTUFBTSxLQUFLcUMsZ0JBQUwsRUFBbkI7QUFDQSxVQUFNbEIsT0FBTyxDQUFDd0UsU0FBUixDQUFrQk4sT0FBTyxHQUFHRyxRQUE1QixFQUFzQ0ksSUFBSSxDQUFDQyxTQUFMLENBQWU3RixNQUFmLENBQXRDLENBQU47QUFDQSxXQUFPQSxNQUFQO0FBQ0g7O0FBQ0QsUUFBTThGLFVBQU4sQ0FBaUJOLFFBQWpCLEVBQTBCO0FBQ3RCLFVBQU1yRSxPQUFPLEdBQUcsS0FBS0EsT0FBckI7QUFBQSxVQUE4QmtFLE9BQU8sR0FBRyxLQUFLakQsWUFBN0M7QUFDQSxRQUFJMkQsU0FBUyxHQUFHLE1BQU01RSxPQUFPLENBQUM2RSxRQUFSLENBQWlCWCxPQUFPLEdBQUNHLFFBQXpCLENBQXRCO0FBQ0EsUUFBSXhGLE1BQU0sR0FBRzRGLElBQUksQ0FBQ0ssS0FBTCxDQUFXRixTQUFYLENBQWI7QUFDQSxTQUFLN0IsZ0JBQUwsQ0FBc0JsRSxNQUF0QjtBQUNBLFdBQU8sTUFBTSxLQUFLTCxVQUFsQjtBQUNIOztBQW5KMEUsQ0FBL0U7O0FBc0plb0IsOEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNbUYsZ0JBQU4sU0FBK0I1SCx5REFBUSxDQUFDQyxPQUFULENBQWlCNEgsdURBQWpCLEVBQThCLENBQUVDLGdFQUFGLENBQTlCLENBQS9CLENBQXlGO0FBQ3JGekgsYUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFIb0Y7O0FBTTFFLG1FQUFJdUgsZ0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBLE1BQU1FLHNCQUFzQixHQUFJQyxZQUFELElBQWlCLGNBQWNBLFlBQWQsQ0FBMEI7QUFDdEVDLGFBQVcsQ0FBQ25ELEdBQUQsRUFBSztBQUNaLFVBQU05QixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLFdBQU9BLENBQUMsQ0FBQ2tGLE1BQUYsQ0FBU2xGLENBQUMsQ0FBQ21GLEVBQUYsQ0FBS2hFLEtBQUwsQ0FBVCxFQUFzQm5CLENBQUMsQ0FBQ29GLEdBQUYsQ0FBTXBGLENBQUMsQ0FBQ21GLEVBQUYsQ0FBS0UsTUFBTCxDQUFOLENBQXRCLEVBQTJDckYsQ0FBQyxDQUFDc0YsTUFBRixDQUFTLEtBQVQsQ0FBM0MsRUFBNER4RCxHQUE1RCxDQUFQO0FBQ0g7O0FBQ0R3QixxQkFBbUIsQ0FBQy9CLEVBQUQsRUFBS2dFLGVBQUwsRUFBcUI7QUFDcEMsVUFBTXZGLENBQUMsR0FBRyxLQUFLQSxDQUFmOztBQUVBLFVBQU13RixHQUFHLEdBQUcsQ0FBQ2pDLElBQUQsRUFBT2tDLFNBQVAsS0FBcUJ6RixDQUFDLENBQUNxQyxPQUFGLENBQVVyQyxDQUFDLENBQUNzQyxTQUFaLEVBQ2pCdEMsQ0FBQyxDQUFDdUMsR0FBRixDQUFNLENBQUMsQ0FBQ21ELEdBQUQsRUFBTUQsU0FBTixDQUFELEtBQW9CO0FBQ3RCLFVBQUcsS0FBS1IsV0FBTCxDQUFpQlEsU0FBakIsQ0FBSCxFQUErQjtBQUMzQixlQUFPLENBQUNDLEdBQUQsRUFBTW5FLEVBQUUsQ0FBQyxDQUFDLEdBQUdnQyxJQUFKLEVBQVVtQyxHQUFWLENBQUQsRUFBaUJELFNBQWpCLENBQVIsQ0FBUDtBQUNILE9BRkQsTUFHSTtBQUNBLFlBQUd6RixDQUFDLENBQUNtRixFQUFGLENBQUtRLE1BQUwsRUFBYUYsU0FBYixDQUFILEVBQTJCO0FBQ3ZCLGlCQUFPLENBQUNDLEdBQUQsRUFBTUYsR0FBRyxDQUFDLENBQUMsR0FBR2pDLElBQUosRUFBVW1DLEdBQVYsQ0FBRCxFQUFpQkQsU0FBakIsQ0FBVCxDQUFQO0FBQ0gsU0FGRCxNQUdJO0FBQ0EsaUJBQU8sQ0FBQ0MsR0FBRCxFQUFNRCxTQUFOLENBQVA7QUFDSDtBQUNKO0FBQ0osS0FaRCxDQURpQixFQWFiekYsQ0FBQyxDQUFDMkIsT0FiVyxFQWFGOEQsU0FiRSxDQUFqQzs7QUFjQSxXQUFPRCxHQUFHLENBQUMsRUFBRCxFQUFLRCxlQUFMLENBQVY7QUFDSDs7QUF2QnFFLENBQTFFOztBQTBCZVIscUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFRQSxNQUFNYSxlQUFOLFNBQThCM0kseURBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsc0RBQWpCLEVBQTZCLENBQUUwSSxzREFBRixDQUE3QixDQUE5QixDQUE2RTtBQUN6RXZJLGFBQVcsR0FBRTtBQUNUO0FBQ0g7O0FBSHdFOztBQU05RCxtRUFBSXNJLGVBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7Ozs7O0FBS0EsTUFBTUMsWUFBWSxHQUFLQyxlQUFGLElBQXNCLGNBQWNBLGVBQWQsQ0FBNkI7QUFFcEVDLFdBQVMsQ0FBQ3JILEtBQUQsRUFBUXNILElBQVIsRUFBY25HLFVBQWQsRUFBeUI7QUFDOUIsVUFBTUcsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxVQUFNaUcsU0FBUyxHQUFHakcsQ0FBQyxDQUFDa0csUUFBRixDQUFXbEcsQ0FBQyxDQUFDbUcsTUFBYixFQUFxQm5HLENBQUMsQ0FBQ29HLEVBQXZCLEVBQTBCO0FBQUN2SCxZQUFNLEVBQUVILEtBQVQ7QUFBZ0JFLFdBQUssRUFBRTtBQUF2QixLQUExQixFQUFzRG9ILElBQXRELENBQWxCO0FBQ0EsUUFBSTtBQUFDbkgsWUFBRDtBQUFTRDtBQUFULFFBQWtCcUgsU0FBUyxDQUFDLENBQUM7QUFBQ3BILFlBQUQ7QUFBU0Q7QUFBVCxLQUFELEVBQWtCeUgsSUFBbEIsRUFBd0JDLEdBQXhCLEtBQThCO0FBQzFELFVBQUdELElBQUksQ0FBQ0UsU0FBUixFQUFrQjtBQUNkLFlBQUk1SCxNQUFNLEdBQUdrQixVQUFVLENBQUN3RyxJQUFJLENBQUNFLFNBQU4sQ0FBdkI7QUFDQTFILGNBQU0sR0FBR0EsTUFBTSxDQUFDd0gsSUFBSSxDQUFDRyxFQUFOLENBQU4sQ0FBZ0I3SCxNQUFoQixFQUF3QixHQUFHMEgsSUFBSSxDQUFDSSxJQUFoQyxDQUFUO0FBQ0gsT0FIRCxNQUlJO0FBQ0E1SCxjQUFNLEdBQUdBLE1BQU0sQ0FBQ3dILElBQUksQ0FBQ0csRUFBTixDQUFOLENBQWdCLEdBQUdILElBQUksQ0FBQ0ksSUFBeEIsQ0FBVDtBQUNIOztBQUFBO0FBQ0Q3SCxXQUFLLENBQUMwSCxHQUFELENBQUwsR0FBYXpILE1BQU0sQ0FBQzZILEtBQXBCO0FBQ0EsYUFBTztBQUFDN0gsY0FBRDtBQUFTRDtBQUFULE9BQVA7QUFDSCxLQVY4QixDQUEvQjtBQVdBLFdBQU87QUFBQ0MsWUFBRDtBQUFTRDtBQUFULEtBQVA7QUFDSDs7QUFFRCtILFlBQVUsQ0FBQ2pJLEtBQUQsRUFBUWtJLEdBQVIsRUFBYS9HLFVBQWIsRUFBd0I7QUFDOUIsUUFBSTtBQUFFaEIsWUFBRjtBQUFVRDtBQUFWLFFBQW9CZ0ksR0FBRyxDQUFDbEksS0FBRCxFQUFRbUIsVUFBUixDQUEzQjtBQUNBLFdBQU87QUFBQ2hCLFlBQUQ7QUFBU0Q7QUFBVCxLQUFQO0FBQ0g7O0FBQ0RpSSxVQUFRLENBQUNuSSxLQUFELEVBQVFvSSxjQUFSLEVBQXdCQyxlQUF4QixFQUF3QztBQUM1QyxVQUFNO0FBQUMzSSxVQUFEO0FBQU9DLFVBQVA7QUFBYTJJLFVBQWI7QUFBbUJ2STtBQUFuQixRQUEwQnFJLGNBQWhDOztBQUNBLFFBQUd6SSxJQUFJLEtBQUssUUFBWixFQUFxQjtBQUNqQixVQUFJO0FBQUNRLGNBQUQ7QUFBU0Q7QUFBVCxVQUFrQixLQUFLbUgsU0FBTCxDQUFlckgsS0FBZixFQUFzQnNJLElBQXRCLEVBQTRCRCxlQUE1QixDQUF0QjtBQUNBLGFBQU87QUFBQyxTQUFDM0ksSUFBRCxHQUFRUyxNQUFUO0FBQWlCRDtBQUFqQixPQUFQO0FBQ0gsS0FIRCxNQUlLLElBQUdQLElBQUksS0FBSyxPQUFaLEVBQW9CO0FBQ3JCLFVBQUk7QUFBQ1EsY0FBRDtBQUFTRDtBQUFULFVBQWtCLEtBQUsrSCxVQUFMLENBQWdCakksS0FBaEIsRUFBdUJELEdBQXZCLEVBQTRCc0ksZUFBNUIsQ0FBdEI7QUFDQSxhQUFPO0FBQUMsU0FBQzNJLElBQUQsR0FBUVMsTUFBVDtBQUFpQkQ7QUFBakIsT0FBUDtBQUNILEtBSEksTUFJRDtBQUNBLFlBQU1PLEtBQUssQ0FBQyxxQ0FBRCxDQUFYO0FBQ0g7QUFDSjs7QUFFRDhILFNBQU8sQ0FBQ0MsTUFBRCxFQUFTL0ksSUFBVCxFQUFlUyxLQUFmLEVBQXFCO0FBQ3hCLFFBQUdzSSxNQUFILEVBQVU7QUFDTkEsWUFBTSxDQUFDckosSUFBUCxDQUFZO0FBQUMsU0FBQ00sSUFBRCxHQUFRUztBQUFULE9BQVo7QUFDSDtBQUNKOztBQUNEdUksS0FBRyxDQUFDakYsTUFBRCxFQUFTa0YsT0FBVCxFQUFrQnZILFVBQWxCLEVBQThCcUgsTUFBTSxHQUFDLElBQXJDLEVBQTBDO0FBQ3pDLFFBQUlHLFNBQVMsR0FBRztBQUFDQyxlQUFTLEVBQUVGO0FBQVosS0FBaEI7QUFBQSxRQUFzQ0csU0FBUyxHQUFHLFdBQWxEOztBQUNBLFNBQUksSUFBSUMsS0FBUixJQUFpQnRGLE1BQWpCLEVBQXdCO0FBQ3BCLFVBQUl1RixXQUFXLEdBQUcsS0FBS1osUUFBTCxDQUFjUSxTQUFTLENBQUNFLFNBQUQsQ0FBdkIsRUFBb0NDLEtBQXBDLEVBQTJDM0gsVUFBVSxDQUFDMkgsS0FBSyxDQUFDcEosSUFBUCxDQUFyRCxDQUFsQjtBQUNBaUosZUFBUyxDQUFDRyxLQUFLLENBQUNwSixJQUFQLENBQVQsR0FBd0JxSixXQUFXLENBQUNELEtBQUssQ0FBQ3BKLElBQVAsQ0FBbkM7QUFDQW1KLGVBQVMsR0FBR0MsS0FBSyxDQUFDcEosSUFBbEI7QUFDQSxXQUFLNkksT0FBTCxDQUFhQyxNQUFiLEVBQXFCTSxLQUFLLENBQUNwSixJQUEzQixFQUFpQ3FKLFdBQVcsQ0FBQzdJLEtBQTdDO0FBQ0g7O0FBQ0QsUUFBR3NJLE1BQUgsRUFBVTtBQUNOLFdBQUtRLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjtBQUFDVDtBQUFELE9BQWxCO0FBQ0g7O0FBQ0QsV0FBT0csU0FBUyxDQUFDRSxTQUFELENBQWhCO0FBQ0g7O0FBdkRtRSxDQUF4RTs7QUEwRGUxQiwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUMvREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBOzs7Ozs7O0FBT0EsTUFBTStCLFNBQVMsR0FBSTVJLGlCQUFELElBQXNCLGNBQWNBLGlCQUFkLENBQStCO0FBQ25FNkksa0JBQWdCLENBQUNDLGNBQUQsRUFBZ0I7QUFDNUIsVUFBTTtBQUFFcko7QUFBRixRQUFVcUosY0FBaEI7QUFDQSxVQUFNO0FBQUVDLFlBQUY7QUFBVXpKO0FBQVYsUUFBeUJHLEdBQS9CO0FBQ0EsU0FBS3VKLFNBQUwsR0FBaUJELE1BQWpCO0FBQ0EsU0FBS0UsYUFBTCxDQUFtQm5FLGVBQW5CLENBQW1DaUUsTUFBbkMsRUFBMkN6SixVQUEzQztBQUNIOztBQUNELE1BQUkySixhQUFKLENBQWtCcEksVUFBbEIsRUFBNkI7QUFDekIsU0FBS3FJLGFBQUwsR0FBcUJySSxVQUFyQjtBQUNIOztBQUNELE1BQUlvSSxhQUFKLEdBQW1CO0FBQ2YsUUFBRyxDQUFDLEtBQUtDLGFBQVQsRUFBdUI7QUFDbkIsWUFBTS9JLEtBQUssQ0FBQyxzQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLK0ksYUFBWjtBQUNIOztBQUNELE1BQUlDLFNBQUosQ0FBY0MsTUFBZCxFQUFxQjtBQUNqQixTQUFLQyxTQUFMLEdBQWlCRCxNQUFqQjtBQUNIOztBQUNELE1BQUlELFNBQUosR0FBZTtBQUNYLFFBQUcsQ0FBQyxLQUFLRSxTQUFULEVBQW1CO0FBQ2YsWUFBTWxKLEtBQUssQ0FBQyxzQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLa0osU0FBWjtBQUNIOztBQUVELE1BQUlMLFNBQUosQ0FBYzlGLE1BQWQsRUFBcUI7QUFDakJhLFdBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNkO0FBQUQsS0FBWjtBQUNBLFNBQUtvRyxTQUFMLEdBQWlCcEcsTUFBakI7QUFDSDs7QUFFRCxNQUFJOEYsU0FBSixHQUFlO0FBQ1gsUUFBRyxDQUFDLEtBQUtNLFNBQVQsRUFBbUI7QUFDZixZQUFNbkosS0FBSyxDQUFDLHNCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUttSixTQUFaO0FBQ0g7O0FBRURDLFlBQVUsQ0FBQ25CLE9BQUQsRUFBVUYsTUFBTSxHQUFDLElBQWpCLEVBQXNCO0FBQzVCLFVBQU1pQixTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFBQSxVQUFrQ0YsYUFBYSxHQUFHLEtBQUtBLGFBQXZEO0FBQ0EsUUFBSTFJLGFBQWEsR0FBRyxLQUFLeUksU0FBTCxDQUFlM0gsT0FBbkM7QUFDQSxRQUFJSyxpQkFBaUIsR0FBR3VILGFBQWEsQ0FBQzdILGlCQUF0QztBQUVBLFdBQU8rSCxTQUFTLENBQUNoQixHQUFWLENBQWM1SCxhQUFkLEVBQTZCNkgsT0FBN0IsRUFBc0MxRyxpQkFBdEMsRUFBeUR3RyxNQUF6RCxDQUFQO0FBQ0g7O0FBRURzQixXQUFTLENBQUNwQixPQUFELEVBQVVGLE1BQU0sR0FBQyxJQUFqQixFQUFzQjtBQUMzQixVQUFNaUIsU0FBUyxHQUFHLEtBQUtBLFNBQXZCO0FBQUEsVUFBa0NGLGFBQWEsR0FBRyxLQUFLQSxhQUF2RDtBQUNBLFFBQUk1SSxZQUFZLEdBQUcsS0FBSzJJLFNBQUwsQ0FBZXpILE1BQWxDO0FBQ0EsUUFBSUksZ0JBQWdCLEdBQUdzSCxhQUFhLENBQUMzSCxnQkFBckM7QUFDQSxXQUFPNkgsU0FBUyxDQUFDaEIsR0FBVixDQUFjOUgsWUFBZCxFQUE0QitILE9BQTVCLEVBQXFDekcsZ0JBQXJDLEVBQXVEdUcsTUFBdkQsQ0FBUDtBQUNIOztBQUVEdUIsV0FBUyxDQUFDckIsT0FBRCxFQUFVRixNQUFNLEdBQUMsSUFBakIsRUFBc0I7QUFDM0IsVUFBTWlCLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUFBLFVBQWtDRixhQUFhLEdBQUcsS0FBS0EsYUFBdkQ7QUFDQSxRQUFJL0ksWUFBWSxHQUFHLEtBQUs4SSxTQUFMLENBQWV2SCxNQUFsQztBQUNBLFFBQUlHLGdCQUFnQixHQUFHcUgsYUFBYSxDQUFDekgsZ0JBQXJDO0FBQ0EsV0FBTzJILFNBQVMsQ0FBQ2hCLEdBQVYsQ0FBY2pJLFlBQWQsRUFBNEJrSSxPQUE1QixFQUFxQ3hHLGdCQUFyQyxFQUF1RHNHLE1BQXZELENBQVA7QUFDSDs7QUExRGtFLENBQXZFOztBQTZEZVUsd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNwRUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9sYXllci5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbGF5ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xheWVyXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRGVuc2VNaXhpbnMgfSBmcm9tICcuL2RlbnNlLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIExheWVyTWl4aW5zIH0gZnJvbSAnLi9sYXllci5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldExheWVyIGNsYXNzIHByb3ZpZGUgY29tbW9uIHVzZSBsYXllcnNcbiAqIHsgbWl4V2l0aDogWyBMYXllck1peGlucywgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqL1xuY2xhc3MgQ2F1c2FsTmV0TGF5ZXJzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICBbIExheWVyTWl4aW5zLCBEZW5zZU1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYXllck5hbWVzID0gW107XG4gICAgfVxuICAgIG5hbWVHZW5lcmF0b3IobGF5ZXJUeXBlKXtcbiAgICAgICAgY29uc3QgbGF5ZXJJZHggPSB0aGlzLmxheWVyTmFtZXMubGVuZ3RoOyBcbiAgICAgICAgbGV0IG5ld05hbWUgPSBsYXllclR5cGUgKyAnLycgKyBsYXllcklkeDtcbiAgICAgICAgdGhpcy5sYXllck5hbWVzLnB1c2gobmV3TmFtZSk7XG4gICAgICAgIHJldHVybiBuZXdOYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldExheWVycygpOyIsImNvbnN0IERlbnNlTGF5ZXJNaXhpbnMgPSAoUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIFBpcGVsaW5lQ2xhc3N7XG4gICAgLyoqXG4gICAgICogU2ltcGxlIGRlbnNlIGxheWVyXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gaW5wdXRTaXplIC0gc2l6ZSBvZiBuZXQgaW5wdXRcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBvdXRwdXRTaXplIC0gc2l6ZSBvZiBuZXQgb3V0cHV0XG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbmFtZSAtIGxheWVyIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGxheWVyXG4gICAgICovXG4gICAgZGVuc2UoaW5wdXRTaXplLCBvdXRwdXRTaXplLCBuYW1lKXtcbiAgICAgICAgaWYoIW5hbWUpe1xuICAgICAgICAgICAgbmFtZSA9IHRoaXMubmFtZUdlbmVyYXRvcignZGVuc2UnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIE5hbWU6IG5hbWUsIFR5cGU6ICdMYXllcicsXG4gICAgICAgICAgICBQYXJhbWV0ZXJzOiB7IFdlaWdodDogW2lucHV0U2l6ZSwgb3V0cHV0U2l6ZV0sIEJpYXM6IFtvdXRwdXRTaXplXSB9LFxuICAgICAgICAgICAgTmV0OiBmdW5jdGlvbih2YWx1ZSwgcGFyYW1zKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlID0ge307XG4gICAgICAgICAgICAgICAgICAgIGxldCB7V2VpZ2h0LCBCaWFzfSA9IHBhcmFtcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlLmRvdChXZWlnaHQpLmFkZChCaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0LCB0cmFjZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERlbnNlTGF5ZXJNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRMYXllcnMgfSBmcm9tICcuL2NhdXNhbE5ldExheWVycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExheWVyTWl4aW5zIH0gZnJvbSAnLi9sYXllci5taXhpbnMnOyIsIi8qKlxuICogVGhpcyBMYXllck1peGlucyBjbGFzcyBwcm92aWRlIG1peGluIGZvciBidWlsZGluZyBwaXBlbGluZVxuICogQGNsYXNzIENhdXNhbE5ldExheWVyXG4gKiBAZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2xheWVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY29uc3QgTGF5ZXJNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXQgRGVjb2RlTGF5ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLmRlY29kZUxheWVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZGVjb2RlTGF5ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlY29kZUxheWVycztcbiAgICB9XG5cbiAgICBnZXQgRW5jb2RlTGF5ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLmVuY29kZUxheWVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignZW5jb2RlTGF5ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuY29kZUxheWVycztcbiAgICB9XG4gICAgXG4gICAgZ2V0IFByZWRpY3RMYXllcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucHJlZGljdExheWVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncHJlZGljdExheWVyczEgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZGljdExheWVycztcbiAgICB9XG5cbiAgICBzZXQgRGVjb2RlTGF5ZXJzKGRlY29kZUxheWVycyl7XG4gICAgICAgIHRoaXMuZGVjb2RlTGF5ZXJzID0gZGVjb2RlTGF5ZXJzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgRW5jb2RlTGF5ZXJzKGVuY29kZUxheWVycyl7XG4gICAgICAgIHRoaXMuZW5jb2RlTGF5ZXJzID0gZW5jb2RlTGF5ZXJzO1xuICAgIH1cbiAgICBzZXQgUHJlZGljdExheWVycyhwcmVkaWN0TGF5ZXJzKXtcbiAgICAgICAgdGhpcy5wcmVkaWN0TGF5ZXJzID0gcHJlZGljdExheWVycztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXllck1peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlci5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBwYXJhbWV0ZXJmdW5jdG9yIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRMYXllciBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2UgbGF5ZXJzXG4gKiB7IG1peFdpdGg6IFsgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UGFyYW1ldGVycyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgW1N0b3JhZ2VNaXhpbnMsIFBhcmFtZXRlck1peGluc10gKXtcbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlLCBwYXJhbWV0ZXJmdW5jdG9yKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gc3RvcmFnZTtcbiAgICAgICAgdGhpcy5GID0gcGFyYW1ldGVyZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgIH1cbn0gICBcblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFBhcmFtZXRlcnMoaW5kZXhEQlN0b3JhZ2UsIHBhcmFtZXRlcmZ1bmN0b3IpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0UGFyYW1ldGVycyB9IGZyb20gJy4vY2F1c2FsTmV0UGFyYW1ldGVycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFtZXRlck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyLm1peGlucyc7IiwiY29uc3QgUGFyYW1ldGVyTWl4aW5zID0gKEJhc2VQYXJhbWV0ZXJDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQYXJhbWV0ZXJDbGFzc3sgXG4gICAgXG4gICAgZ2V0IFByZWRpY3RQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMgfHwgIXRoaXMucGFyYW1ldGVycy5QcmVkaWN0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLlByZWRpY3Q7XG4gICAgfVxuICAgIFxuICAgIGdldCBFbmNvZGVQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMgfHwgIXRoaXMucGFyYW1ldGVycy5FbmNvZGUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuRW5jb2RlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgRGVjb2RlUGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzIHx8ICF0aGlzLnBhcmFtZXRlcnMuRGVjb2RlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLkRlY29kZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IFByZWRpY3RQYXJhbWV0ZXJzKHByZWRpY3RQYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gKHRoaXMucGFyYW1ldGVycyk/IHRoaXMucGFyYW1ldGVyczoge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5QcmVkaWN0ID0gcHJlZGljdFBhcmFtZXRlcnM7XG4gICAgfVxuICAgIFxuICAgIHNldCBFbmNvZGVQYXJhbWV0ZXJzKGVuY29kZVBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSAodGhpcy5wYXJhbWV0ZXJzKT8gdGhpcy5wYXJhbWV0ZXJzOiB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLkVuY29kZSA9IGVuY29kZVBhcmFtZXRlcnM7XG4gICAgfVxuICAgIFxuICAgIHNldCBEZWNvZGVQYXJhbWV0ZXJzKGRlY29kZVBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSAodGhpcy5wYXJhbWV0ZXJzKT8gdGhpcy5wYXJhbWV0ZXJzOiB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLkRlY29kZSA9IGRlY29kZVBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgc2V0IFBhcmFtZXRlclNpemVzKHBhcmFtZXRlclNpemVzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJTaXplcyA9IHBhcmFtZXRlclNpemVzO1xuICAgIH1cblxuICAgIGdldCBQYXJhbWV0ZXJTaXplcygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJTaXplcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyU2l6ZXMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlclNpemVzO1xuICAgIH1cbiAgICBcbiAgICBnZXQgU2F2ZU1vZGVsRGlyKCl7XG4gICAgICAgIHJldHVybiAnc2F2ZU1vZGVsLyc7XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGFzeW5jICgpPT57XG4gICAgICAgICAgICBjb25zdCBGbiA9IGFzeW5jIChwYXJhbSk9PihBcnJheS5mcm9tKGF3YWl0IHBhcmFtLmRhdGEoKSkpO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QodGhpcy5wYXJhbWV0ZXJzLCBGbik7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIGV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHBhcmFtcywgZm4pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUcmF2ZWxsZXIgPSBhc3luYyAocGFyYW1zLCBmbik9PntcbiAgICAgICAgICAgIGlmKHRoaXMuaXNUZW5zb3IocGFyYW1zKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZuKHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBrVmFscyA9IFIudG9QYWlycyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtrLCB2YWxdIG9mIGtWYWxzKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2tdID0gYXdhaXQgVHJhdmVsbGVyKHZhbCwgZm4pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFRyYXZlbGxlcihwYXJhbXMsIGZuKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgcGFyYW1ldGVyc1N1bW1hcnkoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIG11c3QgYmUgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgRm4gPSBhc3luYyAocGFyYW0pPT5BcnJheS5mcm9tKGF3YWl0IHBhcmFtLm1lYW4oKS5kYXRhKCkpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5leHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdCh0aGlzLnBhcmFtZXRlcnMsIEZuKTtcbiAgICB9XG4gICAgXG4gICAgaW5pdFBhcmFtU2l6ZXNCeUxheWVycyhsYXllcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBUID0gdGhpcy5ULCBGID0gdGhpcy5GO1xuICAgICAgICBjb25zdCBHZXRQYXJhbVNpemUgPSBSLmNvbXBvc2UoUi5mcm9tUGFpcnMsIFIubWFwKHA9PltwLk5hbWUsIHAuUGFyYW1ldGVyc10pKTtcbiAgICAgICAgY29uc3QgUHJlZGljdFNpemUgPSBHZXRQYXJhbVNpemUoRi5nZXRJbihbJ1ByZWRpY3QnXSwgbGF5ZXJzLCBbXSkpO1xuICAgICAgICBjb25zdCBFbmNvZGVTaXplICA9IEdldFBhcmFtU2l6ZShGLmdldEluKFsnRW5jb2RlJ10sIGxheWVycywgW10pKTtcbiAgICAgICAgY29uc3QgRGVjb2RlU2l6ZSAgPSBHZXRQYXJhbVNpemUoRi5nZXRJbihbJ0RlY29kZSddLCBsYXllcnMsIFtdKSk7IFxuICAgICAgICB0aGlzLlBhcmFtZXRlclNpemVzID0ge1ByZWRpY3RTaXplLCBFbmNvZGVTaXplLCBEZWNvZGVTaXplfTtcbiAgICB9XG5cbiAgICBpbXBvcnRQYXJhbWV0ZXJzKHBhcmFtT2JqZWN0KXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgUiA9IHRoaXMuUiwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc29sZS5sb2coe3BhcmFtT2JqZWN0fSk7XG4gICAgICAgIGxldCBwcmVkaWN0UGFyYW1PYmplY3QgPSBGLmdldEluKFsnUHJlZGljdCddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZW5jb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0VuY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZGVjb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0RlY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBjb25zdCB7IFByZWRpY3RTaXplLCBFbmNvZGVTaXplLCBEZWNvZGVTaXplIH0gPSB0aGlzLlBhcmFtZXRlclNpemVzO1xuICAgICAgICBjb25zdCBTZXRPckluaXQgPSAoIGluaXRQcmVkaWN0LCBwYXJhbU9iamVjdCApPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGLnBhcmFtZXRlck1hcFdpdGhLZXkoKGtleXMsIHBhcmFtU2l6ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbVZhbHVlID0gdGhpcy5GLmdldEluKGtleXMsIHBhcmFtT2JqZWN0LCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhcmFtVmFsdWUgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBULnZhcmlhYmxlKFQucmFuZG9tTm9ybWFsKHBhcmFtU2l6ZSkuYXNUeXBlKCdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVC52YXJpYWJsZShULnRlbnNvcihwYXJhbVZhbHVlLCBwYXJhbVNpemUsICdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LCBpbml0UHJlZGljdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5QcmVkaWN0UGFyYW1ldGVycyA9IFNldE9ySW5pdCggUHJlZGljdFNpemUsIHByZWRpY3RQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkVuY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBFbmNvZGVTaXplLCBlbmNvZGVQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkRlY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBEZWNvZGVTaXplLCBkZWNvZGVQYXJhbU9iamVjdCApOyBcbiAgICB9XG5cbiAgICBzZXRPckluaXRQYXJhbXMobGF5ZXJzLCBwYXJhbU9iamVjdCl7XG4gICAgICAgIHRoaXMuaW5pdFBhcmFtU2l6ZXNCeUxheWVycyhsYXllcnMpO1xuICAgICAgICB0aGlzLmltcG9ydFBhcmFtZXRlcnMocGFyYW1PYmplY3QpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkUGFyYW1MaXN0KCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2UsIFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgU3RvcmFnZS5nZXRGaWxlTGlzdChTYXZlRGlyKTtcbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0Lm1hcChmaWxlTmFtZT0+ZmlsZU5hbWUucmVwbGFjZShTYXZlRGlyLCcnKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGNvbnN0IFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXhwb3J0UGFyYW1ldGVycygpO1xuICAgICAgICBhd2FpdCBTdG9yYWdlLndyaXRlRmlsZShTYXZlRGlyICsgZmlsZU5hbWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZSwgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBsZXQgc3RyUGFyYW1zID0gYXdhaXQgU3RvcmFnZS5yZWFkRmlsZShTYXZlRGlyK2ZpbGVOYW1lKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IEpTT04ucGFyc2Uoc3RyUGFyYW1zKTtcbiAgICAgICAgdGhpcy5pbXBvcnRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLlBhcmFtZXRlcnM7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYW1ldGVyTWl4aW5zOyIsImltcG9ydCB7RnVuY3RvciBhcyBCYXNlRnVuY3Rvcn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7cGxhdGZvcm19IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlckZ1bmN0b3IubWl4aW5zJztcblxuY2xhc3MgUGFyYW1ldGVyRnVuY3RvciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFsgUGFyYW1ldGVyRnVuY3Rvck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQYXJhbWV0ZXJGdW5jdG9yKCk7IiwiY29uc3QgUGFyYW1ldGVyRnVuY3Rvck1peGlucyA9IChGdW5jdG9yQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBGdW5jdG9yQ2xhc3N7IFxuICAgIGlzUGFyYW1ldGVyKHZhbCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmlmRWxzZShSLmlzKEFycmF5KSwgUi5hbGwoUi5pcyhOdW1iZXIpKSwgUi5hbHdheXMoZmFsc2UpKSh2YWwpO1xuICAgIH1cbiAgICBwYXJhbWV0ZXJNYXBXaXRoS2V5KGZuLCBwYXJhbWV0ZXJPYmplY3Qpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgUmVzID0gKGtleXMsIHN1Yk9iamVjdCkgPT4gUi5jb21wb3NlKFIuZnJvbVBhaXJzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFIubWFwKChba2V5LCBzdWJPYmplY3RdKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNQYXJhbWV0ZXIoc3ViT2JqZWN0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBmbihbLi4ua2V5cywga2V5XSwgc3ViT2JqZWN0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKFIuaXMoT2JqZWN0LCBzdWJPYmplY3QpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBSZXMoWy4uLmtleXMsIGtleV0sIHN1Yk9iamVjdCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgc3ViT2JqZWN0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSLnRvUGFpcnMpKHN1Yk9iamVjdCk7XG4gICAgICAgIHJldHVybiBSZXMoW10sIHBhcmFtZXRlck9iamVjdCk7XG4gICAgfSAgICAgICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFJ1bm5lck1peGlucyB9IGZyb20gJy4vcnVubmVyLm1peGlucyc7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0TGF5ZXIgY2xhc3MgcHJvdmlkZSBjb21tb24gdXNlIGxheWVyc1xuICogeyBtaXhXaXRoOiBbIERlbnNlTWl4aW5zIF0gfVxuICogQGNsYXNzIENhdXNhbE5ldExheWVyXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvcnVubmVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UnVubmVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbIFJ1bm5lck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRSdW5uZXIoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFJ1bm5lciB9IGZyb20gJy4vY2F1c2FsTmV0UnVubmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJzsiLCIvKipcbiAqIFRoaXMgUnVubmVyTWl4aW5zIGNsYXNzIHByb3ZpZGUgbWV0aG9kcyBmb3IgcnVubmVyIGNsYXNzLlxuICogQGNsYXNzIFJ1bm5lck1peGluc1xuICogQGV4dGVuZHMgQmFzZVJ1bm5lckNsYXNzXG4gKi9cbmNvbnN0IFJ1bm5lck1peGlucyA9ICggQmFzZVJ1bm5lckNsYXNzICk9PiBjbGFzcyBleHRlbmRzIEJhc2VSdW5uZXJDbGFzc3tcbiAgICBcbiAgICBydW5PcEZsb3codmFsdWUsIGZsb3csIHBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBPcHNSdW5uZXIgPSBSLmFkZEluZGV4KFIucmVkdWNlKShSLl9fLHtyZXN1bHQ6IHZhbHVlLCB0cmFjZToge319LCBmbG93KTtcbiAgICAgICAgdmFyIHtyZXN1bHQsIHRyYWNlfSA9IE9wc1J1bm5lcigoe3Jlc3VsdCwgdHJhY2V9LCBub2RlLCBpZHgpPT57XG4gICAgICAgICAgICBpZihub2RlLlBhcmFtZXRlcil7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHBhcmFtZXRlcnNbbm9kZS5QYXJhbWV0ZXJdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtub2RlLk9wXShwYXJhbXMsIC4uLm5vZGUuQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtub2RlLk9wXSguLi5ub2RlLkFyZ3MpOyAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmFjZVtpZHhdID0gcmVzdWx0LnNoYXBlO1xuICAgICAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7cmVzdWx0LCB0cmFjZX07XG4gICAgfVxuXG4gICAgcnVuT3BMYXllcih2YWx1ZSwgbmV0LCBwYXJhbWV0ZXJzKXtcbiAgICAgICAgbGV0IHsgcmVzdWx0LCB0cmFjZSB9ID0gbmV0KHZhbHVlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICB9XG4gICAgcnVuTGF5ZXIodmFsdWUsIGxheWVyQ29uZmlndXJlLCBsYXllclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCB7TmFtZSwgVHlwZSwgRmxvdywgTmV0fSA9IGxheWVyQ29uZmlndXJlO1xuICAgICAgICBpZihUeXBlID09PSAnVGVuc29yJyl7XG4gICAgICAgICAgICBsZXQge3Jlc3VsdCwgdHJhY2V9ID0gdGhpcy5ydW5PcEZsb3codmFsdWUsIEZsb3csIGxheWVyUGFyYW1ldGVycyk7XG4gICAgICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0LCB0cmFjZX07XG4gICAgICAgIH0gICBcbiAgICAgICAgZWxzZSBpZihUeXBlID09PSAnTGF5ZXInKXtcbiAgICAgICAgICAgIGxldCB7cmVzdWx0LCB0cmFjZX0gPSB0aGlzLnJ1bk9wTGF5ZXIodmFsdWUsIE5ldCwgbGF5ZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB7W05hbWVdOiByZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSAgIFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3R5cGUgbXVzdCBiZSBlaXRoZXIgTGF5ZXIgb3IgVGVuc29yJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFjaW5nKHRyYWNlcywgbmFtZSwgdHJhY2Upe1xuICAgICAgICBpZih0cmFjZXMpe1xuICAgICAgICAgICAgdHJhY2VzLnB1c2goe1tuYW1lXTogdHJhY2V9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBydW4obGF5ZXJzLCBzYW1wbGVzLCBwYXJhbWV0ZXJzLCB0cmFjZXM9bnVsbCl7XG4gICAgICAgIGxldCBwaXBlVmFsdWUgPSB7UGlwZUlucHV0OiBzYW1wbGVzfSwgbGFzdExheWVyID0gJ1BpcGVJbnB1dCc7XG4gICAgICAgIGZvcihsZXQgbGF5ZXIgb2YgbGF5ZXJzKXtcbiAgICAgICAgICAgIGxldCBsYXllck91dHB1dCA9IHRoaXMucnVuTGF5ZXIocGlwZVZhbHVlW2xhc3RMYXllcl0sIGxheWVyLCBwYXJhbWV0ZXJzW2xheWVyLk5hbWVdKTtcbiAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgbGFzdExheWVyID0gbGF5ZXIuTmFtZTtcbiAgICAgICAgICAgIHRoaXMudHJhY2luZyh0cmFjZXMsIGxheWVyLk5hbWUsIGxheWVyT3V0cHV0LnRyYWNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0cmFjZXMpe1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3RyYWNlc30pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlVmFsdWVbbGFzdExheWVyXTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSdW5uZXJNaXhpbnM7XG4iLCJleHBvcnQgeyBjYXVzYWxOZXRMYXllcnMsIExheWVyTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRMYXllcnMvaW5kZXgnO1xuZXhwb3J0IHsgY2F1c2FsTmV0UGFyYW1ldGVycywgUGFyYW1ldGVyTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4JztcbmV4cG9ydCB7IGNhdXNhbE5ldFJ1bm5lciwgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRSdW5uZXIvaW5kZXgnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOZXRNaXhpbnMgfSBmcm9tICcuL25ldC5taXhpbnMnO1xuIiwiLyoqXG4gKiBUaGlzIE5ldE1peGlucyBjbGFzcyBwcm92aWRlIG1peGluIGZvciBidWlsZGluZyBwaXBlbGluZVxuICogQGNsYXNzIE5ldE1peGluc1xuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9uZXQubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBOZXRNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXROZXRGcm9tQ29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgY29uc3QgeyBOZXQgfSA9IHBpcGVsaW5lQ29uZmlnO1xuICAgICAgICBjb25zdCB7IExheWVycywgUGFyYW1ldGVycyB9ID0gTmV0O1xuICAgICAgICB0aGlzLk5ldExheWVycyA9IExheWVycztcbiAgICAgICAgdGhpcy5OZXRQYXJhbWV0ZXJzLnNldE9ySW5pdFBhcmFtcyhMYXllcnMsIFBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICBzZXQgTmV0UGFyYW1ldGVycyhwYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5uZXRQYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG4gICAgZ2V0IE5ldFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0UGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0UnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBzZXQgTmV0UnVubmVyKHJ1bm5lcil7XG4gICAgICAgIHRoaXMubmV0UnVubmVyID0gcnVubmVyO1xuICAgIH1cbiAgICBnZXQgTmV0UnVubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldFJ1bm5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0UnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRSdW5uZXI7XG4gICAgfVxuXG4gICAgc2V0IE5ldExheWVycyhsYXllcnMpe1xuICAgICAgICBjb25zb2xlLmxvZyh7bGF5ZXJzfSk7XG4gICAgICAgIHRoaXMubmV0TGF5ZXJzID0gbGF5ZXJzO1xuICAgIH1cblxuICAgIGdldCBOZXRMYXllcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TGF5ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRMYXllcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldExheWVycztcbiAgICB9XG5cbiAgICBuZXRQcmVkaWN0KHNhbXBsZXMsIHRyYWNlcz1udWxsKXtcbiAgICAgICAgY29uc3QgTmV0UnVubmVyID0gdGhpcy5OZXRSdW5uZXIsIE5ldFBhcmFtZXRlcnMgPSB0aGlzLk5ldFBhcmFtZXRlcnM7XG4gICAgICAgIGxldCBwcmVkaWN0TGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuUHJlZGljdDtcbiAgICAgICAgbGV0IHByZWRpY3RQYXJhbWV0ZXJzID0gTmV0UGFyYW1ldGVycy5QcmVkaWN0UGFyYW1ldGVycztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBOZXRSdW5uZXIucnVuKHByZWRpY3RMYXllcnMsIHNhbXBsZXMsIHByZWRpY3RQYXJhbWV0ZXJzLCB0cmFjZXMpO1xuICAgIH1cblxuICAgIG5ldEVuY29kZShzYW1wbGVzLCB0cmFjZXM9bnVsbCl7XG4gICAgICAgIGNvbnN0IE5ldFJ1bm5lciA9IHRoaXMuTmV0UnVubmVyLCBOZXRQYXJhbWV0ZXJzID0gdGhpcy5OZXRQYXJhbWV0ZXJzO1xuICAgICAgICBsZXQgZW5jb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRW5jb2RlO1xuICAgICAgICBsZXQgZW5jb2RlUGFyYW1ldGVycyA9IE5ldFBhcmFtZXRlcnMuRW5jb2RlUGFyYW1ldGVycztcbiAgICAgICAgcmV0dXJuIE5ldFJ1bm5lci5ydW4oZW5jb2RlTGF5ZXJzLCBzYW1wbGVzLCBlbmNvZGVQYXJhbWV0ZXJzLCB0cmFjZXMpO1xuICAgIH1cblxuICAgIG5ldERlY29kZShzYW1wbGVzLCB0cmFjZXM9bnVsbCl7XG4gICAgICAgIGNvbnN0IE5ldFJ1bm5lciA9IHRoaXMuTmV0UnVubmVyLCBOZXRQYXJhbWV0ZXJzID0gdGhpcy5OZXRQYXJhbWV0ZXJzO1xuICAgICAgICBsZXQgZGVjb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRGVjb2RlO1xuICAgICAgICBsZXQgZGVjb2RlUGFyYW1ldGVycyA9IE5ldFBhcmFtZXRlcnMuRGVjb2RlUGFyYW1ldGVycztcbiAgICAgICAgcmV0dXJuIE5ldFJ1bm5lci5ydW4oZGVjb2RlTGF5ZXJzLCBzYW1wbGVzLCBkZWNvZGVQYXJhbWV0ZXJzLCB0cmFjZXMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ldE1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==