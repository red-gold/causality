(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.storage"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.storage"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/pipeline"] = factory(require("causal-net.core"), require("causal-net.storage"));
	else
		root["@causalNet/pipeline"] = factory(root["causal-net.core"], root["causal-net.storage"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__) {
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

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/interopRequireDefault.js'");

/***/ }),

/***/ "./src/causality.js":
/*!**************************!*\
  !*** ./src/causality.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.storage */ "causal-net.storage"), __webpack_require__(/*! ./function */ "./src/function.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _function) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _function = _interopRequireDefault(_function);

  class CausalNet extends _causalNet.Tensor {
    /**
     * @param  {} netConfig
     * @param  {} netParams
     */
    constructor(netConfig, netParams = null, storage = null) {
      super();
      this.F = new _function.default();
      this.R = this.F.CoreFunction;
      this.storage = storage || _causalNet2.IndexDBStorage;
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
        console.log({
          epochIdx,
          averageLoss,
          time: new Date().toISOString(),
          start: start.toISOString(),
          elapse: (new Date() - start) / 1000
        });
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

    async saveParams(fileName = './save.model') {
      const params = await this.getParams();
      console.log({
        params
      });
      return await this.storage.writeFile(fileName, JSON.stringify(params));
    }

    async loadParams(fileName) {
      let _params = await this.storage.readFile(fileName);

      console.log({
        _params
      });
      let params = JSON.parse(_params);
      this.setOrInitParams(this.BasePipeline, params);
      return await this.getParams(false);
    }

  }

  _exports.default = CausalNet;
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

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvY2F1c2FsaXR5LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiJdLCJuYW1lcyI6WyJDYXVzYWxOZXQiLCJUZW5zb3IiLCJjb25zdHJ1Y3RvciIsIm5ldENvbmZpZyIsIm5ldFBhcmFtcyIsInN0b3JhZ2UiLCJGIiwiRnVuY3Rpb24iLCJSIiwiQ29yZUZ1bmN0aW9uIiwiSW5kZXhEQlN0b3JhZ2UiLCJIeXBlclBhcmFtZXRlcnMiLCJnZXRIeXBlclBhcmFtZXRlciIsIkJhc2VQaXBlbGluZSIsImdldFBpcGVsaW5lIiwic2V0T3JJbml0UGFyYW1zIiwiZmxhdHRlblBhcmFtcyIsInBhcmFtcyIsIk1hcFZhbHVlcyIsIm9iak9yQXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJGbGF0dGVuIiwicHYiLCJpc1RlbnNvciIsImZsYXR0ZW4iLCJyZWR1Y2UiLCJ2IiwicmVzIiwiaXMiLCJsYXllciIsInZhbHVlIiwibGF5ZXJDb25maWd1cmUiLCJsYXllclBhcmFtZXRlcnMiLCJOYW1lIiwiVHlwZSIsIlBhcmFtZXRlcnMiLCJGbG93IiwiY29uc29sZSIsImxvZyIsIk9wc1J1bmVyIiwiYWRkSW5kZXgiLCJfXyIsInJlc3VsdCIsInRyYWNlIiwibm9kZSIsImlkeCIsIlBhcmFtZXRlciIsIlQiLCJPcCIsIkFyZ3MiLCJzaGFwZSIsInBpcGVsaW5lIiwicGlwZVBhcmFtcyIsImZyb21QYWlycyIsImZpbHRlciIsImsiLCJ1bmRlZmluZWQiLCJtYXAiLCJwIiwiU2V0T3JJbml0IiwibWFpblZhbHVlIiwic3ViVmFsIiwia2V5cyIsImtleU1haW5WYWxTdWJWYWwiLCJwcm9wIiwicHJvcE9yIiwiVmFsTWFwcGluZyIsImtleSIsIm1haW5WYWwiLCJpc1BhcmFtZXRlciIsInBhcmFtU2hhcGUiLCJpc05pbCIsInZhcmlhYmxlIiwicmFuZG9tTm9ybWFsIiwidGVuc29yIiwicmVzaGFwZSIsIm1ha2VQcmVkaWN0Iiwic2FtcGxlcyIsIm51bVNhbXBsZXMiLCJmIiwibCIsIkwiLCJEYXRhc2l6ZSIsIlBpcGVsaW5lIiwicGFyYW1ldGVyQWNxdWlzaXRpb24iLCJwaXBlVmFsdWUiLCJQaXBlSW5wdXQiLCJ0cmFjZXMiLCJ0aWR5IiwibGF5ZXJPdXRwdXQiLCJJbnB1dCIsInB1c2giLCJwaXBlT3V0cHV0IiwibG9nUHJvYiIsInN1YiIsImxvZ1N1bUV4cCIsInByZWRpY3QiLCJhcmdNYXgiLCJsb3NzIiwiYmF0Y2hTYW1wbGVzIiwiYmF0Y2hMYWJlbHMiLCJudW1TYW1wbGUiLCJsYWJlbFRlbnNvciIsInNhbXBsZVRlbnNvciIsImFzVHlwZSIsImxpa2VsaWhvb2QiLCJuZWciLCJtdWwiLCJtZWFuIiwidHJhaW4iLCJTYW1wbGVHZW5lcmF0b3JGbiIsImJhdGNoU2l6ZSIsIm51bUVwb2NocyIsImxyIiwic3RhcnQiLCJEYXRlIiwiYXZlcmFnZUxvc3MiLCJvcHRpbWl6ZXIiLCJhZGFtIiwiZXBvY2hJZHgiLCJyYW5nZSIsInRpbWUiLCJ0b0lTT1N0cmluZyIsImVsYXBzZSIsInNhbXBsZUdlbmVyYXRvciIsIm1pbmltaXplIiwiZGF0YVN5bmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRlc3QiLCJUZXN0U2FtcGxlR2VuZXJhdG9yRm4iLCJ0ZXN0QmF0Y2hTaXplIiwibnVtQ2xhc3NlcyIsInRlc3RTYW1wbGVHZW5lcmF0b3IiLCJ0ZXN0UmVzdWx0IiwiemVyb3MiLCJvbmVob3RQcmVkaWN0Iiwib25lSG90IiwicHJpbnQiLCJzdW0iLCJhZGQiLCJkYXRhIiwicGFzcyIsImFjY3VyYWN5IiwiZ2V0UGFyYW1zIiwiYXNPYmplY3QiLCJmcm9tIiwia1ZhbHMiLCJ0b1BhaXJzIiwidmFsIiwiSlNPTiIsInN0cmluZ2lmeSIsInNhdmVQYXJhbXMiLCJmaWxlTmFtZSIsIndyaXRlRmlsZSIsImxvYWRQYXJhbXMiLCJfcGFyYW1zIiwicmVhZEZpbGUiLCJwYXJzZSIsIkJhc2VGdW5jdGlvbiIsImxlbiIsImFsbCIsIk51bWJlciIsImdldFRyYXZlcnNlIiwiY3VycnkiLCJpdGVtIiwicGlwZSIsImFwcGx5IiwicGlwZWxpbmVJdGVtIiwiaHlwZXJQYXJhbWV0ZXJzIiwicmVwbGFjZUlmTWF0Y2giLCJTdHJpbmciLCJzdGFydHNXaXRoIiwic2xpY2UiLCJJbmZpbml0eSIsImRvUmVwbGFjZUlmTWF0Y2giLCJyZXBsYWNlSHlwZXJQYXJhbWV0ZXIiLCJvYmplY3QiLCJzaXplIiwiZHR5cGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFF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S0FBNkJwSyxDQUFDLENBQUN1QixFQUFGLENBQUtULE1BQUwsRUFBYXNKLFlBQWIsQ0FBaEMsRUFBMkQ7QUFDdkQsaUJBQU9wSyxDQUFDLENBQUNvRCxHQUFGLENBQU13SCxxQkFBTixFQUE2QlIsWUFBN0IsQ0FBUDtBQUNILFNBRkQsTUFHSTtBQUNBLGlCQUFPTyxnQkFBZ0IsQ0FBQ1AsWUFBRCxDQUF2QjtBQUNIO0FBQ0o7O0FBQ0QsYUFBT1EscUJBQXFCLENBQUNSLFlBQUQsQ0FBNUI7QUFDSDs7QUFFRGxKLFlBQVEsQ0FBQzJKLE1BQUQsRUFBUTtBQUNaLGFBQU9BLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQjNILFNBQWhCLElBQTZCMEgsTUFBTSxDQUFDaEksS0FBUCxLQUFpQk0sU0FBOUMsSUFBMkQwSCxNQUFNLENBQUNFLEtBQVAsS0FBaUI1SCxTQUFuRjtBQUNIOztBQXpENkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmxELDZEOzs7Ozs7Ozs7OztBQ0FBLGdFIiwiZmlsZSI6IkBjYXVzYWxOZXQvcGlwZWxpbmUubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge1RlbnNvcn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7SW5kZXhEQlN0b3JhZ2V9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQge2RlZmF1bHQgYXMgRnVuY3Rpb259IGZyb20gJy4vZnVuY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXVzYWxOZXQgZXh0ZW5kcyBUZW5zb3J7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBuZXRDb25maWdcbiAgICAgKiBAcGFyYW0gIHt9IG5ldFBhcmFtc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBuZXRDb25maWcsIG5ldFBhcmFtcz1udWxsLCBzdG9yYWdlPW51bGwgKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuRi5Db3JlRnVuY3Rpb247XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2UgfHwgSW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMuSHlwZXJQYXJhbWV0ZXJzID0gdGhpcy5GLmdldEh5cGVyUGFyYW1ldGVyKG5ldENvbmZpZyk7XG4gICAgICAgIHRoaXMuQmFzZVBpcGVsaW5lID0gdGhpcy5GLmdldFBpcGVsaW5lKG5ldENvbmZpZyk7XG4gICAgICAgIHRoaXMubmV0UGFyYW1zID0gdGhpcy5zZXRPckluaXRQYXJhbXModGhpcy5CYXNlUGlwZWxpbmUsIG5ldFBhcmFtcyk7XG4gICAgICAgIHRoaXMuZmxhdHRlblBhcmFtcyA9IHRoaXMuZmxhdHRlblBhcmFtcyh0aGlzLm5ldFBhcmFtcyk7ICAgICAgICBcbiAgICB9XG5cbiAgICBmbGF0dGVuUGFyYW1zKHBhcmFtcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIEYgPSB0aGlzLkY7XG4gICAgICAgIGNvbnN0IE1hcFZhbHVlcyA9IChvYmpPckFycmF5KT0+QXJyYXkuaXNBcnJheShvYmpPckFycmF5KT9vYmpPckFycmF5Ok9iamVjdC52YWx1ZXMob2JqT3JBcnJheSk7XG4gICAgICAgIGNvbnN0IEZsYXR0ZW4gPSAocHYpPT57XG4gICAgICAgICAgICBpZihGLmlzVGVuc29yKHB2KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gTWFwVmFsdWVzKHB2KTtcbiAgICAgICAgICAgICAgICBsZXQgZmxhdHRlbiA9IHZhbHVlcy5yZWR1Y2UoKGZsYXR0ZW4sIHYpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBGbGF0dGVuKHYpO1xuICAgICAgICAgICAgICAgICAgICBpZihSLmlzKEFycmF5LCByZXMpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW4gPSBbLi4uZmxhdHRlbiwgLi4ucmVzXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbiA9IFsuLi5mbGF0dGVuLCByZXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmbGF0dGVuO1xuICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxhdHRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHZhbHVlcyA9IE1hcFZhbHVlcyhwYXJhbXMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoKGZsYXR0ZW4sdik9PlsuLi5mbGF0dGVuLCAuLi5GbGF0dGVuKHYpXSxbXSk7XG4gICAgfVxuXG4gICAgbGF5ZXIodmFsdWUsIGxheWVyQ29uZmlndXJlLCBsYXllclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCB7TmFtZSwgVHlwZSwgUGFyYW1ldGVycywgRmxvd30gPSBsYXllckNvbmZpZ3VyZTtcbiAgICAgICAgY29uc29sZS5sb2coe05hbWUsIFR5cGUsIFBhcmFtZXRlcnMsIEZsb3d9KTtcbiAgICAgICAgY29uc3QgT3BzUnVuZXIgPSBSLmFkZEluZGV4KFIucmVkdWNlKShSLl9fLHtyZXN1bHQ6IHZhbHVlLCB0cmFjZToge319LCBGbG93KTtcbiAgICAgICAgdmFyIHtyZXN1bHQsIHRyYWNlfSA9IE9wc1J1bmVyKCh7cmVzdWx0LCB0cmFjZX0sIG5vZGUsIGlkeCk9PntcbiAgICAgICAgICAgIGlmKG5vZGUuUGFyYW1ldGVyKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLlRbbm9kZS5PcF0ocmVzdWx0LCBsYXllclBhcmFtZXRlcnNbbm9kZS5QYXJhbWV0ZXJdLCAuLi5ub2RlLkFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLlRbbm9kZS5PcF0ocmVzdWx0LCAuLi5ub2RlLkFyZ3MpOyAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmFjZVtpZHhdID0gcmVzdWx0LnNoYXBlO1xuICAgICAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7W05hbWVdOiByZXN1bHQsIHRyYWNlfTtcbiAgICB9XG5cbiAgICBzZXRPckluaXRQYXJhbXMocGlwZWxpbmUsIG5ldFBhcmFtcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFQgPSB0aGlzLlQsIEYgPSB0aGlzLkY7XG4gICAgICAgIGxldCBwaXBlUGFyYW1zID0gUi5mcm9tUGFpcnMoUi5maWx0ZXIoKFtrLHZdKT0+diAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSLm1hcChSLl9fLCBwaXBlbGluZSkocD0+W3AuTmFtZSwgcC5QYXJhbWV0ZXJzXSkpKTtcbiAgICAgICAgY29uc3QgU2V0T3JJbml0ID0gKG1haW5WYWx1ZSwgc3ViVmFsKT0+e1xuICAgICAgICAgICAgbGV0IGtleXMgPSBSLmtleXMobWFpblZhbHVlKTtcbiAgICAgICAgICAgIGxldCBrZXlNYWluVmFsU3ViVmFsID0gUi5tYXAoKGspPT4gW2ssIFIucHJvcChrLCBtYWluVmFsdWUpLCBSLnByb3BPcihudWxsLCBrLCBzdWJWYWwpXSwga2V5cyk7XG4gICAgICAgICAgICBjb25zdCBWYWxNYXBwaW5nID0gKFtrZXksIG1haW5WYWwsIHN1YlZhbF0pPT57XG4gICAgICAgICAgICAgICAgaWYoRi5pc1BhcmFtZXRlcihtYWluVmFsKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtU2hhcGUgPSBtYWluVmFsO1xuICAgICAgICAgICAgICAgICAgICBpZihSLmlzTmlsKHN1YlZhbCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFQudmFyaWFibGUoVC5yYW5kb21Ob3JtYWwocGFyYW1TaGFwZSkpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFQudmFyaWFibGUoVC50ZW5zb3Ioc3ViVmFsKS5yZXNoYXBlKHBhcmFtU2hhcGUpKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFNldE9ySW5pdChtYWluVmFsLCBzdWJWYWwpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFIuZnJvbVBhaXJzKFIubWFwKFZhbE1hcHBpbmcsIGtleU1haW5WYWxTdWJWYWwpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFNldE9ySW5pdChwaXBlUGFyYW1zLCBuZXRQYXJhbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gc2FtcGxlc1xuICAgICAqIEBwYXJhbSAge30gbnVtU2FtcGxlcz0xXG4gICAgICovXG4gICAgbWFrZVByZWRpY3Qoc2FtcGxlcywgbnVtU2FtcGxlcz0xKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgZiA9IHRoaXMuRiwgbCA9IHRoaXMuTDtcbiAgICAgICAgdGhpcy5IeXBlclBhcmFtZXRlcnMuRGF0YXNpemUgPSBudW1TYW1wbGVzO1xuICAgICAgICBjb25zdCBQaXBlbGluZSA9IGYucGFyYW1ldGVyQWNxdWlzaXRpb24odGhpcy5CYXNlUGlwZWxpbmUsIHRoaXMuSHlwZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgY29uc29sZS5sb2coKHtQaXBlbGluZX0pKTtcbiAgICAgICAgbGV0IHBpcGVWYWx1ZSA9IHtQaXBlSW5wdXQ6IHNhbXBsZXN9LCB0cmFjZXMgPSBbXSwgbmV0UGFyYW1zID0gdGhpcy5uZXRQYXJhbXM7XG4gICAgICAgIHJldHVybiBULnRpZHkoKCk9PntcbiAgICAgICAgICAgIGZvcihsZXQgbGF5ZXIgb2YgUGlwZWxpbmUpe1xuICAgICAgICAgICAgICAgIGxldCBsYXllck91dHB1dCA9IHRoaXMubGF5ZXIocGlwZVZhbHVlW2xheWVyLklucHV0XSwgbGF5ZXIsIG5ldFBhcmFtc1tsYXllci5OYW1lXSk7XG4gICAgICAgICAgICAgICAgcGlwZVZhbHVlW2xheWVyLk5hbWVdID0gbGF5ZXJPdXRwdXRbbGF5ZXIuTmFtZV07XG4gICAgICAgICAgICAgICAgdHJhY2VzLnB1c2goe1tsYXllci5OYW1lXTogbGF5ZXJPdXRwdXQudHJhY2V9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHt0cmFjZXN9KTtcbiAgICAgICAgICAgIGxldCBwaXBlT3V0cHV0ID0gcGlwZVZhbHVlWydQaXBlT3V0cHV0J107XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IHBpcGVPdXRwdXQuc3ViKFQubG9nU3VtRXhwKHBpcGVPdXRwdXQsIDEsIHRydWUpKTtcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ID0gbG9nUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgICAgICByZXR1cm4ge2xvZ1Byb2IsIHByZWRpY3R9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBzYW1wbGVCYXRjaFxuICAgICAqIEBwYXJhbSAge30gbGFiZWxCYXRjaFxuICAgICAqIEBwYXJhbSAge30gbnVtU2FtcGxlXG4gICAgICovXG4gICAgbG9zcyhiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzLCBudW1TYW1wbGUpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICBsZXQgbGFiZWxUZW5zb3IgID0gVC50ZW5zb3IoYmF0Y2hMYWJlbHMpLnJlc2hhcGUoW251bVNhbXBsZSwgLTFdKTtcbiAgICAgICAgbGV0IHNhbXBsZVRlbnNvciA9IFQudGVuc29yKGJhdGNoU2FtcGxlcykuYXNUeXBlKCdmbG9hdDMyJyk7IFxuICAgICAgICBjb25zdCB7bG9nUHJvYn0gPSB0aGlzLm1ha2VQcmVkaWN0KHNhbXBsZVRlbnNvciwgbnVtU2FtcGxlKTtcbiAgICAgICAgY29uc3QgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubmVnKCkubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgICAgY29uc3QgbG9zcyA9IGxpa2VsaWhvb2QubWVhbigpO1xuICAgICAgICByZXR1cm4gbG9zcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gU2FtcGxlR2VuZXJhdG9yRm5cbiAgICAgKiBAcGFyYW0gIHt9IGJhdGNoU2l6ZVxuICAgICAqIEBwYXJhbSAge30gbnVtRXBvY2hzPTJcbiAgICAgKiBAcGFyYW0gIHt9IGxyPTAuMDFcbiAgICAgKi9cbiAgICBhc3luYyB0cmFpbihTYW1wbGVHZW5lcmF0b3JGbiwgYmF0Y2hTaXplLCBudW1FcG9jaHMgPSAyLCBscj0wLjAwMSl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIEYgPSB0aGlzLkYsIFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGxvc3MgPSBbXSwgYXZlcmFnZUxvc3MgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW1pemVyID0gVC50cmFpbi5hZGFtKGxyKTtcbiAgICAgICAgZm9yKGxldCBlcG9jaElkeCBvZiBGLnJhbmdlKG51bUVwb2Nocykpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2Vwb2NoSWR4LCBhdmVyYWdlTG9zcywgdGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogc3RhcnQudG9JU09TdHJpbmcoKSwgZWxhcHNlOiAobmV3IERhdGUoKSAtIHN0YXJ0KS8xMDAwfSk7XG4gICAgICAgICAgICBjb25zdCBzYW1wbGVHZW5lcmF0b3IgPSBTYW1wbGVHZW5lcmF0b3JGbihiYXRjaFNpemUpO1xuICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQgW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdIG9mIHNhbXBsZUdlbmVyYXRvcil7XG4gICAgICAgICAgICAgICAgb3B0aW1pemVyLm1pbmltaXplKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBsID0gdGhpcy5sb3NzKGJhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHMsIGJhdGNoU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvc3MgPSBbLi4ubG9zcywgLi4ubC5kYXRhU3luYygpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2xvc3N9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdmVyYWdlTG9zcyA9IFsuLi5hdmVyYWdlTG9zcywgUi5tZWFuKGxvc3MpXTtcbiAgICAgICAgICAgIGxvc3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoe2F2ZXJhZ2VMb3NzfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYyB0ZXN0KFRlc3RTYW1wbGVHZW5lcmF0b3JGbiwgdGVzdEJhdGNoU2l6ZSwgbnVtQ2xhc3Nlcz0xMCl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIEYgPSB0aGlzLkYsIFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IHRlc3RTYW1wbGVHZW5lcmF0b3IgPSBUZXN0U2FtcGxlR2VuZXJhdG9yRm4odGVzdEJhdGNoU2l6ZSk7XG4gICAgICAgIGxldCB0ZXN0UmVzdWx0ID0gVC56ZXJvcyhbMV0pO1xuICAgICAgICBmb3IgYXdhaXQgKGxldCBbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc10gb2YgdGVzdFNhbXBsZUdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgbGFiZWxUZW5zb3IgID0gVC50ZW5zb3IoYmF0Y2hMYWJlbHMpLnJlc2hhcGUoW3Rlc3RCYXRjaFNpemUsIG51bUNsYXNzZXNdKTtcbiAgICAgICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihiYXRjaFNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpOyBcbiAgICAgICAgICAgIGNvbnN0IHtwcmVkaWN0fSA9IHRoaXMubWFrZVByZWRpY3Qoc2FtcGxlVGVuc29yLCB0ZXN0QmF0Y2hTaXplKTtcbiAgICAgICAgICAgIGxldCBvbmVob3RQcmVkaWN0ID0gVC5vbmVIb3QocHJlZGljdCwgbnVtQ2xhc3Nlcyk7XG4gICAgICAgICAgICBvbmVob3RQcmVkaWN0LnByaW50KCk7XG4gICAgICAgICAgICBsYWJlbFRlbnNvci5wcmludCgpO1xuICAgICAgICAgICAgb25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpLnByaW50KCk7XG4gICAgICAgICAgICB0ZXN0UmVzdWx0ID0gdGVzdFJlc3VsdC5hZGQob25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGVzdFJlc3VsdC5kYXRhKCk7XG4gICAgICAgIGxldCBwYXNzID0gcmVzdWx0WzBdO1xuICAgICAgICBsZXQgYWNjdXJhY3kgPSBwYXNzL3Rlc3RCYXRjaFNpemU7XG4gICAgICAgIHJldHVybiB7YWNjdXJhY3ksIHBhc3N9OyAgICAgICAgXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UGFyYW1zKGFzT2JqZWN0PXRydWUpe1xuICAgICAgICBjb25zdCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBnZXRQYXJhbXMgPSBhc3luYyAocGFyYW1zKT0+e1xuICAgICAgICAgICAgaWYoRi5pc1RlbnNvcihwYXJhbXMpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhd2FpdCBwYXJhbXMuZGF0YSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IGtWYWxzID0gUi50b1BhaXJzKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW2ssIHZhbF0gb2Yga1ZhbHMpe1xuICAgICAgICAgICAgICAgICAgICByZXNba10gPSBhd2FpdCBnZXRQYXJhbXModmFsKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBwYXJhbXMgPSBhd2FpdCBnZXRQYXJhbXModGhpcy5uZXRQYXJhbXMpO1xuICAgICAgICBpZihhc09iamVjdCl7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBzYXZlUGFyYW1zKGZpbGVOYW1lPScuL3NhdmUubW9kZWwnKXtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gYXdhaXQgdGhpcy5nZXRQYXJhbXMoKTtcbiAgICAgICAgY29uc29sZS5sb2coe3BhcmFtc30pO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLndyaXRlRmlsZShmaWxlTmFtZSwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICBsZXQgX3BhcmFtcyA9IGF3YWl0IHRoaXMuc3RvcmFnZS5yZWFkRmlsZShmaWxlTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtfcGFyYW1zfSk7XG4gICAgICAgIGxldCBwYXJhbXMgPSBKU09OLnBhcnNlKF9wYXJhbXMpO1xuICAgICAgICB0aGlzLnNldE9ySW5pdFBhcmFtcyh0aGlzLkJhc2VQaXBlbGluZSwgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0UGFyYW1zKGZhbHNlKTtcbiAgICB9XG59IiwiaW1wb3J0IHtGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb259IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgQmFzZUZ1bmN0aW9ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaXNUZW5zb3IodmFsKXtcbiAgICAgICAgLy8gcmV0dXJuIHZhbCBpbnN0YW5jZW9mIHRoaXMmJiBcbiAgICAgICAgcmV0dXJuIHZhbC5zaGFwZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByYW5nZShsZW4pe1xuICAgICAgICByZXR1cm4gdGhpcy5SLnJhbmdlKDAsIGxlbik7XG4gICAgfVxuXG4gICAgaXNQYXJhbWV0ZXIodmFsKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuaXMoQXJyYXkpKHZhbCkgJiYgUi5hbGwoUi5pcyhOdW1iZXIpLCB2YWwpO1xuICAgIH1cblxuICAgIGdldFBpcGVsaW5lKG5ldENvbmZpZyl7XG4gICAgICAgIC8vVE9ETzogbWFrZSBhc3NlcnRvclxuICAgICAgICByZXR1cm4gdGhpcy5SLnByb3AoJ1BpcGVsaW5lJywgbmV0Q29uZmlnKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0SHlwZXJQYXJhbWV0ZXIobmV0Q29uZmlnKXtcbiAgICAgICAgLy9UT0RPOiBtYWtlIGFzc2VydG9yXG4gICAgICAgIHJldHVybiB0aGlzLlIucHJvcCgnSHlwZXJQYXJhbWV0ZXJzJywgbmV0Q29uZmlnKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0VHJhdmVyc2UoKXtcbiAgICAgICAgcmV0dXJuIFIuY3VycnkoZnVuY3Rpb24oa2V5cywgaXRlbSl7XG4gICAgICAgICAgICBSLnBpcGUuYXBwbHkobnVsbCwgUi5tYXAoUi5wcm9wLCBrZXlzKSkoaXRlbSk7XG4gICAgICAgIH0pOyBcbiAgICB9XG4gICAgXG4gICAgcGFyYW1ldGVyQWNxdWlzaXRpb24ocGlwZWxpbmVJdGVtLCBoeXBlclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SOyBcbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZUlmTWF0Y2godmFsdWUsIGh5cGVyUGFyYW1ldGVycyl7XG4gICAgICAgICAgICBpZihSLmlzKFN0cmluZywgdmFsdWUpICYmIFIuc3RhcnRzV2l0aCgnJCcsIHZhbHVlKSl7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gUi5zbGljZSgxLCBJbmZpbml0eSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSLnByb3Aoa2V5LCBoeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRvUmVwbGFjZUlmTWF0Y2ggPSBSLmN1cnJ5KHJlcGxhY2VJZk1hdGNoKShSLl9fLCBoeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICBmdW5jdGlvbiByZXBsYWNlSHlwZXJQYXJhbWV0ZXIocGlwZWxpbmVJdGVtKXtcbiAgICAgICAgICAgIGlmKFIuaXMoQXJyYXksIHBpcGVsaW5lSXRlbSkgfHwgUi5pcyhPYmplY3QsIHBpcGVsaW5lSXRlbSkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBSLm1hcChyZXBsYWNlSHlwZXJQYXJhbWV0ZXIsIHBpcGVsaW5lSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkb1JlcGxhY2VJZk1hdGNoKHBpcGVsaW5lSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcGxhY2VIeXBlclBhcmFtZXRlcihwaXBlbGluZUl0ZW0pO1xuICAgIH1cblxuICAgIGlzVGVuc29yKG9iamVjdCl7XG4gICAgICAgIHJldHVybiBvYmplY3Quc2l6ZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zaGFwZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kdHlwZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=