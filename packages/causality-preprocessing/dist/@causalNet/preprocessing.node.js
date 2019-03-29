(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.log"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.log", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/preprocessing"] = factory(require("causal-net.core"), require("causal-net.log"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/preprocessing"] = factory(root["causal-net.core"], root["causal-net.log"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_log__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "../../node_modules/events/events.js":
/*!*******************************************************************!*\
  !*** /Users/huynh/github/causality/node_modules/events/events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./src/Image/colorTransforming.mixins.js":
/*!***********************************************!*\
  !*** ./src/Image/colorTransforming.mixins.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ColorTransformingMixins = PreprocessingClass => class extends PreprocessingClass {
  colorTransform(tranformFn, sampleBuffer, channelSize) {
    const R = this.R;
    return R.flatten(R.map(tranformFn, R.splitEvery(channelSize, sampleBuffer)));
  }
  /**
   * Transform color image to black on white image. This function also reduce chanel to 1.
   * @param { Array|Buffer } sampleBuffer
   * @param { Number } channelSize
   * @return { Array } image data after transform
   */


  blackWhiteTransform(sampleBuffer, channelSize) {
    const BlackWhiteFn = pixel => {
      let pixelValue = (pixel[0] + pixel[1] + pixel[2]) / 3;
      return ~~pixelValue;
    };

    return this.colorTransform(BlackWhiteFn, sampleBuffer, channelSize);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ColorTransformingMixins);

/***/ }),

/***/ "./src/Image/imageSplitting.mixins.js":
/*!********************************************!*\
  !*** ./src/Image/imageSplitting.mixins.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ImageSplittingMixins = PreprocessingClass => class extends PreprocessingClass {
  /**
   * Split image into sub images based on split size
   * @param { Array|Buffer } sampleBuffer - original image
   * @param { Number } splitSize - positive number
   * @returns { Array } - array of sub image
   */
  imageSplit(sampleBuffer, splitSize) {
    return this.R.splitEvery(splitSize, sampleBuffer);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ImageSplittingMixins);

/***/ }),

/***/ "./src/Image/index.js":
/*!****************************!*\
  !*** ./src/Image/index.js ***!
  \****************************/
/*! exports provided: ColorTransformingMixins, ImageSplittingMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colorTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorTransforming.mixins */ "./src/Image/colorTransforming.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorTransformingMixins", function() { return _colorTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _imageSplitting_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageSplitting.mixins */ "./src/Image/imageSplitting.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageSplittingMixins", function() { return _imageSplitting_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/NLP/index.js":
/*!**************************!*\
  !*** ./src/NLP/index.js ***!
  \**************************/
/*! exports provided: TokenTransformingMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tokenTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokenTransforming.mixins */ "./src/NLP/tokenTransforming.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenTransformingMixins", function() { return _tokenTransforming_mixins__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/NLP/tokenTransforming.mixins.js":
/*!*********************************************!*\
  !*** ./src/NLP/tokenTransforming.mixins.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const TokenTransformingMixins = PreprocessingClass => class extends PreprocessingClass {
  /**
   * tokenized sentence
   * @param { String } sentence - array of string sentence
   * @returns { Array } array of tokenized sentences
   */
  tokenize(sentence) {
    const R = this.R,
          Tokenizer = this.tokenizer;
    return Tokenizer.tokenize(sentence);
  }
  /**
   * Remove bad words from tokens
   * @param { Array } tokens - array of string token
   * @param { Array } badWordList - Array of bad words
   * @returns { Array } tokens without bad words
   */


  badWordsFilter(tokens, badWordList) {
    const R = this.R;
    return R.filter(token => R.not(R.find(R.equals(token))(badWordList)), tokens);
  }
  /**
   * Count number of apperance of each token in the token list
   * @param { Array } tokens - array of string tokens
   * @param { Object } [freqCount={}] - objec or previous wordFreqCount, empty object if not provided
   * @returns { Object } - json object with token as key and counting number as corresponding value
   */


  wordFreqCount(tokens, freqCount = {}) {
    const R = this.R;

    const UpdateFreq = (freqCount, token) => {
      if (freqCount[token] === undefined) {
        freqCount[token] = 1;
      } else {
        freqCount[token] += 1;
      }

      return freqCount;
    };

    return R.reduce(UpdateFreq, freqCount, tokens);
  }
  /**
   * Remove duplicated tokens
   * @param { Array } tokens - array of string token
   * @returns
   */


  wordDuplicateRemove(tokens) {
    const R = this.R;
    return R.uniq(tokens);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (TokenTransformingMixins);

/***/ }),

/***/ "./src/Tabular/index.js":
/*!******************************!*\
  !*** ./src/Tabular/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/causalNetPreprocessingStream.js":
/*!*********************************************!*\
  !*** ./src/causalNetPreprocessingStream.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.storage */ "causal-net.storage");
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! causal-net.log */ "causal-net.log");
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(causal_net_log__WEBPACK_IMPORTED_MODULE_4__);






