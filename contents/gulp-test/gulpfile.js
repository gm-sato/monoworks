// gulpプラグインの読み込み
const gulp = require("gulp");
const pug = require("gulp-pug"); //pug
const rename = require("gulp-rename"); //ファイル出力時にファイル名変更

const sass = require("gulp-dart-sass"); //scss
const postcss = require("gulp-postcss"); //生成されたcssを操作
const autoprefixer = require("autoprefixer"); //ベンダープレフィックスを自動付与

const plumber = require("gulp-plumber"); //エラー時の強制終了を防止
const notify = require("gulp-notify"); //デスクトップ通知
const browserSync = require("browser-sync").create(); //変更後ブラウザリロード

const del = require("del"); //ファイル削除用

const srcBase = "./src";
const publicBase = "./public";
const paths = {
  'scss': [{
    'src': srcBase + 'assets/scss/**/*.scss',
    'public': publicBase + 'assets/css',
  }, ],
  'img': [{
    'src': srcBase + 'assets/img/**/*',
    'public': publicBase + 'assets/img',
  }, ],
  'js': [{
    'src': srcBase + 'assets/js/**/*.js',
    'public': publicBase + 'assets/js',
  }, ],
};

const srcPath = {
  'pug': srcBase + '/**/*.pug',
  '_pug': '!' + srcBase + '/_include/**/*.pug',
};

const publicPath = {
  'html': publicBase + '/**/*.html',
};
const clean = () => {
  return del([publicBase + '/**'], {
    force: true
  });
};

/* sass */
const cssSass = () => {
  return paths.scss.map(path => {
    return gulp.src(path.src, {
        sourcemaps: false
      })
      .pipe(
        plumber({
          errorHandler: notify.onError("Error: <%= error.message %>")
        }))
      .pipe(sass({
        outputStyle: "expanded"
      }))
      .pipe(gulp.dest(path.public))
      .pipe(browserSync.stream())
      .pipe(notify({
        message: "Sassをコンパイルしました!",
        onLast: true
      }))
  });
}

/* pug */
const pugFunc = () => {
  return gulp
    .src([srcPath.pug, srcPath._pug])
    .pipe(pug())
    .pipe(rename({
      extname: ".html"
    }))
    .pipe(gulp.dest(publicBase))
}

const imgFunc = () => {
  return paths.img.map(path => {
    return gulp.src(path.src)
      .pipe(gulp.dest(path.public))
  });
}

const jsFunc = () => {
  return paths.js.map(path => {
    return gulp.src(path.src)
      .pipe(gulp.dest(path.public))
  });
}

const browserSyncFunc = () => {
  browserSync.init(browserSyncOption);
}

const browserSyncOption = {
  server: publicBase
}

const browserSyncReload = (done) => {
  browserSync.reload();
  done();
}

const watchFiles = () => {
  gulp.watch(srcPath.scss, gulp.series(cssSass))
  gulp.watch(srcPath.img, gulp.series(imgFunc, browserSyncReload))
  gulp.watch(srcPath.pug, gulp.series(pugFunc, browserSyncReload))
  gulp.watch(srcPath.js, gulp.series(jsFunc, browserSyncReload))
}

exports.default = gulp.series(
  clean,
  gulp.parallel(cssSass, pugFunc, imgFunc, jsFunc),
  gulp.parallel(watchFiles, browserSyncFunc)
);

exports.build = gulp.series(
  clean,
  gulp.parallel(cssSass, pugFunc, imgFunc, jsFunc)
);
