(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/layer"] = factory(require("causal-net.core"), require("causal-net.utils"));
	else
		root["@causalNet/layer"] = factory(root["causal-net.core"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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
    layerIdx = this.layerNames.length;
    return layerType + '/' + layerIdx;
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

/* harmony import */ var _layer_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layer.mixins */ "./src/CausalNetLayers/layer.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerMixins", function() { return _layer_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });




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

/***/ "./src/CausalNetRunner/causalNetRunner.js":
/*!************************************************!*\
  !*** ./src/CausalNetRunner/causalNetRunner.js ***!
  \************************************************/
/*! exports provided: RunnerMixins, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _runner_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runner.mixins */ "./src/CausalNetRunner/runner.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RunnerMixins", function() { return _runner_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });




/**
 * This CausalNetLayer class provide common use layers
 * { mixWith: [ DenseMixins ] }
 * @class CausalNetLayer
 * @extends BaseTensor
 */

class CausalNetRunner extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [RunnerMixins]) {
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
 * This RunnerMixins class provide mixin for building pipeline
 * @class CausalNetLayer
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/layer.mixins.babel.js]
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
    this.logger.debug({
      Name,
      Type,
      Flow,
      Net
    });

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

  run(layers, samples, parameters, traces = []) {
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

    this.logger.debug({
      traces
    });
    return pipeValue[lastLayer];
  }

};

