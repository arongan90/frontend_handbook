현재 디렉토리를  node.js의 폴더로 선언해야한다. 
> npm init


> npm install -D webpack webpack-cli

-D 는 개발을 위한 옵션

우리의 프로젝트에 폴더에 설치한 웹팩을 실행할때는 
> npx webpack --entry ./src/index.js --output ./public/index_bundle.js

```js
  "devDependencies": {
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10"
  }
```
hello.js, world.js 를 각각 부르는것보다 번들처리해서 하나의 index)bundle.js 한번 호출하는게 훨훨씬더!!


위에 명령어는 다음과 같다.

```js
const path = require('path');

module.exports = {
    entry:"./src/index.js",
    output:{
        // __dirname 는 webpack.config.js파일이 위차한 경로
        // 이경로에 public 하위 경로에 최종적인 경과물을 넣어라
        path: path.resolve(__dirname, "public"),
        filename:'index_bundle.js'
    }
}
```

설정후 실행시
> npx webpack --config webpack.config.js

> npx webpack




css 번들링 하기!!

> npm install --save-dev style-loader css-loader

--save-dev 는 -D를 길게 쓴것이 savedev이다.


```js
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
    }
```
>웹팩 동작시 확장자가 css인것을 만나면 웹팩이 알아서 그 css파일을 웹팩 안으로 로드 시켜주는 명령 (css-loader)

> style-loader는 스타일을 주입해주는 것

