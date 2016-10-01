var gulp = require('gulp')
var pug = require('gulp-pug')

gulp.task('default', ['pug'])

gulp.task('pug', function () {
    return gulp.src('pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'))
})