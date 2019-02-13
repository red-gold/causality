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
                let row = {type:item.type, review: tokens,
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
    let data = await loadCSVCorpus(SmallData);
    console.log({data: data[0]});
    let tokenFreqPairs = R.toPairs(freqTokens);
    let cleanedPairs = R.filter(([token, freq])=>freq>1,tokenFreqPairs);
    let filteredTokens = R.map(([token, freq])=>token, cleanedPairs);
    console.log({tokenFreqPairs: tokenFreqPairs.length, filterTokens: filteredTokens.length});
    let vecMap = {};
    let wordEmbedding = await causalNetWordVec.EN;
    
    for(let token of filteredTokens){
        let vec = await wordEmbedding.transform([token]);
        console.log({token: vec});
        vecMap[token] = vec;
    }
    for(let {tokens} of data){
        R.filter(R.findIndex(filteredTokens, token) > 1)
    }
})();