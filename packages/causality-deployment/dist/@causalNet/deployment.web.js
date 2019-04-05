!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("causal-net.core"),require("causal-net.utils")):"function"==typeof define&&define.amd?define(["causal-net.core","causal-net.utils"],t):"object"==typeof exports?exports["@causalNet/deployment"]=t(require("causal-net.core"),require("causal-net.utils")):e["@causalNet/deployment"]=t(e["causal-net.core"],e["causal-net.utils"])}(this,function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";r.r(t);var n=r(0),o=new n.Functor,i=r(1);var s=new class extends(i.platform.mixWith(n.Event,[])){constructor(e){super(),this.F=e,this.R=e.CoreFunctor}set Emitter(e){this.deployEmitter=e}get Emitter(){if(!this.deployEmitter)throw Error("Emitter is not set");return this.deployEmitter}set Listener(e){this.deployListener=e,this.on("inferencer",e=>{this.deployListener(e)}),this.on("ensembleInferencer",e=>{this.deployListener(e)})}get Listener(){if(!this.deployListener)throw Error("Listener is not set");return this.deployListener}set Inferencer(e){this.deployInferencer=e,this.on("emitter",async e=>{let t=await this.deployInferencer(e);t&&t!=={}&&this.emit("inferencer",t)})}get Inferencer(){if(!this.deployInferencer)throw Error("Inferencer is not set");return this.deployInferencer}set EnsembleInferencer(e){this.deployEnsembleInferencer=e,this.on("emitter",async e=>{let t=await this.deployEnsembleInferencer(e);t&&t!=={}&&this.emit("ensembleInferencer",t)})}get EnsembleInferencer(){if(!this.deployEnsembleInferencer)throw Error("EnsembleInferencer is not set");return this.deployEnsembleInferencer}async deploy(){return new Promise(async(e,t)=>{let r=0,n=await this.Emitter();for(;null!==n;)this.emit("emitter",n),r+=1,n=await this.Emitter();e(r)})}}(o);var l=e=>(class extends e{set Deployment(e){this.deployment=e}get Deployment(){if(!this.deployment)throw Error("deployment is not set");return this.deployment}get Inferencer(){const e=()=>this.Model,t=this.T;return async r=>{let{Predict:n,Encode:o,Decode:i}=r,s={};const l=e();if(n){let e=t.tensor(n).asType("float32").reshape([1,-1]),r=l.Predict(e);s.Predict=await r.data()}if(o){let e=t.tensor(o).asType("float32").reshape([1,-1]),r=l.Encode(e);s.Encode=await r.data()}if(i){let e=t.tensor(i).asType("float32").reshape([1,-1]),r=l.Encode(e);s.Decode=await r.data()}return s}}setByConfig(e){super.setByConfig&&super.setByConfig(e),this.Logger.groupBegin("set deployment by config");const{Emitter:t,Listener:r}=e.Deployment;return this.Deployment.Emitter=t,this.Deployment.Listener=r,this.Deployment.Inferencer=this.Inferencer,this.Logger.groupEnd(),e}async deploy(){return await this.Deployment.deploy()}});r.d(t,"causalNetDeployment",function(){return s}),r.d(t,"DeploymentMixins",function(){return l})}])});
//# sourceMappingURL=deployment.web.js.map