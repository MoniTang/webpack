const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'development',//或者production  开发中用development，项目发布时用production
    entry: './src/index.js',//默认入口
    output: {
        // path: path.resolve(__dirname, 'dist'),//默认dist目录下，可不写
        // filename: 'main.js',//默认将index.js转译之后放到dist/main.js
        //根据内容产生一个hash,内容变了会得到一个新的文件
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title: '小k',
            template: 'src/assets/index.html'
        })],

};
