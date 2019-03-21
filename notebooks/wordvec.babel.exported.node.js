
import * as Utils from 'causal-net.utils';
import * as Log from 'causal-net.log';
import * as Storage from 'causal-net.storage';
import { causalNetCore } from 'causal-net.core';
import * as Preprocessing from 'causal-net.preprocessing';
import * as fs from 'fs';
var { Stream } = Utils;
var { termLogger } = Log; 
var { indexDBStorage } = Storage;
var { nlpPreprocessing } = Preprocessing;
var R = causalNetCore.CoreFunction;

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
//                 console.log({line, lineIndex, tokens});
                transformedData.push({lineIndex, tokens});
            }
        }
    }
    afterTransformFn(null, transformedData);
};

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

function getWordContext(tokens, windownSize){
    function context(total, token, index){
    //     console.log({total, token, index});
        for(let w_idx of R.range(1, windownSize+1)){
            if(index - w_idx > 0){
                total.push([token, tokens[index - w_idx]]);
            }
            if(index + w_idx < tokens.length){
                total.push([token, tokens[index + w_idx]]);
            }
        }
        return total;
    }
    return R.addIndex(R.reduce)(context,[],tokens);    
}

function contextCounting(tokenContext){
    function MatrixInit(w,h){
        return R.map(()=>R.map(()=>0, R.range(0,h)),R.range(0,w))
    };
    function makeIndexMapper(tokenContext, tokenMapper){
        let tokenList = [...new Set(R.map(([t,c])=>t,tokenContext))];
        return R.fromPairs(R.addIndex(R.map)((t,i)=>[t,i])(tokenList));
    }
    let tokenMapper = makeIndexMapper(tokenContext);
    let length = R.length(R.toPairs(tokenMapper));
    function tokenReducer(total, token){
        let [w, ctx] = token;
        let r = tokenMapper[w], c = tokenMapper[ctx];
        total[r][c] += 1; 
        return total;
    }
    var concurrentMatrix = R.reduce(tokenReducer, MatrixInit(length,length), tokenContext);
    return {concurrentMatrix, tokenMapper};    
}



var allTokens = [], tokenMatrix = null;
async function readDataSet(){
    var corpusReader = fs.createReadStream('../datasets/text8/text8.txt');
    let writer = Stream.makeWritable(writeTokens);
    let transformer = Stream.makeTransform(tranformFn);
    let deletedFiles = await indexDBStorage.deleteFileByPrefix('/corpus/');
    termLogger.log({deletedFiles});
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
};

// readDataSet();

var allTokens = [], tokenMatrix = null;
async function getCoOccurentMatrix(){
    let listFiles = await indexDBStorage.getFileList('/corpus/');
    console.log(listFiles.slice(0,100));
    let getlist = listFiles.slice(0,100)
    for(let lfile of getlist){
        termLogger.log(lfile);
        let tokens = await indexDBStorage.readFile(lfile);
        allTokens = [...allTokens, ...JSON.parse(tokens)];    
    }
    var tokenContext = getWordContext(allTokens, 5);
    var {concurrentMatrix, tokenMapper} = contextCounting(tokenContext);
    fs.writeFileSync('./cooccurent.matrix.json', JSON.stringify(concurrentMatrix));
    fs.writeFileSync('./tokenMapper.json', JSON.stringify(tokenMapper));
};

getCoOccurentMatrix();




