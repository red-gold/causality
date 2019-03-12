const WordEmbeddingMixins = (BaseEmbeddingClass)=> class extends BaseEmbeddingClass{ 
    /**
     * return default replacement for unknown vec. Currently it is set to zeros
     * @returns [ Array ] zero vecs
     */
    unknowVec(){
        return this.F.zeroVec(this.VecSize);
    }
    
    /**
     * return the vectors of tokenized sentences
     * This function require sentence to be tokenized via preprocessing
     * @param { Array } tokens - array of string tokens of sentence
     * @returns { Tensor } encoded sentences
     */
    async sentenceEncode(sentences){
        const T = this.T;
        let encodedSentences = [];
        for(let tokens of sentences){
            let vecs = await this.transform(tokens);
            let encode = await T.tensor(vecs).mean(0);
            encodedSentences.push(encode);
        }
        return T.stack(encodedSentences);
    }
    
    async transform(tokens){
        const TokenLookUp = this.TokenLookUp, ChunkLookUp = this.ChunkLookUp;
        
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
                this.logger.debug({ chunkId });
                chunk = await this.queryChunk(chunkId);
                this.logger.debug({ chunk });
                await this.updateChunkLookUp(chunkId, chunk);
            }
            masterchunk = {...masterchunk, ...chunk};
        }

        let finalVecs = vecs.reduce((finalVecs, vec)=>{
                            if(typeof(vec) === "string"){
                                let _vec = masterchunk[vec];
                                if(_vec === undefined){
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
export default WordEmbeddingMixins;