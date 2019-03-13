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
  colorTransform(sampleBuffer, channelSize, tranformFn) {
    const R = this.R;
    return R.map(tranformFn, R.splitEvery(channelSize, sampleBuffer));
  }

  blackWhiteTransform(sampleBuffer, channelSize) {
    const BlackWhiteFn = pixel => {
      let pixelValue = pixel[0] * 255 + pixel[1] * 255 + pixel[2];

      if (pixelValue > 0) {
        return 0;
      } else {
        return 1;
      }
    };

    this.colorTransform(BlackWhiteFn, sampleBuffer, channelSize);
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
/*! exports provided: TokenizingMixins, TokenTransformingMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tokenizing_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenizing.mixins */ "./src/NLP/tokenizing.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenizingMixins", function() { return _tokenizing_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _tokenTransforming_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenTransforming.mixins */ "./src/NLP/tokenTransforming.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenTransformingMixins", function() { return _tokenTransforming_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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
  badWordsFilter(tokens, badWordList) {
    const R = this.R;
    return R.filter(token => R.not(R.find(R.equals(token))(badWordList)), tokens);
  }

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

};

/* harmony default export */ __webpack_exports__["default"] = (TokenTransformingMixins);

/***/ }),

/***/ "./src/NLP/tokenizing.mixins.js":
/*!**************************************!*\
  !*** ./src/NLP/tokenizing.mixins.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const TokenizingMixins = BaseFunctionClass => class extends BaseFunctionClass {
  cleanText(text, removePattern = null) {
    removePattern = removePattern || /[.,\/#!$%\^&\*;:{}=\-_`~()\n\t]/g;
    return text.replace(removePattern, " ");
  }

  tokenize(text, toLower = true) {
    const R = this.R;
    const Tokenizer = this.Tokenizer;
    let cleanText = this.cleanText(text);
    let rawTokens = Tokenizer(cleanText);
    let tokens = R.filter(token => R.not(R.isEmpty(token)), rawTokens);

    if (toLower) {
      return R.map(R.toLower, tokens);
    } else {
      return tokens;
    }
  }

};

/* harmony default export */ __webpack_exports__["default"] = (TokenizingMixins);

/***/ }),

/***/ "./src/Tabular/index.js":
/*!******************************!*\
  !*** ./src/Tabular/index.js ***!
  \******************************/
/*! exports provided: ItemNormalizing, NullItemReplace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemNormalizing_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemNormalizing.mixins */ "./src/Tabular/itemNormalizing.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemNormalizing", function() { return _itemNormalizing_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _nullItemReplacing_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nullItemReplacing.mixins */ "./src/Tabular/nullItemReplacing.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullItemReplace", function() { return _nullItemReplacing_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/Tabular/itemNormalizing.mixins.js":
/*!***********************************************!*\
  !*** ./src/Tabular/itemNormalizing.mixins.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ItemNormalizingMixins = PreprocessingClass => class extends PreprocessingClass {
  itemNormalize(sample) {
    throw Error('implement require');
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ItemNormalizingMixins);

/***/ }),

/***/ "./src/Tabular/nullItemReplacing.mixins.js":
/*!*************************************************!*\
  !*** ./src/Tabular/nullItemReplacing.mixins.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const NullItemReplacingMixins = PreprocessingClass => class extends PreprocessingClass {
  nullItemReplace(sample) {
    throw Error('implement required');
  }

};

/* harmony default export */ __webpack_exports__["default"] = (NullItemReplacingMixins);

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




class ImagePreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], [_Image_index__WEBPACK_IMPORTED_MODULE_2__["ColorTransformingMixins"], _Image_index__WEBPACK_IMPORTED_MODULE_2__["ImageSplittingMixins"]]) {
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
/*! exports provided: PreprocessingMixins, imagePreprocessing, nlpPreprocessing, tabularPreprocessing */
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
/* harmony import */ var _tokenizer_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokenizer.en */ "./src/tokenizer.en.js");





class NLPPreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], [_NLP_index__WEBPACK_IMPORTED_MODULE_2__["TokenizingMixins"], _NLP_index__WEBPACK_IMPORTED_MODULE_2__["TokenTransformingMixins"]]) {
  constructor() {
    super();
    this.Tokenizer = _tokenizer_en__WEBPACK_IMPORTED_MODULE_3__["default"];
  }

  get Tokenizer() {
    if (!this.tokenizer) {
      throw Error('tokenizer is not set');
    }

    return this.tokenizer;
  }

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

  set PreprocessingSampleFn(preprocessingSampleFn) {
    this.preprocessingSampleFn = preprocessingSampleFn;
    this.preprocessingSampleFn.bind(this);
  }

  set PreprocessingLabelFn(preprocessingLabelFn) {
    this.preprocessingLabelFn = preprocessingLabelFn;
    this.preprocessingLabelFn.bind(this);
  }

  setPreprocessingFunctions(preprocessingSampleFn, preprocessingLabelFn) {
    causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["Assert"].beInstanceOf(preprocessingSampleFn, Function);
    causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["Assert"].beInstanceOf(preprocessingLabelFn, Function);
    this.PreprocessingSampleFn = preprocessingSampleFn;
    this.PreprocessingLabelFn = preprocessingLabelFn;
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




class TabularPreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], [_Tabular_index__WEBPACK_IMPORTED_MODULE_2__["ItemNormalizing"], _Tabular_index__WEBPACK_IMPORTED_MODULE_2__["NullItemReplace"]]) {
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TokenizerEN; });
function TokenizerEN(text) {
  const Re = /[\s."'/\|;:()\[\]\@\#\$\&]/g;
  return text.split(Re);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9pbWFnZVNwbGl0dGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlblRyYW5zZm9ybWluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlbml6aW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9pdGVtTm9ybWFsaXppbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9UYWJ1bGFyL251bGxJdGVtUmVwbGFjaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW1hZ2VQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvbmxwUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvcHJlcHJvY2Vzc2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3RhYnVsYXJQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy90b2tlbml6ZXIuZW4uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ0NsYXNzIiwiY29sb3JUcmFuc2Zvcm0iLCJzYW1wbGVCdWZmZXIiLCJjaGFubmVsU2l6ZSIsInRyYW5mb3JtRm4iLCJSIiwibWFwIiwic3BsaXRFdmVyeSIsImJsYWNrV2hpdGVUcmFuc2Zvcm0iLCJCbGFja1doaXRlRm4iLCJwaXhlbCIsInBpeGVsVmFsdWUiLCJJbWFnZVNwbGl0dGluZ01peGlucyIsImltYWdlU3BsaXQiLCJzcGxpdFNpemUiLCJUb2tlblRyYW5zZm9ybWluZ01peGlucyIsImJhZFdvcmRzRmlsdGVyIiwidG9rZW5zIiwiYmFkV29yZExpc3QiLCJmaWx0ZXIiLCJ0b2tlbiIsIm5vdCIsImZpbmQiLCJlcXVhbHMiLCJ3b3JkRnJlcUNvdW50IiwiZnJlcUNvdW50IiwiVXBkYXRlRnJlcSIsInVuZGVmaW5lZCIsInJlZHVjZSIsIlRva2VuaXppbmdNaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImNsZWFuVGV4dCIsInRleHQiLCJyZW1vdmVQYXR0ZXJuIiwicmVwbGFjZSIsInRva2VuaXplIiwidG9Mb3dlciIsIlRva2VuaXplciIsInJhd1Rva2VucyIsImlzRW1wdHkiLCJJdGVtTm9ybWFsaXppbmdNaXhpbnMiLCJpdGVtTm9ybWFsaXplIiwic2FtcGxlIiwiRXJyb3IiLCJOdWxsSXRlbVJlcGxhY2luZ01peGlucyIsIm51bGxJdGVtUmVwbGFjZSIsIkltYWdlUHJlcHJvY2Vzc2luZyIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwiTkxQUHJlcHJvY2Vzc2luZyIsIlRva2VuaXplckVOIiwidG9rZW5pemVyIiwiUHJlcHJvY2Vzc2luZ01peGlucyIsIkJhc2VQaXBlbGluZUNsYXNzIiwiUHJlcHJvY2Vzc2luZ1NhbXBsZUZuIiwicHJlcHJvY2Vzc2luZ1NhbXBsZUZuIiwiUHJlcHJvY2Vzc2luZ0xhYmVsRm4iLCJwcmVwcm9jZXNzaW5nTGFiZWxGbiIsImJpbmQiLCJzZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zIiwiQXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiRnVuY3Rpb24iLCJUYWJ1bGFyUHJlcHJvY2Vzc2luZyIsIkl0ZW1Ob3JtYWxpemluZyIsIk51bGxJdGVtUmVwbGFjZSIsIlJlIiwic3BsaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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N0I7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QkMsb0JBQTVCO0FBQ0g7O0FBN0I2RSxDQUFsRjs7QUFnQ2VMLGtGQUFmLEU7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTVcsb0JBQU4sU0FBbUNsQix5REFBUSxDQUFDQyxPQUFULENBQWlCQyx3REFBakIsRUFDL0IsQ0FBRWlCLDhEQUFGLEVBQW1CQyw4REFBbkIsQ0FEK0IsQ0FBbkMsQ0FDeUM7QUFDckNqQixhQUFXLEdBQUU7QUFDVDtBQUNIOztBQUhvQzs7QUFNMUIsbUVBQUllLG9CQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFlLFNBQVNiLFdBQVQsQ0FBcUJwQixJQUFyQixFQUEwQjtBQUNyQyxRQUFNb0MsRUFBRSxHQUFHLDZCQUFYO0FBQ0EsU0FBT3BDLElBQUksQ0FBQ3FDLEtBQUwsQ0FBV0QsRUFBWCxDQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUNIRCw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgY29sb3JUcmFuc2Zvcm0oc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSwgdHJhbmZvcm1Gbil7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLm1hcCh0cmFuZm9ybUZuLCBSLnNwbGl0RXZlcnkoY2hhbm5lbFNpemUsIHNhbXBsZUJ1ZmZlcikpO1xuICAgIH1cbiAgICBibGFja1doaXRlVHJhbnNmb3JtKHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUpe1xuICAgICAgICBjb25zdCBCbGFja1doaXRlRm4gPSAocGl4ZWwpPT57XG4gICAgICAgICAgICBsZXQgcGl4ZWxWYWx1ZSA9IHBpeGVsWzBdKjI1NSArIHBpeGVsWzFdKjI1NSArcGl4ZWxbMl07XG4gICAgICAgICAgICBpZiggcGl4ZWxWYWx1ZSA+IDAgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JUcmFuc2Zvcm0oQmxhY2tXaGl0ZUZuLCBzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclRyYW5zZm9ybWluZ01peGluczsiLCJjb25zdCBJbWFnZVNwbGl0dGluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIGltYWdlU3BsaXQoc2FtcGxlQnVmZmVyLCBzcGxpdFNpemUpe1xuICAgICAgICByZXR1cm4gdGhpcy5SLnNwbGl0RXZlcnkoc3BsaXRTaXplLCBzYW1wbGVCdWZmZXIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlU3BsaXR0aW5nTWl4aW5zOyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBDb2xvclRyYW5zZm9ybWluZ01peGlucyB9IGZyb20gJy4vY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBJbWFnZVNwbGl0dGluZ01peGlucyB9IGZyb20gJy4vaW1hZ2VTcGxpdHRpbmcubWl4aW5zJzsiLCJleHBvcnQge2RlZmF1bHQgYXMgVG9rZW5pemluZ01peGlucyB9IGZyb20gJy4vdG9rZW5pemluZy5taXhpbnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi90b2tlblRyYW5zZm9ybWluZy5taXhpbnMnOyIsImNvbnN0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgYmFkV29yZHNGaWx0ZXIodG9rZW5zLCBiYWRXb3JkTGlzdCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmZpbHRlcigodG9rZW4pPT5SLm5vdChSLmZpbmQoUi5lcXVhbHModG9rZW4pKShiYWRXb3JkTGlzdCkpLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIHdvcmRGcmVxQ291bnQodG9rZW5zLCBmcmVxQ291bnQ9e30pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBVcGRhdGVGcmVxID0gKGZyZXFDb3VudCwgdG9rZW4pPT57XG4gICAgICAgICAgICBpZihmcmVxQ291bnRbdG9rZW5dID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGZyZXFDb3VudFt0b2tlbl0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBmcmVxQ291bnRbdG9rZW5dICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJlcUNvdW50O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoVXBkYXRlRnJlcSwgZnJlcUNvdW50LCB0b2tlbnMpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBUb2tlblRyYW5zZm9ybWluZ01peGluczsiLCJjb25zdCBUb2tlbml6aW5nTWl4aW5zID0gKEJhc2VGdW5jdGlvbkNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VGdW5jdGlvbkNsYXNze1xuICAgIGNsZWFuVGV4dCh0ZXh0LCByZW1vdmVQYXR0ZXJuPW51bGwpe1xuICAgICAgICByZW1vdmVQYXR0ZXJuID0gcmVtb3ZlUGF0dGVybiB8fCAvWy4sXFwvIyEkJVxcXiZcXCo7Ont9PVxcLV9gfigpXFxuXFx0XS9nO1xuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHJlbW92ZVBhdHRlcm4sXCIgXCIpO1xuICAgIH1cbiAgICB0b2tlbml6ZSh0ZXh0LCB0b0xvd2VyPXRydWUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUb2tlbml6ZXIgPSB0aGlzLlRva2VuaXplcjtcbiAgICAgICAgbGV0IGNsZWFuVGV4dCA9IHRoaXMuY2xlYW5UZXh0KHRleHQpO1xuICAgICAgICBsZXQgcmF3VG9rZW5zID0gVG9rZW5pemVyKGNsZWFuVGV4dCk7XG4gICAgICAgIGxldCB0b2tlbnMgPSBSLmZpbHRlcigodG9rZW4pPT5SLm5vdChSLmlzRW1wdHkodG9rZW4pKSxyYXdUb2tlbnMpO1xuICAgICAgICBpZih0b0xvd2VyKXtcbiAgICAgICAgICAgIHJldHVybiBSLm1hcChSLnRvTG93ZXIsIHRva2Vucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2tlbml6aW5nTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSXRlbU5vcm1hbGl6aW5nIH0gZnJvbSAnLi9pdGVtTm9ybWFsaXppbmcubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTnVsbEl0ZW1SZXBsYWNlIH0gZnJvbSAnLi9udWxsSXRlbVJlcGxhY2luZy5taXhpbnMnOyIsImNvbnN0IEl0ZW1Ob3JtYWxpemluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIGl0ZW1Ob3JtYWxpemUoc2FtcGxlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbU5vcm1hbGl6aW5nTWl4aW5zOyIsImNvbnN0IE51bGxJdGVtUmVwbGFjaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgbnVsbEl0ZW1SZXBsYWNlKHNhbXBsZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOdWxsSXRlbVJlcGxhY2luZ01peGluczsiLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb24gfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGlucyB9IGZyb20gJy4vSW1hZ2UvaW5kZXgnO1xuY2xhc3MgSW1hZ2VQcmVwcm9jZXNzaW5nIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3Rpb24sIFtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIEltYWdlU3BsaXR0aW5nTWl4aW5zXG4gICAgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJbWFnZVByZXByb2Nlc3Npbmc7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIFByZXByb2Nlc3NpbmdNaXhpbnN9IGZyb20gJy4vcHJlcHJvY2Vzc2luZy5taXhpbnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGltYWdlUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vaW1hZ2VQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBubHBQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9ubHBQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0YWJ1bGFyUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vdGFidWxhclByZXByb2Nlc3NpbmcnOyIsImltcG9ydCB7IEZ1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbiB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVG9rZW5pemluZ01peGlucywgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL05MUC9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRva2VuaXplckVOIH0gZnJvbSAnLi90b2tlbml6ZXIuZW4nO1xuY2xhc3MgTkxQUHJlcHJvY2Vzc2luZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBcbiAgICBbICAgVG9rZW5pemluZ01peGlucywgXG4gICAgICAgIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuVG9rZW5pemVyID0gVG9rZW5pemVyRU47XG4gICAgfVxuICAgIGdldCBUb2tlbml6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMudG9rZW5pemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd0b2tlbml6ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuaXplcjtcbiAgICB9XG4gICAgc2V0IFRva2VuaXplcih0b2tlbml6ZXIpe1xuICAgICAgICB0aGlzLnRva2VuaXplciA9IHRva2VuaXplcjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOTFBQcmVwcm9jZXNzaW5nOyIsImltcG9ydCB7IEFzc2VydCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY29uc3QgUHJlcHJvY2Vzc2luZ01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3tcbiAgICBcbiAgICBnZXQgUHJlcHJvY2Vzc2luZ1NhbXBsZUZuKCl7XG4gICAgICAgIGlmKCF0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncHJlcHJvY2Vzc2luZ1NhbXBsZUZuIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nU2FtcGxlRm47XG4gICAgfVxuICAgIFxuICAgIGdldCBQcmVwcm9jZXNzaW5nTGFiZWxGbigpe1xuICAgICAgICBpZighdGhpcy5wcmVwcm9jZXNzaW5nTGFiZWxGbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncHJlcHJvY2Vzc2luZ0xhYmVsRm4gaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuO1xuICAgIH1cbiAgICBzZXQgUHJlcHJvY2Vzc2luZ1NhbXBsZUZuKHByZXByb2Nlc3NpbmdTYW1wbGVGbil7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ1NhbXBsZUZuID0gcHJlcHJvY2Vzc2luZ1NhbXBsZUZuO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBzZXQgUHJlcHJvY2Vzc2luZ0xhYmVsRm4ocHJlcHJvY2Vzc2luZ0xhYmVsRm4pe1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuID0gcHJlcHJvY2Vzc2luZ0xhYmVsRm47XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0xhYmVsRm4uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgc2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyhwcmVwcm9jZXNzaW5nU2FtcGxlRm4sIHByZXByb2Nlc3NpbmdMYWJlbEZuKXtcbiAgICAgICAgQXNzZXJ0LmJlSW5zdGFuY2VPZihwcmVwcm9jZXNzaW5nU2FtcGxlRm4sIEZ1bmN0aW9uKTtcbiAgICAgICAgQXNzZXJ0LmJlSW5zdGFuY2VPZihwcmVwcm9jZXNzaW5nTGFiZWxGbiwgRnVuY3Rpb24pO1xuICAgICAgICB0aGlzLlByZXByb2Nlc3NpbmdTYW1wbGVGbiA9IHByZXByb2Nlc3NpbmdTYW1wbGVGbjtcbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nTGFiZWxGbiA9IHByZXByb2Nlc3NpbmdMYWJlbEZuO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZXByb2Nlc3NpbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9uIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBJdGVtTm9ybWFsaXppbmcsIE51bGxJdGVtUmVwbGFjZSB9IGZyb20gJy4vVGFidWxhci9pbmRleCc7XG5jbGFzcyBUYWJ1bGFyUHJlcHJvY2Vzc2luZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBcbiAgICBbIEl0ZW1Ob3JtYWxpemluZywgTnVsbEl0ZW1SZXBsYWNlIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFidWxhclByZXByb2Nlc3Npbmc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9rZW5pemVyRU4odGV4dCl7XG4gICAgY29uc3QgUmUgPSAvW1xccy5cIicvXFx8OzooKVxcW1xcXVxcQFxcI1xcJFxcJl0vZztcbiAgICByZXR1cm4gdGV4dC5zcGxpdChSZSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==