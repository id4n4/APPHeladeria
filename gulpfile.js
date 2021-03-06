const {src,dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;


function js(){
  return src("./js/**/*.js")
  .pipe(concat("main.min.js"))
  .pipe(uglify())
  .pipe(dest("./js"));
}

function css() {
    // place code for your default task here
    return src("./sass/**/*.scss")
    .pipe(sass())
    .pipe(rename('main.min.css'))
    .pipe(cleanCSS())
    .pipe(dest("./css"));
  }

exports.css = css;
exports.js = js;
exports.default = ()=>{};