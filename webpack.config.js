const HtmlwebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const outPath = path.resolve(__dirname,'dist')
const entryPath = path.resolve('./src/js/index.js')
module.exports = {
  mode: 'development',
  entry: entryPath,
  output: {
    path: outPath,
    filename: 'mini-mvvm.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)|(bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'mini-mvvm',
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    compress: true,
    watchContentBase: true,
    port: 9000,
    hot: true,
    inline: true
  }
}