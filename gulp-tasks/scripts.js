var gulp = require('gulp'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    minify = require('gulp-minify');

gulp.task('scripts', function () {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(['assets/js/vendors/*.js', 'assets/js/main.js'])
        .pipe(plumber())
        .pipe(concat('main.min.js'))
        .pipe(plumber.stop())
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
});
