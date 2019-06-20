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

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!*****************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/extends.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./src/Distributions/Binomial.js":
/*!***************************************!*\
  !*** ./src/Distributions/Binomial.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Binomial; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Distribution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Distribution */ "./src/Distributions/Distribution.js");


class Binomial extends _Distribution__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(_ref) {
    let kwargs = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

    super();
    let {
      n,
      p
    } = kwargs;
    this.n = n;
    this.p = p;
  }
  /**
   * k: sampling value
   * $\log{P(k; n, p)} \propto k \log{p} + (n-k)\log{(1-p)}$
   * @param {*} x
   * @memberof Binomial
   */


  logP(k) {
    const n = this.n,
          p = this.p;
    const one = this.T.tensor(1);
    return this.T.sum(k.mul(p.log()).add(n.sub(k).mul(one.sub(p).log())));
  }

  sampling(shape) {
    const n = this.n.dataSync()[0];
    const p = this.p.dataSync()[0];
    const size = this.getSize(shape);

    const Generator = () => {
      let sample = 0;

      for (let counter = 0; counter++ < n; counter++) {
        sample += Math.random() < p;
      }

      return sample;
    };

    let samples = [];

    for (let counter = 0; counter < size; counter++) {
      samples.push(Generator());
    }

    return this.T.tensor(samples).reshape(shape);
  }

}

/***/ }),

/***/ "./src/Distributions/Distribution.js":
/*!*******************************************!*\
  !*** ./src/Distributions/Distribution.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Distribution; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! random */ "random");
/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(random__WEBPACK_IMPORTED_MODULE_2__);



class Distribution extends causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Tensor"] {
  constructor(_ref) {
    let kwargs = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

    super();
    this.random = random__WEBPACK_IMPORTED_MODULE_2___default.a;
  }
  /**
   * Log likelihood
   * @param {*} x 
   */


  logP(x) {
    throw Error('implementation is required');
  }

  getSize(shape) {
    return shape.reduce((size, sh) => size * sh, 1);
  }

  sampling(size) {
    throw Error('implementation is required');
  }

}

/***/ }),

/***/ "./src/Distributions/Normal.js":
/*!*************************************!*\
  !*** ./src/Distributions/Normal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Normal; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Distribution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Distribution */ "./src/Distributions/Distribution.js");


class Normal extends _Distribution__WEBPACK_IMPORTED_MODULE_1__["default"] {
  init(_ref) {
    let kwargs = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

    let {
      mu
    } = kwargs;
    this.mu = mu;
    this.std = std;
  }

  logP(x) {}

  sampling(shape) {
    const size = this.getSize(shape);
    let samples = this.random.binomial(size, this.p);
    return this.T.tensor(samples).reshape(shape);
  }

}

/***/ }),

/***/ "./src/Distributions/index.js":
/*!************************************!*\
  !*** ./src/Distributions/index.js ***!
  \************************************/
/*! exports provided: Distributions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Distributions", function() { return Distributions; });
/* harmony import */ var _Binomial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Binomial */ "./src/Distributions/Binomial.js");
/* harmony import */ var _Normal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Normal */ "./src/Distributions/Normal.js");


const Distributions = {
  Binomial: _Binomial__WEBPACK_IMPORTED_MODULE_0__["default"],
  Normal: _Normal__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./src/Samplers/causalNetSamplers.js":
/*!*******************************************!*\
  !*** ./src/Samplers/causalNetSamplers.js ***!
  \*******************************************/
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
/* harmony import */ var _subSampling_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subSampling.mixins */ "./src/Samplers/subSampling.mixins.js");
/* harmony import */ var _negSampling_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./negSampling.mixins */ "./src/Samplers/negSampling.mixins.js");





/**
 * This class provides common used sampling methods which can be accessed via **causalNetSamplers**.
 * mixwith:
 * [ SubSamplingMixins, NegSamplingMixins ]
 * @class CausalNetSamplers
 * @extends Functor
 * @example
 * [EXAMPLE ../examples/causalNetSamplers.babel.js]
 */

