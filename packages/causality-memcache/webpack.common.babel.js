import { join, resolve } from 'path';
import Bundle from './bundle.json';
const include = join(__dirname, 'src');

export default {
  entry: {
    [Bundle.main]: './src/index.js',
    [Bundle.dir +'baseMemCache']: './src/index.js',
    [Bundle.dir +'memoryCache']: './src/memdownCache.js',
    [Bundle.dir +'function']: './src/function.js'
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