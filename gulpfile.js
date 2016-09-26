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
    ]
}

gulp.task('default', ['watch']);

gulp.task('build', ['libs', 'jshint'], function(cb) {

    pump([
        gulp.src(PATHS.js), 
        sourcemaps.init(), 
        concat('bundle.js'), 
        sourcemaps.write('/'), 
        gulp.dest('build')
    ]);

    pump([
        gulp.src(PATHS.js), 
        sourcemaps.init(), 
        concat('bundle.min.js'), 
        uglify(), 
        sourcemaps.write('/'), 
        gulp.dest('build')
    ], cb);

});

gulp.task('jshint', function() {
    return gulp.src(PATHS.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('libs', function() {
    gulp.src(PATHS.libs)
        .pipe(gulp.dest('build/libs'));
});

gulp.task('clean', function() {
    return del([
        'build'
    ]);
});

gulp.task('watch', function() {
    gulp.watch(PATHS.js, ['build']);
});