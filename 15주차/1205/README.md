# WebPack : Loaders

> 웹팩은 자바스크립트로 만든 모듈 뿐 아니라 css, html, 이미지 리소스 등등 모든것을 모듈처럼 다룰 수 있는데 이것을 가능하게 만들어 주는것이 바로 로더 <br>
> 로더가 기본적으로 하는 일은 파일을 지정해서 로더 함수에서 정한 일을 처리하게 만드는 것 → 모든 자원을 모듈로 불러오는것(load) <br>

- css-loader & style-loader : css 파일을 자바스크립트 파일에 불러오기
- File-loader : 이미지 파일을 모듈처럼 사용
- Base64 포멧으로 이미지 불러오기 : 간단한 이미지의 경우 다운로드하여 사용하지 않고 문자열로 그려내는 방법

<br>

# WebPack : Plugin

> 로더가 파일(모듈) 단위로 기능을 처리하는 반면, 플러그인은 최종적으로 번들된 결과물을 가공하고자 할때 사용 <br>
- 각각의 파일을 해석하는 데 들어가는 로더와 달리 번들된 경과물을 처리하는 것이 플러그인 <br>
- 5개의 파일이 있다고 하면 로더는 각각의 파일을 모듈화 할 때 호출되고(5번), 플러그인은 최종 1번 호출된다.



## 많이 사용하는 플러그인 

```
1. BannerPlugin : 번들링된 파일의 최상단에 배너(주석)를 달아주는 플러그인, webpack 기본 플러그인이기에 따로 설치할 필요 없음
   - 주로 빌드와 관련된 정보 (빌드 날짜, 빌드 버전 등)를 제공할 때 사용
   
2. DefinePlugin : 애플리케이션에서 사용할 수 있지만, 소스코드에 직접적으로 작성해서는 안되는 **전역 상수**를 만들 수 있음
   - 주로 개발 과정에서 필요한 환경변수들을 애플리케이션에 전달해주고 싶을 때 많이 사용
   - 디파인 플러그인도 웹팩에서 기본으로 제공하는 플러그인이므로 따로 설치할 필요 없음

3. HtmlWebpackPlugin : HTML 파일을 번들링 단계에서 컨트롤 할 수 있도록 도와주는 플러그인
   - 최초에 작성했던 index.html을 그대로 사용하는것이 아닌, 동적으로 관리하는것이 가능
   - 웹팩의 기본 플러그인이 아니므로 따로 설치
4. CleanWebpackPlugin : 빌드 이전에 남아있는 결과물을 제거하는 플러그인
   - dist폴더에는 항상 빌드후에 배포를 위한 파일이 남아있는데, 
     더 이상 사용하지 않는 과거의 파일도 없어지지 않고 남아있기 때문에 배포할 때 일일이 제거해야되서 귀찮을 수 있음
   - 웹팩의 기본 플러그인이 아니므로 따로 설치
```

```
const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


require('dotenv').config();

module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

    // 경로 설정
    entry: {
        main: path.resolve('./src/app.js')
    },

    // 번들 결과물 빼내기
    // [name]은 entry의 키 값인 main이 자동으로 들어오게 된다. // 그래서 'main.js' 라고 적어도 ok
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },

    module: {
        rules: [
            // {
            //     로더가 처리해야할 파일의 패턴(정규표현식)
            //     여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미
            //     원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 의미
            //     test: /\.js$/,
            //     use: [
            //         // 위와 일치하는 패턴의 파일이 전달될 로더를 설정
            //         path.resolve('./myLoader.js')
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                // 여기 추가
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20 * 1024 // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱함
                    }
                },
            },
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner:
                `
            Commit version : ${childProcess.execSync('git rev-parse --short HEAD')} // 커밋 버전
            Committer : ${childProcess.execSync('git config user.name')} // 커밋 작성자
            Commit Date : ${new Date().toLocaleString()} // 빌드 날짜
        `
        }),
        new webpack.DefinePlugin({
            dev: JSON.stringify(process.env.DEV_API),
            pro: JSON.stringify(process.env.PRO_API)
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}
```
