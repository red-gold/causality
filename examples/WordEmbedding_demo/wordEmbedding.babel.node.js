import { nlpPreprocessing } from 'causal-net.preprocessing';
import { termLogger } from 'causal-net.log';
import { Stream } from 'causal-net.utils';
import { indexDBStorage } from 'causal-net.storage';
import { causalNetCore } from 'causal-net.core';
import * as fs from 'fs';
const R = causalNetCore.CoreFunction;

let corpusReader = fs.createReadStream('./datasets/text8/small.txt');
// let corpusReader = fs.createReadStream('./datasets/text8/enwik8');

var remainingChars = '', wordFreqCount = {}, lineIndex = 0;
function tranformFn(chunkData, chunkEncoding, afterTransformFn){
    let sampleText = remainingChars + chunkData;
    let sampleLines = sampleText.split('\n');
    let transformedData = [], counter = 0;
    for(let line of sampleLines){
        counter += 1;
        if(counter === sampleLines.length){//last line
            remainingChars = line;
        }
        else{
            if(line.length > 0){
                let tokens = nlpPreprocessing.tokenize(line);
                wordFreqCount = nlpPreprocessing.WordFreqCount(tokens, wordFreqCount);
                lineIndex += 1;
                console.log({line, lineIndex, tokens});
                transformedData.push({lineIndex, tokens});
            }
        }
    }
    afterTransformFn(null, transformedData);
};
let transformer = Stream.makeTransform(tranformFn);

function writeTokens(transformedData, chunkEncoding, afterWriteFn){
    const WriteTokensToFile = async (transformedData)=>{
        for(let {lineIndex, tokens} of transformedData){
            console.log({lineIndex});
            await indexDBStorage.writeFile(`/corpus/line_${lineIndex}`, JSON.stringify(tokens));
        }
    }
    WriteTokensToFile(transformedData).then(()=>{
        afterWriteFn();
    });
}
let writer = Stream.makeWritable(writeTokens);

(async ()=>{
    let deletedFiles = await indexDBStorage.deleteFileByPrefix('/corpus/');
    const DataProgress = (dataBuffer)=> termLogger.log({'data length': dataBuffer.length});
    const CorpusStreamer = Stream.makePipeline([corpusReader, transformer, writer], DataProgress);
    let result = await CorpusStreamer;
    console.log({result, wordFreqCount});
    const SortByFreq = R.sortBy((v)=>-v[1]);
    const GetVocab = ([v,f]) => v;
    const GetFreq = ([v,f]) => f;
    const VocabFreqPairs = SortByFreq(R.toPairs(wordFreqCount));
    
    const Vocab = R.map(GetVocab, VocabFreqPairs);
    const Freq = R.map(GetFreq, VocabFreqPairs);
    console.log({Vocab, Freq});
    const inverseVocab = (word)=>R.indexOf(word, Vocab);
    let listFiles = await indexDBStorage.getFileList('/corpus/');
    console.log(listFiles);
    let tokens = await indexDBStorage.readFile(listFiles[0]);
    console.log({tokens: JSON.parse(tokens)});    
})();