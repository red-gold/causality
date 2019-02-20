import { causalNetSampling } from 'causal-net.sampling';
import { termLogger } from 'causal-net.log';

termLogger.log(causalNetSampling.negSampling(4,[0,1],[0.9,0.9, 0.3, 0.7]));