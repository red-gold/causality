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