var gulp = require('gulp');
var util = require('gulp-util');
var Builder = require('systemjs-builder');
var config = require('../config/config')();
var path = config.app;
var systemJsConfig = config.src + 'systemjs.conf.js';

gulp.task('build-systemjs', ['tsc-app'], function (done) {
    var builder = new Builder();
    builder.loadConfig(systemJsConfig).then(function() {
        builder.buildStatic(
            path + 'main.js',
            config.build.path + 'js/appBundle.js',
            config.systemJs.builder
        );
    }).then(function() {
        util.log('Build complete');
        done();
    }).catch(function (ex) {
        util.log('Build failed', ex);
        done('Build failed.');
    });
});