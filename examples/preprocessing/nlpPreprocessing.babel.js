import { nlpPreprocessing, tokenizer } from 'causal-net.preprocessing';
import { termLogger } from 'causal-net.log';
(async ()=>{
    const sampleText = `Ludwig Eduard Boltzmann was an Austrian physicist and philosopher  \n 
                        whose greatest achievement was in the development of statistical mechanics, 
                        which explains and predicts how the properties of atoms determine the physical properties of matter`;
    await tokenizer.connect('../../models/use/vocab.json');
    nlpPreprocessing.Tokenizer = tokenizer;
    let tokens = nlpPreprocessing.tokenize(sampleText);
    console.log({tokens});
    let filterTokens = nlpPreprocessing.badWordsFilter(tokens,['an']);
    let wordFreqCount = nlpPreprocessing.wordFreqCount(tokens);
    termLogger.log({tokens, filterTokens, wordFreqCount});
})();