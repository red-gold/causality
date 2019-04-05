!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("causal-net.core"),require("causal-net.utils"),require("random")):"function"==typeof define&&define.amd?define(["causal-net.core","causal-net.utils","random"],t):"object"==typeof exports?exports["@causalNet/sampling"]=t(require("causal-net.core"),require("causal-net.utils"),require("random")):e["@causalNet/sampling"]=t(e["causal-net.core"],e["causal-net.utils"],e.random)}(this,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),i=n(2),u=n.n(i);var l=e=>(class extends e{subSampling(e,t,n=!0){const r=this.R,o=this.Random;let i=Array.isArray(t)?r.clone(t):r.range(0,t);if(0===i.length)throw Error("candidate length should be positive");let u=[],l=r.clone(i);const a=()=>o.int(0,i.length-1);for(;u.length<e;){let e=a();(n||null!==l[e])&&(u=[...u,i[e]],n||(l[e]=null))}return u}});var a=e=>(class extends e{negSampling(e,t,n,r=!0){const o=this.R,i=this.Random;if(o.any(e=>!o.type(Number,e)||e>1||e<0,n))throw Error(`${JSON.stringify(n)} is not allow`);let u=o.reduce((e,t)=>(e[t]=1/0,e),o.clone(n),t),l=[],a=o.clone(u);const s=()=>i.int(0,u.length-1);for(;l.length<e;){let e=s();c=u[e],i.float()>c&&(r||null!==a[e])&&(l=[...l,e],r||(a[e]=null))}var c;return l}});var s=new class extends(o.platform.mixWith(r.Functor,[l,a])){constructor(){super(),this.Random=u.a}};var c=e=>(class extends e{get Sampling(){if(!this.sampling)throw Error("Sampling is not set");return this.sampling}set Sampling(e){o.assert.beInstanceOf(e,r.Functor),this.sampling=e}});n.d(t,"causalNetSampling",function(){return s}),n.d(t,"SamplingMixins",function(){return c}),n.d(t,"SubSamplingMixins",function(){return l}),n.d(t,"NegSamplingMixins",function(){return a})}])});
//# sourceMappingURL=sampling.web.js.map