class CausalNetSamplers extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_subSampling_mixins__WEBPACK_IMPORTED_MODULE_3__["default"], _negSampling_mixins__WEBPACK_IMPORTED_MODULE_4__["default"]]) {
  constructor(random) {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetSamplers(random__WEBPACK_IMPORTED_MODULE_2___default.a));

/***/ }),

/***/ "./src/Samplers/index.js":
/*!*******************************!*\
  !*** ./src/Samplers/index.js ***!
  \*******************************/
/*! exports provided: causalNetSamplers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetSamplers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetSamplers */ "./src/Samplers/causalNetSamplers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetSamplers", function() { return _causalNetSamplers__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/Samplers/negSampling.mixins.js":
/*!********************************************!*\
  !*** ./src/Samplers/negSampling.mixins.js ***!
  \********************************************/
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

/***/ "./src/Samplers/subSampling.mixins.js":
/*!********************************************!*\
  !*** ./src/Samplers/subSampling.mixins.js ***!
  \********************************************/
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetSamplers, Distributions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Samplers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Samplers/index */ "./src/Samplers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetSamplers", function() { return _Samplers_index__WEBPACK_IMPORTED_MODULE_0__["causalNetSamplers"]; });

/* harmony import */ var _Distributions_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Distributions/index */ "./src/Distributions/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Distributions", function() { return _Distributions_index__WEBPACK_IMPORTED_MODULE_1__["Distributions"]; });




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvLi9zcmMvRGlzdHJpYnV0aW9ucy9CaW5vbWlhbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL0Rpc3RyaWJ1dGlvbnMvRGlzdHJpYnV0aW9uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvLi9zcmMvRGlzdHJpYnV0aW9ucy9Ob3JtYWwuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy8uL3NyYy9EaXN0cmlidXRpb25zL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvLi9zcmMvU2FtcGxlcnMvY2F1c2FsTmV0U2FtcGxlcnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9zYW1wbGluZy8uL3NyYy9TYW1wbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL1NhbXBsZXJzL25lZ1NhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL1NhbXBsZXJzL3N1YlNhbXBsaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3NhbXBsaW5nL2V4dGVybmFsIFwiY2F1c2FsLW5ldC51dGlsc1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvc2FtcGxpbmcvZXh0ZXJuYWwgXCJyYW5kb21cIiJdLCJuYW1lcyI6WyJCaW5vbWlhbCIsIkRpc3RyaWJ1dGlvbiIsImNvbnN0cnVjdG9yIiwia3dhcmdzIiwibiIsInAiLCJsb2dQIiwiayIsIm9uZSIsIlQiLCJ0ZW5zb3IiLCJzdW0iLCJtdWwiLCJsb2ciLCJhZGQiLCJzdWIiLCJzYW1wbGluZyIsInNoYXBlIiwiZGF0YVN5bmMiLCJzaXplIiwiZ2V0U2l6ZSIsIkdlbmVyYXRvciIsInNhbXBsZSIsImNvdW50ZXIiLCJNYXRoIiwicmFuZG9tIiwic2FtcGxlcyIsInB1c2giLCJyZXNoYXBlIiwiQmFzZVRlbnNvciIsIngiLCJFcnJvciIsInJlZHVjZSIsInNoIiwiTm9ybWFsIiwiaW5pdCIsIm11Iiwic3RkIiwiYmlub21pYWwiLCJEaXN0cmlidXRpb25zIiwiQ2F1c2FsTmV0U2FtcGxlcnMiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlRnVuY3RvciIsIlN1YlNhbXBsaW5nTWl4aW5zIiwiTmVnU2FtcGxpbmdNaXhpbnMiLCJOZWdhdGl2ZVNhbXBsaW5nTWl4aW5zIiwiQmFzZVNhbXBsaW5nQ2xhc3MiLCJuZWdTYW1wbGluZyIsIm5lZ2F0aXZlU2l6ZSIsInBvc2l0aXZlU2FtcGxlcyIsImNhbmRpZGF0ZVByb2JzIiwicmVwbGFjYWJsZSIsIlIiLCJSYW5kb20iLCJhbnkiLCJ2IiwidHlwZSIsIk51bWJlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxldGlvblByb2JzIiwic2VsZWN0aW9uUHJvYnMiLCJwaWR4IiwiSW5maW5pdHkiLCJjbG9uZSIsInRha2VuSWR4cyIsIkdlbk5ld0NhbmRpZGF0ZUlkeCIsImludCIsImxlbmd0aCIsIlNlbGVjdElmSGlnaFByb2IiLCJwcm9iIiwicmFuZCIsImZsb2F0IiwiaWR4Iiwic2VsZWN0ZWQiLCJzdWJTYW1wbGluZyIsInNhbXBsaW5nU2l6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QUFrQixFQUE1Qjs7QUFDQSxVQUFHLENBQUNmLFVBQUQsSUFBZWMsU0FBUyxDQUFDUSxHQUFELENBQVQsS0FBaUIsSUFBbkMsRUFBd0M7QUFDcEM7QUFDSDs7QUFDRGhELGFBQU8sR0FBRyxDQUFDLEdBQUdBLE9BQUosRUFBYXFELFVBQVUsQ0FBQ0wsR0FBRCxDQUF2QixDQUFWOztBQUNBLFVBQUcsQ0FBQ3RCLFVBQUosRUFBZTtBQUNYYyxpQkFBUyxDQUFDUSxHQUFELENBQVQsR0FBZSxJQUFmLENBRFcsQ0FDUztBQUN2QjtBQUNKOztBQUNELFdBQU9oRCxPQUFQO0FBQ0g7O0FBM0IyRSxDQUFoRjs7QUE2QmVrQixnRkFBZixFOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoiQGNhdXNhbE5ldC9zYW1wbGluZy5ub2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcInJhbmRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCIsIFwicmFuZG9tXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvc2FtcGxpbmdcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpLCByZXF1aXJlKFwicmFuZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3NhbXBsaW5nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC5jb3JlXCJdLCByb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgcm9vdFtcInJhbmRvbVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW5kb21fXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBEaXN0cmlidXRpb259IGZyb20gXCIuL0Rpc3RyaWJ1dGlvblwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmlub21pYWwgZXh0ZW5kcyBEaXN0cmlidXRpb257XG4gICAgY29uc3RydWN0b3Ioey4uLmt3YXJnc30pe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBsZXQgeyBuLCBwIH0gPSBrd2FyZ3M7XG4gICAgICAgIHRoaXMubiA9IG47XG4gICAgICAgIHRoaXMucCA9IHA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIGs6IHNhbXBsaW5nIHZhbHVlXG4gICAgICogJFxcbG9ne1AoazsgbiwgcCl9IFxccHJvcHRvIGsgXFxsb2d7cH0gKyAobi1rKVxcbG9neygxLXApfSRcbiAgICAgKiBAcGFyYW0geyp9IHhcbiAgICAgKiBAbWVtYmVyb2YgQmlub21pYWxcbiAgICAgKi9cbiAgICBsb2dQKGspe1xuICAgICAgICBjb25zdCBuID0gdGhpcy5uLCBwID0gdGhpcy5wO1xuICAgICAgICBjb25zdCBvbmUgPSB0aGlzLlQudGVuc29yKDEpO1xuICAgICAgICByZXR1cm4gdGhpcy5ULnN1bSggay5tdWwocC5sb2coKSkuYWRkKCBuLnN1YihrKS5tdWwob25lLnN1YihwKS5sb2coKSkgKSApO1xuICAgIH1cbiAgICBzYW1wbGluZyhzaGFwZSl7XG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLm4uZGF0YVN5bmMoKVswXTtcbiAgICAgICAgY29uc3QgcCA9IHRoaXMucC5kYXRhU3luYygpWzBdO1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5nZXRTaXplKHNoYXBlKTtcbiAgICAgICAgY29uc3QgR2VuZXJhdG9yID0gKCk9PntcbiAgICAgICAgICAgIGxldCBzYW1wbGUgPSAwO1xuICAgICAgICAgICAgZm9yKGxldCBjb3VudGVyID0gMDsgY291bnRlcisrIDwgbjsgY291bnRlcisrKXtcbiAgICAgICAgICAgICAgICBzYW1wbGUgKz0gKE1hdGgucmFuZG9tKCkgPCBwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzYW1wbGU7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBzYW1wbGVzID0gW107XG4gICAgICAgIGZvcihsZXQgY291bnRlcj0wO2NvdW50ZXI8c2l6ZTsgY291bnRlcisrKXtcbiAgICAgICAgICAgIHNhbXBsZXMucHVzaChHZW5lcmF0b3IoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuVC50ZW5zb3Ioc2FtcGxlcykucmVzaGFwZShzaGFwZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFRlbnNvciBhcyBCYXNlVGVuc29yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCByYW5kb20gZnJvbSAncmFuZG9tJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3RyaWJ1dGlvbiBleHRlbmRzIEJhc2VUZW5zb3Ige1xuICAgIGNvbnN0cnVjdG9yKHsuLi5rd2FyZ3N9KXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5yYW5kb20gPSByYW5kb207XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvZyBsaWtlbGlob29kXG4gICAgICogQHBhcmFtIHsqfSB4IFxuICAgICAqL1xuICAgIGxvZ1AoeCl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnRhdGlvbiBpcyByZXF1aXJlZCcpO1xuICAgIH1cbiAgICBnZXRTaXplKHNoYXBlKXtcbiAgICAgICAgcmV0dXJuIHNoYXBlLnJlZHVjZSgoc2l6ZSwgc2gpPT5zaXplKnNoLDEpO1xuICAgIH1cbiAgICBzYW1wbGluZyhzaXplKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudGF0aW9uIGlzIHJlcXVpcmVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7ZGVmYXVsdCBhcyBEaXN0cmlidXRpb259IGZyb20gXCIuL0Rpc3RyaWJ1dGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWwgZXh0ZW5kcyBEaXN0cmlidXRpb257XG4gICAgaW5pdCh7Li4ua3dhcmdzfSl7XG4gICAgICAgIGxldCB7IG11IH0gPSBrd2FyZ3M7XG4gICAgICAgIHRoaXMubXUgPSBtdTtcbiAgICAgICAgdGhpcy5zdGQgPSBzdGQ7XG4gICAgfVxuICAgIGxvZ1AoeCl7XG4gICAgICAgIFxuICAgIH1cbiAgICBzYW1wbGluZyhzaGFwZSl7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmdldFNpemUoc2hhcGUpO1xuICAgICAgICBsZXQgc2FtcGxlcyA9IHRoaXMucmFuZG9tLmJpbm9taWFsKHNpemUsIHRoaXMucCk7XG4gICAgICAgIHJldHVybiB0aGlzLlQudGVuc29yKHNhbXBsZXMpLnJlc2hhcGUoc2hhcGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJpbm9taWFsIH0gZnJvbSAnLi9CaW5vbWlhbCc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIE5vcm1hbCB9IGZyb20gJy4vTm9ybWFsJztcbmV4cG9ydCBjb25zdCBEaXN0cmlidXRpb25zID0geyBCaW5vbWlhbCwgTm9ybWFsIH07IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHJhbmRvbSBmcm9tICdyYW5kb20nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBTdWJTYW1wbGluZ01peGlucyB9IGZyb20gJy4vc3ViU2FtcGxpbmcubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgTmVnU2FtcGxpbmdNaXhpbnMgfSBmcm9tICcuL25lZ1NhbXBsaW5nLm1peGlucyc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBjb21tb24gdXNlZCBzYW1wbGluZyBtZXRob2RzIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCB2aWEgKipjYXVzYWxOZXRTYW1wbGVycyoqLlxuICogbWl4d2l0aDpcbiAqIFsgU3ViU2FtcGxpbmdNaXhpbnMsIE5lZ1NhbXBsaW5nTWl4aW5zIF1cbiAqIEBjbGFzcyBDYXVzYWxOZXRTYW1wbGVyc1xuICogQGV4dGVuZHMgRnVuY3RvclxuICogQGV4YW1wbGVcbiAqIFtFWEFNUExFIC4uL2V4YW1wbGVzL2NhdXNhbE5ldFNhbXBsZXJzLmJhYmVsLmpzXVxuICovXG5jbGFzcyBDYXVzYWxOZXRTYW1wbGVycyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoIEJhc2VGdW5jdG9yLCBcbiAgICBbIFN1YlNhbXBsaW5nTWl4aW5zLCBOZWdTYW1wbGluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3RvcihyYW5kb20pe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENhdXNhbE5ldFNhbXBsZXJzKHJhbmRvbSk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRTYW1wbGVycyB9IGZyb20gJy4vY2F1c2FsTmV0U2FtcGxlcnMnOyIsImNvbnN0IE5lZ2F0aXZlU2FtcGxpbmdNaXhpbnMgPSAoQmFzZVNhbXBsaW5nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlU2FtcGxpbmdDbGFzc3tcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIG5lZ2F0aXZlIHNhbXBsaW5nIGdpdmVuIHRoZSBzZWxlY3QgcHJvYiBvZiBpZHMgYW5kIGxpc3Qgb2YgcG9zaXRpdmUgc2FtcGxlc1xuICAgICAqIEBwYXJhbSB7IE51bWJlciB9IG5lZ2F0aXZlU2l6ZSAtIHNpemUgdG8gc2FtcGxlXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBwb3NpdGl2ZVNhbXBsZXMgLSBBcnJheSBvZiBwb3NzaXRpdmUgSWRzXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSBjYW5kaWRhdGVQcm9icyAtIEFycmF5IG9mIHByb2JhYmxpdHkgb2YgY2FuZGlkYXRlIElkc1xuICAgICAqIEBwYXJhbSB7IEJvb2xlYW4gfSBbcmVwbGFjYWJsZT10cnVlXSAtIGlmIHRydWUsIG5vIGR1cGxpY2F0ZWQgc2FtcGxpbmcgSWQgcmV0dXJuZWRcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2Ygc2FtcGxlZCBJZHNcbiAgICAgKi9cbiAgICBuZWdTYW1wbGluZyhuZWdhdGl2ZVNpemUsIHBvc2l0aXZlU2FtcGxlcywgY2FuZGlkYXRlUHJvYnMsIHJlcGxhY2FibGU9dHJ1ZSl7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLlIsIFJhbmRvbSA9IHRoaXMuUmFuZG9tO1xuICAgICAgICBpZihSLmFueSgodik9PiAhUi50eXBlKE51bWJlcix2KSB8fCB2ID4gMSB8fCB2IDwgMCwgY2FuZGlkYXRlUHJvYnMpKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke0pTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZVByb2JzKX0gaXMgbm90IGFsbG93YCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbGV0aW9uUHJvYnMgPSBSLnJlZHVjZSgoc2VsZWN0aW9uUHJvYnMsIHBpZHgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblByb2JzW3BpZHhdID0gSW5maW5pdHk7Ly9wb3NpdGl2ZSBjYW5kaWRhdGUgbmV2ZXIgYmUgY2hvb3NlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0aW9uUHJvYnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgUi5jbG9uZShjYW5kaWRhdGVQcm9icyksIHBvc2l0aXZlU2FtcGxlcyk7XG4gICAgICAgIGxldCBzYW1wbGVzID0gW10sIHRha2VuSWR4cyA9IFIuY2xvbmUoc2VsZXRpb25Qcm9icyk7XG4gICAgICAgIGNvbnN0IEdlbk5ld0NhbmRpZGF0ZUlkeCA9ICgpPT5SYW5kb20uaW50KDAsIHNlbGV0aW9uUHJvYnMubGVuZ3RoLTEpO1xuICAgICAgICBjb25zdCBTZWxlY3RJZkhpZ2hQcm9iID0gKHByb2IpPT57XG4gICAgICAgICAgICBsZXQgcmFuZCA9IFJhbmRvbS5mbG9hdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJhbmQ+cHJvYjtcbiAgICAgICAgfTtcbiAgICAgICAgd2hpbGUoc2FtcGxlcy5sZW5ndGggPCBuZWdhdGl2ZVNpemUpe1xuICAgICAgICAgICAgbGV0IGlkeCA9IEdlbk5ld0NhbmRpZGF0ZUlkeCgpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gU2VsZWN0SWZIaWdoUHJvYihzZWxldGlvblByb2JzW2lkeF0pO1xuICAgICAgICAgICAgaWYoIXNlbGVjdGVkKXtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCFyZXBsYWNhYmxlICYmIHRha2VuSWR4c1tpZHhdPT09bnVsbCl7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYW1wbGVzID0gWy4uLnNhbXBsZXMsIGlkeF07XG4gICAgICAgICAgICBpZighcmVwbGFjYWJsZSl7XG4gICAgICAgICAgICAgICAgdGFrZW5JZHhzW2lkeF09bnVsbDsvL25vbiByZXBsYWNlYWJsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuICAgICAgICByZXR1cm4gc2FtcGxlcztcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgTmVnYXRpdmVTYW1wbGluZ01peGluczsiLCJjb25zdCBTdWJTYW1wbGluZ01peGlucyA9IChCYXNlU2FtcGxpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlU2FtcGxpbmdDbGFzc3tcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIHVuaWZvcm0gc2FtcGxlIGEgc3ViIHNldCBvZiBJZHMgZ2l2ZW4gdGhlIGNhbmRpZGF0ZSBsaXN0XG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gc2FtcGxpbmdTaXplXG4gICAgICogQHBhcmFtIHsgQXJyYXl8TnVtYmVyIH0gY2FuZGlkYXRlTGlzdCAtIGxpc3Qgb2YgY2FuZGlkYXRlcyBvciBzaXplIG9mIGNhbmRpZGF0ZSBsaXN0XG4gICAgICogQHBhcmFtIHsgQm9vbGVhbiB9IFtyZXBsYWNhYmxlPXRydWVdIC0gaWYgdHJ1ZSwgbm8gZHVwbGljYXRlZCBzYW1wbGluZyBJZCByZXR1cm5lZFxuICAgICAqIEByZXR1cm5zIHsgQXJyYXkgfSBhcnJheSBvZiBzYW1wbGVkIElkc1xuICAgICAqL1xuICAgIHN1YlNhbXBsaW5nKHNhbXBsaW5nU2l6ZSwgY2FuZGlkYXRlTGlzdCwgcmVwbGFjYWJsZT10cnVlKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgUmFuZG9tID0gdGhpcy5SYW5kb207XG4gICAgICAgIGxldCBjYW5kaWRhdGVzID0gQXJyYXkuaXNBcnJheShjYW5kaWRhdGVMaXN0KT9SLmNsb25lKGNhbmRpZGF0ZUxpc3QpOlIucmFuZ2UoMCwgY2FuZGlkYXRlTGlzdCk7XG4gICAgICAgIGlmKGNhbmRpZGF0ZXMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdjYW5kaWRhdGUgbGVuZ3RoIHNob3VsZCBiZSBwb3NpdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzYW1wbGVzID0gW10sIHRha2VuSWR4cyA9IFIuY2xvbmUoY2FuZGlkYXRlcyk7XG4gICAgICAgIGNvbnN0IEdlbk5ld0NhbmRpZGF0ZUlkeCA9ICgpPT5SYW5kb20uaW50KDAsIGNhbmRpZGF0ZXMubGVuZ3RoLTEpO1xuICAgICAgICB3aGlsZShzYW1wbGVzLmxlbmd0aCA8IHNhbXBsaW5nU2l6ZSl7XG4gICAgICAgICAgICBsZXQgaWR4ID0gR2VuTmV3Q2FuZGlkYXRlSWR4KCk7XG4gICAgICAgICAgICBpZighcmVwbGFjYWJsZSAmJiB0YWtlbklkeHNbaWR4XT09PW51bGwpe1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2FtcGxlcyA9IFsuLi5zYW1wbGVzLCBjYW5kaWRhdGVzW2lkeF1dO1xuICAgICAgICAgICAgaWYoIXJlcGxhY2FibGUpe1xuICAgICAgICAgICAgICAgIHRha2VuSWR4c1tpZHhdPW51bGw7Ly9ub24gcmVwbGFjZWFibGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICAgICAgcmV0dXJuIHNhbXBsZXM7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFN1YlNhbXBsaW5nTWl4aW5zOyIsImV4cG9ydCB7IGNhdXNhbE5ldFNhbXBsZXJzIH0gZnJvbSAnLi9TYW1wbGVycy9pbmRleCc7XG5leHBvcnQgeyBEaXN0cmlidXRpb25zIH0gZnJvbSAnLi9EaXN0cmlidXRpb25zL2luZGV4JzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFuZG9tX187Il0sInNvdXJjZVJvb3QiOiIifQ==