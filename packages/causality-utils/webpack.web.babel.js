import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';

const WebConfig = merge(common, {
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: '[name].web.js',
    chunkFilename: '[name].js',
    library: Bundle.main,
    globalObject: 'this'
  },
  externals:['cross-fetch','fetch-readablestream','generate-schema','ajv',
             'platform','random','pngjs3','csv-parser']  
});
export default WebConfig;