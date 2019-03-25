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
   * Update token look up
   * @param { String } token - token 
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
/* harmony import */ var _vectorMetrics_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vectorMetrics.mixins */ "./src/vectorMetrics.mixins.js");
/* harmony import */ var _functor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functor */ "./src/functor.js");









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
 * @extends  BaseTensor
 * @example
 * [EXAMPLE ../examples/causalNetEmbedding.babel.node.js]
 */

class CausalNetEmbedding extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["StorageMixins"], causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__["MemCacheMixins"], _Lookup_tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_6__["default"], _Lookup_chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_5__["default"], _vectorMetrics_mixins__WEBPACK_IMPORTED_MODULE_7__["default"], _wordEmbedding_mixins__WEBPACK_IMPORTED_MODULE_4__["default"]]) {
  constructor() {
    super();
    this.fetch = causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["fetch"];
    this.Storage = causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["indexDBStorage"]; //store configure

    this.MemCache = causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__["memDownCache"]; //store chunks

    this.f = _functor__WEBPACK_IMPORTED_MODULE_8__["default"];
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

/***/ "./src/functor.js":
/*!************************!*\
  !*** ./src/functor.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordEmbeddingFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wordEmbeddingFunctor.mixins */ "./src/wordEmbeddingFunctor.mixins.js");



/**
 * This Function class provides methods for common used ultilities function
 * @export
 * @class Function
 * @extends BaseFunctor
 */

class Functor extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_wordEmbeddingFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new Functor());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: RepresentationMixins, causalNetEmbedding, universalEmbedding, WordEmbeddingMixins, ChunkLookupMixins, TokenLookUpMixins, WordEmbeddingFunctorMixins */
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

/* harmony import */ var _wordEmbeddingFunctor_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wordEmbeddingFunctor.mixins */ "./src/wordEmbeddingFunctor.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WordEmbeddingFunctorMixins", function() { return _wordEmbeddingFunctor_mixins__WEBPACK_IMPORTED_MODULE_5__["default"]; });








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
/* harmony import */ var _vectorMetrics_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vectorMetrics.mixins */ "./src/vectorMetrics.mixins.js");



/**
 *
 * This UniversialEmbedding provide methods for transform sentences into 
 * its single vector representation 
 * based on [use](https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder)
 * @class UniversialEmbedding
 * @extends Tensor
 * @example
 * [EXAMPLE ../examples/universalEmbedding.babel.js]
 */

class UniversialEmbedding extends causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Tensor"], [_vectorMetrics_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
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

/***/ "./src/vectorMetrics.mixins.js":
/*!*************************************!*\
  !*** ./src/vectorMetrics.mixins.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This VectorMetricMixins class is provide methods for comparing vector representation of different sentences
 * @class VectorMetricMixins
 * @extends  BaseEmbeddingClass
 */
const VectorMetricMixins = BaseEmbeddingClass => class extends BaseEmbeddingClass {
  /**
   * return the eucleudian distance between two representation vectors
   * @returns { Array } vec
   */
  async encodeMatching(sentence1, sentence2) {
    let x = await this.sentenceEncode([sentence1]);
    x = x.reshape([-1]);
    let y = await this.sentenceEncode([sentence2]);
    y = y.reshape([-1]);
    return x.dot(y).div(x.norm().mul(y.norm()));
  }

};

/* harmony default export */ __webpack_exports__["default"] = (VectorMetricMixins);

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
    return this.f.zeroVec(this.VecSize);
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

