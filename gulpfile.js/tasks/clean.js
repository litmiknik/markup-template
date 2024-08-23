import gulp from 'gulp';
import { deleteSync } from 'del';

import config from '../config.js';

gulp.task('clean', function(done) {
    deleteSync(config.clean.dist, { force: true });
    done();
});