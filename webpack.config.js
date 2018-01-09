const webpack = require('webpack'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
    source: path.resolve(__dirname,'src'),
    build: path.resolve(__dirname,'build')
};

const config = {
    entry: {
        entry: PATHS.source + '/js/include.js',
        preloader: PATHS.source + '/js/index/preloader.js',
        //adminStyles: PATHS.source + '/scss/admin-styles.js',
        //admin: PATHS.source + '/js/admin/admin.js',
        //project: PATHS.source + '/js/project/project.js',
       // projectStyles: PATHS.source + '/scss/project-styles.js',
      },
      output: {
        path: path.resolve(__dirname, './build'),
        filename: 'js/[name].bundle.js'
      },
    plugins: [
        // new UglifyJSPlugin({
        //     sourceMap: true
        // }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new ExtractTextPlugin('css/[name].css'),
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: 'common',
        // }),
        // new HtmlWebpackPlugin({
        //   filename: 'admin.html',
        //   chunks: ['admin', 'adminStyles','common'],
        //   template: PATHS.source + '/templates/admin/admin.html'
        // }),
      // new HtmlWebpackPlugin({
      //   filename: 'project.html',
      //   chunks: ['project','common','projectStyles'],
      //   template: PATHS.source + '/templates/project/project.pug'
      // }),
    ],
    module: {
        rules: [
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
              options: {
                minimize: false,
                //removeComments: false,
              }
            }
          },
          {
            test: /\.pug$/,
            use:{
              loader: 'pug-loader',
              options: {
                pretty: true, 
            }
          }
        },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: ['css-loader']
            })
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              publicPath:'../',
              fallback: 'vue-style-loader',
              use: ['css-loader', 'sass-loader',]
            })
        },
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              esModule: false,
              loaders: {
                'scss': ExtractTextPlugin.extract({
                  fallback: 'vue-style-loader',
                  use:[
                  'css-loader',
                  'sass-loader',
                  'svg-fill-loader/encodeSharp',
                  {
                    loader: 'sass-resources-loader',
                    options: {
                      resources: [
                        './src/scss/config/_variables.scss',
                        './src/scss/config/_mixins.scss',
                        './src/scss/layout/_media.scss'
                      ]
                    }
                  },
                ]
              }),
              }
            }
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader"
          
          },
          // {
          //   test: /\.(woff|woff2)$/,
          //   loader: 'file-loader',
          //   options: {
          //     name: 'fonts/[name].[ext]?[hash]'
          //   }
          // },
          {
            test: /\.(jpg|png)$/,
            loader: 'file-loader',
            options: {
              name: 'img/admin/[name].[ext]'
            }
          },
          {
            test: /\.(frag|vert)$/,
            loader: 'webpack-glsl-loader'
          },
          {
            test: /\.svg$/,
            use: [
              'url-loader',
              {
                loader: 'svg-fill-loader?fill=white'
              }
            ]
          }
        ]
      },
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          'styles': path.resolve(__dirname, 'src/scss/admin'),
          'src': path.resolve(__dirname, 'src'),
          'img': path.resolve(__dirname, 'src/img/')
        },
        extensions: ['*', '.js', '.vue', '.json'],
        modules: [
          'node_modules',
        ]
      },
      devServer: {
        historyApiFallback: true,
        noInfo: false,
        overlay: true,
        open: false
      },
      performance: {
        hints: false
      },
      devtool: '#eval-source-map'
    }

module.exports = config;
