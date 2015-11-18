'use strict';

var gulp        = require('gulp'),
		sass        = require('gulp-ruby-sass'),
		jshint      = require('gulp-jshint'),
		jade        = require('gulp-jade'),
		browserSync = require('browser-sync'),
		sourcemaps  = require('gulp-sourcemaps')
	;

// Sass task
gulp.task('sass', function() {
	return sass('sass/styles.scss', {sourcemap: true})
			.on('error', sass.logError)
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('css'))
			.pipe(browserSync.stream())
		;
});

// JShint task
gulp.task('lint', function() {
	return gulp.src('js/**/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'))
		;
});

// Reload browser after lint task complete
gulp.task('js-watch', ['lint'], browserSync.reload);

// Compile Jade
gulp.task('templates', function() {
	return gulp.src(['jade/index.jade'])
			.pipe(jade({
				pretty: true
			}))
			.pipe(gulp.dest('./'))
		;
});

// BrowserSync
gulp.task('serve', function() {

	browserSync.init({
		server: './'
	});

	gulp.watch('jade/**/*.jade', ['templates']);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('js/**/*.js', ['js-watch']);

});

// Default task
gulp.task('default', ['serve']);