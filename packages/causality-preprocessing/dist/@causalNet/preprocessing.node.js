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

/***/ "./src/Image/colorTransforming.mixins.js":
/*!***********************************************!*\
  !*** ./src/Image/colorTransforming.mixins.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  var _default = ColorTransformingMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/Image/imageSplitting.mixins.js":
/*!********************************************!*\
  !*** ./src/Image/imageSplitting.mixins.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const ImageSplittingMixins = PreprocessingClass => class extends PreprocessingClass {
    imageSplit(sampleBuffer, splitSize) {
      return this.R.splitEvery(splitSize, sampleBuffer);
    }

  };

  var _default = ImageSplittingMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/Image/index.js":
/*!****************************!*\
  !*** ./src/Image/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./colorTransforming.mixins */ "./src/Image/colorTransforming.mixins.js"), __webpack_require__(/*! ./imageSplitting.mixins */ "./src/Image/imageSplitting.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _colorTransforming, _imageSplitting) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "ColorTransformingMixins", {
    enumerable: true,
    get: function () {
      return _colorTransforming.default;
    }
  });
  Object.defineProperty(_exports, "ImageSplittingMixins", {
    enumerable: true,
    get: function () {
      return _imageSplitting.default;
    }
  });
  _colorTransforming = _interopRequireDefault(_colorTransforming);
  _imageSplitting = _interopRequireDefault(_imageSplitting);
});

/***/ }),

/***/ "./src/NLP/index.js":
/*!**************************!*\
  !*** ./src/NLP/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./tokenizing.mixins */ "./src/NLP/tokenizing.mixins.js"), __webpack_require__(/*! ./tokenTransforming.mixins */ "./src/NLP/tokenTransforming.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _tokenizing, _tokenTransforming) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "TokenizingMixins", {
    enumerable: true,
    get: function () {
      return _tokenizing.default;
    }
  });
  Object.defineProperty(_exports, "TokenTransformingMixins", {
    enumerable: true,
    get: function () {
      return _tokenTransforming.default;
    }
  });
  _tokenizing = _interopRequireDefault(_tokenizing);
  _tokenTransforming = _interopRequireDefault(_tokenTransforming);
});

/***/ }),

/***/ "./src/NLP/tokenTransforming.mixins.js":
/*!*********************************************!*\
  !*** ./src/NLP/tokenTransforming.mixins.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const TokenTransformingMixins = PreprocessingClass => class extends PreprocessingClass {
    BadWordsFilter(tokens, badWordList) {
      const R = this.R;
      return R.filter(token => R.not(R.find(R.equals(token))(badWordList)), tokens);
    }

    WordFreqCount(tokens, freqCount = {}) {
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

  var _default = TokenTransformingMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/NLP/tokenizing.mixins.js":
/*!**************************************!*\
  !*** ./src/NLP/tokenizing.mixins.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  var _default = TokenizingMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/Tabular/index.js":
/*!******************************!*\
  !*** ./src/Tabular/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./itemNormalizing.mixins */ "./src/Tabular/itemNormalizing.mixins.js"), __webpack_require__(/*! ./nullItemReplacing.mixins */ "./src/Tabular/nullItemReplacing.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _itemNormalizing, _nullItemReplacing) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "ItemNormalizing", {
    enumerable: true,
    get: function () {
      return _itemNormalizing.default;
    }
  });
  Object.defineProperty(_exports, "NullItemReplace", {
    enumerable: true,
    get: function () {
      return _nullItemReplacing.default;
    }
  });
  _itemNormalizing = _interopRequireDefault(_itemNormalizing);
  _nullItemReplacing = _interopRequireDefault(_nullItemReplacing);
});

/***/ }),

