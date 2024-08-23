import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import beautify from 'gulp-beautify';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import postcssMergeRules from 'postcss-merge-rules';
import postcssMergeQueries from 'postcss-merge-queries';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-csso';
import browserSync from 'browser-sync';

import config from '../config.js';

const sass = gulpSass(dartSass);

gulp.task('styles', function() {
    return gulp.src(config.styles.src)
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(sass())
        .pipe(postcss([ autoprefixer(), postcssMergeRules(), postcssMergeQueries() ]))
        .pipe(beautify.css())
        .pipe(gulp.dest(config.styles.dist))
        .pipe(csso())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(config.styles.dist))
        .pipe(browserSync.stream());
});