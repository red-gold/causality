import { causalNetSampling } from 'causal-net.sampling';
import {termLogger as Logger} from 'causal-net.log';
let numSamples = 4;
let idSize = 10;//id list: [0,1,2,3,4,5,6,7,8,9]
Logger.log(causalNetSampling.subSampling(numSamples, idSize));