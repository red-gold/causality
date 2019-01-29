import { Function as BaseFunction } from 'causal-net.core';
import { Platform } from 'causal-net.utils';
import { ItemNormalizing, NullItemReplace } from './Tabular/index';
class TabularPreprocessing extends Platform.mixWith(BaseFunction, 
    [ ItemNormalizing, NullItemReplace ]){
    constructor(){
        super();
    }
}

export default new TabularPreprocessing;