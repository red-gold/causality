import { tabularPreprocessing } from 'causal-net.preprocessing';
import { termLogger } from 'causal-net.log';
(()=>{
    termLogger.log(tabularPreprocessing.oneHotEncode('cat0', [ 'cat0', 'cat1' ] ));
    termLogger.log(tabularPreprocessing.oneHotEncode('cat1', [ 'cat0', 'cat1' ] ));
    termLogger.log(tabularPreprocessing.oneHotEncode('cat2', [ 'cat0', 'cat1' ] ));
})();
