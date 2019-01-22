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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./baseImgDataset */ "./src/baseImgDataset.js"), __webpack_require__(/*! ./function */ "./src/function.js"), __webpack_require__(/*! causal-net.storage */ "causal-net.storage"), __webpack_require__(/*! causal-net.memcache */ "causal-net.memcache"), __webpack_require__(/*! causal-net.preprocessing */ "causal-net.preprocessing"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _baseImgDataset, _function, _causalNet, _causalNet2, _causalNet3, _causalNet4) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _baseImgDataset = _interopRequireDefault(_baseImgDataset);
  _function = _interopRequireDefault(_function);

  class MnistDataset extends _baseImgDataset.default {
    constructor(configure) {
      super(configure);
      this.storage = _causalNet.indexDBStorage;
      this.memCache = _causalNet2.memDownCache;
      this.preprocessing = new _causalNet3.Preprocessing();
      this.F = new _function.default();
    }

    async fetchLabelChunk(chunkUrl, savePath) {
      this.logger.debug({
        chunkUrl,
        savePath
      });
      return await this.storage.fetchFile(chunkUrl, savePath);
    }

    async fetchSampleChunk(chunkUrl, savePath) {
      return await this.storage.fetchPNGFile(chunkUrl, savePath);
    }

    selectFetchedChunks(numchunks, selectBy = 'random') {
      let chunkIdxs = _causalNet4.Sampling.choice(this.configuration.chunkList, numchunks);

      return chunkIdxs.map((idx, ith) => [`data-chunk-${idx}.png`, `label-chunk-${idx}`]);
    }

    async readDataset(datasetDir, saveDir = '/mnist/', numchunks = 1, selectBy = 'random') {
      throw Error('implement require');
    }

    async fetchDataset(saveDir = '/mnist/', numchunks = 1, selectBy = 'random') {
      let selectedChunks = this.selectFetchedChunks(numchunks, selectBy);
      let [sampleChunks, labelChunks] = this.F.unzip(selectedChunks);
      this.logger.debug({
        selectedChunks,
        sampleChunks,
        labelChunks
      });
      let chunkFetchList = this.F.zip(sampleChunks, labelChunks);
      this.savedChunks = [];

      for (let [sampleChunk, labelChunk] of chunkFetchList) {
        let sampleChunkUrl = this.configuration.datasetUrl + sampleChunk;
        let sammpleSavePath = saveDir + sampleChunk;
        this.logger.debug({
          sampleChunkUrl,
          sammpleSavePath
        });
        let samplePath = await this.storage.fetchPNGFile(sampleChunkUrl, sammpleSavePath);
        this.logger.debug({
          samplePath
        });
        let labelChunkUrl = this.configuration.datasetUrl + labelChunk;
        let labelSavePath = saveDir + labelChunk;
        this.logger.debug({
          labelChunkUrl,
          labelSavePath
        });
        let labelPath = await this.storage.fetchFile(labelChunkUrl, labelSavePath);
        this.logger.debug({
          labelPath
        });
        this.savedChunks.push([samplePath, labelPath]);

        if (this.logger.process) {
          this.logger.process({
            saveChunks: this.savedChunks
          });
        }
      }

      ;
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
      this.logger.debug({
        imageBufferSize: ImageBufferSize,
        labelBufferSize: LabelBufferSize
      });

      const TransformFn = (chunk, chunkEncoding, afterTransformFn) => {
        const TransformAsync = async () => {
          let sampleBuffer = chunk.sample;
          let labelBuffer = chunk.label;
          this.logger.debug({
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
      this.logger.debug(this.savedChunks);
      let generator = this.F.generatorWithIndex(this.savedChunks);

      for (let [idx, [samplePath, labelPath]] of generator) {
        let sampleItem = await this.storage.getItem(samplePath, true);
        let labelItem = await this.storage.getItem(labelPath, true);
        let sample = sampleItem[samplePath];
        let label = labelItem[labelPath];
        this.logger.debug({
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

      const _batches = this.F.hsplitEvery(sampleIdxSet, batchSize);

      const batches = _causalNet4.Sampling.choice(_batches, _batches.length);

      if (end === null) {
        end = batches.length;
      }

      let nextIndex = start,
          iterationCount = 0,
          step = 1;
      const batchGenerator = {
        storage: this.preProcessingStorage,
        next: async () => {
          let batchSamples = [],
              batchLabels = [];

          for (let [samplePath, labelPath] of batches[nextIndex]) {
            let sampleItem = await this.storage.getItem(samplePath, true);
            let labelItem = await this.storage.getItem(labelPath, true);
            batchSamples = [...batchSamples, sampleItem[samplePath]];
            batchLabels = [...batchLabels, labelItem[labelPath]];
          }

          nextIndex += step;
          let idx = iterationCount;
          iterationCount++;
          return {
            idx,
            batchSize,
            data: [batchSamples, batchLabels]
          };
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
      this.logger = console;
    }

    set Logger(logger) {
      this.logger = logger;
    }

    get Logger() {
      return this.logger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9NTklTVC5JbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvYmFzZUltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiTW5pc3REYXRhc2V0IiwiQmFzZUltZ0RhdGFzZXQiLCJjb25zdHJ1Y3RvciIsImNvbmZpZ3VyZSIsInN0b3JhZ2UiLCJpbmRleERCU3RvcmFnZSIsIm1lbUNhY2hlIiwibWVtRG93bkNhY2hlIiwicHJlcHJvY2Vzc2luZyIsIlByZXByb2Nlc3NpbmciLCJGIiwiRnVuY3Rpb24iLCJmZXRjaExhYmVsQ2h1bmsiLCJjaHVua1VybCIsInNhdmVQYXRoIiwibG9nZ2VyIiwiZGVidWciLCJmZXRjaEZpbGUiLCJmZXRjaFNhbXBsZUNodW5rIiwiZmV0Y2hQTkdGaWxlIiwic2VsZWN0RmV0Y2hlZENodW5rcyIsIm51bWNodW5rcyIsInNlbGVjdEJ5IiwiY2h1bmtJZHhzIiwiU2FtcGxpbmciLCJjaG9pY2UiLCJjb25maWd1cmF0aW9uIiwiY2h1bmtMaXN0IiwibWFwIiwiaWR4IiwiaXRoIiwicmVhZERhdGFzZXQiLCJkYXRhc2V0RGlyIiwic2F2ZURpciIsIkVycm9yIiwiZmV0Y2hEYXRhc2V0Iiwic2VsZWN0ZWRDaHVua3MiLCJzYW1wbGVDaHVua3MiLCJsYWJlbENodW5rcyIsInVuemlwIiwiY2h1bmtGZXRjaExpc3QiLCJ6aXAiLCJzYXZlZENodW5rcyIsInNhbXBsZUNodW5rIiwibGFiZWxDaHVuayIsInNhbXBsZUNodW5rVXJsIiwiZGF0YXNldFVybCIsInNhbW1wbGVTYXZlUGF0aCIsInNhbXBsZVBhdGgiLCJsYWJlbENodW5rVXJsIiwibGFiZWxTYXZlUGF0aCIsImxhYmVsUGF0aCIsInB1c2giLCJwcm9jZXNzIiwic2F2ZUNodW5rcyIsInNhbXBsZVN0b3JhZ2UiLCJsYWJlbFN0b3JhZ2UiLCJzYXZlZENodW5rU2FtcGxlcyIsInNhdmVkQ2h1bmtMYWJlbHMiLCJtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbSIsInN0b3JlSW5NZW1vcnkiLCJwcmVQcm9jZXNzaW5nU3RvcmFnZSIsIkltYWdlQnVmZmVyU2l6ZSIsImdldEltZ0J1ZmZlclNpemUiLCJzYW1wbGVTaXplIiwiTGFiZWxCdWZmZXJTaXplIiwibnVtQ2xhc3MiLCJpbWFnZUJ1ZmZlclNpemUiLCJsYWJlbEJ1ZmZlclNpemUiLCJUcmFuc2Zvcm1GbiIsImNodW5rIiwiY2h1bmtFbmNvZGluZyIsImFmdGVyVHJhbnNmb3JtRm4iLCJUcmFuc2Zvcm1Bc3luYyIsInNhbXBsZUJ1ZmZlciIsInNhbXBsZSIsImxhYmVsQnVmZmVyIiwibGFiZWwiLCJzcGxpdGVkSW1nQnVmZmVyIiwic3BsaXRJbWFnZUJ1ZmZlciIsInNwbGl0ZWRMYWJlbEJ1ZmZlciIsInRyYW5zZm9ybWVkRGF0YSIsImNodW5rSWR4IiwidGhlbiIsInRyYW5zZm9ybWVkQ2h1bmsiLCJXcml0ZUZuIiwiY2FsbGJhY2siLCJXcml0ZUFzeW5jIiwiZ2VuZXJhdG9yIiwiZ2VuZXJhdG9yV2l0aEluZGV4IiwiY2h1bmtTYW1wbGVQYXRoIiwic2V0SXRlbSIsImNodW5rTGFiZWxQYXRoIiwicmVzdWx0Iiwic2F2ZWRQcmVwcm9jZXNzaW5nIiwiZHVwbGV4ZXIiLCJTdHJlYW0iLCJtYWtlRHVwbGV4IiwidHJhbnNmb3JtZXIiLCJtYWtlVHJhbnNmb3JtIiwic3RyZWFtIiwicGlwZSIsInByZXByb2Nlc3NpbmdEYXRhc2V0Iiwic2FtcGxlSXRlbSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwiZ2V0VHJhaW5UZXN0U2V0IiwidHJhaW5TaXplIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJ0cmFpblNldCIsInRlc3RTZXQiLCJzcGxpdFRyYWluVGVzdFNldCIsIm1ha2VTYW1wbGVHZW5lcmF0b3IiLCJzYW1wbGVJZHhTZXQiLCJiYXRjaFNpemUiLCJzdGFydCIsImVuZCIsIl9iYXRjaGVzIiwiaHNwbGl0RXZlcnkiLCJiYXRjaGVzIiwibmV4dEluZGV4IiwiaXRlcmF0aW9uQ291bnQiLCJzdGVwIiwiYmF0Y2hHZW5lcmF0b3IiLCJuZXh0IiwiYmF0Y2hTYW1wbGVzIiwiYmF0Y2hMYWJlbHMiLCJkYXRhIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJkYXRhc2V0Q29uZmlndXJlIiwiY29uZmlndXJlQXNzZXJ0aW9uIiwibnVtU2FtcGxlcyIsIm51bUNsYXNzZXMiLCJkYXRhU2l6ZSIsImNvbnNvbGUiLCJMb2dnZXIiLCJzdW1tYXJ5IiwibG9hZERhdGEiLCJsb2FkTGFiZWwiLCJsb2FkRGF0YXNldCIsIkJhc2VGdW5jdGlvbiIsImltZ1NpemUiLCJSIiwicmVkdWNlIiwicyIsImQiLCJpdGVtcyIsImFkZEluZGV4Iiwic3BsaXRJbmRleCIsInNwbGl0QXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ2UsUUFBTUEsWUFBTixTQUEyQkMsdUJBQTNCLENBQXlDO0FBRXBEQyxlQUFXLENBQUNDLFNBQUQsRUFBVztBQUNsQixZQUFNQSxTQUFOO0FBQ0EsV0FBS0MsT0FBTCxHQUFlQyx5QkFBZjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0JDLHdCQUFoQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosRUFBckI7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ckIsWUFBTUMsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxhQUFPQSxDQUFDLENBQUNDLE1BQUYsQ0FBUyxDQUFDQyxDQUFELEVBQUdDLENBQUgsS0FBT0QsQ0FBQyxHQUFDQyxDQUFsQixFQUFvQixDQUFwQixFQUFzQkosT0FBdEIsQ0FBUDtBQUNIOztBQUNEMUQsc0JBQWtCLENBQUMrRCxLQUFELEVBQU87QUFDckIsWUFBTUosQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxhQUFPQSxDQUFDLENBQUNLLFFBQUYsQ0FBV0wsQ0FBQyxDQUFDeEgsR0FBYixFQUFrQixDQUFDMkgsQ0FBRCxFQUFJMUgsR0FBSixLQUFVLENBQUNBLEdBQUQsRUFBTTBILENBQU4sQ0FBNUIsRUFBc0NDLEtBQXRDLENBQVA7QUFDSDs7QUFDRHBDLHFCQUFpQixDQUFDb0MsS0FBRCxFQUFRRSxVQUFSLEVBQW1CO0FBQ2hDLFlBQU1OLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsYUFBT0EsQ0FBQyxDQUFDTyxPQUFGLENBQVVELFVBQVYsRUFBc0JGLEtBQXRCLENBQVA7QUFDSDs7QUFoQjZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEbEQsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kYXRhc2V0cy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5tZW1jYWNoZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBCYXNlSW1nRGF0YXNldCB9IGZyb20gJy4vYmFzZUltZ0RhdGFzZXQnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgbWVtRG93bkNhY2hlIH0gZnJvbSAnY2F1c2FsLW5ldC5tZW1jYWNoZSc7XG5pbXBvcnQgeyBQcmVwcm9jZXNzaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nJztcbmltcG9ydCB7IFN0cmVhbSwgU2FtcGxpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW5pc3REYXRhc2V0IGV4dGVuZHMgQmFzZUltZ0RhdGFzZXR7XG4gICAgXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJlKXtcbiAgICAgICAgc3VwZXIoY29uZmlndXJlKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gaW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMubWVtQ2FjaGUgPSBtZW1Eb3duQ2FjaGU7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZyA9IG5ldyBQcmVwcm9jZXNzaW5nKCk7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoTGFiZWxDaHVuayhjaHVua1VybCwgc2F2ZVBhdGgpe1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7Y2h1bmtVcmwsIHNhdmVQYXRofSk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hGaWxlKGNodW5rVXJsLCBzYXZlUGF0aCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hTYW1wbGVDaHVuayhjaHVua1VybCwgc2F2ZVBhdGgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoUE5HRmlsZShjaHVua1VybCwgc2F2ZVBhdGgpO1xuICAgIH1cblxuICAgIHNlbGVjdEZldGNoZWRDaHVua3MobnVtY2h1bmtzLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIGxldCBjaHVua0lkeHMgPSBTYW1wbGluZy5jaG9pY2UodGhpcy5jb25maWd1cmF0aW9uLmNodW5rTGlzdCwgbnVtY2h1bmtzKTtcbiAgICAgICAgcmV0dXJuIGNodW5rSWR4cy5tYXAoKGlkeCwgaXRoKT0+KFtgZGF0YS1jaHVuay0ke2lkeH0ucG5nYCxgbGFiZWwtY2h1bmstJHtpZHh9YF0pKTtcbiAgICB9XG5cbiAgICBhc3luYyByZWFkRGF0YXNldChkYXRhc2V0RGlyLCBzYXZlRGlyPScvbW5pc3QvJyxudW1jaHVua3M9MSwgc2VsZWN0Qnk9J3JhbmRvbScpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmUnKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaERhdGFzZXQoc2F2ZURpcj0nL21uaXN0LycsbnVtY2h1bmtzPTEsIHNlbGVjdEJ5PSdyYW5kb20nKXtcbiAgICAgICAgbGV0IHNlbGVjdGVkQ2h1bmtzID0gdGhpcy5zZWxlY3RGZXRjaGVkQ2h1bmtzKG51bWNodW5rcywgc2VsZWN0QnkpO1xuICAgICAgICBsZXQgW3NhbXBsZUNodW5rcywgbGFiZWxDaHVua3NdID0gdGhpcy5GLnVuemlwKHNlbGVjdGVkQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NlbGVjdGVkQ2h1bmtzLCBzYW1wbGVDaHVua3MsIGxhYmVsQ2h1bmtzfSk7XG4gICAgICAgIGxldCBjaHVua0ZldGNoTGlzdCA9IHRoaXMuRi56aXAoc2FtcGxlQ2h1bmtzLCBsYWJlbENodW5rcyk7XG4gICAgICAgIHRoaXMuc2F2ZWRDaHVua3MgPSBbXTtcbiAgICAgICAgZm9yKGxldCBbc2FtcGxlQ2h1bmssIGxhYmVsQ2h1bmtdIG9mIGNodW5rRmV0Y2hMaXN0KXtcbiAgICAgICAgICAgIGxldCBzYW1wbGVDaHVua1VybCA9IHRoaXMuY29uZmlndXJhdGlvbi5kYXRhc2V0VXJsICsgc2FtcGxlQ2h1bms7XG4gICAgICAgICAgICBsZXQgc2FtbXBsZVNhdmVQYXRoID0gc2F2ZURpciArIHNhbXBsZUNodW5rO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZUNodW5rVXJsLCBzYW1tcGxlU2F2ZVBhdGh9KTtcbiAgICAgICAgICAgIGxldCBzYW1wbGVQYXRoID0gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoUE5HRmlsZShzYW1wbGVDaHVua1VybCwgc2FtbXBsZVNhdmVQYXRoKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtzYW1wbGVQYXRofSk7XG4gICAgICAgICAgICBsZXQgbGFiZWxDaHVua1VybCA9IHRoaXMuY29uZmlndXJhdGlvbi5kYXRhc2V0VXJsICsgbGFiZWxDaHVuaztcbiAgICAgICAgICAgIGxldCBsYWJlbFNhdmVQYXRoID0gc2F2ZURpciArIGxhYmVsQ2h1bms7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7bGFiZWxDaHVua1VybCwgbGFiZWxTYXZlUGF0aH0pO1xuICAgICAgICAgICAgbGV0IGxhYmVsUGF0aCA9IGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaEZpbGUobGFiZWxDaHVua1VybCwgbGFiZWxTYXZlUGF0aCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7bGFiZWxQYXRofSk7XG4gICAgICAgICAgICB0aGlzLnNhdmVkQ2h1bmtzLnB1c2goW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0pO1xuICAgICAgICAgICAgaWYodGhpcy5sb2dnZXIucHJvY2Vzcyl7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIucHJvY2Vzcyh7c2F2ZUNodW5rczp0aGlzLnNhdmVkQ2h1bmtzfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBbc2FtcGxlU3RvcmFnZSwgbGFiZWxTdG9yYWdlXSA9IHRoaXMuRi51bnppcCh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rU2FtcGxlcyA9IHNhbXBsZVN0b3JhZ2U7XG4gICAgICAgIHRoaXMuc2F2ZWRDaHVua0xhYmVscyA9IGxhYmVsU3RvcmFnZTtcbiAgICAgICAgcmV0dXJuIHtzYW1wbGVTdG9yYWdlLCBsYWJlbFN0b3JhZ2V9O1xuICAgIH1cbiAgICBcbiAgICBtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbShzYXZlRGlyPScvcHJlcHJvY2Vzc2luZy9tbmlzdC8nLHN0b3JlSW5NZW1vcnk9ZmFsc2Upe1xuICAgICAgICB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlID0gKHN0b3JlSW5NZW1vcnkpP3RoaXMubWVtQ2FjaGU6dGhpcy5zdG9yYWdlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgSW1hZ2VCdWZmZXJTaXplID0gdGhpcy5GLmdldEltZ0J1ZmZlclNpemUodGhpcy5zYW1wbGVTaXplKTtcbiAgICAgICAgY29uc3QgTGFiZWxCdWZmZXJTaXplID0gdGhpcy5udW1DbGFzcztcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe2ltYWdlQnVmZmVyU2l6ZTogSW1hZ2VCdWZmZXJTaXplLCBcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsQnVmZmVyU2l6ZTogTGFiZWxCdWZmZXJTaXplfSk7XG4gICAgICAgIGNvbnN0IFRyYW5zZm9ybUZuID0gKGNodW5rLCBjaHVua0VuY29kaW5nLCBhZnRlclRyYW5zZm9ybUZuKSA9PntcbiAgICAgICAgICAgIGNvbnN0IFRyYW5zZm9ybUFzeW5jID0gYXN5bmMgKCk9PntcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlQnVmZmVyID0gY2h1bmsuc2FtcGxlO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbEJ1ZmZlciA9IGNodW5rLmxhYmVsO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtzYW1wbGVCdWZmZXIsIGxhYmVsQnVmZmVyfSk7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0ZWRJbWdCdWZmZXIgPSBhd2FpdCB0aGlzLnByZXByb2Nlc3Npbmcuc3BsaXRJbWFnZUJ1ZmZlcihzYW1wbGVCdWZmZXIsIEltYWdlQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0ZWRMYWJlbEJ1ZmZlciA9IGF3YWl0IHRoaXMucHJlcHJvY2Vzc2luZy5zcGxpdEltYWdlQnVmZmVyKGxhYmVsQnVmZmVyLCBMYWJlbEJ1ZmZlclNpemUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7dHJhbnNmb3JtZWREYXRhOiB0aGlzLkYuemlwKHNwbGl0ZWRJbWdCdWZmZXIsIHNwbGl0ZWRMYWJlbEJ1ZmZlciksIGNodW5rSWR4OiBjaHVuay5pZHh9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFRyYW5zZm9ybUFzeW5jKGNodW5rKS50aGVuKHRyYW5zZm9ybWVkQ2h1bms9PntcbiAgICAgICAgICAgICAgICBhZnRlclRyYW5zZm9ybUZuKG51bGwsIHRyYW5zZm9ybWVkQ2h1bmspO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBXcml0ZUZuID0gKHRyYW5zZm9ybWVkQ2h1bmssIGNodW5rRW5jb2RpbmcsIGNhbGxiYWNrKSA9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgV3JpdGVBc3luYyA9IGFzeW5jICh0cmFuc2Zvcm1lZENodW5rKT0+e1xuICAgICAgICAgICAgICAgIGxldCBnZW5lcmF0b3IgPSB0aGlzLkYuZ2VuZXJhdG9yV2l0aEluZGV4KHRyYW5zZm9ybWVkQ2h1bmsudHJhbnNmb3JtZWREYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtJZHggID0gdHJhbnNmb3JtZWRDaHVuay5jaHVua0lkeDtcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlUGF0aCAgPSBbXSwgbGFiZWxQYXRoID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBbaWR4LCBbc2FtcGxlLCBsYWJlbF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtTYW1wbGVQYXRoID0gYXdhaXQgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJdGVtKHNhdmVEaXIgKyAnZGF0YS8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIHNhbXBsZSk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtMYWJlbFBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdsYWJlbC8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlUGF0aCA9IFsuLi5zYW1wbGVQYXRoLCBjaHVua1NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFBhdGggPSBbLi4ubGFiZWxQYXRoLCBjaHVua0xhYmVsUGF0aF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkYuemlwKHNhbXBsZVBhdGgsIGxhYmVsUGF0aCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBXcml0ZUFzeW5jKHRyYW5zZm9ybWVkQ2h1bmspLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gWy4uLnRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLCAuLi5yZXN1bHRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZHVwbGV4ZXIgPSBTdHJlYW0ubWFrZUR1cGxleChXcml0ZUZuKTtcbiAgICAgICAgbGV0IHRyYW5zZm9ybWVyID0gU3RyZWFtLm1ha2VUcmFuc2Zvcm0oVHJhbnNmb3JtRm4pO1xuICAgICAgICBsZXQgc3RyZWFtID0gZHVwbGV4ZXIucGlwZSh0cmFuc2Zvcm1lcikucGlwZShkdXBsZXhlcik7XG4gICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJlcHJvY2Vzc2luZ0RhdGFzZXQoc3RyZWFtKXtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIGxldCBnZW5lcmF0b3IgPSB0aGlzLkYuZ2VuZXJhdG9yV2l0aEluZGV4KHRoaXMuc2F2ZWRDaHVua3MpO1xuICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdXSBvZiBnZW5lcmF0b3Ipe1xuICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IHNhbXBsZSA9IHNhbXBsZUl0ZW1bc2FtcGxlUGF0aF07XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBsYWJlbEl0ZW1bbGFiZWxQYXRoXTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtzYW1wbGUsIGxhYmVsfSk7XG4gICAgICAgICAgICBzdHJlYW0ucHVzaCh7aWR4LCBzYW1wbGUsIGxhYmVsfSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWFtLnB1c2gobnVsbCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgc3RyZWFtLm9uKCdmaW5pc2gnLCAoKT0+e1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBnZXRUcmFpblRlc3RTZXQodHJhaW5TaXplPW51bGwpe1xuICAgICAgICB0cmFpblNpemUgPSB0cmFpblNpemV8fHBhcnNlSW50KHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLmxlbmd0aCowLjkpO1xuXG4gICAgICAgIGNvbnN0IFt0cmFpblNldCwgdGVzdFNldF0gPSB0aGlzLkYuc3BsaXRUcmFpblRlc3RTZXQodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIHRyYWluU2l6ZSk7XG4gICAgICAgIHJldHVybiBbdHJhaW5TZXQsIHRlc3RTZXRdO1xuICAgIH1cblxuICAgIG1ha2VTYW1wbGVHZW5lcmF0b3Ioc2FtcGxlSWR4U2V0LCBiYXRjaFNpemU9bnVsbCwgc3RhcnQ9MCwgZW5kPW51bGwpe1xuICAgICAgICBcbiAgICAgICAgYmF0Y2hTaXplID0gYmF0Y2hTaXplP2JhdGNoU2l6ZTpzYW1wbGVJZHhTZXQubGVuZ3RoO1xuICAgICAgICBjb25zdCBfYmF0Y2hlcyA9IHRoaXMuRi5oc3BsaXRFdmVyeShzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZSk7XG4gICAgICAgIGNvbnN0IGJhdGNoZXMgPSBTYW1wbGluZy5jaG9pY2UoX2JhdGNoZXMsIF9iYXRjaGVzLmxlbmd0aCk7XG4gICAgICAgIGlmKGVuZCA9PT0gbnVsbCl7XG4gICAgICAgICAgICBlbmQgPSBiYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gc3RhcnQsIGl0ZXJhdGlvbkNvdW50ID0gMCwgc3RlcCA9IDE7XG4gICAgICAgIGNvbnN0IGJhdGNoR2VuZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2U6IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UsXG4gICAgICAgICAgICAgICAgbmV4dDogYXN5bmMoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmF0Y2hTYW1wbGVzID0gW10sIGJhdGNoTGFiZWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0gb2YgYmF0Y2hlc1tuZXh0SW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaFNhbXBsZXMgPSBbLi4uYmF0Y2hTYW1wbGVzLCBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoTGFiZWxzID0gWy4uLmJhdGNoTGFiZWxzLCBsYWJlbEl0ZW1bbGFiZWxQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4ICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZHggPSBpdGVyYXRpb25Db3VudDtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtpZHgsIGJhdGNoU2l6ZSwgZGF0YTpbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc119O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZShuZXh0SW5kZXggPCBlbmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYmF0Y2hHZW5lcmF0b3I7XG4gICAgfVxufTtcbiIsImltcG9ydCB7ZGVmYXVsdCBhcyBGdW5jdGlvbn0gZnJvbSAnLi9mdW5jdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlSW1nRGF0YXNldHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhc2V0Q29uZmlndXJlLCBjb25maWd1cmVBc3NlcnRpb249bnVsbCl7XG4gICAgICAgIGlmKGNvbmZpZ3VyZUFzc2VydGlvbil7XG4gICAgICAgICAgICBjb25maWd1cmVBc3NlcnRpb24odGhpcy5kYXRhc2V0Q29uZmlndXJlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBkYXRhc2V0Q29uZmlndXJlO1xuICAgICAgICBjb25zdCB7bnVtU2FtcGxlcywgc2FtcGxlU2l6ZSwgbnVtQ2xhc3Nlc30gPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuZGF0YVNpemUgPSBbbnVtU2FtcGxlcywgLi4uc2FtcGxlU2l6ZV07XG4gICAgICAgIFxuICAgICAgICB0aGlzLm51bVNhbXBsZXMgPSBudW1TYW1wbGVzO1xuICAgICAgICB0aGlzLnNhbXBsZVNpemUgPSBzYW1wbGVTaXplO1xuICAgICAgICB0aGlzLm51bUNsYXNzICAgPSBudW1DbGFzc2VzO1xuXG4gICAgICAgIHRoaXMubG9nZ2VyID0gY29uc29sZTtcbiAgICB9XG5cbiAgICBzZXQgTG9nZ2VyKGxvZ2dlcil7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgIH1cbiAgICBcbiAgICBnZXQgTG9nZ2VyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlcjtcbiAgICB9XG4gICAgXG4gICAgc3VtbWFyeSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBmZXRjaERhdGFzZXQoc2F2ZURpcj1udWxsKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWREYXRhKHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZExhYmVsKHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfSAgICBcbiAgICBcbiAgICBhc3luYyBsb2FkRGF0YXNldChzdG9yYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIFxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcihiYXRjaFNpemU9MTApe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7RnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9ufSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBCYXNlRnVuY3Rpb257XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0SW1nQnVmZmVyU2l6ZShpbWdTaXplKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKChzLGQpPT5zKmQsMSxpbWdTaXplKTtcbiAgICB9XG4gICAgZ2VuZXJhdG9yV2l0aEluZGV4KGl0ZW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuYWRkSW5kZXgoUi5tYXApKChkLCBpZHgpPT5baWR4LCBkXSwgaXRlbXMpO1xuICAgIH1cbiAgICBzcGxpdFRyYWluVGVzdFNldChpdGVtcywgc3BsaXRJbmRleCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnNwbGl0QXQoc3BsaXRJbmRleCwgaXRlbXMpO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==