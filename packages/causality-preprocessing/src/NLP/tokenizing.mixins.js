const TokenizingMixins = (BaseFunctionClass) => class extends BaseFunctionClass{
    tokenize(text){
        const Tokenizer = this.Tokenizer;
        return Tokenizer(text);
    }
};

export default TokenizingMixins;