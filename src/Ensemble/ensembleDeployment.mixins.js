const EnsembleDeploymentMixins = (BasePipelineClass)=> class extends BasePipelineClass {
   

    get EnsembleInferencer(){
        const ModelLense = ()=>({ EnsemblePredict: this.EnsembleModelPredict });
        
        const T = this.T;
        return async (input)=>{
            let { EnsemblePredict } = input;
            let infer = {};
            const Model = ModelLense();
            if(EnsemblePredict){
                let inputTensor = T.tensor(EnsemblePredict).asType('float32').reshape([1, -1]);
                let predictTensor = await Model.EnsemblePredict(inputTensor);
                infer.EnsemblePredict = await predictTensor.data();
            }
            return infer;
        };
    }

    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.Logger.groupBegin('set ensemble deployment by config');
        this.Deployment.EnsembleInferencer = this.EnsembleInferencer;
        this.Logger.groupEnd();
        return pipelineConfig;
    }

    async deploy(){
        return await this.Deployment.deploy();
    }
};

export default EnsembleDeploymentMixins;