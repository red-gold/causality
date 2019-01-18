(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/pipeline"] = factory(require("causal-net.core"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/pipeline"] = factory(root["causal-net.core"], root["causal-net.storage"], root["causal-net.utils"]);
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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./src/causality.js":
/*!**************************!*\
  !*** ./src/causality.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.storage */ "causal-net.storage"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./ensemble.mixins */ "./src/ensemble.mixins.js"), __webpack_require__(/*! ./function */ "./src/function.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _causalNet3, _ensemble, _function) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _ensemble = _interopRequireDefault(_ensemble);
  _function = _interopRequireDefault(_function);

  class CausalNet extends _causalNet3.Platform.mixWith(_causalNet.Tensor, [_ensemble.default]) {
    /**
     * @param  {} netConfig
     * @param  {} netParams
     */
    constructor(netConfig, netParams = null, storage = null) {
      super();
      this.F = new _function.default();
      this.R = this.F.CoreFunction;
      this.storage = storage || _causalNet2.IndexDBStorage;
      this.saveModelDir = '/saveModel/';
      this.HyperParameters = this.F.getHyperParameter(netConfig);
      this.BasePipeline = this.F.getPipeline(netConfig);
      this.netParams = this.setOrInitParams(this.BasePipeline, netParams);
      this.flattenParams = this.flattenParams(this.netParams);
    }

    flattenParams(params) {
      const R = this.R,
            F = this.F;

      const MapValues = objOrArray => Array.isArray(objOrArray) ? objOrArray : Object.values(objOrArray);

      const Flatten = pv => {
        if (F.isTensor(pv)) {
          return pv;
        } else {
          let values = MapValues(pv);
          let flatten = values.reduce((flatten, v) => {
            let res = Flatten(v);

            if (R.is(Array, res)) {
              flatten = [...flatten, ...res];
            } else {
              flatten = [...flatten, res];
            }

            return flatten;
          }, []);
          return flatten;
        }
      };

      let values = MapValues(params);
      return values.reduce((flatten, v) => [...flatten, ...Flatten(v)], []);
    }

    layer(value, layerConfigure, layerParameters) {
      const R = this.R;
      const {
        Name,
        Type,
        Parameters,
        Flow
      } = layerConfigure;
      console.log({
        Name,
        Type,
        Parameters,
        Flow
      });
      const OpsRuner = R.addIndex(R.reduce)(R.__, {
        result: value,
        trace: {}
      }, Flow);
      var {
        result,
        trace
      } = OpsRuner(({
        result,
        trace
      }, node, idx) => {
        if (node.Parameter) {
          result = this.T[node.Op](result, layerParameters[node.Parameter], ...node.Args);
        } else {
          result = this.T[node.Op](result, ...node.Args);
        }

        ;
        trace[idx] = result.shape;
        return {
          result,
          trace
        };
      });
      return {
        [Name]: result,
        trace
      };
    }

    setOrInitParams(pipeline, netParams) {
      const R = this.R,
            T = this.T,
            F = this.F;
      let pipeParams = R.fromPairs(R.filter(([k, v]) => v !== undefined, R.map(R.__, pipeline)(p => [p.Name, p.Parameters])));

      const SetOrInit = (mainValue, subVal) => {
        let keys = R.keys(mainValue);
        let keyMainValSubVal = R.map(k => [k, R.prop(k, mainValue), R.propOr(null, k, subVal)], keys);

        const ValMapping = ([key, mainVal, subVal]) => {
          if (F.isParameter(mainVal)) {
            const paramShape = mainVal;

            if (R.isNil(subVal)) {
              return [key, T.variable(T.randomNormal(paramShape))];
            } else {
              return [key, T.variable(T.tensor(subVal).reshape(paramShape))];
            }
          } else {
            return [key, SetOrInit(mainVal, subVal)];
          }
        };

        return R.fromPairs(R.map(ValMapping, keyMainValSubVal));
      };

      return SetOrInit(pipeParams, netParams);
    }
    /**
     * @param  {} samples
     * @param  {} numSamples=1
     */


    makePredict(samples, numSamples = 1) {
      const T = this.T,
            f = this.F,
            l = this.L;
      this.HyperParameters.Datasize = numSamples;
      const Pipeline = f.parameterAcquisition(this.BasePipeline, this.HyperParameters);
      console.log({
        Pipeline
      });
      let pipeValue = {
        PipeInput: samples
      },
          traces = [],
          netParams = this.netParams;
      return T.tidy(() => {
        for (let layer of Pipeline) {
          let layerOutput = this.layer(pipeValue[layer.Input], layer, netParams[layer.Name]);
          pipeValue[layer.Name] = layerOutput[layer.Name];
          traces.push({
            [layer.Name]: layerOutput.trace
          });
        }

        console.log({
          traces
        });
        let pipeOutput = pipeValue['PipeOutput'];
        let logProb = pipeOutput.sub(T.logSumExp(pipeOutput, 1, true));
        let predict = logProb.argMax(1);
        return {
          logProb,
          predict
        };
      });
    }
    /**
     * @param  {} sampleBatch
     * @param  {} labelBatch
     * @param  {} numSample
     */


    loss(batchSamples, batchLabels, numSample) {
      const T = this.T;
      let labelTensor = T.tensor(batchLabels).reshape([numSample, -1]);
      let sampleTensor = T.tensor(batchSamples).asType('float32');
      const {
        logProb
      } = this.makePredict(sampleTensor, numSample);
      const likelihood = logProb.neg().mul(labelTensor);
      const loss = likelihood.mean();
      return loss;
    }

    /**
     * @param  {} SampleGeneratorFn
     * @param  {} batchSize
     * @param  {} numEpochs=2
     * @param  {} lr=0.01
     */
    async train(SampleGeneratorFn, batchSize, numEpochs = 2, lr = 0.001) {
      const T = this.T,
            F = this.F,
            R = this.R;
      const start = new Date();
      let loss = [],
          averageLoss = [];
      const optimizer = T.train.adam(lr);

      for (let epochIdx of F.range(numEpochs)) {
        if (this.logger) {
          this.logger.progress({
            epochIdx,
            averageLoss,
            time: new Date().toISOString(),
            start: start.toISOString(),
            elapse: (new Date() - start) / 1000
          });
        }

        const sampleGenerator = SampleGeneratorFn(batchSize);

        for await (let [batchSamples, batchLabels] of sampleGenerator) {
          optimizer.minimize(() => {
            let l = this.loss(batchSamples, batchLabels, batchSize);
            loss = [...loss, ...l.dataSync()];
            console.log({
              loss
            });
            return l.asType('float32');
          });
        }

        averageLoss = [...averageLoss, R.mean(loss)];
        loss = [];
      }

      return new Promise((resolve, reject) => {
        resolve({
          averageLoss
        });
      });
    }

    async test(TestSampleGeneratorFn, testBatchSize, numClasses = 10) {
      const T = this.T,
            F = this.F,
            R = this.R;
      const testSampleGenerator = TestSampleGeneratorFn(testBatchSize);
      let testResult = T.zeros([1]);

      for await (let [batchSamples, batchLabels] of testSampleGenerator) {
        let labelTensor = T.tensor(batchLabels).reshape([testBatchSize, numClasses]);
        let sampleTensor = T.tensor(batchSamples).asType('float32');
        const {
          predict
        } = this.makePredict(sampleTensor, testBatchSize);
        let onehotPredict = T.oneHot(predict, numClasses);
        onehotPredict.print();
        labelTensor.print();
        onehotPredict.mul(labelTensor).sum().print();
        testResult = testResult.add(onehotPredict.mul(labelTensor).sum());
      }

      let result = await testResult.data();
      let pass = result[0];
      let accuracy = pass / testBatchSize;
      return {
        accuracy,
        pass
      };
    }

    async getParams(asObject = true) {
      const F = this.F,
            R = this.R;

      const getParams = async params => {
        if (F.isTensor(params)) {
          return Array.from((await params.data()));
        } else {
          let kVals = R.toPairs(params);
          let res = {};

          for (let [k, val] of kVals) {
            res[k] = await getParams(val);
          }

          return res;
        }
      };

      let params = await getParams(this.netParams);

      if (asObject) {
        return params;
      } else {
        return JSON.stringify(params);
      }
    }

    async getSavedParams() {
      let fileList = await this.storage.getFileList(this.saveModelDir);
      return fileList.map(fileName => fileName.replace(this.saveModelDir, ''));
    }

    async saveParams(fileName = 'save.model') {
      const params = await this.getParams();
      await this.storage.writeFile(this.saveModelDir + fileName, JSON.stringify(params));
      return params;
    }

    async loadParams(fileName, params = null) {
      if (!params) {
        let _params = await this.storage.readFile(this.saveModelDir + fileName);

        console.log({
          _params
        });
        params = JSON.parse(_params);
      }

      this.netParams = this.setOrInitParams(this.BasePipeline, params);
      return await this.getParams(false);
    }

  }

  _exports.default = CausalNet;
});

/***/ }),

