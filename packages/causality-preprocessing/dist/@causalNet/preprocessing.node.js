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
    const Enumerate = val => this.F.enumerate(val); // console.log(Enumerate([0,2,4]));//TODO: fix this failure


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
      Preprocessing
    } = pipelineConfig.Dataset;
    this.Logger.groupBegin('preprocessing');

    if (this.DataSource && Preprocessing) {
      const {
        SampleTransformer,
        LabelTransformer
      } = Preprocessing;
      this.Preprocessing.SampleTransformer = SampleTransformer;
      this.Preprocessing.LabelTransformer = LabelTransformer;
      this.Preprocessing.setDataHandler();
      pipelineConfig.TrainDataGenerator = this.Preprocessing.TrainDataGenerator;
      pipelineConfig.TestDataGenerator = this.Preprocessing.TestDataGenerator;
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9pbWFnZVNwbGl0dGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlblRyYW5zZm9ybWluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2NhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2ltYWdlUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL25scFByZXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3ByZXByb2Nlc3NpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy90YWJ1bGFyUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvdG9rZW5pemVyLmVuLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ0NsYXNzIiwiY29sb3JUcmFuc2Zvcm0iLCJ0cmFuZm9ybUZuIiwic2FtcGxlQnVmZmVyIiwiY2hhbm5lbFNpemUiLCJSIiwiZmxhdHRlbiIsIm1hcCIsInNwbGl0RXZlcnkiLCJibGFja1doaXRlVHJhbnNmb3JtIiwiQmxhY2tXaGl0ZUZuIiwicGl4ZWwiLCJwaXhlbFZhbHVlIiwiSW1hZ2VTcGxpdHRpbmdNaXhpbnMiLCJpbWFnZVNwbGl0Iiwic3BsaXRTaXplIiwiVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMiLCJ0b2tlbml6ZSIsInNlbnRlbmNlIiwiVG9rZW5pemVyIiwidG9rZW5pemVyIiwiYmFkV29yZHNGaWx0ZXIiLCJ0b2tlbnMiLCJiYWRXb3JkTGlzdCIsImZpbHRlciIsInRva2VuIiwibm90IiwiZmluZCIsImVxdWFscyIsIndvcmRGcmVxQ291bnQiLCJmcmVxQ291bnQiLCJVcGRhdGVGcmVxIiwidW5kZWZpbmVkIiwicmVkdWNlIiwid29yZER1cGxpY2F0ZVJlbW92ZSIsInVuaXEiLCJDYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJTdG9yYWdlTWl4aW5zIiwiY29uc3RydWN0b3IiLCJwcmVwcm9jZXNzaW5nU3RvcmFnZSIsImZ1bmN0b3IiLCJsb2dnZXIiLCJTdG9yYWdlIiwiRiIsInByZXByb2Nlc3NpbmdEYXRhIiwic2FtcGxlcyIsImxhYmVscyIsImZpbmlzaGVkIiwidHJhaW5TZXQiLCJ0ZXN0U2V0IiwiUHJlcHJvY2Vzc2luZ0RhdGEiLCJUcmFpblNldCIsIlRlc3RTZXQiLCJTYW1wbGVUcmFuc2Zvcm1lciIsInNhbXBsZUZuIiwiTGFiZWxUcmFuc2Zvcm1lciIsImxhYmVsRm4iLCJFcnJvciIsIkRhdGFIYW5kbGVyIiwiZGF0YUhhbmRsZXIiLCJzZXREYXRhSGFuZGxlciIsIkVudW1lcmF0ZSIsInZhbCIsImVudW1lcmF0ZSIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNodW5rTmFtZSIsIkNodW5rTmFtZSIsIlNhbXBsZSIsImlkZW50aXR5IiwiaWR4Iiwic2FtcGxlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiTGFiZWwiLCJsYWJlbCIsIm9uIiwic3BsaXREYXRhc2V0IiwidHJhaW5TaXplIiwiQ29yZUZ1bmN0b3IiLCJ6aXAiLCJwYXJzZUludCIsImxlbmd0aCIsInNwbGl0QXQiLCJtYWtlQmF0Y2hHZW5lcmF0b3IiLCJiYXRjaERhdGEiLCJuZXh0SW5kZXgiLCJiYXRjaEdlbmVyYXRvciIsIm5leHQiLCJzYW1wbGVQYXRoIiwibGFiZWxQYXRoIiwic2FtcGxlSXRlbSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJwYXJzZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiVHJhaW5EYXRhR2VuZXJhdG9yIiwiYmF0Y2hTaXplIiwiVGVzdERhdGFHZW5lcmF0b3IiLCJGdW5jdG9yIiwiaW5kZXhEQlN0b3JhZ2UiLCJ0ZXJtTG9nZ2VyIiwiSW1hZ2VQcmVwcm9jZXNzaW5nIiwiQmFzZUZ1bmN0b3IiLCJOTFBQcmVwcm9jZXNzaW5nIiwiY29ubmVjdCIsImNvbmZpZ0xpbmsiLCJQcmVwcm9jZXNzaW5nTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJQcmVwcm9jZXNzaW5nIiwic3RyZWFtUHJlcHJvY2Vzc2luZyIsInNldEJ5Q29uZmlnIiwicGlwZWxpbmVDb25maWciLCJEYXRhc2V0IiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIkRhdGFTb3VyY2UiLCJncm91cEVuZCIsIlRhYnVsYXJQcmVwcm9jZXNzaW5nIiwiVG9rZW5pemVyRU4iLCJjb25maWd1cmVMaW5rIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJSZSIsInNwbGl0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBLE1BQU1BLHVCQUF1QixHQUFJQyxrQkFBRCxJQUF3QixjQUFjQSxrQkFBZCxDQUFnQztBQUVwRkMsZ0JBQWMsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLEVBQTJCQyxXQUEzQixFQUF1QztBQUNqRCxV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QlgsaUJBQXREO0FBQ0g7O0FBQ0QsU0FBS2dCLE1BQUwsQ0FBWUcsUUFBWjtBQUNBLFdBQU9MLGNBQVA7QUFDSDs7QUEvQjZFLENBQWxGOztBQWtDZUwsa0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1XLG9CQUFOLFNBQW1DekYseURBQVEsQ0FBQ0MsT0FBVCxDQUFpQnlFLHVEQUFqQixFQUMvQixFQUQrQixDQUFuQyxDQUNPO0FBQ0h0RSxhQUFXLEdBQUU7QUFDVDtBQUNIOztBQUhFOztBQU1RLG1FQUFJcUYsb0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBOzs7Ozs7QUFNQSxNQUFNQyxXQUFOLENBQWlCO0FBQ2J0RixhQUFXLEdBQUUsQ0FDWjs7QUFDRHdFLFNBQU8sQ0FBQ2UsYUFBRCxFQUFlO0FBQ2xCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSw4REFBWjtBQUNIOztBQUNEakgsVUFBUSxDQUFDa0gsSUFBRCxFQUFNO0FBQ1YsVUFBTUMsRUFBRSxHQUFHLDZCQUFYO0FBQ0EsV0FBT0QsSUFBSSxDQUFDRSxLQUFMLENBQVdELEVBQVgsRUFBZTVHLE1BQWYsQ0FBc0JDLEtBQUssSUFBRUEsS0FBSyxLQUFHLEVBQXJDLENBQVA7QUFDSDs7QUFUWTs7QUFXRixtRUFBSXNHLFdBQUosRUFBZixFOzs7Ozs7Ozs7OztBQ2pCQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LmxvZ1wiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sb2dcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmdcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmxvZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICBcbiAgICBjb2xvclRyYW5zZm9ybSh0cmFuZm9ybUZuLCBzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuZmxhdHRlbihSLm1hcCh0cmFuZm9ybUZuLCBSLnNwbGl0RXZlcnkoY2hhbm5lbFNpemUsIHNhbXBsZUJ1ZmZlcikpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIGNvbG9yIGltYWdlIHRvIGJsYWNrIG9uIHdoaXRlIGltYWdlLiBUaGlzIGZ1bmN0aW9uIGFsc28gcmVkdWNlIGNoYW5lbCB0byAxLlxuICAgICAqIEBwYXJhbSB7IEFycmF5fEJ1ZmZlciB9IHNhbXBsZUJ1ZmZlclxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IGNoYW5uZWxTaXplXG4gICAgICogQHJldHVybiB7IEFycmF5IH0gaW1hZ2UgZGF0YSBhZnRlciB0cmFuc2Zvcm1cbiAgICAgKi9cbiAgICBibGFja1doaXRlVHJhbnNmb3JtKHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUpe1xuICAgICAgICBjb25zdCBCbGFja1doaXRlRm4gPSAocGl4ZWwpPT57XG4gICAgICAgICAgICBsZXQgcGl4ZWxWYWx1ZSA9IChwaXhlbFswXSArIHBpeGVsWzFdICtwaXhlbFsyXSkvMztcbiAgICAgICAgICAgIHJldHVybiB+fnBpeGVsVmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yVHJhbnNmb3JtKEJsYWNrV2hpdGVGbiwgc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnM7IiwiY29uc3QgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICAvKipcbiAgICAgKiBTcGxpdCBpbWFnZSBpbnRvIHN1YiBpbWFnZXMgYmFzZWQgb24gc3BsaXQgc2l6ZVxuICAgICAqIEBwYXJhbSB7IEFycmF5fEJ1ZmZlciB9IHNhbXBsZUJ1ZmZlciAtIG9yaWdpbmFsIGltYWdlXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gc3BsaXRTaXplIC0gcG9zaXRpdmUgbnVtYmVyXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IC0gYXJyYXkgb2Ygc3ViIGltYWdlXG4gICAgICovXG4gICAgaW1hZ2VTcGxpdChzYW1wbGVCdWZmZXIsIHNwbGl0U2l6ZSl7XG4gICAgICAgIHJldHVybiB0aGlzLlIuc3BsaXRFdmVyeShzcGxpdFNpemUsIHNhbXBsZUJ1ZmZlcik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTcGxpdHRpbmdNaXhpbnM7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi9jb2xvclRyYW5zZm9ybWluZy5taXhpbnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEltYWdlU3BsaXR0aW5nTWl4aW5zIH0gZnJvbSAnLi9pbWFnZVNwbGl0dGluZy5taXhpbnMnOyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBUb2tlblRyYW5zZm9ybWluZ01peGlucyB9IGZyb20gJy4vdG9rZW5UcmFuc2Zvcm1pbmcubWl4aW5zJzsiLCJjb25zdCBUb2tlblRyYW5zZm9ybWluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIC8qKlxuICAgICAqIHRva2VuaXplZCBzZW50ZW5jZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IHNlbnRlbmNlIC0gYXJyYXkgb2Ygc3RyaW5nIHNlbnRlbmNlXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IGFycmF5IG9mIHRva2VuaXplZCBzZW50ZW5jZXNcbiAgICAgKi9cbiAgICB0b2tlbml6ZShzZW50ZW5jZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFRva2VuaXplciA9IHRoaXMudG9rZW5pemVyO1xuICAgICAgICByZXR1cm4gVG9rZW5pemVyLnRva2VuaXplKHNlbnRlbmNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGJhZCB3b3JkcyBmcm9tIHRva2Vuc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2VuXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBiYWRXb3JkTGlzdCAtIEFycmF5IG9mIGJhZCB3b3Jkc1xuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSB0b2tlbnMgd2l0aG91dCBiYWQgd29yZHNcbiAgICAgKi9cbiAgICBiYWRXb3Jkc0ZpbHRlcih0b2tlbnMsIGJhZFdvcmRMaXN0KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuZmlsdGVyKCh0b2tlbik9PlIubm90KFIuZmluZChSLmVxdWFscyh0b2tlbikpKGJhZFdvcmRMaXN0KSksIHRva2Vucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvdW50IG51bWJlciBvZiBhcHBlcmFuY2Ugb2YgZWFjaCB0b2tlbiBpbiB0aGUgdG9rZW4gbGlzdFxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2Vuc1xuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IFtmcmVxQ291bnQ9e31dIC0gb2JqZWMgb3IgcHJldmlvdXMgd29yZEZyZXFDb3VudCwgZW1wdHkgb2JqZWN0IGlmIG5vdCBwcm92aWRlZFxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gLSBqc29uIG9iamVjdCB3aXRoIHRva2VuIGFzIGtleSBhbmQgY291bnRpbmcgbnVtYmVyIGFzIGNvcnJlc3BvbmRpbmcgdmFsdWVcbiAgICAgKi9cbiAgICB3b3JkRnJlcUNvdW50KHRva2VucywgZnJlcUNvdW50PXt9KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVXBkYXRlRnJlcSA9IChmcmVxQ291bnQsIHRva2VuKT0+e1xuICAgICAgICAgICAgaWYoZnJlcUNvdW50W3Rva2VuXSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBmcmVxQ291bnRbdG9rZW5dID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZnJlcUNvdW50W3Rva2VuXSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyZXFDb3VudDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKFVwZGF0ZUZyZXEsIGZyZXFDb3VudCwgdG9rZW5zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGR1cGxpY2F0ZWQgdG9rZW5zXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHdvcmREdXBsaWNhdGVSZW1vdmUodG9rZW5zKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIudW5pcSh0b2tlbnMpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBUb2tlblRyYW5zZm9ybWluZ01peGluczsiLCJpbXBvcnQgeyBFdmVudCwgRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgaW5kZXhEQlN0b3JhZ2UsIFN0b3JhZ2VNaXhpbnMgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgdGVybUxvZ2dlciB9IGZyb20gJ2NhdXNhbC1uZXQubG9nJztcbmNsYXNzIENhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0gZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEV2ZW50LCBcbiAgICBbIFN0b3JhZ2VNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IocHJlcHJvY2Vzc2luZ1N0b3JhZ2UsIGZ1bmN0b3IsIGxvZ2dlcil7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IHByZXByb2Nlc3NpbmdTdG9yYWdlO1xuICAgICAgICB0aGlzLkYgPSBmdW5jdG9yO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nRGF0YSA9IHsgc2FtcGxlczogW10sIGxhYmVsczogW10sIGZpbmlzaGVkOiBmYWxzZSwgdHJhaW5TZXQ6IFtdLCB0ZXN0U2V0OiBbXSB9OyAgXG4gICAgfVxuICAgIGdldCBQcmVwcm9jZXNzaW5nRGF0YSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgVHJhaW5TZXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudHJhaW5TZXQ7XG4gICAgfVxuXG4gICAgZ2V0IFRlc3RTZXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudGVzdFNldDtcbiAgICB9XG4gICAgXG4gICAgc2V0IFNhbXBsZVRyYW5zZm9ybWVyKHNhbXBsZUZuKXtcbiAgICAgICAgdGhpcy5zYW1wbGVGbiA9IHNhbXBsZUZuO1xuICAgIH1cbiAgICBzZXQgTGFiZWxUcmFuc2Zvcm1lcihsYWJlbEZuKXtcbiAgICAgICAgdGhpcy5sYWJlbEZuID0gbGFiZWxGbjtcbiAgICB9XG4gICAgZ2V0IFNhbXBsZVRyYW5zZm9ybWVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnNhbXBsZUZuKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdTYW1wbGVUcmFuc2Zvcm1lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxlRm47XG4gICAgfVxuICAgIGdldCBMYWJlbFRyYW5zZm9ybWVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmxhYmVsRm4pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0xhYmVsVHJhbnNmb3JtZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsRm47XG4gICAgfVxuICAgIGdldCBEYXRhSGFuZGxlcigpe1xuICAgICAgICBpZighdGhpcy5kYXRhSGFuZGxlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignRGF0YUhhbmRsZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YUhhbmRsZXI7XG4gICAgfVxuXG4gICAgc2V0RGF0YUhhbmRsZXIoKXtcbiAgICAgICAgY29uc3QgRW51bWVyYXRlID0gKHZhbCk9PnRoaXMuRi5lbnVtZXJhdGUodmFsKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coRW51bWVyYXRlKFswLDIsNF0pKTsvL1RPRE86IGZpeCB0aGlzIGZhaWx1cmVcbiAgICAgICAgY29uc3QgU2FtcGxlVHJhbnNmb3JtZXIgPSB0aGlzLlNhbXBsZVRyYW5zZm9ybWVyO1xuICAgICAgICBjb25zdCBMYWJlbFRyYW5zZm9ybWVyID0gdGhpcy5MYWJlbFRyYW5zZm9ybWVyO1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICB0aGlzLmRhdGFIYW5kbGVyID0gKGRhdGEpPT57XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmtOYW1lID0gZGF0YS5DaHVua05hbWU7XG4gICAgICAgICAgICAgICAgaWYoY2h1bmtOYW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoYGNodW5rTmFtZSBpcyBub3QgZGVmaW5lZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihkYXRhLlNhbXBsZSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVzID0gU2FtcGxlVHJhbnNmb3JtZXIoZGF0YS5TYW1wbGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWRlbnRpdHkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbaWR4LCBzYW1wbGVdIG9mIHRoaXMuRi5lbnVtZXJhdGUoc2FtcGxlcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHkgPSBjaHVua05hbWUgKyAnLycgKyBpZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oJ3ByZXByb2Nlc3Npbmcvc2FtcGxlLycgKyBpZGVudGl0eSwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnNhbXBsZXMucHVzaChpZGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihkYXRhLkxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVscyA9IExhYmVsVHJhbnNmb3JtZXIoZGF0YS5MYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZGVudGl0eSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIGxhYmVsXSBvZiB0aGlzLkYuZW51bWVyYXRlKGxhYmVscykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHkgPSBjaHVua05hbWUgKyAnLycgKyBpZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oJ3ByZXByb2Nlc3NpbmcvbGFiZWwvJyArIGlkZW50aXR5LCBKU09OLnN0cmluZ2lmeShsYWJlbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nRGF0YS5sYWJlbHMucHVzaChpZGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbignZGF0YScsIHRoaXMuZGF0YUhhbmRsZXIpO1xuICAgIH1cbiAgICBcbiAgICBzcGxpdERhdGFzZXQodHJhaW5TaXplPTAuOSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgICAgIC8vVE9ETzogZW5oYW5jZSB0aGlzIGZvciBoYW5kbGUgbWlzc2luZyBkYXRhL2xhYmVsIGNhc2VcbiAgICAgICAgbGV0IHsgc2FtcGxlcywgbGFiZWxzIH0gPSB0aGlzLnByZXByb2Nlc3NpbmdEYXRhO1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuRi56aXAoc2FtcGxlcywgbGFiZWxzKTtcbiAgICAgICAgaWYodHJhaW5TaXplIDwgMSl7XG4gICAgICAgICAgICB0cmFpblNpemUgPSBwYXJzZUludChkYXRhLmxlbmd0aCowLjkpO1xuICAgICAgICB9ICAgIFxuICAgICAgICBjb25zdCBbIHRyYWluU2V0LCB0ZXN0U2V0IF0gPSBSLnNwbGl0QXQodHJhaW5TaXplLCBkYXRhKTtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nRGF0YS50cmFpblNldCA9IHRyYWluU2V0O1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnRlc3RTZXQgPSB0ZXN0U2V0O1xuICAgICAgICByZXR1cm4gW3RyYWluU2V0LCB0ZXN0U2V0XTtcbiAgICB9XG4gICAgbWFrZUJhdGNoR2VuZXJhdG9yKGJhdGNoRGF0YSl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIGxldCBuZXh0SW5kZXggPSAwO1xuICAgICAgICBjb25zdCBiYXRjaEdlbmVyYXRvciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiBhc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVzID0gW10sIGxhYmVscyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSBvZiBiYXRjaERhdGFbbmV4dEluZGV4XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVQYXRoID0gJ3ByZXByb2Nlc3Npbmcvc2FtcGxlLycgKyBzYW1wbGVQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQYXRoID0gJ3ByZXByb2Nlc3NpbmcvbGFiZWwvJyArIGxhYmVsUGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVJdGVtID0gYXdhaXQgU3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IFN0b3JhZ2UuZ2V0SXRlbShsYWJlbFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlcyA9IFsuLi5zYW1wbGVzLCBKU09OLnBhcnNlKHNhbXBsZUl0ZW1bc2FtcGxlUGF0aF0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVscyA9IFsuLi5sYWJlbHMsIEpTT04ucGFyc2UobGFiZWxJdGVtW2xhYmVsUGF0aF0pXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXh0SW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHNhbXBsZXMsIGxhYmVscyB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKltTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZShuZXh0SW5kZXggPCBiYXRjaERhdGEubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJhdGNoR2VuZXJhdG9yO1xuICAgIH1cbiAgICBnZXQgVHJhaW5EYXRhR2VuZXJhdG9yKCl7XG4gICAgICAgIGNvbnN0IFRyYWluU2V0ID0gdGhpcy5UcmFpblNldDtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICAgICAgcmV0dXJuIChiYXRjaFNpemUpPT57XG4gICAgICAgICAgICAvL1RPRE86IHBlcmZvcm0gcGVybXV0YXRlXG4gICAgICAgICAgICBsZXQgYmF0Y2hEYXRhID0gUi5zcGxpdEV2ZXJ5KGJhdGNoU2l6ZSwgVHJhaW5TZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlQmF0Y2hHZW5lcmF0b3IoYmF0Y2hEYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfVxuICAgIGdldCBUZXN0RGF0YUdlbmVyYXRvcigpe1xuICAgICAgICBjb25zdCBUZXN0U2V0ID0gdGhpcy5UZXN0U2V0O1xuICAgICAgICBjb25zdCBSID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICByZXR1cm4gKGJhdGNoU2l6ZSk9PntcbiAgICAgICAgICAgIC8vVE9ETzogcGVyZm9ybSBwZXJtdXRhdGVcbiAgICAgICAgICAgIGxldCBiYXRjaERhdGEgPSBSLnNwbGl0RXZlcnkoYmF0Y2hTaXplLCBUZXN0U2V0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VCYXRjaEdlbmVyYXRvcihiYXRjaERhdGEpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbnZhciBmdW5jdG9yID0gbmV3IEZ1bmN0b3IoKTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtKGluZGV4REJTdG9yYWdlLCBmdW5jdG9yLCB0ZXJtTG9nZ2VyKTsiLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBDb2xvclRyYW5zZm9ybWluZ01peGlucywgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgfSBmcm9tICcuL0ltYWdlL2luZGV4JztcblxuLyoqXG4gKiBUaGlzIEltYWdlUHJlcHJvY2Vzc2luZyBwcm92aWRlIG1ldGhvZHMgZm9yIHByZXByb2Nlc3NpbmcgaW1hZ2UgZGF0YVxuICogeyBNaXhXaXRoOiBbXG4gKiAgICAgICAgIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGluc1xuICogICAgIF0gfVxuICogQGNsYXNzIEltYWdlUHJlcHJvY2Vzc2luZ1xuICogQGV4dGVuZHMgQmFzZUZ1bmN0b3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9pbWFnZVByZXByb2Nlc3NpbmcuYmFiZWwubm9kZS5qc11cbiAqL1xuY2xhc3MgSW1hZ2VQcmVwcm9jZXNzaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgW1xuICAgICAgICBDb2xvclRyYW5zZm9ybWluZ01peGlucywgXG4gICAgICAgIEltYWdlU3BsaXR0aW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSW1hZ2VQcmVwcm9jZXNzaW5nOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSB9IGZyb20gJy4vY2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByZXByb2Nlc3NpbmdNaXhpbnN9IGZyb20gJy4vcHJlcHJvY2Vzc2luZy5taXhpbnMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGltYWdlUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vaW1hZ2VQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbmxwUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vbmxwUHJlcHJvY2Vzc2luZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHRhYnVsYXJQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi90YWJ1bGFyUHJlcHJvY2Vzc2luZyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9rZW5pemVyRU4gfSBmcm9tICcuL3Rva2VuaXplci5lbic7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL05MUC9pbmRleCc7XG4vKipcbiAqIFRoaXMgTkxQUHJlcHJvY2Vzc2luZyBjbGFzcyBwcm92aWRlIG1ldGhvZHMgZm9yIHByZXByb2Nlc3NpbmcgdGV4dCBhbmQgb3V0cHV0IHZhbGlkIHRva2Vucy5cbiAqIHsgTWl4V2l0aDpcbiAqICAgICBbIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIF0pIH1cbiAqIEBjbGFzcyBOTFBQcmVwcm9jZXNzaW5nXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3RvclxuICogQGV4YW1wbGVcbiAqIFshRVhBTVBMRSAuLi9leGFtcGxlcy9ubHBQcmVwcm9jZXNzaW5nLmJhYmVsLm5vZGUuanNdXG4gKi9cblxuY2xhc3MgTkxQUHJlcHJvY2Vzc2luZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFxuICAgIFsgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBpbiBjYXNlIHRva2VuaXplciByZXF1aXJlcyBkYXRhIHNldHVwLlxuICAgICAqIEBwYXJhbSB7IFVybHxGaWxlUGF0aCB9IGNvbmZpZ0xpbmtcbiAgICAgKiBAbWVtYmVyb2YgTkxQUHJlcHJvY2Vzc2luZ1xuICAgICAqL1xuICAgIGNvbm5lY3QoY29uZmlnTGluayl7XG4gICAgICAgIHRoaXMudG9rZW5pemVyLmNvbm5lY3QoY29uZmlnTGluayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0b2tlbml6ZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOTFBQcmVwcm9jZXNzaW5nXG4gICAgICovXG4gICAgZ2V0IFRva2VuaXplcigpe1xuICAgICAgICBpZighdGhpcy50b2tlbml6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3Rva2VuaXplciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5pemVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdG9rZW5pemVyXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gdG9rZW5pemVyIC0gdG9rZW5pemVyIG9iamVjdFxuICAgICAqIEBtZW1iZXJvZiBOTFBQcmVwcm9jZXNzaW5nXG4gICAgICovXG4gICAgc2V0IFRva2VuaXplcih0b2tlbml6ZXIpe1xuICAgICAgICB0aGlzLnRva2VuaXplciA9IHRva2VuaXplcjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOTFBQcmVwcm9jZXNzaW5nOyIsImNvbnN0IFByZXByb2Nlc3NpbmdNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgXG4gICAgZ2V0IFByZXByb2Nlc3NpbmcoKXtcbiAgICAgICAgaWYoICF0aGlzLnN0cmVhbVByZXByb2Nlc3NpbmcgKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzdHJlYW1QcmVwcm9jZXNzaW5nIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW1QcmVwcm9jZXNzaW5nO1xuICAgIH1cblxuICAgIHNldCBQcmVwcm9jZXNzaW5nKHN0cmVhbVByZXByb2Nlc3Npbmcpe1xuICAgICAgICB0aGlzLnN0cmVhbVByZXByb2Nlc3NpbmcgPSBzdHJlYW1QcmVwcm9jZXNzaW5nO1xuICAgIH1cblxuICAgIFxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBQcmVwcm9jZXNzaW5nIH0gPSBwaXBlbGluZUNvbmZpZy5EYXRhc2V0O1xuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdwcmVwcm9jZXNzaW5nJyk7XG4gICAgICAgIGlmKHRoaXMuRGF0YVNvdXJjZSAmJiBQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgIGNvbnN0IHsgU2FtcGxlVHJhbnNmb3JtZXIsIExhYmVsVHJhbnNmb3JtZXIgfSA9IFByZXByb2Nlc3Npbmc7XG4gICAgICAgICAgICB0aGlzLlByZXByb2Nlc3NpbmcuU2FtcGxlVHJhbnNmb3JtZXIgPSBTYW1wbGVUcmFuc2Zvcm1lcjtcbiAgICAgICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZy5MYWJlbFRyYW5zZm9ybWVyID0gTGFiZWxUcmFuc2Zvcm1lcjtcbiAgICAgICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZy5zZXREYXRhSGFuZGxlcigpO1xuICAgICAgICAgICAgcGlwZWxpbmVDb25maWcuVHJhaW5EYXRhR2VuZXJhdG9yID0gdGhpcy5QcmVwcm9jZXNzaW5nLlRyYWluRGF0YUdlbmVyYXRvcjtcbiAgICAgICAgICAgIHBpcGVsaW5lQ29uZmlnLlRlc3REYXRhR2VuZXJhdG9yID0gdGhpcy5QcmVwcm9jZXNzaW5nLlRlc3REYXRhR2VuZXJhdG9yO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBwaXBlbGluZUNvbmZpZztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmVwcm9jZXNzaW5nTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IEl0ZW1Ob3JtYWxpemluZywgTnVsbEl0ZW1SZXBsYWNlIH0gZnJvbSAnLi9UYWJ1bGFyL2luZGV4JztcbmNsYXNzIFRhYnVsYXJQcmVwcm9jZXNzaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgXG4gICAgW10pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFidWxhclByZXByb2Nlc3Npbmc7IiwiLyoqXG4gKiBUaGlzIFRva2VuaXplckVOIGlzIGEgc2ltcGxlIGltcGxlbWVudGF0aW9uIGZvciBFbmdsaXNoIHRva2VuaXplclxuICogQHRvZG8gZW5oYW5jZSBpdCB3aXRoIGVudGl0aWVzIGFuZCBidWlsdC1pbiB2b2NhYlxuICogQGV4cGVyaW1lbnRcbiAqIEBjbGFzcyBUb2tlbml6ZXJFTlxuICovXG5jbGFzcyBUb2tlbml6ZXJFTntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cbiAgICBjb25uZWN0KGNvbmZpZ3VyZUxpbmspe1xuICAgICAgICBjb25zb2xlLmxvZygnVGhpcyBzaW1wbGUgRW5nbGlzaCB0b2tlbml6ZXIgbm90IHJlcXVpcmVzIGFkdmFuY2UgY29uZmlndXJlJyk7XG4gICAgfVxuICAgIHRva2VuaXplKHRleHQpe1xuICAgICAgICBjb25zdCBSZSA9IC9bXFxzLlwiJy9cXHw7OigpXFxbXFxdXFxAXFwjXFwkXFwmXS9nO1xuICAgICAgICByZXR1cm4gdGV4dC5zcGxpdChSZSkuZmlsdGVyKHRva2VuPT50b2tlbiE9PScnKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgVG9rZW5pemVyRU4oKTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbG9nX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==