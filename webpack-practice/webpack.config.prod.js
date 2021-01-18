const path = require('path');

module.exports = {
    mode: "production",
    entry:"./src/index.js",
    output:{
        // __dirname 는 webpack.config.js파일이 위차한 경로
        // 이경로에 public 하위 경로에 최종적인 경과물을 넣어라
        path: path.resolve(__dirname, "public"),
        filename:'index_bundle.js'
    }
}

