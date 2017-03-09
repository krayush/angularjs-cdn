var gulp = require('gulp');
var util = require('gulp-util');
var config = require('../config/config')();
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var argv = require('yargs').argv;
var plumber = require('gulp-plumber');
var stylish = require('gulp-tslint-stylish');
var inlineNg2Template = require('gulp-inline-ng2-template');

/* Watch changed typescripts file and compile it */
gulp.task('watch-ts', function () {
    return gulp.watch(config.tsFiles, function (file) {
        util.log('Compiling ' + file.path + '...');
        return compileTs(file.path, true);
    });
});

// Compiling all the app files
// Note: app-sass needs to run before this to generate equivalent css files
gulp.task('tsc-app', ['clean-app-ts', 'app-sass'], function () {
    return compileTs(config.tsFiles);
});

/* Lint typescripts */
gulp.task('tslint', function () {
    return gulp.src(config.tsFiles)
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report(stylish, {
            emitError: false,
            sort: true
        }));
});

function compileTs(files) {
    var inline = !argv.excludeSource;
    var tsProject = ts.createProject('tsconfig.json');
    var res = gulp.src(files, {
        base: config.app
    })
    // Required for embedding css and templates inside js
    .pipe(inlineNg2Template({
        useRelativePaths: true,
        customFilePath: function(ext, file) {
            if(ext[0] === "scss") {
                file = file.split("scss").join("css");
            }
            return file;
        }
    }))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(tsProject());
    // Writing sourcemaps required for debugging
    return res.js.pipe(sourcemaps.write('.', {
        includeContent: inline
    })).pipe(gulp.dest(config.app));
}