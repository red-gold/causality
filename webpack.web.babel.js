import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const WebConfig = merge(common, {
  entry: {
    examples: ['@babel/polyfill', './examples/examples.js'],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    filename: '[name].web.js',
    library: Bundle.main,
    globalObject: 'this'
  },
  externals: ['leveldown'],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      template:'./examples/index.html'
    })
  ]  
});
export default WebConfig;