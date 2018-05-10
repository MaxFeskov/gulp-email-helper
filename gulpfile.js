global.$ = require('gulp-load-plugins')({ renameFn(name) {
  return name.replace('gulp-', '').replace(/-/g, '_');
} });

global.errorHandler = (err) => {
  const { $ } = global;

  $.notify.onError({
    title: `Gulp error in ${err.plugin}`,
    message: err.toString(),
  })(err);
};

global.taskPath = require('./config').path;

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp-tasks', { recurse: true });

gulp.task('clean', gulp.parallel('clean:image', 'clean:html', 'clean:inline', 'clean:style'));

gulp.task(
  'build',
  gulp.series('clean', 'build:image', 'build:style', 'build:html', 'build:inline'),
);

gulp.task('watch', gulp.parallel('watch:image', 'watch:style', 'watch:html', 'watch:inline'));

gulp.task('dev', gulp.series('dev:image', 'dev:style', 'dev:html', 'dev:inline'));

gulp.task('default', gulp.series('dev', gulp.parallel('server:init', 'watch')));
