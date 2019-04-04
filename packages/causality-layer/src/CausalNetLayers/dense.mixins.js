const DenseLayerMixins = (PipelineClass)=> class extends PipelineClass{
    /**
     * Simple dense layer
     * @param {Number} inputSize - size of net input
     * @param {Number} outputSize - size of net output
     * @param {String|Function} activator - activator function can be customed or get from built-in by string name
     * @param {String} name - layer name, default by null
     * @returns { Object } layer
     */
    dense(inputSize, outputSize, activator='sigmoid',name=null){
        if(!name){
            name = this.nameGenerator('dense');
        }
        return { 
            Name: name, Type: 'Layer',
            Parameters: { Weight: [inputSize, outputSize], Bias: [outputSize] },
            Net: (value, params)=>{
                    let trace = {};
                    let {Weight, Bias} = params;
                    let result = value.dot(Weight).add(Bias);
                    
                    if(typeof "activator" === "string"){
                        result = result[activator]();
                    }
                    else{
                        result = activator(result);
                    }   
                    return { result, trace };
                }
            };
    }
};
export default DenseLayerMixins;