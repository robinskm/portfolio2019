var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var current_location = '../';

// the default task
gulp.task('default', ['sass', 'scripts', 'watch'], function () {
    'use strict';
});

// the watch task
gulp.task('watch', function () {
	gulp.watch(current_location + 'src/sass/**/*.scss', ['sass']);
	gulp.watch(current_location + 'src/js/**/*.js', ['scripts']);
});

// the sass task
gulp.task('sass', function () {
    return gulp.src(current_location + 'src/sass/**/*.scss')
    .pipe(sourcemaps.init())
        // do sass things
        .pipe(sass())
        .pipe(minify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write(current_location + 'css'))
        // move to folder
        .pipe(gulp.dest(current_location + 'dist/css'));
});

// the js task
gulp.task('scripts', function () {
    'use strict';
    return gulp.src(current_location + 'src/js/**/*.js')
    .pipe(sourcemaps.init())
    //take all js files and move to one file
    .pipe(concat('theme.js'))
    //js verson of minify
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write(current_location + 'js'))
    .pipe(gulp.dest(current_location + 'dist/js'))
});