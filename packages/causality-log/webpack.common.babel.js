import { join, resolve } from 'path';
import Bundle from './bundle.json';
const include = join(__dirname, 'src');

export default {
  entry: {
    [Bundle.main]: ['./src/index.js'],
    [Bundle.dir + 'baseLog']: './src/index.js',
    [Bundle.dir + 'termLog']: './src/termLog.js'
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