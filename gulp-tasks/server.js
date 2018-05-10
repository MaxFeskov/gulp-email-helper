const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('server:init', () => {
  browserSync.init({
    port: 8080,
    server: { baseDir: './' },
    reloadDelay: 100,
  });
});

gulp.task('server:reload', (done) => {
  browserSync.reload();
  done();
});
