(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.log"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.log", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/preprocessing"] = factory(require("causal-net.core"), require("causal-net.log"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/preprocessing"] = factory(root["causal-net.core"], root["causal-net.log"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_log__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "./src/Image/colorTransforming.mixins.js":
/*!***********************************************!*\
  !*** ./src/Image/colorTransforming.mixins.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ColorTransformingMixins = PreprocessingClass => class extends PreprocessingClass {
  colorTransform(tranformFn, sampleBuffer, channelSize) {
    const R = this.R;
    return R.flatten(R.map(tranformFn, R.splitEvery(channelSize, sampleBuffer)));
  }
  /**
   * Transform color image to black on white image. This function also reduce chanel to 1.
   * @param { Array|Buffer } sampleBuffer
   * @param { Number } channelSize
   * @return { Array } image data after transform
   */


  blackWhiteTransform(sampleBuffer, channelSize) {
    const BlackWhiteFn = pixel => {
      let pixelValue = (pixel[0] + pixel[1] + pixel[2]) / 3;
      return ~~pixelValue;
    };

    return this.colorTransform(BlackWhiteFn, sampleBuffer, channelSize);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ColorTransformingMixins);

/***/ }),

/***/ "./src/Image/imageSplitting.mixins.js":
/*!********************************************!*\
  !*** ./src/Image/imageSplitting.mixins.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ImageSplittingMixins = PreprocessingClass => class extends PreprocessingClass {
  /**
   * Split image into sub images based on split size
   * @param { Array|Buffer } sampleBuffer - original image
   * @param { Number } splitSize - positive number
   * @returns { Array } - array of sub image
   */
  imageSplit(sampleBuffer, splitSize) {
    return this.R.splitEvery(splitSize, sampleBuffer);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ImageSplittingMixins);

/***/ }),

/***/ "./src/Image/index.js":
/*!****************************!*\
  !*** ./src/Image/index.js ***!
  \****************************/
/*! exports provided: ColorTransformingMixins, ImageSplittingMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colorTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorTransforming.mixins */ "./src/Image/colorTransforming.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorTransformingMixins", function() { return _colorTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _imageSplitting_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageSplitting.mixins */ "./src/Image/imageSplitting.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageSplittingMixins", function() { return _imageSplitting_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/NLP/index.js":
/*!**************************!*\
  !*** ./src/NLP/index.js ***!
  \**************************/
/*! exports provided: TokenTransformingMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tokenTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenTransforming.mixins */ "./src/NLP/tokenTransforming.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenTransformingMixins", function() { return _tokenTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/NLP/tokenTransforming.mixins.js":
/*!*********************************************!*\
  !*** ./src/NLP/tokenTransforming.mixins.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const TokenTransformingMixins = PreprocessingClass => class extends PreprocessingClass {
  /**
   * tokenized sentence
   * @param { String } sentence - array of string sentence
   * @returns { Array } array of tokenized sentences
   */
  tokenize(sentence) {
    const R = this.R,
          Tokenizer = this.tokenizer;
    return Tokenizer.tokenize(sentence);
  }
  /**
   * Remove bad words from tokens
   * @param { Array } tokens - array of string token
   * @param { Array } badWordList - Array of bad words
   * @returns { Array } tokens without bad words
   */


  badWordsFilter(tokens, badWordList) {
    const R = this.R;
    return R.filter(token => R.not(R.find(R.equals(token))(badWordList)), tokens);
  }
  /**
   * Count number of apperance of each token in the token list
   * @param { Array } tokens - array of string tokens
   * @param { Object } [freqCount={}] - objec or previous wordFreqCount, empty object if not provided
   * @returns { Object } - json object with token as key and counting number as corresponding value
   */


  wordFreqCount(tokens, freqCount = {}) {
    const R = this.R;

    const UpdateFreq = (freqCount, token) => {
      if (freqCount[token] === undefined) {
        freqCount[token] = 1;
      } else {
        freqCount[token] += 1;
      }

      return freqCount;
    };

    return R.reduce(UpdateFreq, freqCount, tokens);
  }
  /**
   * Remove duplicated tokens
   * @param { Array } tokens - array of string token
   * @returns
   */


  wordDuplicateRemove(tokens) {
    const R = this.R;
    return R.uniq(tokens);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (TokenTransformingMixins);

/***/ }),

/***/ "./src/Tabular/index.js":
/*!******************************!*\
  !*** ./src/Tabular/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/causalNetPreprocessingStream.js":
/*!*********************************************!*\
  !*** ./src/causalNetPreprocessingStream.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.storage */ "causal-net.storage");
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.log */ "causal-net.log");
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_log__WEBPACK_IMPORTED_MODULE_3__);





