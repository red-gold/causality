import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';
const NodeConfig = merge(common, {
    output: {
      path: resolve(__dirname, 'dist'),
      libraryTarget: 'umd',
      filename: '[name].node.js',
      library: Bundle.main,
      globalObject: 'this'
    },
    externals:[ 'causal-net.utils', 'causal-net.core', 
                'causal-net.storage', '@tensorflow-models/universal-sentence-encoder']
});
export default NodeConfig;