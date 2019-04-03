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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9pbWFnZVNwbGl0dGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlblRyYW5zZm9ybWluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2NhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2ltYWdlUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL25scFByZXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3ByZXByb2Nlc3NpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy90YWJ1bGFyUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvdG9rZW5pemVyLmVuLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQubG9nXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ0NsYXNzIiwiY29sb3JUcmFuc2Zvcm0iLCJ0cmFuZm9ybUZuIiwic2FtcGxlQnVmZmVyIiwiY2hhbm5lbFNpemUiLCJSIiwiZmxhdHRlbiIsIm1hcCIsInNwbGl0RXZlcnkiLCJibGFja1doaXRlVHJhbnNmb3JtIiwiQmxhY2tXaGl0ZUZuIiwicGl4ZWwiLCJwaXhlbFZhbHVlIiwiSW1hZ2VTcGxpdHRpbmdNaXhpbnMiLCJpbWFnZVNwbGl0Iiwic3BsaXRTaXplIiwiVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMiLCJ0b2tlbml6ZSIsInNlbnRlbmNlIiwiVG9rZW5pemVyIiwidG9rZW5pemVyIiwiYmFkV29yZHNGaWx0ZXIiLCJ0b2tlbnMiLCJiYWRXb3JkTGlzdCIsImZpbHRlciIsInRva2VuIiwibm90IiwiZmluZCIsImVxdWFscyIsIndvcmRGcmVxQ291bnQiLCJmcmVxQ291bnQiLCJVcGRhdGVGcmVxIiwidW5kZWZpbmVkIiwicmVkdWNlIiwid29yZER1cGxpY2F0ZVJlbW92ZSIsInVuaXEiLCJDYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJTdG9yYWdlTWl4aW5zIiwiY29uc3RydWN0b3IiLCJwcmVwcm9jZXNzaW5nU3RvcmFnZSIsImZ1bmN0b3IiLCJsb2dnZXIiLCJTdG9yYWdlIiwiRiIsInByZXByb2Nlc3NpbmdEYXRhIiwic2FtcGxlcyIsImxhYmVscyIsImZpbmlzaGVkIiwidHJhaW5TZXQiLCJ0ZXN0U2V0IiwiUHJlcHJvY2Vzc2luZ0RhdGEiLCJUcmFpblNldCIsIlRlc3RTZXQiLCJTYW1wbGVUcmFuc2Zvcm1lciIsInNhbXBsZUZuIiwiTGFiZWxUcmFuc2Zvcm1lciIsImxhYmVsRm4iLCJFcnJvciIsIkRhdGFIYW5kbGVyIiwiZGF0YUhhbmRsZXIiLCJzZXREYXRhSGFuZGxlciIsIkVudW1lcmF0ZSIsInZhbCIsImVudW1lcmF0ZSIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNodW5rTmFtZSIsIkNodW5rTmFtZSIsIlNhbXBsZSIsImlkZW50aXR5IiwiaWR4Iiwic2FtcGxlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwdXNoIiwiTGFiZWwiLCJsYWJlbCIsIm9uIiwic3BsaXREYXRhc2V0IiwidHJhaW5TaXplIiwiQ29yZUZ1bmN0b3IiLCJ6aXAiLCJwYXJzZUludCIsImxlbmd0aCIsInNwbGl0QXQiLCJtYWtlQmF0Y2hHZW5lcmF0b3IiLCJiYXRjaERhdGEiLCJuZXh0SW5kZXgiLCJiYXRjaEdlbmVyYXRvciIsIm5leHQiLCJzYW1wbGVQYXRoIiwibGFiZWxQYXRoIiwic2FtcGxlSXRlbSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJwYXJzZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiVHJhaW5EYXRhR2VuZXJhdG9yIiwiYmF0Y2hTaXplIiwiVGVzdERhdGFHZW5lcmF0b3IiLCJGdW5jdG9yIiwiaW5kZXhEQlN0b3JhZ2UiLCJ0ZXJtTG9nZ2VyIiwiSW1hZ2VQcmVwcm9jZXNzaW5nIiwiQmFzZUZ1bmN0b3IiLCJOTFBQcmVwcm9jZXNzaW5nIiwiY29ubmVjdCIsImNvbmZpZ0xpbmsiLCJQcmVwcm9jZXNzaW5nTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJQcmVwcm9jZXNzaW5nIiwic3RyZWFtUHJlcHJvY2Vzc2luZyIsInNldEJ5Q29uZmlnIiwicGlwZWxpbmVDb25maWciLCJEYXRhc2V0IiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIkRhdGFTb3VyY2UiLCJncm91cEVuZCIsIlRhYnVsYXJQcmVwcm9jZXNzaW5nIiwiVG9rZW5pemVyRU4iLCJjb25maWd1cmVMaW5rIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJSZSIsInNwbGl0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBLE1BQU1BLHVCQUF1QixHQUFJQyxrQkFBRCxJQUF3QixjQUFjQSxrQkFBZCxDQUFnQztBQUVwRkMsZ0JBQWMsQ0FBQ0MsVUFBRCxFQUFhQyxZQUFiLEVBQTJCQyxXQUEzQixFQUF1QztBQUNqRCxV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QlgsaUJBQXREO0FBQ0g7O0FBQ0QsU0FBS2dCLE1BQUwsQ0FBWUcsUUFBWjtBQUNBLFdBQU9MLGNBQVA7QUFDSDs7QUEvQjZFLENBQWxGOztBQWtDZUwsa0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1XLG9CQUFOLFNBQW1DekYseURBQVEsQ0FBQ0MsT0FBVCxDQUFpQnlFLHVEQUFqQixFQUMvQixFQUQrQixDQUFuQyxDQUNPO0FBQ0h0RSxhQUFXLEdBQUU7QUFDVDtBQUNIOztBQUhFOztBQU1RLG1FQUFJcUYsb0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBOzs7Ozs7QUFNQSxNQUFNQyxXQUFOLENBQWlCO0FBQ2J0RixhQUFXLEdBQUUsQ0FDWjs7QUFDRHdFLFNBQU8sQ0FBQ2UsYUFBRCxFQUFlO0FBQ2xCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSw4REFBWjtBQUNIOztBQUNEakgsVUFBUSxDQUFDa0gsSUFBRCxFQUFNO0FBQ1YsVUFBTUMsRUFBRSxHQUFHLDZCQUFYO0FBQ0EsV0FBT0QsSUFBSSxDQUFDRSxLQUFMLENBQVdELEVBQVgsRUFBZTVHLE1BQWYsQ0FBc0JDLEtBQUssSUFBRUEsS0FBSyxLQUFHLEVBQXJDLENBQVA7QUFDSDs7QUFUWTs7QUFXRixtRUFBSXNHLFdBQUosRUFBZixFOzs7Ozs7Ozs7OztBQ2pCQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sb2dcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQubG9nXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmdcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmxvZ1wiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQubG9nXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbG9nX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBDb2xvclRyYW5zZm9ybWluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIFxuICAgIGNvbG9yVHJhbnNmb3JtKHRyYW5mb3JtRm4sIHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5mbGF0dGVuKFIubWFwKHRyYW5mb3JtRm4sIFIuc3BsaXRFdmVyeShjaGFubmVsU2l6ZSwgc2FtcGxlQnVmZmVyKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gY29sb3IgaW1hZ2UgdG8gYmxhY2sgb24gd2hpdGUgaW1hZ2UuIFRoaXMgZnVuY3Rpb24gYWxzbyByZWR1Y2UgY2hhbmVsIHRvIDEuXG4gICAgICogQHBhcmFtIHsgQXJyYXl8QnVmZmVyIH0gc2FtcGxlQnVmZmVyXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gY2hhbm5lbFNpemVcbiAgICAgKiBAcmV0dXJuIHsgQXJyYXkgfSBpbWFnZSBkYXRhIGFmdGVyIHRyYW5zZm9ybVxuICAgICAqL1xuICAgIGJsYWNrV2hpdGVUcmFuc2Zvcm0oc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSl7XG4gICAgICAgIGNvbnN0IEJsYWNrV2hpdGVGbiA9IChwaXhlbCk9PntcbiAgICAgICAgICAgIGxldCBwaXhlbFZhbHVlID0gKHBpeGVsWzBdICsgcGl4ZWxbMV0gK3BpeGVsWzJdKS8zO1xuICAgICAgICAgICAgcmV0dXJuIH5+cGl4ZWxWYWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JUcmFuc2Zvcm0oQmxhY2tXaGl0ZUZuLCBzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclRyYW5zZm9ybWluZ01peGluczsiLCJjb25zdCBJbWFnZVNwbGl0dGluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIC8qKlxuICAgICAqIFNwbGl0IGltYWdlIGludG8gc3ViIGltYWdlcyBiYXNlZCBvbiBzcGxpdCBzaXplXG4gICAgICogQHBhcmFtIHsgQXJyYXl8QnVmZmVyIH0gc2FtcGxlQnVmZmVyIC0gb3JpZ2luYWwgaW1hZ2VcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBzcGxpdFNpemUgLSBwb3NpdGl2ZSBudW1iZXJcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gLSBhcnJheSBvZiBzdWIgaW1hZ2VcbiAgICAgKi9cbiAgICBpbWFnZVNwbGl0KHNhbXBsZUJ1ZmZlciwgc3BsaXRTaXplKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5zcGxpdEV2ZXJ5KHNwbGl0U2l6ZSwgc2FtcGxlQnVmZmVyKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNwbGl0dGluZ01peGluczsiLCJleHBvcnQge2RlZmF1bHQgYXMgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL2NvbG9yVHJhbnNmb3JtaW5nLm1peGlucyc7XG5leHBvcnQge2RlZmF1bHQgYXMgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgfSBmcm9tICcuL2ltYWdlU3BsaXR0aW5nLm1peGlucyc7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi90b2tlblRyYW5zZm9ybWluZy5taXhpbnMnOyIsImNvbnN0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogdG9rZW5pemVkIHNlbnRlbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gc2VudGVuY2UgLSBhcnJheSBvZiBzdHJpbmcgc2VudGVuY2VcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2YgdG9rZW5pemVkIHNlbnRlbmNlc1xuICAgICAqL1xuICAgIHRva2VuaXplKHNlbnRlbmNlKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgVG9rZW5pemVyID0gdGhpcy50b2tlbml6ZXI7XG4gICAgICAgIHJldHVybiBUb2tlbml6ZXIudG9rZW5pemUoc2VudGVuY2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYmFkIHdvcmRzIGZyb20gdG9rZW5zXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5cbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IGJhZFdvcmRMaXN0IC0gQXJyYXkgb2YgYmFkIHdvcmRzXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHRva2VucyB3aXRob3V0IGJhZCB3b3Jkc1xuICAgICAqL1xuICAgIGJhZFdvcmRzRmlsdGVyKHRva2VucywgYmFkV29yZExpc3Qpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5maWx0ZXIoKHRva2VuKT0+Ui5ub3QoUi5maW5kKFIuZXF1YWxzKHRva2VuKSkoYmFkV29yZExpc3QpKSwgdG9rZW5zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ291bnQgbnVtYmVyIG9mIGFwcGVyYW5jZSBvZiBlYWNoIHRva2VuIGluIHRoZSB0b2tlbiBsaXN0XG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5zXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gW2ZyZXFDb3VudD17fV0gLSBvYmplYyBvciBwcmV2aW91cyB3b3JkRnJlcUNvdW50LCBlbXB0eSBvYmplY3QgaWYgbm90IHByb3ZpZGVkXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSAtIGpzb24gb2JqZWN0IHdpdGggdG9rZW4gYXMga2V5IGFuZCBjb3VudGluZyBudW1iZXIgYXMgY29ycmVzcG9uZGluZyB2YWx1ZVxuICAgICAqL1xuICAgIHdvcmRGcmVxQ291bnQodG9rZW5zLCBmcmVxQ291bnQ9e30pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBVcGRhdGVGcmVxID0gKGZyZXFDb3VudCwgdG9rZW4pPT57XG4gICAgICAgICAgICBpZihmcmVxQ291bnRbdG9rZW5dID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGZyZXFDb3VudFt0b2tlbl0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBmcmVxQ291bnRbdG9rZW5dICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJlcUNvdW50O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoVXBkYXRlRnJlcSwgZnJlcUNvdW50LCB0b2tlbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZHVwbGljYXRlZCB0b2tlbnNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGFycmF5IG9mIHN0cmluZyB0b2tlblxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgd29yZER1cGxpY2F0ZVJlbW92ZSh0b2tlbnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi51bmlxKHRva2Vucyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zOyIsImltcG9ydCB7IEV2ZW50LCBGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBpbmRleERCU3RvcmFnZSwgU3RvcmFnZU1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyB0ZXJtTG9nZ2VyIH0gZnJvbSAnY2F1c2FsLW5ldC5sb2cnO1xuY2xhc3MgQ2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoRXZlbnQsIFxuICAgIFsgU3RvcmFnZU1peGlucyBdKXtcbiAgICBjb25zdHJ1Y3RvcihwcmVwcm9jZXNzaW5nU3RvcmFnZSwgZnVuY3RvciwgbG9nZ2VyKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gcHJlcHJvY2Vzc2luZ1N0b3JhZ2U7XG4gICAgICAgIHRoaXMuRiA9IGZ1bmN0b3I7XG4gICAgICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhID0geyBzYW1wbGVzOiBbXSwgbGFiZWxzOiBbXSwgZmluaXNoZWQ6IGZhbHNlLCB0cmFpblNldDogW10sIHRlc3RTZXQ6IFtdIH07ICBcbiAgICB9XG4gICAgZ2V0IFByZXByb2Nlc3NpbmdEYXRhKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NpbmdEYXRhO1xuICAgIH1cblxuICAgIGdldCBUcmFpblNldCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nRGF0YS50cmFpblNldDtcbiAgICB9XG5cbiAgICBnZXQgVGVzdFNldCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nRGF0YS50ZXN0U2V0O1xuICAgIH1cbiAgICBcbiAgICBzZXQgU2FtcGxlVHJhbnNmb3JtZXIoc2FtcGxlRm4pe1xuICAgICAgICB0aGlzLnNhbXBsZUZuID0gc2FtcGxlRm47XG4gICAgfVxuICAgIHNldCBMYWJlbFRyYW5zZm9ybWVyKGxhYmVsRm4pe1xuICAgICAgICB0aGlzLmxhYmVsRm4gPSBsYWJlbEZuO1xuICAgIH1cbiAgICBnZXQgU2FtcGxlVHJhbnNmb3JtZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuc2FtcGxlRm4pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1NhbXBsZVRyYW5zZm9ybWVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zYW1wbGVGbjtcbiAgICB9XG4gICAgZ2V0IExhYmVsVHJhbnNmb3JtZXIoKXtcbiAgICAgICAgaWYoIXRoaXMubGFiZWxGbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignTGFiZWxUcmFuc2Zvcm1lciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubGFiZWxGbjtcbiAgICB9XG4gICAgZ2V0IERhdGFIYW5kbGVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmRhdGFIYW5kbGVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdEYXRhSGFuZGxlciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhSGFuZGxlcjtcbiAgICB9XG5cbiAgICBzZXREYXRhSGFuZGxlcigpe1xuICAgICAgICBjb25zdCBFbnVtZXJhdGUgPSAodmFsKT0+dGhpcy5GLmVudW1lcmF0ZSh2YWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhFbnVtZXJhdGUoWzAsMiw0XSkpOy8vVE9ETzogZml4IHRoaXMgZmFpbHVyZVxuICAgICAgICBjb25zdCBTYW1wbGVUcmFuc2Zvcm1lciA9IHRoaXMuU2FtcGxlVHJhbnNmb3JtZXI7XG4gICAgICAgIGNvbnN0IExhYmVsVHJhbnNmb3JtZXIgPSB0aGlzLkxhYmVsVHJhbnNmb3JtZXI7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIHRoaXMuZGF0YUhhbmRsZXIgPSAoZGF0YSk9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgICAgIGxldCBjaHVua05hbWUgPSBkYXRhLkNodW5rTmFtZTtcbiAgICAgICAgICAgICAgICBpZihjaHVua05hbWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChgY2h1bmtOYW1lIGlzIG5vdCBkZWZpbmVkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRhdGEuU2FtcGxlKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZXMgPSBTYW1wbGVUcmFuc2Zvcm1lcihkYXRhLlNhbXBsZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZGVudGl0eSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIHNhbXBsZV0gb2YgdGhpcy5GLmVudW1lcmF0ZShzYW1wbGVzKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZGVudGl0eSA9IGNodW5rTmFtZSArICcvJyArIGlkeDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFN0b3JhZ2Uuc2V0SXRlbSgncHJlcHJvY2Vzc2luZy9zYW1wbGUvJyArIGlkZW50aXR5LCBKU09OLnN0cmluZ2lmeShzYW1wbGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEuc2FtcGxlcy5wdXNoKGlkZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRhdGEuTGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxzID0gTGFiZWxUcmFuc2Zvcm1lcihkYXRhLkxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkZW50aXR5ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW2lkeCwgbGFiZWxdIG9mIHRoaXMuRi5lbnVtZXJhdGUobGFiZWxzKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZGVudGl0eSA9IGNodW5rTmFtZSArICcvJyArIGlkeDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFN0b3JhZ2Uuc2V0SXRlbSgncHJlcHJvY2Vzc2luZy9sYWJlbC8nICsgaWRlbnRpdHksIEpTT04uc3RyaW5naWZ5KGxhYmVsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLmxhYmVscy5wdXNoKGlkZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSk7IFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9uKCdkYXRhJywgdGhpcy5kYXRhSGFuZGxlcik7XG4gICAgfVxuICAgIFxuICAgIHNwbGl0RGF0YXNldCh0cmFpblNpemU9MC45KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICAgICAgLy9UT0RPOiBlbmhhbmNlIHRoaXMgZm9yIGhhbmRsZSBtaXNzaW5nIGRhdGEvbGFiZWwgY2FzZVxuICAgICAgICBsZXQgeyBzYW1wbGVzLCBsYWJlbHMgfSA9IHRoaXMucHJlcHJvY2Vzc2luZ0RhdGE7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5GLnppcChzYW1wbGVzLCBsYWJlbHMpO1xuICAgICAgICBpZih0cmFpblNpemUgPCAxKXtcbiAgICAgICAgICAgIHRyYWluU2l6ZSA9IHBhcnNlSW50KGRhdGEubGVuZ3RoKjAuOSk7XG4gICAgICAgIH0gICAgXG4gICAgICAgIGNvbnN0IFsgdHJhaW5TZXQsIHRlc3RTZXQgXSA9IFIuc3BsaXRBdCh0cmFpblNpemUsIGRhdGEpO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnRyYWluU2V0ID0gdHJhaW5TZXQ7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudGVzdFNldCA9IHRlc3RTZXQ7XG4gICAgICAgIHJldHVybiBbdHJhaW5TZXQsIHRlc3RTZXRdO1xuICAgIH1cbiAgICBtYWtlQmF0Y2hHZW5lcmF0b3IoYmF0Y2hEYXRhKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgbGV0IG5leHRJbmRleCA9IDA7XG4gICAgICAgIGNvbnN0IGJhdGNoR2VuZXJhdG9yID0ge1xuICAgICAgICAgICAgICAgIG5leHQ6IGFzeW5jKCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZXMgPSBbXSwgbGFiZWxzID0gW107XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtzYW1wbGVQYXRoLCBsYWJlbFBhdGhdIG9mIGJhdGNoRGF0YVtuZXh0SW5kZXhdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZVBhdGggPSAncHJlcHJvY2Vzc2luZy9zYW1wbGUvJyArIHNhbXBsZVBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBhdGggPSAncHJlcHJvY2Vzc2luZy9sYWJlbC8nICsgbGFiZWxQYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCBTdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWxJdGVtID0gYXdhaXQgU3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVzID0gWy4uLnNhbXBsZXMsIEpTT04ucGFyc2Uoc2FtcGxlSXRlbVtzYW1wbGVQYXRoXSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxzID0gWy4uLmxhYmVscywgSlNPTi5wYXJzZShsYWJlbEl0ZW1bbGFiZWxQYXRoXSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc2FtcGxlcywgbGFiZWxzIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKG5leHRJbmRleCA8IGJhdGNoRGF0YS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYmF0Y2hHZW5lcmF0b3I7XG4gICAgfVxuICAgIGdldCBUcmFpbkRhdGFHZW5lcmF0b3IoKXtcbiAgICAgICAgY29uc3QgVHJhaW5TZXQgPSB0aGlzLlRyYWluU2V0O1xuICAgICAgICBjb25zdCBSID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICByZXR1cm4gKGJhdGNoU2l6ZSk9PntcbiAgICAgICAgICAgIC8vVE9ETzogcGVyZm9ybSBwZXJtdXRhdGVcbiAgICAgICAgICAgIGxldCBiYXRjaERhdGEgPSBSLnNwbGl0RXZlcnkoYmF0Y2hTaXplLCBUcmFpblNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1ha2VCYXRjaEdlbmVyYXRvcihiYXRjaERhdGEpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9XG4gICAgZ2V0IFRlc3REYXRhR2VuZXJhdG9yKCl7XG4gICAgICAgIGNvbnN0IFRlc3RTZXQgPSB0aGlzLlRlc3RTZXQ7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgICAgIHJldHVybiAoYmF0Y2hTaXplKT0+e1xuICAgICAgICAgICAgLy9UT0RPOiBwZXJmb3JtIHBlcm11dGF0ZVxuICAgICAgICAgICAgbGV0IGJhdGNoRGF0YSA9IFIuc3BsaXRFdmVyeShiYXRjaFNpemUsIFRlc3RTZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUJhdGNoR2VuZXJhdG9yKGJhdGNoRGF0YSk7XG4gICAgICAgIH07XG4gICAgfVxufVxudmFyIGZ1bmN0b3IgPSBuZXcgRnVuY3RvcigpO1xuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0oaW5kZXhEQlN0b3JhZ2UsIGZ1bmN0b3IsIHRlcm1Mb2dnZXIpOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGlucyB9IGZyb20gJy4vSW1hZ2UvaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgSW1hZ2VQcmVwcm9jZXNzaW5nIHByb3ZpZGUgbWV0aG9kcyBmb3IgcHJlcHJvY2Vzc2luZyBpbWFnZSBkYXRhXG4gKiB7IE1peFdpdGg6IFtcbiAqICAgICAgICAgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIEltYWdlU3BsaXR0aW5nTWl4aW5zXG4gKiAgICAgXSB9XG4gKiBAY2xhc3MgSW1hZ2VQcmVwcm9jZXNzaW5nXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3RvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2ltYWdlUHJlcHJvY2Vzc2luZy5iYWJlbC5ub2RlLmpzXVxuICovXG5jbGFzcyBJbWFnZVByZXByb2Nlc3NpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBbXG4gICAgICAgIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBcbiAgICAgICAgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJbWFnZVByZXByb2Nlc3Npbmc7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtIH0gZnJvbSAnLi9jYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJlcHJvY2Vzc2luZ01peGluc30gZnJvbSAnLi9wcmVwcm9jZXNzaW5nLm1peGlucyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW1hZ2VQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9pbWFnZVByZXByb2Nlc3NpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBubHBQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9ubHBQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGFidWxhclByZXByb2Nlc3NpbmcgfSBmcm9tICcuL3RhYnVsYXJQcmVwcm9jZXNzaW5nJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0b2tlbml6ZXJFTiB9IGZyb20gJy4vdG9rZW5pemVyLmVuJzsiLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUb2tlblRyYW5zZm9ybWluZ01peGlucyB9IGZyb20gJy4vTkxQL2luZGV4Jztcbi8qKlxuICogVGhpcyBOTFBQcmVwcm9jZXNzaW5nIGNsYXNzIHByb3ZpZGUgbWV0aG9kcyBmb3IgcHJlcHJvY2Vzc2luZyB0ZXh0IGFuZCBvdXRwdXQgdmFsaWQgdG9rZW5zLlxuICogeyBNaXhXaXRoOlxuICogICAgIFsgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgXSkgfVxuICogQGNsYXNzIE5MUFByZXByb2Nlc3NpbmdcbiAqIEBleHRlbmRzIEJhc2VGdW5jdG9yXG4gKiBAZXhhbXBsZVxuICogWyFFWEFNUExFIC4uL2V4YW1wbGVzL25scFByZXByb2Nlc3NpbmcuYmFiZWwubm9kZS5qc11cbiAqL1xuXG5jbGFzcyBOTFBQcmVwcm9jZXNzaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgXG4gICAgWyBUb2tlblRyYW5zZm9ybWluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGluIGNhc2UgdG9rZW5pemVyIHJlcXVpcmVzIGRhdGEgc2V0dXAuXG4gICAgICogQHBhcmFtIHsgVXJsfEZpbGVQYXRoIH0gY29uZmlnTGlua1xuICAgICAqIEBtZW1iZXJvZiBOTFBQcmVwcm9jZXNzaW5nXG4gICAgICovXG4gICAgY29ubmVjdChjb25maWdMaW5rKXtcbiAgICAgICAgdGhpcy50b2tlbml6ZXIuY29ubmVjdChjb25maWdMaW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRva2VuaXplclxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIE5MUFByZXByb2Nlc3NpbmdcbiAgICAgKi9cbiAgICBnZXQgVG9rZW5pemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnRva2VuaXplcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndG9rZW5pemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbml6ZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0b2tlbml6ZXJcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSB0b2tlbml6ZXIgLSB0b2tlbml6ZXIgb2JqZWN0XG4gICAgICogQG1lbWJlcm9mIE5MUFByZXByb2Nlc3NpbmdcbiAgICAgKi9cbiAgICBzZXQgVG9rZW5pemVyKHRva2VuaXplcil7XG4gICAgICAgIHRoaXMudG9rZW5pemVyID0gdG9rZW5pemVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5MUFByZXByb2Nlc3Npbmc7IiwiY29uc3QgUHJlcHJvY2Vzc2luZ01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBcbiAgICBnZXQgUHJlcHJvY2Vzc2luZygpe1xuICAgICAgICBpZiggIXRoaXMuc3RyZWFtUHJlcHJvY2Vzc2luZyApe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3N0cmVhbVByZXByb2Nlc3NpbmcgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmVhbVByZXByb2Nlc3Npbmc7XG4gICAgfVxuXG4gICAgc2V0IFByZXByb2Nlc3Npbmcoc3RyZWFtUHJlcHJvY2Vzc2luZyl7XG4gICAgICAgIHRoaXMuc3RyZWFtUHJlcHJvY2Vzc2luZyA9IHN0cmVhbVByZXByb2Nlc3Npbmc7XG4gICAgfVxuXG4gICAgXG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IFByZXByb2Nlc3NpbmcgfSA9IHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQ7XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwQmVnaW4oJ3ByZXByb2Nlc3NpbmcnKTtcbiAgICAgICAgaWYodGhpcy5EYXRhU291cmNlICYmIFByZXByb2Nlc3Npbmcpe1xuICAgICAgICAgICAgY29uc3QgeyBTYW1wbGVUcmFuc2Zvcm1lciwgTGFiZWxUcmFuc2Zvcm1lciB9ID0gUHJlcHJvY2Vzc2luZztcbiAgICAgICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZy5TYW1wbGVUcmFuc2Zvcm1lciA9IFNhbXBsZVRyYW5zZm9ybWVyO1xuICAgICAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nLkxhYmVsVHJhbnNmb3JtZXIgPSBMYWJlbFRyYW5zZm9ybWVyO1xuICAgICAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nLnNldERhdGFIYW5kbGVyKCk7XG4gICAgICAgICAgICBwaXBlbGluZUNvbmZpZy5UcmFpbkRhdGFHZW5lcmF0b3IgPSB0aGlzLlByZXByb2Nlc3NpbmcuVHJhaW5EYXRhR2VuZXJhdG9yO1xuICAgICAgICAgICAgcGlwZWxpbmVDb25maWcuVGVzdERhdGFHZW5lcmF0b3IgPSB0aGlzLlByZXByb2Nlc3NpbmcuVGVzdERhdGFHZW5lcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgcmV0dXJuIHBpcGVsaW5lQ29uZmlnO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZXByb2Nlc3NpbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgSXRlbU5vcm1hbGl6aW5nLCBOdWxsSXRlbVJlcGxhY2UgfSBmcm9tICcuL1RhYnVsYXIvaW5kZXgnO1xuY2xhc3MgVGFidWxhclByZXByb2Nlc3NpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBcbiAgICBbXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUYWJ1bGFyUHJlcHJvY2Vzc2luZzsiLCIvKipcbiAqIFRoaXMgVG9rZW5pemVyRU4gaXMgYSBzaW1wbGUgaW1wbGVtZW50YXRpb24gZm9yIEVuZ2xpc2ggdG9rZW5pemVyXG4gKiBAdG9kbyBlbmhhbmNlIGl0IHdpdGggZW50aXRpZXMgYW5kIGJ1aWx0LWluIHZvY2FiXG4gKiBAZXhwZXJpbWVudFxuICogQGNsYXNzIFRva2VuaXplckVOXG4gKi9cbmNsYXNzIFRva2VuaXplckVOe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIGNvbm5lY3QoY29uZmlndXJlTGluayl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIHNpbXBsZSBFbmdsaXNoIHRva2VuaXplciBub3QgcmVxdWlyZXMgYWR2YW5jZSBjb25maWd1cmUnKTtcbiAgICB9XG4gICAgdG9rZW5pemUodGV4dCl7XG4gICAgICAgIGNvbnN0IFJlID0gL1tcXHMuXCInL1xcfDs6KClcXFtcXF1cXEBcXCNcXCRcXCZdL2c7XG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFJlKS5maWx0ZXIodG9rZW49PnRva2VuIT09JycpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBUb2tlbml6ZXJFTigpOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sb2dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9