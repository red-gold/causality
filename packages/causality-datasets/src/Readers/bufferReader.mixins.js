import { bufferUtils } from 'causal-net.utils';
const BufferReaderMixins = ( BaseDataSource ) => class extends BaseDataSource {
    makeBufferReader(baseLink){
        
        if( baseLink.startsWith('http') ){
            return async (fileName) => {
                let data = await bufferUtils.fetchBuffer(baseLink + fileName);
                return this.splitSample(data);
            };
        }
        else{
            return async (fileName) => { 
                let data = await bufferUtils.readBuffer(baseLink + fileName);
                return this.splitSample(data); 
            };
        }
    }
};

export default BufferReaderMixins;