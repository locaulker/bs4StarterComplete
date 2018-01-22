const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function(){

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  
  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.scss', function(){
    gulp.start('cssInject');
  });

});


gulp.task('cssInject',['styles'], function(){
  return gulp.src('./app/temp/css/bundle.css')
    .pipe(browserSync.stream());
});