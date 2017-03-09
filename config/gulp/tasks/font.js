var gulp = require('gulp');
var config = require('../config')();
var _ = require('lodash');
var runSequence = require('run-sequence');
var iconFontCSS = require('gulp-iconfont-css');
var iconFont = require('gulp-iconfont');
var runTimestamp = Math.round(Date.now()/1000);

gulp.task('external-fonts-dev', function () {
    _.forOwn(config.externalFonts, function(value, key) {
        gulp.src(value).pipe(gulp.dest(config.assetsPath.fonts + key));
    });
});

gulp.task('external-fonts-prod', function () {
    _.forOwn(config.externalFonts, function(value, key) {
        gulp.src(value).pipe(gulp.dest(config.build.fonts + key));
    });
});

// Don't clean app-fonts as it might contain developer added fonts
gulp.task('app-fonts', function () {
    gulp.src(config.assetsPath.fonts + '**/*.*', {
        base: config.assetsPath.fonts
    }).pipe(gulp.dest(config.build.fonts));
});

// Task for generating fonts from SVGs
// fontPath should be relative from the location of main.css in build directory
gulp.task('custom-fonts', ['clean-custom-fonts'], function() {
    var fontName = 'icons';
    return gulp.src(config.assetsPath.customIcons + '*.svg')
        .pipe(iconFontCSS({
            fontName: fontName,
            fontPath: "../fonts/custom-fonts/",
            // path relative to gulp.dest
            targetPath: '../../styles/_icons.scss'
        }))
        .pipe(iconFont({
            fontName: fontName, // required
            prependUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
            normalize: true,
            timestamp: runTimestamp // recommended to get consistent builds when watching files
        }))
        .pipe(gulp.dest(config.assetsPath.fonts + 'custom-fonts/'));
});

// Task for generating fonts for both dev and prod environment
gulp.task('fonts', ['external-fonts-dev', 'external-fonts-prod'], function(done) {
    runSequence('custom-fonts', 'app-fonts', done);
});