var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    minifyhtml= require('gulp-minify-html'),
    minifyinline= require('gulp-minify-inline'),
    imagemin = require('gulp-imagemin');

gulp.task('scripts', function(){
    gulp.src('./js/*.*')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', function(){
    gulp.src('./css/*.*')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe(minifyinline())
    .pipe(gulp.dest('./dist'))
    .pipe(minifyhtml())
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
    gulp.src('./img/*.*')
        .pipe(imagemin({
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('./dist/img'));
})

gulp.task('viewsImg', function() {
    gulp.src('./views/images/*')
        .pipe(imagemin({
            optimizationLevel: 5
            }))
        .pipe(gulp.dest('./dist/views/images'));
})

gulp.task('watch', function(){
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('css/**/*.css', ['css']);
});

gulp.task('default', ['scripts', 'css', 'images', 'viewsImg', 'html']);