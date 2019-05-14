const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: { // cacheDirectory来缓存编译结果，下次编译加速
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true, // 404响应都被替代为index.html
        port: 3000,
        host: 'localhost',
        hot: true, // 开启模块热替换
        proxy: {
            '/api': {
                target: 'http://localhost:8090',
                secure: false
            }
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}