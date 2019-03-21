const PipelineBaseMixins = (PipelineClass)=> class extends PipelineClass{
    set BasePipeline(basePipeline){
        this.basePipeline = basePipeline;
    }
    get BasePipeline(){
        this.basePipeline;
    }
    setBasePipelineByConfig(netConfig){
        if(!netConfig.Pipeline){
            throw Error('Pipeline must be define inside netConfig');
        }
        this.basePipeline = netConfig.Pipeline;
    }
};
export default PipelineBaseMixins;