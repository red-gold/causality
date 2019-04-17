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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL2NodW5rTG9va3VwLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9jYXVzYWxOZXRFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9yZXByZXNlbnRhdGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy91bml2ZXJzYWxFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy92ZWN0b3JNZXRyaWNzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3dvcmRFbWJlZGRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJ0ZmpzLW1vZGVscy51c2UtZW1iZWRkaW5nXCIiXSwibmFtZXMiOlsiQ2h1bmtMb29rdXBNaXhpbnMiLCJCYXNlV29yZEVtYmVkZGluZ0NsYXNzIiwiQ2h1bmtMb29rVXAiLCJTdG9yYWdlIiwiY2h1bmtJZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiQ2h1bmtQYXRoIiwiZW1iZWRkaW5nU2F2ZVBhdGgiLCJjaHVua0l0ZW0iLCJnZXRJdGVtIiwiY2h1bmsiLCJKU09OIiwicGFyc2UiLCJlcnIiLCJ1cGRhdGVDaHVua0xvb2tVcCIsIlVwZGF0ZUNodW5rUGF0aCIsInNldEl0ZW0iLCJxdWVyeUNodW5rIiwiQ2h1bmtVcmwiLCJiYXNlTGluayIsInF1ZXJ5IiwiVG9rZW5Mb29rVXBNaXhpbnMiLCJUb2tlbkxvb2tVcCIsIk1lbUNhY2hlIiwidG9rZW4iLCJ2ZWMiLCJ1cGRhdGVUb2tlbkxvb2tVcCIsImNvbnNvbGUiLCJlcnJvciIsIkNhdXNhbE5ldEVtYmVkZGluZyIsInBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VUZW5zb3IiLCJTdG9yYWdlTWl4aW5zIiwiTWVtQ2FjaGVNaXhpbnMiLCJDaHVua0xvb2tVcE1peGlucyIsIlZlY3Rvck1ldHJpY01peGlucyIsIldvcmRFbWJlZGRpbmdNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImZldGNoIiwic3RvcmFnZSIsImNhY2hlIiwiZnVuY3RvciIsIkYiLCJlbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgiLCJWZWNTaXplIiwidmVjc2l6ZSIsIkVycm9yIiwiY29ubmVjdCIsImxpbmsiLCJyZWZyZXNoIiwiZ2V0RGVzY3JpcHRpb24iLCJmb3JjZUZlY3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkl0ZW0iLCJsb2dnZXIiLCJkZWJ1ZyIsInF1ZXJ5RGVzY3JpcHRpb24iLCJUb2tlbkNodW5rSWRNYXBwZXIiLCJnZXRJbiIsImNodW5rTG9va1VwIiwic3RhcnRzV2l0aCIsImpzb25VdGlscyIsImZldGNoSnNvbiIsInJlYWRKU09OIiwiRGVzY3JpcHRpb25MaW5rIiwic3RyaW5naWZ5IiwiaW5kZXhEQlN0b3JhZ2UiLCJtZW1Eb3duQ2FjaGUiLCJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyIsIlJlcHJlc2VudGF0aW9uTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJSZXByZXNlbnRhdGlvbiIsInJlcHJlc2VudGF0aW9uIiwiYXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiVGVuc29yIiwiY29uZmlndXJlTGluayIsImVtYmVkZGluZ0NvbmZpZyIsImxvZyIsInNldFJlcHJlc2VudGF0aW9uQnlDb25maWciLCJuZXRDb25maWciLCJFbWJlZGRpbmdDb25maWciLCJFbWJlZGRpbmciLCJTdHJpbmciLCJVbml2ZXJzYWxFbWJlZGRpbmciLCJ1c2UiLCJyZXF1aXJlIiwibW9kZWwiLCJnbG9iYWwiLCJsb2FkIiwic2VudGVuY2VFbmNvZGUiLCJzZW50ZW5jZXMiLCJlbWJlZGRpbmdzIiwiZW1iZWQiLCJCYXNlRW1iZWRkaW5nQ2xhc3MiLCJlbmNvZGVNYXRjaGluZyIsInNlbnRlbmNlMSIsInNlbnRlbmNlMiIsIngiLCJyZXNoYXBlIiwieSIsImRvdCIsImRpdiIsIm5vcm0iLCJtdWwiLCJ1bmtub3dWZWMiLCJmIiwiemVyb1ZlYyIsIlQiLCJlbmNvZGVkU2VudGVuY2VzIiwidG9rZW5zIiwidmVjcyIsInRyYW5zZm9ybSIsImVuY29kZSIsInRlbnNvciIsIm1lYW4iLCJwdXNoIiwic3RhY2siLCJtaXNzQ2FjaGVUb2tlbnMiLCJsZW5ndGgiLCJ0b2tlbkNodW5rSWRzIiwiY2h1bmtJZHMiLCJtYXBUb2tlblRvQ2h1bmtJZHMiLCJtYXN0ZXJjaHVuayIsImZpbmFsVmVjcyIsInJlZHVjZSIsIl92ZWMiLCJ1bmRlZmluZWQiLCJCYXNlRnVuY3Rpb25DbGFzcyIsIm1hcHBlciIsIlIiLCJ0b2tlbkNodW5rTWFwIiwibWFwIiwidCIsIl9jaHVua0lkcyIsInVuemlwIiwidW5pcSIsInZlY1NpemUiLCJyYW5nZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxn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RTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSx1RSIsImZpbGUiOiJAY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwidGZqcy1tb2RlbHMudXNlLWVtYmVkZGluZ1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiLCBcInRmanMtbW9kZWxzLnVzZS1lbWJlZGRpbmdcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvblwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwidGZqcy1tb2RlbHMudXNlLWVtYmVkZGluZ1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvblwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQubWVtY2FjaGVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCByb290W1widGZqcy1tb2RlbHMudXNlLWVtYmVkZGluZ1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfdGZqc19tb2RlbHNfdXNlX2VtYmVkZGluZ19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKlxuICogVGhpcyBDaHVua0xvb2t1cE1peGlucyBjbGFzcyBwcm92aWRlIG1peGlucyBmb3IgY2h1bmsgbG9va3VwIHRoYXQgZmlyc3QgbG9vayBmcm9tIHRoZSBjYWNoZWQgY2h1bmsgdGhlblxuICogZmV0Y2ggYW5kIGNhY2hlIG5ldyBjaHVua1xuICogQGNsYXNzIENodW5rTG9va3VwTWl4aW5zXG4gKiBAZXh0ZW5kcyB7ICBCYXNlV29yZEVtYmVkZGluZ0NsYXNzIH0gXG4gKi9cbmNvbnN0IENodW5rTG9va3VwTWl4aW5zID0gKCBCYXNlV29yZEVtYmVkZGluZ0NsYXNzICk9PiBjbGFzcyBleHRlbmRzIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3N7IFxuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc3RvcmFnZSBsb29rdXAgZnVuY3Rpb25cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICBnZXQgQ2h1bmtMb29rVXAoKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgcmV0dXJuIChjaHVua0lkKT0+e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBDaHVua1BhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgY2h1bmtJZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rSXRlbSA9IGF3YWl0IFN0b3JhZ2UuZ2V0SXRlbShDaHVua1BhdGgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBjaHVua0l0ZW1bQ2h1bmtQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGNodW5rKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgLyoqXG4gICAgKiBVcGRhdGUgdGhlIHN0b3JhZ2UgbG9va3VwXG4gICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gY2h1bmtJZCAtIGlkIGluIHBvc2l0aXZlIGludGVnZXIgcmFuZ2VcbiAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGNodW5rIC0gY2h1bmsgb2JqZWN0IGNvbnRhaW5pbmcgdG9rZW4ga2V5cyBhbmQgY29ycmVwb25kaW5nIHZlYyB2YWx1ZVxuICAgICogQHJldHVybnMgeyBTdHJpbmcgfSAtIHVwZGF0ZWQgY2h1bmsgcGF0aCBpbiBzdG9yYWdlXG4gICAgKi9cbiAgIGFzeW5jIHVwZGF0ZUNodW5rTG9va1VwKGNodW5rSWQsIGNodW5rKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgY29uc3QgVXBkYXRlQ2h1bmtQYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIGNodW5rSWQ7XG4gICAgICAgIHJldHVybiBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oVXBkYXRlQ2h1bmtQYXRoLCBjaHVuayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IGNodW5rIGVpdGhlciByZWFkIGZyb20gZmlsZSBvciBmZXRjaCBmcm9tIHJlbW90ZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gY2h1bmtJZCAtIGlkIGluIHBvc2l0aXZlIGludGVyZ2VyIHJhbmdlXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSAgY2h1bmsgb2JqZWN0IGNvbnRhaW5pbmcgdG9rZW4ga2V5cyBhbmQgY29ycmVwb25kaW5nIHZlYyB2YWx1ZVxuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5Q2h1bmsoY2h1bmtJZCl7XG4gICAgICAgIGNvbnN0IENodW5rVXJsID0gYCR7dGhpcy5iYXNlTGlua313b3JkdmVjX2NodW5rXyR7Y2h1bmtJZH0uanNvbmA7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnF1ZXJ5KENodW5rVXJsKTtcbiAgICB9XG4gICBcbn07XG5leHBvcnQgZGVmYXVsdCBDaHVua0xvb2t1cE1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIENodW5rTG9va3VwTWl4aW5zIH0gZnJvbSAnLi9jaHVua0xvb2t1cC5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vdG9rZW5Mb29rdXAubWl4aW5zJzsiLCJjb25zdCBUb2tlbkxvb2tVcE1peGlucyA9IChCYXNlV29yZEVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVdvcmRFbWJlZGRpbmdDbGFzc3sgXG4gICAgZ2V0IFRva2VuTG9va1VwKCl7XG4gICAgICAgIGNvbnN0IE1lbUNhY2hlID0gdGhpcy5NZW1DYWNoZTtcbiAgICAgICAgcmV0dXJuICh0b2tlbik9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZlYyA9IGF3YWl0IE1lbUNhY2hlLmdldEl0ZW0odGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2ZWMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdG9rZW4gbG9vayB1cFxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IHRva2VuIC0gdG9rZW4gXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB2ZWMgLSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gb2YgdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyB1cGRhdGVUb2tlbkxvb2tVcCh0b2tlbiwgdmVjKXtcbiAgICAgICAgY29uc29sZS5lcnJvcigndGhpcyBpcyB1cGRhdGUnKTtcbiAgICAgICAgY29uc3QgTWVtQ2FjaGUgPSB0aGlzLk1lbUNhY2hlO1xuICAgICAgICBhd2FpdCBNZW1DYWNoZS5zZXRJdGVtKHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyB0b2tlbiwgdmVjKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9rZW5Mb29rVXBNaXhpbnM7XG4iLCJpbXBvcnQgeyBUZW5zb3IgYXMgQmFzZVRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSwgZmV0Y2gsIGpzb25VdGlscyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgTWVtQ2FjaGVNaXhpbnMsIG1lbURvd25DYWNoZSB9IGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nTWl4aW5zIH0gZnJvbSAnLi93b3JkRW1iZWRkaW5nLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIENodW5rTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAvY2h1bmtMb29rdXAubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVG9rZW5Mb29rVXBNaXhpbnMgfSBmcm9tICcuL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBWZWN0b3JNZXRyaWNNaXhpbnMgfSBmcm9tICcuL3ZlY3Rvck1ldHJpY3MubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZnVuY3RvciB9IGZyb20gJy4vZnVuY3Rvcic7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0RW1iZWRkaW5nIHByb3ZpZGUgbWV0aG9kcyBmb3IgdHJhbnNmb3JtIHJhdyB0b2tlbml6ZWQgc2VudGVuY2UgaW50byBcbiAqIGl0cyBzaW5nbGUgdmVjdG9yIHJlcHJlc2VudGF0aW9uXG4gKiBtaXhXaXRoOlxuICogICAgICAgICBbICAgU3RvcmFnZU1peGlucywgXG4gKiAgICAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAqICAgICAgICAgICAgIFRva2VuTG9va1VwTWl4aW5zLFxuICogICAgICAgICAgICAgQ2h1bmtMb29rVXBNaXhpbnMsXG4gKiAgICAgICAgICAgICBXb3JkRW1iZWRkaW5nTWl4aW5zIF0pfVxuICogQGNsYXNzIENhdXNhbE5ldEVtYmVkZGluZ1xuICogQGV4dGVuZHMgIEJhc2VUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXRFbWJlZGRpbmcuYmFiZWwubm9kZS5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0RW1iZWRkaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChCYXNlVGVuc29yLCBcbiAgICAgICAgWyAgIFN0b3JhZ2VNaXhpbnMsIFxuICAgICAgICAgICAgTWVtQ2FjaGVNaXhpbnMsXG4gICAgICAgICAgICBUb2tlbkxvb2tVcE1peGlucyxcbiAgICAgICAgICAgIENodW5rTG9va1VwTWl4aW5zLFxuICAgICAgICAgICAgVmVjdG9yTWV0cmljTWl4aW5zLFxuICAgICAgICAgICAgV29yZEVtYmVkZGluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3RvcihmZXRjaCwgc3RvcmFnZSwgY2FjaGUsIGZ1bmN0b3Ipe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmZldGNoID0gZmV0Y2g7XG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IHN0b3JhZ2U7ICAgLy9zdG9yZSBjb25maWd1cmVcbiAgICAgICAgdGhpcy5NZW1DYWNoZSA9IGNhY2hlOyAgICAvL3N0b3JlIGNodW5rc1xuICAgICAgICB0aGlzLkYgPSBmdW5jdG9yO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoID0gJy9lbWJlZGRpbmcvJztcbiAgICAgICAgdGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgJ2Rlc2NyaXB0aW9uLmpzb24nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdmVjemllIGluIHBvc2l0aXZlIG51bWJlclxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGdldCBWZWNTaXplKCl7XG4gICAgICAgIGlmKCF0aGlzLnZlY3NpemUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ZlY3NpemUgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZlY3NpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgY29uZmlndXJlIG9mIHByZXRyYWluZWQgdmVjdG9yIGZyb20gZWl0aGVyIGxvY2FsIGZvbGRlciBvciByZW1vdGUgc2VydmVyLiBcbiAgICAgKiBBZnRlciBjb25uZWN0LCB0aGUgcmVzdWx0IGlzIGNhY2hlZCBmb3IgbmV4dCB0aW1lIGluaXQuXG4gICAgICogQHBhcmFtIHsgVVJMfEZpbGVQYXRoIH0gbGluayAtIGxpbmsgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7IGJvb2xlYW4gfSBbcmVmcmVzaD1mYWxzZV0gLSBmb3JjZSB0byBkaXNjYXJkIGxvY2FsIGNhY2hlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH1cbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgY29ubmVjdChsaW5rLCByZWZyZXNoPWZhbHNlKXtcbiAgICAgICAgdGhpcy5iYXNlTGluayA9IGxpbms7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldERlc2NyaXB0aW9uKHJlZnJlc2gpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgY29ubmVjdFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VGZWN0aD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBnZXREZXNjcmlwdGlvbihmb3JjZUZlY3RoPWZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMuZGVzY3JpcHRpb24pe1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbkl0ZW0gPSBhd2FpdCB0aGlzLlN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IEpTT04ucGFyc2UoZGVzY3JpcHRpb25JdGVtW3RoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHsnbG9hZCBkZXNjcmlwdGlvbiBmcm9tIHN0b3JhZ2UnOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLnF1ZXJ5RGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihmb3JjZUZlY3RoKXtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLnF1ZXJ5RGVzY3JpcHRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlRva2VuQ2h1bmtJZE1hcHBlciA9ICh0b2tlbik9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkYuZ2V0SW4oW3Rva2VuXSwgdGhpcy5kZXNjcmlwdGlvbi5jaHVua0xvb2tVcCwgbnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmVjc2l6ZSA9IHRoaXMuZGVzY3JpcHRpb24udmVjc2l6ZTsvL29ubHkgc2V0IGZyb20gaGVyZVxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZmV0Y2ggb3IgcmVhZCBjb25maWd1cmUgZGVwZW5kcyBvbiBwcm92aWVkIGxpbmsgZm9ybWF0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0geyp9IGxpbmtcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBxdWVyeShsaW5rKXtcbiAgICAgICAgaWYobGluay5zdGFydHNXaXRoKCdodHRwJykpe1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGpzb25VdGlscy5mZXRjaEpzb24obGluayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBqc29uVXRpbHMucmVhZEpTT04obGluayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogcXVlcnkgdGhlIGRlc2NyaXB0aW9uIGpzb24gXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGRlc2NyaXB0aW9uIGpzb24gb2JqZWN0XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5RGVzY3JpcHRpb24oKXtcbiAgICAgICAgY29uc3QgRGVzY3JpcHRpb25MaW5rID0gdGhpcy5iYXNlTGluayArICd3b3JkdmVjLmRlc2NyaXB0aW9uLmpzb24nO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7IERlc2NyaXB0aW9uTGluayB9KTtcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5xdWVyeShEZXNjcmlwdGlvbkxpbmspO1xuICAgICAgICBhd2FpdCB0aGlzLlN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGVzY3JpcHRpb24pKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRFbWJlZGRpbmcoZmV0Y2gsIGluZGV4REJTdG9yYWdlLCBtZW1Eb3duQ2FjaGUsIGZ1bmN0b3IpOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmdGdW5jdG9yLm1peGlucyc7XG4vKipcbiAqIFRoaXMgRnVuY3Rpb24gY2xhc3MgcHJvdmlkZXMgbWV0aG9kcyBmb3IgY29tbW9uIHVzZWQgdWx0aWxpdGllcyBmdW5jdGlvblxuICogQGV4cG9ydFxuICogQGNsYXNzIEZ1bmN0aW9uXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3RvclxuICovXG5cbmNsYXNzIEZ1bmN0b3IgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBcbiAgICAgICAgW1dvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXByZXNlbnRhdGlvbk1peGlucyB9IGZyb20gJy4vcmVwcmVzZW50YXRpb24ubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0RW1iZWRkaW5nIH0gZnJvbSAnLi9jYXVzYWxOZXRFbWJlZGRpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bml2ZXJzYWxFbWJlZGRpbmcgfSBmcm9tICcuL3VuaXZlcnNhbEVtYmVkZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdvcmRFbWJlZGRpbmdNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmcubWl4aW5zJztcbmV4cG9ydCB7IENodW5rTG9va3VwTWl4aW5zLCBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmdGdW5jdG9yLm1peGlucyc7IiwiaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJzsgXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlcyBhdHRyaWJ1dGVzOiAqKlJlcHJlc2VudGF0aW9uKiouXG4gKiBAY2xhc3MgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAqIEBleHRlbmRzICBCYXNlUGlwZWxpbmVDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2VtYmVkZGluZ01peGlucy5iYWJlbC5ub2RlLmpzXVxuICovXG5jb25zdCBSZXByZXNlbnRhdGlvbk1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzeyBcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gRW1iZWRkaW5nIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBnZXQgUmVwcmVzZW50YXRpb24oKXtcbiAgICAgICAgaWYoIXRoaXMucmVwcmVzZW50YXRpb24pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3JlcHJlc2VudGF0aW9uIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXByZXNlbnRhdGlvbjtcbiAgICB9XG4gICAgXG4gICAgc2V0IFJlcHJlc2VudGF0aW9uKHJlcHJlc2VudGF0aW9uKXtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihyZXByZXNlbnRhdGlvbiwgVGVuc29yKTtcbiAgICAgICAgdGhpcy5yZXByZXNlbnRhdGlvbiA9IHJlcHJlc2VudGF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkIGNvbmZpZ3VyZSBvZiBwcmV0cmFpbmVkIHZlY3RvciBmcm9tIGVpdGhlciBsb2NhbCBmb2xkZXIgb3IgcmVtb3RlIHNlcnZlci4gXG4gICAgICogQWZ0ZXIgY29ubmVjdCwgdGhlIHJlc3VsdCBpcyBjYWNoZWQgZm9yIG5leHQgdGltZSBpbml0LlxuICAgICAqIEBwYXJhbSB7IFVSTHxGaWxlUGF0aCB9IGxpbmsgLSBsaW5rIHRvIGxvYWRcbiAgICAgKiBAcGFyYW0geyBib29sZWFuIH0gW3JlZnJlc2g9ZmFsc2VdIC0gZm9yY2UgdG8gZGlzY2FyZCBsb2NhbCBjYWNoZVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9XG4gICAgICogQG1lbWJlcm9mIFJlcHJlc2VudGF0aW9uTWl4aW5zXG4gICAgICovXG4gICAgYXN5bmMgY29ubmVjdCgpe1xuICAgICAgICBpZihzdXBlci5jb25uZWN0KXtcbiAgICAgICAgICAgIHN1cGVyLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29uZmlndXJlTGluayA9IHRoaXMuZW1iZWRkaW5nQ29uZmlnO1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2coYHJlcHJlc2VudGF0aW9uIGNvbm5lY3QgdG8gJHtjb25maWd1cmVMaW5rfWApO1xuICAgICAgICBhd2FpdCB0aGlzLlJlcHJlc2VudGF0aW9uLmNvbm5lY3QoY29uZmlndXJlTGluayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNldCBlbWJlZGRpbmcgZm9yIHBpcGVsaW5lXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gbmV0Q29uZmlnIC0gY29udGFpbiBFbWJlZGRpbmcgaW5zdGFuY2UgYW5kIEVtYmVkZGluZyBjb25maWd1cmVcbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBzZXRSZXByZXNlbnRhdGlvbkJ5Q29uZmlnKG5ldENvbmZpZyl7XG4gICAgICAgIGxldCB7IEVtYmVkZGluZ0NvbmZpZywgRW1iZWRkaW5nIH0gPSBuZXRDb25maWcuUmVwcmVzZW50YXRpb247XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YoRW1iZWRkaW5nQ29uZmlnLCBTdHJpbmcpO1xuICAgICAgICB0aGlzLlJlcHJlc2VudGF0aW9uID0gRW1iZWRkaW5nO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ0NvbmZpZyA9IEVtYmVkZGluZ0NvbmZpZztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVwcmVzZW50YXRpb25NaXhpbnM7ICAgICIsImltcG9ydCB7IHBsYXRmb3JtLCBmZXRjaCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yTWV0cmljTWl4aW5zIH0gZnJvbSAnLi92ZWN0b3JNZXRyaWNzLm1peGlucyc7XG5cbi8qKlxuICogVGhpcyBVbml2ZXJzYWxFbWJlZGRpbmcgcHJvdmlkZSBtZXRob2RzIGZvciB0cmFuc2Zvcm0gc2VudGVuY2VzIGludG8gXG4gKiBpdHMgc2luZ2xlIHZlY3RvciByZXByZXNlbnRhdGlvbiBcbiAqIGJhc2VkIG9uIFt1c2VdKGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5zb3JmbG93L3RmanMtbW9kZWxzL3RyZWUvbWFzdGVyL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyKVxuICogXG4gKiBAY2xhc3MgVW5pdmVyc2FsRW1iZWRkaW5nXG4gKiBAZXh0ZW5kcyB7VGVuc29yfVxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL3VuaXZlcnNhbEVtYmVkZGluZy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgVW5pdmVyc2FsRW1iZWRkaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsIFxuICAgIFsgVmVjdG9yTWV0cmljTWl4aW5zIF0pe1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZSB7IFRlbnNvck1vZGVsIH0gXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVzZSA9IHJlcXVpcmUoJ3RmanMtbW9kZWxzLnVzZS1lbWJlZGRpbmcnKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGNvbm5lY3QobGluayl7XG4gICAgICAgIGlmKGdsb2JhbCl7XG4gICAgICAgICAgICAvL1RPRE86IG1ha2UgYmV0dGVyIHdpdGggcGxhdGZvcm1cbiAgICAgICAgICAgIGdsb2JhbC5mZXRjaCA9IGZldGNoLmZldGNoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWwgPSBhd2FpdCB0aGlzLnVzZS5sb2FkKGxpbmspO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3luYyBzZW50ZW5jZUVuY29kZShzZW50ZW5jZXMpe1xuICAgICAgICBpZighdGhpcy5tb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgbW9kZWwgaXMgbm90IGNvbm5lY3RgKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZW1iZWRkaW5ncyA9IGF3YWl0IHRoaXMubW9kZWwuZW1iZWQoc2VudGVuY2VzKTtcbiAgICAgICAgcmV0dXJuIGVtYmVkZGluZ3M7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFVuaXZlcnNhbEVtYmVkZGluZygpOyIsIi8qKlxuICogVGhpcyBWZWN0b3JNZXRyaWNNaXhpbnMgY2xhc3MgaXMgcHJvdmlkZSBtZXRob2RzIGZvciBjb21wYXJpbmcgdmVjdG9yIHJlcHJlc2VudGF0aW9uIG9mIGRpZmZlcmVudCBzZW50ZW5jZXNcbiAqIEBjbGFzcyBWZWN0b3JNZXRyaWNNaXhpbnNcbiAqIEBleHRlbmRzICBCYXNlRW1iZWRkaW5nQ2xhc3NcbiAqL1xuY29uc3QgVmVjdG9yTWV0cmljTWl4aW5zID0gKEJhc2VFbWJlZGRpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VFbWJlZGRpbmdDbGFzc3sgXG4gICAgXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRoZSBldWNsZXVkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHJlcHJlc2VudGF0aW9uIHZlY3RvcnNcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gdmVjXG4gICAgICovXG4gICAgYXN5bmMgZW5jb2RlTWF0Y2hpbmcoc2VudGVuY2UxLCBzZW50ZW5jZTIpe1xuICAgICAgICBsZXQgeCA9IGF3YWl0IHRoaXMuc2VudGVuY2VFbmNvZGUoW3NlbnRlbmNlMV0pO1xuICAgICAgICB4ID0geC5yZXNoYXBlKFstMV0pO1xuICAgICAgICBsZXQgeSA9IGF3YWl0IHRoaXMuc2VudGVuY2VFbmNvZGUoW3NlbnRlbmNlMl0pO1xuICAgICAgICB5ID0geS5yZXNoYXBlKFstMV0pO1xuICAgICAgICByZXR1cm4geC5kb3QoeSkuZGl2KHgubm9ybSgpLm11bCh5Lm5vcm0oKSkpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3Rvck1ldHJpY01peGlucztcbiIsIi8qKlxuICogVGhpcyBXb3JkRW1iZWRkaW5nTWl4aW5zIGNsYXNzIGlzIHByb3ZpZGUgbWV0aG9kcyBmb3IgdHJhbnNmb3JuIHNlbnRlbmNlcywgdG9rZW5zIHRvIHZlY3RvcnNcbiAqIEBjbGFzcyBDYXVzYWxOZXRFbWJlZGRpbmdcbiAqIEBleHRlbmRzICBCYXNlRW1iZWRkaW5nQ2xhc3NcbiAqL1xuY29uc3QgV29yZEVtYmVkZGluZ01peGlucyA9IChCYXNlRW1iZWRkaW5nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRW1iZWRkaW5nQ2xhc3N7IFxuICAgIC8qKlxuICAgICAqIHJldHVybiBkZWZhdWx0IHJlcGxhY2VtZW50IGZvciB1bmtub3duIHZlYy4gQ3VycmVudGx5IGl0IGlzIHNldCB0byB6ZXJvc1xuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSB2ZWNcbiAgICAgKi9cbiAgICB1bmtub3dWZWMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZi56ZXJvVmVjKHRoaXMuVmVjU2l6ZSk7XG4gICAgfVxuICAgICAgICBcbiAgICAvKipcbiAgICAgKiByZXR1cm4gdGhlIHZlY3RvcnMgb2YgdG9rZW5pemVkIHNlbnRlbmNlc1xuICAgICAqIFRoaXMgZnVuY3Rpb24gcmVxdWlyZSBzZW50ZW5jZSB0byBiZSB0b2tlbml6ZWQgdmlhIHByZXByb2Nlc3NpbmdcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGFycmF5IG9mIHN0cmluZyB0b2tlbnMgb2Ygc2VudGVuY2VcbiAgICAgKiBAcmV0dXJucyB7IFRlbnNvciB9IGVuY29kZWQgc2VudGVuY2VzXG4gICAgICovXG4gICAgYXN5bmMgc2VudGVuY2VFbmNvZGUoc2VudGVuY2VzKXtcbiAgICAgICAgY29uc3QgVCA9IHRoaXMuVDtcbiAgICAgICAgbGV0IGVuY29kZWRTZW50ZW5jZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCB0b2tlbnMgb2Ygc2VudGVuY2VzKXtcbiAgICAgICAgICAgIGxldCB2ZWNzID0gYXdhaXQgdGhpcy50cmFuc2Zvcm0odG9rZW5zKTtcbiAgICAgICAgICAgIGxldCBlbmNvZGUgPSBhd2FpdCBULnRlbnNvcih2ZWNzKS5tZWFuKDApO1xuICAgICAgICAgICAgZW5jb2RlZFNlbnRlbmNlcy5wdXNoKGVuY29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFQuc3RhY2soZW5jb2RlZFNlbnRlbmNlcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybSB0b2tlbml6ZWQgc2VudGVuY2VzIGludG8gdGVuc29yIHZlY3RvcnNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIDJkIGFycmF5IGZvciB0b2tlbiBvZiBzZW50ZW5jZXNcbiAgICAgKiBAcmV0dXJucyB7IFRlbnNvciB9IDJkIHRlbnNvciByZXByZXNlbnQgdmVjdG9ycyBvZiBlYWNoIGlucHV0IHNlbnRlbmNlc1xuICAgICAqIEBleGFtcGxlXG4gICAgICogbGV0IHNlbnRWZWMgPSBhd2FpdCBjYXVzYWxOZXRFbWJlZGRpbmcuc2VudGVuY2VFbmNvZGUoWyBbJ3RoaXMnLCAnaXMnLCAndGVzdCddIF0pO1xuICAgICAqL1xuICAgIGFzeW5jIHRyYW5zZm9ybSh0b2tlbnMpe1xuICAgICAgICBjb25zdCBUb2tlbkxvb2tVcCA9IHRoaXMuVG9rZW5Mb29rVXAsIENodW5rTG9va1VwID0gdGhpcy5DaHVua0xvb2tVcDtcbiAgICAgICAgXG4gICAgICAgIGxldCB2ZWNzID0gW10sIG1pc3NDYWNoZVRva2Vucz1bXTtcbiAgICAgICAgZm9yKGxldCB0b2tlbiBvZiB0b2tlbnMpe1xuICAgICAgICAgICAgbGV0IHZlYyA9IGF3YWl0IFRva2VuTG9va1VwKHRva2VuKTtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtbdG9rZW5dOiB2ZWN9KTtcbiAgICAgICAgICAgIGlmKHZlYyA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbWlzc0NhY2hlVG9rZW5zID0gWy4uLm1pc3NDYWNoZVRva2VucywgdG9rZW5dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmVjcyA9IFsuLi52ZWNzLCB0b2tlbl07XG4gICAgICAgIH1cbiAgICAgICAgaWYobWlzc0NhY2hlVG9rZW5zLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdmVjcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IHt0b2tlbkNodW5rSWRzLCBjaHVua0lkc30gPSBcbiAgICAgICAgICAgIHRoaXMuRi5tYXBUb2tlblRvQ2h1bmtJZHMobWlzc0NhY2hlVG9rZW5zLCB0aGlzLlRva2VuQ2h1bmtJZE1hcHBlcik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9KTtcbiAgICAgICAgbGV0IG1hc3RlcmNodW5rID0ge307XG4gICAgICAgIGZvcihsZXQgY2h1bmtJZCBvZiBjaHVua0lkcyl7XG4gICAgICAgICAgICBpZihjaHVua0lkICE9PSBudWxsKXsvL25vdCBpbiBjaHVua1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb29rdXAnKTtcbiAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBhd2FpdCBDaHVua0xvb2tVcChjaHVua0lkKTtcbiAgICAgICAgICAgICAgICBpZihjaHVuayA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGNodW5rID0gYXdhaXQgdGhpcy5xdWVyeUNodW5rKGNodW5rSWQpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNodW5rTG9va1VwKGNodW5rSWQsIGNodW5rKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFzdGVyY2h1bmsgPSB7Li4ubWFzdGVyY2h1bmssIC4uLmNodW5rfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGZpbmFsVmVjcyA9IHZlY3MucmVkdWNlKChmaW5hbFZlY3MsIHZlYyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mKHZlYykgPT09IFwic3RyaW5nXCIgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF92ZWMgPSBtYXN0ZXJjaHVua1t2ZWNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihfdmVjID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZlYyA9IHRoaXMudW5rbm93VmVjKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWZWNzLnB1c2goX3ZlYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmVjcy5wdXNoKHZlYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaW5hbFZlY3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIHJldHVybiBmaW5hbFZlY3M7XG4gICAgfSAgIFxufTtcbmV4cG9ydCBkZWZhdWx0IFdvcmRFbWJlZGRpbmdNaXhpbnM7IiwiY29uc3QgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMgPSAoQmFzZUZ1bmN0aW9uQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZUZ1bmN0aW9uQ2xhc3N7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGxpc3Qgb2YgdG9rZW5zIHRvIGZpbmQgY29yZXNwb25kaW5nIGlkc1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gbWFwcGVyIC0gXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgbWFwVG9rZW5Ub0NodW5rSWRzKHRva2VucywgbWFwcGVyKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVG9rZW5DaHVua0lkTWFwcGVyID0gbWFwcGVyO1xuICAgICAgICBsZXQgdG9rZW5DaHVua01hcCA9IHRva2Vucy5tYXAoIHQgPT4ge1xuICAgICAgICAgICAgbGV0IGNodW5rSWQgPSBUb2tlbkNodW5rSWRNYXBwZXIodCk7XG4gICAgICAgICAgICByZXR1cm4gW1t0LCBjaHVua0lkXSwgY2h1bmtJZF07IFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IFt0b2tlbkNodW5rSWRzLCBfY2h1bmtJZHNdID0gdGhpcy51bnppcCh0b2tlbkNodW5rTWFwKTtcbiAgICAgICAgbGV0IGNodW5rSWRzID0gUi51bmlxKF9jaHVua0lkcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtjaHVua0lkcywgdG9rZW5DaHVua0lkc30pO1xuICAgICAgICByZXR1cm4ge3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogcmV0dXJuIHplcm8gdmVjdG9yIGdpdmVuIHRoZSB2ZWMgc2l6ZVxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IHZlY1NpemUgLSBwb3NpdGl2ZSBpbnRlZ2VyIGluZGljYXRlcyB2ZWN0b3IgbGVuZ3RoXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHplcm8gdmVjdG9yXG4gICAgICovXG4gICAgemVyb1ZlYyh2ZWNTaXplKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5tYXAoKCk9PjAsdGhpcy5SLnJhbmdlKDAsIHZlY1NpemUpKTtcbiAgICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFdvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV90ZmpzX21vZGVsc191c2VfZW1iZWRkaW5nX187Il0sInNvdXJjZVJvb3QiOiIifQ==