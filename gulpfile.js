var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var minifyCss = require('gulp-minify-css');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var uncss = require('gulp-uncss');

//Uncss
gulp.task('default', function() {
    return gulp.src('css/common.css')
        .pipe(uncss({
            html: ['app/index.html']
        }))
        .pipe(gulp.dest('app/css'));
});
//
/*// Server connect
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
//

//CSS
gulp.task('css', function () {
  	gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 15 version'))
    .pipe(minifyCss(''))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});
//


//Html
gulp.task('html', function(){
	gulp.src('app/index.html')
	.pipe(connect.reload());
})
//

//Watch
gulp.task('watch', function(){
	gulp.watch('css/*.css', ['css'])
	gulp.watch('app/index.html', ['html'])
})
//

gulp.task('default', ['connect', 'css', 'html', 'watch']);*/