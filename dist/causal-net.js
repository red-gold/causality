!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["causal-net"]=t():e["causal-net"]=t()}(global,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=require("causal-net-core")},function(e,t){e.exports=require("causal-net-utils")},function(e,t,r){e.exports=r(3)},function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(1);class i extends n.Function{constructor(){super()}range(e){return this.R.range(0,e)}}class o{constructor(e,t=null){this.L=new n.Layer,this.F=new i,this.T=this.L.CoreTs,this.R=this.F.CoreFn,this.IO=new s.IO,this.HyperParameters=this.F.getHyperParameter(e),this.BasePipeline=this.F.getPipeline(e),this.netParams=this.L.setOrInitParams(this.BasePipeline,t)}makePredict(e,t=1,r=null){const n=this.T,s=this.F,i=this.L;this.HyperParameters.Datasize=t;const o=s.parameterAcquisition(this.BasePipeline,this.HyperParameters);console.log(JSON.stringify({Pipeline:o}));let a={PipeInput:e},l=[],u=this.netParams;return n.tidy(()=>{for(let e of o){let t=i.layer(a[e.Input],e,u[e.Name],()=>{});a[e.Name]=t[e.Name],l.push({[e.Name]:t.trace})}console.log(JSON.stringify({traces:l}));let e=a.PipeOutput,t=e.sub(n.logSumExp(e,1,!0)),r=t.argMax(1);return{logProb:t,predict:r}})}loss(e,t,r,n=null){let s=this.T.tensor(t).reshape([r,-1]);const{logProb:i}=this.makePredict(e,r,n);return i.neg().mul(s).mean()}train(e,t,r=2,n=.01){const s=this.T,i=this.F,o=this.R,a=new Date;let l=[],u=[];const c=s.train.adam(n);for(let n of i.range(r)){console.log({epochIdx:n,averageLoss:u,time:(new Date).toISOString(),start:a.toISOString(),elapse:(new Date-a)/1e3});const r=e(t);for(let[e,n]of r)c.minimize(()=>{let r=this.loss(e,n,t,e=>{console.log(e)});return l=[...l,...r.dataSync()],console.log({loss:l}),r});u=[...u,o.mean(l)],l=[]}}test(e,t){let{predict:r}=this.makePredict(e);r=r.dataSync();let n=t.map((e,t)=>e===r[t]);return{corect:R.sum(n),total:t.length}}getParamsSync(){const e=this.F,t=this.R,r=n=>e.isTensor(n)?Array.from(n.dataSync()):t.map(r,n);return r(this.netParams)}saveParamsSync(e="./save.model"){const t=this.getParamsSync();return this.IO.writeSync(e,JSON.stringify(t))}readParamsSync(e){const t=JSON.parse(this.IO.readSync(e));this.netParams=this.L.setOrInitParams(this.BasePipeline,t)}}r.d(t,"CausalNet",function(){return o})}])});