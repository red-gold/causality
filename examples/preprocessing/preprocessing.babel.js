import { imagePreprocessing } from 'causal-net.preprocessing';
import { termLogger } from 'causal-net.log';

termLogger.log(imagePreprocessing.imageSplit(new Buffer(10), 2));