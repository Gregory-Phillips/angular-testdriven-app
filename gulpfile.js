/* global require */

(function () {
    'use strict';

    var gulp = require('gulp'),
        browserSync = require('browser-sync');

    gulp.task('serve', function () {
        browserSync.init({
            notify: false,
            port: 8080,
            server: {
                baseDir: [ 'app'],
                routes: {
                    'bower_components': 'bower_components'
                }
            }
        });
    });
}());
