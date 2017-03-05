var gulp = require('gulp');
var config = require('../config')();
var del = require('del');

/* Run all clean tasks */
gulp.task('clean', ['clean-build', 'clean-app-ts', 'clean-assets-sass', 'clean-app-map', 'clean-app-sass']);

/* Clean build folder */
gulp.task('clean-build', function () {
    return del([config.build.path]);
});

/* Clean assets sass compile */
gulp.task('clean-assets-sass', function () {
    return del([config.assetsPath.styles + '**/*.css']);
});

// Cleaning compiled js files
gulp.task('clean-app-ts', function () {
    return del([config.app + '**/*.js']);
});

// Cleaning all (css/js/*) map files
gulp.task('clean-app-map', function () {
    return del([config.app + '**/*.map']);
});

// Clean app sass compile
gulp.task('clean-app-sass', function () {
    return del([config.app + '**/*.css']);
});