class CausalNetPreprocessingStream extends causal_net_utils__WEBPACK_IMPORTED_MODULE_2__["platform"].mixWith(events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"], [causal_net_storage__WEBPACK_IMPORTED_MODULE_3__["StorageMixins"]]) {
  constructor(preprocessingStorage, functor, logger) {
    super();
    this.Storage = preprocessingStorage;
    this.F = functor;
    this.logger = logger;
    this.preprocessingData = {
      samples: [],
      labels: [],
      finished: false,
      trainSet: [],
      testSet: []
    };
  }

  get PreprocessingData() {
    return this.preprocessingData;
  }

  get TrainSet() {
    return this.preprocessingData.trainSet;
  }

  get TestSet() {
    return this.preprocessingData.testSet;
  }

  set SampleTransformer(sampleFn) {
    this.sampleFn = sampleFn;
  }

  set LabelTransformer(labelFn) {
    this.labelFn = labelFn;
  }

  get SampleTransformer() {
    if (!this.sampleFn) {
      throw Error('sampleFn is not set');
    }

    return this.sampleFn;
  }

  get LabelTransformer() {
    if (!this.labelFn) {
      throw Error('labelFn is not set');
    }

    return this.labelFn;
  }

  get DataHandler() {
    const Enumerate = this.F.enumerate; //console.log(Enumerate([0,2,4]));//TODO: fix this failure

    const SampleTransformer = this.SampleTransformer;
    const LabelTransformer = this.LabelTransformer;
    const Storage = this.Storage;
    return data => {
      return new Promise(async (resolve, reject) => {
        let chunkName = data.ChunkName;

        if (!chunkName) {
          reject(`chunkName is not defined`);
        }

        if (data.Sample) {
          let samples = SampleTransformer(data.Sample);
          let identity = '';

          for (let [idx, sample] of this.F.enumerate(samples)) {
            identity = chunkName + '/' + idx;
            await Storage.setItem('preprocessing/sample/' + identity, JSON.stringify(sample));
            this.preprocessingData.samples.push(identity);
          }
        }

        if (data.Label) {
          let labels = LabelTransformer(data.Label);
          let identity = '';

          for (let [idx, label] of this.F.enumerate(labels)) {
            identity = chunkName + '/' + idx;
            await Storage.setItem('preprocessing/label/' + identity, JSON.stringify(label));
            this.preprocessingData.labels.push(identity);
          }
        }

        resolve(true);
      });
    };
  }

  splitDataset(trainSize = 0.9) {
    const R = this.F.CoreFunctor; //TODO: enhance this for handle missing data/label case

    let {
      samples,
      labels
    } = this.preprocessingData;
    let data = this.F.zip(samples, labels);

    if (trainSize < 1) {
      trainSize = parseInt(data.length * 0.9);
    }

    const [trainSet, testSet] = R.splitAt(trainSize, data);
    this.preprocessingData.trainSet = trainSet;
    this.preprocessingData.testSet = testSet;
    return [trainSet, testSet];
  }

  makeBatchGenerator(batchData) {
    const Storage = this.Storage;
    let nextIndex = 0;
    const batchGenerator = {
      next: async () => {
        let samples = [],
            labels = [];

        for (let [samplePath, labelPath] of batchData[nextIndex]) {
          samplePath = 'preprocessing/sample/' + samplePath;
          labelPath = 'preprocessing/label/' + labelPath;
          let sampleItem = await Storage.getItem(samplePath);
          let labelItem = await Storage.getItem(labelPath);
          samples = [...samples, JSON.parse(sampleItem[samplePath])];
          labels = [...labels, JSON.parse(labelItem[labelPath])];
        }

        nextIndex += 1;
        return {
          samples,
          labels
        };
      },

      *[Symbol.iterator]() {
        while (nextIndex < batchData.length) {
          yield this.next();
        }
      }

    };
    return batchGenerator;
  }

  get TrainDataGenerator() {
    const TrainSet = this.TrainSet;
    const R = this.F.CoreFunctor;
    return batchSize => {
      //TODO: perform permutate
      let batchData = R.splitEvery(batchSize, TrainSet);
      return this.makeBatchGenerator(batchData);
    };
  }

  get TestDataGenerator() {
    const TestSet = this.TestSet;
    const R = this.F.CoreFunctor;
    return batchSize => {
      //TODO: perform permutate
      let batchData = R.splitEvery(batchSize, TestSet);
      return this.makeBatchGenerator(batchData);
    };
  }

}

var functor = new causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Functor"]();
/* harmony default export */ __webpack_exports__["default"] = (new CausalNetPreprocessingStream(causal_net_storage__WEBPACK_IMPORTED_MODULE_3__["indexDBStorage"], functor, causal_net_log__WEBPACK_IMPORTED_MODULE_4__["termLogger"]));

/***/ }),

/***/ "./src/imagePreprocessing.js":
/*!***********************************!*\
  !*** ./src/imagePreprocessing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image/index */ "./src/Image/index.js");



/**
 * This ImagePreprocessing provide methods for preprocessing image data
 * { MixWith: [
 *         ColorTransformingMixins, ImageSplittingMixins
 *     ] }
 * @class ImagePreprocessing
 * @extends BaseFunctor
 * @example
 * [EXAMPLE ../examples/imagePreprocessing.babel.node.js]
 */

class ImagePreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_Image_index__WEBPACK_IMPORTED_MODULE_2__["ColorTransformingMixins"], _Image_index__WEBPACK_IMPORTED_MODULE_2__["ImageSplittingMixins"]]) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ImagePreprocessing());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetPreprocessingStream, PreprocessingMixins, imagePreprocessing, nlpPreprocessing, tabularPreprocessing, tokenizerEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetPreprocessingStream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetPreprocessingStream */ "./src/causalNetPreprocessingStream.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetPreprocessingStream", function() { return _causalNetPreprocessingStream__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _preprocessing_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preprocessing.mixins */ "./src/preprocessing.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreprocessingMixins", function() { return _preprocessing_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _imagePreprocessing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imagePreprocessing */ "./src/imagePreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imagePreprocessing", function() { return _imagePreprocessing__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _nlpPreprocessing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nlpPreprocessing */ "./src/nlpPreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlpPreprocessing", function() { return _nlpPreprocessing__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _tabularPreprocessing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabularPreprocessing */ "./src/tabularPreprocessing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tabularPreprocessing", function() { return _tabularPreprocessing__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _tokenizer_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tokenizer.en */ "./src/tokenizer.en.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenizerEN", function() { return _tokenizer_en__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./src/nlpPreprocessing.js":
/*!*********************************!*\
  !*** ./src/nlpPreprocessing.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NLP_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NLP/index */ "./src/NLP/index.js");



/**
 * This NLPPreprocessing class provide methods for preprocessing text and output valid tokens.
 * { MixWith:
 *     [ TokenTransformingMixins ]) }
 * @class NLPPreprocessing
 * @extends BaseFunctor
 * @example
 * [!EXAMPLE ../examples/nlpPreprocessing.babel.node.js]
 */

class NLPPreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], [_NLP_index__WEBPACK_IMPORTED_MODULE_2__["TokenTransformingMixins"]]) {
  constructor() {
    super();
  }
  /**
   * This method is used in case tokenizer requires data setup.
   * @param { Url|FilePath } configLink
   * @memberof NLPPreprocessing
   */


  connect(configLink) {
    this.tokenizer.connect(configLink);
  }
  /**
   * Get tokenizer
   *
   * @memberof NLPPreprocessing
   */


