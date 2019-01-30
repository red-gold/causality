const TokenizingMixins = (BaseFunctionClass) => class extends BaseFunctionClass{
    cleanText(text, removePattern=null){
        removePattern = removePattern || /[.,\/#!$%\^&\*;:{}=\-_`~()\n\t]/g;
        return text.replace(removePattern," ");
    }
    tokenize(text, toLower=true){
        const R = this.R;
        const Tokenizer = this.Tokenizer;
        let cleanText = this.cleanText(text);
        let rawTokens = Tokenizer(cleanText);
        let tokens = R.filter((token)=>R.not(R.isEmpty(token)),rawTokens);
        if(toLower){
            return R.map(R.toLower, tokens);
        }
        else{
            return tokens;
        }
    }
};

export default TokenizingMixins;