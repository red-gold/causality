import { join } from 'path';
import Bundle from './bundle.json';

export default {
  entry: {
    [Bundle.main]: './src/index.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: false,
        default: false,
        tensor: {
          test: /node_modules/,
          chunks: 'all',
          name:'tensor/tfjs',
          reuseExistingChunk: true,//reuse ramda chunk
          priority: 10,
        },
        function: {
          test: /ramda/,
          chunks: 'all',
          name:'function/ramda',
          priority: 20,//make ramda chunk seperate from tensorflow chunk
        }
      }
    }
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
        loader: 'babel-loader',
      }
    ],
  }
};