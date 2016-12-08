//Iniciar con el comando gulp watch en CLI
'use strict';

  var gulp = require('gulp');
  var rename = require('gulp-rename');
  var sass = require('gulp-sass');
  var cssmin = require('gulp-minify-css');

  var source_paths = {
    sass: './scss/**/*.scss',
    cssmin: './css/zurix.css'
  };
  // Preprocesa sass a css
  gulp.task('sass', function() {
    return gulp.src(source_paths.sass)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
  });
  // Minifica el css
  gulp.task('cssmin', ['sass'], function() {
    return gulp.src(source_paths.cssmin)
    .pipe(cssmin())
    .pipe(rename('zurix.min.css'))
    .pipe(gulp.dest('./css'));
  });

  gulp.task('watch', ['sass', 'cssmin'], function() {
    gulp.watch(source_paths.sass, ['sass']);
    gulp.watch(source_paths.cssmin, ['cssmin']);
  });

  gulp.task('default', ['watch']);