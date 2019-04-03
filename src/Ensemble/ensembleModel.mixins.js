const EnsembleModelMixins = (PipelineClass)=> class extends PipelineClass{ 
    get EnsembleModelPredict(){
        const FitModel = this.FitModel;
        const T = this.T;
        const EnsembleModels = this.EnsembleModels;
        const Bagging = async (inputTensor)=>{
            let probFits = [];
            
            console.log({EnsembleModels, inputTensor});
            for(let model of EnsembleModels){
                await this.loadParams(model);
                let prob = FitModel(inputTensor).exp();
                console.log({model});
                prob.print();
                probFits.push(prob);
            }
            let meanProb = T.stack(probFits).mean(0);
            meanProb.argMax(1).print();
            return meanProb.argMax(1);
        };
        return Bagging;   
    }

    set EnsembleModels(modelist){
        this.ensembleModels = modelist;
    }
    get EnsembleModels(){
        if(!this.ensembleModels){
            throw Error('EnsembleModels is not set');
        }
        
        return this.ensembleModels;
    }
};
export default EnsembleModelMixins;