var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    minifyhtml= require('gulp-minify-html'),
    minifyinline= require('gulp-minify-inline'),
    concatify = require('gulp-concat'),
    imagemin = require('gulp-imagemin');

gulp.task('scripts', function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(concatify('app.js'))
        .pipe(gulp.dest('js/min'));
});

gulp.task('css', function(){
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/min'));
});

gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(minifyinline())
    .pipe(concatify('indexMin.html'))
    .pipe(gulp.dest('./'))
    .pipe(minifyhtml())
    .pipe(concatify('indexMin.html'))
    .pipe(gulp.dest('./'));
});

gulp.task('images', function() {
    gulp.src('img/*.*')
        .pipe(imagemin({
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('img/min'));
})

gulp.task('viewsImg', function() {
    gulp.src('views/images/*')
        .pipe(imagemin({
            optimizationLevel: 5
            }))
        .pipe(gulp.dest('views/images/min'));
})

gulp.task('watch', function(){
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('css/**/*.css', ['css']);
});

gulp.task('default', ['scripts', 'css', 'images', 'viewsImg', 'html']);