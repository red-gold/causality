const TokenLookUpMixins = (BaseWordEmbeddingClass)=> class extends BaseWordEmbeddingClass{ 
    get TokenLookUp(){
        const MemCache = this.MemCache;
        return (token)=>{
            return new Promise(async (resolve, reject)=>{
                try{
                    let vec = await MemCache.getItem(this.embeddingSavePath + token);
                    resolve(JSON.parse(vec));
                }
                catch(err){
                    resolve(null);
                }
            });
        };
    }

    async updateTokenLookUp(token, vec){
        const MemCache = this.MemCache;
        MemCache.setItem(this.embeddingSavePath + token, JSON.stringify(vec));
    }
};
export default TokenLookUpMixins;
