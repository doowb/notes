
/*
 * Inspired by:
 *  https://github.com/gruntjs/grunt/issues/1141
 *  https://github.com/cowboy/dotfiles/blob/master/bin/count-commits
 */

var Promise = require('bluebird');

var exec = Promise.promisify(require('child_process').exec);
var fs = require('fs');
var path = require('path');

var file = require('fs-utils');
var _ = require('lodash');

var base = '../../../assemble/';
var dirs = fs.readdirSync(base);
dirs = _.filter(dirs, file.isdir);

var command = 'git log --format="%aE%x09%aN"';

Promise.reduce(dirs, function (counts, dir) {
  counts = counts || {};
  var dirpath = path.join(base, dir);

  if (!file.exists(path.join(dirpath, '.git'))) {
    return counts;
  }

  var options = {
    cwd: dirpath
  };
  return exec(command, options).then(function (stdout, stderr) {
    var lines = Array.isArray(stdout) ? stdout[0].split('\n') : stdout.split('\n');
     _.forEach(lines, function (line) {
      var tokens = line.split('\t');
      var email = tokens[0];
      var name = tokens[1];
      if (email in counts) {
        counts[email].count++;
      } else {
        counts[email] = {
          email: email,
          name: name,
          count: 1
        };
      }
    });
    return counts;
  }).catch(function (error) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}, {}).then(function (counts) {
  console.log('counts', _.values(counts).sort(function (a, b) { return b.count - a.count; }));
});



