import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import zip from 'gulp-zip';

import config from '../config.js';

gulp.task('zip', function() {
    return gulp.src(config.zip.src)
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
		.pipe(zip(config.zip.name))
		.pipe(gulp.dest(config.zip.dist))
});