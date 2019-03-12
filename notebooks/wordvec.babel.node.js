import * as Utils from 'causal-net.utils';
import * as Log from 'causal-net.log';
import * as Preprocessing from 'causal-net.preprocessing';
import * as Memory from 'causal-net.memory';
import { causalNetCore } from 'causal-net.core';
import { causalNetSGDOptimizer } from 'causal-net.optimizers';
import { causalNetModels } from "causal-net.models";
import * as Sampling from 'causal-net.sampling';
import * as fs from 'fs';
var R = causalNetCore.CoreFunction;
var T = causalNetCore.CoreTensor;
var { Loss } = causalNetModels.skipGram();
var { Stream } = Utils;
var { termLogger } = Log;
// import * as Storage from 'causal-net.storage';
// var { indexDBStorage } = Storage;
var { nlpPreprocessing } = Preprocessing;
var { causalNetMemory } = Memory;
var { causalNetSampling } = Sampling; 
var optimizers = causalNetSGDOptimizer;
var corpus = '' + fs.readFileSync('../datasets/text8/text8.txt');
var docs = corpus.split('\n');
// var docs = ['He is the king', 'The king is royal', 'She is the royal queen'];
var docTokens = [];
for(let raw of docs){
    docTokens.push(nlpPreprocessing.tokenize(raw));
}
var rawVocab = R.compose(R.flatten)(docTokens);
//advance processing
var rawToken = nlpPreprocessing.wordFreqCount(rawVocab);
var pairs = R.toPairs(rawToken);
var sortedPairs = R.compose(R.filter(([w,f])=>f>0),R.sortBy(([w,f])=>-f))(pairs);
var [choosePairs, filterPairs] = R.splitAt(15000, sortedPairs);  
termLogger.log({'keep length': choosePairs.length, 'discard': filterPairs.length});
var vocab = R.map(([v,f]) => v, choosePairs);
var vocabCounts = R.map(([v,f]) => f, choosePairs);
var countTotal = R.sum(vocabCounts);
var wFracs = R.map((count)=>count / countTotal, vocabCounts);
var vocabProbs = R.map((frac)=>Math.pow(frac, 3/4), wFracs);
var discardProb = R.map((frac)=>(1 - Math.pow( 1e-7 / frac, 0.5 )), wFracs); 
// console.log({discardProb, wFracs});
var word2int = R.compose(R.fromPairs, R.addIndex(R.map)((w,i)=>[w,i]))(vocab);
var int2word = R.compose(R.fromPairs, R.addIndex(R.map)((w,i)=>[i,w]))(vocab);
console.log([vocab, word2int, int2word]);

function* skipGramContext(docTokens, windowSize, word2int, subSampling=false){
    for(let tokens of docTokens){
        for(let index of R.range(0, tokens.length)){
            let target = tokens[index];
            let targetId = word2int[target];
            let accept = !subSampling || Math.random() > discardProb[targetId];
            // console.log({accept, target, targetId, d: discardProb[targetId]});
            if(targetId !== undefined && accept){
                for(let wid of R.range(-windowSize, windowSize)){
                    let context = tokens[index + wid];
                    let contextId = word2int[context];
                    if(  context !== undefined && contextId && target !== context ){
                        yield [target, context, targetId, contextId];
                    }
                }    
            }
        }    
    }
};

function *batchSampleGenerator(batchSize=5, contextWindownSize=2, negSize=10){
    var trainTargets = [], trainContexts = [], trainNegContexts = [], idx = 0;
    const SampleGen = skipGramContext(docTokens, contextWindownSize, word2int);
    var newSample = true; 
    while(newSample){
        var {value, done} = SampleGen.next();
        newSample = !done;
        if(done){
            yield [trainTargets, trainContexts, trainNegContexts];
            trainTargets = [];
            trainContexts = [];
            trainNegContexts = [];
        }
        else{
            let [target, context, targetId, contextId] = value;
            let nonContextIds = [];//causalNetSampling.negSampling(negSize, [targetId, contextId], vocabProbs); 
            trainTargets.push(targetId);
            trainContexts.push(contextId);
            trainNegContexts.push(nonContextIds);
            if(trainTargets.length >= batchSize){
                yield [trainTargets, trainContexts, trainNegContexts];
                trainTargets = [];
                trainContexts = [];
                trainNegContexts = [];
            }
        }
        
    }
}

