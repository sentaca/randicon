'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var DEST = 'dist/';

gulp.task('default', function() {
  return gulp.src(['bower_components/snap.svg/dist/snap.svg.js', 'randicon.js'])
    .pipe(concat("randicon.js"))
    .pipe(gulp.dest(DEST))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});
