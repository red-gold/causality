(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.preprocessing"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.preprocessing", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/datasets"] = factory(require("causal-net.core"), require("causal-net.preprocessing"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/datasets"] = factory(root["causal-net.core"], root["causal-net.preprocessing"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_preprocessing__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./baseImgDataset */ "./src/baseImgDataset.js"), __webpack_require__(/*! causal-net.storage */ "causal-net.storage"), __webpack_require__(/*! causal-net.preprocessing */ "causal-net.preprocessing"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _baseImgDataset, _causalNet, _causalNet2, _causalNet3) {
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
      this.preprocessing = new _causalNet2.Preprocessing();
    }

    async fetchLabelChunk(chunkUrl, savePath) {
      return await this.storage.fetchBuffer(chunkUrl, savePath);
    }

    async fetchSampleChunk(chunkUrl, savePath) {
      return await this.storage.fetchPNGFile(chunkUrl, savePath);
    }

    async fetchDataset(saveDir = '/mnist/', numchunks = 1, selectBy = 'random') {
      let dataChunks = ['data-chunk-0.png'];
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

      let chunkFetchList = this.F.zip(dataChunks, labelChunks);
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
      this.preProcessingStorage = storeInMemory ? this.memeCache : this.storage;
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

      let duplexer = _causalNet3.Stream.makeDuplex(WriteFn);

      let transformer = _causalNet3.Stream.makeTransform(TransformFn);

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

    makeSampleGenerator(trainSet, batchSize = 10, start = 0, end = null) {
      const batches = this.F.hsplitEvery(trainSet, batchSize);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9NTklTVC5JbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvYmFzZUltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIk1uaXN0RGF0YXNldCIsIkJhc2VJbWdEYXRhc2V0IiwiY29uc3RydWN0b3IiLCJjb25maWd1cmUiLCJzdG9yYWdlIiwiSW5kZXhEQlN0b3JhZ2UiLCJwcmVwcm9jZXNzaW5nIiwiUHJlcHJvY2Vzc2luZyIsImZldGNoTGFiZWxDaHVuayIsImNodW5rVXJsIiwic2F2ZVBhdGgiLCJmZXRjaEJ1ZmZlciIsImZldGNoU2FtcGxlQ2h1bmsiLCJmZXRjaFBOR0ZpbGUiLCJmZXRjaERhdGFzZXQiLCJzYXZlRGlyIiwibnVtY2h1bmtzIiwic2VsZWN0QnkiLCJkYXRhQ2h1bmtzIiwibGFiZWxDaHVua3MiLCJGZXRjaFNhbXBsZUNodW5rIiwiY2h1bmtOYW1lIiwiQ2h1bmtVcmwiLCJjb25maWd1cmF0aW9uIiwiZGF0YXNldFVybCIsIlNhdmVQYXRoIiwiY29uc29sZSIsImxvZyIsIkZldGNoTGFiZWxDaHVuayIsImNodW5rRmV0Y2hMaXN0IiwiRiIsInppcCIsInNhdmVkQ2h1bmtzIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInNhbXBsZUNodW5rIiwibGFiZWxDaHVuayIsInNhbXBsZVBhdGgiLCJsYWJlbFBhdGgiLCJzYW1wbGVTdG9yYWdlIiwibGFiZWxTdG9yYWdlIiwidW56aXAiLCJzYXZlZENodW5rU2FtcGxlcyIsInNhdmVkQ2h1bmtMYWJlbHMiLCJtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbSIsInN0b3JlSW5NZW1vcnkiLCJwcmVQcm9jZXNzaW5nU3RvcmFnZSIsIm1lbWVDYWNoZSIsIkltYWdlQnVmZmVyU2l6ZSIsImdldEltZ0J1ZmZlclNpemUiLCJzYW1wbGVTaXplIiwiTGFiZWxCdWZmZXJTaXplIiwibnVtQ2xhc3MiLCJpbWFnZUJ1ZmZlclNpemUiLCJsYWJlbEJ1ZmZlclNpemUiLCJUcmFuc2Zvcm1GbiIsImNodW5rIiwiY2h1bmtFbmNvZGluZyIsImFmdGVyVHJhbnNmb3JtRm4iLCJUcmFuc2Zvcm1Bc3luYyIsInNhbXBsZUJ1ZmZlciIsInNhbXBsZSIsImxhYmVsQnVmZmVyIiwibGFiZWwiLCJzcGxpdGVkSW1nQnVmZmVyIiwic3BsaXRJbWFnZUJ1ZmZlciIsInNwbGl0ZWRMYWJlbEJ1ZmZlciIsInRyYW5zZm9ybWVkRGF0YSIsImNodW5rSWR4IiwiaWR4IiwidGhlbiIsInRyYW5zZm9ybWVkQ2h1bmsiLCJXcml0ZUZuIiwiY2FsbGJhY2siLCJXcml0ZUFzeW5jIiwiZ2VuZXJhdG9yIiwiZ2VuZXJhdG9yV2l0aEluZGV4IiwiY2h1bmtTYW1wbGVQYXRoIiwic2V0SXRlbSIsImNodW5rTGFiZWxQYXRoIiwicmVzdWx0Iiwic2F2ZWRQcmVwcm9jZXNzaW5nIiwiZHVwbGV4ZXIiLCJTdHJlYW0iLCJtYWtlRHVwbGV4IiwidHJhbnNmb3JtZXIiLCJtYWtlVHJhbnNmb3JtIiwic3RyZWFtIiwicGlwZSIsInByZXByb2Nlc3NpbmdEYXRhc2V0Iiwic2FtcGxlSXRlbSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJwdXNoIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uIiwiZ2V0VHJhaW5UZXN0U2V0IiwidHJhaW5TaXplIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJ0cmFpblNldCIsInRlc3RTZXQiLCJzcGxpdFRyYWluVGVzdFNldCIsIm1ha2VTYW1wbGVHZW5lcmF0b3IiLCJiYXRjaFNpemUiLCJzdGFydCIsImVuZCIsImJhdGNoZXMiLCJoc3BsaXRFdmVyeSIsIm5leHRJbmRleCIsIml0ZXJhdGlvbkNvdW50Iiwic3RlcCIsImJhdGNoR2VuZXJhdG9yIiwibmV4dCIsImJhdGNoU2FtcGxlcyIsImJhdGNoTGFiZWxzIiwiYmwiLCJTeW1ib2wiLCJpdGVyYXRvciIsImRhdGFzZXRDb25maWd1cmUiLCJjb25maWd1cmVBc3NlcnRpb24iLCJudW1TYW1wbGVzIiwibnVtQ2xhc3NlcyIsImRhdGFTaXplIiwiRnVuY3Rpb24iLCJzdW1tYXJ5IiwiRXJyb3IiLCJsb2FkRGF0YSIsImxvYWRMYWJlbCIsImxvYWREYXRhc2V0IiwiQmFzZUZ1bmN0aW9uIiwiZm9yRWFjaFByb21pc2UiLCJmbiIsImRhdGEiLCJSIiwic3BsaXRCdWZmZXIiLCJidWZmZXIiLCJzcGxpdFNpemUiLCJkYXRhc2V0IiwiVW56aXAiLCJ1eiIsImRhdHVtIiwicmVkdWNlIiwiaW1nU2l6ZSIsInMiLCJkIiwiaXRlbXMiLCJhZGRJbmRleCIsInNwbGl0SW5kZXgiLCJzcGxpdEF0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGUsUUFBTUEsWUFBTixTQUEyQkMsdUJBQTNCLENBQXlDO0FBRXBEQyxlQUFXLENBQUNDLFNBQUQsRUFBVztBQUNsQixZQUFNQSxTQUFOO0FBQ0EsV0FBS0MsT0FBTCxHQUFlQyx5QkFBZjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsSUFBSUMseUJBQUosRUFBckI7QUFDSDs7QUFFRCxVQUFNQyxlQUFOLENBQXNCQyxRQUF0QixFQUFnQ0MsUUFBaEMsRUFBeUM7QUFDckMsYUFBTyxNQUFNLEtBQUtOLE9BQUwsQ0FBYU8sV0FBYixDQUF5QkYsUUFBekIsRUFBbUNDLFFBQW5DLENBQWI7QUFDSDs7QUFFRCxVQUFNRSxnQkFBTixDQUF1QkgsUUFBdkIsRUFBaUNDLFFBQWpDLEVBQTBDO0FBQ3RDLGFBQU8sTUFBTSxLQUFLTixPQUFMLENBQWFTLFlBQWIsQ0FBMEJKLFFBQTFCLEVBQW9DQyxRQUFwQyxDQUFiO0FBQ0g7O0FBRUQsVUFBTUksWUFBTixDQUFtQkMsT0FBTyxHQUFDLFNBQTNCLEVBQXFDQyxTQUFTLEdBQUMsQ0FBL0MsRUFBa0RDLFFBQVEsR0FBQyxRQUEzRCxFQUFvRTtBQUNoRSxVQUFJQyxVQUFVLEdBQUcsQ0FBQyxrQkFBRCxDQUFqQjtBQUNBLFVBQUlDLFdBQVcsR0FBRyxDQUFDLGVBQUQsQ0FBbEI7O0FBQ0EsWUFBTUMsZ0JBQWdCLEdBQUcsTUFBT0MsU0FBUCxJQUFtQjtBQUN4QyxjQUFNQyxRQUFRLEdBQUcsS0FBS0MsYUFBTCxDQUFtQkMsVUFBbkIsR0FBZ0NILFNBQWpEO0FBQ0EsY0FBTUksUUFBUSxHQUFHVixPQUFPLEdBQUdNLFNBQTNCO0FBQ0FLLGVBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNMLGtCQUFEO0FBQVdHO0FBQVgsU0FBWjtBQUNBLGVBQU8sTUFBTSxLQUFLYixnQkFBTCxDQUFzQlUsUUFBdEIsRUFBZ0NHLFFBQWhDLENBQWI7QUFDSCxPQUxEOztBQU1BLFlBQU1HLGVBQWUsR0FBRyxNQUFPUCxTQUFQLElBQW1CO0FBQ3ZDLFlBQUlaLFFBQVEsR0FBRyxLQUFLYyxhQUFMLENBQW1CQyxVQUFuQixHQUFnQ0gsU0FBL0M7QUFDQSxZQUFJWCxRQUFRLEdBQUdLLE9BQU8sR0FBR00sU0FBekI7QUFDQUssZUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ2xCLGtCQUFEO0FBQVdDO0FBQVgsU0FBWjtBQUNBLGVBQU8sTUFBTSxLQUFLRixlQUFMLENBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsQ0FBYjtBQUNILE9BTEQ7O0FBTUEsVUFBSW1CLGNBQWMsR0FBRyxLQUFLQyxDQUFMLENBQU9DLEdBQVAsQ0FBV2IsVUFBWCxFQUF1QkMsV0FBdkIsQ0FBckI7QUFDQSxXQUFLYSxXQUFMLEdBQW1CLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUNiTCxjQUFjLENBQUNNLEdBQWYsQ0FDSSxPQUFPLENBQUNDLFdBQUQsRUFBY0MsVUFBZCxDQUFQLEtBQW1DO0FBQy9CLFlBQUlDLFVBQVUsR0FBSSxNQUFNbEIsZ0JBQWdCLENBQUNnQixXQUFELENBQXhDO0FBQ0EsWUFBSUcsU0FBUyxHQUFHLE1BQU1YLGVBQWUsQ0FBQ1MsVUFBRCxDQUFyQztBQUNBLGVBQU8sQ0FBQ0MsVUFBRCxFQUFhQyxTQUFiLENBQVA7QUFDSCxPQUxMLENBRGEsQ0FBekI7QUFRQSxVQUFJLENBQUNDLGFBQUQsRUFBZ0JDLFlBQWhCLElBQWdDLEtBQUtYLENBQUwsQ0FBT1ksS0FBUCxDQUFhLEtBQUtWLFdBQWxCLENBQXBDO0FBQ0EsV0FBS1csaUJBQUwsR0FBeUJILGFBQXpCO0FBQ0EsV0FBS0ksZ0JBQUwsR0FBd0JILFlBQXhCO0FBQ0EsYUFBTztBQUFDRCxxQkFBRDtBQUFnQkM7QUFBaEIsT0FBUDtBQUNIOztBQUVESSwyQkFBdUIsQ0FBQzlCLE9BQU8sR0FBQyx1QkFBVCxFQUFpQytCLGFBQWEsR0FBQyxLQUEvQyxFQUFxRDtBQUN4RSxXQUFLQyxvQkFBTCxHQUE2QkQsYUFBRCxHQUFnQixLQUFLRSxTQUFyQixHQUErQixLQUFLNUMsT0FBaEU7QUFFQSxZQUFNNkMsZUFBZSxHQUFHLEtBQUtuQixDQUFMLENBQU9vQixnQkFBUCxDQUF3QixLQUFLQyxVQUE3QixDQUF4QjtBQUNBLFlBQU1DLGVBQWUsR0FBRyxLQUFLQyxRQUE3QjtBQUNBM0IsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQzJCLHVCQUFlLEVBQUVMLGVBQWxCO0FBQ0NNLHVCQUFlLEVBQUVIO0FBRGxCLE9BQVo7O0FBRUEsWUFBTUksV0FBVyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsYUFBUixFQUF1QkMsZ0JBQXZCLEtBQTJDO0FBQzNELGNBQU1DLGNBQWMsR0FBRyxZQUFVO0FBQzdCLGNBQUlDLFlBQVksR0FBR0osS0FBSyxDQUFDSyxNQUF6QjtBQUNBLGNBQUlDLFdBQVcsR0FBR04sS0FBSyxDQUFDTyxLQUF4QjtBQUNBdEMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNrQyx3QkFBRDtBQUFlRTtBQUFmLFdBQVo7QUFDQSxjQUFJRSxnQkFBZ0IsR0FBRyxNQUFNLEtBQUszRCxhQUFMLENBQW1CNEQsZ0JBQW5CLENBQW9DTCxZQUFwQyxFQUFrRFosZUFBbEQsQ0FBN0I7QUFDQSxjQUFJa0Isa0JBQWtCLEdBQUcsTUFBTSxLQUFLN0QsYUFBTCxDQUFtQjRELGdCQUFuQixDQUFvQ0gsV0FBcEMsRUFBaURYLGVBQWpELENBQS9CO0FBRUEsaUJBQU87QUFBQ2dCLDJCQUFlLEVBQUUsS0FBS3RDLENBQUwsQ0FBT0MsR0FBUCxDQUFXa0MsZ0JBQVgsRUFBNkJFLGtCQUE3QixDQUFsQjtBQUFvRUUsb0JBQVEsRUFBRVosS0FBSyxDQUFDYTtBQUFwRixXQUFQO0FBQ0gsU0FSRDs7QUFTQVYsc0JBQWMsQ0FBQ0gsS0FBRCxDQUFkLENBQXNCYyxJQUF0QixDQUEyQkMsZ0JBQWdCLElBQUU7QUFDekNiLDBCQUFnQixDQUFDLElBQUQsRUFBT2EsZ0JBQVAsQ0FBaEI7QUFDSCxTQUZEO0FBR0gsT0FiRDs7QUFlQSxZQUFNQyxPQUFPLEdBQUcsQ0FBQ0QsZ0JBQUQsRUFBbUJkLGFBQW5CLEVBQWtDZ0IsUUFBbEMsS0FBOEM7QUFFMUQsY0FBTUMsVUFBVSxHQUFHLE1BQU9ILGdCQUFQLElBQTBCO0FBQ3pDLGNBQUlJLFNBQVMsR0FBRyxLQUFLOUMsQ0FBTCxDQUFPK0Msa0JBQVAsQ0FBMEJMLGdCQUFnQixDQUFDSixlQUEzQyxDQUFoQjtBQUNBLGNBQUlDLFFBQVEsR0FBSUcsZ0JBQWdCLENBQUNILFFBQWpDO0FBQ0EsY0FBSS9CLFVBQVUsR0FBSSxFQUFsQjtBQUFBLGNBQXNCQyxTQUFTLEdBQUcsRUFBbEM7O0FBQ0EsZUFBSSxJQUFJLENBQUMrQixHQUFELEVBQU0sQ0FBQ1IsTUFBRCxFQUFTRSxLQUFULENBQU4sQ0FBUixJQUFrQ1ksU0FBbEMsRUFBNEM7QUFFeEMsZ0JBQUlFLGVBQWUsR0FBRyxNQUFNLEtBQUsvQixvQkFBTCxDQUNuQmdDLE9BRG1CLENBQ1hoRSxPQUFPLEdBQUcsT0FBVixHQUFvQnNELFFBQXBCLEdBQStCLEdBQS9CLEdBQXFDQyxHQUFyQyxHQUEyQyxHQURoQyxFQUNxQ1IsTUFEckMsQ0FBNUI7QUFFQSxnQkFBSWtCLGNBQWMsR0FBRyxNQUFNLEtBQUtqQyxvQkFBTCxDQUNsQmdDLE9BRGtCLENBQ1ZoRSxPQUFPLEdBQUcsUUFBVixHQUFxQnNELFFBQXJCLEdBQWdDLEdBQWhDLEdBQXNDQyxHQUF0QyxHQUE0QyxHQURsQyxFQUN1Q04sS0FEdkMsQ0FBM0I7QUFFQTFCLHNCQUFVLEdBQUcsQ0FBQyxHQUFHQSxVQUFKLEVBQWdCd0MsZUFBaEIsQ0FBYjtBQUNBdkMscUJBQVMsR0FBRyxDQUFDLEdBQUdBLFNBQUosRUFBZXlDLGNBQWYsQ0FBWjtBQUNIOztBQUNELGlCQUFPLEtBQUtsRCxDQUFMLENBQU9DLEdBQVAsQ0FBV08sVUFBWCxFQUF1QkMsU0FBdkIsQ0FBUDtBQUNILFNBZEQ7O0FBZ0JBb0Msa0JBQVUsQ0FBQ0gsZ0JBQUQsQ0FBVixDQUE2QkQsSUFBN0IsQ0FBbUNVLE1BQUQsSUFBVTtBQUN4QyxjQUFHLEtBQUtDLGtCQUFSLEVBQTJCO0FBQ3ZCLGlCQUFLQSxrQkFBTCxHQUEwQixDQUFDLEdBQUcsS0FBS0Esa0JBQVQsRUFBNkIsR0FBR0QsTUFBaEMsQ0FBMUI7QUFDSCxXQUZELE1BR0k7QUFDQSxpQkFBS0Msa0JBQUwsR0FBMEJELE1BQTFCO0FBQ0g7O0FBQ0RQLGtCQUFRO0FBQ1gsU0FSRDtBQVNILE9BM0JEOztBQTRCQSxVQUFJUyxRQUFRLEdBQUdDLG1CQUFPQyxVQUFQLENBQWtCWixPQUFsQixDQUFmOztBQUNBLFVBQUlhLFdBQVcsR0FBR0YsbUJBQU9HLGFBQVAsQ0FBcUIvQixXQUFyQixDQUFsQjs7QUFDQSxVQUFJZ0MsTUFBTSxHQUFHTCxRQUFRLENBQUNNLElBQVQsQ0FBY0gsV0FBZCxFQUEyQkcsSUFBM0IsQ0FBZ0NOLFFBQWhDLENBQWI7QUFDQSxhQUFPSyxNQUFQO0FBQ0g7O0FBRUQsVUFBTUUsb0JBQU4sQ0FBMkJGLE1BQTNCLEVBQWtDO0FBQzlCOUQsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS0ssV0FBakI7QUFDQSxVQUFJNEMsU0FBUyxHQUFHLEtBQUs5QyxDQUFMLENBQU8rQyxrQkFBUCxDQUEwQixLQUFLN0MsV0FBL0IsQ0FBaEI7O0FBQ0EsV0FBSSxJQUFJLENBQUNzQyxHQUFELEVBQU0sQ0FBQ2hDLFVBQUQsRUFBYUMsU0FBYixDQUFOLENBQVIsSUFBMENxQyxTQUExQyxFQUFvRDtBQUNoRCxZQUFJZSxVQUFVLEdBQUcsTUFBTSxLQUFLdkYsT0FBTCxDQUFhd0YsT0FBYixDQUFxQnRELFVBQXJCLEVBQWlDLElBQWpDLENBQXZCO0FBQ0EsWUFBSXVELFNBQVMsR0FBRyxNQUFNLEtBQUt6RixPQUFMLENBQWF3RixPQUFiLENBQXFCckQsU0FBckIsRUFBZ0MsSUFBaEMsQ0FBdEI7QUFDQSxZQUFJdUIsTUFBTSxHQUFHNkIsVUFBVSxDQUFDckQsVUFBRCxDQUF2QjtBQUNBLFlBQUkwQixLQUFLLEdBQUc2QixTQUFTLENBQUN0RCxTQUFELENBQXJCO0FBQ0FiLGVBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNtQyxnQkFBRDtBQUFTRTtBQUFULFNBQVo7QUFDQXdCLGNBQU0sQ0FBQ00sSUFBUCxDQUFZO0FBQUN4QixhQUFEO0FBQU1SLGdCQUFOO0FBQWNFO0FBQWQsU0FBWjtBQUNIOztBQUNEd0IsWUFBTSxDQUFDTSxJQUFQLENBQVksSUFBWjtBQUNBLGFBQU8sSUFBSTdELE9BQUosQ0FBWSxDQUFDOEQsT0FBRCxFQUFVQyxNQUFWLEtBQW1CO0FBQ2xDUixjQUFNLENBQUNTLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLE1BQUk7QUFDcEJGLGlCQUFPLENBQUMsS0FBS2Isa0JBQU4sQ0FBUDtBQUNILFNBRkQ7QUFHSCxPQUpNLENBQVA7QUFLSDs7QUFFRGdCLG1CQUFlLENBQUNDLFNBQVMsR0FBQyxJQUFYLEVBQWdCO0FBQzNCQSxlQUFTLEdBQUdBLFNBQVMsSUFBRUMsUUFBUSxDQUFDLEtBQUtsQixrQkFBTCxDQUF3Qm1CLE1BQXhCLEdBQStCLEdBQWhDLENBQS9CO0FBRUEsWUFBTSxDQUFDQyxRQUFELEVBQVdDLE9BQVgsSUFBc0IsS0FBS3pFLENBQUwsQ0FBTzBFLGlCQUFQLENBQXlCLEtBQUt0QixrQkFBOUIsRUFBa0RpQixTQUFsRCxDQUE1QjtBQUNBLGFBQU8sQ0FBQ0csUUFBRCxFQUFXQyxPQUFYLENBQVA7QUFDSDs7QUFFREUsdUJBQW1CLENBQUNILFFBQUQsRUFBV0ksU0FBUyxHQUFDLEVBQXJCLEVBQXlCQyxLQUFLLEdBQUMsQ0FBL0IsRUFBa0NDLEdBQUcsR0FBQyxJQUF0QyxFQUEyQztBQUMxRCxZQUFNQyxPQUFPLEdBQUcsS0FBSy9FLENBQUwsQ0FBT2dGLFdBQVAsQ0FBbUJSLFFBQW5CLEVBQTZCSSxTQUE3QixDQUFoQjs7QUFDQSxVQUFHRSxHQUFHLEtBQUssSUFBWCxFQUFnQjtBQUNaQSxXQUFHLEdBQUdDLE9BQU8sQ0FBQ1IsTUFBZDtBQUNIOztBQUNELFVBQUlVLFNBQVMsR0FBR0osS0FBaEI7QUFBQSxVQUF1QkssY0FBYyxHQUFHLENBQXhDO0FBQUEsVUFBMkNDLElBQUksR0FBRyxDQUFsRDtBQUNBdkYsYUFBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ2tGLGVBQU8sRUFBRUEsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXUjtBQUFyQixPQUFaO0FBQ0EsWUFBTWEsY0FBYyxHQUFHO0FBQ2Y5RyxlQUFPLEVBQUUsS0FBSzJDLG9CQURDO0FBRWZvRSxZQUFJLEVBQUUsWUFBUztBQUNYLGNBQUlDLFlBQVksR0FBRyxFQUFuQjtBQUFBLGNBQXVCQyxXQUFXLEdBQUcsRUFBckM7QUFDQTNGLGlCQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDMkYsY0FBRSxFQUFFVCxPQUFPLENBQUNFLFNBQUQsQ0FBWjtBQUF5QkE7QUFBekIsV0FBWjs7QUFDQSxlQUFJLElBQUksQ0FBQ3pFLFVBQUQsRUFBYUMsU0FBYixDQUFSLElBQW1Dc0UsT0FBTyxDQUFDRSxTQUFELENBQTFDLEVBQXNEO0FBQ2xELGdCQUFJcEIsVUFBVSxHQUFHLE1BQU0sS0FBS3ZGLE9BQUwsQ0FBYXdGLE9BQWIsQ0FBcUJ0RCxVQUFyQixFQUFnQyxJQUFoQyxDQUF2QjtBQUNBLGdCQUFJdUQsU0FBUyxHQUFHLE1BQU0sS0FBS3pGLE9BQUwsQ0FBYXdGLE9BQWIsQ0FBcUJyRCxTQUFyQixFQUErQixJQUEvQixDQUF0QjtBQUNBNkUsd0JBQVksR0FBRyxDQUFDLEdBQUdBLFlBQUosRUFBa0J6QixVQUFVLENBQUNyRCxVQUFELENBQTVCLENBQWY7QUFDQStFLHVCQUFXLEdBQUcsQ0FBQyxHQUFHQSxXQUFKLEVBQWlCeEIsU0FBUyxDQUFDdEQsU0FBRCxDQUExQixDQUFkO0FBQ0g7O0FBQ0R3RSxtQkFBUyxJQUFJRSxJQUFiO0FBQ0FELHdCQUFjO0FBQ2QsaUJBQU8sQ0FBQ0ksWUFBRCxFQUFlQyxXQUFmLENBQVA7QUFDSCxTQWRjOztBQWVmLFVBQUVFLE1BQU0sQ0FBQ0MsUUFBVCxJQUFxQjtBQUNqQixpQkFBTVQsU0FBUyxHQUFHSCxHQUFsQixFQUFzQjtBQUNsQixrQkFBTSxLQUFLTyxJQUFMLEVBQU47QUFDSDtBQUNKOztBQW5CYyxPQUF2QjtBQXFCQSxhQUFPRCxjQUFQO0FBQ0g7O0FBN0ptRDs7O0FBOEp2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtjLFFBQU1qSCxjQUFOLENBQW9CO0FBQy9CQyxlQUFXLENBQUN1SCxnQkFBRCxFQUFtQkMsa0JBQWtCLEdBQUMsSUFBdEMsRUFBMkM7QUFDbEQsVUFBR0Esa0JBQUgsRUFBc0I7QUFDbEJBLDBCQUFrQixDQUFDLEtBQUtELGdCQUFOLENBQWxCO0FBQ0g7O0FBQ0QsV0FBS2xHLGFBQUwsR0FBcUJrRyxnQkFBckI7QUFDQSxZQUFNO0FBQUNFLGtCQUFEO0FBQWF4RSxrQkFBYjtBQUF5QnlFO0FBQXpCLFVBQXVDLEtBQUtyRyxhQUFsRDtBQUNBLFdBQUtzRyxRQUFMLEdBQWdCLENBQUNGLFVBQUQsRUFBYSxHQUFHeEUsVUFBaEIsQ0FBaEI7QUFFQSxXQUFLd0UsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxXQUFLeEUsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxXQUFLRSxRQUFMLEdBQWtCdUUsVUFBbEI7QUFDQSxXQUFLOUYsQ0FBTCxHQUFTLElBQUlnRyxpQkFBSixFQUFUO0FBQ0g7O0FBRURDLFdBQU8sR0FBRTtBQUNMLGFBQU8sS0FBS3hHLGFBQVo7QUFDSDs7QUFFRCxVQUFNVCxZQUFOLENBQW1CQyxPQUFPLEdBQUMsSUFBM0IsRUFBZ0M7QUFDNUIsWUFBTWlILEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQ0g7O0FBRUQsVUFBTUMsUUFBTixDQUFlN0gsT0FBZixFQUF1QjtBQUNuQixZQUFNNEgsS0FBSyxDQUFDLG9CQUFELENBQVg7QUFDSDs7QUFFRCxVQUFNRSxTQUFOLENBQWdCOUgsT0FBaEIsRUFBd0I7QUFDcEIsWUFBTTRILEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQ0g7O0FBRUQsVUFBTUcsV0FBTixDQUFrQi9ILE9BQWxCLEVBQTBCO0FBQ3RCLFlBQU00SCxLQUFLLENBQUMsb0JBQUQsQ0FBWDtBQUNIOztBQUVEdkIsdUJBQW1CLENBQUNDLFNBQVMsR0FBQyxFQUFYLEVBQWM7QUFDN0IsWUFBTXNCLEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQ0g7O0FBckM4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcEIsUUFBTUYsUUFBTixTQUF1Qk0sbUJBQXZCLENBQW1DO0FBQzlDbEksZUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFDRCxVQUFNbUksY0FBTixDQUFxQkMsRUFBckIsRUFBd0IsQ0FFdkI7O0FBQ0R2RyxPQUFHLENBQUN3RyxJQUFELEVBQU92RSxLQUFQLEVBQWE7QUFDWixZQUFNd0UsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxhQUFPQSxDQUFDLENBQUN6RyxHQUFGLENBQU13RyxJQUFOLEVBQVl2RSxLQUFaLENBQVA7QUFDSDs7QUFDRHlFLGVBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULEVBQW1CLENBRTdCOztBQUNEakcsU0FBSyxDQUFDa0csT0FBRCxFQUFTO0FBQ1YsWUFBTUosQ0FBQyxHQUFHLEtBQUtBLENBQWY7O0FBQ0EsWUFBTUssS0FBSyxHQUFHLENBQUNDLEVBQUQsRUFBS0MsS0FBTCxLQUFhO0FBQ3ZCRCxVQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBQyxHQUFHQSxFQUFFLENBQUMsQ0FBRCxDQUFOLEVBQVdDLEtBQUssQ0FBQyxDQUFELENBQWhCLENBQVI7QUFDQUQsVUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQUMsR0FBR0EsRUFBRSxDQUFDLENBQUQsQ0FBTixFQUFXQyxLQUFLLENBQUMsQ0FBRCxDQUFoQixDQUFSO0FBQ0EsZUFBT0QsRUFBUDtBQUNILE9BSkQ7O0FBS0EsYUFBT04sQ0FBQyxDQUFDUSxNQUFGLENBQVNILEtBQVQsRUFBZSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWYsRUFBd0JELE9BQXhCLENBQVA7QUFDSDs7QUFDRDFGLG9CQUFnQixDQUFDK0YsT0FBRCxFQUFTO0FBQ3JCLFlBQU1ULENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsYUFBT0EsQ0FBQyxDQUFDUSxNQUFGLENBQVMsQ0FBQ0UsQ0FBRCxFQUFHQyxDQUFILEtBQU9ELENBQUMsR0FBQ0MsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0JGLE9BQXRCLENBQVA7QUFDSDs7QUFDRHBFLHNCQUFrQixDQUFDdUUsS0FBRCxFQUFPO0FBQ3JCLFlBQU1aLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsYUFBT0EsQ0FBQyxDQUFDYSxRQUFGLENBQVdiLENBQUMsQ0FBQ3JHLEdBQWIsRUFBa0IsQ0FBQ2dILENBQUQsRUFBSTdFLEdBQUosS0FBVSxDQUFDQSxHQUFELEVBQU02RSxDQUFOLENBQTVCLEVBQXNDQyxLQUF0QyxDQUFQO0FBQ0g7O0FBQ0Q1QyxxQkFBaUIsQ0FBQzRDLEtBQUQsRUFBUUUsVUFBUixFQUFtQjtBQUNoQyxZQUFNZCxDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLGFBQU9BLENBQUMsQ0FBQ2UsT0FBRixDQUFVRCxVQUFWLEVBQXNCRixLQUF0QixDQUFQO0FBQ0g7O0FBbEM2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGxELDZEOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvZGF0YXNldHMubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQucHJlcHJvY2Vzc2luZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQge2RlZmF1bHQgYXMgQmFzZUltZ0RhdGFzZXR9IGZyb20gJy4vYmFzZUltZ0RhdGFzZXQnO1xuaW1wb3J0IHsgSW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgUHJlcHJvY2Vzc2luZyB9IGZyb20gJ2NhdXNhbC1uZXQucHJlcHJvY2Vzc2luZyc7XG5pbXBvcnQgeyBTdHJlYW0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW5pc3REYXRhc2V0IGV4dGVuZHMgQmFzZUltZ0RhdGFzZXR7XG4gICAgXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJlKXtcbiAgICAgICAgc3VwZXIoY29uZmlndXJlKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gSW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZyA9IG5ldyBQcmVwcm9jZXNzaW5nKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hMYWJlbENodW5rKGNodW5rVXJsLCBzYXZlUGF0aCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hCdWZmZXIoY2h1bmtVcmwsIHNhdmVQYXRoKTtcbiAgICB9XG5cbiAgICBhc3luYyBmZXRjaFNhbXBsZUNodW5rKGNodW5rVXJsLCBzYXZlUGF0aCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnN0b3JhZ2UuZmV0Y2hQTkdGaWxlKGNodW5rVXJsLCBzYXZlUGF0aCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmV0Y2hEYXRhc2V0KHNhdmVEaXI9Jy9tbmlzdC8nLG51bWNodW5rcz0xLCBzZWxlY3RCeT0ncmFuZG9tJyl7XG4gICAgICAgIGxldCBkYXRhQ2h1bmtzID0gWydkYXRhLWNodW5rLTAucG5nJ107XG4gICAgICAgIGxldCBsYWJlbENodW5rcyA9IFsnbGFiZWwtY2h1bmstMCddO1xuICAgICAgICBjb25zdCBGZXRjaFNhbXBsZUNodW5rID0gYXN5bmMgKGNodW5rTmFtZSk9PntcbiAgICAgICAgICAgIGNvbnN0IENodW5rVXJsID0gdGhpcy5jb25maWd1cmF0aW9uLmRhdGFzZXRVcmwgKyBjaHVua05hbWU7XG4gICAgICAgICAgICBjb25zdCBTYXZlUGF0aCA9IHNhdmVEaXIgKyBjaHVua05hbWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7Q2h1bmtVcmwsIFNhdmVQYXRofSk7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaFNhbXBsZUNodW5rKENodW5rVXJsLCBTYXZlUGF0aCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IEZldGNoTGFiZWxDaHVuayA9IGFzeW5jIChjaHVua05hbWUpPT57XG4gICAgICAgICAgICBsZXQgY2h1bmtVcmwgPSB0aGlzLmNvbmZpZ3VyYXRpb24uZGF0YXNldFVybCArIGNodW5rTmFtZTtcbiAgICAgICAgICAgIGxldCBzYXZlUGF0aCA9IHNhdmVEaXIgKyBjaHVua05hbWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7Y2h1bmtVcmwsIHNhdmVQYXRofSk7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaExhYmVsQ2h1bmsoY2h1bmtVcmwsIHNhdmVQYXRoKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNodW5rRmV0Y2hMaXN0ID0gdGhpcy5GLnppcChkYXRhQ2h1bmtzLCBsYWJlbENodW5rcyk7XG4gICAgICAgIHRoaXMuc2F2ZWRDaHVua3MgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgICAgICAgICAgICAgY2h1bmtGZXRjaExpc3QubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgKFtzYW1wbGVDaHVuaywgbGFiZWxDaHVua10pPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZVBhdGggID0gYXdhaXQgRmV0Y2hTYW1wbGVDaHVuayhzYW1wbGVDaHVuayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsUGF0aCA9IGF3YWl0IEZldGNoTGFiZWxDaHVuayhsYWJlbENodW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICBsZXQgW3NhbXBsZVN0b3JhZ2UsIGxhYmVsU3RvcmFnZV0gPSB0aGlzLkYudW56aXAodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIHRoaXMuc2F2ZWRDaHVua1NhbXBsZXMgPSBzYW1wbGVTdG9yYWdlO1xuICAgICAgICB0aGlzLnNhdmVkQ2h1bmtMYWJlbHMgPSBsYWJlbFN0b3JhZ2U7XG4gICAgICAgIHJldHVybiB7c2FtcGxlU3RvcmFnZSwgbGFiZWxTdG9yYWdlfTtcbiAgICB9XG4gICAgXG4gICAgbWFrZVByZXByb2Nlc3NpbmdTdHJlYW0oc2F2ZURpcj0nL3ByZXByb2Nlc3NpbmcvbW5pc3QvJyxzdG9yZUluTWVtb3J5PWZhbHNlKXtcbiAgICAgICAgdGhpcy5wcmVQcm9jZXNzaW5nU3RvcmFnZSA9IChzdG9yZUluTWVtb3J5KT90aGlzLm1lbWVDYWNoZTp0aGlzLnN0b3JhZ2U7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBJbWFnZUJ1ZmZlclNpemUgPSB0aGlzLkYuZ2V0SW1nQnVmZmVyU2l6ZSh0aGlzLnNhbXBsZVNpemUpO1xuICAgICAgICBjb25zdCBMYWJlbEJ1ZmZlclNpemUgPSB0aGlzLm51bUNsYXNzO1xuICAgICAgICBjb25zb2xlLmxvZyh7aW1hZ2VCdWZmZXJTaXplOiBJbWFnZUJ1ZmZlclNpemUsIFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWxCdWZmZXJTaXplOiBMYWJlbEJ1ZmZlclNpemV9KTtcbiAgICAgICAgY29uc3QgVHJhbnNmb3JtRm4gPSAoY2h1bmssIGNodW5rRW5jb2RpbmcsIGFmdGVyVHJhbnNmb3JtRm4pID0+e1xuICAgICAgICAgICAgY29uc3QgVHJhbnNmb3JtQXN5bmMgPSBhc3luYyAoKT0+e1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVCdWZmZXIgPSBjaHVuay5zYW1wbGU7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsQnVmZmVyID0gY2h1bmsubGFiZWw7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coe3NhbXBsZUJ1ZmZlciwgbGFiZWxCdWZmZXJ9KTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRlZEltZ0J1ZmZlciA9IGF3YWl0IHRoaXMucHJlcHJvY2Vzc2luZy5zcGxpdEltYWdlQnVmZmVyKHNhbXBsZUJ1ZmZlciwgSW1hZ2VCdWZmZXJTaXplKTtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRlZExhYmVsQnVmZmVyID0gYXdhaXQgdGhpcy5wcmVwcm9jZXNzaW5nLnNwbGl0SW1hZ2VCdWZmZXIobGFiZWxCdWZmZXIsIExhYmVsQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt0cmFuc2Zvcm1lZERhdGE6IHRoaXMuRi56aXAoc3BsaXRlZEltZ0J1ZmZlciwgc3BsaXRlZExhYmVsQnVmZmVyKSwgY2h1bmtJZHg6IGNodW5rLmlkeH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgVHJhbnNmb3JtQXN5bmMoY2h1bmspLnRoZW4odHJhbnNmb3JtZWRDaHVuaz0+e1xuICAgICAgICAgICAgICAgIGFmdGVyVHJhbnNmb3JtRm4obnVsbCwgdHJhbnNmb3JtZWRDaHVuayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFdyaXRlRm4gPSAodHJhbnNmb3JtZWRDaHVuaywgY2h1bmtFbmNvZGluZywgY2FsbGJhY2spID0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBXcml0ZUFzeW5jID0gYXN5bmMgKHRyYW5zZm9ybWVkQ2h1bmspPT57XG4gICAgICAgICAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodHJhbnNmb3JtZWRDaHVuay50cmFuc2Zvcm1lZERhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBjaHVua0lkeCAgPSB0cmFuc2Zvcm1lZENodW5rLmNodW5rSWR4O1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVQYXRoICA9IFtdLCBsYWJlbFBhdGggPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGUsIGxhYmVsXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua1NhbXBsZVBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdkYXRhLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgc2FtcGxlKTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0xhYmVsUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ2xhYmVsLycgKyBjaHVua0lkeCArICcvJyArIGlkeCArICcvJywgbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVQYXRoID0gWy4uLnNhbXBsZVBhdGgsIGNodW5rU2FtcGxlUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUGF0aCA9IFsuLi5sYWJlbFBhdGgsIGNodW5rTGFiZWxQYXRoXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuRi56aXAoc2FtcGxlUGF0aCwgbGFiZWxQYXRoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFdyaXRlQXN5bmModHJhbnNmb3JtZWRDaHVuaykudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSBbLi4udGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIC4uLnJlc3VsdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBkdXBsZXhlciA9IFN0cmVhbS5tYWtlRHVwbGV4KFdyaXRlRm4pO1xuICAgICAgICBsZXQgdHJhbnNmb3JtZXIgPSBTdHJlYW0ubWFrZVRyYW5zZm9ybShUcmFuc2Zvcm1Gbik7XG4gICAgICAgIGxldCBzdHJlYW0gPSBkdXBsZXhlci5waXBlKHRyYW5zZm9ybWVyKS5waXBlKGR1cGxleGVyKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG5cbiAgICBhc3luYyBwcmVwcm9jZXNzaW5nRGF0YXNldChzdHJlYW0pe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNhdmVkQ2h1bmtzKTtcbiAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlID0gc2FtcGxlSXRlbVtzYW1wbGVQYXRoXTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGxhYmVsSXRlbVtsYWJlbFBhdGhdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coe3NhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgICAgIHN0cmVhbS5wdXNoKHtpZHgsIHNhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0ucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBzdHJlYW0ub24oJ2ZpbmlzaCcsICgpPT57XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGdldFRyYWluVGVzdFNldCh0cmFpblNpemU9bnVsbCl7XG4gICAgICAgIHRyYWluU2l6ZSA9IHRyYWluU2l6ZXx8cGFyc2VJbnQodGhpcy5zYXZlZFByZXByb2Nlc3NpbmcubGVuZ3RoKjAuOSk7XG5cbiAgICAgICAgY29uc3QgW3RyYWluU2V0LCB0ZXN0U2V0XSA9IHRoaXMuRi5zcGxpdFRyYWluVGVzdFNldCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgdHJhaW5TaXplKTtcbiAgICAgICAgcmV0dXJuIFt0cmFpblNldCwgdGVzdFNldF07XG4gICAgfVxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcih0cmFpblNldCwgYmF0Y2hTaXplPTEwLCBzdGFydD0wLCBlbmQ9bnVsbCl7XG4gICAgICAgIGNvbnN0IGJhdGNoZXMgPSB0aGlzLkYuaHNwbGl0RXZlcnkodHJhaW5TZXQsIGJhdGNoU2l6ZSk7XG4gICAgICAgIGlmKGVuZCA9PT0gbnVsbCl7XG4gICAgICAgICAgICBlbmQgPSBiYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dEluZGV4ID0gc3RhcnQsIGl0ZXJhdGlvbkNvdW50ID0gMCwgc3RlcCA9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKHtiYXRjaGVzOiBiYXRjaGVzWzBdLmxlbmd0aH0pO1xuICAgICAgICBjb25zdCBiYXRjaEdlbmVyYXRvciA9IHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlOiB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlLFxuICAgICAgICAgICAgICAgIG5leHQ6IGFzeW5jKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhdGNoU2FtcGxlcyA9IFtdLCBiYXRjaExhYmVscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7Ymw6IGJhdGNoZXNbbmV4dEluZGV4XSwgbmV4dEluZGV4fSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0gb2YgYmF0Y2hlc1tuZXh0SW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaFNhbXBsZXMgPSBbLi4uYmF0Y2hTYW1wbGVzLCBzYW1wbGVJdGVtW3NhbXBsZVBhdGhdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoTGFiZWxzID0gWy4uLmJhdGNoTGFiZWxzLCBsYWJlbEl0ZW1bbGFiZWxQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4ICs9IHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbYmF0Y2hTYW1wbGVzLCBiYXRjaExhYmVsc107XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKG5leHRJbmRleCA8IGVuZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBiYXRjaEdlbmVyYXRvcjtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHtkZWZhdWx0IGFzIEZ1bmN0aW9ufSBmcm9tICcuL2Z1bmN0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VJbWdEYXRhc2V0e1xuICAgIGNvbnN0cnVjdG9yKGRhdGFzZXRDb25maWd1cmUsIGNvbmZpZ3VyZUFzc2VydGlvbj1udWxsKXtcbiAgICAgICAgaWYoY29uZmlndXJlQXNzZXJ0aW9uKXtcbiAgICAgICAgICAgIGNvbmZpZ3VyZUFzc2VydGlvbih0aGlzLmRhdGFzZXRDb25maWd1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGRhdGFzZXRDb25maWd1cmU7XG4gICAgICAgIGNvbnN0IHtudW1TYW1wbGVzLCBzYW1wbGVTaXplLCBudW1DbGFzc2VzfSA9IHRoaXMuY29uZmlndXJhdGlvbjtcbiAgICAgICAgdGhpcy5kYXRhU2l6ZSA9IFtudW1TYW1wbGVzLCAuLi5zYW1wbGVTaXplXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubnVtU2FtcGxlcyA9IG51bVNhbXBsZXM7XG4gICAgICAgIHRoaXMuc2FtcGxlU2l6ZSA9IHNhbXBsZVNpemU7XG4gICAgICAgIHRoaXMubnVtQ2xhc3MgICA9IG51bUNsYXNzZXM7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgIH1cbiAgICBcbiAgICBzdW1tYXJ5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb247XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGZldGNoRGF0YXNldChzYXZlRGlyPW51bGwpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZERhdGEoc3RvcmFnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkTGFiZWwoc3RvcmFnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9ICAgIFxuICAgIFxuICAgIGFzeW5jIGxvYWREYXRhc2V0KHN0b3JhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcihiYXRjaFNpemU9MTApe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7RnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9ufSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBCYXNlRnVuY3Rpb257XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgYXN5bmMgZm9yRWFjaFByb21pc2UoZm4pe1xuICAgICAgICBcbiAgICB9XG4gICAgemlwKGRhdGEsIGxhYmVsKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuemlwKGRhdGEsIGxhYmVsKTtcbiAgICB9XG4gICAgc3BsaXRCdWZmZXIoYnVmZmVyLCBzcGxpdFNpemUpe1xuICAgICAgICBcbiAgICB9O1xuICAgIHVuemlwKGRhdGFzZXQpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBVbnppcCA9ICh1eiwgZGF0dW0pPT57XG4gICAgICAgICAgICB1elswXSA9IFsuLi51elswXSwgZGF0dW1bMF1dO1xuICAgICAgICAgICAgdXpbMV0gPSBbLi4udXpbMV0sIGRhdHVtWzFdXTtcbiAgICAgICAgICAgIHJldHVybiB1ejtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKFVuemlwLFtbXSwgW11dLGRhdGFzZXQpO1xuICAgIH1cbiAgICBnZXRJbWdCdWZmZXJTaXplKGltZ1NpemUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoKHMsZCk9PnMqZCwxLGltZ1NpemUpO1xuICAgIH1cbiAgICBnZW5lcmF0b3JXaXRoSW5kZXgoaXRlbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5hZGRJbmRleChSLm1hcCkoKGQsIGlkeCk9PltpZHgsIGRdLCBpdGVtcyk7XG4gICAgfVxuICAgIHNwbGl0VHJhaW5UZXN0U2V0KGl0ZW1zLCBzcGxpdEluZGV4KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuc3BsaXRBdChzcGxpdEluZGV4LCBpdGVtcyk7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9wcmVwcm9jZXNzaW5nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==