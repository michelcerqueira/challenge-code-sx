    /**
     * Created by Michel on 11/10/2016.
     */
    var gulp = require("gulp"),
         sass = require("gulp-sass"),
         concat = require("gulp-concat"),
        uglify = require("gulp-uglify"),
        clean = require("gulp-clean"),
        usemin = require("gulp-usemin"),
        cssmin = require("gulp-cssmin"),
        whatch = require("watch"),
        csslint = require('gulp-csslint');




    gulp.task("sass",function(){
      return  gulp.src("./source/sass/**/*style.scss")
            .pipe(sass().on('error',sass.logError))
            .pipe(gulp.dest("./source/css/"))
    })
    gulp.task("copy",function(){
        return gulp.src(["source/**","source/*.html"])
            .pipe(gulp.dest("./public"))
    })
    gulp.task("clean",function(){
       return gulp.src("public/sass")
            .pipe(clean());
    })



    gulp.task("usemin",function(){
       return  gulp.src("public/**/*.html")
            .pipe(usemin({
                'js':[uglify],
                'css':[cssmin]
            }))
            .pipe(gulp.dest('public/'))
    })


    gulp.task("default",['sass','copy'],function(){
        gulp.start('usemin','clean')
    })
    gulp.task('css', function() {
        gulp.src('source/css/*.css')
            .pipe(csslint())
            .pipe(csslint.formatter());
    });


    gulp.task('watch',["default"], function() {
        gulp.watch('source/sass/**/*.scss', ['default']);
    })


