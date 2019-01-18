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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxpdHkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9lbnNlbWJsZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0IiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiRW5zZW1ibGVNaXhpbnMiLCJjb25zdHJ1Y3RvciIsIm5ldENvbmZpZyIsIm5ldFBhcmFtcyIsInN0b3JhZ2UiLCJGIiwiRnVuY3Rpb24iLCJSIiwiQ29yZUZ1bmN0aW9uIiwiSW5kZXhEQlN0b3JhZ2UiLCJzYXZlTW9kZWxEaXIiLCJIeXBlclBhcmFtZXRlcnMiLCJnZXRIeXBlclBhcmFtZXRlciIsIkJhc2VQaXBlbGluZSIsImdldFBpcGVsaW5lIiwic2V0T3JJbml0UGFyYW1zIiwiZmxhdHRlblBhcmFtcyIsInBhcmFtcyIsIk1hcFZhbHVlcyIsIm9iak9yQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJGbGF0dGVuIiwicHYiLCJpc1RlbnNvciIsImZsYXR0ZW4iLCJyZWR1Y2UiLCJ2IiwicmVzIiwiaXMiLCJsYXllciIsInZhbHVlIiwibGF5ZXJDb25maWd1cmUiLCJsYXllclBhcmFtZXRlcnMiLCJOYW1lIiwiVHlwZSIsIlBhcmFtZXRlcnMiLCJGbG93IiwiY29uc29sZSIsImxvZyIsIk9wc1J1bmVyIiwiYWRkSW5kZXgiLCJfXyIsInJlc3VsdCIsInRyYWNlIiwibm9kZSIsImlkeCIsIlBhcmFtZXRlciIsIlQiLCJPcCIsIkFyZ3MiLCJzaGFwZSIsInBpcGVsaW5lIiwicGlwZVBhcmFtcyIsImZyb21QYWlycyIsImZpbHRlciIsImsiLCJ1bmRlZmluZWQiLCJtYXAiLCJwIiwiU2V0T3JJbml0IiwibWFpblZhbHVlIiwic3ViVmFsIiwia2V5cyIsImtleU1haW5WYWxTdWJWYWwiLCJwcm9wIiwicHJvcE9yIiwiVmFsTWFwcGluZyIsImtleSIsIm1haW5WYWwiLCJpc1BhcmFtZXRlciIsInBhcmFtU2hhcGUiLCJpc05pbCIsInZhcmlhYmxlIiwicmFuZG9tTm9ybWFsIiwidGVuc29yIiwicmVzaGFwZSIsIm1ha2VQcmVkaWN0Iiwic2FtcGxlcyIsIm51bVNhbXBsZXMiLCJmIiwibCIsIkwiLCJEYXRhc2l6ZSIsIlBpcGVsaW5lIiwicGFyYW1ldGVyQWNxdWlzaXRpb24iLCJwaXBlVmFsdWUiLCJQaXBlSW5wdXQiLCJ0cmFjZXMiLCJ0aWR5IiwibGF5ZXJPdXRwdXQiLCJJbnB1dCIsInB1c2giLCJwaXBlT3V0cHV0IiwibG9nUHJvYiIsInN1YiIsImxvZ1N1bUV4cCIsInByZWRpY3QiLCJhcmdNYXgiLCJsb3NzIiwiYmF0Y2hTYW1wbGVzIiwiYmF0Y2hMYWJlbHMiLCJudW1TYW1wbGUiLCJsYWJlbFRlbnNvciIsInNhbXBsZVRlbnNvciIsImFzVHlwZSIsImxpa2VsaWhvb2QiLCJuZWciLCJtdWwiLCJtZWFuIiwidHJhaW4iLCJTYW1wbGVHZW5lcmF0b3JGbiIsImJhdGNoU2l6ZSIsIm51bUVwb2NocyIsImxyIiwic3RhcnQiLCJEYXRlIiwiYXZlcmFnZUxvc3MiLCJvcHRpbWl6ZXIiLCJhZGFtIiwiZXBvY2hJZHgiLCJyYW5nZSIsImxvZ2dlciIsInByb2dyZXNzIiwidGltZSIsInRvSVNPU3RyaW5nIiwiZWxhcHNlIiwic2FtcGxlR2VuZXJhdG9yIiwibWluaW1pemUiLCJkYXRhU3luYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGVzdCIsIlRlc3RTYW1wbGVHZW5lcmF0b3JGbiIsInRlc3RCYXRjaFNpemUiLCJudW1DbGFzc2VzIiwidGVzdFNhbXBsZUdlbmVyYXRvciIsInRlc3RSZXN1bHQiLCJ6ZXJvcyIsIm9uZWhvdFByZWRpY3QiLCJvbmVIb3QiLCJwcmludCIsInN1bSIsImFkZCIsImRhdGEiLCJwYXNzIiwiYWNjdXJhY3kiLCJnZXRQYXJhbXMiLCJhc09iamVjdCIsImZyb20iLCJrVmFscyIsInRvUGFpcnMiLCJ2YWwiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U2F2ZWRQYXJhbXMiLCJmaWxlTGlzdCIsImdldEZpbGVMaXN0IiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwic2F2ZVBhcmFtcyIsIndyaXRlRmlsZSIsImxvYWRQYXJhbXMiLCJfcGFyYW1zIiwicmVhZEZpbGUiLCJwYXJzZSIsIlBpcGVsaW5lQ2xhc3MiLCJlbnNlbWJsZVRlc3QiLCJtb2RlbExpc3QiLCJtYWtlRW5zZW1ibGVQcmVkaWN0IiwicHJvYnMiLCJtb2RlbCIsImV4cCIsIm1lYW5Qcm9iIiwiY29uY2F0IiwiZW5zZW1ibGVQcmVkaWN0IiwiQmFzZUZ1bmN0aW9uIiwibGVuIiwiYWxsIiwiTnVtYmVyIiwiZ2V0VHJhdmVyc2UiLCJjdXJyeSIsIml0ZW0iLCJwaXBlIiwiYXBwbHkiLCJwaXBlbGluZUl0ZW0iLCJoeXBlclBhcmFtZXRlcnMiLCJyZXBsYWNlSWZNYXRjaCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJzbGljZSIsIkluZmluaXR5IiwiZG9SZXBsYWNlSWZNYXRjaCIsInJlcGxhY2VIeXBlclBhcmFtZXRlciIsIm9iamVjdCIsInNpemUiLCJkdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZSxRQUFNQSxTQUFOLFNBQXdCQyxxQkFBU0MsT0FBVCxDQUFpQkMsaUJBQWpCLEVBQXdCLENBQUNDLGlCQUFELENBQXhCLENBQXhCLENBQWlFO0FBQzVFOzs7O0FBSUFDLGVBQVcsQ0FBRUMsU0FBRixFQUFhQyxTQUFTLEdBQUMsSUFBdkIsRUFBNkJDLE9BQU8sR0FBQyxJQUFyQyxFQUEyQztBQUNsRDtBQUNBLFdBQUtDLENBQUwsR0FBUyxJQUFJQyxpQkFBSixF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Qjs7QUFDQSxlQUFTTyxxQkFBVCxDQUErQlIsWUFBL0IsRUFBNEM7QUFDeEMsWUFBR3JMLENBQUMsQ0FBQ3dCLEVBQUYsQ0FBS1gsS0FBTCxFQUFZd0ssWUFBWixLQUE2QnJMLENBQUMsQ0FBQ3dCLEVBQUYsQ0FBS1QsTUFBTCxFQUFhc0ssWUFBYixDQUFoQyxFQUEyRDtBQUN2RCxpQkFBT3JMLENBQUMsQ0FBQ3FELEdBQUYsQ0FBTXdJLHFCQUFOLEVBQTZCUixZQUE3QixDQUFQO0FBQ0gsU0FGRCxNQUdJO0FBQ0EsaUJBQU9PLGdCQUFnQixDQUFDUCxZQUFELENBQXZCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPUSxxQkFBcUIsQ0FBQ1IsWUFBRCxDQUE1QjtBQUNIOztBQUVEbEssWUFBUSxDQUFDMkssTUFBRCxFQUFRO0FBQ1osYUFBT0EsTUFBTSxDQUFDQyxJQUFQLEtBQWdCM0ksU0FBaEIsSUFBNkIwSSxNQUFNLENBQUNoSixLQUFQLEtBQWlCTSxTQUE5QyxJQUEyRDBJLE1BQU0sQ0FBQ0UsS0FBUCxLQUFpQjVJLFNBQW5GO0FBQ0g7O0FBekQ2Qzs7Ozs7Ozs7Ozs7Ozs7QUNGbEQsNkQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9waXBlbGluZS9waXBlbGluZS5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcGlwZWxpbmVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NhdXNhbGl0eS5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQge1RlbnNvcn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7SW5kZXhEQlN0b3JhZ2V9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBFbnNlbWJsZU1peGluc30gZnJvbSAnLi9lbnNlbWJsZS5taXhpbnMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEZ1bmN0aW9ufSBmcm9tICcuL2Z1bmN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F1c2FsTmV0IGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsW0Vuc2VtYmxlTWl4aW5zXSl7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBuZXRDb25maWdcbiAgICAgKiBAcGFyYW0gIHt9IG5ldFBhcmFtc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBuZXRDb25maWcsIG5ldFBhcmFtcz1udWxsLCBzdG9yYWdlPW51bGwgKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuRi5Db3JlRnVuY3Rpb247XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2UgfHwgSW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMuc2F2ZU1vZGVsRGlyID0gJy9zYXZlTW9kZWwvJztcbiAgICAgICAgdGhpcy5IeXBlclBhcmFtZXRlcnMgPSB0aGlzLkYuZ2V0SHlwZXJQYXJhbWV0ZXIobmV0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5CYXNlUGlwZWxpbmUgPSB0aGlzLkYuZ2V0UGlwZWxpbmUobmV0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5uZXRQYXJhbXMgPSB0aGlzLnNldE9ySW5pdFBhcmFtcyh0aGlzLkJhc2VQaXBlbGluZSwgbmV0UGFyYW1zKTtcbiAgICAgICAgdGhpcy5mbGF0dGVuUGFyYW1zID0gdGhpcy5mbGF0dGVuUGFyYW1zKHRoaXMubmV0UGFyYW1zKTsgICAgICAgIFxuICAgIH1cblxuICAgIGZsYXR0ZW5QYXJhbXMocGFyYW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc3QgTWFwVmFsdWVzID0gKG9iak9yQXJyYXkpPT5BcnJheS5pc0FycmF5KG9iak9yQXJyYXkpP29iak9yQXJyYXk6T2JqZWN0LnZhbHVlcyhvYmpPckFycmF5KTtcbiAgICAgICAgY29uc3QgRmxhdHRlbiA9IChwdik9PntcbiAgICAgICAgICAgIGlmKEYuaXNUZW5zb3IocHYpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBNYXBWYWx1ZXMocHYpO1xuICAgICAgICAgICAgICAgIGxldCBmbGF0dGVuID0gdmFsdWVzLnJlZHVjZSgoZmxhdHRlbiwgdik9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IEZsYXR0ZW4odik7XG4gICAgICAgICAgICAgICAgICAgIGlmKFIuaXMoQXJyYXksIHJlcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbiA9IFsuLi5mbGF0dGVuLCAuLi5yZXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuID0gWy4uLmZsYXR0ZW4sIHJlc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsYXR0ZW47XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbGF0dGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgdmFsdWVzID0gTWFwVmFsdWVzKHBhcmFtcyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmFsdWVzLnJlZHVjZSgoZmxhdHRlbix2KT0+Wy4uLmZsYXR0ZW4sIC4uLkZsYXR0ZW4odildLFtdKTtcbiAgICB9XG5cbiAgICBsYXllcih2YWx1ZSwgbGF5ZXJDb25maWd1cmUsIGxheWVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IHtOYW1lLCBUeXBlLCBQYXJhbWV0ZXJzLCBGbG93fSA9IGxheWVyQ29uZmlndXJlO1xuICAgICAgICBjb25zb2xlLmxvZyh7TmFtZSwgVHlwZSwgUGFyYW1ldGVycywgRmxvd30pO1xuICAgICAgICBjb25zdCBPcHNSdW5lciA9IFIuYWRkSW5kZXgoUi5yZWR1Y2UpKFIuX18se3Jlc3VsdDogdmFsdWUsIHRyYWNlOiB7fX0sIEZsb3cpO1xuICAgICAgICB2YXIge3Jlc3VsdCwgdHJhY2V9ID0gT3BzUnVuZXIoKHtyZXN1bHQsIHRyYWNlfSwgbm9kZSwgaWR4KT0+e1xuICAgICAgICAgICAgaWYobm9kZS5QYXJhbWV0ZXIpe1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuVFtub2RlLk9wXShyZXN1bHQsIGxheWVyUGFyYW1ldGVyc1tub2RlLlBhcmFtZXRlcl0sIC4uLm5vZGUuQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuVFtub2RlLk9wXShyZXN1bHQsIC4uLm5vZGUuQXJncyk7ICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyYWNlW2lkeF0gPSByZXN1bHQuc2hhcGU7XG4gICAgICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtbTmFtZV06IHJlc3VsdCwgdHJhY2V9O1xuICAgIH1cblxuICAgIHNldE9ySW5pdFBhcmFtcyhwaXBlbGluZSwgbmV0UGFyYW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRjtcbiAgICAgICAgbGV0IHBpcGVQYXJhbXMgPSBSLmZyb21QYWlycyhSLmZpbHRlcigoW2ssdl0pPT52ICE9PSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFIubWFwKFIuX18sIHBpcGVsaW5lKShwPT5bcC5OYW1lLCBwLlBhcmFtZXRlcnNdKSkpO1xuICAgICAgICBjb25zdCBTZXRPckluaXQgPSAobWFpblZhbHVlLCBzdWJWYWwpPT57XG4gICAgICAgICAgICBsZXQga2V5cyA9IFIua2V5cyhtYWluVmFsdWUpO1xuICAgICAgICAgICAgbGV0IGtleU1haW5WYWxTdWJWYWwgPSBSLm1hcCgoayk9PiBbaywgUi5wcm9wKGssIG1haW5WYWx1ZSksIFIucHJvcE9yKG51bGwsIGssIHN1YlZhbCldLCBrZXlzKTtcbiAgICAgICAgICAgIGNvbnN0IFZhbE1hcHBpbmcgPSAoW2tleSwgbWFpblZhbCwgc3ViVmFsXSk9PntcbiAgICAgICAgICAgICAgICBpZihGLmlzUGFyYW1ldGVyKG1haW5WYWwpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1TaGFwZSA9IG1haW5WYWw7XG4gICAgICAgICAgICAgICAgICAgIGlmKFIuaXNOaWwoc3ViVmFsKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgVC52YXJpYWJsZShULnJhbmRvbU5vcm1hbChwYXJhbVNoYXBlKSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgVC52YXJpYWJsZShULnRlbnNvcihzdWJWYWwpLnJlc2hhcGUocGFyYW1TaGFwZSkpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgU2V0T3JJbml0KG1haW5WYWwsIHN1YlZhbCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gUi5mcm9tUGFpcnMoUi5tYXAoVmFsTWFwcGluZywga2V5TWFpblZhbFN1YlZhbCkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU2V0T3JJbml0KHBpcGVQYXJhbXMsIG5ldFBhcmFtcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBzYW1wbGVzXG4gICAgICogQHBhcmFtICB7fSBudW1TYW1wbGVzPTFcbiAgICAgKi9cbiAgICBtYWtlUHJlZGljdChzYW1wbGVzLCBudW1TYW1wbGVzPTEpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBmID0gdGhpcy5GLCBsID0gdGhpcy5MO1xuICAgICAgICB0aGlzLkh5cGVyUGFyYW1ldGVycy5EYXRhc2l6ZSA9IG51bVNhbXBsZXM7XG4gICAgICAgIGNvbnN0IFBpcGVsaW5lID0gZi5wYXJhbWV0ZXJBY3F1aXNpdGlvbih0aGlzLkJhc2VQaXBlbGluZSwgdGhpcy5IeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICBjb25zb2xlLmxvZygoe1BpcGVsaW5lfSkpO1xuICAgICAgICBsZXQgcGlwZVZhbHVlID0ge1BpcGVJbnB1dDogc2FtcGxlc30sIHRyYWNlcyA9IFtdLCBuZXRQYXJhbXMgPSB0aGlzLm5ldFBhcmFtcztcbiAgICAgICAgcmV0dXJuIFQudGlkeSgoKT0+e1xuICAgICAgICAgICAgZm9yKGxldCBsYXllciBvZiBQaXBlbGluZSl7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyT3V0cHV0ID0gdGhpcy5sYXllcihwaXBlVmFsdWVbbGF5ZXIuSW5wdXRdLCBsYXllciwgbmV0UGFyYW1zW2xheWVyLk5hbWVdKTtcbiAgICAgICAgICAgICAgICBwaXBlVmFsdWVbbGF5ZXIuTmFtZV0gPSBsYXllck91dHB1dFtsYXllci5OYW1lXTtcbiAgICAgICAgICAgICAgICB0cmFjZXMucHVzaCh7W2xheWVyLk5hbWVdOiBsYXllck91dHB1dC50cmFjZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coe3RyYWNlc30pO1xuICAgICAgICAgICAgbGV0IHBpcGVPdXRwdXQgPSBwaXBlVmFsdWVbJ1BpcGVPdXRwdXQnXTtcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gcGlwZU91dHB1dC5zdWIoVC5sb2dTdW1FeHAocGlwZU91dHB1dCwgMSwgdHJ1ZSkpO1xuICAgICAgICAgICAgbGV0IHByZWRpY3QgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7bG9nUHJvYiwgcHJlZGljdH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHt9IHNhbXBsZUJhdGNoXG4gICAgICogQHBhcmFtICB7fSBsYWJlbEJhdGNoXG4gICAgICogQHBhcmFtICB7fSBudW1TYW1wbGVcbiAgICAgKi9cbiAgICBsb3NzKGJhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHMsIG51bVNhbXBsZSl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGxldCBsYWJlbFRlbnNvciAgPSBULnRlbnNvcihiYXRjaExhYmVscykucmVzaGFwZShbbnVtU2FtcGxlLCAtMV0pO1xuICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3IoYmF0Y2hTYW1wbGVzKS5hc1R5cGUoJ2Zsb2F0MzInKTsgXG4gICAgICAgIGNvbnN0IHtsb2dQcm9ifSA9IHRoaXMubWFrZVByZWRpY3Qoc2FtcGxlVGVuc29yLCBudW1TYW1wbGUpO1xuICAgICAgICBjb25zdCBsaWtlbGlob29kID0gbG9nUHJvYi5uZWcoKS5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgICBjb25zdCBsb3NzID0gbGlrZWxpaG9vZC5tZWFuKCk7XG4gICAgICAgIHJldHVybiBsb3NzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBTYW1wbGVHZW5lcmF0b3JGblxuICAgICAqIEBwYXJhbSAge30gYmF0Y2hTaXplXG4gICAgICogQHBhcmFtICB7fSBudW1FcG9jaHM9MlxuICAgICAqIEBwYXJhbSAge30gbHI9MC4wMVxuICAgICAqL1xuICAgIGFzeW5jIHRyYWluKFNhbXBsZUdlbmVyYXRvckZuLCBiYXRjaFNpemUsIG51bUVwb2NocyA9IDIsIGxyPTAuMDAxKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRiwgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgbG9zcyA9IFtdLCBhdmVyYWdlTG9zcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpbWl6ZXIgPSBULnRyYWluLmFkYW0obHIpO1xuICAgICAgICBmb3IobGV0IGVwb2NoSWR4IG9mIEYucmFuZ2UobnVtRXBvY2hzKSl7XG4gICAgICAgICAgICBpZih0aGlzLmxvZ2dlcil7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIucHJvZ3Jlc3Moe2Vwb2NoSWR4LCBhdmVyYWdlTG9zcywgdGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LnRvSVNPU3RyaW5nKCksIGVsYXBzZTogKG5ldyBEYXRlKCkgLSBzdGFydCkvMTAwMH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2FtcGxlR2VuZXJhdG9yID0gU2FtcGxlR2VuZXJhdG9yRm4oYmF0Y2hTaXplKTtcbiAgICAgICAgICAgIGZvciBhd2FpdCAobGV0IFtiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXSBvZiBzYW1wbGVHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgICAgIG9wdGltaXplci5taW5pbWl6ZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgbCA9IHRoaXMubG9zcyhiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzLCBiYXRjaFNpemUpO1xuICAgICAgICAgICAgICAgICAgICBsb3NzID0gWy4uLmxvc3MsIC4uLmwuZGF0YVN5bmMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtsb3NzfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsLmFzVHlwZSgnZmxvYXQzMicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXZlcmFnZUxvc3MgPSBbLi4uYXZlcmFnZUxvc3MsIFIubWVhbihsb3NzKV07XG4gICAgICAgICAgICBsb3NzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICByZXNvbHZlKHthdmVyYWdlTG9zc30pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMgdGVzdChUZXN0U2FtcGxlR2VuZXJhdG9yRm4sIHRlc3RCYXRjaFNpemUsIG51bUNsYXNzZXM9MTApe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCB0ZXN0U2FtcGxlR2VuZXJhdG9yID0gVGVzdFNhbXBsZUdlbmVyYXRvckZuKHRlc3RCYXRjaFNpemUpO1xuICAgICAgICBsZXQgdGVzdFJlc3VsdCA9IFQuemVyb3MoWzFdKTtcbiAgICAgICAgZm9yIGF3YWl0IChsZXQgW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdIG9mIHRlc3RTYW1wbGVHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgbGV0IGxhYmVsVGVuc29yICA9IFQudGVuc29yKGJhdGNoTGFiZWxzKS5yZXNoYXBlKFt0ZXN0QmF0Y2hTaXplLCBudW1DbGFzc2VzXSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3IoYmF0Y2hTYW1wbGVzKS5hc1R5cGUoJ2Zsb2F0MzInKTsgXG4gICAgICAgICAgICBjb25zdCB7cHJlZGljdH0gPSB0aGlzLm1ha2VQcmVkaWN0KHNhbXBsZVRlbnNvciwgdGVzdEJhdGNoU2l6ZSk7XG4gICAgICAgICAgICBsZXQgb25laG90UHJlZGljdCA9IFQub25lSG90KHByZWRpY3QsIG51bUNsYXNzZXMpO1xuICAgICAgICAgICAgb25laG90UHJlZGljdC5wcmludCgpO1xuICAgICAgICAgICAgbGFiZWxUZW5zb3IucHJpbnQoKTtcbiAgICAgICAgICAgIG9uZWhvdFByZWRpY3QubXVsKGxhYmVsVGVuc29yKS5zdW0oKS5wcmludCgpO1xuICAgICAgICAgICAgdGVzdFJlc3VsdCA9IHRlc3RSZXN1bHQuYWRkKG9uZWhvdFByZWRpY3QubXVsKGxhYmVsVGVuc29yKS5zdW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRlc3RSZXN1bHQuZGF0YSgpO1xuICAgICAgICBsZXQgcGFzcyA9IHJlc3VsdFswXTtcbiAgICAgICAgbGV0IGFjY3VyYWN5ID0gcGFzcy90ZXN0QmF0Y2hTaXplO1xuICAgICAgICByZXR1cm4ge2FjY3VyYWN5LCBwYXNzfTsgICAgICAgIFxuICAgIH1cblxuICAgIGFzeW5jIGdldFBhcmFtcyhhc09iamVjdD10cnVlKXtcbiAgICAgICAgY29uc3QgRiA9IHRoaXMuRiwgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgZ2V0UGFyYW1zID0gYXN5bmMgKHBhcmFtcyk9PntcbiAgICAgICAgICAgIGlmKEYuaXNUZW5zb3IocGFyYW1zKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXdhaXQgcGFyYW1zLmRhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBrVmFscyA9IFIudG9QYWlycyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtrLCB2YWxdIG9mIGtWYWxzKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2tdID0gYXdhaXQgZ2V0UGFyYW1zKHZhbCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgcGFyYW1zID0gYXdhaXQgZ2V0UGFyYW1zKHRoaXMubmV0UGFyYW1zKTtcbiAgICAgICAgaWYoYXNPYmplY3Qpe1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0U2F2ZWRQYXJhbXMoKXtcbiAgICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEZpbGVMaXN0KHRoaXMuc2F2ZU1vZGVsRGlyKTtcbiAgICAgICAgcmV0dXJuIGZpbGVMaXN0Lm1hcChmaWxlTmFtZT0+ZmlsZU5hbWUucmVwbGFjZSh0aGlzLnNhdmVNb2RlbERpciwnJykpO1xuICAgIH1cbiAgICBhc3luYyBzYXZlUGFyYW1zKGZpbGVOYW1lPSdzYXZlLm1vZGVsJyl7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZ2V0UGFyYW1zKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS53cml0ZUZpbGUodGhpcy5zYXZlTW9kZWxEaXIgKyBmaWxlTmFtZSwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRQYXJhbXMoZmlsZU5hbWUsIHBhcmFtcz1udWxsKXtcbiAgICAgICAgaWYoIXBhcmFtcyl7XG4gICAgICAgICAgICBsZXQgX3BhcmFtcyA9IGF3YWl0IHRoaXMuc3RvcmFnZS5yZWFkRmlsZSh0aGlzLnNhdmVNb2RlbERpcitmaWxlTmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7X3BhcmFtc30pO1xuICAgICAgICAgICAgcGFyYW1zID0gSlNPTi5wYXJzZShfcGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5ldFBhcmFtcyA9IHRoaXMuc2V0T3JJbml0UGFyYW1zKHRoaXMuQmFzZVBpcGVsaW5lLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRQYXJhbXMoZmFsc2UpO1xuICAgIH1cbn0iLCJjb25zdCBFbnNlbWJsZU1peGlucyA9IChQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgUGlwZWxpbmVDbGFzc3sgXG4gICAgYXN5bmMgZW5zZW1ibGVUZXN0KFRlc3RTYW1wbGVHZW5lcmF0b3JGbiwgbW9kZWxMaXN0LCB0ZXN0QmF0Y2hTaXplLCBudW1DbGFzc2VzPTEwKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRiwgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgdGVzdFNhbXBsZUdlbmVyYXRvciA9IFRlc3RTYW1wbGVHZW5lcmF0b3JGbih0ZXN0QmF0Y2hTaXplKTtcbiAgICAgICAgbGV0IHRlc3RSZXN1bHQgPSBULnplcm9zKFsxXSk7XG4gICAgICAgIGZvciBhd2FpdCAobGV0IFtiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXSBvZiB0ZXN0U2FtcGxlR2VuZXJhdG9yKXtcbiAgICAgICAgICAgIGxldCBsYWJlbFRlbnNvciAgPSBULnRlbnNvcihiYXRjaExhYmVscykucmVzaGFwZShbdGVzdEJhdGNoU2l6ZSwgbnVtQ2xhc3Nlc10pO1xuICAgICAgICAgICAgbGV0IHNhbXBsZVRlbnNvciA9IFQudGVuc29yKGJhdGNoU2FtcGxlcykuYXNUeXBlKCdmbG9hdDMyJyk7IFxuICAgICAgICAgICAgY29uc3Qge3ByZWRpY3R9ID0gYXdhaXQgdGhpcy5tYWtlRW5zZW1ibGVQcmVkaWN0KG1vZGVsTGlzdCwgc2FtcGxlVGVuc29yLCB0ZXN0QmF0Y2hTaXplKTtcbiAgICAgICAgICAgIGxldCBvbmVob3RQcmVkaWN0ID0gVC5vbmVIb3QocHJlZGljdCwgbnVtQ2xhc3Nlcyk7XG4gICAgICAgICAgICBvbmVob3RQcmVkaWN0LnByaW50KCk7XG4gICAgICAgICAgICBsYWJlbFRlbnNvci5wcmludCgpO1xuICAgICAgICAgICAgb25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpLnByaW50KCk7XG4gICAgICAgICAgICB0ZXN0UmVzdWx0ID0gdGVzdFJlc3VsdC5hZGQob25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGVzdFJlc3VsdC5kYXRhKCk7XG4gICAgICAgIGxldCBwYXNzID0gcmVzdWx0WzBdO1xuICAgICAgICBsZXQgYWNjdXJhY3kgPSBwYXNzL3Rlc3RCYXRjaFNpemU7XG4gICAgICAgIHJldHVybiB7YWNjdXJhY3ksIHBhc3N9OyAgICAgICAgXG4gICAgfVxuICAgIGFzeW5jIG1ha2VFbnNlbWJsZVByZWRpY3QobW9kZWxMaXN0LCBzYW1wbGVzLCBudW1TYW1wbGVzPTEpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBmID0gdGhpcy5GLCBsID0gdGhpcy5MO1xuICAgICAgICB0aGlzLkh5cGVyUGFyYW1ldGVycy5EYXRhc2l6ZSA9IG51bVNhbXBsZXM7XG4gICAgICAgIGNvbnN0IFBpcGVsaW5lID0gZi5wYXJhbWV0ZXJBY3F1aXNpdGlvbih0aGlzLkJhc2VQaXBlbGluZSwgdGhpcy5IeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICBsZXQgcGlwZVZhbHVlID0ge1BpcGVJbnB1dDogc2FtcGxlc30sIHRyYWNlcyA9IFtdLCBuZXRQYXJhbXMgPSB0aGlzLm5ldFBhcmFtcztcbiAgICAgICAgbGV0IHByb2JzID0gW107XG4gICAgICAgIGZvcihsZXQgbW9kZWwgb2YgbW9kZWxMaXN0KXtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFBhcmFtcyhtb2RlbCk7XG4gICAgICAgICAgICBsZXQge2xvZ1Byb2J9ID0gVC50aWR5KCgpPT57XG4gICAgICAgICAgICAgICAgZm9yKGxldCBsYXllciBvZiBQaXBlbGluZSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXllck91dHB1dCA9IHRoaXMubGF5ZXIocGlwZVZhbHVlW2xheWVyLklucHV0XSwgbGF5ZXIsIG5ldFBhcmFtc1tsYXllci5OYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB0cmFjZXMucHVzaCh7W2xheWVyLk5hbWVdOiBsYXllck91dHB1dC50cmFjZX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7dHJhY2VzfSk7XG4gICAgICAgICAgICAgICAgbGV0IHBpcGVPdXRwdXQgPSBwaXBlVmFsdWVbJ1BpcGVPdXRwdXQnXTtcbiAgICAgICAgICAgICAgICBsZXQgbG9nUHJvYiA9IHBpcGVPdXRwdXQuc3ViKFQubG9nU3VtRXhwKHBpcGVPdXRwdXQsIDEsIHRydWUpKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlZGljdCA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7bG9nUHJvYiwgcHJlZGljdH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvZ1Byb2IucHJpbnQoKTtcbiAgICAgICAgICAgIHByb2JzLnB1c2goVC5leHAobG9nUHJvYikpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtZWFuUHJvYiA9IFQuY29uY2F0KHByb2JzKS5tZWFuKDAsIHRydWUpO1xuICAgICAgICBtZWFuUHJvYi5wcmludCgpO1xuICAgICAgICBsZXQgZW5zZW1ibGVQcmVkaWN0ID0gbWVhblByb2IuYXJnTWF4KDEpO1xuICAgICAgICByZXR1cm4ge3ByZWRpY3Q6ZW5zZW1ibGVQcmVkaWN0fTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgRW5zZW1ibGVNaXhpbnM7IiwiaW1wb3J0IHtGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb259IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgQmFzZUZ1bmN0aW9ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaXNUZW5zb3IodmFsKXtcbiAgICAgICAgLy8gcmV0dXJuIHZhbCBpbnN0YW5jZW9mIHRoaXMmJiBcbiAgICAgICAgcmV0dXJuIHZhbC5zaGFwZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByYW5nZShsZW4pe1xuICAgICAgICByZXR1cm4gdGhpcy5SLnJhbmdlKDAsIGxlbik7XG4gICAgfVxuXG4gICAgaXNQYXJhbWV0ZXIodmFsKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuaXMoQXJyYXkpKHZhbCkgJiYgUi5hbGwoUi5pcyhOdW1iZXIpLCB2YWwpO1xuICAgIH1cblxuICAgIGdldFBpcGVsaW5lKG5ldENvbmZpZyl7XG4gICAgICAgIC8vVE9ETzogbWFrZSBhc3NlcnRvclxuICAgICAgICByZXR1cm4gdGhpcy5SLnByb3AoJ1BpcGVsaW5lJywgbmV0Q29uZmlnKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0SHlwZXJQYXJhbWV0ZXIobmV0Q29uZmlnKXtcbiAgICAgICAgLy9UT0RPOiBtYWtlIGFzc2VydG9yXG4gICAgICAgIHJldHVybiB0aGlzLlIucHJvcCgnSHlwZXJQYXJhbWV0ZXJzJywgbmV0Q29uZmlnKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0VHJhdmVyc2UoKXtcbiAgICAgICAgcmV0dXJuIFIuY3VycnkoZnVuY3Rpb24oa2V5cywgaXRlbSl7XG4gICAgICAgICAgICBSLnBpcGUuYXBwbHkobnVsbCwgUi5tYXAoUi5wcm9wLCBrZXlzKSkoaXRlbSk7XG4gICAgICAgIH0pOyBcbiAgICB9XG4gICAgXG4gICAgcGFyYW1ldGVyQWNxdWlzaXRpb24ocGlwZWxpbmVJdGVtLCBoeXBlclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SOyBcbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZUlmTWF0Y2godmFsdWUsIGh5cGVyUGFyYW1ldGVycyl7XG4gICAgICAgICAgICBpZihSLmlzKFN0cmluZywgdmFsdWUpICYmIFIuc3RhcnRzV2l0aCgnJCcsIHZhbHVlKSl7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gUi5zbGljZSgxLCBJbmZpbml0eSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSLnByb3Aoa2V5LCBoeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRvUmVwbGFjZUlmTWF0Y2ggPSBSLmN1cnJ5KHJlcGxhY2VJZk1hdGNoKShSLl9fLCBoeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICBmdW5jdGlvbiByZXBsYWNlSHlwZXJQYXJhbWV0ZXIocGlwZWxpbmVJdGVtKXtcbiAgICAgICAgICAgIGlmKFIuaXMoQXJyYXksIHBpcGVsaW5lSXRlbSkgfHwgUi5pcyhPYmplY3QsIHBpcGVsaW5lSXRlbSkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBSLm1hcChyZXBsYWNlSHlwZXJQYXJhbWV0ZXIsIHBpcGVsaW5lSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkb1JlcGxhY2VJZk1hdGNoKHBpcGVsaW5lSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcGxhY2VIeXBlclBhcmFtZXRlcihwaXBlbGluZUl0ZW0pO1xuICAgIH1cblxuICAgIGlzVGVuc29yKG9iamVjdCl7XG4gICAgICAgIHJldHVybiBvYmplY3Quc2l6ZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zaGFwZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kdHlwZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==