import { nlpPreprocessing } from 'causal-net.preprocessing';
import { termLogger } from 'causal-net.log';
const sampleText = `Ludwig Eduard Boltzmann was an Austrian physicist and philosopher\n 
                    whose greatest achievement was in the development of statistical mechanics, 
                    which explains and predicts how the properties of atoms determine the physical properties of matter`;
let tokens = nlpPreprocessing.tokenize(sampleText);
let filterTokens = nlpPreprocessing.BadWordsFilter(tokens,['an']);
let wordFreqCount = nlpPreprocessing.WordFreqCount(tokens);
termLogger.log({tokens, filterTokens, wordFreqCount});