  get Tokenizer() {
    if (!this.tokenizer) {
      throw Error('tokenizer is not set');
    }

    return this.tokenizer;
  }
  /**
   * Set tokenizer
   * @param { Object } tokenizer - tokenizer object
   * @memberof NLPPreprocessing
   */


  set Tokenizer(tokenizer) {
    this.tokenizer = tokenizer;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new NLPPreprocessing());

/***/ }),

/***/ "./src/preprocessing.mixins.js":
/*!*************************************!*\
  !*** ./src/preprocessing.mixins.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const PreprocessingMixins = BasePipelineClass => class extends BasePipelineClass {
  set Preprocessing(preprocessing) {
    this.preprocessing = preprocessing;
  }

  get Preprocessing() {
    if (!this.preprocessing) {
      throw Error('preprocessing is not set');
    }

    return this.preprocessing;
  }

  setByConfig(pipelineConfig) {
    const {
      SampleTransformer,
      LabelTransformer
    } = pipelineConfig.Dataset.Preprocessing;
    this.Preprocessing.SampleTransformer = SampleTransformer;
    this.Preprocessing.LabelTransformer = LabelTransformer;
    pipelineConfig.Dataset.TrainDataGenerator = this.preprocessing.TrainDataGenerator;
    pipelineConfig.Dataset.TestDataGenerator = this.preprocessing.TestDataGenerator;
    return pipelineConfig;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (PreprocessingMixins);

/***/ }),

/***/ "./src/tabularPreprocessing.js":
/*!*************************************!*\
  !*** ./src/tabularPreprocessing.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tabular_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabular/index */ "./src/Tabular/index.js");
/* harmony import */ var _Tabular_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Tabular_index__WEBPACK_IMPORTED_MODULE_2__);




class TabularPreprocessing extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Functor"], []) {
  constructor() {
    super();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TabularPreprocessing());

/***/ }),

/***/ "./src/tokenizer.en.js":
/*!*****************************!*\
  !*** ./src/tokenizer.en.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This TokenizerEN is a simple implementation for English tokenizer
 * @todo enhance it with entities and built-in vocab
 * @experiment
 * @class TokenizerEN
 */
class TokenizerEN {
  constructor() {}

  connect(configureLink) {
    console.log('This simple English tokenizer not requires advance configure');
  }

  tokenize(text) {
    const Re = /[\s."'/\|;:()\[\]\@\#\$\&]/g;
    return text.split(Re).filter(token => token !== '');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TokenizerEN());

/***/ }),

/***/ "causal-net.core":
/*!**********************************!*\
  !*** external "causal-net.core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_core__;

/***/ }),

