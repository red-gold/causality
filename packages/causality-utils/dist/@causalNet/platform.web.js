(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["@causalNet/utils"] = factory();
	else
		root["@causalNet/utils"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/platform.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*******************************************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/platform/platform.js":
/*!****************************************************************************!*\
  !*** /home/huynhnguyen/github/causality/node_modules/platform/platform.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
;(function() {
  'use strict';

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used as a reference to the global object. */
  var root = (objectTypes[typeof window] && window) || this;

  /** Backup possible global object. */
  var oldRoot = root;

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
    root = freeGlobal;
  }

  /**
   * Used as the maximum length of an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /** Regular expression to detect Opera. */
  var reOpera = /\bOpera/;

  /** Possible global object. */
  var thisBinding = this;

  /** Used for native method references. */
  var objectProto = Object.prototype;

  /** Used to check for own properties of an object. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to resolve the internal `[[Class]]` of values. */
  var toString = objectProto.toString;

  /*--------------------------------------------------------------------------*/

  /**
   * Capitalizes a string value.
   *
   * @private
   * @param {string} string The string to capitalize.
   * @returns {string} The capitalized string.
   */
  function capitalize(string) {
    string = String(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * A utility function to clean up the OS name.
   *
   * @private
   * @param {string} os The OS name to clean up.
   * @param {string} [pattern] A `RegExp` pattern matching the OS name.
   * @param {string} [label] A label for the OS.
   */
  function cleanupOS(os, pattern, label) {
    // Platform tokens are defined at:
    // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
    var data = {
      '10.0': '10',
      '6.4':  '10 Technical Preview',
      '6.3':  '8.1',
      '6.2':  '8',
      '6.1':  'Server 2008 R2 / 7',
      '6.0':  'Server 2008 / Vista',
      '5.2':  'Server 2003 / XP 64-bit',
      '5.1':  'XP',
      '5.01': '2000 SP1',
      '5.0':  '2000',
      '4.0':  'NT',
      '4.90': 'ME'
    };
    // Detect Windows version from platform tokens.
    if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
        (data = data[/[\d.]+$/.exec(os)])) {
      os = 'Windows ' + data;
    }
    // Correct character case and cleanup string.
    os = String(os);

    if (pattern && label) {
      os = os.replace(RegExp(pattern, 'i'), label);
    }

    os = format(
      os.replace(/ ce$/i, ' CE')
        .replace(/\bhpw/i, 'web')
        .replace(/\bMacintosh\b/, 'Mac OS')
        .replace(/_PowerPC\b/i, ' OS')
        .replace(/\b(OS X) [^ \d]+/i, '$1')
        .replace(/\bMac (OS X)\b/, '$1')
        .replace(/\/(\d)/, ' $1')
        .replace(/_/g, '.')
        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
        .replace(/\bx86\.64\b/gi, 'x86_64')
        .replace(/\b(Windows Phone) OS\b/, '$1')
        .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
        .split(' on ')[0]
    );

    return os;
  }

  /**
   * An iteration utility for arrays and objects.
   *
   * @private
   * @param {Array|Object} object The object to iterate over.
   * @param {Function} callback The function called per iteration.
   */
  function each(object, callback) {
    var index = -1,
        length = object ? object.length : 0;

    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      while (++index < length) {
        callback(object[index], index, object);
      }
    } else {
      forOwn(object, callback);
    }
  }

  /**
   * Trim and conditionally capitalize string values.
   *
   * @private
   * @param {string} string The string to format.
   * @returns {string} The formatted string.
   */
  function format(string) {
    string = trim(string);
    return /^(?:webOS|i(?:OS|P))/.test(string)
      ? string
      : capitalize(string);
  }

  /**
   * Iterates over an object's own properties, executing the `callback` for each.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} callback The function executed per own property.
   */
  function forOwn(object, callback) {
    for (var key in object) {
      if (hasOwnProperty.call(object, key)) {
        callback(object[key], key, object);
      }
    }
  }

  /**
   * Gets the internal `[[Class]]` of a value.
   *
   * @private
   * @param {*} value The value.
   * @returns {string} The `[[Class]]`.
   */
  function getClassOf(value) {
    return value == null
      ? capitalize(value)
      : toString.call(value).slice(8, -1);
  }

  /**
   * Host objects can return type values that are different from their actual
   * data type. The objects we are concerned with usually return non-primitive
   * types of "object", "function", or "unknown".
   *
   * @private
   * @param {*} object The owner of the property.
   * @param {string} property The property to check.
   * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
   */
  function isHostType(object, property) {
    var type = object != null ? typeof object[property] : 'number';
    return !/^(?:boolean|number|string|undefined)$/.test(type) &&
      (type == 'object' ? !!object[property] : true);
  }

  /**
   * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
   *
   * @private
   * @param {string} string The string to qualify.
   * @returns {string} The qualified string.
   */
  function qualify(string) {
    return String(string).replace(/([ -])(?!$)/g, '$1?');
  }

  /**
   * A bare-bones `Array#reduce` like utility function.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function called per iteration.
   * @returns {*} The accumulated result.
   */
  function reduce(array, callback) {
    var accumulator = null;
    each(array, function(value, index) {
      accumulator = callback(accumulator, value, index, array);
    });
    return accumulator;
  }

  /**
   * Removes leading and trailing whitespace from a string.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} The trimmed string.
   */
  function trim(string) {
    return String(string).replace(/^ +| +$/g, '');
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a new platform object.
   *
   * @memberOf platform
   * @param {Object|string} [ua=navigator.userAgent] The user agent string or
   *  context object.
   * @returns {Object} A platform object.
   */
  function parse(ua) {

    /** The environment context object. */
    var context = root;

    /** Used to flag when a custom context is provided. */
    var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';

    // Juggle arguments.
    if (isCustomContext) {
      context = ua;
      ua = null;
    }

    /** Browser navigator object. */
    var nav = context.navigator || {};

    /** Browser user agent string. */
    var userAgent = nav.userAgent || '';

    ua || (ua = userAgent);

    /** Used to flag when `thisBinding` is the [ModuleScope]. */
    var isModuleScope = isCustomContext || thisBinding == oldRoot;

    /** Used to detect if browser is like Chrome. */
    var likeChrome = isCustomContext
      ? !!nav.likeChrome
      : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());

    /** Internal `[[Class]]` value shortcuts. */
    var objectClass = 'Object',
        airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
        enviroClass = isCustomContext ? objectClass : 'Environment',
        javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
        phantomClass = isCustomContext ? objectClass : 'RuntimeObject';

    /** Detect Java environments. */
    var java = /\bJava/.test(javaClass) && context.java;

    /** Detect Rhino. */
    var rhino = java && getClassOf(context.environment) == enviroClass;

    /** A character to represent alpha. */
    var alpha = java ? 'a' : '\u03b1';

    /** A character to represent beta. */
    var beta = java ? 'b' : '\u03b2';

    /** Browser document object. */
    var doc = context.document || {};

    /**
     * Detect Opera browser (Presto-based).
     * http://www.howtocreate.co.uk/operaStuff/operaObject.html
     * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
     */
    var opera = context.operamini || context.opera;

    /** Opera `[[Class]]`. */
    var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
      ? operaClass
      : (opera = null);

    /*------------------------------------------------------------------------*/

    /** Temporary variable used over the script's lifetime. */
    var data;

    /** The CPU architecture. */
    var arch = ua;

    /** Platform description array. */
    var description = [];

    /** Platform alpha/beta indicator. */
    var prerelease = null;

    /** A flag to indicate that environment features should be used to resolve the platform. */
    var useFeatures = ua == userAgent;

    /** The browser/environment version. */
    var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();

    /** A flag to indicate if the OS ends with "/ Version" */
    var isSpecialCasedOS;

    /* Detectable layout engines (order is important). */
    var layout = getLayout([
      { 'label': 'EdgeHTML', 'pattern': 'Edge' },
      'Trident',
      { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
      'iCab',
      'Presto',
      'NetFront',
      'Tasman',
      'KHTML',
      'Gecko'
    ]);

    /* Detectable browser names (order is important). */
    var name = getName([
      'Adobe AIR',
      'Arora',
      'Avant Browser',
      'Breach',
      'Camino',
      'Electron',
      'Epiphany',
      'Fennec',
      'Flock',
      'Galeon',
      'GreenBrowser',
      'iCab',
      'Iceweasel',
      'K-Meleon',
      'Konqueror',
      'Lunascape',
      'Maxthon',
      { 'label': 'Microsoft Edge', 'pattern': 'Edge' },
      'Midori',
      'Nook Browser',
      'PaleMoon',
      'PhantomJS',
      'Raven',
      'Rekonq',
      'RockMelt',
      { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' },
      'SeaMonkey',
      { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Sleipnir',
      'SlimBrowser',
      { 'label': 'SRWare Iron', 'pattern': 'Iron' },
      'Sunrise',
      'Swiftfox',
      'Waterfox',
      'WebPositive',
      'Opera Mini',
      { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
      'Opera',
      { 'label': 'Opera', 'pattern': 'OPR' },
      'Chrome',
      { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
      { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
      { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
      { 'label': 'IE', 'pattern': 'IEMobile' },
      { 'label': 'IE', 'pattern': 'MSIE' },
      'Safari'
    ]);

    /* Detectable products (order is important). */
    var product = getProduct([
      { 'label': 'BlackBerry', 'pattern': 'BB10' },
      'BlackBerry',
      { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
      { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
      { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
      { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
      { 'label': 'Galaxy S5', 'pattern': 'SM-G900' },
      { 'label': 'Galaxy S6', 'pattern': 'SM-G920' },
      { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' },
      { 'label': 'Galaxy S7', 'pattern': 'SM-G930' },
      { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' },
      'Google TV',
      'Lumia',
      'iPad',
      'iPod',
      'iPhone',
      'Kindle',
      { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
      'Nexus',
      'Nook',
      'PlayBook',
      'PlayStation Vita',
      'PlayStation',
      'TouchPad',
      'Transformer',
      { 'label': 'Wii U', 'pattern': 'WiiU' },
      'Wii',
      'Xbox One',
      { 'label': 'Xbox 360', 'pattern': 'Xbox' },
      'Xoom'
    ]);

    /* Detectable manufacturers. */
    var manufacturer = getManufacturer({
      'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
      'Archos': {},
      'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
      'Asus': { 'Transformer': 1 },
      'Barnes & Noble': { 'Nook': 1 },
      'BlackBerry': { 'PlayBook': 1 },
      'Google': { 'Google TV': 1, 'Nexus': 1 },
      'HP': { 'TouchPad': 1 },
      'HTC': {},
      'LG': {},
      'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
      'Motorola': { 'Xoom': 1 },
      'Nintendo': { 'Wii U': 1,  'Wii': 1 },
      'Nokia': { 'Lumia': 1 },
      'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
      'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 }
    });

    /* Detectable operating systems (order is important). */
    var os = getOS([
      'Windows Phone',
      'Android',
      'CentOS',
      { 'label': 'Chrome OS', 'pattern': 'CrOS' },
      'Debian',
      'Fedora',
      'FreeBSD',
      'Gentoo',
      'Haiku',
      'Kubuntu',
      'Linux Mint',
      'OpenBSD',
      'Red Hat',
      'SuSE',
      'Ubuntu',
      'Xubuntu',
      'Cygwin',
      'Symbian OS',
      'hpwOS',
      'webOS ',
      'webOS',
      'Tablet OS',
      'Tizen',
      'Linux',
      'Mac OS X',
      'Macintosh',
      'Mac',
      'Windows 98;',
      'Windows '
    ]);

    /*------------------------------------------------------------------------*/

    /**
     * Picks the layout engine from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected layout engine.
     */
    function getLayout(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the manufacturer from an array of guesses.
     *
     * @private
     * @param {Array} guesses An object of guesses.
     * @returns {null|string} The detected manufacturer.
     */
    function getManufacturer(guesses) {
      return reduce(guesses, function(result, value, key) {
        // Lookup the manufacturer by product or scan the UA for the manufacturer.
        return result || (
          value[product] ||
          value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
          RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
        ) && key;
      });
    }

    /**
     * Picks the browser name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected browser name.
     */
    function getName(guesses) {
      return reduce(guesses, function(result, guess) {
        return result || RegExp('\\b' + (
          guess.pattern || qualify(guess)
        ) + '\\b', 'i').exec(ua) && (guess.label || guess);
      });
    }

    /**
     * Picks the OS name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected OS name.
     */
    function getOS(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
            )) {
          result = cleanupOS(result, pattern, guess.label || guess);
        }
        return result;
      });
    }

    /**
     * Picks the product name from an array of guesses.
     *
     * @private
     * @param {Array} guesses An array of guesses.
     * @returns {null|string} The detected product name.
     */
    function getProduct(guesses) {
      return reduce(guesses, function(result, guess) {
        var pattern = guess.pattern || qualify(guess);
        if (!result && (result =
              RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) ||
              RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
            )) {
          // Split by forward slash and append product version if needed.
          if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
            result[0] += ' ' + result[1];
          }
          // Correct character case and cleanup string.
          guess = guess.label || guess;
          result = format(result[0]
            .replace(RegExp(pattern, 'i'), guess)
            .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
            .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
        }
        return result;
      });
    }

    /**
     * Resolves the version using an array of UA patterns.
     *
     * @private
     * @param {Array} patterns An array of UA patterns.
     * @returns {null|string} The detected version.
     */
    function getVersion(patterns) {
      return reduce(patterns, function(result, pattern) {
        return result || (RegExp(pattern +
          '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
      });
    }

    /**
     * Returns `platform.description` when the platform object is coerced to a string.
     *
     * @name toString
     * @memberOf platform
     * @returns {string} Returns `platform.description` if available, else an empty string.
     */
    function toStringPlatform() {
      return this.description || '';
    }

    /*------------------------------------------------------------------------*/

    // Convert layout to an array so we can add extra details.
    layout && (layout = [layout]);

    // Detect product names that contain their manufacturer's name.
    if (manufacturer && !product) {
      product = getProduct([manufacturer]);
    }
    // Clean up Google TV.
    if ((data = /\bGoogle TV\b/.exec(product))) {
      product = data[0];
    }
    // Detect simulators.
    if (/\bSimulator\b/i.test(ua)) {
      product = (product ? product + ' ' : '') + 'Simulator';
    }
    // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
    if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
      description.push('running in Turbo/Uncompressed mode');
    }
    // Detect IE Mobile 11.
    if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
      data = parse(ua.replace(/like iPhone OS/, ''));
      manufacturer = data.manufacturer;
      product = data.product;
    }
    // Detect iOS.
    else if (/^iP/.test(product)) {
      name || (name = 'Safari');
      os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
        ? ' ' + data[1].replace(/_/g, '.')
        : '');
    }
    // Detect Kubuntu.
    else if (name == 'Konqueror' && !/buntu/i.test(os)) {
      os = 'Kubuntu';
    }
    // Detect Android browsers.
    else if ((manufacturer && manufacturer != 'Google' &&
        ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
        (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
      name = 'Android Browser';
      os = /\bAndroid\b/.test(os) ? os : 'Android';
    }
    // Detect Silk desktop/accelerated modes.
    else if (name == 'Silk') {
      if (!/\bMobi/i.test(ua)) {
        os = 'Android';
        description.unshift('desktop mode');
      }
      if (/Accelerated *= *true/i.test(ua)) {
        description.unshift('accelerated');
      }
    }
    // Detect PaleMoon identifying as Firefox.
    else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
      description.push('identifying as Firefox ' + data[1]);
    }
    // Detect Firefox OS and products running Firefox.
    else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
      os || (os = 'Firefox OS');
      product || (product = data[1]);
    }
    // Detect false positives for Firefox/Safari.
    else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
      // Escape the `/` for Firefox 1.
      if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
        // Clear name of false positives.
        name = null;
      }
      // Reassign a generic name.
      if ((data = product || manufacturer || os) &&
          (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
        name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
      }
    }
    // Add Chrome version to description for Electron.
    else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
      description.push('Chromium ' + data);
    }
    // Detect non-Opera (Presto-based) versions (order is important).
    if (!version) {
      version = getVersion([
        '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))',
        'Version',
        qualify(name),
        '(?:Firefox|Minefield|NetFront)'
      ]);
    }
    // Detect stubborn layout engines.
    if ((data =
          layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
          /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
          /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
          !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
          layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
        )) {
      layout = [data];
    }
    // Detect Windows Phone 7 desktop mode.
    if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
      name += ' Mobile';
      os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
      description.unshift('desktop mode');
    }
    // Detect Windows Phone 8.x desktop mode.
    else if (/\bWPDesktop\b/i.test(ua)) {
      name = 'IE Mobile';
      os = 'Windows Phone 8.x';
      description.unshift('desktop mode');
      version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
    }
    // Detect IE 11 identifying as other browsers.
    else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
      if (name) {
        description.push('identifying as ' + name + (version ? ' ' + version : ''));
      }
      name = 'IE';
      version = data[1];
    }
    // Leverage environment features.
    if (useFeatures) {
      // Detect server-side environments.
      // Rhino has a global function while others have a global object.
      if (isHostType(context, 'global')) {
        if (java) {
          data = java.lang.System;
          arch = data.getProperty('os.arch');
          os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
        }
        if (rhino) {
          try {
            version = context.require('ringo/engine').version.join('.');
            name = 'RingoJS';
          } catch(e) {
            if ((data = context.system) && data.global.system == context.system) {
              name = 'Narwhal';
              os || (os = data[0].os || null);
            }
          }
          if (!name) {
            name = 'Rhino';
          }
        }
        else if (
          typeof context.process == 'object' && !context.process.browser &&
          (data = context.process)
        ) {
          if (typeof data.versions == 'object') {
            if (typeof data.versions.electron == 'string') {
              description.push('Node ' + data.versions.node);
              name = 'Electron';
              version = data.versions.electron;
            } else if (typeof data.versions.nw == 'string') {
              description.push('Chromium ' + version, 'Node ' + data.versions.node);
              name = 'NW.js';
              version = data.versions.nw;
            }
          }
          if (!name) {
            name = 'Node.js';
            arch = data.arch;
            os = data.platform;
            version = /[\d.]+/.exec(data.version);
            version = version ? version[0] : null;
          }
        }
      }
      // Detect Adobe AIR.
      else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
        name = 'Adobe AIR';
        os = data.flash.system.Capabilities.os;
      }
      // Detect PhantomJS.
      else if (getClassOf((data = context.phantom)) == phantomClass) {
        name = 'PhantomJS';
        version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
      }
      // Detect IE compatibility modes.
      else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
        // We're in compatibility mode when the Trident version + 4 doesn't
        // equal the document mode.
        version = [version, doc.documentMode];
        if ((data = +data[1] + 4) != version[1]) {
          description.push('IE ' + version[1] + ' mode');
          layout && (layout[1] = '');
          version[1] = data;
        }
        version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
      }
      // Detect IE 11 masking as other browsers.
      else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
        description.push('masking as ' + name + ' ' + version);
        name = 'IE';
        version = '11.0';
        layout = ['Trident'];
        os = 'Windows';
      }
      os = os && format(os);
    }
    // Detect prerelease phases.
    if (version && (data =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
          /\bMinefield\b/i.test(ua) && 'a'
        )) {
      prerelease = /b/i.test(data) ? 'beta' : 'alpha';
      version = version.replace(RegExp(data + '\\+?$'), '') +
        (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
    }
    // Detect Firefox Mobile.
    if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(os)) {
      name = 'Firefox Mobile';
    }
    // Obscure Maxthon's unreliable version.
    else if (name == 'Maxthon' && version) {
      version = version.replace(/\.[\d.]+/, '.x');
    }
    // Detect Xbox 360 and Xbox One.
    else if (/\bXbox\b/i.test(product)) {
      if (product == 'Xbox 360') {
        os = null;
      }
      if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
        description.unshift('mobile mode');
      }
    }
    // Add mobile postfix.
    else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
        (os == 'Windows CE' || /Mobi/i.test(ua))) {
      name += ' Mobile';
    }
    // Detect IE platform preview.
    else if (name == 'IE' && useFeatures) {
      try {
        if (context.external === null) {
          description.unshift('platform preview');
        }
      } catch(e) {
        description.unshift('embedded');
      }
    }
    // Detect BlackBerry OS version.
    // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
    else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
          (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
          version
        )) {
      data = [data, /BB10/.test(ua)];
      os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
      version = null;
    }
    // Detect Opera identifying/masking itself as another browser.
    // http://www.opera.com/support/kb/view/843/
    else if (this != forOwn && product != 'Wii' && (
          (useFeatures && opera) ||
          (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
          (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
          (name == 'IE' && (
            (os && !/^Win/.test(os) && version > 5.5) ||
            /\bWindows XP\b/.test(os) && version > 8 ||
            version == 8 && !/\bTrident\b/.test(ua)
          ))
        ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
      // When "identifying", the UA contains both Opera and the other browser's name.
      data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
      if (reOpera.test(name)) {
        if (/\bIE\b/.test(data) && os == 'Mac OS') {
          os = null;
        }
        data = 'identify' + data;
      }
      // When "masking", the UA contains only the other browser's name.
      else {
        data = 'mask' + data;
        if (operaClass) {
          name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
        } else {
          name = 'Opera';
        }
        if (/\bIE\b/.test(data)) {
          os = null;
        }
        if (!useFeatures) {
          version = null;
        }
      }
      layout = ['Presto'];
      description.push(data);
    }
    // Detect WebKit Nightly and approximate Chrome/Safari versions.
    if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
      // Correct build number for numeric comparison.
      // (e.g. "532.5" becomes "532.05")
      data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
      // Nightly builds are postfixed with a "+".
      if (name == 'Safari' && data[1].slice(-1) == '+') {
        name = 'WebKit Nightly';
        prerelease = 'alpha';
        version = data[1].slice(0, -1);
      }
      // Clear incorrect browser versions.
      else if (version == data[1] ||
          version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        version = null;
      }
      // Use the full Chrome version when available.
      data[1] = (/\bChrome\/([\d.]+)/i.exec(ua) || 0)[1];
      // Detect Blink layout engine.
      if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
        layout = ['Blink'];
      }
      // Detect JavaScriptCore.
      // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
      if (!useFeatures || (!likeChrome && !data[1])) {
        layout && (layout[1] = 'like Safari');
        data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : '8');
      } else {
        layout && (layout[1] = 'like Chrome');
        data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
      }
      // Add the postfix of ".x" or "+" for approximate versions.
      layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
      // Obscure version for some Safari 1-2 releases.
      if (name == 'Safari' && (!version || parseInt(version) > 45)) {
        version = data;
      }
    }
    // Detect Opera desktop modes.
    if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
      name += ' ';
      description.unshift('desktop mode');
      if (data == 'zvav') {
        name += 'Mini';
        version = null;
      } else {
        name += 'Mobile';
      }
      os = os.replace(RegExp(' *' + data + '$'), '');
    }
    // Detect Chrome desktop mode.
    else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
      description.unshift('desktop mode');
      name = 'Chrome Mobile';
      version = null;

      if (/\bOS X\b/.test(os)) {
        manufacturer = 'Apple';
        os = 'iOS 4.3+';
      } else {
        os = null;
      }
    }
    // Strip incorrect OS versions.
    if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
        ua.indexOf('/' + data + '-') > -1) {
      os = trim(os.replace(data, ''));
    }
    // Add layout engine.
    if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
        /Browser|Lunascape|Maxthon/.test(name) ||
        name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
        /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(name) && layout[1])) {
      // Don't add layout details to description if they are falsey.
      (data = layout[layout.length - 1]) && description.push(data);
    }
    // Combine contextual information.
    if (description.length) {
      description = ['(' + description.join('; ') + ')'];
    }
    // Append manufacturer to description.
    if (manufacturer && product && product.indexOf(manufacturer) < 0) {
      description.push('on ' + manufacturer);
    }
    // Append product to description.
    if (product) {
      description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
    }
    // Parse the OS into an object.
    if (os) {
      data = / ([\d.+]+)$/.exec(os);
      isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
      os = {
        'architecture': 32,
        'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
        'version': data ? data[1] : null,
        'toString': function() {
          var version = this.version;
          return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
        }
      };
    }
    // Add browser/OS architecture.
    if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
      if (os) {
        os.architecture = 64;
        os.family = os.family.replace(RegExp(' *' + data), '');
      }
      if (
          name && (/\bWOW64\b/i.test(ua) ||
          (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
      ) {
        description.unshift('32-bit');
      }
    }
    // Chrome 39 and above on OS X is always 64-bit.
    else if (
        os && /^OS X/.test(os.family) &&
        name == 'Chrome' && parseFloat(version) >= 39
    ) {
      os.architecture = 64;
    }

    ua || (ua = null);

    /*------------------------------------------------------------------------*/

    /**
     * The platform object.
     *
     * @name platform
     * @type Object
     */
    var platform = {};

    /**
     * The platform description.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.description = ua;

    /**
     * The name of the browser's layout engine.
     *
     * The list of common layout engines include:
     * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.layout = layout && layout[0];

    /**
     * The name of the product's manufacturer.
     *
     * The list of manufacturers include:
     * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
     * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
     * "Nokia", "Samsung" and "Sony"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.manufacturer = manufacturer;

    /**
     * The name of the browser/environment.
     *
     * The list of common browser names include:
     * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
     * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
     * "Opera Mini" and "Opera"
     *
     * Mobile versions of some browsers have "Mobile" appended to their name:
     * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.name = name;

    /**
     * The alpha/beta release indicator.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.prerelease = prerelease;

    /**
     * The name of the product hosting the browser.
     *
     * The list of common products include:
     *
     * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
     * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
     *
     * @memberOf platform
     * @type string|null
     */
    platform.product = product;

    /**
     * The browser's user agent string.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.ua = ua;

    /**
     * The browser/environment version.
     *
     * @memberOf platform
     * @type string|null
     */
    platform.version = name && version;

    /**
     * The name of the operating system.
     *
     * @memberOf platform
     * @type Object
     */
    platform.os = os || {

      /**
       * The CPU architecture the OS is built for.
       *
       * @memberOf platform.os
       * @type number|null
       */
      'architecture': null,

      /**
       * The family of the OS.
       *
       * Common values include:
       * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
       * "Windows XP", "OS X", "Ubuntu", "Debian", "Fedora", "Red Hat", "SuSE",
       * "Android", "iOS" and "Windows Phone"
       *
       * @memberOf platform.os
       * @type string|null
       */
      'family': null,

      /**
       * The version of the OS.
       *
       * @memberOf platform.os
       * @type string|null
       */
      'version': null,

      /**
       * Returns the OS string.
       *
       * @memberOf platform.os
       * @returns {string} The OS string.
       */
      'toString': function() { return 'null'; }
    };

    platform.parse = parse;
    platform.toString = toStringPlatform;

    if (platform.version) {
      description.unshift(version);
    }
    if (platform.name) {
      description.unshift(name);
    }
    if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
      description.push(product ? '(' + os + ')' : 'on ' + os);
    }
    if (description.length) {
      platform.description = description.join(' ');
    }
    return platform;
  }

  /*--------------------------------------------------------------------------*/

  // Export platform.
  var platform = parse();

  // Some AMD build optimizers, like r.js, check for condition patterns like the following:
  if (true) {
    // Expose platform on the global object to prevent errors when platform is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    root.platform = platform;

    // Define as an anonymous module so platform can be aliased through path mapping.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return platform;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else {}
}.call(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

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

/***/ "../../node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/platform.js":
/*!*************************!*\
  !*** ./src/platform.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! platform */ "../../node_modules/platform/platform.js"), __webpack_require__(/*! process */ "../../node_modules/process/browser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _platform, _process) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _platform = _interopRequireDefault(_platform);
  _process = _interopRequireDefault(_process);

  const PlatformMapping = name => {
    if (name === 'Node.js') {
      return 'node';
    } else {
      return 'web';
    }
  };

  class Platform {
    constructor() {
      this.platform = _platform.default;
    }

    static PID() {
      if (typeof _process.default !== 'undefined' && _process.default.pid) {
        return _process.default.pid;
      } else {
        return null;
      }
    }

    static currentPlatform() {
      return _platform.default.parse();
    }

    static mixWith(BaseClass, mixins) {
      var mixinsList = [];

      if (Array.isArray(mixins)) {
        mixinsList = mixins;
      } else {
        const PfName = PlatformMapping(_platform.default.parse()['name']);
        mixinsList = mixins[PfName];
      }

      if (mixinsList === undefined) {
        throw Error(`${PfName} not found in mixins`);
      }

      return mixinsList.reduce((c, mixin) => mixin(c), BaseClass);
    }

  }

  _exports.default = Platform;
});

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3V0aWxzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3V0aWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BjYXVzYWxOZXQvdXRpbHMvL2hvbWUvaHV5bmhuZ3V5ZW4vZ2l0aHViL2NhdXNhbGl0eS9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vQGNhdXNhbE5ldC91dGlscy8vaG9tZS9odXluaG5ndXllbi9naXRodWIvY2F1c2FsaXR5L25vZGVfbW9kdWxlcy9wbGF0Zm9ybS9wbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3V0aWxzLy9ob21lL2h1eW5obmd1eWVuL2dpdGh1Yi9jYXVzYWxpdHkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3V0aWxzLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3V0aWxzLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9AY2F1c2FsTmV0L3V0aWxzLy4vc3JjL3BsYXRmb3JtLmpzIl0sIm5hbWVzIjpbIlBsYXRmb3JtTWFwcGluZyIsIm5hbWUiLCJQbGF0Zm9ybSIsImNvbnN0cnVjdG9yIiwicGxhdGZvcm0iLCJQSUQiLCJwcm9jZXNzIiwicGlkIiwiY3VycmVudFBsYXRmb3JtIiwicGFyc2UiLCJtaXhXaXRoIiwiQmFzZUNsYXNzIiwibWl4aW5zIiwibWl4aW5zTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsIlBmTmFtZSIsInVuZGVmaW5lZCIsIkVycm9yIiwicmVkdWNlIiwiYyIsIm1peGluIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxHQUFHO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUY7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLDhCQUE4QixlQUFlO0FBQzdDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxJQUEwRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksbUNBQU87QUFDWDtBQUNBLEtBQUs7QUFBQSxvR0FBQztBQUNOO0FBQ0E7QUFDQSxPQUFPLEVBU0o7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDaHNDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7QUN2THRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQSxRQUFNQSxlQUFlLEdBQUlDLElBQUQsSUFBUTtBQUM1QixRQUFHQSxJQUFJLEtBQUssU0FBWixFQUFzQjtBQUNsQixhQUFPLE1BQVA7QUFDSCxLQUZELE1BR0k7QUFDQSxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBUEQ7O0FBU2UsUUFBTUMsUUFBTixDQUFjO0FBQ3pCQyxlQUFXLEdBQUU7QUFDVCxXQUFLQyxRQUFMLEdBQWdCQSxpQkFBaEI7QUFDSDs7QUFDRCxXQUFPQyxHQUFQLEdBQVk7QUFDUixVQUFHLE9BQU9DLGdCQUFQLEtBQW1CLFdBQW5CLElBQWtDQSxpQkFBUUMsR0FBN0MsRUFBa0Q7QUFDOUMsZUFBT0QsaUJBQVFDLEdBQWY7QUFDSCxPQUZELE1BR0k7QUFDQSxlQUFPLElBQVA7QUFDSDtBQUNKOztBQUVELFdBQU9DLGVBQVAsR0FBd0I7QUFDcEIsYUFBT0osa0JBQVNLLEtBQVQsRUFBUDtBQUNIOztBQUVELFdBQU9DLE9BQVAsQ0FBZUMsU0FBZixFQUEwQkMsTUFBMUIsRUFBaUM7QUFDN0IsVUFBSUMsVUFBVSxHQUFHLEVBQWpCOztBQUNBLFVBQUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxNQUFkLENBQUgsRUFBeUI7QUFDckJDLGtCQUFVLEdBQUdELE1BQWI7QUFDSCxPQUZELE1BR0k7QUFDQSxjQUFNSSxNQUFNLEdBQUdoQixlQUFlLENBQUNJLGtCQUFTSyxLQUFULEdBQWlCLE1BQWpCLENBQUQsQ0FBOUI7QUFDQUksa0JBQVUsR0FBR0QsTUFBTSxDQUFDSSxNQUFELENBQW5CO0FBQ0g7O0FBQ0QsVUFBR0gsVUFBVSxLQUFLSSxTQUFsQixFQUE0QjtBQUN4QixjQUFNQyxLQUFLLENBQUUsR0FBRUYsTUFBTyxzQkFBWCxDQUFYO0FBQ0g7O0FBQ0QsYUFBT0gsVUFBVSxDQUFDTSxNQUFYLENBQWtCLENBQUNDLENBQUQsRUFBSUMsS0FBSixLQUFjQSxLQUFLLENBQUNELENBQUQsQ0FBckMsRUFBMENULFNBQTFDLENBQVA7QUFDSDs7QUE5QndCIiwiZmlsZSI6IkBjYXVzYWxOZXQvcGxhdGZvcm0ud2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQGNhdXNhbE5ldC91dGlsc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAY2F1c2FsTmV0L3V0aWxzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGxhdGZvcm0uanNcIik7XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiLyohXG4gKiBQbGF0Zm9ybS5qcyA8aHR0cHM6Ly9tdGhzLmJlL3BsYXRmb3JtPlxuICogQ29weXJpZ2h0IDIwMTQtMjAxOCBCZW5qYW1pbiBUYW4gPGh0dHBzOi8vYm5qbW50NG4ubm93LnNoLz5cbiAqIENvcHlyaWdodCAyMDExLTIwMTMgSm9obi1EYXZpZCBEYWx0b24gPGh0dHA6Ly9hbGx5b3VjYW5sZWV0LmNvbS8+XG4gKiBBdmFpbGFibGUgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbXRocy5iZS9taXQ+XG4gKi9cbjsoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKiogVXNlZCB0byBkZXRlcm1pbmUgaWYgdmFsdWVzIGFyZSBvZiB0aGUgbGFuZ3VhZ2UgdHlwZSBgT2JqZWN0YC4gKi9cbiAgdmFyIG9iamVjdFR5cGVzID0ge1xuICAgICdmdW5jdGlvbic6IHRydWUsXG4gICAgJ29iamVjdCc6IHRydWVcbiAgfTtcblxuICAvKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbiAgdmFyIHJvb3QgPSAob2JqZWN0VHlwZXNbdHlwZW9mIHdpbmRvd10gJiYgd2luZG93KSB8fCB0aGlzO1xuXG4gIC8qKiBCYWNrdXAgcG9zc2libGUgZ2xvYmFsIG9iamVjdC4gKi9cbiAgdmFyIG9sZFJvb3QgPSByb290O1xuXG4gIC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG4gIHZhciBmcmVlRXhwb3J0cyA9IG9iamVjdFR5cGVzW3R5cGVvZiBleHBvcnRzXSAmJiBleHBvcnRzO1xuXG4gIC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbiAgdmFyIGZyZWVNb2R1bGUgPSBvYmplY3RUeXBlc1t0eXBlb2YgbW9kdWxlXSAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbiAgLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcyBvciBCcm93c2VyaWZpZWQgY29kZSBhbmQgdXNlIGl0IGFzIGByb290YC4gKi9cbiAgdmFyIGZyZWVHbG9iYWwgPSBmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlICYmIHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuICBpZiAoZnJlZUdsb2JhbCAmJiAoZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwgfHwgZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwgfHwgZnJlZUdsb2JhbC5zZWxmID09PSBmcmVlR2xvYmFsKSkge1xuICAgIHJvb3QgPSBmcmVlR2xvYmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgYXMgdGhlIG1heGltdW0gbGVuZ3RoIG9mIGFuIGFycmF5LWxpa2Ugb2JqZWN0LlxuICAgKiBTZWUgdGhlIFtFUzYgc3BlY10oaHR0cDovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtdG9sZW5ndGgpXG4gICAqIGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICB2YXIgbWF4U2FmZUludGVnZXIgPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuXG4gIC8qKiBSZWd1bGFyIGV4cHJlc3Npb24gdG8gZGV0ZWN0IE9wZXJhLiAqL1xuICB2YXIgcmVPcGVyYSA9IC9cXGJPcGVyYS87XG5cbiAgLyoqIFBvc3NpYmxlIGdsb2JhbCBvYmplY3QuICovXG4gIHZhciB0aGlzQmluZGluZyA9IHRoaXM7XG5cbiAgLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbiAgdmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuICAvKiogVXNlZCB0byBjaGVjayBmb3Igb3duIHByb3BlcnRpZXMgb2YgYW4gb2JqZWN0LiAqL1xuICB2YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvKiogVXNlZCB0byByZXNvbHZlIHRoZSBpbnRlcm5hbCBgW1tDbGFzc11dYCBvZiB2YWx1ZXMuICovXG4gIHZhciB0b1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8qKlxuICAgKiBDYXBpdGFsaXplcyBhIHN0cmluZyB2YWx1ZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gICAqL1xuICBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cmluZykge1xuICAgIHN0cmluZyA9IFN0cmluZyhzdHJpbmcpO1xuICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gIH1cblxuICAvKipcbiAgICogQSB1dGlsaXR5IGZ1bmN0aW9uIHRvIGNsZWFuIHVwIHRoZSBPUyBuYW1lLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3MgVGhlIE9TIG5hbWUgdG8gY2xlYW4gdXAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbcGF0dGVybl0gQSBgUmVnRXhwYCBwYXR0ZXJuIG1hdGNoaW5nIHRoZSBPUyBuYW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xhYmVsXSBBIGxhYmVsIGZvciB0aGUgT1MuXG4gICAqL1xuICBmdW5jdGlvbiBjbGVhbnVwT1Mob3MsIHBhdHRlcm4sIGxhYmVsKSB7XG4gICAgLy8gUGxhdGZvcm0gdG9rZW5zIGFyZSBkZWZpbmVkIGF0OlxuICAgIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNzUwMyhWUy44NSkuYXNweFxuICAgIC8vIGh0dHA6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMDgxMTIyMDUzOTUwL2h0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNzUwMyhWUy44NSkuYXNweFxuICAgIHZhciBkYXRhID0ge1xuICAgICAgJzEwLjAnOiAnMTAnLFxuICAgICAgJzYuNCc6ICAnMTAgVGVjaG5pY2FsIFByZXZpZXcnLFxuICAgICAgJzYuMyc6ICAnOC4xJyxcbiAgICAgICc2LjInOiAgJzgnLFxuICAgICAgJzYuMSc6ICAnU2VydmVyIDIwMDggUjIgLyA3JyxcbiAgICAgICc2LjAnOiAgJ1NlcnZlciAyMDA4IC8gVmlzdGEnLFxuICAgICAgJzUuMic6ICAnU2VydmVyIDIwMDMgLyBYUCA2NC1iaXQnLFxuICAgICAgJzUuMSc6ICAnWFAnLFxuICAgICAgJzUuMDEnOiAnMjAwMCBTUDEnLFxuICAgICAgJzUuMCc6ICAnMjAwMCcsXG4gICAgICAnNC4wJzogICdOVCcsXG4gICAgICAnNC45MCc6ICdNRSdcbiAgICB9O1xuICAgIC8vIERldGVjdCBXaW5kb3dzIHZlcnNpb24gZnJvbSBwbGF0Zm9ybSB0b2tlbnMuXG4gICAgaWYgKHBhdHRlcm4gJiYgbGFiZWwgJiYgL15XaW4vaS50ZXN0KG9zKSAmJiAhL15XaW5kb3dzIFBob25lIC9pLnRlc3Qob3MpICYmXG4gICAgICAgIChkYXRhID0gZGF0YVsvW1xcZC5dKyQvLmV4ZWMob3MpXSkpIHtcbiAgICAgIG9zID0gJ1dpbmRvd3MgJyArIGRhdGE7XG4gICAgfVxuICAgIC8vIENvcnJlY3QgY2hhcmFjdGVyIGNhc2UgYW5kIGNsZWFudXAgc3RyaW5nLlxuICAgIG9zID0gU3RyaW5nKG9zKTtcblxuICAgIGlmIChwYXR0ZXJuICYmIGxhYmVsKSB7XG4gICAgICBvcyA9IG9zLnJlcGxhY2UoUmVnRXhwKHBhdHRlcm4sICdpJyksIGxhYmVsKTtcbiAgICB9XG5cbiAgICBvcyA9IGZvcm1hdChcbiAgICAgIG9zLnJlcGxhY2UoLyBjZSQvaSwgJyBDRScpXG4gICAgICAgIC5yZXBsYWNlKC9cXGJocHcvaSwgJ3dlYicpXG4gICAgICAgIC5yZXBsYWNlKC9cXGJNYWNpbnRvc2hcXGIvLCAnTWFjIE9TJylcbiAgICAgICAgLnJlcGxhY2UoL19Qb3dlclBDXFxiL2ksICcgT1MnKVxuICAgICAgICAucmVwbGFjZSgvXFxiKE9TIFgpIFteIFxcZF0rL2ksICckMScpXG4gICAgICAgIC5yZXBsYWNlKC9cXGJNYWMgKE9TIFgpXFxiLywgJyQxJylcbiAgICAgICAgLnJlcGxhY2UoL1xcLyhcXGQpLywgJyAkMScpXG4gICAgICAgIC5yZXBsYWNlKC9fL2csICcuJylcbiAgICAgICAgLnJlcGxhY2UoLyg/OiBCZVBDfFsgLl0qZmNbIFxcZC5dKykkL2ksICcnKVxuICAgICAgICAucmVwbGFjZSgvXFxieDg2XFwuNjRcXGIvZ2ksICd4ODZfNjQnKVxuICAgICAgICAucmVwbGFjZSgvXFxiKFdpbmRvd3MgUGhvbmUpIE9TXFxiLywgJyQxJylcbiAgICAgICAgLnJlcGxhY2UoL1xcYihDaHJvbWUgT1MgXFx3KykgW1xcZC5dK1xcYi8sICckMScpXG4gICAgICAgIC5zcGxpdCgnIG9uICcpWzBdXG4gICAgKTtcblxuICAgIHJldHVybiBvcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBpdGVyYXRpb24gdXRpbGl0eSBmb3IgYXJyYXlzIGFuZCBvYmplY3RzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gY2FsbGVkIHBlciBpdGVyYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBlYWNoKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gb2JqZWN0ID8gb2JqZWN0Lmxlbmd0aCA6IDA7XG5cbiAgICBpZiAodHlwZW9mIGxlbmd0aCA9PSAnbnVtYmVyJyAmJiBsZW5ndGggPiAtMSAmJiBsZW5ndGggPD0gbWF4U2FmZUludGVnZXIpIHtcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNhbGxiYWNrKG9iamVjdFtpbmRleF0sIGluZGV4LCBvYmplY3QpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3JPd24ob2JqZWN0LCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaW0gYW5kIGNvbmRpdGlvbmFsbHkgY2FwaXRhbGl6ZSBzdHJpbmcgdmFsdWVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gZm9ybWF0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHN0cmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIGZvcm1hdChzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSB0cmltKHN0cmluZyk7XG4gICAgcmV0dXJuIC9eKD86d2ViT1N8aSg/Ok9TfFApKS8udGVzdChzdHJpbmcpXG4gICAgICA/IHN0cmluZ1xuICAgICAgOiBjYXBpdGFsaXplKHN0cmluZyk7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZXMgb3ZlciBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcywgZXhlY3V0aW5nIHRoZSBgY2FsbGJhY2tgIGZvciBlYWNoLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gZXhlY3V0ZWQgcGVyIG93biBwcm9wZXJ0eS5cbiAgICovXG4gIGZ1bmN0aW9uIGZvck93bihvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICAgIGNhbGxiYWNrKG9iamVjdFtrZXldLCBrZXksIG9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGludGVybmFsIGBbW0NsYXNzXV1gIG9mIGEgdmFsdWUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgYFtbQ2xhc3NdXWAuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRDbGFzc09mKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGxcbiAgICAgID8gY2FwaXRhbGl6ZSh2YWx1ZSlcbiAgICAgIDogdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhvc3Qgb2JqZWN0cyBjYW4gcmV0dXJuIHR5cGUgdmFsdWVzIHRoYXQgYXJlIGRpZmZlcmVudCBmcm9tIHRoZWlyIGFjdHVhbFxuICAgKiBkYXRhIHR5cGUuIFRoZSBvYmplY3RzIHdlIGFyZSBjb25jZXJuZWQgd2l0aCB1c3VhbGx5IHJldHVybiBub24tcHJpbWl0aXZlXG4gICAqIHR5cGVzIG9mIFwib2JqZWN0XCIsIFwiZnVuY3Rpb25cIiwgb3IgXCJ1bmtub3duXCIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBvd25lciBvZiB0aGUgcHJvcGVydHkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvcGVydHkgdmFsdWUgaXMgYSBub24tcHJpbWl0aXZlLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc0hvc3RUeXBlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICB2YXIgdHlwZSA9IG9iamVjdCAhPSBudWxsID8gdHlwZW9mIG9iamVjdFtwcm9wZXJ0eV0gOiAnbnVtYmVyJztcbiAgICByZXR1cm4gIS9eKD86Ym9vbGVhbnxudW1iZXJ8c3RyaW5nfHVuZGVmaW5lZCkkLy50ZXN0KHR5cGUpICYmXG4gICAgICAodHlwZSA9PSAnb2JqZWN0JyA/ICEhb2JqZWN0W3Byb3BlcnR5XSA6IHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmVzIGEgc3RyaW5nIGZvciB1c2UgaW4gYSBgUmVnRXhwYCBieSBtYWtpbmcgaHlwaGVucyBhbmQgc3BhY2VzIG9wdGlvbmFsLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gcXVhbGlmeS5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHF1YWxpZmllZCBzdHJpbmcuXG4gICAqL1xuICBmdW5jdGlvbiBxdWFsaWZ5KHN0cmluZykge1xuICAgIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC8oWyAtXSkoPyEkKS9nLCAnJDE/Jyk7XG4gIH1cblxuICAvKipcbiAgICogQSBiYXJlLWJvbmVzIGBBcnJheSNyZWR1Y2VgIGxpa2UgdXRpbGl0eSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIGNhbGxlZCBwZXIgaXRlcmF0aW9uLlxuICAgKiBAcmV0dXJucyB7Kn0gVGhlIGFjY3VtdWxhdGVkIHJlc3VsdC5cbiAgICovXG4gIGZ1bmN0aW9uIHJlZHVjZShhcnJheSwgY2FsbGJhY2spIHtcbiAgICB2YXIgYWNjdW11bGF0b3IgPSBudWxsO1xuICAgIGVhY2goYXJyYXksIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgYWNjdW11bGF0b3IgPSBjYWxsYmFjayhhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBhcnJheSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSBmcm9tIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gdHJpbS5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHRyaW1tZWQgc3RyaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gdHJpbShzdHJpbmcpIHtcbiAgICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvXiArfCArJC9nLCAnJyk7XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBwbGF0Zm9ybSBvYmplY3QuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBwbGF0Zm9ybVxuICAgKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IFt1YT1uYXZpZ2F0b3IudXNlckFnZW50XSBUaGUgdXNlciBhZ2VudCBzdHJpbmcgb3JcbiAgICogIGNvbnRleHQgb2JqZWN0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBBIHBsYXRmb3JtIG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIHBhcnNlKHVhKSB7XG5cbiAgICAvKiogVGhlIGVudmlyb25tZW50IGNvbnRleHQgb2JqZWN0LiAqL1xuICAgIHZhciBjb250ZXh0ID0gcm9vdDtcblxuICAgIC8qKiBVc2VkIHRvIGZsYWcgd2hlbiBhIGN1c3RvbSBjb250ZXh0IGlzIHByb3ZpZGVkLiAqL1xuICAgIHZhciBpc0N1c3RvbUNvbnRleHQgPSB1YSAmJiB0eXBlb2YgdWEgPT0gJ29iamVjdCcgJiYgZ2V0Q2xhc3NPZih1YSkgIT0gJ1N0cmluZyc7XG5cbiAgICAvLyBKdWdnbGUgYXJndW1lbnRzLlxuICAgIGlmIChpc0N1c3RvbUNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSB1YTtcbiAgICAgIHVhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKiogQnJvd3NlciBuYXZpZ2F0b3Igb2JqZWN0LiAqL1xuICAgIHZhciBuYXYgPSBjb250ZXh0Lm5hdmlnYXRvciB8fCB7fTtcblxuICAgIC8qKiBCcm93c2VyIHVzZXIgYWdlbnQgc3RyaW5nLiAqL1xuICAgIHZhciB1c2VyQWdlbnQgPSBuYXYudXNlckFnZW50IHx8ICcnO1xuXG4gICAgdWEgfHwgKHVhID0gdXNlckFnZW50KTtcblxuICAgIC8qKiBVc2VkIHRvIGZsYWcgd2hlbiBgdGhpc0JpbmRpbmdgIGlzIHRoZSBbTW9kdWxlU2NvcGVdLiAqL1xuICAgIHZhciBpc01vZHVsZVNjb3BlID0gaXNDdXN0b21Db250ZXh0IHx8IHRoaXNCaW5kaW5nID09IG9sZFJvb3Q7XG5cbiAgICAvKiogVXNlZCB0byBkZXRlY3QgaWYgYnJvd3NlciBpcyBsaWtlIENocm9tZS4gKi9cbiAgICB2YXIgbGlrZUNocm9tZSA9IGlzQ3VzdG9tQ29udGV4dFxuICAgICAgPyAhIW5hdi5saWtlQ2hyb21lXG4gICAgICA6IC9cXGJDaHJvbWVcXGIvLnRlc3QodWEpICYmICEvaW50ZXJuYWx8XFxuL2kudGVzdCh0b1N0cmluZy50b1N0cmluZygpKTtcblxuICAgIC8qKiBJbnRlcm5hbCBgW1tDbGFzc11dYCB2YWx1ZSBzaG9ydGN1dHMuICovXG4gICAgdmFyIG9iamVjdENsYXNzID0gJ09iamVjdCcsXG4gICAgICAgIGFpclJ1bnRpbWVDbGFzcyA9IGlzQ3VzdG9tQ29udGV4dCA/IG9iamVjdENsYXNzIDogJ1NjcmlwdEJyaWRnaW5nUHJveHlPYmplY3QnLFxuICAgICAgICBlbnZpcm9DbGFzcyA9IGlzQ3VzdG9tQ29udGV4dCA/IG9iamVjdENsYXNzIDogJ0Vudmlyb25tZW50JyxcbiAgICAgICAgamF2YUNsYXNzID0gKGlzQ3VzdG9tQ29udGV4dCAmJiBjb250ZXh0LmphdmEpID8gJ0phdmFQYWNrYWdlJyA6IGdldENsYXNzT2YoY29udGV4dC5qYXZhKSxcbiAgICAgICAgcGhhbnRvbUNsYXNzID0gaXNDdXN0b21Db250ZXh0ID8gb2JqZWN0Q2xhc3MgOiAnUnVudGltZU9iamVjdCc7XG5cbiAgICAvKiogRGV0ZWN0IEphdmEgZW52aXJvbm1lbnRzLiAqL1xuICAgIHZhciBqYXZhID0gL1xcYkphdmEvLnRlc3QoamF2YUNsYXNzKSAmJiBjb250ZXh0LmphdmE7XG5cbiAgICAvKiogRGV0ZWN0IFJoaW5vLiAqL1xuICAgIHZhciByaGlubyA9IGphdmEgJiYgZ2V0Q2xhc3NPZihjb250ZXh0LmVudmlyb25tZW50KSA9PSBlbnZpcm9DbGFzcztcblxuICAgIC8qKiBBIGNoYXJhY3RlciB0byByZXByZXNlbnQgYWxwaGEuICovXG4gICAgdmFyIGFscGhhID0gamF2YSA/ICdhJyA6ICdcXHUwM2IxJztcblxuICAgIC8qKiBBIGNoYXJhY3RlciB0byByZXByZXNlbnQgYmV0YS4gKi9cbiAgICB2YXIgYmV0YSA9IGphdmEgPyAnYicgOiAnXFx1MDNiMic7XG5cbiAgICAvKiogQnJvd3NlciBkb2N1bWVudCBvYmplY3QuICovXG4gICAgdmFyIGRvYyA9IGNvbnRleHQuZG9jdW1lbnQgfHwge307XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3QgT3BlcmEgYnJvd3NlciAoUHJlc3RvLWJhc2VkKS5cbiAgICAgKiBodHRwOi8vd3d3Lmhvd3RvY3JlYXRlLmNvLnVrL29wZXJhU3R1ZmYvb3BlcmFPYmplY3QuaHRtbFxuICAgICAqIGh0dHA6Ly9kZXYub3BlcmEuY29tL2FydGljbGVzL3ZpZXcvb3BlcmEtbWluaS13ZWItY29udGVudC1hdXRob3JpbmctZ3VpZGVsaW5lcy8jb3BlcmFtaW5pXG4gICAgICovXG4gICAgdmFyIG9wZXJhID0gY29udGV4dC5vcGVyYW1pbmkgfHwgY29udGV4dC5vcGVyYTtcblxuICAgIC8qKiBPcGVyYSBgW1tDbGFzc11dYC4gKi9cbiAgICB2YXIgb3BlcmFDbGFzcyA9IHJlT3BlcmEudGVzdChvcGVyYUNsYXNzID0gKGlzQ3VzdG9tQ29udGV4dCAmJiBvcGVyYSkgPyBvcGVyYVsnW1tDbGFzc11dJ10gOiBnZXRDbGFzc09mKG9wZXJhKSlcbiAgICAgID8gb3BlcmFDbGFzc1xuICAgICAgOiAob3BlcmEgPSBudWxsKTtcblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC8qKiBUZW1wb3JhcnkgdmFyaWFibGUgdXNlZCBvdmVyIHRoZSBzY3JpcHQncyBsaWZldGltZS4gKi9cbiAgICB2YXIgZGF0YTtcblxuICAgIC8qKiBUaGUgQ1BVIGFyY2hpdGVjdHVyZS4gKi9cbiAgICB2YXIgYXJjaCA9IHVhO1xuXG4gICAgLyoqIFBsYXRmb3JtIGRlc2NyaXB0aW9uIGFycmF5LiAqL1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IFtdO1xuXG4gICAgLyoqIFBsYXRmb3JtIGFscGhhL2JldGEgaW5kaWNhdG9yLiAqL1xuICAgIHZhciBwcmVyZWxlYXNlID0gbnVsbDtcblxuICAgIC8qKiBBIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCBlbnZpcm9ubWVudCBmZWF0dXJlcyBzaG91bGQgYmUgdXNlZCB0byByZXNvbHZlIHRoZSBwbGF0Zm9ybS4gKi9cbiAgICB2YXIgdXNlRmVhdHVyZXMgPSB1YSA9PSB1c2VyQWdlbnQ7XG5cbiAgICAvKiogVGhlIGJyb3dzZXIvZW52aXJvbm1lbnQgdmVyc2lvbi4gKi9cbiAgICB2YXIgdmVyc2lvbiA9IHVzZUZlYXR1cmVzICYmIG9wZXJhICYmIHR5cGVvZiBvcGVyYS52ZXJzaW9uID09ICdmdW5jdGlvbicgJiYgb3BlcmEudmVyc2lvbigpO1xuXG4gICAgLyoqIEEgZmxhZyB0byBpbmRpY2F0ZSBpZiB0aGUgT1MgZW5kcyB3aXRoIFwiLyBWZXJzaW9uXCIgKi9cbiAgICB2YXIgaXNTcGVjaWFsQ2FzZWRPUztcblxuICAgIC8qIERldGVjdGFibGUgbGF5b3V0IGVuZ2luZXMgKG9yZGVyIGlzIGltcG9ydGFudCkuICovXG4gICAgdmFyIGxheW91dCA9IGdldExheW91dChbXG4gICAgICB7ICdsYWJlbCc6ICdFZGdlSFRNTCcsICdwYXR0ZXJuJzogJ0VkZ2UnIH0sXG4gICAgICAnVHJpZGVudCcsXG4gICAgICB7ICdsYWJlbCc6ICdXZWJLaXQnLCAncGF0dGVybic6ICdBcHBsZVdlYktpdCcgfSxcbiAgICAgICdpQ2FiJyxcbiAgICAgICdQcmVzdG8nLFxuICAgICAgJ05ldEZyb250JyxcbiAgICAgICdUYXNtYW4nLFxuICAgICAgJ0tIVE1MJyxcbiAgICAgICdHZWNrbydcbiAgICBdKTtcblxuICAgIC8qIERldGVjdGFibGUgYnJvd3NlciBuYW1lcyAob3JkZXIgaXMgaW1wb3J0YW50KS4gKi9cbiAgICB2YXIgbmFtZSA9IGdldE5hbWUoW1xuICAgICAgJ0Fkb2JlIEFJUicsXG4gICAgICAnQXJvcmEnLFxuICAgICAgJ0F2YW50IEJyb3dzZXInLFxuICAgICAgJ0JyZWFjaCcsXG4gICAgICAnQ2FtaW5vJyxcbiAgICAgICdFbGVjdHJvbicsXG4gICAgICAnRXBpcGhhbnknLFxuICAgICAgJ0Zlbm5lYycsXG4gICAgICAnRmxvY2snLFxuICAgICAgJ0dhbGVvbicsXG4gICAgICAnR3JlZW5Ccm93c2VyJyxcbiAgICAgICdpQ2FiJyxcbiAgICAgICdJY2V3ZWFzZWwnLFxuICAgICAgJ0stTWVsZW9uJyxcbiAgICAgICdLb25xdWVyb3InLFxuICAgICAgJ0x1bmFzY2FwZScsXG4gICAgICAnTWF4dGhvbicsXG4gICAgICB7ICdsYWJlbCc6ICdNaWNyb3NvZnQgRWRnZScsICdwYXR0ZXJuJzogJ0VkZ2UnIH0sXG4gICAgICAnTWlkb3JpJyxcbiAgICAgICdOb29rIEJyb3dzZXInLFxuICAgICAgJ1BhbGVNb29uJyxcbiAgICAgICdQaGFudG9tSlMnLFxuICAgICAgJ1JhdmVuJyxcbiAgICAgICdSZWtvbnEnLFxuICAgICAgJ1JvY2tNZWx0JyxcbiAgICAgIHsgJ2xhYmVsJzogJ1NhbXN1bmcgSW50ZXJuZXQnLCAncGF0dGVybic6ICdTYW1zdW5nQnJvd3NlcicgfSxcbiAgICAgICdTZWFNb25rZXknLFxuICAgICAgeyAnbGFiZWwnOiAnU2lsaycsICdwYXR0ZXJuJzogJyg/OkNsb3VkOXxTaWxrLUFjY2VsZXJhdGVkKScgfSxcbiAgICAgICdTbGVpcG5pcicsXG4gICAgICAnU2xpbUJyb3dzZXInLFxuICAgICAgeyAnbGFiZWwnOiAnU1JXYXJlIElyb24nLCAncGF0dGVybic6ICdJcm9uJyB9LFxuICAgICAgJ1N1bnJpc2UnLFxuICAgICAgJ1N3aWZ0Zm94JyxcbiAgICAgICdXYXRlcmZveCcsXG4gICAgICAnV2ViUG9zaXRpdmUnLFxuICAgICAgJ09wZXJhIE1pbmknLFxuICAgICAgeyAnbGFiZWwnOiAnT3BlcmEgTWluaScsICdwYXR0ZXJuJzogJ09QaU9TJyB9LFxuICAgICAgJ09wZXJhJyxcbiAgICAgIHsgJ2xhYmVsJzogJ09wZXJhJywgJ3BhdHRlcm4nOiAnT1BSJyB9LFxuICAgICAgJ0Nocm9tZScsXG4gICAgICB7ICdsYWJlbCc6ICdDaHJvbWUgTW9iaWxlJywgJ3BhdHRlcm4nOiAnKD86Q3JpT1N8Q3JNbyknIH0sXG4gICAgICB7ICdsYWJlbCc6ICdGaXJlZm94JywgJ3BhdHRlcm4nOiAnKD86RmlyZWZveHxNaW5lZmllbGQpJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnRmlyZWZveCBmb3IgaU9TJywgJ3BhdHRlcm4nOiAnRnhpT1MnIH0sXG4gICAgICB7ICdsYWJlbCc6ICdJRScsICdwYXR0ZXJuJzogJ0lFTW9iaWxlJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnSUUnLCAncGF0dGVybic6ICdNU0lFJyB9LFxuICAgICAgJ1NhZmFyaSdcbiAgICBdKTtcblxuICAgIC8qIERldGVjdGFibGUgcHJvZHVjdHMgKG9yZGVyIGlzIGltcG9ydGFudCkuICovXG4gICAgdmFyIHByb2R1Y3QgPSBnZXRQcm9kdWN0KFtcbiAgICAgIHsgJ2xhYmVsJzogJ0JsYWNrQmVycnknLCAncGF0dGVybic6ICdCQjEwJyB9LFxuICAgICAgJ0JsYWNrQmVycnknLFxuICAgICAgeyAnbGFiZWwnOiAnR2FsYXh5IFMnLCAncGF0dGVybic6ICdHVC1JOTAwMCcgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0dhbGF4eSBTMicsICdwYXR0ZXJuJzogJ0dULUk5MTAwJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnR2FsYXh5IFMzJywgJ3BhdHRlcm4nOiAnR1QtSTkzMDAnIH0sXG4gICAgICB7ICdsYWJlbCc6ICdHYWxheHkgUzQnLCAncGF0dGVybic6ICdHVC1JOTUwMCcgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0dhbGF4eSBTNScsICdwYXR0ZXJuJzogJ1NNLUc5MDAnIH0sXG4gICAgICB7ICdsYWJlbCc6ICdHYWxheHkgUzYnLCAncGF0dGVybic6ICdTTS1HOTIwJyB9LFxuICAgICAgeyAnbGFiZWwnOiAnR2FsYXh5IFM2IEVkZ2UnLCAncGF0dGVybic6ICdTTS1HOTI1JyB9LFxuICAgICAgeyAnbGFiZWwnOiAnR2FsYXh5IFM3JywgJ3BhdHRlcm4nOiAnU00tRzkzMCcgfSxcbiAgICAgIHsgJ2xhYmVsJzogJ0dhbGF4eSBTNyBFZGdlJywgJ3BhdHRlcm4nOiAnU00tRzkzNScgfSxcbiAgICAgICdHb29nbGUgVFYnLFxuICAgICAgJ0x1bWlhJyxcbiAgICAgICdpUGFkJyxcbiAgICAgICdpUG9kJyxcbiAgICAgICdpUGhvbmUnLFxuICAgICAgJ0tpbmRsZScsXG4gICAgICB7ICdsYWJlbCc6ICdLaW5kbGUgRmlyZScsICdwYXR0ZXJuJzogJyg/OkNsb3VkOXxTaWxrLUFjY2VsZXJhdGVkKScgfSxcbiAgICAgICdOZXh1cycsXG4gICAgICAnTm9vaycsXG4gICAgICAnUGxheUJvb2snLFxuICAgICAgJ1BsYXlTdGF0aW9uIFZpdGEnLFxuICAgICAgJ1BsYXlTdGF0aW9uJyxcbiAgICAgICdUb3VjaFBhZCcsXG4gICAgICAnVHJhbnNmb3JtZXInLFxuICAgICAgeyAnbGFiZWwnOiAnV2lpIFUnLCAncGF0dGVybic6ICdXaWlVJyB9LFxuICAgICAgJ1dpaScsXG4gICAgICAnWGJveCBPbmUnLFxuICAgICAgeyAnbGFiZWwnOiAnWGJveCAzNjAnLCAncGF0dGVybic6ICdYYm94JyB9LFxuICAgICAgJ1hvb20nXG4gICAgXSk7XG5cbiAgICAvKiBEZXRlY3RhYmxlIG1hbnVmYWN0dXJlcnMuICovXG4gICAgdmFyIG1hbnVmYWN0dXJlciA9IGdldE1hbnVmYWN0dXJlcih7XG4gICAgICAnQXBwbGUnOiB7ICdpUGFkJzogMSwgJ2lQaG9uZSc6IDEsICdpUG9kJzogMSB9LFxuICAgICAgJ0FyY2hvcyc6IHt9LFxuICAgICAgJ0FtYXpvbic6IHsgJ0tpbmRsZSc6IDEsICdLaW5kbGUgRmlyZSc6IDEgfSxcbiAgICAgICdBc3VzJzogeyAnVHJhbnNmb3JtZXInOiAxIH0sXG4gICAgICAnQmFybmVzICYgTm9ibGUnOiB7ICdOb29rJzogMSB9LFxuICAgICAgJ0JsYWNrQmVycnknOiB7ICdQbGF5Qm9vayc6IDEgfSxcbiAgICAgICdHb29nbGUnOiB7ICdHb29nbGUgVFYnOiAxLCAnTmV4dXMnOiAxIH0sXG4gICAgICAnSFAnOiB7ICdUb3VjaFBhZCc6IDEgfSxcbiAgICAgICdIVEMnOiB7fSxcbiAgICAgICdMRyc6IHt9LFxuICAgICAgJ01pY3Jvc29mdCc6IHsgJ1hib3gnOiAxLCAnWGJveCBPbmUnOiAxIH0sXG4gICAgICAnTW90b3JvbGEnOiB7ICdYb29tJzogMSB9LFxuICAgICAgJ05pbnRlbmRvJzogeyAnV2lpIFUnOiAxLCAgJ1dpaSc6IDEgfSxcbiAgICAgICdOb2tpYSc6IHsgJ0x1bWlhJzogMSB9LFxuICAgICAgJ1NhbXN1bmcnOiB7ICdHYWxheHkgUyc6IDEsICdHYWxheHkgUzInOiAxLCAnR2FsYXh5IFMzJzogMSwgJ0dhbGF4eSBTNCc6IDEgfSxcbiAgICAgICdTb255JzogeyAnUGxheVN0YXRpb24nOiAxLCAnUGxheVN0YXRpb24gVml0YSc6IDEgfVxuICAgIH0pO1xuXG4gICAgLyogRGV0ZWN0YWJsZSBvcGVyYXRpbmcgc3lzdGVtcyAob3JkZXIgaXMgaW1wb3J0YW50KS4gKi9cbiAgICB2YXIgb3MgPSBnZXRPUyhbXG4gICAgICAnV2luZG93cyBQaG9uZScsXG4gICAgICAnQW5kcm9pZCcsXG4gICAgICAnQ2VudE9TJyxcbiAgICAgIHsgJ2xhYmVsJzogJ0Nocm9tZSBPUycsICdwYXR0ZXJuJzogJ0NyT1MnIH0sXG4gICAgICAnRGViaWFuJyxcbiAgICAgICdGZWRvcmEnLFxuICAgICAgJ0ZyZWVCU0QnLFxuICAgICAgJ0dlbnRvbycsXG4gICAgICAnSGFpa3UnLFxuICAgICAgJ0t1YnVudHUnLFxuICAgICAgJ0xpbnV4IE1pbnQnLFxuICAgICAgJ09wZW5CU0QnLFxuICAgICAgJ1JlZCBIYXQnLFxuICAgICAgJ1N1U0UnLFxuICAgICAgJ1VidW50dScsXG4gICAgICAnWHVidW50dScsXG4gICAgICAnQ3lnd2luJyxcbiAgICAgICdTeW1iaWFuIE9TJyxcbiAgICAgICdocHdPUycsXG4gICAgICAnd2ViT1MgJyxcbiAgICAgICd3ZWJPUycsXG4gICAgICAnVGFibGV0IE9TJyxcbiAgICAgICdUaXplbicsXG4gICAgICAnTGludXgnLFxuICAgICAgJ01hYyBPUyBYJyxcbiAgICAgICdNYWNpbnRvc2gnLFxuICAgICAgJ01hYycsXG4gICAgICAnV2luZG93cyA5ODsnLFxuICAgICAgJ1dpbmRvd3MgJ1xuICAgIF0pO1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgLyoqXG4gICAgICogUGlja3MgdGhlIGxheW91dCBlbmdpbmUgZnJvbSBhbiBhcnJheSBvZiBndWVzc2VzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBndWVzc2VzIEFuIGFycmF5IG9mIGd1ZXNzZXMuXG4gICAgICogQHJldHVybnMge251bGx8c3RyaW5nfSBUaGUgZGV0ZWN0ZWQgbGF5b3V0IGVuZ2luZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRMYXlvdXQoZ3Vlc3Nlcykge1xuICAgICAgcmV0dXJuIHJlZHVjZShndWVzc2VzLCBmdW5jdGlvbihyZXN1bHQsIGd1ZXNzKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgfHwgUmVnRXhwKCdcXFxcYicgKyAoXG4gICAgICAgICAgZ3Vlc3MucGF0dGVybiB8fCBxdWFsaWZ5KGd1ZXNzKVxuICAgICAgICApICsgJ1xcXFxiJywgJ2knKS5leGVjKHVhKSAmJiAoZ3Vlc3MubGFiZWwgfHwgZ3Vlc3MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGlja3MgdGhlIG1hbnVmYWN0dXJlciBmcm9tIGFuIGFycmF5IG9mIGd1ZXNzZXMuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGd1ZXNzZXMgQW4gb2JqZWN0IG9mIGd1ZXNzZXMuXG4gICAgICogQHJldHVybnMge251bGx8c3RyaW5nfSBUaGUgZGV0ZWN0ZWQgbWFudWZhY3R1cmVyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE1hbnVmYWN0dXJlcihndWVzc2VzKSB7XG4gICAgICByZXR1cm4gcmVkdWNlKGd1ZXNzZXMsIGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICAgICAgICAvLyBMb29rdXAgdGhlIG1hbnVmYWN0dXJlciBieSBwcm9kdWN0IG9yIHNjYW4gdGhlIFVBIGZvciB0aGUgbWFudWZhY3R1cmVyLlxuICAgICAgICByZXR1cm4gcmVzdWx0IHx8IChcbiAgICAgICAgICB2YWx1ZVtwcm9kdWN0XSB8fFxuICAgICAgICAgIHZhbHVlWy9eW2Etel0rKD86ICtbYS16XStcXGIpKi9pLmV4ZWMocHJvZHVjdCldIHx8XG4gICAgICAgICAgUmVnRXhwKCdcXFxcYicgKyBxdWFsaWZ5KGtleSkgKyAnKD86XFxcXGJ8XFxcXHcqXFxcXGQpJywgJ2knKS5leGVjKHVhKVxuICAgICAgICApICYmIGtleTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBpY2tzIHRoZSBicm93c2VyIG5hbWUgZnJvbSBhbiBhcnJheSBvZiBndWVzc2VzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBndWVzc2VzIEFuIGFycmF5IG9mIGd1ZXNzZXMuXG4gICAgICogQHJldHVybnMge251bGx8c3RyaW5nfSBUaGUgZGV0ZWN0ZWQgYnJvd3NlciBuYW1lLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE5hbWUoZ3Vlc3Nlcykge1xuICAgICAgcmV0dXJuIHJlZHVjZShndWVzc2VzLCBmdW5jdGlvbihyZXN1bHQsIGd1ZXNzKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgfHwgUmVnRXhwKCdcXFxcYicgKyAoXG4gICAgICAgICAgZ3Vlc3MucGF0dGVybiB8fCBxdWFsaWZ5KGd1ZXNzKVxuICAgICAgICApICsgJ1xcXFxiJywgJ2knKS5leGVjKHVhKSAmJiAoZ3Vlc3MubGFiZWwgfHwgZ3Vlc3MpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGlja3MgdGhlIE9TIG5hbWUgZnJvbSBhbiBhcnJheSBvZiBndWVzc2VzLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBndWVzc2VzIEFuIGFycmF5IG9mIGd1ZXNzZXMuXG4gICAgICogQHJldHVybnMge251bGx8c3RyaW5nfSBUaGUgZGV0ZWN0ZWQgT1MgbmFtZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRPUyhndWVzc2VzKSB7XG4gICAgICByZXR1cm4gcmVkdWNlKGd1ZXNzZXMsIGZ1bmN0aW9uKHJlc3VsdCwgZ3Vlc3MpIHtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSBndWVzcy5wYXR0ZXJuIHx8IHF1YWxpZnkoZ3Vlc3MpO1xuICAgICAgICBpZiAoIXJlc3VsdCAmJiAocmVzdWx0ID1cbiAgICAgICAgICAgICAgUmVnRXhwKCdcXFxcYicgKyBwYXR0ZXJuICsgJyg/Oi9bXFxcXGQuXSt8WyBcXFxcdy5dKiknLCAnaScpLmV4ZWModWEpXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgcmVzdWx0ID0gY2xlYW51cE9TKHJlc3VsdCwgcGF0dGVybiwgZ3Vlc3MubGFiZWwgfHwgZ3Vlc3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQaWNrcyB0aGUgcHJvZHVjdCBuYW1lIGZyb20gYW4gYXJyYXkgb2YgZ3Vlc3Nlcy5cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gZ3Vlc3NlcyBBbiBhcnJheSBvZiBndWVzc2VzLlxuICAgICAqIEByZXR1cm5zIHtudWxsfHN0cmluZ30gVGhlIGRldGVjdGVkIHByb2R1Y3QgbmFtZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRQcm9kdWN0KGd1ZXNzZXMpIHtcbiAgICAgIHJldHVybiByZWR1Y2UoZ3Vlc3NlcywgZnVuY3Rpb24ocmVzdWx0LCBndWVzcykge1xuICAgICAgICB2YXIgcGF0dGVybiA9IGd1ZXNzLnBhdHRlcm4gfHwgcXVhbGlmeShndWVzcyk7XG4gICAgICAgIGlmICghcmVzdWx0ICYmIChyZXN1bHQgPVxuICAgICAgICAgICAgICBSZWdFeHAoJ1xcXFxiJyArIHBhdHRlcm4gKyAnICpcXFxcZCtbLlxcXFx3X10qJywgJ2knKS5leGVjKHVhKSB8fFxuICAgICAgICAgICAgICBSZWdFeHAoJ1xcXFxiJyArIHBhdHRlcm4gKyAnICpcXFxcdystW1xcXFx3XSonLCAnaScpLmV4ZWModWEpIHx8XG4gICAgICAgICAgICAgIFJlZ0V4cCgnXFxcXGInICsgcGF0dGVybiArICcoPzo7ICooPzpbYS16XStbXy1dKT9bYS16XStcXFxcZCt8W14gKCk7LV0qKScsICdpJykuZXhlYyh1YSlcbiAgICAgICAgICAgICkpIHtcbiAgICAgICAgICAvLyBTcGxpdCBieSBmb3J3YXJkIHNsYXNoIGFuZCBhcHBlbmQgcHJvZHVjdCB2ZXJzaW9uIGlmIG5lZWRlZC5cbiAgICAgICAgICBpZiAoKHJlc3VsdCA9IFN0cmluZygoZ3Vlc3MubGFiZWwgJiYgIVJlZ0V4cChwYXR0ZXJuLCAnaScpLnRlc3QoZ3Vlc3MubGFiZWwpKSA/IGd1ZXNzLmxhYmVsIDogcmVzdWx0KS5zcGxpdCgnLycpKVsxXSAmJiAhL1tcXGQuXSsvLnRlc3QocmVzdWx0WzBdKSkge1xuICAgICAgICAgICAgcmVzdWx0WzBdICs9ICcgJyArIHJlc3VsdFsxXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQ29ycmVjdCBjaGFyYWN0ZXIgY2FzZSBhbmQgY2xlYW51cCBzdHJpbmcuXG4gICAgICAgICAgZ3Vlc3MgPSBndWVzcy5sYWJlbCB8fCBndWVzcztcbiAgICAgICAgICByZXN1bHQgPSBmb3JtYXQocmVzdWx0WzBdXG4gICAgICAgICAgICAucmVwbGFjZShSZWdFeHAocGF0dGVybiwgJ2knKSwgZ3Vlc3MpXG4gICAgICAgICAgICAucmVwbGFjZShSZWdFeHAoJzsgKig/OicgKyBndWVzcyArICdbXy1dKT8nLCAnaScpLCAnICcpXG4gICAgICAgICAgICAucmVwbGFjZShSZWdFeHAoJygnICsgZ3Vlc3MgKyAnKVstXy5dPyhcXFxcdyknLCAnaScpLCAnJDEgJDInKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIHRoZSB2ZXJzaW9uIHVzaW5nIGFuIGFycmF5IG9mIFVBIHBhdHRlcm5zLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXR0ZXJucyBBbiBhcnJheSBvZiBVQSBwYXR0ZXJucy5cbiAgICAgKiBAcmV0dXJucyB7bnVsbHxzdHJpbmd9IFRoZSBkZXRlY3RlZCB2ZXJzaW9uLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldFZlcnNpb24ocGF0dGVybnMpIHtcbiAgICAgIHJldHVybiByZWR1Y2UocGF0dGVybnMsIGZ1bmN0aW9uKHJlc3VsdCwgcGF0dGVybikge1xuICAgICAgICByZXR1cm4gcmVzdWx0IHx8IChSZWdFeHAocGF0dGVybiArXG4gICAgICAgICAgJyg/Oi1bXFxcXGQuXSsvfCg/OiBmb3IgW1xcXFx3LV0rKT9bIC8tXSkoW1xcXFxkLl0rW14gKCk7L18tXSopJywgJ2knKS5leGVjKHVhKSB8fCAwKVsxXSB8fCBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgcGxhdGZvcm0uZGVzY3JpcHRpb25gIHdoZW4gdGhlIHBsYXRmb3JtIG9iamVjdCBpcyBjb2VyY2VkIHRvIGEgc3RyaW5nLlxuICAgICAqXG4gICAgICogQG5hbWUgdG9TdHJpbmdcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIGBwbGF0Zm9ybS5kZXNjcmlwdGlvbmAgaWYgYXZhaWxhYmxlLCBlbHNlIGFuIGVtcHR5IHN0cmluZy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiB0b1N0cmluZ1BsYXRmb3JtKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgfVxuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgLy8gQ29udmVydCBsYXlvdXQgdG8gYW4gYXJyYXkgc28gd2UgY2FuIGFkZCBleHRyYSBkZXRhaWxzLlxuICAgIGxheW91dCAmJiAobGF5b3V0ID0gW2xheW91dF0pO1xuXG4gICAgLy8gRGV0ZWN0IHByb2R1Y3QgbmFtZXMgdGhhdCBjb250YWluIHRoZWlyIG1hbnVmYWN0dXJlcidzIG5hbWUuXG4gICAgaWYgKG1hbnVmYWN0dXJlciAmJiAhcHJvZHVjdCkge1xuICAgICAgcHJvZHVjdCA9IGdldFByb2R1Y3QoW21hbnVmYWN0dXJlcl0pO1xuICAgIH1cbiAgICAvLyBDbGVhbiB1cCBHb29nbGUgVFYuXG4gICAgaWYgKChkYXRhID0gL1xcYkdvb2dsZSBUVlxcYi8uZXhlYyhwcm9kdWN0KSkpIHtcbiAgICAgIHByb2R1Y3QgPSBkYXRhWzBdO1xuICAgIH1cbiAgICAvLyBEZXRlY3Qgc2ltdWxhdG9ycy5cbiAgICBpZiAoL1xcYlNpbXVsYXRvclxcYi9pLnRlc3QodWEpKSB7XG4gICAgICBwcm9kdWN0ID0gKHByb2R1Y3QgPyBwcm9kdWN0ICsgJyAnIDogJycpICsgJ1NpbXVsYXRvcic7XG4gICAgfVxuICAgIC8vIERldGVjdCBPcGVyYSBNaW5pIDgrIHJ1bm5pbmcgaW4gVHVyYm8vVW5jb21wcmVzc2VkIG1vZGUgb24gaU9TLlxuICAgIGlmIChuYW1lID09ICdPcGVyYSBNaW5pJyAmJiAvXFxiT1BpT1NcXGIvLnRlc3QodWEpKSB7XG4gICAgICBkZXNjcmlwdGlvbi5wdXNoKCdydW5uaW5nIGluIFR1cmJvL1VuY29tcHJlc3NlZCBtb2RlJyk7XG4gICAgfVxuICAgIC8vIERldGVjdCBJRSBNb2JpbGUgMTEuXG4gICAgaWYgKG5hbWUgPT0gJ0lFJyAmJiAvXFxibGlrZSBpUGhvbmUgT1NcXGIvLnRlc3QodWEpKSB7XG4gICAgICBkYXRhID0gcGFyc2UodWEucmVwbGFjZSgvbGlrZSBpUGhvbmUgT1MvLCAnJykpO1xuICAgICAgbWFudWZhY3R1cmVyID0gZGF0YS5tYW51ZmFjdHVyZXI7XG4gICAgICBwcm9kdWN0ID0gZGF0YS5wcm9kdWN0O1xuICAgIH1cbiAgICAvLyBEZXRlY3QgaU9TLlxuICAgIGVsc2UgaWYgKC9eaVAvLnRlc3QocHJvZHVjdCkpIHtcbiAgICAgIG5hbWUgfHwgKG5hbWUgPSAnU2FmYXJpJyk7XG4gICAgICBvcyA9ICdpT1MnICsgKChkYXRhID0gLyBPUyAoW1xcZF9dKykvaS5leGVjKHVhKSlcbiAgICAgICAgPyAnICcgKyBkYXRhWzFdLnJlcGxhY2UoL18vZywgJy4nKVxuICAgICAgICA6ICcnKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IEt1YnVudHUuXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnS29ucXVlcm9yJyAmJiAhL2J1bnR1L2kudGVzdChvcykpIHtcbiAgICAgIG9zID0gJ0t1YnVudHUnO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgQW5kcm9pZCBicm93c2Vycy5cbiAgICBlbHNlIGlmICgobWFudWZhY3R1cmVyICYmIG1hbnVmYWN0dXJlciAhPSAnR29vZ2xlJyAmJlxuICAgICAgICAoKC9DaHJvbWUvLnRlc3QobmFtZSkgJiYgIS9cXGJNb2JpbGUgU2FmYXJpXFxiL2kudGVzdCh1YSkpIHx8IC9cXGJWaXRhXFxiLy50ZXN0KHByb2R1Y3QpKSkgfHxcbiAgICAgICAgKC9cXGJBbmRyb2lkXFxiLy50ZXN0KG9zKSAmJiAvXkNocm9tZS8udGVzdChuYW1lKSAmJiAvXFxiVmVyc2lvblxcLy9pLnRlc3QodWEpKSkge1xuICAgICAgbmFtZSA9ICdBbmRyb2lkIEJyb3dzZXInO1xuICAgICAgb3MgPSAvXFxiQW5kcm9pZFxcYi8udGVzdChvcykgPyBvcyA6ICdBbmRyb2lkJztcbiAgICB9XG4gICAgLy8gRGV0ZWN0IFNpbGsgZGVza3RvcC9hY2NlbGVyYXRlZCBtb2Rlcy5cbiAgICBlbHNlIGlmIChuYW1lID09ICdTaWxrJykge1xuICAgICAgaWYgKCEvXFxiTW9iaS9pLnRlc3QodWEpKSB7XG4gICAgICAgIG9zID0gJ0FuZHJvaWQnO1xuICAgICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdkZXNrdG9wIG1vZGUnKTtcbiAgICAgIH1cbiAgICAgIGlmICgvQWNjZWxlcmF0ZWQgKj0gKnRydWUvaS50ZXN0KHVhKSkge1xuICAgICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdhY2NlbGVyYXRlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBEZXRlY3QgUGFsZU1vb24gaWRlbnRpZnlpbmcgYXMgRmlyZWZveC5cbiAgICBlbHNlIGlmIChuYW1lID09ICdQYWxlTW9vbicgJiYgKGRhdGEgPSAvXFxiRmlyZWZveFxcLyhbXFxkLl0rKVxcYi8uZXhlYyh1YSkpKSB7XG4gICAgICBkZXNjcmlwdGlvbi5wdXNoKCdpZGVudGlmeWluZyBhcyBGaXJlZm94ICcgKyBkYXRhWzFdKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IEZpcmVmb3ggT1MgYW5kIHByb2R1Y3RzIHJ1bm5pbmcgRmlyZWZveC5cbiAgICBlbHNlIGlmIChuYW1lID09ICdGaXJlZm94JyAmJiAoZGF0YSA9IC9cXGIoTW9iaWxlfFRhYmxldHxUVilcXGIvaS5leGVjKHVhKSkpIHtcbiAgICAgIG9zIHx8IChvcyA9ICdGaXJlZm94IE9TJyk7XG4gICAgICBwcm9kdWN0IHx8IChwcm9kdWN0ID0gZGF0YVsxXSk7XG4gICAgfVxuICAgIC8vIERldGVjdCBmYWxzZSBwb3NpdGl2ZXMgZm9yIEZpcmVmb3gvU2FmYXJpLlxuICAgIGVsc2UgaWYgKCFuYW1lIHx8IChkYXRhID0gIS9cXGJNaW5lZmllbGRcXGIvaS50ZXN0KHVhKSAmJiAvXFxiKD86RmlyZWZveHxTYWZhcmkpXFxiLy5leGVjKG5hbWUpKSkge1xuICAgICAgLy8gRXNjYXBlIHRoZSBgL2AgZm9yIEZpcmVmb3ggMS5cbiAgICAgIGlmIChuYW1lICYmICFwcm9kdWN0ICYmIC9bXFwvLF18XlteKF0rP1xcKS8udGVzdCh1YS5zbGljZSh1YS5pbmRleE9mKGRhdGEgKyAnLycpICsgOCkpKSB7XG4gICAgICAgIC8vIENsZWFyIG5hbWUgb2YgZmFsc2UgcG9zaXRpdmVzLlxuICAgICAgICBuYW1lID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIFJlYXNzaWduIGEgZ2VuZXJpYyBuYW1lLlxuICAgICAgaWYgKChkYXRhID0gcHJvZHVjdCB8fCBtYW51ZmFjdHVyZXIgfHwgb3MpICYmXG4gICAgICAgICAgKHByb2R1Y3QgfHwgbWFudWZhY3R1cmVyIHx8IC9cXGIoPzpBbmRyb2lkfFN5bWJpYW4gT1N8VGFibGV0IE9TfHdlYk9TKVxcYi8udGVzdChvcykpKSB7XG4gICAgICAgIG5hbWUgPSAvW2Etel0rKD86IEhhdCk/L2kuZXhlYygvXFxiQW5kcm9pZFxcYi8udGVzdChvcykgPyBvcyA6IGRhdGEpICsgJyBCcm93c2VyJztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQWRkIENocm9tZSB2ZXJzaW9uIHRvIGRlc2NyaXB0aW9uIGZvciBFbGVjdHJvbi5cbiAgICBlbHNlIGlmIChuYW1lID09ICdFbGVjdHJvbicgJiYgKGRhdGEgPSAoL1xcYkNocm9tZVxcLyhbXFxkLl0rKVxcYi8uZXhlYyh1YSkgfHwgMClbMV0pKSB7XG4gICAgICBkZXNjcmlwdGlvbi5wdXNoKCdDaHJvbWl1bSAnICsgZGF0YSk7XG4gICAgfVxuICAgIC8vIERldGVjdCBub24tT3BlcmEgKFByZXN0by1iYXNlZCkgdmVyc2lvbnMgKG9yZGVyIGlzIGltcG9ydGFudCkuXG4gICAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgICB2ZXJzaW9uID0gZ2V0VmVyc2lvbihbXG4gICAgICAgICcoPzpDbG91ZDl8Q3JpT1N8Q3JNb3xFZGdlfEZ4aU9TfElFTW9iaWxlfElyb258T3BlcmEgP01pbml8T1BpT1N8T1BSfFJhdmVufFNhbXN1bmdCcm93c2VyfFNpbGsoPyEvW1xcXFxkLl0rJCkpJyxcbiAgICAgICAgJ1ZlcnNpb24nLFxuICAgICAgICBxdWFsaWZ5KG5hbWUpLFxuICAgICAgICAnKD86RmlyZWZveHxNaW5lZmllbGR8TmV0RnJvbnQpJ1xuICAgICAgXSk7XG4gICAgfVxuICAgIC8vIERldGVjdCBzdHViYm9ybiBsYXlvdXQgZW5naW5lcy5cbiAgICBpZiAoKGRhdGEgPVxuICAgICAgICAgIGxheW91dCA9PSAnaUNhYicgJiYgcGFyc2VGbG9hdCh2ZXJzaW9uKSA+IDMgJiYgJ1dlYktpdCcgfHxcbiAgICAgICAgICAvXFxiT3BlcmFcXGIvLnRlc3QobmFtZSkgJiYgKC9cXGJPUFJcXGIvLnRlc3QodWEpID8gJ0JsaW5rJyA6ICdQcmVzdG8nKSB8fFxuICAgICAgICAgIC9cXGIoPzpNaWRvcml8Tm9va3xTYWZhcmkpXFxiL2kudGVzdCh1YSkgJiYgIS9eKD86VHJpZGVudHxFZGdlSFRNTCkkLy50ZXN0KGxheW91dCkgJiYgJ1dlYktpdCcgfHxcbiAgICAgICAgICAhbGF5b3V0ICYmIC9cXGJNU0lFXFxiL2kudGVzdCh1YSkgJiYgKG9zID09ICdNYWMgT1MnID8gJ1Rhc21hbicgOiAnVHJpZGVudCcpIHx8XG4gICAgICAgICAgbGF5b3V0ID09ICdXZWJLaXQnICYmIC9cXGJQbGF5U3RhdGlvblxcYig/ISBWaXRhXFxiKS9pLnRlc3QobmFtZSkgJiYgJ05ldEZyb250J1xuICAgICAgICApKSB7XG4gICAgICBsYXlvdXQgPSBbZGF0YV07XG4gICAgfVxuICAgIC8vIERldGVjdCBXaW5kb3dzIFBob25lIDcgZGVza3RvcCBtb2RlLlxuICAgIGlmIChuYW1lID09ICdJRScgJiYgKGRhdGEgPSAoLzsgKig/OlhCTFdQfFp1bmVXUCkoXFxkKykvaS5leGVjKHVhKSB8fCAwKVsxXSkpIHtcbiAgICAgIG5hbWUgKz0gJyBNb2JpbGUnO1xuICAgICAgb3MgPSAnV2luZG93cyBQaG9uZSAnICsgKC9cXCskLy50ZXN0KGRhdGEpID8gZGF0YSA6IGRhdGEgKyAnLngnKTtcbiAgICAgIGRlc2NyaXB0aW9uLnVuc2hpZnQoJ2Rlc2t0b3AgbW9kZScpO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgV2luZG93cyBQaG9uZSA4LnggZGVza3RvcCBtb2RlLlxuICAgIGVsc2UgaWYgKC9cXGJXUERlc2t0b3BcXGIvaS50ZXN0KHVhKSkge1xuICAgICAgbmFtZSA9ICdJRSBNb2JpbGUnO1xuICAgICAgb3MgPSAnV2luZG93cyBQaG9uZSA4LngnO1xuICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnZGVza3RvcCBtb2RlJyk7XG4gICAgICB2ZXJzaW9uIHx8ICh2ZXJzaW9uID0gKC9cXGJydjooW1xcZC5dKykvLmV4ZWModWEpIHx8IDApWzFdKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IElFIDExIGlkZW50aWZ5aW5nIGFzIG90aGVyIGJyb3dzZXJzLlxuICAgIGVsc2UgaWYgKG5hbWUgIT0gJ0lFJyAmJiBsYXlvdXQgPT0gJ1RyaWRlbnQnICYmIChkYXRhID0gL1xcYnJ2OihbXFxkLl0rKS8uZXhlYyh1YSkpKSB7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCdpZGVudGlmeWluZyBhcyAnICsgbmFtZSArICh2ZXJzaW9uID8gJyAnICsgdmVyc2lvbiA6ICcnKSk7XG4gICAgICB9XG4gICAgICBuYW1lID0gJ0lFJztcbiAgICAgIHZlcnNpb24gPSBkYXRhWzFdO1xuICAgIH1cbiAgICAvLyBMZXZlcmFnZSBlbnZpcm9ubWVudCBmZWF0dXJlcy5cbiAgICBpZiAodXNlRmVhdHVyZXMpIHtcbiAgICAgIC8vIERldGVjdCBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudHMuXG4gICAgICAvLyBSaGlubyBoYXMgYSBnbG9iYWwgZnVuY3Rpb24gd2hpbGUgb3RoZXJzIGhhdmUgYSBnbG9iYWwgb2JqZWN0LlxuICAgICAgaWYgKGlzSG9zdFR5cGUoY29udGV4dCwgJ2dsb2JhbCcpKSB7XG4gICAgICAgIGlmIChqYXZhKSB7XG4gICAgICAgICAgZGF0YSA9IGphdmEubGFuZy5TeXN0ZW07XG4gICAgICAgICAgYXJjaCA9IGRhdGEuZ2V0UHJvcGVydHkoJ29zLmFyY2gnKTtcbiAgICAgICAgICBvcyA9IG9zIHx8IGRhdGEuZ2V0UHJvcGVydHkoJ29zLm5hbWUnKSArICcgJyArIGRhdGEuZ2V0UHJvcGVydHkoJ29zLnZlcnNpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmhpbm8pIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmVyc2lvbiA9IGNvbnRleHQucmVxdWlyZSgncmluZ28vZW5naW5lJykudmVyc2lvbi5qb2luKCcuJyk7XG4gICAgICAgICAgICBuYW1lID0gJ1JpbmdvSlMnO1xuICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgaWYgKChkYXRhID0gY29udGV4dC5zeXN0ZW0pICYmIGRhdGEuZ2xvYmFsLnN5c3RlbSA9PSBjb250ZXh0LnN5c3RlbSkge1xuICAgICAgICAgICAgICBuYW1lID0gJ05hcndoYWwnO1xuICAgICAgICAgICAgICBvcyB8fCAob3MgPSBkYXRhWzBdLm9zIHx8IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSAnUmhpbm8nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChcbiAgICAgICAgICB0eXBlb2YgY29udGV4dC5wcm9jZXNzID09ICdvYmplY3QnICYmICFjb250ZXh0LnByb2Nlc3MuYnJvd3NlciAmJlxuICAgICAgICAgIChkYXRhID0gY29udGV4dC5wcm9jZXNzKVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRhdGEudmVyc2lvbnMgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS52ZXJzaW9ucy5lbGVjdHJvbiA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5wdXNoKCdOb2RlICcgKyBkYXRhLnZlcnNpb25zLm5vZGUpO1xuICAgICAgICAgICAgICBuYW1lID0gJ0VsZWN0cm9uJztcbiAgICAgICAgICAgICAgdmVyc2lvbiA9IGRhdGEudmVyc2lvbnMuZWxlY3Ryb247XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhLnZlcnNpb25zLm53ID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnB1c2goJ0Nocm9taXVtICcgKyB2ZXJzaW9uLCAnTm9kZSAnICsgZGF0YS52ZXJzaW9ucy5ub2RlKTtcbiAgICAgICAgICAgICAgbmFtZSA9ICdOVy5qcyc7XG4gICAgICAgICAgICAgIHZlcnNpb24gPSBkYXRhLnZlcnNpb25zLm53O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIG5hbWUgPSAnTm9kZS5qcyc7XG4gICAgICAgICAgICBhcmNoID0gZGF0YS5hcmNoO1xuICAgICAgICAgICAgb3MgPSBkYXRhLnBsYXRmb3JtO1xuICAgICAgICAgICAgdmVyc2lvbiA9IC9bXFxkLl0rLy5leGVjKGRhdGEudmVyc2lvbik7XG4gICAgICAgICAgICB2ZXJzaW9uID0gdmVyc2lvbiA/IHZlcnNpb25bMF0gOiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRGV0ZWN0IEFkb2JlIEFJUi5cbiAgICAgIGVsc2UgaWYgKGdldENsYXNzT2YoKGRhdGEgPSBjb250ZXh0LnJ1bnRpbWUpKSA9PSBhaXJSdW50aW1lQ2xhc3MpIHtcbiAgICAgICAgbmFtZSA9ICdBZG9iZSBBSVInO1xuICAgICAgICBvcyA9IGRhdGEuZmxhc2guc3lzdGVtLkNhcGFiaWxpdGllcy5vcztcbiAgICAgIH1cbiAgICAgIC8vIERldGVjdCBQaGFudG9tSlMuXG4gICAgICBlbHNlIGlmIChnZXRDbGFzc09mKChkYXRhID0gY29udGV4dC5waGFudG9tKSkgPT0gcGhhbnRvbUNsYXNzKSB7XG4gICAgICAgIG5hbWUgPSAnUGhhbnRvbUpTJztcbiAgICAgICAgdmVyc2lvbiA9IChkYXRhID0gZGF0YS52ZXJzaW9uIHx8IG51bGwpICYmIChkYXRhLm1ham9yICsgJy4nICsgZGF0YS5taW5vciArICcuJyArIGRhdGEucGF0Y2gpO1xuICAgICAgfVxuICAgICAgLy8gRGV0ZWN0IElFIGNvbXBhdGliaWxpdHkgbW9kZXMuXG4gICAgICBlbHNlIGlmICh0eXBlb2YgZG9jLmRvY3VtZW50TW9kZSA9PSAnbnVtYmVyJyAmJiAoZGF0YSA9IC9cXGJUcmlkZW50XFwvKFxcZCspL2kuZXhlYyh1YSkpKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIGNvbXBhdGliaWxpdHkgbW9kZSB3aGVuIHRoZSBUcmlkZW50IHZlcnNpb24gKyA0IGRvZXNuJ3RcbiAgICAgICAgLy8gZXF1YWwgdGhlIGRvY3VtZW50IG1vZGUuXG4gICAgICAgIHZlcnNpb24gPSBbdmVyc2lvbiwgZG9jLmRvY3VtZW50TW9kZV07XG4gICAgICAgIGlmICgoZGF0YSA9ICtkYXRhWzFdICsgNCkgIT0gdmVyc2lvblsxXSkge1xuICAgICAgICAgIGRlc2NyaXB0aW9uLnB1c2goJ0lFICcgKyB2ZXJzaW9uWzFdICsgJyBtb2RlJyk7XG4gICAgICAgICAgbGF5b3V0ICYmIChsYXlvdXRbMV0gPSAnJyk7XG4gICAgICAgICAgdmVyc2lvblsxXSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgdmVyc2lvbiA9IG5hbWUgPT0gJ0lFJyA/IFN0cmluZyh2ZXJzaW9uWzFdLnRvRml4ZWQoMSkpIDogdmVyc2lvblswXTtcbiAgICAgIH1cbiAgICAgIC8vIERldGVjdCBJRSAxMSBtYXNraW5nIGFzIG90aGVyIGJyb3dzZXJzLlxuICAgICAgZWxzZSBpZiAodHlwZW9mIGRvYy5kb2N1bWVudE1vZGUgPT0gJ251bWJlcicgJiYgL14oPzpDaHJvbWV8RmlyZWZveClcXGIvLnRlc3QobmFtZSkpIHtcbiAgICAgICAgZGVzY3JpcHRpb24ucHVzaCgnbWFza2luZyBhcyAnICsgbmFtZSArICcgJyArIHZlcnNpb24pO1xuICAgICAgICBuYW1lID0gJ0lFJztcbiAgICAgICAgdmVyc2lvbiA9ICcxMS4wJztcbiAgICAgICAgbGF5b3V0ID0gWydUcmlkZW50J107XG4gICAgICAgIG9zID0gJ1dpbmRvd3MnO1xuICAgICAgfVxuICAgICAgb3MgPSBvcyAmJiBmb3JtYXQob3MpO1xuICAgIH1cbiAgICAvLyBEZXRlY3QgcHJlcmVsZWFzZSBwaGFzZXMuXG4gICAgaWYgKHZlcnNpb24gJiYgKGRhdGEgPVxuICAgICAgICAgIC8oPzpbYWJdfGRwfHByZXxbYWJdXFxkK3ByZSkoPzpcXGQrXFwrPyk/JC9pLmV4ZWModmVyc2lvbikgfHxcbiAgICAgICAgICAvKD86YWxwaGF8YmV0YSkoPzogP1xcZCk/L2kuZXhlYyh1YSArICc7JyArICh1c2VGZWF0dXJlcyAmJiBuYXYuYXBwTWlub3JWZXJzaW9uKSkgfHxcbiAgICAgICAgICAvXFxiTWluZWZpZWxkXFxiL2kudGVzdCh1YSkgJiYgJ2EnXG4gICAgICAgICkpIHtcbiAgICAgIHByZXJlbGVhc2UgPSAvYi9pLnRlc3QoZGF0YSkgPyAnYmV0YScgOiAnYWxwaGEnO1xuICAgICAgdmVyc2lvbiA9IHZlcnNpb24ucmVwbGFjZShSZWdFeHAoZGF0YSArICdcXFxcKz8kJyksICcnKSArXG4gICAgICAgIChwcmVyZWxlYXNlID09ICdiZXRhJyA/IGJldGEgOiBhbHBoYSkgKyAoL1xcZCtcXCs/Ly5leGVjKGRhdGEpIHx8ICcnKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IEZpcmVmb3ggTW9iaWxlLlxuICAgIGlmIChuYW1lID09ICdGZW5uZWMnIHx8IG5hbWUgPT0gJ0ZpcmVmb3gnICYmIC9cXGIoPzpBbmRyb2lkfEZpcmVmb3ggT1MpXFxiLy50ZXN0KG9zKSkge1xuICAgICAgbmFtZSA9ICdGaXJlZm94IE1vYmlsZSc7XG4gICAgfVxuICAgIC8vIE9ic2N1cmUgTWF4dGhvbidzIHVucmVsaWFibGUgdmVyc2lvbi5cbiAgICBlbHNlIGlmIChuYW1lID09ICdNYXh0aG9uJyAmJiB2ZXJzaW9uKSB7XG4gICAgICB2ZXJzaW9uID0gdmVyc2lvbi5yZXBsYWNlKC9cXC5bXFxkLl0rLywgJy54Jyk7XG4gICAgfVxuICAgIC8vIERldGVjdCBYYm94IDM2MCBhbmQgWGJveCBPbmUuXG4gICAgZWxzZSBpZiAoL1xcYlhib3hcXGIvaS50ZXN0KHByb2R1Y3QpKSB7XG4gICAgICBpZiAocHJvZHVjdCA9PSAnWGJveCAzNjAnKSB7XG4gICAgICAgIG9zID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9kdWN0ID09ICdYYm94IDM2MCcgJiYgL1xcYklFTW9iaWxlXFxiLy50ZXN0KHVhKSkge1xuICAgICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdtb2JpbGUgbW9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGQgbW9iaWxlIHBvc3RmaXguXG4gICAgZWxzZSBpZiAoKC9eKD86Q2hyb21lfElFfE9wZXJhKSQvLnRlc3QobmFtZSkgfHwgbmFtZSAmJiAhcHJvZHVjdCAmJiAhL0Jyb3dzZXJ8TW9iaS8udGVzdChuYW1lKSkgJiZcbiAgICAgICAgKG9zID09ICdXaW5kb3dzIENFJyB8fCAvTW9iaS9pLnRlc3QodWEpKSkge1xuICAgICAgbmFtZSArPSAnIE1vYmlsZSc7XG4gICAgfVxuICAgIC8vIERldGVjdCBJRSBwbGF0Zm9ybSBwcmV2aWV3LlxuICAgIGVsc2UgaWYgKG5hbWUgPT0gJ0lFJyAmJiB1c2VGZWF0dXJlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGNvbnRleHQuZXh0ZXJuYWwgPT09IG51bGwpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdwbGF0Zm9ybSBwcmV2aWV3Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdlbWJlZGRlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBEZXRlY3QgQmxhY2tCZXJyeSBPUyB2ZXJzaW9uLlxuICAgIC8vIGh0dHA6Ly9kb2NzLmJsYWNrYmVycnkuY29tL2VuL2RldmVsb3BlcnMvZGVsaXZlcmFibGVzLzE4MTY5L0hUVFBfaGVhZGVyc19zZW50X2J5X0JCX0Jyb3dzZXJfMTIzNDkxMV8xMS5qc3BcbiAgICBlbHNlIGlmICgoL1xcYkJsYWNrQmVycnlcXGIvLnRlc3QocHJvZHVjdCkgfHwgL1xcYkJCMTBcXGIvLnRlc3QodWEpKSAmJiAoZGF0YSA9XG4gICAgICAgICAgKFJlZ0V4cChwcm9kdWN0LnJlcGxhY2UoLyArL2csICcgKicpICsgJy8oWy5cXFxcZF0rKScsICdpJykuZXhlYyh1YSkgfHwgMClbMV0gfHxcbiAgICAgICAgICB2ZXJzaW9uXG4gICAgICAgICkpIHtcbiAgICAgIGRhdGEgPSBbZGF0YSwgL0JCMTAvLnRlc3QodWEpXTtcbiAgICAgIG9zID0gKGRhdGFbMV0gPyAocHJvZHVjdCA9IG51bGwsIG1hbnVmYWN0dXJlciA9ICdCbGFja0JlcnJ5JykgOiAnRGV2aWNlIFNvZnR3YXJlJykgKyAnICcgKyBkYXRhWzBdO1xuICAgICAgdmVyc2lvbiA9IG51bGw7XG4gICAgfVxuICAgIC8vIERldGVjdCBPcGVyYSBpZGVudGlmeWluZy9tYXNraW5nIGl0c2VsZiBhcyBhbm90aGVyIGJyb3dzZXIuXG4gICAgLy8gaHR0cDovL3d3dy5vcGVyYS5jb20vc3VwcG9ydC9rYi92aWV3Lzg0My9cbiAgICBlbHNlIGlmICh0aGlzICE9IGZvck93biAmJiBwcm9kdWN0ICE9ICdXaWknICYmIChcbiAgICAgICAgICAodXNlRmVhdHVyZXMgJiYgb3BlcmEpIHx8XG4gICAgICAgICAgKC9PcGVyYS8udGVzdChuYW1lKSAmJiAvXFxiKD86TVNJRXxGaXJlZm94KVxcYi9pLnRlc3QodWEpKSB8fFxuICAgICAgICAgIChuYW1lID09ICdGaXJlZm94JyAmJiAvXFxiT1MgWCAoPzpcXGQrXFwuKXsyLH0vLnRlc3Qob3MpKSB8fFxuICAgICAgICAgIChuYW1lID09ICdJRScgJiYgKFxuICAgICAgICAgICAgKG9zICYmICEvXldpbi8udGVzdChvcykgJiYgdmVyc2lvbiA+IDUuNSkgfHxcbiAgICAgICAgICAgIC9cXGJXaW5kb3dzIFhQXFxiLy50ZXN0KG9zKSAmJiB2ZXJzaW9uID4gOCB8fFxuICAgICAgICAgICAgdmVyc2lvbiA9PSA4ICYmICEvXFxiVHJpZGVudFxcYi8udGVzdCh1YSlcbiAgICAgICAgICApKVxuICAgICAgICApICYmICFyZU9wZXJhLnRlc3QoKGRhdGEgPSBwYXJzZS5jYWxsKGZvck93biwgdWEucmVwbGFjZShyZU9wZXJhLCAnJykgKyAnOycpKSkgJiYgZGF0YS5uYW1lKSB7XG4gICAgICAvLyBXaGVuIFwiaWRlbnRpZnlpbmdcIiwgdGhlIFVBIGNvbnRhaW5zIGJvdGggT3BlcmEgYW5kIHRoZSBvdGhlciBicm93c2VyJ3MgbmFtZS5cbiAgICAgIGRhdGEgPSAnaW5nIGFzICcgKyBkYXRhLm5hbWUgKyAoKGRhdGEgPSBkYXRhLnZlcnNpb24pID8gJyAnICsgZGF0YSA6ICcnKTtcbiAgICAgIGlmIChyZU9wZXJhLnRlc3QobmFtZSkpIHtcbiAgICAgICAgaWYgKC9cXGJJRVxcYi8udGVzdChkYXRhKSAmJiBvcyA9PSAnTWFjIE9TJykge1xuICAgICAgICAgIG9zID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhID0gJ2lkZW50aWZ5JyArIGRhdGE7XG4gICAgICB9XG4gICAgICAvLyBXaGVuIFwibWFza2luZ1wiLCB0aGUgVUEgY29udGFpbnMgb25seSB0aGUgb3RoZXIgYnJvd3NlcidzIG5hbWUuXG4gICAgICBlbHNlIHtcbiAgICAgICAgZGF0YSA9ICdtYXNrJyArIGRhdGE7XG4gICAgICAgIGlmIChvcGVyYUNsYXNzKSB7XG4gICAgICAgICAgbmFtZSA9IGZvcm1hdChvcGVyYUNsYXNzLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMSAkMicpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuYW1lID0gJ09wZXJhJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoL1xcYklFXFxiLy50ZXN0KGRhdGEpKSB7XG4gICAgICAgICAgb3MgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdXNlRmVhdHVyZXMpIHtcbiAgICAgICAgICB2ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGF5b3V0ID0gWydQcmVzdG8nXTtcbiAgICAgIGRlc2NyaXB0aW9uLnB1c2goZGF0YSk7XG4gICAgfVxuICAgIC8vIERldGVjdCBXZWJLaXQgTmlnaHRseSBhbmQgYXBwcm94aW1hdGUgQ2hyb21lL1NhZmFyaSB2ZXJzaW9ucy5cbiAgICBpZiAoKGRhdGEgPSAoL1xcYkFwcGxlV2ViS2l0XFwvKFtcXGQuXStcXCs/KS9pLmV4ZWModWEpIHx8IDApWzFdKSkge1xuICAgICAgLy8gQ29ycmVjdCBidWlsZCBudW1iZXIgZm9yIG51bWVyaWMgY29tcGFyaXNvbi5cbiAgICAgIC8vIChlLmcuIFwiNTMyLjVcIiBiZWNvbWVzIFwiNTMyLjA1XCIpXG4gICAgICBkYXRhID0gW3BhcnNlRmxvYXQoZGF0YS5yZXBsYWNlKC9cXC4oXFxkKSQvLCAnLjAkMScpKSwgZGF0YV07XG4gICAgICAvLyBOaWdodGx5IGJ1aWxkcyBhcmUgcG9zdGZpeGVkIHdpdGggYSBcIitcIi5cbiAgICAgIGlmIChuYW1lID09ICdTYWZhcmknICYmIGRhdGFbMV0uc2xpY2UoLTEpID09ICcrJykge1xuICAgICAgICBuYW1lID0gJ1dlYktpdCBOaWdodGx5JztcbiAgICAgICAgcHJlcmVsZWFzZSA9ICdhbHBoYSc7XG4gICAgICAgIHZlcnNpb24gPSBkYXRhWzFdLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cbiAgICAgIC8vIENsZWFyIGluY29ycmVjdCBicm93c2VyIHZlcnNpb25zLlxuICAgICAgZWxzZSBpZiAodmVyc2lvbiA9PSBkYXRhWzFdIHx8XG4gICAgICAgICAgdmVyc2lvbiA9PSAoZGF0YVsyXSA9ICgvXFxiU2FmYXJpXFwvKFtcXGQuXStcXCs/KS9pLmV4ZWModWEpIHx8IDApWzFdKSkge1xuICAgICAgICB2ZXJzaW9uID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIFVzZSB0aGUgZnVsbCBDaHJvbWUgdmVyc2lvbiB3aGVuIGF2YWlsYWJsZS5cbiAgICAgIGRhdGFbMV0gPSAoL1xcYkNocm9tZVxcLyhbXFxkLl0rKS9pLmV4ZWModWEpIHx8IDApWzFdO1xuICAgICAgLy8gRGV0ZWN0IEJsaW5rIGxheW91dCBlbmdpbmUuXG4gICAgICBpZiAoZGF0YVswXSA9PSA1MzcuMzYgJiYgZGF0YVsyXSA9PSA1MzcuMzYgJiYgcGFyc2VGbG9hdChkYXRhWzFdKSA+PSAyOCAmJiBsYXlvdXQgPT0gJ1dlYktpdCcpIHtcbiAgICAgICAgbGF5b3V0ID0gWydCbGluayddO1xuICAgICAgfVxuICAgICAgLy8gRGV0ZWN0IEphdmFTY3JpcHRDb3JlLlxuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82NzY4NDc0L2hvdy1jYW4taS1kZXRlY3Qtd2hpY2gtamF2YXNjcmlwdC1lbmdpbmUtdjgtb3ItanNjLWlzLXVzZWQtYXQtcnVudGltZS1pbi1hbmRyb2lcbiAgICAgIGlmICghdXNlRmVhdHVyZXMgfHwgKCFsaWtlQ2hyb21lICYmICFkYXRhWzFdKSkge1xuICAgICAgICBsYXlvdXQgJiYgKGxheW91dFsxXSA9ICdsaWtlIFNhZmFyaScpO1xuICAgICAgICBkYXRhID0gKGRhdGEgPSBkYXRhWzBdLCBkYXRhIDwgNDAwID8gMSA6IGRhdGEgPCA1MDAgPyAyIDogZGF0YSA8IDUyNiA/IDMgOiBkYXRhIDwgNTMzID8gNCA6IGRhdGEgPCA1MzQgPyAnNCsnIDogZGF0YSA8IDUzNSA/IDUgOiBkYXRhIDwgNTM3ID8gNiA6IGRhdGEgPCA1MzggPyA3IDogZGF0YSA8IDYwMSA/IDggOiAnOCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5b3V0ICYmIChsYXlvdXRbMV0gPSAnbGlrZSBDaHJvbWUnKTtcbiAgICAgICAgZGF0YSA9IGRhdGFbMV0gfHwgKGRhdGEgPSBkYXRhWzBdLCBkYXRhIDwgNTMwID8gMSA6IGRhdGEgPCA1MzIgPyAyIDogZGF0YSA8IDUzMi4wNSA/IDMgOiBkYXRhIDwgNTMzID8gNCA6IGRhdGEgPCA1MzQuMDMgPyA1IDogZGF0YSA8IDUzNC4wNyA/IDYgOiBkYXRhIDwgNTM0LjEwID8gNyA6IGRhdGEgPCA1MzQuMTMgPyA4IDogZGF0YSA8IDUzNC4xNiA/IDkgOiBkYXRhIDwgNTM0LjI0ID8gMTAgOiBkYXRhIDwgNTM0LjMwID8gMTEgOiBkYXRhIDwgNTM1LjAxID8gMTIgOiBkYXRhIDwgNTM1LjAyID8gJzEzKycgOiBkYXRhIDwgNTM1LjA3ID8gMTUgOiBkYXRhIDwgNTM1LjExID8gMTYgOiBkYXRhIDwgNTM1LjE5ID8gMTcgOiBkYXRhIDwgNTM2LjA1ID8gMTggOiBkYXRhIDwgNTM2LjEwID8gMTkgOiBkYXRhIDwgNTM3LjAxID8gMjAgOiBkYXRhIDwgNTM3LjExID8gJzIxKycgOiBkYXRhIDwgNTM3LjEzID8gMjMgOiBkYXRhIDwgNTM3LjE4ID8gMjQgOiBkYXRhIDwgNTM3LjI0ID8gMjUgOiBkYXRhIDwgNTM3LjM2ID8gMjYgOiBsYXlvdXQgIT0gJ0JsaW5rJyA/ICcyNycgOiAnMjgnKTtcbiAgICAgIH1cbiAgICAgIC8vIEFkZCB0aGUgcG9zdGZpeCBvZiBcIi54XCIgb3IgXCIrXCIgZm9yIGFwcHJveGltYXRlIHZlcnNpb25zLlxuICAgICAgbGF5b3V0ICYmIChsYXlvdXRbMV0gKz0gJyAnICsgKGRhdGEgKz0gdHlwZW9mIGRhdGEgPT0gJ251bWJlcicgPyAnLngnIDogL1suK10vLnRlc3QoZGF0YSkgPyAnJyA6ICcrJykpO1xuICAgICAgLy8gT2JzY3VyZSB2ZXJzaW9uIGZvciBzb21lIFNhZmFyaSAxLTIgcmVsZWFzZXMuXG4gICAgICBpZiAobmFtZSA9PSAnU2FmYXJpJyAmJiAoIXZlcnNpb24gfHwgcGFyc2VJbnQodmVyc2lvbikgPiA0NSkpIHtcbiAgICAgICAgdmVyc2lvbiA9IGRhdGE7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIERldGVjdCBPcGVyYSBkZXNrdG9wIG1vZGVzLlxuICAgIGlmIChuYW1lID09ICdPcGVyYScgJiYgIChkYXRhID0gL1xcYnpib3Z8enZhdiQvLmV4ZWMob3MpKSkge1xuICAgICAgbmFtZSArPSAnICc7XG4gICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdkZXNrdG9wIG1vZGUnKTtcbiAgICAgIGlmIChkYXRhID09ICd6dmF2Jykge1xuICAgICAgICBuYW1lICs9ICdNaW5pJztcbiAgICAgICAgdmVyc2lvbiA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYW1lICs9ICdNb2JpbGUnO1xuICAgICAgfVxuICAgICAgb3MgPSBvcy5yZXBsYWNlKFJlZ0V4cCgnIConICsgZGF0YSArICckJyksICcnKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0IENocm9tZSBkZXNrdG9wIG1vZGUuXG4gICAgZWxzZSBpZiAobmFtZSA9PSAnU2FmYXJpJyAmJiAvXFxiQ2hyb21lXFxiLy5leGVjKGxheW91dCAmJiBsYXlvdXRbMV0pKSB7XG4gICAgICBkZXNjcmlwdGlvbi51bnNoaWZ0KCdkZXNrdG9wIG1vZGUnKTtcbiAgICAgIG5hbWUgPSAnQ2hyb21lIE1vYmlsZSc7XG4gICAgICB2ZXJzaW9uID0gbnVsbDtcblxuICAgICAgaWYgKC9cXGJPUyBYXFxiLy50ZXN0KG9zKSkge1xuICAgICAgICBtYW51ZmFjdHVyZXIgPSAnQXBwbGUnO1xuICAgICAgICBvcyA9ICdpT1MgNC4zKyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFN0cmlwIGluY29ycmVjdCBPUyB2ZXJzaW9ucy5cbiAgICBpZiAodmVyc2lvbiAmJiB2ZXJzaW9uLmluZGV4T2YoKGRhdGEgPSAvW1xcZC5dKyQvLmV4ZWMob3MpKSkgPT0gMCAmJlxuICAgICAgICB1YS5pbmRleE9mKCcvJyArIGRhdGEgKyAnLScpID4gLTEpIHtcbiAgICAgIG9zID0gdHJpbShvcy5yZXBsYWNlKGRhdGEsICcnKSk7XG4gICAgfVxuICAgIC8vIEFkZCBsYXlvdXQgZW5naW5lLlxuICAgIGlmIChsYXlvdXQgJiYgIS9cXGIoPzpBdmFudHxOb29rKVxcYi8udGVzdChuYW1lKSAmJiAoXG4gICAgICAgIC9Ccm93c2VyfEx1bmFzY2FwZXxNYXh0aG9uLy50ZXN0KG5hbWUpIHx8XG4gICAgICAgIG5hbWUgIT0gJ1NhZmFyaScgJiYgL15pT1MvLnRlc3Qob3MpICYmIC9cXGJTYWZhcmlcXGIvLnRlc3QobGF5b3V0WzFdKSB8fFxuICAgICAgICAvXig/OkFkb2JlfEFyb3JhfEJyZWFjaHxNaWRvcml8T3BlcmF8UGhhbnRvbXxSZWtvbnF8Um9ja3xTYW1zdW5nIEludGVybmV0fFNsZWlwbmlyfFdlYikvLnRlc3QobmFtZSkgJiYgbGF5b3V0WzFdKSkge1xuICAgICAgLy8gRG9uJ3QgYWRkIGxheW91dCBkZXRhaWxzIHRvIGRlc2NyaXB0aW9uIGlmIHRoZXkgYXJlIGZhbHNleS5cbiAgICAgIChkYXRhID0gbGF5b3V0W2xheW91dC5sZW5ndGggLSAxXSkgJiYgZGVzY3JpcHRpb24ucHVzaChkYXRhKTtcbiAgICB9XG4gICAgLy8gQ29tYmluZSBjb250ZXh0dWFsIGluZm9ybWF0aW9uLlxuICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGgpIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gWycoJyArIGRlc2NyaXB0aW9uLmpvaW4oJzsgJykgKyAnKSddO1xuICAgIH1cbiAgICAvLyBBcHBlbmQgbWFudWZhY3R1cmVyIHRvIGRlc2NyaXB0aW9uLlxuICAgIGlmIChtYW51ZmFjdHVyZXIgJiYgcHJvZHVjdCAmJiBwcm9kdWN0LmluZGV4T2YobWFudWZhY3R1cmVyKSA8IDApIHtcbiAgICAgIGRlc2NyaXB0aW9uLnB1c2goJ29uICcgKyBtYW51ZmFjdHVyZXIpO1xuICAgIH1cbiAgICAvLyBBcHBlbmQgcHJvZHVjdCB0byBkZXNjcmlwdGlvbi5cbiAgICBpZiAocHJvZHVjdCkge1xuICAgICAgZGVzY3JpcHRpb24ucHVzaCgoL15vbiAvLnRlc3QoZGVzY3JpcHRpb25bZGVzY3JpcHRpb24ubGVuZ3RoIC0gMV0pID8gJycgOiAnb24gJykgKyBwcm9kdWN0KTtcbiAgICB9XG4gICAgLy8gUGFyc2UgdGhlIE9TIGludG8gYW4gb2JqZWN0LlxuICAgIGlmIChvcykge1xuICAgICAgZGF0YSA9IC8gKFtcXGQuK10rKSQvLmV4ZWMob3MpO1xuICAgICAgaXNTcGVjaWFsQ2FzZWRPUyA9IGRhdGEgJiYgb3MuY2hhckF0KG9zLmxlbmd0aCAtIGRhdGFbMF0ubGVuZ3RoIC0gMSkgPT0gJy8nO1xuICAgICAgb3MgPSB7XG4gICAgICAgICdhcmNoaXRlY3R1cmUnOiAzMixcbiAgICAgICAgJ2ZhbWlseSc6IChkYXRhICYmICFpc1NwZWNpYWxDYXNlZE9TKSA/IG9zLnJlcGxhY2UoZGF0YVswXSwgJycpIDogb3MsXG4gICAgICAgICd2ZXJzaW9uJzogZGF0YSA/IGRhdGFbMV0gOiBudWxsLFxuICAgICAgICAndG9TdHJpbmcnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdmVyc2lvbiA9IHRoaXMudmVyc2lvbjtcbiAgICAgICAgICByZXR1cm4gdGhpcy5mYW1pbHkgKyAoKHZlcnNpb24gJiYgIWlzU3BlY2lhbENhc2VkT1MpID8gJyAnICsgdmVyc2lvbiA6ICcnKSArICh0aGlzLmFyY2hpdGVjdHVyZSA9PSA2NCA/ICcgNjQtYml0JyA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gQWRkIGJyb3dzZXIvT1MgYXJjaGl0ZWN0dXJlLlxuICAgIGlmICgoZGF0YSA9IC9cXGIoPzpBTUR8SUF8V2lufFdPV3x4ODZffHgpNjRcXGIvaS5leGVjKGFyY2gpKSAmJiAhL1xcYmk2ODZcXGIvaS50ZXN0KGFyY2gpKSB7XG4gICAgICBpZiAob3MpIHtcbiAgICAgICAgb3MuYXJjaGl0ZWN0dXJlID0gNjQ7XG4gICAgICAgIG9zLmZhbWlseSA9IG9zLmZhbWlseS5yZXBsYWNlKFJlZ0V4cCgnIConICsgZGF0YSksICcnKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgICBuYW1lICYmICgvXFxiV09XNjRcXGIvaS50ZXN0KHVhKSB8fFxuICAgICAgICAgICh1c2VGZWF0dXJlcyAmJiAvXFx3KD86ODZ8MzIpJC8udGVzdChuYXYuY3B1Q2xhc3MgfHwgbmF2LnBsYXRmb3JtKSAmJiAhL1xcYldpbjY0OyB4NjRcXGIvaS50ZXN0KHVhKSkpXG4gICAgICApIHtcbiAgICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCgnMzItYml0Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIENocm9tZSAzOSBhbmQgYWJvdmUgb24gT1MgWCBpcyBhbHdheXMgNjQtYml0LlxuICAgIGVsc2UgaWYgKFxuICAgICAgICBvcyAmJiAvXk9TIFgvLnRlc3Qob3MuZmFtaWx5KSAmJlxuICAgICAgICBuYW1lID09ICdDaHJvbWUnICYmIHBhcnNlRmxvYXQodmVyc2lvbikgPj0gMzlcbiAgICApIHtcbiAgICAgIG9zLmFyY2hpdGVjdHVyZSA9IDY0O1xuICAgIH1cblxuICAgIHVhIHx8ICh1YSA9IG51bGwpO1xuXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYXRmb3JtIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBuYW1lIHBsYXRmb3JtXG4gICAgICogQHR5cGUgT2JqZWN0XG4gICAgICovXG4gICAgdmFyIHBsYXRmb3JtID0ge307XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGxhdGZvcm0gZGVzY3JpcHRpb24uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAdHlwZSBzdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHBsYXRmb3JtLmRlc2NyaXB0aW9uID0gdWE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgYnJvd3NlcidzIGxheW91dCBlbmdpbmUuXG4gICAgICpcbiAgICAgKiBUaGUgbGlzdCBvZiBjb21tb24gbGF5b3V0IGVuZ2luZXMgaW5jbHVkZTpcbiAgICAgKiBcIkJsaW5rXCIsIFwiRWRnZUhUTUxcIiwgXCJHZWNrb1wiLCBcIlRyaWRlbnRcIiBhbmQgXCJXZWJLaXRcIlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS5sYXlvdXQgPSBsYXlvdXQgJiYgbGF5b3V0WzBdO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHByb2R1Y3QncyBtYW51ZmFjdHVyZXIuXG4gICAgICpcbiAgICAgKiBUaGUgbGlzdCBvZiBtYW51ZmFjdHVyZXJzIGluY2x1ZGU6XG4gICAgICogXCJBcHBsZVwiLCBcIkFyY2hvc1wiLCBcIkFtYXpvblwiLCBcIkFzdXNcIiwgXCJCYXJuZXMgJiBOb2JsZVwiLCBcIkJsYWNrQmVycnlcIixcbiAgICAgKiBcIkdvb2dsZVwiLCBcIkhQXCIsIFwiSFRDXCIsIFwiTEdcIiwgXCJNaWNyb3NvZnRcIiwgXCJNb3Rvcm9sYVwiLCBcIk5pbnRlbmRvXCIsXG4gICAgICogXCJOb2tpYVwiLCBcIlNhbXN1bmdcIiBhbmQgXCJTb255XCJcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBwbGF0Zm9ybVxuICAgICAqIEB0eXBlIHN0cmluZ3xudWxsXG4gICAgICovXG4gICAgcGxhdGZvcm0ubWFudWZhY3R1cmVyID0gbWFudWZhY3R1cmVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGJyb3dzZXIvZW52aXJvbm1lbnQuXG4gICAgICpcbiAgICAgKiBUaGUgbGlzdCBvZiBjb21tb24gYnJvd3NlciBuYW1lcyBpbmNsdWRlOlxuICAgICAqIFwiQ2hyb21lXCIsIFwiRWxlY3Ryb25cIiwgXCJGaXJlZm94XCIsIFwiRmlyZWZveCBmb3IgaU9TXCIsIFwiSUVcIixcbiAgICAgKiBcIk1pY3Jvc29mdCBFZGdlXCIsIFwiUGhhbnRvbUpTXCIsIFwiU2FmYXJpXCIsIFwiU2VhTW9ua2V5XCIsIFwiU2lsa1wiLFxuICAgICAqIFwiT3BlcmEgTWluaVwiIGFuZCBcIk9wZXJhXCJcbiAgICAgKlxuICAgICAqIE1vYmlsZSB2ZXJzaW9ucyBvZiBzb21lIGJyb3dzZXJzIGhhdmUgXCJNb2JpbGVcIiBhcHBlbmRlZCB0byB0aGVpciBuYW1lOlxuICAgICAqIGVnLiBcIkNocm9tZSBNb2JpbGVcIiwgXCJGaXJlZm94IE1vYmlsZVwiLCBcIklFIE1vYmlsZVwiIGFuZCBcIk9wZXJhIE1vYmlsZVwiXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAdHlwZSBzdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHBsYXRmb3JtLm5hbWUgPSBuYW1lO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFscGhhL2JldGEgcmVsZWFzZSBpbmRpY2F0b3IuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAdHlwZSBzdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHBsYXRmb3JtLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHByb2R1Y3QgaG9zdGluZyB0aGUgYnJvd3Nlci5cbiAgICAgKlxuICAgICAqIFRoZSBsaXN0IG9mIGNvbW1vbiBwcm9kdWN0cyBpbmNsdWRlOlxuICAgICAqXG4gICAgICogXCJCbGFja0JlcnJ5XCIsIFwiR2FsYXh5IFM0XCIsIFwiTHVtaWFcIiwgXCJpUGFkXCIsIFwiaVBvZFwiLCBcImlQaG9uZVwiLCBcIktpbmRsZVwiLFxuICAgICAqIFwiS2luZGxlIEZpcmVcIiwgXCJOZXh1c1wiLCBcIk5vb2tcIiwgXCJQbGF5Qm9va1wiLCBcIlRvdWNoUGFkXCIgYW5kIFwiVHJhbnNmb3JtZXJcIlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS5wcm9kdWN0ID0gcHJvZHVjdDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBicm93c2VyJ3MgdXNlciBhZ2VudCBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAdHlwZSBzdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIHBsYXRmb3JtLnVhID0gdWE7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYnJvd3Nlci9lbnZpcm9ubWVudCB2ZXJzaW9uLlxuICAgICAqXG4gICAgICogQG1lbWJlck9mIHBsYXRmb3JtXG4gICAgICogQHR5cGUgc3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS52ZXJzaW9uID0gbmFtZSAmJiB2ZXJzaW9uO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIG9wZXJhdGluZyBzeXN0ZW0uXG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgcGxhdGZvcm1cbiAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgKi9cbiAgICBwbGF0Zm9ybS5vcyA9IG9zIHx8IHtcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgQ1BVIGFyY2hpdGVjdHVyZSB0aGUgT1MgaXMgYnVpbHQgZm9yLlxuICAgICAgICpcbiAgICAgICAqIEBtZW1iZXJPZiBwbGF0Zm9ybS5vc1xuICAgICAgICogQHR5cGUgbnVtYmVyfG51bGxcbiAgICAgICAqL1xuICAgICAgJ2FyY2hpdGVjdHVyZSc6IG51bGwsXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGZhbWlseSBvZiB0aGUgT1MuXG4gICAgICAgKlxuICAgICAgICogQ29tbW9uIHZhbHVlcyBpbmNsdWRlOlxuICAgICAgICogXCJXaW5kb3dzXCIsIFwiV2luZG93cyBTZXJ2ZXIgMjAwOCBSMiAvIDdcIiwgXCJXaW5kb3dzIFNlcnZlciAyMDA4IC8gVmlzdGFcIixcbiAgICAgICAqIFwiV2luZG93cyBYUFwiLCBcIk9TIFhcIiwgXCJVYnVudHVcIiwgXCJEZWJpYW5cIiwgXCJGZWRvcmFcIiwgXCJSZWQgSGF0XCIsIFwiU3VTRVwiLFxuICAgICAgICogXCJBbmRyb2lkXCIsIFwiaU9TXCIgYW5kIFwiV2luZG93cyBQaG9uZVwiXG4gICAgICAgKlxuICAgICAgICogQG1lbWJlck9mIHBsYXRmb3JtLm9zXG4gICAgICAgKiBAdHlwZSBzdHJpbmd8bnVsbFxuICAgICAgICovXG4gICAgICAnZmFtaWx5JzogbnVsbCxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdmVyc2lvbiBvZiB0aGUgT1MuXG4gICAgICAgKlxuICAgICAgICogQG1lbWJlck9mIHBsYXRmb3JtLm9zXG4gICAgICAgKiBAdHlwZSBzdHJpbmd8bnVsbFxuICAgICAgICovXG4gICAgICAndmVyc2lvbic6IG51bGwsXG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0aGUgT1Mgc3RyaW5nLlxuICAgICAgICpcbiAgICAgICAqIEBtZW1iZXJPZiBwbGF0Zm9ybS5vc1xuICAgICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIE9TIHN0cmluZy5cbiAgICAgICAqL1xuICAgICAgJ3RvU3RyaW5nJzogZnVuY3Rpb24oKSB7IHJldHVybiAnbnVsbCc7IH1cbiAgICB9O1xuXG4gICAgcGxhdGZvcm0ucGFyc2UgPSBwYXJzZTtcbiAgICBwbGF0Zm9ybS50b1N0cmluZyA9IHRvU3RyaW5nUGxhdGZvcm07XG5cbiAgICBpZiAocGxhdGZvcm0udmVyc2lvbikge1xuICAgICAgZGVzY3JpcHRpb24udW5zaGlmdCh2ZXJzaW9uKTtcbiAgICB9XG4gICAgaWYgKHBsYXRmb3JtLm5hbWUpIHtcbiAgICAgIGRlc2NyaXB0aW9uLnVuc2hpZnQobmFtZSk7XG4gICAgfVxuICAgIGlmIChvcyAmJiBuYW1lICYmICEob3MgPT0gU3RyaW5nKG9zKS5zcGxpdCgnICcpWzBdICYmIChvcyA9PSBuYW1lLnNwbGl0KCcgJylbMF0gfHwgcHJvZHVjdCkpKSB7XG4gICAgICBkZXNjcmlwdGlvbi5wdXNoKHByb2R1Y3QgPyAnKCcgKyBvcyArICcpJyA6ICdvbiAnICsgb3MpO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRpb24ubGVuZ3RoKSB7XG4gICAgICBwbGF0Zm9ybS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLmpvaW4oJyAnKTtcbiAgICB9XG4gICAgcmV0dXJuIHBsYXRmb3JtO1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLy8gRXhwb3J0IHBsYXRmb3JtLlxuICB2YXIgcGxhdGZvcm0gPSBwYXJzZSgpO1xuXG4gIC8vIFNvbWUgQU1EIGJ1aWxkIG9wdGltaXplcnMsIGxpa2Ugci5qcywgY2hlY2sgZm9yIGNvbmRpdGlvbiBwYXR0ZXJucyBsaWtlIHRoZSBmb2xsb3dpbmc6XG4gIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEV4cG9zZSBwbGF0Zm9ybSBvbiB0aGUgZ2xvYmFsIG9iamVjdCB0byBwcmV2ZW50IGVycm9ycyB3aGVuIHBsYXRmb3JtIGlzXG4gICAgLy8gbG9hZGVkIGJ5IGEgc2NyaXB0IHRhZyBpbiB0aGUgcHJlc2VuY2Ugb2YgYW4gQU1EIGxvYWRlci5cbiAgICAvLyBTZWUgaHR0cDovL3JlcXVpcmVqcy5vcmcvZG9jcy9lcnJvcnMuaHRtbCNtaXNtYXRjaCBmb3IgbW9yZSBkZXRhaWxzLlxuICAgIHJvb3QucGxhdGZvcm0gPSBwbGF0Zm9ybTtcblxuICAgIC8vIERlZmluZSBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHNvIHBsYXRmb3JtIGNhbiBiZSBhbGlhc2VkIHRocm91Z2ggcGF0aCBtYXBwaW5nLlxuICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBwbGF0Zm9ybTtcbiAgICB9KTtcbiAgfVxuICAvLyBDaGVjayBmb3IgYGV4cG9ydHNgIGFmdGVyIGBkZWZpbmVgIGluIGNhc2UgYSBidWlsZCBvcHRpbWl6ZXIgYWRkcyBhbiBgZXhwb3J0c2Agb2JqZWN0LlxuICBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG4gICAgLy8gRXhwb3J0IGZvciBDb21tb25KUyBzdXBwb3J0LlxuICAgIGZvck93bihwbGF0Zm9ybSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgZnJlZUV4cG9ydHNba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIEV4cG9ydCB0byB0aGUgZ2xvYmFsIG9iamVjdC5cbiAgICByb290LnBsYXRmb3JtID0gcGxhdGZvcm07XG4gIH1cbn0uY2FsbCh0aGlzKSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHBsYXRmb3JtIGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ3Byb2Nlc3MnO1xuXG5jb25zdCBQbGF0Zm9ybU1hcHBpbmcgPSAobmFtZSk9PntcbiAgICBpZihuYW1lID09PSAnTm9kZS5qcycpe1xuICAgICAgICByZXR1cm4gJ25vZGUnO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gJ3dlYic7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm17XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xuICAgIH1cbiAgICBzdGF0aWMgUElEKCl7XG4gICAgICAgIGlmKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MucGlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjdXJyZW50UGxhdGZvcm0oKXtcbiAgICAgICAgcmV0dXJuIHBsYXRmb3JtLnBhcnNlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1peFdpdGgoQmFzZUNsYXNzLCBtaXhpbnMpe1xuICAgICAgICB2YXIgbWl4aW5zTGlzdCA9IFtdO1xuICAgICAgICBpZihBcnJheS5pc0FycmF5KG1peGlucykpe1xuICAgICAgICAgICAgbWl4aW5zTGlzdCA9IG1peGlucztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc3QgUGZOYW1lID0gUGxhdGZvcm1NYXBwaW5nKHBsYXRmb3JtLnBhcnNlKClbJ25hbWUnXSk7XG4gICAgICAgICAgICBtaXhpbnNMaXN0ID0gbWl4aW5zW1BmTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgaWYobWl4aW5zTGlzdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGAke1BmTmFtZX0gbm90IGZvdW5kIGluIG1peGluc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaXhpbnNMaXN0LnJlZHVjZSgoYywgbWl4aW4pID0+IG1peGluKGMpLCBCYXNlQ2xhc3MpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=