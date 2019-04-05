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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9kZW5zZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2NhdXNhbE5ldFBhcmFtZXRlcnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRQYXJhbWV0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UGFyYW1ldGVycy9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFJ1bm5lci9jYXVzYWxOZXRSdW5uZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRSdW5uZXIvcnVubmVyLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvbGF5ZXJSdW5uZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXRMYXllcnMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlVGVuc29yIiwiRGVuc2VNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImxheWVyTmFtZXMiLCJuYW1lR2VuZXJhdG9yIiwibGF5ZXJUeXBlIiwibGF5ZXJJZHgiLCJsZW5ndGgiLCJuZXdOYW1lIiwicHVzaCIsIkRlbnNlTGF5ZXJNaXhpbnMiLCJQaXBlbGluZUNsYXNzIiwiZGVuc2UiLCJpbnB1dFNpemUiLCJvdXRwdXRTaXplIiwiYWN0aXZhdG9yIiwibmFtZSIsIk5hbWUiLCJUeXBlIiwiUGFyYW1ldGVycyIsIldlaWdodCIsIkJpYXMiLCJOZXQiLCJ2YWx1ZSIsInBhcmFtcyIsInRyYWNlIiwicmVzdWx0IiwiZG90IiwiYWRkIiwiQ2F1c2FsTmV0UGFyYW1ldGVycyIsIlN0b3JhZ2VNaXhpbnMiLCJQYXJhbWV0ZXJNaXhpbnMiLCJzdG9yYWdlIiwicGFyYW1ldGVyZnVuY3RvciIsInBhcmFtZXRlcnMiLCJTdG9yYWdlIiwiRiIsIlIiLCJDb3JlRnVuY3RvciIsImluZGV4REJTdG9yYWdlIiwiQmFzZVBhcmFtZXRlckNsYXNzIiwiUHJlZGljdFBhcmFtZXRlcnMiLCJQcmVkaWN0IiwiRXJyb3IiLCJFbmNvZGVQYXJhbWV0ZXJzIiwiRW5jb2RlIiwiRGVjb2RlUGFyYW1ldGVycyIsIkRlY29kZSIsInByZWRpY3RQYXJhbWV0ZXJzIiwiZW5jb2RlUGFyYW1ldGVycyIsImRlY29kZVBhcmFtZXRlcnMiLCJQYXJhbWV0ZXJTaXplcyIsInBhcmFtZXRlclNpemVzIiwiU2F2ZU1vZGVsRGlyIiwiZXhwb3J0UGFyYW1ldGVycyIsIkZuIiwicGFyYW0iLCJBcnJheSIsImZyb20iLCJkYXRhIiwiZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QiLCJmbiIsIlRyYXZlbGxlciIsImlzVGVuc29yIiwia1ZhbHMiLCJ0b1BhaXJzIiwicmVzIiwiayIsInZhbCIsInBhcmFtZXRlcnNTdW1tYXJ5IiwibWVhbiIsImluaXRQYXJhbVNpemVzQnlMYXllcnMiLCJsYXllcnMiLCJUIiwiR2V0UGFyYW1TaXplIiwiY29tcG9zZSIsImZyb21QYWlycyIsIm1hcCIsInAiLCJQcmVkaWN0U2l6ZSIsImdldEluIiwiRW5jb2RlU2l6ZSIsIkRlY29kZVNpemUiLCJpbXBvcnRQYXJhbWV0ZXJzIiwicGFyYW1PYmplY3QiLCJwcmVkaWN0UGFyYW1PYmplY3QiLCJlbmNvZGVQYXJhbU9iamVjdCIsImRlY29kZVBhcmFtT2JqZWN0IiwiU2V0T3JJbml0IiwiaW5pdFByZWRpY3QiLCJwYXJhbWV0ZXJNYXBXaXRoS2V5Iiwia2V5cyIsInBhcmFtU2l6ZSIsInBhcmFtVmFsdWUiLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsImFzVHlwZSIsInRlbnNvciIsIkluaXRQYXJhbWV0ZXJzIiwic2V0T3JJbml0UGFyYW1zIiwiZ2V0U2F2ZWRQYXJhbUxpc3QiLCJTYXZlRGlyIiwiZmlsZUxpc3QiLCJnZXRGaWxlTGlzdCIsImZpbGVOYW1lIiwicmVwbGFjZSIsInNhdmVQYXJhbXMiLCJ3cml0ZUZpbGUiLCJKU09OIiwic3RyaW5naWZ5IiwibG9hZFBhcmFtcyIsInN0clBhcmFtcyIsInJlYWRGaWxlIiwicGFyc2UiLCJQYXJhbWV0ZXJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIiwiRnVuY3RvckNsYXNzIiwiaXNQYXJhbWV0ZXIiLCJpZkVsc2UiLCJpcyIsImFsbCIsIk51bWJlciIsImFsd2F5cyIsInBhcmFtZXRlck9iamVjdCIsIlJlcyIsInN1Yk9iamVjdCIsImtleSIsIk9iamVjdCIsIkNhdXNhbE5ldFJ1bm5lciIsIlJ1bm5lck1peGlucyIsIkJhc2VSdW5uZXJDbGFzcyIsIk5ldFBhcmFtZXRlcnMiLCJuZXRQYXJhbWV0ZXJzIiwiTmV0TGF5ZXJzIiwibmV0TGF5ZXJzIiwicnVuT3BGbG93IiwiZmxvdyIsIk9wc1J1bm5lciIsImFkZEluZGV4IiwicmVkdWNlIiwiX18iLCJub2RlIiwiaWR4IiwiUGFyYW1ldGVyIiwiT3AiLCJBcmdzIiwic2hhcGUiLCJydW5PcExheWVyIiwibmV0IiwicnVuTGF5ZXIiLCJsYXllckNvbmZpZ3VyZSIsImxheWVyUGFyYW1ldGVycyIsIkZsb3ciLCJ0cmFjaW5nIiwidHJhY2VzIiwicnVuIiwic2FtcGxlcyIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsImxhc3RMYXllciIsImxheWVyIiwibGF5ZXJPdXRwdXQiLCJsb2dnZXIiLCJkZWJ1ZyIsIlByZWRpY3RvciIsInByZWRpY3RMYXllcnMiLCJQcmVkaWN0UGFyYW1ldGVyc0xlbnNlcyIsIkVuY29kZXIiLCJlbmNvZGVMYXllcnMiLCJFbmNvZGVQYXJhbWV0ZXJzTGVuc2VzIiwiRGVjb2RlciIsImRlY29kZUxheWVycyIsIkRlY29kZVBhcmFtZXRlcnNMZW5zZXMiLCJMYXllclJ1bm5lck1peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiTGF5ZXJSdW5uZXIiLCJQYXJhbWV0ZXJJbml0aWFsaXplciIsInBhcmFtZXRlckluaXRpYWxpemVyIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsIkxvZ2dlciIsImdyb3VwQmVnaW4iLCJMYXllcnMiLCJncm91cEVuZCIsInJ1bm5lciIsImxheWVyUnVubmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0FBWDtBQUNIOztBQUNELFdBQU8sS0FBS3VJLG9CQUFaO0FBQ0g7O0FBRUQsTUFBSUQsb0JBQUosQ0FBeUJDLG9CQUF6QixFQUE4QztBQUMxQyxTQUFLQSxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0g7O0FBR0RDLGFBQVcsQ0FBQ0MsY0FBRCxFQUFnQjtBQUN2QixRQUFHLE1BQU1ELFdBQVQsRUFBcUI7QUFDakIsWUFBTUEsV0FBTixDQUFrQkMsY0FBbEI7QUFDSDs7QUFDRCxTQUFLQyxNQUFMLENBQVlDLFVBQVosQ0FBdUIsMkJBQXZCO0FBQ0EsVUFBTTtBQUFFaEs7QUFBRixRQUFVOEosY0FBaEI7QUFDQSxVQUFNO0FBQUVHLFlBQUY7QUFBVXBLO0FBQVYsUUFBeUJHLEdBQS9CO0FBQ0EsU0FBSzBKLFdBQUwsQ0FBaUIxQyxTQUFqQixHQUE2QmlELE1BQTdCO0FBQ0EsU0FBS04sb0JBQUwsR0FBNEI5SixVQUE1QjtBQUNBLFNBQUs2SixXQUFMLENBQWlCNUMsYUFBakIsR0FBaUMsS0FBSzZDLG9CQUFMLENBQTBCTSxNQUExQixDQUFqQztBQUNBLFNBQUtGLE1BQUwsQ0FBWUcsUUFBWjtBQUNIOztBQUVELE1BQUlSLFdBQUosQ0FBZ0JTLE1BQWhCLEVBQXVCO0FBQ25CLFNBQUtDLFdBQUwsR0FBbUJELE1BQW5CO0FBQ0g7O0FBQ0QsTUFBSVQsV0FBSixHQUFpQjtBQUNiLFFBQUcsQ0FBQyxLQUFLVSxXQUFULEVBQXFCO0FBQ2pCLFlBQU0vSSxLQUFLLENBQUMsd0JBQUQsQ0FBWDtBQUNIOztBQUNELFdBQU8sS0FBSytJLFdBQVo7QUFDSDs7QUEvQzBFLENBQS9FOztBQWtEZVosZ0ZBQWYsRTs7Ozs7Ozs7Ozs7QUMxREEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9sYXllci53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9sYXllclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbGF5ZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEZW5zZU1peGlucyB9IGZyb20gJy4vZGVuc2UubWl4aW5zJztcbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBjb21tb24gdXNlZCBsYXllcnMgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIHZpYSAqKmNhdXNhbE5ldExheWVycyoqIGluc3RhbmNlLlxuICogeyBtaXhXaXRoOiBbIExheWVyTWl4aW5zLCBEZW5zZU1peGlucyBdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRMYXllcnNcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9kZW5zZS5sYXllci5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0TGF5ZXJzIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICBbIERlbnNlTWl4aW5zIF0gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxheWVyTmFtZXMgPSBbXTtcbiAgICB9XG4gICAgbmFtZUdlbmVyYXRvcihsYXllclR5cGUpe1xuICAgICAgICBjb25zdCBsYXllcklkeCA9IHRoaXMubGF5ZXJOYW1lcy5sZW5ndGg7IFxuICAgICAgICBsZXQgbmV3TmFtZSA9IGxheWVyVHlwZSArICcvJyArIGxheWVySWR4O1xuICAgICAgICB0aGlzLmxheWVyTmFtZXMucHVzaChuZXdOYW1lKTtcbiAgICAgICAgcmV0dXJuIG5ld05hbWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TGF5ZXJzKCk7IiwiY29uc3QgRGVuc2VMYXllck1peGlucyA9IChQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgUGlwZWxpbmVDbGFzc3tcbiAgICAvKipcbiAgICAgKiBTaW1wbGUgZGVuc2UgbGF5ZXJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5wdXRTaXplIC0gc2l6ZSBvZiBuZXQgaW5wdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3V0cHV0U2l6ZSAtIHNpemUgb2YgbmV0IG91dHB1dFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBhY3RpdmF0b3IgLSBhY3RpdmF0b3IgZnVuY3Rpb24gY2FuIGJlIGN1c3RvbWVkIG9yIGdldCBmcm9tIGJ1aWx0LWluIGJ5IHN0cmluZyBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBsYXllciBuYW1lLCBkZWZhdWx0IGJ5IG51bGxcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGxheWVyXG4gICAgICovXG4gICAgZGVuc2UoaW5wdXRTaXplLCBvdXRwdXRTaXplLCBhY3RpdmF0b3I9J3NpZ21vaWQnLG5hbWU9bnVsbCl7XG4gICAgICAgIGlmKCFuYW1lKXtcbiAgICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWVHZW5lcmF0b3IoJ2RlbnNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBOYW1lOiBuYW1lLCBUeXBlOiAnTGF5ZXInLFxuICAgICAgICAgICAgUGFyYW1ldGVyczogeyBXZWlnaHQ6IFtpbnB1dFNpemUsIG91dHB1dFNpemVdLCBCaWFzOiBbb3V0cHV0U2l6ZV0gfSxcbiAgICAgICAgICAgIE5ldDogKHZhbHVlLCBwYXJhbXMpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBsZXQge1dlaWdodCwgQmlhc30gPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWx1ZS5kb3QoV2VpZ2h0KS5hZGQoQmlhcyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgXCJhY3RpdmF0b3JcIiA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHRbYWN0aXZhdG9yXSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBhY3RpdmF0b3IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyByZXN1bHQsIHRyYWNlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRGVuc2VMYXllck1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldExheWVycyB9IGZyb20gJy4vY2F1c2FsTmV0TGF5ZXJzJzsiLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlci5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBwYXJhbWV0ZXJmdW5jdG9yIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yJztcbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIHN0YW5kYXJkIGltcGxlbWVudGF0aW9uIGZvciBtb2RlbCBwYXJhbWV0ZXJzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRQYXJhbWV0ZXJzKiogaW5zdGFuY2VcbiAqIHsgbWl4V2l0aDogW1N0b3JhZ2VNaXhpbnMsIFBhcmFtZXRlck1peGluc10gfVxuICogQGNsYXNzIENhdXNhbE5ldFBhcmFtZXRlcnNcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlL3BhcmFtZXRlcnMuYmFiZWwuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldFBhcmFtZXRlcnMgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFtTdG9yYWdlTWl4aW5zLCBQYXJhbWV0ZXJNaXhpbnNdICl7XG4gICAgY29uc3RydWN0b3Ioc3RvcmFnZSwgcGFyYW1ldGVyZnVuY3Rvcil7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IG51bGw7XG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IHN0b3JhZ2U7XG4gICAgICAgIHRoaXMuRiA9IHBhcmFtZXRlcmZ1bmN0b3I7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICB9XG59ICAgXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRQYXJhbWV0ZXJzKGluZGV4REJTdG9yYWdlLCBwYXJhbWV0ZXJmdW5jdG9yKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFBhcmFtZXRlcnMgfSBmcm9tICcuL2NhdXNhbE5ldFBhcmFtZXRlcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlci5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zIH0gZnJvbSAnLi9wYXJhbWV0ZXJGdW5jdG9yLm1peGlucyc7IiwiY29uc3QgUGFyYW1ldGVyTWl4aW5zID0gKEJhc2VQYXJhbWV0ZXJDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQYXJhbWV0ZXJDbGFzc3sgXG4gICAgXG4gICAgZ2V0IFByZWRpY3RQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMgfHwgIXRoaXMucGFyYW1ldGVycy5QcmVkaWN0KXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLlByZWRpY3Q7XG4gICAgfVxuICAgIFxuICAgIGdldCBFbmNvZGVQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnBhcmFtZXRlcnMgfHwgIXRoaXMucGFyYW1ldGVycy5FbmNvZGUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3BhcmFtZXRlcnMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnMuRW5jb2RlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgRGVjb2RlUGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJzIHx8ICF0aGlzLnBhcmFtZXRlcnMuRGVjb2RlKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzLkRlY29kZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IFByZWRpY3RQYXJhbWV0ZXJzKHByZWRpY3RQYXJhbWV0ZXJzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gKHRoaXMucGFyYW1ldGVycyk/IHRoaXMucGFyYW1ldGVyczoge307XG4gICAgICAgIHRoaXMucGFyYW1ldGVycy5QcmVkaWN0ID0gcHJlZGljdFBhcmFtZXRlcnM7XG4gICAgfVxuICAgIFxuICAgIHNldCBFbmNvZGVQYXJhbWV0ZXJzKGVuY29kZVBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSAodGhpcy5wYXJhbWV0ZXJzKT8gdGhpcy5wYXJhbWV0ZXJzOiB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLkVuY29kZSA9IGVuY29kZVBhcmFtZXRlcnM7XG4gICAgfVxuICAgIFxuICAgIHNldCBEZWNvZGVQYXJhbWV0ZXJzKGRlY29kZVBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSAodGhpcy5wYXJhbWV0ZXJzKT8gdGhpcy5wYXJhbWV0ZXJzOiB7fTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzLkRlY29kZSA9IGRlY29kZVBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgc2V0IFBhcmFtZXRlclNpemVzKHBhcmFtZXRlclNpemVzKXtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJTaXplcyA9IHBhcmFtZXRlclNpemVzO1xuICAgIH1cblxuICAgIGdldCBQYXJhbWV0ZXJTaXplcygpe1xuICAgICAgICBpZighdGhpcy5wYXJhbWV0ZXJTaXplcyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyU2l6ZXMgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlclNpemVzO1xuICAgIH1cbiAgICBcbiAgICBnZXQgU2F2ZU1vZGVsRGlyKCl7XG4gICAgICAgIHJldHVybiAnc2F2ZU1vZGVsLyc7XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydFBhcmFtZXRlcnMoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGFzeW5jICgpPT57XG4gICAgICAgICAgICBjb25zdCBGbiA9IGFzeW5jIChwYXJhbSk9PihBcnJheS5mcm9tKGF3YWl0IHBhcmFtLmRhdGEoKSkpO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZXh0cmFjdFBhcmFtRnJvbVRlbnNvckRpY3QodGhpcy5wYXJhbWV0ZXJzLCBGbik7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIFxuICAgIGFzeW5jIGV4dHJhY3RQYXJhbUZyb21UZW5zb3JEaWN0KHBhcmFtcywgZm4pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUcmF2ZWxsZXIgPSBhc3luYyAocGFyYW1zLCBmbik9PntcbiAgICAgICAgICAgIGlmKHRoaXMuaXNUZW5zb3IocGFyYW1zKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGZuKHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBrVmFscyA9IFIudG9QYWlycyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtrLCB2YWxdIG9mIGtWYWxzKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2tdID0gYXdhaXQgVHJhdmVsbGVyKHZhbCwgZm4pOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFRyYXZlbGxlcihwYXJhbXMsIGZuKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgcGFyYW1ldGVyc1N1bW1hcnkoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncGFyYW1ldGVyIG11c3QgYmUgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgRm4gPSBhc3luYyAocGFyYW0pPT5BcnJheS5mcm9tKGF3YWl0IHBhcmFtLm1lYW4oKS5kYXRhKCkpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5leHRyYWN0UGFyYW1Gcm9tVGVuc29yRGljdCh0aGlzLnBhcmFtZXRlcnMsIEZuKTtcbiAgICB9XG4gICAgXG4gICAgaW5pdFBhcmFtU2l6ZXNCeUxheWVycyhsYXllcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBUID0gdGhpcy5ULCBGID0gdGhpcy5GO1xuICAgICAgICBjb25zdCBHZXRQYXJhbVNpemUgPSBSLmNvbXBvc2UoUi5mcm9tUGFpcnMsIFIubWFwKHA9PltwLk5hbWUsIHAuUGFyYW1ldGVyc10pKTtcbiAgICAgICAgY29uc3QgUHJlZGljdFNpemUgPSBHZXRQYXJhbVNpemUoRi5nZXRJbihbJ1ByZWRpY3QnXSwgbGF5ZXJzLCBbXSkpO1xuICAgICAgICBjb25zdCBFbmNvZGVTaXplICA9IEdldFBhcmFtU2l6ZShGLmdldEluKFsnRW5jb2RlJ10sIGxheWVycywgW10pKTtcbiAgICAgICAgY29uc3QgRGVjb2RlU2l6ZSAgPSBHZXRQYXJhbVNpemUoRi5nZXRJbihbJ0RlY29kZSddLCBsYXllcnMsIFtdKSk7IFxuICAgICAgICB0aGlzLlBhcmFtZXRlclNpemVzID0ge1ByZWRpY3RTaXplLCBFbmNvZGVTaXplLCBEZWNvZGVTaXplfTtcbiAgICB9XG5cbiAgICBpbXBvcnRQYXJhbWV0ZXJzKHBhcmFtT2JqZWN0KXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRjtcbiAgICAgICAgbGV0IHByZWRpY3RQYXJhbU9iamVjdCA9IEYuZ2V0SW4oWydQcmVkaWN0J10sIHBhcmFtT2JqZWN0LCB7fSk7XG4gICAgICAgIGxldCBlbmNvZGVQYXJhbU9iamVjdCAgPSBGLmdldEluKFsnRW5jb2RlJ10sIHBhcmFtT2JqZWN0LCB7fSk7XG4gICAgICAgIGxldCBkZWNvZGVQYXJhbU9iamVjdCAgPSBGLmdldEluKFsnRGVjb2RlJ10sIHBhcmFtT2JqZWN0LCB7fSk7XG4gICAgICAgIGNvbnN0IHsgUHJlZGljdFNpemUsIEVuY29kZVNpemUsIERlY29kZVNpemUgfSA9IHRoaXMuUGFyYW1ldGVyU2l6ZXM7XG4gICAgICAgIGNvbnN0IFNldE9ySW5pdCA9ICggaW5pdFByZWRpY3QsIHBhcmFtT2JqZWN0ICk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEYucGFyYW1ldGVyTWFwV2l0aEtleSgoa2V5cywgcGFyYW1TaXplKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtVmFsdWUgPSB0aGlzLkYuZ2V0SW4oa2V5cywgcGFyYW1PYmplY3QsIG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyYW1WYWx1ZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFQudmFyaWFibGUoVC5yYW5kb21Ob3JtYWwocGFyYW1TaXplKS5hc1R5cGUoJ2Zsb2F0MzInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBULnZhcmlhYmxlKFQudGVuc29yKHBhcmFtVmFsdWUsIHBhcmFtU2l6ZSwgJ2Zsb2F0MzInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sIGluaXRQcmVkaWN0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB0aGlzLlByZWRpY3RQYXJhbWV0ZXJzID0gU2V0T3JJbml0KCBQcmVkaWN0U2l6ZSwgcHJlZGljdFBhcmFtT2JqZWN0ICk7XG4gICAgICAgIHRoaXMuRW5jb2RlUGFyYW1ldGVycyAgPSBTZXRPckluaXQoIEVuY29kZVNpemUsIGVuY29kZVBhcmFtT2JqZWN0ICk7XG4gICAgICAgIHRoaXMuRGVjb2RlUGFyYW1ldGVycyAgPSBTZXRPckluaXQoIERlY29kZVNpemUsIGRlY29kZVBhcmFtT2JqZWN0ICk7IFxuICAgIH1cblxuICAgIEluaXRQYXJhbWV0ZXJzKHBhcmFtT2JqZWN0PXt9KXtcbiAgICAgICAgcmV0dXJuIChsYXllcnMpPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRPckluaXRQYXJhbXMobGF5ZXJzLCBwYXJhbU9iamVjdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0T3JJbml0UGFyYW1zKGxheWVycywgcGFyYW1PYmplY3Qpe1xuICAgICAgICB0aGlzLmluaXRQYXJhbVNpemVzQnlMYXllcnMobGF5ZXJzKTtcbiAgICAgICAgdGhpcy5pbXBvcnRQYXJhbWV0ZXJzKHBhcmFtT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0U2F2ZWRQYXJhbUxpc3QoKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZSwgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBsZXQgZmlsZUxpc3QgPSBhd2FpdCBTdG9yYWdlLmdldEZpbGVMaXN0KFNhdmVEaXIpO1xuICAgICAgICByZXR1cm4gZmlsZUxpc3QubWFwKGZpbGVOYW1lPT5maWxlTmFtZS5yZXBsYWNlKFNhdmVEaXIsJycpKTtcbiAgICB9XG5cbiAgICBhc3luYyBzYXZlUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgY29uc3QgU2F2ZURpciA9IHRoaXMuU2F2ZU1vZGVsRGlyO1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICBsZXQgcGFyYW1zID0gYXdhaXQgdGhpcy5leHBvcnRQYXJhbWV0ZXJzKCk7XG4gICAgICAgIGF3YWl0IFN0b3JhZ2Uud3JpdGVGaWxlKFNhdmVEaXIgKyBmaWxlTmFtZSwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlLCBTYXZlRGlyID0gdGhpcy5TYXZlTW9kZWxEaXI7XG4gICAgICAgIGxldCBzdHJQYXJhbXMgPSBhd2FpdCBTdG9yYWdlLnJlYWRGaWxlKFNhdmVEaXIrZmlsZU5hbWUpO1xuICAgICAgICBsZXQgcGFyYW1zID0gSlNPTi5wYXJzZShzdHJQYXJhbXMpO1xuICAgICAgICB0aGlzLmltcG9ydFBhcmFtZXRlcnMocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYW1ldGVyTWl4aW5zOyIsImltcG9ydCB7RnVuY3RvciBhcyBCYXNlRnVuY3Rvcn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7cGxhdGZvcm19IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIFBhcmFtZXRlckZ1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3BhcmFtZXRlckZ1bmN0b3IubWl4aW5zJztcblxuY2xhc3MgUGFyYW1ldGVyRnVuY3RvciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFsgUGFyYW1ldGVyRnVuY3Rvck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQYXJhbWV0ZXJGdW5jdG9yKCk7IiwiY29uc3QgUGFyYW1ldGVyRnVuY3Rvck1peGlucyA9IChGdW5jdG9yQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBGdW5jdG9yQ2xhc3N7IFxuICAgIGlzUGFyYW1ldGVyKHZhbCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmlmRWxzZShSLmlzKEFycmF5KSwgUi5hbGwoUi5pcyhOdW1iZXIpKSwgUi5hbHdheXMoZmFsc2UpKSh2YWwpO1xuICAgIH1cbiAgICBwYXJhbWV0ZXJNYXBXaXRoS2V5KGZuLCBwYXJhbWV0ZXJPYmplY3Qpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgUmVzID0gKGtleXMsIHN1Yk9iamVjdCkgPT4gUi5jb21wb3NlKFIuZnJvbVBhaXJzLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFIubWFwKChba2V5LCBzdWJPYmplY3RdKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNQYXJhbWV0ZXIoc3ViT2JqZWN0KSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBmbihbLi4ua2V5cywga2V5XSwgc3ViT2JqZWN0KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKFIuaXMoT2JqZWN0LCBzdWJPYmplY3QpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBSZXMoWy4uLmtleXMsIGtleV0sIHN1Yk9iamVjdCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgc3ViT2JqZWN0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBSLnRvUGFpcnMpKHN1Yk9iamVjdCk7XG4gICAgICAgIHJldHVybiBSZXMoW10sIHBhcmFtZXRlck9iamVjdCk7XG4gICAgfSAgICAgICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhbWV0ZXJGdW5jdG9yTWl4aW5zOyIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFJ1bm5lck1peGlucyB9IGZyb20gJy4vcnVubmVyLm1peGlucyc7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0UnVubmVyIGNsYXNzIHByb3ZpZGUgbmV0IGV4Y2VjdXRvciB3aGljaCBpcyBwcm92aWRlZCBwaXBlbGluZSBpbnN0YW5jZSBhdCAqKkxheWVyUnVubmVyKiogYXR0cmlidXRlLlxuICogeyBtaXhXaXRoOiBbIFJ1bm5lck1peGlucyBdIH1cbiAqIEBjbGFzcyBDYXVzYWxOZXRSdW5uZXJcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9ydW5uZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRSdW5uZXIgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFsgUnVubmVyTWl4aW5zIF0gKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFJ1bm5lcigpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0UnVubmVyIH0gZnJvbSAnLi9jYXVzYWxOZXRSdW5uZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSdW5uZXJNaXhpbnMgfSBmcm9tICcuL3J1bm5lci5taXhpbnMnOyIsIi8qKlxuICogVGhpcyBSdW5uZXJNaXhpbnMgY2xhc3MgcHJvdmlkZSBtZXRob2RzIGZvciBydW5uZXIgY2xhc3MuXG4gKiBAY2xhc3MgUnVubmVyTWl4aW5zXG4gKiBAZXh0ZW5kcyBCYXNlUnVubmVyQ2xhc3NcbiAqL1xuY29uc3QgUnVubmVyTWl4aW5zID0gKCBCYXNlUnVubmVyQ2xhc3MgKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVJ1bm5lckNsYXNze1xuICAgIHNldCBOZXRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpe1xuICAgICAgICB0aGlzLm5ldFBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBzZXQgTmV0TGF5ZXJzKG5ldExheWVycyl7XG4gICAgICAgIHRoaXMubmV0TGF5ZXJzID0gbmV0TGF5ZXJzO1xuICAgIH1cbiAgICBnZXQgTmV0UGFyYW1ldGVycygpe1xuICAgICAgICBpZighdGhpcy5uZXRQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCduZXRQYXJhbWV0ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRQYXJhbWV0ZXJzO1xuICAgIH1cbiAgICBnZXQgTmV0TGF5ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldExheWVycyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignbmV0TGF5ZXJzIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5uZXRMYXllcnM7XG4gICAgfVxuICAgIHJ1bk9wRmxvdyh2YWx1ZSwgZmxvdywgcGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IE9wc1J1bm5lciA9IFIuYWRkSW5kZXgoUi5yZWR1Y2UpKFIuX18se3Jlc3VsdDogdmFsdWUsIHRyYWNlOiB7fX0sIGZsb3cpO1xuICAgICAgICB2YXIge3Jlc3VsdCwgdHJhY2V9ID0gT3BzUnVubmVyKCh7cmVzdWx0LCB0cmFjZX0sIG5vZGUsIGlkeCk9PntcbiAgICAgICAgICAgIGlmKG5vZGUuUGFyYW1ldGVyKXtcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gcGFyYW1ldGVyc1tub2RlLlBhcmFtZXRlcl07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W25vZGUuT3BdKHBhcmFtcywgLi4ubm9kZS5BcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W25vZGUuT3BdKC4uLm5vZGUuQXJncyk7ICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyYWNlW2lkeF0gPSByZXN1bHQuc2hhcGU7XG4gICAgICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICB9XG5cbiAgICBydW5PcExheWVyKHZhbHVlLCBuZXQsIHBhcmFtZXRlcnMpe1xuICAgICAgICBsZXQgeyByZXN1bHQsIHRyYWNlIH0gPSBuZXQodmFsdWUsIHBhcmFtZXRlcnMpO1xuICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgIH1cbiAgICBydW5MYXllcih2YWx1ZSwgbGF5ZXJDb25maWd1cmUsIGxheWVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IHtOYW1lLCBUeXBlLCBGbG93LCBOZXR9ID0gbGF5ZXJDb25maWd1cmU7XG4gICAgICAgIGlmKFR5cGUgPT09ICdUZW5zb3InKXtcbiAgICAgICAgICAgIGxldCB7cmVzdWx0LCB0cmFjZX0gPSB0aGlzLnJ1bk9wRmxvdyh2YWx1ZSwgRmxvdywgbGF5ZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIHJldHVybiB7W05hbWVdOiByZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSAgIFxuICAgICAgICBlbHNlIGlmKFR5cGUgPT09ICdMYXllcicpe1xuICAgICAgICAgICAgbGV0IHtyZXN1bHQsIHRyYWNlfSA9IHRoaXMucnVuT3BMYXllcih2YWx1ZSwgTmV0LCBsYXllclBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHtbTmFtZV06IHJlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9ICAgXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndHlwZSBtdXN0IGJlIGVpdGhlciBMYXllciBvciBUZW5zb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYWNpbmcodHJhY2VzLCBuYW1lLCB0cmFjZSl7XG4gICAgICAgIGlmKHRyYWNlcyl7XG4gICAgICAgICAgICB0cmFjZXMucHVzaCh7W25hbWVdOiB0cmFjZX0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJ1bihsYXllcnMsIHNhbXBsZXMsIHBhcmFtZXRlcnMsIHRyYWNlcz1udWxsKXtcbiAgICAgICAgbGV0IHBpcGVWYWx1ZSA9IHtQaXBlSW5wdXQ6IHNhbXBsZXN9LCBsYXN0TGF5ZXIgPSAnUGlwZUlucHV0JztcbiAgICAgICAgZm9yKGxldCBsYXllciBvZiBsYXllcnMpe1xuICAgICAgICAgICAgbGV0IGxheWVyT3V0cHV0ID0gdGhpcy5ydW5MYXllcihwaXBlVmFsdWVbbGFzdExheWVyXSwgbGF5ZXIsIHBhcmFtZXRlcnNbbGF5ZXIuTmFtZV0pO1xuICAgICAgICAgICAgcGlwZVZhbHVlW2xheWVyLk5hbWVdID0gbGF5ZXJPdXRwdXRbbGF5ZXIuTmFtZV07XG4gICAgICAgICAgICBsYXN0TGF5ZXIgPSBsYXllci5OYW1lO1xuICAgICAgICAgICAgdGhpcy50cmFjaW5nKHRyYWNlcywgbGF5ZXIuTmFtZSwgbGF5ZXJPdXRwdXQudHJhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRyYWNlcyl7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7dHJhY2VzfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBpcGVWYWx1ZVtsYXN0TGF5ZXJdO1xuICAgIH1cblxuICAgIGdldCBQcmVkaWN0b3IoKXtcbiAgICAgICAgbGV0IHByZWRpY3RMYXllcnMgPSB0aGlzLk5ldExheWVycy5QcmVkaWN0O1xuICAgICAgICBjb25zdCBQcmVkaWN0UGFyYW1ldGVyc0xlbnNlcyA9ICgpPT50aGlzLk5ldFBhcmFtZXRlcnMuUHJlZGljdFBhcmFtZXRlcnM7XG4gICAgICAgIHJldHVybiAoc2FtcGxlcyk9PntcbiAgICAgICAgICAgIGxldCBwcmVkaWN0UGFyYW1ldGVycyA9IFByZWRpY3RQYXJhbWV0ZXJzTGVuc2VzKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ydW4ocHJlZGljdExheWVycywgc2FtcGxlcywgcHJlZGljdFBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgRW5jb2Rlcigpe1xuICAgICAgICBsZXQgZW5jb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRW5jb2RlO1xuICAgICAgICBjb25zdCBFbmNvZGVQYXJhbWV0ZXJzTGVuc2VzID0gKCk9PnRoaXMuTmV0UGFyYW1ldGVycy5FbmNvZGVQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICBsZXQgZW5jb2RlUGFyYW1ldGVycyA9IEVuY29kZVBhcmFtZXRlcnNMZW5zZXMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bihlbmNvZGVMYXllcnMsIHNhbXBsZXMsIGVuY29kZVBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgRGVjb2Rlcigpe1xuICAgICAgICBsZXQgZGVjb2RlTGF5ZXJzID0gdGhpcy5OZXRMYXllcnMuRGVjb2RlO1xuICAgICAgICBjb25zdCBEZWNvZGVQYXJhbWV0ZXJzTGVuc2VzID0gKCk9PnRoaXMuTmV0UGFyYW1ldGVycy5FbmNvZGVQYXJhbWV0ZXJzO1xuICAgICAgICByZXR1cm4gKHNhbXBsZXMpPT57XG4gICAgICAgICAgICBsZXQgZGVjb2RlUGFyYW1ldGVycyA9IERlY29kZVBhcmFtZXRlcnNMZW5zZXMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJ1bihkZWNvZGVMYXllcnMsIHNhbXBsZXMsIGRlY29kZVBhcmFtZXRlcnMpO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bm5lck1peGlucztcbiIsImV4cG9ydCB7IGNhdXNhbE5ldExheWVycyB9IGZyb20gJy4vQ2F1c2FsTmV0TGF5ZXJzL2luZGV4JztcbmV4cG9ydCB7IGNhdXNhbE5ldFBhcmFtZXRlcnMsIFBhcmFtZXRlck1peGlucywgUGFyYW1ldGVyRnVuY3Rvck1peGlucyB9IGZyb20gJy4vQ2F1c2FsTmV0UGFyYW1ldGVycy9pbmRleCc7XG5leHBvcnQgeyBjYXVzYWxOZXRSdW5uZXIsIFJ1bm5lck1peGlucyB9IGZyb20gJy4vQ2F1c2FsTmV0UnVubmVyL2luZGV4JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGF5ZXJSdW5uZXJNaXhpbnMgfSBmcm9tICcuL2xheWVyUnVubmVyLm1peGlucyc7XG4iLCIvKipcbiAqIFRoaXMgbWl4aW4gY2xhc3MgcHJvdmlkZSBhdHRyaWJ1dGVzOiAqKlBhcmFtZXRlckluaXRpYWxpemVyKiosICoqTGF5ZXJSdW5uZXIqKiwgXG4gKiBhbmQgaGFuZGxlICoqTmV0Kiogc2V0dGluZyBvZiBwaXBlbGluZUNvbmZpZyBcbiAqIEBjbGFzcyBMYXllclJ1bm5lck1peGluc1xuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9sYXllclJ1bm5lci5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IExheWVyUnVubmVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZSl7XG4gICAgICAgIGF3YWl0IHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycy5zYXZlUGFyYW1zKGZpbGVOYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMgPSBhd2FpdCB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMubG9hZFBhcmFtcyhmaWxlTmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFNhdmVkUGFyYW1MaXN0KCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLkxheWVyUnVubmVyLk5ldFBhcmFtZXRlcnMuZ2V0U2F2ZWRQYXJhbUxpc3QoKTtcbiAgICB9XG5cbiAgICBnZXQgUGFyYW1ldGVySW5pdGlhbGl6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMucGFyYW1ldGVySW5pdGlhbGl6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1BhcmFtZXRlckluaXRpYWxpemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJJbml0aWFsaXplcjtcbiAgICB9XG5cbiAgICBzZXQgUGFyYW1ldGVySW5pdGlhbGl6ZXIocGFyYW1ldGVySW5pdGlhbGl6ZXIpe1xuICAgICAgICB0aGlzLnBhcmFtZXRlckluaXRpYWxpemVyID0gcGFyYW1ldGVySW5pdGlhbGl6ZXI7XG4gICAgfVxuXG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzZXQgTGF5ZXJSdW5uZXIgYnkgY29uZmlnJyk7XG4gICAgICAgIGNvbnN0IHsgTmV0IH0gPSBwaXBlbGluZUNvbmZpZztcbiAgICAgICAgY29uc3QgeyBMYXllcnMsIFBhcmFtZXRlcnMgfSA9IE5ldDsgXG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIuTmV0TGF5ZXJzID0gTGF5ZXJzO1xuICAgICAgICB0aGlzLlBhcmFtZXRlckluaXRpYWxpemVyID0gUGFyYW1ldGVyczsgICAgICAgXG4gICAgICAgIHRoaXMuTGF5ZXJSdW5uZXIuTmV0UGFyYW1ldGVycyA9IHRoaXMuUGFyYW1ldGVySW5pdGlhbGl6ZXIoTGF5ZXJzKTtcbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICB9XG5cbiAgICBzZXQgTGF5ZXJSdW5uZXIocnVubmVyKXtcbiAgICAgICAgdGhpcy5sYXllclJ1bm5lciA9IHJ1bm5lcjtcbiAgICB9XG4gICAgZ2V0IExheWVyUnVubmVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmxheWVyUnVubmVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdsYXllclJ1bm5lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJSdW5uZXI7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJSdW5uZXJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=