class CausalNetPreprocessingStream extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Event"], [causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["StorageMixins"]]) {
  constructor(preprocessingStorage, functor, logger) {
    super();
    this.Storage = preprocessingStorage;
    this.F = functor;
    this.logger = logger;
    this.preprocessingData = {
      samples: [],
      labels: [],
      finished: false,
      trainSet: [],
      testSet: []
    };
  }

  get PreprocessingData() {
    return this.preprocessingData;
  }

  get TrainSet() {
    return this.preprocessingData.trainSet;
  }

  get TestSet() {
    return this.preprocessingData.testSet;
  }

  set SampleTransformer(sampleFn) {
    this.sampleFn = sampleFn;
  }

  set LabelTransformer(labelFn) {
    this.labelFn = labelFn;
  }

  get SampleTransformer() {
    if (!this.sampleFn) {
      throw Error('SampleTransformer is not set');
    }

    return this.sampleFn;
  }

  get LabelTransformer() {
    if (!this.labelFn) {
      throw Error('LabelTransformer is not set');
    }

    return this.labelFn;
  }

  get DataHandler() {
    if (!this.dataHandler) {
      throw Error('DataHandler is not set');
    }

    this.dataHandler;
  }

  setDataHandler() {
    const Enumerate = this.F.enumerate; //console.log(Enumerate([0,2,4]));//TODO: fix this failure

    const SampleTransformer = this.SampleTransformer;
    const LabelTransformer = this.LabelTransformer;
    const Storage = this.Storage;

    this.dataHandler = data => {
      return new Promise(async (resolve, reject) => {
        let chunkName = data.ChunkName;

        if (chunkName === undefined) {
          reject(`chunkName is not defined`);
        }

        if (data.Sample) {
          let samples = SampleTransformer(data.Sample);
          let identity = '';

          for (let [idx, sample] of this.F.enumerate(samples)) {
            identity = chunkName + '/' + idx;
            await Storage.setItem('preprocessing/sample/' + identity, JSON.stringify(sample));
            this.preprocessingData.samples.push(identity);
          }
        }

        if (data.Label) {
          let labels = LabelTransformer(data.Label);
          let identity = '';

          for (let [idx, label] of this.F.enumerate(labels)) {
            identity = chunkName + '/' + idx;
            await Storage.setItem('preprocessing/label/' + identity, JSON.stringify(label));
            this.preprocessingData.labels.push(identity);
          }
        }

        resolve(true);
      });
    };

    this.on('data', this.dataHandler);
  }

  splitDataset(trainSize = 0.9) {
    const R = this.F.CoreFunctor; //TODO: enhance this for handle missing data/label case

    let {
      samples,
      labels
    } = this.preprocessingData;
    let data = this.F.zip(samples, labels);

    if (trainSize < 1) {
      trainSize = parseInt(data.length * 0.9);
    }

    const [trainSet, testSet] = R.splitAt(trainSize, data);
    this.preprocessingData.trainSet = trainSet;
    this.preprocessingData.testSet = testSet;
    return [trainSet, testSet];
  }

  makeBatchGenerator(batchData) {
    const Storage = this.Storage;
    let nextIndex = 0;
    const batchGenerator = {
      next: async () => {
        let samples = [],
            labels = [];

        for (let [samplePath, labelPath] of batchData[nextIndex]) {
          samplePath = 'preprocessing/sample/' + samplePath;
          labelPath = 'preprocessing/label/' + labelPath;
          let sampleItem = await Storage.getItem(samplePath);
          let labelItem = await Storage.getItem(labelPath);
          samples = [...samples, JSON.parse(sampleItem[samplePath])];
          labels = [...labels, JSON.parse(labelItem[labelPath])];
        }

        nextIndex += 1;
        return {
          samples,
          labels
        };
      },

      *[Symbol.iterator]() {
        while (nextIndex < batchData.length) {
          yield this.next();
        }
      }

    };
    return batchGenerator;
  }

  get TrainDataGenerator() {
    const TrainSet = this.TrainSet;
    const R = this.F.CoreFunctor;
    return batchSize => {
      //TODO: perform permutate
      let batchData = R.splitEvery(batchSize, TrainSet);
      return this.makeBatchGenerator(batchData);
    };
  }

  get TestDataGenerator() {
    const TestSet = this.TestSet;
    const R = this.F.CoreFunctor;
    return batchSize => {
      //TODO: perform permutate
      let batchData = R.splitEvery(batchSize, TestSet);
      return this.makeBatchGenerator(batchData);
    };
  }

}

var functor = new causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"]();
/* harmony default export */ __webpack_exports__["default"] = (new CausalNetPreprocessingStream(causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["indexDBStorage"], functor, causal_net_log__WEBPACK_IMPORTED_MODULE_3__["termLogger"]));

/***/ }),

/***/ "./src/imagePreprocessing.js":
/*!***********************************!*\
  !*** ./src/imagePreprocessing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image/index */ "./src/Image/index.js");



/**
 * This ImagePreprocessing provide methods for preprocessing image data
 * { MixWith: [
 *         ColorTransformingMixins, ImageSplittingMixins
 *     ] }
 * @class ImagePreprocessing
 * @extends BaseFunctor
 * @example
 * [EXAMPLE ../examples/imagePreprocessing.babel.node.js]
 */

class ImagePreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_Image_index__WEBPACK_IMPORTED_MODULE_2__["ColorTransformingMixins"], _Image_index__WEBPACK_IMPORTED_MODULE_2__["ImageSplittingMixins"]]) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ImagePreprocessing());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetPreprocessingStream, PreprocessingMixins, imagePreprocessing, nlpPreprocessing, tabularPreprocessing, tokenizerEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetPreprocessingStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetPreprocessingStream */ "./src/causalNetPreprocessingStream.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetPreprocessingStream", function() { return _causalNetPreprocessingStream__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _preprocessing_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preprocessing.mixins */ "./src/preprocessing.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreprocessingMixins", function() { return _preprocessing_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _imagePreprocessing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagePreprocessing */ "./src/imagePreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imagePreprocessing", function() { return _imagePreprocessing__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _nlpPreprocessing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nlpPreprocessing */ "./src/nlpPreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlpPreprocessing", function() { return _nlpPreprocessing__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _tabularPreprocessing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabularPreprocessing */ "./src/tabularPreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tabularPreprocessing", function() { return _tabularPreprocessing__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _tokenizer_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokenizer.en */ "./src/tokenizer.en.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenizerEN", function() { return _tokenizer_en__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/nlpPreprocessing.js":
/*!*********************************!*\
  !*** ./src/nlpPreprocessing.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NLP_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NLP/index */ "./src/NLP/index.js");



/**
 * This NLPPreprocessing class provide methods for preprocessing text and output valid tokens.
 * { MixWith:
 *     [ TokenTransformingMixins ]) }
 * @class NLPPreprocessing
 * @extends BaseFunctor
 * @example
 * [!EXAMPLE ../examples/nlpPreprocessing.babel.node.js]
 */

class NLPPreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_NLP_index__WEBPACK_IMPORTED_MODULE_2__["TokenTransformingMixins"]]) {
  constructor() {
    super();
  }
  /**
   * This method is used in case tokenizer requires data setup.
   * @param { Url|FilePath } configLink
   * @memberof NLPPreprocessing
   */


