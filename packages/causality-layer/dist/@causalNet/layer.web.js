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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9kZW5zZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2NhdXNhbE5ldFBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFJ1bm5lci9jYXVzYWxOZXRSdW5uZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvcnVubmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvbGF5ZXJSdW5uZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRMYXllcnMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiRGVuc2VNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImxheWVyTmFtZXMiLCJuYW1lR2VuZXJhdG9yIiwibGF5ZXJUeXBlIiwibGF5ZXJJZHgiLCJsZW5ndGgiLCJuZXdOYW1lIiwicHVzaCIsIkRlbnNlTGF5ZXJNaXhpbnMiLCJQaXBlbGluZUNsYXNzIiwiZGVuc2UiLCJpbnB1dFNpemUiLCJvdXRwdXRTaXplIiwibmFtZSIsIk5hbWUiLCJUeXBlIiwiUGFyYW1ldGVycyIsIldlaWdodCIsIkJpYXMiLCJOZXQiLCJ2YWx1ZSIsInBhcmFtcyIsInRyYWNlIiwicmVzdWx0IiwiZG90IiwiYWRkIiwiQ2F1c2FsTmV0UGFyYW1ldGVycyIsIlN0b3JhZ2VNaXhpbnMiLCJQYXJhbWV0ZXJNaXhpbnMiLCJzdG9yYWdlIiwicGFyYW1ldGVyZnVuY3RvciIsInBhcmFtZXRlcnMiLCJTdG9yYWdlIiwiRiIsIlIiLCJDb3JlRnVuY3RvciIsImluZGV4REJTdG9yYWdlIiwiQmFzZVBhcmFtZXRlckNsYXNzIiwiUHJlZGljdFBhcmFtZXRlcnMiLCJQcmVkaWN0IiwiRXJyb3IiLCJFbmNvZGVQYXJhbWV0ZXJzIiwiRW5jb2RlIiwiRGVjb2RlUGFyYW1ldGVycyIsIkRlY29kZSIsInByZWRpY3RQYXJhbWV0ZXJzIiwiZW5jb2RlUGFyYW1ldGVycyIsImRlY29kZVBhcmFtZXRlcnMiLCJQYXJhbWV0ZXJTaXplcyIsInBhcmFtZXRlclNpemVzIiwiU2F2ZU1vZGVsRGlyIiwiZXhwb3J0UGFyYW1ldGVycyIsIkZuIiwicGFyYW0iLCJBcnJheSIsImZyb20iLCJkYXRhIiwiZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QiLCJmbiIsIlRyYXZlbGxlciIsImlzVGVuc29yIiwia1ZhbHMiLCJ0b1BhaXJzIiwicmVzIiwiayIsInZhbCIsInBhcmFtZXRlcnNTdW1tYXJ5IiwibWVhbiIsImluaXRQYXJhbVNpemVzQnlMYXllcnMiLCJsYXllcnMiLCJUIiwiR2V0UGFyYW1TaXplIiwiY29tcG9zZSIsImZyb21QYWlycyIsIm1hcCIsInAiLCJQcmVkaWN0U2l6ZSIsImdldEluIiwiRW5jb2RlU2l6ZSIsIkRlY29kZVNpemUiLCJpbXBvcnRQYXJhbWV0ZXJzIiwicGFyYW1PYmplY3QiLCJwcmVkaWN0UGFyYW1PYmplY3QiLCJlbmNvZGVQYXJhbU9iamVjdCIsImRlY29kZVBhcmFtT2JqZWN0IiwiU2V0T3JJbml0IiwiaW5pdFByZWRpY3QiLCJwYXJhbWV0ZXJNYXBXaXRoS2V5Iiwia2V5cyIsInBhcmFtU2l6ZSIsInBhcmFtVmFsdWUiLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsImFzVHlwZSIsInRlbnNvciIsIkluaXRQYXJhbWV0ZXJzIiwic2V0T3JJbml0UGFyYW1zIiwiZ2V0U2F2ZWRQYXJhbUxpc3QiLCJTYXZlRGlyIiwiZmlsZUxpc3QiLCJnZXRGaWxlTGlzdCIsImZpbGVOYW1lIiwicmVwbGFjZSIsInNhdmVQYXJhbXMiLCJ3cml0ZUZpbGUiLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZFBhcmFtcyIsInN0clBhcmFtcyIsInJlYWRGaWxlIiwicGFyc2UiLCJQYXJhbWV0ZXJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIiwiRnVuY3RvckNsYXNzIiwiaXNQYXJhbWV0ZXIiLCJpZkVsc2UiLCJpcyIsImFsbCIsIk51bWJlciIsImFsd2F5cyIsInBhcmFtZXRlck9iamVjdCIsIlJlcyIsInN1Yk9iamVjdCIsImtleSIsIk9iamVjdCIsIkNhdXNhbE5ldFJ1bm5lciIsIlJ1bm5lck1peGlucyIsIkJhc2VSdW5uZXJDbGFzcyIsIk5ldFBhcmFtZXRlcnMiLCJuZXRQYXJhbWV0ZXJzIiwiTmV0TGF5ZXJzIiwibmV0TGF5ZXJzIiwicnVuT3BGbG93IiwiZmxvdyIsIk9wc1J1bm5lciIsImFkZEluZGV4IiwicmVkdWNlIiwiX18iLCJub2RlIiwiaWR4IiwiUGFyYW1ldGVyIiwiT3AiLCJBcmdzIiwic2hhcGUiLCJydW5PcExheWVyIiwibmV0IiwicnVuTGF5ZXIiLCJsYXllckNvbmZpZ3VyZSIsImxheWVyUGFyYW1ldGVycyIsIkZsb3ciLCJ0cmFjaW5nIiwidHJhY2VzIiwicnVuIiwic2FtcGxlcyIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsImxhc3RMYXllciIsImxheWVyIiwibGF5ZXJPdXRwdXQiLCJsb2dnZXIiLCJkZWJ1ZyIsIlByZWRpY3RvciIsInByZWRpY3RMYXllcnMiLCJQcmVkaWN0UGFyYW1ldGVyc0xlbnNlcyIsIkVuY29kZXIiLCJlbmNvZGVMYXllcnMiLCJFbmNvZGVQYXJhbWV0ZXJzTGVuc2VzIiwiRGVjb2RlciIsImRlY29kZUxheWVycyIsIkRlY29kZVBhcmFtZXRlcnNMZW5zZXMiLCJMYXllclJ1bm5lck1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiTGF5ZXJSdW5uZXIiLCJQYXJhbWV0ZXJJbml0aWFsaXplciIsInBhcmFtZXRlckluaXRpYWxpemVyIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsIkxvZ2dlciIsImdyb3VwQmVnaW4iLCJMYXllcnMiLCJncm91cEVuZCIsInJ1bm5lciIsImxheWVyUnVubmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qs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RUFBZ0I7QUFDdkIsUUFBRyxNQUFNRCxXQUFULEVBQXFCO0FBQ2pCLFlBQU1BLFdBQU4sQ0FBa0JDLGNBQWxCO0FBQ0g7O0FBQ0QsU0FBS0MsTUFBTCxDQUFZQyxVQUFaLENBQXVCLDJCQUF2QjtBQUNBLFVBQU07QUFBRWhLO0FBQUYsUUFBVThKLGNBQWhCO0FBQ0EsVUFBTTtBQUFFRyxZQUFGO0FBQVVwSztBQUFWLFFBQXlCRyxHQUEvQjtBQUNBLFNBQUswSixXQUFMLENBQWlCMUMsU0FBakIsR0FBNkJpRCxNQUE3QjtBQUNBLFNBQUtOLG9CQUFMLEdBQTRCOUosVUFBNUI7QUFDQSxTQUFLNkosV0FBTCxDQUFpQjVDLGFBQWpCLEdBQWlDLEtBQUs2QyxvQkFBTCxDQUEwQk0sTUFBMUIsQ0FBakM7QUFDQSxTQUFLRixNQUFMLENBQVlHLFFBQVo7QUFDSDs7QUFFRCxNQUFJUixXQUFKLENBQWdCUyxNQUFoQixFQUF1QjtBQUNuQixTQUFLQyxXQUFMLEdBQW1CRCxNQUFuQjtBQUNIOztBQUNELE1BQUlULFdBQUosR0FBaUI7QUFDYixRQUFHLENBQUMsS0FBS1UsV0FBVCxFQUFxQjtBQUNqQixZQUFNL0ksS0FBSyxDQUFDLHdCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUsrSSxXQUFaO0FBQ0g7O0FBL0MwRSxDQUEvRTs7QUFrRGVaLGdGQUFmLEU7Ozs7Ozs7Ozs7O0FDekRBLDZEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbGF5ZXIud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbGF5ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xheWVyXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRGVuc2VNaXhpbnMgfSBmcm9tICcuL2RlbnNlLm1peGlucyc7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0TGF5ZXIgY2xhc3MgcHJvdmlkZSBjb21tb24gdXNlIGxheWVyc1xuICogeyBtaXhXaXRoOiBbIExheWVyTWl4aW5zLCBEZW5zZU1peGlucyBdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRMYXllclxuICogQGV4dGVuZHMgQmFzZVRlbnNvclxuICovXG5jbGFzcyBDYXVzYWxOZXRMYXllcnMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFxuICAgIFsgRGVuc2VNaXhpbnMgXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGF5ZXJOYW1lcyA9IFtdO1xuICAgIH1cbiAgICBuYW1lR2VuZXJhdG9yKGxheWVyVHlwZSl7XG4gICAgICAgIGNvbnN0IGxheWVySWR4ID0gdGhpcy5sYXllck5hbWVzLmxlbmd0aDsgXG4gICAgICAgIGxldCBuZXdOYW1lID0gbGF5ZXJUeXBlICsgJy8nICsgbGF5ZXJJZHg7XG4gICAgICAgIHRoaXMubGF5ZXJOYW1lcy5wdXNoKG5ld05hbWUpO1xuICAgICAgICByZXR1cm4gbmV3TmFtZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRMYXllcnMoKTsiLCJjb25zdCBEZW5zZUxheWVyTWl4aW5zID0gKFBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBQaXBlbGluZUNsYXNze1xuICAgIC8qKlxuICAgICAqIFNpbXBsZSBkZW5zZSBsYXllclxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IGlucHV0U2l6ZSAtIHNpemUgb2YgbmV0IGlucHV0XG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gb3V0cHV0U2l6ZSAtIHNpemUgb2YgbmV0IG91dHB1dFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG5hbWUgLSBsYXllciBuYW1lXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSBsYXllclxuICAgICAqL1xuICAgIGRlbnNlKGlucHV0U2l6ZSwgb3V0cHV0U2l6ZSwgbmFtZSl7XG4gICAgICAgIGlmKCFuYW1lKXtcbiAgICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWVHZW5lcmF0b3IoJ2RlbnNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBOYW1lOiBuYW1lLCBUeXBlOiAnTGF5ZXInLFxuICAgICAgICAgICAgUGFyYW1ldGVyczogeyBXZWlnaHQ6IFtpbnB1dFNpemUsIG91dHB1dFNpemVdLCBCaWFzOiBbb3V0cHV0U2l6ZV0gfSxcbiAgICAgICAgICAgIE5ldDogZnVuY3Rpb24odmFsdWUsIHBhcmFtcyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBsZXQge1dlaWdodCwgQmlhc30gPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWx1ZS5kb3QoV2VpZ2h0KS5hZGQoQmlhcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHJlc3VsdCwgdHJhY2UgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBEZW5zZUxheWVyTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0TGF5ZXJzIH0gZnJvbSAnLi9jYXVzYWxOZXRMYXllcnMnOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBTdG9yYWdlTWl4aW5zLCBpbmRleERCU3RvcmFnZSB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFBhcmFtZXRlck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHBhcmFtZXRlcmZ1bmN0b3IgfSBmcm9tICcuL3BhcmFtZXRlckZ1bmN0b3InO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldExheWVyIGNsYXNzIHByb3ZpZGUgY29tbW9uIHVzZSBsYXllcnNcbiAqIHsgbWl4V2l0aDogWyBEZW5zZU1peGlucyBdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRMYXllclxuICogQGV4dGVuZHMgQmFzZVRlbnNvclxuICovXG5jbGFzcyBDYXVzYWxOZXRQYXJhbWV0ZXJzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbU3RvcmFnZU1peGlucywgUGFyYW1ldGVyTWl4aW5zXSApe1xuICAgIGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHBhcmFtZXRlcmZ1bmN0b3Ipe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBzdG9yYWdlO1xuICAgICAgICB0aGlzLkYgPSBwYXJhbWV0ZXJmdW5jdG9yO1xuICAgICAgICB0aGlzLlIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgfVxufSAgIFxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0UGFyYW1ldGVycyhpbmRleERCU3RvcmFnZSwgcGFyYW1ldGVyZnVuY3Rvcik7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRQYXJhbWV0ZXJzIH0gZnJvbSAnLi9jYXVzYWxOZXRQYXJhbWV0ZXJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1ldGVyTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXIubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1ldGVyRnVuY3Rvck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyRnVuY3Rvci5taXhpbnMnOyIsImNvbnN0IFBhcmFtZXRlck1peGlucyA9IChCYXNlUGFyYW1ldGVyQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGFyYW1ldGVyQ2xhc3N7IFxuICAgIFxuICAgIGdldCBQcmVkaWN0UGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzIHx8ICF0aGlzLnBhcmFtZXRlcnMuUHJlZGljdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5QcmVkaWN0O1xuICAgIH1cbiAgICBcbiAgICBnZXQgRW5jb2RlUGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzIHx8ICF0aGlzLnBhcmFtZXRlcnMuRW5jb2RlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLkVuY29kZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IERlY29kZVBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyB8fCAhdGhpcy5wYXJhbWV0ZXJzLkRlY29kZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5EZWNvZGU7XG4gICAgfVxuICAgIFxuICAgIHNldCBQcmVkaWN0UGFyYW1ldGVycyhwcmVkaWN0UGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9ICh0aGlzLnBhcmFtZXRlcnMpPyB0aGlzLnBhcmFtZXRlcnM6IHt9O1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuUHJlZGljdCA9IHByZWRpY3RQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgRW5jb2RlUGFyYW1ldGVycyhlbmNvZGVQYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gKHRoaXMucGFyYW1ldGVycyk/IHRoaXMucGFyYW1ldGVyczoge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5FbmNvZGUgPSBlbmNvZGVQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgRGVjb2RlUGFyYW1ldGVycyhkZWNvZGVQYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gKHRoaXMucGFyYW1ldGVycyk/IHRoaXMucGFyYW1ldGVyczoge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5EZWNvZGUgPSBkZWNvZGVQYXJhbWV0ZXJzO1xuICAgIH1cblxuICAgIHNldCBQYXJhbWV0ZXJTaXplcyhwYXJhbWV0ZXJTaXplcyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyU2l6ZXMgPSBwYXJhbWV0ZXJTaXplcztcbiAgICB9XG5cbiAgICBnZXQgUGFyYW1ldGVyU2l6ZXMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVyU2l6ZXMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlclNpemVzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJTaXplcztcbiAgICB9XG4gICAgXG4gICAgZ2V0IFNhdmVNb2RlbERpcigpe1xuICAgICAgICByZXR1cm4gJ3NhdmVNb2RlbC8nO1xuICAgIH1cbiAgICBcbiAgICBleHBvcnRQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChhc3luYyAoKT0+e1xuICAgICAgICAgICAgY29uc3QgRm4gPSBhc3luYyAocGFyYW0pPT4oQXJyYXkuZnJvbShhd2FpdCBwYXJhbS5kYXRhKCkpKTtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSBhd2FpdCB0aGlzLmV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHRoaXMucGFyYW1ldGVycywgRm4pO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICBcbiAgICBhc3luYyBleHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdChwYXJhbXMsIGZuKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVHJhdmVsbGVyID0gYXN5bmMgKHBhcmFtcywgZm4pPT57XG4gICAgICAgICAgICBpZih0aGlzLmlzVGVuc29yKHBhcmFtcykpe1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBmbihwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQga1ZhbHMgPSBSLnRvUGFpcnMocGFyYW1zKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0ge307XG4gICAgICAgICAgICAgICAgZm9yKGxldCBbaywgdmFsXSBvZiBrVmFscyl7XG4gICAgICAgICAgICAgICAgICAgIHJlc1trXSA9IGF3YWl0IFRyYXZlbGxlcih2YWwsIGZuKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhd2FpdCBUcmF2ZWxsZXIocGFyYW1zLCBmbik7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHBhcmFtZXRlcnNTdW1tYXJ5KCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlciBtdXN0IGJlIHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IEZuID0gYXN5bmMgKHBhcmFtKT0+QXJyYXkuZnJvbShhd2FpdCBwYXJhbS5tZWFuKCkuZGF0YSgpKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QodGhpcy5wYXJhbWV0ZXJzLCBGbik7XG4gICAgfVxuICAgIFxuICAgIGluaXRQYXJhbVNpemVzQnlMYXllcnMobGF5ZXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc3QgR2V0UGFyYW1TaXplID0gUi5jb21wb3NlKFIuZnJvbVBhaXJzLCBSLm1hcChwPT5bcC5OYW1lLCBwLlBhcmFtZXRlcnNdKSk7XG4gICAgICAgIGNvbnN0IFByZWRpY3RTaXplID0gR2V0UGFyYW1TaXplKEYuZ2V0SW4oWydQcmVkaWN0J10sIGxheWVycywgW10pKTtcbiAgICAgICAgY29uc3QgRW5jb2RlU2l6ZSAgPSBHZXRQYXJhbVNpemUoRi5nZXRJbihbJ0VuY29kZSddLCBsYXllcnMsIFtdKSk7XG4gICAgICAgIGNvbnN0IERlY29kZVNpemUgID0gR2V0UGFyYW1TaXplKEYuZ2V0SW4oWydEZWNvZGUnXSwgbGF5ZXJzLCBbXSkpOyBcbiAgICAgICAgdGhpcy5QYXJhbWV0ZXJTaXplcyA9IHtQcmVkaWN0U2l6ZSwgRW5jb2RlU2l6ZSwgRGVjb2RlU2l6ZX07XG4gICAgfVxuXG4gICAgaW1wb3J0UGFyYW1ldGVycyhwYXJhbU9iamVjdCl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIEYgPSB0aGlzLkY7XG4gICAgICAgIGxldCBwcmVkaWN0UGFyYW1PYmplY3QgPSBGLmdldEluKFsnUHJlZGljdCddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZW5jb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0VuY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZGVjb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0RlY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBjb25zdCB7IFByZWRpY3RTaXplLCBFbmNvZGVTaXplLCBEZWNvZGVTaXplIH0gPSB0aGlzLlBhcmFtZXRlclNpemVzO1xuICAgICAgICBjb25zdCBTZXRPckluaXQgPSAoIGluaXRQcmVkaWN0LCBwYXJhbU9iamVjdCApPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGLnBhcmFtZXRlck1hcFdpdGhLZXkoKGtleXMsIHBhcmFtU2l6ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbVZhbHVlID0gdGhpcy5GLmdldEluKGtleXMsIHBhcmFtT2JqZWN0LCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhcmFtVmFsdWUgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBULnZhcmlhYmxlKFQucmFuZG9tTm9ybWFsKHBhcmFtU2l6ZSkuYXNUeXBlKCdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVC52YXJpYWJsZShULnRlbnNvcihwYXJhbVZhbHVlLCBwYXJhbVNpemUsICdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LCBpbml0UHJlZGljdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5QcmVkaWN0UGFyYW1ldGVycyA9IFNldE9ySW5pdCggUHJlZGljdFNpemUsIHByZWRpY3RQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkVuY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBFbmNvZGVTaXplLCBlbmNvZGVQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkRlY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBEZWNvZGVTaXplLCBkZWNvZGVQYXJhbU9iamVjdCApOyBcbiAgICB9XG5cbiAgICBJbml0UGFyYW1ldGVycyhwYXJhbU9iamVjdD17fSl7XG4gICAgICAgIHJldHVybiAobGF5ZXJzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0T3JJbml0UGFyYW1zKGxheWVycywgcGFyYW1PYmplY3QpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldE9ySW5pdFBhcmFtcyhsYXllcnMsIHBhcmFtT2JqZWN0KXtcbiAgICAgICAgdGhpcy5pbml0UGFyYW1TaXplc0J5TGF5ZXJzKGxheWVycyk7XG4gICAgICAgIHRoaXMuaW1wb3J0UGFyYW1ldGVycyhwYXJhbU9iamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkUGFyYW1MaXN0KCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2UsIFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgU3RvcmFnZS5nZXRGaWxlTGlzdChTYXZlRGlyKTtcbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0Lm1hcChmaWxlTmFtZT0+ZmlsZU5hbWUucmVwbGFjZShTYXZlRGlyLCcnKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGNvbnN0IFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXhwb3J0UGFyYW1ldGVycygpO1xuICAgICAgICBhd2FpdCBTdG9yYWdlLndyaXRlRmlsZShTYXZlRGlyICsgZmlsZU5hbWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZSwgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBsZXQgc3RyUGFyYW1zID0gYXdhaXQgU3RvcmFnZS5yZWFkRmlsZShTYXZlRGlyK2ZpbGVOYW1lKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IEpTT04ucGFyc2Uoc3RyUGFyYW1zKTtcbiAgICAgICAgdGhpcy5pbXBvcnRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFtZXRlck1peGluczsiLCJpbXBvcnQge0Z1bmN0b3IgYXMgQmFzZUZ1bmN0b3J9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQge3BsYXRmb3JtfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucyc7XG5cbmNsYXNzIFBhcmFtZXRlckZ1bmN0b3IgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBbIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUGFyYW1ldGVyRnVuY3RvcigpOyIsImNvbnN0IFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgPSAoRnVuY3RvckNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgRnVuY3RvckNsYXNzeyBcbiAgICBpc1BhcmFtZXRlcih2YWwpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5pZkVsc2UoUi5pcyhBcnJheSksIFIuYWxsKFIuaXMoTnVtYmVyKSksIFIuYWx3YXlzKGZhbHNlKSkodmFsKTtcbiAgICB9XG4gICAgcGFyYW1ldGVyTWFwV2l0aEtleShmbiwgcGFyYW1ldGVyT2JqZWN0KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFJlcyA9IChrZXlzLCBzdWJPYmplY3QpID0+IFIuY29tcG9zZShSLmZyb21QYWlycywgXG4gICAgICAgICAgICAgICAgICAgICAgICBSLm1hcCgoW2tleSwgc3ViT2JqZWN0XSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzUGFyYW1ldGVyKHN1Yk9iamVjdCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgZm4oWy4uLmtleXMsIGtleV0sIHN1Yk9iamVjdCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihSLmlzKE9iamVjdCwgc3ViT2JqZWN0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgUmVzKFsuLi5rZXlzLCBrZXldLCBzdWJPYmplY3QpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIHN1Yk9iamVjdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgUi50b1BhaXJzKShzdWJPYmplY3QpO1xuICAgICAgICByZXR1cm4gUmVzKFtdLCBwYXJhbWV0ZXJPYmplY3QpO1xuICAgIH0gICAgICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYW1ldGVyRnVuY3Rvck1peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBSdW5uZXJNaXhpbnMgfSBmcm9tICcuL3J1bm5lci5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldExheWVyIGNsYXNzIHByb3ZpZGUgY29tbW9uIHVzZSBsYXllcnNcbiAqIHsgbWl4V2l0aDogWyBEZW5zZU1peGlucyBdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRMYXllclxuICogQGV4dGVuZHMgQmFzZVRlbnNvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3J1bm5lci5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldFJ1bm5lciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgWyBSdW5uZXJNaXhpbnMgXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0UnVubmVyKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRSdW5uZXIgfSBmcm9tICcuL2NhdXNhbE5ldFJ1bm5lcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJ1bm5lck1peGlucyB9IGZyb20gJy4vcnVubmVyLm1peGlucyc7IiwiLyoqXG4gKiBUaGlzIFJ1bm5lck1peGlucyBjbGFzcyBwcm92aWRlIG1ldGhvZHMgZm9yIHJ1bm5lciBjbGFzcy5cbiAqIEBjbGFzcyBSdW5uZXJNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VSdW5uZXJDbGFzc1xuICovXG5jb25zdCBSdW5uZXJNaXhpbnMgPSAoIEJhc2VSdW5uZXJDbGFzcyApPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUnVubmVyQ2xhc3N7XG4gICAgc2V0IE5ldFBhcmFtZXRlcnMocGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMubmV0UGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgfVxuICAgIHNldCBOZXRMYXllcnMobmV0TGF5ZXJzKXtcbiAgICAgICAgdGhpcy5uZXRMYXllcnMgPSBuZXRMYXllcnM7XG4gICAgfVxuICAgIGdldCBOZXRQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldFBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldFBhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldFBhcmFtZXRlcnM7XG4gICAgfVxuICAgIGdldCBOZXRMYXllcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0TGF5ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRMYXllcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm5ldExheWVycztcbiAgICB9XG4gICAgcnVuT3BGbG93KHZhbHVlLCBmbG93LCBwYXJhbWV0ZXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgT3BzUnVubmVyID0gUi5hZGRJbmRleChSLnJlZHVjZSkoUi5fXyx7cmVzdWx0OiB2YWx1ZSwgdHJhY2U6IHt9fSwgZmxvdyk7XG4gICAgICAgIHZhciB7cmVzdWx0LCB0cmFjZX0gPSBPcHNSdW5uZXIoKHtyZXN1bHQsIHRyYWNlfSwgbm9kZSwgaWR4KT0+e1xuICAgICAgICAgICAgaWYobm9kZS5QYXJhbWV0ZXIpe1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSBwYXJhbWV0ZXJzW25vZGUuUGFyYW1ldGVyXTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbbm9kZS5PcF0ocGFyYW1zLCAuLi5ub2RlLkFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbbm9kZS5PcF0oLi4ubm9kZS5BcmdzKTsgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJhY2VbaWR4XSA9IHJlc3VsdC5zaGFwZTtcbiAgICAgICAgICAgIHJldHVybiB7cmVzdWx0LCB0cmFjZX07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgIH1cblxuICAgIHJ1bk9wTGF5ZXIodmFsdWUsIG5ldCwgcGFyYW1ldGVycyl7XG4gICAgICAgIGxldCB7IHJlc3VsdCwgdHJhY2UgfSA9IG5ldCh2YWx1ZSwgcGFyYW1ldGVycyk7XG4gICAgICAgIHJldHVybiB7cmVzdWx0LCB0cmFjZX07XG4gICAgfVxuICAgIHJ1bkxheWVyKHZhbHVlLCBsYXllckNvbmZpZ3VyZSwgbGF5ZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgY29uc3Qge05hbWUsIFR5cGUsIEZsb3csIE5ldH0gPSBsYXllckNvbmZpZ3VyZTtcbiAgICAgICAgaWYoVHlwZSA9PT0gJ1RlbnNvcicpe1xuICAgICAgICAgICAgbGV0IHtyZXN1bHQsIHRyYWNlfSA9IHRoaXMucnVuT3BGbG93KHZhbHVlLCBGbG93LCBsYXllclBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHtbTmFtZV06IHJlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9ICAgXG4gICAgICAgIGVsc2UgaWYoVHlwZSA9PT0gJ0xheWVyJyl7XG4gICAgICAgICAgICBsZXQge3Jlc3VsdCwgdHJhY2V9ID0gdGhpcy5ydW5PcExheWVyKHZhbHVlLCBOZXQsIGxheWVyUGFyYW1ldGVycyk7XG4gICAgICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0LCB0cmFjZX07XG4gICAgICAgIH0gICBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd0eXBlIG11c3QgYmUgZWl0aGVyIExheWVyIG9yIFRlbnNvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhY2luZyh0cmFjZXMsIG5hbWUsIHRyYWNlKXtcbiAgICAgICAgaWYodHJhY2VzKXtcbiAgICAgICAgICAgIHRyYWNlcy5wdXNoKHtbbmFtZV06IHRyYWNlfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcnVuKGxheWVycywgc2FtcGxlcywgcGFyYW1ldGVycywgdHJhY2VzPW51bGwpe1xuICAgICAgICBsZXQgcGlwZVZhbHVlID0ge1BpcGVJbnB1dDogc2FtcGxlc30sIGxhc3RMYXllciA9ICdQaXBlSW5wdXQnO1xuICAgICAgICBmb3IobGV0IGxheWVyIG9mIGxheWVycyl7XG4gICAgICAgICAgICBsZXQgbGF5ZXJPdXRwdXQgPSB0aGlzLnJ1bkxheWVyKHBpcGVWYWx1ZVtsYXN0TGF5ZXJdLCBsYXllciwgcGFyYW1ldGVyc1tsYXllci5OYW1lXSk7XG4gICAgICAgICAgICBwaXBlVmFsdWVbbGF5ZXIuTmFtZV0gPSBsYXllck91dHB1dFtsYXllci5OYW1lXTtcbiAgICAgICAgICAgIGxhc3RMYXllciA9IGxheWVyLk5hbWU7XG4gICAgICAgICAgICB0aGlzLnRyYWNpbmcodHJhY2VzLCBsYXllci5OYW1lLCBsYXllck91dHB1dC50cmFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHJhY2VzKXtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHt0cmFjZXN9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGlwZVZhbHVlW2xhc3RMYXllcl07XG4gICAgfVxuXG4gICAgZ2V0IFByZWRpY3Rvcigpe1xuICAgICAgICBsZXQgcHJlZGljdExheWVycyA9IHRoaXMuTmV0TGF5ZXJzLlByZWRpY3Q7XG4gICAgICAgIGNvbnN0IFByZWRpY3RQYXJhbWV0ZXJzTGVuc2VzID0gKCk9PnRoaXMuTmV0UGFyYW1ldGVycy5QcmVkaWN0UGFyYW1ldGVycztcbiAgICAgICAgcmV0dXJuIChzYW1wbGVzKT0+e1xuICAgICAgICAgICAgbGV0IHByZWRpY3RQYXJhbWV0ZXJzID0gUHJlZGljdFBhcmFtZXRlcnNMZW5zZXMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bihwcmVkaWN0TGF5ZXJzLCBzYW1wbGVzLCBwcmVkaWN0UGFyYW1ldGVycyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCBFbmNvZGVyKCl7XG4gICAgICAgIGxldCBlbmNvZGVMYXllcnMgPSB0aGlzLk5ldExheWVycy5FbmNvZGU7XG4gICAgICAgIGNvbnN0IEVuY29kZVBhcmFtZXRlcnNMZW5zZXMgPSAoKT0+dGhpcy5OZXRQYXJhbWV0ZXJzLkVuY29kZVBhcmFtZXRlcnM7XG4gICAgICAgIHJldHVybiAoc2FtcGxlcyk9PntcbiAgICAgICAgICAgIGxldCBlbmNvZGVQYXJhbWV0ZXJzID0gRW5jb2RlUGFyYW1ldGVyc0xlbnNlcygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuKGVuY29kZUxheWVycywgc2FtcGxlcywgZW5jb2RlUGFyYW1ldGVycyk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCBEZWNvZGVyKCl7XG4gICAgICAgIGxldCBkZWNvZGVMYXllcnMgPSB0aGlzLk5ldExheWVycy5EZWNvZGU7XG4gICAgICAgIGNvbnN0IERlY29kZVBhcmFtZXRlcnNMZW5zZXMgPSAoKT0+dGhpcy5OZXRQYXJhbWV0ZXJzLkVuY29kZVBhcmFtZXRlcnM7XG4gICAgICAgIHJldHVybiAoc2FtcGxlcyk9PntcbiAgICAgICAgICAgIGxldCBkZWNvZGVQYXJhbWV0ZXJzID0gRGVjb2RlUGFyYW1ldGVyc0xlbnNlcygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuKGRlY29kZUxheWVycywgc2FtcGxlcywgZGVjb2RlUGFyYW1ldGVycyk7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUnVubmVyTWl4aW5zO1xuIiwiZXhwb3J0IHsgY2F1c2FsTmV0TGF5ZXJzIH0gZnJvbSAnLi9DYXVzYWxOZXRMYXllcnMvaW5kZXgnO1xuZXhwb3J0IHsgY2F1c2FsTmV0UGFyYW1ldGVycywgUGFyYW1ldGVyTWl4aW5zLCBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4JztcbmV4cG9ydCB7IGNhdXNhbE5ldFJ1bm5lciwgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9DYXVzYWxOZXRSdW5uZXIvaW5kZXgnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXllclJ1bm5lck1peGlucyB9IGZyb20gJy4vbGF5ZXJSdW5uZXIubWl4aW5zJztcbiIsIi8qKlxuICogVGhpcyBOZXRNaXhpbnMgY2xhc3MgcHJvdmlkZSBtaXhpbiBmb3IgYnVpbGRpbmcgcGlwZWxpbmVcbiAqIEBjbGFzcyBOZXRNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvbmV0Lm1peGlucy5iYWJlbC5qc11cbiAqL1xuY29uc3QgTGF5ZXJSdW5uZXJNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBhc3luYyBzYXZlUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgYXdhaXQgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzLnNhdmVQYXJhbXMoZmlsZU5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYXN5bmMgbG9hZFBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycyA9IGF3YWl0IHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycy5sb2FkUGFyYW1zKGZpbGVOYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2F2ZWRQYXJhbUxpc3QoKXtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycy5nZXRTYXZlZFBhcmFtTGlzdCgpO1xuICAgIH1cblxuICAgIGdldCBQYXJhbWV0ZXJJbml0aWFsaXplcigpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJJbml0aWFsaXplcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignUGFyYW1ldGVySW5pdGlhbGl6ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlckluaXRpYWxpemVyO1xuICAgIH1cblxuICAgIHNldCBQYXJhbWV0ZXJJbml0aWFsaXplcihwYXJhbWV0ZXJJbml0aWFsaXplcil7XG4gICAgICAgIHRoaXMucGFyYW1ldGVySW5pdGlhbGl6ZXIgPSBwYXJhbWV0ZXJJbml0aWFsaXplcjtcbiAgICB9XG5cblxuICAgIHNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgaWYoc3VwZXIuc2V0QnlDb25maWcpe1xuICAgICAgICAgICAgc3VwZXIuc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3NldCBMYXllclJ1bm5lciBieSBjb25maWcnKTtcbiAgICAgICAgY29uc3QgeyBOZXQgfSA9IHBpcGVsaW5lQ29uZmlnO1xuICAgICAgICBjb25zdCB7IExheWVycywgUGFyYW1ldGVycyB9ID0gTmV0OyBcbiAgICAgICAgdGhpcy5MYXllclJ1bm5lci5OZXRMYXllcnMgPSBMYXllcnM7XG4gICAgICAgIHRoaXMuUGFyYW1ldGVySW5pdGlhbGl6ZXIgPSBQYXJhbWV0ZXJzOyAgICAgICBcbiAgICAgICAgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzID0gdGhpcy5QYXJhbWV0ZXJJbml0aWFsaXplcihMYXllcnMpO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cblxuICAgIHNldCBMYXllclJ1bm5lcihydW5uZXIpe1xuICAgICAgICB0aGlzLmxheWVyUnVubmVyID0gcnVubmVyO1xuICAgIH1cbiAgICBnZXQgTGF5ZXJSdW5uZXIoKXtcbiAgICAgICAgaWYoIXRoaXMubGF5ZXJSdW5uZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2xheWVyUnVubmVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYXllclJ1bm5lcjtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXllclJ1bm5lck1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==