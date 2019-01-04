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
  plugins: [
    new HtmlWebpackPlugin({
      title: Bundle.main,
      chunks: ['examples'],
      filename: 'index.html',
      template: './examples/index.html'
    })
  ],  
  externals: ['leveldown']//either do it or make all causal packages external, need thinking
});

export default WebConfig;