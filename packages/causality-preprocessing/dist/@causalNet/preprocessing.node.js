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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./tokenizing.mixins */ "./src/NLP/tokenizing.mixins.js"), __webpack_require__(/*! ./wordFiltering.mixins */ "./src/NLP/wordFiltering.mixins.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _tokenizing, _wordFiltering) {
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
  Object.defineProperty(_exports, "WordFilteringMixins", {
    enumerable: true,
    get: function () {
      return _wordFiltering.default;
    }
  });
  _tokenizing = _interopRequireDefault(_tokenizing);
  _wordFiltering = _interopRequireDefault(_wordFiltering);
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

/***/ "./src/NLP/wordFiltering.mixins.js":
/*!*****************************************!*\
  !*** ./src/NLP/wordFiltering.mixins.js ***!
  \*****************************************/
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

  const WordFilteringMixins = PreprocessingClass => class extends PreprocessingClass {
    filterBadWords(tokens, badWordList) {
      const R = this.R;
      return R.filter(token => R.not(R.find(R.equals(token))(badWordList)), tokens);
    }

  };

  var _default = WordFilteringMixins;
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

  class NLPPreprocessing extends _causalNet2.Platform.mixWith(_causalNet.Function, [_index.TokenizingMixins, _index.WordFilteringMixins]) {
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
    return text.split(' ');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2NvbG9yVHJhbnNmb3JtaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvaW1hZ2VTcGxpdHRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvdG9rZW5pemluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL05MUC93b3JkRmlsdGVyaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvVGFidWxhci9pdGVtTm9ybWFsaXppbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9UYWJ1bGFyL251bGxJdGVtUmVwbGFjaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvaW1hZ2VQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9ubHBQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9wcmVwcm9jZXNzaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvdGFidWxhclByZXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3Rva2VuaXplci5lbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMiLCJQcmVwcm9jZXNzaW5nQ2xhc3MiLCJjb2xvclRyYW5zZm9ybSIsInNhbXBsZUJ1ZmZlciIsImNoYW5uZWxTaXplIiwidHJhbmZvcm1GbiIsIlIiLCJtYXAiLCJzcGxpdEV2ZXJ5IiwiYmxhY2tXaGl0ZVRyYW5zZm9ybSIsIkJsYWNrV2hpdGVGbiIsInBpeGVsIiwicGl4ZWxWYWx1ZSIsIkltYWdlU3BsaXR0aW5nTWl4aW5zIiwiaW1hZ2VTcGxpdCIsInNwbGl0U2l6ZSIsIlRva2VuaXppbmdNaXhpbnMiLCJCYXNlRnVuY3Rpb25DbGFzcyIsImNsZWFuVGV4dCIsInRleHQiLCJyZW1vdmVQYXR0ZXJuIiwicmVwbGFjZSIsInRva2VuaXplIiwidG9Mb3dlciIsIlRva2VuaXplciIsInJhd1Rva2VucyIsInRva2VucyIsImZpbHRlciIsInRva2VuIiwibm90IiwiaXNFbXB0eSIsIldvcmRGaWx0ZXJpbmdNaXhpbnMiLCJmaWx0ZXJCYWRXb3JkcyIsImJhZFdvcmRMaXN0IiwiZmluZCIsImVxdWFscyIsIkl0ZW1Ob3JtYWxpemluZ01peGlucyIsIml0ZW1Ob3JtYWxpemUiLCJzYW1wbGUiLCJOdWxsSXRlbVJlcGxhY2luZ01peGlucyIsIm51bGxJdGVtUmVwbGFjZSIsIk5MUFByZXByb2Nlc3NpbmciLCJQbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIlRva2VuaXplckVOIiwidG9rZW5pemVyIiwiRXJyb3IiLCJQcmVwcm9jZXNzaW5nTWl4aW5zIiwiQmFzZUNsYXNzIiwiUHJlcHJvY2Vzc2luZ1NhbXBsZUZuIiwicHJlcHJvY2Vzc2luZ1NhbXBsZUZuIiwiUHJlcHJvY2Vzc2luZ0xhYmVsRm4iLCJwcmVwcm9jZXNzaW5nTGFiZWxGbiIsImJpbmQiLCJzZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zIiwiVGFidWxhclByZXByb2Nlc3NpbmciLCJJdGVtTm9ybWFsaXppbmciLCJOdWxsSXRlbVJlcGxhY2UiLCJzcGxpdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLFFBQU1BLHVCQUF1QixHQUFJQyxrQkFBRCxJQUF3QixjQUFjQSxrQkFBZCxDQUFnQztBQUNwRkMsa0JBQWMsQ0FBQ0MsWUFBRCxFQUFlQyxXQUFmLEVBQTRCQyxVQUE1QixFQUF1QztBQUNqRCxZQUFNQyxDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLGFBQU9BLENBQUMsQ0FBQ0MsR0FBRixDQUFNRixVQUFOLEVBQWtCQyxDQUFDLENBQUNFLFVBQUYsQ0FBYUosV0FBYixFQUEwQkQsWUFBMUIsQ0FBbEIsQ0FBUDtBQUNIOztBQUNETSx1QkFBbUIsQ0FBQ04sWUFBRCxFQUFlQyxXQUFmLEVBQTJCO0FBQzFDLFlBQU1NLFlBQVksR0FBSUMsS0FBRCxJQUFTO0FBQzFCLFlBQUlDLFVBQVUsR0FBR0QsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFTLEdBQVQsR0FBZUEsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFTLEdBQXhCLEdBQTZCQSxLQUFLLENBQUMsQ0FBRCxDQUFuRDs7QUFDQSxZQUFJQyxVQUFVLEdBQUcsQ0FBakIsRUFBb0I7QUFDaEIsaUJBQU8sQ0FBUDtBQUNILFNBRkQsTUFHSTtBQUNBLGlCQUFPLENBQVA7QUFDSDtBQUNKLE9BUkQ7O0FBU0EsV0FBS1YsY0FBTCxDQUFvQlEsWUFBcEIsRUFBa0NQLFlBQWxDLEVBQWdEQyxXQUFoRDtBQUNIOztBQWhCbUYsR0FBeEY7O2lCQW1CZUosdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmYsUUFBTWEsb0JBQW9CLEdBQUlaLGtCQUFELElBQXdCLGNBQWNBLGtCQUFkLENBQWdDO0FBQ2pGYSxjQUFVLENBQUNYLFlBQUQsRUFBZVksU0FBZixFQUF5QjtBQUMvQixhQUFPLEtBQUtULENBQUwsQ0FBT0UsVUFBUCxDQUFrQk8sU0FBbEIsRUFBNkJaLFlBQTdCLENBQVA7QUFDSDs7QUFIZ0YsR0FBckY7O2lCQU1lVSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmYsUUFBTUcsZ0JBQWdCLEdBQUlDLGlCQUFELElBQXVCLGNBQWNBLGlCQUFkLENBQStCO0FBQzNFQyxhQUFTLENBQUNDLElBQUQsRUFBT0MsYUFBYSxHQUFDLElBQXJCLEVBQTBCO0FBQy9CQSxtQkFBYSxHQUFHQSxhQUFhLElBQUksa0NBQWpDO0FBQ0EsYUFBT0QsSUFBSSxDQUFDRSxPQUFMLENBQWFELGFBQWIsRUFBMkIsR0FBM0IsQ0FBUDtBQUNIOztBQUNERSxZQUFRLENBQUNILElBQUQsRUFBT0ksT0FBTyxHQUFDLElBQWYsRUFBb0I7QUFDeEIsWUFBTWpCLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsWUFBTWtCLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFVBQUlOLFNBQVMsR0FBRyxLQUFLQSxTQUFMLENBQWVDLElBQWYsQ0FBaEI7QUFDQSxVQUFJTSxTQUFTLEdBQUdELFNBQVMsQ0FBQ04sU0FBRCxDQUF6QjtBQUNBLFVBQUlRLE1BQU0sR0FBR3BCLENBQUMsQ0FBQ3FCLE1BQUYsQ0FBVUMsS0FBRCxJQUFTdEIsQ0FBQyxDQUFDdUIsR0FBRixDQUFNdkIsQ0FBQyxDQUFDd0IsT0FBRixDQUFVRixLQUFWLENBQU4sQ0FBbEIsRUFBMENILFNBQTFDLENBQWI7O0FBQ0EsVUFBR0YsT0FBSCxFQUFXO0FBQ1AsZUFBT2pCLENBQUMsQ0FBQ0MsR0FBRixDQUFNRCxDQUFDLENBQUNpQixPQUFSLEVBQWlCRyxNQUFqQixDQUFQO0FBQ0gsT0FGRCxNQUdJO0FBQ0EsZUFBT0EsTUFBUDtBQUNIO0FBQ0o7O0FBakIwRSxHQUEvRTs7aUJBb0JlVixnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZixRQUFNZSxtQkFBbUIsR0FBSTlCLGtCQUFELElBQXdCLGNBQWNBLGtCQUFkLENBQWdDO0FBQ2hGK0Isa0JBQWMsQ0FBQ04sTUFBRCxFQUFTTyxXQUFULEVBQXFCO0FBQy9CLFlBQU0zQixDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUNBLGFBQU9BLENBQUMsQ0FBQ3FCLE1BQUYsQ0FBVUMsS0FBRCxJQUFTdEIsQ0FBQyxDQUFDdUIsR0FBRixDQUFNdkIsQ0FBQyxDQUFDNEIsSUFBRixDQUFPNUIsQ0FBQyxDQUFDNkIsTUFBRixDQUFTUCxLQUFULENBQVAsRUFBd0JLLFdBQXhCLENBQU4sQ0FBbEIsRUFBK0RQLE1BQS9ELENBQVA7QUFDSDs7QUFKK0UsR0FBcEY7O2lCQU1lSyxtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZixRQUFNSyxxQkFBcUIsR0FBSW5DLGtCQUFELElBQXdCLGNBQWNBLGtCQUFkLENBQWdDO0FBQ2xGb0MsaUJBQWEsQ0FBQ0MsTUFBRCxFQUFRO0FBQ2pCLGFBQU9BLE1BQVA7QUFDSDs7QUFIaUYsR0FBdEY7O2lCQU1lRixxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mLFFBQU1HLHVCQUF1QixHQUFJdEMsa0JBQUQsSUFBd0IsY0FBY0Esa0JBQWQsQ0FBZ0M7QUFDcEZ1QyxtQkFBZSxDQUFDRixNQUFELEVBQVE7QUFDbkIsYUFBT0EsTUFBUDtBQUNIOztBQUhtRixHQUF4Rjs7aUJBTWVDLHVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGYsUUFBTUUsZ0JBQU4sU0FBK0JDLHFCQUFTQyxPQUFULENBQWlCQyxtQkFBakIsRUFBK0IsQ0FDdEQ1Qyw4QkFEc0QsRUFDN0JhLDJCQUQ2QixDQUEvQixDQUEvQixDQUVNO0FBQ0ZnQyxlQUFXLEdBQUU7QUFDVDtBQUNIOztBQUhDOztpQkFNUyxJQUFJSixnQkFBSixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BmLFFBQU1BLGdCQUFOLFNBQStCQyxxQkFBU0MsT0FBVCxDQUFpQkMsbUJBQWpCLEVBQzNCLENBQUk1Qix1QkFBSixFQUNJZSwwQkFESixDQUQyQixDQUEvQixDQUU4QjtBQUMxQmMsZUFBVyxHQUFFO0FBQ1Q7QUFDQSxXQUFLckIsU0FBTCxHQUFpQnNCLGtCQUFqQjtBQUNIOztBQUNELFFBQUl0QixTQUFKLEdBQWU7QUFDWCxVQUFHLENBQUMsS0FBS3VCLFNBQVQsRUFBbUI7QUFDZixjQUFNQyxLQUFLLENBQUMsc0JBQUQsQ0FBWDtBQUNIOztBQUNELGFBQU8sS0FBS0QsU0FBWjtBQUNIOztBQUNELFFBQUl2QixTQUFKLENBQWN1QixTQUFkLEVBQXdCO0FBQ3BCLFdBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0g7O0FBYnlCOztpQkFnQmYsSUFBSU4sZ0JBQUosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmYsUUFBTVEsbUJBQW1CLEdBQUlDLFNBQUQsSUFBZSxjQUFjQSxTQUFkLENBQXVCO0FBQzlELFFBQUlDLHFCQUFKLEdBQTJCO0FBQ3ZCLFVBQUcsQ0FBQyxLQUFLQyxxQkFBVCxFQUErQjtBQUMzQixjQUFNSixLQUFLLENBQUMsMENBQUQsQ0FBWDtBQUNIOztBQUNELGFBQU8sS0FBS0kscUJBQVo7QUFDSDs7QUFDRCxRQUFJQyxvQkFBSixHQUEwQjtBQUN0QixVQUFHLENBQUMsS0FBS0Msb0JBQVQsRUFBOEI7QUFDMUIsY0FBTU4sS0FBSyxDQUFDLDBDQUFELENBQVg7QUFDSDs7QUFDRCxhQUFPLEtBQUtNLG9CQUFaO0FBQ0g7O0FBQ0QsUUFBSUgscUJBQUosQ0FBMEJDLHFCQUExQixFQUFnRDtBQUM1QyxXQUFLQSxxQkFBTCxHQUE2QkEscUJBQTdCO0FBQ0EsV0FBS0EscUJBQUwsQ0FBMkJHLElBQTNCLENBQWdDLElBQWhDO0FBQ0g7O0FBQ0QsUUFBSUYsb0JBQUosQ0FBeUJDLG9CQUF6QixFQUE4QztBQUMxQyxXQUFLQSxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0EsV0FBS0Esb0JBQUwsQ0FBMEJDLElBQTFCLENBQStCLElBQS9CO0FBQ0g7O0FBQ0RDLDZCQUF5QixDQUFDSixxQkFBRCxFQUF3QkUsb0JBQXhCLEVBQTZDO0FBQ2xFLFVBQUcsT0FBT0YscUJBQVAsS0FBZ0MsVUFBbkMsRUFBOEM7QUFDMUMsY0FBTUosS0FBSyxDQUFDLHdDQUFELENBQVg7QUFDSDs7QUFDRCxVQUFHLE9BQU9NLG9CQUFQLEtBQStCLFVBQWxDLEVBQTZDO0FBQ3pDLGNBQU1OLEtBQUssQ0FBQyx1Q0FBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBS0cscUJBQUwsR0FBNkJDLHFCQUE3QjtBQUNBLFdBQUtDLG9CQUFMLEdBQTRCQyxvQkFBNUI7QUFDSDs7QUE5QjZELEdBQWxFOztpQkFpQ2VMLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJmLFFBQU1RLG9CQUFOLFNBQW1DZixxQkFBU0MsT0FBVCxDQUFpQkMsbUJBQWpCLEVBQy9CLENBQUVjLHNCQUFGLEVBQW1CQyxzQkFBbkIsQ0FEK0IsQ0FBbkMsQ0FDeUM7QUFDckNkLGVBQVcsR0FBRTtBQUNUO0FBQ0g7O0FBSG9DOztpQkFNMUIsSUFBSVksb0JBQUosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSxXQUFTWCxXQUFULENBQXFCM0IsSUFBckIsRUFBMEI7QUFDckMsV0FBT0EsSUFBSSxDQUFDeUMsS0FBTCxDQUFXLEdBQVgsQ0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7QUNGRCw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmdcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmdcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiY29uc3QgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICBjb2xvclRyYW5zZm9ybShzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplLCB0cmFuZm9ybUZuKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIubWFwKHRyYW5mb3JtRm4sIFIuc3BsaXRFdmVyeShjaGFubmVsU2l6ZSwgc2FtcGxlQnVmZmVyKSk7XG4gICAgfVxuICAgIGJsYWNrV2hpdGVUcmFuc2Zvcm0oc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSl7XG4gICAgICAgIGNvbnN0IEJsYWNrV2hpdGVGbiA9IChwaXhlbCk9PntcbiAgICAgICAgICAgIGxldCBwaXhlbFZhbHVlID0gcGl4ZWxbMF0qMjU1ICsgcGl4ZWxbMV0qMjU1ICtwaXhlbFsyXTtcbiAgICAgICAgICAgIGlmKCBwaXhlbFZhbHVlID4gMCApe1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvclRyYW5zZm9ybShCbGFja1doaXRlRm4sIHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zOyIsImNvbnN0IEltYWdlU3BsaXR0aW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgaW1hZ2VTcGxpdChzYW1wbGVCdWZmZXIsIHNwbGl0U2l6ZSl7XG4gICAgICAgIHJldHVybiB0aGlzLlIuc3BsaXRFdmVyeShzcGxpdFNpemUsIHNhbXBsZUJ1ZmZlcik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTcGxpdHRpbmdNaXhpbnM7IiwiY29uc3QgVG9rZW5pemluZ01peGlucyA9IChCYXNlRnVuY3Rpb25DbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRnVuY3Rpb25DbGFzc3tcbiAgICBjbGVhblRleHQodGV4dCwgcmVtb3ZlUGF0dGVybj1udWxsKXtcbiAgICAgICAgcmVtb3ZlUGF0dGVybiA9IHJlbW92ZVBhdHRlcm4gfHwgL1suLFxcLyMhJCVcXF4mXFwqOzp7fT1cXC1fYH4oKVxcblxcdF0vZztcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZW1vdmVQYXR0ZXJuLFwiIFwiKTtcbiAgICB9XG4gICAgdG9rZW5pemUodGV4dCwgdG9Mb3dlcj10cnVlKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVG9rZW5pemVyID0gdGhpcy5Ub2tlbml6ZXI7XG4gICAgICAgIGxldCBjbGVhblRleHQgPSB0aGlzLmNsZWFuVGV4dCh0ZXh0KTtcbiAgICAgICAgbGV0IHJhd1Rva2VucyA9IFRva2VuaXplcihjbGVhblRleHQpO1xuICAgICAgICBsZXQgdG9rZW5zID0gUi5maWx0ZXIoKHRva2VuKT0+Ui5ub3QoUi5pc0VtcHR5KHRva2VuKSkscmF3VG9rZW5zKTtcbiAgICAgICAgaWYodG9Mb3dlcil7XG4gICAgICAgICAgICByZXR1cm4gUi5tYXAoUi50b0xvd2VyLCB0b2tlbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5pemluZ01peGluczsiLCJjb25zdCBXb3JkRmlsdGVyaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgZmlsdGVyQmFkV29yZHModG9rZW5zLCBiYWRXb3JkTGlzdCl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIHJldHVybiBSLmZpbHRlcigodG9rZW4pPT5SLm5vdChSLmZpbmQoUi5lcXVhbHModG9rZW4pKShiYWRXb3JkTGlzdCkpLCB0b2tlbnMpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBXb3JkRmlsdGVyaW5nTWl4aW5zOyIsImNvbnN0IEl0ZW1Ob3JtYWxpemluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIGl0ZW1Ob3JtYWxpemUoc2FtcGxlKXtcbiAgICAgICAgcmV0dXJuIHNhbXBsZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtTm9ybWFsaXppbmdNaXhpbnM7IiwiY29uc3QgTnVsbEl0ZW1SZXBsYWNpbmdNaXhpbnMgPSAoUHJlcHJvY2Vzc2luZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIFByZXByb2Nlc3NpbmdDbGFzc3tcbiAgICBudWxsSXRlbVJlcGxhY2Uoc2FtcGxlKXtcbiAgICAgICAgcmV0dXJuIHNhbXBsZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOdWxsSXRlbVJlcGxhY2luZ01peGluczsiLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb24gfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGlucyB9IGZyb20gJy4vSW1hZ2UvaW5kZXgnO1xuY2xhc3MgTkxQUHJlcHJvY2Vzc2luZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBbXG4gICAgICAgIENvbG9yVHJhbnNmb3JtaW5nTWl4aW5zLCBJbWFnZVNwbGl0dGluZ01peGluc1xuICAgIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTkxQUHJlcHJvY2Vzc2luZzsiLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb24gfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRva2VuaXppbmdNaXhpbnMsIFdvcmRGaWx0ZXJpbmdNaXhpbnMgfSBmcm9tICcuL05MUC9pbmRleCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRva2VuaXplckVOIH0gZnJvbSAnLi90b2tlbml6ZXIuZW4nO1xuY2xhc3MgTkxQUHJlcHJvY2Vzc2luZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0aW9uLCBcbiAgICBbICAgVG9rZW5pemluZ01peGlucywgXG4gICAgICAgIFdvcmRGaWx0ZXJpbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5Ub2tlbml6ZXIgPSBUb2tlbml6ZXJFTjtcbiAgICB9XG4gICAgZ2V0IFRva2VuaXplcigpe1xuICAgICAgICBpZighdGhpcy50b2tlbml6ZXIpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3Rva2VuaXplciBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5pemVyO1xuICAgIH1cbiAgICBzZXQgVG9rZW5pemVyKHRva2VuaXplcil7XG4gICAgICAgIHRoaXMudG9rZW5pemVyID0gdG9rZW5pemVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE5MUFByZXByb2Nlc3Npbmc7IiwiY29uc3QgUHJlcHJvY2Vzc2luZ01peGlucyA9IChCYXNlQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZUNsYXNze1xuICAgIGdldCBQcmVwcm9jZXNzaW5nU2FtcGxlRm4oKXtcbiAgICAgICAgaWYoIXRoaXMucHJlcHJvY2Vzc2luZ1NhbXBsZUZuKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzZXRQcmVwcm9jZXNzaW5nRnVuY3Rpb25zIG11c3QgYmUgY2FsbGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ1NhbXBsZUZuO1xuICAgIH1cbiAgICBnZXQgUHJlcHJvY2Vzc2luZ0xhYmVsRm4oKXtcbiAgICAgICAgaWYoIXRoaXMucHJlcHJvY2Vzc2luZ0xhYmVsRm4pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3NldFByZXByb2Nlc3NpbmdGdW5jdGlvbnMgbXVzdCBiZSBjYWxsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nTGFiZWxGbjtcbiAgICB9XG4gICAgc2V0IFByZXByb2Nlc3NpbmdTYW1wbGVGbihwcmVwcm9jZXNzaW5nU2FtcGxlRm4pe1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdTYW1wbGVGbiA9IHByZXByb2Nlc3NpbmdTYW1wbGVGbjtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nU2FtcGxlRm4uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgc2V0IFByZXByb2Nlc3NpbmdMYWJlbEZuKHByZXByb2Nlc3NpbmdMYWJlbEZuKXtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nTGFiZWxGbiA9IHByZXByb2Nlc3NpbmdMYWJlbEZuO1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdMYWJlbEZuLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIHNldFByZXByb2Nlc3NpbmdGdW5jdGlvbnMocHJlcHJvY2Vzc2luZ1NhbXBsZUZuLCBwcmVwcm9jZXNzaW5nTGFiZWxGbil7XG4gICAgICAgIGlmKHR5cGVvZihwcmVwcm9jZXNzaW5nU2FtcGxlRm4pIT09J2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncHJlcHJvY2Vzc2luZ1NhbXBsZUZuIG11c3QgYmUgRnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0eXBlb2YocHJlcHJvY2Vzc2luZ0xhYmVsRm4pIT09J2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncHJlcHJvY2Vzc2luZ0xhYmVsRm4gbXVzdCBiZSBGdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZ1NhbXBsZUZuID0gcHJlcHJvY2Vzc2luZ1NhbXBsZUZuO1xuICAgICAgICB0aGlzLlByZXByb2Nlc3NpbmdMYWJlbEZuID0gcHJlcHJvY2Vzc2luZ0xhYmVsRm47XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJlcHJvY2Vzc2luZ01peGluczsiLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb24gfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IEl0ZW1Ob3JtYWxpemluZywgTnVsbEl0ZW1SZXBsYWNlIH0gZnJvbSAnLi9UYWJ1bGFyL2luZGV4JztcbmNsYXNzIFRhYnVsYXJQcmVwcm9jZXNzaW5nIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3Rpb24sIFxuICAgIFsgSXRlbU5vcm1hbGl6aW5nLCBOdWxsSXRlbVJlcGxhY2UgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUYWJ1bGFyUHJlcHJvY2Vzc2luZzsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2tlbml6ZXJFTih0ZXh0KXtcbiAgICByZXR1cm4gdGV4dC5zcGxpdCgnICcpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=