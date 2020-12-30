var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

// Copy all static images
gulp.task('images', function () {
    return gulp.src(['assets/images/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }]
        }))
        .pipe(gulp.dest('dist/images/'))
});

