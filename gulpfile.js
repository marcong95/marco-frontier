var gulp = require('gulp')
var webpack = require('webpack-stream')

var del = require('del')

gulp.task('default', function() {
  return gulp.src('src/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'))
})

gulp.task('clean', function() {
  return del([
    'dist/*'
  ])
})