!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("causal-net.core"),require("causal-net.utils"),require("causal-net.preprocessing"),require("causal-net.optimizers"),require("causal-net.layer"),require("causal-net.log"),require("causal-net.datasets")):"function"==typeof define&&define.amd?define(["causal-net.core","causal-net.utils","causal-net.preprocessing","causal-net.optimizers","causal-net.layer","causal-net.log","causal-net.datasets"],t):"object"==typeof exports?exports["@causalNet/pipeline"]=t(require("causal-net.core"),require("causal-net.utils"),require("causal-net.preprocessing"),require("causal-net.optimizers"),require("causal-net.layer"),require("causal-net.log"),require("causal-net.datasets")):e["@causalNet/pipeline"]=t(e["causal-net.core"],e["causal-net.utils"],e["causal-net.preprocessing"],e["causal-net.optimizers"],e["causal-net.layer"],e["causal-net.log"],e["causal-net.datasets"])}(this,function(e,t,r,n,o,s,i){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,r){var n,o;e.exports=(n=r(0),o=r(1),function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,r){"use strict";r.r(t);var n=r(0),o=new n.Functor,s=r(1),i=new class extends(s.platform.mixWith(n.Event,[])){constructor(e){super(),this.F=e,this.R=e.CoreFunctor}set Emitter(e){this.deployEmitter=e}get Emitter(){if(!this.deployEmitter)throw Error("Emitter is not set");return this.deployEmitter}set Listener(e){this.deployListener=e,this.on("inferencer",e=>{this.deployListener(e)}),this.on("ensembleInferencer",e=>{this.deployListener(e)})}get Listener(){if(!this.deployListener)throw Error("Listener is not set");return this.deployListener}set Inferencer(e){this.deployInferencer=e,this.on("emitter",async e=>{let t=await this.deployInferencer(e);t&&t!=={}&&this.emit("inferencer",t)})}get Inferencer(){if(!this.deployInferencer)throw Error("Inferencer is not set");return this.deployInferencer}set EnsembleInferencer(e){this.deployEnsembleInferencer=e,this.on("emitter",async e=>{let t=await this.deployEnsembleInferencer(e);t&&t!=={}&&this.emit("ensembleInferencer",t)})}get EnsembleInferencer(){if(!this.deployEnsembleInferencer)throw Error("EnsembleInferencer is not set");return this.deployEnsembleInferencer}async deploy(){return new Promise(async(e,t)=>{let r=0,n=await this.Emitter();for(;null!==n;)this.emit("emitter",n),r+=1,n=await this.Emitter();e(r)})}}(o),l=e=>(class extends e{set Deployment(e){this.deployment=e}get Deployment(){if(!this.deployment)throw Error("deployment is not set");return this.deployment}get Inferencer(){const e=()=>this.Model,t=this.T;return async r=>{let{Predict:n,Encode:o,Decode:s}=r,i={};const l=e();if(n){let e=t.tensor(n).asType("float32").reshape([1,-1]),r=l.Predict(e);i.Predict=await r.data()}if(o){let e=t.tensor(o).asType("float32").reshape([1,-1]),r=l.Encode(e);i.Encode=await r.data()}if(s){let e=t.tensor(s).asType("float32").reshape([1,-1]),r=l.Encode(e);i.Decode=await r.data()}return i}}setByConfig(e){super.setByConfig&&super.setByConfig(e),this.Logger.groupBegin("set deployment by config");const{Emitter:t,Listener:r}=e.Deployment;return this.Deployment.Emitter=t,this.Deployment.Listener=r,this.Deployment.Inferencer=this.Inferencer,this.Logger.groupEnd(),e}async deploy(){return await this.Deployment.deploy()}});r.d(t,"causalNetDeployment",function(){return i}),r.d(t,"DeploymentMixins",function(){return l})}]))},function(e,t){e.exports=s},function(e,t){e.exports=i},function(e,t,r){var n,o;e.exports=(n=r(0),o=r(1),function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),s=new class extends(n.platform.mixWith(o.Tensor,[])){constructor(){super()}classification(e){return this.model=new SingleLabelClassification(e),this.model}},i=e=>(class extends e{get LossModel(){if(!this.netModel)throw Error("netModel is not set");return this.netModel.Loss}get FitModel(){if(!this.netModel)throw Error("netModel is not set");return this.netModel.Fit}get OneHotPredictModel(){if(!this.netModel)throw Error("netModel is not set");return this.netModel.OneHotPredict}get PredictModel(){if(!this.netModel)throw Error("netModel is not set");return this.netModel.Predict}get EncodeModel(){if(!this.netModel)throw Error("netModel is not set");return this.netModel.Encode}get DecodeModel(){if(!this.netModel)throw Error("netModel is not set");return this.netModel.Decode}get Model(){if(!this.netModel)throw Error("netModel is not set");return this.netModel}set Model(e){this.netModel=e}setByConfig(e){super.setByConfig&&super.setByConfig(e),this.Logger.groupBegin("set Model by config");const{Model:t}=e.Net;if(!t)throw Error(`Model is not set in ${JSON.stringlify(e)}`);t.LayerRunner=this.LayerRunner,this.Model=t,this.Logger.groupEnd()}}),l=class extends o.Tensor{constructor(){super(),this.modelName=""}set LayerRunner(e){throw Error("implement required")}get LayerRunner(){throw Error("implement required")}fit(){throw Error("implement required")}loss(){throw Error("implement required")}predict(){throw Error("implement required")}oneHotPredict(){throw Error("implement required")}},u=class extends l{constructor(e){if(super(),!(e>0))throw Error(`expect numclass, get ${e}`);this.numClass=e}set LayerRunner(e){let{Predictor:t}=e;this.runner={Predictor:t}}get LayerRunner(){if(!this.runner)throw Error("runner is not set");return this.runner}get Fit(){const{Predictor:e}=this.LayerRunner;return t=>{let r=e(t);return r.sub(r.logSumExp(1,!0))}}get Predict(){const e=this.Fit;return t=>e(t).argMax(1)}get OneHotPredict(){const e=this.Predict;return t=>{let r=e(t);return this.T.oneHot(r,this.numClass)}}get Loss(){const e=this.Fit;return(t,r)=>e(t).neg().mul(r).sum(1).mean()}};r.d(t,"causalNetModels",function(){return s}),r.d(t,"ModelMixins",function(){return i}),r.d(t,"BaseModel",function(){return l}),r.d(t,"SingleLabelClassification",function(){return u})}]))},function(e,t,r){"use strict";r.r(t);var n=r(7),o=r(2),s=r(3),i=r(8),l=r(4),u=r(0),a=r(1),c=r(5),d=r(6);var f=new class extends(a.platform.mixWith(u.Functor,[])){constructor(){super()}};var p=e=>(class extends e{async ensembleTrain(e,t,r){this.LayerRunner.NetParameters=this.ParameterInitializer(this.LayerRunner.NetLayers);let n=await this.train(e,t);return await this.saveParams(r),{[r]:n}}});var h=e=>(class extends e{get EnsembleModelPredict(){const e=this.FitModel,t=this.T,r=this.EnsembleModels;return async n=>{let o=[];for(let t of r){await this.loadParams(t);let r=e(n).exp();o.push(r)}return t.stack(o).mean(0).argMax(1)}}set EnsembleModels(e){this.ensembleModels=e}get EnsembleModels(){if(!this.ensembleModels)throw Error("EnsembleModels is not set");return this.ensembleModels}});var m=e=>(class extends e{get EnsembleInferencer(){const e=()=>({EnsemblePredict:this.EnsembleModelPredict}),t=this.T;return async r=>{let{EnsemblePredict:n}=r,o={};if(n){let r=t.tensor(n).asType("float32").reshape([1,-1]),s=await e().EnsemblePredict(r);o.EnsemblePredict=await s.data()}return o}}setByConfig(e){return super.setByConfig&&super.setByConfig(e),this.Logger.groupBegin("set ensemble deployment by config"),this.Deployment.EnsembleInferencer=this.EnsembleInferencer,this.Logger.groupEnd(),e}async deploy(){return await this.Deployment.deploy()}});var y=new class extends(a.platform.mixWith(u.Tensor,[n.DataSourceMixins,o.PreprocessingMixins,l.LayerRunnerMixins,i.ModelMixins,s.EvaluatorMixins,s.TrainerMixins,d.LoggerMixins,c.DeploymentMixins,p,h,m])){constructor(e,t,r,n,o){super(),this.F=e,this.R=this.F.CoreFunctor,this.Logger=t,this.Preprocessing=r,this.LayerRunner=n,this.Deployment=o}}(f,d.termLogger,o.causalNetPreprocessingStream,l.causalNetRunner,c.causalNetDeployment);r.d(t,"causalNet",function(){return y})}])});
//# sourceMappingURL=pipeline.web.js.map