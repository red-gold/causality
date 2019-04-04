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

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! random */ "../../node_modules/random/index.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__, __WEBPACK_EXTERNAL_MODULE_random__) {
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

/***/ "./src/causalNetSampling.js":
/*!**********************************!*\
  !*** ./src/causalNetSampling.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! random */ "random");
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(random__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _subSampling_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subSampling.mixins */ "./src/subSampling.mixins.js");
/* harmony import */ var _negSampling_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./negSampling.mixins */ "./src/negSampling.mixins.js");





/**
 * This CausalNetSampling class provides sampling methods
 * mixwith:
 * [ SubSamplingMixins, NegSamplingMixins ]
 * @class CausalNetSampling
 * @extends Functor
 * @example
 * [EXAMPLE ../examples/causalNetSampling.babel.js]
 */

class CausalNetSampling extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_subSampling_mixins__WEBPACK_IMPORTED_MODULE_3__["default"], _negSampling_mixins__WEBPACK_IMPORTED_MODULE_4__["default"]]) {
  constructor() {
    super();
    this.Random = random__WEBPACK_IMPORTED_MODULE_2___default.a;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetSampling());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetSampling, SamplingMixins, SubSamplingMixins, NegSamplingMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetSampling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetSampling */ "./src/causalNetSampling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetSampling", function() { return _causalNetSampling__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _sampling_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sampling.mixins */ "./src/sampling.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SamplingMixins", function() { return _sampling_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _subSampling_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subSampling.mixins */ "./src/subSampling.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubSamplingMixins", function() { return _subSampling_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _negSampling_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./negSampling.mixins */ "./src/negSampling.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NegSamplingMixins", function() { return _negSampling_mixins__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/negSampling.mixins.js":
/*!***********************************!*\
  !*** ./src/negSampling.mixins.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const NegativeSamplingMixins = BaseSamplingClass => class extends BaseSamplingClass {
  /**
   * Perform negative sampling given the select prob of ids and list of positive samples
   * @param { Number } negativeSize - size to sample
   * @param { Array } positiveSamples - Array of possitive Ids
   * @param { Array } candidateProbs - Array of probablity of candidate Ids
   * @param { Boolean } [replacable=true] - if true, no duplicated sampling Id returned
   * @returns { Array } array of sampled Ids
   */
  negSampling(negativeSize, positiveSamples, candidateProbs, replacable = true) {
    const R = this.R,
          Random = this.Random;

    if (R.any(v => !R.type(Number, v) || v > 1 || v < 0, candidateProbs)) {
      throw Error(`${JSON.stringify(candidateProbs)} is not allow`);
    }

    let seletionProbs = R.reduce((selectionProbs, pidx) => {
      selectionProbs[pidx] = Infinity; //positive candidate never be choosed

      return selectionProbs;
    }, R.clone(candidateProbs), positiveSamples);
    let samples = [],
        takenIdxs = R.clone(seletionProbs);

    const GenNewCandidateIdx = () => Random.int(0, seletionProbs.length - 1);

    const SelectIfHighProb = prob => {
      let rand = Random.float();
      return rand > prob;
    };

    while (samples.length < negativeSize) {
      let idx = GenNewCandidateIdx();
      let selected = SelectIfHighProb(seletionProbs[idx]);

      if (!selected) {
        continue;
      }

      if (!replacable && takenIdxs[idx] === null) {
        continue;
      }

      samples = [...samples, idx];

      if (!replacable) {
        takenIdxs[idx] = null; //non replaceable
      }
    }

    return samples;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (NegativeSamplingMixins);

/***/ }),

/***/ "./src/sampling.mixins.js":
/*!********************************!*\
  !*** ./src/sampling.mixins.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);


/**
 * This SamplingMixins class provide mixins for PipelineClass or DatasetClass
 * @class SamplingMixins
 * @extends BasePipelineClass
 * @example
 * [EXAMPLE ../examples/sampling.mixins.babel.js]
 */

const SamplingMixins = BasePipelineClass => class extends BasePipelineClass {
  /**
   * get current random instance
   */
  get Sampling() {
    if (!this.sampling) {
      throw Error(`Sampling is not set`);
    }

    return this.sampling;
  }
  /**
   * set Sampling instance
   * @readonly
   */


  set Sampling(sampling) {
    causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["assert"].beInstanceOf(sampling, causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"]);
    this.sampling = sampling;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (SamplingMixins);

/***/ }),

/***/ "./src/subSampling.mixins.js":
/*!***********************************!*\
  !*** ./src/subSampling.mixins.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SubSamplingMixins = BaseSamplingClass => class extends BaseSamplingClass {
  /**
   * Perform uniform sample a sub set of Ids given the candidate list
   * @param { Number } samplingSize
   * @param { Array|Number } candidateList - list of candidates or size of candidate list
   * @param { Boolean } [replacable=true] - if true, no duplicated sampling Id returned
   * @returns { Array } array of sampled Ids
   */
  subSampling(samplingSize, candidateList, replacable = true) {
    const R = this.R,
          Random = this.Random;
    let candidates = Array.isArray(candidateList) ? R.clone(candidateList) : R.range(0, candidateList);

    if (candidates.length === 0) {
      throw Error('candidate length should be positive');
    }

    let samples = [],
        takenIdxs = R.clone(candidates);

    const GenNewCandidateIdx = () => Random.int(0, candidates.length - 1);

    while (samples.length < samplingSize) {
      let idx = GenNewCandidateIdx();

      if (!replacable && takenIdxs[idx] === null) {
        continue;
      }

      samples = [...samples, candidates[idx]];

      if (!replacable) {
        takenIdxs[idx] = null; //non replaceable
      }
    }

    return samples;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (SubSamplingMixins);

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

/***/ }),

/***/ "random":
/*!*************************!*\
  !*** external "random" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_random__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvLi9zcmMvY2F1c2FsTmV0U2FtcGxpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL3NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL3N1YlNhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwicmFuZG9tXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0U2FtcGxpbmciLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlRnVuY3RvciIsIlN1YlNhbXBsaW5nTWl4aW5zIiwiTmVnU2FtcGxpbmdNaXhpbnMiLCJjb25zdHJ1Y3RvciIsIlJhbmRvbSIsInJhbmRvbSIsIk5lZ2F0aXZlU2FtcGxpbmdNaXhpbnMiLCJCYXNlU2FtcGxpbmdDbGFzcyIsIm5lZ1NhbXBsaW5nIiwibmVnYXRpdmVTaXplIiwicG9zaXRpdmVTYW1wbGVzIiwiY2FuZGlkYXRlUHJvYnMiLCJyZXBsYWNhYmxlIiwiUiIsImFueSIsInYiLCJ0eXBlIiwiTnVtYmVyIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VsZXRpb25Qcm9icyIsInJlZHVjZSIsInNlbGVjdGlvblByb2JzIiwicGlkeCIsIkluZmluaXR5IiwiY2xvbmUiLCJzYW1wbGVzIiwidGFrZW5JZHhzIiwiR2VuTmV3Q2FuZGlkYXRlSWR4IiwiaW50IiwibGVuZ3RoIiwiU2VsZWN0SWZIaWdoUHJvYiIsInByb2IiLCJyYW5kIiwiZmxvYXQiLCJpZHgiLCJzZWxlY3RlZCIsIlNhbXBsaW5nTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJTYW1wbGluZyIsInNhbXBsaW5nIiwiYXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiRnVuY3RvciIsInN1YlNhbXBsaW5nIiwic2FtcGxpbmdTaXplIiwiY2FuZGlkYXRlTGlzdCIsImNhbmRpZGF0ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJyYW5nZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFB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QUFHLEVBQWQ7QUFBQSxRQUFrQkMsU0FBUyxHQUFHZixDQUFDLENBQUNhLEtBQUYsQ0FBUXNCLFVBQVIsQ0FBOUI7O0FBQ0EsVUFBTW5CLGtCQUFrQixHQUFHLE1BQUl6QixNQUFNLENBQUMwQixHQUFQLENBQVcsQ0FBWCxFQUFja0IsVUFBVSxDQUFDakIsTUFBWCxHQUFrQixDQUFoQyxDQUEvQjs7QUFDQSxXQUFNSixPQUFPLENBQUNJLE1BQVIsR0FBaUJlLFlBQXZCLEVBQW9DO0FBQ2hDLFVBQUlWLEdBQUcsR0FBR1Asa0JBQWtCLEVBQTVCOztBQUNBLFVBQUcsQ0FBQ2pCLFVBQUQsSUFBZWdCLFNBQVMsQ0FBQ1EsR0FBRCxDQUFULEtBQWlCLElBQW5DLEVBQXdDO0FBQ3BDO0FBQ0g7O0FBQ0RULGFBQU8sR0FBRyxDQUFDLEdBQUdBLE9BQUosRUFBYXFCLFVBQVUsQ0FBQ1osR0FBRCxDQUF2QixDQUFWOztBQUNBLFVBQUcsQ0FBQ3hCLFVBQUosRUFBZTtBQUNYZ0IsaUJBQVMsQ0FBQ1EsR0FBRCxDQUFULEdBQWUsSUFBZixDQURXLENBQ1M7QUFDdkI7QUFDSjs7QUFDRCxXQUFPVCxPQUFQO0FBQ0g7O0FBM0IyRSxDQUFoRjs7QUE2QmUxQixnRkFBZixFOzs7Ozs7Ozs7OztBQzdCQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJAY2F1c2FsTmV0L3NhbXBsaW5nLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJyYW5kb21cIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiLCBcInJhbmRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L3NhbXBsaW5nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcInJhbmRvbVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9zYW1wbGluZ1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0sIHJvb3RbXCJyYW5kb21cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFuZG9tX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCByYW5kb20gZnJvbSAncmFuZG9tJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgU3ViU2FtcGxpbmdNaXhpbnMgfSBmcm9tICcuL3N1YlNhbXBsaW5nLm1peGlucyc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIE5lZ1NhbXBsaW5nTWl4aW5zIH0gZnJvbSAnLi9uZWdTYW1wbGluZy5taXhpbnMnO1xuXG4vKipcbiAqIFRoaXMgQ2F1c2FsTmV0U2FtcGxpbmcgY2xhc3MgcHJvdmlkZXMgc2FtcGxpbmcgbWV0aG9kc1xuICogbWl4d2l0aDpcbiAqIFsgU3ViU2FtcGxpbmdNaXhpbnMsIE5lZ1NhbXBsaW5nTWl4aW5zIF1cbiAqIEBjbGFzcyBDYXVzYWxOZXRTYW1wbGluZ1xuICogQGV4dGVuZHMgRnVuY3RvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldFNhbXBsaW5nLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRTYW1wbGluZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoIEJhc2VGdW5jdG9yLCBcbiAgICBbIFN1YlNhbXBsaW5nTWl4aW5zLCBOZWdTYW1wbGluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLlJhbmRvbSA9IHJhbmRvbTsgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0U2FtcGxpbmcoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFNhbXBsaW5nIH0gZnJvbSAnLi9jYXVzYWxOZXRTYW1wbGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNhbXBsaW5nTWl4aW5zIH0gZnJvbSAnLi9zYW1wbGluZy5taXhpbnMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN1YlNhbXBsaW5nTWl4aW5zIH0gZnJvbSAnLi9zdWJTYW1wbGluZy5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOZWdTYW1wbGluZ01peGlucyB9IGZyb20gJy4vbmVnU2FtcGxpbmcubWl4aW5zJzsiLCJjb25zdCBOZWdhdGl2ZVNhbXBsaW5nTWl4aW5zID0gKEJhc2VTYW1wbGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVNhbXBsaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBuZWdhdGl2ZSBzYW1wbGluZyBnaXZlbiB0aGUgc2VsZWN0IHByb2Igb2YgaWRzIGFuZCBsaXN0IG9mIHBvc2l0aXZlIHNhbXBsZXNcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBuZWdhdGl2ZVNpemUgLSBzaXplIHRvIHNhbXBsZVxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gcG9zaXRpdmVTYW1wbGVzIC0gQXJyYXkgb2YgcG9zc2l0aXZlIElkc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gY2FuZGlkYXRlUHJvYnMgLSBBcnJheSBvZiBwcm9iYWJsaXR5IG9mIGNhbmRpZGF0ZSBJZHNcbiAgICAgKiBAcGFyYW0geyBCb29sZWFuIH0gW3JlcGxhY2FibGU9dHJ1ZV0gLSBpZiB0cnVlLCBubyBkdXBsaWNhdGVkIHNhbXBsaW5nIElkIHJldHVybmVkXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IGFycmF5IG9mIHNhbXBsZWQgSWRzXG4gICAgICovXG4gICAgbmVnU2FtcGxpbmcobmVnYXRpdmVTaXplLCBwb3NpdGl2ZVNhbXBsZXMsIGNhbmRpZGF0ZVByb2JzLCByZXBsYWNhYmxlPXRydWUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBSYW5kb20gPSB0aGlzLlJhbmRvbTtcbiAgICAgICAgaWYoUi5hbnkoKHYpPT4gIVIudHlwZShOdW1iZXIsdikgfHwgdiA+IDEgfHwgdiA8IDAsIGNhbmRpZGF0ZVByb2JzKSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtKU09OLnN0cmluZ2lmeShjYW5kaWRhdGVQcm9icyl9IGlzIG5vdCBhbGxvd2ApO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxldGlvblByb2JzID0gUi5yZWR1Y2UoKHNlbGVjdGlvblByb2JzLCBwaWR4KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Qcm9ic1twaWR4XSA9IEluZmluaXR5Oy8vcG9zaXRpdmUgY2FuZGlkYXRlIG5ldmVyIGJlIGNob29zZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvblByb2JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFIuY2xvbmUoY2FuZGlkYXRlUHJvYnMpLCBwb3NpdGl2ZVNhbXBsZXMpO1xuICAgICAgICBsZXQgc2FtcGxlcyA9IFtdLCB0YWtlbklkeHMgPSBSLmNsb25lKHNlbGV0aW9uUHJvYnMpO1xuICAgICAgICBjb25zdCBHZW5OZXdDYW5kaWRhdGVJZHggPSAoKT0+UmFuZG9tLmludCgwLCBzZWxldGlvblByb2JzLmxlbmd0aC0xKTtcbiAgICAgICAgY29uc3QgU2VsZWN0SWZIaWdoUHJvYiA9IChwcm9iKT0+e1xuICAgICAgICAgICAgbGV0IHJhbmQgPSBSYW5kb20uZmxvYXQoKTtcbiAgICAgICAgICAgIHJldHVybiByYW5kPnByb2I7XG4gICAgICAgIH07XG4gICAgICAgIHdoaWxlKHNhbXBsZXMubGVuZ3RoIDwgbmVnYXRpdmVTaXplKXtcbiAgICAgICAgICAgIGxldCBpZHggPSBHZW5OZXdDYW5kaWRhdGVJZHgoKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IFNlbGVjdElmSGlnaFByb2Ioc2VsZXRpb25Qcm9ic1tpZHhdKTtcbiAgICAgICAgICAgIGlmKCFzZWxlY3RlZCl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighcmVwbGFjYWJsZSAmJiB0YWtlbklkeHNbaWR4XT09PW51bGwpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2FtcGxlcyA9IFsuLi5zYW1wbGVzLCBpZHhdO1xuICAgICAgICAgICAgaWYoIXJlcGxhY2FibGUpe1xuICAgICAgICAgICAgICAgIHRha2VuSWR4c1tpZHhdPW51bGw7Ly9ub24gcmVwbGFjZWFibGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICAgICAgcmV0dXJuIHNhbXBsZXM7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5lZ2F0aXZlU2FtcGxpbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBTYW1wbGluZ01peGlucyBjbGFzcyBwcm92aWRlIG1peGlucyBmb3IgUGlwZWxpbmVDbGFzcyBvciBEYXRhc2V0Q2xhc3NcbiAqIEBjbGFzcyBTYW1wbGluZ01peGluc1xuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9zYW1wbGluZy5taXhpbnMuYmFiZWwuanNdXG4gKi9cbmNvbnN0IFNhbXBsaW5nTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3N7XG4gICAgLyoqXG4gICAgICogZ2V0IGN1cnJlbnQgcmFuZG9tIGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0IFNhbXBsaW5nKCl7XG4gICAgICAgIGlmKCF0aGlzLnNhbXBsaW5nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBTYW1wbGluZyBpcyBub3Qgc2V0YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxpbmc7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHNldCBTYW1wbGluZyBpbnN0YW5jZVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHNldCBTYW1wbGluZyhzYW1wbGluZyl7XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2Yoc2FtcGxpbmcsIEZ1bmN0b3IpO1xuICAgICAgICB0aGlzLnNhbXBsaW5nID0gc2FtcGxpbmc7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FtcGxpbmdNaXhpbnM7IiwiY29uc3QgU3ViU2FtcGxpbmdNaXhpbnMgPSAoQmFzZVNhbXBsaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZVNhbXBsaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybSB1bmlmb3JtIHNhbXBsZSBhIHN1YiBzZXQgb2YgSWRzIGdpdmVuIHRoZSBjYW5kaWRhdGUgbGlzdFxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IHNhbXBsaW5nU2l6ZVxuICAgICAqIEBwYXJhbSB7IEFycmF5fE51bWJlciB9IGNhbmRpZGF0ZUxpc3QgLSBsaXN0IG9mIGNhbmRpZGF0ZXMgb3Igc2l6ZSBvZiBjYW5kaWRhdGUgbGlzdFxuICAgICAqIEBwYXJhbSB7IEJvb2xlYW4gfSBbcmVwbGFjYWJsZT10cnVlXSAtIGlmIHRydWUsIG5vIGR1cGxpY2F0ZWQgc2FtcGxpbmcgSWQgcmV0dXJuZWRcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2Ygc2FtcGxlZCBJZHNcbiAgICAgKi9cbiAgICBzdWJTYW1wbGluZyhzYW1wbGluZ1NpemUsIGNhbmRpZGF0ZUxpc3QsIHJlcGxhY2FibGU9dHJ1ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFJhbmRvbSA9IHRoaXMuUmFuZG9tO1xuICAgICAgICBsZXQgY2FuZGlkYXRlcyA9IEFycmF5LmlzQXJyYXkoY2FuZGlkYXRlTGlzdCk/Ui5jbG9uZShjYW5kaWRhdGVMaXN0KTpSLnJhbmdlKDAsIGNhbmRpZGF0ZUxpc3QpO1xuICAgICAgICBpZihjYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignY2FuZGlkYXRlIGxlbmd0aCBzaG91bGQgYmUgcG9zaXRpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2FtcGxlcyA9IFtdLCB0YWtlbklkeHMgPSBSLmNsb25lKGNhbmRpZGF0ZXMpO1xuICAgICAgICBjb25zdCBHZW5OZXdDYW5kaWRhdGVJZHggPSAoKT0+UmFuZG9tLmludCgwLCBjYW5kaWRhdGVzLmxlbmd0aC0xKTtcbiAgICAgICAgd2hpbGUoc2FtcGxlcy5sZW5ndGggPCBzYW1wbGluZ1NpemUpe1xuICAgICAgICAgICAgbGV0IGlkeCA9IEdlbk5ld0NhbmRpZGF0ZUlkeCgpO1xuICAgICAgICAgICAgaWYoIXJlcGxhY2FibGUgJiYgdGFrZW5JZHhzW2lkeF09PT1udWxsKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhbXBsZXMgPSBbLi4uc2FtcGxlcywgY2FuZGlkYXRlc1tpZHhdXTtcbiAgICAgICAgICAgIGlmKCFyZXBsYWNhYmxlKXtcbiAgICAgICAgICAgICAgICB0YWtlbklkeHNbaWR4XT1udWxsOy8vbm9uIHJlcGxhY2VhYmxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgICAgIHJldHVybiBzYW1wbGVzO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBTdWJTYW1wbGluZ01peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFuZG9tX187Il0sInNvdXJjZVJvb3QiOiIifQ==

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
 * This CausalNetDataSource class provides standard implementation for pipeline Source.
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
 * This DataSourceMixins class provides DataSourceReader attibute, source reading methods for pipeline
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi4vY2F1c2FsaXR5LXNhbXBsaW5nL2Rpc3QvQGNhdXNhbE5ldC9zYW1wbGluZy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9SZWFkZXJzL2J1ZmZlclJlYWRlci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9SZWFkZXJzL2luaXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9SZWFkZXJzL3BuZ1JlYWRlci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9jYXVzYWxOZXREYXRhU291cmNlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvZGF0YVNvdXJjZS5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdG9yLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9jcnlwdG8gKGlnbm9yZWQpIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIl0sIm5hbWVzIjpbIkJ1ZmZlclJlYWRlck1peGlucyIsIkJhc2VEYXRhU291cmNlIiwibWFrZUJ1ZmZlclJlYWRlciIsImJhc2VMaW5rIiwic3RhcnRzV2l0aCIsImZpbGVOYW1lIiwiZGF0YSIsImJ1ZmZlclV0aWxzIiwiZmV0Y2hCdWZmZXIiLCJzcGxpdFNhbXBsZSIsInJlYWRCdWZmZXIiLCJQTkdSZWFkZXJNaXhpbnMiLCJtYWtlUE5HUmVhZGVyIiwicG5nVXRpbHMiLCJmZXRjaFBORyIsInJlYWRQTkciLCJDYXVzYWxOZXREYXRhU291cmNlIiwicGxhdGZvcm0iLCJtaXhXaXRoIiwiRXZlbnQiLCJTYW1wbGluZ01peGlucyIsImNvbnN0cnVjdG9yIiwiZnVuY3RvciIsInNhbXBsaW5nIiwiRiIsIlIiLCJDb3JlRnVuY3RvciIsIlNhbXBsaW5nIiwiY29ubmVjdCIsImRlc2NyaXB0aW9uTGluayIsImRlc2NyaXB0aW9uIiwicXVlcnkiLCJCYXNlTGluayIsInNldENodW5rcyIsInNldERhdGFSZWFkZXIiLCJsaW5rIiwianNvblV0aWxzIiwiZmV0Y2hKc29uIiwicmVhZEpTT04iLCJEYXRhQ2h1bmtzIiwiZGF0YUNodW5rcyIsIlNhbXBsZVJlYWRlciIsInNhbXBsZVJlYWRlciIsIkxhYmVsUmVhZGVyIiwibGFiZWxSZWFkZXIiLCJTYW1wbGVDaHVua05hbWUiLCJMYWJlbENodW5rTmFtZSIsImNodW5rTGlzdCIsIkNodW5rTGlzdCIsIm1hcCIsImNpZHgiLCJDaHVua05hbWUiLCJTYW1wbGUiLCJyZXBsYWNlIiwiTGFiZWwiLCJTYW1wbGVUeXBlIiwiTGFiZWxUeXBlIiwiU2FtcGxlUGVyQ2h1bmsiLCJzYW1wbGVTaXplIiwibGVuZ3RoIiwic3BsaXRFdmVyeSIsImNodW5rU2VsZWN0IiwibnVtQ2h1bmtzIiwic2VsZWN0ZWRDaHVua3MiLCJzdWJTYW1wbGluZyIsInJlYWQiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2FtcGxlRGF0YSIsImxhYmVsRGF0YSIsImVtaXQiLCJjYXVzYWxOZXRTYW1wbGluZyIsIkRhdGFTb3VyY2VNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIkRhdGFTb3VyY2VSZWFkZXIiLCJzb3VyY2VSZWFkZXIiLCJzZXRCeUNvbmZpZyIsInBpcGVsaW5lQ29uZmlnIiwiTG9nZ2VyIiwiZ3JvdXBCZWdpbiIsIlNvdXJjZSIsIkRhdGFzZXQiLCJwaXBlIiwiUHJlcHJvY2Vzc2luZyIsImxvZyIsImdyb3VwRW5kIiwiRnVuY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7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YXRhc2V0cy53ZWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJAY2F1c2FsTmV0L2RhdGFzZXRzXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB0aGlzW1wid2VicGFja0pzb25wX2NhdXNhbE5ldF9kYXRhc2V0c1wiXSA9IHRoaXNbXCJ3ZWJwYWNrSnNvbnBfY2F1c2FsTmV0X2RhdGFzZXRzXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcInJhbmRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCIsIFwicmFuZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvc2FtcGxpbmdcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwicmFuZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3NhbXBsaW5nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgcm9vdFtcInJhbmRvbVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW5kb21fXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9jYXVzYWxOZXRTYW1wbGluZy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9jYXVzYWxOZXRTYW1wbGluZy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LnV0aWxzICovIFwiY2F1c2FsLW5ldC51dGlsc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByYW5kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHJhbmRvbSAqLyBcInJhbmRvbVwiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciByYW5kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyYW5kb21fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3N1YlNhbXBsaW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zdWJTYW1wbGluZy5taXhpbnMgKi8gXCIuL3NyYy9zdWJTYW1wbGluZy5taXhpbnMuanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX25lZ1NhbXBsaW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9uZWdTYW1wbGluZy5taXhpbnMgKi8gXCIuL3NyYy9uZWdTYW1wbGluZy5taXhpbnMuanNcIik7XG5cblxuXG5cblxuLyoqXG4gKiBUaGlzIENhdXNhbE5ldFNhbXBsaW5nIGNsYXNzIHByb3ZpZGVzIHNhbXBsaW5nIG1ldGhvZHNcbiAqIG1peHdpdGg6XG4gKiBbIFN1YlNhbXBsaW5nTWl4aW5zLCBOZWdTYW1wbGluZ01peGlucyBdXG4gKiBAY2xhc3MgQ2F1c2FsTmV0U2FtcGxpbmdcbiAqIEBleHRlbmRzIEZ1bmN0b3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXRTYW1wbGluZy5iYWJlbC5qc11cbiAqL1xuXG5jbGFzcyBDYXVzYWxOZXRTYW1wbGluZyBleHRlbmRzIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcInBsYXRmb3JtXCJdLm1peFdpdGgoY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJGdW5jdG9yXCJdLCBbX3N1YlNhbXBsaW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXSwgX25lZ1NhbXBsaW5nX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fW1wiZGVmYXVsdFwiXV0pIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLlJhbmRvbSA9IHJhbmRvbV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQuYTtcbiAgfVxuXG59XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAobmV3IENhdXNhbE5ldFNhbXBsaW5nKCkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBjYXVzYWxOZXRTYW1wbGluZywgU2FtcGxpbmdNaXhpbnMsIFN1YlNhbXBsaW5nTWl4aW5zLCBOZWdTYW1wbGluZ01peGlucyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfY2F1c2FsTmV0U2FtcGxpbmdfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY2F1c2FsTmV0U2FtcGxpbmcgKi8gXCIuL3NyYy9jYXVzYWxOZXRTYW1wbGluZy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNhdXNhbE5ldFNhbXBsaW5nXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2NhdXNhbE5ldFNhbXBsaW5nX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zYW1wbGluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc2FtcGxpbmcubWl4aW5zICovIFwiLi9zcmMvc2FtcGxpbmcubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiU2FtcGxpbmdNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfc2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9zdWJTYW1wbGluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3ViU2FtcGxpbmcubWl4aW5zICovIFwiLi9zcmMvc3ViU2FtcGxpbmcubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiU3ViU2FtcGxpbmdNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfc3ViU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9uZWdTYW1wbGluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbmVnU2FtcGxpbmcubWl4aW5zICovIFwiLi9zcmMvbmVnU2FtcGxpbmcubWl4aW5zLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTmVnU2FtcGxpbmdNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbmVnU2FtcGxpbmdfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbmVnU2FtcGxpbmcubWl4aW5zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuY29uc3QgTmVnYXRpdmVTYW1wbGluZ01peGlucyA9IEJhc2VTYW1wbGluZ0NsYXNzID0+IGNsYXNzIGV4dGVuZHMgQmFzZVNhbXBsaW5nQ2xhc3Mge1xuICAvKipcbiAgICogUGVyZm9ybSBuZWdhdGl2ZSBzYW1wbGluZyBnaXZlbiB0aGUgc2VsZWN0IHByb2Igb2YgaWRzIGFuZCBsaXN0IG9mIHBvc2l0aXZlIHNhbXBsZXNcbiAgICogQHBhcmFtIHsgTnVtYmVyIH0gbmVnYXRpdmVTaXplIC0gc2l6ZSB0byBzYW1wbGVcbiAgICogQHBhcmFtIHsgQXJyYXkgfSBwb3NpdGl2ZVNhbXBsZXMgLSBBcnJheSBvZiBwb3NzaXRpdmUgSWRzXG4gICAqIEBwYXJhbSB7IEFycmF5IH0gY2FuZGlkYXRlUHJvYnMgLSBBcnJheSBvZiBwcm9iYWJsaXR5IG9mIGNhbmRpZGF0ZSBJZHNcbiAgICogQHBhcmFtIHsgQm9vbGVhbiB9IFtyZXBsYWNhYmxlPXRydWVdIC0gaWYgdHJ1ZSwgbm8gZHVwbGljYXRlZCBzYW1wbGluZyBJZCByZXR1cm5lZFxuICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2Ygc2FtcGxlZCBJZHNcbiAgICovXG4gIG5lZ1NhbXBsaW5nKG5lZ2F0aXZlU2l6ZSwgcG9zaXRpdmVTYW1wbGVzLCBjYW5kaWRhdGVQcm9icywgcmVwbGFjYWJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBSID0gdGhpcy5SLFxuICAgICAgICAgIFJhbmRvbSA9IHRoaXMuUmFuZG9tO1xuXG4gICAgaWYgKFIuYW55KHYgPT4gIVIudHlwZShOdW1iZXIsIHYpIHx8IHYgPiAxIHx8IHYgPCAwLCBjYW5kaWRhdGVQcm9icykpIHtcbiAgICAgIHRocm93IEVycm9yKGAke0pTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZVByb2JzKX0gaXMgbm90IGFsbG93YCk7XG4gICAgfVxuXG4gICAgbGV0IHNlbGV0aW9uUHJvYnMgPSBSLnJlZHVjZSgoc2VsZWN0aW9uUHJvYnMsIHBpZHgpID0+IHtcbiAgICAgIHNlbGVjdGlvblByb2JzW3BpZHhdID0gSW5maW5pdHk7IC8vcG9zaXRpdmUgY2FuZGlkYXRlIG5ldmVyIGJlIGNob29zZWRcblxuICAgICAgcmV0dXJuIHNlbGVjdGlvblByb2JzO1xuICAgIH0sIFIuY2xvbmUoY2FuZGlkYXRlUHJvYnMpLCBwb3NpdGl2ZVNhbXBsZXMpO1xuICAgIGxldCBzYW1wbGVzID0gW10sXG4gICAgICAgIHRha2VuSWR4cyA9IFIuY2xvbmUoc2VsZXRpb25Qcm9icyk7XG5cbiAgICBjb25zdCBHZW5OZXdDYW5kaWRhdGVJZHggPSAoKSA9PiBSYW5kb20uaW50KDAsIHNlbGV0aW9uUHJvYnMubGVuZ3RoIC0gMSk7XG5cbiAgICBjb25zdCBTZWxlY3RJZkhpZ2hQcm9iID0gcHJvYiA9PiB7XG4gICAgICBsZXQgcmFuZCA9IFJhbmRvbS5mbG9hdCgpO1xuICAgICAgcmV0dXJuIHJhbmQgPiBwcm9iO1xuICAgIH07XG5cbiAgICB3aGlsZSAoc2FtcGxlcy5sZW5ndGggPCBuZWdhdGl2ZVNpemUpIHtcbiAgICAgIGxldCBpZHggPSBHZW5OZXdDYW5kaWRhdGVJZHgoKTtcbiAgICAgIGxldCBzZWxlY3RlZCA9IFNlbGVjdElmSGlnaFByb2Ioc2VsZXRpb25Qcm9ic1tpZHhdKTtcblxuICAgICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXBsYWNhYmxlICYmIHRha2VuSWR4c1tpZHhdID09PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBzYW1wbGVzID0gWy4uLnNhbXBsZXMsIGlkeF07XG5cbiAgICAgIGlmICghcmVwbGFjYWJsZSkge1xuICAgICAgICB0YWtlbklkeHNbaWR4XSA9IG51bGw7IC8vbm9uIHJlcGxhY2VhYmxlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbXBsZXM7XG4gIH1cblxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChOZWdhdGl2ZVNhbXBsaW5nTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvc2FtcGxpbmcubWl4aW5zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9zYW1wbGluZy5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LmNvcmUgKi8gXCJjYXVzYWwtbmV0LmNvcmVcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF9jb3JlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuXG5cbi8qKlxuICogVGhpcyBTYW1wbGluZ01peGlucyBjbGFzcyBwcm92aWRlIG1peGlucyBmb3IgUGlwZWxpbmVDbGFzcyBvciBEYXRhc2V0Q2xhc3NcbiAqIEBjbGFzcyBTYW1wbGluZ01peGluc1xuICogQGV4dGVuZHMgQmFzZVBpcGVsaW5lQ2xhc3NcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9zYW1wbGluZy5taXhpbnMuYmFiZWwuanNdXG4gKi9cblxuY29uc3QgU2FtcGxpbmdNaXhpbnMgPSBCYXNlUGlwZWxpbmVDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzIHtcbiAgLyoqXG4gICAqIGdldCBjdXJyZW50IHJhbmRvbSBpbnN0YW5jZVxuICAgKi9cbiAgZ2V0IFNhbXBsaW5nKCkge1xuICAgIGlmICghdGhpcy5zYW1wbGluZykge1xuICAgICAgdGhyb3cgRXJyb3IoYFNhbXBsaW5nIGlzIG5vdCBzZXRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zYW1wbGluZztcbiAgfVxuICAvKipcbiAgICogc2V0IFNhbXBsaW5nIGluc3RhbmNlXG4gICAqIEByZWFkb25seVxuICAgKi9cblxuXG4gIHNldCBTYW1wbGluZyhzYW1wbGluZykge1xuICAgIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImFzc2VydFwiXS5iZUluc3RhbmNlT2Yoc2FtcGxpbmcsIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiRnVuY3RvclwiXSk7XG4gICAgdGhpcy5zYW1wbGluZyA9IHNhbXBsaW5nO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoU2FtcGxpbmdNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9zdWJTYW1wbGluZy5taXhpbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3N1YlNhbXBsaW5nLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbmNvbnN0IFN1YlNhbXBsaW5nTWl4aW5zID0gQmFzZVNhbXBsaW5nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlU2FtcGxpbmdDbGFzcyB7XG4gIC8qKlxuICAgKiBQZXJmb3JtIHVuaWZvcm0gc2FtcGxlIGEgc3ViIHNldCBvZiBJZHMgZ2l2ZW4gdGhlIGNhbmRpZGF0ZSBsaXN0XG4gICAqIEBwYXJhbSB7IE51bWJlciB9IHNhbXBsaW5nU2l6ZVxuICAgKiBAcGFyYW0geyBBcnJheXxOdW1iZXIgfSBjYW5kaWRhdGVMaXN0IC0gbGlzdCBvZiBjYW5kaWRhdGVzIG9yIHNpemUgb2YgY2FuZGlkYXRlIGxpc3RcbiAgICogQHBhcmFtIHsgQm9vbGVhbiB9IFtyZXBsYWNhYmxlPXRydWVdIC0gaWYgdHJ1ZSwgbm8gZHVwbGljYXRlZCBzYW1wbGluZyBJZCByZXR1cm5lZFxuICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2Ygc2FtcGxlZCBJZHNcbiAgICovXG4gIHN1YlNhbXBsaW5nKHNhbXBsaW5nU2l6ZSwgY2FuZGlkYXRlTGlzdCwgcmVwbGFjYWJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBSID0gdGhpcy5SLFxuICAgICAgICAgIFJhbmRvbSA9IHRoaXMuUmFuZG9tO1xuICAgIGxldCBjYW5kaWRhdGVzID0gQXJyYXkuaXNBcnJheShjYW5kaWRhdGVMaXN0KSA/IFIuY2xvbmUoY2FuZGlkYXRlTGlzdCkgOiBSLnJhbmdlKDAsIGNhbmRpZGF0ZUxpc3QpO1xuXG4gICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBFcnJvcignY2FuZGlkYXRlIGxlbmd0aCBzaG91bGQgYmUgcG9zaXRpdmUnKTtcbiAgICB9XG5cbiAgICBsZXQgc2FtcGxlcyA9IFtdLFxuICAgICAgICB0YWtlbklkeHMgPSBSLmNsb25lKGNhbmRpZGF0ZXMpO1xuXG4gICAgY29uc3QgR2VuTmV3Q2FuZGlkYXRlSWR4ID0gKCkgPT4gUmFuZG9tLmludCgwLCBjYW5kaWRhdGVzLmxlbmd0aCAtIDEpO1xuXG4gICAgd2hpbGUgKHNhbXBsZXMubGVuZ3RoIDwgc2FtcGxpbmdTaXplKSB7XG4gICAgICBsZXQgaWR4ID0gR2VuTmV3Q2FuZGlkYXRlSWR4KCk7XG5cbiAgICAgIGlmICghcmVwbGFjYWJsZSAmJiB0YWtlbklkeHNbaWR4XSA9PT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgc2FtcGxlcyA9IFsuLi5zYW1wbGVzLCBjYW5kaWRhdGVzW2lkeF1dO1xuXG4gICAgICBpZiAoIXJlcGxhY2FibGUpIHtcbiAgICAgICAgdGFrZW5JZHhzW2lkeF0gPSBudWxsOyAvL25vbiByZXBsYWNlYWJsZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYW1wbGVzO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoU3ViU2FtcGxpbmdNaXhpbnMpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LmNvcmVcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhdXNhbC1uZXQudXRpbHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJyYW5kb21cIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogZXh0ZXJuYWwgXCJyYW5kb21cIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFuZG9tX187XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDNOaGJYQnNhVzVuTDNkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkwzZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YzJGdGNHeHBibWN2TGk5emNtTXZZMkYxYzJGc1RtVjBVMkZ0Y0d4cGJtY3Vhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXpZVzF3YkdsdVp5OHVMM055WXk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMM05oYlhCc2FXNW5MeTR2YzNKakwyNWxaMU5oYlhCc2FXNW5MbTFwZUdsdWN5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkx5NHZjM0pqTDNOaGJYQnNhVzVuTG0xcGVHbHVjeTVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMM05oYlhCc2FXNW5MeTR2YzNKakwzTjFZbE5oYlhCc2FXNW5MbTFwZUdsdWN5NXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwzTmhiWEJzYVc1bkwyVjRkR1Z5Ym1Gc0lGd2lZMkYxYzJGc0xXNWxkQzVqYjNKbFhDSWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5ellXMXdiR2x1Wnk5bGVIUmxjbTVoYkNCY0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lpSXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDNOaGJYQnNhVzVuTDJWNGRHVnlibUZzSUZ3aWNtRnVaRzl0WENJaVhTd2libUZ0WlhNaU9sc2lRMkYxYzJGc1RtVjBVMkZ0Y0d4cGJtY2lMQ0p3YkdGMFptOXliU0lzSW0xcGVGZHBkR2dpTENKQ1lYTmxSblZ1WTNSdmNpSXNJbE4xWWxOaGJYQnNhVzVuVFdsNGFXNXpJaXdpVG1WblUyRnRjR3hwYm1kTmFYaHBibk1pTENKamIyNXpkSEoxWTNSdmNpSXNJbEpoYm1SdmJTSXNJbkpoYm1SdmJTSXNJazVsWjJGMGFYWmxVMkZ0Y0d4cGJtZE5hWGhwYm5NaUxDSkNZWE5sVTJGdGNHeHBibWREYkdGemN5SXNJbTVsWjFOaGJYQnNhVzVuSWl3aWJtVm5ZWFJwZG1WVGFYcGxJaXdpY0c5emFYUnBkbVZUWVcxd2JHVnpJaXdpWTJGdVpHbGtZWFJsVUhKdlluTWlMQ0p5WlhCc1lXTmhZbXhsSWl3aVVpSXNJbUZ1ZVNJc0luWWlMQ0owZVhCbElpd2lUblZ0WW1WeUlpd2lSWEp5YjNJaUxDSktVMDlPSWl3aWMzUnlhVzVuYVdaNUlpd2ljMlZzWlhScGIyNVFjbTlpY3lJc0luSmxaSFZqWlNJc0luTmxiR1ZqZEdsdmJsQnliMkp6SWl3aWNHbGtlQ0lzSWtsdVptbHVhWFI1SWl3aVkyeHZibVVpTENKellXMXdiR1Z6SWl3aWRHRnJaVzVKWkhoeklpd2lSMlZ1VG1WM1EyRnVaR2xrWVhSbFNXUjRJaXdpYVc1MElpd2liR1Z1WjNSb0lpd2lVMlZzWldOMFNXWklhV2RvVUhKdllpSXNJbkJ5YjJJaUxDSnlZVzVrSWl3aVpteHZZWFFpTENKcFpIZ2lMQ0p6Wld4bFkzUmxaQ0lzSWxOaGJYQnNhVzVuVFdsNGFXNXpJaXdpUW1GelpWQnBjR1ZzYVc1bFEyeGhjM01pTENKVFlXMXdiR2x1WnlJc0luTmhiWEJzYVc1bklpd2lZWE56WlhKMElpd2lZbVZKYm5OMFlXNWpaVTltSWl3aVJuVnVZM1J2Y2lJc0luTjFZbE5oYlhCc2FXNW5JaXdpYzJGdGNHeHBibWRUYVhwbElpd2lZMkZ1Wkdsa1lYUmxUR2x6ZENJc0ltTmhibVJwWkdGMFpYTWlMQ0pCY25KaGVTSXNJbWx6UVhKeVlYa2lMQ0p5WVc1blpTSmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RVFVRXdReXhuUTBGQlowTTdRVUZETVVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJkMFFzYTBKQlFXdENPMEZCUXpGRk8wRkJRMEVzZVVSQlFXbEVMR05CUVdNN1FVRkRMMFE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGNVF5eHBRMEZCYVVNN1FVRkRNVVVzZDBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzBGQlEzSkpPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3pzN096czdPenM3T3pzN1FVTnNSa0U3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVVkJPenM3T3pzN096czdPMEZCVTBFc1RVRkJUVUVzYVVKQlFVNHNVMEZCWjBORExIbEVRVUZSTEVOQlFVTkRMRTlCUVZRc1EwRkJhMEpETEhWRVFVRnNRaXhGUVVNMVFpeERRVUZGUXl3eVJFRkJSaXhGUVVGeFFrTXNNa1JCUVhKQ0xFTkJSRFJDTEVOQlFXaERMRU5CUXpaRE8wRkJRM3BEUXl4aFFVRlhMRWRCUVVVN1FVRkRWRHRCUVVOQkxGTkJRVXRETEUxQlFVd3NSMEZCWTBNc05rTkJRV1E3UVVGRFNEczdRVUZLZDBNN08wRkJUemxDTEcxRlFVRkpVaXhwUWtGQlNpeEZRVUZtTEVVN096czdPenM3T3pzN096dEJRM1pDUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRMEU3UVVGRlFUczdPenM3T3pzN096czdPenRCUTBoQk8wRkJRVUVzVFVGQlRWTXNjMEpCUVhOQ0xFZEJRVWxETEdsQ1FVRkVMRWxCUVhOQ0xHTkJRV05CTEdsQ1FVRmtMRU5CUVN0Q08wRkJRMmhHT3pzN096czdPenRCUVZGQlF5eGhRVUZYTEVOQlFVTkRMRmxCUVVRc1JVRkJaVU1zWlVGQlppeEZRVUZuUTBNc1kwRkJhRU1zUlVGQlowUkRMRlZCUVZVc1IwRkJReXhKUVVFelJDeEZRVUZuUlR0QlFVTjJSU3hWUVVGTlF5eERRVUZETEVkQlFVY3NTMEZCUzBFc1EwRkJaanRCUVVGQkxGVkJRV3RDVkN4TlFVRk5MRWRCUVVjc1MwRkJTMEVzVFVGQmFFTTdPMEZCUTBFc1VVRkJSMU1zUTBGQlF5eERRVUZEUXl4SFFVRkdMRU5CUVU5RExFTkJRVVFzU1VGQlRTeERRVUZEUml4RFFVRkRMRU5CUVVOSExFbEJRVVlzUTBGQlQwTXNUVUZCVUN4RlFVRmpSaXhEUVVGa0xFTkJRVVFzU1VGQmNVSkJMRU5CUVVNc1IwRkJSeXhEUVVGNlFpeEpRVUU0UWtFc1EwRkJReXhIUVVGSExFTkJRVGxETEVWQlFXbEVTaXhqUVVGcVJDeERRVUZJTEVWQlFXOUZPMEZCUTJoRkxGbEJRVTFQTEV0QlFVc3NRMEZCUlN4SFFVRkZReXhKUVVGSkxFTkJRVU5ETEZOQlFVd3NRMEZCWlZRc1kwRkJaaXhEUVVFclFpeGxRVUZ1UXl4RFFVRllPMEZCUTBnN08wRkJRMFFzVVVGQlNWVXNZVUZCWVN4SFFVRkhVaXhEUVVGRExFTkJRVU5UTEUxQlFVWXNRMEZCVXl4RFFVRkRReXhqUVVGRUxFVkJRV2xDUXl4SlFVRnFRaXhMUVVGM1FqdEJRVU0zUWtRc2IwSkJRV01zUTBGQlEwTXNTVUZCUkN4RFFVRmtMRWRCUVhWQ1F5eFJRVUYyUWl4RFFVUTJRaXhEUVVOSE96dEJRVU5vUXl4aFFVRlBSaXhqUVVGUU8wRkJRMGdzUzBGSVJDeEZRVWRIVml4RFFVRkRMRU5CUVVOaExFdEJRVVlzUTBGQlVXWXNZMEZCVWl4RFFVaElMRVZCUnpSQ1JDeGxRVWcxUWl4RFFVRndRanRCUVVsQkxGRkJRVWxwUWl4UFFVRlBMRWRCUVVjc1JVRkJaRHRCUVVGQkxGRkJRV3RDUXl4VFFVRlRMRWRCUVVkbUxFTkJRVU1zUTBGQlEyRXNTMEZCUml4RFFVRlJUQ3hoUVVGU0xFTkJRVGxDT3p0QlFVTkJMRlZCUVUxUkxHdENRVUZyUWl4SFFVRkhMRTFCUVVsNlFpeE5RVUZOTEVOQlFVTXdRaXhIUVVGUUxFTkJRVmNzUTBGQldDeEZRVUZqVkN4aFFVRmhMRU5CUVVOVkxFMUJRV1FzUjBGQmNVSXNRMEZCYmtNc1EwRkJMMEk3TzBGQlEwRXNWVUZCVFVNc1owSkJRV2RDTEVkQlFVbERMRWxCUVVRc1NVRkJVVHRCUVVNM1FpeFZRVUZKUXl4SlFVRkpMRWRCUVVjNVFpeE5RVUZOTEVOQlFVTXJRaXhMUVVGUUxFVkJRVmc3UVVGRFFTeGhRVUZQUkN4SlFVRkpMRWRCUVVORUxFbEJRVm83UVVGRFNDeExRVWhFT3p0QlFVbEJMRmRCUVUxT0xFOUJRVThzUTBGQlEwa3NUVUZCVWl4SFFVRnBRblJDTEZsQlFYWkNMRVZCUVc5RE8wRkJRMmhETEZWQlFVa3lRaXhIUVVGSExFZEJRVWRRTEd0Q1FVRnJRaXhGUVVFMVFqdEJRVU5CTEZWQlFVbFJMRkZCUVZFc1IwRkJSMHdzWjBKQlFXZENMRU5CUVVOWUxHRkJRV0VzUTBGQlEyVXNSMEZCUkN4RFFVRmtMRU5CUVM5Q096dEJRVU5CTEZWQlFVY3NRMEZCUTBNc1VVRkJTaXhGUVVGaE8wRkJRMVE3UVVGRFNEczdRVUZEUkN4VlFVRkhMRU5CUVVONlFpeFZRVUZFTEVsQlFXVm5RaXhUUVVGVExFTkJRVU5STEVkQlFVUXNRMEZCVkN4TFFVRnBRaXhKUVVGdVF5eEZRVUYzUXp0QlFVTndRenRCUVVOSU96dEJRVU5FVkN4aFFVRlBMRWRCUVVjc1EwRkJReXhIUVVGSFFTeFBRVUZLTEVWQlFXRlRMRWRCUVdJc1EwRkJWanM3UVVGRFFTeFZRVUZITEVOQlFVTjRRaXhWUVVGS0xFVkJRV1U3UVVGRFdHZENMR2xDUVVGVExFTkJRVU5STEVkQlFVUXNRMEZCVkN4SFFVRmxMRWxCUVdZc1EwRkVWeXhEUVVOVE8wRkJRM1pDTzBGQlEwbzdPMEZCUTBRc1YwRkJUMVFzVDBGQlVEdEJRVU5JT3p0QlFYWkRLMFVzUTBGQmNFWTdPMEZCZVVObGNrSXNjVVpCUVdZc1JUczdPenM3T3pzN096czdPMEZEZWtOQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVTkJPMEZCUTBFN096czdPenM3TzBGQlQwRXNUVUZCVFdkRExHTkJRV01zUjBGQlNVTXNhVUpCUVVRc1NVRkJjMElzWTBGQlkwRXNhVUpCUVdRc1EwRkJLMEk3UVVGRGVFVTdPenRCUVVkQkxFMUJRVWxETEZGQlFVb3NSMEZCWXp0QlFVTldMRkZCUVVjc1EwRkJReXhMUVVGTFF5eFJRVUZVTEVWQlFXdENPMEZCUTJRc1dVRkJUWFpDTEV0QlFVc3NRMEZCUlN4eFFrRkJSaXhEUVVGWU8wRkJRMGc3TzBGQlEwUXNWMEZCVHl4TFFVRkxkVUlzVVVGQldqdEJRVU5JTzBGQlJVUTdPenM3T3p0QlFVbEJMRTFCUVVsRUxGRkJRVW9zUTBGQllVTXNVVUZCWWl4RlFVRnpRanRCUVVOc1FrTXNNa1JCUVUwc1EwRkJRME1zV1VGQlVDeERRVUZ2UWtZc1VVRkJjRUlzUlVGQk9FSkhMSFZFUVVFNVFqdEJRVU5CTEZOQlFVdElMRkZCUVV3c1IwRkJaMEpCTEZGQlFXaENPMEZCUTBnN08wRkJiRUoxUlN4RFFVRTFSVHM3UVVGeFFtVklMRFpGUVVGbUxFVTdPenM3T3pzN096czdPenRCUXpsQ1FUdEJRVUZCTEUxQlFVMXlReXhwUWtGQmFVSXNSMEZCU1Uwc2FVSkJRVVFzU1VGQmRVSXNZMEZCWTBFc2FVSkJRV1FzUTBGQkswSTdRVUZETlVVN096czdPenM3UVVGUFFYTkRMR0ZCUVZjc1EwRkJRME1zV1VGQlJDeEZRVUZsUXl4aFFVRm1MRVZCUVRoQ2JrTXNWVUZCVlN4SFFVRkRMRWxCUVhwRExFVkJRVGhETzBGQlEzSkVMRlZCUVUxRExFTkJRVU1zUjBGQlJ5eExRVUZMUVN4RFFVRm1PMEZCUVVFc1ZVRkJhMEpVTEUxQlFVMHNSMEZCUnl4TFFVRkxRU3hOUVVGb1F6dEJRVU5CTEZGQlFVazBReXhWUVVGVkxFZEJRVWRETEV0QlFVc3NRMEZCUTBNc1QwRkJUaXhEUVVGalNDeGhRVUZrTEVsQlFUWkNiRU1zUTBGQlF5eERRVUZEWVN4TFFVRkdMRU5CUVZGeFFpeGhRVUZTTEVOQlFUZENMRWRCUVc5RWJFTXNRMEZCUXl4RFFVRkRjME1zUzBGQlJpeERRVUZSTEVOQlFWSXNSVUZCVjBvc1lVRkJXQ3hEUVVGeVJUczdRVUZEUVN4UlFVRkhReXhWUVVGVkxFTkJRVU5xUWl4TlFVRllMRXRCUVhOQ0xFTkJRWHBDTEVWQlFUSkNPMEZCUTNaQ0xGbEJRVTFpTEV0QlFVc3NRMEZCUXl4eFEwRkJSQ3hEUVVGWU8wRkJRMGc3TzBGQlEwUXNVVUZCU1ZNc1QwRkJUeXhIUVVGSExFVkJRV1E3UVVGQlFTeFJRVUZyUWtNc1UwRkJVeXhIUVVGSFppeERRVUZETEVOQlFVTmhMRXRCUVVZc1EwRkJVWE5DTEZWQlFWSXNRMEZCT1VJN08wRkJRMEVzVlVGQlRXNUNMR3RDUVVGclFpeEhRVUZITEUxQlFVbDZRaXhOUVVGTkxFTkJRVU13UWl4SFFVRlFMRU5CUVZjc1EwRkJXQ3hGUVVGamEwSXNWVUZCVlN4RFFVRkRha0lzVFVGQldDeEhRVUZyUWl4RFFVRm9ReXhEUVVFdlFqczdRVUZEUVN4WFFVRk5TaXhQUVVGUExFTkJRVU5KTEUxQlFWSXNSMEZCYVVKbExGbEJRWFpDTEVWQlFXOURPMEZCUTJoRExGVkJRVWxXTEVkQlFVY3NSMEZCUjFBc2EwSkJRV3RDTEVWQlFUVkNPenRCUVVOQkxGVkJRVWNzUTBGQlEycENMRlZCUVVRc1NVRkJaV2RDTEZOQlFWTXNRMEZCUTFFc1IwRkJSQ3hEUVVGVUxFdEJRV2xDTEVsQlFXNURMRVZCUVhkRE8wRkJRM0JETzBGQlEwZzdPMEZCUTBSVUxHRkJRVThzUjBGQlJ5eERRVUZETEVkQlFVZEJMRTlCUVVvc1JVRkJZWEZDTEZWQlFWVXNRMEZCUTFvc1IwRkJSQ3hEUVVGMlFpeERRVUZXT3p0QlFVTkJMRlZCUVVjc1EwRkJRM2hDTEZWQlFVb3NSVUZCWlR0QlFVTllaMElzYVVKQlFWTXNRMEZCUTFFc1IwRkJSQ3hEUVVGVUxFZEJRV1VzU1VGQlppeERRVVJYTEVOQlExTTdRVUZEZGtJN1FVRkRTanM3UVVGRFJDeFhRVUZQVkN4UFFVRlFPMEZCUTBnN08wRkJNMEl5UlN4RFFVRm9SanM3UVVFMlFtVXhRaXhuUmtGQlppeEZPenM3T3pzN096czdPenRCUXpkQ1FTdzJSRHM3T3pzN096czdPenM3UVVOQlFTdzRSRHM3T3pzN096czdPenM3UVVOQlFTeHZSQ0lzSW1acGJHVWlPaUpBWTJGMWMyRnNUbVYwTDNOaGJYQnNhVzVuTG5kbFlpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb2NtVnhkV2x5WlNoY0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aUtTd2djbVZ4ZFdseVpTaGNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaWtzSUhKbGNYVnBjbVVvWENKeVlXNWtiMjFjSWlrcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvVzF3aVkyRjFjMkZzTFc1bGRDNWpiM0psWENJc0lGd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lMQ0JjSW5KaGJtUnZiVndpWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSkFZMkYxYzJGc1RtVjBMM05oYlhCc2FXNW5YQ0pkSUQwZ1ptRmpkRzl5ZVNoeVpYRjFhWEpsS0Z3aVkyRjFjMkZzTFc1bGRDNWpiM0psWENJcExDQnlaWEYxYVhKbEtGd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lLU3dnY21WeGRXbHlaU2hjSW5KaGJtUnZiVndpS1NrN1hHNWNkR1ZzYzJWY2JseDBYSFJ5YjI5MFcxd2lRR05oZFhOaGJFNWxkQzl6WVcxd2JHbHVaMXdpWFNBOUlHWmhZM1J2Y25rb2NtOXZkRnRjSW1OaGRYTmhiQzF1WlhRdVkyOXlaVndpWFN3Z2NtOXZkRnRjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWwwc0lISnZiM1JiWENKeVlXNWtiMjFjSWwwcE8xeHVmU2tvZEdocGN5d2dablZ1WTNScGIyNG9YMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYMk52Y21WZlh5d2dYMTlYUlVKUVFVTkxYMFZZVkVWU1RrRk1YMDFQUkZWTVJWOWpZWFZ6WVd4ZmJtVjBYM1YwYVd4elgxOHNJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZjbUZ1Wkc5dFgxOHBJSHRjYm5KbGRIVnliaUFpTENJZ1hIUXZMeUJVYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSMllYSWdhVzV6ZEdGc2JHVmtUVzlrZFd4bGN5QTlJSHQ5TzF4dVhHNGdYSFF2THlCVWFHVWdjbVZ4ZFdseVpTQm1kVzVqZEdsdmJseHVJRngwWm5WdVkzUnBiMjRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlodGIyUjFiR1ZKWkNrZ2UxeHVYRzRnWEhSY2RDOHZJRU5vWldOcklHbG1JRzF2WkhWc1pTQnBjeUJwYmlCallXTm9aVnh1SUZ4MFhIUnBaaWhwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU2tnZTF4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1SUZ4MFhIUjlYRzRnWEhSY2RDOHZJRU55WldGMFpTQmhJRzVsZHlCdGIyUjFiR1VnS0dGdVpDQndkWFFnYVhRZ2FXNTBieUIwYUdVZ1kyRmphR1VwWEc0Z1hIUmNkSFpoY2lCdGIyUjFiR1VnUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNBOUlIdGNiaUJjZEZ4MFhIUnBPaUJ0YjJSMWJHVkpaQ3hjYmlCY2RGeDBYSFJzT2lCbVlXeHpaU3hjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c0lEMGdkSEoxWlR0Y2JseHVJRngwWEhRdkx5QlNaWFIxY200Z2RHaGxJR1Y0Y0c5eWRITWdiMllnZEdobElHMXZaSFZzWlZ4dUlGeDBYSFJ5WlhSMWNtNGdiVzlrZFd4bExtVjRjRzl5ZEhNN1hHNGdYSFI5WEc1Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdWeklHOWlhbVZqZENBb1gxOTNaV0p3WVdOclgyMXZaSFZzWlhOZlh5bGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJTQTlJRzF2WkhWc1pYTTdYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1NZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWek8xeHVYRzRnWEhRdkx5QmtaV1pwYm1VZ1oyVjBkR1Z5SUdaMWJtTjBhVzl1SUdadmNpQm9ZWEp0YjI1NUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUdkbGRIUmxjaWtnZTF4dUlGeDBYSFJwWmlnaFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZLR1Y0Y0c5eWRITXNJRzVoYldVcEtTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUc1aGJXVXNJSHNnWlc1MWJXVnlZV0pzWlRvZ2RISjFaU3dnWjJWME9pQm5aWFIwWlhJZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEgwN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCZlgyVnpUVzlrZFd4bElHOXVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXBJSHRjYmlCY2RGeDBhV1lvZEhsd1pXOW1JRk41YldKdmJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdVM2x0WW05c0xuUnZVM1J5YVc1blZHRm5LU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5d2dleUIyWVd4MVpUb2dKMDF2WkhWc1pTY2dmU2s3WEc0Z1hIUmNkSDFjYmlCY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUNkZlgyVnpUVzlrZFd4bEp5d2dleUIyWVd4MVpUb2dkSEoxWlNCOUtUdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHTnlaV0YwWlNCaElHWmhhMlVnYm1GdFpYTndZV05sSUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlERTZJSFpoYkhWbElHbHpJR0VnYlc5a2RXeGxJR2xrTENCeVpYRjFhWEpsSUdsMFhHNGdYSFF2THlCdGIyUmxJQ1lnTWpvZ2JXVnlaMlVnWVd4c0lIQnliM0JsY25ScFpYTWdiMllnZG1Gc2RXVWdhVzUwYnlCMGFHVWdibk5jYmlCY2RDOHZJRzF2WkdVZ0ppQTBPaUJ5WlhSMWNtNGdkbUZzZFdVZ2QyaGxiaUJoYkhKbFlXUjVJRzV6SUc5aWFtVmpkRnh1SUZ4MEx5OGdiVzlrWlNBbUlEaDhNVG9nWW1Wb1lYWmxJR3hwYTJVZ2NtVnhkV2x5WlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTUwSUQwZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUcxdlpHVXBJSHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JREVwSUhaaGJIVmxJRDBnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloMllXeDFaU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUE0S1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RHbG1LQ2h0YjJSbElDWWdOQ2tnSmlZZ2RIbHdaVzltSUhaaGJIVmxJRDA5UFNBbmIySnFaV04wSnlBbUppQjJZV3gxWlNBbUppQjJZV3gxWlM1ZlgyVnpUVzlrZFd4bEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkSFpoY2lCdWN5QTlJRTlpYW1WamRDNWpjbVZoZEdVb2JuVnNiQ2s3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lodWN5azdYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h1Y3l3Z0oyUmxabUYxYkhRbkxDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJSFpoYkhWbE9pQjJZV3gxWlNCOUtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlESWdKaVlnZEhsd1pXOW1JSFpoYkhWbElDRTlJQ2R6ZEhKcGJtY25LU0JtYjNJb2RtRnlJR3RsZVNCcGJpQjJZV3gxWlNrZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLRzV6TENCclpYa3NJR1oxYm1OMGFXOXVLR3RsZVNrZ2V5QnlaWFIxY200Z2RtRnNkV1ZiYTJWNVhUc2dmUzVpYVc1a0tHNTFiR3dzSUd0bGVTa3BPMXh1SUZ4MFhIUnlaWFIxY200Z2JuTTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5Qm5aWFJFWldaaGRXeDBSWGh3YjNKMElHWjFibU4wYVc5dUlHWnZjaUJqYjIxd1lYUnBZbWxzYVhSNUlIZHBkR2dnYm05dUxXaGhjbTF2Ym5rZ2JXOWtkV3hsYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV1SUQwZ1puVnVZM1JwYjI0b2JXOWtkV3hsS1NCN1hHNGdYSFJjZEhaaGNpQm5aWFIwWlhJZ1BTQnRiMlIxYkdVZ0ppWWdiVzlrZFd4bExsOWZaWE5OYjJSMWJHVWdQMXh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEVSbFptRjFiSFFvS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1ZiSjJSbFptRjFiSFFuWFRzZ2ZTQTZYRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwVFc5a2RXeGxSWGh3YjNKMGN5Z3BJSHNnY21WMGRYSnVJRzF2WkhWc1pUc2dmVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0dkbGRIUmxjaXdnSjJFbkxDQm5aWFIwWlhJcE8xeHVJRngwWEhSeVpYUjFjbTRnWjJWMGRHVnlPMXh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOGdQU0JtZFc1amRHbHZiaWh2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLU0I3SUhKbGRIVnliaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2s3SUgwN1hHNWNiaUJjZEM4dklGOWZkMlZpY0dGamExOXdkV0pzYVdOZmNHRjBhRjlmWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbkFnUFNCY0lsd2lPMXh1WEc1Y2JpQmNkQzh2SUV4dllXUWdaVzUwY25rZ2JXOWtkV3hsSUdGdVpDQnlaWFIxY200Z1pYaHdiM0owYzF4dUlGeDBjbVYwZFhKdUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9YMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV6SUQwZ1hDSXVMM055WXk5cGJtUmxlQzVxYzF3aUtUdGNiaUlzSW1sdGNHOXlkQ0I3SUVaMWJtTjBiM0lnWVhNZ1FtRnpaVVoxYm1OMGIzSWdmU0JtY205dElDZGpZWFZ6WVd3dGJtVjBMbU52Y21Vbk8xeHVhVzF3YjNKMElIc2djR3hoZEdadmNtMGdmU0JtY205dElDZGpZWFZ6WVd3dGJtVjBMblYwYVd4ekp6dGNibWx0Y0c5eWRDQnlZVzVrYjIwZ1puSnZiU0FuY21GdVpHOXRKenRjYm1sdGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1UzVmlVMkZ0Y0d4cGJtZE5hWGhwYm5NZ2ZTQm1jbTl0SUNjdUwzTjFZbE5oYlhCc2FXNW5MbTFwZUdsdWN5YzdYRzVwYlhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUU1bFoxTmhiWEJzYVc1blRXbDRhVzV6SUgwZ1puSnZiU0FuTGk5dVpXZFRZVzF3YkdsdVp5NXRhWGhwYm5Nbk8xeHVYRzR2S2lwY2JpQXFJRlJvYVhNZ1EyRjFjMkZzVG1WMFUyRnRjR3hwYm1jZ1kyeGhjM01nY0hKdmRtbGtaWE1nYzJGdGNHeHBibWNnYldWMGFHOWtjMXh1SUNvZ2JXbDRkMmwwYURwY2JpQXFJRnNnVTNWaVUyRnRjR3hwYm1kTmFYaHBibk1zSUU1bFoxTmhiWEJzYVc1blRXbDRhVzV6SUYxY2JpQXFJRUJqYkdGemN5QkRZWFZ6WVd4T1pYUlRZVzF3YkdsdVoxeHVJQ29nUUdWNGRHVnVaSE1nUm5WdVkzUnZjbHh1SUNvZ1FHVjRZVzF3YkdWY2JpQXFJRnRGV0VGTlVFeEZJQzR1TDJWNFlXMXdiR1Z6TDJOaGRYTmhiRTVsZEZOaGJYQnNhVzVuTG1KaFltVnNMbXB6WFZ4dUlDb3ZYRzVqYkdGemN5QkRZWFZ6WVd4T1pYUlRZVzF3YkdsdVp5QmxlSFJsYm1SeklIQnNZWFJtYjNKdExtMXBlRmRwZEdnb0lFSmhjMlZHZFc1amRHOXlMQ0JjYmlBZ0lDQmJJRk4xWWxOaGJYQnNhVzVuVFdsNGFXNXpMQ0JPWldkVFlXMXdiR2x1WjAxcGVHbHVjeUJkS1h0Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lncGUxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TGxKaGJtUnZiU0E5SUhKaGJtUnZiVHNnSUNBZ1hHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQnVaWGNnUTJGMWMyRnNUbVYwVTJGdGNHeHBibWNvS1RzaUxDSmxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJR05oZFhOaGJFNWxkRk5oYlhCc2FXNW5JSDBnWm5KdmJTQW5MaTlqWVhWellXeE9aWFJUWVcxd2JHbHVaeWM3WEc1bGVIQnZjblFnZXlCa1pXWmhkV3gwSUdGeklGTmhiWEJzYVc1blRXbDRhVzV6SUgwZ1puSnZiU0FuTGk5ellXMXdiR2x1Wnk1dGFYaHBibk1uTzF4dVhHNWxlSEJ2Y25RZ2V5QmtaV1poZFd4MElHRnpJRk4xWWxOaGJYQnNhVzVuVFdsNGFXNXpJSDBnWm5KdmJTQW5MaTl6ZFdKVFlXMXdiR2x1Wnk1dGFYaHBibk1uTzF4dVpYaHdiM0owSUhzZ1pHVm1ZWFZzZENCaGN5Qk9aV2RUWVcxd2JHbHVaMDFwZUdsdWN5QjlJR1p5YjIwZ0p5NHZibVZuVTJGdGNHeHBibWN1YldsNGFXNXpKenNpTENKamIyNXpkQ0JPWldkaGRHbDJaVk5oYlhCc2FXNW5UV2w0YVc1eklEMGdLRUpoYzJWVFlXMXdiR2x1WjBOc1lYTnpLVDArSUdOc1lYTnpJR1Y0ZEdWdVpITWdRbUZ6WlZOaGJYQnNhVzVuUTJ4aGMzTjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2dVR1Z5Wm05eWJTQnVaV2RoZEdsMlpTQnpZVzF3YkdsdVp5Qm5hWFpsYmlCMGFHVWdjMlZzWldOMElIQnliMklnYjJZZ2FXUnpJR0Z1WkNCc2FYTjBJRzltSUhCdmMybDBhWFpsSUhOaGJYQnNaWE5jYmlBZ0lDQWdLaUJBY0dGeVlXMGdleUJPZFcxaVpYSWdmU0J1WldkaGRHbDJaVk5wZW1VZ0xTQnphWHBsSUhSdklITmhiWEJzWlZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3SUVGeWNtRjVJSDBnY0c5emFYUnBkbVZUWVcxd2JHVnpJQzBnUVhKeVlYa2diMllnY0c5emMybDBhWFpsSUVsa2MxeHVJQ0FnSUNBcUlFQndZWEpoYlNCN0lFRnljbUY1SUgwZ1kyRnVaR2xrWVhSbFVISnZZbk1nTFNCQmNuSmhlU0J2WmlCd2NtOWlZV0pzYVhSNUlHOW1JR05oYm1ScFpHRjBaU0JKWkhOY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZXlCQ2IyOXNaV0Z1SUgwZ1czSmxjR3hoWTJGaWJHVTlkSEoxWlYwZ0xTQnBaaUIwY25WbExDQnVieUJrZFhCc2FXTmhkR1ZrSUhOaGJYQnNhVzVuSUVsa0lISmxkSFZ5Ym1Wa1hHNGdJQ0FnSUNvZ1FISmxkSFZ5Ym5NZ2V5QkJjbkpoZVNCOUlHRnljbUY1SUc5bUlITmhiWEJzWldRZ1NXUnpYRzRnSUNBZ0lDb3ZYRzRnSUNBZ2JtVm5VMkZ0Y0d4cGJtY29ibVZuWVhScGRtVlRhWHBsTENCd2IzTnBkR2wyWlZOaGJYQnNaWE1zSUdOaGJtUnBaR0YwWlZCeWIySnpMQ0J5WlhCc1lXTmhZbXhsUFhSeWRXVXBlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQlNJRDBnZEdocGN5NVNMQ0JTWVc1a2IyMGdQU0IwYUdsekxsSmhibVJ2YlR0Y2JpQWdJQ0FnSUNBZ2FXWW9VaTVoYm5rb0tIWXBQVDRnSVZJdWRIbHdaU2hPZFcxaVpYSXNkaWtnZkh3Z2RpQStJREVnZkh3Z2RpQThJREFzSUdOaGJtUnBaR0YwWlZCeWIySnpLU2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWhnSkh0S1UwOU9Mbk4wY21sdVoybG1lU2hqWVc1a2FXUmhkR1ZRY205aWN5bDlJR2x6SUc1dmRDQmhiR3h2ZDJBcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR3hsZENCelpXeGxkR2x2YmxCeWIySnpJRDBnVWk1eVpXUjFZMlVvS0hObGJHVmpkR2x2YmxCeWIySnpMQ0J3YVdSNEtUMCtlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpaV3hsWTNScGIyNVFjbTlpYzF0d2FXUjRYU0E5SUVsdVptbHVhWFI1T3k4dmNHOXphWFJwZG1VZ1kyRnVaR2xrWVhSbElHNWxkbVZ5SUdKbElHTm9iMjl6WldSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSE5sYkdWamRHbHZibEJ5YjJKek8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzSUZJdVkyeHZibVVvWTJGdVpHbGtZWFJsVUhKdlluTXBMQ0J3YjNOcGRHbDJaVk5oYlhCc1pYTXBPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2MyRnRjR3hsY3lBOUlGdGRMQ0IwWVd0bGJrbGtlSE1nUFNCU0xtTnNiMjVsS0hObGJHVjBhVzl1VUhKdlluTXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQkhaVzVPWlhkRFlXNWthV1JoZEdWSlpIZ2dQU0FvS1QwK1VtRnVaRzl0TG1sdWRDZ3dMQ0J6Wld4bGRHbHZibEJ5YjJKekxteGxibWQwYUMweEtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1UyVnNaV04wU1daSWFXZG9VSEp2WWlBOUlDaHdjbTlpS1QwK2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElISmhibVFnUFNCU1lXNWtiMjB1Wm14dllYUW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVlXNWtQbkJ5YjJJN1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJSGRvYVd4bEtITmhiWEJzWlhNdWJHVnVaM1JvSUR3Z2JtVm5ZWFJwZG1WVGFYcGxLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JwWkhnZ1BTQkhaVzVPWlhkRFlXNWthV1JoZEdWSlpIZ29LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J6Wld4bFkzUmxaQ0E5SUZObGJHVmpkRWxtU0dsbmFGQnliMklvYzJWc1pYUnBiMjVRY205aWMxdHBaSGhkS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0NGelpXeGxZM1JsWkNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR2x1ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWdoY21Wd2JHRmpZV0pzWlNBbUppQjBZV3RsYmtsa2VITmJhV1I0WFQwOVBXNTFiR3dwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuUnBiblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2MyRnRjR3hsY3lBOUlGc3VMaTV6WVcxd2JHVnpMQ0JwWkhoZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb0lYSmxjR3hoWTJGaWJHVXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJoYTJWdVNXUjRjMXRwWkhoZFBXNTFiR3c3THk5dWIyNGdjbVZ3YkdGalpXRmliR1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU0FnSUNCY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOaGJYQnNaWE03WEc0Z0lDQWdmVnh1ZlR0Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUU1bFoyRjBhWFpsVTJGdGNHeHBibWROYVhocGJuTTdJaXdpYVcxd2IzSjBJSHNnUm5WdVkzUnZjaUI5SUdaeWIyMGdKMk5oZFhOaGJDMXVaWFF1WTI5eVpTYzdYRzVwYlhCdmNuUWdleUJoYzNObGNuUWdmU0JtY205dElDZGpZWFZ6WVd3dGJtVjBMblYwYVd4ekp6dGNiaThxS2x4dUlDb2dWR2hwY3lCVFlXMXdiR2x1WjAxcGVHbHVjeUJqYkdGemN5QndjbTkyYVdSbElHMXBlR2x1Y3lCbWIzSWdVR2x3Wld4cGJtVkRiR0Z6Y3lCdmNpQkVZWFJoYzJWMFEyeGhjM05jYmlBcUlFQmpiR0Z6Y3lCVFlXMXdiR2x1WjAxcGVHbHVjMXh1SUNvZ1FHVjRkR1Z1WkhNZ1FtRnpaVkJwY0dWc2FXNWxRMnhoYzNOY2JpQXFJRUJsZUdGdGNHeGxYRzRnS2lCYlJWaEJUVkJNUlNBdUxpOWxlR0Z0Y0d4bGN5OXpZVzF3YkdsdVp5NXRhWGhwYm5NdVltRmlaV3d1YW5OZFhHNGdLaTljYm1OdmJuTjBJRk5oYlhCc2FXNW5UV2w0YVc1eklEMGdLRUpoYzJWUWFYQmxiR2x1WlVOc1lYTnpLVDArSUdOc1lYTnpJR1Y0ZEdWdVpITWdRbUZ6WlZCcGNHVnNhVzVsUTJ4aGMzTjdYRzRnSUNBZ0x5b3FYRzRnSUNBZ0lDb2daMlYwSUdOMWNuSmxiblFnY21GdVpHOXRJR2x1YzNSaGJtTmxYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1oyVjBJRk5oYlhCc2FXNW5LQ2w3WEc0Z0lDQWdJQ0FnSUdsbUtDRjBhR2x6TG5OaGJYQnNhVzVuS1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0dCVFlXMXdiR2x1WnlCcGN5QnViM1FnYzJWMFlDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWMyRnRjR3hwYm1jN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJSE5sZENCVFlXMXdiR2x1WnlCcGJuTjBZVzVqWlZ4dUlDQWdJQ0FxSUVCeVpXRmtiMjVzZVZ4dUlDQWdJQ0FxTDF4dUlDQWdJSE5sZENCVFlXMXdiR2x1WnloellXMXdiR2x1WnlsN1hHNGdJQ0FnSUNBZ0lHRnpjMlZ5ZEM1aVpVbHVjM1JoYm1ObFQyWW9jMkZ0Y0d4cGJtY3NJRVoxYm1OMGIzSXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmhiWEJzYVc1bklEMGdjMkZ0Y0d4cGJtYzdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnVTJGdGNHeHBibWROYVhocGJuTTdJaXdpWTI5dWMzUWdVM1ZpVTJGdGNHeHBibWROYVhocGJuTWdQU0FvUW1GelpWTmhiWEJzYVc1blEyeGhjM01wSUQwK0lHTnNZWE56SUdWNGRHVnVaSE1nUW1GelpWTmhiWEJzYVc1blEyeGhjM043WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVUdWeVptOXliU0IxYm1sbWIzSnRJSE5oYlhCc1pTQmhJSE4xWWlCelpYUWdiMllnU1dSeklHZHBkbVZ1SUhSb1pTQmpZVzVrYVdSaGRHVWdiR2x6ZEZ4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3SUU1MWJXSmxjaUI5SUhOaGJYQnNhVzVuVTJsNlpWeHVJQ0FnSUNBcUlFQndZWEpoYlNCN0lFRnljbUY1ZkU1MWJXSmxjaUI5SUdOaGJtUnBaR0YwWlV4cGMzUWdMU0JzYVhOMElHOW1JR05oYm1ScFpHRjBaWE1nYjNJZ2MybDZaU0J2WmlCallXNWthV1JoZEdVZ2JHbHpkRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdJRUp2YjJ4bFlXNGdmU0JiY21Wd2JHRmpZV0pzWlQxMGNuVmxYU0F0SUdsbUlIUnlkV1VzSUc1dklHUjFjR3hwWTJGMFpXUWdjMkZ0Y0d4cGJtY2dTV1FnY21WMGRYSnVaV1JjYmlBZ0lDQWdLaUJBY21WMGRYSnVjeUI3SUVGeWNtRjVJSDBnWVhKeVlYa2diMllnYzJGdGNHeGxaQ0JKWkhOY2JpQWdJQ0FnS2k5Y2JpQWdJQ0J6ZFdKVFlXMXdiR2x1WnloellXMXdiR2x1WjFOcGVtVXNJR05oYm1ScFpHRjBaVXhwYzNRc0lISmxjR3hoWTJGaWJHVTlkSEoxWlNsN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUZJZ1BTQjBhR2x6TGxJc0lGSmhibVJ2YlNBOUlIUm9hWE11VW1GdVpHOXRPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kyRnVaR2xrWVhSbGN5QTlJRUZ5Y21GNUxtbHpRWEp5WVhrb1kyRnVaR2xrWVhSbFRHbHpkQ2svVWk1amJHOXVaU2hqWVc1a2FXUmhkR1ZNYVhOMEtUcFNMbkpoYm1kbEtEQXNJR05oYm1ScFpHRjBaVXhwYzNRcE8xeHVJQ0FnSUNBZ0lDQnBaaWhqWVc1a2FXUmhkR1Z6TG14bGJtZDBhQ0E5UFQwZ01DbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25ZMkZ1Wkdsa1lYUmxJR3hsYm1kMGFDQnphRzkxYkdRZ1ltVWdjRzl6YVhScGRtVW5LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCc1pYUWdjMkZ0Y0d4bGN5QTlJRnRkTENCMFlXdGxia2xrZUhNZ1BTQlNMbU5zYjI1bEtHTmhibVJwWkdGMFpYTXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQkhaVzVPWlhkRFlXNWthV1JoZEdWSlpIZ2dQU0FvS1QwK1VtRnVaRzl0TG1sdWRDZ3dMQ0JqWVc1a2FXUmhkR1Z6TG14bGJtZDBhQzB4S1R0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VvYzJGdGNHeGxjeTVzWlc1bmRHZ2dQQ0J6WVcxd2JHbHVaMU5wZW1VcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHbGtlQ0E5SUVkbGJrNWxkME5oYm1ScFpHRjBaVWxrZUNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb0lYSmxjR3hoWTJGaWJHVWdKaVlnZEdGclpXNUpaSGh6VzJsa2VGMDlQVDF1ZFd4c0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjUwYVc1MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSE5oYlhCc1pYTWdQU0JiTGk0dWMyRnRjR3hsY3l3Z1kyRnVaR2xrWVhSbGMxdHBaSGhkWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtS0NGeVpYQnNZV05oWW14bEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBZV3RsYmtsa2VITmJhV1I0WFQxdWRXeHNPeTh2Ym05dUlISmxjR3hoWTJWaFlteGxYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMGdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6WVcxd2JHVnpPMXh1SUNBZ0lIMWNibjA3WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JUZFdKVFlXMXdiR2x1WjAxcGVHbHVjenNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUY5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWTJGMWMyRnNYMjVsZEY5amIzSmxYMTg3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDJOaGRYTmhiRjl1WlhSZmRYUnBiSE5mWHpzaUxDSnRiMlIxYkdVdVpYaHdiM0owY3lBOUlGOWZWMFZDVUVGRFMxOUZXRlJGVWs1QlRGOU5UMFJWVEVWZmNtRnVaRzl0WDE4N0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCJpbXBvcnQgeyBidWZmZXJVdGlscyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY29uc3QgQnVmZmVyUmVhZGVyTWl4aW5zID0gKCBCYXNlRGF0YVNvdXJjZSApID0+IGNsYXNzIGV4dGVuZHMgQmFzZURhdGFTb3VyY2Uge1xuICAgIG1ha2VCdWZmZXJSZWFkZXIoYmFzZUxpbmspe1xuICAgICAgICBcbiAgICAgICAgaWYoIGJhc2VMaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSApe1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jIChmaWxlTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgYnVmZmVyVXRpbHMuZmV0Y2hCdWZmZXIoYmFzZUxpbmsgKyBmaWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3BsaXRTYW1wbGUoZGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKGZpbGVOYW1lKSA9PiB7IFxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgYnVmZmVyVXRpbHMucmVhZEJ1ZmZlcihiYXNlTGluayArIGZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zcGxpdFNhbXBsZShkYXRhKTsgXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnVmZmVyUmVhZGVyTWl4aW5zOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUE5HUmVhZGVyTWl4aW5zIH0gZnJvbSAnLi9wbmdSZWFkZXIubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnVmZmVyUmVhZGVyTWl4aW5zIH0gZnJvbSAnLi9idWZmZXJSZWFkZXIubWl4aW5zJzsiLCJpbXBvcnQgeyBwbmdVdGlscyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuY29uc3QgUE5HUmVhZGVyTWl4aW5zID0gKCBCYXNlRGF0YVNvdXJjZSApID0+IGNsYXNzIGV4dGVuZHMgQmFzZURhdGFTb3VyY2Uge1xuICAgIG1ha2VQTkdSZWFkZXIoYmFzZUxpbmspe1xuICAgICAgICBpZiggYmFzZUxpbmsuc3RhcnRzV2l0aCgnaHR0cCcpICl7XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKGZpbGVOYW1lKSA9PiB7IFxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgcG5nVXRpbHMuZmV0Y2hQTkcoYmFzZUxpbmsgKyBmaWxlTmFtZSk7IFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNwbGl0U2FtcGxlKGRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jIChmaWxlTmFtZSkgPT4geyBcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHBuZ1V0aWxzLnJlYWRQTkcoYmFzZUxpbmsgKyBmaWxlTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3BsaXRTYW1wbGUoZGF0YSk7IFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBOR1JlYWRlck1peGluczsiLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIGZ1bmN0b3IgfSBmcm9tICcuL2Z1bmN0b3InO1xuaW1wb3J0IHsgcGxhdGZvcm0sIGpzb25VdGlscyB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgY2F1c2FsTmV0U2FtcGxpbmcsIFNhbXBsaW5nTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5zYW1wbGluZyc7XG5pbXBvcnQgeyBQTkdSZWFkZXJNaXhpbnMsIEJ1ZmZlclJlYWRlck1peGlucyB9IGZyb20gJy4vUmVhZGVycy9pbml0Jztcbi8qKlxuICogVGhpcyBDYXVzYWxOZXREYXRhU291cmNlIGNsYXNzIHByb3ZpZGVzIHN0YW5kYXJkIGltcGxlbWVudGF0aW9uIGZvciBwaXBlbGluZSBTb3VyY2UuXG4gKiB7IG1peFdpdGg6IFsgU2FtcGxpbmdNaXhpbnMsIFBOR1JlYWRlck1peGlucywgQnVmZmVyUmVhZGVyTWl4aW5zIF19XG4gKiBAY2xhc3MgQ2F1c2FsTmV0RGF0YVNvdXJjZVxuICogQGV4dGVuZHMgRXZlbnRcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXREYXRhU291cmNlLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXREYXRhU291cmNlIGV4dGVuZHMgcGxhdGZvcm0ubWl4V2l0aCggRXZlbnQsIFtcbiAgICBTYW1wbGluZ01peGlucywgUE5HUmVhZGVyTWl4aW5zLCBCdWZmZXJSZWFkZXJNaXhpbnMgXSApe1xuICAgIC8qKlxuICAgICAqQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBDYXVzYWxOZXREYXRhU291cmNlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rvcn0gZnVuY3RvclxuICAgICAqIEBwYXJhbSB7RnVuY3Rvcn0gc2FtcGxpbmdcbiAgICAgKiBAbWVtYmVyb2YgQ2F1c2FsTmV0RGF0YVNvdXJjZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZ1bmN0b3IsIHNhbXBsaW5nKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5GID0gZnVuY3RvcjtcbiAgICAgICAgdGhpcy5SID0gZnVuY3Rvci5Db3JlRnVuY3RvcjtcbiAgICAgICAgdGhpcy5TYW1wbGluZyA9IHNhbXBsaW5nO1xuICAgIH1cblxuICAgIGFzeW5jIGNvbm5lY3QoYmFzZUxpbmspe1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25MaW5rID0gYmFzZUxpbmsgKyAnL2RhdGFzZXQuc3VtbWFyeS5qc29uJztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucXVlcnkoZGVzY3JpcHRpb25MaW5rKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbi5CYXNlTGluayA9IGJhc2VMaW5rO1xuICAgICAgICB0aGlzLnNldENodW5rcyh0aGlzLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGhpcy5zZXREYXRhUmVhZGVyKHRoaXMuZGVzY3JpcHRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG4gICAgXG5cbiAgICAvKipcbiAgICAgKiBmZXRjaCBvciByZWFkIGNvbmZpZ3VyZSBkZXBlbmRzIG9uIHByb3ZpZWQgbGluayBmb3JtYXRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Kn0gbGlua1xuICAgICAqIEByZXR1cm5zXG4gICAgICogQG1lbWJlcm9mIENhdXNhbE5ldEVtYmVkZGluZ1xuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5KGxpbmspe1xuICAgICAgICBpZihsaW5rLnN0YXJ0c1dpdGgoJ2h0dHAnKSl7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQganNvblV0aWxzLmZldGNoSnNvbihsaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGpzb25VdGlscy5yZWFkSlNPTihsaW5rKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBEYXRhQ2h1bmtzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFDaHVua3M7XG4gICAgfVxuXG4gICAgZ2V0IFNhbXBsZVJlYWRlcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5zYW1wbGVSZWFkZXI7XG4gICAgfVxuXG4gICAgZ2V0IExhYmVsUmVhZGVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsUmVhZGVyO1xuICAgIH1cblxuICAgIHNldENodW5rcyhkZXNjcmlwdGlvbil7XG4gICAgICAgIGNvbnN0IFNhbXBsZUNodW5rTmFtZSA9IGRlc2NyaXB0aW9uLlNhbXBsZUNodW5rTmFtZTtcbiAgICAgICAgY29uc3QgTGFiZWxDaHVua05hbWUgPSBkZXNjcmlwdGlvbi5MYWJlbENodW5rTmFtZTtcbiAgICAgICAgbGV0IGNodW5rTGlzdD0gZGVzY3JpcHRpb24uQ2h1bmtMaXN0O1xuICAgICAgICB0aGlzLmRhdGFDaHVua3MgPSBjaHVua0xpc3QubWFwKCBjaWR4PT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7ICBDaHVua05hbWU6IGNpZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNhbXBsZTogU2FtcGxlQ2h1bmtOYW1lLnJlcGxhY2UoJ3t9JywgY2lkeCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIExhYmVsOiBMYWJlbENodW5rTmFtZS5yZXBsYWNlKCd7fScsIGNpZHgpICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHNldERhdGFSZWFkZXIoZGVzY3JpcHRpb24pe1xuICAgICAgICBjb25zdCBTYW1wbGVUeXBlID0gZGVzY3JpcHRpb24uU2FtcGxlVHlwZTtcbiAgICAgICAgY29uc3QgTGFiZWxUeXBlID0gZGVzY3JpcHRpb24uTGFiZWxUeXBlO1xuICAgICAgICBjb25zdCBCYXNlTGluayA9IGRlc2NyaXB0aW9uLkJhc2VMaW5rO1xuICAgICAgICBpZihTYW1wbGVUeXBlID09PSAnSW1hZ2UvUE5HJyl7XG4gICAgICAgICAgICB0aGlzLnNhbXBsZVJlYWRlciA9IHRoaXMubWFrZVBOR1JlYWRlcihCYXNlTGluayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoTGFiZWxUeXBlID09PSAnQnVmZmVyL09uZUhvdCcpe1xuICAgICAgICAgICAgdGhpcy5sYWJlbFJlYWRlciA9IHRoaXMubWFrZUJ1ZmZlclJlYWRlcihCYXNlTGluayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzcGxpdFNhbXBsZShkYXRhKXtcbiAgICAgICAgY29uc3QgU2FtcGxlUGVyQ2h1bmsgPSB0aGlzLmRlc2NyaXB0aW9uLlNhbXBsZVBlckNodW5rO1xuICAgICAgICBjb25zdCBzYW1wbGVTaXplID0gZGF0YS5sZW5ndGggLyBTYW1wbGVQZXJDaHVuaztcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5zcGxpdEV2ZXJ5KHNhbXBsZVNpemUsIGRhdGEpO1xuICAgIH1cblxuICAgIGNodW5rU2VsZWN0KG51bUNodW5rcyl7XG4gICAgICAgIGxldCBjaHVua0xpc3QgPSB0aGlzLkRhdGFDaHVua3M7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaHVua3MgPSB0aGlzLlNhbXBsaW5nLnN1YlNhbXBsaW5nKG51bUNodW5rcywgY2h1bmtMaXN0LCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkQ2h1bmtzO1xuICAgIH1cblxuICAgIHJlYWQoKXtcbiAgICAgICAgaWYoIXRoaXMuc2VsZWN0ZWRDaHVua3Mpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ3NlbGVjdENodW5rcyBpcyBub3QgY2FsbCcpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxlY3RlZENodW5rcyA9IHRoaXMuc2VsZWN0ZWRDaHVua3M7XG4gICAgICAgIGNvbnN0IFNhbXBsZVJlYWRlciA9IHRoaXMuU2FtcGxlUmVhZGVyO1xuICAgICAgICBjb25zdCBMYWJlbFJlYWRlciA9IHRoaXMuTGFiZWxSZWFkZXI7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgZm9yKGxldCB7IFNhbXBsZSwgTGFiZWwsIENodW5rTmFtZSB9IG9mIHNlbGVjdGVkQ2h1bmtzICl7XG4gICAgICAgICAgICAgICAgbGV0IHNhbXBsZURhdGEgPSBhd2FpdCBTYW1wbGVSZWFkZXIoU2FtcGxlKTtcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWxEYXRhID0gYXdhaXQgTGFiZWxSZWFkZXIoTGFiZWwpO1xuICAgICAgICAgICAgICAgIGlmKHNhbXBsZURhdGEubGVuZ3RoICE9PSBsYWJlbERhdGEubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdsZW5ndGhzIG9mIHNhbXBsZSBhbmQgbGFiZWwgYXJlIG5vdCB0aGUgc2FtZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmVtaXQoJ2RhdGEnLCB7ICdTYW1wbGUnOiBzYW1wbGVEYXRhLCAnTGFiZWwnOiBsYWJlbERhdGEsICBDaHVua05hbWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKHNlbGVjdGVkQ2h1bmtzLmxlbmd0aCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDYXVzYWxOZXREYXRhU291cmNlKGZ1bmN0b3IsIGNhdXNhbE5ldFNhbXBsaW5nKTsiLCIvKipcbiAqIFRoaXMgRGF0YVNvdXJjZU1peGlucyBjbGFzcyBwcm92aWRlcyBEYXRhU291cmNlUmVhZGVyIGF0dGlidXRlLCBzb3VyY2UgcmVhZGluZyBtZXRob2RzIGZvciBwaXBlbGluZVxuICogYW5kIGdldHRpbmcgU291cmNlIGluIHBpcGVsaW5lQ29uZmlnXG4gKiBAY2xhc3MgRGF0YVNvdXJjZU1peGluc1xuICogQGV4dGVuZHMgRXZlbnRcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9kYXRhc2V0Lm1peGlucy5iYWJlbC5qc11cbiAqL1xuY29uc3QgRGF0YVNvdXJjZU1peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzIHtcbiAgIFxuICAgIHNldCBEYXRhU291cmNlUmVhZGVyKHNvdXJjZVJlYWRlcil7XG4gICAgICAgIHRoaXMuc291cmNlUmVhZGVyID0gc291cmNlUmVhZGVyO1xuICAgIH1cblxuICAgIGdldCBEYXRhU291cmNlUmVhZGVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnNvdXJjZVJlYWRlcil7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignc291cmNlUmVhZGVyIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VSZWFkZXI7XG4gICAgfVxuXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBpZihzdXBlci5zZXRCeUNvbmZpZyl7XG4gICAgICAgICAgICBzdXBlci5zZXRCeUNvbmZpZyhwaXBlbGluZUNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Mb2dnZXIuZ3JvdXBCZWdpbignc291cmNlJyk7XG4gICAgICAgIGNvbnN0IHsgU291cmNlIH0gPSBwaXBlbGluZUNvbmZpZy5EYXRhc2V0O1xuICAgICAgICB0aGlzLkRhdGFTb3VyY2VSZWFkZXIgPSBTb3VyY2U7XG4gICAgICAgIGlmKFNvdXJjZSl7XG4gICAgICAgICAgICBTb3VyY2UucGlwZSh0aGlzLlByZXByb2Nlc3NpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLkxvZ2dlci5sb2coJyoqKlNvdXJjZSBpcyBub3QgZGVmaW5lZCBcXG4nICsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyoqKlRyYWluRGF0YUdlbmVyYXRvciBhbmQgVGVzdERhdGFHZW5lcmF0b3IgbXVzdCBiZSBzZXQgbWFudWFsbHknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLkxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICByZXR1cm4gcGlwZWxpbmVDb25maWc7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVhZCgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5EYXRhU291cmNlUmVhZGVyLnJlYWQoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuZXhwb3J0IGRlZmF1bHQgbmV3IEZ1bmN0b3IoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldERhdGFTb3VyY2UgfSBmcm9tICcuL2NhdXNhbE5ldERhdGFTb3VyY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEYXRhU291cmNlTWl4aW5zIH0gZnJvbSAnLi9kYXRhU291cmNlLm1peGlucyc7IiwiLyogKGlnbm9yZWQpICovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==