import Bundle from './bundle.json';

export default {
  entry: {
    [Bundle.main]:  './src/index.js',
    [Bundle.dir+'fetch']:  './src/fetch.js',
    [Bundle.dir+'platform']:  './src/platform.js',
    [Bundle.dir+'png']:  './src/png.js',
    [Bundle.dir+'stream']:  './src/stream.js'
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
        exclude: /node_modules/,
        loader: 'babel-loader?compact=false',
      }
    ],
  }
};