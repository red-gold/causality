const EnglishWordEmbeddingMixins = (RepresentationClass)=> class extends RepresentationClass{ 
    async loadModel(){
        const ModelURL = '';
        return await this.Fetch.fetchData(ModelURL);
    }
    async tokenize(text){
        return new Promise((resolve, reject)=>{
            resolve(text.split(' '));
        });
    }
    async transform(text){
        let tokens = await this.tokenize(text);
        return tokens;
    }
};
export default EnglishWordEmbeddingMixins;