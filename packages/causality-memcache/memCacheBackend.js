var isNode = require('is-node');

if(isNode){
    var R = require('ramda');
    var tf = require('@tensorflow/tfjs');
    require('@tensorflow/tfjs-node');
}

class MemCacheBackend{
    constructor(config={Type='memory'}){
        if(config.Type)
        this.cache = {}
    }
    get(key){
        return this.cache[key];
    }
    set(key, data){
        this.cache[key] = data;
        return this
    }
}

const {MemCache} = MemCacheBackend();

module.exports = {MemCache};