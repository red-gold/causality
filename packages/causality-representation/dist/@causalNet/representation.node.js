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
  get ChunkLookUp() {
    const Storage = this.Storage;
    return chunkId => {
      return new Promise(async (resolve, reject) => {
        try {
          const ChunkPath = this.embeddingSavePath + chunkId;
          let chunkItem = await Storage.getItem(ChunkPath);
          let chunk = chunkItem[ChunkPath];
          resolve(chunk);
        } catch (err) {
          resolve(null);
        }
      });
    };
  }

  async updateChunkLookUp(chunkId, chunk) {
    const Storage = this.Storage;
    const UpdateChunkPath = this.embeddingSavePath + chunkId;
    this.logger.debug({
      UpdateChunkPath
    });
    return await Storage.setItem(UpdateChunkPath, chunk);
  }

  async queryChunk(chunkId) {
    const ChunkUrl = `${this.baseLink}wordvec_chunk_${chunkId}.json`;
    return await this.query(ChunkUrl);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ChunkLookupMixins);

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

  async updateTokenLookUp(token, vec) {
    const MemCache = this.MemCache;
    MemCache.setItem(this.embeddingSavePath + token, vec);
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









class CausalNetEmbedding extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["StorageMixins"], causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__["MemCacheMixins"], _Lookup_tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_6__["default"], _Lookup_chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_5__["default"], _wordEmbedding_mixins__WEBPACK_IMPORTED_MODULE_4__["default"]]) {
  constructor() {
    super();
    this.Fetch = causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Fetch"]; //store configure

    this.Storage = causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["indexDBStorage"]; //store chunks

    this.MemCache = causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__["memDownCache"];
    this.F = new _function__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.embeddingSavePath = '/embedding/';
    this.embeddingDescriptionPath = this.embeddingSavePath + 'description.json';
  }

  get VecSize() {
    if (!this.vecsize) {
      throw Error('vecsize is not set');
    }

    return this.vecsize;
  }

  async connect(link, refresh = false) {
    this.baseLink = link;
    return await this.getDescription(refresh);
  }

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

  async query(link) {
    if (link.startsWith('http')) {
      return await causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].fetchJson(link);
    } else {
      return await causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["JSONUtils"].readJSON(link);
    }
  }

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
/*! exports provided: RepresentationMixins, causalNetEmbedding, universalEmbedding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _representation_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./representation.mixins */ "./src/representation.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepresentationMixins", function() { return _representation_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _causalNetEmbedding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./causalNetEmbedding */ "./src/causalNetEmbedding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetEmbedding", function() { return _causalNetEmbedding__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _universalEmbedding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./universalEmbedding */ "./src/universalEmbedding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "universalEmbedding", function() { return _universalEmbedding__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/representation.mixins.js":
/*!**************************************!*\
  !*** ./src/representation.mixins.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const RepresentationMixins = BaseTensorClass => class extends BaseTensorClass {
  get Representation() {
    if (!this.representation) {
      throw Error('representation is not set');
    }

    return this.representation;
  }

  set Representation(representation) {
    if (!representation) {
      throw Error(`expect representation instance, got ${embedding}`);
    }

    this.representation = representation;
  }

  async connect() {
    let configureLink = this.representationConfigureLink;

    if (super.connect) {
      super.connect();
    }

    this.logger.log(`representation connect to ${configureLink}`);
    await this.Representation.connect(configureLink);
  }

  setRepresentationByConfig(netConfig) {
    let configureLink = netConfig.Representation;
    causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["Assert"].beInstanceOf(configureLink, String);
    this.representationConfigureLink = configureLink;
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
/* harmony import */ var _tensorflow_models_universal_sentence_encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow-models/universal-sentence-encoder */ "@tensorflow-models/universal-sentence-encoder");
/* harmony import */ var _tensorflow_models_universal_sentence_encoder__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tensorflow_models_universal_sentence_encoder__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_2__);




