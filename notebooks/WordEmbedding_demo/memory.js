import { Tensor, causalNetCore } from 'causal-net.core';
export default class Memory extends Tensor{
    constructor(){
        super();
        this.memorySlots = [];
        this.R = causalNetCore.CoreFunction;
    }
    get Size(){
        return this.size;
    }
    set Size(size){
        this.size = size;
    }
    initSlots(numSlot){
        const size = this.Size, R = this.R;
        for(let slotIdx of R.range(0, numSlot)){
            console.log(slotIdx);
            this.memorySlots.push(this.T.randomNormal([size]));
        }
    }

    normalize(){
        let allTs = this.T.stack(this.memorySlots);
        let meanTs = allTs.mean(1, true);
        let stdTs = allTs.sub(meanTs).pow(2).mean(1, true).pow(0.5);
        stdTs.print();
        return allTs.sub(meanTs).div(stdTs);    
    }

    getMatchScore(slotIdxs){
        let normTs = this.normalize();
        let cTs = normTs.gather(slotIdxs);
        let similarityScore = normTs.dot(cTs.transpose());
        return similarityScore;
    }

    getTopKSimilar(slotIdxs, k){
        const {values, indices} = this.getMatchScore(slotIdxs).transpose().topk(k);
        return indices;
    }
    
    updateSlot(slotIdx, tensor){    
        this.memorySlots[slotIdx] = tensor;
    }
    getSlot(slotIdx){
        return this.memorySlots[slotIdx];
    }
}

let mem = new Memory();
mem.size = 5;
mem.initSlots(10);
mem.normalize().mean(1,true).print();
mem.getMatchScore([0,1]).print();
mem.getTopKSimilar([0,1],2).print();
export default Memory;