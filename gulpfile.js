const {src,dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");


function css() {
    // place code for your default task here
    return src("./sass/**/*.scss")
    .pipe(sass())
    .pipe(rename('main.min.css'))
    .pipe(cleanCSS())
    .pipe(dest("./css"));
  }

exports.css = css;
exports.default = ()=>{};