  connect(configLink) {
    this.tokenizer.connect(configLink);
  }
  /**
   * Get tokenizer
   *
   * @memberof NLPPreprocessing
   */


  get Tokenizer() {
    if (!this.tokenizer) {
      throw Error('tokenizer is not set');
    }

    return this.tokenizer;
  }
  /**
   * Set tokenizer
   * @param { Object } tokenizer - tokenizer object
   * @memberof NLPPreprocessing
   */


  set Tokenizer(tokenizer) {
    this.tokenizer = tokenizer;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new NLPPreprocessing());

/***/ }),

/***/ "./src/preprocessing.mixins.js":
/*!*************************************!*\
  !*** ./src/preprocessing.mixins.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const PreprocessingMixins = BasePipelineClass => class extends BasePipelineClass {
  get Preprocessing() {
    if (!this.streamPreprocessing) {
      throw Error('streamPreprocessing is not set');
    }

    return this.streamPreprocessing;
  }

  set Preprocessing(streamPreprocessing) {
    this.streamPreprocessing = streamPreprocessing;
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    const {
      SampleTransformer,
      LabelTransformer
    } = pipelineConfig.Dataset.Preprocessing;
    this.Logger.groupBegin('preprocessing');
    this.Preprocessing.SampleTransformer = SampleTransformer;
    this.Preprocessing.LabelTransformer = LabelTransformer;
    this.Preprocessing.setDataHandler();
    pipelineConfig.TrainDataGenerator = this.Preprocessing.TrainDataGenerator;
    pipelineConfig.TestDataGenerator = this.Preprocessing.TestDataGenerator;
    this.Logger.groupEnd();
    return pipelineConfig;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (PreprocessingMixins);

/***/ }),

/***/ "./src/tabularPreprocessing.js":
/*!*************************************!*\
  !*** ./src/tabularPreprocessing.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tabular_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabular/index */ "./src/Tabular/index.js");
/* harmony import */ var _Tabular_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Tabular_index__WEBPACK_IMPORTED_MODULE_2__);




class TabularPreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], []) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TabularPreprocessing());

/***/ }),

/***/ "./src/tokenizer.en.js":
/*!*****************************!*\
  !*** ./src/tokenizer.en.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This TokenizerEN is a simple implementation for English tokenizer
 * @todo enhance it with entities and built-in vocab
 * @experiment
 * @class TokenizerEN
 */
class TokenizerEN {
  constructor() {}

  connect(configureLink) {
    console.log('This simple English tokenizer not requires advance configure');
  }

  tokenize(text) {
    const Re = /[\s."'/\|;:()\[\]\@\#\$\&]/g;
    return text.split(Re).filter(token => token !== '');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TokenizerEN());

/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

/***/ }),

