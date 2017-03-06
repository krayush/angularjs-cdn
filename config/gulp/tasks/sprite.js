var gulp = require('gulp');
var config = require('../config')();
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var buffer = require('vinyl-buffer');
var merge = require('merge-stream');

gulp.task('sprite', function () {
    // Generate our sprite-sheet
    var spriteData = gulp.src(config.assetsPath.images + 'sprite-src/*.png').pipe(spritesmith({
        imgName: config.assetsPath.images + 'sprite-dist/olpSprite-' + new Date().getTime() + '.png',
        cssName: config.assetsPath.styles + '_olpSprite.scss',
        padding: 10,
        cssTemplate: config.assetsPath.images + 'sprite-src/sprite-template/template.handlebars'
    }));
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    var imgStream = spriteData.img.pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest('./'));
    var cssStream = spriteData.css.pipe(gulp.dest('./'));
    return merge(imgStream, cssStream);
});
