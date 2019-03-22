import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const DemoConfig = {
    entry: {
        'representation-demo': './examples/demo/representation.babel.web.js'
    },
    output: {
        path: resolve(__dirname, 'demo_dist')
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
            title: 'demo main page',
            chunks: [],
            filename: 'index.html',
            template: './examples/demo/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'representation demo',
            chunks: ['representation-demo','vendors'],
            filename: 'representation.html',
            template: './examples/demo/representation.html'
        })
    ]
};

export default DemoConfig;