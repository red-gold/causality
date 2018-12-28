const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const NodeConfig = {
	target: "node",
	entry: {
		app: ["./src/index.js"]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'causal-net-core.js',
		library: 'causal-net-core',
		libraryTarget: 'umd'
	},
	resolve: {
		modules: [path.resolve("./src"), 'node_modules']
	},
	devtool: 'source-map',
	module:{
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
	externals: [ nodeExternals() ]
};

module.exports = [NodeConfig];