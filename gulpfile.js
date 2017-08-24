var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    uglifyCSS = require('gulp-uglifycss'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack-stream'),
    stylus = require('gulp-stylus'),
    nameTheColor = require('name-the-color-stylus');

var src = './flu';
var destStatic = './dist';
var destRails = './public/assets';

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './docs',
      directory: true,
      reloadOnRestart: false,
      notify: false,
      files: ['docs.css', 'docs.js']
    }
  });
});

gulp.task('docs-stylus', function () {
  gulp.src('./docs/src/docs.styl')
    .pipe(stylus({ use: [nameTheColor()] }))
    //.pipe(uglifyCSS())
    .pipe(gulp.dest('./docs/assets/'));
});

gulp.task('docs-js', function () {
  gulp.src('./docs/src/docs.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(uglify())
    .pipe(gulp.dest('./docs/assets/'));
});

gulp.task('default', ['docs-stylus', 'docs-js', 'serve'], function () {
  gulp.watch('./flu/**/*', ['docs-stylus']);
  gulp.watch('./docs/src/**/*.styl', ['docs-stylus']);
  gulp.watch('./js/**/*', ['docs-js']);
  gulp.watch('./docs/src/docs.js', ['docs-js']);
  gulp.watch('./docs/*.html').on('change', browserSync.reload);
});