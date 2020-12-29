'use strict';
var gulp = require('gulp'),
    requireDir = require('require-dir');

var paths = {
    sass: ['assets/scss/**/*.scss', 'assets/scss/**/*._scss', 'assets/scss/*.scss'],
    js: 'assets/js/**/*.js'
};

requireDir('./gulp-tasks');

gulp.task('watch', function () {
    gulp.watch(paths.sass, gulp.series('sass'));
    gulp.watch(paths.js, gulp.series('scripts'));
});

// watching scss/html files
gulp.task('default', gulp.series('sass', 'scripts', 'watch'));