import { Tensor } from 'causal-net.core';
class BaseSupervisedModel extends Tensor{
    constructor(){
        super();
        this.modelName = '';
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

export default BaseSupervisedModel;