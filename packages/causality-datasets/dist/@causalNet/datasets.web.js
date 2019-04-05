(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/datasets"] = factory(require("causal-net.core"), require("causal-net.utils"));
	else
		root["@causalNet/datasets"] = factory(root["causal-net.core"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"@causalNet/datasets": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = this["webpackJsonp_causalNet_datasets"] = this["webpackJsonp_causalNet_datasets"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../causality-sampling/dist/@causalNet/sampling.web.js":
/*!*************************************************************!*\
  !*** ../causality-sampling/dist/@causalNet/sampling.web.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! causal-net.core */ "causal-net.core"),__webpack_require__(/*! causal-net.utils */ "causal-net.utils"),__webpack_require__(/*! random */ "../../node_modules/random/index.js")):undefined}(this,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),i=n(2),u=n.n(i);var l=e=>(class extends e{subSampling(e,t,n=!0){const r=this.R,o=this.Random;let i=Array.isArray(t)?r.clone(t):r.range(0,t);if(0===i.length)throw Error("candidate length should be positive");let u=[],l=r.clone(i);const a=()=>o.int(0,i.length-1);for(;u.length<e;){let e=a();(n||null!==l[e])&&(u=[...u,i[e]],n||(l[e]=null))}return u}});var a=e=>(class extends e{negSampling(e,t,n,r=!0){const o=this.R,i=this.Random;if(o.any(e=>!o.type(Number,e)||e>1||e<0,n))throw Error(`${JSON.stringify(n)} is not allow`);let u=o.reduce((e,t)=>(e[t]=1/0,e),o.clone(n),t),l=[],a=o.clone(u);const s=()=>i.int(0,u.length-1);for(;l.length<e;){let e=s();c=u[e],i.float()>c&&(r||null!==a[e])&&(l=[...l,e],r||(a[e]=null))}var c;return l}});var s=new class extends(o.platform.mixWith(r.Functor,[l,a])){constructor(){super(),this.Random=u.a}};var c=e=>(class extends e{get Sampling(){if(!this.sampling)throw Error("Sampling is not set");return this.sampling}set Sampling(e){o.assert.beInstanceOf(e,r.Functor),this.sampling=e}});n.d(t,"causalNetSampling",function(){return s}),n.d(t,"SamplingMixins",function(){return c}),n.d(t,"SubSamplingMixins",function(){return l}),n.d(t,"NegSamplingMixins",function(){return a})}])});
//# sourceMappingURL=sampling.web.js.map

/***/ }),

/***/ "./src/Readers/bufferReader.mixins.js":
/*!********************************************!*\
  !*** ./src/Readers/bufferReader.mixins.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const BufferReaderMixins = BaseDataSource => class extends BaseDataSource {
  makeBufferReader(baseLink) {
    if (baseLink.startsWith('http')) {
      return async fileName => {
        let data = await causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["bufferUtils"].fetchBuffer(baseLink + fileName);
        return this.splitSample(data);
      };
    } else {
      return async fileName => {
        let data = await causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["bufferUtils"].readBuffer(baseLink + fileName);
        return this.splitSample(data);
      };
    }
  }

};

/* harmony default export */ __webpack_exports__["default"] = (BufferReaderMixins);

/***/ }),

/***/ "./src/Readers/init.js":
/*!*****************************!*\
  !*** ./src/Readers/init.js ***!
  \*****************************/
/*! exports provided: PNGReaderMixins, BufferReaderMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pngReader_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pngReader.mixins */ "./src/Readers/pngReader.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PNGReaderMixins", function() { return _pngReader_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bufferReader_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bufferReader.mixins */ "./src/Readers/bufferReader.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BufferReaderMixins", function() { return _bufferReader_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/Readers/pngReader.mixins.js":
/*!*****************************************!*\
  !*** ./src/Readers/pngReader.mixins.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const PNGReaderMixins = BaseDataSource => class extends BaseDataSource {
  makePNGReader(baseLink) {
    if (baseLink.startsWith('http')) {
      return async fileName => {
        let data = await causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["pngUtils"].fetchPNG(baseLink + fileName);
        return this.splitSample(data);
      };
    } else {
      return async fileName => {
        let data = await causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["pngUtils"].readPNG(baseLink + fileName);
        return this.splitSample(data);
      };
    }
  }

};

/* harmony default export */ __webpack_exports__["default"] = (PNGReaderMixins);

/***/ }),

