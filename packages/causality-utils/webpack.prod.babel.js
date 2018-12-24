
import merge from 'webpack-merge';
import common from './webpack.common.babel';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'causal-net-utils.min.js'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
});