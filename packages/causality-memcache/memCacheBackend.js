var isNode = require('is-node');

if(isNode){
    var R = require('ramda');
    var tf = require('@tensorflow/tfjs');
    require('@tensorflow/tfjs-node');
}

const {MemCache} = MemCacheBackend();

module.exports = {MemCache};