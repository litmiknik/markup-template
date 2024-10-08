import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import beautify from 'gulp-beautify';
import pug from 'gulp-pug';
import pugbem from 'pug-bem';

import config from '../config.js';

gulp.task('templates', function() {
    return gulp.src(config.templates.src)
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(pug({ plugins: [pugbem] }))
        .pipe(beautify.html())
        .pipe(gulp.dest(config.templates.dist));
});