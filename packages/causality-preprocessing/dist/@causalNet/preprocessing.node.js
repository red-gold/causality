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
 * @extends BaseFunction
 * @example
 * [EXAMPLE ../examples/imagePreprocessing.babel.node.js]
 */

class ImagePreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], [_Image_index__WEBPACK_IMPORTED_MODULE_2__["ColorTransformingMixins"], _Image_index__WEBPACK_IMPORTED_MODULE_2__["ImageSplittingMixins"]]) {
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
 * @extends BaseFunction
 * @example
 * [!EXAMPLE ../examples/nlpPreprocessing.babel.node.js]
 */

class NLPPreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], [_NLP_index__WEBPACK_IMPORTED_MODULE_2__["TokenTransformingMixins"]]) {
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




class TabularPreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], []) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9pbWFnZVNwbGl0dGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlblRyYW5zZm9ybWluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2ltYWdlUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL25scFByZXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3ByZXByb2Nlc3NpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy90YWJ1bGFyUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvdG9rZW5pemVyLmVuLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDb2xvclRyYW5zZm9ybWluZ01peGlucyIsIlByZXByb2Nlc3NpbmdDbGFzcyIsImNvbG9yVHJhbnNmb3JtIiwidHJhbmZvcm1GbiIsInNhbXBsZUJ1ZmZlciIsImNoYW5uZWxTaXplIiwiUiIsImZsYXR0ZW4iLCJtYXAiLCJzcGxpdEV2ZXJ5IiwiYmxhY2tXaGl0ZVRyYW5zZm9ybSIsIkJsYWNrV2hpdGVGbiIsInBpeGVsIiwicGl4ZWxWYWx1ZSIsIkltYWdlU3BsaXR0aW5nTWl4aW5zIiwiaW1hZ2VTcGxpdCIsInNwbGl0U2l6ZSIsIlRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIiwidG9rZW5pemUiLCJzZW50ZW5jZSIsIlRva2VuaXplciIsInRva2VuaXplciIsImJhZFdvcmRzRmlsdGVyIiwidG9rZW5zIiwiYmFkV29yZExpc3QiLCJmaWx0ZXIiLCJ0b2tlbiIsIm5vdCIsImZpbmQiLCJlcXVhbHMiLCJ3b3JkRnJlcUNvdW50IiwiZnJlcUNvdW50IiwiVXBkYXRlRnJlcSIsInVuZGVmaW5lZCIsInJlZHVjZSIsIndvcmREdXBsaWNhdGVSZW1vdmUiLCJ1bmlxIiwiSW1hZ2VQcmVwcm9jZXNzaW5nIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZUZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJOTFBQcmVwcm9jZXNzaW5nIiwiY29ubmVjdCIsImNvbmZpZ0xpbmsiLCJFcnJvciIsIlByZXByb2Nlc3NpbmdNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIlByZXByb2Nlc3NpbmdTYW1wbGVGbiIsInByZXByb2Nlc3NpbmdTYW1wbGVGbiIsIlByZXByb2Nlc3NpbmdMYWJlbEZuIiwicHJlcHJvY2Vzc2luZ0xhYmVsRm4iLCJzYW1wbGVGbiIsImFzc2VydCIsImJlSW5zdGFuY2VPZiIsIkZ1bmN0aW9uIiwiYmluZCIsImxhYmVsRm4iLCJzZXRQcmVwcm9jZXNzaW5nQnlDb25maWciLCJjb25maWd1cmUiLCJTYW1wbGVGbiIsIkxhYmVsRm4iLCJQcmVwcm9jZXNzaW5nIiwiVGFidWxhclByZXByb2Nlc3NpbmciLCJUb2tlbml6ZXJFTiIsImNvbmZpZ3VyZUxpbmsiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsIlJlIiwic3BsaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsTUFBTUEsdUJBQXVCLEdBQUlDLGtCQUFELElBQXdCLGNBQWNBLGtCQUFkLENBQWdDO0FBRXBGQyxnQkFBYyxDQUFDQyxVQUFELEVBQWFDLFlBQWIsRUFBMkJDLFdBQTNCLEVBQXVDO0FBQ2pELFVBQU1DLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsV0FBT0Es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LE1BQU1pQixvQkFBTixTQUFtQ3pCLHlEQUFRLENBQUNDLE9BQVQsQ0FBaUJDLHdEQUFqQixFQUMvQixFQUQrQixDQUFuQyxDQUNPO0FBQ0hDLGFBQVcsR0FBRTtBQUNUO0FBQ0g7O0FBSEU7O0FBTVEsbUVBQUlzQixvQkFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7Ozs7OztBQU1BLE1BQU1DLFdBQU4sQ0FBaUI7QUFDYnZCLGFBQVcsR0FBRSxDQUNaOztBQUNERSxTQUFPLENBQUNzQixhQUFELEVBQWU7QUFDbEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLDhEQUFaO0FBQ0g7O0FBQ0RqRCxVQUFRLENBQUNrRCxJQUFELEVBQU07QUFDVixVQUFNQyxFQUFFLEdBQUcsNkJBQVg7QUFDQSxXQUFPRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0QsRUFBWCxFQUFlNUMsTUFBZixDQUFzQkMsS0FBSyxJQUFFQSxLQUFLLEtBQUcsRUFBckMsQ0FBUDtBQUNIOztBQVRZOztBQVdGLG1FQUFJc0MsV0FBSixFQUFmLEU7Ozs7Ozs7Ozs7O0FDakJBLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgXG4gICAgY29sb3JUcmFuc2Zvcm0odHJhbmZvcm1Gbiwgc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmZsYXR0ZW4oUi5tYXAodHJhbmZvcm1GbiwgUi5zcGxpdEV2ZXJ5KGNoYW5uZWxTaXplLCBzYW1wbGVCdWZmZXIpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSBjb2xvciBpbWFnZSB0byBibGFjayBvbiB3aGl0ZSBpbWFnZS4gVGhpcyBmdW5jdGlvbiBhbHNvIHJlZHVjZSBjaGFuZWwgdG8gMS5cbiAgICAgKiBAcGFyYW0geyBBcnJheXxCdWZmZXIgfSBzYW1wbGVCdWZmZXJcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBjaGFubmVsU2l6ZVxuICAgICAqIEByZXR1cm4geyBBcnJheSB9IGltYWdlIGRhdGEgYWZ0ZXIgdHJhbnNmb3JtXG4gICAgICovXG4gICAgYmxhY2tXaGl0ZVRyYW5zZm9ybShzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKXtcbiAgICAgICAgY29uc3QgQmxhY2tXaGl0ZUZuID0gKHBpeGVsKT0+e1xuICAgICAgICAgICAgbGV0IHBpeGVsVmFsdWUgPSAocGl4ZWxbMF0gKyBwaXhlbFsxXSArcGl4ZWxbMl0pLzM7XG4gICAgICAgICAgICByZXR1cm4gfn5waXhlbFZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvclRyYW5zZm9ybShCbGFja1doaXRlRm4sIHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zOyIsImNvbnN0IEltYWdlU3BsaXR0aW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogU3BsaXQgaW1hZ2UgaW50byBzdWIgaW1hZ2VzIGJhc2VkIG9uIHNwbGl0IHNpemVcbiAgICAgKiBAcGFyYW0geyBBcnJheXxCdWZmZXIgfSBzYW1wbGVCdWZmZXIgLSBvcmlnaW5hbCBpbWFnZVxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IHNwbGl0U2l6ZSAtIHBvc2l0aXZlIG51bWJlclxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSAtIGFycmF5IG9mIHN1YiBpbWFnZVxuICAgICAqL1xuICAgIGltYWdlU3BsaXQoc2FtcGxlQnVmZmVyLCBzcGxpdFNpemUpe1xuICAgICAgICByZXR1cm4gdGhpcy5SLnNwbGl0RXZlcnkoc3BsaXRTaXplLCBzYW1wbGVCdWZmZXIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlU3BsaXR0aW5nTWl4aW5zOyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBDb2xvclRyYW5zZm9ybWluZ01peGlucyB9IGZyb20gJy4vY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBJbWFnZVNwbGl0dGluZ01peGlucyB9IGZyb20gJy4vaW1hZ2VTcGxpdHRpbmcubWl4aW5zJzsiLCJleHBvcnQge2RlZmF1bHQgYXMgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL3Rva2VuVHJhbnNmb3JtaW5nLm1peGlucyc7IiwiY29uc3QgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICAvKipcbiAgICAgKiB0b2tlbml6ZWQgc2VudGVuY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBzZW50ZW5jZSAtIGFycmF5IG9mIHN0cmluZyBzZW50ZW5jZVxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBhcnJheSBvZiB0b2tlbml6ZWQgc2VudGVuY2VzXG4gICAgICovXG4gICAgdG9rZW5pemUoc2VudGVuY2Upe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBUb2tlbml6ZXIgPSB0aGlzLnRva2VuaXplcjtcbiAgICAgICAgcmV0dXJuIFRva2VuaXplci50b2tlbml6ZShzZW50ZW5jZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBiYWQgd29yZHMgZnJvbSB0b2tlbnNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGFycmF5IG9mIHN0cmluZyB0b2tlblxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gYmFkV29yZExpc3QgLSBBcnJheSBvZiBiYWQgd29yZHNcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gdG9rZW5zIHdpdGhvdXQgYmFkIHdvcmRzXG4gICAgICovXG4gICAgYmFkV29yZHNGaWx0ZXIodG9rZW5zLCBiYWRXb3JkTGlzdCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmZpbHRlcigodG9rZW4pPT5SLm5vdChSLmZpbmQoUi5lcXVhbHModG9rZW4pKShiYWRXb3JkTGlzdCkpLCB0b2tlbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3VudCBudW1iZXIgb2YgYXBwZXJhbmNlIG9mIGVhY2ggdG9rZW4gaW4gdGhlIHRva2VuIGxpc3RcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGFycmF5IG9mIHN0cmluZyB0b2tlbnNcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBbZnJlcUNvdW50PXt9XSAtIG9iamVjIG9yIHByZXZpb3VzIHdvcmRGcmVxQ291bnQsIGVtcHR5IG9iamVjdCBpZiBub3QgcHJvdmlkZWRcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IC0ganNvbiBvYmplY3Qgd2l0aCB0b2tlbiBhcyBrZXkgYW5kIGNvdW50aW5nIG51bWJlciBhcyBjb3JyZXNwb25kaW5nIHZhbHVlXG4gICAgICovXG4gICAgd29yZEZyZXFDb3VudCh0b2tlbnMsIGZyZXFDb3VudD17fSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFVwZGF0ZUZyZXEgPSAoZnJlcUNvdW50LCB0b2tlbik9PntcbiAgICAgICAgICAgIGlmKGZyZXFDb3VudFt0b2tlbl0gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgZnJlcUNvdW50W3Rva2VuXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGZyZXFDb3VudFt0b2tlbl0gKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcmVxQ291bnQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSLnJlZHVjZShVcGRhdGVGcmVxLCBmcmVxQ291bnQsIHRva2Vucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBkdXBsaWNhdGVkIHRva2Vuc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2VuXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICB3b3JkRHVwbGljYXRlUmVtb3ZlKHRva2Vucyl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLnVuaXEodG9rZW5zKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9uIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBDb2xvclRyYW5zZm9ybWluZ01peGlucywgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgfSBmcm9tICcuL0ltYWdlL2luZGV4JztcblxuLyoqXG4gKiBUaGlzIEltYWdlUHJlcHJvY2Vzc2luZyBwcm92aWRlIG1ldGhvZHMgZm9yIHByZXByb2Nlc3NpbmcgaW1hZ2UgZGF0YVxuICogeyBNaXhXaXRoOiBbXG4gKiAgICAgICAgIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGluc1xuICogICAgIF0gfVxuICogQGNsYXNzIEltYWdlUHJlcHJvY2Vzc2luZ1xuICogQGV4dGVuZHMgQmFzZUZ1bmN0aW9uXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvaW1hZ2VQcmVwcm9jZXNzaW5nLmJhYmVsLm5vZGUuanNdXG4gKi9cbmNsYXNzIEltYWdlUHJlcHJvY2Vzc2luZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBbXG4gICAgICAgIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBcbiAgICAgICAgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJbWFnZVByZXByb2Nlc3Npbmc7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmVwcm9jZXNzaW5nTWl4aW5zfSBmcm9tICcuL3ByZXByb2Nlc3NpbmcubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW1hZ2VQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9pbWFnZVByZXByb2Nlc3NpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBubHBQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9ubHBQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdGFidWxhclByZXByb2Nlc3NpbmcgfSBmcm9tICcuL3RhYnVsYXJQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdG9rZW5pemVyRU4gfSBmcm9tICcuL3Rva2VuaXplci5lbic7IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9uIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUb2tlblRyYW5zZm9ybWluZ01peGlucyB9IGZyb20gJy4vTkxQL2luZGV4Jztcbi8qKlxuICogVGhpcyBOTFBQcmVwcm9jZXNzaW5nIGNsYXNzIHByb3ZpZGUgbWV0aG9kcyBmb3IgcHJlcHJvY2Vzc2luZyB0ZXh0IGFuZCBvdXRwdXQgdmFsaWQgdG9rZW5zLlxuICogeyBNaXhXaXRoOlxuICogICAgIFsgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgXSkgfVxuICogQGNsYXNzIE5MUFByZXByb2Nlc3NpbmdcbiAqIEBleHRlbmRzIEJhc2VGdW5jdGlvblxuICogQGV4YW1wbGVcbiAqIFshRVhBTVBMRSAuLi9leGFtcGxlcy9ubHBQcmVwcm9jZXNzaW5nLmJhYmVsLm5vZGUuanNdXG4gKi9cblxuY2xhc3MgTkxQUHJlcHJvY2Vzc2luZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBcbiAgICBbIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgaW4gY2FzZSB0b2tlbml6ZXIgcmVxdWlyZXMgZGF0YSBzZXR1cC5cbiAgICAgKiBAcGFyYW0geyBVcmx8RmlsZVBhdGggfSBjb25maWdMaW5rXG4gICAgICogQG1lbWJlcm9mIE5MUFByZXByb2Nlc3NpbmdcbiAgICAgKi9cbiAgICBjb25uZWN0KGNvbmZpZ0xpbmspe1xuICAgICAgICB0aGlzLnRva2VuaXplci5jb25uZWN0KGNvbmZpZ0xpbmspO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdG9rZW5pemVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTkxQUHJlcHJvY2Vzc2luZ1xuICAgICAqL1xuICAgIGdldCBUb2tlbml6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMudG9rZW5pemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd0b2tlbml6ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuaXplcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRva2VuaXplclxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IHRva2VuaXplciAtIHRva2VuaXplciBvYmplY3RcbiAgICAgKiBAbWVtYmVyb2YgTkxQUHJlcHJvY2Vzc2luZ1xuICAgICAqL1xuICAgIHNldCBUb2tlbml6ZXIodG9rZW5pemVyKXtcbiAgICAgICAgdGhpcy50b2tlbml6ZXIgPSB0b2tlbml6ZXI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTkxQUHJlcHJvY2Vzc2luZzsiLCJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IFByZXByb2Nlc3NpbmdNaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgXG4gICAgZ2V0IFByZXByb2Nlc3NpbmdTYW1wbGVGbigpe1xuICAgICAgICBpZighdGhpcy5wcmVwcm9jZXNzaW5nU2FtcGxlRm4pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ByZXByb2Nlc3NpbmdTYW1wbGVGbiBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ1NhbXBsZUZuO1xuICAgIH1cbiAgICBcbiAgICBnZXQgUHJlcHJvY2Vzc2luZ0xhYmVsRm4oKXtcbiAgICAgICAgaWYoIXRoaXMucHJlcHJvY2Vzc2luZ0xhYmVsRm4pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ByZXByb2Nlc3NpbmdMYWJlbEZuIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nTGFiZWxGbjtcbiAgICB9XG5cbiAgICBzZXQgUHJlcHJvY2Vzc2luZ1NhbXBsZUZuKHNhbXBsZUZuKXtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihzYW1wbGVGbiwgRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbiA9IHNhbXBsZUZuO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBzZXQgUHJlcHJvY2Vzc2luZ0xhYmVsRm4obGFiZWxGbil7XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YobGFiZWxGbiwgRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuID0gbGFiZWxGbjtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nTGFiZWxGbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICBzZXRQcmVwcm9jZXNzaW5nQnlDb25maWcoY29uZmlndXJlKXtcbiAgICAgICAgY29uc3QgeyBTYW1wbGVGbiwgTGFiZWxGbiB9ID0gY29uZmlndXJlLlByZXByb2Nlc3Npbmc7XG4gICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZ1NhbXBsZUZuID0gU2FtcGxlRm47XG4gICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZ0xhYmVsRm4gPSBMYWJlbEZuO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZXByb2Nlc3NpbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9uIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBJdGVtTm9ybWFsaXppbmcsIE51bGxJdGVtUmVwbGFjZSB9IGZyb20gJy4vVGFidWxhci9pbmRleCc7XG5jbGFzcyBUYWJ1bGFyUHJlcHJvY2Vzc2luZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBcbiAgICBbXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUYWJ1bGFyUHJlcHJvY2Vzc2luZzsiLCIvKipcbiAqIFRoaXMgVG9rZW5pemVyRU4gaXMgYSBzaW1wbGUgaW1wbGVtZW50YXRpb24gZm9yIEVuZ2xpc2ggdG9rZW5pemVyXG4gKiBAdG9kbyBlbmhhbmNlIGl0IHdpdGggZW50aXRpZXMgYW5kIGJ1aWx0LWluIHZvY2FiXG4gKiBAZXhwZXJpbWVudFxuICogQGNsYXNzIFRva2VuaXplckVOXG4gKi9cbmNsYXNzIFRva2VuaXplckVOe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIGNvbm5lY3QoY29uZmlndXJlTGluayl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIHNpbXBsZSBFbmdsaXNoIHRva2VuaXplciBub3QgcmVxdWlyZXMgYWR2YW5jZSBjb25maWd1cmUnKTtcbiAgICB9XG4gICAgdG9rZW5pemUodGV4dCl7XG4gICAgICAgIGNvbnN0IFJlID0gL1tcXHMuXCInL1xcfDs6KClcXFtcXF1cXEBcXCNcXCRcXCZdL2c7XG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFJlKS5maWx0ZXIodG9rZW49PnRva2VuIT09JycpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBUb2tlbml6ZXJFTigpOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=