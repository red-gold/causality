(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@tensorflow-models/universal-sentence-encoder"), require("causal-net.core"), require("causal-net.memcache"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["@tensorflow-models/universal-sentence-encoder", "causal-net.core", "causal-net.memcache", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/representation"] = factory(require("@tensorflow-models/universal-sentence-encoder"), require("causal-net.core"), require("causal-net.memcache"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/representation"] = factory(root["@tensorflow-models/universal-sentence-encoder"], root["causal-net.core"], root["causal-net.memcache"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__tensorflow_models_universal_sentence_encoder__, __WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectSpread.js":
/*!**********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Lookup/chunkLookup.mixins.js":
/*!******************************************!*\
  !*** ./src/Lookup/chunkLookup.mixins.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This ChunkLookupMixins class provide mixins for chunk lookup that first look from the cached chunk then
 * fetch and cache new chunk
 * @class ChunkLookupMixins
 * @extends {  BaseWordEmbeddingClass } 
 */
const ChunkLookupMixins = BaseWordEmbeddingClass => class extends BaseWordEmbeddingClass {
  /**
   * Return the storage lookup function
   * @readonly
   */
  get ChunkLookUp() {
    const Storage = this.Storage;
    return chunkId => {
      return new Promise(async (resolve, reject) => {
        try {
          const ChunkPath = this.embeddingSavePath + chunkId;
          let chunkItem = await Storage.getItem(ChunkPath);
          let chunk = chunkItem[ChunkPath];
          resolve(JSON.parse(chunk));
        } catch (err) {
          resolve(null);
        }
      });
    };
  }
  /**
   * Update the storage lookup
   * @param { String|Number } chunkId - id in positive integer range
   * @param { Object } chunk - chunk object containing token keys and correponding vec value
   * @returns { String } - updated chunk path in storage
   */


  async updateChunkLookUp(chunkId, chunk) {
    const Storage = this.Storage;
    const UpdateChunkPath = this.embeddingSavePath + chunkId;
    return await Storage.setItem(UpdateChunkPath, chunk);
  }
  /**
   * Query chunk either read from file or fetch from remote server
   * @param { String|Number } chunkId - id in positive interger range
   * @returns { Object }  chunk object containing token keys and correponding vec value
   */


  async queryChunk(chunkId) {
    const ChunkUrl = `${this.baseLink}wordvec_chunk_${chunkId}.json`;
    return await this.query(ChunkUrl);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ChunkLookupMixins);

/***/ }),

/***/ "./src/Lookup/index.js":
/*!*****************************!*\
  !*** ./src/Lookup/index.js ***!
  \*****************************/
/*! exports provided: ChunkLookupMixins, TokenLookUpMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunkLookup.mixins */ "./src/Lookup/chunkLookup.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChunkLookupMixins", function() { return _chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenLookup.mixins */ "./src/Lookup/tokenLookup.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenLookUpMixins", function() { return _tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/Lookup/tokenLookup.mixins.js":
/*!******************************************!*\
  !*** ./src/Lookup/tokenLookup.mixins.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const TokenLookUpMixins = BaseWordEmbeddingClass => class extends BaseWordEmbeddingClass {
  get TokenLookUp() {
    const MemCache = this.MemCache;
    return token => {
      return new Promise(async (resolve, reject) => {
        try {
          let vec = await MemCache.getItem(this.embeddingSavePath + token);
          resolve(vec);
        } catch (err) {
          resolve(null);
        }
      });
    };
  }
  /**
   *
   * @param { String } token - 
   * @param { Array } vec - vector representation of token
   */


  async updateTokenLookUp(token, vec) {
    console.error('this is update');
    const MemCache = this.MemCache;
    await MemCache.setItem(this.embeddingSavePath + token, vec);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (TokenLookUpMixins);

/***/ }),

/***/ "./src/causalNetEmbedding.js":
/*!***********************************!*\
  !*** ./src/causalNetEmbedding.js ***!
  \***********************************/
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
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.memcache */ "causal-net.memcache");
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordEmbedding_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wordEmbedding.mixins */ "./src/wordEmbedding.mixins.js");
/* harmony import */ var _Lookup_chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lookup/chunkLookup.mixins */ "./src/Lookup/chunkLookup.mixins.js");
/* harmony import */ var _Lookup_tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Lookup/tokenLookup.mixins */ "./src/Lookup/tokenLookup.mixins.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./function */ "./src/function.js");








/**
 * This CausalNetEmbedding provide methods for transform raw tokenized sentence into 
 * its single vector representation
 * mixWith:
 *         [   StorageMixins, 
 *             MemCacheMixins,
 *             TokenLookUpMixins,
 *             ChunkLookUpMixins,
 *             WordEmbeddingMixins ])}
 * @class CausalNetEmbedding
 * @extends  Tensor
 * @example
 * [EXAMPLE ../examples/causalNetEmbedding.babel.node.js]
 */

class CausalNetEmbedding extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["StorageMixins"], causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__["MemCacheMixins"], _Lookup_tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_6__["default"], _Lookup_chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_5__["default"], _wordEmbedding_mixins__WEBPACK_IMPORTED_MODULE_4__["default"]]) {
  constructor() {
    super();
    this.fetch = causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["fetch"];
    this.Storage = causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["indexDBStorage"]; //store configure

    this.MemCache = causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__["memDownCache"]; //store chunks

    this.F = new _function__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.embeddingSavePath = '/embedding/';
    this.embeddingDescriptionPath = this.embeddingSavePath + 'description.json';
  }
  /**
   * Return veczie in positive number
   *
   * @readonly
   * @memberof CausalNetEmbedding
   */


  get VecSize() {
    if (!this.vecsize) {
      throw Error('vecsize is not set');
    }

    return this.vecsize;
  }
  /**
   * Load configure of pretrained vector from either local folder or remote server. 
   * After connect, the result is cached for next time init.
   * @param { URL|FilePath } link - link to load
   * @param { boolean } [refresh=false] - force to discard local cache
   * @returns { Promise }
   * @memberof CausalNetEmbedding
   */


  async connect(link, refresh = false) {
    this.baseLink = link;
    return await this.getDescription(refresh);
  }
  /**
   * This method is called by connect
   * @private
   * @param {boolean} [forceFecth=false]
   * @returns
   * @memberof CausalNetEmbedding
   */


