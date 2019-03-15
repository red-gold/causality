
const MemCacheMixins = (BaseClass)=> class extends BaseClass{
    /**
     * This methods return summary about items of the current memcache 
     * @returns
     */
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