const VocabLen = vocab.length, EmbeddingSize = 50;
var UVecs = T.randomNormal([VocabLen + 1, EmbeddingSize]);
var VVecs = T.randomNormal([VocabLen + 1, EmbeddingSize]);

function trainLabel(targetId, contextId, negContextId){
    function loss(UVecs, VVecs){
        let [UEmbed, Ubias] = UVecs.split([VocabLen, 1], 0);
        let [VEmbed, Vbias] = VVecs.split([VocabLen, 1], 0);
        let posU = UEmbed.gather(targetId).reshape([-1, 1, EmbeddingSize]);
        let posV = VEmbed.gather(contextId).reshape([-1, EmbeddingSize, 1]); 
        let pos = posU.matMul(posV).logSigmoid().mean();
        for(let bId of R.range(0, targetId.length)){
            let negU = UEmbed.gather(R.repeat(targetId[bId], negContextId[bId].length))
                                .reshape([-1, 1, EmbeddingSize]);
            let negV = VEmbed.gather(negContextId[bId])
                                .reshape([-1, EmbeddingSize, 1]);
            pos.add(negU.matMul(negV).neg().logSigmoid().mean());
        }
        let logProb = pos.neg().mean();
        logProb.print();
        return logProb;
    }
    T.tidy(()=>{
        const lr = 0.1;
        let grad = T.grads(loss);
        let [gUvecs, gVVecs] =  grad([UVecs, VVecs]);
        gUvecs.sum().print();
        gVVecs.sum().print();
        let _UVecs = T.keep(UVecs.sub(gUvecs.mul(lr)));
        UVecs.dispose();
        UVecs = _UVecs;
        let _VVecs = T.keep(VVecs.sub(gVVecs.mul(lr)));
        VVecs.dispose();
        VVecs = _VVecs;
    });

    
}

async function checkTopMatch(words, UVecs, k=3){
    T.tidy(()=>{
        var embedding = UVecs.split([VocabLen, 1], 0)[0];
        function normalize(vecs){
            let meanTs = vecs.mean(1, true);
            let stdTs = vecs.sub(meanTs).pow(2).mean(1, true).pow(0.5);
            return vecs.sub(meanTs).div(stdTs);    
        }
        function getMatchScore(slotIdxs, normVecs){
            let cTs = normVecs.gather(slotIdxs);
            let similarityScore = normVecs.dot(cTs.transpose());
            return similarityScore;
        }
        let norms = normalize(embedding);
        for(let w of words){
            let wid = word2int[w];
            let matchScores = getMatchScore([wid], norms);
            let {values, indices} = matchScores.transpose().topk(k);
            indices.data().then(idxs=>{
                let [targetW, ...similarWs] = Array.from(idxs).map(i=>int2word[i]);
                console.log(`[${targetW}\t] is closest to: ${similarWs.join(', ')}`)        
            });
        }
    });
    
}
const BATCHSIZE = 512, NEGSIZE=20, CONTEXTWINDOWN=2;
async function training(){
    await checkTopMatch(vocab.slice(0,10), UVecs, 7);
    
    var progress = {start: new Date()}
    for(let epoch of R.range(0,5)){
        var trainGenerator = batchSampleGenerator(BATCHSIZE, CONTEXTWINDOWN, NEGSIZE, true);
        let iter = 0;
        for(let [trainTargets, trainContexts, trainNegContexts] of trainGenerator){
            progress.elapse = new Date() - progress.start;
            progress.epoch = epoch;
            let posIds = Array.from(new Set([...R.flatten(trainTargets), ...R.flatten(trainContexts)]));
            trainNegContexts = R.splitEvery(NEGSIZE, causalNetSampling.negSampling(BATCHSIZE*NEGSIZE, posIds, vocabProbs, false)); 
            console.log({ ...progress,
                          pos: posIds.length, 
                          neg: R.flatten(trainNegContexts).length,
                          uniqNeg: R.uniq(R.flatten(trainNegContexts)).length,
                          collide: R.intersection(posIds, R.flatten(trainNegContexts)) });
            trainLabel(trainTargets, trainContexts, trainNegContexts);
            if(iter >= 100){
                console.log('...................................');
                console.log(T.memory().numTensors + " tensors");
                await checkTopMatch(vocab.slice(0,10), UVecs, 7);
                console.log('...................................');
                iter = 0;
            }
            else{
                iter += 1;
            }
            
        }
    }
}
training();