/***/ "./src/causalNetDataSource.js":
/*!************************************!*\
  !*** ./src/causalNetDataSource.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functor */ "./src/functor.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var causal_net_sampling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.sampling */ "../causality-sampling/dist/@causalNet/sampling.web.js");
/* harmony import */ var causal_net_sampling__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_sampling__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Readers_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Readers/init */ "./src/Readers/init.js");





/**
 * This CausalNetDataSource class provides a standard implementation for pipeline Source.
 * { mixWith: [ SamplingMixins, PNGReaderMixins, BufferReaderMixins ]}
 * @class CausalNetDataSource
 * @extends Event
 * @example
 * [EXAMPLE ../examples/causalNetDataSource.js]
 */

class CausalNetDataSource extends causal_net_utils__WEBPACK_IMPORTED_MODULE_2__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Event"], [causal_net_sampling__WEBPACK_IMPORTED_MODULE_3__["SamplingMixins"], _Readers_init__WEBPACK_IMPORTED_MODULE_4__["PNGReaderMixins"], _Readers_init__WEBPACK_IMPORTED_MODULE_4__["BufferReaderMixins"]]) {
  /**
   *Creates an instance of CausalNetDataSource.
   * @param {Functor} functor
   * @param {Functor} sampling
   * @memberof CausalNetDataSource
   */
  constructor(functor, sampling) {
    super();
    this.F = functor;
    this.R = functor.CoreFunctor;
    this.Sampling = sampling;
  }

  async connect(baseLink) {
    let descriptionLink = baseLink + '/dataset.summary.json';
    this.description = await this.query(descriptionLink);
    this.description.BaseLink = baseLink;
    this.setChunks(this.description);
    this.setDataReader(this.description);
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
      return await causal_net_utils__WEBPACK_IMPORTED_MODULE_2__["jsonUtils"].fetchJson(link);
    } else {
      return await causal_net_utils__WEBPACK_IMPORTED_MODULE_2__["jsonUtils"].readJSON(link);
    }
  }

  get DataChunks() {
    return this.dataChunks;
  }

  get SampleReader() {
    return this.sampleReader;
  }

  get LabelReader() {
    return this.labelReader;
  }

  setChunks(description) {
    const SampleChunkName = description.SampleChunkName;
    const LabelChunkName = description.LabelChunkName;
    let chunkList = description.ChunkList;
    this.dataChunks = chunkList.map(cidx => {
      return {
        ChunkName: cidx,
        Sample: SampleChunkName.replace('{}', cidx),
        Label: LabelChunkName.replace('{}', cidx)
      };
    });
  }

  setDataReader(description) {
    const SampleType = description.SampleType;
    const LabelType = description.LabelType;
    const BaseLink = description.BaseLink;

    if (SampleType === 'Image/PNG') {
      this.sampleReader = this.makePNGReader(BaseLink);
    }

    if (LabelType === 'Buffer/OneHot') {
      this.labelReader = this.makeBufferReader(BaseLink);
    }
  }

  splitSample(data) {
    const SamplePerChunk = this.description.SamplePerChunk;
    const sampleSize = data.length / SamplePerChunk;
    return this.R.splitEvery(sampleSize, data);
  }

  chunkSelect(numChunks) {
    let chunkList = this.DataChunks;
    this.selectedChunks = this.Sampling.subSampling(numChunks, chunkList, false);
    return this.selectedChunks;
  }

  read() {
    if (!this.selectedChunks) {
      throw Error('selectChunks is not call');
    }

    let selectedChunks = this.selectedChunks;
    const SampleReader = this.SampleReader;
    const LabelReader = this.LabelReader;
    return new Promise(async (resolve, reject) => {
      for (let _ref of selectedChunks) {
        let {
          Sample,
          Label,
          ChunkName
        } = _ref;
        let sampleData = await SampleReader(Sample);
        let labelData = await LabelReader(Label);

        if (sampleData.length !== labelData.length) {
          reject('lengths of sample and label are not the same');
        }

        await this.emit('data', {
          'Sample': sampleData,
          'Label': labelData,
          ChunkName
        });
      }

      resolve(selectedChunks.length);
    });
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (new CausalNetDataSource(_functor__WEBPACK_IMPORTED_MODULE_1__["default"], causal_net_sampling__WEBPACK_IMPORTED_MODULE_3__["causalNetSampling"]));

/***/ }),

