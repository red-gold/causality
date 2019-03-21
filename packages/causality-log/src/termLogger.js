import { default as BaseLogger } from './baseLogger';
import { default as LogNodeMixins } from './termLogger.mixins.node';
import { default as LogWebMixins } from './termLogger.mixins.web';
import { platform } from 'causal-net.utils';
/**
 * This TermLogger provide isomorphic logger
 * { mixWith : { 'node': [LogNodeMixins], 'web': [WebNodeMixins] } }
 * @class TermLogger
 * @extends BaseLogger
 * @example
 * [EXAMPLE ../examples/log.babel.js]
 */
class TermLogger extends platform.mixWith(BaseLogger, 
        { node:[LogNodeMixins], 
          web:[LogWebMixins] } ){
    constructor(){
        super();
        /**@private { Array } stack of groups */
        this.groupStack = [];
    }
    
    groupBegin(name){   
        let group = {name, beginTime: new Date()};
        this.groupStack.push(group);
        let indentSpace = '';
        this.log(`${indentSpace}${group.name}: begin at ${group.beginTime}`);
    }
    groupEnd(){
        if(this.groupStack.length > 0){
            let group = this.groupStack.pop();
            let indentSpace = '';
            this.log(`${indentSpace}${group.name}: end after ${(new Date() - group.beginTime)} (ms)`);
        }
    }
}
export default new TermLogger();