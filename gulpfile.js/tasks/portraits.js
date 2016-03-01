var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var config = require('../config/portraits');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');

gulp.task('portraits', function() {

    return gulp.src(config.src)
        .pipe(changed(config.dest)) // Ignore unchanged files
        .pipe(imageResize({
            width: 400,
            height: 400,
            filter: 'Catrom',
            imageMagick: true
        }))
        .pipe(imagemin({
            progressive: true
        })) // Optimize
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({
            stream: true
        }))
});
