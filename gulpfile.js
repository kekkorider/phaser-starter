var gulp       = require('gulp'),
    watch      = require('gulp-watch'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'), 
    sourcemaps = require('gulp-sourcemaps'),
    pump       = require('pump'),
    jshint     = require('gulp-jshint'),
    del        = require('del');

var PATHS = {
    js: [
        'game/states/Boot.js', 
        'game/states/Preload.js', 
        'game/states/MainMenu.js', 
        'game/states/Game.js', 
        'game/Main.js'
    ], 
    libs: [
        'bower_components/phaser/build/phaser.min.js'
    ], 
    html: [
        'index.html'
    ], 
    assets: [
        'assets/*.*'
    ]
}

gulp.task('default', ['watch']);

gulp.task('build', ['html', 'assets', 'libs', 'jshint'], function(cb) {

    pump([
        gulp.src(PATHS.js), 
        sourcemaps.init(), 
        concat('bundle.js'), 
        sourcemaps.write('/'), 
        gulp.dest('build/game'), // build folder
        gulp.dest('game') // dev folder
    ]);

    pump([
        gulp.src(PATHS.js), 
        sourcemaps.init(), 
        concat('bundle.min.js'), 
        uglify(), 
        sourcemaps.write('/'), 
        gulp.dest('build/game'), // build folder
        gulp.dest('game') // dev folder
    ], cb);

});

gulp.task('jshint', function() {
    return gulp.src(PATHS.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('libs', function() {
    gulp.src(PATHS.libs)
        .pipe(gulp.dest('build/game/libs')) // build folder
        .pipe(gulp.dest('game/libs')); // dev folder
});

gulp.task('html', function() {
    gulp.src(PATHS.html)
        .pipe(gulp.dest('build'));
});

gulp.task('assets', function() {
    gulp.src(PATHS.assets)
        .pipe(gulp.dest('build/assets'));
});

gulp.task('clean', function() {
    return del([
        'build'
    ]);
});

gulp.task('watch', function() {
    gulp.watch(PATHS.js, ['build']);
});