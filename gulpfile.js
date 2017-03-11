var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./gulp/tasks'),
    runSequence = require('run-sequence');
/* Default task */
gulp.task('default', function() {
    runSequence('build-dev','build-prod','start-dev-server');
});
