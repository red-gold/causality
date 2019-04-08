import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const DemoConfig = {
    entry: {
        'representation-demo': './demo/src/respresentation.js',
        'mnist-demo': './demo/src/mnist.js'
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
            template: './demo/templates/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'representation demo',
            chunks: ['representation-demo','vendors'],
            filename: 'representation.html',
            template: './demo/templates/representation.html'
        }),
        new HtmlWebpackPlugin({
            title: 'digits classification demo',
            chunks: ['mnist-demo','vendors'],
            filename: 'mnist.html',
            template: './demo/templates/mnist.html'
        }),
        new HtmlWebpackPlugin({
            title: '20 newsgroup classification  demo',
            chunks: ['vendors'],
            filename: '20newsgroup.html',
            template: './demo/templates/20newsgroup.html'
        })
    ]
};

export default DemoConfig;