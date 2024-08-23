import gulp from 'gulp';
import browserSync from 'browser-sync';
browserSync.create();

import config from '../config.js';

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: config.dist
        }
    });

    gulp.watch(config.serve.watch).on('change', browserSync.reload);
});