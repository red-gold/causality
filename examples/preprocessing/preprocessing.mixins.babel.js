import { PreprocessingMixins,
         causalNetPreprocessingStream } from 'causal-net.preprocessing';
import { causalNetCore, Functor as BaseFunctor } from 'causal-net.core';
import { platform } from 'causal-net.utils';
import { termLogger, LoggerMixins } from 'causal-net.log';

const R = causalNetCore.CoreFunctor;
const sampleTransformer = R.splitEvery(2);
const labelTransformer = R.splitEvery(1); 

const PipeLineConfigure = {
    Dataset: {
        Preprocessing: {
            SampleTransformer: sampleTransformer,
            LabelTransformer: labelTransformer
        }
    }
};


class SimpleDataset extends platform.mixWith( 
    BaseFunctor, 
    [ PreprocessingMixins, LoggerMixins ]){
    constructor(preprocessing, logger){
        super();
        this.Preprocessing = preprocessing;
        this.Logger = logger;
    }
}
(async ()=>{
    let dataset = new SimpleDataset(causalNetPreprocessingStream, termLogger);
    console.log(dataset.Preprocessing);
    dataset.setByConfig(PipeLineConfigure);
    const dataHandler = dataset.Preprocessing.DataHandler;
    await dataHandler( { ChunkName: 'chunk0', 
                            Sample: [0, 1, 2, 3, 4, 5, 6, 7], 
                             Label: [0, 1, 0, 1] } );
    console.log( causalNetPreprocessingStream.PreprocessingData );
})();


