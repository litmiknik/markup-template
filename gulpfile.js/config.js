const src = '../src';
const dist = '../build';
const assets = '/assets';

const templates = {
    src: src + '/templates/*.pug',
    dist: dist,
    watch: [
        src + '/templates/**/*.pug',
        src + '/components/**/*.pug'
    ]
};
const styles = {
    src: src + '/styles/*.{scss,sass}',
    dist: dist + assets + '/styles',
    watch: [
        src + '/styles/**/*.{scss,sass}',
        src + '/components/**/*.{scss,sass}'
    ]
};
const scripts = {
    src: src + '/scripts/*.js',
    dist: dist + assets + '/scripts',
    watch: [
        src + '/scripts/**/*.js',
        src + '/components/**/*.js'
    ]
};
const images = {
    src: [
        src + '/images/**/*.{gif,jpg,jpeg,png,webp,svg,ico}',
        src + '/components/**/*.{gif,jpg,jpeg,png,webp,svg,ico}',
        '!' + src + '/images/sprite/**/*.*'
    ],
    dist: dist + assets + '/images',
    watch: [
        src + '/images/**/*.{gif,jpg,jpeg,png,webp,svg,ico}',
        src + '/components/**/*.{gif,jpg,jpeg,png,webp,svg,ico}',
        '!' + src + '/images/sprite/**/*.*'
    ]
};
const sprite = {
    png: {
        src: src + '/images/sprite/**/*.png',
        dist: dist + assets + '/images',
        css: src + '/styles/utils',
        watch: src + '/images/sprite/**/*.png',
        spriteName: 'sprite.png',
        cssName: 'spritePng.scss'
    },
    svg: {
        src: src + '/images/sprite/**/*.svg',
        dist: dist + assets + '/images',
        watch: src + '/images/sprite/**/*.svg',
        dest: '../styles/',
        spritePath: '../images/sprite.svg',
        cssPath: '../../' + src + '/styles/utils/spriteSvg.scss'
    }
};
const fonts = {
    src: [
        src + '/fonts/**/*.{woff,woff2,ttf,otf,eot,svg}',
        src + '/components/**/*.{woff,woff2,ttf,otf,eot,svg}'
    ],
    dist: dist + assets + '/fonts',
    watch: [
        src + '/fonts/**/*.{woff,woff2,ttf,otf,eot,svg}',
        src + '/components/**/*.{woff,woff2,ttf,otf,eot,svg}'
    ]
};
const media = {
    src: [
        src + '/media/**/*.{mp3,mp4,ogg}',
        src + '/components/**/*.{mp3,mp4,ogg}'
    ],
    dist: dist + assets + '/media',
    watch: [
        src + '/media/**/*.{mp3,mp4,ogg}',
        src + '/components/**/*.{mp3,mp4,ogg}'
    ]
};
const clean = {
    dist: dist + '/**'
};
const zip = {
    src: dist + '/**',
    dist: './',
    name: '../build.zip'
};
const serve = {
    watch: src + '/**/*.*',
    dir: '../build'
};

export default {
    dist,
    templates,
    styles,
    scripts,
    images,
    sprite,
    fonts,
    media,
    clean,
    zip,
    serve
};