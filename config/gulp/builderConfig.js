var gulp = require('gulp');
var util = require('gulp-util');
var runSequence = require('run-sequence');
var Builder = require('systemjs-builder');
var config = require('./config')();
var path = config.tmpApp;
var lazyLoadModules = [{
    name: 'eventsModule',
    path: path +'components/events/**/*.js'
}, {
    name: 'crisisModule',
    path: path + 'components/crisis-center/**/*.js'
}];
module.exports = function(systemJsConfig) {
    var defaultSystemJsConfig = config.src + 'systemjs.conf.js';
    systemJsConfig = systemJsConfig || defaultSystemJsConfig;
    gulp.task('build-systemjs', function (done) {
        runSequence('tsc-app', buildSJS);
        function buildSJS () {
            var builder = new Builder();
            builder.loadConfig(systemJsConfig).then(function() {
                var bundlePath = path + 'main.js';
                lazyLoadModules.map(function(item) {
                    bundlePath += ' + ' + item.path;
                });
                builder.buildStatic(
                    bundlePath,
                    config.build.path + 'js/appBundle.js',
                    config.systemJs.builder
                );
                // lazyLoadModules.map(function(item) {
                //     builder.bundle(
                //         item.path,
                //         config.build.path + 'js/' + item.name + '.js',
                //         config.systemJs.builder
                //     );
                // });
            }).then(function() {
                util.log('Build complete');
                done();
            }).catch(function (ex) {
                util.log('Build failed', ex);
                done('Build failed.');
            });
        }
    });
};
