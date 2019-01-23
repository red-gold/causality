const PipelineHyperParametersMixins = (PipelineClass)=> class extends PipelineClass{
    constructor(netConfig){
        super();
        this.storage = indexDBStorage;
        this.saveModelDir = '/saveModel/';
        this.HyperParameters = this.F.getHyperParameter(netConfig);
    }
};
export default PipelineHyperParametersMixins;