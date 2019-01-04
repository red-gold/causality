import { join, resolve } from 'path';
import Bundle from './bundle.json';
const include = join(__dirname, 'src');

export default {
  entry: {
    [Bundle.main]: ['@babel/polyfill', './src/index.js'],
    [Bundle.min]: ['@babel/polyfill', './src/index.js']
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
        exclude: [/node_modules/],
        loader: 'babel-loader',
      }
    ],
  }
};