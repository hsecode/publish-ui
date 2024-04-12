const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const sourcemaps = require('gulp-sourcemaps');
const cleancss = require("gulp-clean-css");
const autoprefixer = require('gulp-autoprefixer');
const Fiber = require('fibers');
const dartSass = require('dart-sass');
const browserSync = require('browser-sync').create();

gulp.task('mall', function(){
    const options = {
      sass : {
        outputStyle: 'expanded',
        indentType: 'tab',
        indentWidth: 2,
        compiler: dartSass
      },
    };
    return gulp
      .src("scss/*.scss")
      .pipe(sourcemaps.init())
      .pipe(sass({fiber:Fiber}).on('error', sass.logError))
      .pipe(autoprefixer({
              cascade: false
          }))
      .pipe(cleancss({format: "keep-breaks"}))
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest("css"))
  });

  gulp.task('browser-sync', function() {
    browserSync.init({
        watch: true,
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series('mall'));
});

gulp.task(
  "default",
  gulp.parallel("mall", "watch", "browser-sync")
);