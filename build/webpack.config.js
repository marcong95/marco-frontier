var path = require('path')
var webpack = require('webpack')

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
      { test: /\.vue$/, loader: 'vue' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ],
  resolve: {
    alias: {
      // alias to vue may not be necessary
      // see https://vuejs.org/guide/installation.html#Standalone-vs-Runtime-only-Build
      // vue: 'vue/dist/vue.js'
    }
  }
}
