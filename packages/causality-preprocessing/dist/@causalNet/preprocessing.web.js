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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2NvbG9yVHJhbnNmb3JtaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvaW1hZ2VTcGxpdHRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvdG9rZW5UcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvdG9rZW5pemluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL1RhYnVsYXIvaXRlbU5vcm1hbGl6aW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9udWxsSXRlbVJlcGxhY2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2ltYWdlUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvbmxwUHJlcHJvY2Vzc2luZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvcHJlcHJvY2Vzc2luZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3RhYnVsYXJQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy90b2tlbml6ZXIuZW4uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNvbG9yVHJhbnNmb3JtaW5nTWl4aW5zIiwiUHJlcHJvY2Vzc2luZ0NsYXNzIiwiY29sb3JUcmFuc2Zvcm0iLCJzYW1wbGVCdWZmZXIiLCJjaGFubmVsU2l6ZSIsInRyYW5mb3JtRm4iLCJSIiwibWFwIiwic3BsaXRFdmVyeSIsImJsYWNrV2hpdGVUcmFuc2Zvcm0iLCJCbGFja1doaXRlRm4iLCJwaXhlbCIsInBpeGVsVmFsdWUiLCJJbWFnZVNwbGl0dGluZ01peGlucyIsImltYWdlU3BsaXQiLCJzcGxpdFNpemUiLCJUb2tlblRyYW5zZm9ybWluZ01peGlucyIsIkJhZFdvcmRzRmlsdGVyIiwidG9rZW5zIiwiYmFkV29yZExpc3QiLCJmaWx0ZXIiLCJ0b2tlbiIsIm5vdCIsImZpbmQiLCJlcXVhbHMiLCJXb3JkRnJlcUNvdW50IiwiZnJlcUNvdW50IiwiVXBkYXRlRnJlcSIsInVuZGVmaW5lZCIsInJlZHVjZSIsIlRva2VuaXppbmdNaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImNsZWFuVGV4dCIsInRleHQiLCJyZW1vdmVQYXR0ZXJuIiwicmVwbGFjZSIsInRva2VuaXplIiwidG9Mb3dlciIsIlRva2VuaXplciIsInJhd1Rva2VucyIsImlzRW1wdHkiLCJJdGVtTm9ybWFsaXppbmdNaXhpbnMiLCJpdGVtTm9ybWFsaXplIiwic2FtcGxlIiwiTnVsbEl0ZW1SZXBsYWNpbmdNaXhpbnMiLCJudWxsSXRlbVJlcGxhY2UiLCJOTFBQcmVwcm9jZXNzaW5nIiwiUGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZUZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJUb2tlbml6ZXJFTiIsInRva2VuaXplciIsIkVycm9yIiwiUHJlcHJvY2Vzc2luZ01peGlucyIsIkJhc2VDbGFzcyIsIlByZXByb2Nlc3NpbmdTYW1wbGVGbiIsInByZXByb2Nlc3NpbmdTYW1wbGVGbiIsIlByZXByb2Nlc3NpbmdMYWJlbEZuIiwicHJlcHJvY2Vzc2luZ0xhYmVsRm4iLCJiaW5kIiwic2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyIsIlRhYnVsYXJQcmVwcm9jZXNzaW5nIiwiSXRlbU5vcm1hbGl6aW5nIiwiTnVsbEl0ZW1SZXBsYWNlIiwiUmUiLCJzcGxpdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FB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QUFDSDs7QUFIb0M7O2lCQU0xQixJQUFJWSxvQkFBSixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBLFdBQVNYLFdBQVQsQ0FBcUJsQixJQUFyQixFQUEwQjtBQUNyQyxVQUFNZ0MsRUFBRSxHQUFHLDZCQUFYO0FBQ0EsV0FBT2hDLElBQUksQ0FBQ2lDLEtBQUwsQ0FBV0QsRUFBWCxDQUFQO0FBQ0g7Ozs7Ozs7Ozs7OztBQ0hELDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBkZWZhdWx0OiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImNvbnN0IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgY29sb3JUcmFuc2Zvcm0oc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSwgdHJhbmZvcm1Gbil7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLm1hcCh0cmFuZm9ybUZuLCBSLnNwbGl0RXZlcnkoY2hhbm5lbFNpemUsIHNhbXBsZUJ1ZmZlcikpO1xuICAgIH1cbiAgICBibGFja1doaXRlVHJhbnNmb3JtKHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUpe1xuICAgICAgICBjb25zdCBCbGFja1doaXRlRm4gPSAocGl4ZWwpPT57XG4gICAgICAgICAgICBsZXQgcGl4ZWxWYWx1ZSA9IHBpeGVsWzBdKjI1NSArIHBpeGVsWzFdKjI1NSArcGl4ZWxbMl07XG4gICAgICAgICAgICBpZiggcGl4ZWxWYWx1ZSA+IDAgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JUcmFuc2Zvcm0oQmxhY2tXaGl0ZUZuLCBzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclRyYW5zZm9ybWluZ01peGluczsiLCJjb25zdCBJbWFnZVNwbGl0dGluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIGltYWdlU3BsaXQoc2FtcGxlQnVmZmVyLCBzcGxpdFNpemUpe1xuICAgICAgICByZXR1cm4gdGhpcy5SLnNwbGl0RXZlcnkoc3BsaXRTaXplLCBzYW1wbGVCdWZmZXIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlU3BsaXR0aW5nTWl4aW5zOyIsImNvbnN0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgQmFkV29yZHNGaWx0ZXIodG9rZW5zLCBiYWRXb3JkTGlzdCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmZpbHRlcigodG9rZW4pPT5SLm5vdChSLmZpbmQoUi5lcXVhbHModG9rZW4pKShiYWRXb3JkTGlzdCkpLCB0b2tlbnMpO1xuICAgIH1cblxuICAgIFdvcmRGcmVxQ291bnQodG9rZW5zLCBmcmVxQ291bnQ9e30pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBVcGRhdGVGcmVxID0gKGZyZXFDb3VudCwgdG9rZW4pPT57XG4gICAgICAgICAgICBpZihmcmVxQ291bnRbdG9rZW5dID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGZyZXFDb3VudFt0b2tlbl0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBmcmVxQ291bnRbdG9rZW5dICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJlcUNvdW50O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoVXBkYXRlRnJlcSwgZnJlcUNvdW50LCB0b2tlbnMpO1xuICAgIH1cblxufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zOyIsImNvbnN0IFRva2VuaXppbmdNaXhpbnMgPSAoQmFzZUZ1bmN0aW9uQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZUZ1bmN0aW9uQ2xhc3N7XG4gICAgY2xlYW5UZXh0KHRleHQsIHJlbW92ZVBhdHRlcm49bnVsbCl7XG4gICAgICAgIHJlbW92ZVBhdHRlcm4gPSByZW1vdmVQYXR0ZXJuIHx8IC9bLixcXC8jISQlXFxeJlxcKjs6e309XFwtX2B+KClcXG5cXHRdL2c7XG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UocmVtb3ZlUGF0dGVybixcIiBcIik7XG4gICAgfVxuICAgIHRva2VuaXplKHRleHQsIHRvTG93ZXI9dHJ1ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFRva2VuaXplciA9IHRoaXMuVG9rZW5pemVyO1xuICAgICAgICBsZXQgY2xlYW5UZXh0ID0gdGhpcy5jbGVhblRleHQodGV4dCk7XG4gICAgICAgIGxldCByYXdUb2tlbnMgPSBUb2tlbml6ZXIoY2xlYW5UZXh0KTtcbiAgICAgICAgbGV0IHRva2VucyA9IFIuZmlsdGVyKCh0b2tlbik9PlIubm90KFIuaXNFbXB0eSh0b2tlbikpLHJhd1Rva2Vucyk7XG4gICAgICAgIGlmKHRvTG93ZXIpe1xuICAgICAgICAgICAgcmV0dXJuIFIubWFwKFIudG9Mb3dlciwgdG9rZW5zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRva2VuaXppbmdNaXhpbnM7IiwiY29uc3QgSXRlbU5vcm1hbGl6aW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgaXRlbU5vcm1hbGl6ZShzYW1wbGUpe1xuICAgICAgICByZXR1cm4gc2FtcGxlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1Ob3JtYWxpemluZ01peGluczsiLCJjb25zdCBOdWxsSXRlbVJlcGxhY2luZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIG51bGxJdGVtUmVwbGFjZShzYW1wbGUpe1xuICAgICAgICByZXR1cm4gc2FtcGxlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE51bGxJdGVtUmVwbGFjaW5nTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbiB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIEltYWdlU3BsaXR0aW5nTWl4aW5zIH0gZnJvbSAnLi9JbWFnZS9pbmRleCc7XG5jbGFzcyBOTFBQcmVwcm9jZXNzaW5nIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3Rpb24sIFtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIEltYWdlU3BsaXR0aW5nTWl4aW5zXG4gICAgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOTFBQcmVwcm9jZXNzaW5nOyIsImltcG9ydCB7IEZ1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbiB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVG9rZW5pemluZ01peGlucywgVG9rZW5UcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL05MUC9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRva2VuaXplckVOIH0gZnJvbSAnLi90b2tlbml6ZXIuZW4nO1xuY2xhc3MgTkxQUHJlcHJvY2Vzc2luZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBcbiAgICBbICAgVG9rZW5pemluZ01peGlucywgXG4gICAgICAgIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuVG9rZW5pemVyID0gVG9rZW5pemVyRU47XG4gICAgfVxuICAgIGdldCBUb2tlbml6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMudG9rZW5pemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd0b2tlbml6ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuaXplcjtcbiAgICB9XG4gICAgc2V0IFRva2VuaXplcih0b2tlbml6ZXIpe1xuICAgICAgICB0aGlzLnRva2VuaXplciA9IHRva2VuaXplcjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOTFBQcmVwcm9jZXNzaW5nOyIsImNvbnN0IFByZXByb2Nlc3NpbmdNaXhpbnMgPSAoQmFzZUNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VDbGFzc3tcbiAgICBnZXQgUHJlcHJvY2Vzc2luZ1NhbXBsZUZuKCl7XG4gICAgICAgIGlmKCF0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyBtdXN0IGJlIGNhbGxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbjtcbiAgICB9XG4gICAgZ2V0IFByZXByb2Nlc3NpbmdMYWJlbEZuKCl7XG4gICAgICAgIGlmKCF0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zIG11c3QgYmUgY2FsbGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0xhYmVsRm47XG4gICAgfVxuICAgIHNldCBQcmVwcm9jZXNzaW5nU2FtcGxlRm4ocHJlcHJvY2Vzc2luZ1NhbXBsZUZuKXtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nU2FtcGxlRm4gPSBwcmVwcm9jZXNzaW5nU2FtcGxlRm47XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ1NhbXBsZUZuLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIHNldCBQcmVwcm9jZXNzaW5nTGFiZWxGbihwcmVwcm9jZXNzaW5nTGFiZWxGbil7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0xhYmVsRm4gPSBwcmVwcm9jZXNzaW5nTGFiZWxGbjtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nTGFiZWxGbi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBzZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zKHByZXByb2Nlc3NpbmdTYW1wbGVGbiwgcHJlcHJvY2Vzc2luZ0xhYmVsRm4pe1xuICAgICAgICBpZih0eXBlb2YocHJlcHJvY2Vzc2luZ1NhbXBsZUZuKSE9PSdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ByZXByb2Nlc3NpbmdTYW1wbGVGbiBtdXN0IGJlIEZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mKHByZXByb2Nlc3NpbmdMYWJlbEZuKSE9PSdmdW5jdGlvbicpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ByZXByb2Nlc3NpbmdMYWJlbEZuIG11c3QgYmUgRnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlByZXByb2Nlc3NpbmdTYW1wbGVGbiA9IHByZXByb2Nlc3NpbmdTYW1wbGVGbjtcbiAgICAgICAgdGhpcy5QcmVwcm9jZXNzaW5nTGFiZWxGbiA9IHByZXByb2Nlc3NpbmdMYWJlbEZuO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZXByb2Nlc3NpbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9uIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBJdGVtTm9ybWFsaXppbmcsIE51bGxJdGVtUmVwbGFjZSB9IGZyb20gJy4vVGFidWxhci9pbmRleCc7XG5jbGFzcyBUYWJ1bGFyUHJlcHJvY2Vzc2luZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBcbiAgICBbIEl0ZW1Ob3JtYWxpemluZywgTnVsbEl0ZW1SZXBsYWNlIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVGFidWxhclByZXByb2Nlc3Npbmc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9rZW5pemVyRU4odGV4dCl7XG4gICAgY29uc3QgUmUgPSAvW1xccy5cIicvXFx8OzooKVxcW1xcXVxcQFxcI1xcJFxcJl0vZztcbiAgICByZXR1cm4gdGV4dC5zcGxpdChSZSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==