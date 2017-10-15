const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          css: ExtractTextPlugin.extract({
            fallback: 'vue-style-loader',
            use: 'css-loader'
          }),
          stylus: ExtractTextPlugin.extract({
            fallback: 'vue-style-loader',
            use: ['css-loader', 'stylus-loader']
          })
        }
      }, {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["env", {"targets": {"browsers": "> 1%"}}]
            ]
          }
        },
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }, {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      }
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
