(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.memcache"), require("causal-net.preprocessing"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.memcache", "causal-net.preprocessing", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/datasets"] = factory(require("causal-net.core"), require("causal-net.memcache"), require("causal-net.preprocessing"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/datasets"] = factory(root["causal-net.core"], root["causal-net.memcache"], root["causal-net.preprocessing"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__, __WEBPACK_EXTERNAL_MODULE_causal_net_preprocessing__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./src/MNIST.ImgDataset.js":
/*!*********************************!*\
  !*** ./src/MNIST.ImgDataset.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./baseImgDataset */ "./src/baseImgDataset.js"), __webpack_require__(/*! causal-net.storage */ "causal-net.storage"), __webpack_require__(/*! causal-net.memcache */ "causal-net.memcache"), __webpack_require__(/*! causal-net.preprocessing */ "causal-net.preprocessing"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _baseImgDataset, _causalNet, _causalNet2, _causalNet3, _causalNet4) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _baseImgDataset = _interopRequireDefault(_baseImgDataset);

  class MnistDataset extends _baseImgDataset.default {
    constructor(configure) {
      super(configure);
      this.storage = _causalNet.IndexDBStorage;
      this.memCache = _causalNet2.MemDownCache;
      this.preprocessing = new _causalNet3.Preprocessing();
    }

    async fetchLabelChunk(chunkUrl, savePath) {
      return await this.storage.fetchBuffer(chunkUrl, savePath);
    }

    async fetchSampleChunk(chunkUrl, savePath) {
      return await this.storage.fetchPNGFile(chunkUrl, savePath);
    }

    async fetchDataset(saveDir = '/mnist/', numchunks = 1, selectBy = 'random') {
      let sampleChunks = ['data-chunk-0.png'];
      let labelChunks = ['label-chunk-0'];

      const FetchSampleChunk = async chunkName => {
        const ChunkUrl = this.configuration.datasetUrl + chunkName;
        const SavePath = saveDir + chunkName;
        console.log({
          ChunkUrl,
          SavePath
        });
        return await this.fetchSampleChunk(ChunkUrl, SavePath);
      };

      const FetchLabelChunk = async chunkName => {
        let chunkUrl = this.configuration.datasetUrl + chunkName;
        let savePath = saveDir + chunkName;
        console.log({
          chunkUrl,
          savePath
        });
        return await this.fetchLabelChunk(chunkUrl, savePath);
      };

      let chunkFetchList = this.F.zip(sampleChunks, labelChunks);
      this.savedChunks = await Promise.all(chunkFetchList.map(async ([sampleChunk, labelChunk]) => {
        let samplePath = await FetchSampleChunk(sampleChunk);
        let labelPath = await FetchLabelChunk(labelChunk);
        return [samplePath, labelPath];
      }));
      let [sampleStorage, labelStorage] = this.F.unzip(this.savedChunks);
      this.savedChunkSamples = sampleStorage;
      this.savedChunkLabels = labelStorage;
      return {
        sampleStorage,
        labelStorage
      };
    }

    makePreprocessingStream(saveDir = '/preprocessing/mnist/', storeInMemory = false) {
      this.preProcessingStorage = storeInMemory ? this.memCache : this.storage;
      const ImageBufferSize = this.F.getImgBufferSize(this.sampleSize);
      const LabelBufferSize = this.numClass;
      console.log({
        imageBufferSize: ImageBufferSize,
        labelBufferSize: LabelBufferSize
      });

      const TransformFn = (chunk, chunkEncoding, afterTransformFn) => {
        const TransformAsync = async () => {
          let sampleBuffer = chunk.sample;
          let labelBuffer = chunk.label;
          console.log({
            sampleBuffer,
            labelBuffer
          });
          let splitedImgBuffer = await this.preprocessing.splitImageBuffer(sampleBuffer, ImageBufferSize);
          let splitedLabelBuffer = await this.preprocessing.splitImageBuffer(labelBuffer, LabelBufferSize);
          return {
            transformedData: this.F.zip(splitedImgBuffer, splitedLabelBuffer),
            chunkIdx: chunk.idx
          };
        };

        TransformAsync(chunk).then(transformedChunk => {
          afterTransformFn(null, transformedChunk);
        });
      };

      const WriteFn = (transformedChunk, chunkEncoding, callback) => {
        const WriteAsync = async transformedChunk => {
          let generator = this.F.generatorWithIndex(transformedChunk.transformedData);
          let chunkIdx = transformedChunk.chunkIdx;
          let samplePath = [],
              labelPath = [];

          for (let [idx, [sample, label]] of generator) {
            let chunkSamplePath = await this.preProcessingStorage.setItem(saveDir + 'data/' + chunkIdx + '/' + idx + '/', sample);
            let chunkLabelPath = await this.preProcessingStorage.setItem(saveDir + 'label/' + chunkIdx + '/' + idx + '/', label);
            samplePath = [...samplePath, chunkSamplePath];
            labelPath = [...labelPath, chunkLabelPath];
          }

          return this.F.zip(samplePath, labelPath);
        };

        WriteAsync(transformedChunk).then(result => {
          if (this.savedPreprocessing) {
            this.savedPreprocessing = [...this.savedPreprocessing, ...result];
          } else {
            this.savedPreprocessing = result;
          }

          callback();
        });
      };

      let duplexer = _causalNet4.Stream.makeDuplex(WriteFn);

      let transformer = _causalNet4.Stream.makeTransform(TransformFn);

      let stream = duplexer.pipe(transformer).pipe(duplexer);
      return stream;
    }

    async preprocessingDataset(stream) {
      console.log(this.savedChunks);
      let generator = this.F.generatorWithIndex(this.savedChunks);

      for (let [idx, [samplePath, labelPath]] of generator) {
        let sampleItem = await this.storage.getItem(samplePath, true);
        let labelItem = await this.storage.getItem(labelPath, true);
        let sample = sampleItem[samplePath];
        let label = labelItem[labelPath];
        console.log({
          sample,
          label
        });
        stream.push({
          idx,
          sample,
          label
        });
      }

      stream.push(null);
      return new Promise((resolve, reject) => {
        stream.on('finish', () => {
          resolve(this.savedPreprocessing);
        });
      });
    }

    getTrainTestSet(trainSize = null) {
      trainSize = trainSize || parseInt(this.savedPreprocessing.length * 0.9);
      const [trainSet, testSet] = this.F.splitTrainTestSet(this.savedPreprocessing, trainSize);
      return [trainSet, testSet];
    }

    makeSampleGenerator(sampleIdxSet, batchSize = null, start = 0, end = null) {
      batchSize = batchSize ? batchSize : sampleIdxSet.length;
      const batches = this.F.hsplitEvery(sampleIdxSet, batchSize);

      if (end === null) {
        end = batches.length;
      }

      let nextIndex = start,
          iterationCount = 0,
          step = 1;
      console.log({
        batches: batches[0].length
      });
      const batchGenerator = {
        storage: this.preProcessingStorage,
        next: async () => {
          let batchSamples = [],
              batchLabels = [];
          console.log({
            bl: batches[nextIndex],
            nextIndex
          });

          for (let [samplePath, labelPath] of batches[nextIndex]) {
            let sampleItem = await this.storage.getItem(samplePath, true);
            let labelItem = await this.storage.getItem(labelPath, true);
            batchSamples = [...batchSamples, sampleItem[samplePath]];
            batchLabels = [...batchLabels, labelItem[labelPath]];
          }

          nextIndex += step;
          iterationCount++;
          return [batchSamples, batchLabels];
        },

        *[Symbol.iterator]() {
          while (nextIndex < end) {
            yield this.next();
          }
        }

      };
      return batchGenerator;
    }

  }

  _exports.default = MnistDataset;
  ;
});

