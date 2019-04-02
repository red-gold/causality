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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9pbWFnZVNwbGl0dGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlblRyYW5zZm9ybWluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2NhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2ltYWdlUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL25scFByZXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3ByZXByb2Nlc3NpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy90YWJ1bGFyUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvdG9rZW5pemVyLmVuLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ0NsYXNzIiwiY29sb3JUcmFuc2Zvcm0iLCJ0cmFuZm9ybUZuIiwic2FtcGxlQnVmZmVyIiwiY2hhbm5lbFNpemUiLCJSIiwiZmxhdHRlbiIsIm1hcCIsInNwbGl0RXZlcnkiLCJibGFja1doaXRlVHJhbnNmb3JtIiwiQmxhY2tXaGl0ZUZuIiwicGl4ZWwiLCJwaXhlbFZhbHVlIiwiSW1hZ2VTcGxpdHRpbmdNaXhpbnMiLCJpbWFnZVNwbGl0Iiwic3BsaXRTaXplIiwiVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMiLCJ0b2tlbml6ZSIsInNlbnRlbmNlIiwiVG9rZW5pemVyIiwidG9rZW5pemVyIiwiYmFkV29yZHNGaWx0ZXIiLCJ0b2tlbnMiLCJiYWRXb3JkTGlzdCIsImZpbHRlciIsInRva2VuIiwibm90IiwiZmluZCIsImVxdWFscyIsIndvcmRGcmVxQ291bnQiLCJmcmVxQ291bnQiLCJVcGRhdGVGcmVxIiwidW5kZWZpbmVkIiwicmVkdWNlIiwid29yZER1cGxpY2F0ZVJlbW92ZSIsInVuaXEiLCJDYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJTdG9yYWdlTWl4aW5zIiwiY29uc3RydWN0b3IiLCJwcmVwcm9jZXNzaW5nU3RvcmFnZSIsImZ1bmN0b3IiLCJsb2dnZXIiLCJTdG9yYWdlIiwiRiIsInByZXByb2Nlc3NpbmdEYXRhIiwic2FtcGxlcyIsImxhYmVscyIsImZpbmlzaGVkIiwidHJhaW5TZXQiLCJ0ZXN0U2V0IiwiUHJlcHJvY2Vzc2luZ0RhdGEiLCJUcmFpblNldCIsIlRlc3RTZXQiLCJTYW1wbGVUcmFuc2Zvcm1lciIsInNhbXBsZUZuIiwiTGFiZWxUcmFuc2Zvcm1lciIsImxhYmVsRm4iLCJFcnJvciIsIkRhdGFIYW5kbGVyIiwiZGF0YUhhbmRsZXIiLCJzZXREYXRhSGFuZGxlciIsIkVudW1lcmF0ZSIsImVudW1lcmF0ZSIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNodW5rTmFtZSIsIkNodW5rTmFtZSIsIlNhbXBsZSIsImlkZW50aXR5IiwiaWR4Iiwic2FtcGxlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiTGFiZWwiLCJsYWJlbCIsIm9uIiwic3BsaXREYXRhc2V0IiwidHJhaW5TaXplIiwiQ29yZUZ1bmN0b3IiLCJ6aXAiLCJwYXJzZUludCIsImxlbmd0aCIsInNwbGl0QXQiLCJtYWtlQmF0Y2hHZW5lcmF0b3IiLCJiYXRjaERhdGEiLCJuZXh0SW5kZXgiLCJiYXRjaEdlbmVyYXRvciIsIm5leHQiLCJzYW1wbGVQYXRoIiwibGFiZWxQYXRoIiwic2FtcGxlSXRlbSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJwYXJzZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiVHJhaW5EYXRhR2VuZXJhdG9yIiwiYmF0Y2hTaXplIiwiVGVzdERhdGFHZW5lcmF0b3IiLCJGdW5jdG9yIiwiaW5kZXhEQlN0b3JhZ2UiLCJ0ZXJtTG9nZ2VyIiwiSW1hZ2VQcmVwcm9jZXNzaW5nIiwiQmFzZUZ1bmN0b3IiLCJOTFBQcmVwcm9jZXNzaW5nIiwiY29ubmVjdCIsImNvbmZpZ0xpbmsiLCJQcmVwcm9jZXNzaW5nTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJQcmVwcm9jZXNzaW5nIiwic3RyZWFtUHJlcHJvY2Vzc2luZyIsInNldEJ5Q29uZmlnIiwicGlwZWxpbmVDb25maWciLCJEYXRhc2V0IiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsImdyb3VwRW5kIiwiVGFidWxhclByZXByb2Nlc3NpbmciLCJUb2tlbml6ZXJFTiIsImNvbmZpZ3VyZUxpbmsiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsIlJlIiwic3BsaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsTUFBTUEsdUJBQXVCLEdBQUlDLGtCQUFELElBQXdCLGNBQWNBLGtCQUFkLENBQWdDO0FBRXBGQyxnQkFBYyxDQUFDQyxVQUFELEVBQWFDLFlBQWIsRUFBMkJDLFdBQTNCLEVBQXVDO0FBQ2pELFVBQU1DLENBQUMsR0FBRyxLQUFL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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNVSxvQkFBTixTQUFtQ3ZGLHlEQUFRLENBQUNDLE9BQVQsQ0FBaUJ3RSx1REFBakIsRUFDL0IsRUFEK0IsQ0FBbkMsQ0FDTztBQUNIckUsYUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFIRTs7QUFNUSxtRUFBSW1GLG9CQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTs7Ozs7O0FBTUEsTUFBTUMsV0FBTixDQUFpQjtBQUNicEYsYUFBVyxHQUFFLENBQ1o7O0FBQ0R1RSxTQUFPLENBQUNjLGFBQUQsRUFBZTtBQUNsQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksOERBQVo7QUFDSDs7QUFDRC9HLFVBQVEsQ0FBQ2dILElBQUQsRUFBTTtBQUNWLFVBQU1DLEVBQUUsR0FBRyw2QkFBWDtBQUNBLFdBQU9ELElBQUksQ0FBQ0UsS0FBTCxDQUFXRCxFQUFYLEVBQWUxRyxNQUFmLENBQXNCQyxLQUFLLElBQUVBLEtBQUssS0FBRyxFQUFyQyxDQUFQO0FBQ0g7O0FBVFk7O0FBV0YsbUVBQUlvRyxXQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7QUNqQkEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LmxvZ1wiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sb2dcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmdcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmxvZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICBcbiAgICBjb2xvclRyYW5zZm9ybSh0cmFuZm9ybUZuLCBzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuZmxhdHRlbihSLm1hcCh0cmFuZm9ybUZuLCBSLnNwbGl0RXZlcnkoY2hhbm5lbFNpemUsIHNhbXBsZUJ1ZmZlcikpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIGNvbG9yIGltYWdlIHRvIGJsYWNrIG9uIHdoaXRlIGltYWdlLiBUaGlzIGZ1bmN0aW9uIGFsc28gcmVkdWNlIGNoYW5lbCB0byAxLlxuICAgICAqIEBwYXJhbSB7IEFycmF5fEJ1ZmZlciB9IHNhbXBsZUJ1ZmZlclxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IGNoYW5uZWxTaXplXG4gICAgICogQHJldHVybiB7IEFycmF5IH0gaW1hZ2UgZGF0YSBhZnRlciB0cmFuc2Zvcm1cbiAgICAgKi9cbiAgICBibGFja1doaXRlVHJhbnNmb3JtKHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUpe1xuICAgICAgICBjb25zdCBCbGFja1doaXRlRm4gPSAocGl4ZWwpPT57XG4gICAgICAgICAgICBsZXQgcGl4ZWxWYWx1ZSA9IChwaXhlbFswXSArIHBpeGVsWzFdICtwaXhlbFsyXSkvMztcbiAgICAgICAgICAgIHJldHVybiB+fnBpeGVsVmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yVHJhbnNmb3JtKEJsYWNrV2hpdGVGbiwgc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnM7IiwiY29uc3QgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICAvKipcbiAgICAgKiBTcGxpdCBpbWFnZSBpbnRvIHN1YiBpbWFnZXMgYmFzZWQgb24gc3BsaXQgc2l6ZVxuICAgICAqIEBwYXJhbSB7IEFycmF5fEJ1ZmZlciB9IHNhbXBsZUJ1ZmZlciAtIG9yaWdpbmFsIGltYWdlXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gc3BsaXRTaXplIC0gcG9zaXRpdmUgbnVtYmVyXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IC0gYXJyYXkgb2Ygc3ViIGltYWdlXG4gICAgICovXG4gICAgaW1hZ2VTcGxpdChzYW1wbGVCdWZmZXIsIHNwbGl0U2l6ZSl7XG4gICAgICAgIHJldHVybiB0aGlzLlIuc3BsaXRFdmVyeShzcGxpdFNpemUsIHNhbXBsZUJ1ZmZlcik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTcGxpdHRpbmdNaXhpbnM7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi9jb2xvclRyYW5zZm9ybWluZy5taXhpbnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEltYWdlU3BsaXR0aW5nTWl4aW5zIH0gZnJvbSAnLi9pbWFnZVNwbGl0dGluZy5taXhpbnMnOyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBUb2tlblRyYW5zZm9ybWluZ01peGlucyB9IGZyb20gJy4vdG9rZW5UcmFuc2Zvcm1pbmcubWl4aW5zJzsiLCJjb25zdCBUb2tlblRyYW5zZm9ybWluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIC8qKlxuICAgICAqIHRva2VuaXplZCBzZW50ZW5jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IHNlbnRlbmNlIC0gYXJyYXkgb2Ygc3RyaW5nIHNlbnRlbmNlXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IGFycmF5IG9mIHRva2VuaXplZCBzZW50ZW5jZXNcbiAgICAgKi9cbiAgICB0b2tlbml6ZShzZW50ZW5jZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFRva2VuaXplciA9IHRoaXMudG9rZW5pemVyO1xuICAgICAgICByZXR1cm4gVG9rZW5pemVyLnRva2VuaXplKHNlbnRlbmNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGJhZCB3b3JkcyBmcm9tIHRva2Vuc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2VuXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBiYWRXb3JkTGlzdCAtIEFycmF5IG9mIGJhZCB3b3Jkc1xuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSB0b2tlbnMgd2l0aG91dCBiYWQgd29yZHNcbiAgICAgKi9cbiAgICBiYWRXb3Jkc0ZpbHRlcih0b2tlbnMsIGJhZFdvcmRMaXN0KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuZmlsdGVyKCh0b2tlbik9PlIubm90KFIuZmluZChSLmVxdWFscyh0b2tlbikpKGJhZFdvcmRMaXN0KSksIHRva2Vucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50IG51bWJlciBvZiBhcHBlcmFuY2Ugb2YgZWFjaCB0b2tlbiBpbiB0aGUgdG9rZW4gbGlzdFxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2Vuc1xuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IFtmcmVxQ291bnQ9e31dIC0gb2JqZWMgb3IgcHJldmlvdXMgd29yZEZyZXFDb3VudCwgZW1wdHkgb2JqZWN0IGlmIG5vdCBwcm92aWRlZFxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gLSBqc29uIG9iamVjdCB3aXRoIHRva2VuIGFzIGtleSBhbmQgY291bnRpbmcgbnVtYmVyIGFzIGNvcnJlc3BvbmRpbmcgdmFsdWVcbiAgICAgKi9cbiAgICB3b3JkRnJlcUNvdW50KHRva2VucywgZnJlcUNvdW50PXt9KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVXBkYXRlRnJlcSA9IChmcmVxQ291bnQsIHRva2VuKT0+e1xuICAgICAgICAgICAgaWYoZnJlcUNvdW50W3Rva2VuXSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBmcmVxQ291bnRbdG9rZW5dID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZnJlcUNvdW50W3Rva2VuXSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyZXFDb3VudDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKFVwZGF0ZUZyZXEsIGZyZXFDb3VudCwgdG9rZW5zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGR1cGxpY2F0ZWQgdG9rZW5zXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHdvcmREdXBsaWNhdGVSZW1vdmUodG9rZW5zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIudW5pcSh0b2tlbnMpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBUb2tlblRyYW5zZm9ybWluZ01peGluczsiLCJpbXBvcnQgeyBFdmVudCwgRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgaW5kZXhEQlN0b3JhZ2UsIFN0b3JhZ2VNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgdGVybUxvZ2dlciB9IGZyb20gJ2NhdXNhbC1uZXQubG9nJztcbmNsYXNzIENhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0gZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEV2ZW50LCBcbiAgICBbIFN0b3JhZ2VNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IocHJlcHJvY2Vzc2luZ1N0b3JhZ2UsIGZ1bmN0b3IsIGxvZ2dlcil7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IHByZXByb2Nlc3NpbmdTdG9yYWdlO1xuICAgICAgICB0aGlzLkYgPSBmdW5jdG9yO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nRGF0YSA9IHsgc2FtcGxlczogW10sIGxhYmVsczogW10sIGZpbmlzaGVkOiBmYWxzZSwgdHJhaW5TZXQ6IFtdLCB0ZXN0U2V0OiBbXSB9OyAgXG4gICAgfVxuICAgIGdldCBQcmVwcm9jZXNzaW5nRGF0YSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgVHJhaW5TZXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudHJhaW5TZXQ7XG4gICAgfVxuXG4gICAgZ2V0IFRlc3RTZXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudGVzdFNldDtcbiAgICB9XG4gICAgXG4gICAgc2V0IFNhbXBsZVRyYW5zZm9ybWVyKHNhbXBsZUZuKXtcbiAgICAgICAgdGhpcy5zYW1wbGVGbiA9IHNhbXBsZUZuO1xuICAgIH1cbiAgICBzZXQgTGFiZWxUcmFuc2Zvcm1lcihsYWJlbEZuKXtcbiAgICAgICAgdGhpcy5sYWJlbEZuID0gbGFiZWxGbjtcbiAgICB9XG4gICAgZ2V0IFNhbXBsZVRyYW5zZm9ybWVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnNhbXBsZUZuKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdTYW1wbGVUcmFuc2Zvcm1lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxlRm47XG4gICAgfVxuICAgIGdldCBMYWJlbFRyYW5zZm9ybWVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmxhYmVsRm4pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xhYmVsVHJhbnNmb3JtZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsRm47XG4gICAgfVxuICAgIGdldCBEYXRhSGFuZGxlcigpe1xuICAgICAgICBpZighdGhpcy5kYXRhSGFuZGxlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRGF0YUhhbmRsZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YUhhbmRsZXI7XG4gICAgfVxuXG4gICAgc2V0RGF0YUhhbmRsZXIoKXtcbiAgICAgICAgY29uc3QgRW51bWVyYXRlID0gdGhpcy5GLmVudW1lcmF0ZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhFbnVtZXJhdGUoWzAsMiw0XSkpOy8vVE9ETzogZml4IHRoaXMgZmFpbHVyZVxuICAgICAgICBjb25zdCBTYW1wbGVUcmFuc2Zvcm1lciA9IHRoaXMuU2FtcGxlVHJhbnNmb3JtZXI7XG4gICAgICAgIGNvbnN0IExhYmVsVHJhbnNmb3JtZXIgPSB0aGlzLkxhYmVsVHJhbnNmb3JtZXI7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIHRoaXMuZGF0YUhhbmRsZXIgPSAoZGF0YSk9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgICAgIGxldCBjaHVua05hbWUgPSBkYXRhLkNodW5rTmFtZTtcbiAgICAgICAgICAgICAgICBpZihjaHVua05hbWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChgY2h1bmtOYW1lIGlzIG5vdCBkZWZpbmVkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRhdGEuU2FtcGxlKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZXMgPSBTYW1wbGVUcmFuc2Zvcm1lcihkYXRhLlNhbXBsZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZGVudGl0eSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIHNhbXBsZV0gb2YgdGhpcy5GLmVudW1lcmF0ZShzYW1wbGVzKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZGVudGl0eSA9IGNodW5rTmFtZSArICcvJyArIGlkeDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFN0b3JhZ2Uuc2V0SXRlbSgncHJlcHJvY2Vzc2luZy9zYW1wbGUvJyArIGlkZW50aXR5LCBKU09OLnN0cmluZ2lmeShzYW1wbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEuc2FtcGxlcy5wdXNoKGlkZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRhdGEuTGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxzID0gTGFiZWxUcmFuc2Zvcm1lcihkYXRhLkxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkZW50aXR5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW2lkeCwgbGFiZWxdIG9mIHRoaXMuRi5lbnVtZXJhdGUobGFiZWxzKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZGVudGl0eSA9IGNodW5rTmFtZSArICcvJyArIGlkeDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFN0b3JhZ2Uuc2V0SXRlbSgncHJlcHJvY2Vzc2luZy9sYWJlbC8nICsgaWRlbnRpdHksIEpTT04uc3RyaW5naWZ5KGxhYmVsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLmxhYmVscy5wdXNoKGlkZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSk7IFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uKCdkYXRhJywgdGhpcy5kYXRhSGFuZGxlcik7XG4gICAgfVxuICAgIFxuICAgIHNwbGl0RGF0YXNldCh0cmFpblNpemU9MC45KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICAgICAgLy9UT0RPOiBlbmhhbmNlIHRoaXMgZm9yIGhhbmRsZSBtaXNzaW5nIGRhdGEvbGFiZWwgY2FzZVxuICAgICAgICBsZXQgeyBzYW1wbGVzLCBsYWJlbHMgfSA9IHRoaXMucHJlcHJvY2Vzc2luZ0RhdGE7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5GLnppcChzYW1wbGVzLCBsYWJlbHMpO1xuICAgICAgICBpZih0cmFpblNpemUgPCAxKXtcbiAgICAgICAgICAgIHRyYWluU2l6ZSA9IHBhcnNlSW50KGRhdGEubGVuZ3RoKjAuOSk7XG4gICAgICAgIH0gICAgXG4gICAgICAgIGNvbnN0IFsgdHJhaW5TZXQsIHRlc3RTZXQgXSA9IFIuc3BsaXRBdCh0cmFpblNpemUsIGRhdGEpO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnRyYWluU2V0ID0gdHJhaW5TZXQ7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudGVzdFNldCA9IHRlc3RTZXQ7XG4gICAgICAgIHJldHVybiBbdHJhaW5TZXQsIHRlc3RTZXRdO1xuICAgIH1cbiAgICBtYWtlQmF0Y2hHZW5lcmF0b3IoYmF0Y2hEYXRhKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgbGV0IG5leHRJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IGJhdGNoR2VuZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgIG5leHQ6IGFzeW5jKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZXMgPSBbXSwgbGFiZWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdIG9mIGJhdGNoRGF0YVtuZXh0SW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZVBhdGggPSAncHJlcHJvY2Vzc2luZy9zYW1wbGUvJyArIHNhbXBsZVBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBhdGggPSAncHJlcHJvY2Vzc2luZy9sYWJlbC8nICsgbGFiZWxQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCBTdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgU3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVzID0gWy4uLnNhbXBsZXMsIEpTT04ucGFyc2Uoc2FtcGxlSXRlbVtzYW1wbGVQYXRoXSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzID0gWy4uLmxhYmVscywgSlNPTi5wYXJzZShsYWJlbEl0ZW1bbGFiZWxQYXRoXSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc2FtcGxlcywgbGFiZWxzIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKG5leHRJbmRleCA8IGJhdGNoRGF0YS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYmF0Y2hHZW5lcmF0b3I7XG4gICAgfVxuICAgIGdldCBUcmFpbkRhdGFHZW5lcmF0b3IoKXtcbiAgICAgICAgY29uc3QgVHJhaW5TZXQgPSB0aGlzLlRyYWluU2V0O1xuICAgICAgICBjb25zdCBSID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICByZXR1cm4gKGJhdGNoU2l6ZSk9PntcbiAgICAgICAgICAgIC8vVE9ETzogcGVyZm9ybSBwZXJtdXRhdGVcbiAgICAgICAgICAgIGxldCBiYXRjaERhdGEgPSBSLnNwbGl0RXZlcnkoYmF0Y2hTaXplLCBUcmFpblNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VCYXRjaEdlbmVyYXRvcihiYXRjaERhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9XG4gICAgZ2V0IFRlc3REYXRhR2VuZXJhdG9yKCl7XG4gICAgICAgIGNvbnN0IFRlc3RTZXQgPSB0aGlzLlRlc3RTZXQ7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgICAgIHJldHVybiAoYmF0Y2hTaXplKT0+e1xuICAgICAgICAgICAgLy9UT0RPOiBwZXJmb3JtIHBlcm11dGF0ZVxuICAgICAgICAgICAgbGV0IGJhdGNoRGF0YSA9IFIuc3BsaXRFdmVyeShiYXRjaFNpemUsIFRlc3RTZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUJhdGNoR2VuZXJhdG9yKGJhdGNoRGF0YSk7XG4gICAgICAgIH07XG4gICAgfVxufVxudmFyIGZ1bmN0b3IgPSBuZXcgRnVuY3RvcigpO1xuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0oaW5kZXhEQlN0b3JhZ2UsIGZ1bmN0b3IsIHRlcm1Mb2dnZXIpOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGlucyB9IGZyb20gJy4vSW1hZ2UvaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgSW1hZ2VQcmVwcm9jZXNzaW5nIHByb3ZpZGUgbWV0aG9kcyBmb3IgcHJlcHJvY2Vzc2luZyBpbWFnZSBkYXRhXG4gKiB7IE1peFdpdGg6IFtcbiAqICAgICAgICAgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIEltYWdlU3BsaXR0aW5nTWl4aW5zXG4gKiAgICAgXSB9XG4gKiBAY2xhc3MgSW1hZ2VQcmVwcm9jZXNzaW5nXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3RvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2ltYWdlUHJlcHJvY2Vzc2luZy5iYWJlbC5ub2RlLmpzXVxuICovXG5jbGFzcyBJbWFnZVByZXByb2Nlc3NpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBbXG4gICAgICAgIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBcbiAgICAgICAgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJbWFnZVByZXByb2Nlc3Npbmc7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtIH0gZnJvbSAnLi9jYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJlcHJvY2Vzc2luZ01peGluc30gZnJvbSAnLi9wcmVwcm9jZXNzaW5nLm1peGlucyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW1hZ2VQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9pbWFnZVByZXByb2Nlc3NpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBubHBQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9ubHBQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGFidWxhclByZXByb2Nlc3NpbmcgfSBmcm9tICcuL3RhYnVsYXJQcmVwcm9jZXNzaW5nJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b2tlbml6ZXJFTiB9IGZyb20gJy4vdG9rZW5pemVyLmVuJzsiLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUb2tlblRyYW5zZm9ybWluZ01peGlucyB9IGZyb20gJy4vTkxQL2luZGV4Jztcbi8qKlxuICogVGhpcyBOTFBQcmVwcm9jZXNzaW5nIGNsYXNzIHByb3ZpZGUgbWV0aG9kcyBmb3IgcHJlcHJvY2Vzc2luZyB0ZXh0IGFuZCBvdXRwdXQgdmFsaWQgdG9rZW5zLlxuICogeyBNaXhXaXRoOlxuICogICAgIFsgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgXSkgfVxuICogQGNsYXNzIE5MUFByZXByb2Nlc3NpbmdcbiAqIEBleHRlbmRzIEJhc2VGdW5jdG9yXG4gKiBAZXhhbXBsZVxuICogWyFFWEFNUExFIC4uL2V4YW1wbGVzL25scFByZXByb2Nlc3NpbmcuYmFiZWwubm9kZS5qc11cbiAqL1xuXG5jbGFzcyBOTFBQcmVwcm9jZXNzaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgXG4gICAgWyBUb2tlblRyYW5zZm9ybWluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGluIGNhc2UgdG9rZW5pemVyIHJlcXVpcmVzIGRhdGEgc2V0dXAuXG4gICAgICogQHBhcmFtIHsgVXJsfEZpbGVQYXRoIH0gY29uZmlnTGlua1xuICAgICAqIEBtZW1iZXJvZiBOTFBQcmVwcm9jZXNzaW5nXG4gICAgICovXG4gICAgY29ubmVjdChjb25maWdMaW5rKXtcbiAgICAgICAgdGhpcy50b2tlbml6ZXIuY29ubmVjdChjb25maWdMaW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRva2VuaXplclxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5MUFByZXByb2Nlc3NpbmdcbiAgICAgKi9cbiAgICBnZXQgVG9rZW5pemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnRva2VuaXplcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndG9rZW5pemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbml6ZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0b2tlbml6ZXJcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSB0b2tlbml6ZXIgLSB0b2tlbml6ZXIgb2JqZWN0XG4gICAgICogQG1lbWJlcm9mIE5MUFByZXByb2Nlc3NpbmdcbiAgICAgKi9cbiAgICBzZXQgVG9rZW5pemVyKHRva2VuaXplcil7XG4gICAgICAgIHRoaXMudG9rZW5pemVyID0gdG9rZW5pemVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5MUFByZXByb2Nlc3Npbmc7IiwiY29uc3QgUHJlcHJvY2Vzc2luZ01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBcbiAgICBnZXQgUHJlcHJvY2Vzc2luZygpe1xuICAgICAgICBpZiggIXRoaXMuc3RyZWFtUHJlcHJvY2Vzc2luZyApe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0cmVhbVByZXByb2Nlc3NpbmcgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmVhbVByZXByb2Nlc3Npbmc7XG4gICAgfVxuXG4gICAgc2V0IFByZXByb2Nlc3Npbmcoc3RyZWFtUHJlcHJvY2Vzc2luZyl7XG4gICAgICAgIHRoaXMuc3RyZWFtUHJlcHJvY2Vzc2luZyA9IHN0cmVhbVByZXByb2Nlc3Npbmc7XG4gICAgfVxuXG4gICAgXG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IFNhbXBsZVRyYW5zZm9ybWVyLCBMYWJlbFRyYW5zZm9ybWVyIH0gPSBwaXBlbGluZUNvbmZpZy5EYXRhc2V0LlByZXByb2Nlc3Npbmc7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3ByZXByb2Nlc3NpbmcnKTtcbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nLlNhbXBsZVRyYW5zZm9ybWVyID0gU2FtcGxlVHJhbnNmb3JtZXI7XG4gICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZy5MYWJlbFRyYW5zZm9ybWVyID0gTGFiZWxUcmFuc2Zvcm1lcjtcbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nLnNldERhdGFIYW5kbGVyKCk7XG4gICAgICAgIHBpcGVsaW5lQ29uZmlnLlRyYWluRGF0YUdlbmVyYXRvciA9IHRoaXMuUHJlcHJvY2Vzc2luZy5UcmFpbkRhdGFHZW5lcmF0b3I7XG4gICAgICAgIHBpcGVsaW5lQ29uZmlnLlRlc3REYXRhR2VuZXJhdG9yID0gdGhpcy5QcmVwcm9jZXNzaW5nLlRlc3REYXRhR2VuZXJhdG9yO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgcmV0dXJuIHBpcGVsaW5lQ29uZmlnO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZXByb2Nlc3NpbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgSXRlbU5vcm1hbGl6aW5nLCBOdWxsSXRlbVJlcGxhY2UgfSBmcm9tICcuL1RhYnVsYXIvaW5kZXgnO1xuY2xhc3MgVGFidWxhclByZXByb2Nlc3NpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBcbiAgICBbXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUYWJ1bGFyUHJlcHJvY2Vzc2luZzsiLCIvKipcbiAqIFRoaXMgVG9rZW5pemVyRU4gaXMgYSBzaW1wbGUgaW1wbGVtZW50YXRpb24gZm9yIEVuZ2xpc2ggdG9rZW5pemVyXG4gKiBAdG9kbyBlbmhhbmNlIGl0IHdpdGggZW50aXRpZXMgYW5kIGJ1aWx0LWluIHZvY2FiXG4gKiBAZXhwZXJpbWVudFxuICogQGNsYXNzIFRva2VuaXplckVOXG4gKi9cbmNsYXNzIFRva2VuaXplckVOe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIGNvbm5lY3QoY29uZmlndXJlTGluayl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIHNpbXBsZSBFbmdsaXNoIHRva2VuaXplciBub3QgcmVxdWlyZXMgYWR2YW5jZSBjb25maWd1cmUnKTtcbiAgICB9XG4gICAgdG9rZW5pemUodGV4dCl7XG4gICAgICAgIGNvbnN0IFJlID0gL1tcXHMuXCInL1xcfDs6KClcXFtcXF1cXEBcXCNcXCRcXCZdL2c7XG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFJlKS5maWx0ZXIodG9rZW49PnRva2VuIT09JycpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBUb2tlbml6ZXJFTigpOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sb2dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9