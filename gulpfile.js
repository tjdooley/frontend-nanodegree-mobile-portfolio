var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    minifyhtml= require('gulp-minify-html'),
    minifyinline= require('gulp-minify-inline'),
    imagemin = require('gulp-imagemin');

gulp.task('js', function(){
    gulp.src('./js/*.*')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('views-js', function(){
    gulp.src('./views/js/*.*')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/views/js'));
});

gulp.task('css', function(){
    gulp.src('./css/*.*')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('views-css', function(){
    gulp.src('./views/css/*.*')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/views/css'));
});

gulp.task('html', function() {
  gulp.src('./*.html')
    .pipe(minifyinline())
    .pipe(gulp.dest('./dist'))
    .pipe(minifyhtml())
    .pipe(gulp.dest('./dist'));
});

gulp.task('views-html', function() {
  gulp.src('./views/*.html')
    .pipe(minifyinline())
    .pipe(gulp.dest('./dist/views'))
    .pipe(minifyhtml())
    .pipe(gulp.dest('./dist/views'));
});

gulp.task('img', function() {
    gulp.src('./img/*.*')
        .pipe(imagemin({
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('./dist/img'));
})

gulp.task('views-img', function() {
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

gulp.task('default', ['js', 'views-js', 'css', 'views-css', 'img', 'views-img', 'html', 'views-html']);