/***/ }),

/***/ "./src/baseImgDataset.js":
/*!*******************************!*\
  !*** ./src/baseImgDataset.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./function */ "./src/function.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _function) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _function = _interopRequireDefault(_function);

  class BaseImgDataset {
    constructor(datasetConfigure, configureAssertion = null) {
      if (configureAssertion) {
        configureAssertion(this.datasetConfigure);
      }

      this.configuration = datasetConfigure;
      const {
        numSamples,
        sampleSize,
        numClasses
      } = this.configuration;
      this.dataSize = [numSamples, ...sampleSize];
      this.numSamples = numSamples;
      this.sampleSize = sampleSize;
      this.numClass = numClasses;
      this.F = new _function.default();
    }

    summary() {
      return this.configuration;
    }

    async fetchDataset(saveDir = null) {
      throw Error('implement required');
    }

    async loadData(storage) {
      throw Error('implement required');
    }

    async loadLabel(storage) {
      throw Error('implement required');
    }

    async loadDataset(storage) {
      throw Error('implement required');
    }

    makeSampleGenerator(batchSize = 10) {
      throw Error('implement required');
    }

  }

  _exports.default = BaseImgDataset;
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

    async forEachPromise(fn) {}

    zip(data, label) {
      const R = this.R;
      return R.zip(data, label);
    }

    splitBuffer(buffer, splitSize) {}

    unzip(dataset) {
      const R = this.R;

      const Unzip = (uz, datum) => {
        uz[0] = [...uz[0], datum[0]];
        uz[1] = [...uz[1], datum[1]];
        return uz;
      };

      return R.reduce(Unzip, [[], []], dataset);
    }

    getImgBufferSize(imgSize) {
      const R = this.R;
      return R.reduce((s, d) => s * d, 1, imgSize);
    }

    generatorWithIndex(items) {
      const R = this.R;
      return R.addIndex(R.map)((d, idx) => [idx, d], items);
    }

    splitTrainTestSet(items, splitIndex) {
      const R = this.R;
      return R.splitAt(splitIndex, items);
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./MNIST.ImgDataset */ "./src/MNIST.ImgDataset.js"), __webpack_require__(/*! ./function */ "./src/function.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _MNIST, _function) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "MNIST", {
    enumerable: true,
    get: function () {
      return _MNIST.default;
    }
  });
  Object.defineProperty(_exports, "Function", {
    enumerable: true,
    get: function () {
      return _function.default;
    }
  });
  _MNIST = _interopRequireDefault(_MNIST);
  _function = _interopRequireDefault(_function);
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

