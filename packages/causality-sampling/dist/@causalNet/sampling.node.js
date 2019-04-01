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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvLi9zcmMvY2F1c2FsTmV0U2FtcGxpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL25lZ1NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL3NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL3N1YlNhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwicmFuZG9tXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0U2FtcGxpbmciLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlRnVuY3RvciIsIlN1YlNhbXBsaW5nTWl4aW5zIiwiTmVnU2FtcGxpbmdNaXhpbnMiLCJjb25zdHJ1Y3RvciIsIlJhbmRvbSIsInJhbmRvbSIsIk5lZ2F0aXZlU2FtcGxpbmdNaXhpbnMiLCJCYXNlU2FtcGxpbmdDbGFzcyIsIm5lZ1NhbXBsaW5nIiwibmVnYXRpdmVTaXplIiwicG9zaXRpdmVTYW1wbGVzIiwiY2FuZGlkYXRlUHJvYnMiLCJyZXBsYWNhYmxlIiwiUiIsImFueSIsInYiLCJ0eXBlIiwiTnVtYmVyIiwiRXJyb3IiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VsZXRpb25Qcm9icyIsInJlZHVjZSIsInNlbGVjdGlvblByb2JzIiwicGlkeCIsIkluZmluaXR5IiwiY2xvbmUiLCJzYW1wbGVzIiwidGFrZW5JZHhzIiwiR2VuTmV3Q2FuZGlkYXRlSWR4IiwiaW50IiwibGVuZ3RoIiwiU2VsZWN0SWZIaWdoUHJvYiIsInByb2IiLCJyYW5kIiwiZmxvYXQiLCJpZHgiLCJzZWxlY3RlZCIsIlNhbXBsaW5nTWl4aW5zIiwiQmFzZVBpcGVsaW5lQ2xhc3MiLCJTYW1wbGluZyIsInNhbXBsaW5nIiwiYXNzZXJ0IiwiYmVJbnN0YW5jZU9mIiwiRnVuY3RvciIsInN1YlNhbXBsaW5nIiwic2FtcGxpbmdTaXplIiwiY2FuZGlkYXRlTGlzdCIsImNhbmRpZGF0ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJyYW5nZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFB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QUFHLEVBQWQ7QUFBQSxRQUFrQkMsU0FBUyxHQUFHZixDQUFDLENBQUNhLEtBQUYsQ0FBUXNCLFVBQVIsQ0FBOUI7O0FBQ0EsVUFBTW5CLGtCQUFrQixHQUFHLE1BQUl6QixNQUFNLENBQUMwQixHQUFQLENBQVcsQ0FBWCxFQUFja0IsVUFBVSxDQUFDakIsTUFBWCxHQUFrQixDQUFoQyxDQUEvQjs7QUFDQSxXQUFNSixPQUFPLENBQUNJLE1BQVIsR0FBaUJlLFlBQXZCLEVBQW9DO0FBQ2hDLFVBQUlWLEdBQUcsR0FBR1Asa0JBQWtCLEVBQTVCOztBQUNBLFVBQUcsQ0FBQ2pCLFVBQUQsSUFBZWdCLFNBQVMsQ0FBQ1EsR0FBRCxDQUFULEtBQWlCLElBQW5DLEVBQXdDO0FBQ3BDO0FBQ0g7O0FBQ0RULGFBQU8sR0FBRyxDQUFDLEdBQUdBLE9BQUosRUFBYXFCLFVBQVUsQ0FBQ1osR0FBRCxDQUF2QixDQUFWOztBQUNBLFVBQUcsQ0FBQ3hCLFVBQUosRUFBZTtBQUNYZ0IsaUJBQVMsQ0FBQ1EsR0FBRCxDQUFULEdBQWUsSUFBZixDQURXLENBQ1M7QUFDdkI7QUFDSjs7QUFDRCxXQUFPVCxPQUFQO0FBQ0g7O0FBM0IyRSxDQUFoRjs7QUE2QmUxQixnRkFBZixFOzs7Ozs7Ozs7OztBQzdCQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJAY2F1c2FsTmV0L3NhbXBsaW5nLm5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwicmFuZG9tXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIiwgXCJyYW5kb21cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9zYW1wbGluZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJyYW5kb21cIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvc2FtcGxpbmdcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCByb290W1wicmFuZG9tXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbmRvbV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBGdW5jdG9yIGFzIEJhc2VGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJ3JhbmRvbSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFN1YlNhbXBsaW5nTWl4aW5zIH0gZnJvbSAnLi9zdWJTYW1wbGluZy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBOZWdTYW1wbGluZ01peGlucyB9IGZyb20gJy4vbmVnU2FtcGxpbmcubWl4aW5zJztcblxuLyoqXG4gKiBUaGlzIENhdXNhbE5ldFNhbXBsaW5nIGNsYXNzIHByb3ZpZGVzIHNhbXBsaW5nIG1ldGhvZHNcbiAqIG1peHdpdGg6XG4gKiBbIFN1YlNhbXBsaW5nTWl4aW5zLCBOZWdTYW1wbGluZ01peGlucyBdXG4gKiBAY2xhc3MgQ2F1c2FsTmV0U2FtcGxpbmdcbiAqIEBleHRlbmRzIEZ1bmN0b3JcbiAqIEBleGFtcGxlXG4gKiBbRVhBTVBMRSAuLi9leGFtcGxlcy9jYXVzYWxOZXRTYW1wbGluZy5iYWJlbC5qc11cbiAqL1xuY2xhc3MgQ2F1c2FsTmV0U2FtcGxpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKCBCYXNlRnVuY3RvciwgXG4gICAgWyBTdWJTYW1wbGluZ01peGlucywgTmVnU2FtcGxpbmdNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5SYW5kb20gPSByYW5kb207ICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFNhbXBsaW5nKCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRTYW1wbGluZyB9IGZyb20gJy4vY2F1c2FsTmV0U2FtcGxpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTYW1wbGluZ01peGlucyB9IGZyb20gJy4vc2FtcGxpbmcubWl4aW5zJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdWJTYW1wbGluZ01peGlucyB9IGZyb20gJy4vc3ViU2FtcGxpbmcubWl4aW5zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmVnU2FtcGxpbmdNaXhpbnMgfSBmcm9tICcuL25lZ1NhbXBsaW5nLm1peGlucyc7IiwiY29uc3QgTmVnYXRpdmVTYW1wbGluZ01peGlucyA9IChCYXNlU2FtcGxpbmdDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VTYW1wbGluZ0NsYXNze1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gbmVnYXRpdmUgc2FtcGxpbmcgZ2l2ZW4gdGhlIHNlbGVjdCBwcm9iIG9mIGlkcyBhbmQgbGlzdCBvZiBwb3NpdGl2ZSBzYW1wbGVzXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gbmVnYXRpdmVTaXplIC0gc2l6ZSB0byBzYW1wbGVcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHBvc2l0aXZlU2FtcGxlcyAtIEFycmF5IG9mIHBvc3NpdGl2ZSBJZHNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IGNhbmRpZGF0ZVByb2JzIC0gQXJyYXkgb2YgcHJvYmFibGl0eSBvZiBjYW5kaWRhdGUgSWRzXG4gICAgICogQHBhcmFtIHsgQm9vbGVhbiB9IFtyZXBsYWNhYmxlPXRydWVdIC0gaWYgdHJ1ZSwgbm8gZHVwbGljYXRlZCBzYW1wbGluZyBJZCByZXR1cm5lZFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBhcnJheSBvZiBzYW1wbGVkIElkc1xuICAgICAqL1xuICAgIG5lZ1NhbXBsaW5nKG5lZ2F0aXZlU2l6ZSwgcG9zaXRpdmVTYW1wbGVzLCBjYW5kaWRhdGVQcm9icywgcmVwbGFjYWJsZT10cnVlKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgUmFuZG9tID0gdGhpcy5SYW5kb207XG4gICAgICAgIGlmKFIuYW55KCh2KT0+ICFSLnR5cGUoTnVtYmVyLHYpIHx8IHYgPiAxIHx8IHYgPCAwLCBjYW5kaWRhdGVQcm9icykpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7SlNPTi5zdHJpbmdpZnkoY2FuZGlkYXRlUHJvYnMpfSBpcyBub3QgYWxsb3dgKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VsZXRpb25Qcm9icyA9IFIucmVkdWNlKChzZWxlY3Rpb25Qcm9icywgcGlkeCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uUHJvYnNbcGlkeF0gPSBJbmZpbml0eTsvL3Bvc2l0aXZlIGNhbmRpZGF0ZSBuZXZlciBiZSBjaG9vc2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3Rpb25Qcm9icztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBSLmNsb25lKGNhbmRpZGF0ZVByb2JzKSwgcG9zaXRpdmVTYW1wbGVzKTtcbiAgICAgICAgbGV0IHNhbXBsZXMgPSBbXSwgdGFrZW5JZHhzID0gUi5jbG9uZShzZWxldGlvblByb2JzKTtcbiAgICAgICAgY29uc3QgR2VuTmV3Q2FuZGlkYXRlSWR4ID0gKCk9PlJhbmRvbS5pbnQoMCwgc2VsZXRpb25Qcm9icy5sZW5ndGgtMSk7XG4gICAgICAgIGNvbnN0IFNlbGVjdElmSGlnaFByb2IgPSAocHJvYik9PntcbiAgICAgICAgICAgIGxldCByYW5kID0gUmFuZG9tLmZsb2F0KCk7XG4gICAgICAgICAgICByZXR1cm4gcmFuZD5wcm9iO1xuICAgICAgICB9O1xuICAgICAgICB3aGlsZShzYW1wbGVzLmxlbmd0aCA8IG5lZ2F0aXZlU2l6ZSl7XG4gICAgICAgICAgICBsZXQgaWR4ID0gR2VuTmV3Q2FuZGlkYXRlSWR4KCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBTZWxlY3RJZkhpZ2hQcm9iKHNlbGV0aW9uUHJvYnNbaWR4XSk7XG4gICAgICAgICAgICBpZighc2VsZWN0ZWQpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIXJlcGxhY2FibGUgJiYgdGFrZW5JZHhzW2lkeF09PT1udWxsKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhbXBsZXMgPSBbLi4uc2FtcGxlcywgaWR4XTtcbiAgICAgICAgICAgIGlmKCFyZXBsYWNhYmxlKXtcbiAgICAgICAgICAgICAgICB0YWtlbklkeHNbaWR4XT1udWxsOy8vbm9uIHJlcGxhY2VhYmxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgXG4gICAgICAgIHJldHVybiBzYW1wbGVzO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBOZWdhdGl2ZVNhbXBsaW5nTWl4aW5zOyIsImltcG9ydCB7IEZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG4vKipcbiAqIFRoaXMgU2FtcGxpbmdNaXhpbnMgY2xhc3MgcHJvdmlkZSBtaXhpbnMgZm9yIFBpcGVsaW5lQ2xhc3Mgb3IgRGF0YXNldENsYXNzXG4gKiBAY2xhc3MgU2FtcGxpbmdNaXhpbnNcbiAqIEBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNzXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvc2FtcGxpbmcubWl4aW5zLmJhYmVsLmpzXVxuICovXG5jb25zdCBTYW1wbGluZ01peGlucyA9IChCYXNlUGlwZWxpbmVDbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIC8qKlxuICAgICAqIGdldCBjdXJyZW50IHJhbmRvbSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGdldCBTYW1wbGluZygpe1xuICAgICAgICBpZighdGhpcy5zYW1wbGluZyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgU2FtcGxpbmcgaXMgbm90IHNldGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNhbXBsaW5nO1xuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiBzZXQgU2FtcGxpbmcgaW5zdGFuY2VcbiAgICAgKiBAcmVhZG9ubHlcbiAgICAgKi9cbiAgICBzZXQgU2FtcGxpbmcoc2FtcGxpbmcpe1xuICAgICAgICBhc3NlcnQuYmVJbnN0YW5jZU9mKHNhbXBsaW5nLCBGdW5jdG9yKTtcbiAgICAgICAgdGhpcy5zYW1wbGluZyA9IHNhbXBsaW5nO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNhbXBsaW5nTWl4aW5zOyIsImNvbnN0IFN1YlNhbXBsaW5nTWl4aW5zID0gKEJhc2VTYW1wbGluZ0NsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VTYW1wbGluZ0NsYXNze1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gdW5pZm9ybSBzYW1wbGUgYSBzdWIgc2V0IG9mIElkcyBnaXZlbiB0aGUgY2FuZGlkYXRlIGxpc3RcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBzYW1wbGluZ1NpemVcbiAgICAgKiBAcGFyYW0geyBBcnJheXxOdW1iZXIgfSBjYW5kaWRhdGVMaXN0IC0gbGlzdCBvZiBjYW5kaWRhdGVzIG9yIHNpemUgb2YgY2FuZGlkYXRlIGxpc3RcbiAgICAgKiBAcGFyYW0geyBCb29sZWFuIH0gW3JlcGxhY2FibGU9dHJ1ZV0gLSBpZiB0cnVlLCBubyBkdXBsaWNhdGVkIHNhbXBsaW5nIElkIHJldHVybmVkXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IGFycmF5IG9mIHNhbXBsZWQgSWRzXG4gICAgICovXG4gICAgc3ViU2FtcGxpbmcoc2FtcGxpbmdTaXplLCBjYW5kaWRhdGVMaXN0LCByZXBsYWNhYmxlPXRydWUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SLCBSYW5kb20gPSB0aGlzLlJhbmRvbTtcbiAgICAgICAgbGV0IGNhbmRpZGF0ZXMgPSBBcnJheS5pc0FycmF5KGNhbmRpZGF0ZUxpc3QpP1IuY2xvbmUoY2FuZGlkYXRlTGlzdCk6Ui5yYW5nZSgwLCBjYW5kaWRhdGVMaXN0KTtcbiAgICAgICAgaWYoY2FuZGlkYXRlcy5sZW5ndGggPT09IDApe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2NhbmRpZGF0ZSBsZW5ndGggc2hvdWxkIGJlIHBvc2l0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNhbXBsZXMgPSBbXSwgdGFrZW5JZHhzID0gUi5jbG9uZShjYW5kaWRhdGVzKTtcbiAgICAgICAgY29uc3QgR2VuTmV3Q2FuZGlkYXRlSWR4ID0gKCk9PlJhbmRvbS5pbnQoMCwgY2FuZGlkYXRlcy5sZW5ndGgtMSk7XG4gICAgICAgIHdoaWxlKHNhbXBsZXMubGVuZ3RoIDwgc2FtcGxpbmdTaXplKXtcbiAgICAgICAgICAgIGxldCBpZHggPSBHZW5OZXdDYW5kaWRhdGVJZHgoKTtcbiAgICAgICAgICAgIGlmKCFyZXBsYWNhYmxlICYmIHRha2VuSWR4c1tpZHhdPT09bnVsbCl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYW1wbGVzID0gWy4uLnNhbXBsZXMsIGNhbmRpZGF0ZXNbaWR4XV07XG4gICAgICAgICAgICBpZighcmVwbGFjYWJsZSl7XG4gICAgICAgICAgICAgICAgdGFrZW5JZHhzW2lkeF09bnVsbDsvL25vbiByZXBsYWNlYWJsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgICAgICByZXR1cm4gc2FtcGxlcztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgU3ViU2FtcGxpbmdNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbmRvbV9fOyJdLCJzb3VyY2VSb290IjoiIn0=