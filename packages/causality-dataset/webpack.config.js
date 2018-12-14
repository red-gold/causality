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
		filename: 'causal-net-dataset.js',
		library: 'causal-net-dataset',
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
      }
    ]
  },
	externals: [ nodeExternals() ]
};

module.exports = [NodeConfig];
