import { causalNetMemory as memory} from 'causal-net.memory';
import { termLogger } from 'causal-net.log';
(async ()=>{
    let Vocab = {
        words: {'a':0,'b':1,'c':2},
        iwords: {'0':'a','1':'b','2':'c'},
        freqs: [0.1, 0.2, 0.3],
        indexToWord: (idxs, iwords=Vocab.iwords)=>{
            console.log({idxs});
            return idxs.map((idx)=>iwords[idx]);
        },
        wordToIndex: (ws, words=Vocab.words)=>{
            return ws.map((w)=>words[w]);
        }
    };
    termLogger.log(Vocab.indexToWord([1,2]));
    termLogger.log(Vocab.wordToIndex(['a','b']));
    let initTensor = await memory.initMemory([10, 2]);
    initTensor.print();
    let normTensor = await memory.normalize();
    normTensor.mean(1,true).print();
    let matchScoreTensor = await memory.getMatchScore([0,1]);
    matchScoreTensor.print();
    let readTensor = await memory.readSlots([0,1,2]);
    readTensor.print();
    let writeTensor = await memory.writeSlots([0,1,2], readTensor.add([1]));
    writeTensor.print();
    let reReadTensor = await memory.readSlots([0,1,2]);
    reReadTensor.print();
    let topKTensor = await memory.getTopKSimilar([1],2);
    topKTensor.print();
    let topks = Array.from(await topKTensor.data());
    termLogger.log(Vocab.indexToWord(topks));
})();
