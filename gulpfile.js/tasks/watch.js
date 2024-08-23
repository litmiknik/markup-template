import gulp from 'gulp';

import config from '../config.js';

gulp.task('watch', function() {
    gulp.watch(config.templates.watch, gulp.series('templates'));
    gulp.watch(config.styles.watch, gulp.series('styles'));
    gulp.watch(config.scripts.watch, gulp.series('scripts'));
    gulp.watch(config.images.watch, gulp.series('images'));
    gulp.watch(config.sprite.png.watch, gulp.series('sprite:png'));
    gulp.watch(config.sprite.svg.watch, gulp.series('sprite:svg'));
    gulp.watch(config.fonts.watch, gulp.series('fonts'));
    gulp.watch(config.media.watch, gulp.series('media'));
});