/***/ "./src/wordEmbeddingFunctor.mixins.js":
/*!********************************************!*\
  !*** ./src/wordEmbeddingFunctor.mixins.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const WordEmbeddingFunctorMixins = BaseFunctionClass => class extends BaseFunctionClass {
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

/* harmony default export */ __webpack_exports__["default"] = (WordEmbeddingFunctorMixins);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL2NodW5rTG9va3VwLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9jYXVzYWxOZXRFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9yZXByZXNlbnRhdGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy91bml2ZXJzYWxFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy92ZWN0b3JNZXRyaWNzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3dvcmRFbWJlZGRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDaHVua0xvb2t1cE1peGlucyIsIkJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MiLCJDaHVua0xvb2tVcCIsIlN0b3JhZ2UiLCJjaHVua0lkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJDaHVua1BhdGgiLCJlbWJlZGRpbmdTYXZlUGF0aCIsImNodW5rSXRlbSIsImdldEl0ZW0iLCJjaHVuayIsIkpTT04iLCJwYXJzZSIsImVyciIsInVwZGF0ZUNodW5rTG9va1VwIiwiVXBkYXRlQ2h1bmtQYXRoIiwic2V0SXRlbSIsInF1ZXJ5Q2h1bmsiLCJDaHVua1VybCIsImJhc2VMaW5rIiwicXVlcnkiLCJUb2tlbkxvb2tVcE1peGlucyIsIlRva2VuTG9va1VwIiwiTWVtQ2FjaGUiLCJ0b2tlbiIsInZlYyIsInVwZGF0ZVRva2VuTG9va1VwIiwiY29uc29sZSIsImVycm9yIiwiQ2F1c2FsTmV0RW1iZWRkaW5nIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZVRlbnNvciIsIlN0b3JhZ2VNaXhpbnMiLCJNZW1DYWNoZU1peGlucyIsIkNodW5rTG9va1VwTWl4aW5zIiwiVmVjdG9yTWV0cmljTWl4aW5zIiwiV29yZEVtYmVkZGluZ01peGlucyIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJpbmRleERCU3RvcmFnZSIsIm1lbURvd25DYWNoZSIsImYiLCJmdW5jdG9yIiwiZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoIiwiVmVjU2l6ZSIsInZlY3NpemUiLCJFcnJvciIsImNvbm5lY3QiLCJsaW5rIiwicmVmcmVzaCIsImdldERlc2NyaXB0aW9uIiwiZm9yY2VGZWN0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JdGVtIiwibG9nZ2VyIiwiZGVidWciLCJxdWVyeURlc2NyaXB0aW9uIiwiVG9rZW5DaHVua0lkTWFwcGVyIiwiRiIsImdldEluIiwiY2h1bmtMb29rVXAiLCJzdGFydHNXaXRoIiwianNvblV0aWxzIiwiZmV0Y2hKc29uIiwicmVhZEpTT04iLCJEZXNjcmlwdGlvbkxpbmsiLCJzdHJpbmdpZnkiLCJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyIsIlJlcHJlc2VudGF0aW9uTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJSZXByZXNlbnRhdGlvbiIsInJlcHJlc2VudGF0aW9uIiwiYXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiVGVuc29yIiwiY29uZmlndXJlTGluayIsImVtYmVkZGluZ0NvbmZpZyIsImxvZyIsInNldFJlcHJlc2VudGF0aW9uQnlDb25maWciLCJuZXRDb25maWciLCJFbWJlZGRpbmdDb25maWciLCJFbWJlZGRpbmciLCJTdHJpbmciLCJVbml2ZXJzaWFsRW1iZWRkaW5nIiwidXNlIiwicmVxdWlyZSIsIm1vZGVsIiwiZ2xvYmFsIiwibG9hZCIsInNlbnRlbmNlRW5jb2RlIiwic2VudGVuY2VzIiwiZW1iZWRkaW5ncyIsImVtYmVkIiwiQmFzZUVtYmVkZGluZ0NsYXNzIiwiZW5jb2RlTWF0Y2hpbmciLCJzZW50ZW5jZTEiLCJzZW50ZW5jZTIiLCJ4IiwicmVzaGFwZSIsInkiLCJkb3QiLCJkaXYiLCJub3JtIiwibXVsIiwidW5rbm93VmVjIiwiemVyb1ZlYyIsIlQiLCJlbmNvZGVkU2VudGVuY2VzIiwidG9rZW5zIiwidmVjcyIsInRyYW5zZm9ybSIsImVuY29kZSIsInRlbnNvciIsIm1lYW4iLCJwdXNoIiwic3RhY2siLCJtaXNzQ2FjaGVUb2tlbnMiLCJsZW5ndGgiLCJ0b2tlbkNodW5rSWRzIiwiY2h1bmtJZHMiLCJtYXBUb2tlblRvQ2h1bmtJZHMiLCJtYXN0ZXJjaHVuayIsImZpbmFsVmVjcyIsInJlZHVjZSIsIl92ZWMiLCJ1bmRlZmluZWQiLCJCYXNlRnVuY3Rpb25DbGFzcyIsIm1hcHBlciIsIlIiLCJ0b2tlbkNodW5rTWFwIiwibWFwIiwidCIsIl9jaHVua0lkcyIsInVuemlwIiwidW5pcSIsInZlY1NpemUiLCJyYW5nZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3ctbW9kZWxzL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQHRlbnNvcmZsb3ctbW9kZWxzL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyXCIsIFwiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvblwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uXCJdID0gZmFjdG9yeShyb290W1wiQHRlbnNvcmZsb3ctbW9kZWxzL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyXCJdLCByb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5tZW1jYWNoZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGVuc29yZmxvd19tb2RlbHNfdW5pdmVyc2FsX3NlbnRlbmNlX2VuY29kZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKlxuICogVGhpcyBDaHVua0xvb2t1cE1peGlucyBjbGFzcyBwcm92aWRlIG1peGlucyBmb3IgY2h1bmsgbG9va3VwIHRoYXQgZmlyc3QgbG9vayBmcm9tIHRoZSBjYWNoZWQgY2h1bmsgdGhlblxuICogZmV0Y2ggYW5kIGNhY2hlIG5ldyBjaHVua1xuICogQGNsYXNzIENodW5rTG9va3VwTWl4aW5zXG4gKiBAZXh0ZW5kcyB7ICBCYXNlV29yZEVtYmVkZGluZ0NsYXNzIH0gXG4gKi9cbmNvbnN0IENodW5rTG9va3VwTWl4aW5zID0gKCBCYXNlV29yZEVtYmVkZGluZ0NsYXNzICk9PiBjbGFzcyBleHRlbmRzIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3N7IFxuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc3RvcmFnZSBsb29rdXAgZnVuY3Rpb25cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICBnZXQgQ2h1bmtMb29rVXAoKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgcmV0dXJuIChjaHVua0lkKT0+e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBDaHVua1BhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgY2h1bmtJZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rSXRlbSA9IGF3YWl0IFN0b3JhZ2UuZ2V0SXRlbShDaHVua1BhdGgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBjaHVua0l0ZW1bQ2h1bmtQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGNodW5rKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgLyoqXG4gICAgKiBVcGRhdGUgdGhlIHN0b3JhZ2UgbG9va3VwXG4gICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gY2h1bmtJZCAtIGlkIGluIHBvc2l0aXZlIGludGVnZXIgcmFuZ2VcbiAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGNodW5rIC0gY2h1bmsgb2JqZWN0IGNvbnRhaW5pbmcgdG9rZW4ga2V5cyBhbmQgY29ycmVwb25kaW5nIHZlYyB2YWx1ZVxuICAgICogQHJldHVybnMgeyBTdHJpbmcgfSAtIHVwZGF0ZWQgY2h1bmsgcGF0aCBpbiBzdG9yYWdlXG4gICAgKi9cbiAgIGFzeW5jIHVwZGF0ZUNodW5rTG9va1VwKGNodW5rSWQsIGNodW5rKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgY29uc3QgVXBkYXRlQ2h1bmtQYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIGNodW5rSWQ7XG4gICAgICAgIHJldHVybiBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oVXBkYXRlQ2h1bmtQYXRoLCBjaHVuayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IGNodW5rIGVpdGhlciByZWFkIGZyb20gZmlsZSBvciBmZXRjaCBmcm9tIHJlbW90ZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gY2h1bmtJZCAtIGlkIGluIHBvc2l0aXZlIGludGVyZ2VyIHJhbmdlXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSAgY2h1bmsgb2JqZWN0IGNvbnRhaW5pbmcgdG9rZW4ga2V5cyBhbmQgY29ycmVwb25kaW5nIHZlYyB2YWx1ZVxuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5Q2h1bmsoY2h1bmtJZCl7XG4gICAgICAgIGNvbnN0IENodW5rVXJsID0gYCR7dGhpcy5iYXNlTGlua313b3JkdmVjX2NodW5rXyR7Y2h1bmtJZH0uanNvbmA7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnF1ZXJ5KENodW5rVXJsKTtcbiAgICB9XG4gICBcbn07XG5leHBvcnQgZGVmYXVsdCBDaHVua0xvb2t1cE1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIENodW5rTG9va3VwTWl4aW5zIH0gZnJvbSAnLi9jaHVua0xvb2t1cC5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vdG9rZW5Mb29rdXAubWl4aW5zJzsiLCJjb25zdCBUb2tlbkxvb2tVcE1peGlucyA9IChCYXNlV29yZEVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVdvcmRFbWJlZGRpbmdDbGFzc3sgXG4gICAgZ2V0IFRva2VuTG9va1VwKCl7XG4gICAgICAgIGNvbnN0IE1lbUNhY2hlID0gdGhpcy5NZW1DYWNoZTtcbiAgICAgICAgcmV0dXJuICh0b2tlbik9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZlYyA9IGF3YWl0IE1lbUNhY2hlLmdldEl0ZW0odGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2ZWMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdG9rZW4gbG9vayB1cFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IHRva2VuIC0gdG9rZW4gXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB2ZWMgLSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gb2YgdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyB1cGRhdGVUb2tlbkxvb2tVcCh0b2tlbiwgdmVjKXtcbiAgICAgICAgY29uc29sZS5lcnJvcigndGhpcyBpcyB1cGRhdGUnKTtcbiAgICAgICAgY29uc3QgTWVtQ2FjaGUgPSB0aGlzLk1lbUNhY2hlO1xuICAgICAgICBhd2FpdCBNZW1DYWNoZS5zZXRJdGVtKHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyB0b2tlbiwgdmVjKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9rZW5Mb29rVXBNaXhpbnM7XG4iLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSwgZmV0Y2gsIGpzb25VdGlscyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgTWVtQ2FjaGVNaXhpbnMsIG1lbURvd25DYWNoZSB9IGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nTWl4aW5zIH0gZnJvbSAnLi93b3JkRW1iZWRkaW5nLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIENodW5rTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAvY2h1bmtMb29rdXAubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVG9rZW5Mb29rVXBNaXhpbnMgfSBmcm9tICcuL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBWZWN0b3JNZXRyaWNNaXhpbnMgfSBmcm9tICcuL3ZlY3Rvck1ldHJpY3MubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZnVuY3RvciB9IGZyb20gJy4vZnVuY3Rvcic7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0RW1iZWRkaW5nIHByb3ZpZGUgbWV0aG9kcyBmb3IgdHJhbnNmb3JtIHJhdyB0b2tlbml6ZWQgc2VudGVuY2UgaW50byBcbiAqIGl0cyBzaW5nbGUgdmVjdG9yIHJlcHJlc2VudGF0aW9uXG4gKiBtaXhXaXRoOlxuICogICAgICAgICBbICAgU3RvcmFnZU1peGlucywgXG4gKiAgICAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAqICAgICAgICAgICAgIFRva2VuTG9va1VwTWl4aW5zLFxuICogICAgICAgICAgICAgQ2h1bmtMb29rVXBNaXhpbnMsXG4gKiAgICAgICAgICAgICBXb3JkRW1iZWRkaW5nTWl4aW5zIF0pfVxuICogQGNsYXNzIENhdXNhbE5ldEVtYmVkZGluZ1xuICogQGV4dGVuZHMgIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXRFbWJlZGRpbmcuYmFiZWwubm9kZS5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0RW1iZWRkaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICAgICAgWyAgIFN0b3JhZ2VNaXhpbnMsIFxuICAgICAgICAgICAgTWVtQ2FjaGVNaXhpbnMsXG4gICAgICAgICAgICBUb2tlbkxvb2tVcE1peGlucyxcbiAgICAgICAgICAgIENodW5rTG9va1VwTWl4aW5zLFxuICAgICAgICAgICAgVmVjdG9yTWV0cmljTWl4aW5zLFxuICAgICAgICAgICAgV29yZEVtYmVkZGluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmZldGNoID0gZmV0Y2g7XG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IGluZGV4REJTdG9yYWdlOyAgIC8vc3RvcmUgY29uZmlndXJlXG4gICAgICAgIHRoaXMuTWVtQ2FjaGUgPSBtZW1Eb3duQ2FjaGU7ICAgIC8vc3RvcmUgY2h1bmtzXG4gICAgICAgIHRoaXMuZiA9IGZ1bmN0b3I7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggPSAnL2VtYmVkZGluZy8nO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCA9IHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyAnZGVzY3JpcHRpb24uanNvbic7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiB2ZWN6aWUgaW4gcG9zaXRpdmUgbnVtYmVyXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgZ2V0IFZlY1NpemUoKXtcbiAgICAgICAgaWYoIXRoaXMudmVjc2l6ZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndmVjc2l6ZSBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmVjc2l6ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZCBjb25maWd1cmUgb2YgcHJldHJhaW5lZCB2ZWN0b3IgZnJvbSBlaXRoZXIgbG9jYWwgZm9sZGVyIG9yIHJlbW90ZSBzZXJ2ZXIuIFxuICAgICAqIEFmdGVyIGNvbm5lY3QsIHRoZSByZXN1bHQgaXMgY2FjaGVkIGZvciBuZXh0IHRpbWUgaW5pdC5cbiAgICAgKiBAcGFyYW0geyBVUkx8RmlsZVBhdGggfSBsaW5rIC0gbGluayB0byBsb2FkXG4gICAgICogQHBhcmFtIHsgYm9vbGVhbiB9IFtyZWZyZXNoPWZhbHNlXSAtIGZvcmNlIHRvIGRpc2NhcmQgbG9jYWwgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7IFByb21pc2UgfVxuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBjb25uZWN0KGxpbmssIHJlZnJlc2g9ZmFsc2Upe1xuICAgICAgICB0aGlzLmJhc2VMaW5rID0gbGluaztcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0RGVzY3JpcHRpb24ocmVmcmVzaCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSBjb25uZWN0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZUZlY3RoPWZhbHNlXVxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIGdldERlc2NyaXB0aW9uKGZvcmNlRmVjdGg9ZmFsc2Upe1xuICAgICAgICBpZighdGhpcy5kZXNjcmlwdGlvbil7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uSXRlbSA9IGF3YWl0IHRoaXMuU3RvcmFnZS5nZXRJdGVtKHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShkZXNjcmlwdGlvbkl0ZW1bdGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoeydsb2FkIGRlc2NyaXB0aW9uIGZyb20gc3RvcmFnZSc6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnlEZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGZvcmNlRmVjdGgpe1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnlEZXNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuVG9rZW5DaHVua0lkTWFwcGVyID0gKHRva2VuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRi5nZXRJbihbdG9rZW5dLCB0aGlzLmRlc2NyaXB0aW9uLmNodW5rTG9va1VwLCBudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52ZWNzaXplID0gdGhpcy5kZXNjcmlwdGlvbi52ZWNzaXplOy8vb25seSBzZXQgZnJvbSBoZXJlXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBmZXRjaCBvciByZWFkIGNvbmZpZ3VyZSBkZXBlbmRzIG9uIHByb3ZpZWQgbGluayBmb3JtYXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gbGlua1xuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5KGxpbmspe1xuICAgICAgICBpZihsaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSl7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQganNvblV0aWxzLmZldGNoSnNvbihsaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGpzb25VdGlscy5yZWFkSlNPTihsaW5rKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBxdWVyeSB0aGUgZGVzY3JpcHRpb24ganNvbiBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZGVzY3JpcHRpb24ganNvbiBvYmplY3RcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgcXVlcnlEZXNjcmlwdGlvbigpe1xuICAgICAgICBjb25zdCBEZXNjcmlwdGlvbkxpbmsgPSB0aGlzLmJhc2VMaW5rICsgJ3dvcmR2ZWMuZGVzY3JpcHRpb24uanNvbic7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHsgRGVzY3JpcHRpb25MaW5rIH0pO1xuICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnF1ZXJ5KERlc2NyaXB0aW9uTGluayk7XG4gICAgICAgIGF3YWl0IHRoaXMuU3RvcmFnZS5zZXRJdGVtKHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoLCBKU09OLnN0cmluZ2lmeShkZXNjcmlwdGlvbikpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldEVtYmVkZGluZygpOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmdGdW5jdG9yLm1peGlucyc7XG4vKipcbiAqIFRoaXMgRnVuY3Rpb24gY2xhc3MgcHJvdmlkZXMgbWV0aG9kcyBmb3IgY29tbW9uIHVzZWQgdWx0aWxpdGllcyBmdW5jdGlvblxuICogQGV4cG9ydFxuICogQGNsYXNzIEZ1bmN0aW9uXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3RvclxuICovXG5cbmNsYXNzIEZ1bmN0b3IgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBcbiAgICAgICAgW1dvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXByZXNlbnRhdGlvbk1peGlucyB9IGZyb20gJy4vcmVwcmVzZW50YXRpb24ubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0RW1iZWRkaW5nIH0gZnJvbSAnLi9jYXVzYWxOZXRFbWJlZGRpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bml2ZXJzYWxFbWJlZGRpbmcgfSBmcm9tICcuL3VuaXZlcnNhbEVtYmVkZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdvcmRFbWJlZGRpbmdNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmcubWl4aW5zJztcbmV4cG9ydCB7IENodW5rTG9va3VwTWl4aW5zLCBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmdGdW5jdG9yLm1peGlucyc7IiwiaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJzsgXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBSZXByZXNlbnRhdGlvbk1peGlucyBwcm92aWRlIG1peGlucyBmb3IgY29tcG9zaW5nIHBpcGVsaW5lIHdpdGggcmVwcmVzZW50YXRpb24gdHJhbnNmb3JtIGZvciB0ZXh0XG4gKiBAY2xhc3MgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAqIEBleHRlbmRzICBCYXNlUGlwZWxpbmVDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2VtYmVkZGluZ01peGlucy5iYWJlbC5ub2RlLmpzXVxuICovXG5jb25zdCBSZXByZXNlbnRhdGlvbk1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzeyBcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gRW1iZWRkaW5nIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBnZXQgUmVwcmVzZW50YXRpb24oKXtcbiAgICAgICAgaWYoIXRoaXMucmVwcmVzZW50YXRpb24pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3JlcHJlc2VudGF0aW9uIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXByZXNlbnRhdGlvbjtcbiAgICB9XG4gICAgXG4gICAgc2V0IFJlcHJlc2VudGF0aW9uKHJlcHJlc2VudGF0aW9uKXtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihyZXByZXNlbnRhdGlvbiwgVGVuc29yKTtcbiAgICAgICAgdGhpcy5yZXByZXNlbnRhdGlvbiA9IHJlcHJlc2VudGF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkIGNvbmZpZ3VyZSBvZiBwcmV0cmFpbmVkIHZlY3RvciBmcm9tIGVpdGhlciBsb2NhbCBmb2xkZXIgb3IgcmVtb3RlIHNlcnZlci4gXG4gICAgICogQWZ0ZXIgY29ubmVjdCwgdGhlIHJlc3VsdCBpcyBjYWNoZWQgZm9yIG5leHQgdGltZSBpbml0LlxuICAgICAqIEBwYXJhbSB7IFVSTHxGaWxlUGF0aCB9IGxpbmsgLSBsaW5rIHRvIGxvYWRcbiAgICAgKiBAcGFyYW0geyBib29sZWFuIH0gW3JlZnJlc2g9ZmFsc2VdIC0gZm9yY2UgdG8gZGlzY2FyZCBsb2NhbCBjYWNoZVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9XG4gICAgICogQG1lbWJlcm9mIFJlcHJlc2VudGF0aW9uTWl4aW5zXG4gICAgICovXG4gICAgYXN5bmMgY29ubmVjdCgpe1xuICAgICAgICBpZihzdXBlci5jb25uZWN0KXtcbiAgICAgICAgICAgIHN1cGVyLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29uZmlndXJlTGluayA9IHRoaXMuZW1iZWRkaW5nQ29uZmlnO1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2coYHJlcHJlc2VudGF0aW9uIGNvbm5lY3QgdG8gJHtjb25maWd1cmVMaW5rfWApO1xuICAgICAgICBhd2FpdCB0aGlzLlJlcHJlc2VudGF0aW9uLmNvbm5lY3QoY29uZmlndXJlTGluayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNldCBlbWJlZGRpbmcgZm9yIHBpcGVsaW5lXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gbmV0Q29uZmlnIC0gY29udGFpbiBFbWJlZGRpbmcgaW5zdGFuY2UgYW5kIEVtYmVkZGluZyBjb25maWd1cmVcbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBzZXRSZXByZXNlbnRhdGlvbkJ5Q29uZmlnKG5ldENvbmZpZyl7XG4gICAgICAgIGxldCB7IEVtYmVkZGluZ0NvbmZpZywgRW1iZWRkaW5nIH0gPSBuZXRDb25maWcuUmVwcmVzZW50YXRpb247XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YoRW1iZWRkaW5nQ29uZmlnLCBTdHJpbmcpO1xuICAgICAgICB0aGlzLlJlcHJlc2VudGF0aW9uID0gRW1iZWRkaW5nO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ0NvbmZpZyA9IEVtYmVkZGluZ0NvbmZpZztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVwcmVzZW50YXRpb25NaXhpbnM7ICAgICIsImltcG9ydCB7IHBsYXRmb3JtLCBmZXRjaCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yTWV0cmljTWl4aW5zIH0gZnJvbSAnLi92ZWN0b3JNZXRyaWNzLm1peGlucyc7XG4vKipcbiAqXG4gKiBUaGlzIFVuaXZlcnNpYWxFbWJlZGRpbmcgcHJvdmlkZSBtZXRob2RzIGZvciB0cmFuc2Zvcm0gc2VudGVuY2VzIGludG8gXG4gKiBpdHMgc2luZ2xlIHZlY3RvciByZXByZXNlbnRhdGlvbiBcbiAqIGJhc2VkIG9uIFt1c2VdKGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5zb3JmbG93L3RmanMtbW9kZWxzL3RyZWUvbWFzdGVyL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyKVxuICogQGNsYXNzIFVuaXZlcnNpYWxFbWJlZGRpbmdcbiAqIEBleHRlbmRzIFRlbnNvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3VuaXZlcnNhbEVtYmVkZGluZy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgVW5pdmVyc2lhbEVtYmVkZGluZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoVGVuc29yLCBcbiAgICBbIFZlY3Rvck1ldHJpY01peGlucyBdKXtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGUgeyBUZW5zb3JNb2RlbCB9IFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51c2UgPSByZXF1aXJlKCdAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXInKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGNvbm5lY3QoKXtcbiAgICAgICAgaWYoZ2xvYmFsKXtcbiAgICAgICAgICAgIC8vVE9ETzogbWFrZSBiZXR0ZXIgd2l0aCBwbGF0Zm9ybVxuICAgICAgICAgICAgZ2xvYmFsLmZldGNoID0gZmV0Y2guZmV0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbCA9IGF3YWl0IHRoaXMudXNlLmxvYWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VudGVuY2VFbmNvZGUoc2VudGVuY2VzKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYG1vZGVsIGlzIG5vdCBjb25uZWN0YCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVtYmVkZGluZ3MgPSBhd2FpdCB0aGlzLm1vZGVsLmVtYmVkKHNlbnRlbmNlcyk7XG4gICAgICAgIHJldHVybiBlbWJlZGRpbmdzO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBVbml2ZXJzaWFsRW1iZWRkaW5nKCk7IiwiLyoqXG4gKiBUaGlzIFZlY3Rvck1ldHJpY01peGlucyBjbGFzcyBpcyBwcm92aWRlIG1ldGhvZHMgZm9yIGNvbXBhcmluZyB2ZWN0b3IgcmVwcmVzZW50YXRpb24gb2YgZGlmZmVyZW50IHNlbnRlbmNlc1xuICogQGNsYXNzIFZlY3Rvck1ldHJpY01peGluc1xuICogQGV4dGVuZHMgIEJhc2VFbWJlZGRpbmdDbGFzc1xuICovXG5jb25zdCBWZWN0b3JNZXRyaWNNaXhpbnMgPSAoQmFzZUVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUVtYmVkZGluZ0NsYXNzeyBcbiAgICBcbiAgICAvKipcbiAgICAgKiByZXR1cm4gdGhlIGV1Y2xldWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gcmVwcmVzZW50YXRpb24gdmVjdG9yc1xuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSB2ZWNcbiAgICAgKi9cbiAgICBhc3luYyBlbmNvZGVNYXRjaGluZyhzZW50ZW5jZTEsIHNlbnRlbmNlMil7XG4gICAgICAgIGxldCB4ID0gYXdhaXQgdGhpcy5zZW50ZW5jZUVuY29kZShbc2VudGVuY2UxXSk7XG4gICAgICAgIHggPSB4LnJlc2hhcGUoWy0xXSk7XG4gICAgICAgIGxldCB5ID0gYXdhaXQgdGhpcy5zZW50ZW5jZUVuY29kZShbc2VudGVuY2UyXSk7XG4gICAgICAgIHkgPSB5LnJlc2hhcGUoWy0xXSk7XG4gICAgICAgIHJldHVybiB4LmRvdCh5KS5kaXYoeC5ub3JtKCkubXVsKHkubm9ybSgpKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yTWV0cmljTWl4aW5zO1xuIiwiLyoqXG4gKiBUaGlzIFdvcmRFbWJlZGRpbmdNaXhpbnMgY2xhc3MgaXMgcHJvdmlkZSBtZXRob2RzIGZvciB0cmFuc2Zvcm4gc2VudGVuY2VzLCB0b2tlbnMgdG8gdmVjdG9yc1xuICogQGNsYXNzIENhdXNhbE5ldEVtYmVkZGluZ1xuICogQGV4dGVuZHMgIEJhc2VFbWJlZGRpbmdDbGFzc1xuICovXG5jb25zdCBXb3JkRW1iZWRkaW5nTWl4aW5zID0gKEJhc2VFbWJlZGRpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VFbWJlZGRpbmdDbGFzc3sgXG4gICAgLyoqXG4gICAgICogcmV0dXJuIGRlZmF1bHQgcmVwbGFjZW1lbnQgZm9yIHVua25vd24gdmVjLiBDdXJyZW50bHkgaXQgaXMgc2V0IHRvIHplcm9zXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHZlY1xuICAgICAqL1xuICAgIHVua25vd1ZlYygpe1xuICAgICAgICByZXR1cm4gdGhpcy5mLnplcm9WZWModGhpcy5WZWNTaXplKTtcbiAgICB9XG4gICAgICAgIFxuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgdmVjdG9ycyBvZiB0b2tlbml6ZWQgc2VudGVuY2VzXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXF1aXJlIHNlbnRlbmNlIHRvIGJlIHRva2VuaXplZCB2aWEgcHJlcHJvY2Vzc2luZ1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2VucyBvZiBzZW50ZW5jZVxuICAgICAqIEByZXR1cm5zIHsgVGVuc29yIH0gZW5jb2RlZCBzZW50ZW5jZXNcbiAgICAgKi9cbiAgICBhc3luYyBzZW50ZW5jZUVuY29kZShzZW50ZW5jZXMpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICBsZXQgZW5jb2RlZFNlbnRlbmNlcyA9IFtdO1xuICAgICAgICBmb3IobGV0IHRva2VucyBvZiBzZW50ZW5jZXMpe1xuICAgICAgICAgICAgbGV0IHZlY3MgPSBhd2FpdCB0aGlzLnRyYW5zZm9ybSh0b2tlbnMpO1xuICAgICAgICAgICAgbGV0IGVuY29kZSA9IGF3YWl0IFQudGVuc29yKHZlY3MpLm1lYW4oMCk7XG4gICAgICAgICAgICBlbmNvZGVkU2VudGVuY2VzLnB1c2goZW5jb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVC5zdGFjayhlbmNvZGVkU2VudGVuY2VzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIHRva2VuaXplZCBzZW50ZW5jZXMgaW50byB0ZW5zb3IgdmVjdG9yc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gMmQgYXJyYXkgZm9yIHRva2VuIG9mIHNlbnRlbmNlc1xuICAgICAqIEByZXR1cm5zIHsgVGVuc29yIH0gMmQgdGVuc29yIHJlcHJlc2VudCB2ZWN0b3JzIG9mIGVhY2ggaW5wdXQgc2VudGVuY2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBsZXQgc2VudFZlYyA9IGF3YWl0IGNhdXNhbE5ldEVtYmVkZGluZy5zZW50ZW5jZUVuY29kZShbIFsndGhpcycsICdpcycsICd0ZXN0J10gXSk7XG4gICAgICovXG4gICAgYXN5bmMgdHJhbnNmb3JtKHRva2Vucyl7XG4gICAgICAgIGNvbnN0IFRva2VuTG9va1VwID0gdGhpcy5Ub2tlbkxvb2tVcCwgQ2h1bmtMb29rVXAgPSB0aGlzLkNodW5rTG9va1VwO1xuICAgICAgICBcbiAgICAgICAgbGV0IHZlY3MgPSBbXSwgbWlzc0NhY2hlVG9rZW5zPVtdO1xuICAgICAgICBmb3IobGV0IHRva2VuIG9mIHRva2Vucyl7XG4gICAgICAgICAgICBsZXQgdmVjID0gYXdhaXQgVG9rZW5Mb29rVXAodG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe1t0b2tlbl06IHZlY30pO1xuICAgICAgICAgICAgaWYodmVjID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICBtaXNzQ2FjaGVUb2tlbnMgPSBbLi4ubWlzc0NhY2hlVG9rZW5zLCB0b2tlbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2ZWNzID0gWy4uLnZlY3MsIHRva2VuXTtcbiAgICAgICAgfVxuICAgICAgICBpZihtaXNzQ2FjaGVUb2tlbnMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB2ZWNzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQge3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfSA9IFxuICAgICAgICAgICAgdGhpcy5GLm1hcFRva2VuVG9DaHVua0lkcyhtaXNzQ2FjaGVUb2tlbnMsIHRoaXMuVG9rZW5DaHVua0lkTWFwcGVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHt0b2tlbkNodW5rSWRzLCBjaHVua0lkc30pO1xuICAgICAgICBsZXQgbWFzdGVyY2h1bmsgPSB7fTtcbiAgICAgICAgZm9yKGxldCBjaHVua0lkIG9mIGNodW5rSWRzKXtcbiAgICAgICAgICAgIGlmKGNodW5rSWQgIT09IG51bGwpey8vbm90IGluIGNodW5rXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb2t1cCcpO1xuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGF3YWl0IENodW5rTG9va1VwKGNodW5rSWQpO1xuICAgICAgICAgICAgICAgIGlmKGNodW5rID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsgPSBhd2FpdCB0aGlzLnF1ZXJ5Q2h1bmsoY2h1bmtJZCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ2h1bmtMb29rVXAoY2h1bmtJZCwgY2h1bmspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXN0ZXJjaHVuayA9IHsuLi5tYXN0ZXJjaHVuaywgLi4uY2h1bmt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZmluYWxWZWNzID0gdmVjcy5yZWR1Y2UoKGZpbmFsVmVjcywgdmVjKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YodmVjKSA9PT0gXCJzdHJpbmdcIiApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3ZlYyA9IG1hc3RlcmNodW5rW3ZlY107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKF92ZWMgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdmVjID0gdGhpcy51bmtub3dWZWMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZlY3MucHVzaChfdmVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWZWNzLnB1c2godmVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsVmVjcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIGZpbmFsVmVjcztcbiAgICB9ICAgXG59O1xuZXhwb3J0IGRlZmF1bHQgV29yZEVtYmVkZGluZ01peGluczsiLCJjb25zdCBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyA9IChCYXNlRnVuY3Rpb25DbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRnVuY3Rpb25DbGFzc3tcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gbGlzdCBvZiB0b2tlbnMgdG8gZmluZCBjb3Jlc3BvbmRpbmcgaWRzXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBtYXBwZXIgLSBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBtYXBUb2tlblRvQ2h1bmtJZHModG9rZW5zLCBtYXBwZXIpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUb2tlbkNodW5rSWRNYXBwZXIgPSBtYXBwZXI7XG4gICAgICAgIGxldCB0b2tlbkNodW5rTWFwID0gdG9rZW5zLm1hcCggdCA9PiB7XG4gICAgICAgICAgICBsZXQgY2h1bmtJZCA9IFRva2VuQ2h1bmtJZE1hcHBlcih0KTtcbiAgICAgICAgICAgIHJldHVybiBbW3QsIGNodW5rSWRdLCBjaHVua0lkXTsgXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgW3Rva2VuQ2h1bmtJZHMsIF9jaHVua0lkc10gPSB0aGlzLnVuemlwKHRva2VuQ2h1bmtNYXApO1xuICAgICAgICBsZXQgY2h1bmtJZHMgPSBSLnVuaXEoX2NodW5rSWRzKTtcbiAgICAgICAgY29uc29sZS5sb2coe2NodW5rSWRzLCB0b2tlbkNodW5rSWRzfSk7XG4gICAgICAgIHJldHVybiB7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiByZXR1cm4gemVybyB2ZWN0b3IgZ2l2ZW4gdGhlIHZlYyBzaXplXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gdmVjU2l6ZSAtIHBvc2l0aXZlIGludGVnZXIgaW5kaWNhdGVzIHZlY3RvciBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gemVybyB2ZWN0b3JcbiAgICAgKi9cbiAgICB6ZXJvVmVjKHZlY1NpemUpe1xuICAgICAgICByZXR1cm4gdGhpcy5SLm1hcCgoKT0+MCx0aGlzLlIucmFuZ2UoMCwgdmVjU2l6ZSkpO1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X21vZGVsc191bml2ZXJzYWxfc2VudGVuY2VfZW5jb2Rlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=