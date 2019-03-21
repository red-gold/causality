import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const DemoConfig = {
    entry: {
        'representation-demo': './examples/demo/representation.babel.web.js'
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
            test: /\.js$/,
            exclude: [/node_modules/,/dist/],
            loader: 'babel-loader',
        }
        ],
    },	
    output: {
        path: resolve(__dirname, 'doc_dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules/,//still fail to make this it as seperated chunks
                    reuseExistingChunk: true,
                    chunks: 'all',
                    name: 'vendors'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'representation demo',
            chunks: ['representation-demo','vendors'],
            filename: 'representation.html',
            template: './examples/demo/representation.html'
        })
    ]
};

export default DemoConfig;