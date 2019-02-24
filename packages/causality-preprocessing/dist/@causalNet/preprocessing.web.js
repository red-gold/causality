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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvY29sb3JUcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9pbWFnZVNwbGl0dGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlblRyYW5zZm9ybWluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC90b2tlbml6aW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9pdGVtTm9ybWFsaXppbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9UYWJ1bGFyL251bGxJdGVtUmVwbGFjaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW1hZ2VQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvbmxwUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvcHJlcHJvY2Vzc2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3RhYnVsYXJQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy90b2tlbml6ZXIuZW4uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ0NsYXNzIiwiY29sb3JUcmFuc2Zvcm0iLCJzYW1wbGVCdWZmZXIiLCJjaGFubmVsU2l6ZSIsInRyYW5mb3JtRm4iLCJSIiwibWFwIiwic3BsaXRFdmVyeSIsImJsYWNrV2hpdGVUcmFuc2Zvcm0iLCJCbGFja1doaXRlRm4iLCJwaXhlbCIsInBpeGVsVmFsdWUiLCJJbWFnZVNwbGl0dGluZ01peGlucyIsImltYWdlU3BsaXQiLCJzcGxpdFNpemUiLCJUb2tlblRyYW5zZm9ybWluZ01peGlucyIsImJhZFdvcmRzRmlsdGVyIiwidG9rZW5zIiwiYmFkV29yZExpc3QiLCJmaWx0ZXIiLCJ0b2tlbiIsIm5vdCIsImZpbmQiLCJlcXVhbHMiLCJ3b3JkRnJlcUNvdW50IiwiZnJlcUNvdW50IiwiVXBkYXRlRnJlcSIsInVuZGVmaW5lZCIsInJlZHVjZSIsIlRva2VuaXppbmdNaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImNsZWFuVGV4dCIsInRleHQiLCJyZW1vdmVQYXR0ZXJuIiwicmVwbGFjZSIsInRva2VuaXplIiwidG9Mb3dlciIsIlRva2VuaXplciIsInJhd1Rva2VucyIsImlzRW1wdHkiLCJJdGVtTm9ybWFsaXppbmdNaXhpbnMiLCJpdGVtTm9ybWFsaXplIiwic2FtcGxlIiwiTnVsbEl0ZW1SZXBsYWNpbmdNaXhpbnMiLCJudWxsSXRlbVJlcGxhY2UiLCJOTFBQcmVwcm9jZXNzaW5nIiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZUZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJUb2tlbml6ZXJFTiIsInRva2VuaXplciIsIkVycm9yIiwiUHJlcHJvY2Vzc2luZ01peGlucyIsIkJhc2VDbGFzcyIsIlByZXByb2Nlc3NpbmdTYW1wbGVGbiIsInByZXByb2Nlc3NpbmdTYW1wbGVGbiIsIlByZXByb2Nlc3NpbmdMYWJlbEZuIiwicHJlcHJvY2Vzc2luZ0xhYmVsRm4iLCJiaW5kIiwic2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyIsIlRhYnVsYXJQcmVwcm9jZXNzaW5nIiwiSXRlbU5vcm1hbGl6aW5nIiwiTnVsbEl0ZW1SZXBsYWNlIiwiUmUiLCJzcGxpdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFD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RkFBZixFOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1RLG9CQUFOLFNBQW1DZix5REFBUSxDQUFDQyxPQUFULENBQWlCQyx3REFBakIsRUFDL0IsQ0FBRWMsOERBQUYsRUFBbUJDLDhEQUFuQixDQUQrQixDQUFuQyxDQUN5QztBQUNyQ2QsYUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFIb0M7O0FBTTFCLG1FQUFJWSxvQkFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBZSxTQUFTWCxXQUFULENBQXFCbEIsSUFBckIsRUFBMEI7QUFDckMsUUFBTWdDLEVBQUUsR0FBRyw2QkFBWDtBQUNBLFNBQU9oQyxJQUFJLENBQUNpQyxLQUFMLENBQVdELEVBQVgsQ0FBUDtBQUNILEM7Ozs7Ozs7Ozs7O0FDSEQsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmdcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmdcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBDb2xvclRyYW5zZm9ybWluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIGNvbG9yVHJhbnNmb3JtKHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUsIHRyYW5mb3JtRm4pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5tYXAodHJhbmZvcm1GbiwgUi5zcGxpdEV2ZXJ5KGNoYW5uZWxTaXplLCBzYW1wbGVCdWZmZXIpKTtcbiAgICB9XG4gICAgYmxhY2tXaGl0ZVRyYW5zZm9ybShzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKXtcbiAgICAgICAgY29uc3QgQmxhY2tXaGl0ZUZuID0gKHBpeGVsKT0+e1xuICAgICAgICAgICAgbGV0IHBpeGVsVmFsdWUgPSBwaXhlbFswXSoyNTUgKyBwaXhlbFsxXSoyNTUgK3BpeGVsWzJdO1xuICAgICAgICAgICAgaWYoIHBpeGVsVmFsdWUgPiAwICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yVHJhbnNmb3JtKEJsYWNrV2hpdGVGbiwgc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnM7IiwiY29uc3QgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICBpbWFnZVNwbGl0KHNhbXBsZUJ1ZmZlciwgc3BsaXRTaXplKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5zcGxpdEV2ZXJ5KHNwbGl0U2l6ZSwgc2FtcGxlQnVmZmVyKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNwbGl0dGluZ01peGluczsiLCJleHBvcnQge2RlZmF1bHQgYXMgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL2NvbG9yVHJhbnNmb3JtaW5nLm1peGlucyc7XG5leHBvcnQge2RlZmF1bHQgYXMgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgfSBmcm9tICcuL2ltYWdlU3BsaXR0aW5nLm1peGlucyc7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIFRva2VuaXppbmdNaXhpbnMgfSBmcm9tICcuL3Rva2VuaXppbmcubWl4aW5zJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBUb2tlblRyYW5zZm9ybWluZ01peGlucyB9IGZyb20gJy4vdG9rZW5UcmFuc2Zvcm1pbmcubWl4aW5zJzsiLCJjb25zdCBUb2tlblRyYW5zZm9ybWluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIGJhZFdvcmRzRmlsdGVyKHRva2VucywgYmFkV29yZExpc3Qpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5maWx0ZXIoKHRva2VuKT0+Ui5ub3QoUi5maW5kKFIuZXF1YWxzKHRva2VuKSkoYmFkV29yZExpc3QpKSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICB3b3JkRnJlcUNvdW50KHRva2VucywgZnJlcUNvdW50PXt9KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVXBkYXRlRnJlcSA9IChmcmVxQ291bnQsIHRva2VuKT0+e1xuICAgICAgICAgICAgaWYoZnJlcUNvdW50W3Rva2VuXSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBmcmVxQ291bnRbdG9rZW5dID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZnJlcUNvdW50W3Rva2VuXSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyZXFDb3VudDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKFVwZGF0ZUZyZXEsIGZyZXFDb3VudCwgdG9rZW5zKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnM7IiwiY29uc3QgVG9rZW5pemluZ01peGlucyA9IChCYXNlRnVuY3Rpb25DbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRnVuY3Rpb25DbGFzc3tcbiAgICBjbGVhblRleHQodGV4dCwgcmVtb3ZlUGF0dGVybj1udWxsKXtcbiAgICAgICAgcmVtb3ZlUGF0dGVybiA9IHJlbW92ZVBhdHRlcm4gfHwgL1suLFxcLyMhJCVcXF4mXFwqOzp7fT1cXC1fYH4oKVxcblxcdF0vZztcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZW1vdmVQYXR0ZXJuLFwiIFwiKTtcbiAgICB9XG4gICAgdG9rZW5pemUodGV4dCwgdG9Mb3dlcj10cnVlKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVG9rZW5pemVyID0gdGhpcy5Ub2tlbml6ZXI7XG4gICAgICAgIGxldCBjbGVhblRleHQgPSB0aGlzLmNsZWFuVGV4dCh0ZXh0KTtcbiAgICAgICAgbGV0IHJhd1Rva2VucyA9IFRva2VuaXplcihjbGVhblRleHQpO1xuICAgICAgICBsZXQgdG9rZW5zID0gUi5maWx0ZXIoKHRva2VuKT0+Ui5ub3QoUi5pc0VtcHR5KHRva2VuKSkscmF3VG9rZW5zKTtcbiAgICAgICAgaWYodG9Mb3dlcil7XG4gICAgICAgICAgICByZXR1cm4gUi5tYXAoUi50b0xvd2VyLCB0b2tlbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5pemluZ01peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEl0ZW1Ob3JtYWxpemluZyB9IGZyb20gJy4vaXRlbU5vcm1hbGl6aW5nLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE51bGxJdGVtUmVwbGFjZSB9IGZyb20gJy4vbnVsbEl0ZW1SZXBsYWNpbmcubWl4aW5zJzsiLCJjb25zdCBJdGVtTm9ybWFsaXppbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICBpdGVtTm9ybWFsaXplKHNhbXBsZSl7XG4gICAgICAgIHJldHVybiBzYW1wbGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbU5vcm1hbGl6aW5nTWl4aW5zOyIsImNvbnN0IE51bGxJdGVtUmVwbGFjaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgbnVsbEl0ZW1SZXBsYWNlKHNhbXBsZSl7XG4gICAgICAgIHJldHVybiBzYW1wbGU7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVsbEl0ZW1SZXBsYWNpbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9uIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBDb2xvclRyYW5zZm9ybWluZ01peGlucywgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgfSBmcm9tICcuL0ltYWdlL2luZGV4JztcbmNsYXNzIE5MUFByZXByb2Nlc3NpbmcgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdGlvbiwgW1xuICAgICAgICBDb2xvclRyYW5zZm9ybWluZ01peGlucywgSW1hZ2VTcGxpdHRpbmdNaXhpbnNcbiAgICBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5MUFByZXByb2Nlc3Npbmc7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIFByZXByb2Nlc3NpbmdNaXhpbnN9IGZyb20gJy4vcHJlcHJvY2Vzc2luZy5taXhpbnMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGltYWdlUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vaW1hZ2VQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBubHBQcmVwcm9jZXNzaW5nIH0gZnJvbSAnLi9ubHBQcmVwcm9jZXNzaW5nJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0YWJ1bGFyUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vdGFidWxhclByZXByb2Nlc3NpbmcnOyIsImltcG9ydCB7IEZ1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbiB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVG9rZW5pemluZ01peGlucywgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL05MUC9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRva2VuaXplckVOIH0gZnJvbSAnLi90b2tlbml6ZXIuZW4nO1xuY2xhc3MgTkxQUHJlcHJvY2Vzc2luZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBcbiAgICBbICAgVG9rZW5pemluZ01peGlucywgXG4gICAgICAgIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuVG9rZW5pemVyID0gVG9rZW5pemVyRU47XG4gICAgfVxuICAgIGdldCBUb2tlbml6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMudG9rZW5pemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd0b2tlbml6ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuaXplcjtcbiAgICB9XG4gICAgc2V0IFRva2VuaXplcih0b2tlbml6ZXIpe1xuICAgICAgICB0aGlzLnRva2VuaXplciA9IHRva2VuaXplcjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOTFBQcmVwcm9jZXNzaW5nOyIsImNvbnN0IFByZXByb2Nlc3NpbmdNaXhpbnMgPSAoQmFzZUNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VDbGFzc3tcbiAgICBnZXQgUHJlcHJvY2Vzc2luZ1NhbXBsZUZuKCl7XG4gICAgICAgIGlmKCF0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyBtdXN0IGJlIGNhbGxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbjtcbiAgICB9XG4gICAgZ2V0IFByZXByb2Nlc3NpbmdMYWJlbEZuKCl7XG4gICAgICAgIGlmKCF0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zIG11c3QgYmUgY2FsbGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0xhYmVsRm47XG4gICAgfVxuICAgIHNldCBQcmVwcm9jZXNzaW5nU2FtcGxlRm4ocHJlcHJvY2Vzc2luZ1NhbXBsZUZuKXtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nU2FtcGxlRm4gPSBwcmVwcm9jZXNzaW5nU2FtcGxlRm47XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ1NhbXBsZUZuLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIHNldCBQcmVwcm9jZXNzaW5nTGFiZWxGbihwcmVwcm9jZXNzaW5nTGFiZWxGbil7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0xhYmVsRm4gPSBwcmVwcm9jZXNzaW5nTGFiZWxGbjtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nTGFiZWxGbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBzZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zKHByZXByb2Nlc3NpbmdTYW1wbGVGbiwgcHJlcHJvY2Vzc2luZ0xhYmVsRm4pe1xuICAgICAgICBpZih0eXBlb2YocHJlcHJvY2Vzc2luZ1NhbXBsZUZuKSE9PSdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ByZXByb2Nlc3NpbmdTYW1wbGVGbiBtdXN0IGJlIEZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mKHByZXByb2Nlc3NpbmdMYWJlbEZuKSE9PSdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ByZXByb2Nlc3NpbmdMYWJlbEZuIG11c3QgYmUgRnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlByZXByb2Nlc3NpbmdTYW1wbGVGbiA9IHByZXByb2Nlc3NpbmdTYW1wbGVGbjtcbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nTGFiZWxGbiA9IHByZXByb2Nlc3NpbmdMYWJlbEZuO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZXByb2Nlc3NpbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9uIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBJdGVtTm9ybWFsaXppbmcsIE51bGxJdGVtUmVwbGFjZSB9IGZyb20gJy4vVGFidWxhci9pbmRleCc7XG5jbGFzcyBUYWJ1bGFyUHJlcHJvY2Vzc2luZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBcbiAgICBbIEl0ZW1Ob3JtYWxpemluZywgTnVsbEl0ZW1SZXBsYWNlIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFidWxhclByZXByb2Nlc3Npbmc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9rZW5pemVyRU4odGV4dCl7XG4gICAgY29uc3QgUmUgPSAvW1xccy5cIicvXFx8OzooKVxcW1xcXVxcQFxcI1xcJFxcJl0vZztcbiAgICByZXR1cm4gdGV4dC5zcGxpdChSZSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==