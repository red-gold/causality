(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.memcache"), require("causal-net.storage"), require("causal-net.utils"), require("tfjs-models.use-embedding"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.memcache", "causal-net.storage", "causal-net.utils", "tfjs-models.use-embedding"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/representation"] = factory(require("causal-net.core"), require("causal-net.memcache"), require("causal-net.storage"), require("causal-net.utils"), require("tfjs-models.use-embedding"));
	else
		root["@causalNet/representation"] = factory(root["causal-net.core"], root["causal-net.memcache"], root["causal-net.storage"], root["causal-net.utils"], root["tfjs-models.use-embedding"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__, __WEBPACK_EXTERNAL_MODULE_tfjs_models_use_embedding__) {
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

    this.use = __webpack_require__(/*! tfjs-models.use-embedding */ "tfjs-models.use-embedding");
    this.model = null;
  }

  async connect(link) {
    if (global) {
      //TODO: make better with platform
      global.fetch = causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["fetch"].fetch;
    }

    this.model = await this.use.load(link);
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

/***/ }),

/***/ "tfjs-models.use-embedding":
/*!********************************************!*\
  !*** external "tfjs-models.use-embedding" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_tfjs_models_use_embedding__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL2NodW5rTG9va3VwLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9jYXVzYWxOZXRFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9yZXByZXNlbnRhdGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy91bml2ZXJzYWxFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy92ZWN0b3JNZXRyaWNzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3dvcmRFbWJlZGRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJ0ZmpzLW1vZGVscy51c2UtZW1iZWRkaW5nXCIiXSwibmFtZXMiOlsiQ2h1bmtMb29rdXBNaXhpbnMiLCJCYXNlV29yZEVtYmVkZGluZ0NsYXNzIiwiQ2h1bmtMb29rVXAiLCJTdG9yYWdlIiwiY2h1bmtJZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiQ2h1bmtQYXRoIiwiZW1iZWRkaW5nU2F2ZVBhdGgiLCJjaHVua0l0ZW0iLCJnZXRJdGVtIiwiY2h1bmsiLCJKU09OIiwicGFyc2UiLCJlcnIiLCJ1cGRhdGVDaHVua0xvb2tVcCIsIlVwZGF0ZUNodW5rUGF0aCIsInNldEl0ZW0iLCJxdWVyeUNodW5rIiwiQ2h1bmtVcmwiLCJiYXNlTGluayIsInF1ZXJ5IiwiVG9rZW5Mb29rVXBNaXhpbnMiLCJUb2tlbkxvb2tVcCIsIk1lbUNhY2hlIiwidG9rZW4iLCJ2ZWMiLCJ1cGRhdGVUb2tlbkxvb2tVcCIsImNvbnNvbGUiLCJlcnJvciIsIkNhdXNhbE5ldEVtYmVkZGluZyIsInBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VUZW5zb3IiLCJTdG9yYWdlTWl4aW5zIiwiTWVtQ2FjaGVNaXhpbnMiLCJDaHVua0xvb2tVcE1peGlucyIsIlZlY3Rvck1ldHJpY01peGlucyIsIldvcmRFbWJlZGRpbmdNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImZldGNoIiwic3RvcmFnZSIsImNhY2hlIiwiZnVuY3RvciIsIkYiLCJlbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgiLCJWZWNTaXplIiwidmVjc2l6ZSIsIkVycm9yIiwiY29ubmVjdCIsImxpbmsiLCJyZWZyZXNoIiwiZ2V0RGVzY3JpcHRpb24iLCJmb3JjZUZlY3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkl0ZW0iLCJsb2dnZXIiLCJkZWJ1ZyIsInF1ZXJ5RGVzY3JpcHRpb24iLCJUb2tlbkNodW5rSWRNYXBwZXIiLCJnZXRJbiIsImNodW5rTG9va1VwIiwic3RhcnRzV2l0aCIsImpzb25VdGlscyIsImZldGNoSnNvbiIsInJlYWRKU09OIiwiRGVzY3JpcHRpb25MaW5rIiwic3RyaW5naWZ5IiwiaW5kZXhEQlN0b3JhZ2UiLCJtZW1Eb3duQ2FjaGUiLCJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyIsIlJlcHJlc2VudGF0aW9uTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJSZXByZXNlbnRhdGlvbiIsInJlcHJlc2VudGF0aW9uIiwiYXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiVGVuc29yIiwiY29uZmlndXJlTGluayIsImVtYmVkZGluZ0NvbmZpZyIsImxvZyIsInNldFJlcHJlc2VudGF0aW9uQnlDb25maWciLCJuZXRDb25maWciLCJFbWJlZGRpbmdDb25maWciLCJFbWJlZGRpbmciLCJTdHJpbmciLCJVbml2ZXJzYWxFbWJlZGRpbmciLCJ1c2UiLCJyZXF1aXJlIiwibW9kZWwiLCJnbG9iYWwiLCJsb2FkIiwic2VudGVuY2VFbmNvZGUiLCJzZW50ZW5jZXMiLCJlbWJlZGRpbmdzIiwiZW1iZWQiLCJCYXNlRW1iZWRkaW5nQ2xhc3MiLCJlbmNvZGVNYXRjaGluZyIsInNlbnRlbmNlMSIsInNlbnRlbmNlMiIsIngiLCJyZXNoYXBlIiwieSIsImRvdCIsImRpdiIsIm5vcm0iLCJtdWwiLCJ1bmtub3dWZWMiLCJmIiwiemVyb1ZlYyIsIlQiLCJlbmNvZGVkU2VudGVuY2VzIiwidG9rZW5zIiwidmVjcyIsInRyYW5zZm9ybSIsImVuY29kZSIsInRlbnNvciIsIm1lYW4iLCJwdXNoIiwic3RhY2siLCJtaXNzQ2FjaGVUb2tlbnMiLCJsZW5ndGgiLCJ0b2tlbkNodW5rSWRzIiwiY2h1bmtJZHMiLCJtYXBUb2tlblRvQ2h1bmtJZHMiLCJtYXN0ZXJjaHVuayIsImZpbmFsVmVjcyIsInJlZHVjZSIsIl92ZWMiLCJ1bmRlZmluZWQiLCJCYXNlRnVuY3Rpb25DbGFzcyIsIm1hcHBlciIsIlIiLCJ0b2tlbkNodW5rTWFwIiwibWFwIiwidCIsIl9jaHVua0lkcyIsInVuemlwIiwidW5pcSIsInZlY1NpemUiLCJyYW5nZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxn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RTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx1RSIsImZpbGUiOiJAY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcInRmanMtbW9kZWxzLnVzZS1lbWJlZGRpbmdcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIiwgXCJ0ZmpzLW1vZGVscy51c2UtZW1iZWRkaW5nXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcInRmanMtbW9kZWxzLnVzZS1lbWJlZGRpbmdcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb25cIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgcm9vdFtcInRmanMtbW9kZWxzLnVzZS1lbWJlZGRpbmdcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3RmanNfbW9kZWxzX3VzZV9lbWJlZGRpbmdfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKipcbiAqIFRoaXMgQ2h1bmtMb29rdXBNaXhpbnMgY2xhc3MgcHJvdmlkZSBtaXhpbnMgZm9yIGNodW5rIGxvb2t1cCB0aGF0IGZpcnN0IGxvb2sgZnJvbSB0aGUgY2FjaGVkIGNodW5rIHRoZW5cbiAqIGZldGNoIGFuZCBjYWNoZSBuZXcgY2h1bmtcbiAqIEBjbGFzcyBDaHVua0xvb2t1cE1peGluc1xuICogQGV4dGVuZHMgeyAgQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyB9IFxuICovXG5jb25zdCBDaHVua0xvb2t1cE1peGlucyA9ICggQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyApPT4gY2xhc3MgZXh0ZW5kcyBCYXNlV29yZEVtYmVkZGluZ0NsYXNzeyBcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHN0b3JhZ2UgbG9va3VwIGZ1bmN0aW9uXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgZ2V0IENodW5rTG9va1VwKCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIHJldHVybiAoY2h1bmtJZCk9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgQ2h1bmtQYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIGNodW5rSWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0l0ZW0gPSBhd2FpdCBTdG9yYWdlLmdldEl0ZW0oQ2h1bmtQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rID0gY2h1bmtJdGVtW0NodW5rUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShjaHVuaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgIC8qKlxuICAgICogVXBkYXRlIHRoZSBzdG9yYWdlIGxvb2t1cFxuICAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IGNodW5rSWQgLSBpZCBpbiBwb3NpdGl2ZSBpbnRlZ2VyIHJhbmdlXG4gICAgKiBAcGFyYW0geyBPYmplY3QgfSBjaHVuayAtIGNodW5rIG9iamVjdCBjb250YWluaW5nIHRva2VuIGtleXMgYW5kIGNvcnJlcG9uZGluZyB2ZWMgdmFsdWVcbiAgICAqIEByZXR1cm5zIHsgU3RyaW5nIH0gLSB1cGRhdGVkIGNodW5rIHBhdGggaW4gc3RvcmFnZVxuICAgICovXG4gICBhc3luYyB1cGRhdGVDaHVua0xvb2tVcChjaHVua0lkLCBjaHVuayl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIGNvbnN0IFVwZGF0ZUNodW5rUGF0aCA9IHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyBjaHVua0lkO1xuICAgICAgICByZXR1cm4gYXdhaXQgU3RvcmFnZS5zZXRJdGVtKFVwZGF0ZUNodW5rUGF0aCwgY2h1bmspO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBRdWVyeSBjaHVuayBlaXRoZXIgcmVhZCBmcm9tIGZpbGUgb3IgZmV0Y2ggZnJvbSByZW1vdGUgc2VydmVyXG4gICAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IGNodW5rSWQgLSBpZCBpbiBwb3NpdGl2ZSBpbnRlcmdlciByYW5nZVxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gIGNodW5rIG9iamVjdCBjb250YWluaW5nIHRva2VuIGtleXMgYW5kIGNvcnJlcG9uZGluZyB2ZWMgdmFsdWVcbiAgICAgKi9cbiAgICBhc3luYyBxdWVyeUNodW5rKGNodW5rSWQpe1xuICAgICAgICBjb25zdCBDaHVua1VybCA9IGAke3RoaXMuYmFzZUxpbmt9d29yZHZlY19jaHVua18ke2NodW5rSWR9Lmpzb25gO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5xdWVyeShDaHVua1VybCk7XG4gICAgfVxuICAgXG59O1xuZXhwb3J0IGRlZmF1bHQgQ2h1bmtMb29rdXBNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDaHVua0xvb2t1cE1peGlucyB9IGZyb20gJy4vY2h1bmtMb29rdXAubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9rZW5Mb29rVXBNaXhpbnMgfSBmcm9tICcuL3Rva2VuTG9va3VwLm1peGlucyc7IiwiY29uc3QgVG9rZW5Mb29rVXBNaXhpbnMgPSAoQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3N7IFxuICAgIGdldCBUb2tlbkxvb2tVcCgpe1xuICAgICAgICBjb25zdCBNZW1DYWNoZSA9IHRoaXMuTWVtQ2FjaGU7XG4gICAgICAgIHJldHVybiAodG9rZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2ZWMgPSBhd2FpdCBNZW1DYWNoZS5nZXRJdGVtKHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmVjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRva2VuIGxvb2sgdXBcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSB0b2tlbiAtIHRva2VuIFxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdmVjIC0gdmVjdG9yIHJlcHJlc2VudGF0aW9uIG9mIHRva2VuXG4gICAgICovXG4gICAgYXN5bmMgdXBkYXRlVG9rZW5Mb29rVXAodG9rZW4sIHZlYyl7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RoaXMgaXMgdXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IE1lbUNhY2hlID0gdGhpcy5NZW1DYWNoZTtcbiAgICAgICAgYXdhaXQgTWVtQ2FjaGUuc2V0SXRlbSh0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgdG9rZW4sIHZlYyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuTG9va1VwTWl4aW5zO1xuIiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0sIGZldGNoLCBqc29uVXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFN0b3JhZ2VNaXhpbnMsIGluZGV4REJTdG9yYWdlIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IE1lbUNhY2hlTWl4aW5zLCBtZW1Eb3duQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ01peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBDaHVua0xvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwL2NodW5rTG9va3VwLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRva2VuTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAvdG9rZW5Mb29rdXAubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yTWV0cmljTWl4aW5zIH0gZnJvbSAnLi92ZWN0b3JNZXRyaWNzLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldEVtYmVkZGluZyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybSByYXcgdG9rZW5pemVkIHNlbnRlbmNlIGludG8gXG4gKiBpdHMgc2luZ2xlIHZlY3RvciByZXByZXNlbnRhdGlvblxuICogbWl4V2l0aDpcbiAqICAgICAgICAgWyAgIFN0b3JhZ2VNaXhpbnMsIFxuICogICAgICAgICAgICAgTWVtQ2FjaGVNaXhpbnMsXG4gKiAgICAgICAgICAgICBUb2tlbkxvb2tVcE1peGlucyxcbiAqICAgICAgICAgICAgIENodW5rTG9va1VwTWl4aW5zLFxuICogICAgICAgICAgICAgV29yZEVtYmVkZGluZ01peGlucyBdKX1cbiAqIEBjbGFzcyBDYXVzYWxOZXRFbWJlZGRpbmdcbiAqIEBleHRlbmRzICBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0RW1iZWRkaW5nLmJhYmVsLm5vZGUuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldEVtYmVkZGluZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgICAgIFsgICBTdG9yYWdlTWl4aW5zLCBcbiAgICAgICAgICAgIE1lbUNhY2hlTWl4aW5zLFxuICAgICAgICAgICAgVG9rZW5Mb29rVXBNaXhpbnMsXG4gICAgICAgICAgICBDaHVua0xvb2tVcE1peGlucyxcbiAgICAgICAgICAgIFZlY3Rvck1ldHJpY01peGlucyxcbiAgICAgICAgICAgIFdvcmRFbWJlZGRpbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoZmV0Y2gsIHN0b3JhZ2UsIGNhY2hlLCBmdW5jdG9yKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5mZXRjaCA9IGZldGNoO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBzdG9yYWdlOyAgIC8vc3RvcmUgY29uZmlndXJlXG4gICAgICAgIHRoaXMuTWVtQ2FjaGUgPSBjYWNoZTsgICAgLy9zdG9yZSBjaHVua3NcbiAgICAgICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCA9ICcvZW1iZWRkaW5nLyc7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArICdkZXNjcmlwdGlvbi5qc29uJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHZlY3ppZSBpbiBwb3NpdGl2ZSBudW1iZXJcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBnZXQgVmVjU2l6ZSgpe1xuICAgICAgICBpZighdGhpcy52ZWNzaXplKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd2ZWNzaXplIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52ZWNzaXplO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkIGNvbmZpZ3VyZSBvZiBwcmV0cmFpbmVkIHZlY3RvciBmcm9tIGVpdGhlciBsb2NhbCBmb2xkZXIgb3IgcmVtb3RlIHNlcnZlci4gXG4gICAgICogQWZ0ZXIgY29ubmVjdCwgdGhlIHJlc3VsdCBpcyBjYWNoZWQgZm9yIG5leHQgdGltZSBpbml0LlxuICAgICAqIEBwYXJhbSB7IFVSTHxGaWxlUGF0aCB9IGxpbmsgLSBsaW5rIHRvIGxvYWRcbiAgICAgKiBAcGFyYW0geyBib29sZWFuIH0gW3JlZnJlc2g9ZmFsc2VdIC0gZm9yY2UgdG8gZGlzY2FyZCBsb2NhbCBjYWNoZVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIGNvbm5lY3QobGluaywgcmVmcmVzaD1mYWxzZSl7XG4gICAgICAgIHRoaXMuYmFzZUxpbmsgPSBsaW5rO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXREZXNjcmlwdGlvbihyZWZyZXNoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IGNvbm5lY3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlRmVjdGg9ZmFsc2VdXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgZ2V0RGVzY3JpcHRpb24oZm9yY2VGZWN0aD1mYWxzZSl7XG4gICAgICAgIGlmKCF0aGlzLmRlc2NyaXB0aW9uKXtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25JdGVtID0gYXdhaXQgdGhpcy5TdG9yYWdlLmdldEl0ZW0odGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBKU09OLnBhcnNlKGRlc2NyaXB0aW9uSXRlbVt0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7J2xvYWQgZGVzY3JpcHRpb24gZnJvbSBzdG9yYWdlJzogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gYXdhaXQgdGhpcy5xdWVyeURlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoZm9yY2VGZWN0aCl7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gYXdhaXQgdGhpcy5xdWVyeURlc2NyaXB0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Ub2tlbkNodW5rSWRNYXBwZXIgPSAodG9rZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5GLmdldEluKFt0b2tlbl0sIHRoaXMuZGVzY3JpcHRpb24uY2h1bmtMb29rVXAsIG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnZlY3NpemUgPSB0aGlzLmRlc2NyaXB0aW9uLnZlY3NpemU7Ly9vbmx5IHNldCBmcm9tIGhlcmVcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGZldGNoIG9yIHJlYWQgY29uZmlndXJlIGRlcGVuZHMgb24gcHJvdmllZCBsaW5rIGZvcm1hdFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHsqfSBsaW5rXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgcXVlcnkobGluayl7XG4gICAgICAgIGlmKGxpbmsuc3RhcnRzV2l0aCgnaHR0cCcpKXtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBqc29uVXRpbHMuZmV0Y2hKc29uKGxpbmspO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQganNvblV0aWxzLnJlYWRKU09OKGxpbmspO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHF1ZXJ5IHRoZSBkZXNjcmlwdGlvbiBqc29uIFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSBkZXNjcmlwdGlvbiBqc29uIG9iamVjdFxuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBxdWVyeURlc2NyaXB0aW9uKCl7XG4gICAgICAgIGNvbnN0IERlc2NyaXB0aW9uTGluayA9IHRoaXMuYmFzZUxpbmsgKyAnd29yZHZlYy5kZXNjcmlwdGlvbi5qc29uJztcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoeyBEZXNjcmlwdGlvbkxpbmsgfSk7XG4gICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucXVlcnkoRGVzY3JpcHRpb25MaW5rKTtcbiAgICAgICAgYXdhaXQgdGhpcy5TdG9yYWdlLnNldEl0ZW0odGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgsIEpTT04uc3RyaW5naWZ5KGRlc2NyaXB0aW9uKSk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0RW1iZWRkaW5nKGZldGNoLCBpbmRleERCU3RvcmFnZSwgbWVtRG93bkNhY2hlLCBmdW5jdG9yKTsiLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFdvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zIH0gZnJvbSAnLi93b3JkRW1iZWRkaW5nRnVuY3Rvci5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIEZ1bmN0aW9uIGNsYXNzIHByb3ZpZGVzIG1ldGhvZHMgZm9yIGNvbW1vbiB1c2VkIHVsdGlsaXRpZXMgZnVuY3Rpb25cbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBGdW5jdGlvblxuICogQGV4dGVuZHMgQmFzZUZ1bmN0b3JcbiAqL1xuXG5jbGFzcyBGdW5jdG9yIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlRnVuY3RvciwgXG4gICAgICAgIFtXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGluc10pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgRnVuY3RvcigpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUmVwcmVzZW50YXRpb25NaXhpbnMgfSBmcm9tICcuL3JlcHJlc2VudGF0aW9uLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldEVtYmVkZGluZyB9IGZyb20gJy4vY2F1c2FsTmV0RW1iZWRkaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5pdmVyc2FsRW1iZWRkaW5nIH0gZnJvbSAnLi91bml2ZXJzYWxFbWJlZGRpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nTWl4aW5zIH0gZnJvbSAnLi93b3JkRW1iZWRkaW5nLm1peGlucyc7XG5leHBvcnQgeyBDaHVua0xvb2t1cE1peGlucywgVG9rZW5Mb29rVXBNaXhpbnMgfSBmcm9tICcuL0xvb2t1cCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zIH0gZnJvbSAnLi93b3JkRW1iZWRkaW5nRnVuY3Rvci5taXhpbnMnOyIsImltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7IFxuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG4vKipcbiAqIFRoaXMgbWl4aW4gY2xhc3MgcHJvdmlkZXMgYXR0cmlidXRlczogKipSZXByZXNlbnRhdGlvbioqLlxuICogQGNsYXNzIFJlcHJlc2VudGF0aW9uTWl4aW5zXG4gKiBAZXh0ZW5kcyAgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9lbWJlZGRpbmdNaXhpbnMuYmFiZWwubm9kZS5qc11cbiAqL1xuY29uc3QgUmVwcmVzZW50YXRpb25NaXhpbnMgPSAoQmFzZVBpcGVsaW5lQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlUGlwZWxpbmVDbGFzc3sgXG4gICAgLyoqXG4gICAgICogUmV0dXJuIEVtYmVkZGluZyBpbnN0YW5jZVxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIFJlcHJlc2VudGF0aW9uTWl4aW5zXG4gICAgICovXG4gICAgZ2V0IFJlcHJlc2VudGF0aW9uKCl7XG4gICAgICAgIGlmKCF0aGlzLnJlcHJlc2VudGF0aW9uKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdyZXByZXNlbnRhdGlvbiBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVwcmVzZW50YXRpb247XG4gICAgfVxuICAgIFxuICAgIHNldCBSZXByZXNlbnRhdGlvbihyZXByZXNlbnRhdGlvbil7XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YocmVwcmVzZW50YXRpb24sIFRlbnNvcik7XG4gICAgICAgIHRoaXMucmVwcmVzZW50YXRpb24gPSByZXByZXNlbnRhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9hZCBjb25maWd1cmUgb2YgcHJldHJhaW5lZCB2ZWN0b3IgZnJvbSBlaXRoZXIgbG9jYWwgZm9sZGVyIG9yIHJlbW90ZSBzZXJ2ZXIuIFxuICAgICAqIEFmdGVyIGNvbm5lY3QsIHRoZSByZXN1bHQgaXMgY2FjaGVkIGZvciBuZXh0IHRpbWUgaW5pdC5cbiAgICAgKiBAcGFyYW0geyBVUkx8RmlsZVBhdGggfSBsaW5rIC0gbGluayB0byBsb2FkXG4gICAgICogQHBhcmFtIHsgYm9vbGVhbiB9IFtyZWZyZXNoPWZhbHNlXSAtIGZvcmNlIHRvIGRpc2NhcmQgbG9jYWwgY2FjaGVcbiAgICAgKiBAcmV0dXJucyB7IFByb21pc2UgfVxuICAgICAqIEBtZW1iZXJvZiBSZXByZXNlbnRhdGlvbk1peGluc1xuICAgICAqL1xuICAgIGFzeW5jIGNvbm5lY3QoKXtcbiAgICAgICAgaWYoc3VwZXIuY29ubmVjdCl7XG4gICAgICAgICAgICBzdXBlci5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbmZpZ3VyZUxpbmsgPSB0aGlzLmVtYmVkZGluZ0NvbmZpZztcbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKGByZXByZXNlbnRhdGlvbiBjb25uZWN0IHRvICR7Y29uZmlndXJlTGlua31gKTtcbiAgICAgICAgYXdhaXQgdGhpcy5SZXByZXNlbnRhdGlvbi5jb25uZWN0KGNvbmZpZ3VyZUxpbmspO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBzZXQgZW1iZWRkaW5nIGZvciBwaXBlbGluZVxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IG5ldENvbmZpZyAtIGNvbnRhaW4gRW1iZWRkaW5nIGluc3RhbmNlIGFuZCBFbWJlZGRpbmcgY29uZmlndXJlXG4gICAgICogQG1lbWJlcm9mIFJlcHJlc2VudGF0aW9uTWl4aW5zXG4gICAgICovXG4gICAgc2V0UmVwcmVzZW50YXRpb25CeUNvbmZpZyhuZXRDb25maWcpe1xuICAgICAgICBsZXQgeyBFbWJlZGRpbmdDb25maWcsIEVtYmVkZGluZyB9ID0gbmV0Q29uZmlnLlJlcHJlc2VudGF0aW9uO1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKEVtYmVkZGluZ0NvbmZpZywgU3RyaW5nKTtcbiAgICAgICAgdGhpcy5SZXByZXNlbnRhdGlvbiA9IEVtYmVkZGluZztcbiAgICAgICAgdGhpcy5lbWJlZGRpbmdDb25maWcgPSBFbWJlZGRpbmdDb25maWc7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFJlcHJlc2VudGF0aW9uTWl4aW5zOyAgICAiLCJpbXBvcnQgeyBwbGF0Zm9ybSwgZmV0Y2ggfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFZlY3Rvck1ldHJpY01peGlucyB9IGZyb20gJy4vdmVjdG9yTWV0cmljcy5taXhpbnMnO1xuXG4vKipcbiAqIFRoaXMgVW5pdmVyc2FsRW1iZWRkaW5nIHByb3ZpZGUgbWV0aG9kcyBmb3IgdHJhbnNmb3JtIHNlbnRlbmNlcyBpbnRvIFxuICogaXRzIHNpbmdsZSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gXG4gKiBiYXNlZCBvbiBbdXNlXShodHRwczovL2dpdGh1Yi5jb20vdGVuc29yZmxvdy90ZmpzLW1vZGVscy90cmVlL21hc3Rlci91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlcilcbiAqIFxuICogQGNsYXNzIFVuaXZlcnNhbEVtYmVkZGluZ1xuICogQGV4dGVuZHMge1RlbnNvcn1cbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy91bml2ZXJzYWxFbWJlZGRpbmcuYmFiZWwuanNdXG4gKi9cbmNsYXNzIFVuaXZlcnNhbEVtYmVkZGluZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoVGVuc29yLCBcbiAgICBbIFZlY3Rvck1ldHJpY01peGlucyBdKXtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGUgeyBUZW5zb3JNb2RlbCB9IFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51c2UgPSByZXF1aXJlKCd0ZmpzLW1vZGVscy51c2UtZW1iZWRkaW5nJyk7XG4gICAgICAgIHRoaXMubW9kZWwgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBjb25uZWN0KGxpbmspe1xuICAgICAgICBpZihnbG9iYWwpe1xuICAgICAgICAgICAgLy9UT0RPOiBtYWtlIGJldHRlciB3aXRoIHBsYXRmb3JtXG4gICAgICAgICAgICBnbG9iYWwuZmV0Y2ggPSBmZXRjaC5mZXRjaDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsID0gYXdhaXQgdGhpcy51c2UubG9hZChsaW5rKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VudGVuY2VFbmNvZGUoc2VudGVuY2VzKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYG1vZGVsIGlzIG5vdCBjb25uZWN0YCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVtYmVkZGluZ3MgPSBhd2FpdCB0aGlzLm1vZGVsLmVtYmVkKHNlbnRlbmNlcyk7XG4gICAgICAgIHJldHVybiBlbWJlZGRpbmdzO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBVbml2ZXJzYWxFbWJlZGRpbmcoKTsiLCIvKipcbiAqIFRoaXMgVmVjdG9yTWV0cmljTWl4aW5zIGNsYXNzIGlzIHByb3ZpZGUgbWV0aG9kcyBmb3IgY29tcGFyaW5nIHZlY3RvciByZXByZXNlbnRhdGlvbiBvZiBkaWZmZXJlbnQgc2VudGVuY2VzXG4gKiBAY2xhc3MgVmVjdG9yTWV0cmljTWl4aW5zXG4gKiBAZXh0ZW5kcyAgQmFzZUVtYmVkZGluZ0NsYXNzXG4gKi9cbmNvbnN0IFZlY3Rvck1ldHJpY01peGlucyA9IChCYXNlRW1iZWRkaW5nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRW1iZWRkaW5nQ2xhc3N7IFxuICAgIFxuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgZXVjbGV1ZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byByZXByZXNlbnRhdGlvbiB2ZWN0b3JzXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHZlY1xuICAgICAqL1xuICAgIGFzeW5jIGVuY29kZU1hdGNoaW5nKHNlbnRlbmNlMSwgc2VudGVuY2UyKXtcbiAgICAgICAgbGV0IHggPSBhd2FpdCB0aGlzLnNlbnRlbmNlRW5jb2RlKFtzZW50ZW5jZTFdKTtcbiAgICAgICAgeCA9IHgucmVzaGFwZShbLTFdKTtcbiAgICAgICAgbGV0IHkgPSBhd2FpdCB0aGlzLnNlbnRlbmNlRW5jb2RlKFtzZW50ZW5jZTJdKTtcbiAgICAgICAgeSA9IHkucmVzaGFwZShbLTFdKTtcbiAgICAgICAgcmV0dXJuIHguZG90KHkpLmRpdih4Lm5vcm0oKS5tdWwoeS5ub3JtKCkpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZWN0b3JNZXRyaWNNaXhpbnM7XG4iLCIvKipcbiAqIFRoaXMgV29yZEVtYmVkZGluZ01peGlucyBjbGFzcyBpcyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybiBzZW50ZW5jZXMsIHRva2VucyB0byB2ZWN0b3JzXG4gKiBAY2xhc3MgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gKiBAZXh0ZW5kcyAgQmFzZUVtYmVkZGluZ0NsYXNzXG4gKi9cbmNvbnN0IFdvcmRFbWJlZGRpbmdNaXhpbnMgPSAoQmFzZUVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUVtYmVkZGluZ0NsYXNzeyBcbiAgICAvKipcbiAgICAgKiByZXR1cm4gZGVmYXVsdCByZXBsYWNlbWVudCBmb3IgdW5rbm93biB2ZWMuIEN1cnJlbnRseSBpdCBpcyBzZXQgdG8gemVyb3NcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gdmVjXG4gICAgICovXG4gICAgdW5rbm93VmVjKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmYuemVyb1ZlYyh0aGlzLlZlY1NpemUpO1xuICAgIH1cbiAgICAgICAgXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRoZSB2ZWN0b3JzIG9mIHRva2VuaXplZCBzZW50ZW5jZXNcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlcXVpcmUgc2VudGVuY2UgdG8gYmUgdG9rZW5pemVkIHZpYSBwcmVwcm9jZXNzaW5nXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5zIG9mIHNlbnRlbmNlXG4gICAgICogQHJldHVybnMgeyBUZW5zb3IgfSBlbmNvZGVkIHNlbnRlbmNlc1xuICAgICAqL1xuICAgIGFzeW5jIHNlbnRlbmNlRW5jb2RlKHNlbnRlbmNlcyl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGxldCBlbmNvZGVkU2VudGVuY2VzID0gW107XG4gICAgICAgIGZvcihsZXQgdG9rZW5zIG9mIHNlbnRlbmNlcyl7XG4gICAgICAgICAgICBsZXQgdmVjcyA9IGF3YWl0IHRoaXMudHJhbnNmb3JtKHRva2Vucyk7XG4gICAgICAgICAgICBsZXQgZW5jb2RlID0gYXdhaXQgVC50ZW5zb3IodmVjcykubWVhbigwKTtcbiAgICAgICAgICAgIGVuY29kZWRTZW50ZW5jZXMucHVzaChlbmNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBULnN0YWNrKGVuY29kZWRTZW50ZW5jZXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gdG9rZW5pemVkIHNlbnRlbmNlcyBpbnRvIHRlbnNvciB2ZWN0b3JzXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSAyZCBhcnJheSBmb3IgdG9rZW4gb2Ygc2VudGVuY2VzXG4gICAgICogQHJldHVybnMgeyBUZW5zb3IgfSAyZCB0ZW5zb3IgcmVwcmVzZW50IHZlY3RvcnMgb2YgZWFjaCBpbnB1dCBzZW50ZW5jZXNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGxldCBzZW50VmVjID0gYXdhaXQgY2F1c2FsTmV0RW1iZWRkaW5nLnNlbnRlbmNlRW5jb2RlKFsgWyd0aGlzJywgJ2lzJywgJ3Rlc3QnXSBdKTtcbiAgICAgKi9cbiAgICBhc3luYyB0cmFuc2Zvcm0odG9rZW5zKXtcbiAgICAgICAgY29uc3QgVG9rZW5Mb29rVXAgPSB0aGlzLlRva2VuTG9va1VwLCBDaHVua0xvb2tVcCA9IHRoaXMuQ2h1bmtMb29rVXA7XG4gICAgICAgIFxuICAgICAgICBsZXQgdmVjcyA9IFtdLCBtaXNzQ2FjaGVUb2tlbnM9W107XG4gICAgICAgIGZvcihsZXQgdG9rZW4gb2YgdG9rZW5zKXtcbiAgICAgICAgICAgIGxldCB2ZWMgPSBhd2FpdCBUb2tlbkxvb2tVcCh0b2tlbik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7W3Rva2VuXTogdmVjfSk7XG4gICAgICAgICAgICBpZih2ZWMgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgIG1pc3NDYWNoZVRva2VucyA9IFsuLi5taXNzQ2FjaGVUb2tlbnMsIHRva2VuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZlY3MgPSBbLi4udmVjcywgdG9rZW5dO1xuICAgICAgICB9XG4gICAgICAgIGlmKG1pc3NDYWNoZVRva2Vucy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHZlY3M7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCB7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9ID0gXG4gICAgICAgICAgICB0aGlzLkYubWFwVG9rZW5Ub0NodW5rSWRzKG1pc3NDYWNoZVRva2VucywgdGhpcy5Ub2tlbkNodW5rSWRNYXBwZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfSk7XG4gICAgICAgIGxldCBtYXN0ZXJjaHVuayA9IHt9O1xuICAgICAgICBmb3IobGV0IGNodW5rSWQgb2YgY2h1bmtJZHMpe1xuICAgICAgICAgICAgaWYoY2h1bmtJZCAhPT0gbnVsbCl7Ly9ub3QgaW4gY2h1bmtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9va3VwJyk7XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rID0gYXdhaXQgQ2h1bmtMb29rVXAoY2h1bmtJZCk7XG4gICAgICAgICAgICAgICAgaWYoY2h1bmsgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBjaHVuayA9IGF3YWl0IHRoaXMucXVlcnlDaHVuayhjaHVua0lkKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDaHVua0xvb2tVcChjaHVua0lkLCBjaHVuayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hc3RlcmNodW5rID0gey4uLm1hc3RlcmNodW5rLCAuLi5jaHVua307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBmaW5hbFZlY3MgPSB2ZWNzLnJlZHVjZSgoZmluYWxWZWNzLCB2ZWMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZih2ZWMpID09PSBcInN0cmluZ1wiICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdmVjID0gbWFzdGVyY2h1bmtbdmVjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoX3ZlYyA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92ZWMgPSB0aGlzLnVua25vd1ZlYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmVjcy5wdXNoKF92ZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZlY3MucHVzaCh2ZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxWZWNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gZmluYWxWZWNzO1xuICAgIH0gICBcbn07XG5leHBvcnQgZGVmYXVsdCBXb3JkRW1iZWRkaW5nTWl4aW5zOyIsImNvbnN0IFdvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zID0gKEJhc2VGdW5jdGlvbkNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VGdW5jdGlvbkNsYXNze1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBsaXN0IG9mIHRva2VucyB0byBmaW5kIGNvcmVzcG9uZGluZyBpZHNcbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IG1hcHBlciAtIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIG1hcFRva2VuVG9DaHVua0lkcyh0b2tlbnMsIG1hcHBlcil7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFRva2VuQ2h1bmtJZE1hcHBlciA9IG1hcHBlcjtcbiAgICAgICAgbGV0IHRva2VuQ2h1bmtNYXAgPSB0b2tlbnMubWFwKCB0ID0+IHtcbiAgICAgICAgICAgIGxldCBjaHVua0lkID0gVG9rZW5DaHVua0lkTWFwcGVyKHQpO1xuICAgICAgICAgICAgcmV0dXJuIFtbdCwgY2h1bmtJZF0sIGNodW5rSWRdOyBcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBbdG9rZW5DaHVua0lkcywgX2NodW5rSWRzXSA9IHRoaXMudW56aXAodG9rZW5DaHVua01hcCk7XG4gICAgICAgIGxldCBjaHVua0lkcyA9IFIudW5pcShfY2h1bmtJZHMpO1xuICAgICAgICBjb25zb2xlLmxvZyh7Y2h1bmtJZHMsIHRva2VuQ2h1bmtJZHN9KTtcbiAgICAgICAgcmV0dXJuIHt0b2tlbkNodW5rSWRzLCBjaHVua0lkc307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHJldHVybiB6ZXJvIHZlY3RvciBnaXZlbiB0aGUgdmVjIHNpemVcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSB2ZWNTaXplIC0gcG9zaXRpdmUgaW50ZWdlciBpbmRpY2F0ZXMgdmVjdG9yIGxlbmd0aFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSB6ZXJvIHZlY3RvclxuICAgICAqL1xuICAgIHplcm9WZWModmVjU2l6ZSl7XG4gICAgICAgIHJldHVybiB0aGlzLlIubWFwKCgpPT4wLHRoaXMuUi5yYW5nZSgwLCB2ZWNTaXplKSk7XG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGZqc19tb2RlbHNfdXNlX2VtYmVkZGluZ19fOyJdLCJzb3VyY2VSb290IjoiIn0=