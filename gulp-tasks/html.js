const { $ } = global;
const { taskPath: path } = global;

const gulp = require('gulp');
const del = require('del');

const gulpWatch = gulp.watch;

const pugOptions = {
  filters: {
      tr: function(text, options) {
          tr&attributes(options)
              return text;
      },
      td: function(text, options) {
          td&attributes(options)
              return text;
      },
      div: function(text, options) {
          div&attributes(options)
              return text;
      },
      span: function(text, options) {
          span&attributes(options)
              return text;
      },
  },
};

gulp.task('clean:html', () => del(`${path.build.html}*.template`));

gulp.task('build:html', () =>
  gulp
    .src(path.src.html)
    .pipe($.plumber({ errorHandler: global.errorHandler }))
    .pipe($.pug({
      basedir: '.',
      filters: pugOptions.filters,
    }))
    .pipe($.ext_replace('.template'))
    .pipe(gulp.dest(path.build.html)));

gulp.task('dev:html', gulp.series('build:html'));

gulp.task('watch:html', () => gulpWatch(path.watch.html, gulp.series('dev:html')));
