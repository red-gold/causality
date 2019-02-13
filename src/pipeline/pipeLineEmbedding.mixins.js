const PipelineEmbeddingMixins = (PipelineClass)=> class extends PipelineClass{
    setEmbeddingByConfig(){
    }

    set Embedding(memory){
        if(!memory){
            throw Error(`expect memory, got ${memory}`);
        }
        this.memory = memory;
    }

    get Embedding(){
        if(!this.memory){
            throw Error(`memory is not set`);
        }
        return this.memory;
    }
};
export default PipelineEmbeddingMixins;