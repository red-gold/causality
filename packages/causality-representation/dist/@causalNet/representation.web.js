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

/***/ "./src/WordEmbedding/chunkLookup.mixins.js":
/*!*************************************************!*\
  !*** ./src/WordEmbedding/chunkLookup.mixins.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ChunkLookupMixins = BaseWordEmbeddingClass => class extends BaseWordEmbeddingClass {
  get ChunkLookUp() {
    const Storage = this.Storage;
    return chunkId => {
      return new Promise(async (resolve, reject) => {
        try {
          const LOOK_UP_CHUNK_PATH = this.embeddingSavePath + chunkId;
          this.logger.debug({
            LOOK_UP_CHUNK_PATH
          });
          let chunkItem = await Storage.getItem(LOOK_UP_CHUNK_PATH);
          let chunk = chunkItem[LOOK_UP_CHUNK_PATH];
          resolve(JSON.parse(chunk));
        } catch (err) {
          resolve(null);
        }
      });
    };
  }

  async updateChunkLookUp(chunkId, chunk) {
    const Storage = this.Storage;
    const UPDATE_CHUNK_PATH = this.embeddingSavePath + chunkId;
    this.logger.debug({
      UPDATE_CHUNK_PATH
    });
    return await Storage.setItem(UPDATE_CHUNK_PATH, JSON.stringify(chunk));
  }

  async fetchChunk(chunkId) {
    const CHUNK_URL = `${this.baseURL}wordvec_chunk_${chunkId}.json`;
    this.logger.debug(CHUNK_URL);
    return await this.Fetch.fetchJson(CHUNK_URL);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ChunkLookupMixins);

/***/ }),

/***/ "./src/WordEmbedding/function.js":
/*!***************************************!*\
  !*** ./src/WordEmbedding/function.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Function; });
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordEmbeddingFunction_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wordEmbeddingFunction.mixins */ "./src/WordEmbedding/wordEmbeddingFunction.mixins.js");



class Function extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], [_wordEmbeddingFunction_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
  constructor() {
    super();
  }

}

/***/ }),

/***/ "./src/WordEmbedding/index.js":
/*!************************************!*\
  !*** ./src/WordEmbedding/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordVec_EN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wordVec.EN */ "./src/WordEmbedding/wordVec.EN.js");

let causalNetWordVec = {
  language: ['EN'],

  get EN() {
    return new Promise(async (resolve, reject) => {
      await _wordVec_EN__WEBPACK_IMPORTED_MODULE_0__["default"].getDescription();
      resolve(_wordVec_EN__WEBPACK_IMPORTED_MODULE_0__["default"]);
    });
  }

};
/* harmony default export */ __webpack_exports__["default"] = (causalNetWordVec);

/***/ }),

/***/ "./src/WordEmbedding/tokenLookup.mixins.js":
/*!*************************************************!*\
  !*** ./src/WordEmbedding/tokenLookup.mixins.js ***!
  \*************************************************/
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
          resolve(JSON.parse(vec));
        } catch (err) {
          resolve(null);
        }
      });
    };
  }

  async updateTokenLookUp(token, vec) {
    const MemCache = this.MemCache;
    MemCache.setItem(this.embeddingSavePath + token, JSON.stringify(vec));
  }

};

/* harmony default export */ __webpack_exports__["default"] = (TokenLookUpMixins);

/***/ }),

/***/ "./src/WordEmbedding/wordEmbeddingFunction.mixins.js":
/*!***********************************************************!*\
  !*** ./src/WordEmbedding/wordEmbeddingFunction.mixins.js ***!
  \***********************************************************/
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

/***/ "./src/WordEmbedding/wordEmbeddingTransform.mixins.js":
/*!************************************************************!*\
  !*** ./src/WordEmbedding/wordEmbeddingTransform.mixins.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "../../node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);


const WordEmbeddingTransformMixins = BaseWordEmbeddingClass => class extends BaseWordEmbeddingClass {
  unknowVec() {
    return this.F.zeroVec(this.VecSize);
  }

  async sentenceEncode(tokens) {
    let vecs = await this.transform(tokens);
    return await this.T.tensor(vecs).mean(0).data();
  }

  async transform(tokens) {
    const TokenLookUp = this.TokenLookUp,
          ChunkLookUp = this.ChunkLookUp;
    console.log(TokenLookUp);
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
        chunk = await this.fetchChunk(chunkId);
        await this.updateChunkLookUp(chunkId, chunk);
      }

      masterchunk = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, masterchunk, chunk);
    }

    let finalVecs = vecs.reduce((finalVecs, vec) => {
      if (typeof vec === "string") {
        let _vec = masterchunk[vec];

        if (_vec === undefined) {
          this.logger.debug(`word ${vec} not found in chunk`);
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

/* harmony default export */ __webpack_exports__["default"] = (WordEmbeddingTransformMixins);

/***/ }),

/***/ "./src/WordEmbedding/wordVec.EN.js":
/*!*****************************************!*\
  !*** ./src/WordEmbedding/wordVec.EN.js ***!
  \*****************************************/
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
/* harmony import */ var _wordEmbeddingTransform_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wordEmbeddingTransform.mixins */ "./src/WordEmbedding/wordEmbeddingTransform.mixins.js");
/* harmony import */ var _chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chunkLookup.mixins */ "./src/WordEmbedding/chunkLookup.mixins.js");
/* harmony import */ var _tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tokenLookup.mixins */ "./src/WordEmbedding/tokenLookup.mixins.js");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./function */ "./src/WordEmbedding/function.js");









class WordEmbeddingEN extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"], [causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["StorageMixins"], causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__["MemCacheMixins"], _tokenLookup_mixins__WEBPACK_IMPORTED_MODULE_6__["default"], _chunkLookup_mixins__WEBPACK_IMPORTED_MODULE_5__["default"], _wordEmbeddingTransform_mixins__WEBPACK_IMPORTED_MODULE_4__["default"]]) {
  constructor(baseURL) {
    super();
    this.Fetch = causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Fetch"];
    this.Storage = causal_net_storage__WEBPACK_IMPORTED_MODULE_2__["indexDBStorage"];
    this.MemCache = causal_net_memcache__WEBPACK_IMPORTED_MODULE_3__["memDownCache"];
    this.baseURL = baseURL;
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

  set VecSize(vecsize) {
    if (!vecsize || +vecsize <= 0) {
      throw Error(`expect positive vecsize get ${vecsize}`);
    }

    this.vecsize = vecsize;
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
        this.description = await this.fetchDescription();
      }
    }

    if (forceFecth) {
      this.description = await this.fetchDescription();
    }

    this.TokenChunkIdMapper = token => {
      return this.F.getIn([token], this.description.chunkLookUp, null);
    };

    this.VecSize = this.description.vecsize;
    return this.description;
  }

  async fetchDescription() {
    const DescriptionURL = this.baseURL + 'wordvec.description.json';
    this.logger.debug({
      DescriptionURL
    });
    const wvDescription = await causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Fetch"].fetchJson(DescriptionURL);
    await this.Storage.setItem(this.embeddingDescriptionPath, JSON.stringify(wvDescription));
    this.description = wvDescription;
    return this.description;
  }

}

