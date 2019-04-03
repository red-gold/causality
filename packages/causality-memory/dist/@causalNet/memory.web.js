(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/memory"] = factory(require("causal-net.core"), require("causal-net.utils"));
	else
		root["@causalNet/memory"] = factory(root["causal-net.core"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "../causality-memcache/dist/@causalNet/memcache.web.js":
/*!*************************************************************!*\
  !*** ../causality-memcache/dist/@causalNet/memcache.web.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! causal-net.core */ "causal-net.core"), __webpack_require__(/*! causal-net.utils */ "causal-net.utils"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "../../node_modules/abstract-leveldown/abstract-chained-batch.js":
/*!****************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/abstract-leveldown/abstract-chained-batch.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* Copyright (c) 2017 Rod Vagg, MIT License */

function AbstractChainedBatch (db) {
  this._db = db
  this._operations = []
  this._written = false
}

AbstractChainedBatch.prototype._serializeKey = function (key) {
  return this._db._serializeKey(key)
}

AbstractChainedBatch.prototype._serializeValue = function (value) {
  return this._db._serializeValue(value)
}

AbstractChainedBatch.prototype._checkWritten = function () {
  if (this._written) {
    throw new Error('write() already called on this batch')
  }
}

AbstractChainedBatch.prototype.put = function (key, value) {
  this._checkWritten()

  var err = this._db._checkKey(key, 'key')
  if (err) { throw err }

  key = this._serializeKey(key)
  value = this._serializeValue(value)

  this._put(key, value)

  return this
}

AbstractChainedBatch.prototype._put = function (key, value) {
  this._operations.push({ type: 'put', key: key, value: value })
}

AbstractChainedBatch.prototype.del = function (key) {
  this._checkWritten()

  var err = this._db._checkKey(key, 'key')
  if (err) { throw err }

  key = this._serializeKey(key)
  this._del(key)

  return this
}

AbstractChainedBatch.prototype._del = function (key) {
  this._operations.push({ type: 'del', key: key })
}

AbstractChainedBatch.prototype.clear = function () {
  this._checkWritten()
  this._operations = []
  this._clear()

  return this
}

AbstractChainedBatch.prototype._clear = function noop () {}

AbstractChainedBatch.prototype.write = function (options, callback) {
  this._checkWritten()

  if (typeof options === 'function') { callback = options }
  if (typeof callback !== 'function') {
    throw new Error('write() requires a callback argument')
  }
  if (typeof options !== 'object') { options = {} }

  this._written = true

  // @ts-ignore
  if (typeof this._write === 'function') { return this._write(callback) }

  if (typeof this._db._batch === 'function') {
    return this._db._batch(this._operations, options, callback)
  }

  process.nextTick(callback)
}

module.exports = AbstractChainedBatch

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/abstract-leveldown/abstract-iterator.js":
/*!***********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/abstract-leveldown/abstract-iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* Copyright (c) 2017 Rod Vagg, MIT License */

function AbstractIterator (db) {
  this.db = db
  this._ended = false
  this._nexting = false
}

AbstractIterator.prototype.next = function (callback) {
  var self = this

  if (typeof callback !== 'function') {
    throw new Error('next() requires a callback argument')
  }

  if (self._ended) {
    process.nextTick(callback, new Error('cannot call next() after end()'))
    return self
  }

  if (self._nexting) {
    process.nextTick(callback, new Error('cannot call next() before previous next() has completed'))
    return self
  }

  self._nexting = true
  self._next(function () {
    self._nexting = false
    callback.apply(null, arguments)
  })

  return self
}

AbstractIterator.prototype._next = function (callback) {
  process.nextTick(callback)
}

AbstractIterator.prototype.end = function (callback) {
  if (typeof callback !== 'function') {
    throw new Error('end() requires a callback argument')
  }

  if (this._ended) {
    return process.nextTick(callback, new Error('end() already called on iterator'))
  }

  this._ended = true
  this._end(callback)
}

AbstractIterator.prototype._end = function (callback) {
  process.nextTick(callback)
}

module.exports = AbstractIterator

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/abstract-leveldown/abstract-leveldown.js":
/*!************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/abstract-leveldown/abstract-leveldown.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer) {/* Copyright (c) 2017 Rod Vagg, MIT License */

var xtend = __webpack_require__(/*! xtend */ "../../node_modules/xtend/immutable.js")
var AbstractIterator = __webpack_require__(/*! ./abstract-iterator */ "../../node_modules/abstract-leveldown/abstract-iterator.js")
var AbstractChainedBatch = __webpack_require__(/*! ./abstract-chained-batch */ "../../node_modules/abstract-leveldown/abstract-chained-batch.js")
var hasOwnProperty = Object.prototype.hasOwnProperty
var rangeOptions = 'start end gt gte lt lte'.split(' ')

function AbstractLevelDOWN (location) {
  if (!arguments.length || location === undefined) {
    throw new Error('constructor requires at least a location argument')
  }

  if (typeof location !== 'string') {
    throw new Error('constructor requires a location string argument')
  }

  this.location = location
  this.status = 'new'
}

AbstractLevelDOWN.prototype.open = function (options, callback) {
  var self = this
  var oldStatus = this.status

  if (typeof options === 'function') { callback = options }

  if (typeof callback !== 'function') {
    throw new Error('open() requires a callback argument')
  }

  if (typeof options !== 'object') { options = {} }

  options.createIfMissing = options.createIfMissing !== false
  options.errorIfExists = !!options.errorIfExists

  this.status = 'opening'
  this._open(options, function (err) {
    if (err) {
      self.status = oldStatus
      return callback(err)
    }
    self.status = 'open'
    callback()
  })
}

AbstractLevelDOWN.prototype._open = function (options, callback) {
  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.close = function (callback) {
  var self = this
  var oldStatus = this.status

  if (typeof callback !== 'function') {
    throw new Error('close() requires a callback argument')
  }

  this.status = 'closing'
  this._close(function (err) {
    if (err) {
      self.status = oldStatus
      return callback(err)
    }
    self.status = 'closed'
    callback()
  })
}

AbstractLevelDOWN.prototype._close = function (callback) {
  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.get = function (key, options, callback) {
  if (typeof options === 'function') { callback = options }

  if (typeof callback !== 'function') {
    throw new Error('get() requires a callback argument')
  }

  var err = this._checkKey(key, 'key')
  if (err) return process.nextTick(callback, err)

  key = this._serializeKey(key)

  if (typeof options !== 'object') { options = {} }

  options.asBuffer = options.asBuffer !== false

  this._get(key, options, callback)
}

AbstractLevelDOWN.prototype._get = function (key, options, callback) {
  process.nextTick(function () { callback(new Error('NotFound')) })
}

AbstractLevelDOWN.prototype.put = function (key, value, options, callback) {
  if (typeof options === 'function') { callback = options }

  if (typeof callback !== 'function') {
    throw new Error('put() requires a callback argument')
  }

  var err = this._checkKey(key, 'key')
  if (err) return process.nextTick(callback, err)

  key = this._serializeKey(key)
  value = this._serializeValue(value)

  if (typeof options !== 'object') { options = {} }

  this._put(key, value, options, callback)
}

AbstractLevelDOWN.prototype._put = function (key, value, options, callback) {
  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.del = function (key, options, callback) {
  if (typeof options === 'function') { callback = options }

  if (typeof callback !== 'function') {
    throw new Error('del() requires a callback argument')
  }

  var err = this._checkKey(key, 'key')
  if (err) return process.nextTick(callback, err)

  key = this._serializeKey(key)

  if (typeof options !== 'object') { options = {} }

  this._del(key, options, callback)
}

AbstractLevelDOWN.prototype._del = function (key, options, callback) {
  process.nextTick(callback)
}

AbstractLevelDOWN.prototype.batch = function (array, options, callback) {
  if (!arguments.length) { return this._chainedBatch() }

  if (typeof options === 'function') { callback = options }

  if (typeof array === 'function') { callback = array }

  if (typeof callback !== 'function') {
    throw new Error('batch(array) requires a callback argument')
  }

  if (!Array.isArray(array)) {
    return process.nextTick(callback, new Error('batch(array) requires an array argument'))
  }

  if (!options || typeof options !== 'object') { options = {} }

  var serialized = new Array(array.length)

  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'object' || array[i] === null) {
      return process.nextTick(callback, new Error('batch(array) element must be an object and not `null`'))
    }

    var e = xtend(array[i])

    if (e.type !== 'put' && e.type !== 'del') {
      return process.nextTick(callback, new Error("`type` must be 'put' or 'del'"))
    }

    var err = this._checkKey(e.key, 'key')
    if (err) return process.nextTick(callback, err)

    e.key = this._serializeKey(e.key)

    if (e.type === 'put') { e.value = this._serializeValue(e.value) }

    serialized[i] = e
  }

  this._batch(serialized, options, callback)
}

AbstractLevelDOWN.prototype._batch = function (array, options, callback) {
  process.nextTick(callback)
}

AbstractLevelDOWN.prototype._setupIteratorOptions = function (options) {
  options = cleanRangeOptions(options)

  options.reverse = !!options.reverse
  options.keys = options.keys !== false
  options.values = options.values !== false
  options.limit = 'limit' in options ? options.limit : -1
  options.keyAsBuffer = options.keyAsBuffer !== false
  options.valueAsBuffer = options.valueAsBuffer !== false

  return options
}

function cleanRangeOptions (options) {
  var result = {}

  for (var k in options) {
    if (!hasOwnProperty.call(options, k)) continue
    if (isRangeOption(k) && isEmptyRangeOption(options[k])) continue

    result[k] = options[k]
  }

  return result
}

function isRangeOption (k) {
  return rangeOptions.indexOf(k) !== -1
}

function isEmptyRangeOption (v) {
  return v === '' || v == null || isEmptyBuffer(v)
}

function isEmptyBuffer (v) {
  return Buffer.isBuffer(v) && v.length === 0
}

AbstractLevelDOWN.prototype.iterator = function (options) {
  if (typeof options !== 'object') { options = {} }
  options = this._setupIteratorOptions(options)
  return this._iterator(options)
}

AbstractLevelDOWN.prototype._iterator = function (options) {
  return new AbstractIterator(this)
}

AbstractLevelDOWN.prototype._chainedBatch = function () {
  return new AbstractChainedBatch(this)
}

AbstractLevelDOWN.prototype._serializeKey = function (key) {
  return Buffer.isBuffer(key) ? key : String(key)
}

AbstractLevelDOWN.prototype._serializeValue = function (value) {
  if (value == null) return ''
  return Buffer.isBuffer(value) || process.browser ? value : String(value)
}

AbstractLevelDOWN.prototype._checkKey = function (obj, type) {
  if (obj === null || obj === undefined) {
    return new Error(type + ' cannot be `null` or `undefined`')
  }

  if (Buffer.isBuffer(obj) && obj.length === 0) {
    return new Error(type + ' cannot be an empty Buffer')
  }

  if (String(obj) === '') {
    return new Error(type + ' cannot be an empty String')
  }
}

module.exports = AbstractLevelDOWN

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js"), __webpack_require__(/*! ./../buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/abstract-leveldown/index.js":
/*!***********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/abstract-leveldown/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.AbstractLevelDOWN = __webpack_require__(/*! ./abstract-leveldown */ "../../node_modules/abstract-leveldown/abstract-leveldown.js")
exports.AbstractIterator = __webpack_require__(/*! ./abstract-iterator */ "../../node_modules/abstract-leveldown/abstract-iterator.js")
exports.AbstractChainedBatch = __webpack_require__(/*! ./abstract-chained-batch */ "../../node_modules/abstract-leveldown/abstract-chained-batch.js")


/***/ }),

/***/ "../../node_modules/base64-js/index.js":
/*!**************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/base64-js/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "../../node_modules/buffer/index.js":
/*!***********************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/buffer/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "../../node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "../../node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "../../node_modules/buffer/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/buffer/node_modules/isarray/index.js":
/*!********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/buffer/node_modules/isarray/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "../../node_modules/functional-red-black-tree/rbtree.js":
/*!*******************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/functional-red-black-tree/rbtree.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = createRBTree

var RED   = 0
var BLACK = 1

function RBNode(color, key, value, left, right, count) {
  this._color = color
  this.key = key
  this.value = value
  this.left = left
  this.right = right
  this._count = count
}

function cloneNode(node) {
  return new RBNode(node._color, node.key, node.value, node.left, node.right, node._count)
}

function repaint(color, node) {
  return new RBNode(color, node.key, node.value, node.left, node.right, node._count)
}

function recount(node) {
  node._count = 1 + (node.left ? node.left._count : 0) + (node.right ? node.right._count : 0)
}

function RedBlackTree(compare, root) {
  this._compare = compare
  this.root = root
}

var proto = RedBlackTree.prototype

Object.defineProperty(proto, "keys", {
  get: function() {
    var result = []
    this.forEach(function(k,v) {
      result.push(k)
    })
    return result
  }
})

Object.defineProperty(proto, "values", {
  get: function() {
    var result = []
    this.forEach(function(k,v) {
      result.push(v)
    })
    return result
  }
})

//Returns the number of nodes in the tree
Object.defineProperty(proto, "length", {
  get: function() {
    if(this.root) {
      return this.root._count
    }
    return 0
  }
})

//Insert a new item into the tree
proto.insert = function(key, value) {
  var cmp = this._compare
  //Find point to insert new node at
  var n = this.root
  var n_stack = []
  var d_stack = []
  while(n) {
    var d = cmp(key, n.key)
    n_stack.push(n)
    d_stack.push(d)
    if(d <= 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  //Rebuild path to leaf node
  n_stack.push(new RBNode(RED, key, value, null, null, 1))
  for(var s=n_stack.length-2; s>=0; --s) {
    var n = n_stack[s]
    if(d_stack[s] <= 0) {
      n_stack[s] = new RBNode(n._color, n.key, n.value, n_stack[s+1], n.right, n._count+1)
    } else {
      n_stack[s] = new RBNode(n._color, n.key, n.value, n.left, n_stack[s+1], n._count+1)
    }
  }
  //Rebalance tree using rotations
  //console.log("start insert", key, d_stack)
  for(var s=n_stack.length-1; s>1; --s) {
    var p = n_stack[s-1]
    var n = n_stack[s]
    if(p._color === BLACK || n._color === BLACK) {
      break
    }
    var pp = n_stack[s-2]
    if(pp.left === p) {
      if(p.left === n) {
        var y = pp.right
        if(y && y._color === RED) {
          //console.log("LLr")
          p._color = BLACK
          pp.right = repaint(BLACK, y)
          pp._color = RED
          s -= 1
        } else {
          //console.log("LLb")
          pp._color = RED
          pp.left = p.right
          p._color = BLACK
          p.right = pp
          n_stack[s-2] = p
          n_stack[s-1] = n
          recount(pp)
          recount(p)
          if(s >= 3) {
            var ppp = n_stack[s-3]
            if(ppp.left === pp) {
              ppp.left = p
            } else {
              ppp.right = p
            }
          }
          break
        }
      } else {
        var y = pp.right
        if(y && y._color === RED) {
          //console.log("LRr")
          p._color = BLACK
          pp.right = repaint(BLACK, y)
          pp._color = RED
          s -= 1
        } else {
          //console.log("LRb")
          p.right = n.left
          pp._color = RED
          pp.left = n.right
          n._color = BLACK
          n.left = p
          n.right = pp
          n_stack[s-2] = n
          n_stack[s-1] = p
          recount(pp)
          recount(p)
          recount(n)
          if(s >= 3) {
            var ppp = n_stack[s-3]
            if(ppp.left === pp) {
              ppp.left = n
            } else {
              ppp.right = n
            }
          }
          break
        }
      }
    } else {
      if(p.right === n) {
        var y = pp.left
        if(y && y._color === RED) {
          //console.log("RRr", y.key)
          p._color = BLACK
          pp.left = repaint(BLACK, y)
          pp._color = RED
          s -= 1
        } else {
          //console.log("RRb")
          pp._color = RED
          pp.right = p.left
          p._color = BLACK
          p.left = pp
          n_stack[s-2] = p
          n_stack[s-1] = n
          recount(pp)
          recount(p)
          if(s >= 3) {
            var ppp = n_stack[s-3]
            if(ppp.right === pp) {
              ppp.right = p
            } else {
              ppp.left = p
            }
          }
          break
        }
      } else {
        var y = pp.left
        if(y && y._color === RED) {
          //console.log("RLr")
          p._color = BLACK
          pp.left = repaint(BLACK, y)
          pp._color = RED
          s -= 1
        } else {
          //console.log("RLb")
          p.left = n.right
          pp._color = RED
          pp.right = n.left
          n._color = BLACK
          n.right = p
          n.left = pp
          n_stack[s-2] = n
          n_stack[s-1] = p
          recount(pp)
          recount(p)
          recount(n)
          if(s >= 3) {
            var ppp = n_stack[s-3]
            if(ppp.right === pp) {
              ppp.right = n
            } else {
              ppp.left = n
            }
          }
          break
        }
      }
    }
  }
  //Return new tree
  n_stack[0]._color = BLACK
  return new RedBlackTree(cmp, n_stack[0])
}


//Visit all nodes inorder
function doVisitFull(visit, node) {
  if(node.left) {
    var v = doVisitFull(visit, node.left)
    if(v) { return v }
  }
  var v = visit(node.key, node.value)
  if(v) { return v }
  if(node.right) {
    return doVisitFull(visit, node.right)
  }
}

//Visit half nodes in order
function doVisitHalf(lo, compare, visit, node) {
  var l = compare(lo, node.key)
  if(l <= 0) {
    if(node.left) {
      var v = doVisitHalf(lo, compare, visit, node.left)
      if(v) { return v }
    }
    var v = visit(node.key, node.value)
    if(v) { return v }
  }
  if(node.right) {
    return doVisitHalf(lo, compare, visit, node.right)
  }
}

//Visit all nodes within a range
function doVisit(lo, hi, compare, visit, node) {
  var l = compare(lo, node.key)
  var h = compare(hi, node.key)
  var v
  if(l <= 0) {
    if(node.left) {
      v = doVisit(lo, hi, compare, visit, node.left)
      if(v) { return v }
    }
    if(h > 0) {
      v = visit(node.key, node.value)
      if(v) { return v }
    }
  }
  if(h > 0 && node.right) {
    return doVisit(lo, hi, compare, visit, node.right)
  }
}


proto.forEach = function rbTreeForEach(visit, lo, hi) {
  if(!this.root) {
    return
  }
  switch(arguments.length) {
    case 1:
      return doVisitFull(visit, this.root)
    break

    case 2:
      return doVisitHalf(lo, this._compare, visit, this.root)
    break

    case 3:
      if(this._compare(lo, hi) >= 0) {
        return
      }
      return doVisit(lo, hi, this._compare, visit, this.root)
    break
  }
}

//First item in list
Object.defineProperty(proto, "begin", {
  get: function() {
    var stack = []
    var n = this.root
    while(n) {
      stack.push(n)
      n = n.left
    }
    return new RedBlackTreeIterator(this, stack)
  }
})

//Last item in list
Object.defineProperty(proto, "end", {
  get: function() {
    var stack = []
    var n = this.root
    while(n) {
      stack.push(n)
      n = n.right
    }
    return new RedBlackTreeIterator(this, stack)
  }
})

//Find the ith item in the tree
proto.at = function(idx) {
  if(idx < 0) {
    return new RedBlackTreeIterator(this, [])
  }
  var n = this.root
  var stack = []
  while(true) {
    stack.push(n)
    if(n.left) {
      if(idx < n.left._count) {
        n = n.left
        continue
      }
      idx -= n.left._count
    }
    if(!idx) {
      return new RedBlackTreeIterator(this, stack)
    }
    idx -= 1
    if(n.right) {
      if(idx >= n.right._count) {
        break
      }
      n = n.right
    } else {
      break
    }
  }
  return new RedBlackTreeIterator(this, [])
}

proto.ge = function(key) {
  var cmp = this._compare
  var n = this.root
  var stack = []
  var last_ptr = 0
  while(n) {
    var d = cmp(key, n.key)
    stack.push(n)
    if(d <= 0) {
      last_ptr = stack.length
    }
    if(d <= 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  stack.length = last_ptr
  return new RedBlackTreeIterator(this, stack)
}

proto.gt = function(key) {
  var cmp = this._compare
  var n = this.root
  var stack = []
  var last_ptr = 0
  while(n) {
    var d = cmp(key, n.key)
    stack.push(n)
    if(d < 0) {
      last_ptr = stack.length
    }
    if(d < 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  stack.length = last_ptr
  return new RedBlackTreeIterator(this, stack)
}

proto.lt = function(key) {
  var cmp = this._compare
  var n = this.root
  var stack = []
  var last_ptr = 0
  while(n) {
    var d = cmp(key, n.key)
    stack.push(n)
    if(d > 0) {
      last_ptr = stack.length
    }
    if(d <= 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  stack.length = last_ptr
  return new RedBlackTreeIterator(this, stack)
}

proto.le = function(key) {
  var cmp = this._compare
  var n = this.root
  var stack = []
  var last_ptr = 0
  while(n) {
    var d = cmp(key, n.key)
    stack.push(n)
    if(d >= 0) {
      last_ptr = stack.length
    }
    if(d < 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  stack.length = last_ptr
  return new RedBlackTreeIterator(this, stack)
}

//Finds the item with key if it exists
proto.find = function(key) {
  var cmp = this._compare
  var n = this.root
  var stack = []
  while(n) {
    var d = cmp(key, n.key)
    stack.push(n)
    if(d === 0) {
      return new RedBlackTreeIterator(this, stack)
    }
    if(d <= 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  return new RedBlackTreeIterator(this, [])
}

//Removes item with key from tree
proto.remove = function(key) {
  var iter = this.find(key)
  if(iter) {
    return iter.remove()
  }
  return this
}

//Returns the item at `key`
proto.get = function(key) {
  var cmp = this._compare
  var n = this.root
  while(n) {
    var d = cmp(key, n.key)
    if(d === 0) {
      return n.value
    }
    if(d <= 0) {
      n = n.left
    } else {
      n = n.right
    }
  }
  return
}

//Iterator for red black tree
function RedBlackTreeIterator(tree, stack) {
  this.tree = tree
  this._stack = stack
}

var iproto = RedBlackTreeIterator.prototype

//Test if iterator is valid
Object.defineProperty(iproto, "valid", {
  get: function() {
    return this._stack.length > 0
  }
})

//Node of the iterator
Object.defineProperty(iproto, "node", {
  get: function() {
    if(this._stack.length > 0) {
      return this._stack[this._stack.length-1]
    }
    return null
  },
  enumerable: true
})

//Makes a copy of an iterator
iproto.clone = function() {
  return new RedBlackTreeIterator(this.tree, this._stack.slice())
}

//Swaps two nodes
function swapNode(n, v) {
  n.key = v.key
  n.value = v.value
  n.left = v.left
  n.right = v.right
  n._color = v._color
  n._count = v._count
}

//Fix up a double black node in a tree
function fixDoubleBlack(stack) {
  var n, p, s, z
  for(var i=stack.length-1; i>=0; --i) {
    n = stack[i]
    if(i === 0) {
      n._color = BLACK
      return
    }
    //console.log("visit node:", n.key, i, stack[i].key, stack[i-1].key)
    p = stack[i-1]
    if(p.left === n) {
      //console.log("left child")
      s = p.right
      if(s.right && s.right._color === RED) {
        //console.log("case 1: right sibling child red")
        s = p.right = cloneNode(s)
        z = s.right = cloneNode(s.right)
        p.right = s.left
        s.left = p
        s.right = z
        s._color = p._color
        n._color = BLACK
        p._color = BLACK
        z._color = BLACK
        recount(p)
        recount(s)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.left === p) {
            pp.left = s
          } else {
            pp.right = s
          }
        }
        stack[i-1] = s
        return
      } else if(s.left && s.left._color === RED) {
        //console.log("case 1: left sibling child red")
        s = p.right = cloneNode(s)
        z = s.left = cloneNode(s.left)
        p.right = z.left
        s.left = z.right
        z.left = p
        z.right = s
        z._color = p._color
        p._color = BLACK
        s._color = BLACK
        n._color = BLACK
        recount(p)
        recount(s)
        recount(z)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.left === p) {
            pp.left = z
          } else {
            pp.right = z
          }
        }
        stack[i-1] = z
        return
      }
      if(s._color === BLACK) {
        if(p._color === RED) {
          //console.log("case 2: black sibling, red parent", p.right.value)
          p._color = BLACK
          p.right = repaint(RED, s)
          return
        } else {
          //console.log("case 2: black sibling, black parent", p.right.value)
          p.right = repaint(RED, s)
          continue  
        }
      } else {
        //console.log("case 3: red sibling")
        s = cloneNode(s)
        p.right = s.left
        s.left = p
        s._color = p._color
        p._color = RED
        recount(p)
        recount(s)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.left === p) {
            pp.left = s
          } else {
            pp.right = s
          }
        }
        stack[i-1] = s
        stack[i] = p
        if(i+1 < stack.length) {
          stack[i+1] = n
        } else {
          stack.push(n)
        }
        i = i+2
      }
    } else {
      //console.log("right child")
      s = p.left
      if(s.left && s.left._color === RED) {
        //console.log("case 1: left sibling child red", p.value, p._color)
        s = p.left = cloneNode(s)
        z = s.left = cloneNode(s.left)
        p.left = s.right
        s.right = p
        s.left = z
        s._color = p._color
        n._color = BLACK
        p._color = BLACK
        z._color = BLACK
        recount(p)
        recount(s)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.right === p) {
            pp.right = s
          } else {
            pp.left = s
          }
        }
        stack[i-1] = s
        return
      } else if(s.right && s.right._color === RED) {
        //console.log("case 1: right sibling child red")
        s = p.left = cloneNode(s)
        z = s.right = cloneNode(s.right)
        p.left = z.right
        s.right = z.left
        z.right = p
        z.left = s
        z._color = p._color
        p._color = BLACK
        s._color = BLACK
        n._color = BLACK
        recount(p)
        recount(s)
        recount(z)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.right === p) {
            pp.right = z
          } else {
            pp.left = z
          }
        }
        stack[i-1] = z
        return
      }
      if(s._color === BLACK) {
        if(p._color === RED) {
          //console.log("case 2: black sibling, red parent")
          p._color = BLACK
          p.left = repaint(RED, s)
          return
        } else {
          //console.log("case 2: black sibling, black parent")
          p.left = repaint(RED, s)
          continue  
        }
      } else {
        //console.log("case 3: red sibling")
        s = cloneNode(s)
        p.left = s.right
        s.right = p
        s._color = p._color
        p._color = RED
        recount(p)
        recount(s)
        if(i > 1) {
          var pp = stack[i-2]
          if(pp.right === p) {
            pp.right = s
          } else {
            pp.left = s
          }
        }
        stack[i-1] = s
        stack[i] = p
        if(i+1 < stack.length) {
          stack[i+1] = n
        } else {
          stack.push(n)
        }
        i = i+2
      }
    }
  }
}

//Removes item at iterator from tree
iproto.remove = function() {
  var stack = this._stack
  if(stack.length === 0) {
    return this.tree
  }
  //First copy path to node
  var cstack = new Array(stack.length)
  var n = stack[stack.length-1]
  cstack[cstack.length-1] = new RBNode(n._color, n.key, n.value, n.left, n.right, n._count)
  for(var i=stack.length-2; i>=0; --i) {
    var n = stack[i]
    if(n.left === stack[i+1]) {
      cstack[i] = new RBNode(n._color, n.key, n.value, cstack[i+1], n.right, n._count)
    } else {
      cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
    }
  }

  //Get node
  n = cstack[cstack.length-1]
  //console.log("start remove: ", n.value)

  //If not leaf, then swap with previous node
  if(n.left && n.right) {
    //console.log("moving to leaf")

    //First walk to previous leaf
    var split = cstack.length
    n = n.left
    while(n.right) {
      cstack.push(n)
      n = n.right
    }
    //Copy path to leaf
    var v = cstack[split-1]
    cstack.push(new RBNode(n._color, v.key, v.value, n.left, n.right, n._count))
    cstack[split-1].key = n.key
    cstack[split-1].value = n.value

    //Fix up stack
    for(var i=cstack.length-2; i>=split; --i) {
      n = cstack[i]
      cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
    }
    cstack[split-1].left = cstack[split]
  }
  //console.log("stack=", cstack.map(function(v) { return v.value }))

  //Remove leaf node
  n = cstack[cstack.length-1]
  if(n._color === RED) {
    //Easy case: removing red leaf
    //console.log("RED leaf")
    var p = cstack[cstack.length-2]
    if(p.left === n) {
      p.left = null
    } else if(p.right === n) {
      p.right = null
    }
    cstack.pop()
    for(var i=0; i<cstack.length; ++i) {
      cstack[i]._count--
    }
    return new RedBlackTree(this.tree._compare, cstack[0])
  } else {
    if(n.left || n.right) {
      //Second easy case:  Single child black parent
      //console.log("BLACK single child")
      if(n.left) {
        swapNode(n, n.left)
      } else if(n.right) {
        swapNode(n, n.right)
      }
      //Child must be red, so repaint it black to balance color
      n._color = BLACK
      for(var i=0; i<cstack.length-1; ++i) {
        cstack[i]._count--
      }
      return new RedBlackTree(this.tree._compare, cstack[0])
    } else if(cstack.length === 1) {
      //Third easy case: root
      //console.log("ROOT")
      return new RedBlackTree(this.tree._compare, null)
    } else {
      //Hard case: Repaint n, and then do some nasty stuff
      //console.log("BLACK leaf no children")
      for(var i=0; i<cstack.length; ++i) {
        cstack[i]._count--
      }
      var parent = cstack[cstack.length-2]
      fixDoubleBlack(cstack)
      //Fix up links
      if(parent.left === n) {
        parent.left = null
      } else {
        parent.right = null
      }
    }
  }
  return new RedBlackTree(this.tree._compare, cstack[0])
}

//Returns key
Object.defineProperty(iproto, "key", {
  get: function() {
    if(this._stack.length > 0) {
      return this._stack[this._stack.length-1].key
    }
    return
  },
  enumerable: true
})

//Returns value
Object.defineProperty(iproto, "value", {
  get: function() {
    if(this._stack.length > 0) {
      return this._stack[this._stack.length-1].value
    }
    return
  },
  enumerable: true
})


//Returns the position of this iterator in the sorted list
Object.defineProperty(iproto, "index", {
  get: function() {
    var idx = 0
    var stack = this._stack
    if(stack.length === 0) {
      var r = this.tree.root
      if(r) {
        return r._count
      }
      return 0
    } else if(stack[stack.length-1].left) {
      idx = stack[stack.length-1].left._count
    }
    for(var s=stack.length-2; s>=0; --s) {
      if(stack[s+1] === stack[s].right) {
        ++idx
        if(stack[s].left) {
          idx += stack[s].left._count
        }
      }
    }
    return idx
  },
  enumerable: true
})

//Advances iterator to next element in list
iproto.next = function() {
  var stack = this._stack
  if(stack.length === 0) {
    return
  }
  var n = stack[stack.length-1]
  if(n.right) {
    n = n.right
    while(n) {
      stack.push(n)
      n = n.left
    }
  } else {
    stack.pop()
    while(stack.length > 0 && stack[stack.length-1].right === n) {
      n = stack[stack.length-1]
      stack.pop()
    }
  }
}

//Checks if iterator is at end of tree
Object.defineProperty(iproto, "hasNext", {
  get: function() {
    var stack = this._stack
    if(stack.length === 0) {
      return false
    }
    if(stack[stack.length-1].right) {
      return true
    }
    for(var s=stack.length-1; s>0; --s) {
      if(stack[s-1].left === stack[s]) {
        return true
      }
    }
    return false
  }
})

//Update value
iproto.update = function(value) {
  var stack = this._stack
  if(stack.length === 0) {
    throw new Error("Can't update empty node!")
  }
  var cstack = new Array(stack.length)
  var n = stack[stack.length-1]
  cstack[cstack.length-1] = new RBNode(n._color, n.key, value, n.left, n.right, n._count)
  for(var i=stack.length-2; i>=0; --i) {
    n = stack[i]
    if(n.left === stack[i+1]) {
      cstack[i] = new RBNode(n._color, n.key, n.value, cstack[i+1], n.right, n._count)
    } else {
      cstack[i] = new RBNode(n._color, n.key, n.value, n.left, cstack[i+1], n._count)
    }
  }
  return new RedBlackTree(this.tree._compare, cstack[0])
}

//Moves iterator backward one element
iproto.prev = function() {
  var stack = this._stack
  if(stack.length === 0) {
    return
  }
  var n = stack[stack.length-1]
  if(n.left) {
    n = n.left
    while(n) {
      stack.push(n)
      n = n.right
    }
  } else {
    stack.pop()
    while(stack.length > 0 && stack[stack.length-1].left === n) {
      n = stack[stack.length-1]
      stack.pop()
    }
  }
}

//Checks if iterator is at start of tree
Object.defineProperty(iproto, "hasPrev", {
  get: function() {
    var stack = this._stack
    if(stack.length === 0) {
      return false
    }
    if(stack[stack.length-1].left) {
      return true
    }
    for(var s=stack.length-1; s>0; --s) {
      if(stack[s-1].right === stack[s]) {
        return true
      }
    }
    return false
  }
})

//Default comparison function
function defaultCompare(a, b) {
  if(a < b) {
    return -1
  }
  if(a > b) {
    return 1
  }
  return 0
}

//Build a tree
function createRBTree(compare) {
  return new RedBlackTree(compare || defaultCompare, null)
}

/***/ }),

/***/ "../../node_modules/ieee754/index.js":
/*!************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/ieee754/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "../../node_modules/immediate/lib/index.js":
/*!******************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var types = [
  __webpack_require__(/*! ./nextTick */ "../../node_modules/immediate/lib/nextTick.js"),
  __webpack_require__(/*! ./mutation.js */ "../../node_modules/immediate/lib/mutation.js"),
  __webpack_require__(/*! ./messageChannel */ "../../node_modules/immediate/lib/messageChannel.js"),
  __webpack_require__(/*! ./stateChange */ "../../node_modules/immediate/lib/stateChange.js"),
  __webpack_require__(/*! ./timeout */ "../../node_modules/immediate/lib/timeout.js")
];
var draining;
var currentQueue;
var queueIndex = -1;
var queue = [];
var scheduled = false;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    nextTick();
  }
}

//named nextTick for less confusing stack traces
function nextTick() {
  if (draining) {
    return;
  }
  scheduled = false;
  draining = true;
  var len = queue.length;
  var timeout = setTimeout(cleanUpNextTick);
  while (len) {
    currentQueue = queue;
    queue = [];
    while (currentQueue && ++queueIndex < len) {
      currentQueue[queueIndex].run();
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  queueIndex = -1;
  draining = false;
  clearTimeout(timeout);
}
var scheduleDrain;
var i = -1;
var len = types.length;
while (++i < len) {
  if (types[i] && types[i].test && types[i].test()) {
    scheduleDrain = types[i].install(nextTick);
    break;
  }
}
// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  var fun = this.fun;
  var array = this.array;
  switch (array.length) {
  case 0:
    return fun();
  case 1:
    return fun(array[0]);
  case 2:
    return fun(array[0], array[1]);
  case 3:
    return fun(array[0], array[1], array[2]);
  default:
    return fun.apply(null, array);
  }

};
module.exports = immediate;
function immediate(task) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(task, args));
  if (!scheduled && !draining) {
    scheduled = true;
    scheduleDrain();
  }
}


/***/ }),

/***/ "../../node_modules/immediate/lib/messageChannel.js":
/*!***************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/messageChannel.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.test = function () {
  if (global.setImmediate) {
    // we can only get here in IE10
    // which doesn't handel postMessage well
    return false;
  }
  return typeof global.MessageChannel !== 'undefined';
};

exports.install = function (func) {
  var channel = new global.MessageChannel();
  channel.port1.onmessage = func;
  return function () {
    channel.port2.postMessage(0);
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/mutation.js":
/*!*********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/mutation.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
//based off rsvp https://github.com/tildeio/rsvp.js
//license https://github.com/tildeio/rsvp.js/blob/master/LICENSE
//https://github.com/tildeio/rsvp.js/blob/master/lib/rsvp/asap.js

var Mutation = global.MutationObserver || global.WebKitMutationObserver;

exports.test = function () {
  return Mutation;
};

exports.install = function (handle) {
  var called = 0;
  var observer = new Mutation(handle);
  var element = global.document.createTextNode('');
  observer.observe(element, {
    characterData: true
  });
  return function () {
    element.data = (called = ++called % 2);
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/nextTick.js":
/*!*********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/nextTick.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
exports.test = function () {
  // Don't get fooled by e.g. browserify environments.
  return (typeof process !== 'undefined') && !process.browser;
};

exports.install = function (func) {
  return function () {
    process.nextTick(func);
  };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/stateChange.js":
/*!************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/stateChange.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.test = function () {
  return 'document' in global && 'onreadystatechange' in global.document.createElement('script');
};

exports.install = function (handle) {
  return function () {

    // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
    // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
    var scriptEl = global.document.createElement('script');
    scriptEl.onreadystatechange = function () {
      handle();

      scriptEl.onreadystatechange = null;
      scriptEl.parentNode.removeChild(scriptEl);
      scriptEl = null;
    };
    global.document.documentElement.appendChild(scriptEl);

    return handle;
  };
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/immediate/lib/timeout.js":
/*!********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/immediate/lib/timeout.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.test = function () {
  return true;
};

exports.install = function (t) {
  return function () {
    setTimeout(t, 0);
  };
};

/***/ }),

/***/ "../../node_modules/inherits/inherits_browser.js":
/*!************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/inherits/inherits_browser.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../../node_modules/ltgt/index.js":
/*!*********************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/ltgt/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {
exports.compare = function (a, b) {

  if(Buffer.isBuffer(a)) {
    var l = Math.min(a.length, b.length)
    for(var i = 0; i < l; i++) {
      var cmp = a[i] - b[i]
      if(cmp) return cmp
    }
    return a.length - b.length
  }

  return a < b ? -1 : a > b ? 1 : 0
}

// to be compatible with the current abstract-leveldown tests
// nullish or empty strings.
// I could use !!val but I want to permit numbers and booleans,
// if possible.

function isDef (val) {
  return val !== undefined && val !== ''
}

function has (range, name) {
  return Object.hasOwnProperty.call(range, name)
}

function hasKey(range, name) {
  return Object.hasOwnProperty.call(range, name) && name
}

var lowerBoundKey = exports.lowerBoundKey = function (range) {
    return (
       hasKey(range, 'gt')
    || hasKey(range, 'gte')
    || hasKey(range, 'min')
    || (range.reverse ? hasKey(range, 'end') : hasKey(range, 'start'))
    || undefined
    )
}

var lowerBound = exports.lowerBound = function (range, def) {
  var k = lowerBoundKey(range)
  return k ? range[k] : def
}

var lowerBoundInclusive = exports.lowerBoundInclusive = function (range) {
  return has(range, 'gt') ? false : true
}

var upperBoundInclusive = exports.upperBoundInclusive =
  function (range) {
    return (has(range, 'lt') /*&& !range.maxEx*/) ? false : true
  }

var lowerBoundExclusive = exports.lowerBoundExclusive =
  function (range) {
    return !lowerBoundInclusive(range)
  }

var upperBoundExclusive = exports.upperBoundExclusive =
  function (range) {
    return !upperBoundInclusive(range)
  }

var upperBoundKey = exports.upperBoundKey = function (range) {
    return (
       hasKey(range, 'lt')
    || hasKey(range, 'lte')
    || hasKey(range, 'max')
    || (range.reverse ? hasKey(range, 'start') : hasKey(range, 'end'))
    || undefined
    )
}

var upperBound = exports.upperBound = function (range, def) {
  var k = upperBoundKey(range)
  return k ? range[k] : def
}

exports.start = function (range, def) {
  return range.reverse ? upperBound(range, def) : lowerBound(range, def)
}
exports.end = function (range, def) {
  return range.reverse ? lowerBound(range, def) : upperBound(range, def)
}
exports.startInclusive = function (range) {
  return (
    range.reverse
  ? upperBoundInclusive(range)
  : lowerBoundInclusive(range)
  )
}
exports.endInclusive = function (range) {
  return (
    range.reverse
  ? lowerBoundInclusive(range)
  : upperBoundInclusive(range)
  )
}

function id (e) { return e }

exports.toLtgt = function (range, _range, map, lower, upper) {
  _range = _range || {}
  map = map || id
  var defaults = arguments.length > 3
  var lb = exports.lowerBoundKey(range)
  var ub = exports.upperBoundKey(range)
  if(lb) {
    if(lb === 'gt') _range.gt = map(range.gt, false)
    else            _range.gte = map(range[lb], false)
  }
  else if(defaults)
    _range.gte = map(lower, false)

  if(ub) {
    if(ub === 'lt') _range.lt = map(range.lt, true)
    else            _range.lte = map(range[ub], true)
  }
  else if(defaults)
    _range.lte = map(upper, true)

  if(range.reverse != null)
    _range.reverse = !!range.reverse

  //if range was used mutably
  //(in level-sublevel it's part of an options object
  //that has more properties on it.)
  if(has(_range, 'max'))   delete _range.max
  if(has(_range, 'min'))   delete _range.min
  if(has(_range, 'start')) delete _range.start
  if(has(_range, 'end'))   delete _range.end

  return _range
}

exports.contains = function (range, key, compare) {
  compare = compare || exports.compare

  var lb = lowerBound(range)
  if(isDef(lb)) {
    var cmp = compare(key, lb)
    if(cmp < 0 || (cmp === 0 && lowerBoundExclusive(range)))
      return false
  }

  var ub = upperBound(range)
  if(isDef(ub)) {
    var cmp = compare(key, ub)
    if(cmp > 0 || (cmp === 0) && upperBoundExclusive(range))
      return false
  }

  return true
}

exports.filter = function (range, compare) {
  return function (key) {
    return exports.contains(range, key, compare)
  }
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../buffer/index.js */ "../../node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../node_modules/memdown/immediate-browser.js":
/*!************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/memdown/immediate-browser.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! immediate */ "../../node_modules/immediate/lib/index.js")


/***/ }),

/***/ "../../node_modules/memdown/memdown.js":
/*!**************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/memdown/memdown.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__(/*! inherits */ "../../node_modules/inherits/inherits_browser.js")
var AbstractLevelDOWN = __webpack_require__(/*! abstract-leveldown */ "../../node_modules/abstract-leveldown/index.js").AbstractLevelDOWN
var AbstractIterator = __webpack_require__(/*! abstract-leveldown */ "../../node_modules/abstract-leveldown/index.js").AbstractIterator
var ltgt = __webpack_require__(/*! ltgt */ "../../node_modules/ltgt/index.js")
var createRBT = __webpack_require__(/*! functional-red-black-tree */ "../../node_modules/functional-red-black-tree/rbtree.js")
var Buffer = __webpack_require__(/*! safe-buffer */ "../../node_modules/safe-buffer/index.js").Buffer

// In Node, use global.setImmediate. In the browser, use a consistent
// microtask library to give consistent microtask experience to all browsers
var setImmediate = __webpack_require__(/*! ./immediate */ "../../node_modules/memdown/immediate-browser.js")

function gt (value) {
  return ltgt.compare(value, this._upperBound) > 0
}

function gte (value) {
  return ltgt.compare(value, this._upperBound) >= 0
}

function lt (value) {
  return ltgt.compare(value, this._upperBound) < 0
}

function lte (value) {
  return ltgt.compare(value, this._upperBound) <= 0
}

function MemIterator (db, options) {
  AbstractIterator.call(this, db)
  this._limit = options.limit

  if (this._limit === -1) this._limit = Infinity

  var tree = db._store

  this.keyAsBuffer = options.keyAsBuffer !== false
  this.valueAsBuffer = options.valueAsBuffer !== false
  this._reverse = options.reverse
  this._options = options
  this._done = 0

  if (!this._reverse) {
    this._incr = 'next'
    this._lowerBound = ltgt.lowerBound(options)
    this._upperBound = ltgt.upperBound(options)

    if (typeof this._lowerBound === 'undefined') {
      this._tree = tree.begin
    } else if (ltgt.lowerBoundInclusive(options)) {
      this._tree = tree.ge(this._lowerBound)
    } else {
      this._tree = tree.gt(this._lowerBound)
    }

    if (this._upperBound) {
      if (ltgt.upperBoundInclusive(options)) {
        this._test = lte
      } else {
        this._test = lt
      }
    }
  } else {
    this._incr = 'prev'
    this._lowerBound = ltgt.upperBound(options)
    this._upperBound = ltgt.lowerBound(options)

    if (typeof this._lowerBound === 'undefined') {
      this._tree = tree.end
    } else if (ltgt.upperBoundInclusive(options)) {
      this._tree = tree.le(this._lowerBound)
    } else {
      this._tree = tree.lt(this._lowerBound)
    }

    if (this._upperBound) {
      if (ltgt.lowerBoundInclusive(options)) {
        this._test = gte
      } else {
        this._test = gt
      }
    }
  }
}

inherits(MemIterator, AbstractIterator)

MemIterator.prototype._next = function (callback) {
  var key
  var value

  if (this._done++ >= this._limit) return setImmediate(callback)
  if (!this._tree.valid) return setImmediate(callback)

  key = this._tree.key
  value = this._tree.value

  if (!this._test(key)) return setImmediate(callback)

  if (this.keyAsBuffer && !Buffer.isBuffer(key)) {
    key = Buffer.from(String(key))
  }

  if (this.valueAsBuffer && !Buffer.isBuffer(value)) {
    value = Buffer.from(String(value))
  }

  this._tree[this._incr]()

  setImmediate(function callNext () {
    callback(null, key, value)
  })
}

MemIterator.prototype._test = function () {
  return true
}

function MemDOWN () {
  if (!(this instanceof MemDOWN)) return new MemDOWN()

  AbstractLevelDOWN.call(this, '')

  this._store = createRBT(ltgt.compare)
}

inherits(MemDOWN, AbstractLevelDOWN)

MemDOWN.prototype._open = function (options, callback) {
  var self = this
  setImmediate(function callNext () {
    callback(null, self)
  })
}

MemDOWN.prototype._serializeKey = function (key) {
  return key
}

MemDOWN.prototype._serializeValue = function (value) {
  return value == null ? '' : value
}

MemDOWN.prototype._put = function (key, value, options, callback) {
  var iter = this._store.find(key)

  if (iter.valid) {
    this._store = iter.update(value)
  } else {
    this._store = this._store.insert(key, value)
  }

  setImmediate(callback)
}

MemDOWN.prototype._get = function (key, options, callback) {
  var value = this._store.get(key)

  if (typeof value === 'undefined') {
    // 'NotFound' error, consistent with LevelDOWN API
    return setImmediate(function callNext () {
      callback(new Error('NotFound'))
    })
  }

  if (options.asBuffer !== false && !Buffer.isBuffer(value)) {
    value = Buffer.from(String(value))
  }

  setImmediate(function callNext () {
    callback(null, value)
  })
}

MemDOWN.prototype._del = function (key, options, callback) {
  this._store = this._store.remove(key)
  setImmediate(callback)
}

MemDOWN.prototype._batch = function (array, options, callback) {
  var i = -1
  var key
  var value
  var iter
  var len = array.length
  var tree = this._store

  while (++i < len) {
    key = array[i].key
    iter = tree.find(key)

    if (array[i].type === 'put') {
      value = array[i].value
      tree = iter.valid ? iter.update(value) : tree.insert(key, value)
    } else {
      tree = iter.remove()
    }
  }

  this._store = tree

  setImmediate(callback)
}

MemDOWN.prototype._iterator = function (options) {
  return new MemIterator(this, options)
}

module.exports = MemDOWN.default = MemDOWN


/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!**************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/process/browser.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/safe-buffer/index.js":
/*!****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/safe-buffer/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "../../node_modules/buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


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

/***/ "../../node_modules/xtend/immutable.js":
/*!**************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/xtend/immutable.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: memDownCache, MemCacheMixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _memdownCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memdownCache */ "./src/memdownCache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memDownCache", function() { return _memdownCache__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _memcache_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memcache.mixins */ "./src/memcache.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemCacheMixins", function() { return _memcache_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/memcache.mixins.js":
/*!********************************!*\
  !*** ./src/memcache.mixins.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const MemCacheMixins = BaseClass => class extends BaseClass {
  /**
   * This methods return summary about items of the current memcache 
   * @returns
   */
  async memCacheSummary() {
    return await this.memCache.getItemList();
  }

  set MemCache(memCache) {
    this.memCache = memCache;
  }

  get MemCache() {
    return this.memCache;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (MemCacheMixins);

/***/ }),

/***/ "./src/memdownCache.js":
/*!*****************************!*\
  !*** ./src/memdownCache.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _memorizing_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./memorizing.mixins */ "./src/memorizing.mixins.js");



/**
 * This MemdownCache provide memcache implement based on 
 * [memdown](https://www.npmjs.com/package/memdown)
 * { mixWith: [ MemorizingMixins ] }
 * @class MemoryCache
 * @extends BaseMemCache
 */

class MemdownCache extends causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_1__["Store"], [_memorizing_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
  constructor() {
    super();
    this.connect();
  }
  /**
   * Connect to database, this function shall be call when construct instance
   * @memberof MemdownCache
   */


  connect() {
    let memdown = __webpack_require__(/*! memdown */ "../../node_modules/memdown/memdown.js");

    this.store = this.levelup(memdown());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new MemdownCache());

/***/ }),

/***/ "./src/memorizing.mixins.js":
/*!**********************************!*\
  !*** ./src/memorizing.mixins.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This MemorizingMixins class is a mixins class for implement memory methods
 * @class MemorizingMixins
 * @experiment
 * @extends BaseMemCacheClass
 */
const MemorizingMixins = BaseMemCacheClass => class extends BaseMemCacheClass {
  /**
   * Read content from 
   * @experiment
   * @param { String|Number } memorySlotIndex - memory slot index
   * @returns
   */
  async read(memorySlotIndex) {
    const GetFromMemory = async memorySlotIndex => {
      try {
        let data = await this.getItem(memorySlotIndex);
        return Object.values(data)[0];
      } catch (err) {
        return null;
      }
    };

    return await GetFromMemory(memorySlotIndex);
  }
  /**
   * 
   * @param { String|Number } memorySlotIndex - positive number for memory slot
   * @param { Array } memory value
   * @returns { Promise } memory slot index value
   */


  async write(memorySlotIndex, value) {
    return await this.setItem(memorySlotIndex, value);
  }
  /**
   *
   *
   * @param {*} slotIdxs
   * @returns
   */


  async recall(slotIdxs) {
    let memory = [];

    for (let slotIdx of slotIdxs) {
      memory.push((await this.read(slotIdx)));
    }

    return memory;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (MemorizingMixins);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWNoYWluZWQtYmF0Y2guanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtbGV2ZWxkb3duLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvZnVuY3Rpb25hbC1yZWQtYmxhY2stdHJlZS9yYnRyZWUuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvbWVzc2FnZUNoYW5uZWwuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL211dGF0aW9uLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9uZXh0VGljay5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvc3RhdGVDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3RpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvbHRndC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL21lbWRvd24vaW1tZWRpYXRlLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9tZW1kb3duL21lbWRvd24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbWNhY2hlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvLi9zcmMvbWVtY2FjaGUubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvLi9zcmMvbWVtZG93bkNhY2hlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvLi9zcmMvbWVtb3JpemluZy5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1jYWNoZS9leHRlcm5hbCBcImNhdXNhbC1uZXQuY29yZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtY2FjaGUvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiTWVtQ2FjaGVNaXhpbnMiLCJCYXNlQ2xhc3MiLCJtZW1DYWNoZVN1bW1hcnkiLCJtZW1DYWNoZSIsImdldEl0ZW1MaXN0IiwiTWVtQ2FjaGUiLCJNZW1kb3duQ2FjaGUiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlTWVtQ2FjaGUiLCJNZW1vcml6aW5nTWl4aW5zIiwiY29uc3RydWN0b3IiLCJjb25uZWN0IiwibWVtZG93biIsInJlcXVpcmUiLCJzdG9yZSIsImxldmVsdXAiLCJCYXNlTWVtQ2FjaGVDbGFzcyIsInJlYWQiLCJtZW1vcnlTbG90SW5kZXgiLCJHZXRGcm9tTWVtb3J5IiwiZGF0YSIsImdldEl0ZW0iLCJPYmplY3QiLCJ2YWx1ZXMiLCJlcnIiLCJ3cml0ZSIsInZhbHVlIiwic2V0SXRlbSIsInJlY2FsbCIsInNsb3RJZHhzIiwibWVtb3J5Iiwic2xvdElkeCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsd0JBQXdCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWE7O0FBRWpEOztBQUVBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3ZGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3ZEQTs7QUFFQSxZQUFZLG1CQUFPLENBQUMsb0RBQU87QUFDM0IsdUJBQXVCLG1CQUFPLENBQUMsdUZBQXFCO0FBQ3BELDJCQUEyQixtQkFBTyxDQUFDLGlHQUEwQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxhQUFhOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG9DQUFvQyxhQUFhOztBQUVqRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLGtDQUFrQztBQUNsRTs7QUFFQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsYUFBYTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG9DQUFvQyxhQUFhOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUIsc0NBQXNDOztBQUV0QyxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELGFBQWE7O0FBRTdEOztBQUVBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxhQUFhO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN0UUEsNEJBQTRCLG1CQUFPLENBQUMseUZBQXNCO0FBQzFELDJCQUEyQixtQkFBTyxDQUFDLHVGQUFxQjtBQUN4RCwrQkFBK0IsbUJBQU8sQ0FBQyxpR0FBMEI7Ozs7Ozs7Ozs7Ozs7QUNGckQ7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsd0RBQVc7QUFDaEMsY0FBYyxtQkFBTyxDQUFDLG9EQUFTO0FBQy9CLGNBQWMsbUJBQU8sQ0FBQyx3RUFBUzs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBbUQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLFlBQVk7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNXZEQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixNQUFNO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDbitCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLFdBQVc7O0FBRW5CO0FBQ0E7QUFDQSxRQUFRLFVBQVU7O0FBRWxCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRmE7QUFDYjtBQUNBLEVBQUUsbUJBQU8sQ0FBQyxnRUFBWTtBQUN0QixFQUFFLG1CQUFPLENBQUMsbUVBQWU7QUFDekIsRUFBRSxtQkFBTyxDQUFDLDRFQUFrQjtBQUM1QixFQUFFLG1CQUFPLENBQUMsc0VBQWU7QUFDekIsRUFBRSxtQkFBTyxDQUFDLDhEQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRkEsOENBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7O0FDakJBLDhDQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7OztBQ3JCQSwrQ0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVkEsOENBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7QUN2QmE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xLQSxpQkFBaUIsbUJBQU8sQ0FBQyw0REFBVzs7Ozs7Ozs7Ozs7O0FDQXBDLGVBQWUsbUJBQU8sQ0FBQyxpRUFBVTtBQUNqQyx3QkFBd0IsbUJBQU8sQ0FBQywwRUFBb0I7QUFDcEQsdUJBQXVCLG1CQUFPLENBQUMsMEVBQW9CO0FBQ25ELFdBQVcsbUJBQU8sQ0FBQyw4Q0FBTTtBQUN6QixnQkFBZ0IsbUJBQU8sQ0FBQyx5RkFBMkI7QUFDbkQsYUFBYSxtQkFBTyxDQUFDLDREQUFhOztBQUVsQztBQUNBO0FBQ0EsbUJBQW1CLG1CQUFPLENBQUMsb0VBQWE7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQy9NQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLGtEQUFRO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3REE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7QUNuQkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUFBLE1BQU1BLGNBQWMsR0FBSUMsU0FBRCxJQUFjLGNBQWNBLFNBQWQsQ0FBdUI7QUFDeEQ7Ozs7QUFJQSxRQUFNQyxlQUFOLEdBQXVCO0FBQ25CLFdBQU8sTUFBTSxLQUFLQyxRQUFMLENBQWNDLFdBQWQsRUFBYjtBQUNIOztBQUVELE1BQUlDLFFBQUosQ0FBYUYsUUFBYixFQUFzQjtBQUNsQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIOztBQUVELE1BQUlFLFFBQUosR0FBYztBQUNWLFdBQU8sS0FBS0YsUUFBWjtBQUNIOztBQWZ1RCxDQUE1RDs7QUFpQmVILDZFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFPQSxNQUFNTSxZQUFOLFNBQTJCQyx5REFBUSxDQUFDQyxPQUFULENBQWtCQyxxREFBbEIsRUFDdkIsQ0FBRUMsMERBQUYsQ0FEdUIsQ0FBM0IsQ0FDeUI7QUFDckJDLGFBQVcsR0FBRTtBQUNUO0FBQ0EsU0FBS0MsT0FBTDtBQUNIO0FBQ0Q7Ozs7OztBQUlBQSxTQUFPLEdBQUU7QUFDTCxRQUFJQyxPQUFPLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBckI7O0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEtBQUtDLE9BQUwsQ0FBYUgsT0FBTyxFQUFwQixDQUFiO0FBQ0g7O0FBWm9COztBQWVWLG1FQUFJUCxZQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7Ozs7OztBQU1BLE1BQU1JLGdCQUFnQixHQUFJTyxpQkFBRCxJQUFzQixjQUFjQSxpQkFBZCxDQUErQjtBQUMxRTs7Ozs7O0FBTUEsUUFBTUMsSUFBTixDQUFXQyxlQUFYLEVBQTJCO0FBQ3ZCLFVBQU1DLGFBQWEsR0FBRyxNQUFPRCxlQUFQLElBQXlCO0FBQzNDLFVBQUc7QUFDQyxZQUFJRSxJQUFJLEdBQUcsTUFBTSxLQUFLQyxPQUFMLENBQWFILGVBQWIsQ0FBakI7QUFDQSxlQUFPSSxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsSUFBZCxFQUFvQixDQUFwQixDQUFQO0FBQ0gsT0FIRCxDQUlBLE9BQU1JLEdBQU4sRUFBVTtBQUNOLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FSRDs7QUFTQSxXQUFPLE1BQU1MLGFBQWEsQ0FBQ0QsZUFBRCxDQUExQjtBQUNIO0FBQ0Q7Ozs7Ozs7O0FBTUEsUUFBTU8sS0FBTixDQUFZUCxlQUFaLEVBQTZCUSxLQUE3QixFQUFtQztBQUMvQixXQUFPLE1BQU0sS0FBS0MsT0FBTCxDQUFhVCxlQUFiLEVBQThCUSxLQUE5QixDQUFiO0FBQ0g7QUFDRDs7Ozs7Ozs7QUFNQSxRQUFNRSxNQUFOLENBQWFDLFFBQWIsRUFBc0I7QUFDbEIsUUFBSUMsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsU0FBSSxJQUFJQyxPQUFSLElBQW1CRixRQUFuQixFQUE0QjtBQUN4QkMsWUFBTSxDQUFDRSxJQUFQLEVBQVksTUFBTSxLQUFLZixJQUFMLENBQVVjLE9BQVYsQ0FBbEI7QUFDSDs7QUFDRCxXQUFPRCxNQUFQO0FBQ0g7O0FBeEN5RSxDQUE5RTs7QUEwQ2VyQiwrRUFBZixFOzs7Ozs7Ozs7OztBQ2hEQSw2RDs7Ozs7Ozs7Ozs7QUNBQSw4RCIsImZpbGUiOiJAY2F1c2FsTmV0L21lbWNhY2hlLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC5jb3JlXCIsIFwiY2F1c2FsLW5ldC51dGlsc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L21lbWNhY2hlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tZW1jYWNoZVwiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQudXRpbHNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBSb2QgVmFnZywgTUlUIExpY2Vuc2UgKi9cblxuZnVuY3Rpb24gQWJzdHJhY3RDaGFpbmVkQmF0Y2ggKGRiKSB7XG4gIHRoaXMuX2RiID0gZGJcbiAgdGhpcy5fb3BlcmF0aW9ucyA9IFtdXG4gIHRoaXMuX3dyaXR0ZW4gPSBmYWxzZVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuX3NlcmlhbGl6ZUtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX2RiLl9zZXJpYWxpemVLZXkoa2V5KVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuX3NlcmlhbGl6ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9kYi5fc2VyaWFsaXplVmFsdWUodmFsdWUpXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fY2hlY2tXcml0dGVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fd3JpdHRlbikge1xuICAgIHRocm93IG5ldyBFcnJvcignd3JpdGUoKSBhbHJlYWR5IGNhbGxlZCBvbiB0aGlzIGJhdGNoJylcbiAgfVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdGhpcy5fY2hlY2tXcml0dGVuKClcblxuICB2YXIgZXJyID0gdGhpcy5fZGIuX2NoZWNrS2V5KGtleSwgJ2tleScpXG4gIGlmIChlcnIpIHsgdGhyb3cgZXJyIH1cblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuICB2YWx1ZSA9IHRoaXMuX3NlcmlhbGl6ZVZhbHVlKHZhbHVlKVxuXG4gIHRoaXMuX3B1dChrZXksIHZhbHVlKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fcHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdGhpcy5fb3BlcmF0aW9ucy5wdXNoKHsgdHlwZTogJ3B1dCcsIGtleToga2V5LCB2YWx1ZTogdmFsdWUgfSlcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLmRlbCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGhpcy5fY2hlY2tXcml0dGVuKClcblxuICB2YXIgZXJyID0gdGhpcy5fZGIuX2NoZWNrS2V5KGtleSwgJ2tleScpXG4gIGlmIChlcnIpIHsgdGhyb3cgZXJyIH1cblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuICB0aGlzLl9kZWwoa2V5KVxuXG4gIHJldHVybiB0aGlzXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fZGVsID0gZnVuY3Rpb24gKGtleSkge1xuICB0aGlzLl9vcGVyYXRpb25zLnB1c2goeyB0eXBlOiAnZGVsJywga2V5OiBrZXkgfSlcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9jaGVja1dyaXR0ZW4oKVxuICB0aGlzLl9vcGVyYXRpb25zID0gW11cbiAgdGhpcy5fY2xlYXIoKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fY2xlYXIgPSBmdW5jdGlvbiBub29wICgpIHt9XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICB0aGlzLl9jaGVja1dyaXR0ZW4oKVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd3cml0ZSgpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICB0aGlzLl93cml0dGVuID0gdHJ1ZVxuXG4gIC8vIEB0cy1pZ25vcmVcbiAgaWYgKHR5cGVvZiB0aGlzLl93cml0ZSA9PT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gdGhpcy5fd3JpdGUoY2FsbGJhY2spIH1cblxuICBpZiAodHlwZW9mIHRoaXMuX2RiLl9iYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0aGlzLl9kYi5fYmF0Y2godGhpcy5fb3BlcmF0aW9ucywgb3B0aW9ucywgY2FsbGJhY2spXG4gIH1cblxuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0Q2hhaW5lZEJhdGNoXG4iLCIvKiBDb3B5cmlnaHQgKGMpIDIwMTcgUm9kIFZhZ2csIE1JVCBMaWNlbnNlICovXG5cbmZ1bmN0aW9uIEFic3RyYWN0SXRlcmF0b3IgKGRiKSB7XG4gIHRoaXMuZGIgPSBkYlxuICB0aGlzLl9lbmRlZCA9IGZhbHNlXG4gIHRoaXMuX25leHRpbmcgPSBmYWxzZVxufVxuXG5BYnN0cmFjdEl0ZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25leHQoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIGlmIChzZWxmLl9lbmRlZCkge1xuICAgIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIG5ldyBFcnJvcignY2Fubm90IGNhbGwgbmV4dCgpIGFmdGVyIGVuZCgpJykpXG4gICAgcmV0dXJuIHNlbGZcbiAgfVxuXG4gIGlmIChzZWxmLl9uZXh0aW5nKSB7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgbmV3IEVycm9yKCdjYW5ub3QgY2FsbCBuZXh0KCkgYmVmb3JlIHByZXZpb3VzIG5leHQoKSBoYXMgY29tcGxldGVkJykpXG4gICAgcmV0dXJuIHNlbGZcbiAgfVxuXG4gIHNlbGYuX25leHRpbmcgPSB0cnVlXG4gIHNlbGYuX25leHQoZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuX25leHRpbmcgPSBmYWxzZVxuICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgfSlcblxuICByZXR1cm4gc2VsZlxufVxuXG5BYnN0cmFjdEl0ZXJhdG9yLnByb3RvdHlwZS5fbmV4dCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdEl0ZXJhdG9yLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZW5kKCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAodGhpcy5fZW5kZWQpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgbmV3IEVycm9yKCdlbmQoKSBhbHJlYWR5IGNhbGxlZCBvbiBpdGVyYXRvcicpKVxuICB9XG5cbiAgdGhpcy5fZW5kZWQgPSB0cnVlXG4gIHRoaXMuX2VuZChjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RJdGVyYXRvci5wcm90b3R5cGUuX2VuZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0SXRlcmF0b3JcbiIsIi8qIENvcHlyaWdodCAoYykgMjAxNyBSb2QgVmFnZywgTUlUIExpY2Vuc2UgKi9cblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIEFic3RyYWN0SXRlcmF0b3IgPSByZXF1aXJlKCcuL2Fic3RyYWN0LWl0ZXJhdG9yJylcbnZhciBBYnN0cmFjdENoYWluZWRCYXRjaCA9IHJlcXVpcmUoJy4vYWJzdHJhY3QtY2hhaW5lZC1iYXRjaCcpXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG52YXIgcmFuZ2VPcHRpb25zID0gJ3N0YXJ0IGVuZCBndCBndGUgbHQgbHRlJy5zcGxpdCgnICcpXG5cbmZ1bmN0aW9uIEFic3RyYWN0TGV2ZWxET1dOIChsb2NhdGlvbikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGggfHwgbG9jYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29uc3RydWN0b3IgcmVxdWlyZXMgYXQgbGVhc3QgYSBsb2NhdGlvbiBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY29uc3RydWN0b3IgcmVxdWlyZXMgYSBsb2NhdGlvbiBzdHJpbmcgYXJndW1lbnQnKVxuICB9XG5cbiAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uXG4gIHRoaXMuc3RhdHVzID0gJ25ldydcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBvbGRTdGF0dXMgPSB0aGlzLnN0YXR1c1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ29wZW4oKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICBvcHRpb25zLmNyZWF0ZUlmTWlzc2luZyA9IG9wdGlvbnMuY3JlYXRlSWZNaXNzaW5nICE9PSBmYWxzZVxuICBvcHRpb25zLmVycm9ySWZFeGlzdHMgPSAhIW9wdGlvbnMuZXJyb3JJZkV4aXN0c1xuXG4gIHRoaXMuc3RhdHVzID0gJ29wZW5pbmcnXG4gIHRoaXMuX29wZW4ob3B0aW9ucywgZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHNlbGYuc3RhdHVzID0gb2xkU3RhdHVzXG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyKVxuICAgIH1cbiAgICBzZWxmLnN0YXR1cyA9ICdvcGVuJ1xuICAgIGNhbGxiYWNrKClcbiAgfSlcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9vcGVuID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIG9sZFN0YXR1cyA9IHRoaXMuc3RhdHVzXG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xvc2UoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIHRoaXMuc3RhdHVzID0gJ2Nsb3NpbmcnXG4gIHRoaXMuX2Nsb3NlKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBzZWxmLnN0YXR1cyA9IG9sZFN0YXR1c1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICB9XG4gICAgc2VsZi5zdGF0dXMgPSAnY2xvc2VkJ1xuICAgIGNhbGxiYWNrKClcbiAgfSlcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9jbG9zZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7IGNhbGxiYWNrID0gb3B0aW9ucyB9XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2V0KCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICB2YXIgZXJyID0gdGhpcy5fY2hlY2tLZXkoa2V5LCAna2V5JylcbiAgaWYgKGVycikgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIGVycilcblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICBvcHRpb25zLmFzQnVmZmVyID0gb3B0aW9ucy5hc0J1ZmZlciAhPT0gZmFsc2VcblxuICB0aGlzLl9nZXQoa2V5LCBvcHRpb25zLCBjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9nZXQgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgY2FsbGJhY2sobmV3IEVycm9yKCdOb3RGb3VuZCcpKSB9KVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3B1dCgpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgdmFyIGVyciA9IHRoaXMuX2NoZWNrS2V5KGtleSwgJ2tleScpXG4gIGlmIChlcnIpIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBlcnIpXG5cbiAga2V5ID0gdGhpcy5fc2VyaWFsaXplS2V5KGtleSlcbiAgdmFsdWUgPSB0aGlzLl9zZXJpYWxpemVWYWx1ZSh2YWx1ZSlcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7IG9wdGlvbnMgPSB7fSB9XG5cbiAgdGhpcy5fcHV0KGtleSwgdmFsdWUsIG9wdGlvbnMsIGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX3B1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuZGVsID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7IGNhbGxiYWNrID0gb3B0aW9ucyB9XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignZGVsKCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICB2YXIgZXJyID0gdGhpcy5fY2hlY2tLZXkoa2V5LCAna2V5JylcbiAgaWYgKGVycikgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIGVycilcblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICB0aGlzLl9kZWwoa2V5LCBvcHRpb25zLCBjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9kZWwgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuYmF0Y2ggPSBmdW5jdGlvbiAoYXJyYXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgeyByZXR1cm4gdGhpcy5fY2hhaW5lZEJhdGNoKCkgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuXG4gIGlmICh0eXBlb2YgYXJyYXkgPT09ICdmdW5jdGlvbicpIHsgY2FsbGJhY2sgPSBhcnJheSB9XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignYmF0Y2goYXJyYXkpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoJ2JhdGNoKGFycmF5KSByZXF1aXJlcyBhbiBhcnJheSBhcmd1bWVudCcpKVxuICB9XG5cbiAgaWYgKCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgeyBvcHRpb25zID0ge30gfVxuXG4gIHZhciBzZXJpYWxpemVkID0gbmV3IEFycmF5KGFycmF5Lmxlbmd0aClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHR5cGVvZiBhcnJheVtpXSAhPT0gJ29iamVjdCcgfHwgYXJyYXlbaV0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoJ2JhdGNoKGFycmF5KSBlbGVtZW50IG11c3QgYmUgYW4gb2JqZWN0IGFuZCBub3QgYG51bGxgJykpXG4gICAgfVxuXG4gICAgdmFyIGUgPSB4dGVuZChhcnJheVtpXSlcblxuICAgIGlmIChlLnR5cGUgIT09ICdwdXQnICYmIGUudHlwZSAhPT0gJ2RlbCcpIHtcbiAgICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoXCJgdHlwZWAgbXVzdCBiZSAncHV0JyBvciAnZGVsJ1wiKSlcbiAgICB9XG5cbiAgICB2YXIgZXJyID0gdGhpcy5fY2hlY2tLZXkoZS5rZXksICdrZXknKVxuICAgIGlmIChlcnIpIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBlcnIpXG5cbiAgICBlLmtleSA9IHRoaXMuX3NlcmlhbGl6ZUtleShlLmtleSlcblxuICAgIGlmIChlLnR5cGUgPT09ICdwdXQnKSB7IGUudmFsdWUgPSB0aGlzLl9zZXJpYWxpemVWYWx1ZShlLnZhbHVlKSB9XG5cbiAgICBzZXJpYWxpemVkW2ldID0gZVxuICB9XG5cbiAgdGhpcy5fYmF0Y2goc2VyaWFsaXplZCwgb3B0aW9ucywgY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fYmF0Y2ggPSBmdW5jdGlvbiAoYXJyYXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fc2V0dXBJdGVyYXRvck9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBvcHRpb25zID0gY2xlYW5SYW5nZU9wdGlvbnMob3B0aW9ucylcblxuICBvcHRpb25zLnJldmVyc2UgPSAhIW9wdGlvbnMucmV2ZXJzZVxuICBvcHRpb25zLmtleXMgPSBvcHRpb25zLmtleXMgIT09IGZhbHNlXG4gIG9wdGlvbnMudmFsdWVzID0gb3B0aW9ucy52YWx1ZXMgIT09IGZhbHNlXG4gIG9wdGlvbnMubGltaXQgPSAnbGltaXQnIGluIG9wdGlvbnMgPyBvcHRpb25zLmxpbWl0IDogLTFcbiAgb3B0aW9ucy5rZXlBc0J1ZmZlciA9IG9wdGlvbnMua2V5QXNCdWZmZXIgIT09IGZhbHNlXG4gIG9wdGlvbnMudmFsdWVBc0J1ZmZlciA9IG9wdGlvbnMudmFsdWVBc0J1ZmZlciAhPT0gZmFsc2VcblxuICByZXR1cm4gb3B0aW9uc1xufVxuXG5mdW5jdGlvbiBjbGVhblJhbmdlT3B0aW9ucyAob3B0aW9ucykge1xuICB2YXIgcmVzdWx0ID0ge31cblxuICBmb3IgKHZhciBrIGluIG9wdGlvbnMpIHtcbiAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgaykpIGNvbnRpbnVlXG4gICAgaWYgKGlzUmFuZ2VPcHRpb24oaykgJiYgaXNFbXB0eVJhbmdlT3B0aW9uKG9wdGlvbnNba10pKSBjb250aW51ZVxuXG4gICAgcmVzdWx0W2tdID0gb3B0aW9uc1trXVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBpc1JhbmdlT3B0aW9uIChrKSB7XG4gIHJldHVybiByYW5nZU9wdGlvbnMuaW5kZXhPZihrKSAhPT0gLTFcbn1cblxuZnVuY3Rpb24gaXNFbXB0eVJhbmdlT3B0aW9uICh2KSB7XG4gIHJldHVybiB2ID09PSAnJyB8fCB2ID09IG51bGwgfHwgaXNFbXB0eUJ1ZmZlcih2KVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5QnVmZmVyICh2KSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIodikgJiYgdi5sZW5ndGggPT09IDBcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLml0ZXJhdG9yID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgeyBvcHRpb25zID0ge30gfVxuICBvcHRpb25zID0gdGhpcy5fc2V0dXBJdGVyYXRvck9wdGlvbnMob3B0aW9ucylcbiAgcmV0dXJuIHRoaXMuX2l0ZXJhdG9yKG9wdGlvbnMpXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5faXRlcmF0b3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICByZXR1cm4gbmV3IEFic3RyYWN0SXRlcmF0b3IodGhpcylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9jaGFpbmVkQmF0Y2ggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgQWJzdHJhY3RDaGFpbmVkQmF0Y2godGhpcylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9zZXJpYWxpemVLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBCdWZmZXIuaXNCdWZmZXIoa2V5KSA/IGtleSA6IFN0cmluZyhrZXkpXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fc2VyaWFsaXplVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiAnJ1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSB8fCBwcm9jZXNzLmJyb3dzZXIgPyB2YWx1ZSA6IFN0cmluZyh2YWx1ZSlcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9jaGVja0tleSA9IGZ1bmN0aW9uIChvYmosIHR5cGUpIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IodHlwZSArICcgY2Fubm90IGJlIGBudWxsYCBvciBgdW5kZWZpbmVkYCcpXG4gIH1cblxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikgJiYgb2JqLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgRXJyb3IodHlwZSArICcgY2Fubm90IGJlIGFuIGVtcHR5IEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoU3RyaW5nKG9iaikgPT09ICcnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcih0eXBlICsgJyBjYW5ub3QgYmUgYW4gZW1wdHkgU3RyaW5nJylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0TGV2ZWxET1dOXG4iLCJleHBvcnRzLkFic3RyYWN0TGV2ZWxET1dOID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1sZXZlbGRvd24nKVxuZXhwb3J0cy5BYnN0cmFjdEl0ZXJhdG9yID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1pdGVyYXRvcicpXG5leHBvcnRzLkFic3RyYWN0Q2hhaW5lZEJhdGNoID0gcmVxdWlyZSgnLi9hYnN0cmFjdC1jaGFpbmVkLWJhdGNoJylcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJCVHJlZVxuXG52YXIgUkVEICAgPSAwXG52YXIgQkxBQ0sgPSAxXG5cbmZ1bmN0aW9uIFJCTm9kZShjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQsIGNvdW50KSB7XG4gIHRoaXMuX2NvbG9yID0gY29sb3JcbiAgdGhpcy5rZXkgPSBrZXlcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMubGVmdCA9IGxlZnRcbiAgdGhpcy5yaWdodCA9IHJpZ2h0XG4gIHRoaXMuX2NvdW50ID0gY291bnRcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgcmV0dXJuIG5ldyBSQk5vZGUobm9kZS5fY29sb3IsIG5vZGUua2V5LCBub2RlLnZhbHVlLCBub2RlLmxlZnQsIG5vZGUucmlnaHQsIG5vZGUuX2NvdW50KVxufVxuXG5mdW5jdGlvbiByZXBhaW50KGNvbG9yLCBub2RlKSB7XG4gIHJldHVybiBuZXcgUkJOb2RlKGNvbG9yLCBub2RlLmtleSwgbm9kZS52YWx1ZSwgbm9kZS5sZWZ0LCBub2RlLnJpZ2h0LCBub2RlLl9jb3VudClcbn1cblxuZnVuY3Rpb24gcmVjb3VudChub2RlKSB7XG4gIG5vZGUuX2NvdW50ID0gMSArIChub2RlLmxlZnQgPyBub2RlLmxlZnQuX2NvdW50IDogMCkgKyAobm9kZS5yaWdodCA/IG5vZGUucmlnaHQuX2NvdW50IDogMClcbn1cblxuZnVuY3Rpb24gUmVkQmxhY2tUcmVlKGNvbXBhcmUsIHJvb3QpIHtcbiAgdGhpcy5fY29tcGFyZSA9IGNvbXBhcmVcbiAgdGhpcy5yb290ID0gcm9vdFxufVxuXG52YXIgcHJvdG8gPSBSZWRCbGFja1RyZWUucHJvdG90eXBlXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJrZXlzXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oayx2KSB7XG4gICAgICByZXN1bHQucHVzaChrKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59KVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIFwidmFsdWVzXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oayx2KSB7XG4gICAgICByZXN1bHQucHVzaCh2KVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59KVxuXG4vL1JldHVybnMgdGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgdHJlZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBcImxlbmd0aFwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5yb290KSB7XG4gICAgICByZXR1cm4gdGhpcy5yb290Ll9jb3VudFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG59KVxuXG4vL0luc2VydCBhIG5ldyBpdGVtIGludG8gdGhlIHRyZWVcbnByb3RvLmluc2VydCA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgLy9GaW5kIHBvaW50IHRvIGluc2VydCBuZXcgbm9kZSBhdFxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgbl9zdGFjayA9IFtdXG4gIHZhciBkX3N0YWNrID0gW11cbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgbl9zdGFjay5wdXNoKG4pXG4gICAgZF9zdGFjay5wdXNoKGQpXG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIC8vUmVidWlsZCBwYXRoIHRvIGxlYWYgbm9kZVxuICBuX3N0YWNrLnB1c2gobmV3IFJCTm9kZShSRUQsIGtleSwgdmFsdWUsIG51bGwsIG51bGwsIDEpKVxuICBmb3IodmFyIHM9bl9zdGFjay5sZW5ndGgtMjsgcz49MDsgLS1zKSB7XG4gICAgdmFyIG4gPSBuX3N0YWNrW3NdXG4gICAgaWYoZF9zdGFja1tzXSA8PSAwKSB7XG4gICAgICBuX3N0YWNrW3NdID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG5fc3RhY2tbcysxXSwgbi5yaWdodCwgbi5fY291bnQrMSlcbiAgICB9IGVsc2Uge1xuICAgICAgbl9zdGFja1tzXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBuLmxlZnQsIG5fc3RhY2tbcysxXSwgbi5fY291bnQrMSlcbiAgICB9XG4gIH1cbiAgLy9SZWJhbGFuY2UgdHJlZSB1c2luZyByb3RhdGlvbnNcbiAgLy9jb25zb2xlLmxvZyhcInN0YXJ0IGluc2VydFwiLCBrZXksIGRfc3RhY2spXG4gIGZvcih2YXIgcz1uX3N0YWNrLmxlbmd0aC0xOyBzPjE7IC0tcykge1xuICAgIHZhciBwID0gbl9zdGFja1tzLTFdXG4gICAgdmFyIG4gPSBuX3N0YWNrW3NdXG4gICAgaWYocC5fY29sb3IgPT09IEJMQUNLIHx8IG4uX2NvbG9yID09PSBCTEFDSykge1xuICAgICAgYnJlYWtcbiAgICB9XG4gICAgdmFyIHBwID0gbl9zdGFja1tzLTJdXG4gICAgaWYocHAubGVmdCA9PT0gcCkge1xuICAgICAgaWYocC5sZWZ0ID09PSBuKSB7XG4gICAgICAgIHZhciB5ID0gcHAucmlnaHRcbiAgICAgICAgaWYoeSAmJiB5Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxMclwiKVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwcC5yaWdodCA9IHJlcGFpbnQoQkxBQ0ssIHkpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcyAtPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxMYlwiKVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHBwLmxlZnQgPSBwLnJpZ2h0XG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHAucmlnaHQgPSBwcFxuICAgICAgICAgIG5fc3RhY2tbcy0yXSA9IHBcbiAgICAgICAgICBuX3N0YWNrW3MtMV0gPSBuXG4gICAgICAgICAgcmVjb3VudChwcClcbiAgICAgICAgICByZWNvdW50KHApXG4gICAgICAgICAgaWYocyA+PSAzKSB7XG4gICAgICAgICAgICB2YXIgcHBwID0gbl9zdGFja1tzLTNdXG4gICAgICAgICAgICBpZihwcHAubGVmdCA9PT0gcHApIHtcbiAgICAgICAgICAgICAgcHBwLmxlZnQgPSBwXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcHAucmlnaHQgPSBwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB5ID0gcHAucmlnaHRcbiAgICAgICAgaWYoeSAmJiB5Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxSclwiKVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwcC5yaWdodCA9IHJlcGFpbnQoQkxBQ0ssIHkpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcyAtPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxSYlwiKVxuICAgICAgICAgIHAucmlnaHQgPSBuLmxlZnRcbiAgICAgICAgICBwcC5fY29sb3IgPSBSRURcbiAgICAgICAgICBwcC5sZWZ0ID0gbi5yaWdodFxuICAgICAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBuLmxlZnQgPSBwXG4gICAgICAgICAgbi5yaWdodCA9IHBwXG4gICAgICAgICAgbl9zdGFja1tzLTJdID0gblxuICAgICAgICAgIG5fc3RhY2tbcy0xXSA9IHBcbiAgICAgICAgICByZWNvdW50KHBwKVxuICAgICAgICAgIHJlY291bnQocClcbiAgICAgICAgICByZWNvdW50KG4pXG4gICAgICAgICAgaWYocyA+PSAzKSB7XG4gICAgICAgICAgICB2YXIgcHBwID0gbl9zdGFja1tzLTNdXG4gICAgICAgICAgICBpZihwcHAubGVmdCA9PT0gcHApIHtcbiAgICAgICAgICAgICAgcHBwLmxlZnQgPSBuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcHAucmlnaHQgPSBuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYocC5yaWdodCA9PT0gbikge1xuICAgICAgICB2YXIgeSA9IHBwLmxlZnRcbiAgICAgICAgaWYoeSAmJiB5Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJSclwiLCB5LmtleSlcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcHAubGVmdCA9IHJlcGFpbnQoQkxBQ0ssIHkpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcyAtPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJSYlwiKVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHBwLnJpZ2h0ID0gcC5sZWZ0XG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHAubGVmdCA9IHBwXG4gICAgICAgICAgbl9zdGFja1tzLTJdID0gcFxuICAgICAgICAgIG5fc3RhY2tbcy0xXSA9IG5cbiAgICAgICAgICByZWNvdW50KHBwKVxuICAgICAgICAgIHJlY291bnQocClcbiAgICAgICAgICBpZihzID49IDMpIHtcbiAgICAgICAgICAgIHZhciBwcHAgPSBuX3N0YWNrW3MtM11cbiAgICAgICAgICAgIGlmKHBwcC5yaWdodCA9PT0gcHApIHtcbiAgICAgICAgICAgICAgcHBwLnJpZ2h0ID0gcFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHBwLmxlZnQgPSBwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB5ID0gcHAubGVmdFxuICAgICAgICBpZih5ICYmIHkuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUkxyXCIpXG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHBwLmxlZnQgPSByZXBhaW50KEJMQUNLLCB5KVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHMgLT0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJSTGJcIilcbiAgICAgICAgICBwLmxlZnQgPSBuLnJpZ2h0XG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcHAucmlnaHQgPSBuLmxlZnRcbiAgICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgbi5yaWdodCA9IHBcbiAgICAgICAgICBuLmxlZnQgPSBwcFxuICAgICAgICAgIG5fc3RhY2tbcy0yXSA9IG5cbiAgICAgICAgICBuX3N0YWNrW3MtMV0gPSBwXG4gICAgICAgICAgcmVjb3VudChwcClcbiAgICAgICAgICByZWNvdW50KHApXG4gICAgICAgICAgcmVjb3VudChuKVxuICAgICAgICAgIGlmKHMgPj0gMykge1xuICAgICAgICAgICAgdmFyIHBwcCA9IG5fc3RhY2tbcy0zXVxuICAgICAgICAgICAgaWYocHBwLnJpZ2h0ID09PSBwcCkge1xuICAgICAgICAgICAgICBwcHAucmlnaHQgPSBuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcHAubGVmdCA9IG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL1JldHVybiBuZXcgdHJlZVxuICBuX3N0YWNrWzBdLl9jb2xvciA9IEJMQUNLXG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlKGNtcCwgbl9zdGFja1swXSlcbn1cblxuXG4vL1Zpc2l0IGFsbCBub2RlcyBpbm9yZGVyXG5mdW5jdGlvbiBkb1Zpc2l0RnVsbCh2aXNpdCwgbm9kZSkge1xuICBpZihub2RlLmxlZnQpIHtcbiAgICB2YXIgdiA9IGRvVmlzaXRGdWxsKHZpc2l0LCBub2RlLmxlZnQpXG4gICAgaWYodikgeyByZXR1cm4gdiB9XG4gIH1cbiAgdmFyIHYgPSB2aXNpdChub2RlLmtleSwgbm9kZS52YWx1ZSlcbiAgaWYodikgeyByZXR1cm4gdiB9XG4gIGlmKG5vZGUucmlnaHQpIHtcbiAgICByZXR1cm4gZG9WaXNpdEZ1bGwodmlzaXQsIG5vZGUucmlnaHQpXG4gIH1cbn1cblxuLy9WaXNpdCBoYWxmIG5vZGVzIGluIG9yZGVyXG5mdW5jdGlvbiBkb1Zpc2l0SGFsZihsbywgY29tcGFyZSwgdmlzaXQsIG5vZGUpIHtcbiAgdmFyIGwgPSBjb21wYXJlKGxvLCBub2RlLmtleSlcbiAgaWYobCA8PSAwKSB7XG4gICAgaWYobm9kZS5sZWZ0KSB7XG4gICAgICB2YXIgdiA9IGRvVmlzaXRIYWxmKGxvLCBjb21wYXJlLCB2aXNpdCwgbm9kZS5sZWZ0KVxuICAgICAgaWYodikgeyByZXR1cm4gdiB9XG4gICAgfVxuICAgIHZhciB2ID0gdmlzaXQobm9kZS5rZXksIG5vZGUudmFsdWUpXG4gICAgaWYodikgeyByZXR1cm4gdiB9XG4gIH1cbiAgaWYobm9kZS5yaWdodCkge1xuICAgIHJldHVybiBkb1Zpc2l0SGFsZihsbywgY29tcGFyZSwgdmlzaXQsIG5vZGUucmlnaHQpXG4gIH1cbn1cblxuLy9WaXNpdCBhbGwgbm9kZXMgd2l0aGluIGEgcmFuZ2VcbmZ1bmN0aW9uIGRvVmlzaXQobG8sIGhpLCBjb21wYXJlLCB2aXNpdCwgbm9kZSkge1xuICB2YXIgbCA9IGNvbXBhcmUobG8sIG5vZGUua2V5KVxuICB2YXIgaCA9IGNvbXBhcmUoaGksIG5vZGUua2V5KVxuICB2YXIgdlxuICBpZihsIDw9IDApIHtcbiAgICBpZihub2RlLmxlZnQpIHtcbiAgICAgIHYgPSBkb1Zpc2l0KGxvLCBoaSwgY29tcGFyZSwgdmlzaXQsIG5vZGUubGVmdClcbiAgICAgIGlmKHYpIHsgcmV0dXJuIHYgfVxuICAgIH1cbiAgICBpZihoID4gMCkge1xuICAgICAgdiA9IHZpc2l0KG5vZGUua2V5LCBub2RlLnZhbHVlKVxuICAgICAgaWYodikgeyByZXR1cm4gdiB9XG4gICAgfVxuICB9XG4gIGlmKGggPiAwICYmIG5vZGUucmlnaHQpIHtcbiAgICByZXR1cm4gZG9WaXNpdChsbywgaGksIGNvbXBhcmUsIHZpc2l0LCBub2RlLnJpZ2h0KVxuICB9XG59XG5cblxucHJvdG8uZm9yRWFjaCA9IGZ1bmN0aW9uIHJiVHJlZUZvckVhY2godmlzaXQsIGxvLCBoaSkge1xuICBpZighdGhpcy5yb290KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZG9WaXNpdEZ1bGwodmlzaXQsIHRoaXMucm9vdClcbiAgICBicmVha1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGRvVmlzaXRIYWxmKGxvLCB0aGlzLl9jb21wYXJlLCB2aXNpdCwgdGhpcy5yb290KVxuICAgIGJyZWFrXG5cbiAgICBjYXNlIDM6XG4gICAgICBpZih0aGlzLl9jb21wYXJlKGxvLCBoaSkgPj0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiBkb1Zpc2l0KGxvLCBoaSwgdGhpcy5fY29tcGFyZSwgdmlzaXQsIHRoaXMucm9vdClcbiAgICBicmVha1xuICB9XG59XG5cbi8vRmlyc3QgaXRlbSBpbiBsaXN0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIFwiYmVnaW5cIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFjayA9IFtdXG4gICAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5sZWZ0XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG4gIH1cbn0pXG5cbi8vTGFzdCBpdGVtIGluIGxpc3Rcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJlbmRcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFjayA9IFtdXG4gICAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxuICB9XG59KVxuXG4vL0ZpbmQgdGhlIGl0aCBpdGVtIGluIHRoZSB0cmVlXG5wcm90by5hdCA9IGZ1bmN0aW9uKGlkeCkge1xuICBpZihpZHggPCAwKSB7XG4gICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBbXSlcbiAgfVxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgc3RhY2sgPSBbXVxuICB3aGlsZSh0cnVlKSB7XG4gICAgc3RhY2sucHVzaChuKVxuICAgIGlmKG4ubGVmdCkge1xuICAgICAgaWYoaWR4IDwgbi5sZWZ0Ll9jb3VudCkge1xuICAgICAgICBuID0gbi5sZWZ0XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZHggLT0gbi5sZWZ0Ll9jb3VudFxuICAgIH1cbiAgICBpZighaWR4KSB7XG4gICAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxuICAgIH1cbiAgICBpZHggLT0gMVxuICAgIGlmKG4ucmlnaHQpIHtcbiAgICAgIGlmKGlkeCA+PSBuLnJpZ2h0Ll9jb3VudCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBbXSlcbn1cblxucHJvdG8uZ2UgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGxhc3RfcHRyID0gMFxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBsYXN0X3B0ciA9IHN0YWNrLmxlbmd0aFxuICAgIH1cbiAgICBpZihkIDw9IDApIHtcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH1cbiAgc3RhY2subGVuZ3RoID0gbGFzdF9wdHJcbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbn1cblxucHJvdG8uZ3QgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGxhc3RfcHRyID0gMFxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA8IDApIHtcbiAgICAgIGxhc3RfcHRyID0gc3RhY2subGVuZ3RoXG4gICAgfVxuICAgIGlmKGQgPCAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHN0YWNrLmxlbmd0aCA9IGxhc3RfcHRyXG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG59XG5cbnByb3RvLmx0ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBjbXAgPSB0aGlzLl9jb21wYXJlXG4gIHZhciBuID0gdGhpcy5yb290XG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBsYXN0X3B0ciA9IDBcbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgc3RhY2sucHVzaChuKVxuICAgIGlmKGQgPiAwKSB7XG4gICAgICBsYXN0X3B0ciA9IHN0YWNrLmxlbmd0aFxuICAgIH1cbiAgICBpZihkIDw9IDApIHtcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH1cbiAgc3RhY2subGVuZ3RoID0gbGFzdF9wdHJcbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbn1cblxucHJvdG8ubGUgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGxhc3RfcHRyID0gMFxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA+PSAwKSB7XG4gICAgICBsYXN0X3B0ciA9IHN0YWNrLmxlbmd0aFxuICAgIH1cbiAgICBpZihkIDwgMCkge1xuICAgICAgbiA9IG4ubGVmdFxuICAgIH0gZWxzZSB7XG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfVxuICBzdGFjay5sZW5ndGggPSBsYXN0X3B0clxuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxufVxuXG4vL0ZpbmRzIHRoZSBpdGVtIHdpdGgga2V5IGlmIGl0IGV4aXN0c1xucHJvdG8uZmluZCA9IGZ1bmN0aW9uKGtleSkge1xuICB2YXIgY21wID0gdGhpcy5fY29tcGFyZVxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgc3RhY2sgPSBbXVxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbiAgICB9XG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgW10pXG59XG5cbi8vUmVtb3ZlcyBpdGVtIHdpdGgga2V5IGZyb20gdHJlZVxucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBpdGVyID0gdGhpcy5maW5kKGtleSlcbiAgaWYoaXRlcikge1xuICAgIHJldHVybiBpdGVyLnJlbW92ZSgpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy9SZXR1cm5zIHRoZSBpdGVtIGF0IGBrZXlgXG5wcm90by5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgaWYoZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG4udmFsdWVcbiAgICB9XG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHJldHVyblxufVxuXG4vL0l0ZXJhdG9yIGZvciByZWQgYmxhY2sgdHJlZVxuZnVuY3Rpb24gUmVkQmxhY2tUcmVlSXRlcmF0b3IodHJlZSwgc3RhY2spIHtcbiAgdGhpcy50cmVlID0gdHJlZVxuICB0aGlzLl9zdGFjayA9IHN0YWNrXG59XG5cbnZhciBpcHJvdG8gPSBSZWRCbGFja1RyZWVJdGVyYXRvci5wcm90b3R5cGVcblxuLy9UZXN0IGlmIGl0ZXJhdG9yIGlzIHZhbGlkXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcInZhbGlkXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2subGVuZ3RoID4gMFxuICB9XG59KVxuXG4vL05vZGUgb2YgdGhlIGl0ZXJhdG9yXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcIm5vZGVcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMuX3N0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGgtMV1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZVxufSlcblxuLy9NYWtlcyBhIGNvcHkgb2YgYW4gaXRlcmF0b3Jcbmlwcm90by5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMudHJlZSwgdGhpcy5fc3RhY2suc2xpY2UoKSlcbn1cblxuLy9Td2FwcyB0d28gbm9kZXNcbmZ1bmN0aW9uIHN3YXBOb2RlKG4sIHYpIHtcbiAgbi5rZXkgPSB2LmtleVxuICBuLnZhbHVlID0gdi52YWx1ZVxuICBuLmxlZnQgPSB2LmxlZnRcbiAgbi5yaWdodCA9IHYucmlnaHRcbiAgbi5fY29sb3IgPSB2Ll9jb2xvclxuICBuLl9jb3VudCA9IHYuX2NvdW50XG59XG5cbi8vRml4IHVwIGEgZG91YmxlIGJsYWNrIG5vZGUgaW4gYSB0cmVlXG5mdW5jdGlvbiBmaXhEb3VibGVCbGFjayhzdGFjaykge1xuICB2YXIgbiwgcCwgcywgelxuICBmb3IodmFyIGk9c3RhY2subGVuZ3RoLTE7IGk+PTA7IC0taSkge1xuICAgIG4gPSBzdGFja1tpXVxuICAgIGlmKGkgPT09IDApIHtcbiAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKFwidmlzaXQgbm9kZTpcIiwgbi5rZXksIGksIHN0YWNrW2ldLmtleSwgc3RhY2tbaS0xXS5rZXkpXG4gICAgcCA9IHN0YWNrW2ktMV1cbiAgICBpZihwLmxlZnQgPT09IG4pIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJsZWZ0IGNoaWxkXCIpXG4gICAgICBzID0gcC5yaWdodFxuICAgICAgaWYocy5yaWdodCAmJiBzLnJpZ2h0Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDE6IHJpZ2h0IHNpYmxpbmcgY2hpbGQgcmVkXCIpXG4gICAgICAgIHMgPSBwLnJpZ2h0ID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHogPSBzLnJpZ2h0ID0gY2xvbmVOb2RlKHMucmlnaHQpXG4gICAgICAgIHAucmlnaHQgPSBzLmxlZnRcbiAgICAgICAgcy5sZWZ0ID0gcFxuICAgICAgICBzLnJpZ2h0ID0gelxuICAgICAgICBzLl9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICB6Ll9jb2xvciA9IEJMQUNLXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICBpZihpID4gMSkge1xuICAgICAgICAgIHZhciBwcCA9IHN0YWNrW2ktMl1cbiAgICAgICAgICBpZihwcC5sZWZ0ID09PSBwKSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5yaWdodCA9IHNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tbaS0xXSA9IHNcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYocy5sZWZ0ICYmIHMubGVmdC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAxOiBsZWZ0IHNpYmxpbmcgY2hpbGQgcmVkXCIpXG4gICAgICAgIHMgPSBwLnJpZ2h0ID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHogPSBzLmxlZnQgPSBjbG9uZU5vZGUocy5sZWZ0KVxuICAgICAgICBwLnJpZ2h0ID0gei5sZWZ0XG4gICAgICAgIHMubGVmdCA9IHoucmlnaHRcbiAgICAgICAgei5sZWZ0ID0gcFxuICAgICAgICB6LnJpZ2h0ID0gc1xuICAgICAgICB6Ll9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcy5fY29sb3IgPSBCTEFDS1xuICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICByZWNvdW50KHopXG4gICAgICAgIGlmKGkgPiAxKSB7XG4gICAgICAgICAgdmFyIHBwID0gc3RhY2tbaS0yXVxuICAgICAgICAgIGlmKHBwLmxlZnQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLmxlZnQgPSB6XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gelxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gelxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmKHMuX2NvbG9yID09PSBCTEFDSykge1xuICAgICAgICBpZihwLl9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMjogYmxhY2sgc2libGluZywgcmVkIHBhcmVudFwiLCBwLnJpZ2h0LnZhbHVlKVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwLnJpZ2h0ID0gcmVwYWludChSRUQsIHMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMjogYmxhY2sgc2libGluZywgYmxhY2sgcGFyZW50XCIsIHAucmlnaHQudmFsdWUpXG4gICAgICAgICAgcC5yaWdodCA9IHJlcGFpbnQoUkVELCBzKVxuICAgICAgICAgIGNvbnRpbnVlICBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMzogcmVkIHNpYmxpbmdcIilcbiAgICAgICAgcyA9IGNsb25lTm9kZShzKVxuICAgICAgICBwLnJpZ2h0ID0gcy5sZWZ0XG4gICAgICAgIHMubGVmdCA9IHBcbiAgICAgICAgcy5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBwLl9jb2xvciA9IFJFRFxuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAubGVmdCA9PT0gcCkge1xuICAgICAgICAgICAgcHAubGVmdCA9IHNcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHAucmlnaHQgPSBzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YWNrW2ktMV0gPSBzXG4gICAgICAgIHN0YWNrW2ldID0gcFxuICAgICAgICBpZihpKzEgPCBzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICBzdGFja1tpKzFdID0gblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YWNrLnB1c2gobilcbiAgICAgICAgfVxuICAgICAgICBpID0gaSsyXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJyaWdodCBjaGlsZFwiKVxuICAgICAgcyA9IHAubGVmdFxuICAgICAgaWYocy5sZWZ0ICYmIHMubGVmdC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAxOiBsZWZ0IHNpYmxpbmcgY2hpbGQgcmVkXCIsIHAudmFsdWUsIHAuX2NvbG9yKVxuICAgICAgICBzID0gcC5sZWZ0ID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHogPSBzLmxlZnQgPSBjbG9uZU5vZGUocy5sZWZ0KVxuICAgICAgICBwLmxlZnQgPSBzLnJpZ2h0XG4gICAgICAgIHMucmlnaHQgPSBwXG4gICAgICAgIHMubGVmdCA9IHpcbiAgICAgICAgcy5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgei5fY29sb3IgPSBCTEFDS1xuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAucmlnaHQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gc1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSBpZihzLnJpZ2h0ICYmIHMucmlnaHQuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMTogcmlnaHQgc2libGluZyBjaGlsZCByZWRcIilcbiAgICAgICAgcyA9IHAubGVmdCA9IGNsb25lTm9kZShzKVxuICAgICAgICB6ID0gcy5yaWdodCA9IGNsb25lTm9kZShzLnJpZ2h0KVxuICAgICAgICBwLmxlZnQgPSB6LnJpZ2h0XG4gICAgICAgIHMucmlnaHQgPSB6LmxlZnRcbiAgICAgICAgei5yaWdodCA9IHBcbiAgICAgICAgei5sZWZ0ID0gc1xuICAgICAgICB6Ll9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcy5fY29sb3IgPSBCTEFDS1xuICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICByZWNvdW50KHopXG4gICAgICAgIGlmKGkgPiAxKSB7XG4gICAgICAgICAgdmFyIHBwID0gc3RhY2tbaS0yXVxuICAgICAgICAgIGlmKHBwLnJpZ2h0ID09PSBwKSB7XG4gICAgICAgICAgICBwcC5yaWdodCA9IHpcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHAubGVmdCA9IHpcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tbaS0xXSA9IHpcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZihzLl9jb2xvciA9PT0gQkxBQ0spIHtcbiAgICAgICAgaWYocC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDI6IGJsYWNrIHNpYmxpbmcsIHJlZCBwYXJlbnRcIilcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcC5sZWZ0ID0gcmVwYWludChSRUQsIHMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMjogYmxhY2sgc2libGluZywgYmxhY2sgcGFyZW50XCIpXG4gICAgICAgICAgcC5sZWZ0ID0gcmVwYWludChSRUQsIHMpXG4gICAgICAgICAgY29udGludWUgIFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAzOiByZWQgc2libGluZ1wiKVxuICAgICAgICBzID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHAubGVmdCA9IHMucmlnaHRcbiAgICAgICAgcy5yaWdodCA9IHBcbiAgICAgICAgcy5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBwLl9jb2xvciA9IFJFRFxuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAucmlnaHQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gc1xuICAgICAgICBzdGFja1tpXSA9IHBcbiAgICAgICAgaWYoaSsxIDwgc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgc3RhY2tbaSsxXSA9IG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFjay5wdXNoKG4pXG4gICAgICAgIH1cbiAgICAgICAgaSA9IGkrMlxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL1JlbW92ZXMgaXRlbSBhdCBpdGVyYXRvciBmcm9tIHRyZWVcbmlwcm90by5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgaWYoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRoaXMudHJlZVxuICB9XG4gIC8vRmlyc3QgY29weSBwYXRoIHRvIG5vZGVcbiAgdmFyIGNzdGFjayA9IG5ldyBBcnJheShzdGFjay5sZW5ndGgpXG4gIHZhciBuID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdXG4gIGNzdGFja1tjc3RhY2subGVuZ3RoLTFdID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG4ubGVmdCwgbi5yaWdodCwgbi5fY291bnQpXG4gIGZvcih2YXIgaT1zdGFjay5sZW5ndGgtMjsgaT49MDsgLS1pKSB7XG4gICAgdmFyIG4gPSBzdGFja1tpXVxuICAgIGlmKG4ubGVmdCA9PT0gc3RhY2tbaSsxXSkge1xuICAgICAgY3N0YWNrW2ldID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIGNzdGFja1tpKzFdLCBuLnJpZ2h0LCBuLl9jb3VudClcbiAgICB9IGVsc2Uge1xuICAgICAgY3N0YWNrW2ldID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG4ubGVmdCwgY3N0YWNrW2krMV0sIG4uX2NvdW50KVxuICAgIH1cbiAgfVxuXG4gIC8vR2V0IG5vZGVcbiAgbiA9IGNzdGFja1tjc3RhY2subGVuZ3RoLTFdXG4gIC8vY29uc29sZS5sb2coXCJzdGFydCByZW1vdmU6IFwiLCBuLnZhbHVlKVxuXG4gIC8vSWYgbm90IGxlYWYsIHRoZW4gc3dhcCB3aXRoIHByZXZpb3VzIG5vZGVcbiAgaWYobi5sZWZ0ICYmIG4ucmlnaHQpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwibW92aW5nIHRvIGxlYWZcIilcblxuICAgIC8vRmlyc3Qgd2FsayB0byBwcmV2aW91cyBsZWFmXG4gICAgdmFyIHNwbGl0ID0gY3N0YWNrLmxlbmd0aFxuICAgIG4gPSBuLmxlZnRcbiAgICB3aGlsZShuLnJpZ2h0KSB7XG4gICAgICBjc3RhY2sucHVzaChuKVxuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gICAgLy9Db3B5IHBhdGggdG8gbGVhZlxuICAgIHZhciB2ID0gY3N0YWNrW3NwbGl0LTFdXG4gICAgY3N0YWNrLnB1c2gobmV3IFJCTm9kZShuLl9jb2xvciwgdi5rZXksIHYudmFsdWUsIG4ubGVmdCwgbi5yaWdodCwgbi5fY291bnQpKVxuICAgIGNzdGFja1tzcGxpdC0xXS5rZXkgPSBuLmtleVxuICAgIGNzdGFja1tzcGxpdC0xXS52YWx1ZSA9IG4udmFsdWVcblxuICAgIC8vRml4IHVwIHN0YWNrXG4gICAgZm9yKHZhciBpPWNzdGFjay5sZW5ndGgtMjsgaT49c3BsaXQ7IC0taSkge1xuICAgICAgbiA9IGNzdGFja1tpXVxuICAgICAgY3N0YWNrW2ldID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG4ubGVmdCwgY3N0YWNrW2krMV0sIG4uX2NvdW50KVxuICAgIH1cbiAgICBjc3RhY2tbc3BsaXQtMV0ubGVmdCA9IGNzdGFja1tzcGxpdF1cbiAgfVxuICAvL2NvbnNvbGUubG9nKFwic3RhY2s9XCIsIGNzdGFjay5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi52YWx1ZSB9KSlcblxuICAvL1JlbW92ZSBsZWFmIG5vZGVcbiAgbiA9IGNzdGFja1tjc3RhY2subGVuZ3RoLTFdXG4gIGlmKG4uX2NvbG9yID09PSBSRUQpIHtcbiAgICAvL0Vhc3kgY2FzZTogcmVtb3ZpbmcgcmVkIGxlYWZcbiAgICAvL2NvbnNvbGUubG9nKFwiUkVEIGxlYWZcIilcbiAgICB2YXIgcCA9IGNzdGFja1tjc3RhY2subGVuZ3RoLTJdXG4gICAgaWYocC5sZWZ0ID09PSBuKSB7XG4gICAgICBwLmxlZnQgPSBudWxsXG4gICAgfSBlbHNlIGlmKHAucmlnaHQgPT09IG4pIHtcbiAgICAgIHAucmlnaHQgPSBudWxsXG4gICAgfVxuICAgIGNzdGFjay5wb3AoKVxuICAgIGZvcih2YXIgaT0wOyBpPGNzdGFjay5sZW5ndGg7ICsraSkge1xuICAgICAgY3N0YWNrW2ldLl9jb3VudC0tXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlKHRoaXMudHJlZS5fY29tcGFyZSwgY3N0YWNrWzBdKVxuICB9IGVsc2Uge1xuICAgIGlmKG4ubGVmdCB8fCBuLnJpZ2h0KSB7XG4gICAgICAvL1NlY29uZCBlYXN5IGNhc2U6ICBTaW5nbGUgY2hpbGQgYmxhY2sgcGFyZW50XG4gICAgICAvL2NvbnNvbGUubG9nKFwiQkxBQ0sgc2luZ2xlIGNoaWxkXCIpXG4gICAgICBpZihuLmxlZnQpIHtcbiAgICAgICAgc3dhcE5vZGUobiwgbi5sZWZ0KVxuICAgICAgfSBlbHNlIGlmKG4ucmlnaHQpIHtcbiAgICAgICAgc3dhcE5vZGUobiwgbi5yaWdodClcbiAgICAgIH1cbiAgICAgIC8vQ2hpbGQgbXVzdCBiZSByZWQsIHNvIHJlcGFpbnQgaXQgYmxhY2sgdG8gYmFsYW5jZSBjb2xvclxuICAgICAgbi5fY29sb3IgPSBCTEFDS1xuICAgICAgZm9yKHZhciBpPTA7IGk8Y3N0YWNrLmxlbmd0aC0xOyArK2kpIHtcbiAgICAgICAgY3N0YWNrW2ldLl9jb3VudC0tXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZSh0aGlzLnRyZWUuX2NvbXBhcmUsIGNzdGFja1swXSlcbiAgICB9IGVsc2UgaWYoY3N0YWNrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy9UaGlyZCBlYXN5IGNhc2U6IHJvb3RcbiAgICAgIC8vY29uc29sZS5sb2coXCJST09UXCIpXG4gICAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZSh0aGlzLnRyZWUuX2NvbXBhcmUsIG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vSGFyZCBjYXNlOiBSZXBhaW50IG4sIGFuZCB0aGVuIGRvIHNvbWUgbmFzdHkgc3R1ZmZcbiAgICAgIC8vY29uc29sZS5sb2coXCJCTEFDSyBsZWFmIG5vIGNoaWxkcmVuXCIpXG4gICAgICBmb3IodmFyIGk9MDsgaTxjc3RhY2subGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY3N0YWNrW2ldLl9jb3VudC0tXG4gICAgICB9XG4gICAgICB2YXIgcGFyZW50ID0gY3N0YWNrW2NzdGFjay5sZW5ndGgtMl1cbiAgICAgIGZpeERvdWJsZUJsYWNrKGNzdGFjaylcbiAgICAgIC8vRml4IHVwIGxpbmtzXG4gICAgICBpZihwYXJlbnQubGVmdCA9PT0gbikge1xuICAgICAgICBwYXJlbnQubGVmdCA9IG51bGxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5yaWdodCA9IG51bGxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWUodGhpcy50cmVlLl9jb21wYXJlLCBjc3RhY2tbMF0pXG59XG5cbi8vUmV0dXJucyBrZXlcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwia2V5XCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLl9zdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoLTFdLmtleVxuICAgIH1cbiAgICByZXR1cm5cbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZVxufSlcblxuLy9SZXR1cm5zIHZhbHVlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcInZhbHVlXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLl9zdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoLTFdLnZhbHVlXG4gICAgfVxuICAgIHJldHVyblxuICB9LFxuICBlbnVtZXJhYmxlOiB0cnVlXG59KVxuXG5cbi8vUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhpcyBpdGVyYXRvciBpbiB0aGUgc29ydGVkIGxpc3Rcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwiaW5kZXhcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpZHggPSAwXG4gICAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciByID0gdGhpcy50cmVlLnJvb3RcbiAgICAgIGlmKHIpIHtcbiAgICAgICAgcmV0dXJuIHIuX2NvdW50XG4gICAgICB9XG4gICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSBpZihzdGFja1tzdGFjay5sZW5ndGgtMV0ubGVmdCkge1xuICAgICAgaWR4ID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdLmxlZnQuX2NvdW50XG4gICAgfVxuICAgIGZvcih2YXIgcz1zdGFjay5sZW5ndGgtMjsgcz49MDsgLS1zKSB7XG4gICAgICBpZihzdGFja1tzKzFdID09PSBzdGFja1tzXS5yaWdodCkge1xuICAgICAgICArK2lkeFxuICAgICAgICBpZihzdGFja1tzXS5sZWZ0KSB7XG4gICAgICAgICAgaWR4ICs9IHN0YWNrW3NdLmxlZnQuX2NvdW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlkeFxuICB9LFxuICBlbnVtZXJhYmxlOiB0cnVlXG59KVxuXG4vL0FkdmFuY2VzIGl0ZXJhdG9yIHRvIG5leHQgZWxlbWVudCBpbiBsaXN0XG5pcHJvdG8ubmV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3RhY2sgPSB0aGlzLl9zdGFja1xuICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgbiA9IHN0YWNrW3N0YWNrLmxlbmd0aC0xXVxuICBpZihuLnJpZ2h0KSB7XG4gICAgbiA9IG4ucmlnaHRcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5sZWZ0XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN0YWNrLnBvcCgpXG4gICAgd2hpbGUoc3RhY2subGVuZ3RoID4gMCAmJiBzdGFja1tzdGFjay5sZW5ndGgtMV0ucmlnaHQgPT09IG4pIHtcbiAgICAgIG4gPSBzdGFja1tzdGFjay5sZW5ndGgtMV1cbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgfVxuICB9XG59XG5cbi8vQ2hlY2tzIGlmIGl0ZXJhdG9yIGlzIGF0IGVuZCBvZiB0cmVlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcImhhc05leHRcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gICAgaWYoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYoc3RhY2tbc3RhY2subGVuZ3RoLTFdLnJpZ2h0KSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBmb3IodmFyIHM9c3RhY2subGVuZ3RoLTE7IHM+MDsgLS1zKSB7XG4gICAgICBpZihzdGFja1tzLTFdLmxlZnQgPT09IHN0YWNrW3NdKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59KVxuXG4vL1VwZGF0ZSB2YWx1ZVxuaXByb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gIGlmKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVwZGF0ZSBlbXB0eSBub2RlIVwiKVxuICB9XG4gIHZhciBjc3RhY2sgPSBuZXcgQXJyYXkoc3RhY2subGVuZ3RoKVxuICB2YXIgbiA9IHN0YWNrW3N0YWNrLmxlbmd0aC0xXVxuICBjc3RhY2tbY3N0YWNrLmxlbmd0aC0xXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCB2YWx1ZSwgbi5sZWZ0LCBuLnJpZ2h0LCBuLl9jb3VudClcbiAgZm9yKHZhciBpPXN0YWNrLmxlbmd0aC0yOyBpPj0wOyAtLWkpIHtcbiAgICBuID0gc3RhY2tbaV1cbiAgICBpZihuLmxlZnQgPT09IHN0YWNrW2krMV0pIHtcbiAgICAgIGNzdGFja1tpXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBjc3RhY2tbaSsxXSwgbi5yaWdodCwgbi5fY291bnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNzdGFja1tpXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBuLmxlZnQsIGNzdGFja1tpKzFdLCBuLl9jb3VudClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWUodGhpcy50cmVlLl9jb21wYXJlLCBjc3RhY2tbMF0pXG59XG5cbi8vTW92ZXMgaXRlcmF0b3IgYmFja3dhcmQgb25lIGVsZW1lbnRcbmlwcm90by5wcmV2ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gIGlmKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBuID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdXG4gIGlmKG4ubGVmdCkge1xuICAgIG4gPSBuLmxlZnRcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdGFjay5wb3AoKVxuICAgIHdoaWxlKHN0YWNrLmxlbmd0aCA+IDAgJiYgc3RhY2tbc3RhY2subGVuZ3RoLTFdLmxlZnQgPT09IG4pIHtcbiAgICAgIG4gPSBzdGFja1tzdGFjay5sZW5ndGgtMV1cbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgfVxuICB9XG59XG5cbi8vQ2hlY2tzIGlmIGl0ZXJhdG9yIGlzIGF0IHN0YXJ0IG9mIHRyZWVcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwiaGFzUHJldlwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZihzdGFja1tzdGFjay5sZW5ndGgtMV0ubGVmdCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZm9yKHZhciBzPXN0YWNrLmxlbmd0aC0xOyBzPjA7IC0tcykge1xuICAgICAgaWYoc3RhY2tbcy0xXS5yaWdodCA9PT0gc3RhY2tbc10pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pXG5cbi8vRGVmYXVsdCBjb21wYXJpc29uIGZ1bmN0aW9uXG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyZShhLCBiKSB7XG4gIGlmKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYoYSA+IGIpIHtcbiAgICByZXR1cm4gMVxuICB9XG4gIHJldHVybiAwXG59XG5cbi8vQnVpbGQgYSB0cmVlXG5mdW5jdGlvbiBjcmVhdGVSQlRyZWUoY29tcGFyZSkge1xuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZShjb21wYXJlIHx8IGRlZmF1bHRDb21wYXJlLCBudWxsKVxufSIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0eXBlcyA9IFtcbiAgcmVxdWlyZSgnLi9uZXh0VGljaycpLFxuICByZXF1aXJlKCcuL211dGF0aW9uLmpzJyksXG4gIHJlcXVpcmUoJy4vbWVzc2FnZUNoYW5uZWwnKSxcbiAgcmVxdWlyZSgnLi9zdGF0ZUNoYW5nZScpLFxuICByZXF1aXJlKCcuL3RpbWVvdXQnKVxuXTtcbnZhciBkcmFpbmluZztcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xudmFyIHF1ZXVlID0gW107XG52YXIgc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBkcmFpbmluZyA9IGZhbHNlO1xuICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWVJbmRleCA9IC0xO1xuICB9XG4gIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICBuZXh0VGljaygpO1xuICB9XG59XG5cbi8vbmFtZWQgbmV4dFRpY2sgZm9yIGxlc3MgY29uZnVzaW5nIHN0YWNrIHRyYWNlc1xuZnVuY3Rpb24gbmV4dFRpY2soKSB7XG4gIGlmIChkcmFpbmluZykge1xuICAgIHJldHVybjtcbiAgfVxuICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgZHJhaW5pbmcgPSB0cnVlO1xuICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgd2hpbGUgKGxlbikge1xuICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gW107XG4gICAgd2hpbGUgKGN1cnJlbnRRdWV1ZSAmJiArK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICB9XG4gICAgcXVldWVJbmRleCA9IC0xO1xuICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgfVxuICBjdXJyZW50UXVldWUgPSBudWxsO1xuICBxdWV1ZUluZGV4ID0gLTE7XG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cbnZhciBzY2hlZHVsZURyYWluO1xudmFyIGkgPSAtMTtcbnZhciBsZW4gPSB0eXBlcy5sZW5ndGg7XG53aGlsZSAoKytpIDwgbGVuKSB7XG4gIGlmICh0eXBlc1tpXSAmJiB0eXBlc1tpXS50ZXN0ICYmIHR5cGVzW2ldLnRlc3QoKSkge1xuICAgIHNjaGVkdWxlRHJhaW4gPSB0eXBlc1tpXS5pbnN0YWxsKG5leHRUaWNrKTtcbiAgICBicmVhaztcbiAgfVxufVxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gIHRoaXMuZnVuID0gZnVuO1xuICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmdW4gPSB0aGlzLmZ1bjtcbiAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgc3dpdGNoIChhcnJheS5sZW5ndGgpIHtcbiAgY2FzZSAwOlxuICAgIHJldHVybiBmdW4oKTtcbiAgY2FzZSAxOlxuICAgIHJldHVybiBmdW4oYXJyYXlbMF0pO1xuICBjYXNlIDI6XG4gICAgcmV0dXJuIGZ1bihhcnJheVswXSwgYXJyYXlbMV0pO1xuICBjYXNlIDM6XG4gICAgcmV0dXJuIGZ1bihhcnJheVswXSwgYXJyYXlbMV0sIGFycmF5WzJdKTtcbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gZnVuLmFwcGx5KG51bGwsIGFycmF5KTtcbiAgfVxuXG59O1xubW9kdWxlLmV4cG9ydHMgPSBpbW1lZGlhdGU7XG5mdW5jdGlvbiBpbW1lZGlhdGUodGFzaykge1xuICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gIH1cbiAgcXVldWUucHVzaChuZXcgSXRlbSh0YXNrLCBhcmdzKSk7XG4gIGlmICghc2NoZWR1bGVkICYmICFkcmFpbmluZykge1xuICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgc2NoZWR1bGVEcmFpbigpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAvLyB3ZSBjYW4gb25seSBnZXQgaGVyZSBpbiBJRTEwXG4gICAgLy8gd2hpY2ggZG9lc24ndCBoYW5kZWwgcG9zdE1lc3NhZ2Ugd2VsbFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAoZnVuYykge1xuICB2YXIgY2hhbm5lbCA9IG5ldyBnbG9iYWwuTWVzc2FnZUNoYW5uZWwoKTtcbiAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vYmFzZWQgb2ZmIHJzdnAgaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qc1xuLy9saWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuLy9odHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvbWFzdGVyL2xpYi9yc3ZwL2FzYXAuanNcblxudmFyIE11dGF0aW9uID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE11dGF0aW9uO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGhhbmRsZSkge1xuICB2YXIgY2FsbGVkID0gMDtcbiAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uKGhhbmRsZSk7XG4gIHZhciBlbGVtZW50ID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBlbGVtZW50LmRhdGEgPSAoY2FsbGVkID0gKytjYWxsZWQgJSAyKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gIHJldHVybiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnKSAmJiAhcHJvY2Vzcy5icm93c2VyO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmMpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2RvY3VtZW50JyBpbiBnbG9iYWwgJiYgJ29ucmVhZHlzdGF0ZWNoYW5nZScgaW4gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGhhbmRsZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICB2YXIgc2NyaXB0RWwgPSBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlKCk7XG5cbiAgICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICBzY3JpcHRFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdEVsKTtcbiAgICAgIHNjcmlwdEVsID0gbnVsbDtcbiAgICB9O1xuICAgIGdsb2JhbC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2NyaXB0RWwpO1xuXG4gICAgcmV0dXJuIGhhbmRsZTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGltZW91dCh0LCAwKTtcbiAgfTtcbn07IiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCJcbmV4cG9ydHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG5cbiAgaWYoQnVmZmVyLmlzQnVmZmVyKGEpKSB7XG4gICAgdmFyIGwgPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNtcCA9IGFbaV0gLSBiW2ldXG4gICAgICBpZihjbXApIHJldHVybiBjbXBcbiAgICB9XG4gICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGhcbiAgfVxuXG4gIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMFxufVxuXG4vLyB0byBiZSBjb21wYXRpYmxlIHdpdGggdGhlIGN1cnJlbnQgYWJzdHJhY3QtbGV2ZWxkb3duIHRlc3RzXG4vLyBudWxsaXNoIG9yIGVtcHR5IHN0cmluZ3MuXG4vLyBJIGNvdWxkIHVzZSAhIXZhbCBidXQgSSB3YW50IHRvIHBlcm1pdCBudW1iZXJzIGFuZCBib29sZWFucyxcbi8vIGlmIHBvc3NpYmxlLlxuXG5mdW5jdGlvbiBpc0RlZiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09ICcnXG59XG5cbmZ1bmN0aW9uIGhhcyAocmFuZ2UsIG5hbWUpIHtcbiAgcmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJhbmdlLCBuYW1lKVxufVxuXG5mdW5jdGlvbiBoYXNLZXkocmFuZ2UsIG5hbWUpIHtcbiAgcmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJhbmdlLCBuYW1lKSAmJiBuYW1lXG59XG5cbnZhciBsb3dlckJvdW5kS2V5ID0gZXhwb3J0cy5sb3dlckJvdW5kS2V5ID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICBoYXNLZXkocmFuZ2UsICdndCcpXG4gICAgfHwgaGFzS2V5KHJhbmdlLCAnZ3RlJylcbiAgICB8fCBoYXNLZXkocmFuZ2UsICdtaW4nKVxuICAgIHx8IChyYW5nZS5yZXZlcnNlID8gaGFzS2V5KHJhbmdlLCAnZW5kJykgOiBoYXNLZXkocmFuZ2UsICdzdGFydCcpKVxuICAgIHx8IHVuZGVmaW5lZFxuICAgIClcbn1cblxudmFyIGxvd2VyQm91bmQgPSBleHBvcnRzLmxvd2VyQm91bmQgPSBmdW5jdGlvbiAocmFuZ2UsIGRlZikge1xuICB2YXIgayA9IGxvd2VyQm91bmRLZXkocmFuZ2UpXG4gIHJldHVybiBrID8gcmFuZ2Vba10gOiBkZWZcbn1cblxudmFyIGxvd2VyQm91bmRJbmNsdXNpdmUgPSBleHBvcnRzLmxvd2VyQm91bmRJbmNsdXNpdmUgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgcmV0dXJuIGhhcyhyYW5nZSwgJ2d0JykgPyBmYWxzZSA6IHRydWVcbn1cblxudmFyIHVwcGVyQm91bmRJbmNsdXNpdmUgPSBleHBvcnRzLnVwcGVyQm91bmRJbmNsdXNpdmUgPVxuICBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICByZXR1cm4gKGhhcyhyYW5nZSwgJ2x0JykgLyomJiAhcmFuZ2UubWF4RXgqLykgPyBmYWxzZSA6IHRydWVcbiAgfVxuXG52YXIgbG93ZXJCb3VuZEV4Y2x1c2l2ZSA9IGV4cG9ydHMubG93ZXJCb3VuZEV4Y2x1c2l2ZSA9XG4gIGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiAhbG93ZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgfVxuXG52YXIgdXBwZXJCb3VuZEV4Y2x1c2l2ZSA9IGV4cG9ydHMudXBwZXJCb3VuZEV4Y2x1c2l2ZSA9XG4gIGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiAhdXBwZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgfVxuXG52YXIgdXBwZXJCb3VuZEtleSA9IGV4cG9ydHMudXBwZXJCb3VuZEtleSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgaGFzS2V5KHJhbmdlLCAnbHQnKVxuICAgIHx8IGhhc0tleShyYW5nZSwgJ2x0ZScpXG4gICAgfHwgaGFzS2V5KHJhbmdlLCAnbWF4JylcbiAgICB8fCAocmFuZ2UucmV2ZXJzZSA/IGhhc0tleShyYW5nZSwgJ3N0YXJ0JykgOiBoYXNLZXkocmFuZ2UsICdlbmQnKSlcbiAgICB8fCB1bmRlZmluZWRcbiAgICApXG59XG5cbnZhciB1cHBlckJvdW5kID0gZXhwb3J0cy51cHBlckJvdW5kID0gZnVuY3Rpb24gKHJhbmdlLCBkZWYpIHtcbiAgdmFyIGsgPSB1cHBlckJvdW5kS2V5KHJhbmdlKVxuICByZXR1cm4gayA/IHJhbmdlW2tdIDogZGVmXG59XG5cbmV4cG9ydHMuc3RhcnQgPSBmdW5jdGlvbiAocmFuZ2UsIGRlZikge1xuICByZXR1cm4gcmFuZ2UucmV2ZXJzZSA/IHVwcGVyQm91bmQocmFuZ2UsIGRlZikgOiBsb3dlckJvdW5kKHJhbmdlLCBkZWYpXG59XG5leHBvcnRzLmVuZCA9IGZ1bmN0aW9uIChyYW5nZSwgZGVmKSB7XG4gIHJldHVybiByYW5nZS5yZXZlcnNlID8gbG93ZXJCb3VuZChyYW5nZSwgZGVmKSA6IHVwcGVyQm91bmQocmFuZ2UsIGRlZilcbn1cbmV4cG9ydHMuc3RhcnRJbmNsdXNpdmUgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgcmV0dXJuIChcbiAgICByYW5nZS5yZXZlcnNlXG4gID8gdXBwZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgOiBsb3dlckJvdW5kSW5jbHVzaXZlKHJhbmdlKVxuICApXG59XG5leHBvcnRzLmVuZEluY2x1c2l2ZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICByZXR1cm4gKFxuICAgIHJhbmdlLnJldmVyc2VcbiAgPyBsb3dlckJvdW5kSW5jbHVzaXZlKHJhbmdlKVxuICA6IHVwcGVyQm91bmRJbmNsdXNpdmUocmFuZ2UpXG4gIClcbn1cblxuZnVuY3Rpb24gaWQgKGUpIHsgcmV0dXJuIGUgfVxuXG5leHBvcnRzLnRvTHRndCA9IGZ1bmN0aW9uIChyYW5nZSwgX3JhbmdlLCBtYXAsIGxvd2VyLCB1cHBlcikge1xuICBfcmFuZ2UgPSBfcmFuZ2UgfHwge31cbiAgbWFwID0gbWFwIHx8IGlkXG4gIHZhciBkZWZhdWx0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzXG4gIHZhciBsYiA9IGV4cG9ydHMubG93ZXJCb3VuZEtleShyYW5nZSlcbiAgdmFyIHViID0gZXhwb3J0cy51cHBlckJvdW5kS2V5KHJhbmdlKVxuICBpZihsYikge1xuICAgIGlmKGxiID09PSAnZ3QnKSBfcmFuZ2UuZ3QgPSBtYXAocmFuZ2UuZ3QsIGZhbHNlKVxuICAgIGVsc2UgICAgICAgICAgICBfcmFuZ2UuZ3RlID0gbWFwKHJhbmdlW2xiXSwgZmFsc2UpXG4gIH1cbiAgZWxzZSBpZihkZWZhdWx0cylcbiAgICBfcmFuZ2UuZ3RlID0gbWFwKGxvd2VyLCBmYWxzZSlcblxuICBpZih1Yikge1xuICAgIGlmKHViID09PSAnbHQnKSBfcmFuZ2UubHQgPSBtYXAocmFuZ2UubHQsIHRydWUpXG4gICAgZWxzZSAgICAgICAgICAgIF9yYW5nZS5sdGUgPSBtYXAocmFuZ2VbdWJdLCB0cnVlKVxuICB9XG4gIGVsc2UgaWYoZGVmYXVsdHMpXG4gICAgX3JhbmdlLmx0ZSA9IG1hcCh1cHBlciwgdHJ1ZSlcblxuICBpZihyYW5nZS5yZXZlcnNlICE9IG51bGwpXG4gICAgX3JhbmdlLnJldmVyc2UgPSAhIXJhbmdlLnJldmVyc2VcblxuICAvL2lmIHJhbmdlIHdhcyB1c2VkIG11dGFibHlcbiAgLy8oaW4gbGV2ZWwtc3VibGV2ZWwgaXQncyBwYXJ0IG9mIGFuIG9wdGlvbnMgb2JqZWN0XG4gIC8vdGhhdCBoYXMgbW9yZSBwcm9wZXJ0aWVzIG9uIGl0LilcbiAgaWYoaGFzKF9yYW5nZSwgJ21heCcpKSAgIGRlbGV0ZSBfcmFuZ2UubWF4XG4gIGlmKGhhcyhfcmFuZ2UsICdtaW4nKSkgICBkZWxldGUgX3JhbmdlLm1pblxuICBpZihoYXMoX3JhbmdlLCAnc3RhcnQnKSkgZGVsZXRlIF9yYW5nZS5zdGFydFxuICBpZihoYXMoX3JhbmdlLCAnZW5kJykpICAgZGVsZXRlIF9yYW5nZS5lbmRcblxuICByZXR1cm4gX3JhbmdlXG59XG5cbmV4cG9ydHMuY29udGFpbnMgPSBmdW5jdGlvbiAocmFuZ2UsIGtleSwgY29tcGFyZSkge1xuICBjb21wYXJlID0gY29tcGFyZSB8fCBleHBvcnRzLmNvbXBhcmVcblxuICB2YXIgbGIgPSBsb3dlckJvdW5kKHJhbmdlKVxuICBpZihpc0RlZihsYikpIHtcbiAgICB2YXIgY21wID0gY29tcGFyZShrZXksIGxiKVxuICAgIGlmKGNtcCA8IDAgfHwgKGNtcCA9PT0gMCAmJiBsb3dlckJvdW5kRXhjbHVzaXZlKHJhbmdlKSkpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHZhciB1YiA9IHVwcGVyQm91bmQocmFuZ2UpXG4gIGlmKGlzRGVmKHViKSkge1xuICAgIHZhciBjbXAgPSBjb21wYXJlKGtleSwgdWIpXG4gICAgaWYoY21wID4gMCB8fCAoY21wID09PSAwKSAmJiB1cHBlckJvdW5kRXhjbHVzaXZlKHJhbmdlKSlcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0cy5maWx0ZXIgPSBmdW5jdGlvbiAocmFuZ2UsIGNvbXBhcmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb250YWlucyhyYW5nZSwga2V5LCBjb21wYXJlKVxuICB9XG59XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCdpbW1lZGlhdGUnKVxuIiwidmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxudmFyIEFic3RyYWN0TGV2ZWxET1dOID0gcmVxdWlyZSgnYWJzdHJhY3QtbGV2ZWxkb3duJykuQWJzdHJhY3RMZXZlbERPV05cbnZhciBBYnN0cmFjdEl0ZXJhdG9yID0gcmVxdWlyZSgnYWJzdHJhY3QtbGV2ZWxkb3duJykuQWJzdHJhY3RJdGVyYXRvclxudmFyIGx0Z3QgPSByZXF1aXJlKCdsdGd0JylcbnZhciBjcmVhdGVSQlQgPSByZXF1aXJlKCdmdW5jdGlvbmFsLXJlZC1ibGFjay10cmVlJylcbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlclxuXG4vLyBJbiBOb2RlLCB1c2UgZ2xvYmFsLnNldEltbWVkaWF0ZS4gSW4gdGhlIGJyb3dzZXIsIHVzZSBhIGNvbnNpc3RlbnRcbi8vIG1pY3JvdGFzayBsaWJyYXJ5IHRvIGdpdmUgY29uc2lzdGVudCBtaWNyb3Rhc2sgZXhwZXJpZW5jZSB0byBhbGwgYnJvd3NlcnNcbnZhciBzZXRJbW1lZGlhdGUgPSByZXF1aXJlKCcuL2ltbWVkaWF0ZScpXG5cbmZ1bmN0aW9uIGd0ICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA+IDBcbn1cblxuZnVuY3Rpb24gZ3RlICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA+PSAwXG59XG5cbmZ1bmN0aW9uIGx0ICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA8IDBcbn1cblxuZnVuY3Rpb24gbHRlICh2YWx1ZSkge1xuICByZXR1cm4gbHRndC5jb21wYXJlKHZhbHVlLCB0aGlzLl91cHBlckJvdW5kKSA8PSAwXG59XG5cbmZ1bmN0aW9uIE1lbUl0ZXJhdG9yIChkYiwgb3B0aW9ucykge1xuICBBYnN0cmFjdEl0ZXJhdG9yLmNhbGwodGhpcywgZGIpXG4gIHRoaXMuX2xpbWl0ID0gb3B0aW9ucy5saW1pdFxuXG4gIGlmICh0aGlzLl9saW1pdCA9PT0gLTEpIHRoaXMuX2xpbWl0ID0gSW5maW5pdHlcblxuICB2YXIgdHJlZSA9IGRiLl9zdG9yZVxuXG4gIHRoaXMua2V5QXNCdWZmZXIgPSBvcHRpb25zLmtleUFzQnVmZmVyICE9PSBmYWxzZVxuICB0aGlzLnZhbHVlQXNCdWZmZXIgPSBvcHRpb25zLnZhbHVlQXNCdWZmZXIgIT09IGZhbHNlXG4gIHRoaXMuX3JldmVyc2UgPSBvcHRpb25zLnJldmVyc2VcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5fZG9uZSA9IDBcblxuICBpZiAoIXRoaXMuX3JldmVyc2UpIHtcbiAgICB0aGlzLl9pbmNyID0gJ25leHQnXG4gICAgdGhpcy5fbG93ZXJCb3VuZCA9IGx0Z3QubG93ZXJCb3VuZChvcHRpb25zKVxuICAgIHRoaXMuX3VwcGVyQm91bmQgPSBsdGd0LnVwcGVyQm91bmQob3B0aW9ucylcblxuICAgIGlmICh0eXBlb2YgdGhpcy5fbG93ZXJCb3VuZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmJlZ2luXG4gICAgfSBlbHNlIGlmIChsdGd0Lmxvd2VyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmdlKHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmd0KHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3VwcGVyQm91bmQpIHtcbiAgICAgIGlmIChsdGd0LnVwcGVyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGx0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGx0XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2luY3IgPSAncHJldidcbiAgICB0aGlzLl9sb3dlckJvdW5kID0gbHRndC51cHBlckJvdW5kKG9wdGlvbnMpXG4gICAgdGhpcy5fdXBwZXJCb3VuZCA9IGx0Z3QubG93ZXJCb3VuZChvcHRpb25zKVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9sb3dlckJvdW5kID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fdHJlZSA9IHRyZWUuZW5kXG4gICAgfSBlbHNlIGlmIChsdGd0LnVwcGVyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmxlKHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmx0KHRoaXMuX2xvd2VyQm91bmQpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3VwcGVyQm91bmQpIHtcbiAgICAgIGlmIChsdGd0Lmxvd2VyQm91bmRJbmNsdXNpdmUob3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGd0ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdGVzdCA9IGd0XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmluaGVyaXRzKE1lbUl0ZXJhdG9yLCBBYnN0cmFjdEl0ZXJhdG9yKVxuXG5NZW1JdGVyYXRvci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdmFyIGtleVxuICB2YXIgdmFsdWVcblxuICBpZiAodGhpcy5fZG9uZSsrID49IHRoaXMuX2xpbWl0KSByZXR1cm4gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKVxuICBpZiAoIXRoaXMuX3RyZWUudmFsaWQpIHJldHVybiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spXG5cbiAga2V5ID0gdGhpcy5fdHJlZS5rZXlcbiAgdmFsdWUgPSB0aGlzLl90cmVlLnZhbHVlXG5cbiAgaWYgKCF0aGlzLl90ZXN0KGtleSkpIHJldHVybiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spXG5cbiAgaWYgKHRoaXMua2V5QXNCdWZmZXIgJiYgIUJ1ZmZlci5pc0J1ZmZlcihrZXkpKSB7XG4gICAga2V5ID0gQnVmZmVyLmZyb20oU3RyaW5nKGtleSkpXG4gIH1cblxuICBpZiAodGhpcy52YWx1ZUFzQnVmZmVyICYmICFCdWZmZXIuaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgdmFsdWUgPSBCdWZmZXIuZnJvbShTdHJpbmcodmFsdWUpKVxuICB9XG5cbiAgdGhpcy5fdHJlZVt0aGlzLl9pbmNyXSgpXG5cbiAgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uIGNhbGxOZXh0ICgpIHtcbiAgICBjYWxsYmFjayhudWxsLCBrZXksIHZhbHVlKVxuICB9KVxufVxuXG5NZW1JdGVyYXRvci5wcm90b3R5cGUuX3Rlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIE1lbURPV04gKCkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWVtRE9XTikpIHJldHVybiBuZXcgTWVtRE9XTigpXG5cbiAgQWJzdHJhY3RMZXZlbERPV04uY2FsbCh0aGlzLCAnJylcblxuICB0aGlzLl9zdG9yZSA9IGNyZWF0ZVJCVChsdGd0LmNvbXBhcmUpXG59XG5cbmluaGVyaXRzKE1lbURPV04sIEFic3RyYWN0TGV2ZWxET1dOKVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fb3BlbiA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uIGNhbGxOZXh0ICgpIHtcbiAgICBjYWxsYmFjayhudWxsLCBzZWxmKVxuICB9KVxufVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fc2VyaWFsaXplS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5XG59XG5cbk1lbURPV04ucHJvdG90eXBlLl9zZXJpYWxpemVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWVcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX3B1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgaXRlciA9IHRoaXMuX3N0b3JlLmZpbmQoa2V5KVxuXG4gIGlmIChpdGVyLnZhbGlkKSB7XG4gICAgdGhpcy5fc3RvcmUgPSBpdGVyLnVwZGF0ZSh2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9zdG9yZSA9IHRoaXMuX3N0b3JlLmluc2VydChrZXksIHZhbHVlKVxuICB9XG5cbiAgc2V0SW1tZWRpYXRlKGNhbGxiYWNrKVxufVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fZ2V0ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIHZhbHVlID0gdGhpcy5fc3RvcmUuZ2V0KGtleSlcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vICdOb3RGb3VuZCcgZXJyb3IsIGNvbnNpc3RlbnQgd2l0aCBMZXZlbERPV04gQVBJXG4gICAgcmV0dXJuIHNldEltbWVkaWF0ZShmdW5jdGlvbiBjYWxsTmV4dCAoKSB7XG4gICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ05vdEZvdW5kJykpXG4gICAgfSlcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFzQnVmZmVyICE9PSBmYWxzZSAmJiAhQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgIHZhbHVlID0gQnVmZmVyLmZyb20oU3RyaW5nKHZhbHVlKSlcbiAgfVxuXG4gIHNldEltbWVkaWF0ZShmdW5jdGlvbiBjYWxsTmV4dCAoKSB7XG4gICAgY2FsbGJhY2sobnVsbCwgdmFsdWUpXG4gIH0pXG59XG5cbk1lbURPV04ucHJvdG90eXBlLl9kZWwgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB0aGlzLl9zdG9yZSA9IHRoaXMuX3N0b3JlLnJlbW92ZShrZXkpXG4gIHNldEltbWVkaWF0ZShjYWxsYmFjaylcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX2JhdGNoID0gZnVuY3Rpb24gKGFycmF5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgaSA9IC0xXG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG4gIHZhciBpdGVyXG4gIHZhciBsZW4gPSBhcnJheS5sZW5ndGhcbiAgdmFyIHRyZWUgPSB0aGlzLl9zdG9yZVxuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICBrZXkgPSBhcnJheVtpXS5rZXlcbiAgICBpdGVyID0gdHJlZS5maW5kKGtleSlcblxuICAgIGlmIChhcnJheVtpXS50eXBlID09PSAncHV0Jykge1xuICAgICAgdmFsdWUgPSBhcnJheVtpXS52YWx1ZVxuICAgICAgdHJlZSA9IGl0ZXIudmFsaWQgPyBpdGVyLnVwZGF0ZSh2YWx1ZSkgOiB0cmVlLmluc2VydChrZXksIHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0cmVlID0gaXRlci5yZW1vdmUoKVxuICAgIH1cbiAgfVxuXG4gIHRoaXMuX3N0b3JlID0gdHJlZVxuXG4gIHNldEltbWVkaWF0ZShjYWxsYmFjaylcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX2l0ZXJhdG9yID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBNZW1JdGVyYXRvcih0aGlzLCBvcHRpb25zKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1lbURPV04uZGVmYXVsdCA9IE1lbURPV05cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLWRlcHJlY2F0ZWQtYXBpICovXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJylcbnZhciBCdWZmZXIgPSBidWZmZXIuQnVmZmVyXG5cbi8vIGFsdGVybmF0aXZlIHRvIHVzaW5nIE9iamVjdC5rZXlzIGZvciBvbGQgYnJvd3NlcnNcbmZ1bmN0aW9uIGNvcHlQcm9wcyAoc3JjLCBkc3QpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGRzdFtrZXldID0gc3JjW2tleV1cbiAgfVxufVxuaWYgKEJ1ZmZlci5mcm9tICYmIEJ1ZmZlci5hbGxvYyAmJiBCdWZmZXIuYWxsb2NVbnNhZmUgJiYgQnVmZmVyLmFsbG9jVW5zYWZlU2xvdykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlclxufSBlbHNlIHtcbiAgLy8gQ29weSBwcm9wZXJ0aWVzIGZyb20gcmVxdWlyZSgnYnVmZmVyJylcbiAgY29weVByb3BzKGJ1ZmZlciwgZXhwb3J0cylcbiAgZXhwb3J0cy5CdWZmZXIgPSBTYWZlQnVmZmVyXG59XG5cbmZ1bmN0aW9uIFNhZmVCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBCdWZmZXIoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbi8vIENvcHkgc3RhdGljIG1ldGhvZHMgZnJvbSBCdWZmZXJcbmNvcHlQcm9wcyhCdWZmZXIsIFNhZmVCdWZmZXIpXG5cblNhZmVCdWZmZXIuZnJvbSA9IGZ1bmN0aW9uIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuU2FmZUJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgdmFyIGJ1ZiA9IEJ1ZmZlcihzaXplKVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgIH0gZWxzZSB7XG4gICAgICBidWYuZmlsbChmaWxsKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBidWYuZmlsbCgwKVxuICB9XG4gIHJldHVybiBidWZcbn1cblxuU2FmZUJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gQnVmZmVyKHNpemUpXG59XG5cblNhZmVCdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBidWZmZXIuU2xvd0J1ZmZlcihzaXplKVxufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgbWVtRG93bkNhY2hlIH0gZnJvbSAnLi9tZW1kb3duQ2FjaGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNZW1DYWNoZU1peGlucyB9IGZyb20gJy4vbWVtY2FjaGUubWl4aW5zJztcbiIsIlxuY29uc3QgTWVtQ2FjaGVNaXhpbnMgPSAoQmFzZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUNsYXNze1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kcyByZXR1cm4gc3VtbWFyeSBhYm91dCBpdGVtcyBvZiB0aGUgY3VycmVudCBtZW1jYWNoZSBcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGFzeW5jIG1lbUNhY2hlU3VtbWFyeSgpe1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5tZW1DYWNoZS5nZXRJdGVtTGlzdCgpO1xuICAgIH1cbiAgICBcbiAgICBzZXQgTWVtQ2FjaGUobWVtQ2FjaGUpe1xuICAgICAgICB0aGlzLm1lbUNhY2hlID0gbWVtQ2FjaGU7XG4gICAgfVxuXG4gICAgZ2V0IE1lbUNhY2hlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbUNhY2hlO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBNZW1DYWNoZU1peGluczsiLCJpbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgU3RvcmUgYXMgQmFzZU1lbUNhY2hlIH0gZnJvbSAnY2F1c2FsLW5ldC5jb3JlJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgTWVtb3JpemluZ01peGlucyB9IGZyb20gJy4vbWVtb3JpemluZy5taXhpbnMnO1xuLyoqXG4gKiBUaGlzIE1lbWRvd25DYWNoZSBwcm92aWRlIG1lbWNhY2hlIGltcGxlbWVudCBiYXNlZCBvbiBcbiAqIFttZW1kb3duXShodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9tZW1kb3duKVxuICogeyBtaXhXaXRoOiBbIE1lbW9yaXppbmdNaXhpbnMgXSB9XG4gKiBAY2xhc3MgTWVtb3J5Q2FjaGVcbiAqIEBleHRlbmRzIEJhc2VNZW1DYWNoZVxuICovXG5jbGFzcyBNZW1kb3duQ2FjaGUgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKCBCYXNlTWVtQ2FjaGUsXG4gICAgWyBNZW1vcml6aW5nTWl4aW5zIF0pe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb25uZWN0IHRvIGRhdGFiYXNlLCB0aGlzIGZ1bmN0aW9uIHNoYWxsIGJlIGNhbGwgd2hlbiBjb25zdHJ1Y3QgaW5zdGFuY2VcbiAgICAgKiBAbWVtYmVyb2YgTWVtZG93bkNhY2hlXG4gICAgICovXG4gICAgY29ubmVjdCgpe1xuICAgICAgICBsZXQgbWVtZG93biA9IHJlcXVpcmUoJ21lbWRvd24nKTtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHRoaXMubGV2ZWx1cChtZW1kb3duKCkpOyAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTWVtZG93bkNhY2hlKCk7IiwiLyoqXG4gKiBUaGlzIE1lbW9yaXppbmdNaXhpbnMgY2xhc3MgaXMgYSBtaXhpbnMgY2xhc3MgZm9yIGltcGxlbWVudCBtZW1vcnkgbWV0aG9kc1xuICogQGNsYXNzIE1lbW9yaXppbmdNaXhpbnNcbiAqIEBleHBlcmltZW50XG4gKiBAZXh0ZW5kcyBCYXNlTWVtQ2FjaGVDbGFzc1xuICovXG5jb25zdCBNZW1vcml6aW5nTWl4aW5zID0gKEJhc2VNZW1DYWNoZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZU1lbUNhY2hlQ2xhc3N7XG4gICAgLyoqXG4gICAgICogUmVhZCBjb250ZW50IGZyb20gXG4gICAgICogQGV4cGVyaW1lbnRcbiAgICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gbWVtb3J5U2xvdEluZGV4IC0gbWVtb3J5IHNsb3QgaW5kZXhcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGFzeW5jIHJlYWQobWVtb3J5U2xvdEluZGV4KXtcbiAgICAgICAgY29uc3QgR2V0RnJvbU1lbW9yeSA9IGFzeW5jIChtZW1vcnlTbG90SW5kZXgpPT57XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmdldEl0ZW0obWVtb3J5U2xvdEluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhkYXRhKVswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYXdhaXQgR2V0RnJvbU1lbW9yeShtZW1vcnlTbG90SW5kZXgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gbWVtb3J5U2xvdEluZGV4IC0gcG9zaXRpdmUgbnVtYmVyIGZvciBtZW1vcnkgc2xvdFxuICAgICAqIEBwYXJhbSB7IEFycmF5IH0gbWVtb3J5IHZhbHVlXG4gICAgICogQHJldHVybnMgeyBQcm9taXNlIH0gbWVtb3J5IHNsb3QgaW5kZXggdmFsdWVcbiAgICAgKi9cbiAgICBhc3luYyB3cml0ZShtZW1vcnlTbG90SW5kZXgsIHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2V0SXRlbShtZW1vcnlTbG90SW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gc2xvdElkeHNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGFzeW5jIHJlY2FsbChzbG90SWR4cyl7XG4gICAgICAgIGxldCBtZW1vcnkgPSBbXTtcbiAgICAgICAgZm9yKGxldCBzbG90SWR4IG9mIHNsb3RJZHhzKXtcbiAgICAgICAgICAgIG1lbW9yeS5wdXNoKGF3YWl0IHRoaXMucmVhZChzbG90SWR4KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbW9yeTtcbiAgICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgTWVtb3JpemluZ01peGluczsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./src/causalNetMemory.js":
/*!********************************!*\
  !*** ./src/causalNetMemory.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.core */ "causal-net.core");
/* harmony import */ var causal_net_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.memcache */ "../causality-memcache/dist/@causalNet/memcache.web.js");
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_memcache__WEBPACK_IMPORTED_MODULE_1__);



class CausalNetMemory extends causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Tensor"] {
  constructor() {
    super();
    this.Memory = causal_net_memcache__WEBPACK_IMPORTED_MODULE_1__["memDownCache"];
    this.R = causal_net_core__WEBPACK_IMPORTED_MODULE_0__["causalNetCore"].CoreFunction;
  }

  set Memory(memory) {
    //TODO: type checking 
    this.memory = memory;
  }

  get Memory() {
    if (!this.memory) {
      throw Error(`memory is not set`);
    }

    return this.memory;
  }

  get MemorySize() {
    return this.memorySize;
  }

  set MemorySize(size) {
    this.memorySize = size;
  }

  get NumSlots() {
    return this.memorySize[0];
  }

  get SlotSize() {
    return this.memorySize[1];
  }

  async initMemory(size, initTensor = null) {
    this.MemorySize = size;
    const R = this.R;

    if (!initTensor) {
      initTensor = await this.T.randomNormal(size);
    }

    let slotIdxs = R.range(0, this.NumSlots);
    return this.writeSlots(slotIdxs, initTensor);
  }

  async normalize() {
    const Memory = this.Memory,
          NumSlots = this.NumSlots,
          R = this.R;
    let memValues = await Memory.recall(R.range(0, NumSlots));
    let allTs = this.T.tensor(memValues);
    let meanTs = allTs.mean(1, true);
    let stdTs = allTs.sub(meanTs).pow(2).mean(1, true).pow(0.5);
    return allTs.sub(meanTs).div(stdTs);
  }

  async getMatchScore(slotIdxs) {
    let normTs = await this.normalize();
    let cTs = normTs.gather(slotIdxs);
    let similarityScore = normTs.dot(cTs.transpose());
    return similarityScore;
  }

  async getTopKSimilar(slotIdxs, k) {
    let matchScoreTensor = await this.getMatchScore(slotIdxs);
    const {
      values,
      indices
    } = matchScoreTensor.transpose().topk(k);
    return indices;
  }

  async writeSlots(slotIdxs, memoryTensor) {
    const R = this.R,
          SlotSize = this.SlotSize,
          Memory = this.Memory;
    let tensorData = await memoryTensor.data();
    let values = R.splitEvery(SlotSize, tensorData);

    for (let idx of R.range(0, slotIdxs.length)) {
      await Memory.write(slotIdxs[idx], values[idx]);
    }

    return memoryTensor;
  }

  async readSlots(slotIndexs) {
    const Memory = this.Memory,
          T = this.T;
    let values = [];

    for (let slotIdx of slotIndexs) {
      let value = await Memory.read(slotIdx);
      values.push(value);
    }

    return T.variable(T.tensor(values));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CausalNetMemory());

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: causalNetMemory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _causalNetMemory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./causalNetMemory */ "./src/causalNetMemory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "causalNetMemory", function() { return _causalNetMemory__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L21lbW9yeS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvLi4vY2F1c2FsaXR5LW1lbWNhY2hlL2Rpc3QvQGNhdXNhbE5ldC9tZW1jYWNoZS53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvLi9zcmMvY2F1c2FsTmV0TWVtb3J5LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtb3J5Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbWVtb3J5L2V4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9tZW1vcnkvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnV0aWxzXCIiXSwibmFtZXMiOlsiQ2F1c2FsTmV0TWVtb3J5IiwiVGVuc29yIiwiY29uc3RydWN0b3IiLCJNZW1vcnkiLCJtZW1Eb3duQ2FjaGUiLCJSIiwiY2F1c2FsTmV0Q29yZSIsIkNvcmVGdW5jdGlvbiIsIm1lbW9yeSIsIkVycm9yIiwiTWVtb3J5U2l6ZSIsIm1lbW9yeVNpemUiLCJzaXplIiwiTnVtU2xvdHMiLCJTbG90U2l6ZSIsImluaXRNZW1vcnkiLCJpbml0VGVuc29yIiwiVCIsInJhbmRvbU5vcm1hbCIsInNsb3RJZHhzIiwicmFuZ2UiLCJ3cml0ZVNsb3RzIiwibm9ybWFsaXplIiwibWVtVmFsdWVzIiwicmVjYWxsIiwiYWxsVHMiLCJ0ZW5zb3IiLCJtZWFuVHMiLCJtZWFuIiwic3RkVHMiLCJzdWIiLCJwb3ciLCJkaXYiLCJnZXRNYXRjaFNjb3JlIiwibm9ybVRzIiwiY1RzIiwiZ2F0aGVyIiwic2ltaWxhcml0eVNjb3JlIiwiZG90IiwidHJhbnNwb3NlIiwiZ2V0VG9wS1NpbWlsYXIiLCJrIiwibWF0Y2hTY29yZVRlbnNvciIsInZhbHVlcyIsImluZGljZXMiLCJ0b3BrIiwibWVtb3J5VGVuc29yIiwidGVuc29yRGF0YSIsImRhdGEiLCJzcGxpdEV2ZXJ5IiwiaWR4IiwibGVuZ3RoIiwid3JpdGUiLCJyZWFkU2xvdHMiLCJzbG90SW5kZXhzIiwic2xvdElkeCIsInZhbHVlIiwicmVhZCIsInB1c2giLCJ2YXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLElBQUksSUFBeUQ7QUFDN0QsMkJBQTJCLG1CQUFPLENBQUMsd0NBQWlCLEdBQUcsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDakYsTUFBTSxFQUtxRjtBQUMzRixDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsc0NBQXNDO0FBQy9EOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZOztBQUVaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qix3QkFBd0I7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsYUFBYTs7QUFFakQ7O0FBRUE7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0MsYUFBYTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxvQ0FBb0MsYUFBYTs7QUFFakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW9DLGFBQWE7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxvQ0FBb0MsYUFBYTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCLHNDQUFzQzs7QUFFdEMsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxhQUFhOztBQUU3RDs7QUFFQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsYUFBYTtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxTQUFTO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEVBQUU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQSxxQkFBcUIsZUFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixZQUFZO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsaUJBQWlCOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsV0FBVzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxXQUFXOztBQUVuQjtBQUNBO0FBQ0EsUUFBUSxVQUFVOztBQUVsQjtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUU1QixPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLDRCQUE0Qjs7QUFFNUIsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7O0FBR3RDLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFHQUFxRyw4REFBOEQsRUFBRTs7QUFFcks7QUFDQSx1R0FBdUcsaUVBQWlFLEVBQUU7Ozs7O0FBSzFLLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLGFBQWEsUUFBUTtBQUNyQixlQUFlLFVBQVU7QUFDekI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUCxVQUFVO0FBQ1YsQ0FBQztBQUNELDJDQUEyQyxjQUFjLHV1Z007Ozs7Ozs7Ozs7OztBQ3Z2SnpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNBLE1BQU1BLGVBQU4sU0FBOEJDLHNEQUE5QixDQUFvQztBQUNoQ0MsYUFBVyxHQUFFO0FBQ1Q7QUFDQSxTQUFLQyxNQUFMLEdBQWNDLGdFQUFkO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQyw2REFBYSxDQUFDQyxZQUF2QjtBQUNIOztBQUNELE1BQUlKLE1BQUosQ0FBV0ssTUFBWCxFQUFrQjtBQUNkO0FBQ0EsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7O0FBQ0QsTUFBSUwsTUFBSixHQUFZO0FBQ1IsUUFBRyxDQUFDLEtBQUtLLE1BQVQsRUFBZ0I7QUFDWixZQUFNQyxLQUFLLENBQUUsbUJBQUYsQ0FBWDtBQUNIOztBQUNELFdBQU8sS0FBS0QsTUFBWjtBQUNIOztBQUNELE1BQUlFLFVBQUosR0FBZ0I7QUFDWixXQUFPLEtBQUtDLFVBQVo7QUFDSDs7QUFDRCxNQUFJRCxVQUFKLENBQWVFLElBQWYsRUFBb0I7QUFDaEIsU0FBS0QsVUFBTCxHQUFrQkMsSUFBbEI7QUFDSDs7QUFDRCxNQUFJQyxRQUFKLEdBQWM7QUFDVixXQUFPLEtBQUtGLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBUDtBQUNIOztBQUNELE1BQUlHLFFBQUosR0FBYztBQUVWLFdBQU8sS0FBS0gsVUFBTCxDQUFnQixDQUFoQixDQUFQO0FBQ0g7O0FBQ0QsUUFBTUksVUFBTixDQUFpQkgsSUFBakIsRUFBdUJJLFVBQVUsR0FBQyxJQUFsQyxFQUF1QztBQUNuQyxTQUFLTixVQUFMLEdBQWtCRSxJQUFsQjtBQUNBLFVBQU1QLENBQUMsR0FBRyxLQUFLQSxDQUFmOztBQUNBLFFBQUcsQ0FBQ1csVUFBSixFQUFlO0FBQ1hBLGdCQUFVLEdBQUcsTUFBTSxLQUFLQyxDQUFMLENBQU9DLFlBQVAsQ0FBb0JOLElBQXBCLENBQW5CO0FBQ0g7O0FBQ0QsUUFBSU8sUUFBUSxHQUFHZCxDQUFDLENBQUNlLEtBQUYsQ0FBUSxDQUFSLEVBQVcsS0FBS1AsUUFBaEIsQ0FBZjtBQUNBLFdBQU8sS0FBS1EsVUFBTCxDQUFnQkYsUUFBaEIsRUFBMEJILFVBQTFCLENBQVA7QUFDSDs7QUFFRCxRQUFNTSxTQUFOLEdBQWlCO0FBQ2IsVUFBTW5CLE1BQU0sR0FBRyxLQUFLQSxNQUFwQjtBQUFBLFVBQTRCVSxRQUFRLEdBQUcsS0FBS0EsUUFBNUM7QUFBQSxVQUFzRFIsQ0FBQyxHQUFHLEtBQUtBLENBQS9EO0FBQ0EsUUFBSWtCLFNBQVMsR0FBRyxNQUFNcEIsTUFBTSxDQUFDcUIsTUFBUCxDQUFjbkIsQ0FBQyxDQUFDZSxLQUFGLENBQVEsQ0FBUixFQUFXUCxRQUFYLENBQWQsQ0FBdEI7QUFDQSxRQUFJWSxLQUFLLEdBQUcsS0FBS1IsQ0FBTCxDQUFPUyxNQUFQLENBQWNILFNBQWQsQ0FBWjtBQUNBLFFBQUlJLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVcsQ0FBWCxFQUFjLElBQWQsQ0FBYjtBQUNBLFFBQUlDLEtBQUssR0FBR0osS0FBSyxDQUFDSyxHQUFOLENBQVVILE1BQVYsRUFBa0JJLEdBQWxCLENBQXNCLENBQXRCLEVBQXlCSCxJQUF6QixDQUE4QixDQUE5QixFQUFpQyxJQUFqQyxFQUF1Q0csR0FBdkMsQ0FBMkMsR0FBM0MsQ0FBWjtBQUNBLFdBQU9OLEtBQUssQ0FBQ0ssR0FBTixDQUFVSCxNQUFWLEVBQWtCSyxHQUFsQixDQUFzQkgsS0FBdEIsQ0FBUDtBQUNIOztBQUVELFFBQU1JLGFBQU4sQ0FBb0JkLFFBQXBCLEVBQTZCO0FBQ3pCLFFBQUllLE1BQU0sR0FBRyxNQUFNLEtBQUtaLFNBQUwsRUFBbkI7QUFDQSxRQUFJYSxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsTUFBUCxDQUFjakIsUUFBZCxDQUFWO0FBQ0EsUUFBSWtCLGVBQWUsR0FBR0gsTUFBTSxDQUFDSSxHQUFQLENBQVdILEdBQUcsQ0FBQ0ksU0FBSixFQUFYLENBQXRCO0FBQ0EsV0FBT0YsZUFBUDtBQUNIOztBQUVELFFBQU1HLGNBQU4sQ0FBcUJyQixRQUFyQixFQUErQnNCLENBQS9CLEVBQWlDO0FBQzdCLFFBQUlDLGdCQUFnQixHQUFHLE1BQU0sS0FBS1QsYUFBTCxDQUFtQmQsUUFBbkIsQ0FBN0I7QUFDQSxVQUFNO0FBQUN3QixZQUFEO0FBQVNDO0FBQVQsUUFBb0JGLGdCQUFnQixDQUFDSCxTQUFqQixHQUE2Qk0sSUFBN0IsQ0FBa0NKLENBQWxDLENBQTFCO0FBQ0EsV0FBT0csT0FBUDtBQUNIOztBQUVELFFBQU12QixVQUFOLENBQWlCRixRQUFqQixFQUEyQjJCLFlBQTNCLEVBQXdDO0FBQ3BDLFVBQU16QyxDQUFDLEdBQUcsS0FBS0EsQ0FBZjtBQUFBLFVBQWtCUyxRQUFRLEdBQUcsS0FBS0EsUUFBbEM7QUFBQSxVQUE0Q1gsTUFBTSxHQUFHLEtBQUtBLE1BQTFEO0FBQ0EsUUFBSTRDLFVBQVUsR0FBRyxNQUFNRCxZQUFZLENBQUNFLElBQWIsRUFBdkI7QUFDQSxRQUFJTCxNQUFNLEdBQUd0QyxDQUFDLENBQUM0QyxVQUFGLENBQWFuQyxRQUFiLEVBQXVCaUMsVUFBdkIsQ0FBYjs7QUFDQSxTQUFJLElBQUlHLEdBQVIsSUFBZTdDLENBQUMsQ0FBQ2UsS0FBRixDQUFRLENBQVIsRUFBV0QsUUFBUSxDQUFDZ0MsTUFBcEIsQ0FBZixFQUEyQztBQUN2QyxZQUFNaEQsTUFBTSxDQUFDaUQsS0FBUCxDQUFhakMsUUFBUSxDQUFDK0IsR0FBRCxDQUFyQixFQUE0QlAsTUFBTSxDQUFDTyxHQUFELENBQWxDLENBQU47QUFDSDs7QUFDRCxXQUFPSixZQUFQO0FBQ0g7O0FBQ0QsUUFBTU8sU0FBTixDQUFnQkMsVUFBaEIsRUFBMkI7QUFDdkIsVUFBTW5ELE1BQU0sR0FBRyxLQUFLQSxNQUFwQjtBQUFBLFVBQTRCYyxDQUFDLEdBQUcsS0FBS0EsQ0FBckM7QUFDQSxRQUFJMEIsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsU0FBSSxJQUFJWSxPQUFSLElBQW1CRCxVQUFuQixFQUE4QjtBQUMxQixVQUFJRSxLQUFLLEdBQUcsTUFBTXJELE1BQU0sQ0FBQ3NELElBQVAsQ0FBWUYsT0FBWixDQUFsQjtBQUNBWixZQUFNLENBQUNlLElBQVAsQ0FBWUYsS0FBWjtBQUNIOztBQUNELFdBQU92QyxDQUFDLENBQUMwQyxRQUFGLENBQVcxQyxDQUFDLENBQUNTLE1BQUYsQ0FBU2lCLE1BQVQsQ0FBWCxDQUFQO0FBQ0g7O0FBOUUrQjs7QUFpRnJCLG1FQUFJM0MsZUFBSixFQUFmLEU7Ozs7Ozs7Ozs7OztBQ25GQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiQGNhdXNhbE5ldC9tZW1vcnkud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LmNvcmVcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbWVtb3J5XCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC5jb3JlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9tZW1vcnlcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQudXRpbHNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC9tZW1jYWNoZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbWVtY2FjaGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LmNvcmVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtY2hhaW5lZC1iYXRjaC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtY2hhaW5lZC1iYXRjaC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2Vzcykgey8qIENvcHlyaWdodCAoYykgMjAxNyBSb2QgVmFnZywgTUlUIExpY2Vuc2UgKi9cblxuZnVuY3Rpb24gQWJzdHJhY3RDaGFpbmVkQmF0Y2ggKGRiKSB7XG4gIHRoaXMuX2RiID0gZGJcbiAgdGhpcy5fb3BlcmF0aW9ucyA9IFtdXG4gIHRoaXMuX3dyaXR0ZW4gPSBmYWxzZVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuX3NlcmlhbGl6ZUtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX2RiLl9zZXJpYWxpemVLZXkoa2V5KVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUuX3NlcmlhbGl6ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9kYi5fc2VyaWFsaXplVmFsdWUodmFsdWUpXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fY2hlY2tXcml0dGVuID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fd3JpdHRlbikge1xuICAgIHRocm93IG5ldyBFcnJvcignd3JpdGUoKSBhbHJlYWR5IGNhbGxlZCBvbiB0aGlzIGJhdGNoJylcbiAgfVxufVxuXG5BYnN0cmFjdENoYWluZWRCYXRjaC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdGhpcy5fY2hlY2tXcml0dGVuKClcblxuICB2YXIgZXJyID0gdGhpcy5fZGIuX2NoZWNrS2V5KGtleSwgJ2tleScpXG4gIGlmIChlcnIpIHsgdGhyb3cgZXJyIH1cblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuICB2YWx1ZSA9IHRoaXMuX3NlcmlhbGl6ZVZhbHVlKHZhbHVlKVxuXG4gIHRoaXMuX3B1dChrZXksIHZhbHVlKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fcHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdGhpcy5fb3BlcmF0aW9ucy5wdXNoKHsgdHlwZTogJ3B1dCcsIGtleToga2V5LCB2YWx1ZTogdmFsdWUgfSlcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLmRlbCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGhpcy5fY2hlY2tXcml0dGVuKClcblxuICB2YXIgZXJyID0gdGhpcy5fZGIuX2NoZWNrS2V5KGtleSwgJ2tleScpXG4gIGlmIChlcnIpIHsgdGhyb3cgZXJyIH1cblxuICBrZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoa2V5KVxuICB0aGlzLl9kZWwoa2V5KVxuXG4gIHJldHVybiB0aGlzXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fZGVsID0gZnVuY3Rpb24gKGtleSkge1xuICB0aGlzLl9vcGVyYXRpb25zLnB1c2goeyB0eXBlOiAnZGVsJywga2V5OiBrZXkgfSlcbn1cblxuQWJzdHJhY3RDaGFpbmVkQmF0Y2gucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9jaGVja1dyaXR0ZW4oKVxuICB0aGlzLl9vcGVyYXRpb25zID0gW11cbiAgdGhpcy5fY2xlYXIoKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS5fY2xlYXIgPSBmdW5jdGlvbiBub29wICgpIHt9XG5cbkFic3RyYWN0Q2hhaW5lZEJhdGNoLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICB0aGlzLl9jaGVja1dyaXR0ZW4oKVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd3cml0ZSgpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICB0aGlzLl93cml0dGVuID0gdHJ1ZVxuXG4gIC8vIEB0cy1pZ25vcmVcbiAgaWYgKHR5cGVvZiB0aGlzLl93cml0ZSA9PT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gdGhpcy5fd3JpdGUoY2FsbGJhY2spIH1cblxuICBpZiAodHlwZW9mIHRoaXMuX2RiLl9iYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0aGlzLl9kYi5fYmF0Y2godGhpcy5fb3BlcmF0aW9ucywgb3B0aW9ucywgY2FsbGJhY2spXG4gIH1cblxuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFic3RyYWN0Q2hhaW5lZEJhdGNoXG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3Byb2Nlc3MvYnJvd3Nlci5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWl0ZXJhdG9yLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtaXRlcmF0b3IuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7LyogQ29weXJpZ2h0IChjKSAyMDE3IFJvZCBWYWdnLCBNSVQgTGljZW5zZSAqL1xuXG5mdW5jdGlvbiBBYnN0cmFjdEl0ZXJhdG9yIChkYikge1xuICB0aGlzLmRiID0gZGJcbiAgdGhpcy5fZW5kZWQgPSBmYWxzZVxuICB0aGlzLl9uZXh0aW5nID0gZmFsc2Vcbn1cblxuQWJzdHJhY3RJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCduZXh0KCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAoc2VsZi5fZW5kZWQpIHtcbiAgICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBuZXcgRXJyb3IoJ2Nhbm5vdCBjYWxsIG5leHQoKSBhZnRlciBlbmQoKScpKVxuICAgIHJldHVybiBzZWxmXG4gIH1cblxuICBpZiAoc2VsZi5fbmV4dGluZykge1xuICAgIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIG5ldyBFcnJvcignY2Fubm90IGNhbGwgbmV4dCgpIGJlZm9yZSBwcmV2aW91cyBuZXh0KCkgaGFzIGNvbXBsZXRlZCcpKVxuICAgIHJldHVybiBzZWxmXG4gIH1cblxuICBzZWxmLl9uZXh0aW5nID0gdHJ1ZVxuICBzZWxmLl9uZXh0KGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLl9uZXh0aW5nID0gZmFsc2VcbiAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gIH0pXG5cbiAgcmV0dXJuIHNlbGZcbn1cblxuQWJzdHJhY3RJdGVyYXRvci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RJdGVyYXRvci5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2VuZCgpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgaWYgKHRoaXMuX2VuZGVkKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soY2FsbGJhY2ssIG5ldyBFcnJvcignZW5kKCkgYWxyZWFkeSBjYWxsZWQgb24gaXRlcmF0b3InKSlcbiAgfVxuXG4gIHRoaXMuX2VuZGVkID0gdHJ1ZVxuICB0aGlzLl9lbmQoY2FsbGJhY2spXG59XG5cbkFic3RyYWN0SXRlcmF0b3IucHJvdG90eXBlLl9lbmQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBYnN0cmFjdEl0ZXJhdG9yXG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbCh0aGlzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL3Byb2Nlc3MvYnJvd3Nlci5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWxldmVsZG93bi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9hYnN0cmFjdC1sZXZlbGRvd24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24ocHJvY2VzcywgQnVmZmVyKSB7LyogQ29weXJpZ2h0IChjKSAyMDE3IFJvZCBWYWdnLCBNSVQgTGljZW5zZSAqL1xuXG52YXIgeHRlbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISB4dGVuZCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanNcIilcbnZhciBBYnN0cmFjdEl0ZXJhdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hYnN0cmFjdC1pdGVyYXRvciAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtaXRlcmF0b3IuanNcIilcbnZhciBBYnN0cmFjdENoYWluZWRCYXRjaCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vYWJzdHJhY3QtY2hhaW5lZC1iYXRjaCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtY2hhaW5lZC1iYXRjaC5qc1wiKVxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxudmFyIHJhbmdlT3B0aW9ucyA9ICdzdGFydCBlbmQgZ3QgZ3RlIGx0IGx0ZScuc3BsaXQoJyAnKVxuXG5mdW5jdGlvbiBBYnN0cmFjdExldmVsRE9XTiAobG9jYXRpb24pIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoIHx8IGxvY2F0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbnN0cnVjdG9yIHJlcXVpcmVzIGF0IGxlYXN0IGEgbG9jYXRpb24gYXJndW1lbnQnKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbnN0cnVjdG9yIHJlcXVpcmVzIGEgbG9jYXRpb24gc3RyaW5nIGFyZ3VtZW50JylcbiAgfVxuXG4gIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICB0aGlzLnN0YXR1cyA9ICduZXcnXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgb2xkU3RhdHVzID0gdGhpcy5zdGF0dXNcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHsgY2FsbGJhY2sgPSBvcHRpb25zIH1cblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdvcGVuKCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7IG9wdGlvbnMgPSB7fSB9XG5cbiAgb3B0aW9ucy5jcmVhdGVJZk1pc3NpbmcgPSBvcHRpb25zLmNyZWF0ZUlmTWlzc2luZyAhPT0gZmFsc2VcbiAgb3B0aW9ucy5lcnJvcklmRXhpc3RzID0gISFvcHRpb25zLmVycm9ySWZFeGlzdHNcblxuICB0aGlzLnN0YXR1cyA9ICdvcGVuaW5nJ1xuICB0aGlzLl9vcGVuKG9wdGlvbnMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBzZWxmLnN0YXR1cyA9IG9sZFN0YXR1c1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycilcbiAgICB9XG4gICAgc2VsZi5zdGF0dXMgPSAnb3BlbidcbiAgICBjYWxsYmFjaygpXG4gIH0pXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fb3BlbiA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBvbGRTdGF0dXMgPSB0aGlzLnN0YXR1c1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nsb3NlKCkgcmVxdWlyZXMgYSBjYWxsYmFjayBhcmd1bWVudCcpXG4gIH1cblxuICB0aGlzLnN0YXR1cyA9ICdjbG9zaW5nJ1xuICB0aGlzLl9jbG9zZShmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgc2VsZi5zdGF0dXMgPSBvbGRTdGF0dXNcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpXG4gICAgfVxuICAgIHNlbGYuc3RhdHVzID0gJ2Nsb3NlZCdcbiAgICBjYWxsYmFjaygpXG4gIH0pXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fY2xvc2UgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldCgpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgdmFyIGVyciA9IHRoaXMuX2NoZWNrS2V5KGtleSwgJ2tleScpXG4gIGlmIChlcnIpIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBlcnIpXG5cbiAga2V5ID0gdGhpcy5fc2VyaWFsaXplS2V5KGtleSlcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7IG9wdGlvbnMgPSB7fSB9XG5cbiAgb3B0aW9ucy5hc0J1ZmZlciA9IG9wdGlvbnMuYXNCdWZmZXIgIT09IGZhbHNlXG5cbiAgdGhpcy5fZ2V0KGtleSwgb3B0aW9ucywgY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fZ2V0ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IGNhbGxiYWNrKG5ldyBFcnJvcignTm90Rm91bmQnKSkgfSlcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHsgY2FsbGJhY2sgPSBvcHRpb25zIH1cblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwdXQoKSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIHZhciBlcnIgPSB0aGlzLl9jaGVja0tleShrZXksICdrZXknKVxuICBpZiAoZXJyKSByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgZXJyKVxuXG4gIGtleSA9IHRoaXMuX3NlcmlhbGl6ZUtleShrZXkpXG4gIHZhbHVlID0gdGhpcy5fc2VyaWFsaXplVmFsdWUodmFsdWUpXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JykgeyBvcHRpb25zID0ge30gfVxuXG4gIHRoaXMuX3B1dChrZXksIHZhbHVlLCBvcHRpb25zLCBjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLl9wdXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLmRlbCA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgeyBjYWxsYmFjayA9IG9wdGlvbnMgfVxuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2RlbCgpIHJlcXVpcmVzIGEgY2FsbGJhY2sgYXJndW1lbnQnKVxuICB9XG5cbiAgdmFyIGVyciA9IHRoaXMuX2NoZWNrS2V5KGtleSwgJ2tleScpXG4gIGlmIChlcnIpIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrLCBlcnIpXG5cbiAga2V5ID0gdGhpcy5fc2VyaWFsaXplS2V5KGtleSlcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7IG9wdGlvbnMgPSB7fSB9XG5cbiAgdGhpcy5fZGVsKGtleSwgb3B0aW9ucywgY2FsbGJhY2spXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fZGVsID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaylcbn1cblxuQWJzdHJhY3RMZXZlbERPV04ucHJvdG90eXBlLmJhdGNoID0gZnVuY3Rpb24gKGFycmF5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHsgcmV0dXJuIHRoaXMuX2NoYWluZWRCYXRjaCgpIH1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHsgY2FsbGJhY2sgPSBvcHRpb25zIH1cblxuICBpZiAodHlwZW9mIGFycmF5ID09PSAnZnVuY3Rpb24nKSB7IGNhbGxiYWNrID0gYXJyYXkgfVxuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JhdGNoKGFycmF5KSByZXF1aXJlcyBhIGNhbGxiYWNrIGFyZ3VtZW50JylcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgbmV3IEVycm9yKCdiYXRjaChhcnJheSkgcmVxdWlyZXMgYW4gYXJyYXkgYXJndW1lbnQnKSlcbiAgfVxuXG4gIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cblxuICB2YXIgc2VyaWFsaXplZCA9IG5ldyBBcnJheShhcnJheS5sZW5ndGgpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0eXBlb2YgYXJyYXlbaV0gIT09ICdvYmplY3QnIHx8IGFycmF5W2ldID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgbmV3IEVycm9yKCdiYXRjaChhcnJheSkgZWxlbWVudCBtdXN0IGJlIGFuIG9iamVjdCBhbmQgbm90IGBudWxsYCcpKVxuICAgIH1cblxuICAgIHZhciBlID0geHRlbmQoYXJyYXlbaV0pXG5cbiAgICBpZiAoZS50eXBlICE9PSAncHV0JyAmJiBlLnR5cGUgIT09ICdkZWwnKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgbmV3IEVycm9yKFwiYHR5cGVgIG11c3QgYmUgJ3B1dCcgb3IgJ2RlbCdcIikpXG4gICAgfVxuXG4gICAgdmFyIGVyciA9IHRoaXMuX2NoZWNrS2V5KGUua2V5LCAna2V5JylcbiAgICBpZiAoZXJyKSByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhjYWxsYmFjaywgZXJyKVxuXG4gICAgZS5rZXkgPSB0aGlzLl9zZXJpYWxpemVLZXkoZS5rZXkpXG5cbiAgICBpZiAoZS50eXBlID09PSAncHV0JykgeyBlLnZhbHVlID0gdGhpcy5fc2VyaWFsaXplVmFsdWUoZS52YWx1ZSkgfVxuXG4gICAgc2VyaWFsaXplZFtpXSA9IGVcbiAgfVxuXG4gIHRoaXMuX2JhdGNoKHNlcmlhbGl6ZWQsIG9wdGlvbnMsIGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX2JhdGNoID0gZnVuY3Rpb24gKGFycmF5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICBwcm9jZXNzLm5leHRUaWNrKGNhbGxiYWNrKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX3NldHVwSXRlcmF0b3JPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IGNsZWFuUmFuZ2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgb3B0aW9ucy5yZXZlcnNlID0gISFvcHRpb25zLnJldmVyc2VcbiAgb3B0aW9ucy5rZXlzID0gb3B0aW9ucy5rZXlzICE9PSBmYWxzZVxuICBvcHRpb25zLnZhbHVlcyA9IG9wdGlvbnMudmFsdWVzICE9PSBmYWxzZVxuICBvcHRpb25zLmxpbWl0ID0gJ2xpbWl0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5saW1pdCA6IC0xXG4gIG9wdGlvbnMua2V5QXNCdWZmZXIgPSBvcHRpb25zLmtleUFzQnVmZmVyICE9PSBmYWxzZVxuICBvcHRpb25zLnZhbHVlQXNCdWZmZXIgPSBvcHRpb25zLnZhbHVlQXNCdWZmZXIgIT09IGZhbHNlXG5cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZnVuY3Rpb24gY2xlYW5SYW5nZU9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgZm9yICh2YXIgayBpbiBvcHRpb25zKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIGspKSBjb250aW51ZVxuICAgIGlmIChpc1JhbmdlT3B0aW9uKGspICYmIGlzRW1wdHlSYW5nZU9wdGlvbihvcHRpb25zW2tdKSkgY29udGludWVcblxuICAgIHJlc3VsdFtrXSA9IG9wdGlvbnNba11cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gaXNSYW5nZU9wdGlvbiAoaykge1xuICByZXR1cm4gcmFuZ2VPcHRpb25zLmluZGV4T2YoaykgIT09IC0xXG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlSYW5nZU9wdGlvbiAodikge1xuICByZXR1cm4gdiA9PT0gJycgfHwgdiA9PSBudWxsIHx8IGlzRW1wdHlCdWZmZXIodilcbn1cblxuZnVuY3Rpb24gaXNFbXB0eUJ1ZmZlciAodikge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKHYpICYmIHYubGVuZ3RoID09PSAwXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5pdGVyYXRvciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHsgb3B0aW9ucyA9IHt9IH1cbiAgb3B0aW9ucyA9IHRoaXMuX3NldHVwSXRlcmF0b3JPcHRpb25zKG9wdGlvbnMpXG4gIHJldHVybiB0aGlzLl9pdGVyYXRvcihvcHRpb25zKVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX2l0ZXJhdG9yID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBBYnN0cmFjdEl0ZXJhdG9yKHRoaXMpXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fY2hhaW5lZEJhdGNoID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IEFic3RyYWN0Q2hhaW5lZEJhdGNoKHRoaXMpXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fc2VyaWFsaXplS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKGtleSkgPyBrZXkgOiBTdHJpbmcoa2V5KVxufVxuXG5BYnN0cmFjdExldmVsRE9XTi5wcm90b3R5cGUuX3NlcmlhbGl6ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gJydcbiAgcmV0dXJuIEJ1ZmZlci5pc0J1ZmZlcih2YWx1ZSkgfHwgcHJvY2Vzcy5icm93c2VyID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpXG59XG5cbkFic3RyYWN0TGV2ZWxET1dOLnByb3RvdHlwZS5fY2hlY2tLZXkgPSBmdW5jdGlvbiAob2JqLCB0eXBlKSB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKHR5cGUgKyAnIGNhbm5vdCBiZSBgbnVsbGAgb3IgYHVuZGVmaW5lZGAnKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopICYmIG9iai5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKHR5cGUgKyAnIGNhbm5vdCBiZSBhbiBlbXB0eSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKFN0cmluZyhvYmopID09PSAnJykge1xuICAgIHJldHVybiBuZXcgRXJyb3IodHlwZSArICcgY2Fubm90IGJlIGFuIGVtcHR5IFN0cmluZycpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBYnN0cmFjdExldmVsRE9XTlxuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9wcm9jZXNzL2Jyb3dzZXIuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLy4uL2J1ZmZlci9pbmRleC5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanNcIikuQnVmZmVyKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5leHBvcnRzLkFic3RyYWN0TGV2ZWxET1dOID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hYnN0cmFjdC1sZXZlbGRvd24gKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWxldmVsZG93bi5qc1wiKVxuZXhwb3J0cy5BYnN0cmFjdEl0ZXJhdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9hYnN0cmFjdC1pdGVyYXRvciAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vYWJzdHJhY3QtaXRlcmF0b3IuanNcIilcbmV4cG9ydHMuQWJzdHJhY3RDaGFpbmVkQmF0Y2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Fic3RyYWN0LWNoYWluZWQtYmF0Y2ggKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYWJzdHJhY3QtbGV2ZWxkb3duL2Fic3RyYWN0LWNoYWluZWQtYmF0Y2guanNcIilcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHsvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG5cblxudmFyIGJhc2U2NCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGJhc2U2NC1qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanNcIilcbnZhciBpZWVlNzU0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgaWVlZTc1NCAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzXCIpXG52YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGlzYXJyYXkgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzXCIpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pc2FycmF5L2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9mdW5jdGlvbmFsLXJlZC1ibGFjay10cmVlL3JidHJlZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9mdW5jdGlvbmFsLXJlZC1ibGFjay10cmVlL3JidHJlZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJCVHJlZVxuXG52YXIgUkVEICAgPSAwXG52YXIgQkxBQ0sgPSAxXG5cbmZ1bmN0aW9uIFJCTm9kZShjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQsIGNvdW50KSB7XG4gIHRoaXMuX2NvbG9yID0gY29sb3JcbiAgdGhpcy5rZXkgPSBrZXlcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMubGVmdCA9IGxlZnRcbiAgdGhpcy5yaWdodCA9IHJpZ2h0XG4gIHRoaXMuX2NvdW50ID0gY291bnRcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcbiAgcmV0dXJuIG5ldyBSQk5vZGUobm9kZS5fY29sb3IsIG5vZGUua2V5LCBub2RlLnZhbHVlLCBub2RlLmxlZnQsIG5vZGUucmlnaHQsIG5vZGUuX2NvdW50KVxufVxuXG5mdW5jdGlvbiByZXBhaW50KGNvbG9yLCBub2RlKSB7XG4gIHJldHVybiBuZXcgUkJOb2RlKGNvbG9yLCBub2RlLmtleSwgbm9kZS52YWx1ZSwgbm9kZS5sZWZ0LCBub2RlLnJpZ2h0LCBub2RlLl9jb3VudClcbn1cblxuZnVuY3Rpb24gcmVjb3VudChub2RlKSB7XG4gIG5vZGUuX2NvdW50ID0gMSArIChub2RlLmxlZnQgPyBub2RlLmxlZnQuX2NvdW50IDogMCkgKyAobm9kZS5yaWdodCA/IG5vZGUucmlnaHQuX2NvdW50IDogMClcbn1cblxuZnVuY3Rpb24gUmVkQmxhY2tUcmVlKGNvbXBhcmUsIHJvb3QpIHtcbiAgdGhpcy5fY29tcGFyZSA9IGNvbXBhcmVcbiAgdGhpcy5yb290ID0gcm9vdFxufVxuXG52YXIgcHJvdG8gPSBSZWRCbGFja1RyZWUucHJvdG90eXBlXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJrZXlzXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oayx2KSB7XG4gICAgICByZXN1bHQucHVzaChrKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59KVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIFwidmFsdWVzXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oayx2KSB7XG4gICAgICByZXN1bHQucHVzaCh2KVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59KVxuXG4vL1JldHVybnMgdGhlIG51bWJlciBvZiBub2RlcyBpbiB0aGUgdHJlZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBcImxlbmd0aFwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5yb290KSB7XG4gICAgICByZXR1cm4gdGhpcy5yb290Ll9jb3VudFxuICAgIH1cbiAgICByZXR1cm4gMFxuICB9XG59KVxuXG4vL0luc2VydCBhIG5ldyBpdGVtIGludG8gdGhlIHRyZWVcbnByb3RvLmluc2VydCA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgLy9GaW5kIHBvaW50IHRvIGluc2VydCBuZXcgbm9kZSBhdFxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgbl9zdGFjayA9IFtdXG4gIHZhciBkX3N0YWNrID0gW11cbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgbl9zdGFjay5wdXNoKG4pXG4gICAgZF9zdGFjay5wdXNoKGQpXG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIC8vUmVidWlsZCBwYXRoIHRvIGxlYWYgbm9kZVxuICBuX3N0YWNrLnB1c2gobmV3IFJCTm9kZShSRUQsIGtleSwgdmFsdWUsIG51bGwsIG51bGwsIDEpKVxuICBmb3IodmFyIHM9bl9zdGFjay5sZW5ndGgtMjsgcz49MDsgLS1zKSB7XG4gICAgdmFyIG4gPSBuX3N0YWNrW3NdXG4gICAgaWYoZF9zdGFja1tzXSA8PSAwKSB7XG4gICAgICBuX3N0YWNrW3NdID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG5fc3RhY2tbcysxXSwgbi5yaWdodCwgbi5fY291bnQrMSlcbiAgICB9IGVsc2Uge1xuICAgICAgbl9zdGFja1tzXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBuLmxlZnQsIG5fc3RhY2tbcysxXSwgbi5fY291bnQrMSlcbiAgICB9XG4gIH1cbiAgLy9SZWJhbGFuY2UgdHJlZSB1c2luZyByb3RhdGlvbnNcbiAgLy9jb25zb2xlLmxvZyhcInN0YXJ0IGluc2VydFwiLCBrZXksIGRfc3RhY2spXG4gIGZvcih2YXIgcz1uX3N0YWNrLmxlbmd0aC0xOyBzPjE7IC0tcykge1xuICAgIHZhciBwID0gbl9zdGFja1tzLTFdXG4gICAgdmFyIG4gPSBuX3N0YWNrW3NdXG4gICAgaWYocC5fY29sb3IgPT09IEJMQUNLIHx8IG4uX2NvbG9yID09PSBCTEFDSykge1xuICAgICAgYnJlYWtcbiAgICB9XG4gICAgdmFyIHBwID0gbl9zdGFja1tzLTJdXG4gICAgaWYocHAubGVmdCA9PT0gcCkge1xuICAgICAgaWYocC5sZWZ0ID09PSBuKSB7XG4gICAgICAgIHZhciB5ID0gcHAucmlnaHRcbiAgICAgICAgaWYoeSAmJiB5Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxMclwiKVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwcC5yaWdodCA9IHJlcGFpbnQoQkxBQ0ssIHkpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcyAtPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxMYlwiKVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHBwLmxlZnQgPSBwLnJpZ2h0XG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHAucmlnaHQgPSBwcFxuICAgICAgICAgIG5fc3RhY2tbcy0yXSA9IHBcbiAgICAgICAgICBuX3N0YWNrW3MtMV0gPSBuXG4gICAgICAgICAgcmVjb3VudChwcClcbiAgICAgICAgICByZWNvdW50KHApXG4gICAgICAgICAgaWYocyA+PSAzKSB7XG4gICAgICAgICAgICB2YXIgcHBwID0gbl9zdGFja1tzLTNdXG4gICAgICAgICAgICBpZihwcHAubGVmdCA9PT0gcHApIHtcbiAgICAgICAgICAgICAgcHBwLmxlZnQgPSBwXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcHAucmlnaHQgPSBwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB5ID0gcHAucmlnaHRcbiAgICAgICAgaWYoeSAmJiB5Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxSclwiKVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwcC5yaWdodCA9IHJlcGFpbnQoQkxBQ0ssIHkpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcyAtPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxSYlwiKVxuICAgICAgICAgIHAucmlnaHQgPSBuLmxlZnRcbiAgICAgICAgICBwcC5fY29sb3IgPSBSRURcbiAgICAgICAgICBwcC5sZWZ0ID0gbi5yaWdodFxuICAgICAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBuLmxlZnQgPSBwXG4gICAgICAgICAgbi5yaWdodCA9IHBwXG4gICAgICAgICAgbl9zdGFja1tzLTJdID0gblxuICAgICAgICAgIG5fc3RhY2tbcy0xXSA9IHBcbiAgICAgICAgICByZWNvdW50KHBwKVxuICAgICAgICAgIHJlY291bnQocClcbiAgICAgICAgICByZWNvdW50KG4pXG4gICAgICAgICAgaWYocyA+PSAzKSB7XG4gICAgICAgICAgICB2YXIgcHBwID0gbl9zdGFja1tzLTNdXG4gICAgICAgICAgICBpZihwcHAubGVmdCA9PT0gcHApIHtcbiAgICAgICAgICAgICAgcHBwLmxlZnQgPSBuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcHAucmlnaHQgPSBuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYocC5yaWdodCA9PT0gbikge1xuICAgICAgICB2YXIgeSA9IHBwLmxlZnRcbiAgICAgICAgaWYoeSAmJiB5Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJSclwiLCB5LmtleSlcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcHAubGVmdCA9IHJlcGFpbnQoQkxBQ0ssIHkpXG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcyAtPSAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlJSYlwiKVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHBwLnJpZ2h0ID0gcC5sZWZ0XG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHAubGVmdCA9IHBwXG4gICAgICAgICAgbl9zdGFja1tzLTJdID0gcFxuICAgICAgICAgIG5fc3RhY2tbcy0xXSA9IG5cbiAgICAgICAgICByZWNvdW50KHBwKVxuICAgICAgICAgIHJlY291bnQocClcbiAgICAgICAgICBpZihzID49IDMpIHtcbiAgICAgICAgICAgIHZhciBwcHAgPSBuX3N0YWNrW3MtM11cbiAgICAgICAgICAgIGlmKHBwcC5yaWdodCA9PT0gcHApIHtcbiAgICAgICAgICAgICAgcHBwLnJpZ2h0ID0gcFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHBwLmxlZnQgPSBwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB5ID0gcHAubGVmdFxuICAgICAgICBpZih5ICYmIHkuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiUkxyXCIpXG4gICAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICAgIHBwLmxlZnQgPSByZXBhaW50KEJMQUNLLCB5KVxuICAgICAgICAgIHBwLl9jb2xvciA9IFJFRFxuICAgICAgICAgIHMgLT0gMVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJSTGJcIilcbiAgICAgICAgICBwLmxlZnQgPSBuLnJpZ2h0XG4gICAgICAgICAgcHAuX2NvbG9yID0gUkVEXG4gICAgICAgICAgcHAucmlnaHQgPSBuLmxlZnRcbiAgICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgbi5yaWdodCA9IHBcbiAgICAgICAgICBuLmxlZnQgPSBwcFxuICAgICAgICAgIG5fc3RhY2tbcy0yXSA9IG5cbiAgICAgICAgICBuX3N0YWNrW3MtMV0gPSBwXG4gICAgICAgICAgcmVjb3VudChwcClcbiAgICAgICAgICByZWNvdW50KHApXG4gICAgICAgICAgcmVjb3VudChuKVxuICAgICAgICAgIGlmKHMgPj0gMykge1xuICAgICAgICAgICAgdmFyIHBwcCA9IG5fc3RhY2tbcy0zXVxuICAgICAgICAgICAgaWYocHBwLnJpZ2h0ID09PSBwcCkge1xuICAgICAgICAgICAgICBwcHAucmlnaHQgPSBuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwcHAubGVmdCA9IG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvL1JldHVybiBuZXcgdHJlZVxuICBuX3N0YWNrWzBdLl9jb2xvciA9IEJMQUNLXG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlKGNtcCwgbl9zdGFja1swXSlcbn1cblxuXG4vL1Zpc2l0IGFsbCBub2RlcyBpbm9yZGVyXG5mdW5jdGlvbiBkb1Zpc2l0RnVsbCh2aXNpdCwgbm9kZSkge1xuICBpZihub2RlLmxlZnQpIHtcbiAgICB2YXIgdiA9IGRvVmlzaXRGdWxsKHZpc2l0LCBub2RlLmxlZnQpXG4gICAgaWYodikgeyByZXR1cm4gdiB9XG4gIH1cbiAgdmFyIHYgPSB2aXNpdChub2RlLmtleSwgbm9kZS52YWx1ZSlcbiAgaWYodikgeyByZXR1cm4gdiB9XG4gIGlmKG5vZGUucmlnaHQpIHtcbiAgICByZXR1cm4gZG9WaXNpdEZ1bGwodmlzaXQsIG5vZGUucmlnaHQpXG4gIH1cbn1cblxuLy9WaXNpdCBoYWxmIG5vZGVzIGluIG9yZGVyXG5mdW5jdGlvbiBkb1Zpc2l0SGFsZihsbywgY29tcGFyZSwgdmlzaXQsIG5vZGUpIHtcbiAgdmFyIGwgPSBjb21wYXJlKGxvLCBub2RlLmtleSlcbiAgaWYobCA8PSAwKSB7XG4gICAgaWYobm9kZS5sZWZ0KSB7XG4gICAgICB2YXIgdiA9IGRvVmlzaXRIYWxmKGxvLCBjb21wYXJlLCB2aXNpdCwgbm9kZS5sZWZ0KVxuICAgICAgaWYodikgeyByZXR1cm4gdiB9XG4gICAgfVxuICAgIHZhciB2ID0gdmlzaXQobm9kZS5rZXksIG5vZGUudmFsdWUpXG4gICAgaWYodikgeyByZXR1cm4gdiB9XG4gIH1cbiAgaWYobm9kZS5yaWdodCkge1xuICAgIHJldHVybiBkb1Zpc2l0SGFsZihsbywgY29tcGFyZSwgdmlzaXQsIG5vZGUucmlnaHQpXG4gIH1cbn1cblxuLy9WaXNpdCBhbGwgbm9kZXMgd2l0aGluIGEgcmFuZ2VcbmZ1bmN0aW9uIGRvVmlzaXQobG8sIGhpLCBjb21wYXJlLCB2aXNpdCwgbm9kZSkge1xuICB2YXIgbCA9IGNvbXBhcmUobG8sIG5vZGUua2V5KVxuICB2YXIgaCA9IGNvbXBhcmUoaGksIG5vZGUua2V5KVxuICB2YXIgdlxuICBpZihsIDw9IDApIHtcbiAgICBpZihub2RlLmxlZnQpIHtcbiAgICAgIHYgPSBkb1Zpc2l0KGxvLCBoaSwgY29tcGFyZSwgdmlzaXQsIG5vZGUubGVmdClcbiAgICAgIGlmKHYpIHsgcmV0dXJuIHYgfVxuICAgIH1cbiAgICBpZihoID4gMCkge1xuICAgICAgdiA9IHZpc2l0KG5vZGUua2V5LCBub2RlLnZhbHVlKVxuICAgICAgaWYodikgeyByZXR1cm4gdiB9XG4gICAgfVxuICB9XG4gIGlmKGggPiAwICYmIG5vZGUucmlnaHQpIHtcbiAgICByZXR1cm4gZG9WaXNpdChsbywgaGksIGNvbXBhcmUsIHZpc2l0LCBub2RlLnJpZ2h0KVxuICB9XG59XG5cblxucHJvdG8uZm9yRWFjaCA9IGZ1bmN0aW9uIHJiVHJlZUZvckVhY2godmlzaXQsIGxvLCBoaSkge1xuICBpZighdGhpcy5yb290KSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZG9WaXNpdEZ1bGwodmlzaXQsIHRoaXMucm9vdClcbiAgICBicmVha1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGRvVmlzaXRIYWxmKGxvLCB0aGlzLl9jb21wYXJlLCB2aXNpdCwgdGhpcy5yb290KVxuICAgIGJyZWFrXG5cbiAgICBjYXNlIDM6XG4gICAgICBpZih0aGlzLl9jb21wYXJlKGxvLCBoaSkgPj0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiBkb1Zpc2l0KGxvLCBoaSwgdGhpcy5fY29tcGFyZSwgdmlzaXQsIHRoaXMucm9vdClcbiAgICBicmVha1xuICB9XG59XG5cbi8vRmlyc3QgaXRlbSBpbiBsaXN0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIFwiYmVnaW5cIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFjayA9IFtdXG4gICAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5sZWZ0XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG4gIH1cbn0pXG5cbi8vTGFzdCBpdGVtIGluIGxpc3Rcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgXCJlbmRcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFjayA9IFtdXG4gICAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxuICB9XG59KVxuXG4vL0ZpbmQgdGhlIGl0aCBpdGVtIGluIHRoZSB0cmVlXG5wcm90by5hdCA9IGZ1bmN0aW9uKGlkeCkge1xuICBpZihpZHggPCAwKSB7XG4gICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBbXSlcbiAgfVxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgc3RhY2sgPSBbXVxuICB3aGlsZSh0cnVlKSB7XG4gICAgc3RhY2sucHVzaChuKVxuICAgIGlmKG4ubGVmdCkge1xuICAgICAgaWYoaWR4IDwgbi5sZWZ0Ll9jb3VudCkge1xuICAgICAgICBuID0gbi5sZWZ0XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBpZHggLT0gbi5sZWZ0Ll9jb3VudFxuICAgIH1cbiAgICBpZighaWR4KSB7XG4gICAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxuICAgIH1cbiAgICBpZHggLT0gMVxuICAgIGlmKG4ucmlnaHQpIHtcbiAgICAgIGlmKGlkeCA+PSBuLnJpZ2h0Ll9jb3VudCkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBbXSlcbn1cblxucHJvdG8uZ2UgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGxhc3RfcHRyID0gMFxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBsYXN0X3B0ciA9IHN0YWNrLmxlbmd0aFxuICAgIH1cbiAgICBpZihkIDw9IDApIHtcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH1cbiAgc3RhY2subGVuZ3RoID0gbGFzdF9wdHJcbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbn1cblxucHJvdG8uZ3QgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGxhc3RfcHRyID0gMFxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA8IDApIHtcbiAgICAgIGxhc3RfcHRyID0gc3RhY2subGVuZ3RoXG4gICAgfVxuICAgIGlmKGQgPCAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHN0YWNrLmxlbmd0aCA9IGxhc3RfcHRyXG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgc3RhY2spXG59XG5cbnByb3RvLmx0ID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBjbXAgPSB0aGlzLl9jb21wYXJlXG4gIHZhciBuID0gdGhpcy5yb290XG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBsYXN0X3B0ciA9IDBcbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgc3RhY2sucHVzaChuKVxuICAgIGlmKGQgPiAwKSB7XG4gICAgICBsYXN0X3B0ciA9IHN0YWNrLmxlbmd0aFxuICAgIH1cbiAgICBpZihkIDw9IDApIHtcbiAgICAgIG4gPSBuLmxlZnRcbiAgICB9IGVsc2Uge1xuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gIH1cbiAgc3RhY2subGVuZ3RoID0gbGFzdF9wdHJcbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbn1cblxucHJvdG8ubGUgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGxhc3RfcHRyID0gMFxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA+PSAwKSB7XG4gICAgICBsYXN0X3B0ciA9IHN0YWNrLmxlbmd0aFxuICAgIH1cbiAgICBpZihkIDwgMCkge1xuICAgICAgbiA9IG4ubGVmdFxuICAgIH0gZWxzZSB7XG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfVxuICBzdGFjay5sZW5ndGggPSBsYXN0X3B0clxuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMsIHN0YWNrKVxufVxuXG4vL0ZpbmRzIHRoZSBpdGVtIHdpdGgga2V5IGlmIGl0IGV4aXN0c1xucHJvdG8uZmluZCA9IGZ1bmN0aW9uKGtleSkge1xuICB2YXIgY21wID0gdGhpcy5fY29tcGFyZVxuICB2YXIgbiA9IHRoaXMucm9vdFxuICB2YXIgc3RhY2sgPSBbXVxuICB3aGlsZShuKSB7XG4gICAgdmFyIGQgPSBjbXAoa2V5LCBuLmtleSlcbiAgICBzdGFjay5wdXNoKG4pXG4gICAgaWYoZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWVJdGVyYXRvcih0aGlzLCBzdGFjaylcbiAgICB9XG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlSXRlcmF0b3IodGhpcywgW10pXG59XG5cbi8vUmVtb3ZlcyBpdGVtIHdpdGgga2V5IGZyb20gdHJlZVxucHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oa2V5KSB7XG4gIHZhciBpdGVyID0gdGhpcy5maW5kKGtleSlcbiAgaWYoaXRlcikge1xuICAgIHJldHVybiBpdGVyLnJlbW92ZSgpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy9SZXR1cm5zIHRoZSBpdGVtIGF0IGBrZXlgXG5wcm90by5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgdmFyIGNtcCA9IHRoaXMuX2NvbXBhcmVcbiAgdmFyIG4gPSB0aGlzLnJvb3RcbiAgd2hpbGUobikge1xuICAgIHZhciBkID0gY21wKGtleSwgbi5rZXkpXG4gICAgaWYoZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG4udmFsdWVcbiAgICB9XG4gICAgaWYoZCA8PSAwKSB7XG4gICAgICBuID0gbi5sZWZ0XG4gICAgfSBlbHNlIHtcbiAgICAgIG4gPSBuLnJpZ2h0XG4gICAgfVxuICB9XG4gIHJldHVyblxufVxuXG4vL0l0ZXJhdG9yIGZvciByZWQgYmxhY2sgdHJlZVxuZnVuY3Rpb24gUmVkQmxhY2tUcmVlSXRlcmF0b3IodHJlZSwgc3RhY2spIHtcbiAgdGhpcy50cmVlID0gdHJlZVxuICB0aGlzLl9zdGFjayA9IHN0YWNrXG59XG5cbnZhciBpcHJvdG8gPSBSZWRCbGFja1RyZWVJdGVyYXRvci5wcm90b3R5cGVcblxuLy9UZXN0IGlmIGl0ZXJhdG9yIGlzIHZhbGlkXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcInZhbGlkXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhY2subGVuZ3RoID4gMFxuICB9XG59KVxuXG4vL05vZGUgb2YgdGhlIGl0ZXJhdG9yXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcIm5vZGVcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMuX3N0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGFja1t0aGlzLl9zdGFjay5sZW5ndGgtMV1cbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZVxufSlcblxuLy9NYWtlcyBhIGNvcHkgb2YgYW4gaXRlcmF0b3Jcbmlwcm90by5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZUl0ZXJhdG9yKHRoaXMudHJlZSwgdGhpcy5fc3RhY2suc2xpY2UoKSlcbn1cblxuLy9Td2FwcyB0d28gbm9kZXNcbmZ1bmN0aW9uIHN3YXBOb2RlKG4sIHYpIHtcbiAgbi5rZXkgPSB2LmtleVxuICBuLnZhbHVlID0gdi52YWx1ZVxuICBuLmxlZnQgPSB2LmxlZnRcbiAgbi5yaWdodCA9IHYucmlnaHRcbiAgbi5fY29sb3IgPSB2Ll9jb2xvclxuICBuLl9jb3VudCA9IHYuX2NvdW50XG59XG5cbi8vRml4IHVwIGEgZG91YmxlIGJsYWNrIG5vZGUgaW4gYSB0cmVlXG5mdW5jdGlvbiBmaXhEb3VibGVCbGFjayhzdGFjaykge1xuICB2YXIgbiwgcCwgcywgelxuICBmb3IodmFyIGk9c3RhY2subGVuZ3RoLTE7IGk+PTA7IC0taSkge1xuICAgIG4gPSBzdGFja1tpXVxuICAgIGlmKGkgPT09IDApIHtcbiAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKFwidmlzaXQgbm9kZTpcIiwgbi5rZXksIGksIHN0YWNrW2ldLmtleSwgc3RhY2tbaS0xXS5rZXkpXG4gICAgcCA9IHN0YWNrW2ktMV1cbiAgICBpZihwLmxlZnQgPT09IG4pIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJsZWZ0IGNoaWxkXCIpXG4gICAgICBzID0gcC5yaWdodFxuICAgICAgaWYocy5yaWdodCAmJiBzLnJpZ2h0Ll9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDE6IHJpZ2h0IHNpYmxpbmcgY2hpbGQgcmVkXCIpXG4gICAgICAgIHMgPSBwLnJpZ2h0ID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHogPSBzLnJpZ2h0ID0gY2xvbmVOb2RlKHMucmlnaHQpXG4gICAgICAgIHAucmlnaHQgPSBzLmxlZnRcbiAgICAgICAgcy5sZWZ0ID0gcFxuICAgICAgICBzLnJpZ2h0ID0gelxuICAgICAgICBzLl9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIG4uX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcC5fY29sb3IgPSBCTEFDS1xuICAgICAgICB6Ll9jb2xvciA9IEJMQUNLXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICBpZihpID4gMSkge1xuICAgICAgICAgIHZhciBwcCA9IHN0YWNrW2ktMl1cbiAgICAgICAgICBpZihwcC5sZWZ0ID09PSBwKSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5yaWdodCA9IHNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tbaS0xXSA9IHNcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2UgaWYocy5sZWZ0ICYmIHMubGVmdC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAxOiBsZWZ0IHNpYmxpbmcgY2hpbGQgcmVkXCIpXG4gICAgICAgIHMgPSBwLnJpZ2h0ID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHogPSBzLmxlZnQgPSBjbG9uZU5vZGUocy5sZWZ0KVxuICAgICAgICBwLnJpZ2h0ID0gei5sZWZ0XG4gICAgICAgIHMubGVmdCA9IHoucmlnaHRcbiAgICAgICAgei5sZWZ0ID0gcFxuICAgICAgICB6LnJpZ2h0ID0gc1xuICAgICAgICB6Ll9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcy5fY29sb3IgPSBCTEFDS1xuICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICByZWNvdW50KHopXG4gICAgICAgIGlmKGkgPiAxKSB7XG4gICAgICAgICAgdmFyIHBwID0gc3RhY2tbaS0yXVxuICAgICAgICAgIGlmKHBwLmxlZnQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLmxlZnQgPSB6XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gelxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gelxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmKHMuX2NvbG9yID09PSBCTEFDSykge1xuICAgICAgICBpZihwLl9jb2xvciA9PT0gUkVEKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMjogYmxhY2sgc2libGluZywgcmVkIHBhcmVudFwiLCBwLnJpZ2h0LnZhbHVlKVxuICAgICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgICBwLnJpZ2h0ID0gcmVwYWludChSRUQsIHMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMjogYmxhY2sgc2libGluZywgYmxhY2sgcGFyZW50XCIsIHAucmlnaHQudmFsdWUpXG4gICAgICAgICAgcC5yaWdodCA9IHJlcGFpbnQoUkVELCBzKVxuICAgICAgICAgIGNvbnRpbnVlICBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMzogcmVkIHNpYmxpbmdcIilcbiAgICAgICAgcyA9IGNsb25lTm9kZShzKVxuICAgICAgICBwLnJpZ2h0ID0gcy5sZWZ0XG4gICAgICAgIHMubGVmdCA9IHBcbiAgICAgICAgcy5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBwLl9jb2xvciA9IFJFRFxuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAubGVmdCA9PT0gcCkge1xuICAgICAgICAgICAgcHAubGVmdCA9IHNcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHAucmlnaHQgPSBzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YWNrW2ktMV0gPSBzXG4gICAgICAgIHN0YWNrW2ldID0gcFxuICAgICAgICBpZihpKzEgPCBzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICBzdGFja1tpKzFdID0gblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YWNrLnB1c2gobilcbiAgICAgICAgfVxuICAgICAgICBpID0gaSsyXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vY29uc29sZS5sb2coXCJyaWdodCBjaGlsZFwiKVxuICAgICAgcyA9IHAubGVmdFxuICAgICAgaWYocy5sZWZ0ICYmIHMubGVmdC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAxOiBsZWZ0IHNpYmxpbmcgY2hpbGQgcmVkXCIsIHAudmFsdWUsIHAuX2NvbG9yKVxuICAgICAgICBzID0gcC5sZWZ0ID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHogPSBzLmxlZnQgPSBjbG9uZU5vZGUocy5sZWZ0KVxuICAgICAgICBwLmxlZnQgPSBzLnJpZ2h0XG4gICAgICAgIHMucmlnaHQgPSBwXG4gICAgICAgIHMubGVmdCA9IHpcbiAgICAgICAgcy5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgei5fY29sb3IgPSBCTEFDS1xuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAucmlnaHQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gc1xuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSBpZihzLnJpZ2h0ICYmIHMucmlnaHQuX2NvbG9yID09PSBSRUQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMTogcmlnaHQgc2libGluZyBjaGlsZCByZWRcIilcbiAgICAgICAgcyA9IHAubGVmdCA9IGNsb25lTm9kZShzKVxuICAgICAgICB6ID0gcy5yaWdodCA9IGNsb25lTm9kZShzLnJpZ2h0KVxuICAgICAgICBwLmxlZnQgPSB6LnJpZ2h0XG4gICAgICAgIHMucmlnaHQgPSB6LmxlZnRcbiAgICAgICAgei5yaWdodCA9IHBcbiAgICAgICAgei5sZWZ0ID0gc1xuICAgICAgICB6Ll9jb2xvciA9IHAuX2NvbG9yXG4gICAgICAgIHAuX2NvbG9yID0gQkxBQ0tcbiAgICAgICAgcy5fY29sb3IgPSBCTEFDS1xuICAgICAgICBuLl9jb2xvciA9IEJMQUNLXG4gICAgICAgIHJlY291bnQocClcbiAgICAgICAgcmVjb3VudChzKVxuICAgICAgICByZWNvdW50KHopXG4gICAgICAgIGlmKGkgPiAxKSB7XG4gICAgICAgICAgdmFyIHBwID0gc3RhY2tbaS0yXVxuICAgICAgICAgIGlmKHBwLnJpZ2h0ID09PSBwKSB7XG4gICAgICAgICAgICBwcC5yaWdodCA9IHpcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHAubGVmdCA9IHpcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2tbaS0xXSA9IHpcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZihzLl9jb2xvciA9PT0gQkxBQ0spIHtcbiAgICAgICAgaWYocC5fY29sb3IgPT09IFJFRCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjYXNlIDI6IGJsYWNrIHNpYmxpbmcsIHJlZCBwYXJlbnRcIilcbiAgICAgICAgICBwLl9jb2xvciA9IEJMQUNLXG4gICAgICAgICAgcC5sZWZ0ID0gcmVwYWludChSRUQsIHMpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhc2UgMjogYmxhY2sgc2libGluZywgYmxhY2sgcGFyZW50XCIpXG4gICAgICAgICAgcC5sZWZ0ID0gcmVwYWludChSRUQsIHMpXG4gICAgICAgICAgY29udGludWUgIFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY2FzZSAzOiByZWQgc2libGluZ1wiKVxuICAgICAgICBzID0gY2xvbmVOb2RlKHMpXG4gICAgICAgIHAubGVmdCA9IHMucmlnaHRcbiAgICAgICAgcy5yaWdodCA9IHBcbiAgICAgICAgcy5fY29sb3IgPSBwLl9jb2xvclxuICAgICAgICBwLl9jb2xvciA9IFJFRFxuICAgICAgICByZWNvdW50KHApXG4gICAgICAgIHJlY291bnQocylcbiAgICAgICAgaWYoaSA+IDEpIHtcbiAgICAgICAgICB2YXIgcHAgPSBzdGFja1tpLTJdXG4gICAgICAgICAgaWYocHAucmlnaHQgPT09IHApIHtcbiAgICAgICAgICAgIHBwLnJpZ2h0ID0gc1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcC5sZWZ0ID0gc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGFja1tpLTFdID0gc1xuICAgICAgICBzdGFja1tpXSA9IHBcbiAgICAgICAgaWYoaSsxIDwgc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgc3RhY2tbaSsxXSA9IG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFjay5wdXNoKG4pXG4gICAgICAgIH1cbiAgICAgICAgaSA9IGkrMlxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL1JlbW92ZXMgaXRlbSBhdCBpdGVyYXRvciBmcm9tIHRyZWVcbmlwcm90by5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgaWYoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRoaXMudHJlZVxuICB9XG4gIC8vRmlyc3QgY29weSBwYXRoIHRvIG5vZGVcbiAgdmFyIGNzdGFjayA9IG5ldyBBcnJheShzdGFjay5sZW5ndGgpXG4gIHZhciBuID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdXG4gIGNzdGFja1tjc3RhY2subGVuZ3RoLTFdID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG4ubGVmdCwgbi5yaWdodCwgbi5fY291bnQpXG4gIGZvcih2YXIgaT1zdGFjay5sZW5ndGgtMjsgaT49MDsgLS1pKSB7XG4gICAgdmFyIG4gPSBzdGFja1tpXVxuICAgIGlmKG4ubGVmdCA9PT0gc3RhY2tbaSsxXSkge1xuICAgICAgY3N0YWNrW2ldID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIGNzdGFja1tpKzFdLCBuLnJpZ2h0LCBuLl9jb3VudClcbiAgICB9IGVsc2Uge1xuICAgICAgY3N0YWNrW2ldID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG4ubGVmdCwgY3N0YWNrW2krMV0sIG4uX2NvdW50KVxuICAgIH1cbiAgfVxuXG4gIC8vR2V0IG5vZGVcbiAgbiA9IGNzdGFja1tjc3RhY2subGVuZ3RoLTFdXG4gIC8vY29uc29sZS5sb2coXCJzdGFydCByZW1vdmU6IFwiLCBuLnZhbHVlKVxuXG4gIC8vSWYgbm90IGxlYWYsIHRoZW4gc3dhcCB3aXRoIHByZXZpb3VzIG5vZGVcbiAgaWYobi5sZWZ0ICYmIG4ucmlnaHQpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwibW92aW5nIHRvIGxlYWZcIilcblxuICAgIC8vRmlyc3Qgd2FsayB0byBwcmV2aW91cyBsZWFmXG4gICAgdmFyIHNwbGl0ID0gY3N0YWNrLmxlbmd0aFxuICAgIG4gPSBuLmxlZnRcbiAgICB3aGlsZShuLnJpZ2h0KSB7XG4gICAgICBjc3RhY2sucHVzaChuKVxuICAgICAgbiA9IG4ucmlnaHRcbiAgICB9XG4gICAgLy9Db3B5IHBhdGggdG8gbGVhZlxuICAgIHZhciB2ID0gY3N0YWNrW3NwbGl0LTFdXG4gICAgY3N0YWNrLnB1c2gobmV3IFJCTm9kZShuLl9jb2xvciwgdi5rZXksIHYudmFsdWUsIG4ubGVmdCwgbi5yaWdodCwgbi5fY291bnQpKVxuICAgIGNzdGFja1tzcGxpdC0xXS5rZXkgPSBuLmtleVxuICAgIGNzdGFja1tzcGxpdC0xXS52YWx1ZSA9IG4udmFsdWVcblxuICAgIC8vRml4IHVwIHN0YWNrXG4gICAgZm9yKHZhciBpPWNzdGFjay5sZW5ndGgtMjsgaT49c3BsaXQ7IC0taSkge1xuICAgICAgbiA9IGNzdGFja1tpXVxuICAgICAgY3N0YWNrW2ldID0gbmV3IFJCTm9kZShuLl9jb2xvciwgbi5rZXksIG4udmFsdWUsIG4ubGVmdCwgY3N0YWNrW2krMV0sIG4uX2NvdW50KVxuICAgIH1cbiAgICBjc3RhY2tbc3BsaXQtMV0ubGVmdCA9IGNzdGFja1tzcGxpdF1cbiAgfVxuICAvL2NvbnNvbGUubG9nKFwic3RhY2s9XCIsIGNzdGFjay5tYXAoZnVuY3Rpb24odikgeyByZXR1cm4gdi52YWx1ZSB9KSlcblxuICAvL1JlbW92ZSBsZWFmIG5vZGVcbiAgbiA9IGNzdGFja1tjc3RhY2subGVuZ3RoLTFdXG4gIGlmKG4uX2NvbG9yID09PSBSRUQpIHtcbiAgICAvL0Vhc3kgY2FzZTogcmVtb3ZpbmcgcmVkIGxlYWZcbiAgICAvL2NvbnNvbGUubG9nKFwiUkVEIGxlYWZcIilcbiAgICB2YXIgcCA9IGNzdGFja1tjc3RhY2subGVuZ3RoLTJdXG4gICAgaWYocC5sZWZ0ID09PSBuKSB7XG4gICAgICBwLmxlZnQgPSBudWxsXG4gICAgfSBlbHNlIGlmKHAucmlnaHQgPT09IG4pIHtcbiAgICAgIHAucmlnaHQgPSBudWxsXG4gICAgfVxuICAgIGNzdGFjay5wb3AoKVxuICAgIGZvcih2YXIgaT0wOyBpPGNzdGFjay5sZW5ndGg7ICsraSkge1xuICAgICAgY3N0YWNrW2ldLl9jb3VudC0tXG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVkQmxhY2tUcmVlKHRoaXMudHJlZS5fY29tcGFyZSwgY3N0YWNrWzBdKVxuICB9IGVsc2Uge1xuICAgIGlmKG4ubGVmdCB8fCBuLnJpZ2h0KSB7XG4gICAgICAvL1NlY29uZCBlYXN5IGNhc2U6ICBTaW5nbGUgY2hpbGQgYmxhY2sgcGFyZW50XG4gICAgICAvL2NvbnNvbGUubG9nKFwiQkxBQ0sgc2luZ2xlIGNoaWxkXCIpXG4gICAgICBpZihuLmxlZnQpIHtcbiAgICAgICAgc3dhcE5vZGUobiwgbi5sZWZ0KVxuICAgICAgfSBlbHNlIGlmKG4ucmlnaHQpIHtcbiAgICAgICAgc3dhcE5vZGUobiwgbi5yaWdodClcbiAgICAgIH1cbiAgICAgIC8vQ2hpbGQgbXVzdCBiZSByZWQsIHNvIHJlcGFpbnQgaXQgYmxhY2sgdG8gYmFsYW5jZSBjb2xvclxuICAgICAgbi5fY29sb3IgPSBCTEFDS1xuICAgICAgZm9yKHZhciBpPTA7IGk8Y3N0YWNrLmxlbmd0aC0xOyArK2kpIHtcbiAgICAgICAgY3N0YWNrW2ldLl9jb3VudC0tXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZSh0aGlzLnRyZWUuX2NvbXBhcmUsIGNzdGFja1swXSlcbiAgICB9IGVsc2UgaWYoY3N0YWNrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy9UaGlyZCBlYXN5IGNhc2U6IHJvb3RcbiAgICAgIC8vY29uc29sZS5sb2coXCJST09UXCIpXG4gICAgICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZSh0aGlzLnRyZWUuX2NvbXBhcmUsIG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vSGFyZCBjYXNlOiBSZXBhaW50IG4sIGFuZCB0aGVuIGRvIHNvbWUgbmFzdHkgc3R1ZmZcbiAgICAgIC8vY29uc29sZS5sb2coXCJCTEFDSyBsZWFmIG5vIGNoaWxkcmVuXCIpXG4gICAgICBmb3IodmFyIGk9MDsgaTxjc3RhY2subGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY3N0YWNrW2ldLl9jb3VudC0tXG4gICAgICB9XG4gICAgICB2YXIgcGFyZW50ID0gY3N0YWNrW2NzdGFjay5sZW5ndGgtMl1cbiAgICAgIGZpeERvdWJsZUJsYWNrKGNzdGFjaylcbiAgICAgIC8vRml4IHVwIGxpbmtzXG4gICAgICBpZihwYXJlbnQubGVmdCA9PT0gbikge1xuICAgICAgICBwYXJlbnQubGVmdCA9IG51bGxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudC5yaWdodCA9IG51bGxcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWUodGhpcy50cmVlLl9jb21wYXJlLCBjc3RhY2tbMF0pXG59XG5cbi8vUmV0dXJucyBrZXlcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwia2V5XCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLl9zdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoLTFdLmtleVxuICAgIH1cbiAgICByZXR1cm5cbiAgfSxcbiAgZW51bWVyYWJsZTogdHJ1ZVxufSlcblxuLy9SZXR1cm5zIHZhbHVlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcInZhbHVlXCIsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLl9zdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhY2tbdGhpcy5fc3RhY2subGVuZ3RoLTFdLnZhbHVlXG4gICAgfVxuICAgIHJldHVyblxuICB9LFxuICBlbnVtZXJhYmxlOiB0cnVlXG59KVxuXG5cbi8vUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhpcyBpdGVyYXRvciBpbiB0aGUgc29ydGVkIGxpc3Rcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwiaW5kZXhcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpZHggPSAwXG4gICAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciByID0gdGhpcy50cmVlLnJvb3RcbiAgICAgIGlmKHIpIHtcbiAgICAgICAgcmV0dXJuIHIuX2NvdW50XG4gICAgICB9XG4gICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSBpZihzdGFja1tzdGFjay5sZW5ndGgtMV0ubGVmdCkge1xuICAgICAgaWR4ID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdLmxlZnQuX2NvdW50XG4gICAgfVxuICAgIGZvcih2YXIgcz1zdGFjay5sZW5ndGgtMjsgcz49MDsgLS1zKSB7XG4gICAgICBpZihzdGFja1tzKzFdID09PSBzdGFja1tzXS5yaWdodCkge1xuICAgICAgICArK2lkeFxuICAgICAgICBpZihzdGFja1tzXS5sZWZ0KSB7XG4gICAgICAgICAgaWR4ICs9IHN0YWNrW3NdLmxlZnQuX2NvdW50XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlkeFxuICB9LFxuICBlbnVtZXJhYmxlOiB0cnVlXG59KVxuXG4vL0FkdmFuY2VzIGl0ZXJhdG9yIHRvIG5leHQgZWxlbWVudCBpbiBsaXN0XG5pcHJvdG8ubmV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3RhY2sgPSB0aGlzLl9zdGFja1xuICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgbiA9IHN0YWNrW3N0YWNrLmxlbmd0aC0xXVxuICBpZihuLnJpZ2h0KSB7XG4gICAgbiA9IG4ucmlnaHRcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5sZWZ0XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN0YWNrLnBvcCgpXG4gICAgd2hpbGUoc3RhY2subGVuZ3RoID4gMCAmJiBzdGFja1tzdGFjay5sZW5ndGgtMV0ucmlnaHQgPT09IG4pIHtcbiAgICAgIG4gPSBzdGFja1tzdGFjay5sZW5ndGgtMV1cbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgfVxuICB9XG59XG5cbi8vQ2hlY2tzIGlmIGl0ZXJhdG9yIGlzIGF0IGVuZCBvZiB0cmVlXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaXByb3RvLCBcImhhc05leHRcIiwge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gICAgaWYoc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYoc3RhY2tbc3RhY2subGVuZ3RoLTFdLnJpZ2h0KSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBmb3IodmFyIHM9c3RhY2subGVuZ3RoLTE7IHM+MDsgLS1zKSB7XG4gICAgICBpZihzdGFja1tzLTFdLmxlZnQgPT09IHN0YWNrW3NdKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59KVxuXG4vL1VwZGF0ZSB2YWx1ZVxuaXByb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gIGlmKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbid0IHVwZGF0ZSBlbXB0eSBub2RlIVwiKVxuICB9XG4gIHZhciBjc3RhY2sgPSBuZXcgQXJyYXkoc3RhY2subGVuZ3RoKVxuICB2YXIgbiA9IHN0YWNrW3N0YWNrLmxlbmd0aC0xXVxuICBjc3RhY2tbY3N0YWNrLmxlbmd0aC0xXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCB2YWx1ZSwgbi5sZWZ0LCBuLnJpZ2h0LCBuLl9jb3VudClcbiAgZm9yKHZhciBpPXN0YWNrLmxlbmd0aC0yOyBpPj0wOyAtLWkpIHtcbiAgICBuID0gc3RhY2tbaV1cbiAgICBpZihuLmxlZnQgPT09IHN0YWNrW2krMV0pIHtcbiAgICAgIGNzdGFja1tpXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBjc3RhY2tbaSsxXSwgbi5yaWdodCwgbi5fY291bnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNzdGFja1tpXSA9IG5ldyBSQk5vZGUobi5fY29sb3IsIG4ua2V5LCBuLnZhbHVlLCBuLmxlZnQsIGNzdGFja1tpKzFdLCBuLl9jb3VudClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBSZWRCbGFja1RyZWUodGhpcy50cmVlLl9jb21wYXJlLCBjc3RhY2tbMF0pXG59XG5cbi8vTW92ZXMgaXRlcmF0b3IgYmFja3dhcmQgb25lIGVsZW1lbnRcbmlwcm90by5wcmV2ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzdGFjayA9IHRoaXMuX3N0YWNrXG4gIGlmKHN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBuID0gc3RhY2tbc3RhY2subGVuZ3RoLTFdXG4gIGlmKG4ubGVmdCkge1xuICAgIG4gPSBuLmxlZnRcbiAgICB3aGlsZShuKSB7XG4gICAgICBzdGFjay5wdXNoKG4pXG4gICAgICBuID0gbi5yaWdodFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzdGFjay5wb3AoKVxuICAgIHdoaWxlKHN0YWNrLmxlbmd0aCA+IDAgJiYgc3RhY2tbc3RhY2subGVuZ3RoLTFdLmxlZnQgPT09IG4pIHtcbiAgICAgIG4gPSBzdGFja1tzdGFjay5sZW5ndGgtMV1cbiAgICAgIHN0YWNrLnBvcCgpXG4gICAgfVxuICB9XG59XG5cbi8vQ2hlY2tzIGlmIGl0ZXJhdG9yIGlzIGF0IHN0YXJ0IG9mIHRyZWVcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpcHJvdG8sIFwiaGFzUHJldlwiLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YWNrID0gdGhpcy5fc3RhY2tcbiAgICBpZihzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZihzdGFja1tzdGFjay5sZW5ndGgtMV0ubGVmdCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZm9yKHZhciBzPXN0YWNrLmxlbmd0aC0xOyBzPjA7IC0tcykge1xuICAgICAgaWYoc3RhY2tbcy0xXS5yaWdodCA9PT0gc3RhY2tbc10pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pXG5cbi8vRGVmYXVsdCBjb21wYXJpc29uIGZ1bmN0aW9uXG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyZShhLCBiKSB7XG4gIGlmKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYoYSA+IGIpIHtcbiAgICByZXR1cm4gMVxuICB9XG4gIHJldHVybiAwXG59XG5cbi8vQnVpbGQgYSB0cmVlXG5mdW5jdGlvbiBjcmVhdGVSQlRyZWUoY29tcGFyZSkge1xuICByZXR1cm4gbmV3IFJlZEJsYWNrVHJlZShjb21wYXJlIHx8IGRlZmF1bHRDb21wYXJlLCBudWxsKVxufVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0eXBlcyA9IFtcbiAgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9uZXh0VGljayAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL25leHRUaWNrLmpzXCIpLFxuICBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL211dGF0aW9uLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvbXV0YXRpb24uanNcIiksXG4gIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWVzc2FnZUNoYW5uZWwgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9tZXNzYWdlQ2hhbm5lbC5qc1wiKSxcbiAgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9zdGF0ZUNoYW5nZSAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3N0YXRlQ2hhbmdlLmpzXCIpLFxuICBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3RpbWVvdXQgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi90aW1lb3V0LmpzXCIpXG5dO1xudmFyIGRyYWluaW5nO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG52YXIgcXVldWUgPSBbXTtcbnZhciBzY2hlZHVsZWQgPSBmYWxzZTtcbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRyYWluaW5nID0gZmFsc2U7XG4gIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZUluZGV4ID0gLTE7XG4gIH1cbiAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgIG5leHRUaWNrKCk7XG4gIH1cbn1cblxuLy9uYW1lZCBuZXh0VGljayBmb3IgbGVzcyBjb25mdXNpbmcgc3RhY2sgdHJhY2VzXG5mdW5jdGlvbiBuZXh0VGljaygpIHtcbiAgaWYgKGRyYWluaW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNjaGVkdWxlZCA9IGZhbHNlO1xuICBkcmFpbmluZyA9IHRydWU7XG4gIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICB3aGlsZSAobGVuKSB7XG4gICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgcXVldWUgPSBbXTtcbiAgICB3aGlsZSAoY3VycmVudFF1ZXVlICYmICsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgIH1cbiAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICB9XG4gIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gIHF1ZXVlSW5kZXggPSAtMTtcbiAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxudmFyIHNjaGVkdWxlRHJhaW47XG52YXIgaSA9IC0xO1xudmFyIGxlbiA9IHR5cGVzLmxlbmd0aDtcbndoaWxlICgrK2kgPCBsZW4pIHtcbiAgaWYgKHR5cGVzW2ldICYmIHR5cGVzW2ldLnRlc3QgJiYgdHlwZXNbaV0udGVzdCgpKSB7XG4gICAgc2NoZWR1bGVEcmFpbiA9IHR5cGVzW2ldLmluc3RhbGwobmV4dFRpY2spO1xuICAgIGJyZWFrO1xuICB9XG59XG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgdGhpcy5mdW4gPSBmdW47XG4gIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZ1biA9IHRoaXMuZnVuO1xuICB2YXIgYXJyYXkgPSB0aGlzLmFycmF5O1xuICBzd2l0Y2ggKGFycmF5Lmxlbmd0aCkge1xuICBjYXNlIDA6XG4gICAgcmV0dXJuIGZ1bigpO1xuICBjYXNlIDE6XG4gICAgcmV0dXJuIGZ1bihhcnJheVswXSk7XG4gIGNhc2UgMjpcbiAgICByZXR1cm4gZnVuKGFycmF5WzBdLCBhcnJheVsxXSk7XG4gIGNhc2UgMzpcbiAgICByZXR1cm4gZnVuKGFycmF5WzBdLCBhcnJheVsxXSwgYXJyYXlbMl0pO1xuICBkZWZhdWx0OlxuICAgIHJldHVybiBmdW4uYXBwbHkobnVsbCwgYXJyYXkpO1xuICB9XG5cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGltbWVkaWF0ZTtcbmZ1bmN0aW9uIGltbWVkaWF0ZSh0YXNrKSB7XG4gIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgfVxuICBxdWV1ZS5wdXNoKG5ldyBJdGVtKHRhc2ssIGFyZ3MpKTtcbiAgaWYgKCFzY2hlZHVsZWQgJiYgIWRyYWluaW5nKSB7XG4gICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBzY2hlZHVsZURyYWluKCk7XG4gIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9tZXNzYWdlQ2hhbm5lbC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvbWVzc2FnZUNoYW5uZWwuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHtcblxuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgIC8vIHdlIGNhbiBvbmx5IGdldCBoZXJlIGluIElFMTBcbiAgICAvLyB3aGljaCBkb2Vzbid0IGhhbmRlbCBwb3N0TWVzc2FnZSB3ZWxsXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0eXBlb2YgZ2xvYmFsLk1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcbn07XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIHZhciBjaGFubmVsID0gbmV3IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCgpO1xuICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmM7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgfTtcbn07XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi8uLi93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9tdXRhdGlvbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvbXV0YXRpb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHtcbi8vYmFzZWQgb2ZmIHJzdnAgaHR0cHM6Ly9naXRodWIuY29tL3RpbGRlaW8vcnN2cC5qc1xuLy9saWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS90aWxkZWlvL3JzdnAuanMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuLy9odHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvbWFzdGVyL2xpYi9yc3ZwL2FzYXAuanNcblxudmFyIE11dGF0aW9uID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE11dGF0aW9uO1xufTtcblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKGhhbmRsZSkge1xuICB2YXIgY2FsbGVkID0gMDtcbiAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uKGhhbmRsZSk7XG4gIHZhciBlbGVtZW50ID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICB9KTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBlbGVtZW50LmRhdGEgPSAoY2FsbGVkID0gKytjYWxsZWQgJSAyKTtcbiAgfTtcbn07XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi8uLi93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcIikpKVxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi9uZXh0VGljay5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvbmV4dFRpY2suanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihwcm9jZXNzKSB7XG5leHBvcnRzLnRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgcmV0dXJuICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpICYmICFwcm9jZXNzLmJyb3dzZXI7XG59O1xuXG5leHBvcnRzLmluc3RhbGwgPSBmdW5jdGlvbiAoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MubmV4dFRpY2soZnVuYyk7XG4gIH07XG59O1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi8uLi9wcm9jZXNzL2Jyb3dzZXIuanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvc3RhdGVDaGFuZ2UuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9pbW1lZGlhdGUvbGliL3N0YXRlQ2hhbmdlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7XG5cbmV4cG9ydHMudGVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICdkb2N1bWVudCcgaW4gZ2xvYmFsICYmICdvbnJlYWR5c3RhdGVjaGFuZ2UnIGluIGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbn07XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblxuICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgdmFyIHNjcmlwdEVsID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZSgpO1xuXG4gICAgICBzY3JpcHRFbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgc2NyaXB0RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHRFbCk7XG4gICAgICBzY3JpcHRFbCA9IG51bGw7XG4gICAgfTtcbiAgICBnbG9iYWwuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHNjcmlwdEVsKTtcblxuICAgIHJldHVybiBoYW5kbGU7XG4gIH07XG59O1xuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vLi4vd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvdGltZW91dC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW1tZWRpYXRlL2xpYi90aW1lb3V0LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy50ZXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uICh0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGltZW91dCh0LCAwKTtcbiAgfTtcbn07XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9sdGd0L2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvbHRndC9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihCdWZmZXIpIHtcbmV4cG9ydHMuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG5cbiAgaWYoQnVmZmVyLmlzQnVmZmVyKGEpKSB7XG4gICAgdmFyIGwgPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNtcCA9IGFbaV0gLSBiW2ldXG4gICAgICBpZihjbXApIHJldHVybiBjbXBcbiAgICB9XG4gICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGhcbiAgfVxuXG4gIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMFxufVxuXG4vLyB0byBiZSBjb21wYXRpYmxlIHdpdGggdGhlIGN1cnJlbnQgYWJzdHJhY3QtbGV2ZWxkb3duIHRlc3RzXG4vLyBudWxsaXNoIG9yIGVtcHR5IHN0cmluZ3MuXG4vLyBJIGNvdWxkIHVzZSAhIXZhbCBidXQgSSB3YW50IHRvIHBlcm1pdCBudW1iZXJzIGFuZCBib29sZWFucyxcbi8vIGlmIHBvc3NpYmxlLlxuXG5mdW5jdGlvbiBpc0RlZiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09ICcnXG59XG5cbmZ1bmN0aW9uIGhhcyAocmFuZ2UsIG5hbWUpIHtcbiAgcmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJhbmdlLCBuYW1lKVxufVxuXG5mdW5jdGlvbiBoYXNLZXkocmFuZ2UsIG5hbWUpIHtcbiAgcmV0dXJuIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJhbmdlLCBuYW1lKSAmJiBuYW1lXG59XG5cbnZhciBsb3dlckJvdW5kS2V5ID0gZXhwb3J0cy5sb3dlckJvdW5kS2V5ID0gZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICBoYXNLZXkocmFuZ2UsICdndCcpXG4gICAgfHwgaGFzS2V5KHJhbmdlLCAnZ3RlJylcbiAgICB8fCBoYXNLZXkocmFuZ2UsICdtaW4nKVxuICAgIHx8IChyYW5nZS5yZXZlcnNlID8gaGFzS2V5KHJhbmdlLCAnZW5kJykgOiBoYXNLZXkocmFuZ2UsICdzdGFydCcpKVxuICAgIHx8IHVuZGVmaW5lZFxuICAgIClcbn1cblxudmFyIGxvd2VyQm91bmQgPSBleHBvcnRzLmxvd2VyQm91bmQgPSBmdW5jdGlvbiAocmFuZ2UsIGRlZikge1xuICB2YXIgayA9IGxvd2VyQm91bmRLZXkocmFuZ2UpXG4gIHJldHVybiBrID8gcmFuZ2Vba10gOiBkZWZcbn1cblxudmFyIGxvd2VyQm91bmRJbmNsdXNpdmUgPSBleHBvcnRzLmxvd2VyQm91bmRJbmNsdXNpdmUgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgcmV0dXJuIGhhcyhyYW5nZSwgJ2d0JykgPyBmYWxzZSA6IHRydWVcbn1cblxudmFyIHVwcGVyQm91bmRJbmNsdXNpdmUgPSBleHBvcnRzLnVwcGVyQm91bmRJbmNsdXNpdmUgPVxuICBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICByZXR1cm4gKGhhcyhyYW5nZSwgJ2x0JykgLyomJiAhcmFuZ2UubWF4RXgqLykgPyBmYWxzZSA6IHRydWVcbiAgfVxuXG52YXIgbG93ZXJCb3VuZEV4Y2x1c2l2ZSA9IGV4cG9ydHMubG93ZXJCb3VuZEV4Y2x1c2l2ZSA9XG4gIGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiAhbG93ZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgfVxuXG52YXIgdXBwZXJCb3VuZEV4Y2x1c2l2ZSA9IGV4cG9ydHMudXBwZXJCb3VuZEV4Y2x1c2l2ZSA9XG4gIGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiAhdXBwZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgfVxuXG52YXIgdXBwZXJCb3VuZEtleSA9IGV4cG9ydHMudXBwZXJCb3VuZEtleSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICAgIHJldHVybiAoXG4gICAgICAgaGFzS2V5KHJhbmdlLCAnbHQnKVxuICAgIHx8IGhhc0tleShyYW5nZSwgJ2x0ZScpXG4gICAgfHwgaGFzS2V5KHJhbmdlLCAnbWF4JylcbiAgICB8fCAocmFuZ2UucmV2ZXJzZSA/IGhhc0tleShyYW5nZSwgJ3N0YXJ0JykgOiBoYXNLZXkocmFuZ2UsICdlbmQnKSlcbiAgICB8fCB1bmRlZmluZWRcbiAgICApXG59XG5cbnZhciB1cHBlckJvdW5kID0gZXhwb3J0cy51cHBlckJvdW5kID0gZnVuY3Rpb24gKHJhbmdlLCBkZWYpIHtcbiAgdmFyIGsgPSB1cHBlckJvdW5kS2V5KHJhbmdlKVxuICByZXR1cm4gayA/IHJhbmdlW2tdIDogZGVmXG59XG5cbmV4cG9ydHMuc3RhcnQgPSBmdW5jdGlvbiAocmFuZ2UsIGRlZikge1xuICByZXR1cm4gcmFuZ2UucmV2ZXJzZSA/IHVwcGVyQm91bmQocmFuZ2UsIGRlZikgOiBsb3dlckJvdW5kKHJhbmdlLCBkZWYpXG59XG5leHBvcnRzLmVuZCA9IGZ1bmN0aW9uIChyYW5nZSwgZGVmKSB7XG4gIHJldHVybiByYW5nZS5yZXZlcnNlID8gbG93ZXJCb3VuZChyYW5nZSwgZGVmKSA6IHVwcGVyQm91bmQocmFuZ2UsIGRlZilcbn1cbmV4cG9ydHMuc3RhcnRJbmNsdXNpdmUgPSBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgcmV0dXJuIChcbiAgICByYW5nZS5yZXZlcnNlXG4gID8gdXBwZXJCb3VuZEluY2x1c2l2ZShyYW5nZSlcbiAgOiBsb3dlckJvdW5kSW5jbHVzaXZlKHJhbmdlKVxuICApXG59XG5leHBvcnRzLmVuZEluY2x1c2l2ZSA9IGZ1bmN0aW9uIChyYW5nZSkge1xuICByZXR1cm4gKFxuICAgIHJhbmdlLnJldmVyc2VcbiAgPyBsb3dlckJvdW5kSW5jbHVzaXZlKHJhbmdlKVxuICA6IHVwcGVyQm91bmRJbmNsdXNpdmUocmFuZ2UpXG4gIClcbn1cblxuZnVuY3Rpb24gaWQgKGUpIHsgcmV0dXJuIGUgfVxuXG5leHBvcnRzLnRvTHRndCA9IGZ1bmN0aW9uIChyYW5nZSwgX3JhbmdlLCBtYXAsIGxvd2VyLCB1cHBlcikge1xuICBfcmFuZ2UgPSBfcmFuZ2UgfHwge31cbiAgbWFwID0gbWFwIHx8IGlkXG4gIHZhciBkZWZhdWx0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzXG4gIHZhciBsYiA9IGV4cG9ydHMubG93ZXJCb3VuZEtleShyYW5nZSlcbiAgdmFyIHViID0gZXhwb3J0cy51cHBlckJvdW5kS2V5KHJhbmdlKVxuICBpZihsYikge1xuICAgIGlmKGxiID09PSAnZ3QnKSBfcmFuZ2UuZ3QgPSBtYXAocmFuZ2UuZ3QsIGZhbHNlKVxuICAgIGVsc2UgICAgICAgICAgICBfcmFuZ2UuZ3RlID0gbWFwKHJhbmdlW2xiXSwgZmFsc2UpXG4gIH1cbiAgZWxzZSBpZihkZWZhdWx0cylcbiAgICBfcmFuZ2UuZ3RlID0gbWFwKGxvd2VyLCBmYWxzZSlcblxuICBpZih1Yikge1xuICAgIGlmKHViID09PSAnbHQnKSBfcmFuZ2UubHQgPSBtYXAocmFuZ2UubHQsIHRydWUpXG4gICAgZWxzZSAgICAgICAgICAgIF9yYW5nZS5sdGUgPSBtYXAocmFuZ2VbdWJdLCB0cnVlKVxuICB9XG4gIGVsc2UgaWYoZGVmYXVsdHMpXG4gICAgX3JhbmdlLmx0ZSA9IG1hcCh1cHBlciwgdHJ1ZSlcblxuICBpZihyYW5nZS5yZXZlcnNlICE9IG51bGwpXG4gICAgX3JhbmdlLnJldmVyc2UgPSAhIXJhbmdlLnJldmVyc2VcblxuICAvL2lmIHJhbmdlIHdhcyB1c2VkIG11dGFibHlcbiAgLy8oaW4gbGV2ZWwtc3VibGV2ZWwgaXQncyBwYXJ0IG9mIGFuIG9wdGlvbnMgb2JqZWN0XG4gIC8vdGhhdCBoYXMgbW9yZSBwcm9wZXJ0aWVzIG9uIGl0LilcbiAgaWYoaGFzKF9yYW5nZSwgJ21heCcpKSAgIGRlbGV0ZSBfcmFuZ2UubWF4XG4gIGlmKGhhcyhfcmFuZ2UsICdtaW4nKSkgICBkZWxldGUgX3JhbmdlLm1pblxuICBpZihoYXMoX3JhbmdlLCAnc3RhcnQnKSkgZGVsZXRlIF9yYW5nZS5zdGFydFxuICBpZihoYXMoX3JhbmdlLCAnZW5kJykpICAgZGVsZXRlIF9yYW5nZS5lbmRcblxuICByZXR1cm4gX3JhbmdlXG59XG5cbmV4cG9ydHMuY29udGFpbnMgPSBmdW5jdGlvbiAocmFuZ2UsIGtleSwgY29tcGFyZSkge1xuICBjb21wYXJlID0gY29tcGFyZSB8fCBleHBvcnRzLmNvbXBhcmVcblxuICB2YXIgbGIgPSBsb3dlckJvdW5kKHJhbmdlKVxuICBpZihpc0RlZihsYikpIHtcbiAgICB2YXIgY21wID0gY29tcGFyZShrZXksIGxiKVxuICAgIGlmKGNtcCA8IDAgfHwgKGNtcCA9PT0gMCAmJiBsb3dlckJvdW5kRXhjbHVzaXZlKHJhbmdlKSkpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHZhciB1YiA9IHVwcGVyQm91bmQocmFuZ2UpXG4gIGlmKGlzRGVmKHViKSkge1xuICAgIHZhciBjbXAgPSBjb21wYXJlKGtleSwgdWIpXG4gICAgaWYoY21wID4gMCB8fCAoY21wID09PSAwKSAmJiB1cHBlckJvdW5kRXhjbHVzaXZlKHJhbmdlKSlcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0cy5maWx0ZXIgPSBmdW5jdGlvbiAocmFuZ2UsIGNvbXBhcmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb250YWlucyhyYW5nZSwga2V5LCBjb21wYXJlKVxuICB9XG59XG5cblxuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwodGhpcywgX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi8uLi9idWZmZXIvaW5kZXguanMgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIpLkJ1ZmZlcikpXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9tZW1kb3duL2ltbWVkaWF0ZS1icm93c2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvbWVtZG93bi9pbW1lZGlhdGUtYnJvd3Nlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgaW1tZWRpYXRlICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2ltbWVkaWF0ZS9saWIvaW5kZXguanNcIilcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvbWVtZG93bi9tZW1kb3duLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9tZW1kb3duL21lbWRvd24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpbmhlcml0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGluaGVyaXRzICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanNcIilcbnZhciBBYnN0cmFjdExldmVsRE9XTiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGFic3RyYWN0LWxldmVsZG93biAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9hYnN0cmFjdC1sZXZlbGRvd24vaW5kZXguanNcIikuQWJzdHJhY3RMZXZlbERPV05cbnZhciBBYnN0cmFjdEl0ZXJhdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgYWJzdHJhY3QtbGV2ZWxkb3duICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fic3RyYWN0LWxldmVsZG93bi9pbmRleC5qc1wiKS5BYnN0cmFjdEl0ZXJhdG9yXG52YXIgbHRndCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGx0Z3QgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvbHRndC9pbmRleC5qc1wiKVxudmFyIGNyZWF0ZVJCVCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGZ1bmN0aW9uYWwtcmVkLWJsYWNrLXRyZWUgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvZnVuY3Rpb25hbC1yZWQtYmxhY2stdHJlZS9yYnRyZWUuanNcIilcbnZhciBCdWZmZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBzYWZlLWJ1ZmZlciAqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qc1wiKS5CdWZmZXJcblxuLy8gSW4gTm9kZSwgdXNlIGdsb2JhbC5zZXRJbW1lZGlhdGUuIEluIHRoZSBicm93c2VyLCB1c2UgYSBjb25zaXN0ZW50XG4vLyBtaWNyb3Rhc2sgbGlicmFyeSB0byBnaXZlIGNvbnNpc3RlbnQgbWljcm90YXNrIGV4cGVyaWVuY2UgdG8gYWxsIGJyb3dzZXJzXG52YXIgc2V0SW1tZWRpYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9pbW1lZGlhdGUgKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvbWVtZG93bi9pbW1lZGlhdGUtYnJvd3Nlci5qc1wiKVxuXG5mdW5jdGlvbiBndCAodmFsdWUpIHtcbiAgcmV0dXJuIGx0Z3QuY29tcGFyZSh2YWx1ZSwgdGhpcy5fdXBwZXJCb3VuZCkgPiAwXG59XG5cbmZ1bmN0aW9uIGd0ZSAodmFsdWUpIHtcbiAgcmV0dXJuIGx0Z3QuY29tcGFyZSh2YWx1ZSwgdGhpcy5fdXBwZXJCb3VuZCkgPj0gMFxufVxuXG5mdW5jdGlvbiBsdCAodmFsdWUpIHtcbiAgcmV0dXJuIGx0Z3QuY29tcGFyZSh2YWx1ZSwgdGhpcy5fdXBwZXJCb3VuZCkgPCAwXG59XG5cbmZ1bmN0aW9uIGx0ZSAodmFsdWUpIHtcbiAgcmV0dXJuIGx0Z3QuY29tcGFyZSh2YWx1ZSwgdGhpcy5fdXBwZXJCb3VuZCkgPD0gMFxufVxuXG5mdW5jdGlvbiBNZW1JdGVyYXRvciAoZGIsIG9wdGlvbnMpIHtcbiAgQWJzdHJhY3RJdGVyYXRvci5jYWxsKHRoaXMsIGRiKVxuICB0aGlzLl9saW1pdCA9IG9wdGlvbnMubGltaXRcblxuICBpZiAodGhpcy5fbGltaXQgPT09IC0xKSB0aGlzLl9saW1pdCA9IEluZmluaXR5XG5cbiAgdmFyIHRyZWUgPSBkYi5fc3RvcmVcblxuICB0aGlzLmtleUFzQnVmZmVyID0gb3B0aW9ucy5rZXlBc0J1ZmZlciAhPT0gZmFsc2VcbiAgdGhpcy52YWx1ZUFzQnVmZmVyID0gb3B0aW9ucy52YWx1ZUFzQnVmZmVyICE9PSBmYWxzZVxuICB0aGlzLl9yZXZlcnNlID0gb3B0aW9ucy5yZXZlcnNlXG4gIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMuX2RvbmUgPSAwXG5cbiAgaWYgKCF0aGlzLl9yZXZlcnNlKSB7XG4gICAgdGhpcy5faW5jciA9ICduZXh0J1xuICAgIHRoaXMuX2xvd2VyQm91bmQgPSBsdGd0Lmxvd2VyQm91bmQob3B0aW9ucylcbiAgICB0aGlzLl91cHBlckJvdW5kID0gbHRndC51cHBlckJvdW5kKG9wdGlvbnMpXG5cbiAgICBpZiAodHlwZW9mIHRoaXMuX2xvd2VyQm91bmQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl90cmVlID0gdHJlZS5iZWdpblxuICAgIH0gZWxzZSBpZiAobHRndC5sb3dlckJvdW5kSW5jbHVzaXZlKG9wdGlvbnMpKSB7XG4gICAgICB0aGlzLl90cmVlID0gdHJlZS5nZSh0aGlzLl9sb3dlckJvdW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90cmVlID0gdHJlZS5ndCh0aGlzLl9sb3dlckJvdW5kKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl91cHBlckJvdW5kKSB7XG4gICAgICBpZiAobHRndC51cHBlckJvdW5kSW5jbHVzaXZlKG9wdGlvbnMpKSB7XG4gICAgICAgIHRoaXMuX3Rlc3QgPSBsdGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Rlc3QgPSBsdFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9pbmNyID0gJ3ByZXYnXG4gICAgdGhpcy5fbG93ZXJCb3VuZCA9IGx0Z3QudXBwZXJCb3VuZChvcHRpb25zKVxuICAgIHRoaXMuX3VwcGVyQm91bmQgPSBsdGd0Lmxvd2VyQm91bmQob3B0aW9ucylcblxuICAgIGlmICh0eXBlb2YgdGhpcy5fbG93ZXJCb3VuZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX3RyZWUgPSB0cmVlLmVuZFxuICAgIH0gZWxzZSBpZiAobHRndC51cHBlckJvdW5kSW5jbHVzaXZlKG9wdGlvbnMpKSB7XG4gICAgICB0aGlzLl90cmVlID0gdHJlZS5sZSh0aGlzLl9sb3dlckJvdW5kKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90cmVlID0gdHJlZS5sdCh0aGlzLl9sb3dlckJvdW5kKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl91cHBlckJvdW5kKSB7XG4gICAgICBpZiAobHRndC5sb3dlckJvdW5kSW5jbHVzaXZlKG9wdGlvbnMpKSB7XG4gICAgICAgIHRoaXMuX3Rlc3QgPSBndGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Rlc3QgPSBndFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pbmhlcml0cyhNZW1JdGVyYXRvciwgQWJzdHJhY3RJdGVyYXRvcilcblxuTWVtSXRlcmF0b3IucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG5cbiAgaWYgKHRoaXMuX2RvbmUrKyA+PSB0aGlzLl9saW1pdCkgcmV0dXJuIHNldEltbWVkaWF0ZShjYWxsYmFjaylcbiAgaWYgKCF0aGlzLl90cmVlLnZhbGlkKSByZXR1cm4gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKVxuXG4gIGtleSA9IHRoaXMuX3RyZWUua2V5XG4gIHZhbHVlID0gdGhpcy5fdHJlZS52YWx1ZVxuXG4gIGlmICghdGhpcy5fdGVzdChrZXkpKSByZXR1cm4gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKVxuXG4gIGlmICh0aGlzLmtleUFzQnVmZmVyICYmICFCdWZmZXIuaXNCdWZmZXIoa2V5KSkge1xuICAgIGtleSA9IEJ1ZmZlci5mcm9tKFN0cmluZyhrZXkpKVxuICB9XG5cbiAgaWYgKHRoaXMudmFsdWVBc0J1ZmZlciAmJiAhQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgIHZhbHVlID0gQnVmZmVyLmZyb20oU3RyaW5nKHZhbHVlKSlcbiAgfVxuXG4gIHRoaXMuX3RyZWVbdGhpcy5faW5jcl0oKVxuXG4gIHNldEltbWVkaWF0ZShmdW5jdGlvbiBjYWxsTmV4dCAoKSB7XG4gICAgY2FsbGJhY2sobnVsbCwga2V5LCB2YWx1ZSlcbiAgfSlcbn1cblxuTWVtSXRlcmF0b3IucHJvdG90eXBlLl90ZXN0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBNZW1ET1dOICgpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1lbURPV04pKSByZXR1cm4gbmV3IE1lbURPV04oKVxuXG4gIEFic3RyYWN0TGV2ZWxET1dOLmNhbGwodGhpcywgJycpXG5cbiAgdGhpcy5fc3RvcmUgPSBjcmVhdGVSQlQobHRndC5jb21wYXJlKVxufVxuXG5pbmhlcml0cyhNZW1ET1dOLCBBYnN0cmFjdExldmVsRE9XTilcblxuTWVtRE9XTi5wcm90b3R5cGUuX29wZW4gPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHNldEltbWVkaWF0ZShmdW5jdGlvbiBjYWxsTmV4dCAoKSB7XG4gICAgY2FsbGJhY2sobnVsbCwgc2VsZilcbiAgfSlcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX3NlcmlhbGl6ZUtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleVxufVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fc2VyaWFsaXplVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlXG59XG5cbk1lbURPV04ucHJvdG90eXBlLl9wdXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGl0ZXIgPSB0aGlzLl9zdG9yZS5maW5kKGtleSlcblxuICBpZiAoaXRlci52YWxpZCkge1xuICAgIHRoaXMuX3N0b3JlID0gaXRlci51cGRhdGUodmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fc3RvcmUgPSB0aGlzLl9zdG9yZS5pbnNlcnQoa2V5LCB2YWx1ZSlcbiAgfVxuXG4gIHNldEltbWVkaWF0ZShjYWxsYmFjaylcbn1cblxuTWVtRE9XTi5wcm90b3R5cGUuX2dldCA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciB2YWx1ZSA9IHRoaXMuX3N0b3JlLmdldChrZXkpXG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyAnTm90Rm91bmQnIGVycm9yLCBjb25zaXN0ZW50IHdpdGggTGV2ZWxET1dOIEFQSVxuICAgIHJldHVybiBzZXRJbW1lZGlhdGUoZnVuY3Rpb24gY2FsbE5leHQgKCkge1xuICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdOb3RGb3VuZCcpKVxuICAgIH0pXG4gIH1cblxuICBpZiAob3B0aW9ucy5hc0J1ZmZlciAhPT0gZmFsc2UgJiYgIUJ1ZmZlci5pc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IEJ1ZmZlci5mcm9tKFN0cmluZyh2YWx1ZSkpXG4gIH1cblxuICBzZXRJbW1lZGlhdGUoZnVuY3Rpb24gY2FsbE5leHQgKCkge1xuICAgIGNhbGxiYWNrKG51bGwsIHZhbHVlKVxuICB9KVxufVxuXG5NZW1ET1dOLnByb3RvdHlwZS5fZGVsID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdGhpcy5fc3RvcmUgPSB0aGlzLl9zdG9yZS5yZW1vdmUoa2V5KVxuICBzZXRJbW1lZGlhdGUoY2FsbGJhY2spXG59XG5cbk1lbURPV04ucHJvdG90eXBlLl9iYXRjaCA9IGZ1bmN0aW9uIChhcnJheSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGkgPSAtMVxuICB2YXIga2V5XG4gIHZhciB2YWx1ZVxuICB2YXIgaXRlclxuICB2YXIgbGVuID0gYXJyYXkubGVuZ3RoXG4gIHZhciB0cmVlID0gdGhpcy5fc3RvcmVcblxuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAga2V5ID0gYXJyYXlbaV0ua2V5XG4gICAgaXRlciA9IHRyZWUuZmluZChrZXkpXG5cbiAgICBpZiAoYXJyYXlbaV0udHlwZSA9PT0gJ3B1dCcpIHtcbiAgICAgIHZhbHVlID0gYXJyYXlbaV0udmFsdWVcbiAgICAgIHRyZWUgPSBpdGVyLnZhbGlkID8gaXRlci51cGRhdGUodmFsdWUpIDogdHJlZS5pbnNlcnQoa2V5LCB2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdHJlZSA9IGl0ZXIucmVtb3ZlKClcbiAgICB9XG4gIH1cblxuICB0aGlzLl9zdG9yZSA9IHRyZWVcblxuICBzZXRJbW1lZGlhdGUoY2FsbGJhY2spXG59XG5cbk1lbURPV04ucHJvdG90eXBlLl9pdGVyYXRvciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgTWVtSXRlcmF0b3IodGhpcywgb3B0aW9ucylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNZW1ET1dOLmRlZmF1bHQgPSBNZW1ET1dOXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAvaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBub2RlL25vLWRlcHJlY2F0ZWQtYXBpICovXG52YXIgYnVmZmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgYnVmZmVyICovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qc1wiKVxudmFyIEJ1ZmZlciA9IGJ1ZmZlci5CdWZmZXJcblxuLy8gYWx0ZXJuYXRpdmUgdG8gdXNpbmcgT2JqZWN0LmtleXMgZm9yIG9sZCBicm93c2Vyc1xuZnVuY3Rpb24gY29weVByb3BzIChzcmMsIGRzdCkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgZHN0W2tleV0gPSBzcmNba2V5XVxuICB9XG59XG5pZiAoQnVmZmVyLmZyb20gJiYgQnVmZmVyLmFsbG9jICYmIEJ1ZmZlci5hbGxvY1Vuc2FmZSAmJiBCdWZmZXIuYWxsb2NVbnNhZmVTbG93KSB7XG4gIG1vZHVsZS5leHBvcnRzID0gYnVmZmVyXG59IGVsc2Uge1xuICAvLyBDb3B5IHByb3BlcnRpZXMgZnJvbSByZXF1aXJlKCdidWZmZXInKVxuICBjb3B5UHJvcHMoYnVmZmVyLCBleHBvcnRzKVxuICBleHBvcnRzLkJ1ZmZlciA9IFNhZmVCdWZmZXJcbn1cblxuZnVuY3Rpb24gU2FmZUJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuLy8gQ29weSBzdGF0aWMgbWV0aG9kcyBmcm9tIEJ1ZmZlclxuY29weVByb3BzKEJ1ZmZlciwgU2FmZUJ1ZmZlcilcblxuU2FmZUJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICB2YXIgYnVmID0gQnVmZmVyKHNpemUpXG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgYnVmLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJ1Zi5maWxsKDApXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoc2l6ZSlcbn1cblxuU2FmZUJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlci5TbG93QnVmZmVyKHNpemUpXG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4uLy4uL25vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBleHRlbmRcblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciB0YXJnZXQgPSB7fVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBtZW1Eb3duQ2FjaGUsIE1lbUNhY2hlTWl4aW5zICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tZW1kb3duQ2FjaGVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWVtZG93bkNhY2hlICovIFwiLi9zcmMvbWVtZG93bkNhY2hlLmpzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwibWVtRG93bkNhY2hlXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX21lbWRvd25DYWNoZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWVtY2FjaGVfbWl4aW5zX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21lbWNhY2hlLm1peGlucyAqLyBcIi4vc3JjL21lbWNhY2hlLm1peGlucy5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk1lbUNhY2hlTWl4aW5zXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX21lbWNhY2hlX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21lbWNhY2hlLm1peGlucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbWVtY2FjaGUubWl4aW5zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuY29uc3QgTWVtQ2FjaGVNaXhpbnMgPSBCYXNlQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICAvKipcbiAgICogVGhpcyBtZXRob2RzIHJldHVybiBzdW1tYXJ5IGFib3V0IGl0ZW1zIG9mIHRoZSBjdXJyZW50IG1lbWNhY2hlIFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgbWVtQ2FjaGVTdW1tYXJ5KCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1lbUNhY2hlLmdldEl0ZW1MaXN0KCk7XG4gIH1cblxuICBzZXQgTWVtQ2FjaGUobWVtQ2FjaGUpIHtcbiAgICB0aGlzLm1lbUNhY2hlID0gbWVtQ2FjaGU7XG4gIH1cblxuICBnZXQgTWVtQ2FjaGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVtQ2FjaGU7XG4gIH1cblxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChNZW1DYWNoZU1peGlucyk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21lbWRvd25DYWNoZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbWVtZG93bkNhY2hlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2F1c2FsLW5ldC5jb3JlICovIFwiY2F1c2FsLW5ldC5jb3JlXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWVtb3JpemluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWVtb3JpemluZy5taXhpbnMgKi8gXCIuL3NyYy9tZW1vcml6aW5nLm1peGlucy5qc1wiKTtcblxuXG5cbi8qKlxuICogVGhpcyBNZW1kb3duQ2FjaGUgcHJvdmlkZSBtZW1jYWNoZSBpbXBsZW1lbnQgYmFzZWQgb24gXG4gKiBbbWVtZG93bl0oaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvbWVtZG93bilcbiAqIHsgbWl4V2l0aDogWyBNZW1vcml6aW5nTWl4aW5zIF0gfVxuICogQGNsYXNzIE1lbW9yeUNhY2hlXG4gKiBAZXh0ZW5kcyBCYXNlTWVtQ2FjaGVcbiAqL1xuXG5jbGFzcyBNZW1kb3duQ2FjaGUgZXh0ZW5kcyBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJwbGF0Zm9ybVwiXS5taXhXaXRoKGNhdXNhbF9uZXRfY29yZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiU3RvcmVcIl0sIFtfbWVtb3JpemluZ19taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl1dKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cbiAgLyoqXG4gICAqIENvbm5lY3QgdG8gZGF0YWJhc2UsIHRoaXMgZnVuY3Rpb24gc2hhbGwgYmUgY2FsbCB3aGVuIGNvbnN0cnVjdCBpbnN0YW5jZVxuICAgKiBAbWVtYmVyb2YgTWVtZG93bkNhY2hlXG4gICAqL1xuXG5cbiAgY29ubmVjdCgpIHtcbiAgICBsZXQgbWVtZG93biA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIG1lbWRvd24gKi8gXCIuLi8uLi9ub2RlX21vZHVsZXMvbWVtZG93bi9tZW1kb3duLmpzXCIpO1xuXG4gICAgdGhpcy5zdG9yZSA9IHRoaXMubGV2ZWx1cChtZW1kb3duKCkpO1xuICB9XG5cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChuZXcgTWVtZG93bkNhY2hlKCkpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tZW1vcml6aW5nLm1peGlucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tZW1vcml6aW5nLm1peGlucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyoqXG4gKiBUaGlzIE1lbW9yaXppbmdNaXhpbnMgY2xhc3MgaXMgYSBtaXhpbnMgY2xhc3MgZm9yIGltcGxlbWVudCBtZW1vcnkgbWV0aG9kc1xuICogQGNsYXNzIE1lbW9yaXppbmdNaXhpbnNcbiAqIEBleHBlcmltZW50XG4gKiBAZXh0ZW5kcyBCYXNlTWVtQ2FjaGVDbGFzc1xuICovXG5jb25zdCBNZW1vcml6aW5nTWl4aW5zID0gQmFzZU1lbUNhY2hlQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBCYXNlTWVtQ2FjaGVDbGFzcyB7XG4gIC8qKlxuICAgKiBSZWFkIGNvbnRlbnQgZnJvbSBcbiAgICogQGV4cGVyaW1lbnRcbiAgICogQHBhcmFtIHsgU3RyaW5nfE51bWJlciB9IG1lbW9yeVNsb3RJbmRleCAtIG1lbW9yeSBzbG90IGluZGV4XG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyByZWFkKG1lbW9yeVNsb3RJbmRleCkge1xuICAgIGNvbnN0IEdldEZyb21NZW1vcnkgPSBhc3luYyBtZW1vcnlTbG90SW5kZXggPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmdldEl0ZW0obWVtb3J5U2xvdEluZGV4KTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZGF0YSlbMF07XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBhd2FpdCBHZXRGcm9tTWVtb3J5KG1lbW9yeVNsb3RJbmRleCk7XG4gIH1cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0geyBTdHJpbmd8TnVtYmVyIH0gbWVtb3J5U2xvdEluZGV4IC0gcG9zaXRpdmUgbnVtYmVyIGZvciBtZW1vcnkgc2xvdFxuICAgKiBAcGFyYW0geyBBcnJheSB9IG1lbW9yeSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7IFByb21pc2UgfSBtZW1vcnkgc2xvdCBpbmRleCB2YWx1ZVxuICAgKi9cblxuXG4gIGFzeW5jIHdyaXRlKG1lbW9yeVNsb3RJbmRleCwgdmFsdWUpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5zZXRJdGVtKG1lbW9yeVNsb3RJbmRleCwgdmFsdWUpO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHNsb3RJZHhzXG4gICAqIEByZXR1cm5zXG4gICAqL1xuXG5cbiAgYXN5bmMgcmVjYWxsKHNsb3RJZHhzKSB7XG4gICAgbGV0IG1lbW9yeSA9IFtdO1xuXG4gICAgZm9yIChsZXQgc2xvdElkeCBvZiBzbG90SWR4cykge1xuICAgICAgbWVtb3J5LnB1c2goKGF3YWl0IHRoaXMucmVhZChzbG90SWR4KSkpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vcnk7XG4gIH1cblxufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChNZW1vcml6aW5nTWl4aW5zKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2F1c2FsLW5ldC5jb3JlXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2F1c2FsLW5ldC5jb3JlXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXztcblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjFsYldOaFkyaGxMM2RsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpSXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxbGJXTmhZMmhsTDNkbFluQmhZMnN2WW05dmRITjBjbUZ3SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMMmh2YldVdmFIVjVibWh1WjNWNVpXNHZaMmwwYUhWaUwyTmhkWE5oYkdsMGVTOXViMlJsWDIxdlpIVnNaWE12WVdKemRISmhZM1F0YkdWMlpXeGtiM2R1TDJGaWMzUnlZV04wTFdOb1lXbHVaV1F0WW1GMFkyZ3Vhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRaVzFqWVdOb1pTOHZhRzl0WlM5b2RYbHVhRzVuZFhsbGJpOW5hWFJvZFdJdlkyRjFjMkZzYVhSNUwyNXZaR1ZmYlc5a2RXeGxjeTloWW5OMGNtRmpkQzFzWlhabGJHUnZkMjR2WVdKemRISmhZM1F0YVhSbGNtRjBiM0l1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0WlcxallXTm9aUzh2YUc5dFpTOW9kWGx1YUc1bmRYbGxiaTluYVhSb2RXSXZZMkYxYzJGc2FYUjVMMjV2WkdWZmJXOWtkV3hsY3k5aFluTjBjbUZqZEMxc1pYWmxiR1J2ZDI0dllXSnpkSEpoWTNRdGJHVjJaV3hrYjNkdUxtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZZV0p6ZEhKaFkzUXRiR1YyWld4a2IzZHVMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZZbUZ6WlRZMExXcHpMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZZblZtWm1WeUwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdlluVm1abVZ5TDI1dlpHVmZiVzlrZFd4bGN5OXBjMkZ5Y21GNUwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdlpuVnVZM1JwYjI1aGJDMXlaV1F0WW14aFkyc3RkSEpsWlM5eVluUnlaV1V1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0WlcxallXTm9aUzh2YUc5dFpTOW9kWGx1YUc1bmRYbGxiaTluYVhSb2RXSXZZMkYxYzJGc2FYUjVMMjV2WkdWZmJXOWtkV3hsY3k5cFpXVmxOelUwTDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMMmh2YldVdmFIVjVibWh1WjNWNVpXNHZaMmwwYUhWaUwyTmhkWE5oYkdsMGVTOXViMlJsWDIxdlpIVnNaWE12YVcxdFpXUnBZWFJsTDJ4cFlpOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxbGJXTmhZMmhsTHk5b2IyMWxMMmgxZVc1b2JtZDFlV1Z1TDJkcGRHaDFZaTlqWVhWellXeHBkSGt2Ym05a1pWOXRiMlIxYkdWekwybHRiV1ZrYVdGMFpTOXNhV0l2YldWemMyRm5aVU5vWVc1dVpXd3Vhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRaVzFqWVdOb1pTOHZhRzl0WlM5b2RYbHVhRzVuZFhsbGJpOW5hWFJvZFdJdlkyRjFjMkZzYVhSNUwyNXZaR1ZmYlc5a2RXeGxjeTlwYlcxbFpHbGhkR1V2YkdsaUwyMTFkR0YwYVc5dUxtcHpJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdkwyaHZiV1V2YUhWNWJtaHVaM1Y1Wlc0dloybDBhSFZpTDJOaGRYTmhiR2wwZVM5dWIyUmxYMjF2WkhWc1pYTXZhVzF0WldScFlYUmxMMnhwWWk5dVpYaDBWR2xqYXk1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDIxbGJXTmhZMmhsTHk5b2IyMWxMMmgxZVc1b2JtZDFlV1Z1TDJkcGRHaDFZaTlqWVhWellXeHBkSGt2Ym05a1pWOXRiMlIxYkdWekwybHRiV1ZrYVdGMFpTOXNhV0l2YzNSaGRHVkRhR0Z1WjJVdWFuTWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5dFpXMWpZV05vWlM4dmFHOXRaUzlvZFhsdWFHNW5kWGxsYmk5bmFYUm9kV0l2WTJGMWMyRnNhWFI1TDI1dlpHVmZiVzlrZFd4bGN5OXBiVzFsWkdsaGRHVXZiR2xpTDNScGJXVnZkWFF1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzl0WlcxallXTm9aUzh2YUc5dFpTOW9kWGx1YUc1bmRYbGxiaTluYVhSb2RXSXZZMkYxYzJGc2FYUjVMMjV2WkdWZmJXOWtkV3hsY3k5cGJtaGxjbWwwY3k5cGJtaGxjbWwwYzE5aWNtOTNjMlZ5TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TDJodmJXVXZhSFY1Ym1odVozVjVaVzR2WjJsMGFIVmlMMk5oZFhOaGJHbDBlUzl1YjJSbFgyMXZaSFZzWlhNdmJIUm5kQzlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMWxiV05oWTJobEx5OW9iMjFsTDJoMWVXNW9ibWQxZVdWdUwyZHBkR2gxWWk5allYVnpZV3hwZEhrdmJtOWtaVjl0YjJSMWJHVnpMMjFsYldSdmQyNHZhVzF0WldScFlYUmxMV0p5YjNkelpYSXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRaVzFqWVdOb1pTOHZhRzl0WlM5b2RYbHVhRzVuZFhsbGJpOW5hWFJvZFdJdlkyRjFjMkZzYVhSNUwyNXZaR1ZmYlc5a2RXeGxjeTl0Wlcxa2IzZHVMMjFsYldSdmQyNHVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRaVzFqWVdOb1pTOHZhRzl0WlM5b2RYbHVhRzVuZFhsbGJpOW5hWFJvZFdJdlkyRjFjMkZzYVhSNUwyNXZaR1ZmYlc5a2RXeGxjeTl3Y205alpYTnpMMkp5YjNkelpYSXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRaVzFqWVdOb1pTOHZhRzl0WlM5b2RYbHVhRzVuZFhsbGJpOW5hWFJvZFdJdlkyRjFjMkZzYVhSNUwyNXZaR1ZmYlc5a2RXeGxjeTl6WVdabExXSjFabVpsY2k5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OUFZMkYxYzJGc1RtVjBMMjFsYldOaFkyaGxMeWgzWldKd1lXTnJLUzlpZFdsc1pHbHVMMmRzYjJKaGJDNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMWxiV05oWTJobEx5OW9iMjFsTDJoMWVXNW9ibWQxZVdWdUwyZHBkR2gxWWk5allYVnpZV3hwZEhrdmJtOWtaVjl0YjJSMWJHVnpMM2gwWlc1a0wybHRiWFYwWVdKc1pTNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyMWxiV05oWTJobEx5NHZjM0pqTDJsdVpHVjRMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiV1Z0WTJGamFHVXZMaTl6Y21NdmJXVnRZMkZqYUdVdWJXbDRhVzV6TG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TGk5emNtTXZiV1Z0Wkc5M2JrTmhZMmhsTG1weklpd2lkMlZpY0dGamF6b3ZMMEJqWVhWellXeE9aWFF2YldWdFkyRmphR1V2TGk5emNtTXZiV1Z0YjNKcGVtbHVaeTV0YVhocGJuTXVhbk1pTENKM1pXSndZV05yT2k4dlFHTmhkWE5oYkU1bGRDOXRaVzFqWVdOb1pTOWxlSFJsY201aGJDQmNJbU5oZFhOaGJDMXVaWFF1WTI5eVpWd2lJaXdpZDJWaWNHRmphem92TDBCallYVnpZV3hPWlhRdmJXVnRZMkZqYUdVdlpYaDBaWEp1WVd3Z1hDSmpZWFZ6WVd3dGJtVjBMblYwYVd4elhDSWlYU3dpYm1GdFpYTWlPbHNpVFdWdFEyRmphR1ZOYVhocGJuTWlMQ0pDWVhObFEyeGhjM01pTENKdFpXMURZV05vWlZOMWJXMWhjbmtpTENKdFpXMURZV05vWlNJc0ltZGxkRWwwWlcxTWFYTjBJaXdpVFdWdFEyRmphR1VpTENKTlpXMWtiM2R1UTJGamFHVWlMQ0p3YkdGMFptOXliU0lzSW0xcGVGZHBkR2dpTENKQ1lYTmxUV1Z0UTJGamFHVWlMQ0pOWlcxdmNtbDZhVzVuVFdsNGFXNXpJaXdpWTI5dWMzUnlkV04wYjNJaUxDSmpiMjV1WldOMElpd2liV1Z0Wkc5M2JpSXNJbkpsY1hWcGNtVWlMQ0p6ZEc5eVpTSXNJbXhsZG1Wc2RYQWlMQ0pDWVhObFRXVnRRMkZqYUdWRGJHRnpjeUlzSW5KbFlXUWlMQ0p0WlcxdmNubFRiRzkwU1c1a1pYZ2lMQ0pIWlhSR2NtOXRUV1Z0YjNKNUlpd2laR0YwWVNJc0ltZGxkRWwwWlcwaUxDSlBZbXBsWTNRaUxDSjJZV3gxWlhNaUxDSmxjbklpTENKM2NtbDBaU0lzSW5aaGJIVmxJaXdpYzJWMFNYUmxiU0lzSW5KbFkyRnNiQ0lzSW5Oc2IzUkpaSGh6SWl3aWJXVnRiM0o1SWl3aWMyeHZkRWxrZUNJc0luQjFjMmdpWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkN4UE8wRkRWa0U3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSRUZCTUVNc1owTkJRV2RETzBGQlF6RkZPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNaMFZCUVhkRUxHdENRVUZyUWp0QlFVTXhSVHRCUVVOQkxIbEVRVUZwUkN4alFVRmpPMEZCUXk5RU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4cFJFRkJlVU1zYVVOQlFXbERPMEZCUXpGRkxIZElRVUZuU0N4dFFrRkJiVUlzUlVGQlJUdEJRVU55U1R0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRXlRaXd3UWtGQk1FSXNSVUZCUlR0QlFVTjJSQ3g1UTBGQmFVTXNaVUZCWlR0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN3NFJFRkJjMFFzSzBSQlFTdEVPenRCUVVWeVNEdEJRVU5CT3pzN1FVRkhRVHRCUVVOQk96czdPenM3T3pzN096czdRVU5zUmtFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEZsQlFWazdPMEZCUlZvN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzZVVKQlFYbENMSE5EUVVGelF6dEJRVU12UkRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNXVUZCV1RzN1FVRkZXanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3g1UWtGQmVVSXNkMEpCUVhkQ08wRkJRMnBFT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVN4elEwRkJjME03UVVGRGRFTTdRVUZEUVR0QlFVTkJPMEZCUTBFc2IwTkJRVzlETEdGQlFXRTdPMEZCUldwRU96dEJRVVZCTzBGQlEwRXNNRU5CUVRCRE96dEJRVVV4UXp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN096czdPenM3T3pzN096dEJRM1pHUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnpzN1FVRkZTRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdPenM3T3pzN096czdPenRCUTNaRVFUczdRVUZGUVN4WlFVRlpMRzFDUVVGUExFTkJRVU1zYjBSQlFVODdRVUZETTBJc2RVSkJRWFZDTEcxQ1FVRlBMRU5CUVVNc2RVWkJRWEZDTzBGQlEzQkVMREpDUVVFeVFpeHRRa0ZCVHl4RFFVRkRMR2xIUVVFd1FqdEJRVU0zUkR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEhORFFVRnpRenM3UVVGRmRFTTdRVUZEUVR0QlFVTkJPenRCUVVWQkxHOURRVUZ2UXl4aFFVRmhPenRCUVVWcVJEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3h6UTBGQmMwTTdPMEZCUlhSRE8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEc5RFFVRnZReXhoUVVGaE96dEJRVVZxUkRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNaME5CUVdkRExHdERRVUZyUXp0QlFVTnNSVHM3UVVGRlFUdEJRVU5CTEhORFFVRnpRenM3UVVGRmRFTTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRU3h2UTBGQmIwTXNZVUZCWVRzN1FVRkZha1E3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeHpRMEZCYzBNN08wRkJSWFJETzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJMRzlEUVVGdlF5eGhRVUZoT3p0QlFVVnFSRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEQkNRVUV3UWpzN1FVRkZNVUlzYzBOQlFYTkRPenRCUVVWMFF5eHZRMEZCYjBNN08wRkJSWEJETzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNaMFJCUVdkRUxHRkJRV0U3TzBGQlJUZEVPenRCUVVWQkxHbENRVUZwUWl4clFrRkJhMEk3UVVGRGJrTTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJMREpDUVVFeVFqczdRVUZGTTBJN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRzlEUVVGdlF5eGhRVUZoTzBGQlEycEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPenM3T3pzN096czdPenM3UVVOMFVVRXNORUpCUVRSQ0xHMUNRVUZQTEVOQlFVTXNlVVpCUVhOQ08wRkJRekZFTERKQ1FVRXlRaXh0UWtGQlR5eERRVUZETEhWR1FVRnhRanRCUVVONFJDd3JRa0ZCSzBJc2JVSkJRVThzUTBGQlF5eHBSMEZCTUVJN096czdPenM3T3pzN096czdRVU5HY2tRN08wRkJSVm83UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEd0RFFVRnJReXhUUVVGVE8wRkJRek5ETzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hwUWtGQmFVSXNVMEZCVXp0QlFVTXhRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2NVSkJRWEZDTEZOQlFWTTdRVUZET1VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3d3UTBGQk1FTXNWVUZCVlR0QlFVTndSRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEzUktRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZXVHM3UVVGRldpeGhRVUZoTEcxQ1FVRlBMRU5CUVVNc2QwUkJRVmM3UVVGRGFFTXNZMEZCWXl4dFFrRkJUeXhEUVVGRExHOUVRVUZUTzBGQlF5OUNMR05CUVdNc2JVSkJRVThzUTBGQlF5eDNSVUZCVXpzN1FVRkZMMEk3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIRkNRVUZ4UWl4dFJFRkJiVVE3UVVGRGVFVTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWl4VlFVRlZPMEZCUXpkQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZwUWl4WlFVRlpPMEZCUXpkQ08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTd3dRa0ZCTUVJN1FVRkRNVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFc2RVTkJRWFZETEZOQlFWTTdRVUZEYUVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWlVGQlpTeHBRa0ZCYVVJN1FVRkRhRU03UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hoUVVGaExHbENRVUZwUWp0QlFVTTVRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQmFVSXNVMEZCVXp0QlFVTXhRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXbENMRk5CUVZNN1FVRkRNVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhVUpCUVdsQ0xGTkJRVk03UVVGRE1VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJFRkJaMFFzUlVGQlJUdEJRVU5zUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFTeHBRa0ZCYVVJc1UwRkJVenRCUVVNeFFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNlVU5CUVhsRE8wRkJRM3BETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gzUWtGQmQwSXNaVUZCWlR0QlFVTjJRenRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeDNRa0ZCZDBJc1VVRkJVVHRCUVVOb1F6dEJRVU5CTEhGQ1FVRnhRaXhsUVVGbE8wRkJRM0JETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHbENRVUZwUWl4WlFVRlpPMEZCUXpkQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3h4UWtGQmNVSXNVMEZCVXp0QlFVTTVRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzY1VKQlFYRkNMRk5CUVZNN1FVRkRPVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc2NVSkJRWEZDTEZOQlFWTTdRVUZET1VJN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2FVSkJRV2xDTEd0Q1FVRnJRanRCUVVOdVF6dEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTEdOQlFXTTdRVUZEYWtNN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMSFZFUVVGMVJDeFBRVUZQTzBGQlF6bEVPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3gxUkVGQmRVUXNUMEZCVHp0QlFVTTVSRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4clFrRkJhMEk3UVVGRGJFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeHhRa0ZCY1VJc1VVRkJVVHRCUVVNM1FqdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFc1pVRkJaU3hUUVVGVE8wRkJRM2hDTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzYlVKQlFXMUNMRk5CUVZNN1FVRkROVUk3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHVkJRV1VzYVVKQlFXbENPMEZCUTJoRE8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNhVUpCUVdsQ0xGbEJRVms3UVVGRE4wSTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEdsQ1FVRnBRaXhuUWtGQlowSTdRVUZEYWtNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUWtGQmFVSXNaMEpCUVdkQ08wRkJRMnBET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMR2xDUVVGcFFpeFpRVUZaTzBGQlF6ZENPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRE5YWkVRU3hwUWtGQmFVSTdPMEZCUldwQ08wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUTBwWk96dEJRVVZhT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRU3hEUVVGRE96dEJRVVZFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEVOQlFVTTdPMEZCUlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTERaQ1FVRTJRaXhOUVVGTk8wRkJRMjVETzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNOa0pCUVRaQ0xFdEJRVXM3UVVGRGJFTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJZVHRCUVVOaU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UFFVRlBPMEZCUTFBN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRmhPMEZCUTJJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZoTzBGQlEySTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRV0U3UVVGRFlqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnp0QlFVTllPMEZCUTBFN1FVRkRRU3hUUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRU3hYUVVGWE8wRkJRMWc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJZVHRCUVVOaU8wRkJRMEU3UVVGRFFUdEJRVU5CTEdGQlFXRTdRVUZEWWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN08wRkJSVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPMEZCUlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZET3p0QlFVVkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNNa0pCUVRKQ0xFMUJRVTA3UVVGRGFrTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnp0QlFVTllPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFBRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWMEZCVnp0QlFVTllPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTzBGQlExZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTzBGQlExZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFhRVUZYTzBGQlExZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmM3UVVGRFdEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGTkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTERKQ1FVRXlRaXhOUVVGTk8wRkJRMnBETzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRRa0ZCT0VJc1ZVRkJWVHRCUVVONFF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2EwUkJRV3RFTEdsQ1FVRnBRanM3UVVGRmJrVTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEV0QlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRU3huUWtGQlowSXNhVUpCUVdsQ08wRkJRMnBETzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUMEZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYTBKQlFXdENMRzFDUVVGdFFqdEJRVU55UXp0QlFVTkJPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRXNTMEZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRU3hyUWtGQmEwSXNhVUpCUVdsQ08wRkJRMjVETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTEVOQlFVTTdPMEZCUlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hEUVVGRE96czdRVUZIUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFTdzJRa0ZCTmtJc1RVRkJUVHRCUVVOdVF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFpDUVVFMlFpeExRVUZMTzBGQlEyeERPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVOQlFVTTdPMEZCUlVRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc01rSkJRVEpDTEUxQlFVMDdRVUZEYWtNN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3cyUWtGQk5rSXNTMEZCU3p0QlFVTnNRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPenRCUVVWRU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU03T3pzN096czdPenM3TzBGRGJpdENRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1VVRkJVU3hYUVVGWE96dEJRVVZ1UWp0QlFVTkJPMEZCUTBFN1FVRkRRU3hSUVVGUkxGZEJRVmM3TzBGQlJXNUNPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hSUVVGUkxGZEJRVmM3TzBGQlJXNUNPMEZCUTBFN1FVRkRRU3hSUVVGUkxGVkJRVlU3TzBGQlJXeENPMEZCUTBFN096czdPenM3T3pzN096czdRVU51Um1FN1FVRkRZanRCUVVOQkxFVkJRVVVzYlVKQlFVOHNRMEZCUXl4blJVRkJXVHRCUVVOMFFpeEZRVUZGTEcxQ1FVRlBMRU5CUVVNc2JVVkJRV1U3UVVGRGVrSXNSVUZCUlN4dFFrRkJUeXhEUVVGRExEUkZRVUZyUWp0QlFVTTFRaXhGUVVGRkxHMUNRVUZQTEVOQlFVTXNjMFZCUVdVN1FVRkRla0lzUlVGQlJTeHRRa0ZCVHl4RFFVRkRMRGhFUVVGWE8wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVUpCUVcxQ0xITkNRVUZ6UWp0QlFVTjZRenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdRVU12UmtFc09FTkJRV0U3TzBGQlJXSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZPenM3T3pzN096czdPenM3TzBGRGFrSkJMRGhEUVVGaE8wRkJRMkk3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFc1JUczdPenM3T3pzN096czdPenRCUTNKQ1FTd3JRMEZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096czdPMEZEVmtFc09FTkJRV0U3TzBGQlJXSTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNhVU5CUVdsRE8wRkJRMnBETzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVTdPenM3T3pzN096czdPenM3UVVOMlFtRTdRVUZEWWp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4Rk96czdPenM3T3pzN096dEJRMVJCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRU3hEUVVGRE8wRkJRMFE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEY2tKQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4clFrRkJhMElzVDBGQlR6dEJRVU42UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hwUWtGQmFVSTdPMEZCUldwQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenM3T3p0QlEyeExRU3hwUWtGQmFVSXNiVUpCUVU4c1EwRkJReXcwUkVGQlZ6czdPenM3T3pzN096czdPMEZEUVhCRExHVkJRV1VzYlVKQlFVOHNRMEZCUXl4cFJVRkJWVHRCUVVOcVF5eDNRa0ZCZDBJc2JVSkJRVThzUTBGQlF5d3dSVUZCYjBJN1FVRkRjRVFzZFVKQlFYVkNMRzFDUVVGUExFTkJRVU1zTUVWQlFXOUNPMEZCUTI1RUxGZEJRVmNzYlVKQlFVOHNRMEZCUXl3NFEwRkJUVHRCUVVONlFpeG5Ra0ZCWjBJc2JVSkJRVThzUTBGQlF5eDVSa0ZCTWtJN1FVRkRia1FzWVVGQllTeHRRa0ZCVHl4RFFVRkRMRFJFUVVGaE96dEJRVVZzUXp0QlFVTkJPMEZCUTBFc2JVSkJRVzFDTEcxQ1FVRlBMRU5CUVVNc2IwVkJRV0U3TzBGQlJYaERPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN096czdPenM3T3pzN096dEJReTlOUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3UVVGSlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZFVKQlFYVkNMSE5DUVVGelFqdEJRVU0zUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIRkNRVUZ4UWp0QlFVTnlRanM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2NVTkJRWEZET3p0QlFVVnlRenRCUVVOQk8wRkJRMEU3TzBGQlJVRXNNa0pCUVRKQ08wRkJRek5DTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFJDUVVFMFFpeFZRVUZWT3pzN096czdPenM3T3pzN1FVTjJUSFJETzBGQlEwRXNZVUZCWVN4dFFrRkJUeXhEUVVGRExHdEVRVUZSTzBGQlF6ZENPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hEUVVGRE8wRkJRMFE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TFFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTTNSRUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN3MFEwRkJORU03TzBGQlJUVkRPenM3T3pzN096czdPenM3UVVOdVFrRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVN4dFFrRkJiVUlzYzBKQlFYTkNPMEZCUTNwRE96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRiRUpCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3T3pzN096czdPenM3T3pzN1FVTkRRVHRCUVVGQkxFMUJRVTFCTEdOQlFXTXNSMEZCU1VNc1UwRkJSQ3hKUVVGakxHTkJRV05CTEZOQlFXUXNRMEZCZFVJN1FVRkRlRVE3T3pzN1FVRkpRU3hSUVVGTlF5eGxRVUZPTEVkQlFYVkNPMEZCUTI1Q0xGZEJRVThzVFVGQlRTeExRVUZMUXl4UlFVRk1MRU5CUVdORExGZEJRV1FzUlVGQllqdEJRVU5JT3p0QlFVVkVMRTFCUVVsRExGRkJRVW9zUTBGQllVWXNVVUZCWWl4RlFVRnpRanRCUVVOc1FpeFRRVUZMUVN4UlFVRk1MRWRCUVdkQ1FTeFJRVUZvUWp0QlFVTklPenRCUVVWRUxFMUJRVWxGTEZGQlFVb3NSMEZCWXp0QlFVTldMRmRCUVU4c1MwRkJTMFlzVVVGQldqdEJRVU5JT3p0QlFXWjFSQ3hEUVVFMVJEczdRVUZwUW1WSUxEWkZRVUZtTEVVN096czdPenM3T3pzN096dEJRMnhDUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3UVVGUFFTeE5RVUZOVFN4WlFVRk9MRk5CUVRKQ1F5eDVSRUZCVVN4RFFVRkRReXhQUVVGVUxFTkJRV3RDUXl4eFJFRkJiRUlzUlVGRGRrSXNRMEZCUlVNc01FUkJRVVlzUTBGRWRVSXNRMEZCTTBJc1EwRkRlVUk3UVVGRGNrSkRMR0ZCUVZjc1IwRkJSVHRCUVVOVU8wRkJRMEVzVTBGQlMwTXNUMEZCVER0QlFVTklPMEZCUTBRN096czdPenRCUVVsQlFTeFRRVUZQTEVkQlFVVTdRVUZEVEN4UlFVRkpReXhQUVVGUExFZEJRVWRETEcxQ1FVRlBMRU5CUVVNc2MwUkJRVVFzUTBGQmNrSTdPMEZCUTBFc1UwRkJTME1zUzBGQlRDeEhRVUZoTEV0QlFVdERMRTlCUVV3c1EwRkJZVWdzVDBGQlR5eEZRVUZ3UWl4RFFVRmlPMEZCUTBnN08wRkJXbTlDT3p0QlFXVldMRzFGUVVGSlVDeFpRVUZLTEVWQlFXWXNSVHM3T3pzN096czdPenM3TzBGRE1VSkJPMEZCUVVFN096czdPenRCUVUxQkxFMUJRVTFKTEdkQ1FVRm5RaXhIUVVGSlR5eHBRa0ZCUkN4SlFVRnpRaXhqUVVGalFTeHBRa0ZCWkN4RFFVRXJRanRCUVVNeFJUczdPenM3TzBGQlRVRXNVVUZCVFVNc1NVRkJUaXhEUVVGWFF5eGxRVUZZTEVWQlFUSkNPMEZCUTNaQ0xGVkJRVTFETEdGQlFXRXNSMEZCUnl4TlFVRlBSQ3hsUVVGUUxFbEJRWGxDTzBGQlF6TkRMRlZCUVVjN1FVRkRReXhaUVVGSlJTeEpRVUZKTEVkQlFVY3NUVUZCVFN4TFFVRkxReXhQUVVGTUxFTkJRV0ZJTEdWQlFXSXNRMEZCYWtJN1FVRkRRU3hsUVVGUFNTeE5RVUZOTEVOQlFVTkRMRTFCUVZBc1EwRkJZMGdzU1VGQlpDeEZRVUZ2UWl4RFFVRndRaXhEUVVGUU8wRkJRMGdzVDBGSVJDeERRVWxCTEU5QlFVMUpMRWRCUVU0c1JVRkJWVHRCUVVOT0xHVkJRVThzU1VGQlVEdEJRVU5JTzBGQlEwb3NTMEZTUkRzN1FVRlRRU3hYUVVGUExFMUJRVTFNTEdGQlFXRXNRMEZCUTBRc1pVRkJSQ3hEUVVFeFFqdEJRVU5JTzBGQlEwUTdPenM3T3pzN08wRkJUVUVzVVVGQlRVOHNTMEZCVGl4RFFVRlpVQ3hsUVVGYUxFVkJRVFpDVVN4TFFVRTNRaXhGUVVGdFF6dEJRVU12UWl4WFFVRlBMRTFCUVUwc1MwRkJTME1zVDBGQlRDeERRVUZoVkN4bFFVRmlMRVZCUVRoQ1VTeExRVUU1UWl4RFFVRmlPMEZCUTBnN1FVRkRSRHM3T3pzN096czdRVUZOUVN4UlFVRk5SU3hOUVVGT0xFTkJRV0ZETEZGQlFXSXNSVUZCYzBJN1FVRkRiRUlzVVVGQlNVTXNUVUZCVFN4SFFVRkhMRVZCUVdJN08wRkJRMEVzVTBGQlNTeEpRVUZKUXl4UFFVRlNMRWxCUVcxQ1JpeFJRVUZ1UWl4RlFVRTBRanRCUVVONFFrTXNXVUZCVFN4RFFVRkRSU3hKUVVGUUxFVkJRVmtzVFVGQlRTeExRVUZMWml4SlFVRk1MRU5CUVZWakxFOUJRVllzUTBGQmJFSTdRVUZEU0RzN1FVRkRSQ3hYUVVGUFJDeE5RVUZRTzBGQlEwZzdPMEZCZUVONVJTeERRVUU1UlRzN1FVRXdRMlZ5UWl3clJVRkJaaXhGT3pzN096czdPenM3T3p0QlEyaEVRU3cyUkRzN096czdPenM3T3pzN1FVTkJRU3c0UkNJc0ltWnBiR1VpT2lKQVkyRjFjMkZzVG1WMEwyMWxiV05oWTJobExuZGxZaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpQjNaV0p3WVdOclZXNXBkbVZ5YzJGc1RXOWtkV3hsUkdWbWFXNXBkR2x2YmloeWIyOTBMQ0JtWVdOMGIzSjVLU0I3WEc1Y2RHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMGVYQmxiMllnYlc5a2RXeGxJRDA5UFNBbmIySnFaV04wSnlsY2JseDBYSFJ0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1poWTNSdmNua29jbVZ4ZFdseVpTaGNJbU5oZFhOaGJDMXVaWFF1WTI5eVpWd2lLU3dnY21WeGRXbHlaU2hjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWlrcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvVzF3aVkyRjFjMkZzTFc1bGRDNWpiM0psWENJc0lGd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEdWNGNHOXlkSE5iWENKQVkyRjFjMkZzVG1WMEwyMWxiV05oWTJobFhDSmRJRDBnWm1GamRHOXllU2h5WlhGMWFYSmxLRndpWTJGMWMyRnNMVzVsZEM1amIzSmxYQ0lwTENCeVpYRjFhWEpsS0Z3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aUtTazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpUUdOaGRYTmhiRTVsZEM5dFpXMWpZV05vWlZ3aVhTQTlJR1poWTNSdmNua29jbTl2ZEZ0Y0ltTmhkWE5oYkMxdVpYUXVZMjl5WlZ3aVhTd2djbTl2ZEZ0Y0ltTmhkWE5oYkMxdVpYUXVkWFJwYkhOY0lsMHBPMXh1ZlNrb2RHaHBjeXdnWm5WdVkzUnBiMjRvWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlqWVhWellXeGZibVYwWDJOdmNtVmZYeXdnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlqWVhWellXeGZibVYwWDNWMGFXeHpYMThwSUh0Y2JuSmxkSFZ5YmlBaUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdYQ0l1TDNOeVl5OXBibVJsZUM1cWMxd2lLVHRjYmlJc0lpOHFJRU52Y0hseWFXZG9kQ0FvWXlrZ01qQXhOeUJTYjJRZ1ZtRm5aeXdnVFVsVUlFeHBZMlZ1YzJVZ0tpOWNibHh1Wm5WdVkzUnBiMjRnUVdKemRISmhZM1JEYUdGcGJtVmtRbUYwWTJnZ0tHUmlLU0I3WEc0Z0lIUm9hWE11WDJSaUlEMGdaR0pjYmlBZ2RHaHBjeTVmYjNCbGNtRjBhVzl1Y3lBOUlGdGRYRzRnSUhSb2FYTXVYM2R5YVhSMFpXNGdQU0JtWVd4elpWeHVmVnh1WEc1QlluTjBjbUZqZEVOb1lXbHVaV1JDWVhSamFDNXdjbTkwYjNSNWNHVXVYM05sY21saGJHbDZaVXRsZVNBOUlHWjFibU4wYVc5dUlDaHJaWGtwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11WDJSaUxsOXpaWEpwWVd4cGVtVkxaWGtvYTJWNUtWeHVmVnh1WEc1QlluTjBjbUZqZEVOb1lXbHVaV1JDWVhSamFDNXdjbTkwYjNSNWNHVXVYM05sY21saGJHbDZaVlpoYkhWbElEMGdablZ1WTNScGIyNGdLSFpoYkhWbEtTQjdYRzRnSUhKbGRIVnliaUIwYUdsekxsOWtZaTVmYzJWeWFXRnNhWHBsVm1Gc2RXVW9kbUZzZFdVcFhHNTlYRzVjYmtGaWMzUnlZV04wUTJoaGFXNWxaRUpoZEdOb0xuQnliM1J2ZEhsd1pTNWZZMmhsWTJ0WGNtbDBkR1Z1SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCcFppQW9kR2hwY3k1ZmQzSnBkSFJsYmlrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduZDNKcGRHVW9LU0JoYkhKbFlXUjVJR05oYkd4bFpDQnZiaUIwYUdseklHSmhkR05vSnlsY2JpQWdmVnh1ZlZ4dVhHNUJZbk4wY21GamRFTm9ZV2x1WldSQ1lYUmphQzV3Y205MGIzUjVjR1V1Y0hWMElEMGdablZ1WTNScGIyNGdLR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdkR2hwY3k1ZlkyaGxZMnRYY21sMGRHVnVLQ2xjYmx4dUlDQjJZWElnWlhKeUlEMGdkR2hwY3k1ZlpHSXVYMk5vWldOclMyVjVLR3RsZVN3Z0oydGxlU2NwWEc0Z0lHbG1JQ2hsY25JcElIc2dkR2h5YjNjZ1pYSnlJSDFjYmx4dUlDQnJaWGtnUFNCMGFHbHpMbDl6WlhKcFlXeHBlbVZMWlhrb2EyVjVLVnh1SUNCMllXeDFaU0E5SUhSb2FYTXVYM05sY21saGJHbDZaVlpoYkhWbEtIWmhiSFZsS1Z4dVhHNGdJSFJvYVhNdVgzQjFkQ2hyWlhrc0lIWmhiSFZsS1Z4dVhHNGdJSEpsZEhWeWJpQjBhR2x6WEc1OVhHNWNia0ZpYzNSeVlXTjBRMmhoYVc1bFpFSmhkR05vTG5CeWIzUnZkSGx3WlM1ZmNIVjBJRDBnWm5WdVkzUnBiMjRnS0d0bGVTd2dkbUZzZFdVcElIdGNiaUFnZEdocGN5NWZiM0JsY21GMGFXOXVjeTV3ZFhOb0tIc2dkSGx3WlRvZ0ozQjFkQ2NzSUd0bGVUb2dhMlY1TENCMllXeDFaVG9nZG1Gc2RXVWdmU2xjYm4xY2JseHVRV0p6ZEhKaFkzUkRhR0ZwYm1Wa1FtRjBZMmd1Y0hKdmRHOTBlWEJsTG1SbGJDQTlJR1oxYm1OMGFXOXVJQ2hyWlhrcElIdGNiaUFnZEdocGN5NWZZMmhsWTJ0WGNtbDBkR1Z1S0NsY2JseHVJQ0IyWVhJZ1pYSnlJRDBnZEdocGN5NWZaR0l1WDJOb1pXTnJTMlY1S0d0bGVTd2dKMnRsZVNjcFhHNGdJR2xtSUNobGNuSXBJSHNnZEdoeWIzY2daWEp5SUgxY2JseHVJQ0JyWlhrZ1BTQjBhR2x6TGw5elpYSnBZV3hwZW1WTFpYa29hMlY1S1Z4dUlDQjBhR2x6TGw5a1pXd29hMlY1S1Z4dVhHNGdJSEpsZEhWeWJpQjBhR2x6WEc1OVhHNWNia0ZpYzNSeVlXTjBRMmhoYVc1bFpFSmhkR05vTG5CeWIzUnZkSGx3WlM1ZlpHVnNJRDBnWm5WdVkzUnBiMjRnS0d0bGVTa2dlMXh1SUNCMGFHbHpMbDl2Y0dWeVlYUnBiMjV6TG5CMWMyZ29leUIwZVhCbE9pQW5aR1ZzSnl3Z2EyVjVPaUJyWlhrZ2ZTbGNibjFjYmx4dVFXSnpkSEpoWTNSRGFHRnBibVZrUW1GMFkyZ3VjSEp2ZEc5MGVYQmxMbU5zWldGeUlEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQjBhR2x6TGw5amFHVmphMWR5YVhSMFpXNG9LVnh1SUNCMGFHbHpMbDl2Y0dWeVlYUnBiMjV6SUQwZ1cxMWNiaUFnZEdocGN5NWZZMnhsWVhJb0tWeHVYRzRnSUhKbGRIVnliaUIwYUdselhHNTlYRzVjYmtGaWMzUnlZV04wUTJoaGFXNWxaRUpoZEdOb0xuQnliM1J2ZEhsd1pTNWZZMnhsWVhJZ1BTQm1kVzVqZEdsdmJpQnViMjl3SUNncElIdDlYRzVjYmtGaWMzUnlZV04wUTJoaGFXNWxaRUpoZEdOb0xuQnliM1J2ZEhsd1pTNTNjbWwwWlNBOUlHWjFibU4wYVc5dUlDaHZjSFJwYjI1ekxDQmpZV3hzWW1GamF5a2dlMXh1SUNCMGFHbHpMbDlqYUdWamExZHlhWFIwWlc0b0tWeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ2IzQjBhVzl1Y3lBOVBUMGdKMloxYm1OMGFXOXVKeWtnZXlCallXeHNZbUZqYXlBOUlHOXdkR2x2Ym5NZ2ZWeHVJQ0JwWmlBb2RIbHdaVzltSUdOaGJHeGlZV05ySUNFOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZDNjbWwwWlNncElISmxjWFZwY21WeklHRWdZMkZzYkdKaFkyc2dZWEpuZFcxbGJuUW5LVnh1SUNCOVhHNGdJR2xtSUNoMGVYQmxiMllnYjNCMGFXOXVjeUFoUFQwZ0oyOWlhbVZqZENjcElIc2diM0IwYVc5dWN5QTlJSHQ5SUgxY2JseHVJQ0IwYUdsekxsOTNjbWwwZEdWdUlEMGdkSEoxWlZ4dVhHNGdJQzh2SUVCMGN5MXBaMjV2Y21WY2JpQWdhV1lnS0hSNWNHVnZaaUIwYUdsekxsOTNjbWwwWlNBOVBUMGdKMloxYm1OMGFXOXVKeWtnZXlCeVpYUjFjbTRnZEdocGN5NWZkM0pwZEdVb1kyRnNiR0poWTJzcElIMWNibHh1SUNCcFppQW9kSGx3Wlc5bUlIUm9hWE11WDJSaUxsOWlZWFJqYUNBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5a1lpNWZZbUYwWTJnb2RHaHBjeTVmYjNCbGNtRjBhVzl1Y3l3Z2IzQjBhVzl1Y3l3Z1kyRnNiR0poWTJzcFhHNGdJSDFjYmx4dUlDQndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOcktWeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVGaWMzUnlZV04wUTJoaGFXNWxaRUpoZEdOb1hHNGlMQ0l2S2lCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRjZ1VtOWtJRlpoWjJjc0lFMUpWQ0JNYVdObGJuTmxJQ292WEc1Y2JtWjFibU4wYVc5dUlFRmljM1J5WVdOMFNYUmxjbUYwYjNJZ0tHUmlLU0I3WEc0Z0lIUm9hWE11WkdJZ1BTQmtZbHh1SUNCMGFHbHpMbDlsYm1SbFpDQTlJR1poYkhObFhHNGdJSFJvYVhNdVgyNWxlSFJwYm1jZ1BTQm1ZV3h6WlZ4dWZWeHVYRzVCWW5OMGNtRmpkRWwwWlhKaGRHOXlMbkJ5YjNSdmRIbHdaUzV1WlhoMElEMGdablZ1WTNScGIyNGdLR05oYkd4aVlXTnJLU0I3WEc0Z0lIWmhjaUJ6Wld4bUlEMGdkR2hwYzF4dVhHNGdJR2xtSUNoMGVYQmxiMllnWTJGc2JHSmhZMnNnSVQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oyNWxlSFFvS1NCeVpYRjFhWEpsY3lCaElHTmhiR3hpWVdOcklHRnlaM1Z0Wlc1MEp5bGNiaUFnZlZ4dVhHNGdJR2xtSUNoelpXeG1MbDlsYm1SbFpDa2dlMXh1SUNBZ0lIQnliMk5sYzNNdWJtVjRkRlJwWTJzb1kyRnNiR0poWTJzc0lHNWxkeUJGY25KdmNpZ25ZMkZ1Ym05MElHTmhiR3dnYm1WNGRDZ3BJR0ZtZEdWeUlHVnVaQ2dwSnlrcFhHNGdJQ0FnY21WMGRYSnVJSE5sYkdaY2JpQWdmVnh1WEc0Z0lHbG1JQ2h6Wld4bUxsOXVaWGgwYVc1bktTQjdYRzRnSUNBZ2NISnZZMlZ6Y3k1dVpYaDBWR2xqYXloallXeHNZbUZqYXl3Z2JtVjNJRVZ5Y205eUtDZGpZVzV1YjNRZ1kyRnNiQ0J1WlhoMEtDa2dZbVZtYjNKbElIQnlaWFpwYjNWeklHNWxlSFFvS1NCb1lYTWdZMjl0Y0d4bGRHVmtKeWtwWEc0Z0lDQWdjbVYwZFhKdUlITmxiR1pjYmlBZ2ZWeHVYRzRnSUhObGJHWXVYMjVsZUhScGJtY2dQU0IwY25WbFhHNGdJSE5sYkdZdVgyNWxlSFFvWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhObGJHWXVYMjVsZUhScGJtY2dQU0JtWVd4elpWeHVJQ0FnSUdOaGJHeGlZV05yTG1Gd2NHeDVLRzUxYkd3c0lHRnlaM1Z0Wlc1MGN5bGNiaUFnZlNsY2JseHVJQ0J5WlhSMWNtNGdjMlZzWmx4dWZWeHVYRzVCWW5OMGNtRmpkRWwwWlhKaGRHOXlMbkJ5YjNSdmRIbHdaUzVmYm1WNGRDQTlJR1oxYm1OMGFXOXVJQ2hqWVd4c1ltRmpheWtnZTF4dUlDQndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOcktWeHVmVnh1WEc1QlluTjBjbUZqZEVsMFpYSmhkRzl5TG5CeWIzUnZkSGx3WlM1bGJtUWdQU0JtZFc1amRHbHZiaUFvWTJGc2JHSmhZMnNwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJqWVd4c1ltRmpheUFoUFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblpXNWtLQ2tnY21WeGRXbHlaWE1nWVNCallXeHNZbUZqYXlCaGNtZDFiV1Z1ZENjcFhHNGdJSDFjYmx4dUlDQnBaaUFvZEdocGN5NWZaVzVrWldRcElIdGNiaUFnSUNCeVpYUjFjbTRnY0hKdlkyVnpjeTV1WlhoMFZHbGpheWhqWVd4c1ltRmpheXdnYm1WM0lFVnljbTl5S0NkbGJtUW9LU0JoYkhKbFlXUjVJR05oYkd4bFpDQnZiaUJwZEdWeVlYUnZjaWNwS1Z4dUlDQjlYRzVjYmlBZ2RHaHBjeTVmWlc1a1pXUWdQU0IwY25WbFhHNGdJSFJvYVhNdVgyVnVaQ2hqWVd4c1ltRmpheWxjYm4xY2JseHVRV0p6ZEhKaFkzUkpkR1Z5WVhSdmNpNXdjbTkwYjNSNWNHVXVYMlZ1WkNBOUlHWjFibU4wYVc5dUlDaGpZV3hzWW1GamF5a2dlMXh1SUNCd2NtOWpaWE56TG01bGVIUlVhV05yS0dOaGJHeGlZV05yS1Z4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRUZpYzNSeVlXTjBTWFJsY21GMGIzSmNiaUlzSWk4cUlFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE55QlNiMlFnVm1Gblp5d2dUVWxVSUV4cFkyVnVjMlVnS2k5Y2JseHVkbUZ5SUhoMFpXNWtJRDBnY21WeGRXbHlaU2duZUhSbGJtUW5LVnh1ZG1GeUlFRmljM1J5WVdOMFNYUmxjbUYwYjNJZ1BTQnlaWEYxYVhKbEtDY3VMMkZpYzNSeVlXTjBMV2wwWlhKaGRHOXlKeWxjYm5aaGNpQkJZbk4wY21GamRFTm9ZV2x1WldSQ1lYUmphQ0E5SUhKbGNYVnBjbVVvSnk0dllXSnpkSEpoWTNRdFkyaGhhVzVsWkMxaVlYUmphQ2NwWEc1MllYSWdhR0Z6VDNkdVVISnZjR1Z5ZEhrZ1BTQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1WEc1MllYSWdjbUZ1WjJWUGNIUnBiMjV6SUQwZ0ozTjBZWEowSUdWdVpDQm5kQ0JuZEdVZ2JIUWdiSFJsSnk1emNHeHBkQ2duSUNjcFhHNWNibVoxYm1OMGFXOXVJRUZpYzNSeVlXTjBUR1YyWld4RVQxZE9JQ2hzYjJOaGRHbHZiaWtnZTF4dUlDQnBaaUFvSVdGeVozVnRaVzUwY3k1c1pXNW5kR2dnZkh3Z2JHOWpZWFJwYjI0Z1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ZMjl1YzNSeWRXTjBiM0lnY21WeGRXbHlaWE1nWVhRZ2JHVmhjM1FnWVNCc2IyTmhkR2x2YmlCaGNtZDFiV1Z1ZENjcFhHNGdJSDFjYmx4dUlDQnBaaUFvZEhsd1pXOW1JR3h2WTJGMGFXOXVJQ0U5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWTI5dWMzUnlkV04wYjNJZ2NtVnhkV2x5WlhNZ1lTQnNiMk5oZEdsdmJpQnpkSEpwYm1jZ1lYSm5kVzFsYm5RbktWeHVJQ0I5WEc1Y2JpQWdkR2hwY3k1c2IyTmhkR2x2YmlBOUlHeHZZMkYwYVc5dVhHNGdJSFJvYVhNdWMzUmhkSFZ6SUQwZ0oyNWxkeWRjYm4xY2JseHVRV0p6ZEhKaFkzUk1aWFpsYkVSUFYwNHVjSEp2ZEc5MGVYQmxMbTl3Wlc0Z1BTQm1kVzVqZEdsdmJpQW9iM0IwYVc5dWN5d2dZMkZzYkdKaFkyc3BJSHRjYmlBZ2RtRnlJSE5sYkdZZ1BTQjBhR2x6WEc0Z0lIWmhjaUJ2YkdSVGRHRjBkWE1nUFNCMGFHbHpMbk4wWVhSMWMxeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ2IzQjBhVzl1Y3lBOVBUMGdKMloxYm1OMGFXOXVKeWtnZXlCallXeHNZbUZqYXlBOUlHOXdkR2x2Ym5NZ2ZWeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ1kyRnNiR0poWTJzZ0lUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMjl3Wlc0b0tTQnlaWEYxYVhKbGN5QmhJR05oYkd4aVlXTnJJR0Z5WjNWdFpXNTBKeWxjYmlBZ2ZWeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ2IzQjBhVzl1Y3lBaFBUMGdKMjlpYW1WamRDY3BJSHNnYjNCMGFXOXVjeUE5SUh0OUlIMWNibHh1SUNCdmNIUnBiMjV6TG1OeVpXRjBaVWxtVFdsemMybHVaeUE5SUc5d2RHbHZibk11WTNKbFlYUmxTV1pOYVhOemFXNW5JQ0U5UFNCbVlXeHpaVnh1SUNCdmNIUnBiMjV6TG1WeWNtOXlTV1pGZUdsemRITWdQU0FoSVc5d2RHbHZibk11WlhKeWIzSkpaa1Y0YVhOMGMxeHVYRzRnSUhSb2FYTXVjM1JoZEhWeklEMGdKMjl3Wlc1cGJtY25YRzRnSUhSb2FYTXVYMjl3Wlc0b2IzQjBhVzl1Y3l3Z1puVnVZM1JwYjI0Z0tHVnljaWtnZTF4dUlDQWdJR2xtSUNobGNuSXBJSHRjYmlBZ0lDQWdJSE5sYkdZdWMzUmhkSFZ6SUQwZ2IyeGtVM1JoZEhWelhHNGdJQ0FnSUNCeVpYUjFjbTRnWTJGc2JHSmhZMnNvWlhKeUtWeHVJQ0FnSUgxY2JpQWdJQ0J6Wld4bUxuTjBZWFIxY3lBOUlDZHZjR1Z1SjF4dUlDQWdJR05oYkd4aVlXTnJLQ2xjYmlBZ2ZTbGNibjFjYmx4dVFXSnpkSEpoWTNSTVpYWmxiRVJQVjA0dWNISnZkRzkwZVhCbExsOXZjR1Z1SUQwZ1puVnVZM1JwYjI0Z0tHOXdkR2x2Ym5Nc0lHTmhiR3hpWVdOcktTQjdYRzRnSUhCeWIyTmxjM011Ym1WNGRGUnBZMnNvWTJGc2JHSmhZMnNwWEc1OVhHNWNia0ZpYzNSeVlXTjBUR1YyWld4RVQxZE9MbkJ5YjNSdmRIbHdaUzVqYkc5elpTQTlJR1oxYm1OMGFXOXVJQ2hqWVd4c1ltRmpheWtnZTF4dUlDQjJZWElnYzJWc1ppQTlJSFJvYVhOY2JpQWdkbUZ5SUc5c1pGTjBZWFIxY3lBOUlIUm9hWE11YzNSaGRIVnpYRzVjYmlBZ2FXWWdLSFI1Y0dWdlppQmpZV3hzWW1GamF5QWhQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWTJ4dmMyVW9LU0J5WlhGMWFYSmxjeUJoSUdOaGJHeGlZV05ySUdGeVozVnRaVzUwSnlsY2JpQWdmVnh1WEc0Z0lIUm9hWE11YzNSaGRIVnpJRDBnSjJOc2IzTnBibWNuWEc0Z0lIUm9hWE11WDJOc2IzTmxLR1oxYm1OMGFXOXVJQ2hsY25JcElIdGNiaUFnSUNCcFppQW9aWEp5S1NCN1hHNGdJQ0FnSUNCelpXeG1Mbk4wWVhSMWN5QTlJRzlzWkZOMFlYUjFjMXh1SUNBZ0lDQWdjbVYwZFhKdUlHTmhiR3hpWVdOcktHVnljaWxjYmlBZ0lDQjlYRzRnSUNBZ2MyVnNaaTV6ZEdGMGRYTWdQU0FuWTJ4dmMyVmtKMXh1SUNBZ0lHTmhiR3hpWVdOcktDbGNiaUFnZlNsY2JuMWNibHh1UVdKemRISmhZM1JNWlhabGJFUlBWMDR1Y0hKdmRHOTBlWEJsTGw5amJHOXpaU0E5SUdaMWJtTjBhVzl1SUNoallXeHNZbUZqYXlrZ2UxeHVJQ0J3Y205alpYTnpMbTVsZUhSVWFXTnJLR05oYkd4aVlXTnJLVnh1ZlZ4dVhHNUJZbk4wY21GamRFeGxkbVZzUkU5WFRpNXdjbTkwYjNSNWNHVXVaMlYwSUQwZ1puVnVZM1JwYjI0Z0tHdGxlU3dnYjNCMGFXOXVjeXdnWTJGc2JHSmhZMnNwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ2Y0hScGIyNXpJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdJR05oYkd4aVlXTnJJRDBnYjNCMGFXOXVjeUI5WEc1Y2JpQWdhV1lnS0hSNWNHVnZaaUJqWVd4c1ltRmpheUFoUFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnbloyVjBLQ2tnY21WeGRXbHlaWE1nWVNCallXeHNZbUZqYXlCaGNtZDFiV1Z1ZENjcFhHNGdJSDFjYmx4dUlDQjJZWElnWlhKeUlEMGdkR2hwY3k1ZlkyaGxZMnRMWlhrb2EyVjVMQ0FuYTJWNUp5bGNiaUFnYVdZZ0tHVnljaWtnY21WMGRYSnVJSEJ5YjJObGMzTXVibVY0ZEZScFkyc29ZMkZzYkdKaFkyc3NJR1Z5Y2lsY2JseHVJQ0JyWlhrZ1BTQjBhR2x6TGw5elpYSnBZV3hwZW1WTFpYa29hMlY1S1Z4dVhHNGdJR2xtSUNoMGVYQmxiMllnYjNCMGFXOXVjeUFoUFQwZ0oyOWlhbVZqZENjcElIc2diM0IwYVc5dWN5QTlJSHQ5SUgxY2JseHVJQ0J2Y0hScGIyNXpMbUZ6UW5WbVptVnlJRDBnYjNCMGFXOXVjeTVoYzBKMVptWmxjaUFoUFQwZ1ptRnNjMlZjYmx4dUlDQjBhR2x6TGw5blpYUW9hMlY1TENCdmNIUnBiMjV6TENCallXeHNZbUZqYXlsY2JuMWNibHh1UVdKemRISmhZM1JNWlhabGJFUlBWMDR1Y0hKdmRHOTBlWEJsTGw5blpYUWdQU0JtZFc1amRHbHZiaUFvYTJWNUxDQnZjSFJwYjI1ekxDQmpZV3hzWW1GamF5a2dlMXh1SUNCd2NtOWpaWE56TG01bGVIUlVhV05yS0daMWJtTjBhVzl1SUNncElIc2dZMkZzYkdKaFkyc29ibVYzSUVWeWNtOXlLQ2RPYjNSR2IzVnVaQ2NwS1NCOUtWeHVmVnh1WEc1QlluTjBjbUZqZEV4bGRtVnNSRTlYVGk1d2NtOTBiM1I1Y0dVdWNIVjBJRDBnWm5WdVkzUnBiMjRnS0d0bGVTd2dkbUZzZFdVc0lHOXdkR2x2Ym5Nc0lHTmhiR3hpWVdOcktTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ2IzQjBhVzl1Y3lBOVBUMGdKMloxYm1OMGFXOXVKeWtnZXlCallXeHNZbUZqYXlBOUlHOXdkR2x2Ym5NZ2ZWeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ1kyRnNiR0poWTJzZ0lUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0IxZENncElISmxjWFZwY21WeklHRWdZMkZzYkdKaFkyc2dZWEpuZFcxbGJuUW5LVnh1SUNCOVhHNWNiaUFnZG1GeUlHVnljaUE5SUhSb2FYTXVYMk5vWldOclMyVjVLR3RsZVN3Z0oydGxlU2NwWEc0Z0lHbG1JQ2hsY25JcElISmxkSFZ5YmlCd2NtOWpaWE56TG01bGVIUlVhV05yS0dOaGJHeGlZV05yTENCbGNuSXBYRzVjYmlBZ2EyVjVJRDBnZEdocGN5NWZjMlZ5YVdGc2FYcGxTMlY1S0d0bGVTbGNiaUFnZG1Gc2RXVWdQU0IwYUdsekxsOXpaWEpwWVd4cGVtVldZV3gxWlNoMllXeDFaU2xjYmx4dUlDQnBaaUFvZEhsd1pXOW1JRzl3ZEdsdmJuTWdJVDA5SUNkdlltcGxZM1FuS1NCN0lHOXdkR2x2Ym5NZ1BTQjdmU0I5WEc1Y2JpQWdkR2hwY3k1ZmNIVjBLR3RsZVN3Z2RtRnNkV1VzSUc5d2RHbHZibk1zSUdOaGJHeGlZV05yS1Z4dWZWeHVYRzVCWW5OMGNtRmpkRXhsZG1Wc1JFOVhUaTV3Y205MGIzUjVjR1V1WDNCMWRDQTlJR1oxYm1OMGFXOXVJQ2hyWlhrc0lIWmhiSFZsTENCdmNIUnBiMjV6TENCallXeHNZbUZqYXlrZ2UxeHVJQ0J3Y205alpYTnpMbTVsZUhSVWFXTnJLR05oYkd4aVlXTnJLVnh1ZlZ4dVhHNUJZbk4wY21GamRFeGxkbVZzUkU5WFRpNXdjbTkwYjNSNWNHVXVaR1ZzSUQwZ1puVnVZM1JwYjI0Z0tHdGxlU3dnYjNCMGFXOXVjeXdnWTJGc2JHSmhZMnNwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ2Y0hScGIyNXpJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdJR05oYkd4aVlXTnJJRDBnYjNCMGFXOXVjeUI5WEc1Y2JpQWdhV1lnS0hSNWNHVnZaaUJqWVd4c1ltRmpheUFoUFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblpHVnNLQ2tnY21WeGRXbHlaWE1nWVNCallXeHNZbUZqYXlCaGNtZDFiV1Z1ZENjcFhHNGdJSDFjYmx4dUlDQjJZWElnWlhKeUlEMGdkR2hwY3k1ZlkyaGxZMnRMWlhrb2EyVjVMQ0FuYTJWNUp5bGNiaUFnYVdZZ0tHVnljaWtnY21WMGRYSnVJSEJ5YjJObGMzTXVibVY0ZEZScFkyc29ZMkZzYkdKaFkyc3NJR1Z5Y2lsY2JseHVJQ0JyWlhrZ1BTQjBhR2x6TGw5elpYSnBZV3hwZW1WTFpYa29hMlY1S1Z4dVhHNGdJR2xtSUNoMGVYQmxiMllnYjNCMGFXOXVjeUFoUFQwZ0oyOWlhbVZqZENjcElIc2diM0IwYVc5dWN5QTlJSHQ5SUgxY2JseHVJQ0IwYUdsekxsOWtaV3dvYTJWNUxDQnZjSFJwYjI1ekxDQmpZV3hzWW1GamF5bGNibjFjYmx4dVFXSnpkSEpoWTNSTVpYWmxiRVJQVjA0dWNISnZkRzkwZVhCbExsOWtaV3dnUFNCbWRXNWpkR2x2YmlBb2EyVjVMQ0J2Y0hScGIyNXpMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQndjbTlqWlhOekxtNWxlSFJVYVdOcktHTmhiR3hpWVdOcktWeHVmVnh1WEc1QlluTjBjbUZqZEV4bGRtVnNSRTlYVGk1d2NtOTBiM1I1Y0dVdVltRjBZMmdnUFNCbWRXNWpkR2x2YmlBb1lYSnlZWGtzSUc5d2RHbHZibk1zSUdOaGJHeGlZV05yS1NCN1hHNGdJR2xtSUNnaFlYSm5kVzFsYm5SekxteGxibWQwYUNrZ2V5QnlaWFIxY200Z2RHaHBjeTVmWTJoaGFXNWxaRUpoZEdOb0tDa2dmVnh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5QTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2V5QmpZV3hzWW1GamF5QTlJRzl3ZEdsdmJuTWdmVnh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdZWEp5WVhrZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUhzZ1kyRnNiR0poWTJzZ1BTQmhjbkpoZVNCOVhHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCallXeHNZbUZqYXlBaFBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ZbUYwWTJnb1lYSnlZWGtwSUhKbGNYVnBjbVZ6SUdFZ1kyRnNiR0poWTJzZ1lYSm5kVzFsYm5RbktWeHVJQ0I5WEc1Y2JpQWdhV1lnS0NGQmNuSmhlUzVwYzBGeWNtRjVLR0Z5Y21GNUtTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCd2NtOWpaWE56TG01bGVIUlVhV05yS0dOaGJHeGlZV05yTENCdVpYY2dSWEp5YjNJb0oySmhkR05vS0dGeWNtRjVLU0J5WlhGMWFYSmxjeUJoYmlCaGNuSmhlU0JoY21kMWJXVnVkQ2NwS1Z4dUlDQjlYRzVjYmlBZ2FXWWdLQ0Z2Y0hScGIyNXpJSHg4SUhSNWNHVnZaaUJ2Y0hScGIyNXpJQ0U5UFNBbmIySnFaV04wSnlrZ2V5QnZjSFJwYjI1eklEMGdlMzBnZlZ4dVhHNGdJSFpoY2lCelpYSnBZV3hwZW1Wa0lEMGdibVYzSUVGeWNtRjVLR0Z5Y21GNUxteGxibWQwYUNsY2JseHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUdGeWNtRjVMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCaGNuSmhlVnRwWFNBaFBUMGdKMjlpYW1WamRDY2dmSHdnWVhKeVlYbGJhVjBnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ3Y205alpYTnpMbTVsZUhSVWFXTnJLR05oYkd4aVlXTnJMQ0J1WlhjZ1JYSnliM0lvSjJKaGRHTm9LR0Z5Y21GNUtTQmxiR1Z0Wlc1MElHMTFjM1FnWW1VZ1lXNGdiMkpxWldOMElHRnVaQ0J1YjNRZ1lHNTFiR3hnSnlrcFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZG1GeUlHVWdQU0I0ZEdWdVpDaGhjbkpoZVZ0cFhTbGNibHh1SUNBZ0lHbG1JQ2hsTG5SNWNHVWdJVDA5SUNkd2RYUW5JQ1ltSUdVdWRIbHdaU0FoUFQwZ0oyUmxiQ2NwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ3Y205alpYTnpMbTVsZUhSVWFXTnJLR05oYkd4aVlXTnJMQ0J1WlhjZ1JYSnliM0lvWENKZ2RIbHdaV0FnYlhWemRDQmlaU0FuY0hWMEp5QnZjaUFuWkdWc0oxd2lLU2xjYmlBZ0lDQjlYRzVjYmlBZ0lDQjJZWElnWlhKeUlEMGdkR2hwY3k1ZlkyaGxZMnRMWlhrb1pTNXJaWGtzSUNkclpYa25LVnh1SUNBZ0lHbG1JQ2hsY25JcElISmxkSFZ5YmlCd2NtOWpaWE56TG01bGVIUlVhV05yS0dOaGJHeGlZV05yTENCbGNuSXBYRzVjYmlBZ0lDQmxMbXRsZVNBOUlIUm9hWE11WDNObGNtbGhiR2w2WlV0bGVTaGxMbXRsZVNsY2JseHVJQ0FnSUdsbUlDaGxMblI1Y0dVZ1BUMDlJQ2R3ZFhRbktTQjdJR1V1ZG1Gc2RXVWdQU0IwYUdsekxsOXpaWEpwWVd4cGVtVldZV3gxWlNobExuWmhiSFZsS1NCOVhHNWNiaUFnSUNCelpYSnBZV3hwZW1Wa1cybGRJRDBnWlZ4dUlDQjlYRzVjYmlBZ2RHaHBjeTVmWW1GMFkyZ29jMlZ5YVdGc2FYcGxaQ3dnYjNCMGFXOXVjeXdnWTJGc2JHSmhZMnNwWEc1OVhHNWNia0ZpYzNSeVlXTjBUR1YyWld4RVQxZE9MbkJ5YjNSdmRIbHdaUzVmWW1GMFkyZ2dQU0JtZFc1amRHbHZiaUFvWVhKeVlYa3NJRzl3ZEdsdmJuTXNJR05oYkd4aVlXTnJLU0I3WEc0Z0lIQnliMk5sYzNNdWJtVjRkRlJwWTJzb1kyRnNiR0poWTJzcFhHNTlYRzVjYmtGaWMzUnlZV04wVEdWMlpXeEVUMWRPTG5CeWIzUnZkSGx3WlM1ZmMyVjBkWEJKZEdWeVlYUnZjazl3ZEdsdmJuTWdQU0JtZFc1amRHbHZiaUFvYjNCMGFXOXVjeWtnZTF4dUlDQnZjSFJwYjI1eklEMGdZMnhsWVc1U1lXNW5aVTl3ZEdsdmJuTW9iM0IwYVc5dWN5bGNibHh1SUNCdmNIUnBiMjV6TG5KbGRtVnljMlVnUFNBaElXOXdkR2x2Ym5NdWNtVjJaWEp6WlZ4dUlDQnZjSFJwYjI1ekxtdGxlWE1nUFNCdmNIUnBiMjV6TG10bGVYTWdJVDA5SUdaaGJITmxYRzRnSUc5d2RHbHZibk11ZG1Gc2RXVnpJRDBnYjNCMGFXOXVjeTUyWVd4MVpYTWdJVDA5SUdaaGJITmxYRzRnSUc5d2RHbHZibk11YkdsdGFYUWdQU0FuYkdsdGFYUW5JR2x1SUc5d2RHbHZibk1nUHlCdmNIUnBiMjV6TG14cGJXbDBJRG9nTFRGY2JpQWdiM0IwYVc5dWN5NXJaWGxCYzBKMVptWmxjaUE5SUc5d2RHbHZibk11YTJWNVFYTkNkV1ptWlhJZ0lUMDlJR1poYkhObFhHNGdJRzl3ZEdsdmJuTXVkbUZzZFdWQmMwSjFabVpsY2lBOUlHOXdkR2x2Ym5NdWRtRnNkV1ZCYzBKMVptWmxjaUFoUFQwZ1ptRnNjMlZjYmx4dUlDQnlaWFIxY200Z2IzQjBhVzl1YzF4dWZWeHVYRzVtZFc1amRHbHZiaUJqYkdWaGJsSmhibWRsVDNCMGFXOXVjeUFvYjNCMGFXOXVjeWtnZTF4dUlDQjJZWElnY21WemRXeDBJRDBnZTMxY2JseHVJQ0JtYjNJZ0tIWmhjaUJySUdsdUlHOXdkR2x2Ym5NcElIdGNiaUFnSUNCcFppQW9JV2hoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvYjNCMGFXOXVjeXdnYXlrcElHTnZiblJwYm5WbFhHNGdJQ0FnYVdZZ0tHbHpVbUZ1WjJWUGNIUnBiMjRvYXlrZ0ppWWdhWE5GYlhCMGVWSmhibWRsVDNCMGFXOXVLRzl3ZEdsdmJuTmJhMTBwS1NCamIyNTBhVzUxWlZ4dVhHNGdJQ0FnY21WemRXeDBXMnRkSUQwZ2IzQjBhVzl1YzF0clhWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlISmxjM1ZzZEZ4dWZWeHVYRzVtZFc1amRHbHZiaUJwYzFKaGJtZGxUM0IwYVc5dUlDaHJLU0I3WEc0Z0lISmxkSFZ5YmlCeVlXNW5aVTl3ZEdsdmJuTXVhVzVrWlhoUFppaHJLU0FoUFQwZ0xURmNibjFjYmx4dVpuVnVZM1JwYjI0Z2FYTkZiWEIwZVZKaGJtZGxUM0IwYVc5dUlDaDJLU0I3WEc0Z0lISmxkSFZ5YmlCMklEMDlQU0FuSnlCOGZDQjJJRDA5SUc1MWJHd2dmSHdnYVhORmJYQjBlVUoxWm1abGNpaDJLVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnBjMFZ0Y0hSNVFuVm1abVZ5SUNoMktTQjdYRzRnSUhKbGRIVnliaUJDZFdabVpYSXVhWE5DZFdabVpYSW9kaWtnSmlZZ2RpNXNaVzVuZEdnZ1BUMDlJREJjYm4xY2JseHVRV0p6ZEhKaFkzUk1aWFpsYkVSUFYwNHVjSEp2ZEc5MGVYQmxMbWwwWlhKaGRHOXlJRDBnWm5WdVkzUnBiMjRnS0c5d2RHbHZibk1wSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUJ2Y0hScGIyNXpJQ0U5UFNBbmIySnFaV04wSnlrZ2V5QnZjSFJwYjI1eklEMGdlMzBnZlZ4dUlDQnZjSFJwYjI1eklEMGdkR2hwY3k1ZmMyVjBkWEJKZEdWeVlYUnZjazl3ZEdsdmJuTW9iM0IwYVc5dWN5bGNiaUFnY21WMGRYSnVJSFJvYVhNdVgybDBaWEpoZEc5eUtHOXdkR2x2Ym5NcFhHNTlYRzVjYmtGaWMzUnlZV04wVEdWMlpXeEVUMWRPTG5CeWIzUnZkSGx3WlM1ZmFYUmxjbUYwYjNJZ1BTQm1kVzVqZEdsdmJpQW9iM0IwYVc5dWN5a2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lFRmljM1J5WVdOMFNYUmxjbUYwYjNJb2RHaHBjeWxjYm4xY2JseHVRV0p6ZEhKaFkzUk1aWFpsYkVSUFYwNHVjSEp2ZEc5MGVYQmxMbDlqYUdGcGJtVmtRbUYwWTJnZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lISmxkSFZ5YmlCdVpYY2dRV0p6ZEhKaFkzUkRhR0ZwYm1Wa1FtRjBZMmdvZEdocGN5bGNibjFjYmx4dVFXSnpkSEpoWTNSTVpYWmxiRVJQVjA0dWNISnZkRzkwZVhCbExsOXpaWEpwWVd4cGVtVkxaWGtnUFNCbWRXNWpkR2x2YmlBb2EyVjVLU0I3WEc0Z0lISmxkSFZ5YmlCQ2RXWm1aWEl1YVhOQ2RXWm1aWElvYTJWNUtTQS9JR3RsZVNBNklGTjBjbWx1WnloclpYa3BYRzU5WEc1Y2JrRmljM1J5WVdOMFRHVjJaV3hFVDFkT0xuQnliM1J2ZEhsd1pTNWZjMlZ5YVdGc2FYcGxWbUZzZFdVZ1BTQm1kVzVqZEdsdmJpQW9kbUZzZFdVcElIdGNiaUFnYVdZZ0tIWmhiSFZsSUQwOUlHNTFiR3dwSUhKbGRIVnliaUFuSjF4dUlDQnlaWFIxY200Z1FuVm1abVZ5TG1selFuVm1abVZ5S0haaGJIVmxLU0I4ZkNCd2NtOWpaWE56TG1KeWIzZHpaWElnUHlCMllXeDFaU0E2SUZOMGNtbHVaeWgyWVd4MVpTbGNibjFjYmx4dVFXSnpkSEpoWTNSTVpYWmxiRVJQVjA0dWNISnZkRzkwZVhCbExsOWphR1ZqYTB0bGVTQTlJR1oxYm1OMGFXOXVJQ2h2WW1vc0lIUjVjR1VwSUh0Y2JpQWdhV1lnS0c5aWFpQTlQVDBnYm5Wc2JDQjhmQ0J2WW1vZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQnVaWGNnUlhKeWIzSW9kSGx3WlNBcklDY2dZMkZ1Ym05MElHSmxJR0J1ZFd4c1lDQnZjaUJnZFc1a1pXWnBibVZrWUNjcFhHNGdJSDFjYmx4dUlDQnBaaUFvUW5WbVptVnlMbWx6UW5WbVptVnlLRzlpYWlrZ0ppWWdiMkpxTG14bGJtZDBhQ0E5UFQwZ01Da2dlMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dSWEp5YjNJb2RIbHdaU0FySUNjZ1kyRnVibTkwSUdKbElHRnVJR1Z0Y0hSNUlFSjFabVpsY2ljcFhHNGdJSDFjYmx4dUlDQnBaaUFvVTNSeWFXNW5LRzlpYWlrZ1BUMDlJQ2NuS1NCN1hHNGdJQ0FnY21WMGRYSnVJRzVsZHlCRmNuSnZjaWgwZVhCbElDc2dKeUJqWVc1dWIzUWdZbVVnWVc0Z1pXMXdkSGtnVTNSeWFXNW5KeWxjYmlBZ2ZWeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVGaWMzUnlZV04wVEdWMlpXeEVUMWRPWEc0aUxDSmxlSEJ2Y25SekxrRmljM1J5WVdOMFRHVjJaV3hFVDFkT0lEMGdjbVZ4ZFdseVpTZ25MaTloWW5OMGNtRmpkQzFzWlhabGJHUnZkMjRuS1Z4dVpYaHdiM0owY3k1QlluTjBjbUZqZEVsMFpYSmhkRzl5SUQwZ2NtVnhkV2x5WlNnbkxpOWhZbk4wY21GamRDMXBkR1Z5WVhSdmNpY3BYRzVsZUhCdmNuUnpMa0ZpYzNSeVlXTjBRMmhoYVc1bFpFSmhkR05vSUQwZ2NtVnhkV2x5WlNnbkxpOWhZbk4wY21GamRDMWphR0ZwYm1Wa0xXSmhkR05vSnlsY2JpSXNJaWQxYzJVZ2MzUnlhV04wSjF4dVhHNWxlSEJ2Y25SekxtSjVkR1ZNWlc1bmRHZ2dQU0JpZVhSbFRHVnVaM1JvWEc1bGVIQnZjblJ6TG5SdlFubDBaVUZ5Y21GNUlEMGdkRzlDZVhSbFFYSnlZWGxjYm1WNGNHOXlkSE11Wm5KdmJVSjVkR1ZCY25KaGVTQTlJR1p5YjIxQ2VYUmxRWEp5WVhsY2JseHVkbUZ5SUd4dmIydDFjQ0E5SUZ0ZFhHNTJZWElnY21WMlRHOXZhM1Z3SUQwZ1cxMWNiblpoY2lCQmNuSWdQU0IwZVhCbGIyWWdWV2x1ZERoQmNuSmhlU0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dQeUJWYVc1ME9FRnljbUY1SURvZ1FYSnlZWGxjYmx4dWRtRnlJR052WkdVZ1BTQW5RVUpEUkVWR1IwaEpTa3RNVFU1UFVGRlNVMVJWVmxkWVdWcGhZbU5rWldabmFHbHFhMnh0Ym05d2NYSnpkSFYyZDNoNWVqQXhNak0wTlRZM09Ea3JMeWRjYm1admNpQW9kbUZ5SUdrZ1BTQXdMQ0JzWlc0Z1BTQmpiMlJsTG14bGJtZDBhRHNnYVNBOElHeGxianNnS3l0cEtTQjdYRzRnSUd4dmIydDFjRnRwWFNBOUlHTnZaR1ZiYVYxY2JpQWdjbVYyVEc5dmEzVndXMk52WkdVdVkyaGhja052WkdWQmRDaHBLVjBnUFNCcFhHNTlYRzVjYmk4dklGTjFjSEJ2Y25RZ1pHVmpiMlJwYm1jZ1ZWSk1MWE5oWm1VZ1ltRnpaVFkwSUhOMGNtbHVaM01zSUdGeklFNXZaR1V1YW5NZ1pHOWxjeTVjYmk4dklGTmxaVG9nYUhSMGNITTZMeTlsYmk1M2FXdHBjR1ZrYVdFdWIzSm5MM2RwYTJrdlFtRnpaVFkwSTFWU1RGOWhjSEJzYVdOaGRHbHZibk5jYm5KbGRreHZiMnQxY0ZzbkxTY3VZMmhoY2tOdlpHVkJkQ2d3S1YwZ1BTQTJNbHh1Y21WMlRHOXZhM1Z3V3lkZkp5NWphR0Z5UTI5a1pVRjBLREFwWFNBOUlEWXpYRzVjYm1aMWJtTjBhVzl1SUdkbGRFeGxibk1nS0dJMk5Da2dlMXh1SUNCMllYSWdiR1Z1SUQwZ1lqWTBMbXhsYm1kMGFGeHVYRzRnSUdsbUlDaHNaVzRnSlNBMElENGdNQ2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25TVzUyWVd4cFpDQnpkSEpwYm1jdUlFeGxibWQwYUNCdGRYTjBJR0psSUdFZ2JYVnNkR2x3YkdVZ2IyWWdOQ2NwWEc0Z0lIMWNibHh1SUNBdkx5QlVjbWx0SUc5bVppQmxlSFJ5WVNCaWVYUmxjeUJoWm5SbGNpQndiR0ZqWldodmJHUmxjaUJpZVhSbGN5QmhjbVVnWm05MWJtUmNiaUFnTHk4Z1UyVmxPaUJvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WW1WaGRHZGhiVzFwZEM5aVlYTmxOalF0YW5NdmFYTnpkV1Z6THpReVhHNGdJSFpoY2lCMllXeHBaRXhsYmlBOUlHSTJOQzVwYm1SbGVFOW1LQ2M5SnlsY2JpQWdhV1lnS0haaGJHbGtUR1Z1SUQwOVBTQXRNU2tnZG1Gc2FXUk1aVzRnUFNCc1pXNWNibHh1SUNCMllYSWdjR3hoWTJWSWIyeGtaWEp6VEdWdUlEMGdkbUZzYVdSTVpXNGdQVDA5SUd4bGJseHVJQ0FnSUQ4Z01GeHVJQ0FnSURvZ05DQXRJQ2gyWVd4cFpFeGxiaUFsSURRcFhHNWNiaUFnY21WMGRYSnVJRnQyWVd4cFpFeGxiaXdnY0d4aFkyVkliMnhrWlhKelRHVnVYVnh1ZlZ4dVhHNHZMeUJpWVhObE5qUWdhWE1nTkM4eklDc2dkWEFnZEc4Z2RIZHZJR05vWVhKaFkzUmxjbk1nYjJZZ2RHaGxJRzl5YVdkcGJtRnNJR1JoZEdGY2JtWjFibU4wYVc5dUlHSjVkR1ZNWlc1bmRHZ2dLR0kyTkNrZ2UxeHVJQ0IyWVhJZ2JHVnVjeUE5SUdkbGRFeGxibk1vWWpZMEtWeHVJQ0IyWVhJZ2RtRnNhV1JNWlc0Z1BTQnNaVzV6V3pCZFhHNGdJSFpoY2lCd2JHRmpaVWh2YkdSbGNuTk1aVzRnUFNCc1pXNXpXekZkWEc0Z0lISmxkSFZ5YmlBb0tIWmhiR2xrVEdWdUlDc2djR3hoWTJWSWIyeGtaWEp6VEdWdUtTQXFJRE1nTHlBMEtTQXRJSEJzWVdObFNHOXNaR1Z5YzB4bGJseHVmVnh1WEc1bWRXNWpkR2x2YmlCZllubDBaVXhsYm1kMGFDQW9ZalkwTENCMllXeHBaRXhsYml3Z2NHeGhZMlZJYjJ4a1pYSnpUR1Z1S1NCN1hHNGdJSEpsZEhWeWJpQW9LSFpoYkdsa1RHVnVJQ3NnY0d4aFkyVkliMnhrWlhKelRHVnVLU0FxSURNZ0x5QTBLU0F0SUhCc1lXTmxTRzlzWkdWeWMweGxibHh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjBiMEo1ZEdWQmNuSmhlU0FvWWpZMEtTQjdYRzRnSUhaaGNpQjBiWEJjYmlBZ2RtRnlJR3hsYm5NZ1BTQm5aWFJNWlc1ektHSTJOQ2xjYmlBZ2RtRnlJSFpoYkdsa1RHVnVJRDBnYkdWdWMxc3dYVnh1SUNCMllYSWdjR3hoWTJWSWIyeGtaWEp6VEdWdUlEMGdiR1Z1YzFzeFhWeHVYRzRnSUhaaGNpQmhjbklnUFNCdVpYY2dRWEp5S0Y5aWVYUmxUR1Z1WjNSb0tHSTJOQ3dnZG1Gc2FXUk1aVzRzSUhCc1lXTmxTRzlzWkdWeWMweGxiaWtwWEc1Y2JpQWdkbUZ5SUdOMWNrSjVkR1VnUFNBd1hHNWNiaUFnTHk4Z2FXWWdkR2hsY21VZ1lYSmxJSEJzWVdObGFHOXNaR1Z5Y3l3Z2IyNXNlU0JuWlhRZ2RYQWdkRzhnZEdobElHeGhjM1FnWTI5dGNHeGxkR1VnTkNCamFHRnljMXh1SUNCMllYSWdiR1Z1SUQwZ2NHeGhZMlZJYjJ4a1pYSnpUR1Z1SUQ0Z01GeHVJQ0FnSUQ4Z2RtRnNhV1JNWlc0Z0xTQTBYRzRnSUNBZ09pQjJZV3hwWkV4bGJseHVYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2JHVnVPeUJwSUNzOUlEUXBJSHRjYmlBZ0lDQjBiWEFnUFZ4dUlDQWdJQ0FnS0hKbGRreHZiMnQxY0Z0aU5qUXVZMmhoY2tOdlpHVkJkQ2hwS1YwZ1BEd2dNVGdwSUh4Y2JpQWdJQ0FnSUNoeVpYWk1iMjlyZFhCYllqWTBMbU5vWVhKRGIyUmxRWFFvYVNBcklERXBYU0E4UENBeE1pa2dmRnh1SUNBZ0lDQWdLSEpsZGt4dmIydDFjRnRpTmpRdVkyaGhja052WkdWQmRDaHBJQ3NnTWlsZElEdzhJRFlwSUh4Y2JpQWdJQ0FnSUhKbGRreHZiMnQxY0Z0aU5qUXVZMmhoY2tOdlpHVkJkQ2hwSUNzZ015bGRYRzRnSUNBZ1lYSnlXMk4xY2tKNWRHVXJLMTBnUFNBb2RHMXdJRDQrSURFMktTQW1JREI0UmtaY2JpQWdJQ0JoY25KYlkzVnlRbmwwWlNzclhTQTlJQ2gwYlhBZ1BqNGdPQ2tnSmlBd2VFWkdYRzRnSUNBZ1lYSnlXMk4xY2tKNWRHVXJLMTBnUFNCMGJYQWdKaUF3ZUVaR1hHNGdJSDFjYmx4dUlDQnBaaUFvY0d4aFkyVkliMnhrWlhKelRHVnVJRDA5UFNBeUtTQjdYRzRnSUNBZ2RHMXdJRDFjYmlBZ0lDQWdJQ2h5WlhaTWIyOXJkWEJiWWpZMExtTm9ZWEpEYjJSbFFYUW9hU2xkSUR3OElESXBJSHhjYmlBZ0lDQWdJQ2h5WlhaTWIyOXJkWEJiWWpZMExtTm9ZWEpEYjJSbFFYUW9hU0FySURFcFhTQStQaUEwS1Z4dUlDQWdJR0Z5Y2x0amRYSkNlWFJsS3l0ZElEMGdkRzF3SUNZZ01IaEdSbHh1SUNCOVhHNWNiaUFnYVdZZ0tIQnNZV05sU0c5c1pHVnljMHhsYmlBOVBUMGdNU2tnZTF4dUlDQWdJSFJ0Y0NBOVhHNGdJQ0FnSUNBb2NtVjJURzl2YTNWd1cySTJOQzVqYUdGeVEyOWtaVUYwS0drcFhTQThQQ0F4TUNrZ2ZGeHVJQ0FnSUNBZ0tISmxka3h2YjJ0MWNGdGlOalF1WTJoaGNrTnZaR1ZCZENocElDc2dNU2xkSUR3OElEUXBJSHhjYmlBZ0lDQWdJQ2h5WlhaTWIyOXJkWEJiWWpZMExtTm9ZWEpEYjJSbFFYUW9hU0FySURJcFhTQStQaUF5S1Z4dUlDQWdJR0Z5Y2x0amRYSkNlWFJsS3l0ZElEMGdLSFJ0Y0NBK1BpQTRLU0FtSURCNFJrWmNiaUFnSUNCaGNuSmJZM1Z5UW5sMFpTc3JYU0E5SUhSdGNDQW1JREI0UmtaY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCaGNuSmNibjFjYmx4dVpuVnVZM1JwYjI0Z2RISnBjR3hsZEZSdlFtRnpaVFkwSUNodWRXMHBJSHRjYmlBZ2NtVjBkWEp1SUd4dmIydDFjRnR1ZFcwZ1BqNGdNVGdnSmlBd2VETkdYU0FyWEc0Z0lDQWdiRzl2YTNWd1cyNTFiU0ErUGlBeE1pQW1JREI0TTBaZElDdGNiaUFnSUNCc2IyOXJkWEJiYm5WdElENCtJRFlnSmlBd2VETkdYU0FyWEc0Z0lDQWdiRzl2YTNWd1cyNTFiU0FtSURCNE0wWmRYRzU5WEc1Y2JtWjFibU4wYVc5dUlHVnVZMjlrWlVOb2RXNXJJQ2gxYVc1ME9Dd2djM1JoY25Rc0lHVnVaQ2tnZTF4dUlDQjJZWElnZEcxd1hHNGdJSFpoY2lCdmRYUndkWFFnUFNCYlhWeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ2MzUmhjblE3SUdrZ1BDQmxibVE3SUdrZ0t6MGdNeWtnZTF4dUlDQWdJSFJ0Y0NBOVhHNGdJQ0FnSUNBb0tIVnBiblE0VzJsZElEdzhJREUyS1NBbUlEQjRSa1l3TURBd0tTQXJYRzRnSUNBZ0lDQW9LSFZwYm5RNFcya2dLeUF4WFNBOFBDQTRLU0FtSURCNFJrWXdNQ2tnSzF4dUlDQWdJQ0FnS0hWcGJuUTRXMmtnS3lBeVhTQW1JREI0UmtZcFhHNGdJQ0FnYjNWMGNIVjBMbkIxYzJnb2RISnBjR3hsZEZSdlFtRnpaVFkwS0hSdGNDa3BYRzRnSUgxY2JpQWdjbVYwZFhKdUlHOTFkSEIxZEM1cWIybHVLQ2NuS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJtY205dFFubDBaVUZ5Y21GNUlDaDFhVzUwT0NrZ2UxeHVJQ0IyWVhJZ2RHMXdYRzRnSUhaaGNpQnNaVzRnUFNCMWFXNTBPQzVzWlc1bmRHaGNiaUFnZG1GeUlHVjRkSEpoUW5sMFpYTWdQU0JzWlc0Z0pTQXpJQzh2SUdsbUlIZGxJR2hoZG1VZ01TQmllWFJsSUd4bFpuUXNJSEJoWkNBeUlHSjVkR1Z6WEc0Z0lIWmhjaUJ3WVhKMGN5QTlJRnRkWEc0Z0lIWmhjaUJ0WVhoRGFIVnVhMHhsYm1kMGFDQTlJREUyTXpneklDOHZJRzExYzNRZ1ltVWdiWFZzZEdsd2JHVWdiMllnTTF4dVhHNGdJQzh2SUdkdklIUm9jbTkxWjJnZ2RHaGxJR0Z5Y21GNUlHVjJaWEo1SUhSb2NtVmxJR0o1ZEdWekxDQjNaU2RzYkNCa1pXRnNJSGRwZEdnZ2RISmhhV3hwYm1jZ2MzUjFabVlnYkdGMFpYSmNiaUFnWm05eUlDaDJZWElnYVNBOUlEQXNJR3hsYmpJZ1BTQnNaVzRnTFNCbGVIUnlZVUo1ZEdWek95QnBJRHdnYkdWdU1qc2dhU0FyUFNCdFlYaERhSFZ1YTB4bGJtZDBhQ2tnZTF4dUlDQWdJSEJoY25SekxuQjFjMmdvWlc1amIyUmxRMmgxYm1zb1hHNGdJQ0FnSUNCMWFXNTBPQ3dnYVN3Z0tHa2dLeUJ0WVhoRGFIVnVhMHhsYm1kMGFDa2dQaUJzWlc0eUlEOGdiR1Z1TWlBNklDaHBJQ3NnYldGNFEyaDFibXRNWlc1bmRHZ3BYRzRnSUNBZ0tTbGNiaUFnZlZ4dVhHNGdJQzh2SUhCaFpDQjBhR1VnWlc1a0lIZHBkR2dnZW1WeWIzTXNJR0oxZENCdFlXdGxJSE4xY21VZ2RHOGdibTkwSUdadmNtZGxkQ0IwYUdVZ1pYaDBjbUVnWW5sMFpYTmNiaUFnYVdZZ0tHVjRkSEpoUW5sMFpYTWdQVDA5SURFcElIdGNiaUFnSUNCMGJYQWdQU0IxYVc1ME9GdHNaVzRnTFNBeFhWeHVJQ0FnSUhCaGNuUnpMbkIxYzJnb1hHNGdJQ0FnSUNCc2IyOXJkWEJiZEcxd0lENCtJREpkSUN0Y2JpQWdJQ0FnSUd4dmIydDFjRnNvZEcxd0lEdzhJRFFwSUNZZ01IZ3pSbDBnSzF4dUlDQWdJQ0FnSnowOUoxeHVJQ0FnSUNsY2JpQWdmU0JsYkhObElHbG1JQ2hsZUhSeVlVSjVkR1Z6SUQwOVBTQXlLU0I3WEc0Z0lDQWdkRzF3SUQwZ0tIVnBiblE0VzJ4bGJpQXRJREpkSUR3OElEZ3BJQ3NnZFdsdWREaGJiR1Z1SUMwZ01WMWNiaUFnSUNCd1lYSjBjeTV3ZFhOb0tGeHVJQ0FnSUNBZ2JHOXZhM1Z3VzNSdGNDQStQaUF4TUYwZ0sxeHVJQ0FnSUNBZ2JHOXZhM1Z3V3loMGJYQWdQajRnTkNrZ0ppQXdlRE5HWFNBclhHNGdJQ0FnSUNCc2IyOXJkWEJiS0hSdGNDQThQQ0F5S1NBbUlEQjRNMFpkSUN0Y2JpQWdJQ0FnSUNjOUoxeHVJQ0FnSUNsY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCd1lYSjBjeTVxYjJsdUtDY25LVnh1ZlZ4dUlpd2lMeW9oWEc0Z0tpQlVhR1VnWW5WbVptVnlJRzF2WkhWc1pTQm1jbTl0SUc1dlpHVXVhbk1zSUdadmNpQjBhR1VnWW5KdmQzTmxjaTVjYmlBcVhHNGdLaUJBWVhWMGFHOXlJQ0FnUm1WeWIzTnpJRUZpYjNWcmFHRmthV3BsYUNBOFptVnliM056UUdabGNtOXpjeTV2Y21jK0lEeG9kSFJ3T2k4dlptVnliM056TG05eVp6NWNiaUFxSUVCc2FXTmxibk5sSUNCTlNWUmNiaUFxTDF4dUx5b2daWE5zYVc1MExXUnBjMkZpYkdVZ2JtOHRjSEp2ZEc4Z0tpOWNibHh1SjNWelpTQnpkSEpwWTNRblhHNWNiblpoY2lCaVlYTmxOalFnUFNCeVpYRjFhWEpsS0NkaVlYTmxOalF0YW5NbktWeHVkbUZ5SUdsbFpXVTNOVFFnUFNCeVpYRjFhWEpsS0NkcFpXVmxOelUwSnlsY2JuWmhjaUJwYzBGeWNtRjVJRDBnY21WeGRXbHlaU2duYVhOaGNuSmhlU2NwWEc1Y2JtVjRjRzl5ZEhNdVFuVm1abVZ5SUQwZ1FuVm1abVZ5WEc1bGVIQnZjblJ6TGxOc2IzZENkV1ptWlhJZ1BTQlRiRzkzUW5WbVptVnlYRzVsZUhCdmNuUnpMa2xPVTFCRlExUmZUVUZZWDBKWlZFVlRJRDBnTlRCY2JseHVMeW9xWEc0Z0tpQkpaaUJnUW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFJnT2x4dUlDb2dJQ0E5UFQwZ2RISjFaU0FnSUNCVmMyVWdWV2x1ZERoQmNuSmhlU0JwYlhCc1pXMWxiblJoZEdsdmJpQW9abUZ6ZEdWemRDbGNiaUFxSUNBZ1BUMDlJR1poYkhObElDQWdWWE5sSUU5aWFtVmpkQ0JwYlhCc1pXMWxiblJoZEdsdmJpQW9iVzl6ZENCamIyMXdZWFJwWW14bExDQmxkbVZ1SUVsRk5pbGNiaUFxWEc0Z0tpQkNjbTkzYzJWeWN5QjBhR0YwSUhOMWNIQnZjblFnZEhsd1pXUWdZWEp5WVhseklHRnlaU0JKUlNBeE1Dc3NJRVpwY21WbWIzZ2dOQ3NzSUVOb2NtOXRaU0EzS3l3Z1UyRm1ZWEpwSURVdU1Tc3NYRzRnS2lCUGNHVnlZU0F4TVM0Mkt5d2dhVTlUSURRdU1pc3VYRzRnS2x4dUlDb2dSSFZsSUhSdklIWmhjbWx2ZFhNZ1luSnZkM05sY2lCaWRXZHpMQ0J6YjIxbGRHbHRaWE1nZEdobElFOWlhbVZqZENCcGJYQnNaVzFsYm5SaGRHbHZiaUIzYVd4c0lHSmxJSFZ6WldRZ1pYWmxibHh1SUNvZ2QyaGxiaUIwYUdVZ1luSnZkM05sY2lCemRYQndiM0owY3lCMGVYQmxaQ0JoY25KaGVYTXVYRzRnS2x4dUlDb2dUbTkwWlRwY2JpQXFYRzRnS2lBZ0lDMGdSbWx5WldadmVDQTBMVEk1SUd4aFkydHpJSE4xY0hCdmNuUWdabTl5SUdGa1pHbHVaeUJ1WlhjZ2NISnZjR1Z5ZEdsbGN5QjBieUJnVldsdWREaEJjbkpoZVdBZ2FXNXpkR0Z1WTJWekxGeHVJQ29nSUNBZ0lGTmxaVG9nYUhSMGNITTZMeTlpZFdkNmFXeHNZUzV0YjNwcGJHeGhMbTl5Wnk5emFHOTNYMkoxWnk1aloyay9hV1E5TmprMU5ETTRMbHh1SUNwY2JpQXFJQ0FnTFNCRGFISnZiV1VnT1MweE1DQnBjeUJ0YVhOemFXNW5JSFJvWlNCZ1ZIbHdaV1JCY25KaGVTNXdjbTkwYjNSNWNHVXVjM1ZpWVhKeVlYbGdJR1oxYm1OMGFXOXVMbHh1SUNwY2JpQXFJQ0FnTFNCSlJURXdJR2hoY3lCaElHSnliMnRsYmlCZ1ZIbHdaV1JCY25KaGVTNXdjbTkwYjNSNWNHVXVjM1ZpWVhKeVlYbGdJR1oxYm1OMGFXOXVJSGRvYVdOb0lISmxkSFZ5Ym5NZ1lYSnlZWGx6SUc5bVhHNGdLaUFnSUNBZ2FXNWpiM0p5WldOMElHeGxibWQwYUNCcGJpQnpiMjFsSUhOcGRIVmhkR2x2Ym5NdVhHNWNiaUFxSUZkbElHUmxkR1ZqZENCMGFHVnpaU0JpZFdkbmVTQmljbTkzYzJWeWN5QmhibVFnYzJWMElHQkNkV1ptWlhJdVZGbFFSVVJmUVZKU1FWbGZVMVZRVUU5U1ZHQWdkRzhnWUdaaGJITmxZQ0J6YnlCMGFHVjVYRzRnS2lCblpYUWdkR2hsSUU5aWFtVmpkQ0JwYlhCc1pXMWxiblJoZEdsdmJpd2dkMmhwWTJnZ2FYTWdjMnh2ZDJWeUlHSjFkQ0JpWldoaGRtVnpJR052Y25KbFkzUnNlUzVjYmlBcUwxeHVRblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUWdQU0JuYkc5aVlXd3VWRmxRUlVSZlFWSlNRVmxmVTFWUVVFOVNWQ0FoUFQwZ2RXNWtaV1pwYm1Wa1hHNGdJRDhnWjJ4dlltRnNMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFJjYmlBZ09pQjBlWEJsWkVGeWNtRjVVM1Z3Y0c5eWRDZ3BYRzVjYmk4cVhHNGdLaUJGZUhCdmNuUWdhMDFoZUV4bGJtZDBhQ0JoWm5SbGNpQjBlWEJsWkNCaGNuSmhlU0J6ZFhCd2IzSjBJR2x6SUdSbGRHVnliV2x1WldRdVhHNGdLaTljYm1WNGNHOXlkSE11YTAxaGVFeGxibWQwYUNBOUlHdE5ZWGhNWlc1bmRHZ29LVnh1WEc1bWRXNWpkR2x2YmlCMGVYQmxaRUZ5Y21GNVUzVndjRzl5ZENBb0tTQjdYRzRnSUhSeWVTQjdYRzRnSUNBZ2RtRnlJR0Z5Y2lBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0RFcFhHNGdJQ0FnWVhKeUxsOWZjSEp2ZEc5Zlh5QTlJSHRmWDNCeWIzUnZYMTg2SUZWcGJuUTRRWEp5WVhrdWNISnZkRzkwZVhCbExDQm1iMjg2SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlEUXlJSDE5WEc0Z0lDQWdjbVYwZFhKdUlHRnljaTVtYjI4b0tTQTlQVDBnTkRJZ0ppWWdMeThnZEhsd1pXUWdZWEp5WVhrZ2FXNXpkR0Z1WTJWeklHTmhiaUJpWlNCaGRXZHRaVzUwWldSY2JpQWdJQ0FnSUNBZ2RIbHdaVzltSUdGeWNpNXpkV0poY25KaGVTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQXZMeUJqYUhKdmJXVWdPUzB4TUNCc1lXTnJJR0J6ZFdKaGNuSmhlV0JjYmlBZ0lDQWdJQ0FnWVhKeUxuTjFZbUZ5Y21GNUtERXNJREVwTG1KNWRHVk1aVzVuZEdnZ1BUMDlJREFnTHk4Z2FXVXhNQ0JvWVhNZ1luSnZhMlZ1SUdCemRXSmhjbkpoZVdCY2JpQWdmU0JqWVhSamFDQW9aU2tnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlZ4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHdE5ZWGhNWlc1bmRHZ2dLQ2tnZTF4dUlDQnlaWFIxY200Z1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxSY2JpQWdJQ0EvSURCNE4yWm1abVptWm1aY2JpQWdJQ0E2SURCNE0yWm1abVptWm1aY2JuMWNibHh1Wm5WdVkzUnBiMjRnWTNKbFlYUmxRblZtWm1WeUlDaDBhR0YwTENCc1pXNW5kR2dwSUh0Y2JpQWdhV1lnS0d0TllYaE1aVzVuZEdnb0tTQThJR3hsYm1kMGFDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2RKYm5aaGJHbGtJSFI1Y0dWa0lHRnljbUY1SUd4bGJtZDBhQ2NwWEc0Z0lIMWNiaUFnYVdZZ0tFSjFabVpsY2k1VVdWQkZSRjlCVWxKQldWOVRWVkJRVDFKVUtTQjdYRzRnSUNBZ0x5OGdVbVYwZFhKdUlHRnVJR0YxWjIxbGJuUmxaQ0JnVldsdWREaEJjbkpoZVdBZ2FXNXpkR0Z1WTJVc0lHWnZjaUJpWlhOMElIQmxjbVp2Y20xaGJtTmxYRzRnSUNBZ2RHaGhkQ0E5SUc1bGR5QlZhVzUwT0VGeWNtRjVLR3hsYm1kMGFDbGNiaUFnSUNCMGFHRjBMbDlmY0hKdmRHOWZYeUE5SUVKMVptWmxjaTV3Y205MGIzUjVjR1ZjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0F2THlCR1lXeHNZbUZqYXpvZ1VtVjBkWEp1SUdGdUlHOWlhbVZqZENCcGJuTjBZVzVqWlNCdlppQjBhR1VnUW5WbVptVnlJR05zWVhOelhHNGdJQ0FnYVdZZ0tIUm9ZWFFnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUhSb1lYUWdQU0J1WlhjZ1FuVm1abVZ5S0d4bGJtZDBhQ2xjYmlBZ0lDQjlYRzRnSUNBZ2RHaGhkQzVzWlc1bmRHZ2dQU0JzWlc1bmRHaGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQjBhR0YwWEc1OVhHNWNiaThxS2x4dUlDb2dWR2hsSUVKMVptWmxjaUJqYjI1emRISjFZM1J2Y2lCeVpYUjFjbTV6SUdsdWMzUmhibU5sY3lCdlppQmdWV2x1ZERoQmNuSmhlV0FnZEdoaGRDQm9ZWFpsSUhSb1pXbHlYRzRnS2lCd2NtOTBiM1I1Y0dVZ1kyaGhibWRsWkNCMGJ5QmdRblZtWm1WeUxuQnliM1J2ZEhsd1pXQXVJRVoxY25Sb1pYSnRiM0psTENCZ1FuVm1abVZ5WUNCcGN5QmhJSE4xWW1Oc1lYTnpJRzltWEc0Z0tpQmdWV2x1ZERoQmNuSmhlV0FzSUhOdklIUm9aU0J5WlhSMWNtNWxaQ0JwYm5OMFlXNWpaWE1nZDJsc2JDQm9ZWFpsSUdGc2JDQjBhR1VnYm05a1pTQmdRblZtWm1WeVlDQnRaWFJvYjJSelhHNGdLaUJoYm1RZ2RHaGxJR0JWYVc1ME9FRnljbUY1WUNCdFpYUm9iMlJ6TGlCVGNYVmhjbVVnWW5KaFkydGxkQ0J1YjNSaGRHbHZiaUIzYjNKcmN5QmhjeUJsZUhCbFkzUmxaQ0F0TFNCcGRGeHVJQ29nY21WMGRYSnVjeUJoSUhOcGJtZHNaU0J2WTNSbGRDNWNiaUFxWEc0Z0tpQlVhR1VnWUZWcGJuUTRRWEp5WVhsZ0lIQnliM1J2ZEhsd1pTQnlaVzFoYVc1eklIVnViVzlrYVdacFpXUXVYRzRnS2k5Y2JseHVablZ1WTNScGIyNGdRblZtWm1WeUlDaGhjbWNzSUdWdVkyOWthVzVuVDNKUFptWnpaWFFzSUd4bGJtZDBhQ2tnZTF4dUlDQnBaaUFvSVVKMVptWmxjaTVVV1ZCRlJGOUJVbEpCV1Y5VFZWQlFUMUpVSUNZbUlDRW9kR2hwY3lCcGJuTjBZVzVqWlc5bUlFSjFabVpsY2lrcElIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lFSjFabVpsY2loaGNtY3NJR1Z1WTI5a2FXNW5UM0pQWm1aelpYUXNJR3hsYm1kMGFDbGNiaUFnZlZ4dVhHNGdJQzh2SUVOdmJXMXZiaUJqWVhObExseHVJQ0JwWmlBb2RIbHdaVzltSUdGeVp5QTlQVDBnSjI1MWJXSmxjaWNwSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUdWdVkyOWthVzVuVDNKUFptWnpaWFFnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hHNGdJQ0FnSUNBZ0lDZEpaaUJsYm1OdlpHbHVaeUJwY3lCemNHVmphV1pwWldRZ2RHaGxiaUIwYUdVZ1ptbHljM1FnWVhKbmRXMWxiblFnYlhWemRDQmlaU0JoSUhOMGNtbHVaeWRjYmlBZ0lDQWdJQ2xjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdGc2JHOWpWVzV6WVdabEtIUm9hWE1zSUdGeVp5bGNiaUFnZlZ4dUlDQnlaWFIxY200Z1puSnZiU2gwYUdsekxDQmhjbWNzSUdWdVkyOWthVzVuVDNKUFptWnpaWFFzSUd4bGJtZDBhQ2xjYm4xY2JseHVRblZtWm1WeUxuQnZiMnhUYVhwbElEMGdPREU1TWlBdkx5QnViM1FnZFhObFpDQmllU0IwYUdseklHbHRjR3hsYldWdWRHRjBhVzl1WEc1Y2JpOHZJRlJQUkU4NklFeGxaMkZqZVN3Z2JtOTBJRzVsWldSbFpDQmhibmx0YjNKbExpQlNaVzF2ZG1VZ2FXNGdibVY0ZENCdFlXcHZjaUIyWlhKemFXOXVMbHh1UW5WbVptVnlMbDloZFdkdFpXNTBJRDBnWm5WdVkzUnBiMjRnS0dGeWNpa2dlMXh1SUNCaGNuSXVYMTl3Y205MGIxOWZJRDBnUW5WbVptVnlMbkJ5YjNSdmRIbHdaVnh1SUNCeVpYUjFjbTRnWVhKeVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdaeWIyMGdLSFJvWVhRc0lIWmhiSFZsTENCbGJtTnZaR2x1WjA5eVQyWm1jMlYwTENCc1pXNW5kR2dwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI1MWJXSmxjaWNwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkY0luWmhiSFZsWENJZ1lYSm5kVzFsYm5RZ2JYVnpkQ0J1YjNRZ1ltVWdZU0J1ZFcxaVpYSW5LVnh1SUNCOVhHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCQmNuSmhlVUoxWm1abGNpQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkbUZzZFdVZ2FXNXpkR0Z1WTJWdlppQkJjbkpoZVVKMVptWmxjaWtnZTF4dUlDQWdJSEpsZEhWeWJpQm1jbTl0UVhKeVlYbENkV1ptWlhJb2RHaGhkQ3dnZG1Gc2RXVXNJR1Z1WTI5a2FXNW5UM0pQWm1aelpYUXNJR3hsYm1kMGFDbGNiaUFnZlZ4dVhHNGdJR2xtSUNoMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1p5YjIxVGRISnBibWNvZEdoaGRDd2dkbUZzZFdVc0lHVnVZMjlrYVc1blQzSlBabVp6WlhRcFhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z1puSnZiVTlpYW1WamRDaDBhR0YwTENCMllXeDFaU2xjYm4xY2JseHVMeW9xWEc0Z0tpQkdkVzVqZEdsdmJtRnNiSGtnWlhGMWFYWmhiR1Z1ZENCMGJ5QkNkV1ptWlhJb1lYSm5MQ0JsYm1OdlpHbHVaeWtnWW5WMElIUm9jbTkzY3lCaElGUjVjR1ZGY25KdmNseHVJQ29nYVdZZ2RtRnNkV1VnYVhNZ1lTQnVkVzFpWlhJdVhHNGdLaUJDZFdabVpYSXVabkp2YlNoemRISmJMQ0JsYm1OdlpHbHVaMTBwWEc0Z0tpQkNkV1ptWlhJdVpuSnZiU2hoY25KaGVTbGNiaUFxSUVKMVptWmxjaTVtY205dEtHSjFabVpsY2lsY2JpQXFJRUoxWm1abGNpNW1jbTl0S0dGeWNtRjVRblZtWm1WeVd5d2dZbmwwWlU5bVpuTmxkRnNzSUd4bGJtZDBhRjFkS1Z4dUlDb3FMMXh1UW5WbVptVnlMbVp5YjIwZ1BTQm1kVzVqZEdsdmJpQW9kbUZzZFdVc0lHVnVZMjlrYVc1blQzSlBabVp6WlhRc0lHeGxibWQwYUNrZ2UxeHVJQ0J5WlhSMWNtNGdabkp2YlNodWRXeHNMQ0IyWVd4MVpTd2daVzVqYjJScGJtZFBjazltWm5ObGRDd2diR1Z1WjNSb0tWeHVmVnh1WEc1cFppQW9RblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUXBJSHRjYmlBZ1FuVm1abVZ5TG5CeWIzUnZkSGx3WlM1ZlgzQnliM1J2WDE4Z1BTQlZhVzUwT0VGeWNtRjVMbkJ5YjNSdmRIbHdaVnh1SUNCQ2RXWm1aWEl1WDE5d2NtOTBiMTlmSUQwZ1ZXbHVkRGhCY25KaGVWeHVJQ0JwWmlBb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMbk53WldOcFpYTWdKaVpjYmlBZ0lDQWdJRUoxWm1abGNsdFRlVzFpYjJ3dWMzQmxZMmxsYzEwZ1BUMDlJRUoxWm1abGNpa2dlMXh1SUNBZ0lDOHZJRVpwZUNCemRXSmhjbkpoZVNncElHbHVJRVZUTWpBeE5pNGdVMlZsT2lCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlptVnliM056TDJKMVptWmxjaTl3ZFd4c0x6azNYRzRnSUNBZ1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRUoxWm1abGNpd2dVM2x0WW05c0xuTndaV05wWlhNc0lIdGNiaUFnSUNBZ0lIWmhiSFZsT2lCdWRXeHNMRnh1SUNBZ0lDQWdZMjl1Wm1sbmRYSmhZbXhsT2lCMGNuVmxYRzRnSUNBZ2ZTbGNiaUFnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJoYzNObGNuUlRhWHBsSUNoemFYcGxLU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdjMmw2WlNBaFBUMGdKMjUxYldKbGNpY3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RjSW5OcGVtVmNJaUJoY21kMWJXVnVkQ0J0ZFhOMElHSmxJR0VnYm5WdFltVnlKeWxjYmlBZ2ZTQmxiSE5sSUdsbUlDaHphWHBsSUR3Z01Da2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2RjSW5OcGVtVmNJaUJoY21kMWJXVnVkQ0J0ZFhOMElHNXZkQ0JpWlNCdVpXZGhkR2wyWlNjcFhHNGdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdZV3hzYjJNZ0tIUm9ZWFFzSUhOcGVtVXNJR1pwYkd3c0lHVnVZMjlrYVc1bktTQjdYRzRnSUdGemMyVnlkRk5wZW1Vb2MybDZaU2xjYmlBZ2FXWWdLSE5wZW1VZ1BEMGdNQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQmpjbVZoZEdWQ2RXWm1aWElvZEdoaGRDd2djMmw2WlNsY2JpQWdmVnh1SUNCcFppQW9abWxzYkNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdMeThnVDI1c2VTQndZWGtnWVhSMFpXNTBhVzl1SUhSdklHVnVZMjlrYVc1bklHbG1JR2wwSjNNZ1lTQnpkSEpwYm1jdUlGUm9hWE5jYmlBZ0lDQXZMeUJ3Y21WMlpXNTBjeUJoWTJOcFpHVnVkR0ZzYkhrZ2MyVnVaR2x1WnlCcGJpQmhJRzUxYldKbGNpQjBhR0YwSUhkdmRXeGtYRzRnSUNBZ0x5OGdZbVVnYVc1MFpYSndjbVYwZEdWa0lHRnpJR0VnYzNSaGNuUWdiMlptYzJWMExseHVJQ0FnSUhKbGRIVnliaUIwZVhCbGIyWWdaVzVqYjJScGJtY2dQVDA5SUNkemRISnBibWNuWEc0Z0lDQWdJQ0EvSUdOeVpXRjBaVUoxWm1abGNpaDBhR0YwTENCemFYcGxLUzVtYVd4c0tHWnBiR3dzSUdWdVkyOWthVzVuS1Z4dUlDQWdJQ0FnT2lCamNtVmhkR1ZDZFdabVpYSW9kR2hoZEN3Z2MybDZaU2t1Wm1sc2JDaG1hV3hzS1Z4dUlDQjlYRzRnSUhKbGRIVnliaUJqY21WaGRHVkNkV1ptWlhJb2RHaGhkQ3dnYzJsNlpTbGNibjFjYmx4dUx5b3FYRzRnS2lCRGNtVmhkR1Z6SUdFZ2JtVjNJR1pwYkd4bFpDQkNkV1ptWlhJZ2FXNXpkR0Z1WTJVdVhHNGdLaUJoYkd4dll5aHphWHBsV3l3Z1ptbHNiRnNzSUdWdVkyOWthVzVuWFYwcFhHNGdLaW92WEc1Q2RXWm1aWEl1WVd4c2IyTWdQU0JtZFc1amRHbHZiaUFvYzJsNlpTd2dabWxzYkN3Z1pXNWpiMlJwYm1jcElIdGNiaUFnY21WMGRYSnVJR0ZzYkc5aktHNTFiR3dzSUhOcGVtVXNJR1pwYkd3c0lHVnVZMjlrYVc1bktWeHVmVnh1WEc1bWRXNWpkR2x2YmlCaGJHeHZZMVZ1YzJGbVpTQW9kR2hoZEN3Z2MybDZaU2tnZTF4dUlDQmhjM05sY25SVGFYcGxLSE5wZW1VcFhHNGdJSFJvWVhRZ1BTQmpjbVZoZEdWQ2RXWm1aWElvZEdoaGRDd2djMmw2WlNBOElEQWdQeUF3SURvZ1kyaGxZMnRsWkNoemFYcGxLU0I4SURBcFhHNGdJR2xtSUNnaFFuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRcElIdGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElITnBlbVU3SUNzcmFTa2dlMXh1SUNBZ0lDQWdkR2hoZEZ0cFhTQTlJREJjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjbVYwZFhKdUlIUm9ZWFJjYm4xY2JseHVMeW9xWEc0Z0tpQkZjWFZwZG1Gc1pXNTBJSFJ2SUVKMVptWmxjaWh1ZFcwcExDQmllU0JrWldaaGRXeDBJR055WldGMFpYTWdZU0J1YjI0dGVtVnlieTFtYVd4c1pXUWdRblZtWm1WeUlHbHVjM1JoYm1ObExseHVJQ29nS2k5Y2JrSjFabVpsY2k1aGJHeHZZMVZ1YzJGbVpTQTlJR1oxYm1OMGFXOXVJQ2h6YVhwbEtTQjdYRzRnSUhKbGRIVnliaUJoYkd4dlkxVnVjMkZtWlNodWRXeHNMQ0J6YVhwbEtWeHVmVnh1THlvcVhHNGdLaUJGY1hWcGRtRnNaVzUwSUhSdklGTnNiM2RDZFdabVpYSW9iblZ0S1N3Z1lua2daR1ZtWVhWc2RDQmpjbVZoZEdWeklHRWdibTl1TFhwbGNtOHRabWxzYkdWa0lFSjFabVpsY2lCcGJuTjBZVzVqWlM1Y2JpQXFMMXh1UW5WbVptVnlMbUZzYkc5alZXNXpZV1psVTJ4dmR5QTlJR1oxYm1OMGFXOXVJQ2h6YVhwbEtTQjdYRzRnSUhKbGRIVnliaUJoYkd4dlkxVnVjMkZtWlNodWRXeHNMQ0J6YVhwbEtWeHVmVnh1WEc1bWRXNWpkR2x2YmlCbWNtOXRVM1J5YVc1bklDaDBhR0YwTENCemRISnBibWNzSUdWdVkyOWthVzVuS1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnWlc1amIyUnBibWNnSVQwOUlDZHpkSEpwYm1jbklIeDhJR1Z1WTI5a2FXNW5JRDA5UFNBbkp5a2dlMXh1SUNBZ0lHVnVZMjlrYVc1bklEMGdKM1YwWmpnblhHNGdJSDFjYmx4dUlDQnBaaUFvSVVKMVptWmxjaTVwYzBWdVkyOWthVzVuS0dWdVkyOWthVzVuS1NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0oxd2laVzVqYjJScGJtZGNJaUJ0ZFhOMElHSmxJR0VnZG1Gc2FXUWdjM1J5YVc1bklHVnVZMjlrYVc1bkp5bGNiaUFnZlZ4dVhHNGdJSFpoY2lCc1pXNW5kR2dnUFNCaWVYUmxUR1Z1WjNSb0tITjBjbWx1Wnl3Z1pXNWpiMlJwYm1jcElId2dNRnh1SUNCMGFHRjBJRDBnWTNKbFlYUmxRblZtWm1WeUtIUm9ZWFFzSUd4bGJtZDBhQ2xjYmx4dUlDQjJZWElnWVdOMGRXRnNJRDBnZEdoaGRDNTNjbWwwWlNoemRISnBibWNzSUdWdVkyOWthVzVuS1Z4dVhHNGdJR2xtSUNoaFkzUjFZV3dnSVQwOUlHeGxibWQwYUNrZ2UxeHVJQ0FnSUM4dklGZHlhWFJwYm1jZ1lTQm9aWGdnYzNSeWFXNW5MQ0JtYjNJZ1pYaGhiWEJzWlN3Z2RHaGhkQ0JqYjI1MFlXbHVjeUJwYm5aaGJHbGtJR05vWVhKaFkzUmxjbk1nZDJsc2JGeHVJQ0FnSUM4dklHTmhkWE5sSUdWMlpYSjVkR2hwYm1jZ1lXWjBaWElnZEdobElHWnBjbk4wSUdsdWRtRnNhV1FnWTJoaGNtRmpkR1Z5SUhSdklHSmxJR2xuYm05eVpXUXVJQ2hsTG1jdVhHNGdJQ0FnTHk4Z0oyRmllSGhqWkNjZ2QybHNiQ0JpWlNCMGNtVmhkR1ZrSUdGeklDZGhZaWNwWEc0Z0lDQWdkR2hoZENBOUlIUm9ZWFF1YzJ4cFkyVW9NQ3dnWVdOMGRXRnNLVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSFJvWVhSY2JuMWNibHh1Wm5WdVkzUnBiMjRnWm5KdmJVRnljbUY1VEdsclpTQW9kR2hoZEN3Z1lYSnlZWGtwSUh0Y2JpQWdkbUZ5SUd4bGJtZDBhQ0E5SUdGeWNtRjVMbXhsYm1kMGFDQThJREFnUHlBd0lEb2dZMmhsWTJ0bFpDaGhjbkpoZVM1c1pXNW5kR2dwSUh3Z01GeHVJQ0IwYUdGMElEMGdZM0psWVhSbFFuVm1abVZ5S0hSb1lYUXNJR3hsYm1kMGFDbGNiaUFnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNW5kR2c3SUdrZ0t6MGdNU2tnZTF4dUlDQWdJSFJvWVhSYmFWMGdQU0JoY25KaGVWdHBYU0FtSURJMU5WeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCMGFHRjBYRzU5WEc1Y2JtWjFibU4wYVc5dUlHWnliMjFCY25KaGVVSjFabVpsY2lBb2RHaGhkQ3dnWVhKeVlYa3NJR0o1ZEdWUFptWnpaWFFzSUd4bGJtZDBhQ2tnZTF4dUlDQmhjbkpoZVM1aWVYUmxUR1Z1WjNSb0lDOHZJSFJvYVhNZ2RHaHliM2R6SUdsbUlHQmhjbkpoZVdBZ2FYTWdibTkwSUdFZ2RtRnNhV1FnUVhKeVlYbENkV1ptWlhKY2JseHVJQ0JwWmlBb1lubDBaVTltWm5ObGRDQThJREFnZkh3Z1lYSnlZWGt1WW5sMFpVeGxibWQwYUNBOElHSjVkR1ZQWm1aelpYUXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduWEZ3bmIyWm1jMlYwWEZ3bklHbHpJRzkxZENCdlppQmliM1Z1WkhNbktWeHVJQ0I5WEc1Y2JpQWdhV1lnS0dGeWNtRjVMbUo1ZEdWTVpXNW5kR2dnUENCaWVYUmxUMlptYzJWMElDc2dLR3hsYm1kMGFDQjhmQ0F3S1NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZGNYQ2RzWlc1bmRHaGNYQ2NnYVhNZ2IzVjBJRzltSUdKdmRXNWtjeWNwWEc0Z0lIMWNibHh1SUNCcFppQW9ZbmwwWlU5bVpuTmxkQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lDWW1JR3hsYm1kMGFDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnWVhKeVlYa2dQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTaGhjbkpoZVNsY2JpQWdmU0JsYkhObElHbG1JQ2hzWlc1bmRHZ2dQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUdGeWNtRjVJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29ZWEp5WVhrc0lHSjVkR1ZQWm1aelpYUXBYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdZWEp5WVhrZ1BTQnVaWGNnVldsdWREaEJjbkpoZVNoaGNuSmhlU3dnWW5sMFpVOW1abk5sZEN3Z2JHVnVaM1JvS1Z4dUlDQjlYRzVjYmlBZ2FXWWdLRUoxWm1abGNpNVVXVkJGUkY5QlVsSkJXVjlUVlZCUVQxSlVLU0I3WEc0Z0lDQWdMeThnVW1WMGRYSnVJR0Z1SUdGMVoyMWxiblJsWkNCZ1ZXbHVkRGhCY25KaGVXQWdhVzV6ZEdGdVkyVXNJR1p2Y2lCaVpYTjBJSEJsY21admNtMWhibU5sWEc0Z0lDQWdkR2hoZENBOUlHRnljbUY1WEc0Z0lDQWdkR2hoZEM1ZlgzQnliM1J2WDE4Z1BTQkNkV1ptWlhJdWNISnZkRzkwZVhCbFhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ0x5OGdSbUZzYkdKaFkyczZJRkpsZEhWeWJpQmhiaUJ2WW1wbFkzUWdhVzV6ZEdGdVkyVWdiMllnZEdobElFSjFabVpsY2lCamJHRnpjMXh1SUNBZ0lIUm9ZWFFnUFNCbWNtOXRRWEp5WVhsTWFXdGxLSFJvWVhRc0lHRnljbUY1S1Z4dUlDQjlYRzRnSUhKbGRIVnliaUIwYUdGMFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdaeWIyMVBZbXBsWTNRZ0tIUm9ZWFFzSUc5aWFpa2dlMXh1SUNCcFppQW9RblZtWm1WeUxtbHpRblZtWm1WeUtHOWlhaWtwSUh0Y2JpQWdJQ0IyWVhJZ2JHVnVJRDBnWTJobFkydGxaQ2h2WW1vdWJHVnVaM1JvS1NCOElEQmNiaUFnSUNCMGFHRjBJRDBnWTNKbFlYUmxRblZtWm1WeUtIUm9ZWFFzSUd4bGJpbGNibHh1SUNBZ0lHbG1JQ2gwYUdGMExteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJvWVhSY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2WW1vdVkyOXdlU2gwYUdGMExDQXdMQ0F3TENCc1pXNHBYRzRnSUNBZ2NtVjBkWEp1SUhSb1lYUmNiaUFnZlZ4dVhHNGdJR2xtSUNodlltb3BJSHRjYmlBZ0lDQnBaaUFvS0hSNWNHVnZaaUJCY25KaGVVSjFabVpsY2lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlaY2JpQWdJQ0FnSUNBZ2IySnFMbUoxWm1abGNpQnBibk4wWVc1alpXOW1JRUZ5Y21GNVFuVm1abVZ5S1NCOGZDQW5iR1Z1WjNSb0p5QnBiaUJ2WW1vcElIdGNiaUFnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdiMkpxTG14bGJtZDBhQ0FoUFQwZ0oyNTFiV0psY2ljZ2ZId2dhWE51WVc0b2IySnFMbXhsYm1kMGFDa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR055WldGMFpVSjFabVpsY2loMGFHRjBMQ0F3S1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnY21WMGRYSnVJR1p5YjIxQmNuSmhlVXhwYTJVb2RHaGhkQ3dnYjJKcUtWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHZZbW91ZEhsd1pTQTlQVDBnSjBKMVptWmxjaWNnSmlZZ2FYTkJjbkpoZVNodlltb3VaR0YwWVNrcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCbWNtOXRRWEp5WVhsTWFXdGxLSFJvWVhRc0lHOWlhaTVrWVhSaEtWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMFpwY25OMElHRnlaM1Z0Wlc1MElHMTFjM1FnWW1VZ1lTQnpkSEpwYm1jc0lFSjFabVpsY2l3Z1FYSnlZWGxDZFdabVpYSXNJRUZ5Y21GNUxDQnZjaUJoY25KaGVTMXNhV3RsSUc5aWFtVmpkQzRuS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJqYUdWamEyVmtJQ2hzWlc1bmRHZ3BJSHRjYmlBZ0x5OGdUbTkwWlRvZ1kyRnVibTkwSUhWelpTQmdiR1Z1WjNSb0lEd2dhMDFoZUV4bGJtZDBhQ2dwWUNCb1pYSmxJR0psWTJGMWMyVWdkR2hoZENCbVlXbHNjeUIzYUdWdVhHNGdJQzh2SUd4bGJtZDBhQ0JwY3lCT1lVNGdLSGRvYVdOb0lHbHpJRzkwYUdWeWQybHpaU0JqYjJWeVkyVmtJSFJ2SUhwbGNtOHVLVnh1SUNCcFppQW9iR1Z1WjNSb0lENDlJR3ROWVhoTVpXNW5kR2dvS1NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZEJkSFJsYlhCMElIUnZJR0ZzYkc5allYUmxJRUoxWm1abGNpQnNZWEpuWlhJZ2RHaGhiaUJ0WVhocGJYVnRJQ2NnSzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNkemFYcGxPaUF3ZUNjZ0t5QnJUV0Y0VEdWdVozUm9LQ2t1ZEc5VGRISnBibWNvTVRZcElDc2dKeUJpZVhSbGN5Y3BYRzRnSUgxY2JpQWdjbVYwZFhKdUlHeGxibWQwYUNCOElEQmNibjFjYmx4dVpuVnVZM1JwYjI0Z1UyeHZkMEoxWm1abGNpQW9iR1Z1WjNSb0tTQjdYRzRnSUdsbUlDZ3JiR1Z1WjNSb0lDRTlJR3hsYm1kMGFDa2dleUF2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHVnhaWEZsY1Z4dUlDQWdJR3hsYm1kMGFDQTlJREJjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdRblZtWm1WeUxtRnNiRzlqS0N0c1pXNW5kR2dwWEc1OVhHNWNia0oxWm1abGNpNXBjMEoxWm1abGNpQTlJR1oxYm1OMGFXOXVJR2x6UW5WbVptVnlJQ2hpS1NCN1hHNGdJSEpsZEhWeWJpQWhJU2hpSUNFOUlHNTFiR3dnSmlZZ1lpNWZhWE5DZFdabVpYSXBYRzU5WEc1Y2JrSjFabVpsY2k1amIyMXdZWEpsSUQwZ1puVnVZM1JwYjI0Z1kyOXRjR0Z5WlNBb1lTd2dZaWtnZTF4dUlDQnBaaUFvSVVKMVptWmxjaTVwYzBKMVptWmxjaWhoS1NCOGZDQWhRblZtWm1WeUxtbHpRblZtWm1WeUtHSXBLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduUVhKbmRXMWxiblJ6SUcxMWMzUWdZbVVnUW5WbVptVnljeWNwWEc0Z0lIMWNibHh1SUNCcFppQW9ZU0E5UFQwZ1lpa2djbVYwZFhKdUlEQmNibHh1SUNCMllYSWdlQ0E5SUdFdWJHVnVaM1JvWEc0Z0lIWmhjaUI1SUQwZ1lpNXNaVzVuZEdoY2JseHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Dd2diR1Z1SUQwZ1RXRjBhQzV0YVc0b2VDd2dlU2s3SUdrZ1BDQnNaVzQ3SUNzcmFTa2dlMXh1SUNBZ0lHbG1JQ2hoVzJsZElDRTlQU0JpVzJsZEtTQjdYRzRnSUNBZ0lDQjRJRDBnWVZ0cFhWeHVJQ0FnSUNBZ2VTQTlJR0piYVYxY2JpQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhV1lnS0hnZ1BDQjVLU0J5WlhSMWNtNGdMVEZjYmlBZ2FXWWdLSGtnUENCNEtTQnlaWFIxY200Z01WeHVJQ0J5WlhSMWNtNGdNRnh1ZlZ4dVhHNUNkV1ptWlhJdWFYTkZibU52WkdsdVp5QTlJR1oxYm1OMGFXOXVJR2x6Ulc1amIyUnBibWNnS0dWdVkyOWthVzVuS1NCN1hHNGdJSE4zYVhSamFDQW9VM1J5YVc1bktHVnVZMjlrYVc1bktTNTBiMHh2ZDJWeVEyRnpaU2dwS1NCN1hHNGdJQ0FnWTJGelpTQW5hR1Y0SnpwY2JpQWdJQ0JqWVhObElDZDFkR1k0SnpwY2JpQWdJQ0JqWVhObElDZDFkR1l0T0NjNlhHNGdJQ0FnWTJGelpTQW5ZWE5qYVdrbk9seHVJQ0FnSUdOaGMyVWdKMnhoZEdsdU1TYzZYRzRnSUNBZ1kyRnpaU0FuWW1sdVlYSjVKenBjYmlBZ0lDQmpZWE5sSUNkaVlYTmxOalFuT2x4dUlDQWdJR05oYzJVZ0ozVmpjekluT2x4dUlDQWdJR05oYzJVZ0ozVmpjeTB5SnpwY2JpQWdJQ0JqWVhObElDZDFkR1l4Tm14bEp6cGNiaUFnSUNCallYTmxJQ2QxZEdZdE1UWnNaU2M2WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlZ4dUlDQWdJR1JsWm1GMWJIUTZYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlZjYmlBZ2ZWeHVmVnh1WEc1Q2RXWm1aWEl1WTI5dVkyRjBJRDBnWm5WdVkzUnBiMjRnWTI5dVkyRjBJQ2hzYVhOMExDQnNaVzVuZEdncElIdGNiaUFnYVdZZ0tDRnBjMEZ5Y21GNUtHeHBjM1FwS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblhDSnNhWE4wWENJZ1lYSm5kVzFsYm5RZ2JYVnpkQ0JpWlNCaGJpQkJjbkpoZVNCdlppQkNkV1ptWlhKekp5bGNiaUFnZlZ4dVhHNGdJR2xtSUNoc2FYTjBMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJDZFdabVpYSXVZV3hzYjJNb01DbGNiaUFnZlZ4dVhHNGdJSFpoY2lCcFhHNGdJR2xtSUNoc1pXNW5kR2dnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lHeGxibWQwYUNBOUlEQmNiaUFnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYkdsemRDNXNaVzVuZEdnN0lDc3JhU2tnZTF4dUlDQWdJQ0FnYkdWdVozUm9JQ3M5SUd4cGMzUmJhVjB1YkdWdVozUm9YRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdkbUZ5SUdKMVptWmxjaUE5SUVKMVptWmxjaTVoYkd4dlkxVnVjMkZtWlNoc1pXNW5kR2dwWEc0Z0lIWmhjaUJ3YjNNZ1BTQXdYRzRnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0JzYVhOMExteGxibWQwYURzZ0t5dHBLU0I3WEc0Z0lDQWdkbUZ5SUdKMVppQTlJR3hwYzNSYmFWMWNiaUFnSUNCcFppQW9JVUoxWm1abGNpNXBjMEoxWm1abGNpaGlkV1lwS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZGNJbXhwYzNSY0lpQmhjbWQxYldWdWRDQnRkWE4wSUdKbElHRnVJRUZ5Y21GNUlHOW1JRUoxWm1abGNuTW5LVnh1SUNBZ0lIMWNiaUFnSUNCaWRXWXVZMjl3ZVNoaWRXWm1aWElzSUhCdmN5bGNiaUFnSUNCd2IzTWdLejBnWW5WbUxteGxibWQwYUZ4dUlDQjlYRzRnSUhKbGRIVnliaUJpZFdabVpYSmNibjFjYmx4dVpuVnVZM1JwYjI0Z1lubDBaVXhsYm1kMGFDQW9jM1J5YVc1bkxDQmxibU52WkdsdVp5a2dlMXh1SUNCcFppQW9RblZtWm1WeUxtbHpRblZtWm1WeUtITjBjbWx1WnlrcElIdGNiaUFnSUNCeVpYUjFjbTRnYzNSeWFXNW5MbXhsYm1kMGFGeHVJQ0I5WEc0Z0lHbG1JQ2gwZVhCbGIyWWdRWEp5WVhsQ2RXWm1aWElnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhSNWNHVnZaaUJCY25KaGVVSjFabVpsY2k1cGMxWnBaWGNnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVpjYmlBZ0lDQWdJQ2hCY25KaGVVSjFabVpsY2k1cGMxWnBaWGNvYzNSeWFXNW5LU0I4ZkNCemRISnBibWNnYVc1emRHRnVZMlZ2WmlCQmNuSmhlVUoxWm1abGNpa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2MzUnlhVzVuTG1KNWRHVk1aVzVuZEdoY2JpQWdmVnh1SUNCcFppQW9kSGx3Wlc5bUlITjBjbWx1WnlBaFBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQnpkSEpwYm1jZ1BTQW5KeUFySUhOMGNtbHVaMXh1SUNCOVhHNWNiaUFnZG1GeUlHeGxiaUE5SUhOMGNtbHVaeTVzWlc1bmRHaGNiaUFnYVdZZ0tHeGxiaUE5UFQwZ01Da2djbVYwZFhKdUlEQmNibHh1SUNBdkx5QlZjMlVnWVNCbWIzSWdiRzl2Y0NCMGJ5QmhkbTlwWkNCeVpXTjFjbk5wYjI1Y2JpQWdkbUZ5SUd4dmQyVnlaV1JEWVhObElEMGdabUZzYzJWY2JpQWdabTl5SUNnN095a2dlMXh1SUNBZ0lITjNhWFJqYUNBb1pXNWpiMlJwYm1jcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjJGelkybHBKenBjYmlBZ0lDQWdJR05oYzJVZ0oyeGhkR2x1TVNjNlhHNGdJQ0FnSUNCallYTmxJQ2RpYVc1aGNua25PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiR1Z1WEc0Z0lDQWdJQ0JqWVhObElDZDFkR1k0SnpwY2JpQWdJQ0FnSUdOaGMyVWdKM1YwWmkwNEp6cGNiaUFnSUNBZ0lHTmhjMlVnZFc1a1pXWnBibVZrT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZFhSbU9GUnZRbmwwWlhNb2MzUnlhVzVuS1M1c1pXNW5kR2hjYmlBZ0lDQWdJR05oYzJVZ0ozVmpjekluT2x4dUlDQWdJQ0FnWTJGelpTQW5kV056TFRJbk9seHVJQ0FnSUNBZ1kyRnpaU0FuZFhSbU1UWnNaU2M2WEc0Z0lDQWdJQ0JqWVhObElDZDFkR1l0TVRac1pTYzZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnNaVzRnS2lBeVhHNGdJQ0FnSUNCallYTmxJQ2RvWlhnbk9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JHVnVJRDQrUGlBeFhHNGdJQ0FnSUNCallYTmxJQ2RpWVhObE5qUW5PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZbUZ6WlRZMFZHOUNlWFJsY3loemRISnBibWNwTG14bGJtZDBhRnh1SUNBZ0lDQWdaR1ZtWVhWc2REcGNiaUFnSUNBZ0lDQWdhV1lnS0d4dmQyVnlaV1JEWVhObEtTQnlaWFIxY200Z2RYUm1PRlJ2UW5sMFpYTW9jM1J5YVc1bktTNXNaVzVuZEdnZ0x5OGdZWE56ZFcxbElIVjBaamhjYmlBZ0lDQWdJQ0FnWlc1amIyUnBibWNnUFNBb0p5Y2dLeUJsYm1OdlpHbHVaeWt1ZEc5TWIzZGxja05oYzJVb0tWeHVJQ0FnSUNBZ0lDQnNiM2RsY21Wa1EyRnpaU0E5SUhSeWRXVmNiaUFnSUNCOVhHNGdJSDFjYm4xY2JrSjFabVpsY2k1aWVYUmxUR1Z1WjNSb0lEMGdZbmwwWlV4bGJtZDBhRnh1WEc1bWRXNWpkR2x2YmlCemJHOTNWRzlUZEhKcGJtY2dLR1Z1WTI5a2FXNW5MQ0J6ZEdGeWRDd2daVzVrS1NCN1hHNGdJSFpoY2lCc2IzZGxjbVZrUTJGelpTQTlJR1poYkhObFhHNWNiaUFnTHk4Z1RtOGdibVZsWkNCMGJ5QjJaWEpwWm5rZ2RHaGhkQ0JjSW5Sb2FYTXViR1Z1WjNSb0lEdzlJRTFCV0Y5VlNVNVVNekpjSWlCemFXNWpaU0JwZENkeklHRWdjbVZoWkMxdmJteDVYRzRnSUM4dklIQnliM0JsY25SNUlHOW1JR0VnZEhsd1pXUWdZWEp5WVhrdVhHNWNiaUFnTHk4Z1ZHaHBjeUJpWldoaGRtVnpJRzVsYVhSb1pYSWdiR2xyWlNCVGRISnBibWNnYm05eUlGVnBiblE0UVhKeVlYa2dhVzRnZEdoaGRDQjNaU0J6WlhRZ2MzUmhjblF2Wlc1a1hHNGdJQzh2SUhSdklIUm9aV2x5SUhWd2NHVnlMMnh2ZDJWeUlHSnZkVzVrY3lCcFppQjBhR1VnZG1Gc2RXVWdjR0Z6YzJWa0lHbHpJRzkxZENCdlppQnlZVzVuWlM1Y2JpQWdMeThnZFc1a1pXWnBibVZrSUdseklHaGhibVJzWldRZ2MzQmxZMmxoYkd4NUlHRnpJSEJsY2lCRlEwMUJMVEkyTWlBMmRHZ2dSV1JwZEdsdmJpeGNiaUFnTHk4Z1UyVmpkR2x2YmlBeE15NHpMak11TnlCU2RXNTBhVzFsSUZObGJXRnVkR2xqY3pvZ1MyVjVaV1JDYVc1a2FXNW5TVzVwZEdsaGJHbDZZWFJwYjI0dVhHNGdJR2xtSUNoemRHRnlkQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJSE4wWVhKMElEd2dNQ2tnZTF4dUlDQWdJSE4wWVhKMElEMGdNRnh1SUNCOVhHNGdJQzh2SUZKbGRIVnliaUJsWVhKc2VTQnBaaUJ6ZEdGeWRDQStJSFJvYVhNdWJHVnVaM1JvTGlCRWIyNWxJR2hsY21VZ2RHOGdjSEpsZG1WdWRDQndiM1JsYm5ScFlXd2dkV2x1ZERNeVhHNGdJQzh2SUdOdlpYSmphVzl1SUdaaGFXd2dZbVZzYjNjdVhHNGdJR2xtSUNoemRHRnlkQ0ErSUhSb2FYTXViR1Z1WjNSb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUNjblhHNGdJSDFjYmx4dUlDQnBaaUFvWlc1a0lEMDlQU0IxYm1SbFptbHVaV1FnZkh3Z1pXNWtJRDRnZEdocGN5NXNaVzVuZEdncElIdGNiaUFnSUNCbGJtUWdQU0IwYUdsekxteGxibWQwYUZ4dUlDQjlYRzVjYmlBZ2FXWWdLR1Z1WkNBOFBTQXdLU0I3WEc0Z0lDQWdjbVYwZFhKdUlDY25YRzRnSUgxY2JseHVJQ0F2THlCR2IzSmpaU0JqYjJWeWMybHZiaUIwYnlCMWFXNTBNekl1SUZSb2FYTWdkMmxzYkNCaGJITnZJR052WlhKalpTQm1ZV3h6WlhrdlRtRk9JSFpoYkhWbGN5QjBieUF3TGx4dUlDQmxibVFnUGo0K1BTQXdYRzRnSUhOMFlYSjBJRDQrUGowZ01GeHVYRzRnSUdsbUlDaGxibVFnUEQwZ2MzUmhjblFwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdKeWRjYmlBZ2ZWeHVYRzRnSUdsbUlDZ2haVzVqYjJScGJtY3BJR1Z1WTI5a2FXNW5JRDBnSjNWMFpqZ25YRzVjYmlBZ2QyaHBiR1VnS0hSeWRXVXBJSHRjYmlBZ0lDQnpkMmwwWTJnZ0tHVnVZMjlrYVc1bktTQjdYRzRnSUNBZ0lDQmpZWE5sSUNkb1pYZ25PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdhR1Y0VTJ4cFkyVW9kR2hwY3l3Z2MzUmhjblFzSUdWdVpDbGNibHh1SUNBZ0lDQWdZMkZ6WlNBbmRYUm1PQ2M2WEc0Z0lDQWdJQ0JqWVhObElDZDFkR1l0T0NjNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMWRHWTRVMnhwWTJVb2RHaHBjeXdnYzNSaGNuUXNJR1Z1WkNsY2JseHVJQ0FnSUNBZ1kyRnpaU0FuWVhOamFXa25PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZWE5qYVdsVGJHbGpaU2gwYUdsekxDQnpkR0Z5ZEN3Z1pXNWtLVnh1WEc0Z0lDQWdJQ0JqWVhObElDZHNZWFJwYmpFbk9seHVJQ0FnSUNBZ1kyRnpaU0FuWW1sdVlYSjVKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR3hoZEdsdU1WTnNhV05sS0hSb2FYTXNJSE4wWVhKMExDQmxibVFwWEc1Y2JpQWdJQ0FnSUdOaGMyVWdKMkpoYzJVMk5DYzZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmlZWE5sTmpSVGJHbGpaU2gwYUdsekxDQnpkR0Z5ZEN3Z1pXNWtLVnh1WEc0Z0lDQWdJQ0JqWVhObElDZDFZM015SnpwY2JpQWdJQ0FnSUdOaGMyVWdKM1ZqY3kweUp6cGNiaUFnSUNBZ0lHTmhjMlVnSjNWMFpqRTJiR1VuT2x4dUlDQWdJQ0FnWTJGelpTQW5kWFJtTFRFMmJHVW5PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkWFJtTVRac1pWTnNhV05sS0hSb2FYTXNJSE4wWVhKMExDQmxibVFwWEc1Y2JpQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUdsbUlDaHNiM2RsY21Wa1EyRnpaU2tnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblZXNXJibTkzYmlCbGJtTnZaR2x1WnpvZ0p5QXJJR1Z1WTI5a2FXNW5LVnh1SUNBZ0lDQWdJQ0JsYm1OdlpHbHVaeUE5SUNobGJtTnZaR2x1WnlBcklDY25LUzUwYjB4dmQyVnlRMkZ6WlNncFhHNGdJQ0FnSUNBZ0lHeHZkMlZ5WldSRFlYTmxJRDBnZEhKMVpWeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNHZMeUJVYUdVZ2NISnZjR1Z5ZEhrZ2FYTWdkWE5sWkNCaWVTQmdRblZtWm1WeUxtbHpRblZtWm1WeVlDQmhibVFnWUdsekxXSjFabVpsY21BZ0tHbHVJRk5oWm1GeWFTQTFMVGNwSUhSdklHUmxkR1ZqZEZ4dUx5OGdRblZtWm1WeUlHbHVjM1JoYm1ObGN5NWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVYMmx6UW5WbVptVnlJRDBnZEhKMVpWeHVYRzVtZFc1amRHbHZiaUJ6ZDJGd0lDaGlMQ0J1TENCdEtTQjdYRzRnSUhaaGNpQnBJRDBnWWx0dVhWeHVJQ0JpVzI1ZElEMGdZbHR0WFZ4dUlDQmlXMjFkSUQwZ2FWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5OM1lYQXhOaUE5SUdaMWJtTjBhVzl1SUhOM1lYQXhOaUFvS1NCN1hHNGdJSFpoY2lCc1pXNGdQU0IwYUdsekxteGxibWQwYUZ4dUlDQnBaaUFvYkdWdUlDVWdNaUFoUFQwZ01Da2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlNZVzVuWlVWeWNtOXlLQ2RDZFdabVpYSWdjMmw2WlNCdGRYTjBJR0psSUdFZ2JYVnNkR2x3YkdVZ2IyWWdNVFl0WW1sMGN5Y3BYRzRnSUgxY2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc0N0lHa2dLejBnTWlrZ2UxeHVJQ0FnSUhOM1lYQW9kR2hwY3l3Z2FTd2dhU0FySURFcFhHNGdJSDFjYmlBZ2NtVjBkWEp1SUhSb2FYTmNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1emQyRndNeklnUFNCbWRXNWpkR2x2YmlCemQyRndNeklnS0NrZ2UxeHVJQ0IyWVhJZ2JHVnVJRDBnZEdocGN5NXNaVzVuZEdoY2JpQWdhV1lnS0d4bGJpQWxJRFFnSVQwOUlEQXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduUW5WbVptVnlJSE5wZW1VZ2JYVnpkQ0JpWlNCaElHMTFiSFJwY0d4bElHOW1JRE15TFdKcGRITW5LVnh1SUNCOVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdWdU95QnBJQ3M5SURRcElIdGNiaUFnSUNCemQyRndLSFJvYVhNc0lHa3NJR2tnS3lBektWeHVJQ0FnSUhOM1lYQW9kR2hwY3l3Z2FTQXJJREVzSUdrZ0t5QXlLVnh1SUNCOVhHNGdJSEpsZEhWeWJpQjBhR2x6WEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjM2RoY0RZMElEMGdablZ1WTNScGIyNGdjM2RoY0RZMElDZ3BJSHRjYmlBZ2RtRnlJR3hsYmlBOUlIUm9hWE11YkdWdVozUm9YRzRnSUdsbUlDaHNaVzRnSlNBNElDRTlQU0F3S1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0owSjFabVpsY2lCemFYcGxJRzExYzNRZ1ltVWdZU0J0ZFd4MGFYQnNaU0J2WmlBMk5DMWlhWFJ6SnlsY2JpQWdmVnh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHeGxianNnYVNBclBTQTRLU0I3WEc0Z0lDQWdjM2RoY0NoMGFHbHpMQ0JwTENCcElDc2dOeWxjYmlBZ0lDQnpkMkZ3S0hSb2FYTXNJR2tnS3lBeExDQnBJQ3NnTmlsY2JpQWdJQ0J6ZDJGd0tIUm9hWE1zSUdrZ0t5QXlMQ0JwSUNzZ05TbGNiaUFnSUNCemQyRndLSFJvYVhNc0lHa2dLeUF6TENCcElDc2dOQ2xjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdkR2hwYzF4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5JRDBnWm5WdVkzUnBiMjRnZEc5VGRISnBibWNnS0NrZ2UxeHVJQ0IyWVhJZ2JHVnVaM1JvSUQwZ2RHaHBjeTVzWlc1bmRHZ2dmQ0F3WEc0Z0lHbG1JQ2hzWlc1bmRHZ2dQVDA5SURBcElISmxkSFZ5YmlBbkoxeHVJQ0JwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNBOVBUMGdNQ2tnY21WMGRYSnVJSFYwWmpoVGJHbGpaU2gwYUdsekxDQXdMQ0JzWlc1bmRHZ3BYRzRnSUhKbGRIVnliaUJ6Ykc5M1ZHOVRkSEpwYm1jdVlYQndiSGtvZEdocGN5d2dZWEpuZFcxbGJuUnpLVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExtVnhkV0ZzY3lBOUlHWjFibU4wYVc5dUlHVnhkV0ZzY3lBb1lpa2dlMXh1SUNCcFppQW9JVUoxWm1abGNpNXBjMEoxWm1abGNpaGlLU2tnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblFYSm5kVzFsYm5RZ2JYVnpkQ0JpWlNCaElFSjFabVpsY2ljcFhHNGdJR2xtSUNoMGFHbHpJRDA5UFNCaUtTQnlaWFIxY200Z2RISjFaVnh1SUNCeVpYUjFjbTRnUW5WbVptVnlMbU52YlhCaGNtVW9kR2hwY3l3Z1lpa2dQVDA5SURCY2JuMWNibHh1UW5WbVptVnlMbkJ5YjNSdmRIbHdaUzVwYm5Od1pXTjBJRDBnWm5WdVkzUnBiMjRnYVc1emNHVmpkQ0FvS1NCN1hHNGdJSFpoY2lCemRISWdQU0FuSjF4dUlDQjJZWElnYldGNElEMGdaWGh3YjNKMGN5NUpUbE5RUlVOVVgwMUJXRjlDV1ZSRlUxeHVJQ0JwWmlBb2RHaHBjeTVzWlc1bmRHZ2dQaUF3S1NCN1hHNGdJQ0FnYzNSeUlEMGdkR2hwY3k1MGIxTjBjbWx1WnlnbmFHVjRKeXdnTUN3Z2JXRjRLUzV0WVhSamFDZ3ZMbnN5ZlM5bktTNXFiMmx1S0NjZ0p5bGNiaUFnSUNCcFppQW9kR2hwY3k1c1pXNW5kR2dnUGlCdFlYZ3BJSE4wY2lBclBTQW5JQzR1TGlBblhHNGdJSDFjYmlBZ2NtVjBkWEp1SUNjOFFuVm1abVZ5SUNjZ0t5QnpkSElnS3lBblBpZGNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1amIyMXdZWEpsSUQwZ1puVnVZM1JwYjI0Z1kyOXRjR0Z5WlNBb2RHRnlaMlYwTENCemRHRnlkQ3dnWlc1a0xDQjBhR2x6VTNSaGNuUXNJSFJvYVhORmJtUXBJSHRjYmlBZ2FXWWdLQ0ZDZFdabVpYSXVhWE5DZFdabVpYSW9kR0Z5WjJWMEtTa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMEZ5WjNWdFpXNTBJRzExYzNRZ1ltVWdZU0JDZFdabVpYSW5LVnh1SUNCOVhHNWNiaUFnYVdZZ0tITjBZWEowSUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQnpkR0Z5ZENBOUlEQmNiaUFnZlZ4dUlDQnBaaUFvWlc1a0lEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0JsYm1RZ1BTQjBZWEpuWlhRZ1B5QjBZWEpuWlhRdWJHVnVaM1JvSURvZ01GeHVJQ0I5WEc0Z0lHbG1JQ2gwYUdselUzUmhjblFnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lIUm9hWE5UZEdGeWRDQTlJREJjYmlBZ2ZWeHVJQ0JwWmlBb2RHaHBjMFZ1WkNBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdkR2hwYzBWdVpDQTlJSFJvYVhNdWJHVnVaM1JvWEc0Z0lIMWNibHh1SUNCcFppQW9jM1JoY25RZ1BDQXdJSHg4SUdWdVpDQStJSFJoY21kbGRDNXNaVzVuZEdnZ2ZId2dkR2hwYzFOMFlYSjBJRHdnTUNCOGZDQjBhR2x6Ulc1a0lENGdkR2hwY3k1c1pXNW5kR2dwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2lnbmIzVjBJRzltSUhKaGJtZGxJR2x1WkdWNEp5bGNiaUFnZlZ4dVhHNGdJR2xtSUNoMGFHbHpVM1JoY25RZ1BqMGdkR2hwYzBWdVpDQW1KaUJ6ZEdGeWRDQStQU0JsYm1RcElIdGNiaUFnSUNCeVpYUjFjbTRnTUZ4dUlDQjlYRzRnSUdsbUlDaDBhR2x6VTNSaGNuUWdQajBnZEdocGMwVnVaQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQXRNVnh1SUNCOVhHNGdJR2xtSUNoemRHRnlkQ0ErUFNCbGJtUXBJSHRjYmlBZ0lDQnlaWFIxY200Z01WeHVJQ0I5WEc1Y2JpQWdjM1JoY25RZ1BqNCtQU0F3WEc0Z0lHVnVaQ0ErUGo0OUlEQmNiaUFnZEdocGMxTjBZWEowSUQ0K1BqMGdNRnh1SUNCMGFHbHpSVzVrSUQ0K1BqMGdNRnh1WEc0Z0lHbG1JQ2gwYUdseklEMDlQU0IwWVhKblpYUXBJSEpsZEhWeWJpQXdYRzVjYmlBZ2RtRnlJSGdnUFNCMGFHbHpSVzVrSUMwZ2RHaHBjMU4wWVhKMFhHNGdJSFpoY2lCNUlEMGdaVzVrSUMwZ2MzUmhjblJjYmlBZ2RtRnlJR3hsYmlBOUlFMWhkR2d1YldsdUtIZ3NJSGtwWEc1Y2JpQWdkbUZ5SUhSb2FYTkRiM0I1SUQwZ2RHaHBjeTV6YkdsalpTaDBhR2x6VTNSaGNuUXNJSFJvYVhORmJtUXBYRzRnSUhaaGNpQjBZWEpuWlhSRGIzQjVJRDBnZEdGeVoyVjBMbk5zYVdObEtITjBZWEowTENCbGJtUXBYRzVjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzQ3SUNzcmFTa2dlMXh1SUNBZ0lHbG1JQ2gwYUdselEyOXdlVnRwWFNBaFBUMGdkR0Z5WjJWMFEyOXdlVnRwWFNrZ2UxeHVJQ0FnSUNBZ2VDQTlJSFJvYVhORGIzQjVXMmxkWEc0Z0lDQWdJQ0I1SUQwZ2RHRnlaMlYwUTI5d2VWdHBYVnh1SUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCcFppQW9lQ0E4SUhrcElISmxkSFZ5YmlBdE1WeHVJQ0JwWmlBb2VTQThJSGdwSUhKbGRIVnliaUF4WEc0Z0lISmxkSFZ5YmlBd1hHNTlYRzVjYmk4dklFWnBibVJ6SUdWcGRHaGxjaUIwYUdVZ1ptbHljM1FnYVc1a1pYZ2diMllnWUhaaGJHQWdhVzRnWUdKMVptWmxjbUFnWVhRZ2IyWm1jMlYwSUQ0OUlHQmllWFJsVDJabWMyVjBZQ3hjYmk4dklFOVNJSFJvWlNCc1lYTjBJR2x1WkdWNElHOW1JR0IyWVd4Z0lHbHVJR0JpZFdabVpYSmdJR0YwSUc5bVpuTmxkQ0E4UFNCZ1lubDBaVTltWm5ObGRHQXVYRzR2TDF4dUx5OGdRWEpuZFcxbGJuUnpPbHh1THk4Z0xTQmlkV1ptWlhJZ0xTQmhJRUoxWm1abGNpQjBieUJ6WldGeVkyaGNiaTh2SUMwZ2RtRnNJQzBnWVNCemRISnBibWNzSUVKMVptWmxjaXdnYjNJZ2JuVnRZbVZ5WEc0dkx5QXRJR0o1ZEdWUFptWnpaWFFnTFNCaGJpQnBibVJsZUNCcGJuUnZJR0JpZFdabVpYSmdPeUIzYVd4c0lHSmxJR05zWVcxd1pXUWdkRzhnWVc0Z2FXNTBNekpjYmk4dklDMGdaVzVqYjJScGJtY2dMU0JoYmlCdmNIUnBiMjVoYkNCbGJtTnZaR2x1Wnl3Z2NtVnNaWFpoYm5RZ2FYTWdkbUZzSUdseklHRWdjM1J5YVc1blhHNHZMeUF0SUdScGNpQXRJSFJ5ZFdVZ1ptOXlJR2x1WkdWNFQyWXNJR1poYkhObElHWnZjaUJzWVhOMFNXNWtaWGhQWmx4dVpuVnVZM1JwYjI0Z1ltbGthWEpsWTNScGIyNWhiRWx1WkdWNFQyWWdLR0oxWm1abGNpd2dkbUZzTENCaWVYUmxUMlptYzJWMExDQmxibU52WkdsdVp5d2daR2x5S1NCN1hHNGdJQzh2SUVWdGNIUjVJR0oxWm1abGNpQnRaV0Z1Y3lCdWJ5QnRZWFJqYUZ4dUlDQnBaaUFvWW5WbVptVnlMbXhsYm1kMGFDQTlQVDBnTUNrZ2NtVjBkWEp1SUMweFhHNWNiaUFnTHk4Z1RtOXliV0ZzYVhwbElHSjVkR1ZQWm1aelpYUmNiaUFnYVdZZ0tIUjVjR1Z2WmlCaWVYUmxUMlptYzJWMElEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJR1Z1WTI5a2FXNW5JRDBnWW5sMFpVOW1abk5sZEZ4dUlDQWdJR0o1ZEdWUFptWnpaWFFnUFNBd1hHNGdJSDBnWld4elpTQnBaaUFvWW5sMFpVOW1abk5sZENBK0lEQjROMlptWm1abVptWXBJSHRjYmlBZ0lDQmllWFJsVDJabWMyVjBJRDBnTUhnM1ptWm1abVptWmx4dUlDQjlJR1ZzYzJVZ2FXWWdLR0o1ZEdWUFptWnpaWFFnUENBdE1IZzRNREF3TURBd01Da2dlMXh1SUNBZ0lHSjVkR1ZQWm1aelpYUWdQU0F0TUhnNE1EQXdNREF3TUZ4dUlDQjlYRzRnSUdKNWRHVlBabVp6WlhRZ1BTQXJZbmwwWlU5bVpuTmxkQ0FnTHk4Z1EyOWxjbU5sSUhSdklFNTFiV0psY2k1Y2JpQWdhV1lnS0dselRtRk9LR0o1ZEdWUFptWnpaWFFwS1NCN1hHNGdJQ0FnTHk4Z1lubDBaVTltWm5ObGREb2dhWFFnYVhRbmN5QjFibVJsWm1sdVpXUXNJRzUxYkd3c0lFNWhUaXdnWENKbWIyOWNJaXdnWlhSakxDQnpaV0Z5WTJnZ2QyaHZiR1VnWW5WbVptVnlYRzRnSUNBZ1lubDBaVTltWm5ObGRDQTlJR1JwY2lBL0lEQWdPaUFvWW5WbVptVnlMbXhsYm1kMGFDQXRJREVwWEc0Z0lIMWNibHh1SUNBdkx5Qk9iM0p0WVd4cGVtVWdZbmwwWlU5bVpuTmxkRG9nYm1WbllYUnBkbVVnYjJabWMyVjBjeUJ6ZEdGeWRDQm1jbTl0SUhSb1pTQmxibVFnYjJZZ2RHaGxJR0oxWm1abGNseHVJQ0JwWmlBb1lubDBaVTltWm5ObGRDQThJREFwSUdKNWRHVlBabVp6WlhRZ1BTQmlkV1ptWlhJdWJHVnVaM1JvSUNzZ1lubDBaVTltWm5ObGRGeHVJQ0JwWmlBb1lubDBaVTltWm5ObGRDQStQU0JpZFdabVpYSXViR1Z1WjNSb0tTQjdYRzRnSUNBZ2FXWWdLR1JwY2lrZ2NtVjBkWEp1SUMweFhHNGdJQ0FnWld4elpTQmllWFJsVDJabWMyVjBJRDBnWW5WbVptVnlMbXhsYm1kMGFDQXRJREZjYmlBZ2ZTQmxiSE5sSUdsbUlDaGllWFJsVDJabWMyVjBJRHdnTUNrZ2UxeHVJQ0FnSUdsbUlDaGthWElwSUdKNWRHVlBabVp6WlhRZ1BTQXdYRzRnSUNBZ1pXeHpaU0J5WlhSMWNtNGdMVEZjYmlBZ2ZWeHVYRzRnSUM4dklFNXZjbTFoYkdsNlpTQjJZV3hjYmlBZ2FXWWdLSFI1Y0dWdlppQjJZV3dnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ2RtRnNJRDBnUW5WbVptVnlMbVp5YjIwb2RtRnNMQ0JsYm1OdlpHbHVaeWxjYmlBZ2ZWeHVYRzRnSUM4dklFWnBibUZzYkhrc0lITmxZWEpqYUNCbGFYUm9aWElnYVc1a1pYaFBaaUFvYVdZZ1pHbHlJR2x6SUhSeWRXVXBJRzl5SUd4aGMzUkpibVJsZUU5bVhHNGdJR2xtSUNoQ2RXWm1aWEl1YVhOQ2RXWm1aWElvZG1Gc0tTa2dlMXh1SUNBZ0lDOHZJRk53WldOcFlXd2dZMkZ6WlRvZ2JHOXZhMmx1WnlCbWIzSWdaVzF3ZEhrZ2MzUnlhVzVuTDJKMVptWmxjaUJoYkhkaGVYTWdabUZwYkhOY2JpQWdJQ0JwWmlBb2RtRnNMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUMweFhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQmhjbkpoZVVsdVpHVjRUMllvWW5WbVptVnlMQ0IyWVd3c0lHSjVkR1ZQWm1aelpYUXNJR1Z1WTI5a2FXNW5MQ0JrYVhJcFhHNGdJSDBnWld4elpTQnBaaUFvZEhsd1pXOW1JSFpoYkNBOVBUMGdKMjUxYldKbGNpY3BJSHRjYmlBZ0lDQjJZV3dnUFNCMllXd2dKaUF3ZUVaR0lDOHZJRk5sWVhKamFDQm1iM0lnWVNCaWVYUmxJSFpoYkhWbElGc3dMVEkxTlYxY2JpQWdJQ0JwWmlBb1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRZ0ppWmNiaUFnSUNBZ0lDQWdkSGx3Wlc5bUlGVnBiblE0UVhKeVlYa3VjSEp2ZEc5MGVYQmxMbWx1WkdWNFQyWWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lHbG1JQ2hrYVhJcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlGVnBiblE0UVhKeVlYa3VjSEp2ZEc5MGVYQmxMbWx1WkdWNFQyWXVZMkZzYkNoaWRXWm1aWElzSUhaaGJDd2dZbmwwWlU5bVpuTmxkQ2xjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlZhVzUwT0VGeWNtRjVMbkJ5YjNSdmRIbHdaUzVzWVhOMFNXNWtaWGhQWmk1allXeHNLR0oxWm1abGNpd2dkbUZzTENCaWVYUmxUMlptYzJWMEtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdZWEp5WVhsSmJtUmxlRTltS0dKMVptWmxjaXdnV3lCMllXd2dYU3dnWW5sMFpVOW1abk5sZEN3Z1pXNWpiMlJwYm1jc0lHUnBjaWxjYmlBZ2ZWeHVYRzRnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0ozWmhiQ0J0ZFhOMElHSmxJSE4wY21sdVp5d2diblZ0WW1WeUlHOXlJRUoxWm1abGNpY3BYRzU5WEc1Y2JtWjFibU4wYVc5dUlHRnljbUY1U1c1a1pYaFBaaUFvWVhKeUxDQjJZV3dzSUdKNWRHVlBabVp6WlhRc0lHVnVZMjlrYVc1bkxDQmthWElwSUh0Y2JpQWdkbUZ5SUdsdVpHVjRVMmw2WlNBOUlERmNiaUFnZG1GeUlHRnlja3hsYm1kMGFDQTlJR0Z5Y2k1c1pXNW5kR2hjYmlBZ2RtRnlJSFpoYkV4bGJtZDBhQ0E5SUhaaGJDNXNaVzVuZEdoY2JseHVJQ0JwWmlBb1pXNWpiMlJwYm1jZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJR1Z1WTI5a2FXNW5JRDBnVTNSeWFXNW5LR1Z1WTI5a2FXNW5LUzUwYjB4dmQyVnlRMkZ6WlNncFhHNGdJQ0FnYVdZZ0tHVnVZMjlrYVc1bklEMDlQU0FuZFdOek1pY2dmSHdnWlc1amIyUnBibWNnUFQwOUlDZDFZM010TWljZ2ZIeGNiaUFnSUNBZ0lDQWdaVzVqYjJScGJtY2dQVDA5SUNkMWRHWXhObXhsSnlCOGZDQmxibU52WkdsdVp5QTlQVDBnSjNWMFppMHhObXhsSnlrZ2UxeHVJQ0FnSUNBZ2FXWWdLR0Z5Y2k1c1pXNW5kR2dnUENBeUlIeDhJSFpoYkM1c1pXNW5kR2dnUENBeUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXRNVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdhVzVrWlhoVGFYcGxJRDBnTWx4dUlDQWdJQ0FnWVhKeVRHVnVaM1JvSUM4OUlESmNiaUFnSUNBZ0lIWmhiRXhsYm1kMGFDQXZQU0F5WEc0Z0lDQWdJQ0JpZVhSbFQyWm1jMlYwSUM4OUlESmNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQnlaV0ZrSUNoaWRXWXNJR2twSUh0Y2JpQWdJQ0JwWmlBb2FXNWtaWGhUYVhwbElEMDlQU0F4S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWW5WbVcybGRYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJpZFdZdWNtVmhaRlZKYm5ReE5rSkZLR2tnS2lCcGJtUmxlRk5wZW1VcFhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2RtRnlJR2xjYmlBZ2FXWWdLR1JwY2lrZ2UxeHVJQ0FnSUhaaGNpQm1iM1Z1WkVsdVpHVjRJRDBnTFRGY2JpQWdJQ0JtYjNJZ0tHa2dQU0JpZVhSbFQyWm1jMlYwT3lCcElEd2dZWEp5VEdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lHbG1JQ2h5WldGa0tHRnljaXdnYVNrZ1BUMDlJSEpsWVdRb2RtRnNMQ0JtYjNWdVpFbHVaR1Y0SUQwOVBTQXRNU0EvSURBZ09pQnBJQzBnWm05MWJtUkpibVJsZUNrcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dadmRXNWtTVzVrWlhnZ1BUMDlJQzB4S1NCbWIzVnVaRWx1WkdWNElEMGdhVnh1SUNBZ0lDQWdJQ0JwWmlBb2FTQXRJR1p2ZFc1a1NXNWtaWGdnS3lBeElEMDlQU0IyWVd4TVpXNW5kR2dwSUhKbGRIVnliaUJtYjNWdVpFbHVaR1Y0SUNvZ2FXNWtaWGhUYVhwbFhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCcFppQW9abTkxYm1SSmJtUmxlQ0FoUFQwZ0xURXBJR2tnTFQwZ2FTQXRJR1p2ZFc1a1NXNWtaWGhjYmlBZ0lDQWdJQ0FnWm05MWJtUkpibVJsZUNBOUlDMHhYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHbG1JQ2hpZVhSbFQyWm1jMlYwSUNzZ2RtRnNUR1Z1WjNSb0lENGdZWEp5VEdWdVozUm9LU0JpZVhSbFQyWm1jMlYwSUQwZ1lYSnlUR1Z1WjNSb0lDMGdkbUZzVEdWdVozUm9YRzRnSUNBZ1ptOXlJQ2hwSUQwZ1lubDBaVTltWm5ObGREc2dhU0ErUFNBd095QnBMUzBwSUh0Y2JpQWdJQ0FnSUhaaGNpQm1iM1Z1WkNBOUlIUnlkV1ZjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR29nUFNBd095QnFJRHdnZG1Gc1RHVnVaM1JvT3lCcUt5c3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tISmxZV1FvWVhKeUxDQnBJQ3NnYWlrZ0lUMDlJSEpsWVdRb2RtRnNMQ0JxS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJR1p2ZFc1a0lEMGdabUZzYzJWY2JpQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCcFppQW9abTkxYm1RcElISmxkSFZ5YmlCcFhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUMweFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1YVc1amJIVmtaWE1nUFNCbWRXNWpkR2x2YmlCcGJtTnNkV1JsY3lBb2RtRnNMQ0JpZVhSbFQyWm1jMlYwTENCbGJtTnZaR2x1WnlrZ2UxeHVJQ0J5WlhSMWNtNGdkR2hwY3k1cGJtUmxlRTltS0haaGJDd2dZbmwwWlU5bVpuTmxkQ3dnWlc1amIyUnBibWNwSUNFOVBTQXRNVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExtbHVaR1Y0VDJZZ1BTQm1kVzVqZEdsdmJpQnBibVJsZUU5bUlDaDJZV3dzSUdKNWRHVlBabVp6WlhRc0lHVnVZMjlrYVc1bktTQjdYRzRnSUhKbGRIVnliaUJpYVdScGNtVmpkR2x2Ym1Gc1NXNWtaWGhQWmloMGFHbHpMQ0IyWVd3c0lHSjVkR1ZQWm1aelpYUXNJR1Z1WTI5a2FXNW5MQ0IwY25WbEtWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG14aGMzUkpibVJsZUU5bUlEMGdablZ1WTNScGIyNGdiR0Z6ZEVsdVpHVjRUMllnS0haaGJDd2dZbmwwWlU5bVpuTmxkQ3dnWlc1amIyUnBibWNwSUh0Y2JpQWdjbVYwZFhKdUlHSnBaR2x5WldOMGFXOXVZV3hKYm1SbGVFOW1LSFJvYVhNc0lIWmhiQ3dnWW5sMFpVOW1abk5sZEN3Z1pXNWpiMlJwYm1jc0lHWmhiSE5sS1Z4dWZWeHVYRzVtZFc1amRHbHZiaUJvWlhoWGNtbDBaU0FvWW5WbUxDQnpkSEpwYm1jc0lHOW1abk5sZEN3Z2JHVnVaM1JvS1NCN1hHNGdJRzltWm5ObGRDQTlJRTUxYldKbGNpaHZabVp6WlhRcElIeDhJREJjYmlBZ2RtRnlJSEpsYldGcGJtbHVaeUE5SUdKMVppNXNaVzVuZEdnZ0xTQnZabVp6WlhSY2JpQWdhV1lnS0NGc1pXNW5kR2dwSUh0Y2JpQWdJQ0JzWlc1bmRHZ2dQU0J5WlcxaGFXNXBibWRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JzWlc1bmRHZ2dQU0JPZFcxaVpYSW9iR1Z1WjNSb0tWeHVJQ0FnSUdsbUlDaHNaVzVuZEdnZ1BpQnlaVzFoYVc1cGJtY3BJSHRjYmlBZ0lDQWdJR3hsYm1kMGFDQTlJSEpsYldGcGJtbHVaMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzh2SUcxMWMzUWdZbVVnWVc0Z1pYWmxiaUJ1ZFcxaVpYSWdiMllnWkdsbmFYUnpYRzRnSUhaaGNpQnpkSEpNWlc0Z1BTQnpkSEpwYm1jdWJHVnVaM1JvWEc0Z0lHbG1JQ2h6ZEhKTVpXNGdKU0F5SUNFOVBTQXdLU0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0NkSmJuWmhiR2xrSUdobGVDQnpkSEpwYm1jbktWeHVYRzRnSUdsbUlDaHNaVzVuZEdnZ1BpQnpkSEpNWlc0Z0x5QXlLU0I3WEc0Z0lDQWdiR1Z1WjNSb0lEMGdjM1J5VEdWdUlDOGdNbHh1SUNCOVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdWdVozUm9PeUFySzJrcElIdGNiaUFnSUNCMllYSWdjR0Z5YzJWa0lEMGdjR0Z5YzJWSmJuUW9jM1J5YVc1bkxuTjFZbk4wY2locElDb2dNaXdnTWlrc0lERTJLVnh1SUNBZ0lHbG1JQ2hwYzA1aFRpaHdZWEp6WldRcEtTQnlaWFIxY200Z2FWeHVJQ0FnSUdKMVpsdHZabVp6WlhRZ0t5QnBYU0E5SUhCaGNuTmxaRnh1SUNCOVhHNGdJSEpsZEhWeWJpQnBYRzU5WEc1Y2JtWjFibU4wYVc5dUlIVjBaamhYY21sMFpTQW9ZblZtTENCemRISnBibWNzSUc5bVpuTmxkQ3dnYkdWdVozUm9LU0I3WEc0Z0lISmxkSFZ5YmlCaWJHbDBRblZtWm1WeUtIVjBaamhVYjBKNWRHVnpLSE4wY21sdVp5d2dZblZtTG14bGJtZDBhQ0F0SUc5bVpuTmxkQ2tzSUdKMVppd2diMlptYzJWMExDQnNaVzVuZEdncFhHNTlYRzVjYm1aMWJtTjBhVzl1SUdGelkybHBWM0pwZEdVZ0tHSjFaaXdnYzNSeWFXNW5MQ0J2Wm1aelpYUXNJR3hsYm1kMGFDa2dlMXh1SUNCeVpYUjFjbTRnWW14cGRFSjFabVpsY2loaGMyTnBhVlJ2UW5sMFpYTW9jM1J5YVc1bktTd2dZblZtTENCdlptWnpaWFFzSUd4bGJtZDBhQ2xjYm4xY2JseHVablZ1WTNScGIyNGdiR0YwYVc0eFYzSnBkR1VnS0dKMVppd2djM1J5YVc1bkxDQnZabVp6WlhRc0lHeGxibWQwYUNrZ2UxeHVJQ0J5WlhSMWNtNGdZWE5qYVdsWGNtbDBaU2hpZFdZc0lITjBjbWx1Wnl3Z2IyWm1jMlYwTENCc1pXNW5kR2dwWEc1OVhHNWNibVoxYm1OMGFXOXVJR0poYzJVMk5GZHlhWFJsSUNoaWRXWXNJSE4wY21sdVp5d2diMlptYzJWMExDQnNaVzVuZEdncElIdGNiaUFnY21WMGRYSnVJR0pzYVhSQ2RXWm1aWElvWW1GelpUWTBWRzlDZVhSbGN5aHpkSEpwYm1jcExDQmlkV1lzSUc5bVpuTmxkQ3dnYkdWdVozUm9LVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjFZM015VjNKcGRHVWdLR0oxWml3Z2MzUnlhVzVuTENCdlptWnpaWFFzSUd4bGJtZDBhQ2tnZTF4dUlDQnlaWFIxY200Z1lteHBkRUoxWm1abGNpaDFkR1l4Tm14bFZHOUNlWFJsY3loemRISnBibWNzSUdKMVppNXNaVzVuZEdnZ0xTQnZabVp6WlhRcExDQmlkV1lzSUc5bVpuTmxkQ3dnYkdWdVozUm9LVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuZHlhWFJsSUQwZ1puVnVZM1JwYjI0Z2QzSnBkR1VnS0hOMGNtbHVaeXdnYjJabWMyVjBMQ0JzWlc1bmRHZ3NJR1Z1WTI5a2FXNW5LU0I3WEc0Z0lDOHZJRUoxWm1abGNpTjNjbWwwWlNoemRISnBibWNwWEc0Z0lHbG1JQ2h2Wm1aelpYUWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUdWdVkyOWthVzVuSUQwZ0ozVjBaamduWEc0Z0lDQWdiR1Z1WjNSb0lEMGdkR2hwY3k1c1pXNW5kR2hjYmlBZ0lDQnZabVp6WlhRZ1BTQXdYRzRnSUM4dklFSjFabVpsY2lOM2NtbDBaU2h6ZEhKcGJtY3NJR1Z1WTI5a2FXNW5LVnh1SUNCOUlHVnNjMlVnYVdZZ0tHeGxibWQwYUNBOVBUMGdkVzVrWldacGJtVmtJQ1ltSUhSNWNHVnZaaUJ2Wm1aelpYUWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnWlc1amIyUnBibWNnUFNCdlptWnpaWFJjYmlBZ0lDQnNaVzVuZEdnZ1BTQjBhR2x6TG14bGJtZDBhRnh1SUNBZ0lHOW1abk5sZENBOUlEQmNiaUFnTHk4Z1FuVm1abVZ5STNkeWFYUmxLSE4wY21sdVp5d2diMlptYzJWMFd5d2diR1Z1WjNSb1hWc3NJR1Z1WTI5a2FXNW5YU2xjYmlBZ2ZTQmxiSE5sSUdsbUlDaHBjMFpwYm1sMFpTaHZabVp6WlhRcEtTQjdYRzRnSUNBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0FnSUdsbUlDaHBjMFpwYm1sMFpTaHNaVzVuZEdncEtTQjdYRzRnSUNBZ0lDQnNaVzVuZEdnZ1BTQnNaVzVuZEdnZ2ZDQXdYRzRnSUNBZ0lDQnBaaUFvWlc1amIyUnBibWNnUFQwOUlIVnVaR1ZtYVc1bFpDa2daVzVqYjJScGJtY2dQU0FuZFhSbU9DZGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWlc1amIyUnBibWNnUFNCc1pXNW5kR2hjYmlBZ0lDQWdJR3hsYm1kMGFDQTlJSFZ1WkdWbWFXNWxaRnh1SUNBZ0lIMWNiaUFnTHk4Z2JHVm5ZV041SUhkeWFYUmxLSE4wY21sdVp5d2daVzVqYjJScGJtY3NJRzltWm5ObGRDd2diR1Z1WjNSb0tTQXRJSEpsYlc5MlpTQnBiaUIyTUM0eE0xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY2JpQWdJQ0FnSUNkQ2RXWm1aWEl1ZDNKcGRHVW9jM1J5YVc1bkxDQmxibU52WkdsdVp5d2diMlptYzJWMFd5d2diR1Z1WjNSb1hTa2dhWE1nYm04Z2JHOXVaMlZ5SUhOMWNIQnZjblJsWkNkY2JpQWdJQ0FwWEc0Z0lIMWNibHh1SUNCMllYSWdjbVZ0WVdsdWFXNW5JRDBnZEdocGN5NXNaVzVuZEdnZ0xTQnZabVp6WlhSY2JpQWdhV1lnS0d4bGJtZDBhQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJR3hsYm1kMGFDQStJSEpsYldGcGJtbHVaeWtnYkdWdVozUm9JRDBnY21WdFlXbHVhVzVuWEc1Y2JpQWdhV1lnS0NoemRISnBibWN1YkdWdVozUm9JRDRnTUNBbUppQW9iR1Z1WjNSb0lEd2dNQ0I4ZkNCdlptWnpaWFFnUENBd0tTa2dmSHdnYjJabWMyVjBJRDRnZEdocGN5NXNaVzVuZEdncElIdGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1VtRnVaMlZGY25KdmNpZ25RWFIwWlcxd2RDQjBieUIzY21sMFpTQnZkWFJ6YVdSbElHSjFabVpsY2lCaWIzVnVaSE1uS1Z4dUlDQjlYRzVjYmlBZ2FXWWdLQ0ZsYm1OdlpHbHVaeWtnWlc1amIyUnBibWNnUFNBbmRYUm1PQ2RjYmx4dUlDQjJZWElnYkc5M1pYSmxaRU5oYzJVZ1BTQm1ZV3h6WlZ4dUlDQm1iM0lnS0RzN0tTQjdYRzRnSUNBZ2MzZHBkR05vSUNobGJtTnZaR2x1WnlrZ2UxeHVJQ0FnSUNBZ1kyRnpaU0FuYUdWNEp6cGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHaGxlRmR5YVhSbEtIUm9hWE1zSUhOMGNtbHVaeXdnYjJabWMyVjBMQ0JzWlc1bmRHZ3BYRzVjYmlBZ0lDQWdJR05oYzJVZ0ozVjBaamduT2x4dUlDQWdJQ0FnWTJGelpTQW5kWFJtTFRnbk9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RYUm1PRmR5YVhSbEtIUm9hWE1zSUhOMGNtbHVaeXdnYjJabWMyVjBMQ0JzWlc1bmRHZ3BYRzVjYmlBZ0lDQWdJR05oYzJVZ0oyRnpZMmxwSnpwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGelkybHBWM0pwZEdVb2RHaHBjeXdnYzNSeWFXNW5MQ0J2Wm1aelpYUXNJR3hsYm1kMGFDbGNibHh1SUNBZ0lDQWdZMkZ6WlNBbmJHRjBhVzR4SnpwY2JpQWdJQ0FnSUdOaGMyVWdKMkpwYm1GeWVTYzZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnNZWFJwYmpGWGNtbDBaU2gwYUdsekxDQnpkSEpwYm1jc0lHOW1abk5sZEN3Z2JHVnVaM1JvS1Z4dVhHNGdJQ0FnSUNCallYTmxJQ2RpWVhObE5qUW5PbHh1SUNBZ0lDQWdJQ0F2THlCWFlYSnVhVzVuT2lCdFlYaE1aVzVuZEdnZ2JtOTBJSFJoYTJWdUlHbHVkRzhnWVdOamIzVnVkQ0JwYmlCaVlYTmxOalJYY21sMFpWeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ltRnpaVFkwVjNKcGRHVW9kR2hwY3l3Z2MzUnlhVzVuTENCdlptWnpaWFFzSUd4bGJtZDBhQ2xjYmx4dUlDQWdJQ0FnWTJGelpTQW5kV056TWljNlhHNGdJQ0FnSUNCallYTmxJQ2QxWTNNdE1pYzZYRzRnSUNBZ0lDQmpZWE5sSUNkMWRHWXhObXhsSnpwY2JpQWdJQ0FnSUdOaGMyVWdKM1YwWmkweE5teGxKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFZqY3pKWGNtbDBaU2gwYUdsekxDQnpkSEpwYm1jc0lHOW1abk5sZEN3Z2JHVnVaM1JvS1Z4dVhHNGdJQ0FnSUNCa1pXWmhkV3gwT2x4dUlDQWdJQ0FnSUNCcFppQW9iRzkzWlhKbFpFTmhjMlVwSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0oxVnVhMjV2ZDI0Z1pXNWpiMlJwYm1jNklDY2dLeUJsYm1OdlpHbHVaeWxjYmlBZ0lDQWdJQ0FnWlc1amIyUnBibWNnUFNBb0p5Y2dLeUJsYm1OdlpHbHVaeWt1ZEc5TWIzZGxja05oYzJVb0tWeHVJQ0FnSUNBZ0lDQnNiM2RsY21Wa1EyRnpaU0E5SUhSeWRXVmNiaUFnSUNCOVhHNGdJSDFjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTBiMHBUVDA0Z1BTQm1kVzVqZEdsdmJpQjBiMHBUVDA0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZTF4dUlDQWdJSFI1Y0dVNklDZENkV1ptWlhJbkxGeHVJQ0FnSUdSaGRHRTZJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXpiR2xqWlM1allXeHNLSFJvYVhNdVgyRnljaUI4ZkNCMGFHbHpMQ0F3S1Z4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlHSmhjMlUyTkZOc2FXTmxJQ2hpZFdZc0lITjBZWEowTENCbGJtUXBJSHRjYmlBZ2FXWWdLSE4wWVhKMElEMDlQU0F3SUNZbUlHVnVaQ0E5UFQwZ1luVm1MbXhsYm1kMGFDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCaVlYTmxOalF1Wm5KdmJVSjVkR1ZCY25KaGVTaGlkV1lwWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnY21WMGRYSnVJR0poYzJVMk5DNW1jbTl0UW5sMFpVRnljbUY1S0dKMVppNXpiR2xqWlNoemRHRnlkQ3dnWlc1a0tTbGNiaUFnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUIxZEdZNFUyeHBZMlVnS0dKMVppd2djM1JoY25Rc0lHVnVaQ2tnZTF4dUlDQmxibVFnUFNCTllYUm9MbTFwYmloaWRXWXViR1Z1WjNSb0xDQmxibVFwWEc0Z0lIWmhjaUJ5WlhNZ1BTQmJYVnh1WEc0Z0lIWmhjaUJwSUQwZ2MzUmhjblJjYmlBZ2QyaHBiR1VnS0drZ1BDQmxibVFwSUh0Y2JpQWdJQ0IyWVhJZ1ptbHljM1JDZVhSbElEMGdZblZtVzJsZFhHNGdJQ0FnZG1GeUlHTnZaR1ZRYjJsdWRDQTlJRzUxYkd4Y2JpQWdJQ0IyWVhJZ1lubDBaWE5RWlhKVFpYRjFaVzVqWlNBOUlDaG1hWEp6ZEVKNWRHVWdQaUF3ZUVWR0tTQS9JRFJjYmlBZ0lDQWdJRG9nS0dacGNuTjBRbmwwWlNBK0lEQjRSRVlwSUQ4Z00xeHVJQ0FnSUNBZ09pQW9abWx5YzNSQ2VYUmxJRDRnTUhoQ1Jpa2dQeUF5WEc0Z0lDQWdJQ0E2SURGY2JseHVJQ0FnSUdsbUlDaHBJQ3NnWW5sMFpYTlFaWEpUWlhGMVpXNWpaU0E4UFNCbGJtUXBJSHRjYmlBZ0lDQWdJSFpoY2lCelpXTnZibVJDZVhSbExDQjBhR2x5WkVKNWRHVXNJR1p2ZFhKMGFFSjVkR1VzSUhSbGJYQkRiMlJsVUc5cGJuUmNibHh1SUNBZ0lDQWdjM2RwZEdOb0lDaGllWFJsYzFCbGNsTmxjWFZsYm1ObEtTQjdYRzRnSUNBZ0lDQWdJR05oYzJVZ01UcGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb1ptbHljM1JDZVhSbElEd2dNSGc0TUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5a1pWQnZhVzUwSUQwZ1ptbHljM1JDZVhSbFhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ0lDQWdJR05oYzJVZ01qcGNiaUFnSUNBZ0lDQWdJQ0J6WldOdmJtUkNlWFJsSUQwZ1luVm1XMmtnS3lBeFhWeHVJQ0FnSUNBZ0lDQWdJR2xtSUNnb2MyVmpiMjVrUW5sMFpTQW1JREI0UXpBcElEMDlQU0F3ZURnd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMFpXMXdRMjlrWlZCdmFXNTBJRDBnS0dacGNuTjBRbmwwWlNBbUlEQjRNVVlwSUR3OElEQjROaUI4SUNoelpXTnZibVJDZVhSbElDWWdNSGd6UmlsY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMFpXMXdRMjlrWlZCdmFXNTBJRDRnTUhnM1Jpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMlJsVUc5cGJuUWdQU0IwWlcxd1EyOWtaVkJ2YVc1MFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lHTmhjMlVnTXpwY2JpQWdJQ0FnSUNBZ0lDQnpaV052Ym1SQ2VYUmxJRDBnWW5WbVcya2dLeUF4WFZ4dUlDQWdJQ0FnSUNBZ0lIUm9hWEprUW5sMFpTQTlJR0oxWmx0cElDc2dNbDFjYmlBZ0lDQWdJQ0FnSUNCcFppQW9LSE5sWTI5dVpFSjVkR1VnSmlBd2VFTXdLU0E5UFQwZ01IZzRNQ0FtSmlBb2RHaHBjbVJDZVhSbElDWWdNSGhETUNrZ1BUMDlJREI0T0RBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSbGJYQkRiMlJsVUc5cGJuUWdQU0FvWm1seWMzUkNlWFJsSUNZZ01IaEdLU0E4UENBd2VFTWdmQ0FvYzJWamIyNWtRbmwwWlNBbUlEQjRNMFlwSUR3OElEQjROaUI4SUNoMGFHbHlaRUo1ZEdVZ0ppQXdlRE5HS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSbGJYQkRiMlJsVUc5cGJuUWdQaUF3ZURkR1JpQW1KaUFvZEdWdGNFTnZaR1ZRYjJsdWRDQThJREI0UkRnd01DQjhmQ0IwWlcxd1EyOWtaVkJ2YVc1MElENGdNSGhFUmtaR0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMlJsVUc5cGJuUWdQU0IwWlcxd1EyOWtaVkJ2YVc1MFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lHTmhjMlVnTkRwY2JpQWdJQ0FnSUNBZ0lDQnpaV052Ym1SQ2VYUmxJRDBnWW5WbVcya2dLeUF4WFZ4dUlDQWdJQ0FnSUNBZ0lIUm9hWEprUW5sMFpTQTlJR0oxWmx0cElDc2dNbDFjYmlBZ0lDQWdJQ0FnSUNCbWIzVnlkR2hDZVhSbElEMGdZblZtVzJrZ0t5QXpYVnh1SUNBZ0lDQWdJQ0FnSUdsbUlDZ29jMlZqYjI1a1FubDBaU0FtSURCNFF6QXBJRDA5UFNBd2VEZ3dJQ1ltSUNoMGFHbHlaRUo1ZEdVZ0ppQXdlRU13S1NBOVBUMGdNSGc0TUNBbUppQW9abTkxY25Sb1FubDBaU0FtSURCNFF6QXBJRDA5UFNBd2VEZ3dLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaVzF3UTI5a1pWQnZhVzUwSUQwZ0tHWnBjbk4wUW5sMFpTQW1JREI0UmlrZ1BEd2dNSGd4TWlCOElDaHpaV052Ym1SQ2VYUmxJQ1lnTUhnelJpa2dQRHdnTUhoRElId2dLSFJvYVhKa1FubDBaU0FtSURCNE0wWXBJRHc4SURCNE5pQjhJQ2htYjNWeWRHaENlWFJsSUNZZ01IZ3pSaWxjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwWlcxd1EyOWtaVkJ2YVc1MElENGdNSGhHUmtaR0lDWW1JSFJsYlhCRGIyUmxVRzlwYm5RZ1BDQXdlREV4TURBd01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMlJsVUc5cGJuUWdQU0IwWlcxd1EyOWtaVkJ2YVc1MFhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaGpiMlJsVUc5cGJuUWdQVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQWdJQzh2SUhkbElHUnBaQ0J1YjNRZ1oyVnVaWEpoZEdVZ1lTQjJZV3hwWkNCamIyUmxVRzlwYm5RZ2MyOGdhVzV6WlhKMElHRmNiaUFnSUNBZ0lDOHZJSEpsY0d4aFkyVnRaVzUwSUdOb1lYSWdLRlVyUmtaR1JDa2dZVzVrSUdGa2RtRnVZMlVnYjI1c2VTQXhJR0o1ZEdWY2JpQWdJQ0FnSUdOdlpHVlFiMmx1ZENBOUlEQjRSa1pHUkZ4dUlDQWdJQ0FnWW5sMFpYTlFaWEpUWlhGMVpXNWpaU0E5SURGY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0dOdlpHVlFiMmx1ZENBK0lEQjRSa1pHUmlrZ2UxeHVJQ0FnSUNBZ0x5OGdaVzVqYjJSbElIUnZJSFYwWmpFMklDaHpkWEp5YjJkaGRHVWdjR0ZwY2lCa1lXNWpaU2xjYmlBZ0lDQWdJR052WkdWUWIybHVkQ0F0UFNBd2VERXdNREF3WEc0Z0lDQWdJQ0J5WlhNdWNIVnphQ2hqYjJSbFVHOXBiblFnUGo0K0lERXdJQ1lnTUhnelJrWWdmQ0F3ZUVRNE1EQXBYRzRnSUNBZ0lDQmpiMlJsVUc5cGJuUWdQU0F3ZUVSRE1EQWdmQ0JqYjJSbFVHOXBiblFnSmlBd2VETkdSbHh1SUNBZ0lIMWNibHh1SUNBZ0lISmxjeTV3ZFhOb0tHTnZaR1ZRYjJsdWRDbGNiaUFnSUNCcElDczlJR0o1ZEdWelVHVnlVMlZ4ZFdWdVkyVmNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQmtaV052WkdWRGIyUmxVRzlwYm5SelFYSnlZWGtvY21WektWeHVmVnh1WEc0dkx5QkNZWE5sWkNCdmJpQm9kSFJ3T2k4dmMzUmhZMnR2ZG1WeVpteHZkeTVqYjIwdllTOHlNamMwTnpJM01pODJPREEzTkRJc0lIUm9aU0JpY205M2MyVnlJSGRwZEdoY2JpOHZJSFJvWlNCc2IzZGxjM1FnYkdsdGFYUWdhWE1nUTJoeWIyMWxMQ0IzYVhSb0lEQjRNVEF3TURBZ1lYSm5jeTVjYmk4dklGZGxJR2R2SURFZ2JXRm5ibWwwZFdSbElHeGxjM01zSUdadmNpQnpZV1psZEhsY2JuWmhjaUJOUVZoZlFWSkhWVTFGVGxSVFgweEZUa2RVU0NBOUlEQjRNVEF3TUZ4dVhHNW1kVzVqZEdsdmJpQmtaV052WkdWRGIyUmxVRzlwYm5SelFYSnlZWGtnS0dOdlpHVlFiMmx1ZEhNcElIdGNiaUFnZG1GeUlHeGxiaUE5SUdOdlpHVlFiMmx1ZEhNdWJHVnVaM1JvWEc0Z0lHbG1JQ2hzWlc0Z1BEMGdUVUZZWDBGU1IxVk5SVTVVVTE5TVJVNUhWRWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdVM1J5YVc1bkxtWnliMjFEYUdGeVEyOWtaUzVoY0hCc2VTaFRkSEpwYm1jc0lHTnZaR1ZRYjJsdWRITXBJQzh2SUdGMmIybGtJR1Y0ZEhKaElITnNhV05sS0NsY2JpQWdmVnh1WEc0Z0lDOHZJRVJsWTI5a1pTQnBiaUJqYUhWdWEzTWdkRzhnWVhadmFXUWdYQ0pqWVd4c0lITjBZV05ySUhOcGVtVWdaWGhqWldWa1pXUmNJaTVjYmlBZ2RtRnlJSEpsY3lBOUlDY25YRzRnSUhaaGNpQnBJRDBnTUZ4dUlDQjNhR2xzWlNBb2FTQThJR3hsYmlrZ2UxeHVJQ0FnSUhKbGN5QXJQU0JUZEhKcGJtY3Vabkp2YlVOb1lYSkRiMlJsTG1Gd2NHeDVLRnh1SUNBZ0lDQWdVM1J5YVc1bkxGeHVJQ0FnSUNBZ1kyOWtaVkJ2YVc1MGN5NXpiR2xqWlNocExDQnBJQ3M5SUUxQldGOUJVa2RWVFVWT1ZGTmZURVZPUjFSSUtWeHVJQ0FnSUNsY2JpQWdmVnh1SUNCeVpYUjFjbTRnY21WelhHNTlYRzVjYm1aMWJtTjBhVzl1SUdGelkybHBVMnhwWTJVZ0tHSjFaaXdnYzNSaGNuUXNJR1Z1WkNrZ2UxeHVJQ0IyWVhJZ2NtVjBJRDBnSnlkY2JpQWdaVzVrSUQwZ1RXRjBhQzV0YVc0b1luVm1MbXhsYm1kMGFDd2daVzVrS1Z4dVhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNCemRHRnlkRHNnYVNBOElHVnVaRHNnS3l0cEtTQjdYRzRnSUNBZ2NtVjBJQ3M5SUZOMGNtbHVaeTVtY205dFEyaGhja052WkdVb1luVm1XMmxkSUNZZ01IZzNSaWxjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdjbVYwWEc1OVhHNWNibVoxYm1OMGFXOXVJR3hoZEdsdU1WTnNhV05sSUNoaWRXWXNJSE4wWVhKMExDQmxibVFwSUh0Y2JpQWdkbUZ5SUhKbGRDQTlJQ2NuWEc0Z0lHVnVaQ0E5SUUxaGRHZ3ViV2x1S0dKMVppNXNaVzVuZEdnc0lHVnVaQ2xjYmx4dUlDQm1iM0lnS0haaGNpQnBJRDBnYzNSaGNuUTdJR2tnUENCbGJtUTdJQ3NyYVNrZ2UxeHVJQ0FnSUhKbGRDQXJQU0JUZEhKcGJtY3Vabkp2YlVOb1lYSkRiMlJsS0dKMVpsdHBYU2xjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdjbVYwWEc1OVhHNWNibVoxYm1OMGFXOXVJR2hsZUZOc2FXTmxJQ2hpZFdZc0lITjBZWEowTENCbGJtUXBJSHRjYmlBZ2RtRnlJR3hsYmlBOUlHSjFaaTVzWlc1bmRHaGNibHh1SUNCcFppQW9JWE4wWVhKMElIeDhJSE4wWVhKMElEd2dNQ2tnYzNSaGNuUWdQU0F3WEc0Z0lHbG1JQ2doWlc1a0lIeDhJR1Z1WkNBOElEQWdmSHdnWlc1a0lENGdiR1Z1S1NCbGJtUWdQU0JzWlc1Y2JseHVJQ0IyWVhJZ2IzVjBJRDBnSnlkY2JpQWdabTl5SUNoMllYSWdhU0E5SUhOMFlYSjBPeUJwSUR3Z1pXNWtPeUFySzJrcElIdGNiaUFnSUNCdmRYUWdLejBnZEc5SVpYZ29ZblZtVzJsZEtWeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCdmRYUmNibjFjYmx4dVpuVnVZM1JwYjI0Z2RYUm1NVFpzWlZOc2FXTmxJQ2hpZFdZc0lITjBZWEowTENCbGJtUXBJSHRjYmlBZ2RtRnlJR0o1ZEdWeklEMGdZblZtTG5Oc2FXTmxLSE4wWVhKMExDQmxibVFwWEc0Z0lIWmhjaUJ5WlhNZ1BTQW5KMXh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHSjVkR1Z6TG14bGJtZDBhRHNnYVNBclBTQXlLU0I3WEc0Z0lDQWdjbVZ6SUNzOUlGTjBjbWx1Wnk1bWNtOXRRMmhoY2tOdlpHVW9ZbmwwWlhOYmFWMGdLeUJpZVhSbGMxdHBJQ3NnTVYwZ0tpQXlOVFlwWEc0Z0lIMWNiaUFnY21WMGRYSnVJSEpsYzF4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbk5zYVdObElEMGdablZ1WTNScGIyNGdjMnhwWTJVZ0tITjBZWEowTENCbGJtUXBJSHRjYmlBZ2RtRnlJR3hsYmlBOUlIUm9hWE11YkdWdVozUm9YRzRnSUhOMFlYSjBJRDBnZm41emRHRnlkRnh1SUNCbGJtUWdQU0JsYm1RZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUd4bGJpQTZJSDUrWlc1a1hHNWNiaUFnYVdZZ0tITjBZWEowSUR3Z01Da2dlMXh1SUNBZ0lITjBZWEowSUNzOUlHeGxibHh1SUNBZ0lHbG1JQ2h6ZEdGeWRDQThJREFwSUhOMFlYSjBJRDBnTUZ4dUlDQjlJR1ZzYzJVZ2FXWWdLSE4wWVhKMElENGdiR1Z1S1NCN1hHNGdJQ0FnYzNSaGNuUWdQU0JzWlc1Y2JpQWdmVnh1WEc0Z0lHbG1JQ2hsYm1RZ1BDQXdLU0I3WEc0Z0lDQWdaVzVrSUNzOUlHeGxibHh1SUNBZ0lHbG1JQ2hsYm1RZ1BDQXdLU0JsYm1RZ1BTQXdYRzRnSUgwZ1pXeHpaU0JwWmlBb1pXNWtJRDRnYkdWdUtTQjdYRzRnSUNBZ1pXNWtJRDBnYkdWdVhHNGdJSDFjYmx4dUlDQnBaaUFvWlc1a0lEd2djM1JoY25RcElHVnVaQ0E5SUhOMFlYSjBYRzVjYmlBZ2RtRnlJRzVsZDBKMVpseHVJQ0JwWmlBb1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRcElIdGNiaUFnSUNCdVpYZENkV1lnUFNCMGFHbHpMbk4xWW1GeWNtRjVLSE4wWVhKMExDQmxibVFwWEc0Z0lDQWdibVYzUW5WbUxsOWZjSEp2ZEc5Zlh5QTlJRUoxWm1abGNpNXdjbTkwYjNSNWNHVmNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQjJZWElnYzJ4cFkyVk1aVzRnUFNCbGJtUWdMU0J6ZEdGeWRGeHVJQ0FnSUc1bGQwSjFaaUE5SUc1bGR5QkNkV1ptWlhJb2MyeHBZMlZNWlc0c0lIVnVaR1ZtYVc1bFpDbGNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElITnNhV05sVEdWdU95QXJLMmtwSUh0Y2JpQWdJQ0FnSUc1bGQwSjFabHRwWFNBOUlIUm9hWE5iYVNBcklITjBZWEowWFZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ1WlhkQ2RXWmNibjFjYmx4dUx5cGNiaUFxSUU1bFpXUWdkRzhnYldGclpTQnpkWEpsSUhSb1lYUWdZblZtWm1WeUlHbHpiaWQwSUhSeWVXbHVaeUIwYnlCM2NtbDBaU0J2ZFhRZ2IyWWdZbTkxYm1SekxseHVJQ292WEc1bWRXNWpkR2x2YmlCamFHVmphMDltWm5ObGRDQW9iMlptYzJWMExDQmxlSFFzSUd4bGJtZDBhQ2tnZTF4dUlDQnBaaUFvS0c5bVpuTmxkQ0FsSURFcElDRTlQU0F3SUh4OElHOW1abk5sZENBOElEQXBJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkdlptWnpaWFFnYVhNZ2JtOTBJSFZwYm5RbktWeHVJQ0JwWmlBb2IyWm1jMlYwSUNzZ1pYaDBJRDRnYkdWdVozUm9LU0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2lnblZISjVhVzVuSUhSdklHRmpZMlZ6Y3lCaVpYbHZibVFnWW5WbVptVnlJR3hsYm1kMGFDY3BYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRlZKYm5STVJTQTlJR1oxYm1OMGFXOXVJSEpsWVdSVlNXNTBURVVnS0c5bVpuTmxkQ3dnWW5sMFpVeGxibWQwYUN3Z2JtOUJjM05sY25RcElIdGNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQmllWFJsVEdWdVozUm9JRDBnWW5sMFpVeGxibWQwYUNCOElEQmNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dZMmhsWTJ0UFptWnpaWFFvYjJabWMyVjBMQ0JpZVhSbFRHVnVaM1JvTENCMGFHbHpMbXhsYm1kMGFDbGNibHh1SUNCMllYSWdkbUZzSUQwZ2RHaHBjMXR2Wm1aelpYUmRYRzRnSUhaaGNpQnRkV3dnUFNBeFhHNGdJSFpoY2lCcElEMGdNRnh1SUNCM2FHbHNaU0FvS3l0cElEd2dZbmwwWlV4bGJtZDBhQ0FtSmlBb2JYVnNJQ285SURCNE1UQXdLU2tnZTF4dUlDQWdJSFpoYkNBclBTQjBhR2x6VzI5bVpuTmxkQ0FySUdsZElDb2diWFZzWEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnZG1Gc1hHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpGVkpiblJDUlNBOUlHWjFibU4wYVc5dUlISmxZV1JWU1c1MFFrVWdLRzltWm5ObGRDd2dZbmwwWlV4bGJtZDBhQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCaWVYUmxUR1Z1WjNSb0lEMGdZbmwwWlV4bGJtZDBhQ0I4SURCY2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ2UxeHVJQ0FnSUdOb1pXTnJUMlptYzJWMEtHOW1abk5sZEN3Z1lubDBaVXhsYm1kMGFDd2dkR2hwY3k1c1pXNW5kR2dwWEc0Z0lIMWNibHh1SUNCMllYSWdkbUZzSUQwZ2RHaHBjMXR2Wm1aelpYUWdLeUF0TFdKNWRHVk1aVzVuZEdoZFhHNGdJSFpoY2lCdGRXd2dQU0F4WEc0Z0lIZG9hV3hsSUNoaWVYUmxUR1Z1WjNSb0lENGdNQ0FtSmlBb2JYVnNJQ285SURCNE1UQXdLU2tnZTF4dUlDQWdJSFpoYkNBclBTQjBhR2x6VzI5bVpuTmxkQ0FySUMwdFlubDBaVXhsYm1kMGFGMGdLaUJ0ZFd4Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCMllXeGNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1eVpXRmtWVWx1ZERnZ1BTQm1kVzVqZEdsdmJpQnlaV0ZrVlVsdWREZ2dLRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnWTJobFkydFBabVp6WlhRb2IyWm1jMlYwTENBeExDQjBhR2x6TG14bGJtZDBhQ2xjYmlBZ2NtVjBkWEp1SUhSb2FYTmJiMlptYzJWMFhWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5KbFlXUlZTVzUwTVRaTVJTQTlJR1oxYm1OMGFXOXVJSEpsWVdSVlNXNTBNVFpNUlNBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJRElzSUhSb2FYTXViR1Z1WjNSb0tWeHVJQ0J5WlhSMWNtNGdkR2hwYzF0dlptWnpaWFJkSUh3Z0tIUm9hWE5iYjJabWMyVjBJQ3NnTVYwZ1BEd2dPQ2xjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNXlaV0ZrVlVsdWRERTJRa1VnUFNCbWRXNWpkR2x2YmlCeVpXRmtWVWx1ZERFMlFrVWdLRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnWTJobFkydFBabVp6WlhRb2IyWm1jMlYwTENBeUxDQjBhR2x6TG14bGJtZDBhQ2xjYmlBZ2NtVjBkWEp1SUNoMGFHbHpXMjltWm5ObGRGMGdQRHdnT0NrZ2ZDQjBhR2x6VzI5bVpuTmxkQ0FySURGZFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpGVkpiblF6TWt4RklEMGdablZ1WTNScGIyNGdjbVZoWkZWSmJuUXpNa3hGSUNodlptWnpaWFFzSUc1dlFYTnpaWEowS1NCN1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElHTm9aV05yVDJabWMyVjBLRzltWm5ObGRDd2dOQ3dnZEdocGN5NXNaVzVuZEdncFhHNWNiaUFnY21WMGRYSnVJQ2dvZEdocGMxdHZabVp6WlhSZEtTQjhYRzRnSUNBZ0lDQW9kR2hwYzF0dlptWnpaWFFnS3lBeFhTQThQQ0E0S1NCOFhHNGdJQ0FnSUNBb2RHaHBjMXR2Wm1aelpYUWdLeUF5WFNBOFBDQXhOaWtwSUN0Y2JpQWdJQ0FnSUNoMGFHbHpXMjltWm5ObGRDQXJJRE5kSUNvZ01IZ3hNREF3TURBd0tWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5KbFlXUlZTVzUwTXpKQ1JTQTlJR1oxYm1OMGFXOXVJSEpsWVdSVlNXNTBNekpDUlNBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJRFFzSUhSb2FYTXViR1Z1WjNSb0tWeHVYRzRnSUhKbGRIVnliaUFvZEdocGMxdHZabVp6WlhSZElDb2dNSGd4TURBd01EQXdLU0FyWEc0Z0lDQWdLQ2gwYUdselcyOW1abk5sZENBcklERmRJRHc4SURFMktTQjhYRzRnSUNBZ0tIUm9hWE5iYjJabWMyVjBJQ3NnTWwwZ1BEd2dPQ2tnZkZ4dUlDQWdJSFJvYVhOYmIyWm1jMlYwSUNzZ00xMHBYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRWx1ZEV4RklEMGdablZ1WTNScGIyNGdjbVZoWkVsdWRFeEZJQ2h2Wm1aelpYUXNJR0o1ZEdWTVpXNW5kR2dzSUc1dlFYTnpaWEowS1NCN1hHNGdJRzltWm5ObGRDQTlJRzltWm5ObGRDQjhJREJjYmlBZ1lubDBaVXhsYm1kMGFDQTlJR0o1ZEdWTVpXNW5kR2dnZkNBd1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElHTm9aV05yVDJabWMyVjBLRzltWm5ObGRDd2dZbmwwWlV4bGJtZDBhQ3dnZEdocGN5NXNaVzVuZEdncFhHNWNiaUFnZG1GeUlIWmhiQ0E5SUhSb2FYTmJiMlptYzJWMFhWeHVJQ0IyWVhJZ2JYVnNJRDBnTVZ4dUlDQjJZWElnYVNBOUlEQmNiaUFnZDJocGJHVWdLQ3NyYVNBOElHSjVkR1ZNWlc1bmRHZ2dKaVlnS0cxMWJDQXFQU0F3ZURFd01Da3BJSHRjYmlBZ0lDQjJZV3dnS3owZ2RHaHBjMXR2Wm1aelpYUWdLeUJwWFNBcUlHMTFiRnh1SUNCOVhHNGdJRzExYkNBcVBTQXdlRGd3WEc1Y2JpQWdhV1lnS0haaGJDQStQU0J0ZFd3cElIWmhiQ0F0UFNCTllYUm9MbkJ2ZHlneUxDQTRJQ29nWW5sMFpVeGxibWQwYUNsY2JseHVJQ0J5WlhSMWNtNGdkbUZzWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVsdWRFSkZJRDBnWm5WdVkzUnBiMjRnY21WaFpFbHVkRUpGSUNodlptWnpaWFFzSUdKNWRHVk1aVzVuZEdnc0lHNXZRWE56WlhKMEtTQjdYRzRnSUc5bVpuTmxkQ0E5SUc5bVpuTmxkQ0I4SURCY2JpQWdZbmwwWlV4bGJtZDBhQ0E5SUdKNWRHVk1aVzVuZEdnZ2ZDQXdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJR05vWldOclQyWm1jMlYwS0c5bVpuTmxkQ3dnWW5sMFpVeGxibWQwYUN3Z2RHaHBjeTVzWlc1bmRHZ3BYRzVjYmlBZ2RtRnlJR2tnUFNCaWVYUmxUR1Z1WjNSb1hHNGdJSFpoY2lCdGRXd2dQU0F4WEc0Z0lIWmhjaUIyWVd3Z1BTQjBhR2x6VzI5bVpuTmxkQ0FySUMwdGFWMWNiaUFnZDJocGJHVWdLR2tnUGlBd0lDWW1JQ2h0ZFd3Z0tqMGdNSGd4TURBcEtTQjdYRzRnSUNBZ2RtRnNJQ3M5SUhSb2FYTmJiMlptYzJWMElDc2dMUzFwWFNBcUlHMTFiRnh1SUNCOVhHNGdJRzExYkNBcVBTQXdlRGd3WEc1Y2JpQWdhV1lnS0haaGJDQStQU0J0ZFd3cElIWmhiQ0F0UFNCTllYUm9MbkJ2ZHlneUxDQTRJQ29nWW5sMFpVeGxibWQwYUNsY2JseHVJQ0J5WlhSMWNtNGdkbUZzWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVsdWREZ2dQU0JtZFc1amRHbHZiaUJ5WldGa1NXNTBPQ0FvYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMDltWm5ObGRDaHZabVp6WlhRc0lERXNJSFJvYVhNdWJHVnVaM1JvS1Z4dUlDQnBaaUFvSVNoMGFHbHpXMjltWm5ObGRGMGdKaUF3ZURnd0tTa2djbVYwZFhKdUlDaDBhR2x6VzI5bVpuTmxkRjBwWEc0Z0lISmxkSFZ5YmlBb0tEQjRabVlnTFNCMGFHbHpXMjltWm5ObGRGMGdLeUF4S1NBcUlDMHhLVnh1ZlZ4dVhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExuSmxZV1JKYm5ReE5reEZJRDBnWm5WdVkzUnBiMjRnY21WaFpFbHVkREUyVEVVZ0tHOW1abk5sZEN3Z2JtOUJjM05sY25RcElIdGNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dZMmhsWTJ0UFptWnpaWFFvYjJabWMyVjBMQ0F5TENCMGFHbHpMbXhsYm1kMGFDbGNiaUFnZG1GeUlIWmhiQ0E5SUhSb2FYTmJiMlptYzJWMFhTQjhJQ2gwYUdselcyOW1abk5sZENBcklERmRJRHc4SURncFhHNGdJSEpsZEhWeWJpQW9kbUZzSUNZZ01IZzRNREF3S1NBL0lIWmhiQ0I4SURCNFJrWkdSakF3TURBZ09pQjJZV3hjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNXlaV0ZrU1c1ME1UWkNSU0E5SUdaMWJtTjBhVzl1SUhKbFlXUkpiblF4TmtKRklDaHZabVp6WlhRc0lHNXZRWE56WlhKMEtTQjdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJR05vWldOclQyWm1jMlYwS0c5bVpuTmxkQ3dnTWl3Z2RHaHBjeTVzWlc1bmRHZ3BYRzRnSUhaaGNpQjJZV3dnUFNCMGFHbHpXMjltWm5ObGRDQXJJREZkSUh3Z0tIUm9hWE5iYjJabWMyVjBYU0E4UENBNEtWeHVJQ0J5WlhSMWNtNGdLSFpoYkNBbUlEQjRPREF3TUNrZ1B5QjJZV3dnZkNBd2VFWkdSa1l3TURBd0lEb2dkbUZzWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVsdWRETXlURVVnUFNCbWRXNWpkR2x2YmlCeVpXRmtTVzUwTXpKTVJTQW9iMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwOW1abk5sZENodlptWnpaWFFzSURRc0lIUm9hWE11YkdWdVozUm9LVnh1WEc0Z0lISmxkSFZ5YmlBb2RHaHBjMXR2Wm1aelpYUmRLU0I4WEc0Z0lDQWdLSFJvYVhOYmIyWm1jMlYwSUNzZ01WMGdQRHdnT0NrZ2ZGeHVJQ0FnSUNoMGFHbHpXMjltWm5ObGRDQXJJREpkSUR3OElERTJLU0I4WEc0Z0lDQWdLSFJvYVhOYmIyWm1jMlYwSUNzZ00xMGdQRHdnTWpRcFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpFbHVkRE15UWtVZ1BTQm1kVzVqZEdsdmJpQnlaV0ZrU1c1ME16SkNSU0FvYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMDltWm5ObGRDaHZabVp6WlhRc0lEUXNJSFJvYVhNdWJHVnVaM1JvS1Z4dVhHNGdJSEpsZEhWeWJpQW9kR2hwYzF0dlptWnpaWFJkSUR3OElESTBLU0I4WEc0Z0lDQWdLSFJvYVhOYmIyWm1jMlYwSUNzZ01WMGdQRHdnTVRZcElIeGNiaUFnSUNBb2RHaHBjMXR2Wm1aelpYUWdLeUF5WFNBOFBDQTRLU0I4WEc0Z0lDQWdLSFJvYVhOYmIyWm1jMlYwSUNzZ00xMHBYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWNtVmhaRVpzYjJGMFRFVWdQU0JtZFc1amRHbHZiaUJ5WldGa1JteHZZWFJNUlNBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJRFFzSUhSb2FYTXViR1Z1WjNSb0tWeHVJQ0J5WlhSMWNtNGdhV1ZsWlRjMU5DNXlaV0ZrS0hSb2FYTXNJRzltWm5ObGRDd2dkSEoxWlN3Z01qTXNJRFFwWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVac2IyRjBRa1VnUFNCbWRXNWpkR2x2YmlCeVpXRmtSbXh2WVhSQ1JTQW9iMlptYzJWMExDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwOW1abk5sZENodlptWnpaWFFzSURRc0lIUm9hWE11YkdWdVozUm9LVnh1SUNCeVpYUjFjbTRnYVdWbFpUYzFOQzV5WldGa0tIUm9hWE1zSUc5bVpuTmxkQ3dnWm1Gc2MyVXNJREl6TENBMEtWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5KbFlXUkViM1ZpYkdWTVJTQTlJR1oxYm1OMGFXOXVJSEpsWVdSRWIzVmliR1ZNUlNBb2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTA5bVpuTmxkQ2h2Wm1aelpYUXNJRGdzSUhSb2FYTXViR1Z1WjNSb0tWeHVJQ0J5WlhSMWNtNGdhV1ZsWlRjMU5DNXlaV0ZrS0hSb2FYTXNJRzltWm5ObGRDd2dkSEoxWlN3Z05USXNJRGdwWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVjbVZoWkVSdmRXSnNaVUpGSUQwZ1puVnVZM1JwYjI0Z2NtVmhaRVJ2ZFdKc1pVSkZJQ2h2Wm1aelpYUXNJRzV2UVhOelpYSjBLU0I3WEc0Z0lHbG1JQ2doYm05QmMzTmxjblFwSUdOb1pXTnJUMlptYzJWMEtHOW1abk5sZEN3Z09Dd2dkR2hwY3k1c1pXNW5kR2dwWEc0Z0lISmxkSFZ5YmlCcFpXVmxOelUwTG5KbFlXUW9kR2hwY3l3Z2IyWm1jMlYwTENCbVlXeHpaU3dnTlRJc0lEZ3BYRzU5WEc1Y2JtWjFibU4wYVc5dUlHTm9aV05yU1c1MElDaGlkV1lzSUhaaGJIVmxMQ0J2Wm1aelpYUXNJR1Y0ZEN3Z2JXRjRMQ0J0YVc0cElIdGNiaUFnYVdZZ0tDRkNkV1ptWlhJdWFYTkNkV1ptWlhJb1luVm1LU2tnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblhDSmlkV1ptWlhKY0lpQmhjbWQxYldWdWRDQnRkWE4wSUdKbElHRWdRblZtWm1WeUlHbHVjM1JoYm1ObEp5bGNiaUFnYVdZZ0tIWmhiSFZsSUQ0Z2JXRjRJSHg4SUhaaGJIVmxJRHdnYldsdUtTQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduWENKMllXeDFaVndpSUdGeVozVnRaVzUwSUdseklHOTFkQ0J2WmlCaWIzVnVaSE1uS1Z4dUlDQnBaaUFvYjJabWMyVjBJQ3NnWlhoMElENGdZblZtTG14bGJtZDBhQ2tnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0owbHVaR1Y0SUc5MWRDQnZaaUJ5WVc1blpTY3BYRzU5WEc1Y2JrSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWQzSnBkR1ZWU1c1MFRFVWdQU0JtZFc1amRHbHZiaUIzY21sMFpWVkpiblJNUlNBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnWW5sMFpVeGxibWQwYUN3Z2JtOUJjM05sY25RcElIdGNiaUFnZG1Gc2RXVWdQU0FyZG1Gc2RXVmNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQmllWFJsVEdWdVozUm9JRDBnWW5sMFpVeGxibWQwYUNCOElEQmNiaUFnYVdZZ0tDRnViMEZ6YzJWeWRDa2dlMXh1SUNBZ0lIWmhjaUJ0WVhoQ2VYUmxjeUE5SUUxaGRHZ3VjRzkzS0RJc0lEZ2dLaUJpZVhSbFRHVnVaM1JvS1NBdElERmNiaUFnSUNCamFHVmphMGx1ZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQmllWFJsVEdWdVozUm9MQ0J0WVhoQ2VYUmxjeXdnTUNsY2JpQWdmVnh1WEc0Z0lIWmhjaUJ0ZFd3Z1BTQXhYRzRnSUhaaGNpQnBJRDBnTUZ4dUlDQjBhR2x6VzI5bVpuTmxkRjBnUFNCMllXeDFaU0FtSURCNFJrWmNiaUFnZDJocGJHVWdLQ3NyYVNBOElHSjVkR1ZNWlc1bmRHZ2dKaVlnS0cxMWJDQXFQU0F3ZURFd01Da3BJSHRjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySUdsZElEMGdLSFpoYkhWbElDOGdiWFZzS1NBbUlEQjRSa1pjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ2Wm1aelpYUWdLeUJpZVhSbFRHVnVaM1JvWEc1OVhHNWNia0oxWm1abGNpNXdjbTkwYjNSNWNHVXVkM0pwZEdWVlNXNTBRa1VnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVlZKYm5SQ1JTQW9kbUZzZFdVc0lHOW1abk5sZEN3Z1lubDBaVXhsYm1kMGFDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2RtRnNkV1VnUFNBcmRtRnNkV1ZjYmlBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0JpZVhSbFRHVnVaM1JvSUQwZ1lubDBaVXhsYm1kMGFDQjhJREJjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnZTF4dUlDQWdJSFpoY2lCdFlYaENlWFJsY3lBOUlFMWhkR2d1Y0c5M0tESXNJRGdnS2lCaWVYUmxUR1Z1WjNSb0tTQXRJREZjYmlBZ0lDQmphR1ZqYTBsdWRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0JpZVhSbFRHVnVaM1JvTENCdFlYaENlWFJsY3l3Z01DbGNiaUFnZlZ4dVhHNGdJSFpoY2lCcElEMGdZbmwwWlV4bGJtZDBhQ0F0SURGY2JpQWdkbUZ5SUcxMWJDQTlJREZjYmlBZ2RHaHBjMXR2Wm1aelpYUWdLeUJwWFNBOUlIWmhiSFZsSUNZZ01IaEdSbHh1SUNCM2FHbHNaU0FvTFMxcElENDlJREFnSmlZZ0tHMTFiQ0FxUFNBd2VERXdNQ2twSUh0Y2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklHbGRJRDBnS0haaGJIVmxJQzhnYlhWc0tTQW1JREI0UmtaY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCdlptWnpaWFFnS3lCaWVYUmxUR1Z1WjNSb1hHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1ZDNKcGRHVlZTVzUwT0NBOUlHWjFibU4wYVc5dUlIZHlhWFJsVlVsdWREZ2dLSFpoYkhWbExDQnZabVp6WlhRc0lHNXZRWE56WlhKMEtTQjdYRzRnSUhaaGJIVmxJRDBnSzNaaGJIVmxYRzRnSUc5bVpuTmxkQ0E5SUc5bVpuTmxkQ0I4SURCY2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ1kyaGxZMnRKYm5Rb2RHaHBjeXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dNU3dnTUhobVppd2dNQ2xjYmlBZ2FXWWdLQ0ZDZFdabVpYSXVWRmxRUlVSZlFWSlNRVmxmVTFWUVVFOVNWQ2tnZG1Gc2RXVWdQU0JOWVhSb0xtWnNiMjl5S0haaGJIVmxLVnh1SUNCMGFHbHpXMjltWm5ObGRGMGdQU0FvZG1Gc2RXVWdKaUF3ZUdabUtWeHVJQ0J5WlhSMWNtNGdiMlptYzJWMElDc2dNVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnZZbXBsWTNSWGNtbDBaVlZKYm5ReE5pQW9ZblZtTENCMllXeDFaU3dnYjJabWMyVjBMQ0JzYVhSMGJHVkZibVJwWVc0cElIdGNiaUFnYVdZZ0tIWmhiSFZsSUR3Z01Da2dkbUZzZFdVZ1BTQXdlR1ptWm1ZZ0t5QjJZV3gxWlNBcklERmNiaUFnWm05eUlDaDJZWElnYVNBOUlEQXNJR29nUFNCTllYUm9MbTFwYmloaWRXWXViR1Z1WjNSb0lDMGdiMlptYzJWMExDQXlLVHNnYVNBOElHbzdJQ3NyYVNrZ2UxeHVJQ0FnSUdKMVpsdHZabVp6WlhRZ0t5QnBYU0E5SUNoMllXeDFaU0FtSUNnd2VHWm1JRHc4SUNnNElDb2dLR3hwZEhSc1pVVnVaR2xoYmlBL0lHa2dPaUF4SUMwZ2FTa3BLU2tnUGo0K1hHNGdJQ0FnSUNBb2JHbDBkR3hsUlc1a2FXRnVJRDhnYVNBNklERWdMU0JwS1NBcUlEaGNiaUFnZlZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFZVbHVkREUyVEVVZ1BTQm1kVzVqZEdsdmJpQjNjbWwwWlZWSmJuUXhOa3hGSUNoMllXeDFaU3dnYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQjJZV3gxWlNBOUlDdDJZV3gxWlZ4dUlDQnZabVp6WlhRZ1BTQnZabVp6WlhRZ2ZDQXdYRzRnSUdsbUlDZ2hibTlCYzNObGNuUXBJR05vWldOclNXNTBLSFJvYVhNc0lIWmhiSFZsTENCdlptWnpaWFFzSURJc0lEQjRabVptWml3Z01DbGNiaUFnYVdZZ0tFSjFabVpsY2k1VVdWQkZSRjlCVWxKQldWOVRWVkJRVDFKVUtTQjdYRzRnSUNBZ2RHaHBjMXR2Wm1aelpYUmRJRDBnS0haaGJIVmxJQ1lnTUhobVppbGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJREZkSUQwZ0tIWmhiSFZsSUQ0K1BpQTRLVnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJRzlpYW1WamRGZHlhWFJsVlVsdWRERTJLSFJvYVhNc0lIWmhiSFZsTENCdlptWnpaWFFzSUhSeWRXVXBYRzRnSUgxY2JpQWdjbVYwZFhKdUlHOW1abk5sZENBcklESmNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1M2NtbDBaVlZKYm5ReE5rSkZJRDBnWm5WdVkzUnBiMjRnZDNKcGRHVlZTVzUwTVRaQ1JTQW9kbUZzZFdVc0lHOW1abk5sZEN3Z2JtOUJjM05sY25RcElIdGNiaUFnZG1Gc2RXVWdQU0FyZG1Gc2RXVmNiaUFnYjJabWMyVjBJRDBnYjJabWMyVjBJSHdnTUZ4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCamFHVmphMGx1ZENoMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQXlMQ0F3ZUdabVptWXNJREFwWEc0Z0lHbG1JQ2hDZFdabVpYSXVWRmxRUlVSZlFWSlNRVmxmVTFWUVVFOVNWQ2tnZTF4dUlDQWdJSFJvYVhOYmIyWm1jMlYwWFNBOUlDaDJZV3gxWlNBK1BqNGdPQ2xjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySURGZElEMGdLSFpoYkhWbElDWWdNSGhtWmlsY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCdlltcGxZM1JYY21sMFpWVkpiblF4TmloMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQm1ZV3h6WlNsY2JpQWdmVnh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnTWx4dWZWeHVYRzVtZFc1amRHbHZiaUJ2WW1wbFkzUlhjbWwwWlZWSmJuUXpNaUFvWW5WbUxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCc2FYUjBiR1ZGYm1ScFlXNHBJSHRjYmlBZ2FXWWdLSFpoYkhWbElEd2dNQ2tnZG1Gc2RXVWdQU0F3ZUdabVptWm1abVptSUNzZ2RtRnNkV1VnS3lBeFhHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd0xDQnFJRDBnVFdGMGFDNXRhVzRvWW5WbUxteGxibWQwYUNBdElHOW1abk5sZEN3Z05DazdJR2tnUENCcU95QXJLMmtwSUh0Y2JpQWdJQ0JpZFdaYmIyWm1jMlYwSUNzZ2FWMGdQU0FvZG1Gc2RXVWdQajQrSUNoc2FYUjBiR1ZGYm1ScFlXNGdQeUJwSURvZ015QXRJR2twSUNvZ09Da2dKaUF3ZUdabVhHNGdJSDFjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTNjbWwwWlZWSmJuUXpNa3hGSUQwZ1puVnVZM1JwYjI0Z2QzSnBkR1ZWU1c1ME16Sk1SU0FvZG1Gc2RXVXNJRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2RtRnNkV1VnUFNBcmRtRnNkV1ZjYmlBZ2IyWm1jMlYwSUQwZ2IyWm1jMlYwSUh3Z01GeHVJQ0JwWmlBb0lXNXZRWE56WlhKMEtTQmphR1ZqYTBsdWRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0EwTENBd2VHWm1abVptWm1abUxDQXdLVnh1SUNCcFppQW9RblZtWm1WeUxsUlpVRVZFWDBGU1VrRlpYMU5WVUZCUFVsUXBJSHRjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySUROZElEMGdLSFpoYkhWbElENCtQaUF5TkNsY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklESmRJRDBnS0haaGJIVmxJRDQrUGlBeE5pbGNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJREZkSUQwZ0tIWmhiSFZsSUQ0K1BpQTRLVnh1SUNBZ0lIUm9hWE5iYjJabWMyVjBYU0E5SUNoMllXeDFaU0FtSURCNFptWXBYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdiMkpxWldOMFYzSnBkR1ZWU1c1ME16SW9kR2hwY3l3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnZEhKMVpTbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2IyWm1jMlYwSUNzZ05GeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxWVWx1ZERNeVFrVWdQU0JtZFc1amRHbHZiaUIzY21sMFpWVkpiblF6TWtKRklDaDJZV3gxWlN3Z2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0IyWVd4MVpTQTlJQ3QyWVd4MVpWeHVJQ0J2Wm1aelpYUWdQU0J2Wm1aelpYUWdmQ0F3WEc0Z0lHbG1JQ2doYm05QmMzTmxjblFwSUdOb1pXTnJTVzUwS0hSb2FYTXNJSFpoYkhWbExDQnZabVp6WlhRc0lEUXNJREI0Wm1abVptWm1abVlzSURBcFhHNGdJR2xtSUNoQ2RXWm1aWEl1VkZsUVJVUmZRVkpTUVZsZlUxVlFVRTlTVkNrZ2UxeHVJQ0FnSUhSb2FYTmJiMlptYzJWMFhTQTlJQ2gyWVd4MVpTQStQajRnTWpRcFhHNGdJQ0FnZEdocGMxdHZabVp6WlhRZ0t5QXhYU0E5SUNoMllXeDFaU0ErUGo0Z01UWXBYRzRnSUNBZ2RHaHBjMXR2Wm1aelpYUWdLeUF5WFNBOUlDaDJZV3gxWlNBK1BqNGdPQ2xjYmlBZ0lDQjBhR2x6VzI5bVpuTmxkQ0FySUROZElEMGdLSFpoYkhWbElDWWdNSGhtWmlsY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCdlltcGxZM1JYY21sMFpWVkpiblF6TWloMGFHbHpMQ0IyWVd4MVpTd2diMlptYzJWMExDQm1ZV3h6WlNsY2JpQWdmVnh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnTkZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFNXNTBURVVnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVWx1ZEV4RklDaDJZV3gxWlN3Z2IyWm1jMlYwTENCaWVYUmxUR1Z1WjNSb0xDQnViMEZ6YzJWeWRDa2dlMXh1SUNCMllXeDFaU0E5SUN0MllXeDFaVnh1SUNCdlptWnpaWFFnUFNCdlptWnpaWFFnZkNBd1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElIdGNiaUFnSUNCMllYSWdiR2x0YVhRZ1BTQk5ZWFJvTG5CdmR5Z3lMQ0E0SUNvZ1lubDBaVXhsYm1kMGFDQXRJREVwWEc1Y2JpQWdJQ0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCaWVYUmxUR1Z1WjNSb0xDQnNhVzFwZENBdElERXNJQzFzYVcxcGRDbGNiaUFnZlZ4dVhHNGdJSFpoY2lCcElEMGdNRnh1SUNCMllYSWdiWFZzSUQwZ01WeHVJQ0IyWVhJZ2MzVmlJRDBnTUZ4dUlDQjBhR2x6VzI5bVpuTmxkRjBnUFNCMllXeDFaU0FtSURCNFJrWmNiaUFnZDJocGJHVWdLQ3NyYVNBOElHSjVkR1ZNWlc1bmRHZ2dKaVlnS0cxMWJDQXFQU0F3ZURFd01Da3BJSHRjYmlBZ0lDQnBaaUFvZG1Gc2RXVWdQQ0F3SUNZbUlITjFZaUE5UFQwZ01DQW1KaUIwYUdselcyOW1abk5sZENBcklHa2dMU0F4WFNBaFBUMGdNQ2tnZTF4dUlDQWdJQ0FnYzNWaUlEMGdNVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJR2xkSUQwZ0tDaDJZV3gxWlNBdklHMTFiQ2tnUGo0Z01Da2dMU0J6ZFdJZ0ppQXdlRVpHWEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnWW5sMFpVeGxibWQwYUZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFNXNTBRa1VnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVWx1ZEVKRklDaDJZV3gxWlN3Z2IyWm1jMlYwTENCaWVYUmxUR1Z1WjNSb0xDQnViMEZ6YzJWeWRDa2dlMXh1SUNCMllXeDFaU0E5SUN0MllXeDFaVnh1SUNCdlptWnpaWFFnUFNCdlptWnpaWFFnZkNBd1hHNGdJR2xtSUNnaGJtOUJjM05sY25RcElIdGNiaUFnSUNCMllYSWdiR2x0YVhRZ1BTQk5ZWFJvTG5CdmR5Z3lMQ0E0SUNvZ1lubDBaVXhsYm1kMGFDQXRJREVwWEc1Y2JpQWdJQ0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENCaWVYUmxUR1Z1WjNSb0xDQnNhVzFwZENBdElERXNJQzFzYVcxcGRDbGNiaUFnZlZ4dVhHNGdJSFpoY2lCcElEMGdZbmwwWlV4bGJtZDBhQ0F0SURGY2JpQWdkbUZ5SUcxMWJDQTlJREZjYmlBZ2RtRnlJSE4xWWlBOUlEQmNiaUFnZEdocGMxdHZabVp6WlhRZ0t5QnBYU0E5SUhaaGJIVmxJQ1lnTUhoR1JseHVJQ0IzYUdsc1pTQW9MUzFwSUQ0OUlEQWdKaVlnS0cxMWJDQXFQU0F3ZURFd01Da3BJSHRjYmlBZ0lDQnBaaUFvZG1Gc2RXVWdQQ0F3SUNZbUlITjFZaUE5UFQwZ01DQW1KaUIwYUdselcyOW1abk5sZENBcklHa2dLeUF4WFNBaFBUMGdNQ2tnZTF4dUlDQWdJQ0FnYzNWaUlEMGdNVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpXMjltWm5ObGRDQXJJR2xkSUQwZ0tDaDJZV3gxWlNBdklHMTFiQ2tnUGo0Z01Da2dMU0J6ZFdJZ0ppQXdlRVpHWEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYjJabWMyVjBJQ3NnWW5sMFpVeGxibWQwYUZ4dWZWeHVYRzVDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFNXNTBPQ0E5SUdaMWJtTjBhVzl1SUhkeWFYUmxTVzUwT0NBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdkbUZzZFdVZ1BTQXJkbUZzZFdWY2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENBeExDQXdlRGRtTENBdE1IZzRNQ2xjYmlBZ2FXWWdLQ0ZDZFdabVpYSXVWRmxRUlVSZlFWSlNRVmxmVTFWUVVFOVNWQ2tnZG1Gc2RXVWdQU0JOWVhSb0xtWnNiMjl5S0haaGJIVmxLVnh1SUNCcFppQW9kbUZzZFdVZ1BDQXdLU0IyWVd4MVpTQTlJREI0Wm1ZZ0t5QjJZV3gxWlNBcklERmNiaUFnZEdocGMxdHZabVp6WlhSZElEMGdLSFpoYkhWbElDWWdNSGhtWmlsY2JpQWdjbVYwZFhKdUlHOW1abk5sZENBcklERmNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1M2NtbDBaVWx1ZERFMlRFVWdQU0JtZFc1amRHbHZiaUIzY21sMFpVbHVkREUyVEVVZ0tIWmhiSFZsTENCdlptWnpaWFFzSUc1dlFYTnpaWEowS1NCN1hHNGdJSFpoYkhWbElEMGdLM1poYkhWbFhHNGdJRzltWm5ObGRDQTlJRzltWm5ObGRDQjhJREJjYmlBZ2FXWWdLQ0Z1YjBGemMyVnlkQ2tnWTJobFkydEpiblFvZEdocGN5d2dkbUZzZFdVc0lHOW1abk5sZEN3Z01pd2dNSGczWm1abUxDQXRNSGc0TURBd0tWeHVJQ0JwWmlBb1FuVm1abVZ5TGxSWlVFVkVYMEZTVWtGWlgxTlZVRkJQVWxRcElIdGNiaUFnSUNCMGFHbHpXMjltWm5ObGRGMGdQU0FvZG1Gc2RXVWdKaUF3ZUdabUtWeHVJQ0FnSUhSb2FYTmJiMlptYzJWMElDc2dNVjBnUFNBb2RtRnNkV1VnUGo0K0lEZ3BYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdiMkpxWldOMFYzSnBkR1ZWU1c1ME1UWW9kR2hwY3l3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnZEhKMVpTbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2IyWm1jMlYwSUNzZ01seHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxTVzUwTVRaQ1JTQTlJR1oxYm1OMGFXOXVJSGR5YVhSbFNXNTBNVFpDUlNBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdkbUZzZFdVZ1BTQXJkbUZzZFdWY2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENBeUxDQXdlRGRtWm1Zc0lDMHdlRGd3TURBcFhHNGdJR2xtSUNoQ2RXWm1aWEl1VkZsUVJVUmZRVkpTUVZsZlUxVlFVRTlTVkNrZ2UxeHVJQ0FnSUhSb2FYTmJiMlptYzJWMFhTQTlJQ2gyWVd4MVpTQStQajRnT0NsY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklERmRJRDBnS0haaGJIVmxJQ1lnTUhobVppbGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnZZbXBsWTNSWGNtbDBaVlZKYm5ReE5paDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0JtWVd4elpTbGNiaUFnZlZ4dUlDQnlaWFIxY200Z2IyWm1jMlYwSUNzZ01seHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxTVzUwTXpKTVJTQTlJR1oxYm1OMGFXOXVJSGR5YVhSbFNXNTBNekpNUlNBb2RtRnNkV1VzSUc5bVpuTmxkQ3dnYm05QmMzTmxjblFwSUh0Y2JpQWdkbUZzZFdVZ1BTQXJkbUZzZFdWY2JpQWdiMlptYzJWMElEMGdiMlptYzJWMElId2dNRnh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0JqYUdWamEwbHVkQ2gwYUdsekxDQjJZV3gxWlN3Z2IyWm1jMlYwTENBMExDQXdlRGRtWm1abVptWm1MQ0F0TUhnNE1EQXdNREF3TUNsY2JpQWdhV1lnS0VKMVptWmxjaTVVV1ZCRlJGOUJVbEpCV1Y5VFZWQlFUMUpVS1NCN1hHNGdJQ0FnZEdocGMxdHZabVp6WlhSZElEMGdLSFpoYkhWbElDWWdNSGhtWmlsY2JpQWdJQ0IwYUdselcyOW1abk5sZENBcklERmRJRDBnS0haaGJIVmxJRDQrUGlBNEtWeHVJQ0FnSUhSb2FYTmJiMlptYzJWMElDc2dNbDBnUFNBb2RtRnNkV1VnUGo0K0lERTJLVnh1SUNBZ0lIUm9hWE5iYjJabWMyVjBJQ3NnTTEwZ1BTQW9kbUZzZFdVZ1BqNCtJREkwS1Z4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUc5aWFtVmpkRmR5YVhSbFZVbHVkRE15S0hSb2FYTXNJSFpoYkhWbExDQnZabVp6WlhRc0lIUnlkV1VwWEc0Z0lIMWNiaUFnY21WMGRYSnVJRzltWm5ObGRDQXJJRFJjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTNjbWwwWlVsdWRETXlRa1VnUFNCbWRXNWpkR2x2YmlCM2NtbDBaVWx1ZERNeVFrVWdLSFpoYkhWbExDQnZabVp6WlhRc0lHNXZRWE56WlhKMEtTQjdYRzRnSUhaaGJIVmxJRDBnSzNaaGJIVmxYRzRnSUc5bVpuTmxkQ0E5SUc5bVpuTmxkQ0I4SURCY2JpQWdhV1lnS0NGdWIwRnpjMlZ5ZENrZ1kyaGxZMnRKYm5Rb2RHaHBjeXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dOQ3dnTUhnM1ptWm1abVptWml3Z0xUQjRPREF3TURBd01EQXBYRzRnSUdsbUlDaDJZV3gxWlNBOElEQXBJSFpoYkhWbElEMGdNSGhtWm1abVptWm1aaUFySUhaaGJIVmxJQ3NnTVZ4dUlDQnBaaUFvUW5WbVptVnlMbFJaVUVWRVgwRlNVa0ZaWDFOVlVGQlBVbFFwSUh0Y2JpQWdJQ0IwYUdselcyOW1abk5sZEYwZ1BTQW9kbUZzZFdVZ1BqNCtJREkwS1Z4dUlDQWdJSFJvYVhOYmIyWm1jMlYwSUNzZ01WMGdQU0FvZG1Gc2RXVWdQajQrSURFMktWeHVJQ0FnSUhSb2FYTmJiMlptYzJWMElDc2dNbDBnUFNBb2RtRnNkV1VnUGo0K0lEZ3BYRzRnSUNBZ2RHaHBjMXR2Wm1aelpYUWdLeUF6WFNBOUlDaDJZV3gxWlNBbUlEQjRabVlwWEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnYjJKcVpXTjBWM0pwZEdWVlNXNTBNeklvZEdocGN5d2dkbUZzZFdVc0lHOW1abk5sZEN3Z1ptRnNjMlVwWEc0Z0lIMWNiaUFnY21WMGRYSnVJRzltWm5ObGRDQXJJRFJjYm4xY2JseHVablZ1WTNScGIyNGdZMmhsWTJ0SlJVVkZOelUwSUNoaWRXWXNJSFpoYkhWbExDQnZabVp6WlhRc0lHVjRkQ3dnYldGNExDQnRhVzRwSUh0Y2JpQWdhV1lnS0c5bVpuTmxkQ0FySUdWNGRDQStJR0oxWmk1c1pXNW5kR2dwSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZEpibVJsZUNCdmRYUWdiMllnY21GdVoyVW5LVnh1SUNCcFppQW9iMlptYzJWMElEd2dNQ2tnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0owbHVaR1Y0SUc5MWRDQnZaaUJ5WVc1blpTY3BYRzU5WEc1Y2JtWjFibU4wYVc5dUlIZHlhWFJsUm14dllYUWdLR0oxWml3Z2RtRnNkV1VzSUc5bVpuTmxkQ3dnYkdsMGRHeGxSVzVrYVdGdUxDQnViMEZ6YzJWeWRDa2dlMXh1SUNCcFppQW9JVzV2UVhOelpYSjBLU0I3WEc0Z0lDQWdZMmhsWTJ0SlJVVkZOelUwS0dKMVppd2dkbUZzZFdVc0lHOW1abk5sZEN3Z05Dd2dNeTQwTURJNE1qTTBOall6T0RVeU9EZzJaU3N6T0N3Z0xUTXVOREF5T0RJek5EWTJNemcxTWpnNE5tVXJNemdwWEc0Z0lIMWNiaUFnYVdWbFpUYzFOQzUzY21sMFpTaGlkV1lzSUhaaGJIVmxMQ0J2Wm1aelpYUXNJR3hwZEhSc1pVVnVaR2xoYml3Z01qTXNJRFFwWEc0Z0lISmxkSFZ5YmlCdlptWnpaWFFnS3lBMFhHNTlYRzVjYmtKMVptWmxjaTV3Y205MGIzUjVjR1V1ZDNKcGRHVkdiRzloZEV4RklEMGdablZ1WTNScGIyNGdkM0pwZEdWR2JHOWhkRXhGSUNoMllXeDFaU3dnYjJabWMyVjBMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnlaWFIxY200Z2QzSnBkR1ZHYkc5aGRDaDBhR2x6TENCMllXeDFaU3dnYjJabWMyVjBMQ0IwY25WbExDQnViMEZ6YzJWeWRDbGNibjFjYmx4dVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1M2NtbDBaVVpzYjJGMFFrVWdQU0JtZFc1amRHbHZiaUIzY21sMFpVWnNiMkYwUWtVZ0tIWmhiSFZsTENCdlptWnpaWFFzSUc1dlFYTnpaWEowS1NCN1hHNGdJSEpsZEhWeWJpQjNjbWwwWlVac2IyRjBLSFJvYVhNc0lIWmhiSFZsTENCdlptWnpaWFFzSUdaaGJITmxMQ0J1YjBGemMyVnlkQ2xjYm4xY2JseHVablZ1WTNScGIyNGdkM0pwZEdWRWIzVmliR1VnS0dKMVppd2dkbUZzZFdVc0lHOW1abk5sZEN3Z2JHbDBkR3hsUlc1a2FXRnVMQ0J1YjBGemMyVnlkQ2tnZTF4dUlDQnBaaUFvSVc1dlFYTnpaWEowS1NCN1hHNGdJQ0FnWTJobFkydEpSVVZGTnpVMEtHSjFaaXdnZG1Gc2RXVXNJRzltWm5ObGRDd2dPQ3dnTVM0M09UYzJPVE14TXpRNE5qSXpNVFUzUlNzek1EZ3NJQzB4TGpjNU56WTVNekV6TkRnMk1qTXhOVGRGS3pNd09DbGNiaUFnZlZ4dUlDQnBaV1ZsTnpVMExuZHlhWFJsS0dKMVppd2dkbUZzZFdVc0lHOW1abk5sZEN3Z2JHbDBkR3hsUlc1a2FXRnVMQ0ExTWl3Z09DbGNiaUFnY21WMGRYSnVJRzltWm5ObGRDQXJJRGhjYm4xY2JseHVRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTNjbWwwWlVSdmRXSnNaVXhGSUQwZ1puVnVZM1JwYjI0Z2QzSnBkR1ZFYjNWaWJHVk1SU0FvZG1Gc2RXVXNJRzltWm5ObGRDd2dibTlCYzNObGNuUXBJSHRjYmlBZ2NtVjBkWEp1SUhkeWFYUmxSRzkxWW14bEtIUm9hWE1zSUhaaGJIVmxMQ0J2Wm1aelpYUXNJSFJ5ZFdVc0lHNXZRWE56WlhKMEtWeHVmVnh1WEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxSRzkxWW14bFFrVWdQU0JtZFc1amRHbHZiaUIzY21sMFpVUnZkV0pzWlVKRklDaDJZV3gxWlN3Z2IyWm1jMlYwTENCdWIwRnpjMlZ5ZENrZ2UxeHVJQ0J5WlhSMWNtNGdkM0pwZEdWRWIzVmliR1VvZEdocGN5d2dkbUZzZFdVc0lHOW1abk5sZEN3Z1ptRnNjMlVzSUc1dlFYTnpaWEowS1Z4dWZWeHVYRzR2THlCamIzQjVLSFJoY21kbGRFSjFabVpsY2l3Z2RHRnlaMlYwVTNSaGNuUTlNQ3dnYzI5MWNtTmxVM1JoY25ROU1Dd2djMjkxY21ObFJXNWtQV0oxWm1abGNpNXNaVzVuZEdncFhHNUNkV1ptWlhJdWNISnZkRzkwZVhCbExtTnZjSGtnUFNCbWRXNWpkR2x2YmlCamIzQjVJQ2gwWVhKblpYUXNJSFJoY21kbGRGTjBZWEowTENCemRHRnlkQ3dnWlc1a0tTQjdYRzRnSUdsbUlDZ2hjM1JoY25RcElITjBZWEowSUQwZ01GeHVJQ0JwWmlBb0lXVnVaQ0FtSmlCbGJtUWdJVDA5SURBcElHVnVaQ0E5SUhSb2FYTXViR1Z1WjNSb1hHNGdJR2xtSUNoMFlYSm5aWFJUZEdGeWRDQStQU0IwWVhKblpYUXViR1Z1WjNSb0tTQjBZWEpuWlhSVGRHRnlkQ0E5SUhSaGNtZGxkQzVzWlc1bmRHaGNiaUFnYVdZZ0tDRjBZWEpuWlhSVGRHRnlkQ2tnZEdGeVoyVjBVM1JoY25RZ1BTQXdYRzRnSUdsbUlDaGxibVFnUGlBd0lDWW1JR1Z1WkNBOElITjBZWEowS1NCbGJtUWdQU0J6ZEdGeWRGeHVYRzRnSUM4dklFTnZjSGtnTUNCaWVYUmxjenNnZDJVbmNtVWdaRzl1WlZ4dUlDQnBaaUFvWlc1a0lEMDlQU0J6ZEdGeWRDa2djbVYwZFhKdUlEQmNiaUFnYVdZZ0tIUmhjbWRsZEM1c1pXNW5kR2dnUFQwOUlEQWdmSHdnZEdocGN5NXNaVzVuZEdnZ1BUMDlJREFwSUhKbGRIVnliaUF3WEc1Y2JpQWdMeThnUm1GMFlXd2daWEp5YjNJZ1kyOXVaR2wwYVc5dWMxeHVJQ0JwWmlBb2RHRnlaMlYwVTNSaGNuUWdQQ0F3S1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0ozUmhjbWRsZEZOMFlYSjBJRzkxZENCdlppQmliM1Z1WkhNbktWeHVJQ0I5WEc0Z0lHbG1JQ2h6ZEdGeWRDQThJREFnZkh3Z2MzUmhjblFnUGowZ2RHaHBjeTVzWlc1bmRHZ3BJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkemIzVnlZMlZUZEdGeWRDQnZkWFFnYjJZZ1ltOTFibVJ6SnlsY2JpQWdhV1lnS0dWdVpDQThJREFwSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZHpiM1Z5WTJWRmJtUWdiM1YwSUc5bUlHSnZkVzVrY3ljcFhHNWNiaUFnTHk4Z1FYSmxJSGRsSUc5dllqOWNiaUFnYVdZZ0tHVnVaQ0ErSUhSb2FYTXViR1Z1WjNSb0tTQmxibVFnUFNCMGFHbHpMbXhsYm1kMGFGeHVJQ0JwWmlBb2RHRnlaMlYwTG14bGJtZDBhQ0F0SUhSaGNtZGxkRk4wWVhKMElEd2daVzVrSUMwZ2MzUmhjblFwSUh0Y2JpQWdJQ0JsYm1RZ1BTQjBZWEpuWlhRdWJHVnVaM1JvSUMwZ2RHRnlaMlYwVTNSaGNuUWdLeUJ6ZEdGeWRGeHVJQ0I5WEc1Y2JpQWdkbUZ5SUd4bGJpQTlJR1Z1WkNBdElITjBZWEowWEc0Z0lIWmhjaUJwWEc1Y2JpQWdhV1lnS0hSb2FYTWdQVDA5SUhSaGNtZGxkQ0FtSmlCemRHRnlkQ0E4SUhSaGNtZGxkRk4wWVhKMElDWW1JSFJoY21kbGRGTjBZWEowSUR3Z1pXNWtLU0I3WEc0Z0lDQWdMeThnWkdWelkyVnVaR2x1WnlCamIzQjVJR1p5YjIwZ1pXNWtYRzRnSUNBZ1ptOXlJQ2hwSUQwZ2JHVnVJQzBnTVRzZ2FTQStQU0F3T3lBdExXa3BJSHRjYmlBZ0lDQWdJSFJoY21kbGRGdHBJQ3NnZEdGeVoyVjBVM1JoY25SZElEMGdkR2hwYzF0cElDc2djM1JoY25SZFhHNGdJQ0FnZlZ4dUlDQjlJR1ZzYzJVZ2FXWWdLR3hsYmlBOElERXdNREFnZkh3Z0lVSjFabVpsY2k1VVdWQkZSRjlCVWxKQldWOVRWVkJRVDFKVUtTQjdYRzRnSUNBZ0x5OGdZWE5qWlc1a2FXNW5JR052Y0hrZ1puSnZiU0J6ZEdGeWRGeHVJQ0FnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0JzWlc0N0lDc3JhU2tnZTF4dUlDQWdJQ0FnZEdGeVoyVjBXMmtnS3lCMFlYSm5aWFJUZEdGeWRGMGdQU0IwYUdselcya2dLeUJ6ZEdGeWRGMWNiaUFnSUNCOVhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1ZXbHVkRGhCY25KaGVTNXdjbTkwYjNSNWNHVXVjMlYwTG1OaGJHd29YRzRnSUNBZ0lDQjBZWEpuWlhRc1hHNGdJQ0FnSUNCMGFHbHpMbk4xWW1GeWNtRjVLSE4wWVhKMExDQnpkR0Z5ZENBcklHeGxiaWtzWEc0Z0lDQWdJQ0IwWVhKblpYUlRkR0Z5ZEZ4dUlDQWdJQ2xjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJzWlc1Y2JuMWNibHh1THk4Z1ZYTmhaMlU2WEc0dkx5QWdJQ0JpZFdabVpYSXVabWxzYkNodWRXMWlaWEpiTENCdlptWnpaWFJiTENCbGJtUmRYU2xjYmk4dklDQWdJR0oxWm1abGNpNW1hV3hzS0dKMVptWmxjbHNzSUc5bVpuTmxkRnNzSUdWdVpGMWRLVnh1THk4Z0lDQWdZblZtWm1WeUxtWnBiR3dvYzNSeWFXNW5XeXdnYjJabWMyVjBXeXdnWlc1a1hWMWJMQ0JsYm1OdlpHbHVaMTBwWEc1Q2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG1acGJHd2dQU0JtZFc1amRHbHZiaUJtYVd4c0lDaDJZV3dzSUhOMFlYSjBMQ0JsYm1Rc0lHVnVZMjlrYVc1bktTQjdYRzRnSUM4dklFaGhibVJzWlNCemRISnBibWNnWTJGelpYTTZYRzRnSUdsbUlDaDBlWEJsYjJZZ2RtRnNJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2MzUmhjblFnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQmxibU52WkdsdVp5QTlJSE4wWVhKMFhHNGdJQ0FnSUNCemRHRnlkQ0E5SURCY2JpQWdJQ0FnSUdWdVpDQTlJSFJvYVhNdWJHVnVaM1JvWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2gwZVhCbGIyWWdaVzVrSUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lDQWdaVzVqYjJScGJtY2dQU0JsYm1SY2JpQWdJQ0FnSUdWdVpDQTlJSFJvYVhNdWJHVnVaM1JvWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gyWVd3dWJHVnVaM1JvSUQwOVBTQXhLU0I3WEc0Z0lDQWdJQ0IyWVhJZ1kyOWtaU0E5SUhaaGJDNWphR0Z5UTI5a1pVRjBLREFwWEc0Z0lDQWdJQ0JwWmlBb1kyOWtaU0E4SURJMU5pa2dlMXh1SUNBZ0lDQWdJQ0IyWVd3Z1BTQmpiMlJsWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2hsYm1OdlpHbHVaeUFoUFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSFI1Y0dWdlppQmxibU52WkdsdVp5QWhQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0oyVnVZMjlrYVc1bklHMTFjM1FnWW1VZ1lTQnpkSEpwYm1jbktWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RIbHdaVzltSUdWdVkyOWthVzVuSUQwOVBTQW5jM1J5YVc1bkp5QW1KaUFoUW5WbVptVnlMbWx6Ulc1amIyUnBibWNvWlc1amIyUnBibWNwS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZFZibXR1YjNkdUlHVnVZMjlrYVc1bk9pQW5JQ3NnWlc1amIyUnBibWNwWEc0Z0lDQWdmVnh1SUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCMllXd2dQVDA5SUNkdWRXMWlaWEluS1NCN1hHNGdJQ0FnZG1Gc0lEMGdkbUZzSUNZZ01qVTFYRzRnSUgxY2JseHVJQ0F2THlCSmJuWmhiR2xrSUhKaGJtZGxjeUJoY21VZ2JtOTBJSE5sZENCMGJ5QmhJR1JsWm1GMWJIUXNJSE52SUdOaGJpQnlZVzVuWlNCamFHVmpheUJsWVhKc2VTNWNiaUFnYVdZZ0tITjBZWEowSUR3Z01DQjhmQ0IwYUdsekxteGxibWQwYUNBOElITjBZWEowSUh4OElIUm9hWE11YkdWdVozUm9JRHdnWlc1a0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lGSmhibWRsUlhKeWIzSW9KMDkxZENCdlppQnlZVzVuWlNCcGJtUmxlQ2NwWEc0Z0lIMWNibHh1SUNCcFppQW9aVzVrSUR3OUlITjBZWEowS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhOY2JpQWdmVnh1WEc0Z0lITjBZWEowSUQwZ2MzUmhjblFnUGo0K0lEQmNiaUFnWlc1a0lEMGdaVzVrSUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxteGxibWQwYUNBNklHVnVaQ0ErUGo0Z01GeHVYRzRnSUdsbUlDZ2hkbUZzS1NCMllXd2dQU0F3WEc1Y2JpQWdkbUZ5SUdsY2JpQWdhV1lnS0hSNWNHVnZaaUIyWVd3Z1BUMDlJQ2R1ZFcxaVpYSW5LU0I3WEc0Z0lDQWdabTl5SUNocElEMGdjM1JoY25RN0lHa2dQQ0JsYm1RN0lDc3JhU2tnZTF4dUlDQWdJQ0FnZEdocGMxdHBYU0E5SUhaaGJGeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCMllYSWdZbmwwWlhNZ1BTQkNkV1ptWlhJdWFYTkNkV1ptWlhJb2RtRnNLVnh1SUNBZ0lDQWdQeUIyWVd4Y2JpQWdJQ0FnSURvZ2RYUm1PRlJ2UW5sMFpYTW9ibVYzSUVKMVptWmxjaWgyWVd3c0lHVnVZMjlrYVc1bktTNTBiMU4wY21sdVp5Z3BLVnh1SUNBZ0lIWmhjaUJzWlc0Z1BTQmllWFJsY3k1c1pXNW5kR2hjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z1pXNWtJQzBnYzNSaGNuUTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjMXRwSUNzZ2MzUmhjblJkSUQwZ1lubDBaWE5iYVNBbElHeGxibDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdkR2hwYzF4dWZWeHVYRzR2THlCSVJVeFFSVklnUmxWT1ExUkpUMDVUWEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNWNiblpoY2lCSlRsWkJURWxFWDBKQlUwVTJORjlTUlNBOUlDOWJYaXRjWEM4d0xUbEJMVnBoTFhvdFgxMHZaMXh1WEc1bWRXNWpkR2x2YmlCaVlYTmxOalJqYkdWaGJpQW9jM1J5S1NCN1hHNGdJQzh2SUU1dlpHVWdjM1J5YVhCeklHOTFkQ0JwYm5aaGJHbGtJR05vWVhKaFkzUmxjbk1nYkdsclpTQmNYRzRnWVc1a0lGeGNkQ0JtY205dElIUm9aU0J6ZEhKcGJtY3NJR0poYzJVMk5DMXFjeUJrYjJWeklHNXZkRnh1SUNCemRISWdQU0J6ZEhKcGJtZDBjbWx0S0hOMGNpa3VjbVZ3YkdGalpTaEpUbFpCVEVsRVgwSkJVMFUyTkY5U1JTd2dKeWNwWEc0Z0lDOHZJRTV2WkdVZ1kyOXVkbVZ5ZEhNZ2MzUnlhVzVuY3lCM2FYUm9JR3hsYm1kMGFDQThJRElnZEc4Z0p5ZGNiaUFnYVdZZ0tITjBjaTVzWlc1bmRHZ2dQQ0F5S1NCeVpYUjFjbTRnSnlkY2JpQWdMeThnVG05a1pTQmhiR3h2ZDNNZ1ptOXlJRzV2Ymkxd1lXUmtaV1FnWW1GelpUWTBJSE4wY21sdVozTWdLRzFwYzNOcGJtY2dkSEpoYVd4cGJtY2dQVDA5S1N3Z1ltRnpaVFkwTFdweklHUnZaWE1nYm05MFhHNGdJSGRvYVd4bElDaHpkSEl1YkdWdVozUm9JQ1VnTkNBaFBUMGdNQ2tnZTF4dUlDQWdJSE4wY2lBOUlITjBjaUFySUNjOUoxeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCemRISmNibjFjYmx4dVpuVnVZM1JwYjI0Z2MzUnlhVzVuZEhKcGJTQW9jM1J5S1NCN1hHNGdJR2xtSUNoemRISXVkSEpwYlNrZ2NtVjBkWEp1SUhOMGNpNTBjbWx0S0NsY2JpQWdjbVYwZFhKdUlITjBjaTV5WlhCc1lXTmxLQzllWEZ4ekszeGNYSE1ySkM5bkxDQW5KeWxjYm4xY2JseHVablZ1WTNScGIyNGdkRzlJWlhnZ0tHNHBJSHRjYmlBZ2FXWWdLRzRnUENBeE5pa2djbVYwZFhKdUlDY3dKeUFySUc0dWRHOVRkSEpwYm1jb01UWXBYRzRnSUhKbGRIVnliaUJ1TG5SdlUzUnlhVzVuS0RFMktWeHVmVnh1WEc1bWRXNWpkR2x2YmlCMWRHWTRWRzlDZVhSbGN5QW9jM1J5YVc1bkxDQjFibWwwY3lrZ2UxeHVJQ0IxYm1sMGN5QTlJSFZ1YVhSeklIeDhJRWx1Wm1sdWFYUjVYRzRnSUhaaGNpQmpiMlJsVUc5cGJuUmNiaUFnZG1GeUlHeGxibWQwYUNBOUlITjBjbWx1Wnk1c1pXNW5kR2hjYmlBZ2RtRnlJR3hsWVdSVGRYSnliMmRoZEdVZ1BTQnVkV3hzWEc0Z0lIWmhjaUJpZVhSbGN5QTlJRnRkWEc1Y2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc1bmRHZzdJQ3NyYVNrZ2UxeHVJQ0FnSUdOdlpHVlFiMmx1ZENBOUlITjBjbWx1Wnk1amFHRnlRMjlrWlVGMEtHa3BYRzVjYmlBZ0lDQXZMeUJwY3lCemRYSnliMmRoZEdVZ1kyOXRjRzl1Wlc1MFhHNGdJQ0FnYVdZZ0tHTnZaR1ZRYjJsdWRDQStJREI0UkRkR1JpQW1KaUJqYjJSbFVHOXBiblFnUENBd2VFVXdNREFwSUh0Y2JpQWdJQ0FnSUM4dklHeGhjM1FnWTJoaGNpQjNZWE1nWVNCc1pXRmtYRzRnSUNBZ0lDQnBaaUFvSVd4bFlXUlRkWEp5YjJkaGRHVXBJSHRjYmlBZ0lDQWdJQ0FnTHk4Z2JtOGdiR1ZoWkNCNVpYUmNiaUFnSUNBZ0lDQWdhV1lnS0dOdlpHVlFiMmx1ZENBK0lEQjRSRUpHUmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SUhWdVpYaHdaV04wWldRZ2RISmhhV3hjYmlBZ0lDQWdJQ0FnSUNCcFppQW9LSFZ1YVhSeklDMDlJRE1wSUQ0Z0xURXBJR0o1ZEdWekxuQjFjMmdvTUhoRlJpd2dNSGhDUml3Z01IaENSQ2xjYmlBZ0lDQWdJQ0FnSUNCamIyNTBhVzUxWlZ4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHa2dLeUF4SUQwOVBTQnNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0F2THlCMWJuQmhhWEpsWkNCc1pXRmtYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tDaDFibWwwY3lBdFBTQXpLU0ErSUMweEtTQmllWFJsY3k1d2RYTm9LREI0UlVZc0lEQjRRa1lzSURCNFFrUXBYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHbHVkV1ZjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJSFpoYkdsa0lHeGxZV1JjYmlBZ0lDQWdJQ0FnYkdWaFpGTjFjbkp2WjJGMFpTQTlJR052WkdWUWIybHVkRnh1WEc0Z0lDQWdJQ0FnSUdOdmJuUnBiblZsWEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklESWdiR1ZoWkhNZ2FXNGdZU0J5YjNkY2JpQWdJQ0FnSUdsbUlDaGpiMlJsVUc5cGJuUWdQQ0F3ZUVSRE1EQXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDaDFibWwwY3lBdFBTQXpLU0ErSUMweEtTQmllWFJsY3k1d2RYTm9LREI0UlVZc0lEQjRRa1lzSURCNFFrUXBYRzRnSUNBZ0lDQWdJR3hsWVdSVGRYSnliMmRoZEdVZ1BTQmpiMlJsVUc5cGJuUmNiaUFnSUNBZ0lDQWdZMjl1ZEdsdWRXVmNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMeThnZG1Gc2FXUWdjM1Z5Y205bllYUmxJSEJoYVhKY2JpQWdJQ0FnSUdOdlpHVlFiMmx1ZENBOUlDaHNaV0ZrVTNWeWNtOW5ZWFJsSUMwZ01IaEVPREF3SUR3OElERXdJSHdnWTI5a1pWQnZhVzUwSUMwZ01IaEVRekF3S1NBcklEQjRNVEF3TURCY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0d4bFlXUlRkWEp5YjJkaGRHVXBJSHRjYmlBZ0lDQWdJQzh2SUhaaGJHbGtJR0p0Y0NCamFHRnlMQ0JpZFhRZ2JHRnpkQ0JqYUdGeUlIZGhjeUJoSUd4bFlXUmNiaUFnSUNBZ0lHbG1JQ2dvZFc1cGRITWdMVDBnTXlrZ1BpQXRNU2tnWW5sMFpYTXVjSFZ6YUNnd2VFVkdMQ0F3ZUVKR0xDQXdlRUpFS1Z4dUlDQWdJSDFjYmx4dUlDQWdJR3hsWVdSVGRYSnliMmRoZEdVZ1BTQnVkV3hzWEc1Y2JpQWdJQ0F2THlCbGJtTnZaR1VnZFhSbU9GeHVJQ0FnSUdsbUlDaGpiMlJsVUc5cGJuUWdQQ0F3ZURnd0tTQjdYRzRnSUNBZ0lDQnBaaUFvS0hWdWFYUnpJQzA5SURFcElEd2dNQ2tnWW5KbFlXdGNiaUFnSUNBZ0lHSjVkR1Z6TG5CMWMyZ29ZMjlrWlZCdmFXNTBLVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9ZMjlrWlZCdmFXNTBJRHdnTUhnNE1EQXBJSHRjYmlBZ0lDQWdJR2xtSUNnb2RXNXBkSE1nTFQwZ01pa2dQQ0F3S1NCaWNtVmhhMXh1SUNBZ0lDQWdZbmwwWlhNdWNIVnphQ2hjYmlBZ0lDQWdJQ0FnWTI5a1pWQnZhVzUwSUQ0K0lEQjROaUI4SURCNFF6QXNYRzRnSUNBZ0lDQWdJR052WkdWUWIybHVkQ0FtSURCNE0wWWdmQ0F3ZURnd1hHNGdJQ0FnSUNBcFhHNGdJQ0FnZlNCbGJITmxJR2xtSUNoamIyUmxVRzlwYm5RZ1BDQXdlREV3TURBd0tTQjdYRzRnSUNBZ0lDQnBaaUFvS0hWdWFYUnpJQzA5SURNcElEd2dNQ2tnWW5KbFlXdGNiaUFnSUNBZ0lHSjVkR1Z6TG5CMWMyZ29YRzRnSUNBZ0lDQWdJR052WkdWUWIybHVkQ0ErUGlBd2VFTWdmQ0F3ZUVVd0xGeHVJQ0FnSUNBZ0lDQmpiMlJsVUc5cGJuUWdQajRnTUhnMklDWWdNSGd6UmlCOElEQjRPREFzWEc0Z0lDQWdJQ0FnSUdOdlpHVlFiMmx1ZENBbUlEQjRNMFlnZkNBd2VEZ3dYRzRnSUNBZ0lDQXBYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGpiMlJsVUc5cGJuUWdQQ0F3ZURFeE1EQXdNQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tDaDFibWwwY3lBdFBTQTBLU0E4SURBcElHSnlaV0ZyWEc0Z0lDQWdJQ0JpZVhSbGN5NXdkWE5vS0Z4dUlDQWdJQ0FnSUNCamIyUmxVRzlwYm5RZ1BqNGdNSGd4TWlCOElEQjRSakFzWEc0Z0lDQWdJQ0FnSUdOdlpHVlFiMmx1ZENBK1BpQXdlRU1nSmlBd2VETkdJSHdnTUhnNE1DeGNiaUFnSUNBZ0lDQWdZMjlrWlZCdmFXNTBJRDQrSURCNE5pQW1JREI0TTBZZ2ZDQXdlRGd3TEZ4dUlDQWdJQ0FnSUNCamIyUmxVRzlwYm5RZ0ppQXdlRE5HSUh3Z01IZzRNRnh1SUNBZ0lDQWdLVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjBsdWRtRnNhV1FnWTI5a1pTQndiMmx1ZENjcFhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdKNWRHVnpYRzU5WEc1Y2JtWjFibU4wYVc5dUlHRnpZMmxwVkc5Q2VYUmxjeUFvYzNSeUtTQjdYRzRnSUhaaGNpQmllWFJsUVhKeVlYa2dQU0JiWFZ4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSE4wY2k1c1pXNW5kR2c3SUNzcmFTa2dlMXh1SUNBZ0lDOHZJRTV2WkdVbmN5QmpiMlJsSUhObFpXMXpJSFJ2SUdKbElHUnZhVzVuSUhSb2FYTWdZVzVrSUc1dmRDQW1JREI0TjBZdUxseHVJQ0FnSUdKNWRHVkJjbkpoZVM1d2RYTm9LSE4wY2k1amFHRnlRMjlrWlVGMEtHa3BJQ1lnTUhoR1JpbGNiaUFnZlZ4dUlDQnlaWFIxY200Z1lubDBaVUZ5Y21GNVhHNTlYRzVjYm1aMWJtTjBhVzl1SUhWMFpqRTJiR1ZVYjBKNWRHVnpJQ2h6ZEhJc0lIVnVhWFJ6S1NCN1hHNGdJSFpoY2lCakxDQm9hU3dnYkc5Y2JpQWdkbUZ5SUdKNWRHVkJjbkpoZVNBOUlGdGRYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2MzUnlMbXhsYm1kMGFEc2dLeXRwS1NCN1hHNGdJQ0FnYVdZZ0tDaDFibWwwY3lBdFBTQXlLU0E4SURBcElHSnlaV0ZyWEc1Y2JpQWdJQ0JqSUQwZ2MzUnlMbU5vWVhKRGIyUmxRWFFvYVNsY2JpQWdJQ0JvYVNBOUlHTWdQajRnT0Z4dUlDQWdJR3h2SUQwZ1l5QWxJREkxTmx4dUlDQWdJR0o1ZEdWQmNuSmhlUzV3ZFhOb0tHeHZLVnh1SUNBZ0lHSjVkR1ZCY25KaGVTNXdkWE5vS0docEtWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHSjVkR1ZCY25KaGVWeHVmVnh1WEc1bWRXNWpkR2x2YmlCaVlYTmxOalJVYjBKNWRHVnpJQ2h6ZEhJcElIdGNiaUFnY21WMGRYSnVJR0poYzJVMk5DNTBiMEo1ZEdWQmNuSmhlU2hpWVhObE5qUmpiR1ZoYmloemRISXBLVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmliR2wwUW5WbVptVnlJQ2h6Y21Nc0lHUnpkQ3dnYjJabWMyVjBMQ0JzWlc1bmRHZ3BJSHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnNaVzVuZEdnN0lDc3JhU2tnZTF4dUlDQWdJR2xtSUNnb2FTQXJJRzltWm5ObGRDQStQU0JrYzNRdWJHVnVaM1JvS1NCOGZDQW9hU0ErUFNCemNtTXViR1Z1WjNSb0tTa2dZbkpsWVd0Y2JpQWdJQ0JrYzNSYmFTQXJJRzltWm5ObGRGMGdQU0J6Y21OYmFWMWNiaUFnZlZ4dUlDQnlaWFIxY200Z2FWeHVmVnh1WEc1bWRXNWpkR2x2YmlCcGMyNWhiaUFvZG1Gc0tTQjdYRzRnSUhKbGRIVnliaUIyWVd3Z0lUMDlJSFpoYkNBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxc2FXNWxJRzV2TFhObGJHWXRZMjl0Y0dGeVpWeHVmVnh1SWl3aWRtRnlJSFJ2VTNSeWFXNW5JRDBnZTMwdWRHOVRkSEpwYm1jN1hHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdRWEp5WVhrdWFYTkJjbkpoZVNCOGZDQm1kVzVqZEdsdmJpQW9ZWEp5S1NCN1hHNGdJSEpsZEhWeWJpQjBiMU4wY21sdVp5NWpZV3hzS0dGeWNpa2dQVDBnSjF0dlltcGxZM1FnUVhKeVlYbGRKenRjYm4wN1hHNGlMQ0pjSW5WelpTQnpkSEpwWTNSY0lseHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR055WldGMFpWSkNWSEpsWlZ4dVhHNTJZWElnVWtWRUlDQWdQU0F3WEc1MllYSWdRa3hCUTBzZ1BTQXhYRzVjYm1aMWJtTjBhVzl1SUZKQ1RtOWtaU2hqYjJ4dmNpd2dhMlY1TENCMllXeDFaU3dnYkdWbWRDd2djbWxuYUhRc0lHTnZkVzUwS1NCN1hHNGdJSFJvYVhNdVgyTnZiRzl5SUQwZ1kyOXNiM0pjYmlBZ2RHaHBjeTVyWlhrZ1BTQnJaWGxjYmlBZ2RHaHBjeTUyWVd4MVpTQTlJSFpoYkhWbFhHNGdJSFJvYVhNdWJHVm1kQ0E5SUd4bFpuUmNiaUFnZEdocGN5NXlhV2RvZENBOUlISnBaMmgwWEc0Z0lIUm9hWE11WDJOdmRXNTBJRDBnWTI5MWJuUmNibjFjYmx4dVpuVnVZM1JwYjI0Z1kyeHZibVZPYjJSbEtHNXZaR1VwSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJTUWs1dlpHVW9ibTlrWlM1ZlkyOXNiM0lzSUc1dlpHVXVhMlY1TENCdWIyUmxMblpoYkhWbExDQnViMlJsTG14bFpuUXNJRzV2WkdVdWNtbG5hSFFzSUc1dlpHVXVYMk52ZFc1MEtWeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpYQmhhVzUwS0dOdmJHOXlMQ0J1YjJSbEtTQjdYRzRnSUhKbGRIVnliaUJ1WlhjZ1VrSk9iMlJsS0dOdmJHOXlMQ0J1YjJSbExtdGxlU3dnYm05a1pTNTJZV3gxWlN3Z2JtOWtaUzVzWldaMExDQnViMlJsTG5KcFoyaDBMQ0J1YjJSbExsOWpiM1Z1ZENsY2JuMWNibHh1Wm5WdVkzUnBiMjRnY21WamIzVnVkQ2h1YjJSbEtTQjdYRzRnSUc1dlpHVXVYMk52ZFc1MElEMGdNU0FySUNodWIyUmxMbXhsWm5RZ1B5QnViMlJsTG14bFpuUXVYMk52ZFc1MElEb2dNQ2tnS3lBb2JtOWtaUzV5YVdkb2RDQS9JRzV2WkdVdWNtbG5hSFF1WDJOdmRXNTBJRG9nTUNsY2JuMWNibHh1Wm5WdVkzUnBiMjRnVW1Wa1FteGhZMnRVY21WbEtHTnZiWEJoY21Vc0lISnZiM1FwSUh0Y2JpQWdkR2hwY3k1ZlkyOXRjR0Z5WlNBOUlHTnZiWEJoY21WY2JpQWdkR2hwY3k1eWIyOTBJRDBnY205dmRGeHVmVnh1WEc1MllYSWdjSEp2ZEc4Z1BTQlNaV1JDYkdGamExUnlaV1V1Y0hKdmRHOTBlWEJsWEc1Y2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2h3Y205MGJ5d2dYQ0pyWlhselhDSXNJSHRjYmlBZ1oyVjBPaUJtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0IyWVhJZ2NtVnpkV3gwSUQwZ1cxMWNiaUFnSUNCMGFHbHpMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNG9heXgyS1NCN1hHNGdJQ0FnSUNCeVpYTjFiSFF1Y0hWemFDaHJLVnh1SUNBZ0lIMHBYRzRnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRnh1SUNCOVhHNTlLVnh1WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29jSEp2ZEc4c0lGd2lkbUZzZFdWelhDSXNJSHRjYmlBZ1oyVjBPaUJtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0IyWVhJZ2NtVnpkV3gwSUQwZ1cxMWNiaUFnSUNCMGFHbHpMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNG9heXgyS1NCN1hHNGdJQ0FnSUNCeVpYTjFiSFF1Y0hWemFDaDJLVnh1SUNBZ0lIMHBYRzRnSUNBZ2NtVjBkWEp1SUhKbGMzVnNkRnh1SUNCOVhHNTlLVnh1WEc0dkwxSmxkSFZ5Ym5NZ2RHaGxJRzUxYldKbGNpQnZaaUJ1YjJSbGN5QnBiaUIwYUdVZ2RISmxaVnh1VDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtIQnliM1J2TENCY0lteGxibWQwYUZ3aUxDQjdYRzRnSUdkbGREb2dablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdhV1lvZEdocGN5NXliMjkwS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXliMjkwTGw5amIzVnVkRnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnTUZ4dUlDQjlYRzU5S1Z4dVhHNHZMMGx1YzJWeWRDQmhJRzVsZHlCcGRHVnRJR2x1ZEc4Z2RHaGxJSFJ5WldWY2JuQnliM1J2TG1sdWMyVnlkQ0E5SUdaMWJtTjBhVzl1S0d0bGVTd2dkbUZzZFdVcElIdGNiaUFnZG1GeUlHTnRjQ0E5SUhSb2FYTXVYMk52YlhCaGNtVmNiaUFnTHk5R2FXNWtJSEJ2YVc1MElIUnZJR2x1YzJWeWRDQnVaWGNnYm05a1pTQmhkRnh1SUNCMllYSWdiaUE5SUhSb2FYTXVjbTl2ZEZ4dUlDQjJZWElnYmw5emRHRmpheUE5SUZ0ZFhHNGdJSFpoY2lCa1gzTjBZV05ySUQwZ1cxMWNiaUFnZDJocGJHVW9iaWtnZTF4dUlDQWdJSFpoY2lCa0lEMGdZMjF3S0d0bGVTd2diaTVyWlhrcFhHNGdJQ0FnYmw5emRHRmpheTV3ZFhOb0tHNHBYRzRnSUNBZ1pGOXpkR0ZqYXk1d2RYTm9LR1FwWEc0Z0lDQWdhV1lvWkNBOFBTQXdLU0I3WEc0Z0lDQWdJQ0J1SUQwZ2JpNXNaV1owWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHNGdQU0J1TG5KcFoyaDBYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lDOHZVbVZpZFdsc1pDQndZWFJvSUhSdklHeGxZV1lnYm05a1pWeHVJQ0J1WDNOMFlXTnJMbkIxYzJnb2JtVjNJRkpDVG05a1pTaFNSVVFzSUd0bGVTd2dkbUZzZFdVc0lHNTFiR3dzSUc1MWJHd3NJREVwS1Z4dUlDQm1iM0lvZG1GeUlITTlibDl6ZEdGamF5NXNaVzVuZEdndE1qc2djejQ5TURzZ0xTMXpLU0I3WEc0Z0lDQWdkbUZ5SUc0Z1BTQnVYM04wWVdOclczTmRYRzRnSUNBZ2FXWW9aRjl6ZEdGamExdHpYU0E4UFNBd0tTQjdYRzRnSUNBZ0lDQnVYM04wWVdOclczTmRJRDBnYm1WM0lGSkNUbTlrWlNodUxsOWpiMnh2Y2l3Z2JpNXJaWGtzSUc0dWRtRnNkV1VzSUc1ZmMzUmhZMnRiY3lzeFhTd2diaTV5YVdkb2RDd2diaTVmWTI5MWJuUXJNU2xjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2JsOXpkR0ZqYTF0elhTQTlJRzVsZHlCU1FrNXZaR1VvYmk1ZlkyOXNiM0lzSUc0dWEyVjVMQ0J1TG5aaGJIVmxMQ0J1TG14bFpuUXNJRzVmYzNSaFkydGJjeXN4WFN3Z2JpNWZZMjkxYm5Rck1TbGNiaUFnSUNCOVhHNGdJSDFjYmlBZ0x5OVNaV0poYkdGdVkyVWdkSEpsWlNCMWMybHVaeUJ5YjNSaGRHbHZibk5jYmlBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSW5OMFlYSjBJR2x1YzJWeWRGd2lMQ0JyWlhrc0lHUmZjM1JoWTJzcFhHNGdJR1p2Y2loMllYSWdjejF1WDNOMFlXTnJMbXhsYm1kMGFDMHhPeUJ6UGpFN0lDMHRjeWtnZTF4dUlDQWdJSFpoY2lCd0lEMGdibDl6ZEdGamExdHpMVEZkWEc0Z0lDQWdkbUZ5SUc0Z1BTQnVYM04wWVdOclczTmRYRzRnSUNBZ2FXWW9jQzVmWTI5c2IzSWdQVDA5SUVKTVFVTkxJSHg4SUc0dVgyTnZiRzl5SUQwOVBTQkNURUZEU3lrZ2UxeHVJQ0FnSUNBZ1luSmxZV3RjYmlBZ0lDQjlYRzRnSUNBZ2RtRnlJSEJ3SUQwZ2JsOXpkR0ZqYTF0ekxUSmRYRzRnSUNBZ2FXWW9jSEF1YkdWbWRDQTlQVDBnY0NrZ2UxeHVJQ0FnSUNBZ2FXWW9jQzVzWldaMElEMDlQU0J1S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUI1SUQwZ2NIQXVjbWxuYUhSY2JpQWdJQ0FnSUNBZ2FXWW9lU0FtSmlCNUxsOWpiMnh2Y2lBOVBUMGdVa1ZFS1NCN1hHNGdJQ0FnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnloY0lreE1jbHdpS1Z4dUlDQWdJQ0FnSUNBZ0lIQXVYMk52Ykc5eUlEMGdRa3hCUTB0Y2JpQWdJQ0FnSUNBZ0lDQndjQzV5YVdkb2RDQTlJSEpsY0dGcGJuUW9Ra3hCUTBzc0lIa3BYRzRnSUNBZ0lDQWdJQ0FnY0hBdVgyTnZiRzl5SUQwZ1VrVkVYRzRnSUNBZ0lDQWdJQ0FnY3lBdFBTQXhYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk5amIyNXpiMnhsTG14dlp5aGNJa3hNWWx3aUtWeHVJQ0FnSUNBZ0lDQWdJSEJ3TGw5amIyeHZjaUE5SUZKRlJGeHVJQ0FnSUNBZ0lDQWdJSEJ3TG14bFpuUWdQU0J3TG5KcFoyaDBYRzRnSUNBZ0lDQWdJQ0FnY0M1ZlkyOXNiM0lnUFNCQ1RFRkRTMXh1SUNBZ0lDQWdJQ0FnSUhBdWNtbG5hSFFnUFNCd2NGeHVJQ0FnSUNBZ0lDQWdJRzVmYzNSaFkydGJjeTB5WFNBOUlIQmNiaUFnSUNBZ0lDQWdJQ0J1WDNOMFlXTnJXM010TVYwZ1BTQnVYRzRnSUNBZ0lDQWdJQ0FnY21WamIzVnVkQ2h3Y0NsY2JpQWdJQ0FnSUNBZ0lDQnlaV052ZFc1MEtIQXBYRzRnSUNBZ0lDQWdJQ0FnYVdZb2N5QStQU0F6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2NIQndJRDBnYmw5emRHRmphMXR6TFROZFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlod2NIQXViR1ZtZENBOVBUMGdjSEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hCd0xteGxablFnUFNCd1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQndjSEF1Y21sbmFIUWdQU0J3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lHSnlaV0ZyWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQjVJRDBnY0hBdWNtbG5hSFJjYmlBZ0lDQWdJQ0FnYVdZb2VTQW1KaUI1TGw5amIyeHZjaUE5UFQwZ1VrVkVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSWt4U2Nsd2lLVnh1SUNBZ0lDQWdJQ0FnSUhBdVgyTnZiRzl5SUQwZ1FreEJRMHRjYmlBZ0lDQWdJQ0FnSUNCd2NDNXlhV2RvZENBOUlISmxjR0ZwYm5Rb1FreEJRMHNzSUhrcFhHNGdJQ0FnSUNBZ0lDQWdjSEF1WDJOdmJHOXlJRDBnVWtWRVhHNGdJQ0FnSUNBZ0lDQWdjeUF0UFNBeFhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnloY0lreFNZbHdpS1Z4dUlDQWdJQ0FnSUNBZ0lIQXVjbWxuYUhRZ1BTQnVMbXhsWm5SY2JpQWdJQ0FnSUNBZ0lDQndjQzVmWTI5c2IzSWdQU0JTUlVSY2JpQWdJQ0FnSUNBZ0lDQndjQzVzWldaMElEMGdiaTV5YVdkb2RGeHVJQ0FnSUNBZ0lDQWdJRzR1WDJOdmJHOXlJRDBnUWt4QlEwdGNiaUFnSUNBZ0lDQWdJQ0J1TG14bFpuUWdQU0J3WEc0Z0lDQWdJQ0FnSUNBZ2JpNXlhV2RvZENBOUlIQndYRzRnSUNBZ0lDQWdJQ0FnYmw5emRHRmphMXR6TFRKZElEMGdibHh1SUNBZ0lDQWdJQ0FnSUc1ZmMzUmhZMnRiY3kweFhTQTlJSEJjYmlBZ0lDQWdJQ0FnSUNCeVpXTnZkVzUwS0hCd0tWeHVJQ0FnSUNBZ0lDQWdJSEpsWTI5MWJuUW9jQ2xjYmlBZ0lDQWdJQ0FnSUNCeVpXTnZkVzUwS0c0cFhHNGdJQ0FnSUNBZ0lDQWdhV1lvY3lBK1BTQXpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnY0hCd0lEMGdibDl6ZEdGamExdHpMVE5kWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaWh3Y0hBdWJHVm1kQ0E5UFQwZ2NIQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEJ3TG14bFpuUWdQU0J1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NIQXVjbWxuYUhRZ1BTQnVYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2FXWW9jQzV5YVdkb2RDQTlQVDBnYmlrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnZVNBOUlIQndMbXhsWm5SY2JpQWdJQ0FnSUNBZ2FXWW9lU0FtSmlCNUxsOWpiMnh2Y2lBOVBUMGdVa1ZFS1NCN1hHNGdJQ0FnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnloY0lsSlNjbHdpTENCNUxtdGxlU2xjYmlBZ0lDQWdJQ0FnSUNCd0xsOWpiMnh2Y2lBOUlFSk1RVU5MWEc0Z0lDQWdJQ0FnSUNBZ2NIQXViR1ZtZENBOUlISmxjR0ZwYm5Rb1FreEJRMHNzSUhrcFhHNGdJQ0FnSUNBZ0lDQWdjSEF1WDJOdmJHOXlJRDBnVWtWRVhHNGdJQ0FnSUNBZ0lDQWdjeUF0UFNBeFhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnloY0lsSlNZbHdpS1Z4dUlDQWdJQ0FnSUNBZ0lIQndMbDlqYjJ4dmNpQTlJRkpGUkZ4dUlDQWdJQ0FnSUNBZ0lIQndMbkpwWjJoMElEMGdjQzVzWldaMFhHNGdJQ0FnSUNBZ0lDQWdjQzVmWTI5c2IzSWdQU0JDVEVGRFMxeHVJQ0FnSUNBZ0lDQWdJSEF1YkdWbWRDQTlJSEJ3WEc0Z0lDQWdJQ0FnSUNBZ2JsOXpkR0ZqYTF0ekxUSmRJRDBnY0Z4dUlDQWdJQ0FnSUNBZ0lHNWZjM1JoWTJ0YmN5MHhYU0E5SUc1Y2JpQWdJQ0FnSUNBZ0lDQnlaV052ZFc1MEtIQndLVnh1SUNBZ0lDQWdJQ0FnSUhKbFkyOTFiblFvY0NsY2JpQWdJQ0FnSUNBZ0lDQnBaaWh6SUQ0OUlETXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ3Y0hBZ1BTQnVYM04wWVdOclczTXRNMTFjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1LSEJ3Y0M1eWFXZG9kQ0E5UFQwZ2NIQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEJ3TG5KcFoyaDBJRDBnY0Z4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2NIQndMbXhsWm5RZ1BTQndYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCNUlEMGdjSEF1YkdWbWRGeHVJQ0FnSUNBZ0lDQnBaaWg1SUNZbUlIa3VYMk52Ykc5eUlEMDlQU0JTUlVRcElIdGNiaUFnSUNBZ0lDQWdJQ0F2TDJOdmJuTnZiR1V1Ykc5bktGd2lVa3h5WENJcFhHNGdJQ0FnSUNBZ0lDQWdjQzVmWTI5c2IzSWdQU0JDVEVGRFMxeHVJQ0FnSUNBZ0lDQWdJSEJ3TG14bFpuUWdQU0J5WlhCaGFXNTBLRUpNUVVOTExDQjVLVnh1SUNBZ0lDQWdJQ0FnSUhCd0xsOWpiMnh2Y2lBOUlGSkZSRnh1SUNBZ0lDQWdJQ0FnSUhNZ0xUMGdNVnh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUM4dlkyOXVjMjlzWlM1c2IyY29YQ0pTVEdKY0lpbGNiaUFnSUNBZ0lDQWdJQ0J3TG14bFpuUWdQU0J1TG5KcFoyaDBYRzRnSUNBZ0lDQWdJQ0FnY0hBdVgyTnZiRzl5SUQwZ1VrVkVYRzRnSUNBZ0lDQWdJQ0FnY0hBdWNtbG5hSFFnUFNCdUxteGxablJjYmlBZ0lDQWdJQ0FnSUNCdUxsOWpiMnh2Y2lBOUlFSk1RVU5MWEc0Z0lDQWdJQ0FnSUNBZ2JpNXlhV2RvZENBOUlIQmNiaUFnSUNBZ0lDQWdJQ0J1TG14bFpuUWdQU0J3Y0Z4dUlDQWdJQ0FnSUNBZ0lHNWZjM1JoWTJ0YmN5MHlYU0E5SUc1Y2JpQWdJQ0FnSUNBZ0lDQnVYM04wWVdOclczTXRNVjBnUFNCd1hHNGdJQ0FnSUNBZ0lDQWdjbVZqYjNWdWRDaHdjQ2xjYmlBZ0lDQWdJQ0FnSUNCeVpXTnZkVzUwS0hBcFhHNGdJQ0FnSUNBZ0lDQWdjbVZqYjNWdWRDaHVLVnh1SUNBZ0lDQWdJQ0FnSUdsbUtITWdQajBnTXlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIQndjQ0E5SUc1ZmMzUmhZMnRiY3kwelhWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZb2NIQndMbkpwWjJoMElEMDlQU0J3Y0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NIQXVjbWxuYUhRZ1BTQnVYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y0hBdWJHVm1kQ0E5SUc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1SUNBdkwxSmxkSFZ5YmlCdVpYY2dkSEpsWlZ4dUlDQnVYM04wWVdOcld6QmRMbDlqYjJ4dmNpQTlJRUpNUVVOTFhHNGdJSEpsZEhWeWJpQnVaWGNnVW1Wa1FteGhZMnRVY21WbEtHTnRjQ3dnYmw5emRHRmphMXN3WFNsY2JuMWNibHh1WEc0dkwxWnBjMmwwSUdGc2JDQnViMlJsY3lCcGJtOXlaR1Z5WEc1bWRXNWpkR2x2YmlCa2IxWnBjMmwwUm5Wc2JDaDJhWE5wZEN3Z2JtOWtaU2tnZTF4dUlDQnBaaWh1YjJSbExteGxablFwSUh0Y2JpQWdJQ0IyWVhJZ2RpQTlJR1J2Vm1semFYUkdkV3hzS0hacGMybDBMQ0J1YjJSbExteGxablFwWEc0Z0lDQWdhV1lvZGlrZ2V5QnlaWFIxY200Z2RpQjlYRzRnSUgxY2JpQWdkbUZ5SUhZZ1BTQjJhWE5wZENodWIyUmxMbXRsZVN3Z2JtOWtaUzUyWVd4MVpTbGNiaUFnYVdZb2Rpa2dleUJ5WlhSMWNtNGdkaUI5WEc0Z0lHbG1LRzV2WkdVdWNtbG5hSFFwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdaRzlXYVhOcGRFWjFiR3dvZG1semFYUXNJRzV2WkdVdWNtbG5hSFFwWEc0Z0lIMWNibjFjYmx4dUx5OVdhWE5wZENCb1lXeG1JRzV2WkdWeklHbHVJRzl5WkdWeVhHNW1kVzVqZEdsdmJpQmtiMVpwYzJsMFNHRnNaaWhzYnl3Z1kyOXRjR0Z5WlN3Z2RtbHphWFFzSUc1dlpHVXBJSHRjYmlBZ2RtRnlJR3dnUFNCamIyMXdZWEpsS0d4dkxDQnViMlJsTG10bGVTbGNiaUFnYVdZb2JDQThQU0F3S1NCN1hHNGdJQ0FnYVdZb2JtOWtaUzVzWldaMEtTQjdYRzRnSUNBZ0lDQjJZWElnZGlBOUlHUnZWbWx6YVhSSVlXeG1LR3h2TENCamIyMXdZWEpsTENCMmFYTnBkQ3dnYm05a1pTNXNaV1owS1Z4dUlDQWdJQ0FnYVdZb2Rpa2dleUJ5WlhSMWNtNGdkaUI5WEc0Z0lDQWdmVnh1SUNBZ0lIWmhjaUIySUQwZ2RtbHphWFFvYm05a1pTNXJaWGtzSUc1dlpHVXVkbUZzZFdVcFhHNGdJQ0FnYVdZb2Rpa2dleUJ5WlhSMWNtNGdkaUI5WEc0Z0lIMWNiaUFnYVdZb2JtOWtaUzV5YVdkb2RDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCa2IxWnBjMmwwU0dGc1ppaHNieXdnWTI5dGNHRnlaU3dnZG1semFYUXNJRzV2WkdVdWNtbG5hSFFwWEc0Z0lIMWNibjFjYmx4dUx5OVdhWE5wZENCaGJHd2dibTlrWlhNZ2QybDBhR2x1SUdFZ2NtRnVaMlZjYm1aMWJtTjBhVzl1SUdSdlZtbHphWFFvYkc4c0lHaHBMQ0JqYjIxd1lYSmxMQ0IyYVhOcGRDd2dibTlrWlNrZ2UxeHVJQ0IyWVhJZ2JDQTlJR052YlhCaGNtVW9iRzhzSUc1dlpHVXVhMlY1S1Z4dUlDQjJZWElnYUNBOUlHTnZiWEJoY21Vb2FHa3NJRzV2WkdVdWEyVjVLVnh1SUNCMllYSWdkbHh1SUNCcFppaHNJRHc5SURBcElIdGNiaUFnSUNCcFppaHViMlJsTG14bFpuUXBJSHRjYmlBZ0lDQWdJSFlnUFNCa2IxWnBjMmwwS0d4dkxDQm9hU3dnWTI5dGNHRnlaU3dnZG1semFYUXNJRzV2WkdVdWJHVm1kQ2xjYmlBZ0lDQWdJR2xtS0hZcElIc2djbVYwZFhKdUlIWWdmVnh1SUNBZ0lIMWNiaUFnSUNCcFppaG9JRDRnTUNrZ2UxeHVJQ0FnSUNBZ2RpQTlJSFpwYzJsMEtHNXZaR1V1YTJWNUxDQnViMlJsTG5aaGJIVmxLVnh1SUNBZ0lDQWdhV1lvZGlrZ2V5QnlaWFIxY200Z2RpQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lHbG1LR2dnUGlBd0lDWW1JRzV2WkdVdWNtbG5hSFFwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdaRzlXYVhOcGRDaHNieXdnYUdrc0lHTnZiWEJoY21Vc0lIWnBjMmwwTENCdWIyUmxMbkpwWjJoMEtWeHVJQ0I5WEc1OVhHNWNibHh1Y0hKdmRHOHVabTl5UldGamFDQTlJR1oxYm1OMGFXOXVJSEppVkhKbFpVWnZja1ZoWTJnb2RtbHphWFFzSUd4dkxDQm9hU2tnZTF4dUlDQnBaaWdoZEdocGN5NXliMjkwS1NCN1hHNGdJQ0FnY21WMGRYSnVYRzRnSUgxY2JpQWdjM2RwZEdOb0tHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdncElIdGNiaUFnSUNCallYTmxJREU2WEc0Z0lDQWdJQ0J5WlhSMWNtNGdaRzlXYVhOcGRFWjFiR3dvZG1semFYUXNJSFJvYVhNdWNtOXZkQ2xjYmlBZ0lDQmljbVZoYTF4dVhHNGdJQ0FnWTJGelpTQXlPbHh1SUNBZ0lDQWdjbVYwZFhKdUlHUnZWbWx6YVhSSVlXeG1LR3h2TENCMGFHbHpMbDlqYjIxd1lYSmxMQ0IyYVhOcGRDd2dkR2hwY3k1eWIyOTBLVnh1SUNBZ0lHSnlaV0ZyWEc1Y2JpQWdJQ0JqWVhObElETTZYRzRnSUNBZ0lDQnBaaWgwYUdsekxsOWpiMjF3WVhKbEtHeHZMQ0JvYVNrZ1BqMGdNQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSEpsZEhWeWJpQmtiMVpwYzJsMEtHeHZMQ0JvYVN3Z2RHaHBjeTVmWTI5dGNHRnlaU3dnZG1semFYUXNJSFJvYVhNdWNtOXZkQ2xjYmlBZ0lDQmljbVZoYTF4dUlDQjlYRzU5WEc1Y2JpOHZSbWx5YzNRZ2FYUmxiU0JwYmlCc2FYTjBYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2NISnZkRzhzSUZ3aVltVm5hVzVjSWl3Z2UxeHVJQ0JuWlhRNklHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lIWmhjaUJ6ZEdGamF5QTlJRnRkWEc0Z0lDQWdkbUZ5SUc0Z1BTQjBhR2x6TG5KdmIzUmNiaUFnSUNCM2FHbHNaU2h1S1NCN1hHNGdJQ0FnSUNCemRHRmpheTV3ZFhOb0tHNHBYRzRnSUNBZ0lDQnVJRDBnYmk1c1pXWjBYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1VtVmtRbXhoWTJ0VWNtVmxTWFJsY21GMGIzSW9kR2hwY3l3Z2MzUmhZMnNwWEc0Z0lIMWNibjBwWEc1Y2JpOHZUR0Z6ZENCcGRHVnRJR2x1SUd4cGMzUmNiazlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNod2NtOTBieXdnWENKbGJtUmNJaXdnZTF4dUlDQm5aWFE2SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUhaaGNpQnpkR0ZqYXlBOUlGdGRYRzRnSUNBZ2RtRnlJRzRnUFNCMGFHbHpMbkp2YjNSY2JpQWdJQ0IzYUdsc1pTaHVLU0I3WEc0Z0lDQWdJQ0J6ZEdGamF5NXdkWE5vS0c0cFhHNGdJQ0FnSUNCdUlEMGdiaTV5YVdkb2RGeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdibVYzSUZKbFpFSnNZV05yVkhKbFpVbDBaWEpoZEc5eUtIUm9hWE1zSUhOMFlXTnJLVnh1SUNCOVhHNTlLVnh1WEc0dkwwWnBibVFnZEdobElHbDBhQ0JwZEdWdElHbHVJSFJvWlNCMGNtVmxYRzV3Y205MGJ5NWhkQ0E5SUdaMWJtTjBhVzl1S0dsa2VDa2dlMXh1SUNCcFppaHBaSGdnUENBd0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlNaV1JDYkdGamExUnlaV1ZKZEdWeVlYUnZjaWgwYUdsekxDQmJYU2xjYmlBZ2ZWeHVJQ0IyWVhJZ2JpQTlJSFJvYVhNdWNtOXZkRnh1SUNCMllYSWdjM1JoWTJzZ1BTQmJYVnh1SUNCM2FHbHNaU2gwY25WbEtTQjdYRzRnSUNBZ2MzUmhZMnN1Y0hWemFDaHVLVnh1SUNBZ0lHbG1LRzR1YkdWbWRDa2dlMXh1SUNBZ0lDQWdhV1lvYVdSNElEd2diaTVzWldaMExsOWpiM1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnVJRDBnYmk1c1pXWjBYRzRnSUNBZ0lDQWdJR052Ym5ScGJuVmxYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnBaSGdnTFQwZ2JpNXNaV1owTGw5amIzVnVkRnh1SUNBZ0lIMWNiaUFnSUNCcFppZ2hhV1I0S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lGSmxaRUpzWVdOclZISmxaVWwwWlhKaGRHOXlLSFJvYVhNc0lITjBZV05yS1Z4dUlDQWdJSDFjYmlBZ0lDQnBaSGdnTFQwZ01WeHVJQ0FnSUdsbUtHNHVjbWxuYUhRcElIdGNiaUFnSUNBZ0lHbG1LR2xrZUNBK1BTQnVMbkpwWjJoMExsOWpiM1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYmlBOUlHNHVjbWxuYUhSY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY21WMGRYSnVJRzVsZHlCU1pXUkNiR0ZqYTFSeVpXVkpkR1Z5WVhSdmNpaDBhR2x6TENCYlhTbGNibjFjYmx4dWNISnZkRzh1WjJVZ1BTQm1kVzVqZEdsdmJpaHJaWGtwSUh0Y2JpQWdkbUZ5SUdOdGNDQTlJSFJvYVhNdVgyTnZiWEJoY21WY2JpQWdkbUZ5SUc0Z1BTQjBhR2x6TG5KdmIzUmNiaUFnZG1GeUlITjBZV05ySUQwZ1cxMWNiaUFnZG1GeUlHeGhjM1JmY0hSeUlEMGdNRnh1SUNCM2FHbHNaU2h1S1NCN1hHNGdJQ0FnZG1GeUlHUWdQU0JqYlhBb2EyVjVMQ0J1TG10bGVTbGNiaUFnSUNCemRHRmpheTV3ZFhOb0tHNHBYRzRnSUNBZ2FXWW9aQ0E4UFNBd0tTQjdYRzRnSUNBZ0lDQnNZWE4wWDNCMGNpQTlJSE4wWVdOckxteGxibWQwYUZ4dUlDQWdJSDFjYmlBZ0lDQnBaaWhrSUR3OUlEQXBJSHRjYmlBZ0lDQWdJRzRnUFNCdUxteGxablJjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2JpQTlJRzR1Y21sbmFIUmNiaUFnSUNCOVhHNGdJSDFjYmlBZ2MzUmhZMnN1YkdWdVozUm9JRDBnYkdGemRGOXdkSEpjYmlBZ2NtVjBkWEp1SUc1bGR5QlNaV1JDYkdGamExUnlaV1ZKZEdWeVlYUnZjaWgwYUdsekxDQnpkR0ZqYXlsY2JuMWNibHh1Y0hKdmRHOHVaM1FnUFNCbWRXNWpkR2x2YmloclpYa3BJSHRjYmlBZ2RtRnlJR050Y0NBOUlIUm9hWE11WDJOdmJYQmhjbVZjYmlBZ2RtRnlJRzRnUFNCMGFHbHpMbkp2YjNSY2JpQWdkbUZ5SUhOMFlXTnJJRDBnVzExY2JpQWdkbUZ5SUd4aGMzUmZjSFJ5SUQwZ01GeHVJQ0IzYUdsc1pTaHVLU0I3WEc0Z0lDQWdkbUZ5SUdRZ1BTQmpiWEFvYTJWNUxDQnVMbXRsZVNsY2JpQWdJQ0J6ZEdGamF5NXdkWE5vS0c0cFhHNGdJQ0FnYVdZb1pDQThJREFwSUh0Y2JpQWdJQ0FnSUd4aGMzUmZjSFJ5SUQwZ2MzUmhZMnN1YkdWdVozUm9YRzRnSUNBZ2ZWeHVJQ0FnSUdsbUtHUWdQQ0F3S1NCN1hHNGdJQ0FnSUNCdUlEMGdiaTVzWldaMFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJRzRnUFNCdUxuSnBaMmgwWEc0Z0lDQWdmVnh1SUNCOVhHNGdJSE4wWVdOckxteGxibWQwYUNBOUlHeGhjM1JmY0hSeVhHNGdJSEpsZEhWeWJpQnVaWGNnVW1Wa1FteGhZMnRVY21WbFNYUmxjbUYwYjNJb2RHaHBjeXdnYzNSaFkyc3BYRzU5WEc1Y2JuQnliM1J2TG14MElEMGdablZ1WTNScGIyNG9hMlY1S1NCN1hHNGdJSFpoY2lCamJYQWdQU0IwYUdsekxsOWpiMjF3WVhKbFhHNGdJSFpoY2lCdUlEMGdkR2hwY3k1eWIyOTBYRzRnSUhaaGNpQnpkR0ZqYXlBOUlGdGRYRzRnSUhaaGNpQnNZWE4wWDNCMGNpQTlJREJjYmlBZ2QyaHBiR1VvYmlrZ2UxeHVJQ0FnSUhaaGNpQmtJRDBnWTIxd0tHdGxlU3dnYmk1clpYa3BYRzRnSUNBZ2MzUmhZMnN1Y0hWemFDaHVLVnh1SUNBZ0lHbG1LR1FnUGlBd0tTQjdYRzRnSUNBZ0lDQnNZWE4wWDNCMGNpQTlJSE4wWVdOckxteGxibWQwYUZ4dUlDQWdJSDFjYmlBZ0lDQnBaaWhrSUR3OUlEQXBJSHRjYmlBZ0lDQWdJRzRnUFNCdUxteGxablJjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2JpQTlJRzR1Y21sbmFIUmNiaUFnSUNCOVhHNGdJSDFjYmlBZ2MzUmhZMnN1YkdWdVozUm9JRDBnYkdGemRGOXdkSEpjYmlBZ2NtVjBkWEp1SUc1bGR5QlNaV1JDYkdGamExUnlaV1ZKZEdWeVlYUnZjaWgwYUdsekxDQnpkR0ZqYXlsY2JuMWNibHh1Y0hKdmRHOHViR1VnUFNCbWRXNWpkR2x2YmloclpYa3BJSHRjYmlBZ2RtRnlJR050Y0NBOUlIUm9hWE11WDJOdmJYQmhjbVZjYmlBZ2RtRnlJRzRnUFNCMGFHbHpMbkp2YjNSY2JpQWdkbUZ5SUhOMFlXTnJJRDBnVzExY2JpQWdkbUZ5SUd4aGMzUmZjSFJ5SUQwZ01GeHVJQ0IzYUdsc1pTaHVLU0I3WEc0Z0lDQWdkbUZ5SUdRZ1BTQmpiWEFvYTJWNUxDQnVMbXRsZVNsY2JpQWdJQ0J6ZEdGamF5NXdkWE5vS0c0cFhHNGdJQ0FnYVdZb1pDQStQU0F3S1NCN1hHNGdJQ0FnSUNCc1lYTjBYM0IwY2lBOUlITjBZV05yTG14bGJtZDBhRnh1SUNBZ0lIMWNiaUFnSUNCcFppaGtJRHdnTUNrZ2UxeHVJQ0FnSUNBZ2JpQTlJRzR1YkdWbWRGeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0J1SUQwZ2JpNXlhV2RvZEZ4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0J6ZEdGamF5NXNaVzVuZEdnZ1BTQnNZWE4wWDNCMGNseHVJQ0J5WlhSMWNtNGdibVYzSUZKbFpFSnNZV05yVkhKbFpVbDBaWEpoZEc5eUtIUm9hWE1zSUhOMFlXTnJLVnh1ZlZ4dVhHNHZMMFpwYm1SeklIUm9aU0JwZEdWdElIZHBkR2dnYTJWNUlHbG1JR2wwSUdWNGFYTjBjMXh1Y0hKdmRHOHVabWx1WkNBOUlHWjFibU4wYVc5dUtHdGxlU2tnZTF4dUlDQjJZWElnWTIxd0lEMGdkR2hwY3k1ZlkyOXRjR0Z5WlZ4dUlDQjJZWElnYmlBOUlIUm9hWE11Y205dmRGeHVJQ0IyWVhJZ2MzUmhZMnNnUFNCYlhWeHVJQ0IzYUdsc1pTaHVLU0I3WEc0Z0lDQWdkbUZ5SUdRZ1BTQmpiWEFvYTJWNUxDQnVMbXRsZVNsY2JpQWdJQ0J6ZEdGamF5NXdkWE5vS0c0cFhHNGdJQ0FnYVdZb1pDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUc1bGR5QlNaV1JDYkdGamExUnlaV1ZKZEdWeVlYUnZjaWgwYUdsekxDQnpkR0ZqYXlsY2JpQWdJQ0I5WEc0Z0lDQWdhV1lvWkNBOFBTQXdLU0I3WEc0Z0lDQWdJQ0J1SUQwZ2JpNXNaV1owWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHNGdQU0J1TG5KcFoyaDBYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCdVpYY2dVbVZrUW14aFkydFVjbVZsU1hSbGNtRjBiM0lvZEdocGN5d2dXMTBwWEc1OVhHNWNiaTh2VW1WdGIzWmxjeUJwZEdWdElIZHBkR2dnYTJWNUlHWnliMjBnZEhKbFpWeHVjSEp2ZEc4dWNtVnRiM1psSUQwZ1puVnVZM1JwYjI0b2EyVjVLU0I3WEc0Z0lIWmhjaUJwZEdWeUlEMGdkR2hwY3k1bWFXNWtLR3RsZVNsY2JpQWdhV1lvYVhSbGNpa2dlMXh1SUNBZ0lISmxkSFZ5YmlCcGRHVnlMbkpsYlc5MlpTZ3BYRzRnSUgxY2JpQWdjbVYwZFhKdUlIUm9hWE5jYm4xY2JseHVMeTlTWlhSMWNtNXpJSFJvWlNCcGRHVnRJR0YwSUdCclpYbGdYRzV3Y205MGJ5NW5aWFFnUFNCbWRXNWpkR2x2YmloclpYa3BJSHRjYmlBZ2RtRnlJR050Y0NBOUlIUm9hWE11WDJOdmJYQmhjbVZjYmlBZ2RtRnlJRzRnUFNCMGFHbHpMbkp2YjNSY2JpQWdkMmhwYkdVb2Jpa2dlMXh1SUNBZ0lIWmhjaUJrSUQwZ1kyMXdLR3RsZVN3Z2JpNXJaWGtwWEc0Z0lDQWdhV1lvWkNBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzR1ZG1Gc2RXVmNiaUFnSUNCOVhHNGdJQ0FnYVdZb1pDQThQU0F3S1NCN1hHNGdJQ0FnSUNCdUlEMGdiaTVzWldaMFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJRzRnUFNCdUxuSnBaMmgwWEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEpsZEhWeWJseHVmVnh1WEc0dkwwbDBaWEpoZEc5eUlHWnZjaUJ5WldRZ1lteGhZMnNnZEhKbFpWeHVablZ1WTNScGIyNGdVbVZrUW14aFkydFVjbVZsU1hSbGNtRjBiM0lvZEhKbFpTd2djM1JoWTJzcElIdGNiaUFnZEdocGN5NTBjbVZsSUQwZ2RISmxaVnh1SUNCMGFHbHpMbDl6ZEdGamF5QTlJSE4wWVdOclhHNTlYRzVjYm5aaGNpQnBjSEp2ZEc4Z1BTQlNaV1JDYkdGamExUnlaV1ZKZEdWeVlYUnZjaTV3Y205MGIzUjVjR1ZjYmx4dUx5OVVaWE4wSUdsbUlHbDBaWEpoZEc5eUlHbHpJSFpoYkdsa1hHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYVhCeWIzUnZMQ0JjSW5aaGJHbGtYQ0lzSUh0Y2JpQWdaMlYwT2lCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZjM1JoWTJzdWJHVnVaM1JvSUQ0Z01GeHVJQ0I5WEc1OUtWeHVYRzR2TDA1dlpHVWdiMllnZEdobElHbDBaWEpoZEc5eVhHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYVhCeWIzUnZMQ0JjSW01dlpHVmNJaXdnZTF4dUlDQm5aWFE2SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUdsbUtIUm9hWE11WDNOMFlXTnJMbXhsYm1kMGFDQStJREFwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOXpkR0ZqYTF0MGFHbHpMbDl6ZEdGamF5NXNaVzVuZEdndE1WMWNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJRzUxYkd4Y2JpQWdmU3hjYmlBZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlZ4dWZTbGNibHh1THk5TllXdGxjeUJoSUdOdmNIa2diMllnWVc0Z2FYUmxjbUYwYjNKY2JtbHdjbTkwYnk1amJHOXVaU0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZKbFpFSnNZV05yVkhKbFpVbDBaWEpoZEc5eUtIUm9hWE11ZEhKbFpTd2dkR2hwY3k1ZmMzUmhZMnN1YzJ4cFkyVW9LU2xjYm4xY2JseHVMeTlUZDJGd2N5QjBkMjhnYm05a1pYTmNibVoxYm1OMGFXOXVJSE4zWVhCT2IyUmxLRzRzSUhZcElIdGNiaUFnYmk1clpYa2dQU0IyTG10bGVWeHVJQ0J1TG5aaGJIVmxJRDBnZGk1MllXeDFaVnh1SUNCdUxteGxablFnUFNCMkxteGxablJjYmlBZ2JpNXlhV2RvZENBOUlIWXVjbWxuYUhSY2JpQWdiaTVmWTI5c2IzSWdQU0IyTGw5amIyeHZjbHh1SUNCdUxsOWpiM1Z1ZENBOUlIWXVYMk52ZFc1MFhHNTlYRzVjYmk4dlJtbDRJSFZ3SUdFZ1pHOTFZbXhsSUdKc1lXTnJJRzV2WkdVZ2FXNGdZU0IwY21WbFhHNW1kVzVqZEdsdmJpQm1hWGhFYjNWaWJHVkNiR0ZqYXloemRHRmpheWtnZTF4dUlDQjJZWElnYml3Z2NDd2djeXdnZWx4dUlDQm1iM0lvZG1GeUlHazljM1JoWTJzdWJHVnVaM1JvTFRFN0lHaytQVEE3SUMwdGFTa2dlMXh1SUNBZ0lHNGdQU0J6ZEdGamExdHBYVnh1SUNBZ0lHbG1LR2tnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJRzR1WDJOdmJHOXlJRDBnUWt4QlEwdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQXZMMk52Ym5OdmJHVXViRzluS0Z3aWRtbHphWFFnYm05a1pUcGNJaXdnYmk1clpYa3NJR2tzSUhOMFlXTnJXMmxkTG10bGVTd2djM1JoWTJ0YmFTMHhYUzVyWlhrcFhHNGdJQ0FnY0NBOUlITjBZV05yVzJrdE1WMWNiaUFnSUNCcFppaHdMbXhsWm5RZ1BUMDlJRzRwSUh0Y2JpQWdJQ0FnSUM4dlkyOXVjMjlzWlM1c2IyY29YQ0pzWldaMElHTm9hV3hrWENJcFhHNGdJQ0FnSUNCeklEMGdjQzV5YVdkb2RGeHVJQ0FnSUNBZ2FXWW9jeTV5YVdkb2RDQW1KaUJ6TG5KcFoyaDBMbDlqYjJ4dmNpQTlQVDBnVWtWRUtTQjdYRzRnSUNBZ0lDQWdJQzh2WTI5dWMyOXNaUzVzYjJjb1hDSmpZWE5sSURFNklISnBaMmgwSUhOcFlteHBibWNnWTJocGJHUWdjbVZrWENJcFhHNGdJQ0FnSUNBZ0lITWdQU0J3TG5KcFoyaDBJRDBnWTJ4dmJtVk9iMlJsS0hNcFhHNGdJQ0FnSUNBZ0lIb2dQU0J6TG5KcFoyaDBJRDBnWTJ4dmJtVk9iMlJsS0hNdWNtbG5hSFFwWEc0Z0lDQWdJQ0FnSUhBdWNtbG5hSFFnUFNCekxteGxablJjYmlBZ0lDQWdJQ0FnY3k1c1pXWjBJRDBnY0Z4dUlDQWdJQ0FnSUNCekxuSnBaMmgwSUQwZ2VseHVJQ0FnSUNBZ0lDQnpMbDlqYjJ4dmNpQTlJSEF1WDJOdmJHOXlYRzRnSUNBZ0lDQWdJRzR1WDJOdmJHOXlJRDBnUWt4QlEwdGNiaUFnSUNBZ0lDQWdjQzVmWTI5c2IzSWdQU0JDVEVGRFMxeHVJQ0FnSUNBZ0lDQjZMbDlqYjJ4dmNpQTlJRUpNUVVOTFhHNGdJQ0FnSUNBZ0lISmxZMjkxYm5Rb2NDbGNiaUFnSUNBZ0lDQWdjbVZqYjNWdWRDaHpLVnh1SUNBZ0lDQWdJQ0JwWmlocElENGdNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJ3Y0NBOUlITjBZV05yVzJrdE1sMWNiaUFnSUNBZ0lDQWdJQ0JwWmlod2NDNXNaV1owSUQwOVBTQndLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjQzVzWldaMElEMGdjMXh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjQzV5YVdkb2RDQTlJSE5jYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjM1JoWTJ0YmFTMHhYU0E5SUhOY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lvY3k1c1pXWjBJQ1ltSUhNdWJHVm1kQzVmWTI5c2IzSWdQVDA5SUZKRlJDa2dlMXh1SUNBZ0lDQWdJQ0F2TDJOdmJuTnZiR1V1Ykc5bktGd2lZMkZ6WlNBeE9pQnNaV1owSUhOcFlteHBibWNnWTJocGJHUWdjbVZrWENJcFhHNGdJQ0FnSUNBZ0lITWdQU0J3TG5KcFoyaDBJRDBnWTJ4dmJtVk9iMlJsS0hNcFhHNGdJQ0FnSUNBZ0lIb2dQU0J6TG14bFpuUWdQU0JqYkc5dVpVNXZaR1VvY3k1c1pXWjBLVnh1SUNBZ0lDQWdJQ0J3TG5KcFoyaDBJRDBnZWk1c1pXWjBYRzRnSUNBZ0lDQWdJSE11YkdWbWRDQTlJSG91Y21sbmFIUmNiaUFnSUNBZ0lDQWdlaTVzWldaMElEMGdjRnh1SUNBZ0lDQWdJQ0I2TG5KcFoyaDBJRDBnYzF4dUlDQWdJQ0FnSUNCNkxsOWpiMnh2Y2lBOUlIQXVYMk52Ykc5eVhHNGdJQ0FnSUNBZ0lIQXVYMk52Ykc5eUlEMGdRa3hCUTB0Y2JpQWdJQ0FnSUNBZ2N5NWZZMjlzYjNJZ1BTQkNURUZEUzF4dUlDQWdJQ0FnSUNCdUxsOWpiMnh2Y2lBOUlFSk1RVU5MWEc0Z0lDQWdJQ0FnSUhKbFkyOTFiblFvY0NsY2JpQWdJQ0FnSUNBZ2NtVmpiM1Z1ZENoektWeHVJQ0FnSUNBZ0lDQnlaV052ZFc1MEtIb3BYRzRnSUNBZ0lDQWdJR2xtS0drZ1BpQXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJSEJ3SUQwZ2MzUmhZMnRiYVMweVhWeHVJQ0FnSUNBZ0lDQWdJR2xtS0hCd0xteGxablFnUFQwOUlIQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQndMbXhsWm5RZ1BTQjZYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQndMbkpwWjJoMElEMGdlbHh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnpkR0ZqYTF0cExURmRJRDBnZWx4dUlDQWdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR2xtS0hNdVgyTnZiRzl5SUQwOVBTQkNURUZEU3lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaWh3TGw5amIyeHZjaUE5UFQwZ1VrVkVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSW1OaGMyVWdNam9nWW14aFkyc2djMmxpYkdsdVp5d2djbVZrSUhCaGNtVnVkRndpTENCd0xuSnBaMmgwTG5aaGJIVmxLVnh1SUNBZ0lDQWdJQ0FnSUhBdVgyTnZiRzl5SUQwZ1FreEJRMHRjYmlBZ0lDQWdJQ0FnSUNCd0xuSnBaMmgwSUQwZ2NtVndZV2x1ZENoU1JVUXNJSE1wWEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OWpiMjV6YjJ4bExteHZaeWhjSW1OaGMyVWdNam9nWW14aFkyc2djMmxpYkdsdVp5d2dZbXhoWTJzZ2NHRnlaVzUwWENJc0lIQXVjbWxuYUhRdWRtRnNkV1VwWEc0Z0lDQWdJQ0FnSUNBZ2NDNXlhV2RvZENBOUlISmxjR0ZwYm5Rb1VrVkVMQ0J6S1Z4dUlDQWdJQ0FnSUNBZ0lHTnZiblJwYm5WbElDQmNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnloY0ltTmhjMlVnTXpvZ2NtVmtJSE5wWW14cGJtZGNJaWxjYmlBZ0lDQWdJQ0FnY3lBOUlHTnNiMjVsVG05a1pTaHpLVnh1SUNBZ0lDQWdJQ0J3TG5KcFoyaDBJRDBnY3k1c1pXWjBYRzRnSUNBZ0lDQWdJSE11YkdWbWRDQTlJSEJjYmlBZ0lDQWdJQ0FnY3k1ZlkyOXNiM0lnUFNCd0xsOWpiMnh2Y2x4dUlDQWdJQ0FnSUNCd0xsOWpiMnh2Y2lBOUlGSkZSRnh1SUNBZ0lDQWdJQ0J5WldOdmRXNTBLSEFwWEc0Z0lDQWdJQ0FnSUhKbFkyOTFiblFvY3lsY2JpQWdJQ0FnSUNBZ2FXWW9hU0ErSURFcElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2NIQWdQU0J6ZEdGamExdHBMVEpkWEc0Z0lDQWdJQ0FnSUNBZ2FXWW9jSEF1YkdWbWRDQTlQVDBnY0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0hBdWJHVm1kQ0E5SUhOY2JpQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0hBdWNtbG5hSFFnUFNCelhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhOMFlXTnJXMmt0TVYwZ1BTQnpYRzRnSUNBZ0lDQWdJSE4wWVdOclcybGRJRDBnY0Z4dUlDQWdJQ0FnSUNCcFppaHBLekVnUENCemRHRmpheTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNCemRHRmphMXRwS3pGZElEMGdibHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUhOMFlXTnJMbkIxYzJnb2JpbGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JwSUQwZ2FTc3lYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUM4dlkyOXVjMjlzWlM1c2IyY29YQ0p5YVdkb2RDQmphR2xzWkZ3aUtWeHVJQ0FnSUNBZ2N5QTlJSEF1YkdWbWRGeHVJQ0FnSUNBZ2FXWW9jeTVzWldaMElDWW1JSE11YkdWbWRDNWZZMjlzYjNJZ1BUMDlJRkpGUkNrZ2UxeHVJQ0FnSUNBZ0lDQXZMMk52Ym5OdmJHVXViRzluS0Z3aVkyRnpaU0F4T2lCc1pXWjBJSE5wWW14cGJtY2dZMmhwYkdRZ2NtVmtYQ0lzSUhBdWRtRnNkV1VzSUhBdVgyTnZiRzl5S1Z4dUlDQWdJQ0FnSUNCeklEMGdjQzVzWldaMElEMGdZMnh2Ym1WT2IyUmxLSE1wWEc0Z0lDQWdJQ0FnSUhvZ1BTQnpMbXhsWm5RZ1BTQmpiRzl1WlU1dlpHVW9jeTVzWldaMEtWeHVJQ0FnSUNBZ0lDQndMbXhsWm5RZ1BTQnpMbkpwWjJoMFhHNGdJQ0FnSUNBZ0lITXVjbWxuYUhRZ1BTQndYRzRnSUNBZ0lDQWdJSE11YkdWbWRDQTlJSHBjYmlBZ0lDQWdJQ0FnY3k1ZlkyOXNiM0lnUFNCd0xsOWpiMnh2Y2x4dUlDQWdJQ0FnSUNCdUxsOWpiMnh2Y2lBOUlFSk1RVU5MWEc0Z0lDQWdJQ0FnSUhBdVgyTnZiRzl5SUQwZ1FreEJRMHRjYmlBZ0lDQWdJQ0FnZWk1ZlkyOXNiM0lnUFNCQ1RFRkRTMXh1SUNBZ0lDQWdJQ0J5WldOdmRXNTBLSEFwWEc0Z0lDQWdJQ0FnSUhKbFkyOTFiblFvY3lsY2JpQWdJQ0FnSUNBZ2FXWW9hU0ErSURFcElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2NIQWdQU0J6ZEdGamExdHBMVEpkWEc0Z0lDQWdJQ0FnSUNBZ2FXWW9jSEF1Y21sbmFIUWdQVDA5SUhBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCd0xuSnBaMmgwSUQwZ2MxeHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NDNXNaV1owSUQwZ2MxeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCemRHRmphMXRwTFRGZElEMGdjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppaHpMbkpwWjJoMElDWW1JSE11Y21sbmFIUXVYMk52Ykc5eUlEMDlQU0JTUlVRcElIdGNiaUFnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnloY0ltTmhjMlVnTVRvZ2NtbG5hSFFnYzJsaWJHbHVaeUJqYUdsc1pDQnlaV1JjSWlsY2JpQWdJQ0FnSUNBZ2N5QTlJSEF1YkdWbWRDQTlJR05zYjI1bFRtOWtaU2h6S1Z4dUlDQWdJQ0FnSUNCNklEMGdjeTV5YVdkb2RDQTlJR05zYjI1bFRtOWtaU2h6TG5KcFoyaDBLVnh1SUNBZ0lDQWdJQ0J3TG14bFpuUWdQU0I2TG5KcFoyaDBYRzRnSUNBZ0lDQWdJSE11Y21sbmFIUWdQU0I2TG14bFpuUmNiaUFnSUNBZ0lDQWdlaTV5YVdkb2RDQTlJSEJjYmlBZ0lDQWdJQ0FnZWk1c1pXWjBJRDBnYzF4dUlDQWdJQ0FnSUNCNkxsOWpiMnh2Y2lBOUlIQXVYMk52Ykc5eVhHNGdJQ0FnSUNBZ0lIQXVYMk52Ykc5eUlEMGdRa3hCUTB0Y2JpQWdJQ0FnSUNBZ2N5NWZZMjlzYjNJZ1BTQkNURUZEUzF4dUlDQWdJQ0FnSUNCdUxsOWpiMnh2Y2lBOUlFSk1RVU5MWEc0Z0lDQWdJQ0FnSUhKbFkyOTFiblFvY0NsY2JpQWdJQ0FnSUNBZ2NtVmpiM1Z1ZENoektWeHVJQ0FnSUNBZ0lDQnlaV052ZFc1MEtIb3BYRzRnSUNBZ0lDQWdJR2xtS0drZ1BpQXhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJSEJ3SUQwZ2MzUmhZMnRiYVMweVhWeHVJQ0FnSUNBZ0lDQWdJR2xtS0hCd0xuSnBaMmgwSUQwOVBTQndLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjQzV5YVdkb2RDQTlJSHBjYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjSEF1YkdWbWRDQTlJSHBjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjM1JoWTJ0YmFTMHhYU0E5SUhwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JwWmloekxsOWpiMnh2Y2lBOVBUMGdRa3hCUTBzcElIdGNiaUFnSUNBZ0lDQWdhV1lvY0M1ZlkyOXNiM0lnUFQwOUlGSkZSQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZZMjl1YzI5c1pTNXNiMmNvWENKallYTmxJREk2SUdKc1lXTnJJSE5wWW14cGJtY3NJSEpsWkNCd1lYSmxiblJjSWlsY2JpQWdJQ0FnSUNBZ0lDQndMbDlqYjJ4dmNpQTlJRUpNUVVOTFhHNGdJQ0FnSUNBZ0lDQWdjQzVzWldaMElEMGdjbVZ3WVdsdWRDaFNSVVFzSUhNcFhHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdMeTlqYjI1emIyeGxMbXh2WnloY0ltTmhjMlVnTWpvZ1lteGhZMnNnYzJsaWJHbHVaeXdnWW14aFkyc2djR0Z5Wlc1MFhDSXBYRzRnSUNBZ0lDQWdJQ0FnY0M1c1pXWjBJRDBnY21Wd1lXbHVkQ2hTUlVRc0lITXBYRzRnSUNBZ0lDQWdJQ0FnWTI5dWRHbHVkV1VnSUZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBdkwyTnZibk52YkdVdWJHOW5LRndpWTJGelpTQXpPaUJ5WldRZ2MybGliR2x1WjF3aUtWeHVJQ0FnSUNBZ0lDQnpJRDBnWTJ4dmJtVk9iMlJsS0hNcFhHNGdJQ0FnSUNBZ0lIQXViR1ZtZENBOUlITXVjbWxuYUhSY2JpQWdJQ0FnSUNBZ2N5NXlhV2RvZENBOUlIQmNiaUFnSUNBZ0lDQWdjeTVmWTI5c2IzSWdQU0J3TGw5amIyeHZjbHh1SUNBZ0lDQWdJQ0J3TGw5amIyeHZjaUE5SUZKRlJGeHVJQ0FnSUNBZ0lDQnlaV052ZFc1MEtIQXBYRzRnSUNBZ0lDQWdJSEpsWTI5MWJuUW9jeWxjYmlBZ0lDQWdJQ0FnYVdZb2FTQStJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnY0hBZ1BTQnpkR0ZqYTF0cExUSmRYRzRnSUNBZ0lDQWdJQ0FnYVdZb2NIQXVjbWxuYUhRZ1BUMDlJSEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ3TG5KcFoyaDBJRDBnYzF4dUlDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y0M1c1pXWjBJRDBnYzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0J6ZEdGamExdHBMVEZkSUQwZ2MxeHVJQ0FnSUNBZ0lDQnpkR0ZqYTF0cFhTQTlJSEJjYmlBZ0lDQWdJQ0FnYVdZb2FTc3hJRHdnYzNSaFkyc3ViR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnYzNSaFkydGJhU3N4WFNBOUlHNWNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0J6ZEdGamF5NXdkWE5vS0c0cFhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhU0E5SUdrck1seHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dVhHNHZMMUpsYlc5MlpYTWdhWFJsYlNCaGRDQnBkR1Z5WVhSdmNpQm1jbTl0SUhSeVpXVmNibWx3Y205MGJ5NXlaVzF2ZG1VZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ2RtRnlJSE4wWVdOcklEMGdkR2hwY3k1ZmMzUmhZMnRjYmlBZ2FXWW9jM1JoWTJzdWJHVnVaM1JvSUQwOVBTQXdLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11ZEhKbFpWeHVJQ0I5WEc0Z0lDOHZSbWx5YzNRZ1kyOXdlU0J3WVhSb0lIUnZJRzV2WkdWY2JpQWdkbUZ5SUdOemRHRmpheUE5SUc1bGR5QkJjbkpoZVNoemRHRmpheTVzWlc1bmRHZ3BYRzRnSUhaaGNpQnVJRDBnYzNSaFkydGJjM1JoWTJzdWJHVnVaM1JvTFRGZFhHNGdJR056ZEdGamExdGpjM1JoWTJzdWJHVnVaM1JvTFRGZElEMGdibVYzSUZKQ1RtOWtaU2h1TGw5amIyeHZjaXdnYmk1clpYa3NJRzR1ZG1Gc2RXVXNJRzR1YkdWbWRDd2diaTV5YVdkb2RDd2diaTVmWTI5MWJuUXBYRzRnSUdadmNpaDJZWElnYVQxemRHRmpheTVzWlc1bmRHZ3RNanNnYVQ0OU1Ec2dMUzFwS1NCN1hHNGdJQ0FnZG1GeUlHNGdQU0J6ZEdGamExdHBYVnh1SUNBZ0lHbG1LRzR1YkdWbWRDQTlQVDBnYzNSaFkydGJhU3N4WFNrZ2UxeHVJQ0FnSUNBZ1kzTjBZV05yVzJsZElEMGdibVYzSUZKQ1RtOWtaU2h1TGw5amIyeHZjaXdnYmk1clpYa3NJRzR1ZG1Gc2RXVXNJR056ZEdGamExdHBLekZkTENCdUxuSnBaMmgwTENCdUxsOWpiM1Z1ZENsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdZM04wWVdOclcybGRJRDBnYm1WM0lGSkNUbTlrWlNodUxsOWpiMnh2Y2l3Z2JpNXJaWGtzSUc0dWRtRnNkV1VzSUc0dWJHVm1kQ3dnWTNOMFlXTnJXMmtyTVYwc0lHNHVYMk52ZFc1MEtWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHZSMlYwSUc1dlpHVmNiaUFnYmlBOUlHTnpkR0ZqYTF0amMzUmhZMnN1YkdWdVozUm9MVEZkWEc0Z0lDOHZZMjl1YzI5c1pTNXNiMmNvWENKemRHRnlkQ0J5WlcxdmRtVTZJRndpTENCdUxuWmhiSFZsS1Z4dVhHNGdJQzh2U1dZZ2JtOTBJR3hsWVdZc0lIUm9aVzRnYzNkaGNDQjNhWFJvSUhCeVpYWnBiM1Z6SUc1dlpHVmNiaUFnYVdZb2JpNXNaV1owSUNZbUlHNHVjbWxuYUhRcElIdGNiaUFnSUNBdkwyTnZibk52YkdVdWJHOW5LRndpYlc5MmFXNW5JSFJ2SUd4bFlXWmNJaWxjYmx4dUlDQWdJQzh2Um1seWMzUWdkMkZzYXlCMGJ5QndjbVYyYVc5MWN5QnNaV0ZtWEc0Z0lDQWdkbUZ5SUhOd2JHbDBJRDBnWTNOMFlXTnJMbXhsYm1kMGFGeHVJQ0FnSUc0Z1BTQnVMbXhsWm5SY2JpQWdJQ0IzYUdsc1pTaHVMbkpwWjJoMEtTQjdYRzRnSUNBZ0lDQmpjM1JoWTJzdWNIVnphQ2h1S1Z4dUlDQWdJQ0FnYmlBOUlHNHVjbWxuYUhSY2JpQWdJQ0I5WEc0Z0lDQWdMeTlEYjNCNUlIQmhkR2dnZEc4Z2JHVmhabHh1SUNBZ0lIWmhjaUIySUQwZ1kzTjBZV05yVzNOd2JHbDBMVEZkWEc0Z0lDQWdZM04wWVdOckxuQjFjMmdvYm1WM0lGSkNUbTlrWlNodUxsOWpiMnh2Y2l3Z2RpNXJaWGtzSUhZdWRtRnNkV1VzSUc0dWJHVm1kQ3dnYmk1eWFXZG9kQ3dnYmk1ZlkyOTFiblFwS1Z4dUlDQWdJR056ZEdGamExdHpjR3hwZEMweFhTNXJaWGtnUFNCdUxtdGxlVnh1SUNBZ0lHTnpkR0ZqYTF0emNHeHBkQzB4WFM1MllXeDFaU0E5SUc0dWRtRnNkV1ZjYmx4dUlDQWdJQzh2Um1sNElIVndJSE4wWVdOclhHNGdJQ0FnWm05eUtIWmhjaUJwUFdOemRHRmpheTVzWlc1bmRHZ3RNanNnYVQ0OWMzQnNhWFE3SUMwdGFTa2dlMXh1SUNBZ0lDQWdiaUE5SUdOemRHRmphMXRwWFZ4dUlDQWdJQ0FnWTNOMFlXTnJXMmxkSUQwZ2JtVjNJRkpDVG05a1pTaHVMbDlqYjJ4dmNpd2diaTVyWlhrc0lHNHVkbUZzZFdVc0lHNHViR1ZtZEN3Z1kzTjBZV05yVzJrck1WMHNJRzR1WDJOdmRXNTBLVnh1SUNBZ0lIMWNiaUFnSUNCamMzUmhZMnRiYzNCc2FYUXRNVjB1YkdWbWRDQTlJR056ZEdGamExdHpjR3hwZEYxY2JpQWdmVnh1SUNBdkwyTnZibk52YkdVdWJHOW5LRndpYzNSaFkyczlYQ0lzSUdOemRHRmpheTV0WVhBb1puVnVZM1JwYjI0b2Rpa2dleUJ5WlhSMWNtNGdkaTUyWVd4MVpTQjlLU2xjYmx4dUlDQXZMMUpsYlc5MlpTQnNaV0ZtSUc1dlpHVmNiaUFnYmlBOUlHTnpkR0ZqYTF0amMzUmhZMnN1YkdWdVozUm9MVEZkWEc0Z0lHbG1LRzR1WDJOdmJHOXlJRDA5UFNCU1JVUXBJSHRjYmlBZ0lDQXZMMFZoYzNrZ1kyRnpaVG9nY21WdGIzWnBibWNnY21Wa0lHeGxZV1pjYmlBZ0lDQXZMMk52Ym5OdmJHVXViRzluS0Z3aVVrVkVJR3hsWVdaY0lpbGNiaUFnSUNCMllYSWdjQ0E5SUdOemRHRmphMXRqYzNSaFkyc3ViR1Z1WjNSb0xUSmRYRzRnSUNBZ2FXWW9jQzVzWldaMElEMDlQU0J1S1NCN1hHNGdJQ0FnSUNCd0xteGxablFnUFNCdWRXeHNYRzRnSUNBZ2ZTQmxiSE5sSUdsbUtIQXVjbWxuYUhRZ1BUMDlJRzRwSUh0Y2JpQWdJQ0FnSUhBdWNtbG5hSFFnUFNCdWRXeHNYRzRnSUNBZ2ZWeHVJQ0FnSUdOemRHRmpheTV3YjNBb0tWeHVJQ0FnSUdadmNpaDJZWElnYVQwd095QnBQR056ZEdGamF5NXNaVzVuZEdnN0lDc3JhU2tnZTF4dUlDQWdJQ0FnWTNOMFlXTnJXMmxkTGw5amIzVnVkQzB0WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dVbVZrUW14aFkydFVjbVZsS0hSb2FYTXVkSEpsWlM1ZlkyOXRjR0Z5WlN3Z1kzTjBZV05yV3pCZEtWeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHbG1LRzR1YkdWbWRDQjhmQ0J1TG5KcFoyaDBLU0I3WEc0Z0lDQWdJQ0F2TDFObFkyOXVaQ0JsWVhONUlHTmhjMlU2SUNCVGFXNW5iR1VnWTJocGJHUWdZbXhoWTJzZ2NHRnlaVzUwWEc0Z0lDQWdJQ0F2TDJOdmJuTnZiR1V1Ykc5bktGd2lRa3hCUTBzZ2MybHVaMnhsSUdOb2FXeGtYQ0lwWEc0Z0lDQWdJQ0JwWmlodUxteGxablFwSUh0Y2JpQWdJQ0FnSUNBZ2MzZGhjRTV2WkdVb2Jpd2diaTVzWldaMEtWeHVJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUtHNHVjbWxuYUhRcElIdGNiaUFnSUNBZ0lDQWdjM2RoY0U1dlpHVW9iaXdnYmk1eWFXZG9kQ2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJQzh2UTJocGJHUWdiWFZ6ZENCaVpTQnlaV1FzSUhOdklISmxjR0ZwYm5RZ2FYUWdZbXhoWTJzZ2RHOGdZbUZzWVc1alpTQmpiMnh2Y2x4dUlDQWdJQ0FnYmk1ZlkyOXNiM0lnUFNCQ1RFRkRTMXh1SUNBZ0lDQWdabTl5S0haaGNpQnBQVEE3SUdrOFkzTjBZV05yTG14bGJtZDBhQzB4T3lBcksya3BJSHRjYmlBZ0lDQWdJQ0FnWTNOMFlXTnJXMmxkTGw5amIzVnVkQzB0WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdibVYzSUZKbFpFSnNZV05yVkhKbFpTaDBhR2x6TG5SeVpXVXVYMk52YlhCaGNtVXNJR056ZEdGamExc3dYU2xjYmlBZ0lDQjlJR1ZzYzJVZ2FXWW9ZM04wWVdOckxteGxibWQwYUNBOVBUMGdNU2tnZTF4dUlDQWdJQ0FnTHk5VWFHbHlaQ0JsWVhONUlHTmhjMlU2SUhKdmIzUmNiaUFnSUNBZ0lDOHZZMjl1YzI5c1pTNXNiMmNvWENKU1QwOVVYQ0lwWEc0Z0lDQWdJQ0J5WlhSMWNtNGdibVYzSUZKbFpFSnNZV05yVkhKbFpTaDBhR2x6TG5SeVpXVXVYMk52YlhCaGNtVXNJRzUxYkd3cFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQzh2U0dGeVpDQmpZWE5sT2lCU1pYQmhhVzUwSUc0c0lHRnVaQ0IwYUdWdUlHUnZJSE52YldVZ2JtRnpkSGtnYzNSMVptWmNiaUFnSUNBZ0lDOHZZMjl1YzI5c1pTNXNiMmNvWENKQ1RFRkRTeUJzWldGbUlHNXZJR05vYVd4a2NtVnVYQ0lwWEc0Z0lDQWdJQ0JtYjNJb2RtRnlJR2s5TURzZ2FUeGpjM1JoWTJzdWJHVnVaM1JvT3lBcksya3BJSHRjYmlBZ0lDQWdJQ0FnWTNOMFlXTnJXMmxkTGw5amIzVnVkQzB0WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0IyWVhJZ2NHRnlaVzUwSUQwZ1kzTjBZV05yVzJOemRHRmpheTVzWlc1bmRHZ3RNbDFjYmlBZ0lDQWdJR1pwZUVSdmRXSnNaVUpzWVdOcktHTnpkR0ZqYXlsY2JpQWdJQ0FnSUM4dlJtbDRJSFZ3SUd4cGJtdHpYRzRnSUNBZ0lDQnBaaWh3WVhKbGJuUXViR1ZtZENBOVBUMGdiaWtnZTF4dUlDQWdJQ0FnSUNCd1lYSmxiblF1YkdWbWRDQTlJRzUxYkd4Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhCaGNtVnVkQzV5YVdkb2RDQTlJRzUxYkd4Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY21WMGRYSnVJRzVsZHlCU1pXUkNiR0ZqYTFSeVpXVW9kR2hwY3k1MGNtVmxMbDlqYjIxd1lYSmxMQ0JqYzNSaFkydGJNRjBwWEc1OVhHNWNiaTh2VW1WMGRYSnVjeUJyWlhsY2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hwY0hKdmRHOHNJRndpYTJWNVhDSXNJSHRjYmlBZ1oyVjBPaUJtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0JwWmloMGFHbHpMbDl6ZEdGamF5NXNaVzVuZEdnZ1BpQXdLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZmMzUmhZMnRiZEdocGN5NWZjM1JoWTJzdWJHVnVaM1JvTFRGZExtdGxlVnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTVjYmlBZ2ZTeGNiaUFnWlc1MWJXVnlZV0pzWlRvZ2RISjFaVnh1ZlNsY2JseHVMeTlTWlhSMWNtNXpJSFpoYkhWbFhHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvYVhCeWIzUnZMQ0JjSW5aaGJIVmxYQ0lzSUh0Y2JpQWdaMlYwT2lCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCcFppaDBhR2x6TGw5emRHRmpheTVzWlc1bmRHZ2dQaUF3S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZjM1JoWTJ0YmRHaHBjeTVmYzNSaFkyc3ViR1Z1WjNSb0xURmRMblpoYkhWbFhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJseHVJQ0I5TEZ4dUlDQmxiblZ0WlhKaFlteGxPaUIwY25WbFhHNTlLVnh1WEc1Y2JpOHZVbVYwZFhKdWN5QjBhR1VnY0c5emFYUnBiMjRnYjJZZ2RHaHBjeUJwZEdWeVlYUnZjaUJwYmlCMGFHVWdjMjl5ZEdWa0lHeHBjM1JjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHBjSEp2ZEc4c0lGd2lhVzVrWlhoY0lpd2dlMXh1SUNCblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJSFpoY2lCcFpIZ2dQU0F3WEc0Z0lDQWdkbUZ5SUhOMFlXTnJJRDBnZEdocGN5NWZjM1JoWTJ0Y2JpQWdJQ0JwWmloemRHRmpheTVzWlc1bmRHZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lIWmhjaUJ5SUQwZ2RHaHBjeTUwY21WbExuSnZiM1JjYmlBZ0lDQWdJR2xtS0hJcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISXVYMk52ZFc1MFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCeVpYUjFjbTRnTUZ4dUlDQWdJSDBnWld4elpTQnBaaWh6ZEdGamExdHpkR0ZqYXk1c1pXNW5kR2d0TVYwdWJHVm1kQ2tnZTF4dUlDQWdJQ0FnYVdSNElEMGdjM1JoWTJ0YmMzUmhZMnN1YkdWdVozUm9MVEZkTG14bFpuUXVYMk52ZFc1MFhHNGdJQ0FnZlZ4dUlDQWdJR1p2Y2loMllYSWdjejF6ZEdGamF5NXNaVzVuZEdndE1qc2djejQ5TURzZ0xTMXpLU0I3WEc0Z0lDQWdJQ0JwWmloemRHRmphMXR6S3pGZElEMDlQU0J6ZEdGamExdHpYUzV5YVdkb2RDa2dlMXh1SUNBZ0lDQWdJQ0FySzJsa2VGeHVJQ0FnSUNBZ0lDQnBaaWh6ZEdGamExdHpYUzVzWldaMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnYVdSNElDczlJSE4wWVdOclczTmRMbXhsWm5RdVgyTnZkVzUwWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHbGtlRnh1SUNCOUxGeHVJQ0JsYm5WdFpYSmhZbXhsT2lCMGNuVmxYRzU5S1Z4dVhHNHZMMEZrZG1GdVkyVnpJR2wwWlhKaGRHOXlJSFJ2SUc1bGVIUWdaV3hsYldWdWRDQnBiaUJzYVhOMFhHNXBjSEp2ZEc4dWJtVjRkQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0IyWVhJZ2MzUmhZMnNnUFNCMGFHbHpMbDl6ZEdGamExeHVJQ0JwWmloemRHRmpheTVzWlc1bmRHZ2dQVDA5SURBcElIdGNiaUFnSUNCeVpYUjFjbTVjYmlBZ2ZWeHVJQ0IyWVhJZ2JpQTlJSE4wWVdOclczTjBZV05yTG14bGJtZDBhQzB4WFZ4dUlDQnBaaWh1TG5KcFoyaDBLU0I3WEc0Z0lDQWdiaUE5SUc0dWNtbG5hSFJjYmlBZ0lDQjNhR2xzWlNodUtTQjdYRzRnSUNBZ0lDQnpkR0ZqYXk1d2RYTm9LRzRwWEc0Z0lDQWdJQ0J1SUQwZ2JpNXNaV1owWEc0Z0lDQWdmVnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSE4wWVdOckxuQnZjQ2dwWEc0Z0lDQWdkMmhwYkdVb2MzUmhZMnN1YkdWdVozUm9JRDRnTUNBbUppQnpkR0ZqYTF0emRHRmpheTVzWlc1bmRHZ3RNVjB1Y21sbmFIUWdQVDA5SUc0cElIdGNiaUFnSUNBZ0lHNGdQU0J6ZEdGamExdHpkR0ZqYXk1c1pXNW5kR2d0TVYxY2JpQWdJQ0FnSUhOMFlXTnJMbkJ2Y0NncFhHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JpOHZRMmhsWTJ0eklHbG1JR2wwWlhKaGRHOXlJR2x6SUdGMElHVnVaQ0J2WmlCMGNtVmxYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2FYQnliM1J2TENCY0ltaGhjMDVsZUhSY0lpd2dlMXh1SUNCblpYUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJSFpoY2lCemRHRmpheUE5SUhSb2FYTXVYM04wWVdOclhHNGdJQ0FnYVdZb2MzUmhZMnN1YkdWdVozUm9JRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlZjYmlBZ0lDQjlYRzRnSUNBZ2FXWW9jM1JoWTJ0YmMzUmhZMnN1YkdWdVozUm9MVEZkTG5KcFoyaDBLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlZ4dUlDQWdJSDFjYmlBZ0lDQm1iM0lvZG1GeUlITTljM1JoWTJzdWJHVnVaM1JvTFRFN0lITStNRHNnTFMxektTQjdYRzRnSUNBZ0lDQnBaaWh6ZEdGamExdHpMVEZkTG14bFpuUWdQVDA5SUhOMFlXTnJXM05kS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJtWVd4elpWeHVJQ0I5WEc1OUtWeHVYRzR2TDFWd1pHRjBaU0IyWVd4MVpWeHVhWEJ5YjNSdkxuVndaR0YwWlNBOUlHWjFibU4wYVc5dUtIWmhiSFZsS1NCN1hHNGdJSFpoY2lCemRHRmpheUE5SUhSb2FYTXVYM04wWVdOclhHNGdJR2xtS0hOMFlXTnJMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjSWtOaGJpZDBJSFZ3WkdGMFpTQmxiWEIwZVNCdWIyUmxJVndpS1Z4dUlDQjlYRzRnSUhaaGNpQmpjM1JoWTJzZ1BTQnVaWGNnUVhKeVlYa29jM1JoWTJzdWJHVnVaM1JvS1Z4dUlDQjJZWElnYmlBOUlITjBZV05yVzNOMFlXTnJMbXhsYm1kMGFDMHhYVnh1SUNCamMzUmhZMnRiWTNOMFlXTnJMbXhsYm1kMGFDMHhYU0E5SUc1bGR5QlNRazV2WkdVb2JpNWZZMjlzYjNJc0lHNHVhMlY1TENCMllXeDFaU3dnYmk1c1pXWjBMQ0J1TG5KcFoyaDBMQ0J1TGw5amIzVnVkQ2xjYmlBZ1ptOXlLSFpoY2lCcFBYTjBZV05yTG14bGJtZDBhQzB5T3lCcFBqMHdPeUF0TFdrcElIdGNiaUFnSUNCdUlEMGdjM1JoWTJ0YmFWMWNiaUFnSUNCcFppaHVMbXhsWm5RZ1BUMDlJSE4wWVdOclcya3JNVjBwSUh0Y2JpQWdJQ0FnSUdOemRHRmphMXRwWFNBOUlHNWxkeUJTUWs1dlpHVW9iaTVmWTI5c2IzSXNJRzR1YTJWNUxDQnVMblpoYkhWbExDQmpjM1JoWTJ0YmFTc3hYU3dnYmk1eWFXZG9kQ3dnYmk1ZlkyOTFiblFwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnpkR0ZqYTF0cFhTQTlJRzVsZHlCU1FrNXZaR1VvYmk1ZlkyOXNiM0lzSUc0dWEyVjVMQ0J1TG5aaGJIVmxMQ0J1TG14bFpuUXNJR056ZEdGamExdHBLekZkTENCdUxsOWpiM1Z1ZENsY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY21WMGRYSnVJRzVsZHlCU1pXUkNiR0ZqYTFSeVpXVW9kR2hwY3k1MGNtVmxMbDlqYjIxd1lYSmxMQ0JqYzNSaFkydGJNRjBwWEc1OVhHNWNiaTh2VFc5MlpYTWdhWFJsY21GMGIzSWdZbUZqYTNkaGNtUWdiMjVsSUdWc1pXMWxiblJjYm1sd2NtOTBieTV3Y21WMklEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lIWmhjaUJ6ZEdGamF5QTlJSFJvYVhNdVgzTjBZV05yWEc0Z0lHbG1LSE4wWVdOckxteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJSEpsZEhWeWJseHVJQ0I5WEc0Z0lIWmhjaUJ1SUQwZ2MzUmhZMnRiYzNSaFkyc3ViR1Z1WjNSb0xURmRYRzRnSUdsbUtHNHViR1ZtZENrZ2UxeHVJQ0FnSUc0Z1BTQnVMbXhsWm5SY2JpQWdJQ0IzYUdsc1pTaHVLU0I3WEc0Z0lDQWdJQ0J6ZEdGamF5NXdkWE5vS0c0cFhHNGdJQ0FnSUNCdUlEMGdiaTV5YVdkb2RGeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCemRHRmpheTV3YjNBb0tWeHVJQ0FnSUhkb2FXeGxLSE4wWVdOckxteGxibWQwYUNBK0lEQWdKaVlnYzNSaFkydGJjM1JoWTJzdWJHVnVaM1JvTFRGZExteGxablFnUFQwOUlHNHBJSHRjYmlBZ0lDQWdJRzRnUFNCemRHRmphMXR6ZEdGamF5NXNaVzVuZEdndE1WMWNiaUFnSUNBZ0lITjBZV05yTG5CdmNDZ3BYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNiaTh2UTJobFkydHpJR2xtSUdsMFpYSmhkRzl5SUdseklHRjBJSE4wWVhKMElHOW1JSFJ5WldWY2JrOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hwY0hKdmRHOHNJRndpYUdGelVISmxkbHdpTENCN1hHNGdJR2RsZERvZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2RtRnlJSE4wWVdOcklEMGdkR2hwY3k1ZmMzUmhZMnRjYmlBZ0lDQnBaaWh6ZEdGamF5NXNaVzVuZEdnZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJtWVd4elpWeHVJQ0FnSUgxY2JpQWdJQ0JwWmloemRHRmphMXR6ZEdGamF5NXNaVzVuZEdndE1WMHViR1ZtZENrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSeWRXVmNiaUFnSUNCOVhHNGdJQ0FnWm05eUtIWmhjaUJ6UFhOMFlXTnJMbXhsYm1kMGFDMHhPeUJ6UGpBN0lDMHRjeWtnZTF4dUlDQWdJQ0FnYVdZb2MzUmhZMnRiY3kweFhTNXlhV2RvZENBOVBUMGdjM1JoWTJ0YmMxMHBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ5ZFdWY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sWEc0Z0lIMWNibjBwWEc1Y2JpOHZSR1ZtWVhWc2RDQmpiMjF3WVhKcGMyOXVJR1oxYm1OMGFXOXVYRzVtZFc1amRHbHZiaUJrWldaaGRXeDBRMjl0Y0dGeVpTaGhMQ0JpS1NCN1hHNGdJR2xtS0dFZ1BDQmlLU0I3WEc0Z0lDQWdjbVYwZFhKdUlDMHhYRzRnSUgxY2JpQWdhV1lvWVNBK0lHSXBJSHRjYmlBZ0lDQnlaWFIxY200Z01WeHVJQ0I5WEc0Z0lISmxkSFZ5YmlBd1hHNTlYRzVjYmk4dlFuVnBiR1FnWVNCMGNtVmxYRzVtZFc1amRHbHZiaUJqY21WaGRHVlNRbFJ5WldVb1kyOXRjR0Z5WlNrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZKbFpFSnNZV05yVkhKbFpTaGpiMjF3WVhKbElIeDhJR1JsWm1GMWJIUkRiMjF3WVhKbExDQnVkV3hzS1Z4dWZTSXNJbVY0Y0c5eWRITXVjbVZoWkNBOUlHWjFibU4wYVc5dUlDaGlkV1ptWlhJc0lHOW1abk5sZEN3Z2FYTk1SU3dnYlV4bGJpd2dia0o1ZEdWektTQjdYRzRnSUhaaGNpQmxMQ0J0WEc0Z0lIWmhjaUJsVEdWdUlEMGdLRzVDZVhSbGN5QXFJRGdwSUMwZ2JVeGxiaUF0SURGY2JpQWdkbUZ5SUdWTllYZ2dQU0FvTVNBOFBDQmxUR1Z1S1NBdElERmNiaUFnZG1GeUlHVkNhV0Z6SUQwZ1pVMWhlQ0ErUGlBeFhHNGdJSFpoY2lCdVFtbDBjeUE5SUMwM1hHNGdJSFpoY2lCcElEMGdhWE5NUlNBL0lDaHVRbmwwWlhNZ0xTQXhLU0E2SURCY2JpQWdkbUZ5SUdRZ1BTQnBjMHhGSUQ4Z0xURWdPaUF4WEc0Z0lIWmhjaUJ6SUQwZ1luVm1abVZ5VzI5bVpuTmxkQ0FySUdsZFhHNWNiaUFnYVNBclBTQmtYRzVjYmlBZ1pTQTlJSE1nSmlBb0tERWdQRHdnS0MxdVFtbDBjeWtwSUMwZ01TbGNiaUFnY3lBK1BqMGdLQzF1UW1sMGN5bGNiaUFnYmtKcGRITWdLejBnWlV4bGJseHVJQ0JtYjNJZ0tEc2dia0pwZEhNZ1BpQXdPeUJsSUQwZ0tHVWdLaUF5TlRZcElDc2dZblZtWm1WeVcyOW1abk5sZENBcklHbGRMQ0JwSUNzOUlHUXNJRzVDYVhSeklDMDlJRGdwSUh0OVhHNWNiaUFnYlNBOUlHVWdKaUFvS0RFZ1BEd2dLQzF1UW1sMGN5a3BJQzBnTVNsY2JpQWdaU0ErUGowZ0tDMXVRbWwwY3lsY2JpQWdia0pwZEhNZ0t6MGdiVXhsYmx4dUlDQm1iM0lnS0RzZ2JrSnBkSE1nUGlBd095QnRJRDBnS0cwZ0tpQXlOVFlwSUNzZ1luVm1abVZ5VzI5bVpuTmxkQ0FySUdsZExDQnBJQ3M5SUdRc0lHNUNhWFJ6SUMwOUlEZ3BJSHQ5WEc1Y2JpQWdhV1lnS0dVZ1BUMDlJREFwSUh0Y2JpQWdJQ0JsSUQwZ01TQXRJR1ZDYVdGelhHNGdJSDBnWld4elpTQnBaaUFvWlNBOVBUMGdaVTFoZUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ0SUQ4Z1RtRk9JRG9nS0NoeklEOGdMVEVnT2lBeEtTQXFJRWx1Wm1sdWFYUjVLVnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJRzBnUFNCdElDc2dUV0YwYUM1d2IzY29NaXdnYlV4bGJpbGNiaUFnSUNCbElEMGdaU0F0SUdWQ2FXRnpYRzRnSUgxY2JpQWdjbVYwZFhKdUlDaHpJRDhnTFRFZ09pQXhLU0FxSUcwZ0tpQk5ZWFJvTG5CdmR5Z3lMQ0JsSUMwZ2JVeGxiaWxjYm4xY2JseHVaWGh3YjNKMGN5NTNjbWwwWlNBOUlHWjFibU4wYVc5dUlDaGlkV1ptWlhJc0lIWmhiSFZsTENCdlptWnpaWFFzSUdselRFVXNJRzFNWlc0c0lHNUNlWFJsY3lrZ2UxeHVJQ0IyWVhJZ1pTd2diU3dnWTF4dUlDQjJZWElnWlV4bGJpQTlJQ2h1UW5sMFpYTWdLaUE0S1NBdElHMU1aVzRnTFNBeFhHNGdJSFpoY2lCbFRXRjRJRDBnS0RFZ1BEd2daVXhsYmlrZ0xTQXhYRzRnSUhaaGNpQmxRbWxoY3lBOUlHVk5ZWGdnUGo0Z01WeHVJQ0IyWVhJZ2NuUWdQU0FvYlV4bGJpQTlQVDBnTWpNZ1B5Qk5ZWFJvTG5CdmR5Z3lMQ0F0TWpRcElDMGdUV0YwYUM1d2IzY29NaXdnTFRjM0tTQTZJREFwWEc0Z0lIWmhjaUJwSUQwZ2FYTk1SU0EvSURBZ09pQW9ia0o1ZEdWeklDMGdNU2xjYmlBZ2RtRnlJR1FnUFNCcGMweEZJRDhnTVNBNklDMHhYRzRnSUhaaGNpQnpJRDBnZG1Gc2RXVWdQQ0F3SUh4OElDaDJZV3gxWlNBOVBUMGdNQ0FtSmlBeElDOGdkbUZzZFdVZ1BDQXdLU0EvSURFZ09pQXdYRzVjYmlBZ2RtRnNkV1VnUFNCTllYUm9MbUZpY3loMllXeDFaU2xjYmx4dUlDQnBaaUFvYVhOT1lVNG9kbUZzZFdVcElIeDhJSFpoYkhWbElEMDlQU0JKYm1acGJtbDBlU2tnZTF4dUlDQWdJRzBnUFNCcGMwNWhUaWgyWVd4MVpTa2dQeUF4SURvZ01GeHVJQ0FnSUdVZ1BTQmxUV0Y0WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWlNBOUlFMWhkR2d1Wm14dmIzSW9UV0YwYUM1c2IyY29kbUZzZFdVcElDOGdUV0YwYUM1TVRqSXBYRzRnSUNBZ2FXWWdLSFpoYkhWbElDb2dLR01nUFNCTllYUm9MbkJ2ZHlneUxDQXRaU2twSUR3Z01Ta2dlMXh1SUNBZ0lDQWdaUzB0WEc0Z0lDQWdJQ0JqSUNvOUlESmNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tHVWdLeUJsUW1saGN5QStQU0F4S1NCN1hHNGdJQ0FnSUNCMllXeDFaU0FyUFNCeWRDQXZJR05jYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RtRnNkV1VnS3owZ2NuUWdLaUJOWVhSb0xuQnZkeWd5TENBeElDMGdaVUpwWVhNcFhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMllXeDFaU0FxSUdNZ1BqMGdNaWtnZTF4dUlDQWdJQ0FnWlNzclhHNGdJQ0FnSUNCaklDODlJREpjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvWlNBcklHVkNhV0Z6SUQ0OUlHVk5ZWGdwSUh0Y2JpQWdJQ0FnSUcwZ1BTQXdYRzRnSUNBZ0lDQmxJRDBnWlUxaGVGeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb1pTQXJJR1ZDYVdGeklENDlJREVwSUh0Y2JpQWdJQ0FnSUcwZ1BTQW9LSFpoYkhWbElDb2dZeWtnTFNBeEtTQXFJRTFoZEdndWNHOTNLRElzSUcxTVpXNHBYRzRnSUNBZ0lDQmxJRDBnWlNBcklHVkNhV0Z6WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHMGdQU0IyWVd4MVpTQXFJRTFoZEdndWNHOTNLRElzSUdWQ2FXRnpJQzBnTVNrZ0tpQk5ZWFJvTG5CdmR5Z3lMQ0J0VEdWdUtWeHVJQ0FnSUNBZ1pTQTlJREJjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JtYjNJZ0tEc2diVXhsYmlBK1BTQTRPeUJpZFdabVpYSmJiMlptYzJWMElDc2dhVjBnUFNCdElDWWdNSGhtWml3Z2FTQXJQU0JrTENCdElDODlJREkxTml3Z2JVeGxiaUF0UFNBNEtTQjdmVnh1WEc0Z0lHVWdQU0FvWlNBOFBDQnRUR1Z1S1NCOElHMWNiaUFnWlV4bGJpQXJQU0J0VEdWdVhHNGdJR1p2Y2lBb095QmxUR1Z1SUQ0Z01Ec2dZblZtWm1WeVcyOW1abk5sZENBcklHbGRJRDBnWlNBbUlEQjRabVlzSUdrZ0t6MGdaQ3dnWlNBdlBTQXlOVFlzSUdWTVpXNGdMVDBnT0NrZ2UzMWNibHh1SUNCaWRXWm1aWEpiYjJabWMyVjBJQ3NnYVNBdElHUmRJSHc5SUhNZ0tpQXhNamhjYm4xY2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JuWmhjaUIwZVhCbGN5QTlJRnRjYmlBZ2NtVnhkV2x5WlNnbkxpOXVaWGgwVkdsamF5Y3BMRnh1SUNCeVpYRjFhWEpsS0NjdUwyMTFkR0YwYVc5dUxtcHpKeWtzWEc0Z0lISmxjWFZwY21Vb0p5NHZiV1Z6YzJGblpVTm9ZVzV1Wld3bktTeGNiaUFnY21WeGRXbHlaU2duTGk5emRHRjBaVU5vWVc1blpTY3BMRnh1SUNCeVpYRjFhWEpsS0NjdUwzUnBiV1Z2ZFhRbktWeHVYVHRjYm5aaGNpQmtjbUZwYm1sdVp6dGNiblpoY2lCamRYSnlaVzUwVVhWbGRXVTdYRzUyWVhJZ2NYVmxkV1ZKYm1SbGVDQTlJQzB4TzF4dWRtRnlJSEYxWlhWbElEMGdXMTA3WEc1MllYSWdjMk5vWldSMWJHVmtJRDBnWm1Gc2MyVTdYRzVtZFc1amRHbHZiaUJqYkdWaGJsVndUbVY0ZEZScFkyc29LU0I3WEc0Z0lHbG1JQ2doWkhKaGFXNXBibWNnZkh3Z0lXTjFjbkpsYm5SUmRXVjFaU2tnZTF4dUlDQWdJSEpsZEhWeWJqdGNiaUFnZlZ4dUlDQmtjbUZwYm1sdVp5QTlJR1poYkhObE8xeHVJQ0JwWmlBb1kzVnljbVZ1ZEZGMVpYVmxMbXhsYm1kMGFDa2dlMXh1SUNBZ0lIRjFaWFZsSUQwZ1kzVnljbVZ1ZEZGMVpYVmxMbU52Ym1OaGRDaHhkV1YxWlNrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2NYVmxkV1ZKYm1SbGVDQTlJQzB4TzF4dUlDQjlYRzRnSUdsbUlDaHhkV1YxWlM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0J1WlhoMFZHbGpheWdwTzF4dUlDQjlYRzU5WEc1Y2JpOHZibUZ0WldRZ2JtVjRkRlJwWTJzZ1ptOXlJR3hsYzNNZ1kyOXVablZ6YVc1bklITjBZV05ySUhSeVlXTmxjMXh1Wm5WdVkzUnBiMjRnYm1WNGRGUnBZMnNvS1NCN1hHNGdJR2xtSUNoa2NtRnBibWx1WnlrZ2UxeHVJQ0FnSUhKbGRIVnlianRjYmlBZ2ZWeHVJQ0J6WTJobFpIVnNaV1FnUFNCbVlXeHpaVHRjYmlBZ1pISmhhVzVwYm1jZ1BTQjBjblZsTzF4dUlDQjJZWElnYkdWdUlEMGdjWFZsZFdVdWJHVnVaM1JvTzF4dUlDQjJZWElnZEdsdFpXOTFkQ0E5SUhObGRGUnBiV1Z2ZFhRb1kyeGxZVzVWY0U1bGVIUlVhV05yS1R0Y2JpQWdkMmhwYkdVZ0tHeGxiaWtnZTF4dUlDQWdJR04xY25KbGJuUlJkV1YxWlNBOUlIRjFaWFZsTzF4dUlDQWdJSEYxWlhWbElEMGdXMTA3WEc0Z0lDQWdkMmhwYkdVZ0tHTjFjbkpsYm5SUmRXVjFaU0FtSmlBckszRjFaWFZsU1c1a1pYZ2dQQ0JzWlc0cElIdGNiaUFnSUNBZ0lHTjFjbkpsYm5SUmRXVjFaVnR4ZFdWMVpVbHVaR1Y0WFM1eWRXNG9LVHRjYmlBZ0lDQjlYRzRnSUNBZ2NYVmxkV1ZKYm1SbGVDQTlJQzB4TzF4dUlDQWdJR3hsYmlBOUlIRjFaWFZsTG14bGJtZDBhRHRjYmlBZ2ZWeHVJQ0JqZFhKeVpXNTBVWFZsZFdVZ1BTQnVkV3hzTzF4dUlDQnhkV1YxWlVsdVpHVjRJRDBnTFRFN1hHNGdJR1J5WVdsdWFXNW5JRDBnWm1Gc2MyVTdYRzRnSUdOc1pXRnlWR2x0Wlc5MWRDaDBhVzFsYjNWMEtUdGNibjFjYm5aaGNpQnpZMmhsWkhWc1pVUnlZV2x1TzF4dWRtRnlJR2tnUFNBdE1UdGNiblpoY2lCc1pXNGdQU0IwZVhCbGN5NXNaVzVuZEdnN1hHNTNhR2xzWlNBb0t5dHBJRHdnYkdWdUtTQjdYRzRnSUdsbUlDaDBlWEJsYzF0cFhTQW1KaUIwZVhCbGMxdHBYUzUwWlhOMElDWW1JSFI1Y0dWelcybGRMblJsYzNRb0tTa2dlMXh1SUNBZ0lITmphR1ZrZFd4bFJISmhhVzRnUFNCMGVYQmxjMXRwWFM1cGJuTjBZV3hzS0c1bGVIUlVhV05yS1R0Y2JpQWdJQ0JpY21WaGF6dGNiaUFnZlZ4dWZWeHVMeThnZGpnZ2JHbHJaWE1nY0hKbFpHbGpkR2xpYkdVZ2IySnFaV04wYzF4dVpuVnVZM1JwYjI0Z1NYUmxiU2htZFc0c0lHRnljbUY1S1NCN1hHNGdJSFJvYVhNdVpuVnVJRDBnWm5WdU8xeHVJQ0IwYUdsekxtRnljbUY1SUQwZ1lYSnlZWGs3WEc1OVhHNUpkR1Z0TG5CeWIzUnZkSGx3WlM1eWRXNGdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSFpoY2lCbWRXNGdQU0IwYUdsekxtWjFianRjYmlBZ2RtRnlJR0Z5Y21GNUlEMGdkR2hwY3k1aGNuSmhlVHRjYmlBZ2MzZHBkR05vSUNoaGNuSmhlUzVzWlc1bmRHZ3BJSHRjYmlBZ1kyRnpaU0F3T2x4dUlDQWdJSEpsZEhWeWJpQm1kVzRvS1R0Y2JpQWdZMkZ6WlNBeE9seHVJQ0FnSUhKbGRIVnliaUJtZFc0b1lYSnlZWGxiTUYwcE8xeHVJQ0JqWVhObElESTZYRzRnSUNBZ2NtVjBkWEp1SUdaMWJpaGhjbkpoZVZzd1hTd2dZWEp5WVhsYk1WMHBPMXh1SUNCallYTmxJRE02WEc0Z0lDQWdjbVYwZFhKdUlHWjFiaWhoY25KaGVWc3dYU3dnWVhKeVlYbGJNVjBzSUdGeWNtRjVXekpkS1R0Y2JpQWdaR1ZtWVhWc2REcGNiaUFnSUNCeVpYUjFjbTRnWm5WdUxtRndjR3g1S0c1MWJHd3NJR0Z5Y21GNUtUdGNiaUFnZlZ4dVhHNTlPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JwYlcxbFpHbGhkR1U3WEc1bWRXNWpkR2x2YmlCcGJXMWxaR2xoZEdVb2RHRnpheWtnZTF4dUlDQjJZWElnWVhKbmN5QTlJRzVsZHlCQmNuSmhlU2hoY21kMWJXVnVkSE11YkdWdVozUm9JQzBnTVNrN1hHNGdJR2xtSUNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01Ta2dlMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F4T3lCcElEd2dZWEpuZFcxbGJuUnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCaGNtZHpXMmtnTFNBeFhTQTlJR0Z5WjNWdFpXNTBjMXRwWFR0Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY1hWbGRXVXVjSFZ6YUNodVpYY2dTWFJsYlNoMFlYTnJMQ0JoY21kektTazdYRzRnSUdsbUlDZ2hjMk5vWldSMWJHVmtJQ1ltSUNGa2NtRnBibWx1WnlrZ2UxeHVJQ0FnSUhOamFHVmtkV3hsWkNBOUlIUnlkV1U3WEc0Z0lDQWdjMk5vWldSMWJHVkVjbUZwYmlncE8xeHVJQ0I5WEc1OVhHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNibVY0Y0c5eWRITXVkR1Z6ZENBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2FXWWdLR2RzYjJKaGJDNXpaWFJKYlcxbFpHbGhkR1VwSUh0Y2JpQWdJQ0F2THlCM1pTQmpZVzRnYjI1c2VTQm5aWFFnYUdWeVpTQnBiaUJKUlRFd1hHNGdJQ0FnTHk4Z2QyaHBZMmdnWkc5bGMyNG5kQ0JvWVc1a1pXd2djRzl6ZEUxbGMzTmhaMlVnZDJWc2JGeHVJQ0FnSUhKbGRIVnliaUJtWVd4elpUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2RIbHdaVzltSUdkc2IySmhiQzVOWlhOellXZGxRMmhoYm01bGJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjN1hHNTlPMXh1WEc1bGVIQnZjblJ6TG1sdWMzUmhiR3dnUFNCbWRXNWpkR2x2YmlBb1puVnVZeWtnZTF4dUlDQjJZWElnWTJoaGJtNWxiQ0E5SUc1bGR5Qm5iRzlpWVd3dVRXVnpjMkZuWlVOb1lXNXVaV3dvS1R0Y2JpQWdZMmhoYm01bGJDNXdiM0owTVM1dmJtMWxjM05oWjJVZ1BTQm1kVzVqTzF4dUlDQnlaWFIxY200Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lHTm9ZVzV1Wld3dWNHOXlkREl1Y0c5emRFMWxjM05oWjJVb01DazdYRzRnSUgwN1hHNTlPeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNiaTh2WW1GelpXUWdiMlptSUhKemRuQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMM1JwYkdSbGFXOHZjbk4yY0M1cWMxeHVMeTlzYVdObGJuTmxJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzkwYVd4a1pXbHZMM0p6ZG5BdWFuTXZZbXh2WWk5dFlYTjBaWEl2VEVsRFJVNVRSVnh1THk5b2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmRHbHNaR1ZwYnk5eWMzWndMbXB6TDJKc2IySXZiV0Z6ZEdWeUwyeHBZaTl5YzNad0wyRnpZWEF1YW5OY2JseHVkbUZ5SUUxMWRHRjBhVzl1SUQwZ1oyeHZZbUZzTGsxMWRHRjBhVzl1VDJKelpYSjJaWElnZkh3Z1oyeHZZbUZzTGxkbFlrdHBkRTExZEdGMGFXOXVUMkp6WlhKMlpYSTdYRzVjYm1WNGNHOXlkSE11ZEdWemRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlFMTFkR0YwYVc5dU8xeHVmVHRjYmx4dVpYaHdiM0owY3k1cGJuTjBZV3hzSUQwZ1puVnVZM1JwYjI0Z0tHaGhibVJzWlNrZ2UxeHVJQ0IyWVhJZ1kyRnNiR1ZrSUQwZ01EdGNiaUFnZG1GeUlHOWljMlZ5ZG1WeUlEMGdibVYzSUUxMWRHRjBhVzl1S0doaGJtUnNaU2s3WEc0Z0lIWmhjaUJsYkdWdFpXNTBJRDBnWjJ4dlltRnNMbVJ2WTNWdFpXNTBMbU55WldGMFpWUmxlSFJPYjJSbEtDY25LVHRjYmlBZ2IySnpaWEoyWlhJdWIySnpaWEoyWlNobGJHVnRaVzUwTENCN1hHNGdJQ0FnWTJoaGNtRmpkR1Z5UkdGMFlUb2dkSEoxWlZ4dUlDQjlLVHRjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCbGJHVnRaVzUwTG1SaGRHRWdQU0FvWTJGc2JHVmtJRDBnS3l0allXeHNaV1FnSlNBeUtUdGNiaUFnZlR0Y2JuMDdJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVaWGh3YjNKMGN5NTBaWE4wSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBdkx5QkViMjRuZENCblpYUWdabTl2YkdWa0lHSjVJR1V1Wnk0Z1luSnZkM05sY21sbWVTQmxiblpwY205dWJXVnVkSE11WEc0Z0lISmxkSFZ5YmlBb2RIbHdaVzltSUhCeWIyTmxjM01nSVQwOUlDZDFibVJsWm1sdVpXUW5LU0FtSmlBaGNISnZZMlZ6Y3k1aWNtOTNjMlZ5TzF4dWZUdGNibHh1Wlhod2IzSjBjeTVwYm5OMFlXeHNJRDBnWm5WdVkzUnBiMjRnS0daMWJtTXBJSHRjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCd2NtOWpaWE56TG01bGVIUlVhV05yS0daMWJtTXBPMXh1SUNCOU8xeHVmVHRjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dVpYaHdiM0owY3k1MFpYTjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0J5WlhSMWNtNGdKMlJ2WTNWdFpXNTBKeUJwYmlCbmJHOWlZV3dnSmlZZ0oyOXVjbVZoWkhsemRHRjBaV05vWVc1blpTY2dhVzRnWjJ4dlltRnNMbVJ2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb0ozTmpjbWx3ZENjcE8xeHVmVHRjYmx4dVpYaHdiM0owY3k1cGJuTjBZV3hzSUQwZ1puVnVZM1JwYjI0Z0tHaGhibVJzWlNrZ2UxeHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdLQ2tnZTF4dVhHNGdJQ0FnTHk4Z1EzSmxZWFJsSUdFZ1BITmpjbWx3ZEQ0Z1pXeGxiV1Z1ZERzZ2FYUnpJSEpsWVdSNWMzUmhkR1ZqYUdGdVoyVWdaWFpsYm5RZ2QybHNiQ0JpWlNCbWFYSmxaQ0JoYzNsdVkyaHliMjV2ZFhOc2VTQnZibU5sSUdsMElHbHpJR2x1YzJWeWRHVmtYRzRnSUNBZ0x5OGdhVzUwYnlCMGFHVWdaRzlqZFcxbGJuUXVJRVJ2SUhOdkxDQjBhSFZ6SUhGMVpYVnBibWNnZFhBZ2RHaGxJSFJoYzJzdUlGSmxiV1Z0WW1WeUlIUnZJR05zWldGdUlIVndJRzl1WTJVZ2FYUW5jeUJpWldWdUlHTmhiR3hsWkM1Y2JpQWdJQ0IyWVhJZ2MyTnlhWEIwUld3Z1BTQm5iRzlpWVd3dVpHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duYzJOeWFYQjBKeWs3WEc0Z0lDQWdjMk55YVhCMFJXd3ViMjV5WldGa2VYTjBZWFJsWTJoaGJtZGxJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ2FHRnVaR3hsS0NrN1hHNWNiaUFnSUNBZ0lITmpjbWx3ZEVWc0xtOXVjbVZoWkhsemRHRjBaV05vWVc1blpTQTlJRzUxYkd3N1hHNGdJQ0FnSUNCelkzSnBjSFJGYkM1d1lYSmxiblJPYjJSbExuSmxiVzkyWlVOb2FXeGtLSE5qY21sd2RFVnNLVHRjYmlBZ0lDQWdJSE5qY21sd2RFVnNJRDBnYm5Wc2JEdGNiaUFnSUNCOU8xeHVJQ0FnSUdkc2IySmhiQzVrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVZWEJ3Wlc1a1EyaHBiR1FvYzJOeWFYQjBSV3dwTzF4dVhHNGdJQ0FnY21WMGRYSnVJR2hoYm1Sc1pUdGNiaUFnZlR0Y2JuMDdJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVaWGh3YjNKMGN5NTBaWE4wSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCeVpYUjFjbTRnZEhKMVpUdGNibjA3WEc1Y2JtVjRjRzl5ZEhNdWFXNXpkR0ZzYkNBOUlHWjFibU4wYVc5dUlDaDBLU0I3WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2MyVjBWR2x0Wlc5MWRDaDBMQ0F3S1R0Y2JpQWdmVHRjYm4wN0lpd2lhV1lnS0hSNWNHVnZaaUJQWW1wbFkzUXVZM0psWVhSbElEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQzh2SUdsdGNHeGxiV1Z1ZEdGMGFXOXVJR1p5YjIwZ2MzUmhibVJoY21RZ2JtOWtaUzVxY3lBbmRYUnBiQ2NnYlc5a2RXeGxYRzRnSUcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnYVc1b1pYSnBkSE1vWTNSdmNpd2djM1Z3WlhKRGRHOXlLU0I3WEc0Z0lDQWdZM1J2Y2k1emRYQmxjbDhnUFNCemRYQmxja04wYjNKY2JpQWdJQ0JqZEc5eUxuQnliM1J2ZEhsd1pTQTlJRTlpYW1WamRDNWpjbVZoZEdVb2MzVndaWEpEZEc5eUxuQnliM1J2ZEhsd1pTd2dlMXh1SUNBZ0lDQWdZMjl1YzNSeWRXTjBiM0k2SUh0Y2JpQWdJQ0FnSUNBZ2RtRnNkV1U2SUdOMGIzSXNYRzRnSUNBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0IzY21sMFlXSnNaVG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdZMjl1Wm1sbmRYSmhZbXhsT2lCMGNuVmxYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTazdYRzRnSUgwN1hHNTlJR1ZzYzJVZ2UxeHVJQ0F2THlCdmJHUWdjMk5vYjI5c0lITm9hVzBnWm05eUlHOXNaQ0JpY205M2MyVnljMXh1SUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUdsdWFHVnlhWFJ6S0dOMGIzSXNJSE4xY0dWeVEzUnZjaWtnZTF4dUlDQWdJR04wYjNJdWMzVndaWEpmSUQwZ2MzVndaWEpEZEc5eVhHNGdJQ0FnZG1GeUlGUmxiWEJEZEc5eUlEMGdablZ1WTNScGIyNGdLQ2tnZTMxY2JpQWdJQ0JVWlcxd1EzUnZjaTV3Y205MGIzUjVjR1VnUFNCemRYQmxja04wYjNJdWNISnZkRzkwZVhCbFhHNGdJQ0FnWTNSdmNpNXdjbTkwYjNSNWNHVWdQU0J1WlhjZ1ZHVnRjRU4wYjNJb0tWeHVJQ0FnSUdOMGIzSXVjSEp2ZEc5MGVYQmxMbU52Ym5OMGNuVmpkRzl5SUQwZ1kzUnZjbHh1SUNCOVhHNTlYRzRpTENKY2JtVjRjRzl5ZEhNdVkyOXRjR0Z5WlNBOUlHWjFibU4wYVc5dUlDaGhMQ0JpS1NCN1hHNWNiaUFnYVdZb1FuVm1abVZ5TG1selFuVm1abVZ5S0dFcEtTQjdYRzRnSUNBZ2RtRnlJR3dnUFNCTllYUm9MbTFwYmloaExteGxibWQwYUN3Z1lpNXNaVzVuZEdncFhHNGdJQ0FnWm05eUtIWmhjaUJwSUQwZ01Ec2dhU0E4SUd3N0lHa3JLeWtnZTF4dUlDQWdJQ0FnZG1GeUlHTnRjQ0E5SUdGYmFWMGdMU0JpVzJsZFhHNGdJQ0FnSUNCcFppaGpiWEFwSUhKbGRIVnliaUJqYlhCY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlHRXViR1Z1WjNSb0lDMGdZaTVzWlc1bmRHaGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQmhJRHdnWWlBL0lDMHhJRG9nWVNBK0lHSWdQeUF4SURvZ01GeHVmVnh1WEc0dkx5QjBieUJpWlNCamIyMXdZWFJwWW14bElIZHBkR2dnZEdobElHTjFjbkpsYm5RZ1lXSnpkSEpoWTNRdGJHVjJaV3hrYjNkdUlIUmxjM1J6WEc0dkx5QnVkV3hzYVhOb0lHOXlJR1Z0Y0hSNUlITjBjbWx1WjNNdVhHNHZMeUJKSUdOdmRXeGtJSFZ6WlNBaElYWmhiQ0JpZFhRZ1NTQjNZVzUwSUhSdklIQmxjbTFwZENCdWRXMWlaWEp6SUdGdVpDQmliMjlzWldGdWN5eGNiaTh2SUdsbUlIQnZjM05wWW14bExseHVYRzVtZFc1amRHbHZiaUJwYzBSbFppQW9kbUZzS1NCN1hHNGdJSEpsZEhWeWJpQjJZV3dnSVQwOUlIVnVaR1ZtYVc1bFpDQW1KaUIyWVd3Z0lUMDlJQ2NuWEc1OVhHNWNibVoxYm1OMGFXOXVJR2hoY3lBb2NtRnVaMlVzSUc1aGJXVXBJSHRjYmlBZ2NtVjBkWEp1SUU5aWFtVmpkQzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0hKaGJtZGxMQ0J1WVcxbEtWeHVmVnh1WEc1bWRXNWpkR2x2YmlCb1lYTkxaWGtvY21GdVoyVXNJRzVoYldVcElIdGNiaUFnY21WMGRYSnVJRTlpYW1WamRDNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLSEpoYm1kbExDQnVZVzFsS1NBbUppQnVZVzFsWEc1OVhHNWNiblpoY2lCc2IzZGxja0p2ZFc1a1MyVjVJRDBnWlhod2IzSjBjeTVzYjNkbGNrSnZkVzVrUzJWNUlEMGdablZ1WTNScGIyNGdLSEpoYm1kbEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUNoY2JpQWdJQ0FnSUNCb1lYTkxaWGtvY21GdVoyVXNJQ2RuZENjcFhHNGdJQ0FnZkh3Z2FHRnpTMlY1S0hKaGJtZGxMQ0FuWjNSbEp5bGNiaUFnSUNCOGZDQm9ZWE5MWlhrb2NtRnVaMlVzSUNkdGFXNG5LVnh1SUNBZ0lIeDhJQ2h5WVc1blpTNXlaWFpsY25ObElEOGdhR0Z6UzJWNUtISmhibWRsTENBblpXNWtKeWtnT2lCb1lYTkxaWGtvY21GdVoyVXNJQ2R6ZEdGeWRDY3BLVnh1SUNBZ0lIeDhJSFZ1WkdWbWFXNWxaRnh1SUNBZ0lDbGNibjFjYmx4dWRtRnlJR3h2ZDJWeVFtOTFibVFnUFNCbGVIQnZjblJ6TG14dmQyVnlRbTkxYm1RZ1BTQm1kVzVqZEdsdmJpQW9jbUZ1WjJVc0lHUmxaaWtnZTF4dUlDQjJZWElnYXlBOUlHeHZkMlZ5UW05MWJtUkxaWGtvY21GdVoyVXBYRzRnSUhKbGRIVnliaUJySUQ4Z2NtRnVaMlZiYTEwZ09pQmtaV1pjYm4xY2JseHVkbUZ5SUd4dmQyVnlRbTkxYm1SSmJtTnNkWE5wZG1VZ1BTQmxlSEJ2Y25SekxteHZkMlZ5UW05MWJtUkpibU5zZFhOcGRtVWdQU0JtZFc1amRHbHZiaUFvY21GdVoyVXBJSHRjYmlBZ2NtVjBkWEp1SUdoaGN5aHlZVzVuWlN3Z0oyZDBKeWtnUHlCbVlXeHpaU0E2SUhSeWRXVmNibjFjYmx4dWRtRnlJSFZ3Y0dWeVFtOTFibVJKYm1Oc2RYTnBkbVVnUFNCbGVIQnZjblJ6TG5Wd2NHVnlRbTkxYm1SSmJtTnNkWE5wZG1VZ1BWeHVJQ0JtZFc1amRHbHZiaUFvY21GdVoyVXBJSHRjYmlBZ0lDQnlaWFIxY200Z0tHaGhjeWh5WVc1blpTd2dKMngwSnlrZ0x5b21KaUFoY21GdVoyVXViV0Y0UlhncUx5a2dQeUJtWVd4elpTQTZJSFJ5ZFdWY2JpQWdmVnh1WEc1MllYSWdiRzkzWlhKQ2IzVnVaRVY0WTJ4MWMybDJaU0E5SUdWNGNHOXlkSE11Ykc5M1pYSkNiM1Z1WkVWNFkyeDFjMmwyWlNBOVhHNGdJR1oxYm1OMGFXOXVJQ2h5WVc1blpTa2dlMXh1SUNBZ0lISmxkSFZ5YmlBaGJHOTNaWEpDYjNWdVpFbHVZMngxYzJsMlpTaHlZVzVuWlNsY2JpQWdmVnh1WEc1MllYSWdkWEJ3WlhKQ2IzVnVaRVY0WTJ4MWMybDJaU0E5SUdWNGNHOXlkSE11ZFhCd1pYSkNiM1Z1WkVWNFkyeDFjMmwyWlNBOVhHNGdJR1oxYm1OMGFXOXVJQ2h5WVc1blpTa2dlMXh1SUNBZ0lISmxkSFZ5YmlBaGRYQndaWEpDYjNWdVpFbHVZMngxYzJsMlpTaHlZVzVuWlNsY2JpQWdmVnh1WEc1MllYSWdkWEJ3WlhKQ2IzVnVaRXRsZVNBOUlHVjRjRzl5ZEhNdWRYQndaWEpDYjNWdVpFdGxlU0E5SUdaMWJtTjBhVzl1SUNoeVlXNW5aU2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQWdhR0Z6UzJWNUtISmhibWRsTENBbmJIUW5LVnh1SUNBZ0lIeDhJR2hoYzB0bGVTaHlZVzVuWlN3Z0oyeDBaU2NwWEc0Z0lDQWdmSHdnYUdGelMyVjVLSEpoYm1kbExDQW5iV0Y0SnlsY2JpQWdJQ0I4ZkNBb2NtRnVaMlV1Y21WMlpYSnpaU0EvSUdoaGMwdGxlU2h5WVc1blpTd2dKM04wWVhKMEp5a2dPaUJvWVhOTFpYa29jbUZ1WjJVc0lDZGxibVFuS1NsY2JpQWdJQ0I4ZkNCMWJtUmxabWx1WldSY2JpQWdJQ0FwWEc1OVhHNWNiblpoY2lCMWNIQmxja0p2ZFc1a0lEMGdaWGh3YjNKMGN5NTFjSEJsY2tKdmRXNWtJRDBnWm5WdVkzUnBiMjRnS0hKaGJtZGxMQ0JrWldZcElIdGNiaUFnZG1GeUlHc2dQU0IxY0hCbGNrSnZkVzVrUzJWNUtISmhibWRsS1Z4dUlDQnlaWFIxY200Z2F5QS9JSEpoYm1kbFcydGRJRG9nWkdWbVhHNTlYRzVjYm1WNGNHOXlkSE11YzNSaGNuUWdQU0JtZFc1amRHbHZiaUFvY21GdVoyVXNJR1JsWmlrZ2UxeHVJQ0J5WlhSMWNtNGdjbUZ1WjJVdWNtVjJaWEp6WlNBL0lIVndjR1Z5UW05MWJtUW9jbUZ1WjJVc0lHUmxaaWtnT2lCc2IzZGxja0p2ZFc1a0tISmhibWRsTENCa1pXWXBYRzU5WEc1bGVIQnZjblJ6TG1WdVpDQTlJR1oxYm1OMGFXOXVJQ2h5WVc1blpTd2daR1ZtS1NCN1hHNGdJSEpsZEhWeWJpQnlZVzVuWlM1eVpYWmxjbk5sSUQ4Z2JHOTNaWEpDYjNWdVpDaHlZVzVuWlN3Z1pHVm1LU0E2SUhWd2NHVnlRbTkxYm1Rb2NtRnVaMlVzSUdSbFppbGNibjFjYm1WNGNHOXlkSE11YzNSaGNuUkpibU5zZFhOcGRtVWdQU0JtZFc1amRHbHZiaUFvY21GdVoyVXBJSHRjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0J5WVc1blpTNXlaWFpsY25ObFhHNGdJRDhnZFhCd1pYSkNiM1Z1WkVsdVkyeDFjMmwyWlNoeVlXNW5aU2xjYmlBZ09pQnNiM2RsY2tKdmRXNWtTVzVqYkhWemFYWmxLSEpoYm1kbEtWeHVJQ0FwWEc1OVhHNWxlSEJ2Y25SekxtVnVaRWx1WTJ4MWMybDJaU0E5SUdaMWJtTjBhVzl1SUNoeVlXNW5aU2tnZTF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUhKaGJtZGxMbkpsZG1WeWMyVmNiaUFnUHlCc2IzZGxja0p2ZFc1a1NXNWpiSFZ6YVhabEtISmhibWRsS1Z4dUlDQTZJSFZ3Y0dWeVFtOTFibVJKYm1Oc2RYTnBkbVVvY21GdVoyVXBYRzRnSUNsY2JuMWNibHh1Wm5WdVkzUnBiMjRnYVdRZ0tHVXBJSHNnY21WMGRYSnVJR1VnZlZ4dVhHNWxlSEJ2Y25SekxuUnZUSFJuZENBOUlHWjFibU4wYVc5dUlDaHlZVzVuWlN3Z1gzSmhibWRsTENCdFlYQXNJR3h2ZDJWeUxDQjFjSEJsY2lrZ2UxeHVJQ0JmY21GdVoyVWdQU0JmY21GdVoyVWdmSHdnZTMxY2JpQWdiV0Z3SUQwZ2JXRndJSHg4SUdsa1hHNGdJSFpoY2lCa1pXWmhkV3gwY3lBOUlHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXpYRzRnSUhaaGNpQnNZaUE5SUdWNGNHOXlkSE11Ykc5M1pYSkNiM1Z1WkV0bGVTaHlZVzVuWlNsY2JpQWdkbUZ5SUhWaUlEMGdaWGh3YjNKMGN5NTFjSEJsY2tKdmRXNWtTMlY1S0hKaGJtZGxLVnh1SUNCcFppaHNZaWtnZTF4dUlDQWdJR2xtS0d4aUlEMDlQU0FuWjNRbktTQmZjbUZ1WjJVdVozUWdQU0J0WVhBb2NtRnVaMlV1WjNRc0lHWmhiSE5sS1Z4dUlDQWdJR1ZzYzJVZ0lDQWdJQ0FnSUNBZ0lDQmZjbUZ1WjJVdVozUmxJRDBnYldGd0tISmhibWRsVzJ4aVhTd2dabUZzYzJVcFhHNGdJSDFjYmlBZ1pXeHpaU0JwWmloa1pXWmhkV3gwY3lsY2JpQWdJQ0JmY21GdVoyVXVaM1JsSUQwZ2JXRndLR3h2ZDJWeUxDQm1ZV3h6WlNsY2JseHVJQ0JwWmloMVlpa2dlMXh1SUNBZ0lHbG1LSFZpSUQwOVBTQW5iSFFuS1NCZmNtRnVaMlV1YkhRZ1BTQnRZWEFvY21GdVoyVXViSFFzSUhSeWRXVXBYRzRnSUNBZ1pXeHpaU0FnSUNBZ0lDQWdJQ0FnSUY5eVlXNW5aUzVzZEdVZ1BTQnRZWEFvY21GdVoyVmJkV0pkTENCMGNuVmxLVnh1SUNCOVhHNGdJR1ZzYzJVZ2FXWW9aR1ZtWVhWc2RITXBYRzRnSUNBZ1gzSmhibWRsTG14MFpTQTlJRzFoY0NoMWNIQmxjaXdnZEhKMVpTbGNibHh1SUNCcFppaHlZVzVuWlM1eVpYWmxjbk5sSUNFOUlHNTFiR3dwWEc0Z0lDQWdYM0poYm1kbExuSmxkbVZ5YzJVZ1BTQWhJWEpoYm1kbExuSmxkbVZ5YzJWY2JseHVJQ0F2TDJsbUlISmhibWRsSUhkaGN5QjFjMlZrSUcxMWRHRmliSGxjYmlBZ0x5OG9hVzRnYkdWMlpXd3RjM1ZpYkdWMlpXd2dhWFFuY3lCd1lYSjBJRzltSUdGdUlHOXdkR2x2Ym5NZ2IySnFaV04wWEc0Z0lDOHZkR2hoZENCb1lYTWdiVzl5WlNCd2NtOXdaWEowYVdWeklHOXVJR2wwTGlsY2JpQWdhV1lvYUdGektGOXlZVzVuWlN3Z0oyMWhlQ2NwS1NBZ0lHUmxiR1YwWlNCZmNtRnVaMlV1YldGNFhHNGdJR2xtS0doaGN5aGZjbUZ1WjJVc0lDZHRhVzRuS1NrZ0lDQmtaV3hsZEdVZ1gzSmhibWRsTG0xcGJseHVJQ0JwWmlob1lYTW9YM0poYm1kbExDQW5jM1JoY25RbktTa2daR1ZzWlhSbElGOXlZVzVuWlM1emRHRnlkRnh1SUNCcFppaG9ZWE1vWDNKaGJtZGxMQ0FuWlc1a0p5a3BJQ0FnWkdWc1pYUmxJRjl5WVc1blpTNWxibVJjYmx4dUlDQnlaWFIxY200Z1gzSmhibWRsWEc1OVhHNWNibVY0Y0c5eWRITXVZMjl1ZEdGcGJuTWdQU0JtZFc1amRHbHZiaUFvY21GdVoyVXNJR3RsZVN3Z1kyOXRjR0Z5WlNrZ2UxeHVJQ0JqYjIxd1lYSmxJRDBnWTI5dGNHRnlaU0I4ZkNCbGVIQnZjblJ6TG1OdmJYQmhjbVZjYmx4dUlDQjJZWElnYkdJZ1BTQnNiM2RsY2tKdmRXNWtLSEpoYm1kbEtWeHVJQ0JwWmlocGMwUmxaaWhzWWlrcElIdGNiaUFnSUNCMllYSWdZMjF3SUQwZ1kyOXRjR0Z5WlNoclpYa3NJR3hpS1Z4dUlDQWdJR2xtS0dOdGNDQThJREFnZkh3Z0tHTnRjQ0E5UFQwZ01DQW1KaUJzYjNkbGNrSnZkVzVrUlhoamJIVnphWFpsS0hKaGJtZGxLU2twWEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJWY2JpQWdmVnh1WEc0Z0lIWmhjaUIxWWlBOUlIVndjR1Z5UW05MWJtUW9jbUZ1WjJVcFhHNGdJR2xtS0dselJHVm1LSFZpS1NrZ2UxeHVJQ0FnSUhaaGNpQmpiWEFnUFNCamIyMXdZWEpsS0d0bGVTd2dkV0lwWEc0Z0lDQWdhV1lvWTIxd0lENGdNQ0I4ZkNBb1kyMXdJRDA5UFNBd0tTQW1KaUIxY0hCbGNrSnZkVzVrUlhoamJIVnphWFpsS0hKaGJtZGxLU2xjYmlBZ0lDQWdJSEpsZEhWeWJpQm1ZV3h6WlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhSeWRXVmNibjFjYmx4dVpYaHdiM0owY3k1bWFXeDBaWElnUFNCbWRXNWpkR2x2YmlBb2NtRnVaMlVzSUdOdmJYQmhjbVVwSUh0Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDaHJaWGtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdaWGh3YjNKMGN5NWpiMjUwWVdsdWN5aHlZVzVuWlN3Z2EyVjVMQ0JqYjIxd1lYSmxLVnh1SUNCOVhHNTlYRzVjYmx4dUlpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnlaWEYxYVhKbEtDZHBiVzFsWkdsaGRHVW5LVnh1SWl3aWRtRnlJR2x1YUdWeWFYUnpJRDBnY21WeGRXbHlaU2duYVc1b1pYSnBkSE1uS1Z4dWRtRnlJRUZpYzNSeVlXTjBUR1YyWld4RVQxZE9JRDBnY21WeGRXbHlaU2duWVdKemRISmhZM1F0YkdWMlpXeGtiM2R1SnlrdVFXSnpkSEpoWTNSTVpYWmxiRVJQVjA1Y2JuWmhjaUJCWW5OMGNtRmpkRWwwWlhKaGRHOXlJRDBnY21WeGRXbHlaU2duWVdKemRISmhZM1F0YkdWMlpXeGtiM2R1SnlrdVFXSnpkSEpoWTNSSmRHVnlZWFJ2Y2x4dWRtRnlJR3gwWjNRZ1BTQnlaWEYxYVhKbEtDZHNkR2QwSnlsY2JuWmhjaUJqY21WaGRHVlNRbFFnUFNCeVpYRjFhWEpsS0NkbWRXNWpkR2x2Ym1Gc0xYSmxaQzFpYkdGamF5MTBjbVZsSnlsY2JuWmhjaUJDZFdabVpYSWdQU0J5WlhGMWFYSmxLQ2R6WVdabExXSjFabVpsY2ljcExrSjFabVpsY2x4dVhHNHZMeUJKYmlCT2IyUmxMQ0IxYzJVZ1oyeHZZbUZzTG5ObGRFbHRiV1ZrYVdGMFpTNGdTVzRnZEdobElHSnliM2R6WlhJc0lIVnpaU0JoSUdOdmJuTnBjM1JsYm5SY2JpOHZJRzFwWTNKdmRHRnpheUJzYVdKeVlYSjVJSFJ2SUdkcGRtVWdZMjl1YzJsemRHVnVkQ0J0YVdOeWIzUmhjMnNnWlhod1pYSnBaVzVqWlNCMGJ5QmhiR3dnWW5KdmQzTmxjbk5jYm5aaGNpQnpaWFJKYlcxbFpHbGhkR1VnUFNCeVpYRjFhWEpsS0NjdUwybHRiV1ZrYVdGMFpTY3BYRzVjYm1aMWJtTjBhVzl1SUdkMElDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdiSFJuZEM1amIyMXdZWEpsS0haaGJIVmxMQ0IwYUdsekxsOTFjSEJsY2tKdmRXNWtLU0ErSURCY2JuMWNibHh1Wm5WdVkzUnBiMjRnWjNSbElDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdiSFJuZEM1amIyMXdZWEpsS0haaGJIVmxMQ0IwYUdsekxsOTFjSEJsY2tKdmRXNWtLU0ErUFNBd1hHNTlYRzVjYm1aMWJtTjBhVzl1SUd4MElDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdiSFJuZEM1amIyMXdZWEpsS0haaGJIVmxMQ0IwYUdsekxsOTFjSEJsY2tKdmRXNWtLU0E4SURCY2JuMWNibHh1Wm5WdVkzUnBiMjRnYkhSbElDaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdiSFJuZEM1amIyMXdZWEpsS0haaGJIVmxMQ0IwYUdsekxsOTFjSEJsY2tKdmRXNWtLU0E4UFNBd1hHNTlYRzVjYm1aMWJtTjBhVzl1SUUxbGJVbDBaWEpoZEc5eUlDaGtZaXdnYjNCMGFXOXVjeWtnZTF4dUlDQkJZbk4wY21GamRFbDBaWEpoZEc5eUxtTmhiR3dvZEdocGN5d2daR0lwWEc0Z0lIUm9hWE11WDJ4cGJXbDBJRDBnYjNCMGFXOXVjeTVzYVcxcGRGeHVYRzRnSUdsbUlDaDBhR2x6TGw5c2FXMXBkQ0E5UFQwZ0xURXBJSFJvYVhNdVgyeHBiV2wwSUQwZ1NXNW1hVzVwZEhsY2JseHVJQ0IyWVhJZ2RISmxaU0E5SUdSaUxsOXpkRzl5WlZ4dVhHNGdJSFJvYVhNdWEyVjVRWE5DZFdabVpYSWdQU0J2Y0hScGIyNXpMbXRsZVVGelFuVm1abVZ5SUNFOVBTQm1ZV3h6WlZ4dUlDQjBhR2x6TG5aaGJIVmxRWE5DZFdabVpYSWdQU0J2Y0hScGIyNXpMblpoYkhWbFFYTkNkV1ptWlhJZ0lUMDlJR1poYkhObFhHNGdJSFJvYVhNdVgzSmxkbVZ5YzJVZ1BTQnZjSFJwYjI1ekxuSmxkbVZ5YzJWY2JpQWdkR2hwY3k1ZmIzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5OY2JpQWdkR2hwY3k1ZlpHOXVaU0E5SURCY2JseHVJQ0JwWmlBb0lYUm9hWE11WDNKbGRtVnljMlVwSUh0Y2JpQWdJQ0IwYUdsekxsOXBibU55SUQwZ0oyNWxlSFFuWEc0Z0lDQWdkR2hwY3k1ZmJHOTNaWEpDYjNWdVpDQTlJR3gwWjNRdWJHOTNaWEpDYjNWdVpDaHZjSFJwYjI1ektWeHVJQ0FnSUhSb2FYTXVYM1Z3Y0dWeVFtOTFibVFnUFNCc2RHZDBMblZ3Y0dWeVFtOTFibVFvYjNCMGFXOXVjeWxjYmx4dUlDQWdJR2xtSUNoMGVYQmxiMllnZEdocGN5NWZiRzkzWlhKQ2IzVnVaQ0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVgzUnlaV1VnUFNCMGNtVmxMbUpsWjJsdVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNoc2RHZDBMbXh2ZDJWeVFtOTFibVJKYm1Oc2RYTnBkbVVvYjNCMGFXOXVjeWtwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYM1J5WldVZ1BTQjBjbVZsTG1kbEtIUm9hWE11WDJ4dmQyVnlRbTkxYm1RcFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSFJvYVhNdVgzUnlaV1VnUFNCMGNtVmxMbWQwS0hSb2FYTXVYMnh2ZDJWeVFtOTFibVFwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXVYM1Z3Y0dWeVFtOTFibVFwSUh0Y2JpQWdJQ0FnSUdsbUlDaHNkR2QwTG5Wd2NHVnlRbTkxYm1SSmJtTnNkWE5wZG1Vb2IzQjBhVzl1Y3lrcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmRHVnpkQ0E5SUd4MFpWeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmZEdWemRDQTlJR3gwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSFJvYVhNdVgybHVZM0lnUFNBbmNISmxkaWRjYmlBZ0lDQjBhR2x6TGw5c2IzZGxja0p2ZFc1a0lEMGdiSFJuZEM1MWNIQmxja0p2ZFc1a0tHOXdkR2x2Ym5NcFhHNGdJQ0FnZEdocGN5NWZkWEJ3WlhKQ2IzVnVaQ0E5SUd4MFozUXViRzkzWlhKQ2IzVnVaQ2h2Y0hScGIyNXpLVnh1WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUIwYUdsekxsOXNiM2RsY2tKdmRXNWtJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1ZmRISmxaU0E5SUhSeVpXVXVaVzVrWEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hzZEdkMExuVndjR1Z5UW05MWJtUkpibU5zZFhOcGRtVW9iM0IwYVc5dWN5a3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVgzUnlaV1VnUFNCMGNtVmxMbXhsS0hSb2FYTXVYMnh2ZDJWeVFtOTFibVFwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11WDNSeVpXVWdQU0IwY21WbExteDBLSFJvYVhNdVgyeHZkMlZ5UW05MWJtUXBYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdVgzVndjR1Z5UW05MWJtUXBJSHRjYmlBZ0lDQWdJR2xtSUNoc2RHZDBMbXh2ZDJWeVFtOTFibVJKYm1Oc2RYTnBkbVVvYjNCMGFXOXVjeWtwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmZEdWemRDQTlJR2QwWlZ4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZkR1Z6ZENBOUlHZDBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibWx1YUdWeWFYUnpLRTFsYlVsMFpYSmhkRzl5TENCQlluTjBjbUZqZEVsMFpYSmhkRzl5S1Z4dVhHNU5aVzFKZEdWeVlYUnZjaTV3Y205MGIzUjVjR1V1WDI1bGVIUWdQU0JtZFc1amRHbHZiaUFvWTJGc2JHSmhZMnNwSUh0Y2JpQWdkbUZ5SUd0bGVWeHVJQ0IyWVhJZ2RtRnNkV1ZjYmx4dUlDQnBaaUFvZEdocGN5NWZaRzl1WlNzcklENDlJSFJvYVhNdVgyeHBiV2wwS1NCeVpYUjFjbTRnYzJWMFNXMXRaV1JwWVhSbEtHTmhiR3hpWVdOcktWeHVJQ0JwWmlBb0lYUm9hWE11WDNSeVpXVXVkbUZzYVdRcElISmxkSFZ5YmlCelpYUkpiVzFsWkdsaGRHVW9ZMkZzYkdKaFkyc3BYRzVjYmlBZ2EyVjVJRDBnZEdocGN5NWZkSEpsWlM1clpYbGNiaUFnZG1Gc2RXVWdQU0IwYUdsekxsOTBjbVZsTG5aaGJIVmxYRzVjYmlBZ2FXWWdLQ0YwYUdsekxsOTBaWE4wS0d0bGVTa3BJSEpsZEhWeWJpQnpaWFJKYlcxbFpHbGhkR1VvWTJGc2JHSmhZMnNwWEc1Y2JpQWdhV1lnS0hSb2FYTXVhMlY1UVhOQ2RXWm1aWElnSmlZZ0lVSjFabVpsY2k1cGMwSjFabVpsY2loclpYa3BLU0I3WEc0Z0lDQWdhMlY1SUQwZ1FuVm1abVZ5TG1aeWIyMG9VM1J5YVc1bktHdGxlU2twWEc0Z0lIMWNibHh1SUNCcFppQW9kR2hwY3k1MllXeDFaVUZ6UW5WbVptVnlJQ1ltSUNGQ2RXWm1aWEl1YVhOQ2RXWm1aWElvZG1Gc2RXVXBLU0I3WEc0Z0lDQWdkbUZzZFdVZ1BTQkNkV1ptWlhJdVpuSnZiU2hUZEhKcGJtY29kbUZzZFdVcEtWeHVJQ0I5WEc1Y2JpQWdkR2hwY3k1ZmRISmxaVnQwYUdsekxsOXBibU55WFNncFhHNWNiaUFnYzJWMFNXMXRaV1JwWVhSbEtHWjFibU4wYVc5dUlHTmhiR3hPWlhoMElDZ3BJSHRjYmlBZ0lDQmpZV3hzWW1GamF5aHVkV3hzTENCclpYa3NJSFpoYkhWbEtWeHVJQ0I5S1Z4dWZWeHVYRzVOWlcxSmRHVnlZWFJ2Y2k1d2NtOTBiM1I1Y0dVdVgzUmxjM1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhKbGRIVnliaUIwY25WbFhHNTlYRzVjYm1aMWJtTjBhVzl1SUUxbGJVUlBWMDRnS0NrZ2UxeHVJQ0JwWmlBb0lTaDBhR2x6SUdsdWMzUmhibU5sYjJZZ1RXVnRSRTlYVGlrcElISmxkSFZ5YmlCdVpYY2dUV1Z0UkU5WFRpZ3BYRzVjYmlBZ1FXSnpkSEpoWTNSTVpYWmxiRVJQVjA0dVkyRnNiQ2gwYUdsekxDQW5KeWxjYmx4dUlDQjBhR2x6TGw5emRHOXlaU0E5SUdOeVpXRjBaVkpDVkNoc2RHZDBMbU52YlhCaGNtVXBYRzU5WEc1Y2JtbHVhR1Z5YVhSektFMWxiVVJQVjA0c0lFRmljM1J5WVdOMFRHVjJaV3hFVDFkT0tWeHVYRzVOWlcxRVQxZE9MbkJ5YjNSdmRIbHdaUzVmYjNCbGJpQTlJR1oxYm1OMGFXOXVJQ2h2Y0hScGIyNXpMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQjJZWElnYzJWc1ppQTlJSFJvYVhOY2JpQWdjMlYwU1cxdFpXUnBZWFJsS0daMWJtTjBhVzl1SUdOaGJHeE9aWGgwSUNncElIdGNiaUFnSUNCallXeHNZbUZqYXlodWRXeHNMQ0J6Wld4bUtWeHVJQ0I5S1Z4dWZWeHVYRzVOWlcxRVQxZE9MbkJ5YjNSdmRIbHdaUzVmYzJWeWFXRnNhWHBsUzJWNUlEMGdablZ1WTNScGIyNGdLR3RsZVNrZ2UxeHVJQ0J5WlhSMWNtNGdhMlY1WEc1OVhHNWNiazFsYlVSUFYwNHVjSEp2ZEc5MGVYQmxMbDl6WlhKcFlXeHBlbVZXWVd4MVpTQTlJR1oxYm1OMGFXOXVJQ2gyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZG1Gc2RXVWdQVDBnYm5Wc2JDQS9JQ2NuSURvZ2RtRnNkV1ZjYm4xY2JseHVUV1Z0UkU5WFRpNXdjbTkwYjNSNWNHVXVYM0IxZENBOUlHWjFibU4wYVc5dUlDaHJaWGtzSUhaaGJIVmxMQ0J2Y0hScGIyNXpMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQjJZWElnYVhSbGNpQTlJSFJvYVhNdVgzTjBiM0psTG1acGJtUW9hMlY1S1Z4dVhHNGdJR2xtSUNocGRHVnlMblpoYkdsa0tTQjdYRzRnSUNBZ2RHaHBjeTVmYzNSdmNtVWdQU0JwZEdWeUxuVndaR0YwWlNoMllXeDFaU2xjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0IwYUdsekxsOXpkRzl5WlNBOUlIUm9hWE11WDNOMGIzSmxMbWx1YzJWeWRDaHJaWGtzSUhaaGJIVmxLVnh1SUNCOVhHNWNiaUFnYzJWMFNXMXRaV1JwWVhSbEtHTmhiR3hpWVdOcktWeHVmVnh1WEc1TlpXMUVUMWRPTG5CeWIzUnZkSGx3WlM1ZloyVjBJRDBnWm5WdVkzUnBiMjRnS0d0bGVTd2diM0IwYVc5dWN5d2dZMkZzYkdKaFkyc3BJSHRjYmlBZ2RtRnlJSFpoYkhWbElEMGdkR2hwY3k1ZmMzUnZjbVV1WjJWMEtHdGxlU2xjYmx4dUlDQnBaaUFvZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUM4dklDZE9iM1JHYjNWdVpDY2daWEp5YjNJc0lHTnZibk5wYzNSbGJuUWdkMmwwYUNCTVpYWmxiRVJQVjA0Z1FWQkpYRzRnSUNBZ2NtVjBkWEp1SUhObGRFbHRiV1ZrYVdGMFpTaG1kVzVqZEdsdmJpQmpZV3hzVG1WNGRDQW9LU0I3WEc0Z0lDQWdJQ0JqWVd4c1ltRmpheWh1WlhjZ1JYSnliM0lvSjA1dmRFWnZkVzVrSnlrcFhHNGdJQ0FnZlNsY2JpQWdmVnh1WEc0Z0lHbG1JQ2h2Y0hScGIyNXpMbUZ6UW5WbVptVnlJQ0U5UFNCbVlXeHpaU0FtSmlBaFFuVm1abVZ5TG1selFuVm1abVZ5S0haaGJIVmxLU2tnZTF4dUlDQWdJSFpoYkhWbElEMGdRblZtWm1WeUxtWnliMjBvVTNSeWFXNW5LSFpoYkhWbEtTbGNiaUFnZlZ4dVhHNGdJSE5sZEVsdGJXVmthV0YwWlNobWRXNWpkR2x2YmlCallXeHNUbVY0ZENBb0tTQjdYRzRnSUNBZ1kyRnNiR0poWTJzb2JuVnNiQ3dnZG1Gc2RXVXBYRzRnSUgwcFhHNTlYRzVjYmsxbGJVUlBWMDR1Y0hKdmRHOTBlWEJsTGw5a1pXd2dQU0JtZFc1amRHbHZiaUFvYTJWNUxDQnZjSFJwYjI1ekxDQmpZV3hzWW1GamF5a2dlMXh1SUNCMGFHbHpMbDl6ZEc5eVpTQTlJSFJvYVhNdVgzTjBiM0psTG5KbGJXOTJaU2hyWlhrcFhHNGdJSE5sZEVsdGJXVmthV0YwWlNoallXeHNZbUZqYXlsY2JuMWNibHh1VFdWdFJFOVhUaTV3Y205MGIzUjVjR1V1WDJKaGRHTm9JRDBnWm5WdVkzUnBiMjRnS0dGeWNtRjVMQ0J2Y0hScGIyNXpMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQjJZWElnYVNBOUlDMHhYRzRnSUhaaGNpQnJaWGxjYmlBZ2RtRnlJSFpoYkhWbFhHNGdJSFpoY2lCcGRHVnlYRzRnSUhaaGNpQnNaVzRnUFNCaGNuSmhlUzVzWlc1bmRHaGNiaUFnZG1GeUlIUnlaV1VnUFNCMGFHbHpMbDl6ZEc5eVpWeHVYRzRnSUhkb2FXeGxJQ2dySzJrZ1BDQnNaVzRwSUh0Y2JpQWdJQ0JyWlhrZ1BTQmhjbkpoZVZ0cFhTNXJaWGxjYmlBZ0lDQnBkR1Z5SUQwZ2RISmxaUzVtYVc1a0tHdGxlU2xjYmx4dUlDQWdJR2xtSUNoaGNuSmhlVnRwWFM1MGVYQmxJRDA5UFNBbmNIVjBKeWtnZTF4dUlDQWdJQ0FnZG1Gc2RXVWdQU0JoY25KaGVWdHBYUzUyWVd4MVpWeHVJQ0FnSUNBZ2RISmxaU0E5SUdsMFpYSXVkbUZzYVdRZ1B5QnBkR1Z5TG5Wd1pHRjBaU2gyWVd4MVpTa2dPaUIwY21WbExtbHVjMlZ5ZENoclpYa3NJSFpoYkhWbEtWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwY21WbElEMGdhWFJsY2k1eVpXMXZkbVVvS1Z4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhSb2FYTXVYM04wYjNKbElEMGdkSEpsWlZ4dVhHNGdJSE5sZEVsdGJXVmthV0YwWlNoallXeHNZbUZqYXlsY2JuMWNibHh1VFdWdFJFOVhUaTV3Y205MGIzUjVjR1V1WDJsMFpYSmhkRzl5SUQwZ1puVnVZM1JwYjI0Z0tHOXdkR2x2Ym5NcElIdGNiaUFnY21WMGRYSnVJRzVsZHlCTlpXMUpkR1Z5WVhSdmNpaDBhR2x6TENCdmNIUnBiMjV6S1Z4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRTFsYlVSUFYwNHVaR1ZtWVhWc2RDQTlJRTFsYlVSUFYwNWNiaUlzSWk4dklITm9hVzBnWm05eUlIVnphVzVuSUhCeWIyTmxjM01nYVc0Z1luSnZkM05sY2x4dWRtRnlJSEJ5YjJObGMzTWdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHQ5TzF4dVhHNHZMeUJqWVdOb1pXUWdabkp2YlNCM2FHRjBaWFpsY2lCbmJHOWlZV3dnYVhNZ2NISmxjMlZ1ZENCemJ5QjBhR0YwSUhSbGMzUWdjblZ1Ym1WeWN5QjBhR0YwSUhOMGRXSWdhWFJjYmk4dklHUnZiaWQwSUdKeVpXRnJJSFJvYVc1bmN5NGdJRUoxZENCM1pTQnVaV1ZrSUhSdklIZHlZWEFnYVhRZ2FXNGdZU0IwY25rZ1kyRjBZMmdnYVc0Z1kyRnpaU0JwZENCcGMxeHVMeThnZDNKaGNIQmxaQ0JwYmlCemRISnBZM1FnYlc5a1pTQmpiMlJsSUhkb2FXTm9JR1J2WlhOdUozUWdaR1ZtYVc1bElHRnVlU0JuYkc5aVlXeHpMaUFnU1hRbmN5QnBibk5wWkdVZ1lWeHVMeThnWm5WdVkzUnBiMjRnWW1WallYVnpaU0IwY25rdlkyRjBZMmhsY3lCa1pXOXdkR2x0YVhwbElHbHVJR05sY25SaGFXNGdaVzVuYVc1bGN5NWNibHh1ZG1GeUlHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRN1hHNTJZWElnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwTzF4dVhHNW1kVzVqZEdsdmJpQmtaV1poZFd4MFUyVjBWR2x0YjNWMEtDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnbmMyVjBWR2x0Wlc5MWRDQm9ZWE1nYm05MElHSmxaVzRnWkdWbWFXNWxaQ2NwTzF4dWZWeHVablZ1WTNScGIyNGdaR1ZtWVhWc2RFTnNaV0Z5VkdsdFpXOTFkQ0FvS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RqYkdWaGNsUnBiV1Z2ZFhRZ2FHRnpJRzV2ZENCaVpXVnVJR1JsWm1sdVpXUW5LVHRjYm4xY2JpaG1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFI1Y0dWdlppQnpaWFJVYVcxbGIzVjBJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aV1JUWlhSVWFXMWxiM1YwSUQwZ2MyVjBWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFNCa1pXWmhkV3gwVTJWMFZHbHRiM1YwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdaR1ZtWVhWc2RGTmxkRlJwYlc5MWREdGNiaUFnSUNCOVhHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJqYkdWaGNsUnBiV1Z2ZFhRZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ0E5SUdOc1pXRnlWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHUmxabUYxYkhSRGJHVmhjbFJwYldWdmRYUTdYRzRnSUNBZ2ZWeHVmU0FvS1NsY2JtWjFibU4wYVc5dUlISjFibFJwYldWdmRYUW9ablZ1S1NCN1hHNGdJQ0FnYVdZZ0tHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BUMDlJSE5sZEZScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ0x5OXViM0p0WVd3Z1pXNTJhWEp2YldWdWRITWdhVzRnYzJGdVpTQnphWFIxWVhScGIyNXpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpaWFJVYVcxbGIzVjBLR1oxYml3Z01DazdYRzRnSUNBZ2ZWeHVJQ0FnSUM4dklHbG1JSE5sZEZScGJXVnZkWFFnZDJGemJpZDBJR0YyWVdsc1lXSnNaU0JpZFhRZ2QyRnpJR3hoZEhSbGNpQmtaV1pwYm1Wa1hHNGdJQ0FnYVdZZ0tDaGpZV05vWldSVFpYUlVhVzFsYjNWMElEMDlQU0JrWldaaGRXeDBVMlYwVkdsdGIzVjBJSHg4SUNGallXTm9aV1JUWlhSVWFXMWxiM1YwS1NBbUppQnpaWFJVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFNCelpYUlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MyVjBWR2x0Wlc5MWRDaG1kVzRzSURBcE8xeHVJQ0FnSUgxY2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQXZMeUIzYUdWdUlIZG9aVzRnYzI5dFpXSnZaSGtnYUdGeklITmpjbVYzWldRZ2QybDBhQ0J6WlhSVWFXMWxiM1YwSUdKMWRDQnVieUJKTGtVdUlHMWhaR1J1WlhOelhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JUWlhSVWFXMWxiM1YwS0daMWJpd2dNQ2s3WEc0Z0lDQWdmU0JqWVhSamFDaGxLWHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGZG9aVzRnZDJVZ1lYSmxJR2x1SUVrdVJTNGdZblYwSUhSb1pTQnpZM0pwY0hRZ2FHRnpJR0psWlc0Z1pYWmhiR1ZrSUhOdklFa3VSUzRnWkc5bGMyNG5kQ0IwY25WemRDQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQjNhR1Z1SUdOaGJHeGxaQ0J1YjNKdFlXeHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRk5sZEZScGJXVnZkWFF1WTJGc2JDaHVkV3hzTENCbWRXNHNJREFwTzF4dUlDQWdJQ0FnSUNCOUlHTmhkR05vS0dVcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MyRnRaU0JoY3lCaFltOTJaU0JpZFhRZ2QyaGxiaUJwZENkeklHRWdkbVZ5YzJsdmJpQnZaaUJKTGtVdUlIUm9ZWFFnYlhWemRDQm9ZWFpsSUhSb1pTQm5iRzlpWVd3Z2IySnFaV04wSUdadmNpQW5kR2hwY3ljc0lHaHZjR1oxYkd4NUlHOTFjaUJqYjI1MFpYaDBJR052Y25KbFkzUWdiM1JvWlhKM2FYTmxJR2wwSUhkcGJHd2dkR2h5YjNjZ1lTQm5iRzlpWVd3Z1pYSnliM0pjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JUWlhSVWFXMWxiM1YwTG1OaGJHd29kR2hwY3l3Z1puVnVMQ0F3S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVYRzU5WEc1bWRXNWpkR2x2YmlCeWRXNURiR1ZoY2xScGJXVnZkWFFvYldGeWEyVnlLU0I3WEc0Z0lDQWdhV1lnS0dOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOVBUMGdZMnhsWVhKVWFXMWxiM1YwS1NCN1hHNGdJQ0FnSUNBZ0lDOHZibTl5YldGc0lHVnVkbWx5YjIxbGJuUnpJR2x1SUhOaGJtVWdjMmwwZFdGMGFXOXVjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMnhsWVhKVWFXMWxiM1YwS0cxaGNtdGxjaWs3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJR2xtSUdOc1pXRnlWR2x0Wlc5MWRDQjNZWE51SjNRZ1lYWmhhV3hoWW14bElHSjFkQ0IzWVhNZ2JHRjBkR1Z5SUdSbFptbHVaV1JjYmlBZ0lDQnBaaUFvS0dOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOVBUMGdaR1ZtWVhWc2RFTnNaV0Z5VkdsdFpXOTFkQ0I4ZkNBaFkyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMEtTQW1KaUJqYkdWaGNsUnBiV1Z2ZFhRcElIdGNiaUFnSUNBZ0lDQWdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBJRDBnWTJ4bFlYSlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyeGxZWEpVYVcxbGIzVjBLRzFoY210bGNpazdYRzRnSUNBZ2ZWeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQzh2SUhkb1pXNGdkMmhsYmlCemIyMWxZbTlrZVNCb1lYTWdjMk55WlhkbFpDQjNhWFJvSUhObGRGUnBiV1Z2ZFhRZ1luVjBJRzV2SUVrdVJTNGdiV0ZrWkc1bGMzTmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWRDaHRZWEpyWlhJcE8xeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcGUxeHVJQ0FnSUNBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVjJobGJpQjNaU0JoY21VZ2FXNGdTUzVGTGlCaWRYUWdkR2hsSUhOamNtbHdkQ0JvWVhNZ1ltVmxiaUJsZG1Gc1pXUWdjMjhnU1M1RkxpQmtiMlZ6YmlkMElDQjBjblZ6ZENCMGFHVWdaMnh2WW1Gc0lHOWlhbVZqZENCM2FHVnVJR05oYkd4bFpDQnViM0p0WVd4c2VWeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQzVqWVd4c0tHNTFiR3dzSUcxaGNtdGxjaWs3WEc0Z0lDQWdJQ0FnSUgwZ1kyRjBZMmdnS0dVcGUxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MyRnRaU0JoY3lCaFltOTJaU0JpZFhRZ2QyaGxiaUJwZENkeklHRWdkbVZ5YzJsdmJpQnZaaUJKTGtVdUlIUm9ZWFFnYlhWemRDQm9ZWFpsSUhSb1pTQm5iRzlpWVd3Z2IySnFaV04wSUdadmNpQW5kR2hwY3ljc0lHaHZjR1oxYkd4NUlHOTFjaUJqYjI1MFpYaDBJR052Y25KbFkzUWdiM1JvWlhKM2FYTmxJR2wwSUhkcGJHd2dkR2h5YjNjZ1lTQm5iRzlpWVd3Z1pYSnliM0l1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJUYjIxbElIWmxjbk5wYjI1eklHOW1JRWt1UlM0Z2FHRjJaU0JrYVdabVpYSmxiblFnY25Wc1pYTWdabTl5SUdOc1pXRnlWR2x0Wlc5MWRDQjJjeUJ6WlhSVWFXMWxiM1YwWEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMExtTmhiR3dvZEdocGN5d2diV0Z5YTJWeUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1WEc1Y2JuMWNiblpoY2lCeGRXVjFaU0E5SUZ0ZE8xeHVkbUZ5SUdSeVlXbHVhVzVuSUQwZ1ptRnNjMlU3WEc1MllYSWdZM1Z5Y21WdWRGRjFaWFZsTzF4dWRtRnlJSEYxWlhWbFNXNWtaWGdnUFNBdE1UdGNibHh1Wm5WdVkzUnBiMjRnWTJ4bFlXNVZjRTVsZUhSVWFXTnJLQ2tnZTF4dUlDQWdJR2xtSUNnaFpISmhhVzVwYm1jZ2ZId2dJV04xY25KbGJuUlJkV1YxWlNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnZlZ4dUlDQWdJR1J5WVdsdWFXNW5JRDBnWm1Gc2MyVTdYRzRnSUNBZ2FXWWdLR04xY25KbGJuUlJkV1YxWlM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1VnUFNCamRYSnlaVzUwVVhWbGRXVXVZMjl1WTJGMEtIRjFaWFZsS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J4ZFdWMVpVbHVaR1Y0SUQwZ0xURTdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaHhkV1YxWlM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ1pISmhhVzVSZFdWMVpTZ3BPMXh1SUNBZ0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1pISmhhVzVSZFdWMVpTZ3BJSHRjYmlBZ0lDQnBaaUFvWkhKaGFXNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQjJZWElnZEdsdFpXOTFkQ0E5SUhKMWJsUnBiV1Z2ZFhRb1kyeGxZVzVWY0U1bGVIUlVhV05yS1R0Y2JpQWdJQ0JrY21GcGJtbHVaeUE5SUhSeWRXVTdYRzVjYmlBZ0lDQjJZWElnYkdWdUlEMGdjWFZsZFdVdWJHVnVaM1JvTzF4dUlDQWdJSGRvYVd4bEtHeGxiaWtnZTF4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVVhWbGRXVWdQU0J4ZFdWMVpUdGNiaUFnSUNBZ0lDQWdjWFZsZFdVZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnZDJocGJHVWdLQ3NyY1hWbGRXVkpibVJsZUNBOElHeGxiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOMWNuSmxiblJSZFdWMVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlJkV1YxWlZ0eGRXVjFaVWx1WkdWNFhTNXlkVzRvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc0Z0lDQWdJQ0FnSUd4bGJpQTlJSEYxWlhWbExteGxibWQwYUR0Y2JpQWdJQ0I5WEc0Z0lDQWdZM1Z5Y21WdWRGRjFaWFZsSUQwZ2JuVnNiRHRjYmlBZ0lDQmtjbUZwYm1sdVp5QTlJR1poYkhObE8xeHVJQ0FnSUhKMWJrTnNaV0Z5VkdsdFpXOTFkQ2gwYVcxbGIzVjBLVHRjYm4xY2JseHVjSEp2WTJWemN5NXVaWGgwVkdsamF5QTlJR1oxYm1OMGFXOXVJQ2htZFc0cElIdGNiaUFnSUNCMllYSWdZWEpuY3lBOUlHNWxkeUJCY25KaGVTaGhjbWQxYldWdWRITXViR1Z1WjNSb0lDMGdNU2s3WEc0Z0lDQWdhV1lnS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBeEtTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBeE95QnBJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaGNtZHpXMmtnTFNBeFhTQTlJR0Z5WjNWdFpXNTBjMXRwWFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdJQ0J4ZFdWMVpTNXdkWE5vS0c1bGR5QkpkR1Z0S0daMWJpd2dZWEpuY3lrcE8xeHVJQ0FnSUdsbUlDaHhkV1YxWlM1c1pXNW5kR2dnUFQwOUlERWdKaVlnSVdSeVlXbHVhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lISjFibFJwYldWdmRYUW9aSEpoYVc1UmRXVjFaU2s3WEc0Z0lDQWdmVnh1ZlR0Y2JseHVMeThnZGpnZ2JHbHJaWE1nY0hKbFpHbGpkR2xpYkdVZ2IySnFaV04wYzF4dVpuVnVZM1JwYjI0Z1NYUmxiU2htZFc0c0lHRnljbUY1S1NCN1hHNGdJQ0FnZEdocGN5NW1kVzRnUFNCbWRXNDdYRzRnSUNBZ2RHaHBjeTVoY25KaGVTQTlJR0Z5Y21GNU8xeHVmVnh1U1hSbGJTNXdjbTkwYjNSNWNHVXVjblZ1SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIUm9hWE11Wm5WdUxtRndjR3g1S0c1MWJHd3NJSFJvYVhNdVlYSnlZWGtwTzF4dWZUdGNibkJ5YjJObGMzTXVkR2wwYkdVZ1BTQW5Zbkp2ZDNObGNpYzdYRzV3Y205alpYTnpMbUp5YjNkelpYSWdQU0IwY25WbE8xeHVjSEp2WTJWemN5NWxibllnUFNCN2ZUdGNibkJ5YjJObGMzTXVZWEpuZGlBOUlGdGRPMXh1Y0hKdlkyVnpjeTUyWlhKemFXOXVJRDBnSnljN0lDOHZJR1Z0Y0hSNUlITjBjbWx1WnlCMGJ5QmhkbTlwWkNCeVpXZGxlSEFnYVhOemRXVnpYRzV3Y205alpYTnpMblpsY25OcGIyNXpJRDBnZTMwN1hHNWNibVoxYm1OMGFXOXVJRzV2YjNBb0tTQjdmVnh1WEc1d2NtOWpaWE56TG05dUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdVlXUmtUR2x6ZEdWdVpYSWdQU0J1YjI5d08xeHVjSEp2WTJWemN5NXZibU5sSUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011YjJabUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNtVnRiM1psVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV5WlcxdmRtVkJiR3hNYVhOMFpXNWxjbk1nUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTVsYldsMElEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNISmxjR1Z1WkV4cGMzUmxibVZ5SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011Y0hKbGNHVnVaRTl1WTJWTWFYTjBaVzVsY2lBOUlHNXZiM0E3WEc1Y2JuQnliMk5sYzNNdWJHbHpkR1Z1WlhKeklEMGdablZ1WTNScGIyNGdLRzVoYldVcElIc2djbVYwZFhKdUlGdGRJSDFjYmx4dWNISnZZMlZ6Y3k1aWFXNWthVzVuSUQwZ1puVnVZM1JwYjI0Z0tHNWhiV1VwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J5YjJObGMzTXVZbWx1WkdsdVp5QnBjeUJ1YjNRZ2MzVndjRzl5ZEdWa0p5azdYRzU5TzF4dVhHNXdjbTlqWlhOekxtTjNaQ0E5SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlDY3ZKeUI5TzF4dWNISnZZMlZ6Y3k1amFHUnBjaUE5SUdaMWJtTjBhVzl1SUNoa2FYSXBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozQnliMk5sYzNNdVkyaGthWElnYVhNZ2JtOTBJSE4xY0hCdmNuUmxaQ2NwTzF4dWZUdGNibkJ5YjJObGMzTXVkVzFoYzJzZ1BTQm1kVzVqZEdsdmJpZ3BJSHNnY21WMGRYSnVJREE3SUgwN1hHNGlMQ0l2S2lCbGMyeHBiblF0WkdsellXSnNaU0J1YjJSbEwyNXZMV1JsY0hKbFkyRjBaV1F0WVhCcElDb3ZYRzUyWVhJZ1luVm1abVZ5SUQwZ2NtVnhkV2x5WlNnblluVm1abVZ5SnlsY2JuWmhjaUJDZFdabVpYSWdQU0JpZFdabVpYSXVRblZtWm1WeVhHNWNiaTh2SUdGc2RHVnlibUYwYVhabElIUnZJSFZ6YVc1bklFOWlhbVZqZEM1clpYbHpJR1p2Y2lCdmJHUWdZbkp2ZDNObGNuTmNibVoxYm1OMGFXOXVJR052Y0hsUWNtOXdjeUFvYzNKakxDQmtjM1FwSUh0Y2JpQWdabTl5SUNoMllYSWdhMlY1SUdsdUlITnlZeWtnZTF4dUlDQWdJR1J6ZEZ0clpYbGRJRDBnYzNKalcydGxlVjFjYmlBZ2ZWeHVmVnh1YVdZZ0tFSjFabVpsY2k1bWNtOXRJQ1ltSUVKMVptWmxjaTVoYkd4dll5QW1KaUJDZFdabVpYSXVZV3hzYjJOVmJuTmhabVVnSmlZZ1FuVm1abVZ5TG1Gc2JHOWpWVzV6WVdabFUyeHZkeWtnZTF4dUlDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHSjFabVpsY2x4dWZTQmxiSE5sSUh0Y2JpQWdMeThnUTI5d2VTQndjbTl3WlhKMGFXVnpJR1p5YjIwZ2NtVnhkV2x5WlNnblluVm1abVZ5SnlsY2JpQWdZMjl3ZVZCeWIzQnpLR0oxWm1abGNpd2daWGh3YjNKMGN5bGNiaUFnWlhod2IzSjBjeTVDZFdabVpYSWdQU0JUWVdabFFuVm1abVZ5WEc1OVhHNWNibVoxYm1OMGFXOXVJRk5oWm1WQ2RXWm1aWElnS0dGeVp5d2daVzVqYjJScGJtZFBjazltWm5ObGRDd2diR1Z1WjNSb0tTQjdYRzRnSUhKbGRIVnliaUJDZFdabVpYSW9ZWEpuTENCbGJtTnZaR2x1WjA5eVQyWm1jMlYwTENCc1pXNW5kR2dwWEc1OVhHNWNiaTh2SUVOdmNIa2djM1JoZEdsaklHMWxkR2h2WkhNZ1puSnZiU0JDZFdabVpYSmNibU52Y0hsUWNtOXdjeWhDZFdabVpYSXNJRk5oWm1WQ2RXWm1aWElwWEc1Y2JsTmhabVZDZFdabVpYSXVabkp2YlNBOUlHWjFibU4wYVc5dUlDaGhjbWNzSUdWdVkyOWthVzVuVDNKUFptWnpaWFFzSUd4bGJtZDBhQ2tnZTF4dUlDQnBaaUFvZEhsd1pXOW1JR0Z5WnlBOVBUMGdKMjUxYldKbGNpY3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RCY21kMWJXVnVkQ0J0ZFhOMElHNXZkQ0JpWlNCaElHNTFiV0psY2ljcFhHNGdJSDFjYmlBZ2NtVjBkWEp1SUVKMVptWmxjaWhoY21jc0lHVnVZMjlrYVc1blQzSlBabVp6WlhRc0lHeGxibWQwYUNsY2JuMWNibHh1VTJGbVpVSjFabVpsY2k1aGJHeHZZeUE5SUdaMWJtTjBhVzl1SUNoemFYcGxMQ0JtYVd4c0xDQmxibU52WkdsdVp5a2dlMXh1SUNCcFppQW9kSGx3Wlc5bUlITnBlbVVnSVQwOUlDZHVkVzFpWlhJbktTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25RWEpuZFcxbGJuUWdiWFZ6ZENCaVpTQmhJRzUxYldKbGNpY3BYRzRnSUgxY2JpQWdkbUZ5SUdKMVppQTlJRUoxWm1abGNpaHphWHBsS1Z4dUlDQnBaaUFvWm1sc2JDQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCbGJtTnZaR2x1WnlBOVBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQWdJR0oxWmk1bWFXeHNLR1pwYkd3c0lHVnVZMjlrYVc1bktWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JpZFdZdVptbHNiQ2htYVd4c0tWeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElIdGNiaUFnSUNCaWRXWXVabWxzYkNnd0tWeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCaWRXWmNibjFjYmx4dVUyRm1aVUoxWm1abGNpNWhiR3h2WTFWdWMyRm1aU0E5SUdaMWJtTjBhVzl1SUNoemFYcGxLU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdjMmw2WlNBaFBUMGdKMjUxYldKbGNpY3BJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RCY21kMWJXVnVkQ0J0ZFhOMElHSmxJR0VnYm5WdFltVnlKeWxjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdRblZtWm1WeUtITnBlbVVwWEc1OVhHNWNibE5oWm1WQ2RXWm1aWEl1WVd4c2IyTlZibk5oWm1WVGJHOTNJRDBnWm5WdVkzUnBiMjRnS0hOcGVtVXBJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQnphWHBsSUNFOVBTQW5iblZ0WW1WeUp5a2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMEZ5WjNWdFpXNTBJRzExYzNRZ1ltVWdZU0J1ZFcxaVpYSW5LVnh1SUNCOVhHNGdJSEpsZEhWeWJpQmlkV1ptWlhJdVUyeHZkMEoxWm1abGNpaHphWHBsS1Z4dWZWeHVJaXdpZG1GeUlHYzdYRzVjYmk4dklGUm9hWE1nZDI5eWEzTWdhVzRnYm05dUxYTjBjbWxqZENCdGIyUmxYRzVuSUQwZ0tHWjFibU4wYVc5dUtDa2dlMXh1WEhSeVpYUjFjbTRnZEdocGN6dGNibjBwS0NrN1hHNWNiblJ5ZVNCN1hHNWNkQzh2SUZSb2FYTWdkMjl5YTNNZ2FXWWdaWFpoYkNCcGN5QmhiR3h2ZDJWa0lDaHpaV1VnUTFOUUtWeHVYSFJuSUQwZ1p5QjhmQ0J1WlhjZ1JuVnVZM1JwYjI0b1hDSnlaWFIxY200Z2RHaHBjMXdpS1NncE8xeHVmU0JqWVhSamFDQW9aU2tnZTF4dVhIUXZMeUJVYUdseklIZHZjbXR6SUdsbUlIUm9aU0IzYVc1a2IzY2djbVZtWlhKbGJtTmxJR2x6SUdGMllXbHNZV0pzWlZ4dVhIUnBaaUFvZEhsd1pXOW1JSGRwYm1SdmR5QTlQVDBnWENKdlltcGxZM1JjSWlrZ1p5QTlJSGRwYm1SdmR6dGNibjFjYmx4dUx5OGdaeUJqWVc0Z2MzUnBiR3dnWW1VZ2RXNWtaV1pwYm1Wa0xDQmlkWFFnYm05MGFHbHVaeUIwYnlCa2J5QmhZbTkxZENCcGRDNHVMbHh1THk4Z1YyVWdjbVYwZFhKdUlIVnVaR1ZtYVc1bFpDd2dhVzV6ZEdWaFpDQnZaaUJ1YjNSb2FXNW5JR2hsY21Vc0lITnZJR2wwSjNOY2JpOHZJR1ZoYzJsbGNpQjBieUJvWVc1a2JHVWdkR2hwY3lCallYTmxMaUJwWmlnaFoyeHZZbUZzS1NCN0lDNHVMbjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbk8xeHVJaXdpYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JsZUhSbGJtUmNibHh1ZG1GeUlHaGhjMDkzYmxCeWIzQmxjblI1SUQwZ1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlVHRjYmx4dVpuVnVZM1JwYjI0Z1pYaDBaVzVrS0NrZ2UxeHVJQ0FnSUhaaGNpQjBZWEpuWlhRZ1BTQjdmVnh1WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JoY21kMWJXVnVkSE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhOdmRYSmpaU0E5SUdGeVozVnRaVzUwYzF0cFhWeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2RtRnlJR3RsZVNCcGJpQnpiM1Z5WTJVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaG9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLSE52ZFhKalpTd2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUmhjbWRsZEZ0clpYbGRJRDBnYzI5MWNtTmxXMnRsZVYxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjBZWEpuWlhSY2JuMWNiaUlzSW1WNGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ2JXVnRSRzkzYmtOaFkyaGxJSDBnWm5KdmJTQW5MaTl0Wlcxa2IzZHVRMkZqYUdVbk8xeHVaWGh3YjNKMElIc2daR1ZtWVhWc2RDQmhjeUJOWlcxRFlXTm9aVTFwZUdsdWN5QjlJR1p5YjIwZ0p5NHZiV1Z0WTJGamFHVXViV2w0YVc1ekp6dGNiaUlzSWx4dVkyOXVjM1FnVFdWdFEyRmphR1ZOYVhocGJuTWdQU0FvUW1GelpVTnNZWE56S1QwK0lHTnNZWE56SUdWNGRHVnVaSE1nUW1GelpVTnNZWE56ZTF4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUZSb2FYTWdiV1YwYUc5a2N5QnlaWFIxY200Z2MzVnRiV0Z5ZVNCaFltOTFkQ0JwZEdWdGN5QnZaaUIwYUdVZ1kzVnljbVZ1ZENCdFpXMWpZV05vWlNCY2JpQWdJQ0FnS2lCQWNtVjBkWEp1YzF4dUlDQWdJQ0FxTDF4dUlDQWdJR0Z6ZVc1aklHMWxiVU5oWTJobFUzVnRiV0Z5ZVNncGUxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lYZGhhWFFnZEdocGN5NXRaVzFEWVdOb1pTNW5aWFJKZEdWdFRHbHpkQ2dwTzF4dUlDQWdJSDFjYmlBZ0lDQmNiaUFnSUNCelpYUWdUV1Z0UTJGamFHVW9iV1Z0UTJGamFHVXBlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtMWxiVU5oWTJobElEMGdiV1Z0UTJGamFHVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBJRTFsYlVOaFkyaGxLQ2w3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtMWxiVU5oWTJobE8xeHVJQ0FnSUgxY2JuMDdYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQk5aVzFEWVdOb1pVMXBlR2x1Y3pzaUxDSnBiWEJ2Y25RZ2V5QndiR0YwWm05eWJTQjlJR1p5YjIwZ0oyTmhkWE5oYkMxdVpYUXVkWFJwYkhNbk8xeHVhVzF3YjNKMElIc2dVM1J2Y21VZ1lYTWdRbUZ6WlUxbGJVTmhZMmhsSUgwZ1puSnZiU0FuWTJGMWMyRnNMVzVsZEM1amIzSmxKenRjYm1sdGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1RXVnRiM0pwZW1sdVowMXBlR2x1Y3lCOUlHWnliMjBnSnk0dmJXVnRiM0pwZW1sdVp5NXRhWGhwYm5Nbk8xeHVMeW9xWEc0Z0tpQlVhR2x6SUUxbGJXUnZkMjVEWVdOb1pTQndjbTkyYVdSbElHMWxiV05oWTJobElHbHRjR3hsYldWdWRDQmlZWE5sWkNCdmJpQmNiaUFxSUZ0dFpXMWtiM2R1WFNob2RIUndjem92TDNkM2R5NXVjRzFxY3k1amIyMHZjR0ZqYTJGblpTOXRaVzFrYjNkdUtWeHVJQ29nZXlCdGFYaFhhWFJvT2lCYklFMWxiVzl5YVhwcGJtZE5hWGhwYm5NZ1hTQjlYRzRnS2lCQVkyeGhjM01nVFdWdGIzSjVRMkZqYUdWY2JpQXFJRUJsZUhSbGJtUnpJRUpoYzJWTlpXMURZV05vWlZ4dUlDb3ZYRzVqYkdGemN5Qk5aVzFrYjNkdVEyRmphR1VnWlhoMFpXNWtjeUJ3YkdGMFptOXliUzV0YVhoWGFYUm9LQ0JDWVhObFRXVnRRMkZqYUdVc1hHNGdJQ0FnV3lCTlpXMXZjbWw2YVc1blRXbDRhVzV6SUYwcGUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyOXVibVZqZENncE8xeHVJQ0FnSUgxY2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGIyNXVaV04wSUhSdklHUmhkR0ZpWVhObExDQjBhR2x6SUdaMWJtTjBhVzl1SUhOb1lXeHNJR0psSUdOaGJHd2dkMmhsYmlCamIyNXpkSEoxWTNRZ2FXNXpkR0Z1WTJWY2JpQWdJQ0FnS2lCQWJXVnRZbVZ5YjJZZ1RXVnRaRzkzYmtOaFkyaGxYRzRnSUNBZ0lDb3ZYRzRnSUNBZ1kyOXVibVZqZENncGUxeHVJQ0FnSUNBZ0lDQnNaWFFnYldWdFpHOTNiaUE5SUhKbGNYVnBjbVVvSjIxbGJXUnZkMjRuS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEc5eVpTQTlJSFJvYVhNdWJHVjJaV3gxY0NodFpXMWtiM2R1S0NrcE95QWdJQ0FnSUNBZ1hHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQnVaWGNnVFdWdFpHOTNia05oWTJobEtDazdJaXdpTHlvcVhHNGdLaUJVYUdseklFMWxiVzl5YVhwcGJtZE5hWGhwYm5NZ1kyeGhjM01nYVhNZ1lTQnRhWGhwYm5NZ1kyeGhjM01nWm05eUlHbHRjR3hsYldWdWRDQnRaVzF2Y25rZ2JXVjBhRzlrYzF4dUlDb2dRR05zWVhOeklFMWxiVzl5YVhwcGJtZE5hWGhwYm5OY2JpQXFJRUJsZUhCbGNtbHRaVzUwWEc0Z0tpQkFaWGgwWlc1a2N5QkNZWE5sVFdWdFEyRmphR1ZEYkdGemMxeHVJQ292WEc1amIyNXpkQ0JOWlcxdmNtbDZhVzVuVFdsNGFXNXpJRDBnS0VKaGMyVk5aVzFEWVdOb1pVTnNZWE56S1QwK0lHTnNZWE56SUdWNGRHVnVaSE1nUW1GelpVMWxiVU5oWTJobFEyeGhjM043WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nVW1WaFpDQmpiMjUwWlc1MElHWnliMjBnWEc0Z0lDQWdJQ29nUUdWNGNHVnlhVzFsYm5SY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZXlCVGRISnBibWQ4VG5WdFltVnlJSDBnYldWdGIzSjVVMnh2ZEVsdVpHVjRJQzBnYldWdGIzSjVJSE5zYjNRZ2FXNWtaWGhjYmlBZ0lDQWdLaUJBY21WMGRYSnVjMXh1SUNBZ0lDQXFMMXh1SUNBZ0lHRnplVzVqSUhKbFlXUW9iV1Z0YjNKNVUyeHZkRWx1WkdWNEtYdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1IyVjBSbkp2YlUxbGJXOXllU0E5SUdGemVXNWpJQ2h0WlcxdmNubFRiRzkwU1c1a1pYZ3BQVDU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBjbmw3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHUmhkR0VnUFNCaGQyRnBkQ0IwYUdsekxtZGxkRWwwWlcwb2JXVnRiM0o1VTJ4dmRFbHVaR1Y0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnVDJKcVpXTjBMblpoYkhWbGN5aGtZWFJoS1Zzd1hUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR05oZEdOb0tHVnljaWw3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzUxYkd3N0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZWGRoYVhRZ1IyVjBSbkp2YlUxbGJXOXllU2h0WlcxdmNubFRiRzkwU1c1a1pYZ3BPMXh1SUNBZ0lIMWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2V5QlRkSEpwYm1kOFRuVnRZbVZ5SUgwZ2JXVnRiM0o1VTJ4dmRFbHVaR1Y0SUMwZ2NHOXphWFJwZG1VZ2JuVnRZbVZ5SUdadmNpQnRaVzF2Y25rZ2MyeHZkRnh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdJRUZ5Y21GNUlIMGdiV1Z0YjNKNUlIWmhiSFZsWEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZXlCUWNtOXRhWE5sSUgwZ2JXVnRiM0o1SUhOc2IzUWdhVzVrWlhnZ2RtRnNkV1ZjYmlBZ0lDQWdLaTljYmlBZ0lDQmhjM2x1WXlCM2NtbDBaU2h0WlcxdmNubFRiRzkwU1c1a1pYZ3NJSFpoYkhWbEtYdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHRjNZV2wwSUhSb2FYTXVjMlYwU1hSbGJTaHRaVzF2Y25sVGJHOTBTVzVrWlhnc0lIWmhiSFZsS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ3BjYmlBZ0lDQWdLbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQjdLbjBnYzJ4dmRFbGtlSE5jYmlBZ0lDQWdLaUJBY21WMGRYSnVjMXh1SUNBZ0lDQXFMMXh1SUNBZ0lHRnplVzVqSUhKbFkyRnNiQ2h6Ykc5MFNXUjRjeWw3WEc0Z0lDQWdJQ0FnSUd4bGRDQnRaVzF2Y25rZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnWm05eUtHeGxkQ0J6Ykc5MFNXUjRJRzltSUhOc2IzUkpaSGh6S1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFsYlc5eWVTNXdkWE5vS0dGM1lXbDBJSFJvYVhNdWNtVmhaQ2h6Ykc5MFNXUjRLU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUcxbGJXOXllVHRjYmlBZ0lDQjlYRzU5TzF4dVpYaHdiM0owSUdSbFptRjFiSFFnVFdWdGIzSnBlbWx1WjAxcGVHbHVjenNpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUY5ZlYwVkNVRUZEUzE5RldGUkZVazVCVEY5TlQwUlZURVZmWTJGMWMyRnNYMjVsZEY5amIzSmxYMTg3SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZlgxZEZRbEJCUTB0ZlJWaFVSVkpPUVV4ZlRVOUVWVXhGWDJOaGRYTmhiRjl1WlhSZmRYUnBiSE5mWHpzaVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOSIsImltcG9ydCB7IFRlbnNvciwgY2F1c2FsTmV0Q29yZSB9IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBtZW1Eb3duQ2FjaGUgfSBmcm9tICdjYXVzYWwtbmV0Lm1lbWNhY2hlJztcbmNsYXNzIENhdXNhbE5ldE1lbW9yeSBleHRlbmRzIFRlbnNvcntcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLk1lbW9yeSA9IG1lbURvd25DYWNoZTtcbiAgICAgICAgdGhpcy5SID0gY2F1c2FsTmV0Q29yZS5Db3JlRnVuY3Rpb247XG4gICAgfVxuICAgIHNldCBNZW1vcnkobWVtb3J5KXtcbiAgICAgICAgLy9UT0RPOiB0eXBlIGNoZWNraW5nIFxuICAgICAgICB0aGlzLm1lbW9yeSA9IG1lbW9yeTtcbiAgICB9XG4gICAgZ2V0IE1lbW9yeSgpe1xuICAgICAgICBpZighdGhpcy5tZW1vcnkpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYG1lbW9yeSBpcyBub3Qgc2V0YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWVtb3J5O1xuICAgIH1cbiAgICBnZXQgTWVtb3J5U2l6ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5tZW1vcnlTaXplO1xuICAgIH1cbiAgICBzZXQgTWVtb3J5U2l6ZShzaXplKXtcbiAgICAgICAgdGhpcy5tZW1vcnlTaXplID0gc2l6ZTtcbiAgICB9XG4gICAgZ2V0IE51bVNsb3RzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbW9yeVNpemVbMF07XG4gICAgfVxuICAgIGdldCBTbG90U2l6ZSgpe1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMubWVtb3J5U2l6ZVsxXTtcbiAgICB9XG4gICAgYXN5bmMgaW5pdE1lbW9yeShzaXplLCBpbml0VGVuc29yPW51bGwpe1xuICAgICAgICB0aGlzLk1lbW9yeVNpemUgPSBzaXplO1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICBpZighaW5pdFRlbnNvcil7XG4gICAgICAgICAgICBpbml0VGVuc29yID0gYXdhaXQgdGhpcy5ULnJhbmRvbU5vcm1hbChzaXplKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIGxldCBzbG90SWR4cyA9IFIucmFuZ2UoMCwgdGhpcy5OdW1TbG90cyk7XG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlU2xvdHMoc2xvdElkeHMsIGluaXRUZW5zb3IpO1xuICAgIH1cblxuICAgIGFzeW5jIG5vcm1hbGl6ZSgpe1xuICAgICAgICBjb25zdCBNZW1vcnkgPSB0aGlzLk1lbW9yeSwgTnVtU2xvdHMgPSB0aGlzLk51bVNsb3RzLCBSID0gdGhpcy5SO1xuICAgICAgICBsZXQgbWVtVmFsdWVzID0gYXdhaXQgTWVtb3J5LnJlY2FsbChSLnJhbmdlKDAsIE51bVNsb3RzKSk7XG4gICAgICAgIGxldCBhbGxUcyA9IHRoaXMuVC50ZW5zb3IobWVtVmFsdWVzKTtcbiAgICAgICAgbGV0IG1lYW5UcyA9IGFsbFRzLm1lYW4oMSwgdHJ1ZSk7XG4gICAgICAgIGxldCBzdGRUcyA9IGFsbFRzLnN1YihtZWFuVHMpLnBvdygyKS5tZWFuKDEsIHRydWUpLnBvdygwLjUpO1xuICAgICAgICByZXR1cm4gYWxsVHMuc3ViKG1lYW5UcykuZGl2KHN0ZFRzKTsgICAgXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0TWF0Y2hTY29yZShzbG90SWR4cyl7XG4gICAgICAgIGxldCBub3JtVHMgPSBhd2FpdCB0aGlzLm5vcm1hbGl6ZSgpO1xuICAgICAgICBsZXQgY1RzID0gbm9ybVRzLmdhdGhlcihzbG90SWR4cyk7XG4gICAgICAgIGxldCBzaW1pbGFyaXR5U2NvcmUgPSBub3JtVHMuZG90KGNUcy50cmFuc3Bvc2UoKSk7XG4gICAgICAgIHJldHVybiBzaW1pbGFyaXR5U2NvcmU7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VG9wS1NpbWlsYXIoc2xvdElkeHMsIGspe1xuICAgICAgICBsZXQgbWF0Y2hTY29yZVRlbnNvciA9IGF3YWl0IHRoaXMuZ2V0TWF0Y2hTY29yZShzbG90SWR4cyk7XG4gICAgICAgIGNvbnN0IHt2YWx1ZXMsIGluZGljZXN9ID0gbWF0Y2hTY29yZVRlbnNvci50cmFuc3Bvc2UoKS50b3BrKGspO1xuICAgICAgICByZXR1cm4gaW5kaWNlcztcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgd3JpdGVTbG90cyhzbG90SWR4cywgbWVtb3J5VGVuc29yKXsgICBcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUiwgU2xvdFNpemUgPSB0aGlzLlNsb3RTaXplLCBNZW1vcnkgPSB0aGlzLk1lbW9yeTtcbiAgICAgICAgbGV0IHRlbnNvckRhdGEgPSBhd2FpdCBtZW1vcnlUZW5zb3IuZGF0YSgpOyBcbiAgICAgICAgbGV0IHZhbHVlcyA9IFIuc3BsaXRFdmVyeShTbG90U2l6ZSwgdGVuc29yRGF0YSk7XG4gICAgICAgIGZvcihsZXQgaWR4IG9mIFIucmFuZ2UoMCwgc2xvdElkeHMubGVuZ3RoKSl7XG4gICAgICAgICAgICBhd2FpdCBNZW1vcnkud3JpdGUoc2xvdElkeHNbaWR4XSwgdmFsdWVzW2lkeF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vcnlUZW5zb3I7XG4gICAgfVxuICAgIGFzeW5jIHJlYWRTbG90cyhzbG90SW5kZXhzKXtcbiAgICAgICAgY29uc3QgTWVtb3J5ID0gdGhpcy5NZW1vcnksIFQgPSB0aGlzLlQ7XG4gICAgICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBzbG90SWR4IG9mIHNsb3RJbmRleHMpe1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYXdhaXQgTWVtb3J5LnJlYWQoc2xvdElkeCk7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFQudmFyaWFibGUoVC50ZW5zb3IodmFsdWVzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2F1c2FsTmV0TWVtb3J5KCk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXVzYWxOZXRNZW1vcnkgfSBmcm9tICcuL2NhdXNhbE5ldE1lbW9yeSc7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3V0aWxzX187Il0sInNvdXJjZVJvb3QiOiIifQ==