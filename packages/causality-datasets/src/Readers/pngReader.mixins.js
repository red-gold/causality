import { pngUtils } from 'causal-net.utils';
const PNGReaderMixins = ( BaseDataSource ) => class extends BaseDataSource {
    makePNGReader(baseLink){
        if( baseLink.startsWith('http') ){
            return async (fileName) => { 
                let data = await pngUtils.fetchPNG(baseLink + fileName); 
                return this.splitSample(data);
            };
        }
        else{
            return async (fileName) => { 
                let data = await pngUtils.readPNG(baseLink + fileName);
                return this.splitSample(data); 
            };
        }
    }
};

export default PNGReaderMixins;