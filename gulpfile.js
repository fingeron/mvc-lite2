const gulp      = require('gulp');
const concat    = require('gulp-concat');

const CONFIG    = require('./build.config');

gulp.task('build', function() {
    return gulp
        .src(CONFIG.BuildOrder)
        .pipe(concat('mvc-lite.js'))
        .pipe(gulp.dest(CONFIG.BuildDestination));
});

gulp.task('build-app', function() {
    return gulp
        .src(CONFIG.AppFilesPath)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(CONFIG.BuildDestination));
});

gulp.task('watch', function() {
    gulp.watch('./core/**/*.js', ['build']);
    gulp.watch('./utilities/**/*.js', ['build']);
    gulp.watch(CONFIG.AppFilesPath, ['build-app']);
});