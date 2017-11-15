const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(base, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin()
  ],
  devtool: 'source-map'
})