const BaseULR = "http://storage.googleapis.com/moderatordev-223307.appspot.com/WordVec_EN/";
/* harmony default export */ __webpack_exports__["default"] = (new WordEmbeddingEN(BaseULR));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: RepresentationMixins, causalNetWordVec, SentenceEncode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _representation_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./representation.mixins */ "./src/representation.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepresentationMixins", function() { return _representation_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _WordEmbedding_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WordEmbedding/index */ "./src/WordEmbedding/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetWordVec", function() { return _WordEmbedding_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _sentenceEncode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sentenceEncode */ "./src/sentenceEncode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SentenceEncode", function() { return _sentenceEncode__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/representation.mixins.js":
/*!**************************************!*\
  !*** ./src/representation.mixins.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

  get Embedding() {
    if (!this.embedding) {
      throw Error('embedding is not set');
    }

    return this.embedding;
  }

  set Embedding(embedding) {
    if (!embedding) {
      throw Error(`expect embedding instance, got ${embedding}`);
    }

    this.embedding = embedding;
  }

  setEmbeddingByConfig(netConfig) {
    let [type, subType] = netConfig.Type.split('/');

    if (type !== 'text') {
      throw Error(`expect type to be "text" got ${type}`);
    }

    if (!subType) {
      throw Error(`expect valid string subtype got ${subType}`);
    }

    this.Embedding = this.Representation[subType];
  }

};

/* harmony default export */ __webpack_exports__["default"] = (RepresentationMixins);

/***/ }),

/***/ "./src/sentenceEncode.js":
/*!*******************************!*\
  !*** ./src/sentenceEncode.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tensorflow_models_universal_sentence_encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow-models/universal-sentence-encoder */ "@tensorflow-models/universal-sentence-encoder");
