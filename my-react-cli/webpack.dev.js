const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config = {
  entry: './src/main.js',
  output: {
    filename: 'bundle-[hash].js',
    path: path.join(__dirname, 'dist')
  },
  devtool:'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;