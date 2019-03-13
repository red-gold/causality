
const DenseLayerMixins = (PipelineClass)=> class extends PipelineClass{
    /**
     * Simple dense layer
     * @param { String } name - layer name
     * @param { Number } inputSize - size of net input
     * @param { Number } outputSize - size of net output
     * @returns { Object } layer
     */
    dense(name, inputSize, outputSize){
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