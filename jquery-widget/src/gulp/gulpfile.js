var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    minify = require('gulp-minify'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    eslint = require('gulp-eslint'),
    eslint_conf = require('../eslint/eslintrc.json'),
    sourcemaps = require('gulp-sourcemaps'),
    injectSvg = require('gulp-inject-svg'),
    inline = require('gulp-inline'),
    jsdoc = require("gulp-jsdoc")
injectSvgOptions = {
    base: '../img'
};

var ROOT = '../../';

//delete previous ready sass block
gulp.task('clean_sass', function () {
    return del(ROOT + '/css/*.css', {
        force: true
    });
});
//compile sass block
gulp.task('sass', ['clean_sass'], function () {
    return gulp.src(ROOT + 'src/sass/*.+(sass|scss)')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(ROOT + '/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

//delete previous ready sass block
gulp.task('clean_js', function () {
    return del(ROOT + '/js/**.*', {
        force: true
    });
});
//concat and uglify jquery
gulp.task('jquery', ['clean_js'], function () {
    return gulp.src([
            ROOT + "node_modules/jquery/dist/jquery.min.js",
            ROOT + "node_modules/jquery-ui-dist/jquery-ui.min.js"
        ])
        .pipe(uglify())
        .pipe(concat('assets.min.js'))
        .pipe(gulp.dest(ROOT + '/js'));
});

//run eslint through widget and main files
gulp.task('lint', function () {
    return gulp.src(ROOT + 'src/js/*.js')
        .pipe(eslint(eslint_conf))
        .pipe(eslint.format());
});
//clear tmp widjet file with previous injected svg
gulp.task('clean-inject', function () {
    return del(ROOT + '/index.html', {
        force: true
    });
});
//inject svg and create new file
gulp.task('svg-inject', ['clean-inject'], function () {
    return gulp.src(ROOT+'/src/index.html')
        .pipe(injectSvg(injectSvgOptions))
        .pipe(gulp.dest(ROOT));
});

//create main file sourcemap
gulp.task('main-map', ['lint'], function () {
    return gulp.src(ROOT + '/src/js/main.js')
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(ROOT + '/js'));
});
//minify main file
gulp.task('main-min', ['main-map'], function(){
    return gulp.src(ROOT + '/js/main.min.js')
            .pipe(uglify())
            // .pipe(rename({
            //     suffix: '.min'
            // }))
            .pipe(gulp.dest(ROOT + '/js'))
            .pipe(browserSync.reload({
                stream: true
            }));
})

//minify widget script and create sourcemaps
gulp.task('widget-min', ['lint'], function () {
    return gulp.src(ROOT + '/src/js/widget.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('widget.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(ROOT + '/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
//clear tmp widjet file with previous injected svg
gulp.task('clean-global', function () {
    return del(ROOT + 'dist', {
        force: true
    });
});
gulp.task('browser-sync', ['clean-global','svg-inject'], function () {
    browserSync({
        server: {
            baseDir: ROOT
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'jquery', 'widget-min', 'main-min'], function () {
    gulp.watch('../sass/**/*.+(sass|scss)', ['sass']);
    gulp.watch('../*.html', browserSync.reload);
    gulp.watch('../js/*.js', ['lint', 'widget-min', 'main-min']);
});