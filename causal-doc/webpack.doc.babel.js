import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const fakeFs = (context, request, callback)=>{
  if (/^fs$/.test(request)){
      console.log('found fs');
      return callback(null, 'null-loader');//console is exported instead of fs
  }
  callback();
};


const TranspilerConfig = {
    entry: {
        'require': './transpile/require.js',
        'transpiler': './transpile/transpiler.js'
    },
    output: {
        path: resolve(__dirname, 'scripts/'),
        library: '[name]',
        libraryTarget: 'window',
        libraryExport: 'default'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
        {
            enforce: 'pre',
            test: /\.js$/,
            exclude: [/node_modules/,/dist/],
            loader: 'eslint-loader',
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.js$/,
            exclude: [/node_modules/,/dist/],
            loader: 'babel-loader',
        }
        ],
    },	
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules/,//still fail to make this it as seperated chunks
                    reuseExistingChunk: false,
                    chunks: 'all',
                    name: 'vendors'
                }
            }
        }
    },
    externals:[fakeFs],  
    plugins: [
        new HtmlWebpackPlugin({
            title: 'demo main page',
            filename: 'index.html',
            template: './template/index.html'
        }) ]
};


export default TranspilerConfig;