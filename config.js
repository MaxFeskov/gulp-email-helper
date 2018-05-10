const srcPath = {
  locale: 'ru',
  lineending: '\r\n',
  data: './src/data/',
  html: ['./src/pug/*.pug', '!./src/pug/_*.pug'],
  inline: './*.template',
  image: ['./src/img/**/*.*', '!src/img/images/**/*.*'],
  style: './src/scss/*.scss',
};

const buildPath = {
  compassHelper: './src/scss/helpers/',
  html: './',
  inline: './',
  image: './build/img/',
  style: './build/css/',
};

let watchPath = {
  html: ['./src/pug/**/*.pug', './src/data/**/*.json'],
  inline: ['./*.template', './build/css/*.css', './build/img/*.*'],
  script: './src/js/**/*.js',
  style: './src/scss/**/*.scss',
};

// src path is default watch path
watchPath = Object.assign({}, srcPath, watchPath);

module.exports = { path: {
  build: buildPath,
  src: srcPath,
  watch: watchPath,
} };
