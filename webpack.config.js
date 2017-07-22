const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
    const isProduction = env.production === true;

    return {
        
        entry: './app/index.js',

        output: {
            path: __dirname + '/dist',
            filename: 'index_bundle.js'
        },

        devtool: (() => {
            if (isProduction) 'hidden-source-map'
            else 'cheap-module-eval-source-map'
        })(),

        devServer: (() => { 
            if (isProduction) return {}
            else return {
                hot: true,
                contentBase: './dist',
                historyApiFallback: true
            }
        })(),

        module: {
            rules: [
                {test:/\.js$/, exclude: /node_modules/, use: "babel-loader"},
                {test:/\.(jpg|png)$/, use:"url-loader"},
                {test:/\.css$/, use: ["style-loader", "css-loader"]}
            ]
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
                    new CompressionPlugin({  
                        asset: "[path].gz[query]",
                        algorithm: "gzip",
                        threshold: 10240,
                        test: /\.js$|\.css$|\.html$/,
                        minRatio: 0.8
                    })
                )
            } else {
                pluginList.push(
                    // plugins for development only
                    new webpack.HotModuleReplacementPlugin()
                )
            }
            return pluginList
    })()
        
    }

}