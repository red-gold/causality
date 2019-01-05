const EnglishWordEmbeddingMixins = (RepresentationClass)=> class extends RepresentationClass{ 
    loadWordVec(){

    }
    tokenize(text){
        return text.split(' ');
    }
    transform(text){
        let tokens = tokens(text);
        return tokens;
    }
};
export default EnglishWordEmbeddingMixins;