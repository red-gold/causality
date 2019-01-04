import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import NodeConfig from './webpack.node.babel';
import WebConfig from './webpack.web.babel';
NodeConfig.mode = 'production';
NodeConfig.devtool = 'source-map',
NodeConfig.plugins = [new UglifyJSPlugin({sourceMap: true, include: /\.min\.node\.js$/})];
WebConfig.mode  = 'production';
WebConfig.devtool = 'source-map',
WebConfig.plugins = [new UglifyJSPlugin({sourceMap: true, include: /\.min\.web\.js$/})];
module.exports = [NodeConfig, WebConfig];