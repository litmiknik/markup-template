import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import merge from 'merge-stream';
import spritesmith from 'gulp.spritesmith';
import svgSprite from 'gulp-svg-sprite';

import config from '../config.js';

gulp.task('sprite:png', function() {
    let spriteData = gulp.src(config.sprite.png.src, { encoding: false })
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(spritesmith({
            imgName: config.sprite.png.spriteName,
            cssName: config.sprite.png.cssName
        }));

    let imgStream = spriteData.img
        .pipe(gulp.dest(config.sprite.png.dist, { encoding: false }));

    let cssStream = spriteData.css
        .pipe(gulp.dest(config.sprite.png.css));

    return merge(imgStream, cssStream);
});

gulp.task('sprite:svg', function() {
    const configSvgSprite = {
        mode: {
            css: {
                dest: config.sprite.svg.dest,
                bust: false,
                sprite: config.sprite.svg.spritePath,
                render: {
                    scss: {
                        dest: config.sprite.svg.cssPath
                    }
                }
            }
        }
    };

    return gulp.src(config.sprite.svg.src)
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(svgSprite(configSvgSprite))
        .pipe(gulp.dest(config.sprite.svg.dist));
});