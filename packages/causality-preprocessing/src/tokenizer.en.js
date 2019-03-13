/**
 * This TokenizerEN is a simple implementation for English tokenizer
 * @todo enhance it with entities and built-in vocab
 * @experiment
 * @class TokenizerEN
 */
class TokenizerEN{
    constructor(){
    }
    connect(configureLink){
        console.log('This simple English tokenizer not requires advance configure');
    }
    tokenize(text){
        const Re = /[\s."'/\|;:()\[\]\@\#\$\&]/g;
        return text.split(Re).filter(token=>token!=='');
    }
}
export default new TokenizerEN();