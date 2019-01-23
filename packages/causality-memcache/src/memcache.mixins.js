const MemCacheMixins = (BaseClass)=> class extends BaseClass{
    async memCacheSummary(){
        return await this.memCache.getItemList();
    }
    set MemCache(memCache){
        this.memCache = memCache;
    }

    get MemCache(){
        return this.memCache;
    }
};
export default MemCacheMixins;