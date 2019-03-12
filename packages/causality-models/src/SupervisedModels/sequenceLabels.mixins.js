const SequenceLabelsMixins = (basePipelineClass)=> class extends (basePipelineClass){
    Decoder(){
        throw Error('implement required');
    }

    CTCDecode(){
        throw Error('implement required');
    }
};

export default SequenceLabelsMixins;