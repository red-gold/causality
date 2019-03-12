import { StorageMixins, indexDBStorage, BaseStorage } from 'causal-net.storage';
import { Platform } from 'causal-net.utils';
import { Tensor } from 'causal-net.core';
console.log(indexDBStorage instanceof BaseStorage);
class SimplePipeline extends Platform.mixWith(Tensor, [StorageMixins]){
    constructor(){
        super();
        this.Storage = indexDBStorage;
    }
}
let pipeline = new SimplePipeline();
console.log(pipeline.Storage);