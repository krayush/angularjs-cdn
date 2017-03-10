var gulp = require('gulp');
var util = require('gulp-util');
var Builder = require('systemjs-builder');
var config = require('../config/config')();
var paths = {
    systemJsConfig: config.src + 'systemjs.conf.js',
    commonBundle: config.build.path + 'js/appLib.bundle.js',
    appBundle: config.build.path + 'js/app.bundle.js'
};
gulp.task('build-systemjs', ['tsc-app'], function (done) {
    var builder = new Builder();
    builder.loadConfig(paths.systemJsConfig).then(function() {
        builder.bundle(
            config.app + '**/*.js - [' + config.app + '**/*.js]',
            paths.commonBundle,
            config.systemJs.builder
        ).then(function() {
            builder.bundle(
                config.app + 'main.js - ' + paths.commonBundle,
                paths.appBundle,
                config.systemJs.builder
            ).then(function() {
                config.lazyLoadModules.map(function (item) {
                    builder.bundle(
                        config.app + item.entryPoint + ' - ' + paths.commonBundle + ' - ' + paths.appBundle,
                        config.build.path + 'js/' + item.bundleName,
                        config.systemJs.builder
                    );
                });
            });
        });
    }).then(function() {
        util.log('Build complete');
        done();
    }).catch(function (ex) {
        util.log('Build failed', ex);
        done('Build failed.');
    });
});