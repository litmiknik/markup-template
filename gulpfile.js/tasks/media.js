import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';

import config from '../config.js';

gulp.task('media', function() {
    return gulp.src(config.media.src, { encoding: false })
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(newer(config.media.dist))
        .pipe(gulp.dest(config.media.dist, { encoding: false }));
});