/***/ "causal-net.log":
/*!*********************************!*\
  !*** external "causal-net.log" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_log__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9pbWFnZVNwbGl0dGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlblRyYW5zZm9ybWluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2NhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2ltYWdlUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL25scFByZXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3ByZXByb2Nlc3NpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy90YWJ1bGFyUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvdG9rZW5pemVyLmVuLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ0NsYXNzIiwiY29sb3JUcmFuc2Zvcm0iLCJ0cmFuZm9ybUZuIiwic2FtcGxlQnVmZmVyIiwiY2hhbm5lbFNpemUiLCJSIiwiZmxhdHRlbiIsIm1hcCIsInNwbGl0RXZlcnkiLCJibGFja1doaXRlVHJhbnNmb3JtIiwiQmxhY2tXaGl0ZUZuIiwicGl4ZWwiLCJwaXhlbFZhbHVlIiwiSW1hZ2VTcGxpdHRpbmdNaXhpbnMiLCJpbWFnZVNwbGl0Iiwic3BsaXRTaXplIiwiVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMiLCJ0b2tlbml6ZSIsInNlbnRlbmNlIiwiVG9rZW5pemVyIiwidG9rZW5pemVyIiwiYmFkV29yZHNGaWx0ZXIiLCJ0b2tlbnMiLCJiYWRXb3JkTGlzdCIsImZpbHRlciIsInRva2VuIiwibm90IiwiZmluZCIsImVxdWFscyIsIndvcmRGcmVxQ291bnQiLCJmcmVxQ291bnQiLCJVcGRhdGVGcmVxIiwidW5kZWZpbmVkIiwicmVkdWNlIiwid29yZER1cGxpY2F0ZVJlbW92ZSIsInVuaXEiLCJDYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJTdG9yYWdlTWl4aW5zIiwiY29uc3RydWN0b3IiLCJwcmVwcm9jZXNzaW5nU3RvcmFnZSIsImZ1bmN0b3IiLCJsb2dnZXIiLCJTdG9yYWdlIiwiRiIsInByZXByb2Nlc3NpbmdEYXRhIiwic2FtcGxlcyIsImxhYmVscyIsImZpbmlzaGVkIiwidHJhaW5TZXQiLCJ0ZXN0U2V0IiwiUHJlcHJvY2Vzc2luZ0RhdGEiLCJUcmFpblNldCIsIlRlc3RTZXQiLCJTYW1wbGVUcmFuc2Zvcm1lciIsInNhbXBsZUZuIiwiTGFiZWxUcmFuc2Zvcm1lciIsImxhYmVsRm4iLCJFcnJvciIsIkRhdGFIYW5kbGVyIiwiZGF0YUhhbmRsZXIiLCJzZXREYXRhSGFuZGxlciIsIkVudW1lcmF0ZSIsImVudW1lcmF0ZSIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNodW5rTmFtZSIsIkNodW5rTmFtZSIsIlNhbXBsZSIsImlkZW50aXR5IiwiaWR4Iiwic2FtcGxlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiTGFiZWwiLCJsYWJlbCIsIm9uIiwic3BsaXREYXRhc2V0IiwidHJhaW5TaXplIiwiQ29yZUZ1bmN0b3IiLCJ6aXAiLCJwYXJzZUludCIsImxlbmd0aCIsInNwbGl0QXQiLCJtYWtlQmF0Y2hHZW5lcmF0b3IiLCJiYXRjaERhdGEiLCJuZXh0SW5kZXgiLCJiYXRjaEdlbmVyYXRvciIsIm5leHQiLCJzYW1wbGVQYXRoIiwibGFiZWxQYXRoIiwic2FtcGxlSXRlbSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJwYXJzZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiVHJhaW5EYXRhR2VuZXJhdG9yIiwiYmF0Y2hTaXplIiwiVGVzdERhdGFHZW5lcmF0b3IiLCJGdW5jdG9yIiwiaW5kZXhEQlN0b3JhZ2UiLCJ0ZXJtTG9nZ2VyIiwiSW1hZ2VQcmVwcm9jZXNzaW5nIiwiQmFzZUZ1bmN0b3IiLCJOTFBQcmVwcm9jZXNzaW5nIiwiY29ubmVjdCIsImNvbmZpZ0xpbmsiLCJQcmVwcm9jZXNzaW5nTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJQcmVwcm9jZXNzaW5nIiwic3RyZWFtUHJlcHJvY2Vzc2luZyIsInNldEJ5Q29uZmlnIiwicGlwZWxpbmVDb25maWciLCJEYXRhc2V0IiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsImdyb3VwRW5kIiwiVGFidWxhclByZXByb2Nlc3NpbmciLCJUb2tlbml6ZXJFTiIsImNvbmZpZ3VyZUxpbmsiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsIlJlIiwic3BsaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsTUFBTUEsdUJBQXVCLEdBQUlDLGtCQUFELElBQXdCLGNBQWNBLGtCQUFkLENBQWdDO0FBRXBGQyxnQkFBYyxDQUFDQyxVQUFELEVBQWFDLFlBQWIsRUFBMkJDLFdBQTNCLEVBQXVDO0FBQ2pELFVBQU1DLENBQUMsR0FBRyxLQUFL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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNVSxvQkFBTixTQUFtQ3ZGLHlEQUFRLENBQUNDLE9BQVQsQ0FBaUJ3RSx1REFBakIsRUFDL0IsRUFEK0IsQ0FBbkMsQ0FDTztBQUNIckUsYUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFIRTs7QUFNUSxtRUFBSW1GLG9CQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTs7Ozs7O0FBTUEsTUFBTUMsV0FBTixDQUFpQjtBQUNicEYsYUFBVyxHQUFFLENBQ1o7O0FBQ0R1RSxTQUFPLENBQUNjLGFBQUQsRUFBZTtBQUNsQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksOERBQVo7QUFDSDs7QUFDRC9HLFVBQVEsQ0FBQ2dILElBQUQsRUFBTTtBQUNWLFVBQU1DLEVBQUUsR0FBRyw2QkFBWDtBQUNBLFdBQU9ELElBQUksQ0FBQ0UsS0FBTCxDQUFXRCxFQUFYLEVBQWUxRyxNQUFmLENBQXNCQyxLQUFLLElBQUVBLEtBQUssS0FBRyxFQUFyQyxDQUFQO0FBQ0g7O0FBVFk7O0FBV0YsbUVBQUlvRyxXQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7QUNqQkEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxvZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5sb2dcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5sb2dcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sb2dfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgXG4gICAgY29sb3JUcmFuc2Zvcm0odHJhbmZvcm1Gbiwgc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmZsYXR0ZW4oUi5tYXAodHJhbmZvcm1GbiwgUi5zcGxpdEV2ZXJ5KGNoYW5uZWxTaXplLCBzYW1wbGVCdWZmZXIpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSBjb2xvciBpbWFnZSB0byBibGFjayBvbiB3aGl0ZSBpbWFnZS4gVGhpcyBmdW5jdGlvbiBhbHNvIHJlZHVjZSBjaGFuZWwgdG8gMS5cbiAgICAgKiBAcGFyYW0geyBBcnJheXxCdWZmZXIgfSBzYW1wbGVCdWZmZXJcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBjaGFubmVsU2l6ZVxuICAgICAqIEByZXR1cm4geyBBcnJheSB9IGltYWdlIGRhdGEgYWZ0ZXIgdHJhbnNmb3JtXG4gICAgICovXG4gICAgYmxhY2tXaGl0ZVRyYW5zZm9ybShzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKXtcbiAgICAgICAgY29uc3QgQmxhY2tXaGl0ZUZuID0gKHBpeGVsKT0+e1xuICAgICAgICAgICAgbGV0IHBpeGVsVmFsdWUgPSAocGl4ZWxbMF0gKyBwaXhlbFsxXSArcGl4ZWxbMl0pLzM7XG4gICAgICAgICAgICByZXR1cm4gfn5waXhlbFZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvclRyYW5zZm9ybShCbGFja1doaXRlRm4sIHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zOyIsImNvbnN0IEltYWdlU3BsaXR0aW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogU3BsaXQgaW1hZ2UgaW50byBzdWIgaW1hZ2VzIGJhc2VkIG9uIHNwbGl0IHNpemVcbiAgICAgKiBAcGFyYW0geyBBcnJheXxCdWZmZXIgfSBzYW1wbGVCdWZmZXIgLSBvcmlnaW5hbCBpbWFnZVxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IHNwbGl0U2l6ZSAtIHBvc2l0aXZlIG51bWJlclxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSAtIGFycmF5IG9mIHN1YiBpbWFnZVxuICAgICAqL1xuICAgIGltYWdlU3BsaXQoc2FtcGxlQnVmZmVyLCBzcGxpdFNpemUpe1xuICAgICAgICByZXR1cm4gdGhpcy5SLnNwbGl0RXZlcnkoc3BsaXRTaXplLCBzYW1wbGVCdWZmZXIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlU3BsaXR0aW5nTWl4aW5zOyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBDb2xvclRyYW5zZm9ybWluZ01peGlucyB9IGZyb20gJy4vY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBJbWFnZVNwbGl0dGluZ01peGlucyB9IGZyb20gJy4vaW1hZ2VTcGxpdHRpbmcubWl4aW5zJzsiLCJleHBvcnQge2RlZmF1bHQgYXMgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL3Rva2VuVHJhbnNmb3JtaW5nLm1peGlucyc7IiwiY29uc3QgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICAvKipcbiAgICAgKiB0b2tlbml6ZWQgc2VudGVuY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBzZW50ZW5jZSAtIGFycmF5IG9mIHN0cmluZyBzZW50ZW5jZVxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBhcnJheSBvZiB0b2tlbml6ZWQgc2VudGVuY2VzXG4gICAgICovXG4gICAgdG9rZW5pemUoc2VudGVuY2Upe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBUb2tlbml6ZXIgPSB0aGlzLnRva2VuaXplcjtcbiAgICAgICAgcmV0dXJuIFRva2VuaXplci50b2tlbml6ZShzZW50ZW5jZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBiYWQgd29yZHMgZnJvbSB0b2tlbnNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGFycmF5IG9mIHN0cmluZyB0b2tlblxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gYmFkV29yZExpc3QgLSBBcnJheSBvZiBiYWQgd29yZHNcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gdG9rZW5zIHdpdGhvdXQgYmFkIHdvcmRzXG4gICAgICovXG4gICAgYmFkV29yZHNGaWx0ZXIodG9rZW5zLCBiYWRXb3JkTGlzdCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmZpbHRlcigodG9rZW4pPT5SLm5vdChSLmZpbmQoUi5lcXVhbHModG9rZW4pKShiYWRXb3JkTGlzdCkpLCB0b2tlbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3VudCBudW1iZXIgb2YgYXBwZXJhbmNlIG9mIGVhY2ggdG9rZW4gaW4gdGhlIHRva2VuIGxpc3RcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGFycmF5IG9mIHN0cmluZyB0b2tlbnNcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBbZnJlcUNvdW50PXt9XSAtIG9iamVjIG9yIHByZXZpb3VzIHdvcmRGcmVxQ291bnQsIGVtcHR5IG9iamVjdCBpZiBub3QgcHJvdmlkZWRcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IC0ganNvbiBvYmplY3Qgd2l0aCB0b2tlbiBhcyBrZXkgYW5kIGNvdW50aW5nIG51bWJlciBhcyBjb3JyZXNwb25kaW5nIHZhbHVlXG4gICAgICovXG4gICAgd29yZEZyZXFDb3VudCh0b2tlbnMsIGZyZXFDb3VudD17fSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFVwZGF0ZUZyZXEgPSAoZnJlcUNvdW50LCB0b2tlbik9PntcbiAgICAgICAgICAgIGlmKGZyZXFDb3VudFt0b2tlbl0gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgZnJlcUNvdW50W3Rva2VuXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGZyZXFDb3VudFt0b2tlbl0gKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcmVxQ291bnQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSLnJlZHVjZShVcGRhdGVGcmVxLCBmcmVxQ291bnQsIHRva2Vucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBkdXBsaWNhdGVkIHRva2Vuc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2VuXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICB3b3JkRHVwbGljYXRlUmVtb3ZlKHRva2Vucyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnVuaXEodG9rZW5zKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnM7IiwiaW1wb3J0IHsgRXZlbnQsIEZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGluZGV4REJTdG9yYWdlLCBTdG9yYWdlTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IHRlcm1Mb2dnZXIgfSBmcm9tICdjYXVzYWwtbmV0LmxvZyc7XG5jbGFzcyBDYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChFdmVudCwgXG4gICAgWyBTdG9yYWdlTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKHByZXByb2Nlc3NpbmdTdG9yYWdlLCBmdW5jdG9yLCBsb2dnZXIpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBwcmVwcm9jZXNzaW5nU3RvcmFnZTtcbiAgICAgICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEgPSB7IHNhbXBsZXM6IFtdLCBsYWJlbHM6IFtdLCBmaW5pc2hlZDogZmFsc2UsIHRyYWluU2V0OiBbXSwgdGVzdFNldDogW10gfTsgIFxuICAgIH1cbiAgICBnZXQgUHJlcHJvY2Vzc2luZ0RhdGEoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGE7XG4gICAgfVxuXG4gICAgZ2V0IFRyYWluU2V0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnRyYWluU2V0O1xuICAgIH1cblxuICAgIGdldCBUZXN0U2V0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnRlc3RTZXQ7XG4gICAgfVxuICAgIFxuICAgIHNldCBTYW1wbGVUcmFuc2Zvcm1lcihzYW1wbGVGbil7XG4gICAgICAgIHRoaXMuc2FtcGxlRm4gPSBzYW1wbGVGbjtcbiAgICB9XG4gICAgc2V0IExhYmVsVHJhbnNmb3JtZXIobGFiZWxGbil7XG4gICAgICAgIHRoaXMubGFiZWxGbiA9IGxhYmVsRm47XG4gICAgfVxuICAgIGdldCBTYW1wbGVUcmFuc2Zvcm1lcigpe1xuICAgICAgICBpZighdGhpcy5zYW1wbGVGbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignU2FtcGxlVHJhbnNmb3JtZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNhbXBsZUZuO1xuICAgIH1cbiAgICBnZXQgTGFiZWxUcmFuc2Zvcm1lcigpe1xuICAgICAgICBpZighdGhpcy5sYWJlbEZuKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdMYWJlbFRyYW5zZm9ybWVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbEZuO1xuICAgIH1cbiAgICBnZXQgRGF0YUhhbmRsZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuZGF0YUhhbmRsZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0RhdGFIYW5kbGVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGFIYW5kbGVyO1xuICAgIH1cblxuICAgIHNldERhdGFIYW5kbGVyKCl7XG4gICAgICAgIGNvbnN0IEVudW1lcmF0ZSA9IHRoaXMuRi5lbnVtZXJhdGU7XG4gICAgICAgIC8vY29uc29sZS5sb2coRW51bWVyYXRlKFswLDIsNF0pKTsvL1RPRE86IGZpeCB0aGlzIGZhaWx1cmVcbiAgICAgICAgY29uc3QgU2FtcGxlVHJhbnNmb3JtZXIgPSB0aGlzLlNhbXBsZVRyYW5zZm9ybWVyO1xuICAgICAgICBjb25zdCBMYWJlbFRyYW5zZm9ybWVyID0gdGhpcy5MYWJlbFRyYW5zZm9ybWVyO1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICB0aGlzLmRhdGFIYW5kbGVyID0gKGRhdGEpPT57XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtOYW1lID0gZGF0YS5DaHVua05hbWU7XG4gICAgICAgICAgICAgICAgaWYoY2h1bmtOYW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoYGNodW5rTmFtZSBpcyBub3QgZGVmaW5lZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihkYXRhLlNhbXBsZSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVzID0gU2FtcGxlVHJhbnNmb3JtZXIoZGF0YS5TYW1wbGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWRlbnRpdHkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbaWR4LCBzYW1wbGVdIG9mIHRoaXMuRi5lbnVtZXJhdGUoc2FtcGxlcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHkgPSBjaHVua05hbWUgKyAnLycgKyBpZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oJ3ByZXByb2Nlc3Npbmcvc2FtcGxlLycgKyBpZGVudGl0eSwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnNhbXBsZXMucHVzaChpZGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihkYXRhLkxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVscyA9IExhYmVsVHJhbnNmb3JtZXIoZGF0YS5MYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZGVudGl0eSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIGxhYmVsXSBvZiB0aGlzLkYuZW51bWVyYXRlKGxhYmVscykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHkgPSBjaHVua05hbWUgKyAnLycgKyBpZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oJ3ByZXByb2Nlc3NpbmcvbGFiZWwvJyArIGlkZW50aXR5LCBKU09OLnN0cmluZ2lmeShsYWJlbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nRGF0YS5sYWJlbHMucHVzaChpZGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbignZGF0YScsIHRoaXMuZGF0YUhhbmRsZXIpO1xuICAgIH1cbiAgICBcbiAgICBzcGxpdERhdGFzZXQodHJhaW5TaXplPTAuOSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgICAgIC8vVE9ETzogZW5oYW5jZSB0aGlzIGZvciBoYW5kbGUgbWlzc2luZyBkYXRhL2xhYmVsIGNhc2VcbiAgICAgICAgbGV0IHsgc2FtcGxlcywgbGFiZWxzIH0gPSB0aGlzLnByZXByb2Nlc3NpbmdEYXRhO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuRi56aXAoc2FtcGxlcywgbGFiZWxzKTtcbiAgICAgICAgaWYodHJhaW5TaXplIDwgMSl7XG4gICAgICAgICAgICB0cmFpblNpemUgPSBwYXJzZUludChkYXRhLmxlbmd0aCowLjkpO1xuICAgICAgICB9ICAgIFxuICAgICAgICBjb25zdCBbIHRyYWluU2V0LCB0ZXN0U2V0IF0gPSBSLnNwbGl0QXQodHJhaW5TaXplLCBkYXRhKTtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nRGF0YS50cmFpblNldCA9IHRyYWluU2V0O1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnRlc3RTZXQgPSB0ZXN0U2V0O1xuICAgICAgICByZXR1cm4gW3RyYWluU2V0LCB0ZXN0U2V0XTtcbiAgICB9XG4gICAgbWFrZUJhdGNoR2VuZXJhdG9yKGJhdGNoRGF0YSl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSAwO1xuICAgICAgICBjb25zdCBiYXRjaEdlbmVyYXRvciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiBhc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVzID0gW10sIGxhYmVscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSBvZiBiYXRjaERhdGFbbmV4dEluZGV4XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVQYXRoID0gJ3ByZXByb2Nlc3Npbmcvc2FtcGxlLycgKyBzYW1wbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQYXRoID0gJ3ByZXByb2Nlc3NpbmcvbGFiZWwvJyArIGxhYmVsUGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgU3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IFN0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcyA9IFsuLi5zYW1wbGVzLCBKU09OLnBhcnNlKHNhbXBsZUl0ZW1bc2FtcGxlUGF0aF0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVscyA9IFsuLi5sYWJlbHMsIEpTT04ucGFyc2UobGFiZWxJdGVtW2xhYmVsUGF0aF0pXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHNhbXBsZXMsIGxhYmVscyB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZShuZXh0SW5kZXggPCBiYXRjaERhdGEubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJhdGNoR2VuZXJhdG9yO1xuICAgIH1cbiAgICBnZXQgVHJhaW5EYXRhR2VuZXJhdG9yKCl7XG4gICAgICAgIGNvbnN0IFRyYWluU2V0ID0gdGhpcy5UcmFpblNldDtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICAgICAgcmV0dXJuIChiYXRjaFNpemUpPT57XG4gICAgICAgICAgICAvL1RPRE86IHBlcmZvcm0gcGVybXV0YXRlXG4gICAgICAgICAgICBsZXQgYmF0Y2hEYXRhID0gUi5zcGxpdEV2ZXJ5KGJhdGNoU2l6ZSwgVHJhaW5TZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlQmF0Y2hHZW5lcmF0b3IoYmF0Y2hEYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfVxuICAgIGdldCBUZXN0RGF0YUdlbmVyYXRvcigpe1xuICAgICAgICBjb25zdCBUZXN0U2V0ID0gdGhpcy5UZXN0U2V0O1xuICAgICAgICBjb25zdCBSID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICByZXR1cm4gKGJhdGNoU2l6ZSk9PntcbiAgICAgICAgICAgIC8vVE9ETzogcGVyZm9ybSBwZXJtdXRhdGVcbiAgICAgICAgICAgIGxldCBiYXRjaERhdGEgPSBSLnNwbGl0RXZlcnkoYmF0Y2hTaXplLCBUZXN0U2V0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VCYXRjaEdlbmVyYXRvcihiYXRjaERhdGEpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbnZhciBmdW5jdG9yID0gbmV3IEZ1bmN0b3IoKTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtKGluZGV4REJTdG9yYWdlLCBmdW5jdG9yLCB0ZXJtTG9nZ2VyKTsiLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBDb2xvclRyYW5zZm9ybWluZ01peGlucywgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgfSBmcm9tICcuL0ltYWdlL2luZGV4JztcblxuLyoqXG4gKiBUaGlzIEltYWdlUHJlcHJvY2Vzc2luZyBwcm92aWRlIG1ldGhvZHMgZm9yIHByZXByb2Nlc3NpbmcgaW1hZ2UgZGF0YVxuICogeyBNaXhXaXRoOiBbXG4gKiAgICAgICAgIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGluc1xuICogICAgIF0gfVxuICogQGNsYXNzIEltYWdlUHJlcHJvY2Vzc2luZ1xuICogQGV4dGVuZHMgQmFzZUZ1bmN0b3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9pbWFnZVByZXByb2Nlc3NpbmcuYmFiZWwubm9kZS5qc11cbiAqL1xuY2xhc3MgSW1hZ2VQcmVwcm9jZXNzaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgW1xuICAgICAgICBDb2xvclRyYW5zZm9ybWluZ01peGlucywgXG4gICAgICAgIEltYWdlU3BsaXR0aW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSW1hZ2VQcmVwcm9jZXNzaW5nOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSB9IGZyb20gJy4vY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZXByb2Nlc3NpbmdNaXhpbnN9IGZyb20gJy4vcHJlcHJvY2Vzc2luZy5taXhpbnMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGltYWdlUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vaW1hZ2VQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbmxwUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vbmxwUHJlcHJvY2Vzc2luZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRhYnVsYXJQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi90YWJ1bGFyUHJlcHJvY2Vzc2luZyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9rZW5pemVyRU4gfSBmcm9tICcuL3Rva2VuaXplci5lbic7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL05MUC9pbmRleCc7XG4vKipcbiAqIFRoaXMgTkxQUHJlcHJvY2Vzc2luZyBjbGFzcyBwcm92aWRlIG1ldGhvZHMgZm9yIHByZXByb2Nlc3NpbmcgdGV4dCBhbmQgb3V0cHV0IHZhbGlkIHRva2Vucy5cbiAqIHsgTWl4V2l0aDpcbiAqICAgICBbIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIF0pIH1cbiAqIEBjbGFzcyBOTFBQcmVwcm9jZXNzaW5nXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3RvclxuICogQGV4YW1wbGVcbiAqIFshRVhBTVBMRSAuLi9leGFtcGxlcy9ubHBQcmVwcm9jZXNzaW5nLmJhYmVsLm5vZGUuanNdXG4gKi9cblxuY2xhc3MgTkxQUHJlcHJvY2Vzc2luZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFxuICAgIFsgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBpbiBjYXNlIHRva2VuaXplciByZXF1aXJlcyBkYXRhIHNldHVwLlxuICAgICAqIEBwYXJhbSB7IFVybHxGaWxlUGF0aCB9IGNvbmZpZ0xpbmtcbiAgICAgKiBAbWVtYmVyb2YgTkxQUHJlcHJvY2Vzc2luZ1xuICAgICAqL1xuICAgIGNvbm5lY3QoY29uZmlnTGluayl7XG4gICAgICAgIHRoaXMudG9rZW5pemVyLmNvbm5lY3QoY29uZmlnTGluayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0b2tlbml6ZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOTFBQcmVwcm9jZXNzaW5nXG4gICAgICovXG4gICAgZ2V0IFRva2VuaXplcigpe1xuICAgICAgICBpZighdGhpcy50b2tlbml6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3Rva2VuaXplciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5pemVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdG9rZW5pemVyXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gdG9rZW5pemVyIC0gdG9rZW5pemVyIG9iamVjdFxuICAgICAqIEBtZW1iZXJvZiBOTFBQcmVwcm9jZXNzaW5nXG4gICAgICovXG4gICAgc2V0IFRva2VuaXplcih0b2tlbml6ZXIpe1xuICAgICAgICB0aGlzLnRva2VuaXplciA9IHRva2VuaXplcjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOTFBQcmVwcm9jZXNzaW5nOyIsImNvbnN0IFByZXByb2Nlc3NpbmdNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgXG4gICAgZ2V0IFByZXByb2Nlc3NpbmcoKXtcbiAgICAgICAgaWYoICF0aGlzLnN0cmVhbVByZXByb2Nlc3NpbmcgKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzdHJlYW1QcmVwcm9jZXNzaW5nIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW1QcmVwcm9jZXNzaW5nO1xuICAgIH1cblxuICAgIHNldCBQcmVwcm9jZXNzaW5nKHN0cmVhbVByZXByb2Nlc3Npbmcpe1xuICAgICAgICB0aGlzLnN0cmVhbVByZXByb2Nlc3NpbmcgPSBzdHJlYW1QcmVwcm9jZXNzaW5nO1xuICAgIH1cblxuICAgIFxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBTYW1wbGVUcmFuc2Zvcm1lciwgTGFiZWxUcmFuc2Zvcm1lciB9ID0gcGlwZWxpbmVDb25maWcuRGF0YXNldC5QcmVwcm9jZXNzaW5nO1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdwcmVwcm9jZXNzaW5nJyk7XG4gICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZy5TYW1wbGVUcmFuc2Zvcm1lciA9IFNhbXBsZVRyYW5zZm9ybWVyO1xuICAgICAgICB0aGlzLlByZXByb2Nlc3NpbmcuTGFiZWxUcmFuc2Zvcm1lciA9IExhYmVsVHJhbnNmb3JtZXI7XG4gICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZy5zZXREYXRhSGFuZGxlcigpO1xuICAgICAgICBwaXBlbGluZUNvbmZpZy5UcmFpbkRhdGFHZW5lcmF0b3IgPSB0aGlzLlByZXByb2Nlc3NpbmcuVHJhaW5EYXRhR2VuZXJhdG9yO1xuICAgICAgICBwaXBlbGluZUNvbmZpZy5UZXN0RGF0YUdlbmVyYXRvciA9IHRoaXMuUHJlcHJvY2Vzc2luZy5UZXN0RGF0YUdlbmVyYXRvcjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBwaXBlbGluZUNvbmZpZztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmVwcm9jZXNzaW5nTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IEl0ZW1Ob3JtYWxpemluZywgTnVsbEl0ZW1SZXBsYWNlIH0gZnJvbSAnLi9UYWJ1bGFyL2luZGV4JztcbmNsYXNzIFRhYnVsYXJQcmVwcm9jZXNzaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgXG4gICAgW10pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFidWxhclByZXByb2Nlc3Npbmc7IiwiLyoqXG4gKiBUaGlzIFRva2VuaXplckVOIGlzIGEgc2ltcGxlIGltcGxlbWVudGF0aW9uIGZvciBFbmdsaXNoIHRva2VuaXplclxuICogQHRvZG8gZW5oYW5jZSBpdCB3aXRoIGVudGl0aWVzIGFuZCBidWlsdC1pbiB2b2NhYlxuICogQGV4cGVyaW1lbnRcbiAqIEBjbGFzcyBUb2tlbml6ZXJFTlxuICovXG5jbGFzcyBUb2tlbml6ZXJFTntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBjb25uZWN0KGNvbmZpZ3VyZUxpbmspe1xuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBzaW1wbGUgRW5nbGlzaCB0b2tlbml6ZXIgbm90IHJlcXVpcmVzIGFkdmFuY2UgY29uZmlndXJlJyk7XG4gICAgfVxuICAgIHRva2VuaXplKHRleHQpe1xuICAgICAgICBjb25zdCBSZSA9IC9bXFxzLlwiJy9cXHw7OigpXFxbXFxdXFxAXFwjXFwkXFwmXS9nO1xuICAgICAgICByZXR1cm4gdGV4dC5zcGxpdChSZSkuZmlsdGVyKHRva2VuPT50b2tlbiE9PScnKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgVG9rZW5pemVyRU4oKTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbG9nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==