/***/ "./src/Tabular/itemNormalizing.mixins.js":
/*!***********************************************!*\
  !*** ./src/Tabular/itemNormalizing.mixins.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const ItemNormalizingMixins = PreprocessingClass => class extends PreprocessingClass {
    itemNormalize(sample) {
      return sample;
    }

  };

  var _default = ItemNormalizingMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/Tabular/nullItemReplacing.mixins.js":
/*!*************************************************!*\
  !*** ./src/Tabular/nullItemReplacing.mixins.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const NullItemReplacingMixins = PreprocessingClass => class extends PreprocessingClass {
    nullItemReplace(sample) {
      return sample;
    }

  };

  var _default = NullItemReplacingMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/imagePreprocessing.js":
/*!***********************************!*\
  !*** ./src/imagePreprocessing.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./Image/index */ "./src/Image/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class NLPPreprocessing extends _causalNet2.Platform.mixWith(_causalNet.Function, [_index.ColorTransformingMixins, _index.ImageSplittingMixins]) {
    constructor() {
      super();
    }

  }

  var _default = new NLPPreprocessing();

  _exports.default = _default;
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./preprocessing.mixins */ "./src/preprocessing.mixins.js"), __webpack_require__(/*! ./imagePreprocessing */ "./src/imagePreprocessing.js"), __webpack_require__(/*! ./nlpPreprocessing */ "./src/nlpPreprocessing.js"), __webpack_require__(/*! ./tabularPreprocessing */ "./src/tabularPreprocessing.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _preprocessing, _imagePreprocessing, _nlpPreprocessing, _tabularPreprocessing) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "PreprocessingMixins", {
    enumerable: true,
    get: function () {
      return _preprocessing.default;
    }
  });
  Object.defineProperty(_exports, "imagePreprocessing", {
    enumerable: true,
    get: function () {
      return _imagePreprocessing.default;
    }
  });
  Object.defineProperty(_exports, "nlpPreprocessing", {
    enumerable: true,
    get: function () {
      return _nlpPreprocessing.default;
    }
  });
  Object.defineProperty(_exports, "tabularPreprocessing", {
    enumerable: true,
    get: function () {
      return _tabularPreprocessing.default;
    }
  });
  _preprocessing = _interopRequireDefault(_preprocessing);
  _imagePreprocessing = _interopRequireDefault(_imagePreprocessing);
  _nlpPreprocessing = _interopRequireDefault(_nlpPreprocessing);
  _tabularPreprocessing = _interopRequireDefault(_tabularPreprocessing);
});

/***/ }),

/***/ "./src/nlpPreprocessing.js":
/*!*********************************!*\
  !*** ./src/nlpPreprocessing.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./NLP/index */ "./src/NLP/index.js"), __webpack_require__(/*! ./tokenizer.en */ "./src/tokenizer.en.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _index, _tokenizer) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _tokenizer = _interopRequireDefault(_tokenizer);

  class NLPPreprocessing extends _causalNet2.Platform.mixWith(_causalNet.Function, [_index.TokenizingMixins, _index.TokenTransformingMixins]) {
    constructor() {
      super();
      this.Tokenizer = _tokenizer.default;
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

  var _default = new NLPPreprocessing();

  _exports.default = _default;
});

/***/ }),

/***/ "./src/preprocessing.mixins.js":
/*!*************************************!*\
  !*** ./src/preprocessing.mixins.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

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

  var _default = PreprocessingMixins;
  _exports.default = _default;
});

/***/ }),

/***/ "./src/tabularPreprocessing.js":
/*!*************************************!*\
  !*** ./src/tabularPreprocessing.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! ./Tabular/index */ "./src/Tabular/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _causalNet, _causalNet2, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class TabularPreprocessing extends _causalNet2.Platform.mixWith(_causalNet.Function, [_index.ItemNormalizing, _index.NullItemReplace]) {
    constructor() {
      super();
    }

  }

  var _default = new TabularPreprocessing();

  _exports.default = _default;
});

/***/ }),

