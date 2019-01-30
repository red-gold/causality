const WordChunkLookUp = (BaseWordEmbeddingClass)=> class extends BaseWordEmbeddingClass{ 
    set lookupWordVec(word, savePath){
        this.lookUp[word] = savePath;
    }
    get lookupWordVec(){
        return this.lookUp;
    }
    async getWordVecs(words){
        const LookUp = this.lookupWordVec;
        const Storage = this.Storage;
        let wordVecPath = LookUp[word];
        return await Storage.getItem()
    }
    async setWordVec(word, vec){

    }
    setRepresentationByConfig(netConfig){
        
    }
};
export default WordChunkLookUp;