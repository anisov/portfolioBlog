'use strict';
let isDev = true;

//gulp
const gulp = require('gulp'),
    rename = require('gulp-rename'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    plumber = require('gulp-plumber'),
    cached = require('gulp-cached');

//html, pug
const pug = require('gulp-pug');

//js
const gulpWebpack = require('gulp-webpack'),
    webpack = require('webpack'),
    webpackCongig = require('./webpack.config');

//scss
const sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    postcss = require('gulp-postcss'),
    autoprefixer = require("autoprefixer"),
    cleanCss = require('gulp-cleancss'),
    groupMediaQueries = require('gulp-group-css-media-queries'),
    objectFitImages = require('postcss-object-fit-images'),
    sourcemaps = require('gulp-sourcemaps');

//svgSpirte
const svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio');

//png-sprite
const spritesmith = require('gulp.spritesmith');

//favicons
const realFavicon = require ('gulp-real-favicon');
// файл с настройками фавиконок
const faviconData = 'src/img/favicons/faviconData.json';

//Доп плагины для настройки
const notify = require('gulp-notify'),
    gulpIf = require('gulp-if');

const paths = {
    root: './build',
    templates:{
        pages: 'src/templates/pages/**/*.pug',
        watch:'src/templates/**/*',
        dest:'build/'
    },
    html:{
        pages: 'src/*.html',
        dest:'build/'
    },
    styles:{
        src: 'src/scss/main.scss',
        watch:'src/scss/**/*',
        dest:'build/css/'
    },
    images: {
        src: ['src/img/**/*.{jpg,jpeg,gif,png,svg}', 'src/img/sprite/*.*', '!src/img/png-sprite/*.*'],
        dest: 'build/img/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'build/js/'
    },
    fonts: {
        src: 'src/fonts/**/*.{woff,woff2,eot,svg,ttf,otf}',
        dest: 'build/fonts/'
    },
    svgSprite:{
        src:'src/img/sprite/**/*.svg',
        dest:'build/img/sprite'
        },
    spritePng:{
        src: 'src/img/png-sprite/**/*.png',
        dist: 'build/img/png-sprite',
        imgLocation:'../img/png-sprite/sprite.png',
        distFile: 'src/scss/layout'
    },
    favicons:{
        src: 'src/img/favicons/favicon.png',
        dest: 'build/img/favicons'
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
        .pipe(sass({
            includePaths: require('node-normalize-scss').includePaths
        })) //{outputStyle:'compressed'}
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
        .pipe(plumber({
            errorHandler: function(err) {
                notify.onError({
                    title: 'Pug compilation error',
                    message: err.message
                })(err);
                this.emit('end');
            }
        })) 
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

// SVG sprite
function svgSprite() {
	return gulp.src(paths.svgSprite.src)
		.pipe(plumber(function(error) {
			gutil.log(gutil.colors.red(error.message));
			this.emit('end');
		}))
		.pipe(svgmin())
		.pipe(svgstore())
		.pipe(cheerio({
			run: function ($, file) {
				$('svg').addClass('hide');
				$('[fill]').removeAttr('fill');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe(cached('svg-sprite'))
        .pipe(gulp.dest(paths.svgSprite.dest))
		.pipe(reload({stream: true}));
};

// PNG sprite
function pngSprite() {
    var spriteData = gulp.src(paths.spritePng.src).pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
      cssFormat: 'css',
      imgPath: paths.spritePng.imgLocation,
      padding: 70
    }));
    return spriteData.img.pipe(gulp.dest(paths.spritePng.dist)),
    spriteData.css.pipe(gulp.dest(paths.spritePng.distFile));
  };

// Генератор фавиконок
gulp.task('favicon', function(done) {
	realFavicon.generateFavicon({
        masterPicture: paths.favicons.src,
        dest: paths.favicons.dest,
        iconsPath: '/',
		design: {
			ios: {
				pictureAspect: 'noChange',
				assets: {
					ios6AndPriorIcons: false,
					ios7AndLaterIcons: false,
					precomposedIcons: false,
					declareOnlyDefaultIcon: true
				}
			},
			desktopBrowser: {},
			windows: {
				pictureAspect: 'noChange',
				backgroundColor: '#da532c',
				onConflict: 'override',
				assets: {
					windows80Ie10Tile: false,
					windows10Ie11EdgeTiles: {
						small: false,
						medium: true,
						big: false,
						rectangle: false
					}
				}
			},
			androidChrome: {
				pictureAspect: 'noChange',
				themeColor: '#ffffff',
				manifest: {
					display: 'standalone',
					orientation: 'notSet',
					onConflict: 'override',
					declared: true
				},
				assets: {
					legacyIcon: false,
					lowResolutionIcons: false
				}
			}
		},
		settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: false
		},
		markupFile: faviconData
	}, function() {
		done();
	});
});


function clean() {
    return del(paths.root);
}

function watch() {
    gulp.watch(paths.templates.watch, pugHtml);
    gulp.watch(paths.styles.watch, styles);
    gulp.watch(paths.html.pages, html);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.fonts.src, fonts);
    gulp.watch(paths.spritePng.src, pngSprite);
    gulp.watch(paths.svgSprite.src, svgSprite);
    //gulp.watch(paths.favicons.src, favicons);
}

//Локальный  сервер + livereload
function server() {
    browserSync.init({
        server: paths.root
    });
    //browserSync.watch(paths.root + '/**/*.*')
}

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, pugHtml, html, images, scripts, fonts, pngSprite, svgSprite,),
));

gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, pugHtml, html, images, scripts, fonts, pngSprite, svgSprite,),
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
exports.watch = watch;
exports.svg = svgSprite;
exports.png = pngSprite;
//exports.favicons = favicons;

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