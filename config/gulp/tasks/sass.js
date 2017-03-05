var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config')();
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');

gulp.task('assets-sass', function () {
    return gulp.src(config.assetsPath.styles + 'main.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano({
            zindex: false
        }))
        //.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.assetsPath.styles));
});

gulp.task('watch-assets-sass', function () {
    gulp.watch(config.assetsPath.styles + '**/*.scss', ['assets-sass']);
});

gulp.task('app-sass', ['clean-app-sass'], function () {
    return gulp.src(config.app + '**/*.scss', {
        base: config.app
    })
        // .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano({
            zindex: false
        }))
        //.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.app));
});

gulp.task('watch-app-sass', function () {
    gulp.watch(config.app + '**/*.scss', ['tsc-app']);
});
