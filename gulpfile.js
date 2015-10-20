var gulp = require('gulp')
var rename = require('gulp-rename')
var uncss = require('gulp-uncss')
var minifycss = require('gulp-minify-css')
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var paths = {
  styles: ['css/tachyons.css'],
  html: ['index.html'],
  images: ['i/*']
};

gulp.task('uncss', function () {
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

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.styles, ['uncss']);
  gulp.watch(paths.html, ['uncss']);
  gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'uncss', 'images']);
