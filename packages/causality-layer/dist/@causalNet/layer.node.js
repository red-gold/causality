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



/**
 * This CausalNetLayer class provide common use layers
 * { mixWith: [ LayerMixins, DenseMixins ] }
 * @class CausalNetLayer
 * @extends BaseTensor
 */

class CausalNetLayers extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [_dense_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
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
/*! exports provided: causalNetLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetLayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetLayers */ "./src/CausalNetLayers/causalNetLayers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetLayers", function() { return _causalNetLayers__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

  get Predictor() {
    let predictLayers = this.NetLayers.Predict;
    let predictParameters = this.NetParameters.PredictParameters;
    return samples => {
      return this.run(predictLayers, samples, predictParameters);
    };
  }

  get Encoder() {
    let encodeLayers = this.NetLayers.Encode;
    let encodeParameters = this.NetParameters.EncodeParameters;
    return samples => {
      return this.run(encodeLayers, samples, encodeParameters);
    };
  }

  get Decoder() {
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
/*! exports provided: causalNetLayers, causalNetParameters, ParameterMixins, causalNetRunner, RunnerMixins, NetMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CausalNetLayers/index */ "./src/CausalNetLayers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetLayers", function() { return _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__["causalNetLayers"]; });

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
  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.logger.groupBegin('set Net by config');
    const {
      Net
    } = pipelineConfig;
    const {
      Layers,
      Parameters
    } = Net;
    this.Layers = Layers;
    this.Parameters.setOrInitParams(Layers, Parameters);
    this.logger.groupEnd();
  }

  set Layers(layers) {
    this.netLayers = layers;
  }

  get Layers() {
    if (!this.netLayers) {
      throw Error('netLayers is not set');
    }

    return this.netLayers;
  }

  set Parameters(parameters) {
    this.netParameters = parameters;
  }

  get Parameters() {
    if (!this.netParameters) {
      throw Error('netRunner is not set');
    }

    return this.netParameters;
  }

  set Net(runner) {
    this.netRunner = runner;
  }

  get Net() {
    this.netRunner.NetLayers = this.Layers;
    this.netRunner.NetParameters = this.Parameters;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9kZW5zZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2NhdXNhbE5ldFBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFJ1bm5lci9jYXVzYWxOZXRSdW5uZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvcnVubmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvbmV0Lm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0TGF5ZXJzIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZVRlbnNvciIsIkRlbnNlTWl4aW5zIiwiY29uc3RydWN0b3IiLCJsYXllck5hbWVzIiwibmFtZUdlbmVyYXRvciIsImxheWVyVHlwZSIsImxheWVySWR4IiwibGVuZ3RoIiwibmV3TmFtZSIsInB1c2giLCJEZW5zZUxheWVyTWl4aW5zIiwiUGlwZWxpbmVDbGFzcyIsImRlbnNlIiwiaW5wdXRTaXplIiwib3V0cHV0U2l6ZSIsIm5hbWUiLCJOYW1lIiwiVHlwZSIsIlBhcmFtZXRlcnMiLCJXZWlnaHQiLCJCaWFzIiwiTmV0IiwidmFsdWUiLCJwYXJhbXMiLCJ0cmFjZSIsInJlc3VsdCIsImRvdCIsImFkZCIsIkNhdXNhbE5ldFBhcmFtZXRlcnMiLCJTdG9yYWdlTWl4aW5zIiwiUGFyYW1ldGVyTWl4aW5zIiwic3RvcmFnZSIsInBhcmFtZXRlcmZ1bmN0b3IiLCJwYXJhbWV0ZXJzIiwiU3RvcmFnZSIsIkYiLCJSIiwiQ29yZUZ1bmN0b3IiLCJpbmRleERCU3RvcmFnZSIsIkJhc2VQYXJhbWV0ZXJDbGFzcyIsIlByZWRpY3RQYXJhbWV0ZXJzIiwiUHJlZGljdCIsIkVycm9yIiwiRW5jb2RlUGFyYW1ldGVycyIsIkVuY29kZSIsIkRlY29kZVBhcmFtZXRlcnMiLCJEZWNvZGUiLCJwcmVkaWN0UGFyYW1ldGVycyIsImVuY29kZVBhcmFtZXRlcnMiLCJkZWNvZGVQYXJhbWV0ZXJzIiwiUGFyYW1ldGVyU2l6ZXMiLCJwYXJhbWV0ZXJTaXplcyIsIlNhdmVNb2RlbERpciIsImV4cG9ydFBhcmFtZXRlcnMiLCJGbiIsInBhcmFtIiwiQXJyYXkiLCJmcm9tIiwiZGF0YSIsImV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0IiwiZm4iLCJUcmF2ZWxsZXIiLCJpc1RlbnNvciIsImtWYWxzIiwidG9QYWlycyIsInJlcyIsImsiLCJ2YWwiLCJwYXJhbWV0ZXJzU3VtbWFyeSIsIm1lYW4iLCJpbml0UGFyYW1TaXplc0J5TGF5ZXJzIiwibGF5ZXJzIiwiVCIsIkdldFBhcmFtU2l6ZSIsImNvbXBvc2UiLCJmcm9tUGFpcnMiLCJtYXAiLCJwIiwiUHJlZGljdFNpemUiLCJnZXRJbiIsIkVuY29kZVNpemUiLCJEZWNvZGVTaXplIiwiaW1wb3J0UGFyYW1ldGVycyIsInBhcmFtT2JqZWN0IiwiY29uc29sZSIsImxvZyIsInByZWRpY3RQYXJhbU9iamVjdCIsImVuY29kZVBhcmFtT2JqZWN0IiwiZGVjb2RlUGFyYW1PYmplY3QiLCJTZXRPckluaXQiLCJpbml0UHJlZGljdCIsInBhcmFtZXRlck1hcFdpdGhLZXkiLCJrZXlzIiwicGFyYW1TaXplIiwicGFyYW1WYWx1ZSIsInZhcmlhYmxlIiwicmFuZG9tTm9ybWFsIiwiYXNUeXBlIiwidGVuc29yIiwic2V0T3JJbml0UGFyYW1zIiwiZ2V0U2F2ZWRQYXJhbUxpc3QiLCJTYXZlRGlyIiwiZmlsZUxpc3QiLCJnZXRGaWxlTGlzdCIsImZpbGVOYW1lIiwicmVwbGFjZSIsInNhdmVQYXJhbXMiLCJ3cml0ZUZpbGUiLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZFBhcmFtcyIsInN0clBhcmFtcyIsInJlYWRGaWxlIiwicGFyc2UiLCJQYXJhbWV0ZXJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIiwiRnVuY3RvckNsYXNzIiwiaXNQYXJhbWV0ZXIiLCJpZkVsc2UiLCJpcyIsImFsbCIsIk51bWJlciIsImFsd2F5cyIsInBhcmFtZXRlck9iamVjdCIsIlJlcyIsInN1Yk9iamVjdCIsImtleSIsIk9iamVjdCIsIkNhdXNhbE5ldFJ1bm5lciIsIlJ1bm5lck1peGlucyIsIkJhc2VSdW5uZXJDbGFzcyIsIk5ldFBhcmFtZXRlcnMiLCJuZXRQYXJhbWV0ZXJzIiwiTmV0TGF5ZXJzIiwibmV0TGF5ZXJzIiwicnVuT3BGbG93IiwiZmxvdyIsIk9wc1J1bm5lciIsImFkZEluZGV4IiwicmVkdWNlIiwiX18iLCJub2RlIiwiaWR4IiwiUGFyYW1ldGVyIiwiT3AiLCJBcmdzIiwic2hhcGUiLCJydW5PcExheWVyIiwibmV0IiwicnVuTGF5ZXIiLCJsYXllckNvbmZpZ3VyZSIsImxheWVyUGFyYW1ldGVycyIsIkZsb3ciLCJ0cmFjaW5nIiwidHJhY2VzIiwicnVuIiwic2FtcGxlcyIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsImxhc3RMYXllciIsImxheWVyIiwibGF5ZXJPdXRwdXQiLCJsb2dnZXIiLCJkZWJ1ZyIsIlByZWRpY3RvciIsInByZWRpY3RMYXllcnMiLCJFbmNvZGVyIiwiZW5jb2RlTGF5ZXJzIiwiRGVjb2RlciIsImRlY29kZUxheWVycyIsIk5ldE1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsImdyb3VwQmVnaW4iLCJMYXllcnMiLCJncm91cEVuZCIsInJ1bm5lciIsIm5ldFJ1bm5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxn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Q0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbGF5ZXIubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2xheWVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sYXllclwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERlbnNlTWl4aW5zIH0gZnJvbSAnLi9kZW5zZS5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldExheWVyIGNsYXNzIHByb3ZpZGUgY29tbW9uIHVzZSBsYXllcnNcbiAqIHsgbWl4V2l0aDogWyBMYXllck1peGlucywgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqL1xuY2xhc3MgQ2F1c2FsTmV0TGF5ZXJzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICBbIERlbnNlTWl4aW5zIF0gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxheWVyTmFtZXMgPSBbXTtcbiAgICB9XG4gICAgbmFtZUdlbmVyYXRvcihsYXllclR5cGUpe1xuICAgICAgICBjb25zdCBsYXllcklkeCA9IHRoaXMubGF5ZXJOYW1lcy5sZW5ndGg7IFxuICAgICAgICBsZXQgbmV3TmFtZSA9IGxheWVyVHlwZSArICcvJyArIGxheWVySWR4O1xuICAgICAgICB0aGlzLmxheWVyTmFtZXMucHVzaChuZXdOYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ld05hbWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TGF5ZXJzKCk7IiwiY29uc3QgRGVuc2VMYXllck1peGlucyA9IChQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgUGlwZWxpbmVDbGFzc3tcbiAgICAvKipcbiAgICAgKiBTaW1wbGUgZGVuc2UgbGF5ZXJcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBpbnB1dFNpemUgLSBzaXplIG9mIG5ldCBpbnB1dFxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IG91dHB1dFNpemUgLSBzaXplIG9mIG5ldCBvdXRwdXRcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBuYW1lIC0gbGF5ZXIgbmFtZVxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gbGF5ZXJcbiAgICAgKi9cbiAgICBkZW5zZShpbnB1dFNpemUsIG91dHB1dFNpemUsIG5hbWUpe1xuICAgICAgICBpZighbmFtZSl7XG4gICAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lR2VuZXJhdG9yKCdkZW5zZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgTmFtZTogbmFtZSwgVHlwZTogJ0xheWVyJyxcbiAgICAgICAgICAgIFBhcmFtZXRlcnM6IHsgV2VpZ2h0OiBbaW5wdXRTaXplLCBvdXRwdXRTaXplXSwgQmlhczogW291dHB1dFNpemVdIH0sXG4gICAgICAgICAgICBOZXQ6IGZ1bmN0aW9uKHZhbHVlLCBwYXJhbXMpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhY2UgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHtXZWlnaHQsIEJpYXN9ID0gcGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdmFsdWUuZG90KFdlaWdodCkuYWRkKEJpYXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQsIHRyYWNlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRGVuc2VMYXllck1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldExheWVycyB9IGZyb20gJy4vY2F1c2FsTmV0TGF5ZXJzJzsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlci5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBwYXJhbWV0ZXJmdW5jdG9yIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRMYXllciBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2UgbGF5ZXJzXG4gKiB7IG1peFdpdGg6IFsgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UGFyYW1ldGVycyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgW1N0b3JhZ2VNaXhpbnMsIFBhcmFtZXRlck1peGluc10gKXtcbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlLCBwYXJhbWV0ZXJmdW5jdG9yKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gc3RvcmFnZTtcbiAgICAgICAgdGhpcy5GID0gcGFyYW1ldGVyZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgIH1cbn0gICBcblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFBhcmFtZXRlcnMoaW5kZXhEQlN0b3JhZ2UsIHBhcmFtZXRlcmZ1bmN0b3IpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0UGFyYW1ldGVycyB9IGZyb20gJy4vY2F1c2FsTmV0UGFyYW1ldGVycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFtZXRlck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyLm1peGlucyc7IiwiY29uc3QgUGFyYW1ldGVyTWl4aW5zID0gKEJhc2VQYXJhbWV0ZXJDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQYXJhbWV0ZXJDbGFzc3sgXG4gICAgXG4gICAgZ2V0IFByZWRpY3RQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMgfHwgIXRoaXMucGFyYW1ldGVycy5QcmVkaWN0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLlByZWRpY3Q7XG4gICAgfVxuICAgIFxuICAgIGdldCBFbmNvZGVQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMgfHwgIXRoaXMucGFyYW1ldGVycy5FbmNvZGUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuRW5jb2RlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgRGVjb2RlUGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzIHx8ICF0aGlzLnBhcmFtZXRlcnMuRGVjb2RlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLkRlY29kZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IFByZWRpY3RQYXJhbWV0ZXJzKHByZWRpY3RQYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gKHRoaXMucGFyYW1ldGVycyk/IHRoaXMucGFyYW1ldGVyczoge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5QcmVkaWN0ID0gcHJlZGljdFBhcmFtZXRlcnM7XG4gICAgfVxuICAgIFxuICAgIHNldCBFbmNvZGVQYXJhbWV0ZXJzKGVuY29kZVBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSAodGhpcy5wYXJhbWV0ZXJzKT8gdGhpcy5wYXJhbWV0ZXJzOiB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLkVuY29kZSA9IGVuY29kZVBhcmFtZXRlcnM7XG4gICAgfVxuICAgIFxuICAgIHNldCBEZWNvZGVQYXJhbWV0ZXJzKGRlY29kZVBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSAodGhpcy5wYXJhbWV0ZXJzKT8gdGhpcy5wYXJhbWV0ZXJzOiB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLkRlY29kZSA9IGRlY29kZVBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgc2V0IFBhcmFtZXRlclNpemVzKHBhcmFtZXRlclNpemVzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJTaXplcyA9IHBhcmFtZXRlclNpemVzO1xuICAgIH1cblxuICAgIGdldCBQYXJhbWV0ZXJTaXplcygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJTaXplcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyU2l6ZXMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlclNpemVzO1xuICAgIH1cbiAgICBcbiAgICBnZXQgU2F2ZU1vZGVsRGlyKCl7XG4gICAgICAgIHJldHVybiAnc2F2ZU1vZGVsLyc7XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGFzeW5jICgpPT57XG4gICAgICAgICAgICBjb25zdCBGbiA9IGFzeW5jIChwYXJhbSk9PihBcnJheS5mcm9tKGF3YWl0IHBhcmFtLmRhdGEoKSkpO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QodGhpcy5wYXJhbWV0ZXJzLCBGbik7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIGV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHBhcmFtcywgZm4pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUcmF2ZWxsZXIgPSBhc3luYyAocGFyYW1zLCBmbik9PntcbiAgICAgICAgICAgIGlmKHRoaXMuaXNUZW5zb3IocGFyYW1zKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZuKHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBrVmFscyA9IFIudG9QYWlycyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtrLCB2YWxdIG9mIGtWYWxzKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2tdID0gYXdhaXQgVHJhdmVsbGVyKHZhbCwgZm4pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFRyYXZlbGxlcihwYXJhbXMsIGZuKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgcGFyYW1ldGVyc1N1bW1hcnkoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIG11c3QgYmUgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgRm4gPSBhc3luYyAocGFyYW0pPT5BcnJheS5mcm9tKGF3YWl0IHBhcmFtLm1lYW4oKS5kYXRhKCkpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5leHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdCh0aGlzLnBhcmFtZXRlcnMsIEZuKTtcbiAgICB9XG4gICAgXG4gICAgaW5pdFBhcmFtU2l6ZXNCeUxheWVycyhsYXllcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBUID0gdGhpcy5ULCBGID0gdGhpcy5GO1xuICAgICAgICBjb25zdCBHZXRQYXJhbVNpemUgPSBSLmNvbXBvc2UoUi5mcm9tUGFpcnMsIFIubWFwKHA9PltwLk5hbWUsIHAuUGFyYW1ldGVyc10pKTtcbiAgICAgICAgY29uc3QgUHJlZGljdFNpemUgPSBHZXRQYXJhbVNpemUoRi5nZXRJbihbJ1ByZWRpY3QnXSwgbGF5ZXJzLCBbXSkpO1xuICAgICAgICBjb25zdCBFbmNvZGVTaXplICA9IEdldFBhcmFtU2l6ZShGLmdldEluKFsnRW5jb2RlJ10sIGxheWVycywgW10pKTtcbiAgICAgICAgY29uc3QgRGVjb2RlU2l6ZSAgPSBHZXRQYXJhbVNpemUoRi5nZXRJbihbJ0RlY29kZSddLCBsYXllcnMsIFtdKSk7IFxuICAgICAgICB0aGlzLlBhcmFtZXRlclNpemVzID0ge1ByZWRpY3RTaXplLCBFbmNvZGVTaXplLCBEZWNvZGVTaXplfTtcbiAgICB9XG5cbiAgICBpbXBvcnRQYXJhbWV0ZXJzKHBhcmFtT2JqZWN0KXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgUiA9IHRoaXMuUiwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc29sZS5sb2coe3BhcmFtT2JqZWN0fSk7XG4gICAgICAgIGxldCBwcmVkaWN0UGFyYW1PYmplY3QgPSBGLmdldEluKFsnUHJlZGljdCddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZW5jb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0VuY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZGVjb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0RlY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBjb25zdCB7IFByZWRpY3RTaXplLCBFbmNvZGVTaXplLCBEZWNvZGVTaXplIH0gPSB0aGlzLlBhcmFtZXRlclNpemVzO1xuICAgICAgICBjb25zdCBTZXRPckluaXQgPSAoIGluaXRQcmVkaWN0LCBwYXJhbU9iamVjdCApPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGLnBhcmFtZXRlck1hcFdpdGhLZXkoKGtleXMsIHBhcmFtU2l6ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbVZhbHVlID0gdGhpcy5GLmdldEluKGtleXMsIHBhcmFtT2JqZWN0LCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhcmFtVmFsdWUgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBULnZhcmlhYmxlKFQucmFuZG9tTm9ybWFsKHBhcmFtU2l6ZSkuYXNUeXBlKCdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVC52YXJpYWJsZShULnRlbnNvcihwYXJhbVZhbHVlLCBwYXJhbVNpemUsICdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LCBpbml0UHJlZGljdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5QcmVkaWN0UGFyYW1ldGVycyA9IFNldE9ySW5pdCggUHJlZGljdFNpemUsIHByZWRpY3RQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkVuY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBFbmNvZGVTaXplLCBlbmNvZGVQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkRlY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBEZWNvZGVTaXplLCBkZWNvZGVQYXJhbU9iamVjdCApOyBcbiAgICB9XG5cbiAgICBzZXRPckluaXRQYXJhbXMobGF5ZXJzLCBwYXJhbU9iamVjdCl7XG4gICAgICAgIHRoaXMuaW5pdFBhcmFtU2l6ZXNCeUxheWVycyhsYXllcnMpO1xuICAgICAgICB0aGlzLmltcG9ydFBhcmFtZXRlcnMocGFyYW1PYmplY3QpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkUGFyYW1MaXN0KCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2UsIFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgU3RvcmFnZS5nZXRGaWxlTGlzdChTYXZlRGlyKTtcbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0Lm1hcChmaWxlTmFtZT0+ZmlsZU5hbWUucmVwbGFjZShTYXZlRGlyLCcnKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGNvbnN0IFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXhwb3J0UGFyYW1ldGVycygpO1xuICAgICAgICBhd2FpdCBTdG9yYWdlLndyaXRlRmlsZShTYXZlRGlyICsgZmlsZU5hbWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZSwgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBsZXQgc3RyUGFyYW1zID0gYXdhaXQgU3RvcmFnZS5yZWFkRmlsZShTYXZlRGlyK2ZpbGVOYW1lKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IEpTT04ucGFyc2Uoc3RyUGFyYW1zKTtcbiAgICAgICAgdGhpcy5pbXBvcnRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLlBhcmFtZXRlcnM7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYW1ldGVyTWl4aW5zOyIsImltcG9ydCB7RnVuY3RvciBhcyBCYXNlRnVuY3Rvcn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7cGxhdGZvcm19IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlckZ1bmN0b3IubWl4aW5zJztcblxuY2xhc3MgUGFyYW1ldGVyRnVuY3RvciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFsgUGFyYW1ldGVyRnVuY3Rvck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQYXJhbWV0ZXJGdW5jdG9yKCk7IiwiY29uc3QgUGFyYW1ldGVyRnVuY3Rvck1peGlucyA9IChGdW5jdG9yQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBGdW5jdG9yQ2xhc3N7IFxuICAgIGlzUGFyYW1ldGVyKHZhbCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmlmRWxzZShSLmlzKEFycmF5KSwgUi5hbGwoUi5pcyhOdW1iZXIpKSwgUi5hbHdheXMoZmFsc2UpKSh2YWwpO1xuICAgIH1cbiAgICBwYXJhbWV0ZXJNYXBXaXRoS2V5KGZuLCBwYXJhbWV0ZXJPYmplY3Qpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgUmVzID0gKGtleXMsIHN1Yk9iamVjdCkgPT4gUi5jb21wb3NlKFIuZnJvbVBhaXJzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFIubWFwKChba2V5LCBzdWJPYmplY3RdKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNQYXJhbWV0ZXIoc3ViT2JqZWN0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBmbihbLi4ua2V5cywga2V5XSwgc3ViT2JqZWN0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKFIuaXMoT2JqZWN0LCBzdWJPYmplY3QpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBSZXMoWy4uLmtleXMsIGtleV0sIHN1Yk9iamVjdCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgc3ViT2JqZWN0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSLnRvUGFpcnMpKHN1Yk9iamVjdCk7XG4gICAgICAgIHJldHVybiBSZXMoW10sIHBhcmFtZXRlck9iamVjdCk7XG4gICAgfSAgICAgICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFJ1bm5lck1peGlucyB9IGZyb20gJy4vcnVubmVyLm1peGlucyc7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0TGF5ZXIgY2xhc3MgcHJvdmlkZSBjb21tb24gdXNlIGxheWVyc1xuICogeyBtaXhXaXRoOiBbIERlbnNlTWl4aW5zIF0gfVxuICogQGNsYXNzIENhdXNhbE5ldExheWVyXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvcnVubmVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UnVubmVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbIFJ1bm5lck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRSdW5uZXIoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFJ1bm5lciB9IGZyb20gJy4vY2F1c2FsTmV0UnVubmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJzsiLCIvKipcbiAqIFRoaXMgUnVubmVyTWl4aW5zIGNsYXNzIHByb3ZpZGUgbWV0aG9kcyBmb3IgcnVubmVyIGNsYXNzLlxuICogQGNsYXNzIFJ1bm5lck1peGluc1xuICogQGV4dGVuZHMgQmFzZVJ1bm5lckNsYXNzXG4gKi9cbmNvbnN0IFJ1bm5lck1peGlucyA9ICggQmFzZVJ1bm5lckNsYXNzICk9PiBjbGFzcyBleHRlbmRzIEJhc2VSdW5uZXJDbGFzc3tcbiAgICBzZXQgTmV0UGFyYW1ldGVycyhwYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5uZXRQYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG4gICAgc2V0IE5ldExheWVycyhuZXRMYXllcnMpe1xuICAgICAgICB0aGlzLm5ldExheWVycyA9IG5ldExheWVycztcbiAgICB9XG4gICAgZ2V0IE5ldFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0UGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0UGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0UGFyYW1ldGVycztcbiAgICB9XG4gICAgZ2V0IE5ldExheWVycygpe1xuICAgICAgICBpZighdGhpcy5uZXRMYXllcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldExheWVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TGF5ZXJzO1xuICAgIH1cbiAgICBydW5PcEZsb3codmFsdWUsIGZsb3csIHBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBPcHNSdW5uZXIgPSBSLmFkZEluZGV4KFIucmVkdWNlKShSLl9fLHtyZXN1bHQ6IHZhbHVlLCB0cmFjZToge319LCBmbG93KTtcbiAgICAgICAgdmFyIHtyZXN1bHQsIHRyYWNlfSA9IE9wc1J1bm5lcigoe3Jlc3VsdCwgdHJhY2V9LCBub2RlLCBpZHgpPT57XG4gICAgICAgICAgICBpZihub2RlLlBhcmFtZXRlcil7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHBhcmFtZXRlcnNbbm9kZS5QYXJhbWV0ZXJdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtub2RlLk9wXShwYXJhbXMsIC4uLm5vZGUuQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtub2RlLk9wXSguLi5ub2RlLkFyZ3MpOyAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmFjZVtpZHhdID0gcmVzdWx0LnNoYXBlO1xuICAgICAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7cmVzdWx0LCB0cmFjZX07XG4gICAgfVxuXG4gICAgcnVuT3BMYXllcih2YWx1ZSwgbmV0LCBwYXJhbWV0ZXJzKXtcbiAgICAgICAgbGV0IHsgcmVzdWx0LCB0cmFjZSB9ID0gbmV0KHZhbHVlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICB9XG4gICAgcnVuTGF5ZXIodmFsdWUsIGxheWVyQ29uZmlndXJlLCBsYXllclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCB7TmFtZSwgVHlwZSwgRmxvdywgTmV0fSA9IGxheWVyQ29uZmlndXJlO1xuICAgICAgICBpZihUeXBlID09PSAnVGVuc29yJyl7XG4gICAgICAgICAgICBsZXQge3Jlc3VsdCwgdHJhY2V9ID0gdGhpcy5ydW5PcEZsb3codmFsdWUsIEZsb3csIGxheWVyUGFyYW1ldGVycyk7XG4gICAgICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0LCB0cmFjZX07XG4gICAgICAgIH0gICBcbiAgICAgICAgZWxzZSBpZihUeXBlID09PSAnTGF5ZXInKXtcbiAgICAgICAgICAgIGxldCB7cmVzdWx0LCB0cmFjZX0gPSB0aGlzLnJ1bk9wTGF5ZXIodmFsdWUsIE5ldCwgbGF5ZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB7W05hbWVdOiByZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSAgIFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3R5cGUgbXVzdCBiZSBlaXRoZXIgTGF5ZXIgb3IgVGVuc29yJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFjaW5nKHRyYWNlcywgbmFtZSwgdHJhY2Upe1xuICAgICAgICBpZih0cmFjZXMpe1xuICAgICAgICAgICAgdHJhY2VzLnB1c2goe1tuYW1lXTogdHJhY2V9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBydW4obGF5ZXJzLCBzYW1wbGVzLCBwYXJhbWV0ZXJzLCB0cmFjZXM9bnVsbCl7XG4gICAgICAgIGxldCBwaXBlVmFsdWUgPSB7UGlwZUlucHV0OiBzYW1wbGVzfSwgbGFzdExheWVyID0gJ1BpcGVJbnB1dCc7XG4gICAgICAgIGZvcihsZXQgbGF5ZXIgb2YgbGF5ZXJzKXtcbiAgICAgICAgICAgIGxldCBsYXllck91dHB1dCA9IHRoaXMucnVuTGF5ZXIocGlwZVZhbHVlW2xhc3RMYXllcl0sIGxheWVyLCBwYXJhbWV0ZXJzW2xheWVyLk5hbWVdKTtcbiAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgbGFzdExheWVyID0gbGF5ZXIuTmFtZTtcbiAgICAgICAgICAgIHRoaXMudHJhY2luZyh0cmFjZXMsIGxheWVyLk5hbWUsIGxheWVyT3V0cHV0LnRyYWNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0cmFjZXMpe1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3RyYWNlc30pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlVmFsdWVbbGFzdExheWVyXTtcbiAgICB9XG5cbiAgICBnZXQgUHJlZGljdG9yKCl7XG4gICAgICAgIGxldCBwcmVkaWN0TGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuUHJlZGljdDtcbiAgICAgICAgbGV0IHByZWRpY3RQYXJhbWV0ZXJzID0gdGhpcy5OZXRQYXJhbWV0ZXJzLlByZWRpY3RQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4ocHJlZGljdExheWVycywgc2FtcGxlcywgcHJlZGljdFBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgRW5jb2Rlcigpe1xuICAgICAgICBsZXQgZW5jb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRW5jb2RlO1xuICAgICAgICBsZXQgZW5jb2RlUGFyYW1ldGVycyA9IHRoaXMuTmV0UGFyYW1ldGVycy5FbmNvZGVQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4oZW5jb2RlTGF5ZXJzLCBzYW1wbGVzLCBlbmNvZGVQYXJhbWV0ZXJzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IERlY29kZXIoKXtcbiAgICAgICAgbGV0IGRlY29kZUxheWVycyA9IHRoaXMuTmV0TGF5ZXJzLkRlY29kZTtcbiAgICAgICAgbGV0IGRlY29kZVBhcmFtZXRlcnMgPSB0aGlzLk5ldFBhcmFtZXRlcnMuRGVjb2RlUGFyYW1ldGVycztcbiAgICAgICAgcmV0dXJuIChzYW1wbGVzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuKGRlY29kZUxheWVycywgc2FtcGxlcywgZGVjb2RlUGFyYW1ldGVycyk7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUnVubmVyTWl4aW5zO1xuIiwiZXhwb3J0IHsgY2F1c2FsTmV0TGF5ZXJzIH0gZnJvbSAnLi9DYXVzYWxOZXRMYXllcnMvaW5kZXgnO1xuZXhwb3J0IHsgY2F1c2FsTmV0UGFyYW1ldGVycywgUGFyYW1ldGVyTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4JztcbmV4cG9ydCB7IGNhdXNhbE5ldFJ1bm5lciwgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRSdW5uZXIvaW5kZXgnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOZXRNaXhpbnMgfSBmcm9tICcuL25ldC5taXhpbnMnO1xuIiwiLyoqXG4gKiBUaGlzIE5ldE1peGlucyBjbGFzcyBwcm92aWRlIG1peGluIGZvciBidWlsZGluZyBwaXBlbGluZVxuICogQGNsYXNzIE5ldE1peGluc1xuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9uZXQubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBOZXRNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZ2dlci5ncm91cEJlZ2luKCdzZXQgTmV0IGJ5IGNvbmZpZycpO1xuICAgICAgICBjb25zdCB7IE5ldCB9ID0gcGlwZWxpbmVDb25maWc7XG4gICAgICAgIGNvbnN0IHsgTGF5ZXJzLCBQYXJhbWV0ZXJzIH0gPSBOZXQ7IFxuICAgICAgICB0aGlzLkxheWVycyA9IExheWVyczsgICAgICAgXG4gICAgICAgIHRoaXMuUGFyYW1ldGVycy5zZXRPckluaXRQYXJhbXMoTGF5ZXJzLCBQYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBzZXQgTGF5ZXJzKGxheWVycyl7XG4gICAgICAgIHRoaXMubmV0TGF5ZXJzID0gbGF5ZXJzO1xuICAgIH1cblxuICAgIGdldCBMYXllcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TGF5ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRMYXllcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldExheWVycztcbiAgICB9XG5cbiAgICBzZXQgUGFyYW1ldGVycyhwYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5uZXRQYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG4gICAgZ2V0IFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0UGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0UnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBzZXQgTmV0KHJ1bm5lcil7XG4gICAgICAgIHRoaXMubmV0UnVubmVyID0gcnVubmVyO1xuICAgIH1cbiAgICBnZXQgTmV0KCl7XG4gICAgICAgIHRoaXMubmV0UnVubmVyLk5ldExheWVycyA9IHRoaXMuTGF5ZXJzO1xuICAgICAgICB0aGlzLm5ldFJ1bm5lci5OZXRQYXJhbWV0ZXJzID0gdGhpcy5QYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gdGhpcy5uZXRSdW5uZXI7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV0TWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9