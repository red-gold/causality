import { causalNetMemory as memory} from 'causal-net.memory';
import { causalNetCore } from 'causal-net.core';
(async ()=>{
    const T = causalNetCore.CoreTensor;
    let initTensor = await memory.initMemory([5, 4]);
    initTensor.print();
    let readTensor = await memory.readSlots([0,1,2]);
    readTensor.print();
    let writeTensor = await memory.writeSlots([0,1,2], readTensor.add([1]));
    writeTensor.print();
    let reReadTensor = await memory.readSlots([0,1,2]);
    reReadTensor.print();
    await memory.writeSlots([0,1,2,3,4], T.tensor([[ 1, 2, 3, 4],
                                                   [ 2, 3, 1, 4],
                                                   [-2,-3,-4, 4],
                                                   [ 2, 3, 4, 5],
                                                   [ 2, 3, 4, 5] ]));
    let normTensor = await memory.normalize();
    console.log({normTensor});
    normTensor.print();
    normTensor.mean(1,true).print();
    let matchScoreTensor = await memory.getMatchScore([0]);
    console.log({matchScoreTensor});
    matchScoreTensor.print();
    let topKTensor = await memory.getTopKSimilar([0],2);
    console.log({topKTensor});
    topKTensor.print();
})();
