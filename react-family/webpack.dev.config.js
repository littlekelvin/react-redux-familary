const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router')
        }
    },

    module: { // cacheDirectory来缓存编译结果，下次编译加速
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true, // 404响应都被替代为index.html
        port: 9090,
        host: 'localhost',
        hot: true, // 开启模块热替换
        proxy: {
            '/':'localhost:9090'
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}