/***/ "./src/dataSource.mixins.js":
/*!**********************************!*\
  !*** ./src/dataSource.mixins.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This pipeline mixin provides DataSourceReader attibute, source reading methods for pipeline 
 * and getting Source in pipelineConfig
 * @class DataSourceMixins
 * @extends Event
 * @example
 * [EXAMPLE ../examples/dataset.mixins.babel.js]
 */
const DataSourceMixins = BasePipelineClass => class extends BasePipelineClass {
  set DataSourceReader(sourceReader) {
    this.sourceReader = sourceReader;
  }

  get DataSourceReader() {
    if (!this.sourceReader) {
      throw Error('sourceReader is not set');
    }

    return this.sourceReader;
  }

  setByConfig(pipelineConfig) {
    if (super.setByConfig) {
      super.setByConfig(pipelineConfig);
    }

    this.Logger.groupBegin('source');
    const {
      Source
    } = pipelineConfig.Dataset;
    this.DataSourceReader = Source;

    if (Source) {
      Source.pipe(this.Preprocessing);
    } else {
      this.Logger.log('***Source is not defined \n' + '***TrainDataGenerator and TestDataGenerator must be set manually');
    }

    this.Logger.groupEnd();
    return pipelineConfig;
  }

  async read() {
    return await this.DataSourceReader.read();
  }

};

/* harmony default export */ __webpack_exports__["default"] = (DataSourceMixins);

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

