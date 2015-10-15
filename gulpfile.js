var gulp = require('gulp')
var rename = require('gulp-rename')
var uncss = require('gulp-uncss')
var minifycss = require('gulp-minify-css')
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


gulp.task('default', function () {
    return gulp.src('css/tachyons.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(minifycss())
        .pipe(rename('tachyons.stripped.css'))
        .pipe(gulp.dest('./css'));
});

gulp.task('images', function () {
    return gulp.src('i/*')
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images-prod'));
})
