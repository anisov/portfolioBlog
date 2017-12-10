const webpack = require('webpack'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = {
    output: {
        filename: 'main.js'
    },
    plugins: [
       new UglifyJSPlugin({
            sourceMap: true
       }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

module.exports = config;
