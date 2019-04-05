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
 * This class provides common used layers which can be accessed via **causalNetLayers** instance.
 * { mixWith: [ LayerMixins, DenseMixins ] }
 * @class CausalNetLayers
 * @extends BaseTensor
 * @example
 * [EXAMPLE ../examples/dense.layer.js]
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
   * @param {Number} inputSize - size of net input
   * @param {Number} outputSize - size of net output
   * @param {String|Function} activator - activator function can be customed or get from built-in by string name
   * @param {String} name - layer name, default by null
   * @returns { Object } layer
   */
  dense(inputSize, outputSize, activator = 'sigmoid', name = null) {
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
      Net: (value, params) => {
        let trace = {};
        let {
          Weight,
          Bias
        } = params;
        let result = value.dot(Weight).add(Bias);

        if (true) {
          result = result[activator]();
        } else {}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9kZW5zZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2NhdXNhbE5ldFBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFJ1bm5lci9jYXVzYWxOZXRSdW5uZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvcnVubmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvbGF5ZXJSdW5uZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRMYXllcnMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiRGVuc2VNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImxheWVyTmFtZXMiLCJuYW1lR2VuZXJhdG9yIiwibGF5ZXJUeXBlIiwibGF5ZXJJZHgiLCJsZW5ndGgiLCJuZXdOYW1lIiwicHVzaCIsIkRlbnNlTGF5ZXJNaXhpbnMiLCJQaXBlbGluZUNsYXNzIiwiZGVuc2UiLCJpbnB1dFNpemUiLCJvdXRwdXRTaXplIiwiYWN0aXZhdG9yIiwibmFtZSIsIk5hbWUiLCJUeXBlIiwiUGFyYW1ldGVycyIsIldlaWdodCIsIkJpYXMiLCJOZXQiLCJ2YWx1ZSIsInBhcmFtcyIsInRyYWNlIiwicmVzdWx0IiwiZG90IiwiYWRkIiwiQ2F1c2FsTmV0UGFyYW1ldGVycyIsIlN0b3JhZ2VNaXhpbnMiLCJQYXJhbWV0ZXJNaXhpbnMiLCJzdG9yYWdlIiwicGFyYW1ldGVyZnVuY3RvciIsInBhcmFtZXRlcnMiLCJTdG9yYWdlIiwiRiIsIlIiLCJDb3JlRnVuY3RvciIsImluZGV4REJTdG9yYWdlIiwiQmFzZVBhcmFtZXRlckNsYXNzIiwiUHJlZGljdFBhcmFtZXRlcnMiLCJQcmVkaWN0IiwiRXJyb3IiLCJFbmNvZGVQYXJhbWV0ZXJzIiwiRW5jb2RlIiwiRGVjb2RlUGFyYW1ldGVycyIsIkRlY29kZSIsInByZWRpY3RQYXJhbWV0ZXJzIiwiZW5jb2RlUGFyYW1ldGVycyIsImRlY29kZVBhcmFtZXRlcnMiLCJQYXJhbWV0ZXJTaXplcyIsInBhcmFtZXRlclNpemVzIiwiU2F2ZU1vZGVsRGlyIiwiZXhwb3J0UGFyYW1ldGVycyIsIkZuIiwicGFyYW0iLCJBcnJheSIsImZyb20iLCJkYXRhIiwiZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QiLCJmbiIsIlRyYXZlbGxlciIsImlzVGVuc29yIiwia1ZhbHMiLCJ0b1BhaXJzIiwicmVzIiwiayIsInZhbCIsInBhcmFtZXRlcnNTdW1tYXJ5IiwibWVhbiIsImluaXRQYXJhbVNpemVzQnlMYXllcnMiLCJsYXllcnMiLCJUIiwiR2V0UGFyYW1TaXplIiwiY29tcG9zZSIsImZyb21QYWlycyIsIm1hcCIsInAiLCJQcmVkaWN0U2l6ZSIsImdldEluIiwiRW5jb2RlU2l6ZSIsIkRlY29kZVNpemUiLCJpbXBvcnRQYXJhbWV0ZXJzIiwicGFyYW1PYmplY3QiLCJwcmVkaWN0UGFyYW1PYmplY3QiLCJlbmNvZGVQYXJhbU9iamVjdCIsImRlY29kZVBhcmFtT2JqZWN0IiwiU2V0T3JJbml0IiwiaW5pdFByZWRpY3QiLCJwYXJhbWV0ZXJNYXBXaXRoS2V5Iiwia2V5cyIsInBhcmFtU2l6ZSIsInBhcmFtVmFsdWUiLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsImFzVHlwZSIsInRlbnNvciIsIkluaXRQYXJhbWV0ZXJzIiwic2V0T3JJbml0UGFyYW1zIiwiZ2V0U2F2ZWRQYXJhbUxpc3QiLCJTYXZlRGlyIiwiZmlsZUxpc3QiLCJnZXRGaWxlTGlzdCIsImZpbGVOYW1lIiwicmVwbGFjZSIsInNhdmVQYXJhbXMiLCJ3cml0ZUZpbGUiLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZFBhcmFtcyIsInN0clBhcmFtcyIsInJlYWRGaWxlIiwicGFyc2UiLCJQYXJhbWV0ZXJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIiwiRnVuY3RvckNsYXNzIiwiaXNQYXJhbWV0ZXIiLCJpZkVsc2UiLCJpcyIsImFsbCIsIk51bWJlciIsImFsd2F5cyIsInBhcmFtZXRlck9iamVjdCIsIlJlcyIsInN1Yk9iamVjdCIsImtleSIsIk9iamVjdCIsIkNhdXNhbE5ldFJ1bm5lciIsIlJ1bm5lck1peGlucyIsIkJhc2VSdW5uZXJDbGFzcyIsIk5ldFBhcmFtZXRlcnMiLCJuZXRQYXJhbWV0ZXJzIiwiTmV0TGF5ZXJzIiwibmV0TGF5ZXJzIiwicnVuT3BGbG93IiwiZmxvdyIsIk9wc1J1bm5lciIsImFkZEluZGV4IiwicmVkdWNlIiwiX18iLCJub2RlIiwiaWR4IiwiUGFyYW1ldGVyIiwiT3AiLCJBcmdzIiwic2hhcGUiLCJydW5PcExheWVyIiwibmV0IiwicnVuTGF5ZXIiLCJsYXllckNvbmZpZ3VyZSIsImxheWVyUGFyYW1ldGVycyIsIkZsb3ciLCJ0cmFjaW5nIiwidHJhY2VzIiwicnVuIiwic2FtcGxlcyIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsImxhc3RMYXllciIsImxheWVyIiwibGF5ZXJPdXRwdXQiLCJsb2dnZXIiLCJkZWJ1ZyIsIlByZWRpY3RvciIsInByZWRpY3RMYXllcnMiLCJQcmVkaWN0UGFyYW1ldGVyc0xlbnNlcyIsIkVuY29kZXIiLCJlbmNvZGVMYXllcnMiLCJFbmNvZGVQYXJhbWV0ZXJzTGVuc2VzIiwiRGVjb2RlciIsImRlY29kZUxheWVycyIsIkRlY29kZVBhcmFtZXRlcnNMZW5zZXMiLCJMYXllclJ1bm5lck1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiTGF5ZXJSdW5uZXIiLCJQYXJhbWV0ZXJJbml0aWFsaXplciIsInBhcmFtZXRlckluaXRpYWxpemVyIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsIkxvZ2dlciIsImdyb3VwQmVnaW4iLCJMYXllcnMiLCJncm91cEVuZCIsInJ1bm5lciIsImxheWVyUnVubmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0FBWDtBQUNIOztBQUNELFdBQU8sS0FBS3VJLG9CQUFaO0FBQ0g7O0FBRUQsTUFBSUQsb0JBQUosQ0FBeUJDLG9CQUF6QixFQUE4QztBQUMxQyxTQUFLQSxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0g7O0FBR0RDLGFBQVcsQ0FBQ0MsY0FBRCxFQUFnQjtBQUN2QixRQUFHLE1BQU1ELFdBQVQsRUFBcUI7QUFDakIsWUFBTUEsV0FBTixDQUFrQkMsY0FBbEI7QUFDSDs7QUFDRCxTQUFLQyxNQUFMLENBQVlDLFVBQVosQ0FBdUIsMkJBQXZCO0FBQ0EsVUFBTTtBQUFFaEs7QUFBRixRQUFVOEosY0FBaEI7QUFDQSxVQUFNO0FBQUVHLFlBQUY7QUFBVXBLO0FBQVYsUUFBeUJHLEdBQS9CO0FBQ0EsU0FBSzBKLFdBQUwsQ0FBaUIxQyxTQUFqQixHQUE2QmlELE1BQTdCO0FBQ0EsU0FBS04sb0JBQUwsR0FBNEI5SixVQUE1QjtBQUNBLFNBQUs2SixXQUFMLENBQWlCNUMsYUFBakIsR0FBaUMsS0FBSzZDLG9CQUFMLENBQTBCTSxNQUExQixDQUFqQztBQUNBLFNBQUtGLE1BQUwsQ0FBWUcsUUFBWjtBQUNIOztBQUVELE1BQUlSLFdBQUosQ0FBZ0JTLE1BQWhCLEVBQXVCO0FBQ25CLFNBQUtDLFdBQUwsR0FBbUJELE1BQW5CO0FBQ0g7O0FBQ0QsTUFBSVQsV0FBSixHQUFpQjtBQUNiLFFBQUcsQ0FBQyxLQUFLVSxXQUFULEVBQXFCO0FBQ2pCLFlBQU0vSSxLQUFLLENBQUMsd0JBQUQsQ0FBWDtBQUNIOztBQUNELFdBQU8sS0FBSytJLFdBQVo7QUFDSDs7QUEvQzBFLENBQS9FOztBQWtEZVosZ0ZBQWYsRTs7Ozs7Ozs7Ozs7QUMxREEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9sYXllci5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbGF5ZXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2xheWVyXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRGVuc2VNaXhpbnMgfSBmcm9tICcuL2RlbnNlLm1peGlucyc7XG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgY29tbW9uIHVzZWQgbGF5ZXJzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRMYXllcnMqKiBpbnN0YW5jZS5cbiAqIHsgbWl4V2l0aDogWyBMYXllck1peGlucywgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJzXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvZGVuc2UubGF5ZXIuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldExheWVycyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgWyBEZW5zZU1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYXllck5hbWVzID0gW107XG4gICAgfVxuICAgIG5hbWVHZW5lcmF0b3IobGF5ZXJUeXBlKXtcbiAgICAgICAgY29uc3QgbGF5ZXJJZHggPSB0aGlzLmxheWVyTmFtZXMubGVuZ3RoOyBcbiAgICAgICAgbGV0IG5ld05hbWUgPSBsYXllclR5cGUgKyAnLycgKyBsYXllcklkeDtcbiAgICAgICAgdGhpcy5sYXllck5hbWVzLnB1c2gobmV3TmFtZSk7XG4gICAgICAgIHJldHVybiBuZXdOYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldExheWVycygpOyIsImNvbnN0IERlbnNlTGF5ZXJNaXhpbnMgPSAoUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIFBpcGVsaW5lQ2xhc3N7XG4gICAgLyoqXG4gICAgICogU2ltcGxlIGRlbnNlIGxheWVyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGlucHV0U2l6ZSAtIHNpemUgb2YgbmV0IGlucHV0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG91dHB1dFNpemUgLSBzaXplIG9mIG5ldCBvdXRwdXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gYWN0aXZhdG9yIC0gYWN0aXZhdG9yIGZ1bmN0aW9uIGNhbiBiZSBjdXN0b21lZCBvciBnZXQgZnJvbSBidWlsdC1pbiBieSBzdHJpbmcgbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gbGF5ZXIgbmFtZSwgZGVmYXVsdCBieSBudWxsXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSBsYXllclxuICAgICAqL1xuICAgIGRlbnNlKGlucHV0U2l6ZSwgb3V0cHV0U2l6ZSwgYWN0aXZhdG9yPSdzaWdtb2lkJyxuYW1lPW51bGwpe1xuICAgICAgICBpZighbmFtZSl7XG4gICAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lR2VuZXJhdG9yKCdkZW5zZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgTmFtZTogbmFtZSwgVHlwZTogJ0xheWVyJyxcbiAgICAgICAgICAgIFBhcmFtZXRlcnM6IHsgV2VpZ2h0OiBbaW5wdXRTaXplLCBvdXRwdXRTaXplXSwgQmlhczogW291dHB1dFNpemVdIH0sXG4gICAgICAgICAgICBOZXQ6ICh2YWx1ZSwgcGFyYW1zKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhY2UgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHtXZWlnaHQsIEJpYXN9ID0gcGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdmFsdWUuZG90KFdlaWdodCkuYWRkKEJpYXMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIFwiYWN0aXZhdG9yXCIgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W2FjdGl2YXRvcl0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gYWN0aXZhdG9yKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0LCB0cmFjZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IERlbnNlTGF5ZXJNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRMYXllcnMgfSBmcm9tICcuL2NhdXNhbE5ldExheWVycyc7IiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFN0b3JhZ2VNaXhpbnMsIGluZGV4REJTdG9yYWdlIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1ldGVyTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXIubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgcGFyYW1ldGVyZnVuY3RvciB9IGZyb20gJy4vcGFyYW1ldGVyRnVuY3Rvcic7XG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBzdGFuZGFyZCBpbXBsZW1lbnRhdGlvbiBmb3IgbW9kZWwgcGFyYW1ldGVycyB3aGljaCBjYW4gYmUgYWNjZXNzZWQgdmlhICoqY2F1c2FsTmV0UGFyYW1ldGVycyoqIGluc3RhbmNlXG4gKiB7IG1peFdpdGg6IFtTdG9yYWdlTWl4aW5zLCBQYXJhbWV0ZXJNaXhpbnNdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRQYXJhbWV0ZXJzXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZS9wYXJhbWV0ZXJzLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRQYXJhbWV0ZXJzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbU3RvcmFnZU1peGlucywgUGFyYW1ldGVyTWl4aW5zXSApe1xuICAgIGNvbnN0cnVjdG9yKHN0b3JhZ2UsIHBhcmFtZXRlcmZ1bmN0b3Ipe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBzdG9yYWdlO1xuICAgICAgICB0aGlzLkYgPSBwYXJhbWV0ZXJmdW5jdG9yO1xuICAgICAgICB0aGlzLlIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgfVxufSAgIFxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0UGFyYW1ldGVycyhpbmRleERCU3RvcmFnZSwgcGFyYW1ldGVyZnVuY3Rvcik7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRQYXJhbWV0ZXJzIH0gZnJvbSAnLi9jYXVzYWxOZXRQYXJhbWV0ZXJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1ldGVyTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXIubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1ldGVyRnVuY3Rvck1peGlucyB9IGZyb20gJy4vcGFyYW1ldGVyRnVuY3Rvci5taXhpbnMnOyIsImNvbnN0IFBhcmFtZXRlck1peGlucyA9IChCYXNlUGFyYW1ldGVyQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGFyYW1ldGVyQ2xhc3N7IFxuICAgIFxuICAgIGdldCBQcmVkaWN0UGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzIHx8ICF0aGlzLnBhcmFtZXRlcnMuUHJlZGljdCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5QcmVkaWN0O1xuICAgIH1cbiAgICBcbiAgICBnZXQgRW5jb2RlUGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzIHx8ICF0aGlzLnBhcmFtZXRlcnMuRW5jb2RlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLkVuY29kZTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IERlY29kZVBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyB8fCAhdGhpcy5wYXJhbWV0ZXJzLkRlY29kZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycy5EZWNvZGU7XG4gICAgfVxuICAgIFxuICAgIHNldCBQcmVkaWN0UGFyYW1ldGVycyhwcmVkaWN0UGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9ICh0aGlzLnBhcmFtZXRlcnMpPyB0aGlzLnBhcmFtZXRlcnM6IHt9O1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuUHJlZGljdCA9IHByZWRpY3RQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgRW5jb2RlUGFyYW1ldGVycyhlbmNvZGVQYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gKHRoaXMucGFyYW1ldGVycyk/IHRoaXMucGFyYW1ldGVyczoge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5FbmNvZGUgPSBlbmNvZGVQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgRGVjb2RlUGFyYW1ldGVycyhkZWNvZGVQYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gKHRoaXMucGFyYW1ldGVycyk/IHRoaXMucGFyYW1ldGVyczoge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5EZWNvZGUgPSBkZWNvZGVQYXJhbWV0ZXJzO1xuICAgIH1cblxuICAgIHNldCBQYXJhbWV0ZXJTaXplcyhwYXJhbWV0ZXJTaXplcyl7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyU2l6ZXMgPSBwYXJhbWV0ZXJTaXplcztcbiAgICB9XG5cbiAgICBnZXQgUGFyYW1ldGVyU2l6ZXMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVyU2l6ZXMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlclNpemVzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJTaXplcztcbiAgICB9XG4gICAgXG4gICAgZ2V0IFNhdmVNb2RlbERpcigpe1xuICAgICAgICByZXR1cm4gJ3NhdmVNb2RlbC8nO1xuICAgIH1cbiAgICBcbiAgICBleHBvcnRQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChhc3luYyAoKT0+e1xuICAgICAgICAgICAgY29uc3QgRm4gPSBhc3luYyAocGFyYW0pPT4oQXJyYXkuZnJvbShhd2FpdCBwYXJhbS5kYXRhKCkpKTtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSBhd2FpdCB0aGlzLmV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHRoaXMucGFyYW1ldGVycywgRm4pO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICBcbiAgICBhc3luYyBleHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdChwYXJhbXMsIGZuKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVHJhdmVsbGVyID0gYXN5bmMgKHBhcmFtcywgZm4pPT57XG4gICAgICAgICAgICBpZih0aGlzLmlzVGVuc29yKHBhcmFtcykpe1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBmbihwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQga1ZhbHMgPSBSLnRvUGFpcnMocGFyYW1zKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzID0ge307XG4gICAgICAgICAgICAgICAgZm9yKGxldCBbaywgdmFsXSBvZiBrVmFscyl7XG4gICAgICAgICAgICAgICAgICAgIHJlc1trXSA9IGF3YWl0IFRyYXZlbGxlcih2YWwsIGZuKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhd2FpdCBUcmF2ZWxsZXIocGFyYW1zLCBmbik7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHBhcmFtZXRlcnNTdW1tYXJ5KCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlciBtdXN0IGJlIHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IEZuID0gYXN5bmMgKHBhcmFtKT0+QXJyYXkuZnJvbShhd2FpdCBwYXJhbS5tZWFuKCkuZGF0YSgpKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QodGhpcy5wYXJhbWV0ZXJzLCBGbik7XG4gICAgfVxuICAgIFxuICAgIGluaXRQYXJhbVNpemVzQnlMYXllcnMobGF5ZXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc3QgR2V0UGFyYW1TaXplID0gUi5jb21wb3NlKFIuZnJvbVBhaXJzLCBSLm1hcChwPT5bcC5OYW1lLCBwLlBhcmFtZXRlcnNdKSk7XG4gICAgICAgIGNvbnN0IFByZWRpY3RTaXplID0gR2V0UGFyYW1TaXplKEYuZ2V0SW4oWydQcmVkaWN0J10sIGxheWVycywgW10pKTtcbiAgICAgICAgY29uc3QgRW5jb2RlU2l6ZSAgPSBHZXRQYXJhbVNpemUoRi5nZXRJbihbJ0VuY29kZSddLCBsYXllcnMsIFtdKSk7XG4gICAgICAgIGNvbnN0IERlY29kZVNpemUgID0gR2V0UGFyYW1TaXplKEYuZ2V0SW4oWydEZWNvZGUnXSwgbGF5ZXJzLCBbXSkpOyBcbiAgICAgICAgdGhpcy5QYXJhbWV0ZXJTaXplcyA9IHtQcmVkaWN0U2l6ZSwgRW5jb2RlU2l6ZSwgRGVjb2RlU2l6ZX07XG4gICAgfVxuXG4gICAgaW1wb3J0UGFyYW1ldGVycyhwYXJhbU9iamVjdCl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIEYgPSB0aGlzLkY7XG4gICAgICAgIGxldCBwcmVkaWN0UGFyYW1PYmplY3QgPSBGLmdldEluKFsnUHJlZGljdCddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZW5jb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0VuY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBsZXQgZGVjb2RlUGFyYW1PYmplY3QgID0gRi5nZXRJbihbJ0RlY29kZSddLCBwYXJhbU9iamVjdCwge30pO1xuICAgICAgICBjb25zdCB7IFByZWRpY3RTaXplLCBFbmNvZGVTaXplLCBEZWNvZGVTaXplIH0gPSB0aGlzLlBhcmFtZXRlclNpemVzO1xuICAgICAgICBjb25zdCBTZXRPckluaXQgPSAoIGluaXRQcmVkaWN0LCBwYXJhbU9iamVjdCApPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGLnBhcmFtZXRlck1hcFdpdGhLZXkoKGtleXMsIHBhcmFtU2l6ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbVZhbHVlID0gdGhpcy5GLmdldEluKGtleXMsIHBhcmFtT2JqZWN0LCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhcmFtVmFsdWUgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBULnZhcmlhYmxlKFQucmFuZG9tTm9ybWFsKHBhcmFtU2l6ZSkuYXNUeXBlKCdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVC52YXJpYWJsZShULnRlbnNvcihwYXJhbVZhbHVlLCBwYXJhbVNpemUsICdmbG9hdDMyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LCBpbml0UHJlZGljdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy5QcmVkaWN0UGFyYW1ldGVycyA9IFNldE9ySW5pdCggUHJlZGljdFNpemUsIHByZWRpY3RQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkVuY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBFbmNvZGVTaXplLCBlbmNvZGVQYXJhbU9iamVjdCApO1xuICAgICAgICB0aGlzLkRlY29kZVBhcmFtZXRlcnMgID0gU2V0T3JJbml0KCBEZWNvZGVTaXplLCBkZWNvZGVQYXJhbU9iamVjdCApOyBcbiAgICB9XG5cbiAgICBJbml0UGFyYW1ldGVycyhwYXJhbU9iamVjdD17fSl7XG4gICAgICAgIHJldHVybiAobGF5ZXJzKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0T3JJbml0UGFyYW1zKGxheWVycywgcGFyYW1PYmplY3QpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNldE9ySW5pdFBhcmFtcyhsYXllcnMsIHBhcmFtT2JqZWN0KXtcbiAgICAgICAgdGhpcy5pbml0UGFyYW1TaXplc0J5TGF5ZXJzKGxheWVycyk7XG4gICAgICAgIHRoaXMuaW1wb3J0UGFyYW1ldGVycyhwYXJhbU9iamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkUGFyYW1MaXN0KCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2UsIFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgU3RvcmFnZS5nZXRGaWxlTGlzdChTYXZlRGlyKTtcbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0Lm1hcChmaWxlTmFtZT0+ZmlsZU5hbWUucmVwbGFjZShTYXZlRGlyLCcnKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGNvbnN0IFNhdmVEaXIgPSB0aGlzLlNhdmVNb2RlbERpcjtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXhwb3J0UGFyYW1ldGVycygpO1xuICAgICAgICBhd2FpdCBTdG9yYWdlLndyaXRlRmlsZShTYXZlRGlyICsgZmlsZU5hbWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZSwgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBsZXQgc3RyUGFyYW1zID0gYXdhaXQgU3RvcmFnZS5yZWFkRmlsZShTYXZlRGlyK2ZpbGVOYW1lKTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IEpTT04ucGFyc2Uoc3RyUGFyYW1zKTtcbiAgICAgICAgdGhpcy5pbXBvcnRQYXJhbWV0ZXJzKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFtZXRlck1peGluczsiLCJpbXBvcnQge0Z1bmN0b3IgYXMgQmFzZUZ1bmN0b3J9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQge3BsYXRmb3JtfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucyc7XG5cbmNsYXNzIFBhcmFtZXRlckZ1bmN0b3IgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBbIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUGFyYW1ldGVyRnVuY3RvcigpOyIsImNvbnN0IFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgPSAoRnVuY3RvckNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgRnVuY3RvckNsYXNzeyBcbiAgICBpc1BhcmFtZXRlcih2YWwpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5pZkVsc2UoUi5pcyhBcnJheSksIFIuYWxsKFIuaXMoTnVtYmVyKSksIFIuYWx3YXlzKGZhbHNlKSkodmFsKTtcbiAgICB9XG4gICAgcGFyYW1ldGVyTWFwV2l0aEtleShmbiwgcGFyYW1ldGVyT2JqZWN0KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFJlcyA9IChrZXlzLCBzdWJPYmplY3QpID0+IFIuY29tcG9zZShSLmZyb21QYWlycywgXG4gICAgICAgICAgICAgICAgICAgICAgICBSLm1hcCgoW2tleSwgc3ViT2JqZWN0XSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzUGFyYW1ldGVyKHN1Yk9iamVjdCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgZm4oWy4uLmtleXMsIGtleV0sIHN1Yk9iamVjdCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihSLmlzKE9iamVjdCwgc3ViT2JqZWN0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgUmVzKFsuLi5rZXlzLCBrZXldLCBzdWJPYmplY3QpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIHN1Yk9iamVjdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgUi50b1BhaXJzKShzdWJPYmplY3QpO1xuICAgICAgICByZXR1cm4gUmVzKFtdLCBwYXJhbWV0ZXJPYmplY3QpO1xuICAgIH0gICAgICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYW1ldGVyRnVuY3Rvck1peGluczsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBSdW5uZXJNaXhpbnMgfSBmcm9tICcuL3J1bm5lci5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldFJ1bm5lciBjbGFzcyBwcm92aWRlIG5ldCBleGNlY3V0b3Igd2hpY2ggaXMgcHJvdmlkZWQgcGlwZWxpbmUgaW5zdGFuY2UgYXQgKipMYXllclJ1bm5lcioqIGF0dHJpYnV0ZS5cbiAqIHsgbWl4V2l0aDogWyBSdW5uZXJNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0UnVubmVyXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvcnVubmVyLm1peGlucy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UnVubmVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbIFJ1bm5lck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRSdW5uZXIoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFJ1bm5lciB9IGZyb20gJy4vY2F1c2FsTmV0UnVubmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJzsiLCIvKipcbiAqIFRoaXMgUnVubmVyTWl4aW5zIGNsYXNzIHByb3ZpZGUgbWV0aG9kcyBmb3IgcnVubmVyIGNsYXNzLlxuICogQGNsYXNzIFJ1bm5lck1peGluc1xuICogQGV4dGVuZHMgQmFzZVJ1bm5lckNsYXNzXG4gKi9cbmNvbnN0IFJ1bm5lck1peGlucyA9ICggQmFzZVJ1bm5lckNsYXNzICk9PiBjbGFzcyBleHRlbmRzIEJhc2VSdW5uZXJDbGFzc3tcbiAgICBzZXQgTmV0UGFyYW1ldGVycyhwYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5uZXRQYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG4gICAgc2V0IE5ldExheWVycyhuZXRMYXllcnMpe1xuICAgICAgICB0aGlzLm5ldExheWVycyA9IG5ldExheWVycztcbiAgICB9XG4gICAgZ2V0IE5ldFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMubmV0UGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0UGFyYW1ldGVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0UGFyYW1ldGVycztcbiAgICB9XG4gICAgZ2V0IE5ldExheWVycygpe1xuICAgICAgICBpZighdGhpcy5uZXRMYXllcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldExheWVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0TGF5ZXJzO1xuICAgIH1cbiAgICBydW5PcEZsb3codmFsdWUsIGZsb3csIHBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBPcHNSdW5uZXIgPSBSLmFkZEluZGV4KFIucmVkdWNlKShSLl9fLHtyZXN1bHQ6IHZhbHVlLCB0cmFjZToge319LCBmbG93KTtcbiAgICAgICAgdmFyIHtyZXN1bHQsIHRyYWNlfSA9IE9wc1J1bm5lcigoe3Jlc3VsdCwgdHJhY2V9LCBub2RlLCBpZHgpPT57XG4gICAgICAgICAgICBpZihub2RlLlBhcmFtZXRlcil7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHBhcmFtZXRlcnNbbm9kZS5QYXJhbWV0ZXJdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtub2RlLk9wXShwYXJhbXMsIC4uLm5vZGUuQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtub2RlLk9wXSguLi5ub2RlLkFyZ3MpOyAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmFjZVtpZHhdID0gcmVzdWx0LnNoYXBlO1xuICAgICAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7cmVzdWx0LCB0cmFjZX07XG4gICAgfVxuXG4gICAgcnVuT3BMYXllcih2YWx1ZSwgbmV0LCBwYXJhbWV0ZXJzKXtcbiAgICAgICAgbGV0IHsgcmVzdWx0LCB0cmFjZSB9ID0gbmV0KHZhbHVlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICB9XG4gICAgcnVuTGF5ZXIodmFsdWUsIGxheWVyQ29uZmlndXJlLCBsYXllclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCB7TmFtZSwgVHlwZSwgRmxvdywgTmV0fSA9IGxheWVyQ29uZmlndXJlO1xuICAgICAgICBpZihUeXBlID09PSAnVGVuc29yJyl7XG4gICAgICAgICAgICBsZXQge3Jlc3VsdCwgdHJhY2V9ID0gdGhpcy5ydW5PcEZsb3codmFsdWUsIEZsb3csIGxheWVyUGFyYW1ldGVycyk7XG4gICAgICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0LCB0cmFjZX07XG4gICAgICAgIH0gICBcbiAgICAgICAgZWxzZSBpZihUeXBlID09PSAnTGF5ZXInKXtcbiAgICAgICAgICAgIGxldCB7cmVzdWx0LCB0cmFjZX0gPSB0aGlzLnJ1bk9wTGF5ZXIodmFsdWUsIE5ldCwgbGF5ZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB7W05hbWVdOiByZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSAgIFxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3R5cGUgbXVzdCBiZSBlaXRoZXIgTGF5ZXIgb3IgVGVuc29yJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFjaW5nKHRyYWNlcywgbmFtZSwgdHJhY2Upe1xuICAgICAgICBpZih0cmFjZXMpe1xuICAgICAgICAgICAgdHJhY2VzLnB1c2goe1tuYW1lXTogdHJhY2V9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBydW4obGF5ZXJzLCBzYW1wbGVzLCBwYXJhbWV0ZXJzLCB0cmFjZXM9bnVsbCl7XG4gICAgICAgIGxldCBwaXBlVmFsdWUgPSB7UGlwZUlucHV0OiBzYW1wbGVzfSwgbGFzdExheWVyID0gJ1BpcGVJbnB1dCc7XG4gICAgICAgIGZvcihsZXQgbGF5ZXIgb2YgbGF5ZXJzKXtcbiAgICAgICAgICAgIGxldCBsYXllck91dHB1dCA9IHRoaXMucnVuTGF5ZXIocGlwZVZhbHVlW2xhc3RMYXllcl0sIGxheWVyLCBwYXJhbWV0ZXJzW2xheWVyLk5hbWVdKTtcbiAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgbGFzdExheWVyID0gbGF5ZXIuTmFtZTtcbiAgICAgICAgICAgIHRoaXMudHJhY2luZyh0cmFjZXMsIGxheWVyLk5hbWUsIGxheWVyT3V0cHV0LnRyYWNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0cmFjZXMpe1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3RyYWNlc30pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlVmFsdWVbbGFzdExheWVyXTtcbiAgICB9XG5cbiAgICBnZXQgUHJlZGljdG9yKCl7XG4gICAgICAgIGxldCBwcmVkaWN0TGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuUHJlZGljdDtcbiAgICAgICAgY29uc3QgUHJlZGljdFBhcmFtZXRlcnNMZW5zZXMgPSAoKT0+dGhpcy5OZXRQYXJhbWV0ZXJzLlByZWRpY3RQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICBsZXQgcHJlZGljdFBhcmFtZXRlcnMgPSBQcmVkaWN0UGFyYW1ldGVyc0xlbnNlcygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVuKHByZWRpY3RMYXllcnMsIHNhbXBsZXMsIHByZWRpY3RQYXJhbWV0ZXJzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IEVuY29kZXIoKXtcbiAgICAgICAgbGV0IGVuY29kZUxheWVycyA9IHRoaXMuTmV0TGF5ZXJzLkVuY29kZTtcbiAgICAgICAgY29uc3QgRW5jb2RlUGFyYW1ldGVyc0xlbnNlcyA9ICgpPT50aGlzLk5ldFBhcmFtZXRlcnMuRW5jb2RlUGFyYW1ldGVycztcbiAgICAgICAgcmV0dXJuIChzYW1wbGVzKT0+e1xuICAgICAgICAgICAgbGV0IGVuY29kZVBhcmFtZXRlcnMgPSBFbmNvZGVQYXJhbWV0ZXJzTGVuc2VzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4oZW5jb2RlTGF5ZXJzLCBzYW1wbGVzLCBlbmNvZGVQYXJhbWV0ZXJzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IERlY29kZXIoKXtcbiAgICAgICAgbGV0IGRlY29kZUxheWVycyA9IHRoaXMuTmV0TGF5ZXJzLkRlY29kZTtcbiAgICAgICAgY29uc3QgRGVjb2RlUGFyYW1ldGVyc0xlbnNlcyA9ICgpPT50aGlzLk5ldFBhcmFtZXRlcnMuRW5jb2RlUGFyYW1ldGVycztcbiAgICAgICAgcmV0dXJuIChzYW1wbGVzKT0+e1xuICAgICAgICAgICAgbGV0IGRlY29kZVBhcmFtZXRlcnMgPSBEZWNvZGVQYXJhbWV0ZXJzTGVuc2VzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4oZGVjb2RlTGF5ZXJzLCBzYW1wbGVzLCBkZWNvZGVQYXJhbWV0ZXJzKTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSdW5uZXJNaXhpbnM7XG4iLCJleHBvcnQgeyBjYXVzYWxOZXRMYXllcnMgfSBmcm9tICcuL0NhdXNhbE5ldExheWVycy9pbmRleCc7XG5leHBvcnQgeyBjYXVzYWxOZXRQYXJhbWV0ZXJzLCBQYXJhbWV0ZXJNaXhpbnMsIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgfSBmcm9tICcuL0NhdXNhbE5ldFBhcmFtZXRlcnMvaW5kZXgnO1xuZXhwb3J0IHsgY2F1c2FsTmV0UnVubmVyLCBSdW5uZXJNaXhpbnMgfSBmcm9tICcuL0NhdXNhbE5ldFJ1bm5lci9pbmRleCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExheWVyUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9sYXllclJ1bm5lci5taXhpbnMnO1xuIiwiLyoqXG4gKiBUaGlzIG1peGluIGNsYXNzIHByb3ZpZGUgYXR0cmlidXRlczogKipQYXJhbWV0ZXJJbml0aWFsaXplcioqLCAqKkxheWVyUnVubmVyKiosIFxuICogYW5kIGhhbmRsZSAqKk5ldCoqIHNldHRpbmcgb2YgcGlwZWxpbmVDb25maWcgXG4gKiBAY2xhc3MgTGF5ZXJSdW5uZXJNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvbGF5ZXJSdW5uZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBMYXllclJ1bm5lck1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIGFzeW5jIHNhdmVQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICBhd2FpdCB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMuc2F2ZVBhcmFtcyhmaWxlTmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzID0gYXdhaXQgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzLmxvYWRQYXJhbXMoZmlsZU5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRTYXZlZFBhcmFtTGlzdCgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5MYXllclJ1bm5lci5OZXRQYXJhbWV0ZXJzLmdldFNhdmVkUGFyYW1MaXN0KCk7XG4gICAgfVxuXG4gICAgZ2V0IFBhcmFtZXRlckluaXRpYWxpemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlckluaXRpYWxpemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdQYXJhbWV0ZXJJbml0aWFsaXplciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVySW5pdGlhbGl6ZXI7XG4gICAgfVxuXG4gICAgc2V0IFBhcmFtZXRlckluaXRpYWxpemVyKHBhcmFtZXRlckluaXRpYWxpemVyKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJJbml0aWFsaXplciA9IHBhcmFtZXRlckluaXRpYWxpemVyO1xuICAgIH1cblxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc2V0IExheWVyUnVubmVyIGJ5IGNvbmZpZycpO1xuICAgICAgICBjb25zdCB7IE5ldCB9ID0gcGlwZWxpbmVDb25maWc7XG4gICAgICAgIGNvbnN0IHsgTGF5ZXJzLCBQYXJhbWV0ZXJzIH0gPSBOZXQ7IFxuICAgICAgICB0aGlzLkxheWVyUnVubmVyLk5ldExheWVycyA9IExheWVycztcbiAgICAgICAgdGhpcy5QYXJhbWV0ZXJJbml0aWFsaXplciA9IFBhcmFtZXRlcnM7ICAgICAgIFxuICAgICAgICB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMgPSB0aGlzLlBhcmFtZXRlckluaXRpYWxpemVyKExheWVycyk7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxuXG4gICAgc2V0IExheWVyUnVubmVyKHJ1bm5lcil7XG4gICAgICAgIHRoaXMubGF5ZXJSdW5uZXIgPSBydW5uZXI7XG4gICAgfVxuICAgIGdldCBMYXllclJ1bm5lcigpe1xuICAgICAgICBpZighdGhpcy5sYXllclJ1bm5lcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbGF5ZXJSdW5uZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyUnVubmVyO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyUnVubmVyTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9