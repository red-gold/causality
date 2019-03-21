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

class Functor extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], [_wordEmbeddingFunctor_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL2NodW5rTG9va3VwLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9jYXVzYWxOZXRFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9yZXByZXNlbnRhdGlvbi5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy91bml2ZXJzYWxFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy92ZWN0b3JNZXRyaWNzLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3dvcmRFbWJlZGRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDaHVua0xvb2t1cE1peGlucyIsIkJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MiLCJDaHVua0xvb2tVcCIsIlN0b3JhZ2UiLCJjaHVua0lkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJDaHVua1BhdGgiLCJlbWJlZGRpbmdTYXZlUGF0aCIsImNodW5rSXRlbSIsImdldEl0ZW0iLCJjaHVuayIsIkpTT04iLCJwYXJzZSIsImVyciIsInVwZGF0ZUNodW5rTG9va1VwIiwiVXBkYXRlQ2h1bmtQYXRoIiwic2V0SXRlbSIsInF1ZXJ5Q2h1bmsiLCJDaHVua1VybCIsImJhc2VMaW5rIiwicXVlcnkiLCJUb2tlbkxvb2tVcE1peGlucyIsIlRva2VuTG9va1VwIiwiTWVtQ2FjaGUiLCJ0b2tlbiIsInZlYyIsInVwZGF0ZVRva2VuTG9va1VwIiwiY29uc29sZSIsImVycm9yIiwiQ2F1c2FsTmV0RW1iZWRkaW5nIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiQmFzZVRlbnNvciIsIlN0b3JhZ2VNaXhpbnMiLCJNZW1DYWNoZU1peGlucyIsIkNodW5rTG9va1VwTWl4aW5zIiwiVmVjdG9yTWV0cmljTWl4aW5zIiwiV29yZEVtYmVkZGluZ01peGlucyIsImNvbnN0cnVjdG9yIiwiZmV0Y2giLCJpbmRleERCU3RvcmFnZSIsIm1lbURvd25DYWNoZSIsImYiLCJmdW5jdG9yIiwiZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoIiwiVmVjU2l6ZSIsInZlY3NpemUiLCJFcnJvciIsImNvbm5lY3QiLCJsaW5rIiwicmVmcmVzaCIsImdldERlc2NyaXB0aW9uIiwiZm9yY2VGZWN0aCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JdGVtIiwibG9nZ2VyIiwiZGVidWciLCJxdWVyeURlc2NyaXB0aW9uIiwiVG9rZW5DaHVua0lkTWFwcGVyIiwiRiIsImdldEluIiwiY2h1bmtMb29rVXAiLCJzdGFydHNXaXRoIiwianNvblV0aWxzIiwiZmV0Y2hKc29uIiwicmVhZEpTT04iLCJEZXNjcmlwdGlvbkxpbmsiLCJzdHJpbmdpZnkiLCJGdW5jdG9yIiwiQmFzZUZ1bmN0b3IiLCJXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyIsIlJlcHJlc2VudGF0aW9uTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJSZXByZXNlbnRhdGlvbiIsInJlcHJlc2VudGF0aW9uIiwiYXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiVGVuc29yIiwiY29uZmlndXJlTGluayIsImVtYmVkZGluZ0NvbmZpZyIsImxvZyIsInNldFJlcHJlc2VudGF0aW9uQnlDb25maWciLCJuZXRDb25maWciLCJFbWJlZGRpbmdDb25maWciLCJFbWJlZGRpbmciLCJTdHJpbmciLCJVbml2ZXJzaWFsRW1iZWRkaW5nIiwidXNlIiwicmVxdWlyZSIsIm1vZGVsIiwiZ2xvYmFsIiwibG9hZCIsInNlbnRlbmNlRW5jb2RlIiwic2VudGVuY2VzIiwiZW1iZWRkaW5ncyIsImVtYmVkIiwiQmFzZUVtYmVkZGluZ0NsYXNzIiwiZW5jb2RlTWF0Y2hpbmciLCJzZW50ZW5jZTEiLCJzZW50ZW5jZTIiLCJ4IiwicmVzaGFwZSIsInkiLCJkb3QiLCJkaXYiLCJub3JtIiwibXVsIiwidW5rbm93VmVjIiwiemVyb1ZlYyIsIlQiLCJlbmNvZGVkU2VudGVuY2VzIiwidG9rZW5zIiwidmVjcyIsInRyYW5zZm9ybSIsImVuY29kZSIsInRlbnNvciIsIm1lYW4iLCJwdXNoIiwic3RhY2siLCJtaXNzQ2FjaGVUb2tlbnMiLCJsZW5ndGgiLCJ0b2tlbkNodW5rSWRzIiwiY2h1bmtJZHMiLCJtYXBUb2tlblRvQ2h1bmtJZHMiLCJtYXN0ZXJjaHVuayIsImZpbmFsVmVjcyIsInJlZHVjZSIsIl92ZWMiLCJ1bmRlZmluZWQiLCJCYXNlRnVuY3Rpb25DbGFzcyIsIm1hcHBlciIsIlIiLCJ0b2tlbkNodW5rTWFwIiwibWFwIiwidCIsIl9jaHVua0lkcyIsInVuemlwIiwidW5pcSIsInZlY1NpemUiLCJyYW5nZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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dGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiLCBcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvblwiXSA9IGZhY3Rvcnkocm9vdFtcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiXSwgcm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQubWVtY2FjaGVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfbW9kZWxzX3VuaXZlcnNhbF9zZW50ZW5jZV9lbmNvZGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKipcbiAqIFRoaXMgQ2h1bmtMb29rdXBNaXhpbnMgY2xhc3MgcHJvdmlkZSBtaXhpbnMgZm9yIGNodW5rIGxvb2t1cCB0aGF0IGZpcnN0IGxvb2sgZnJvbSB0aGUgY2FjaGVkIGNodW5rIHRoZW5cbiAqIGZldGNoIGFuZCBjYWNoZSBuZXcgY2h1bmtcbiAqIEBjbGFzcyBDaHVua0xvb2t1cE1peGluc1xuICogQGV4dGVuZHMgeyAgQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyB9IFxuICovXG5jb25zdCBDaHVua0xvb2t1cE1peGlucyA9ICggQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyApPT4gY2xhc3MgZXh0ZW5kcyBCYXNlV29yZEVtYmVkZGluZ0NsYXNzeyBcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHN0b3JhZ2UgbG9va3VwIGZ1bmN0aW9uXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgZ2V0IENodW5rTG9va1VwKCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIHJldHVybiAoY2h1bmtJZCk9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgQ2h1bmtQYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIGNodW5rSWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0l0ZW0gPSBhd2FpdCBTdG9yYWdlLmdldEl0ZW0oQ2h1bmtQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rID0gY2h1bmtJdGVtW0NodW5rUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShjaHVuaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgIC8qKlxuICAgICogVXBkYXRlIHRoZSBzdG9yYWdlIGxvb2t1cFxuICAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IGNodW5rSWQgLSBpZCBpbiBwb3NpdGl2ZSBpbnRlZ2VyIHJhbmdlXG4gICAgKiBAcGFyYW0geyBPYmplY3QgfSBjaHVuayAtIGNodW5rIG9iamVjdCBjb250YWluaW5nIHRva2VuIGtleXMgYW5kIGNvcnJlcG9uZGluZyB2ZWMgdmFsdWVcbiAgICAqIEByZXR1cm5zIHsgU3RyaW5nIH0gLSB1cGRhdGVkIGNodW5rIHBhdGggaW4gc3RvcmFnZVxuICAgICovXG4gICBhc3luYyB1cGRhdGVDaHVua0xvb2tVcChjaHVua0lkLCBjaHVuayl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIGNvbnN0IFVwZGF0ZUNodW5rUGF0aCA9IHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyBjaHVua0lkO1xuICAgICAgICByZXR1cm4gYXdhaXQgU3RvcmFnZS5zZXRJdGVtKFVwZGF0ZUNodW5rUGF0aCwgY2h1bmspO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBRdWVyeSBjaHVuayBlaXRoZXIgcmVhZCBmcm9tIGZpbGUgb3IgZmV0Y2ggZnJvbSByZW1vdGUgc2VydmVyXG4gICAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IGNodW5rSWQgLSBpZCBpbiBwb3NpdGl2ZSBpbnRlcmdlciByYW5nZVxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gIGNodW5rIG9iamVjdCBjb250YWluaW5nIHRva2VuIGtleXMgYW5kIGNvcnJlcG9uZGluZyB2ZWMgdmFsdWVcbiAgICAgKi9cbiAgICBhc3luYyBxdWVyeUNodW5rKGNodW5rSWQpe1xuICAgICAgICBjb25zdCBDaHVua1VybCA9IGAke3RoaXMuYmFzZUxpbmt9d29yZHZlY19jaHVua18ke2NodW5rSWR9Lmpzb25gO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5xdWVyeShDaHVua1VybCk7XG4gICAgfVxuICAgXG59O1xuZXhwb3J0IGRlZmF1bHQgQ2h1bmtMb29rdXBNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDaHVua0xvb2t1cE1peGlucyB9IGZyb20gJy4vY2h1bmtMb29rdXAubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9rZW5Mb29rVXBNaXhpbnMgfSBmcm9tICcuL3Rva2VuTG9va3VwLm1peGlucyc7IiwiY29uc3QgVG9rZW5Mb29rVXBNaXhpbnMgPSAoQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3N7IFxuICAgIGdldCBUb2tlbkxvb2tVcCgpe1xuICAgICAgICBjb25zdCBNZW1DYWNoZSA9IHRoaXMuTWVtQ2FjaGU7XG4gICAgICAgIHJldHVybiAodG9rZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2ZWMgPSBhd2FpdCBNZW1DYWNoZS5nZXRJdGVtKHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmVjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSB0b2tlbiAtIFxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdmVjIC0gdmVjdG9yIHJlcHJlc2VudGF0aW9uIG9mIHRva2VuXG4gICAgICovXG4gICAgYXN5bmMgdXBkYXRlVG9rZW5Mb29rVXAodG9rZW4sIHZlYyl7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RoaXMgaXMgdXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IE1lbUNhY2hlID0gdGhpcy5NZW1DYWNoZTtcbiAgICAgICAgYXdhaXQgTWVtQ2FjaGUuc2V0SXRlbSh0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgdG9rZW4sIHZlYyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuTG9va1VwTWl4aW5zO1xuIiwiaW1wb3J0IHsgVGVuc29yIGFzIEJhc2VUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0sIGZldGNoLCBqc29uVXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFN0b3JhZ2VNaXhpbnMsIGluZGV4REJTdG9yYWdlIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IE1lbUNhY2hlTWl4aW5zLCBtZW1Eb3duQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ01peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBDaHVua0xvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwL2NodW5rTG9va3VwLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRva2VuTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAvdG9rZW5Mb29rdXAubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgVmVjdG9yTWV0cmljTWl4aW5zIH0gZnJvbSAnLi92ZWN0b3JNZXRyaWNzLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldEVtYmVkZGluZyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybSByYXcgdG9rZW5pemVkIHNlbnRlbmNlIGludG8gXG4gKiBpdHMgc2luZ2xlIHZlY3RvciByZXByZXNlbnRhdGlvblxuICogbWl4V2l0aDpcbiAqICAgICAgICAgWyAgIFN0b3JhZ2VNaXhpbnMsIFxuICogICAgICAgICAgICAgTWVtQ2FjaGVNaXhpbnMsXG4gKiAgICAgICAgICAgICBUb2tlbkxvb2tVcE1peGlucyxcbiAqICAgICAgICAgICAgIENodW5rTG9va1VwTWl4aW5zLFxuICogICAgICAgICAgICAgV29yZEVtYmVkZGluZ01peGlucyBdKX1cbiAqIEBjbGFzcyBDYXVzYWxOZXRFbWJlZGRpbmdcbiAqIEBleHRlbmRzICBCYXNlVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvY2F1c2FsTmV0RW1iZWRkaW5nLmJhYmVsLm5vZGUuanNdXG4gKi9cbmNsYXNzIENhdXNhbE5ldEVtYmVkZGluZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZVRlbnNvciwgXG4gICAgICAgIFsgICBTdG9yYWdlTWl4aW5zLCBcbiAgICAgICAgICAgIE1lbUNhY2hlTWl4aW5zLFxuICAgICAgICAgICAgVG9rZW5Mb29rVXBNaXhpbnMsXG4gICAgICAgICAgICBDaHVua0xvb2tVcE1peGlucyxcbiAgICAgICAgICAgIFZlY3Rvck1ldHJpY01peGlucyxcbiAgICAgICAgICAgIFdvcmRFbWJlZGRpbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5mZXRjaCA9IGZldGNoO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBpbmRleERCU3RvcmFnZTsgICAvL3N0b3JlIGNvbmZpZ3VyZVxuICAgICAgICB0aGlzLk1lbUNhY2hlID0gbWVtRG93bkNhY2hlOyAgICAvL3N0b3JlIGNodW5rc1xuICAgICAgICB0aGlzLmYgPSBmdW5jdG9yO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoID0gJy9lbWJlZGRpbmcvJztcbiAgICAgICAgdGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgJ2Rlc2NyaXB0aW9uLmpzb24nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdmVjemllIGluIHBvc2l0aXZlIG51bWJlclxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGdldCBWZWNTaXplKCl7XG4gICAgICAgIGlmKCF0aGlzLnZlY3NpemUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ZlY3NpemUgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZlY3NpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgY29uZmlndXJlIG9mIHByZXRyYWluZWQgdmVjdG9yIGZyb20gZWl0aGVyIGxvY2FsIGZvbGRlciBvciByZW1vdGUgc2VydmVyLiBcbiAgICAgKiBBZnRlciBjb25uZWN0LCB0aGUgcmVzdWx0IGlzIGNhY2hlZCBmb3IgbmV4dCB0aW1lIGluaXQuXG4gICAgICogQHBhcmFtIHsgVVJMfEZpbGVQYXRoIH0gbGluayAtIGxpbmsgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7IGJvb2xlYW4gfSBbcmVmcmVzaD1mYWxzZV0gLSBmb3JjZSB0byBkaXNjYXJkIGxvY2FsIGNhY2hlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH1cbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgY29ubmVjdChsaW5rLCByZWZyZXNoPWZhbHNlKXtcbiAgICAgICAgdGhpcy5iYXNlTGluayA9IGxpbms7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldERlc2NyaXB0aW9uKHJlZnJlc2gpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgY29ubmVjdFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VGZWN0aD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBnZXREZXNjcmlwdGlvbihmb3JjZUZlY3RoPWZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMuZGVzY3JpcHRpb24pe1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbkl0ZW0gPSBhd2FpdCB0aGlzLlN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IEpTT04ucGFyc2UoZGVzY3JpcHRpb25JdGVtW3RoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHsnbG9hZCBkZXNjcmlwdGlvbiBmcm9tIHN0b3JhZ2UnOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLnF1ZXJ5RGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihmb3JjZUZlY3RoKXtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLnF1ZXJ5RGVzY3JpcHRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlRva2VuQ2h1bmtJZE1hcHBlciA9ICh0b2tlbik9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkYuZ2V0SW4oW3Rva2VuXSwgdGhpcy5kZXNjcmlwdGlvbi5jaHVua0xvb2tVcCwgbnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmVjc2l6ZSA9IHRoaXMuZGVzY3JpcHRpb24udmVjc2l6ZTsvL29ubHkgc2V0IGZyb20gaGVyZVxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZmV0Y2ggb3IgcmVhZCBjb25maWd1cmUgZGVwZW5kcyBvbiBwcm92aWVkIGxpbmsgZm9ybWF0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0geyp9IGxpbmtcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBxdWVyeShsaW5rKXtcbiAgICAgICAgaWYobGluay5zdGFydHNXaXRoKCdodHRwJykpe1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGpzb25VdGlscy5mZXRjaEpzb24obGluayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBqc29uVXRpbHMucmVhZEpTT04obGluayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogcXVlcnkgdGhlIGRlc2NyaXB0aW9uIGpzb24gXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGRlc2NyaXB0aW9uIGpzb24gb2JqZWN0XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5RGVzY3JpcHRpb24oKXtcbiAgICAgICAgY29uc3QgRGVzY3JpcHRpb25MaW5rID0gdGhpcy5iYXNlTGluayArICd3b3JkdmVjLmRlc2NyaXB0aW9uLmpzb24nO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7IERlc2NyaXB0aW9uTGluayB9KTtcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5xdWVyeShEZXNjcmlwdGlvbkxpbmspO1xuICAgICAgICBhd2FpdCB0aGlzLlN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGVzY3JpcHRpb24pKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRFbWJlZGRpbmcoKTsiLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zJztcbi8qKlxuICogVGhpcyBGdW5jdGlvbiBjbGFzcyBwcm92aWRlcyBtZXRob2RzIGZvciBjb21tb24gdXNlZCB1bHRpbGl0aWVzIGZ1bmN0aW9uXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgRnVuY3Rpb25cbiAqIEBleHRlbmRzIEJhc2VGdW5jdG9yXG4gKi9cblxuY2xhc3MgRnVuY3RvciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFxuICAgICAgICBbV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnNdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJlcHJlc2VudGF0aW9uTWl4aW5zIH0gZnJvbSAnLi9yZXByZXNlbnRhdGlvbi5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRFbWJlZGRpbmcgfSBmcm9tICcuL2NhdXNhbE5ldEVtYmVkZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuaXZlcnNhbEVtYmVkZGluZyB9IGZyb20gJy4vdW5pdmVyc2FsRW1iZWRkaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ01peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZy5taXhpbnMnO1xuZXhwb3J0IHsgQ2h1bmtMb29rdXBNaXhpbnMsIFRva2VuTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zJzsiLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnOyBcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIFJlcHJlc2VudGF0aW9uTWl4aW5zIHByb3ZpZGUgbWl4aW5zIGZvciBjb21wb3NpbmcgcGlwZWxpbmUgd2l0aCByZXByZXNlbnRhdGlvbiB0cmFuc2Zvcm0gZm9yIHRleHRcbiAqIEBjbGFzcyBSZXByZXNlbnRhdGlvbk1peGluc1xuICogQGV4dGVuZHMgIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvZW1iZWRkaW5nTWl4aW5zLmJhYmVsLm5vZGUuanNdXG4gKi9cbmNvbnN0IFJlcHJlc2VudGF0aW9uTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7IFxuICAgIC8qKlxuICAgICAqIFJldHVybiBFbWJlZGRpbmcgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBSZXByZXNlbnRhdGlvbk1peGluc1xuICAgICAqL1xuICAgIGdldCBSZXByZXNlbnRhdGlvbigpe1xuICAgICAgICBpZighdGhpcy5yZXByZXNlbnRhdGlvbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncmVwcmVzZW50YXRpb24gaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcHJlc2VudGF0aW9uO1xuICAgIH1cbiAgICBcbiAgICBzZXQgUmVwcmVzZW50YXRpb24ocmVwcmVzZW50YXRpb24pe1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKHJlcHJlc2VudGF0aW9uLCBUZW5zb3IpO1xuICAgICAgICB0aGlzLnJlcHJlc2VudGF0aW9uID0gcmVwcmVzZW50YXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgY29uZmlndXJlIG9mIHByZXRyYWluZWQgdmVjdG9yIGZyb20gZWl0aGVyIGxvY2FsIGZvbGRlciBvciByZW1vdGUgc2VydmVyLiBcbiAgICAgKiBBZnRlciBjb25uZWN0LCB0aGUgcmVzdWx0IGlzIGNhY2hlZCBmb3IgbmV4dCB0aW1lIGluaXQuXG4gICAgICogQHBhcmFtIHsgVVJMfEZpbGVQYXRoIH0gbGluayAtIGxpbmsgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7IGJvb2xlYW4gfSBbcmVmcmVzaD1mYWxzZV0gLSBmb3JjZSB0byBkaXNjYXJkIGxvY2FsIGNhY2hlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH1cbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBhc3luYyBjb25uZWN0KCl7XG4gICAgICAgIGlmKHN1cGVyLmNvbm5lY3Qpe1xuICAgICAgICAgICAgc3VwZXIuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb25maWd1cmVMaW5rID0gdGhpcy5lbWJlZGRpbmdDb25maWc7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhgcmVwcmVzZW50YXRpb24gY29ubmVjdCB0byAke2NvbmZpZ3VyZUxpbmt9YCk7XG4gICAgICAgIGF3YWl0IHRoaXMuUmVwcmVzZW50YXRpb24uY29ubmVjdChjb25maWd1cmVMaW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogc2V0IGVtYmVkZGluZyBmb3IgcGlwZWxpbmVcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBuZXRDb25maWcgLSBjb250YWluIEVtYmVkZGluZyBpbnN0YW5jZSBhbmQgRW1iZWRkaW5nIGNvbmZpZ3VyZVxuICAgICAqIEBtZW1iZXJvZiBSZXByZXNlbnRhdGlvbk1peGluc1xuICAgICAqL1xuICAgIHNldFJlcHJlc2VudGF0aW9uQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgbGV0IHsgRW1iZWRkaW5nQ29uZmlnLCBFbWJlZGRpbmcgfSA9IG5ldENvbmZpZy5SZXByZXNlbnRhdGlvbjtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihFbWJlZGRpbmdDb25maWcsIFN0cmluZyk7XG4gICAgICAgIHRoaXMuUmVwcmVzZW50YXRpb24gPSBFbWJlZGRpbmc7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nQ29uZmlnID0gRW1iZWRkaW5nQ29uZmlnO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBSZXByZXNlbnRhdGlvbk1peGluczsgICAgIiwiaW1wb3J0IHsgcGxhdGZvcm0sIGZldGNoIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBWZWN0b3JNZXRyaWNNaXhpbnMgfSBmcm9tICcuL3ZlY3Rvck1ldHJpY3MubWl4aW5zJztcbi8qKlxuICpcbiAqIFRoaXMgVW5pdmVyc2lhbEVtYmVkZGluZyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybSBzZW50ZW5jZXMgaW50byBcbiAqIGl0cyBzaW5nbGUgdmVjdG9yIHJlcHJlc2VudGF0aW9uIFxuICogYmFzZWQgb24gW3VzZV0oaHR0cHM6Ly9naXRodWIuY29tL3RlbnNvcmZsb3cvdGZqcy1tb2RlbHMvdHJlZS9tYXN0ZXIvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXIpXG4gKiBAY2xhc3MgVW5pdmVyc2lhbEVtYmVkZGluZ1xuICogQGV4dGVuZHMgVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvdW5pdmVyc2FsRW1iZWRkaW5nLmJhYmVsLmpzXVxuICovXG5jbGFzcyBVbml2ZXJzaWFsRW1iZWRkaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsIFxuICAgIFsgVmVjdG9yTWV0cmljTWl4aW5zIF0pe1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZSB7IFRlbnNvck1vZGVsIH0gXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVzZSA9IHJlcXVpcmUoJ0B0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlcicpO1xuICAgICAgICB0aGlzLm1vZGVsID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgY29ubmVjdCgpe1xuICAgICAgICBpZihnbG9iYWwpe1xuICAgICAgICAgICAgLy9UT0RPOiBtYWtlIGJldHRlciB3aXRoIHBsYXRmb3JtXG4gICAgICAgICAgICBnbG9iYWwuZmV0Y2ggPSBmZXRjaC5mZXRjaDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsID0gYXdhaXQgdGhpcy51c2UubG9hZCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3luYyBzZW50ZW5jZUVuY29kZShzZW50ZW5jZXMpe1xuICAgICAgICBpZighdGhpcy5tb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgbW9kZWwgaXMgbm90IGNvbm5lY3RgKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZW1iZWRkaW5ncyA9IGF3YWl0IHRoaXMubW9kZWwuZW1iZWQoc2VudGVuY2VzKTtcbiAgICAgICAgcmV0dXJuIGVtYmVkZGluZ3M7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFVuaXZlcnNpYWxFbWJlZGRpbmcoKTsiLCIvKipcbiAqIFRoaXMgVmVjdG9yTWV0cmljTWl4aW5zIGNsYXNzIGlzIHByb3ZpZGUgbWV0aG9kcyBmb3IgY29tcGFyaW5nIHZlY3RvciByZXByZXNlbnRhdGlvbiBvZiBkaWZmZXJlbnQgc2VudGVuY2VzXG4gKiBAY2xhc3MgVmVjdG9yTWV0cmljTWl4aW5zXG4gKiBAZXh0ZW5kcyAgQmFzZUVtYmVkZGluZ0NsYXNzXG4gKi9cbmNvbnN0IFZlY3Rvck1ldHJpY01peGlucyA9IChCYXNlRW1iZWRkaW5nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRW1iZWRkaW5nQ2xhc3N7IFxuICAgIFxuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgZXVjbGV1ZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byByZXByZXNlbnRhdGlvbiB2ZWN0b3JzXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHZlY1xuICAgICAqL1xuICAgIGFzeW5jIGVuY29kZU1hdGNoaW5nKHNlbnRlbmNlMSwgc2VudGVuY2UyKXtcbiAgICAgICAgbGV0IHggPSBhd2FpdCB0aGlzLnNlbnRlbmNlRW5jb2RlKFtzZW50ZW5jZTFdKTtcbiAgICAgICAgeCA9IHgucmVzaGFwZShbLTFdKTtcbiAgICAgICAgbGV0IHkgPSBhd2FpdCB0aGlzLnNlbnRlbmNlRW5jb2RlKFtzZW50ZW5jZTJdKTtcbiAgICAgICAgeSA9IHkucmVzaGFwZShbLTFdKTtcbiAgICAgICAgcmV0dXJuIHguZG90KHkpLmRpdih4Lm5vcm0oKS5tdWwoeS5ub3JtKCkpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWZWN0b3JNZXRyaWNNaXhpbnM7XG4iLCIvKipcbiAqIFRoaXMgV29yZEVtYmVkZGluZ01peGlucyBjbGFzcyBpcyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybiBzZW50ZW5jZXMsIHRva2VucyB0byB2ZWN0b3JzXG4gKiBAY2xhc3MgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gKiBAZXh0ZW5kcyAgQmFzZUVtYmVkZGluZ0NsYXNzXG4gKi9cbmNvbnN0IFdvcmRFbWJlZGRpbmdNaXhpbnMgPSAoQmFzZUVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUVtYmVkZGluZ0NsYXNzeyBcbiAgICAvKipcbiAgICAgKiByZXR1cm4gZGVmYXVsdCByZXBsYWNlbWVudCBmb3IgdW5rbm93biB2ZWMuIEN1cnJlbnRseSBpdCBpcyBzZXQgdG8gemVyb3NcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gdmVjXG4gICAgICovXG4gICAgdW5rbm93VmVjKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmYuemVyb1ZlYyh0aGlzLlZlY1NpemUpO1xuICAgIH1cbiAgICAgICAgXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRoZSB2ZWN0b3JzIG9mIHRva2VuaXplZCBzZW50ZW5jZXNcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlcXVpcmUgc2VudGVuY2UgdG8gYmUgdG9rZW5pemVkIHZpYSBwcmVwcm9jZXNzaW5nXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5zIG9mIHNlbnRlbmNlXG4gICAgICogQHJldHVybnMgeyBUZW5zb3IgfSBlbmNvZGVkIHNlbnRlbmNlc1xuICAgICAqL1xuICAgIGFzeW5jIHNlbnRlbmNlRW5jb2RlKHNlbnRlbmNlcyl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGxldCBlbmNvZGVkU2VudGVuY2VzID0gW107XG4gICAgICAgIGZvcihsZXQgdG9rZW5zIG9mIHNlbnRlbmNlcyl7XG4gICAgICAgICAgICBsZXQgdmVjcyA9IGF3YWl0IHRoaXMudHJhbnNmb3JtKHRva2Vucyk7XG4gICAgICAgICAgICBsZXQgZW5jb2RlID0gYXdhaXQgVC50ZW5zb3IodmVjcykubWVhbigwKTtcbiAgICAgICAgICAgIGVuY29kZWRTZW50ZW5jZXMucHVzaChlbmNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBULnN0YWNrKGVuY29kZWRTZW50ZW5jZXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gdG9rZW5pemVkIHNlbnRlbmNlcyBpbnRvIHRlbnNvciB2ZWN0b3JzXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSAyZCBhcnJheSBmb3IgdG9rZW4gb2Ygc2VudGVuY2VzXG4gICAgICogQHJldHVybnMgeyBUZW5zb3IgfSAyZCB0ZW5zb3IgcmVwcmVzZW50IHZlY3RvcnMgb2YgZWFjaCBpbnB1dCBzZW50ZW5jZXNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGxldCBzZW50VmVjID0gYXdhaXQgY2F1c2FsTmV0RW1iZWRkaW5nLnNlbnRlbmNlRW5jb2RlKFsgWyd0aGlzJywgJ2lzJywgJ3Rlc3QnXSBdKTtcbiAgICAgKi9cbiAgICBhc3luYyB0cmFuc2Zvcm0odG9rZW5zKXtcbiAgICAgICAgY29uc3QgVG9rZW5Mb29rVXAgPSB0aGlzLlRva2VuTG9va1VwLCBDaHVua0xvb2tVcCA9IHRoaXMuQ2h1bmtMb29rVXA7XG4gICAgICAgIFxuICAgICAgICBsZXQgdmVjcyA9IFtdLCBtaXNzQ2FjaGVUb2tlbnM9W107XG4gICAgICAgIGZvcihsZXQgdG9rZW4gb2YgdG9rZW5zKXtcbiAgICAgICAgICAgIGxldCB2ZWMgPSBhd2FpdCBUb2tlbkxvb2tVcCh0b2tlbik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7W3Rva2VuXTogdmVjfSk7XG4gICAgICAgICAgICBpZih2ZWMgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgIG1pc3NDYWNoZVRva2VucyA9IFsuLi5taXNzQ2FjaGVUb2tlbnMsIHRva2VuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZlY3MgPSBbLi4udmVjcywgdG9rZW5dO1xuICAgICAgICB9XG4gICAgICAgIGlmKG1pc3NDYWNoZVRva2Vucy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHZlY3M7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCB7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9ID0gXG4gICAgICAgICAgICB0aGlzLkYubWFwVG9rZW5Ub0NodW5rSWRzKG1pc3NDYWNoZVRva2VucywgdGhpcy5Ub2tlbkNodW5rSWRNYXBwZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfSk7XG4gICAgICAgIGxldCBtYXN0ZXJjaHVuayA9IHt9O1xuICAgICAgICBmb3IobGV0IGNodW5rSWQgb2YgY2h1bmtJZHMpe1xuICAgICAgICAgICAgaWYoY2h1bmtJZCAhPT0gbnVsbCl7Ly9ub3QgaW4gY2h1bmtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9va3VwJyk7XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rID0gYXdhaXQgQ2h1bmtMb29rVXAoY2h1bmtJZCk7XG4gICAgICAgICAgICAgICAgaWYoY2h1bmsgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBjaHVuayA9IGF3YWl0IHRoaXMucXVlcnlDaHVuayhjaHVua0lkKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDaHVua0xvb2tVcChjaHVua0lkLCBjaHVuayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hc3RlcmNodW5rID0gey4uLm1hc3RlcmNodW5rLCAuLi5jaHVua307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBmaW5hbFZlY3MgPSB2ZWNzLnJlZHVjZSgoZmluYWxWZWNzLCB2ZWMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZih2ZWMpID09PSBcInN0cmluZ1wiICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdmVjID0gbWFzdGVyY2h1bmtbdmVjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoX3ZlYyA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92ZWMgPSB0aGlzLnVua25vd1ZlYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmVjcy5wdXNoKF92ZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZlY3MucHVzaCh2ZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxWZWNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gZmluYWxWZWNzO1xuICAgIH0gICBcbn07XG5leHBvcnQgZGVmYXVsdCBXb3JkRW1iZWRkaW5nTWl4aW5zOyIsImNvbnN0IFdvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zID0gKEJhc2VGdW5jdGlvbkNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VGdW5jdGlvbkNsYXNze1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBsaXN0IG9mIHRva2VucyB0byBmaW5kIGNvcmVzcG9uZGluZyBpZHNcbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IG1hcHBlciAtIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIG1hcFRva2VuVG9DaHVua0lkcyh0b2tlbnMsIG1hcHBlcil7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFRva2VuQ2h1bmtJZE1hcHBlciA9IG1hcHBlcjtcbiAgICAgICAgbGV0IHRva2VuQ2h1bmtNYXAgPSB0b2tlbnMubWFwKCB0ID0+IHtcbiAgICAgICAgICAgIGxldCBjaHVua0lkID0gVG9rZW5DaHVua0lkTWFwcGVyKHQpO1xuICAgICAgICAgICAgcmV0dXJuIFtbdCwgY2h1bmtJZF0sIGNodW5rSWRdOyBcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBbdG9rZW5DaHVua0lkcywgX2NodW5rSWRzXSA9IHRoaXMudW56aXAodG9rZW5DaHVua01hcCk7XG4gICAgICAgIGxldCBjaHVua0lkcyA9IFIudW5pcShfY2h1bmtJZHMpO1xuICAgICAgICBjb25zb2xlLmxvZyh7Y2h1bmtJZHMsIHRva2VuQ2h1bmtJZHN9KTtcbiAgICAgICAgcmV0dXJuIHt0b2tlbkNodW5rSWRzLCBjaHVua0lkc307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHJldHVybiB6ZXJvIHZlY3RvciBnaXZlbiB0aGUgdmVjIHNpemVcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSB2ZWNTaXplIC0gcG9zaXRpdmUgaW50ZWdlciBpbmRpY2F0ZXMgdmVjdG9yIGxlbmd0aFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSB6ZXJvIHZlY3RvclxuICAgICAqL1xuICAgIHplcm9WZWModmVjU2l6ZSl7XG4gICAgICAgIHJldHVybiB0aGlzLlIubWFwKCgpPT4wLHRoaXMuUi5yYW5nZSgwLCB2ZWNTaXplKSk7XG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfbW9kZWxzX3VuaXZlcnNhbF9zZW50ZW5jZV9lbmNvZGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==