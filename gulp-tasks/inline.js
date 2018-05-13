const { $ } = global;
const { taskPath: path } = global;

const gulp = require('gulp');
const del = require('del');

const gulpWatch = gulp.watch;

gulp.task('clean:inline', () => del(`${path.build.inline}*.html`));

gulp.task('build:inline', () =>
  gulp
    .src(path.src.inline)
    .pipe($.plumber({ errorHandler: global.errorHandler }))
    .pipe($.inline_css({
      applyWidthAttributes: true,
      applyTableAttributes: true,
      removeHtmlSelectors: true,
    }))
    .pipe($.prettydiff({
      lang: 'html',
      mode: 'beautify',
      inchar: ' ',
      insize: 2,
      force_indent: true,
      wrap: 0,
      crlf: true,
      textpreserve: true,
      spaceclose: true,
      newline: true,
    }))
    .pipe($.eol(path.src.lineending))
    .pipe($.insert.append(path.src.lineending))
    .pipe($.htmllint())
    .pipe($.ext_replace('.html'))
    .pipe(gulp.dest(path.build.inline))
    .pipe($.ext_replace('.mail'))
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(path.build.inline)));

gulp.task('dev:inline', gulp.series('build:inline'));

gulp.task('watch:inline', () =>
  gulpWatch(path.watch.inline, gulp.series('dev:inline', 'server:reload')));
