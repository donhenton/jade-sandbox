var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var tap = require('gulp-tap');
var nodemon = require('gulp-nodemon');
var path = require('path');
var gutil = require('gulp-util');
//var runSequence = require('run-sequence');
var exec = require('child_process').exec;
//var rimraf = require('gulp-rimraf');
//var rev = require("gulp-rev");
//var revReplace = require("gulp-rev-replace");
var appDependencies = require('./package.json').dependencies;
var buildDir = '.';
var publicDir = buildDir + '/public';
global._publicDir = publicDir;




gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(concat('style.css'))
            // .pipe(uglifycss())
            .pipe(gulp.dest('./public/stylesheets/'))
            .on('finish', function ( ) {
                gutil.log("processing change in css");
                //   livereload.reload(pageURL);
            });

});


var watchItems = ['./views/**/*.jade', './routes/**/*.js','./public/**/*.css'];
var pageURL = 'http://localhost:3000';

/*
 * start server
 */
gulp.task('server-start', function (cb) {
    exec('node ./bin/www.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('watch', function () {

    livereload.listen();

    watch(watchItems, function (events, done) {


        console.log("processing change in watched items");
        livereload.reload(pageURL);

    });

    watch('./sass/**/*.scss', function (events, done) {

        gulp.src('./sass/**/*.scss')
                .pipe(sass().on('error', sass.logError))
                .pipe(concat('style.css'))
                // .pipe(uglifycss())
                .pipe(gulp.dest('./public/stylesheets/'))
                .on('finish', function ( ) {
                    console.log("processing change in css");
                   // livereload.reload(pageURL);
                });

    });

});

gulp.task('init', ['server-start', 'watch']);
