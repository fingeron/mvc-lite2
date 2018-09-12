const gulp      = require('gulp');
const concat    = require('gulp-concat');

const CONFIG    = require('./build.config');

gulp.task('build', function() {
    return gulp
        .src(CONFIG.BuildOrder)
        .pipe(concat('mvc-lite.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch('./core/*.js', ['build']);
});