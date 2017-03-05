var gulp = require('gulp');
var path = require('path');
var config = require('../config')();

// Simply run tsc-app when any change is encountered in html or scss file
gulp.task('watch-html', function () {
    gulp.watch(config.app + '**/*.html', ['tsc-app']);
});