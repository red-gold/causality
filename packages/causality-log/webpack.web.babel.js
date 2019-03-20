import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';
const fakeCliProgress = (context, request, callback)=>{
  if (/^cli-progress$/.test(request)){
      console.log('found fs');
      return callback(null, 'null-loader');//console is exported instead of fs
  }
  callback();
};
const WebConfig = merge(common, {
  
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: '[name].web.js',
    library: Bundle.main,
    globalObject: 'this'
  },  
  externals:['causal-net.utils', fakeCliProgress]
});

export default WebConfig;