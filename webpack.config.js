const HtmlwebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
      },
      {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader']
          })
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'mini-mvvm',
      template: './src/index.html'
    }),
    new ExtractTextPlugin("style.css"),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    compress: true,
    watchContentBase: true,
    port: 9000,
    hot: true,
    inline: true
  }
}