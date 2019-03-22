const DenseLayerMixins = (PipelineClass)=> class extends PipelineClass{
    /**
     * Simple dense layer
     * @param { Number } inputSize - size of net input
     * @param { Number } outputSize - size of net output
     * @param { String } name - layer name
     * @returns { Object } layer
     */
    dense(inputSize, outputSize, name){
        if(!name){
            name = this.nameGenerator('dense');
        }
        return { 
            Name: name, Type: 'Layer',
            Parameters: { Weight: [inputSize, outputSize], Bias: [outputSize] },
            Net: function(value, params){
                    let {Weight, Bias} = params;
                    let result = value.dot(Weight).add(Bias);
                    return result;
                }
            };
    }
};
export default DenseLayerMixins;