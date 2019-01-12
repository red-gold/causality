import {default as BaseLog} from './baseLog';
import {default as LogNodeMixins} from './termLog.mixins.node';
import {default as WebNodeMixins} from './termLog.mixins.web';
import {Platform} from 'causal-net.utils';
class TermLog extends Platform.mixWith(BaseLog, {'node':[LogNodeMixins],'web':[WebNodeMixins]}){
    constructor(prefix){
        super(prefix);
    }
}
const Logger = new TermLog();
export default Logger;