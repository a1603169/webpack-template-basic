// nodejs 환경
//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// exports
module.exports = {
  // 파일의 진입점 (parcel index.html)
  entry: './js/main.js',
  // parcel main.js 비슷함

  // 결과물(번들)을 반환하는 설정
  output: {
    // 절대경로 필요함 const path = require('path) = 
    // path: path.resolve(__dirname, 'dist'),
    // // dirname 현재파일이 있는 경로를 지칭하는 변수 -> dist 까지 지정 하면 그 dist 폴더 안에 확실히 지정이 됭
    // filename: 'main.js',
    clean: true
  },
  
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}