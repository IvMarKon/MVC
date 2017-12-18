var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs')
concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    del = require('del'),
    eslint = require('gulp-eslint'),
    eslint_conf = require('../eslint/eslintrc.json'),
    sourcemaps = require('gulp-sourcemaps'),
    injectSvg = require('gulp-inject-svg'),
    injectSvgOptions = { base: '../img' };

var ROOT = '../../';

gulp.task('sass', function () {
    return gulp.src(ROOT + 'src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(ROOT + 'dist/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('concatScripts', function () {
    gulp.src(ROOT + 'dist/tmp/widget.js')
        .pipe(sourcemaps.init())
        .pipe(concat('widget.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(ROOT + 'dist/js'));
});

/*gulp.task('minifyScripts', ['concatScripts'], function () {
    return gulp.src(ROOT + 'dist/js/widget.min.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(ROOT + 'dist/js'));
});*/

gulp.task('lint', function () {
    return gulp.src(ROOT + 'src/js/*.js')
        .pipe(eslint(eslint_conf))
        .pipe(eslint.format());
});

gulp.task('svg-ingect', function () {
    return gulp.src('../js/widget.js')
        .pipe(injectSvg(injectSvgOptions))
        .pipe(gulp.dest(ROOT+'dist/tmp'));
});

gulp.task('jquery', function () {
    return gulp.src([
        ROOT + "node_modules/jquery/dist/jquery.min.js",
        ROOT + "node_modules/jquery-ui-dist/jquery-ui.min.js"
    ])
        .pipe(concat('assets.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(ROOT + 'dist/js'));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: ROOT
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'jquery', 'concatScripts', 'lint','svg-ingect'], function () {
    gulp.watch('../sass/**/*.+(sass|scss)', ['sass']);
    gulp.watch('../../*.html', browserSync.reload);
    gulp.watch('./*.js', ['lint', browserSync.reload]);
});