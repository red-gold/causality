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
    publicPath: 'examples',
    library: Bundle.main,
    globalObject: 'this'
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   chunks: [Bundle.main + '.web.js'],
    //   title: Bundle.main,
    // })
    new HtmlWebpackPlugin({
      title: 'examples',
      filename:'examples.html',
      chunks: [Bundle.main + '.web.js'],
      template:'./examples/example.html',
      inject: 'head',
      assets:['/examples/']
    })
  ]  
});
export default WebConfig;