/* harmony import */ var _tensorflow_models_universal_sentence_encoder__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tensorflow_models_universal_sentence_encoder__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_tensorflow_models_universal_sentence_encoder__WEBPACK_IMPORTED_MODULE_0__);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvV29yZEVtYmVkZGluZy9jaHVua0xvb2t1cC5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi8uL3NyYy9Xb3JkRW1iZWRkaW5nL2Z1bmN0aW9uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvV29yZEVtYmVkZGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL1dvcmRFbWJlZGRpbmcvdG9rZW5Mb29rdXAubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvV29yZEVtYmVkZGluZy93b3JkRW1iZWRkaW5nRnVuY3Rpb24ubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvV29yZEVtYmVkZGluZy93b3JkRW1iZWRkaW5nVHJhbnNmb3JtLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL1dvcmRFbWJlZGRpbmcvd29yZFZlYy5FTi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvcmVwcmVzZW50YXRpb24ubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vLi9zcmMvc2VudGVuY2VFbmNvZGUuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi9leHRlcm5hbCBcIkB0ZW5zb3JmbG93LW1vZGVscy91bml2ZXJzYWwtc2VudGVuY2UtZW5jb2RlclwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcmVwcmVzZW50YXRpb24vZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkNodW5rTG9va3VwTWl4aW5zIiwiQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyIsIkNodW5rTG9va1VwIiwiU3RvcmFnZSIsImNodW5rSWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkxPT0tfVVBfQ0hVTktfUEFUSCIsImVtYmVkZGluZ1NhdmVQYXRoIiwibG9nZ2VyIiwiZGVidWciLCJjaHVua0l0ZW0iLCJnZXRJdGVtIiwiY2h1bmsiLCJKU09OIiwicGFyc2UiLCJlcnIiLCJ1cGRhdGVDaHVua0xvb2tVcCIsIlVQREFURV9DSFVOS19QQVRIIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZldGNoQ2h1bmsiLCJDSFVOS19VUkwiLCJiYXNlVVJMIiwiRmV0Y2giLCJmZXRjaEpzb24iLCJGdW5jdGlvbiIsIlBsYXRmb3JtIiwibWl4V2l0aCIsIkJhc2VGdW5jdGlvbiIsIldvcmRFbWJlZGRpbmdGdW5jdGlvbk1peGlucyIsImNvbnN0cnVjdG9yIiwiY2F1c2FsTmV0V29yZFZlYyIsImxhbmd1YWdlIiwiRU4iLCJ3b3JkVmVjRU4iLCJnZXREZXNjcmlwdGlvbiIsIlRva2VuTG9va1VwTWl4aW5zIiwiVG9rZW5Mb29rVXAiLCJNZW1DYWNoZSIsInRva2VuIiwidmVjIiwidXBkYXRlVG9rZW5Mb29rVXAiLCJCYXNlRnVuY3Rpb25DbGFzcyIsIm1hcFRva2VuVG9DaHVua0lkcyIsInRva2VucyIsIm1hcHBlciIsIlIiLCJUb2tlbkNodW5rSWRNYXBwZXIiLCJ0b2tlbkNodW5rTWFwIiwibWFwIiwidCIsInRva2VuQ2h1bmtJZHMiLCJfY2h1bmtJZHMiLCJ1bnppcCIsImNodW5rSWRzIiwidW5pcSIsImNvbnNvbGUiLCJsb2ciLCJ6ZXJvVmVjIiwidmVjU2l6ZSIsInJhbmdlIiwiV29yZEVtYmVkZGluZ1RyYW5zZm9ybU1peGlucyIsInVua25vd1ZlYyIsIkYiLCJWZWNTaXplIiwic2VudGVuY2VFbmNvZGUiLCJ2ZWNzIiwidHJhbnNmb3JtIiwiVCIsInRlbnNvciIsIm1lYW4iLCJkYXRhIiwibWlzc0NhY2hlVG9rZW5zIiwibGVuZ3RoIiwibWFzdGVyY2h1bmsiLCJmaW5hbFZlY3MiLCJyZWR1Y2UiLCJfdmVjIiwidW5kZWZpbmVkIiwicHVzaCIsIldvcmRFbWJlZGRpbmdFTiIsIlRlbnNvciIsIlN0b3JhZ2VNaXhpbnMiLCJNZW1DYWNoZU1peGlucyIsIkNodW5rTG9va1VwTWl4aW5zIiwiRW1iZWRkaW5nVHJhbnNmb3JtTWl4aW5zIiwiaW5kZXhEQlN0b3JhZ2UiLCJtZW1Eb3duQ2FjaGUiLCJlbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgiLCJ2ZWNzaXplIiwiRXJyb3IiLCJmb3JjZUZlY3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkl0ZW0iLCJmZXRjaERlc2NyaXB0aW9uIiwiZ2V0SW4iLCJjaHVua0xvb2tVcCIsIkRlc2NyaXB0aW9uVVJMIiwid3ZEZXNjcmlwdGlvbiIsIkJhc2VVTFIiLCJSZXByZXNlbnRhdGlvbk1peGlucyIsIkJhc2VUZW5zb3JDbGFzcyIsIlJlcHJlc2VudGF0aW9uIiwicmVwcmVzZW50YXRpb24iLCJlbWJlZGRpbmciLCJFbWJlZGRpbmciLCJzZXRFbWJlZGRpbmdCeUNvbmZpZyIsIm5ldENvbmZpZyIsInR5cGUiLCJzdWJUeXBlIiwiVHlwZSIsInNwbGl0IiwidXNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDZkEscUJBQXFCLG1CQUFPLENBQUMscUZBQWtCOztBQUUvQztBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLCtCOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQSxNQUFNQSxpQkFBaUIsR0FBSUMsc0JBQUQsSUFBMkIsY0FBY0Esc0JBQWQsQ0FBb0M7QUFDckYsTUFBSUMsV0FBSixHQUFpQjtBQUNiLFVBQU1DLE9BQU8sR0FBRyxLQUFLQSxPQUFyQjtBQUNBLFdBQVFDLE9BQUQsSUFBVztBQUNkLGFBQU8sSUFBSUMsT0FBSixDQUFZLE9BQU9DLE9BQVAsRUFBZ0JDLE1BQWhCLEtBQXlCO0FBQ3hDLFlBQUc7QUFDQyxnQkFBTUMsa0JBQWtCLEdBQUcsS0FBS0MsaUJBQUwsR0FBeUJMLE9BQXBEO0FBQ0EsZUFBS00sTUFBTCxDQUFZQyxLQUFaLENBQWtCO0FBQUNIO0FBQUQsV0FBbEI7QUFDQSxjQUFJSSxTQUFTLEdBQUcsTUFBTVQsT0FBTyxDQUFDVSxPQUFSLENBQWdCTCxrQkFBaEIsQ0FBdEI7QUFDQSxjQUFJTSxLQUFLLEdBQUdGLFNBQVMsQ0FBQ0osa0JBQUQsQ0FBckI7QUFDQUYsaUJBQU8sQ0FBQ1MsSUFBSSxDQUFDQyxLQUFMLENBQVdGLEtBQVgsQ0FBRCxDQUFQO0FBQ0gsU0FORCxDQU9BLE9BQU1HLEdBQU4sRUFBVTtBQUNOWCxpQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNIO0FBQ0osT0FYTSxDQUFQO0FBWUgsS0FiRDtBQWNIOztBQUNELFFBQU1ZLGlCQUFOLENBQXdCZCxPQUF4QixFQUFpQ1UsS0FBakMsRUFBdUM7QUFDbkMsVUFBTVgsT0FBTyxHQUFHLEtBQUtBLE9BQXJCO0FBQ0EsVUFBTWdCLGlCQUFpQixHQUFHLEtBQUtWLGlCQUFMLEdBQXlCTCxPQUFuRDtBQUNBLFNBQUtNLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjtBQUFDUTtBQUFELEtBQWxCO0FBQ0EsV0FBTyxNQUFNaEIsT0FBTyxDQUFDaUIsT0FBUixDQUFnQkQsaUJBQWhCLEVBQW1DSixJQUFJLENBQUNNLFNBQUwsQ0FBZVAsS0FBZixDQUFuQyxDQUFiO0FBQ0g7O0FBRUQsUUFBTVEsVUFBTixDQUFpQmxCLE9BQWpCLEVBQXlCO0FBQ3JCLFVBQU1tQixTQUFTLEdBQUksR0FBRSxLQUFLQyxPQUFRLGlCQUFnQnBCLE9BQVEsT0FBMUQ7QUFDQSxTQUFLTSxNQUFMLENBQVlDLEtBQVosQ0FBa0JZLFNBQWxCO0FBQ0EsV0FBTyxNQUFNLEtBQUtFLEtBQUwsQ0FBV0MsU0FBWCxDQUFxQkgsU0FBckIsQ0FBYjtBQUNIOztBQTdCb0YsQ0FBekY7O0FBZ0NldkIsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ2UsTUFBTTJCLFFBQU4sU0FBdUJDLHlEQUFRLENBQUNDLE9BQVQsQ0FBaUJDLHdEQUFqQixFQUErQixDQUFDQyxxRUFBRCxDQUEvQixDQUF2QixDQUFvRjtBQUMvRkMsYUFBVyxHQUFFO0FBQ1Q7QUFDSDs7QUFIOEYsQzs7Ozs7Ozs7Ozs7O0FDSG5HO0FBQUE7QUFBQTtBQUNBLElBQUlDLGdCQUFnQixHQUFHO0FBQ25CQyxVQUFRLEVBQUUsQ0FBQyxJQUFELENBRFM7O0FBRW5CLE1BQUlDLEVBQUosR0FBUTtBQUNKLFdBQU8sSUFBSTlCLE9BQUosQ0FBWSxPQUFPQyxPQUFQLEVBQWdCQyxNQUFoQixLQUF5QjtBQUN4QyxZQUFNNkIsbURBQVMsQ0FBQ0MsY0FBVixFQUFOO0FBQ0EvQixhQUFPLENBQUM4QixtREFBRCxDQUFQO0FBQ0gsS0FITSxDQUFQO0FBSUg7O0FBUGtCLENBQXZCO0FBU2VILCtFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUEsTUFBTUssaUJBQWlCLEdBQUlyQyxzQkFBRCxJQUEyQixjQUFjQSxzQkFBZCxDQUFvQztBQUNyRixNQUFJc0MsV0FBSixHQUFpQjtBQUNiLFVBQU1DLFFBQVEsR0FBRyxLQUFLQSxRQUF0QjtBQUNBLFdBQVFDLEtBQUQsSUFBUztBQUNaLGFBQU8sSUFBSXBDLE9BQUosQ0FBWSxPQUFPQyxPQUFQLEVBQWdCQyxNQUFoQixLQUF5QjtBQUN4QyxZQUFHO0FBQ0MsY0FBSW1DLEdBQUcsR0FBRyxNQUFNRixRQUFRLENBQUMzQixPQUFULENBQWlCLEtBQUtKLGlCQUFMLEdBQXlCZ0MsS0FBMUMsQ0FBaEI7QUFDQW5DLGlCQUFPLENBQUNTLElBQUksQ0FBQ0MsS0FBTCxDQUFXMEIsR0FBWCxDQUFELENBQVA7QUFDSCxTQUhELENBSUEsT0FBTXpCLEdBQU4sRUFBVTtBQUNOWCxpQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNIO0FBQ0osT0FSTSxDQUFQO0FBU0gsS0FWRDtBQVdIOztBQUVELFFBQU1xQyxpQkFBTixDQUF3QkYsS0FBeEIsRUFBK0JDLEdBQS9CLEVBQW1DO0FBQy9CLFVBQU1GLFFBQVEsR0FBRyxLQUFLQSxRQUF0QjtBQUNBQSxZQUFRLENBQUNwQixPQUFULENBQWlCLEtBQUtYLGlCQUFMLEdBQXlCZ0MsS0FBMUMsRUFBaUQxQixJQUFJLENBQUNNLFNBQUwsQ0FBZXFCLEdBQWYsQ0FBakQ7QUFDSDs7QUFuQm9GLENBQXpGOztBQXFCZUosZ0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUEsTUFBTVAsMkJBQTJCLEdBQUlhLGlCQUFELElBQXVCLGNBQWNBLGlCQUFkLENBQStCO0FBQ3RGQyxvQkFBa0IsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQWdCO0FBQzlCLFVBQU1DLENBQUMsR0FBRyxLQUFLQSxDQUFmO0FBQ0EsVUFBTUMsa0JBQWtCLEdBQUdGLE1BQTNCO0FBQ0EsUUFBSUcsYUFBYSxHQUFHSixNQUFNLENBQUNLLEdBQVAsQ0FBWUMsQ0FBQyxJQUFJO0FBQ2pDLFVBQUloRCxPQUFPLEdBQUc2QyxrQkFBa0IsQ0FBQ0csQ0FBRCxDQUFoQztBQUNBLGFBQU8sQ0FBQyxDQUFDQSxDQUFELEVBQUloRCxPQUFKLENBQUQsRUFBZUEsT0FBZixDQUFQO0FBQ0gsS0FIbUIsQ0FBcEI7QUFJQSxRQUFJLENBQUNpRCxhQUFELEVBQWdCQyxTQUFoQixJQUE2QixLQUFLQyxLQUFMLENBQVdMLGFBQVgsQ0FBakM7QUFDQSxRQUFJTSxRQUFRLEdBQUdSLENBQUMsQ0FBQ1MsSUFBRixDQUFPSCxTQUFQLENBQWY7QUFDQUksV0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBQ0gsY0FBRDtBQUFXSDtBQUFYLEtBQVo7QUFDQSxXQUFPO0FBQUNBLG1CQUFEO0FBQWdCRztBQUFoQixLQUFQO0FBQ0g7O0FBRURJLFNBQU8sQ0FBQ0MsT0FBRCxFQUFTO0FBQ1osV0FBTyxLQUFLYixDQUFMLENBQU9HLEdBQVAsQ0FBVyxNQUFJLENBQWYsRUFBaUIsS0FBS0gsQ0FBTCxDQUFPYyxLQUFQLENBQWEsQ0FBYixFQUFnQkQsT0FBaEIsQ0FBakIsQ0FBUDtBQUNIOztBQWhCcUYsQ0FBMUY7O0FBa0JlOUIsMEZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkEsTUFBTWdDLDRCQUE0QixHQUFJOUQsc0JBQUQsSUFBMkIsY0FBY0Esc0JBQWQsQ0FBb0M7QUFFaEcrRCxXQUFTLEdBQUU7QUFDUCxXQUFPLEtBQUtDLENBQUwsQ0FBT0wsT0FBUCxDQUFlLEtBQUtNLE9BQXBCLENBQVA7QUFDSDs7QUFFRCxRQUFNQyxjQUFOLENBQXFCckIsTUFBckIsRUFBNEI7QUFDeEIsUUFBSXNCLElBQUksR0FBRyxNQUFNLEtBQUtDLFNBQUwsQ0FBZXZCLE1BQWYsQ0FBakI7QUFDQSxXQUFPLE1BQU0sS0FBS3dCLENBQUwsQ0FBT0MsTUFBUCxDQUFjSCxJQUFkLEVBQW9CSSxJQUFwQixDQUF5QixDQUF6QixFQUE0QkMsSUFBNUIsRUFBYjtBQUNIOztBQUVELFFBQU1KLFNBQU4sQ0FBZ0J2QixNQUFoQixFQUF1QjtBQUNuQixVQUFNUCxXQUFXLEdBQUcsS0FBS0EsV0FBekI7QUFBQSxVQUFzQ3JDLFdBQVcsR0FBRyxLQUFLQSxXQUF6RDtBQUNBd0QsV0FBTyxDQUFDQyxHQUFSLENBQVlwQixXQUFaO0FBQ0EsUUFBSTZCLElBQUksR0FBRyxFQUFYO0FBQUEsUUFBZU0sZUFBZSxHQUFDLEVBQS9COztBQUNBLFNBQUksSUFBSWpDLEtBQVIsSUFBaUJLLE1BQWpCLEVBQXdCO0FBQ3BCLFVBQUlKLEdBQUcsR0FBRyxNQUFNSCxXQUFXLENBQUNFLEtBQUQsQ0FBM0I7QUFDQSxXQUFLL0IsTUFBTCxDQUFZQyxLQUFaLENBQWtCO0FBQUMsU0FBQzhCLEtBQUQsR0FBU0M7QUFBVixPQUFsQjs7QUFDQSxVQUFHQSxHQUFHLEtBQUssSUFBWCxFQUFnQjtBQUNaZ0MsdUJBQWUsR0FBRyxDQUFDLEdBQUdBLGVBQUosRUFBcUJqQyxLQUFyQixDQUFsQjtBQUNIOztBQUNEMkIsVUFBSSxHQUFHLENBQUMsR0FBR0EsSUFBSixFQUFVM0IsS0FBVixDQUFQO0FBQ0g7O0FBQ0QsUUFBR2lDLGVBQWUsQ0FBQ0MsTUFBaEIsS0FBMkIsQ0FBOUIsRUFBZ0M7QUFDNUIsYUFBT1AsSUFBUDtBQUNIOztBQUVELFFBQUk7QUFBQ2YsbUJBQUQ7QUFBZ0JHO0FBQWhCLFFBQ0EsS0FBS1MsQ0FBTCxDQUFPcEIsa0JBQVAsQ0FBMEI2QixlQUExQixFQUEyQyxLQUFLekIsa0JBQWhELENBREo7QUFFQSxTQUFLdkMsTUFBTCxDQUFZQyxLQUFaLENBQWtCO0FBQUMwQyxtQkFBRDtBQUFnQkc7QUFBaEIsS0FBbEI7QUFDQSxRQUFJb0IsV0FBVyxHQUFHLEVBQWxCOztBQUNBLFNBQUksSUFBSXhFLE9BQVIsSUFBbUJvRCxRQUFuQixFQUE0QjtBQUN4QixVQUFJMUMsS0FBSyxHQUFJVixPQUFPLEtBQUssSUFBYixHQUFtQixFQUFuQixHQUFzQixNQUFNRixXQUFXLENBQUNFLE9BQUQsQ0FBbkQ7O0FBQ0EsVUFBR1UsS0FBSyxLQUFLLElBQWIsRUFBa0I7QUFDZEEsYUFBSyxHQUFHLE1BQU0sS0FBS1EsVUFBTCxDQUFnQmxCLE9BQWhCLENBQWQ7QUFDQSxjQUFNLEtBQUtjLGlCQUFMLENBQXVCZCxPQUF2QixFQUFnQ1UsS0FBaEMsQ0FBTjtBQUNIOztBQUNEOEQsaUJBQVcsR0FBRywrRUFBSUEsV0FBUCxFQUF1QjlELEtBQXZCLENBQVg7QUFDSDs7QUFFRCxRQUFJK0QsU0FBUyxHQUFHVCxJQUFJLENBQUNVLE1BQUwsQ0FBWSxDQUFDRCxTQUFELEVBQVluQyxHQUFaLEtBQWtCO0FBQzFCLFVBQUcsT0FBT0EsR0FBUCxLQUFnQixRQUFuQixFQUE0QjtBQUN4QixZQUFJcUMsSUFBSSxHQUFHSCxXQUFXLENBQUNsQyxHQUFELENBQXRCOztBQUNBLFlBQUdxQyxJQUFJLEtBQUtDLFNBQVosRUFBc0I7QUFDbEIsZUFBS3RFLE1BQUwsQ0FBWUMsS0FBWixDQUFtQixRQUFPK0IsR0FBSSxxQkFBOUI7QUFDQXFDLGNBQUksR0FBRyxLQUFLZixTQUFMLEVBQVA7QUFDSDs7QUFDRGEsaUJBQVMsQ0FBQ0ksSUFBVixDQUFlRixJQUFmO0FBQ0gsT0FQRCxNQVFJO0FBQ0FGLGlCQUFTLENBQUNJLElBQVYsQ0FBZXZDLEdBQWY7QUFDSDs7QUFDRCxhQUFPbUMsU0FBUDtBQUNILEtBYkQsRUFhRyxFQWJILENBQWhCO0FBY0EsV0FBT0EsU0FBUDtBQUNIOztBQXZEK0YsQ0FBcEc7O0FBeURlZCwyRkFBZixFOzs7Ozs7Ozs7Ozs7QUN6REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1tQixlQUFOLFNBQThCdEQseURBQVEsQ0FBQ0MsT0FBVCxDQUFpQnNELHNEQUFqQixFQUN0QixDQUFJQyxnRUFBSixFQUNJQyxrRUFESixFQUVJL0MsMkRBRkosRUFHSWdELDJEQUhKLEVBSUlDLHNFQUpKLENBRHNCLENBQTlCLENBS3VDO0FBQ25DdkQsYUFBVyxDQUFDUixPQUFELEVBQVM7QUFDaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLHNEQUFiO0FBQ0EsU0FBS3RCLE9BQUwsR0FBZXFGLGlFQUFmO0FBQ0EsU0FBS2hELFFBQUwsR0FBZ0JpRCxnRUFBaEI7QUFDQSxTQUFLakUsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS3lDLENBQUwsR0FBUyxJQUFJdEMsaURBQUosRUFBVDtBQUVBLFNBQUtsQixpQkFBTCxHQUF5QixhQUF6QjtBQUNBLFNBQUtpRix3QkFBTCxHQUFnQyxLQUFLakYsaUJBQUwsR0FBeUIsa0JBQXpEO0FBQ0g7O0FBRUQsTUFBSXlELE9BQUosR0FBYTtBQUNULFFBQUcsQ0FBQyxLQUFLeUIsT0FBVCxFQUFpQjtBQUNiLFlBQU1DLEtBQUssQ0FBQyxvQkFBRCxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLRCxPQUFaO0FBQ0g7O0FBQ0QsTUFBSXpCLE9BQUosQ0FBWXlCLE9BQVosRUFBb0I7QUFDaEIsUUFBRyxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBRCxJQUFXLENBQTFCLEVBQTZCO0FBQ3pCLFlBQU1DLEtBQUssQ0FBRSwrQkFBOEJELE9BQVEsRUFBeEMsQ0FBWDtBQUNIOztBQUNELFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNIOztBQUVELFFBQU10RCxjQUFOLENBQXFCd0QsVUFBVSxHQUFDLEtBQWhDLEVBQXNDO0FBQ2xDLFFBQUcsQ0FBQyxLQUFLQyxXQUFULEVBQXFCO0FBQ2pCLFVBQUc7QUFDQyxZQUFJQyxlQUFlLEdBQUcsTUFBTSxLQUFLNUYsT0FBTCxDQUFhVSxPQUFiLENBQXFCLEtBQUs2RSx3QkFBMUIsQ0FBNUI7QUFDQSxhQUFLSSxXQUFMLEdBQW1CL0UsSUFBSSxDQUFDQyxLQUFMLENBQVcrRSxlQUFlLENBQUMsS0FBS0wsd0JBQU4sQ0FBMUIsQ0FBbkI7QUFDSCxPQUhELENBSUEsT0FBTXpFLEdBQU4sRUFBVTtBQUNOLGFBQUtQLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjtBQUFDLDJDQUFpQztBQUFsQyxTQUFsQjtBQUNBLGFBQUttRixXQUFMLEdBQW1CLE1BQU0sS0FBS0UsZ0JBQUwsRUFBekI7QUFDSDtBQUNKOztBQUNELFFBQUdILFVBQUgsRUFBYztBQUNWLFdBQUtDLFdBQUwsR0FBbUIsTUFBTSxLQUFLRSxnQkFBTCxFQUF6QjtBQUNIOztBQUNELFNBQUsvQyxrQkFBTCxHQUEyQlIsS0FBRCxJQUFTO0FBQy9CLGFBQU8sS0FBS3dCLENBQUwsQ0FBT2dDLEtBQVAsQ0FBYSxDQUFDeEQsS0FBRCxDQUFiLEVBQXNCLEtBQUtxRCxXQUFMLENBQWlCSSxXQUF2QyxFQUFvRCxJQUFwRCxDQUFQO0FBQ0gsS0FGRDs7QUFHQSxTQUFLaEMsT0FBTCxHQUFlLEtBQUs0QixXQUFMLENBQWlCSCxPQUFoQztBQUNBLFdBQU8sS0FBS0csV0FBWjtBQUVIOztBQUNELFFBQU1FLGdCQUFOLEdBQXdCO0FBQ3BCLFVBQU1HLGNBQWMsR0FBRyxLQUFLM0UsT0FBTCxHQUFlLDBCQUF0QztBQUNBLFNBQUtkLE1BQUwsQ0FBWUMsS0FBWixDQUFrQjtBQUFDd0Y7QUFBRCxLQUFsQjtBQUNBLFVBQU1DLGFBQWEsR0FBRyxNQUFNM0Usc0RBQUssQ0FBQ0MsU0FBTixDQUFnQnlFLGNBQWhCLENBQTVCO0FBQ0EsVUFBTSxLQUFLaEcsT0FBTCxDQUFhaUIsT0FBYixDQUFxQixLQUFLc0Usd0JBQTFCLEVBQW9EM0UsSUFBSSxDQUFDTSxTQUFMLENBQWUrRSxhQUFmLENBQXBELENBQU47QUFDQSxTQUFLTixXQUFMLEdBQW1CTSxhQUFuQjtBQUNBLFdBQU8sS0FBS04sV0FBWjtBQUNIOztBQXREa0M7O0FBeUR2QyxNQUFNTyxPQUFPLEdBQUcsMkVBQWhCO0FBQ2UsbUVBQUluQixlQUFKLENBQW9CbUIsT0FBcEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQSxNQUFNQyxvQkFBb0IsR0FBSUMsZUFBRCxJQUFvQixjQUFjQSxlQUFkLENBQTZCO0FBQzFFLE1BQUlDLGNBQUosR0FBb0I7QUFDaEIsUUFBRyxDQUFDLEtBQUtDLGNBQVQsRUFBd0I7QUFDcEIsWUFBTWIsS0FBSyxDQUFDLDJCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUthLGNBQVo7QUFDSDs7QUFDRCxNQUFJRCxjQUFKLENBQW1CQyxjQUFuQixFQUFrQztBQUM5QixRQUFHLENBQUNBLGNBQUosRUFBbUI7QUFDZixZQUFNYixLQUFLLENBQUUsdUNBQXNDYyxTQUFVLEVBQWxELENBQVg7QUFDSDs7QUFDRCxTQUFLRCxjQUFMLEdBQXNCQSxjQUF0QjtBQUNIOztBQUNELE1BQUlFLFNBQUosR0FBZTtBQUNYLFFBQUcsQ0FBQyxLQUFLRCxTQUFULEVBQW1CO0FBQ2YsWUFBTWQsS0FBSyxDQUFDLHNCQUFELENBQVg7QUFDSDs7QUFDRCxXQUFPLEtBQUtjLFNBQVo7QUFDSDs7QUFDRCxNQUFJQyxTQUFKLENBQWNELFNBQWQsRUFBd0I7QUFDcEIsUUFBRyxDQUFDQSxTQUFKLEVBQWM7QUFDVixZQUFNZCxLQUFLLENBQUUsa0NBQWlDYyxTQUFVLEVBQTdDLENBQVg7QUFDSDs7QUFDRCxTQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIOztBQUNERSxzQkFBb0IsQ0FBQ0MsU0FBRCxFQUFXO0FBQzNCLFFBQUksQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCRixTQUFTLENBQUNHLElBQVYsQ0FBZUMsS0FBZixDQUFxQixHQUFyQixDQUF0Qjs7QUFDQSxRQUFHSCxJQUFJLEtBQUssTUFBWixFQUFtQjtBQUNmLFlBQU1sQixLQUFLLENBQUUsZ0NBQStCa0IsSUFBSyxFQUF0QyxDQUFYO0FBQ0g7O0FBQ0QsUUFBRyxDQUFDQyxPQUFKLEVBQVk7QUFDUixZQUFNbkIsS0FBSyxDQUFFLG1DQUFrQ21CLE9BQVEsRUFBNUMsQ0FBWDtBQUNIOztBQUNELFNBQUtKLFNBQUwsR0FBaUIsS0FBS0gsY0FBTCxDQUFvQk8sT0FBcEIsQ0FBakI7QUFDSDs7QUFsQ3lFLENBQTlFOztBQXNDZVQsbUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQ2VZLHlJQUFmLEU7Ozs7Ozs7Ozs7O0FDREEsMkY7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9yZXByZXNlbnRhdGlvbi53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIiwgXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3JlcHJlc2VudGF0aW9uXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQHRlbnNvcmZsb3ctbW9kZWxzL3VuaXZlcnNhbC1zZW50ZW5jZS1lbmNvZGVyXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQuc3RvcmFnZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvcmVwcmVzZW50YXRpb25cIl0gPSBmYWN0b3J5KHJvb3RbXCJAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXJcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCJdLCByb290W1wiY2F1c2FsLW5ldC5zdG9yYWdlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX190ZW5zb3JmbG93X21vZGVsc191bml2ZXJzYWxfc2VudGVuY2VfZW5jb2Rlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3N0b3JhZ2VfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi9kZWZpbmVQcm9wZXJ0eVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQ7IiwiY29uc3QgQ2h1bmtMb29rdXBNaXhpbnMgPSAoQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3N7IFxuICAgIGdldCBDaHVua0xvb2tVcCgpe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICByZXR1cm4gKGNodW5rSWQpPT57XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IExPT0tfVVBfQ0hVTktfUEFUSCA9IHRoaXMuZW1iZWRkaW5nU2F2ZVBhdGggKyBjaHVua0lkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7TE9PS19VUF9DSFVOS19QQVRIfSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaHVua0l0ZW0gPSBhd2FpdCBTdG9yYWdlLmdldEl0ZW0oTE9PS19VUF9DSFVOS19QQVRIKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rID0gY2h1bmtJdGVtW0xPT0tfVVBfQ0hVTktfUEFUSF07XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShjaHVuaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhc3luYyB1cGRhdGVDaHVua0xvb2tVcChjaHVua0lkLCBjaHVuayl7XG4gICAgICAgIGNvbnN0IFN0b3JhZ2UgPSB0aGlzLlN0b3JhZ2U7XG4gICAgICAgIGNvbnN0IFVQREFURV9DSFVOS19QQVRIID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIGNodW5rSWQ7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtVUERBVEVfQ0hVTktfUEFUSH0pO1xuICAgICAgICByZXR1cm4gYXdhaXQgU3RvcmFnZS5zZXRJdGVtKFVQREFURV9DSFVOS19QQVRILCBKU09OLnN0cmluZ2lmeShjaHVuaykpO1xuICAgIH1cblxuICAgIGFzeW5jIGZldGNoQ2h1bmsoY2h1bmtJZCl7XG4gICAgICAgIGNvbnN0IENIVU5LX1VSTCA9IGAke3RoaXMuYmFzZVVSTH13b3JkdmVjX2NodW5rXyR7Y2h1bmtJZH0uanNvbmA7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKENIVU5LX1VSTCk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLkZldGNoLmZldGNoSnNvbihDSFVOS19VUkwpO1xuICAgIH1cbiAgIFxufTtcbmV4cG9ydCBkZWZhdWx0IENodW5rTG9va3VwTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0aW9uIGFzIEJhc2VGdW5jdGlvbiB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBXb3JkRW1iZWRkaW5nRnVuY3Rpb25NaXhpbnMgfSBmcm9tICcuL3dvcmRFbWJlZGRpbmdGdW5jdGlvbi5taXhpbnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdGlvbiwgW1dvcmRFbWJlZGRpbmdGdW5jdGlvbk1peGluc10pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufSIsImltcG9ydCB7ZGVmYXVsdCBhcyB3b3JkVmVjRU59IGZyb20gJy4vd29yZFZlYy5FTic7XG5sZXQgY2F1c2FsTmV0V29yZFZlYyA9IHtcbiAgICBsYW5ndWFnZTogWydFTiddLFxuICAgIGdldCBFTigpe1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIGF3YWl0IHdvcmRWZWNFTi5nZXREZXNjcmlwdGlvbigpO1xuICAgICAgICAgICAgcmVzb2x2ZSh3b3JkVmVjRU4pO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgY2F1c2FsTmV0V29yZFZlYzsiLCJjb25zdCBUb2tlbkxvb2tVcE1peGlucyA9IChCYXNlV29yZEVtYmVkZGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVdvcmRFbWJlZGRpbmdDbGFzc3sgXG4gICAgZ2V0IFRva2VuTG9va1VwKCl7XG4gICAgICAgIGNvbnN0IE1lbUNhY2hlID0gdGhpcy5NZW1DYWNoZTtcbiAgICAgICAgcmV0dXJuICh0b2tlbik9PntcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZlYyA9IGF3YWl0IE1lbUNhY2hlLmdldEl0ZW0odGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHZlYykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHVwZGF0ZVRva2VuTG9va1VwKHRva2VuLCB2ZWMpe1xuICAgICAgICBjb25zdCBNZW1DYWNoZSA9IHRoaXMuTWVtQ2FjaGU7XG4gICAgICAgIE1lbUNhY2hlLnNldEl0ZW0odGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArIHRva2VuLCBKU09OLnN0cmluZ2lmeSh2ZWMpKTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgVG9rZW5Mb29rVXBNaXhpbnM7XG4iLCJjb25zdCBXb3JkRW1iZWRkaW5nRnVuY3Rpb25NaXhpbnMgPSAoQmFzZUZ1bmN0aW9uQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZUZ1bmN0aW9uQ2xhc3N7XG4gICAgbWFwVG9rZW5Ub0NodW5rSWRzKHRva2VucywgbWFwcGVyKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgY29uc3QgVG9rZW5DaHVua0lkTWFwcGVyID0gbWFwcGVyO1xuICAgICAgICBsZXQgdG9rZW5DaHVua01hcCA9IHRva2Vucy5tYXAoIHQgPT4ge1xuICAgICAgICAgICAgbGV0IGNodW5rSWQgPSBUb2tlbkNodW5rSWRNYXBwZXIodCk7XG4gICAgICAgICAgICByZXR1cm4gW1t0LCBjaHVua0lkXSwgY2h1bmtJZF07IFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IFt0b2tlbkNodW5rSWRzLCBfY2h1bmtJZHNdID0gdGhpcy51bnppcCh0b2tlbkNodW5rTWFwKTtcbiAgICAgICAgbGV0IGNodW5rSWRzID0gUi51bmlxKF9jaHVua0lkcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHtjaHVua0lkcywgdG9rZW5DaHVua0lkc30pO1xuICAgICAgICByZXR1cm4ge3Rva2VuQ2h1bmtJZHMsIGNodW5rSWRzfTtcbiAgICB9XG5cbiAgICB6ZXJvVmVjKHZlY1NpemUpe1xuICAgICAgICByZXR1cm4gdGhpcy5SLm1hcCgoKT0+MCx0aGlzLlIucmFuZ2UoMCwgdmVjU2l6ZSkpO1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgV29yZEVtYmVkZGluZ0Z1bmN0aW9uTWl4aW5zOyIsImNvbnN0IFdvcmRFbWJlZGRpbmdUcmFuc2Zvcm1NaXhpbnMgPSAoQmFzZVdvcmRFbWJlZGRpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VXb3JkRW1iZWRkaW5nQ2xhc3N7IFxuXG4gICAgdW5rbm93VmVjKCl7XG4gICAgICAgIHJldHVybiB0aGlzLkYuemVyb1ZlYyh0aGlzLlZlY1NpemUpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbnRlbmNlRW5jb2RlKHRva2Vucyl7XG4gICAgICAgIGxldCB2ZWNzID0gYXdhaXQgdGhpcy50cmFuc2Zvcm0odG9rZW5zKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuVC50ZW5zb3IodmVjcykubWVhbigwKS5kYXRhKCk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHRyYW5zZm9ybSh0b2tlbnMpe1xuICAgICAgICBjb25zdCBUb2tlbkxvb2tVcCA9IHRoaXMuVG9rZW5Mb29rVXAsIENodW5rTG9va1VwID0gdGhpcy5DaHVua0xvb2tVcDtcbiAgICAgICAgY29uc29sZS5sb2coVG9rZW5Mb29rVXApO1xuICAgICAgICBsZXQgdmVjcyA9IFtdLCBtaXNzQ2FjaGVUb2tlbnM9W107XG4gICAgICAgIGZvcihsZXQgdG9rZW4gb2YgdG9rZW5zKXtcbiAgICAgICAgICAgIGxldCB2ZWMgPSBhd2FpdCBUb2tlbkxvb2tVcCh0b2tlbik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7W3Rva2VuXTogdmVjfSk7XG4gICAgICAgICAgICBpZih2ZWMgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgIG1pc3NDYWNoZVRva2VucyA9IFsuLi5taXNzQ2FjaGVUb2tlbnMsIHRva2VuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZlY3MgPSBbLi4udmVjcywgdG9rZW5dO1xuICAgICAgICB9XG4gICAgICAgIGlmKG1pc3NDYWNoZVRva2Vucy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgcmV0dXJuIHZlY3M7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCB7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9ID0gXG4gICAgICAgICAgICB0aGlzLkYubWFwVG9rZW5Ub0NodW5rSWRzKG1pc3NDYWNoZVRva2VucywgdGhpcy5Ub2tlbkNodW5rSWRNYXBwZXIpO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7dG9rZW5DaHVua0lkcywgY2h1bmtJZHN9KTtcbiAgICAgICAgbGV0IG1hc3RlcmNodW5rID0ge307XG4gICAgICAgIGZvcihsZXQgY2h1bmtJZCBvZiBjaHVua0lkcyl7XG4gICAgICAgICAgICBsZXQgY2h1bmsgPSAoY2h1bmtJZCA9PT0gbnVsbCk/e306YXdhaXQgQ2h1bmtMb29rVXAoY2h1bmtJZCk7XG4gICAgICAgICAgICBpZihjaHVuayA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgY2h1bmsgPSBhd2FpdCB0aGlzLmZldGNoQ2h1bmsoY2h1bmtJZCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy51cGRhdGVDaHVua0xvb2tVcChjaHVua0lkLCBjaHVuayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXN0ZXJjaHVuayA9IHsuLi5tYXN0ZXJjaHVuaywgLi4uY2h1bmt9O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZpbmFsVmVjcyA9IHZlY3MucmVkdWNlKChmaW5hbFZlY3MsIHZlYyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YodmVjKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfdmVjID0gbWFzdGVyY2h1bmtbdmVjXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoX3ZlYyA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKGB3b3JkICR7dmVjfSBub3QgZm91bmQgaW4gY2h1bmtgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92ZWMgPSB0aGlzLnVua25vd1ZlYygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsVmVjcy5wdXNoKF92ZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZlY3MucHVzaCh2ZWMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxWZWNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICByZXR1cm4gZmluYWxWZWNzO1xuICAgIH0gICBcbn07XG5leHBvcnQgZGVmYXVsdCBXb3JkRW1iZWRkaW5nVHJhbnNmb3JtTWl4aW5zOyIsImltcG9ydCB7IFRlbnNvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgRmV0Y2ggfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFN0b3JhZ2VNaXhpbnMsIGluZGV4REJTdG9yYWdlIH0gZnJvbSAnY2F1c2FsLW5ldC5zdG9yYWdlJztcbmltcG9ydCB7IE1lbUNhY2hlTWl4aW5zLCBtZW1Eb3duQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRW1iZWRkaW5nVHJhbnNmb3JtTWl4aW5zIH0gZnJvbSAnLi93b3JkRW1iZWRkaW5nVHJhbnNmb3JtLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIENodW5rTG9va1VwTWl4aW5zIH0gZnJvbSAnLi9jaHVua0xvb2t1cC5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBUb2tlbkxvb2tVcE1peGlucyB9IGZyb20gJy4vdG9rZW5Mb29rdXAubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgRnVuY3Rpb24gfSBmcm9tICcuL2Z1bmN0aW9uJztcblxuY2xhc3MgV29yZEVtYmVkZGluZ0VOIGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChUZW5zb3IsIFxuICAgICAgICBbICAgU3RvcmFnZU1peGlucywgXG4gICAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAgICAgICAgICAgIFRva2VuTG9va1VwTWl4aW5zLFxuICAgICAgICAgICAgQ2h1bmtMb29rVXBNaXhpbnMsXG4gICAgICAgICAgICBFbWJlZGRpbmdUcmFuc2Zvcm1NaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoYmFzZVVSTCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuRmV0Y2ggPSBGZXRjaDtcbiAgICAgICAgdGhpcy5TdG9yYWdlID0gaW5kZXhEQlN0b3JhZ2U7XG4gICAgICAgIHRoaXMuTWVtQ2FjaGUgPSBtZW1Eb3duQ2FjaGU7XG4gICAgICAgIHRoaXMuYmFzZVVSTCA9IGJhc2VVUkw7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCA9ICcvZW1iZWRkaW5nLyc7XG4gICAgICAgIHRoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoID0gdGhpcy5lbWJlZGRpbmdTYXZlUGF0aCArICdkZXNjcmlwdGlvbi5qc29uJztcbiAgICB9XG4gICAgXG4gICAgZ2V0IFZlY1NpemUoKXtcbiAgICAgICAgaWYoIXRoaXMudmVjc2l6ZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigndmVjc2l6ZSBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmVjc2l6ZTtcbiAgICB9XG4gICAgc2V0IFZlY1NpemUodmVjc2l6ZSl7XG4gICAgICAgIGlmKCF2ZWNzaXplIHx8ICt2ZWNzaXplIDw9MCApe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBwb3NpdGl2ZSB2ZWNzaXplIGdldCAke3ZlY3NpemV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZWNzaXplID0gdmVjc2l6ZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXNjcmlwdGlvbihmb3JjZUZlY3RoPWZhbHNlKXtcbiAgICAgICAgaWYoIXRoaXMuZGVzY3JpcHRpb24pe1xuICAgICAgICAgICAgdHJ5e1xuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbkl0ZW0gPSBhd2FpdCB0aGlzLlN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmVtYmVkZGluZ0Rlc2NyaXB0aW9uUGF0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IEpTT04ucGFyc2UoZGVzY3JpcHRpb25JdGVtW3RoaXMuZW1iZWRkaW5nRGVzY3JpcHRpb25QYXRoXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlcnIpe1xuICAgICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHsnbG9hZCBkZXNjcmlwdGlvbiBmcm9tIHN0b3JhZ2UnOiBmYWxzZX0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLmZldGNoRGVzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihmb3JjZUZlY3RoKXtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLmZldGNoRGVzY3JpcHRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlRva2VuQ2h1bmtJZE1hcHBlciA9ICh0b2tlbik9PntcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkYuZ2V0SW4oW3Rva2VuXSwgdGhpcy5kZXNjcmlwdGlvbi5jaHVua0xvb2tVcCwgbnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuVmVjU2l6ZSA9IHRoaXMuZGVzY3JpcHRpb24udmVjc2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgIH1cbiAgICBhc3luYyBmZXRjaERlc2NyaXB0aW9uKCl7XG4gICAgICAgIGNvbnN0IERlc2NyaXB0aW9uVVJMID0gdGhpcy5iYXNlVVJMICsgJ3dvcmR2ZWMuZGVzY3JpcHRpb24uanNvbic7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKHtEZXNjcmlwdGlvblVSTH0pO1xuICAgICAgICBjb25zdCB3dkRlc2NyaXB0aW9uID0gYXdhaXQgRmV0Y2guZmV0Y2hKc29uKERlc2NyaXB0aW9uVVJMKTtcbiAgICAgICAgYXdhaXQgdGhpcy5TdG9yYWdlLnNldEl0ZW0odGhpcy5lbWJlZGRpbmdEZXNjcmlwdGlvblBhdGgsIEpTT04uc3RyaW5naWZ5KHd2RGVzY3JpcHRpb24pKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHd2RGVzY3JpcHRpb247XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cbn1cblxuY29uc3QgQmFzZVVMUiA9IFwiaHR0cDovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbW9kZXJhdG9yZGV2LTIyMzMwNy5hcHBzcG90LmNvbS9Xb3JkVmVjX0VOL1wiOyAgIFxuZXhwb3J0IGRlZmF1bHQgbmV3IFdvcmRFbWJlZGRpbmdFTihCYXNlVUxSKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJlcHJlc2VudGF0aW9uTWl4aW5zIH0gZnJvbSAnLi9yZXByZXNlbnRhdGlvbi5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRXb3JkVmVjIH0gZnJvbSAnLi9Xb3JkRW1iZWRkaW5nL2luZGV4JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VudGVuY2VFbmNvZGUgfSBmcm9tICcuL3NlbnRlbmNlRW5jb2RlJzsiLCJjb25zdCBSZXByZXNlbnRhdGlvbk1peGlucyA9IChCYXNlVGVuc29yQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlVGVuc29yQ2xhc3N7IFxuICAgIGdldCBSZXByZXNlbnRhdGlvbigpe1xuICAgICAgICBpZighdGhpcy5yZXByZXNlbnRhdGlvbil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncmVwcmVzZW50YXRpb24gaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcHJlc2VudGF0aW9uO1xuICAgIH1cbiAgICBzZXQgUmVwcmVzZW50YXRpb24ocmVwcmVzZW50YXRpb24pe1xuICAgICAgICBpZighcmVwcmVzZW50YXRpb24pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCByZXByZXNlbnRhdGlvbiBpbnN0YW5jZSwgZ290ICR7ZW1iZWRkaW5nfWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVwcmVzZW50YXRpb24gPSByZXByZXNlbnRhdGlvbjtcbiAgICB9XG4gICAgZ2V0IEVtYmVkZGluZygpe1xuICAgICAgICBpZighdGhpcy5lbWJlZGRpbmcpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2VtYmVkZGluZyBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZW1iZWRkaW5nO1xuICAgIH1cbiAgICBzZXQgRW1iZWRkaW5nKGVtYmVkZGluZyl7XG4gICAgICAgIGlmKCFlbWJlZGRpbmcpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYGV4cGVjdCBlbWJlZGRpbmcgaW5zdGFuY2UsIGdvdCAke2VtYmVkZGluZ31gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtYmVkZGluZyA9IGVtYmVkZGluZztcbiAgICB9XG4gICAgc2V0RW1iZWRkaW5nQnlDb25maWcobmV0Q29uZmlnKXtcbiAgICAgICAgbGV0IFt0eXBlLCBzdWJUeXBlXSA9IG5ldENvbmZpZy5UeXBlLnNwbGl0KCcvJyk7XG4gICAgICAgIGlmKHR5cGUgIT09ICd0ZXh0Jyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHR5cGUgdG8gYmUgXCJ0ZXh0XCIgZ290ICR7dHlwZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZighc3ViVHlwZSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgZXhwZWN0IHZhbGlkIHN0cmluZyBzdWJ0eXBlIGdvdCAke3N1YlR5cGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5FbWJlZGRpbmcgPSB0aGlzLlJlcHJlc2VudGF0aW9uW3N1YlR5cGVdO1xuICAgIH1cblxuICAgIFxufTtcbmV4cG9ydCBkZWZhdWx0IFJlcHJlc2VudGF0aW9uTWl4aW5zOyIsImltcG9ydCAqIGFzIHVzZSBmcm9tICdAdGVuc29yZmxvdy1tb2RlbHMvdW5pdmVyc2FsLXNlbnRlbmNlLWVuY29kZXInO1xuZXhwb3J0IGRlZmF1bHQgdXNlOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fdGVuc29yZmxvd19tb2RlbHNfdW5pdmVyc2FsX3NlbnRlbmNlX2VuY29kZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfbWVtY2FjaGVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9