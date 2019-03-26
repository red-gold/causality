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
          F = this.F;
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
/*! exports provided: causalNetLayers, causalNetParameters, ParameterMixins, causalNetRunner, RunnerMixins, LayerRunnerMixins */
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
 * This NetMixins class provide mixin for building pipeline
 * @class NetMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/net.mixins.babel.js]
 */
const LayerRunnerMixins = BasePipelineClass => class extends BasePipelineClass {
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
    this.LayerRunner.NetLayers = Layers;
    this.LayerRunner.NetParameters = Parameters(Layers);
    this.logger.groupEnd();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9kZW5zZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2NhdXNhbE5ldFBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFJ1bm5lci9jYXVzYWxOZXRSdW5uZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvcnVubmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvbGF5ZXJSdW5uZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRMYXllcnMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiRGVuc2VNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImxheWVyTmFtZXMiLCJuYW1lR2VuZXJhdG9yIiwibGF5ZXJUeXBlIiwibGF5ZXJJZHgiLCJsZW5ndGgiLCJuZXdOYW1lIiwicHVzaCIsIkRlbnNlTGF5ZXJNaXhpbnMiLCJQaXBlbGluZUNsYXNzIiwiZGVuc2UiLCJpbnB1dFNpemUiLCJvdXRwdXRTaXplIiwibmFtZSIsIk5hbWUiLCJUeXBlIiwiUGFyYW1ldGVycyIsIldlaWdodCIsIkJpYXMiLCJOZXQiLCJ2YWx1ZSIsInBhcmFtcyIsInRyYWNlIiwicmVzdWx0IiwiZG90IiwiYWRkIiwiQ2F1c2FsTmV0UGFyYW1ldGVycyIsIlN0b3JhZ2VNaXhpbnMiLCJQYXJhbWV0ZXJNaXhpbnMiLCJzdG9yYWdlIiwicGFyYW1ldGVyZnVuY3RvciIsInBhcmFtZXRlcnMiLCJTdG9yYWdlIiwiRiIsIlIiLCJDb3JlRnVuY3RvciIsImluZGV4REJTdG9yYWdlIiwiQmFzZVBhcmFtZXRlckNsYXNzIiwiUHJlZGljdFBhcmFtZXRlcnMiLCJQcmVkaWN0IiwiRXJyb3IiLCJFbmNvZGVQYXJhbWV0ZXJzIiwiRW5jb2RlIiwiRGVjb2RlUGFyYW1ldGVycyIsIkRlY29kZSIsInByZWRpY3RQYXJhbWV0ZXJzIiwiZW5jb2RlUGFyYW1ldGVycyIsImRlY29kZVBhcmFtZXRlcnMiLCJQYXJhbWV0ZXJTaXplcyIsInBhcmFtZXRlclNpemVzIiwiU2F2ZU1vZGVsRGlyIiwiZXhwb3J0UGFyYW1ldGVycyIsIkZuIiwicGFyYW0iLCJBcnJheSIsImZyb20iLCJkYXRhIiwiZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QiLCJmbiIsIlRyYXZlbGxlciIsImlzVGVuc29yIiwia1ZhbHMiLCJ0b1BhaXJzIiwicmVzIiwiayIsInZhbCIsInBhcmFtZXRlcnNTdW1tYXJ5IiwibWVhbiIsImluaXRQYXJhbVNpemVzQnlMYXllcnMiLCJsYXllcnMiLCJUIiwiR2V0UGFyYW1TaXplIiwiY29tcG9zZSIsImZyb21QYWlycyIsIm1hcCIsInAiLCJQcmVkaWN0U2l6ZSIsImdldEluIiwiRW5jb2RlU2l6ZSIsIkRlY29kZVNpemUiLCJpbXBvcnRQYXJhbWV0ZXJzIiwicGFyYW1PYmplY3QiLCJwcmVkaWN0UGFyYW1PYmplY3QiLCJlbmNvZGVQYXJhbU9iamVjdCIsImRlY29kZVBhcmFtT2JqZWN0IiwiU2V0T3JJbml0IiwiaW5pdFByZWRpY3QiLCJwYXJhbWV0ZXJNYXBXaXRoS2V5Iiwia2V5cyIsInBhcmFtU2l6ZSIsInBhcmFtVmFsdWUiLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsImFzVHlwZSIsInRlbnNvciIsIkluaXRQYXJhbWV0ZXJzIiwic2V0T3JJbml0UGFyYW1zIiwiZ2V0U2F2ZWRQYXJhbUxpc3QiLCJTYXZlRGlyIiwiZmlsZUxpc3QiLCJnZXRGaWxlTGlzdCIsImZpbGVOYW1lIiwicmVwbGFjZSIsInNhdmVQYXJhbXMiLCJ3cml0ZUZpbGUiLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZFBhcmFtcyIsInN0clBhcmFtcyIsInJlYWRGaWxlIiwicGFyc2UiLCJQYXJhbWV0ZXJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIiwiRnVuY3RvckNsYXNzIiwiaXNQYXJhbWV0ZXIiLCJpZkVsc2UiLCJpcyIsImFsbCIsIk51bWJlciIsImFsd2F5cyIsInBhcmFtZXRlck9iamVjdCIsIlJlcyIsInN1Yk9iamVjdCIsImtleSIsIk9iamVjdCIsIkNhdXNhbE5ldFJ1bm5lciIsIlJ1bm5lck1peGlucyIsIkJhc2VSdW5uZXJDbGFzcyIsIk5ldFBhcmFtZXRlcnMiLCJuZXRQYXJhbWV0ZXJzIiwiTmV0TGF5ZXJzIiwibmV0TGF5ZXJzIiwicnVuT3BGbG93IiwiZmxvdyIsIk9wc1J1bm5lciIsImFkZEluZGV4IiwicmVkdWNlIiwiX18iLCJub2RlIiwiaWR4IiwiUGFyYW1ldGVyIiwiT3AiLCJBcmdzIiwic2hhcGUiLCJydW5PcExheWVyIiwibmV0IiwicnVuTGF5ZXIiLCJsYXllckNvbmZpZ3VyZSIsImxheWVyUGFyYW1ldGVycyIsIkZsb3ciLCJ0cmFjaW5nIiwidHJhY2VzIiwicnVuIiwic2FtcGxlcyIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsImxhc3RMYXllciIsImxheWVyIiwibGF5ZXJPdXRwdXQiLCJsb2dnZXIiLCJkZWJ1ZyIsIlByZWRpY3RvciIsInByZWRpY3RMYXllcnMiLCJFbmNvZGVyIiwiZW5jb2RlTGF5ZXJzIiwiRGVjb2RlciIsImRlY29kZUxheWVycyIsIkxheWVyUnVubmVyTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiZ3JvdXBCZWdpbiIsIkxheWVycyIsIkxheWVyUnVubmVyIiwiZ3JvdXBFbmQiLCJydW5uZXIiLCJsYXllclJ1bm5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtB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ZCxDQUErQjtBQUMzRUMsYUFBVyxDQUFDQyxjQUFELEVBQWdCO0FBQ3ZCLFFBQUcsTUFBTUQsV0FBVCxFQUFxQjtBQUNqQixZQUFNQSxXQUFOLENBQWtCQyxjQUFsQjtBQUNIOztBQUNELFNBQUtYLE1BQUwsQ0FBWVksVUFBWixDQUF1QixtQkFBdkI7QUFDQSxVQUFNO0FBQUV6SjtBQUFGLFFBQVV3SixjQUFoQjtBQUNBLFVBQU07QUFBRUUsWUFBRjtBQUFVN0o7QUFBVixRQUF5QkcsR0FBL0I7QUFDQSxTQUFLMkosV0FBTCxDQUFpQjNDLFNBQWpCLEdBQTZCMEMsTUFBN0I7QUFDQSxTQUFLQyxXQUFMLENBQWlCN0MsYUFBakIsR0FBaUNqSCxVQUFVLENBQUM2SixNQUFELENBQTNDO0FBQ0EsU0FBS2IsTUFBTCxDQUFZZSxRQUFaO0FBQ0g7O0FBRUQsTUFBSUQsV0FBSixDQUFnQkUsTUFBaEIsRUFBdUI7QUFDbkIsU0FBS0MsV0FBTCxHQUFtQkQsTUFBbkI7QUFDSDs7QUFDRCxNQUFJRixXQUFKLEdBQWlCO0FBQ2IsUUFBRyxDQUFDLEtBQUtHLFdBQVQsRUFBcUI7QUFDakIsWUFBTXpJLEtBQUssQ0FBQyx3QkFBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLeUksV0FBWjtBQUNIOztBQXJCMEUsQ0FBL0U7O0FBd0JlVCxnRkFBZixFOzs7Ozs7Ozs7OztBQy9CQSw2RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2xheWVyLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sYXllclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbGF5ZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEZW5zZU1peGlucyB9IGZyb20gJy4vZGVuc2UubWl4aW5zJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRMYXllciBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2UgbGF5ZXJzXG4gKiB7IG1peFdpdGg6IFsgTGF5ZXJNaXhpbnMsIERlbnNlTWl4aW5zIF0gfVxuICogQGNsYXNzIENhdXNhbE5ldExheWVyXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKi9cbmNsYXNzIENhdXNhbE5ldExheWVycyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgWyBEZW5zZU1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYXllck5hbWVzID0gW107XG4gICAgfVxuICAgIG5hbWVHZW5lcmF0b3IobGF5ZXJUeXBlKXtcbiAgICAgICAgY29uc3QgbGF5ZXJJZHggPSB0aGlzLmxheWVyTmFtZXMubGVuZ3RoOyBcbiAgICAgICAgbGV0IG5ld05hbWUgPSBsYXllclR5cGUgKyAnLycgKyBsYXllcklkeDtcbiAgICAgICAgdGhpcy5sYXllck5hbWVzLnB1c2gobmV3TmFtZSk7XG4gICAgICAgIHJldHVybiBuZXdOYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldExheWVycygpOyIsImNvbnN0IERlbnNlTGF5ZXJNaXhpbnMgPSAoUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIFBpcGVsaW5lQ2xhc3N7XG4gICAgLyoqXG4gICAgICogU2ltcGxlIGRlbnNlIGxheWVyXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gaW5wdXRTaXplIC0gc2l6ZSBvZiBuZXQgaW5wdXRcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBvdXRwdXRTaXplIC0gc2l6ZSBvZiBuZXQgb3V0cHV0XG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbmFtZSAtIGxheWVyIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGxheWVyXG4gICAgICovXG4gICAgZGVuc2UoaW5wdXRTaXplLCBvdXRwdXRTaXplLCBuYW1lKXtcbiAgICAgICAgaWYoIW5hbWUpe1xuICAgICAgICAgICAgbmFtZSA9IHRoaXMubmFtZUdlbmVyYXRvcignZGVuc2UnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIE5hbWU6IG5hbWUsIFR5cGU6ICdMYXllcicsXG4gICAgICAgICAgICBQYXJhbWV0ZXJzOiB7IFdlaWdodDogW2lucHV0U2l6ZSwgb3V0cHV0U2l6ZV0sIEJpYXM6IFtvdXRwdXRTaXplXSB9LFxuICAgICAgICAgICAgTmV0OiBmdW5jdGlvbih2YWx1ZSwgcGFyYW1zKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYWNlID0ge307XG4gICAgICAgICAgICAgICAgICAgIGxldCB7V2VpZ2h0LCBCaWFzfSA9IHBhcmFtcztcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlLmRvdChXZWlnaHQpLmFkZChCaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0LCB0cmFjZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERlbnNlTGF5ZXJNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRMYXllcnMgfSBmcm9tICcuL2NhdXNhbE5ldExheWVycyc7IiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFN0b3JhZ2VNaXhpbnMsIGluZGV4REJTdG9yYWdlIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1ldGVyTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXIubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgcGFyYW1ldGVyZnVuY3RvciB9IGZyb20gJy4vcGFyYW1ldGVyRnVuY3Rvcic7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0TGF5ZXIgY2xhc3MgcHJvdmlkZSBjb21tb24gdXNlIGxheWVyc1xuICogeyBtaXhXaXRoOiBbIERlbnNlTWl4aW5zIF0gfVxuICogQGNsYXNzIENhdXNhbE5ldExheWVyXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKi9cbmNsYXNzIENhdXNhbE5ldFBhcmFtZXRlcnMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFtTdG9yYWdlTWl4aW5zLCBQYXJhbWV0ZXJNaXhpbnNdICl7XG4gICAgY29uc3RydWN0b3Ioc3RvcmFnZSwgcGFyYW1ldGVyZnVuY3Rvcil7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IHN0b3JhZ2U7XG4gICAgICAgIHRoaXMuRiA9IHBhcmFtZXRlcmZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICB9XG59ICAgXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRQYXJhbWV0ZXJzKGluZGV4REJTdG9yYWdlLCBwYXJhbWV0ZXJmdW5jdG9yKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFBhcmFtZXRlcnMgfSBmcm9tICcuL2NhdXNhbE5ldFBhcmFtZXRlcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlci5taXhpbnMnOyIsImNvbnN0IFBhcmFtZXRlck1peGlucyA9IChCYXNlUGFyYW1ldGVyQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGFyYW1ldGVyQ2xhc3N7IFxuICAgIFxuICAgIGdldCBQcmVkaWN0UGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzIHx8ICF0aGlzLnBhcmFtZXRlcnMuUHJlZGljdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5QcmVkaWN0O1xuICAgIH1cbiAgICBcbiAgICBnZXQgRW5jb2RlUGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzIHx8ICF0aGlzLnBhcmFtZXRlcnMuRW5jb2RlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLkVuY29kZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IERlY29kZVBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyB8fCAhdGhpcy5wYXJhbWV0ZXJzLkRlY29kZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5EZWNvZGU7XG4gICAgfVxuICAgIFxuICAgIHNldCBQcmVkaWN0UGFyYW1ldGVycyhwcmVkaWN0UGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9ICh0aGlzLnBhcmFtZXRlcnMpPyB0aGlzLnBhcmFtZXRlcnM6IHt9O1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuUHJlZGljdCA9IHByZWRpY3RQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgRW5jb2RlUGFyYW1ldGVycyhlbmNvZGVQYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gKHRoaXMucGFyYW1ldGVycyk/IHRoaXMucGFyYW1ldGVyczoge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5FbmNvZGUgPSBlbmNvZGVQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgRGVjb2RlUGFyYW1ldGVycyhkZWNvZGVQYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gKHRoaXMucGFyYW1ldGVycyk/IHRoaXMucGFyYW1ldGVyczoge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5EZWNvZGUgPSBkZWNvZGVQYXJhbWV0ZXJzO1xuICAgIH1cblxuICAgIHNldCBQYXJhbWV0ZXJTaXplcyhwYXJhbWV0ZXJTaXplcyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyU2l6ZXMgPSBwYXJhbWV0ZXJTaXplcztcbiAgICB9XG5cbiAgICBnZXQgUGFyYW1ldGVyU2l6ZXMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVyU2l6ZXMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlclNpemVzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJTaXplcztcbiAgICB9XG4gICAgXG4gICAgZ2V0IFNhdmVNb2RlbERpcigpe1xuICAgICAgICByZXR1cm4gJ3NhdmVNb2RlbC8nO1xuICAgIH1cbiAgICBcbiAgICBleHBvcnRQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChhc3luYyAoKT0+e1xuICAgICAgICAgICAgY29uc3QgRm4gPSBhc3luYyAocGFyYW0pPT4oQXJyYXkuZnJvbShhd2FpdCBwYXJhbS5kYXRhKCkpKTtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSBhd2FpdCB0aGlzLmV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHRoaXMucGFyYW1ldGVycywgRm4pO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICBcbiAgICBhc3luYyBleHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdChwYXJhbXMsIGZuKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVHJhdmVsbGVyID0gYXN5bmMgKHBhcmFtcywgZm4pPT57XG4gICAgICAgICAgICBpZih0aGlzLmlzVGVuc29yKHBhcmFtcykpe1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBmbihwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQga1ZhbHMgPSBSLnRvUGFpcnMocGFyYW1zKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0ge307XG4gICAgICAgICAgICAgICAgZm9yKGxldCBbaywgdmFsXSBvZiBrVmFscyl7XG4gICAgICAgICAgICAgICAgICAgIHJlc1trXSA9IGF3YWl0IFRyYXZlbGxlcih2YWwsIGZuKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhd2FpdCBUcmF2ZWxsZXIocGFyYW1zLCBmbik7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHBhcmFtZXRlcnNTdW1tYXJ5KCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlciBtdXN0IGJlIHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IEZuID0gYXN5bmMgKHBhcmFtKT0+QXJyYXkuZnJvbShhd2FpdCBwYXJhbS5tZWFuKCkuZGF0YSgpKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QodGhpcy5wYXJhbWV0ZXJzLCBGbik7XG4gICAgfVxuICAgIFxuICAgIGluaXRQYXJhbVNpemVzQnlMYXllcnMobGF5ZXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc3QgR2V0UGFyYW1TaXplID0gUi5jb21wb3NlKFIuZnJvbVBhaXJzLCBSLm1hcChwPT5bcC5OYW1lLCBwLlBhcmFtZXRlcnNdKSk7XG4gICAgICAgIGNvbnN0IFByZWRpY3RTaXplID0gR2V0UGFyYW1TaXplKEYuZ2V0SW4oWydQcmVkaWN0J10sIGxheWVycywgW10pKTtcbiAgICAgICAgY29uc3QgRW5jb2RlU2l6ZSAgPSBHZXRQYXJhbVNpemUoRi5nZXRJbihbJ0VuY29kZSddLCBsYXllcnMsIFtdKSk7XG4gICAgICAgIGNvbnN0IERlY29kZVNpemUgID0gR2V0UGFyYW1TaXplKEYuZ2V0SW4oWydEZWNvZGUnXSwgbGF5ZXJzLCBbXSkpOyBcbiAgICAgICAgdGhpcy5QYXJhbWV0ZXJTaXplcyA9IHtQcmVkaWN0U2l6ZSwgRW5jb2RlU2l6ZSwgRGVjb2RlU2l6ZX07XG4gICAgfVxuXG4gICAgaW1wb3J0UGFyYW1ldGVycyhwYXJhbU9iamVjdCl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIEYgPSB0aGlzLkY7XG4gICAgICAgIGxldCBwcmVkaWN0UGFyYW1PYmplY3QgPSBGLmdldEluKFsnUHJlZGljdCddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZW5jb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0VuY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZGVjb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0RlY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBjb25zdCB7IFByZWRpY3RTaXplLCBFbmNvZGVTaXplLCBEZWNvZGVTaXplIH0gPSB0aGlzLlBhcmFtZXRlclNpemVzO1xuICAgICAgICBjb25zdCBTZXRPckluaXQgPSAoIGluaXRQcmVkaWN0LCBwYXJhbU9iamVjdCApPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGLnBhcmFtZXRlck1hcFdpdGhLZXkoKGtleXMsIHBhcmFtU2l6ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbVZhbHVlID0gdGhpcy5GLmdldEluKGtleXMsIHBhcmFtT2JqZWN0LCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhcmFtVmFsdWUgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBULnZhcmlhYmxlKFQucmFuZG9tTm9ybWFsKHBhcmFtU2l6ZSkuYXNUeXBlKCdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVC52YXJpYWJsZShULnRlbnNvcihwYXJhbVZhbHVlLCBwYXJhbVNpemUsICdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LCBpbml0UHJlZGljdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5QcmVkaWN0UGFyYW1ldGVycyA9IFNldE9ySW5pdCggUHJlZGljdFNpemUsIHByZWRpY3RQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkVuY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBFbmNvZGVTaXplLCBlbmNvZGVQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkRlY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBEZWNvZGVTaXplLCBkZWNvZGVQYXJhbU9iamVjdCApOyBcbiAgICB9XG5cbiAgICBJbml0UGFyYW1ldGVycyhwYXJhbU9iamVjdD17fSl7XG4gICAgICAgIHJldHVybiAobGF5ZXJzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0T3JJbml0UGFyYW1zKGxheWVycywgcGFyYW1PYmplY3QpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldE9ySW5pdFBhcmFtcyhsYXllcnMsIHBhcmFtT2JqZWN0KXtcbiAgICAgICAgdGhpcy5pbml0UGFyYW1TaXplc0J5TGF5ZXJzKGxheWVycyk7XG4gICAgICAgIHRoaXMuaW1wb3J0UGFyYW1ldGVycyhwYXJhbU9iamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkUGFyYW1MaXN0KCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2UsIFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgU3RvcmFnZS5nZXRGaWxlTGlzdChTYXZlRGlyKTtcbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0Lm1hcChmaWxlTmFtZT0+ZmlsZU5hbWUucmVwbGFjZShTYXZlRGlyLCcnKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGNvbnN0IFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXhwb3J0UGFyYW1ldGVycygpO1xuICAgICAgICBhd2FpdCBTdG9yYWdlLndyaXRlRmlsZShTYXZlRGlyICsgZmlsZU5hbWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZSwgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBsZXQgc3RyUGFyYW1zID0gYXdhaXQgU3RvcmFnZS5yZWFkRmlsZShTYXZlRGlyK2ZpbGVOYW1lKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IEpTT04ucGFyc2Uoc3RyUGFyYW1zKTtcbiAgICAgICAgdGhpcy5pbXBvcnRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLlBhcmFtZXRlcnM7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYW1ldGVyTWl4aW5zOyIsImltcG9ydCB7RnVuY3RvciBhcyBCYXNlRnVuY3Rvcn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7cGxhdGZvcm19IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlckZ1bmN0b3IubWl4aW5zJztcblxuY2xhc3MgUGFyYW1ldGVyRnVuY3RvciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFsgUGFyYW1ldGVyRnVuY3Rvck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQYXJhbWV0ZXJGdW5jdG9yKCk7IiwiY29uc3QgUGFyYW1ldGVyRnVuY3Rvck1peGlucyA9IChGdW5jdG9yQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBGdW5jdG9yQ2xhc3N7IFxuICAgIGlzUGFyYW1ldGVyKHZhbCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmlmRWxzZShSLmlzKEFycmF5KSwgUi5hbGwoUi5pcyhOdW1iZXIpKSwgUi5hbHdheXMoZmFsc2UpKSh2YWwpO1xuICAgIH1cbiAgICBwYXJhbWV0ZXJNYXBXaXRoS2V5KGZuLCBwYXJhbWV0ZXJPYmplY3Qpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgUmVzID0gKGtleXMsIHN1Yk9iamVjdCkgPT4gUi5jb21wb3NlKFIuZnJvbVBhaXJzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFIubWFwKChba2V5LCBzdWJPYmplY3RdKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNQYXJhbWV0ZXIoc3ViT2JqZWN0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBmbihbLi4ua2V5cywga2V5XSwgc3ViT2JqZWN0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKFIuaXMoT2JqZWN0LCBzdWJPYmplY3QpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBSZXMoWy4uLmtleXMsIGtleV0sIHN1Yk9iamVjdCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgc3ViT2JqZWN0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSLnRvUGFpcnMpKHN1Yk9iamVjdCk7XG4gICAgICAgIHJldHVybiBSZXMoW10sIHBhcmFtZXRlck9iamVjdCk7XG4gICAgfSAgICAgICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFJ1bm5lck1peGlucyB9IGZyb20gJy4vcnVubmVyLm1peGlucyc7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0TGF5ZXIgY2xhc3MgcHJvdmlkZSBjb21tb24gdXNlIGxheWVyc1xuICogeyBtaXhXaXRoOiBbIERlbnNlTWl4aW5zIF0gfVxuICogQGNsYXNzIENhdXNhbE5ldExheWVyXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvcnVubmVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UnVubmVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbIFJ1bm5lck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRSdW5uZXIoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFJ1bm5lciB9IGZyb20gJy4vY2F1c2FsTmV0UnVubmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJzsiLCIvKipcbiAqIFRoaXMgUnVubmVyTWl4aW5zIGNsYXNzIHByb3ZpZGUgbWV0aG9kcyBmb3IgcnVubmVyIGNsYXNzLlxuICogQGNsYXNzIFJ1bm5lck1peGluc1xuICogQGV4dGVuZHMgQmFzZVJ1bm5lckNsYXNzXG4gKi9cbmNvbnN0IFJ1bm5lck1peGlucyA9ICggQmFzZVJ1bm5lckNsYXNzICk9PiBjbGFzcyBleHRlbmRzIEJhc2VSdW5uZXJDbGFzc3tcbiAgICBzZXQgTmV0UGFyYW1ldGVycyhwYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5uZXRQYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG4gICAgc2V0IE5ldExheWVycyhuZXRMYXllcnMpe1xuICAgICAgICB0aGlzLm5ldExheWVycyA9IG5ldExheWVycztcbiAgICB9XG4gICAgZ2V0IE5ldFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0UGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0UGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0UGFyYW1ldGVycztcbiAgICB9XG4gICAgZ2V0IE5ldExheWVycygpe1xuICAgICAgICBpZighdGhpcy5uZXRMYXllcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldExheWVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TGF5ZXJzO1xuICAgIH1cbiAgICBydW5PcEZsb3codmFsdWUsIGZsb3csIHBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBPcHNSdW5uZXIgPSBSLmFkZEluZGV4KFIucmVkdWNlKShSLl9fLHtyZXN1bHQ6IHZhbHVlLCB0cmFjZToge319LCBmbG93KTtcbiAgICAgICAgdmFyIHtyZXN1bHQsIHRyYWNlfSA9IE9wc1J1bm5lcigoe3Jlc3VsdCwgdHJhY2V9LCBub2RlLCBpZHgpPT57XG4gICAgICAgICAgICBpZihub2RlLlBhcmFtZXRlcil7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHBhcmFtZXRlcnNbbm9kZS5QYXJhbWV0ZXJdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtub2RlLk9wXShwYXJhbXMsIC4uLm5vZGUuQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtub2RlLk9wXSguLi5ub2RlLkFyZ3MpOyAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmFjZVtpZHhdID0gcmVzdWx0LnNoYXBlO1xuICAgICAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7cmVzdWx0LCB0cmFjZX07XG4gICAgfVxuXG4gICAgcnVuT3BMYXllcih2YWx1ZSwgbmV0LCBwYXJhbWV0ZXJzKXtcbiAgICAgICAgbGV0IHsgcmVzdWx0LCB0cmFjZSB9ID0gbmV0KHZhbHVlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICB9XG4gICAgcnVuTGF5ZXIodmFsdWUsIGxheWVyQ29uZmlndXJlLCBsYXllclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCB7TmFtZSwgVHlwZSwgRmxvdywgTmV0fSA9IGxheWVyQ29uZmlndXJlO1xuICAgICAgICBpZihUeXBlID09PSAnVGVuc29yJyl7XG4gICAgICAgICAgICBsZXQge3Jlc3VsdCwgdHJhY2V9ID0gdGhpcy5ydW5PcEZsb3codmFsdWUsIEZsb3csIGxheWVyUGFyYW1ldGVycyk7XG4gICAgICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0LCB0cmFjZX07XG4gICAgICAgIH0gICBcbiAgICAgICAgZWxzZSBpZihUeXBlID09PSAnTGF5ZXInKXtcbiAgICAgICAgICAgIGxldCB7cmVzdWx0LCB0cmFjZX0gPSB0aGlzLnJ1bk9wTGF5ZXIodmFsdWUsIE5ldCwgbGF5ZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB7W05hbWVdOiByZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSAgIFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3R5cGUgbXVzdCBiZSBlaXRoZXIgTGF5ZXIgb3IgVGVuc29yJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFjaW5nKHRyYWNlcywgbmFtZSwgdHJhY2Upe1xuICAgICAgICBpZih0cmFjZXMpe1xuICAgICAgICAgICAgdHJhY2VzLnB1c2goe1tuYW1lXTogdHJhY2V9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBydW4obGF5ZXJzLCBzYW1wbGVzLCBwYXJhbWV0ZXJzLCB0cmFjZXM9bnVsbCl7XG4gICAgICAgIGxldCBwaXBlVmFsdWUgPSB7UGlwZUlucHV0OiBzYW1wbGVzfSwgbGFzdExheWVyID0gJ1BpcGVJbnB1dCc7XG4gICAgICAgIGZvcihsZXQgbGF5ZXIgb2YgbGF5ZXJzKXtcbiAgICAgICAgICAgIGxldCBsYXllck91dHB1dCA9IHRoaXMucnVuTGF5ZXIocGlwZVZhbHVlW2xhc3RMYXllcl0sIGxheWVyLCBwYXJhbWV0ZXJzW2xheWVyLk5hbWVdKTtcbiAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgbGFzdExheWVyID0gbGF5ZXIuTmFtZTtcbiAgICAgICAgICAgIHRoaXMudHJhY2luZyh0cmFjZXMsIGxheWVyLk5hbWUsIGxheWVyT3V0cHV0LnRyYWNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0cmFjZXMpe1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3RyYWNlc30pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlVmFsdWVbbGFzdExheWVyXTtcbiAgICB9XG5cbiAgICBnZXQgUHJlZGljdG9yKCl7XG4gICAgICAgIGxldCBwcmVkaWN0TGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuUHJlZGljdDtcbiAgICAgICAgbGV0IHByZWRpY3RQYXJhbWV0ZXJzID0gdGhpcy5OZXRQYXJhbWV0ZXJzLlByZWRpY3RQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4ocHJlZGljdExheWVycywgc2FtcGxlcywgcHJlZGljdFBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgRW5jb2Rlcigpe1xuICAgICAgICBsZXQgZW5jb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRW5jb2RlO1xuICAgICAgICBsZXQgZW5jb2RlUGFyYW1ldGVycyA9IHRoaXMuTmV0UGFyYW1ldGVycy5FbmNvZGVQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4oZW5jb2RlTGF5ZXJzLCBzYW1wbGVzLCBlbmNvZGVQYXJhbWV0ZXJzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IERlY29kZXIoKXtcbiAgICAgICAgbGV0IGRlY29kZUxheWVycyA9IHRoaXMuTmV0TGF5ZXJzLkRlY29kZTtcbiAgICAgICAgbGV0IGRlY29kZVBhcmFtZXRlcnMgPSB0aGlzLk5ldFBhcmFtZXRlcnMuRGVjb2RlUGFyYW1ldGVycztcbiAgICAgICAgcmV0dXJuIChzYW1wbGVzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuKGRlY29kZUxheWVycywgc2FtcGxlcywgZGVjb2RlUGFyYW1ldGVycyk7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUnVubmVyTWl4aW5zO1xuIiwiZXhwb3J0IHsgY2F1c2FsTmV0TGF5ZXJzIH0gZnJvbSAnLi9DYXVzYWxOZXRMYXllcnMvaW5kZXgnO1xuZXhwb3J0IHsgY2F1c2FsTmV0UGFyYW1ldGVycywgUGFyYW1ldGVyTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4JztcbmV4cG9ydCB7IGNhdXNhbE5ldFJ1bm5lciwgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRSdW5uZXIvaW5kZXgnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXllclJ1bm5lck1peGlucyB9IGZyb20gJy4vbGF5ZXJSdW5uZXIubWl4aW5zJztcbiIsIi8qKlxuICogVGhpcyBOZXRNaXhpbnMgY2xhc3MgcHJvdmlkZSBtaXhpbiBmb3IgYnVpbGRpbmcgcGlwZWxpbmVcbiAqIEBjbGFzcyBOZXRNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvbmV0Lm1peGlucy5iYWJlbC5qc11cbiAqL1xuY29uc3QgTGF5ZXJSdW5uZXJNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZ2dlci5ncm91cEJlZ2luKCdzZXQgTmV0IGJ5IGNvbmZpZycpO1xuICAgICAgICBjb25zdCB7IE5ldCB9ID0gcGlwZWxpbmVDb25maWc7XG4gICAgICAgIGNvbnN0IHsgTGF5ZXJzLCBQYXJhbWV0ZXJzIH0gPSBOZXQ7IFxuICAgICAgICB0aGlzLkxheWVyUnVubmVyLk5ldExheWVycyA9IExheWVyczsgICAgICAgXG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycyA9IFBhcmFtZXRlcnMoTGF5ZXJzKTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBzZXQgTGF5ZXJSdW5uZXIocnVubmVyKXtcbiAgICAgICAgdGhpcy5sYXllclJ1bm5lciA9IHJ1bm5lcjtcbiAgICB9XG4gICAgZ2V0IExheWVyUnVubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmxheWVyUnVubmVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdsYXllclJ1bm5lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJSdW5uZXI7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJSdW5uZXJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=