const ChunkLookupMixins = (BaseWordEmbeddingClass)=> class extends BaseWordEmbeddingClass{ 
    get ChunkLookUp(){
        const Storage = this.Storage;
        return (chunkId)=>{
            return new Promise(async (resolve, reject)=>{
                try{
                    const LOOK_UP_CHUNK_PATH = this.embeddingSavePath + chunkId;
                    this.logger.debug({LOOK_UP_CHUNK_PATH});
                    let chunkItem = await Storage.getItem(LOOK_UP_CHUNK_PATH);
                    let chunk = chunkItem[LOOK_UP_CHUNK_PATH];
                    resolve(JSON.parse(chunk));
                }
                catch(err){
                    resolve(null);
                }
            });
        };
    }
    async updateChunkLookUp(chunkId, chunk){
        const Storage = this.Storage;
        const UPDATE_CHUNK_PATH = this.embeddingSavePath + chunkId;
        this.logger.debug({UPDATE_CHUNK_PATH});
        return await Storage.setItem(UPDATE_CHUNK_PATH, JSON.stringify(chunk));
    }

    async fetchChunk(chunkId){
        const CHUNK_URL = `${this.baseURL}wordvec_chunk_${chunkId}.json`;
        this.logger.debug(CHUNK_URL);
        return await this.Fetch.fetchJson(CHUNK_URL);
    }
   
};
export default ChunkLookupMixins;