import {Preprocessing, Log} from '../../src/index';
const { termLogger } = Log;
const { nlpPreprocessing } = Preprocessing;
console.log(Preprocessing);
const sampleText = `Ludwig Eduard Boltzmann was an Austrian physicist and philosopher 
                    whose greatest achievement was in the development of statistical mechanics, 
                    which explains and predicts how the properties of atoms determine the physical properties of matter`;
let tokens = nlpPreprocessing.tokenize(sampleText);
let filterTokens = nlpPreprocessing.filterBadWords(tokens,['an']);
termLogger.log({tokens, filterTokens});