  async getDescription(forceFecth = false) {
    if (!this.description) {
      try {
        let descriptionItem = await this.Storage.getItem(this.embeddingDescriptionPath);
        this.description = JSON.parse(descriptionItem[this.embeddingDescriptionPath]);
      } catch (err) {
        this.logger.debug({
          'load description from storage': false
        });
        this.description = await this.queryDescription();
      }
    }

    if (forceFecth) {
      this.description = await this.queryDescription();
    }

    this.TokenChunkIdMapper = token => {
      return this.F.getIn([token], this.description.chunkLookUp, null);
    };

    this.vecsize = this.description.vecsize; //only set from here

    return this.description;
  }
  /**
   * fetch or read configure depends on provied link format
   * @private
   * @param {*} link
   * @returns
   * @memberof CausalNetEmbedding
   */


  async query(link) {
    if (link.startsWith('http')) {
      return await causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["jsonUtils"].fetchJson(link);
    } else {
      return await causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["jsonUtils"].readJSON(link);
    }
  }
  /**
   * query the description json 
   * @private
   * @returns { Object } description json object
   * @memberof CausalNetEmbedding
   */


  async queryDescription() {
    const DescriptionLink = this.baseLink + 'wordvec.description.json';
    this.logger.debug({
      DescriptionLink
    });
    var description = this.query(DescriptionLink);
    await this.Storage.setItem(this.embeddingDescriptionPath, JSON.stringify(description));
    this.description = description;
    return this.description;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetEmbedding());

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Function; });
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordEmbeddingFunction_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wordEmbeddingFunction.mixins */ "./src/wordEmbeddingFunction.mixins.js");



/**
 * This Function class provides methods for common used ultilities function
 * @export
 * @class Function
 * @extends BaseFunction
 */

class Function extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], [_wordEmbeddingFunction_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
  constructor() {
    super();
  }

}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: RepresentationMixins, causalNetEmbedding, universalEmbedding, WordEmbeddingMixins, ChunkLookupMixins, TokenLookUpMixins, WordEmbeddingFunctionMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _representation_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./representation.mixins */ "./src/representation.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepresentationMixins", function() { return _representation_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _causalNetEmbedding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./causalNetEmbedding */ "./src/causalNetEmbedding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetEmbedding", function() { return _causalNetEmbedding__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _universalEmbedding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./universalEmbedding */ "./src/universalEmbedding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "universalEmbedding", function() { return _universalEmbedding__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _wordEmbedding_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wordEmbedding.mixins */ "./src/wordEmbedding.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordEmbeddingMixins", function() { return _wordEmbedding_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lookup */ "./src/Lookup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChunkLookupMixins", function() { return _Lookup__WEBPACK_IMPORTED_MODULE_4__["ChunkLookupMixins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenLookUpMixins", function() { return _Lookup__WEBPACK_IMPORTED_MODULE_4__["TokenLookUpMixins"]; });

/* harmony import */ var _wordEmbeddingFunction_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wordEmbeddingFunction.mixins */ "./src/wordEmbeddingFunction.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordEmbeddingFunctionMixins", function() { return _wordEmbeddingFunction_mixins__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/representation.mixins.js":
/*!**************************************!*\
  !*** ./src/representation.mixins.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This RepresentationMixins provide mixins for composing pipeline with representation transform for text
 * @class RepresentationMixins
 * @extends  BasePipelineClass
 * @example
 * [EXAMPLE ../examples/embeddingMixins.babel.node.js]
 */

const RepresentationMixins = BasePipelineClass => class extends BasePipelineClass {
  /**
   * Return Embedding instance
   *
   * @readonly
   * @memberof RepresentationMixins
   */
  get Representation() {
    if (!this.representation) {
      throw Error('representation is not set');
    }

    return this.representation;
  }

  set Representation(representation) {
    causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["assert"].beInstanceOf(representation, causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"]);
    this.representation = representation;
  }
  /**
   * Load configure of pretrained vector from either local folder or remote server. 
   * After connect, the result is cached for next time init.
   * @param { URL|FilePath } link - link to load
   * @param { boolean } [refresh=false] - force to discard local cache
   * @returns { Promise }
   * @memberof RepresentationMixins
   */


  async connect() {
    if (super.connect) {
      super.connect();
    }

    let configureLink = this.embeddingConfig;
    this.logger.log(`representation connect to ${configureLink}`);
    await this.Representation.connect(configureLink);
  }
  /**
   * set embedding for pipeline
   * @param { Object } netConfig - contain Embedding instance and Embedding configure
   * @memberof RepresentationMixins
   */


  setRepresentationByConfig(netConfig) {
    let {
      EmbeddingConfig,
      Embedding
    } = netConfig.Representation;
    causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["assert"].beInstanceOf(EmbeddingConfig, String);
    this.Representation = Embedding;
    this.embeddingConfig = EmbeddingConfig;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (RepresentationMixins);

/***/ }),

/***/ "./src/universalEmbedding.js":
/*!***********************************!*\
  !*** ./src/universalEmbedding.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_1__);



/**
 *
 * This UniversialEmbedding provide methods for transform sentences into 
 * its single vector representation 
 * based on [use](https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder)
 * @class UniversialEmbedding
 * @extends Tensor
 */

class UniversialEmbedding extends causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Tensor"], []) {
  constructor() {
    super();
    /**
     * @private { TensorModel } 
     */

    this.use = __webpack_require__(/*! @tensorflow-models/universal-sentence-encoder */ "@tensorflow-models/universal-sentence-encoder");
    this.model = null;
  }

  async connect() {
    if (global) {
      //TODO: make better with platform
      global.fetch = causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["fetch"].fetch;
    }

    this.model = await this.use.load();
    return this;
  }

  async sentenceEncode(sentences) {
    if (!this.model) {
      throw Error(`model is not connect`);
    }

    let embeddings = await this.model.embed(sentences);
    return embeddings;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new UniversialEmbedding());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/wordEmbedding.mixins.js":
/*!*************************************!*\
  !*** ./src/wordEmbedding.mixins.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);


/**
 * This WordEmbeddingMixins class is provide methods for transforn sentences, tokens to vectors
 * @class CausalNetEmbedding
 * @extends  BaseEmbeddingClass
 */
const WordEmbeddingMixins = BaseEmbeddingClass => class extends BaseEmbeddingClass {
  /**
   * return default replacement for unknown vec. Currently it is set to zeros
   * @returns { Array } vec
   */
  unknowVec() {
    return this.F.zeroVec(this.VecSize);
  }
  /**
   * return the vectors of tokenized sentences
   * This function require sentence to be tokenized via preprocessing
   * @param { Array } tokens - array of string tokens of sentence
   * @returns { Tensor } encoded sentences
   */


  async sentenceEncode(sentences) {
    const T = this.T;
    let encodedSentences = [];

    for (let tokens of sentences) {
      let vecs = await this.transform(tokens);
      let encode = await T.tensor(vecs).mean(0);
      encodedSentences.push(encode);
    }

    return T.stack(encodedSentences);
  }
  /**
   * Transform tokenized sentences into tensor vectors
   * @param { Array } tokens - 2d array for token of sentences
   * @returns { Tensor } 2d tensor represent vectors of each input sentences
   * @example
   * let sentVec = await causalNetEmbedding.sentenceEncode([ ['this', 'is', 'test'] ]);
   */


  async transform(tokens) {
    const TokenLookUp = this.TokenLookUp,
          ChunkLookUp = this.ChunkLookUp;
    let vecs = [],
        missCacheTokens = [];

    for (let token of tokens) {
      let vec = await TokenLookUp(token);
      this.logger.debug({
        [token]: vec
      });

      if (vec === null) {
        missCacheTokens = [...missCacheTokens, token];
      }

      vecs = [...vecs, token];
    }

    if (missCacheTokens.length === 0) {
      return vecs;
    }

    let {
      tokenChunkIds,
      chunkIds
    } = this.F.mapTokenToChunkIds(missCacheTokens, this.TokenChunkIdMapper);
    this.logger.debug({
      tokenChunkIds,
      chunkIds
    });
    let masterchunk = {};

    for (let chunkId of chunkIds) {
      if (chunkId !== null) {
        //not in chunk
        console.log('lookup');
        let chunk = await ChunkLookUp(chunkId);

        if (chunk === null) {
          chunk = await this.queryChunk(chunkId);
          await this.updateChunkLookUp(chunkId, chunk);
        }

        masterchunk = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, masterchunk, chunk);
      }
    }

    let finalVecs = vecs.reduce((finalVecs, vec) => {
      if (typeof vec === "string") {
        let _vec = masterchunk[vec];

        if (_vec === undefined) {
          _vec = this.unknowVec();
        }

        finalVecs.push(_vec);
      } else {
        finalVecs.push(vec);
      }

      return finalVecs;
    }, []);
    return finalVecs;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (WordEmbeddingMixins);

/***/ }),

/***/ "./src/wordEmbeddingFunction.mixins.js":
/*!*********************************************!*\
  !*** ./src/wordEmbeddingFunction.mixins.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const WordEmbeddingFunctionMixins = BaseFunctionClass => class extends BaseFunctionClass {
  /**
   *
   * @param { Array } tokens - list of tokens to find coresponding ids
   * @param { Function } mapper - 
   * @returns 
   */
  mapTokenToChunkIds(tokens, mapper) {
    const R = this.R;
    const TokenChunkIdMapper = mapper;
    let tokenChunkMap = tokens.map(t => {
      let chunkId = TokenChunkIdMapper(t);
      return [[t, chunkId], chunkId];
    });
    let [tokenChunkIds, _chunkIds] = this.unzip(tokenChunkMap);
    let chunkIds = R.uniq(_chunkIds);
    console.log({
      chunkIds,
      tokenChunkIds
    });
    return {
      tokenChunkIds,
      chunkIds
    };
  }
  /**
   * return zero vector given the vec size
   * @param { Number } vecSize - positive integer indicates vector length
   * @returns { Array } zero vector
   */


  zeroVec(vecSize) {
    return this.R.map(() => 0, this.R.range(0, vecSize));
  }

};

/* harmony default export */ __webpack_exports__["default"] = (WordEmbeddingFunctionMixins);

/***/ }),

