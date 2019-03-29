import { causalNetPreprocessingStream } from 'causal-net.preprocessing';
import { causalNetCore, Functor } from 'causal-net.core';

(async ()=>{
    const R = causalNetCore.CoreFunctor;
    const sampleTransformer = R.splitEvery(2);
    const labelTransformer = R.splitEvery(1); 
    causalNetPreprocessingStream.SampleTransformer = sampleTransformer;
    causalNetPreprocessingStream.LabelTransformer = labelTransformer;
    const dataHandler = causalNetPreprocessingStream.DataHandler;
    await dataHandler( { ChunkName: 'chunk0', 
                         Sample: [0, 1, 2, 3, 4, 5, 6, 7], 
                         Label: [0, 1, 0, 1] } );
    console.log( causalNetPreprocessingStream.PreprocessingData );
    console.log( causalNetPreprocessingStream.splitDataset(0.5) );
    const TrainDataGenerator = causalNetPreprocessingStream.TrainDataGenerator;
    for await (let {samples, labels} of TrainDataGenerator(2)){
        console.log({samples, labels});
    }
    const TestDataGenerator = causalNetPreprocessingStream.TestDataGenerator;
    for await (let {samples, labels} of TestDataGenerator(1)){
        console.log({samples, labels});
    }
})().catch(console.err);