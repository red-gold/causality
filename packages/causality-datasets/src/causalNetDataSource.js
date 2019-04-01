import { EventEmitter } from 'events';
import { default as functor } from './functor';
import { platform, jsonUtils } from 'causal-net.utils';
import { causalNetSampling, SamplingMixins } from 'causal-net.sampling';
import { PNGReaderMixins, BufferReaderMixins } from './Readers/init';

class CausalNetDataSource extends platform.mixWith( EventEmitter, [
    SamplingMixins, PNGReaderMixins, BufferReaderMixins ] ){
    
    constructor(functor, sampling){
        super();
        this.F = functor;
        this.R = functor.CoreFunctor;
        this.Sampling = sampling;
    }

    async connect(baseLink){
        let descriptionLink = baseLink + '/dataset.summary.json';
        this.description = await this.query(descriptionLink);
        this.description.BaseLink = baseLink;
        this.setChunks(this.description);
        this.setDataReader(this.description);
        return this.description;
    }
    

    /**
     * fetch or read configure depends on provied link format
     * @private
     * @param {*} link
     * @returns
     * @memberof CausalNetEmbedding
     */
    async query(link){
        if(link.startsWith('http')){
            return await jsonUtils.fetchJson(link);
        }
        else{
            return await jsonUtils.readJSON(link);
        }
    }

    get DataChunks(){
        return this.dataChunks;
    }

    get SampleReader(){
        return this.sampleReader;
    }

    get LabelReader(){
        return this.labelReader;
    }

    setChunks(description){
        const SampleChunkName = description.SampleChunkName;
        const LabelChunkName = description.LabelChunkName;
        let chunkList= description.ChunkList;
        this.dataChunks = chunkList.map( cidx=> {
                return {  Sample: SampleChunkName.replace('{}', cidx),
                          Label: LabelChunkName.replace('{}', cidx)  };
            });
    }
    
    setDataReader(description){
        const SampleType = description.SampleType;
        const LabelType = description.LabelType;
        const BaseLink = description.BaseLink;
        if(SampleType === 'Image/PNG'){
            this.sampleReader = this.makePNGReader(BaseLink);
        }
        if(LabelType === 'Buffer/OneHot'){
            this.labelReader = this.makeBufferReader(BaseLink);
        }
    }

    splitSample(data){
        const SamplePerChunk = this.description.SamplePerChunk;
        const sampleSize = data.length / SamplePerChunk;
        return this.R.splitEvery(sampleSize, data);
    }

    selectChunks(numChunks){
        let chunkList = this.DataChunks;
        let selectChunks = this.Sampling.subSampling(numChunks, chunkList, false);
        return selectChunks;
    }
};

export default new CausalNetDataSource(functor, causalNetSampling);