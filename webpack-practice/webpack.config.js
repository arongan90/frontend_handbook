const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry:{
        index: "./src/index.js",
        about: "./src/about.js"
    },
    output:{
        // __dirname 는 webpack.config.js파일이 위차한 경로
        // 이경로에 public 하위 경로에 최종적인 경과물을 넣어라
        path: path.resolve(__dirname, "public"),
        filename:'[name]_bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'./index.html',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            template:'./src/about.html',
            filename:'./about.html',
            chunks:['about']
        })
    ]
}

