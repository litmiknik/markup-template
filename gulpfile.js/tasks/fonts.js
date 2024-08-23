import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';

import config from '../config.js';

gulp.task('fonts', function() {
    return gulp.src(config.fonts.src, { encoding: false })
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(newer(config.fonts.dist))
        .pipe(gulp.dest(config.fonts.dist, { encoding: false }));
});