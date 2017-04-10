'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

/**
 * Execute all tests.
 */
gulp.task('mocha-tests', function () {
  return gulp.src('test/**/*.js', { read: false })
    .pipe(mocha({ reporter: 'spec' }));
});