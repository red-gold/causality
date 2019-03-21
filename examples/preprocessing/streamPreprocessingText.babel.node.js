import { nlpPreprocessing } from 'causal-net.preprocessing';
import { termLogger } from 'causal-net.log';
import { Stream } from 'causal-net.utils';
import { indexDBStorage } from 'causal-net.storage';
import * as fs from 'fs';

let corpusReader = fs.createReadStream('./datasets/text8/small.txt');
// let corpusReader = fs.createReadStream('./datasets/text8/enwik8');

let remainingChars = '', wordFreqCount = {}, lineIndex = 0;
function tranformFn(chunkData, chunkEncoding, afterTransformFn){
    let sampleText = chunkData + remainingChars;
    let sampleLines = sampleText.split('\n');
    let transformedData = [];
    for(let line of sampleLines){
        let tokens = nlpPreprocessing.tokenize(line);
        wordFreqCount = nlpPreprocessing.WordFreqCount(tokens, wordFreqCount);
        lineIndex += 1;
        console.log({line, lineIndex, tokens});
        transformedData.push({lineIndex, tokens});
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
    })
}
let writer = Stream.makeWritable(writeTokens);

(async ()=>{
    const CorpusStreamer = Stream.makePipeline([corpusReader, transformer, writer], (data)=>{
        data = ''+data;
        termLogger.log({'data length': data.length});
    });
    let result = await CorpusStreamer;
    console.log({result, wordFreqCount});
    let listFiles = await indexDBStorage.getFileList('/corpus/');
    console.log(listFiles);
    let tokens = await indexDBStorage.readFile(listFiles[0]);
    console.log({tokens: JSON.parse(tokens)});    
})();