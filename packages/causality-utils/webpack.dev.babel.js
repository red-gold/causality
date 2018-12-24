import { join } from 'path';
import merge from 'webpack-merge';
import common from './webpack.common.babel';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default merge(common, {
  devServer: {
    watchContentBase: true,
    disableHostCheck: true,
    contentBase: join(__dirname, './src')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'causal-net-utils',
    })
  ]
});