//Iniciar con el comando "gulp" en CLI
'use strict';

  var gulp   = require('gulp');
  var rename = require('gulp-rename');
  var sass   = require('gulp-sass');
  var cssmin = require('gulp-minify-css');
  var notify = require('gulp-notify');

  var source_paths = {
    sass: './sass/**/*.scss',
    cssmin: './dev/zurix.css'
  };
  // Preprocesa sass a css
  gulp.task('sass', function() {
    return gulp.src(source_paths.sass)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dev'));
  });
  // Minifica el css
  gulp.task('cssmin', function() {
    return gulp.src(source_paths.cssmin)
    .pipe(cssmin())
    .pipe(rename('zurix.min.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(notify({
      title: 'Procesos finalizados',
      message: 'Todo salió de maravilla.'
    }));
  });

  gulp.task('watch', ['sass', 'cssmin'], function() {
    gulp.watch(source_paths.sass, ['sass']);
    gulp.watch(source_paths.cssmin, ['cssmin']);
  });

  gulp.task('default', ['watch']);