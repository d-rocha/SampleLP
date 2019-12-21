const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const svgmin = require("gulp-svgmin");
const cleanCss = require("gulp-clean-css");

gulp.task("build-img", () => {
  gulp
    .src("src/assets/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("src/assets"));
});

gulp.task("build-svg", () => {
  gulp
    .src("src/assets/**/*")
    .pipe(svgmin())
    .pipe(gulp.dest("src/assets"));
});

gulp.task("minify-css", () => {
  gulp
    .src("src/css/*.css")
    .pipe(cleanCss({ compatibility: "ie8" }))
    .pipe(gulp.dest("src/css/*.min.css"));
});