/***/ "./src/ensemble.mixins.js":
/*!********************************!*\
  !*** ./src/ensemble.mixins.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const EnsembleMixins = PipelineClass => class extends PipelineClass {
    async ensembleTest(TestSampleGeneratorFn, modelList, testBatchSize, numClasses = 10) {
      const T = this.T,
            F = this.F,
            R = this.R;
      const testSampleGenerator = TestSampleGeneratorFn(testBatchSize);
      let testResult = T.zeros([1]);

      for await (let [batchSamples, batchLabels] of testSampleGenerator) {
        let labelTensor = T.tensor(batchLabels).reshape([testBatchSize, numClasses]);
        let sampleTensor = T.tensor(batchSamples).asType('float32');
        const {
          predict
        } = await this.makeEnsemblePredict(modelList, sampleTensor, testBatchSize);
        let onehotPredict = T.oneHot(predict, numClasses);
        onehotPredict.print();
        labelTensor.print();
        onehotPredict.mul(labelTensor).sum().print();
        testResult = testResult.add(onehotPredict.mul(labelTensor).sum());
      }

      let result = await testResult.data();
      let pass = result[0];
      let accuracy = pass / testBatchSize;
      return {
        accuracy,
        pass
      };
    }

    async makeEnsemblePredict(modelList, samples, numSamples = 1) {
      const T = this.T,
            f = this.F,
            l = this.L;
      this.HyperParameters.Datasize = numSamples;
      const Pipeline = f.parameterAcquisition(this.BasePipeline, this.HyperParameters);
      let pipeValue = {
        PipeInput: samples
      },
          traces = [],
          netParams = this.netParams;
      let probs = [];

      for (let model of modelList) {
        await this.loadParams(model);
        let {
          logProb
        } = T.tidy(() => {
          for (let layer of Pipeline) {
            let layerOutput = this.layer(pipeValue[layer.Input], layer, netParams[layer.Name]);
            pipeValue[layer.Name] = layerOutput[layer.Name];
            traces.push({
              [layer.Name]: layerOutput.trace
            });
          }

          console.log({
            traces
          });
          let pipeOutput = pipeValue['PipeOutput'];
          let logProb = pipeOutput.sub(T.logSumExp(pipeOutput, 1, true));
          let predict = logProb.argMax(1);
          return {
            logProb,
            predict
          };
        });
        logProb.print();
        probs.push(T.exp(logProb));
      }

      let meanProb = T.concat(probs).mean(0, true);
      meanProb.print();
      let ensemblePredict = meanProb.argMax(1);
      return {
        predict: ensemblePredict
      };
    }

  };

  var _default = EnsembleMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Function extends _causalNet.Function {
    constructor() {
      super();
    }

    isTensor(val) {
      // return val instanceof this&& 
      return val.shape !== undefined;
    }

    range(len) {
      return this.R.range(0, len);
    }

    isParameter(val) {
      const R = this.R;
      return R.is(Array)(val) && R.all(R.is(Number), val);
    }

    getPipeline(netConfig) {
      //TODO: make assertor
      return this.R.prop('Pipeline', netConfig);
    }

    getHyperParameter(netConfig) {
      //TODO: make assertor
      return this.R.prop('HyperParameters', netConfig);
    }

    getTraverse() {
      return R.curry(function (keys, item) {
        R.pipe.apply(null, R.map(R.prop, keys))(item);
      });
    }

    parameterAcquisition(pipelineItem, hyperParameters) {
      const R = this.R;

      function replaceIfMatch(value, hyperParameters) {
        if (R.is(String, value) && R.startsWith('$', value)) {
          const key = R.slice(1, Infinity, value);
          return R.prop(key, hyperParameters);
        }

        return value;
      }

      const doReplaceIfMatch = R.curry(replaceIfMatch)(R.__, hyperParameters);

      function replaceHyperParameter(pipelineItem) {
        if (R.is(Array, pipelineItem) || R.is(Object, pipelineItem)) {
          return R.map(replaceHyperParameter, pipelineItem);
        } else {
          return doReplaceIfMatch(pipelineItem);
        }
      }

      return replaceHyperParameter(pipelineItem);
    }

    isTensor(object) {
      return object.size !== undefined && object.shape !== undefined && object.dtype !== undefined;
    }

  }

  _exports.default = Function;
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./causality */ "./src/causality.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causality) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "CausalNet", {
    enumerable: true,
    get: function () {
      return _causality.default;
    }
  });
  _causality = _interopRequireDefault(_causality);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxpdHkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9lbnNlbWJsZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0IiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiRW5zZW1ibGVNaXhpbnMiLCJjb25zdHJ1Y3RvciIsIm5ldENvbmZpZyIsIm5ldFBhcmFtcyIsInN0b3JhZ2UiLCJGIiwiRnVuY3Rpb24iLCJSIiwiQ29yZUZ1bmN0aW9uIiwiSW5kZXhEQlN0b3JhZ2UiLCJzYXZlTW9kZWxEaXIiLCJIeXBlclBhcmFtZXRlcnMiLCJnZXRIeXBlclBhcmFtZXRlciIsIkJhc2VQaXBlbGluZSIsImdldFBpcGVsaW5lIiwic2V0T3JJbml0UGFyYW1zIiwiZmxhdHRlblBhcmFtcyIsInBhcmFtcyIsIk1hcFZhbHVlcyIsIm9iak9yQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJGbGF0dGVuIiwicHYiLCJpc1RlbnNvciIsImZsYXR0ZW4iLCJyZWR1Y2UiLCJ2IiwicmVzIiwiaXMiLCJsYXllciIsInZhbHVlIiwibGF5ZXJDb25maWd1cmUiLCJsYXllclBhcmFtZXRlcnMiLCJOYW1lIiwiVHlwZSIsIlBhcmFtZXRlcnMiLCJGbG93IiwiY29uc29sZSIsImxvZyIsIk9wc1J1bmVyIiwiYWRkSW5kZXgiLCJfXyIsInJlc3VsdCIsInRyYWNlIiwibm9kZSIsImlkeCIsIlBhcmFtZXRlciIsIlQiLCJPcCIsIkFyZ3MiLCJzaGFwZSIsInBpcGVsaW5lIiwicGlwZVBhcmFtcyIsImZyb21QYWlycyIsImZpbHRlciIsImsiLCJ1bmRlZmluZWQiLCJtYXAiLCJwIiwiU2V0T3JJbml0IiwibWFpblZhbHVlIiwic3ViVmFsIiwia2V5cyIsImtleU1haW5WYWxTdWJWYWwiLCJwcm9wIiwicHJvcE9yIiwiVmFsTWFwcGluZyIsImtleSIsIm1haW5WYWwiLCJpc1BhcmFtZXRlciIsInBhcmFtU2hhcGUiLCJpc05pbCIsInZhcmlhYmxlIiwicmFuZG9tTm9ybWFsIiwidGVuc29yIiwicmVzaGFwZSIsIm1ha2VQcmVkaWN0Iiwic2FtcGxlcyIsIm51bVNhbXBsZXMiLCJmIiwibCIsIkwiLCJEYXRhc2l6ZSIsIlBpcGVsaW5lIiwicGFyYW1ldGVyQWNxdWlzaXRpb24iLCJwaXBlVmFsdWUiLCJQaXBlSW5wdXQiLCJ0cmFjZXMiLCJ0aWR5IiwibGF5ZXJPdXRwdXQiLCJJbnB1dCIsInB1c2giLCJwaXBlT3V0cHV0IiwibG9nUHJvYiIsInN1YiIsImxvZ1N1bUV4cCIsInByZWRpY3QiLCJhcmdNYXgiLCJsb3NzIiwiYmF0Y2hTYW1wbGVzIiwiYmF0Y2hMYWJlbHMiLCJudW1TYW1wbGUiLCJsYWJlbFRlbnNvciIsInNhbXBsZVRlbnNvciIsImFzVHlwZSIsImxpa2VsaWhvb2QiLCJuZWciLCJtdWwiLCJtZWFuIiwidHJhaW4iLCJTYW1wbGVHZW5lcmF0b3JGbiIsImJhdGNoU2l6ZSIsIm51bUVwb2NocyIsImxyIiwic3RhcnQiLCJEYXRlIiwiYXZlcmFnZUxvc3MiLCJvcHRpbWl6ZXIiLCJhZGFtIiwiZXBvY2hJZHgiLCJyYW5nZSIsImxvZ2dlciIsInByb2dyZXNzIiwidGltZSIsInRvSVNPU3RyaW5nIiwiZWxhcHNlIiwic2FtcGxlR2VuZXJhdG9yIiwibWluaW1pemUiLCJkYXRhU3luYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGVzdCIsIlRlc3RTYW1wbGVHZW5lcmF0b3JGbiIsInRlc3RCYXRjaFNpemUiLCJudW1DbGFzc2VzIiwidGVzdFNhbXBsZUdlbmVyYXRvciIsInRlc3RSZXN1bHQiLCJ6ZXJvcyIsIm9uZWhvdFByZWRpY3QiLCJvbmVIb3QiLCJwcmludCIsInN1bSIsImFkZCIsImRhdGEiLCJwYXNzIiwiYWNjdXJhY3kiLCJnZXRQYXJhbXMiLCJhc09iamVjdCIsImZyb20iLCJrVmFscyIsInRvUGFpcnMiLCJ2YWwiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U2F2ZWRQYXJhbXMiLCJmaWxlTGlzdCIsImdldEZpbGVMaXN0IiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwic2F2ZVBhcmFtcyIsIndyaXRlRmlsZSIsImxvYWRQYXJhbXMiLCJfcGFyYW1zIiwicmVhZEZpbGUiLCJwYXJzZSIsIlBpcGVsaW5lQ2xhc3MiLCJlbnNlbWJsZVRlc3QiLCJtb2RlbExpc3QiLCJtYWtlRW5zZW1ibGVQcmVkaWN0IiwicHJvYnMiLCJtb2RlbCIsImV4cCIsIm1lYW5Qcm9iIiwiY29uY2F0IiwiZW5zZW1ibGVQcmVkaWN0IiwiQmFzZUZ1bmN0aW9uIiwibGVuIiwiYWxsIiwiTnVtYmVyIiwiZ2V0VHJhdmVyc2UiLCJjdXJyeSIsIml0ZW0iLCJwaXBlIiwiYXBwbHkiLCJwaXBlbGluZUl0ZW0iLCJoeXBlclBhcmFtZXRlcnMiLCJyZXBsYWNlSWZNYXRjaCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJzbGljZSIsIkluZmluaXR5IiwiZG9SZXBsYWNlSWZNYXRjaCIsInJlcGxhY2VIeXBlclBhcmFtZXRlciIsIm9iamVjdCIsInNpemUiLCJkdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZSxRQUFNQSxTQUFOLFNBQXdCQyxxQkFBU0MsT0FBVCxDQUFpQkMsaUJBQWpCLEVBQXdCLENBQUNDLGlCQUFELENBQXhCLENBQXhCLENBQWlFO0FBQzVFOzs7O0FBSUFDLGVBQVcsQ0FBRUMsU0FBRixFQUFhQyxTQUFTLEdBQUMsSUFBdkIsRUFBNkJDLE9BQU8sR0FBQyxJQUFyQyxFQUEyQztBQUNsRDtBQUNBLFdBQUtDLENBQUwsR0FBUyxJQUFJQyxpQkFBSixFQUFUO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTLEtBQUtGLENBQUwsQ0FBT0csWUFBaEI7QUFDQSxXQUFLSixPQUFMLEdBQWVBLE9BQU8sSUFBSUssMEJBQTFCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixhQUFwQjtBQUNBLFdBQUtDLGVBQUwsR0FBdUIsS0FBS04sQ0FBTCxDQUFPTyxpQkFBUCxDQUF5QlYsU0FBekIsQ0FBdkI7QUFDQSxXQUFLVyxZQUFMLEdBQW9CLEtBQUtSLENBQUwsQ0FBT1MsV0FBUCxDQUFtQlosU0FBbkIsQ0FBcEI7QUFDQSxXQUFLQyxTQUFMLEdBQWlCLEtBQUtZLGVBQUwsQ0FBcUIsS0FBS0YsWUFBMUIsRUFBd0NWLFNBQXhDLENBQWpCO0FBQ0EsV0FBS2EsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CLEtBQUtiLFNBQXhCLENBQXJCO0FBQ0g7O0FBRURhLGlCQUFhLENBQUNDLE1BQUQsRUFBUTtBQUNqQixZQUFNVixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFlBQWtCRixDQUFDLEdBQUcsS0FBS0EsQ0FBM0I7O0FBQ0EsWUFBTWEsU0FBUyxHQUFJQyxVQUFELElBQWNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixVQUFkLElBQTBCQSxVQUExQixHQUFxQ0csTUFBTSxDQUFDQyxNQUFQLENBQWNKLFVBQWQsQ0FBckU7O0FBQ0EsWUFBTUssT0FBTyxHQUFJQyxFQUFELElBQU07QUFDbEIsWUFBR3BCLENBQUMsQ0FBQ3FCLFFBQUYsQ0FBV0QsRUFBWCxDQUFILEVBQWtCO0FBQ2QsaUJBQU9BLEVBQVA7QUFDSCxTQUZELE1BR0k7QUFDQSxjQUFJRixNQUFNLEdBQUdMLFNBQVMsQ0FBQ08sRUFBRCxDQUF0QjtBQUNBLGNBQUlFLE9BQU8sR0FBR0osTUFBTSxDQUFDSyxNQUFQLENBQWMsQ0FBQ0QsT0FBRCxFQUFVRSxDQUFWLEtBQWM7QUFDdEMsZ0JBQUlDLEdBQUcsR0FBR04sT0FBTyxDQUFDSyxDQUFELENBQWpCOztBQUNBLGdCQUFHdEIsQ0FBQyxDQUFDd0IsRUFBRixDQUFLWCxLQUFMLEVBQVlVLEdBQVosQ0FBSCxFQUFvQjtBQUNoQkgscUJBQU8sR0FBRyxDQUFDLEdBQUdBLE9BQUosRUFBYSxHQUFHRyxHQUFoQixDQUFWO0FBQ0gsYUFGRCxNQUdJO0FBQ0FILHFCQUFPLEdBQUcsQ0FBQyxHQUFHQSxPQUFKLEVBQWFHLEdBQWIsQ0FBVjtBQUNIOztBQUNELG1CQUFPSCxPQUFQO0FBQ0gsV0FUYSxFQVNYLEVBVFcsQ0FBZDtBQVVBLGlCQUFPQSxPQUFQO0FBQ0g7QUFDSixPQWxCRDs7QUFtQkEsVUFBSUosTUFBTSxHQUFHTCxTQUFTLENBQUNELE1BQUQsQ0FBdEI7QUFFQSxhQUFPTSxNQUFNLENBQUNLLE1BQVAsQ0FBYyxDQUFDRCxPQUFELEVBQVNFLENBQVQsS0FBYSxDQUFDLEdBQUdGLE9BQUosRUFBYSxHQUFHSCxPQUFPLENBQUNLLENBQUQsQ0FBdkIsQ0FBM0IsRUFBdUQsRUFBdkQsQ0FBUDtBQUNIOztBQUVERyxTQUFLLENBQUNDLEtBQUQsRUFBUUMsY0FBUixFQUF3QkMsZUFBeEIsRUFBd0M7QUFDekMsWUFBTTVCLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsWUFBTTtBQUFDNkIsWUFBRDtBQUFPQyxZQUFQO0FBQWFDLGtCQUFiO0FBQXlCQztBQUF6QixVQUFpQ0wsY0FBdkM7QUFDQU0sYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ0wsWUFBRDtBQUFPQyxZQUFQO0FBQWFDLGtCQUFiO0FBQXlCQztBQUF6QixPQUFaO0FBQ0EsWUFBTUcsUUFBUSxHQUFHbkMsQ0FBQyxDQUFDb0MsUUFBRixDQUFXcEMsQ0FBQyxDQUFDcUIsTUFBYixFQUFxQnJCLENBQUMsQ0FBQ3FDLEVBQXZCLEVBQTBCO0FBQUNDLGNBQU0sRUFBRVosS0FBVDtBQUFnQmEsYUFBSyxFQUFFO0FBQXZCLE9BQTFCLEVBQXNEUCxJQUF0RCxDQUFqQjtBQUNBLFVBQUk7QUFBQ00sY0FBRDtBQUFTQztBQUFULFVBQWtCSixRQUFRLENBQUMsQ0FBQztBQUFDRyxjQUFEO0FBQVNDO0FBQVQsT0FBRCxFQUFrQkMsSUFBbEIsRUFBd0JDLEdBQXhCLEtBQThCO0FBQ3pELFlBQUdELElBQUksQ0FBQ0UsU0FBUixFQUFrQjtBQUNkSixnQkFBTSxHQUFHLEtBQUtLLENBQUwsQ0FBT0gsSUFBSSxDQUFDSSxFQUFaLEVBQWdCTixNQUFoQixFQUF3QlYsZUFBZSxDQUFDWSxJQUFJLENBQUNFLFNBQU4sQ0FBdkMsRUFBeUQsR0FBR0YsSUFBSSxDQUFDSyxJQUFqRSxDQUFUO0FBQ0gsU0FGRCxNQUdJO0FBQ0FQLGdCQUFNLEdBQUcsS0FBS0ssQ0FBTCxDQUFPSCxJQUFJLENBQUNJLEVBQVosRUFBZ0JOLE1BQWhCLEVBQXdCLEdBQUdFLElBQUksQ0FBQ0ssSUFBaEMsQ0FBVDtBQUNIOztBQUFBO0FBQ0ROLGFBQUssQ0FBQ0UsR0FBRCxDQUFMLEdBQWFILE1BQU0sQ0FBQ1EsS0FBcEI7QUFDQSxlQUFPO0FBQUNSLGdCQUFEO0FBQVNDO0FBQVQsU0FBUDtBQUNILE9BVDZCLENBQTlCO0FBVUEsYUFBTztBQUFDLFNBQUNWLElBQUQsR0FBUVMsTUFBVDtBQUFpQkM7QUFBakIsT0FBUDtBQUNIOztBQUVEL0IsbUJBQWUsQ0FBQ3VDLFFBQUQsRUFBV25ELFNBQVgsRUFBcUI7QUFDaEMsWUFBTUksQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxZQUFrQjJDLENBQUMsR0FBRyxLQUFLQSxDQUEzQjtBQUFBLFlBQThCN0MsQ0FBQyxHQUFHLEtBQUtBLENBQXZDO0FBQ0EsVUFBSWtELFVBQVUsR0FBR2hELENBQUMsQ0FBQ2lELFNBQUYsQ0FBWWpELENBQUMsQ0FBQ2tELE1BQUYsQ0FBUyxDQUFDLENBQUNDLENBQUQsRUFBRzdCLENBQUgsQ0FBRCxLQUFTQSxDQUFDLEtBQUs4QixTQUF4QixFQUNMcEQsQ0FBQyxDQUFDcUQsR0FBRixDQUFNckQsQ0FBQyxDQUFDcUMsRUFBUixFQUFZVSxRQUFaLEVBQXNCTyxDQUFDLElBQUUsQ0FBQ0EsQ0FBQyxDQUFDekIsSUFBSCxFQUFTeUIsQ0FBQyxDQUFDdkIsVUFBWCxDQUF6QixDQURLLENBQVosQ0FBakI7O0FBRUEsWUFBTXdCLFNBQVMsR0FBRyxDQUFDQyxTQUFELEVBQVlDLE1BQVosS0FBcUI7QUFDbkMsWUFBSUMsSUFBSSxHQUFHMUQsQ0FBQyxDQUFDMEQsSUFBRixDQUFPRixTQUFQLENBQVg7QUFDQSxZQUFJRyxnQkFBZ0IsR0FBRzNELENBQUMsQ0FBQ3FELEdBQUYsQ0FBT0YsQ0FBRCxJQUFNLENBQUNBLENBQUQsRUFBSW5ELENBQUMsQ0FBQzRELElBQUYsQ0FBT1QsQ0FBUCxFQUFVSyxTQUFWLENBQUosRUFBMEJ4RCxDQUFDLENBQUM2RCxNQUFGLENBQVMsSUFBVCxFQUFlVixDQUFmLEVBQWtCTSxNQUFsQixDQUExQixDQUFaLEVBQWtFQyxJQUFsRSxDQUF2Qjs7QUFDQSxjQUFNSSxVQUFVLEdBQUcsQ0FBQyxDQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBZVAsTUFBZixDQUFELEtBQTBCO0FBQ3pDLGNBQUczRCxDQUFDLENBQUNtRSxXQUFGLENBQWNELE9BQWQsQ0FBSCxFQUEwQjtBQUN0QixrQkFBTUUsVUFBVSxHQUFHRixPQUFuQjs7QUFDQSxnQkFBR2hFLENBQUMsQ0FBQ21FLEtBQUYsQ0FBUVYsTUFBUixDQUFILEVBQW1CO0FBQ2YscUJBQU8sQ0FBQ00sR0FBRCxFQUFNcEIsQ0FBQyxDQUFDeUIsUUFBRixDQUFXekIsQ0FBQyxDQUFDMEIsWUFBRixDQUFlSCxVQUFmLENBQVgsQ0FBTixDQUFQO0FBQ0gsYUFGRCxNQUdJO0FBQ0EscUJBQU8sQ0FBQ0gsR0FBRCxFQUFNcEIsQ0FBQyxDQUFDeUIsUUFBRixDQUFXekIsQ0FBQyxDQUFDMkIsTUFBRixDQUFTYixNQUFULEVBQWlCYyxPQUFqQixDQUF5QkwsVUFBekIsQ0FBWCxDQUFOLENBQVA7QUFDSDtBQUNKLFdBUkQsTUFTSTtBQUNBLG1CQUFPLENBQUNILEdBQUQsRUFBTVIsU0FBUyxDQUFDUyxPQUFELEVBQVVQLE1BQVYsQ0FBZixDQUFQO0FBQ0g7QUFDSixTQWJEOztBQWNBLGVBQU96RCxDQUFDLENBQUNpRCxTQUFGLENBQVlqRCxDQUFDLENBQUNxRCxHQUFGLENBQU1TLFVBQU4sRUFBa0JILGdCQUFsQixDQUFaLENBQVA7QUFDSCxPQWxCRDs7QUFtQkEsYUFBT0osU0FBUyxDQUFDUCxVQUFELEVBQWFwRCxTQUFiLENBQWhCO0FBQ0g7QUFFRDs7Ozs7O0FBSUE0RSxlQUFXLENBQUNDLE9BQUQsRUFBVUMsVUFBVSxHQUFDLENBQXJCLEVBQXVCO0FBQzlCLFlBQU0vQixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFlBQWtCZ0MsQ0FBQyxHQUFHLEtBQUs3RSxDQUEzQjtBQUFBLFlBQThCOEUsQ0FBQyxHQUFHLEtBQUtDLENBQXZDO0FBQ0EsV0FBS3pFLGVBQUwsQ0FBcUIwRSxRQUFyQixHQUFnQ0osVUFBaEM7QUFDQSxZQUFNSyxRQUFRLEdBQUdKLENBQUMsQ0FBQ0ssb0JBQUYsQ0FBdUIsS0FBSzFFLFlBQTVCLEVBQTBDLEtBQUtGLGVBQS9DLENBQWpCO0FBQ0E2QixhQUFPLENBQUNDLEdBQVIsQ0FBYTtBQUFDNkM7QUFBRCxPQUFiO0FBQ0EsVUFBSUUsU0FBUyxHQUFHO0FBQUNDLGlCQUFTLEVBQUVUO0FBQVosT0FBaEI7QUFBQSxVQUFzQ1UsTUFBTSxHQUFHLEVBQS9DO0FBQUEsVUFBbUR2RixTQUFTLEdBQUcsS0FBS0EsU0FBcEU7QUFDQSxhQUFPK0MsQ0FBQyxDQUFDeUMsSUFBRixDQUFPLE1BQUk7QUFDZCxhQUFJLElBQUkzRCxLQUFSLElBQWlCc0QsUUFBakIsRUFBMEI7QUFDdEIsY0FBSU0sV0FBVyxHQUFHLEtBQUs1RCxLQUFMLENBQVd3RCxTQUFTLENBQUN4RCxLQUFLLENBQUM2RCxLQUFQLENBQXBCLEVBQW1DN0QsS0FBbkMsRUFBMEM3QixTQUFTLENBQUM2QixLQUFLLENBQUNJLElBQVAsQ0FBbkQsQ0FBbEI7QUFDQW9ELG1CQUFTLENBQUN4RCxLQUFLLENBQUNJLElBQVAsQ0FBVCxHQUF3QndELFdBQVcsQ0FBQzVELEtBQUssQ0FBQ0ksSUFBUCxDQUFuQztBQUNBc0QsZ0JBQU0sQ0FBQ0ksSUFBUCxDQUFZO0FBQUMsYUFBQzlELEtBQUssQ0FBQ0ksSUFBUCxHQUFjd0QsV0FBVyxDQUFDOUM7QUFBM0IsV0FBWjtBQUNIOztBQUNETixlQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDaUQ7QUFBRCxTQUFaO0FBQ0EsWUFBSUssVUFBVSxHQUFHUCxTQUFTLENBQUMsWUFBRCxDQUExQjtBQUNBLFlBQUlRLE9BQU8sR0FBR0QsVUFBVSxDQUFDRSxHQUFYLENBQWUvQyxDQUFDLENBQUNnRCxTQUFGLENBQVlILFVBQVosRUFBd0IsQ0FBeEIsRUFBMkIsSUFBM0IsQ0FBZixDQUFkO0FBQ0EsWUFBSUksT0FBTyxHQUFHSCxPQUFPLENBQUNJLE1BQVIsQ0FBZSxDQUFmLENBQWQ7QUFDQSxlQUFPO0FBQUNKLGlCQUFEO0FBQVVHO0FBQVYsU0FBUDtBQUNILE9BWE0sQ0FBUDtBQVlIO0FBQ0Q7Ozs7Ozs7QUFLQUUsUUFBSSxDQUFDQyxZQUFELEVBQWVDLFdBQWYsRUFBNEJDLFNBQTVCLEVBQXNDO0FBQ3RDLFlBQU10RCxDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLFVBQUl1RCxXQUFXLEdBQUl2RCxDQUFDLENBQUMyQixNQUFGLENBQVMwQixXQUFULEVBQXNCekIsT0FBdEIsQ0FBOEIsQ0FBQzBCLFNBQUQsRUFBWSxDQUFDLENBQWIsQ0FBOUIsQ0FBbkI7QUFDQSxVQUFJRSxZQUFZLEdBQUd4RCxDQUFDLENBQUMyQixNQUFGLENBQVN5QixZQUFULEVBQXVCSyxNQUF2QixDQUE4QixTQUE5QixDQUFuQjtBQUNBLFlBQU07QUFBQ1g7QUFBRCxVQUFZLEtBQUtqQixXQUFMLENBQWlCMkIsWUFBakIsRUFBK0JGLFNBQS9CLENBQWxCO0FBQ0EsWUFBTUksVUFBVSxHQUFHWixPQUFPLENBQUNhLEdBQVIsR0FBY0MsR0FBZCxDQUFrQkwsV0FBbEIsQ0FBbkI7QUFDQSxZQUFNSixJQUFJLEdBQUdPLFVBQVUsQ0FBQ0csSUFBWCxFQUFiO0FBQ0EsYUFBT1YsSUFBUDtBQUNIOztBQUNEOzs7Ozs7QUFNQSxVQUFNVyxLQUFOLENBQVlDLGlCQUFaLEVBQStCQyxTQUEvQixFQUEwQ0MsU0FBUyxHQUFHLENBQXRELEVBQXlEQyxFQUFFLEdBQUMsS0FBNUQsRUFBa0U7QUFDOUQsWUFBTWxFLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQUEsWUFBa0I3QyxDQUFDLEdBQUcsS0FBS0EsQ0FBM0I7QUFBQSxZQUE4QkUsQ0FBQyxHQUFHLEtBQUtBLENBQXZDO0FBQ0EsWUFBTThHLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQSxVQUFJakIsSUFBSSxHQUFHLEVBQVg7QUFBQSxVQUFla0IsV0FBVyxHQUFHLEVBQTdCO0FBQ0EsWUFBTUMsU0FBUyxHQUFHdEUsQ0FBQyxDQUFDOEQsS0FBRixDQUFRUyxJQUFSLENBQWFMLEVBQWIsQ0FBbEI7O0FBQ0EsV0FBSSxJQUFJTSxRQUFSLElBQW9CckgsQ0FBQyxDQUFDc0gsS0FBRixDQUFRUixTQUFSLENBQXBCLEVBQXVDO0FBQ25DLFlBQUcsS0FBS1MsTUFBUixFQUFlO0FBQ1gsZUFBS0EsTUFBTCxDQUFZQyxRQUFaLENBQXFCO0FBQUNILG9CQUFEO0FBQVdILHVCQUFYO0FBQXdCTyxnQkFBSSxFQUFFLElBQUlSLElBQUosR0FBV1MsV0FBWCxFQUE5QjtBQUNSVixpQkFBSyxFQUFFQSxLQUFLLENBQUNVLFdBQU4sRUFEQztBQUNvQkMsa0JBQU0sRUFBRSxDQUFDLElBQUlWLElBQUosS0FBYUQsS0FBZCxJQUFxQjtBQURqRCxXQUFyQjtBQUVIOztBQUNELGNBQU1ZLGVBQWUsR0FBR2hCLGlCQUFpQixDQUFDQyxTQUFELENBQXpDOztBQUNBLG1CQUFXLElBQUksQ0FBQ1osWUFBRCxFQUFlQyxXQUFmLENBQWYsSUFBOEMwQixlQUE5QyxFQUE4RDtBQUMxRFQsbUJBQVMsQ0FBQ1UsUUFBVixDQUFtQixNQUFJO0FBQ25CLGdCQUFJL0MsQ0FBQyxHQUFHLEtBQUtrQixJQUFMLENBQVVDLFlBQVYsRUFBd0JDLFdBQXhCLEVBQXFDVyxTQUFyQyxDQUFSO0FBQ0FiLGdCQUFJLEdBQUcsQ0FBQyxHQUFHQSxJQUFKLEVBQVUsR0FBR2xCLENBQUMsQ0FBQ2dELFFBQUYsRUFBYixDQUFQO0FBQ0EzRixtQkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQzREO0FBQUQsYUFBWjtBQUNBLG1CQUFPbEIsQ0FBQyxDQUFDd0IsTUFBRixDQUFTLFNBQVQsQ0FBUDtBQUNILFdBTEQ7QUFNSDs7QUFDRFksbUJBQVcsR0FBRyxDQUFDLEdBQUdBLFdBQUosRUFBaUJoSCxDQUFDLENBQUN3RyxJQUFGLENBQU9WLElBQVAsQ0FBakIsQ0FBZDtBQUNBQSxZQUFJLEdBQUcsRUFBUDtBQUNIOztBQUNELGFBQU8sSUFBSStCLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBbUI7QUFDbENELGVBQU8sQ0FBQztBQUFDZDtBQUFELFNBQUQsQ0FBUDtBQUNILE9BRk0sQ0FBUDtBQUdIOztBQUVELFVBQU1nQixJQUFOLENBQVdDLHFCQUFYLEVBQWtDQyxhQUFsQyxFQUFpREMsVUFBVSxHQUFDLEVBQTVELEVBQStEO0FBQzNELFlBQU14RixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFlBQWtCN0MsQ0FBQyxHQUFHLEtBQUtBLENBQTNCO0FBQUEsWUFBOEJFLENBQUMsR0FBRyxLQUFLQSxDQUF2QztBQUNBLFlBQU1vSSxtQkFBbUIsR0FBR0gscUJBQXFCLENBQUNDLGFBQUQsQ0FBakQ7QUFDQSxVQUFJRyxVQUFVLEdBQUcxRixDQUFDLENBQUMyRixLQUFGLENBQVEsQ0FBQyxDQUFELENBQVIsQ0FBakI7O0FBQ0EsaUJBQVcsSUFBSSxDQUFDdkMsWUFBRCxFQUFlQyxXQUFmLENBQWYsSUFBOENvQyxtQkFBOUMsRUFBa0U7QUFDOUQsWUFBSWxDLFdBQVcsR0FBSXZELENBQUMsQ0FBQzJCLE1BQUYsQ0FBUzBCLFdBQVQsRUFBc0J6QixPQUF0QixDQUE4QixDQUFDMkQsYUFBRCxFQUFnQkMsVUFBaEIsQ0FBOUIsQ0FBbkI7QUFDQSxZQUFJaEMsWUFBWSxHQUFHeEQsQ0FBQyxDQUFDMkIsTUFBRixDQUFTeUIsWUFBVCxFQUF1QkssTUFBdkIsQ0FBOEIsU0FBOUIsQ0FBbkI7QUFDQSxjQUFNO0FBQUNSO0FBQUQsWUFBWSxLQUFLcEIsV0FBTCxDQUFpQjJCLFlBQWpCLEVBQStCK0IsYUFBL0IsQ0FBbEI7QUFDQSxZQUFJSyxhQUFhLEdBQUc1RixDQUFDLENBQUM2RixNQUFGLENBQVM1QyxPQUFULEVBQWtCdUMsVUFBbEIsQ0FBcEI7QUFDQUkscUJBQWEsQ0FBQ0UsS0FBZDtBQUNBdkMsbUJBQVcsQ0FBQ3VDLEtBQVo7QUFDQUYscUJBQWEsQ0FBQ2hDLEdBQWQsQ0FBa0JMLFdBQWxCLEVBQStCd0MsR0FBL0IsR0FBcUNELEtBQXJDO0FBQ0FKLGtCQUFVLEdBQUdBLFVBQVUsQ0FBQ00sR0FBWCxDQUFlSixhQUFhLENBQUNoQyxHQUFkLENBQWtCTCxXQUFsQixFQUErQndDLEdBQS9CLEVBQWYsQ0FBYjtBQUNIOztBQUNELFVBQUlwRyxNQUFNLEdBQUcsTUFBTStGLFVBQVUsQ0FBQ08sSUFBWCxFQUFuQjtBQUNBLFVBQUlDLElBQUksR0FBR3ZHLE1BQU0sQ0FBQyxDQUFELENBQWpCO0FBQ0EsVUFBSXdHLFFBQVEsR0FBR0QsSUFBSSxHQUFDWCxhQUFwQjtBQUNBLGFBQU87QUFBQ1ksZ0JBQUQ7QUFBV0Q7QUFBWCxPQUFQO0FBQ0g7O0FBRUQsVUFBTUUsU0FBTixDQUFnQkMsUUFBUSxHQUFDLElBQXpCLEVBQThCO0FBQzFCLFlBQU1sSixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFlBQWtCRSxDQUFDLEdBQUcsS0FBS0EsQ0FBM0I7O0FBQ0EsWUFBTStJLFNBQVMsR0FBRyxNQUFPckksTUFBUCxJQUFnQjtBQUM5QixZQUFHWixDQUFDLENBQUNxQixRQUFGLENBQVdULE1BQVgsQ0FBSCxFQUFzQjtBQUNsQixpQkFBT0csS0FBSyxDQUFDb0ksSUFBTixFQUFXLE1BQU12SSxNQUFNLENBQUNrSSxJQUFQLEVBQWpCLEVBQVA7QUFDSCxTQUZELE1BR0k7QUFDQSxjQUFJTSxLQUFLLEdBQUdsSixDQUFDLENBQUNtSixPQUFGLENBQVV6SSxNQUFWLENBQVo7QUFDQSxjQUFJYSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxlQUFJLElBQUksQ0FBQzRCLENBQUQsRUFBSWlHLEdBQUosQ0FBUixJQUFvQkYsS0FBcEIsRUFBMEI7QUFDdEIzSCxlQUFHLENBQUM0QixDQUFELENBQUgsR0FBUyxNQUFNNEYsU0FBUyxDQUFDSyxHQUFELENBQXhCO0FBQ0g7O0FBQ0QsaUJBQU83SCxHQUFQO0FBQ0g7QUFDSixPQVpEOztBQWFBLFVBQUliLE1BQU0sR0FBRyxNQUFNcUksU0FBUyxDQUFDLEtBQUtuSixTQUFOLENBQTVCOztBQUNBLFVBQUdvSixRQUFILEVBQVk7QUFDUixlQUFPdEksTUFBUDtBQUNILE9BRkQsTUFHSTtBQUNBLGVBQU8ySSxJQUFJLENBQUNDLFNBQUwsQ0FBZTVJLE1BQWYsQ0FBUDtBQUNIO0FBQ0o7O0FBQ0QsVUFBTTZJLGNBQU4sR0FBc0I7QUFDbEIsVUFBSUMsUUFBUSxHQUFHLE1BQU0sS0FBSzNKLE9BQUwsQ0FBYTRKLFdBQWIsQ0FBeUIsS0FBS3RKLFlBQTlCLENBQXJCO0FBQ0EsYUFBT3FKLFFBQVEsQ0FBQ25HLEdBQVQsQ0FBYXFHLFFBQVEsSUFBRUEsUUFBUSxDQUFDQyxPQUFULENBQWlCLEtBQUt4SixZQUF0QixFQUFtQyxFQUFuQyxDQUF2QixDQUFQO0FBQ0g7O0FBQ0QsVUFBTXlKLFVBQU4sQ0FBaUJGLFFBQVEsR0FBQyxZQUExQixFQUF1QztBQUNuQyxZQUFNaEosTUFBTSxHQUFHLE1BQU0sS0FBS3FJLFNBQUwsRUFBckI7QUFDQSxZQUFNLEtBQUtsSixPQUFMLENBQWFnSyxTQUFiLENBQXVCLEtBQUsxSixZQUFMLEdBQW9CdUosUUFBM0MsRUFBcURMLElBQUksQ0FBQ0MsU0FBTCxDQUFlNUksTUFBZixDQUFyRCxDQUFOO0FBQ0EsYUFBT0EsTUFBUDtBQUNIOztBQUNELFVBQU1vSixVQUFOLENBQWlCSixRQUFqQixFQUEyQmhKLE1BQU0sR0FBQyxJQUFsQyxFQUF1QztBQUNuQyxVQUFHLENBQUNBLE1BQUosRUFBVztBQUNQLFlBQUlxSixPQUFPLEdBQUcsTUFBTSxLQUFLbEssT0FBTCxDQUFhbUssUUFBYixDQUFzQixLQUFLN0osWUFBTCxHQUFrQnVKLFFBQXhDLENBQXBCOztBQUNBekgsZUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQzZIO0FBQUQsU0FBWjtBQUNBckosY0FBTSxHQUFHMkksSUFBSSxDQUFDWSxLQUFMLENBQVdGLE9BQVgsQ0FBVDtBQUNIOztBQUNELFdBQUtuSyxTQUFMLEdBQWlCLEtBQUtZLGVBQUwsQ0FBcUIsS0FBS0YsWUFBMUIsRUFBd0NJLE1BQXhDLENBQWpCO0FBQ0EsYUFBTyxNQUFNLEtBQUtxSSxTQUFMLENBQWUsS0FBZixDQUFiO0FBQ0g7O0FBMU4yRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaEYsUUFBTXRKLGNBQWMsR0FBSXlLLGFBQUQsSUFBa0IsY0FBY0EsYUFBZCxDQUEyQjtBQUNoRSxVQUFNQyxZQUFOLENBQW1CbEMscUJBQW5CLEVBQTBDbUMsU0FBMUMsRUFBcURsQyxhQUFyRCxFQUFvRUMsVUFBVSxHQUFDLEVBQS9FLEVBQWtGO0FBQzlFLFlBQU14RixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFlBQWtCN0MsQ0FBQyxHQUFHLEtBQUtBLENBQTNCO0FBQUEsWUFBOEJFLENBQUMsR0FBRyxLQUFLQSxDQUF2QztBQUNBLFlBQU1vSSxtQkFBbUIsR0FBR0gscUJBQXFCLENBQUNDLGFBQUQsQ0FBakQ7QUFDQSxVQUFJRyxVQUFVLEdBQUcxRixDQUFDLENBQUMyRixLQUFGLENBQVEsQ0FBQyxDQUFELENBQVIsQ0FBakI7O0FBQ0EsaUJBQVcsSUFBSSxDQUFDdkMsWUFBRCxFQUFlQyxXQUFmLENBQWYsSUFBOENvQyxtQkFBOUMsRUFBa0U7QUFDOUQsWUFBSWxDLFdBQVcsR0FBSXZELENBQUMsQ0FBQzJCLE1BQUYsQ0FBUzBCLFdBQVQsRUFBc0J6QixPQUF0QixDQUE4QixDQUFDMkQsYUFBRCxFQUFnQkMsVUFBaEIsQ0FBOUIsQ0FBbkI7QUFDQSxZQUFJaEMsWUFBWSxHQUFHeEQsQ0FBQyxDQUFDMkIsTUFBRixDQUFTeUIsWUFBVCxFQUF1QkssTUFBdkIsQ0FBOEIsU0FBOUIsQ0FBbkI7QUFDQSxjQUFNO0FBQUNSO0FBQUQsWUFBWSxNQUFNLEtBQUt5RSxtQkFBTCxDQUF5QkQsU0FBekIsRUFBb0NqRSxZQUFwQyxFQUFrRCtCLGFBQWxELENBQXhCO0FBQ0EsWUFBSUssYUFBYSxHQUFHNUYsQ0FBQyxDQUFDNkYsTUFBRixDQUFTNUMsT0FBVCxFQUFrQnVDLFVBQWxCLENBQXBCO0FBQ0FJLHFCQUFhLENBQUNFLEtBQWQ7QUFDQXZDLG1CQUFXLENBQUN1QyxLQUFaO0FBQ0FGLHFCQUFhLENBQUNoQyxHQUFkLENBQWtCTCxXQUFsQixFQUErQndDLEdBQS9CLEdBQXFDRCxLQUFyQztBQUNBSixrQkFBVSxHQUFHQSxVQUFVLENBQUNNLEdBQVgsQ0FBZUosYUFBYSxDQUFDaEMsR0FBZCxDQUFrQkwsV0FBbEIsRUFBK0J3QyxHQUEvQixFQUFmLENBQWI7QUFDSDs7QUFDRCxVQUFJcEcsTUFBTSxHQUFHLE1BQU0rRixVQUFVLENBQUNPLElBQVgsRUFBbkI7QUFDQSxVQUFJQyxJQUFJLEdBQUd2RyxNQUFNLENBQUMsQ0FBRCxDQUFqQjtBQUNBLFVBQUl3RyxRQUFRLEdBQUdELElBQUksR0FBQ1gsYUFBcEI7QUFDQSxhQUFPO0FBQUNZLGdCQUFEO0FBQVdEO0FBQVgsT0FBUDtBQUNIOztBQUNELFVBQU13QixtQkFBTixDQUEwQkQsU0FBMUIsRUFBcUMzRixPQUFyQyxFQUE4Q0MsVUFBVSxHQUFDLENBQXpELEVBQTJEO0FBQ3ZELFlBQU0vQixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFlBQWtCZ0MsQ0FBQyxHQUFHLEtBQUs3RSxDQUEzQjtBQUFBLFlBQThCOEUsQ0FBQyxHQUFHLEtBQUtDLENBQXZDO0FBQ0EsV0FBS3pFLGVBQUwsQ0FBcUIwRSxRQUFyQixHQUFnQ0osVUFBaEM7QUFDQSxZQUFNSyxRQUFRLEdBQUdKLENBQUMsQ0FBQ0ssb0JBQUYsQ0FBdUIsS0FBSzFFLFlBQTVCLEVBQTBDLEtBQUtGLGVBQS9DLENBQWpCO0FBQ0EsVUFBSTZFLFNBQVMsR0FBRztBQUFDQyxpQkFBUyxFQUFFVDtBQUFaLE9BQWhCO0FBQUEsVUFBc0NVLE1BQU0sR0FBRyxFQUEvQztBQUFBLFVBQW1EdkYsU0FBUyxHQUFHLEtBQUtBLFNBQXBFO0FBQ0EsVUFBSTBLLEtBQUssR0FBRyxFQUFaOztBQUNBLFdBQUksSUFBSUMsS0FBUixJQUFpQkgsU0FBakIsRUFBMkI7QUFDdkIsY0FBTSxLQUFLTixVQUFMLENBQWdCUyxLQUFoQixDQUFOO0FBQ0EsWUFBSTtBQUFDOUU7QUFBRCxZQUFZOUMsQ0FBQyxDQUFDeUMsSUFBRixDQUFPLE1BQUk7QUFDdkIsZUFBSSxJQUFJM0QsS0FBUixJQUFpQnNELFFBQWpCLEVBQTBCO0FBQ3RCLGdCQUFJTSxXQUFXLEdBQUcsS0FBSzVELEtBQUwsQ0FBV3dELFNBQVMsQ0FBQ3hELEtBQUssQ0FBQzZELEtBQVAsQ0FBcEIsRUFBbUM3RCxLQUFuQyxFQUEwQzdCLFNBQVMsQ0FBQzZCLEtBQUssQ0FBQ0ksSUFBUCxDQUFuRCxDQUFsQjtBQUNBb0QscUJBQVMsQ0FBQ3hELEtBQUssQ0FBQ0ksSUFBUCxDQUFULEdBQXdCd0QsV0FBVyxDQUFDNUQsS0FBSyxDQUFDSSxJQUFQLENBQW5DO0FBQ0FzRCxrQkFBTSxDQUFDSSxJQUFQLENBQVk7QUFBQyxlQUFDOUQsS0FBSyxDQUFDSSxJQUFQLEdBQWN3RCxXQUFXLENBQUM5QztBQUEzQixhQUFaO0FBQ0g7O0FBQ0ROLGlCQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDaUQ7QUFBRCxXQUFaO0FBQ0EsY0FBSUssVUFBVSxHQUFHUCxTQUFTLENBQUMsWUFBRCxDQUExQjtBQUNBLGNBQUlRLE9BQU8sR0FBR0QsVUFBVSxDQUFDRSxHQUFYLENBQWUvQyxDQUFDLENBQUNnRCxTQUFGLENBQVlILFVBQVosRUFBd0IsQ0FBeEIsRUFBMkIsSUFBM0IsQ0FBZixDQUFkO0FBQ0EsY0FBSUksT0FBTyxHQUFHSCxPQUFPLENBQUNJLE1BQVIsQ0FBZSxDQUFmLENBQWQ7QUFDQSxpQkFBTztBQUFDSixtQkFBRDtBQUFVRztBQUFWLFdBQVA7QUFDSCxTQVhlLENBQWhCO0FBWUFILGVBQU8sQ0FBQ2dELEtBQVI7QUFDQTZCLGFBQUssQ0FBQy9FLElBQU4sQ0FBVzVDLENBQUMsQ0FBQzZILEdBQUYsQ0FBTS9FLE9BQU4sQ0FBWDtBQUNIOztBQUNELFVBQUlnRixRQUFRLEdBQUc5SCxDQUFDLENBQUMrSCxNQUFGLENBQVNKLEtBQVQsRUFBZ0I5RCxJQUFoQixDQUFxQixDQUFyQixFQUF3QixJQUF4QixDQUFmO0FBQ0FpRSxjQUFRLENBQUNoQyxLQUFUO0FBQ0EsVUFBSWtDLGVBQWUsR0FBR0YsUUFBUSxDQUFDNUUsTUFBVCxDQUFnQixDQUFoQixDQUF0QjtBQUNBLGFBQU87QUFBQ0QsZUFBTyxFQUFDK0U7QUFBVCxPQUFQO0FBQ0g7O0FBL0MrRCxHQUFwRTs7aUJBaURlbEwsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQSxRQUFNTSxRQUFOLFNBQXVCNkssbUJBQXZCLENBQW1DO0FBQzlDbEwsZUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFFRHlCLFlBQVEsQ0FBQ2lJLEdBQUQsRUFBSztBQUNUO0FBQ0EsYUFBT0EsR0FBRyxDQUFDdEcsS0FBSixLQUFjTSxTQUFyQjtBQUNIOztBQUNEZ0UsU0FBSyxDQUFDeUQsR0FBRCxFQUFLO0FBQ04sYUFBTyxLQUFLN0ssQ0FBTCxDQUFPb0gsS0FBUCxDQUFhLENBQWIsRUFBZ0J5RCxHQUFoQixDQUFQO0FBQ0g7O0FBRUQ1RyxlQUFXLENBQUNtRixHQUFELEVBQUs7QUFDWixZQUFNcEosQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxhQUFPQSxDQUFDLENBQUN3QixFQUFGLENBQUtYLEtBQUwsRUFBWXVJLEdBQVosS0FBb0JwSixDQUFDLENBQUM4SyxHQUFGLENBQU05SyxDQUFDLENBQUN3QixFQUFGLENBQUt1SixNQUFMLENBQU4sRUFBb0IzQixHQUFwQixDQUEzQjtBQUNIOztBQUVEN0ksZUFBVyxDQUFDWixTQUFELEVBQVc7QUFDbEI7QUFDQSxhQUFPLEtBQUtLLENBQUwsQ0FBTzRELElBQVAsQ0FBWSxVQUFaLEVBQXdCakUsU0FBeEIsQ0FBUDtBQUNIOztBQUVEVSxxQkFBaUIsQ0FBQ1YsU0FBRCxFQUFXO0FBQ3hCO0FBQ0EsYUFBTyxLQUFLSyxDQUFMLENBQU80RCxJQUFQLENBQVksaUJBQVosRUFBK0JqRSxTQUEvQixDQUFQO0FBQ0g7O0FBRURxTCxlQUFXLEdBQUU7QUFDVCxhQUFPaEwsQ0FBQyxDQUFDaUwsS0FBRixDQUFRLFVBQVN2SCxJQUFULEVBQWV3SCxJQUFmLEVBQW9CO0FBQy9CbEwsU0FBQyxDQUFDbUwsSUFBRixDQUFPQyxLQUFQLENBQWEsSUFBYixFQUFtQnBMLENBQUMsQ0FBQ3FELEdBQUYsQ0FBTXJELENBQUMsQ0FBQzRELElBQVIsRUFBY0YsSUFBZCxDQUFuQixFQUF3Q3dILElBQXhDO0FBQ0gsT0FGTSxDQUFQO0FBR0g7O0FBRURsRyx3QkFBb0IsQ0FBQ3FHLFlBQUQsRUFBZUMsZUFBZixFQUErQjtBQUMvQyxZQUFNdEwsQ0FBQyxHQUFHLEtBQUtBLENBQWY7O0FBQ0EsZUFBU3VMLGNBQVQsQ0FBd0I3SixLQUF4QixFQUErQjRKLGVBQS9CLEVBQStDO0FBQzNDLFlBQUd0TCxDQUFDLENBQUN3QixFQUFGLENBQUtnSyxNQUFMLEVBQWE5SixLQUFiLEtBQXVCMUIsQ0FBQyxDQUFDeUwsVUFBRixDQUFhLEdBQWIsRUFBa0IvSixLQUFsQixDQUExQixFQUFtRDtBQUMvQyxnQkFBTXFDLEdBQUcsR0FBRy9ELENBQUMsQ0FBQzBMLEtBQUYsQ0FBUSxDQUFSLEVBQVdDLFFBQVgsRUFBcUJqSyxLQUFyQixDQUFaO0FBQ0EsaUJBQU8xQixDQUFDLENBQUM0RCxJQUFGLENBQU9HLEdBQVAsRUFBWXVILGVBQVosQ0FBUDtBQUNIOztBQUNELGVBQU81SixLQUFQO0FBQ0g7O0FBQ0QsWUFBTWtLLGdCQUFnQixHQUFHNUwsQ0FBQyxDQUFDaUwsS0FBRixDQUFRTSxjQUFSLEVBQXdCdkwsQ0FBQyxDQUFDcUMsRUFBMUIsRUFBOEJpSixlQUE5QixDQUF6Qjs7QUFDQSxlQUFTTyxxQkFBVCxDQUErQlIsWUFBL0IsRUFBNEM7QUFDeEMsWUFBR3JMLENBQUMsQ0FBQ3dCLEVBQUYsQ0FBS1gsS0FBTCxFQUFZd0ssWUFBWixLQUE2QnJMLENBQUMsQ0FBQ3dCLEVBQUYsQ0FBS1QsTUFBTCxFQUFhc0ssWUFBYixDQUFoQyxFQUEyRDtBQUN2RCxpQkFBT3JMLENBQUMsQ0FBQ3FELEdBQUYsQ0FBTXdJLHFCQUFOLEVBQTZCUixZQUE3QixDQUFQO0FBQ0gsU0FGRCxNQUdJO0FBQ0EsaUJBQU9PLGdCQUFnQixDQUFDUCxZQUFELENBQXZCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPUSxxQkFBcUIsQ0FBQ1IsWUFBRCxDQUE1QjtBQUNIOztBQUVEbEssWUFBUSxDQUFDMkssTUFBRCxFQUFRO0FBQ1osYUFBT0EsTUFBTSxDQUFDQyxJQUFQLEtBQWdCM0ksU0FBaEIsSUFBNkIwSSxNQUFNLENBQUNoSixLQUFQLEtBQWlCTSxTQUE5QyxJQUEyRDBJLE1BQU0sQ0FBQ0UsS0FBUCxLQUFpQjVJLFNBQW5GO0FBQ0g7O0FBekQ2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEQsNkQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9waXBlbGluZS5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcGlwZWxpbmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCB7VGVuc29yfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHtJbmRleERCU3RvcmFnZX0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEVuc2VtYmxlTWl4aW5zfSBmcm9tICcuL2Vuc2VtYmxlLm1peGlucyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgRnVuY3Rpb259IGZyb20gJy4vZnVuY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXVzYWxOZXQgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKFRlbnNvcixbRW5zZW1ibGVNaXhpbnNdKXtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHt9IG5ldENvbmZpZ1xuICAgICAqIEBwYXJhbSAge30gbmV0UGFyYW1zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoIG5ldENvbmZpZywgbmV0UGFyYW1zPW51bGwsIHN0b3JhZ2U9bnVsbCApe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLkYgPSBuZXcgRnVuY3Rpb24oKTtcbiAgICAgICAgdGhpcy5SID0gdGhpcy5GLkNvcmVGdW5jdGlvbjtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZSB8fCBJbmRleERCU3RvcmFnZTtcbiAgICAgICAgdGhpcy5zYXZlTW9kZWxEaXIgPSAnL3NhdmVNb2RlbC8nO1xuICAgICAgICB0aGlzLkh5cGVyUGFyYW1ldGVycyA9IHRoaXMuRi5nZXRIeXBlclBhcmFtZXRlcihuZXRDb25maWcpO1xuICAgICAgICB0aGlzLkJhc2VQaXBlbGluZSA9IHRoaXMuRi5nZXRQaXBlbGluZShuZXRDb25maWcpO1xuICAgICAgICB0aGlzLm5ldFBhcmFtcyA9IHRoaXMuc2V0T3JJbml0UGFyYW1zKHRoaXMuQmFzZVBpcGVsaW5lLCBuZXRQYXJhbXMpO1xuICAgICAgICB0aGlzLmZsYXR0ZW5QYXJhbXMgPSB0aGlzLmZsYXR0ZW5QYXJhbXModGhpcy5uZXRQYXJhbXMpOyAgICAgICAgXG4gICAgfVxuXG4gICAgZmxhdHRlblBhcmFtcyhwYXJhbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBGID0gdGhpcy5GO1xuICAgICAgICBjb25zdCBNYXBWYWx1ZXMgPSAob2JqT3JBcnJheSk9PkFycmF5LmlzQXJyYXkob2JqT3JBcnJheSk/b2JqT3JBcnJheTpPYmplY3QudmFsdWVzKG9iak9yQXJyYXkpO1xuICAgICAgICBjb25zdCBGbGF0dGVuID0gKHB2KT0+e1xuICAgICAgICAgICAgaWYoRi5pc1RlbnNvcihwdikpe1xuICAgICAgICAgICAgICAgIHJldHVybiBwdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IE1hcFZhbHVlcyhwdik7XG4gICAgICAgICAgICAgICAgbGV0IGZsYXR0ZW4gPSB2YWx1ZXMucmVkdWNlKChmbGF0dGVuLCB2KT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gRmxhdHRlbih2KTtcbiAgICAgICAgICAgICAgICAgICAgaWYoUi5pcyhBcnJheSwgcmVzKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuID0gWy4uLmZsYXR0ZW4sIC4uLnJlc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW4gPSBbLi4uZmxhdHRlbiwgcmVzXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmxhdHRlbjtcbiAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsYXR0ZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCB2YWx1ZXMgPSBNYXBWYWx1ZXMocGFyYW1zKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKChmbGF0dGVuLHYpPT5bLi4uZmxhdHRlbiwgLi4uRmxhdHRlbih2KV0sW10pO1xuICAgIH1cblxuICAgIGxheWVyKHZhbHVlLCBsYXllckNvbmZpZ3VyZSwgbGF5ZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3Qge05hbWUsIFR5cGUsIFBhcmFtZXRlcnMsIEZsb3d9ID0gbGF5ZXJDb25maWd1cmU7XG4gICAgICAgIGNvbnNvbGUubG9nKHtOYW1lLCBUeXBlLCBQYXJhbWV0ZXJzLCBGbG93fSk7XG4gICAgICAgIGNvbnN0IE9wc1J1bmVyID0gUi5hZGRJbmRleChSLnJlZHVjZSkoUi5fXyx7cmVzdWx0OiB2YWx1ZSwgdHJhY2U6IHt9fSwgRmxvdyk7XG4gICAgICAgIHZhciB7cmVzdWx0LCB0cmFjZX0gPSBPcHNSdW5lcigoe3Jlc3VsdCwgdHJhY2V9LCBub2RlLCBpZHgpPT57XG4gICAgICAgICAgICBpZihub2RlLlBhcmFtZXRlcil7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5UW25vZGUuT3BdKHJlc3VsdCwgbGF5ZXJQYXJhbWV0ZXJzW25vZGUuUGFyYW1ldGVyXSwgLi4ubm9kZS5BcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5UW25vZGUuT3BdKHJlc3VsdCwgLi4ubm9kZS5BcmdzKTsgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJhY2VbaWR4XSA9IHJlc3VsdC5zaGFwZTtcbiAgICAgICAgICAgIHJldHVybiB7cmVzdWx0LCB0cmFjZX07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0LCB0cmFjZX07XG4gICAgfVxuXG4gICAgc2V0T3JJbml0UGFyYW1zKHBpcGVsaW5lLCBuZXRQYXJhbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBUID0gdGhpcy5ULCBGID0gdGhpcy5GO1xuICAgICAgICBsZXQgcGlwZVBhcmFtcyA9IFIuZnJvbVBhaXJzKFIuZmlsdGVyKChbayx2XSk9PnYgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUi5tYXAoUi5fXywgcGlwZWxpbmUpKHA9PltwLk5hbWUsIHAuUGFyYW1ldGVyc10pKSk7XG4gICAgICAgIGNvbnN0IFNldE9ySW5pdCA9IChtYWluVmFsdWUsIHN1YlZhbCk9PntcbiAgICAgICAgICAgIGxldCBrZXlzID0gUi5rZXlzKG1haW5WYWx1ZSk7XG4gICAgICAgICAgICBsZXQga2V5TWFpblZhbFN1YlZhbCA9IFIubWFwKChrKT0+IFtrLCBSLnByb3AoaywgbWFpblZhbHVlKSwgUi5wcm9wT3IobnVsbCwgaywgc3ViVmFsKV0sIGtleXMpO1xuICAgICAgICAgICAgY29uc3QgVmFsTWFwcGluZyA9IChba2V5LCBtYWluVmFsLCBzdWJWYWxdKT0+e1xuICAgICAgICAgICAgICAgIGlmKEYuaXNQYXJhbWV0ZXIobWFpblZhbCkpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbVNoYXBlID0gbWFpblZhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYoUi5pc05pbChzdWJWYWwpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBULnZhcmlhYmxlKFQucmFuZG9tTm9ybWFsKHBhcmFtU2hhcGUpKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBULnZhcmlhYmxlKFQudGVuc29yKHN1YlZhbCkucmVzaGFwZShwYXJhbVNoYXBlKSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBTZXRPckluaXQobWFpblZhbCwgc3ViVmFsKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBSLmZyb21QYWlycyhSLm1hcChWYWxNYXBwaW5nLCBrZXlNYWluVmFsU3ViVmFsKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBTZXRPckluaXQocGlwZVBhcmFtcywgbmV0UGFyYW1zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHt9IHNhbXBsZXNcbiAgICAgKiBAcGFyYW0gIHt9IG51bVNhbXBsZXM9MVxuICAgICAqL1xuICAgIG1ha2VQcmVkaWN0KHNhbXBsZXMsIG51bVNhbXBsZXM9MSl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIGYgPSB0aGlzLkYsIGwgPSB0aGlzLkw7XG4gICAgICAgIHRoaXMuSHlwZXJQYXJhbWV0ZXJzLkRhdGFzaXplID0gbnVtU2FtcGxlcztcbiAgICAgICAgY29uc3QgUGlwZWxpbmUgPSBmLnBhcmFtZXRlckFjcXVpc2l0aW9uKHRoaXMuQmFzZVBpcGVsaW5lLCB0aGlzLkh5cGVyUGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCh7UGlwZWxpbmV9KSk7XG4gICAgICAgIGxldCBwaXBlVmFsdWUgPSB7UGlwZUlucHV0OiBzYW1wbGVzfSwgdHJhY2VzID0gW10sIG5ldFBhcmFtcyA9IHRoaXMubmV0UGFyYW1zO1xuICAgICAgICByZXR1cm4gVC50aWR5KCgpPT57XG4gICAgICAgICAgICBmb3IobGV0IGxheWVyIG9mIFBpcGVsaW5lKXtcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXJPdXRwdXQgPSB0aGlzLmxheWVyKHBpcGVWYWx1ZVtsYXllci5JbnB1dF0sIGxheWVyLCBuZXRQYXJhbXNbbGF5ZXIuTmFtZV0pO1xuICAgICAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgICAgIHRyYWNlcy5wdXNoKHtbbGF5ZXIuTmFtZV06IGxheWVyT3V0cHV0LnRyYWNlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7dHJhY2VzfSk7XG4gICAgICAgICAgICBsZXQgcGlwZU91dHB1dCA9IHBpcGVWYWx1ZVsnUGlwZU91dHB1dCddO1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBwaXBlT3V0cHV0LnN1YihULmxvZ1N1bUV4cChwaXBlT3V0cHV0LCAxLCB0cnVlKSk7XG4gICAgICAgICAgICBsZXQgcHJlZGljdCA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtsb2dQcm9iLCBwcmVkaWN0fTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gc2FtcGxlQmF0Y2hcbiAgICAgKiBAcGFyYW0gIHt9IGxhYmVsQmF0Y2hcbiAgICAgKiBAcGFyYW0gIHt9IG51bVNhbXBsZVxuICAgICAqL1xuICAgIGxvc3MoYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVscywgbnVtU2FtcGxlKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgbGV0IGxhYmVsVGVuc29yICA9IFQudGVuc29yKGJhdGNoTGFiZWxzKS5yZXNoYXBlKFtudW1TYW1wbGUsIC0xXSk7XG4gICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihiYXRjaFNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpOyBcbiAgICAgICAgY29uc3Qge2xvZ1Byb2J9ID0gdGhpcy5tYWtlUHJlZGljdChzYW1wbGVUZW5zb3IsIG51bVNhbXBsZSk7XG4gICAgICAgIGNvbnN0IGxpa2VsaWhvb2QgPSBsb2dQcm9iLm5lZygpLm11bChsYWJlbFRlbnNvcik7XG4gICAgICAgIGNvbnN0IGxvc3MgPSBsaWtlbGlob29kLm1lYW4oKTtcbiAgICAgICAgcmV0dXJuIGxvc3M7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHt9IFNhbXBsZUdlbmVyYXRvckZuXG4gICAgICogQHBhcmFtICB7fSBiYXRjaFNpemVcbiAgICAgKiBAcGFyYW0gIHt9IG51bUVwb2Nocz0yXG4gICAgICogQHBhcmFtICB7fSBscj0wLjAxXG4gICAgICovXG4gICAgYXN5bmMgdHJhaW4oU2FtcGxlR2VuZXJhdG9yRm4sIGJhdGNoU2l6ZSwgbnVtRXBvY2hzID0gMiwgbHI9MC4wMDEpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBsb3NzID0gW10sIGF2ZXJhZ2VMb3NzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGltaXplciA9IFQudHJhaW4uYWRhbShscik7XG4gICAgICAgIGZvcihsZXQgZXBvY2hJZHggb2YgRi5yYW5nZShudW1FcG9jaHMpKXtcbiAgICAgICAgICAgIGlmKHRoaXMubG9nZ2VyKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5wcm9ncmVzcyh7ZXBvY2hJZHgsIGF2ZXJhZ2VMb3NzLCB0aW1lOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogc3RhcnQudG9JU09TdHJpbmcoKSwgZWxhcHNlOiAobmV3IERhdGUoKSAtIHN0YXJ0KS8xMDAwfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzYW1wbGVHZW5lcmF0b3IgPSBTYW1wbGVHZW5lcmF0b3JGbihiYXRjaFNpemUpO1xuICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQgW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdIG9mIHNhbXBsZUdlbmVyYXRvcil7XG4gICAgICAgICAgICAgICAgb3B0aW1pemVyLm1pbmltaXplKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBsID0gdGhpcy5sb3NzKGJhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHMsIGJhdGNoU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvc3MgPSBbLi4ubG9zcywgLi4ubC5kYXRhU3luYygpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2xvc3N9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdmVyYWdlTG9zcyA9IFsuLi5hdmVyYWdlTG9zcywgUi5tZWFuKGxvc3MpXTtcbiAgICAgICAgICAgIGxvc3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoe2F2ZXJhZ2VMb3NzfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYyB0ZXN0KFRlc3RTYW1wbGVHZW5lcmF0b3JGbiwgdGVzdEJhdGNoU2l6ZSwgbnVtQ2xhc3Nlcz0xMCl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIEYgPSB0aGlzLkYsIFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IHRlc3RTYW1wbGVHZW5lcmF0b3IgPSBUZXN0U2FtcGxlR2VuZXJhdG9yRm4odGVzdEJhdGNoU2l6ZSk7XG4gICAgICAgIGxldCB0ZXN0UmVzdWx0ID0gVC56ZXJvcyhbMV0pO1xuICAgICAgICBmb3IgYXdhaXQgKGxldCBbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc10gb2YgdGVzdFNhbXBsZUdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgbGFiZWxUZW5zb3IgID0gVC50ZW5zb3IoYmF0Y2hMYWJlbHMpLnJlc2hhcGUoW3Rlc3RCYXRjaFNpemUsIG51bUNsYXNzZXNdKTtcbiAgICAgICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihiYXRjaFNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpOyBcbiAgICAgICAgICAgIGNvbnN0IHtwcmVkaWN0fSA9IHRoaXMubWFrZVByZWRpY3Qoc2FtcGxlVGVuc29yLCB0ZXN0QmF0Y2hTaXplKTtcbiAgICAgICAgICAgIGxldCBvbmVob3RQcmVkaWN0ID0gVC5vbmVIb3QocHJlZGljdCwgbnVtQ2xhc3Nlcyk7XG4gICAgICAgICAgICBvbmVob3RQcmVkaWN0LnByaW50KCk7XG4gICAgICAgICAgICBsYWJlbFRlbnNvci5wcmludCgpO1xuICAgICAgICAgICAgb25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpLnByaW50KCk7XG4gICAgICAgICAgICB0ZXN0UmVzdWx0ID0gdGVzdFJlc3VsdC5hZGQob25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGVzdFJlc3VsdC5kYXRhKCk7XG4gICAgICAgIGxldCBwYXNzID0gcmVzdWx0WzBdO1xuICAgICAgICBsZXQgYWNjdXJhY3kgPSBwYXNzL3Rlc3RCYXRjaFNpemU7XG4gICAgICAgIHJldHVybiB7YWNjdXJhY3ksIHBhc3N9OyAgICAgICAgXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UGFyYW1zKGFzT2JqZWN0PXRydWUpe1xuICAgICAgICBjb25zdCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBnZXRQYXJhbXMgPSBhc3luYyAocGFyYW1zKT0+e1xuICAgICAgICAgICAgaWYoRi5pc1RlbnNvcihwYXJhbXMpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhd2FpdCBwYXJhbXMuZGF0YSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IGtWYWxzID0gUi50b1BhaXJzKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW2ssIHZhbF0gb2Yga1ZhbHMpe1xuICAgICAgICAgICAgICAgICAgICByZXNba10gPSBhd2FpdCBnZXRQYXJhbXModmFsKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBwYXJhbXMgPSBhd2FpdCBnZXRQYXJhbXModGhpcy5uZXRQYXJhbXMpO1xuICAgICAgICBpZihhc09iamVjdCl7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBnZXRTYXZlZFBhcmFtcygpe1xuICAgICAgICBsZXQgZmlsZUxpc3QgPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0RmlsZUxpc3QodGhpcy5zYXZlTW9kZWxEaXIpO1xuICAgICAgICByZXR1cm4gZmlsZUxpc3QubWFwKGZpbGVOYW1lPT5maWxlTmFtZS5yZXBsYWNlKHRoaXMuc2F2ZU1vZGVsRGlyLCcnKSk7XG4gICAgfVxuICAgIGFzeW5jIHNhdmVQYXJhbXMoZmlsZU5hbWU9J3NhdmUubW9kZWwnKXtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gYXdhaXQgdGhpcy5nZXRQYXJhbXMoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLndyaXRlRmlsZSh0aGlzLnNhdmVNb2RlbERpciArIGZpbGVOYW1lLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9XG4gICAgYXN5bmMgbG9hZFBhcmFtcyhmaWxlTmFtZSwgcGFyYW1zPW51bGwpe1xuICAgICAgICBpZighcGFyYW1zKXtcbiAgICAgICAgICAgIGxldCBfcGFyYW1zID0gYXdhaXQgdGhpcy5zdG9yYWdlLnJlYWRGaWxlKHRoaXMuc2F2ZU1vZGVsRGlyK2ZpbGVOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtfcGFyYW1zfSk7XG4gICAgICAgICAgICBwYXJhbXMgPSBKU09OLnBhcnNlKF9wYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV0UGFyYW1zID0gdGhpcy5zZXRPckluaXRQYXJhbXModGhpcy5CYXNlUGlwZWxpbmUsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFBhcmFtcyhmYWxzZSk7XG4gICAgfVxufSIsImNvbnN0IEVuc2VtYmxlTWl4aW5zID0gKFBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBQaXBlbGluZUNsYXNzeyBcbiAgICBhc3luYyBlbnNlbWJsZVRlc3QoVGVzdFNhbXBsZUdlbmVyYXRvckZuLCBtb2RlbExpc3QsIHRlc3RCYXRjaFNpemUsIG51bUNsYXNzZXM9MTApe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCB0ZXN0U2FtcGxlR2VuZXJhdG9yID0gVGVzdFNhbXBsZUdlbmVyYXRvckZuKHRlc3RCYXRjaFNpemUpO1xuICAgICAgICBsZXQgdGVzdFJlc3VsdCA9IFQuemVyb3MoWzFdKTtcbiAgICAgICAgZm9yIGF3YWl0IChsZXQgW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdIG9mIHRlc3RTYW1wbGVHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgbGV0IGxhYmVsVGVuc29yICA9IFQudGVuc29yKGJhdGNoTGFiZWxzKS5yZXNoYXBlKFt0ZXN0QmF0Y2hTaXplLCBudW1DbGFzc2VzXSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3IoYmF0Y2hTYW1wbGVzKS5hc1R5cGUoJ2Zsb2F0MzInKTsgXG4gICAgICAgICAgICBjb25zdCB7cHJlZGljdH0gPSBhd2FpdCB0aGlzLm1ha2VFbnNlbWJsZVByZWRpY3QobW9kZWxMaXN0LCBzYW1wbGVUZW5zb3IsIHRlc3RCYXRjaFNpemUpO1xuICAgICAgICAgICAgbGV0IG9uZWhvdFByZWRpY3QgPSBULm9uZUhvdChwcmVkaWN0LCBudW1DbGFzc2VzKTtcbiAgICAgICAgICAgIG9uZWhvdFByZWRpY3QucHJpbnQoKTtcbiAgICAgICAgICAgIGxhYmVsVGVuc29yLnByaW50KCk7XG4gICAgICAgICAgICBvbmVob3RQcmVkaWN0Lm11bChsYWJlbFRlbnNvcikuc3VtKCkucHJpbnQoKTtcbiAgICAgICAgICAgIHRlc3RSZXN1bHQgPSB0ZXN0UmVzdWx0LmFkZChvbmVob3RQcmVkaWN0Lm11bChsYWJlbFRlbnNvcikuc3VtKCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0ZXN0UmVzdWx0LmRhdGEoKTtcbiAgICAgICAgbGV0IHBhc3MgPSByZXN1bHRbMF07XG4gICAgICAgIGxldCBhY2N1cmFjeSA9IHBhc3MvdGVzdEJhdGNoU2l6ZTtcbiAgICAgICAgcmV0dXJuIHthY2N1cmFjeSwgcGFzc307ICAgICAgICBcbiAgICB9XG4gICAgYXN5bmMgbWFrZUVuc2VtYmxlUHJlZGljdChtb2RlbExpc3QsIHNhbXBsZXMsIG51bVNhbXBsZXM9MSl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIGYgPSB0aGlzLkYsIGwgPSB0aGlzLkw7XG4gICAgICAgIHRoaXMuSHlwZXJQYXJhbWV0ZXJzLkRhdGFzaXplID0gbnVtU2FtcGxlcztcbiAgICAgICAgY29uc3QgUGlwZWxpbmUgPSBmLnBhcmFtZXRlckFjcXVpc2l0aW9uKHRoaXMuQmFzZVBpcGVsaW5lLCB0aGlzLkh5cGVyUGFyYW1ldGVycyk7XG4gICAgICAgIGxldCBwaXBlVmFsdWUgPSB7UGlwZUlucHV0OiBzYW1wbGVzfSwgdHJhY2VzID0gW10sIG5ldFBhcmFtcyA9IHRoaXMubmV0UGFyYW1zO1xuICAgICAgICBsZXQgcHJvYnMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtb2RlbCBvZiBtb2RlbExpc3Qpe1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUGFyYW1zKG1vZGVsKTtcbiAgICAgICAgICAgIGxldCB7bG9nUHJvYn0gPSBULnRpZHkoKCk9PntcbiAgICAgICAgICAgICAgICBmb3IobGV0IGxheWVyIG9mIFBpcGVsaW5lKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxheWVyT3V0cHV0ID0gdGhpcy5sYXllcihwaXBlVmFsdWVbbGF5ZXIuSW5wdXRdLCBsYXllciwgbmV0UGFyYW1zW2xheWVyLk5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgcGlwZVZhbHVlW2xheWVyLk5hbWVdID0gbGF5ZXJPdXRwdXRbbGF5ZXIuTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHRyYWNlcy5wdXNoKHtbbGF5ZXIuTmFtZV06IGxheWVyT3V0cHV0LnRyYWNlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHt0cmFjZXN9KTtcbiAgICAgICAgICAgICAgICBsZXQgcGlwZU91dHB1dCA9IHBpcGVWYWx1ZVsnUGlwZU91dHB1dCddO1xuICAgICAgICAgICAgICAgIGxldCBsb2dQcm9iID0gcGlwZU91dHB1dC5zdWIoVC5sb2dTdW1FeHAocGlwZU91dHB1dCwgMSwgdHJ1ZSkpO1xuICAgICAgICAgICAgICAgIGxldCBwcmVkaWN0ID0gbG9nUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtsb2dQcm9iLCBwcmVkaWN0fTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbG9nUHJvYi5wcmludCgpO1xuICAgICAgICAgICAgcHJvYnMucHVzaChULmV4cChsb2dQcm9iKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1lYW5Qcm9iID0gVC5jb25jYXQocHJvYnMpLm1lYW4oMCwgdHJ1ZSk7XG4gICAgICAgIG1lYW5Qcm9iLnByaW50KCk7XG4gICAgICAgIGxldCBlbnNlbWJsZVByZWRpY3QgPSBtZWFuUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgIHJldHVybiB7cHJlZGljdDplbnNlbWJsZVByZWRpY3R9O1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBFbnNlbWJsZU1peGluczsiLCJpbXBvcnQge0Z1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBCYXNlRnVuY3Rpb257XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpc1RlbnNvcih2YWwpe1xuICAgICAgICAvLyByZXR1cm4gdmFsIGluc3RhbmNlb2YgdGhpcyYmIFxuICAgICAgICByZXR1cm4gdmFsLnNoYXBlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJhbmdlKGxlbil7XG4gICAgICAgIHJldHVybiB0aGlzLlIucmFuZ2UoMCwgbGVuKTtcbiAgICB9XG5cbiAgICBpc1BhcmFtZXRlcih2YWwpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5pcyhBcnJheSkodmFsKSAmJiBSLmFsbChSLmlzKE51bWJlciksIHZhbCk7XG4gICAgfVxuXG4gICAgZ2V0UGlwZWxpbmUobmV0Q29uZmlnKXtcbiAgICAgICAgLy9UT0RPOiBtYWtlIGFzc2VydG9yXG4gICAgICAgIHJldHVybiB0aGlzLlIucHJvcCgnUGlwZWxpbmUnLCBuZXRDb25maWcpO1xuICAgIH1cbiAgICBcbiAgICBnZXRIeXBlclBhcmFtZXRlcihuZXRDb25maWcpe1xuICAgICAgICAvL1RPRE86IG1ha2UgYXNzZXJ0b3JcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5wcm9wKCdIeXBlclBhcmFtZXRlcnMnLCBuZXRDb25maWcpO1xuICAgIH1cbiAgICBcbiAgICBnZXRUcmF2ZXJzZSgpe1xuICAgICAgICByZXR1cm4gUi5jdXJyeShmdW5jdGlvbihrZXlzLCBpdGVtKXtcbiAgICAgICAgICAgIFIucGlwZS5hcHBseShudWxsLCBSLm1hcChSLnByb3AsIGtleXMpKShpdGVtKTtcbiAgICAgICAgfSk7IFxuICAgIH1cbiAgICBcbiAgICBwYXJhbWV0ZXJBY3F1aXNpdGlvbihwaXBlbGluZUl0ZW0sIGh5cGVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7IFxuICAgICAgICBmdW5jdGlvbiByZXBsYWNlSWZNYXRjaCh2YWx1ZSwgaHlwZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIGlmKFIuaXMoU3RyaW5nLCB2YWx1ZSkgJiYgUi5zdGFydHNXaXRoKCckJywgdmFsdWUpKXtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBSLnNsaWNlKDEsIEluZmluaXR5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFIucHJvcChrZXksIGh5cGVyUGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZG9SZXBsYWNlSWZNYXRjaCA9IFIuY3VycnkocmVwbGFjZUlmTWF0Y2gpKFIuX18sIGh5cGVyUGFyYW1ldGVycyk7XG4gICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VIeXBlclBhcmFtZXRlcihwaXBlbGluZUl0ZW0pe1xuICAgICAgICAgICAgaWYoUi5pcyhBcnJheSwgcGlwZWxpbmVJdGVtKSB8fCBSLmlzKE9iamVjdCwgcGlwZWxpbmVJdGVtKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFIubWFwKHJlcGxhY2VIeXBlclBhcmFtZXRlciwgcGlwZWxpbmVJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvUmVwbGFjZUlmTWF0Y2gocGlwZWxpbmVJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVwbGFjZUh5cGVyUGFyYW1ldGVyKHBpcGVsaW5lSXRlbSk7XG4gICAgfVxuXG4gICAgaXNUZW5zb3Iob2JqZWN0KXtcbiAgICAgICAgcmV0dXJuIG9iamVjdC5zaXplICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnNoYXBlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmR0eXBlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9