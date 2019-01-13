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

    async getParams() {
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

      return await getParams(this.netParams);
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
      return await this.getParams();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxpdHkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIl0sIm5hbWVzIjpbIkNhdXNhbE5ldCIsIlRlbnNvciIsImNvbnN0cnVjdG9yIiwibmV0Q29uZmlnIiwibmV0UGFyYW1zIiwic3RvcmFnZSIsIkYiLCJGdW5jdGlvbiIsIlIiLCJDb3JlRnVuY3Rpb24iLCJJbmRleERCU3RvcmFnZSIsIkh5cGVyUGFyYW1ldGVycyIsImdldEh5cGVyUGFyYW1ldGVyIiwiQmFzZVBpcGVsaW5lIiwiZ2V0UGlwZWxpbmUiLCJzZXRPckluaXRQYXJhbXMiLCJmbGF0dGVuUGFyYW1zIiwicGFyYW1zIiwiTWFwVmFsdWVzIiwib2JqT3JBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsIkZsYXR0ZW4iLCJwdiIsImlzVGVuc29yIiwiZmxhdHRlbiIsInJlZHVjZSIsInYiLCJyZXMiLCJpcyIsImxheWVyIiwidmFsdWUiLCJsYXllckNvbmZpZ3VyZSIsImxheWVyUGFyYW1ldGVycyIsIk5hbWUiLCJUeXBlIiwiUGFyYW1ldGVycyIsIkZsb3ciLCJjb25zb2xlIiwibG9nIiwiT3BzUnVuZXIiLCJhZGRJbmRleCIsIl9fIiwicmVzdWx0IiwidHJhY2UiLCJub2RlIiwiaWR4IiwiUGFyYW1ldGVyIiwiVCIsIk9wIiwiQXJncyIsInNoYXBlIiwicGlwZWxpbmUiLCJwaXBlUGFyYW1zIiwiZnJvbVBhaXJzIiwiZmlsdGVyIiwiayIsInVuZGVmaW5lZCIsIm1hcCIsInAiLCJTZXRPckluaXQiLCJtYWluVmFsdWUiLCJzdWJWYWwiLCJrZXlzIiwia2V5TWFpblZhbFN1YlZhbCIsInByb3AiLCJwcm9wT3IiLCJWYWxNYXBwaW5nIiwia2V5IiwibWFpblZhbCIsImlzUGFyYW1ldGVyIiwicGFyYW1TaGFwZSIsImlzTmlsIiwidmFyaWFibGUiLCJyYW5kb21Ob3JtYWwiLCJ0ZW5zb3IiLCJyZXNoYXBlIiwibWFrZVByZWRpY3QiLCJzYW1wbGVzIiwibnVtU2FtcGxlcyIsImYiLCJsIiwiTCIsIkRhdGFzaXplIiwiUGlwZWxpbmUiLCJwYXJhbWV0ZXJBY3F1aXNpdGlvbiIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsInRyYWNlcyIsInRpZHkiLCJsYXllck91dHB1dCIsIklucHV0IiwicHVzaCIsInBpcGVPdXRwdXQiLCJsb2dQcm9iIiwic3ViIiwibG9nU3VtRXhwIiwicHJlZGljdCIsImFyZ01heCIsImxvc3MiLCJiYXRjaFNhbXBsZXMiLCJiYXRjaExhYmVscyIsIm51bVNhbXBsZSIsImxhYmVsVGVuc29yIiwic2FtcGxlVGVuc29yIiwiYXNUeXBlIiwibGlrZWxpaG9vZCIsIm5lZyIsIm11bCIsIm1lYW4iLCJ0cmFpbiIsIlNhbXBsZUdlbmVyYXRvckZuIiwiYmF0Y2hTaXplIiwibnVtRXBvY2hzIiwibHIiLCJzdGFydCIsIkRhdGUiLCJhdmVyYWdlTG9zcyIsIm9wdGltaXplciIsImFkYW0iLCJlcG9jaElkeCIsInJhbmdlIiwidGltZSIsInRvSVNPU3RyaW5nIiwiZWxhcHNlIiwic2FtcGxlR2VuZXJhdG9yIiwibWluaW1pemUiLCJkYXRhU3luYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGVzdCIsIlRlc3RTYW1wbGVHZW5lcmF0b3JGbiIsInRlc3RCYXRjaFNpemUiLCJudW1DbGFzc2VzIiwidGVzdFNhbXBsZUdlbmVyYXRvciIsInRlc3RSZXN1bHQiLCJ6ZXJvcyIsIm9uZWhvdFByZWRpY3QiLCJvbmVIb3QiLCJwcmludCIsInN1bSIsImFkZCIsImRhdGEiLCJwYXNzIiwiYWNjdXJhY3kiLCJnZXRQYXJhbXMiLCJmcm9tIiwia1ZhbHMiLCJ0b1BhaXJzIiwidmFsIiwic2F2ZVBhcmFtcyIsImZpbGVOYW1lIiwid3JpdGVGaWxlIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvYWRQYXJhbXMiLCJfcGFyYW1zIiwicmVhZEZpbGUiLCJwYXJzZSIsIkJhc2VGdW5jdGlvbiIsImxlbiIsImFsbCIsIk51bWJlciIsImdldFRyYXZlcnNlIiwiY3VycnkiLCJpdGVtIiwicGlwZSIsImFwcGx5IiwicGlwZWxpbmVJdGVtIiwiaHlwZXJQYXJhbWV0ZXJzIiwicmVwbGFjZUlmTWF0Y2giLCJTdHJpbmciLCJzdGFydHNXaXRoIiwic2xpY2UiLCJJbmZpbml0eSIsImRvUmVwbGFjZUlmTWF0Y2giLCJyZXBsYWNlSHlwZXJQYXJhbWV0ZXIiLCJvYmplY3QiLCJzaXplIiwiZHR5cGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGZSxRQUFNQSxTQUFOLFNBQXdCQyxpQkFBeEIsQ0FBOEI7QUFDekM7Ozs7QUFJQUMsZUFBVyxDQUFFQyxTQUFGLEVBQWFDLFNBQVMsR0FBQyxJQUF2QixFQUE2QkMsT0FBTyxHQUFDLElBQXJDLEVBQTJDO0FBQ2xEO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTLElBQUlDLGlCQUFKLEVBQVQ7QUFDQSxXQUFLQyxDQUFMLEdBQVMsS0FBS0YsQ0FBTCxDQUFPRyxZQUFoQjtBQUNBLFdBQUtKLE9BQUwsR0FBZUEsT0FBTyxJQUFJSywwQkFBMUI7QUFDQSxXQUFLQyxlQUFMLEdBQXVCLEtBQUtMLENBQUwsQ0FBT00saUJBQVAsQ0FBeUJULFNBQXpCLENBQXZCO0FBQ0EsV0FBS1UsWUFBTCxHQUFvQixLQUFLUCxDQUFMLENBQU9RLFdBQVAsQ0FBbUJYLFNBQW5CLENBQXBCO0FBQ0EsV0FBS0MsU0FBTCxHQUFpQixLQUFLVyxlQUFMLENBQXFCLEtBQUtGLFlBQTFCLEVBQXdDVCxTQUF4QyxDQUFqQjtBQUNBLFdBQUtZLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQixLQUFLWixTQUF4QixDQUFyQjtBQUNIOztBQUVEWSxpQkFBYSxDQUFDQyxNQUFELEVBQVE7QUFDakIsWUFBTVQsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxZQUFrQkYsQ0FBQyxHQUFHLEtBQUtBLENBQTNCOztBQUNBLFlBQU1ZLFNBQVMsR0FBSUMsVUFBRCxJQUFjQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsVUFBZCxJQUEwQkEsVUFBMUIsR0FBcUNHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixVQUFkLENBQXJFOztBQUNBLFlBQU1LLE9BQU8sR0FBSUMsRUFBRCxJQUFNO0FBQ2xCLFlBQUduQixDQUFDLENBQUNvQixRQUFGLENBQVdELEVBQVgsQ0FBSCxFQUFrQjtBQUNkLGlCQUFPQSxFQUFQO0FBQ0gsU0FGRCxNQUdJO0FBQ0EsY0FBSUYsTUFBTSxHQUFHTCxTQUFTLENBQUNPLEVBQUQsQ0FBdEI7QUFDQSxjQUFJRSxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjLENBQUNELE9BQUQsRUFBVUUsQ0FBVixLQUFjO0FBQ3RDLGdCQUFJQyxHQUFHLEdBQUdOLE9BQU8sQ0FBQ0ssQ0FBRCxDQUFqQjs7QUFDQSxnQkFBR3JCLENBQUMsQ0FBQ3VCLEVBQUYsQ0FBS1gsS0FBTCxFQUFZVSxHQUFaLENBQUgsRUFBb0I7QUFDaEJILHFCQUFPLEdBQUcsQ0FBQyxHQUFHQSxPQUFKLEVBQWEsR0FBR0csR0FBaEIsQ0FBVjtBQUNILGFBRkQsTUFHSTtBQUNBSCxxQkFBTyxHQUFHLENBQUMsR0FBR0EsT0FBSixFQUFhRyxHQUFiLENBQVY7QUFDSDs7QUFDRCxtQkFBT0gsT0FBUDtBQUNILFdBVGEsRUFTWCxFQVRXLENBQWQ7QUFVQSxpQkFBT0EsT0FBUDtBQUNIO0FBQ0osT0FsQkQ7O0FBbUJBLFVBQUlKLE1BQU0sR0FBR0wsU0FBUyxDQUFDRCxNQUFELENBQXRCO0FBRUEsYUFBT00sTUFBTSxDQUFDSyxNQUFQLENBQWMsQ0FBQ0QsT0FBRCxFQUFTRSxDQUFULEtBQWEsQ0FBQyxHQUFHRixPQUFKLEVBQWEsR0FBR0gsT0FBTyxDQUFDSyxDQUFELENBQXZCLENBQTNCLEVBQXVELEVBQXZELENBQVA7QUFDSDs7QUFFREcsU0FBSyxDQUFDQyxLQUFELEVBQVFDLGNBQVIsRUFBd0JDLGVBQXhCLEVBQXdDO0FBQ3pDLFlBQU0zQixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLFlBQU07QUFBQzRCLFlBQUQ7QUFBT0MsWUFBUDtBQUFhQyxrQkFBYjtBQUF5QkM7QUFBekIsVUFBaUNMLGNBQXZDO0FBQ0FNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNMLFlBQUQ7QUFBT0MsWUFBUDtBQUFhQyxrQkFBYjtBQUF5QkM7QUFBekIsT0FBWjtBQUNBLFlBQU1HLFFBQVEsR0FBR2xDLENBQUMsQ0FBQ21DLFFBQUYsQ0FBV25DLENBQUMsQ0FBQ29CLE1BQWIsRUFBcUJwQixDQUFDLENBQUNvQyxFQUF2QixFQUEwQjtBQUFDQyxjQUFNLEVBQUVaLEtBQVQ7QUFBZ0JhLGFBQUssRUFBRTtBQUF2QixPQUExQixFQUFzRFAsSUFBdEQsQ0FBakI7QUFDQSxVQUFJO0FBQUNNLGNBQUQ7QUFBU0M7QUFBVCxVQUFrQkosUUFBUSxDQUFDLENBQUM7QUFBQ0csY0FBRDtBQUFTQztBQUFULE9BQUQsRUFBa0JDLElBQWxCLEVBQXdCQyxHQUF4QixLQUE4QjtBQUN6RCxZQUFHRCxJQUFJLENBQUNFLFNBQVIsRUFBa0I7QUFDZEosZ0JBQU0sR0FBRyxLQUFLSyxDQUFMLENBQU9ILElBQUksQ0FBQ0ksRUFBWixFQUFnQk4sTUFBaEIsRUFBd0JWLGVBQWUsQ0FBQ1ksSUFBSSxDQUFDRSxTQUFOLENBQXZDLEVBQXlELEdBQUdGLElBQUksQ0FBQ0ssSUFBakUsQ0FBVDtBQUNILFNBRkQsTUFHSTtBQUNBUCxnQkFBTSxHQUFHLEtBQUtLLENBQUwsQ0FBT0gsSUFBSSxDQUFDSSxFQUFaLEVBQWdCTixNQUFoQixFQUF3QixHQUFHRSxJQUFJLENBQUNLLElBQWhDLENBQVQ7QUFDSDs7QUFBQTtBQUNETixhQUFLLENBQUNFLEdBQUQsQ0FBTCxHQUFhSCxNQUFNLENBQUNRLEtBQXBCO0FBQ0EsZUFBTztBQUFDUixnQkFBRDtBQUFTQztBQUFULFNBQVA7QUFDSCxPQVQ2QixDQUE5QjtBQVVBLGFBQU87QUFBQyxTQUFDVixJQUFELEdBQVFTLE1BQVQ7QUFBaUJDO0FBQWpCLE9BQVA7QUFDSDs7QUFFRC9CLG1CQUFlLENBQUN1QyxRQUFELEVBQVdsRCxTQUFYLEVBQXFCO0FBQ2hDLFlBQU1JLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQUEsWUFBa0IwQyxDQUFDLEdBQUcsS0FBS0EsQ0FBM0I7QUFBQSxZQUE4QjVDLENBQUMsR0FBRyxLQUFLQSxDQUF2QztBQUNBLFVBQUlpRCxVQUFVLEdBQUcvQyxDQUFDLENBQUNnRCxTQUFGLENBQVloRCxDQUFDLENBQUNpRCxNQUFGLENBQVMsQ0FBQyxDQUFDQyxDQUFELEVBQUc3QixDQUFILENBQUQsS0FBU0EsQ0FBQyxLQUFLOEIsU0FBeEIsRUFDTG5ELENBQUMsQ0FBQ29ELEdBQUYsQ0FBTXBELENBQUMsQ0FBQ29DLEVBQVIsRUFBWVUsUUFBWixFQUFzQk8sQ0FBQyxJQUFFLENBQUNBLENBQUMsQ0FBQ3pCLElBQUgsRUFBU3lCLENBQUMsQ0FBQ3ZCLFVBQVgsQ0FBekIsQ0FESyxDQUFaLENBQWpCOztBQUVBLFlBQU13QixTQUFTLEdBQUcsQ0FBQ0MsU0FBRCxFQUFZQyxNQUFaLEtBQXFCO0FBQ25DLFlBQUlDLElBQUksR0FBR3pELENBQUMsQ0FBQ3lELElBQUYsQ0FBT0YsU0FBUCxDQUFYO0FBQ0EsWUFBSUcsZ0JBQWdCLEdBQUcxRCxDQUFDLENBQUNvRCxHQUFGLENBQU9GLENBQUQsSUFBTSxDQUFDQSxDQUFELEVBQUlsRCxDQUFDLENBQUMyRCxJQUFGLENBQU9ULENBQVAsRUFBVUssU0FBVixDQUFKLEVBQTBCdkQsQ0FBQyxDQUFDNEQsTUFBRixDQUFTLElBQVQsRUFBZVYsQ0FBZixFQUFrQk0sTUFBbEIsQ0FBMUIsQ0FBWixFQUFrRUMsSUFBbEUsQ0FBdkI7O0FBQ0EsY0FBTUksVUFBVSxHQUFHLENBQUMsQ0FBQ0MsR0FBRCxFQUFNQyxPQUFOLEVBQWVQLE1BQWYsQ0FBRCxLQUEwQjtBQUN6QyxjQUFHMUQsQ0FBQyxDQUFDa0UsV0FBRixDQUFjRCxPQUFkLENBQUgsRUFBMEI7QUFDdEIsa0JBQU1FLFVBQVUsR0FBR0YsT0FBbkI7O0FBQ0EsZ0JBQUcvRCxDQUFDLENBQUNrRSxLQUFGLENBQVFWLE1BQVIsQ0FBSCxFQUFtQjtBQUNmLHFCQUFPLENBQUNNLEdBQUQsRUFBTXBCLENBQUMsQ0FBQ3lCLFFBQUYsQ0FBV3pCLENBQUMsQ0FBQzBCLFlBQUYsQ0FBZUgsVUFBZixDQUFYLENBQU4sQ0FBUDtBQUNILGFBRkQsTUFHSTtBQUNBLHFCQUFPLENBQUNILEdBQUQsRUFBTXBCLENBQUMsQ0FBQ3lCLFFBQUYsQ0FBV3pCLENBQUMsQ0FBQzJCLE1BQUYsQ0FBU2IsTUFBVCxFQUFpQmMsT0FBakIsQ0FBeUJMLFVBQXpCLENBQVgsQ0FBTixDQUFQO0FBQ0g7QUFDSixXQVJELE1BU0k7QUFDQSxtQkFBTyxDQUFDSCxHQUFELEVBQU1SLFNBQVMsQ0FBQ1MsT0FBRCxFQUFVUCxNQUFWLENBQWYsQ0FBUDtBQUNIO0FBQ0osU0FiRDs7QUFjQSxlQUFPeEQsQ0FBQyxDQUFDZ0QsU0FBRixDQUFZaEQsQ0FBQyxDQUFDb0QsR0FBRixDQUFNUyxVQUFOLEVBQWtCSCxnQkFBbEIsQ0FBWixDQUFQO0FBQ0gsT0FsQkQ7O0FBbUJBLGFBQU9KLFNBQVMsQ0FBQ1AsVUFBRCxFQUFhbkQsU0FBYixDQUFoQjtBQUNIO0FBRUQ7Ozs7OztBQUlBMkUsZUFBVyxDQUFDQyxPQUFELEVBQVVDLFVBQVUsR0FBQyxDQUFyQixFQUF1QjtBQUM5QixZQUFNL0IsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFBQSxZQUFrQmdDLENBQUMsR0FBRyxLQUFLNUUsQ0FBM0I7QUFBQSxZQUE4QjZFLENBQUMsR0FBRyxLQUFLQyxDQUF2QztBQUNBLFdBQUt6RSxlQUFMLENBQXFCMEUsUUFBckIsR0FBZ0NKLFVBQWhDO0FBQ0EsWUFBTUssUUFBUSxHQUFHSixDQUFDLENBQUNLLG9CQUFGLENBQXVCLEtBQUsxRSxZQUE1QixFQUEwQyxLQUFLRixlQUEvQyxDQUFqQjtBQUNBNkIsYUFBTyxDQUFDQyxHQUFSLENBQWE7QUFBQzZDO0FBQUQsT0FBYjtBQUNBLFVBQUlFLFNBQVMsR0FBRztBQUFDQyxpQkFBUyxFQUFFVDtBQUFaLE9BQWhCO0FBQUEsVUFBc0NVLE1BQU0sR0FBRyxFQUEvQztBQUFBLFVBQW1EdEYsU0FBUyxHQUFHLEtBQUtBLFNBQXBFO0FBQ0EsYUFBTzhDLENBQUMsQ0FBQ3lDLElBQUYsQ0FBTyxNQUFJO0FBQ2QsYUFBSSxJQUFJM0QsS0FBUixJQUFpQnNELFFBQWpCLEVBQTBCO0FBQ3RCLGNBQUlNLFdBQVcsR0FBRyxLQUFLNUQsS0FBTCxDQUFXd0QsU0FBUyxDQUFDeEQsS0FBSyxDQUFDNkQsS0FBUCxDQUFwQixFQUFtQzdELEtBQW5DLEVBQTBDNUIsU0FBUyxDQUFDNEIsS0FBSyxDQUFDSSxJQUFQLENBQW5ELENBQWxCO0FBQ0FvRCxtQkFBUyxDQUFDeEQsS0FBSyxDQUFDSSxJQUFQLENBQVQsR0FBd0J3RCxXQUFXLENBQUM1RCxLQUFLLENBQUNJLElBQVAsQ0FBbkM7QUFDQXNELGdCQUFNLENBQUNJLElBQVAsQ0FBWTtBQUFDLGFBQUM5RCxLQUFLLENBQUNJLElBQVAsR0FBY3dELFdBQVcsQ0FBQzlDO0FBQTNCLFdBQVo7QUFDSDs7QUFDRE4sZUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ2lEO0FBQUQsU0FBWjtBQUNBLFlBQUlLLFVBQVUsR0FBR1AsU0FBUyxDQUFDLFlBQUQsQ0FBMUI7QUFDQSxZQUFJUSxPQUFPLEdBQUdELFVBQVUsQ0FBQ0UsR0FBWCxDQUFlL0MsQ0FBQyxDQUFDZ0QsU0FBRixDQUFZSCxVQUFaLEVBQXdCLENBQXhCLEVBQTJCLElBQTNCLENBQWYsQ0FBZDtBQUNBLFlBQUlJLE9BQU8sR0FBR0gsT0FBTyxDQUFDSSxNQUFSLENBQWUsQ0FBZixDQUFkO0FBQ0EsZUFBTztBQUFDSixpQkFBRDtBQUFVRztBQUFWLFNBQVA7QUFDSCxPQVhNLENBQVA7QUFZSDtBQUNEOzs7Ozs7O0FBS0FFLFFBQUksQ0FBQ0MsWUFBRCxFQUFlQyxXQUFmLEVBQTRCQyxTQUE1QixFQUFzQztBQUN0QyxZQUFNdEQsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxVQUFJdUQsV0FBVyxHQUFJdkQsQ0FBQyxDQUFDMkIsTUFBRixDQUFTMEIsV0FBVCxFQUFzQnpCLE9BQXRCLENBQThCLENBQUMwQixTQUFELEVBQVksQ0FBQyxDQUFiLENBQTlCLENBQW5CO0FBQ0EsVUFBSUUsWUFBWSxHQUFHeEQsQ0FBQyxDQUFDMkIsTUFBRixDQUFTeUIsWUFBVCxFQUF1QkssTUFBdkIsQ0FBOEIsU0FBOUIsQ0FBbkI7QUFDQSxZQUFNO0FBQUNYO0FBQUQsVUFBWSxLQUFLakIsV0FBTCxDQUFpQjJCLFlBQWpCLEVBQStCRixTQUEvQixDQUFsQjtBQUNBLFlBQU1JLFVBQVUsR0FBR1osT0FBTyxDQUFDYSxHQUFSLEdBQWNDLEdBQWQsQ0FBa0JMLFdBQWxCLENBQW5CO0FBQ0EsWUFBTUosSUFBSSxHQUFHTyxVQUFVLENBQUNHLElBQVgsRUFBYjtBQUNBLGFBQU9WLElBQVA7QUFDSDs7QUFDRDs7Ozs7O0FBTUEsVUFBTVcsS0FBTixDQUFZQyxpQkFBWixFQUErQkMsU0FBL0IsRUFBMENDLFNBQVMsR0FBRyxDQUF0RCxFQUF5REMsRUFBRSxHQUFDLEtBQTVELEVBQWtFO0FBQzlELFlBQU1sRSxDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFlBQWtCNUMsQ0FBQyxHQUFHLEtBQUtBLENBQTNCO0FBQUEsWUFBOEJFLENBQUMsR0FBRyxLQUFLQSxDQUF2QztBQUNBLFlBQU02RyxLQUFLLEdBQUcsSUFBSUMsSUFBSixFQUFkO0FBQ0EsVUFBSWpCLElBQUksR0FBRyxFQUFYO0FBQUEsVUFBZWtCLFdBQVcsR0FBRyxFQUE3QjtBQUNBLFlBQU1DLFNBQVMsR0FBR3RFLENBQUMsQ0FBQzhELEtBQUYsQ0FBUVMsSUFBUixDQUFhTCxFQUFiLENBQWxCOztBQUNBLFdBQUksSUFBSU0sUUFBUixJQUFvQnBILENBQUMsQ0FBQ3FILEtBQUYsQ0FBUVIsU0FBUixDQUFwQixFQUF1QztBQUNuQzNFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNpRixrQkFBRDtBQUFXSCxxQkFBWDtBQUF3QkssY0FBSSxFQUFFLElBQUlOLElBQUosR0FBV08sV0FBWCxFQUE5QjtBQUNDUixlQUFLLEVBQUVBLEtBQUssQ0FBQ1EsV0FBTixFQURSO0FBQzZCQyxnQkFBTSxFQUFFLENBQUMsSUFBSVIsSUFBSixLQUFhRCxLQUFkLElBQXFCO0FBRDFELFNBQVo7QUFFQSxjQUFNVSxlQUFlLEdBQUdkLGlCQUFpQixDQUFDQyxTQUFELENBQXpDOztBQUNBLG1CQUFXLElBQUksQ0FBQ1osWUFBRCxFQUFlQyxXQUFmLENBQWYsSUFBOEN3QixlQUE5QyxFQUE4RDtBQUMxRFAsbUJBQVMsQ0FBQ1EsUUFBVixDQUFtQixNQUFJO0FBQ25CLGdCQUFJN0MsQ0FBQyxHQUFHLEtBQUtrQixJQUFMLENBQVVDLFlBQVYsRUFBd0JDLFdBQXhCLEVBQXFDVyxTQUFyQyxDQUFSO0FBQ0FiLGdCQUFJLEdBQUcsQ0FBQyxHQUFHQSxJQUFKLEVBQVUsR0FBR2xCLENBQUMsQ0FBQzhDLFFBQUYsRUFBYixDQUFQO0FBQ0F6RixtQkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQzREO0FBQUQsYUFBWjtBQUNBLG1CQUFPbEIsQ0FBQyxDQUFDd0IsTUFBRixDQUFTLFNBQVQsQ0FBUDtBQUNILFdBTEQ7QUFNSDs7QUFDRFksbUJBQVcsR0FBRyxDQUFDLEdBQUdBLFdBQUosRUFBaUIvRyxDQUFDLENBQUN1RyxJQUFGLENBQU9WLElBQVAsQ0FBakIsQ0FBZDtBQUNBQSxZQUFJLEdBQUcsRUFBUDtBQUNIOztBQUNELGFBQU8sSUFBSTZCLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBbUI7QUFDbENELGVBQU8sQ0FBQztBQUFDWjtBQUFELFNBQUQsQ0FBUDtBQUNILE9BRk0sQ0FBUDtBQUdIOztBQUVELFVBQU1jLElBQU4sQ0FBV0MscUJBQVgsRUFBa0NDLGFBQWxDLEVBQWlEQyxVQUFVLEdBQUMsRUFBNUQsRUFBK0Q7QUFDM0QsWUFBTXRGLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQUEsWUFBa0I1QyxDQUFDLEdBQUcsS0FBS0EsQ0FBM0I7QUFBQSxZQUE4QkUsQ0FBQyxHQUFHLEtBQUtBLENBQXZDO0FBQ0EsWUFBTWlJLG1CQUFtQixHQUFHSCxxQkFBcUIsQ0FBQ0MsYUFBRCxDQUFqRDtBQUNBLFVBQUlHLFVBQVUsR0FBR3hGLENBQUMsQ0FBQ3lGLEtBQUYsQ0FBUSxDQUFDLENBQUQsQ0FBUixDQUFqQjs7QUFDQSxpQkFBVyxJQUFJLENBQUNyQyxZQUFELEVBQWVDLFdBQWYsQ0FBZixJQUE4Q2tDLG1CQUE5QyxFQUFrRTtBQUM5RCxZQUFJaEMsV0FBVyxHQUFJdkQsQ0FBQyxDQUFDMkIsTUFBRixDQUFTMEIsV0FBVCxFQUFzQnpCLE9BQXRCLENBQThCLENBQUN5RCxhQUFELEVBQWdCQyxVQUFoQixDQUE5QixDQUFuQjtBQUNBLFlBQUk5QixZQUFZLEdBQUd4RCxDQUFDLENBQUMyQixNQUFGLENBQVN5QixZQUFULEVBQXVCSyxNQUF2QixDQUE4QixTQUE5QixDQUFuQjtBQUNBLGNBQU07QUFBQ1I7QUFBRCxZQUFZLEtBQUtwQixXQUFMLENBQWlCMkIsWUFBakIsRUFBK0I2QixhQUEvQixDQUFsQjtBQUNBLFlBQUlLLGFBQWEsR0FBRzFGLENBQUMsQ0FBQzJGLE1BQUYsQ0FBUzFDLE9BQVQsRUFBa0JxQyxVQUFsQixDQUFwQjtBQUNBSSxxQkFBYSxDQUFDRSxLQUFkO0FBQ0FyQyxtQkFBVyxDQUFDcUMsS0FBWjtBQUNBRixxQkFBYSxDQUFDOUIsR0FBZCxDQUFrQkwsV0FBbEIsRUFBK0JzQyxHQUEvQixHQUFxQ0QsS0FBckM7QUFDQUosa0JBQVUsR0FBR0EsVUFBVSxDQUFDTSxHQUFYLENBQWVKLGFBQWEsQ0FBQzlCLEdBQWQsQ0FBa0JMLFdBQWxCLEVBQStCc0MsR0FBL0IsRUFBZixDQUFiO0FBQ0g7O0FBQ0QsVUFBSWxHLE1BQU0sR0FBRyxNQUFNNkYsVUFBVSxDQUFDTyxJQUFYLEVBQW5CO0FBQ0EsVUFBSUMsSUFBSSxHQUFHckcsTUFBTSxDQUFDLENBQUQsQ0FBakI7QUFDQSxVQUFJc0csUUFBUSxHQUFHRCxJQUFJLEdBQUNYLGFBQXBCO0FBQ0EsYUFBTztBQUFDWSxnQkFBRDtBQUFXRDtBQUFYLE9BQVA7QUFDSDs7QUFFRCxVQUFNRSxTQUFOLEdBQWlCO0FBQ2IsWUFBTTlJLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQUEsWUFBa0JFLENBQUMsR0FBRyxLQUFLQSxDQUEzQjs7QUFDQSxZQUFNNEksU0FBUyxHQUFHLE1BQU9uSSxNQUFQLElBQWdCO0FBQzlCLFlBQUdYLENBQUMsQ0FBQ29CLFFBQUYsQ0FBV1QsTUFBWCxDQUFILEVBQXNCO0FBQ2xCLGlCQUFPRyxLQUFLLENBQUNpSSxJQUFOLEVBQVcsTUFBTXBJLE1BQU0sQ0FBQ2dJLElBQVAsRUFBakIsRUFBUDtBQUNILFNBRkQsTUFHSTtBQUNBLGNBQUlLLEtBQUssR0FBRzlJLENBQUMsQ0FBQytJLE9BQUYsQ0FBVXRJLE1BQVYsQ0FBWjtBQUNBLGNBQUlhLEdBQUcsR0FBRyxFQUFWOztBQUNBLGVBQUksSUFBSSxDQUFDNEIsQ0FBRCxFQUFJOEYsR0FBSixDQUFSLElBQW9CRixLQUFwQixFQUEwQjtBQUN0QnhILGVBQUcsQ0FBQzRCLENBQUQsQ0FBSCxHQUFTLE1BQU0wRixTQUFTLENBQUNJLEdBQUQsQ0FBeEI7QUFDSDs7QUFDRCxpQkFBTzFILEdBQVA7QUFDSDtBQUNKLE9BWkQ7O0FBYUEsYUFBTyxNQUFNc0gsU0FBUyxDQUFDLEtBQUtoSixTQUFOLENBQXRCO0FBQ0g7O0FBRUQsVUFBTXFKLFVBQU4sQ0FBaUJDLFFBQVEsR0FBQyxjQUExQixFQUF5QztBQUNyQyxZQUFNekksTUFBTSxHQUFHLE1BQU0sS0FBS21JLFNBQUwsRUFBckI7QUFDQTVHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUN4QjtBQUFELE9BQVo7QUFDQSxhQUFPLE1BQU0sS0FBS1osT0FBTCxDQUFhc0osU0FBYixDQUF1QkQsUUFBdkIsRUFBaUNFLElBQUksQ0FBQ0MsU0FBTCxDQUFlNUksTUFBZixDQUFqQyxDQUFiO0FBQ0g7O0FBQ0QsVUFBTTZJLFVBQU4sQ0FBaUJKLFFBQWpCLEVBQTBCO0FBQ3RCLFVBQUlLLE9BQU8sR0FBRyxNQUFNLEtBQUsxSixPQUFMLENBQWEySixRQUFiLENBQXNCTixRQUF0QixDQUFwQjs7QUFDQWxILGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNzSDtBQUFELE9BQVo7QUFDQSxVQUFJOUksTUFBTSxHQUFHMkksSUFBSSxDQUFDSyxLQUFMLENBQVdGLE9BQVgsQ0FBYjtBQUNBLFdBQUtoSixlQUFMLENBQXFCLEtBQUtGLFlBQTFCLEVBQXdDSSxNQUF4QztBQUNBLGFBQU8sTUFBTSxLQUFLbUksU0FBTCxFQUFiO0FBQ0g7O0FBNU13Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGOUIsUUFBTTdJLFFBQU4sU0FBdUIySixtQkFBdkIsQ0FBbUM7QUFDOUNoSyxlQUFXLEdBQUU7QUFDVDtBQUNIOztBQUVEd0IsWUFBUSxDQUFDOEgsR0FBRCxFQUFLO0FBQ1Q7QUFDQSxhQUFPQSxHQUFHLENBQUNuRyxLQUFKLEtBQWNNLFNBQXJCO0FBQ0g7O0FBQ0RnRSxTQUFLLENBQUN3QyxHQUFELEVBQUs7QUFDTixhQUFPLEtBQUszSixDQUFMLENBQU9tSCxLQUFQLENBQWEsQ0FBYixFQUFnQndDLEdBQWhCLENBQVA7QUFDSDs7QUFFRDNGLGVBQVcsQ0FBQ2dGLEdBQUQsRUFBSztBQUNaLFlBQU1oSixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLGFBQU9BLENBQUMsQ0FBQ3VCLEVBQUYsQ0FBS1gsS0FBTCxFQUFZb0ksR0FBWixLQUFvQmhKLENBQUMsQ0FBQzRKLEdBQUYsQ0FBTTVKLENBQUMsQ0FBQ3VCLEVBQUYsQ0FBS3NJLE1BQUwsQ0FBTixFQUFvQmIsR0FBcEIsQ0FBM0I7QUFDSDs7QUFFRDFJLGVBQVcsQ0FBQ1gsU0FBRCxFQUFXO0FBQ2xCO0FBQ0EsYUFBTyxLQUFLSyxDQUFMLENBQU8yRCxJQUFQLENBQVksVUFBWixFQUF3QmhFLFNBQXhCLENBQVA7QUFDSDs7QUFFRFMscUJBQWlCLENBQUNULFNBQUQsRUFBVztBQUN4QjtBQUNBLGFBQU8sS0FBS0ssQ0FBTCxDQUFPMkQsSUFBUCxDQUFZLGlCQUFaLEVBQStCaEUsU0FBL0IsQ0FBUDtBQUNIOztBQUVEbUssZUFBVyxHQUFFO0FBQ1QsYUFBTzlKLENBQUMsQ0FBQytKLEtBQUYsQ0FBUSxVQUFTdEcsSUFBVCxFQUFldUcsSUFBZixFQUFvQjtBQUMvQmhLLFNBQUMsQ0FBQ2lLLElBQUYsQ0FBT0MsS0FBUCxDQUFhLElBQWIsRUFBbUJsSyxDQUFDLENBQUNvRCxHQUFGLENBQU1wRCxDQUFDLENBQUMyRCxJQUFSLEVBQWNGLElBQWQsQ0FBbkIsRUFBd0N1RyxJQUF4QztBQUNILE9BRk0sQ0FBUDtBQUdIOztBQUVEakYsd0JBQW9CLENBQUNvRixZQUFELEVBQWVDLGVBQWYsRUFBK0I7QUFDL0MsWUFBTXBLLENBQUMsR0FBRyxLQUFLQSxDQUFmOztBQUNBLGVBQVNxSyxjQUFULENBQXdCNUksS0FBeEIsRUFBK0IySSxlQUEvQixFQUErQztBQUMzQyxZQUFHcEssQ0FBQyxDQUFDdUIsRUFBRixDQUFLK0ksTUFBTCxFQUFhN0ksS0FBYixLQUF1QnpCLENBQUMsQ0FBQ3VLLFVBQUYsQ0FBYSxHQUFiLEVBQWtCOUksS0FBbEIsQ0FBMUIsRUFBbUQ7QUFDL0MsZ0JBQU1xQyxHQUFHLEdBQUc5RCxDQUFDLENBQUN3SyxLQUFGLENBQVEsQ0FBUixFQUFXQyxRQUFYLEVBQXFCaEosS0FBckIsQ0FBWjtBQUNBLGlCQUFPekIsQ0FBQyxDQUFDMkQsSUFBRixDQUFPRyxHQUFQLEVBQVlzRyxlQUFaLENBQVA7QUFDSDs7QUFDRCxlQUFPM0ksS0FBUDtBQUNIOztBQUNELFlBQU1pSixnQkFBZ0IsR0FBRzFLLENBQUMsQ0FBQytKLEtBQUYsQ0FBUU0sY0FBUixFQUF3QnJLLENBQUMsQ0FBQ29DLEVBQTFCLEVBQThCZ0ksZUFBOUIsQ0FBekI7O0FBQ0EsZUFBU08scUJBQVQsQ0FBK0JSLFlBQS9CLEVBQTRDO0FBQ3hDLFlBQUduSyxDQUFDLENBQUN1QixFQUFGLENBQUtYLEtBQUwsRUFBWXVKLFlBQVosS0FBNkJuSyxDQUFDLENBQUN1QixFQUFGLENBQUtULE1BQUwsRUFBYXFKLFlBQWIsQ0FBaEMsRUFBMkQ7QUFDdkQsaUJBQU9uSyxDQUFDLENBQUNvRCxHQUFGLENBQU11SCxxQkFBTixFQUE2QlIsWUFBN0IsQ0FBUDtBQUNILFNBRkQsTUFHSTtBQUNBLGlCQUFPTyxnQkFBZ0IsQ0FBQ1AsWUFBRCxDQUF2QjtBQUNIO0FBQ0o7O0FBQ0QsYUFBT1EscUJBQXFCLENBQUNSLFlBQUQsQ0FBNUI7QUFDSDs7QUFFRGpKLFlBQVEsQ0FBQzBKLE1BQUQsRUFBUTtBQUNaLGFBQU9BLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQjFILFNBQWhCLElBQTZCeUgsTUFBTSxDQUFDL0gsS0FBUCxLQUFpQk0sU0FBOUMsSUFBMkR5SCxNQUFNLENBQUNFLEtBQVAsS0FBaUIzSCxTQUFuRjtBQUNIOztBQXpENkM7Ozs7Ozs7Ozs7Ozs7O0FDRmxELDZEOzs7Ozs7Ozs7OztBQ0FBLGdFIiwiZmlsZSI6IkBjYXVzYWxOZXQvcGlwZWxpbmUvcGlwZWxpbmUubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9waXBlbGluZVwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2F1c2FsaXR5LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCB7VGVuc29yfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHtJbmRleERCU3RvcmFnZX0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBGdW5jdGlvbn0gZnJvbSAnLi9mdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdXNhbE5ldCBleHRlbmRzIFRlbnNvcntcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHt9IG5ldENvbmZpZ1xuICAgICAqIEBwYXJhbSAge30gbmV0UGFyYW1zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoIG5ldENvbmZpZywgbmV0UGFyYW1zPW51bGwsIHN0b3JhZ2U9bnVsbCApe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLkYgPSBuZXcgRnVuY3Rpb24oKTtcbiAgICAgICAgdGhpcy5SID0gdGhpcy5GLkNvcmVGdW5jdGlvbjtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gc3RvcmFnZSB8fCBJbmRleERCU3RvcmFnZTtcbiAgICAgICAgdGhpcy5IeXBlclBhcmFtZXRlcnMgPSB0aGlzLkYuZ2V0SHlwZXJQYXJhbWV0ZXIobmV0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5CYXNlUGlwZWxpbmUgPSB0aGlzLkYuZ2V0UGlwZWxpbmUobmV0Q29uZmlnKTtcbiAgICAgICAgdGhpcy5uZXRQYXJhbXMgPSB0aGlzLnNldE9ySW5pdFBhcmFtcyh0aGlzLkJhc2VQaXBlbGluZSwgbmV0UGFyYW1zKTtcbiAgICAgICAgdGhpcy5mbGF0dGVuUGFyYW1zID0gdGhpcy5mbGF0dGVuUGFyYW1zKHRoaXMubmV0UGFyYW1zKTsgICAgICAgIFxuICAgIH1cblxuICAgIGZsYXR0ZW5QYXJhbXMocGFyYW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgRiA9IHRoaXMuRjtcbiAgICAgICAgY29uc3QgTWFwVmFsdWVzID0gKG9iak9yQXJyYXkpPT5BcnJheS5pc0FycmF5KG9iak9yQXJyYXkpP29iak9yQXJyYXk6T2JqZWN0LnZhbHVlcyhvYmpPckFycmF5KTtcbiAgICAgICAgY29uc3QgRmxhdHRlbiA9IChwdik9PntcbiAgICAgICAgICAgIGlmKEYuaXNUZW5zb3IocHYpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBNYXBWYWx1ZXMocHYpO1xuICAgICAgICAgICAgICAgIGxldCBmbGF0dGVuID0gdmFsdWVzLnJlZHVjZSgoZmxhdHRlbiwgdik9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IEZsYXR0ZW4odik7XG4gICAgICAgICAgICAgICAgICAgIGlmKFIuaXMoQXJyYXksIHJlcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbiA9IFsuLi5mbGF0dGVuLCAuLi5yZXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuID0gWy4uLmZsYXR0ZW4sIHJlc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsYXR0ZW47XG4gICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmbGF0dGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgdmFsdWVzID0gTWFwVmFsdWVzKHBhcmFtcyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmFsdWVzLnJlZHVjZSgoZmxhdHRlbix2KT0+Wy4uLmZsYXR0ZW4sIC4uLkZsYXR0ZW4odildLFtdKTtcbiAgICB9XG5cbiAgICBsYXllcih2YWx1ZSwgbGF5ZXJDb25maWd1cmUsIGxheWVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IHtOYW1lLCBUeXBlLCBQYXJhbWV0ZXJzLCBGbG93fSA9IGxheWVyQ29uZmlndXJlO1xuICAgICAgICBjb25zb2xlLmxvZyh7TmFtZSwgVHlwZSwgUGFyYW1ldGVycywgRmxvd30pO1xuICAgICAgICBjb25zdCBPcHNSdW5lciA9IFIuYWRkSW5kZXgoUi5yZWR1Y2UpKFIuX18se3Jlc3VsdDogdmFsdWUsIHRyYWNlOiB7fX0sIEZsb3cpO1xuICAgICAgICB2YXIge3Jlc3VsdCwgdHJhY2V9ID0gT3BzUnVuZXIoKHtyZXN1bHQsIHRyYWNlfSwgbm9kZSwgaWR4KT0+e1xuICAgICAgICAgICAgaWYobm9kZS5QYXJhbWV0ZXIpe1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuVFtub2RlLk9wXShyZXN1bHQsIGxheWVyUGFyYW1ldGVyc1tub2RlLlBhcmFtZXRlcl0sIC4uLm5vZGUuQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuVFtub2RlLk9wXShyZXN1bHQsIC4uLm5vZGUuQXJncyk7ICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyYWNlW2lkeF0gPSByZXN1bHQuc2hhcGU7XG4gICAgICAgICAgICByZXR1cm4ge3Jlc3VsdCwgdHJhY2V9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtbTmFtZV06IHJlc3VsdCwgdHJhY2V9O1xuICAgIH1cblxuICAgIHNldE9ySW5pdFBhcmFtcyhwaXBlbGluZSwgbmV0UGFyYW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRjtcbiAgICAgICAgbGV0IHBpcGVQYXJhbXMgPSBSLmZyb21QYWlycyhSLmZpbHRlcigoW2ssdl0pPT52ICE9PSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFIubWFwKFIuX18sIHBpcGVsaW5lKShwPT5bcC5OYW1lLCBwLlBhcmFtZXRlcnNdKSkpO1xuICAgICAgICBjb25zdCBTZXRPckluaXQgPSAobWFpblZhbHVlLCBzdWJWYWwpPT57XG4gICAgICAgICAgICBsZXQga2V5cyA9IFIua2V5cyhtYWluVmFsdWUpO1xuICAgICAgICAgICAgbGV0IGtleU1haW5WYWxTdWJWYWwgPSBSLm1hcCgoayk9PiBbaywgUi5wcm9wKGssIG1haW5WYWx1ZSksIFIucHJvcE9yKG51bGwsIGssIHN1YlZhbCldLCBrZXlzKTtcbiAgICAgICAgICAgIGNvbnN0IFZhbE1hcHBpbmcgPSAoW2tleSwgbWFpblZhbCwgc3ViVmFsXSk9PntcbiAgICAgICAgICAgICAgICBpZihGLmlzUGFyYW1ldGVyKG1haW5WYWwpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1TaGFwZSA9IG1haW5WYWw7XG4gICAgICAgICAgICAgICAgICAgIGlmKFIuaXNOaWwoc3ViVmFsKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgVC52YXJpYWJsZShULnJhbmRvbU5vcm1hbChwYXJhbVNoYXBlKSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgVC52YXJpYWJsZShULnRlbnNvcihzdWJWYWwpLnJlc2hhcGUocGFyYW1TaGFwZSkpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgU2V0T3JJbml0KG1haW5WYWwsIHN1YlZhbCldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gUi5mcm9tUGFpcnMoUi5tYXAoVmFsTWFwcGluZywga2V5TWFpblZhbFN1YlZhbCkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gU2V0T3JJbml0KHBpcGVQYXJhbXMsIG5ldFBhcmFtcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBzYW1wbGVzXG4gICAgICogQHBhcmFtICB7fSBudW1TYW1wbGVzPTFcbiAgICAgKi9cbiAgICBtYWtlUHJlZGljdChzYW1wbGVzLCBudW1TYW1wbGVzPTEpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBmID0gdGhpcy5GLCBsID0gdGhpcy5MO1xuICAgICAgICB0aGlzLkh5cGVyUGFyYW1ldGVycy5EYXRhc2l6ZSA9IG51bVNhbXBsZXM7XG4gICAgICAgIGNvbnN0IFBpcGVsaW5lID0gZi5wYXJhbWV0ZXJBY3F1aXNpdGlvbih0aGlzLkJhc2VQaXBlbGluZSwgdGhpcy5IeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICBjb25zb2xlLmxvZygoe1BpcGVsaW5lfSkpO1xuICAgICAgICBsZXQgcGlwZVZhbHVlID0ge1BpcGVJbnB1dDogc2FtcGxlc30sIHRyYWNlcyA9IFtdLCBuZXRQYXJhbXMgPSB0aGlzLm5ldFBhcmFtcztcbiAgICAgICAgcmV0dXJuIFQudGlkeSgoKT0+e1xuICAgICAgICAgICAgZm9yKGxldCBsYXllciBvZiBQaXBlbGluZSl7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyT3V0cHV0ID0gdGhpcy5sYXllcihwaXBlVmFsdWVbbGF5ZXIuSW5wdXRdLCBsYXllciwgbmV0UGFyYW1zW2xheWVyLk5hbWVdKTtcbiAgICAgICAgICAgICAgICBwaXBlVmFsdWVbbGF5ZXIuTmFtZV0gPSBsYXllck91dHB1dFtsYXllci5OYW1lXTtcbiAgICAgICAgICAgICAgICB0cmFjZXMucHVzaCh7W2xheWVyLk5hbWVdOiBsYXllck91dHB1dC50cmFjZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coe3RyYWNlc30pO1xuICAgICAgICAgICAgbGV0IHBpcGVPdXRwdXQgPSBwaXBlVmFsdWVbJ1BpcGVPdXRwdXQnXTtcbiAgICAgICAgICAgIGxldCBsb2dQcm9iID0gcGlwZU91dHB1dC5zdWIoVC5sb2dTdW1FeHAocGlwZU91dHB1dCwgMSwgdHJ1ZSkpO1xuICAgICAgICAgICAgbGV0IHByZWRpY3QgPSBsb2dQcm9iLmFyZ01heCgxKTtcbiAgICAgICAgICAgIHJldHVybiB7bG9nUHJvYiwgcHJlZGljdH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHt9IHNhbXBsZUJhdGNoXG4gICAgICogQHBhcmFtICB7fSBsYWJlbEJhdGNoXG4gICAgICogQHBhcmFtICB7fSBudW1TYW1wbGVcbiAgICAgKi9cbiAgICBsb3NzKGJhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHMsIG51bVNhbXBsZSl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGxldCBsYWJlbFRlbnNvciAgPSBULnRlbnNvcihiYXRjaExhYmVscykucmVzaGFwZShbbnVtU2FtcGxlLCAtMV0pO1xuICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3IoYmF0Y2hTYW1wbGVzKS5hc1R5cGUoJ2Zsb2F0MzInKTsgXG4gICAgICAgIGNvbnN0IHtsb2dQcm9ifSA9IHRoaXMubWFrZVByZWRpY3Qoc2FtcGxlVGVuc29yLCBudW1TYW1wbGUpO1xuICAgICAgICBjb25zdCBsaWtlbGlob29kID0gbG9nUHJvYi5uZWcoKS5tdWwobGFiZWxUZW5zb3IpO1xuICAgICAgICBjb25zdCBsb3NzID0gbGlrZWxpaG9vZC5tZWFuKCk7XG4gICAgICAgIHJldHVybiBsb3NzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBTYW1wbGVHZW5lcmF0b3JGblxuICAgICAqIEBwYXJhbSAge30gYmF0Y2hTaXplXG4gICAgICogQHBhcmFtICB7fSBudW1FcG9jaHM9MlxuICAgICAqIEBwYXJhbSAge30gbHI9MC4wMVxuICAgICAqL1xuICAgIGFzeW5jIHRyYWluKFNhbXBsZUdlbmVyYXRvckZuLCBiYXRjaFNpemUsIG51bUVwb2NocyA9IDIsIGxyPTAuMDAxKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRiwgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgbG9zcyA9IFtdLCBhdmVyYWdlTG9zcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpbWl6ZXIgPSBULnRyYWluLmFkYW0obHIpO1xuICAgICAgICBmb3IobGV0IGVwb2NoSWR4IG9mIEYucmFuZ2UobnVtRXBvY2hzKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7ZXBvY2hJZHgsIGF2ZXJhZ2VMb3NzLCB0aW1lOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBzdGFydC50b0lTT1N0cmluZygpLCBlbGFwc2U6IChuZXcgRGF0ZSgpIC0gc3RhcnQpLzEwMDB9KTtcbiAgICAgICAgICAgIGNvbnN0IHNhbXBsZUdlbmVyYXRvciA9IFNhbXBsZUdlbmVyYXRvckZuKGJhdGNoU2l6ZSk7XG4gICAgICAgICAgICBmb3IgYXdhaXQgKGxldCBbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc10gb2Ygc2FtcGxlR2VuZXJhdG9yKXtcbiAgICAgICAgICAgICAgICBvcHRpbWl6ZXIubWluaW1pemUoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGwgPSB0aGlzLmxvc3MoYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVscywgYmF0Y2hTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgbG9zcyA9IFsuLi5sb3NzLCAuLi5sLmRhdGFTeW5jKCldO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7bG9zc30pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbC5hc1R5cGUoJ2Zsb2F0MzInKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF2ZXJhZ2VMb3NzID0gWy4uLmF2ZXJhZ2VMb3NzLCBSLm1lYW4obG9zcyldO1xuICAgICAgICAgICAgbG9zcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgcmVzb2x2ZSh7YXZlcmFnZUxvc3N9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGFzeW5jIHRlc3QoVGVzdFNhbXBsZUdlbmVyYXRvckZuLCB0ZXN0QmF0Y2hTaXplLCBudW1DbGFzc2VzPTEwKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgRiA9IHRoaXMuRiwgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgdGVzdFNhbXBsZUdlbmVyYXRvciA9IFRlc3RTYW1wbGVHZW5lcmF0b3JGbih0ZXN0QmF0Y2hTaXplKTtcbiAgICAgICAgbGV0IHRlc3RSZXN1bHQgPSBULnplcm9zKFsxXSk7XG4gICAgICAgIGZvciBhd2FpdCAobGV0IFtiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXSBvZiB0ZXN0U2FtcGxlR2VuZXJhdG9yKXtcbiAgICAgICAgICAgIGxldCBsYWJlbFRlbnNvciAgPSBULnRlbnNvcihiYXRjaExhYmVscykucmVzaGFwZShbdGVzdEJhdGNoU2l6ZSwgbnVtQ2xhc3Nlc10pO1xuICAgICAgICAgICAgbGV0IHNhbXBsZVRlbnNvciA9IFQudGVuc29yKGJhdGNoU2FtcGxlcykuYXNUeXBlKCdmbG9hdDMyJyk7IFxuICAgICAgICAgICAgY29uc3Qge3ByZWRpY3R9ID0gdGhpcy5tYWtlUHJlZGljdChzYW1wbGVUZW5zb3IsIHRlc3RCYXRjaFNpemUpO1xuICAgICAgICAgICAgbGV0IG9uZWhvdFByZWRpY3QgPSBULm9uZUhvdChwcmVkaWN0LCBudW1DbGFzc2VzKTtcbiAgICAgICAgICAgIG9uZWhvdFByZWRpY3QucHJpbnQoKTtcbiAgICAgICAgICAgIGxhYmVsVGVuc29yLnByaW50KCk7XG4gICAgICAgICAgICBvbmVob3RQcmVkaWN0Lm11bChsYWJlbFRlbnNvcikuc3VtKCkucHJpbnQoKTtcbiAgICAgICAgICAgIHRlc3RSZXN1bHQgPSB0ZXN0UmVzdWx0LmFkZChvbmVob3RQcmVkaWN0Lm11bChsYWJlbFRlbnNvcikuc3VtKCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0ZXN0UmVzdWx0LmRhdGEoKTtcbiAgICAgICAgbGV0IHBhc3MgPSByZXN1bHRbMF07XG4gICAgICAgIGxldCBhY2N1cmFjeSA9IHBhc3MvdGVzdEJhdGNoU2l6ZTtcbiAgICAgICAgcmV0dXJuIHthY2N1cmFjeSwgcGFzc307ICAgICAgICBcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQYXJhbXMoKXtcbiAgICAgICAgY29uc3QgRiA9IHRoaXMuRiwgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgZ2V0UGFyYW1zID0gYXN5bmMgKHBhcmFtcyk9PntcbiAgICAgICAgICAgIGlmKEYuaXNUZW5zb3IocGFyYW1zKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXdhaXQgcGFyYW1zLmRhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBrVmFscyA9IFIudG9QYWlycyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtrLCB2YWxdIG9mIGtWYWxzKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2tdID0gYXdhaXQgZ2V0UGFyYW1zKHZhbCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYXdhaXQgZ2V0UGFyYW1zKHRoaXMubmV0UGFyYW1zKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZT0nLi9zYXZlLm1vZGVsJyl7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZ2V0UGFyYW1zKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtwYXJhbXN9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZS53cml0ZUZpbGUoZmlsZU5hbWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgbGV0IF9wYXJhbXMgPSBhd2FpdCB0aGlzLnN0b3JhZ2UucmVhZEZpbGUoZmlsZU5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh7X3BhcmFtc30pO1xuICAgICAgICBsZXQgcGFyYW1zID0gSlNPTi5wYXJzZShfcGFyYW1zKTtcbiAgICAgICAgdGhpcy5zZXRPckluaXRQYXJhbXModGhpcy5CYXNlUGlwZWxpbmUsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFBhcmFtcygpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Z1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBCYXNlRnVuY3Rpb257XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBpc1RlbnNvcih2YWwpe1xuICAgICAgICAvLyByZXR1cm4gdmFsIGluc3RhbmNlb2YgdGhpcyYmIFxuICAgICAgICByZXR1cm4gdmFsLnNoYXBlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJhbmdlKGxlbil7XG4gICAgICAgIHJldHVybiB0aGlzLlIucmFuZ2UoMCwgbGVuKTtcbiAgICB9XG5cbiAgICBpc1BhcmFtZXRlcih2YWwpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5pcyhBcnJheSkodmFsKSAmJiBSLmFsbChSLmlzKE51bWJlciksIHZhbCk7XG4gICAgfVxuXG4gICAgZ2V0UGlwZWxpbmUobmV0Q29uZmlnKXtcbiAgICAgICAgLy9UT0RPOiBtYWtlIGFzc2VydG9yXG4gICAgICAgIHJldHVybiB0aGlzLlIucHJvcCgnUGlwZWxpbmUnLCBuZXRDb25maWcpO1xuICAgIH1cbiAgICBcbiAgICBnZXRIeXBlclBhcmFtZXRlcihuZXRDb25maWcpe1xuICAgICAgICAvL1RPRE86IG1ha2UgYXNzZXJ0b3JcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5wcm9wKCdIeXBlclBhcmFtZXRlcnMnLCBuZXRDb25maWcpO1xuICAgIH1cbiAgICBcbiAgICBnZXRUcmF2ZXJzZSgpe1xuICAgICAgICByZXR1cm4gUi5jdXJyeShmdW5jdGlvbihrZXlzLCBpdGVtKXtcbiAgICAgICAgICAgIFIucGlwZS5hcHBseShudWxsLCBSLm1hcChSLnByb3AsIGtleXMpKShpdGVtKTtcbiAgICAgICAgfSk7IFxuICAgIH1cbiAgICBcbiAgICBwYXJhbWV0ZXJBY3F1aXNpdGlvbihwaXBlbGluZUl0ZW0sIGh5cGVyUGFyYW1ldGVycyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7IFxuICAgICAgICBmdW5jdGlvbiByZXBsYWNlSWZNYXRjaCh2YWx1ZSwgaHlwZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgICAgIGlmKFIuaXMoU3RyaW5nLCB2YWx1ZSkgJiYgUi5zdGFydHNXaXRoKCckJywgdmFsdWUpKXtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBSLnNsaWNlKDEsIEluZmluaXR5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFIucHJvcChrZXksIGh5cGVyUGFyYW1ldGVycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZG9SZXBsYWNlSWZNYXRjaCA9IFIuY3VycnkocmVwbGFjZUlmTWF0Y2gpKFIuX18sIGh5cGVyUGFyYW1ldGVycyk7XG4gICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VIeXBlclBhcmFtZXRlcihwaXBlbGluZUl0ZW0pe1xuICAgICAgICAgICAgaWYoUi5pcyhBcnJheSwgcGlwZWxpbmVJdGVtKSB8fCBSLmlzKE9iamVjdCwgcGlwZWxpbmVJdGVtKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFIubWFwKHJlcGxhY2VIeXBlclBhcmFtZXRlciwgcGlwZWxpbmVJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvUmVwbGFjZUlmTWF0Y2gocGlwZWxpbmVJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVwbGFjZUh5cGVyUGFyYW1ldGVyKHBpcGVsaW5lSXRlbSk7XG4gICAgfVxuXG4gICAgaXNUZW5zb3Iob2JqZWN0KXtcbiAgICAgICAgcmV0dXJuIG9iamVjdC5zaXplICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LnNoYXBlICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0LmR0eXBlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187Il0sInNvdXJjZVJvb3QiOiIifQ==