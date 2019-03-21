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
/*!*******************************************************************************************!*\
  !*** /Users/huynh/github/causality/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*******************************************************************************************/
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
/*!*****************************************************************************************!*\
  !*** /Users/huynh/github/causality/node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*****************************************************************************************/
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
/* harmony import */ var _functor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functor */ "./src/functor.js");








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

    this.f = _functor__WEBPACK_IMPORTED_MODULE_7__["default"];
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
  /**
   * return the eucleudian distance between two representation vectors
   * @returns { Array } vec
   */


  async encodeMatching(sentence1, sentence2) {
    let x = await this.sentenceEncode([sentence1]);
    x = x.reshape([-1]);
    let y = await this.sentenceEncode([sentence2]);
    y = y.reshape([-1]);
    return x.sub(y).norm().div(x.norm().mul(y.norm()).pow(0.5));
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
    return this.f.zeroVec(this.VecSize);
  }
  /**
   * return the eucleudian distance between two representation vectors
   * @returns { Array } vec
   */


  async encodeMatching(sentence1, sentence2) {
    let x = await this.sentenceEncode([sentence1]);
    x = x.reshape([-1]);
    let y = await this.sentenceEncode([sentence2]);
    y = y.reshape([-1]);
    return x.sub(y).norm().div(x.norm().mul(y.norm()).pow(0.5));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL1VzZXJzL2h1eW5oL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8vVXNlcnMvaHV5bmgvZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9Mb29rdXAvY2h1bmtMb29rdXAubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL3Rva2VuTG9va3VwLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL2NhdXNhbE5ldEVtYmVkZGluZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL2Z1bmN0b3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3JlcHJlc2VudGF0aW9uLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3VuaXZlcnNhbEVtYmVkZGluZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3dvcmRFbWJlZGRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDaHVua0xvb2t1cE1peGlucyIsIkJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MiLCJDaHVua0xvb2tVcCIsIlN0b3JhZ2UiLCJjaHVua0lkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJDaHVua1BhdGgiLCJlbWJlZGRpbmdTYXZlUGF0aCIsImNodW5rSXRlbSIsImdldEl0ZW0iLCJjaHVuayIsIkpTT04iLCJwYXJzZSIsImVyciIsInVwZGF0ZUNodW5rTG9va1VwIiwiVXBkYXRlQ2h1bmtQYXRoIiwic2V0SXRlbSIsInF1ZXJ5Q2h1bmsiLCJDaHVua1VybCIsImJhc2VMaW5rIiwicXVlcnkiLCJUb2tlbkxvb2tVcE1peGlucyIsIlRva2VuTG9va1VwIiwiTWVtQ2FjaGUiLCJ0b2tlbiIsInZlYyIsInVwZGF0ZVRva2VuTG9va1VwIiwiY29uc29sZSIsImVycm9yIiwiQ2F1c2FsTmV0RW1iZWRkaW5nIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiU3RvcmFnZU1peGlucyIsIk1lbUNhY2hlTWl4aW5zIiwiQ2h1bmtMb29rVXBNaXhpbnMiLCJXb3JkRW1iZWRkaW5nTWl4aW5zIiwiY29uc3RydWN0b3IiLCJmZXRjaCIsImluZGV4REJTdG9yYWdlIiwibWVtRG93bkNhY2hlIiwiZiIsImZ1bmN0b3IiLCJlbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgiLCJWZWNTaXplIiwidmVjc2l6ZSIsIkVycm9yIiwiY29ubmVjdCIsImxpbmsiLCJyZWZyZXNoIiwiZ2V0RGVzY3JpcHRpb24iLCJmb3JjZUZlY3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkl0ZW0iLCJsb2dnZXIiLCJkZWJ1ZyIsInF1ZXJ5RGVzY3JpcHRpb24iLCJUb2tlbkNodW5rSWRNYXBwZXIiLCJGIiwiZ2V0SW4iLCJjaHVua0xvb2tVcCIsInN0YXJ0c1dpdGgiLCJqc29uVXRpbHMiLCJmZXRjaEpzb24iLCJyZWFkSlNPTiIsIkRlc2NyaXB0aW9uTGluayIsInN0cmluZ2lmeSIsIkZ1bmN0b3IiLCJCYXNlRnVuY3RvciIsIldvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zIiwiUmVwcmVzZW50YXRpb25NaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIlJlcHJlc2VudGF0aW9uIiwicmVwcmVzZW50YXRpb24iLCJhc3NlcnQiLCJiZUluc3RhbmNlT2YiLCJjb25maWd1cmVMaW5rIiwiZW1iZWRkaW5nQ29uZmlnIiwibG9nIiwic2V0UmVwcmVzZW50YXRpb25CeUNvbmZpZyIsIm5ldENvbmZpZyIsIkVtYmVkZGluZ0NvbmZpZyIsIkVtYmVkZGluZyIsIlN0cmluZyIsIlVuaXZlcnNpYWxFbWJlZGRpbmciLCJ1c2UiLCJyZXF1aXJlIiwibW9kZWwiLCJnbG9iYWwiLCJsb2FkIiwic2VudGVuY2VFbmNvZGUiLCJzZW50ZW5jZXMiLCJlbWJlZGRpbmdzIiwiZW1iZWQiLCJlbmNvZGVNYXRjaGluZyIsInNlbnRlbmNlMSIsInNlbnRlbmNlMiIsIngiLCJyZXNoYXBlIiwieSIsInN1YiIsIm5vcm0iLCJkaXYiLCJtdWwiLCJwb3ciLCJCYXNlRW1iZWRkaW5nQ2xhc3MiLCJ1bmtub3dWZWMiLCJ6ZXJvVmVjIiwiVCIsImVuY29kZWRTZW50ZW5jZXMiLCJ0b2tlbnMiLCJ2ZWNzIiwidHJhbnNmb3JtIiwiZW5jb2RlIiwidGVuc29yIiwibWVhbiIsInB1c2giLCJzdGFjayIsIm1pc3NDYWNoZVRva2VucyIsImxlbmd0aCIsInRva2VuQ2h1bmtJZHMiLCJjaHVua0lkcyIsIm1hcFRva2VuVG9DaHVua0lkcyIsIm1hc3RlcmNodW5rIiwiZmluYWxWZWNzIiwicmVkdWNlIiwiX3ZlYyIsInVuZGVmaW5lZCIsIkJhc2VGdW5jdGlvbkNsYXNzIiwibWFwcGVyIiwiUiIsInRva2VuQ2h1bmtNYXAiLCJtYXAiLCJ0IiwiX2NodW5rSWRzIiwidW56aXAiLCJ1bmlxIiwidmVjU2l6ZSIsInJhbmdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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TUFBSSxDQUFmLEVBQWlCLEtBQUtGLENBQUwsQ0FBT1EsS0FBUCxDQUFhLENBQWIsRUFBZ0JELE9BQWhCLENBQWpCLENBQVA7QUFDSDs7QUExQm9GLENBQXpGOztBQTRCZXBFLHlGQUFmLEU7Ozs7Ozs7Ozs7O0FDNUJBLDJGOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24ubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiLCBcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvblwiXSA9IGZhY3Rvcnkocm9vdFtcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiXSwgcm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQubWVtY2FjaGVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfbW9kZWxzX3VuaXZlcnNhbF9zZW50ZW5jZV9lbmNvZGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKipcbiAqIFRoaXMgQ2h1bmtMb29rdXBNaXhpbnMgY2xhc3MgcHJvdmlkZSBtaXhpbnMgZm9yIGNodW5rIGxvb2t1cCB0aGF0IGZpcnN0IGxvb2sgZnJvbSB0aGUgY2FjaGVkIGNodW5rIHRoZW5cbiAqIGZldGNoIGFuZCBjYWNoZSBuZXcgY2h1bmtcbiAqIEBjbGFzcyBDaHVua0xvb2t1cE1peGluc1xuICogQGV4dGVuZHMgeyAgQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyB9IFxuICovXG5jb25zdCBDaHVua0xvb2t1cE1peGlucyA9ICggQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyApPT4gY2xhc3MgZXh0ZW5kcyBCYXNlV29yZEVtYmVkZGluZ0NsYXNzeyBcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHN0b3JhZ2UgbG9va3VwIGZ1bmN0aW9uXG4gICAgICogQHJlYWRvbmx5XG4gICAgICovXG4gICAgZ2V0IENodW5rTG9va1VwKCl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIHJldHVybiAoY2h1bmtJZCk9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgQ2h1bmtQYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIGNodW5rSWQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0l0ZW0gPSBhd2FpdCBTdG9yYWdlLmdldEl0ZW0oQ2h1bmtQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rID0gY2h1bmtJdGVtW0NodW5rUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShjaHVuaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgIC8qKlxuICAgICogVXBkYXRlIHRoZSBzdG9yYWdlIGxvb2t1cFxuICAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IGNodW5rSWQgLSBpZCBpbiBwb3NpdGl2ZSBpbnRlZ2VyIHJhbmdlXG4gICAgKiBAcGFyYW0geyBPYmplY3QgfSBjaHVuayAtIGNodW5rIG9iamVjdCBjb250YWluaW5nIHRva2VuIGtleXMgYW5kIGNvcnJlcG9uZGluZyB2ZWMgdmFsdWVcbiAgICAqIEByZXR1cm5zIHsgU3RyaW5nIH0gLSB1cGRhdGVkIGNodW5rIHBhdGggaW4gc3RvcmFnZVxuICAgICovXG4gICBhc3luYyB1cGRhdGVDaHVua0xvb2tVcChjaHVua0lkLCBjaHVuayl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIGNvbnN0IFVwZGF0ZUNodW5rUGF0aCA9IHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyBjaHVua0lkO1xuICAgICAgICByZXR1cm4gYXdhaXQgU3RvcmFnZS5zZXRJdGVtKFVwZGF0ZUNodW5rUGF0aCwgY2h1bmspO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBRdWVyeSBjaHVuayBlaXRoZXIgcmVhZCBmcm9tIGZpbGUgb3IgZmV0Y2ggZnJvbSByZW1vdGUgc2VydmVyXG4gICAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IGNodW5rSWQgLSBpZCBpbiBwb3NpdGl2ZSBpbnRlcmdlciByYW5nZVxuICAgICAqIEByZXR1cm5zIHsgT2JqZWN0IH0gIGNodW5rIG9iamVjdCBjb250YWluaW5nIHRva2VuIGtleXMgYW5kIGNvcnJlcG9uZGluZyB2ZWMgdmFsdWVcbiAgICAgKi9cbiAgICBhc3luYyBxdWVyeUNodW5rKGNodW5rSWQpe1xuICAgICAgICBjb25zdCBDaHVua1VybCA9IGAke3RoaXMuYmFzZUxpbmt9d29yZHZlY19jaHVua18ke2NodW5rSWR9Lmpzb25gO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5xdWVyeShDaHVua1VybCk7XG4gICAgfVxuICAgXG59O1xuZXhwb3J0IGRlZmF1bHQgQ2h1bmtMb29rdXBNaXhpbnM7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDaHVua0xvb2t1cE1peGlucyB9IGZyb20gJy4vY2h1bmtMb29rdXAubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9rZW5Mb29rVXBNaXhpbnMgfSBmcm9tICcuL3Rva2VuTG9va3VwLm1peGlucyc7IiwiY29uc3QgVG9rZW5Mb29rVXBNaXhpbnMgPSAoQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3N7IFxuICAgIGdldCBUb2tlbkxvb2tVcCgpe1xuICAgICAgICBjb25zdCBNZW1DYWNoZSA9IHRoaXMuTWVtQ2FjaGU7XG4gICAgICAgIHJldHVybiAodG9rZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2ZWMgPSBhd2FpdCBNZW1DYWNoZS5nZXRJdGVtKHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmVjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSB0b2tlbiAtIFxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdmVjIC0gdmVjdG9yIHJlcHJlc2VudGF0aW9uIG9mIHRva2VuXG4gICAgICovXG4gICAgYXN5bmMgdXBkYXRlVG9rZW5Mb29rVXAodG9rZW4sIHZlYyl7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RoaXMgaXMgdXBkYXRlJyk7XG4gICAgICAgIGNvbnN0IE1lbUNhY2hlID0gdGhpcy5NZW1DYWNoZTtcbiAgICAgICAgYXdhaXQgTWVtQ2FjaGUuc2V0SXRlbSh0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgdG9rZW4sIHZlYyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuTG9va1VwTWl4aW5zO1xuIiwiaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtLCBmZXRjaCwganNvblV0aWxzIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBTdG9yYWdlTWl4aW5zLCBpbmRleERCU3RvcmFnZSB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyBNZW1DYWNoZU1peGlucywgbWVtRG93bkNhY2hlIH0gZnJvbSAnY2F1c2FsLW5ldC5tZW1jYWNoZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFdvcmRFbWJlZGRpbmdNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmcubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgQ2h1bmtMb29rVXBNaXhpbnMgfSBmcm9tICcuL0xvb2t1cC9jaHVua0xvb2t1cC5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwL3Rva2VuTG9va3VwLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuLyoqXG4gKiBUaGlzIENhdXNhbE5ldEVtYmVkZGluZyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybSByYXcgdG9rZW5pemVkIHNlbnRlbmNlIGludG8gXG4gKiBpdHMgc2luZ2xlIHZlY3RvciByZXByZXNlbnRhdGlvblxuICogbWl4V2l0aDpcbiAqICAgICAgICAgWyAgIFN0b3JhZ2VNaXhpbnMsIFxuICogICAgICAgICAgICAgTWVtQ2FjaGVNaXhpbnMsXG4gKiAgICAgICAgICAgICBUb2tlbkxvb2tVcE1peGlucyxcbiAqICAgICAgICAgICAgIENodW5rTG9va1VwTWl4aW5zLFxuICogICAgICAgICAgICAgV29yZEVtYmVkZGluZ01peGlucyBdKX1cbiAqIEBjbGFzcyBDYXVzYWxOZXRFbWJlZGRpbmdcbiAqIEBleHRlbmRzICBUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXRFbWJlZGRpbmcuYmFiZWwubm9kZS5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0RW1iZWRkaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsIFxuICAgICAgICBbICAgU3RvcmFnZU1peGlucywgXG4gICAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAgICAgICAgICAgIFRva2VuTG9va1VwTWl4aW5zLFxuICAgICAgICAgICAgQ2h1bmtMb29rVXBNaXhpbnMsXG4gICAgICAgICAgICBXb3JkRW1iZWRkaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZmV0Y2ggPSBmZXRjaDtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gaW5kZXhEQlN0b3JhZ2U7ICAgLy9zdG9yZSBjb25maWd1cmVcbiAgICAgICAgdGhpcy5NZW1DYWNoZSA9IG1lbURvd25DYWNoZTsgICAgLy9zdG9yZSBjaHVua3NcbiAgICAgICAgdGhpcy5mID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCA9ICcvZW1iZWRkaW5nLyc7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArICdkZXNjcmlwdGlvbi5qc29uJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHZlY3ppZSBpbiBwb3NpdGl2ZSBudW1iZXJcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBnZXQgVmVjU2l6ZSgpe1xuICAgICAgICBpZighdGhpcy52ZWNzaXplKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd2ZWNzaXplIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52ZWNzaXplO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkIGNvbmZpZ3VyZSBvZiBwcmV0cmFpbmVkIHZlY3RvciBmcm9tIGVpdGhlciBsb2NhbCBmb2xkZXIgb3IgcmVtb3RlIHNlcnZlci4gXG4gICAgICogQWZ0ZXIgY29ubmVjdCwgdGhlIHJlc3VsdCBpcyBjYWNoZWQgZm9yIG5leHQgdGltZSBpbml0LlxuICAgICAqIEBwYXJhbSB7IFVSTHxGaWxlUGF0aCB9IGxpbmsgLSBsaW5rIHRvIGxvYWRcbiAgICAgKiBAcGFyYW0geyBib29sZWFuIH0gW3JlZnJlc2g9ZmFsc2VdIC0gZm9yY2UgdG8gZGlzY2FyZCBsb2NhbCBjYWNoZVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIGNvbm5lY3QobGluaywgcmVmcmVzaD1mYWxzZSl7XG4gICAgICAgIHRoaXMuYmFzZUxpbmsgPSBsaW5rO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXREZXNjcmlwdGlvbihyZWZyZXNoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IGNvbm5lY3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvcmNlRmVjdGg9ZmFsc2VdXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgZ2V0RGVzY3JpcHRpb24oZm9yY2VGZWN0aD1mYWxzZSl7XG4gICAgICAgIGlmKCF0aGlzLmRlc2NyaXB0aW9uKXtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25JdGVtID0gYXdhaXQgdGhpcy5TdG9yYWdlLmdldEl0ZW0odGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBKU09OLnBhcnNlKGRlc2NyaXB0aW9uSXRlbVt0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7J2xvYWQgZGVzY3JpcHRpb24gZnJvbSBzdG9yYWdlJzogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gYXdhaXQgdGhpcy5xdWVyeURlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoZm9yY2VGZWN0aCl7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gYXdhaXQgdGhpcy5xdWVyeURlc2NyaXB0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Ub2tlbkNodW5rSWRNYXBwZXIgPSAodG9rZW4pPT57XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5GLmdldEluKFt0b2tlbl0sIHRoaXMuZGVzY3JpcHRpb24uY2h1bmtMb29rVXAsIG51bGwpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnZlY3NpemUgPSB0aGlzLmRlc2NyaXB0aW9uLnZlY3NpemU7Ly9vbmx5IHNldCBmcm9tIGhlcmVcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGZldGNoIG9yIHJlYWQgY29uZmlndXJlIGRlcGVuZHMgb24gcHJvdmllZCBsaW5rIGZvcm1hdFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHsqfSBsaW5rXG4gICAgICogQHJldHVybnNcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgcXVlcnkobGluayl7XG4gICAgICAgIGlmKGxpbmsuc3RhcnRzV2l0aCgnaHR0cCcpKXtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBqc29uVXRpbHMuZmV0Y2hKc29uKGxpbmspO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQganNvblV0aWxzLnJlYWRKU09OKGxpbmspO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHF1ZXJ5IHRoZSBkZXNjcmlwdGlvbiBqc29uIFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSBkZXNjcmlwdGlvbiBqc29uIG9iamVjdFxuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBxdWVyeURlc2NyaXB0aW9uKCl7XG4gICAgICAgIGNvbnN0IERlc2NyaXB0aW9uTGluayA9IHRoaXMuYmFzZUxpbmsgKyAnd29yZHZlYy5kZXNjcmlwdGlvbi5qc29uJztcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoeyBEZXNjcmlwdGlvbkxpbmsgfSk7XG4gICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucXVlcnkoRGVzY3JpcHRpb25MaW5rKTtcbiAgICAgICAgYXdhaXQgdGhpcy5TdG9yYWdlLnNldEl0ZW0odGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgsIEpTT04uc3RyaW5naWZ5KGRlc2NyaXB0aW9uKSk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0RW1iZWRkaW5nKCk7IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmdGdW5jdG9yLm1peGlucyc7XG4vKipcbiAqIFRoaXMgRnVuY3Rpb24gY2xhc3MgcHJvdmlkZXMgbWV0aG9kcyBmb3IgY29tbW9uIHVzZWQgdWx0aWxpdGllcyBmdW5jdGlvblxuICogQGV4cG9ydFxuICogQGNsYXNzIEZ1bmN0aW9uXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3RvclxuICovXG5cbmNsYXNzIEZ1bmN0b3IgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBcbiAgICAgICAgW1dvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGdW5jdG9yKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXByZXNlbnRhdGlvbk1peGlucyB9IGZyb20gJy4vcmVwcmVzZW50YXRpb24ubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0RW1iZWRkaW5nIH0gZnJvbSAnLi9jYXVzYWxOZXRFbWJlZGRpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bml2ZXJzYWxFbWJlZGRpbmcgfSBmcm9tICcuL3VuaXZlcnNhbEVtYmVkZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFdvcmRFbWJlZGRpbmdNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmcubWl4aW5zJztcbmV4cG9ydCB7IENodW5rTG9va3VwTWl4aW5zLCBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmdGdW5jdG9yLm1peGlucyc7IiwiaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJzsgXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBSZXByZXNlbnRhdGlvbk1peGlucyBwcm92aWRlIG1peGlucyBmb3IgY29tcG9zaW5nIHBpcGVsaW5lIHdpdGggcmVwcmVzZW50YXRpb24gdHJhbnNmb3JtIGZvciB0ZXh0XG4gKiBAY2xhc3MgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAqIEBleHRlbmRzICBCYXNlUGlwZWxpbmVDbGFzc1xuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2VtYmVkZGluZ01peGlucy5iYWJlbC5ub2RlLmpzXVxuICovXG5jb25zdCBSZXByZXNlbnRhdGlvbk1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzeyBcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gRW1iZWRkaW5nIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBnZXQgUmVwcmVzZW50YXRpb24oKXtcbiAgICAgICAgaWYoIXRoaXMucmVwcmVzZW50YXRpb24pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3JlcHJlc2VudGF0aW9uIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXByZXNlbnRhdGlvbjtcbiAgICB9XG4gICAgXG4gICAgc2V0IFJlcHJlc2VudGF0aW9uKHJlcHJlc2VudGF0aW9uKXtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihyZXByZXNlbnRhdGlvbiwgVGVuc29yKTtcbiAgICAgICAgdGhpcy5yZXByZXNlbnRhdGlvbiA9IHJlcHJlc2VudGF0aW9uO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2FkIGNvbmZpZ3VyZSBvZiBwcmV0cmFpbmVkIHZlY3RvciBmcm9tIGVpdGhlciBsb2NhbCBmb2xkZXIgb3IgcmVtb3RlIHNlcnZlci4gXG4gICAgICogQWZ0ZXIgY29ubmVjdCwgdGhlIHJlc3VsdCBpcyBjYWNoZWQgZm9yIG5leHQgdGltZSBpbml0LlxuICAgICAqIEBwYXJhbSB7IFVSTHxGaWxlUGF0aCB9IGxpbmsgLSBsaW5rIHRvIGxvYWRcbiAgICAgKiBAcGFyYW0geyBib29sZWFuIH0gW3JlZnJlc2g9ZmFsc2VdIC0gZm9yY2UgdG8gZGlzY2FyZCBsb2NhbCBjYWNoZVxuICAgICAqIEByZXR1cm5zIHsgUHJvbWlzZSB9XG4gICAgICogQG1lbWJlcm9mIFJlcHJlc2VudGF0aW9uTWl4aW5zXG4gICAgICovXG4gICAgYXN5bmMgY29ubmVjdCgpe1xuICAgICAgICBpZihzdXBlci5jb25uZWN0KXtcbiAgICAgICAgICAgIHN1cGVyLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29uZmlndXJlTGluayA9IHRoaXMuZW1iZWRkaW5nQ29uZmlnO1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2coYHJlcHJlc2VudGF0aW9uIGNvbm5lY3QgdG8gJHtjb25maWd1cmVMaW5rfWApO1xuICAgICAgICBhd2FpdCB0aGlzLlJlcHJlc2VudGF0aW9uLmNvbm5lY3QoY29uZmlndXJlTGluayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHNldCBlbWJlZGRpbmcgZm9yIHBpcGVsaW5lXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gbmV0Q29uZmlnIC0gY29udGFpbiBFbWJlZGRpbmcgaW5zdGFuY2UgYW5kIEVtYmVkZGluZyBjb25maWd1cmVcbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBzZXRSZXByZXNlbnRhdGlvbkJ5Q29uZmlnKG5ldENvbmZpZyl7XG4gICAgICAgIGxldCB7IEVtYmVkZGluZ0NvbmZpZywgRW1iZWRkaW5nIH0gPSBuZXRDb25maWcuUmVwcmVzZW50YXRpb247XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YoRW1iZWRkaW5nQ29uZmlnLCBTdHJpbmcpO1xuICAgICAgICB0aGlzLlJlcHJlc2VudGF0aW9uID0gRW1iZWRkaW5nO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ0NvbmZpZyA9IEVtYmVkZGluZ0NvbmZpZztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVwcmVzZW50YXRpb25NaXhpbnM7ICAgICIsImltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgZmV0Y2ggfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICpcbiAqIFRoaXMgVW5pdmVyc2lhbEVtYmVkZGluZyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybSBzZW50ZW5jZXMgaW50byBcbiAqIGl0cyBzaW5nbGUgdmVjdG9yIHJlcHJlc2VudGF0aW9uIFxuICogYmFzZWQgb24gW3VzZV0oaHR0cHM6Ly9naXRodWIuY29tL3RlbnNvcmZsb3cvdGZqcy1tb2RlbHMvdHJlZS9tYXN0ZXIvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXIpXG4gKiBAY2xhc3MgVW5pdmVyc2lhbEVtYmVkZGluZ1xuICogQGV4dGVuZHMgVGVuc29yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvdW5pdmVyc2FsRW1iZWRkaW5nLmJhYmVsLmpzXVxuICovXG5jbGFzcyBVbml2ZXJzaWFsRW1iZWRkaW5nIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsIFtdKXtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGUgeyBUZW5zb3JNb2RlbCB9IFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51c2UgPSByZXF1aXJlKCdAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXInKTtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGNvbm5lY3QoKXtcbiAgICAgICAgaWYoZ2xvYmFsKXtcbiAgICAgICAgICAgIC8vVE9ETzogbWFrZSBiZXR0ZXIgd2l0aCBwbGF0Zm9ybVxuICAgICAgICAgICAgZ2xvYmFsLmZldGNoID0gZmV0Y2guZmV0Y2g7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbCA9IGF3YWl0IHRoaXMudXNlLmxvYWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VudGVuY2VFbmNvZGUoc2VudGVuY2VzKXtcbiAgICAgICAgaWYoIXRoaXMubW9kZWwpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYG1vZGVsIGlzIG5vdCBjb25uZWN0YCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVtYmVkZGluZ3MgPSBhd2FpdCB0aGlzLm1vZGVsLmVtYmVkKHNlbnRlbmNlcyk7XG4gICAgICAgIHJldHVybiBlbWJlZGRpbmdzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgZXVjbGV1ZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byByZXByZXNlbnRhdGlvbiB2ZWN0b3JzXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHZlY1xuICAgICAqL1xuICAgIGFzeW5jIGVuY29kZU1hdGNoaW5nKHNlbnRlbmNlMSwgc2VudGVuY2UyKXtcbiAgICAgICAgbGV0IHggPSBhd2FpdCB0aGlzLnNlbnRlbmNlRW5jb2RlKFtzZW50ZW5jZTFdKTtcbiAgICAgICAgeCA9IHgucmVzaGFwZShbLTFdKTtcbiAgICAgICAgbGV0IHkgPSBhd2FpdCB0aGlzLnNlbnRlbmNlRW5jb2RlKFtzZW50ZW5jZTJdKTtcbiAgICAgICAgeSA9IHkucmVzaGFwZShbLTFdKTtcbiAgICAgICAgcmV0dXJuIHguc3ViKHkpLm5vcm0oKS5kaXYoeC5ub3JtKCkubXVsKHkubm9ybSgpKS5wb3coMC41KSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFVuaXZlcnNpYWxFbWJlZGRpbmcoKTsiLCIvKipcbiAqIFRoaXMgV29yZEVtYmVkZGluZ01peGlucyBjbGFzcyBpcyBwcm92aWRlIG1ldGhvZHMgZm9yIHRyYW5zZm9ybiBzZW50ZW5jZXMsIHRva2VucyB0byB2ZWN0b3JzXG4gKiBAY2xhc3MgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gKiBAZXh0ZW5kcyAgQmFzZUVtYmVkZGluZ0NsYXNzXG4gKi9cbmNvbnN0IFdvcmRFbWJlZGRpbmdNaXhpbnMgPSAoQmFzZUVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUVtYmVkZGluZ0NsYXNzeyBcbiAgICAvKipcbiAgICAgKiByZXR1cm4gZGVmYXVsdCByZXBsYWNlbWVudCBmb3IgdW5rbm93biB2ZWMuIEN1cnJlbnRseSBpdCBpcyBzZXQgdG8gemVyb3NcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gdmVjXG4gICAgICovXG4gICAgdW5rbm93VmVjKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmYuemVyb1ZlYyh0aGlzLlZlY1NpemUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgZXVjbGV1ZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byByZXByZXNlbnRhdGlvbiB2ZWN0b3JzXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHZlY1xuICAgICAqL1xuICAgIGFzeW5jIGVuY29kZU1hdGNoaW5nKHNlbnRlbmNlMSwgc2VudGVuY2UyKXtcbiAgICAgICAgbGV0IHggPSBhd2FpdCB0aGlzLnNlbnRlbmNlRW5jb2RlKFtzZW50ZW5jZTFdKTtcbiAgICAgICAgeCA9IHgucmVzaGFwZShbLTFdKTtcbiAgICAgICAgbGV0IHkgPSBhd2FpdCB0aGlzLnNlbnRlbmNlRW5jb2RlKFtzZW50ZW5jZTJdKTtcbiAgICAgICAgeSA9IHkucmVzaGFwZShbLTFdKTtcbiAgICAgICAgcmV0dXJuIHguc3ViKHkpLm5vcm0oKS5kaXYoeC5ub3JtKCkubXVsKHkubm9ybSgpKS5wb3coMC41KSk7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgdmVjdG9ycyBvZiB0b2tlbml6ZWQgc2VudGVuY2VzXG4gICAgICogVGhpcyBmdW5jdGlvbiByZXF1aXJlIHNlbnRlbmNlIHRvIGJlIHRva2VuaXplZCB2aWEgcHJlcHJvY2Vzc2luZ1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gYXJyYXkgb2Ygc3RyaW5nIHRva2VucyBvZiBzZW50ZW5jZVxuICAgICAqIEByZXR1cm5zIHsgVGVuc29yIH0gZW5jb2RlZCBzZW50ZW5jZXNcbiAgICAgKi9cbiAgICBhc3luYyBzZW50ZW5jZUVuY29kZShzZW50ZW5jZXMpe1xuICAgICAgICBjb25zdCBUID0gdGhpcy5UO1xuICAgICAgICBsZXQgZW5jb2RlZFNlbnRlbmNlcyA9IFtdO1xuICAgICAgICBmb3IobGV0IHRva2VucyBvZiBzZW50ZW5jZXMpe1xuICAgICAgICAgICAgbGV0IHZlY3MgPSBhd2FpdCB0aGlzLnRyYW5zZm9ybSh0b2tlbnMpO1xuICAgICAgICAgICAgbGV0IGVuY29kZSA9IGF3YWl0IFQudGVuc29yKHZlY3MpLm1lYW4oMCk7XG4gICAgICAgICAgICBlbmNvZGVkU2VudGVuY2VzLnB1c2goZW5jb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gVC5zdGFjayhlbmNvZGVkU2VudGVuY2VzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIHRva2VuaXplZCBzZW50ZW5jZXMgaW50byB0ZW5zb3IgdmVjdG9yc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gMmQgYXJyYXkgZm9yIHRva2VuIG9mIHNlbnRlbmNlc1xuICAgICAqIEByZXR1cm5zIHsgVGVuc29yIH0gMmQgdGVuc29yIHJlcHJlc2VudCB2ZWN0b3JzIG9mIGVhY2ggaW5wdXQgc2VudGVuY2VzXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBsZXQgc2VudFZlYyA9IGF3YWl0IGNhdXNhbE5ldEVtYmVkZGluZy5zZW50ZW5jZUVuY29kZShbIFsndGhpcycsICdpcycsICd0ZXN0J10gXSk7XG4gICAgICovXG4gICAgYXN5bmMgdHJhbnNmb3JtKHRva2Vucyl7XG4gICAgICAgIGNvbnN0IFRva2VuTG9va1VwID0gdGhpcy5Ub2tlbkxvb2tVcCwgQ2h1bmtMb29rVXAgPSB0aGlzLkNodW5rTG9va1VwO1xuICAgICAgICBcbiAgICAgICAgbGV0IHZlY3MgPSBbXSwgbWlzc0NhY2hlVG9rZW5zPVtdO1xuICAgICAgICBmb3IobGV0IHRva2VuIG9mIHRva2Vucyl7XG4gICAgICAgICAgICBsZXQgdmVjID0gYXdhaXQgVG9rZW5Mb29rVXAodG9rZW4pO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe1t0b2tlbl06IHZlY30pO1xuICAgICAgICAgICAgaWYodmVjID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICBtaXNzQ2FjaGVUb2tlbnMgPSBbLi4ubWlzc0NhY2hlVG9rZW5zLCB0b2tlbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2ZWNzID0gWy4uLnZlY3MsIHRva2VuXTtcbiAgICAgICAgfVxuICAgICAgICBpZihtaXNzQ2FjaGVUb2tlbnMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB2ZWNzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQge3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfSA9IFxuICAgICAgICAgICAgdGhpcy5GLm1hcFRva2VuVG9DaHVua0lkcyhtaXNzQ2FjaGVUb2tlbnMsIHRoaXMuVG9rZW5DaHVua0lkTWFwcGVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHt0b2tlbkNodW5rSWRzLCBjaHVua0lkc30pO1xuICAgICAgICBsZXQgbWFzdGVyY2h1bmsgPSB7fTtcbiAgICAgICAgZm9yKGxldCBjaHVua0lkIG9mIGNodW5rSWRzKXtcbiAgICAgICAgICAgIGlmKGNodW5rSWQgIT09IG51bGwpey8vbm90IGluIGNodW5rXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvb2t1cCcpO1xuICAgICAgICAgICAgICAgIGxldCBjaHVuayA9IGF3YWl0IENodW5rTG9va1VwKGNodW5rSWQpO1xuICAgICAgICAgICAgICAgIGlmKGNodW5rID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsgPSBhd2FpdCB0aGlzLnF1ZXJ5Q2h1bmsoY2h1bmtJZCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ2h1bmtMb29rVXAoY2h1bmtJZCwgY2h1bmspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXN0ZXJjaHVuayA9IHsuLi5tYXN0ZXJjaHVuaywgLi4uY2h1bmt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZmluYWxWZWNzID0gdmVjcy5yZWR1Y2UoKGZpbmFsVmVjcywgdmVjKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YodmVjKSA9PT0gXCJzdHJpbmdcIiApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgX3ZlYyA9IG1hc3RlcmNodW5rW3ZlY107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKF92ZWMgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdmVjID0gdGhpcy51bmtub3dWZWMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZlY3MucHVzaChfdmVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWZWNzLnB1c2godmVjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbmFsVmVjcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgcmV0dXJuIGZpbmFsVmVjcztcbiAgICB9ICAgXG59O1xuZXhwb3J0IGRlZmF1bHQgV29yZEVtYmVkZGluZ01peGluczsiLCJjb25zdCBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyA9IChCYXNlRnVuY3Rpb25DbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRnVuY3Rpb25DbGFzc3tcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gdG9rZW5zIC0gbGlzdCBvZiB0b2tlbnMgdG8gZmluZCBjb3Jlc3BvbmRpbmcgaWRzXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBtYXBwZXIgLSBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBtYXBUb2tlblRvQ2h1bmtJZHModG9rZW5zLCBtYXBwZXIpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUb2tlbkNodW5rSWRNYXBwZXIgPSBtYXBwZXI7XG4gICAgICAgIGxldCB0b2tlbkNodW5rTWFwID0gdG9rZW5zLm1hcCggdCA9PiB7XG4gICAgICAgICAgICBsZXQgY2h1bmtJZCA9IFRva2VuQ2h1bmtJZE1hcHBlcih0KTtcbiAgICAgICAgICAgIHJldHVybiBbW3QsIGNodW5rSWRdLCBjaHVua0lkXTsgXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgW3Rva2VuQ2h1bmtJZHMsIF9jaHVua0lkc10gPSB0aGlzLnVuemlwKHRva2VuQ2h1bmtNYXApO1xuICAgICAgICBsZXQgY2h1bmtJZHMgPSBSLnVuaXEoX2NodW5rSWRzKTtcbiAgICAgICAgY29uc29sZS5sb2coe2NodW5rSWRzLCB0b2tlbkNodW5rSWRzfSk7XG4gICAgICAgIHJldHVybiB7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiByZXR1cm4gemVybyB2ZWN0b3IgZ2l2ZW4gdGhlIHZlYyBzaXplXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gdmVjU2l6ZSAtIHBvc2l0aXZlIGludGVnZXIgaW5kaWNhdGVzIHZlY3RvciBsZW5ndGhcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gemVybyB2ZWN0b3JcbiAgICAgKi9cbiAgICB6ZXJvVmVjKHZlY1NpemUpe1xuICAgICAgICByZXR1cm4gdGhpcy5SLm1hcCgoKT0+MCx0aGlzLlIucmFuZ2UoMCwgdmVjU2l6ZSkpO1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X21vZGVsc191bml2ZXJzYWxfc2VudGVuY2VfZW5jb2Rlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=