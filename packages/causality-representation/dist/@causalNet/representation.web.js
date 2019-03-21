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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL1VzZXJzL2h1eW5oL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8vVXNlcnMvaHV5bmgvZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9Mb29rdXAvY2h1bmtMb29rdXAubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL3Rva2VuTG9va3VwLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL2NhdXNhbE5ldEVtYmVkZGluZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL2Z1bmN0b3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3JlcHJlc2VudGF0aW9uLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3VuaXZlcnNhbEVtYmVkZGluZy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL3dvcmRFbWJlZGRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDaHVua0xvb2t1cE1peGlucyIsIkJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MiLCJDaHVua0xvb2tVcCIsIlN0b3JhZ2UiLCJjaHVua0lkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJDaHVua1BhdGgiLCJlbWJlZGRpbmdTYXZlUGF0aCIsImNodW5rSXRlbSIsImdldEl0ZW0iLCJjaHVuayIsIkpTT04iLCJwYXJzZSIsImVyciIsInVwZGF0ZUNodW5rTG9va1VwIiwiVXBkYXRlQ2h1bmtQYXRoIiwic2V0SXRlbSIsInF1ZXJ5Q2h1bmsiLCJDaHVua1VybCIsImJhc2VMaW5rIiwicXVlcnkiLCJUb2tlbkxvb2tVcE1peGlucyIsIlRva2VuTG9va1VwIiwiTWVtQ2FjaGUiLCJ0b2tlbiIsInZlYyIsInVwZGF0ZVRva2VuTG9va1VwIiwiY29uc29sZSIsImVycm9yIiwiQ2F1c2FsTmV0RW1iZWRkaW5nIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiVGVuc29yIiwiU3RvcmFnZU1peGlucyIsIk1lbUNhY2hlTWl4aW5zIiwiQ2h1bmtMb29rVXBNaXhpbnMiLCJXb3JkRW1iZWRkaW5nTWl4aW5zIiwiY29uc3RydWN0b3IiLCJmZXRjaCIsImluZGV4REJTdG9yYWdlIiwibWVtRG93bkNhY2hlIiwiZiIsImZ1bmN0b3IiLCJlbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgiLCJWZWNTaXplIiwidmVjc2l6ZSIsIkVycm9yIiwiY29ubmVjdCIsImxpbmsiLCJyZWZyZXNoIiwiZ2V0RGVzY3JpcHRpb24iLCJmb3JjZUZlY3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkl0ZW0iLCJsb2dnZXIiLCJkZWJ1ZyIsInF1ZXJ5RGVzY3JpcHRpb24iLCJUb2tlbkNodW5rSWRNYXBwZXIiLCJGIiwiZ2V0SW4iLCJjaHVua0xvb2tVcCIsInN0YXJ0c1dpdGgiLCJqc29uVXRpbHMiLCJmZXRjaEpzb24iLCJyZWFkSlNPTiIsIkRlc2NyaXB0aW9uTGluayIsInN0cmluZ2lmeSIsIkZ1bmN0b3IiLCJCYXNlRnVuY3RvciIsIldvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zIiwiUmVwcmVzZW50YXRpb25NaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIlJlcHJlc2VudGF0aW9uIiwicmVwcmVzZW50YXRpb24iLCJhc3NlcnQiLCJiZUluc3RhbmNlT2YiLCJjb25maWd1cmVMaW5rIiwiZW1iZWRkaW5nQ29uZmlnIiwibG9nIiwic2V0UmVwcmVzZW50YXRpb25CeUNvbmZpZyIsIm5ldENvbmZpZyIsIkVtYmVkZGluZ0NvbmZpZyIsIkVtYmVkZGluZyIsIlN0cmluZyIsIlVuaXZlcnNpYWxFbWJlZGRpbmciLCJ1c2UiLCJyZXF1aXJlIiwibW9kZWwiLCJnbG9iYWwiLCJsb2FkIiwic2VudGVuY2VFbmNvZGUiLCJzZW50ZW5jZXMiLCJlbWJlZGRpbmdzIiwiZW1iZWQiLCJlbmNvZGVNYXRjaGluZyIsInNlbnRlbmNlMSIsInNlbnRlbmNlMiIsIngiLCJyZXNoYXBlIiwieSIsInN1YiIsIm5vcm0iLCJkaXYiLCJtdWwiLCJwb3ciLCJCYXNlRW1iZWRkaW5nQ2xhc3MiLCJ1bmtub3dWZWMiLCJ6ZXJvVmVjIiwiVCIsImVuY29kZWRTZW50ZW5jZXMiLCJ0b2tlbnMiLCJ2ZWNzIiwidHJhbnNmb3JtIiwiZW5jb2RlIiwidGVuc29yIiwibWVhbiIsInB1c2giLCJzdGFjayIsIm1pc3NDYWNoZVRva2VucyIsImxlbmd0aCIsInRva2VuQ2h1bmtJZHMiLCJjaHVua0lkcyIsIm1hcFRva2VuVG9DaHVua0lkcyIsIm1hc3RlcmNodW5rIiwiZmluYWxWZWNzIiwicmVkdWNlIiwiX3ZlYyIsInVuZGVmaW5lZCIsIkJhc2VGdW5jdGlvbkNsYXNzIiwibWFwcGVyIiwiUiIsInRva2VuQ2h1bmtNYXAiLCJtYXAiLCJ0IiwiX2NodW5rSWRzIiwidW56aXAiLCJ1bmlxIiwidmVjU2l6ZSIsInJhbmdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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TUFBSSxDQUFmLEVBQWlCLEtBQUtGLENBQUwsQ0FBT1EsS0FBUCxDQUFhLENBQWIsRUFBZ0JELE9BQWhCLENBQWpCLENBQVA7QUFDSDs7QUExQm9GLENBQXpGOztBQTRCZXBFLHlGQUFmLEU7Ozs7Ozs7Ozs7O0FDNUJBLDJGOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24ud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3ctbW9kZWxzL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQHRlbnNvcmZsb3ctbW9kZWxzL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyXCIsIFwiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvblwiXSA9IGZhY3RvcnkocmVxdWlyZShcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uXCJdID0gZmFjdG9yeShyb290W1wiQHRlbnNvcmZsb3ctbW9kZWxzL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyXCJdLCByb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC5tZW1jYWNoZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGVuc29yZmxvd19tb2RlbHNfdW5pdmVyc2FsX3NlbnRlbmNlX2VuY29kZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKlxuICogVGhpcyBDaHVua0xvb2t1cE1peGlucyBjbGFzcyBwcm92aWRlIG1peGlucyBmb3IgY2h1bmsgbG9va3VwIHRoYXQgZmlyc3QgbG9vayBmcm9tIHRoZSBjYWNoZWQgY2h1bmsgdGhlblxuICogZmV0Y2ggYW5kIGNhY2hlIG5ldyBjaHVua1xuICogQGNsYXNzIENodW5rTG9va3VwTWl4aW5zXG4gKiBAZXh0ZW5kcyB7ICBCYXNlV29yZEVtYmVkZGluZ0NsYXNzIH0gXG4gKi9cbmNvbnN0IENodW5rTG9va3VwTWl4aW5zID0gKCBCYXNlV29yZEVtYmVkZGluZ0NsYXNzICk9PiBjbGFzcyBleHRlbmRzIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3N7IFxuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc3RvcmFnZSBsb29rdXAgZnVuY3Rpb25cbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICBnZXQgQ2h1bmtMb29rVXAoKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgcmV0dXJuIChjaHVua0lkKT0+e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBDaHVua1BhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgY2h1bmtJZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rSXRlbSA9IGF3YWl0IFN0b3JhZ2UuZ2V0SXRlbShDaHVua1BhdGgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBjaHVua0l0ZW1bQ2h1bmtQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKGNodW5rKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgLyoqXG4gICAgKiBVcGRhdGUgdGhlIHN0b3JhZ2UgbG9va3VwXG4gICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gY2h1bmtJZCAtIGlkIGluIHBvc2l0aXZlIGludGVnZXIgcmFuZ2VcbiAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGNodW5rIC0gY2h1bmsgb2JqZWN0IGNvbnRhaW5pbmcgdG9rZW4ga2V5cyBhbmQgY29ycmVwb25kaW5nIHZlYyB2YWx1ZVxuICAgICogQHJldHVybnMgeyBTdHJpbmcgfSAtIHVwZGF0ZWQgY2h1bmsgcGF0aCBpbiBzdG9yYWdlXG4gICAgKi9cbiAgIGFzeW5jIHVwZGF0ZUNodW5rTG9va1VwKGNodW5rSWQsIGNodW5rKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgY29uc3QgVXBkYXRlQ2h1bmtQYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIGNodW5rSWQ7XG4gICAgICAgIHJldHVybiBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oVXBkYXRlQ2h1bmtQYXRoLCBjaHVuayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IGNodW5rIGVpdGhlciByZWFkIGZyb20gZmlsZSBvciBmZXRjaCBmcm9tIHJlbW90ZSBzZXJ2ZXJcbiAgICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gY2h1bmtJZCAtIGlkIGluIHBvc2l0aXZlIGludGVyZ2VyIHJhbmdlXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSAgY2h1bmsgb2JqZWN0IGNvbnRhaW5pbmcgdG9rZW4ga2V5cyBhbmQgY29ycmVwb25kaW5nIHZlYyB2YWx1ZVxuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5Q2h1bmsoY2h1bmtJZCl7XG4gICAgICAgIGNvbnN0IENodW5rVXJsID0gYCR7dGhpcy5iYXNlTGlua313b3JkdmVjX2NodW5rXyR7Y2h1bmtJZH0uanNvbmA7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnF1ZXJ5KENodW5rVXJsKTtcbiAgICB9XG4gICBcbn07XG5leHBvcnQgZGVmYXVsdCBDaHVua0xvb2t1cE1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIENodW5rTG9va3VwTWl4aW5zIH0gZnJvbSAnLi9jaHVua0xvb2t1cC5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vdG9rZW5Mb29rdXAubWl4aW5zJzsiLCJjb25zdCBUb2tlbkxvb2tVcE1peGlucyA9IChCYXNlV29yZEVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVdvcmRFbWJlZGRpbmdDbGFzc3sgXG4gICAgZ2V0IFRva2VuTG9va1VwKCl7XG4gICAgICAgIGNvbnN0IE1lbUNhY2hlID0gdGhpcy5NZW1DYWNoZTtcbiAgICAgICAgcmV0dXJuICh0b2tlbik9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZlYyA9IGF3YWl0IE1lbUNhY2hlLmdldEl0ZW0odGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2ZWMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IHRva2VuIC0gXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB2ZWMgLSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gb2YgdG9rZW5cbiAgICAgKi9cbiAgICBhc3luYyB1cGRhdGVUb2tlbkxvb2tVcCh0b2tlbiwgdmVjKXtcbiAgICAgICAgY29uc29sZS5lcnJvcigndGhpcyBpcyB1cGRhdGUnKTtcbiAgICAgICAgY29uc3QgTWVtQ2FjaGUgPSB0aGlzLk1lbUNhY2hlO1xuICAgICAgICBhd2FpdCBNZW1DYWNoZS5zZXRJdGVtKHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyB0b2tlbiwgdmVjKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9rZW5Mb29rVXBNaXhpbnM7XG4iLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0sIGZldGNoLCBqc29uVXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFN0b3JhZ2VNaXhpbnMsIGluZGV4REJTdG9yYWdlIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IE1lbUNhY2hlTWl4aW5zLCBtZW1Eb3duQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ01peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBDaHVua0xvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwL2NodW5rTG9va3VwLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFRva2VuTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAvdG9rZW5Mb29rdXAubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZnVuY3RvciB9IGZyb20gJy4vZnVuY3Rvcic7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0RW1iZWRkaW5nIHByb3ZpZGUgbWV0aG9kcyBmb3IgdHJhbnNmb3JtIHJhdyB0b2tlbml6ZWQgc2VudGVuY2UgaW50byBcbiAqIGl0cyBzaW5nbGUgdmVjdG9yIHJlcHJlc2VudGF0aW9uXG4gKiBtaXhXaXRoOlxuICogICAgICAgICBbICAgU3RvcmFnZU1peGlucywgXG4gKiAgICAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAqICAgICAgICAgICAgIFRva2VuTG9va1VwTWl4aW5zLFxuICogICAgICAgICAgICAgQ2h1bmtMb29rVXBNaXhpbnMsXG4gKiAgICAgICAgICAgICBXb3JkRW1iZWRkaW5nTWl4aW5zIF0pfVxuICogQGNsYXNzIENhdXNhbE5ldEVtYmVkZGluZ1xuICogQGV4dGVuZHMgIFRlbnNvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldEVtYmVkZGluZy5iYWJlbC5ub2RlLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRFbWJlZGRpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKFRlbnNvciwgXG4gICAgICAgIFsgICBTdG9yYWdlTWl4aW5zLCBcbiAgICAgICAgICAgIE1lbUNhY2hlTWl4aW5zLFxuICAgICAgICAgICAgVG9rZW5Mb29rVXBNaXhpbnMsXG4gICAgICAgICAgICBDaHVua0xvb2tVcE1peGlucyxcbiAgICAgICAgICAgIFdvcmRFbWJlZGRpbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5mZXRjaCA9IGZldGNoO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBpbmRleERCU3RvcmFnZTsgICAvL3N0b3JlIGNvbmZpZ3VyZVxuICAgICAgICB0aGlzLk1lbUNhY2hlID0gbWVtRG93bkNhY2hlOyAgICAvL3N0b3JlIGNodW5rc1xuICAgICAgICB0aGlzLmYgPSBmdW5jdG9yO1xuICAgICAgICB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoID0gJy9lbWJlZGRpbmcvJztcbiAgICAgICAgdGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgJ2Rlc2NyaXB0aW9uLmpzb24nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdmVjemllIGluIHBvc2l0aXZlIG51bWJlclxuICAgICAqXG4gICAgICogQHJlYWRvbmx5XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGdldCBWZWNTaXplKCl7XG4gICAgICAgIGlmKCF0aGlzLnZlY3NpemUpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3ZlY3NpemUgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZlY3NpemU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgY29uZmlndXJlIG9mIHByZXRyYWluZWQgdmVjdG9yIGZyb20gZWl0aGVyIGxvY2FsIGZvbGRlciBvciByZW1vdGUgc2VydmVyLiBcbiAgICAgKiBBZnRlciBjb25uZWN0LCB0aGUgcmVzdWx0IGlzIGNhY2hlZCBmb3IgbmV4dCB0aW1lIGluaXQuXG4gICAgICogQHBhcmFtIHsgVVJMfEZpbGVQYXRoIH0gbGluayAtIGxpbmsgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7IGJvb2xlYW4gfSBbcmVmcmVzaD1mYWxzZV0gLSBmb3JjZSB0byBkaXNjYXJkIGxvY2FsIGNhY2hlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH1cbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RW1iZWRkaW5nXG4gICAgICovXG4gICAgYXN5bmMgY29ubmVjdChsaW5rLCByZWZyZXNoPWZhbHNlKXtcbiAgICAgICAgdGhpcy5iYXNlTGluayA9IGxpbms7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldERlc2NyaXB0aW9uKHJlZnJlc2gpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgY29ubmVjdFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VGZWN0aD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBnZXREZXNjcmlwdGlvbihmb3JjZUZlY3RoPWZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMuZGVzY3JpcHRpb24pe1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbkl0ZW0gPSBhd2FpdCB0aGlzLlN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IEpTT04ucGFyc2UoZGVzY3JpcHRpb25JdGVtW3RoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHsnbG9hZCBkZXNjcmlwdGlvbiBmcm9tIHN0b3JhZ2UnOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLnF1ZXJ5RGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihmb3JjZUZlY3RoKXtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLnF1ZXJ5RGVzY3JpcHRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlRva2VuQ2h1bmtJZE1hcHBlciA9ICh0b2tlbik9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkYuZ2V0SW4oW3Rva2VuXSwgdGhpcy5kZXNjcmlwdGlvbi5jaHVua0xvb2tVcCwgbnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmVjc2l6ZSA9IHRoaXMuZGVzY3JpcHRpb24udmVjc2l6ZTsvL29ubHkgc2V0IGZyb20gaGVyZVxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZmV0Y2ggb3IgcmVhZCBjb25maWd1cmUgZGVwZW5kcyBvbiBwcm92aWVkIGxpbmsgZm9ybWF0XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0geyp9IGxpbmtcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqIEBtZW1iZXJvZiBDYXVzYWxOZXRFbWJlZGRpbmdcbiAgICAgKi9cbiAgICBhc3luYyBxdWVyeShsaW5rKXtcbiAgICAgICAgaWYobGluay5zdGFydHNXaXRoKCdodHRwJykpe1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGpzb25VdGlscy5mZXRjaEpzb24obGluayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBqc29uVXRpbHMucmVhZEpTT04obGluayk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogcXVlcnkgdGhlIGRlc2NyaXB0aW9uIGpzb24gXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7IE9iamVjdCB9IGRlc2NyaXB0aW9uIGpzb24gb2JqZWN0XG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5RGVzY3JpcHRpb24oKXtcbiAgICAgICAgY29uc3QgRGVzY3JpcHRpb25MaW5rID0gdGhpcy5iYXNlTGluayArICd3b3JkdmVjLmRlc2NyaXB0aW9uLmpzb24nO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7IERlc2NyaXB0aW9uTGluayB9KTtcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5xdWVyeShEZXNjcmlwdGlvbkxpbmspO1xuICAgICAgICBhd2FpdCB0aGlzLlN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGVzY3JpcHRpb24pKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXRFbWJlZGRpbmcoKTsiLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zJztcbi8qKlxuICogVGhpcyBGdW5jdGlvbiBjbGFzcyBwcm92aWRlcyBtZXRob2RzIGZvciBjb21tb24gdXNlZCB1bHRpbGl0aWVzIGZ1bmN0aW9uXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgRnVuY3Rpb25cbiAqIEBleHRlbmRzIEJhc2VGdW5jdG9yXG4gKi9cblxuY2xhc3MgRnVuY3RvciBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFxuICAgICAgICBbV29yZEVtYmVkZGluZ0Z1bmN0b3JNaXhpbnNdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJlcHJlc2VudGF0aW9uTWl4aW5zIH0gZnJvbSAnLi9yZXByZXNlbnRhdGlvbi5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRFbWJlZGRpbmcgfSBmcm9tICcuL2NhdXNhbE5ldEVtYmVkZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuaXZlcnNhbEVtYmVkZGluZyB9IGZyb20gJy4vdW5pdmVyc2FsRW1iZWRkaW5nJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV29yZEVtYmVkZGluZ01peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZy5taXhpbnMnO1xuZXhwb3J0IHsgQ2h1bmtMb29rdXBNaXhpbnMsIFRva2VuTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9Mb29rdXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZ0Z1bmN0b3IubWl4aW5zJzsiLCJpbXBvcnQgeyBUZW5zb3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnOyBcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIFJlcHJlc2VudGF0aW9uTWl4aW5zIHByb3ZpZGUgbWl4aW5zIGZvciBjb21wb3NpbmcgcGlwZWxpbmUgd2l0aCByZXByZXNlbnRhdGlvbiB0cmFuc2Zvcm0gZm9yIHRleHRcbiAqIEBjbGFzcyBSZXByZXNlbnRhdGlvbk1peGluc1xuICogQGV4dGVuZHMgIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvZW1iZWRkaW5nTWl4aW5zLmJhYmVsLm5vZGUuanNdXG4gKi9cbmNvbnN0IFJlcHJlc2VudGF0aW9uTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7IFxuICAgIC8qKlxuICAgICAqIFJldHVybiBFbWJlZGRpbmcgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBtZW1iZXJvZiBSZXByZXNlbnRhdGlvbk1peGluc1xuICAgICAqL1xuICAgIGdldCBSZXByZXNlbnRhdGlvbigpe1xuICAgICAgICBpZighdGhpcy5yZXByZXNlbnRhdGlvbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncmVwcmVzZW50YXRpb24gaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcHJlc2VudGF0aW9uO1xuICAgIH1cbiAgICBcbiAgICBzZXQgUmVwcmVzZW50YXRpb24ocmVwcmVzZW50YXRpb24pe1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKHJlcHJlc2VudGF0aW9uLCBUZW5zb3IpO1xuICAgICAgICB0aGlzLnJlcHJlc2VudGF0aW9uID0gcmVwcmVzZW50YXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvYWQgY29uZmlndXJlIG9mIHByZXRyYWluZWQgdmVjdG9yIGZyb20gZWl0aGVyIGxvY2FsIGZvbGRlciBvciByZW1vdGUgc2VydmVyLiBcbiAgICAgKiBBZnRlciBjb25uZWN0LCB0aGUgcmVzdWx0IGlzIGNhY2hlZCBmb3IgbmV4dCB0aW1lIGluaXQuXG4gICAgICogQHBhcmFtIHsgVVJMfEZpbGVQYXRoIH0gbGluayAtIGxpbmsgdG8gbG9hZFxuICAgICAqIEBwYXJhbSB7IGJvb2xlYW4gfSBbcmVmcmVzaD1mYWxzZV0gLSBmb3JjZSB0byBkaXNjYXJkIGxvY2FsIGNhY2hlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH1cbiAgICAgKiBAbWVtYmVyb2YgUmVwcmVzZW50YXRpb25NaXhpbnNcbiAgICAgKi9cbiAgICBhc3luYyBjb25uZWN0KCl7XG4gICAgICAgIGlmKHN1cGVyLmNvbm5lY3Qpe1xuICAgICAgICAgICAgc3VwZXIuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb25maWd1cmVMaW5rID0gdGhpcy5lbWJlZGRpbmdDb25maWc7XG4gICAgICAgIHRoaXMubG9nZ2VyLmxvZyhgcmVwcmVzZW50YXRpb24gY29ubmVjdCB0byAke2NvbmZpZ3VyZUxpbmt9YCk7XG4gICAgICAgIGF3YWl0IHRoaXMuUmVwcmVzZW50YXRpb24uY29ubmVjdChjb25maWd1cmVMaW5rKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogc2V0IGVtYmVkZGluZyBmb3IgcGlwZWxpbmVcbiAgICAgKiBAcGFyYW0geyBPYmplY3QgfSBuZXRDb25maWcgLSBjb250YWluIEVtYmVkZGluZyBpbnN0YW5jZSBhbmQgRW1iZWRkaW5nIGNvbmZpZ3VyZVxuICAgICAqIEBtZW1iZXJvZiBSZXByZXNlbnRhdGlvbk1peGluc1xuICAgICAqL1xuICAgIHNldFJlcHJlc2VudGF0aW9uQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgbGV0IHsgRW1iZWRkaW5nQ29uZmlnLCBFbWJlZGRpbmcgfSA9IG5ldENvbmZpZy5SZXByZXNlbnRhdGlvbjtcbiAgICAgICAgYXNzZXJ0LmJlSW5zdGFuY2VPZihFbWJlZGRpbmdDb25maWcsIFN0cmluZyk7XG4gICAgICAgIHRoaXMuUmVwcmVzZW50YXRpb24gPSBFbWJlZGRpbmc7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nQ29uZmlnID0gRW1iZWRkaW5nQ29uZmlnO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBSZXByZXNlbnRhdGlvbk1peGluczsgICAgIiwiaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBmZXRjaCB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKlxuICogVGhpcyBVbml2ZXJzaWFsRW1iZWRkaW5nIHByb3ZpZGUgbWV0aG9kcyBmb3IgdHJhbnNmb3JtIHNlbnRlbmNlcyBpbnRvIFxuICogaXRzIHNpbmdsZSB2ZWN0b3IgcmVwcmVzZW50YXRpb24gXG4gKiBiYXNlZCBvbiBbdXNlXShodHRwczovL2dpdGh1Yi5jb20vdGVuc29yZmxvdy90ZmpzLW1vZGVscy90cmVlL21hc3Rlci91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlcilcbiAqIEBjbGFzcyBVbml2ZXJzaWFsRW1iZWRkaW5nXG4gKiBAZXh0ZW5kcyBUZW5zb3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy91bml2ZXJzYWxFbWJlZGRpbmcuYmFiZWwuanNdXG4gKi9cbmNsYXNzIFVuaXZlcnNpYWxFbWJlZGRpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKFRlbnNvciwgW10pe1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZSB7IFRlbnNvck1vZGVsIH0gXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVzZSA9IHJlcXVpcmUoJ0B0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlcicpO1xuICAgICAgICB0aGlzLm1vZGVsID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgY29ubmVjdCgpe1xuICAgICAgICBpZihnbG9iYWwpe1xuICAgICAgICAgICAgLy9UT0RPOiBtYWtlIGJldHRlciB3aXRoIHBsYXRmb3JtXG4gICAgICAgICAgICBnbG9iYWwuZmV0Y2ggPSBmZXRjaC5mZXRjaDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsID0gYXdhaXQgdGhpcy51c2UubG9hZCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3luYyBzZW50ZW5jZUVuY29kZShzZW50ZW5jZXMpe1xuICAgICAgICBpZighdGhpcy5tb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgbW9kZWwgaXMgbm90IGNvbm5lY3RgKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZW1iZWRkaW5ncyA9IGF3YWl0IHRoaXMubW9kZWwuZW1iZWQoc2VudGVuY2VzKTtcbiAgICAgICAgcmV0dXJuIGVtYmVkZGluZ3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRoZSBldWNsZXVkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHJlcHJlc2VudGF0aW9uIHZlY3RvcnNcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gdmVjXG4gICAgICovXG4gICAgYXN5bmMgZW5jb2RlTWF0Y2hpbmcoc2VudGVuY2UxLCBzZW50ZW5jZTIpe1xuICAgICAgICBsZXQgeCA9IGF3YWl0IHRoaXMuc2VudGVuY2VFbmNvZGUoW3NlbnRlbmNlMV0pO1xuICAgICAgICB4ID0geC5yZXNoYXBlKFstMV0pO1xuICAgICAgICBsZXQgeSA9IGF3YWl0IHRoaXMuc2VudGVuY2VFbmNvZGUoW3NlbnRlbmNlMl0pO1xuICAgICAgICB5ID0geS5yZXNoYXBlKFstMV0pO1xuICAgICAgICByZXR1cm4geC5zdWIoeSkubm9ybSgpLmRpdih4Lm5vcm0oKS5tdWwoeS5ub3JtKCkpLnBvdygwLjUpKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgVW5pdmVyc2lhbEVtYmVkZGluZygpOyIsIi8qKlxuICogVGhpcyBXb3JkRW1iZWRkaW5nTWl4aW5zIGNsYXNzIGlzIHByb3ZpZGUgbWV0aG9kcyBmb3IgdHJhbnNmb3JuIHNlbnRlbmNlcywgdG9rZW5zIHRvIHZlY3RvcnNcbiAqIEBjbGFzcyBDYXVzYWxOZXRFbWJlZGRpbmdcbiAqIEBleHRlbmRzICBCYXNlRW1iZWRkaW5nQ2xhc3NcbiAqL1xuY29uc3QgV29yZEVtYmVkZGluZ01peGlucyA9IChCYXNlRW1iZWRkaW5nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRW1iZWRkaW5nQ2xhc3N7IFxuICAgIC8qKlxuICAgICAqIHJldHVybiBkZWZhdWx0IHJlcGxhY2VtZW50IGZvciB1bmtub3duIHZlYy4gQ3VycmVudGx5IGl0IGlzIHNldCB0byB6ZXJvc1xuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSB2ZWNcbiAgICAgKi9cbiAgICB1bmtub3dWZWMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZi56ZXJvVmVjKHRoaXMuVmVjU2l6ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRoZSBldWNsZXVkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHJlcHJlc2VudGF0aW9uIHZlY3RvcnNcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gdmVjXG4gICAgICovXG4gICAgYXN5bmMgZW5jb2RlTWF0Y2hpbmcoc2VudGVuY2UxLCBzZW50ZW5jZTIpe1xuICAgICAgICBsZXQgeCA9IGF3YWl0IHRoaXMuc2VudGVuY2VFbmNvZGUoW3NlbnRlbmNlMV0pO1xuICAgICAgICB4ID0geC5yZXNoYXBlKFstMV0pO1xuICAgICAgICBsZXQgeSA9IGF3YWl0IHRoaXMuc2VudGVuY2VFbmNvZGUoW3NlbnRlbmNlMl0pO1xuICAgICAgICB5ID0geS5yZXNoYXBlKFstMV0pO1xuICAgICAgICByZXR1cm4geC5zdWIoeSkubm9ybSgpLmRpdih4Lm5vcm0oKS5tdWwoeS5ub3JtKCkpLnBvdygwLjUpKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRoZSB2ZWN0b3JzIG9mIHRva2VuaXplZCBzZW50ZW5jZXNcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlcXVpcmUgc2VudGVuY2UgdG8gYmUgdG9rZW5pemVkIHZpYSBwcmVwcm9jZXNzaW5nXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5zIG9mIHNlbnRlbmNlXG4gICAgICogQHJldHVybnMgeyBUZW5zb3IgfSBlbmNvZGVkIHNlbnRlbmNlc1xuICAgICAqL1xuICAgIGFzeW5jIHNlbnRlbmNlRW5jb2RlKHNlbnRlbmNlcyl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGxldCBlbmNvZGVkU2VudGVuY2VzID0gW107XG4gICAgICAgIGZvcihsZXQgdG9rZW5zIG9mIHNlbnRlbmNlcyl7XG4gICAgICAgICAgICBsZXQgdmVjcyA9IGF3YWl0IHRoaXMudHJhbnNmb3JtKHRva2Vucyk7XG4gICAgICAgICAgICBsZXQgZW5jb2RlID0gYXdhaXQgVC50ZW5zb3IodmVjcykubWVhbigwKTtcbiAgICAgICAgICAgIGVuY29kZWRTZW50ZW5jZXMucHVzaChlbmNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBULnN0YWNrKGVuY29kZWRTZW50ZW5jZXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gdG9rZW5pemVkIHNlbnRlbmNlcyBpbnRvIHRlbnNvciB2ZWN0b3JzXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSAyZCBhcnJheSBmb3IgdG9rZW4gb2Ygc2VudGVuY2VzXG4gICAgICogQHJldHVybnMgeyBUZW5zb3IgfSAyZCB0ZW5zb3IgcmVwcmVzZW50IHZlY3RvcnMgb2YgZWFjaCBpbnB1dCBzZW50ZW5jZXNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGxldCBzZW50VmVjID0gYXdhaXQgY2F1c2FsTmV0RW1iZWRkaW5nLnNlbnRlbmNlRW5jb2RlKFsgWyd0aGlzJywgJ2lzJywgJ3Rlc3QnXSBdKTtcbiAgICAgKi9cbiAgICBhc3luYyB0cmFuc2Zvcm0odG9rZW5zKXtcbiAgICAgICAgY29uc3QgVG9rZW5Mb29rVXAgPSB0aGlzLlRva2VuTG9va1VwLCBDaHVua0xvb2tVcCA9IHRoaXMuQ2h1bmtMb29rVXA7XG4gICAgICAgIFxuICAgICAgICBsZXQgdmVjcyA9IFtdLCBtaXNzQ2FjaGVUb2tlbnM9W107XG4gICAgICAgIGZvcihsZXQgdG9rZW4gb2YgdG9rZW5zKXtcbiAgICAgICAgICAgIGxldCB2ZWMgPSBhd2FpdCBUb2tlbkxvb2tVcCh0b2tlbik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7W3Rva2VuXTogdmVjfSk7XG4gICAgICAgICAgICBpZih2ZWMgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgIG1pc3NDYWNoZVRva2VucyA9IFsuLi5taXNzQ2FjaGVUb2tlbnMsIHRva2VuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZlY3MgPSBbLi4udmVjcywgdG9rZW5dO1xuICAgICAgICB9XG4gICAgICAgIGlmKG1pc3NDYWNoZVRva2Vucy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHZlY3M7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCB7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9ID0gXG4gICAgICAgICAgICB0aGlzLkYubWFwVG9rZW5Ub0NodW5rSWRzKG1pc3NDYWNoZVRva2VucywgdGhpcy5Ub2tlbkNodW5rSWRNYXBwZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfSk7XG4gICAgICAgIGxldCBtYXN0ZXJjaHVuayA9IHt9O1xuICAgICAgICBmb3IobGV0IGNodW5rSWQgb2YgY2h1bmtJZHMpe1xuICAgICAgICAgICAgaWYoY2h1bmtJZCAhPT0gbnVsbCl7Ly9ub3QgaW4gY2h1bmtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9va3VwJyk7XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rID0gYXdhaXQgQ2h1bmtMb29rVXAoY2h1bmtJZCk7XG4gICAgICAgICAgICAgICAgaWYoY2h1bmsgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBjaHVuayA9IGF3YWl0IHRoaXMucXVlcnlDaHVuayhjaHVua0lkKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDaHVua0xvb2tVcChjaHVua0lkLCBjaHVuayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hc3RlcmNodW5rID0gey4uLm1hc3RlcmNodW5rLCAuLi5jaHVua307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBmaW5hbFZlY3MgPSB2ZWNzLnJlZHVjZSgoZmluYWxWZWNzLCB2ZWMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZih2ZWMpID09PSBcInN0cmluZ1wiICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdmVjID0gbWFzdGVyY2h1bmtbdmVjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoX3ZlYyA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92ZWMgPSB0aGlzLnVua25vd1ZlYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmVjcy5wdXNoKF92ZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZlY3MucHVzaCh2ZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxWZWNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gZmluYWxWZWNzO1xuICAgIH0gICBcbn07XG5leHBvcnQgZGVmYXVsdCBXb3JkRW1iZWRkaW5nTWl4aW5zOyIsImNvbnN0IFdvcmRFbWJlZGRpbmdGdW5jdG9yTWl4aW5zID0gKEJhc2VGdW5jdGlvbkNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VGdW5jdGlvbkNsYXNze1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBsaXN0IG9mIHRva2VucyB0byBmaW5kIGNvcmVzcG9uZGluZyBpZHNcbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IG1hcHBlciAtIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIG1hcFRva2VuVG9DaHVua0lkcyh0b2tlbnMsIG1hcHBlcil7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlI7XG4gICAgICAgIGNvbnN0IFRva2VuQ2h1bmtJZE1hcHBlciA9IG1hcHBlcjtcbiAgICAgICAgbGV0IHRva2VuQ2h1bmtNYXAgPSB0b2tlbnMubWFwKCB0ID0+IHtcbiAgICAgICAgICAgIGxldCBjaHVua0lkID0gVG9rZW5DaHVua0lkTWFwcGVyKHQpO1xuICAgICAgICAgICAgcmV0dXJuIFtbdCwgY2h1bmtJZF0sIGNodW5rSWRdOyBcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBbdG9rZW5DaHVua0lkcywgX2NodW5rSWRzXSA9IHRoaXMudW56aXAodG9rZW5DaHVua01hcCk7XG4gICAgICAgIGxldCBjaHVua0lkcyA9IFIudW5pcShfY2h1bmtJZHMpO1xuICAgICAgICBjb25zb2xlLmxvZyh7Y2h1bmtJZHMsIHRva2VuQ2h1bmtJZHN9KTtcbiAgICAgICAgcmV0dXJuIHt0b2tlbkNodW5rSWRzLCBjaHVua0lkc307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHJldHVybiB6ZXJvIHZlY3RvciBnaXZlbiB0aGUgdmVjIHNpemVcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSB2ZWNTaXplIC0gcG9zaXRpdmUgaW50ZWdlciBpbmRpY2F0ZXMgdmVjdG9yIGxlbmd0aFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSB6ZXJvIHZlY3RvclxuICAgICAqL1xuICAgIHplcm9WZWModmVjU2l6ZSl7XG4gICAgICAgIHJldHVybiB0aGlzLlIubWFwKCgpPT4wLHRoaXMuUi5yYW5nZSgwLCB2ZWNTaXplKSk7XG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBXb3JkRW1iZWRkaW5nRnVuY3Rvck1peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfbW9kZWxzX3VuaXZlcnNhbF9zZW50ZW5jZV9lbmNvZGVyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X21lbWNhY2hlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==