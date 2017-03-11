var runSequence = require('run-sequence');
var envConfig = require('../utils/env');
if (envConfig.ENV === envConfig.ENVS.DEV) {
    var gulp = require('gulp');
    var config = require('../config/config')();
    var bs = require("browser-sync");
    var dashboard = require('../utils/dashboard');

    function startBrowserSync(config) {
        bsIns = bs.create();
        bsIns.init(config);
        bsIns.reload();
    }

    /* Start local CDN server */
    gulp.task('start-dev-server', function() {
        dashboard.show();
        return runSequence(['watch-assets-sass', 'watch-ts', 'watch-html', 'watch-app-sass'], function() {
            startBrowserSync(config.browserSync.dev);
        });
    });
}