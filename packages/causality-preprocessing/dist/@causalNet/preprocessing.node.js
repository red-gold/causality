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
    return sample;
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
    return sample;
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




class NLPPreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], [_Image_index__WEBPACK_IMPORTED_MODULE_2__["ColorTransformingMixins"], _Image_index__WEBPACK_IMPORTED_MODULE_2__["ImageSplittingMixins"]]) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new NLPPreprocessing());

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
const PreprocessingMixins = BaseClass => class extends BaseClass {
  get PreprocessingSampleFn() {
    if (!this.preprocessingSampleFn) {
      throw Error('setPreprocessingFunctions must be called');
    }

    return this.preprocessingSampleFn;
  }

  get PreprocessingLabelFn() {
    if (!this.preprocessingLabelFn) {
      throw Error('setPreprocessingFunctions must be called');
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
    if (typeof preprocessingSampleFn !== 'function') {
      throw Error('preprocessingSampleFn must be Function');
    }

    if (typeof preprocessingLabelFn !== 'function') {
      throw Error('preprocessingLabelFn must be Function');
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9pbWFnZVNwbGl0dGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlblRyYW5zZm9ybWluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlbml6aW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9pdGVtTm9ybWFsaXppbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9UYWJ1bGFyL251bGxJdGVtUmVwbGFjaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW1hZ2VQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvbmxwUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvcHJlcHJvY2Vzc2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3RhYnVsYXJQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy90b2tlbml6ZXIuZW4uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ0NsYXNzIiwiY29sb3JUcmFuc2Zvcm0iLCJzYW1wbGVCdWZmZXIiLCJjaGFubmVsU2l6ZSIsInRyYW5mb3JtRm4iLCJSIiwibWFwIiwic3BsaXRFdmVyeSIsImJsYWNrV2hpdGVUcmFuc2Zvcm0iLCJCbGFja1doaXRlRm4iLCJwaXhlbCIsInBpeGVsVmFsdWUiLCJJbWFnZVNwbGl0dGluZ01peGlucyIsImltYWdlU3BsaXQiLCJzcGxpdFNpemUiLCJUb2tlblRyYW5zZm9ybWluZ01peGlucyIsImJhZFdvcmRzRmlsdGVyIiwidG9rZW5zIiwiYmFkV29yZExpc3QiLCJmaWx0ZXIiLCJ0b2tlbiIsIm5vdCIsImZpbmQiLCJlcXVhbHMiLCJ3b3JkRnJlcUNvdW50IiwiZnJlcUNvdW50IiwiVXBkYXRlRnJlcSIsInVuZGVmaW5lZCIsInJlZHVjZSIsIlRva2VuaXppbmdNaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImNsZWFuVGV4dCIsInRleHQiLCJyZW1vdmVQYXR0ZXJuIiwicmVwbGFjZSIsInRva2VuaXplIiwidG9Mb3dlciIsIlRva2VuaXplciIsInJhd1Rva2VucyIsImlzRW1wdHkiLCJJdGVtTm9ybWFsaXppbmdNaXhpbnMiLCJpdGVtTm9ybWFsaXplIiwic2FtcGxlIiwiTnVsbEl0ZW1SZXBsYWNpbmdNaXhpbnMiLCJudWxsSXRlbVJlcGxhY2UiLCJOTFBQcmVwcm9jZXNzaW5nIiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZUZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJUb2tlbml6ZXJFTiIsInRva2VuaXplciIsIkVycm9yIiwiUHJlcHJvY2Vzc2luZ01peGlucyIsIkJhc2VDbGFzcyIsIlByZXByb2Nlc3NpbmdTYW1wbGVGbiIsInByZXByb2Nlc3NpbmdTYW1wbGVGbiIsIlByZXByb2Nlc3NpbmdMYWJlbEZuIiwicHJlcHJvY2Vzc2luZ0xhYmVsRm4iLCJiaW5kIiwic2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyIsIlRhYnVsYXJQcmVwcm9jZXNzaW5nIiwiSXRlbU5vcm1hbGl6aW5nIiwiTnVsbEl0ZW1SZXBsYWNlIiwiUmUiLCJzcGxpdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQSxNQUFNQSx1QkFBdUIsR0FBSUMsa0JBQUQsSUFBd0IsY0FBY0Esa0JBQWQsQ0FBZ0M7QUFDcEZDLGdCQUFjLENBQUNDLFlBQUQsRUFBZUMsV0FBZixFQUE0QkMsVUFBNUIsRUFBdUM7QUFDakQsVUFBTUMsQ0FBQyxHQUFHLEtBQUtBLENBQWY7QUFDQSxXQUFPQSxDQUFDLENBQUNDLEdBQUYsQ0FBTUYsVUFBTixFQUFrQkMsQ0FBQyxDQUFDRSxVQUFGLENBQWFKLFdBQWIsRUFBMEJELFlBQTFCLENBQWxCLENBQVA7QUFDSDs7QUFDRE0scUJBQW1CLENBQUNOLFlBQUQsRUFBZUMsV0FBZixFQUEyQjtBQUMxQyxVQUFNTSxZQUFZLEdBQUlDLEtBQUQsSUFBUztBQUMxQixVQUFJQyxVQUFVLEdBQUdELEtBQUssQ0FBQyxDQUFELENBQUwsR0FBUyxHQUFULEdBQWVBLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBUyxHQUF4QixHQUE2QkEsS0FBSyxDQUFDLENBQUQsQ0FBbkQ7O0FBQ0EsVUFBSUMsVUFBVSxHQUFHLENBQWpCLEVBQW9CO0FBQ2hCLGVBQU8sQ0FBUDtBQUNILE9BRkQsTUFHSTtBQUNBLGVBQU8sQ0FBUDtBQUNIO0FBQ0osS0FSRDs7QUFTQSxTQUFLVixjQUFMLENBQW9CUSxZQUFwQixFQUFrQ1AsWUFBbEMsRUFBZ0RDLFdBQWhEO0FBQ0g7O0FBaEJtRixDQUF4Rjs7QUFtQmVKLHNGQUFmLEU7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBLE1BQU1hLG9CQUFvQixHQUFJWixrQkFBRCxJQUF3QixjQUFjQSxrQkFBZCxDQUFnQztBQUNqRmEsWUFBVSxDQUFDWCxZQUFELEVBQWVZLFNBQWYsRUFBeUI7QUFDL0IsV0FBTyxLQUFLVCxDQUFMLENBQU9FLFVBQVAsQ0FBa0JPLFNBQWxCLEVBQTZCWixZQUE3QixDQUFQO0FBQ0g7O0FBSGdGLENBQXJGOztBQU1lVSxtRkFBZixFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEsTUFBTUcsdUJBQXVCLEdBQUlmLGtCQUFELElBQXdCLGNBQWNBLGtCQUFkLENBQWdDO0FBQ3BGZ0IsZ0JBQWMsQ0FBQ0MsTUFBRCxFQUFTQyxXQUFULEVBQXFCO0FBQy9CLFVBQU1iLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsV0FBT0EsQ0FBQyxDQUFDYyxNQUFGLENBQVVDLEtBQUQsSUFBU2YsQ0FBQyxDQUFDZ0IsR0FBRixDQUFNaEIsQ0FBQyxDQUFDaUIsSUFBRixDQUFPakIsQ0FBQyxDQUFDa0IsTUFBRixDQUFTSCxLQUFULENBQVAsRUFBd0JGLFdBQXhCLENBQU4sQ0FBbEIsRUFBK0RELE1BQS9ELENBQVA7QUFDSDs7QUFFRE8sZUFBYSxDQUFDUCxNQUFELEVBQVNRLFNBQVMsR0FBQyxFQUFuQixFQUFzQjtBQUMvQixVQUFNcEIsQ0FBQyxHQUFHLEtBQUtBLENBQWY7O0FBQ0EsVUFBTXFCLFVBQVUsR0FBRyxDQUFDRCxTQUFELEVBQVlMLEtBQVosS0FBb0I7QUFDbkMsVUFBR0ssU0FBUyxDQUFDTCxLQUFELENBQVQsS0FBcUJPLFNBQXhCLEVBQWtDO0FBQzlCRixpQkFBUyxDQUFDTCxLQUFELENBQVQsR0FBbUIsQ0FBbkI7QUFDSCxPQUZELE1BR0k7QUFDQUssaUJBQVMsQ0FBQ0wsS0FBRCxDQUFULElBQW9CLENBQXBCO0FBQ0g7O0FBQ0QsYUFBT0ssU0FBUDtBQUNILEtBUkQ7O0FBU0EsV0FBT3BCLENBQUMsQ0FBQ3VCLE1BQUYsQ0FBU0YsVUFBVCxFQUFxQkQsU0FBckIsRUFBZ0NSLE1BQWhDLENBQVA7QUFDSDs7QUFsQm1GLENBQXhGOztBQW9CZUYsc0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUEsTUFBTWMsZ0JBQWdCLEdBQUlDLGlCQUFELElBQXVCLGNBQWNBLGlCQUFkLENBQStCO0FBQzNFQyxXQUFTLENBQUNDLElBQUQsRUFBT0MsYUFBYSxHQUFDLElBQXJCLEVBQTBCO0FBQy9CQSxpQkFBYSxHQUFHQSxhQUFhLElBQUksa0NBQWpDO0FBQ0EsV0FBT0QsSUFBSSxDQUFDRSxPQUFMLENBQWFELGFBQWIsRUFBMkIsR0FBM0IsQ0FBUDtBQUNIOztBQUNERSxVQUFRLENBQUNILElBQUQsRUFBT0ksT0FBTyxHQUFDLElBQWYsRUFBb0I7QUFDeEIsVUFBTS9CLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsVUFBTWdDLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFFBQUlOLFNBQVMsR0FBRyxLQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBaEI7QUFDQSxRQUFJTSxTQUFTLEdBQUdELFNBQVMsQ0FBQ04sU0FBRCxDQUF6QjtBQUNBLFFBQUlkLE1BQU0sR0FBR1osQ0FBQyxDQUFDYyxNQUFGLENBQVVDLEtBQUQsSUFBU2YsQ0FBQyxDQUFDZ0IsR0FBRixDQUFNaEIsQ0FBQyxDQUFDa0MsT0FBRixDQUFVbkIsS0FBVixDQUFOLENBQWxCLEVBQTBDa0IsU0FBMUMsQ0FBYjs7QUFDQSxRQUFHRixPQUFILEVBQVc7QUFDUCxhQUFPL0IsQ0FBQyxDQUFDQyxHQUFGLENBQU1ELENBQUMsQ0FBQytCLE9BQVIsRUFBaUJuQixNQUFqQixDQUFQO0FBQ0gsS0FGRCxNQUdJO0FBQ0EsYUFBT0EsTUFBUDtBQUNIO0FBQ0o7O0FBakIwRSxDQUEvRTs7QUFvQmVZLCtFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSxNQUFNVyxxQkFBcUIsR0FBSXhDLGtCQUFELElBQXdCLGNBQWNBLGtCQUFkLENBQWdDO0FBQ2xGeUMsZUFBYSxDQUFDQyxNQUFELEVBQVE7QUFDakIsV0FBT0EsTUFBUDtBQUNIOztBQUhpRixDQUF0Rjs7QUFNZUYsb0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQSxNQUFNRyx1QkFBdUIsR0FBSTNDLGtCQUFELElBQXdCLGNBQWNBLGtCQUFkLENBQWdDO0FBQ3BGNEMsaUJBQWUsQ0FBQ0YsTUFBRCxFQUFRO0FBQ25CLFdBQU9BLE1BQVA7QUFDSDs7QUFIbUYsQ0FBeEY7O0FBTWVDLHNGQUFmLEU7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNRSxnQkFBTixTQUErQkMseURBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsd0RBQWpCLEVBQStCLENBQ3REakQsb0VBRHNELEVBQzdCYSxpRUFENkIsQ0FBL0IsQ0FBL0IsQ0FFTTtBQUNGcUMsYUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFIQzs7QUFNUyxtRUFBSUosZ0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsZ0JBQU4sU0FBK0JDLHlEQUFRLENBQUNDLE9BQVQsQ0FBaUJDLHdEQUFqQixFQUMzQixDQUFJbkIsMkRBQUosRUFDSWQsa0VBREosQ0FEMkIsQ0FBL0IsQ0FFa0M7QUFDOUJrQyxhQUFXLEdBQUU7QUFDVDtBQUNBLFNBQUtaLFNBQUwsR0FBaUJhLHFEQUFqQjtBQUNIOztBQUNELE1BQUliLFNBQUosR0FBZTtBQUNYLFFBQUcsQ0FBQyxLQUFLYyxTQUFULEVBQW1CO0FBQ2YsWUFBTUMsS0FBSyxDQUFDLHNCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUtELFNBQVo7QUFDSDs7QUFDRCxNQUFJZCxTQUFKLENBQWNjLFNBQWQsRUFBd0I7QUFDcEIsU0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDSDs7QUFiNkI7O0FBZ0JuQixtRUFBSU4sZ0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQSxNQUFNUSxtQkFBbUIsR0FBSUMsU0FBRCxJQUFlLGNBQWNBLFNBQWQsQ0FBdUI7QUFDOUQsTUFBSUMscUJBQUosR0FBMkI7QUFDdkIsUUFBRyxDQUFDLEtBQUtDLHFCQUFULEVBQStCO0FBQzNCLFlBQU1KLEtBQUssQ0FBQywwQ0FBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLSSxxQkFBWjtBQUNIOztBQUNELE1BQUlDLG9CQUFKLEdBQTBCO0FBQ3RCLFFBQUcsQ0FBQyxLQUFLQyxvQkFBVCxFQUE4QjtBQUMxQixZQUFNTixLQUFLLENBQUMsMENBQUQsQ0FBWDtBQUNIOztBQUNELFdBQU8sS0FBS00sb0JBQVo7QUFDSDs7QUFDRCxNQUFJSCxxQkFBSixDQUEwQkMscUJBQTFCLEVBQWdEO0FBQzVDLFNBQUtBLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFDQSxTQUFLQSxxQkFBTCxDQUEyQkcsSUFBM0IsQ0FBZ0MsSUFBaEM7QUFDSDs7QUFDRCxNQUFJRixvQkFBSixDQUF5QkMsb0JBQXpCLEVBQThDO0FBQzFDLFNBQUtBLG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFDQSxTQUFLQSxvQkFBTCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0I7QUFDSDs7QUFDREMsMkJBQXlCLENBQUNKLHFCQUFELEVBQXdCRSxvQkFBeEIsRUFBNkM7QUFDbEUsUUFBRyxPQUFPRixxQkFBUCxLQUFnQyxVQUFuQyxFQUE4QztBQUMxQyxZQUFNSixLQUFLLENBQUMsd0NBQUQsQ0FBWDtBQUNIOztBQUNELFFBQUcsT0FBT00sb0JBQVAsS0FBK0IsVUFBbEMsRUFBNkM7QUFDekMsWUFBTU4sS0FBSyxDQUFDLHVDQUFELENBQVg7QUFDSDs7QUFDRCxTQUFLRyxxQkFBTCxHQUE2QkMscUJBQTdCO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEJDLG9CQUE1QjtBQUNIOztBQTlCNkQsQ0FBbEU7O0FBaUNlTCxrRkFBZixFOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1RLG9CQUFOLFNBQW1DZix5REFBUSxDQUFDQyxPQUFULENBQWlCQyx3REFBakIsRUFDL0IsQ0FBRWMsOERBQUYsRUFBbUJDLDhEQUFuQixDQUQrQixDQUFuQyxDQUN5QztBQUNyQ2QsYUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFIb0M7O0FBTTFCLG1FQUFJWSxvQkFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBZSxTQUFTWCxXQUFULENBQXFCbEIsSUFBckIsRUFBMEI7QUFDckMsUUFBTWdDLEVBQUUsR0FBRyw2QkFBWDtBQUNBLFNBQU9oQyxJQUFJLENBQUNpQyxLQUFMLENBQVdELEVBQVgsQ0FBUDtBQUNILEM7Ozs7Ozs7Ozs7O0FDSEQsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICBjb2xvclRyYW5zZm9ybShzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplLCB0cmFuZm9ybUZuKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIubWFwKHRyYW5mb3JtRm4sIFIuc3BsaXRFdmVyeShjaGFubmVsU2l6ZSwgc2FtcGxlQnVmZmVyKSk7XG4gICAgfVxuICAgIGJsYWNrV2hpdGVUcmFuc2Zvcm0oc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSl7XG4gICAgICAgIGNvbnN0IEJsYWNrV2hpdGVGbiA9IChwaXhlbCk9PntcbiAgICAgICAgICAgIGxldCBwaXhlbFZhbHVlID0gcGl4ZWxbMF0qMjU1ICsgcGl4ZWxbMV0qMjU1ICtwaXhlbFsyXTtcbiAgICAgICAgICAgIGlmKCBwaXhlbFZhbHVlID4gMCApe1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvclRyYW5zZm9ybShCbGFja1doaXRlRm4sIHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zOyIsImNvbnN0IEltYWdlU3BsaXR0aW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgaW1hZ2VTcGxpdChzYW1wbGVCdWZmZXIsIHNwbGl0U2l6ZSl7XG4gICAgICAgIHJldHVybiB0aGlzLlIuc3BsaXRFdmVyeShzcGxpdFNpemUsIHNhbXBsZUJ1ZmZlcik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTcGxpdHRpbmdNaXhpbnM7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi9jb2xvclRyYW5zZm9ybWluZy5taXhpbnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEltYWdlU3BsaXR0aW5nTWl4aW5zIH0gZnJvbSAnLi9pbWFnZVNwbGl0dGluZy5taXhpbnMnOyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBUb2tlbml6aW5nTWl4aW5zIH0gZnJvbSAnLi90b2tlbml6aW5nLm1peGlucyc7XG5leHBvcnQge2RlZmF1bHQgYXMgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL3Rva2VuVHJhbnNmb3JtaW5nLm1peGlucyc7IiwiY29uc3QgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICBiYWRXb3Jkc0ZpbHRlcih0b2tlbnMsIGJhZFdvcmRMaXN0KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuZmlsdGVyKCh0b2tlbik9PlIubm90KFIuZmluZChSLmVxdWFscyh0b2tlbikpKGJhZFdvcmRMaXN0KSksIHRva2Vucyk7XG4gICAgfVxuXG4gICAgd29yZEZyZXFDb3VudCh0b2tlbnMsIGZyZXFDb3VudD17fSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFVwZGF0ZUZyZXEgPSAoZnJlcUNvdW50LCB0b2tlbik9PntcbiAgICAgICAgICAgIGlmKGZyZXFDb3VudFt0b2tlbl0gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgZnJlcUNvdW50W3Rva2VuXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGZyZXFDb3VudFt0b2tlbl0gKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmcmVxQ291bnQ7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSLnJlZHVjZShVcGRhdGVGcmVxLCBmcmVxQ291bnQsIHRva2Vucyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zOyIsImNvbnN0IFRva2VuaXppbmdNaXhpbnMgPSAoQmFzZUZ1bmN0aW9uQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZUZ1bmN0aW9uQ2xhc3N7XG4gICAgY2xlYW5UZXh0KHRleHQsIHJlbW92ZVBhdHRlcm49bnVsbCl7XG4gICAgICAgIHJlbW92ZVBhdHRlcm4gPSByZW1vdmVQYXR0ZXJuIHx8IC9bLixcXC8jISQlXFxeJlxcKjs6e309XFwtX2B+KClcXG5cXHRdL2c7XG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UocmVtb3ZlUGF0dGVybixcIiBcIik7XG4gICAgfVxuICAgIHRva2VuaXplKHRleHQsIHRvTG93ZXI9dHJ1ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFRva2VuaXplciA9IHRoaXMuVG9rZW5pemVyO1xuICAgICAgICBsZXQgY2xlYW5UZXh0ID0gdGhpcy5jbGVhblRleHQodGV4dCk7XG4gICAgICAgIGxldCByYXdUb2tlbnMgPSBUb2tlbml6ZXIoY2xlYW5UZXh0KTtcbiAgICAgICAgbGV0IHRva2VucyA9IFIuZmlsdGVyKCh0b2tlbik9PlIubm90KFIuaXNFbXB0eSh0b2tlbikpLHJhd1Rva2Vucyk7XG4gICAgICAgIGlmKHRvTG93ZXIpe1xuICAgICAgICAgICAgcmV0dXJuIFIubWFwKFIudG9Mb3dlciwgdG9rZW5zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRva2VuaXppbmdNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBJdGVtTm9ybWFsaXppbmcgfSBmcm9tICcuL2l0ZW1Ob3JtYWxpemluZy5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOdWxsSXRlbVJlcGxhY2UgfSBmcm9tICcuL251bGxJdGVtUmVwbGFjaW5nLm1peGlucyc7IiwiY29uc3QgSXRlbU5vcm1hbGl6aW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgaXRlbU5vcm1hbGl6ZShzYW1wbGUpe1xuICAgICAgICByZXR1cm4gc2FtcGxlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1Ob3JtYWxpemluZ01peGluczsiLCJjb25zdCBOdWxsSXRlbVJlcGxhY2luZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIG51bGxJdGVtUmVwbGFjZShzYW1wbGUpe1xuICAgICAgICByZXR1cm4gc2FtcGxlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJdGVtUmVwbGFjaW5nTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbiB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIEltYWdlU3BsaXR0aW5nTWl4aW5zIH0gZnJvbSAnLi9JbWFnZS9pbmRleCc7XG5jbGFzcyBOTFBQcmVwcm9jZXNzaW5nIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3Rpb24sIFtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIEltYWdlU3BsaXR0aW5nTWl4aW5zXG4gICAgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOTFBQcmVwcm9jZXNzaW5nOyIsImV4cG9ydCB7ZGVmYXVsdCBhcyBQcmVwcm9jZXNzaW5nTWl4aW5zfSBmcm9tICcuL3ByZXByb2Nlc3NpbmcubWl4aW5zJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbWFnZVByZXByb2Nlc3NpbmcgfSBmcm9tICcuL2ltYWdlUHJlcHJvY2Vzc2luZyc7XG5leHBvcnQge2RlZmF1bHQgYXMgbmxwUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vbmxwUHJlcHJvY2Vzc2luZyc7XG5leHBvcnQge2RlZmF1bHQgYXMgdGFidWxhclByZXByb2Nlc3NpbmcgfSBmcm9tICcuL3RhYnVsYXJQcmVwcm9jZXNzaW5nJzsiLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb24gfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRva2VuaXppbmdNaXhpbnMsIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi9OTFAvaW5kZXgnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBUb2tlbml6ZXJFTiB9IGZyb20gJy4vdG9rZW5pemVyLmVuJztcbmNsYXNzIE5MUFByZXByb2Nlc3NpbmcgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdGlvbiwgXG4gICAgWyAgIFRva2VuaXppbmdNaXhpbnMsIFxuICAgICAgICBUb2tlblRyYW5zZm9ybWluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLlRva2VuaXplciA9IFRva2VuaXplckVOO1xuICAgIH1cbiAgICBnZXQgVG9rZW5pemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnRva2VuaXplcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndG9rZW5pemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbml6ZXI7XG4gICAgfVxuICAgIHNldCBUb2tlbml6ZXIodG9rZW5pemVyKXtcbiAgICAgICAgdGhpcy50b2tlbml6ZXIgPSB0b2tlbml6ZXI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTkxQUHJlcHJvY2Vzc2luZzsiLCJjb25zdCBQcmVwcm9jZXNzaW5nTWl4aW5zID0gKEJhc2VDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlQ2xhc3N7XG4gICAgZ2V0IFByZXByb2Nlc3NpbmdTYW1wbGVGbigpe1xuICAgICAgICBpZighdGhpcy5wcmVwcm9jZXNzaW5nU2FtcGxlRm4pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3NldFByZXByb2Nlc3NpbmdGdW5jdGlvbnMgbXVzdCBiZSBjYWxsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nU2FtcGxlRm47XG4gICAgfVxuICAgIGdldCBQcmVwcm9jZXNzaW5nTGFiZWxGbigpe1xuICAgICAgICBpZighdGhpcy5wcmVwcm9jZXNzaW5nTGFiZWxGbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyBtdXN0IGJlIGNhbGxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuO1xuICAgIH1cbiAgICBzZXQgUHJlcHJvY2Vzc2luZ1NhbXBsZUZuKHByZXByb2Nlc3NpbmdTYW1wbGVGbil7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ1NhbXBsZUZuID0gcHJlcHJvY2Vzc2luZ1NhbXBsZUZuO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBzZXQgUHJlcHJvY2Vzc2luZ0xhYmVsRm4ocHJlcHJvY2Vzc2luZ0xhYmVsRm4pe1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuID0gcHJlcHJvY2Vzc2luZ0xhYmVsRm47XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0xhYmVsRm4uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgc2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyhwcmVwcm9jZXNzaW5nU2FtcGxlRm4sIHByZXByb2Nlc3NpbmdMYWJlbEZuKXtcbiAgICAgICAgaWYodHlwZW9mKHByZXByb2Nlc3NpbmdTYW1wbGVGbikhPT0nZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwcmVwcm9jZXNzaW5nU2FtcGxlRm4gbXVzdCBiZSBGdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZihwcmVwcm9jZXNzaW5nTGFiZWxGbikhPT0nZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwcmVwcm9jZXNzaW5nTGFiZWxGbiBtdXN0IGJlIEZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nU2FtcGxlRm4gPSBwcmVwcm9jZXNzaW5nU2FtcGxlRm47XG4gICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZ0xhYmVsRm4gPSBwcmVwcm9jZXNzaW5nTGFiZWxGbjtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmVwcm9jZXNzaW5nTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbiB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgSXRlbU5vcm1hbGl6aW5nLCBOdWxsSXRlbVJlcGxhY2UgfSBmcm9tICcuL1RhYnVsYXIvaW5kZXgnO1xuY2xhc3MgVGFidWxhclByZXByb2Nlc3NpbmcgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdGlvbiwgXG4gICAgWyBJdGVtTm9ybWFsaXppbmcsIE51bGxJdGVtUmVwbGFjZSBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhYnVsYXJQcmVwcm9jZXNzaW5nOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRva2VuaXplckVOKHRleHQpe1xuICAgIGNvbnN0IFJlID0gL1tcXHMuXCInL1xcfDs6KClcXFtcXF1cXEBcXCNcXCRcXCZdL2c7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoUmUpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=