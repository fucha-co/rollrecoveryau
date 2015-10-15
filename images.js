var Imagemin = require('imagemin');

// Change source if needed. All prod images live in images-prod now.
new Imagemin()
    .src('images/*.{gif,jpg,png,svg}')
    .dest('images-prod')
    .use(Imagemin.jpegtran({progressive: true}))
    .run(function (err, files) {
        console.log(files[0]);
    });
