/* Configure HTMLWebpack plugin */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/template/index.html',
    filename: 'index.html',
    inject: 'body'
})

/* Configure ExtractTextWebpack plugin*/
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
    filename: /*devMode ? */'[name].bundle.css' /*: '[name].[hash].css'*/,
    chunkFilename: /*devMode ?*/ '[id].css' /*: '[id].[hash].css'*/,
})

/* Configure BrowserSync */
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const BrowserSyncPluginConfig = new BrowserSyncPlugin({
    host: 'localhost',
    port: 3000,
    proxy: 'http://localhost:8080/'
}, config = {
    reload: false
})

/* Configure ProgressBar */
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const ProgressBarPluginConfig = new ProgressBarPlugin()

/* Export configuration */
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: [
        './src/index.tsx'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.scss?$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
            // {
            //     test: /\.css$/,
            //     exclude: /[\/\\]src[\/\\]/,
            //     use: [
            //         {
            //             loader: 'style-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },
            //         {loader: 'css-loader'}
            //     ]
            // },
            // {
            //     test: /\.(sass|scss)$/,
            //     loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            // },
            // {
            //     test: /\.css$/,
            //     exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
            //     use: [
            //         {
            //             loader: 'style-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //                 importLoaders: 1,
            //                 localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
            //             }
            //         }
            //     ]
            // }
        ]
    },
    resolve: { extensions: [".web.ts", ".web.js", ".ts", ".tsx", ".jsx", ".js", ".json", ".scss"] },
    plugins: [HTMLWebpackPluginConfig, BrowserSyncPluginConfig, ProgressBarPluginConfig, MiniCssExtractPluginConfig]
}
