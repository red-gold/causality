import { indexDBStorage } from 'causal-net.storage';
const PipelineStorageMixins = (PipelineClass)=> class extends PipelineClass{
    constructor(netConfig){
        super();
        this.storage = indexDBStorage;
    }

    set Storage(storage){
        this.storage = storage;
    }

    get Storage(){
        return this.storage;
    }
};
export default PipelineStorageMixins;