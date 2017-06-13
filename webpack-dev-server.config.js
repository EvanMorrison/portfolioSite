var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // <-- Enables websocket connection(needs url and port)
        'webpack/hot/dev-server', // <-- to perform HMR in the browser, "only" prevents reload on syntax errors
        './app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    devtool: 'eval',
    devServer: {
        hot: true,
        contentBase: './dist'
    },
    module: {
        loaders: [
            {test:/\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test:/\.(jpg|png)$/, loader:"url-loader"},
            {test:/\.css$/, loader:"style-loader!css-loader"}
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), HTMLWebpackPluginConfig]
    
}