/***/ "./src/tokenizer.en.js":
/*!*****************************!*\
  !*** ./src/tokenizer.en.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = TokenizerEN;

  function TokenizerEN(text) {
    const Re = /[\s."'/\|;:()\[\]\@\#\$\&]/g;
    return text.split(Re);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2NvbG9yVHJhbnNmb3JtaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvaW1hZ2VTcGxpdHRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvdG9rZW5UcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvdG9rZW5pemluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL1RhYnVsYXIvaXRlbU5vcm1hbGl6aW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9udWxsSXRlbVJlcGxhY2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2ltYWdlUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvbmxwUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvcHJlcHJvY2Vzc2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3RhYnVsYXJQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy90b2tlbml6ZXIuZW4uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ0NsYXNzIiwiY29sb3JUcmFuc2Zvcm0iLCJzYW1wbGVCdWZmZXIiLCJjaGFubmVsU2l6ZSIsInRyYW5mb3JtRm4iLCJSIiwibWFwIiwic3BsaXRFdmVyeSIsImJsYWNrV2hpdGVUcmFuc2Zvcm0iLCJCbGFja1doaXRlRm4iLCJwaXhlbCIsInBpeGVsVmFsdWUiLCJJbWFnZVNwbGl0dGluZ01peGlucyIsImltYWdlU3BsaXQiLCJzcGxpdFNpemUiLCJUb2tlblRyYW5zZm9ybWluZ01peGlucyIsIkJhZFdvcmRzRmlsdGVyIiwidG9rZW5zIiwiYmFkV29yZExpc3QiLCJmaWx0ZXIiLCJ0b2tlbiIsIm5vdCIsImZpbmQiLCJlcXVhbHMiLCJXb3JkRnJlcUNvdW50IiwiZnJlcUNvdW50IiwiVXBkYXRlRnJlcSIsInVuZGVmaW5lZCIsInJlZHVjZSIsIlRva2VuaXppbmdNaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImNsZWFuVGV4dCIsInRleHQiLCJyZW1vdmVQYXR0ZXJuIiwicmVwbGFjZSIsInRva2VuaXplIiwidG9Mb3dlciIsIlRva2VuaXplciIsInJhd1Rva2VucyIsImlzRW1wdHkiLCJJdGVtTm9ybWFsaXppbmdNaXhpbnMiLCJpdGVtTm9ybWFsaXplIiwic2FtcGxlIiwiTnVsbEl0ZW1SZXBsYWNpbmdNaXhpbnMiLCJudWxsSXRlbVJlcGxhY2UiLCJOTFBQcmVwcm9jZXNzaW5nIiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZUZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJUb2tlbml6ZXJFTiIsInRva2VuaXplciIsIkVycm9yIiwiUHJlcHJvY2Vzc2luZ01peGlucyIsIkJhc2VDbGFzcyIsIlByZXByb2Nlc3NpbmdTYW1wbGVGbiIsInByZXByb2Nlc3NpbmdTYW1wbGVGbiIsIlByZXByb2Nlc3NpbmdMYWJlbEZuIiwicHJlcHJvY2Vzc2luZ0xhYmVsRm4iLCJiaW5kIiwic2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyIsIlRhYnVsYXJQcmVwcm9jZXNzaW5nIiwiSXRlbU5vcm1hbGl6aW5nIiwiTnVsbEl0ZW1SZXBsYWNlIiwiUmUiLCJzcGxpdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FB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QUFDSDs7QUFIb0M7O2lCQU0xQixJQUFJWSxvQkFBSixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLFdBQVNYLFdBQVQsQ0FBcUJsQixJQUFyQixFQUEwQjtBQUNyQyxVQUFNZ0MsRUFBRSxHQUFHLDZCQUFYO0FBQ0EsV0FBT2hDLElBQUksQ0FBQ2lDLEtBQUwsQ0FBV0QsRUFBWCxDQUFQO0FBQ0g7Ozs7Ozs7Ozs7OztBQ0hELDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgZGVmYXVsdDogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJjb25zdCBDb2xvclRyYW5zZm9ybWluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIGNvbG9yVHJhbnNmb3JtKHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUsIHRyYW5mb3JtRm4pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5tYXAodHJhbmZvcm1GbiwgUi5zcGxpdEV2ZXJ5KGNoYW5uZWxTaXplLCBzYW1wbGVCdWZmZXIpKTtcbiAgICB9XG4gICAgYmxhY2tXaGl0ZVRyYW5zZm9ybShzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKXtcbiAgICAgICAgY29uc3QgQmxhY2tXaGl0ZUZuID0gKHBpeGVsKT0+e1xuICAgICAgICAgICAgbGV0IHBpeGVsVmFsdWUgPSBwaXhlbFswXSoyNTUgKyBwaXhlbFsxXSoyNTUgK3BpeGVsWzJdO1xuICAgICAgICAgICAgaWYoIHBpeGVsVmFsdWUgPiAwICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yVHJhbnNmb3JtKEJsYWNrV2hpdGVGbiwgc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnM7IiwiY29uc3QgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICBpbWFnZVNwbGl0KHNhbXBsZUJ1ZmZlciwgc3BsaXRTaXplKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5zcGxpdEV2ZXJ5KHNwbGl0U2l6ZSwgc2FtcGxlQnVmZmVyKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNwbGl0dGluZ01peGluczsiLCJjb25zdCBUb2tlblRyYW5zZm9ybWluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIEJhZFdvcmRzRmlsdGVyKHRva2VucywgYmFkV29yZExpc3Qpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5maWx0ZXIoKHRva2VuKT0+Ui5ub3QoUi5maW5kKFIuZXF1YWxzKHRva2VuKSkoYmFkV29yZExpc3QpKSwgdG9rZW5zKTtcbiAgICB9XG5cbiAgICBXb3JkRnJlcUNvdW50KHRva2VucywgZnJlcUNvdW50PXt9KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVXBkYXRlRnJlcSA9IChmcmVxQ291bnQsIHRva2VuKT0+e1xuICAgICAgICAgICAgaWYoZnJlcUNvdW50W3Rva2VuXSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBmcmVxQ291bnRbdG9rZW5dID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgZnJlcUNvdW50W3Rva2VuXSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyZXFDb3VudDtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIFIucmVkdWNlKFVwZGF0ZUZyZXEsIGZyZXFDb3VudCwgdG9rZW5zKTtcbiAgICB9XG5cbn07XG5leHBvcnQgZGVmYXVsdCBUb2tlblRyYW5zZm9ybWluZ01peGluczsiLCJjb25zdCBUb2tlbml6aW5nTWl4aW5zID0gKEJhc2VGdW5jdGlvbkNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VGdW5jdGlvbkNsYXNze1xuICAgIGNsZWFuVGV4dCh0ZXh0LCByZW1vdmVQYXR0ZXJuPW51bGwpe1xuICAgICAgICByZW1vdmVQYXR0ZXJuID0gcmVtb3ZlUGF0dGVybiB8fCAvWy4sXFwvIyEkJVxcXiZcXCo7Ont9PVxcLV9gfigpXFxuXFx0XS9nO1xuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHJlbW92ZVBhdHRlcm4sXCIgXCIpO1xuICAgIH1cbiAgICB0b2tlbml6ZSh0ZXh0LCB0b0xvd2VyPXRydWUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUb2tlbml6ZXIgPSB0aGlzLlRva2VuaXplcjtcbiAgICAgICAgbGV0IGNsZWFuVGV4dCA9IHRoaXMuY2xlYW5UZXh0KHRleHQpO1xuICAgICAgICBsZXQgcmF3VG9rZW5zID0gVG9rZW5pemVyKGNsZWFuVGV4dCk7XG4gICAgICAgIGxldCB0b2tlbnMgPSBSLmZpbHRlcigodG9rZW4pPT5SLm5vdChSLmlzRW1wdHkodG9rZW4pKSxyYXdUb2tlbnMpO1xuICAgICAgICBpZih0b0xvd2VyKXtcbiAgICAgICAgICAgIHJldHVybiBSLm1hcChSLnRvTG93ZXIsIHRva2Vucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2tlbml6aW5nTWl4aW5zOyIsImNvbnN0IEl0ZW1Ob3JtYWxpemluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIGl0ZW1Ob3JtYWxpemUoc2FtcGxlKXtcbiAgICAgICAgcmV0dXJuIHNhbXBsZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtTm9ybWFsaXppbmdNaXhpbnM7IiwiY29uc3QgTnVsbEl0ZW1SZXBsYWNpbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICBudWxsSXRlbVJlcGxhY2Uoc2FtcGxlKXtcbiAgICAgICAgcmV0dXJuIHNhbXBsZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOdWxsSXRlbVJlcGxhY2luZ01peGluczsiLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb24gfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGlucyB9IGZyb20gJy4vSW1hZ2UvaW5kZXgnO1xuY2xhc3MgTkxQUHJlcHJvY2Vzc2luZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBbXG4gICAgICAgIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGluc1xuICAgIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTkxQUHJlcHJvY2Vzc2luZzsiLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb24gfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRva2VuaXppbmdNaXhpbnMsIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi9OTFAvaW5kZXgnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBUb2tlbml6ZXJFTiB9IGZyb20gJy4vdG9rZW5pemVyLmVuJztcbmNsYXNzIE5MUFByZXByb2Nlc3NpbmcgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdGlvbiwgXG4gICAgWyAgIFRva2VuaXppbmdNaXhpbnMsIFxuICAgICAgICBUb2tlblRyYW5zZm9ybWluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLlRva2VuaXplciA9IFRva2VuaXplckVOO1xuICAgIH1cbiAgICBnZXQgVG9rZW5pemVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnRva2VuaXplcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndG9rZW5pemVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbml6ZXI7XG4gICAgfVxuICAgIHNldCBUb2tlbml6ZXIodG9rZW5pemVyKXtcbiAgICAgICAgdGhpcy50b2tlbml6ZXIgPSB0b2tlbml6ZXI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTkxQUHJlcHJvY2Vzc2luZzsiLCJjb25zdCBQcmVwcm9jZXNzaW5nTWl4aW5zID0gKEJhc2VDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlQ2xhc3N7XG4gICAgZ2V0IFByZXByb2Nlc3NpbmdTYW1wbGVGbigpe1xuICAgICAgICBpZighdGhpcy5wcmVwcm9jZXNzaW5nU2FtcGxlRm4pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3NldFByZXByb2Nlc3NpbmdGdW5jdGlvbnMgbXVzdCBiZSBjYWxsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nU2FtcGxlRm47XG4gICAgfVxuICAgIGdldCBQcmVwcm9jZXNzaW5nTGFiZWxGbigpe1xuICAgICAgICBpZighdGhpcy5wcmVwcm9jZXNzaW5nTGFiZWxGbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyBtdXN0IGJlIGNhbGxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuO1xuICAgIH1cbiAgICBzZXQgUHJlcHJvY2Vzc2luZ1NhbXBsZUZuKHByZXByb2Nlc3NpbmdTYW1wbGVGbil7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ1NhbXBsZUZuID0gcHJlcHJvY2Vzc2luZ1NhbXBsZUZuO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBzZXQgUHJlcHJvY2Vzc2luZ0xhYmVsRm4ocHJlcHJvY2Vzc2luZ0xhYmVsRm4pe1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuID0gcHJlcHJvY2Vzc2luZ0xhYmVsRm47XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0xhYmVsRm4uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgc2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyhwcmVwcm9jZXNzaW5nU2FtcGxlRm4sIHByZXByb2Nlc3NpbmdMYWJlbEZuKXtcbiAgICAgICAgaWYodHlwZW9mKHByZXByb2Nlc3NpbmdTYW1wbGVGbikhPT0nZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwcmVwcm9jZXNzaW5nU2FtcGxlRm4gbXVzdCBiZSBGdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZihwcmVwcm9jZXNzaW5nTGFiZWxGbikhPT0nZnVuY3Rpb24nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwcmVwcm9jZXNzaW5nTGFiZWxGbiBtdXN0IGJlIEZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nU2FtcGxlRm4gPSBwcmVwcm9jZXNzaW5nU2FtcGxlRm47XG4gICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZ0xhYmVsRm4gPSBwcmVwcm9jZXNzaW5nTGFiZWxGbjtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmVwcm9jZXNzaW5nTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbiB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgSXRlbU5vcm1hbGl6aW5nLCBOdWxsSXRlbVJlcGxhY2UgfSBmcm9tICcuL1RhYnVsYXIvaW5kZXgnO1xuY2xhc3MgVGFidWxhclByZXByb2Nlc3NpbmcgZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdGlvbiwgXG4gICAgWyBJdGVtTm9ybWFsaXppbmcsIE51bGxJdGVtUmVwbGFjZSBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRhYnVsYXJQcmVwcm9jZXNzaW5nOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRva2VuaXplckVOKHRleHQpe1xuICAgIGNvbnN0IFJlID0gL1tcXHMuXCInL1xcfDs6KClcXFtcXF1cXEBcXCNcXCRcXCZdL2c7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoUmUpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=