import { resolve } from 'path';
import Bundle from './bundle.json';
import merge from 'webpack-merge';
import common from './webpack.common.babel';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const WebConfig = merge(common, {
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
    })
  ]  
});
export default WebConfig;