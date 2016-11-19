    'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var plumber = require('gulp-plumber');
var jetpack = require('fs-jetpack');
var bundle = require('./bundle');
var utils = require('./utils');

var projectDir = jetpack;
var srcDir = jetpack.cwd('./src');
var destDir = jetpack.cwd('./app');
var scriptsDir = destDir.cwd('scripts');

var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task('ts', function(){

    tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(srcDir.path()));
})

gulp.task('bundle', function () {
     var beepOnError = function (done) {
        return function (err) {
            if (err) {
                utils.beepSound();
            }
            done(err);
        };
    };
    //gulp.start('ts');

    return Promise.all([
        bundle(srcDir.path('background.js'), destDir.path('background.js')),
        bundle(srcDir.path('app.js'), destDir.path('app.js')),
        bundle(jetpack.path('semantic/dist/semantic.min.js'), scriptsDir.path('semantic.min.js')),
        gulp.src(srcDir.path('main.js')).pipe(gulp.dest(destDir.path('scripts'))),
        gulp.src(srcDir.path('task.js')).pipe(gulp.dest(destDir.path('scripts'))),
        //bundle( scriptsDir.path('main.js')),
        // bundle(srcDir.path('task.js'), scriptsDir.path('task.js'))
    ]);
});

gulp.task('less', function () {
    return gulp.src(srcDir.path('stylesheets/main.less'))
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest(destDir.path('stylesheets')));
});

gulp.task('semantic', function () {
    return gulp.src('./semantic/dist/semantic.min.css')
        .pipe(gulp.dest(destDir.path('stylesheets')));
});

gulp.task('environment', function () {
    var configFile = 'config/env_' + utils.getEnvName() + '.json';
    projectDir.copy(configFile, destDir.path('env.json'), { overwrite: true });
});

gulp.task('watch', function () {
    var beepOnError = function (done) {
        return function (err) {
            if (err) {
                utils.beepSound();
            }
            done(err);
        };
    };

    // watch('tssrc/*.ts', batch(function (events, done) {
    //     gulp.start('ts', beepOnError(done));
    // }));

    watch('src/**/*.js', batch(function (events, done) {
        gulp.start('bundle', beepOnError(done));
    }));
    watch('src/**/*.less', batch(function (events, done) {
        gulp.start('less', beepOnError(done));
    }));
    watch('semantic/dist/*.css', batch(function (events, done) {
        gulp.start('semantic', beepOnError(done));
    }));
});

gulp.task('build', ['bundle', 'less', 'semantic', 'environment']);
