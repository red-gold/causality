
import { Sampling } from 'causal-net.utils';
const ImageDatasetFetchMixins = (BaseImageClass)=> class extends BaseImageClass{ 
    async fetchLabelChunk(saveDir, labelChunk){
        let labelChunkUrl = this.configuration.datasetUrl + labelChunk;
        let labelSavePath = saveDir + labelChunk;
        return await this.storage.fetchFile(labelChunkUrl, labelSavePath);
    }

    async fetchSampleChunk(saveDir, sampleChunk){
        let sampleChunkUrl = this.configuration.datasetUrl + sampleChunk;
        let sammpleSavePath = saveDir + sampleChunk;
        this.logger.debug({sampleChunkUrl, sammpleSavePath});
        return await this.storage.fetchPNGFile(sampleChunkUrl, sammpleSavePath);
    }

    selectChunks(numchunks, selectBy='random'){
        let chunkIdxs = Sampling.choice(this.configuration.chunkList, numchunks);
        return chunkIdxs.map((idx, ith)=>([`data-chunk-${idx}.png`,`label-chunk-${idx}`]));
    }

    async fetchDataset(saveDir='/mnist/',numchunks=10, selectBy='random'){
        let selectedChunks = this.selectChunks(numchunks, selectBy);
        this.savedChunks = [];
        for(let [sampleChunk, labelChunk] of selectedChunks){
            let samplePath = await this.fetchSampleChunk(saveDir, sampleChunk);
            let labelPath = await this.fetchLabelChunk(saveDir, labelChunk);
            this.savedChunks.push([samplePath, labelPath]);
            this.progress({saveChunks:[samplePath, labelPath]});
        };
        return this.F.unzip(this.savedChunks);
    }
};
export default ImageDatasetFetchMixins;