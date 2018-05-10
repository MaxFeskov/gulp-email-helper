const { $ } = global;
const { taskPath: path } = global;

const gulp = require('gulp');
const del = require('del');

const gulpWatch = gulp.watch;

gulp.task('clean:html', () => del(`${path.build.html}*.template`));

gulp.task('build:html', () =>
  gulp
    .src(path.src.html)
    .pipe($.plumber({ errorHandler: global.errorHandler }))
    .pipe($.pug({ basedir: '.' }))
    .pipe($.ext_replace('.template'))
    .pipe(gulp.dest(path.build.html)));

gulp.task('dev:html', gulp.series('build:html'));

gulp.task('watch:html', () => gulpWatch(path.watch.html, gulp.series('dev:html')));
