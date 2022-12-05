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
            //     // 로더가 처리해야할 파일의 패턴(정규표현식)
            //     // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미
            //     // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 의미
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