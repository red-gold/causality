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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9NTklTVC5JbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvYmFzZUltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiTW5pc3REYXRhc2V0IiwiQmFzZUltZ0RhdGFzZXQiLCJjb25zdHJ1Y3RvciIsImNvbmZpZ3VyZSIsInN0b3JhZ2UiLCJpbmRleERCU3RvcmFnZSIsIm1lbUNhY2hlIiwibWVtRG93bkNhY2hlIiwicHJlcHJvY2Vzc2luZyIsIlByZXByb2Nlc3NpbmciLCJGIiwiRnVuY3Rpb24iLCJmZXRjaExhYmVsQ2h1bmsiLCJjaHVua1VybCIsInNhdmVQYXRoIiwibG9nZ2VyIiwiZGVidWciLCJmZXRjaEZpbGUiLCJmZXRjaFNhbXBsZUNodW5rIiwiZmV0Y2hQTkdGaWxlIiwic2VsZWN0RmV0Y2hlZENodW5rcyIsIm51bWNodW5rcyIsInNlbGVjdEJ5IiwiY2h1bmtJZHhzIiwiU2FtcGxpbmciLCJjaG9pY2UiLCJjb25maWd1cmF0aW9uIiwiY2h1bmtMaXN0IiwibWFwIiwiaWR4IiwiaXRoIiwicmVhZERhdGFzZXQiLCJkYXRhc2V0RGlyIiwic2F2ZURpciIsIkVycm9yIiwiZmV0Y2hEYXRhc2V0Iiwic2VsZWN0ZWRDaHVua3MiLCJzYW1wbGVDaHVua3MiLCJsYWJlbENodW5rcyIsInVuemlwIiwiY2h1bmtGZXRjaExpc3QiLCJ6aXAiLCJzYXZlZENodW5rcyIsInNhbXBsZUNodW5rIiwibGFiZWxDaHVuayIsInNhbXBsZUNodW5rVXJsIiwiZGF0YXNldFVybCIsInNhbW1wbGVTYXZlUGF0aCIsInNhbXBsZVBhdGgiLCJsYWJlbENodW5rVXJsIiwibGFiZWxTYXZlUGF0aCIsImxhYmVsUGF0aCIsInB1c2giLCJwcm9jZXNzIiwic2F2ZUNodW5rcyIsInNhbXBsZVN0b3JhZ2UiLCJsYWJlbFN0b3JhZ2UiLCJzYXZlZENodW5rU2FtcGxlcyIsInNhdmVkQ2h1bmtMYWJlbHMiLCJtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbSIsInN0b3JlSW5NZW1vcnkiLCJwcmVQcm9jZXNzaW5nU3RvcmFnZSIsIkltYWdlQnVmZmVyU2l6ZSIsImdldEltZ0J1ZmZlclNpemUiLCJzYW1wbGVTaXplIiwiTGFiZWxCdWZmZXJTaXplIiwibnVtQ2xhc3MiLCJpbWFnZUJ1ZmZlclNpemUiLCJsYWJlbEJ1ZmZlclNpemUiLCJUcmFuc2Zvcm1GbiIsImNodW5rIiwiY2h1bmtFbmNvZGluZyIsImFmdGVyVHJhbnNmb3JtRm4iLCJUcmFuc2Zvcm1Bc3luYyIsInNhbXBsZUJ1ZmZlciIsInNhbXBsZSIsImxhYmVsQnVmZmVyIiwibGFiZWwiLCJzcGxpdGVkSW1nQnVmZmVyIiwic3BsaXRJbWFnZUJ1ZmZlciIsInNwbGl0ZWRMYWJlbEJ1ZmZlciIsInRyYW5zZm9ybWVkRGF0YSIsImNodW5rSWR4IiwidGhlbiIsInRyYW5zZm9ybWVkQ2h1bmsiLCJXcml0ZUZuIiwiY2FsbGJhY2siLCJXcml0ZUFzeW5jIiwiZ2VuZXJhdG9yIiwiZ2VuZXJhdG9yV2l0aEluZGV4IiwiY2h1bmtTYW1wbGVQYXRoIiwic2V0SXRlbSIsImNodW5rTGFiZWxQYXRoIiwicmVzdWx0Iiwic2F2ZWRQcmVwcm9jZXNzaW5nIiwiZHVwbGV4ZXIiLCJTdHJlYW0iLCJtYWtlRHVwbGV4IiwidHJhbnNmb3JtZXIiLCJtYWtlVHJhbnNmb3JtIiwic3RyZWFtIiwicGlwZSIsInByZXByb2Nlc3NpbmdEYXRhc2V0Iiwic2FtcGxlSXRlbSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwiZ2V0VHJhaW5UZXN0U2V0IiwidHJhaW5TaXplIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJ0cmFpblNldCIsInRlc3RTZXQiLCJzcGxpdFRyYWluVGVzdFNldCIsIm1ha2VTYW1wbGVHZW5lcmF0b3IiLCJzYW1wbGVJZHhTZXQiLCJiYXRjaFNpemUiLCJzdGFydCIsImVuZCIsIl9iYXRjaGVzIiwiaHNwbGl0RXZlcnkiLCJiYXRjaGVzIiwibmV4dEluZGV4IiwiaXRlcmF0aW9uQ291bnQiLCJzdGVwIiwiYmF0Y2hHZW5lcmF0b3IiLCJuZXh0IiwiYmF0Y2hTYW1wbGVzIiwiYmF0Y2hMYWJlbHMiLCJkYXRhIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJkYXRhc2V0Q29uZmlndXJlIiwiY29uZmlndXJlQXNzZXJ0aW9uIiwibnVtU2FtcGxlcyIsIm51bUNsYXNzZXMiLCJkYXRhU2l6ZSIsImNvbnNvbGUiLCJMb2dnZXIiLCJzdW1tYXJ5IiwibG9hZERhdGEiLCJsb2FkTGFiZWwiLCJsb2FkRGF0YXNldCIsIkJhc2VGdW5jdGlvbiIsImltZ1NpemUiLCJSIiwicmVkdWNlIiwicyIsImQiLCJpdGVtcyIsImFkZEluZGV4Iiwic3BsaXRJbmRleCIsInNwbGl0QXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ2UsUUFBTUEsWUFBTixTQUEyQkMsdUJBQTNCLENBQXlDO0FBRXBEQyxlQUFXLENBQUNDLFNBQUQsRUFBVztBQUNsQixZQUFNQSxTQUFOO0FBQ0EsV0FBS0MsT0FBTCxHQUFlQyx5QkFBZjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0JDLHdCQUFoQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosRUFBckI7QUFDQSxXQUFLQyxDQUFMLEdBQVMsSUFBSUMsaUJBQUosRUFBVDtBQUNIOztBQUVELFVBQU1DLGVBQU4sQ0FBc0JDLFFBQXRCLEVBQWdDQyxRQUFoQyxFQUF5QztBQUNyQyxXQUFLQyxNQUFMLENBQVlDLEtBQVosQ0FBa0I7QUFBQ0gsZ0JBQUQ7QUFBV0M7QUFBWCxPQUFsQjtBQUNBLGFBQU8sTUFBTSxLQUFLVixPQUFMLENBQWFhLFNBQWIsQ0FBdUJKLFFBQXZCLEVBQWlDQyxRQUFqQyxDQUFiO0FBQ0g7O0FBRUQsVUFBTUksZ0JBQU4sQ0FBdUJMLFFBQXZCLEVBQWlDQyxRQUFqQyxFQUEwQztBQUN0QyxhQUFPLE1BQU0sS0FBS1YsT0FBTCxDQUFhZSxZQUFiLENBQTBCTixRQUExQixFQUFvQ0MsUUFBcEMsQ0FBYjtBQUNIOztBQUVETSx1QkFBbUIsQ0FBQ0MsU0FBRCxFQUFZQyxRQUFRLEdBQUMsUUFBckIsRUFBOEI7QUFDN0MsVUFBSUMsU0FBUyxHQUFHQyxxQkFBU0MsTUFBVCxDQUFnQixLQUFLQyxhQUFMLENBQW1CQyxTQUFuQyxFQUE4Q04sU0FBOUMsQ0FBaEI7O0FBQ0EsYUFBT0UsU0FBUyxDQUFDSyxHQUFWLENBQWMsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWEsQ0FBRSxjQUFhRCxHQUFJLE1BQW5CLEVBQTBCLGVBQWNBLEdBQUksRUFBNUMsQ0FBM0IsQ0FBUDtBQUNIOztBQUVELFVBQU1FLFdBQU4sQ0FBa0JDLFVBQWxCLEVBQThCQyxPQUFPLEdBQUMsU0FBdEMsRUFBZ0RaLFNBQVMsR0FBQyxDQUExRCxFQUE2REMsUUFBUSxHQUFDLFFBQXRFLEVBQStFO0FBQzNFLFlBQU1ZLEtBQUssQ0FBQyxtQkFBRCxDQUFYO0FBQ0g7O0FBRUQsVUFBTUMsWUFBTixDQUFtQkYsT0FBTyxHQUFDLFNBQTNCLEVBQXFDWixTQUFTLEdBQUMsQ0FBL0MsRUFBa0RDLFFBQVEsR0FBQyxRQUEzRCxFQUFvRTtBQUNoRSxVQUFJYyxjQUFjLEdBQUcsS0FBS2hCLG1CQUFMLENBQXlCQyxTQUF6QixFQUFvQ0MsUUFBcEMsQ0FBckI7QUFDQSxVQUFJLENBQUNlLFlBQUQsRUFBZUMsV0FBZixJQUE4QixLQUFLNUIsQ0FBTCxDQUFPNkIsS0FBUCxDQUFhSCxjQUFiLENBQWxDO0FBQ0EsV0FBS3JCLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjtBQUFDb0Isc0JBQUQ7QUFBaUJDLG9CQUFqQjtBQUErQkM7QUFBL0IsT0FBbEI7QUFDQSxVQUFJRSxjQUFjLEdBQUcsS0FBSzlCLENBQUwsQ0FBTytCLEdBQVAsQ0FBV0osWUFBWCxFQUF5QkMsV0FBekIsQ0FBckI7QUFDQSxXQUFLSSxXQUFMLEdBQW1CLEVBQW5COztBQUNBLFdBQUksSUFBSSxDQUFDQyxXQUFELEVBQWNDLFVBQWQsQ0FBUixJQUFxQ0osY0FBckMsRUFBb0Q7QUFDaEQsWUFBSUssY0FBYyxHQUFHLEtBQUtuQixhQUFMLENBQW1Cb0IsVUFBbkIsR0FBZ0NILFdBQXJEO0FBQ0EsWUFBSUksZUFBZSxHQUFHZCxPQUFPLEdBQUdVLFdBQWhDO0FBQ0EsYUFBSzVCLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjtBQUFDNkIsd0JBQUQ7QUFBaUJFO0FBQWpCLFNBQWxCO0FBQ0EsWUFBSUMsVUFBVSxHQUFHLE1BQU0sS0FBSzVDLE9BQUwsQ0FBYWUsWUFBYixDQUEwQjBCLGNBQTFCLEVBQTBDRSxlQUExQyxDQUF2QjtBQUNBLGFBQUtoQyxNQUFMLENBQVlDLEtBQVosQ0FBa0I7QUFBQ2dDO0FBQUQsU0FBbEI7QUFDQSxZQUFJQyxhQUFhLEdBQUcsS0FBS3ZCLGFBQUwsQ0FBbUJvQixVQUFuQixHQUFnQ0YsVUFBcEQ7QUFDQSxZQUFJTSxhQUFhLEdBQUdqQixPQUFPLEdBQUdXLFVBQTlCO0FBQ0EsYUFBSzdCLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjtBQUFDaUMsdUJBQUQ7QUFBZ0JDO0FBQWhCLFNBQWxCO0FBQ0EsWUFBSUMsU0FBUyxHQUFHLE1BQU0sS0FBSy9DLE9BQUwsQ0FBYWEsU0FBYixDQUF1QmdDLGFBQXZCLEVBQXNDQyxhQUF0QyxDQUF0QjtBQUNBLGFBQUtuQyxNQUFMLENBQVlDLEtBQVosQ0FBa0I7QUFBQ21DO0FBQUQsU0FBbEI7QUFDQSxhQUFLVCxXQUFMLENBQWlCVSxJQUFqQixDQUFzQixDQUFDSixVQUFELEVBQWFHLFNBQWIsQ0FBdEI7O0FBQ0EsWUFBRyxLQUFLcEMsTUFBTCxDQUFZc0MsT0FBZixFQUF1QjtBQUNuQixlQUFLdEMsTUFBTCxDQUFZc0MsT0FBWixDQUFvQjtBQUFDQyxzQkFBVSxFQUFDLEtBQUtaO0FBQWpCLFdBQXBCO0FBQ0g7QUFDSjs7QUFBQTtBQUNELFVBQUksQ0FBQ2EsYUFBRCxFQUFnQkMsWUFBaEIsSUFBZ0MsS0FBSzlDLENBQUwsQ0FBTzZCLEtBQVAsQ0FBYSxLQUFLRyxXQUFsQixDQUFwQztBQUNBLFdBQUtlLGlCQUFMLEdBQXlCRixhQUF6QjtBQUNBLFdBQUtHLGdCQUFMLEdBQXdCRixZQUF4QjtBQUNBLGFBQU87QUFBQ0QscUJBQUQ7QUFBZ0JDO0FBQWhCLE9BQVA7QUFDSDs7QUFFREcsMkJBQXVCLENBQUMxQixPQUFPLEdBQUMsdUJBQVQsRUFBaUMyQixhQUFhLEdBQUMsS0FBL0MsRUFBcUQ7QUFDeEUsV0FBS0Msb0JBQUwsR0FBNkJELGFBQUQsR0FBZ0IsS0FBS3RELFFBQXJCLEdBQThCLEtBQUtGLE9BQS9EO0FBRUEsWUFBTTBELGVBQWUsR0FBRyxLQUFLcEQsQ0FBTCxDQUFPcUQsZ0JBQVAsQ0FBd0IsS0FBS0MsVUFBN0IsQ0FBeEI7QUFDQSxZQUFNQyxlQUFlLEdBQUcsS0FBS0MsUUFBN0I7QUFDQSxXQUFLbkQsTUFBTCxDQUFZQyxLQUFaLENBQWtCO0FBQUNtRCx1QkFBZSxFQUFFTCxlQUFsQjtBQUNMTSx1QkFBZSxFQUFFSDtBQURaLE9BQWxCOztBQUVBLFlBQU1JLFdBQVcsR0FBRyxDQUFDQyxLQUFELEVBQVFDLGFBQVIsRUFBdUJDLGdCQUF2QixLQUEyQztBQUMzRCxjQUFNQyxjQUFjLEdBQUcsWUFBVTtBQUM3QixjQUFJQyxZQUFZLEdBQUdKLEtBQUssQ0FBQ0ssTUFBekI7QUFDQSxjQUFJQyxXQUFXLEdBQUdOLEtBQUssQ0FBQ08sS0FBeEI7QUFDQSxlQUFLOUQsTUFBTCxDQUFZQyxLQUFaLENBQWtCO0FBQUMwRCx3QkFBRDtBQUFlRTtBQUFmLFdBQWxCO0FBQ0EsY0FBSUUsZ0JBQWdCLEdBQUcsTUFBTSxLQUFLdEUsYUFBTCxDQUFtQnVFLGdCQUFuQixDQUFvQ0wsWUFBcEMsRUFBa0RaLGVBQWxELENBQTdCO0FBQ0EsY0FBSWtCLGtCQUFrQixHQUFHLE1BQU0sS0FBS3hFLGFBQUwsQ0FBbUJ1RSxnQkFBbkIsQ0FBb0NILFdBQXBDLEVBQWlEWCxlQUFqRCxDQUEvQjtBQUNBLGlCQUFPO0FBQUNnQiwyQkFBZSxFQUFFLEtBQUt2RSxDQUFMLENBQU8rQixHQUFQLENBQVdxQyxnQkFBWCxFQUE2QkUsa0JBQTdCLENBQWxCO0FBQW9FRSxvQkFBUSxFQUFFWixLQUFLLENBQUN6QztBQUFwRixXQUFQO0FBQ0gsU0FQRDs7QUFRQTRDLHNCQUFjLENBQUNILEtBQUQsQ0FBZCxDQUFzQmEsSUFBdEIsQ0FBMkJDLGdCQUFnQixJQUFFO0FBQ3pDWiwwQkFBZ0IsQ0FBQyxJQUFELEVBQU9ZLGdCQUFQLENBQWhCO0FBQ0gsU0FGRDtBQUdILE9BWkQ7O0FBY0EsWUFBTUMsT0FBTyxHQUFHLENBQUNELGdCQUFELEVBQW1CYixhQUFuQixFQUFrQ2UsUUFBbEMsS0FBOEM7QUFFMUQsY0FBTUMsVUFBVSxHQUFHLE1BQU9ILGdCQUFQLElBQTBCO0FBQ3pDLGNBQUlJLFNBQVMsR0FBRyxLQUFLOUUsQ0FBTCxDQUFPK0Usa0JBQVAsQ0FBMEJMLGdCQUFnQixDQUFDSCxlQUEzQyxDQUFoQjtBQUNBLGNBQUlDLFFBQVEsR0FBSUUsZ0JBQWdCLENBQUNGLFFBQWpDO0FBQ0EsY0FBSWxDLFVBQVUsR0FBSSxFQUFsQjtBQUFBLGNBQXNCRyxTQUFTLEdBQUcsRUFBbEM7O0FBQ0EsZUFBSSxJQUFJLENBQUN0QixHQUFELEVBQU0sQ0FBQzhDLE1BQUQsRUFBU0UsS0FBVCxDQUFOLENBQVIsSUFBa0NXLFNBQWxDLEVBQTRDO0FBRXhDLGdCQUFJRSxlQUFlLEdBQUcsTUFBTSxLQUFLN0Isb0JBQUwsQ0FDbkI4QixPQURtQixDQUNYMUQsT0FBTyxHQUFHLE9BQVYsR0FBb0JpRCxRQUFwQixHQUErQixHQUEvQixHQUFxQ3JELEdBQXJDLEdBQTJDLEdBRGhDLEVBQ3FDOEMsTUFEckMsQ0FBNUI7QUFFQSxnQkFBSWlCLGNBQWMsR0FBRyxNQUFNLEtBQUsvQixvQkFBTCxDQUNsQjhCLE9BRGtCLENBQ1YxRCxPQUFPLEdBQUcsUUFBVixHQUFxQmlELFFBQXJCLEdBQWdDLEdBQWhDLEdBQXNDckQsR0FBdEMsR0FBNEMsR0FEbEMsRUFDdUNnRCxLQUR2QyxDQUEzQjtBQUVBN0Isc0JBQVUsR0FBRyxDQUFDLEdBQUdBLFVBQUosRUFBZ0IwQyxlQUFoQixDQUFiO0FBQ0F2QyxxQkFBUyxHQUFHLENBQUMsR0FBR0EsU0FBSixFQUFleUMsY0FBZixDQUFaO0FBQ0g7O0FBQ0QsaUJBQU8sS0FBS2xGLENBQUwsQ0FBTytCLEdBQVAsQ0FBV08sVUFBWCxFQUF1QkcsU0FBdkIsQ0FBUDtBQUNILFNBZEQ7O0FBZ0JBb0Msa0JBQVUsQ0FBQ0gsZ0JBQUQsQ0FBVixDQUE2QkQsSUFBN0IsQ0FBbUNVLE1BQUQsSUFBVTtBQUN4QyxjQUFHLEtBQUtDLGtCQUFSLEVBQTJCO0FBQ3ZCLGlCQUFLQSxrQkFBTCxHQUEwQixDQUFDLEdBQUcsS0FBS0Esa0JBQVQsRUFBNkIsR0FBR0QsTUFBaEMsQ0FBMUI7QUFDSCxXQUZELE1BR0k7QUFDQSxpQkFBS0Msa0JBQUwsR0FBMEJELE1BQTFCO0FBQ0g7O0FBQ0RQLGtCQUFRO0FBQ1gsU0FSRDtBQVNILE9BM0JEOztBQTRCQSxVQUFJUyxRQUFRLEdBQUdDLG1CQUFPQyxVQUFQLENBQWtCWixPQUFsQixDQUFmOztBQUNBLFVBQUlhLFdBQVcsR0FBR0YsbUJBQU9HLGFBQVAsQ0FBcUI5QixXQUFyQixDQUFsQjs7QUFDQSxVQUFJK0IsTUFBTSxHQUFHTCxRQUFRLENBQUNNLElBQVQsQ0FBY0gsV0FBZCxFQUEyQkcsSUFBM0IsQ0FBZ0NOLFFBQWhDLENBQWI7QUFDQSxhQUFPSyxNQUFQO0FBQ0g7O0FBRUQsVUFBTUUsb0JBQU4sQ0FBMkJGLE1BQTNCLEVBQWtDO0FBQzlCLFdBQUtyRixNQUFMLENBQVlDLEtBQVosQ0FBa0IsS0FBSzBCLFdBQXZCO0FBQ0EsVUFBSThDLFNBQVMsR0FBRyxLQUFLOUUsQ0FBTCxDQUFPK0Usa0JBQVAsQ0FBMEIsS0FBSy9DLFdBQS9CLENBQWhCOztBQUNBLFdBQUksSUFBSSxDQUFDYixHQUFELEVBQU0sQ0FBQ21CLFVBQUQsRUFBYUcsU0FBYixDQUFOLENBQVIsSUFBMENxQyxTQUExQyxFQUFvRDtBQUNoRCxZQUFJZSxVQUFVLEdBQUcsTUFBTSxLQUFLbkcsT0FBTCxDQUFhb0csT0FBYixDQUFxQnhELFVBQXJCLEVBQWlDLElBQWpDLENBQXZCO0FBQ0EsWUFBSXlELFNBQVMsR0FBRyxNQUFNLEtBQUtyRyxPQUFMLENBQWFvRyxPQUFiLENBQXFCckQsU0FBckIsRUFBZ0MsSUFBaEMsQ0FBdEI7QUFDQSxZQUFJd0IsTUFBTSxHQUFHNEIsVUFBVSxDQUFDdkQsVUFBRCxDQUF2QjtBQUNBLFlBQUk2QixLQUFLLEdBQUc0QixTQUFTLENBQUN0RCxTQUFELENBQXJCO0FBQ0EsYUFBS3BDLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjtBQUFDMkQsZ0JBQUQ7QUFBU0U7QUFBVCxTQUFsQjtBQUNBdUIsY0FBTSxDQUFDaEQsSUFBUCxDQUFZO0FBQUN2QixhQUFEO0FBQU04QyxnQkFBTjtBQUFjRTtBQUFkLFNBQVo7QUFDSDs7QUFDRHVCLFlBQU0sQ0FBQ2hELElBQVAsQ0FBWSxJQUFaO0FBQ0EsYUFBTyxJQUFJc0QsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFtQjtBQUNsQ1IsY0FBTSxDQUFDUyxFQUFQLENBQVUsUUFBVixFQUFvQixNQUFJO0FBQ3BCRixpQkFBTyxDQUFDLEtBQUtiLGtCQUFOLENBQVA7QUFDSCxTQUZEO0FBR0gsT0FKTSxDQUFQO0FBS0g7O0FBRURnQixtQkFBZSxDQUFDQyxTQUFTLEdBQUMsSUFBWCxFQUFnQjtBQUMzQkEsZUFBUyxHQUFHQSxTQUFTLElBQUVDLFFBQVEsQ0FBQyxLQUFLbEIsa0JBQUwsQ0FBd0JtQixNQUF4QixHQUErQixHQUFoQyxDQUEvQjtBQUVBLFlBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxPQUFYLElBQXNCLEtBQUt6RyxDQUFMLENBQU8wRyxpQkFBUCxDQUF5QixLQUFLdEIsa0JBQTlCLEVBQWtEaUIsU0FBbEQsQ0FBNUI7QUFDQSxhQUFPLENBQUNHLFFBQUQsRUFBV0MsT0FBWCxDQUFQO0FBQ0g7O0FBRURFLHVCQUFtQixDQUFDQyxZQUFELEVBQWVDLFNBQVMsR0FBQyxJQUF6QixFQUErQkMsS0FBSyxHQUFDLENBQXJDLEVBQXdDQyxHQUFHLEdBQUMsSUFBNUMsRUFBaUQ7QUFFaEVGLGVBQVMsR0FBR0EsU0FBUyxHQUFDQSxTQUFELEdBQVdELFlBQVksQ0FBQ0wsTUFBN0M7O0FBQ0EsWUFBTVMsUUFBUSxHQUFHLEtBQUtoSCxDQUFMLENBQU9pSCxXQUFQLENBQW1CTCxZQUFuQixFQUFpQ0MsU0FBakMsQ0FBakI7O0FBQ0EsWUFBTUssT0FBTyxHQUFHcEcscUJBQVNDLE1BQVQsQ0FBZ0JpRyxRQUFoQixFQUEwQkEsUUFBUSxDQUFDVCxNQUFuQyxDQUFoQjs7QUFDQSxVQUFHUSxHQUFHLEtBQUssSUFBWCxFQUFnQjtBQUNaQSxXQUFHLEdBQUdHLE9BQU8sQ0FBQ1gsTUFBZDtBQUNIOztBQUNELFVBQUlZLFNBQVMsR0FBR0wsS0FBaEI7QUFBQSxVQUF1Qk0sY0FBYyxHQUFHLENBQXhDO0FBQUEsVUFBMkNDLElBQUksR0FBRyxDQUFsRDtBQUNBLFlBQU1DLGNBQWMsR0FBRztBQUNmNUgsZUFBTyxFQUFFLEtBQUt5RCxvQkFEQztBQUVmb0UsWUFBSSxFQUFFLFlBQVM7QUFDWCxjQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFBQSxjQUF1QkMsV0FBVyxHQUFHLEVBQXJDOztBQUNBLGVBQUksSUFBSSxDQUFDbkYsVUFBRCxFQUFhRyxTQUFiLENBQVIsSUFBbUN5RSxPQUFPLENBQUNDLFNBQUQsQ0FBMUMsRUFBc0Q7QUFDbEQsZ0JBQUl0QixVQUFVLEdBQUcsTUFBTSxLQUFLbkcsT0FBTCxDQUFhb0csT0FBYixDQUFxQnhELFVBQXJCLEVBQWdDLElBQWhDLENBQXZCO0FBQ0EsZ0JBQUl5RCxTQUFTLEdBQUcsTUFBTSxLQUFLckcsT0FBTCxDQUFhb0csT0FBYixDQUFxQnJELFNBQXJCLEVBQStCLElBQS9CLENBQXRCO0FBQ0ErRSx3QkFBWSxHQUFHLENBQUMsR0FBR0EsWUFBSixFQUFrQjNCLFVBQVUsQ0FBQ3ZELFVBQUQsQ0FBNUIsQ0FBZjtBQUNBbUYsdUJBQVcsR0FBRyxDQUFDLEdBQUdBLFdBQUosRUFBaUIxQixTQUFTLENBQUN0RCxTQUFELENBQTFCLENBQWQ7QUFDSDs7QUFDRDBFLG1CQUFTLElBQUlFLElBQWI7QUFDQSxjQUFJbEcsR0FBRyxHQUFHaUcsY0FBVjtBQUNBQSx3QkFBYztBQUNkLGlCQUFPO0FBQUNqRyxlQUFEO0FBQU0wRixxQkFBTjtBQUFpQmEsZ0JBQUksRUFBQyxDQUFDRixZQUFELEVBQWVDLFdBQWY7QUFBdEIsV0FBUDtBQUNILFNBZGM7O0FBZWYsVUFBRUUsTUFBTSxDQUFDQyxRQUFULElBQXFCO0FBQ2pCLGlCQUFNVCxTQUFTLEdBQUdKLEdBQWxCLEVBQXNCO0FBQ2xCLGtCQUFNLEtBQUtRLElBQUwsRUFBTjtBQUNIO0FBQ0o7O0FBbkJjLE9BQXZCO0FBcUJBLGFBQU9ELGNBQVA7QUFDSDs7QUF4S21EOzs7QUF5S3ZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS2MsUUFBTS9ILGNBQU4sQ0FBb0I7QUFDL0JDLGVBQVcsQ0FBQ3FJLGdCQUFELEVBQW1CQyxrQkFBa0IsR0FBQyxJQUF0QyxFQUEyQztBQUNsRCxVQUFHQSxrQkFBSCxFQUFzQjtBQUNsQkEsMEJBQWtCLENBQUMsS0FBS0QsZ0JBQU4sQ0FBbEI7QUFDSDs7QUFDRCxXQUFLN0csYUFBTCxHQUFxQjZHLGdCQUFyQjtBQUNBLFlBQU07QUFBQ0Usa0JBQUQ7QUFBYXpFLGtCQUFiO0FBQXlCMEU7QUFBekIsVUFBdUMsS0FBS2hILGFBQWxEO0FBQ0EsV0FBS2lILFFBQUwsR0FBZ0IsQ0FBQ0YsVUFBRCxFQUFhLEdBQUd6RSxVQUFoQixDQUFoQjtBQUVBLFdBQUt5RSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFdBQUt6RSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFdBQUtFLFFBQUwsR0FBa0J3RSxVQUFsQjtBQUVBLFdBQUszSCxNQUFMLEdBQWM2SCxPQUFkO0FBQ0g7O0FBRUQsUUFBSUMsTUFBSixDQUFXOUgsTUFBWCxFQUFrQjtBQUNkLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOztBQUVELFFBQUk4SCxNQUFKLEdBQVk7QUFDUixhQUFPLEtBQUs5SCxNQUFaO0FBQ0g7O0FBRUQrSCxXQUFPLEdBQUU7QUFDTCxhQUFPLEtBQUtwSCxhQUFaO0FBQ0g7O0FBRUQsVUFBTVMsWUFBTixDQUFtQkYsT0FBTyxHQUFDLElBQTNCLEVBQWdDO0FBQzVCLFlBQU1DLEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQ0g7O0FBRUQsVUFBTTZHLFFBQU4sQ0FBZTNJLE9BQWYsRUFBdUI7QUFDbkIsWUFBTThCLEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQ0g7O0FBRUQsVUFBTThHLFNBQU4sQ0FBZ0I1SSxPQUFoQixFQUF3QjtBQUNwQixZQUFNOEIsS0FBSyxDQUFDLG9CQUFELENBQVg7QUFDSDs7QUFFRCxVQUFNK0csV0FBTixDQUFrQjdJLE9BQWxCLEVBQTBCO0FBQ3RCLFlBQU04QixLQUFLLENBQUMsb0JBQUQsQ0FBWDtBQUNIOztBQUlEbUYsdUJBQW1CLENBQUNFLFNBQVMsR0FBQyxFQUFYLEVBQWM7QUFDN0IsWUFBTXJGLEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQ0g7O0FBaEQ4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcEIsUUFBTXZCLFFBQU4sU0FBdUJ1SSxtQkFBdkIsQ0FBbUM7QUFDOUNoSixlQUFXLEdBQUU7QUFDVDtBQUNIOztBQUVENkQsb0JBQWdCLENBQUNvRixPQUFELEVBQVM7QUFDckIsWUFBTUMsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxhQUFPQSxDQUFDLENBQUNDLE1BQUYsQ0FBUyxDQUFDQyxDQUFELEVBQUdDLENBQUgsS0FBT0QsQ0FBQyxHQUFDQyxDQUFsQixFQUFvQixDQUFwQixFQUFzQkosT0FBdEIsQ0FBUDtBQUNIOztBQUNEMUQsc0JBQWtCLENBQUMrRCxLQUFELEVBQU87QUFDckIsWUFBTUosQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxhQUFPQSxDQUFDLENBQUNLLFFBQUYsQ0FBV0wsQ0FBQyxDQUFDeEgsR0FBYixFQUFrQixDQUFDMkgsQ0FBRCxFQUFJMUgsR0FBSixLQUFVLENBQUNBLEdBQUQsRUFBTTBILENBQU4sQ0FBNUIsRUFBc0NDLEtBQXRDLENBQVA7QUFDSDs7QUFDRHBDLHFCQUFpQixDQUFDb0MsS0FBRCxFQUFRRSxVQUFSLEVBQW1CO0FBQ2hDLFlBQU1OLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsYUFBT0EsQ0FBQyxDQUFDTyxPQUFGLENBQVVELFVBQVYsRUFBc0JGLEtBQXRCLENBQVA7QUFDSDs7QUFoQjZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEbEQsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kYXRhc2V0cy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCJdLCByb290W1wiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VJbWdEYXRhc2V0IH0gZnJvbSAnLi9iYXNlSW1nRGF0YXNldCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyBpbmRleERCU3RvcmFnZSB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyBtZW1Eb3duQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmltcG9ydCB7IFByZXByb2Nlc3NpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmcnO1xuaW1wb3J0IHsgU3RyZWFtLCBTYW1wbGluZyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNbmlzdERhdGFzZXQgZXh0ZW5kcyBCYXNlSW1nRGF0YXNldHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmUpe1xuICAgICAgICBzdXBlcihjb25maWd1cmUpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBpbmRleERCU3RvcmFnZTtcbiAgICAgICAgdGhpcy5tZW1DYWNoZSA9IG1lbURvd25DYWNoZTtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nID0gbmV3IFByZXByb2Nlc3NpbmcoKTtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hMYWJlbENodW5rKGNodW5rVXJsLCBzYXZlUGF0aCl7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtjaHVua1VybCwgc2F2ZVBhdGh9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaEZpbGUoY2h1bmtVcmwsIHNhdmVQYXRoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaFNhbXBsZUNodW5rKGNodW5rVXJsLCBzYXZlUGF0aCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hQTkdGaWxlKGNodW5rVXJsLCBzYXZlUGF0aCk7XG4gICAgfVxuXG4gICAgc2VsZWN0RmV0Y2hlZENodW5rcyhudW1jaHVua3MsIHNlbGVjdEJ5PSdyYW5kb20nKXtcbiAgICAgICAgbGV0IGNodW5rSWR4cyA9IFNhbXBsaW5nLmNob2ljZSh0aGlzLmNvbmZpZ3VyYXRpb24uY2h1bmtMaXN0LCBudW1jaHVua3MpO1xuICAgICAgICByZXR1cm4gY2h1bmtJZHhzLm1hcCgoaWR4LCBpdGgpPT4oW2BkYXRhLWNodW5rLSR7aWR4fS5wbmdgLGBsYWJlbC1jaHVuay0ke2lkeH1gXSkpO1xuICAgIH1cblxuICAgIGFzeW5jIHJlYWREYXRhc2V0KGRhdGFzZXREaXIsIHNhdmVEaXI9Jy9tbmlzdC8nLG51bWNodW5rcz0xLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZScpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoRGF0YXNldChzYXZlRGlyPScvbW5pc3QvJyxudW1jaHVua3M9MSwgc2VsZWN0Qnk9J3JhbmRvbScpe1xuICAgICAgICBsZXQgc2VsZWN0ZWRDaHVua3MgPSB0aGlzLnNlbGVjdEZldGNoZWRDaHVua3MobnVtY2h1bmtzLCBzZWxlY3RCeSk7XG4gICAgICAgIGxldCBbc2FtcGxlQ2h1bmtzLCBsYWJlbENodW5rc10gPSB0aGlzLkYudW56aXAoc2VsZWN0ZWRDaHVua3MpO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7c2VsZWN0ZWRDaHVua3MsIHNhbXBsZUNodW5rcywgbGFiZWxDaHVua3N9KTtcbiAgICAgICAgbGV0IGNodW5rRmV0Y2hMaXN0ID0gdGhpcy5GLnppcChzYW1wbGVDaHVua3MsIGxhYmVsQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rcyA9IFtdO1xuICAgICAgICBmb3IobGV0IFtzYW1wbGVDaHVuaywgbGFiZWxDaHVua10gb2YgY2h1bmtGZXRjaExpc3Qpe1xuICAgICAgICAgICAgbGV0IHNhbXBsZUNodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBzYW1wbGVDaHVuaztcbiAgICAgICAgICAgIGxldCBzYW1tcGxlU2F2ZVBhdGggPSBzYXZlRGlyICsgc2FtcGxlQ2h1bms7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7c2FtcGxlQ2h1bmtVcmwsIHNhbW1wbGVTYXZlUGF0aH0pO1xuICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hQTkdGaWxlKHNhbXBsZUNodW5rVXJsLCBzYW1tcGxlU2F2ZVBhdGgpO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZVBhdGh9KTtcbiAgICAgICAgICAgIGxldCBsYWJlbENodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBsYWJlbENodW5rO1xuICAgICAgICAgICAgbGV0IGxhYmVsU2F2ZVBhdGggPSBzYXZlRGlyICsgbGFiZWxDaHVuaztcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtsYWJlbENodW5rVXJsLCBsYWJlbFNhdmVQYXRofSk7XG4gICAgICAgICAgICBsZXQgbGFiZWxQYXRoID0gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoRmlsZShsYWJlbENodW5rVXJsLCBsYWJlbFNhdmVQYXRoKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtsYWJlbFBhdGh9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRDaHVua3MucHVzaChbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSk7XG4gICAgICAgICAgICBpZih0aGlzLmxvZ2dlci5wcm9jZXNzKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5wcm9jZXNzKHtzYXZlQ2h1bmtzOnRoaXMuc2F2ZWRDaHVua3N9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgbGV0IFtzYW1wbGVTdG9yYWdlLCBsYWJlbFN0b3JhZ2VdID0gdGhpcy5GLnVuemlwKHRoaXMuc2F2ZWRDaHVua3MpO1xuICAgICAgICB0aGlzLnNhdmVkQ2h1bmtTYW1wbGVzID0gc2FtcGxlU3RvcmFnZTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rTGFiZWxzID0gbGFiZWxTdG9yYWdlO1xuICAgICAgICByZXR1cm4ge3NhbXBsZVN0b3JhZ2UsIGxhYmVsU3RvcmFnZX07XG4gICAgfVxuICAgIFxuICAgIG1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtKHNhdmVEaXI9Jy9wcmVwcm9jZXNzaW5nL21uaXN0Lycsc3RvcmVJbk1lbW9yeT1mYWxzZSl7XG4gICAgICAgIHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UgPSAoc3RvcmVJbk1lbW9yeSk/dGhpcy5tZW1DYWNoZTp0aGlzLnN0b3JhZ2U7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBJbWFnZUJ1ZmZlclNpemUgPSB0aGlzLkYuZ2V0SW1nQnVmZmVyU2l6ZSh0aGlzLnNhbXBsZVNpemUpO1xuICAgICAgICBjb25zdCBMYWJlbEJ1ZmZlclNpemUgPSB0aGlzLm51bUNsYXNzO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7aW1hZ2VCdWZmZXJTaXplOiBJbWFnZUJ1ZmZlclNpemUsIFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWxCdWZmZXJTaXplOiBMYWJlbEJ1ZmZlclNpemV9KTtcbiAgICAgICAgY29uc3QgVHJhbnNmb3JtRm4gPSAoY2h1bmssIGNodW5rRW5jb2RpbmcsIGFmdGVyVHJhbnNmb3JtRm4pID0+e1xuICAgICAgICAgICAgY29uc3QgVHJhbnNmb3JtQXN5bmMgPSBhc3luYyAoKT0+e1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVCdWZmZXIgPSBjaHVuay5zYW1wbGU7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsQnVmZmVyID0gY2h1bmsubGFiZWw7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZUJ1ZmZlciwgbGFiZWxCdWZmZXJ9KTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRlZEltZ0J1ZmZlciA9IGF3YWl0IHRoaXMucHJlcHJvY2Vzc2luZy5zcGxpdEltYWdlQnVmZmVyKHNhbXBsZUJ1ZmZlciwgSW1hZ2VCdWZmZXJTaXplKTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRlZExhYmVsQnVmZmVyID0gYXdhaXQgdGhpcy5wcmVwcm9jZXNzaW5nLnNwbGl0SW1hZ2VCdWZmZXIobGFiZWxCdWZmZXIsIExhYmVsQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt0cmFuc2Zvcm1lZERhdGE6IHRoaXMuRi56aXAoc3BsaXRlZEltZ0J1ZmZlciwgc3BsaXRlZExhYmVsQnVmZmVyKSwgY2h1bmtJZHg6IGNodW5rLmlkeH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgVHJhbnNmb3JtQXN5bmMoY2h1bmspLnRoZW4odHJhbnNmb3JtZWRDaHVuaz0+e1xuICAgICAgICAgICAgICAgIGFmdGVyVHJhbnNmb3JtRm4obnVsbCwgdHJhbnNmb3JtZWRDaHVuayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFdyaXRlRm4gPSAodHJhbnNmb3JtZWRDaHVuaywgY2h1bmtFbmNvZGluZywgY2FsbGJhY2spID0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBXcml0ZUFzeW5jID0gYXN5bmMgKHRyYW5zZm9ybWVkQ2h1bmspPT57XG4gICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodHJhbnNmb3JtZWRDaHVuay50cmFuc2Zvcm1lZERhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBjaHVua0lkeCAgPSB0cmFuc2Zvcm1lZENodW5rLmNodW5rSWR4O1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVQYXRoICA9IFtdLCBsYWJlbFBhdGggPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGUsIGxhYmVsXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua1NhbXBsZVBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdkYXRhLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgc2FtcGxlKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0xhYmVsUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ2xhYmVsLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVQYXRoID0gWy4uLnNhbXBsZVBhdGgsIGNodW5rU2FtcGxlUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUGF0aCA9IFsuLi5sYWJlbFBhdGgsIGNodW5rTGFiZWxQYXRoXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRi56aXAoc2FtcGxlUGF0aCwgbGFiZWxQYXRoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFdyaXRlQXN5bmModHJhbnNmb3JtZWRDaHVuaykudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSBbLi4udGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIC4uLnJlc3VsdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBkdXBsZXhlciA9IFN0cmVhbS5tYWtlRHVwbGV4KFdyaXRlRm4pO1xuICAgICAgICBsZXQgdHJhbnNmb3JtZXIgPSBTdHJlYW0ubWFrZVRyYW5zZm9ybShUcmFuc2Zvcm1Gbik7XG4gICAgICAgIGxldCBzdHJlYW0gPSBkdXBsZXhlci5waXBlKHRyYW5zZm9ybWVyKS5waXBlKGR1cGxleGVyKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG5cbiAgICBhc3luYyBwcmVwcm9jZXNzaW5nRGF0YXNldChzdHJlYW0pe1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlID0gc2FtcGxlSXRlbVtzYW1wbGVQYXRoXTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGxhYmVsSXRlbVtsYWJlbFBhdGhdO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgICAgIHN0cmVhbS5wdXNoKHtpZHgsIHNhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0ucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBzdHJlYW0ub24oJ2ZpbmlzaCcsICgpPT57XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGdldFRyYWluVGVzdFNldCh0cmFpblNpemU9bnVsbCl7XG4gICAgICAgIHRyYWluU2l6ZSA9IHRyYWluU2l6ZXx8cGFyc2VJbnQodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcubGVuZ3RoKjAuOSk7XG5cbiAgICAgICAgY29uc3QgW3RyYWluU2V0LCB0ZXN0U2V0XSA9IHRoaXMuRi5zcGxpdFRyYWluVGVzdFNldCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgdHJhaW5TaXplKTtcbiAgICAgICAgcmV0dXJuIFt0cmFpblNldCwgdGVzdFNldF07XG4gICAgfVxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcihzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZT1udWxsLCBzdGFydD0wLCBlbmQ9bnVsbCl7XG4gICAgICAgIFxuICAgICAgICBiYXRjaFNpemUgPSBiYXRjaFNpemU/YmF0Y2hTaXplOnNhbXBsZUlkeFNldC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IF9iYXRjaGVzID0gdGhpcy5GLmhzcGxpdEV2ZXJ5KHNhbXBsZUlkeFNldCwgYmF0Y2hTaXplKTtcbiAgICAgICAgY29uc3QgYmF0Y2hlcyA9IFNhbXBsaW5nLmNob2ljZShfYmF0Y2hlcywgX2JhdGNoZXMubGVuZ3RoKTtcbiAgICAgICAgaWYoZW5kID09PSBudWxsKXtcbiAgICAgICAgICAgIGVuZCA9IGJhdGNoZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSBzdGFydCwgaXRlcmF0aW9uQ291bnQgPSAwLCBzdGVwID0gMTtcbiAgICAgICAgY29uc3QgYmF0Y2hHZW5lcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZTogdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZSxcbiAgICAgICAgICAgICAgICBuZXh0OiBhc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXRjaFNhbXBsZXMgPSBbXSwgYmF0Y2hMYWJlbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSBvZiBiYXRjaGVzW25leHRJbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoU2FtcGxlcyA9IFsuLi5iYXRjaFNhbXBsZXMsIHNhbXBsZUl0ZW1bc2FtcGxlUGF0aF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hMYWJlbHMgPSBbLi4uYmF0Y2hMYWJlbHMsIGxhYmVsSXRlbVtsYWJlbFBhdGhdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggKz0gc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkeCA9IGl0ZXJhdGlvbkNvdW50O1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb25Db3VudCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge2lkeCwgYmF0Y2hTaXplLCBkYXRhOltiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXX07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKG5leHRJbmRleCA8IGVuZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBiYXRjaEdlbmVyYXRvcjtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHtkZWZhdWx0IGFzIEZ1bmN0aW9ufSBmcm9tICcuL2Z1bmN0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VJbWdEYXRhc2V0e1xuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXRDb25maWd1cmUsIGNvbmZpZ3VyZUFzc2VydGlvbj1udWxsKXtcbiAgICAgICAgaWYoY29uZmlndXJlQXNzZXJ0aW9uKXtcbiAgICAgICAgICAgIGNvbmZpZ3VyZUFzc2VydGlvbih0aGlzLmRhdGFzZXRDb25maWd1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGRhdGFzZXRDb25maWd1cmU7XG4gICAgICAgIGNvbnN0IHtudW1TYW1wbGVzLCBzYW1wbGVTaXplLCBudW1DbGFzc2VzfSA9IHRoaXMuY29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5kYXRhU2l6ZSA9IFtudW1TYW1wbGVzLCAuLi5zYW1wbGVTaXplXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubnVtU2FtcGxlcyA9IG51bVNhbXBsZXM7XG4gICAgICAgIHRoaXMuc2FtcGxlU2l6ZSA9IHNhbXBsZVNpemU7XG4gICAgICAgIHRoaXMubnVtQ2xhc3MgICA9IG51bUNsYXNzZXM7XG5cbiAgICAgICAgdGhpcy5sb2dnZXIgPSBjb25zb2xlO1xuICAgIH1cblxuICAgIHNldCBMb2dnZXIobG9nZ2VyKXtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBMb2dnZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VyO1xuICAgIH1cbiAgICBcbiAgICBzdW1tYXJ5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGZldGNoRGF0YXNldChzYXZlRGlyPW51bGwpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZERhdGEoc3RvcmFnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkTGFiZWwoc3RvcmFnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9ICAgIFxuICAgIFxuICAgIGFzeW5jIGxvYWREYXRhc2V0KHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgXG5cbiAgICBtYWtlU2FtcGxlR2VuZXJhdG9yKGJhdGNoU2l6ZT0xMCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHtGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb259IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbiBleHRlbmRzIEJhc2VGdW5jdGlvbntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBcbiAgICBnZXRJbWdCdWZmZXJTaXplKGltZ1NpemUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoKHMsZCk9PnMqZCwxLGltZ1NpemUpO1xuICAgIH1cbiAgICBnZW5lcmF0b3JXaXRoSW5kZXgoaXRlbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5hZGRJbmRleChSLm1hcCkoKGQsIGlkeCk9PltpZHgsIGRdLCBpdGVtcyk7XG4gICAgfVxuICAgIHNwbGl0VHJhaW5UZXN0U2V0KGl0ZW1zLCBzcGxpdEluZGV4KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuc3BsaXRBdChzcGxpdEluZGV4LCBpdGVtcyk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9