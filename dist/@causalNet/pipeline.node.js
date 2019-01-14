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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcGlwZWxpbmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9jYXVzYWxpdHkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3BpcGVsaW5lL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9waXBlbGluZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIl0sIm5hbWVzIjpbIkNhdXNhbE5ldCIsIlRlbnNvciIsImNvbnN0cnVjdG9yIiwibmV0Q29uZmlnIiwibmV0UGFyYW1zIiwic3RvcmFnZSIsIkYiLCJGdW5jdGlvbiIsIlIiLCJDb3JlRnVuY3Rpb24iLCJJbmRleERCU3RvcmFnZSIsIkh5cGVyUGFyYW1ldGVycyIsImdldEh5cGVyUGFyYW1ldGVyIiwiQmFzZVBpcGVsaW5lIiwiZ2V0UGlwZWxpbmUiLCJzZXRPckluaXRQYXJhbXMiLCJmbGF0dGVuUGFyYW1zIiwicGFyYW1zIiwiTWFwVmFsdWVzIiwib2JqT3JBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsIk9iamVjdCIsInZhbHVlcyIsIkZsYXR0ZW4iLCJwdiIsImlzVGVuc29yIiwiZmxhdHRlbiIsInJlZHVjZSIsInYiLCJyZXMiLCJpcyIsImxheWVyIiwidmFsdWUiLCJsYXllckNvbmZpZ3VyZSIsImxheWVyUGFyYW1ldGVycyIsIk5hbWUiLCJUeXBlIiwiUGFyYW1ldGVycyIsIkZsb3ciLCJjb25zb2xlIiwibG9nIiwiT3BzUnVuZXIiLCJhZGRJbmRleCIsIl9fIiwicmVzdWx0IiwidHJhY2UiLCJub2RlIiwiaWR4IiwiUGFyYW1ldGVyIiwiVCIsIk9wIiwiQXJncyIsInNoYXBlIiwicGlwZWxpbmUiLCJwaXBlUGFyYW1zIiwiZnJvbVBhaXJzIiwiZmlsdGVyIiwiayIsInVuZGVmaW5lZCIsIm1hcCIsInAiLCJTZXRPckluaXQiLCJtYWluVmFsdWUiLCJzdWJWYWwiLCJrZXlzIiwia2V5TWFpblZhbFN1YlZhbCIsInByb3AiLCJwcm9wT3IiLCJWYWxNYXBwaW5nIiwia2V5IiwibWFpblZhbCIsImlzUGFyYW1ldGVyIiwicGFyYW1TaGFwZSIsImlzTmlsIiwidmFyaWFibGUiLCJyYW5kb21Ob3JtYWwiLCJ0ZW5zb3IiLCJyZXNoYXBlIiwibWFrZVByZWRpY3QiLCJzYW1wbGVzIiwibnVtU2FtcGxlcyIsImYiLCJsIiwiTCIsIkRhdGFzaXplIiwiUGlwZWxpbmUiLCJwYXJhbWV0ZXJBY3F1aXNpdGlvbiIsInBpcGVWYWx1ZSIsIlBpcGVJbnB1dCIsInRyYWNlcyIsInRpZHkiLCJsYXllck91dHB1dCIsIklucHV0IiwicHVzaCIsInBpcGVPdXRwdXQiLCJsb2dQcm9iIiwic3ViIiwibG9nU3VtRXhwIiwicHJlZGljdCIsImFyZ01heCIsImxvc3MiLCJiYXRjaFNhbXBsZXMiLCJiYXRjaExhYmVscyIsIm51bVNhbXBsZSIsImxhYmVsVGVuc29yIiwic2FtcGxlVGVuc29yIiwiYXNUeXBlIiwibGlrZWxpaG9vZCIsIm5lZyIsIm11bCIsIm1lYW4iLCJ0cmFpbiIsIlNhbXBsZUdlbmVyYXRvckZuIiwiYmF0Y2hTaXplIiwibnVtRXBvY2hzIiwibHIiLCJzdGFydCIsIkRhdGUiLCJhdmVyYWdlTG9zcyIsIm9wdGltaXplciIsImFkYW0iLCJlcG9jaElkeCIsInJhbmdlIiwidGltZSIsInRvSVNPU3RyaW5nIiwiZWxhcHNlIiwic2FtcGxlR2VuZXJhdG9yIiwibWluaW1pemUiLCJkYXRhU3luYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGVzdCIsIlRlc3RTYW1wbGVHZW5lcmF0b3JGbiIsInRlc3RCYXRjaFNpemUiLCJudW1DbGFzc2VzIiwidGVzdFNhbXBsZUdlbmVyYXRvciIsInRlc3RSZXN1bHQiLCJ6ZXJvcyIsIm9uZWhvdFByZWRpY3QiLCJvbmVIb3QiLCJwcmludCIsInN1bSIsImFkZCIsImRhdGEiLCJwYXNzIiwiYWNjdXJhY3kiLCJnZXRQYXJhbXMiLCJhc09iamVjdCIsImZyb20iLCJrVmFscyIsInRvUGFpcnMiLCJ2YWwiLCJKU09OIiwic3RyaW5naWZ5Iiwic2F2ZVBhcmFtcyIsImZpbGVOYW1lIiwid3JpdGVGaWxlIiwibG9hZFBhcmFtcyIsIl9wYXJhbXMiLCJyZWFkRmlsZSIsInBhcnNlIiwiQmFzZUZ1bmN0aW9uIiwibGVuIiwiYWxsIiwiTnVtYmVyIiwiZ2V0VHJhdmVyc2UiLCJjdXJyeSIsIml0ZW0iLCJwaXBlIiwiYXBwbHkiLCJwaXBlbGluZUl0ZW0iLCJoeXBlclBhcmFtZXRlcnMiLCJyZXBsYWNlSWZNYXRjaCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJzbGljZSIsIkluZmluaXR5IiwiZG9SZXBsYWNlSWZNYXRjaCIsInJlcGxhY2VIeXBlclBhcmFtZXRlciIsIm9iamVjdCIsInNpemUiLCJkdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURB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Q0FBQyxDQUFDb0MsRUFBMUIsRUFBOEJpSSxlQUE5QixDQUF6Qjs7QUFDQSxlQUFTTyxxQkFBVCxDQUErQlIsWUFBL0IsRUFBNEM7QUFDeEMsWUFBR3BLLENBQUMsQ0FBQ3VCLEVBQUYsQ0FBS1gsS0FBTCxFQUFZd0osWUFBWixLQUE2QnBLLENBQUMsQ0FBQ3VCLEVBQUYsQ0FBS1QsTUFBTCxFQUFhc0osWUFBYixDQUFoQyxFQUEyRDtBQUN2RCxpQkFBT3BLLENBQUMsQ0FBQ29ELEdBQUYsQ0FBTXdILHFCQUFOLEVBQTZCUixZQUE3QixDQUFQO0FBQ0gsU0FGRCxNQUdJO0FBQ0EsaUJBQU9PLGdCQUFnQixDQUFDUCxZQUFELENBQXZCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPUSxxQkFBcUIsQ0FBQ1IsWUFBRCxDQUE1QjtBQUNIOztBQUVEbEosWUFBUSxDQUFDMkosTUFBRCxFQUFRO0FBQ1osYUFBT0EsTUFBTSxDQUFDQyxJQUFQLEtBQWdCM0gsU0FBaEIsSUFBNkIwSCxNQUFNLENBQUNoSSxLQUFQLEtBQWlCTSxTQUE5QyxJQUEyRDBILE1BQU0sQ0FBQ0UsS0FBUCxLQUFpQjVILFNBQW5GO0FBQ0g7O0FBekQ2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEQsNkQ7Ozs7Ozs7Ozs7O0FDQUEsZ0UiLCJmaWxlIjoiQGNhdXNhbE5ldC9waXBlbGluZS5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3BpcGVsaW5lXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQge1RlbnNvcn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7SW5kZXhEQlN0b3JhZ2V9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQge2RlZmF1bHQgYXMgRnVuY3Rpb259IGZyb20gJy4vZnVuY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXVzYWxOZXQgZXh0ZW5kcyBUZW5zb3J7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBuZXRDb25maWdcbiAgICAgKiBAcGFyYW0gIHt9IG5ldFBhcmFtc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCBuZXRDb25maWcsIG5ldFBhcmFtcz1udWxsLCBzdG9yYWdlPW51bGwgKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgICAgIHRoaXMuUiA9IHRoaXMuRi5Db3JlRnVuY3Rpb247XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IHN0b3JhZ2UgfHwgSW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMuSHlwZXJQYXJhbWV0ZXJzID0gdGhpcy5GLmdldEh5cGVyUGFyYW1ldGVyKG5ldENvbmZpZyk7XG4gICAgICAgIHRoaXMuQmFzZVBpcGVsaW5lID0gdGhpcy5GLmdldFBpcGVsaW5lKG5ldENvbmZpZyk7XG4gICAgICAgIHRoaXMubmV0UGFyYW1zID0gdGhpcy5zZXRPckluaXRQYXJhbXModGhpcy5CYXNlUGlwZWxpbmUsIG5ldFBhcmFtcyk7XG4gICAgICAgIHRoaXMuZmxhdHRlblBhcmFtcyA9IHRoaXMuZmxhdHRlblBhcmFtcyh0aGlzLm5ldFBhcmFtcyk7ICAgICAgICBcbiAgICB9XG5cbiAgICBmbGF0dGVuUGFyYW1zKHBhcmFtcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIEYgPSB0aGlzLkY7XG4gICAgICAgIGNvbnN0IE1hcFZhbHVlcyA9IChvYmpPckFycmF5KT0+QXJyYXkuaXNBcnJheShvYmpPckFycmF5KT9vYmpPckFycmF5Ok9iamVjdC52YWx1ZXMob2JqT3JBcnJheSk7XG4gICAgICAgIGNvbnN0IEZsYXR0ZW4gPSAocHYpPT57XG4gICAgICAgICAgICBpZihGLmlzVGVuc29yKHB2KSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gTWFwVmFsdWVzKHB2KTtcbiAgICAgICAgICAgICAgICBsZXQgZmxhdHRlbiA9IHZhbHVlcy5yZWR1Y2UoKGZsYXR0ZW4sIHYpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBGbGF0dGVuKHYpO1xuICAgICAgICAgICAgICAgICAgICBpZihSLmlzKEFycmF5LCByZXMpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsYXR0ZW4gPSBbLi4uZmxhdHRlbiwgLi4ucmVzXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxhdHRlbiA9IFsuLi5mbGF0dGVuLCByZXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmbGF0dGVuO1xuICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmxhdHRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHZhbHVlcyA9IE1hcFZhbHVlcyhwYXJhbXMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoKGZsYXR0ZW4sdik9PlsuLi5mbGF0dGVuLCAuLi5GbGF0dGVuKHYpXSxbXSk7XG4gICAgfVxuXG4gICAgbGF5ZXIodmFsdWUsIGxheWVyQ29uZmlndXJlLCBsYXllclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCB7TmFtZSwgVHlwZSwgUGFyYW1ldGVycywgRmxvd30gPSBsYXllckNvbmZpZ3VyZTtcbiAgICAgICAgY29uc29sZS5sb2coe05hbWUsIFR5cGUsIFBhcmFtZXRlcnMsIEZsb3d9KTtcbiAgICAgICAgY29uc3QgT3BzUnVuZXIgPSBSLmFkZEluZGV4KFIucmVkdWNlKShSLl9fLHtyZXN1bHQ6IHZhbHVlLCB0cmFjZToge319LCBGbG93KTtcbiAgICAgICAgdmFyIHtyZXN1bHQsIHRyYWNlfSA9IE9wc1J1bmVyKCh7cmVzdWx0LCB0cmFjZX0sIG5vZGUsIGlkeCk9PntcbiAgICAgICAgICAgIGlmKG5vZGUuUGFyYW1ldGVyKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLlRbbm9kZS5PcF0ocmVzdWx0LCBsYXllclBhcmFtZXRlcnNbbm9kZS5QYXJhbWV0ZXJdLCAuLi5ub2RlLkFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLlRbbm9kZS5PcF0ocmVzdWx0LCAuLi5ub2RlLkFyZ3MpOyAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0cmFjZVtpZHhdID0gcmVzdWx0LnNoYXBlO1xuICAgICAgICAgICAgcmV0dXJuIHtyZXN1bHQsIHRyYWNlfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7W05hbWVdOiByZXN1bHQsIHRyYWNlfTtcbiAgICB9XG5cbiAgICBzZXRPckluaXRQYXJhbXMocGlwZWxpbmUsIG5ldFBhcmFtcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFQgPSB0aGlzLlQsIEYgPSB0aGlzLkY7XG4gICAgICAgIGxldCBwaXBlUGFyYW1zID0gUi5mcm9tUGFpcnMoUi5maWx0ZXIoKFtrLHZdKT0+diAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSLm1hcChSLl9fLCBwaXBlbGluZSkocD0+W3AuTmFtZSwgcC5QYXJhbWV0ZXJzXSkpKTtcbiAgICAgICAgY29uc3QgU2V0T3JJbml0ID0gKG1haW5WYWx1ZSwgc3ViVmFsKT0+e1xuICAgICAgICAgICAgbGV0IGtleXMgPSBSLmtleXMobWFpblZhbHVlKTtcbiAgICAgICAgICAgIGxldCBrZXlNYWluVmFsU3ViVmFsID0gUi5tYXAoKGspPT4gW2ssIFIucHJvcChrLCBtYWluVmFsdWUpLCBSLnByb3BPcihudWxsLCBrLCBzdWJWYWwpXSwga2V5cyk7XG4gICAgICAgICAgICBjb25zdCBWYWxNYXBwaW5nID0gKFtrZXksIG1haW5WYWwsIHN1YlZhbF0pPT57XG4gICAgICAgICAgICAgICAgaWYoRi5pc1BhcmFtZXRlcihtYWluVmFsKSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtU2hhcGUgPSBtYWluVmFsO1xuICAgICAgICAgICAgICAgICAgICBpZihSLmlzTmlsKHN1YlZhbCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFQudmFyaWFibGUoVC5yYW5kb21Ob3JtYWwocGFyYW1TaGFwZSkpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFQudmFyaWFibGUoVC50ZW5zb3Ioc3ViVmFsKS5yZXNoYXBlKHBhcmFtU2hhcGUpKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtrZXksIFNldE9ySW5pdChtYWluVmFsLCBzdWJWYWwpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFIuZnJvbVBhaXJzKFIubWFwKFZhbE1hcHBpbmcsIGtleU1haW5WYWxTdWJWYWwpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFNldE9ySW5pdChwaXBlUGFyYW1zLCBuZXRQYXJhbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gc2FtcGxlc1xuICAgICAqIEBwYXJhbSAge30gbnVtU2FtcGxlcz0xXG4gICAgICovXG4gICAgbWFrZVByZWRpY3Qoc2FtcGxlcywgbnVtU2FtcGxlcz0xKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVCwgZiA9IHRoaXMuRiwgbCA9IHRoaXMuTDtcbiAgICAgICAgdGhpcy5IeXBlclBhcmFtZXRlcnMuRGF0YXNpemUgPSBudW1TYW1wbGVzO1xuICAgICAgICBjb25zdCBQaXBlbGluZSA9IGYucGFyYW1ldGVyQWNxdWlzaXRpb24odGhpcy5CYXNlUGlwZWxpbmUsIHRoaXMuSHlwZXJQYXJhbWV0ZXJzKTtcbiAgICAgICAgY29uc29sZS5sb2coKHtQaXBlbGluZX0pKTtcbiAgICAgICAgbGV0IHBpcGVWYWx1ZSA9IHtQaXBlSW5wdXQ6IHNhbXBsZXN9LCB0cmFjZXMgPSBbXSwgbmV0UGFyYW1zID0gdGhpcy5uZXRQYXJhbXM7XG4gICAgICAgIHJldHVybiBULnRpZHkoKCk9PntcbiAgICAgICAgICAgIGZvcihsZXQgbGF5ZXIgb2YgUGlwZWxpbmUpe1xuICAgICAgICAgICAgICAgIGxldCBsYXllck91dHB1dCA9IHRoaXMubGF5ZXIocGlwZVZhbHVlW2xheWVyLklucHV0XSwgbGF5ZXIsIG5ldFBhcmFtc1tsYXllci5OYW1lXSk7XG4gICAgICAgICAgICAgICAgcGlwZVZhbHVlW2xheWVyLk5hbWVdID0gbGF5ZXJPdXRwdXRbbGF5ZXIuTmFtZV07XG4gICAgICAgICAgICAgICAgdHJhY2VzLnB1c2goe1tsYXllci5OYW1lXTogbGF5ZXJPdXRwdXQudHJhY2V9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHt0cmFjZXN9KTtcbiAgICAgICAgICAgIGxldCBwaXBlT3V0cHV0ID0gcGlwZVZhbHVlWydQaXBlT3V0cHV0J107XG4gICAgICAgICAgICBsZXQgbG9nUHJvYiA9IHBpcGVPdXRwdXQuc3ViKFQubG9nU3VtRXhwKHBpcGVPdXRwdXQsIDEsIHRydWUpKTtcbiAgICAgICAgICAgIGxldCBwcmVkaWN0ID0gbG9nUHJvYi5hcmdNYXgoMSk7XG4gICAgICAgICAgICByZXR1cm4ge2xvZ1Byb2IsIHByZWRpY3R9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7fSBzYW1wbGVCYXRjaFxuICAgICAqIEBwYXJhbSAge30gbGFiZWxCYXRjaFxuICAgICAqIEBwYXJhbSAge30gbnVtU2FtcGxlXG4gICAgICovXG4gICAgbG9zcyhiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzLCBudW1TYW1wbGUpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICBsZXQgbGFiZWxUZW5zb3IgID0gVC50ZW5zb3IoYmF0Y2hMYWJlbHMpLnJlc2hhcGUoW251bVNhbXBsZSwgLTFdKTtcbiAgICAgICAgbGV0IHNhbXBsZVRlbnNvciA9IFQudGVuc29yKGJhdGNoU2FtcGxlcykuYXNUeXBlKCdmbG9hdDMyJyk7IFxuICAgICAgICBjb25zdCB7bG9nUHJvYn0gPSB0aGlzLm1ha2VQcmVkaWN0KHNhbXBsZVRlbnNvciwgbnVtU2FtcGxlKTtcbiAgICAgICAgY29uc3QgbGlrZWxpaG9vZCA9IGxvZ1Byb2IubmVnKCkubXVsKGxhYmVsVGVuc29yKTtcbiAgICAgICAgY29uc3QgbG9zcyA9IGxpa2VsaWhvb2QubWVhbigpO1xuICAgICAgICByZXR1cm4gbG9zcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge30gU2FtcGxlR2VuZXJhdG9yRm5cbiAgICAgKiBAcGFyYW0gIHt9IGJhdGNoU2l6ZVxuICAgICAqIEBwYXJhbSAge30gbnVtRXBvY2hzPTJcbiAgICAgKiBAcGFyYW0gIHt9IGxyPTAuMDFcbiAgICAgKi9cbiAgICBhc3luYyB0cmFpbihTYW1wbGVHZW5lcmF0b3JGbiwgYmF0Y2hTaXplLCBudW1FcG9jaHMgPSAyLCBscj0wLjAwMSl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIEYgPSB0aGlzLkYsIFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IGxvc3MgPSBbXSwgYXZlcmFnZUxvc3MgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW1pemVyID0gVC50cmFpbi5hZGFtKGxyKTtcbiAgICAgICAgZm9yKGxldCBlcG9jaElkeCBvZiBGLnJhbmdlKG51bUVwb2Nocykpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2Vwb2NoSWR4LCBhdmVyYWdlTG9zcywgdGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogc3RhcnQudG9JU09TdHJpbmcoKSwgZWxhcHNlOiAobmV3IERhdGUoKSAtIHN0YXJ0KS8xMDAwfSk7XG4gICAgICAgICAgICBjb25zdCBzYW1wbGVHZW5lcmF0b3IgPSBTYW1wbGVHZW5lcmF0b3JGbihiYXRjaFNpemUpO1xuICAgICAgICAgICAgZm9yIGF3YWl0IChsZXQgW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdIG9mIHNhbXBsZUdlbmVyYXRvcil7XG4gICAgICAgICAgICAgICAgb3B0aW1pemVyLm1pbmltaXplKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBsID0gdGhpcy5sb3NzKGJhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHMsIGJhdGNoU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvc3MgPSBbLi4ubG9zcywgLi4ubC5kYXRhU3luYygpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2xvc3N9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGwuYXNUeXBlKCdmbG9hdDMyJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdmVyYWdlTG9zcyA9IFsuLi5hdmVyYWdlTG9zcywgUi5tZWFuKGxvc3MpXTtcbiAgICAgICAgICAgIGxvc3MgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoe2F2ZXJhZ2VMb3NzfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhc3luYyB0ZXN0KFRlc3RTYW1wbGVHZW5lcmF0b3JGbiwgdGVzdEJhdGNoU2l6ZSwgbnVtQ2xhc3Nlcz0xMCl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQsIEYgPSB0aGlzLkYsIFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IHRlc3RTYW1wbGVHZW5lcmF0b3IgPSBUZXN0U2FtcGxlR2VuZXJhdG9yRm4odGVzdEJhdGNoU2l6ZSk7XG4gICAgICAgIGxldCB0ZXN0UmVzdWx0ID0gVC56ZXJvcyhbMV0pO1xuICAgICAgICBmb3IgYXdhaXQgKGxldCBbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc10gb2YgdGVzdFNhbXBsZUdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgbGFiZWxUZW5zb3IgID0gVC50ZW5zb3IoYmF0Y2hMYWJlbHMpLnJlc2hhcGUoW3Rlc3RCYXRjaFNpemUsIG51bUNsYXNzZXNdKTtcbiAgICAgICAgICAgIGxldCBzYW1wbGVUZW5zb3IgPSBULnRlbnNvcihiYXRjaFNhbXBsZXMpLmFzVHlwZSgnZmxvYXQzMicpOyBcbiAgICAgICAgICAgIGNvbnN0IHtwcmVkaWN0fSA9IHRoaXMubWFrZVByZWRpY3Qoc2FtcGxlVGVuc29yLCB0ZXN0QmF0Y2hTaXplKTtcbiAgICAgICAgICAgIGxldCBvbmVob3RQcmVkaWN0ID0gVC5vbmVIb3QocHJlZGljdCwgbnVtQ2xhc3Nlcyk7XG4gICAgICAgICAgICBvbmVob3RQcmVkaWN0LnByaW50KCk7XG4gICAgICAgICAgICBsYWJlbFRlbnNvci5wcmludCgpO1xuICAgICAgICAgICAgb25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpLnByaW50KCk7XG4gICAgICAgICAgICB0ZXN0UmVzdWx0ID0gdGVzdFJlc3VsdC5hZGQob25laG90UHJlZGljdC5tdWwobGFiZWxUZW5zb3IpLnN1bSgpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGVzdFJlc3VsdC5kYXRhKCk7XG4gICAgICAgIGxldCBwYXNzID0gcmVzdWx0WzBdO1xuICAgICAgICBsZXQgYWNjdXJhY3kgPSBwYXNzL3Rlc3RCYXRjaFNpemU7XG4gICAgICAgIHJldHVybiB7YWNjdXJhY3ksIHBhc3N9OyAgICAgICAgXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UGFyYW1zKGFzT2JqZWN0PXRydWUpe1xuICAgICAgICBjb25zdCBGID0gdGhpcy5GLCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBnZXRQYXJhbXMgPSBhc3luYyAocGFyYW1zKT0+e1xuICAgICAgICAgICAgaWYoRi5pc1RlbnNvcihwYXJhbXMpKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShhd2FpdCBwYXJhbXMuZGF0YSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IGtWYWxzID0gUi50b1BhaXJzKHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHt9O1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW2ssIHZhbF0gb2Yga1ZhbHMpe1xuICAgICAgICAgICAgICAgICAgICByZXNba10gPSBhd2FpdCBnZXRQYXJhbXModmFsKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBwYXJhbXMgPSBhd2FpdCBnZXRQYXJhbXModGhpcy5uZXRQYXJhbXMpO1xuICAgICAgICBpZihhc09iamVjdCl7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBzYXZlUGFyYW1zKGZpbGVOYW1lPScuL3NhdmUubW9kZWwnKXtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gYXdhaXQgdGhpcy5nZXRQYXJhbXMoKTtcbiAgICAgICAgY29uc29sZS5sb2coe3BhcmFtc30pO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLndyaXRlRmlsZShmaWxlTmFtZSwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRQYXJhbXMoZmlsZU5hbWUpe1xuICAgICAgICBsZXQgX3BhcmFtcyA9IGF3YWl0IHRoaXMuc3RvcmFnZS5yZWFkRmlsZShmaWxlTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtfcGFyYW1zfSk7XG4gICAgICAgIGxldCBwYXJhbXMgPSBKU09OLnBhcnNlKF9wYXJhbXMpO1xuICAgICAgICB0aGlzLnNldE9ySW5pdFBhcmFtcyh0aGlzLkJhc2VQaXBlbGluZSwgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0UGFyYW1zKGZhbHNlKTtcbiAgICB9XG59IiwiaW1wb3J0IHtGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb259IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgQmFzZUZ1bmN0aW9ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgaXNUZW5zb3IodmFsKXtcbiAgICAgICAgLy8gcmV0dXJuIHZhbCBpbnN0YW5jZW9mIHRoaXMmJiBcbiAgICAgICAgcmV0dXJuIHZhbC5zaGFwZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByYW5nZShsZW4pe1xuICAgICAgICByZXR1cm4gdGhpcy5SLnJhbmdlKDAsIGxlbik7XG4gICAgfVxuXG4gICAgaXNQYXJhbWV0ZXIodmFsKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuaXMoQXJyYXkpKHZhbCkgJiYgUi5hbGwoUi5pcyhOdW1iZXIpLCB2YWwpO1xuICAgIH1cblxuICAgIGdldFBpcGVsaW5lKG5ldENvbmZpZyl7XG4gICAgICAgIC8vVE9ETzogbWFrZSBhc3NlcnRvclxuICAgICAgICByZXR1cm4gdGhpcy5SLnByb3AoJ1BpcGVsaW5lJywgbmV0Q29uZmlnKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0SHlwZXJQYXJhbWV0ZXIobmV0Q29uZmlnKXtcbiAgICAgICAgLy9UT0RPOiBtYWtlIGFzc2VydG9yXG4gICAgICAgIHJldHVybiB0aGlzLlIucHJvcCgnSHlwZXJQYXJhbWV0ZXJzJywgbmV0Q29uZmlnKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0VHJhdmVyc2UoKXtcbiAgICAgICAgcmV0dXJuIFIuY3VycnkoZnVuY3Rpb24oa2V5cywgaXRlbSl7XG4gICAgICAgICAgICBSLnBpcGUuYXBwbHkobnVsbCwgUi5tYXAoUi5wcm9wLCBrZXlzKSkoaXRlbSk7XG4gICAgICAgIH0pOyBcbiAgICB9XG4gICAgXG4gICAgcGFyYW1ldGVyQWNxdWlzaXRpb24ocGlwZWxpbmVJdGVtLCBoeXBlclBhcmFtZXRlcnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SOyBcbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZUlmTWF0Y2godmFsdWUsIGh5cGVyUGFyYW1ldGVycyl7XG4gICAgICAgICAgICBpZihSLmlzKFN0cmluZywgdmFsdWUpICYmIFIuc3RhcnRzV2l0aCgnJCcsIHZhbHVlKSl7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gUi5zbGljZSgxLCBJbmZpbml0eSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSLnByb3Aoa2V5LCBoeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRvUmVwbGFjZUlmTWF0Y2ggPSBSLmN1cnJ5KHJlcGxhY2VJZk1hdGNoKShSLl9fLCBoeXBlclBhcmFtZXRlcnMpO1xuICAgICAgICBmdW5jdGlvbiByZXBsYWNlSHlwZXJQYXJhbWV0ZXIocGlwZWxpbmVJdGVtKXtcbiAgICAgICAgICAgIGlmKFIuaXMoQXJyYXksIHBpcGVsaW5lSXRlbSkgfHwgUi5pcyhPYmplY3QsIHBpcGVsaW5lSXRlbSkpe1xuICAgICAgICAgICAgICAgIHJldHVybiBSLm1hcChyZXBsYWNlSHlwZXJQYXJhbWV0ZXIsIHBpcGVsaW5lSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBkb1JlcGxhY2VJZk1hdGNoKHBpcGVsaW5lSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcGxhY2VIeXBlclBhcmFtZXRlcihwaXBlbGluZUl0ZW0pO1xuICAgIH1cblxuICAgIGlzVGVuc29yKG9iamVjdCl7XG4gICAgICAgIHJldHVybiBvYmplY3Quc2l6ZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5zaGFwZSAhPT0gdW5kZWZpbmVkICYmIG9iamVjdC5kdHlwZSAhPT0gdW5kZWZpbmVkO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyJdLCJzb3VyY2VSb290IjoiIn0=