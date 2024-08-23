import './tasks/templates.js';
import './tasks/styles.js';
import './tasks/scripts.js';
import './tasks/images.js';
import './tasks/sprite.js';
import './tasks/fonts.js';
import './tasks/media.js';
import './tasks/clean.js';
import './tasks/zip.js';
import './tasks/serve.js';
import './tasks/watch.js';

import gulp from 'gulp';

const build = gulp.series(
    'clean',
    'templates',
    'styles',
    'scripts',
    'images',
    'sprite:png',
    'sprite:svg',
    'fonts',
    'media'
);

gulp.task('default', gulp.series(
    build,
    gulp.parallel('serve', 'watch')
));