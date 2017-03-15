var gulp = require('gulp');
var typedoc = require("gulp-typedoc");
var config = require('../config/config')();
var typedocJSON = require("../../typedoc.json");

// Generate documentation of whole project
gulp.task("typedoc", function() {
    return gulp
        .src(config.tsFiles)
        .pipe(typedoc(typedocJSON));
});