var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './public/app.js',
    output: {
        filename: 'bundle.js',
        path: './public/dist'
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'public/img',
            to: 'img'
        }, {
            from: 'public/vendor',
            to: 'vendor'
        }, {
            from: 'node_modules/weather-icons/font/',
            to: './public/fonts'
        }]),
        new webpack.ProvidePlugin({
              $: "jquery",
           jQuery: "jquery"
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader?presets[]=es2015',
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=public/fonts/[name].[ext]'
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            loader: 'raw'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file'
        }]
    }
}