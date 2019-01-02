import NodeConfig from './webpack.node.babel';
import WebConfig from './webpack.web.babel';
WebConfig.plugins = [];//TODO: make this fix better
module.exports = [NodeConfig, WebConfig];