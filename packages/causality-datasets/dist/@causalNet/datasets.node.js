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

      return chunkIdxs.map(idx => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9NTklTVC5JbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvYmFzZUltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiTW5pc3REYXRhc2V0IiwiQmFzZUltZ0RhdGFzZXQiLCJjb25zdHJ1Y3RvciIsImNvbmZpZ3VyZSIsInN0b3JhZ2UiLCJJbmRleERCU3RvcmFnZSIsIm1lbUNhY2hlIiwiTWVtRG93bkNhY2hlIiwicHJlcHJvY2Vzc2luZyIsIlByZXByb2Nlc3NpbmciLCJGIiwiRnVuY3Rpb24iLCJmZXRjaExhYmVsQ2h1bmsiLCJjaHVua1VybCIsInNhdmVQYXRoIiwiY29uc29sZSIsImxvZyIsImZldGNoRmlsZSIsImZldGNoU2FtcGxlQ2h1bmsiLCJmZXRjaFBOR0ZpbGUiLCJzZWxlY3RGZXRjaGVkQ2h1bmtzIiwibnVtY2h1bmtzIiwic2VsZWN0QnkiLCJjaHVua0lkeHMiLCJTYW1wbGluZyIsImNob2ljZSIsImNvbmZpZ3VyYXRpb24iLCJjaHVua0xpc3QiLCJtYXAiLCJpZHgiLCJmZXRjaERhdGFzZXQiLCJzYXZlRGlyIiwic2VsZWN0ZWRDaHVua3MiLCJzYW1wbGVDaHVua3MiLCJsYWJlbENodW5rcyIsInVuemlwIiwiY2h1bmtGZXRjaExpc3QiLCJ6aXAiLCJzYXZlZENodW5rcyIsInNhbXBsZUNodW5rIiwibGFiZWxDaHVuayIsInNhbXBsZUNodW5rVXJsIiwiZGF0YXNldFVybCIsInNhbW1wbGVTYXZlUGF0aCIsInNhbXBsZVBhdGgiLCJsYWJlbENodW5rVXJsIiwibGFiZWxTYXZlUGF0aCIsImxhYmVsUGF0aCIsInB1c2giLCJzYW1wbGVTdG9yYWdlIiwibGFiZWxTdG9yYWdlIiwic2F2ZWRDaHVua1NhbXBsZXMiLCJzYXZlZENodW5rTGFiZWxzIiwibWFrZVByZXByb2Nlc3NpbmdTdHJlYW0iLCJzdG9yZUluTWVtb3J5IiwicHJlUHJvY2Vzc2luZ1N0b3JhZ2UiLCJJbWFnZUJ1ZmZlclNpemUiLCJnZXRJbWdCdWZmZXJTaXplIiwic2FtcGxlU2l6ZSIsIkxhYmVsQnVmZmVyU2l6ZSIsIm51bUNsYXNzIiwiaW1hZ2VCdWZmZXJTaXplIiwibGFiZWxCdWZmZXJTaXplIiwiVHJhbnNmb3JtRm4iLCJjaHVuayIsImNodW5rRW5jb2RpbmciLCJhZnRlclRyYW5zZm9ybUZuIiwiVHJhbnNmb3JtQXN5bmMiLCJzYW1wbGVCdWZmZXIiLCJzYW1wbGUiLCJsYWJlbEJ1ZmZlciIsImxhYmVsIiwic3BsaXRlZEltZ0J1ZmZlciIsInNwbGl0SW1hZ2VCdWZmZXIiLCJzcGxpdGVkTGFiZWxCdWZmZXIiLCJ0cmFuc2Zvcm1lZERhdGEiLCJjaHVua0lkeCIsInRoZW4iLCJ0cmFuc2Zvcm1lZENodW5rIiwiV3JpdGVGbiIsImNhbGxiYWNrIiwiV3JpdGVBc3luYyIsImdlbmVyYXRvciIsImdlbmVyYXRvcldpdGhJbmRleCIsImNodW5rU2FtcGxlUGF0aCIsInNldEl0ZW0iLCJjaHVua0xhYmVsUGF0aCIsInJlc3VsdCIsInNhdmVkUHJlcHJvY2Vzc2luZyIsImR1cGxleGVyIiwiU3RyZWFtIiwibWFrZUR1cGxleCIsInRyYW5zZm9ybWVyIiwibWFrZVRyYW5zZm9ybSIsInN0cmVhbSIsInBpcGUiLCJwcmVwcm9jZXNzaW5nRGF0YXNldCIsInNhbXBsZUl0ZW0iLCJnZXRJdGVtIiwibGFiZWxJdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsImdldFRyYWluVGVzdFNldCIsInRyYWluU2l6ZSIsInBhcnNlSW50IiwibGVuZ3RoIiwidHJhaW5TZXQiLCJ0ZXN0U2V0Iiwic3BsaXRUcmFpblRlc3RTZXQiLCJtYWtlU2FtcGxlR2VuZXJhdG9yIiwic2FtcGxlSWR4U2V0IiwiYmF0Y2hTaXplIiwic3RhcnQiLCJlbmQiLCJfYmF0Y2hlcyIsImhzcGxpdEV2ZXJ5IiwiYmF0Y2hlcyIsIm5leHRJbmRleCIsIml0ZXJhdGlvbkNvdW50Iiwic3RlcCIsImJhdGNoR2VuZXJhdG9yIiwibmV4dCIsImJhdGNoU2FtcGxlcyIsImJhdGNoTGFiZWxzIiwiYmwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImRhdGFzZXRDb25maWd1cmUiLCJjb25maWd1cmVBc3NlcnRpb24iLCJudW1TYW1wbGVzIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwic3VtbWFyeSIsIkVycm9yIiwibG9hZERhdGEiLCJsb2FkTGFiZWwiLCJsb2FkRGF0YXNldCIsIkJhc2VGdW5jdGlvbiIsImltZ1NpemUiLCJSIiwicmVkdWNlIiwicyIsImQiLCJpdGVtcyIsImFkZEluZGV4Iiwic3BsaXRJ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGxELDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvZGF0YXNldHMubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiwgXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQubWVtY2FjaGVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZUltZ0RhdGFzZXQgfSBmcm9tICcuL2Jhc2VJbWdEYXRhc2V0JztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRnVuY3Rpb24gfSBmcm9tICcuL2Z1bmN0aW9uJztcbmltcG9ydCB7IEluZGV4REJTdG9yYWdlIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IE1lbURvd25DYWNoZSB9IGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuaW1wb3J0IHsgUHJlcHJvY2Vzc2luZyB9IGZyb20gJ2NhdXNhbC1uZXQucHJlcHJvY2Vzc2luZyc7XG5pbXBvcnQgeyBTdHJlYW0sIFNhbXBsaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1uaXN0RGF0YXNldCBleHRlbmRzIEJhc2VJbWdEYXRhc2V0e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyZSl7XG4gICAgICAgIHN1cGVyKGNvbmZpZ3VyZSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IEluZGV4REJTdG9yYWdlO1xuICAgICAgICB0aGlzLm1lbUNhY2hlID0gTWVtRG93bkNhY2hlO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmcgPSBuZXcgUHJlcHJvY2Vzc2luZygpO1xuICAgICAgICB0aGlzLkYgPSBuZXcgRnVuY3Rpb24oKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaExhYmVsQ2h1bmsoY2h1bmtVcmwsIHNhdmVQYXRoKXtcbiAgICAgICAgY29uc29sZS5sb2coe2NodW5rVXJsLCBzYXZlUGF0aH0pO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoRmlsZShjaHVua1VybCwgc2F2ZVBhdGgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoU2FtcGxlQ2h1bmsoY2h1bmtVcmwsIHNhdmVQYXRoKXtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaFBOR0ZpbGUoY2h1bmtVcmwsIHNhdmVQYXRoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RGZXRjaGVkQ2h1bmtzKG51bWNodW5rcywgc2VsZWN0Qnk9J3JhbmRvbScpe1xuICAgICAgICBsZXQgY2h1bmtJZHhzID0gU2FtcGxpbmcuY2hvaWNlKHRoaXMuY29uZmlndXJhdGlvbi5jaHVua0xpc3QsIG51bWNodW5rcyk7XG4gICAgICAgIHJldHVybiBjaHVua0lkeHMubWFwKGlkeD0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtgZGF0YS1jaHVuay0ke2lkeH0ucG5nYCxgbGFiZWwtY2h1bmstJHtpZHh9YF07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoRGF0YXNldChzYXZlRGlyPScvbW5pc3QvJyxudW1jaHVua3M9MSwgc2VsZWN0Qnk9J3JhbmRvbScpe1xuICAgICAgICBsZXQgc2VsZWN0ZWRDaHVua3MgPSB0aGlzLnNlbGVjdEZldGNoZWRDaHVua3MobnVtY2h1bmtzLCBzZWxlY3RCeSk7XG4gICAgICAgIGxldCBbc2FtcGxlQ2h1bmtzLCBsYWJlbENodW5rc10gPSB0aGlzLkYudW56aXAoc2VsZWN0ZWRDaHVua3MpO1xuICAgICAgICBjb25zb2xlLmxvZyh7c2VsZWN0ZWRDaHVua3MsIHNhbXBsZUNodW5rcywgbGFiZWxDaHVua3N9KTtcbiAgICAgICAgbGV0IGNodW5rRmV0Y2hMaXN0ID0gdGhpcy5GLnppcChzYW1wbGVDaHVua3MsIGxhYmVsQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rcyA9IFtdO1xuICAgICAgICBmb3IobGV0IFtzYW1wbGVDaHVuaywgbGFiZWxDaHVua10gb2YgY2h1bmtGZXRjaExpc3Qpe1xuICAgICAgICAgICAgbGV0IHNhbXBsZUNodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBzYW1wbGVDaHVuaztcbiAgICAgICAgICAgIGxldCBzYW1tcGxlU2F2ZVBhdGggPSBzYXZlRGlyICsgc2FtcGxlQ2h1bms7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7c2FtcGxlQ2h1bmtVcmwsIHNhbW1wbGVTYXZlUGF0aH0pO1xuICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hQTkdGaWxlKHNhbXBsZUNodW5rVXJsLCBzYW1tcGxlU2F2ZVBhdGgpO1xuICAgICAgICAgICAgbGV0IGxhYmVsQ2h1bmtVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZGF0YXNldFVybCArIGxhYmVsQ2h1bms7XG4gICAgICAgICAgICBsZXQgbGFiZWxTYXZlUGF0aCA9IHNhdmVEaXIgKyBsYWJlbENodW5rO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2xhYmVsQ2h1bmtVcmwsIGxhYmVsU2F2ZVBhdGh9KTtcbiAgICAgICAgICAgIGxldCBsYWJlbFBhdGggPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hGaWxlKGxhYmVsQ2h1bmtVcmwsIGxhYmVsU2F2ZVBhdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2xhYmVsUGF0aH0pO1xuICAgICAgICAgICAgdGhpcy5zYXZlZENodW5rcy5wdXNoKFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IFtzYW1wbGVTdG9yYWdlLCBsYWJlbFN0b3JhZ2VdID0gdGhpcy5GLnVuemlwKHRoaXMuc2F2ZWRDaHVua3MpO1xuICAgICAgICB0aGlzLnNhdmVkQ2h1bmtTYW1wbGVzID0gc2FtcGxlU3RvcmFnZTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rTGFiZWxzID0gbGFiZWxTdG9yYWdlO1xuICAgICAgICByZXR1cm4ge3NhbXBsZVN0b3JhZ2UsIGxhYmVsU3RvcmFnZX07XG4gICAgfVxuICAgIFxuICAgIG1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtKHNhdmVEaXI9Jy9wcmVwcm9jZXNzaW5nL21uaXN0Lycsc3RvcmVJbk1lbW9yeT1mYWxzZSl7XG4gICAgICAgIHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UgPSAoc3RvcmVJbk1lbW9yeSk/dGhpcy5tZW1DYWNoZTp0aGlzLnN0b3JhZ2U7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBJbWFnZUJ1ZmZlclNpemUgPSB0aGlzLkYuZ2V0SW1nQnVmZmVyU2l6ZSh0aGlzLnNhbXBsZVNpemUpO1xuICAgICAgICBjb25zdCBMYWJlbEJ1ZmZlclNpemUgPSB0aGlzLm51bUNsYXNzO1xuICAgICAgICBjb25zb2xlLmxvZyh7aW1hZ2VCdWZmZXJTaXplOiBJbWFnZUJ1ZmZlclNpemUsIFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWxCdWZmZXJTaXplOiBMYWJlbEJ1ZmZlclNpemV9KTtcbiAgICAgICAgY29uc3QgVHJhbnNmb3JtRm4gPSAoY2h1bmssIGNodW5rRW5jb2RpbmcsIGFmdGVyVHJhbnNmb3JtRm4pID0+e1xuICAgICAgICAgICAgY29uc3QgVHJhbnNmb3JtQXN5bmMgPSBhc3luYyAoKT0+e1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVCdWZmZXIgPSBjaHVuay5zYW1wbGU7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsQnVmZmVyID0gY2h1bmsubGFiZWw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coe3NhbXBsZUJ1ZmZlciwgbGFiZWxCdWZmZXJ9KTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRlZEltZ0J1ZmZlciA9IGF3YWl0IHRoaXMucHJlcHJvY2Vzc2luZy5zcGxpdEltYWdlQnVmZmVyKHNhbXBsZUJ1ZmZlciwgSW1hZ2VCdWZmZXJTaXplKTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRlZExhYmVsQnVmZmVyID0gYXdhaXQgdGhpcy5wcmVwcm9jZXNzaW5nLnNwbGl0SW1hZ2VCdWZmZXIobGFiZWxCdWZmZXIsIExhYmVsQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt0cmFuc2Zvcm1lZERhdGE6IHRoaXMuRi56aXAoc3BsaXRlZEltZ0J1ZmZlciwgc3BsaXRlZExhYmVsQnVmZmVyKSwgY2h1bmtJZHg6IGNodW5rLmlkeH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgVHJhbnNmb3JtQXN5bmMoY2h1bmspLnRoZW4odHJhbnNmb3JtZWRDaHVuaz0+e1xuICAgICAgICAgICAgICAgIGFmdGVyVHJhbnNmb3JtRm4obnVsbCwgdHJhbnNmb3JtZWRDaHVuayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFdyaXRlRm4gPSAodHJhbnNmb3JtZWRDaHVuaywgY2h1bmtFbmNvZGluZywgY2FsbGJhY2spID0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBXcml0ZUFzeW5jID0gYXN5bmMgKHRyYW5zZm9ybWVkQ2h1bmspPT57XG4gICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodHJhbnNmb3JtZWRDaHVuay50cmFuc2Zvcm1lZERhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBjaHVua0lkeCAgPSB0cmFuc2Zvcm1lZENodW5rLmNodW5rSWR4O1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVQYXRoICA9IFtdLCBsYWJlbFBhdGggPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGUsIGxhYmVsXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua1NhbXBsZVBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdkYXRhLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgc2FtcGxlKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0xhYmVsUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ2xhYmVsLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVQYXRoID0gWy4uLnNhbXBsZVBhdGgsIGNodW5rU2FtcGxlUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUGF0aCA9IFsuLi5sYWJlbFBhdGgsIGNodW5rTGFiZWxQYXRoXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRi56aXAoc2FtcGxlUGF0aCwgbGFiZWxQYXRoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFdyaXRlQXN5bmModHJhbnNmb3JtZWRDaHVuaykudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSBbLi4udGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIC4uLnJlc3VsdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBkdXBsZXhlciA9IFN0cmVhbS5tYWtlRHVwbGV4KFdyaXRlRm4pO1xuICAgICAgICBsZXQgdHJhbnNmb3JtZXIgPSBTdHJlYW0ubWFrZVRyYW5zZm9ybShUcmFuc2Zvcm1Gbik7XG4gICAgICAgIGxldCBzdHJlYW0gPSBkdXBsZXhlci5waXBlKHRyYW5zZm9ybWVyKS5waXBlKGR1cGxleGVyKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG5cbiAgICBhc3luYyBwcmVwcm9jZXNzaW5nRGF0YXNldChzdHJlYW0pe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlID0gc2FtcGxlSXRlbVtzYW1wbGVQYXRoXTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGxhYmVsSXRlbVtsYWJlbFBhdGhdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe3NhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgICAgIHN0cmVhbS5wdXNoKHtpZHgsIHNhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0ucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBzdHJlYW0ub24oJ2ZpbmlzaCcsICgpPT57XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGdldFRyYWluVGVzdFNldCh0cmFpblNpemU9bnVsbCl7XG4gICAgICAgIHRyYWluU2l6ZSA9IHRyYWluU2l6ZXx8cGFyc2VJbnQodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcubGVuZ3RoKjAuOSk7XG5cbiAgICAgICAgY29uc3QgW3RyYWluU2V0LCB0ZXN0U2V0XSA9IHRoaXMuRi5zcGxpdFRyYWluVGVzdFNldCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgdHJhaW5TaXplKTtcbiAgICAgICAgcmV0dXJuIFt0cmFpblNldCwgdGVzdFNldF07XG4gICAgfVxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcihzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZT1udWxsLCBzdGFydD0wLCBlbmQ9bnVsbCl7XG4gICAgICAgIFxuICAgICAgICBiYXRjaFNpemUgPSBiYXRjaFNpemU/YmF0Y2hTaXplOnNhbXBsZUlkeFNldC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IF9iYXRjaGVzID0gdGhpcy5GLmhzcGxpdEV2ZXJ5KHNhbXBsZUlkeFNldCwgYmF0Y2hTaXplKTtcbiAgICAgICAgY29uc3QgYmF0Y2hlcyA9IFNhbXBsaW5nLmNob2ljZShfYmF0Y2hlcywgX2JhdGNoZXMubGVuZ3RoKTtcbiAgICAgICAgaWYoZW5kID09PSBudWxsKXtcbiAgICAgICAgICAgIGVuZCA9IGJhdGNoZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSBzdGFydCwgaXRlcmF0aW9uQ291bnQgPSAwLCBzdGVwID0gMTtcbiAgICAgICAgY29uc29sZS5sb2coe2JhdGNoZXM6IGJhdGNoZXNbMF0ubGVuZ3RofSk7XG4gICAgICAgIGNvbnN0IGJhdGNoR2VuZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2U6IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2UsXG4gICAgICAgICAgICAgICAgbmV4dDogYXN5bmMoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmF0Y2hTYW1wbGVzID0gW10sIGJhdGNoTGFiZWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtibDogYmF0Y2hlc1tuZXh0SW5kZXhdLCBuZXh0SW5kZXh9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSBvZiBiYXRjaGVzW25leHRJbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoU2FtcGxlcyA9IFsuLi5iYXRjaFNhbXBsZXMsIHNhbXBsZUl0ZW1bc2FtcGxlUGF0aF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hMYWJlbHMgPSBbLi4uYmF0Y2hMYWJlbHMsIGxhYmVsSXRlbVtsYWJlbFBhdGhdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggKz0gc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0aW9uQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtiYXRjaFNhbXBsZXMsIGJhdGNoTGFiZWxzXTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUobmV4dEluZGV4IDwgZW5kKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJhdGNoR2VuZXJhdG9yO1xuICAgIH1cbn07XG4iLCJpbXBvcnQge2RlZmF1bHQgYXMgRnVuY3Rpb259IGZyb20gJy4vZnVuY3Rpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUltZ0RhdGFzZXR7XG4gICAgY29uc3RydWN0b3IoZGF0YXNldENvbmZpZ3VyZSwgY29uZmlndXJlQXNzZXJ0aW9uPW51bGwpe1xuICAgICAgICBpZihjb25maWd1cmVBc3NlcnRpb24pe1xuICAgICAgICAgICAgY29uZmlndXJlQXNzZXJ0aW9uKHRoaXMuZGF0YXNldENvbmZpZ3VyZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gZGF0YXNldENvbmZpZ3VyZTtcbiAgICAgICAgY29uc3Qge251bVNhbXBsZXMsIHNhbXBsZVNpemUsIG51bUNsYXNzZXN9ID0gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmRhdGFTaXplID0gW251bVNhbXBsZXMsIC4uLnNhbXBsZVNpemVdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5udW1TYW1wbGVzID0gbnVtU2FtcGxlcztcbiAgICAgICAgdGhpcy5zYW1wbGVTaXplID0gc2FtcGxlU2l6ZTtcbiAgICAgICAgdGhpcy5udW1DbGFzcyAgID0gbnVtQ2xhc3NlcztcbiAgICB9XG4gICAgXG4gICAgc3VtbWFyeSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBmZXRjaERhdGFzZXQoc2F2ZURpcj1udWxsKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWREYXRhKHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZExhYmVsKHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfSAgICBcbiAgICBcbiAgICBhc3luYyBsb2FkRGF0YXNldChzdG9yYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIG1ha2VTYW1wbGVHZW5lcmF0b3IoYmF0Y2hTaXplPTEwKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQge0Z1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbn0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgQmFzZUZ1bmN0aW9ue1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIGdldEltZ0J1ZmZlclNpemUoaW1nU2l6ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnJlZHVjZSgocyxkKT0+cypkLDEsaW1nU2l6ZSk7XG4gICAgfVxuICAgIGdlbmVyYXRvcldpdGhJbmRleChpdGVtcyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmFkZEluZGV4KFIubWFwKSgoZCwgaWR4KT0+W2lkeCwgZF0sIGl0ZW1zKTtcbiAgICB9XG4gICAgc3BsaXRUcmFpblRlc3RTZXQoaXRlbXMsIHNwbGl0SW5kZXgpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5zcGxpdEF0KHNwbGl0SW5kZXgsIGl0ZW1zKTtcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=