/* function testgulp(cb) {
    console.log("teste")
    cb()
}
exports.default = testgulp */


const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))

function styles() {
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./dist/css"))
}

exports.default = styles
exports.watch = function () {
    /* arquivos observados e 
    funções executadas */
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
}