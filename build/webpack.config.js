var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: './src/app.js',
    vendor: ['vue', 'vue-router']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      { test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'},
      { test: /\.vue$/, loader: 'vue' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new ExtractTextPlugin('style.css')
  ]
}
