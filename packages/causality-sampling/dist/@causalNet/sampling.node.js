!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("causal-net.core"),require("causal-net.utils"),require("random")):"function"==typeof define&&define.amd?define(["causal-net.core","causal-net.utils","random"],t):"object"==typeof exports?exports["@causalNet/sampling"]=t(require("causal-net.core"),require("causal-net.utils"),require("random")):e["@causalNet/sampling"]=t(e["causal-net.core"],e["causal-net.utils"],e.random)}(this,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}([function(e,t,n){"use strict";const r=n(2),u={number:n(7),string:n(8),object:n(9)},o=({validators:e=[],predicates:t=u,type:n=null}={})=>{const i=new Proxy(function(){},{get:(u,a)=>{if(a===r.validate)return(t,r="argument")=>{if(!n)return new Error("missing required type specifier");for(let u=0;u<e.length;++u){const o=e[u];if(!o.fn(t))throw 0===u?new Error(`Expected ${r} \`${t}\` to be of type \`${n}\`, but received type \`${typeof t}\``):new Error(`Expected ${n} \`${r}\` \`${t}\` failed predicate \`${o.key}\``)}};const l=t[a];if(l)return"function"==typeof l?(e.push({key:a,fn:l}),i):o({type:a,validators:[{key:a,fn:l.validator}],predicates:l.predicates});{const n=t[r.func]&&t[r.func][a];return n?new Proxy(function(){},{get:()=>{throw new Error(`invalid use of functional predicate "${a}"`)},apply:(t,r,u)=>(e.push({key:a,fn:n(...u)}),i)}):i}},apply:(e,t,n)=>{if(2!==n.length&&3!==n.length)throw new Error('invalid number of arguments to "ow"');n[1][r.validate](n[0],n[2])}});return i};e.exports=o()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"next",value:function(){throw new Error("RNG.next must be overridden")}},{key:"seed",value:function(e,t){throw new Error("RNG.seed must be overridden")}},{key:"clone",value:function(e,t){throw new Error("RNG.clone must be overridden")}},{key:"_seed",value:function(e,t){if(e===(0|e))return e;for(var n=""+e,r=0,u=0;u<n.length;++u)r^=0|n.charCodeAt(u);return r}},{key:"name",get:function(){throw new Error("RNG.name must be overridden")}}]),e}();t.default=u},function(e,t,n){"use strict";t.func=Symbol("func"),t.validate=Symbol("validate")},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=_(n(0)),o=_(n(1)),i=_(n(10)),a=_(n(14)),l=_(n(15)),f=_(n(16)),c=_(n(17)),s=_(n(18)),d=_(n(19)),p=_(n(20)),v=_(n(21)),y=_(n(22)),h=_(n(23)),b=_(n(24)),m=_(n(25)),g=_(n(26));function _(e){return e&&e.__esModule?e:{default:e}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t&&(0,u.default)(t,u.default.object.instanceOf(o.default)),this._cache={},this.use(t)}return r(e,[{key:"clone",value:function(){var t;return new e((t=this.rng).clone.apply(t,arguments))}},{key:"use",value:function(){this._rng=i.default.apply(void 0,arguments)}},{key:"patch",value:function(){if(this._patch)throw new Error("Math.random already patched");this._patch=Math.random,Math.random=this.uniform()}},{key:"unpatch",value:function(){this._patch&&(Math.random=this._patch,delete this._patch)}},{key:"next",value:function(){return this._rng.next()}},{key:"float",value:function(e,t){return this.uniform(e,t)()}},{key:"int",value:function(e,t){return this.uniformInt(e,t)()}},{key:"integer",value:function(e,t){return this.uniformInt(e,t)()}},{key:"bool",value:function(){return this.uniformBoolean()()}},{key:"boolean",value:function(){return this.uniformBoolean()()}},{key:"uniform",value:function(e,t){return this._memoize("uniform",a.default,e,t)}},{key:"uniformInt",value:function(e,t){return this._memoize("uniformInt",l.default,e,t)}},{key:"uniformBoolean",value:function(){return this._memoize("uniformBoolean",f.default)}},{key:"normal",value:function(e,t){return(0,c.default)(this,e,t)}},{key:"logNormal",value:function(e,t){return(0,s.default)(this,e,t)}},{key:"bernoulli",value:function(e){return(0,d.default)(this,e)}},{key:"binomial",value:function(e,t){return(0,p.default)(this,e,t)}},{key:"geometric",value:function(e){return(0,v.default)(this,e)}},{key:"poisson",value:function(e){return(0,y.default)(this,e)}},{key:"exponential",value:function(e){return(0,h.default)(this,e)}},{key:"irwinHall",value:function(e){return(0,b.default)(this,e)}},{key:"bates",value:function(e){return(0,m.default)(this,e)}},{key:"pareto",value:function(e){return(0,g.default)(this,e)}},{key:"_memoize",value:function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),u=2;u<n;u++)r[u-2]=arguments[u];var o=""+r.join(";"),i=this._cache[e];return void 0!==i&&i.key===o||(i={key:o,distribution:t.apply(void 0,[this].concat(r))},this._cache[e]=i),i.distribution}},{key:"rng",get:function(){return this._rng}}]),e}();t.default=new w},function(e,t,n){"use strict";const{func:r}=n(2),u={positive:e=>e>0,negative:e=>e<0,nonNegative:e=>e>=0,integer:e=>e===(0|e),[r]:{is:e=>e,eq:e=>t=>t===e,gt:e=>t=>t>e,gte:e=>t=>t>=e,lt:e=>t=>t<e,lte:e=>t=>t<=e}};e.exports={predicates:u,validator:e=>"number"==typeof e}},function(e,t,n){"use strict";const{func:r}=n(2),u={empty:e=>""===e,nonEmpty:e=>""!==e,[r]:{is:e=>e,eq:e=>t=>t===e,length:e=>t=>t.length===e,minLength:e=>t=>t.length>=e,maxLength:e=>t=>t.length<=e,matches:e=>t=>e.test(t),startsWith:e=>t=>t.startsWith(e),endsWith:e=>t=>t.endsWith(e)}};e.exports={predicates:u,validator:e=>"string"==typeof e}},function(e,t,n){"use strict";const{func:r}=n(2),u={plain:e=>{if("object"!=typeof e)return!1;const t=Object.getPrototypeOf(e);return null===t||t===Object.getPrototypeOf({})},empty:e=>0===Object.keys(e).length,nonEmpty:e=>Object.keys(e).length>0,[r]:{is:e=>e,instanceOf:e=>t=>t instanceof e}};e.exports={predicates:u,validator:e=>"object"==typeof e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=l(n(1)),o=l(n(11)),i=l(n(12)),a=l(n(13));function l(e){return e&&e.__esModule?e:{default:e}}var f={xor128:o.default,function:i.default,default:a.default};t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=t[0],a=void 0===o?"default":o,l=t.slice(1);switch(void 0===a?"undefined":r(a)){case"object":if(a instanceof u.default)return a;break;case"function":return new i.default(a);case"string":var c=f[a];if(c)return new(Function.prototype.bind.apply(c,[null].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(l))))}throw new Error('invalid RNG "'+a+'"')}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=(r=o)&&r.__esModule?r:{default:r};var a=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.x=0,r.y=0,r.z=0,r.w=0,r.seed(e,n),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),u(t,[{key:"next",value:function(){var e=this.x^this.x<<1;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=this.w^this.w>>>19^e^e>>>8,(this.w>>>0)/4294967296}},{key:"seed",value:function(e,t){this.x=this._seed(e,t);for(var n=0;n<64;++n)this.next()}},{key:"clone",value:function(e,n){return new t(e,n)}},{key:"name",get:function(){return"xor128"}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=i(n(0)),o=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.seed(e,n),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),r(t,[{key:"next",value:function(){return this._rng()}},{key:"seed",value:function(e){(0,u.default)(e,u.default.function),this._rng=e}},{key:"clone",value:function(e,n){return new t(e,n)}},{key:"name",get:function(){return"function"}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=(r=o)&&r.__esModule?r:{default:r};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),u(t,[{key:"next",value:function(){return Math.random()}},{key:"seed",value:function(e,t){}},{key:"clone",value:function(){return new t}},{key:"name",get:function(){return"default"}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e,t,n){return void 0===n&&(n=void 0===t?1:t,t=0),(0,o.default)(t,o.default.number),(0,o.default)(n,o.default.number),function(){return e.next()*(n-t)+t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e,t,n){return void 0===n&&(n=void 0===t?1:t,t=0),(0,o.default)(t,o.default.number.integer),(0,o.default)(n,o.default.number.integer),function(){return e.next()*(n-t+1)+t|0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){return e.next()>=.5}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,o.default)(t,o.default.number),(0,o.default)(n,o.default.number),function(){var r=void 0,u=void 0,o=void 0;do{o=(r=2*e.next()-1)*r+(u=2*e.next()-1)*u}while(!o||o>1);return t+n*u*Math.sqrt(-2*Math.log(o)/o)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var u=e.normal.apply(e,n);return function(){return Math.exp(u())}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5;return(0,o.default)(t,o.default.number.gte(0).lt(1)),function(){return e.next()+t|0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5;return(0,o.default)(t,o.default.number.positive.integer),(0,o.default)(n,o.default.number.gte(0).lte(1)),function(){for(var r=0,u=0;r++<t;)u+=e.next()<n;return u}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5;(0,o.default)(t,o.default.number.gt(0).lte(1));var n=1/Math.log(1-t);return function(){return 1+Math.log(e.next())*n|0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};var i=[0,0,.6931471805599453,1.791759469228055,3.1780538303479458,4.787491742782046,6.579251212010101,8.525161361065415,10.60460290274525,12.801827480081469],a=function(e){return i[e]};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if((0,o.default)(t,o.default.number.positive),t<10){var n=Math.exp(-t);return function(){for(var r=n,u=0,o=e.next();o>r;)o-=r,r=t*r/++u;return u}}var r=Math.sqrt(t),u=.931+2.53*r,i=.02483*u-.059,l=1.1239+1.1328/(u-3.4),f=.9277-3.6224/(u-2);return function(){for(;;){var n=void 0,o=e.next();if(o<=.86*f)return n=o/f-.43,Math.floor((2*i/(.5-Math.abs(n))+u)*n+t+.445);o>=f?n=e.next()-.5:(n=((n=o/f-.93)<0?-.5:.5)-n,o=e.next()*f);var c=.5-Math.abs(n);if(!(c<.013&&o>c)){var s=0|Math.floor((2*i/c+u)*n+t+.445);if(o=o*l/(i/(c*c)+u),s>=10){var d=(s+.5)*Math.log(t/s)-t-.9189385332046727+s-(1/12-(1/360-1/(1260*s*s))/(s*s))/s;if(Math.log(o*r)<=d)return s}else if(s>=0&&Math.log(o)<=s*Math.log(t)-t-a(s))return s}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(0,o.default)(t,o.default.number.positive),function(){return-Math.log(1-e.next())/t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return(0,o.default)(t,o.default.number.integer.gte(0)),function(){for(var n=0,r=0;r<t;++r)n+=e.next();return n}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;(0,o.default)(t,o.default.number.integer.positive);var n=e.irwinHall(t);return function(){return n()/t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(0),o=(r=u)&&r.__esModule?r:{default:r};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;(0,o.default)(t,o.default.number.gte(0));var n=1/t;return function(){return 1/Math.pow(1-e.next(),n)}}},function(e,t,n){"use strict";n.r(t);var r=n(3),u=n(4),o=n(5),i=n.n(o);var a=e=>(class extends e{subSampling(e,t,n=!0){const r=this.R,u=this.Random;let o=Array.isArray(t)?r.clone(t):r.range(0,t);if(0===o.length)throw Error("candidate length should be positive");let i=[],a=r.clone(o);const l=()=>u.int(0,o.length-1);for(;i.length<e;){let e=l();(n||null!==a[e])&&(i=[...i,o[e]],n||(a[e]=null))}return i}});n(6);var l=e=>(class extends e{negSampling(e,t,n,r=!0){const u=this.R,o=this.Random;if(u.any(e=>!u.type(Number,e)||e>1||e<0,n))throw Error(`${JSON.stringify(n)} is not allow`);let i=u.reduce((e,t)=>(e[t]=1/0,e),u.clone(n),t),a=[],l=u.clone(i);const f=()=>o.int(0,i.length-1);for(;a.length<e;){let e=f();c=i[e],o.float()>c&&(r||null!==l[e])&&(a=[...a,e],r||(l[e]=null))}var c;return a}});var f=new class extends(u.Platform.mixWith(r.Function,[a,l])){constructor(){super(),this.Random=i.a}};var c=e=>(class extends e{get Sampling(){if(!this.sampling)throw Error("Sampling is not set");return this.sampling}set Sampling(e){u.Assert.beInstanceOf(e,r.Function),this.sampling=e}});n.d(t,"causalNetSampling",function(){return f}),n.d(t,"SamplingMixins",function(){return c}),n.d(t,"SubSamplingMixins",function(){return a}),n.d(t,"NegSamplingMixins",function(){return l})}])});
//# sourceMappingURL=sampling.node.js.map