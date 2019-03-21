(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("causal-net.core"), require("causal-net.memcache"), require("causal-net.preprocessing"), require("causal-net.storage"), require("causal-net.utils"));
	else if(typeof define === 'function' && define.amd)
		define(["causal-net.core", "causal-net.memcache", "causal-net.preprocessing", "causal-net.storage", "causal-net.utils"], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/datasets"] = factory(require("causal-net.core"), require("causal-net.memcache"), require("causal-net.preprocessing"), require("causal-net.storage"), require("causal-net.utils"));
	else
		root["@causalNet/datasets"] = factory(root["causal-net.core"], root["causal-net.memcache"], root["causal-net.preprocessing"], root["causal-net.storage"], root["causal-net.utils"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_core__, __WEBPACK_EXTERNAL_MODULE_causal_net_memcache__, __WEBPACK_EXTERNAL_MODULE_causal_net_preprocessing__, __WEBPACK_EXTERNAL_MODULE_causal_net_storage__, __WEBPACK_EXTERNAL_MODULE_causal_net_utils__) {
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

/***/ "../../node_modules/cli-progress/cli-progress.js":
/*!************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/cli-progress/cli-progress.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const _Bar = __webpack_require__(/*! ./lib/Bar */ "../../node_modules/cli-progress/lib/Bar.js");
const _Presets = __webpack_require__(/*! ./presets/index */ "../../node_modules/cli-progress/presets/index.js");

// sub-module access
module.exports = {
    Bar: _Bar,
    Presets: _Presets
};

/***/ }),

/***/ "../../node_modules/cli-progress/lib/Bar.js":
/*!*******************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/cli-progress/lib/Bar.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const _Terminal = __webpack_require__(/*! ./Terminal */ "../../node_modules/cli-progress/lib/Terminal.js");
const _ETA = __webpack_require__(/*! ./ETA */ "../../node_modules/cli-progress/lib/ETA.js");
const _stringWidth = __webpack_require__(/*! string-width */ "../../node_modules/string-width/index.js");

// Progress-Bar constructor
module.exports = class Bar{

    constructor(opt, preset){

       // merge options - take precedence over preset
       const options = Object.assign({}, preset, opt);

        // utility to merge defaults
        function getOption(v, defaultValue){
            if (typeof v === 'undefined' || v === null){
                return defaultValue;
            }else{
                return v;
            }
        }

        // the update timer
        this.timer = null;

        // the current bar value
        this.value = 0;

        // the end value of the bar
        this.total = 100;

        // the max update rate in fps (redraw will only triggered on value change)
        this.throttleTime = 1000 / (options.fps || 10);

        // the output stream to write on
        this.stream = getOption(options.stream, process.stderr);

        // new terminal instance
        this.terminal = new _Terminal(this.stream);

        // clear on finish ?
        this.clearOnComplete = getOption(options.clearOnComplete, false);

        // stop on finish ?
        this.stopOnComplete = getOption(options.stopOnComplete, false);

        // last drawn string - only render on change!
        this.lastDrawnString = null;

        // size of the progressbar in chars
        this.barsize = options.barsize || 40;

        // position of the progress bar - 'left' (default), 'right' or 'center'
        this.align = getOption(options.align, 'left');

        // hide the cursor ?
        this.hideCursor = getOption(options.hideCursor, false);

        // disable linewrapping ?
        this.linewrap = getOption(options.linewrap, false);

        // pre-render bar strings (performance)
        this.barCompleteString = (new Array(this.barsize + 1 ).join(options.barCompleteChar || '='));
        this.barIncompleteString = (new Array(this.barsize + 1 ).join(options.barIncompleteChar || '-'));

        // the bar format
        this.format = options.format || 'progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}';

        // start time (used for eta calculation)
        this.startTime = null;

        // last update time
        this.lastRedraw = Date.now();

        // the number of results to average ETA over
        this.etaBufferLength = getOption(options.etaBuffer, 10);

        // default eta calulator (will be re-create on start)
        this.eta = new _ETA(this.etaBufferLength, 0, 0);

        // payload data
        this.payload = {};
    }

    // internal render function
    render(){
        this.stopTimer();

        // copy format string
        let s = this.format;

        // calculate the normalized current progress
        let progress = (this.value/this.total);

        // handle NaN Errors caused by total=0. Set to complete in this case 
        if (isNaN(progress)){
            progress = 1.0;
        }

        // limiter
        progress = Math.min(Math.max(progress, 0.0), 1.0);

        // generate bar string by stripping the pre-rendered strings
        let b = this.barCompleteString.substr(0, Math.round(progress*this.barsize)) +
                this.barIncompleteString.substr(0, Math.round((1.0-progress)*this.barsize));

        // limit the bar-size (can cause n+1 chars in some numerical situation)
        b = b.substr(0, this.barsize);

        // calculate progress in percent
        const percentage =  Math.round(progress*100) + '';

        // calculate elapsed time
        const elapsedTime = Math.round((Date.now() - this.startTime)/1000);
        const elapsedTimef = Bar.formatTime(elapsedTime, 1);

        // calculate eta
        const eta = this.eta.getTime();
        const etaf = Bar.formatTime(eta, 5);

        // assign placeholder tokens
        s = s.replace(/\{bar}/gi, b)
            .replace(/\{percentage}/gi, percentage)
            .replace(/\{total}/gi, this.total + '')
            .replace(/\{value}/gi, this.value + '')
            .replace(/\{eta}/gi, eta + '')
            .replace(/\{eta_formatted}/gi, etaf + '')
            .replace(/\{duration}/gi, elapsedTime + '')
            .replace(/\{duration_formatted}/gi, elapsedTimef + '');

        // assign payload placeholder tokens
        for (const key in this.payload) {
            const pattern = RegExp('{'+key+'}', 'gi');
            s = s.replace(pattern, this.payload[key]);
        }

        // calculate available whitespace (2 characters margin of error)
        const fullMargin = Math.max(0, this.terminal.getWidth() - _stringWidth(s) -2);
        const halfMargin = Math.floor(fullMargin / 2);

        // distribute available whitespace according to position
        switch (this.align) {

            // fill start-of-line with whitespaces
            case 'right':
                s = (fullMargin > 0) ? ' '.repeat(fullMargin) + s : s;
                break;

            // distribute whitespaces to left+right
            case 'center':
                s = (halfMargin > 0) ? ' '.repeat(halfMargin) + s : s;
                break;

            // default: left align, no additional whitespaces
            case 'left':
            default:
                break;
        }

        // string changed ? only trigger redraw on change!
        if (this.lastDrawnString != s){
            // set cursor to start of line
            this.terminal.cursorTo(0, null);

            // write output
            this.terminal.write(s);

            // clear to the right from cursor
            this.terminal.clearRight();
            
            // store string
            this.lastDrawnString = s;

            // set last redraw time
            this.lastRedraw = Date.now();
        }

        // next update
        this.timer = setTimeout(this.render.bind(this), this.throttleTime*2);
    }

    // format a number of seconds into hours and minutes as appropriate
    static formatTime(t, roundToMultipleOf){
        function round(input) {
            if (roundToMultipleOf) {
                return roundToMultipleOf * Math.round(input / roundToMultipleOf);
            } else {
                return input
            }
        }
        if (t > 3600) {
            return Math.floor(t / 3600) + 'h' + round((t % 3600) / 60) + 'm';
        } else if (t > 60) {
            return Math.floor(t / 60) + 'm' + round((t % 60)) + 's';
        } else if (t > 10) {
            return round(t) + 's';
        } else {
            return t + 's';
        }
    }

    // start the progress bar
    start(total, startValue, payload){
        // set initial values
        this.value = startValue || 0;
        this.total = (typeof total !== 'undefined' && total >= 0) ? total : 100;
        this.payload = payload || {};

        this.startTime = Date.now();
        this.lastDrawnString = '';

        // progress is only visible in TTY mode!
        if (!this.terminal.isTTY()){
            return;
        }

        // save current cursor settings
        this.terminal.cursorSave();

        // hide the cursor ?
        if (this.hideCursor === true){
            this.terminal.cursor(false);
        }

        // disable line wrpaping ?
        if (this.linewrap === false){
            this.terminal.lineWrapping(false);
        }

        // timer already active ?
        this.stopTimer();

        // initialize eta buffer
        this.eta = new _ETA(this.etaBufferLength, this.startTime, this.value);

        // redraw on start!
        this.render();
    }

    // stop the bar
    stop(){
        // timer inactive ?
        if (!this.timer) {
            return;
        }

        // trigger final rendering
        this.render();
        this.stopTimer();

        // cursor hidden ?
        if (this.hideCursor === true){
            this.terminal.cursor(true);
        }

        // re-enable line wrpaping ?
        if (this.linewrap === false){
            this.terminal.lineWrapping(true);
        }

        // restore cursor on complete (position + settings)
        this.terminal.cursorRestore();

        // clear line on complete ?
        if (this.clearOnComplete){
            this.terminal.cursorTo(0, null);
            this.terminal.clearLine();
        }else{
            // new line on complete
            this.terminal.write('\n');
        }
    }

    // update the bar value
    update(current, payload){
        // update value
        this.value = current;

        // timer inactive ?
        if (!this.timer) {
            return;
        }
        
        // add new value
        this.eta.push(Date.now(), current);

        // merge payload
        const payloadData = payload || {};
        for (const key in payloadData){
            this.payload[key] = payloadData[key];
        }

        // throttle the update or force update ?
        if (this.lastRedraw + this.throttleTime < Date.now()){
            // number of remaining elements required for calculation
            this.eta.calculate(this.total-this.value);
            this.render();
        }
        if (this.value >= this.getTotal() && this.stopOnComplete) {
            this.stop();
        }
    }

    // update the bar value
    increment(step, payload){
        step = step || 1;
        this.update(this.value + step, payload);
    }

    // get the total (limit) value
    getTotal(){
        return this.total;
    }

    // set the total (limit) value
    setTotal(total){
        if (typeof total !== 'undefined' && total >= 0){
            this.total = total;
        }
    }

    // internal - stop the current timer
    stopTimer(){
        // stop the timer
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = null;
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/cli-progress/lib/ETA.js":
/*!*******************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/cli-progress/lib/ETA.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


// ETA calculation
class ETA{

    constructor(length, initTime, initValue){
        // size of eta buffer
        this.etaBufferLength = length || 10;

        // eta buffer with initial values
        this.valueBuffer = [initValue];
        this.timeBuffer = [initTime];

        // eta time value
        this.eta = '0';
    }

    // add new values to calculation buffer
    push(time, value){
        this.valueBuffer.push(value);
        this.timeBuffer.push(time);
    }

    // fetch estimated time
    getTime(){
        return this.eta;
    }

    // eta calculation - request number of remaining events
    calculate(remaining){
        // get number of samples in eta buffer
        const currentBufferSize = this.valueBuffer.length;
        const buffer = Math.min(this.etaBufferLength, currentBufferSize);

        const v_diff = this.valueBuffer[currentBufferSize - 1] - this.valueBuffer[currentBufferSize - buffer];
        const t_diff = this.timeBuffer[currentBufferSize - 1] - this.timeBuffer[currentBufferSize - buffer];

        // get progress per ms
        const vt_rate = v_diff/t_diff;

        // strip past elements
        this.valueBuffer = this.valueBuffer.slice(-this.etaBufferLength);
        this.timeBuffer  = this.timeBuffer.slice(-this.etaBufferLength);

        // eq: vt_rate *x = total
        const eta = Math.ceil(remaining/vt_rate/1000);

        // check values
        if (isNaN(eta)){
            this.eta = 'NULL';

        // +/- Infinity --- NaN already handled
        }else if (!isFinite(eta)){
            this.eta = 'INF';

        // > 100k s ?
        }else if (eta > 100000){
            this.eta = 'INF';

        }else{
            // assign
            this.eta = eta;
        }
    }
}

module.exports = ETA;

/***/ }),

/***/ "../../node_modules/cli-progress/lib/Terminal.js":
/*!************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/cli-progress/lib/Terminal.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const _readline = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'readline'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

// low-level terminal interactions
class Terminal{

    constructor(outputStream){
        this.stream = outputStream;

        // default: line wrapping enabled
        this.linewrap = true;
    }

    // save cursor position + settings
    cursorSave(){
        this.stream.write('\x1B7');
    }

    // restore last cursor position + settings
    cursorRestore(){
        this.stream.write('\x1B8');
    }

    // show/hide cursor
    cursor(enabled){
        if (enabled){
            this.stream.write('\x1B[?25h');
        }else{
            this.stream.write('\x1B[?25l');
        }
    }

    // change cursor positionn
    cursorTo(x=null, y=null){
        _readline.cursorTo(this.stream, x, y);
    }

    // clear to the right from cursor
    clearRight(){
        _readline.clearLine(this.stream, 1);
    }

    // clear the full line
    clearLine(){
        _readline.clearLine(this.stream, 0);
    }

    // write content to output stream
    // @TODO use string-width to strip length
    write(s){
        // line wrapping enabled ? trim output
        if (this.linewrap === true){
            this.stream.write(s.substr(0, this.getWidth()));
        }else{
            this.stream.write(s);
        }
    }

    // control line wrapping
    lineWrapping(enabled){
        // store state
        this.linewrap = enabled;
        if (enabled){
            this.stream.write('\x1B[?7h');
        }else{
            this.stream.write('\x1B[?7l');
        }
    }

    // tty environment ?
    isTTY(){
        return (this.stream.isTTY === true);
    }

    // get terminal width
    getWidth(){
        return this.stream.columns || 80;
    }
}

module.exports = Terminal;


/***/ }),

/***/ "../../node_modules/cli-progress/presets/index.js":
/*!*************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/cli-progress/presets/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const _legacy = __webpack_require__(/*! ./legacy */ "../../node_modules/cli-progress/presets/legacy.js");
const _shades_classic = __webpack_require__(/*! ./shades-classic */ "../../node_modules/cli-progress/presets/shades-classic.js");
const _shades_grey = __webpack_require__(/*! ./shades-grey */ "../../node_modules/cli-progress/presets/shades-grey.js");
const _rect = __webpack_require__(/*! ./rect */ "../../node_modules/cli-progress/presets/rect.js");

module.exports = {
    legacy: _legacy,
    shades_classic: _shades_classic,
    shades_grey: _shades_grey,
    rect: _rect
};

/***/ }),

/***/ "../../node_modules/cli-progress/presets/legacy.js":
/*!**************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/cli-progress/presets/legacy.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// cli-progress legacy style as of 1.x
module.exports = {
    format: 'progress [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}',
    barCompleteChar: '=',
    barIncompleteChar: '-'
};

/***/ }),

/***/ "../../node_modules/cli-progress/presets/rect.js":
/*!************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/cli-progress/presets/rect.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    format: ' {bar}\u25A0 {percentage}% | ETA: {eta}s | {value}/{total}',
    barCompleteChar: '\u25A0',
    barIncompleteChar: ' '
};

/***/ }),

/***/ "../../node_modules/cli-progress/presets/shades-classic.js":
/*!**********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/cli-progress/presets/shades-classic.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// cli-progress legacy style as of 1.x
module.exports = {
    format: ' {bar} {percentage}% | ETA: {eta}s | {value}/{total}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591'
};

/***/ }),

/***/ "../../node_modules/cli-progress/presets/shades-grey.js":
/*!*******************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/cli-progress/presets/shades-grey.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const _colors = __webpack_require__(/*! colors */ "../../node_modules/colors/lib/index.js");

// cli-progress legacy style as of 1.x
module.exports = {
    format: _colors.grey(' {bar}') + ' {percentage}% | ETA: {eta}s | {value}/{total}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591'
};

/***/ }),

/***/ "../../node_modules/colors/lib/colors.js":
/*!****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/colors.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*

The MIT License (MIT)

Original Library
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var util = __webpack_require__(/*! util */ "../../node_modules/util/util.js");
var ansiStyles = colors.styles = __webpack_require__(/*! ./styles */ "../../node_modules/colors/lib/styles.js");
var defineProps = Object.defineProperties;
var newLineRegex = new RegExp(/[\r\n]+/g);

colors.supportsColor = __webpack_require__(/*! ./system/supports-colors */ "../../node_modules/colors/lib/system/supports-colors.js").supportsColor;

if (typeof colors.enabled === 'undefined') {
  colors.enabled = colors.supportsColor() !== false;
}

colors.enable = function() {
  colors.enabled = true;
};

colors.disable = function() {
  colors.enabled = false;
};

colors.stripColors = colors.strip = function(str) {
  return ('' + str).replace(/\x1B\[\d+m/g, '');
};

// eslint-disable-next-line no-unused-vars
var stylize = colors.stylize = function stylize(str, style) {
  if (!colors.enabled) {
    return str+'';
  }

  return ansiStyles[style].open + str + ansiStyles[style].close;
};

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe, '\\$&');
};

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = (function() {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function(key) {
    ansiStyles[key].closeRe =
      new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function() {
        return build(this._styles.concat(key));
      },
    };
  });
  return ret;
})();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = Array.prototype.slice.call(arguments);

  var str = args.map(function(arg) {
    if (arg !== undefined && arg.constructor === String) {
      return arg;
    } else {
      return util.inspect(arg);
    }
  }).join(' ');

  if (!colors.enabled || !str) {
    return str;
  }

  var newLinesPresent = str.indexOf('\n') != -1;

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
    if (newLinesPresent) {
      str = str.replace(newLineRegex, function(match) {
        return code.close + match + code.open;
      });
    }
  }

  return str;
}

colors.setTheme = function(theme) {
  if (typeof theme === 'string') {
    console.log('colors.setTheme now only accepts an object, not a string.  ' +
      'If you are trying to set a theme from a file, it is now your (the ' +
      'caller\'s) responsibility to require the file.  The old syntax ' +
      'looked like colors.setTheme(__dirname + ' +
      '\'/../themes/generic-logging.js\'); The new syntax looks like '+
      'colors.setTheme(require(__dirname + ' +
      '\'/../themes/generic-logging.js\'));');
    return;
  }
  for (var style in theme) {
    (function(style) {
      colors[style] = function(str) {
        if (typeof theme[style] === 'object') {
          var out = str;
          for (var i in theme[style]) {
            out = colors[theme[style][i]](out);
          }
          return out;
        }
        return colors[theme[style]](str);
      };
    })(style);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function(name) {
    ret[name] = {
      get: function() {
        return build([name]);
      },
    };
  });
  return ret;
}

var sequencer = function sequencer(map, str) {
  var exploded = str.split('');
  exploded = exploded.map(map);
  return exploded.join('');
};

// custom formatter methods
colors.trap = __webpack_require__(/*! ./custom/trap */ "../../node_modules/colors/lib/custom/trap.js");
colors.zalgo = __webpack_require__(/*! ./custom/zalgo */ "../../node_modules/colors/lib/custom/zalgo.js");

// maps
colors.maps = {};
colors.maps.america = __webpack_require__(/*! ./maps/america */ "../../node_modules/colors/lib/maps/america.js")(colors);
colors.maps.zebra = __webpack_require__(/*! ./maps/zebra */ "../../node_modules/colors/lib/maps/zebra.js")(colors);
colors.maps.rainbow = __webpack_require__(/*! ./maps/rainbow */ "../../node_modules/colors/lib/maps/rainbow.js")(colors);
colors.maps.random = __webpack_require__(/*! ./maps/random */ "../../node_modules/colors/lib/maps/random.js")(colors);

for (var map in colors.maps) {
  (function(map) {
    colors[map] = function(str) {
      return sequencer(colors.maps[map], str);
    };
  })(map);
}

defineProps(colors, init());


/***/ }),

/***/ "../../node_modules/colors/lib/custom/trap.js":
/*!*********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/custom/trap.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module['exports'] = function runTheTrap(text, options) {
  var result = '';
  text = text || 'Run the trap, drop the bass';
  text = text.split('');
  var trap = {
    a: ['\u0040', '\u0104', '\u023a', '\u0245', '\u0394', '\u039b', '\u0414'],
    b: ['\u00df', '\u0181', '\u0243', '\u026e', '\u03b2', '\u0e3f'],
    c: ['\u00a9', '\u023b', '\u03fe'],
    d: ['\u00d0', '\u018a', '\u0500', '\u0501', '\u0502', '\u0503'],
    e: ['\u00cb', '\u0115', '\u018e', '\u0258', '\u03a3', '\u03be', '\u04bc',
      '\u0a6c'],
    f: ['\u04fa'],
    g: ['\u0262'],
    h: ['\u0126', '\u0195', '\u04a2', '\u04ba', '\u04c7', '\u050a'],
    i: ['\u0f0f'],
    j: ['\u0134'],
    k: ['\u0138', '\u04a0', '\u04c3', '\u051e'],
    l: ['\u0139'],
    m: ['\u028d', '\u04cd', '\u04ce', '\u0520', '\u0521', '\u0d69'],
    n: ['\u00d1', '\u014b', '\u019d', '\u0376', '\u03a0', '\u048a'],
    o: ['\u00d8', '\u00f5', '\u00f8', '\u01fe', '\u0298', '\u047a', '\u05dd',
      '\u06dd', '\u0e4f'],
    p: ['\u01f7', '\u048e'],
    q: ['\u09cd'],
    r: ['\u00ae', '\u01a6', '\u0210', '\u024c', '\u0280', '\u042f'],
    s: ['\u00a7', '\u03de', '\u03df', '\u03e8'],
    t: ['\u0141', '\u0166', '\u0373'],
    u: ['\u01b1', '\u054d'],
    v: ['\u05d8'],
    w: ['\u0428', '\u0460', '\u047c', '\u0d70'],
    x: ['\u04b2', '\u04fe', '\u04fc', '\u04fd'],
    y: ['\u00a5', '\u04b0', '\u04cb'],
    z: ['\u01b5', '\u0240'],
  };
  text.forEach(function(c) {
    c = c.toLowerCase();
    var chars = trap[c] || [' '];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== 'undefined') {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;
};


/***/ }),

/***/ "../../node_modules/colors/lib/custom/zalgo.js":
/*!**********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/custom/zalgo.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// please no
module['exports'] = function zalgo(text, options) {
  text = text || '   he is here   ';
  var soul = {
    'up': [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚',
    ],
    'down': [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣',
    ],
    'mid': [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉',
    ],
  };
  var all = [].concat(soul.up, soul.down, soul.mid);

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function isChar(character) {
    var bool = false;
    all.filter(function(i) {
      bool = (i === character);
    });
    return bool;
  }


  function heComes(text, options) {
    var result = '';
    var counts;
    var l;
    options = options || {};
    options['up'] =
      typeof options['up'] !== 'undefined' ? options['up'] : true;
    options['mid'] =
      typeof options['mid'] !== 'undefined' ? options['mid'] : true;
    options['down'] =
      typeof options['down'] !== 'undefined' ? options['down'] : true;
    options['size'] =
      typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';
    text = text.split('');
    for (l in text) {
      if (isChar(l)) {
        continue;
      }
      result = result + text[l];
      counts = {'up': 0, 'down': 0, 'mid': 0};
      switch (options.size) {
        case 'mini':
          counts.up = randomNumber(8);
          counts.mid = randomNumber(2);
          counts.down = randomNumber(8);
          break;
        case 'maxi':
          counts.up = randomNumber(16) + 3;
          counts.mid = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
          break;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down = randomNumber(8) + 1;
          break;
      }

      var arr = ['up', 'mid', 'down'];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
};



/***/ }),

/***/ "../../node_modules/colors/lib/extendStringPrototype.js":
/*!*******************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/extendStringPrototype.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var colors = __webpack_require__(/*! ./colors */ "../../node_modules/colors/lib/colors.js");

module['exports'] = function() {
  //
  // Extends prototype of native string object to allow for "foo".red syntax
  //
  var addProperty = function(color, func) {
    String.prototype.__defineGetter__(color, func);
  };

  addProperty('strip', function() {
    return colors.strip(this);
  });

  addProperty('stripColors', function() {
    return colors.strip(this);
  });

  addProperty('trap', function() {
    return colors.trap(this);
  });

  addProperty('zalgo', function() {
    return colors.zalgo(this);
  });

  addProperty('zebra', function() {
    return colors.zebra(this);
  });

  addProperty('rainbow', function() {
    return colors.rainbow(this);
  });

  addProperty('random', function() {
    return colors.random(this);
  });

  addProperty('america', function() {
    return colors.america(this);
  });

  //
  // Iterate through all default styles and colors
  //
  var x = Object.keys(colors.styles);
  x.forEach(function(style) {
    addProperty(style, function() {
      return colors.stylize(this, style);
    });
  });

  function applyTheme(theme) {
    //
    // Remark: This is a list of methods that exist
    // on String that you should not overwrite.
    //
    var stringPrototypeBlacklist = [
      '__defineGetter__', '__defineSetter__', '__lookupGetter__',
      '__lookupSetter__', 'charAt', 'constructor', 'hasOwnProperty',
      'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString',
      'valueOf', 'charCodeAt', 'indexOf', 'lastIndexOf', 'length',
      'localeCompare', 'match', 'repeat', 'replace', 'search', 'slice',
      'split', 'substring', 'toLocaleLowerCase', 'toLocaleUpperCase',
      'toLowerCase', 'toUpperCase', 'trim', 'trimLeft', 'trimRight',
    ];

    Object.keys(theme).forEach(function(prop) {
      if (stringPrototypeBlacklist.indexOf(prop) !== -1) {
        console.log('warn: '.red + ('String.prototype' + prop).magenta +
          ' is probably something you don\'t want to override.  ' +
          'Ignoring style name');
      } else {
        if (typeof(theme[prop]) === 'string') {
          colors[prop] = colors[theme[prop]];
          addProperty(prop, function() {
            return colors[prop](this);
          });
        } else {
          var themePropApplicator = function(str) {
            var ret = str || this;
            for (var t = 0; t < theme[prop].length; t++) {
              ret = colors[theme[prop][t]](ret);
            }
            return ret;
          };
          addProperty(prop, themePropApplicator);
          colors[prop] = function(str) {
            return themePropApplicator(str);
          };
        }
      }
    });
  }

  colors.setTheme = function(theme) {
    if (typeof theme === 'string') {
      console.log('colors.setTheme now only accepts an object, not a string. ' +
        'If you are trying to set a theme from a file, it is now your (the ' +
        'caller\'s) responsibility to require the file.  The old syntax ' +
        'looked like colors.setTheme(__dirname + ' +
        '\'/../themes/generic-logging.js\'); The new syntax looks like '+
        'colors.setTheme(require(__dirname + ' +
        '\'/../themes/generic-logging.js\'));');
      return;
    } else {
      applyTheme(theme);
    }
  };
};


/***/ }),

/***/ "../../node_modules/colors/lib/index.js":
/*!***************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var colors = __webpack_require__(/*! ./colors */ "../../node_modules/colors/lib/colors.js");
module['exports'] = colors;

// Remark: By default, colors will add style properties to String.prototype.
//
// If you don't wish to extend String.prototype, you can do this instead and
// native String will not be touched:
//
//   var colors = require('colors/safe);
//   colors.red("foo")
//
//
__webpack_require__(/*! ./extendStringPrototype */ "../../node_modules/colors/lib/extendStringPrototype.js")();


/***/ }),

/***/ "../../node_modules/colors/lib/maps/america.js":
/*!**********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/maps/america.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    if (letter === ' ') return letter;
    switch (i%3) {
      case 0: return colors.red(letter);
      case 1: return colors.white(letter);
      case 2: return colors.blue(letter);
    }
  };
};


/***/ }),

/***/ "../../node_modules/colors/lib/maps/rainbow.js":
/*!**********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/maps/rainbow.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module['exports'] = function(colors) {
  // RoY G BiV
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];
  return function(letter, i, exploded) {
    if (letter === ' ') {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
};



/***/ }),

/***/ "../../node_modules/colors/lib/maps/random.js":
/*!*********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/maps/random.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module['exports'] = function(colors) {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',
    'blue', 'white', 'cyan', 'magenta'];
  return function(letter, i, exploded) {
    return letter === ' ' ? letter :
      colors[
          available[Math.round(Math.random() * (available.length - 2))]
      ](letter);
  };
};


/***/ }),

/***/ "../../node_modules/colors/lib/maps/zebra.js":
/*!********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/maps/zebra.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    return i % 2 === 0 ? letter : colors.inverse(letter);
  };
};


/***/ }),

/***/ "../../node_modules/colors/lib/styles.js":
/*!****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/styles.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49],

};

Object.keys(codes).forEach(function(key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\u001b[' + val[0] + 'm';
  style.close = '\u001b[' + val[1] + 'm';
});


/***/ }),

/***/ "../../node_modules/colors/lib/system/has-flag.js":
/*!*************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/system/has-flag.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/



module.exports = function(flag, argv) {
  argv = argv || process.argv;

  var terminatorPos = argv.indexOf('--');
  var prefix = /^-{1,2}/.test(flag) ? '' : '--';
  var pos = argv.indexOf(prefix + flag);

  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/colors/lib/system/supports-colors.js":
/*!********************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/colors/lib/system/supports-colors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/



var os = __webpack_require__(/*! os */ "../../node_modules/os-browserify/browser.js");
var hasFlag = __webpack_require__(/*! ./has-flag.js */ "../../node_modules/colors/lib/system/has-flag.js");

var env = process.env;

var forceColor = void 0;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
  forceColor = false;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true')
           || hasFlag('color=always')) {
  forceColor = true;
}
if ('FORCE_COLOR' in env) {
  forceColor = env.FORCE_COLOR.length === 0
    || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
  if (level === 0) {
    return false;
  }

  return {
    level: level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3,
  };
}

function supportsColor(stream) {
  if (forceColor === false) {
    return 0;
  }

  if (hasFlag('color=16m') || hasFlag('color=full')
      || hasFlag('color=truecolor')) {
    return 3;
  }

  if (hasFlag('color=256')) {
    return 2;
  }

  if (stream && !stream.isTTY && forceColor !== true) {
    return 0;
  }

  var min = forceColor ? 1 : 0;

  if (process.platform === 'win32') {
    // Node.js 7.5.0 is the first version of Node.js to include a patch to
    // libuv that enables 256 color output on Windows. Anything earlier and it
    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
    // release, and Node.js 7 is not. Windows 10 build 10586 is the first
    // Windows release that supports 256 colors. Windows 10 build 14931 is the
    // first release that supports 16m/TrueColor.
    var osRelease = os.release().split('.');
    if (Number(process.versions.node.split('.')[0]) >= 8
        && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }

    return 1;
  }

  if ('CI' in env) {
    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(sign) {
      return sign in env;
    }) || env.CI_NAME === 'codeship') {
      return 1;
    }

    return min;
  }

  if ('TEAMCITY_VERSION' in env) {
    return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
    );
  }

  if ('TERM_PROGRAM' in env) {
    var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    switch (env.TERM_PROGRAM) {
      case 'iTerm.app':
        return version >= 3 ? 3 : 2;
      case 'Hyper':
        return 3;
      case 'Apple_Terminal':
        return 2;
      // No default
    }
  }

  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }

  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }

  if ('COLORTERM' in env) {
    return 1;
  }

  if (env.TERM === 'dumb') {
    return min;
  }

  return min;
}

function getSupportLevel(stream) {
  var level = supportsColor(stream);
  return translateLevel(level);
}

module.exports = {
  supportsColor: getSupportLevel,
  stdout: getSupportLevel(process.stdout),
  stderr: getSupportLevel(process.stderr),
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "../../node_modules/process/browser.js")))

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

/***/ "../../node_modules/is-fullwidth-code-point/index.js":
/*!****************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/is-fullwidth-code-point/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable yoda */
module.exports = x => {
	if (Number.isNaN(x)) {
		return false;
	}

	// code points are derived from:
	// http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
	if (
		x >= 0x1100 && (
			x <= 0x115f ||  // Hangul Jamo
			x === 0x2329 || // LEFT-POINTING ANGLE BRACKET
			x === 0x232a || // RIGHT-POINTING ANGLE BRACKET
			// CJK Radicals Supplement .. Enclosed CJK Letters and Months
			(0x2e80 <= x && x <= 0x3247 && x !== 0x303f) ||
			// Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
			(0x3250 <= x && x <= 0x4dbf) ||
			// CJK Unified Ideographs .. Yi Radicals
			(0x4e00 <= x && x <= 0xa4c6) ||
			// Hangul Jamo Extended-A
			(0xa960 <= x && x <= 0xa97c) ||
			// Hangul Syllables
			(0xac00 <= x && x <= 0xd7a3) ||
			// CJK Compatibility Ideographs
			(0xf900 <= x && x <= 0xfaff) ||
			// Vertical Forms
			(0xfe10 <= x && x <= 0xfe19) ||
			// CJK Compatibility Forms .. Small Form Variants
			(0xfe30 <= x && x <= 0xfe6b) ||
			// Halfwidth and Fullwidth Forms
			(0xff01 <= x && x <= 0xff60) ||
			(0xffe0 <= x && x <= 0xffe6) ||
			// Kana Supplement
			(0x1b000 <= x && x <= 0x1b001) ||
			// Enclosed Ideographic Supplement
			(0x1f200 <= x && x <= 0x1f251) ||
			// CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
			(0x20000 <= x && x <= 0x3fffd)
		)
	) {
		return true;
	}

	return false;
};


/***/ }),

/***/ "../../node_modules/os-browserify/browser.js":
/*!********************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/os-browserify/browser.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


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

/***/ "../../node_modules/string-width/index.js":
/*!*****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/string-width/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const stripAnsi = __webpack_require__(/*! strip-ansi */ "../../node_modules/string-width/node_modules/strip-ansi/index.js");
const isFullwidthCodePoint = __webpack_require__(/*! is-fullwidth-code-point */ "../../node_modules/is-fullwidth-code-point/index.js");

module.exports = str => {
	if (typeof str !== 'string' || str.length === 0) {
		return 0;
	}

	str = stripAnsi(str);

	let width = 0;

	for (let i = 0; i < str.length; i++) {
		const code = str.codePointAt(i);

		// Ignore control characters
		if (code <= 0x1F || (code >= 0x7F && code <= 0x9F)) {
			continue;
		}

		// Ignore combining characters
		if (code >= 0x300 && code <= 0x36F) {
			continue;
		}

		// Surrogates
		if (code > 0xFFFF) {
			i++;
		}

		width += isFullwidthCodePoint(code) ? 2 : 1;
	}

	return width;
};


/***/ }),

/***/ "../../node_modules/string-width/node_modules/ansi-regex/index.js":
/*!*****************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/string-width/node_modules/ansi-regex/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = () => {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, 'g');
};


/***/ }),

/***/ "../../node_modules/string-width/node_modules/strip-ansi/index.js":
/*!*****************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/string-width/node_modules/strip-ansi/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const ansiRegex = __webpack_require__(/*! ansi-regex */ "../../node_modules/string-width/node_modules/ansi-regex/index.js");

module.exports = input => typeof input === 'string' ? input.replace(ansiRegex(), '') : input;


/***/ }),

/***/ "../../node_modules/util/support/isBufferBrowser.js":
/*!***************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/util/support/isBufferBrowser.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../../node_modules/util/util.js":
/*!********************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/util/util.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
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

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "../../node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

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

/***/ "../causality-log/dist/@causalNet/log.web.js":
/*!***************************************************!*\
  !*** ../causality-log/dist/@causalNet/log.web.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! causal-net.utils */ "causal-net.utils"), __webpack_require__(/*! cli-progress */ "../../node_modules/cli-progress/cli-progress.js"));
	else {}
})(this, function(__WEBPACK_EXTERNAL_MODULE_causal_net_utils__, __WEBPACK_EXTERNAL_MODULE_cli_progress__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/baseLogger.js":
/*!***************************!*\
  !*** ./src/baseLogger.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This class provided the 
 * @class BaseLog
 */
class BaseLogger {
  constructor() {
    this.AcceptedLevels = {
      debug: 0,
      log: 1,
      warning: 2,
      error: 3
    };
    this.rAcceptedLevels = {
      0: 'debug',
      1: 'log',
      2: 'warning',
      3: 'error'
    };
    this.level = this.AcceptedLevels['debug'];
  }

  set Level(level) {
    if (this.AcceptedLevels[level] !== undefined) {
      this.level = this.AcceptedLevels[level];
    } else {
      throw Error(`${level} must be one of ${Object.keys(this.AcceptedLevels)}`);
    }
  }

  get Level() {
    return this.rAcceptedLevels[this.level];
  }

  connect() {
    throw Error('implement required');
  }

  log(message) {
    throw Error('implement required');
  }

  error(message) {
    throw Error('implement required');
  }

  debug(message) {
    throw Error('implement required');
  }

  groupBegin(name) {
    throw Error('implement required');
  }

  groupEnd() {
    throw Error('implement required');
  }

  progressBegin(range) {
    throw Error('implement required');
  }

  progressUpdate(message) {
    throw Error('implement required');
  }

  progressEnd(message) {
    throw Error('implement required');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BaseLogger);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: termLogger, LoggerMixins, BaseLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _termLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./termLogger */ "./src/termLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "termLogger", function() { return _termLogger__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _logger_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.mixins */ "./src/logger.mixins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerMixins", function() { return _logger_mixins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _baseLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseLogger */ "./src/baseLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLogger", function() { return _baseLogger__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/logger.mixins.js":
/*!******************************!*\
  !*** ./src/logger.mixins.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLogger */ "./src/baseLogger.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);



const LoggerMixins = BasedClass => class extends BasedClass {
  set Logger(logger) {
    causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["assert"].beInstanceOf(logger, _baseLogger__WEBPACK_IMPORTED_MODULE_0__["default"]);
    this.logger = logger;
  }

  get Logger() {
    if (!this.logger) {
      throw Error('logger is not set');
    }

    return this.logger;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LoggerMixins);

/***/ }),

/***/ "./src/prettyJson.js":
/*!***************************!*\
  !*** ./src/prettyJson.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JsonView; });
// origin code from https://github.com/lucygilbert/json-display/blob/master/json-display.js
// Copyright (c) 2017 Lucy Gilbert
class JsonView {
  constructor() {}

  static JSONDisplay(json, openLevelsArg, styleOptionsArg) {
    var DEFAULT_STYLE_OPTIONS = {
      root: {
        tag: 'pre',
        style: 'padding: 5px; font-size: 1rem;'
      },
      titleContainer: {
        tag: 'div',
        style: 'margin-bottom: 3px;'
      },
      title: {
        tag: 'span',
        style: 'cursor: pointer;'
      },
      titleText: {
        tag: 'span',
        style: ''
      },
      openButton: {
        tag: 'span',
        style: 'display: inline-block; margin: 0px 7px 0px 2px; border-top: 5px solid transparent; ' + 'border-bottom: 5px solid transparent; border-left: 5px solid black;'
      },
      contentsContainer: {
        tag: 'div',
        style: 'padding-left: 18px;'
      },
      keyValuePair: {
        tag: 'span',
        style: 'display: block; margin-bottom: 2px;'
      },
      key: {
        tag: 'span',
        style: 'color: darkblue;'
      },
      symbolValue: {
        tag: 'span',
        style: 'color: darkgreen;'
      },
      stringValue: {
        tag: 'span',
        style: 'color: crimson;'
      },
      numberValue: {
        tag: 'span',
        style: 'color: blue;'
      },
      booleanValue: {
        tag: 'span',
        style: 'color: blue;'
      },
      nullValue: {
        tag: 'span',
        style: 'color: blue;'
      }
    };
    var openLevels = isNaN(parseInt(openLevelsArg)) ? Infinity : parseInt(openLevelsArg);
    var styleOptions = typeof styleOptionsArg === 'object' ? mergeStyleOptions(DEFAULT_STYLE_OPTIONS, styleOptionsArg) : DEFAULT_STYLE_OPTIONS;

    if (typeof Object.assign != 'function') {
      Object.assign = function (target) {
        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }

        return to;
      };
    }

    function render() {
      var element = document.createElement(styleOptions.root.tag);
      element.style.cssText = styleOptions.root.style;

      if (json === null || json === undefined) {
        var voidElement = getValue(null);
        element.appendChild(voidElement);
      } else if (json instanceof Date) {
        var dateElement = getValue(json.toISOString());
        element.appendChild(dateElement);
      } else if (typeof json !== 'object') {
        var nonExpandableElement = getValue(json);
        element.appendChild(nonExpandableElement);
      } else {
        var title = Array.isArray(json) ? 'Array[' + json.length + ']' : 'Object';
        var thisLevelIsClosed = openLevels < 1;
        element.appendChild(getTitle(title, null, thisLevelIsClosed));
        element.appendChild(convertJsonToElements(json, 1));
      }

      return element;
    }

    function convertJsonToElements(json, index) {
      var thisLevelIsClosed = index > openLevels;
      var nextLevelIsClosed = index + 1 > openLevels;
      var container = getContentsContainer(thisLevelIsClosed);

      for (var key in json) {
        if (Array.isArray(json[key])) {
          container.appendChild(getTitle('Array[' + json[key].length + ']', key, nextLevelIsClosed));
          container.appendChild(convertJsonToElements(json[key], index + 1));
        } else if (json[key] === null || json[key] === undefined) {
          container.appendChild(getStandardPair(key, null));
        } else if (json[key] instanceof Date) {
          container.appendChild(getStandardPair(key, json[key].toISOString()));
        } else if (typeof json[key] === 'object') {
          container.appendChild(getTitle('Object', key, nextLevelIsClosed));
          container.appendChild(convertJsonToElements(json[key], index + 1));
        } else {
          container.appendChild(getStandardPair(key, json[key]));
        }
      }

      if (typeof Object.getOwnPropertySymbols === 'function') {
        Object.getOwnPropertySymbols(json).forEach(function (symbol) {
          container.appendChild(getStandardPair(symbol.toString(), json[symbol]));
        });
      }

      return container;
    }

    function getTitle(titleText, optionalKey, levelIsClosed) {
      var currentlyClosed = levelIsClosed;
      var containerElement = document.createElement(styleOptions.titleContainer.tag);
      containerElement.style.cssText = styleOptions.titleContainer.style;
      containerElement.setAttribute('data-test', 'titleContainer');
      var textElement = document.createElement(styleOptions.titleText.tag);
      var titleElement = document.createElement(styleOptions.title.tag);
      titleElement.style.cssText = styleOptions.title.style;
      textElement.style.cssText = styleOptions.titleText.style;
      titleElement.appendChild(getOpenButton(levelIsClosed));

      if (optionalKey) {
        textElement.appendChild(getKey(optionalKey));
      }

      textElement.appendChild(document.createTextNode(titleText));
      titleElement.appendChild(textElement);

      titleElement.onclick = function () {
        var openButton = titleElement.firstChild;
        var objectContents = titleElement.parentNode.nextSibling;
        objectContents.style.display = currentlyClosed ? 'block' : 'none';
        openButton.style.transform = currentlyClosed ? 'rotate(90deg)' : 'rotate(0deg)';
        currentlyClosed = !currentlyClosed;
      };

      containerElement.appendChild(titleElement);
      return containerElement;
    }

    function getOpenButton(levelIsClosed) {
      var buttonElement = document.createElement(styleOptions.openButton.tag);
      buttonElement.style.cssText = styleOptions.openButton.style;
      buttonElement.style.transform = levelIsClosed ? 'rotate(0deg)' : 'rotate(90deg)';
      return buttonElement;
    }

    function getContentsContainer(isClosed) {
      var containerElement = document.createElement(styleOptions.contentsContainer.tag);
      containerElement.setAttribute('data-test', 'contentsContainer');
      containerElement.style.cssText = styleOptions.contentsContainer.style;
      containerElement.style.display = isClosed ? 'none' : 'block';
      return containerElement;
    }

    function getStandardPair(key, value) {
      var pairElement = document.createElement(styleOptions.keyValuePair.tag);
      pairElement.style.cssText = styleOptions.keyValuePair.style;
      pairElement.appendChild(getKey(key));
      pairElement.appendChild(getValue(value));
      return pairElement;
    }

    function getKey(name) {
      var keyElement = document.createElement(styleOptions.key.tag);
      keyElement.style.cssText = styleOptions.key.style;
      keyElement.appendChild(document.createTextNode(name + ': '));
      return keyElement;
    }

    function getValue(value) {
      var valueElement;
      var nullType = 'object';

      switch (typeof value) {
        case 'symbol':
          valueElement = document.createElement(styleOptions.symbolValue.tag);
          valueElement.style.cssText = styleOptions.symbolValue.style;
          valueElement.appendChild(document.createTextNode(value.toString()));
          break;

        case 'string':
          valueElement = document.createElement(styleOptions.stringValue.tag);
          valueElement.style.cssText = styleOptions.stringValue.style;
          valueElement.appendChild(document.createTextNode('"' + value + '"'));
          break;

        case 'number':
          valueElement = document.createElement(styleOptions.numberValue.tag);
          valueElement.style.cssText = styleOptions.numberValue.style;
          valueElement.appendChild(document.createTextNode(value));
          break;

        case 'boolean':
          valueElement = document.createElement(styleOptions.booleanValue.tag);
          valueElement.style.cssText = styleOptions.booleanValue.style;
          valueElement.appendChild(document.createTextNode(value));
          break;

        case nullType:
          valueElement = document.createElement(styleOptions.nullValue.tag);
          valueElement.style.cssText = styleOptions.nullValue.style;
          valueElement.appendChild(document.createTextNode(value));
          break;
      }

      return valueElement;
    }

    function mergeStyleOptions(defaults, overrides) {
      var merged = {};

      for (var key in defaults) {
        merged[key] = Object.assign({}, defaults[key], overrides[key]);
      }

      return merged;
    }

    return render();
  }

}

/***/ }),

/***/ "./src/termLogger.js":
/*!***************************!*\
  !*** ./src/termLogger.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLogger */ "./src/baseLogger.js");
/* harmony import */ var _termLogger_mixins_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./termLogger.mixins.node */ "./src/termLogger.mixins.node.js");
/* harmony import */ var _termLogger_mixins_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./termLogger.mixins.web */ "./src/termLogger.mixins.web.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_3__);




/**
 * This TermLogger provide isomorphic logger
 * { mixWith : { 'node': [LogNodeMixins], 'web': [WebNodeMixins] } }
 * @class TermLogger
 * @extends BaseLogger
 */

class TermLogger extends causal_net_utils__WEBPACK_IMPORTED_MODULE_3__["platform"].mixWith(_baseLogger__WEBPACK_IMPORTED_MODULE_0__["default"], {
  node: [_termLogger_mixins_node__WEBPACK_IMPORTED_MODULE_1__["default"]],
  web: [_termLogger_mixins_web__WEBPACK_IMPORTED_MODULE_2__["default"]]
}) {
  constructor() {
    super();
    this.groupStack = [];
  }

  groupBegin(name) {
    let group = {
      name,
      beginTime: new Date()
    };
    this.groupStack.push(group);
    let indentSpace = '';
    this.log(`${indentSpace}${group.name}: begin at ${group.beginTime}`);
  }

  groupEnd() {
    if (this.groupStack.length > 0) {
      let group = this.groupStack.pop();
      let indentSpace = '';
      this.log(`${indentSpace}${group.name}: end after ${new Date() - group.beginTime} (ms)`);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TermLogger());

/***/ }),

/***/ "./src/termLogger.mixins.node.js":
/*!***************************************!*\
  !*** ./src/termLogger.mixins.node.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cli_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cli-progress */ "cli-progress");
/* harmony import */ var cli_progress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cli_progress__WEBPACK_IMPORTED_MODULE_0__);


const LogNodeMixins = LogClass => class extends LogClass {
  connect(channel) {
    this.currentBar = false;
  }

  log(message) {
    //TODO: make decorator 
    this.currentBar = false;

    if (this.level >= this.AcceptedLevels['log']) {
      return null;
    }

    console.log(message);
  }

  progressBegin(range) {
    this.processCounter += 1;
    this.currentBar = new cli_progress__WEBPACK_IMPORTED_MODULE_0__["Bar"]({}, cli_progress__WEBPACK_IMPORTED_MODULE_0__["Presets"].shades_classic);
    this.currentBar.setTotal(range);
  }

  progressUpdate(progressMessage) {
    if (!this.currentBar) {
      this.progressBegin();
    }

    this.processCounter += 1;
    this.currentBar.update(this.processCounter);
  }

  progressEnd() {
    this.currentBar.stop();
    this.processCounter = 0;
  }

  debug(message) {
    this.currentBar = false;

    if (this.level >= this.AcceptedLevels['debug']) {
      return null;
    }

    console.debug(message);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LogNodeMixins);

/***/ }),

/***/ "./src/termLogger.mixins.web.js":
/*!**************************************!*\
  !*** ./src/termLogger.mixins.web.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prettyJson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prettyJson */ "./src/prettyJson.js");


const LogWebMixins = LogClass => class extends LogClass {
  connect(documentEl = null) {
    documentEl = documentEl || document.body;
    let node = document.createElement("ul");
    node.style.cssText = "list-style-type: none;";
    documentEl.appendChild(node);
    this.frameEl = documentEl;
    this.loggerEl = documentEl.getElementsByTagName("ul")[0];
  }

  scrollBottom(element = null) {
    element = element || this.frameEl;
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }

  progress(processMessage) {
    // let node = this.loggerEl.getElementsByTagName("li:nth-last-of-type(1)");
    let LINodes = this.loggerEl.getElementsByTagName("li");
    let node = LINodes[LINodes.length - 1];

    if (!node || node.classList.contains("logger-progress")) {
      //create new el
      node = document.createElement("li");
      node.classList.add("logger-progress");
      this.loggerEl.appendChild(node);
    }

    let jsonNode = _prettyJson__WEBPACK_IMPORTED_MODULE_0__["default"].JSONDisplay(processMessage);
    var date = new Date();
    node.innerHTML = `<p style="font-size: 12px; text-align:right">${date}</p>`;
    node.appendChild(jsonNode);
    this.scrollBottom();
  }

  log(message) {
    if (this.level >= this.AcceptedLevels['log']) {
      return null;
    }

    if (!this.loggerEl || !this.loggerEl.appendChild) {
      this.connect();
    }

    let node = document.createElement("li");
    node.style.cssText = 'border-bottom: 1px solid #dedede;';
    let jsonNode = _prettyJson__WEBPACK_IMPORTED_MODULE_0__["default"].JSONDisplay(message);
    var date = new Date();
    node.innerHTML = `<p style="font-size: 12px; text-align:right">${date}</p>`;
    node.appendChild(jsonNode);
    this.loggerEl.appendChild(node);
    this.scrollBottom();
    console.log(message);
  }

  debug(message) {
    if (this.level >= this.AcceptedLevels['debug']) {
      return null;
    } //no show on web screen;        


    console.debug(message);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (LogWebMixins);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "causal-net.utils":
/*!***********************************!*\
  !*** external "causal-net.utils" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_utils__;

/***/ }),

/***/ "cli-progress":
/*!*******************************!*\
  !*** external "cli-progress" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cli_progress__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvYmFzZUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy9sb2dnZXIubWl4aW5zLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3ByZXR0eUpzb24uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9sb2cvLi9zcmMvdGVybUxvZ2dlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy8uL3NyYy90ZXJtTG9nZ2VyLm1peGlucy5ub2RlLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvbG9nLy4vc3JjL3Rlcm1Mb2dnZXIubWl4aW5zLndlYi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2xvZy9leHRlcm5hbCBcImNsaS1wcm9ncmVzc1wiIl0sIm5hbWVzIjpbIkJhc2VMb2dnZXIiLCJjb25zdHJ1Y3RvciIsIkFjY2VwdGVkTGV2ZWxzIiwiZGVidWciLCJsb2ciLCJ3YXJuaW5nIiwiZXJyb3IiLCJyQWNjZXB0ZWRMZXZlbHMiLCJsZXZlbCIsIkxldmVsIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiY29ubmVjdCIsIm1lc3NhZ2UiLCJncm91cEJlZ2luIiwibmFtZSIsImdyb3VwRW5kIiwicHJvZ3Jlc3NCZWdpbiIsInJhbmdlIiwicHJvZ3Jlc3NVcGRhdGUiLCJwcm9ncmVzc0VuZCIsIkxvZ2dlck1peGlucyIsIkJhc2VkQ2xhc3MiLCJMb2dnZXIiLCJsb2dnZXIiLCJhc3NlcnQiLCJiZUluc3RhbmNlT2YiLCJKc29uVmlldyIsIkpTT05EaXNwbGF5IiwianNvbiIsIm9wZW5MZXZlbHNBcmciLCJzdHlsZU9wdGlvbnNBcmciLCJERUZBVUxUX1NUWUxFX09QVElPTlMiLCJyb290IiwidGFnIiwic3R5bGUiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlIiwidGl0bGVUZXh0Iiwib3BlbkJ1dHRvbiIsImNvbnRlbnRzQ29udGFpbmVyIiwia2V5VmFsdWVQYWlyIiwia2V5Iiwic3ltYm9sVmFsdWUiLCJzdHJpbmdWYWx1ZSIsIm51bWJlclZhbHVlIiwiYm9vbGVhblZhbHVlIiwibnVsbFZhbHVlIiwib3BlbkxldmVscyIsImlzTmFOIiwicGFyc2VJbnQiLCJJbmZpbml0eSIsInN0eWxlT3B0aW9ucyIsIm1lcmdlU3R5bGVPcHRpb25zIiwiYXNzaWduIiwidGFyZ2V0IiwiVHlwZUVycm9yIiwidG8iLCJpbmRleCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm5leHRTb3VyY2UiLCJuZXh0S2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicmVuZGVyIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNzc1RleHQiLCJ2b2lkRWxlbWVudCIsImdldFZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJEYXRlIiwiZGF0ZUVsZW1lbnQiLCJ0b0lTT1N0cmluZyIsIm5vbkV4cGFuZGFibGVFbGVtZW50IiwiQXJyYXkiLCJpc0FycmF5IiwidGhpc0xldmVsSXNDbG9zZWQiLCJnZXRUaXRsZSIsImNvbnZlcnRKc29uVG9FbGVtZW50cyIsIm5leHRMZXZlbElzQ2xvc2VkIiwiY29udGFpbmVyIiwiZ2V0Q29udGVudHNDb250YWluZXIiLCJnZXRTdGFuZGFyZFBhaXIiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmb3JFYWNoIiwic3ltYm9sIiwidG9TdHJpbmciLCJvcHRpb25hbEtleSIsImxldmVsSXNDbG9zZWQiLCJjdXJyZW50bHlDbG9zZWQiLCJjb250YWluZXJFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGV4dEVsZW1lbnQiLCJ0aXRsZUVsZW1lbnQiLCJnZXRPcGVuQnV0dG9uIiwiZ2V0S2V5IiwiY3JlYXRlVGV4dE5vZGUiLCJvbmNsaWNrIiwiZmlyc3RDaGlsZCIsIm9iamVjdENvbnRlbnRzIiwicGFyZW50Tm9kZSIsIm5leHRTaWJsaW5nIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsImJ1dHRvbkVsZW1lbnQiLCJpc0Nsb3NlZCIsInZhbHVlIiwicGFpckVsZW1lbnQiLCJrZXlFbGVtZW50IiwidmFsdWVFbGVtZW50IiwibnVsbFR5cGUiLCJkZWZhdWx0cyIsIm92ZXJyaWRlcyIsIm1lcmdlZCIsIlRlcm1Mb2dnZXIiLCJwbGF0Zm9ybSIsIm1peFdpdGgiLCJub2RlIiwiTG9nTm9kZU1peGlucyIsIndlYiIsIkxvZ1dlYk1peGlucyIsImdyb3VwU3RhY2siLCJncm91cCIsImJlZ2luVGltZSIsInB1c2giLCJpbmRlbnRTcGFjZSIsInBvcCIsIkxvZ0NsYXNzIiwiY2hhbm5lbCIsImN1cnJlbnRCYXIiLCJjb25zb2xlIiwicHJvY2Vzc0NvdW50ZXIiLCJjbGlQcm9ncmVzcyIsInNoYWRlc19jbGFzc2ljIiwic2V0VG90YWwiLCJwcm9ncmVzc01lc3NhZ2UiLCJ1cGRhdGUiLCJzdG9wIiwiZG9jdW1lbnRFbCIsImJvZHkiLCJmcmFtZUVsIiwibG9nZ2VyRWwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNjcm9sbEJvdHRvbSIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsInByb2dyZXNzIiwicHJvY2Vzc01lc3NhZ2UiLCJMSU5vZGVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJqc29uTm9kZSIsImRhdGUiLCJpbm5lckhUTUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztB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ZStHLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRBLDhEOzs7Ozs7Ozs7OztBQ0FBLDBEIiwiZmlsZSI6IkBjYXVzYWxOZXQvbG9nLndlYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJjbGktcHJvZ3Jlc3NcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiY2F1c2FsLW5ldC51dGlsc1wiLCBcImNsaS1wcm9ncmVzc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAY2F1c2FsTmV0L2xvZ1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQudXRpbHNcIiksIHJlcXVpcmUoXCJjbGktcHJvZ3Jlc3NcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyb290W1wiY2F1c2FsLW5ldC51dGlsc1wiXSwgcm9vdFtcImNsaS1wcm9ncmVzc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jbGlfcHJvZ3Jlc3NfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlZCB0aGUgXG4gKiBAY2xhc3MgQmFzZUxvZ1xuICovXG5jbGFzcyBCYXNlTG9nZ2Vye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuQWNjZXB0ZWRMZXZlbHMgPSB7ZGVidWc6IDAsIGxvZzoxLCB3YXJuaW5nOjIsIGVycm9yOiAzfTtcbiAgICAgICAgdGhpcy5yQWNjZXB0ZWRMZXZlbHMgPSB7MDonZGVidWcnLCAxOiAnbG9nJywgMjogJ3dhcm5pbmcnLCAzOiAnZXJyb3InfTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ107XG4gICAgfVxuICAgIHNldCBMZXZlbChsZXZlbCl7XG4gICAgICAgIGlmKHRoaXMuQWNjZXB0ZWRMZXZlbHNbbGV2ZWxdIT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXTsgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke2xldmVsfSBtdXN0IGJlIG9uZSBvZiAke09iamVjdC5rZXlzKHRoaXMuQWNjZXB0ZWRMZXZlbHMpfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBMZXZlbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5yQWNjZXB0ZWRMZXZlbHNbdGhpcy5sZXZlbF07XG4gICAgfVxuXG4gICAgY29ubmVjdCgpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgbG9nKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIFxuICAgIGVycm9yKG1lc3NhZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgZGVidWcobWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBncm91cEJlZ2luKG5hbWUpe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgZ3JvdXBFbmQoKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cblxuICAgIHByb2dyZXNzQmVnaW4ocmFuZ2Upe1xuICAgICAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gICAgfVxuXG4gICAgcHJvZ3Jlc3NVcGRhdGUobWVzc2FnZSl7XG4gICAgICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBwcm9ncmVzc0VuZChtZXNzYWdlKXtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUxvZ2dlcjsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIHRlcm1Mb2dnZXIgfSBmcm9tICcuL3Rlcm1Mb2dnZXInO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ2dlck1peGlucyB9IGZyb20gJy4vbG9nZ2VyLm1peGlucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhc2VMb2dnZXIgfSBmcm9tICcuL2Jhc2VMb2dnZXInO1xuXG4iLCJpbXBvcnQge2RlZmF1bHQgYXMgQmFzZUxvZ2dlciB9IGZyb20gJy4vYmFzZUxvZ2dlcic7XG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICdjYXVzYWwtbmV0LnV0aWxzJztcbmNvbnN0IExvZ2dlck1peGlucyA9IChCYXNlZENsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZWRDbGFzc3tcbiAgICBcbiAgICBzZXQgTG9nZ2VyKGxvZ2dlcil7XG4gICAgICAgIGFzc2VydC5iZUluc3RhbmNlT2YobG9nZ2VyLCBCYXNlTG9nZ2VyKTtcbiAgICAgICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gICAgfVxuICAgIFxuICAgIGdldCBMb2dnZXIoKXtcbiAgICAgICAgaWYoIXRoaXMubG9nZ2VyKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdsb2dnZXIgaXMgbm90IHNldCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlcjtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dnZXJNaXhpbnM7IiwiLy8gb3JpZ2luIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbHVjeWdpbGJlcnQvanNvbi1kaXNwbGF5L2Jsb2IvbWFzdGVyL2pzb24tZGlzcGxheS5qc1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IEx1Y3kgR2lsYmVydFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblZpZXd7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG4gICAgc3RhdGljIEpTT05EaXNwbGF5KGpzb24sIG9wZW5MZXZlbHNBcmcsIHN0eWxlT3B0aW9uc0FyZykge1xuICAgICAgICB2YXIgREVGQVVMVF9TVFlMRV9PUFRJT05TID0ge1xuICAgICAgICAgIHJvb3Q6IHsgdGFnOiAncHJlJywgc3R5bGU6ICdwYWRkaW5nOiA1cHg7IGZvbnQtc2l6ZTogMXJlbTsnIH0sXG4gICAgICAgICAgdGl0bGVDb250YWluZXI6IHsgdGFnOiAnZGl2Jywgc3R5bGU6ICdtYXJnaW4tYm90dG9tOiAzcHg7JyB9LFxuICAgICAgICAgIHRpdGxlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2N1cnNvcjogcG9pbnRlcjsnIH0sXG4gICAgICAgICAgdGl0bGVUZXh0OiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJycgfSxcbiAgICAgICAgICBvcGVuQnV0dG9uOiB7IFxuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luOiAwcHggN3B4IDBweCAycHg7IGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDsgJ1xuICAgICAgICAgICAgICAgICArICdib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7IGJvcmRlci1sZWZ0OiA1cHggc29saWQgYmxhY2s7JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnRzQ29udGFpbmVyOiB7IHRhZzogJ2RpdicsIHN0eWxlOiAncGFkZGluZy1sZWZ0OiAxOHB4OycgfSxcbiAgICAgICAgICBrZXlWYWx1ZVBhaXI6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnZGlzcGxheTogYmxvY2s7IG1hcmdpbi1ib3R0b206IDJweDsnIH0sXG4gICAgICAgICAga2V5OiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBkYXJrYmx1ZTsnIH0sXG4gICAgICAgICAgc3ltYm9sVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGRhcmtncmVlbjsnIH0sXG4gICAgICAgICAgc3RyaW5nVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGNyaW1zb247JyB9LFxuICAgICAgICAgIG51bWJlclZhbHVlOiB7IHRhZzogJ3NwYW4nLCBzdHlsZTogJ2NvbG9yOiBibHVlOycgfSxcbiAgICAgICAgICBib29sZWFuVmFsdWU6IHsgdGFnOiAnc3BhbicsIHN0eWxlOiAnY29sb3I6IGJsdWU7JyB9LFxuICAgICAgICAgIG51bGxWYWx1ZTogeyB0YWc6ICdzcGFuJywgc3R5bGU6ICdjb2xvcjogYmx1ZTsnIH0sXG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcGVuTGV2ZWxzID0gaXNOYU4ocGFyc2VJbnQob3BlbkxldmVsc0FyZykpID8gSW5maW5pdHkgOiBwYXJzZUludChvcGVuTGV2ZWxzQXJnKTtcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHR5cGVvZiBzdHlsZU9wdGlvbnNBcmcgPT09ICdvYmplY3QnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXJnZVN0eWxlT3B0aW9ucyhERUZBVUxUX1NUWUxFX09QVElPTlMsIHN0eWxlT3B0aW9uc0FyZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDogREVGQVVMVF9TVFlMRV9PUFRJT05TO1xuICAgIFxuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuICAgIFxuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgICAgICBpZiAobmV4dFNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG5leHRTb3VyY2UsIG5leHRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnJvb3QudGFnKTtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMucm9vdC5zdHlsZTtcbiAgICBcbiAgICAgICAgICBpZiAoanNvbiA9PT0gbnVsbCB8fCBqc29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciB2b2lkRWxlbWVudCA9IGdldFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh2b2lkRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgdmFyIGRhdGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbi50b0lTT1N0cmluZygpKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb24gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB2YXIgbm9uRXhwYW5kYWJsZUVsZW1lbnQgPSBnZXRWYWx1ZShqc29uKTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9uRXhwYW5kYWJsZUVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBBcnJheS5pc0FycmF5KGpzb24pID8gJ0FycmF5WycgKyBqc29uLmxlbmd0aCArICddJyA6ICdPYmplY3QnO1xuICAgICAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gb3BlbkxldmVscyA8IDE7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGdldFRpdGxlKHRpdGxlLCBudWxsLCB0aGlzTGV2ZWxJc0Nsb3NlZCkpO1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgMSkpO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbiwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBpbmRleCA+IG9wZW5MZXZlbHM7XG4gICAgICAgICAgdmFyIG5leHRMZXZlbElzQ2xvc2VkID0gaW5kZXggKyAxID4gb3BlbkxldmVscztcbiAgICAgICAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGVudHNDb250YWluZXIodGhpc0xldmVsSXNDbG9zZWQpO1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uW2tleV0pKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnQXJyYXlbJyArIGpzb25ba2V5XS5sZW5ndGggKyAnXScsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnZlcnRKc29uVG9FbGVtZW50cyhqc29uW2tleV0sIGluZGV4ICsgMSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gPT09IG51bGwgfHwganNvbltrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIG51bGwpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoanNvbltrZXldIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0U3RhbmRhcmRQYWlyKGtleSwganNvbltrZXldLnRvSVNPU3RyaW5nKCkpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCdPYmplY3QnLCBrZXksIG5leHRMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0SnNvblRvRWxlbWVudHMoanNvbltrZXldLCBpbmRleCArIDEpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoa2V5LCBqc29uW2tleV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGpzb24pLmZvckVhY2goZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoc3ltYm9sLnRvU3RyaW5nKCksIGpzb25bc3ltYm9sXSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0VGl0bGUodGl0bGVUZXh0LCBvcHRpb25hbEtleSwgbGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBjdXJyZW50bHlDbG9zZWQgPSBsZXZlbElzQ2xvc2VkO1xuICAgICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIudGFnKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIuc3R5bGU7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVzdCcsICd0aXRsZUNvbnRhaW5lcicpO1xuICAgICAgICAgIHZhciB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlVGV4dC50YWcpO1xuICAgICAgICAgIHZhciB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy50aXRsZS50YWcpO1xuICAgICAgICAgIHRpdGxlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnRpdGxlLnN0eWxlO1xuICAgICAgICAgIHRleHRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnN0eWxlO1xuICAgIFxuICAgICAgICAgIHRpdGxlRWxlbWVudC5hcHBlbmRDaGlsZChnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICBpZiAob3B0aW9uYWxLZXkpIHtcbiAgICAgICAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGdldEtleShvcHRpb25hbEtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZVRleHQpKTtcbiAgICAgICAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xuICAgIFxuICAgICAgICAgIHRpdGxlRWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wZW5CdXR0b24gPSB0aXRsZUVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHZhciBvYmplY3RDb250ZW50cyA9IHRpdGxlRWxlbWVudC5wYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgb2JqZWN0Q29udGVudHMuc3R5bGUuZGlzcGxheSA9IGN1cnJlbnRseUNsb3NlZCA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgICBvcGVuQnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRseUNsb3NlZCA/ICdyb3RhdGUoOTBkZWcpJyA6ICdyb3RhdGUoMGRlZyknO1xuICAgICAgICAgICAgY3VycmVudGx5Q2xvc2VkID0gIWN1cnJlbnRseUNsb3NlZDtcbiAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgICAgICByZXR1cm4gY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRPcGVuQnV0dG9uKGxldmVsSXNDbG9zZWQpIHtcbiAgICAgICAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm9wZW5CdXR0b24udGFnKTtcbiAgICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi5zdHlsZTtcbiAgICAgICAgICBidXR0b25FbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGxldmVsSXNDbG9zZWQgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgICByZXR1cm4gYnV0dG9uRWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRDb250ZW50c0NvbnRhaW5lcihpc0Nsb3NlZCkge1xuICAgICAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIudGFnKTtcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZXN0JywgJ2NvbnRlbnRzQ29udGFpbmVyJyk7XG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmNvbnRlbnRzQ29udGFpbmVyLnN0eWxlO1xuICAgICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IChpc0Nsb3NlZCA/ICdub25lJyA6ICdibG9jaycpO1xuICAgICAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YW5kYXJkUGFpcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIHBhaXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnRhZyk7XG4gICAgICAgICAgcGFpckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIuc3R5bGU7XG4gICAgICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KGtleSkpO1xuICAgICAgICAgIHBhaXJFbGVtZW50LmFwcGVuZENoaWxkKGdldFZhbHVlKHZhbHVlKSk7XG4gICAgICAgICAgcmV0dXJuIHBhaXJFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIGdldEtleShuYW1lKSB7XG4gICAgICAgICAgdmFyIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXkudGFnKTtcbiAgICAgICAgICBrZXlFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5LnN0eWxlO1xuICAgICAgICAgIGtleUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmFtZSArICc6ICcpKTtcbiAgICAgICAgICByZXR1cm4ga2V5RWxlbWVudDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgIHZhciB2YWx1ZUVsZW1lbnQ7XG4gICAgICAgICAgdmFyIG51bGxUeXBlID0gJ29iamVjdCc7XG4gICAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1wiJyArIHZhbHVlICsgJ1wiJykpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnN0eWxlO1xuICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLmJvb2xlYW5WYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBudWxsVHlwZTpcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnRhZyk7XG4gICAgICAgICAgICAgIHZhbHVlRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLm51bGxWYWx1ZS5zdHlsZTtcbiAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmFsdWVFbGVtZW50O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGZ1bmN0aW9uIG1lcmdlU3R5bGVPcHRpb25zKGRlZmF1bHRzLCBvdmVycmlkZXMpIHtcbiAgICAgICAgICB2YXIgbWVyZ2VkID0ge307XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgICAgICBtZXJnZWRba2V5XSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzW2tleV0sIG92ZXJyaWRlc1trZXldKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gcmVuZGVyKCk7XG4gICAgfVxufSIsImltcG9ydCB7IGRlZmF1bHQgYXMgQmFzZUxvZ2dlciB9IGZyb20gJy4vYmFzZUxvZ2dlcic7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIExvZ05vZGVNaXhpbnMgfSBmcm9tICcuL3Rlcm1Mb2dnZXIubWl4aW5zLm5vZGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBMb2dXZWJNaXhpbnMgfSBmcm9tICcuL3Rlcm1Mb2dnZXIubWl4aW5zLndlYic7XG5pbXBvcnQgeyBwbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuLyoqXG4gKiBUaGlzIFRlcm1Mb2dnZXIgcHJvdmlkZSBpc29tb3JwaGljIGxvZ2dlclxuICogeyBtaXhXaXRoIDogeyAnbm9kZSc6IFtMb2dOb2RlTWl4aW5zXSwgJ3dlYic6IFtXZWJOb2RlTWl4aW5zXSB9IH1cbiAqIEBjbGFzcyBUZXJtTG9nZ2VyXG4gKiBAZXh0ZW5kcyBCYXNlTG9nZ2VyXG4gKi9cbmNsYXNzIFRlcm1Mb2dnZXIgZXh0ZW5kcyBwbGF0Zm9ybS5taXhXaXRoKEJhc2VMb2dnZXIsIFxuICAgICAgICB7IG5vZGU6W0xvZ05vZGVNaXhpbnNdLCBcbiAgICAgICAgICB3ZWI6W0xvZ1dlYk1peGluc10gfSApe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZ3JvdXBTdGFjayA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBncm91cEJlZ2luKG5hbWUpeyAgIFxuICAgICAgICBsZXQgZ3JvdXAgPSB7bmFtZSwgYmVnaW5UaW1lOiBuZXcgRGF0ZSgpfTtcbiAgICAgICAgdGhpcy5ncm91cFN0YWNrLnB1c2goZ3JvdXApO1xuICAgICAgICBsZXQgaW5kZW50U3BhY2UgPSAnJztcbiAgICAgICAgdGhpcy5sb2coYCR7aW5kZW50U3BhY2V9JHtncm91cC5uYW1lfTogYmVnaW4gYXQgJHtncm91cC5iZWdpblRpbWV9YCk7XG4gICAgfVxuICAgIGdyb3VwRW5kKCl7XG4gICAgICAgIGlmKHRoaXMuZ3JvdXBTdGFjay5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGxldCBncm91cCA9IHRoaXMuZ3JvdXBTdGFjay5wb3AoKTtcbiAgICAgICAgICAgIGxldCBpbmRlbnRTcGFjZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5sb2coYCR7aW5kZW50U3BhY2V9JHtncm91cC5uYW1lfTogZW5kIGFmdGVyICR7KG5ldyBEYXRlKCkgLSBncm91cC5iZWdpblRpbWUpfSAobXMpYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBuZXcgVGVybUxvZ2dlcigpOyIsImltcG9ydCAqIGFzIGNsaVByb2dyZXNzIGZyb20gJ2NsaS1wcm9ncmVzcyc7XG5cbmNvbnN0IExvZ05vZGVNaXhpbnMgPSAoTG9nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzc3tcbiAgICBjb25uZWN0KGNoYW5uZWwpe1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9nKG1lc3NhZ2Upe1xuICAgICAgICAvL1RPRE86IG1ha2UgZGVjb3JhdG9yIFxuICAgICAgICB0aGlzLmN1cnJlbnRCYXIgPSBmYWxzZTtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3NCZWdpbihyYW5nZSl7XG4gICAgICAgIHRoaXMucHJvY2Vzc0NvdW50ZXIgKz0gMTtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFyID0gbmV3IGNsaVByb2dyZXNzLkJhcih7fSwgY2xpUHJvZ3Jlc3MuUHJlc2V0cy5zaGFkZXNfY2xhc3NpYyk7XG4gICAgICAgIHRoaXMuY3VycmVudEJhci5zZXRUb3RhbChyYW5nZSk7XG4gICAgfVxuICAgIHByb2dyZXNzVXBkYXRlKHByb2dyZXNzTWVzc2FnZSl7XG4gICAgICAgIGlmKCF0aGlzLmN1cnJlbnRCYXIpe1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JlZ2luKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9jZXNzQ291bnRlciArPSAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIudXBkYXRlKHRoaXMucHJvY2Vzc0NvdW50ZXIpO1xuICAgIH1cbiAgICBwcm9ncmVzc0VuZCgpe1xuICAgICAgICB0aGlzLmN1cnJlbnRCYXIuc3RvcCgpO1xuICAgICAgICB0aGlzLnByb2Nlc3NDb3VudGVyID0gMDtcbiAgICB9XG4gICAgZGVidWcobWVzc2FnZSl7XG4gICAgICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlOyBcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nTm9kZU1peGluczsiLCJpbXBvcnQge2RlZmF1bHQgYXMgSnNvblZpZXd9IGZyb20gJy4vcHJldHR5SnNvbic7XG5jb25zdCBMb2dXZWJNaXhpbnMgPSAoTG9nQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzc3tcbiAgICBjb25uZWN0KGRvY3VtZW50RWw9bnVsbCl7XG4gICAgICAgIGRvY3VtZW50RWwgPSBkb2N1bWVudEVsfHxkb2N1bWVudC5ib2R5O1xuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gXCJsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XCI7XG4gICAgICAgIGRvY3VtZW50RWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuZnJhbWVFbCA9IGRvY3VtZW50RWw7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwgPSBkb2N1bWVudEVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidWxcIilbMF07XG4gICAgfVxuICAgIHNjcm9sbEJvdHRvbShlbGVtZW50PW51bGwpe1xuICAgICAgICBlbGVtZW50ID0gZWxlbWVudCB8fCB0aGlzLmZyYW1lRWw7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB9XG4gICAgcHJvZ3Jlc3MocHJvY2Vzc01lc3NhZ2Upe1xuICAgICAgICAvLyBsZXQgbm9kZSA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaTpudGgtbGFzdC1vZi10eXBlKDEpXCIpO1xuICAgICAgICBsZXQgTElOb2RlcyA9IHRoaXMubG9nZ2VyRWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKTtcbiAgICAgICAgbGV0IG5vZGUgPSBMSU5vZGVzW0xJTm9kZXMubGVuZ3RoLTFdO1xuICAgICAgICBpZighbm9kZSB8fCBub2RlLmNsYXNzTGlzdC5jb250YWlucyhcImxvZ2dlci1wcm9ncmVzc1wiKSl7XG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgZWxcbiAgICAgICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoXCJsb2dnZXItcHJvZ3Jlc3NcIik7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBqc29uTm9kZSA9IEpzb25WaWV3LkpTT05EaXNwbGF5KHByb2Nlc3NNZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgfVxuICAgIGxvZyhtZXNzYWdlKXtcbiAgICAgICAgaWYodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5sb2dnZXJFbCB8fCAhdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZCl7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gJ2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlOyc7ICAgICAgIFxuICAgICAgICBsZXQganNvbk5vZGUgPSBKc29uVmlldy5KU09ORGlzcGxheShtZXNzYWdlKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRlYnVnKG1lc3NhZ2Upe1xuICAgICAgICBpZih0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pe1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy9ubyBzaG93IG9uIHdlYiBzY3JlZW47ICAgICAgICBcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dXZWJNaXhpbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2xpX3Byb2dyZXNzX187Il0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./src/MNIST.ImgDataset.js":
/*!*********************************!*\
  !*** ./src/MNIST.ImgDataset.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MnistDataset; });
/* harmony import */ var _baseImgDataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseImgDataset */ "./src/baseImgDataset.js");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! causal-net.log */ "../causality-log/dist/@causalNet/log.web.js");
/* harmony import */ var causal_net_log__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(causal_net_log__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! causal-net.storage */ "causal-net.storage");
/* harmony import */ var causal_net_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(causal_net_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! causal-net.memcache */ "causal-net.memcache");
/* harmony import */ var causal_net_memcache__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(causal_net_memcache__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function */ "./src/function.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module './imageDatasetfetch.mixins'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _imageDatasetPreprocessing_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imageDatasetPreprocessing.mixins */ "./src/imageDatasetPreprocessing.mixins.js");
/* harmony import */ var _imageDatasetGenerator_mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imageDatasetGenerator.mixins */ "./src/imageDatasetGenerator.mixins.js");
/* harmony import */ var causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! causal-net.preprocessing */ "causal-net.preprocessing");
/* harmony import */ var causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__);










class MnistDataset extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(_baseImgDataset__WEBPACK_IMPORTED_MODULE_0__["default"], [!(function webpackMissingModule() { var e = new Error("Cannot find module './imageDatasetfetch.mixins'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _imageDatasetPreprocessing_mixins__WEBPACK_IMPORTED_MODULE_7__["default"], causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__["PreprocessingMixins"], _imageDatasetGenerator_mixins__WEBPACK_IMPORTED_MODULE_8__["default"], causal_net_memcache__WEBPACK_IMPORTED_MODULE_4__["MemCacheMixins"], causal_net_storage__WEBPACK_IMPORTED_MODULE_3__["StorageMixins"], causal_net_log__WEBPACK_IMPORTED_MODULE_2__["LoggerMixins"]]) {
  constructor(...args) {
    super(...args);
    this.F = new _function__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.Storage = causal_net_storage__WEBPACK_IMPORTED_MODULE_3__["indexDBStorage"];
    this.MemCache = causal_net_memcache__WEBPACK_IMPORTED_MODULE_4__["memDownCache"];

    const PreprocessingSample = async (masterSampleBuffer, sampleSize) => {
      return await causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__["imagePreprocessing"].imageSplit(masterSampleBuffer, sampleSize);
    };

    const PreprocessingLabel = async (masterLabelBuffer, labelSize) => {
      return await causal_net_preprocessing__WEBPACK_IMPORTED_MODULE_9__["imagePreprocessing"].imageSplit(masterLabelBuffer, labelSize);
    };

    this.setPreprocessingFunctions(PreprocessingSample, PreprocessingLabel);
  }

}
;

/***/ }),

/***/ "./src/baseImgDataset.js":
/*!*******************************!*\
  !*** ./src/baseImgDataset.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseImgDataset; });
class BaseImgDataset {
  constructor(datasetConfigure) {
    this.configuration = datasetConfigure;
    const {
      numSamples,
      sampleSize,
      numClasses
    } = this.configuration;
    this.dataSize = [numSamples, ...sampleSize];
    this.numSamples = numSamples;
    this.sampleSize = sampleSize;
    this.numClass = numClasses;
  }

  summary() {
    return this.configuration;
  }

}

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
/* harmony import */ var _function_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function.mixins */ "./src/function.mixins.js");



class Function extends causal_net_utils__WEBPACK_IMPORTED_MODULE_1__["Platform"].mixWith(causal_net_core__WEBPACK_IMPORTED_MODULE_0__["Function"], [_function_mixins__WEBPACK_IMPORTED_MODULE_2__["default"]]) {
  constructor() {
    super();
  }

}

/***/ }),

/***/ "./src/function.mixins.js":
/*!********************************!*\
  !*** ./src/function.mixins.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const FunctionMixins = BaseFunctionClass => class extends BaseFunctionClass {
  getImgBufferSize(imgSize) {
    const R = this.R;
    return R.reduce((s, d) => s * d, 1, imgSize);
  }

  generatorWithIndex(items) {
    const R = this.R;
    return R.addIndex(R.map)((d, idx) => [idx, d], items);
  }

  splitTrainTestSet(items, splitIndex) {
    const R = this.R;
    return R.splitAt(splitIndex, items);
  }

};

/* harmony default export */ __webpack_exports__["default"] = (FunctionMixins);

/***/ }),

/***/ "./src/imageDatasetGenerator.mixins.js":
/*!*********************************************!*\
  !*** ./src/imageDatasetGenerator.mixins.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const ImageDatasetGeneratorMixins = BaseImageClass => class extends BaseImageClass {
  getTrainTestSet(trainSize = null) {
    trainSize = trainSize || parseInt(this.savedPreprocessing.length * 0.9);
    const [trainSet, testSet] = this.F.splitTrainTestSet(this.savedPreprocessing, trainSize);
    return [trainSet, testSet];
  }

  makeSampleGenerator(sampleIdxSet, batchSize = null, start = 0, end = null) {
    if (!this.savedPreprocessing) {
      throw Error('preprocessing must be performed');
    }

    batchSize = batchSize ? batchSize : sampleIdxSet.length;

    const _batches = this.F.hsplitEvery(sampleIdxSet, batchSize);

    const batches = causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["Sampling"].choice(_batches, _batches.length);

    if (end === null) {
      end = batches.length;
    }

    let nextIndex = start,
        iterationCount = 0,
        step = 1;
    const batchGenerator = {
      next: async () => {
        let batchSamples = [],
            batchLabels = [];

        for (let [samplePath, labelPath] of batches[nextIndex]) {
          let sampleItem = await this.preProcessingStorage.getItem(samplePath, true);
          let labelItem = await this.preProcessingStorage.getItem(labelPath, true);
          batchSamples = [...batchSamples, sampleItem[samplePath]];
          batchLabels = [...batchLabels, labelItem[labelPath]];
        }

        nextIndex += step;
        let idx = iterationCount;
        iterationCount++;
        return {
          idx,
          batchSize,
          data: [batchSamples, batchLabels]
        };
      },

      *[Symbol.iterator]() {
        while (nextIndex < end) {
          yield this.next();
        }
      }

    };
    return batchGenerator;
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ImageDatasetGeneratorMixins);

/***/ }),

/***/ "./src/imageDatasetPreprocessing.mixins.js":
/*!*************************************************!*\
  !*** ./src/imageDatasetPreprocessing.mixins.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! causal-net.utils */ "causal-net.utils");
/* harmony import */ var causal_net_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(causal_net_utils__WEBPACK_IMPORTED_MODULE_0__);


const ImageDatasetPreprocessingMixins = BaseImageClass => class extends BaseImageClass {
  makePreprocessingStream(saveDir) {
    const ImageBufferSize = this.F.getImgBufferSize(this.sampleSize);
    const LabelBufferSize = this.numClass;
    this.logger.debug({
      imageBufferSize: ImageBufferSize,
      labelBufferSize: LabelBufferSize
    });

    const TransformFn = (chunk, chunkEncoding, afterTransformFn) => {
      const TransformAsync = async () => {
        let sampleBuffer = chunk.sample;
        let labelBuffer = chunk.label;
        this.logger.debug({
          sampleBuffer,
          labelBuffer
        });
        let preprocessedImgBuffer = await this.PreprocessingSampleFn(sampleBuffer, ImageBufferSize);
        let preprocessedLabelBuffer = await this.PreprocessingLabelFn(labelBuffer, LabelBufferSize);
        return {
          processedChunk: this.F.zip(preprocessedImgBuffer, preprocessedLabelBuffer),
          chunkIdx: chunk.idx
        };
      };

      TransformAsync(chunk).then(processedChunk => {
        afterTransformFn(null, processedChunk);
      });
    };

    const WriteFn = (processedChunk, chunkEncoding, callback) => {
      const WriteAsync = async processedChunk => {
        let generator = this.F.generatorWithIndex(processedChunk.processedChunk);
        let chunkIdx = processedChunk.chunkIdx;
        let samplePath = [],
            labelPath = [];

        for (let [idx, [sample, label]] of generator) {
          let chunkSamplePath = await this.preProcessingStorage.setItem(saveDir + 'sample/' + chunkIdx + '/' + idx + '/', sample);
          let chunkLabelPath = await this.preProcessingStorage.setItem(saveDir + 'label/' + chunkIdx + '/' + idx + '/', label);
          samplePath = [...samplePath, chunkSamplePath];
          labelPath = [...labelPath, chunkLabelPath];
          this.progress({
            preprocessing: [chunkSamplePath, chunkLabelPath]
          });
        }

        return this.F.zip(samplePath, labelPath);
      };

      WriteAsync(processedChunk).then(result => {
        if (this.savedPreprocessing) {
          this.savedPreprocessing = [...this.savedPreprocessing, ...result];
        } else {
          this.savedPreprocessing = result;
        }

        callback();
      });
    };

    let duplexer = causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["Stream"].makeDuplex(WriteFn);
    let transformer = causal_net_utils__WEBPACK_IMPORTED_MODULE_0__["Stream"].makeTransform(TransformFn);
    let stream = duplexer.pipe(transformer).pipe(duplexer);
    return stream;
  }

  async preprocessingDataset(saveDir = '/preprocessing/mnist/', storeInMemory = false) {
    this.preProcessingStorage = storeInMemory ? this.memCache : this.storage;
    let stream = this.makePreprocessingStream(saveDir);
    let generator = this.F.generatorWithIndex(this.savedChunks);

    for (let [idx, [samplePath, labelPath]] of generator) {
      let sampleItem = await this.storage.getItem(samplePath, true);
      let labelItem = await this.storage.getItem(labelPath, true);
      let sample = sampleItem[samplePath];
      let label = labelItem[labelPath];
      this.logger.debug({
        sample,
        label
      });
      stream.push({
        idx,
        sample,
        label
      });
    }

    stream.push(null);
    return new Promise((resolve, reject) => {
      stream.on('finish', () => {
        resolve(this.savedPreprocessing);
      });
    });
  }

};

/* harmony default export */ __webpack_exports__["default"] = (ImageDatasetPreprocessingMixins);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: MNIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MNIST_ImgDataset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MNIST.ImgDataset */ "./src/MNIST.ImgDataset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MNIST", function() { return _MNIST_ImgDataset__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "causal-net.preprocessing":
/*!*******************************************!*\
  !*** external "causal-net.preprocessing" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_causal_net_preprocessing__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvY2xpLXByb2dyZXNzL2NsaS1wcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2NsaS1wcm9ncmVzcy9saWIvQmFyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvY2xpLXByb2dyZXNzL2xpYi9FVEEuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9jbGktcHJvZ3Jlc3MvbGliL1Rlcm1pbmFsLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvY2xpLXByb2dyZXNzL3ByZXNldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9jbGktcHJvZ3Jlc3MvcHJlc2V0cy9sZWdhY3kuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9jbGktcHJvZ3Jlc3MvcHJlc2V0cy9yZWN0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvY2xpLXByb2dyZXNzL3ByZXNldHMvc2hhZGVzLWNsYXNzaWMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9jbGktcHJvZ3Jlc3MvcHJlc2V0cy9zaGFkZXMtZ3JleS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvY29sb3JzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9jdXN0b20vdHJhcC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvY3VzdG9tL3phbGdvLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9leHRlbmRTdHJpbmdQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9jb2xvcnMvbGliL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL2FtZXJpY2EuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9jb2xvcnMvbGliL21hcHMvcmFpbmJvdy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvbWFwcy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9jb2xvcnMvbGliL21hcHMvemVicmEuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9jb2xvcnMvbGliL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvc3lzdGVtL2hhcy1mbGFnLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zeXN0ZW0vc3VwcG9ydHMtY29sb3JzLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL2lzLWZ1bGx3aWR0aC1jb2RlLXBvaW50L2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvb3MtYnJvd3NlcmlmeS9icm93c2VyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc3RyaW5nLXdpZHRoL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc3RyaW5nLXdpZHRoL25vZGVfbW9kdWxlcy9hbnNpLXJlZ2V4L2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvc3RyaW5nLXdpZHRoL25vZGVfbW9kdWxlcy9zdHJpcC1hbnNpL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4uL2NhdXNhbGl0eS1sb2cvZGlzdC9AY2F1c2FsTmV0L2xvZy53ZWIuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9NTklTVC5JbWdEYXRhc2V0LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvLi9zcmMvYmFzZUltZ0RhdGFzZXQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2Z1bmN0aW9uLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2ltYWdlRGF0YXNldEdlbmVyYXRvci5taXhpbnMuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy8uL3NyYy9pbWFnZURhdGFzZXRQcmVwcm9jZXNzaW5nLm1peGlucy5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LmNvcmVcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5tZW1jYWNoZVwiIiwid2VicGFjazovL0BjYXVzYWxOZXQvZGF0YXNldHMvZXh0ZXJuYWwgXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L2RhdGFzZXRzL2V4dGVybmFsIFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC9kYXRhc2V0cy9leHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiJdLCJuYW1lcyI6WyJNbmlzdERhdGFzZXQiLCJQbGF0Zm9ybSIsIm1peFdpdGgiLCJCYXNlSW1nRGF0YXNldCIsIkltYWdlRGF0YXNldGZldGNoTWl4aW5zIiwiSW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGlucyIsIlByZXByb2Nlc3NpbmdNaXhpbnMiLCJJbWFnZURhdGFzZXRHZW5lcmF0b3JNaXhpbnMiLCJNZW1DYWNoZU1peGlucyIsIlN0b3JhZ2VNaXhpbnMiLCJMb2dnZXJNaXhpbnMiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJGIiwiRnVuY3Rpb24iLCJTdG9yYWdlIiwiaW5kZXhEQlN0b3JhZ2UiLCJNZW1DYWNoZSIsIm1lbURvd25DYWNoZSIsIlByZXByb2Nlc3NpbmdTYW1wbGUiLCJtYXN0ZXJTYW1wbGVCdWZmZXIiLCJzYW1wbGVTaXplIiwiaW1hZ2VQcmVwcm9jZXNzaW5nIiwiaW1hZ2VTcGxpdCIsIlByZXByb2Nlc3NpbmdMYWJlbCIsIm1hc3RlckxhYmVsQnVmZmVyIiwibGFiZWxTaXplIiwic2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyIsImRhdGFzZXRDb25maWd1cmUiLCJjb25maWd1cmF0aW9uIiwibnVtU2FtcGxlcyIsIm51bUNsYXNzZXMiLCJkYXRhU2l6ZSIsIm51bUNsYXNzIiwic3VtbWFyeSIsIkJhc2VGdW5jdGlvbiIsIkZ1bmN0aW9uTWl4aW5zIiwiQmFzZUZ1bmN0aW9uQ2xhc3MiLCJnZXRJbWdCdWZmZXJTaXplIiwiaW1nU2l6ZSIsIlIiLCJyZWR1Y2UiLCJzIiwiZCIsImdlbmVyYXRvcldpdGhJbmRleCIsIml0ZW1zIiwiYWRkSW5kZXgiLCJtYXAiLCJpZHgiLCJzcGxpdFRyYWluVGVzdFNldCIsInNwbGl0SW5kZXgiLCJzcGxpdEF0IiwiQmFzZUltYWdlQ2xhc3MiLCJnZXRUcmFpblRlc3RTZXQiLCJ0cmFpblNpemUiLCJwYXJzZUludCIsInNhdmVkUHJlcHJvY2Vzc2luZyIsImxlbmd0aCIsInRyYWluU2V0IiwidGVzdFNldCIsIm1ha2VTYW1wbGVHZW5lcmF0b3IiLCJzYW1wbGVJZHhTZXQiLCJiYXRjaFNpemUiLCJzdGFydCIsImVuZCIsIkVycm9yIiwiX2JhdGNoZXMiLCJoc3BsaXRFdmVyeSIsImJhdGNoZXMiLCJTYW1wbGluZyIsImNob2ljZSIsIm5leHRJbmRleCIsIml0ZXJhdGlvbkNvdW50Iiwic3RlcCIsImJhdGNoR2VuZXJhdG9yIiwibmV4dCIsImJhdGNoU2FtcGxlcyIsImJhdGNoTGFiZWxzIiwic2FtcGxlUGF0aCIsImxhYmVsUGF0aCIsInNhbXBsZUl0ZW0iLCJwcmVQcm9jZXNzaW5nU3RvcmFnZSIsImdldEl0ZW0iLCJsYWJlbEl0ZW0iLCJkYXRhIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJtYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbSIsInNhdmVEaXIiLCJJbWFnZUJ1ZmZlclNpemUiLCJMYWJlbEJ1ZmZlclNpemUiLCJsb2dnZXIiLCJkZWJ1ZyIsImltYWdlQnVmZmVyU2l6ZSIsImxhYmVsQnVmZmVyU2l6ZSIsIlRyYW5zZm9ybUZuIiwiY2h1bmsiLCJjaHVua0VuY29kaW5nIiwiYWZ0ZXJUcmFuc2Zvcm1GbiIsIlRyYW5zZm9ybUFzeW5jIiwic2FtcGxlQnVmZmVyIiwic2FtcGxlIiwibGFiZWxCdWZmZXIiLCJsYWJlbCIsInByZXByb2Nlc3NlZEltZ0J1ZmZlciIsIlByZXByb2Nlc3NpbmdTYW1wbGVGbiIsInByZXByb2Nlc3NlZExhYmVsQnVmZmVyIiwiUHJlcHJvY2Vzc2luZ0xhYmVsRm4iLCJwcm9jZXNzZWRDaHVuayIsInppcCIsImNodW5rSWR4IiwidGhlbiIsIldyaXRlRm4iLCJjYWxsYmFjayIsIldyaXRlQXN5bmMiLCJnZW5lcmF0b3IiLCJjaHVua1NhbXBsZVBhdGgiLCJzZXRJdGVtIiwiY2h1bmtMYWJlbFBhdGgiLCJwcm9ncmVzcyIsInByZXByb2Nlc3NpbmciLCJyZXN1bHQiLCJkdXBsZXhlciIsIlN0cmVhbSIsIm1ha2VEdXBsZXgiLCJ0cmFuc2Zvcm1lciIsIm1ha2VUcmFuc2Zvcm0iLCJzdHJlYW0iLCJwaXBlIiwicHJlcHJvY2Vzc2luZ0RhdGFzZXQiLCJzdG9yZUluTWVtb3J5IiwibWVtQ2FjaGUiLCJzdG9yYWdlIiwic2F2ZWRDaHVua3MiLCJwdXNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdlVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUI7Ozs7Ozs7Ozs7O0FDakVBLGtCQUFrQixtQkFBTyxDQUFDLGtJQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzVFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixJQUFJO0FBQ3ZCOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWE7O0FBRWIsU0FBUyxtQkFBTyxDQUFDLHVEQUFJO0FBQ3JCLGNBQWMsbUJBQU8sQ0FBQyx1RUFBZTs7QUFFckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxHQUFHO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0NBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQjs7QUFFL0IsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0Qjs7QUFFNUIsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsVUFBVTs7QUFFekIsNEJBQTRCOztBQUU1QixnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdkx6QjtBQUNiLGtCQUFrQixtQkFBTyxDQUFDLG9GQUFZO0FBQ3RDLDZCQUE2QixtQkFBTyxDQUFDLG9GQUF5Qjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsZ0JBQWdCLGdCQUFnQjtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ2E7O0FBRWI7QUFDQTtBQUNBLDRCQUE0Qiw0QkFBNEI7QUFDeEQsYUFBYSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQzdCOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNUYTtBQUNiLGtCQUFrQixtQkFBTyxDQUFDLG9GQUFZOztBQUV0Qzs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLEtBQUs7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsbUJBQU8sQ0FBQyw4RUFBb0I7O0FBRS9DO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBVTs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3prQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFF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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0EsSUFBSSxZQUFZLGtEQUFrRDtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVksRUFBRSxXQUFXLGFBQWEsZ0JBQWdCO0FBQ3RFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVksRUFBRSxXQUFXLGNBQWMsNkJBQTZCO0FBQ3RGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNo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O0FBQUN0RixXQUFEO0FBQU1xRCxjQUFOO0FBQWNFO0FBQWQsT0FBWjtBQUNIOztBQUNEd0IsVUFBTSxDQUFDTyxJQUFQLENBQVksSUFBWjtBQUNBLFdBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFtQjtBQUNsQ1YsWUFBTSxDQUFDVyxFQUFQLENBQVUsUUFBVixFQUFvQixNQUFJO0FBQ3BCRixlQUFPLENBQUMsS0FBS2hGLGtCQUFOLENBQVA7QUFDSCxPQUZEO0FBR0gsS0FKTSxDQUFQO0FBS0g7O0FBekVrRixDQUF2Rjs7QUEyRWVuRCw4RkFBZixFOzs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDhEIiwiZmlsZSI6IkBjYXVzYWxOZXQvZGF0YXNldHMubm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImNhdXNhbC1uZXQuY29yZVwiKSwgcmVxdWlyZShcImNhdXNhbC1uZXQubWVtY2FjaGVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0LnV0aWxzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImNhdXNhbC1uZXQuY29yZVwiLCBcImNhdXNhbC1uZXQubWVtY2FjaGVcIiwgXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIiwgXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIiwgXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvZGF0YXNldHNcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJjYXVzYWwtbmV0LmNvcmVcIiksIHJlcXVpcmUoXCJjYXVzYWwtbmV0Lm1lbWNhY2hlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC5zdG9yYWdlXCIpLCByZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9kYXRhc2V0c1wiXSA9IGZhY3Rvcnkocm9vdFtcImNhdXNhbC1uZXQuY29yZVwiXSwgcm9vdFtcImNhdXNhbC1uZXQubWVtY2FjaGVcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnByZXByb2Nlc3NpbmdcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnN0b3JhZ2VcIl0sIHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9jb3JlX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfcHJlcHJvY2Vzc2luZ19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfc3RvcmFnZV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgX0JhciA9IHJlcXVpcmUoJy4vbGliL0JhcicpO1xuY29uc3QgX1ByZXNldHMgPSByZXF1aXJlKCcuL3ByZXNldHMvaW5kZXgnKTtcblxuLy8gc3ViLW1vZHVsZSBhY2Nlc3Ncbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIEJhcjogX0JhcixcbiAgICBQcmVzZXRzOiBfUHJlc2V0c1xufTsiLCJjb25zdCBfVGVybWluYWwgPSByZXF1aXJlKCcuL1Rlcm1pbmFsJyk7XG5jb25zdCBfRVRBID0gcmVxdWlyZSgnLi9FVEEnKTtcbmNvbnN0IF9zdHJpbmdXaWR0aCA9IHJlcXVpcmUoJ3N0cmluZy13aWR0aCcpO1xuXG4vLyBQcm9ncmVzcy1CYXIgY29uc3RydWN0b3Jcbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQmFye1xuXG4gICAgY29uc3RydWN0b3Iob3B0LCBwcmVzZXQpe1xuXG4gICAgICAgLy8gbWVyZ2Ugb3B0aW9ucyAtIHRha2UgcHJlY2VkZW5jZSBvdmVyIHByZXNldFxuICAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBwcmVzZXQsIG9wdCk7XG5cbiAgICAgICAgLy8gdXRpbGl0eSB0byBtZXJnZSBkZWZhdWx0c1xuICAgICAgICBmdW5jdGlvbiBnZXRPcHRpb24odiwgZGVmYXVsdFZhbHVlKXtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhlIHVwZGF0ZSB0aW1lclxuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcblxuICAgICAgICAvLyB0aGUgY3VycmVudCBiYXIgdmFsdWVcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XG5cbiAgICAgICAgLy8gdGhlIGVuZCB2YWx1ZSBvZiB0aGUgYmFyXG4gICAgICAgIHRoaXMudG90YWwgPSAxMDA7XG5cbiAgICAgICAgLy8gdGhlIG1heCB1cGRhdGUgcmF0ZSBpbiBmcHMgKHJlZHJhdyB3aWxsIG9ubHkgdHJpZ2dlcmVkIG9uIHZhbHVlIGNoYW5nZSlcbiAgICAgICAgdGhpcy50aHJvdHRsZVRpbWUgPSAxMDAwIC8gKG9wdGlvbnMuZnBzIHx8IDEwKTtcblxuICAgICAgICAvLyB0aGUgb3V0cHV0IHN0cmVhbSB0byB3cml0ZSBvblxuICAgICAgICB0aGlzLnN0cmVhbSA9IGdldE9wdGlvbihvcHRpb25zLnN0cmVhbSwgcHJvY2Vzcy5zdGRlcnIpO1xuXG4gICAgICAgIC8vIG5ldyB0ZXJtaW5hbCBpbnN0YW5jZVxuICAgICAgICB0aGlzLnRlcm1pbmFsID0gbmV3IF9UZXJtaW5hbCh0aGlzLnN0cmVhbSk7XG5cbiAgICAgICAgLy8gY2xlYXIgb24gZmluaXNoID9cbiAgICAgICAgdGhpcy5jbGVhck9uQ29tcGxldGUgPSBnZXRPcHRpb24ob3B0aW9ucy5jbGVhck9uQ29tcGxldGUsIGZhbHNlKTtcblxuICAgICAgICAvLyBzdG9wIG9uIGZpbmlzaCA/XG4gICAgICAgIHRoaXMuc3RvcE9uQ29tcGxldGUgPSBnZXRPcHRpb24ob3B0aW9ucy5zdG9wT25Db21wbGV0ZSwgZmFsc2UpO1xuXG4gICAgICAgIC8vIGxhc3QgZHJhd24gc3RyaW5nIC0gb25seSByZW5kZXIgb24gY2hhbmdlIVxuICAgICAgICB0aGlzLmxhc3REcmF3blN0cmluZyA9IG51bGw7XG5cbiAgICAgICAgLy8gc2l6ZSBvZiB0aGUgcHJvZ3Jlc3NiYXIgaW4gY2hhcnNcbiAgICAgICAgdGhpcy5iYXJzaXplID0gb3B0aW9ucy5iYXJzaXplIHx8IDQwO1xuXG4gICAgICAgIC8vIHBvc2l0aW9uIG9mIHRoZSBwcm9ncmVzcyBiYXIgLSAnbGVmdCcgKGRlZmF1bHQpLCAncmlnaHQnIG9yICdjZW50ZXInXG4gICAgICAgIHRoaXMuYWxpZ24gPSBnZXRPcHRpb24ob3B0aW9ucy5hbGlnbiwgJ2xlZnQnKTtcblxuICAgICAgICAvLyBoaWRlIHRoZSBjdXJzb3IgP1xuICAgICAgICB0aGlzLmhpZGVDdXJzb3IgPSBnZXRPcHRpb24ob3B0aW9ucy5oaWRlQ3Vyc29yLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gZGlzYWJsZSBsaW5ld3JhcHBpbmcgP1xuICAgICAgICB0aGlzLmxpbmV3cmFwID0gZ2V0T3B0aW9uKG9wdGlvbnMubGluZXdyYXAsIGZhbHNlKTtcblxuICAgICAgICAvLyBwcmUtcmVuZGVyIGJhciBzdHJpbmdzIChwZXJmb3JtYW5jZSlcbiAgICAgICAgdGhpcy5iYXJDb21wbGV0ZVN0cmluZyA9IChuZXcgQXJyYXkodGhpcy5iYXJzaXplICsgMSApLmpvaW4ob3B0aW9ucy5iYXJDb21wbGV0ZUNoYXIgfHwgJz0nKSk7XG4gICAgICAgIHRoaXMuYmFySW5jb21wbGV0ZVN0cmluZyA9IChuZXcgQXJyYXkodGhpcy5iYXJzaXplICsgMSApLmpvaW4ob3B0aW9ucy5iYXJJbmNvbXBsZXRlQ2hhciB8fCAnLScpKTtcblxuICAgICAgICAvLyB0aGUgYmFyIGZvcm1hdFxuICAgICAgICB0aGlzLmZvcm1hdCA9IG9wdGlvbnMuZm9ybWF0IHx8ICdwcm9ncmVzcyBbe2Jhcn1dIHtwZXJjZW50YWdlfSUgfCBFVEE6IHtldGF9cyB8IHt2YWx1ZX0ve3RvdGFsfSc7XG5cbiAgICAgICAgLy8gc3RhcnQgdGltZSAodXNlZCBmb3IgZXRhIGNhbGN1bGF0aW9uKVxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG5cbiAgICAgICAgLy8gbGFzdCB1cGRhdGUgdGltZVxuICAgICAgICB0aGlzLmxhc3RSZWRyYXcgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIC8vIHRoZSBudW1iZXIgb2YgcmVzdWx0cyB0byBhdmVyYWdlIEVUQSBvdmVyXG4gICAgICAgIHRoaXMuZXRhQnVmZmVyTGVuZ3RoID0gZ2V0T3B0aW9uKG9wdGlvbnMuZXRhQnVmZmVyLCAxMCk7XG5cbiAgICAgICAgLy8gZGVmYXVsdCBldGEgY2FsdWxhdG9yICh3aWxsIGJlIHJlLWNyZWF0ZSBvbiBzdGFydClcbiAgICAgICAgdGhpcy5ldGEgPSBuZXcgX0VUQSh0aGlzLmV0YUJ1ZmZlckxlbmd0aCwgMCwgMCk7XG5cbiAgICAgICAgLy8gcGF5bG9hZCBkYXRhXG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHt9O1xuICAgIH1cblxuICAgIC8vIGludGVybmFsIHJlbmRlciBmdW5jdGlvblxuICAgIHJlbmRlcigpe1xuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuXG4gICAgICAgIC8vIGNvcHkgZm9ybWF0IHN0cmluZ1xuICAgICAgICBsZXQgcyA9IHRoaXMuZm9ybWF0O1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgbm9ybWFsaXplZCBjdXJyZW50IHByb2dyZXNzXG4gICAgICAgIGxldCBwcm9ncmVzcyA9ICh0aGlzLnZhbHVlL3RoaXMudG90YWwpO1xuXG4gICAgICAgIC8vIGhhbmRsZSBOYU4gRXJyb3JzIGNhdXNlZCBieSB0b3RhbD0wLiBTZXQgdG8gY29tcGxldGUgaW4gdGhpcyBjYXNlIFxuICAgICAgICBpZiAoaXNOYU4ocHJvZ3Jlc3MpKXtcbiAgICAgICAgICAgIHByb2dyZXNzID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGltaXRlclxuICAgICAgICBwcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHByb2dyZXNzLCAwLjApLCAxLjApO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIGJhciBzdHJpbmcgYnkgc3RyaXBwaW5nIHRoZSBwcmUtcmVuZGVyZWQgc3RyaW5nc1xuICAgICAgICBsZXQgYiA9IHRoaXMuYmFyQ29tcGxldGVTdHJpbmcuc3Vic3RyKDAsIE1hdGgucm91bmQocHJvZ3Jlc3MqdGhpcy5iYXJzaXplKSkgK1xuICAgICAgICAgICAgICAgIHRoaXMuYmFySW5jb21wbGV0ZVN0cmluZy5zdWJzdHIoMCwgTWF0aC5yb3VuZCgoMS4wLXByb2dyZXNzKSp0aGlzLmJhcnNpemUpKTtcblxuICAgICAgICAvLyBsaW1pdCB0aGUgYmFyLXNpemUgKGNhbiBjYXVzZSBuKzEgY2hhcnMgaW4gc29tZSBudW1lcmljYWwgc2l0dWF0aW9uKVxuICAgICAgICBiID0gYi5zdWJzdHIoMCwgdGhpcy5iYXJzaXplKTtcblxuICAgICAgICAvLyBjYWxjdWxhdGUgcHJvZ3Jlc3MgaW4gcGVyY2VudFxuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gIE1hdGgucm91bmQocHJvZ3Jlc3MqMTAwKSArICcnO1xuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBlbGFwc2VkIHRpbWVcbiAgICAgICAgY29uc3QgZWxhcHNlZFRpbWUgPSBNYXRoLnJvdW5kKChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUpLzEwMDApO1xuICAgICAgICBjb25zdCBlbGFwc2VkVGltZWYgPSBCYXIuZm9ybWF0VGltZShlbGFwc2VkVGltZSwgMSk7XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIGV0YVxuICAgICAgICBjb25zdCBldGEgPSB0aGlzLmV0YS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGV0YWYgPSBCYXIuZm9ybWF0VGltZShldGEsIDUpO1xuXG4gICAgICAgIC8vIGFzc2lnbiBwbGFjZWhvbGRlciB0b2tlbnNcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvXFx7YmFyfS9naSwgYilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHtwZXJjZW50YWdlfS9naSwgcGVyY2VudGFnZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHt0b3RhbH0vZ2ksIHRoaXMudG90YWwgKyAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHt2YWx1ZX0vZ2ksIHRoaXMudmFsdWUgKyAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHtldGF9L2dpLCBldGEgKyAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHtldGFfZm9ybWF0dGVkfS9naSwgZXRhZiArICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xce2R1cmF0aW9ufS9naSwgZWxhcHNlZFRpbWUgKyAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXHtkdXJhdGlvbl9mb3JtYXR0ZWR9L2dpLCBlbGFwc2VkVGltZWYgKyAnJyk7XG5cbiAgICAgICAgLy8gYXNzaWduIHBheWxvYWQgcGxhY2Vob2xkZXIgdG9rZW5zXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMucGF5bG9hZCkge1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IFJlZ0V4cCgneycra2V5Kyd9JywgJ2dpJyk7XG4gICAgICAgICAgICBzID0gcy5yZXBsYWNlKHBhdHRlcm4sIHRoaXMucGF5bG9hZFtrZXldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBhdmFpbGFibGUgd2hpdGVzcGFjZSAoMiBjaGFyYWN0ZXJzIG1hcmdpbiBvZiBlcnJvcilcbiAgICAgICAgY29uc3QgZnVsbE1hcmdpbiA9IE1hdGgubWF4KDAsIHRoaXMudGVybWluYWwuZ2V0V2lkdGgoKSAtIF9zdHJpbmdXaWR0aChzKSAtMik7XG4gICAgICAgIGNvbnN0IGhhbGZNYXJnaW4gPSBNYXRoLmZsb29yKGZ1bGxNYXJnaW4gLyAyKTtcblxuICAgICAgICAvLyBkaXN0cmlidXRlIGF2YWlsYWJsZSB3aGl0ZXNwYWNlIGFjY29yZGluZyB0byBwb3NpdGlvblxuICAgICAgICBzd2l0Y2ggKHRoaXMuYWxpZ24pIHtcblxuICAgICAgICAgICAgLy8gZmlsbCBzdGFydC1vZi1saW5lIHdpdGggd2hpdGVzcGFjZXNcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBzID0gKGZ1bGxNYXJnaW4gPiAwKSA/ICcgJy5yZXBlYXQoZnVsbE1hcmdpbikgKyBzIDogcztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gZGlzdHJpYnV0ZSB3aGl0ZXNwYWNlcyB0byBsZWZ0K3JpZ2h0XG4gICAgICAgICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAgICAgICAgIHMgPSAoaGFsZk1hcmdpbiA+IDApID8gJyAnLnJlcGVhdChoYWxmTWFyZ2luKSArIHMgOiBzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBkZWZhdWx0OiBsZWZ0IGFsaWduLCBubyBhZGRpdGlvbmFsIHdoaXRlc3BhY2VzXG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdHJpbmcgY2hhbmdlZCA/IG9ubHkgdHJpZ2dlciByZWRyYXcgb24gY2hhbmdlIVxuICAgICAgICBpZiAodGhpcy5sYXN0RHJhd25TdHJpbmcgIT0gcyl7XG4gICAgICAgICAgICAvLyBzZXQgY3Vyc29yIHRvIHN0YXJ0IG9mIGxpbmVcbiAgICAgICAgICAgIHRoaXMudGVybWluYWwuY3Vyc29yVG8oMCwgbnVsbCk7XG5cbiAgICAgICAgICAgIC8vIHdyaXRlIG91dHB1dFxuICAgICAgICAgICAgdGhpcy50ZXJtaW5hbC53cml0ZShzKTtcblxuICAgICAgICAgICAgLy8gY2xlYXIgdG8gdGhlIHJpZ2h0IGZyb20gY3Vyc29yXG4gICAgICAgICAgICB0aGlzLnRlcm1pbmFsLmNsZWFyUmlnaHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gc3RvcmUgc3RyaW5nXG4gICAgICAgICAgICB0aGlzLmxhc3REcmF3blN0cmluZyA9IHM7XG5cbiAgICAgICAgICAgIC8vIHNldCBsYXN0IHJlZHJhdyB0aW1lXG4gICAgICAgICAgICB0aGlzLmxhc3RSZWRyYXcgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbmV4dCB1cGRhdGVcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQodGhpcy5yZW5kZXIuYmluZCh0aGlzKSwgdGhpcy50aHJvdHRsZVRpbWUqMik7XG4gICAgfVxuXG4gICAgLy8gZm9ybWF0IGEgbnVtYmVyIG9mIHNlY29uZHMgaW50byBob3VycyBhbmQgbWludXRlcyBhcyBhcHByb3ByaWF0ZVxuICAgIHN0YXRpYyBmb3JtYXRUaW1lKHQsIHJvdW5kVG9NdWx0aXBsZU9mKXtcbiAgICAgICAgZnVuY3Rpb24gcm91bmQoaW5wdXQpIHtcbiAgICAgICAgICAgIGlmIChyb3VuZFRvTXVsdGlwbGVPZikge1xuICAgICAgICAgICAgICAgIHJldHVybiByb3VuZFRvTXVsdGlwbGVPZiAqIE1hdGgucm91bmQoaW5wdXQgLyByb3VuZFRvTXVsdGlwbGVPZik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0ID4gMzYwMCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodCAvIDM2MDApICsgJ2gnICsgcm91bmQoKHQgJSAzNjAwKSAvIDYwKSArICdtJztcbiAgICAgICAgfSBlbHNlIGlmICh0ID4gNjApIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKHQgLyA2MCkgKyAnbScgKyByb3VuZCgodCAlIDYwKSkgKyAncyc7XG4gICAgICAgIH0gZWxzZSBpZiAodCA+IDEwKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91bmQodCkgKyAncyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdCArICdzJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHN0YXJ0IHRoZSBwcm9ncmVzcyBiYXJcbiAgICBzdGFydCh0b3RhbCwgc3RhcnRWYWx1ZSwgcGF5bG9hZCl7XG4gICAgICAgIC8vIHNldCBpbml0aWFsIHZhbHVlc1xuICAgICAgICB0aGlzLnZhbHVlID0gc3RhcnRWYWx1ZSB8fCAwO1xuICAgICAgICB0aGlzLnRvdGFsID0gKHR5cGVvZiB0b3RhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdG90YWwgPj0gMCkgPyB0b3RhbCA6IDEwMDtcbiAgICAgICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZCB8fCB7fTtcblxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMubGFzdERyYXduU3RyaW5nID0gJyc7XG5cbiAgICAgICAgLy8gcHJvZ3Jlc3MgaXMgb25seSB2aXNpYmxlIGluIFRUWSBtb2RlIVxuICAgICAgICBpZiAoIXRoaXMudGVybWluYWwuaXNUVFkoKSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzYXZlIGN1cnJlbnQgY3Vyc29yIHNldHRpbmdzXG4gICAgICAgIHRoaXMudGVybWluYWwuY3Vyc29yU2F2ZSgpO1xuXG4gICAgICAgIC8vIGhpZGUgdGhlIGN1cnNvciA/XG4gICAgICAgIGlmICh0aGlzLmhpZGVDdXJzb3IgPT09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy50ZXJtaW5hbC5jdXJzb3IoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGlzYWJsZSBsaW5lIHdycGFwaW5nID9cbiAgICAgICAgaWYgKHRoaXMubGluZXdyYXAgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMudGVybWluYWwubGluZVdyYXBwaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRpbWVyIGFscmVhZHkgYWN0aXZlID9cbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIGV0YSBidWZmZXJcbiAgICAgICAgdGhpcy5ldGEgPSBuZXcgX0VUQSh0aGlzLmV0YUJ1ZmZlckxlbmd0aCwgdGhpcy5zdGFydFRpbWUsIHRoaXMudmFsdWUpO1xuXG4gICAgICAgIC8vIHJlZHJhdyBvbiBzdGFydCFcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBzdG9wIHRoZSBiYXJcbiAgICBzdG9wKCl7XG4gICAgICAgIC8vIHRpbWVyIGluYWN0aXZlID9cbiAgICAgICAgaWYgKCF0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmlnZ2VyIGZpbmFsIHJlbmRlcmluZ1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuXG4gICAgICAgIC8vIGN1cnNvciBoaWRkZW4gP1xuICAgICAgICBpZiAodGhpcy5oaWRlQ3Vyc29yID09PSB0cnVlKXtcbiAgICAgICAgICAgIHRoaXMudGVybWluYWwuY3Vyc29yKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmUtZW5hYmxlIGxpbmUgd3JwYXBpbmcgP1xuICAgICAgICBpZiAodGhpcy5saW5ld3JhcCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy50ZXJtaW5hbC5saW5lV3JhcHBpbmcodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXN0b3JlIGN1cnNvciBvbiBjb21wbGV0ZSAocG9zaXRpb24gKyBzZXR0aW5ncylcbiAgICAgICAgdGhpcy50ZXJtaW5hbC5jdXJzb3JSZXN0b3JlKCk7XG5cbiAgICAgICAgLy8gY2xlYXIgbGluZSBvbiBjb21wbGV0ZSA/XG4gICAgICAgIGlmICh0aGlzLmNsZWFyT25Db21wbGV0ZSl7XG4gICAgICAgICAgICB0aGlzLnRlcm1pbmFsLmN1cnNvclRvKDAsIG51bGwpO1xuICAgICAgICAgICAgdGhpcy50ZXJtaW5hbC5jbGVhckxpbmUoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBuZXcgbGluZSBvbiBjb21wbGV0ZVxuICAgICAgICAgICAgdGhpcy50ZXJtaW5hbC53cml0ZSgnXFxuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdGhlIGJhciB2YWx1ZVxuICAgIHVwZGF0ZShjdXJyZW50LCBwYXlsb2FkKXtcbiAgICAgICAgLy8gdXBkYXRlIHZhbHVlXG4gICAgICAgIHRoaXMudmFsdWUgPSBjdXJyZW50O1xuXG4gICAgICAgIC8vIHRpbWVyIGluYWN0aXZlID9cbiAgICAgICAgaWYgKCF0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCBuZXcgdmFsdWVcbiAgICAgICAgdGhpcy5ldGEucHVzaChEYXRlLm5vdygpLCBjdXJyZW50KTtcblxuICAgICAgICAvLyBtZXJnZSBwYXlsb2FkXG4gICAgICAgIGNvbnN0IHBheWxvYWREYXRhID0gcGF5bG9hZCB8fCB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGF5bG9hZERhdGEpe1xuICAgICAgICAgICAgdGhpcy5wYXlsb2FkW2tleV0gPSBwYXlsb2FkRGF0YVtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhyb3R0bGUgdGhlIHVwZGF0ZSBvciBmb3JjZSB1cGRhdGUgP1xuICAgICAgICBpZiAodGhpcy5sYXN0UmVkcmF3ICsgdGhpcy50aHJvdHRsZVRpbWUgPCBEYXRlLm5vdygpKXtcbiAgICAgICAgICAgIC8vIG51bWJlciBvZiByZW1haW5pbmcgZWxlbWVudHMgcmVxdWlyZWQgZm9yIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICB0aGlzLmV0YS5jYWxjdWxhdGUodGhpcy50b3RhbC10aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPj0gdGhpcy5nZXRUb3RhbCgpICYmIHRoaXMuc3RvcE9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHRoZSBiYXIgdmFsdWVcbiAgICBpbmNyZW1lbnQoc3RlcCwgcGF5bG9hZCl7XG4gICAgICAgIHN0ZXAgPSBzdGVwIHx8IDE7XG4gICAgICAgIHRoaXMudXBkYXRlKHRoaXMudmFsdWUgKyBzdGVwLCBwYXlsb2FkKTtcbiAgICB9XG5cbiAgICAvLyBnZXQgdGhlIHRvdGFsIChsaW1pdCkgdmFsdWVcbiAgICBnZXRUb3RhbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy50b3RhbDtcbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIHRvdGFsIChsaW1pdCkgdmFsdWVcbiAgICBzZXRUb3RhbCh0b3RhbCl7XG4gICAgICAgIGlmICh0eXBlb2YgdG90YWwgIT09ICd1bmRlZmluZWQnICYmIHRvdGFsID49IDApe1xuICAgICAgICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW50ZXJuYWwgLSBzdG9wIHRoZSBjdXJyZW50IHRpbWVyXG4gICAgc3RvcFRpbWVyKCl7XG4gICAgICAgIC8vIHN0b3AgdGhlIHRpbWVyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgfVxufVxuIiwiXG4vLyBFVEEgY2FsY3VsYXRpb25cbmNsYXNzIEVUQXtcblxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgaW5pdFRpbWUsIGluaXRWYWx1ZSl7XG4gICAgICAgIC8vIHNpemUgb2YgZXRhIGJ1ZmZlclxuICAgICAgICB0aGlzLmV0YUJ1ZmZlckxlbmd0aCA9IGxlbmd0aCB8fCAxMDtcblxuICAgICAgICAvLyBldGEgYnVmZmVyIHdpdGggaW5pdGlhbCB2YWx1ZXNcbiAgICAgICAgdGhpcy52YWx1ZUJ1ZmZlciA9IFtpbml0VmFsdWVdO1xuICAgICAgICB0aGlzLnRpbWVCdWZmZXIgPSBbaW5pdFRpbWVdO1xuXG4gICAgICAgIC8vIGV0YSB0aW1lIHZhbHVlXG4gICAgICAgIHRoaXMuZXRhID0gJzAnO1xuICAgIH1cblxuICAgIC8vIGFkZCBuZXcgdmFsdWVzIHRvIGNhbGN1bGF0aW9uIGJ1ZmZlclxuICAgIHB1c2godGltZSwgdmFsdWUpe1xuICAgICAgICB0aGlzLnZhbHVlQnVmZmVyLnB1c2godmFsdWUpO1xuICAgICAgICB0aGlzLnRpbWVCdWZmZXIucHVzaCh0aW1lKTtcbiAgICB9XG5cbiAgICAvLyBmZXRjaCBlc3RpbWF0ZWQgdGltZVxuICAgIGdldFRpbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXRhO1xuICAgIH1cblxuICAgIC8vIGV0YSBjYWxjdWxhdGlvbiAtIHJlcXVlc3QgbnVtYmVyIG9mIHJlbWFpbmluZyBldmVudHNcbiAgICBjYWxjdWxhdGUocmVtYWluaW5nKXtcbiAgICAgICAgLy8gZ2V0IG51bWJlciBvZiBzYW1wbGVzIGluIGV0YSBidWZmZXJcbiAgICAgICAgY29uc3QgY3VycmVudEJ1ZmZlclNpemUgPSB0aGlzLnZhbHVlQnVmZmVyLmxlbmd0aDtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gTWF0aC5taW4odGhpcy5ldGFCdWZmZXJMZW5ndGgsIGN1cnJlbnRCdWZmZXJTaXplKTtcblxuICAgICAgICBjb25zdCB2X2RpZmYgPSB0aGlzLnZhbHVlQnVmZmVyW2N1cnJlbnRCdWZmZXJTaXplIC0gMV0gLSB0aGlzLnZhbHVlQnVmZmVyW2N1cnJlbnRCdWZmZXJTaXplIC0gYnVmZmVyXTtcbiAgICAgICAgY29uc3QgdF9kaWZmID0gdGhpcy50aW1lQnVmZmVyW2N1cnJlbnRCdWZmZXJTaXplIC0gMV0gLSB0aGlzLnRpbWVCdWZmZXJbY3VycmVudEJ1ZmZlclNpemUgLSBidWZmZXJdO1xuXG4gICAgICAgIC8vIGdldCBwcm9ncmVzcyBwZXIgbXNcbiAgICAgICAgY29uc3QgdnRfcmF0ZSA9IHZfZGlmZi90X2RpZmY7XG5cbiAgICAgICAgLy8gc3RyaXAgcGFzdCBlbGVtZW50c1xuICAgICAgICB0aGlzLnZhbHVlQnVmZmVyID0gdGhpcy52YWx1ZUJ1ZmZlci5zbGljZSgtdGhpcy5ldGFCdWZmZXJMZW5ndGgpO1xuICAgICAgICB0aGlzLnRpbWVCdWZmZXIgID0gdGhpcy50aW1lQnVmZmVyLnNsaWNlKC10aGlzLmV0YUJ1ZmZlckxlbmd0aCk7XG5cbiAgICAgICAgLy8gZXE6IHZ0X3JhdGUgKnggPSB0b3RhbFxuICAgICAgICBjb25zdCBldGEgPSBNYXRoLmNlaWwocmVtYWluaW5nL3Z0X3JhdGUvMTAwMCk7XG5cbiAgICAgICAgLy8gY2hlY2sgdmFsdWVzXG4gICAgICAgIGlmIChpc05hTihldGEpKXtcbiAgICAgICAgICAgIHRoaXMuZXRhID0gJ05VTEwnO1xuXG4gICAgICAgIC8vICsvLSBJbmZpbml0eSAtLS0gTmFOIGFscmVhZHkgaGFuZGxlZFxuICAgICAgICB9ZWxzZSBpZiAoIWlzRmluaXRlKGV0YSkpe1xuICAgICAgICAgICAgdGhpcy5ldGEgPSAnSU5GJztcblxuICAgICAgICAvLyA+IDEwMGsgcyA/XG4gICAgICAgIH1lbHNlIGlmIChldGEgPiAxMDAwMDApe1xuICAgICAgICAgICAgdGhpcy5ldGEgPSAnSU5GJztcblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIGFzc2lnblxuICAgICAgICAgICAgdGhpcy5ldGEgPSBldGE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRVRBOyIsImNvbnN0IF9yZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XG5cbi8vIGxvdy1sZXZlbCB0ZXJtaW5hbCBpbnRlcmFjdGlvbnNcbmNsYXNzIFRlcm1pbmFse1xuXG4gICAgY29uc3RydWN0b3Iob3V0cHV0U3RyZWFtKXtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBvdXRwdXRTdHJlYW07XG5cbiAgICAgICAgLy8gZGVmYXVsdDogbGluZSB3cmFwcGluZyBlbmFibGVkXG4gICAgICAgIHRoaXMubGluZXdyYXAgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHNhdmUgY3Vyc29yIHBvc2l0aW9uICsgc2V0dGluZ3NcbiAgICBjdXJzb3JTYXZlKCl7XG4gICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCdcXHgxQjcnKTtcbiAgICB9XG5cbiAgICAvLyByZXN0b3JlIGxhc3QgY3Vyc29yIHBvc2l0aW9uICsgc2V0dGluZ3NcbiAgICBjdXJzb3JSZXN0b3JlKCl7XG4gICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCdcXHgxQjgnKTtcbiAgICB9XG5cbiAgICAvLyBzaG93L2hpZGUgY3Vyc29yXG4gICAgY3Vyc29yKGVuYWJsZWQpe1xuICAgICAgICBpZiAoZW5hYmxlZCl7XG4gICAgICAgICAgICB0aGlzLnN0cmVhbS53cml0ZSgnXFx4MUJbPzI1aCcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtLndyaXRlKCdcXHgxQls/MjVsJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjaGFuZ2UgY3Vyc29yIHBvc2l0aW9ublxuICAgIGN1cnNvclRvKHg9bnVsbCwgeT1udWxsKXtcbiAgICAgICAgX3JlYWRsaW5lLmN1cnNvclRvKHRoaXMuc3RyZWFtLCB4LCB5KTtcbiAgICB9XG5cbiAgICAvLyBjbGVhciB0byB0aGUgcmlnaHQgZnJvbSBjdXJzb3JcbiAgICBjbGVhclJpZ2h0KCl7XG4gICAgICAgIF9yZWFkbGluZS5jbGVhckxpbmUodGhpcy5zdHJlYW0sIDEpO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIHRoZSBmdWxsIGxpbmVcbiAgICBjbGVhckxpbmUoKXtcbiAgICAgICAgX3JlYWRsaW5lLmNsZWFyTGluZSh0aGlzLnN0cmVhbSwgMCk7XG4gICAgfVxuXG4gICAgLy8gd3JpdGUgY29udGVudCB0byBvdXRwdXQgc3RyZWFtXG4gICAgLy8gQFRPRE8gdXNlIHN0cmluZy13aWR0aCB0byBzdHJpcCBsZW5ndGhcbiAgICB3cml0ZShzKXtcbiAgICAgICAgLy8gbGluZSB3cmFwcGluZyBlbmFibGVkID8gdHJpbSBvdXRwdXRcbiAgICAgICAgaWYgKHRoaXMubGluZXdyYXAgPT09IHRydWUpe1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0ud3JpdGUocy5zdWJzdHIoMCwgdGhpcy5nZXRXaWR0aCgpKSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0ud3JpdGUocyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb250cm9sIGxpbmUgd3JhcHBpbmdcbiAgICBsaW5lV3JhcHBpbmcoZW5hYmxlZCl7XG4gICAgICAgIC8vIHN0b3JlIHN0YXRlXG4gICAgICAgIHRoaXMubGluZXdyYXAgPSBlbmFibGVkO1xuICAgICAgICBpZiAoZW5hYmxlZCl7XG4gICAgICAgICAgICB0aGlzLnN0cmVhbS53cml0ZSgnXFx4MUJbPzdoJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0ud3JpdGUoJ1xceDFCWz83bCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHR5IGVudmlyb25tZW50ID9cbiAgICBpc1RUWSgpe1xuICAgICAgICByZXR1cm4gKHRoaXMuc3RyZWFtLmlzVFRZID09PSB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBnZXQgdGVybWluYWwgd2lkdGhcbiAgICBnZXRXaWR0aCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW0uY29sdW1ucyB8fCA4MDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVybWluYWw7XG4iLCJjb25zdCBfbGVnYWN5ID0gcmVxdWlyZSgnLi9sZWdhY3knKTtcbmNvbnN0IF9zaGFkZXNfY2xhc3NpYyA9IHJlcXVpcmUoJy4vc2hhZGVzLWNsYXNzaWMnKTtcbmNvbnN0IF9zaGFkZXNfZ3JleSA9IHJlcXVpcmUoJy4vc2hhZGVzLWdyZXknKTtcbmNvbnN0IF9yZWN0ID0gcmVxdWlyZSgnLi9yZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGxlZ2FjeTogX2xlZ2FjeSxcbiAgICBzaGFkZXNfY2xhc3NpYzogX3NoYWRlc19jbGFzc2ljLFxuICAgIHNoYWRlc19ncmV5OiBfc2hhZGVzX2dyZXksXG4gICAgcmVjdDogX3JlY3Rcbn07IiwiLy8gY2xpLXByb2dyZXNzIGxlZ2FjeSBzdHlsZSBhcyBvZiAxLnhcbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdDogJ3Byb2dyZXNzIFt7YmFyfV0ge3BlcmNlbnRhZ2V9JSB8IEVUQToge2V0YX1zIHwge3ZhbHVlfS97dG90YWx9JyxcbiAgICBiYXJDb21wbGV0ZUNoYXI6ICc9JyxcbiAgICBiYXJJbmNvbXBsZXRlQ2hhcjogJy0nXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdDogJyB7YmFyfVxcdTI1QTAge3BlcmNlbnRhZ2V9JSB8IEVUQToge2V0YX1zIHwge3ZhbHVlfS97dG90YWx9JyxcbiAgICBiYXJDb21wbGV0ZUNoYXI6ICdcXHUyNUEwJyxcbiAgICBiYXJJbmNvbXBsZXRlQ2hhcjogJyAnXG59OyIsIi8vIGNsaS1wcm9ncmVzcyBsZWdhY3kgc3R5bGUgYXMgb2YgMS54XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmb3JtYXQ6ICcge2Jhcn0ge3BlcmNlbnRhZ2V9JSB8IEVUQToge2V0YX1zIHwge3ZhbHVlfS97dG90YWx9JyxcbiAgICBiYXJDb21wbGV0ZUNoYXI6ICdcXHUyNTg4JyxcbiAgICBiYXJJbmNvbXBsZXRlQ2hhcjogJ1xcdTI1OTEnXG59OyIsImNvbnN0IF9jb2xvcnMgPSByZXF1aXJlKCdjb2xvcnMnKTtcblxuLy8gY2xpLXByb2dyZXNzIGxlZ2FjeSBzdHlsZSBhcyBvZiAxLnhcbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdDogX2NvbG9ycy5ncmV5KCcge2Jhcn0nKSArICcge3BlcmNlbnRhZ2V9JSB8IEVUQToge2V0YX1zIHwge3ZhbHVlfS97dG90YWx9JyxcbiAgICBiYXJDb21wbGV0ZUNoYXI6ICdcXHUyNTg4JyxcbiAgICBiYXJJbmNvbXBsZXRlQ2hhcjogJ1xcdTI1OTEnXG59OyIsIi8qXG5cblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5PcmlnaW5hbCBMaWJyYXJ5XG4gIC0gQ29weXJpZ2h0IChjKSBNYXJhayBTcXVpcmVzXG5cbkFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eVxuIC0gQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG52YXIgY29sb3JzID0ge307XG5tb2R1bGVbJ2V4cG9ydHMnXSA9IGNvbG9ycztcblxuY29sb3JzLnRoZW1lcyA9IHt9O1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBhbnNpU3R5bGVzID0gY29sb3JzLnN0eWxlcyA9IHJlcXVpcmUoJy4vc3R5bGVzJyk7XG52YXIgZGVmaW5lUHJvcHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbnZhciBuZXdMaW5lUmVnZXggPSBuZXcgUmVnRXhwKC9bXFxyXFxuXSsvZyk7XG5cbmNvbG9ycy5zdXBwb3J0c0NvbG9yID0gcmVxdWlyZSgnLi9zeXN0ZW0vc3VwcG9ydHMtY29sb3JzJykuc3VwcG9ydHNDb2xvcjtcblxuaWYgKHR5cGVvZiBjb2xvcnMuZW5hYmxlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29sb3JzLmVuYWJsZWQgPSBjb2xvcnMuc3VwcG9ydHNDb2xvcigpICE9PSBmYWxzZTtcbn1cblxuY29sb3JzLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBjb2xvcnMuZW5hYmxlZCA9IHRydWU7XG59O1xuXG5jb2xvcnMuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBjb2xvcnMuZW5hYmxlZCA9IGZhbHNlO1xufTtcblxuY29sb3JzLnN0cmlwQ29sb3JzID0gY29sb3JzLnN0cmlwID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiAoJycgKyBzdHIpLnJlcGxhY2UoL1xceDFCXFxbXFxkK20vZywgJycpO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG52YXIgc3R5bGl6ZSA9IGNvbG9ycy5zdHlsaXplID0gZnVuY3Rpb24gc3R5bGl6ZShzdHIsIHN0eWxlKSB7XG4gIGlmICghY29sb3JzLmVuYWJsZWQpIHtcbiAgICByZXR1cm4gc3RyKycnO1xuICB9XG5cbiAgcmV0dXJuIGFuc2lTdHlsZXNbc3R5bGVdLm9wZW4gKyBzdHIgKyBhbnNpU3R5bGVzW3N0eWxlXS5jbG9zZTtcbn07XG5cbnZhciBtYXRjaE9wZXJhdG9yc1JlID0gL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nO1xudmFyIGVzY2FwZVN0cmluZ1JlZ2V4cCA9IGZ1bmN0aW9uKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuICB9XG4gIHJldHVybiBzdHIucmVwbGFjZShtYXRjaE9wZXJhdG9yc1JlLCAnXFxcXCQmJyk7XG59O1xuXG5mdW5jdGlvbiBidWlsZChfc3R5bGVzKSB7XG4gIHZhciBidWlsZGVyID0gZnVuY3Rpb24gYnVpbGRlcigpIHtcbiAgICByZXR1cm4gYXBwbHlTdHlsZS5hcHBseShidWlsZGVyLCBhcmd1bWVudHMpO1xuICB9O1xuICBidWlsZGVyLl9zdHlsZXMgPSBfc3R5bGVzO1xuICAvLyBfX3Byb3RvX18gaXMgdXNlZCBiZWNhdXNlIHdlIG11c3QgcmV0dXJuIGEgZnVuY3Rpb24sIGJ1dCB0aGVyZSBpc1xuICAvLyBubyB3YXkgdG8gY3JlYXRlIGEgZnVuY3Rpb24gd2l0aCBhIGRpZmZlcmVudCBwcm90b3R5cGUuXG4gIGJ1aWxkZXIuX19wcm90b19fID0gcHJvdG87XG4gIHJldHVybiBidWlsZGVyO1xufVxuXG52YXIgc3R5bGVzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgcmV0ID0ge307XG4gIGFuc2lTdHlsZXMuZ3JleSA9IGFuc2lTdHlsZXMuZ3JheTtcbiAgT2JqZWN0LmtleXMoYW5zaVN0eWxlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBhbnNpU3R5bGVzW2tleV0uY2xvc2VSZSA9XG4gICAgICBuZXcgUmVnRXhwKGVzY2FwZVN0cmluZ1JlZ2V4cChhbnNpU3R5bGVzW2tleV0uY2xvc2UpLCAnZycpO1xuICAgIHJldFtrZXldID0ge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkKHRoaXMuX3N0eWxlcy5jb25jYXQoa2V5KSk7XG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufSkoKTtcblxudmFyIHByb3RvID0gZGVmaW5lUHJvcHMoZnVuY3Rpb24gY29sb3JzKCkge30sIHN0eWxlcyk7XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGUoKSB7XG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICB2YXIgc3RyID0gYXJncy5tYXAoZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKGFyZyAhPT0gdW5kZWZpbmVkICYmIGFyZy5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXRpbC5pbnNwZWN0KGFyZyk7XG4gICAgfVxuICB9KS5qb2luKCcgJyk7XG5cbiAgaWYgKCFjb2xvcnMuZW5hYmxlZCB8fCAhc3RyKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHZhciBuZXdMaW5lc1ByZXNlbnQgPSBzdHIuaW5kZXhPZignXFxuJykgIT0gLTE7XG5cbiAgdmFyIG5lc3RlZFN0eWxlcyA9IHRoaXMuX3N0eWxlcztcblxuICB2YXIgaSA9IG5lc3RlZFN0eWxlcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgY29kZSA9IGFuc2lTdHlsZXNbbmVzdGVkU3R5bGVzW2ldXTtcbiAgICBzdHIgPSBjb2RlLm9wZW4gKyBzdHIucmVwbGFjZShjb2RlLmNsb3NlUmUsIGNvZGUub3BlbikgKyBjb2RlLmNsb3NlO1xuICAgIGlmIChuZXdMaW5lc1ByZXNlbnQpIHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ld0xpbmVSZWdleCwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGNvZGUuY2xvc2UgKyBtYXRjaCArIGNvZGUub3BlbjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbmNvbG9ycy5zZXRUaGVtZSA9IGZ1bmN0aW9uKHRoZW1lKSB7XG4gIGlmICh0eXBlb2YgdGhlbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc29sZS5sb2coJ2NvbG9ycy5zZXRUaGVtZSBub3cgb25seSBhY2NlcHRzIGFuIG9iamVjdCwgbm90IGEgc3RyaW5nLiAgJyArXG4gICAgICAnSWYgeW91IGFyZSB0cnlpbmcgdG8gc2V0IGEgdGhlbWUgZnJvbSBhIGZpbGUsIGl0IGlzIG5vdyB5b3VyICh0aGUgJyArXG4gICAgICAnY2FsbGVyXFwncykgcmVzcG9uc2liaWxpdHkgdG8gcmVxdWlyZSB0aGUgZmlsZS4gIFRoZSBvbGQgc3ludGF4ICcgK1xuICAgICAgJ2xvb2tlZCBsaWtlIGNvbG9ycy5zZXRUaGVtZShfX2Rpcm5hbWUgKyAnICtcbiAgICAgICdcXCcvLi4vdGhlbWVzL2dlbmVyaWMtbG9nZ2luZy5qc1xcJyk7IFRoZSBuZXcgc3ludGF4IGxvb2tzIGxpa2UgJytcbiAgICAgICdjb2xvcnMuc2V0VGhlbWUocmVxdWlyZShfX2Rpcm5hbWUgKyAnICtcbiAgICAgICdcXCcvLi4vdGhlbWVzL2dlbmVyaWMtbG9nZ2luZy5qc1xcJykpOycpO1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKHZhciBzdHlsZSBpbiB0aGVtZSkge1xuICAgIChmdW5jdGlvbihzdHlsZSkge1xuICAgICAgY29sb3JzW3N0eWxlXSA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICBpZiAodHlwZW9mIHRoZW1lW3N0eWxlXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB2YXIgb3V0ID0gc3RyO1xuICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhlbWVbc3R5bGVdKSB7XG4gICAgICAgICAgICBvdXQgPSBjb2xvcnNbdGhlbWVbc3R5bGVdW2ldXShvdXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xvcnNbdGhlbWVbc3R5bGVdXShzdHIpO1xuICAgICAgfTtcbiAgICB9KShzdHlsZSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXRbbmFtZV0gPSB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYnVpbGQoW25hbWVdKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbnZhciBzZXF1ZW5jZXIgPSBmdW5jdGlvbiBzZXF1ZW5jZXIobWFwLCBzdHIpIHtcbiAgdmFyIGV4cGxvZGVkID0gc3RyLnNwbGl0KCcnKTtcbiAgZXhwbG9kZWQgPSBleHBsb2RlZC5tYXAobWFwKTtcbiAgcmV0dXJuIGV4cGxvZGVkLmpvaW4oJycpO1xufTtcblxuLy8gY3VzdG9tIGZvcm1hdHRlciBtZXRob2RzXG5jb2xvcnMudHJhcCA9IHJlcXVpcmUoJy4vY3VzdG9tL3RyYXAnKTtcbmNvbG9ycy56YWxnbyA9IHJlcXVpcmUoJy4vY3VzdG9tL3phbGdvJyk7XG5cbi8vIG1hcHNcbmNvbG9ycy5tYXBzID0ge307XG5jb2xvcnMubWFwcy5hbWVyaWNhID0gcmVxdWlyZSgnLi9tYXBzL2FtZXJpY2EnKShjb2xvcnMpO1xuY29sb3JzLm1hcHMuemVicmEgPSByZXF1aXJlKCcuL21hcHMvemVicmEnKShjb2xvcnMpO1xuY29sb3JzLm1hcHMucmFpbmJvdyA9IHJlcXVpcmUoJy4vbWFwcy9yYWluYm93JykoY29sb3JzKTtcbmNvbG9ycy5tYXBzLnJhbmRvbSA9IHJlcXVpcmUoJy4vbWFwcy9yYW5kb20nKShjb2xvcnMpO1xuXG5mb3IgKHZhciBtYXAgaW4gY29sb3JzLm1hcHMpIHtcbiAgKGZ1bmN0aW9uKG1hcCkge1xuICAgIGNvbG9yc1ttYXBdID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gc2VxdWVuY2VyKGNvbG9ycy5tYXBzW21hcF0sIHN0cik7XG4gICAgfTtcbiAgfSkobWFwKTtcbn1cblxuZGVmaW5lUHJvcHMoY29sb3JzLCBpbml0KCkpO1xuIiwibW9kdWxlWydleHBvcnRzJ10gPSBmdW5jdGlvbiBydW5UaGVUcmFwKHRleHQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB0ZXh0ID0gdGV4dCB8fCAnUnVuIHRoZSB0cmFwLCBkcm9wIHRoZSBiYXNzJztcbiAgdGV4dCA9IHRleHQuc3BsaXQoJycpO1xuICB2YXIgdHJhcCA9IHtcbiAgICBhOiBbJ1xcdTAwNDAnLCAnXFx1MDEwNCcsICdcXHUwMjNhJywgJ1xcdTAyNDUnLCAnXFx1MDM5NCcsICdcXHUwMzliJywgJ1xcdTA0MTQnXSxcbiAgICBiOiBbJ1xcdTAwZGYnLCAnXFx1MDE4MScsICdcXHUwMjQzJywgJ1xcdTAyNmUnLCAnXFx1MDNiMicsICdcXHUwZTNmJ10sXG4gICAgYzogWydcXHUwMGE5JywgJ1xcdTAyM2InLCAnXFx1MDNmZSddLFxuICAgIGQ6IFsnXFx1MDBkMCcsICdcXHUwMThhJywgJ1xcdTA1MDAnLCAnXFx1MDUwMScsICdcXHUwNTAyJywgJ1xcdTA1MDMnXSxcbiAgICBlOiBbJ1xcdTAwY2InLCAnXFx1MDExNScsICdcXHUwMThlJywgJ1xcdTAyNTgnLCAnXFx1MDNhMycsICdcXHUwM2JlJywgJ1xcdTA0YmMnLFxuICAgICAgJ1xcdTBhNmMnXSxcbiAgICBmOiBbJ1xcdTA0ZmEnXSxcbiAgICBnOiBbJ1xcdTAyNjInXSxcbiAgICBoOiBbJ1xcdTAxMjYnLCAnXFx1MDE5NScsICdcXHUwNGEyJywgJ1xcdTA0YmEnLCAnXFx1MDRjNycsICdcXHUwNTBhJ10sXG4gICAgaTogWydcXHUwZjBmJ10sXG4gICAgajogWydcXHUwMTM0J10sXG4gICAgazogWydcXHUwMTM4JywgJ1xcdTA0YTAnLCAnXFx1MDRjMycsICdcXHUwNTFlJ10sXG4gICAgbDogWydcXHUwMTM5J10sXG4gICAgbTogWydcXHUwMjhkJywgJ1xcdTA0Y2QnLCAnXFx1MDRjZScsICdcXHUwNTIwJywgJ1xcdTA1MjEnLCAnXFx1MGQ2OSddLFxuICAgIG46IFsnXFx1MDBkMScsICdcXHUwMTRiJywgJ1xcdTAxOWQnLCAnXFx1MDM3NicsICdcXHUwM2EwJywgJ1xcdTA0OGEnXSxcbiAgICBvOiBbJ1xcdTAwZDgnLCAnXFx1MDBmNScsICdcXHUwMGY4JywgJ1xcdTAxZmUnLCAnXFx1MDI5OCcsICdcXHUwNDdhJywgJ1xcdTA1ZGQnLFxuICAgICAgJ1xcdTA2ZGQnLCAnXFx1MGU0ZiddLFxuICAgIHA6IFsnXFx1MDFmNycsICdcXHUwNDhlJ10sXG4gICAgcTogWydcXHUwOWNkJ10sXG4gICAgcjogWydcXHUwMGFlJywgJ1xcdTAxYTYnLCAnXFx1MDIxMCcsICdcXHUwMjRjJywgJ1xcdTAyODAnLCAnXFx1MDQyZiddLFxuICAgIHM6IFsnXFx1MDBhNycsICdcXHUwM2RlJywgJ1xcdTAzZGYnLCAnXFx1MDNlOCddLFxuICAgIHQ6IFsnXFx1MDE0MScsICdcXHUwMTY2JywgJ1xcdTAzNzMnXSxcbiAgICB1OiBbJ1xcdTAxYjEnLCAnXFx1MDU0ZCddLFxuICAgIHY6IFsnXFx1MDVkOCddLFxuICAgIHc6IFsnXFx1MDQyOCcsICdcXHUwNDYwJywgJ1xcdTA0N2MnLCAnXFx1MGQ3MCddLFxuICAgIHg6IFsnXFx1MDRiMicsICdcXHUwNGZlJywgJ1xcdTA0ZmMnLCAnXFx1MDRmZCddLFxuICAgIHk6IFsnXFx1MDBhNScsICdcXHUwNGIwJywgJ1xcdTA0Y2InXSxcbiAgICB6OiBbJ1xcdTAxYjUnLCAnXFx1MDI0MCddLFxuICB9O1xuICB0ZXh0LmZvckVhY2goZnVuY3Rpb24oYykge1xuICAgIGMgPSBjLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGNoYXJzID0gdHJhcFtjXSB8fCBbJyAnXTtcbiAgICB2YXIgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzLmxlbmd0aCk7XG4gICAgaWYgKHR5cGVvZiB0cmFwW2NdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0ICs9IHRyYXBbY11bcmFuZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCArPSBjO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gcGxlYXNlIG5vXG5tb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uIHphbGdvKHRleHQsIG9wdGlvbnMpIHtcbiAgdGV4dCA9IHRleHQgfHwgJyAgIGhlIGlzIGhlcmUgICAnO1xuICB2YXIgc291bCA9IHtcbiAgICAndXAnOiBbXG4gICAgICAnzI0nLCAnzI4nLCAnzIQnLCAnzIUnLFxuICAgICAgJ8y/JywgJ8yRJywgJ8yGJywgJ8yQJyxcbiAgICAgICfNkicsICfNlycsICfNkScsICfMhycsXG4gICAgICAnzIgnLCAnzIonLCAnzYInLCAnzJMnLFxuICAgICAgJ8yIJywgJ82KJywgJ82LJywgJ82MJyxcbiAgICAgICfMgycsICfMgicsICfMjCcsICfNkCcsXG4gICAgICAnzIAnLCAnzIEnLCAnzIsnLCAnzI8nLFxuICAgICAgJ8ySJywgJ8yTJywgJ8yUJywgJ8y9JyxcbiAgICAgICfMiScsICfNoycsICfNpCcsICfNpScsXG4gICAgICAnzaYnLCAnzacnLCAnzagnLCAnzaknLFxuICAgICAgJ82qJywgJ82rJywgJ82sJywgJ82tJyxcbiAgICAgICfNricsICfNrycsICfMvicsICfNmycsXG4gICAgICAnzYYnLCAnzJonLFxuICAgIF0sXG4gICAgJ2Rvd24nOiBbXG4gICAgICAnzJYnLCAnzJcnLCAnzJgnLCAnzJknLFxuICAgICAgJ8ycJywgJ8ydJywgJ8yeJywgJ8yfJyxcbiAgICAgICfMoCcsICfMpCcsICfMpScsICfMpicsXG4gICAgICAnzKknLCAnzKonLCAnzKsnLCAnzKwnLFxuICAgICAgJ8ytJywgJ8yuJywgJ8yvJywgJ8ywJyxcbiAgICAgICfMsScsICfMsicsICfMsycsICfMuScsXG4gICAgICAnzLonLCAnzLsnLCAnzLwnLCAnzYUnLFxuICAgICAgJ82HJywgJ82IJywgJ82JJywgJ82NJyxcbiAgICAgICfNjicsICfNkycsICfNlCcsICfNlScsXG4gICAgICAnzZYnLCAnzZknLCAnzZonLCAnzKMnLFxuICAgIF0sXG4gICAgJ21pZCc6IFtcbiAgICAgICfMlScsICfMmycsICfMgCcsICfMgScsXG4gICAgICAnzZgnLCAnzKEnLCAnzKInLCAnzKcnLFxuICAgICAgJ8yoJywgJ8y0JywgJ8y1JywgJ8y2JyxcbiAgICAgICfNnCcsICfNnScsICfNnicsXG4gICAgICAnzZ8nLCAnzaAnLCAnzaInLCAnzLgnLFxuICAgICAgJ8y3JywgJ82hJywgJyDSiScsXG4gICAgXSxcbiAgfTtcbiAgdmFyIGFsbCA9IFtdLmNvbmNhdChzb3VsLnVwLCBzb3VsLmRvd24sIHNvdWwubWlkKTtcblxuICBmdW5jdGlvbiByYW5kb21OdW1iZXIocmFuZ2UpIHtcbiAgICB2YXIgciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlKTtcbiAgICByZXR1cm4gcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ2hhcihjaGFyYWN0ZXIpIHtcbiAgICB2YXIgYm9vbCA9IGZhbHNlO1xuICAgIGFsbC5maWx0ZXIoZnVuY3Rpb24oaSkge1xuICAgICAgYm9vbCA9IChpID09PSBjaGFyYWN0ZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBib29sO1xuICB9XG5cblxuICBmdW5jdGlvbiBoZUNvbWVzKHRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgdmFyIGNvdW50cztcbiAgICB2YXIgbDtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zWyd1cCddID1cbiAgICAgIHR5cGVvZiBvcHRpb25zWyd1cCddICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnNbJ3VwJ10gOiB0cnVlO1xuICAgIG9wdGlvbnNbJ21pZCddID1cbiAgICAgIHR5cGVvZiBvcHRpb25zWydtaWQnXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWydtaWQnXSA6IHRydWU7XG4gICAgb3B0aW9uc1snZG93biddID1cbiAgICAgIHR5cGVvZiBvcHRpb25zWydkb3duJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1snZG93biddIDogdHJ1ZTtcbiAgICBvcHRpb25zWydzaXplJ10gPVxuICAgICAgdHlwZW9mIG9wdGlvbnNbJ3NpemUnXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWydzaXplJ10gOiAnbWF4aSc7XG4gICAgdGV4dCA9IHRleHQuc3BsaXQoJycpO1xuICAgIGZvciAobCBpbiB0ZXh0KSB7XG4gICAgICBpZiAoaXNDaGFyKGwpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgdGV4dFtsXTtcbiAgICAgIGNvdW50cyA9IHsndXAnOiAwLCAnZG93bic6IDAsICdtaWQnOiAwfTtcbiAgICAgIHN3aXRjaCAob3B0aW9ucy5zaXplKSB7XG4gICAgICAgIGNhc2UgJ21pbmknOlxuICAgICAgICAgIGNvdW50cy51cCA9IHJhbmRvbU51bWJlcig4KTtcbiAgICAgICAgICBjb3VudHMubWlkID0gcmFuZG9tTnVtYmVyKDIpO1xuICAgICAgICAgIGNvdW50cy5kb3duID0gcmFuZG9tTnVtYmVyKDgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYXhpJzpcbiAgICAgICAgICBjb3VudHMudXAgPSByYW5kb21OdW1iZXIoMTYpICsgMztcbiAgICAgICAgICBjb3VudHMubWlkID0gcmFuZG9tTnVtYmVyKDQpICsgMTtcbiAgICAgICAgICBjb3VudHMuZG93biA9IHJhbmRvbU51bWJlcig2NCkgKyAzO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvdW50cy51cCA9IHJhbmRvbU51bWJlcig4KSArIDE7XG4gICAgICAgICAgY291bnRzLm1pZCA9IHJhbmRvbU51bWJlcig2KSAvIDI7XG4gICAgICAgICAgY291bnRzLmRvd24gPSByYW5kb21OdW1iZXIoOCkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXJyID0gWyd1cCcsICdtaWQnLCAnZG93biddO1xuICAgICAgZm9yICh2YXIgZCBpbiBhcnIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyW2RdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBjb3VudHNbaW5kZXhdOyBpKyspIHtcbiAgICAgICAgICBpZiAob3B0aW9uc1tpbmRleF0pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHNvdWxbaW5kZXhdW3JhbmRvbU51bWJlcihzb3VsW2luZGV4XS5sZW5ndGgpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICAvLyBkb24ndCBzdW1tb24gaGltXG4gIHJldHVybiBoZUNvbWVzKHRleHQsIG9wdGlvbnMpO1xufTtcblxuIiwidmFyIGNvbG9ycyA9IHJlcXVpcmUoJy4vY29sb3JzJyk7XG5cbm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oKSB7XG4gIC8vXG4gIC8vIEV4dGVuZHMgcHJvdG90eXBlIG9mIG5hdGl2ZSBzdHJpbmcgb2JqZWN0IHRvIGFsbG93IGZvciBcImZvb1wiLnJlZCBzeW50YXhcbiAgLy9cbiAgdmFyIGFkZFByb3BlcnR5ID0gZnVuY3Rpb24oY29sb3IsIGZ1bmMpIHtcbiAgICBTdHJpbmcucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oY29sb3IsIGZ1bmMpO1xuICB9O1xuXG4gIGFkZFByb3BlcnR5KCdzdHJpcCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb2xvcnMuc3RyaXAodGhpcyk7XG4gIH0pO1xuXG4gIGFkZFByb3BlcnR5KCdzdHJpcENvbG9ycycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb2xvcnMuc3RyaXAodGhpcyk7XG4gIH0pO1xuXG4gIGFkZFByb3BlcnR5KCd0cmFwJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvbG9ycy50cmFwKHRoaXMpO1xuICB9KTtcblxuICBhZGRQcm9wZXJ0eSgnemFsZ28nLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29sb3JzLnphbGdvKHRoaXMpO1xuICB9KTtcblxuICBhZGRQcm9wZXJ0eSgnemVicmEnLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29sb3JzLnplYnJhKHRoaXMpO1xuICB9KTtcblxuICBhZGRQcm9wZXJ0eSgncmFpbmJvdycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb2xvcnMucmFpbmJvdyh0aGlzKTtcbiAgfSk7XG5cbiAgYWRkUHJvcGVydHkoJ3JhbmRvbScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb2xvcnMucmFuZG9tKHRoaXMpO1xuICB9KTtcblxuICBhZGRQcm9wZXJ0eSgnYW1lcmljYScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb2xvcnMuYW1lcmljYSh0aGlzKTtcbiAgfSk7XG5cbiAgLy9cbiAgLy8gSXRlcmF0ZSB0aHJvdWdoIGFsbCBkZWZhdWx0IHN0eWxlcyBhbmQgY29sb3JzXG4gIC8vXG4gIHZhciB4ID0gT2JqZWN0LmtleXMoY29sb3JzLnN0eWxlcyk7XG4gIHguZm9yRWFjaChmdW5jdGlvbihzdHlsZSkge1xuICAgIGFkZFByb3BlcnR5KHN0eWxlLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBjb2xvcnMuc3R5bGl6ZSh0aGlzLCBzdHlsZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFwcGx5VGhlbWUodGhlbWUpIHtcbiAgICAvL1xuICAgIC8vIFJlbWFyazogVGhpcyBpcyBhIGxpc3Qgb2YgbWV0aG9kcyB0aGF0IGV4aXN0XG4gICAgLy8gb24gU3RyaW5nIHRoYXQgeW91IHNob3VsZCBub3Qgb3ZlcndyaXRlLlxuICAgIC8vXG4gICAgdmFyIHN0cmluZ1Byb3RvdHlwZUJsYWNrbGlzdCA9IFtcbiAgICAgICdfX2RlZmluZUdldHRlcl9fJywgJ19fZGVmaW5lU2V0dGVyX18nLCAnX19sb29rdXBHZXR0ZXJfXycsXG4gICAgICAnX19sb29rdXBTZXR0ZXJfXycsICdjaGFyQXQnLCAnY29uc3RydWN0b3InLCAnaGFzT3duUHJvcGVydHknLFxuICAgICAgJ2lzUHJvdG90eXBlT2YnLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAndG9Mb2NhbGVTdHJpbmcnLCAndG9TdHJpbmcnLFxuICAgICAgJ3ZhbHVlT2YnLCAnY2hhckNvZGVBdCcsICdpbmRleE9mJywgJ2xhc3RJbmRleE9mJywgJ2xlbmd0aCcsXG4gICAgICAnbG9jYWxlQ29tcGFyZScsICdtYXRjaCcsICdyZXBlYXQnLCAncmVwbGFjZScsICdzZWFyY2gnLCAnc2xpY2UnLFxuICAgICAgJ3NwbGl0JywgJ3N1YnN0cmluZycsICd0b0xvY2FsZUxvd2VyQ2FzZScsICd0b0xvY2FsZVVwcGVyQ2FzZScsXG4gICAgICAndG9Mb3dlckNhc2UnLCAndG9VcHBlckNhc2UnLCAndHJpbScsICd0cmltTGVmdCcsICd0cmltUmlnaHQnLFxuICAgIF07XG5cbiAgICBPYmplY3Qua2V5cyh0aGVtZSkuZm9yRWFjaChmdW5jdGlvbihwcm9wKSB7XG4gICAgICBpZiAoc3RyaW5nUHJvdG90eXBlQmxhY2tsaXN0LmluZGV4T2YocHJvcCkgIT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3YXJuOiAnLnJlZCArICgnU3RyaW5nLnByb3RvdHlwZScgKyBwcm9wKS5tYWdlbnRhICtcbiAgICAgICAgICAnIGlzIHByb2JhYmx5IHNvbWV0aGluZyB5b3UgZG9uXFwndCB3YW50IHRvIG92ZXJyaWRlLiAgJyArXG4gICAgICAgICAgJ0lnbm9yaW5nIHN0eWxlIG5hbWUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YodGhlbWVbcHJvcF0pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbG9yc1twcm9wXSA9IGNvbG9yc1t0aGVtZVtwcm9wXV07XG4gICAgICAgICAgYWRkUHJvcGVydHkocHJvcCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sb3JzW3Byb3BdKHRoaXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciB0aGVtZVByb3BBcHBsaWNhdG9yID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gc3RyIHx8IHRoaXM7XG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHRoZW1lW3Byb3BdLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgIHJldCA9IGNvbG9yc1t0aGVtZVtwcm9wXVt0XV0ocmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBhZGRQcm9wZXJ0eShwcm9wLCB0aGVtZVByb3BBcHBsaWNhdG9yKTtcbiAgICAgICAgICBjb2xvcnNbcHJvcF0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVtZVByb3BBcHBsaWNhdG9yKHN0cik7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29sb3JzLnNldFRoZW1lID0gZnVuY3Rpb24odGhlbWUpIHtcbiAgICBpZiAodHlwZW9mIHRoZW1lID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc29sZS5sb2coJ2NvbG9ycy5zZXRUaGVtZSBub3cgb25seSBhY2NlcHRzIGFuIG9iamVjdCwgbm90IGEgc3RyaW5nLiAnICtcbiAgICAgICAgJ0lmIHlvdSBhcmUgdHJ5aW5nIHRvIHNldCBhIHRoZW1lIGZyb20gYSBmaWxlLCBpdCBpcyBub3cgeW91ciAodGhlICcgK1xuICAgICAgICAnY2FsbGVyXFwncykgcmVzcG9uc2liaWxpdHkgdG8gcmVxdWlyZSB0aGUgZmlsZS4gIFRoZSBvbGQgc3ludGF4ICcgK1xuICAgICAgICAnbG9va2VkIGxpa2UgY29sb3JzLnNldFRoZW1lKF9fZGlybmFtZSArICcgK1xuICAgICAgICAnXFwnLy4uL3RoZW1lcy9nZW5lcmljLWxvZ2dpbmcuanNcXCcpOyBUaGUgbmV3IHN5bnRheCBsb29rcyBsaWtlICcrXG4gICAgICAgICdjb2xvcnMuc2V0VGhlbWUocmVxdWlyZShfX2Rpcm5hbWUgKyAnICtcbiAgICAgICAgJ1xcJy8uLi90aGVtZXMvZ2VuZXJpYy1sb2dnaW5nLmpzXFwnKSk7Jyk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGx5VGhlbWUodGhlbWUpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJ2YXIgY29sb3JzID0gcmVxdWlyZSgnLi9jb2xvcnMnKTtcbm1vZHVsZVsnZXhwb3J0cyddID0gY29sb3JzO1xuXG4vLyBSZW1hcms6IEJ5IGRlZmF1bHQsIGNvbG9ycyB3aWxsIGFkZCBzdHlsZSBwcm9wZXJ0aWVzIHRvIFN0cmluZy5wcm90b3R5cGUuXG4vL1xuLy8gSWYgeW91IGRvbid0IHdpc2ggdG8gZXh0ZW5kIFN0cmluZy5wcm90b3R5cGUsIHlvdSBjYW4gZG8gdGhpcyBpbnN0ZWFkIGFuZFxuLy8gbmF0aXZlIFN0cmluZyB3aWxsIG5vdCBiZSB0b3VjaGVkOlxuLy9cbi8vICAgdmFyIGNvbG9ycyA9IHJlcXVpcmUoJ2NvbG9ycy9zYWZlKTtcbi8vICAgY29sb3JzLnJlZChcImZvb1wiKVxuLy9cbi8vXG5yZXF1aXJlKCcuL2V4dGVuZFN0cmluZ1Byb3RvdHlwZScpKCk7XG4iLCJtb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICByZXR1cm4gZnVuY3Rpb24obGV0dGVyLCBpLCBleHBsb2RlZCkge1xuICAgIGlmIChsZXR0ZXIgPT09ICcgJykgcmV0dXJuIGxldHRlcjtcbiAgICBzd2l0Y2ggKGklMykge1xuICAgICAgY2FzZSAwOiByZXR1cm4gY29sb3JzLnJlZChsZXR0ZXIpO1xuICAgICAgY2FzZSAxOiByZXR1cm4gY29sb3JzLndoaXRlKGxldHRlcik7XG4gICAgICBjYXNlIDI6IHJldHVybiBjb2xvcnMuYmx1ZShsZXR0ZXIpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJtb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICAvLyBSb1kgRyBCaVZcbiAgdmFyIHJhaW5ib3dDb2xvcnMgPSBbJ3JlZCcsICd5ZWxsb3cnLCAnZ3JlZW4nLCAnYmx1ZScsICdtYWdlbnRhJ107XG4gIHJldHVybiBmdW5jdGlvbihsZXR0ZXIsIGksIGV4cGxvZGVkKSB7XG4gICAgaWYgKGxldHRlciA9PT0gJyAnKSB7XG4gICAgICByZXR1cm4gbGV0dGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29sb3JzW3JhaW5ib3dDb2xvcnNbaSsrICUgcmFpbmJvd0NvbG9ycy5sZW5ndGhdXShsZXR0ZXIpO1xuICAgIH1cbiAgfTtcbn07XG5cbiIsIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIHZhciBhdmFpbGFibGUgPSBbJ3VuZGVybGluZScsICdpbnZlcnNlJywgJ2dyZXknLCAneWVsbG93JywgJ3JlZCcsICdncmVlbicsXG4gICAgJ2JsdWUnLCAnd2hpdGUnLCAnY3lhbicsICdtYWdlbnRhJ107XG4gIHJldHVybiBmdW5jdGlvbihsZXR0ZXIsIGksIGV4cGxvZGVkKSB7XG4gICAgcmV0dXJuIGxldHRlciA9PT0gJyAnID8gbGV0dGVyIDpcbiAgICAgIGNvbG9yc1tcbiAgICAgICAgICBhdmFpbGFibGVbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGF2YWlsYWJsZS5sZW5ndGggLSAyKSldXG4gICAgICBdKGxldHRlcik7XG4gIH07XG59O1xuIiwibW9kdWxlWydleHBvcnRzJ10gPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGxldHRlciwgaSwgZXhwbG9kZWQpIHtcbiAgICByZXR1cm4gaSAlIDIgPT09IDAgPyBsZXR0ZXIgOiBjb2xvcnMuaW52ZXJzZShsZXR0ZXIpO1xuICB9O1xufTtcbiIsIi8qXG5UaGUgTUlUIExpY2Vuc2UgKE1JVClcblxuQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG52YXIgc3R5bGVzID0ge307XG5tb2R1bGVbJ2V4cG9ydHMnXSA9IHN0eWxlcztcblxudmFyIGNvZGVzID0ge1xuICByZXNldDogWzAsIDBdLFxuXG4gIGJvbGQ6IFsxLCAyMl0sXG4gIGRpbTogWzIsIDIyXSxcbiAgaXRhbGljOiBbMywgMjNdLFxuICB1bmRlcmxpbmU6IFs0LCAyNF0sXG4gIGludmVyc2U6IFs3LCAyN10sXG4gIGhpZGRlbjogWzgsIDI4XSxcbiAgc3RyaWtldGhyb3VnaDogWzksIDI5XSxcblxuICBibGFjazogWzMwLCAzOV0sXG4gIHJlZDogWzMxLCAzOV0sXG4gIGdyZWVuOiBbMzIsIDM5XSxcbiAgeWVsbG93OiBbMzMsIDM5XSxcbiAgYmx1ZTogWzM0LCAzOV0sXG4gIG1hZ2VudGE6IFszNSwgMzldLFxuICBjeWFuOiBbMzYsIDM5XSxcbiAgd2hpdGU6IFszNywgMzldLFxuICBncmF5OiBbOTAsIDM5XSxcbiAgZ3JleTogWzkwLCAzOV0sXG5cbiAgYmdCbGFjazogWzQwLCA0OV0sXG4gIGJnUmVkOiBbNDEsIDQ5XSxcbiAgYmdHcmVlbjogWzQyLCA0OV0sXG4gIGJnWWVsbG93OiBbNDMsIDQ5XSxcbiAgYmdCbHVlOiBbNDQsIDQ5XSxcbiAgYmdNYWdlbnRhOiBbNDUsIDQ5XSxcbiAgYmdDeWFuOiBbNDYsIDQ5XSxcbiAgYmdXaGl0ZTogWzQ3LCA0OV0sXG5cbiAgLy8gbGVnYWN5IHN0eWxlcyBmb3IgY29sb3JzIHByZSB2MS4wLjBcbiAgYmxhY2tCRzogWzQwLCA0OV0sXG4gIHJlZEJHOiBbNDEsIDQ5XSxcbiAgZ3JlZW5CRzogWzQyLCA0OV0sXG4gIHllbGxvd0JHOiBbNDMsIDQ5XSxcbiAgYmx1ZUJHOiBbNDQsIDQ5XSxcbiAgbWFnZW50YUJHOiBbNDUsIDQ5XSxcbiAgY3lhbkJHOiBbNDYsIDQ5XSxcbiAgd2hpdGVCRzogWzQ3LCA0OV0sXG5cbn07XG5cbk9iamVjdC5rZXlzKGNvZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICB2YXIgdmFsID0gY29kZXNba2V5XTtcbiAgdmFyIHN0eWxlID0gc3R5bGVzW2tleV0gPSBbXTtcbiAgc3R5bGUub3BlbiA9ICdcXHUwMDFiWycgKyB2YWxbMF0gKyAnbSc7XG4gIHN0eWxlLmNsb3NlID0gJ1xcdTAwMWJbJyArIHZhbFsxXSArICdtJztcbn0pO1xuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgU2luZHJlIFNvcmh1cyA8c2luZHJlc29yaHVzQGdtYWlsLmNvbT4gKHNpbmRyZXNvcmh1cy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbnRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbnRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbnVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzXG5vZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG9cbnNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5TT0ZUV0FSRS5cbiovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbGFnLCBhcmd2KSB7XG4gIGFyZ3YgPSBhcmd2IHx8IHByb2Nlc3MuYXJndjtcblxuICB2YXIgdGVybWluYXRvclBvcyA9IGFyZ3YuaW5kZXhPZignLS0nKTtcbiAgdmFyIHByZWZpeCA9IC9eLXsxLDJ9Ly50ZXN0KGZsYWcpID8gJycgOiAnLS0nO1xuICB2YXIgcG9zID0gYXJndi5pbmRleE9mKHByZWZpeCArIGZsYWcpO1xuXG4gIHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zID09PSAtMSA/IHRydWUgOiBwb3MgPCB0ZXJtaW5hdG9yUG9zKTtcbn07XG4iLCIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgU2luZHJlIFNvcmh1cyA8c2luZHJlc29yaHVzQGdtYWlsLmNvbT4gKHNpbmRyZXNvcmh1cy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3MgPSByZXF1aXJlKCdvcycpO1xudmFyIGhhc0ZsYWcgPSByZXF1aXJlKCcuL2hhcy1mbGFnLmpzJyk7XG5cbnZhciBlbnYgPSBwcm9jZXNzLmVudjtcblxudmFyIGZvcmNlQ29sb3IgPSB2b2lkIDA7XG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fCBoYXNGbGFnKCduby1jb2xvcnMnKSB8fCBoYXNGbGFnKCdjb2xvcj1mYWxzZScpKSB7XG4gIGZvcmNlQ29sb3IgPSBmYWxzZTtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fCBoYXNGbGFnKCdjb2xvcnMnKSB8fCBoYXNGbGFnKCdjb2xvcj10cnVlJylcbiAgICAgICAgICAgfHwgaGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcbiAgZm9yY2VDb2xvciA9IHRydWU7XG59XG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcbiAgZm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDBcbiAgICB8fCBwYXJzZUludChlbnYuRk9SQ0VfQ09MT1IsIDEwKSAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcbiAgaWYgKGxldmVsID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZXZlbDogbGV2ZWwsXG4gICAgaGFzQmFzaWM6IHRydWUsXG4gICAgaGFzMjU2OiBsZXZlbCA+PSAyLFxuICAgIGhhczE2bTogbGV2ZWwgPj0gMyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNDb2xvcihzdHJlYW0pIHtcbiAgaWYgKGZvcmNlQ29sb3IgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAoaGFzRmxhZygnY29sb3I9MTZtJykgfHwgaGFzRmxhZygnY29sb3I9ZnVsbCcpXG4gICAgICB8fCBoYXNGbGFnKCdjb2xvcj10cnVlY29sb3InKSkge1xuICAgIHJldHVybiAzO1xuICB9XG5cbiAgaWYgKGhhc0ZsYWcoJ2NvbG9yPTI1NicpKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cblxuICBpZiAoc3RyZWFtICYmICFzdHJlYW0uaXNUVFkgJiYgZm9yY2VDb2xvciAhPT0gdHJ1ZSkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIG1pbiA9IGZvcmNlQ29sb3IgPyAxIDogMDtcblxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIC8vIE5vZGUuanMgNy41LjAgaXMgdGhlIGZpcnN0IHZlcnNpb24gb2YgTm9kZS5qcyB0byBpbmNsdWRlIGEgcGF0Y2ggdG9cbiAgICAvLyBsaWJ1diB0aGF0IGVuYWJsZXMgMjU2IGNvbG9yIG91dHB1dCBvbiBXaW5kb3dzLiBBbnl0aGluZyBlYXJsaWVyIGFuZCBpdFxuICAgIC8vIHdvbid0IHdvcmsuIEhvd2V2ZXIsIGhlcmUgd2UgdGFyZ2V0IE5vZGUuanMgOCBhdCBtaW5pbXVtIGFzIGl0IGlzIGFuIExUU1xuICAgIC8vIHJlbGVhc2UsIGFuZCBOb2RlLmpzIDcgaXMgbm90LiBXaW5kb3dzIDEwIGJ1aWxkIDEwNTg2IGlzIHRoZSBmaXJzdFxuICAgIC8vIFdpbmRvd3MgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDI1NiBjb2xvcnMuIFdpbmRvd3MgMTAgYnVpbGQgMTQ5MzEgaXMgdGhlXG4gICAgLy8gZmlyc3QgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDE2bS9UcnVlQ29sb3IuXG4gICAgdmFyIG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuICAgIGlmIChOdW1iZXIocHJvY2Vzcy52ZXJzaW9ucy5ub2RlLnNwbGl0KCcuJylbMF0pID49IDhcbiAgICAgICAgJiYgTnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiYgTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTA1ODYpIHtcbiAgICAgIHJldHVybiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxNDkzMSA/IDMgOiAyO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKCdDSScgaW4gZW52KSB7XG4gICAgaWYgKFsnVFJBVklTJywgJ0NJUkNMRUNJJywgJ0FQUFZFWU9SJywgJ0dJVExBQl9DSSddLnNvbWUoZnVuY3Rpb24oc2lnbikge1xuICAgICAgcmV0dXJuIHNpZ24gaW4gZW52O1xuICAgIH0pIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWluO1xuICB9XG5cbiAgaWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcbiAgICByZXR1cm4gKC9eKDlcXC4oMCpbMS05XVxcZCopXFwufFxcZHsyLH1cXC4pLy50ZXN0KGVudi5URUFNQ0lUWV9WRVJTSU9OKSA/IDEgOiAwXG4gICAgKTtcbiAgfVxuXG4gIGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcbiAgICB2YXIgdmVyc2lvbiA9IHBhcnNlSW50KChlbnYuVEVSTV9QUk9HUkFNX1ZFUlNJT04gfHwgJycpLnNwbGl0KCcuJylbMF0sIDEwKTtcblxuICAgIHN3aXRjaCAoZW52LlRFUk1fUFJPR1JBTSkge1xuICAgICAgY2FzZSAnaVRlcm0uYXBwJzpcbiAgICAgICAgcmV0dXJuIHZlcnNpb24gPj0gMyA/IDMgOiAyO1xuICAgICAgY2FzZSAnSHlwZXInOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgJ0FwcGxlX1Rlcm1pbmFsJzpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICAvLyBObyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgaWYgKC8tMjU2KGNvbG9yKT8kL2kudGVzdChlbnYuVEVSTSkpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuXG4gIGlmICgvXnNjcmVlbnxeeHRlcm18XnZ0MTAwfF5yeHZ0fGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChlbnYuVEVSTSkpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmICgnQ09MT1JURVJNJyBpbiBlbnYpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmIChlbnYuVEVSTSA9PT0gJ2R1bWInKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIHJldHVybiBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnRMZXZlbChzdHJlYW0pIHtcbiAgdmFyIGxldmVsID0gc3VwcG9ydHNDb2xvcihzdHJlYW0pO1xuICByZXR1cm4gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3VwcG9ydHNDb2xvcjogZ2V0U3VwcG9ydExldmVsLFxuICBzdGRvdXQ6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZG91dCksXG4gIHN0ZGVycjogZ2V0U3VwcG9ydExldmVsKHByb2Nlc3Muc3RkZXJyKSxcbn07XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIHlvZGEgKi9cbm1vZHVsZS5leHBvcnRzID0geCA9PiB7XG5cdGlmIChOdW1iZXIuaXNOYU4oeCkpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBjb2RlIHBvaW50cyBhcmUgZGVyaXZlZCBmcm9tOlxuXHQvLyBodHRwOi8vd3d3LnVuaXgub3JnL1B1YmxpYy9VTklEQVRBL0Vhc3RBc2lhbldpZHRoLnR4dFxuXHRpZiAoXG5cdFx0eCA+PSAweDExMDAgJiYgKFxuXHRcdFx0eCA8PSAweDExNWYgfHwgIC8vIEhhbmd1bCBKYW1vXG5cdFx0XHR4ID09PSAweDIzMjkgfHwgLy8gTEVGVC1QT0lOVElORyBBTkdMRSBCUkFDS0VUXG5cdFx0XHR4ID09PSAweDIzMmEgfHwgLy8gUklHSFQtUE9JTlRJTkcgQU5HTEUgQlJBQ0tFVFxuXHRcdFx0Ly8gQ0pLIFJhZGljYWxzIFN1cHBsZW1lbnQgLi4gRW5jbG9zZWQgQ0pLIExldHRlcnMgYW5kIE1vbnRoc1xuXHRcdFx0KDB4MmU4MCA8PSB4ICYmIHggPD0gMHgzMjQ3ICYmIHggIT09IDB4MzAzZikgfHxcblx0XHRcdC8vIEVuY2xvc2VkIENKSyBMZXR0ZXJzIGFuZCBNb250aHMgLi4gQ0pLIFVuaWZpZWQgSWRlb2dyYXBocyBFeHRlbnNpb24gQVxuXHRcdFx0KDB4MzI1MCA8PSB4ICYmIHggPD0gMHg0ZGJmKSB8fFxuXHRcdFx0Ly8gQ0pLIFVuaWZpZWQgSWRlb2dyYXBocyAuLiBZaSBSYWRpY2Fsc1xuXHRcdFx0KDB4NGUwMCA8PSB4ICYmIHggPD0gMHhhNGM2KSB8fFxuXHRcdFx0Ly8gSGFuZ3VsIEphbW8gRXh0ZW5kZWQtQVxuXHRcdFx0KDB4YTk2MCA8PSB4ICYmIHggPD0gMHhhOTdjKSB8fFxuXHRcdFx0Ly8gSGFuZ3VsIFN5bGxhYmxlc1xuXHRcdFx0KDB4YWMwMCA8PSB4ICYmIHggPD0gMHhkN2EzKSB8fFxuXHRcdFx0Ly8gQ0pLIENvbXBhdGliaWxpdHkgSWRlb2dyYXBoc1xuXHRcdFx0KDB4ZjkwMCA8PSB4ICYmIHggPD0gMHhmYWZmKSB8fFxuXHRcdFx0Ly8gVmVydGljYWwgRm9ybXNcblx0XHRcdCgweGZlMTAgPD0geCAmJiB4IDw9IDB4ZmUxOSkgfHxcblx0XHRcdC8vIENKSyBDb21wYXRpYmlsaXR5IEZvcm1zIC4uIFNtYWxsIEZvcm0gVmFyaWFudHNcblx0XHRcdCgweGZlMzAgPD0geCAmJiB4IDw9IDB4ZmU2YikgfHxcblx0XHRcdC8vIEhhbGZ3aWR0aCBhbmQgRnVsbHdpZHRoIEZvcm1zXG5cdFx0XHQoMHhmZjAxIDw9IHggJiYgeCA8PSAweGZmNjApIHx8XG5cdFx0XHQoMHhmZmUwIDw9IHggJiYgeCA8PSAweGZmZTYpIHx8XG5cdFx0XHQvLyBLYW5hIFN1cHBsZW1lbnRcblx0XHRcdCgweDFiMDAwIDw9IHggJiYgeCA8PSAweDFiMDAxKSB8fFxuXHRcdFx0Ly8gRW5jbG9zZWQgSWRlb2dyYXBoaWMgU3VwcGxlbWVudFxuXHRcdFx0KDB4MWYyMDAgPD0geCAmJiB4IDw9IDB4MWYyNTEpIHx8XG5cdFx0XHQvLyBDSksgVW5pZmllZCBJZGVvZ3JhcGhzIEV4dGVuc2lvbiBCIC4uIFRlcnRpYXJ5IElkZW9ncmFwaGljIFBsYW5lXG5cdFx0XHQoMHgyMDAwMCA8PSB4ICYmIHggPD0gMHgzZmZmZClcblx0XHQpXG5cdCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcbiIsImV4cG9ydHMuZW5kaWFubmVzcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdMRScgfTtcblxuZXhwb3J0cy5ob3N0bmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWVcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLmxvYWRhdmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9O1xuXG5leHBvcnRzLnVwdGltZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDAgfTtcblxuZXhwb3J0cy5mcmVlbWVtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xufTtcblxuZXhwb3J0cy50b3RhbG1lbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbn07XG5cbmV4cG9ydHMuY3B1cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH07XG5cbmV4cG9ydHMudHlwZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdCcm93c2VyJyB9O1xuXG5leHBvcnRzLnJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy5uZXR3b3JrSW50ZXJmYWNlc1xuPSBleHBvcnRzLmdldE5ldHdvcmtJbnRlcmZhY2VzXG49IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHt9IH07XG5cbmV4cG9ydHMuYXJjaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdqYXZhc2NyaXB0JyB9O1xuXG5leHBvcnRzLnBsYXRmb3JtID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ2Jyb3dzZXInIH07XG5cbmV4cG9ydHMudG1wZGlyID0gZXhwb3J0cy50bXBEaXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcvdG1wJztcbn07XG5cbmV4cG9ydHMuRU9MID0gJ1xcbic7XG5cbmV4cG9ydHMuaG9tZWRpciA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuICcvJ1xufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIndXNlIHN0cmljdCc7XG5jb25zdCBzdHJpcEFuc2kgPSByZXF1aXJlKCdzdHJpcC1hbnNpJyk7XG5jb25zdCBpc0Z1bGx3aWR0aENvZGVQb2ludCA9IHJlcXVpcmUoJ2lzLWZ1bGx3aWR0aC1jb2RlLXBvaW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyID0+IHtcblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnIHx8IHN0ci5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHN0ciA9IHN0cmlwQW5zaShzdHIpO1xuXG5cdGxldCB3aWR0aCA9IDA7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBjb2RlID0gc3RyLmNvZGVQb2ludEF0KGkpO1xuXG5cdFx0Ly8gSWdub3JlIGNvbnRyb2wgY2hhcmFjdGVyc1xuXHRcdGlmIChjb2RlIDw9IDB4MUYgfHwgKGNvZGUgPj0gMHg3RiAmJiBjb2RlIDw9IDB4OUYpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgY29tYmluaW5nIGNoYXJhY3RlcnNcblx0XHRpZiAoY29kZSA+PSAweDMwMCAmJiBjb2RlIDw9IDB4MzZGKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBTdXJyb2dhdGVzXG5cdFx0aWYgKGNvZGUgPiAweEZGRkYpIHtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHR3aWR0aCArPSBpc0Z1bGx3aWR0aENvZGVQb2ludChjb2RlKSA/IDIgOiAxO1xuXHR9XG5cblx0cmV0dXJuIHdpZHRoO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG5cdGNvbnN0IHBhdHRlcm4gPSBbXG5cdFx0J1tcXFxcdTAwMUJcXFxcdTAwOUJdW1tcXFxcXSgpIzs/XSooPzooPzooPzpbYS16QS1aXFxcXGRdKig/OjtbYS16QS1aXFxcXGRdKikqKT9cXFxcdTAwMDcpJyxcblx0XHQnKD86KD86XFxcXGR7MSw0fSg/OjtcXFxcZHswLDR9KSopP1tcXFxcZEEtUFJaY2YtbnRxcnk9Pjx+XSkpJ1xuXHRdLmpvaW4oJ3wnKTtcblxuXHRyZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLCAnZycpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGFuc2lSZWdleCA9IHJlcXVpcmUoJ2Fuc2ktcmVnZXgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnB1dCA9PiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gaW5wdXQucmVwbGFjZShhbnNpUmVnZXgoKSwgJycpIDogaW5wdXQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcImNsaS1wcm9ncmVzc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJjYXVzYWwtbmV0LnV0aWxzXCIsIFwiY2xpLXByb2dyZXNzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBjYXVzYWxOZXQvbG9nXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiY2F1c2FsLW5ldC51dGlsc1wiKSwgcmVxdWlyZShcImNsaS1wcm9ncmVzc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQGNhdXNhbE5ldC9sb2dcIl0gPSBmYWN0b3J5KHJvb3RbXCJjYXVzYWwtbmV0LnV0aWxzXCJdLCByb290W1wiY2xpLXByb2dyZXNzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF91dGlsc19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NsaV9wcm9ncmVzc19fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL3NyYy9iYXNlTG9nZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvYmFzZUxvZ2dlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZWQgdGhlIFxuICogQGNsYXNzIEJhc2VMb2dcbiAqL1xuY2xhc3MgQmFzZUxvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuQWNjZXB0ZWRMZXZlbHMgPSB7XG4gICAgICBkZWJ1ZzogMCxcbiAgICAgIGxvZzogMSxcbiAgICAgIHdhcm5pbmc6IDIsXG4gICAgICBlcnJvcjogM1xuICAgIH07XG4gICAgdGhpcy5yQWNjZXB0ZWRMZXZlbHMgPSB7XG4gICAgICAwOiAnZGVidWcnLFxuICAgICAgMTogJ2xvZycsXG4gICAgICAyOiAnd2FybmluZycsXG4gICAgICAzOiAnZXJyb3InXG4gICAgfTtcbiAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1snZGVidWcnXTtcbiAgfVxuXG4gIHNldCBMZXZlbChsZXZlbCkge1xuICAgIGlmICh0aGlzLkFjY2VwdGVkTGV2ZWxzW2xldmVsXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmxldmVsID0gdGhpcy5BY2NlcHRlZExldmVsc1tsZXZlbF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKGAke2xldmVsfSBtdXN0IGJlIG9uZSBvZiAke09iamVjdC5rZXlzKHRoaXMuQWNjZXB0ZWRMZXZlbHMpfWApO1xuICAgIH1cbiAgfVxuXG4gIGdldCBMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5yQWNjZXB0ZWRMZXZlbHNbdGhpcy5sZXZlbF07XG4gIH1cblxuICBjb25uZWN0KCkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGxvZyhtZXNzYWdlKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBncm91cEJlZ2luKG5hbWUpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBncm91cEVuZCgpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxuICBwcm9ncmVzc0JlZ2luKHJhbmdlKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2ltcGxlbWVudCByZXF1aXJlZCcpO1xuICB9XG5cbiAgcHJvZ3Jlc3NVcGRhdGUobWVzc2FnZSkge1xuICAgIHRocm93IEVycm9yKCdpbXBsZW1lbnQgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIHByb2dyZXNzRW5kKG1lc3NhZ2UpIHtcbiAgICB0aHJvdyBFcnJvcignaW1wbGVtZW50IHJlcXVpcmVkJyk7XG4gIH1cblxufVxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKEJhc2VMb2dnZXIpO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiB0ZXJtTG9nZ2VyLCBMb2dnZXJNaXhpbnMsIEJhc2VMb2dnZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3Rlcm1Mb2dnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vdGVybUxvZ2dlciAqLyBcIi4vc3JjL3Rlcm1Mb2dnZXIuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJ0ZXJtTG9nZ2VyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3Rlcm1Mb2dnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2xvZ2dlcl9taXhpbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbG9nZ2VyLm1peGlucyAqLyBcIi4vc3JjL2xvZ2dlci5taXhpbnMuanNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJMb2dnZXJNaXhpbnNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbG9nZ2VyX21peGluc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfYmFzZUxvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlTG9nZ2VyICovIFwiLi9zcmMvYmFzZUxvZ2dlci5qc1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkJhc2VMb2dnZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfYmFzZUxvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbG9nZ2VyLm1peGlucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2xvZ2dlci5taXhpbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9iYXNlTG9nZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2Jhc2VMb2dnZXIgKi8gXCIuL3NyYy9iYXNlTG9nZ2VyLmpzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNhdXNhbC1uZXQudXRpbHMgKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18pO1xuXG5cblxuY29uc3QgTG9nZ2VyTWl4aW5zID0gQmFzZWRDbGFzcyA9PiBjbGFzcyBleHRlbmRzIEJhc2VkQ2xhc3Mge1xuICBzZXQgTG9nZ2VyKGxvZ2dlcikge1xuICAgIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImFzc2VydFwiXS5iZUluc3RhbmNlT2YobG9nZ2VyLCBfYmFzZUxvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSk7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gIH1cblxuICBnZXQgTG9nZ2VyKCkge1xuICAgIGlmICghdGhpcy5sb2dnZXIpIHtcbiAgICAgIHRocm93IEVycm9yKCdsb2dnZXIgaXMgbm90IHNldCcpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxvZ2dlcjtcbiAgfVxuXG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKExvZ2dlck1peGlucyk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3ByZXR0eUpzb24uanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wcmV0dHlKc29uLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gSnNvblZpZXc7IH0pO1xuLy8gb3JpZ2luIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbHVjeWdpbGJlcnQvanNvbi1kaXNwbGF5L2Jsb2IvbWFzdGVyL2pzb24tZGlzcGxheS5qc1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IEx1Y3kgR2lsYmVydFxuY2xhc3MgSnNvblZpZXcge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhdGljIEpTT05EaXNwbGF5KGpzb24sIG9wZW5MZXZlbHNBcmcsIHN0eWxlT3B0aW9uc0FyZykge1xuICAgIHZhciBERUZBVUxUX1NUWUxFX09QVElPTlMgPSB7XG4gICAgICByb290OiB7XG4gICAgICAgIHRhZzogJ3ByZScsXG4gICAgICAgIHN0eWxlOiAncGFkZGluZzogNXB4OyBmb250LXNpemU6IDFyZW07J1xuICAgICAgfSxcbiAgICAgIHRpdGxlQ29udGFpbmVyOiB7XG4gICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgIHN0eWxlOiAnbWFyZ2luLWJvdHRvbTogM3B4OydcbiAgICAgIH0sXG4gICAgICB0aXRsZToge1xuICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgc3R5bGU6ICdjdXJzb3I6IHBvaW50ZXI7J1xuICAgICAgfSxcbiAgICAgIHRpdGxlVGV4dDoge1xuICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgc3R5bGU6ICcnXG4gICAgICB9LFxuICAgICAgb3BlbkJ1dHRvbjoge1xuICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgc3R5bGU6ICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IG1hcmdpbjogMHB4IDdweCAwcHggMnB4OyBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7ICcgKyAnYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50OyBib3JkZXItbGVmdDogNXB4IHNvbGlkIGJsYWNrOydcbiAgICAgIH0sXG4gICAgICBjb250ZW50c0NvbnRhaW5lcjoge1xuICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICBzdHlsZTogJ3BhZGRpbmctbGVmdDogMThweDsnXG4gICAgICB9LFxuICAgICAga2V5VmFsdWVQYWlyOiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2Rpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiAycHg7J1xuICAgICAgfSxcbiAgICAgIGtleToge1xuICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgc3R5bGU6ICdjb2xvcjogZGFya2JsdWU7J1xuICAgICAgfSxcbiAgICAgIHN5bWJvbFZhbHVlOiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2NvbG9yOiBkYXJrZ3JlZW47J1xuICAgICAgfSxcbiAgICAgIHN0cmluZ1ZhbHVlOiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2NvbG9yOiBjcmltc29uOydcbiAgICAgIH0sXG4gICAgICBudW1iZXJWYWx1ZToge1xuICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgc3R5bGU6ICdjb2xvcjogYmx1ZTsnXG4gICAgICB9LFxuICAgICAgYm9vbGVhblZhbHVlOiB7XG4gICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICBzdHlsZTogJ2NvbG9yOiBibHVlOydcbiAgICAgIH0sXG4gICAgICBudWxsVmFsdWU6IHtcbiAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgIHN0eWxlOiAnY29sb3I6IGJsdWU7J1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9wZW5MZXZlbHMgPSBpc05hTihwYXJzZUludChvcGVuTGV2ZWxzQXJnKSkgPyBJbmZpbml0eSA6IHBhcnNlSW50KG9wZW5MZXZlbHNBcmcpO1xuICAgIHZhciBzdHlsZU9wdGlvbnMgPSB0eXBlb2Ygc3R5bGVPcHRpb25zQXJnID09PSAnb2JqZWN0JyA/IG1lcmdlU3R5bGVPcHRpb25zKERFRkFVTFRfU1RZTEVfT1BUSU9OUywgc3R5bGVPcHRpb25zQXJnKSA6IERFRkFVTFRfU1RZTEVfT1BUSU9OUztcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmFzc2lnbiAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICBPYmplY3QuYXNzaWduID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0byA9IE9iamVjdCh0YXJnZXQpO1xuXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMTsgaW5kZXggPCBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgdmFyIG5leHRTb3VyY2UgPSBhcmd1bWVudHNbaW5kZXhdO1xuXG4gICAgICAgICAgaWYgKG5leHRTb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dFNvdXJjZSwgbmV4dEtleSkpIHtcbiAgICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdG87XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMucm9vdC50YWcpO1xuICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gc3R5bGVPcHRpb25zLnJvb3Quc3R5bGU7XG5cbiAgICAgIGlmIChqc29uID09PSBudWxsIHx8IGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgdm9pZEVsZW1lbnQgPSBnZXRWYWx1ZShudWxsKTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh2b2lkRWxlbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKGpzb24gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHZhciBkYXRlRWxlbWVudCA9IGdldFZhbHVlKGpzb24udG9JU09TdHJpbmcoKSk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YganNvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIG5vbkV4cGFuZGFibGVFbGVtZW50ID0gZ2V0VmFsdWUoanNvbik7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobm9uRXhwYW5kYWJsZUVsZW1lbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRpdGxlID0gQXJyYXkuaXNBcnJheShqc29uKSA/ICdBcnJheVsnICsganNvbi5sZW5ndGggKyAnXScgOiAnT2JqZWN0JztcbiAgICAgICAgdmFyIHRoaXNMZXZlbElzQ2xvc2VkID0gb3BlbkxldmVscyA8IDE7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUodGl0bGUsIG51bGwsIHRoaXNMZXZlbElzQ2xvc2VkKSk7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIDEpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb24sIGluZGV4KSB7XG4gICAgICB2YXIgdGhpc0xldmVsSXNDbG9zZWQgPSBpbmRleCA+IG9wZW5MZXZlbHM7XG4gICAgICB2YXIgbmV4dExldmVsSXNDbG9zZWQgPSBpbmRleCArIDEgPiBvcGVuTGV2ZWxzO1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRlbnRzQ29udGFpbmVyKHRoaXNMZXZlbElzQ2xvc2VkKTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIGpzb24pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbltrZXldKSkge1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRUaXRsZSgnQXJyYXlbJyArIGpzb25ba2V5XS5sZW5ndGggKyAnXScsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbltrZXldID09PSBudWxsIHx8IGpzb25ba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIG51bGwpKTtcbiAgICAgICAgfSBlbHNlIGlmIChqc29uW2tleV0gaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XS50b0lTT1N0cmluZygpKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGpzb25ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoJ09iamVjdCcsIGtleSwgbmV4dExldmVsSXNDbG9zZWQpKTtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydEpzb25Ub0VsZW1lbnRzKGpzb25ba2V5XSwgaW5kZXggKyAxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdldFN0YW5kYXJkUGFpcihrZXksIGpzb25ba2V5XSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGpzb24pLmZvckVhY2goZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnZXRTdGFuZGFyZFBhaXIoc3ltYm9sLnRvU3RyaW5nKCksIGpzb25bc3ltYm9sXSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUaXRsZSh0aXRsZVRleHQsIG9wdGlvbmFsS2V5LCBsZXZlbElzQ2xvc2VkKSB7XG4gICAgICB2YXIgY3VycmVudGx5Q2xvc2VkID0gbGV2ZWxJc0Nsb3NlZDtcbiAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMudGl0bGVDb250YWluZXIudGFnKTtcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZUNvbnRhaW5lci5zdHlsZTtcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAndGl0bGVDb250YWluZXInKTtcbiAgICAgIHZhciB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlVGV4dC50YWcpO1xuICAgICAgdmFyIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnRpdGxlLnRhZyk7XG4gICAgICB0aXRsZUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy50aXRsZS5zdHlsZTtcbiAgICAgIHRleHRFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMudGl0bGVUZXh0LnN0eWxlO1xuICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkpO1xuXG4gICAgICBpZiAob3B0aW9uYWxLZXkpIHtcbiAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KG9wdGlvbmFsS2V5KSk7XG4gICAgICB9XG5cbiAgICAgIHRleHRFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuICAgICAgdGl0bGVFbGVtZW50LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcblxuICAgICAgdGl0bGVFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVuQnV0dG9uID0gdGl0bGVFbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgIHZhciBvYmplY3RDb250ZW50cyA9IHRpdGxlRWxlbWVudC5wYXJlbnROb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICBvYmplY3RDb250ZW50cy5zdHlsZS5kaXNwbGF5ID0gY3VycmVudGx5Q2xvc2VkID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgb3BlbkJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSBjdXJyZW50bHlDbG9zZWQgPyAncm90YXRlKDkwZGVnKScgOiAncm90YXRlKDBkZWcpJztcbiAgICAgICAgY3VycmVudGx5Q2xvc2VkID0gIWN1cnJlbnRseUNsb3NlZDtcbiAgICAgIH07XG5cbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE9wZW5CdXR0b24obGV2ZWxJc0Nsb3NlZCkge1xuICAgICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5vcGVuQnV0dG9uLnRhZyk7XG4gICAgICBidXR0b25FbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMub3BlbkJ1dHRvbi5zdHlsZTtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxJc0Nsb3NlZCA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgcmV0dXJuIGJ1dHRvbkVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudHNDb250YWluZXIoaXNDbG9zZWQpIHtcbiAgICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuY29udGVudHNDb250YWluZXIudGFnKTtcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlc3QnLCAnY29udGVudHNDb250YWluZXInKTtcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5jb250ZW50c0NvbnRhaW5lci5zdHlsZTtcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGlzQ2xvc2VkID8gJ25vbmUnIDogJ2Jsb2NrJztcbiAgICAgIHJldHVybiBjb250YWluZXJFbGVtZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFN0YW5kYXJkUGFpcihrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgcGFpckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXlWYWx1ZVBhaXIudGFnKTtcbiAgICAgIHBhaXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMua2V5VmFsdWVQYWlyLnN0eWxlO1xuICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0S2V5KGtleSkpO1xuICAgICAgcGFpckVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2V0VmFsdWUodmFsdWUpKTtcbiAgICAgIHJldHVybiBwYWlyRWxlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRLZXkobmFtZSkge1xuICAgICAgdmFyIGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHN0eWxlT3B0aW9ucy5rZXkudGFnKTtcbiAgICAgIGtleUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IHN0eWxlT3B0aW9ucy5rZXkuc3R5bGU7XG4gICAgICBrZXlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5hbWUgKyAnOiAnKSk7XG4gICAgICByZXR1cm4ga2V5RWxlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgdmFyIHZhbHVlRWxlbWVudDtcbiAgICAgIHZhciBudWxsVHlwZSA9ICdvYmplY3QnO1xuXG4gICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN5bWJvbFZhbHVlLnRhZyk7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3ltYm9sVmFsdWUuc3R5bGU7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLnN0cmluZ1ZhbHVlLnRhZyk7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuc3RyaW5nVmFsdWUuc3R5bGU7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdcIicgKyB2YWx1ZSArICdcIicpKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgIHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc3R5bGVPcHRpb25zLm51bWJlclZhbHVlLnRhZyk7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVtYmVyVmFsdWUuc3R5bGU7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnRhZyk7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMuYm9vbGVhblZhbHVlLnN0eWxlO1xuICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgbnVsbFR5cGU6XG4gICAgICAgICAgdmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnRhZyk7XG4gICAgICAgICAgdmFsdWVFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBzdHlsZU9wdGlvbnMubnVsbFZhbHVlLnN0eWxlO1xuICAgICAgICAgIHZhbHVlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWVFbGVtZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lcmdlU3R5bGVPcHRpb25zKGRlZmF1bHRzLCBvdmVycmlkZXMpIHtcbiAgICAgIHZhciBtZXJnZWQgPSB7fTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgIG1lcmdlZFtrZXldID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHNba2V5XSwgb3ZlcnJpZGVzW2tleV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXIoKTtcbiAgfVxuXG59XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3Rlcm1Mb2dnZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy90ZXJtTG9nZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfYmFzZUxvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9iYXNlTG9nZ2VyICovIFwiLi9zcmMvYmFzZUxvZ2dlci5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdGVybUxvZ2dlcl9taXhpbnNfbm9kZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi90ZXJtTG9nZ2VyLm1peGlucy5ub2RlICovIFwiLi9zcmMvdGVybUxvZ2dlci5taXhpbnMubm9kZS5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdGVybUxvZ2dlcl9taXhpbnNfd2ViX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3Rlcm1Mb2dnZXIubWl4aW5zLndlYiAqLyBcIi4vc3JjL3Rlcm1Mb2dnZXIubWl4aW5zLndlYi5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjYXVzYWwtbmV0LnV0aWxzICovIFwiY2F1c2FsLW5ldC51dGlsc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjYXVzYWxfbmV0X3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2F1c2FsX25ldF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fKTtcblxuXG5cblxuLyoqXG4gKiBUaGlzIFRlcm1Mb2dnZXIgcHJvdmlkZSBpc29tb3JwaGljIGxvZ2dlclxuICogeyBtaXhXaXRoIDogeyAnbm9kZSc6IFtMb2dOb2RlTWl4aW5zXSwgJ3dlYic6IFtXZWJOb2RlTWl4aW5zXSB9IH1cbiAqIEBjbGFzcyBUZXJtTG9nZ2VyXG4gKiBAZXh0ZW5kcyBCYXNlTG9nZ2VyXG4gKi9cblxuY2xhc3MgVGVybUxvZ2dlciBleHRlbmRzIGNhdXNhbF9uZXRfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX1tcInBsYXRmb3JtXCJdLm1peFdpdGgoX2Jhc2VMb2dnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0sIHtcbiAgbm9kZTogW190ZXJtTG9nZ2VyX21peGluc19ub2RlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdXSxcbiAgd2ViOiBbX3Rlcm1Mb2dnZXJfbWl4aW5zX3dlYl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXV1cbn0pIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmdyb3VwU3RhY2sgPSBbXTtcbiAgfVxuXG4gIGdyb3VwQmVnaW4obmFtZSkge1xuICAgIGxldCBncm91cCA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBiZWdpblRpbWU6IG5ldyBEYXRlKClcbiAgICB9O1xuICAgIHRoaXMuZ3JvdXBTdGFjay5wdXNoKGdyb3VwKTtcbiAgICBsZXQgaW5kZW50U3BhY2UgPSAnJztcbiAgICB0aGlzLmxvZyhgJHtpbmRlbnRTcGFjZX0ke2dyb3VwLm5hbWV9OiBiZWdpbiBhdCAke2dyb3VwLmJlZ2luVGltZX1gKTtcbiAgfVxuXG4gIGdyb3VwRW5kKCkge1xuICAgIGlmICh0aGlzLmdyb3VwU3RhY2subGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGdyb3VwID0gdGhpcy5ncm91cFN0YWNrLnBvcCgpO1xuICAgICAgbGV0IGluZGVudFNwYWNlID0gJyc7XG4gICAgICB0aGlzLmxvZyhgJHtpbmRlbnRTcGFjZX0ke2dyb3VwLm5hbWV9OiBlbmQgYWZ0ZXIgJHtuZXcgRGF0ZSgpIC0gZ3JvdXAuYmVnaW5UaW1lfSAobXMpYCk7XG4gICAgfVxuICB9XG5cbn1cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChuZXcgVGVybUxvZ2dlcigpKTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvdGVybUxvZ2dlci5taXhpbnMubm9kZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3Rlcm1Mb2dnZXIubWl4aW5zLm5vZGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNsaV9wcm9ncmVzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY2xpLXByb2dyZXNzICovIFwiY2xpLXByb2dyZXNzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNsaV9wcm9ncmVzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNsaV9wcm9ncmVzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcblxuXG5jb25zdCBMb2dOb2RlTWl4aW5zID0gTG9nQ2xhc3MgPT4gY2xhc3MgZXh0ZW5kcyBMb2dDbGFzcyB7XG4gIGNvbm5lY3QoY2hhbm5lbCkge1xuICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlO1xuICB9XG5cbiAgbG9nKG1lc3NhZ2UpIHtcbiAgICAvL1RPRE86IG1ha2UgZGVjb3JhdG9yIFxuICAgIHRoaXMuY3VycmVudEJhciA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubGV2ZWwgPj0gdGhpcy5BY2NlcHRlZExldmVsc1snbG9nJ10pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHJvZ3Jlc3NCZWdpbihyYW5nZSkge1xuICAgIHRoaXMucHJvY2Vzc0NvdW50ZXIgKz0gMTtcbiAgICB0aGlzLmN1cnJlbnRCYXIgPSBuZXcgY2xpX3Byb2dyZXNzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJCYXJcIl0oe30sIGNsaV9wcm9ncmVzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiUHJlc2V0c1wiXS5zaGFkZXNfY2xhc3NpYyk7XG4gICAgdGhpcy5jdXJyZW50QmFyLnNldFRvdGFsKHJhbmdlKTtcbiAgfVxuXG4gIHByb2dyZXNzVXBkYXRlKHByb2dyZXNzTWVzc2FnZSkge1xuICAgIGlmICghdGhpcy5jdXJyZW50QmFyKSB7XG4gICAgICB0aGlzLnByb2dyZXNzQmVnaW4oKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb2Nlc3NDb3VudGVyICs9IDE7XG4gICAgdGhpcy5jdXJyZW50QmFyLnVwZGF0ZSh0aGlzLnByb2Nlc3NDb3VudGVyKTtcbiAgfVxuXG4gIHByb2dyZXNzRW5kKCkge1xuICAgIHRoaXMuY3VycmVudEJhci5zdG9wKCk7XG4gICAgdGhpcy5wcm9jZXNzQ291bnRlciA9IDA7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jdXJyZW50QmFyID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydkZWJ1ZyddKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UpO1xuICB9XG5cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoTG9nTm9kZU1peGlucyk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3Rlcm1Mb2dnZXIubWl4aW5zLndlYi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvdGVybUxvZ2dlci5taXhpbnMud2ViLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wcmV0dHlKc29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3ByZXR0eUpzb24gKi8gXCIuL3NyYy9wcmV0dHlKc29uLmpzXCIpO1xuXG5cbmNvbnN0IExvZ1dlYk1peGlucyA9IExvZ0NsYXNzID0+IGNsYXNzIGV4dGVuZHMgTG9nQ2xhc3Mge1xuICBjb25uZWN0KGRvY3VtZW50RWwgPSBudWxsKSB7XG4gICAgZG9jdW1lbnRFbCA9IGRvY3VtZW50RWwgfHwgZG9jdW1lbnQuYm9keTtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBcImxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcIjtcbiAgICBkb2N1bWVudEVsLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIHRoaXMuZnJhbWVFbCA9IGRvY3VtZW50RWw7XG4gICAgdGhpcy5sb2dnZXJFbCA9IGRvY3VtZW50RWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1bFwiKVswXTtcbiAgfVxuXG4gIHNjcm9sbEJvdHRvbShlbGVtZW50ID0gbnVsbCkge1xuICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IHRoaXMuZnJhbWVFbDtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBwcm9ncmVzcyhwcm9jZXNzTWVzc2FnZSkge1xuICAgIC8vIGxldCBub2RlID0gdGhpcy5sb2dnZXJFbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpOm50aC1sYXN0LW9mLXR5cGUoMSlcIik7XG4gICAgbGV0IExJTm9kZXMgPSB0aGlzLmxvZ2dlckVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XG4gICAgbGV0IG5vZGUgPSBMSU5vZGVzW0xJTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoIW5vZGUgfHwgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJsb2dnZXItcHJvZ3Jlc3NcIikpIHtcbiAgICAgIC8vY3JlYXRlIG5ldyBlbFxuICAgICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChcImxvZ2dlci1wcm9ncmVzc1wiKTtcbiAgICAgIHRoaXMubG9nZ2VyRWwuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgbGV0IGpzb25Ob2RlID0gX3ByZXR0eUpzb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0uSlNPTkRpc3BsYXkocHJvY2Vzc01lc3NhZ2UpO1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBub2RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDsgdGV4dC1hbGlnbjpyaWdodFwiPiR7ZGF0ZX08L3A+YDtcbiAgICBub2RlLmFwcGVuZENoaWxkKGpzb25Ob2RlKTtcbiAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICB9XG5cbiAgbG9nKG1lc3NhZ2UpIHtcbiAgICBpZiAodGhpcy5sZXZlbCA+PSB0aGlzLkFjY2VwdGVkTGV2ZWxzWydsb2cnXSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxvZ2dlckVsIHx8ICF0aGlzLmxvZ2dlckVsLmFwcGVuZENoaWxkKSB7XG4gICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBub2RlLnN0eWxlLmNzc1RleHQgPSAnYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7JztcbiAgICBsZXQganNvbk5vZGUgPSBfcHJldHR5SnNvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXS5KU09ORGlzcGxheShtZXNzYWdlKTtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IHRleHQtYWxpZ246cmlnaHRcIj4ke2RhdGV9PC9wPmA7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChqc29uTm9kZSk7XG4gICAgdGhpcy5sb2dnZXJFbC5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB0aGlzLnNjcm9sbEJvdHRvbSgpO1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSkge1xuICAgIGlmICh0aGlzLmxldmVsID49IHRoaXMuQWNjZXB0ZWRMZXZlbHNbJ2RlYnVnJ10pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gLy9ubyBzaG93IG9uIHdlYiBzY3JlZW47ICAgICAgICBcblxuXG4gICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlKTtcbiAgfVxuXG59O1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKExvZ1dlYk1peGlucyk7XG5cbi8qKiovIH0pLFxuXG4vKioqLyAwOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBtdWx0aSAuL3NyYy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vc3JjL2luZGV4LmpzICovXCIuL3NyYy9pbmRleC5qc1wiKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjYXVzYWwtbmV0LnV0aWxzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiBleHRlcm5hbCBcImNhdXNhbC1uZXQudXRpbHNcIiAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXztcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2xpLXByb2dyZXNzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIGV4dGVybmFsIFwiY2xpLXByb2dyZXNzXCIgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NsaV9wcm9ncmVzc19fO1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyB9KTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyeHZaeTkzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5c2IyY3ZkMlZpY0dGamF5OWliMjkwYzNSeVlYQWlMQ0ozWldKd1lXTnJPaTh2UUdOaGRYTmhiRTVsZEM5c2IyY3ZMaTl6Y21NdlltRnpaVXh2WjJkbGNpNXFjeUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyeHZaeTh1TDNOeVl5OXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OHVMM055WXk5c2IyZG5aWEl1YldsNGFXNXpMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiRzluTHk0dmMzSmpMM0J5WlhSMGVVcHpiMjR1YW5NaUxDSjNaV0p3WVdOck9pOHZRR05oZFhOaGJFNWxkQzlzYjJjdkxpOXpjbU12ZEdWeWJVeHZaMmRsY2k1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OHVMM055WXk5MFpYSnRURzluWjJWeUxtMXBlR2x1Y3k1dWIyUmxMbXB6SWl3aWQyVmljR0ZqYXpvdkwwQmpZWFZ6WVd4T1pYUXZiRzluTHk0dmMzSmpMM1JsY20xTWIyZG5aWEl1YldsNGFXNXpMbmRsWWk1cWN5SXNJbmRsWW5CaFkyczZMeTlBWTJGMWMyRnNUbVYwTDJ4dlp5OWxlSFJsY201aGJDQmNJbU5oZFhOaGJDMXVaWFF1ZFhScGJITmNJaUlzSW5kbFluQmhZMnM2THk5QVkyRjFjMkZzVG1WMEwyeHZaeTlsZUhSbGNtNWhiQ0JjSW1Oc2FTMXdjbTluY21WemMxd2lJbDBzSW01aGJXVnpJanBiSWtKaGMyVk1iMmRuWlhJaUxDSmpiMjV6ZEhKMVkzUnZjaUlzSWtGalkyVndkR1ZrVEdWMlpXeHpJaXdpWkdWaWRXY2lMQ0pzYjJjaUxDSjNZWEp1YVc1bklpd2laWEp5YjNJaUxDSnlRV05qWlhCMFpXUk1aWFpsYkhNaUxDSnNaWFpsYkNJc0lreGxkbVZzSWl3aWRXNWtaV1pwYm1Wa0lpd2lSWEp5YjNJaUxDSlBZbXBsWTNRaUxDSnJaWGx6SWl3aVkyOXVibVZqZENJc0ltMWxjM05oWjJVaUxDSm5jbTkxY0VKbFoybHVJaXdpYm1GdFpTSXNJbWR5YjNWd1JXNWtJaXdpY0hKdlozSmxjM05DWldkcGJpSXNJbkpoYm1kbElpd2ljSEp2WjNKbGMzTlZjR1JoZEdVaUxDSndjbTluY21WemMwVnVaQ0lzSWt4dloyZGxjazFwZUdsdWN5SXNJa0poYzJWa1EyeGhjM01pTENKTWIyZG5aWElpTENKc2IyZG5aWElpTENKaGMzTmxjblFpTENKaVpVbHVjM1JoYm1ObFQyWWlMQ0pLYzI5dVZtbGxkeUlzSWtwVFQwNUVhWE53YkdGNUlpd2lhbk52YmlJc0ltOXdaVzVNWlhabGJITkJjbWNpTENKemRIbHNaVTl3ZEdsdmJuTkJjbWNpTENKRVJVWkJWVXhVWDFOVVdVeEZYMDlRVkVsUFRsTWlMQ0p5YjI5MElpd2lkR0ZuSWl3aWMzUjViR1VpTENKMGFYUnNaVU52Ym5SaGFXNWxjaUlzSW5ScGRHeGxJaXdpZEdsMGJHVlVaWGgwSWl3aWIzQmxia0oxZEhSdmJpSXNJbU52Ym5SbGJuUnpRMjl1ZEdGcGJtVnlJaXdpYTJWNVZtRnNkV1ZRWVdseUlpd2lhMlY1SWl3aWMzbHRZbTlzVm1Gc2RXVWlMQ0p6ZEhKcGJtZFdZV3gxWlNJc0ltNTFiV0psY2xaaGJIVmxJaXdpWW05dmJHVmhibFpoYkhWbElpd2liblZzYkZaaGJIVmxJaXdpYjNCbGJreGxkbVZzY3lJc0ltbHpUbUZPSWl3aWNHRnljMlZKYm5RaUxDSkpibVpwYm1sMGVTSXNJbk4wZVd4bFQzQjBhVzl1Y3lJc0ltMWxjbWRsVTNSNWJHVlBjSFJwYjI1eklpd2lZWE56YVdkdUlpd2lkR0Z5WjJWMElpd2lWSGx3WlVWeWNtOXlJaXdpZEc4aUxDSnBibVJsZUNJc0ltRnlaM1Z0Wlc1MGN5SXNJbXhsYm1kMGFDSXNJbTVsZUhSVGIzVnlZMlVpTENKdVpYaDBTMlY1SWl3aWNISnZkRzkwZVhCbElpd2lhR0Z6VDNkdVVISnZjR1Z5ZEhraUxDSmpZV3hzSWl3aWNtVnVaR1Z5SWl3aVpXeGxiV1Z1ZENJc0ltUnZZM1Z0Wlc1MElpd2lZM0psWVhSbFJXeGxiV1Z1ZENJc0ltTnpjMVJsZUhRaUxDSjJiMmxrUld4bGJXVnVkQ0lzSW1kbGRGWmhiSFZsSWl3aVlYQndaVzVrUTJocGJHUWlMQ0pFWVhSbElpd2laR0YwWlVWc1pXMWxiblFpTENKMGIwbFRUMU4wY21sdVp5SXNJbTV2YmtWNGNHRnVaR0ZpYkdWRmJHVnRaVzUwSWl3aVFYSnlZWGtpTENKcGMwRnljbUY1SWl3aWRHaHBjMHhsZG1Wc1NYTkRiRzl6WldRaUxDSm5aWFJVYVhSc1pTSXNJbU52Ym5abGNuUktjMjl1Vkc5RmJHVnRaVzUwY3lJc0ltNWxlSFJNWlhabGJFbHpRMnh2YzJWa0lpd2lZMjl1ZEdGcGJtVnlJaXdpWjJWMFEyOXVkR1Z1ZEhORGIyNTBZV2x1WlhJaUxDSm5aWFJUZEdGdVpHRnlaRkJoYVhJaUxDSm5aWFJQZDI1UWNtOXdaWEowZVZONWJXSnZiSE1pTENKbWIzSkZZV05vSWl3aWMzbHRZbTlzSWl3aWRHOVRkSEpwYm1jaUxDSnZjSFJwYjI1aGJFdGxlU0lzSW14bGRtVnNTWE5EYkc5elpXUWlMQ0pqZFhKeVpXNTBiSGxEYkc5elpXUWlMQ0pqYjI1MFlXbHVaWEpGYkdWdFpXNTBJaXdpYzJWMFFYUjBjbWxpZFhSbElpd2lkR1Y0ZEVWc1pXMWxiblFpTENKMGFYUnNaVVZzWlcxbGJuUWlMQ0puWlhSUGNHVnVRblYwZEc5dUlpd2laMlYwUzJWNUlpd2lZM0psWVhSbFZHVjRkRTV2WkdVaUxDSnZibU5zYVdOcklpd2labWx5YzNSRGFHbHNaQ0lzSW05aWFtVmpkRU52Ym5SbGJuUnpJaXdpY0dGeVpXNTBUbTlrWlNJc0ltNWxlSFJUYVdKc2FXNW5JaXdpWkdsemNHeGhlU0lzSW5SeVlXNXpabTl5YlNJc0ltSjFkSFJ2YmtWc1pXMWxiblFpTENKcGMwTnNiM05sWkNJc0luWmhiSFZsSWl3aWNHRnBja1ZzWlcxbGJuUWlMQ0pyWlhsRmJHVnRaVzUwSWl3aWRtRnNkV1ZGYkdWdFpXNTBJaXdpYm5Wc2JGUjVjR1VpTENKa1pXWmhkV3gwY3lJc0ltOTJaWEp5YVdSbGN5SXNJbTFsY21kbFpDSXNJbFJsY20xTWIyZG5aWElpTENKd2JHRjBabTl5YlNJc0ltMXBlRmRwZEdnaUxDSnViMlJsSWl3aVRHOW5UbTlrWlUxcGVHbHVjeUlzSW5kbFlpSXNJa3h2WjFkbFlrMXBlR2x1Y3lJc0ltZHliM1Z3VTNSaFkyc2lMQ0puY205MWNDSXNJbUpsWjJsdVZHbHRaU0lzSW5CMWMyZ2lMQ0pwYm1SbGJuUlRjR0ZqWlNJc0luQnZjQ0lzSWt4dlowTnNZWE56SWl3aVkyaGhibTVsYkNJc0ltTjFjbkpsYm5SQ1lYSWlMQ0pqYjI1emIyeGxJaXdpY0hKdlkyVnpjME52ZFc1MFpYSWlMQ0pqYkdsUWNtOW5jbVZ6Y3lJc0luTm9ZV1JsYzE5amJHRnpjMmxqSWl3aWMyVjBWRzkwWVd3aUxDSndjbTluY21WemMwMWxjM05oWjJVaUxDSjFjR1JoZEdVaUxDSnpkRzl3SWl3aVpHOWpkVzFsYm5SRmJDSXNJbUp2WkhraUxDSm1jbUZ0WlVWc0lpd2liRzluWjJWeVJXd2lMQ0puWlhSRmJHVnRaVzUwYzBKNVZHRm5UbUZ0WlNJc0luTmpjbTlzYkVKdmRIUnZiU0lzSW5OamNtOXNiRlJ2Y0NJc0luTmpjbTlzYkVobGFXZG9kQ0lzSW1Oc2FXVnVkRWhsYVdkb2RDSXNJbkJ5YjJkeVpYTnpJaXdpY0hKdlkyVnpjMDFsYzNOaFoyVWlMQ0pNU1U1dlpHVnpJaXdpWTJ4aGMzTk1hWE4wSWl3aVkyOXVkR0ZwYm5NaUxDSmhaR1FpTENKcWMyOXVUbTlrWlNJc0ltUmhkR1VpTENKcGJtNWxja2hVVFV3aVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFTkJRVU03UVVGRFJDeFBPMEZEVmtFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hyUkVGQk1FTXNaME5CUVdkRE8wRkJRekZGTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBWQlFYZEVMR3RDUVVGclFqdEJRVU14UlR0QlFVTkJMSGxFUVVGcFJDeGpRVUZqTzBGQlF5OUVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHBSRUZCZVVNc2FVTkJRV2xETzBGQlF6RkZMSGRJUVVGblNDeHRRa0ZCYlVJc1JVRkJSVHRCUVVOeVNUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMURRVUV5UWl3d1FrRkJNRUlzUlVGQlJUdEJRVU4yUkN4NVEwRkJhVU1zWlVGQlpUdEJRVU5vUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTdzRSRUZCYzBRc0swUkJRU3RFT3p0QlFVVnlTRHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGJFWkJPMEZCUVVFN096czdRVUZKUVN4TlFVRk5RU3hWUVVGT0xFTkJRV2RDTzBGQlExcERMR0ZCUVZjc1IwRkJSVHRCUVVOVUxGTkJRVXRETEdOQlFVd3NSMEZCYzBJN1FVRkJRME1zVjBGQlN5eEZRVUZGTEVOQlFWSTdRVUZCVjBNc1UwRkJSeXhGUVVGRExFTkJRV1k3UVVGQmEwSkRMR0ZCUVU4c1JVRkJReXhEUVVFeFFqdEJRVUUyUWtNc1YwRkJTeXhGUVVGRk8wRkJRWEJETEV0QlFYUkNPMEZCUTBFc1UwRkJTME1zWlVGQlRDeEhRVUYxUWp0QlFVRkRMRk5CUVVVc1QwRkJTRHRCUVVGWkxGTkJRVWNzUzBGQlpqdEJRVUZ6UWl4VFFVRkhMRk5CUVhwQ08wRkJRVzlETEZOQlFVYzdRVUZCZGtNc1MwRkJka0k3UVVGRFFTeFRRVUZMUXl4TFFVRk1MRWRCUVdFc1MwRkJTMDRzWTBGQlRDeERRVUZ2UWl4UFFVRndRaXhEUVVGaU8wRkJRMGc3TzBGQlEwUXNUVUZCU1U4c1MwRkJTaXhEUVVGVlJDeExRVUZXTEVWQlFXZENPMEZCUTFvc1VVRkJSeXhMUVVGTFRpeGpRVUZNTEVOQlFXOUNUU3hMUVVGd1FpeE5RVUUyUWtVc1UwRkJhRU1zUlVGQk1FTTdRVUZEZEVNc1YwRkJTMFlzUzBGQlRDeEhRVUZoTEV0QlFVdE9MR05CUVV3c1EwRkJiMEpOTEV0QlFYQkNMRU5CUVdJN1FVRkRTQ3hMUVVaRUxFMUJSMGs3UVVGRFFTeFpRVUZOUnl4TFFVRkxMRU5CUVVVc1IwRkJSVWdzUzBGQlRTeHRRa0ZCYTBKSkxFMUJRVTBzUTBGQlEwTXNTVUZCVUN4RFFVRlpMRXRCUVV0WUxHTkJRV3BDTEVOQlFXbERMRVZCUVRkRUxFTkJRVmc3UVVGRFNEdEJRVU5LT3p0QlFVTkVMRTFCUVVsUExFdEJRVW9zUjBGQlZ6dEJRVU5RTEZkQlFVOHNTMEZCUzBZc1pVRkJUQ3hEUVVGeFFpeExRVUZMUXl4TFFVRXhRaXhEUVVGUU8wRkJRMGc3TzBGQlJVUk5MRk5CUVU4c1IwRkJSVHRCUVVOTUxGVkJRVTFJTEV0QlFVc3NRMEZCUXl4dlFrRkJSQ3hEUVVGWU8wRkJRMGc3TzBGQlJVUlFMRXRCUVVjc1EwRkJRMWNzVDBGQlJDeEZRVUZUTzBGQlExSXNWVUZCVFVvc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSRXdzVDBGQlN5eERRVUZEVXl4UFFVRkVMRVZCUVZNN1FVRkRWaXhWUVVGTlNpeExRVUZMTEVOQlFVTXNiMEpCUVVRc1EwRkJXRHRCUVVOSU96dEJRVVZFVWl4UFFVRkxMRU5CUVVOWkxFOUJRVVFzUlVGQlV6dEJRVU5XTEZWQlFVMUtMRXRCUVVzc1EwRkJReXh2UWtGQlJDeERRVUZZTzBGQlEwZzdPMEZCUlVSTExGbEJRVlVzUTBGQlEwTXNTVUZCUkN4RlFVRk5PMEZCUTFvc1ZVRkJUVTRzUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRlJFOHNWVUZCVVN4SFFVRkZPMEZCUTA0c1ZVRkJUVkFzUzBGQlN5eERRVUZETEc5Q1FVRkVMRU5CUVZnN1FVRkRTRHM3UVVGRlJGRXNaVUZCWVN4RFFVRkRReXhMUVVGRUxFVkJRVTg3UVVGRGFFSXNWVUZCVFZRc1MwRkJTeXhEUVVGRExHOUNRVUZFTEVOQlFWZzdRVUZEU0RzN1FVRkZSRlVzWjBKQlFXTXNRMEZCUTA0c1QwRkJSQ3hGUVVGVE8wRkJRMjVDTEZWQlFVMUtMRXRCUVVzc1EwRkJReXh2UWtGQlJDeERRVUZZTzBGQlEwZzdPMEZCUlVSWExHRkJRVmNzUTBGQlExQXNUMEZCUkN4RlFVRlRPMEZCUTJoQ0xGVkJRVTFLTEV0QlFVc3NRMEZCUXl4dlFrRkJSQ3hEUVVGWU8wRkJRMGc3TzBGQmNFUlhPenRCUVhWRVJGZ3NlVVZCUVdZc1JUczdPenM3T3pzN096czdPMEZETTBSQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGRlFUczdPenM3T3pzN096czdPenRCUTBaQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZEUVRzN1FVRkRRU3hOUVVGTmRVSXNXVUZCV1N4SFFVRkpReXhWUVVGRUxFbEJRV1VzWTBGQlkwRXNWVUZCWkN4RFFVRjNRanRCUVVWNFJDeE5RVUZKUXl4TlFVRktMRU5CUVZkRExFMUJRVmdzUlVGQmEwSTdRVUZEWkVNc01rUkJRVTBzUTBGQlEwTXNXVUZCVUN4RFFVRnZRa1lzVFVGQmNFSXNSVUZCTkVJeFFpeHRSRUZCTlVJN1FVRkRRU3hUUVVGTE1FSXNUVUZCVEN4SFFVRmpRU3hOUVVGa08wRkJRMGc3TzBGQlJVUXNUVUZCU1VRc1RVRkJTaXhIUVVGWk8wRkJRMUlzVVVGQlJ5eERRVUZETEV0QlFVdERMRTFCUVZRc1JVRkJaMEk3UVVGRFdpeFpRVUZOWml4TFFVRkxMRU5CUVVNc2JVSkJRVVFzUTBGQldEdEJRVU5JT3p0QlFVTkVMRmRCUVU4c1MwRkJTMlVzVFVGQldqdEJRVU5JT3p0QlFWcDFSQ3hEUVVFMVJEczdRVUZsWlVnc01rVkJRV1lzUlRzN096czdPenM3T3pzN08wRkRha0pCTzBGQlFVRTdRVUZCUVR0QlFVTkJPMEZCUTJVc1RVRkJUVTBzVVVGQlRpeERRVUZqTzBGQlEzcENOVUlzWVVGQlZ5eEhRVUZGTEVOQlExbzdPMEZCUTBRc1UwRkJUelpDTEZkQlFWQXNRMEZCYlVKRExFbEJRVzVDTEVWQlFYbENReXhoUVVGNlFpeEZRVUYzUTBNc1pVRkJlRU1zUlVGQmVVUTdRVUZEY2tRc1VVRkJTVU1zY1VKQlFYRkNMRWRCUVVjN1FVRkRNVUpETEZWQlFVa3NSVUZCUlR0QlFVRkZReXhYUVVGSExFVkJRVVVzUzBGQlVEdEJRVUZqUXl4aFFVRkxMRVZCUVVVN1FVRkJja0lzVDBGRWIwSTdRVUZGTVVKRExHOUNRVUZqTEVWQlFVVTdRVUZCUlVZc1YwRkJSeXhGUVVGRkxFdEJRVkE3UVVGQlkwTXNZVUZCU3l4RlFVRkZPMEZCUVhKQ0xFOUJSbFU3UVVGSE1VSkZMRmRCUVVzc1JVRkJSVHRCUVVGRlNDeFhRVUZITEVWQlFVVXNUVUZCVUR0QlFVRmxReXhoUVVGTExFVkJRVVU3UVVGQmRFSXNUMEZJYlVJN1FVRkpNVUpITEdWQlFWTXNSVUZCUlR0QlFVRkZTaXhYUVVGSExFVkJRVVVzVFVGQlVEdEJRVUZsUXl4aFFVRkxMRVZCUVVVN1FVRkJkRUlzVDBGS1pUdEJRVXN4UWtrc1owSkJRVlVzUlVGQlJUdEJRVU5XVEN4WFFVRkhMRVZCUVVVc1RVRkVTenRCUVVWV1F5eGhRVUZMTEVWQlFVVXNkMFpCUTBFN1FVRklSeXhQUVV4ak8wRkJWVEZDU3l4MVFrRkJhVUlzUlVGQlJUdEJRVUZGVGl4WFFVRkhMRVZCUVVVc1MwRkJVRHRCUVVGalF5eGhRVUZMTEVWQlFVVTdRVUZCY2tJc1QwRldUenRCUVZjeFFrMHNhMEpCUVZrc1JVRkJSVHRCUVVGRlVDeFhRVUZITEVWQlFVVXNUVUZCVUR0QlFVRmxReXhoUVVGTExFVkJRVVU3UVVGQmRFSXNUMEZZV1R0QlFWa3hRazhzVTBGQlJ5eEZRVUZGTzBGQlFVVlNMRmRCUVVjc1JVRkJSU3hOUVVGUU8wRkJRV1ZETEdGQlFVc3NSVUZCUlR0QlFVRjBRaXhQUVZweFFqdEJRV0V4UWxFc2FVSkJRVmNzUlVGQlJUdEJRVUZGVkN4WFFVRkhMRVZCUVVVc1RVRkJVRHRCUVVGbFF5eGhRVUZMTEVWQlFVVTdRVUZCZEVJc1QwRmlZVHRCUVdNeFFsTXNhVUpCUVZjc1JVRkJSVHRCUVVGRlZpeFhRVUZITEVWQlFVVXNUVUZCVUR0QlFVRmxReXhoUVVGTExFVkJRVVU3UVVGQmRFSXNUMEZrWVR0QlFXVXhRbFVzYVVKQlFWY3NSVUZCUlR0QlFVRkZXQ3hYUVVGSExFVkJRVVVzVFVGQlVEdEJRVUZsUXl4aFFVRkxMRVZCUVVVN1FVRkJkRUlzVDBGbVlUdEJRV2RDTVVKWExHdENRVUZaTEVWQlFVVTdRVUZCUlZvc1YwRkJSeXhGUVVGRkxFMUJRVkE3UVVGQlpVTXNZVUZCU3l4RlFVRkZPMEZCUVhSQ0xFOUJhRUpaTzBGQmFVSXhRbGtzWlVGQlV5eEZRVUZGTzBGQlFVVmlMRmRCUVVjc1JVRkJSU3hOUVVGUU8wRkJRV1ZETEdGQlFVc3NSVUZCUlR0QlFVRjBRanRCUVdwQ1pTeExRVUUxUWp0QlFXMUNRU3hSUVVGSllTeFZRVUZWTEVkQlFVZERMRXRCUVVzc1EwRkJRME1zVVVGQlVTeERRVUZEY0VJc1lVRkJSQ3hEUVVGVUxFTkJRVXdzUjBGQmFVTnhRaXhSUVVGcVF5eEhRVUUwUTBRc1VVRkJVU3hEUVVGRGNFSXNZVUZCUkN4RFFVRnlSVHRCUVVOQkxGRkJRVWx6UWl4WlFVRlpMRWRCUVVjc1QwRkJUM0pDTEdWQlFWQXNTMEZCTWtJc1VVRkJNMElzUjBGRFJYTkNMR2xDUVVGcFFpeERRVUZEY2tJc2NVSkJRVVFzUlVGQmQwSkVMR1ZCUVhoQ0xFTkJSRzVDTEVkQlJVVkRMSEZDUVVaeVFqczdRVUZKUVN4UlFVRkpMRTlCUVU5MFFpeE5RVUZOTEVOQlFVTTBReXhOUVVGa0xFbEJRWGRDTEZWQlFUVkNMRVZCUVhkRE8wRkJRM1JETlVNc1dVRkJUU3hEUVVGRE5FTXNUVUZCVUN4SFFVRm5RaXhWUVVGVFF5eE5RVUZVTEVWQlFXbENPMEZCUXk5Q0xGbEJRVWxCTEUxQlFVMHNTVUZCU1N4SlFVRmtMRVZCUVc5Q08wRkJRMnhDTEdkQ1FVRk5MRWxCUVVsRExGTkJRVW9zUTBGQll5dzBRMEZCWkN4RFFVRk9PMEZCUTBRN08wRkJSVVFzV1VGQlNVTXNSVUZCUlN4SFFVRkhMME1zVFVGQlRTeERRVUZETmtNc1RVRkJSQ3hEUVVGbU96dEJRVVZCTEdGQlFVc3NTVUZCU1Vjc1MwRkJTeXhIUVVGSExFTkJRV3BDTEVWQlFXOUNRU3hMUVVGTExFZEJRVWRETEZOQlFWTXNRMEZCUTBNc1RVRkJkRU1zUlVGQk9FTkdMRXRCUVVzc1JVRkJia1FzUlVGQmRVUTdRVUZEY2tRc1kwRkJTVWNzVlVGQlZTeEhRVUZIUml4VFFVRlRMRU5CUVVORUxFdEJRVVFzUTBGQk1VSTdPMEZCUlVFc1kwRkJTVWNzVlVGQlZTeEpRVUZKTEVsQlFXeENMRVZCUVhkQ08wRkJRM1JDTEdsQ1FVRkxMRWxCUVVsRExFOUJRVlFzU1VGQmIwSkVMRlZCUVhCQ0xFVkJRV2RETzBGQlF6bENMR3RDUVVGSmJrUXNUVUZCVFN4RFFVRkRjVVFzVTBGQlVDeERRVUZwUWtNc1kwRkJha0lzUTBGQlowTkRMRWxCUVdoRExFTkJRWEZEU2l4VlFVRnlReXhGUVVGcFJFTXNUMEZCYWtRc1EwRkJTaXhGUVVFclJEdEJRVU0zUkV3c2EwSkJRVVVzUTBGQlEwc3NUMEZCUkN4RFFVRkdMRWRCUVdORUxGVkJRVlVzUTBGQlEwTXNUMEZCUkN4RFFVRjRRanRCUVVORU8wRkJRMFk3UVVGRFJqdEJRVU5HT3p0QlFVTkVMR1ZCUVU5TUxFVkJRVkE3UVVGRFJDeFBRVzVDUkR0QlFXOUNSRHM3UVVGRlJDeGhRVUZUVXl4TlFVRlVMRWRCUVd0Q08wRkJRMmhDTEZWQlFVbERMRTlCUVU4c1IwRkJSME1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1N4RFFVRkRia0lzU1VGQllpeERRVUZyUWtNc1IwRkJla01zUTBGQlpEdEJRVU5CYVVNc1lVRkJUeXhEUVVGRGFFTXNTMEZCVWl4RFFVRmpiVU1zVDBGQlpDeEhRVUYzUW14Q0xGbEJRVmtzUTBGQlEyNUNMRWxCUVdJc1EwRkJhMEpGTEV0QlFURkRPenRCUVVWQkxGVkJRVWxPTEVsQlFVa3NTMEZCU3l4SlFVRlVMRWxCUVdsQ1FTeEpRVUZKTEV0QlFVdHlRaXhUUVVFNVFpeEZRVUY1UXp0QlFVTjJReXhaUVVGSkswUXNWMEZCVnl4SFFVRkhReXhSUVVGUkxFTkJRVU1zU1VGQlJDeERRVUV4UWp0QlFVTkJUQ3hsUVVGUExFTkJRVU5OTEZkQlFWSXNRMEZCYjBKR0xGZEJRWEJDTzBGQlEwUXNUMEZJUkN4TlFVZFBMRWxCUVVreFF5eEpRVUZKTEZsQlFWazJReXhKUVVGd1FpeEZRVUV3UWp0QlFVTXZRaXhaUVVGSlF5eFhRVUZYTEVkQlFVZElMRkZCUVZFc1EwRkJRek5ETEVsQlFVa3NRMEZCUXl0RExGZEJRVXdzUlVGQlJDeERRVUV4UWp0QlFVTkJWQ3hsUVVGUExFTkJRVU5OTEZkQlFWSXNRMEZCYjBKRkxGZEJRWEJDTzBGQlEwUXNUMEZJVFN4TlFVZEJMRWxCUVVrc1QwRkJUemxETEVsQlFWQXNTMEZCWjBJc1VVRkJjRUlzUlVGQk9FSTdRVUZEYmtNc1dVRkJTV2RFTEc5Q1FVRnZRaXhIUVVGSFRDeFJRVUZSTEVOQlFVTXpReXhKUVVGRUxFTkJRVzVETzBGQlEwRnpReXhsUVVGUExFTkJRVU5OTEZkQlFWSXNRMEZCYjBKSkxHOUNRVUZ3UWp0QlFVTkVMRTlCU0Uwc1RVRkhRVHRCUVVOTUxGbEJRVWw0UXl4TFFVRkxMRWRCUVVkNVF5eExRVUZMTEVOQlFVTkRMRTlCUVU0c1EwRkJZMnhFTEVsQlFXUXNTVUZCYzBJc1YwRkJWMEVzU1VGQlNTeERRVUZESzBJc1RVRkJhRUlzUjBGQmVVSXNSMEZCTDBNc1IwRkJjVVFzVVVGQmFrVTdRVUZEUVN4WlFVRkpiMElzYVVKQlFXbENMRWRCUVVkb1F5eFZRVUZWTEVkQlFVY3NRMEZCY2tNN1FVRkRRVzFDTEdWQlFVOHNRMEZCUTAwc1YwRkJVaXhEUVVGdlFsRXNVVUZCVVN4RFFVRkROVU1zUzBGQlJDeEZRVUZSTEVsQlFWSXNSVUZCWXpKRExHbENRVUZrTEVOQlFUVkNPMEZCUTBGaUxHVkJRVThzUTBGQlEwMHNWMEZCVWl4RFFVRnZRbE1zY1VKQlFYRkNMRU5CUVVOeVJDeEpRVUZFTEVWQlFVOHNRMEZCVUN4RFFVRjZRenRCUVVORU96dEJRVVZFTEdGQlFVOXpReXhQUVVGUU8wRkJRMFE3TzBGQlJVUXNZVUZCVTJVc2NVSkJRVlFzUTBGQkswSnlSQ3hKUVVFdlFpeEZRVUZ4UXpaQ0xFdEJRWEpETEVWQlFUUkRPMEZCUXpGRExGVkJRVWx6UWl4cFFrRkJhVUlzUjBGQlIzUkNMRXRCUVVzc1IwRkJSMVlzVlVGQmFFTTdRVUZEUVN4VlFVRkpiVU1zYVVKQlFXbENMRWRCUVVkNlFpeExRVUZMTEVkQlFVY3NRMEZCVWl4SFFVRlpWaXhWUVVGd1F6dEJRVU5CTEZWQlFVbHZReXhUUVVGVExFZEJRVWRETEc5Q1FVRnZRaXhEUVVGRFRDeHBRa0ZCUkN4RFFVRndRenM3UVVGRFFTeFhRVUZMTEVsQlFVbDBReXhIUVVGVUxFbEJRV2RDWWl4SlFVRm9RaXhGUVVGelFqdEJRVU53UWl4WlFVRkphVVFzUzBGQlN5eERRVUZEUXl4UFFVRk9MRU5CUVdOc1JDeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJiRUlzUTBGQlNpeEZRVUU0UWp0QlFVTTFRakJETEcxQ1FVRlRMRU5CUVVOWUxGZEJRVllzUTBGQmMwSlJMRkZCUVZFc1EwRkJReXhYUVVGWGNFUXNTVUZCU1N4RFFVRkRZU3hIUVVGRUxFTkJRVW9zUTBGQlZXdENMRTFCUVhKQ0xFZEJRVGhDTEVkQlFTOUNMRVZCUVc5RGJFSXNSMEZCY0VNc1JVRkJlVU41UXl4cFFrRkJla01zUTBGQk9VSTdRVUZEUVVNc2JVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbE1zY1VKQlFYRkNMRU5CUVVOeVJDeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJUQ3hGUVVGWlowSXNTMEZCU3l4SFFVRkhMRU5CUVhCQ0xFTkJRVE5ETzBGQlEwUXNVMEZJUkN4TlFVZFBMRWxCUVVrM1FpeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJTaXhMUVVGakxFbEJRV1FzU1VGQmMwSmlMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZLTEV0QlFXTnNReXhUUVVGNFF5eEZRVUZ0UkR0QlFVTjRSRFJGTEcxQ1FVRlRMRU5CUVVOWUxGZEJRVllzUTBGQmMwSmhMR1ZCUVdVc1EwRkJRelZETEVkQlFVUXNSVUZCVFN4SlFVRk9MRU5CUVhKRE8wRkJRMFFzVTBGR1RTeE5RVVZCTEVsQlFVbGlMRWxCUVVrc1EwRkJRMkVzUjBGQlJDeERRVUZLTEZsQlFYRkNaME1zU1VGQmVrSXNSVUZCSzBJN1FVRkRjRU5WTEcxQ1FVRlRMRU5CUVVOWUxGZEJRVllzUTBGQmMwSmhMR1ZCUVdVc1EwRkJRelZETEVkQlFVUXNSVUZCVFdJc1NVRkJTU3hEUVVGRFlTeEhRVUZFTEVOQlFVb3NRMEZCVld0RExGZEJRVllzUlVGQlRpeERRVUZ5UXp0QlFVTkVMRk5CUmswc1RVRkZRU3hKUVVGSkxFOUJRVTh2UXl4SlFVRkpMRU5CUVVOaExFZEJRVVFzUTBGQldDeExRVUZ4UWl4UlFVRjZRaXhGUVVGdFF6dEJRVU40UXpCRExHMUNRVUZUTEVOQlFVTllMRmRCUVZZc1EwRkJjMEpSTEZGQlFWRXNRMEZCUXl4UlFVRkVMRVZCUVZkMlF5eEhRVUZZTEVWQlFXZENlVU1zYVVKQlFXaENMRU5CUVRsQ08wRkJRMEZETEcxQ1FVRlRMRU5CUVVOWUxGZEJRVllzUTBGQmMwSlRMSEZDUVVGeFFpeERRVUZEY2tRc1NVRkJTU3hEUVVGRFlTeEhRVUZFTEVOQlFVd3NSVUZCV1dkQ0xFdEJRVXNzUjBGQlJ5eERRVUZ3UWl4RFFVRXpRenRCUVVORUxGTkJTRTBzVFVGSFFUdEJRVU5NTUVJc2JVSkJRVk1zUTBGQlExZ3NWMEZCVml4RFFVRnpRbUVzWlVGQlpTeERRVUZETlVNc1IwRkJSQ3hGUVVGTllpeEpRVUZKTEVOQlFVTmhMRWRCUVVRc1EwRkJWaXhEUVVGeVF6dEJRVU5FTzBGQlEwWTdPMEZCUTBRc1ZVRkJTU3hQUVVGUGFFTXNUVUZCVFN4RFFVRkROa1VzY1VKQlFXUXNTMEZCZDBNc1ZVRkJOVU1zUlVGQmQwUTdRVUZEZEVRM1JTeGpRVUZOTEVOQlFVTTJSU3h4UWtGQlVDeERRVUUyUWpGRUxFbEJRVGRDTEVWQlFXMURNa1FzVDBGQmJrTXNRMEZCTWtNc1ZVRkJVME1zVFVGQlZDeEZRVUZwUWp0QlFVTXhSRXdzYlVKQlFWTXNRMEZCUTFnc1YwRkJWaXhEUVVGelFtRXNaVUZCWlN4RFFVRkRSeXhOUVVGTkxFTkJRVU5ETEZGQlFWQXNSVUZCUkN4RlFVRnZRamRFTEVsQlFVa3NRMEZCUXpSRUxFMUJRVVFzUTBGQmVFSXNRMEZCY2tNN1FVRkRSQ3hUUVVaRU8wRkJSMFE3TzBGQlJVUXNZVUZCVDB3c1UwRkJVRHRCUVVORU96dEJRVVZFTEdGQlFWTklMRkZCUVZRc1EwRkJhMEl6UXl4VFFVRnNRaXhGUVVFMlFuRkVMRmRCUVRkQ0xFVkJRVEJEUXl4aFFVRXhReXhGUVVGNVJEdEJRVU4yUkN4VlFVRkpReXhsUVVGbExFZEJRVWRFTEdGQlFYUkNPMEZCUTBFc1ZVRkJTVVVzWjBKQlFXZENMRWRCUVVjeFFpeFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUpxUWl4WlFVRlpMRU5CUVVOb1FpeGpRVUZpTEVOQlFUUkNSaXhIUVVGdVJDeERRVUYyUWp0QlFVTkJORVFzYzBKQlFXZENMRU5CUVVNelJDeExRVUZxUWl4RFFVRjFRbTFETEU5QlFYWkNMRWRCUVdsRGJFSXNXVUZCV1N4RFFVRkRhRUlzWTBGQllpeERRVUUwUWtRc1MwRkJOMFE3UVVGRFFUSkVMSE5DUVVGblFpeERRVUZEUXl4WlFVRnFRaXhEUVVFNFFpeFhRVUU1UWl4RlFVRXlReXhuUWtGQk0wTTdRVUZEUVN4VlFVRkpReXhYUVVGWExFZEJRVWMxUWl4UlFVRlJMRU5CUVVORExHRkJRVlFzUTBGQmRVSnFRaXhaUVVGWkxFTkJRVU5rTEZOQlFXSXNRMEZCZFVKS0xFZEJRVGxETEVOQlFXeENPMEZCUTBFc1ZVRkJTU3RFTEZsQlFWa3NSMEZCUnpkQ0xGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTJZc1MwRkJZaXhEUVVGdFFrZ3NSMEZCTVVNc1EwRkJia0k3UVVGRFFTdEVMR3RDUVVGWkxFTkJRVU01UkN4TFFVRmlMRU5CUVcxQ2JVTXNUMEZCYmtJc1IwRkJOa0pzUWl4WlFVRlpMRU5CUVVObUxFdEJRV0lzUTBGQmJVSkdMRXRCUVdoRU8wRkJRMEUyUkN4cFFrRkJWeXhEUVVGRE4wUXNTMEZCV2l4RFFVRnJRbTFETEU5QlFXeENMRWRCUVRSQ2JFSXNXVUZCV1N4RFFVRkRaQ3hUUVVGaUxFTkJRWFZDU0N4TFFVRnVSRHRCUVVWQk9FUXNhMEpCUVZrc1EwRkJRM2hDTEZkQlFXSXNRMEZCZVVKNVFpeGhRVUZoTEVOQlFVTk9MR0ZCUVVRc1EwRkJkRU03TzBGQlEwRXNWVUZCU1VRc1YwRkJTaXhGUVVGcFFqdEJRVU5tU3l4dFFrRkJWeXhEUVVGRGRrSXNWMEZCV2l4RFFVRjNRakJDTEUxQlFVMHNRMEZCUTFJc1YwRkJSQ3hEUVVFNVFqdEJRVU5FT3p0QlFVTkVTeXhwUWtGQlZ5eERRVUZEZGtJc1YwRkJXaXhEUVVGM1Frd3NVVUZCVVN4RFFVRkRaME1zWTBGQlZDeERRVUYzUWpsRUxGTkJRWGhDTEVOQlFYaENPMEZCUTBFeVJDeHJRa0ZCV1N4RFFVRkRlRUlzVjBGQllpeERRVUY1UW5WQ0xGZEJRWHBDT3p0QlFVVkJReXhyUWtGQldTeERRVUZEU1N4UFFVRmlMRWRCUVhWQ0xGbEJRVms3UVVGRGFrTXNXVUZCU1RsRUxGVkJRVlVzUjBGQlJ6QkVMRmxCUVZrc1EwRkJRMHNzVlVGQk9VSTdRVUZEUVN4WlFVRkpReXhqUVVGakxFZEJRVWRPTEZsQlFWa3NRMEZCUTA4c1ZVRkJZaXhEUVVGM1FrTXNWMEZCTjBNN1FVRkRRVVlzYzBKQlFXTXNRMEZCUTNCRkxFdEJRV1lzUTBGQmNVSjFSU3hQUVVGeVFpeEhRVUVyUW1Jc1pVRkJaU3hIUVVGSExFOUJRVWdzUjBGQllTeE5RVUV6UkR0QlFVTkJkRVFzYTBKQlFWVXNRMEZCUTBvc1MwRkJXQ3hEUVVGcFFuZEZMRk5CUVdwQ0xFZEJRVFpDWkN4bFFVRmxMRWRCUVVjc1pVRkJTQ3hIUVVGeFFpeGpRVUZxUlR0QlFVTkJRU3gxUWtGQlpTeEhRVUZITEVOQlFVTkJMR1ZCUVc1Q08wRkJRMFFzVDBGT1JEczdRVUZSUVVNc2MwSkJRV2RDTEVOQlFVTnlRaXhYUVVGcVFpeERRVUUyUW5kQ0xGbEJRVGRDTzBGQlEwRXNZVUZCVDBnc1owSkJRVkE3UVVGRFJEczdRVUZGUkN4aFFVRlRTU3hoUVVGVUxFTkJRWFZDVGl4aFFVRjJRaXhGUVVGelF6dEJRVU53UXl4VlFVRkpaMElzWVVGQllTeEhRVUZIZUVNc1VVRkJVU3hEUVVGRFF5eGhRVUZVTEVOQlFYVkNha0lzV1VGQldTeERRVUZEWWl4VlFVRmlMRU5CUVhkQ1RDeEhRVUV2UXl4RFFVRndRanRCUVVOQk1FVXNiVUpCUVdFc1EwRkJRM3BGTEV0QlFXUXNRMEZCYjBKdFF5eFBRVUZ3UWl4SFFVRTRRbXhDTEZsQlFWa3NRMEZCUTJJc1ZVRkJZaXhEUVVGM1Frb3NTMEZCZEVRN1FVRkRRWGxGTEcxQ1FVRmhMRU5CUVVONlJTeExRVUZrTEVOQlFXOUNkMFVzVTBGQmNFSXNSMEZCWjBObUxHRkJRV0VzUjBGQlJ5eGpRVUZJTEVkQlFXOUNMR1ZCUVdwRk8wRkJRMEVzWVVGQlQyZENMR0ZCUVZBN1FVRkRSRHM3UVVGRlJDeGhRVUZUZGtJc2IwSkJRVlFzUTBGQk9FSjNRaXhSUVVFNVFpeEZRVUYzUXp0QlFVTjBReXhWUVVGSlppeG5Ra0ZCWjBJc1IwRkJSekZDTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMW9zYVVKQlFXSXNRMEZCSzBKT0xFZEJRWFJFTEVOQlFYWkNPMEZCUTBFMFJDeHpRa0ZCWjBJc1EwRkJRME1zV1VGQmFrSXNRMEZCT0VJc1YwRkJPVUlzUlVGQk1rTXNiVUpCUVRORE8wRkJRMEZFTEhOQ1FVRm5RaXhEUVVGRE0wUXNTMEZCYWtJc1EwRkJkVUp0UXl4UFFVRjJRaXhIUVVGcFEyeENMRmxCUVZrc1EwRkJRMW9zYVVKQlFXSXNRMEZCSzBKTUxFdEJRV2hGTzBGQlEwRXlSQ3h6UWtGQlowSXNRMEZCUXpORUxFdEJRV3BDTEVOQlFYVkNkVVVzVDBGQmRrSXNSMEZCYTBOSExGRkJRVkVzUjBGQlJ5eE5RVUZJTEVkQlFWa3NUMEZCZEVRN1FVRkRRU3hoUVVGUFppeG5Ra0ZCVUR0QlFVTkVPenRCUVVWRUxHRkJRVk5TTEdWQlFWUXNRMEZCZVVJMVF5eEhRVUY2UWl4RlFVRTRRbTlGTEV0QlFUbENMRVZCUVhGRE8wRkJRMjVETEZWQlFVbERMRmRCUVZjc1IwRkJSek5ETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMWdzV1VGQllpeERRVUV3UWxBc1IwRkJha1FzUTBGQmJFSTdRVUZEUVRaRkxHbENRVUZYTEVOQlFVTTFSU3hMUVVGYUxFTkJRV3RDYlVNc1QwRkJiRUlzUjBGQk5FSnNRaXhaUVVGWkxFTkJRVU5ZTEZsQlFXSXNRMEZCTUVKT0xFdEJRWFJFTzBGQlEwRTBSU3hwUWtGQlZ5eERRVUZEZEVNc1YwRkJXaXhEUVVGM1FqQkNMRTFCUVUwc1EwRkJRM3BFTEVkQlFVUXNRMEZCT1VJN1FVRkRRWEZGTEdsQ1FVRlhMRU5CUVVOMFF5eFhRVUZhTEVOQlFYZENSQ3hSUVVGUkxFTkJRVU56UXl4TFFVRkVMRU5CUVdoRE8wRkJRMEVzWVVGQlQwTXNWMEZCVUR0QlFVTkVPenRCUVVWRUxHRkJRVk5hTEUxQlFWUXNRMEZCWjBKd1JpeEpRVUZvUWl4RlFVRnpRanRCUVVOd1FpeFZRVUZKYVVjc1ZVRkJWU3hIUVVGSE5VTXNVVUZCVVN4RFFVRkRReXhoUVVGVUxFTkJRWFZDYWtJc1dVRkJXU3hEUVVGRFZpeEhRVUZpTEVOQlFXbENVaXhIUVVGNFF5eERRVUZxUWp0QlFVTkJPRVVzWjBKQlFWVXNRMEZCUXpkRkxFdEJRVmdzUTBGQmFVSnRReXhQUVVGcVFpeEhRVUV5UW14Q0xGbEJRVmtzUTBGQlExWXNSMEZCWWl4RFFVRnBRbEFzUzBGQk5VTTdRVUZEUVRaRkxHZENRVUZWTEVOQlFVTjJReXhYUVVGWUxFTkJRWFZDVEN4UlFVRlJMRU5CUVVOblF5eGpRVUZVTEVOQlFYZENja1lzU1VGQlNTeEhRVUZITEVsQlFTOUNMRU5CUVhaQ08wRkJRMEVzWVVGQlQybEhMRlZCUVZBN1FVRkRSRHM3UVVGRlJDeGhRVUZUZUVNc1VVRkJWQ3hEUVVGclFuTkRMRXRCUVd4Q0xFVkJRWGxDTzBGQlEzWkNMRlZCUVVsSExGbEJRVW83UVVGRFFTeFZRVUZKUXl4UlFVRlJMRWRCUVVjc1VVRkJaanM3UVVGRFFTeGpRVUZSTEU5QlFVOUtMRXRCUVdZN1FVRkRSU3hoUVVGTExGRkJRVXc3UVVGRFJVY3NjMEpCUVZrc1IwRkJSemRETEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFtcENMRmxCUVZrc1EwRkJRMVFzVjBGQllpeERRVUY1UWxRc1IwRkJhRVFzUTBGQlpqdEJRVU5CSzBVc2MwSkJRVmtzUTBGQlF6bEZMRXRCUVdJc1EwRkJiVUp0UXl4UFFVRnVRaXhIUVVFMlFteENMRmxCUVZrc1EwRkJRMVFzVjBGQllpeERRVUY1UWxJc1MwRkJkRVE3UVVGRFFUaEZMSE5DUVVGWkxFTkJRVU40UXl4WFFVRmlMRU5CUVhsQ1RDeFJRVUZSTEVOQlFVTm5ReXhqUVVGVUxFTkJRWGRDVlN4TFFVRkxMRU5CUVVOd1FpeFJRVUZPTEVWQlFYaENMRU5CUVhwQ08wRkJRMEU3TzBGQlEwWXNZVUZCU3l4UlFVRk1PMEZCUTBWMVFpeHpRa0ZCV1N4SFFVRkhOME1zVVVGQlVTeERRVUZEUXl4aFFVRlVMRU5CUVhWQ2FrSXNXVUZCV1N4RFFVRkRVaXhYUVVGaUxFTkJRWGxDVml4SFFVRm9SQ3hEUVVGbU8wRkJRMEVyUlN4elFrRkJXU3hEUVVGRE9VVXNTMEZCWWl4RFFVRnRRbTFETEU5QlFXNUNMRWRCUVRaQ2JFSXNXVUZCV1N4RFFVRkRVaXhYUVVGaUxFTkJRWGxDVkN4TFFVRjBSRHRCUVVOQk9FVXNjMEpCUVZrc1EwRkJRM2hETEZkQlFXSXNRMEZCZVVKTUxGRkJRVkVzUTBGQlEyZERMR05CUVZRc1EwRkJkMElzVFVGQlRWVXNTMEZCVGl4SFFVRmpMRWRCUVhSRExFTkJRWHBDTzBGQlEwRTdPMEZCUTBZc1lVRkJTeXhSUVVGTU8wRkJRMFZITEhOQ1FVRlpMRWRCUVVjM1F5eFJRVUZSTEVOQlFVTkRMR0ZCUVZRc1EwRkJkVUpxUWl4WlFVRlpMRU5CUVVOUUxGZEJRV0lzUTBGQmVVSllMRWRCUVdoRUxFTkJRV1k3UVVGRFFTdEZMSE5DUVVGWkxFTkJRVU01UlN4TFFVRmlMRU5CUVcxQ2JVTXNUMEZCYmtJc1IwRkJOa0pzUWl4WlFVRlpMRU5CUVVOUUxGZEJRV0lzUTBGQmVVSldMRXRCUVhSRU8wRkJRMEU0UlN4elFrRkJXU3hEUVVGRGVFTXNWMEZCWWl4RFFVRjVRa3dzVVVGQlVTeERRVUZEWjBNc1kwRkJWQ3hEUVVGM1FsVXNTMEZCZUVJc1EwRkJla0k3UVVGRFFUczdRVUZEUml4aFFVRkxMRk5CUVV3N1FVRkRSVWNzYzBKQlFWa3NSMEZCUnpkRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTA0c1dVRkJZaXhEUVVFd1Fsb3NSMEZCYWtRc1EwRkJaanRCUVVOQkswVXNjMEpCUVZrc1EwRkJRemxGTEV0QlFXSXNRMEZCYlVKdFF5eFBRVUZ1UWl4SFFVRTJRbXhDTEZsQlFWa3NRMEZCUTA0c1dVRkJZaXhEUVVFd1FsZ3NTMEZCZGtRN1FVRkRRVGhGTEhOQ1FVRlpMRU5CUVVONFF5eFhRVUZpTEVOQlFYbENUQ3hSUVVGUkxFTkJRVU5uUXl4alFVRlVMRU5CUVhkQ1ZTeExRVUY0UWl4RFFVRjZRanRCUVVOQk96dEJRVU5HTEdGQlFVdEpMRkZCUVV3N1FVRkRSVVFzYzBKQlFWa3NSMEZCUnpkRExGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRbXBDTEZsQlFWa3NRMEZCUTB3c1UwRkJZaXhEUVVGMVFtSXNSMEZCT1VNc1EwRkJaanRCUVVOQkswVXNjMEpCUVZrc1EwRkJRemxGTEV0QlFXSXNRMEZCYlVKdFF5eFBRVUZ1UWl4SFFVRTJRbXhDTEZsQlFWa3NRMEZCUTB3c1UwRkJZaXhEUVVGMVFsb3NTMEZCY0VRN1FVRkRRVGhGTEhOQ1FVRlpMRU5CUVVONFF5eFhRVUZpTEVOQlFYbENUQ3hSUVVGUkxFTkJRVU5uUXl4alFVRlVMRU5CUVhkQ1ZTeExRVUY0UWl4RFFVRjZRanRCUVVOQk8wRkJla0pLT3p0QlFUSkNRU3hoUVVGUFJ5eFpRVUZRTzBGQlEwUTdPMEZCUlVRc1lVRkJVelZFTEdsQ1FVRlVMRU5CUVRKQ09FUXNVVUZCTTBJc1JVRkJjVU5ETEZOQlFYSkRMRVZCUVdkRU8wRkJRemxETEZWQlFVbERMRTFCUVUwc1IwRkJSeXhGUVVGaU96dEJRVU5CTEZkQlFVc3NTVUZCU1RORkxFZEJRVlFzU1VGQlowSjVSU3hSUVVGb1FpeEZRVUV3UWp0QlFVTjRRa1VzWTBGQlRTeERRVUZETTBVc1IwRkJSQ3hEUVVGT0xFZEJRV05vUXl4TlFVRk5MRU5CUVVNMFF5eE5RVUZRTEVOQlFXTXNSVUZCWkN4RlFVRnJRalpFTEZGQlFWRXNRMEZCUTNwRkxFZEJRVVFzUTBGQk1VSXNSVUZCYVVNd1JTeFRRVUZUTEVOQlFVTXhSU3hIUVVGRUxFTkJRVEZETEVOQlFXUTdRVUZEUkRzN1FVRkRSQ3hoUVVGUE1rVXNUVUZCVUR0QlFVTkVPenRCUVVWRUxGZEJRVTl1UkN4TlFVRk5MRVZCUVdJN1FVRkRTRHM3UVVFelRYZENMRU03T3pzN096czdPenM3T3p0QlEwWTNRanRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3TzBGQlRVRXNUVUZCVFc5RUxGVkJRVTRzVTBGQmVVSkRMSGxFUVVGUkxFTkJRVU5ETEU5QlFWUXNRMEZCYVVJeFNDeHRSRUZCYWtJc1JVRkRha0k3UVVGQlJUSklMRTFCUVVrc1JVRkJReXhEUVVGRFF5d3JSRUZCUkN4RFFVRlFPMEZCUTBWRExFdEJRVWNzUlVGQlF5eERRVUZEUXl3NFJFRkJSRHRCUVVST0xFTkJSR2xDTEVOQlFYcENMRU5CUldkRE8wRkJRelZDTjBnc1lVRkJWeXhIUVVGRk8wRkJRMVE3UVVGRFFTeFRRVUZMT0Vnc1ZVRkJUQ3hIUVVGclFpeEZRVUZzUWp0QlFVTklPenRCUVVWRUwwY3NXVUZCVlN4RFFVRkRReXhKUVVGRUxFVkJRVTA3UVVGRFdpeFJRVUZKSzBjc1MwRkJTeXhIUVVGSE8wRkJRVU12Unl4VlFVRkVPMEZCUVU5blNDeGxRVUZUTEVWQlFVVXNTVUZCU1hKRUxFbEJRVW83UVVGQmJFSXNTMEZCV2p0QlFVTkJMRk5CUVV0dFJDeFZRVUZNTEVOQlFXZENSeXhKUVVGb1FpeERRVUZ4UWtZc1MwRkJja0k3UVVGRFFTeFJRVUZKUnl4WFFVRlhMRWRCUVVjc1JVRkJiRUk3UVVGRFFTeFRRVUZMTDBnc1IwRkJUQ3hEUVVGVkxFZEJRVVVyU0N4WFFVRlpMRWRCUVVWSUxFdEJRVXNzUTBGQlF5OUhMRWxCUVVzc1kwRkJZU3RITEV0QlFVc3NRMEZCUTBNc1UwRkJWU3hGUVVGc1JUdEJRVU5JT3p0QlFVTkVMMGNzVlVGQlVTeEhRVUZGTzBGQlEwNHNVVUZCUnl4TFFVRkxOa2NzVlVGQlRDeERRVUZuUW1wRkxFMUJRV2hDTEVkQlFYbENMRU5CUVRWQ0xFVkJRVGhDTzBGQlF6RkNMRlZCUVVsclJTeExRVUZMTEVkQlFVY3NTMEZCUzBRc1ZVRkJUQ3hEUVVGblFrc3NSMEZCYUVJc1JVRkJXanRCUVVOQkxGVkJRVWxFTEZkQlFWY3NSMEZCUnl4RlFVRnNRanRCUVVOQkxGZEJRVXN2U0N4SFFVRk1MRU5CUVZVc1IwRkJSU3RJTEZkQlFWa3NSMEZCUlVnc1MwRkJTeXhEUVVGREwwY3NTVUZCU3l4bFFVRmxMRWxCUVVreVJDeEpRVUZLTEV0QlFXRnZSQ3hMUVVGTExFTkJRVU5ETEZOQlFWY3NUMEZCYkVZN1FVRkRTRHRCUVVOS096dEJRV3hDTWtJN08wRkJiMEpxUWl4dFJVRkJTVlFzVlVGQlNpeEZRVUZtTEVVN096czdPenM3T3pzN096dEJRMmhEUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3UVVGRlFTeE5RVUZOU1N4aFFVRmhMRWRCUVVsVExGRkJRVVFzU1VGQllTeGpRVUZqUVN4UlFVRmtMRU5CUVhOQ08wRkJRM0pFZGtnc1UwRkJUeXhEUVVGRGQwZ3NUMEZCUkN4RlFVRlRPMEZCUTFvc1UwRkJTME1zVlVGQlRDeEhRVUZyUWl4TFFVRnNRanRCUVVOSU96dEJRVU5FYmtrc1MwRkJSeXhEUVVGRFZ5eFBRVUZFTEVWQlFWTTdRVUZEVWp0QlFVTkJMRk5CUVV0M1NDeFZRVUZNTEVkQlFXdENMRXRCUVd4Q096dEJRVU5CTEZGQlFVY3NTMEZCU3k5SUxFdEJRVXdzU1VGQll5eExRVUZMVGl4alFVRk1MRU5CUVc5Q0xFdEJRWEJDTEVOQlFXcENMRVZCUVRSRE8wRkJRM2hETEdGQlFVOHNTVUZCVUR0QlFVTklPenRCUVVORWMwa3NWMEZCVHl4RFFVRkRjRWtzUjBGQlVpeERRVUZaVnl4UFFVRmFPMEZCUTBnN08wRkJRMFJKTEdWQlFXRXNRMEZCUTBNc1MwRkJSQ3hGUVVGUE8wRkJRMmhDTEZOQlFVdHhTQ3hqUVVGTUxFbEJRWFZDTEVOQlFYWkNPMEZCUTBFc1UwRkJTMFlzVlVGQlRDeEhRVUZyUWl4SlFVRkpSeXhuUkVGQlNpeERRVUZ2UWl4RlFVRndRaXhGUVVGM1FrRXNiMFJCUVVFc1EwRkJiMEpETEdOQlFUVkRMRU5CUVd4Q08wRkJRMEVzVTBGQlMwb3NWVUZCVEN4RFFVRm5Ra3NzVVVGQmFFSXNRMEZCZVVKNFNDeExRVUY2UWp0QlFVTklPenRCUVVORVF5eG5Ra0ZCWXl4RFFVRkRkMGdzWlVGQlJDeEZRVUZwUWp0QlFVTXpRaXhSUVVGSExFTkJRVU1zUzBGQlMwNHNWVUZCVkN4RlFVRnZRanRCUVVOb1FpeFhRVUZMY0Vnc1lVRkJURHRCUVVOSU96dEJRVU5FTEZOQlFVdHpTQ3hqUVVGTUxFbEJRWFZDTEVOQlFYWkNPMEZCUTBFc1UwRkJTMFlzVlVGQlRDeERRVUZuUWs4c1RVRkJhRUlzUTBGQmRVSXNTMEZCUzB3c1kwRkJOVUk3UVVGRFNEczdRVUZEUkc1SUxHRkJRVmNzUjBGQlJUdEJRVU5VTEZOQlFVdHBTQ3hWUVVGTUxFTkJRV2RDVVN4SlFVRm9RanRCUVVOQkxGTkJRVXRPTEdOQlFVd3NSMEZCYzBJc1EwRkJkRUk3UVVGRFNEczdRVUZEUkhSSkxFOUJRVXNzUTBGQlExa3NUMEZCUkN4RlFVRlRPMEZCUTFZc1UwRkJTM2RJTEZWQlFVd3NSMEZCYTBJc1MwRkJiRUk3TzBGQlEwRXNVVUZCUnl4TFFVRkxMMGdzUzBGQlRDeEpRVUZqTEV0QlFVdE9MR05CUVV3c1EwRkJiMElzVDBGQmNFSXNRMEZCYWtJc1JVRkJPRU03UVVGRE1VTXNZVUZCVHl4SlFVRlFPMEZCUTBnN08wRkJRMFJ6U1N4WFFVRlBMRU5CUVVOeVNTeExRVUZTTEVOQlFXTlpMRTlCUVdRN1FVRkRTRHM3UVVGc1EyOUVMRU5CUVhwRU96dEJRWEZEWlRaSExEUkZRVUZtTEVVN096czdPenM3T3pzN096dEJRM1pEUVR0QlFVRkJPMEZCUVVFN08wRkJRMEVzVFVGQlRVVXNXVUZCV1N4SFFVRkpUeXhSUVVGRUxFbEJRV0VzWTBGQlkwRXNVVUZCWkN4RFFVRnpRanRCUVVOd1JIWklMRk5CUVU4c1EwRkJRMnRKTEZWQlFWVXNSMEZCUXl4SlFVRmFMRVZCUVdsQ08wRkJRM0JDUVN4alFVRlZMRWRCUVVkQkxGVkJRVlVzU1VGQlJURkZMRkZCUVZFc1EwRkJRekpGTEVsQlFXeERPMEZCUTBFc1VVRkJTWFJDTEVsQlFVa3NSMEZCUjNKRUxGRkJRVkVzUTBGQlEwTXNZVUZCVkN4RFFVRjFRaXhKUVVGMlFpeERRVUZZTzBGQlEwRnZSQ3hSUVVGSkxFTkJRVU4wUml4TFFVRk1MRU5CUVZkdFF5eFBRVUZZTEVkQlFYRkNMSGRDUVVGeVFqdEJRVU5CZDBVc1kwRkJWU3hEUVVGRGNrVXNWMEZCV0N4RFFVRjFRbWRFTEVsQlFYWkNPMEZCUTBFc1UwRkJTM1ZDTEU5QlFVd3NSMEZCWlVZc1ZVRkJaanRCUVVOQkxGTkJRVXRITEZGQlFVd3NSMEZCWjBKSUxGVkJRVlVzUTBGQlEwa3NiMEpCUVZnc1EwRkJaME1zU1VGQmFFTXNSVUZCYzBNc1EwRkJkRU1zUTBGQmFFSTdRVUZEU0RzN1FVRkRSRU1zWTBGQldTeERRVUZEYUVZc1QwRkJUeXhIUVVGRExFbEJRVlFzUlVGQll6dEJRVU4wUWtFc1YwRkJUeXhIUVVGSFFTeFBRVUZQTEVsQlFVa3NTMEZCU3paRkxFOUJRVEZDTzBGQlEwRTNSU3hYUVVGUExFTkJRVU5wUml4VFFVRlNMRWRCUVc5Q2FrWXNUMEZCVHl4RFFVRkRhMFlzV1VGQlVpeEhRVUYxUW14R0xFOUJRVThzUTBGQlEyMUdMRmxCUVc1RU8wRkJRMGc3TzBGQlEwUkRMRlZCUVZFc1EwRkJRME1zWTBGQlJDeEZRVUZuUWp0QlFVTndRanRCUVVOQkxGRkJRVWxETEU5QlFVOHNSMEZCUnl4TFFVRkxVaXhSUVVGTUxFTkJRV05ETEc5Q1FVRmtMRU5CUVcxRExFbEJRVzVETEVOQlFXUTdRVUZEUVN4UlFVRkpla0lzU1VGQlNTeEhRVUZIWjBNc1QwRkJUeXhEUVVGRFFTeFBRVUZQTEVOQlFVTTNSaXhOUVVGU0xFZEJRV1VzUTBGQmFFSXNRMEZCYkVJN08wRkJRMEVzVVVGQlJ5eERRVUZETmtRc1NVRkJSQ3hKUVVGVFFTeEpRVUZKTEVOQlFVTnBReXhUUVVGTUxFTkJRV1ZETEZGQlFXWXNRMEZCZDBJc2FVSkJRWGhDTEVOQlFWb3NSVUZCZFVRN1FVRkRia1E3UVVGRFFXeERMRlZCUVVrc1IwRkJSM0pFTEZGQlFWRXNRMEZCUTBNc1lVRkJWQ3hEUVVGMVFpeEpRVUYyUWl4RFFVRlFPMEZCUTBGdlJDeFZRVUZKTEVOQlFVTnBReXhUUVVGTUxFTkJRV1ZGTEVkQlFXWXNRMEZCYlVJc2FVSkJRVzVDTzBGQlEwRXNWMEZCUzFnc1VVRkJUQ3hEUVVGamVFVXNWMEZCWkN4RFFVRXdRbWRFTEVsQlFURkNPMEZCUTBnN08wRkJRMFFzVVVGQlNXOURMRkZCUVZFc1IwRkJSMnhKTEcxRVFVRlJMRU5CUVVORExGZEJRVlFzUTBGQmNVSTBTQ3hqUVVGeVFpeERRVUZtTzBGQlEwRXNVVUZCU1Uwc1NVRkJTU3hIUVVGSExFbEJRVWx3Uml4SlFVRktMRVZCUVZnN1FVRkRRU3RETEZGQlFVa3NRMEZCUTNORExGTkJRVXdzUjBGQmEwSXNaMFJCUVN0RFJDeEpRVUZMTEUxQlFYUkZPMEZCUTBGeVF5eFJRVUZKTEVOQlFVTm9SQ3hYUVVGTUxFTkJRV2xDYjBZc1VVRkJha0k3UVVGRFFTeFRRVUZMVml4WlFVRk1PMEZCUTBnN08wRkJRMFJxU2l4TFFVRkhMRU5CUVVOWExFOUJRVVFzUlVGQlV6dEJRVU5TTEZGQlFVY3NTMEZCUzFBc1MwRkJUQ3hKUVVGakxFdEJRVXRPTEdOQlFVd3NRMEZCYjBJc1MwRkJjRUlzUTBGQmFrSXNSVUZCTkVNN1FVRkRlRU1zWVVGQlR5eEpRVUZRTzBGQlEwZzdPMEZCUTBRc1VVRkJSeXhEUVVGRExFdEJRVXRwU2l4UlFVRk9MRWxCUVd0Q0xFTkJRVU1zUzBGQlMwRXNVVUZCVEN4RFFVRmplRVVzVjBGQmNFTXNSVUZCWjBRN1FVRkROVU1zVjBGQlN6ZEVMRTlCUVV3N1FVRkRTRHM3UVVGRFJDeFJRVUZKTmtjc1NVRkJTU3hIUVVGSGNrUXNVVUZCVVN4RFFVRkRReXhoUVVGVUxFTkJRWFZDTEVsQlFYWkNMRU5CUVZnN1FVRkRRVzlFTEZGQlFVa3NRMEZCUTNSR0xFdEJRVXdzUTBGQlYyMURMRTlCUVZnc1IwRkJjVUlzYlVOQlFYSkNPMEZCUTBFc1VVRkJTWFZHTEZGQlFWRXNSMEZCUjJ4SkxHMUVRVUZSTEVOQlFVTkRMRmRCUVZRc1EwRkJjVUptTEU5QlFYSkNMRU5CUVdZN1FVRkRRU3hSUVVGSmFVb3NTVUZCU1N4SFFVRkhMRWxCUVVsd1JpeEpRVUZLTEVWQlFWZzdRVUZEUVN0RExGRkJRVWtzUTBGQlEzTkRMRk5CUVV3c1IwRkJhMElzWjBSQlFTdERSQ3hKUVVGTExFMUJRWFJGTzBGQlEwRnlReXhSUVVGSkxFTkJRVU5vUkN4WFFVRk1MRU5CUVdsQ2IwWXNVVUZCYWtJN1FVRkRRU3hUUVVGTFdpeFJRVUZNTEVOQlFXTjRSU3hYUVVGa0xFTkJRVEJDWjBRc1NVRkJNVUk3UVVGRFFTeFRRVUZMTUVJc1dVRkJURHRCUVVOQllpeFhRVUZQTEVOQlFVTndTU3hIUVVGU0xFTkJRVmxYTEU5QlFWbzdRVUZEU0RzN1FVRkZSRm9zVDBGQlN5eERRVUZEV1N4UFFVRkVMRVZCUVZNN1FVRkRWaXhSUVVGSExFdEJRVXRRTEV0QlFVd3NTVUZCWXl4TFFVRkxUaXhqUVVGTUxFTkJRVzlDTEU5QlFYQkNMRU5CUVdwQ0xFVkJRVGhETzBGQlF6RkRMR0ZCUVU4c1NVRkJVRHRCUVVOSUxFdEJTRk1zUTBGSlZqczdPMEZCUTBGelNTeFhRVUZQTEVOQlFVTnlTU3hMUVVGU0xFTkJRV05aTEU5QlFXUTdRVUZEU0RzN1FVRnlSRzFFTEVOQlFYaEVPenRCUVhkRVpTdEhMREpGUVVGbUxFVTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGRGVrUkJMRGhFT3pzN096czdPenM3T3p0QlEwRkJMREJFSWl3aVptbHNaU0k2SWtCallYVnpZV3hPWlhRdmJHOW5MbmRsWWk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUIzWldKd1lXTnJWVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpaHliMjkwTENCbVlXTjBiM0o1S1NCN1hHNWNkR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlBbUppQjBlWEJsYjJZZ2JXOWtkV3hsSUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaaFkzUnZjbmtvY21WeGRXbHlaU2hjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWlrc0lISmxjWFZwY21Vb1hDSmpiR2t0Y0hKdlozSmxjM05jSWlrcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvVzF3aVkyRjFjMkZzTFc1bGRDNTFkR2xzYzF3aUxDQmNJbU5zYVMxd2NtOW5jbVZ6YzF3aVhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0pBWTJGMWMyRnNUbVYwTDJ4dloxd2lYU0E5SUdaaFkzUnZjbmtvY21WeGRXbHlaU2hjSW1OaGRYTmhiQzF1WlhRdWRYUnBiSE5jSWlrc0lISmxjWFZwY21Vb1hDSmpiR2t0Y0hKdlozSmxjM05jSWlrcE8xeHVYSFJsYkhObFhHNWNkRngwY205dmRGdGNJa0JqWVhWellXeE9aWFF2Ykc5blhDSmRJRDBnWm1GamRHOXllU2h5YjI5MFcxd2lZMkYxYzJGc0xXNWxkQzUxZEdsc2Mxd2lYU3dnY205dmRGdGNJbU5zYVMxd2NtOW5jbVZ6YzF3aVhTazdYRzU5S1NoMGFHbHpMQ0JtZFc1amRHbHZiaWhmWDFkRlFsQkJRMHRmUlZoVVJWSk9RVXhmVFU5RVZVeEZYMk5oZFhOaGJGOXVaWFJmZFhScGJITmZYeXdnWDE5WFJVSlFRVU5MWDBWWVZFVlNUa0ZNWDAxUFJGVk1SVjlqYkdsZmNISnZaM0psYzNOZlh5a2dlMXh1Y21WMGRYSnVJQ0lzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0JuWlhRNklHZGxkSFJsY2lCOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUY5ZlpYTk5iMlIxYkdVZ2IyNGdaWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUlEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5a2dlMXh1SUZ4MFhIUnBaaWgwZVhCbGIyWWdVM2x0WW05c0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbkxDQjdJSFpoYkhWbE9pQW5UVzlrZFd4bEp5QjlLVHRjYmlCY2RGeDBmVnh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnSjE5ZlpYTk5iMlIxYkdVbkxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1kzSmxZWFJsSUdFZ1ptRnJaU0J1WVcxbGMzQmhZMlVnYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ01Ub2dkbUZzZFdVZ2FYTWdZU0J0YjJSMWJHVWdhV1FzSUhKbGNYVnBjbVVnYVhSY2JpQmNkQzh2SUcxdlpHVWdKaUF5T2lCdFpYSm5aU0JoYkd3Z2NISnZjR1Z5ZEdsbGN5QnZaaUIyWVd4MVpTQnBiblJ2SUhSb1pTQnVjMXh1SUZ4MEx5OGdiVzlrWlNBbUlEUTZJSEpsZEhWeWJpQjJZV3gxWlNCM2FHVnVJR0ZzY21WaFpIa2dibk1nYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ09Id3hPaUJpWldoaGRtVWdiR2xyWlNCeVpYRjFhWEpsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMblFnUFNCbWRXNWpkR2x2YmloMllXeDFaU3dnYlc5a1pTa2dlMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNU2tnZG1Gc2RXVWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0haaGJIVmxLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRGdwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGFXWW9LRzF2WkdVZ0ppQTBLU0FtSmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIWmhiSFZsSUNZbUlIWmhiSFZsTGw5ZlpYTk5iMlIxYkdVcElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBkbUZ5SUc1eklEMGdUMkpxWldOMExtTnlaV0YwWlNodWRXeHNLVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5S0c1ektUdGNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRzV6TENBblpHVm1ZWFZzZENjc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2dkbUZzZFdVNklIWmhiSFZsSUgwcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ01pQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ0lUMGdKM04wY21sdVp5Y3BJR1p2Y2loMllYSWdhMlY1SUdsdUlIWmhiSFZsS1NCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9ibk1zSUd0bGVTd2dablZ1WTNScGIyNG9hMlY1S1NCN0lISmxkSFZ5YmlCMllXeDFaVnRyWlhsZE95QjlMbUpwYm1Rb2JuVnNiQ3dnYTJWNUtTazdYRzRnWEhSY2RISmxkSFZ5YmlCdWN6dGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBd0tUdGNiaUlzSWk4cUtseHVJQ29nVkdocGN5QmpiR0Z6Y3lCd2NtOTJhV1JsWkNCMGFHVWdYRzRnS2lCQVkyeGhjM01nUW1GelpVeHZaMXh1SUNvdlhHNWpiR0Z6Y3lCQ1lYTmxURzluWjJWeWUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE1nUFNCN1pHVmlkV2M2SURBc0lHeHZaem94TENCM1lYSnVhVzVuT2pJc0lHVnljbTl5T2lBemZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1eVFXTmpaWEIwWldSTVpYWmxiSE1nUFNCN01Eb25aR1ZpZFdjbkxDQXhPaUFuYkc5bkp5d2dNam9nSjNkaGNtNXBibWNuTENBek9pQW5aWEp5YjNJbmZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1c1pYWmxiQ0E5SUhSb2FYTXVRV05qWlhCMFpXUk1aWFpsYkhOYkoyUmxZblZuSjEwN1hHNGdJQ0FnZlZ4dUlDQWdJSE5sZENCTVpYWmxiQ2hzWlhabGJDbDdYRzRnSUNBZ0lDQWdJR2xtS0hSb2FYTXVRV05qWlhCMFpXUk1aWFpsYkhOYmJHVjJaV3hkSVQwOWRXNWtaV1pwYm1Wa0tYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViR1YyWld3Z1BTQjBhR2x6TGtGalkyVndkR1ZrVEdWMlpXeHpXMnhsZG1Wc1hUc2dJQ0FnWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXeHpaWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLR0FrZTJ4bGRtVnNmU0J0ZFhOMElHSmxJRzl1WlNCdlppQWtlMDlpYW1WamRDNXJaWGx6S0hSb2FYTXVRV05qWlhCMFpXUk1aWFpsYkhNcGZXQXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lHZGxkQ0JNWlhabGJDZ3BlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1eVFXTmpaWEIwWldSTVpYWmxiSE5iZEdocGN5NXNaWFpsYkYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTI5dWJtVmpkQ2dwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiRzluS0cxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUdWeWNtOXlLRzFsYzNOaFoyVXBlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QkZjbkp2Y2lnbmFXMXdiR1Z0Wlc1MElISmxjWFZwY21Wa0p5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1pHVmlkV2NvYldWemMyRm5aU2w3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRVZ5Y205eUtDZHBiWEJzWlcxbGJuUWdjbVZ4ZFdseVpXUW5LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5jbTkxY0VKbFoybHVLRzVoYldVcGUxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCRmNuSnZjaWduYVcxd2JHVnRaVzUwSUhKbGNYVnBjbVZrSnlrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjNKdmRYQkZibVFvS1h0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMmx0Y0d4bGJXVnVkQ0J5WlhGMWFYSmxaQ2NwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEJ5YjJkeVpYTnpRbVZuYVc0b2NtRnVaMlVwZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJGY25KdmNpZ25hVzF3YkdWdFpXNTBJSEpsY1hWcGNtVmtKeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjSEp2WjNKbGMzTlZjR1JoZEdVb2JXVnpjMkZuWlNsN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUVWeWNtOXlLQ2RwYlhCc1pXMWxiblFnY21WeGRXbHlaV1FuS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J3Y205bmNtVnpjMFZ1WkNodFpYTnpZV2RsS1h0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnUlhKeWIzSW9KMmx0Y0d4bGJXVnVkQ0J5WlhGMWFYSmxaQ2NwTzF4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1FtRnpaVXh2WjJkbGNqc2lMQ0psZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUhSbGNtMU1iMmRuWlhJZ2ZTQm1jbTl0SUNjdUwzUmxjbTFNYjJkblpYSW5PMXh1WEc1bGVIQnZjblFnZXlCa1pXWmhkV3gwSUdGeklFeHZaMmRsY2sxcGVHbHVjeUI5SUdaeWIyMGdKeTR2Ykc5bloyVnlMbTFwZUdsdWN5YzdYRzVsZUhCdmNuUWdleUJrWldaaGRXeDBJR0Z6SUVKaGMyVk1iMmRuWlhJZ2ZTQm1jbTl0SUNjdUwySmhjMlZNYjJkblpYSW5PMXh1WEc0aUxDSnBiWEJ2Y25RZ2UyUmxabUYxYkhRZ1lYTWdRbUZ6WlV4dloyZGxjaUI5SUdaeWIyMGdKeTR2WW1GelpVeHZaMmRsY2ljN1hHNXBiWEJ2Y25RZ2V5QmhjM05sY25RZ2ZTQm1jbTl0SUNkallYVnpZV3d0Ym1WMExuVjBhV3h6Snp0Y2JtTnZibk4wSUV4dloyZGxjazFwZUdsdWN5QTlJQ2hDWVhObFpFTnNZWE56S1QwK0lHTnNZWE56SUdWNGRHVnVaSE1nUW1GelpXUkRiR0Z6YzN0Y2JpQWdJQ0JjYmlBZ0lDQnpaWFFnVEc5bloyVnlLR3h2WjJkbGNpbDdYRzRnSUNBZ0lDQWdJR0Z6YzJWeWRDNWlaVWx1YzNSaGJtTmxUMllvYkc5bloyVnlMQ0JDWVhObFRHOW5aMlZ5S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVzYjJkblpYSWdQU0JzYjJkblpYSTdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJR2RsZENCTWIyZG5aWElvS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9JWFJvYVhNdWJHOW5aMlZ5S1h0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lFVnljbTl5S0Nkc2IyZG5aWElnYVhNZ2JtOTBJSE5sZENjcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG14dloyZGxjanRjYmlBZ0lDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCTWIyZG5aWEpOYVhocGJuTTdJaXdpTHk4Z2IzSnBaMmx1SUdOdlpHVWdabkp2YlNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdmJIVmplV2RwYkdKbGNuUXZhbk52Ymkxa2FYTndiR0Y1TDJKc2IySXZiV0Z6ZEdWeUwycHpiMjR0WkdsemNHeGhlUzVxYzF4dUx5OGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTNJRXgxWTNrZ1IybHNZbVZ5ZEZ4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdTbk52YmxacFpYZDdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9LWHRjYmlBZ0lDQjlYRzRnSUNBZ2MzUmhkR2xqSUVwVFQwNUVhWE53YkdGNUtHcHpiMjRzSUc5d1pXNU1aWFpsYkhOQmNtY3NJSE4wZVd4bFQzQjBhVzl1YzBGeVp5a2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1JFVkdRVlZNVkY5VFZGbE1SVjlQVUZSSlQwNVRJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lISnZiM1E2SUhzZ2RHRm5PaUFuY0hKbEp5d2djM1I1YkdVNklDZHdZV1JrYVc1bk9pQTFjSGc3SUdadmJuUXRjMmw2WlRvZ01YSmxiVHNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdkR2wwYkdWRGIyNTBZV2x1WlhJNklIc2dkR0ZuT2lBblpHbDJKeXdnYzNSNWJHVTZJQ2R0WVhKbmFXNHRZbTkwZEc5dE9pQXpjSGc3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJSFJwZEd4bE9pQjdJSFJoWnpvZ0ozTndZVzRuTENCemRIbHNaVG9nSjJOMWNuTnZjam9nY0c5cGJuUmxjanNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdkR2wwYkdWVVpYaDBPaUI3SUhSaFp6b2dKM053WVc0bkxDQnpkSGxzWlRvZ0p5Y2dmU3hjYmlBZ0lDQWdJQ0FnSUNCdmNHVnVRblYwZEc5dU9pQjdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHRm5PaUFuYzNCaGJpY3NYRzRnSUNBZ0lDQWdJQ0FnSUNCemRIbHNaVG9nSjJScGMzQnNZWGs2SUdsdWJHbHVaUzFpYkc5amF6c2diV0Z5WjJsdU9pQXdjSGdnTjNCNElEQndlQ0F5Y0hnN0lHSnZjbVJsY2kxMGIzQTZJRFZ3ZUNCemIyeHBaQ0IwY21GdWMzQmhjbVZ1ZERzZ0oxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXJJQ2RpYjNKa1pYSXRZbTkwZEc5dE9pQTFjSGdnYzI5c2FXUWdkSEpoYm5Od1lYSmxiblE3SUdKdmNtUmxjaTFzWldaME9pQTFjSGdnYzI5c2FXUWdZbXhoWTJzN0p5eGNiaUFnSUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNBZ0lHTnZiblJsYm5SelEyOXVkR0ZwYm1WeU9pQjdJSFJoWnpvZ0oyUnBkaWNzSUhOMGVXeGxPaUFuY0dGa1pHbHVaeTFzWldaME9pQXhPSEI0T3ljZ2ZTeGNiaUFnSUNBZ0lDQWdJQ0JyWlhsV1lXeDFaVkJoYVhJNklIc2dkR0ZuT2lBbmMzQmhiaWNzSUhOMGVXeGxPaUFuWkdsemNHeGhlVG9nWW14dlkyczdJRzFoY21kcGJpMWliM1IwYjIwNklESndlRHNuSUgwc1hHNGdJQ0FnSUNBZ0lDQWdhMlY1T2lCN0lIUmhaem9nSjNOd1lXNG5MQ0J6ZEhsc1pUb2dKMk52Ykc5eU9pQmtZWEpyWW14MVpUc25JSDBzWEc0Z0lDQWdJQ0FnSUNBZ2MzbHRZbTlzVm1Gc2RXVTZJSHNnZEdGbk9pQW5jM0JoYmljc0lITjBlV3hsT2lBblkyOXNiM0k2SUdSaGNtdG5jbVZsYmpzbklIMHNYRzRnSUNBZ0lDQWdJQ0FnYzNSeWFXNW5WbUZzZFdVNklIc2dkR0ZuT2lBbmMzQmhiaWNzSUhOMGVXeGxPaUFuWTI5c2IzSTZJR055YVcxemIyNDdKeUI5TEZ4dUlDQWdJQ0FnSUNBZ0lHNTFiV0psY2xaaGJIVmxPaUI3SUhSaFp6b2dKM053WVc0bkxDQnpkSGxzWlRvZ0oyTnZiRzl5T2lCaWJIVmxPeWNnZlN4Y2JpQWdJQ0FnSUNBZ0lDQmliMjlzWldGdVZtRnNkV1U2SUhzZ2RHRm5PaUFuYzNCaGJpY3NJSE4wZVd4bE9pQW5ZMjlzYjNJNklHSnNkV1U3SnlCOUxGeHVJQ0FnSUNBZ0lDQWdJRzUxYkd4V1lXeDFaVG9nZXlCMFlXYzZJQ2R6Y0dGdUp5d2djM1I1YkdVNklDZGpiMnh2Y2pvZ1lteDFaVHNuSUgwc1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJSFpoY2lCdmNHVnVUR1YyWld4eklEMGdhWE5PWVU0b2NHRnljMlZKYm5Rb2IzQmxia3hsZG1Wc2MwRnlaeWtwSUQ4Z1NXNW1hVzVwZEhrZ09pQndZWEp6WlVsdWRDaHZjR1Z1VEdWMlpXeHpRWEpuS1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJSE4wZVd4bFQzQjBhVzl1Y3lBOUlIUjVjR1Z2WmlCemRIbHNaVTl3ZEdsdmJuTkJjbWNnUFQwOUlDZHZZbXBsWTNRbklGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQeUJ0WlhKblpWTjBlV3hsVDNCMGFXOXVjeWhFUlVaQlZVeFVYMU5VV1V4RlgwOVFWRWxQVGxNc0lITjBlV3hsVDNCMGFXOXVjMEZ5WnlsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEb2dSRVZHUVZWTVZGOVRWRmxNUlY5UFVGUkpUMDVUTzF4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUU5aWFtVmpkQzVoYzNOcFoyNGdJVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJRTlpYW1WamRDNWhjM05wWjI0Z1BTQm1kVzVqZEdsdmJpaDBZWEpuWlhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBZWEpuWlhRZ1BUMGdiblZzYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZERZVzV1YjNRZ1kyOXVkbVZ5ZENCMWJtUmxabWx1WldRZ2IzSWdiblZzYkNCMGJ5QnZZbXBsWTNRbktUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUIwYnlBOUlFOWlhbVZqZENoMFlYSm5aWFFwTzF4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FXNWtaWGdnUFNBeE95QnBibVJsZUNBOElHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lHbHVaR1Y0S3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJRzVsZUhSVGIzVnlZMlVnUFNCaGNtZDFiV1Z1ZEhOYmFXNWtaWGhkTzF4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYm1WNGRGTnZkWEpqWlNBaFBTQnVkV3hzS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2JtVjRkRXRsZVNCcGJpQnVaWGgwVTI5MWNtTmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9UMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzVsZUhSVGIzVnlZMlVzSUc1bGVIUkxaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ2VzI1bGVIUkxaWGxkSUQwZ2JtVjRkRk52ZFhKalpWdHVaWGgwUzJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYnp0Y2JpQWdJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJSEpsYm1SbGNpZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdaV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb2MzUjViR1ZQY0hScGIyNXpMbkp2YjNRdWRHRm5LVHRjYmlBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWNtOXZkQzV6ZEhsc1pUdGNiaUFnSUNCY2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYW5OdmJpQTlQVDBnYm5Wc2JDQjhmQ0JxYzI5dUlEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCMmIybGtSV3hsYldWdWRDQTlJR2RsZEZaaGJIVmxLRzUxYkd3cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4bGJXVnVkQzVoY0hCbGJtUkRhR2xzWkNoMmIybGtSV3hsYldWdWRDazdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNocWMyOXVJR2x1YzNSaGJtTmxiMllnUkdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR1JoZEdWRmJHVnRaVzUwSUQwZ1oyVjBWbUZzZFdVb2FuTnZiaTUwYjBsVFQxTjBjbWx1WnlncEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHRjBaVVZzWlcxbGJuUXBPMXh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUdwemIyNGdJVDA5SUNkdlltcGxZM1FuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2JtOXVSWGh3WVc1a1lXSnNaVVZzWlcxbGJuUWdQU0JuWlhSV1lXeDFaU2hxYzI5dUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb2JtOXVSWGh3WVc1a1lXSnNaVVZzWlcxbGJuUXBPMXh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnZEdsMGJHVWdQU0JCY25KaGVTNXBjMEZ5Y21GNUtHcHpiMjRwSUQ4Z0owRnljbUY1V3ljZ0t5QnFjMjl1TG14bGJtZDBhQ0FySUNkZEp5QTZJQ2RQWW1wbFkzUW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSFJvYVhOTVpYWmxiRWx6UTJ4dmMyVmtJRDBnYjNCbGJreGxkbVZzY3lBOElERTdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHVnRaVzUwTG1Gd2NHVnVaRU5vYVd4a0tHZGxkRlJwZEd4bEtIUnBkR3hsTENCdWRXeHNMQ0IwYUdselRHVjJaV3hKYzBOc2IzTmxaQ2twTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2hqYjI1MlpYSjBTbk52YmxSdlJXeGxiV1Z1ZEhNb2FuTnZiaXdnTVNrcE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaV3hsYldWdWREdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQm1kVzVqZEdsdmJpQmpiMjUyWlhKMFNuTnZibFJ2Uld4bGJXVnVkSE1vYW5OdmJpd2dhVzVrWlhncElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2RHaHBjMHhsZG1Wc1NYTkRiRzl6WldRZ1BTQnBibVJsZUNBK0lHOXdaVzVNWlhabGJITTdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHNWxlSFJNWlhabGJFbHpRMnh2YzJWa0lEMGdhVzVrWlhnZ0t5QXhJRDRnYjNCbGJreGxkbVZzY3p0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnWTI5dWRHRnBibVZ5SUQwZ1oyVjBRMjl1ZEdWdWRITkRiMjUwWVdsdVpYSW9kR2hwYzB4bGRtVnNTWE5EYkc5elpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUd0bGVTQnBiaUJxYzI5dUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9RWEp5WVhrdWFYTkJjbkpoZVNocWMyOXVXMnRsZVYwcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNpNWhjSEJsYm1SRGFHbHNaQ2huWlhSVWFYUnNaU2duUVhKeVlYbGJKeUFySUdwemIyNWJhMlY1WFM1c1pXNW5kR2dnS3lBblhTY3NJR3RsZVN3Z2JtVjRkRXhsZG1Wc1NYTkRiRzl6WldRcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR0ZwYm1WeUxtRndjR1Z1WkVOb2FXeGtLR052Ym5abGNuUktjMjl1Vkc5RmJHVnRaVzUwY3locWMyOXVXMnRsZVYwc0lHbHVaR1Y0SUNzZ01Ta3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHFjMjl1VzJ0bGVWMGdQVDA5SUc1MWJHd2dmSHdnYW5OdmJsdHJaWGxkSUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGTjBZVzVrWVhKa1VHRnBjaWhyWlhrc0lHNTFiR3dwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvYW5OdmJsdHJaWGxkSUdsdWMzUmhibU5sYjJZZ1JHRjBaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEl1WVhCd1pXNWtRMmhwYkdRb1oyVjBVM1JoYm1SaGNtUlFZV2x5S0d0bGVTd2dhbk52Ymx0clpYbGRMblJ2U1ZOUFUzUnlhVzVuS0NrcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUdwemIyNWJhMlY1WFNBOVBUMGdKMjlpYW1WamRDY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlMbUZ3Y0dWdVpFTm9hV3hrS0dkbGRGUnBkR3hsS0NkUFltcGxZM1FuTENCclpYa3NJRzVsZUhSTVpYWmxiRWx6UTJ4dmMyVmtLU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5SaGFXNWxjaTVoY0hCbGJtUkRhR2xzWkNoamIyNTJaWEowU25OdmJsUnZSV3hsYldWdWRITW9hbk52Ymx0clpYbGRMQ0JwYm1SbGVDQXJJREVwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNpNWhjSEJsYm1SRGFHbHNaQ2huWlhSVGRHRnVaR0Z5WkZCaGFYSW9hMlY1TENCcWMyOXVXMnRsZVYwcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbFRlVzFpYjJ4eklEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JQWW1wbFkzUXVaMlYwVDNkdVVISnZjR1Z5ZEhsVGVXMWliMnh6S0dwemIyNHBMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNG9jM2x0WW05c0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNpNWhjSEJsYm1SRGFHbHNaQ2huWlhSVGRHRnVaR0Z5WkZCaGFYSW9jM2x0WW05c0xuUnZVM1J5YVc1bktDa3NJR3B6YjI1YmMzbHRZbTlzWFNrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMjUwWVdsdVpYSTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdablZ1WTNScGIyNGdaMlYwVkdsMGJHVW9kR2wwYkdWVVpYaDBMQ0J2Y0hScGIyNWhiRXRsZVN3Z2JHVjJaV3hKYzBOc2IzTmxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJqZFhKeVpXNTBiSGxEYkc5elpXUWdQU0JzWlhabGJFbHpRMnh2YzJWa08xeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCamIyNTBZV2x1WlhKRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2h6ZEhsc1pVOXdkR2x2Ym5NdWRHbDBiR1ZEYjI1MFlXbHVaWEl1ZEdGbktUdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1MFlXbHVaWEpGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11ZEdsMGJHVkRiMjUwWVdsdVpYSXVjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpaWFJCZEhSeWFXSjFkR1VvSjJSaGRHRXRkR1Z6ZENjc0lDZDBhWFJzWlVOdmJuUmhhVzVsY2ljcE8xeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCMFpYaDBSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb2MzUjViR1ZQY0hScGIyNXpMblJwZEd4bFZHVjRkQzUwWVdjcE8xeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCMGFYUnNaVVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTUwYVhSc1pTNTBZV2NwTzF4dUlDQWdJQ0FnSUNBZ0lIUnBkR3hsUld4bGJXVnVkQzV6ZEhsc1pTNWpjM05VWlhoMElEMGdjM1I1YkdWUGNIUnBiMjV6TG5ScGRHeGxMbk4wZVd4bE8xeHVJQ0FnSUNBZ0lDQWdJSFJsZUhSRmJHVnRaVzUwTG5OMGVXeGxMbU56YzFSbGVIUWdQU0J6ZEhsc1pVOXdkR2x2Ym5NdWRHbDBiR1ZVWlhoMExuTjBlV3hsTzF4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUhScGRHeGxSV3hsYldWdWRDNWhjSEJsYm1SRGFHbHNaQ2huWlhSUGNHVnVRblYwZEc5dUtHeGxkbVZzU1hORGJHOXpaV1FwS1R0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYjNCMGFXOXVZV3hMWlhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSbGVIUkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR2RsZEV0bGVTaHZjSFJwYjI1aGJFdGxlU2twTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0IwWlhoMFJXeGxiV1Z1ZEM1aGNIQmxibVJEYUdsc1pDaGtiMk4xYldWdWRDNWpjbVZoZEdWVVpYaDBUbTlrWlNoMGFYUnNaVlJsZUhRcEtUdGNiaUFnSUNBZ0lDQWdJQ0IwYVhSc1pVVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9kR1Y0ZEVWc1pXMWxiblFwTzF4dUlDQWdJRnh1SUNBZ0lDQWdJQ0FnSUhScGRHeGxSV3hsYldWdWRDNXZibU5zYVdOcklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZ5SUc5d1pXNUNkWFIwYjI0Z1BTQjBhWFJzWlVWc1pXMWxiblF1Wm1seWMzUkRhR2xzWkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoY2lCdlltcGxZM1JEYjI1MFpXNTBjeUE5SUhScGRHeGxSV3hsYldWdWRDNXdZWEpsYm5ST2IyUmxMbTVsZUhSVGFXSnNhVzVuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiMkpxWldOMFEyOXVkR1Z1ZEhNdWMzUjViR1V1WkdsemNHeGhlU0E5SUdOMWNuSmxiblJzZVVOc2IzTmxaQ0EvSUNkaWJHOWpheWNnT2lBbmJtOXVaU2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZjR1Z1UW5WMGRHOXVMbk4wZVd4bExuUnlZVzV6Wm05eWJTQTlJR04xY25KbGJuUnNlVU5zYjNObFpDQS9JQ2R5YjNSaGRHVW9PVEJrWldjcEp5QTZJQ2R5YjNSaGRHVW9NR1JsWnlrbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkR3g1UTJ4dmMyVmtJRDBnSVdOMWNuSmxiblJzZVVOc2IzTmxaRHRjYmlBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lHTnZiblJoYVc1bGNrVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9kR2wwYkdWRmJHVnRaVzUwS1R0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXVkR0ZwYm1WeVJXeGxiV1Z1ZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCblpYUlBjR1Z1UW5WMGRHOXVLR3hsZG1Wc1NYTkRiRzl6WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ1luVjBkRzl1Uld4bGJXVnVkQ0E5SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9jM1I1YkdWUGNIUnBiMjV6TG05d1pXNUNkWFIwYjI0dWRHRm5LVHRjYmlBZ0lDQWdJQ0FnSUNCaWRYUjBiMjVGYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ1BTQnpkSGxzWlU5d2RHbHZibk11YjNCbGJrSjFkSFJ2Ymk1emRIbHNaVHRjYmlBZ0lDQWdJQ0FnSUNCaWRYUjBiMjVGYkdWdFpXNTBMbk4wZVd4bExuUnlZVzV6Wm05eWJTQTlJR3hsZG1Wc1NYTkRiRzl6WldRZ1B5QW5jbTkwWVhSbEtEQmtaV2NwSnlBNklDZHliM1JoZEdVb09UQmtaV2NwSnp0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1luVjBkRzl1Uld4bGJXVnVkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0JtZFc1amRHbHZiaUJuWlhSRGIyNTBaVzUwYzBOdmJuUmhhVzVsY2locGMwTnNiM05sWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCamIyNTBZV2x1WlhKRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2h6ZEhsc1pVOXdkR2x2Ym5NdVkyOXVkR1Z1ZEhORGIyNTBZV2x1WlhJdWRHRm5LVHRjYmlBZ0lDQWdJQ0FnSUNCamIyNTBZV2x1WlhKRmJHVnRaVzUwTG5ObGRFRjBkSEpwWW5WMFpTZ25aR0YwWVMxMFpYTjBKeXdnSjJOdmJuUmxiblJ6UTI5dWRHRnBibVZ5SnlrN1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdGcGJtVnlSV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUQwZ2MzUjViR1ZQY0hScGIyNXpMbU52Ym5SbGJuUnpRMjl1ZEdGcGJtVnlMbk4wZVd4bE8xeHVJQ0FnSUNBZ0lDQWdJR052Ym5SaGFXNWxja1ZzWlcxbGJuUXVjM1I1YkdVdVpHbHpjR3hoZVNBOUlDaHBjME5zYjNObFpDQS9JQ2R1YjI1bEp5QTZJQ2RpYkc5amF5Y3BPMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqYjI1MFlXbHVaWEpGYkdWdFpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ0lDQWdJR1oxYm1OMGFXOXVJR2RsZEZOMFlXNWtZWEprVUdGcGNpaHJaWGtzSUhaaGJIVmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJSEJoYVhKRmJHVnRaVzUwSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2h6ZEhsc1pVOXdkR2x2Ym5NdWEyVjVWbUZzZFdWUVlXbHlMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdjR0ZwY2tWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQTlJSE4wZVd4bFQzQjBhVzl1Y3k1clpYbFdZV3gxWlZCaGFYSXVjM1I1YkdVN1hHNGdJQ0FnSUNBZ0lDQWdjR0ZwY2tWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1oyVjBTMlY1S0d0bGVTa3BPMXh1SUNBZ0lDQWdJQ0FnSUhCaGFYSkZiR1Z0Wlc1MExtRndjR1Z1WkVOb2FXeGtLR2RsZEZaaGJIVmxLSFpoYkhWbEtTazdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEJoYVhKRmJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUdkbGRFdGxlU2h1WVcxbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHdGxlVVZzWlcxbGJuUWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtITjBlV3hsVDNCMGFXOXVjeTVyWlhrdWRHRm5LVHRjYmlBZ0lDQWdJQ0FnSUNCclpYbEZiR1Z0Wlc1MExuTjBlV3hsTG1OemMxUmxlSFFnUFNCemRIbHNaVTl3ZEdsdmJuTXVhMlY1TG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUd0bGVVVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9aRzlqZFcxbGJuUXVZM0psWVhSbFZHVjRkRTV2WkdVb2JtRnRaU0FySUNjNklDY3BLVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYTJWNVJXeGxiV1Z1ZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNCbWRXNWpkR2x2YmlCblpYUldZV3gxWlNoMllXeDFaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUIyWVd4MVpVVnNaVzFsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUc1MWJHeFVlWEJsSUQwZ0oyOWlhbVZqZENjN1hHNGdJQ0FnSUNBZ0lDQWdjM2RwZEdOb0lDaDBlWEJsYjJZZ2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0ozTjViV0p2YkNjNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb2MzUjViR1ZQY0hScGIyNXpMbk41YldKdmJGWmhiSFZsTG5SaFp5azdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsUld4bGJXVnVkQzV6ZEhsc1pTNWpjM05VWlhoMElEMGdjM1I1YkdWUGNIUnBiMjV6TG5ONWJXSnZiRlpoYkhWbExuTjBlV3hsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpVVnNaVzFsYm5RdVlYQndaVzVrUTJocGJHUW9aRzlqZFcxbGJuUXVZM0psWVhSbFZHVjRkRTV2WkdVb2RtRnNkV1V1ZEc5VGRISnBibWNvS1NrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSjNOMGNtbHVaeWM2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvYzNSNWJHVlBjSFJwYjI1ekxuTjBjbWx1WjFaaGJIVmxMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUQwZ2MzUjViR1ZQY0hScGIyNXpMbk4wY21sdVoxWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvSjF3aUp5QXJJSFpoYkhWbElDc2dKMXdpSnlrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSjI1MWJXSmxjaWM2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZENBOUlHUnZZM1Z0Wlc1MExtTnlaV0YwWlVWc1pXMWxiblFvYzNSNWJHVlBjSFJwYjI1ekxtNTFiV0psY2xaaGJIVmxMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUQwZ2MzUjViR1ZQY0hScGIyNXpMbTUxYldKbGNsWmhiSFZsTG5OMGVXeGxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlVWc1pXMWxiblF1WVhCd1pXNWtRMmhwYkdRb1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvZG1Gc2RXVXBLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDZGliMjlzWldGdUp6cGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBJRDBnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDaHpkSGxzWlU5d2RHbHZibk11WW05dmJHVmhibFpoYkhWbExuUmhaeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFJXeGxiV1Z1ZEM1emRIbHNaUzVqYzNOVVpYaDBJRDBnYzNSNWJHVlBjSFJwYjI1ekxtSnZiMnhsWVc1V1lXeDFaUzV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dSdlkzVnRaVzUwTG1OeVpXRjBaVlJsZUhST2IyUmxLSFpoYkhWbEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNCdWRXeHNWSGx3WlRwY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVkZiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENoemRIbHNaVTl3ZEdsdmJuTXViblZzYkZaaGJIVmxMblJoWnlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxSV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUQwZ2MzUjViR1ZQY0hScGIyNXpMbTUxYkd4V1lXeDFaUzV6ZEhsc1pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZGYkdWdFpXNTBMbUZ3Y0dWdVpFTm9hV3hrS0dSdlkzVnRaVzUwTG1OeVpXRjBaVlJsZUhST2IyUmxLSFpoYkhWbEtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkbUZzZFdWRmJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUdaMWJtTjBhVzl1SUcxbGNtZGxVM1I1YkdWUGNIUnBiMjV6S0dSbFptRjFiSFJ6TENCdmRtVnljbWxrWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVhJZ2JXVnlaMlZrSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJQ0FnWm05eUlDaDJZWElnYTJWNUlHbHVJR1JsWm1GMWJIUnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRaWEpuWldSYmEyVjVYU0E5SUU5aWFtVmpkQzVoYzNOcFoyNG9lMzBzSUdSbFptRjFiSFJ6VzJ0bGVWMHNJRzkyWlhKeWFXUmxjMXRyWlhsZEtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUcxbGNtZGxaRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZ1WkdWeUtDazdYRzRnSUNBZ2ZWeHVmU0lzSW1sdGNHOXlkQ0I3SUdSbFptRjFiSFFnWVhNZ1FtRnpaVXh2WjJkbGNpQjlJR1p5YjIwZ0p5NHZZbUZ6WlV4dloyZGxjaWM3WEc1cGJYQnZjblFnZXlCa1pXWmhkV3gwSUdGeklFeHZaMDV2WkdWTmFYaHBibk1nZlNCbWNtOXRJQ2N1TDNSbGNtMU1iMmRuWlhJdWJXbDRhVzV6TG01dlpHVW5PMXh1YVcxd2IzSjBJSHNnWkdWbVlYVnNkQ0JoY3lCTWIyZFhaV0pOYVhocGJuTWdmU0JtY205dElDY3VMM1JsY20xTWIyZG5aWEl1YldsNGFXNXpMbmRsWWljN1hHNXBiWEJ2Y25RZ2V5QndiR0YwWm05eWJTQjlJR1p5YjIwZ0oyTmhkWE5oYkMxdVpYUXVkWFJwYkhNbk8xeHVMeW9xWEc0Z0tpQlVhR2x6SUZSbGNtMU1iMmRuWlhJZ2NISnZkbWxrWlNCcGMyOXRiM0p3YUdsaklHeHZaMmRsY2x4dUlDb2dleUJ0YVhoWGFYUm9JRG9nZXlBbmJtOWtaU2M2SUZ0TWIyZE9iMlJsVFdsNGFXNXpYU3dnSjNkbFlpYzZJRnRYWldKT2IyUmxUV2w0YVc1elhTQjlJSDFjYmlBcUlFQmpiR0Z6Y3lCVVpYSnRURzluWjJWeVhHNGdLaUJBWlhoMFpXNWtjeUJDWVhObFRHOW5aMlZ5WEc0Z0tpOWNibU5zWVhOeklGUmxjbTFNYjJkblpYSWdaWGgwWlc1a2N5QndiR0YwWm05eWJTNXRhWGhYYVhSb0tFSmhjMlZNYjJkblpYSXNJRnh1SUNBZ0lDQWdJQ0I3SUc1dlpHVTZXMHh2WjA1dlpHVk5hWGhwYm5OZExDQmNiaUFnSUNBZ0lDQWdJQ0IzWldJNlcweHZaMWRsWWsxcGVHbHVjMTBnZlNBcGUxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtDbDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVozSnZkWEJUZEdGamF5QTlJRnRkTzF4dUlDQWdJSDFjYmlBZ0lDQmNiaUFnSUNCbmNtOTFjRUpsWjJsdUtHNWhiV1VwZXlBZ0lGeHVJQ0FnSUNBZ0lDQnNaWFFnWjNKdmRYQWdQU0I3Ym1GdFpTd2dZbVZuYVc1VWFXMWxPaUJ1WlhjZ1JHRjBaU2dwZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuY205MWNGTjBZV05yTG5CMWMyZ29aM0p2ZFhBcE8xeHVJQ0FnSUNBZ0lDQnNaWFFnYVc1a1pXNTBVM0JoWTJVZ1BTQW5KenRjYmlBZ0lDQWdJQ0FnZEdocGN5NXNiMmNvWUNSN2FXNWtaVzUwVTNCaFkyVjlKSHRuY205MWNDNXVZVzFsZlRvZ1ltVm5hVzRnWVhRZ0pIdG5jbTkxY0M1aVpXZHBibFJwYldWOVlDazdYRzRnSUNBZ2ZWeHVJQ0FnSUdkeWIzVndSVzVrS0NsN1hHNGdJQ0FnSUNBZ0lHbG1LSFJvYVhNdVozSnZkWEJUZEdGamF5NXNaVzVuZEdnZ1BpQXdLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JuY205MWNDQTlJSFJvYVhNdVozSnZkWEJUZEdGamF5NXdiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCcGJtUmxiblJUY0dGalpTQTlJQ2NuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1c2IyY29ZQ1I3YVc1a1pXNTBVM0JoWTJWOUpIdG5jbTkxY0M1dVlXMWxmVG9nWlc1a0lHRm1kR1Z5SUNSN0tHNWxkeUJFWVhSbEtDa2dMU0JuY205MWNDNWlaV2RwYmxScGJXVXBmU0FvYlhNcFlDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzU5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0J1WlhjZ1ZHVnliVXh2WjJkbGNpZ3BPeUlzSW1sdGNHOXlkQ0FxSUdGeklHTnNhVkJ5YjJkeVpYTnpJR1p5YjIwZ0oyTnNhUzF3Y205bmNtVnpjeWM3WEc1Y2JtTnZibk4wSUV4dlowNXZaR1ZOYVhocGJuTWdQU0FvVEc5blEyeGhjM01wUFQ0Z1kyeGhjM01nWlhoMFpXNWtjeUJNYjJkRGJHRnpjM3RjYmlBZ0lDQmpiMjV1WldOMEtHTm9ZVzV1Wld3cGUxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OMWNuSmxiblJDWVhJZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc0Z0lDQWdiRzluS0cxbGMzTmhaMlVwZTF4dUlDQWdJQ0FnSUNBdkwxUlBSRTg2SUcxaGEyVWdaR1ZqYjNKaGRHOXlJRnh1SUNBZ0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5SQ1lYSWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdhV1lvZEdocGN5NXNaWFpsYkNBK1BTQjBhR2x6TGtGalkyVndkR1ZrVEdWMlpXeHpXeWRzYjJjblhTbDdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm5Wc2JEdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnlodFpYTnpZV2RsS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjSEp2WjNKbGMzTkNaV2RwYmloeVlXNW5aU2w3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjSEp2WTJWemMwTnZkVzUwWlhJZ0t6MGdNVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpkWEp5Wlc1MFFtRnlJRDBnYm1WM0lHTnNhVkJ5YjJkeVpYTnpMa0poY2loN2ZTd2dZMnhwVUhKdlozSmxjM011VUhKbGMyVjBjeTV6YUdGa1pYTmZZMnhoYzNOcFl5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkzVnljbVZ1ZEVKaGNpNXpaWFJVYjNSaGJDaHlZVzVuWlNrN1hHNGdJQ0FnZlZ4dUlDQWdJSEJ5YjJkeVpYTnpWWEJrWVhSbEtIQnliMmR5WlhOelRXVnpjMkZuWlNsN1hHNGdJQ0FnSUNBZ0lHbG1LQ0YwYUdsekxtTjFjbkpsYm5SQ1lYSXBlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3Y205bmNtVnpjMEpsWjJsdUtDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZEdocGN5NXdjbTlqWlhOelEyOTFiblJsY2lBclBTQXhPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5SQ1lYSXVkWEJrWVhSbEtIUm9hWE11Y0hKdlkyVnpjME52ZFc1MFpYSXBPMXh1SUNBZ0lIMWNiaUFnSUNCd2NtOW5jbVZ6YzBWdVpDZ3BlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5SQ1lYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CeWIyTmxjM05EYjNWdWRHVnlJRDBnTUR0Y2JpQWdJQ0I5WEc0Z0lDQWdaR1ZpZFdjb2JXVnpjMkZuWlNsN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WTNWeWNtVnVkRUpoY2lBOUlHWmhiSE5sT3lCY2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3k1c1pYWmxiQ0ErUFNCMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4eld5ZGtaV0oxWnlkZEtYdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1ZFd4c08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR052Ym5OdmJHVXVaR1ZpZFdjb2JXVnpjMkZuWlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdURzluVG05a1pVMXBlR2x1Y3pzaUxDSnBiWEJ2Y25RZ2UyUmxabUYxYkhRZ1lYTWdTbk52YmxacFpYZDlJR1p5YjIwZ0p5NHZjSEpsZEhSNVNuTnZiaWM3WEc1amIyNXpkQ0JNYjJkWFpXSk5hWGhwYm5NZ1BTQW9URzluUTJ4aGMzTXBQVDRnWTJ4aGMzTWdaWGgwWlc1a2N5Qk1iMmREYkdGemMzdGNiaUFnSUNCamIyNXVaV04wS0dSdlkzVnRaVzUwUld3OWJuVnNiQ2w3WEc0Z0lDQWdJQ0FnSUdSdlkzVnRaVzUwUld3Z1BTQmtiMk4xYldWdWRFVnNmSHhrYjJOMWJXVnVkQzVpYjJSNU8xeHVJQ0FnSUNBZ0lDQnNaWFFnYm05a1pTQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb1hDSjFiRndpS1R0Y2JpQWdJQ0FnSUNBZ2JtOWtaUzV6ZEhsc1pTNWpjM05VWlhoMElEMGdYQ0pzYVhOMExYTjBlV3hsTFhSNWNHVTZJRzV2Ym1VN1hDSTdYRzRnSUNBZ0lDQWdJR1J2WTNWdFpXNTBSV3d1WVhCd1pXNWtRMmhwYkdRb2JtOWtaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVabkpoYldWRmJDQTlJR1J2WTNWdFpXNTBSV3c3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzluWjJWeVJXd2dQU0JrYjJOMWJXVnVkRVZzTG1kbGRFVnNaVzFsYm5SelFubFVZV2RPWVcxbEtGd2lkV3hjSWlsYk1GMDdYRzRnSUNBZ2ZWeHVJQ0FnSUhOamNtOXNiRUp2ZEhSdmJTaGxiR1Z0Wlc1MFBXNTFiR3dwZTF4dUlDQWdJQ0FnSUNCbGJHVnRaVzUwSUQwZ1pXeGxiV1Z1ZENCOGZDQjBhR2x6TG1aeVlXMWxSV3c3WEc0Z0lDQWdJQ0FnSUdWc1pXMWxiblF1YzJOeWIyeHNWRzl3SUQwZ1pXeGxiV1Z1ZEM1elkzSnZiR3hJWldsbmFIUWdMU0JsYkdWdFpXNTBMbU5zYVdWdWRFaGxhV2RvZER0Y2JpQWdJQ0I5WEc0Z0lDQWdjSEp2WjNKbGMzTW9jSEp2WTJWemMwMWxjM05oWjJVcGUxeHVJQ0FnSUNBZ0lDQXZMeUJzWlhRZ2JtOWtaU0E5SUhSb2FYTXViRzluWjJWeVJXd3VaMlYwUld4bGJXVnVkSE5DZVZSaFowNWhiV1VvWENKc2FUcHVkR2d0YkdGemRDMXZaaTEwZVhCbEtERXBYQ0lwTzF4dUlDQWdJQ0FnSUNCc1pYUWdURWxPYjJSbGN5QTlJSFJvYVhNdWJHOW5aMlZ5Uld3dVoyVjBSV3hsYldWdWRITkNlVlJoWjA1aGJXVW9YQ0pzYVZ3aUtUdGNiaUFnSUNBZ0lDQWdiR1YwSUc1dlpHVWdQU0JNU1U1dlpHVnpXMHhKVG05a1pYTXViR1Z1WjNSb0xURmRPMXh1SUNBZ0lDQWdJQ0JwWmlnaGJtOWtaU0I4ZkNCdWIyUmxMbU5zWVhOelRHbHpkQzVqYjI1MFlXbHVjeWhjSW14dloyZGxjaTF3Y205bmNtVnpjMXdpS1NsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2TDJOeVpXRjBaU0J1WlhjZ1pXeGNiaUFnSUNBZ0lDQWdJQ0FnSUc1dlpHVWdQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtGd2liR2xjSWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J1YjJSbExtTnNZWE56VEdsemRDNWhaR1FvWENKc2IyZG5aWEl0Y0hKdlozSmxjM05jSWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxteHZaMmRsY2tWc0xtRndjR1Z1WkVOb2FXeGtLRzV2WkdVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR3hsZENCcWMyOXVUbTlrWlNBOUlFcHpiMjVXYVdWM0xrcFRUMDVFYVhOd2JHRjVLSEJ5YjJObGMzTk5aWE56WVdkbEtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdSaGRHVWdQU0J1WlhjZ1JHRjBaU2dwTzF4dUlDQWdJQ0FnSUNCdWIyUmxMbWx1Ym1WeVNGUk5UQ0E5SUdBOGNDQnpkSGxzWlQxY0ltWnZiblF0YzJsNlpUb2dNVEp3ZURzZ2RHVjRkQzFoYkdsbmJqcHlhV2RvZEZ3aVBpUjdaR0YwWlgwOEwzQStZRHRjYmlBZ0lDQWdJQ0FnYm05a1pTNWhjSEJsYm1SRGFHbHNaQ2hxYzI5dVRtOWtaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMk55YjJ4c1FtOTBkRzl0S0NrN1hHNGdJQ0FnZlZ4dUlDQWdJR3h2WnlodFpYTnpZV2RsS1h0Y2JpQWdJQ0FnSUNBZ2FXWW9kR2hwY3k1c1pYWmxiQ0ErUFNCMGFHbHpMa0ZqWTJWd2RHVmtUR1YyWld4eld5ZHNiMmNuWFNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnBaaWdoZEdocGN5NXNiMmRuWlhKRmJDQjhmQ0FoZEdocGN5NXNiMmRuWlhKRmJDNWhjSEJsYm1SRGFHbHNaQ2w3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1OdmJtNWxZM1FvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQnNaWFFnYm05a1pTQTlJR1J2WTNWdFpXNTBMbU55WldGMFpVVnNaVzFsYm5Rb1hDSnNhVndpS1R0Y2JpQWdJQ0FnSUNBZ2JtOWtaUzV6ZEhsc1pTNWpjM05VWlhoMElEMGdKMkp2Y21SbGNpMWliM1IwYjIwNklERndlQ0J6YjJ4cFpDQWpaR1ZrWldSbE95YzdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnNaWFFnYW5OdmJrNXZaR1VnUFNCS2MyOXVWbWxsZHk1S1UwOU9SR2x6Y0d4aGVTaHRaWE56WVdkbEtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUdSaGRHVWdQU0J1WlhjZ1JHRjBaU2dwTzF4dUlDQWdJQ0FnSUNCdWIyUmxMbWx1Ym1WeVNGUk5UQ0E5SUdBOGNDQnpkSGxzWlQxY0ltWnZiblF0YzJsNlpUb2dNVEp3ZURzZ2RHVjRkQzFoYkdsbmJqcHlhV2RvZEZ3aVBpUjdaR0YwWlgwOEwzQStZRHRjYmlBZ0lDQWdJQ0FnYm05a1pTNWhjSEJsYm1SRGFHbHNaQ2hxYzI5dVRtOWtaU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzluWjJWeVJXd3VZWEJ3Wlc1a1EyaHBiR1FvYm05a1pTazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMyTnliMnhzUW05MGRHOXRLQ2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTnZiR1V1Ykc5bktHMWxjM05oWjJVcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdSbFluVm5LRzFsYzNOaFoyVXBlMXh1SUNBZ0lDQWdJQ0JwWmloMGFHbHpMbXhsZG1Wc0lENDlJSFJvYVhNdVFXTmpaWEIwWldSTVpYWmxiSE5iSjJSbFluVm5KMTBwZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0x5OXVieUJ6YUc5M0lHOXVJSGRsWWlCelkzSmxaVzQ3SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVrWldKMVp5aHRaWE56WVdkbEtUdGNiaUFnSUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JNYjJkWFpXSk5hWGhwYm5NN0lpd2liVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmZYMWRGUWxCQlEwdGZSVmhVUlZKT1FVeGZUVTlFVlV4RlgyTmhkWE5oYkY5dVpYUmZkWFJwYkhOZlh6c2lMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlmVjBWQ1VFRkRTMTlGV0ZSRlVrNUJURjlOVDBSVlRFVmZZMnhwWDNCeWIyZHlaWE56WDE4N0lsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEJhc2VJbWdEYXRhc2V0IH0gZnJvbSAnLi9iYXNlSW1nRGF0YXNldCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgTG9nZ2VyTWl4aW5zIH0gZnJvbSAnY2F1c2FsLW5ldC5sb2cnO1xuaW1wb3J0IHsgU3RvcmFnZU1peGlucywgaW5kZXhEQlN0b3JhZ2UgfSBmcm9tICdjYXVzYWwtbmV0LnN0b3JhZ2UnO1xuaW1wb3J0IHsgTWVtQ2FjaGVNaXhpbnMsIG1lbURvd25DYWNoZSB9IGZyb20gJ2NhdXNhbC1uZXQubWVtY2FjaGUnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbiB9IGZyb20gJy4vZnVuY3Rpb24nO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBJbWFnZURhdGFzZXRmZXRjaE1peGlucyB9IGZyb20gJy4vaW1hZ2VEYXRhc2V0ZmV0Y2gubWl4aW5zJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgSW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGlucyB9IGZyb20gJy4vaW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZy5taXhpbnMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBJbWFnZURhdGFzZXRHZW5lcmF0b3JNaXhpbnMgfSBmcm9tICcuL2ltYWdlRGF0YXNldEdlbmVyYXRvci5taXhpbnMnO1xuaW1wb3J0IHsgUHJlcHJvY2Vzc2luZ01peGlucywgaW1hZ2VQcmVwcm9jZXNzaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC5wcmVwcm9jZXNzaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW5pc3REYXRhc2V0IGV4dGVuZHMgUGxhdGZvcm0ubWl4V2l0aChCYXNlSW1nRGF0YXNldCwgXG4gICAgICAgIFsgSW1hZ2VEYXRhc2V0ZmV0Y2hNaXhpbnMsXG4gICAgICAgICAgSW1hZ2VEYXRhc2V0UHJlcHJvY2Vzc2luZ01peGlucyxcbiAgICAgICAgICBQcmVwcm9jZXNzaW5nTWl4aW5zLFxuICAgICAgICAgIEltYWdlRGF0YXNldEdlbmVyYXRvck1peGlucyxcbiAgICAgICAgICBNZW1DYWNoZU1peGlucyxcbiAgICAgICAgICBTdG9yYWdlTWl4aW5zLFxuICAgICAgICAgIExvZ2dlck1peGlucyBdKXtcbiAgICBcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKXtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuRiA9IG5ldyBGdW5jdGlvbigpO1xuICAgICAgICB0aGlzLlN0b3JhZ2UgPSBpbmRleERCU3RvcmFnZTtcbiAgICAgICAgdGhpcy5NZW1DYWNoZSA9IG1lbURvd25DYWNoZTtcbiAgICAgICAgY29uc3QgUHJlcHJvY2Vzc2luZ1NhbXBsZSA9IGFzeW5jIChtYXN0ZXJTYW1wbGVCdWZmZXIsIHNhbXBsZVNpemUpPT57XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgaW1hZ2VQcmVwcm9jZXNzaW5nLmltYWdlU3BsaXQobWFzdGVyU2FtcGxlQnVmZmVyLCBzYW1wbGVTaXplKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgUHJlcHJvY2Vzc2luZ0xhYmVsID0gYXN5bmMgKG1hc3RlckxhYmVsQnVmZmVyLCBsYWJlbFNpemUpPT57XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgaW1hZ2VQcmVwcm9jZXNzaW5nLmltYWdlU3BsaXQobWFzdGVyTGFiZWxCdWZmZXIsIGxhYmVsU2l6ZSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0UHJlcHJvY2Vzc2luZ0Z1bmN0aW9ucyhQcmVwcm9jZXNzaW5nU2FtcGxlLCBQcmVwcm9jZXNzaW5nTGFiZWwpO1xuICAgIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlSW1nRGF0YXNldHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhc2V0Q29uZmlndXJlKXtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gZGF0YXNldENvbmZpZ3VyZTtcbiAgICAgICAgY29uc3Qge251bVNhbXBsZXMsIHNhbXBsZVNpemUsIG51bUNsYXNzZXN9ID0gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmRhdGFTaXplID0gW251bVNhbXBsZXMsIC4uLnNhbXBsZVNpemVdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5udW1TYW1wbGVzID0gbnVtU2FtcGxlcztcbiAgICAgICAgdGhpcy5zYW1wbGVTaXplID0gc2FtcGxlU2l6ZTtcbiAgICAgICAgdGhpcy5udW1DbGFzcyAgID0gbnVtQ2xhc3NlcztcbiAgICB9XG4gICAgXG4gICAgc3VtbWFyeSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBGdW5jdGlvbiBhcyBCYXNlRnVuY3Rpb259IGZyb20gJ2NhdXNhbC1uZXQuY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2NhdXNhbC1uZXQudXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBGdW5jdGlvbk1peGluc30gZnJvbSAnLi9mdW5jdGlvbi5taXhpbnMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY3Rpb24gZXh0ZW5kcyBQbGF0Zm9ybS5taXhXaXRoKEJhc2VGdW5jdGlvbixbRnVuY3Rpb25NaXhpbnNdKXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn0iLCJjb25zdCBGdW5jdGlvbk1peGlucyA9IChCYXNlRnVuY3Rpb25DbGFzcyk9PiBjbGFzcyBleHRlbmRzIEJhc2VGdW5jdGlvbkNsYXNzeyBcbiAgICBnZXRJbWdCdWZmZXJTaXplKGltZ1NpemUpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5yZWR1Y2UoKHMsZCk9PnMqZCwxLGltZ1NpemUpO1xuICAgIH1cbiAgICBnZW5lcmF0b3JXaXRoSW5kZXgoaXRlbXMpe1xuICAgICAgICBjb25zdCBSID0gdGhpcy5SO1xuICAgICAgICByZXR1cm4gUi5hZGRJbmRleChSLm1hcCkoKGQsIGlkeCk9PltpZHgsIGRdLCBpdGVtcyk7XG4gICAgfVxuICAgIHNwbGl0VHJhaW5UZXN0U2V0KGl0ZW1zLCBzcGxpdEluZGV4KXtcbiAgICAgICAgY29uc3QgUiA9IHRoaXMuUjtcbiAgICAgICAgcmV0dXJuIFIuc3BsaXRBdChzcGxpdEluZGV4LCBpdGVtcyk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEZ1bmN0aW9uTWl4aW5zOyIsImltcG9ydCB7IFNhbXBsaW5nIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5jb25zdCBJbWFnZURhdGFzZXRHZW5lcmF0b3JNaXhpbnMgPSAoQmFzZUltYWdlQ2xhc3MpPT4gY2xhc3MgZXh0ZW5kcyBCYXNlSW1hZ2VDbGFzc3sgXG4gICAgXG4gICAgZ2V0VHJhaW5UZXN0U2V0KHRyYWluU2l6ZT1udWxsKXtcbiAgICAgICAgdHJhaW5TaXplID0gdHJhaW5TaXplfHxwYXJzZUludCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZy5sZW5ndGgqMC45KTtcbiAgICAgICAgY29uc3QgW3RyYWluU2V0LCB0ZXN0U2V0XSA9IHRoaXMuRi5zcGxpdFRyYWluVGVzdFNldCh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZywgdHJhaW5TaXplKTtcbiAgICAgICAgcmV0dXJuIFt0cmFpblNldCwgdGVzdFNldF07XG4gICAgfVxuXG4gICAgbWFrZVNhbXBsZUdlbmVyYXRvcihzYW1wbGVJZHhTZXQsIGJhdGNoU2l6ZT1udWxsLCBzdGFydD0wLCBlbmQ9bnVsbCl7XG4gICAgICAgIGlmKCF0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcigncHJlcHJvY2Vzc2luZyBtdXN0IGJlIHBlcmZvcm1lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGJhdGNoU2l6ZSA9IGJhdGNoU2l6ZT9iYXRjaFNpemU6c2FtcGxlSWR4U2V0Lmxlbmd0aDtcbiAgICAgICAgY29uc3QgX2JhdGNoZXMgPSB0aGlzLkYuaHNwbGl0RXZlcnkoc2FtcGxlSWR4U2V0LCBiYXRjaFNpemUpO1xuICAgICAgICBjb25zdCBiYXRjaGVzID0gU2FtcGxpbmcuY2hvaWNlKF9iYXRjaGVzLCBfYmF0Y2hlcy5sZW5ndGgpO1xuICAgICAgICBpZihlbmQgPT09IG51bGwpe1xuICAgICAgICAgICAgZW5kID0gYmF0Y2hlcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRJbmRleCA9IHN0YXJ0LCBpdGVyYXRpb25Db3VudCA9IDAsIHN0ZXAgPSAxO1xuICAgICAgICBjb25zdCBiYXRjaEdlbmVyYXRvciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiBhc3luYygpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBiYXRjaFNhbXBsZXMgPSBbXSwgYmF0Y2hMYWJlbHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBbc2FtcGxlUGF0aCwgbGFiZWxQYXRoXSBvZiBiYXRjaGVzW25leHRJbmRleF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNhbXBsZUl0ZW0gPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlLmdldEl0ZW0oc2FtcGxlUGF0aCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbEl0ZW0gPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlLmdldEl0ZW0obGFiZWxQYXRoLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hTYW1wbGVzID0gWy4uLmJhdGNoU2FtcGxlcywgc2FtcGxlSXRlbVtzYW1wbGVQYXRoXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXRjaExhYmVscyA9IFsuLi5iYXRjaExhYmVscywgbGFiZWxJdGVtW2xhYmVsUGF0aF1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSBzdGVwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWR4ID0gaXRlcmF0aW9uQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGlvbkNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7aWR4LCBiYXRjaFNpemUsIGRhdGE6W2JhdGNoU2FtcGxlcywgYmF0Y2hMYWJlbHNdfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUobmV4dEluZGV4IDwgZW5kKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGJhdGNoR2VuZXJhdG9yO1xuICAgIH1cbn07XG5leHBvcnQgZGVmYXVsdCBJbWFnZURhdGFzZXRHZW5lcmF0b3JNaXhpbnM7IiwiaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSAnY2F1c2FsLW5ldC51dGlscyc7XG5jb25zdCBJbWFnZURhdGFzZXRQcmVwcm9jZXNzaW5nTWl4aW5zID0gKEJhc2VJbWFnZUNsYXNzKT0+IGNsYXNzIGV4dGVuZHMgQmFzZUltYWdlQ2xhc3N7IFxuICAgIG1ha2VQcmVwcm9jZXNzaW5nU3RyZWFtKHNhdmVEaXIpe1xuICAgICAgICBjb25zdCBJbWFnZUJ1ZmZlclNpemUgPSB0aGlzLkYuZ2V0SW1nQnVmZmVyU2l6ZSh0aGlzLnNhbXBsZVNpemUpO1xuICAgICAgICBjb25zdCBMYWJlbEJ1ZmZlclNpemUgPSB0aGlzLm51bUNsYXNzO1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1Zyh7aW1hZ2VCdWZmZXJTaXplOiBJbWFnZUJ1ZmZlclNpemUsIFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWxCdWZmZXJTaXplOiBMYWJlbEJ1ZmZlclNpemV9KTtcbiAgICAgICAgY29uc3QgVHJhbnNmb3JtRm4gPSAoY2h1bmssIGNodW5rRW5jb2RpbmcsIGFmdGVyVHJhbnNmb3JtRm4pID0+e1xuICAgICAgICAgICAgY29uc3QgVHJhbnNmb3JtQXN5bmMgPSBhc3luYyAoKT0+e1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVCdWZmZXIgPSBjaHVuay5zYW1wbGU7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsQnVmZmVyID0gY2h1bmsubGFiZWw7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZUJ1ZmZlciwgbGFiZWxCdWZmZXJ9KTtcbiAgICAgICAgICAgICAgICBsZXQgcHJlcHJvY2Vzc2VkSW1nQnVmZmVyID0gYXdhaXQgdGhpcy5QcmVwcm9jZXNzaW5nU2FtcGxlRm4oc2FtcGxlQnVmZmVyLCBJbWFnZUJ1ZmZlclNpemUpO1xuICAgICAgICAgICAgICAgIGxldCBwcmVwcm9jZXNzZWRMYWJlbEJ1ZmZlciA9IGF3YWl0IHRoaXMuUHJlcHJvY2Vzc2luZ0xhYmVsRm4obGFiZWxCdWZmZXIsIExhYmVsQnVmZmVyU2l6ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgcHJvY2Vzc2VkQ2h1bms6IHRoaXMuRi56aXAocHJlcHJvY2Vzc2VkSW1nQnVmZmVyLCBwcmVwcm9jZXNzZWRMYWJlbEJ1ZmZlciksIFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNodW5rSWR4OiBjaHVuay5pZHh9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFRyYW5zZm9ybUFzeW5jKGNodW5rKS50aGVuKHByb2Nlc3NlZENodW5rPT57XG4gICAgICAgICAgICAgICAgYWZ0ZXJUcmFuc2Zvcm1GbihudWxsLCBwcm9jZXNzZWRDaHVuayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFdyaXRlRm4gPSAocHJvY2Vzc2VkQ2h1bmssIGNodW5rRW5jb2RpbmcsIGNhbGxiYWNrKSA9PntcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgV3JpdGVBc3luYyA9IGFzeW5jIChwcm9jZXNzZWRDaHVuayk9PntcbiAgICAgICAgICAgICAgICBsZXQgZ2VuZXJhdG9yID0gdGhpcy5GLmdlbmVyYXRvcldpdGhJbmRleChwcm9jZXNzZWRDaHVuay5wcm9jZXNzZWRDaHVuayk7XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rSWR4ICA9IHByb2Nlc3NlZENodW5rLmNodW5rSWR4O1xuICAgICAgICAgICAgICAgIGxldCBzYW1wbGVQYXRoICA9IFtdLCBsYWJlbFBhdGggPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IFtpZHgsIFtzYW1wbGUsIGxhYmVsXV0gb2YgZ2VuZXJhdG9yKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNodW5rU2FtcGxlUGF0aCA9IGF3YWl0IHRoaXMucHJlUHJvY2Vzc2luZ1N0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2V0SXRlbShzYXZlRGlyICsgJ3NhbXBsZS8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIHNhbXBsZSk7ICAgIFxuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtMYWJlbFBhdGggPSBhd2FpdCB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNldEl0ZW0oc2F2ZURpciArICdsYWJlbC8nICsgY2h1bmtJZHggKyAnLycgKyBpZHggKyAnLycsIGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlUGF0aCA9IFsuLi5zYW1wbGVQYXRoLCBjaHVua1NhbXBsZVBhdGhdO1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFBhdGggPSBbLi4ubGFiZWxQYXRoLCBjaHVua0xhYmVsUGF0aF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3Moe3ByZXByb2Nlc3Npbmc6IFtjaHVua1NhbXBsZVBhdGgsIGNodW5rTGFiZWxQYXRoXX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5GLnppcChzYW1wbGVQYXRoLCBsYWJlbFBhdGgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgV3JpdGVBc3luYyhwcm9jZXNzZWRDaHVuaykudGhlbigocmVzdWx0KT0+e1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlZFByZXByb2Nlc3NpbmcgPSBbLi4udGhpcy5zYXZlZFByZXByb2Nlc3NpbmcsIC4uLnJlc3VsdF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRQcmVwcm9jZXNzaW5nID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBkdXBsZXhlciA9IFN0cmVhbS5tYWtlRHVwbGV4KFdyaXRlRm4pO1xuICAgICAgICBsZXQgdHJhbnNmb3JtZXIgPSBTdHJlYW0ubWFrZVRyYW5zZm9ybShUcmFuc2Zvcm1Gbik7XG4gICAgICAgIGxldCBzdHJlYW0gPSBkdXBsZXhlci5waXBlKHRyYW5zZm9ybWVyKS5waXBlKGR1cGxleGVyKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICB9XG5cbiAgICBhc3luYyBwcmVwcm9jZXNzaW5nRGF0YXNldChzYXZlRGlyPScvcHJlcHJvY2Vzc2luZy9tbmlzdC8nLHN0b3JlSW5NZW1vcnk9ZmFsc2Upe1xuICAgICAgICB0aGlzLnByZVByb2Nlc3NpbmdTdG9yYWdlID0gKHN0b3JlSW5NZW1vcnkpP3RoaXMubWVtQ2FjaGU6dGhpcy5zdG9yYWdlO1xuICAgICAgICBsZXQgc3RyZWFtID0gdGhpcy5tYWtlUHJlcHJvY2Vzc2luZ1N0cmVhbShzYXZlRGlyKTtcbiAgICAgICAgbGV0IGdlbmVyYXRvciA9IHRoaXMuRi5nZW5lcmF0b3JXaXRoSW5kZXgodGhpcy5zYXZlZENodW5rcyk7XG4gICAgICAgIGZvcihsZXQgW2lkeCwgW3NhbXBsZVBhdGgsIGxhYmVsUGF0aF1dIG9mIGdlbmVyYXRvcil7XG4gICAgICAgICAgICBsZXQgc2FtcGxlSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKHNhbXBsZVBhdGgsIHRydWUpO1xuICAgICAgICAgICAgbGV0IGxhYmVsSXRlbSA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGxhYmVsUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgc2FtcGxlID0gc2FtcGxlSXRlbVtzYW1wbGVQYXRoXTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGxhYmVsSXRlbVtsYWJlbFBhdGhdO1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoe3NhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgICAgIHN0cmVhbS5wdXNoKHtpZHgsIHNhbXBsZSwgbGFiZWx9KTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0ucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBzdHJlYW0ub24oJ2ZpbmlzaCcsICgpPT57XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnNhdmVkUHJlcHJvY2Vzc2luZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IEltYWdlRGF0YXNldFByZXByb2Nlc3NpbmdNaXhpbnM7IiwiZXhwb3J0IHtkZWZhdWx0IGFzIE1OSVNUfSBmcm9tICcuL01OSVNULkltZ0RhdGFzZXQnOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9tZW1jYWNoZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9jYXVzYWxfbmV0X3ByZXByb2Nlc3NpbmdfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfY2F1c2FsX25ldF9zdG9yYWdlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NhdXNhbF9uZXRfdXRpbHNfXzsiXSwic291cmNlUm9vdCI6IiJ9