const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
var JsDocPlugin = require('jsdoc-webpack-plugin-v2');
const path = require('path');


const NodeConfig = {
	target: "node",
	entry: {
		app: ["./src/index.js"]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'causal-net.js',
		library: 'causal-net',
		libraryTarget: 'umd'
	},
	resolve: {
		modules: [path.resolve("./src"), 'node_modules']
	},
	module:{
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
			},
			new JsDocPlugin({
				conf: path.join(__dirname, 'jsdoc.json'),
			})
    ]
  },
	externals: [ nodeExternals() ]
};

module.exports = [NodeConfig];
