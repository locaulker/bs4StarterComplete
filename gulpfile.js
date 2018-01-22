const gulp = require('gulp'),
sass = require('gulp-sass'),
watch = require('gulp-watch'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
merge = require('merge-stream'),
concat = require('gulp-concat'),
browserSync = require('browser-sync').create();



gulp.task('default', function(){
  console.log("Hooray! - you created a gulp task");
});

gulp.task('html', function(){
  console.log("Imagine something useful being done to your HTML here.");
});

// Compile and merge CSS files
gulp.task('styles', function(){

  var m1_faCSS = gulp.src('node_modules/font-awesome/css/font-awesome.css');
  var m2_bsCSS = gulp.src('node_modules/bootstrap/dist/css/bootstrap.css');
  var m3_customSCSS = gulp.src('./app/assets/styles/**/*.scss')
    .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
      }))

    return merge(m1_faCSS, m2_bsCSS, m3_customSCSS)
      .pipe(sourcemaps.init())
      .pipe(concat('bundle.css'))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./app/temp/css'));
});



// Move Font-Awesome fonts to app/assets folder
gulp.task('fa-fonts', function(){
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./app/temp/fonts'));
});



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

// gulp.task('default', ['styles', 'fa-fonts']);