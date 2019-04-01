
const DeployMixins = ( PipelineClass )=> class extends PipelineClass{ 
    set Deployment(deployment){
        if(!deployment){
            
        }
        this.deployment = deployment;
    }
    get Deployment(){
        if(!this.deployment){
            throw Error('deployment is not set');
        }
        return this.deployment;
    }
    async deploy(){

    }

    setByConfig(pipelineConfig){
        if(super.setByConfig(pipelineConfig)){
            
        }
        const { Deployment } = pipelineConfig;
        this.Deployment = Deployment;
    }
}

export default DeployMixins;