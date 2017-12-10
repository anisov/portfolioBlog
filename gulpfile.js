'use strict';
let isDev = true;

//gulp
const gulp = require('gulp');
const rename = require('gulp-rename');
const del = require('del');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');

//html, pug
const pug = require('gulp-pug');

//js
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackCongig = require('./webpack.config');

//scss
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const postcss = require('gulp-postcss');
const autoprefixer = require("autoprefixer");
const cleanCss = require('gulp-cleancss');
const groupMediaQueries = require('gulp-group-css-media-queries');
const objectFitImages = require('postcss-object-fit-images');
const sourcemaps = require('gulp-sourcemaps');

//Доп плагины для настройки
const notify = require('gulp-notify');
const gulpIf = require('gulp-if');

const paths = {
    root: './build',
    templates:{
        pages: 'src/pug/**/*.pug',
        dest:'build/'
    },
    html:{
        pages: 'src/*.html',
        dest:'build/'
    },
    styles:{
        src: 'src/scss/main.scss',
        dest:'build/css/'
    },
    images: {
        src: 'src/img/**/*.{jpg,jpeg,gif,png,svg}',
        dest: 'build/img/'
    },
    scripts: {
        src: 'src/js/*.js',
        dest: 'build/js/'
    },
    fonts: {
        src: 'src/fonts/**/*.{woff,woff2}',
        dest: 'build/fonts/'
    }
};

let postCssPlugins = [
    autoprefixer({
        browsers: ['last 5 version']
    }),
    objectFitImages(),
];

//scss
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(plumber({
            errorHandler: function(err) {
                notify.onError({
                    title: 'Styles compilation error',
                    message: err.message
                })(err);
                this.emit('end');
            }
        })) // При ошибке сервера, слежение не останавливалось
        .pipe(sassGlob())
        .pipe(sourcemaps.init())
        .pipe(gulpIf(isDev, sourcemaps.init()))// Нужен для *.scss в import
        .pipe(sass()) //{outputStyle:'compressed'}
        .pipe(postcss(postCssPlugins))
        //.pipe(groupMediaQueries())
        .pipe(cleanCss())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulpIf(isDev, sourcemaps.write('/')))
        .pipe(gulp.dest(paths.styles.dest))
}

function images() {
    const imagemin = require('gulp-imagemin');
    const pngquant = require('imagemin-pngquant');
    const optipng = require('imagemin-optipng');
    const imageminJpegoptim = require('imagemin-jpegoptim');
    const imageminJpegRecompress = require('imagemin-jpeg-recompress');
    return gulp.src(paths.images.src)
        .pipe(imagemin(
            [imagemin.gifsicle(), imagemin.jpegtran(),imageminJpegoptim({
                //interlaced: true,
                //progressive: true,
                //max: 80
            }),
                imageminJpegRecompress(), optipng(),pngquant({
                //interlaced: true,
                //progressive: true,
                //quality: 80
            })],
            {

            })
        )
        .pipe(gulp.dest(paths.images.dest))
}

//pug
function pugHtml() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(paths.root));
}

function html() {
    return gulp.src(paths.html.pages)
        .pipe(plumber())
        .pipe(gulp.dest(paths.root));
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(gulpWebpack(webpackCongig, webpack))
        .pipe(gulp.dest(paths.scripts.dest))
}

function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))

}

function clean() {
    return del(paths.root);
}

function watch() {
    gulp.watch(paths.templates.src, pugHtml);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.html.pages, html);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.fonts.src, fonts);
}

//Локальный  сервер + livereload
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload)
}

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, pugHtml, html, images, scripts,fonts),
));

gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, pugHtml, html, images, scripts,fonts),
    gulp.parallel(watch, server)
));

exports.pug = pugHtml;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.images = images;
exports.fonts = fonts;
exports.server = server;

/*
const useref = require('gulp-useref');
function userefTask (){

    let assets = useref.assets();
    gulp.src(paths.root+'*.html')
        .pipe( assets )
        .pipe( assets.restore() )
        .pipe( useref() )
        .pipe(gulp.dest('dist'));
    //<!-- build:css css/combined.css --><!-- endbuild -->
    //<!-- build:js scripts/combined.js --><!-- endbuild -->
}
exports.useref = userefTask;
*/