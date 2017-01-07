var gulp = require("gulp");
var source = require("vinyl-source-stream");
var browserify = require("browserify");
var reactify = require("reactify")

gulp.task("browserify", function(){
	browserify("./src/js/bundle.js")
		.transform("reactify")
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("dist/js"))
})

gulp.task("copy", function(){
	gulp.src("./src/css/*.*")
		.pipe(gulp.dest("dist/css"));
	gulp.src("./src/index.html")
		.pipe(gulp.dest("dist"));
})

gulp.task("default", ["browserify", "copy"], function(){
	gulp.watch("./src/**/*.*", ["browserify", "copy"], { awaitWriteFinish: true })
})