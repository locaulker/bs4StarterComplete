const gulp = require('gulp'),
sass = require('gulp-sass'),
watch = require('gulp-watch'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
merge = require('merge-stream'),
concat = require('gulp-concat');



gulp.task('default', function(){
  console.log("Hooray! - you created a gulp task");
});

gulp.task('html', function(){
  console.log("Imagine something useful being done to your HTML here.");
});

// Compile and merge CSS files
gulp.task('styles', function(){

  const stream1 = gulp.src('node_modules/font-awesome/css/font-awesome.css');
  const stream2 = gulp.src('node_modules/bootstrap/dist/css/bootstrap.css');
  const stream3 = gulp.src('./app/assets/styles/**/*.scss')
    .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
      }))

    return merge(stream1, stream2, stream3)
      .pipe(sourcemaps.init())
      .pipe(concat('bundle.css'))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./app/temp/css'));
});



// Move Font-Awesome fonts to app/assets folder
gulp.task('fa-fonts', function(){
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./app/assets/fonts'));
});



gulp.task('watch', function(){
  
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.scss', function(){
    gulp.start('styles');
  });

});