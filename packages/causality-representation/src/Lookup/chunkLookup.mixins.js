/**
 * This ChunkLookupMixins class provide mixins for chunk lookup that first look from the cached chunk then
 * fetch and cache new chunk
 * @class ChunkLookupMixins
 * @extends {  BaseWordEmbeddingClass } 
 */
const ChunkLookupMixins = ( BaseWordEmbeddingClass )=> class extends BaseWordEmbeddingClass{ 
    
    
    get ChunkLookUp(){
        const Storage = this.Storage;
        return (chunkId)=>{
            return new Promise(async (resolve, reject)=>{
                try{
                    const ChunkPath = this.embeddingSavePath + chunkId;
                    let chunkItem = await Storage.getItem(ChunkPath);
                    let chunk = chunkItem[ChunkPath];
                    resolve(chunk);
                }
                catch(err){
                    resolve(null);
                }
            });
        };
    }
   
    async updateChunkLookUp(chunkId, chunk){
        const Storage = this.Storage;
        const UpdateChunkPath = this.embeddingSavePath + chunkId;
        this.logger.debug({ UpdateChunkPath });
        return await Storage.setItem(UpdateChunkPath, chunk);
    }

    async queryChunk(chunkId){
        const ChunkUrl = `${this.baseLink}wordvec_chunk_${chunkId}.json`;
        return await this.query(ChunkUrl);
    }
   
};
export default ChunkLookupMixins;