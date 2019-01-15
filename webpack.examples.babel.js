import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const WebConfig = {
    entry: {
        'core-example': './examples/core/examples.js',
        // 'datasets-example': './examples/datasets/examples.js',
        // 'demo-example': './examples/demo/examples.js',
        // // 'layer-example': './examples/layer/examples.js',
        // // 'models-example': './examples/models/examples.js',
        'log-example': './examples/log/examples.js',
        'memcache-example': './examples/memcache/examples.js',
        // 'preprocessing-example': './examples/preprocessing/examples.js',
        // 'representation-example': './examples/representation/examples.js',
        'storage-example': './examples/storage/examples.js',
        'utils-example': './examples/utils/examples.js',
        // 'examples': './examples/examples.js'
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
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
	// },
    output: {
        path: resolve(__dirname, 'example_dist'),
        globalObject: 'this',
        filename: '[name].js'
    },
  
    plugins: [
        new HtmlWebpackPlugin({
            title: 'core example',
            chunks: ['core-example'],
            filename: 'core.html',
            template:'./examples/core/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'utils example',
            chunks: ['utils-example'],
            filename: 'utils.html',
            template:'./examples/utils/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'log example',
            chunks: ['log-example'],
            filename: 'log.html',
            template:'./examples/log/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'log example',
            chunks: ['storage-example'],
            filename: 'storage.html',
            template:'./examples/storage/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'log example',
            chunks: ['memcache-example'],
            filename: 'memcache.html',
            template:'./examples/memcache/index.html'
        })
    ],
    externals:[function(context, request, callback) {
        if (/^leveldown$/.test(request)){
            console.log('found leveldown');
            return callback(null, '"leveldown"');//need to consider for alternative solution;
        }
        callback();
      }]  
};

export default WebConfig;