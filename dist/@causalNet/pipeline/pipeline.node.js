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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/causality.js");
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
      this.storage = storage || _causalNet2.indexDBStorage;
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
      const OpsRunner = R.addIndex(R.reduce)(R.__, {
        result: value,
        trace: {}
      }, Flow);
      var {
        result,
        trace
      } = OpsRunner(({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxpdHkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9lbnNlbWJsZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0IiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiRW5zZW1ibGVNaXhpbnMiLCJjb25zdHJ1Y3RvciIsIm5ldENvbmZpZyIsIm5ldFBhcmFtcyIsInN0b3JhZ2UiLCJGIiwiRnVuY3Rpb24iLCJSIiwiQ29yZUZ1bmN0aW9uIiwiaW5kZXhEQlN0b3JhZ2UiLCJzYXZlTW9kZWxEaXIiLCJIeXBlclBhcmFtZXRlcnMiLCJnZXRIeXBlclBhcmFtZXRlciIsIkJhc2VQaXBlbGluZSIsImdldFBpcGVsaW5lIiwic2V0T3JJbml0UGFyYW1zIiwiZmxhdHRlblBhcmFtcyIsInBhcmFtcyIsIk1hcFZhbHVlcyIsIm9iak9yQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJGbGF0dGVuIiwicHYiLCJpc1RlbnNvciIsImZsYXR0ZW4iLCJyZWR1Y2UiLCJ2IiwicmVzIiwiaXMiLCJsYXllciIsInZhbHVlIiwibGF5ZXJDb25maWd1cmUiLCJsYXllclBhcmFtZXRlcnMiLCJOYW1lIiwiVHlwZSIsIlBhcmFtZXRlcnMiLCJGbG93IiwiY29uc29sZSIsImxvZyIsIk9wc1J1bm5lciIsImFkZEluZGV4IiwiX18iLCJyZXN1bHQiLCJ0cmFjZSIsIm5vZGUiLCJpZHgiLCJQYXJhbWV0ZXIiLCJUIiwiT3AiLCJBcmdzIiwic2hhcGUiLCJwaXBlbGluZSIsInBpcGVQYXJhbXMiLCJmcm9tUGFpcnMiLCJmaWx0ZXIiLCJrIiwidW5kZWZpbmVkIiwibWFwIiwicCIsIlNldE9ySW5pdCIsIm1haW5WYWx1ZSIsInN1YlZhbCIsImtleXMiLCJrZXlNYWluVmFsU3ViVmFsIiwicHJvcCIsInByb3BPciIsIlZhbE1hcHBpbmciLCJrZXkiLCJtYWluVmFsIiwiaXNQYXJhbWV0ZXIiLCJwYXJhbVNoYXBlIiwiaXNOaWwiLCJ2YXJpYWJsZSIsInJhbmRvbU5vcm1hbCIsInRlbnNvciIsInJlc2hhcGUiLCJtYWtlUHJlZGljdCIsInNhbXBsZXMiLCJudW1TYW1wbGVzIiwiZiIsImwiLCJMIiwiRGF0YXNpemUiLCJQaXBlbGluZSIsInBhcmFtZXRlckFjcXVpc2l0aW9uIiwicGlwZVZhbHVlIiwiUGlwZUlucHV0IiwidHJhY2VzIiwidGlkeSIsImxheWVyT3V0cHV0IiwiSW5wdXQiLCJwdXNoIiwicGlwZU91dHB1dCIsImxvZ1Byb2IiLCJzdWIiLCJsb2dTdW1FeHAiLCJwcmVkaWN0IiwiYXJnTWF4IiwibG9zcyIsImJhdGNoU2FtcGxlcyIsImJhdGNoTGFiZWxzIiwibnVtU2FtcGxlIiwibGFiZWxUZW5zb3IiLCJzYW1wbGVUZW5zb3IiLCJhc1R5cGUiLCJsaWtlbGlob29kIiwibmVnIiwibXVsIiwibWVhbiIsInRyYWluIiwiU2FtcGxlR2VuZXJhdG9yRm4iLCJiYXRjaFNpemUiLCJudW1FcG9jaHMiLCJsciIsInN0YXJ0IiwiRGF0ZSIsImF2ZXJhZ2VMb3NzIiwib3B0aW1pemVyIiwiYWRhbSIsImVwb2NoSWR4IiwicmFuZ2UiLCJsb2dnZXIiLCJwcm9ncmVzcyIsInRpbWUiLCJ0b0lTT1N0cmluZyIsImVsYXBzZSIsInNhbXBsZUdlbmVyYXRvciIsIm1pbmltaXplIiwiZGF0YVN5bmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRlc3QiLCJUZXN0U2FtcGxlR2VuZXJhdG9yRm4iLCJ0ZXN0QmF0Y2hTaXplIiwibnVtQ2xhc3NlcyIsInRlc3RTYW1wbGVHZW5lcmF0b3IiLCJ0ZXN0UmVzdWx0IiwiemVyb3MiLCJvbmVob3RQcmVkaWN0Iiwib25lSG90IiwicHJpbnQiLCJzdW0iLCJhZGQiLCJkYXRhIiwicGFzcyIsImFjY3VyYWN5IiwiZ2V0UGFyYW1zIiwiYXNPYmplY3QiLCJmcm9tIiwia1ZhbHMiLCJ0b1BhaXJzIiwidmFsIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFNhdmVkUGFyYW1zIiwiZmlsZUxpc3QiLCJnZXRGaWxlTGlzdCIsImZpbGVOYW1lIiwicmVwbGFjZSIsInNhdmVQYXJhbXMiLCJ3cml0ZUZpbGUiLCJsb2FkUGFyYW1zIiwiX3BhcmFtcyIsInJlYWRGaWxlIiwicGFyc2UiLCJQaXBlbGluZUNsYXNzIiwiZW5zZW1ibGVUZXN0IiwibW9kZWxMaXN0IiwibWFrZUVuc2VtYmxlUHJlZGljdCIsInByb2JzIiwibW9kZWwiLCJleHAiLCJtZWFuUHJvYiIsImNvbmNhdCIsImVuc2VtYmxlUHJlZGljdCIsIkJhc2VGdW5jdGlvbiIsImxlbiIsImFsbCIsIk51bWJlciIsImdldFRyYXZlcnNlIiwiY3VycnkiLCJpdGVtIiwicGlwZSIsImFwcGx5IiwicGlwZWxpbmVJdGVtIiwiaHlwZXJQYXJhbWV0ZXJzIiwicmVwbGFjZUlmTWF0Y2giLCJTdHJpbmciLCJzdGFydHNXaXRoIiwic2xpY2UiLCJJbmZpbml0eSIsImRvUmVwbGFjZUlmTWF0Y2giLCJyZXBsYWNlSHlwZXJQYXJhbWV0ZXIiLCJvYmplY3QiLCJzaXplIiwiZHR5cGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWUsUUFBTUEsU0FBTixTQUF3QkMscUJBQVNDLE9BQVQsQ0FBaUJDLGlCQUFqQixFQUF3QixDQUFDQyxpQkFBRCxDQUF4QixDQUF4QixDQUFpRTtBQUM1RTs7OztBQUlBQyxlQUFXLENBQUVDLFNBQUYsRUFBYUMsU0FBUyxHQUFDLElBQXZCLEVBQTZCQyxPQUFPLEdBQUMsSUFBckMsRUFBMkM7QUFDbEQ7QUFDQSxXQUFLQyxDQUFMLEdBQVMsSUFBSUMsaUJBQUos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ekI7O0FBQ0EsZUFBU08scUJBQVQsQ0FBK0JSLFlBQS9CLEVBQTRDO0FBQ3hDLFlBQUdyTCxDQUFDLENBQUN3QixFQUFGLENBQUtYLEtBQUwsRUFBWXdLLFlBQVosS0FBNkJyTCxDQUFDLENBQUN3QixFQUFGLENBQUtULE1BQUwsRUFBYXNLLFlBQWIsQ0FBaEMsRUFBMkQ7QUFDdkQsaUJBQU9yTCxDQUFDLENBQUNxRCxHQUFGLENBQU13SSxxQkFBTixFQUE2QlIsWUFBN0IsQ0FBUDtBQUNILFNBRkQsTUFHSTtBQUNBLGlCQUFPTyxnQkFBZ0IsQ0FBQ1AsWUFBRCxDQUF2QjtBQUNIO0FBQ0o7O0FBQ0QsYUFBT1EscUJBQXFCLENBQUNSLFlBQUQsQ0FBNUI7QUFDSDs7QUFFRGxLLFlBQVEsQ0FBQzJLLE1BQUQsRUFBUTtBQUNaLGFBQU9BLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQjNJLFNBQWhCLElBQTZCMEksTUFBTSxDQUFDaEosS0FBUCxLQUFpQk0sU0FBOUMsSUFBMkQwSSxNQUFNLENBQUNFLEtBQVAsS0FBaUI1SSxTQUFuRjtBQUNIOztBQXpENkM7Ozs7Ozs7Ozs7Ozs7O0FDRmxELDZEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcGlwZWxpbmUvcGlwZWxpbmUubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jYXVzYWxpdHkuanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IHtUZW5zb3J9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQge2luZGV4REJTdG9yYWdlfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHtQbGF0Zm9ybX0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgRW5zZW1ibGVNaXhpbnN9IGZyb20gJy4vZW5zZW1ibGUubWl4aW5zJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBGdW5jdGlvbn0gZnJvbSAnLi9mdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdXNhbE5ldCBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoVGVuc29yLFtFbnNlbWJsZU1peGluc10pe1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gbmV0Q29uZmlnXG4gICAgICogQHBhcmFtICB7fSBuZXRQYXJhbXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciggbmV0Q29uZmlnLCBuZXRQYXJhbXM9bnVsbCwgc3RvcmFnZT1udWxsICl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgICAgICB0aGlzLlIgPSB0aGlzLkYuQ29yZUZ1bmN0aW9uO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlIHx8IGluZGV4REJTdG9yYWdlO1xuICAgICAgICB0aGlzLnNhdmVNb2RlbERpciA9ICcvc2F2ZU1vZGVsLyc7XG4gICAgICAgIHRoaXMuSHlwZXJQYXJhbWV0ZXJzID0gdGhpcy5GLmdldEh5cGVyUGFyYW1ldGVyKG5ldENvbmZpZyk7XG4gICAgICAgIHRoaXMuQmFzZVBpcGVsaW5lID0gdGhpcy5GLmdldFBpcGVsaW5lKG5ldENvbmZpZyk7XG4gICAgICAgIHRoaXMubmV0UGFyYW1zID0gdGhpcy5zZXRPckluaXRQYXJhbXModGhpcy5CYXNlUGlwZWxpbmUsIG5ldFBhcmFtcyk7XG4gICAgICAgIHRoaXMuZmxhdHRlblBhcmFtcyA9IHRoaXMuZmxhdHRlblBhcmFtcyh0aGlzLm5ldFBhcmFtcyk7ICAgICAgICBcbiAgICB9XG5cbiAgICBmbGF0dGVuUGFyYW1zKHBhcmFtcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIEYgPSB0aGlzLkY7XG4gICAgICAgIGNvbnN0IE1hcFZhbHVlcyA9IChvYmpPckFycmF5KT0+QXJyYXkuaXNBcnJheShvYmpPckFycmF5KT9vYmpPckFycmF5Ok9iamVjdC52YWx1ZXMob2JqT3JBcnJheSk7XG4gICAgICAgIGNvbnN0IEZsYXR0ZW4gPSAocHYpPT57XG4gICAgICAgICAgICBpZihGLmlzVGVuc29yKHB2KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gTWFwVmFsdWVzKHB2KTtcbiAgICAgICAgICAgICAgICBsZXQgZmxhdHRlbiA9IHZhbHVlcy5yZWR1Y2UoKGZsYXR0ZW4sIHYpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBGbGF0dGVuKHYpO1xuICAgICAgICAgICAgICAgICAgICBpZihSLmlzKEFycmF5LCByZXMpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW4gPSBbLi4uZmxhdHRlbiwgLi4ucmVzXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbiA9IFsuLi5mbGF0dGVuLCByZXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmbGF0dGVuO1xuICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxhdHRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHZhbHVlcyA9IE1hcFZhbHVlcyhwYXJhbXMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoKGZsYXR0ZW4sdik9PlsuLi5mbGF0dGVuLCAuLi5GbGF0dGVuKHYpXSxbXSk7XG4gICAgfVxuXG4gICAgbGF5ZXIodmFsdWUsIGxheWVyQ29uZmlndXJlLCBsYXllclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCB7TmFtZSwgVHlwZSwgUGFyYW1ldGVycywgRmxvd30gPSBsYXllckNvbmZpZ3VyZTtcbiAgICAgICAgY29uc29sZS5sb2coe05hbWUsIFR5cGUsIFBhcmFtZXRlcnMsIEZsb3d9KTtcbiAgICAgICAgY29uc3QgT3BzUnVubmVyID0gUi5hZGRJbmRleChSLnJlZHVjZSkoUi5fXyx7cmVzdWx0OiB2YWx1ZSwgdHJhY2U6IHt9fSwgRmxvdyk7XG4gICAgICAgIHZhciB7cmVzdWx0LCB0cmFjZX0gPSBPcHNSdW5uZXIoKHtyZXN1bHQsIHRyYWNlfSwgbm9kZSwgaWR4KT0+e1xuICAgICAgICAgICAgaWYobm9kZS5QYXJhbWV0ZXIpe1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuVFtub2RlLk9wXShyZXN1bHQsIGxheWVyUGFyYW1ldGVyc1tub2RlLlBhcmFtZXRlcl0sIC4uLm5vZGUuQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuVFtub2RlLk9wXShyZXN1bHQsIC4uLm5vZGUuQXJncyk7ICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyYWNlW2lkeF0gPSByZXN1bHQuc2hhcGU7XG4gICAgICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtbTmFtZV06IHJlc3VsdCwgdHJhY2V9O1xuICAgIH1cblxuICAgIHNldE9ySW5pdFBhcmFtcyhwaXBlbGluZSwgbmV0UGFyYW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRjtcbiAgICAgICAgbGV0IHBpcGVQYXJhbXMgPSBSLmZyb21QYWlycyhSLmZpbHRlcigoW2ssdl0pPT52ICE9PSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFIubWFwKFIuX18sIHBpcGVsaW5lKShwPT5bcC5OYW1lLCBwLlBhcmFtZXRlcnNdKSkpO1xuICAgICAgICBjb25zdCBTZXRPckluaXQgPSAobWFpblZhbHVlLCBzdWJWYWwpPT57XG4gICAgICAgICAgICBsZXQga2V5cyA9IFIua2V5cyhtYWluVmFsdWUpO1xuICAgICAgICAgICAgbGV0IGtleU1haW5WYWxTdWJWYWwgPSBSLm1hcCgoayk9PiBbaywgUi5wcm9wKGssIG1haW5WYWx1ZSksIFIucHJvcE9yKG51bGwsIGssIHN1YlZhbCldLCBrZXlzKTtcbiAgICAgICAgICAgIGNvbnN0IFZhbE1hcHBpbmcgPSAoW2tleSwgbWFpblZhbCwgc3ViVmFsXSk9PntcbiAgICAgICAgICAgICAgICBpZihGLmlzUGFyYW1ldGVyKG1haW5WYWwpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1TaGFwZSA9IG1haW5WYWw7XG4gICAgICAgICAgICAgICAgICAgIGlmKFIuaXNOaWwoc3ViVmFsKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgVC52YXJpYWJsZShULnJhbmRvbU5vcm1hbChwYXJhbVNoYXBlKSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgVC52YXJpYWJsZShULnRlbnNvcihzdWJWYWwpLnJlc2hhcGUocGFyYW1TaGFwZSkpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgU2V0T3JJbml0KG1haW5WYWwsIHN1YlZhbCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gUi5mcm9tUGFpcnMoUi5tYXAoVmFsTWFwcGluZywga2V5TWFpblZhbFN1YlZhbCkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU2V0T3JJbml0KHBpcGVQYXJhbXMsIG5ldFBhcmFtcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBzYW1wbGVzXG4gICAgICogQHBhcmFtICB7fSBudW1TYW1wbGVzPTFcbiAgICAgKi9cbiAgICBtYWtlUHJlZGljdChzYW1wbGVzLCBudW1TYW1wbGVzPTEpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBmID0gdGhpcy5GLCBsID0gdGhpcy5MO1xuICAgICAgICB0aGlzLkh5cGVyUGFyYW1ldGVycy5EYXRhc2l6ZSA9IG51bVNhbXBsZXM7XG4gICAgICAgIGNvbnN0IFBpcGVsaW5lID0gZi5wYXJhbWV0ZXJBY3F1aXNpdGlvbih0aGlzLkJhc2VQaXBlbGluZSwgdGhpcy5IeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICBjb25zb2xlLmxvZygoe1BpcGVsaW5lfSkpO1xuICAgICAgICBsZXQgcGlwZVZhbHVlID0ge1BpcGVJbnB1dDogc2FtcGxlc30sIHRyYWNlcyA9IFtdLCBuZXRQYXJhbXMgPSB0aGlzLm5ldFBhcmFtcztcbiAgICAgICAgcmV0dXJuIFQudGlkeSgoKT0+e1xuICAgICAgICAgICAgZm9yKGxldCBsYXllciBvZiBQaXBlbGluZSl7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyT3V0cHV0ID0gdGhpcy5sYXllcihwaXBlVmFsdWVbbGF5ZXIuSW5wdXRdLCBsYXllciwgbmV0UGFyYW1zW2xheWVyLk5hbWVdKTtcbiAgICAgICAgICAgICAgICBwaXBlVmFsdWVbbGF5ZXIuTmFtZV0gPSBsYXllck91dHB1dFtsYXllci5OYW1lXTtcbiAgICAgICAgICAgICAgICB0cmFjZXMucHVzaCh7W2xheWVyLk5hbWVdOiBsYXllck91dHB1dC50cmFjZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coe3RyYWNlc30pO1xuICAgICAgICAgICAgbGV0IHBpcGVPdXRwdXQgPSBwaXBlVmFsdWVbJ1BpcGVPdXRwdXQnXTtcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gcGlwZU91dHB1dC5zdWIoVC5sb2dTdW1FeHAocGlwZU91dHB1dCwgMSwgdHJ1ZSkpO1xuICAgICAgICAgICAgbGV0IHByZWRpY3QgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7bG9nUHJvYiwgcHJlZGljdH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHt9IHNhbXBsZUJhdGNoXG4gICAgICogQHBhcmFtICB7fSBsYWJlbEJhdGNoXG4gICAgICogQHBhcmFtICB7fSBudW1TYW1wbGVcbiAgICAgKi9cbiAgICBsb3NzKGJhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHMsIG51bVNhbXBsZSl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGxldCBsYWJlbFRlbnNvciAgPSBULnRlbnNvcihiYXRjaExhYmVscykucmVzaGFwZShbbnVtU2FtcGxlLCAtMV0pO1xuICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3IoYmF0Y2hTYW1wbGVzKS5hc1R5cGUoJ2Zsb2F0MzInKTsgXG4gICAgICAgIGNvbnN0IHtsb2dQcm9ifSA9IHRoaXMubWFrZVByZWRpY3Qoc2FtcGxlVGVuc29yLCBudW1TYW1wbGUpO1xuICAgICAgICBjb25zdCBsaWtlbGlob29kID0gbG9nUHJvYi5uZWcoKS5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgICBjb25zdCBsb3NzID0gbGlrZWxpaG9vZC5tZWFuKCk7XG4gICAgICAgIHJldHVybiBsb3NzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBTYW1wbGVHZW5lcmF0b3JGblxuICAgICAqIEBwYXJhbSAge30gYmF0Y2hTaXplXG4gICAgICogQHBhcmFtICB7fSBudW1FcG9jaHM9MlxuICAgICAqIEBwYXJhbSAge30gbHI9MC4wMVxuICAgICAqL1xuICAgIGFzeW5jIHRyYWluKFNhbXBsZUdlbmVyYXRvckZuLCBiYXRjaFNpemUsIG51bUVwb2NocyA9IDIsIGxyPTAuMDAxKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRiwgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgbG9zcyA9IFtdLCBhdmVyYWdlTG9zcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpbWl6ZXIgPSBULnRyYWluLmFkYW0obHIpO1xuICAgICAgICBmb3IobGV0IGVwb2NoSWR4IG9mIEYucmFuZ2UobnVtRXBvY2hzKSl7XG4gICAgICAgICAgICBpZih0aGlzLmxvZ2dlcil7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIucHJvZ3Jlc3Moe2Vwb2NoSWR4LCBhdmVyYWdlTG9zcywgdGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LnRvSVNPU3RyaW5nKCksIGVsYXBzZTogKG5ldyBEYXRlKCkgLSBzdGFydCkvMTAwMH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlR2VuZXJhdG9yID0gU2FtcGxlR2VuZXJhdG9yRm4oYmF0Y2hTaXplKTtcbiAgICAgICAgICAgIGZvciBhd2FpdCAobGV0IFtiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXSBvZiBzYW1wbGVHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgICAgIG9wdGltaXplci5taW5pbWl6ZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgbCA9IHRoaXMubG9zcyhiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzLCBiYXRjaFNpemUpO1xuICAgICAgICAgICAgICAgICAgICBsb3NzID0gWy4uLmxvc3MsIC4uLmwuZGF0YVN5bmMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtsb3NzfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsLmFzVHlwZSgnZmxvYXQzMicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXZlcmFnZUxvc3MgPSBbLi4uYXZlcmFnZUxvc3MsIFIubWVhbihsb3NzKV07XG4gICAgICAgICAgICBsb3NzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICByZXNvbHZlKHthdmVyYWdlTG9zc30pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMgdGVzdChUZXN0U2FtcGxlR2VuZXJhdG9yRm4sIHRlc3RCYXRjaFNpemUsIG51bUNsYXNzZXM9MTApe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCB0ZXN0U2FtcGxlR2VuZXJhdG9yID0gVGVzdFNhbXBsZUdlbmVyYXRvckZuKHRlc3RCYXRjaFNpemUpO1xuICAgICAgICBsZXQgdGVzdFJlc3VsdCA9IFQuemVyb3MoWzFdKTtcbiAgICAgICAgZm9yIGF3YWl0IChsZXQgW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdIG9mIHRlc3RTYW1wbGVHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgbGV0IGxhYmVsVGVuc29yICA9IFQudGVuc29yKGJhdGNoTGFiZWxzKS5yZXNoYXBlKFt0ZXN0QmF0Y2hTaXplLCBudW1DbGFzc2VzXSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3IoYmF0Y2hTYW1wbGVzKS5hc1R5cGUoJ2Zsb2F0MzInKTsgXG4gICAgICAgICAgICBjb25zdCB7cHJlZGljdH0gPSB0aGlzLm1ha2VQcmVkaWN0KHNhbXBsZVRlbnNvciwgdGVzdEJhdGNoU2l6ZSk7XG4gICAgICAgICAgICBsZXQgb25laG90UHJlZGljdCA9IFQub25lSG90KHByZWRpY3QsIG51bUNsYXNzZXMpO1xuICAgICAgICAgICAgb25laG90UHJlZGljdC5wcmludCgpO1xuICAgICAgICAgICAgbGFiZWxUZW5zb3IucHJpbnQoKTtcbiAgICAgICAgICAgIG9uZWhvdFByZWRpY3QubXVsKGxhYmVsVGVuc29yKS5zdW0oKS5wcmludCgpO1xuICAgICAgICAgICAgdGVzdFJlc3VsdCA9IHRlc3RSZXN1bHQuYWRkKG9uZWhvdFByZWRpY3QubXVsKGxhYmVsVGVuc29yKS5zdW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRlc3RSZXN1bHQuZGF0YSgpO1xuICAgICAgICBsZXQgcGFzcyA9IHJlc3VsdFswXTtcbiAgICAgICAgbGV0IGFjY3VyYWN5ID0gcGFzcy90ZXN0QmF0Y2hTaXplO1xuICAgICAgICByZXR1cm4ge2FjY3VyYWN5LCBwYXNzfTsgICAgICAgIFxuICAgIH1cblxuICAgIGFzeW5jIGdldFBhcmFtcyhhc09iamVjdD10cnVlKXtcbiAgICAgICAgY29uc3QgRiA9IHRoaXMuRiwgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgZ2V0UGFyYW1zID0gYXN5bmMgKHBhcmFtcyk9PntcbiAgICAgICAgICAgIGlmKEYuaXNUZW5zb3IocGFyYW1zKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXdhaXQgcGFyYW1zLmRhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBrVmFscyA9IFIudG9QYWlycyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtrLCB2YWxdIG9mIGtWYWxzKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2tdID0gYXdhaXQgZ2V0UGFyYW1zKHZhbCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgcGFyYW1zID0gYXdhaXQgZ2V0UGFyYW1zKHRoaXMubmV0UGFyYW1zKTtcbiAgICAgICAgaWYoYXNPYmplY3Qpe1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0U2F2ZWRQYXJhbXMoKXtcbiAgICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEZpbGVMaXN0KHRoaXMuc2F2ZU1vZGVsRGlyKTtcbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0Lm1hcChmaWxlTmFtZT0+ZmlsZU5hbWUucmVwbGFjZSh0aGlzLnNhdmVNb2RlbERpciwnJykpO1xuICAgIH1cbiAgICBhc3luYyBzYXZlUGFyYW1zKGZpbGVOYW1lPSdzYXZlLm1vZGVsJyl7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZ2V0UGFyYW1zKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS53cml0ZUZpbGUodGhpcy5zYXZlTW9kZWxEaXIgKyBmaWxlTmFtZSwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRQYXJhbXMoZmlsZU5hbWUsIHBhcmFtcz1udWxsKXtcbiAgICAgICAgaWYoIXBhcmFtcyl7XG4gICAgICAgICAgICBsZXQgX3BhcmFtcyA9IGF3YWl0IHRoaXMuc3RvcmFnZS5yZWFkRmlsZSh0aGlzLnNhdmVNb2RlbERpcitmaWxlTmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7X3BhcmFtc30pO1xuICAgICAgICAgICAgcGFyYW1zID0gSlNPTi5wYXJzZShfcGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5ldFBhcmFtcyA9IHRoaXMuc2V0T3JJbml0UGFyYW1zKHRoaXMuQmFzZVBpcGVsaW5lLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRQYXJhbXMoZmFsc2UpO1xuICAgIH1cbn0iLCJjb25zdCBFbnNlbWJsZU1peGlucyA9IChQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgUGlwZWxpbmVDbGFzc3sgXG4gICAgYXN5bmMgZW5zZW1ibGVUZXN0KFRlc3RTYW1wbGVHZW5lcmF0b3JGbiwgbW9kZWxMaXN0LCB0ZXN0QmF0Y2hTaXplLCBudW1DbGFzc2VzPTEwKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRiwgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgdGVzdFNhbXBsZUdlbmVyYXRvciA9IFRlc3RTYW1wbGVHZW5lcmF0b3JGbih0ZXN0QmF0Y2hTaXplKTtcbiAgICAgICAgbGV0IHRlc3RSZXN1bHQgPSBULnplcm9zKFsxXSk7XG4gICAgICAgIGZvciBhd2FpdCAobGV0IFtiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXSBvZiB0ZXN0U2FtcGxlR2VuZXJhdG9yKXtcbiAgICAgICAgICAgIGxldCBsYWJlbFRlbnNvciAgPSBULnRlbnNvcihiYXRjaExhYmVscykucmVzaGFwZShbdGVzdEJhdGNoU2l6ZSwgbnVtQ2xhc3Nlc10pO1xuICAgICAgICAgICAgbGV0IHNhbXBsZVRlbnNvciA9IFQudGVuc29yKGJhdGNoU2FtcGxlcykuYXNUeXBlKCdmbG9hdDMyJyk7IFxuICAgICAgICAgICAgY29uc3Qge3ByZWRpY3R9ID0gYXdhaXQgdGhpcy5tYWtlRW5zZW1ibGVQcmVkaWN0KG1vZGVsTGlzdCwgc2FtcGxlVGVuc29yLCB0ZXN0QmF0Y2hTaXplKTtcbiAgICAgICAgICAgIGxldCBvbmVob3RQcmVkaWN0ID0gVC5vbmVIb3QocHJlZGljdCwgbnVtQ2xhc3Nlcyk7XG4gICAgICAgICAgICBvbmVob3RQcmVkaWN0LnByaW50KCk7XG4gICAgICAgICAgICBsYWJlbFRlbnNvci5wcmludCgpO1xuICAgICAgICAgICAgb25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpLnByaW50KCk7XG4gICAgICAgICAgICB0ZXN0UmVzdWx0ID0gdGVzdFJlc3VsdC5hZGQob25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGVzdFJlc3VsdC5kYXRhKCk7XG4gICAgICAgIGxldCBwYXNzID0gcmVzdWx0WzBdO1xuICAgICAgICBsZXQgYWNjdXJhY3kgPSBwYXNzL3Rlc3RCYXRjaFNpemU7XG4gICAgICAgIHJldHVybiB7YWNjdXJhY3ksIHBhc3N9OyAgICAgICAgXG4gICAgfVxuICAgIGFzeW5jIG1ha2VFbnNlbWJsZVByZWRpY3QobW9kZWxMaXN0LCBzYW1wbGVzLCBudW1TYW1wbGVzPTEpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBmID0gdGhpcy5GLCBsID0gdGhpcy5MO1xuICAgICAgICB0aGlzLkh5cGVyUGFyYW1ldGVycy5EYXRhc2l6ZSA9IG51bVNhbXBsZXM7XG4gICAgICAgIGNvbnN0IFBpcGVsaW5lID0gZi5wYXJhbWV0ZXJBY3F1aXNpdGlvbih0aGlzLkJhc2VQaXBlbGluZSwgdGhpcy5IeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICBsZXQgcGlwZVZhbHVlID0ge1BpcGVJbnB1dDogc2FtcGxlc30sIHRyYWNlcyA9IFtdLCBuZXRQYXJhbXMgPSB0aGlzLm5ldFBhcmFtcztcbiAgICAgICAgbGV0IHByb2JzID0gW107XG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgbW9kZWxMaXN0KXtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFBhcmFtcyhtb2RlbCk7XG4gICAgICAgICAgICBsZXQge2xvZ1Byb2J9ID0gVC50aWR5KCgpPT57XG4gICAgICAgICAgICAgICAgZm9yKGxldCBsYXllciBvZiBQaXBlbGluZSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXllck91dHB1dCA9IHRoaXMubGF5ZXIocGlwZVZhbHVlW2xheWVyLklucHV0XSwgbGF5ZXIsIG5ldFBhcmFtc1tsYXllci5OYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB0cmFjZXMucHVzaCh7W2xheWVyLk5hbWVdOiBsYXllck91dHB1dC50cmFjZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7dHJhY2VzfSk7XG4gICAgICAgICAgICAgICAgbGV0IHBpcGVPdXRwdXQgPSBwaXBlVmFsdWVbJ1BpcGVPdXRwdXQnXTtcbiAgICAgICAgICAgICAgICBsZXQgbG9nUHJvYiA9IHBpcGVPdXRwdXQuc3ViKFQubG9nU3VtRXhwKHBpcGVPdXRwdXQsIDEsIHRydWUpKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlZGljdCA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7bG9nUHJvYiwgcHJlZGljdH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvZ1Byb2IucHJpbnQoKTtcbiAgICAgICAgICAgIHByb2JzLnB1c2goVC5leHAobG9nUHJvYikpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtZWFuUHJvYiA9IFQuY29uY2F0KHByb2JzKS5tZWFuKDAsIHRydWUpO1xuICAgICAgICBtZWFuUHJvYi5wcmludCgpO1xuICAgICAgICBsZXQgZW5zZW1ibGVQcmVkaWN0ID0gbWVhblByb2IuYXJnTWF4KDEpO1xuICAgICAgICByZXR1cm4ge3ByZWRpY3Q6ZW5zZW1ibGVQcmVkaWN0fTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRW5zZW1ibGVNaXhpbnM7IiwiaW1wb3J0IHtGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb259IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgQmFzZUZ1bmN0aW9ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaXNUZW5zb3IodmFsKXtcbiAgICAgICAgLy8gcmV0dXJuIHZhbCBpbnN0YW5jZW9mIHRoaXMmJiBcbiAgICAgICAgcmV0dXJuIHZhbC5zaGFwZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByYW5nZShsZW4pe1xuICAgICAgICByZXR1cm4gdGhpcy5SLnJhbmdlKDAsIGxlbik7XG4gICAgfVxuXG4gICAgaXNQYXJhbWV0ZXIodmFsKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuaXMoQXJyYXkpKHZhbCkgJiYgUi5hbGwoUi5pcyhOdW1iZXIpLCB2YWwpO1xuICAgIH1cblxuICAgIGdldFBpcGVsaW5lKG5ldENvbmZpZyl7XG4gICAgICAgIC8vVE9ETzogbWFrZSBhc3NlcnRvclxuICAgICAgICByZXR1cm4gdGhpcy5SLnByb3AoJ1BpcGVsaW5lJywgbmV0Q29uZmlnKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0SHlwZXJQYXJhbWV0ZXIobmV0Q29uZmlnKXtcbiAgICAgICAgLy9UT0RPOiBtYWtlIGFzc2VydG9yXG4gICAgICAgIHJldHVybiB0aGlzLlIucHJvcCgnSHlwZXJQYXJhbWV0ZXJzJywgbmV0Q29uZmlnKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0VHJhdmVyc2UoKXtcbiAgICAgICAgcmV0dXJuIFIuY3VycnkoZnVuY3Rpb24oa2V5cywgaXRlbSl7XG4gICAgICAgICAgICBSLnBpcGUuYXBwbHkobnVsbCwgUi5tYXAoUi5wcm9wLCBrZXlzKSkoaXRlbSk7XG4gICAgICAgIH0pOyBcbiAgICB9XG4gICAgXG4gICAgcGFyYW1ldGVyQWNxdWlzaXRpb24ocGlwZWxpbmVJdGVtLCBoeXBlclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SOyBcbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZUlmTWF0Y2godmFsdWUsIGh5cGVyUGFyYW1ldGVycyl7XG4gICAgICAgICAgICBpZihSLmlzKFN0cmluZywgdmFsdWUpICYmIFIuc3RhcnRzV2l0aCgnJCcsIHZhbHVlKSl7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gUi5zbGljZSgxLCBJbmZpbml0eSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSLnByb3Aoa2V5LCBoeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRvUmVwbGFjZUlmTWF0Y2ggPSBSLmN1cnJ5KHJlcGxhY2VJZk1hdGNoKShSLl9fLCBoeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICBmdW5jdGlvbiByZXBsYWNlSHlwZXJQYXJhbWV0ZXIocGlwZWxpbmVJdGVtKXtcbiAgICAgICAgICAgIGlmKFIuaXMoQXJyYXksIHBpcGVsaW5lSXRlbSkgfHwgUi5pcyhPYmplY3QsIHBpcGVsaW5lSXRlbSkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBSLm1hcChyZXBsYWNlSHlwZXJQYXJhbWV0ZXIsIHBpcGVsaW5lSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkb1JlcGxhY2VJZk1hdGNoKHBpcGVsaW5lSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcGxhY2VIeXBlclBhcmFtZXRlcihwaXBlbGluZUl0ZW0pO1xuICAgIH1cblxuICAgIGlzVGVuc29yKG9iamVjdCl7XG4gICAgICAgIHJldHVybiBvYmplY3Quc2l6ZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zaGFwZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kdHlwZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==