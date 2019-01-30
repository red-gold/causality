const RepresentationMixins = (BaseTensorClass)=> class extends BaseTensorClass{ 
    get Representation(){
        if(!this.representation){
            throw Error('representation is not set');
        }
        return this.representation;
    }
    set Representation(representation){
        if(!representation){
            throw Error(`expect representation instance, got ${embedding}`);
        }
        this.representation = representation;
    }
    get Embedding(){
        if(!this.embedding){
            throw Error('embedding is not set');
        }
        return this.embedding;
    }
    set Embedding(embedding){
        if(!embedding){
            throw Error(`expect embedding instance, got ${embedding}`);
        }
        this.embedding = embedding;
    }
    setEmbeddingByConfig(netConfig){
        let [type, subType] = netConfig.Type.split('/');
        if(type !== 'text'){
            throw Error(`expect type to be "text" got ${type}`);
        }
        if(!subType){
            throw Error(`expect valid string subtype got ${subType}`);
        }
        this.Embedding = this.Representation[subType];
    }

    
};
export default RepresentationMixins;