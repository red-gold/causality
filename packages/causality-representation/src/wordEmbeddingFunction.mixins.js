const WordEmbeddingFunctionMixins = (BaseFunctionClass) => class extends BaseFunctionClass{
    mapTokenToChunkIds(tokens, mapper){
        const R = this.R;
        const TokenChunkIdMapper = mapper;
        let tokenChunkMap = tokens.map( t => {
            let chunkId = TokenChunkIdMapper(t);
            return [[t, chunkId], chunkId]; 
        });
        let [tokenChunkIds, _chunkIds] = this.unzip(tokenChunkMap);
        let chunkIds = R.uniq(_chunkIds);
        console.log({chunkIds, tokenChunkIds});
        return {tokenChunkIds, chunkIds};
    }

    zeroVec(vecSize){
        return this.R.map(()=>0,this.R.range(0, vecSize));
    };
};
export default WordEmbeddingFunctionMixins;