const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const cssmin = require('gulp-cssmin');

gulp.task('CompressJs', function() {
  return  gulp
              .src(['./src/js/**/*.js'])
              .pipe(concat('bundle.min.js'))
              .pipe(babel({
                presets:['@babel/env']
              }))
              .pipe(uglify())
              .pipe(gulp.dest('./bundle/js'));
});

gulp.task('CompressCss',function(){
  return  gulp
          .src(['./src/css/**/*.css'])
          .pipe(concat('style.min.css'))
          .pipe(cssmin())
          .pipe(gulp.dest('./bundle/css/'));
})


gulp.task('default',['CompressJs','CompressCss']);
