
var Promise = require('bluebird');
var fs = require('fs');

var readFile = Promise.promisify(fs.readFile);

readFile('file.json').then(JSON.parse).then(function(val) {
  console.log(val);
})
.catch(SyntaxError, function (e) {
  console.error('invalid json in file');
})
.catch(function (e) {
  console.error('unable to read file');
});


fs = Promise.promisifyAll(fs);

fs.readFileAsync('file.json').then(JSON.parse).then(function (json) {
  console.log('Successful json');
}).catch(SyntaxError, function (e) {
  console.error('file contains invalid json');
}).catch(Promise.RejectionError, function (e) {
  console.error('unable to read file, because: ', e.message);
});
