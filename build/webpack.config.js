var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: './src/app.js',
    vendor: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          "presets": [
            ["env", {
              "targets": {"browsers": "> 1%"}
            }]
          ]
        }
      },
      { test: /\.css$/, 
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })},
      { test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new ExtractTextPlugin('style.css')
  ],
  devtool: 'cheap-module-eval-source-map'
}