class UniversialEmbedding extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_2__["Tensor"], []) {
  constructor() {
    super();
    /**
     * @private { TensorModel } 
     */

    this.use = _tensorflow_models_universal_sentence_encoder__WEBPACK_IMPORTED_MODULE_0__;
    this.model = null;
  }

  async connect() {
    this.use.bind(this);
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


const WordEmbeddingMixins = BaseEmbeddingClass => class extends BaseEmbeddingClass {
  /**
   * return default replacement for unknown vec. Currently it is set to zeros
   * @returns [ Array ] zero vecs
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
      let chunk = chunkId === null ? {} : await ChunkLookUp(chunkId);

      if (chunk === null) {
        this.logger.debug({
          chunkId
        });
        chunk = await this.queryChunk(chunkId);
        this.logger.debug({
          chunk
        });
        await this.updateChunkLookUp(chunkId, chunk);
      }

      masterchunk = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, masterchunk, chunk);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvTG9va3VwL2NodW5rTG9va3VwLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL0xvb2t1cC90b2tlbkxvb2t1cC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9jYXVzYWxOZXRFbWJlZGRpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvcmVwcmVzZW50YXRpb24ubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvdW5pdmVyc2FsRW1iZWRkaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvd29yZEVtYmVkZGluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy93b3JkRW1iZWRkaW5nRnVuY3Rpb24ubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDaHVua0xvb2t1cE1peGlucyIsIkJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MiLCJDaHVua0xvb2tVcCIsIlN0b3JhZ2UiLCJjaHVua0lkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJDaHVua1BhdGgiLCJlbWJlZGRpbmdTYXZlUGF0aCIsImNodW5rSXRlbSIsImdldEl0ZW0iLCJjaHVuayIsImVyciIsInVwZGF0ZUNodW5rTG9va1VwIiwiVXBkYXRlQ2h1bmtQYXRoIiwibG9nZ2VyIiwiZGVidWciLCJzZXRJdGVtIiwicXVlcnlDaHVuayIsIkNodW5rVXJsIiwiYmFzZUxpbmsiLCJxdWVyeSIsIlRva2VuTG9va1VwTWl4aW5zIiwiVG9rZW5Mb29rVXAiLCJNZW1DYWNoZSIsInRva2VuIiwidmVjIiwidXBkYXRlVG9rZW5Mb29rVXAiLCJDYXVzYWxOZXRFbWJlZGRpbmciLCJQbGF0Zm9ybSIsIm1peFdpdGgiLCJUZW5zb3IiLCJTdG9yYWdlTWl4aW5zIiwiTWVtQ2FjaGVNaXhpbnMiLCJDaHVua0xvb2tVcE1peGlucyIsIldvcmRFbWJlZGRpbmdNaXhpbnMiLCJjb25zdHJ1Y3RvciIsIkZldGNoIiwiaW5kZXhEQlN0b3JhZ2UiLCJtZW1Eb3duQ2FjaGUiLCJGIiwiRnVuY3Rpb24iLCJlbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgiLCJWZWNTaXplIiwidmVjc2l6ZSIsIkVycm9yIiwiY29ubmVjdCIsImxpbmsiLCJyZWZyZXNoIiwiZ2V0RGVzY3JpcHRpb24iLCJmb3JjZUZlY3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkl0ZW0iLCJKU09OIiwicGFyc2UiLCJxdWVyeURlc2NyaXB0aW9uIiwiVG9rZW5DaHVua0lkTWFwcGVyIiwiZ2V0SW4iLCJjaHVua0xvb2tVcCIsInN0YXJ0c1dpdGgiLCJKU09OVXRpbHMiLCJmZXRjaEpzb24iLCJyZWFkSlNPTiIsIkRlc2NyaXB0aW9uTGluayIsInN0cmluZ2lmeSIsIkJhc2VGdW5jdGlvbiIsIldvcmRFbWJlZGRpbmdGdW5jdGlvbk1peGlucyIsIlJlcHJlc2VudGF0aW9uTWl4aW5zIiwiQmFzZVRlbnNvckNsYXNzIiwiUmVwcmVzZW50YXRpb24iLCJyZXByZXNlbnRhdGlvbiIsImVtYmVkZGluZyIsImNvbmZpZ3VyZUxpbmsiLCJyZXByZXNlbnRhdGlvbkNvbmZpZ3VyZUxpbmsiLCJsb2ciLCJzZXRSZXByZXNlbnRhdGlvbkJ5Q29uZmlnIiwibmV0Q29uZmlnIiwiQXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiU3RyaW5nIiwiVW5pdmVyc2lhbEVtYmVkZGluZyIsInVzZSIsIm1vZGVsIiwiYmluZCIsImxvYWQiLCJzZW50ZW5jZUVuY29kZSIsInNlbnRlbmNlcyIsImVtYmVkZGluZ3MiLCJlbWJlZCIsIkJhc2VFbWJlZGRpbmdDbGFzcyIsInVua25vd1ZlYyIsInplcm9WZWMiLCJUIiwiZW5jb2RlZFNlbnRlbmNlcyIsInRva2VucyIsInZlY3MiLCJ0cmFuc2Zvcm0iLCJlbmNvZGUiLCJ0ZW5zb3IiLCJtZWFuIiwicHVzaCIsInN0YWNrIiwibWlzc0NhY2hlVG9rZW5zIiwibGVuZ3RoIiwidG9rZW5DaHVua0lkcyIsImNodW5rSWRzIiwibWFwVG9rZW5Ub0NodW5rSWRzIiwibWFzdGVyY2h1bmsiLCJmaW5hbFZlY3MiLCJyZWR1Y2UiLCJfdmVjIiwidW5kZWZpbmVkIiwiQmFzZUZ1bmN0aW9uQ2xhc3MiLCJtYXBwZXIiLCJSIiwidG9rZW5DaHVua01hcCIsIm1hcCIsInQiLCJfY2h1bmtJZHMiLCJ1bnppcCIsInVuaXEiLCJjb25zb2xlIiwidmVjU2l6ZSIsInJhbmdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFD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O0FBQ0g7O0FBRURkLFNBQU8sQ0FBQytCLE9BQUQsRUFBUztBQUNaLFdBQU8sS0FBS1IsQ0FBTCxDQUFPRSxHQUFQLENBQVcsTUFBSSxDQUFmLEVBQWlCLEtBQUtGLENBQUwsQ0FBT1MsS0FBUCxDQUFhLENBQWIsRUFBZ0JELE9BQWhCLENBQWpCLENBQVA7QUFDSDs7QUFoQnFGLENBQTFGOztBQWtCZXhELDBGQUFmLEU7Ozs7Ozs7Ozs7O0FDbEJBLDJGOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24ubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiLCBcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb25cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvblwiXSA9IGZhY3Rvcnkocm9vdFtcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiXSwgcm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQubWVtY2FjaGVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX3RlbnNvcmZsb3dfbW9kZWxzX3VuaXZlcnNhbF9zZW50ZW5jZV9lbmNvZGVyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuL2RlZmluZVByb3BlcnR5XCIpO1xuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFNwcmVhZDsiLCIvKipcbiAqIFRoaXMgQ2h1bmtMb29rdXBNaXhpbnMgY2xhc3MgcHJvdmlkZSBtaXhpbnMgZm9yIGNodW5rIGxvb2t1cCB0aGF0IGZpcnN0IGxvb2sgZnJvbSB0aGUgY2FjaGVkIGNodW5rIHRoZW5cbiAqIGZldGNoIGFuZCBjYWNoZSBuZXcgY2h1bmtcbiAqIEBjbGFzcyBDaHVua0xvb2t1cE1peGluc1xuICogQGV4dGVuZHMgeyAgQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyB9IFxuICovXG5jb25zdCBDaHVua0xvb2t1cE1peGlucyA9ICggQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyApPT4gY2xhc3MgZXh0ZW5kcyBCYXNlV29yZEVtYmVkZGluZ0NsYXNzeyBcbiAgICBcbiAgICBcbiAgICBnZXQgQ2h1bmtMb29rVXAoKXtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgcmV0dXJuIChjaHVua0lkKT0+e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBDaHVua1BhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgY2h1bmtJZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rSXRlbSA9IGF3YWl0IFN0b3JhZ2UuZ2V0SXRlbShDaHVua1BhdGgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmsgPSBjaHVua0l0ZW1bQ2h1bmtQYXRoXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjaHVuayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgXG4gICAgYXN5bmMgdXBkYXRlQ2h1bmtMb29rVXAoY2h1bmtJZCwgY2h1bmspe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICBjb25zdCBVcGRhdGVDaHVua1BhdGggPSB0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgY2h1bmtJZDtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoeyBVcGRhdGVDaHVua1BhdGggfSk7XG4gICAgICAgIHJldHVybiBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oVXBkYXRlQ2h1bmtQYXRoLCBjaHVuayk7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnlDaHVuayhjaHVua0lkKXtcbiAgICAgICAgY29uc3QgQ2h1bmtVcmwgPSBgJHt0aGlzLmJhc2VMaW5rfXdvcmR2ZWNfY2h1bmtfJHtjaHVua0lkfS5qc29uYDtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcnkoQ2h1bmtVcmwpO1xuICAgIH1cbiAgIFxufTtcbmV4cG9ydCBkZWZhdWx0IENodW5rTG9va3VwTWl4aW5zOyIsImNvbnN0IFRva2VuTG9va1VwTWl4aW5zID0gKEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlV29yZEVtYmVkZGluZ0NsYXNzeyBcbiAgICBcbiAgICBnZXQgVG9rZW5Mb29rVXAoKXtcbiAgICAgICAgY29uc3QgTWVtQ2FjaGUgPSB0aGlzLk1lbUNhY2hlO1xuICAgICAgICByZXR1cm4gKHRva2VuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmVjID0gYXdhaXQgTWVtQ2FjaGUuZ2V0SXRlbSh0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZlYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgdXBkYXRlVG9rZW5Mb29rVXAodG9rZW4sIHZlYyl7XG4gICAgICAgIGNvbnN0IE1lbUNhY2hlID0gdGhpcy5NZW1DYWNoZTtcbiAgICAgICAgTWVtQ2FjaGUuc2V0SXRlbSh0aGlzLmVtYmVkZGluZ1NhdmVQYXRoICsgdG9rZW4sIHZlYyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuTG9va1VwTWl4aW5zO1xuIiwiaW1wb3J0IHsgVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBGZXRjaCwgSlNPTlV0aWxzIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBTdG9yYWdlTWl4aW5zLCBpbmRleERCU3RvcmFnZSB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyBNZW1DYWNoZU1peGlucywgbWVtRG93bkNhY2hlIH0gZnJvbSAnY2F1c2FsLW5ldC5tZW1jYWNoZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFdvcmRFbWJlZGRpbmdNaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmcubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgQ2h1bmtMb29rVXBNaXhpbnMgfSBmcm9tICcuL0xvb2t1cC9jaHVua0xvb2t1cC5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vTG9va3VwL3Rva2VuTG9va3VwLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEZ1bmN0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbic7XG5cbmNsYXNzIENhdXNhbE5ldEVtYmVkZGluZyBleHRlbmRzIFBsYXRmb3JtLm1peFdpdGgoVGVuc29yLCBcbiAgICAgICAgWyAgIFN0b3JhZ2VNaXhpbnMsIFxuICAgICAgICAgICAgTWVtQ2FjaGVNaXhpbnMsXG4gICAgICAgICAgICBUb2tlbkxvb2tVcE1peGlucyxcbiAgICAgICAgICAgIENodW5rTG9va1VwTWl4aW5zLFxuICAgICAgICAgICAgV29yZEVtYmVkZGluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLkZldGNoID0gRmV0Y2g7XG4gICAgICAgIC8vc3RvcmUgY29uZmlndXJlXG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IGluZGV4REJTdG9yYWdlO1xuICAgICAgICAvL3N0b3JlIGNodW5rc1xuICAgICAgICB0aGlzLk1lbUNhY2hlID0gbWVtRG93bkNhY2hlO1xuICAgICAgICB0aGlzLkYgPSBuZXcgRnVuY3Rpb24oKTtcbiAgICAgICAgdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCA9ICcvZW1iZWRkaW5nLyc7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArICdkZXNjcmlwdGlvbi5qc29uJztcbiAgICB9XG4gICAgXG4gICAgZ2V0IFZlY1NpemUoKXtcbiAgICAgICAgaWYoIXRoaXMudmVjc2l6ZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndmVjc2l6ZSBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmVjc2l6ZTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgY29ubmVjdChsaW5rLCByZWZyZXNoPWZhbHNlKXtcbiAgICAgICAgdGhpcy5iYXNlTGluayA9IGxpbms7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmdldERlc2NyaXB0aW9uKHJlZnJlc2gpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldERlc2NyaXB0aW9uKGZvcmNlRmVjdGg9ZmFsc2Upe1xuICAgICAgICBpZighdGhpcy5kZXNjcmlwdGlvbil7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uSXRlbSA9IGF3YWl0IHRoaXMuU3RvcmFnZS5nZXRJdGVtKHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gSlNPTi5wYXJzZShkZXNjcmlwdGlvbkl0ZW1bdGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoeydsb2FkIGRlc2NyaXB0aW9uIGZyb20gc3RvcmFnZSc6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnlEZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGZvcmNlRmVjdGgpe1xuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnlEZXNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuVG9rZW5DaHVua0lkTWFwcGVyID0gKHRva2VuKT0+e1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuRi5nZXRJbihbdG9rZW5dLCB0aGlzLmRlc2NyaXB0aW9uLmNodW5rTG9va1VwLCBudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52ZWNzaXplID0gdGhpcy5kZXNjcmlwdGlvbi52ZWNzaXplOy8vb25seSBzZXQgZnJvbSBoZXJlXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGFzeW5jIHF1ZXJ5KGxpbmspe1xuICAgICAgICBpZihsaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSl7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgSlNPTlV0aWxzLmZldGNoSnNvbihsaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IEpTT05VdGlscy5yZWFkSlNPTihsaW5rKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBxdWVyeURlc2NyaXB0aW9uKCl7XG4gICAgICAgIGNvbnN0IERlc2NyaXB0aW9uTGluayA9IHRoaXMuYmFzZUxpbmsgKyAnd29yZHZlYy5kZXNjcmlwdGlvbi5qc29uJztcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoeyBEZXNjcmlwdGlvbkxpbmsgfSk7XG4gICAgICAgIHZhciBkZXNjcmlwdGlvbiA9IHRoaXMucXVlcnkoRGVzY3JpcHRpb25MaW5rKTtcbiAgICAgICAgYXdhaXQgdGhpcy5TdG9yYWdlLnNldEl0ZW0odGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgsIEpTT04uc3RyaW5naWZ5KGRlc2NyaXB0aW9uKSk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0RW1iZWRkaW5nKCk7IiwiaW1wb3J0IHsgRnVuY3Rpb24gYXMgQmFzZUZ1bmN0aW9uIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFdvcmRFbWJlZGRpbmdGdW5jdGlvbk1peGlucyB9IGZyb20gJy4vd29yZEVtYmVkZGluZ0Z1bmN0aW9uLm1peGlucyc7XG4vKipcbiAqIFRoaXMgRnVuY3Rpb24gY2xhc3MgcHJvdmlkZXMgbWV0aG9kcyBmb3IgY29tbW9uIHVzZWQgdWx0aWxpdGllcyBmdW5jdGlvblxuICogQGV4cG9ydFxuICogQGNsYXNzIEZ1bmN0aW9uXG4gKiBAZXh0ZW5kcyBCYXNlRnVuY3Rpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdGlvbiwgXG4gICAgICAgIFtXb3JkRW1iZWRkaW5nRnVuY3Rpb25NaXhpbnNdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJlcHJlc2VudGF0aW9uTWl4aW5zIH0gZnJvbSAnLi9yZXByZXNlbnRhdGlvbi5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRFbWJlZGRpbmcgfSBmcm9tICcuL2NhdXNhbE5ldEVtYmVkZGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuaXZlcnNhbEVtYmVkZGluZyB9IGZyb20gJy4vdW5pdmVyc2FsRW1iZWRkaW5nJzsiLCJpbXBvcnQgeyBBc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IFJlcHJlc2VudGF0aW9uTWl4aW5zID0gKEJhc2VUZW5zb3JDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VUZW5zb3JDbGFzc3sgXG4gICAgZ2V0IFJlcHJlc2VudGF0aW9uKCl7XG4gICAgICAgIGlmKCF0aGlzLnJlcHJlc2VudGF0aW9uKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdyZXByZXNlbnRhdGlvbiBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVwcmVzZW50YXRpb247XG4gICAgfVxuICAgIHNldCBSZXByZXNlbnRhdGlvbihyZXByZXNlbnRhdGlvbil7XG4gICAgICAgIGlmKCFyZXByZXNlbnRhdGlvbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHJlcHJlc2VudGF0aW9uIGluc3RhbmNlLCBnb3QgJHtlbWJlZGRpbmd9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXByZXNlbnRhdGlvbiA9IHJlcHJlc2VudGF0aW9uO1xuICAgIH1cblxuICAgIGFzeW5jIGNvbm5lY3QoKXtcbiAgICAgICAgbGV0IGNvbmZpZ3VyZUxpbmsgPSB0aGlzLnJlcHJlc2VudGF0aW9uQ29uZmlndXJlTGluaztcbiAgICAgICAgaWYoc3VwZXIuY29ubmVjdCl7XG4gICAgICAgICAgICBzdXBlci5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2dnZXIubG9nKGByZXByZXNlbnRhdGlvbiBjb25uZWN0IHRvICR7Y29uZmlndXJlTGlua31gKTtcbiAgICAgICAgYXdhaXQgdGhpcy5SZXByZXNlbnRhdGlvbi5jb25uZWN0KGNvbmZpZ3VyZUxpbmspO1xuICAgIH1cbiAgICBcbiAgICBzZXRSZXByZXNlbnRhdGlvbkJ5Q29uZmlnKG5ldENvbmZpZyl7XG4gICAgICAgIGxldCBjb25maWd1cmVMaW5rID0gbmV0Q29uZmlnLlJlcHJlc2VudGF0aW9uO1xuICAgICAgICBBc3NlcnQuYmVJbnN0YW5jZU9mKGNvbmZpZ3VyZUxpbmssIFN0cmluZyk7XG4gICAgICAgIHRoaXMucmVwcmVzZW50YXRpb25Db25maWd1cmVMaW5rID0gY29uZmlndXJlTGluaztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVwcmVzZW50YXRpb25NaXhpbnM7ICAgICIsImltcG9ydCAqIGFzIHVzZSBmcm9tICdAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXInO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5jbGFzcyBVbml2ZXJzaWFsRW1iZWRkaW5nIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsIFtdKXtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGUgeyBUZW5zb3JNb2RlbCB9IFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51c2UgPSB1c2U7XG4gICAgICAgIHRoaXMubW9kZWwgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBjb25uZWN0KCl7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZGVsID0gYXdhaXQgdGhpcy51c2UubG9hZCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhc3luYyBzZW50ZW5jZUVuY29kZShzZW50ZW5jZXMpe1xuICAgICAgICBpZighdGhpcy5tb2RlbCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgbW9kZWwgaXMgbm90IGNvbm5lY3RgKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZW1iZWRkaW5ncyA9IGF3YWl0IHRoaXMubW9kZWwuZW1iZWQoc2VudGVuY2VzKTtcbiAgICAgICAgcmV0dXJuIGVtYmVkZGluZ3M7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFVuaXZlcnNpYWxFbWJlZGRpbmcoKTsiLCJjb25zdCBXb3JkRW1iZWRkaW5nTWl4aW5zID0gKEJhc2VFbWJlZGRpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VFbWJlZGRpbmdDbGFzc3sgXG4gICAgLyoqXG4gICAgICogcmV0dXJuIGRlZmF1bHQgcmVwbGFjZW1lbnQgZm9yIHVua25vd24gdmVjLiBDdXJyZW50bHkgaXQgaXMgc2V0IHRvIHplcm9zXG4gICAgICogQHJldHVybnMgWyBBcnJheSBdIHplcm8gdmVjc1xuICAgICAqL1xuICAgIHVua25vd1ZlYygpe1xuICAgICAgICByZXR1cm4gdGhpcy5GLnplcm9WZWModGhpcy5WZWNTaXplKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogcmV0dXJuIHRoZSB2ZWN0b3JzIG9mIHRva2VuaXplZCBzZW50ZW5jZXNcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHJlcXVpcmUgc2VudGVuY2UgdG8gYmUgdG9rZW5pemVkIHZpYSBwcmVwcm9jZXNzaW5nXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5zIG9mIHNlbnRlbmNlXG4gICAgICogQHJldHVybnMgeyBUZW5zb3IgfSBlbmNvZGVkIHNlbnRlbmNlc1xuICAgICAqL1xuICAgIGFzeW5jIHNlbnRlbmNlRW5jb2RlKHNlbnRlbmNlcyl7XG4gICAgICAgIGNvbnN0IFQgPSB0aGlzLlQ7XG4gICAgICAgIGxldCBlbmNvZGVkU2VudGVuY2VzID0gW107XG4gICAgICAgIGZvcihsZXQgdG9rZW5zIG9mIHNlbnRlbmNlcyl7XG4gICAgICAgICAgICBsZXQgdmVjcyA9IGF3YWl0IHRoaXMudHJhbnNmb3JtKHRva2Vucyk7XG4gICAgICAgICAgICBsZXQgZW5jb2RlID0gYXdhaXQgVC50ZW5zb3IodmVjcykubWVhbigwKTtcbiAgICAgICAgICAgIGVuY29kZWRTZW50ZW5jZXMucHVzaChlbmNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBULnN0YWNrKGVuY29kZWRTZW50ZW5jZXMpO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyB0cmFuc2Zvcm0odG9rZW5zKXtcbiAgICAgICAgY29uc3QgVG9rZW5Mb29rVXAgPSB0aGlzLlRva2VuTG9va1VwLCBDaHVua0xvb2tVcCA9IHRoaXMuQ2h1bmtMb29rVXA7XG4gICAgICAgIFxuICAgICAgICBsZXQgdmVjcyA9IFtdLCBtaXNzQ2FjaGVUb2tlbnM9W107XG4gICAgICAgIGZvcihsZXQgdG9rZW4gb2YgdG9rZW5zKXtcbiAgICAgICAgICAgIGxldCB2ZWMgPSBhd2FpdCBUb2tlbkxvb2tVcCh0b2tlbik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7W3Rva2VuXTogdmVjfSk7XG4gICAgICAgICAgICBpZih2ZWMgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgIG1pc3NDYWNoZVRva2VucyA9IFsuLi5taXNzQ2FjaGVUb2tlbnMsIHRva2VuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZlY3MgPSBbLi4udmVjcywgdG9rZW5dO1xuICAgICAgICB9XG4gICAgICAgIGlmKG1pc3NDYWNoZVRva2Vucy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHZlY3M7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCB7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9ID0gXG4gICAgICAgICAgICB0aGlzLkYubWFwVG9rZW5Ub0NodW5rSWRzKG1pc3NDYWNoZVRva2VucywgdGhpcy5Ub2tlbkNodW5rSWRNYXBwZXIpO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9KTtcbiAgICAgICAgbGV0IG1hc3RlcmNodW5rID0ge307XG4gICAgICAgIGZvcihsZXQgY2h1bmtJZCBvZiBjaHVua0lkcyl7XG4gICAgICAgICAgICBsZXQgY2h1bmsgPSAoY2h1bmtJZCA9PT0gbnVsbCk/e306YXdhaXQgQ2h1bmtMb29rVXAoY2h1bmtJZCk7XG4gICAgICAgICAgICBpZihjaHVuayA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoeyBjaHVua0lkIH0pO1xuICAgICAgICAgICAgICAgIGNodW5rID0gYXdhaXQgdGhpcy5xdWVyeUNodW5rKGNodW5rSWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHsgY2h1bmsgfSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDaHVua0xvb2tVcChjaHVua0lkLCBjaHVuayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXN0ZXJjaHVuayA9IHsuLi5tYXN0ZXJjaHVuaywgLi4uY2h1bmt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbmFsVmVjcyA9IHZlY3MucmVkdWNlKChmaW5hbFZlY3MsIHZlYyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YodmVjKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdmVjID0gbWFzdGVyY2h1bmtbdmVjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoX3ZlYyA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92ZWMgPSB0aGlzLnVua25vd1ZlYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmVjcy5wdXNoKF92ZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZlY3MucHVzaCh2ZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxWZWNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gZmluYWxWZWNzO1xuICAgIH0gICBcbn07XG5leHBvcnQgZGVmYXVsdCBXb3JkRW1iZWRkaW5nTWl4aW5zOyIsImNvbnN0IFdvcmRFbWJlZGRpbmdGdW5jdGlvbk1peGlucyA9IChCYXNlRnVuY3Rpb25DbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlRnVuY3Rpb25DbGFzc3tcbiAgICBtYXBUb2tlblRvQ2h1bmtJZHModG9rZW5zLCBtYXBwZXIpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBUb2tlbkNodW5rSWRNYXBwZXIgPSBtYXBwZXI7XG4gICAgICAgIGxldCB0b2tlbkNodW5rTWFwID0gdG9rZW5zLm1hcCggdCA9PiB7XG4gICAgICAgICAgICBsZXQgY2h1bmtJZCA9IFRva2VuQ2h1bmtJZE1hcHBlcih0KTtcbiAgICAgICAgICAgIHJldHVybiBbW3QsIGNodW5rSWRdLCBjaHVua0lkXTsgXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgW3Rva2VuQ2h1bmtJZHMsIF9jaHVua0lkc10gPSB0aGlzLnVuemlwKHRva2VuQ2h1bmtNYXApO1xuICAgICAgICBsZXQgY2h1bmtJZHMgPSBSLnVuaXEoX2NodW5rSWRzKTtcbiAgICAgICAgY29uc29sZS5sb2coe2NodW5rSWRzLCB0b2tlbkNodW5rSWRzfSk7XG4gICAgICAgIHJldHVybiB7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9O1xuICAgIH1cblxuICAgIHplcm9WZWModmVjU2l6ZSl7XG4gICAgICAgIHJldHVybiB0aGlzLlIubWFwKCgpPT4wLHRoaXMuUi5yYW5nZSgwLCB2ZWNTaXplKSk7XG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBXb3JkRW1iZWRkaW5nRnVuY3Rpb25NaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X21vZGVsc191bml2ZXJzYWxfc2VudGVuY2VfZW5jb2Rlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fOyJdLCJzb3VyY2VSb290IjoiIn0=