/***/ "@tensorflow-models/universal-sentence-encoder":
/*!****************************************************************!*\
  !*** external "@tensorflow-models/universal-sentence-encoder" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tensorflow_models_universal_sentence_encoder__;

/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

/***/ }),

/***/ "causal-net.memcache":
/*!**************************************!*\
  !*** external "causal-net.memcache" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL2NodW5rTG9va3VwLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9jYXVzYWxOZXRFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvcmVwcmVzZW50YXRpb24ubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvdW5pdmVyc2FsRW1iZWRkaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvd29yZEVtYmVkZGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy93b3JkRW1iZWRkaW5nRnVuY3Rpb24ubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDaHVua0xvb2t1cE1peGlucyIsIkJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MiLCJDaHVua0xvb2tVcCIsIlN0b3JhZ2UiLCJjaHVua0lkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJDaHVua1BhdGgiLCJlbWJlZGRpbmdTYXZlUGF0aCIsImNodW5rSXRlbSIsImdldEl0ZW0iLCJjaHVuayIsIkpTT04iLCJwYXJzZSIsImVyciIsInVwZGF0ZUNodW5rTG9va1VwIiwiVXBkYXRlQ2h1bmtQYXRoIiwic2V0SXRlbSIsInF1ZXJ5Q2h1bmsiLCJDaHVua1VybCIsImJhc2VMaW5rIiwicXVlcnkiLCJUb2tlbkxvb2tVcE1peGlucyIsIlRva2VuTG9va1VwIiwiTWVtQ2FjaGUiLCJ0b2tlbiIsInZlYyIsInVwZGF0ZVRva2VuTG9va1VwIiwiY29uc29sZSIsImVycm9yIiwiQ2F1c2FsTmV0RW1iZWRkaW5nIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiU3RvcmFnZU1peGlucyIsIk1lbUNhY2hlTWl4aW5zIiwiQ2h1bmtMb29rVXBNaXhpbnMiLCJXb3JkRW1iZWRkaW5nTWl4aW5zIiwiY29uc3RydWN0b3IiLCJmZXRjaCIsImluZGV4REJTdG9yYWdlIiwibWVtRG93bkNhY2hlIiwiRiIsIkZ1bmN0aW9uIiwiZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoIiwiVmVjU2l6ZSIsInZlY3NpemUiLCJFcnJvciIsImNvbm5lY3QiLCJsaW5rIiwicmVmcmVzaCIsImdldERlc2NyaXB0aW9uIiwiZm9yY2VGZWN0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JdGVtIiwibG9nZ2VyIiwiZGVidWciLCJxdWVyeURlc2NyaXB0aW9uIiwiVG9rZW5DaHVua0lkTWFwcGVyIiwiZ2V0SW4iLCJjaHVua0xvb2tVcCIsInN0YXJ0c1dpdGgiLCJqc29uVXRpbHMiLCJmZXRjaEpzb24iLCJyZWFkSlNPTiIsIkRlc2NyaXB0aW9uTGluayIsInN0cmluZ2lmeSIsIlBsYXRmb3JtIiwiQmFzZUZ1bmN0aW9uIiwiV29yZEVtYmVkZGluZ0Z1bmN0aW9uTWl4aW5zIiwiUmVwcmVzZW50YXRpb25NaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIlJlcHJlc2VudGF0aW9uIiwicmVwcmVzZW50YXRpb24iLCJhc3NlcnQiLCJiZUluc3RhbmNlT2YiLCJjb25maWd1cmVMaW5rIiwiZW1iZWRkaW5nQ29uZmlnIiwibG9nIiwic2V0UmVwcmVzZW50YXRpb25CeUNvbmZpZyIsIm5ldENvbmZpZyIsIkVtYmVkZGluZ0NvbmZpZyIsIkVtYmVkZGluZyIsIlN0cmluZyIsIlVuaXZlcnNpYWxFbWJlZGRpbmciLCJ1c2UiLCJyZXF1aXJlIiwibW9kZWwiLCJnbG9iYWwiLCJsb2FkIiwic2VudGVuY2VFbmNvZGUiLCJzZW50ZW5jZXMiLCJlbWJlZGRpbmdzIiwiZW1iZWQiLCJCYXNlRW1iZWRkaW5nQ2xhc3MiLCJ1bmtub3dWZWMiLCJ6ZXJvVmVjIiwiVCIsImVuY29kZWRTZW50ZW5jZXMiLCJ0b2tlbnMiLCJ2ZWNzIiwidHJhbnNmb3JtIiwiZW5jb2RlIiwidGVuc29yIiwibWVhbiIsInB1c2giLCJzdGFjayIsIm1pc3NDYWNoZVRva2VucyIsImxlbmd0aCIsInRva2VuQ2h1bmtJZHMiLCJjaHVua0lkcyIsIm1hcFRva2VuVG9DaHVua0lkcyIsIm1hc3RlcmNodW5rIiwiZmluYWxWZWNzIiwicmVkdWNlIiwiX3ZlYyIsInVuZGVmaW5lZCIsIkJhc2VGdW5jdGlvbkNsYXNzIiwibWFwcGVyIiwiUiIsInRva2VuQ2h1bmtNYXAiLCJtYXAiLCJ0IiwiX2NodW5rSWRzIiwidW56aXAiLCJ1bmlxIiwidmVjU2l6ZSIsInJhbmdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIs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Ozs7Ozs7QUNBQSxpRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiwgXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3ctbW9kZWxzL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb25cIl0gPSBmYWN0b3J5KHJvb3RbXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X21vZGVsc191bml2ZXJzYWxfc2VudGVuY2VfZW5jb2Rlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqXG4gKiBUaGlzIENodW5rTG9va3VwTWl4aW5zIGNsYXNzIHByb3ZpZGUgbWl4aW5zIGZvciBjaHVuayBsb29rdXAgdGhhdCBmaXJzdCBsb29rIGZyb20gdGhlIGNhY2hlZCBjaHVuayB0aGVuXG4gKiBmZXRjaCBhbmQgY2FjaGUgbmV3IGNodW5rXG4gKiBAY2xhc3MgQ2h1bmtMb29rdXBNaXhpbnNcbiAqIEBleHRlbmRzIHsgIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MgfSBcbiAqL1xuY29uc3QgQ2h1bmtMb29rdXBNaXhpbnMgPSAoIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MgKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVdvcmRFbWJlZGRpbmdDbGFzc3sgXG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzdG9yYWdlIGxvb2t1cCBmdW5jdGlvblxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIGdldCBDaHVua0xvb2tVcCgpe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICByZXR1cm4gKGNodW5rSWQpPT57XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IENodW5rUGF0aCA9IHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyBjaHVua0lkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtJdGVtID0gYXdhaXQgU3RvcmFnZS5nZXRJdGVtKENodW5rUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGNodW5rSXRlbVtDaHVua1BhdGhdO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoY2h1bmspKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAvKipcbiAgICAqIFVwZGF0ZSB0aGUgc3RvcmFnZSBsb29rdXBcbiAgICAqIEBwYXJhbSB7IFN0cmluZ3xOdW1iZXIgfSBjaHVua0lkIC0gaWQgaW4gcG9zaXRpdmUgaW50ZWdlciByYW5nZVxuICAgICogQHBhcmFtIHsgT2JqZWN0IH0gY2h1bmsgLSBjaHVuayBvYmplY3QgY29udGFpbmluZyB0b2tlbiBrZXlzIGFuZCBjb3JyZXBvbmRpbmcgdmVjIHZhbHVlXG4gICAgKiBAcmV0dXJucyB7IFN0cmluZyB9IC0gdXBkYXRlZCBjaHVuayBwYXRoIGluIHN0b3JhZ2VcbiAgICAqL1xuICAgYXN5bmMgdXBkYXRlQ2h1bmtMb29rVXAoY2h1bmtJZCwgY2h1bmspe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICBjb25zdCBVcGRhdGVDaHVua1BhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgY2h1bmtJZDtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFN0b3JhZ2Uuc2V0SXRlbShVcGRhdGVDaHVua1BhdGgsIGNodW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUXVlcnkgY2h1bmsgZWl0aGVyIHJlYWQgZnJvbSBmaWxlIG9yIGZldGNoIGZyb20gcmVtb3RlIHNlcnZlclxuICAgICAqIEBwYXJhbSB7IFN0cmluZ3xOdW1iZXIgfSBjaHVua0lkIC0gaWQgaW4gcG9zaXRpdmUgaW50ZXJnZXIgcmFuZ2VcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9ICBjaHVuayBvYmplY3QgY29udGFpbmluZyB0b2tlbiBrZXlzIGFuZCBjb3JyZXBvbmRpbmcgdmVjIHZhbHVlXG4gICAgICovXG4gICAgYXN5bmMgcXVlcnlDaHVuayhjaHVua0lkKXtcbiAgICAgICAgY29uc3QgQ2h1bmtVcmwgPSBgJHt0aGlzLmJhc2VMaW5rfXdvcmR2ZWNfY2h1bmtfJHtjaHVua0lkfS5qc29uYDtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcnkoQ2h1bmtVcmwpO1xuICAgIH1cbiAgIFxufTtcbmV4cG9ydCBkZWZhdWx0IENodW5rTG9va3VwTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2h1bmtMb29rdXBNaXhpbnMgfSBmcm9tICcuL2NodW5rTG9va3VwLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRva2VuTG9va1VwTWl4aW5zIH0gZnJvbSAnLi90b2tlbkxvb2t1cC5taXhpbnMnOyIsImNvbnN0IFRva2VuTG9va1VwTWl4aW5zID0gKEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlV29yZEVtYmVkZGluZ0NsYXNzeyBcbiAgICBnZXQgVG9rZW5Mb29rVXAoKXtcbiAgICAgICAgY29uc3QgTWVtQ2FjaGUgPSB0aGlzLk1lbUNhY2hlO1xuICAgICAgICByZXR1cm4gKHRva2VuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmVjID0gYXdhaXQgTWVtQ2FjaGUuZ2V0SXRlbSh0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZlYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gdG9rZW4gLSBcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHZlYyAtIHZlY3RvciByZXByZXNlbnRhdGlvbiBvZiB0b2tlblxuICAgICAqL1xuICAgIGFzeW5jIHVwZGF0ZVRva2VuTG9va1VwKHRva2VuLCB2ZWMpe1xuICAgICAgICBjb25zb2xlLmVycm9yKCd0aGlzIGlzIHVwZGF0ZScpO1xuICAgICAgICBjb25zdCBNZW1DYWNoZSA9IHRoaXMuTWVtQ2FjaGU7XG4gICAgICAgIGF3YWl0IE1lbUNhY2hlLnNldEl0ZW0odGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIHRva2VuLCB2ZWMpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBUb2tlbkxvb2tVcE1peGlucztcbiIsImltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSwgZmV0Y2gsIGpzb25VdGlscyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgTWVtQ2FjaGVNaXhpbnMsIG1lbURvd25DYWNoZSB9IGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nTWl4aW5zIH0gZnJvbSAnLi93b3JkRW1iZWRkaW5nLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIENodW5rTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAvY2h1bmtMb29rdXAubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVG9rZW5Mb29rVXBNaXhpbnMgfSBmcm9tICcuL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldEVtYmVkZGluZyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybSByYXcgdG9rZW5pemVkIHNlbnRlbmNlIGludG8gXG4gKiBpdHMgc2luZ2xlIHZlY3RvciByZXByZXNlbnRhdGlvblxuICogbWl4V2l0aDpcbiAqICAgICAgICAgWyAgIFN0b3JhZ2VNaXhpbnMsIFxuICogICAgICAgICAgICAgTWVtQ2FjaGVNaXhpbnMsXG4gKiAgICAgICAgICAgICBUb2tlbkxvb2tVcE1peGlucyxcbiAqICAgICAgICAgICAgIENodW5rTG9va1VwTWl4aW5zLFxuICogICAgICAgICAgICAgV29yZEVtYmVkZGluZ01peGlucyBdKX1cbiAqIEBjbGFzcyBDYXVzYWxOZXRFbWJlZGRpbmdcbiAqIEBleHRlbmRzICBUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXRFbWJlZGRpbmcuYmFiZWwubm9kZS5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0RW1iZWRkaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsIFxuICAgICAgICBbICAgU3RvcmFnZU1peGlucywgXG4gICAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAgICAgICAgICAgIFRva2VuTG9va1VwTWl4aW5zLFxuICAgICAgICAgICAgQ2h1bmtMb29rVXBNaXhpbnMsXG4gICAgICAgICAgICBXb3JkRW1iZWRkaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZmV0Y2ggPSBmZXRjaDtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gaW5kZXhEQlN0b3JhZ2U7ICAgLy9zdG9yZSBjb25maWd1cmVcbiAgICAgICAgdGhpcy5NZW1DYWNoZSA9IG1lbURvd25DYWNoZTsgICAgLy9zdG9yZSBjaHVua3NcbiAgICAgICAgdGhpcy5GID0gbmV3IEZ1bmN0aW9uKCk7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggPSAnL2VtYmVkZGluZy8nO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCA9IHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyAnZGVzY3JpcHRpb24uanNvbic7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiB2ZWN6aWUgaW4gcG9zaXRpdmUgbnVtYmVyXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgZ2V0IFZlY1NpemUoKXtcbiAgICAgICAgaWYoIXRoaXMudmVjc2l6ZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndmVjc2l6ZSBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmVjc2l6ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZCBjb25maWd1cmUgb2YgcHJldHJhaW5lZCB2ZWN0b3IgZnJvbSBlaXRoZXIgbG9jYWwgZm9sZGVyIG9yIHJlbW90ZSBzZXJ2ZXIuIFxuICAgICAqIEFmdGVyIGNvbm5lY3QsIHRoZSByZXN1bHQgaXMgY2FjaGVkIGZvciBuZXh0IHRpbWUgaW5pdC5cbiAgICAgKiBAcGFyYW0geyBVUkx8RmlsZVBhdGggfSBsaW5rIC0gbGluayB0byBsb2FkXG4gICAgICogQHBhcmFtIHsgYm9vbGVhbiB9IFtyZWZyZXNoPWZhbHNlXSAtIGZvcmNlIHRvIGRpc2NhcmQgbG9jYWwgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7IFByb21pc2UgfVxuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBjb25uZWN0KGxpbmssIHJlZnJlc2g9ZmFsc2Upe1xuICAgICAgICB0aGlzLmJhc2VMaW5rID0gbGluaztcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0RGVzY3JpcHRpb24ocmVmcmVzaCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSBjb25uZWN0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZUZlY3RoPWZhbHNlXVxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIGdldERlc2NyaXB0aW9uKGZvcmNlRmVjdGg9ZmFsc2Upe1xuICAgICAgICBpZighdGhpcy5kZXNjcmlwdGlvbil7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uSXRlbSA9IGF3YWl0IHRoaXMuU3RvcmFnZS5nZXRJdGVtKHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShkZXNjcmlwdGlvbkl0ZW1bdGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoeydsb2FkIGRlc2NyaXB0aW9uIGZyb20gc3RvcmFnZSc6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnlEZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGZvcmNlRmVjdGgpe1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnlEZXNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuVG9rZW5DaHVua0lkTWFwcGVyID0gKHRva2VuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRi5nZXRJbihbdG9rZW5dLCB0aGlzLmRlc2NyaXB0aW9uLmNodW5rTG9va1VwLCBudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52ZWNzaXplID0gdGhpcy5kZXNjcmlwdGlvbi52ZWNzaXplOy8vb25seSBzZXQgZnJvbSBoZXJlXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBmZXRjaCBvciByZWFkIGNvbmZpZ3VyZSBkZXBlbmRzIG9uIHByb3ZpZWQgbGluayBmb3JtYXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gbGlua1xuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5KGxpbmspe1xuICAgICAgICBpZihsaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSl7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQganNvblV0aWxzLmZldGNoSnNvbihsaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGpzb25VdGlscy5yZWFkSlNPTihsaW5rKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBxdWVyeSB0aGUgZGVzY3JpcHRpb24ganNvbiBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZGVzY3JpcHRpb24ganNvbiBvYmplY3RcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgcXVlcnlEZXNjcmlwdGlvbigpe1xuICAgICAgICBjb25zdCBEZXNjcmlwdGlvbkxpbmsgPSB0aGlzLmJhc2VMaW5rICsgJ3dvcmR2ZWMuZGVzY3JpcHRpb24uanNvbic7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHsgRGVzY3JpcHRpb25MaW5rIH0pO1xuICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnF1ZXJ5KERlc2NyaXB0aW9uTGluayk7XG4gICAgICAgIGF3YWl0IHRoaXMuU3RvcmFnZS5zZXRJdGVtKHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoLCBKU09OLnN0cmluZ2lmeShkZXNjcmlwdGlvbikpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldEVtYmVkZGluZygpOyIsImltcG9ydCB7IEZ1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbiB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nRnVuY3Rpb25NaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmdGdW5jdGlvbi5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIEZ1bmN0aW9uIGNsYXNzIHByb3ZpZGVzIG1ldGhvZHMgZm9yIGNvbW1vbiB1c2VkIHVsdGlsaXRpZXMgZnVuY3Rpb25cbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBGdW5jdGlvblxuICogQGV4dGVuZHMgQmFzZUZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmN0aW9uIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3Rpb24sIFxuICAgICAgICBbV29yZEVtYmVkZGluZ0Z1bmN0aW9uTWl4aW5zXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXByZXNlbnRhdGlvbk1peGlucyB9IGZyb20gJy4vcmVwcmVzZW50YXRpb24ubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0RW1iZWRkaW5nIH0gZnJvbSAnLi9jYXVzYWxOZXRFbWJlZGRpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bml2ZXJzYWxFbWJlZGRpbmcgfSBmcm9tICcuL3VuaXZlcnNhbEVtYmVkZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdvcmRFbWJlZGRpbmdNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmcubWl4aW5zJztcbmV4cG9ydCB7IENodW5rTG9va3VwTWl4aW5zLCBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ0Z1bmN0aW9uTWl4aW5zIH0gZnJvbSAnLi93b3JkRW1iZWRkaW5nRnVuY3Rpb24ubWl4aW5zJzsiLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnOyBcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIFJlcHJlc2VudGF0aW9uTWl4aW5zIHByb3ZpZGUgbWl4aW5zIGZvciBjb21wb3NpbmcgcGlwZWxpbmUgd2l0aCByZXByZXNlbnRhdGlvbiB0cmFuc2Zvcm0gZm9yIHRleHRcbiAqIEBjbGFzcyBSZXByZXNlbnRhdGlvbk1peGluc1xuICogQGV4dGVuZHMgIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvZW1iZWRkaW5nTWl4aW5zLmJhYmVsLm5vZGUuanNdXG4gKi9cbmNvbnN0IFJlcHJlc2VudGF0aW9uTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7IFxuICAgIC8qKlxuICAgICAqIFJldHVybiBFbWJlZGRpbmcgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBSZXByZXNlbnRhdGlvbk1peGluc1xuICAgICAqL1xuICAgIGdldCBSZXByZXNlbnRhdGlvbigpe1xuICAgICAgICBpZighdGhpcy5yZXByZXNlbnRhdGlvbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncmVwcmVzZW50YXRpb24gaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcHJlc2VudGF0aW9uO1xuICAgIH1cbiAgICBcbiAgICBzZXQgUmVwcmVzZW50YXRpb24ocmVwcmVzZW50YXRpb24pe1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKHJlcHJlc2VudGF0aW9uLCBUZW5zb3IpO1xuICAgICAgICB0aGlzLnJlcHJlc2VudGF0aW9uID0gcmVwcmVzZW50YXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgY29uZmlndXJlIG9mIHByZXRyYWluZWQgdmVjdG9yIGZyb20gZWl0aGVyIGxvY2FsIGZvbGRlciBvciByZW1vdGUgc2VydmVyLiBcbiAgICAgKiBBZnRlciBjb25uZWN0LCB0aGUgcmVzdWx0IGlzIGNhY2hlZCBmb3IgbmV4dCB0aW1lIGluaXQuXG4gICAgICogQHBhcmFtIHsgVVJMfEZpbGVQYXRoIH0gbGluayAtIGxpbmsgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7IGJvb2xlYW4gfSBbcmVmcmVzaD1mYWxzZV0gLSBmb3JjZSB0byBkaXNjYXJkIGxvY2FsIGNhY2hlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH1cbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBhc3luYyBjb25uZWN0KCl7XG4gICAgICAgIGlmKHN1cGVyLmNvbm5lY3Qpe1xuICAgICAgICAgICAgc3VwZXIuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb25maWd1cmVMaW5rID0gdGhpcy5lbWJlZGRpbmdDb25maWc7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhgcmVwcmVzZW50YXRpb24gY29ubmVjdCB0byAke2NvbmZpZ3VyZUxpbmt9YCk7XG4gICAgICAgIGF3YWl0IHRoaXMuUmVwcmVzZW50YXRpb24uY29ubmVjdChjb25maWd1cmVMaW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogc2V0IGVtYmVkZGluZyBmb3IgcGlwZWxpbmVcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBuZXRDb25maWcgLSBjb250YWluIEVtYmVkZGluZyBpbnN0YW5jZSBhbmQgRW1iZWRkaW5nIGNvbmZpZ3VyZVxuICAgICAqIEBtZW1iZXJvZiBSZXByZXNlbnRhdGlvbk1peGluc1xuICAgICAqL1xuICAgIHNldFJlcHJlc2VudGF0aW9uQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgbGV0IHsgRW1iZWRkaW5nQ29uZmlnLCBFbWJlZGRpbmcgfSA9IG5ldENvbmZpZy5SZXByZXNlbnRhdGlvbjtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihFbWJlZGRpbmdDb25maWcsIFN0cmluZyk7XG4gICAgICAgIHRoaXMuUmVwcmVzZW50YXRpb24gPSBFbWJlZGRpbmc7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nQ29uZmlnID0gRW1iZWRkaW5nQ29uZmlnO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBSZXByZXNlbnRhdGlvbk1peGluczsgICAgIiwiaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKlxuICogVGhpcyBVbml2ZXJzaWFsRW1iZWRkaW5nIHByb3ZpZGUgbWV0aG9kcyBmb3IgdHJhbnNmb3JtIHNlbnRlbmNlcyBpbnRvIFxuICogaXRzIHNpbmdsZSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gXG4gKiBiYXNlZCBvbiBbdXNlXShodHRwczovL2dpdGh1Yi5jb20vdGVuc29yZmxvdy90ZmpzLW1vZGVscy90cmVlL21hc3Rlci91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlcilcbiAqIEBjbGFzcyBVbml2ZXJzaWFsRW1iZWRkaW5nXG4gKiBAZXh0ZW5kcyBUZW5zb3JcbiAqL1xuY2xhc3MgVW5pdmVyc2lhbEVtYmVkZGluZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoVGVuc29yLCBbXSl7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlIHsgVGVuc29yTW9kZWwgfSBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXNlID0gcmVxdWlyZSgnQHRlbnNvcmZsb3ctbW9kZWxzL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyJyk7XG4gICAgICAgIHRoaXMubW9kZWwgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBjb25uZWN0KCl7XG4gICAgICAgIGlmKGdsb2JhbCl7XG4gICAgICAgICAgICAvL1RPRE86IG1ha2UgYmV0dGVyIHdpdGggcGxhdGZvcm1cbiAgICAgICAgICAgIGdsb2JhbC5mZXRjaCA9IGZldGNoLmZldGNoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWwgPSBhd2FpdCB0aGlzLnVzZS5sb2FkKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbnRlbmNlRW5jb2RlKHNlbnRlbmNlcyl7XG4gICAgICAgIGlmKCF0aGlzLm1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBtb2RlbCBpcyBub3QgY29ubmVjdGApO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbWJlZGRpbmdzID0gYXdhaXQgdGhpcy5tb2RlbC5lbWJlZChzZW50ZW5jZXMpO1xuICAgICAgICByZXR1cm4gZW1iZWRkaW5ncztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgVW5pdmVyc2lhbEVtYmVkZGluZygpOyIsIi8qKlxuICogVGhpcyBXb3JkRW1iZWRkaW5nTWl4aW5zIGNsYXNzIGlzIHByb3ZpZGUgbWV0aG9kcyBmb3IgdHJhbnNmb3JuIHNlbnRlbmNlcywgdG9rZW5zIHRvIHZlY3RvcnNcbiAqIEBjbGFzcyBDYXVzYWxOZXRFbWJlZGRpbmdcbiAqIEBleHRlbmRzICBCYXNlRW1iZWRkaW5nQ2xhc3NcbiAqL1xuY29uc3QgV29yZEVtYmVkZGluZ01peGlucyA9IChCYXNlRW1iZWRkaW5nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRW1iZWRkaW5nQ2xhc3N7IFxuICAgIC8qKlxuICAgICAqIHJldHVybiBkZWZhdWx0IHJlcGxhY2VtZW50IGZvciB1bmtub3duIHZlYy4gQ3VycmVudGx5IGl0IGlzIHNldCB0byB6ZXJvc1xuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSB2ZWNcbiAgICAgKi9cbiAgICB1bmtub3dWZWMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuRi56ZXJvVmVjKHRoaXMuVmVjU2l6ZSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgdmVjdG9ycyBvZiB0b2tlbml6ZWQgc2VudGVuY2VzXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXF1aXJlIHNlbnRlbmNlIHRvIGJlIHRva2VuaXplZCB2aWEgcHJlcHJvY2Vzc2luZ1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2VucyBvZiBzZW50ZW5jZVxuICAgICAqIEByZXR1cm5zIHsgVGVuc29yIH0gZW5jb2RlZCBzZW50ZW5jZXNcbiAgICAgKi9cbiAgICBhc3luYyBzZW50ZW5jZUVuY29kZShzZW50ZW5jZXMpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICBsZXQgZW5jb2RlZFNlbnRlbmNlcyA9IFtdO1xuICAgICAgICBmb3IobGV0IHRva2VucyBvZiBzZW50ZW5jZXMpe1xuICAgICAgICAgICAgbGV0IHZlY3MgPSBhd2FpdCB0aGlzLnRyYW5zZm9ybSh0b2tlbnMpO1xuICAgICAgICAgICAgbGV0IGVuY29kZSA9IGF3YWl0IFQudGVuc29yKHZlY3MpLm1lYW4oMCk7XG4gICAgICAgICAgICBlbmNvZGVkU2VudGVuY2VzLnB1c2goZW5jb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVC5zdGFjayhlbmNvZGVkU2VudGVuY2VzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIHRva2VuaXplZCBzZW50ZW5jZXMgaW50byB0ZW5zb3IgdmVjdG9yc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gMmQgYXJyYXkgZm9yIHRva2VuIG9mIHNlbnRlbmNlc1xuICAgICAqIEByZXR1cm5zIHsgVGVuc29yIH0gMmQgdGVuc29yIHJlcHJlc2VudCB2ZWN0b3JzIG9mIGVhY2ggaW5wdXQgc2VudGVuY2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBsZXQgc2VudFZlYyA9IGF3YWl0IGNhdXNhbE5ldEVtYmVkZGluZy5zZW50ZW5jZUVuY29kZShbIFsndGhpcycsICdpcycsICd0ZXN0J10gXSk7XG4gICAgICovXG4gICAgYXN5bmMgdHJhbnNmb3JtKHRva2Vucyl7XG4gICAgICAgIGNvbnN0IFRva2VuTG9va1VwID0gdGhpcy5Ub2tlbkxvb2tVcCwgQ2h1bmtMb29rVXAgPSB0aGlzLkNodW5rTG9va1VwO1xuICAgICAgICBcbiAgICAgICAgbGV0IHZlY3MgPSBbXSwgbWlzc0NhY2hlVG9rZW5zPVtdO1xuICAgICAgICBmb3IobGV0IHRva2VuIG9mIHRva2Vucyl7XG4gICAgICAgICAgICBsZXQgdmVjID0gYXdhaXQgVG9rZW5Mb29rVXAodG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe1t0b2tlbl06IHZlY30pO1xuICAgICAgICAgICAgaWYodmVjID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICBtaXNzQ2FjaGVUb2tlbnMgPSBbLi4ubWlzc0NhY2hlVG9rZW5zLCB0b2tlbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2ZWNzID0gWy4uLnZlY3MsIHRva2VuXTtcbiAgICAgICAgfVxuICAgICAgICBpZihtaXNzQ2FjaGVUb2tlbnMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB2ZWNzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQge3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfSA9IFxuICAgICAgICAgICAgdGhpcy5GLm1hcFRva2VuVG9DaHVua0lkcyhtaXNzQ2FjaGVUb2tlbnMsIHRoaXMuVG9rZW5DaHVua0lkTWFwcGVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHt0b2tlbkNodW5rSWRzLCBjaHVua0lkc30pO1xuICAgICAgICBsZXQgbWFzdGVyY2h1bmsgPSB7fTtcbiAgICAgICAgZm9yKGxldCBjaHVua0lkIG9mIGNodW5rSWRzKXtcbiAgICAgICAgICAgIGlmKGNodW5rSWQgIT09IG51bGwpey8vbm90IGluIGNodW5rXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb2t1cCcpO1xuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGF3YWl0IENodW5rTG9va1VwKGNodW5rSWQpO1xuICAgICAgICAgICAgICAgIGlmKGNodW5rID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsgPSBhd2FpdCB0aGlzLnF1ZXJ5Q2h1bmsoY2h1bmtJZCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ2h1bmtMb29rVXAoY2h1bmtJZCwgY2h1bmspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXN0ZXJjaHVuayA9IHsuLi5tYXN0ZXJjaHVuaywgLi4uY2h1bmt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZmluYWxWZWNzID0gdmVjcy5yZWR1Y2UoKGZpbmFsVmVjcywgdmVjKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YodmVjKSA9PT0gXCJzdHJpbmdcIiApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3ZlYyA9IG1hc3RlcmNodW5rW3ZlY107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKF92ZWMgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdmVjID0gdGhpcy51bmtub3dWZWMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZlY3MucHVzaChfdmVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWZWNzLnB1c2godmVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsVmVjcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIGZpbmFsVmVjcztcbiAgICB9ICAgXG59O1xuZXhwb3J0IGRlZmF1bHQgV29yZEVtYmVkZGluZ01peGluczsiLCJjb25zdCBXb3JkRW1iZWRkaW5nRnVuY3Rpb25NaXhpbnMgPSAoQmFzZUZ1bmN0aW9uQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZUZ1bmN0aW9uQ2xhc3N7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGxpc3Qgb2YgdG9rZW5zIHRvIGZpbmQgY29yZXNwb25kaW5nIGlkc1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gbWFwcGVyIC0gXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgbWFwVG9rZW5Ub0NodW5rSWRzKHRva2VucywgbWFwcGVyKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVG9rZW5DaHVua0lkTWFwcGVyID0gbWFwcGVyO1xuICAgICAgICBsZXQgdG9rZW5DaHVua01hcCA9IHRva2Vucy5tYXAoIHQgPT4ge1xuICAgICAgICAgICAgbGV0IGNodW5rSWQgPSBUb2tlbkNodW5rSWRNYXBwZXIodCk7XG4gICAgICAgICAgICByZXR1cm4gW1t0LCBjaHVua0lkXSwgY2h1bmtJZF07IFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IFt0b2tlbkNodW5rSWRzLCBfY2h1bmtJZHNdID0gdGhpcy51bnppcCh0b2tlbkNodW5rTWFwKTtcbiAgICAgICAgbGV0IGNodW5rSWRzID0gUi51bmlxKF9jaHVua0lkcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtjaHVua0lkcywgdG9rZW5DaHVua0lkc30pO1xuICAgICAgICByZXR1cm4ge3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogcmV0dXJuIHplcm8gdmVjdG9yIGdpdmVuIHRoZSB2ZWMgc2l6ZVxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IHZlY1NpemUgLSBwb3NpdGl2ZSBpbnRlZ2VyIGluZGljYXRlcyB2ZWN0b3IgbGVuZ3RoXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHplcm8gdmVjdG9yXG4gICAgICovXG4gICAgemVyb1ZlYyh2ZWNTaXplKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5tYXAoKCk9PjAsdGhpcy5SLnJhbmdlKDAsIHZlY1NpemUpKTtcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFdvcmRFbWJlZGRpbmdGdW5jdGlvbk1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfbW9kZWxzX3VuaXZlcnNhbF9zZW50ZW5jZV9lbmNvZGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==