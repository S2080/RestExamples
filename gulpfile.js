/**
 * File: gulpfile.js
 * It is Task Runner
 */

// import gulp packages
var gulp = require('gulp');
var gutil = require('gulp-util');

// create a default task and just loag a message

gulp.task('default', function() {
    return console.log('Gulp is running!!');
});