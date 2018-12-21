const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const LibName = 'causal-net-utils';
const GetDirName =()=>{
	return __dirname;
}
const DirName = GetDirName();
const NodeConfig = {
	node: {
    __filename: true,
    __dirname: true
  },
	// target: "node",
	entry: {
		app: ["./src/index.js"]
	},
	output: {
		path: path.resolve(DirName, 'dist'),
		filename: `${LibName}.js`,
		library: `${LibName}`,
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
	externals: [ nodeExternals(), 'level-browserify' ]
};

const WebConfig = {
  target: 'web',
  output: {
		path: path.resolve(DirName, 'dist'),
		filename: `${LibName}.web.js`,
		library: `${LibName}.web`,
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
  }
};

module.exports = [NodeConfig];
