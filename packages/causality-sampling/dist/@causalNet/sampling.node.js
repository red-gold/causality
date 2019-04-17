(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"), require("random"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils", "random"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/sampling"] = factory(require("causal-net.core"), require("causal-net.utils"), require("random"));
	else
		root["@causalNet/sampling"] = factory(root["causal-net.core"], root["causal-net.utils"], root["random"]);
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
 * This class provides common used sampling methods which can be accessed via **causalNetSampling**.
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
 * This mixin class provide attributes: **Sampling**.
 * @class SamplingMixins
 * @extends BaseClass
 * @example
 * [EXAMPLE ../examples/sampling.mixins.babel.js]
 */

const SamplingMixins = BaseClass => class extends BaseClass {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvLi9zcmMvY2F1c2FsTmV0U2FtcGxpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL3NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL3N1YlNhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwicmFuZG9tXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0U2FtcGxpbmciLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlRnVuY3RvciIsIlN1YlNhbXBsaW5nTWl4aW5zIiwiTmVnU2FtcGxpbmdNaXhpbnMiLCJjb25zdHJ1Y3RvciIsIlJhbmRvbSIsInJhbmRvbSIsIk5lZ2F0aXZlU2FtcGxpbmdNaXhpbnMiLCJCYXNlU2FtcGxpbmdDbGFzcyIsIm5lZ1NhbXBsaW5nIiwibmVnYXRpdmVTaXplIiwicG9zaXRpdmVTYW1wbGVzIiwiY2FuZGlkYXRlUHJvYnMiLCJyZXBsYWNhYmxlIiwiUiIsImFueSIsInYiLCJ0eXBlIiwiTnVtYmVyIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VsZXRpb25Qcm9icyIsInJlZHVjZSIsInNlbGVjdGlvblByb2JzIiwicGlkeCIsIkluZmluaXR5IiwiY2xvbmUiLCJzYW1wbGVzIiwidGFrZW5JZHhzIiwiR2VuTmV3Q2FuZGlkYXRlSWR4IiwiaW50IiwibGVuZ3RoIiwiU2VsZWN0SWZIaWdoUHJvYiIsInByb2IiLCJyYW5kIiwiZmxvYXQiLCJpZHgiLCJzZWxlY3RlZCIsIlNhbXBsaW5nTWl4aW5zIiwiQmFzZUNsYXNzIiwiU2FtcGxpbmciLCJzYW1wbGluZyIsImFzc2VydCIsImJlSW5zdGFuY2VPZiIsIkZ1bmN0b3IiLCJzdWJTYW1wbGluZyIsInNhbXBsaW5nU2l6ZSIsImNhbmRpZGF0ZUxpc3QiLCJjYW5kaWRhdGVzIiwiQXJyYXkiLCJpc0FycmF5IiwicmFuZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVy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QUEsUUFBa0JDLFNBQVMsR0FBR2YsQ0FBQyxDQUFDYSxLQUFGLENBQVFzQixVQUFSLENBQTlCOztBQUNBLFVBQU1uQixrQkFBa0IsR0FBRyxNQUFJekIsTUFBTSxDQUFDMEIsR0FBUCxDQUFXLENBQVgsRUFBY2tCLFVBQVUsQ0FBQ2pCLE1BQVgsR0FBa0IsQ0FBaEMsQ0FBL0I7O0FBQ0EsV0FBTUosT0FBTyxDQUFDSSxNQUFSLEdBQWlCZSxZQUF2QixFQUFvQztBQUNoQyxVQUFJVixHQUFHLEdBQUdQLGtCQUFrQixFQUE1Qjs7QUFDQSxVQUFHLENBQUNqQixVQUFELElBQWVnQixTQUFTLENBQUNRLEdBQUQsQ0FBVCxLQUFpQixJQUFuQyxFQUF3QztBQUNwQztBQUNIOztBQUNEVCxhQUFPLEdBQUcsQ0FBQyxHQUFHQSxPQUFKLEVBQWFxQixVQUFVLENBQUNaLEdBQUQsQ0FBdkIsQ0FBVjs7QUFDQSxVQUFHLENBQUN4QixVQUFKLEVBQWU7QUFDWGdCLGlCQUFTLENBQUNRLEdBQUQsQ0FBVCxHQUFlLElBQWYsQ0FEVyxDQUNTO0FBQ3ZCO0FBQ0o7O0FBQ0QsV0FBT1QsT0FBUDtBQUNIOztBQTNCMkUsQ0FBaEY7O0FBNkJlMUIsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7QUM3QkEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoiQGNhdXNhbE5ldC9zYW1wbGluZy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcInJhbmRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCIsIFwicmFuZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvc2FtcGxpbmdcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwicmFuZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3NhbXBsaW5nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgcm9vdFtcInJhbmRvbVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW5kb21fXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHJhbmRvbSBmcm9tICdyYW5kb20nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBTdWJTYW1wbGluZ01peGlucyB9IGZyb20gJy4vc3ViU2FtcGxpbmcubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgTmVnU2FtcGxpbmdNaXhpbnMgfSBmcm9tICcuL25lZ1NhbXBsaW5nLm1peGlucyc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBjb21tb24gdXNlZCBzYW1wbGluZyBtZXRob2RzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRTYW1wbGluZyoqLlxuICogbWl4d2l0aDpcbiAqIFsgU3ViU2FtcGxpbmdNaXhpbnMsIE5lZ1NhbXBsaW5nTWl4aW5zIF1cbiAqIEBjbGFzcyBDYXVzYWxOZXRTYW1wbGluZ1xuICogQGV4dGVuZHMgRnVuY3RvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldFNhbXBsaW5nLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRTYW1wbGluZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoIEJhc2VGdW5jdG9yLCBcbiAgICBbIFN1YlNhbXBsaW5nTWl4aW5zLCBOZWdTYW1wbGluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLlJhbmRvbSA9IHJhbmRvbTsgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0U2FtcGxpbmcoKTsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFNhbXBsaW5nIH0gZnJvbSAnLi9jYXVzYWxOZXRTYW1wbGluZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNhbXBsaW5nTWl4aW5zIH0gZnJvbSAnLi9zYW1wbGluZy5taXhpbnMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN1YlNhbXBsaW5nTWl4aW5zIH0gZnJvbSAnLi9zdWJTYW1wbGluZy5taXhpbnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBOZWdTYW1wbGluZ01peGlucyB9IGZyb20gJy4vbmVnU2FtcGxpbmcubWl4aW5zJzsiLCJjb25zdCBOZWdhdGl2ZVNhbXBsaW5nTWl4aW5zID0gKEJhc2VTYW1wbGluZ0NsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZVNhbXBsaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBuZWdhdGl2ZSBzYW1wbGluZyBnaXZlbiB0aGUgc2VsZWN0IHByb2Igb2YgaWRzIGFuZCBsaXN0IG9mIHBvc2l0aXZlIHNhbXBsZXNcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBuZWdhdGl2ZVNpemUgLSBzaXplIHRvIHNhbXBsZVxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gcG9zaXRpdmVTYW1wbGVzIC0gQXJyYXkgb2YgcG9zc2l0aXZlIElkc1xuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gY2FuZGlkYXRlUHJvYnMgLSBBcnJheSBvZiBwcm9iYWJsaXR5IG9mIGNhbmRpZGF0ZSBJZHNcbiAgICAgKiBAcGFyYW0geyBCb29sZWFuIH0gW3JlcGxhY2FibGU9dHJ1ZV0gLSBpZiB0cnVlLCBubyBkdXBsaWNhdGVkIHNhbXBsaW5nIElkIHJldHVybmVkXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IGFycmF5IG9mIHNhbXBsZWQgSWRzXG4gICAgICovXG4gICAgbmVnU2FtcGxpbmcobmVnYXRpdmVTaXplLCBwb3NpdGl2ZVNhbXBsZXMsIGNhbmRpZGF0ZVByb2JzLCByZXBsYWNhYmxlPXRydWUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBSYW5kb20gPSB0aGlzLlJhbmRvbTtcbiAgICAgICAgaWYoUi5hbnkoKHYpPT4gIVIudHlwZShOdW1iZXIsdikgfHwgdiA+IDEgfHwgdiA8IDAsIGNhbmRpZGF0ZVByb2JzKSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHtKU09OLnN0cmluZ2lmeShjYW5kaWRhdGVQcm9icyl9IGlzIG5vdCBhbGxvd2ApO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxldGlvblByb2JzID0gUi5yZWR1Y2UoKHNlbGVjdGlvblByb2JzLCBwaWR4KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Qcm9ic1twaWR4XSA9IEluZmluaXR5Oy8vcG9zaXRpdmUgY2FuZGlkYXRlIG5ldmVyIGJlIGNob29zZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvblByb2JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFIuY2xvbmUoY2FuZGlkYXRlUHJvYnMpLCBwb3NpdGl2ZVNhbXBsZXMpO1xuICAgICAgICBsZXQgc2FtcGxlcyA9IFtdLCB0YWtlbklkeHMgPSBSLmNsb25lKHNlbGV0aW9uUHJvYnMpO1xuICAgICAgICBjb25zdCBHZW5OZXdDYW5kaWRhdGVJZHggPSAoKT0+UmFuZG9tLmludCgwLCBzZWxldGlvblByb2JzLmxlbmd0aC0xKTtcbiAgICAgICAgY29uc3QgU2VsZWN0SWZIaWdoUHJvYiA9IChwcm9iKT0+e1xuICAgICAgICAgICAgbGV0IHJhbmQgPSBSYW5kb20uZmxvYXQoKTtcbiAgICAgICAgICAgIHJldHVybiByYW5kPnByb2I7XG4gICAgICAgIH07XG4gICAgICAgIHdoaWxlKHNhbXBsZXMubGVuZ3RoIDwgbmVnYXRpdmVTaXplKXtcbiAgICAgICAgICAgIGxldCBpZHggPSBHZW5OZXdDYW5kaWRhdGVJZHgoKTtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IFNlbGVjdElmSGlnaFByb2Ioc2VsZXRpb25Qcm9ic1tpZHhdKTtcbiAgICAgICAgICAgIGlmKCFzZWxlY3RlZCl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighcmVwbGFjYWJsZSAmJiB0YWtlbklkeHNbaWR4XT09PW51bGwpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2FtcGxlcyA9IFsuLi5zYW1wbGVzLCBpZHhdO1xuICAgICAgICAgICAgaWYoIXJlcGxhY2FibGUpe1xuICAgICAgICAgICAgICAgIHRha2VuSWR4c1tpZHhdPW51bGw7Ly9ub24gcmVwbGFjZWFibGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICAgICAgcmV0dXJuIHNhbXBsZXM7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5lZ2F0aXZlU2FtcGxpbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbi8qKlxuICogVGhpcyBtaXhpbiBjbGFzcyBwcm92aWRlIGF0dHJpYnV0ZXM6ICoqU2FtcGxpbmcqKi5cbiAqIEBjbGFzcyBTYW1wbGluZ01peGluc1xuICogQGV4dGVuZHMgQmFzZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvc2FtcGxpbmcubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBTYW1wbGluZ01peGlucyA9IChCYXNlQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlQ2xhc3N7XG4gICAgLyoqXG4gICAgICogZ2V0IGN1cnJlbnQgcmFuZG9tIGluc3RhbmNlXG4gICAgICovXG4gICAgZ2V0IFNhbXBsaW5nKCl7XG4gICAgICAgIGlmKCF0aGlzLnNhbXBsaW5nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBTYW1wbGluZyBpcyBub3Qgc2V0YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxpbmc7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIHNldCBTYW1wbGluZyBpbnN0YW5jZVxuICAgICAqIEByZWFkb25seVxuICAgICAqL1xuICAgIHNldCBTYW1wbGluZyhzYW1wbGluZyl7XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2Yoc2FtcGxpbmcsIEZ1bmN0b3IpO1xuICAgICAgICB0aGlzLnNhbXBsaW5nID0gc2FtcGxpbmc7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FtcGxpbmdNaXhpbnM7IiwiY29uc3QgU3ViU2FtcGxpbmdNaXhpbnMgPSAoQmFzZVNhbXBsaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgQmFzZVNhbXBsaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybSB1bmlmb3JtIHNhbXBsZSBhIHN1YiBzZXQgb2YgSWRzIGdpdmVuIHRoZSBjYW5kaWRhdGUgbGlzdFxuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IHNhbXBsaW5nU2l6ZVxuICAgICAqIEBwYXJhbSB7IEFycmF5fE51bWJlciB9IGNhbmRpZGF0ZUxpc3QgLSBsaXN0IG9mIGNhbmRpZGF0ZXMgb3Igc2l6ZSBvZiBjYW5kaWRhdGUgbGlzdFxuICAgICAqIEBwYXJhbSB7IEJvb2xlYW4gfSBbcmVwbGFjYWJsZT10cnVlXSAtIGlmIHRydWUsIG5vIGR1cGxpY2F0ZWQgc2FtcGxpbmcgSWQgcmV0dXJuZWRcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2Ygc2FtcGxlZCBJZHNcbiAgICAgKi9cbiAgICBzdWJTYW1wbGluZyhzYW1wbGluZ1NpemUsIGNhbmRpZGF0ZUxpc3QsIHJlcGxhY2FibGU9dHJ1ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFJhbmRvbSA9IHRoaXMuUmFuZG9tO1xuICAgICAgICBsZXQgY2FuZGlkYXRlcyA9IEFycmF5LmlzQXJyYXkoY2FuZGlkYXRlTGlzdCk/Ui5jbG9uZShjYW5kaWRhdGVMaXN0KTpSLnJhbmdlKDAsIGNhbmRpZGF0ZUxpc3QpO1xuICAgICAgICBpZihjYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignY2FuZGlkYXRlIGxlbmd0aCBzaG91bGQgYmUgcG9zaXRpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2FtcGxlcyA9IFtdLCB0YWtlbklkeHMgPSBSLmNsb25lKGNhbmRpZGF0ZXMpO1xuICAgICAgICBjb25zdCBHZW5OZXdDYW5kaWRhdGVJZHggPSAoKT0+UmFuZG9tLmludCgwLCBjYW5kaWRhdGVzLmxlbmd0aC0xKTtcbiAgICAgICAgd2hpbGUoc2FtcGxlcy5sZW5ndGggPCBzYW1wbGluZ1NpemUpe1xuICAgICAgICAgICAgbGV0IGlkeCA9IEdlbk5ld0NhbmRpZGF0ZUlkeCgpO1xuICAgICAgICAgICAgaWYoIXJlcGxhY2FibGUgJiYgdGFrZW5JZHhzW2lkeF09PT1udWxsKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhbXBsZXMgPSBbLi4uc2FtcGxlcywgY2FuZGlkYXRlc1tpZHhdXTtcbiAgICAgICAgICAgIGlmKCFyZXBsYWNhYmxlKXtcbiAgICAgICAgICAgICAgICB0YWtlbklkeHNbaWR4XT1udWxsOy8vbm9uIHJlcGxhY2VhYmxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgICAgIHJldHVybiBzYW1wbGVzO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBTdWJTYW1wbGluZ01peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFuZG9tX187Il0sInNvdXJjZVJvb3QiOiIifQ==