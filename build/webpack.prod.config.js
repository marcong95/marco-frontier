const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')

module.exports = merge(base, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: 'source-map'
})
