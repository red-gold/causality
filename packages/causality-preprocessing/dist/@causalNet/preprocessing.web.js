(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/preprocessing"] = factory(require("causal-net.core"), require("causal-net.utils"));
	else
		root["@causalNet/preprocessing"] = factory(root["causal-net.core"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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
/*! exports provided: PreprocessingMixins, imagePreprocessing, nlpPreprocessing, tabularPreprocessing, tokenizerEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preprocessing_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preprocessing.mixins */ "./src/preprocessing.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreprocessingMixins", function() { return _preprocessing_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _imagePreprocessing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imagePreprocessing */ "./src/imagePreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imagePreprocessing", function() { return _imagePreprocessing__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _nlpPreprocessing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nlpPreprocessing */ "./src/nlpPreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlpPreprocessing", function() { return _nlpPreprocessing__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _tabularPreprocessing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabularPreprocessing */ "./src/tabularPreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tabularPreprocessing", function() { return _tabularPreprocessing__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _tokenizer_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokenizer.en */ "./src/tokenizer.en.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenizerEN", function() { return _tokenizer_en__WEBPACK_IMPORTED_MODULE_4__["default"]; });







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
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const PreprocessingMixins = BasePipelineClass => class extends BasePipelineClass {
  get PreprocessingSampleFn() {
    if (!this.preprocessingSampleFn) {
      throw Error('preprocessingSampleFn is not set');
    }

    return this.preprocessingSampleFn;
  }

  get PreprocessingLabelFn() {
    if (!this.preprocessingLabelFn) {
      throw Error('preprocessingLabelFn is not set');
    }

    return this.preprocessingLabelFn;
  }

  set PreprocessingSampleFn(sampleFn) {
    causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["assert"].beInstanceOf(sampleFn, Function);
    this.preprocessingSampleFn = sampleFn;
    this.preprocessingSampleFn.bind(this);
  }

  set PreprocessingLabelFn(labelFn) {
    causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["assert"].beInstanceOf(labelFn, Function);
    this.preprocessingLabelFn = labelFn;
    this.preprocessingLabelFn.bind(this);
  }

  setPreprocessingByConfig(configure) {
    const {
      SampleFn,
      LabelFn
    } = configure.Preprocessing;
    this.PreprocessingSampleFn = SampleFn;
    this.PreprocessingLabelFn = LabelFn;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9pbWFnZVNwbGl0dGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlblRyYW5zZm9ybWluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2ltYWdlUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL25scFByZXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3ByZXByb2Nlc3NpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy90YWJ1bGFyUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvdG9rZW5pemVyLmVuLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDb2xvclRyYW5zZm9ybWluZ01peGlucyIsIlByZXByb2Nlc3NpbmdDbGFzcyIsImNvbG9yVHJhbnNmb3JtIiwidHJhbmZvcm1GbiIsInNhbXBsZUJ1ZmZlciIsImNoYW5uZWxTaXplIiwiUiIsImZsYXR0ZW4iLCJtYXAiLCJzcGxpdEV2ZXJ5IiwiYmxhY2tXaGl0ZVRyYW5zZm9ybSIsIkJsYWNrV2hpdGVGbiIsInBpeGVsIiwicGl4ZWxWYWx1ZSIsIkltYWdlU3BsaXR0aW5nTWl4aW5zIiwiaW1hZ2VTcGxpdCIsInNwbGl0U2l6ZSIsIlRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIiwidG9rZW5pemUiLCJzZW50ZW5jZSIsIlRva2VuaXplciIsInRva2VuaXplciIsImJhZFdvcmRzRmlsdGVyIiwidG9rZW5zIiwiYmFkV29yZExpc3QiLCJmaWx0ZXIiLCJ0b2tlbiIsIm5vdCIsImZpbmQiLCJlcXVhbHMiLCJ3b3JkRnJlcUNvdW50IiwiZnJlcUNvdW50IiwiVXBkYXRlRnJlcSIsInVuZGVmaW5lZCIsInJlZHVjZSIsIndvcmREdXBsaWNhdGVSZW1vdmUiLCJ1bmlxIiwiSW1hZ2VQcmVwcm9jZXNzaW5nIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZUZ1bmN0b3IiLCJjb25zdHJ1Y3RvciIsIk5MUFByZXByb2Nlc3NpbmciLCJjb25uZWN0IiwiY29uZmlnTGluayIsIkVycm9yIiwiUHJlcHJvY2Vzc2luZ01peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiUHJlcHJvY2Vzc2luZ1NhbXBsZUZuIiwicHJlcHJvY2Vzc2luZ1NhbXBsZUZuIiwiUHJlcHJvY2Vzc2luZ0xhYmVsRm4iLCJwcmVwcm9jZXNzaW5nTGFiZWxGbiIsInNhbXBsZUZuIiwiYXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiRnVuY3Rpb24iLCJiaW5kIiwibGFiZWxGbiIsInNldFByZXByb2Nlc3NpbmdCeUNvbmZpZyIsImNvbmZpZ3VyZSIsIlNhbXBsZUZuIiwiTGFiZWxGbiIsIlByZXByb2Nlc3NpbmciLCJUYWJ1bGFyUHJlcHJvY2Vzc2luZyIsIlRva2VuaXplckVOIiwiY29uZmlndXJlTGluayIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiUmUiLCJzcGxpdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxNQUFNQSx1QkFBdUIsR0FBSUMsa0JBQUQsSUFBd0IsY0FBY0Esa0JBQWQsQ0FBZ0M7QUFFcEZDLGdCQUFjLENBQUNDLFVBQUQsRUFBYUMsWUFBYixFQUEyQkMsV0FBM0IsRUFBdUM7QUFDakQsVUFBTUMsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxXQUFPQSxD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TUFBTWlCLG9CQUFOLFNBQW1DekIseURBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsdURBQWpCLEVBQy9CLEVBRCtCLENBQW5DLENBQ087QUFDSEMsYUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFIRTs7QUFNUSxtRUFBSXNCLG9CQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTs7Ozs7O0FBTUEsTUFBTUMsV0FBTixDQUFpQjtBQUNidkIsYUFBVyxHQUFFLENBQ1o7O0FBQ0RFLFNBQU8sQ0FBQ3NCLGFBQUQsRUFBZTtBQUNsQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksOERBQVo7QUFDSDs7QUFDRGpELFVBQVEsQ0FBQ2tELElBQUQsRUFBTTtBQUNWLFVBQU1DLEVBQUUsR0FBRyw2QkFBWDtBQUNBLFdBQU9ELElBQUksQ0FBQ0UsS0FBTCxDQUFXRCxFQUFYLEVBQWU1QyxNQUFmLENBQXNCQyxLQUFLLElBQUVBLEtBQUssS0FBRyxFQUFyQyxDQUFQO0FBQ0g7O0FBVFk7O0FBV0YsbUVBQUlzQyxXQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7QUNqQkEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmdcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmdcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBDb2xvclRyYW5zZm9ybWluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIFxuICAgIGNvbG9yVHJhbnNmb3JtKHRyYW5mb3JtRm4sIHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5mbGF0dGVuKFIubWFwKHRyYW5mb3JtRm4sIFIuc3BsaXRFdmVyeShjaGFubmVsU2l6ZSwgc2FtcGxlQnVmZmVyKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gY29sb3IgaW1hZ2UgdG8gYmxhY2sgb24gd2hpdGUgaW1hZ2UuIFRoaXMgZnVuY3Rpb24gYWxzbyByZWR1Y2UgY2hhbmVsIHRvIDEuXG4gICAgICogQHBhcmFtIHsgQXJyYXl8QnVmZmVyIH0gc2FtcGxlQnVmZmVyXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gY2hhbm5lbFNpemVcbiAgICAgKiBAcmV0dXJuIHsgQXJyYXkgfSBpbWFnZSBkYXRhIGFmdGVyIHRyYW5zZm9ybVxuICAgICAqL1xuICAgIGJsYWNrV2hpdGVUcmFuc2Zvcm0oc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSl7XG4gICAgICAgIGNvbnN0IEJsYWNrV2hpdGVGbiA9IChwaXhlbCk9PntcbiAgICAgICAgICAgIGxldCBwaXhlbFZhbHVlID0gKHBpeGVsWzBdICsgcGl4ZWxbMV0gK3BpeGVsWzJdKS8zO1xuICAgICAgICAgICAgcmV0dXJuIH5+cGl4ZWxWYWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JUcmFuc2Zvcm0oQmxhY2tXaGl0ZUZuLCBzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclRyYW5zZm9ybWluZ01peGluczsiLCJjb25zdCBJbWFnZVNwbGl0dGluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIC8qKlxuICAgICAqIFNwbGl0IGltYWdlIGludG8gc3ViIGltYWdlcyBiYXNlZCBvbiBzcGxpdCBzaXplXG4gICAgICogQHBhcmFtIHsgQXJyYXl8QnVmZmVyIH0gc2FtcGxlQnVmZmVyIC0gb3JpZ2luYWwgaW1hZ2VcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBzcGxpdFNpemUgLSBwb3NpdGl2ZSBudW1iZXJcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gLSBhcnJheSBvZiBzdWIgaW1hZ2VcbiAgICAgKi9cbiAgICBpbWFnZVNwbGl0KHNhbXBsZUJ1ZmZlciwgc3BsaXRTaXplKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5zcGxpdEV2ZXJ5KHNwbGl0U2l6ZSwgc2FtcGxlQnVmZmVyKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNwbGl0dGluZ01peGluczsiLCJleHBvcnQge2RlZmF1bHQgYXMgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL2NvbG9yVHJhbnNmb3JtaW5nLm1peGlucyc7XG5leHBvcnQge2RlZmF1bHQgYXMgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgfSBmcm9tICcuL2ltYWdlU3BsaXR0aW5nLm1peGlucyc7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi90b2tlblRyYW5zZm9ybWluZy5taXhpbnMnOyIsImNvbnN0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogdG9rZW5pemVkIHNlbnRlbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gc2VudGVuY2UgLSBhcnJheSBvZiBzdHJpbmcgc2VudGVuY2VcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2YgdG9rZW5pemVkIHNlbnRlbmNlc1xuICAgICAqL1xuICAgIHRva2VuaXplKHNlbnRlbmNlKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgVG9rZW5pemVyID0gdGhpcy50b2tlbml6ZXI7XG4gICAgICAgIHJldHVybiBUb2tlbml6ZXIudG9rZW5pemUoc2VudGVuY2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYmFkIHdvcmRzIGZyb20gdG9rZW5zXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5cbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IGJhZFdvcmRMaXN0IC0gQXJyYXkgb2YgYmFkIHdvcmRzXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHRva2VucyB3aXRob3V0IGJhZCB3b3Jkc1xuICAgICAqL1xuICAgIGJhZFdvcmRzRmlsdGVyKHRva2VucywgYmFkV29yZExpc3Qpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5maWx0ZXIoKHRva2VuKT0+Ui5ub3QoUi5maW5kKFIuZXF1YWxzKHRva2VuKSkoYmFkV29yZExpc3QpKSwgdG9rZW5zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ291bnQgbnVtYmVyIG9mIGFwcGVyYW5jZSBvZiBlYWNoIHRva2VuIGluIHRoZSB0b2tlbiBsaXN0XG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5zXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gW2ZyZXFDb3VudD17fV0gLSBvYmplYyBvciBwcmV2aW91cyB3b3JkRnJlcUNvdW50LCBlbXB0eSBvYmplY3QgaWYgbm90IHByb3ZpZGVkXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSAtIGpzb24gb2JqZWN0IHdpdGggdG9rZW4gYXMga2V5IGFuZCBjb3VudGluZyBudW1iZXIgYXMgY29ycmVzcG9uZGluZyB2YWx1ZVxuICAgICAqL1xuICAgIHdvcmRGcmVxQ291bnQodG9rZW5zLCBmcmVxQ291bnQ9e30pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBVcGRhdGVGcmVxID0gKGZyZXFDb3VudCwgdG9rZW4pPT57XG4gICAgICAgICAgICBpZihmcmVxQ291bnRbdG9rZW5dID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGZyZXFDb3VudFt0b2tlbl0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBmcmVxQ291bnRbdG9rZW5dICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJlcUNvdW50O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoVXBkYXRlRnJlcSwgZnJlcUNvdW50LCB0b2tlbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZHVwbGljYXRlZCB0b2tlbnNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGFycmF5IG9mIHN0cmluZyB0b2tlblxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgd29yZER1cGxpY2F0ZVJlbW92ZSh0b2tlbnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi51bmlxKHRva2Vucyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGlucyB9IGZyb20gJy4vSW1hZ2UvaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgSW1hZ2VQcmVwcm9jZXNzaW5nIHByb3ZpZGUgbWV0aG9kcyBmb3IgcHJlcHJvY2Vzc2luZyBpbWFnZSBkYXRhXG4gKiB7IE1peFdpdGg6IFtcbiAqICAgICAgICAgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIEltYWdlU3BsaXR0aW5nTWl4aW5zXG4gKiAgICAgXSB9XG4gKiBAY2xhc3MgSW1hZ2VQcmVwcm9jZXNzaW5nXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3RvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2ltYWdlUHJlcHJvY2Vzc2luZy5iYWJlbC5ub2RlLmpzXVxuICovXG5jbGFzcyBJbWFnZVByZXByb2Nlc3NpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBbXG4gICAgICAgIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBcbiAgICAgICAgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJbWFnZVByZXByb2Nlc3Npbmc7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmVwcm9jZXNzaW5nTWl4aW5zfSBmcm9tICcuL3ByZXByb2Nlc3NpbmcubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW1hZ2VQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9pbWFnZVByZXByb2Nlc3NpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBubHBQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9ubHBQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGFidWxhclByZXByb2Nlc3NpbmcgfSBmcm9tICcuL3RhYnVsYXJQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9rZW5pemVyRU4gfSBmcm9tICcuL3Rva2VuaXplci5lbic7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL05MUC9pbmRleCc7XG4vKipcbiAqIFRoaXMgTkxQUHJlcHJvY2Vzc2luZyBjbGFzcyBwcm92aWRlIG1ldGhvZHMgZm9yIHByZXByb2Nlc3NpbmcgdGV4dCBhbmQgb3V0cHV0IHZhbGlkIHRva2Vucy5cbiAqIHsgTWl4V2l0aDpcbiAqICAgICBbIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIF0pIH1cbiAqIEBjbGFzcyBOTFBQcmVwcm9jZXNzaW5nXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3RvclxuICogQGV4YW1wbGVcbiAqIFshRVhBTVBMRSAuLi9leGFtcGxlcy9ubHBQcmVwcm9jZXNzaW5nLmJhYmVsLm5vZGUuanNdXG4gKi9cblxuY2xhc3MgTkxQUHJlcHJvY2Vzc2luZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFxuICAgIFsgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgdXNlZCBpbiBjYXNlIHRva2VuaXplciByZXF1aXJlcyBkYXRhIHNldHVwLlxuICAgICAqIEBwYXJhbSB7IFVybHxGaWxlUGF0aCB9IGNvbmZpZ0xpbmtcbiAgICAgKiBAbWVtYmVyb2YgTkxQUHJlcHJvY2Vzc2luZ1xuICAgICAqL1xuICAgIGNvbm5lY3QoY29uZmlnTGluayl7XG4gICAgICAgIHRoaXMudG9rZW5pemVyLmNvbm5lY3QoY29uZmlnTGluayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0b2tlbml6ZXJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBOTFBQcmVwcm9jZXNzaW5nXG4gICAgICovXG4gICAgZ2V0IFRva2VuaXplcigpe1xuICAgICAgICBpZighdGhpcy50b2tlbml6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3Rva2VuaXplciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5pemVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdG9rZW5pemVyXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gdG9rZW5pemVyIC0gdG9rZW5pemVyIG9iamVjdFxuICAgICAqIEBtZW1iZXJvZiBOTFBQcmVwcm9jZXNzaW5nXG4gICAgICovXG4gICAgc2V0IFRva2VuaXplcih0b2tlbml6ZXIpe1xuICAgICAgICB0aGlzLnRva2VuaXplciA9IHRva2VuaXplcjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOTFBQcmVwcm9jZXNzaW5nOyIsImltcG9ydCB7IGFzc2VydCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY29uc3QgUHJlcHJvY2Vzc2luZ01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBcbiAgICBnZXQgUHJlcHJvY2Vzc2luZ1NhbXBsZUZuKCl7XG4gICAgICAgIGlmKCF0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncHJlcHJvY2Vzc2luZ1NhbXBsZUZuIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nU2FtcGxlRm47XG4gICAgfVxuICAgIFxuICAgIGdldCBQcmVwcm9jZXNzaW5nTGFiZWxGbigpe1xuICAgICAgICBpZighdGhpcy5wcmVwcm9jZXNzaW5nTGFiZWxGbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncHJlcHJvY2Vzc2luZ0xhYmVsRm4gaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuO1xuICAgIH1cblxuICAgIHNldCBQcmVwcm9jZXNzaW5nU2FtcGxlRm4oc2FtcGxlRm4pe1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKHNhbXBsZUZuLCBGdW5jdGlvbik7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ1NhbXBsZUZuID0gc2FtcGxlRm47XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ1NhbXBsZUZuLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHNldCBQcmVwcm9jZXNzaW5nTGFiZWxGbihsYWJlbEZuKXtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihsYWJlbEZuLCBGdW5jdGlvbik7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0xhYmVsRm4gPSBsYWJlbEZuO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHNldFByZXByb2Nlc3NpbmdCeUNvbmZpZyhjb25maWd1cmUpe1xuICAgICAgICBjb25zdCB7IFNhbXBsZUZuLCBMYWJlbEZuIH0gPSBjb25maWd1cmUuUHJlcHJvY2Vzc2luZztcbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nU2FtcGxlRm4gPSBTYW1wbGVGbjtcbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nTGFiZWxGbiA9IExhYmVsRm47XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJlcHJvY2Vzc2luZ01peGluczsiLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBJdGVtTm9ybWFsaXppbmcsIE51bGxJdGVtUmVwbGFjZSB9IGZyb20gJy4vVGFidWxhci9pbmRleCc7XG5jbGFzcyBUYWJ1bGFyUHJlcHJvY2Vzc2luZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFxuICAgIFtdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhYnVsYXJQcmVwcm9jZXNzaW5nOyIsIi8qKlxuICogVGhpcyBUb2tlbml6ZXJFTiBpcyBhIHNpbXBsZSBpbXBsZW1lbnRhdGlvbiBmb3IgRW5nbGlzaCB0b2tlbml6ZXJcbiAqIEB0b2RvIGVuaGFuY2UgaXQgd2l0aCBlbnRpdGllcyBhbmQgYnVpbHQtaW4gdm9jYWJcbiAqIEBleHBlcmltZW50XG4gKiBAY2xhc3MgVG9rZW5pemVyRU5cbiAqL1xuY2xhc3MgVG9rZW5pemVyRU57XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgY29ubmVjdChjb25maWd1cmVMaW5rKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgc2ltcGxlIEVuZ2xpc2ggdG9rZW5pemVyIG5vdCByZXF1aXJlcyBhZHZhbmNlIGNvbmZpZ3VyZScpO1xuICAgIH1cbiAgICB0b2tlbml6ZSh0ZXh0KXtcbiAgICAgICAgY29uc3QgUmUgPSAvW1xccy5cIicvXFx8OzooKVxcW1xcXVxcQFxcI1xcJFxcJl0vZztcbiAgICAgICAgcmV0dXJuIHRleHQuc3BsaXQoUmUpLmZpbHRlcih0b2tlbj0+dG9rZW4hPT0nJyk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFRva2VuaXplckVOKCk7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==