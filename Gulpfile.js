var gulp = require('gulp');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  browserify('./src/transform.js', {
    standalone: 'Katakana'
  })
    .bundle()
    .pipe(source('katakana.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./dist'));
});
