const LayerMixins = (BasePipelineClass)=> class extends BasePipelineClass{
    get Layer(){
        this.layer;
    }
    set Layer(layer){
        this.layer = layer;
    }
};

export default LayerMixins;