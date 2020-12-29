var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    pxtorem = require('gulp-px2rem');

var px2remOptions = {
    root_value: 16,
    unit_precision: 5,
    prop_white_list: [],
    replace: false,
    media_query: false
};
var postCssOptions = {
    map: true
};

gulp.task('sass', function () {
    return gulp.src(['assets/scss/**/*.scss', 'assets/scss/**/*._scss', 'assets/scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(pxtorem(px2remOptions, postCssOptions))
        .pipe(autoprefixer({
            browsers: ['safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: false
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'))

});
