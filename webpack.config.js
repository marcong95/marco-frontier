module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.vue$/, loader: 'vue' }
    ]
  },
  externals: {
    vue: "Vue"
  }
}
