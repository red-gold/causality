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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9NTklTVC5JbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvYmFzZUltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiTW5pc3REYXRhc2V0IiwiQmFzZUltZ0RhdGFzZXQiLCJjb25zdHJ1Y3RvciIsImNvbmZpZ3VyZSIsInN0b3JhZ2UiLCJJbmRleERCU3RvcmFnZSIsIm1lbUNhY2hlIiwiTWVtRG93bkNhY2hlIiwicHJlcHJvY2Vzc2luZyIsIlByZXByb2Nlc3NpbmciLCJGIiwiRnVuY3Rpb24iLCJmZXRjaExhYmVsQ2h1bmsiLCJjaHVua1VybCIsInNhdmVQYXRoIiwiY29uc29sZSIsImxvZyIsImZldGNoRmlsZSIsImZldGNoU2FtcGxlQ2h1bmsiLCJmZXRjaFBOR0ZpbGUiLCJzZWxlY3RGZXRjaGVkQ2h1bmtzIiwibnVtY2h1bmtzIiwic2VsZWN0QnkiLCJjaHVua0lkeHMiLCJTYW1wbGluZyIsImNob2ljZSIsImNvbmZpZ3VyYXRpb24iLCJjaHVua0xpc3QiLCJtYXAiLCJpZHgiLCJmZXRjaERhdGFzZXQiLCJzYXZlRGlyIiwic2VsZWN0ZWRDaHVua3MiLCJzYW1wbGVDaHVua3MiLCJsYWJlbENodW5rcyIsInVuemlwIiwiY2h1bmtGZXRjaExpc3QiLCJ6aXAiLCJzYXZlZENodW5rcyIsInNhbXBsZUNodW5rIiwibGFiZWxDaHVuayIsInNhbXBsZUNodW5rVXJsIiwiZGF0YXNldFVybCIsInNhbW1wbGVTYXZlUGF0aCIsInNhbXBsZVBhdGgiLCJsYWJlbENodW5rVXJsIiwibGFiZWxTYXZlUGF0aCIsImxhYmVsUGF0aCIsInB1c2giLCJzYW1wbGVTdG9yYWdlIiwibGFiZWxTdG9yYWdlIiwic2F2ZWRDaHVua1NhbXBsZXMiLCJzYXZlZENodW5rTGFiZWxzIiwibWFrZVByZXByb2Nlc3NpbmdTdHJlYW0iLCJzdG9yZUluTWVtb3J5IiwicHJlUHJvY2Vzc2luZ1N0b3JhZ2UiLCJJbWFnZUJ1ZmZlclNpemUiLCJnZXRJbWdCdWZmZXJTaXplIiwic2FtcGxlU2l6ZSIsIkxhYmVsQnVmZmVyU2l6ZSIsIm51bUNsYXNzIiwiaW1hZ2VCdWZmZXJTaXplIiwibGFiZWxCdWZmZXJTaXplIiwiVHJhbnNmb3JtRm4iLCJjaHVuayIsImNodW5rRW5jb2RpbmciLCJhZnRlclRyYW5zZm9ybUZuIiwiVHJhbnNmb3JtQXN5bmMiLCJzYW1wbGVCdWZmZXIiLCJzYW1wbGUiLCJsYWJlbEJ1ZmZlciIsImxhYmVsIiwic3BsaXRlZEltZ0J1ZmZlciIsInNwbGl0SW1hZ2VCdWZmZXIiLCJzcGxpdGVkTGFiZWxCdWZmZXIiLCJ0cmFuc2Zvcm1lZERhdGEiLCJjaHVua0lkeCIsInRoZW4iLCJ0cmFuc2Zvcm1lZENodW5rIiwiV3JpdGVGbiIsImNhbGxiYWNrIiwiV3JpdGVBc3luYyIsImdlbmVyYXRvciIsImdlbmVyYXRvcldpdGhJbmRleCIsImNodW5rU2FtcGxlUGF0aCIsInNldEl0ZW0iLCJjaHVua0xhYmVsUGF0aCIsInJlc3VsdCIsInNhdmVkUHJlcHJvY2Vzc2luZyIsImR1cGxleGVyIiwiU3RyZWFtIiwibWFrZUR1cGxleCIsInRyYW5zZm9ybWVyIiwibWFrZVRyYW5zZm9ybSIsInN0cmVhbSIsInBpcGUiLCJwcmVwcm9jZXNzaW5nRGF0YXNldCIsInNhbXBsZUl0ZW0iLCJnZXRJdGVtIiwibGFiZWxJdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsImdldFRyYWluVGVzdFNldCIsInRyYWluU2l6ZSIsInBhcnNlSW50IiwibGVuZ3RoIiwidHJhaW5TZXQiLCJ0ZXN0U2V0Iiwic3BsaXRUcmFpblRlc3RTZXQiLCJtYWtlU2FtcGxlR2VuZXJhdG9yIiwic2FtcGxlSWR4U2V0IiwiYmF0Y2hTaXplIiwic3RhcnQiLCJlbmQiLCJfYmF0Y2hlcyIsImhzcGxpdEV2ZXJ5IiwiYmF0Y2hlcyIsIm5leHRJbmRleCIsIml0ZXJhdGlvbkNvdW50Iiwic3RlcCIsImJhdGNoR2VuZXJhdG9yIiwibmV4dCIsImJhdGNoU2FtcGxlcyIsImJhdGNoTGFiZWxzIiwiYmwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImRhdGFzZXRDb25maWd1cmUiLCJjb25maWd1cmVBc3NlcnRpb24iLCJudW1TYW1wbGVzIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwic3VtbWFyeSIsIkVycm9yIiwibG9hZERhdGEiLCJsb2FkTGFiZWwiLCJsb2FkRGF0YXNldCIsIkJhc2VGdW5jdGlvbiIsImltZ1NpemUiLCJSIiwicmVkdWNlIiwicyIsImQiLCJpdGVtcyIsImFkZEluZGV4Iiwic3BsaXRJ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGxELDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvZGF0YXNldHMud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5tZW1jYWNoZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBCYXNlSW1nRGF0YXNldCB9IGZyb20gJy4vYmFzZUltZ0RhdGFzZXQnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgSW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgTWVtRG93bkNhY2hlIH0gZnJvbSAnY2F1c2FsLW5ldC5tZW1jYWNoZSc7XG5pbXBvcnQgeyBQcmVwcm9jZXNzaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nJztcbmltcG9ydCB7IFN0cmVhbSwgU2FtcGxpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW5pc3REYXRhc2V0IGV4dGVuZHMgQmFzZUltZ0RhdGFzZXR7XG4gICAgXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJlKXtcbiAgICAgICAgc3VwZXIoY29uZmlndXJlKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gSW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMubWVtQ2FjaGUgPSBNZW1Eb3duQ2FjaGU7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZyA9IG5ldyBQcmVwcm9jZXNzaW5nKCk7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoTGFiZWxDaHVuayhjaHVua1VybCwgc2F2ZVBhdGgpe1xuICAgICAgICBjb25zb2xlLmxvZyh7Y2h1bmtVcmwsIHNhdmVQYXRofSk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hGaWxlKGNodW5rVXJsLCBzYXZlUGF0aCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hTYW1wbGVDaHVuayhjaHVua1VybCwgc2F2ZVBhdGgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zdG9yYWdlLmZldGNoUE5HRmlsZShjaHVua1VybCwgc2F2ZVBhdGgpO1xuICAgIH1cblxuICAgIHNlbGVjdEZldGNoZWRDaHVua3MobnVtY2h1bmtzLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIGxldCBjaHVua0lkeHMgPSBTYW1wbGluZy5jaG9pY2UodGhpcy5jb25maWd1cmF0aW9uLmNodW5rTGlzdCwgbnVtY2h1bmtzKTtcbiAgICAgICAgcmV0dXJuIGNodW5rSWR4cy5tYXAoaWR4PT57XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2BkYXRhLWNodW5rLSR7aWR4fS5wbmdgLGBsYWJlbC1jaHVuay0ke2lkeH1gXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hEYXRhc2V0KHNhdmVEaXI9Jy9tbmlzdC8nLG51bWNodW5rcz0xLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIGxldCBzZWxlY3RlZENodW5rcyA9IHRoaXMuc2VsZWN0RmV0Y2hlZENodW5rcyhudW1jaHVua3MsIHNlbGVjdEJ5KTtcbiAgICAgICAgbGV0IFtzYW1wbGVDaHVua3MsIGxhYmVsQ2h1bmtzXSA9IHRoaXMuRi51bnppcChzZWxlY3RlZENodW5rcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtzZWxlY3RlZENodW5rcywgc2FtcGxlQ2h1bmtzLCBsYWJlbENodW5rc30pO1xuICAgICAgICBsZXQgY2h1bmtGZXRjaExpc3QgPSB0aGlzLkYuemlwKHNhbXBsZUNodW5rcywgbGFiZWxDaHVua3MpO1xuICAgICAgICB0aGlzLnNhdmVkQ2h1bmtzID0gW107XG4gICAgICAgIGZvcihsZXQgW3NhbXBsZUNodW5rLCBsYWJlbENodW5rXSBvZiBjaHVua0ZldGNoTGlzdCl7XG4gICAgICAgICAgICBsZXQgc2FtcGxlQ2h1bmtVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZGF0YXNldFVybCArIHNhbXBsZUNodW5rO1xuICAgICAgICAgICAgbGV0IHNhbW1wbGVTYXZlUGF0aCA9IHNhdmVEaXIgKyBzYW1wbGVDaHVuaztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtzYW1wbGVDaHVua1VybCwgc2FtbXBsZVNhdmVQYXRofSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlUGF0aCA9IGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaFBOR0ZpbGUoc2FtcGxlQ2h1bmtVcmwsIHNhbW1wbGVTYXZlUGF0aCk7XG4gICAgICAgICAgICBsZXQgbGFiZWxDaHVua1VybCA9IHRoaXMuY29uZmlndXJhdGlvbi5kYXRhc2V0VXJsICsgbGFiZWxDaHVuaztcbiAgICAgICAgICAgIGxldCBsYWJlbFNhdmVQYXRoID0gc2F2ZURpciArIGxhYmVsQ2h1bms7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7bGFiZWxDaHVua1VybCwgbGFiZWxTYXZlUGF0aH0pO1xuICAgICAgICAgICAgbGV0IGxhYmVsUGF0aCA9IGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaEZpbGUobGFiZWxDaHVua1VybCwgbGFiZWxTYXZlUGF0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7bGFiZWxQYXRofSk7XG4gICAgICAgICAgICB0aGlzLnNhdmVkQ2h1bmtzLnB1c2goW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0pO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgW3NhbXBsZVN0b3JhZ2UsIGxhYmVsU3RvcmFnZV0gPSB0aGlzLkYudW56aXAodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIHRoaXMuc2F2ZWRDaHVua1NhbXBsZXMgPSBzYW1wbGVTdG9yYWdlO1xuICAgICAgICB0aGlzLnNhdmVkQ2h1bmtMYWJlbHMgPSBsYWJlbFN0b3JhZ2U7XG4gICAgICAgIHJldHVybiB7c2FtcGxlU3RvcmFnZSwgbGFiZWxTdG9yYWdlfTtcbiAgICB9XG4gICAgXG4gICAgbWFrZVByZXByb2Nlc3NpbmdTdHJlYW0oc2F2ZURpcj0nL3ByZXByb2Nlc3NpbmcvbW5pc3QvJyxzdG9yZUluTWVtb3J5PWZhbHNlKXtcbiAgICAgICAgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZSA9IChzdG9yZUluTWVtb3J5KT90aGlzLm1lbUNhY2hlOnRoaXMuc3RvcmFnZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IEltYWdlQnVmZmVyU2l6ZSA9IHRoaXMuRi5nZXRJbWdCdWZmZXJTaXplKHRoaXMuc2FtcGxlU2l6ZSk7XG4gICAgICAgIGNvbnN0IExhYmVsQnVmZmVyU2l6ZSA9IHRoaXMubnVtQ2xhc3M7XG4gICAgICAgIGNvbnNvbGUubG9nKHtpbWFnZUJ1ZmZlclNpemU6IEltYWdlQnVmZmVyU2l6ZSwgXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbEJ1ZmZlclNpemU6IExhYmVsQnVmZmVyU2l6ZX0pO1xuICAgICAgICBjb25zdCBUcmFuc2Zvcm1GbiA9IChjaHVuaywgY2h1bmtFbmNvZGluZywgYWZ0ZXJUcmFuc2Zvcm1GbikgPT57XG4gICAgICAgICAgICBjb25zdCBUcmFuc2Zvcm1Bc3luYyA9IGFzeW5jICgpPT57XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZUJ1ZmZlciA9IGNodW5rLnNhbXBsZTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxCdWZmZXIgPSBjaHVuay5sYWJlbDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7c2FtcGxlQnVmZmVyLCBsYWJlbEJ1ZmZlcn0pO1xuICAgICAgICAgICAgICAgIGxldCBzcGxpdGVkSW1nQnVmZmVyID0gYXdhaXQgdGhpcy5wcmVwcm9jZXNzaW5nLnNwbGl0SW1hZ2VCdWZmZXIoc2FtcGxlQnVmZmVyLCBJbWFnZUJ1ZmZlclNpemUpO1xuICAgICAgICAgICAgICAgIGxldCBzcGxpdGVkTGFiZWxCdWZmZXIgPSBhd2FpdCB0aGlzLnByZXByb2Nlc3Npbmcuc3BsaXRJbWFnZUJ1ZmZlcihsYWJlbEJ1ZmZlciwgTGFiZWxCdWZmZXJTaXplKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4ge3RyYW5zZm9ybWVkRGF0YTogdGhpcy5GLnppcChzcGxpdGVkSW1nQnVmZmVyLCBzcGxpdGVkTGFiZWxCdWZmZXIpLCBjaHVua0lkeDogY2h1bmsuaWR4fTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBUcmFuc2Zvcm1Bc3luYyhjaHVuaykudGhlbih0cmFuc2Zvcm1lZENodW5rPT57XG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2Zvcm1GbihudWxsLCB0cmFuc2Zvcm1lZENodW5rKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgV3JpdGVGbiA9ICh0cmFuc2Zvcm1lZENodW5rLCBjaHVua0VuY29kaW5nLCBjYWxsYmFjaykgPT57XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IFdyaXRlQXN5bmMgPSBhc3luYyAodHJhbnNmb3JtZWRDaHVuayk9PntcbiAgICAgICAgICAgICAgICBsZXQgZ2VuZXJhdG9yID0gdGhpcy5GLmdlbmVyYXRvcldpdGhJbmRleCh0cmFuc2Zvcm1lZENodW5rLnRyYW5zZm9ybWVkRGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rSWR4ICA9IHRyYW5zZm9ybWVkQ2h1bmsuY2h1bmtJZHg7XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggID0gW10sIGxhYmVsUGF0aCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZSwgbGFiZWxdXSBvZiBnZW5lcmF0b3Ipe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rU2FtcGxlUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ2RhdGEvJyArIGNodW5rSWR4ICsgJy8nICsgaWR4ICsgJy8nLCBzYW1wbGUpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rTGFiZWxQYXRoID0gYXdhaXQgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJdGVtKHNhdmVEaXIgKyAnbGFiZWwvJyArIGNodW5rSWR4ICsgJy8nICsgaWR4ICsgJy8nLCBsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZVBhdGggPSBbLi4uc2FtcGxlUGF0aCwgY2h1bmtTYW1wbGVQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxQYXRoID0gWy4uLmxhYmVsUGF0aCwgY2h1bmtMYWJlbFBhdGhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5GLnppcChzYW1wbGVQYXRoLCBsYWJlbFBhdGgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgV3JpdGVBc3luYyh0cmFuc2Zvcm1lZENodW5rKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zYXZlZFByZXByb2Nlc3Npbmcpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyA9IFsuLi50aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgLi4ucmVzdWx0XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGR1cGxleGVyID0gU3RyZWFtLm1ha2VEdXBsZXgoV3JpdGVGbik7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1lciA9IFN0cmVhbS5tYWtlVHJhbnNmb3JtKFRyYW5zZm9ybUZuKTtcbiAgICAgICAgbGV0IHN0cmVhbSA9IGR1cGxleGVyLnBpcGUodHJhbnNmb3JtZXIpLnBpcGUoZHVwbGV4ZXIpO1xuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgIH1cblxuICAgIGFzeW5jIHByZXByb2Nlc3NpbmdEYXRhc2V0KHN0cmVhbSl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2F2ZWRDaHVua3MpO1xuICAgICAgICBsZXQgZ2VuZXJhdG9yID0gdGhpcy5GLmdlbmVyYXRvcldpdGhJbmRleCh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgZm9yKGxldCBbaWR4LCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBzYW1wbGUgPSBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgbGV0IGxhYmVsID0gbGFiZWxJdGVtW2xhYmVsUGF0aF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7c2FtcGxlLCBsYWJlbH0pO1xuICAgICAgICAgICAgc3RyZWFtLnB1c2goe2lkeCwgc2FtcGxlLCBsYWJlbH0pO1xuICAgICAgICB9XG4gICAgICAgIHN0cmVhbS5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIHN0cmVhbS5vbignZmluaXNoJywgKCk9PntcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0VHJhaW5UZXN0U2V0KHRyYWluU2l6ZT1udWxsKXtcbiAgICAgICAgdHJhaW5TaXplID0gdHJhaW5TaXplfHxwYXJzZUludCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZy5sZW5ndGgqMC45KTtcblxuICAgICAgICBjb25zdCBbdHJhaW5TZXQsIHRlc3RTZXRdID0gdGhpcy5GLnNwbGl0VHJhaW5UZXN0U2V0KHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLCB0cmFpblNpemUpO1xuICAgICAgICByZXR1cm4gW3RyYWluU2V0LCB0ZXN0U2V0XTtcbiAgICB9XG5cbiAgICBtYWtlU2FtcGxlR2VuZXJhdG9yKHNhbXBsZUlkeFNldCwgYmF0Y2hTaXplPW51bGwsIHN0YXJ0PTAsIGVuZD1udWxsKXtcbiAgICAgICAgXG4gICAgICAgIGJhdGNoU2l6ZSA9IGJhdGNoU2l6ZT9iYXRjaFNpemU6c2FtcGxlSWR4U2V0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgX2JhdGNoZXMgPSB0aGlzLkYuaHNwbGl0RXZlcnkoc2FtcGxlSWR4U2V0LCBiYXRjaFNpemUpO1xuICAgICAgICBjb25zdCBiYXRjaGVzID0gU2FtcGxpbmcuY2hvaWNlKF9iYXRjaGVzLCBfYmF0Y2hlcy5sZW5ndGgpO1xuICAgICAgICBpZihlbmQgPT09IG51bGwpe1xuICAgICAgICAgICAgZW5kID0gYmF0Y2hlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRJbmRleCA9IHN0YXJ0LCBpdGVyYXRpb25Db3VudCA9IDAsIHN0ZXAgPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyh7YmF0Y2hlczogYmF0Y2hlc1swXS5sZW5ndGh9KTtcbiAgICAgICAgY29uc3QgYmF0Y2hHZW5lcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZTogdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZSxcbiAgICAgICAgICAgICAgICBuZXh0OiBhc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXRjaFNhbXBsZXMgPSBbXSwgYmF0Y2hMYWJlbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coe2JsOiBiYXRjaGVzW25leHRJbmRleF0sIG5leHRJbmRleH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdIG9mIGJhdGNoZXNbbmV4dEluZGV4XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hTYW1wbGVzID0gWy4uLmJhdGNoU2FtcGxlcywgc2FtcGxlSXRlbVtzYW1wbGVQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaExhYmVscyA9IFsuLi5iYXRjaExhYmVscywgbGFiZWxJdGVtW2xhYmVsUGF0aF1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSBzdGVwO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRpb25Db3VudCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZShuZXh0SW5kZXggPCBlbmQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYmF0Y2hHZW5lcmF0b3I7XG4gICAgfVxufTtcbiIsImltcG9ydCB7ZGVmYXVsdCBhcyBGdW5jdGlvbn0gZnJvbSAnLi9mdW5jdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlSW1nRGF0YXNldHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhc2V0Q29uZmlndXJlLCBjb25maWd1cmVBc3NlcnRpb249bnVsbCl7XG4gICAgICAgIGlmKGNvbmZpZ3VyZUFzc2VydGlvbil7XG4gICAgICAgICAgICBjb25maWd1cmVBc3NlcnRpb24odGhpcy5kYXRhc2V0Q29uZmlndXJlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBkYXRhc2V0Q29uZmlndXJlO1xuICAgICAgICBjb25zdCB7bnVtU2FtcGxlcywgc2FtcGxlU2l6ZSwgbnVtQ2xhc3Nlc30gPSB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgICAgIHRoaXMuZGF0YVNpemUgPSBbbnVtU2FtcGxlcywgLi4uc2FtcGxlU2l6ZV07XG4gICAgICAgIFxuICAgICAgICB0aGlzLm51bVNhbXBsZXMgPSBudW1TYW1wbGVzO1xuICAgICAgICB0aGlzLnNhbXBsZVNpemUgPSBzYW1wbGVTaXplO1xuICAgICAgICB0aGlzLm51bUNsYXNzICAgPSBudW1DbGFzc2VzO1xuICAgIH1cbiAgICBcbiAgICBzdW1tYXJ5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGZldGNoRGF0YXNldChzYXZlRGlyPW51bGwpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZERhdGEoc3RvcmFnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkTGFiZWwoc3RvcmFnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9ICAgIFxuICAgIFxuICAgIGFzeW5jIGxvYWREYXRhc2V0KHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcihiYXRjaFNpemU9MTApe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7RnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9ufSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBCYXNlRnVuY3Rpb257XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0SW1nQnVmZmVyU2l6ZShpbWdTaXplKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKChzLGQpPT5zKmQsMSxpbWdTaXplKTtcbiAgICB9XG4gICAgZ2VuZXJhdG9yV2l0aEluZGV4KGl0ZW1zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuYWRkSW5kZXgoUi5tYXApKChkLCBpZHgpPT5baWR4LCBkXSwgaXRlbXMpO1xuICAgIH1cbiAgICBzcGxpdFRyYWluVGVzdFNldChpdGVtcywgc3BsaXRJbmRleCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnNwbGl0QXQoc3BsaXRJbmRleCwgaXRlbXMpO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==