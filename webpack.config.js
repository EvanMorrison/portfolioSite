const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env = {}) => {
    const isProduction = env.production === true;

    return {
        
        entry: (() => {
            if (isProduction) return {
                index: './app/index.js',
                vendor: [
                        '@material-ui/core',
                        'react',
                        'react-dom',
                        'react-router',
                        'react-scroll-to-component',
                        'react-tap-event-plugin'
                ]
            }
            else {
                return [
                         'webpack-hot-middleware/client',
                         './app/index.js'
                        ]
            }
        })(),

        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: (() => {
                if (isProduction) return '[name].[chunkhash].js'
                else return '[name].bundle.js'
            })()
        },

        devtool: (() => {
            if (isProduction) return 'hidden-source-map'
            else return 'cheap-module-eval-source-map'
        })(),

        devServer: (() => { 
            if (isProduction) return {}
            else return {
                contentBase: './dist',
                historyApiFallback: {
                    index: '/'
                }
            }
        })(),
        mode: isProduction ? "production" : "development",
        module: {
          rules: [
            {
              test:/\.js$/,
              exclude: /node_modules/,
              use: [{
                loader: 'babel-loader'
              }, {
                loader: "eslint-loader",
                options: {
                  emitWarning: true,
                  failOnWarning: false
                }
              }]
            },
            {
              test:/\.(jpe?g|png|gif)$/,
              use: [
                { 
                  loader: "url-loader",
                  options: {
                    limit: 10000,
                    name: 'assets/[name].[hash].[ext]'
                  }
                }
              ]
            }
          ]
        },
        optimization: {
          minimize: isProduction,
          minimizer: [
            new TerserPlugin({
            parallel: true
          })],
          runtimeChunk: isProduction ? "single" : false,
          splitChunks: {
            cacheGroups: {
              commons: {
                name: "commons",
                chunks: "initial",
                minChunks: 2
              }
            }
          }
        },
        plugins: (() => {
            const pluginList = [
                // plugins for both environments
                new HtmlWebpackPlugin({
                    template: __dirname + '/app/index.html',
                    filename: 'index.html',
                    inject: 'body'
                })
            ]
            
            if (isProduction) {
                pluginList.push(
                    // plugins for production only
                    new CleanWebpackPlugin(),
                    new webpack.HashedModuleIdsPlugin(),
                    new CompressionPlugin({  
                      filename: "[path].gz[query]",
                      algorithm: "gzip",
                      compressionOptions: {
                        threshold: 10240,
                        test: /\.js$|\.css$|\.html$/,
                        minRatio: 0.8
                      }
                    })
                )
            } else {
                pluginList.push(
                    // plugins for development only
                    new webpack.HotModuleReplacementPlugin(),
                    new webpack.NoEmitOnErrorsPlugin()
                )
            }
            return pluginList
    })()
        
    }

}