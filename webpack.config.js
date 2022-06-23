const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base')
module.exports = {
    ...base,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {

        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    }

}
























// module.exports = {
//     mode: 'development',//或者production  开发中用development，项目发布时用production
//     entry: './src/index.js',//默认入口
//     output: {
//         // path: path.resolve(__dirname, 'dist'),//默认dist目录下，可不写
//         // filename: 'main.js',//默认将index.js转译之后放到dist/main.js
//         //根据内容产生一个hash,内容变了会得到一个新的文件
//         filename: '[name].[contenthash].js'
//     },
//     devtool: 'inline-source-map',
//     devServer: {
//         contentBase: './dist',
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             // filename: "[name].[contenthash].html",
//             title: '小k',
//             template: 'src/assets/index.html'
//         }),

//         new MiniCssExtractPlugin({
//             filename: "[name].[contenthash].css",
//             chunkFilename: "[id].[contenthash].css",
//             ignoreOrder: false,
//         }),
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 // use: [
//                 //     {
//                 //         loader: MiniCssExtractPlugin.loader,
//                 //         options: {
//                 //             publicPath: "../",
//                 //         },
//                 //     },
//                 //     "css-loader",
//                 // ],
//                 use: ["style-loader", "css-loader"],
//             },
//         ],
//     },

// };
