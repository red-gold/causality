import { CausalNet, Storage, Log, Utils } from '../../src/index';
import { nlpPreprocessing } from 'causal-net.preprocessing';
import { causalNetWordVec } from 'causal-net.representation';
import { causalNetCore } from 'causal-net.core';
const { termLogger } = Log;
const { CSV }  = Utils;
const R = causalNetCore.CoreFunction;
import * as fs from 'fs';
console.log({CSV});
let freqTokens = {};
const updateTokens = (tokens)=>{
    tokens.forEach(token=>{
        if(freqTokens[token]){
            freqTokens[token] += 1;
        }
        else{
            freqTokens[token] = 1;
        }
    });
}
function loadCSVCorpus(filePath){
    return new Promise((resolve, reject)=>{
        let results = [], vocabTokens = [];
        fs.createReadStream(filePath)
            .pipe(CSV())
            .on('headers', (headers) => {
                console.log(`First header: ${headers}`)
            })
            .on('data', (item)=>{
                let tokens = nlpPreprocessing.tokenize(item.review);
                updateTokens(tokens);
                let row = {type:item.type, review: item.review,
                           label: item.label, tokens: tokens };
                termLogger.progress({current: results.length, total: results.length});
                results.push(row);
            })
            .on('end', () => {
            resolve(results);
        });
    });
}

(async ()=>{
    const FullData = './datasets/IMDB_dataset/imdb_master.csv';
    const SmallData = './datasets/IMDB_dataset/smallSample.csv';
    let data = await loadCSVCorpus(FullData);
    let tokenFreqPairs = R.toPairs(freqTokens);
    let cleanedPairs = R.filter(([token, freq])=>freq>1,tokenFreqPairs);
    let validTokens = R.map(([token, freq])=>token, cleanedPairs);
    console.log({tokenFreqPairs: tokenFreqPairs.length, validTokens: validTokens.length});
    
    let trainSamples = [], testSamples = [];
    
    const isValid = (token)=>validTokens.indexOf(token)>-1;
    let wordEmbedding = await causalNetWordVec.EN, labelCount = {pos: 0, neg: 0};
    for(let sample of data){
        let label = sample.label;
        let type = sample.type;
        sample.validTokens = R.filter(isValid)(sample.tokens);
        sample.docVec = await wordEmbedding.sentenceEncode(sample.validTokens);
        if(label==='neg'){
            sample.encodedLabel = [ 0, 1];
            labelCount.neg += 1;
        }
        else{
            sample.encodedLabel = [ 1, 0];
            labelCount.pos += 1;
        }
        
        if( type === 'train'){
            trainSamples.push(sample);
        }
        else{
            testSamples.push(sample);
        }
    }
    console.log({ trainLength: trainSamples.length, testLength: testSamples.length, labelCount });
    
    // for(let token of filteredTokens){
    //     
    //     console.log({token: vec});
    //     vecMap[token] = vec;
    // }
    // let trainSet = [], testSet = [];
    // for(let {tokens} of data){
        
    // }
})();