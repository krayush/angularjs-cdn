var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config')();
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var file = require('gulp-file');

gulp.task('assets-sass', ['fonts', 'sprite'], function () {
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
        .pipe(autoprefixer())
        .pipe(cssnano({
            zindex: false
        }))
        //.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.app));
});

gulp.task('watch-app-sass', function () {
    gulp.watch(config.app + '**/*.scss', ['tsc-app']);
});

gulp.task('external-css-prod', function () {
    var externalAssets = require('../../../src/externalAssets.json');
    var filteredAssets = externalAssets.cssAssets.dev.filter(function(item) {
        return item.indexOf("#buildRemove") === -1;
    });
    if(filteredAssets.length) {
        return gulp.src(filteredAssets)
            .pipe(concat('library.css'))
            .pipe(cssnano({
                zindex: false
            }))
            .pipe(gulp.dest(config.build.assetPath));
    } else {
        return file('library.css', "", { src: true })
            .pipe(gulp.dest(config.build.assetPath));
    }
});