var gulp = require('gulp');
var jshint = require('jshint-stylish');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var sassInput = './scss/style.scss';
var sassOutput = './style';

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'nested',
    sourceComments: true,
}

gulp.task('check-js', function(){
    return gulp.src('./js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish', {beep: true}))
});

gulp.task('sass', function(){
    return gulp.src(sassInput)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(sassOutput))
});

gulp.task('sass-watch', function(){
    gulp.watch('./scss/**/*.scss', ['sass']);
})