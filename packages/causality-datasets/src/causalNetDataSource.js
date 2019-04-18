import { Event } from 'causal-net.core';
import { default as functor } from './functor';
import { platform, jsonUtils } from 'causal-net.utils';
import { causalNetSampling, SamplingMixins } from 'causal-net.sampling';
import { PNGReaderMixins, BufferReaderMixins, CSVReaderMixins } from './Readers/init';
import { termLogger, LoggerMixins } from 'causal-net.log';
/**
 * This CausalNetDataSource class provides a standard implementation for pipeline Source.
 * { mixWith: [ SamplingMixins, PNGReaderMixins, BufferReaderMixins ]}
 * @class CausalNetDataSource
 * @extends Event
 * @experiment
 * @example
 * [EXAMPLE ../examples/causalNetDataSource.js]
 */
class CausalNetDataSource extends platform.mixWith( Event, [
    SamplingMixins, PNGReaderMixins, CSVReaderMixins, LoggerMixins, BufferReaderMixins ] ){
    /**
     *Creates an instance of CausalNetDataSource.
     * @param {Functor} functor
     * @param {Functor} sampling
     * @memberof CausalNetDataSource
     */
    constructor(functor, logger, sampling){
        super();
        this.F = functor;
        this.R = functor.CoreFunctor;
        this.Logger = logger;
        this.Sampling = sampling;
    }

    async connect(baseLink){
        if(!baseLink){
            throw Error(`expect baseLink get ${JSON.stringify(baseLink)}`);
        }
        let descriptionLink = baseLink + '/dataset.summary.json';

        this.Logger.groupBegin('query datasource');
        this.Logger.log({descriptionLink});
        
        this.description = await this.query(descriptionLink);
        this.description.BaseLink = baseLink;
        this.setChunks(this.description);
        this.setDataReader(this.description);
        this.setSampleSize(this.description);
        this.Logger.groupEnd();
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
            return await jsonUtils.fetchJSON(link);
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

    get DataReader(){
        return this.dataReader;
    }

    get SampleSize(){
        if(!this.sampleSize){
            throw Error('SampleSize is not set');
        }
        return this.sampleSize;
    }

    setSampleSize(description){
        let { SampleSize } = description;
        if(!SampleSize){
            throw Error(`expect { SampleSize }  get ${JSON.stringify(description, null, 4)}`);
        }
        if(Array.isArray(SampleSize)){
            this.sampleSize = SampleSize.reduce((s,d)=>s*d);
        }
        else{
            this.sampleSize = SampleSize;
        }
        
    }

    setChunks(description){
        const { SampleChunkName, LabelChunkName, ChunkList } = description;
        if(!SampleChunkName || !LabelChunkName || !ChunkList ){
            throw Error(`expect {SampleChunkName, LabelChunkName, ChunkList} get ${JSON.stringify(description)}`);
        }
        this.dataChunks = ChunkList.map( cidx=> {
                return {  ChunkName: cidx,
                          Sample: SampleChunkName.replace('{}', cidx),
                          Label: LabelChunkName.replace('{}', cidx)  };
            });
    }
    
    setDataReader(description){
        const SampleType = description.SampleType;
        const LabelType = description.LabelType;
        const DataType = description.DataType;
        const BaseLink = description.BaseLink;
        if(SampleType === 'Image/PNG'){
            this.sampleReader = this.makePNGReader(BaseLink);
        }
        if(LabelType === 'Buffer/OneHot'){
            this.labelReader = this.makeBufferReader(BaseLink);
        }
        const SampleAttributes = description.SampleAttributes;
        const LabelAttributes = description.LabelAttributes;
        if(SampleType === 'Text/CSV'){
            this.sampleReader = this.makeCSVReader(BaseLink, SampleAttributes, null);
        }
        if(LabelType === 'Text/CSV'){
            this.labelReader = this.makeCSVReader(BaseLink, null, LabelAttributes);
        }
        if(DataType === 'Text/CSV'){
            this.dataReader = this.makeCSVReader(BaseLink, SampleAttributes, LabelAttributes);
        }
    }

    splitSample(data){
        const SampleSize = this.SampleSize;
        return this.R.splitEvery(SampleSize, data);
    }

    chunkSelect(numChunks){
        let chunkList = this.DataChunks;
        this.selectedChunks = this.Sampling.subSampling(numChunks, chunkList, false);
        return this.selectedChunks;
    }

    read(){
        if(!this.selectedChunks){
            throw Error('selectChunks is not call');
        }
        let selectedChunks = this.selectedChunks;
        const SampleReader = this.SampleReader;
        const LabelReader = this.LabelReader;
        const DataReader = this.DataReader;
        return new Promise(async (resolve, reject)=>{
            for(let { Sample, Label, ChunkName } of selectedChunks ){
                if(Sample === Label){
                    var [sampleData, labelData] = await DataReader(Sample);
                }
                else{
                    var sampleData = await SampleReader(Sample);
                    var labelData = await LabelReader(Label);
                }
                
                if(sampleData.length !== labelData.length){
                    reject('lengths of sample and label are not the same');
                }
                console.log({'read': [sampleData.length, labelData.length]});
                await this.emit('data', { 'Sample': sampleData, 'Label': labelData,  ChunkName });
            }
            resolve(selectedChunks.length);
        });
    }
};

export default new CausalNetDataSource(functor, termLogger, causalNetSampling);