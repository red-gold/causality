const EvaluatorMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    
    get TestDataGenerator(){
        if(!this.testDataGenerator){
            throw Error('testDataGenerator is not set');
        }
        return this.testDataGenerator;
    }
    set TestDataGenerator(testDataGenerator){
        this.testDataGenerator = testDataGenerator;
    }

    async test(batchSize=32){
        const T = this.T, R = this.F.CoreFunctor;
        const TestDataGenerator = this.TestDataGenerator, OneHotPredictModel = this.OneHotPredictModel;
        return new Promise(async (resolve, reject)=>{
            const testData = TestDataGenerator(batchSize);    
            let pass = [];
            for await (let { samples, labels } of testData){
                let sampleTensor = T.tensor(samples).asType('float32');
                let labelTensor = T.tensor(labels).asType('float32');
                let predictLabelTensor = OneHotPredictModel(sampleTensor);
                let correctPredicts = predictLabelTensor.mul(labelTensor);
                pass = [...pass, ... await correctPredicts.sum(1).data()];
            }
            let accuracy = R.mean(pass);
            resolve({accuracy, pass});     
        });
    }


    setByConfig(pipelineConfig){
        if(super.setByConfig){
            super.setByConfig(pipelineConfig);
        }
        this.logger.groupBegin('set Evaluator by config');
        this.TestDataGenerator = pipelineConfig.Dataset.TestDataGenerator;
        this.logger.groupEnd();
    }
};

export default EvaluatorMixins;