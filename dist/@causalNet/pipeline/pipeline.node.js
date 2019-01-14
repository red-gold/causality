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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxpdHkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIl0sIm5hbWVzIjpbIkNhdXNhbE5ldCIsIlRlbnNvciIsImNvbnN0cnVjdG9yIiwibmV0Q29uZmlnIiwibmV0UGFyYW1zIiwic3RvcmFnZSIsIkYiLCJGdW5jdGlvbiIsIlIiLCJDb3JlRnVuY3Rpb24iLCJJbmRleERCU3RvcmFnZSIsIkh5cGVyUGFyYW1ldGVycyIsImdldEh5cGVyUGFyYW1ldGVyIiwiQmFzZVBpcGVsaW5lIiwiZ2V0UGlwZWxpbmUiLCJzZXRPckluaXRQYXJhbXMiLCJmbGF0dGVuUGFyYW1zIiwicGFyYW1zIiwiTWFwVmFsdWVzIiwib2JqT3JBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsIkZsYXR0ZW4iLCJwdiIsImlzVGVuc29yIiwiZmxhdHRlbiIsInJlZHVjZSIsInYiLCJyZXMiLCJpcyIsImxheWVyIiwidmFsdWUiLCJsYXllckNvbmZpZ3VyZSIsImxheWVyUGFyYW1ldGVycyIsIk5hbWUiLCJUeXBlIiwiUGFyYW1ldGVycyIsIkZsb3ciLCJjb25zb2xlIiwibG9nIiwiT3BzUnVuZXIiLCJhZGRJbmRleCIsIl9fIiwicmVzdWx0IiwidHJhY2UiLCJub2RlIiwiaWR4IiwiUGFyYW1ldGVyIiwiVCIsIk9wIiwiQXJncyIsInNoYXBlIiwicGlwZWxpbmUiLCJwaXBlUGFyYW1zIiwiZnJvbVBhaXJzIiwiZmlsdGVyIiwiayIsInVuZGVmaW5lZCIsIm1hcCIsInAiLCJTZXRPckluaXQiLCJtYWluVmFsdWUiLCJzdWJWYWwiLCJrZXlzIiwia2V5TWFpblZhbFN1YlZhbCIsInByb3AiLCJwcm9wT3IiLCJWYWxNYXBwaW5nIiwia2V5IiwibWFpblZhbCIsImlzUGFyYW1ldGVyIiwicGFyYW1TaGFwZSIsImlzTmlsIiwidmFyaWFibGUiLCJyYW5kb21Ob3JtYWwiLCJ0ZW5zb3IiLCJyZXNoYXBlIiwibWFrZVByZWRpY3QiLCJzYW1wbGVzIiwibnVtU2FtcGxlcyIsImYiLCJsIiwiTCIsIkRhdGFzaXplIiwiUGlwZWxpbmUiLCJwYXJhbWV0ZXJBY3F1aXNpdGlvbiIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsInRyYWNlcyIsInRpZHkiLCJsYXllck91dHB1dCIsIklucHV0IiwicHVzaCIsInBpcGVPdXRwdXQiLCJsb2dQcm9iIiwic3ViIiwibG9nU3VtRXhwIiwicHJlZGljdCIsImFyZ01heCIsImxvc3MiLCJiYXRjaFNhbXBsZXMiLCJiYXRjaExhYmVscyIsIm51bVNhbXBsZSIsImxhYmVsVGVuc29yIiwic2FtcGxlVGVuc29yIiwiYXNUeXBlIiwibGlrZWxpaG9vZCIsIm5lZyIsIm11bCIsIm1lYW4iLCJ0cmFpbiIsIlNhbXBsZUdlbmVyYXRvckZuIiwiYmF0Y2hTaXplIiwibnVtRXBvY2hzIiwibHIiLCJzdGFydCIsIkRhdGUiLCJhdmVyYWdlTG9zcyIsIm9wdGltaXplciIsImFkYW0iLCJlcG9jaElkeCIsInJhbmdlIiwidGltZSIsInRvSVNPU3RyaW5nIiwiZWxhcHNlIiwic2FtcGxlR2VuZXJhdG9yIiwibWluaW1pemUiLCJkYXRhU3luYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGVzdCIsIlRlc3RTYW1wbGVHZW5lcmF0b3JGbiIsInRlc3RCYXRjaFNpemUiLCJudW1DbGFzc2VzIiwidGVzdFNhbXBsZUdlbmVyYXRvciIsInRlc3RSZXN1bHQiLCJ6ZXJvcyIsIm9uZWhvdFByZWRpY3QiLCJvbmVIb3QiLCJwcmludCIsInN1bSIsImFkZCIsImRhdGEiLCJwYXNzIiwiYWNjdXJhY3kiLCJnZXRQYXJhbXMiLCJhc09iamVjdCIsImZyb20iLCJrVmFscyIsInRvUGFpcnMiLCJ2YWwiLCJKU09OIiwic3RyaW5naWZ5Iiwic2F2ZVBhcmFtcyIsImZpbGVOYW1lIiwid3JpdGVGaWxlIiwibG9hZFBhcmFtcyIsIl9wYXJhbXMiLCJyZWFkRmlsZSIsInBhcnNlIiwiQmFzZUZ1bmN0aW9uIiwibGVuIiwiYWxsIiwiTnVtYmVyIiwiZ2V0VHJhdmVyc2UiLCJjdXJyeSIsIml0ZW0iLCJwaXBlIiwiYXBwbHkiLCJwaXBlbGluZUl0ZW0iLCJoeXBlclBhcmFtZXRlcnMiLCJyZXBsYWNlSWZNYXRjaCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJzbGljZSIsIkluZmluaXR5IiwiZG9SZXBsYWNlSWZNYXRjaCIsInJlcGxhY2VIeXBlclBhcmFtZXRlciIsIm9iamVjdCIsInNpemUiLCJkdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURB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Q0FBQyxDQUFDb0MsRUFBMUIsRUFBOEJpSSxlQUE5QixDQUF6Qjs7QUFDQSxlQUFTTyxxQkFBVCxDQUErQlIsWUFBL0IsRUFBNEM7QUFDeEMsWUFBR3BLLENBQUMsQ0FBQ3VCLEVBQUYsQ0FBS1gsS0FBTCxFQUFZd0osWUFBWixLQUE2QnBLLENBQUMsQ0FBQ3VCLEVBQUYsQ0FBS1QsTUFBTCxFQUFhc0osWUFBYixDQUFoQyxFQUEyRDtBQUN2RCxpQkFBT3BLLENBQUMsQ0FBQ29ELEdBQUYsQ0FBTXdILHFCQUFOLEVBQTZCUixZQUE3QixDQUFQO0FBQ0gsU0FGRCxNQUdJO0FBQ0EsaUJBQU9PLGdCQUFnQixDQUFDUCxZQUFELENBQXZCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPUSxxQkFBcUIsQ0FBQ1IsWUFBRCxDQUE1QjtBQUNIOztBQUVEbEosWUFBUSxDQUFDMkosTUFBRCxFQUFRO0FBQ1osYUFBT0EsTUFBTSxDQUFDQyxJQUFQLEtBQWdCM0gsU0FBaEIsSUFBNkIwSCxNQUFNLENBQUNoSSxLQUFQLEtBQWlCTSxTQUE5QyxJQUEyRDBILE1BQU0sQ0FBQ0UsS0FBUCxLQUFpQjVILFNBQW5GO0FBQ0g7O0FBekQ2Qzs7Ozs7Ozs7Ozs7Ozs7QUNGbEQsNkQ7Ozs7Ozs7Ozs7O0FDQUEsZ0UiLCJmaWxlIjoiQGNhdXNhbE5ldC9waXBlbGluZS9waXBlbGluZS5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jYXVzYWxpdHkuanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IHtUZW5zb3J9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQge0luZGV4REJTdG9yYWdlfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIEZ1bmN0aW9ufSBmcm9tICcuL2Z1bmN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F1c2FsTmV0IGV4dGVuZHMgVGVuc29ye1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gbmV0Q29uZmlnXG4gICAgICogQHBhcmFtICB7fSBuZXRQYXJhbXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciggbmV0Q29uZmlnLCBuZXRQYXJhbXM9bnVsbCwgc3RvcmFnZT1udWxsICl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgICAgICB0aGlzLlIgPSB0aGlzLkYuQ29yZUZ1bmN0aW9uO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlIHx8IEluZGV4REJTdG9yYWdlO1xuICAgICAgICB0aGlzLkh5cGVyUGFyYW1ldGVycyA9IHRoaXMuRi5nZXRIeXBlclBhcmFtZXRlcihuZXRDb25maWcpO1xuICAgICAgICB0aGlzLkJhc2VQaXBlbGluZSA9IHRoaXMuRi5nZXRQaXBlbGluZShuZXRDb25maWcpO1xuICAgICAgICB0aGlzLm5ldFBhcmFtcyA9IHRoaXMuc2V0T3JJbml0UGFyYW1zKHRoaXMuQmFzZVBpcGVsaW5lLCBuZXRQYXJhbXMpO1xuICAgICAgICB0aGlzLmZsYXR0ZW5QYXJhbXMgPSB0aGlzLmZsYXR0ZW5QYXJhbXModGhpcy5uZXRQYXJhbXMpOyAgICAgICAgXG4gICAgfVxuXG4gICAgZmxhdHRlblBhcmFtcyhwYXJhbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBGID0gdGhpcy5GO1xuICAgICAgICBjb25zdCBNYXBWYWx1ZXMgPSAob2JqT3JBcnJheSk9PkFycmF5LmlzQXJyYXkob2JqT3JBcnJheSk/b2JqT3JBcnJheTpPYmplY3QudmFsdWVzKG9iak9yQXJyYXkpO1xuICAgICAgICBjb25zdCBGbGF0dGVuID0gKHB2KT0+e1xuICAgICAgICAgICAgaWYoRi5pc1RlbnNvcihwdikpe1xuICAgICAgICAgICAgICAgIHJldHVybiBwdjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IE1hcFZhbHVlcyhwdik7XG4gICAgICAgICAgICAgICAgbGV0IGZsYXR0ZW4gPSB2YWx1ZXMucmVkdWNlKChmbGF0dGVuLCB2KT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gRmxhdHRlbih2KTtcbiAgICAgICAgICAgICAgICAgICAgaWYoUi5pcyhBcnJheSwgcmVzKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGF0dGVuID0gWy4uLmZsYXR0ZW4sIC4uLnJlc107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW4gPSBbLi4uZmxhdHRlbiwgcmVzXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmxhdHRlbjtcbiAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZsYXR0ZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCB2YWx1ZXMgPSBNYXBWYWx1ZXMocGFyYW1zKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKChmbGF0dGVuLHYpPT5bLi4uZmxhdHRlbiwgLi4uRmxhdHRlbih2KV0sW10pO1xuICAgIH1cblxuICAgIGxheWVyKHZhbHVlLCBsYXllckNvbmZpZ3VyZSwgbGF5ZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3Qge05hbWUsIFR5cGUsIFBhcmFtZXRlcnMsIEZsb3d9ID0gbGF5ZXJDb25maWd1cmU7XG4gICAgICAgIGNvbnNvbGUubG9nKHtOYW1lLCBUeXBlLCBQYXJhbWV0ZXJzLCBGbG93fSk7XG4gICAgICAgIGNvbnN0IE9wc1J1bmVyID0gUi5hZGRJbmRleChSLnJlZHVjZSkoUi5fXyx7cmVzdWx0OiB2YWx1ZSwgdHJhY2U6IHt9fSwgRmxvdyk7XG4gICAgICAgIHZhciB7cmVzdWx0LCB0cmFjZX0gPSBPcHNSdW5lcigoe3Jlc3VsdCwgdHJhY2V9LCBub2RlLCBpZHgpPT57XG4gICAgICAgICAgICBpZihub2RlLlBhcmFtZXRlcil7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5UW25vZGUuT3BdKHJlc3VsdCwgbGF5ZXJQYXJhbWV0ZXJzW25vZGUuUGFyYW1ldGVyXSwgLi4ubm9kZS5BcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5UW25vZGUuT3BdKHJlc3VsdCwgLi4ubm9kZS5BcmdzKTsgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJhY2VbaWR4XSA9IHJlc3VsdC5zaGFwZTtcbiAgICAgICAgICAgIHJldHVybiB7cmVzdWx0LCB0cmFjZX07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1tOYW1lXTogcmVzdWx0LCB0cmFjZX07XG4gICAgfVxuXG4gICAgc2V0T3JJbml0UGFyYW1zKHBpcGVsaW5lLCBuZXRQYXJhbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBUID0gdGhpcy5ULCBGID0gdGhpcy5GO1xuICAgICAgICBsZXQgcGlwZVBhcmFtcyA9IFIuZnJvbVBhaXJzKFIuZmlsdGVyKChbayx2XSk9PnYgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUi5tYXAoUi5fXywgcGlwZWxpbmUpKHA9PltwLk5hbWUsIHAuUGFyYW1ldGVyc10pKSk7XG4gICAgICAgIGNvbnN0IFNldE9ySW5pdCA9IChtYWluVmFsdWUsIHN1YlZhbCk9PntcbiAgICAgICAgICAgIGxldCBrZXlzID0gUi5rZXlzKG1haW5WYWx1ZSk7XG4gICAgICAgICAgICBsZXQga2V5TWFpblZhbFN1YlZhbCA9IFIubWFwKChrKT0+IFtrLCBSLnByb3AoaywgbWFpblZhbHVlKSwgUi5wcm9wT3IobnVsbCwgaywgc3ViVmFsKV0sIGtleXMpO1xuICAgICAgICAgICAgY29uc3QgVmFsTWFwcGluZyA9IChba2V5LCBtYWluVmFsLCBzdWJWYWxdKT0+e1xuICAgICAgICAgICAgICAgIGlmKEYuaXNQYXJhbWV0ZXIobWFpblZhbCkpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJhbVNoYXBlID0gbWFpblZhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYoUi5pc05pbChzdWJWYWwpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBULnZhcmlhYmxlKFQucmFuZG9tTm9ybWFsKHBhcmFtU2hhcGUpKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBULnZhcmlhYmxlKFQudGVuc29yKHN1YlZhbCkucmVzaGFwZShwYXJhbVNoYXBlKSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCBTZXRPckluaXQobWFpblZhbCwgc3ViVmFsKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBSLmZyb21QYWlycyhSLm1hcChWYWxNYXBwaW5nLCBrZXlNYWluVmFsU3ViVmFsKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBTZXRPckluaXQocGlwZVBhcmFtcywgbmV0UGFyYW1zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHt9IHNhbXBsZXNcbiAgICAgKiBAcGFyYW0gIHt9IG51bVNhbXBsZXM9MVxuICAgICAqL1xuICAgIG1ha2VQcmVkaWN0KHNhbXBsZXMsIG51bVNhbXBsZXM9MSl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIGYgPSB0aGlzLkYsIGwgPSB0aGlzLkw7XG4gICAgICAgIHRoaXMuSHlwZXJQYXJhbWV0ZXJzLkRhdGFzaXplID0gbnVtU2FtcGxlcztcbiAgICAgICAgY29uc3QgUGlwZWxpbmUgPSBmLnBhcmFtZXRlckFjcXVpc2l0aW9uKHRoaXMuQmFzZVBpcGVsaW5lLCB0aGlzLkh5cGVyUGFyYW1ldGVycyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCh7UGlwZWxpbmV9KSk7XG4gICAgICAgIGxldCBwaXBlVmFsdWUgPSB7UGlwZUlucHV0OiBzYW1wbGVzfSwgdHJhY2VzID0gW10sIG5ldFBhcmFtcyA9IHRoaXMubmV0UGFyYW1zO1xuICAgICAgICByZXR1cm4gVC50aWR5KCgpPT57XG4gICAgICAgICAgICBmb3IobGV0IGxheWVyIG9mIFBpcGVsaW5lKXtcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXJPdXRwdXQgPSB0aGlzLmxheWVyKHBpcGVWYWx1ZVtsYXllci5JbnB1dF0sIGxheWVyLCBuZXRQYXJhbXNbbGF5ZXIuTmFtZV0pO1xuICAgICAgICAgICAgICAgIHBpcGVWYWx1ZVtsYXllci5OYW1lXSA9IGxheWVyT3V0cHV0W2xheWVyLk5hbWVdO1xuICAgICAgICAgICAgICAgIHRyYWNlcy5wdXNoKHtbbGF5ZXIuTmFtZV06IGxheWVyT3V0cHV0LnRyYWNlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7dHJhY2VzfSk7XG4gICAgICAgICAgICBsZXQgcGlwZU91dHB1dCA9IHBpcGVWYWx1ZVsnUGlwZU91dHB1dCddO1xuICAgICAgICAgICAgbGV0IGxvZ1Byb2IgPSBwaXBlT3V0cHV0LnN1YihULmxvZ1N1bUV4cChwaXBlT3V0cHV0LCAxLCB0cnVlKSk7XG4gICAgICAgICAgICBsZXQgcHJlZGljdCA9IGxvZ1Byb2IuYXJnTWF4KDEpO1xuICAgICAgICAgICAgcmV0dXJuIHtsb2dQcm9iLCBwcmVkaWN0fTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gc2FtcGxlQmF0Y2hcbiAgICAgKiBAcGFyYW0gIHt9IGxhYmVsQmF0Y2hcbiAgICAgKiBAcGFyYW0gIHt9IG51bVNhbXBsZVxuICAgICAqL1xuICAgIGxvc3MoYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVscywgbnVtU2FtcGxlKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgbGV0IGxhYmVsVGVuc29yICA9IFQudGVuc29yKGJhdGNoTGFiZWxzKS5yZXNoYXBlKFtudW1TYW1wbGUsIC0xXSk7XG4gICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihiYXRjaFNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpOyBcbiAgICAgICAgY29uc3Qge2xvZ1Byb2J9ID0gdGhpcy5tYWtlUHJlZGljdChzYW1wbGVUZW5zb3IsIG51bVNhbXBsZSk7XG4gICAgICAgIGNvbnN0IGxpa2VsaWhvb2QgPSBsb2dQcm9iLm5lZygpLm11bChsYWJlbFRlbnNvcik7XG4gICAgICAgIGNvbnN0IGxvc3MgPSBsaWtlbGlob29kLm1lYW4oKTtcbiAgICAgICAgcmV0dXJuIGxvc3M7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHt9IFNhbXBsZUdlbmVyYXRvckZuXG4gICAgICogQHBhcmFtICB7fSBiYXRjaFNpemVcbiAgICAgKiBAcGFyYW0gIHt9IG51bUVwb2Nocz0yXG4gICAgICogQHBhcmFtICB7fSBscj0wLjAxXG4gICAgICovXG4gICAgYXN5bmMgdHJhaW4oU2FtcGxlR2VuZXJhdG9yRm4sIGJhdGNoU2l6ZSwgbnVtRXBvY2hzID0gMiwgbHI9MC4wMDEpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBsb3NzID0gW10sIGF2ZXJhZ2VMb3NzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGltaXplciA9IFQudHJhaW4uYWRhbShscik7XG4gICAgICAgIGZvcihsZXQgZXBvY2hJZHggb2YgRi5yYW5nZShudW1FcG9jaHMpKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtlcG9jaElkeCwgYXZlcmFnZUxvc3MsIHRpbWU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LnRvSVNPU3RyaW5nKCksIGVsYXBzZTogKG5ldyBEYXRlKCkgLSBzdGFydCkvMTAwMH0pO1xuICAgICAgICAgICAgY29uc3Qgc2FtcGxlR2VuZXJhdG9yID0gU2FtcGxlR2VuZXJhdG9yRm4oYmF0Y2hTaXplKTtcbiAgICAgICAgICAgIGZvciBhd2FpdCAobGV0IFtiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXSBvZiBzYW1wbGVHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgICAgIG9wdGltaXplci5taW5pbWl6ZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgbCA9IHRoaXMubG9zcyhiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzLCBiYXRjaFNpemUpO1xuICAgICAgICAgICAgICAgICAgICBsb3NzID0gWy4uLmxvc3MsIC4uLmwuZGF0YVN5bmMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtsb3NzfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsLmFzVHlwZSgnZmxvYXQzMicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXZlcmFnZUxvc3MgPSBbLi4uYXZlcmFnZUxvc3MsIFIubWVhbihsb3NzKV07XG4gICAgICAgICAgICBsb3NzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICByZXNvbHZlKHthdmVyYWdlTG9zc30pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXN5bmMgdGVzdChUZXN0U2FtcGxlR2VuZXJhdG9yRm4sIHRlc3RCYXRjaFNpemUsIG51bUNsYXNzZXM9MTApe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5ULCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCB0ZXN0U2FtcGxlR2VuZXJhdG9yID0gVGVzdFNhbXBsZUdlbmVyYXRvckZuKHRlc3RCYXRjaFNpemUpO1xuICAgICAgICBsZXQgdGVzdFJlc3VsdCA9IFQuemVyb3MoWzFdKTtcbiAgICAgICAgZm9yIGF3YWl0IChsZXQgW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdIG9mIHRlc3RTYW1wbGVHZW5lcmF0b3Ipe1xuICAgICAgICAgICAgbGV0IGxhYmVsVGVuc29yICA9IFQudGVuc29yKGJhdGNoTGFiZWxzKS5yZXNoYXBlKFt0ZXN0QmF0Y2hTaXplLCBudW1DbGFzc2VzXSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlVGVuc29yID0gVC50ZW5zb3IoYmF0Y2hTYW1wbGVzKS5hc1R5cGUoJ2Zsb2F0MzInKTsgXG4gICAgICAgICAgICBjb25zdCB7cHJlZGljdH0gPSB0aGlzLm1ha2VQcmVkaWN0KHNhbXBsZVRlbnNvciwgdGVzdEJhdGNoU2l6ZSk7XG4gICAgICAgICAgICBsZXQgb25laG90UHJlZGljdCA9IFQub25lSG90KHByZWRpY3QsIG51bUNsYXNzZXMpO1xuICAgICAgICAgICAgb25laG90UHJlZGljdC5wcmludCgpO1xuICAgICAgICAgICAgbGFiZWxUZW5zb3IucHJpbnQoKTtcbiAgICAgICAgICAgIG9uZWhvdFByZWRpY3QubXVsKGxhYmVsVGVuc29yKS5zdW0oKS5wcmludCgpO1xuICAgICAgICAgICAgdGVzdFJlc3VsdCA9IHRlc3RSZXN1bHQuYWRkKG9uZWhvdFByZWRpY3QubXVsKGxhYmVsVGVuc29yKS5zdW0oKSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRlc3RSZXN1bHQuZGF0YSgpO1xuICAgICAgICBsZXQgcGFzcyA9IHJlc3VsdFswXTtcbiAgICAgICAgbGV0IGFjY3VyYWN5ID0gcGFzcy90ZXN0QmF0Y2hTaXplO1xuICAgICAgICByZXR1cm4ge2FjY3VyYWN5LCBwYXNzfTsgICAgICAgIFxuICAgIH1cblxuICAgIGFzeW5jIGdldFBhcmFtcyhhc09iamVjdD10cnVlKXtcbiAgICAgICAgY29uc3QgRiA9IHRoaXMuRiwgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgZ2V0UGFyYW1zID0gYXN5bmMgKHBhcmFtcyk9PntcbiAgICAgICAgICAgIGlmKEYuaXNUZW5zb3IocGFyYW1zKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXdhaXQgcGFyYW1zLmRhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGxldCBrVmFscyA9IFIudG9QYWlycyhwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtrLCB2YWxdIG9mIGtWYWxzKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzW2tdID0gYXdhaXQgZ2V0UGFyYW1zKHZhbCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgcGFyYW1zID0gYXdhaXQgZ2V0UGFyYW1zKHRoaXMubmV0UGFyYW1zKTtcbiAgICAgICAgaWYoYXNPYmplY3Qpe1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYXN5bmMgc2F2ZVBhcmFtcyhmaWxlTmFtZT0nLi9zYXZlLm1vZGVsJyl7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGF3YWl0IHRoaXMuZ2V0UGFyYW1zKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtwYXJhbXN9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZS53cml0ZUZpbGUoZmlsZU5hbWUsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFyYW1zKGZpbGVOYW1lKXtcbiAgICAgICAgbGV0IF9wYXJhbXMgPSBhd2FpdCB0aGlzLnN0b3JhZ2UucmVhZEZpbGUoZmlsZU5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh7X3BhcmFtc30pO1xuICAgICAgICBsZXQgcGFyYW1zID0gSlNPTi5wYXJzZShfcGFyYW1zKTtcbiAgICAgICAgdGhpcy5zZXRPckluaXRQYXJhbXModGhpcy5CYXNlUGlwZWxpbmUsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldFBhcmFtcyhmYWxzZSk7XG4gICAgfVxufSIsImltcG9ydCB7RnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9ufSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbiBleHRlbmRzIEJhc2VGdW5jdGlvbntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGlzVGVuc29yKHZhbCl7XG4gICAgICAgIC8vIHJldHVybiB2YWwgaW5zdGFuY2VvZiB0aGlzJiYgXG4gICAgICAgIHJldHVybiB2YWwuc2hhcGUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmFuZ2UobGVuKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5yYW5nZSgwLCBsZW4pO1xuICAgIH1cblxuICAgIGlzUGFyYW1ldGVyKHZhbCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmlzKEFycmF5KSh2YWwpICYmIFIuYWxsKFIuaXMoTnVtYmVyKSwgdmFsKTtcbiAgICB9XG5cbiAgICBnZXRQaXBlbGluZShuZXRDb25maWcpe1xuICAgICAgICAvL1RPRE86IG1ha2UgYXNzZXJ0b3JcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5wcm9wKCdQaXBlbGluZScsIG5ldENvbmZpZyk7XG4gICAgfVxuICAgIFxuICAgIGdldEh5cGVyUGFyYW1ldGVyKG5ldENvbmZpZyl7XG4gICAgICAgIC8vVE9ETzogbWFrZSBhc3NlcnRvclxuICAgICAgICByZXR1cm4gdGhpcy5SLnByb3AoJ0h5cGVyUGFyYW1ldGVycycsIG5ldENvbmZpZyk7XG4gICAgfVxuICAgIFxuICAgIGdldFRyYXZlcnNlKCl7XG4gICAgICAgIHJldHVybiBSLmN1cnJ5KGZ1bmN0aW9uKGtleXMsIGl0ZW0pe1xuICAgICAgICAgICAgUi5waXBlLmFwcGx5KG51bGwsIFIubWFwKFIucHJvcCwga2V5cykpKGl0ZW0pO1xuICAgICAgICB9KTsgXG4gICAgfVxuICAgIFxuICAgIHBhcmFtZXRlckFjcXVpc2l0aW9uKHBpcGVsaW5lSXRlbSwgaHlwZXJQYXJhbWV0ZXJzKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjsgXG4gICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VJZk1hdGNoKHZhbHVlLCBoeXBlclBhcmFtZXRlcnMpe1xuICAgICAgICAgICAgaWYoUi5pcyhTdHJpbmcsIHZhbHVlKSAmJiBSLnN0YXJ0c1dpdGgoJyQnLCB2YWx1ZSkpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IFIuc2xpY2UoMSwgSW5maW5pdHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUi5wcm9wKGtleSwgaHlwZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkb1JlcGxhY2VJZk1hdGNoID0gUi5jdXJyeShyZXBsYWNlSWZNYXRjaCkoUi5fXywgaHlwZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZUh5cGVyUGFyYW1ldGVyKHBpcGVsaW5lSXRlbSl7XG4gICAgICAgICAgICBpZihSLmlzKEFycmF5LCBwaXBlbGluZUl0ZW0pIHx8IFIuaXMoT2JqZWN0LCBwaXBlbGluZUl0ZW0pKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gUi5tYXAocmVwbGFjZUh5cGVyUGFyYW1ldGVyLCBwaXBlbGluZUl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9SZXBsYWNlSWZNYXRjaChwaXBlbGluZUl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXBsYWNlSHlwZXJQYXJhbWV0ZXIocGlwZWxpbmVJdGVtKTtcbiAgICB9XG5cbiAgICBpc1RlbnNvcihvYmplY3Qpe1xuICAgICAgICByZXR1cm4gb2JqZWN0LnNpemUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3Quc2hhcGUgIT09IHVuZGVmaW5lZCAmJiBvYmplY3QuZHR5cGUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiXSwic291cmNlUm9vdCI6IiJ9