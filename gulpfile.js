var gulp = require('gulp')
var pug = require('gulp-pug')

//public command

gulp.task('default', ['build'])

gulp.task('build', ['_pug'])

gulp.task('watch', ['build'], () => {
    gulp.watch('pug/*.pug', ['_pug']).on('change', (event)=>{
        console.log('build pug: ' + event.path)
    })
})

//private task

gulp.task('_pug', () => {
    return gulp.src('pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'))
})