/***/ "causal-net.log":
/*!*********************************!*\
  !*** external "causal-net.log" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_log__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvL1VzZXJzL2h1eW5oL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL0ltYWdlL2NvbG9yVHJhbnNmb3JtaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvSW1hZ2UvaW1hZ2VTcGxpdHRpbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9JbWFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvTkxQL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9OTFAvdG9rZW5UcmFuc2Zvcm1pbmcubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9jYXVzYWxOZXRQcmVwcm9jZXNzaW5nU3RyZWFtLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9pbWFnZVByZXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9ubHBQcmVwcm9jZXNzaW5nLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy8uL3NyYy9wcmVwcm9jZXNzaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvLi9zcmMvdGFidWxhclByZXByb2Nlc3NpbmcuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nLy4vc3JjL3Rva2VuaXplci5lbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmcvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmxvZ1wiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvcHJlcHJvY2Vzc2luZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJDb2xvclRyYW5zZm9ybWluZ01peGlucyIsIlByZXByb2Nlc3NpbmdDbGFzcyIsImNvbG9yVHJhbnNmb3JtIiwidHJhbmZvcm1GbiIsInNhbXBsZUJ1ZmZlciIsImNoYW5uZWxTaXplIiwiUiIsImZsYXR0ZW4iLCJtYXAiLCJzcGxpdEV2ZXJ5IiwiYmxhY2tXaGl0ZVRyYW5zZm9ybSIsIkJsYWNrV2hpdGVGbiIsInBpeGVsIiwicGl4ZWxWYWx1ZSIsIkltYWdlU3BsaXR0aW5nTWl4aW5zIiwiaW1hZ2VTcGxpdCIsInNwbGl0U2l6ZSIsIlRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIiwidG9rZW5pemUiLCJzZW50ZW5jZSIsIlRva2VuaXplciIsInRva2VuaXplciIsImJhZFdvcmRzRmlsdGVyIiwidG9rZW5zIiwiYmFkV29yZExpc3QiLCJmaWx0ZXIiLCJ0b2tlbiIsIm5vdCIsImZpbmQiLCJlcXVhbHMiLCJ3b3JkRnJlcUNvdW50IiwiZnJlcUNvdW50IiwiVXBkYXRlRnJlcSIsInVuZGVmaW5lZCIsInJlZHVjZSIsIndvcmREdXBsaWNhdGVSZW1vdmUiLCJ1bmlxIiwiQ2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSIsInBsYXRmb3JtIiwibWl4V2l0aCIsIkV2ZW50RW1pdHRlciIsIlN0b3JhZ2VNaXhpbnMiLCJjb25zdHJ1Y3RvciIsInByZXByb2Nlc3NpbmdTdG9yYWdlIiwiZnVuY3RvciIsImxvZ2dlciIsIlN0b3JhZ2UiLCJGIiwicHJlcHJvY2Vzc2luZ0RhdGEiLCJzYW1wbGVzIiwibGFiZWxzIiwiZmluaXNoZWQiLCJ0cmFpblNldCIsInRlc3RTZXQiLCJQcmVwcm9jZXNzaW5nRGF0YSIsIlRyYWluU2V0IiwiVGVzdFNldCIsIlNhbXBsZVRyYW5zZm9ybWVyIiwic2FtcGxlRm4iLCJMYWJlbFRyYW5zZm9ybWVyIiwibGFiZWxGbiIsIkVycm9yIiwiRGF0YUhhbmRsZXIiLCJFbnVtZXJhdGUiLCJlbnVtZXJhdGUiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjaHVua05hbWUiLCJDaHVua05hbWUiLCJTYW1wbGUiLCJpZGVudGl0eSIsImlkeCIsInNhbXBsZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsIkxhYmVsIiwibGFiZWwiLCJzcGxpdERhdGFzZXQiLCJ0cmFpblNpemUiLCJDb3JlRnVuY3RvciIsInppcCIsInBhcnNlSW50IiwibGVuZ3RoIiwic3BsaXRBdCIsIm1ha2VCYXRjaEdlbmVyYXRvciIsImJhdGNoRGF0YSIsIm5leHRJbmRleCIsImJhdGNoR2VuZXJhdG9yIiwibmV4dCIsInNhbXBsZVBhdGgiLCJsYWJlbFBhdGgiLCJzYW1wbGVJdGVtIiwiZ2V0SXRlbSIsImxhYmVsSXRlbSIsInBhcnNlIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJUcmFpbkRhdGFHZW5lcmF0b3IiLCJiYXRjaFNpemUiLCJUZXN0RGF0YUdlbmVyYXRvciIsIkZ1bmN0b3IiLCJpbmRleERCU3RvcmFnZSIsInRlcm1Mb2dnZXIiLCJJbWFnZVByZXByb2Nlc3NpbmciLCJCYXNlRnVuY3RvciIsIk5MUFByZXByb2Nlc3NpbmciLCJjb25uZWN0IiwiY29uZmlnTGluayIsIlByZXByb2Nlc3NpbmdNaXhpbnMiLCJCYXNlUGlwZWxpbmVDbGFzcyIsIlByZXByb2Nlc3NpbmciLCJwcmVwcm9jZXNzaW5nIiwic2V0QnlDb25maWciLCJwaXBlbGluZUNvbmZpZyIsIkRhdGFzZXQiLCJUYWJ1bGFyUHJlcHJvY2Vzc2luZyIsIlRva2VuaXplckVOIiwiY29uZmlndXJlTGluayIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiUmUiLCJzcGxpdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LGFBQUwsQ0FBbUJaLGlCQUE5RDtBQUNBLFdBQU9jLGNBQVA7QUFDSDs7QUFqQjZFLENBQWxGOztBQW9CZUwsa0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1PLG9CQUFOLFNBQW1DakYseURBQVEsQ0FBQ0MsT0FBVCxDQUFpQnFFLHVEQUFqQixFQUMvQixFQUQrQixDQUFuQyxDQUNPO0FBQ0hsRSxhQUFXLEdBQUU7QUFDVDtBQUNIOztBQUhFOztBQU1RLG1FQUFJNkUsb0JBQUosRUFBZixFOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBOzs7Ozs7QUFNQSxNQUFNQyxXQUFOLENBQWlCO0FBQ2I5RSxhQUFXLEdBQUUsQ0FDWjs7QUFDRG9FLFNBQU8sQ0FBQ1csYUFBRCxFQUFlO0FBQ2xCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSw4REFBWjtBQUNIOztBQUNEekcsVUFBUSxDQUFDMEcsSUFBRCxFQUFNO0FBQ1YsVUFBTUMsRUFBRSxHQUFHLDZCQUFYO0FBQ0EsV0FBT0QsSUFBSSxDQUFDRSxLQUFMLENBQVdELEVBQVgsRUFBZXBHLE1BQWYsQ0FBc0JDLEtBQUssSUFBRUEsS0FBSyxLQUFHLEVBQXJDLENBQVA7QUFDSDs7QUFUWTs7QUFXRixtRUFBSThGLFdBQUosRUFBZixFOzs7Ozs7Ozs7OztBQ2pCQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L3ByZXByb2Nlc3Npbmcubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubG9nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LmxvZ1wiLCBcImNhdXNhbC1uZXQuc3RvcmFnZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9wcmVwcm9jZXNzaW5nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5sb2dcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3ByZXByb2Nlc3NpbmdcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LmxvZ1wiXSwgcm9vdFtcImNhdXNhbC1uZXQuc3RvcmFnZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2xvZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJjb25zdCBDb2xvclRyYW5zZm9ybWluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIFxuICAgIGNvbG9yVHJhbnNmb3JtKHRyYW5mb3JtRm4sIHNhbXBsZUJ1ZmZlciwgY2hhbm5lbFNpemUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5mbGF0dGVuKFIubWFwKHRyYW5mb3JtRm4sIFIuc3BsaXRFdmVyeShjaGFubmVsU2l6ZSwgc2FtcGxlQnVmZmVyKSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gY29sb3IgaW1hZ2UgdG8gYmxhY2sgb24gd2hpdGUgaW1hZ2UuIFRoaXMgZnVuY3Rpb24gYWxzbyByZWR1Y2UgY2hhbmVsIHRvIDEuXG4gICAgICogQHBhcmFtIHsgQXJyYXl8QnVmZmVyIH0gc2FtcGxlQnVmZmVyXG4gICAgICogQHBhcmFtIHsgTnVtYmVyIH0gY2hhbm5lbFNpemVcbiAgICAgKiBAcmV0dXJuIHsgQXJyYXkgfSBpbWFnZSBkYXRhIGFmdGVyIHRyYW5zZm9ybVxuICAgICAqL1xuICAgIGJsYWNrV2hpdGVUcmFuc2Zvcm0oc2FtcGxlQnVmZmVyLCBjaGFubmVsU2l6ZSl7XG4gICAgICAgIGNvbnN0IEJsYWNrV2hpdGVGbiA9IChwaXhlbCk9PntcbiAgICAgICAgICAgIGxldCBwaXhlbFZhbHVlID0gKHBpeGVsWzBdICsgcGl4ZWxbMV0gK3BpeGVsWzJdKS8zO1xuICAgICAgICAgICAgcmV0dXJuIH5+cGl4ZWxWYWx1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JUcmFuc2Zvcm0oQmxhY2tXaGl0ZUZuLCBzYW1wbGVCdWZmZXIsIGNoYW5uZWxTaXplKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclRyYW5zZm9ybWluZ01peGluczsiLCJjb25zdCBJbWFnZVNwbGl0dGluZ01peGlucyA9IChQcmVwcm9jZXNzaW5nQ2xhc3MpID0+IGNsYXNzIGV4dGVuZHMgUHJlcHJvY2Vzc2luZ0NsYXNze1xuICAgIC8qKlxuICAgICAqIFNwbGl0IGltYWdlIGludG8gc3ViIGltYWdlcyBiYXNlZCBvbiBzcGxpdCBzaXplXG4gICAgICogQHBhcmFtIHsgQXJyYXl8QnVmZmVyIH0gc2FtcGxlQnVmZmVyIC0gb3JpZ2luYWwgaW1hZ2VcbiAgICAgKiBAcGFyYW0geyBOdW1iZXIgfSBzcGxpdFNpemUgLSBwb3NpdGl2ZSBudW1iZXJcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gLSBhcnJheSBvZiBzdWIgaW1hZ2VcbiAgICAgKi9cbiAgICBpbWFnZVNwbGl0KHNhbXBsZUJ1ZmZlciwgc3BsaXRTaXplKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuUi5zcGxpdEV2ZXJ5KHNwbGl0U2l6ZSwgc2FtcGxlQnVmZmVyKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNwbGl0dGluZ01peGluczsiLCJleHBvcnQge2RlZmF1bHQgYXMgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMgfSBmcm9tICcuL2NvbG9yVHJhbnNmb3JtaW5nLm1peGlucyc7XG5leHBvcnQge2RlZmF1bHQgYXMgSW1hZ2VTcGxpdHRpbmdNaXhpbnMgfSBmcm9tICcuL2ltYWdlU3BsaXR0aW5nLm1peGlucyc7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi90b2tlblRyYW5zZm9ybWluZy5taXhpbnMnOyIsImNvbnN0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zID0gKFByZXByb2Nlc3NpbmdDbGFzcykgPT4gY2xhc3MgZXh0ZW5kcyBQcmVwcm9jZXNzaW5nQ2xhc3N7XG4gICAgLyoqXG4gICAgICogdG9rZW5pemVkIHNlbnRlbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gc2VudGVuY2UgLSBhcnJheSBvZiBzdHJpbmcgc2VudGVuY2VcbiAgICAgKiBAcmV0dXJucyB7IEFycmF5IH0gYXJyYXkgb2YgdG9rZW5pemVkIHNlbnRlbmNlc1xuICAgICAqL1xuICAgIHRva2VuaXplKHNlbnRlbmNlKXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgVG9rZW5pemVyID0gdGhpcy50b2tlbml6ZXI7XG4gICAgICAgIHJldHVybiBUb2tlbml6ZXIudG9rZW5pemUoc2VudGVuY2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYmFkIHdvcmRzIGZyb20gdG9rZW5zXG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5cbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IGJhZFdvcmRMaXN0IC0gQXJyYXkgb2YgYmFkIHdvcmRzXG4gICAgICogQHJldHVybnMgeyBBcnJheSB9IHRva2VucyB3aXRob3V0IGJhZCB3b3Jkc1xuICAgICAqL1xuICAgIGJhZFdvcmRzRmlsdGVyKHRva2VucywgYmFkV29yZExpc3Qpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5maWx0ZXIoKHRva2VuKT0+Ui5ub3QoUi5maW5kKFIuZXF1YWxzKHRva2VuKSkoYmFkV29yZExpc3QpKSwgdG9rZW5zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ291bnQgbnVtYmVyIG9mIGFwcGVyYW5jZSBvZiBlYWNoIHRva2VuIGluIHRoZSB0b2tlbiBsaXN0XG4gICAgICogQHBhcmFtIHsgQXJyYXkgfSB0b2tlbnMgLSBhcnJheSBvZiBzdHJpbmcgdG9rZW5zXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gW2ZyZXFDb3VudD17fV0gLSBvYmplYyBvciBwcmV2aW91cyB3b3JkRnJlcUNvdW50LCBlbXB0eSBvYmplY3QgaWYgbm90IHByb3ZpZGVkXG4gICAgICogQHJldHVybnMgeyBPYmplY3QgfSAtIGpzb24gb2JqZWN0IHdpdGggdG9rZW4gYXMga2V5IGFuZCBjb3VudGluZyBudW1iZXIgYXMgY29ycmVzcG9uZGluZyB2YWx1ZVxuICAgICAqL1xuICAgIHdvcmRGcmVxQ291bnQodG9rZW5zLCBmcmVxQ291bnQ9e30pe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBjb25zdCBVcGRhdGVGcmVxID0gKGZyZXFDb3VudCwgdG9rZW4pPT57XG4gICAgICAgICAgICBpZihmcmVxQ291bnRbdG9rZW5dID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGZyZXFDb3VudFt0b2tlbl0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBmcmVxQ291bnRbdG9rZW5dICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZnJlcUNvdW50O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoVXBkYXRlRnJlcSwgZnJlcUNvdW50LCB0b2tlbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZHVwbGljYXRlZCB0b2tlbnNcbiAgICAgKiBAcGFyYW0geyBBcnJheSB9IHRva2VucyAtIGFycmF5IG9mIHN0cmluZyB0b2tlblxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgd29yZER1cGxpY2F0ZVJlbW92ZSh0b2tlbnMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi51bmlxKHRva2Vucyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zOyIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgeyBGdW5jdG9yIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5pbXBvcnQgeyBpbmRleERCU3RvcmFnZSwgU3RvcmFnZU1peGlucyB9IGZyb20gJ2NhdXNhbC1uZXQuc3RvcmFnZSc7XG5pbXBvcnQgeyB0ZXJtTG9nZ2VyIH0gZnJvbSAnY2F1c2FsLW5ldC5sb2cnO1xuY2xhc3MgQ2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbSBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoRXZlbnRFbWl0dGVyLCBcbiAgICBbIFN0b3JhZ2VNaXhpbnMgXSl7XG4gICAgY29uc3RydWN0b3IocHJlcHJvY2Vzc2luZ1N0b3JhZ2UsIGZ1bmN0b3IsIGxvZ2dlcil7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuU3RvcmFnZSA9IHByZXByb2Nlc3NpbmdTdG9yYWdlO1xuICAgICAgICB0aGlzLkYgPSBmdW5jdG9yO1xuICAgICAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nRGF0YSA9IHsgc2FtcGxlczogW10sIGxhYmVsczogW10sIGZpbmlzaGVkOiBmYWxzZSwgdHJhaW5TZXQ6IFtdLCB0ZXN0U2V0OiBbXSB9OyAgXG4gICAgfVxuICAgIGdldCBQcmVwcm9jZXNzaW5nRGF0YSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nRGF0YTtcbiAgICB9XG5cbiAgICBnZXQgVHJhaW5TZXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudHJhaW5TZXQ7XG4gICAgfVxuXG4gICAgZ2V0IFRlc3RTZXQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudGVzdFNldDtcbiAgICB9XG4gICAgXG4gICAgc2V0IFNhbXBsZVRyYW5zZm9ybWVyKHNhbXBsZUZuKXtcbiAgICAgICAgdGhpcy5zYW1wbGVGbiA9IHNhbXBsZUZuO1xuICAgIH1cbiAgICBzZXQgTGFiZWxUcmFuc2Zvcm1lcihsYWJlbEZuKXtcbiAgICAgICAgdGhpcy5sYWJlbEZuID0gbGFiZWxGbjtcbiAgICB9XG4gICAgZ2V0IFNhbXBsZVRyYW5zZm9ybWVyKCl7XG4gICAgICAgIGlmKCF0aGlzLnNhbXBsZUZuKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdzYW1wbGVGbiBpcyBub3Qgc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2FtcGxlRm47XG4gICAgfVxuICAgIGdldCBMYWJlbFRyYW5zZm9ybWVyKCl7XG4gICAgICAgIGlmKCF0aGlzLmxhYmVsRm4pe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2xhYmVsRm4gaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsRm47XG4gICAgfVxuICAgIGdldCBEYXRhSGFuZGxlcigpe1xuICAgICAgICBjb25zdCBFbnVtZXJhdGUgPSB0aGlzLkYuZW51bWVyYXRlO1xuICAgICAgICAvL2NvbnNvbGUubG9nKEVudW1lcmF0ZShbMCwyLDRdKSk7Ly9UT0RPOiBmaXggdGhpcyBmYWlsdXJlXG4gICAgICAgIGNvbnN0IFNhbXBsZVRyYW5zZm9ybWVyID0gdGhpcy5TYW1wbGVUcmFuc2Zvcm1lcjtcbiAgICAgICAgY29uc3QgTGFiZWxUcmFuc2Zvcm1lciA9IHRoaXMuTGFiZWxUcmFuc2Zvcm1lcjtcbiAgICAgICAgY29uc3QgU3RvcmFnZSA9IHRoaXMuU3RvcmFnZTtcbiAgICAgICAgcmV0dXJuIChkYXRhKT0+e1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rTmFtZSA9IGRhdGEuQ2h1bmtOYW1lO1xuICAgICAgICAgICAgICAgIGlmKCFjaHVua05hbWUpe1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoYGNodW5rTmFtZSBpcyBub3QgZGVmaW5lZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihkYXRhLlNhbXBsZSl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzYW1wbGVzID0gU2FtcGxlVHJhbnNmb3JtZXIoZGF0YS5TYW1wbGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWRlbnRpdHkgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbaWR4LCBzYW1wbGVdIG9mIHRoaXMuRi5lbnVtZXJhdGUoc2FtcGxlcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHkgPSBjaHVua05hbWUgKyAnLycgKyBpZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oJ3ByZXByb2Nlc3Npbmcvc2FtcGxlLycgKyBpZGVudGl0eSwgSlNPTi5zdHJpbmdpZnkoc2FtcGxlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmdEYXRhLnNhbXBsZXMucHVzaChpZGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihkYXRhLkxhYmVsKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVscyA9IExhYmVsVHJhbnNmb3JtZXIoZGF0YS5MYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZGVudGl0eSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIGxhYmVsXSBvZiB0aGlzLkYuZW51bWVyYXRlKGxhYmVscykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHkgPSBjaHVua05hbWUgKyAnLycgKyBpZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBTdG9yYWdlLnNldEl0ZW0oJ3ByZXByb2Nlc3NpbmcvbGFiZWwvJyArIGlkZW50aXR5LCBKU09OLnN0cmluZ2lmeShsYWJlbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nRGF0YS5sYWJlbHMucHVzaChpZGVudGl0eSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgc3BsaXREYXRhc2V0KHRyYWluU2l6ZT0wLjkpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5GLkNvcmVGdW5jdG9yO1xuICAgICAgICAvL1RPRE86IGVuaGFuY2UgdGhpcyBmb3IgaGFuZGxlIG1pc3NpbmcgZGF0YS9sYWJlbCBjYXNlXG4gICAgICAgIGxldCB7IHNhbXBsZXMsIGxhYmVscyB9ID0gdGhpcy5wcmVwcm9jZXNzaW5nRGF0YTtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLkYuemlwKHNhbXBsZXMsIGxhYmVscyk7XG4gICAgICAgIGlmKHRyYWluU2l6ZSA8IDEpe1xuICAgICAgICAgICAgdHJhaW5TaXplID0gcGFyc2VJbnQoZGF0YS5sZW5ndGgqMC45KTtcbiAgICAgICAgfSAgICBcbiAgICAgICAgY29uc3QgWyB0cmFpblNldCwgdGVzdFNldCBdID0gUi5zcGxpdEF0KHRyYWluU2l6ZSwgZGF0YSk7XG4gICAgICAgIHRoaXMucHJlcHJvY2Vzc2luZ0RhdGEudHJhaW5TZXQgPSB0cmFpblNldDtcbiAgICAgICAgdGhpcy5wcmVwcm9jZXNzaW5nRGF0YS50ZXN0U2V0ID0gdGVzdFNldDtcbiAgICAgICAgcmV0dXJuIFt0cmFpblNldCwgdGVzdFNldF07XG4gICAgfVxuICAgIG1ha2VCYXRjaEdlbmVyYXRvcihiYXRjaERhdGEpe1xuICAgICAgICBjb25zdCBTdG9yYWdlID0gdGhpcy5TdG9yYWdlO1xuICAgICAgICBsZXQgbmV4dEluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgYmF0Y2hHZW5lcmF0b3IgPSB7XG4gICAgICAgICAgICAgICAgbmV4dDogYXN5bmMoKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlcyA9IFtdLCBsYWJlbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF0gb2YgYmF0Y2hEYXRhW25leHRJbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2FtcGxlUGF0aCA9ICdwcmVwcm9jZXNzaW5nL3NhbXBsZS8nICsgc2FtcGxlUGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUGF0aCA9ICdwcmVwcm9jZXNzaW5nL2xhYmVsLycgKyBsYWJlbFBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IFN0b3JhZ2UuZ2V0SXRlbShzYW1wbGVQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCBTdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXMgPSBbLi4uc2FtcGxlcywgSlNPTi5wYXJzZShzYW1wbGVJdGVtW3NhbXBsZVBhdGhdKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbHMgPSBbLi4ubGFiZWxzLCBKU09OLnBhcnNlKGxhYmVsSXRlbVtsYWJlbFBhdGhdKV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dEluZGV4ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBzYW1wbGVzLCBsYWJlbHMgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUobmV4dEluZGV4IDwgYmF0Y2hEYXRhLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBiYXRjaEdlbmVyYXRvcjtcbiAgICB9XG4gICAgZ2V0IFRyYWluRGF0YUdlbmVyYXRvcigpe1xuICAgICAgICBjb25zdCBUcmFpblNldCA9IHRoaXMuVHJhaW5TZXQ7XG4gICAgICAgIGNvbnN0IFIgPSB0aGlzLkYuQ29yZUZ1bmN0b3I7XG4gICAgICAgIHJldHVybiAoYmF0Y2hTaXplKT0+e1xuICAgICAgICAgICAgLy9UT0RPOiBwZXJmb3JtIHBlcm11dGF0ZVxuICAgICAgICAgICAgbGV0IGJhdGNoRGF0YSA9IFIuc3BsaXRFdmVyeShiYXRjaFNpemUsIFRyYWluU2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFrZUJhdGNoR2VuZXJhdG9yKGJhdGNoRGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH1cbiAgICBnZXQgVGVzdERhdGFHZW5lcmF0b3IoKXtcbiAgICAgICAgY29uc3QgVGVzdFNldCA9IHRoaXMuVGVzdFNldDtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuRi5Db3JlRnVuY3RvcjtcbiAgICAgICAgcmV0dXJuIChiYXRjaFNpemUpPT57XG4gICAgICAgICAgICAvL1RPRE86IHBlcmZvcm0gcGVybXV0YXRlXG4gICAgICAgICAgICBsZXQgYmF0Y2hEYXRhID0gUi5zcGxpdEV2ZXJ5KGJhdGNoU2l6ZSwgVGVzdFNldCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlQmF0Y2hHZW5lcmF0b3IoYmF0Y2hEYXRhKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG52YXIgZnVuY3RvciA9IG5ldyBGdW5jdG9yKCk7XG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0UHJlcHJvY2Vzc2luZ1N0cmVhbShpbmRleERCU3RvcmFnZSwgZnVuY3RvciwgdGVybUxvZ2dlcik7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIEltYWdlU3BsaXR0aW5nTWl4aW5zIH0gZnJvbSAnLi9JbWFnZS9pbmRleCc7XG5cbi8qKlxuICogVGhpcyBJbWFnZVByZXByb2Nlc3NpbmcgcHJvdmlkZSBtZXRob2RzIGZvciBwcmVwcm9jZXNzaW5nIGltYWdlIGRhdGFcbiAqIHsgTWl4V2l0aDogW1xuICogICAgICAgICBDb2xvclRyYW5zZm9ybWluZ01peGlucywgSW1hZ2VTcGxpdHRpbmdNaXhpbnNcbiAqICAgICBdIH1cbiAqIEBjbGFzcyBJbWFnZVByZXByb2Nlc3NpbmdcbiAqIEBleHRlbmRzIEJhc2VGdW5jdG9yXG4gKiBAZXhhbXBsZVxuICogW0VYQU1QTEUgLi4vZXhhbXBsZXMvaW1hZ2VQcmVwcm9jZXNzaW5nLmJhYmVsLm5vZGUuanNdXG4gKi9cbmNsYXNzIEltYWdlUHJlcHJvY2Vzc2luZyBleHRlbmRzIHBsYXRmb3JtLm1peFdpdGgoQmFzZUZ1bmN0b3IsIFtcbiAgICAgICAgQ29sb3JUcmFuc2Zvcm1pbmdNaXhpbnMsIFxuICAgICAgICBJbWFnZVNwbGl0dGluZ01peGlucyBdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEltYWdlUHJlcHJvY2Vzc2luZzsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0gfSBmcm9tICcuL2NhdXNhbE5ldFByZXByb2Nlc3NpbmdTdHJlYW0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmVwcm9jZXNzaW5nTWl4aW5zfSBmcm9tICcuL3ByZXByb2Nlc3NpbmcubWl4aW5zJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpbWFnZVByZXByb2Nlc3NpbmcgfSBmcm9tICcuL2ltYWdlUHJlcHJvY2Vzc2luZyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG5scFByZXByb2Nlc3NpbmcgfSBmcm9tICcuL25scFByZXByb2Nlc3NpbmcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB0YWJ1bGFyUHJlcHJvY2Vzc2luZyB9IGZyb20gJy4vdGFidWxhclByZXByb2Nlc3NpbmcnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRva2VuaXplckVOIH0gZnJvbSAnLi90b2tlbml6ZXIuZW4nOyIsImltcG9ydCB7IEZ1bmN0b3IgYXMgQmFzZUZ1bmN0b3IgfSBmcm9tICdjYXVzYWwtbmV0LmNvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm0gfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmltcG9ydCB7IFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIH0gZnJvbSAnLi9OTFAvaW5kZXgnO1xuLyoqXG4gKiBUaGlzIE5MUFByZXByb2Nlc3NpbmcgY2xhc3MgcHJvdmlkZSBtZXRob2RzIGZvciBwcmVwcm9jZXNzaW5nIHRleHQgYW5kIG91dHB1dCB2YWxpZCB0b2tlbnMuXG4gKiB7IE1peFdpdGg6XG4gKiAgICAgWyBUb2tlblRyYW5zZm9ybWluZ01peGlucyBdKSB9XG4gKiBAY2xhc3MgTkxQUHJlcHJvY2Vzc2luZ1xuICogQGV4dGVuZHMgQmFzZUZ1bmN0b3JcbiAqIEBleGFtcGxlXG4gKiBbIUVYQU1QTEUgLi4vZXhhbXBsZXMvbmxwUHJlcHJvY2Vzc2luZy5iYWJlbC5ub2RlLmpzXVxuICovXG5cbmNsYXNzIE5MUFByZXByb2Nlc3NpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBcbiAgICBbIFRva2VuVHJhbnNmb3JtaW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgaW4gY2FzZSB0b2tlbml6ZXIgcmVxdWlyZXMgZGF0YSBzZXR1cC5cbiAgICAgKiBAcGFyYW0geyBVcmx8RmlsZVBhdGggfSBjb25maWdMaW5rXG4gICAgICogQG1lbWJlcm9mIE5MUFByZXByb2Nlc3NpbmdcbiAgICAgKi9cbiAgICBjb25uZWN0KGNvbmZpZ0xpbmspe1xuICAgICAgICB0aGlzLnRva2VuaXplci5jb25uZWN0KGNvbmZpZ0xpbmspO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdG9rZW5pemVyXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTkxQUHJlcHJvY2Vzc2luZ1xuICAgICAqL1xuICAgIGdldCBUb2tlbml6ZXIoKXtcbiAgICAgICAgaWYoIXRoaXMudG9rZW5pemVyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCd0b2tlbml6ZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuaXplcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRva2VuaXplclxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IHRva2VuaXplciAtIHRva2VuaXplciBvYmplY3RcbiAgICAgKiBAbWVtYmVyb2YgTkxQUHJlcHJvY2Vzc2luZ1xuICAgICAqL1xuICAgIHNldCBUb2tlbml6ZXIodG9rZW5pemVyKXtcbiAgICAgICAgdGhpcy50b2tlbml6ZXIgPSB0b2tlbml6ZXI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTkxQUHJlcHJvY2Vzc2luZzsiLCJjb25zdCBQcmVwcm9jZXNzaW5nTWl4aW5zID0gKEJhc2VQaXBlbGluZUNsYXNzKSA9PiBjbGFzcyBleHRlbmRzIEJhc2VQaXBlbGluZUNsYXNze1xuICAgIHNldCBQcmVwcm9jZXNzaW5nKHByZXByb2Nlc3Npbmcpe1xuICAgICAgICB0aGlzLnByZXByb2Nlc3NpbmcgPSBwcmVwcm9jZXNzaW5nO1xuICAgIH1cbiAgICBnZXQgUHJlcHJvY2Vzc2luZygpe1xuICAgICAgICBpZighdGhpcy5wcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdwcmVwcm9jZXNzaW5nIGlzIG5vdCBzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVwcm9jZXNzaW5nO1xuICAgIH0gICAgXG4gICAgc2V0QnlDb25maWcocGlwZWxpbmVDb25maWcpe1xuICAgICAgICBjb25zdCB7IFNhbXBsZVRyYW5zZm9ybWVyLCBMYWJlbFRyYW5zZm9ybWVyIH0gPSBwaXBlbGluZUNvbmZpZy5EYXRhc2V0LlByZXByb2Nlc3Npbmc7XG4gICAgICAgIHRoaXMuUHJlcHJvY2Vzc2luZy5TYW1wbGVUcmFuc2Zvcm1lciA9IFNhbXBsZVRyYW5zZm9ybWVyO1xuICAgICAgICB0aGlzLlByZXByb2Nlc3NpbmcuTGFiZWxUcmFuc2Zvcm1lciA9IExhYmVsVHJhbnNmb3JtZXI7XG4gICAgICAgIHBpcGVsaW5lQ29uZmlnLkRhdGFzZXQuVHJhaW5EYXRhR2VuZXJhdG9yID0gdGhpcy5wcmVwcm9jZXNzaW5nLlRyYWluRGF0YUdlbmVyYXRvcjtcbiAgICAgICAgcGlwZWxpbmVDb25maWcuRGF0YXNldC5UZXN0RGF0YUdlbmVyYXRvciA9IHRoaXMucHJlcHJvY2Vzc2luZy5UZXN0RGF0YUdlbmVyYXRvcjtcbiAgICAgICAgcmV0dXJuIHBpcGVsaW5lQ29uZmlnO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZXByb2Nlc3NpbmdNaXhpbnM7IiwiaW1wb3J0IHsgRnVuY3RvciBhcyBCYXNlRnVuY3RvciB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgSXRlbU5vcm1hbGl6aW5nLCBOdWxsSXRlbVJlcGxhY2UgfSBmcm9tICcuL1RhYnVsYXIvaW5kZXgnO1xuY2xhc3MgVGFidWxhclByZXByb2Nlc3NpbmcgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdG9yLCBcbiAgICBbXSl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUYWJ1bGFyUHJlcHJvY2Vzc2luZzsiLCIvKipcbiAqIFRoaXMgVG9rZW5pemVyRU4gaXMgYSBzaW1wbGUgaW1wbGVtZW50YXRpb24gZm9yIEVuZ2xpc2ggdG9rZW5pemVyXG4gKiBAdG9kbyBlbmhhbmNlIGl0IHdpdGggZW50aXRpZXMgYW5kIGJ1aWx0LWluIHZvY2FiXG4gKiBAZXhwZXJpbWVudFxuICogQGNsYXNzIFRva2VuaXplckVOXG4gKi9cbmNsYXNzIFRva2VuaXplckVOe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuICAgIGNvbm5lY3QoY29uZmlndXJlTGluayl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGlzIHNpbXBsZSBFbmdsaXNoIHRva2VuaXplciBub3QgcmVxdWlyZXMgYWR2YW5jZSBjb25maWd1cmUnKTtcbiAgICB9XG4gICAgdG9rZW5pemUodGV4dCl7XG4gICAgICAgIGNvbnN0IFJlID0gL1tcXHMuXCInL1xcfDs6KClcXFtcXF1cXEBcXCNcXCRcXCZdL2c7XG4gICAgICAgIHJldHVybiB0ZXh0LnNwbGl0KFJlKS5maWx0ZXIodG9rZW49PnRva2VuIT09JycpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5ldyBUb2tlbml6ZXJFTigpOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9sb2dfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9