/***/ "causal-net.memcache":
/*!**************************************!*\
  !*** external "causal-net.memcache" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__;

/***/ }),

/***/ "causal-net.preprocessing":
/*!*******************************************!*\
  !*** external "causal-net.preprocessing" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_preprocessing__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9NTklTVC5JbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvYmFzZUltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiTW5pc3REYXRhc2V0IiwiQmFzZUltZ0RhdGFzZXQiLCJjb25zdHJ1Y3RvciIsImNvbmZpZ3VyZSIsInN0b3JhZ2UiLCJJbmRleERCU3RvcmFnZSIsIm1lbUNhY2hlIiwiTWVtRG93bkNhY2hlIiwicHJlcHJvY2Vzc2luZyIsIlByZXByb2Nlc3NpbmciLCJmZXRjaExhYmVsQ2h1bmsiLCJjaHVua1VybCIsInNhdmVQYXRoIiwiZmV0Y2hCdWZmZXIiLCJmZXRjaFNhbXBsZUNodW5rIiwiZmV0Y2hQTkdGaWxlIiwiZmV0Y2hEYXRhc2V0Iiwic2F2ZURpciIsIm51bWNodW5rcyIsInNlbGVjdEJ5Iiwic2FtcGxlQ2h1bmtzIiwibGFiZWxDaHVua3MiLCJGZXRjaFNhbXBsZUNodW5rIiwiY2h1bmtOYW1lIiwiQ2h1bmtVcmwiLCJjb25maWd1cmF0aW9uIiwiZGF0YXNldFVybCIsIlNhdmVQYXRoIiwiY29uc29sZSIsImxvZyIsIkZldGNoTGFiZWxDaHVuayIsImNodW5rRmV0Y2hMaXN0IiwiRiIsInppcCIsInNhdmVkQ2h1bmtzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInNhbXBsZUNodW5rIiwibGFiZWxDaHVuayIsInNhbXBsZVBhdGgiLCJsYWJlbFBhdGgiLCJzYW1wbGVTdG9yYWdlIiwibGFiZWxTdG9yYWdlIiwidW56aXAiLCJzYXZlZENodW5rU2FtcGxlcyIsInNhdmVkQ2h1bmtMYWJlbHMiLCJtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbSIsInN0b3JlSW5NZW1vcnkiLCJwcmVQcm9jZXNzaW5nU3RvcmFnZSIsIkltYWdlQnVmZmVyU2l6ZSIsImdldEltZ0J1ZmZlclNpemUiLCJzYW1wbGVTaXplIiwiTGFiZWxCdWZmZXJTaXplIiwibnVtQ2xhc3MiLCJpbWFnZUJ1ZmZlclNpemUiLCJsYWJlbEJ1ZmZlclNpemUiLCJUcmFuc2Zvcm1GbiIsImNodW5rIiwiY2h1bmtFbmNvZGluZyIsImFmdGVyVHJhbnNmb3JtRm4iLCJUcmFuc2Zvcm1Bc3luYyIsInNhbXBsZUJ1ZmZlciIsInNhbXBsZSIsImxhYmVsQnVmZmVyIiwibGFiZWwiLCJzcGxpdGVkSW1nQnVmZmVyIiwic3BsaXRJbWFnZUJ1ZmZlciIsInNwbGl0ZWRMYWJlbEJ1ZmZlciIsInRyYW5zZm9ybWVkRGF0YSIsImNodW5rSWR4IiwiaWR4IiwidGhlbiIsInRyYW5zZm9ybWVkQ2h1bmsiLCJXcml0ZUZuIiwiY2FsbGJhY2siLCJXcml0ZUFzeW5jIiwiZ2VuZXJhdG9yIiwiZ2VuZXJhdG9yV2l0aEluZGV4IiwiY2h1bmtTYW1wbGVQYXRoIiwic2V0SXRlbSIsImNodW5rTGFiZWxQYXRoIiwicmVzdWx0Iiwic2F2ZWRQcmVwcm9jZXNzaW5nIiwiZHVwbGV4ZXIiLCJTdHJlYW0iLCJtYWtlRHVwbGV4IiwidHJhbnNmb3JtZXIiLCJtYWtlVHJhbnNmb3JtIiwic3RyZWFtIiwicGlwZSIsInByZXByb2Nlc3NpbmdEYXRhc2V0Iiwic2FtcGxlSXRlbSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJwdXNoIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwiZ2V0VHJhaW5UZXN0U2V0IiwidHJhaW5TaXplIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJ0cmFpblNldCIsInRlc3RTZXQiLCJzcGxpdFRyYWluVGVzdFNldCIsIm1ha2VTYW1wbGVHZW5lcmF0b3IiLCJzYW1wbGVJZHhTZXQiLCJiYXRjaFNpemUiLCJzdGFydCIsImVuZCIsImJhdGNoZXMiLCJoc3BsaXRFdmVyeSIsIm5leHRJbmRleCIsIml0ZXJhdGlvbkNvdW50Iiwic3RlcCIsImJhdGNoR2VuZXJhdG9yIiwibmV4dCIsImJhdGNoU2FtcGxlcyIsImJhdGNoTGFiZWxzIiwiYmwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImRhdGFzZXRDb25maWd1cmUiLCJjb25maWd1cmVBc3NlcnRpb24iLCJudW1TYW1wbGVzIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwiRnVuY3Rpb24iLCJzdW1tYXJ5IiwiRXJyb3IiLCJsb2FkRGF0YSIsImxvYWRMYWJlbCIsImxvYWREYXRhc2V0IiwiQmFzZUZ1bmN0aW9uIiwiZm9yRWFjaFByb21pc2UiLCJmbiIsImRhdGEiLCJSIiwic3BsaXRCdWZmZXIiLCJidWZmZXIiLCJzcGxpdFNpemUiLCJkYXRhc2V0IiwiVW56aXAiLCJ1eiIsImRhdHVtIiwicmVkdWNlIiwiaW1nU2l6ZSIsInMiLCJkIiwiaXRlbXMiLCJhZGRJ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QUQsRUFBTThFLENBQU4sQ0FBNUIsRUFBc0NDLEtBQXRDLENBQVA7QUFDSDs7QUFDRDdDLHFCQUFpQixDQUFDNkMsS0FBRCxFQUFRRSxVQUFSLEVBQW1CO0FBQ2hDLFlBQU1kLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsYUFBT0EsQ0FBQyxDQUFDZSxPQUFGLENBQVVELFVBQVYsRUFBc0JGLEtBQXRCLENBQVA7QUFDSDs7QUFsQzZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEbEQsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kYXRhc2V0cy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5tZW1jYWNoZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IHtkZWZhdWx0IGFzIEJhc2VJbWdEYXRhc2V0fSBmcm9tICcuL2Jhc2VJbWdEYXRhc2V0JztcbmltcG9ydCB7IEluZGV4REJTdG9yYWdlIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IE1lbURvd25DYWNoZSB9IGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuaW1wb3J0IHsgUHJlcHJvY2Vzc2luZyB9IGZyb20gJ2NhdXNhbC1uZXQucHJlcHJvY2Vzc2luZyc7XG5pbXBvcnQgeyBTdHJlYW0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW5pc3REYXRhc2V0IGV4dGVuZHMgQmFzZUltZ0RhdGFzZXR7XG4gICAgXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJlKXtcbiAgICAgICAgc3VwZXIoY29uZmlndXJlKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gSW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMubWVtQ2FjaGUgPSBNZW1Eb3duQ2FjaGU7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZyA9IG5ldyBQcmVwcm9jZXNzaW5nKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFzeW5jIGZldGNoTGFiZWxDaHVuayhjaHVua1VybCwgc2F2ZVBhdGgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoQnVmZmVyKGNodW5rVXJsLCBzYXZlUGF0aCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hTYW1wbGVDaHVuayhjaHVua1VybCwgc2F2ZVBhdGgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoUE5HRmlsZShjaHVua1VybCwgc2F2ZVBhdGgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoRGF0YXNldChzYXZlRGlyPScvbW5pc3QvJyxudW1jaHVua3M9MSwgc2VsZWN0Qnk9J3JhbmRvbScpe1xuICAgICAgICBsZXQgc2FtcGxlQ2h1bmtzID0gWydkYXRhLWNodW5rLTAucG5nJ107XG4gICAgICAgIGxldCBsYWJlbENodW5rcyA9IFsnbGFiZWwtY2h1bmstMCddO1xuICAgICAgICBjb25zdCBGZXRjaFNhbXBsZUNodW5rID0gYXN5bmMgKGNodW5rTmFtZSk9PntcbiAgICAgICAgICAgIGNvbnN0IENodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBjaHVua05hbWU7XG4gICAgICAgICAgICBjb25zdCBTYXZlUGF0aCA9IHNhdmVEaXIgKyBjaHVua05hbWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7Q2h1bmtVcmwsIFNhdmVQYXRofSk7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaFNhbXBsZUNodW5rKENodW5rVXJsLCBTYXZlUGF0aCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IEZldGNoTGFiZWxDaHVuayA9IGFzeW5jIChjaHVua05hbWUpPT57XG4gICAgICAgICAgICBsZXQgY2h1bmtVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZGF0YXNldFVybCArIGNodW5rTmFtZTtcbiAgICAgICAgICAgIGxldCBzYXZlUGF0aCA9IHNhdmVEaXIgKyBjaHVua05hbWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7Y2h1bmtVcmwsIHNhdmVQYXRofSk7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaExhYmVsQ2h1bmsoY2h1bmtVcmwsIHNhdmVQYXRoKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNodW5rRmV0Y2hMaXN0ID0gdGhpcy5GLnppcChzYW1wbGVDaHVua3MsIGxhYmVsQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgICAgICBjaHVua0ZldGNoTGlzdC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYyAoW3NhbXBsZUNodW5rLCBsYWJlbENodW5rXSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlUGF0aCAgPSBhd2FpdCBGZXRjaFNhbXBsZUNodW5rKHNhbXBsZUNodW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxQYXRoID0gYXdhaXQgRmV0Y2hMYWJlbENodW5rKGxhYmVsQ2h1bmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgIGxldCBbc2FtcGxlU3RvcmFnZSwgbGFiZWxTdG9yYWdlXSA9IHRoaXMuRi51bnppcCh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rU2FtcGxlcyA9IHNhbXBsZVN0b3JhZ2U7XG4gICAgICAgIHRoaXMuc2F2ZWRDaHVua0xhYmVscyA9IGxhYmVsU3RvcmFnZTtcbiAgICAgICAgcmV0dXJuIHtzYW1wbGVTdG9yYWdlLCBsYWJlbFN0b3JhZ2V9O1xuICAgIH1cbiAgICBcbiAgICBtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbShzYXZlRGlyPScvcHJlcHJvY2Vzc2luZy9tbmlzdC8nLHN0b3JlSW5NZW1vcnk9ZmFsc2Upe1xuICAgICAgICB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlID0gKHN0b3JlSW5NZW1vcnkpP3RoaXMubWVtQ2FjaGU6dGhpcy5zdG9yYWdlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgSW1hZ2VCdWZmZXJTaXplID0gdGhpcy5GLmdldEltZ0J1ZmZlclNpemUodGhpcy5zYW1wbGVTaXplKTtcbiAgICAgICAgY29uc3QgTGFiZWxCdWZmZXJTaXplID0gdGhpcy5udW1DbGFzcztcbiAgICAgICAgY29uc29sZS5sb2coe2ltYWdlQnVmZmVyU2l6ZTogSW1hZ2VCdWZmZXJTaXplLCBcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsQnVmZmVyU2l6ZTogTGFiZWxCdWZmZXJTaXplfSk7XG4gICAgICAgIGNvbnN0IFRyYW5zZm9ybUZuID0gKGNodW5rLCBjaHVua0VuY29kaW5nLCBhZnRlclRyYW5zZm9ybUZuKSA9PntcbiAgICAgICAgICAgIGNvbnN0IFRyYW5zZm9ybUFzeW5jID0gYXN5bmMgKCk9PntcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlQnVmZmVyID0gY2h1bmsuc2FtcGxlO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbEJ1ZmZlciA9IGNodW5rLmxhYmVsO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtzYW1wbGVCdWZmZXIsIGxhYmVsQnVmZmVyfSk7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0ZWRJbWdCdWZmZXIgPSBhd2FpdCB0aGlzLnByZXByb2Nlc3Npbmcuc3BsaXRJbWFnZUJ1ZmZlcihzYW1wbGVCdWZmZXIsIEltYWdlQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0ZWRMYWJlbEJ1ZmZlciA9IGF3YWl0IHRoaXMucHJlcHJvY2Vzc2luZy5zcGxpdEltYWdlQnVmZmVyKGxhYmVsQnVmZmVyLCBMYWJlbEJ1ZmZlclNpemUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB7dHJhbnNmb3JtZWREYXRhOiB0aGlzLkYuemlwKHNwbGl0ZWRJbWdCdWZmZXIsIHNwbGl0ZWRMYWJlbEJ1ZmZlciksIGNodW5rSWR4OiBjaHVuay5pZHh9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFRyYW5zZm9ybUFzeW5jKGNodW5rKS50aGVuKHRyYW5zZm9ybWVkQ2h1bms9PntcbiAgICAgICAgICAgICAgICBhZnRlclRyYW5zZm9ybUZuKG51bGwsIHRyYW5zZm9ybWVkQ2h1bmspO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBXcml0ZUZuID0gKHRyYW5zZm9ybWVkQ2h1bmssIGNodW5rRW5jb2RpbmcsIGNhbGxiYWNrKSA9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgV3JpdGVBc3luYyA9IGFzeW5jICh0cmFuc2Zvcm1lZENodW5rKT0+e1xuICAgICAgICAgICAgICAgIGxldCBnZW5lcmF0b3IgPSB0aGlzLkYuZ2VuZXJhdG9yV2l0aEluZGV4KHRyYW5zZm9ybWVkQ2h1bmsudHJhbnNmb3JtZWREYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtJZHggID0gdHJhbnNmb3JtZWRDaHVuay5jaHVua0lkeDtcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlUGF0aCAgPSBbXSwgbGFiZWxQYXRoID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBbaWR4LCBbc2FtcGxlLCBsYWJlbF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtTYW1wbGVQYXRoID0gYXdhaXQgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJdGVtKHNhdmVEaXIgKyAnZGF0YS8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIHNhbXBsZSk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtMYWJlbFBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdsYWJlbC8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlUGF0aCA9IFsuLi5zYW1wbGVQYXRoLCBjaHVua1NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFBhdGggPSBbLi4ubGFiZWxQYXRoLCBjaHVua0xhYmVsUGF0aF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkYuemlwKHNhbXBsZVBhdGgsIGxhYmVsUGF0aCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBXcml0ZUFzeW5jKHRyYW5zZm9ybWVkQ2h1bmspLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gWy4uLnRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLCAuLi5yZXN1bHRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZHVwbGV4ZXIgPSBTdHJlYW0ubWFrZUR1cGxleChXcml0ZUZuKTtcbiAgICAgICAgbGV0IHRyYW5zZm9ybWVyID0gU3RyZWFtLm1ha2VUcmFuc2Zvcm0oVHJhbnNmb3JtRm4pO1xuICAgICAgICBsZXQgc3RyZWFtID0gZHVwbGV4ZXIucGlwZSh0cmFuc2Zvcm1lcikucGlwZShkdXBsZXhlcik7XG4gICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJlcHJvY2Vzc2luZ0RhdGFzZXQoc3RyZWFtKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIGxldCBnZW5lcmF0b3IgPSB0aGlzLkYuZ2VuZXJhdG9yV2l0aEluZGV4KHRoaXMuc2F2ZWRDaHVua3MpO1xuICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdXSBvZiBnZW5lcmF0b3Ipe1xuICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IHNhbXBsZSA9IHNhbXBsZUl0ZW1bc2FtcGxlUGF0aF07XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBsYWJlbEl0ZW1bbGFiZWxQYXRoXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtzYW1wbGUsIGxhYmVsfSk7XG4gICAgICAgICAgICBzdHJlYW0ucHVzaCh7aWR4LCBzYW1wbGUsIGxhYmVsfSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWFtLnB1c2gobnVsbCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgc3RyZWFtLm9uKCdmaW5pc2gnLCAoKT0+e1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBnZXRUcmFpblRlc3RTZXQodHJhaW5TaXplPW51bGwpe1xuICAgICAgICB0cmFpblNpemUgPSB0cmFpblNpemV8fHBhcnNlSW50KHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLmxlbmd0aCowLjkpO1xuXG4gICAgICAgIGNvbnN0IFt0cmFpblNldCwgdGVzdFNldF0gPSB0aGlzLkYuc3BsaXRUcmFpblRlc3RTZXQodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIHRyYWluU2l6ZSk7XG4gICAgICAgIHJldHVybiBbdHJhaW5TZXQsIHRlc3RTZXRdO1xuICAgIH1cblxuICAgIG1ha2VTYW1wbGVHZW5lcmF0b3Ioc2FtcGxlSWR4U2V0LCBiYXRjaFNpemU9bnVsbCwgc3RhcnQ9MCwgZW5kPW51bGwpe1xuICAgICAgICBiYXRjaFNpemUgPSBiYXRjaFNpemU/YmF0Y2hTaXplOnNhbXBsZUlkeFNldC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGJhdGNoZXMgPSB0aGlzLkYuaHNwbGl0RXZlcnkoc2FtcGxlSWR4U2V0LCBiYXRjaFNpemUpO1xuICAgICAgICBpZihlbmQgPT09IG51bGwpe1xuICAgICAgICAgICAgZW5kID0gYmF0Y2hlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRJbmRleCA9IHN0YXJ0LCBpdGVyYXRpb25Db3VudCA9IDAsIHN0ZXAgPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyh7YmF0Y2hlczogYmF0Y2hlc1swXS5sZW5ndGh9KTtcbiAgICAgICAgY29uc3QgYmF0Y2hHZW5lcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZTogdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZSxcbiAgICAgICAgICAgICAgICBuZXh0OiBhc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXRjaFNhbXBsZXMgPSBbXSwgYmF0Y2hMYWJlbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2JsOiBiYXRjaGVzW25leHRJbmRleF0sIG5leHRJbmRleH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdIG9mIGJhdGNoZXNbbmV4dEluZGV4XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hTYW1wbGVzID0gWy4uLmJhdGNoU2FtcGxlcywgc2FtcGxlSXRlbVtzYW1wbGVQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaExhYmVscyA9IFsuLi5iYXRjaExhYmVscywgbGFiZWxJdGVtW2xhYmVsUGF0aF1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSBzdGVwO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb25Db3VudCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZShuZXh0SW5kZXggPCBlbmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYmF0Y2hHZW5lcmF0b3I7XG4gICAgfVxufTtcbiIsImltcG9ydCB7ZGVmYXVsdCBhcyBGdW5jdGlvbn0gZnJvbSAnLi9mdW5jdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlSW1nRGF0YXNldHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhc2V0Q29uZmlndXJlLCBjb25maWd1cmVBc3NlcnRpb249bnVsbCl7XG4gICAgICAgIGlmKGNvbmZpZ3VyZUFzc2VydGlvbil7XG4gICAgICAgICAgICBjb25maWd1cmVBc3NlcnRpb24odGhpcy5kYXRhc2V0Q29uZmlndXJlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBkYXRhc2V0Q29uZmlndXJlO1xuICAgICAgICBjb25zdCB7bnVtU2FtcGxlcywgc2FtcGxlU2l6ZSwgbnVtQ2xhc3Nlc30gPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuZGF0YVNpemUgPSBbbnVtU2FtcGxlcywgLi4uc2FtcGxlU2l6ZV07XG4gICAgICAgIFxuICAgICAgICB0aGlzLm51bVNhbXBsZXMgPSBudW1TYW1wbGVzO1xuICAgICAgICB0aGlzLnNhbXBsZVNpemUgPSBzYW1wbGVTaXplO1xuICAgICAgICB0aGlzLm51bUNsYXNzICAgPSBudW1DbGFzc2VzO1xuICAgICAgICB0aGlzLkYgPSBuZXcgRnVuY3Rpb24oKTtcbiAgICB9XG4gICAgXG4gICAgc3VtbWFyeSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBmZXRjaERhdGFzZXQoc2F2ZURpcj1udWxsKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWREYXRhKHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZExhYmVsKHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfSAgICBcbiAgICBcbiAgICBhc3luYyBsb2FkRGF0YXNldChzdG9yYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIG1ha2VTYW1wbGVHZW5lcmF0b3IoYmF0Y2hTaXplPTEwKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Z1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgQmFzZUZ1bmN0aW9ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIGFzeW5jIGZvckVhY2hQcm9taXNlKGZuKXtcbiAgICAgICAgXG4gICAgfVxuICAgIHppcChkYXRhLCBsYWJlbCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnppcChkYXRhLCBsYWJlbCk7XG4gICAgfVxuICAgIHNwbGl0QnVmZmVyKGJ1ZmZlciwgc3BsaXRTaXplKXtcbiAgICAgICAgXG4gICAgfTtcbiAgICB1bnppcChkYXRhc2V0KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVW56aXAgPSAodXosIGRhdHVtKT0+e1xuICAgICAgICAgICAgdXpbMF0gPSBbLi4udXpbMF0sIGRhdHVtWzBdXTtcbiAgICAgICAgICAgIHV6WzFdID0gWy4uLnV6WzFdLCBkYXR1bVsxXV07XG4gICAgICAgICAgICByZXR1cm4gdXo7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSLnJlZHVjZShVbnppcCxbW10sIFtdXSxkYXRhc2V0KTtcbiAgICB9XG4gICAgZ2V0SW1nQnVmZmVyU2l6ZShpbWdTaXplKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKChzLGQpPT5zKmQsMSxpbWdTaXplKTtcbiAgICB9XG4gICAgZ2VuZXJhdG9yV2l0aEluZGV4KGl0ZW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuYWRkSW5kZXgoUi5tYXApKChkLCBpZHgpPT5baWR4LCBkXSwgaXRlbXMpO1xuICAgIH1cbiAgICBzcGxpdFRyYWluVGVzdFNldChpdGVtcywgc3BsaXRJbmRleCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnNwbGl0QXQoc3BsaXRJbmRleCwgaXRlbXMpO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==