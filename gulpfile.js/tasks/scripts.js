import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import beautify from 'gulp-beautify';
import uglify from 'gulp-uglify';

import config from '../config.js';

gulp.task('scripts', function() {
    return gulp.src(config.scripts.src)
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(beautify())
        .pipe(gulp.dest(config.scripts.dist))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(config.scripts.dist));
});