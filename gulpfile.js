'use strict';

//Load Gulp module
const gulp = require('gulp');

//Define task
gulp.task("hello", function() {
  console.log("Hello");
});

//Default task

gulp.task("default", ["hello"], function() {
  console.log("This is the default task!");
});
