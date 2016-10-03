var gulp = require('gulp')
var pug = require('gulp-pug')
var styl = require('gulp-stylus')

//public command

gulp.task('default', ['build'])

gulp.task('build', ['_pug', '_styl'])

gulp.task('watch', ['build'], () => {
    gulp.watch('pug/**/*.pug', ['_pug'])
    gulp.watch('stylus/*.styl', ['_styl'])
})

//private task

gulp.task('_pug', () => {
        return gulp.src('pug/*.pug')
            .pipe(pug())
            .pipe(gulp.dest('./'))
    }
)

gulp.task('_styl', () => {
        return gulp.src('stylus/*.styl')
            .pipe(styl())
            .pipe(gulp.dest('css/'))
    }
)