/* harmony default export */ __webpack_exports__["default"] = (RunnerMixins);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetLayers, LayerMixins, causalNetRunner, RunnerMixins, NetMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CausalNetLayers/index */ "./src/CausalNetLayers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetLayers", function() { return _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__["causalNetLayers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerMixins", function() { return _CausalNetLayers_index__WEBPACK_IMPORTED_MODULE_0__["LayerMixins"]; });

/* harmony import */ var _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CausalNetRunner/index */ "./src/CausalNetRunner/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetRunner", function() { return _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_1__["causalNetRunner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RunnerMixins", function() { return _CausalNetRunner_index__WEBPACK_IMPORTED_MODULE_1__["RunnerMixins"]; });

/* harmony import */ var _net_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./net.mixins */ "./src/net.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetMixins", function() { return _net_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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
 * @class CausalNetLayer
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
    this.NetRunner.Layers = Layers;
    this.NetParameters.setOrInitParams(Parameters, Layers);
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

  netPredict(samples, traces = []) {
    const NetRunner = this.NetRunner,
          NetParameters = this.NetParameters;
    let predictLayers = NetRunner.PredictLayers;
    let predictParameters = NetParameters.PredictParameters;
    let runner = this.NetRunner;
    return runner.run(predictLayers, samples, predictParameters, traces);
  }

  netEncode(samples, traces = []) {
    const NetRunner = this.NetRunner,
          NetParameters = this.NetParameters;
    let encodeLayers = NetRunner.EncodeLayers;
    let encodeParameters = NetParameters.EncodeParameters;
    let runner = this.NetRunner;
    return runner.run(encodeLayers, samples, encodeParameters, traces);
  }

  netDecode(samples, traces = []) {
    const NetRunner = this.NetRunner,
          NetParameters = this.NetParameters;
    let decodeLayers = NetRunner.DecodeLayers;
    let decodeParameters = NetParameters.DecodeParameters;
    let runner = this.NetRunner;
    return runner.run(decodeLayers, samples, decodeParameters, traces);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0TGF5ZXJzL2NhdXNhbE5ldExheWVycy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldExheWVycy9kZW5zZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9DYXVzYWxOZXRMYXllcnMvbGF5ZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvQ2F1c2FsTmV0UnVubmVyL2NhdXNhbE5ldFJ1bm5lci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFJ1bm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyLy4vc3JjL0NhdXNhbE5ldFJ1bm5lci9ydW5uZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sYXllci8uL3NyYy9uZXQubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbGF5ZXIvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xheWVyL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNhdXNhbE5ldExheWVycyIsInBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VUZW5zb3IiLCJMYXllck1peGlucyIsIkRlbnNlTWl4aW5zIiwiY29uc3RydWN0b3IiLCJsYXllck5hbWVzIiwibmFtZUdlbmVyYXRvciIsImxheWVyVHlwZSIsImxheWVySWR4IiwibGVuZ3RoIiwiRGVuc2VMYXllck1peGlucyIsIlBpcGVsaW5lQ2xhc3MiLCJkZW5zZSIsImlucHV0U2l6ZSIsIm91dHB1dFNpemUiLCJuYW1lIiwiTmFtZSIsIlR5cGUiLCJQYXJhbWV0ZXJzIiwiV2VpZ2h0IiwiQmlhcyIsIk5ldCIsInZhbHVlIiwicGFyYW1zIiwidHJhY2UiLCJyZXN1bHQiLCJkb3QiLCJhZGQiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIkRlY29kZUxheWVycyIsImRlY29kZUxheWVycyIsIkVycm9yIiwiRW5jb2RlTGF5ZXJzIiwiZW5jb2RlTGF5ZXJzIiwiUHJlZGljdExheWVycyIsInByZWRpY3RMYXllcnMiLCJDYXVzYWxOZXRSdW5uZXIiLCJSdW5uZXJNaXhpbnMiLCJCYXNlUnVubmVyQ2xhc3MiLCJydW5PcEZsb3ciLCJmbG93IiwicGFyYW1ldGVycyIsIlIiLCJPcHNSdW5uZXIiLCJhZGRJbmRleCIsInJlZHVjZSIsIl9fIiwibm9kZSIsImlkeCIsIlBhcmFtZXRlciIsIk9wIiwiQXJncyIsInNoYXBlIiwicnVuT3BMYXllciIsIm5ldCIsInJ1bkxheWVyIiwibGF5ZXJDb25maWd1cmUiLCJsYXllclBhcmFtZXRlcnMiLCJGbG93IiwibG9nZ2VyIiwiZGVidWciLCJ0cmFjaW5nIiwidHJhY2VzIiwicHVzaCIsInJ1biIsImxheWVycyIsInNhbXBsZXMiLCJwaXBlVmFsdWUiLCJQaXBlSW5wdXQiLCJsYXN0TGF5ZXIiLCJsYXllciIsImxheWVyT3V0cHV0IiwiTmV0TWl4aW5zIiwiZ2V0TmV0RnJvbUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTGF5ZXJzIiwiTmV0UnVubmVyIiwiTmV0UGFyYW1ldGVycyIsInNldE9ySW5pdFBhcmFtcyIsIm5ldFBhcmFtZXRlcnMiLCJydW5uZXIiLCJuZXRSdW5uZXIiLCJuZXRQcmVkaWN0IiwicHJlZGljdFBhcmFtZXRlcnMiLCJQcmVkaWN0UGFyYW1ldGVycyIsIm5ldEVuY29kZSIsImVuY29kZVBhcmFtZXRlcnMiLCJFbmNvZGVQYXJhbWV0ZXJzIiwibmV0RGVjb2RlIiwiZGVjb2RlUGFyYW1ldGVycyIsIkRlY29kZVBhcmFtZXRlcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU1BLE1BQU1BLGVBQU4sU0FBOEJDLHlEQUFRLENBQUNDLE9BQVQsQ0FBaUJDLHNEQUFqQixFQUMxQixDQUFFQyxxREFBRixFQUFlQyxxREFBZixDQUQwQixDQUE5QixDQUNrQztBQUM5QkMsYUFBVyxHQUFFO0FBQ1Q7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEVB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LGlCQUFuQyxFQUFzRHJCLE1BQXRELENBQVA7QUFDSDs7QUFFRHVCLFdBQVMsQ0FBQ25CLE9BQUQsRUFBVUosTUFBTSxHQUFDLEVBQWpCLEVBQW9CO0FBQ3pCLFVBQU1jLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUFBLFVBQWtDQyxhQUFhLEdBQUcsS0FBS0EsYUFBdkQ7QUFDQSxRQUFJNUMsWUFBWSxHQUFHMkMsU0FBUyxDQUFDNUMsWUFBN0I7QUFDQSxRQUFJc0QsZ0JBQWdCLEdBQUdULGFBQWEsQ0FBQ1UsZ0JBQXJDO0FBQ0EsUUFBSVAsTUFBTSxHQUFHLEtBQUtKLFNBQWxCO0FBQ0EsV0FBT0ksTUFBTSxDQUFDaEIsR0FBUCxDQUFXL0IsWUFBWCxFQUF5QmlDLE9BQXpCLEVBQWtDb0IsZ0JBQWxDLEVBQW9EeEIsTUFBcEQsQ0FBUDtBQUNIOztBQUVEMEIsV0FBUyxDQUFDdEIsT0FBRCxFQUFVSixNQUFNLEdBQUMsRUFBakIsRUFBb0I7QUFDekIsVUFBTWMsU0FBUyxHQUFHLEtBQUtBLFNBQXZCO0FBQUEsVUFBa0NDLGFBQWEsR0FBRyxLQUFLQSxhQUF2RDtBQUNBLFFBQUkvQyxZQUFZLEdBQUc4QyxTQUFTLENBQUMvQyxZQUE3QjtBQUNBLFFBQUk0RCxnQkFBZ0IsR0FBR1osYUFBYSxDQUFDYSxnQkFBckM7QUFDQSxRQUFJVixNQUFNLEdBQUcsS0FBS0osU0FBbEI7QUFDQSxXQUFPSSxNQUFNLENBQUNoQixHQUFQLENBQVdsQyxZQUFYLEVBQXlCb0MsT0FBekIsRUFBa0N1QixnQkFBbEMsRUFBb0QzQixNQUFwRCxDQUFQO0FBQ0g7O0FBaERrRSxDQUF2RTs7QUFtRGVVLHdFQUFmLEU7Ozs7Ozs7Ozs7O0FDMURBLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbGF5ZXIubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2xheWVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sYXllclwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIERlbnNlTWl4aW5zIH0gZnJvbSAnLi9kZW5zZS5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBMYXllck1peGlucyB9IGZyb20gJy4vbGF5ZXIubWl4aW5zJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRMYXllciBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2UgbGF5ZXJzXG4gKiB7IG1peFdpdGg6IFsgTGF5ZXJNaXhpbnMsIERlbnNlTWl4aW5zIF0gfVxuICogQGNsYXNzIENhdXNhbE5ldExheWVyXG4gKiBAZXh0ZW5kcyBCYXNlVGVuc29yXG4gKi9cbmNsYXNzIENhdXNhbE5ldExheWVycyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgWyBMYXllck1peGlucywgRGVuc2VNaXhpbnMgXSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGF5ZXJOYW1lcyA9IFtdO1xuICAgIH1cbiAgICBuYW1lR2VuZXJhdG9yKGxheWVyVHlwZSl7XG4gICAgICAgIGxheWVySWR4ID0gdGhpcy5sYXllck5hbWVzLmxlbmd0aDsgXG4gICAgICAgIHJldHVybiBsYXllclR5cGUgKyAnLycgKyBsYXllcklkeDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRMYXllcnMoKTsiLCJjb25zdCBEZW5zZUxheWVyTWl4aW5zID0gKFBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBQaXBlbGluZUNsYXNze1xuICAgIC8qKlxuICAgICAqIFNpbXBsZSBkZW5zZSBsYXllclxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IGlucHV0U2l6ZSAtIHNpemUgb2YgbmV0IGlucHV0XG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gb3V0cHV0U2l6ZSAtIHNpemUgb2YgbmV0IG91dHB1dFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG5hbWUgLSBsYXllciBuYW1lXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSBsYXllclxuICAgICAqL1xuICAgIGRlbnNlKGlucHV0U2l6ZSwgb3V0cHV0U2l6ZSwgbmFtZSl7XG4gICAgICAgIGlmKCFuYW1lKXtcbiAgICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWVHZW5lcmF0b3IoJ2RlbnNlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBOYW1lOiBuYW1lLCBUeXBlOiAnTGF5ZXInLFxuICAgICAgICAgICAgUGFyYW1ldGVyczogeyBXZWlnaHQ6IFtpbnB1dFNpemUsIG91dHB1dFNpemVdLCBCaWFzOiBbb3V0cHV0U2l6ZV0gfSxcbiAgICAgICAgICAgIE5ldDogZnVuY3Rpb24odmFsdWUsIHBhcmFtcyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFjZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBsZXQge1dlaWdodCwgQmlhc30gPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWx1ZS5kb3QoV2VpZ2h0KS5hZGQoQmlhcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHJlc3VsdCwgdHJhY2UgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBEZW5zZUxheWVyTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0TGF5ZXJzIH0gZnJvbSAnLi9jYXVzYWxOZXRMYXllcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXllck1peGlucyB9IGZyb20gJy4vbGF5ZXIubWl4aW5zJzsiLCIvKipcbiAqIFRoaXMgTGF5ZXJNaXhpbnMgY2xhc3MgcHJvdmlkZSBtaXhpbiBmb3IgYnVpbGRpbmcgcGlwZWxpbmVcbiAqIEBjbGFzcyBDYXVzYWxOZXRMYXllclxuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9sYXllci5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IExheWVyTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgZ2V0IERlY29kZUxheWVycygpe1xuICAgICAgICBpZighdGhpcy5kZWNvZGVMYXllcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2RlY29kZUxheWVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWNvZGVMYXllcnM7XG4gICAgfVxuXG4gICAgZ2V0IEVuY29kZUxheWVycygpe1xuICAgICAgICBpZighdGhpcy5lbmNvZGVMYXllcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2VuY29kZUxheWVycyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmNvZGVMYXllcnM7XG4gICAgfVxuICAgIFxuICAgIGdldCBQcmVkaWN0TGF5ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLnByZWRpY3RMYXllcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ByZWRpY3RMYXllcnMxIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWRpY3RMYXllcnM7XG4gICAgfVxuXG4gICAgc2V0IERlY29kZUxheWVycyhkZWNvZGVMYXllcnMpe1xuICAgICAgICB0aGlzLmRlY29kZUxheWVycyA9IGRlY29kZUxheWVycztcbiAgICB9XG4gICAgXG4gICAgc2V0IEVuY29kZUxheWVycyhlbmNvZGVMYXllcnMpe1xuICAgICAgICB0aGlzLmVuY29kZUxheWVycyA9IGVuY29kZUxheWVycztcbiAgICB9XG4gICAgc2V0IFByZWRpY3RMYXllcnMocHJlZGljdExheWVycyl7XG4gICAgICAgIHRoaXMucHJlZGljdExheWVycyA9IHByZWRpY3RMYXllcnM7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJNaXhpbnM7IiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRMYXllciBjbGFzcyBwcm92aWRlIGNvbW1vbiB1c2UgbGF5ZXJzXG4gKiB7IG1peFdpdGg6IFsgRGVuc2VNaXhpbnMgXSB9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJcbiAqIEBleHRlbmRzIEJhc2VUZW5zb3JcbiAqL1xuY2xhc3MgQ2F1c2FsTmV0UnVubmVyIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBbIFJ1bm5lck1peGlucyBdICl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRSdW5uZXIoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFJ1bm5lciB9IGZyb20gJy4vY2F1c2FsTmV0UnVubmVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUnVubmVyTWl4aW5zIH0gZnJvbSAnLi9ydW5uZXIubWl4aW5zJzsiLCIvKipcbiAqIFRoaXMgUnVubmVyTWl4aW5zIGNsYXNzIHByb3ZpZGUgbWl4aW4gZm9yIGJ1aWxkaW5nIHBpcGVsaW5lXG4gKiBAY2xhc3MgQ2F1c2FsTmV0TGF5ZXJcbiAqIEBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvbGF5ZXIubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBSdW5uZXJNaXhpbnMgPSAoQmFzZVJ1bm5lckNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVJ1bm5lckNsYXNze1xuICAgIHJ1bk9wRmxvdyh2YWx1ZSwgZmxvdywgcGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IE9wc1J1bm5lciA9IFIuYWRkSW5kZXgoUi5yZWR1Y2UpKFIuX18se3Jlc3VsdDogdmFsdWUsIHRyYWNlOiB7fX0sIGZsb3cpO1xuICAgICAgICB2YXIge3Jlc3VsdCwgdHJhY2V9ID0gT3BzUnVubmVyKCh7cmVzdWx0LCB0cmFjZX0sIG5vZGUsIGlkeCk9PntcbiAgICAgICAgICAgIGlmKG5vZGUuUGFyYW1ldGVyKXtcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gcGFyYW1ldGVyc1tub2RlLlBhcmFtZXRlcl07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W25vZGUuT3BdKHBhcmFtcywgLi4ubm9kZS5BcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0W25vZGUuT3BdKC4uLm5vZGUuQXJncyk7ICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyYWNlW2lkeF0gPSByZXN1bHQuc2hhcGU7XG4gICAgICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICB9XG5cbiAgICBydW5PcExheWVyKHZhbHVlLCBuZXQsIHBhcmFtZXRlcnMpe1xuICAgICAgICBsZXQgeyByZXN1bHQsIHRyYWNlIH0gPSBuZXQodmFsdWUsIHBhcmFtZXRlcnMpO1xuICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgIH1cbiAgICBydW5MYXllcih2YWx1ZSwgbGF5ZXJDb25maWd1cmUsIGxheWVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IHtOYW1lLCBUeXBlLCBGbG93LCBOZXR9ID0gbGF5ZXJDb25maWd1cmU7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtOYW1lLCBUeXBlLCBGbG93LCBOZXR9KTtcbiAgICAgICAgaWYoVHlwZSA9PT0gJ1RlbnNvcicpe1xuICAgICAgICAgICAgbGV0IHtyZXN1bHQsIHRyYWNlfSA9IHRoaXMucnVuT3BGbG93KHZhbHVlLCBGbG93LCBsYXllclBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgcmV0dXJuIHtbTmFtZV06IHJlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9ICAgXG4gICAgICAgIGVsc2UgaWYoVHlwZSA9PT0gJ0xheWVyJyl7XG4gICAgICAgICAgICBsZXQge3Jlc3VsdCwgdHJhY2V9ID0gdGhpcy5ydW5PcExheWVyKHZhbHVlLCBOZXQsIGxheWVyUGFyYW1ldGVycyk7XG4gICAgICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0LCB0cmFjZX07XG4gICAgICAgIH0gICBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd0eXBlIG11c3QgYmUgZWl0aGVyIExheWVyIG9yIFRlbnNvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhY2luZyh0cmFjZXMsIG5hbWUsIHRyYWNlKXtcbiAgICAgICAgaWYodHJhY2VzKXtcbiAgICAgICAgICAgIHRyYWNlcy5wdXNoKHtbbmFtZV06IHRyYWNlfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcnVuKGxheWVycywgc2FtcGxlcywgcGFyYW1ldGVycywgdHJhY2VzPVtdKXtcbiAgICAgICAgbGV0IHBpcGVWYWx1ZSA9IHtQaXBlSW5wdXQ6IHNhbXBsZXN9LCBsYXN0TGF5ZXIgPSAnUGlwZUlucHV0JztcbiAgICAgICAgZm9yKGxldCBsYXllciBvZiBsYXllcnMpe1xuICAgICAgICAgICAgbGV0IGxheWVyT3V0cHV0ID0gdGhpcy5ydW5MYXllcihwaXBlVmFsdWVbbGFzdExheWVyXSwgbGF5ZXIsIHBhcmFtZXRlcnNbbGF5ZXIuTmFtZV0pO1xuICAgICAgICAgICAgcGlwZVZhbHVlW2xheWVyLk5hbWVdID0gbGF5ZXJPdXRwdXRbbGF5ZXIuTmFtZV07XG4gICAgICAgICAgICBsYXN0TGF5ZXIgPSBsYXllci5OYW1lO1xuICAgICAgICAgICAgdGhpcy50cmFjaW5nKHRyYWNlcywgbGF5ZXIuTmFtZSwgbGF5ZXJPdXRwdXQudHJhY2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHt0cmFjZXN9KTtcbiAgICAgICAgcmV0dXJuIHBpcGVWYWx1ZVtsYXN0TGF5ZXJdO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bm5lck1peGlucztcbiIsImV4cG9ydCB7IGNhdXNhbE5ldExheWVycywgTGF5ZXJNaXhpbnMgfSBmcm9tICcuL0NhdXNhbE5ldExheWVycy9pbmRleCc7XG5leHBvcnQgeyBjYXVzYWxOZXRSdW5uZXIsIFJ1bm5lck1peGlucyB9IGZyb20gJy4vQ2F1c2FsTmV0UnVubmVyL2luZGV4JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmV0TWl4aW5zIH0gZnJvbSAnLi9uZXQubWl4aW5zJztcbiIsIi8qKlxuICogVGhpcyBOZXRNaXhpbnMgY2xhc3MgcHJvdmlkZSBtaXhpbiBmb3IgYnVpbGRpbmcgcGlwZWxpbmVcbiAqIEBjbGFzcyBDYXVzYWxOZXRMYXllclxuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9uZXQubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBOZXRNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBnZXROZXRGcm9tQ29uZmlnKHBpcGVsaW5lQ29uZmlnKXtcbiAgICAgICAgY29uc3QgeyBOZXQgfSA9IHBpcGVsaW5lQ29uZmlnO1xuICAgICAgICBjb25zdCB7IExheWVycywgUGFyYW1ldGVycyB9ID0gTmV0O1xuICAgICAgICB0aGlzLk5ldFJ1bm5lci5MYXllcnMgPSBMYXllcnM7XG4gICAgICAgIHRoaXMuTmV0UGFyYW1ldGVycy5zZXRPckluaXRQYXJhbXMoUGFyYW1ldGVycywgTGF5ZXJzKTtcbiAgICB9XG4gICAgc2V0IE5ldFBhcmFtZXRlcnMocGFyYW1ldGVycyl7XG4gICAgICAgIHRoaXMubmV0UGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgfVxuICAgIGdldCBOZXRQYXJhbWV0ZXJzKCl7XG4gICAgICAgIGlmKCF0aGlzLm5ldFBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldFJ1bm5lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0UGFyYW1ldGVycztcbiAgICB9XG4gICAgc2V0IE5ldFJ1bm5lcihydW5uZXIpe1xuICAgICAgICB0aGlzLm5ldFJ1bm5lciA9IHJ1bm5lcjtcbiAgICB9XG4gICAgZ2V0IE5ldFJ1bm5lcigpe1xuICAgICAgICBpZighdGhpcy5uZXRSdW5uZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ25ldFJ1bm5lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubmV0UnVubmVyO1xuICAgIH1cblxuICAgIG5ldFByZWRpY3Qoc2FtcGxlcywgdHJhY2VzPVtdKXtcbiAgICAgICAgY29uc3QgTmV0UnVubmVyID0gdGhpcy5OZXRSdW5uZXIsIE5ldFBhcmFtZXRlcnMgPSB0aGlzLk5ldFBhcmFtZXRlcnM7XG4gICAgICAgIGxldCBwcmVkaWN0TGF5ZXJzID0gTmV0UnVubmVyLlByZWRpY3RMYXllcnM7XG4gICAgICAgIGxldCBwcmVkaWN0UGFyYW1ldGVycyA9IE5ldFBhcmFtZXRlcnMuUHJlZGljdFBhcmFtZXRlcnM7XG4gICAgICAgIGxldCBydW5uZXIgPSB0aGlzLk5ldFJ1bm5lcjtcbiAgICAgICAgcmV0dXJuIHJ1bm5lci5ydW4ocHJlZGljdExheWVycywgc2FtcGxlcywgcHJlZGljdFBhcmFtZXRlcnMsIHRyYWNlcyk7XG4gICAgfVxuXG4gICAgbmV0RW5jb2RlKHNhbXBsZXMsIHRyYWNlcz1bXSl7XG4gICAgICAgIGNvbnN0IE5ldFJ1bm5lciA9IHRoaXMuTmV0UnVubmVyLCBOZXRQYXJhbWV0ZXJzID0gdGhpcy5OZXRQYXJhbWV0ZXJzO1xuICAgICAgICBsZXQgZW5jb2RlTGF5ZXJzID0gTmV0UnVubmVyLkVuY29kZUxheWVycztcbiAgICAgICAgbGV0IGVuY29kZVBhcmFtZXRlcnMgPSBOZXRQYXJhbWV0ZXJzLkVuY29kZVBhcmFtZXRlcnM7XG4gICAgICAgIGxldCBydW5uZXIgPSB0aGlzLk5ldFJ1bm5lcjtcbiAgICAgICAgcmV0dXJuIHJ1bm5lci5ydW4oZW5jb2RlTGF5ZXJzLCBzYW1wbGVzLCBlbmNvZGVQYXJhbWV0ZXJzLCB0cmFjZXMpO1xuICAgIH1cblxuICAgIG5ldERlY29kZShzYW1wbGVzLCB0cmFjZXM9W10pe1xuICAgICAgICBjb25zdCBOZXRSdW5uZXIgPSB0aGlzLk5ldFJ1bm5lciwgTmV0UGFyYW1ldGVycyA9IHRoaXMuTmV0UGFyYW1ldGVycztcbiAgICAgICAgbGV0IGRlY29kZUxheWVycyA9IE5ldFJ1bm5lci5EZWNvZGVMYXllcnM7XG4gICAgICAgIGxldCBkZWNvZGVQYXJhbWV0ZXJzID0gTmV0UGFyYW1ldGVycy5EZWNvZGVQYXJhbWV0ZXJzO1xuICAgICAgICBsZXQgcnVubmVyID0gdGhpcy5OZXRSdW5uZXI7XG4gICAgICAgIHJldHVybiBydW5uZXIucnVuKGRlY29kZUxheWVycywgc2FtcGxlcywgZGVjb2RlUGFyYW1ldGVycywgdHJhY2VzKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXRNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==