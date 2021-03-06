var gulp = require("gulp"),
    connect = require("gulp-connect"),
    opn = require("opn");

gulp.task('connect', function(){
    connect.server({
        root: 'app',
        livereload: true,
        port: 8888
    });
    opn('http://loaclhost:8888');
});

gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});
gulp.task('css', function () {
    gulp.src('./app/css/*.css')
        .pipe(connect.reload());
});
gulp.task('js', function () {
    gulp.src('./app/js/*.js')
        .pipe(connect.reload());
});
gulp.task('watch', function() {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./app/css/*.css'], ['html']);
    gulp.watch(['./app/js/*.js'], ['html']);
});
gulp.task('default', ['connect', 'watch']);