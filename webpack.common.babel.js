import Bundle from './bundle.json';

export default {
  entry: {
    [Bundle.main]: './src/index.js',
    [Bundle.dir+'pipeline']: './src/causality.js',
    'causalNet/datasets':'causal-net.datasets',
    'causalNet/log':'causal-net.log',
    'causalNet/utils':'causal-net.utils',
    'causalNet/storage':'causal-net.storage'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: [/node_modules/,/dist/],
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/,/dist/],
        loader: 'babel-loader',
      }
    ],
  }
};