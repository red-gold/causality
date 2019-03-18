class BaseSupervisedModel{
    constructor(){
        this.modelName = '';
    }
    fit(){
        throw Error('implement required');
    }

    loss(){
        throw Error('implement required');
    }

    encode(){
        throw Error('implement required');
    }

    decode(){
        throw Error('implement required');
    }
}

export default BaseSupervisedModel;