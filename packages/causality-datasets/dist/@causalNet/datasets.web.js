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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9NTklTVC5JbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvYmFzZUltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiTW5pc3REYXRhc2V0IiwiQmFzZUltZ0RhdGFzZXQiLCJjb25zdHJ1Y3RvciIsImNvbmZpZ3VyZSIsInN0b3JhZ2UiLCJJbmRleERCU3RvcmFnZSIsIm1lbUNhY2hlIiwiTWVtRG93bkNhY2hlIiwicHJlcHJvY2Vzc2luZyIsIlByZXByb2Nlc3NpbmciLCJGIiwiRnVuY3Rpb24iLCJmZXRjaExhYmVsQ2h1bmsiLCJjaHVua1VybCIsInNhdmVQYXRoIiwiY29uc29sZSIsImxvZyIsImZldGNoRmlsZSIsImZldGNoU2FtcGxlQ2h1bmsiLCJmZXRjaFBOR0ZpbGUiLCJzZWxlY3RGZXRjaGVkQ2h1bmtzIiwibnVtY2h1bmtzIiwic2VsZWN0QnkiLCJjaHVua0lkeHMiLCJTYW1wbGluZyIsImNob2ljZSIsImNvbmZpZ3VyYXRpb24iLCJjaHVua0xpc3QiLCJtYXAiLCJpZHgiLCJpdGgiLCJmZXRjaERhdGFzZXQiLCJzYXZlRGlyIiwic2VsZWN0ZWRDaHVua3MiLCJzYW1wbGVDaHVua3MiLCJsYWJlbENodW5rcyIsInVuemlwIiwiY2h1bmtGZXRjaExpc3QiLCJ6aXAiLCJzYXZlZENodW5rcyIsInNhbXBsZUNodW5rIiwibGFiZWxDaHVuayIsInNhbXBsZUNodW5rVXJsIiwiZGF0YXNldFVybCIsInNhbW1wbGVTYXZlUGF0aCIsInNhbXBsZVBhdGgiLCJsYWJlbENodW5rVXJsIiwibGFiZWxTYXZlUGF0aCIsImxhYmVsUGF0aCIsInB1c2giLCJzYW1wbGVTdG9yYWdlIiwibGFiZWxTdG9yYWdlIiwic2F2ZWRDaHVua1NhbXBsZXMiLCJzYXZlZENodW5rTGFiZWxzIiwibWFrZVByZXByb2Nlc3NpbmdTdHJlYW0iLCJzdG9yZUluTWVtb3J5IiwicHJlUHJvY2Vzc2luZ1N0b3JhZ2UiLCJJbWFnZUJ1ZmZlclNpemUiLCJnZXRJbWdCdWZmZXJTaXplIiwic2FtcGxlU2l6ZSIsIkxhYmVsQnVmZmVyU2l6ZSIsIm51bUNsYXNzIiwiaW1hZ2VCdWZmZXJTaXplIiwibGFiZWxCdWZmZXJTaXplIiwiVHJhbnNmb3JtRm4iLCJjaHVuayIsImNodW5rRW5jb2RpbmciLCJhZnRlclRyYW5zZm9ybUZuIiwiVHJhbnNmb3JtQXN5bmMiLCJzYW1wbGVCdWZmZXIiLCJzYW1wbGUiLCJsYWJlbEJ1ZmZlciIsImxhYmVsIiwic3BsaXRlZEltZ0J1ZmZlciIsInNwbGl0SW1hZ2VCdWZmZXIiLCJzcGxpdGVkTGFiZWxCdWZmZXIiLCJ0cmFuc2Zvcm1lZERhdGEiLCJjaHVua0lkeCIsInRoZW4iLCJ0cmFuc2Zvcm1lZENodW5rIiwiV3JpdGVGbiIsImNhbGxiYWNrIiwiV3JpdGVBc3luYyIsImdlbmVyYXRvciIsImdlbmVyYXRvcldpdGhJbmRleCIsImNodW5rU2FtcGxlUGF0aCIsInNldEl0ZW0iLCJjaHVua0xhYmVsUGF0aCIsInJlc3VsdCIsInNhdmVkUHJlcHJvY2Vzc2luZyIsImR1cGxleGVyIiwiU3RyZWFtIiwibWFrZUR1cGxleCIsInRyYW5zZm9ybWVyIiwibWFrZVRyYW5zZm9ybSIsInN0cmVhbSIsInBpcGUiLCJwcmVwcm9jZXNzaW5nRGF0YXNldCIsInNhbXBsZUl0ZW0iLCJnZXRJdGVtIiwibGFiZWxJdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsImdldFRyYWluVGVzdFNldCIsInRyYWluU2l6ZSIsInBhcnNlSW50IiwibGVuZ3RoIiwidHJhaW5TZXQiLCJ0ZXN0U2V0Iiwic3BsaXRUcmFpblRlc3RTZXQiLCJtYWtlU2FtcGxlR2VuZXJhdG9yIiwic2FtcGxlSWR4U2V0IiwiYmF0Y2hTaXplIiwic3RhcnQiLCJlbmQiLCJfYmF0Y2hlcyIsImhzcGxpdEV2ZXJ5IiwiYmF0Y2hlcyIsIm5leHRJbmRleCIsIml0ZXJhdGlvbkNvdW50Iiwic3RlcCIsImJhdGNoR2VuZXJhdG9yIiwibmV4dCIsImJhdGNoU2FtcGxlcyIsImJhdGNoTGFiZWxzIiwiYmwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImRhdGFzZXRDb25maWd1cmUiLCJjb25maWd1cmVBc3NlcnRpb24iLCJudW1TYW1wbGVzIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwic3VtbWFyeSIsIkVycm9yIiwibG9hZERhdGEiLCJsb2FkTGFiZWwiLCJsb2FkRGF0YXNldCIsIkJhc2VGdW5jdGlvbiIsImltZ1NpemUiLCJSIiwicmVkdWNlIiwicyIsImQiLCJpdGVtcyIsImFkZEluZGV4Iiwi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c0JGLEtBQXRCLENBQVA7QUFDSDs7QUFoQjZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEbEQsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9kYXRhc2V0cy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCJdLCByb290W1wiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VJbWdEYXRhc2V0IH0gZnJvbSAnLi9iYXNlSW1nRGF0YXNldCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyBJbmRleERCU3RvcmFnZSB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyBNZW1Eb3duQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmltcG9ydCB7IFByZXByb2Nlc3NpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmcnO1xuaW1wb3J0IHsgU3RyZWFtLCBTYW1wbGluZyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNbmlzdERhdGFzZXQgZXh0ZW5kcyBCYXNlSW1nRGF0YXNldHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmUpe1xuICAgICAgICBzdXBlcihjb25maWd1cmUpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBJbmRleERCU3RvcmFnZTtcbiAgICAgICAgdGhpcy5tZW1DYWNoZSA9IE1lbURvd25DYWNoZTtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nID0gbmV3IFByZXByb2Nlc3NpbmcoKTtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hMYWJlbENodW5rKGNodW5rVXJsLCBzYXZlUGF0aCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHtjaHVua1VybCwgc2F2ZVBhdGh9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaEZpbGUoY2h1bmtVcmwsIHNhdmVQYXRoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaFNhbXBsZUNodW5rKGNodW5rVXJsLCBzYXZlUGF0aCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hQTkdGaWxlKGNodW5rVXJsLCBzYXZlUGF0aCk7XG4gICAgfVxuXG4gICAgc2VsZWN0RmV0Y2hlZENodW5rcyhudW1jaHVua3MsIHNlbGVjdEJ5PSdyYW5kb20nKXtcbiAgICAgICAgbGV0IGNodW5rSWR4cyA9IFNhbXBsaW5nLmNob2ljZSh0aGlzLmNvbmZpZ3VyYXRpb24uY2h1bmtMaXN0LCBudW1jaHVua3MpO1xuICAgICAgICByZXR1cm4gY2h1bmtJZHhzLm1hcCgoaWR4LCBpdGgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHggPSBpdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2BkYXRhLWNodW5rLSR7aWR4fS5wbmdgLGBsYWJlbC1jaHVuay0ke2lkeH1gXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hEYXRhc2V0KHNhdmVEaXI9Jy9tbmlzdC8nLG51bWNodW5rcz0xLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIGxldCBzZWxlY3RlZENodW5rcyA9IHRoaXMuc2VsZWN0RmV0Y2hlZENodW5rcyhudW1jaHVua3MsIHNlbGVjdEJ5KTtcbiAgICAgICAgbGV0IFtzYW1wbGVDaHVua3MsIGxhYmVsQ2h1bmtzXSA9IHRoaXMuRi51bnppcChzZWxlY3RlZENodW5rcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtzZWxlY3RlZENodW5rcywgc2FtcGxlQ2h1bmtzLCBsYWJlbENodW5rc30pO1xuICAgICAgICBsZXQgY2h1bmtGZXRjaExpc3QgPSB0aGlzLkYuemlwKHNhbXBsZUNodW5rcywgbGFiZWxDaHVua3MpO1xuICAgICAgICB0aGlzLnNhdmVkQ2h1bmtzID0gW107XG4gICAgICAgIGZvcihsZXQgW3NhbXBsZUNodW5rLCBsYWJlbENodW5rXSBvZiBjaHVua0ZldGNoTGlzdCl7XG4gICAgICAgICAgICBsZXQgc2FtcGxlQ2h1bmtVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZGF0YXNldFVybCArIHNhbXBsZUNodW5rO1xuICAgICAgICAgICAgbGV0IHNhbW1wbGVTYXZlUGF0aCA9IHNhdmVEaXIgKyBzYW1wbGVDaHVuaztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtzYW1wbGVDaHVua1VybCwgc2FtbXBsZVNhdmVQYXRofSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlUGF0aCA9IGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaFBOR0ZpbGUoc2FtcGxlQ2h1bmtVcmwsIHNhbW1wbGVTYXZlUGF0aCk7XG4gICAgICAgICAgICBsZXQgbGFiZWxDaHVua1VybCA9IHRoaXMuY29uZmlndXJhdGlvbi5kYXRhc2V0VXJsICsgbGFiZWxDaHVuaztcbiAgICAgICAgICAgIGxldCBsYWJlbFNhdmVQYXRoID0gc2F2ZURpciArIGxhYmVsQ2h1bms7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7bGFiZWxDaHVua1VybCwgbGFiZWxTYXZlUGF0aH0pO1xuICAgICAgICAgICAgbGV0IGxhYmVsUGF0aCA9IGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaEZpbGUobGFiZWxDaHVua1VybCwgbGFiZWxTYXZlUGF0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7bGFiZWxQYXRofSk7XG4gICAgICAgICAgICB0aGlzLnNhdmVkQ2h1bmtzLnB1c2goW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0pO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgW3NhbXBsZVN0b3JhZ2UsIGxhYmVsU3RvcmFnZV0gPSB0aGlzLkYudW56aXAodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIHRoaXMuc2F2ZWRDaHVua1NhbXBsZXMgPSBzYW1wbGVTdG9yYWdlO1xuICAgICAgICB0aGlzLnNhdmVkQ2h1bmtMYWJlbHMgPSBsYWJlbFN0b3JhZ2U7XG4gICAgICAgIHJldHVybiB7c2FtcGxlU3RvcmFnZSwgbGFiZWxTdG9yYWdlfTtcbiAgICB9XG4gICAgXG4gICAgbWFrZVByZXByb2Nlc3NpbmdTdHJlYW0oc2F2ZURpcj0nL3ByZXByb2Nlc3NpbmcvbW5pc3QvJyxzdG9yZUluTWVtb3J5PWZhbHNlKXtcbiAgICAgICAgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZSA9IChzdG9yZUluTWVtb3J5KT90aGlzLm1lbUNhY2hlOnRoaXMuc3RvcmFnZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IEltYWdlQnVmZmVyU2l6ZSA9IHRoaXMuRi5nZXRJbWdCdWZmZXJTaXplKHRoaXMuc2FtcGxlU2l6ZSk7XG4gICAgICAgIGNvbnN0IExhYmVsQnVmZmVyU2l6ZSA9IHRoaXMubnVtQ2xhc3M7XG4gICAgICAgIGNvbnNvbGUubG9nKHtpbWFnZUJ1ZmZlclNpemU6IEltYWdlQnVmZmVyU2l6ZSwgXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbEJ1ZmZlclNpemU6IExhYmVsQnVmZmVyU2l6ZX0pO1xuICAgICAgICBjb25zdCBUcmFuc2Zvcm1GbiA9IChjaHVuaywgY2h1bmtFbmNvZGluZywgYWZ0ZXJUcmFuc2Zvcm1GbikgPT57XG4gICAgICAgICAgICBjb25zdCBUcmFuc2Zvcm1Bc3luYyA9IGFzeW5jICgpPT57XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZUJ1ZmZlciA9IGNodW5rLnNhbXBsZTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxCdWZmZXIgPSBjaHVuay5sYWJlbDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7c2FtcGxlQnVmZmVyLCBsYWJlbEJ1ZmZlcn0pO1xuICAgICAgICAgICAgICAgIGxldCBzcGxpdGVkSW1nQnVmZmVyID0gYXdhaXQgdGhpcy5wcmVwcm9jZXNzaW5nLnNwbGl0SW1hZ2VCdWZmZXIoc2FtcGxlQnVmZmVyLCBJbWFnZUJ1ZmZlclNpemUpO1xuICAgICAgICAgICAgICAgIGxldCBzcGxpdGVkTGFiZWxCdWZmZXIgPSBhd2FpdCB0aGlzLnByZXByb2Nlc3Npbmcuc3BsaXRJbWFnZUJ1ZmZlcihsYWJlbEJ1ZmZlciwgTGFiZWxCdWZmZXJTaXplKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4ge3RyYW5zZm9ybWVkRGF0YTogdGhpcy5GLnppcChzcGxpdGVkSW1nQnVmZmVyLCBzcGxpdGVkTGFiZWxCdWZmZXIpLCBjaHVua0lkeDogY2h1bmsuaWR4fTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBUcmFuc2Zvcm1Bc3luYyhjaHVuaykudGhlbih0cmFuc2Zvcm1lZENodW5rPT57XG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2Zvcm1GbihudWxsLCB0cmFuc2Zvcm1lZENodW5rKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgV3JpdGVGbiA9ICh0cmFuc2Zvcm1lZENodW5rLCBjaHVua0VuY29kaW5nLCBjYWxsYmFjaykgPT57XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IFdyaXRlQXN5bmMgPSBhc3luYyAodHJhbnNmb3JtZWRDaHVuayk9PntcbiAgICAgICAgICAgICAgICBsZXQgZ2VuZXJhdG9yID0gdGhpcy5GLmdlbmVyYXRvcldpdGhJbmRleCh0cmFuc2Zvcm1lZENodW5rLnRyYW5zZm9ybWVkRGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rSWR4ICA9IHRyYW5zZm9ybWVkQ2h1bmsuY2h1bmtJZHg7XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggID0gW10sIGxhYmVsUGF0aCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZSwgbGFiZWxdXSBvZiBnZW5lcmF0b3Ipe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rU2FtcGxlUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ2RhdGEvJyArIGNodW5rSWR4ICsgJy8nICsgaWR4ICsgJy8nLCBzYW1wbGUpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rTGFiZWxQYXRoID0gYXdhaXQgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJdGVtKHNhdmVEaXIgKyAnbGFiZWwvJyArIGNodW5rSWR4ICsgJy8nICsgaWR4ICsgJy8nLCBsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZVBhdGggPSBbLi4uc2FtcGxlUGF0aCwgY2h1bmtTYW1wbGVQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxQYXRoID0gWy4uLmxhYmVsUGF0aCwgY2h1bmtMYWJlbFBhdGhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5GLnppcChzYW1wbGVQYXRoLCBsYWJlbFBhdGgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgV3JpdGVBc3luYyh0cmFuc2Zvcm1lZENodW5rKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zYXZlZFByZXByb2Nlc3Npbmcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyA9IFsuLi50aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgLi4ucmVzdWx0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGR1cGxleGVyID0gU3RyZWFtLm1ha2VEdXBsZXgoV3JpdGVGbik7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1lciA9IFN0cmVhbS5tYWtlVHJhbnNmb3JtKFRyYW5zZm9ybUZuKTtcbiAgICAgICAgbGV0IHN0cmVhbSA9IGR1cGxleGVyLnBpcGUodHJhbnNmb3JtZXIpLnBpcGUoZHVwbGV4ZXIpO1xuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgIH1cblxuICAgIGFzeW5jIHByZXByb2Nlc3NpbmdEYXRhc2V0KHN0cmVhbSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2F2ZWRDaHVua3MpO1xuICAgICAgICBsZXQgZ2VuZXJhdG9yID0gdGhpcy5GLmdlbmVyYXRvcldpdGhJbmRleCh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgZm9yKGxldCBbaWR4LCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBzYW1wbGUgPSBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbGFiZWxJdGVtW2xhYmVsUGF0aF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7c2FtcGxlLCBsYWJlbH0pO1xuICAgICAgICAgICAgc3RyZWFtLnB1c2goe2lkeCwgc2FtcGxlLCBsYWJlbH0pO1xuICAgICAgICB9XG4gICAgICAgIHN0cmVhbS5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHN0cmVhbS5vbignZmluaXNoJywgKCk9PntcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0VHJhaW5UZXN0U2V0KHRyYWluU2l6ZT1udWxsKXtcbiAgICAgICAgdHJhaW5TaXplID0gdHJhaW5TaXplfHxwYXJzZUludCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZy5sZW5ndGgqMC45KTtcblxuICAgICAgICBjb25zdCBbdHJhaW5TZXQsIHRlc3RTZXRdID0gdGhpcy5GLnNwbGl0VHJhaW5UZXN0U2V0KHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLCB0cmFpblNpemUpO1xuICAgICAgICByZXR1cm4gW3RyYWluU2V0LCB0ZXN0U2V0XTtcbiAgICB9XG5cbiAgICBtYWtlU2FtcGxlR2VuZXJhdG9yKHNhbXBsZUlkeFNldCwgYmF0Y2hTaXplPW51bGwsIHN0YXJ0PTAsIGVuZD1udWxsKXtcbiAgICAgICAgXG4gICAgICAgIGJhdGNoU2l6ZSA9IGJhdGNoU2l6ZT9iYXRjaFNpemU6c2FtcGxlSWR4U2V0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgX2JhdGNoZXMgPSB0aGlzLkYuaHNwbGl0RXZlcnkoc2FtcGxlSWR4U2V0LCBiYXRjaFNpemUpO1xuICAgICAgICBjb25zdCBiYXRjaGVzID0gU2FtcGxpbmcuY2hvaWNlKF9iYXRjaGVzLCBfYmF0Y2hlcy5sZW5ndGgpO1xuICAgICAgICBpZihlbmQgPT09IG51bGwpe1xuICAgICAgICAgICAgZW5kID0gYmF0Y2hlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRJbmRleCA9IHN0YXJ0LCBpdGVyYXRpb25Db3VudCA9IDAsIHN0ZXAgPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyh7YmF0Y2hlczogYmF0Y2hlc1swXS5sZW5ndGh9KTtcbiAgICAgICAgY29uc3QgYmF0Y2hHZW5lcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZTogdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZSxcbiAgICAgICAgICAgICAgICBuZXh0OiBhc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXRjaFNhbXBsZXMgPSBbXSwgYmF0Y2hMYWJlbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2JsOiBiYXRjaGVzW25leHRJbmRleF0sIG5leHRJbmRleH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdIG9mIGJhdGNoZXNbbmV4dEluZGV4XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hTYW1wbGVzID0gWy4uLmJhdGNoU2FtcGxlcywgc2FtcGxlSXRlbVtzYW1wbGVQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaExhYmVscyA9IFsuLi5iYXRjaExhYmVscywgbGFiZWxJdGVtW2xhYmVsUGF0aF1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSBzdGVwO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb25Db3VudCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZShuZXh0SW5kZXggPCBlbmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYmF0Y2hHZW5lcmF0b3I7XG4gICAgfVxufTtcbiIsImltcG9ydCB7ZGVmYXVsdCBhcyBGdW5jdGlvbn0gZnJvbSAnLi9mdW5jdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlSW1nRGF0YXNldHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhc2V0Q29uZmlndXJlLCBjb25maWd1cmVBc3NlcnRpb249bnVsbCl7XG4gICAgICAgIGlmKGNvbmZpZ3VyZUFzc2VydGlvbil7XG4gICAgICAgICAgICBjb25maWd1cmVBc3NlcnRpb24odGhpcy5kYXRhc2V0Q29uZmlndXJlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBkYXRhc2V0Q29uZmlndXJlO1xuICAgICAgICBjb25zdCB7bnVtU2FtcGxlcywgc2FtcGxlU2l6ZSwgbnVtQ2xhc3Nlc30gPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuZGF0YVNpemUgPSBbbnVtU2FtcGxlcywgLi4uc2FtcGxlU2l6ZV07XG4gICAgICAgIFxuICAgICAgICB0aGlzLm51bVNhbXBsZXMgPSBudW1TYW1wbGVzO1xuICAgICAgICB0aGlzLnNhbXBsZVNpemUgPSBzYW1wbGVTaXplO1xuICAgICAgICB0aGlzLm51bUNsYXNzICAgPSBudW1DbGFzc2VzO1xuICAgIH1cbiAgICBcbiAgICBzdW1tYXJ5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGZldGNoRGF0YXNldChzYXZlRGlyPW51bGwpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZERhdGEoc3RvcmFnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkTGFiZWwoc3RvcmFnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9ICAgIFxuICAgIFxuICAgIGFzeW5jIGxvYWREYXRhc2V0KHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcihiYXRjaFNpemU9MTApe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7RnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9ufSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBCYXNlRnVuY3Rpb257XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0SW1nQnVmZmVyU2l6ZShpbWdTaXplKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKChzLGQpPT5zKmQsMSxpbWdTaXplKTtcbiAgICB9XG4gICAgZ2VuZXJhdG9yV2l0aEluZGV4KGl0ZW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuYWRkSW5kZXgoUi5tYXApKChkLCBpZHgpPT5baWR4LCBkXSwgaXRlbXMpO1xuICAgIH1cbiAgICBzcGxpdFRyYWluVGVzdFNldChpdGVtcywgc3BsaXRJbmRleCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnNwbGl0QXQoc3BsaXRJbmRleCwgaXRlbXMpO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==