var path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: "./dist",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.vue$/, loader: 'vue' }
    ]
  }
}