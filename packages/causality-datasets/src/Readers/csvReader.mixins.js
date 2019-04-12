import { csvUtils } from 'causal-net.utils';
const CSVReaderMixins = ( BaseDataSource ) => class extends BaseDataSource {
    makeCSVReader(baseLink){
        
        if( baseLink.startsWith('http') ){
            return async (fileName) => {
                let data = await csvUtils.fetchBuffer(baseLink + fileName);
                return this.splitSample(data);
            };
        }
        else{
            return async (fileName) => { 
                let data = await csvUtils.readBuffer(baseLink + fileName);
                return this.splitSample(data); 
            };
        }
    }
};

export default CSVReaderMixins;