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

    const PredictParametersLenses = () => this.NetParameters.PredictParameters;

    return samples => {
      let predictParameters = PredictParametersLenses();
      return this.run(predictLayers, samples, predictParameters);
    };
  }

  get Encoder() {
    let encodeLayers = this.NetLayers.Encode;

    const EncodeParametersLenses = () => this.NetParameters.EncodeParameters;

    return samples => {
      let encodeParameters = EncodeParametersLenses();
      return this.run(encodeLayers, samples, encodeParameters);
    };
  }

  get Decoder() {
    let decodeLayers = this.NetLayers.Decode;

    const DecodeParametersLenses = () => this.NetParameters.EncodeParameters;

    return samples => {
      let decodeParameters = DecodeParametersLenses();
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
 * This NetMixins class provide mixin for building pipeline
 * @class NetMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/net.mixins.babel.js]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9kZW5zZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2NhdXNhbE5ldFBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFJ1bm5lci9jYXVzYWxOZXRSdW5uZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvcnVubmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvbGF5ZXJSdW5uZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRMYXllcnMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiRGVuc2VNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImxheWVyTmFtZXMiLCJuYW1lR2VuZXJhdG9yIiwibGF5ZXJUeXBlIiwibGF5ZXJJZHgiLCJsZW5ndGgiLCJuZXdOYW1lIiwicHVzaCIsIkRlbnNlTGF5ZXJNaXhpbnMiLCJQaXBlbGluZUNsYXNzIiwiZGVuc2UiLCJpbnB1dFNpemUiLCJvdXRwdXRTaXplIiwibmFtZSIsIk5hbWUiLCJUeXBlIiwiUGFyYW1ldGVycyIsIldlaWdodCIsIkJpYXMiLCJOZXQiLCJ2YWx1ZSIsInBhcmFtcyIsInRyYWNlIiwicmVzdWx0IiwiZG90IiwiYWRkIiwiQ2F1c2FsTmV0UGFyYW1ldGVycyIsIlN0b3JhZ2VNaXhpbnMiLCJQYXJhbWV0ZXJNaXhpbnMiLCJzdG9yYWdlIiwicGFyYW1ldGVyZnVuY3RvciIsInBhcmFtZXRlcnMiLCJTdG9yYWdlIiwiRiIsIlIiLCJDb3JlRnVuY3RvciIsImluZGV4REJTdG9yYWdlIiwiQmFzZVBhcmFtZXRlckNsYXNzIiwiUHJlZGljdFBhcmFtZXRlcnMiLCJQcmVkaWN0IiwiRXJyb3IiLCJFbmNvZGVQYXJhbWV0ZXJzIiwiRW5jb2RlIiwiRGVjb2RlUGFyYW1ldGVycyIsIkRlY29kZSIsInByZWRpY3RQYXJhbWV0ZXJzIiwiZW5jb2RlUGFyYW1ldGVycyIsImRlY29kZVBhcmFtZXRlcnMiLCJQYXJhbWV0ZXJTaXplcyIsInBhcmFtZXRlclNpemVzIiwiU2F2ZU1vZGVsRGlyIiwiZXhwb3J0UGFyYW1ldGVycyIsIkZuIiwicGFyYW0iLCJBcnJheSIsImZyb20iLCJkYXRhIiwiZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QiLCJmbiIsIlRyYXZlbGxlciIsImlzVGVuc29yIiwia1ZhbHMiLCJ0b1BhaXJzIiwicmVzIiwiayIsInZhbCIsInBhcmFtZXRlcnNTdW1tYXJ5IiwibWVhbiIsImluaXRQYXJhbVNpemVzQnlMYXllcnMiLCJsYXllcnMiLCJUIiwiR2V0UGFyYW1TaXplIiwiY29tcG9zZSIsImZyb21QYWlycyIsIm1hcCIsInAiLCJQcmVkaWN0U2l6ZSIsImdldEluIiwiRW5jb2RlU2l6ZSIsIkRlY29kZVNpemUiLCJpbXBvcnRQYXJhbWV0ZXJzIiwicGFyYW1PYmplY3QiLCJwcmVkaWN0UGFyYW1PYmplY3QiLCJlbmNvZGVQYXJhbU9iamVjdCIsImRlY29kZVBhcmFtT2JqZWN0IiwiU2V0T3JJbml0IiwiaW5pdFByZWRpY3QiLCJwYXJhbWV0ZXJNYXBXaXRoS2V5Iiwia2V5cyIsInBhcmFtU2l6ZSIsInBhcmFtVmFsdWUiLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsImFzVHlwZSIsInRlbnNvciIsIkluaXRQYXJhbWV0ZXJzIiwic2V0T3JJbml0UGFyYW1zIiwiZ2V0U2F2ZWRQYXJhbUxpc3QiLCJTYXZlRGlyIiwiZmlsZUxpc3QiLCJnZXRGaWxlTGlzdCIsImZpbGVOYW1lIiwicmVwbGFjZSIsInNhdmVQYXJhbXMiLCJ3cml0ZUZpbGUiLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZFBhcmFtcyIsInN0clBhcmFtcyIsInJlYWRGaWxlIiwicGFyc2UiLCJQYXJhbWV0ZXJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIiwiRnVuY3RvckNsYXNzIiwiaXNQYXJhbWV0ZXIiLCJpZkVsc2UiLCJpcyIsImFsbCIsIk51bWJlciIsImFsd2F5cyIsInBhcmFtZXRlck9iamVjdCIsIlJlcyIsInN1Yk9iamVjdCIsImtleSIsIk9iamVjdCIsIkNhdXNhbE5ldFJ1bm5lciIsIlJ1bm5lck1peGlucyIsIkJhc2VSdW5uZXJDbGFzcyIsIk5ldFBhcmFtZXRlcnMiLCJuZXRQYXJhbWV0ZXJzIiwiTmV0TGF5ZXJzIiwibmV0TGF5ZXJzIiwicnVuT3BGbG93IiwiZmxvdyIsIk9wc1J1bm5lciIsImFkZEluZGV4IiwicmVkdWNlIiwiX18iLCJub2RlIiwiaWR4IiwiUGFyYW1ldGVyIiwiT3AiLCJBcmdzIiwic2hhcGUiLCJydW5PcExheWVyIiwibmV0IiwicnVuTGF5ZXIiLCJsYXllckNvbmZpZ3VyZSIsImxheWVyUGFyYW1ldGVycyIsIkZsb3ciLCJ0cmFjaW5nIiwidHJhY2VzIiwicnVuIiwic2FtcGxlcyIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsImxhc3RMYXllciIsImxheWVyIiwibGF5ZXJPdXRwdXQiLCJsb2dnZXIiLCJkZWJ1ZyIsIlByZWRpY3RvciIsInByZWRpY3RMYXllcnMiLCJQcmVkaWN0UGFyYW1ldGVyc0xlbnNlcyIsIkVuY29kZXIiLCJlbmNvZGVMYXllcnMiLCJFbmNvZGVQYXJhbWV0ZXJzTGVuc2VzIiwiRGVjb2RlciIsImRlY29kZUxheWVycyIsIkRlY29kZVBhcmFtZXRlcnNMZW5zZXMiLCJMYXllclJ1bm5lck1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiTGF5ZXJSdW5uZXIiLCJQYXJhbWV0ZXJJbml0aWFsaXplciIsInBhcmFtZXRlckluaXRpYWxpemVyIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsIkxvZ2dlciIsImdyb3VwQmVnaW4iLCJMYXllcnMiLCJncm91cEVuZCIsInJ1bm5lciIsImxheWVyUnVubmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qs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RUFBZ0I7QUFDdkIsUUFBRyxNQUFNRCxXQUFULEVBQXFCO0FBQ2pCLFlBQU1BLFdBQU4sQ0FBa0JDLGNBQWxCO0FBQ0g7O0FBQ0QsU0FBS0MsTUFBTCxDQUFZQyxVQUFaLENBQXVCLDJCQUF2QjtBQUNBLFVBQU07QUFBRWhLO0FBQUYsUUFBVThKLGNBQWhCO0FBQ0EsVUFBTTtBQUFFRyxZQUFGO0FBQVVwSztBQUFWLFFBQXlCRyxHQUEvQjtBQUNBLFNBQUswSixXQUFMLENBQWlCMUMsU0FBakIsR0FBNkJpRCxNQUE3QjtBQUNBLFNBQUtOLG9CQUFMLEdBQTRCOUosVUFBNUI7QUFDQSxTQUFLNkosV0FBTCxDQUFpQjVDLGFBQWpCLEdBQWlDLEtBQUs2QyxvQkFBTCxDQUEwQk0sTUFBMUIsQ0FBakM7QUFDQSxTQUFLRixNQUFMLENBQVlHLFFBQVo7QUFDSDs7QUFFRCxNQUFJUixXQUFKLENBQWdCUyxNQUFoQixFQUF1QjtBQUNuQixTQUFLQyxXQUFMLEdBQW1CRCxNQUFuQjtBQUNIOztBQUNELE1BQUlULFdBQUosR0FBaUI7QUFDYixRQUFHLENBQUMsS0FBS1UsV0FBVCxFQUFxQjtBQUNqQixZQUFNL0ksS0FBSyxDQUFDLHdCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUsrSSxXQUFaO0FBQ0g7O0FBL0MwRSxDQUEvRTs7QUFrRGVaLGdGQUFmLEU7Ozs7Ozs7Ozs7O0FDekRBLDZEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbGF5ZXIubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2xheWVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sYXllclwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERlbnNlTWl4aW5zIH0gZnJvbSAnLi9kZW5zZS5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldExheWVyIGNsYXNzIHByb3ZpZGUgY29tbW9uIHVzZSBsYXllcnNcbiAqIHsgbWl4V2l0aDogWyBMYXllck1peGlucywgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqL1xuY2xhc3MgQ2F1c2FsTmV0TGF5ZXJzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICBbIERlbnNlTWl4aW5zIF0gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxheWVyTmFtZXMgPSBbXTtcbiAgICB9XG4gICAgbmFtZUdlbmVyYXRvcihsYXllclR5cGUpe1xuICAgICAgICBjb25zdCBsYXllcklkeCA9IHRoaXMubGF5ZXJOYW1lcy5sZW5ndGg7IFxuICAgICAgICBsZXQgbmV3TmFtZSA9IGxheWVyVHlwZSArICcvJyArIGxheWVySWR4O1xuICAgICAgICB0aGlzLmxheWVyTmFtZXMucHVzaChuZXdOYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ld05hbWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TGF5ZXJzKCk7IiwiY29uc3QgRGVuc2VMYXllck1peGlucyA9IChQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgUGlwZWxpbmVDbGFzc3tcbiAgICAvKipcbiAgICAgKiBTaW1wbGUgZGVuc2UgbGF5ZXJcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBpbnB1dFNpemUgLSBzaXplIG9mIG5ldCBpbnB1dFxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IG91dHB1dFNpemUgLSBzaXplIG9mIG5ldCBvdXRwdXRcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBuYW1lIC0gbGF5ZXIgbmFtZVxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gbGF5ZXJcbiAgICAgKi9cbiAgICBkZW5zZShpbnB1dFNpemUsIG91dHB1dFNpemUsIG5hbWUpe1xuICAgICAgICBpZighbmFtZSl7XG4gICAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lR2VuZXJhdG9yKCdkZW5zZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgTmFtZTogbmFtZSwgVHlwZTogJ0xheWVyJyxcbiAgICAgICAgICAgIFBhcmFtZXRlcnM6IHsgV2VpZ2h0OiBbaW5wdXRTaXplLCBvdXRwdXRTaXplXSwgQmlhczogW291dHB1dFNpemVdIH0sXG4gICAgICAgICAgICBOZXQ6IGZ1bmN0aW9uKHZhbHVlLCBwYXJhbXMpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhY2UgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHtXZWlnaHQsIEJpYXN9ID0gcGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdmFsdWUuZG90KFdlaWdodCkuYWRkKEJpYXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQsIHRyYWNlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRGVuc2VMYXllck1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldExheWVycyB9IGZyb20gJy4vY2F1c2FsTmV0TGF5ZXJzJzsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlci5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBwYXJhbWV0ZXJmdW5jdG9yIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRMYXllciBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2UgbGF5ZXJzXG4gKiB7IG1peFdpdGg6IFsgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UGFyYW1ldGVycyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgW1N0b3JhZ2VNaXhpbnMsIFBhcmFtZXRlck1peGluc10gKXtcbiAgICBjb25zdHJ1Y3RvcihzdG9yYWdlLCBwYXJhbWV0ZXJmdW5jdG9yKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gc3RvcmFnZTtcbiAgICAgICAgdGhpcy5GID0gcGFyYW1ldGVyZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgIH1cbn0gICBcblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFBhcmFtZXRlcnMoaW5kZXhEQlN0b3JhZ2UsIHBhcmFtZXRlcmZ1bmN0b3IpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0UGFyYW1ldGVycyB9IGZyb20gJy4vY2F1c2FsTmV0UGFyYW1ldGVycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFtZXRlck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlckZ1bmN0b3IubWl4aW5zJzsiLCJjb25zdCBQYXJhbWV0ZXJNaXhpbnMgPSAoQmFzZVBhcmFtZXRlckNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBhcmFtZXRlckNsYXNzeyBcbiAgICBcbiAgICBnZXQgUHJlZGljdFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyB8fCAhdGhpcy5wYXJhbWV0ZXJzLlByZWRpY3Qpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuUHJlZGljdDtcbiAgICB9XG4gICAgXG4gICAgZ2V0IEVuY29kZVBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyB8fCAhdGhpcy5wYXJhbWV0ZXJzLkVuY29kZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5FbmNvZGU7XG4gICAgfVxuICAgIFxuICAgIGdldCBEZWNvZGVQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMgfHwgIXRoaXMucGFyYW1ldGVycy5EZWNvZGUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuRGVjb2RlO1xuICAgIH1cbiAgICBcbiAgICBzZXQgUHJlZGljdFBhcmFtZXRlcnMocHJlZGljdFBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSAodGhpcy5wYXJhbWV0ZXJzKT8gdGhpcy5wYXJhbWV0ZXJzOiB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLlByZWRpY3QgPSBwcmVkaWN0UGFyYW1ldGVycztcbiAgICB9XG4gICAgXG4gICAgc2V0IEVuY29kZVBhcmFtZXRlcnMoZW5jb2RlUGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9ICh0aGlzLnBhcmFtZXRlcnMpPyB0aGlzLnBhcmFtZXRlcnM6IHt9O1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuRW5jb2RlID0gZW5jb2RlUGFyYW1ldGVycztcbiAgICB9XG4gICAgXG4gICAgc2V0IERlY29kZVBhcmFtZXRlcnMoZGVjb2RlUGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9ICh0aGlzLnBhcmFtZXRlcnMpPyB0aGlzLnBhcmFtZXRlcnM6IHt9O1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuRGVjb2RlID0gZGVjb2RlUGFyYW1ldGVycztcbiAgICB9XG5cbiAgICBzZXQgUGFyYW1ldGVyU2l6ZXMocGFyYW1ldGVyU2l6ZXMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlclNpemVzID0gcGFyYW1ldGVyU2l6ZXM7XG4gICAgfVxuXG4gICAgZ2V0IFBhcmFtZXRlclNpemVzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlclNpemVzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJTaXplcyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVyU2l6ZXM7XG4gICAgfVxuICAgIFxuICAgIGdldCBTYXZlTW9kZWxEaXIoKXtcbiAgICAgICAgcmV0dXJuICdzYXZlTW9kZWwvJztcbiAgICB9XG4gICAgXG4gICAgZXhwb3J0UGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYXN5bmMgKCk9PntcbiAgICAgICAgICAgIGNvbnN0IEZuID0gYXN5bmMgKHBhcmFtKT0+KEFycmF5LmZyb20oYXdhaXQgcGFyYW0uZGF0YSgpKSk7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gYXdhaXQgdGhpcy5leHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdCh0aGlzLnBhcmFtZXRlcnMsIEZuKTtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG4gICAgXG4gICAgYXN5bmMgZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QocGFyYW1zLCBmbil7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFRyYXZlbGxlciA9IGFzeW5jIChwYXJhbXMsIGZuKT0+e1xuICAgICAgICAgICAgaWYodGhpcy5pc1RlbnNvcihwYXJhbXMpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZm4ocGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IGtWYWxzID0gUi50b1BhaXJzKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW2ssIHZhbF0gb2Yga1ZhbHMpe1xuICAgICAgICAgICAgICAgICAgICByZXNba10gPSBhd2FpdCBUcmF2ZWxsZXIodmFsLCBmbik7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYXdhaXQgVHJhdmVsbGVyKHBhcmFtcywgZm4pO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBwYXJhbWV0ZXJzU3VtbWFyeSgpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXIgbXVzdCBiZSBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBGbiA9IGFzeW5jIChwYXJhbSk9PkFycmF5LmZyb20oYXdhaXQgcGFyYW0ubWVhbigpLmRhdGEoKSk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHRoaXMucGFyYW1ldGVycywgRm4pO1xuICAgIH1cbiAgICBcbiAgICBpbml0UGFyYW1TaXplc0J5TGF5ZXJzKGxheWVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFQgPSB0aGlzLlQsIEYgPSB0aGlzLkY7XG4gICAgICAgIGNvbnN0IEdldFBhcmFtU2l6ZSA9IFIuY29tcG9zZShSLmZyb21QYWlycywgUi5tYXAocD0+W3AuTmFtZSwgcC5QYXJhbWV0ZXJzXSkpO1xuICAgICAgICBjb25zdCBQcmVkaWN0U2l6ZSA9IEdldFBhcmFtU2l6ZShGLmdldEluKFsnUHJlZGljdCddLCBsYXllcnMsIFtdKSk7XG4gICAgICAgIGNvbnN0IEVuY29kZVNpemUgID0gR2V0UGFyYW1TaXplKEYuZ2V0SW4oWydFbmNvZGUnXSwgbGF5ZXJzLCBbXSkpO1xuICAgICAgICBjb25zdCBEZWNvZGVTaXplICA9IEdldFBhcmFtU2l6ZShGLmdldEluKFsnRGVjb2RlJ10sIGxheWVycywgW10pKTsgXG4gICAgICAgIHRoaXMuUGFyYW1ldGVyU2l6ZXMgPSB7UHJlZGljdFNpemUsIEVuY29kZVNpemUsIERlY29kZVNpemV9O1xuICAgIH1cblxuICAgIGltcG9ydFBhcmFtZXRlcnMocGFyYW1PYmplY3Qpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GO1xuICAgICAgICBsZXQgcHJlZGljdFBhcmFtT2JqZWN0ID0gRi5nZXRJbihbJ1ByZWRpY3QnXSwgcGFyYW1PYmplY3QsIHt9KTtcbiAgICAgICAgbGV0IGVuY29kZVBhcmFtT2JqZWN0ICA9IEYuZ2V0SW4oWydFbmNvZGUnXSwgcGFyYW1PYmplY3QsIHt9KTtcbiAgICAgICAgbGV0IGRlY29kZVBhcmFtT2JqZWN0ICA9IEYuZ2V0SW4oWydEZWNvZGUnXSwgcGFyYW1PYmplY3QsIHt9KTtcbiAgICAgICAgY29uc3QgeyBQcmVkaWN0U2l6ZSwgRW5jb2RlU2l6ZSwgRGVjb2RlU2l6ZSB9ID0gdGhpcy5QYXJhbWV0ZXJTaXplcztcbiAgICAgICAgY29uc3QgU2V0T3JJbml0ID0gKCBpbml0UHJlZGljdCwgcGFyYW1PYmplY3QgKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRi5wYXJhbWV0ZXJNYXBXaXRoS2V5KChrZXlzLCBwYXJhbVNpemUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1WYWx1ZSA9IHRoaXMuRi5nZXRJbihrZXlzLCBwYXJhbU9iamVjdCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwYXJhbVZhbHVlID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVC52YXJpYWJsZShULnJhbmRvbU5vcm1hbChwYXJhbVNpemUpLmFzVHlwZSgnZmxvYXQzMicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFQudmFyaWFibGUoVC50ZW5zb3IocGFyYW1WYWx1ZSwgcGFyYW1TaXplLCAnZmxvYXQzMicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSwgaW5pdFByZWRpY3QpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMuUHJlZGljdFBhcmFtZXRlcnMgPSBTZXRPckluaXQoIFByZWRpY3RTaXplLCBwcmVkaWN0UGFyYW1PYmplY3QgKTtcbiAgICAgICAgdGhpcy5FbmNvZGVQYXJhbWV0ZXJzICA9IFNldE9ySW5pdCggRW5jb2RlU2l6ZSwgZW5jb2RlUGFyYW1PYmplY3QgKTtcbiAgICAgICAgdGhpcy5EZWNvZGVQYXJhbWV0ZXJzICA9IFNldE9ySW5pdCggRGVjb2RlU2l6ZSwgZGVjb2RlUGFyYW1PYmplY3QgKTsgXG4gICAgfVxuXG4gICAgSW5pdFBhcmFtZXRlcnMocGFyYW1PYmplY3Q9e30pe1xuICAgICAgICByZXR1cm4gKGxheWVycyk9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldE9ySW5pdFBhcmFtcyhsYXllcnMsIHBhcmFtT2JqZWN0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXRPckluaXRQYXJhbXMobGF5ZXJzLCBwYXJhbU9iamVjdCl7XG4gICAgICAgIHRoaXMuaW5pdFBhcmFtU2l6ZXNCeUxheWVycyhsYXllcnMpO1xuICAgICAgICB0aGlzLmltcG9ydFBhcmFtZXRlcnMocGFyYW1PYmplY3QpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTYXZlZFBhcmFtTGlzdCgpe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlLCBTYXZlRGlyID0gdGhpcy5TYXZlTW9kZWxEaXI7XG4gICAgICAgIGxldCBmaWxlTGlzdCA9IGF3YWl0IFN0b3JhZ2UuZ2V0RmlsZUxpc3QoU2F2ZURpcik7XG4gICAgICAgIHJldHVybiBmaWxlTGlzdC5tYXAoZmlsZU5hbWU9PmZpbGVOYW1lLnJlcGxhY2UoU2F2ZURpciwnJykpO1xuICAgIH1cblxuICAgIGFzeW5jIHNhdmVQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICBjb25zdCBTYXZlRGlyID0gdGhpcy5TYXZlTW9kZWxEaXI7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIGxldCBwYXJhbXMgPSBhd2FpdCB0aGlzLmV4cG9ydFBhcmFtZXRlcnMoKTtcbiAgICAgICAgYXdhaXQgU3RvcmFnZS53cml0ZUZpbGUoU2F2ZURpciArIGZpbGVOYW1lLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG4gICAgYXN5bmMgbG9hZFBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2UsIFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgbGV0IHN0clBhcmFtcyA9IGF3YWl0IFN0b3JhZ2UucmVhZEZpbGUoU2F2ZURpcitmaWxlTmFtZSk7XG4gICAgICAgIGxldCBwYXJhbXMgPSBKU09OLnBhcnNlKHN0clBhcmFtcyk7XG4gICAgICAgIHRoaXMuaW1wb3J0UGFyYW1ldGVycyhwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhbWV0ZXJNaXhpbnM7IiwiaW1wb3J0IHtGdW5jdG9yIGFzIEJhc2VGdW5jdG9yfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHtwbGF0Zm9ybX0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgUGFyYW1ldGVyRnVuY3Rvck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyRnVuY3Rvci5taXhpbnMnO1xuXG5jbGFzcyBQYXJhbWV0ZXJGdW5jdG9yIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgWyBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIF0gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFBhcmFtZXRlckZ1bmN0b3IoKTsiLCJjb25zdCBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zID0gKEZ1bmN0b3JDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEZ1bmN0b3JDbGFzc3sgXG4gICAgaXNQYXJhbWV0ZXIodmFsKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuaWZFbHNlKFIuaXMoQXJyYXkpLCBSLmFsbChSLmlzKE51bWJlcikpLCBSLmFsd2F5cyhmYWxzZSkpKHZhbCk7XG4gICAgfVxuICAgIHBhcmFtZXRlck1hcFdpdGhLZXkoZm4sIHBhcmFtZXRlck9iamVjdCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBSZXMgPSAoa2V5cywgc3ViT2JqZWN0KSA9PiBSLmNvbXBvc2UoUi5mcm9tUGFpcnMsIFxuICAgICAgICAgICAgICAgICAgICAgICAgUi5tYXAoKFtrZXksIHN1Yk9iamVjdF0pPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pc1BhcmFtZXRlcihzdWJPYmplY3QpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIGZuKFsuLi5rZXlzLCBrZXldLCBzdWJPYmplY3QpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoUi5pcyhPYmplY3QsIHN1Yk9iamVjdCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFJlcyhbLi4ua2V5cywga2V5XSwgc3ViT2JqZWN0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBzdWJPYmplY3RdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIFIudG9QYWlycykoc3ViT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIFJlcyhbXSwgcGFyYW1ldGVyT2JqZWN0KTtcbiAgICB9ICAgICAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFtZXRlckZ1bmN0b3JNaXhpbnM7IiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRMYXllciBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2UgbGF5ZXJzXG4gKiB7IG1peFdpdGg6IFsgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9ydW5uZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRSdW5uZXIgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFsgUnVubmVyTWl4aW5zIF0gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFJ1bm5lcigpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0UnVubmVyIH0gZnJvbSAnLi9jYXVzYWxOZXRSdW5uZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSdW5uZXJNaXhpbnMgfSBmcm9tICcuL3J1bm5lci5taXhpbnMnOyIsIi8qKlxuICogVGhpcyBSdW5uZXJNaXhpbnMgY2xhc3MgcHJvdmlkZSBtZXRob2RzIGZvciBydW5uZXIgY2xhc3MuXG4gKiBAY2xhc3MgUnVubmVyTWl4aW5zXG4gKiBAZXh0ZW5kcyBCYXNlUnVubmVyQ2xhc3NcbiAqL1xuY29uc3QgUnVubmVyTWl4aW5zID0gKCBCYXNlUnVubmVyQ2xhc3MgKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVJ1bm5lckNsYXNze1xuICAgIHNldCBOZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLm5ldFBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBzZXQgTmV0TGF5ZXJzKG5ldExheWVycyl7XG4gICAgICAgIHRoaXMubmV0TGF5ZXJzID0gbmV0TGF5ZXJzO1xuICAgIH1cbiAgICBnZXQgTmV0UGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5uZXRQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRQYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBnZXQgTmV0TGF5ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldExheWVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TGF5ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRMYXllcnM7XG4gICAgfVxuICAgIHJ1bk9wRmxvdyh2YWx1ZSwgZmxvdywgcGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IE9wc1J1bm5lciA9IFIuYWRkSW5kZXgoUi5yZWR1Y2UpKFIuX18se3Jlc3VsdDogdmFsdWUsIHRyYWNlOiB7fX0sIGZsb3cpO1xuICAgICAgICB2YXIge3Jlc3VsdCwgdHJhY2V9ID0gT3BzUnVubmVyKCh7cmVzdWx0LCB0cmFjZX0sIG5vZGUsIGlkeCk9PntcbiAgICAgICAgICAgIGlmKG5vZGUuUGFyYW1ldGVyKXtcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gcGFyYW1ldGVyc1tub2RlLlBhcmFtZXRlcl07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W25vZGUuT3BdKHBhcmFtcywgLi4ubm9kZS5BcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W25vZGUuT3BdKC4uLm5vZGUuQXJncyk7ICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyYWNlW2lkeF0gPSByZXN1bHQuc2hhcGU7XG4gICAgICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICB9XG5cbiAgICBydW5PcExheWVyKHZhbHVlLCBuZXQsIHBhcmFtZXRlcnMpe1xuICAgICAgICBsZXQgeyByZXN1bHQsIHRyYWNlIH0gPSBuZXQodmFsdWUsIHBhcmFtZXRlcnMpO1xuICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgIH1cbiAgICBydW5MYXllcih2YWx1ZSwgbGF5ZXJDb25maWd1cmUsIGxheWVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IHtOYW1lLCBUeXBlLCBGbG93LCBOZXR9ID0gbGF5ZXJDb25maWd1cmU7XG4gICAgICAgIGlmKFR5cGUgPT09ICdUZW5zb3InKXtcbiAgICAgICAgICAgIGxldCB7cmVzdWx0LCB0cmFjZX0gPSB0aGlzLnJ1bk9wRmxvdyh2YWx1ZSwgRmxvdywgbGF5ZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB7W05hbWVdOiByZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSAgIFxuICAgICAgICBlbHNlIGlmKFR5cGUgPT09ICdMYXllcicpe1xuICAgICAgICAgICAgbGV0IHtyZXN1bHQsIHRyYWNlfSA9IHRoaXMucnVuT3BMYXllcih2YWx1ZSwgTmV0LCBsYXllclBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHtbTmFtZV06IHJlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9ICAgXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndHlwZSBtdXN0IGJlIGVpdGhlciBMYXllciBvciBUZW5zb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYWNpbmcodHJhY2VzLCBuYW1lLCB0cmFjZSl7XG4gICAgICAgIGlmKHRyYWNlcyl7XG4gICAgICAgICAgICB0cmFjZXMucHVzaCh7W25hbWVdOiB0cmFjZX0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJ1bihsYXllcnMsIHNhbXBsZXMsIHBhcmFtZXRlcnMsIHRyYWNlcz1udWxsKXtcbiAgICAgICAgbGV0IHBpcGVWYWx1ZSA9IHtQaXBlSW5wdXQ6IHNhbXBsZXN9LCBsYXN0TGF5ZXIgPSAnUGlwZUlucHV0JztcbiAgICAgICAgZm9yKGxldCBsYXllciBvZiBsYXllcnMpe1xuICAgICAgICAgICAgbGV0IGxheWVyT3V0cHV0ID0gdGhpcy5ydW5MYXllcihwaXBlVmFsdWVbbGFzdExheWVyXSwgbGF5ZXIsIHBhcmFtZXRlcnNbbGF5ZXIuTmFtZV0pO1xuICAgICAgICAgICAgcGlwZVZhbHVlW2xheWVyLk5hbWVdID0gbGF5ZXJPdXRwdXRbbGF5ZXIuTmFtZV07XG4gICAgICAgICAgICBsYXN0TGF5ZXIgPSBsYXllci5OYW1lO1xuICAgICAgICAgICAgdGhpcy50cmFjaW5nKHRyYWNlcywgbGF5ZXIuTmFtZSwgbGF5ZXJPdXRwdXQudHJhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRyYWNlcyl7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7dHJhY2VzfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpcGVWYWx1ZVtsYXN0TGF5ZXJdO1xuICAgIH1cblxuICAgIGdldCBQcmVkaWN0b3IoKXtcbiAgICAgICAgbGV0IHByZWRpY3RMYXllcnMgPSB0aGlzLk5ldExheWVycy5QcmVkaWN0O1xuICAgICAgICBjb25zdCBQcmVkaWN0UGFyYW1ldGVyc0xlbnNlcyA9ICgpPT50aGlzLk5ldFBhcmFtZXRlcnMuUHJlZGljdFBhcmFtZXRlcnM7XG4gICAgICAgIHJldHVybiAoc2FtcGxlcyk9PntcbiAgICAgICAgICAgIGxldCBwcmVkaWN0UGFyYW1ldGVycyA9IFByZWRpY3RQYXJhbWV0ZXJzTGVuc2VzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4ocHJlZGljdExheWVycywgc2FtcGxlcywgcHJlZGljdFBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgRW5jb2Rlcigpe1xuICAgICAgICBsZXQgZW5jb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRW5jb2RlO1xuICAgICAgICBjb25zdCBFbmNvZGVQYXJhbWV0ZXJzTGVuc2VzID0gKCk9PnRoaXMuTmV0UGFyYW1ldGVycy5FbmNvZGVQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICBsZXQgZW5jb2RlUGFyYW1ldGVycyA9IEVuY29kZVBhcmFtZXRlcnNMZW5zZXMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bihlbmNvZGVMYXllcnMsIHNhbXBsZXMsIGVuY29kZVBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgRGVjb2Rlcigpe1xuICAgICAgICBsZXQgZGVjb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRGVjb2RlO1xuICAgICAgICBjb25zdCBEZWNvZGVQYXJhbWV0ZXJzTGVuc2VzID0gKCk9PnRoaXMuTmV0UGFyYW1ldGVycy5FbmNvZGVQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICBsZXQgZGVjb2RlUGFyYW1ldGVycyA9IERlY29kZVBhcmFtZXRlcnNMZW5zZXMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bihkZWNvZGVMYXllcnMsIHNhbXBsZXMsIGRlY29kZVBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bm5lck1peGlucztcbiIsImV4cG9ydCB7IGNhdXNhbE5ldExheWVycyB9IGZyb20gJy4vQ2F1c2FsTmV0TGF5ZXJzL2luZGV4JztcbmV4cG9ydCB7IGNhdXNhbE5ldFBhcmFtZXRlcnMsIFBhcmFtZXRlck1peGlucywgUGFyYW1ldGVyRnVuY3Rvck1peGlucyB9IGZyb20gJy4vQ2F1c2FsTmV0UGFyYW1ldGVycy9pbmRleCc7XG5leHBvcnQgeyBjYXVzYWxOZXRSdW5uZXIsIFJ1bm5lck1peGlucyB9IGZyb20gJy4vQ2F1c2FsTmV0UnVubmVyL2luZGV4JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGF5ZXJSdW5uZXJNaXhpbnMgfSBmcm9tICcuL2xheWVyUnVubmVyLm1peGlucyc7XG4iLCIvKipcbiAqIFRoaXMgTmV0TWl4aW5zIGNsYXNzIHByb3ZpZGUgbWl4aW4gZm9yIGJ1aWxkaW5nIHBpcGVsaW5lXG4gKiBAY2xhc3MgTmV0TWl4aW5zXG4gKiBAZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL25ldC5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IExheWVyUnVubmVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGF3YWl0IHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycy5zYXZlUGFyYW1zKGZpbGVOYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMgPSBhd2FpdCB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMubG9hZFBhcmFtcyhmaWxlTmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkUGFyYW1MaXN0KCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMuZ2V0U2F2ZWRQYXJhbUxpc3QoKTtcbiAgICB9XG5cbiAgICBnZXQgUGFyYW1ldGVySW5pdGlhbGl6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVySW5pdGlhbGl6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1BhcmFtZXRlckluaXRpYWxpemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJJbml0aWFsaXplcjtcbiAgICB9XG5cbiAgICBzZXQgUGFyYW1ldGVySW5pdGlhbGl6ZXIocGFyYW1ldGVySW5pdGlhbGl6ZXIpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlckluaXRpYWxpemVyID0gcGFyYW1ldGVySW5pdGlhbGl6ZXI7XG4gICAgfVxuXG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgTGF5ZXJSdW5uZXIgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgTmV0IH0gPSBwaXBlbGluZUNvbmZpZztcbiAgICAgICAgY29uc3QgeyBMYXllcnMsIFBhcmFtZXRlcnMgfSA9IE5ldDsgXG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIuTmV0TGF5ZXJzID0gTGF5ZXJzO1xuICAgICAgICB0aGlzLlBhcmFtZXRlckluaXRpYWxpemVyID0gUGFyYW1ldGVyczsgICAgICAgXG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycyA9IHRoaXMuUGFyYW1ldGVySW5pdGlhbGl6ZXIoTGF5ZXJzKTtcbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBzZXQgTGF5ZXJSdW5uZXIocnVubmVyKXtcbiAgICAgICAgdGhpcy5sYXllclJ1bm5lciA9IHJ1bm5lcjtcbiAgICB9XG4gICAgZ2V0IExheWVyUnVubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmxheWVyUnVubmVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdsYXllclJ1bm5lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJSdW5uZXI7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJSdW5uZXJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=