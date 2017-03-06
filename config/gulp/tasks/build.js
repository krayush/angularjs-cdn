var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config')();
var sourcemaps = require('gulp-sourcemaps');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var rename = require('gulp-rename');

require('@ngstarter/systemjs-extension')(config);
gulp.task('build-prod', function (done) {
    runSequence('build-systemjs', 'build-assets', 'build-prod-js', done);
});

// clean-app-ts, clean-app-sass will be run by tsc-app
gulp.task('build-dev', function(done) {
    runSequence(['clean-assets-sass', 'clean-app-map'], 'tsc-app', 'assets-sass', done);
});

/* Concat and minify/uglify all css and js */
gulp.task('build-assets', ['assets-sass'], function () {
    gulp.src(config.src + 'favicon.ico').pipe(gulp.dest(config.build.path));
    // Moving images in assets to build directory
    gulp.src(config.assetsPath.images + '**/*.*', {
        base: config.assetsPath.images
    }).pipe(gulp.dest(config.build.assetPath + 'images'));

    // Moving main.css file to build directory
    gulp.src(config.assetsPath.styles + 'main.css', {
        base: config.assetsPath.styles
    })
        .pipe(rename('bundle.css'))
        .pipe(gulp.dest(config.build.assetPath));
});

gulp.task('build-prod-js', function () {
    // Causes of error in this step: File specified in json file missing or invalid json file
    var externalAssets = require('../../../src/externalAssets.json');
    // Removing #buildRemove files
    var filteredAssets = externalAssets.jsAssets.dev.filter(function(item) {
        return item.indexOf("#buildRemove") === -1;
    });
    gulp.src(filteredAssets)
        .pipe(concat('lib.js'))
        .pipe(uglify())
        .pipe(minify())
        .pipe(rename('lib.js')) // Step required for removing the min file
        .pipe(gulp.dest(config.build.assetPath));
    gulp.src(config.app + 'bundle.js')
        .pipe(rename('app.js'))
        .pipe(gulp.dest(config.build.assetPath));
});