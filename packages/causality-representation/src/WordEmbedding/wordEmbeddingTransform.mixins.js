const WordEmbeddingTransformMixins = (BaseWordEmbeddingClass)=> class extends BaseWordEmbeddingClass{ 

    unknowVec(){
        return this.F.zeroVec(this.VecSize);
    }

    async sentenceEncode(tokens){
        let vecs = await this.transform(tokens);
        return await this.T.tensor(vecs).mean(0).data();
    }
    
    async transform(tokens){
        const TokenLookUp = this.TokenLookUp, ChunkLookUp = this.ChunkLookUp;
        console.log(TokenLookUp);
        let vecs = [], missCacheTokens=[];
        for(let token of tokens){
            let vec = await TokenLookUp(token);
            this.logger.debug({[token]: vec});
            if(vec === null){
                missCacheTokens = [...missCacheTokens, token];
            }
            vecs = [...vecs, token];
        }
        if(missCacheTokens.length === 0){
            return vecs;
        }
        
        let {tokenChunkIds, chunkIds} = 
            this.F.mapTokenToChunkIds(missCacheTokens, this.TokenChunkIdMapper);
        this.logger.debug({tokenChunkIds, chunkIds});
        let masterchunk = {};
        for(let chunkId of chunkIds){
            let chunk = (chunkId === null)?{}:await ChunkLookUp(chunkId);
            if(chunk === null){
                chunk = await this.fetchChunk(chunkId);
                await this.updateChunkLookUp(chunkId, chunk);
            }
            masterchunk = {...masterchunk, ...chunk};
        }

        let finalVecs = vecs.reduce((finalVecs, vec)=>{
                            if(typeof(vec) === "string"){
                                let _vec = masterchunk[vec];
                                if(_vec === undefined){
                                    this.logger.debug(`word ${vec} not found in chunk`);
                                    _vec = this.unknowVec();
                                }
                                finalVecs.push(_vec);
                            }
                            else{
                                finalVecs.push(vec);
                            }
                            return finalVecs;
                        }, []);
        return finalVecs;
    }   
};
export default WordEmbeddingTransformMixins;