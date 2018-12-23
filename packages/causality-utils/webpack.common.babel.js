
import { join, resolve } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'umd',
    filename: 'causal-net-utils.js',
    library: 'causalNetUtils',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include,
      },
    ],
  }
};