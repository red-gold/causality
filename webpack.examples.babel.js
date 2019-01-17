import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const WebConfig = {
    entry: {
        'core-example': './examples/core/examples.js',
        'datasets-example': './examples/datasets/examples.js',
        'MNIST-demo': './examples/MNIST-demo/mnist.dataset.babel.js',
        // // 'layer-example': './examples/layer/examples.js',
        // // 'models-example': './examples/models/examples.js',
        'log-example': './examples/log/examples.js',
        'memcache-example': './examples/memcache/examples.js',
        'preprocessing-example': './examples/preprocessing/examples.js',
        // 'representation-example': './examples/representation/examples.js',
        'storage-example': './examples/storage/examples.js',
        'utils-example': './examples/utils/examples.js'
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
        path: resolve(__dirname, 'example_dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'core example',
            chunks: ['core-example','deploy'],
            filename: 'core.html',
            template:'./examples/core/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'utils example',
            chunks: ['utils-example','deploy'],
            filename: 'utils.html',
            template:'./examples/utils/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'log example',
            chunks: ['log-example','deploy'],
            filename: 'log.html',
            template:'./examples/log/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'log example',
            chunks: ['storage-example','deploy'],
            filename: 'storage.html',
            template:'./examples/storage/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'log example',
            chunks: ['memcache-example','deploy'],
            filename: 'memcache.html',
            template:'./examples/memcache/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'log example',
            chunks: ['memcache-example','deploy'],
            filename: 'memcache.html',
            template:'./examples/memcache/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'datasets example',
            chunks: ['datasets-example','deploy'],
            filename: 'datasets.html',
            template:'./examples/datasets/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'demos example',
            chunks: ['MNIST-demo'],
            filename: 'MNIST.html',
            template:'./examples/MNIST-demo/index.html'
        })
    ]
};

export default WebConfig;