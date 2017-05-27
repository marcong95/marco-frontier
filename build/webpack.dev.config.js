const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')

module.exports = merge(base, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true
  }
})
