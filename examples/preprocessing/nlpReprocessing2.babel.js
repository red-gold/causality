import { nlpPreprocessing } from 'causal-net.preprocessing';
var raw = 'He is the king. The king is royal. She is the royal queen';
console.log(nlpPreprocessing.tokenize(raw));