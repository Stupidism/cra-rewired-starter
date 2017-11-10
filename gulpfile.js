'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var gitRevision = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim().substr(0, 8);
var path = require('path');

var config = {
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  params: {
    Bucket: process.env.AWS_S3_BUCKET,
  },
  distributionId: process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID,
};

gulp.task('upload', function() {
  var publisher = $.awspublish.create(config);

  return gulp.src([
    path.join(__dirname, '/build/**/*'), '!' + path.join(__dirname, '/build/index.html')])
    .pipe(publisher.publish())
    .pipe($.awspublish.reporter());
});

gulp.task('uploadIndex', function() {
  var clouldfrontInstance = $.cloudfront({
    key: config.accessKeyId,
    secret: config.secretAccessKey,
    region: config.region,
    distributionId: config.distributionId,
    patternIndex: /^\/index.*\.html(\.gz)*$/gi,
  });
  var publisher = $.awspublish.create(config);

  return gulp.src(path.join(__dirname, '/build/index.html'))
    .pipe($.rename('index-' + new Date().toJSON().substr(0, 10) + '-' + gitRevision + '.html'))
    .pipe(publisher.publish())
    .pipe($.awspublish.reporter())
    .pipe(clouldfrontInstance);
});

gulp.task('deploy', function(cb) {
  runSequence('upload', 'uploadIndex', cb);
});
