const EnglishWordEmbeddingMixins = (BaseTensorClass)=> class extends BaseTensorClass{ 
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