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
      this.storage = _causalNet.IndexDBStorage;
      this.memCache = _causalNet2.MemDownCache;
      this.preprocessing = new _causalNet3.Preprocessing();
      this.F = new _function.default();
    }

    async fetchLabelChunk(chunkUrl, savePath) {
      console.log({
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

      return chunkIdxs.map((idx, ith) => {
        idx = ith;
        return [`data-chunk-${idx}.png`, `label-chunk-${idx}`];
      });
    }

    async fetchDataset(saveDir = '/mnist/', numchunks = 1, selectBy = 'random') {
      let selectedChunks = this.selectFetchedChunks(numchunks, selectBy);
      let [sampleChunks, labelChunks] = this.F.unzip(selectedChunks);
      console.log({
        selectedChunks,
        sampleChunks,
        labelChunks
      });
      let chunkFetchList = this.F.zip(sampleChunks, labelChunks);
      this.savedChunks = [];

      for (let [sampleChunk, labelChunk] of chunkFetchList) {
        let sampleChunkUrl = this.configuration.datasetUrl + sampleChunk;
        let sammpleSavePath = saveDir + sampleChunk;
        console.log({
          sampleChunkUrl,
          sammpleSavePath
        });
        let samplePath = await this.storage.fetchPNGFile(sampleChunkUrl, sammpleSavePath);
        let labelChunkUrl = this.configuration.datasetUrl + labelChunk;
        let labelSavePath = saveDir + labelChunk;
        console.log({
          labelChunkUrl,
          labelSavePath
        });
        let labelPath = await this.storage.fetchFile(labelChunkUrl, labelSavePath);
        console.log({
          labelPath
        });
        this.savedChunks.push([samplePath, labelPath]);
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

      const _batches = this.F.hsplitEvery(sampleIdxSet, batchSize);

      const batches = _causalNet4.Sampling.choice(_batches, _batches.length);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9NTklTVC5JbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvYmFzZUltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiTW5pc3REYXRhc2V0IiwiQmFzZUltZ0RhdGFzZXQiLCJjb25zdHJ1Y3RvciIsImNvbmZpZ3VyZSIsInN0b3JhZ2UiLCJJbmRleERCU3RvcmFnZSIsIm1lbUNhY2hlIiwiTWVtRG93bkNhY2hlIiwicHJlcHJvY2Vzc2luZyIsIlByZXByb2Nlc3NpbmciLCJGIiwiRnVuY3Rpb24iLCJmZXRjaExhYmVsQ2h1bmsiLCJjaHVua1VybCIsInNhdmVQYXRoIiwiY29uc29sZSIsImxvZyIsImZldGNoRmlsZSIsImZldGNoU2FtcGxlQ2h1bmsiLCJmZXRjaFBOR0ZpbGUiLCJzZWxlY3RGZXRjaGVkQ2h1bmtzIiwibnVtY2h1bmtzIiwic2VsZWN0QnkiLCJjaHVua0lkeHMiLCJTYW1wbGluZyIsImNob2ljZSIsImNvbmZpZ3VyYXRpb24iLCJjaHVua0xpc3QiLCJtYXAiLCJpZHgiLCJpdGgiLCJmZXRjaERhdGFzZXQiLCJzYXZlRGlyIiwic2VsZWN0ZWRDaHVua3MiLCJzYW1wbGVDaHVua3MiLCJsYWJlbENodW5rcyIsInVuemlwIiwiY2h1bmtGZXRjaExpc3QiLCJ6aXAiLCJzYXZlZENodW5rcyIsInNhbXBsZUNodW5rIiwibGFiZWxDaHVuayIsInNhbXBsZUNodW5rVXJsIiwiZGF0YXNldFVybCIsInNhbW1wbGVTYXZlUGF0aCIsInNhbXBsZVBhdGgiLCJsYWJlbENodW5rVXJsIiwibGFiZWxTYXZlUGF0aCIsImxhYmVsUGF0aCIsInB1c2giLCJzYW1wbGVTdG9yYWdlIiwibGFiZWxTdG9yYWdlIiwic2F2ZWRDaHVua1NhbXBsZXMiLCJzYXZlZENodW5rTGFiZWxzIiwibWFrZVByZXByb2Nlc3NpbmdTdHJlYW0iLCJzdG9yZUluTWVtb3J5IiwicHJlUHJvY2Vzc2luZ1N0b3JhZ2UiLCJJbWFnZUJ1ZmZlclNpemUiLCJnZXRJbWdCdWZmZXJTaXplIiwic2FtcGxlU2l6ZSIsIkxhYmVsQnVmZmVyU2l6ZSIsIm51bUNsYXNzIiwiaW1hZ2VCdWZmZXJTaXplIiwibGFiZWxCdWZmZXJTaXplIiwiVHJhbnNmb3JtRm4iLCJjaHVuayIsImNodW5rRW5jb2RpbmciLCJhZnRlclRyYW5zZm9ybUZuIiwiVHJhbnNmb3JtQXN5bmMiLCJzYW1wbGVCdWZmZXIiLCJzYW1wbGUiLCJsYWJlbEJ1ZmZlciIsImxhYmVsIiwic3BsaXRlZEltZ0J1ZmZlciIsInNwbGl0SW1hZ2VCdWZmZXIiLCJzcGxpdGVkTGFiZWxCdWZmZXIiLCJ0cmFuc2Zvcm1lZERhdGEiLCJjaHVua0lkeCIsInRoZW4iLCJ0cmFuc2Zvcm1lZENodW5rIiwiV3JpdGVGbiIsImNhbGxiYWNrIiwiV3JpdGVBc3luYyIsImdlbmVyYXRvciIsImdlbmVyYXRvcldpdGhJbmRleCIsImNodW5rU2FtcGxlUGF0aCIsInNldEl0ZW0iLCJjaHVua0xhYmVsUGF0aCIsInJlc3VsdCIsInNhdmVkUHJlcHJvY2Vzc2luZyIsImR1cGxleGVyIiwiU3RyZWFtIiwibWFrZUR1cGxleCIsInRyYW5zZm9ybWVyIiwibWFrZVRyYW5zZm9ybSIsInN0cmVhbSIsInBpcGUiLCJwcmVwcm9jZXNzaW5nRGF0YXNldCIsInNhbXBsZUl0ZW0iLCJnZXRJdGVtIiwibGFiZWxJdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsImdldFRyYWluVGVzdFNldCIsInRyYWluU2l6ZSIsInBhcnNlSW50IiwibGVuZ3RoIiwidHJhaW5TZXQiLCJ0ZXN0U2V0Iiwic3BsaXRUcmFpblRlc3RTZXQiLCJtYWtlU2FtcGxlR2VuZXJhdG9yIiwic2FtcGxlSWR4U2V0IiwiYmF0Y2hTaXplIiwic3RhcnQiLCJlbmQiLCJfYmF0Y2hlcyIsImhzcGxpdEV2ZXJ5IiwiYmF0Y2hlcyIsIm5leHRJbmRleCIsIml0ZXJhdGlvbkNvdW50Iiwic3RlcCIsImJhdGNoR2VuZXJhdG9yIiwibmV4dCIsImJhdGNoU2FtcGxlcyIsImJhdGNoTGFiZWxzIiwiYmwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImRhdGFzZXRDb25maWd1cmUiLCJjb25maWd1cmVBc3NlcnRpb24iLCJudW1TYW1wbGVzIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwic3VtbWFyeSIsIkVycm9yIiwibG9hZERhdGEiLCJsb2FkTGFiZWwiLCJsb2FkRGF0YXNldCIsIkJhc2VGdW5jdGlvbiIsImltZ1NpemUiLCJSIiwicmVkdWNlIiwicyIsImQiLCJpdGVtcyIsImFkZEluZGV4Iiwi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c0JGLEtBQXRCLENBQVA7QUFDSDs7QUFoQjZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEbEQsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kYXRhc2V0cy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5tZW1jYWNoZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBCYXNlSW1nRGF0YXNldCB9IGZyb20gJy4vYmFzZUltZ0RhdGFzZXQnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgSW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgTWVtRG93bkNhY2hlIH0gZnJvbSAnY2F1c2FsLW5ldC5tZW1jYWNoZSc7XG5pbXBvcnQgeyBQcmVwcm9jZXNzaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nJztcbmltcG9ydCB7IFN0cmVhbSwgU2FtcGxpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW5pc3REYXRhc2V0IGV4dGVuZHMgQmFzZUltZ0RhdGFzZXR7XG4gICAgXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJlKXtcbiAgICAgICAgc3VwZXIoY29uZmlndXJlKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gSW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMubWVtQ2FjaGUgPSBNZW1Eb3duQ2FjaGU7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZyA9IG5ldyBQcmVwcm9jZXNzaW5nKCk7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoTGFiZWxDaHVuayhjaHVua1VybCwgc2F2ZVBhdGgpe1xuICAgICAgICBjb25zb2xlLmxvZyh7Y2h1bmtVcmwsIHNhdmVQYXRofSk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hGaWxlKGNodW5rVXJsLCBzYXZlUGF0aCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hTYW1wbGVDaHVuayhjaHVua1VybCwgc2F2ZVBhdGgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoUE5HRmlsZShjaHVua1VybCwgc2F2ZVBhdGgpO1xuICAgIH1cblxuICAgIHNlbGVjdEZldGNoZWRDaHVua3MobnVtY2h1bmtzLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIGxldCBjaHVua0lkeHMgPSBTYW1wbGluZy5jaG9pY2UodGhpcy5jb25maWd1cmF0aW9uLmNodW5rTGlzdCwgbnVtY2h1bmtzKTtcbiAgICAgICAgcmV0dXJuIGNodW5rSWR4cy5tYXAoKGlkeCwgaXRoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gaXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtgZGF0YS1jaHVuay0ke2lkeH0ucG5nYCxgbGFiZWwtY2h1bmstJHtpZHh9YF07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoRGF0YXNldChzYXZlRGlyPScvbW5pc3QvJyxudW1jaHVua3M9MSwgc2VsZWN0Qnk9J3JhbmRvbScpe1xuICAgICAgICBsZXQgc2VsZWN0ZWRDaHVua3MgPSB0aGlzLnNlbGVjdEZldGNoZWRDaHVua3MobnVtY2h1bmtzLCBzZWxlY3RCeSk7XG4gICAgICAgIGxldCBbc2FtcGxlQ2h1bmtzLCBsYWJlbENodW5rc10gPSB0aGlzLkYudW56aXAoc2VsZWN0ZWRDaHVua3MpO1xuICAgICAgICBjb25zb2xlLmxvZyh7c2VsZWN0ZWRDaHVua3MsIHNhbXBsZUNodW5rcywgbGFiZWxDaHVua3N9KTtcbiAgICAgICAgbGV0IGNodW5rRmV0Y2hMaXN0ID0gdGhpcy5GLnppcChzYW1wbGVDaHVua3MsIGxhYmVsQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rcyA9IFtdO1xuICAgICAgICBmb3IobGV0IFtzYW1wbGVDaHVuaywgbGFiZWxDaHVua10gb2YgY2h1bmtGZXRjaExpc3Qpe1xuICAgICAgICAgICAgbGV0IHNhbXBsZUNodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBzYW1wbGVDaHVuaztcbiAgICAgICAgICAgIGxldCBzYW1tcGxlU2F2ZVBhdGggPSBzYXZlRGlyICsgc2FtcGxlQ2h1bms7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7c2FtcGxlQ2h1bmtVcmwsIHNhbW1wbGVTYXZlUGF0aH0pO1xuICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hQTkdGaWxlKHNhbXBsZUNodW5rVXJsLCBzYW1tcGxlU2F2ZVBhdGgpO1xuICAgICAgICAgICAgbGV0IGxhYmVsQ2h1bmtVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZGF0YXNldFVybCArIGxhYmVsQ2h1bms7XG4gICAgICAgICAgICBsZXQgbGFiZWxTYXZlUGF0aCA9IHNhdmVEaXIgKyBsYWJlbENodW5rO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2xhYmVsQ2h1bmtVcmwsIGxhYmVsU2F2ZVBhdGh9KTtcbiAgICAgICAgICAgIGxldCBsYWJlbFBhdGggPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hGaWxlKGxhYmVsQ2h1bmtVcmwsIGxhYmVsU2F2ZVBhdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2xhYmVsUGF0aH0pO1xuICAgICAgICAgICAgdGhpcy5zYXZlZENodW5rcy5wdXNoKFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IFtzYW1wbGVTdG9yYWdlLCBsYWJlbFN0b3JhZ2VdID0gdGhpcy5GLnVuemlwKHRoaXMuc2F2ZWRDaHVua3MpO1xuICAgICAgICB0aGlzLnNhdmVkQ2h1bmtTYW1wbGVzID0gc2FtcGxlU3RvcmFnZTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rTGFiZWxzID0gbGFiZWxTdG9yYWdlO1xuICAgICAgICByZXR1cm4ge3NhbXBsZVN0b3JhZ2UsIGxhYmVsU3RvcmFnZX07XG4gICAgfVxuICAgIFxuICAgIG1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtKHNhdmVEaXI9Jy9wcmVwcm9jZXNzaW5nL21uaXN0Lycsc3RvcmVJbk1lbW9yeT1mYWxzZSl7XG4gICAgICAgIHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UgPSAoc3RvcmVJbk1lbW9yeSk/dGhpcy5tZW1DYWNoZTp0aGlzLnN0b3JhZ2U7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBJbWFnZUJ1ZmZlclNpemUgPSB0aGlzLkYuZ2V0SW1nQnVmZmVyU2l6ZSh0aGlzLnNhbXBsZVNpemUpO1xuICAgICAgICBjb25zdCBMYWJlbEJ1ZmZlclNpemUgPSB0aGlzLm51bUNsYXNzO1xuICAgICAgICBjb25zb2xlLmxvZyh7aW1hZ2VCdWZmZXJTaXplOiBJbWFnZUJ1ZmZlclNpemUsIFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWxCdWZmZXJTaXplOiBMYWJlbEJ1ZmZlclNpemV9KTtcbiAgICAgICAgY29uc3QgVHJhbnNmb3JtRm4gPSAoY2h1bmssIGNodW5rRW5jb2RpbmcsIGFmdGVyVHJhbnNmb3JtRm4pID0+e1xuICAgICAgICAgICAgY29uc3QgVHJhbnNmb3JtQXN5bmMgPSBhc3luYyAoKT0+e1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVCdWZmZXIgPSBjaHVuay5zYW1wbGU7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsQnVmZmVyID0gY2h1bmsubGFiZWw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coe3NhbXBsZUJ1ZmZlciwgbGFiZWxCdWZmZXJ9KTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRlZEltZ0J1ZmZlciA9IGF3YWl0IHRoaXMucHJlcHJvY2Vzc2luZy5zcGxpdEltYWdlQnVmZmVyKHNhbXBsZUJ1ZmZlciwgSW1hZ2VCdWZmZXJTaXplKTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRlZExhYmVsQnVmZmVyID0gYXdhaXQgdGhpcy5wcmVwcm9jZXNzaW5nLnNwbGl0SW1hZ2VCdWZmZXIobGFiZWxCdWZmZXIsIExhYmVsQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt0cmFuc2Zvcm1lZERhdGE6IHRoaXMuRi56aXAoc3BsaXRlZEltZ0J1ZmZlciwgc3BsaXRlZExhYmVsQnVmZmVyKSwgY2h1bmtJZHg6IGNodW5rLmlkeH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgVHJhbnNmb3JtQXN5bmMoY2h1bmspLnRoZW4odHJhbnNmb3JtZWRDaHVuaz0+e1xuICAgICAgICAgICAgICAgIGFmdGVyVHJhbnNmb3JtRm4obnVsbCwgdHJhbnNmb3JtZWRDaHVuayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFdyaXRlRm4gPSAodHJhbnNmb3JtZWRDaHVuaywgY2h1bmtFbmNvZGluZywgY2FsbGJhY2spID0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBXcml0ZUFzeW5jID0gYXN5bmMgKHRyYW5zZm9ybWVkQ2h1bmspPT57XG4gICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodHJhbnNmb3JtZWRDaHVuay50cmFuc2Zvcm1lZERhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBjaHVua0lkeCAgPSB0cmFuc2Zvcm1lZENodW5rLmNodW5rSWR4O1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVQYXRoICA9IFtdLCBsYWJlbFBhdGggPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGUsIGxhYmVsXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua1NhbXBsZVBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdkYXRhLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgc2FtcGxlKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0xhYmVsUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ2xhYmVsLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVQYXRoID0gWy4uLnNhbXBsZVBhdGgsIGNodW5rU2FtcGxlUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUGF0aCA9IFsuLi5sYWJlbFBhdGgsIGNodW5rTGFiZWxQYXRoXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRi56aXAoc2FtcGxlUGF0aCwgbGFiZWxQYXRoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFdyaXRlQXN5bmModHJhbnNmb3JtZWRDaHVuaykudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSBbLi4udGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIC4uLnJlc3VsdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBkdXBsZXhlciA9IFN0cmVhbS5tYWtlRHVwbGV4KFdyaXRlRm4pO1xuICAgICAgICBsZXQgdHJhbnNmb3JtZXIgPSBTdHJlYW0ubWFrZVRyYW5zZm9ybShUcmFuc2Zvcm1Gbik7XG4gICAgICAgIGxldCBzdHJlYW0gPSBkdXBsZXhlci5waXBlKHRyYW5zZm9ybWVyKS5waXBlKGR1cGxleGVyKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG5cbiAgICBhc3luYyBwcmVwcm9jZXNzaW5nRGF0YXNldChzdHJlYW0pe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlID0gc2FtcGxlSXRlbVtzYW1wbGVQYXRoXTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGxhYmVsSXRlbVtsYWJlbFBhdGhdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe3NhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgICAgIHN0cmVhbS5wdXNoKHtpZHgsIHNhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0ucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBzdHJlYW0ub24oJ2ZpbmlzaCcsICgpPT57XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGdldFRyYWluVGVzdFNldCh0cmFpblNpemU9bnVsbCl7XG4gICAgICAgIHRyYWluU2l6ZSA9IHRyYWluU2l6ZXx8cGFyc2VJbnQodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcubGVuZ3RoKjAuOSk7XG5cbiAgICAgICAgY29uc3QgW3RyYWluU2V0LCB0ZXN0U2V0XSA9IHRoaXMuRi5zcGxpdFRyYWluVGVzdFNldCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgdHJhaW5TaXplKTtcbiAgICAgICAgcmV0dXJuIFt0cmFpblNldCwgdGVzdFNldF07XG4gICAgfVxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcihzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZT1udWxsLCBzdGFydD0wLCBlbmQ9bnVsbCl7XG4gICAgICAgIFxuICAgICAgICBiYXRjaFNpemUgPSBiYXRjaFNpemU/YmF0Y2hTaXplOnNhbXBsZUlkeFNldC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IF9iYXRjaGVzID0gdGhpcy5GLmhzcGxpdEV2ZXJ5KHNhbXBsZUlkeFNldCwgYmF0Y2hTaXplKTtcbiAgICAgICAgY29uc3QgYmF0Y2hlcyA9IFNhbXBsaW5nLmNob2ljZShfYmF0Y2hlcywgX2JhdGNoZXMubGVuZ3RoKTtcbiAgICAgICAgaWYoZW5kID09PSBudWxsKXtcbiAgICAgICAgICAgIGVuZCA9IGJhdGNoZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSBzdGFydCwgaXRlcmF0aW9uQ291bnQgPSAwLCBzdGVwID0gMTtcbiAgICAgICAgY29uc29sZS5sb2coe2JhdGNoZXM6IGJhdGNoZXNbMF0ubGVuZ3RofSk7XG4gICAgICAgIGNvbnN0IGJhdGNoR2VuZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2U6IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UsXG4gICAgICAgICAgICAgICAgbmV4dDogYXN5bmMoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmF0Y2hTYW1wbGVzID0gW10sIGJhdGNoTGFiZWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtibDogYmF0Y2hlc1tuZXh0SW5kZXhdLCBuZXh0SW5kZXh9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSBvZiBiYXRjaGVzW25leHRJbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoU2FtcGxlcyA9IFsuLi5iYXRjaFNhbXBsZXMsIHNhbXBsZUl0ZW1bc2FtcGxlUGF0aF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hMYWJlbHMgPSBbLi4uYmF0Y2hMYWJlbHMsIGxhYmVsSXRlbVtsYWJlbFBhdGhdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggKz0gc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUobmV4dEluZGV4IDwgZW5kKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJhdGNoR2VuZXJhdG9yO1xuICAgIH1cbn07XG4iLCJpbXBvcnQge2RlZmF1bHQgYXMgRnVuY3Rpb259IGZyb20gJy4vZnVuY3Rpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUltZ0RhdGFzZXR7XG4gICAgY29uc3RydWN0b3IoZGF0YXNldENvbmZpZ3VyZSwgY29uZmlndXJlQXNzZXJ0aW9uPW51bGwpe1xuICAgICAgICBpZihjb25maWd1cmVBc3NlcnRpb24pe1xuICAgICAgICAgICAgY29uZmlndXJlQXNzZXJ0aW9uKHRoaXMuZGF0YXNldENvbmZpZ3VyZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gZGF0YXNldENvbmZpZ3VyZTtcbiAgICAgICAgY29uc3Qge251bVNhbXBsZXMsIHNhbXBsZVNpemUsIG51bUNsYXNzZXN9ID0gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmRhdGFTaXplID0gW251bVNhbXBsZXMsIC4uLnNhbXBsZVNpemVdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5udW1TYW1wbGVzID0gbnVtU2FtcGxlcztcbiAgICAgICAgdGhpcy5zYW1wbGVTaXplID0gc2FtcGxlU2l6ZTtcbiAgICAgICAgdGhpcy5udW1DbGFzcyAgID0gbnVtQ2xhc3NlcztcbiAgICB9XG4gICAgXG4gICAgc3VtbWFyeSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBmZXRjaERhdGFzZXQoc2F2ZURpcj1udWxsKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWREYXRhKHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZExhYmVsKHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfSAgICBcbiAgICBcbiAgICBhc3luYyBsb2FkRGF0YXNldChzdG9yYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIG1ha2VTYW1wbGVHZW5lcmF0b3IoYmF0Y2hTaXplPTEwKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Z1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgQmFzZUZ1bmN0aW9ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIGdldEltZ0J1ZmZlclNpemUoaW1nU2l6ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnJlZHVjZSgocyxkKT0+cypkLDEsaW1nU2l6ZSk7XG4gICAgfVxuICAgIGdlbmVyYXRvcldpdGhJbmRleChpdGVtcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmFkZEluZGV4KFIubWFwKSgoZCwgaWR4KT0+W2lkeCwgZF0sIGl0ZW1zKTtcbiAgICB9XG4gICAgc3BsaXRUcmFpblRlc3RTZXQoaXRlbXMsIHNwbGl0SW5kZXgpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5zcGxpdEF0KHNwbGl0SW5kZXgsIGl0ZW1zKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=