/* harmony default export */ __webpack_exports__["default"] = (new causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"]());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetDataSource, DataSourceMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetDataSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetDataSource */ "./src/causalNetDataSource.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetDataSource", function() { return _causalNetDataSource__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _dataSource_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataSource.mixins */ "./src/dataSource.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceMixins", function() { return _dataSource_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi4vY2F1c2FsaXR5LXNhbXBsaW5nL2Rpc3QvQGNhdXNhbE5ldC9zYW1wbGluZy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9SZWFkZXJzL2J1ZmZlclJlYWRlci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9SZWFkZXJzL2luaXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9SZWFkZXJzL3BuZ1JlYWRlci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9jYXVzYWxOZXREYXRhU291cmNlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvZGF0YVNvdXJjZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9jcnlwdG8gKGlnbm9yZWQpIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkJ1ZmZlclJlYWRlck1peGlucyIsIkJhc2VEYXRhU291cmNlIiwibWFrZUJ1ZmZlclJlYWRlciIsImJhc2VMaW5rIiwic3RhcnRzV2l0aCIsImZpbGVOYW1lIiwiZGF0YSIsImJ1ZmZlclV0aWxzIiwiZmV0Y2hCdWZmZXIiLCJzcGxpdFNhbXBsZSIsInJlYWRCdWZmZXIiLCJQTkdSZWFkZXJNaXhpbnMiLCJtYWtlUE5HUmVhZGVyIiwicG5nVXRpbHMiLCJmZXRjaFBORyIsInJlYWRQTkciLCJDYXVzYWxOZXREYXRhU291cmNlIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJTYW1wbGluZ01peGlucyIsImNvbnN0cnVjdG9yIiwiZnVuY3RvciIsInNhbXBsaW5nIiwiRiIsIlIiLCJDb3JlRnVuY3RvciIsIlNhbXBsaW5nIiwiY29ubmVjdCIsImRlc2NyaXB0aW9uTGluayIsImRlc2NyaXB0aW9uIiwicXVlcnkiLCJCYXNlTGluayIsInNldENodW5rcyIsInNldERhdGFSZWFkZXIiLCJsaW5rIiwianNvblV0aWxzIiwiZmV0Y2hKc29uIiwicmVhZEpTT04iLCJEYXRhQ2h1bmtzIiwiZGF0YUNodW5rcyIsIlNhbXBsZVJlYWRlciIsInNhbXBsZVJlYWRlciIsIkxhYmVsUmVhZGVyIiwibGFiZWxSZWFkZXIiLCJTYW1wbGVDaHVua05hbWUiLCJMYWJlbENodW5rTmFtZSIsImNodW5rTGlzdCIsIkNodW5rTGlzdCIsIm1hcCIsImNpZHgiLCJDaHVua05hbWUiLCJTYW1wbGUiLCJyZXBsYWNlIiwiTGFiZWwiLCJTYW1wbGVUeXBlIiwiTGFiZWxUeXBlIiwiU2FtcGxlUGVyQ2h1bmsiLCJzYW1wbGVTaXplIiwibGVuZ3RoIiwic3BsaXRFdmVyeSIsImNodW5rU2VsZWN0IiwibnVtQ2h1bmtzIiwic2VsZWN0ZWRDaHVua3MiLCJzdWJTYW1wbGluZyIsInJlYWQiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2FtcGxlRGF0YSIsImxhYmVsRGF0YSIsImVtaXQiLCJjYXVzYWxOZXRTYW1wbGluZyIsIkRhdGFTb3VyY2VNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIkRhdGFTb3VyY2VSZWFkZXIiLCJzb3VyY2VSZWFkZXIiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIlNvdXJjZSIsIkRhdGFzZXQiLCJwaXBlIiwiUHJlcHJvY2Vzc2luZyIsImxvZyIsImdyb3VwRW5kIiwiRnVuY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7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LE1BR0k7QUFDQSxXQUFLTCxNQUFMLENBQVlNLEdBQVosQ0FBZ0IsZ0NBQ0Esa0VBRGhCO0FBRUg7O0FBQ0QsU0FBS04sTUFBTCxDQUFZTyxRQUFaO0FBQ0EsV0FBT1IsY0FBUDtBQUNIOztBQUVELFFBQU1kLElBQU4sR0FBWTtBQUNSLFdBQU8sTUFBTSxLQUFLVyxnQkFBTCxDQUFzQlgsSUFBdEIsRUFBYjtBQUNIOztBQWpDMEUsQ0FBL0U7O0FBb0NlUywrRUFBZixFOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFDZSxtRUFBSWMsdURBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvZGF0YXNldHMud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L2RhdGFzZXRzXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiQGNhdXNhbE5ldC9kYXRhc2V0c1wiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gdGhpc1tcIndlYnBhY2tKc29ucF9jYXVzYWxOZXRfZGF0YXNldHNcIl0gPSB0aGlzW1wid2VicGFja0pzb25wX2NhdXNhbE5ldF9kYXRhc2V0c1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC5qc1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSxyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSxyZXF1aXJlKFwicmFuZG9tXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLFwiY2F1c2FsLW5ldC51dGlsc1wiLFwicmFuZG9tXCJdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHNbXCJAY2F1c2FsTmV0L3NhbXBsaW5nXCJdPXQocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSxyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSxyZXF1aXJlKFwicmFuZG9tXCIpKTplW1wiQGNhdXNhbE5ldC9zYW1wbGluZ1wiXT10KGVbXCJjYXVzYWwtbmV0LmNvcmVcIl0sZVtcImNhdXNhbC1uZXQudXRpbHNcIl0sZS5yYW5kb20pfSh0aGlzLGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZChyLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0zKX0oW2Z1bmN0aW9uKHQsbil7dC5leHBvcnRzPWV9LGZ1bmN0aW9uKGUsbil7ZS5leHBvcnRzPXR9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPW59LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtuLnIodCk7dmFyIHI9bigwKSxvPW4oMSksaT1uKDIpLHU9bi5uKGkpO3ZhciBsPWU9PihjbGFzcyBleHRlbmRzIGV7c3ViU2FtcGxpbmcoZSx0LG49ITApe2NvbnN0IHI9dGhpcy5SLG89dGhpcy5SYW5kb207bGV0IGk9QXJyYXkuaXNBcnJheSh0KT9yLmNsb25lKHQpOnIucmFuZ2UoMCx0KTtpZigwPT09aS5sZW5ndGgpdGhyb3cgRXJyb3IoXCJjYW5kaWRhdGUgbGVuZ3RoIHNob3VsZCBiZSBwb3NpdGl2ZVwiKTtsZXQgdT1bXSxsPXIuY2xvbmUoaSk7Y29uc3QgYT0oKT0+by5pbnQoMCxpLmxlbmd0aC0xKTtmb3IoO3UubGVuZ3RoPGU7KXtsZXQgZT1hKCk7KG58fG51bGwhPT1sW2VdKSYmKHU9Wy4uLnUsaVtlXV0sbnx8KGxbZV09bnVsbCkpfXJldHVybiB1fX0pO3ZhciBhPWU9PihjbGFzcyBleHRlbmRzIGV7bmVnU2FtcGxpbmcoZSx0LG4scj0hMCl7Y29uc3Qgbz10aGlzLlIsaT10aGlzLlJhbmRvbTtpZihvLmFueShlPT4hby50eXBlKE51bWJlcixlKXx8ZT4xfHxlPDAsbikpdGhyb3cgRXJyb3IoYCR7SlNPTi5zdHJpbmdpZnkobil9IGlzIG5vdCBhbGxvd2ApO2xldCB1PW8ucmVkdWNlKChlLHQpPT4oZVt0XT0xLzAsZSksby5jbG9uZShuKSx0KSxsPVtdLGE9by5jbG9uZSh1KTtjb25zdCBzPSgpPT5pLmludCgwLHUubGVuZ3RoLTEpO2Zvcig7bC5sZW5ndGg8ZTspe2xldCBlPXMoKTtjPXVbZV0saS5mbG9hdCgpPmMmJihyfHxudWxsIT09YVtlXSkmJihsPVsuLi5sLGVdLHJ8fChhW2VdPW51bGwpKX12YXIgYztyZXR1cm4gbH19KTt2YXIgcz1uZXcgY2xhc3MgZXh0ZW5kcyhvLnBsYXRmb3JtLm1peFdpdGgoci5GdW5jdG9yLFtsLGFdKSl7Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuUmFuZG9tPXUuYX19O3ZhciBjPWU9PihjbGFzcyBleHRlbmRzIGV7Z2V0IFNhbXBsaW5nKCl7aWYoIXRoaXMuc2FtcGxpbmcpdGhyb3cgRXJyb3IoXCJTYW1wbGluZyBpcyBub3Qgc2V0XCIpO3JldHVybiB0aGlzLnNhbXBsaW5nfXNldCBTYW1wbGluZyhlKXtvLmFzc2VydC5iZUluc3RhbmNlT2YoZSxyLkZ1bmN0b3IpLHRoaXMuc2FtcGxpbmc9ZX19KTtuLmQodCxcImNhdXNhbE5ldFNhbXBsaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gc30pLG4uZCh0LFwiU2FtcGxpbmdNaXhpbnNcIixmdW5jdGlvbigpe3JldHVybiBjfSksbi5kKHQsXCJTdWJTYW1wbGluZ01peGluc1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGx9KSxuLmQodCxcIk5lZ1NhbXBsaW5nTWl4aW5zXCIsZnVuY3Rpb24oKXtyZXR1cm4gYX0pfV0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zYW1wbGluZy53ZWIuanMubWFwIiwiaW1wb3J0IHsgYnVmZmVyVXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IEJ1ZmZlclJlYWRlck1peGlucyA9ICggQmFzZURhdGFTb3VyY2UgKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VEYXRhU291cmNlIHtcbiAgICBtYWtlQnVmZmVyUmVhZGVyKGJhc2VMaW5rKXtcbiAgICAgICAgXG4gICAgICAgIGlmKCBiYXNlTGluay5zdGFydHNXaXRoKCdodHRwJykgKXtcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoZmlsZU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGJ1ZmZlclV0aWxzLmZldGNoQnVmZmVyKGJhc2VMaW5rICsgZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwbGl0U2FtcGxlKGRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jIChmaWxlTmFtZSkgPT4geyBcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGJ1ZmZlclV0aWxzLnJlYWRCdWZmZXIoYmFzZUxpbmsgKyBmaWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3BsaXRTYW1wbGUoZGF0YSk7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlclJlYWRlck1peGluczsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFBOR1JlYWRlck1peGlucyB9IGZyb20gJy4vcG5nUmVhZGVyLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1ZmZlclJlYWRlck1peGlucyB9IGZyb20gJy4vYnVmZmVyUmVhZGVyLm1peGlucyc7IiwiaW1wb3J0IHsgcG5nVXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IFBOR1JlYWRlck1peGlucyA9ICggQmFzZURhdGFTb3VyY2UgKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VEYXRhU291cmNlIHtcbiAgICBtYWtlUE5HUmVhZGVyKGJhc2VMaW5rKXtcbiAgICAgICAgaWYoIGJhc2VMaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSApe1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jIChmaWxlTmFtZSkgPT4geyBcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHBuZ1V0aWxzLmZldGNoUE5HKGJhc2VMaW5rICsgZmlsZU5hbWUpOyBcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zcGxpdFNhbXBsZShkYXRhKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBhc3luYyAoZmlsZU5hbWUpID0+IHsgXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCBwbmdVdGlscy5yZWFkUE5HKGJhc2VMaW5rICsgZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwbGl0U2FtcGxlKGRhdGEpOyBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQTkdSZWFkZXJNaXhpbnM7IiwiaW1wb3J0IHsgRXZlbnQgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBmdW5jdG9yIH0gZnJvbSAnLi9mdW5jdG9yJztcbmltcG9ydCB7IHBsYXRmb3JtLCBqc29uVXRpbHMgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IGNhdXNhbE5ldFNhbXBsaW5nLCBTYW1wbGluZ01peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQuc2FtcGxpbmcnO1xuaW1wb3J0IHsgUE5HUmVhZGVyTWl4aW5zLCBCdWZmZXJSZWFkZXJNaXhpbnMgfSBmcm9tICcuL1JlYWRlcnMvaW5pdCc7XG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0RGF0YVNvdXJjZSBjbGFzcyBwcm92aWRlcyBhIHN0YW5kYXJkIGltcGxlbWVudGF0aW9uIGZvciBwaXBlbGluZSBTb3VyY2UuXG4gKiB7IG1peFdpdGg6IFsgU2FtcGxpbmdNaXhpbnMsIFBOR1JlYWRlck1peGlucywgQnVmZmVyUmVhZGVyTWl4aW5zIF19XG4gKiBAY2xhc3MgQ2F1c2FsTmV0RGF0YVNvdXJjZVxuICogQGV4dGVuZHMgRXZlbnRcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXREYXRhU291cmNlLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXREYXRhU291cmNlIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggRXZlbnQsIFtcbiAgICBTYW1wbGluZ01peGlucywgUE5HUmVhZGVyTWl4aW5zLCBCdWZmZXJSZWFkZXJNaXhpbnMgXSApe1xuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDYXVzYWxOZXREYXRhU291cmNlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rvcn0gZnVuY3RvclxuICAgICAqIEBwYXJhbSB7RnVuY3Rvcn0gc2FtcGxpbmdcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RGF0YVNvdXJjZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZ1bmN0b3IsIHNhbXBsaW5nKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gZnVuY3Rvci5Db3JlRnVuY3RvcjtcbiAgICAgICAgdGhpcy5TYW1wbGluZyA9IHNhbXBsaW5nO1xuICAgIH1cblxuICAgIGFzeW5jIGNvbm5lY3QoYmFzZUxpbmspe1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25MaW5rID0gYmFzZUxpbmsgKyAnL2RhdGFzZXQuc3VtbWFyeS5qc29uJztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnkoZGVzY3JpcHRpb25MaW5rKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbi5CYXNlTGluayA9IGJhc2VMaW5rO1xuICAgICAgICB0aGlzLnNldENodW5rcyh0aGlzLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5zZXREYXRhUmVhZGVyKHRoaXMuZGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgXG5cbiAgICAvKipcbiAgICAgKiBmZXRjaCBvciByZWFkIGNvbmZpZ3VyZSBkZXBlbmRzIG9uIHByb3ZpZWQgbGluayBmb3JtYXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gbGlua1xuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5KGxpbmspe1xuICAgICAgICBpZihsaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSl7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQganNvblV0aWxzLmZldGNoSnNvbihsaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGpzb25VdGlscy5yZWFkSlNPTihsaW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBEYXRhQ2h1bmtzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFDaHVua3M7XG4gICAgfVxuXG4gICAgZ2V0IFNhbXBsZVJlYWRlcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5zYW1wbGVSZWFkZXI7XG4gICAgfVxuXG4gICAgZ2V0IExhYmVsUmVhZGVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsUmVhZGVyO1xuICAgIH1cblxuICAgIHNldENodW5rcyhkZXNjcmlwdGlvbil7XG4gICAgICAgIGNvbnN0IFNhbXBsZUNodW5rTmFtZSA9IGRlc2NyaXB0aW9uLlNhbXBsZUNodW5rTmFtZTtcbiAgICAgICAgY29uc3QgTGFiZWxDaHVua05hbWUgPSBkZXNjcmlwdGlvbi5MYWJlbENodW5rTmFtZTtcbiAgICAgICAgbGV0IGNodW5rTGlzdD0gZGVzY3JpcHRpb24uQ2h1bmtMaXN0O1xuICAgICAgICB0aGlzLmRhdGFDaHVua3MgPSBjaHVua0xpc3QubWFwKCBjaWR4PT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7ICBDaHVua05hbWU6IGNpZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNhbXBsZTogU2FtcGxlQ2h1bmtOYW1lLnJlcGxhY2UoJ3t9JywgY2lkeCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExhYmVsOiBMYWJlbENodW5rTmFtZS5yZXBsYWNlKCd7fScsIGNpZHgpICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHNldERhdGFSZWFkZXIoZGVzY3JpcHRpb24pe1xuICAgICAgICBjb25zdCBTYW1wbGVUeXBlID0gZGVzY3JpcHRpb24uU2FtcGxlVHlwZTtcbiAgICAgICAgY29uc3QgTGFiZWxUeXBlID0gZGVzY3JpcHRpb24uTGFiZWxUeXBlO1xuICAgICAgICBjb25zdCBCYXNlTGluayA9IGRlc2NyaXB0aW9uLkJhc2VMaW5rO1xuICAgICAgICBpZihTYW1wbGVUeXBlID09PSAnSW1hZ2UvUE5HJyl7XG4gICAgICAgICAgICB0aGlzLnNhbXBsZVJlYWRlciA9IHRoaXMubWFrZVBOR1JlYWRlcihCYXNlTGluayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoTGFiZWxUeXBlID09PSAnQnVmZmVyL09uZUhvdCcpe1xuICAgICAgICAgICAgdGhpcy5sYWJlbFJlYWRlciA9IHRoaXMubWFrZUJ1ZmZlclJlYWRlcihCYXNlTGluayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGxpdFNhbXBsZShkYXRhKXtcbiAgICAgICAgY29uc3QgU2FtcGxlUGVyQ2h1bmsgPSB0aGlzLmRlc2NyaXB0aW9uLlNhbXBsZVBlckNodW5rO1xuICAgICAgICBjb25zdCBzYW1wbGVTaXplID0gZGF0YS5sZW5ndGggLyBTYW1wbGVQZXJDaHVuaztcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5zcGxpdEV2ZXJ5KHNhbXBsZVNpemUsIGRhdGEpO1xuICAgIH1cblxuICAgIGNodW5rU2VsZWN0KG51bUNodW5rcyl7XG4gICAgICAgIGxldCBjaHVua0xpc3QgPSB0aGlzLkRhdGFDaHVua3M7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaHVua3MgPSB0aGlzLlNhbXBsaW5nLnN1YlNhbXBsaW5nKG51bUNodW5rcywgY2h1bmtMaXN0LCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQ2h1bmtzO1xuICAgIH1cblxuICAgIHJlYWQoKXtcbiAgICAgICAgaWYoIXRoaXMuc2VsZWN0ZWRDaHVua3Mpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3NlbGVjdENodW5rcyBpcyBub3QgY2FsbCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxlY3RlZENodW5rcyA9IHRoaXMuc2VsZWN0ZWRDaHVua3M7XG4gICAgICAgIGNvbnN0IFNhbXBsZVJlYWRlciA9IHRoaXMuU2FtcGxlUmVhZGVyO1xuICAgICAgICBjb25zdCBMYWJlbFJlYWRlciA9IHRoaXMuTGFiZWxSZWFkZXI7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgZm9yKGxldCB7IFNhbXBsZSwgTGFiZWwsIENodW5rTmFtZSB9IG9mIHNlbGVjdGVkQ2h1bmtzICl7XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZURhdGEgPSBhd2FpdCBTYW1wbGVSZWFkZXIoU2FtcGxlKTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxEYXRhID0gYXdhaXQgTGFiZWxSZWFkZXIoTGFiZWwpO1xuICAgICAgICAgICAgICAgIGlmKHNhbXBsZURhdGEubGVuZ3RoICE9PSBsYWJlbERhdGEubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdsZW5ndGhzIG9mIHNhbXBsZSBhbmQgbGFiZWwgYXJlIG5vdCB0aGUgc2FtZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmVtaXQoJ2RhdGEnLCB7ICdTYW1wbGUnOiBzYW1wbGVEYXRhLCAnTGFiZWwnOiBsYWJlbERhdGEsICBDaHVua05hbWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHNlbGVjdGVkQ2h1bmtzLmxlbmd0aCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXREYXRhU291cmNlKGZ1bmN0b3IsIGNhdXNhbE5ldFNhbXBsaW5nKTsiLCIvKipcbiAqIFRoaXMgcGlwZWxpbmUgbWl4aW4gcHJvdmlkZXMgRGF0YVNvdXJjZVJlYWRlciBhdHRpYnV0ZSwgc291cmNlIHJlYWRpbmcgbWV0aG9kcyBmb3IgcGlwZWxpbmUgXG4gKiBhbmQgZ2V0dGluZyBTb3VyY2UgaW4gcGlwZWxpbmVDb25maWdcbiAqIEBjbGFzcyBEYXRhU291cmNlTWl4aW5zXG4gKiBAZXh0ZW5kcyBFdmVudFxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2RhdGFzZXQubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBEYXRhU291cmNlTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3Mge1xuICAgXG4gICAgc2V0IERhdGFTb3VyY2VSZWFkZXIoc291cmNlUmVhZGVyKXtcbiAgICAgICAgdGhpcy5zb3VyY2VSZWFkZXIgPSBzb3VyY2VSZWFkZXI7XG4gICAgfVxuXG4gICAgZ2V0IERhdGFTb3VyY2VSZWFkZXIoKXtcbiAgICAgICAgaWYoIXRoaXMuc291cmNlUmVhZGVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzb3VyY2VSZWFkZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZVJlYWRlcjtcbiAgICB9XG5cbiAgICBzZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyl7XG4gICAgICAgIGlmKHN1cGVyLnNldEJ5Q29uZmlnKXtcbiAgICAgICAgICAgIHN1cGVyLnNldEJ5Q29uZmlnKHBpcGVsaW5lQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEJlZ2luKCdzb3VyY2UnKTtcbiAgICAgICAgY29uc3QgeyBTb3VyY2UgfSA9IHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQ7XG4gICAgICAgIHRoaXMuRGF0YVNvdXJjZVJlYWRlciA9IFNvdXJjZTtcbiAgICAgICAgaWYoU291cmNlKXtcbiAgICAgICAgICAgIFNvdXJjZS5waXBlKHRoaXMuUHJlcHJvY2Vzc2luZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuTG9nZ2VyLmxvZygnKioqU291cmNlIGlzIG5vdCBkZWZpbmVkIFxcbicgKyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKioqVHJhaW5EYXRhR2VuZXJhdG9yIGFuZCBUZXN0RGF0YUdlbmVyYXRvciBtdXN0IGJlIHNldCBtYW51YWxseScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIHJldHVybiBwaXBlbGluZUNvbmZpZztcbiAgICB9XG5cbiAgICBhc3luYyByZWFkKCl7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLkRhdGFTb3VyY2VSZWFkZXIucmVhZCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFTb3VyY2VNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5leHBvcnQgZGVmYXVsdCBuZXcgRnVuY3RvcigpOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2F1c2FsTmV0RGF0YVNvdXJjZSB9IGZyb20gJy4vY2F1c2FsTmV0RGF0YVNvdXJjZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERhdGFTb3VyY2VNaXhpbnMgfSBmcm9tICcuL2RhdGFTb3VyY2UubWl4aW5zJzsiLCIvKiAoaWdub3JlZCkgKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9