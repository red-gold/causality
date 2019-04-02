const DeploymentMixins = (BasePipelineClass)=> class extends BasePipelineClass {
   
    set Deployment(deployment){
        this.deployment = deployment;
    }

    get Deployment(){
        if(!this.deployment){
            throw Error('deployment is not set');
        }
        return this.deployment;
    }

    get Inferencer(){
        const ModelLense = ()=>{
            return this.Model;
        }
        const T = this.T;
        return async (input)=>{
            let {Predict, Encode, Decode} = input;
            let infer = {};
            const Model = ModelLense();
            if(Predict !== undefined){
                let inputTensor = T.tensor(input).asType('float32').reshape([1, -1]);
                let predictTensor = Model.Predict(inputTensor);
                infer.Predict = await predictTensor.data();
            }
            if(Encode !== undefined){
                let inputTensor = T.tensor(input).asType('float32').reshape([1, -1]);
                let predictTensor = Model.Encode(inputTensor);
                infer.Encode = await predictTensor.data();
            }
            if(Decode !== undefined){
                let inputTensor = T.tensor(input).asType('float32').reshape([1, -1]);
                let predictTensor = Model.Encode(inputTensor);
                infer.Decode = await predictTensor.data();
            }
            return infer;
        }
    }

    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.Logger.groupBegin('deployment');
        const { Emitter, Listener } = pipelineConfig.Deployment;
        this.Deployment.Emitter = Emitter;
        this.Deployment.Listener = Listener;
        this.Deployment.Inferencer = this.Inferencer;
        this.Logger.groupEnd();
        return pipelineConfig;
    }

    async deploy(){
        return await this.Deployment.deploy();
    }
};

export default DeploymentMixins;