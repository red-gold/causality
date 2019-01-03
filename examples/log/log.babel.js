import {TermLog} from 'causal-net.log';
const logger = new TermLog(['prefix1']);
// if(typeof window !== 'undefined' && logger.connect !== undefined){
//     logger.connect();
// }
logger.log('this is text');