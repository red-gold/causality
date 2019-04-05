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
  constructor(fetch, storage, cache, functor) {
    super();
    this.fetch = fetch;
    this.Storage = storage; //store configure

    this.MemCache = cache; //store chunks

    this.F = functor;
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

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetEmbedding(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["fetch"], causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["indexDBStorage"], causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__["memDownCache"], _functor__WEBPACK_IMPORTED_MODULE_8__["default"]));

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
 * This mixin class provides attributes: **Representation**.
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
 * This UniversalEmbedding provide methods for transform sentences into 
 * its single vector representation 
 * based on [use](https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder)
 * 
 * @class UniversalEmbedding
 * @extends {Tensor}
 * @example
 * [EXAMPLE ../examples/universalEmbedding.babel.js]
 */

class UniversalEmbedding extends causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Tensor"], [_vectorMetrics_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
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

/* harmony default export */ __webpack_exports__["default"] = (new UniversalEmbedding());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL2NodW5rTG9va3VwLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9jYXVzYWxOZXRFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9yZXByZXNlbnRhdGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy91bml2ZXJzYWxFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy92ZWN0b3JNZXRyaWNzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3dvcmRFbWJlZGRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDaHVua0xvb2t1cE1peGlucyIsIkJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MiLCJDaHVua0xvb2tVcCIsIlN0b3JhZ2UiLCJjaHVua0lkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJDaHVua1BhdGgiLCJlbWJlZGRpbmdTYXZlUGF0aCIsImNodW5rSXRlbSIsImdldEl0ZW0iLCJjaHVuayIsIkpTT04iLCJwYXJzZSIsImVyciIsInVwZGF0ZUNodW5rTG9va1VwIiwiVXBkYXRlQ2h1bmtQYXRoIiwic2V0SXRlbSIsInF1ZXJ5Q2h1bmsiLCJDaHVua1VybCIsImJhc2VMaW5rIiwicXVlcnkiLCJUb2tlbkxvb2tVcE1peGlucyIsIlRva2VuTG9va1VwIiwiTWVtQ2FjaGUiLCJ0b2tlbiIsInZlYyIsInVwZGF0ZVRva2VuTG9va1VwIiwiY29uc29sZSIsImVycm9yIiwiQ2F1c2FsTmV0RW1iZWRkaW5nIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZVRlbnNvciIsIlN0b3JhZ2VNaXhpbnMiLCJNZW1DYWNoZU1peGlucyIsIkNodW5rTG9va1VwTWl4aW5zIiwiVmVjdG9yTWV0cmljTWl4aW5zIiwiV29yZEVtYmVkZGluZ01peGlucyIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJzdG9yYWdlIiwiY2FjaGUiLCJmdW5jdG9yIiwiRiIsImVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCIsIlZlY1NpemUiLCJ2ZWNzaXplIiwiRXJyb3IiLCJjb25uZWN0IiwibGluayIsInJlZnJlc2giLCJnZXREZXNjcmlwdGlvbiIsImZvcmNlRmVjdGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uSXRlbSIsImxvZ2dlciIsImRlYnVnIiwicXVlcnlEZXNjcmlwdGlvbiIsIlRva2VuQ2h1bmtJZE1hcHBlciIsImdldEluIiwiY2h1bmtMb29rVXAiLCJzdGFydHNXaXRoIiwianNvblV0aWxzIiwiZmV0Y2hKc29uIiwicmVhZEpTT04iLCJEZXNjcmlwdGlvbkxpbmsiLCJzdHJpbmdpZnkiLCJpbmRleERCU3RvcmFnZSIsIm1lbURvd25DYWNoZSIsIkZ1bmN0b3IiLCJCYXNlRnVuY3RvciIsIldvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zIiwiUmVwcmVzZW50YXRpb25NaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIlJlcHJlc2VudGF0aW9uIiwicmVwcmVzZW50YXRpb24iLCJhc3NlcnQiLCJiZUluc3RhbmNlT2YiLCJUZW5zb3IiLCJjb25maWd1cmVMaW5rIiwiZW1iZWRkaW5nQ29uZmlnIiwibG9nIiwic2V0UmVwcmVzZW50YXRpb25CeUNvbmZpZyIsIm5ldENvbmZpZyIsIkVtYmVkZGluZ0NvbmZpZyIsIkVtYmVkZGluZyIsIlN0cmluZyIsIlVuaXZlcnNhbEVtYmVkZGluZyIsInVzZSIsInJlcXVpcmUiLCJtb2RlbCIsImdsb2JhbCIsImxvYWQiLCJzZW50ZW5jZUVuY29kZSIsInNlbnRlbmNlcyIsImVtYmVkZGluZ3MiLCJlbWJlZCIsIkJhc2VFbWJlZGRpbmdDbGFzcyIsImVuY29kZU1hdGNoaW5nIiwic2VudGVuY2UxIiwic2VudGVuY2UyIiwieCIsInJlc2hhcGUiLCJ5IiwiZG90IiwiZGl2Iiwibm9ybSIsIm11bCIsInVua25vd1ZlYyIsImYiLCJ6ZXJvVmVjIiwiVCIsImVuY29kZWRTZW50ZW5jZXMiLCJ0b2tlbnMiLCJ2ZWNzIiwidHJhbnNmb3JtIiwiZW5jb2RlIiwidGVuc29yIiwibWVhbiIsInB1c2giLCJzdGFjayIsIm1pc3NDYWNoZVRva2VucyIsImxlbmd0aCIsInRva2VuQ2h1bmtJZHMiLCJjaHVua0lkcyIsIm1hcFRva2VuVG9DaHVua0lkcyIsIm1hc3RlcmNodW5rIiwiZmluYWxWZWNzIiwicmVkdWNlIiwiX3ZlYyIsInVuZGVmaW5lZCIsIkJhc2VGdW5jdGlvbkNsYXNzIiwibWFwcGVyIiwiUiIsInRva2VuQ2h1bmtNYXAiLCJtYXAiLCJ0IiwiX2NodW5rSWRzIiwidW56aXAiLCJ1bmlxIiwidmVjU2l6ZSIsInJhbmdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztB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Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiwgXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3ctbW9kZWxzL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb25cIl0gPSBmYWN0b3J5KHJvb3RbXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X21vZGVsc191bml2ZXJzYWxfc2VudGVuY2VfZW5jb2Rlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyoqXG4gKiBUaGlzIENodW5rTG9va3VwTWl4aW5zIGNsYXNzIHByb3ZpZGUgbWl4aW5zIGZvciBjaHVuayBsb29rdXAgdGhhdCBmaXJzdCBsb29rIGZyb20gdGhlIGNhY2hlZCBjaHVuayB0aGVuXG4gKiBmZXRjaCBhbmQgY2FjaGUgbmV3IGNodW5rXG4gKiBAY2xhc3MgQ2h1bmtMb29rdXBNaXhpbnNcbiAqIEBleHRlbmRzIHsgIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MgfSBcbiAqL1xuY29uc3QgQ2h1bmtMb29rdXBNaXhpbnMgPSAoIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MgKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVdvcmRFbWJlZGRpbmdDbGFzc3sgXG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzdG9yYWdlIGxvb2t1cCBmdW5jdGlvblxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIGdldCBDaHVua0xvb2tVcCgpe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICByZXR1cm4gKGNodW5rSWQpPT57XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IENodW5rUGF0aCA9IHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyBjaHVua0lkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtJdGVtID0gYXdhaXQgU3RvcmFnZS5nZXRJdGVtKENodW5rUGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGNodW5rSXRlbVtDaHVua1BhdGhdO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoY2h1bmspKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAvKipcbiAgICAqIFVwZGF0ZSB0aGUgc3RvcmFnZSBsb29rdXBcbiAgICAqIEBwYXJhbSB7IFN0cmluZ3xOdW1iZXIgfSBjaHVua0lkIC0gaWQgaW4gcG9zaXRpdmUgaW50ZWdlciByYW5nZVxuICAgICogQHBhcmFtIHsgT2JqZWN0IH0gY2h1bmsgLSBjaHVuayBvYmplY3QgY29udGFpbmluZyB0b2tlbiBrZXlzIGFuZCBjb3JyZXBvbmRpbmcgdmVjIHZhbHVlXG4gICAgKiBAcmV0dXJucyB7IFN0cmluZyB9IC0gdXBkYXRlZCBjaHVuayBwYXRoIGluIHN0b3JhZ2VcbiAgICAqL1xuICAgYXN5bmMgdXBkYXRlQ2h1bmtMb29rVXAoY2h1bmtJZCwgY2h1bmspe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICBjb25zdCBVcGRhdGVDaHVua1BhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgY2h1bmtJZDtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFN0b3JhZ2Uuc2V0SXRlbShVcGRhdGVDaHVua1BhdGgsIGNodW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUXVlcnkgY2h1bmsgZWl0aGVyIHJlYWQgZnJvbSBmaWxlIG9yIGZldGNoIGZyb20gcmVtb3RlIHNlcnZlclxuICAgICAqIEBwYXJhbSB7IFN0cmluZ3xOdW1iZXIgfSBjaHVua0lkIC0gaWQgaW4gcG9zaXRpdmUgaW50ZXJnZXIgcmFuZ2VcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9ICBjaHVuayBvYmplY3QgY29udGFpbmluZyB0b2tlbiBrZXlzIGFuZCBjb3JyZXBvbmRpbmcgdmVjIHZhbHVlXG4gICAgICovXG4gICAgYXN5bmMgcXVlcnlDaHVuayhjaHVua0lkKXtcbiAgICAgICAgY29uc3QgQ2h1bmtVcmwgPSBgJHt0aGlzLmJhc2VMaW5rfXdvcmR2ZWNfY2h1bmtfJHtjaHVua0lkfS5qc29uYDtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcnkoQ2h1bmtVcmwpO1xuICAgIH1cbiAgIFxufTtcbmV4cG9ydCBkZWZhdWx0IENodW5rTG9va3VwTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ2h1bmtMb29rdXBNaXhpbnMgfSBmcm9tICcuL2NodW5rTG9va3VwLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRva2VuTG9va1VwTWl4aW5zIH0gZnJvbSAnLi90b2tlbkxvb2t1cC5taXhpbnMnOyIsImNvbnN0IFRva2VuTG9va1VwTWl4aW5zID0gKEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlV29yZEVtYmVkZGluZ0NsYXNzeyBcbiAgICBnZXQgVG9rZW5Mb29rVXAoKXtcbiAgICAgICAgY29uc3QgTWVtQ2FjaGUgPSB0aGlzLk1lbUNhY2hlO1xuICAgICAgICByZXR1cm4gKHRva2VuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmVjID0gYXdhaXQgTWVtQ2FjaGUuZ2V0SXRlbSh0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZlYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0b2tlbiBsb29rIHVwXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gdG9rZW4gLSB0b2tlbiBcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHZlYyAtIHZlY3RvciByZXByZXNlbnRhdGlvbiBvZiB0b2tlblxuICAgICAqL1xuICAgIGFzeW5jIHVwZGF0ZVRva2VuTG9va1VwKHRva2VuLCB2ZWMpe1xuICAgICAgICBjb25zb2xlLmVycm9yKCd0aGlzIGlzIHVwZGF0ZScpO1xuICAgICAgICBjb25zdCBNZW1DYWNoZSA9IHRoaXMuTWVtQ2FjaGU7XG4gICAgICAgIGF3YWl0IE1lbUNhY2hlLnNldEl0ZW0odGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIHRva2VuLCB2ZWMpO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBUb2tlbkxvb2tVcE1peGlucztcbiIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtLCBmZXRjaCwganNvblV0aWxzIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBTdG9yYWdlTWl4aW5zLCBpbmRleERCU3RvcmFnZSB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyBNZW1DYWNoZU1peGlucywgbWVtRG93bkNhY2hlIH0gZnJvbSAnY2F1c2FsLW5ldC5tZW1jYWNoZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFdvcmRFbWJlZGRpbmdNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmcubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgQ2h1bmtMb29rVXBNaXhpbnMgfSBmcm9tICcuL0xvb2t1cC9jaHVua0xvb2t1cC5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwL3Rva2VuTG9va3VwLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFZlY3Rvck1ldHJpY01peGlucyB9IGZyb20gJy4vdmVjdG9yTWV0cmljcy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXRFbWJlZGRpbmcgcHJvdmlkZSBtZXRob2RzIGZvciB0cmFuc2Zvcm0gcmF3IHRva2VuaXplZCBzZW50ZW5jZSBpbnRvIFxuICogaXRzIHNpbmdsZSB2ZWN0b3IgcmVwcmVzZW50YXRpb25cbiAqIG1peFdpdGg6XG4gKiAgICAgICAgIFsgICBTdG9yYWdlTWl4aW5zLCBcbiAqICAgICAgICAgICAgIE1lbUNhY2hlTWl4aW5zLFxuICogICAgICAgICAgICAgVG9rZW5Mb29rVXBNaXhpbnMsXG4gKiAgICAgICAgICAgICBDaHVua0xvb2tVcE1peGlucyxcbiAqICAgICAgICAgICAgIFdvcmRFbWJlZGRpbmdNaXhpbnMgXSl9XG4gKiBAY2xhc3MgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gKiBAZXh0ZW5kcyAgQmFzZVRlbnNvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldEVtYmVkZGluZy5iYWJlbC5ub2RlLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRFbWJlZGRpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VUZW5zb3IsIFxuICAgICAgICBbICAgU3RvcmFnZU1peGlucywgXG4gICAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAgICAgICAgICAgIFRva2VuTG9va1VwTWl4aW5zLFxuICAgICAgICAgICAgQ2h1bmtMb29rVXBNaXhpbnMsXG4gICAgICAgICAgICBWZWN0b3JNZXRyaWNNaXhpbnMsXG4gICAgICAgICAgICBXb3JkRW1iZWRkaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKGZldGNoLCBzdG9yYWdlLCBjYWNoZSwgZnVuY3Rvcil7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZmV0Y2ggPSBmZXRjaDtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gc3RvcmFnZTsgICAvL3N0b3JlIGNvbmZpZ3VyZVxuICAgICAgICB0aGlzLk1lbUNhY2hlID0gY2FjaGU7ICAgIC8vc3RvcmUgY2h1bmtzXG4gICAgICAgIHRoaXMuRiA9IGZ1bmN0b3I7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggPSAnL2VtYmVkZGluZy8nO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCA9IHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyAnZGVzY3JpcHRpb24uanNvbic7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybiB2ZWN6aWUgaW4gcG9zaXRpdmUgbnVtYmVyXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgZ2V0IFZlY1NpemUoKXtcbiAgICAgICAgaWYoIXRoaXMudmVjc2l6ZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndmVjc2l6ZSBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmVjc2l6ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZCBjb25maWd1cmUgb2YgcHJldHJhaW5lZCB2ZWN0b3IgZnJvbSBlaXRoZXIgbG9jYWwgZm9sZGVyIG9yIHJlbW90ZSBzZXJ2ZXIuIFxuICAgICAqIEFmdGVyIGNvbm5lY3QsIHRoZSByZXN1bHQgaXMgY2FjaGVkIGZvciBuZXh0IHRpbWUgaW5pdC5cbiAgICAgKiBAcGFyYW0geyBVUkx8RmlsZVBhdGggfSBsaW5rIC0gbGluayB0byBsb2FkXG4gICAgICogQHBhcmFtIHsgYm9vbGVhbiB9IFtyZWZyZXNoPWZhbHNlXSAtIGZvcmNlIHRvIGRpc2NhcmQgbG9jYWwgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7IFByb21pc2UgfVxuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBjb25uZWN0KGxpbmssIHJlZnJlc2g9ZmFsc2Upe1xuICAgICAgICB0aGlzLmJhc2VMaW5rID0gbGluaztcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZ2V0RGVzY3JpcHRpb24ocmVmcmVzaCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSBjb25uZWN0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb3JjZUZlY3RoPWZhbHNlXVxuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIGdldERlc2NyaXB0aW9uKGZvcmNlRmVjdGg9ZmFsc2Upe1xuICAgICAgICBpZighdGhpcy5kZXNjcmlwdGlvbil7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uSXRlbSA9IGF3YWl0IHRoaXMuU3RvcmFnZS5nZXRJdGVtKHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShkZXNjcmlwdGlvbkl0ZW1bdGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoeydsb2FkIGRlc2NyaXB0aW9uIGZyb20gc3RvcmFnZSc6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnlEZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGZvcmNlRmVjdGgpe1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnlEZXNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuVG9rZW5DaHVua0lkTWFwcGVyID0gKHRva2VuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRi5nZXRJbihbdG9rZW5dLCB0aGlzLmRlc2NyaXB0aW9uLmNodW5rTG9va1VwLCBudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52ZWNzaXplID0gdGhpcy5kZXNjcmlwdGlvbi52ZWNzaXplOy8vb25seSBzZXQgZnJvbSBoZXJlXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBmZXRjaCBvciByZWFkIGNvbmZpZ3VyZSBkZXBlbmRzIG9uIHByb3ZpZWQgbGluayBmb3JtYXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gbGlua1xuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5KGxpbmspe1xuICAgICAgICBpZihsaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSl7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQganNvblV0aWxzLmZldGNoSnNvbihsaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGpzb25VdGlscy5yZWFkSlNPTihsaW5rKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBxdWVyeSB0aGUgZGVzY3JpcHRpb24ganNvbiBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gZGVzY3JpcHRpb24ganNvbiBvYmplY3RcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgcXVlcnlEZXNjcmlwdGlvbigpe1xuICAgICAgICBjb25zdCBEZXNjcmlwdGlvbkxpbmsgPSB0aGlzLmJhc2VMaW5rICsgJ3dvcmR2ZWMuZGVzY3JpcHRpb24uanNvbic7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHsgRGVzY3JpcHRpb25MaW5rIH0pO1xuICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLnF1ZXJ5KERlc2NyaXB0aW9uTGluayk7XG4gICAgICAgIGF3YWl0IHRoaXMuU3RvcmFnZS5zZXRJdGVtKHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoLCBKU09OLnN0cmluZ2lmeShkZXNjcmlwdGlvbikpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldEVtYmVkZGluZyhmZXRjaCwgaW5kZXhEQlN0b3JhZ2UsIG1lbURvd25DYWNoZSwgZnVuY3Rvcik7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zJztcbi8qKlxuICogVGhpcyBGdW5jdGlvbiBjbGFzcyBwcm92aWRlcyBtZXRob2RzIGZvciBjb21tb24gdXNlZCB1bHRpbGl0aWVzIGZ1bmN0aW9uXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgRnVuY3Rpb25cbiAqIEBleHRlbmRzIEJhc2VGdW5jdG9yXG4gKi9cblxuY2xhc3MgRnVuY3RvciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFxuICAgICAgICBbV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnNdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJlcHJlc2VudGF0aW9uTWl4aW5zIH0gZnJvbSAnLi9yZXByZXNlbnRhdGlvbi5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRFbWJlZGRpbmcgfSBmcm9tICcuL2NhdXNhbE5ldEVtYmVkZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuaXZlcnNhbEVtYmVkZGluZyB9IGZyb20gJy4vdW5pdmVyc2FsRW1iZWRkaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ01peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZy5taXhpbnMnO1xuZXhwb3J0IHsgQ2h1bmtMb29rdXBNaXhpbnMsIFRva2VuTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zJzsiLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnOyBcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIG1peGluIGNsYXNzIHByb3ZpZGVzIGF0dHJpYnV0ZXM6ICoqUmVwcmVzZW50YXRpb24qKi5cbiAqIEBjbGFzcyBSZXByZXNlbnRhdGlvbk1peGluc1xuICogQGV4dGVuZHMgIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvZW1iZWRkaW5nTWl4aW5zLmJhYmVsLm5vZGUuanNdXG4gKi9cbmNvbnN0IFJlcHJlc2VudGF0aW9uTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7IFxuICAgIC8qKlxuICAgICAqIFJldHVybiBFbWJlZGRpbmcgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBSZXByZXNlbnRhdGlvbk1peGluc1xuICAgICAqL1xuICAgIGdldCBSZXByZXNlbnRhdGlvbigpe1xuICAgICAgICBpZighdGhpcy5yZXByZXNlbnRhdGlvbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncmVwcmVzZW50YXRpb24gaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcHJlc2VudGF0aW9uO1xuICAgIH1cbiAgICBcbiAgICBzZXQgUmVwcmVzZW50YXRpb24ocmVwcmVzZW50YXRpb24pe1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKHJlcHJlc2VudGF0aW9uLCBUZW5zb3IpO1xuICAgICAgICB0aGlzLnJlcHJlc2VudGF0aW9uID0gcmVwcmVzZW50YXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgY29uZmlndXJlIG9mIHByZXRyYWluZWQgdmVjdG9yIGZyb20gZWl0aGVyIGxvY2FsIGZvbGRlciBvciByZW1vdGUgc2VydmVyLiBcbiAgICAgKiBBZnRlciBjb25uZWN0LCB0aGUgcmVzdWx0IGlzIGNhY2hlZCBmb3IgbmV4dCB0aW1lIGluaXQuXG4gICAgICogQHBhcmFtIHsgVVJMfEZpbGVQYXRoIH0gbGluayAtIGxpbmsgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7IGJvb2xlYW4gfSBbcmVmcmVzaD1mYWxzZV0gLSBmb3JjZSB0byBkaXNjYXJkIGxvY2FsIGNhY2hlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH1cbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBhc3luYyBjb25uZWN0KCl7XG4gICAgICAgIGlmKHN1cGVyLmNvbm5lY3Qpe1xuICAgICAgICAgICAgc3VwZXIuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb25maWd1cmVMaW5rID0gdGhpcy5lbWJlZGRpbmdDb25maWc7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhgcmVwcmVzZW50YXRpb24gY29ubmVjdCB0byAke2NvbmZpZ3VyZUxpbmt9YCk7XG4gICAgICAgIGF3YWl0IHRoaXMuUmVwcmVzZW50YXRpb24uY29ubmVjdChjb25maWd1cmVMaW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogc2V0IGVtYmVkZGluZyBmb3IgcGlwZWxpbmVcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBuZXRDb25maWcgLSBjb250YWluIEVtYmVkZGluZyBpbnN0YW5jZSBhbmQgRW1iZWRkaW5nIGNvbmZpZ3VyZVxuICAgICAqIEBtZW1iZXJvZiBSZXByZXNlbnRhdGlvbk1peGluc1xuICAgICAqL1xuICAgIHNldFJlcHJlc2VudGF0aW9uQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgbGV0IHsgRW1iZWRkaW5nQ29uZmlnLCBFbWJlZGRpbmcgfSA9IG5ldENvbmZpZy5SZXByZXNlbnRhdGlvbjtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihFbWJlZGRpbmdDb25maWcsIFN0cmluZyk7XG4gICAgICAgIHRoaXMuUmVwcmVzZW50YXRpb24gPSBFbWJlZGRpbmc7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nQ29uZmlnID0gRW1iZWRkaW5nQ29uZmlnO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBSZXByZXNlbnRhdGlvbk1peGluczsgICAgIiwiaW1wb3J0IHsgcGxhdGZvcm0sIGZldGNoIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBWZWN0b3JNZXRyaWNNaXhpbnMgfSBmcm9tICcuL3ZlY3Rvck1ldHJpY3MubWl4aW5zJztcblxuLyoqXG4gKiBUaGlzIFVuaXZlcnNhbEVtYmVkZGluZyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybSBzZW50ZW5jZXMgaW50byBcbiAqIGl0cyBzaW5nbGUgdmVjdG9yIHJlcHJlc2VudGF0aW9uIFxuICogYmFzZWQgb24gW3VzZV0oaHR0cHM6Ly9naXRodWIuY29tL3RlbnNvcmZsb3cvdGZqcy1tb2RlbHMvdHJlZS9tYXN0ZXIvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXIpXG4gKiBcbiAqIEBjbGFzcyBVbml2ZXJzYWxFbWJlZGRpbmdcbiAqIEBleHRlbmRzIHtUZW5zb3J9XG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvdW5pdmVyc2FsRW1iZWRkaW5nLmJhYmVsLmpzXVxuICovXG5jbGFzcyBVbml2ZXJzYWxFbWJlZGRpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKFRlbnNvciwgXG4gICAgWyBWZWN0b3JNZXRyaWNNaXhpbnMgXSl7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlIHsgVGVuc29yTW9kZWwgfSBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudXNlID0gcmVxdWlyZSgnQHRlbnNvcmZsb3ctbW9kZWxzL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyJyk7XG4gICAgICAgIHRoaXMubW9kZWwgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBjb25uZWN0KCl7XG4gICAgICAgIGlmKGdsb2JhbCl7XG4gICAgICAgICAgICAvL1RPRE86IG1ha2UgYmV0dGVyIHdpdGggcGxhdGZvcm1cbiAgICAgICAgICAgIGdsb2JhbC5mZXRjaCA9IGZldGNoLmZldGNoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWwgPSBhd2FpdCB0aGlzLnVzZS5sb2FkKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbnRlbmNlRW5jb2RlKHNlbnRlbmNlcyl7XG4gICAgICAgIGlmKCF0aGlzLm1vZGVsKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBtb2RlbCBpcyBub3QgY29ubmVjdGApO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbWJlZGRpbmdzID0gYXdhaXQgdGhpcy5tb2RlbC5lbWJlZChzZW50ZW5jZXMpO1xuICAgICAgICByZXR1cm4gZW1iZWRkaW5ncztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgVW5pdmVyc2FsRW1iZWRkaW5nKCk7IiwiLyoqXG4gKiBUaGlzIFZlY3Rvck1ldHJpY01peGlucyBjbGFzcyBpcyBwcm92aWRlIG1ldGhvZHMgZm9yIGNvbXBhcmluZyB2ZWN0b3IgcmVwcmVzZW50YXRpb24gb2YgZGlmZmVyZW50IHNlbnRlbmNlc1xuICogQGNsYXNzIFZlY3Rvck1ldHJpY01peGluc1xuICogQGV4dGVuZHMgIEJhc2VFbWJlZGRpbmdDbGFzc1xuICovXG5jb25zdCBWZWN0b3JNZXRyaWNNaXhpbnMgPSAoQmFzZUVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUVtYmVkZGluZ0NsYXNzeyBcbiAgICBcbiAgICAvKipcbiAgICAgKiByZXR1cm4gdGhlIGV1Y2xldWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gcmVwcmVzZW50YXRpb24gdmVjdG9yc1xuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSB2ZWNcbiAgICAgKi9cbiAgICBhc3luYyBlbmNvZGVNYXRjaGluZyhzZW50ZW5jZTEsIHNlbnRlbmNlMil7XG4gICAgICAgIGxldCB4ID0gYXdhaXQgdGhpcy5zZW50ZW5jZUVuY29kZShbc2VudGVuY2UxXSk7XG4gICAgICAgIHggPSB4LnJlc2hhcGUoWy0xXSk7XG4gICAgICAgIGxldCB5ID0gYXdhaXQgdGhpcy5zZW50ZW5jZUVuY29kZShbc2VudGVuY2UyXSk7XG4gICAgICAgIHkgPSB5LnJlc2hhcGUoWy0xXSk7XG4gICAgICAgIHJldHVybiB4LmRvdCh5KS5kaXYoeC5ub3JtKCkubXVsKHkubm9ybSgpKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yTWV0cmljTWl4aW5zO1xuIiwiLyoqXG4gKiBUaGlzIFdvcmRFbWJlZGRpbmdNaXhpbnMgY2xhc3MgaXMgcHJvdmlkZSBtZXRob2RzIGZvciB0cmFuc2Zvcm4gc2VudGVuY2VzLCB0b2tlbnMgdG8gdmVjdG9yc1xuICogQGNsYXNzIENhdXNhbE5ldEVtYmVkZGluZ1xuICogQGV4dGVuZHMgIEJhc2VFbWJlZGRpbmdDbGFzc1xuICovXG5jb25zdCBXb3JkRW1iZWRkaW5nTWl4aW5zID0gKEJhc2VFbWJlZGRpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VFbWJlZGRpbmdDbGFzc3sgXG4gICAgLyoqXG4gICAgICogcmV0dXJuIGRlZmF1bHQgcmVwbGFjZW1lbnQgZm9yIHVua25vd24gdmVjLiBDdXJyZW50bHkgaXQgaXMgc2V0IHRvIHplcm9zXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHZlY1xuICAgICAqL1xuICAgIHVua25vd1ZlYygpe1xuICAgICAgICByZXR1cm4gdGhpcy5mLnplcm9WZWModGhpcy5WZWNTaXplKTtcbiAgICB9XG4gICAgICAgIFxuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgdmVjdG9ycyBvZiB0b2tlbml6ZWQgc2VudGVuY2VzXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXF1aXJlIHNlbnRlbmNlIHRvIGJlIHRva2VuaXplZCB2aWEgcHJlcHJvY2Vzc2luZ1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2VucyBvZiBzZW50ZW5jZVxuICAgICAqIEByZXR1cm5zIHsgVGVuc29yIH0gZW5jb2RlZCBzZW50ZW5jZXNcbiAgICAgKi9cbiAgICBhc3luYyBzZW50ZW5jZUVuY29kZShzZW50ZW5jZXMpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICBsZXQgZW5jb2RlZFNlbnRlbmNlcyA9IFtdO1xuICAgICAgICBmb3IobGV0IHRva2VucyBvZiBzZW50ZW5jZXMpe1xuICAgICAgICAgICAgbGV0IHZlY3MgPSBhd2FpdCB0aGlzLnRyYW5zZm9ybSh0b2tlbnMpO1xuICAgICAgICAgICAgbGV0IGVuY29kZSA9IGF3YWl0IFQudGVuc29yKHZlY3MpLm1lYW4oMCk7XG4gICAgICAgICAgICBlbmNvZGVkU2VudGVuY2VzLnB1c2goZW5jb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVC5zdGFjayhlbmNvZGVkU2VudGVuY2VzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIHRva2VuaXplZCBzZW50ZW5jZXMgaW50byB0ZW5zb3IgdmVjdG9yc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gMmQgYXJyYXkgZm9yIHRva2VuIG9mIHNlbnRlbmNlc1xuICAgICAqIEByZXR1cm5zIHsgVGVuc29yIH0gMmQgdGVuc29yIHJlcHJlc2VudCB2ZWN0b3JzIG9mIGVhY2ggaW5wdXQgc2VudGVuY2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBsZXQgc2VudFZlYyA9IGF3YWl0IGNhdXNhbE5ldEVtYmVkZGluZy5zZW50ZW5jZUVuY29kZShbIFsndGhpcycsICdpcycsICd0ZXN0J10gXSk7XG4gICAgICovXG4gICAgYXN5bmMgdHJhbnNmb3JtKHRva2Vucyl7XG4gICAgICAgIGNvbnN0IFRva2VuTG9va1VwID0gdGhpcy5Ub2tlbkxvb2tVcCwgQ2h1bmtMb29rVXAgPSB0aGlzLkNodW5rTG9va1VwO1xuICAgICAgICBcbiAgICAgICAgbGV0IHZlY3MgPSBbXSwgbWlzc0NhY2hlVG9rZW5zPVtdO1xuICAgICAgICBmb3IobGV0IHRva2VuIG9mIHRva2Vucyl7XG4gICAgICAgICAgICBsZXQgdmVjID0gYXdhaXQgVG9rZW5Mb29rVXAodG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe1t0b2tlbl06IHZlY30pO1xuICAgICAgICAgICAgaWYodmVjID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICBtaXNzQ2FjaGVUb2tlbnMgPSBbLi4ubWlzc0NhY2hlVG9rZW5zLCB0b2tlbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2ZWNzID0gWy4uLnZlY3MsIHRva2VuXTtcbiAgICAgICAgfVxuICAgICAgICBpZihtaXNzQ2FjaGVUb2tlbnMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB2ZWNzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQge3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfSA9IFxuICAgICAgICAgICAgdGhpcy5GLm1hcFRva2VuVG9DaHVua0lkcyhtaXNzQ2FjaGVUb2tlbnMsIHRoaXMuVG9rZW5DaHVua0lkTWFwcGVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHt0b2tlbkNodW5rSWRzLCBjaHVua0lkc30pO1xuICAgICAgICBsZXQgbWFzdGVyY2h1bmsgPSB7fTtcbiAgICAgICAgZm9yKGxldCBjaHVua0lkIG9mIGNodW5rSWRzKXtcbiAgICAgICAgICAgIGlmKGNodW5rSWQgIT09IG51bGwpey8vbm90IGluIGNodW5rXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb2t1cCcpO1xuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGF3YWl0IENodW5rTG9va1VwKGNodW5rSWQpO1xuICAgICAgICAgICAgICAgIGlmKGNodW5rID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsgPSBhd2FpdCB0aGlzLnF1ZXJ5Q2h1bmsoY2h1bmtJZCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ2h1bmtMb29rVXAoY2h1bmtJZCwgY2h1bmspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXN0ZXJjaHVuayA9IHsuLi5tYXN0ZXJjaHVuaywgLi4uY2h1bmt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZmluYWxWZWNzID0gdmVjcy5yZWR1Y2UoKGZpbmFsVmVjcywgdmVjKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YodmVjKSA9PT0gXCJzdHJpbmdcIiApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3ZlYyA9IG1hc3RlcmNodW5rW3ZlY107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKF92ZWMgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdmVjID0gdGhpcy51bmtub3dWZWMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZlY3MucHVzaChfdmVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWZWNzLnB1c2godmVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsVmVjcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIGZpbmFsVmVjcztcbiAgICB9ICAgXG59O1xuZXhwb3J0IGRlZmF1bHQgV29yZEVtYmVkZGluZ01peGluczsiLCJjb25zdCBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyA9IChCYXNlRnVuY3Rpb25DbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRnVuY3Rpb25DbGFzc3tcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gbGlzdCBvZiB0b2tlbnMgdG8gZmluZCBjb3Jlc3BvbmRpbmcgaWRzXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBtYXBwZXIgLSBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBtYXBUb2tlblRvQ2h1bmtJZHModG9rZW5zLCBtYXBwZXIpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUb2tlbkNodW5rSWRNYXBwZXIgPSBtYXBwZXI7XG4gICAgICAgIGxldCB0b2tlbkNodW5rTWFwID0gdG9rZW5zLm1hcCggdCA9PiB7XG4gICAgICAgICAgICBsZXQgY2h1bmtJZCA9IFRva2VuQ2h1bmtJZE1hcHBlcih0KTtcbiAgICAgICAgICAgIHJldHVybiBbW3QsIGNodW5rSWRdLCBjaHVua0lkXTsgXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgW3Rva2VuQ2h1bmtJZHMsIF9jaHVua0lkc10gPSB0aGlzLnVuemlwKHRva2VuQ2h1bmtNYXApO1xuICAgICAgICBsZXQgY2h1bmtJZHMgPSBSLnVuaXEoX2NodW5rSWRzKTtcbiAgICAgICAgY29uc29sZS5sb2coe2NodW5rSWRzLCB0b2tlbkNodW5rSWRzfSk7XG4gICAgICAgIHJldHVybiB7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiByZXR1cm4gemVybyB2ZWN0b3IgZ2l2ZW4gdGhlIHZlYyBzaXplXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gdmVjU2l6ZSAtIHBvc2l0aXZlIGludGVnZXIgaW5kaWNhdGVzIHZlY3RvciBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gemVybyB2ZWN0b3JcbiAgICAgKi9cbiAgICB6ZXJvVmVjKHZlY1NpemUpe1xuICAgICAgICByZXR1cm4gdGhpcy5SLm1hcCgoKT0+MCx0aGlzLlIucmFuZ2UoMCwgdmVjU2l6ZSkpO1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X21vZGVsc191bml2ZXJzYWxfc2VudGVuY2VfZW5jb2Rlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=