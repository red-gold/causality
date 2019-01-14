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

      const FetchSampleChunk = async chunkName => {
        let chunkUrl = this.configuration.datasetUrl + chunkName;
        let savePath = saveDir + chunkName;
        console.log({
          chunkUrl,
          savePath
        });
        return await this.fetchSampleChunk(chunkUrl, savePath);
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
      this.savedChunks = [];

      for (let [sampleChunk, labelChunk] of chunkFetchList) {
        let samplePath = await FetchSampleChunk(sampleChunk);
        console.log({
          samplePath
        });
        let labelPath = await FetchLabelChunk(labelChunk);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9NTklTVC5JbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvYmFzZUltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiTW5pc3REYXRhc2V0IiwiQmFzZUltZ0RhdGFzZXQiLCJjb25zdHJ1Y3RvciIsImNvbmZpZ3VyZSIsInN0b3JhZ2UiLCJJbmRleERCU3RvcmFnZSIsIm1lbUNhY2hlIiwiTWVtRG93bkNhY2hlIiwicHJlcHJvY2Vzc2luZyIsIlByZXByb2Nlc3NpbmciLCJGIiwiRnVuY3Rpb24iLCJmZXRjaExhYmVsQ2h1bmsiLCJjaHVua1VybCIsInNhdmVQYXRoIiwiY29uc29sZSIsImxvZyIsImZldGNoRmlsZSIsImZldGNoU2FtcGxlQ2h1bmsiLCJmZXRjaFBOR0ZpbGUiLCJzZWxlY3RGZXRjaGVkQ2h1bmtzIiwibnVtY2h1bmtzIiwic2VsZWN0QnkiLCJjaHVua0lkeHMiLCJTYW1wbGluZyIsImNob2ljZSIsImNvbmZpZ3VyYXRpb24iLCJjaHVua0xpc3QiLCJtYXAiLCJpZHgiLCJmZXRjaERhdGFzZXQiLCJzYXZlRGlyIiwic2VsZWN0ZWRDaHVua3MiLCJzYW1wbGVDaHVua3MiLCJsYWJlbENodW5rcyIsInVuemlwIiwiRmV0Y2hTYW1wbGVDaHVuayIsImNodW5rTmFtZSIsImRhdGFzZXRVcmwiLCJGZXRjaExhYmVsQ2h1bmsiLCJjaHVua0ZldGNoTGlzdCIsInppcCIsInNhdmVkQ2h1bmtzIiwic2FtcGxlQ2h1bmsiLCJsYWJlbENodW5rIiwic2FtcGxlUGF0aCIsImxhYmVsUGF0aCIsInB1c2giLCJzYW1wbGVTdG9yYWdlIiwibGFiZWxTdG9yYWdlIiwic2F2ZWRDaHVua1NhbXBsZXMiLCJzYXZlZENodW5rTGFiZWxzIiwibWFrZVByZXByb2Nlc3NpbmdTdHJlYW0iLCJzdG9yZUluTWVtb3J5IiwicHJlUHJvY2Vzc2luZ1N0b3JhZ2UiLCJJbWFnZUJ1ZmZlclNpemUiLCJnZXRJbWdCdWZmZXJTaXplIiwic2FtcGxlU2l6ZSIsIkxhYmVsQnVmZmVyU2l6ZSIsIm51bUNsYXNzIiwiaW1hZ2VCdWZmZXJTaXplIiwibGFiZWxCdWZmZXJTaXplIiwiVHJhbnNmb3JtRm4iLCJjaHVuayIsImNodW5rRW5jb2RpbmciLCJhZnRlclRyYW5zZm9ybUZuIiwiVHJhbnNmb3JtQXN5bmMiLCJzYW1wbGVCdWZmZXIiLCJzYW1wbGUiLCJsYWJlbEJ1ZmZlciIsImxhYmVsIiwic3BsaXRlZEltZ0J1ZmZlciIsInNwbGl0SW1hZ2VCdWZmZXIiLCJzcGxpdGVkTGFiZWxCdWZmZXIiLCJ0cmFuc2Zvcm1lZERhdGEiLCJjaHVua0lkeCIsInRoZW4iLCJ0cmFuc2Zvcm1lZENodW5rIiwiV3JpdGVGbiIsImNhbGxiYWNrIiwiV3JpdGVBc3luYyIsImdlbmVyYXRvciIsImdlbmVyYXRvcldpdGhJbmRleCIsImNodW5rU2FtcGxlUGF0aCIsInNldEl0ZW0iLCJjaHVua0xhYmVsUGF0aCIsInJlc3VsdCIsInNhdmVkUHJlcHJvY2Vzc2luZyIsImR1cGxleGVyIiwiU3RyZWFtIiwibWFrZUR1cGxleCIsInRyYW5zZm9ybWVyIiwibWFrZVRyYW5zZm9ybSIsInN0cmVhbSIsInBpcGUiLCJwcmVwcm9jZXNzaW5nRGF0YXNldCIsInNhbXBsZUl0ZW0iLCJnZXRJdGVtIiwibGFiZWxJdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiIsImdldFRyYWluVGVzdFNldCIsInRyYWluU2l6ZSIsInBhcnNlSW50IiwibGVuZ3RoIiwidHJhaW5TZXQiLCJ0ZXN0U2V0Iiwic3BsaXRUcmFpblRlc3RTZXQiLCJtYWtlU2FtcGxlR2VuZXJhdG9yIiwic2FtcGxlSWR4U2V0IiwiYmF0Y2hTaXplIiwic3RhcnQiLCJlbmQiLCJfYmF0Y2hlcyIsImhzcGxpdEV2ZXJ5IiwiYmF0Y2hlcyIsIm5leHRJbmRleCIsIml0ZXJhdGlvbkNvdW50Iiwic3RlcCIsImJhdGNoR2VuZXJhdG9yIiwibmV4dCIsImJhdGNoU2FtcGxlcyIsImJhdGNoTGFiZWxzIiwiYmwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImRhdGFzZXRDb25maWd1cmUiLCJjb25maWd1cmVBc3NlcnRpb24iLCJudW1TYW1wbGVzIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwic3VtbWFyeSIsIkVycm9yIiwibG9hZERhdGEiLCJsb2FkTGFiZWwiLCJsb2FkRGF0YXNldCIsIkJhc2VGdW5jdGlvbiIsImltZ1NpemUiLCJSIiwicmVkdWNlIiwicyIsImQiLCJpdGVtcyIsImFkZEluZGV4Iiwic3BsaXRJbmRleCIsInNwbGl0QXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ2UsUUFBTUEsWUFBTixTQUEyQkMsdUJBQTNCLENBQXlDO0FBRXBEQyxlQUFXLENBQUNDLFNBQUQsRUFBVztBQUNsQixZQUFNQSxTQUFOO0FBQ0EsV0FBS0MsT0FBTCxHQUFlQyx5QkFBZjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0JDLHdCQUFoQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosRUFBckI7QUFDQSxXQUFLQyxDQUFMLEdBQVMsSUFBSUMsaUJBQUosRUFBVDtBQUNIOztBQUVELFVBQU1DLGVBQU4sQ0FBc0JDLFFBQXRCLEVBQWdDQyxRQUFoQyxFQUF5QztBQUNyQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ0gsZ0JBQUQ7QUFBV0M7QUFBWCxPQUFaO0FBQ0EsYUFBTyxNQUFNLEtBQUtWLE9BQUwsQ0FBYWEsU0FBYixDQUF1QkosUUFBdkIsRUFBaUNDLFFBQWpDLENBQWI7QUFDSDs7QUFFRCxVQUFNSSxnQkFBTixDQUF1QkwsUUFBdkIsRUFBaUNDLFFBQWpDLEVBQTBDO0FBQ3RDLGFBQU8sTUFBTSxLQUFLVixPQUFMLENBQWFlLFlBQWIsQ0FBMEJOLFFBQTFCLEVBQW9DQyxRQUFwQyxDQUFiO0FBQ0g7O0FBRURNLHVCQUFtQixDQUFDQyxTQUFELEVBQVlDLFFBQVEsR0FBQyxRQUFyQixFQUE4QjtBQUM3QyxVQUFJQyxTQUFTLEdBQUdDLHFCQUFTQyxNQUFULENBQWdCLEtBQUtDLGFBQUwsQ0FBbUJDLFNBQW5DLEVBQThDTixTQUE5QyxDQUFoQjs7QUFDQSxhQUFPRSxTQUFTLENBQUNLLEdBQVYsQ0FBY0MsR0FBRyxJQUFFO0FBQ1YsZUFBTyxDQUFFLGNBQWFBLEdBQUksTUFBbkIsRUFBMEIsZUFBY0EsR0FBSSxFQUE1QyxDQUFQO0FBQ0gsT0FGTixDQUFQO0FBR0g7O0FBRUQsVUFBTUMsWUFBTixDQUFtQkMsT0FBTyxHQUFDLFNBQTNCLEVBQXFDVixTQUFTLEdBQUMsQ0FBL0MsRUFBa0RDLFFBQVEsR0FBQyxRQUEzRCxFQUFvRTtBQUNoRSxVQUFJVSxjQUFjLEdBQUcsS0FBS1osbUJBQUwsQ0FBeUJDLFNBQXpCLEVBQW9DQyxRQUFwQyxDQUFyQjtBQUNBLFVBQUksQ0FBQ1csWUFBRCxFQUFlQyxXQUFmLElBQThCLEtBQUt4QixDQUFMLENBQU95QixLQUFQLENBQWFILGNBQWIsQ0FBbEM7QUFDQWpCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNnQixzQkFBRDtBQUFpQkMsb0JBQWpCO0FBQStCQztBQUEvQixPQUFaOztBQUNBLFlBQU1FLGdCQUFnQixHQUFHLE1BQU9DLFNBQVAsSUFBbUI7QUFDeEMsWUFBSXhCLFFBQVEsR0FBRyxLQUFLYSxhQUFMLENBQW1CWSxVQUFuQixHQUFnQ0QsU0FBL0M7QUFDQSxZQUFJdkIsUUFBUSxHQUFHaUIsT0FBTyxHQUFHTSxTQUF6QjtBQUNBdEIsZUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ0gsa0JBQUQ7QUFBV0M7QUFBWCxTQUFaO0FBQ0EsZUFBTyxNQUFNLEtBQUtJLGdCQUFMLENBQXNCTCxRQUF0QixFQUFnQ0MsUUFBaEMsQ0FBYjtBQUNILE9BTEQ7O0FBTUEsWUFBTXlCLGVBQWUsR0FBRyxNQUFPRixTQUFQLElBQW1CO0FBQ3ZDLFlBQUl4QixRQUFRLEdBQUcsS0FBS2EsYUFBTCxDQUFtQlksVUFBbkIsR0FBZ0NELFNBQS9DO0FBQ0EsWUFBSXZCLFFBQVEsR0FBR2lCLE9BQU8sR0FBR00sU0FBekI7QUFDQXRCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNILGtCQUFEO0FBQVdDO0FBQVgsU0FBWjtBQUNBLGVBQU8sTUFBTSxLQUFLRixlQUFMLENBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsQ0FBYjtBQUNILE9BTEQ7O0FBTUEsVUFBSTBCLGNBQWMsR0FBRyxLQUFLOUIsQ0FBTCxDQUFPK0IsR0FBUCxDQUFXUixZQUFYLEVBQXlCQyxXQUF6QixDQUFyQjtBQUNBLFdBQUtRLFdBQUwsR0FBbUIsRUFBbkI7O0FBQ0EsV0FBSSxJQUFJLENBQUNDLFdBQUQsRUFBY0MsVUFBZCxDQUFSLElBQXFDSixjQUFyQyxFQUFvRDtBQUNoRCxZQUFJSyxVQUFVLEdBQUcsTUFBTVQsZ0JBQWdCLENBQUNPLFdBQUQsQ0FBdkM7QUFDQTVCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUM2QjtBQUFELFNBQVo7QUFDQSxZQUFJQyxTQUFTLEdBQUcsTUFBTVAsZUFBZSxDQUFDSyxVQUFELENBQXJDO0FBQ0E3QixlQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDOEI7QUFBRCxTQUFaO0FBQ0EsYUFBS0osV0FBTCxDQUFpQkssSUFBakIsQ0FBc0IsQ0FBQ0YsVUFBRCxFQUFhQyxTQUFiLENBQXRCO0FBQ0g7O0FBQUE7QUFDRCxVQUFJLENBQUNFLGFBQUQsRUFBZ0JDLFlBQWhCLElBQWdDLEtBQUt2QyxDQUFMLENBQU95QixLQUFQLENBQWEsS0FBS08sV0FBbEIsQ0FBcEM7QUFDQSxXQUFLUSxpQkFBTCxHQUF5QkYsYUFBekI7QUFDQSxXQUFLRyxnQkFBTCxHQUF3QkYsWUFBeEI7QUFDQSxhQUFPO0FBQUNELHFCQUFEO0FBQWdCQztBQUFoQixPQUFQO0FBQ0g7O0FBRURHLDJCQUF1QixDQUFDckIsT0FBTyxHQUFDLHVCQUFULEVBQWlDc0IsYUFBYSxHQUFDLEtBQS9DLEVBQXFEO0FBQ3hFLFdBQUtDLG9CQUFMLEdBQTZCRCxhQUFELEdBQWdCLEtBQUsvQyxRQUFyQixHQUE4QixLQUFLRixPQUEvRDtBQUVBLFlBQU1tRCxlQUFlLEdBQUcsS0FBSzdDLENBQUwsQ0FBTzhDLGdCQUFQLENBQXdCLEtBQUtDLFVBQTdCLENBQXhCO0FBQ0EsWUFBTUMsZUFBZSxHQUFHLEtBQUtDLFFBQTdCO0FBQ0E1QyxhQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDNEMsdUJBQWUsRUFBRUwsZUFBbEI7QUFDQ00sdUJBQWUsRUFBRUg7QUFEbEIsT0FBWjs7QUFFQSxZQUFNSSxXQUFXLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxhQUFSLEVBQXVCQyxnQkFBdkIsS0FBMkM7QUFDM0QsY0FBTUMsY0FBYyxHQUFHLFlBQVU7QUFDN0IsY0FBSUMsWUFBWSxHQUFHSixLQUFLLENBQUNLLE1BQXpCO0FBQ0EsY0FBSUMsV0FBVyxHQUFHTixLQUFLLENBQUNPLEtBQXhCO0FBQ0F2RCxpQkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ21ELHdCQUFEO0FBQWVFO0FBQWYsV0FBWjtBQUNBLGNBQUlFLGdCQUFnQixHQUFHLE1BQU0sS0FBSy9ELGFBQUwsQ0FBbUJnRSxnQkFBbkIsQ0FBb0NMLFlBQXBDLEVBQWtEWixlQUFsRCxDQUE3QjtBQUNBLGNBQUlrQixrQkFBa0IsR0FBRyxNQUFNLEtBQUtqRSxhQUFMLENBQW1CZ0UsZ0JBQW5CLENBQW9DSCxXQUFwQyxFQUFpRFgsZUFBakQsQ0FBL0I7QUFFQSxpQkFBTztBQUFDZ0IsMkJBQWUsRUFBRSxLQUFLaEUsQ0FBTCxDQUFPK0IsR0FBUCxDQUFXOEIsZ0JBQVgsRUFBNkJFLGtCQUE3QixDQUFsQjtBQUFvRUUsb0JBQVEsRUFBRVosS0FBSyxDQUFDbEM7QUFBcEYsV0FBUDtBQUNILFNBUkQ7O0FBU0FxQyxzQkFBYyxDQUFDSCxLQUFELENBQWQsQ0FBc0JhLElBQXRCLENBQTJCQyxnQkFBZ0IsSUFBRTtBQUN6Q1osMEJBQWdCLENBQUMsSUFBRCxFQUFPWSxnQkFBUCxDQUFoQjtBQUNILFNBRkQ7QUFHSCxPQWJEOztBQWVBLFlBQU1DLE9BQU8sR0FBRyxDQUFDRCxnQkFBRCxFQUFtQmIsYUFBbkIsRUFBa0NlLFFBQWxDLEtBQThDO0FBRTFELGNBQU1DLFVBQVUsR0FBRyxNQUFPSCxnQkFBUCxJQUEwQjtBQUN6QyxjQUFJSSxTQUFTLEdBQUcsS0FBS3ZFLENBQUwsQ0FBT3dFLGtCQUFQLENBQTBCTCxnQkFBZ0IsQ0FBQ0gsZUFBM0MsQ0FBaEI7QUFDQSxjQUFJQyxRQUFRLEdBQUlFLGdCQUFnQixDQUFDRixRQUFqQztBQUNBLGNBQUk5QixVQUFVLEdBQUksRUFBbEI7QUFBQSxjQUFzQkMsU0FBUyxHQUFHLEVBQWxDOztBQUNBLGVBQUksSUFBSSxDQUFDakIsR0FBRCxFQUFNLENBQUN1QyxNQUFELEVBQVNFLEtBQVQsQ0FBTixDQUFSLElBQWtDVyxTQUFsQyxFQUE0QztBQUV4QyxnQkFBSUUsZUFBZSxHQUFHLE1BQU0sS0FBSzdCLG9CQUFMLENBQ25COEIsT0FEbUIsQ0FDWHJELE9BQU8sR0FBRyxPQUFWLEdBQW9CNEMsUUFBcEIsR0FBK0IsR0FBL0IsR0FBcUM5QyxHQUFyQyxHQUEyQyxHQURoQyxFQUNxQ3VDLE1BRHJDLENBQTVCO0FBRUEsZ0JBQUlpQixjQUFjLEdBQUcsTUFBTSxLQUFLL0Isb0JBQUwsQ0FDbEI4QixPQURrQixDQUNWckQsT0FBTyxHQUFHLFFBQVYsR0FBcUI0QyxRQUFyQixHQUFnQyxHQUFoQyxHQUFzQzlDLEdBQXRDLEdBQTRDLEdBRGxDLEVBQ3VDeUMsS0FEdkMsQ0FBM0I7QUFFQXpCLHNCQUFVLEdBQUcsQ0FBQyxHQUFHQSxVQUFKLEVBQWdCc0MsZUFBaEIsQ0FBYjtBQUNBckMscUJBQVMsR0FBRyxDQUFDLEdBQUdBLFNBQUosRUFBZXVDLGNBQWYsQ0FBWjtBQUNIOztBQUNELGlCQUFPLEtBQUszRSxDQUFMLENBQU8rQixHQUFQLENBQVdJLFVBQVgsRUFBdUJDLFNBQXZCLENBQVA7QUFDSCxTQWREOztBQWdCQWtDLGtCQUFVLENBQUNILGdCQUFELENBQVYsQ0FBNkJELElBQTdCLENBQW1DVSxNQUFELElBQVU7QUFDeEMsY0FBRyxLQUFLQyxrQkFBUixFQUEyQjtBQUN2QixpQkFBS0Esa0JBQUwsR0FBMEIsQ0FBQyxHQUFHLEtBQUtBLGtCQUFULEVBQTZCLEdBQUdELE1BQWhDLENBQTFCO0FBQ0gsV0FGRCxNQUdJO0FBQ0EsaUJBQUtDLGtCQUFMLEdBQTBCRCxNQUExQjtBQUNIOztBQUNEUCxrQkFBUTtBQUNYLFNBUkQ7QUFTSCxPQTNCRDs7QUE0QkEsVUFBSVMsUUFBUSxHQUFHQyxtQkFBT0MsVUFBUCxDQUFrQlosT0FBbEIsQ0FBZjs7QUFDQSxVQUFJYSxXQUFXLEdBQUdGLG1CQUFPRyxhQUFQLENBQXFCOUIsV0FBckIsQ0FBbEI7O0FBQ0EsVUFBSStCLE1BQU0sR0FBR0wsUUFBUSxDQUFDTSxJQUFULENBQWNILFdBQWQsRUFBMkJHLElBQTNCLENBQWdDTixRQUFoQyxDQUFiO0FBQ0EsYUFBT0ssTUFBUDtBQUNIOztBQUVELFVBQU1FLG9CQUFOLENBQTJCRixNQUEzQixFQUFrQztBQUM5QjlFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUswQixXQUFqQjtBQUNBLFVBQUl1QyxTQUFTLEdBQUcsS0FBS3ZFLENBQUwsQ0FBT3dFLGtCQUFQLENBQTBCLEtBQUt4QyxXQUEvQixDQUFoQjs7QUFDQSxXQUFJLElBQUksQ0FBQ2IsR0FBRCxFQUFNLENBQUNnQixVQUFELEVBQWFDLFNBQWIsQ0FBTixDQUFSLElBQTBDbUMsU0FBMUMsRUFBb0Q7QUFDaEQsWUFBSWUsVUFBVSxHQUFHLE1BQU0sS0FBSzVGLE9BQUwsQ0FBYTZGLE9BQWIsQ0FBcUJwRCxVQUFyQixFQUFpQyxJQUFqQyxDQUF2QjtBQUNBLFlBQUlxRCxTQUFTLEdBQUcsTUFBTSxLQUFLOUYsT0FBTCxDQUFhNkYsT0FBYixDQUFxQm5ELFNBQXJCLEVBQWdDLElBQWhDLENBQXRCO0FBQ0EsWUFBSXNCLE1BQU0sR0FBRzRCLFVBQVUsQ0FBQ25ELFVBQUQsQ0FBdkI7QUFDQSxZQUFJeUIsS0FBSyxHQUFHNEIsU0FBUyxDQUFDcEQsU0FBRCxDQUFyQjtBQUNBL0IsZUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ29ELGdCQUFEO0FBQVNFO0FBQVQsU0FBWjtBQUNBdUIsY0FBTSxDQUFDOUMsSUFBUCxDQUFZO0FBQUNsQixhQUFEO0FBQU11QyxnQkFBTjtBQUFjRTtBQUFkLFNBQVo7QUFDSDs7QUFDRHVCLFlBQU0sQ0FBQzlDLElBQVAsQ0FBWSxJQUFaO0FBQ0EsYUFBTyxJQUFJb0QsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFtQjtBQUNsQ1IsY0FBTSxDQUFDUyxFQUFQLENBQVUsUUFBVixFQUFvQixNQUFJO0FBQ3BCRixpQkFBTyxDQUFDLEtBQUtiLGtCQUFOLENBQVA7QUFDSCxTQUZEO0FBR0gsT0FKTSxDQUFQO0FBS0g7O0FBRURnQixtQkFBZSxDQUFDQyxTQUFTLEdBQUMsSUFBWCxFQUFnQjtBQUMzQkEsZUFBUyxHQUFHQSxTQUFTLElBQUVDLFFBQVEsQ0FBQyxLQUFLbEIsa0JBQUwsQ0FBd0JtQixNQUF4QixHQUErQixHQUFoQyxDQUEvQjtBQUVBLFlBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxPQUFYLElBQXNCLEtBQUtsRyxDQUFMLENBQU9tRyxpQkFBUCxDQUF5QixLQUFLdEIsa0JBQTlCLEVBQWtEaUIsU0FBbEQsQ0FBNUI7QUFDQSxhQUFPLENBQUNHLFFBQUQsRUFBV0MsT0FBWCxDQUFQO0FBQ0g7O0FBRURFLHVCQUFtQixDQUFDQyxZQUFELEVBQWVDLFNBQVMsR0FBQyxJQUF6QixFQUErQkMsS0FBSyxHQUFDLENBQXJDLEVBQXdDQyxHQUFHLEdBQUMsSUFBNUMsRUFBaUQ7QUFFaEVGLGVBQVMsR0FBR0EsU0FBUyxHQUFDQSxTQUFELEdBQVdELFlBQVksQ0FBQ0wsTUFBN0M7O0FBQ0EsWUFBTVMsUUFBUSxHQUFHLEtBQUt6RyxDQUFMLENBQU8wRyxXQUFQLENBQW1CTCxZQUFuQixFQUFpQ0MsU0FBakMsQ0FBakI7O0FBQ0EsWUFBTUssT0FBTyxHQUFHN0YscUJBQVNDLE1BQVQsQ0FBZ0IwRixRQUFoQixFQUEwQkEsUUFBUSxDQUFDVCxNQUFuQyxDQUFoQjs7QUFDQSxVQUFHUSxHQUFHLEtBQUssSUFBWCxFQUFnQjtBQUNaQSxXQUFHLEdBQUdHLE9BQU8sQ0FBQ1gsTUFBZDtBQUNIOztBQUNELFVBQUlZLFNBQVMsR0FBR0wsS0FBaEI7QUFBQSxVQUF1Qk0sY0FBYyxHQUFHLENBQXhDO0FBQUEsVUFBMkNDLElBQUksR0FBRyxDQUFsRDtBQUNBekcsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ3FHLGVBQU8sRUFBRUEsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXWDtBQUFyQixPQUFaO0FBQ0EsWUFBTWUsY0FBYyxHQUFHO0FBQ2ZySCxlQUFPLEVBQUUsS0FBS2tELG9CQURDO0FBRWZvRSxZQUFJLEVBQUUsWUFBUztBQUNYLGNBQUlDLFlBQVksR0FBRyxFQUFuQjtBQUFBLGNBQXVCQyxXQUFXLEdBQUcsRUFBckM7QUFDQTdHLGlCQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDNkcsY0FBRSxFQUFFUixPQUFPLENBQUNDLFNBQUQsQ0FBWjtBQUF5QkE7QUFBekIsV0FBWjs7QUFDQSxlQUFJLElBQUksQ0FBQ3pFLFVBQUQsRUFBYUMsU0FBYixDQUFSLElBQW1DdUUsT0FBTyxDQUFDQyxTQUFELENBQTFDLEVBQXNEO0FBQ2xELGdCQUFJdEIsVUFBVSxHQUFHLE1BQU0sS0FBSzVGLE9BQUwsQ0FBYTZGLE9BQWIsQ0FBcUJwRCxVQUFyQixFQUFnQyxJQUFoQyxDQUF2QjtBQUNBLGdCQUFJcUQsU0FBUyxHQUFHLE1BQU0sS0FBSzlGLE9BQUwsQ0FBYTZGLE9BQWIsQ0FBcUJuRCxTQUFyQixFQUErQixJQUEvQixDQUF0QjtBQUNBNkUsd0JBQVksR0FBRyxDQUFDLEdBQUdBLFlBQUosRUFBa0IzQixVQUFVLENBQUNuRCxVQUFELENBQTVCLENBQWY7QUFDQStFLHVCQUFXLEdBQUcsQ0FBQyxHQUFHQSxXQUFKLEVBQWlCMUIsU0FBUyxDQUFDcEQsU0FBRCxDQUExQixDQUFkO0FBQ0g7O0FBQ0R3RSxtQkFBUyxJQUFJRSxJQUFiO0FBQ0FELHdCQUFjO0FBQ2QsaUJBQU8sQ0FBQ0ksWUFBRCxFQUFlQyxXQUFmLENBQVA7QUFDSCxTQWRjOztBQWVmLFVBQUVFLE1BQU0sQ0FBQ0MsUUFBVCxJQUFxQjtBQUNqQixpQkFBTVQsU0FBUyxHQUFHSixHQUFsQixFQUFzQjtBQUNsQixrQkFBTSxLQUFLUSxJQUFMLEVBQU47QUFDSDtBQUNKOztBQW5CYyxPQUF2QjtBQXFCQSxhQUFPRCxjQUFQO0FBQ0g7O0FBM0ttRDs7O0FBNEt2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbExjLFFBQU14SCxjQUFOLENBQW9CO0FBQy9CQyxlQUFXLENBQUM4SCxnQkFBRCxFQUFtQkMsa0JBQWtCLEdBQUMsSUFBdEMsRUFBMkM7QUFDbEQsVUFBR0Esa0JBQUgsRUFBc0I7QUFDbEJBLDBCQUFrQixDQUFDLEtBQUtELGdCQUFOLENBQWxCO0FBQ0g7O0FBQ0QsV0FBS3RHLGFBQUwsR0FBcUJzRyxnQkFBckI7QUFDQSxZQUFNO0FBQUNFLGtCQUFEO0FBQWF6RSxrQkFBYjtBQUF5QjBFO0FBQXpCLFVBQXVDLEtBQUt6RyxhQUFsRDtBQUNBLFdBQUswRyxRQUFMLEdBQWdCLENBQUNGLFVBQUQsRUFBYSxHQUFHekUsVUFBaEIsQ0FBaEI7QUFFQSxXQUFLeUUsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxXQUFLekUsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxXQUFLRSxRQUFMLEdBQWtCd0UsVUFBbEI7QUFDSDs7QUFFREUsV0FBTyxHQUFFO0FBQ0wsYUFBTyxLQUFLM0csYUFBWjtBQUNIOztBQUVELFVBQU1JLFlBQU4sQ0FBbUJDLE9BQU8sR0FBQyxJQUEzQixFQUFnQztBQUM1QixZQUFNdUcsS0FBSyxDQUFDLG9CQUFELENBQVg7QUFDSDs7QUFFRCxVQUFNQyxRQUFOLENBQWVuSSxPQUFmLEVBQXVCO0FBQ25CLFlBQU1rSSxLQUFLLENBQUMsb0JBQUQsQ0FBWDtBQUNIOztBQUVELFVBQU1FLFNBQU4sQ0FBZ0JwSSxPQUFoQixFQUF3QjtBQUNwQixZQUFNa0ksS0FBSyxDQUFDLG9CQUFELENBQVg7QUFDSDs7QUFFRCxVQUFNRyxXQUFOLENBQWtCckksT0FBbEIsRUFBMEI7QUFDdEIsWUFBTWtJLEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQ0g7O0FBRUR4Qix1QkFBbUIsQ0FBQ0UsU0FBUyxHQUFDLEVBQVgsRUFBYztBQUM3QixZQUFNc0IsS0FBSyxDQUFDLG9CQUFELENBQVg7QUFDSDs7QUFwQzhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FwQixRQUFNM0gsUUFBTixTQUF1QitILG1CQUF2QixDQUFtQztBQUM5Q3hJLGVBQVcsR0FBRTtBQUNUO0FBQ0g7O0FBRURzRCxvQkFBZ0IsQ0FBQ21GLE9BQUQsRUFBUztBQUNyQixZQUFNQyxDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLGFBQU9BLENBQUMsQ0FBQ0MsTUFBRixDQUFTLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxLQUFPRCxDQUFDLEdBQUNDLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCSixPQUF0QixDQUFQO0FBQ0g7O0FBQ0R6RCxzQkFBa0IsQ0FBQzhELEtBQUQsRUFBTztBQUNyQixZQUFNSixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLGFBQU9BLENBQUMsQ0FBQ0ssUUFBRixDQUFXTCxDQUFDLENBQUNoSCxHQUFiLEVBQWtCLENBQUNtSCxDQUFELEVBQUlsSCxHQUFKLEtBQVUsQ0FBQ0EsR0FBRCxFQUFNa0gsQ0FBTixDQUE1QixFQUFzQ0MsS0FBdEMsQ0FBUDtBQUNIOztBQUNEbkMscUJBQWlCLENBQUNtQyxLQUFELEVBQVFFLFVBQVIsRUFBbUI7QUFDaEMsWUFBTU4sQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxhQUFPQSxDQUFDLENBQUNPLE9BQUYsQ0FBVUQsVUFBVixFQUFzQkYsS0FBdEIsQ0FBUDtBQUNIOztBQWhCNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RsRCw2RDs7Ozs7Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L2RhdGFzZXRzLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCJdLCByb290W1wiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VJbWdEYXRhc2V0IH0gZnJvbSAnLi9iYXNlSW1nRGF0YXNldCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5pbXBvcnQgeyBJbmRleERCU3RvcmFnZSB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyBNZW1Eb3duQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmltcG9ydCB7IFByZXByb2Nlc3NpbmcgfSBmcm9tICdjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmcnO1xuaW1wb3J0IHsgU3RyZWFtLCBTYW1wbGluZyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNbmlzdERhdGFzZXQgZXh0ZW5kcyBCYXNlSW1nRGF0YXNldHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmUpe1xuICAgICAgICBzdXBlcihjb25maWd1cmUpO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBJbmRleERCU3RvcmFnZTtcbiAgICAgICAgdGhpcy5tZW1DYWNoZSA9IE1lbURvd25DYWNoZTtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nID0gbmV3IFByZXByb2Nlc3NpbmcoKTtcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hMYWJlbENodW5rKGNodW5rVXJsLCBzYXZlUGF0aCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHtjaHVua1VybCwgc2F2ZVBhdGh9KTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc3RvcmFnZS5mZXRjaEZpbGUoY2h1bmtVcmwsIHNhdmVQYXRoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaFNhbXBsZUNodW5rKGNodW5rVXJsLCBzYXZlUGF0aCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hQTkdGaWxlKGNodW5rVXJsLCBzYXZlUGF0aCk7XG4gICAgfVxuXG4gICAgc2VsZWN0RmV0Y2hlZENodW5rcyhudW1jaHVua3MsIHNlbGVjdEJ5PSdyYW5kb20nKXtcbiAgICAgICAgbGV0IGNodW5rSWR4cyA9IFNhbXBsaW5nLmNob2ljZSh0aGlzLmNvbmZpZ3VyYXRpb24uY2h1bmtMaXN0LCBudW1jaHVua3MpO1xuICAgICAgICByZXR1cm4gY2h1bmtJZHhzLm1hcChpZHg9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbYGRhdGEtY2h1bmstJHtpZHh9LnBuZ2AsYGxhYmVsLWNodW5rLSR7aWR4fWBdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaERhdGFzZXQoc2F2ZURpcj0nL21uaXN0LycsbnVtY2h1bmtzPTEsIHNlbGVjdEJ5PSdyYW5kb20nKXtcbiAgICAgICAgbGV0IHNlbGVjdGVkQ2h1bmtzID0gdGhpcy5zZWxlY3RGZXRjaGVkQ2h1bmtzKG51bWNodW5rcywgc2VsZWN0QnkpO1xuICAgICAgICBsZXQgW3NhbXBsZUNodW5rcywgbGFiZWxDaHVua3NdID0gdGhpcy5GLnVuemlwKHNlbGVjdGVkQ2h1bmtzKTtcbiAgICAgICAgY29uc29sZS5sb2coe3NlbGVjdGVkQ2h1bmtzLCBzYW1wbGVDaHVua3MsIGxhYmVsQ2h1bmtzfSk7XG4gICAgICAgIGNvbnN0IEZldGNoU2FtcGxlQ2h1bmsgPSBhc3luYyAoY2h1bmtOYW1lKT0+e1xuICAgICAgICAgICAgbGV0IGNodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBjaHVua05hbWU7XG4gICAgICAgICAgICBsZXQgc2F2ZVBhdGggPSBzYXZlRGlyICsgY2h1bmtOYW1lO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2NodW5rVXJsLCBzYXZlUGF0aH0pO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2hTYW1wbGVDaHVuayhjaHVua1VybCwgc2F2ZVBhdGgpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBGZXRjaExhYmVsQ2h1bmsgPSBhc3luYyAoY2h1bmtOYW1lKT0+e1xuICAgICAgICAgICAgbGV0IGNodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBjaHVua05hbWU7XG4gICAgICAgICAgICBsZXQgc2F2ZVBhdGggPSBzYXZlRGlyICsgY2h1bmtOYW1lO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2NodW5rVXJsLCBzYXZlUGF0aH0pO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2hMYWJlbENodW5rKGNodW5rVXJsLCBzYXZlUGF0aCk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBjaHVua0ZldGNoTGlzdCA9IHRoaXMuRi56aXAoc2FtcGxlQ2h1bmtzLCBsYWJlbENodW5rcyk7XG4gICAgICAgIHRoaXMuc2F2ZWRDaHVua3MgPSBbXTtcbiAgICAgICAgZm9yKGxldCBbc2FtcGxlQ2h1bmssIGxhYmVsQ2h1bmtdIG9mIGNodW5rRmV0Y2hMaXN0KXtcbiAgICAgICAgICAgIGxldCBzYW1wbGVQYXRoID0gYXdhaXQgRmV0Y2hTYW1wbGVDaHVuayhzYW1wbGVDaHVuayk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7c2FtcGxlUGF0aH0pO1xuICAgICAgICAgICAgbGV0IGxhYmVsUGF0aCA9IGF3YWl0IEZldGNoTGFiZWxDaHVuayhsYWJlbENodW5rKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtsYWJlbFBhdGh9KTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRDaHVua3MucHVzaChbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBbc2FtcGxlU3RvcmFnZSwgbGFiZWxTdG9yYWdlXSA9IHRoaXMuRi51bnppcCh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgdGhpcy5zYXZlZENodW5rU2FtcGxlcyA9IHNhbXBsZVN0b3JhZ2U7XG4gICAgICAgIHRoaXMuc2F2ZWRDaHVua0xhYmVscyA9IGxhYmVsU3RvcmFnZTtcbiAgICAgICAgcmV0dXJuIHtzYW1wbGVTdG9yYWdlLCBsYWJlbFN0b3JhZ2V9O1xuICAgIH1cbiAgICBcbiAgICBtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbShzYXZlRGlyPScvcHJlcHJvY2Vzc2luZy9tbmlzdC8nLHN0b3JlSW5NZW1vcnk9ZmFsc2Upe1xuICAgICAgICB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlID0gKHN0b3JlSW5NZW1vcnkpP3RoaXMubWVtQ2FjaGU6dGhpcy5zdG9yYWdlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgSW1hZ2VCdWZmZXJTaXplID0gdGhpcy5GLmdldEltZ0J1ZmZlclNpemUodGhpcy5zYW1wbGVTaXplKTtcbiAgICAgICAgY29uc3QgTGFiZWxCdWZmZXJTaXplID0gdGhpcy5udW1DbGFzcztcbiAgICAgICAgY29uc29sZS5sb2coe2ltYWdlQnVmZmVyU2l6ZTogSW1hZ2VCdWZmZXJTaXplLCBcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsQnVmZmVyU2l6ZTogTGFiZWxCdWZmZXJTaXplfSk7XG4gICAgICAgIGNvbnN0IFRyYW5zZm9ybUZuID0gKGNodW5rLCBjaHVua0VuY29kaW5nLCBhZnRlclRyYW5zZm9ybUZuKSA9PntcbiAgICAgICAgICAgIGNvbnN0IFRyYW5zZm9ybUFzeW5jID0gYXN5bmMgKCk9PntcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlQnVmZmVyID0gY2h1bmsuc2FtcGxlO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbEJ1ZmZlciA9IGNodW5rLmxhYmVsO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtzYW1wbGVCdWZmZXIsIGxhYmVsQnVmZmVyfSk7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0ZWRJbWdCdWZmZXIgPSBhd2FpdCB0aGlzLnByZXByb2Nlc3Npbmcuc3BsaXRJbWFnZUJ1ZmZlcihzYW1wbGVCdWZmZXIsIEltYWdlQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0ZWRMYWJlbEJ1ZmZlciA9IGF3YWl0IHRoaXMucHJlcHJvY2Vzc2luZy5zcGxpdEltYWdlQnVmZmVyKGxhYmVsQnVmZmVyLCBMYWJlbEJ1ZmZlclNpemUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiB7dHJhbnNmb3JtZWREYXRhOiB0aGlzLkYuemlwKHNwbGl0ZWRJbWdCdWZmZXIsIHNwbGl0ZWRMYWJlbEJ1ZmZlciksIGNodW5rSWR4OiBjaHVuay5pZHh9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFRyYW5zZm9ybUFzeW5jKGNodW5rKS50aGVuKHRyYW5zZm9ybWVkQ2h1bms9PntcbiAgICAgICAgICAgICAgICBhZnRlclRyYW5zZm9ybUZuKG51bGwsIHRyYW5zZm9ybWVkQ2h1bmspO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBXcml0ZUZuID0gKHRyYW5zZm9ybWVkQ2h1bmssIGNodW5rRW5jb2RpbmcsIGNhbGxiYWNrKSA9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgV3JpdGVBc3luYyA9IGFzeW5jICh0cmFuc2Zvcm1lZENodW5rKT0+e1xuICAgICAgICAgICAgICAgIGxldCBnZW5lcmF0b3IgPSB0aGlzLkYuZ2VuZXJhdG9yV2l0aEluZGV4KHRyYW5zZm9ybWVkQ2h1bmsudHJhbnNmb3JtZWREYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtJZHggID0gdHJhbnNmb3JtZWRDaHVuay5jaHVua0lkeDtcbiAgICAgICAgICAgICAgICBsZXQgc2FtcGxlUGF0aCAgPSBbXSwgbGFiZWxQYXRoID0gW107XG4gICAgICAgICAgICAgICAgZm9yKGxldCBbaWR4LCBbc2FtcGxlLCBsYWJlbF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtTYW1wbGVQYXRoID0gYXdhaXQgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXRJdGVtKHNhdmVEaXIgKyAnZGF0YS8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIHNhbXBsZSk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtMYWJlbFBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdsYWJlbC8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlUGF0aCA9IFsuLi5zYW1wbGVQYXRoLCBjaHVua1NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFBhdGggPSBbLi4ubGFiZWxQYXRoLCBjaHVua0xhYmVsUGF0aF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkYuemlwKHNhbXBsZVBhdGgsIGxhYmVsUGF0aCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBXcml0ZUFzeW5jKHRyYW5zZm9ybWVkQ2h1bmspLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gWy4uLnRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLCAuLi5yZXN1bHRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZHVwbGV4ZXIgPSBTdHJlYW0ubWFrZUR1cGxleChXcml0ZUZuKTtcbiAgICAgICAgbGV0IHRyYW5zZm9ybWVyID0gU3RyZWFtLm1ha2VUcmFuc2Zvcm0oVHJhbnNmb3JtRm4pO1xuICAgICAgICBsZXQgc3RyZWFtID0gZHVwbGV4ZXIucGlwZSh0cmFuc2Zvcm1lcikucGlwZShkdXBsZXhlcik7XG4gICAgICAgIHJldHVybiBzdHJlYW07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJlcHJvY2Vzc2luZ0RhdGFzZXQoc3RyZWFtKXtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIGxldCBnZW5lcmF0b3IgPSB0aGlzLkYuZ2VuZXJhdG9yV2l0aEluZGV4KHRoaXMuc2F2ZWRDaHVua3MpO1xuICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdXSBvZiBnZW5lcmF0b3Ipe1xuICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IHNhbXBsZSA9IHNhbXBsZUl0ZW1bc2FtcGxlUGF0aF07XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBsYWJlbEl0ZW1bbGFiZWxQYXRoXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtzYW1wbGUsIGxhYmVsfSk7XG4gICAgICAgICAgICBzdHJlYW0ucHVzaCh7aWR4LCBzYW1wbGUsIGxhYmVsfSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWFtLnB1c2gobnVsbCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgc3RyZWFtLm9uKCdmaW5pc2gnLCAoKT0+e1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBnZXRUcmFpblRlc3RTZXQodHJhaW5TaXplPW51bGwpe1xuICAgICAgICB0cmFpblNpemUgPSB0cmFpblNpemV8fHBhcnNlSW50KHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nLmxlbmd0aCowLjkpO1xuXG4gICAgICAgIGNvbnN0IFt0cmFpblNldCwgdGVzdFNldF0gPSB0aGlzLkYuc3BsaXRUcmFpblRlc3RTZXQodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIHRyYWluU2l6ZSk7XG4gICAgICAgIHJldHVybiBbdHJhaW5TZXQsIHRlc3RTZXRdO1xuICAgIH1cblxuICAgIG1ha2VTYW1wbGVHZW5lcmF0b3Ioc2FtcGxlSWR4U2V0LCBiYXRjaFNpemU9bnVsbCwgc3RhcnQ9MCwgZW5kPW51bGwpe1xuICAgICAgICBcbiAgICAgICAgYmF0Y2hTaXplID0gYmF0Y2hTaXplP2JhdGNoU2l6ZTpzYW1wbGVJZHhTZXQubGVuZ3RoO1xuICAgICAgICBjb25zdCBfYmF0Y2hlcyA9IHRoaXMuRi5oc3BsaXRFdmVyeShzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZSk7XG4gICAgICAgIGNvbnN0IGJhdGNoZXMgPSBTYW1wbGluZy5jaG9pY2UoX2JhdGNoZXMsIF9iYXRjaGVzLmxlbmd0aCk7XG4gICAgICAgIGlmKGVuZCA9PT0gbnVsbCl7XG4gICAgICAgICAgICBlbmQgPSBiYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gc3RhcnQsIGl0ZXJhdGlvbkNvdW50ID0gMCwgc3RlcCA9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKHtiYXRjaGVzOiBiYXRjaGVzWzBdLmxlbmd0aH0pO1xuICAgICAgICBjb25zdCBiYXRjaEdlbmVyYXRvciA9IHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlOiB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlLFxuICAgICAgICAgICAgICAgIG5leHQ6IGFzeW5jKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhdGNoU2FtcGxlcyA9IFtdLCBiYXRjaExhYmVscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7Ymw6IGJhdGNoZXNbbmV4dEluZGV4XSwgbmV4dEluZGV4fSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0gb2YgYmF0Y2hlc1tuZXh0SW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaFNhbXBsZXMgPSBbLi4uYmF0Y2hTYW1wbGVzLCBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoTGFiZWxzID0gWy4uLmJhdGNoTGFiZWxzLCBsYWJlbEl0ZW1bbGFiZWxQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4ICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc107XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKG5leHRJbmRleCA8IGVuZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBiYXRjaEdlbmVyYXRvcjtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHtkZWZhdWx0IGFzIEZ1bmN0aW9ufSBmcm9tICcuL2Z1bmN0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VJbWdEYXRhc2V0e1xuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXRDb25maWd1cmUsIGNvbmZpZ3VyZUFzc2VydGlvbj1udWxsKXtcbiAgICAgICAgaWYoY29uZmlndXJlQXNzZXJ0aW9uKXtcbiAgICAgICAgICAgIGNvbmZpZ3VyZUFzc2VydGlvbih0aGlzLmRhdGFzZXRDb25maWd1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGRhdGFzZXRDb25maWd1cmU7XG4gICAgICAgIGNvbnN0IHtudW1TYW1wbGVzLCBzYW1wbGVTaXplLCBudW1DbGFzc2VzfSA9IHRoaXMuY29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5kYXRhU2l6ZSA9IFtudW1TYW1wbGVzLCAuLi5zYW1wbGVTaXplXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubnVtU2FtcGxlcyA9IG51bVNhbXBsZXM7XG4gICAgICAgIHRoaXMuc2FtcGxlU2l6ZSA9IHNhbXBsZVNpemU7XG4gICAgICAgIHRoaXMubnVtQ2xhc3MgICA9IG51bUNsYXNzZXM7XG4gICAgfVxuICAgIFxuICAgIHN1bW1hcnkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbjtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgZmV0Y2hEYXRhc2V0KHNhdmVEaXI9bnVsbCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkRGF0YShzdG9yYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRMYWJlbChzdG9yYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH0gICAgXG4gICAgXG4gICAgYXN5bmMgbG9hZERhdGFzZXQoc3RvcmFnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBtYWtlU2FtcGxlR2VuZXJhdG9yKGJhdGNoU2l6ZT0xMCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHtGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb259IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbiBleHRlbmRzIEJhc2VGdW5jdGlvbntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBcbiAgICBnZXRJbWdCdWZmZXJTaXplKGltZ1NpemUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoKHMsZCk9PnMqZCwxLGltZ1NpemUpO1xuICAgIH1cbiAgICBnZW5lcmF0b3JXaXRoSW5kZXgoaXRlbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5hZGRJbmRleChSLm1hcCkoKGQsIGlkeCk9PltpZHgsIGRdLCBpdGVtcyk7XG4gICAgfVxuICAgIHNwbGl0VHJhaW5UZXN0U2V0KGl0ZW1zLCBzcGxpdEluZGV4KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuc3BsaXRBdChzcGxpdEluZGV4LCBpdGVtcyk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9