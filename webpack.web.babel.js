import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const WebConfig = merge(common, {
  entry: {
    examples: './examples/examples.js',
    vendor:['causal-net.datasets','causal-net.log','causal-net.utils']
  },
	optimization: {
    splitChunks: {
      chunks: 'all'
    }
	},
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: '[name].web.js',
    chunkFilename: '[name].bundle.js',
    library: Bundle.main,
    globalObject: 'this'
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      filename: 'index.html',
      template:'./examples/index.html'
    })
  ],
  externals: ['leveldown']  
});
export default WebConfig;