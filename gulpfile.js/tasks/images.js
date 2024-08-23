import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import imagemin from 'gulp-imagemin';

import config from '../config.js';

gulp.task('images', function() {
    return gulp.src(config.images.src, { encoding: false })
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(newer(config.images.dist))
        .pipe(imagemin())
        .pipe(gulp.dest(config.images.dist, { encoding: false }));
});