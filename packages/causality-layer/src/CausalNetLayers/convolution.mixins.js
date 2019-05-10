const ConvolutionMixins = (PipelineClass)=> class extends PipelineClass{
    /**
     * Convolutional layer
     * @param {Number} inputSize - size of net input
     * @param {Array} kernelSize - size of net output
     * @param {String|Function} activator - activator function can be customed or get from built-in by string name
     * @param {String} name - layer name, default by null
     * @returns { Object } layer
     */
    convolution({ kernelSize, filters, 
                  strides=1, padding='same',
                  dilations=[1,1], flatten=false, 
                  activator='sigmoid', name=null}){
        if(!name){
            name = this.nameGenerator('convolution');
        }
        const FConv = this.T.conv2d;
        const shapeType = 'NHWC';
        return { 
            Name: name, Type: 'Layer',
            Config: {kernelSize, filters, strides, padding, dilations, flatten, activator, name, shapeType},
            Parameters: { Kernel: [...kernelSize, ...filters] },
            Net: (value, params)=>{
                    let trace = {};
                    let { Kernel } = params;
                    let result = FConv(value, Kernel, strides, padding, shapeType, dilations);
                    if(typeof activator === "string"){
                        result = result[activator]();
                    }
                    else{
                        result = activator(result);
                    }  
                    if(flatten){
                        const [B, W, H, C] = result.shape;
                        result = result.reshape([B, -1]);
                    }
                    return { result, trace };
                }
            };
    }
};
export default ConvolutionMixins;