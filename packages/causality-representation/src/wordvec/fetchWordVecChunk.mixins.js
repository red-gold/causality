const FetchWordVecChunk = (BaseWordEmbeddingClass)=> class extends BaseWordEmbeddingClass{ 
    get Representation(){
        return this.representation;
    }
    set Representation(representation){
        this.representation = representation;
    }
    setRepresentationByConfig(netConfig){
        
    }
};
export default EnglishWordEmbeddingMixins;