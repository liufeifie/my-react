const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = {
  entry: './src/main.js',
  output: {
    filename: 'bundle-[hash].js',
    path: path.join(__dirname, 'dist')
  },
  devtool:'source-map',
  devServer: {
    clientLogLevel: 'warning',
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use:[
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'React简易开发环境',
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;