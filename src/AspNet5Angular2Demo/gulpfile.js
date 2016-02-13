/// <binding BeforeBuild='moveToLibs' />

var gulp = require('gulp');

var paths = {
    npmSrc: "./node_modules/",
    libTarget: "./wwwroot/libs/"
};

var libsToMove = [
    //Adding css
    paths.npmSrc + 'bootstrap/**/*.*',
    paths.npmSrc + 'bootswatch/**/*.*',
    paths.npmSrc + 'font-awesome/**/*.*',

    //Adding js
    paths.npmSrc + 'angular2/bundles/angular2-polyfills.js',
    paths.npmSrc + 'systemjs/dist/system.js',
    paths.npmSrc + 'systemjs/dist/system-polyfills.js',
    paths.npmSrc + 'rxjs/bundles/Rx.js',
    paths.npmSrc + 'angular2/bundles/angular2.dev.js',
    paths.npmSrc + 'es6-shim/es6-shim.min.js'
    
];
gulp.task('moveToLibs', function () {
    return gulp.src(libsToMove, { base: './node_modules/' }).pipe(gulp.dest(paths.libTarget));
});