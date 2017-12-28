var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    eslint = require('gulp-eslint')

var ROOT = './';

gulp.task('lint', function () {
    return gulp.src(ROOT + 'js/*.js')
    .pipe(eslint({
        globals: [
            'jQuery',
            '$'
        ],
        envs: [
            'browser'
        ],
        parserOptions: {
            "ecmaVersion": 6,
            "sourceType": "script",
            "ecmaFeatures": {}
        },
        rules: {
            'no-alert': 1,
            'no-bitwise': 1,
            'camelcase': 1,
            'curly': 1,
            'eqeqeq': 1,
            'no-eq-null': 1,
            'guard-for-in': 1,
            'no-empty': 1,
            'no-use-before-define': 1,
            'no-obj-calls': 2,
            //'no-unused-vars': 1,
            'new-cap': 1,
            'no-shadow': 0,
            // 'strict': 1,
            'no-invalid-regexp': 2,
            'comma-dangle': 2,
            //'no-undef': 1,
            'no-new': 1,
            'no-extra-semi': 1,
            'no-debugger': 2,
            'no-caller': 1,
            'semi': 1,
            'quotes': 1,
            'no-unreachable': 2,
            'fix': true
        }
    }))
        .pipe(eslint.format());
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: ROOT+"sorts_files"
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'lint'], function () {
    gulp.watch(ROOT+'*.html', browserSync.reload);
    gulp.watch(ROOT+'js/*.js', ['lint',browserSync.reload]);
});

gulp.task('debug',function(){
    gulp.watch(ROOT+'js/*.js', ['lint']);
});
