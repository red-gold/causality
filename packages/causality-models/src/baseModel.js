import { Tensor } from 'causal-net.core';
class BaseModel extends Tensor{
    constructor(){
        super();
        this.modelName = '';
    }

    set LayerRunner(runner){
        throw Error('implement required');
    }

    get LayerRunner(){
        throw Error('implement required');
    }

    fit(){
        throw Error('implement required');
    }

    loss(){
        throw Error('implement required');
    }

    predict(){
        throw Error('implement required');
    }
    oneHotPredict(){
        throw Error('implement required');
    }
}

export default BaseModel;